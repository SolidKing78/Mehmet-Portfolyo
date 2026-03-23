"use client";

import {
  certifications,
  cvPdfHref,
  education,
  personalMeta,
  timeline,
} from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function ExperienceSection() {
  return (
    <section id="deneyim" className="scroll-mt-8 lg:scroll-mt-12">
      <Reveal>
        <p className="font-mono text-[11px] font-medium lowercase tracking-[0.28em] text-[var(--color-accent)]">
          deneyim
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          Kronoloji
        </h2>
      </Reveal>

      <div className="relative mt-12 border-l border-[var(--color-border-strong)] pl-8">
        {timeline.map((job, i) => (
          <Reveal key={job.id} delay={0.06 * i}>
            <div className="relative pb-14 last:pb-0">
              <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full border border-[var(--color-accent-line)] bg-[var(--color-canvas)]" />
              <p className="font-mono text-[10px] tracking-wider text-[var(--color-accent)] uppercase">
                {job.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-fg)]">
                {job.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{job.org}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-fg-soft)]">
                {job.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-[var(--color-border)] pt-14 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-[11px] font-medium lowercase tracking-[0.28em] text-[var(--color-accent)]">
            eğitim
          </p>
          <ul className="mt-6 space-y-6">
            {education.map((e) => (
              <li key={e.institution}>
                <p className="font-medium text-[var(--color-fg)]">{e.institution}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{e.detail}</p>
                <p className="mt-1 font-mono text-[10px] text-[var(--color-accent)]">
                  {e.period}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="font-mono text-[11px] font-medium lowercase tracking-[0.28em] text-[var(--color-accent)]">
            sertifikalar
          </p>
          <ul className="mt-6 space-y-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="text-sm leading-snug text-[var(--color-fg-soft)]"
              >
                — {c.name}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-md border border-[var(--color-border)] bg-[var(--color-panel)]/80 p-5 font-mono text-[10px] leading-relaxed text-[var(--color-muted)]">
            <p>Doğum: {personalMeta.birth}</p>
            <p className="mt-1">Ehliyet: {personalMeta.license}</p>
            <p className="mt-1">Dil: {personalMeta.language}</p>
            <p className="mt-1">Askerlik: {personalMeta.military}</p>
            <p className="mt-2 text-[var(--color-fg-soft)]">{personalMeta.address}</p>
            <a
              href={cvPdfHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[var(--color-accent)] hover:underline"
            >
              Tam CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
