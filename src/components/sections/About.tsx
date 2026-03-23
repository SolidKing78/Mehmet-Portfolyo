"use client";

import { about } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="hakkimda" className="scroll-mt-24 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-accent)] uppercase">
                Hakkımda
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
                {about.title}
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6 lg:col-span-7">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
