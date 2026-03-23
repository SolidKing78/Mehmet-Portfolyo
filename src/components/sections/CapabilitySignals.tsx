"use client";

import { capabilitySignals } from "@/content/site";
import type { SignalStrength } from "@/content/types";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const widthClass: Record<SignalStrength, string> = {
  1: "w-[32%]",
  2: "w-[58%]",
  3: "w-[92%]",
};

export function CapabilitySignals() {
  return (
    <section id="uzmanlik" className="scroll-mt-8 lg:scroll-mt-12">
      <Reveal>
        <p className="font-mono text-[11px] font-medium lowercase tracking-[0.28em] text-[var(--color-accent)]">
          uzmanlık
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          Yetkinlik alanları
        </h2>
        <p className="mt-3 max-w-xl font-mono text-[11px] leading-relaxed text-[var(--color-muted)]">
          Çizgi uzunluğu göreli derinlik gösterir; yüzde veya sıralama iddiası değildir.
        </p>
      </Reveal>

      <div className="mt-10 space-y-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)]/80 p-6 sm:p-8">
        {capabilitySignals.map((c, i) => (
          <Reveal key={c.id} delay={0.05 * i}>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-[var(--color-fg)]">
                  {c.label}
                </span>
                <span className="max-w-[14rem] text-right font-mono text-[10px] text-[var(--color-muted)] sm:max-w-xs">
                  {c.note}
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-[var(--color-border-strong)]">
                <div
                  className={cn(
                    "h-px bg-gradient-to-r from-[var(--color-accent-line)] to-transparent",
                    widthClass[c.strength],
                  )}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
