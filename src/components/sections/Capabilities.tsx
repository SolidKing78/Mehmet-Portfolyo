"use client";

import { capabilityGroups } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Capabilities() {
  return (
    <section
      id="yetenekler"
      className="scroll-mt-24 border-b border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-accent)] uppercase">
            Yetenek mimarisi
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Etiket listesi değil, sistem haritası
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((group, i) => (
            <Reveal key={group.id} delay={0.05 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--color-fg)]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
