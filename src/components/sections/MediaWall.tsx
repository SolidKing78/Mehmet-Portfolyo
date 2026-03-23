"use client";

import { curatedWallImages } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SmartImage } from "@/components/ui/SmartMedia";

export function MediaWall() {
  return (
    <section
      id="medya"
      className="scroll-mt-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-accent)] uppercase">
            Medya duvarı
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Kürasyonlu kanıt
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-[var(--color-muted)]">
            Görseller <code className="font-mono text-[var(--color-accent)]">public/Projeler</code>{" "}
            altından yüklenir. Yeni dosya eklediğinizde{" "}
            <code className="font-mono text-[var(--color-accent)]">site.ts</code> içindeki{" "}
            <span className="text-[var(--color-fg)]">curatedWallImages</span> listesini
            güncelleyin.
          </p>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {curatedWallImages.map((item, i) => (
            <Reveal key={item.src} delay={0.03 * (i % 6)}>
              <figure className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas)]">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                  <SmartImage
                    src={item.src}
                    alt={item.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-[var(--color-border)] px-3 py-2 text-[11px] text-[var(--color-muted)]">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
