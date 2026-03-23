"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
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
  poster?: string;
  className?: string;
  caption?: string;
};

export function SmartVideo({ src, poster, className, caption }: SmartVideoProps) {
  return (
    <figure
      className={cn(
        "relative flex h-full min-h-[12rem] flex-col overflow-hidden bg-black",
        className,
      )}
    >
      <video
        className="min-h-0 w-full flex-1 object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} />
      </video>
      {caption ? (
        <figcaption className="shrink-0 border-t border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2 font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
