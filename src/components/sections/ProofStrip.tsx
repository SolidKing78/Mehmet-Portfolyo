"use client";

import { proofChips } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function ProofStrip() {
  return (
    <section
      className="border-b border-[var(--color-border)] bg-[var(--color-surface)]"
      aria-label="Öne çıkan yetkinlikler"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase">
            Kanıt odağı
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
          {proofChips.map((chip, i) => (
            <Reveal key={chip.label} delay={0.04 * i}>
              <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-canvas)] px-4 py-2 text-xs font-medium text-[var(--color-fg)]">
                {chip.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
