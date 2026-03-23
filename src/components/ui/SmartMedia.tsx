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
          "flex min-h-[12rem] items-center justify-center border border-[var(--color-border)] bg-[var(--color-surface)] text-center text-xs tracking-wide text-[var(--color-muted)] uppercase",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        Görsel yüklenemedi
        <span className="sr-only">: {alt}</span>
        <span className="mt-2 block max-w-[14rem] font-mono text-[10px] normal-case">
          Dosyayı{" "}
          <code className="text-[var(--color-accent)]">{src}</code> konumuna
          ekleyin
        </span>
      </div>
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
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      {caption ? (
        <figcaption className="shrink-0 border-t border-[var(--color-border)] px-2 py-1.5 text-[11px] text-[var(--color-muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
