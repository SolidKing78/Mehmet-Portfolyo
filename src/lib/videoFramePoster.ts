/** Videodan tek kare yakalayıp JPEG data URL üretir; poster önbelleği paylaşılır. */

const posterCache = new Map<string, string>();

export function peekCachedPoster(src: string): string | undefined {
  return posterCache.get(src);
}

export function cachePoster(src: string, dataUrl: string): void {
  posterCache.set(src, dataUrl);
}

function captureFrameFromVideo(video: HTMLVideoElement): string | null {
  const w = video.videoWidth;
  const h = video.videoHeight;
  if (!w || !h) return null;

  const maxW = 1280;
  const scale = w > maxW ? maxW / w : 1;
  const cw = Math.round(w * scale);
  const ch = Math.round(h * scale);

  const canvas = document.createElement("canvas");
  canvas.width = cw;
  canvas.height = ch;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  try {
    ctx.drawImage(video, 0, 0, cw, ch);
    return canvas.toDataURL("image/jpeg", 0.85);
  } catch {
    return null;
  }
}

function seekTimeForPoster(video: HTMLVideoElement): number {
  const d = video.duration;
  if (!Number.isFinite(d) || d <= 0) return 0.1;
  return Math.min(Math.max(0.05, d * 0.04), d * 0.25);
}

/**
 * Videoda kısa bir noktaya sarar, bir kare yakalar, `currentTime`ı 0’a alır.
 * İptal çağrılırsa bekleyen dinleyiciler kaldırılır.
 */
export function scheduleCaptureFromVideoElement(
  video: HTMLVideoElement,
  onResult: (dataUrl: string | null) => void,
): () => void {
  let finished = false;

  const done = (url: string | null) => {
    if (finished) return;
    finished = true;
    try {
      video.currentTime = 0;
    } catch {
      /* ignore */
    }
    onResult(url);
  };

  const onSeeked = () => {
    video.removeEventListener("seeked", onSeeked);
    if (finished) return;
    done(captureFrameFromVideo(video));
  };

  const startSeek = () => {
    video.addEventListener("seeked", onSeeked);
    try {
      video.currentTime = seekTimeForPoster(video);
    } catch {
      video.removeEventListener("seeked", onSeeked);
      done(null);
    }
  };

  const onLoadedMetadata = () => {
    video.removeEventListener("loadedmetadata", onLoadedMetadata);
    if (finished) return;
    startSeek();
  };

  if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
    startSeek();
  } else {
    video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
  }

  return () => {
    finished = true;
    video.removeEventListener("seeked", onSeeked);
    video.removeEventListener("loadedmetadata", onLoadedMetadata);
  };
}

/** Görünmeyen bir `<video>` ile kare yakalar; sonuç önbelleğe yazılır. */
export function capturePosterOffscreen(src: string): Promise<string | null> {
  if (typeof document === "undefined") return Promise.resolve(null);

  const cached = posterCache.get(src);
  if (cached) return Promise.resolve(cached);

  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.preload = "auto";
    video.src = src;

    let settled = false;
    let dispose: (() => void) | undefined;

    const finish = (url: string | null) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      dispose?.();
      video.removeEventListener("error", onError);
      video.removeAttribute("src");
      try {
        video.load();
      } catch {
        /* ignore */
      }
      if (url) posterCache.set(src, url);
      resolve(url);
    };

    const onError = () => finish(null);
    const timer = window.setTimeout(() => finish(null), 18000);

    video.addEventListener("error", onError, { once: true });

    dispose = scheduleCaptureFromVideoElement(video, (url) => finish(url));

    video.load();
  });
}
