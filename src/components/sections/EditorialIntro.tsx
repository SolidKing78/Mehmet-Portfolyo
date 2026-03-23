"use client";

import { executiveStatements } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function EditorialIntro() {
  return (
    <section id="ozet" className="scroll-mt-8 lg:scroll-mt-12">
      <Reveal>
        <p className="font-mono text-[11px] font-medium lowercase tracking-[0.28em] text-[var(--color-accent)]">
          özet
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--color-fg)] sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
          Üretim hatlarına yakın mühendislik yazılımı
        </h2>
      </Reveal>
      <ul className="mt-10 space-y-5">
        {executiveStatements.map((line, i) => (
          <Reveal key={i} delay={0.04 * i}>
            <li className="flex gap-4 border-l border-[var(--color-border-strong)] pl-5">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <p className="text-sm leading-relaxed text-[var(--color-fg-soft)] sm:text-[15px]">
                {line}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
