"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { VIDEO_POSTER_DEFAULT } from "@/lib/paths";
import {
  cachePoster,
  peekCachedPoster,
  scheduleCaptureFromVideoElement,
} from "@/lib/videoFramePoster";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SmartImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);

  if (failed) {
    return (
      <div
        className={cn(
          "min-h-[12rem] bg-[var(--color-panel)]",
          className,
        )}
        role="img"
        aria-label={alt}
      />
    );
  }

  if (src.startsWith("data:image")) {
    return (
      // data URL (videodan yakalanan kare); Next/Image bu src ile uyumlu değil
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn("object-cover", className)}
      sizes={sizes}
      onError={onError}
      priority={priority}
    />
  );
}

type SmartVideoProps = {
  src: string;
  /** Kare yakalama başarısız olursa kullanılır */
  poster?: string;
  className?: string;
  caption?: string;
};

function syncPlayOverlay(video: HTMLVideoElement): boolean {
  return video.paused && (video.currentTime < 0.05 || video.ended);
}

export function SmartVideo({ src, poster, className, caption }: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const basePoster = useMemo(
    () => peekCachedPoster(src) ?? poster ?? VIDEO_POSTER_DEFAULT,
    [src, poster],
  );
  const [capturedPoster, setCapturedPoster] = useState<string | null>(null);
  const posterUrl = capturedPoster ?? basePoster;
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);

  useEffect(() => {
    const cached = peekCachedPoster(src);
    if (cached) return;

    let dispose: (() => void) | undefined;
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      if (cancelled) return;
      const el = videoRef.current;
      if (!el) return;
      dispose = scheduleCaptureFromVideoElement(el, (url) => {
        if (cancelled) return;
        if (url) {
          cachePoster(src, url);
          setCapturedPoster(url);
        }
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      dispose?.();
    };
  }, [src, poster]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const sync = () => {
      setShowPlayOverlay(syncPlayOverlay(el));
    };

    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("timeupdate", sync);
    el.addEventListener("ended", sync);
    sync();

    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("timeupdate", sync);
      el.removeEventListener("ended", sync);
    };
  }, [src]);

  const onPlayOverlayClick = useCallback(() => {
    void videoRef.current?.play();
  }, []);

  return (
    <figure
      className={cn(
        "relative flex h-full min-h-[12rem] flex-col overflow-hidden bg-black",
        className,
      )}
    >
      <div className="relative min-h-0 flex-1">
        <video
          ref={videoRef}
          className="min-h-0 h-full w-full flex-1 object-cover"
          controls
          playsInline
          preload="auto"
          poster={posterUrl}
        >
          <source src={src} />
        </video>
        {showPlayOverlay ? (
          <button
            type="button"
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40 transition-colors hover:bg-black/50"
            onClick={onPlayOverlayClick}
            aria-label="Videoyu oynat"
          >
            <span className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-white/95 text-zinc-900 shadow-lg ring-2 ring-white/40">
              <Play className="ml-1 h-9 w-9" fill="currentColor" strokeWidth={0} aria-hidden />
            </span>
          </button>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="shrink-0 border-t border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2 font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
