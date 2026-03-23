"use client";

import { timeline } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function Timeline() {
  const reduce = useReducedMotion();

  return (
    <section
      id="deneyim"
      className="scroll-mt-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-accent)] uppercase">
            Deneyim
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Birikimli bir yörünge
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            Üretim temeli → CAD derinliği → otomasyon ve AI-native ürün
            inşası. Aşağıdaki kurum ve tarihleri CV’nizle birebir eşleştirin.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)] md:left-1/2 md:-ml-px"
            aria-hidden
          />
          <ol className="space-y-14">
            {timeline.map((entry, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={entry.id}
                  className="relative grid gap-6 md:grid-cols-2 md:gap-0 md:items-start"
                >
                  <div
                    className={
                      left
                        ? "md:col-start-1 md:row-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }
                  >
                    <Reveal delay={0.05 * i}>
                      <motion.div
                        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas)] p-6"
                        whileHover={
                          reduce
                            ? undefined
                            : {
                                borderColor: "rgba(34,211,238,0.25)",
                                transition: { duration: 0.2 },
                              }
                        }
                      >
                        <p className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] uppercase">
                          {entry.period}
                        </p>
                        <h3 className="font-display mt-3 text-xl font-semibold text-[var(--color-fg)]">
                          {entry.title}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--color-muted)]">
                          {entry.org}
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-[var(--color-fg)]">
                          {entry.summary}
                        </p>
                        <ul
                          className={
                            left
                              ? "mt-4 flex flex-wrap justify-end gap-2"
                              : "mt-4 flex flex-wrap gap-2"
                          }
                        >
                          {entry.focus.map((f) => (
                            <li
                              key={f}
                              className="rounded-full bg-[var(--color-accent-dim)] px-3 py-1 text-[11px] text-[var(--color-accent)]"
                            >
                              {f}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </Reveal>
                  </div>
                  <div
                    className="absolute top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-canvas)] md:left-1/2 md:block"
                    aria-hidden
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
