"use client";

import { useEffect, useMemo, useState } from "react";
import { VIDEO_POSTER_DEFAULT } from "@/lib/paths";
import { capturePosterOffscreen, peekCachedPoster } from "@/lib/videoFramePoster";

/** Video URL’sinden kapak JPEG’i üretir (önbellek + yükleme sırasında `VIDEO_POSTER_DEFAULT`). */
export function useVideoPosterFromSrc(videoSrc: string | null): string {
  const [bySrc, setBySrc] = useState<Record<string, string>>({});

  const result = useMemo(() => {
    if (!videoSrc) return VIDEO_POSTER_DEFAULT;
    return (
      peekCachedPoster(videoSrc) ?? bySrc[videoSrc] ?? VIDEO_POSTER_DEFAULT
    );
  }, [videoSrc, bySrc]);

  useEffect(() => {
    if (!videoSrc) return;
    if (peekCachedPoster(videoSrc)) return;

    let alive = true;
    capturePosterOffscreen(videoSrc).then((dataUrl) => {
      if (!alive || !dataUrl) return;
      setBySrc((prev) => (prev[videoSrc] ? prev : { ...prev, [videoSrc]: dataUrl }));
    });

    return () => {
      alive = false;
    };
  }, [videoSrc]);

  return result;
}
