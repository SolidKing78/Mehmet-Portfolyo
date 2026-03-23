"use client";

import { caseStudies } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SmartImage, SmartVideo } from "@/components/ui/SmartMedia";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function CaseStudies() {
  const reduce = useReducedMotion();

  return (
    <section id="projeler" className="scroll-mt-24 border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-accent)] uppercase">
            Seçili vaka çalışmaları
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Üretimde yaşayan sistemler, sunum değil.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Her proje; problem, bağlam, rol, teknoloji ve etki ekseninde
            ürün vaka çalışması formatında sunulur. Görseller PROJELER
            klasörünüzdeki gerçek medyayla değiştirilir.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className="grid gap-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[var(--color-muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[var(--color-border)]" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-accent)]">
                    {study.tagline}
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <dl className="mt-8 space-y-6 text-sm">
                    <div>
                      <dt className="font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
                        Problem
                      </dt>
                      <dd className="mt-2 leading-relaxed text-[var(--color-fg)]">
                        {study.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
                        Bağlam
                      </dt>
                      <dd className="mt-2 leading-relaxed text-[var(--color-muted)]">
                        {study.context}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
                        Rol
                      </dt>
                      <dd className="mt-2 leading-relaxed text-[var(--color-fg)]">
                        {study.role}
                      </dd>
                    </div>
                  </dl>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.04}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {study.media.map((m, mi) => (
                      <motion.div
                        key={`${study.slug}-${mi}`}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
                        whileHover={
                          reduce
                            ? undefined
                            : { y: -2, transition: { duration: 0.25 } }
                        }
                      >
                        {m.kind === "image" ? (
                          <SmartImage
                            src={m.src}
                            alt={m.alt}
                            sizes="(max-width: 1024px) 100vw, 35vw"
                          />
                        ) : (
                          <SmartVideo
                            src={m.src}
                            poster={m.poster}
                            caption={m.caption}
                            className="h-full"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
                        Teknolojiler
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {study.technologies.map((t) => (
                          <li
                            key={t}
                            className="rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-fg)]"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
                        Süreç
                      </p>
                      <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-[var(--color-muted)]">
                        {study.process.map((step) => (
                          <li key={step} className="leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                    <p className="font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
                      Etki
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--color-fg)]">
                      {study.impact.map((line) => (
                        <li key={line} className="leading-relaxed">
                          — {line}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 border-t border-[var(--color-border)] pt-6 text-sm leading-relaxed text-[var(--color-muted)]">
                      <span className="font-medium text-[var(--color-fg)]">
                        Stratejik mesaj:{" "}
                      </span>
                      {study.strategic}
                    </p>
                  </div>
                  <div className="mt-6 text-right">
                    <Link
                      href="#medya"
                      className="text-xs font-medium text-[var(--color-accent)] hover:underline"
                    >
                      İlgili medyayı gör →
                    </Link>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
