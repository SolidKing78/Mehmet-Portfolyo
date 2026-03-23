"use client";

import { credentials } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Credentials() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase">
            Eğitim ve kimlik
          </p>
          <h2 className="font-display mt-3 text-xl font-semibold text-[var(--color-fg)]">
            Özlü kayıtlar
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {credentials.map((c, i) => (
            <Reveal key={c.label} delay={0.05 * i}>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas)] p-5">
                <p className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] uppercase">
                  {c.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {c.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
