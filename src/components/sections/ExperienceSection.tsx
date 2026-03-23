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
    <section id="deneyim" className="scroll-mt-6 lg:scroll-mt-10">
      <Reveal>
        <span className="font-mono text-[9px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
          experience
        </span>
        <h2 className="mt-5 font-display text-[2.25rem] leading-[1.08] tracking-[-0.02em] text-[var(--color-fg)] italic sm:text-[2.8rem]">
          Kronoloji
        </h2>
      </Reveal>

      {/* timeline */}
      <div className="relative mt-12 border-l border-[var(--color-border-strong)]">
        {timeline.map((job, i) => (
          <Reveal key={job.id} delay={0.05 * i}>
            <div className="relative pb-12 pl-7 last:pb-0">
              <span className="absolute -left-[5px] top-[6px] h-[10px] w-[10px] rounded-full border-[2px] border-[var(--color-accent)]/50 bg-[var(--color-canvas)]" />
              <p className="font-mono text-[9px] tracking-[0.2em] text-[var(--color-accent)] uppercase">
                {job.period}
              </p>
              <h3 className="mt-2 text-[17px] font-semibold text-[var(--color-fg)]">
                {job.title}
              </h3>
              <p className="mt-1 text-[13px] text-[var(--color-dim)]">
                {job.org}
              </p>
              <p className="mt-3 max-w-lg text-[13px] leading-[1.65] text-[var(--color-fg-soft)]">
                {job.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* education + certifications */}
      <div className="mt-14 grid gap-8 border-t border-[var(--color-border)] pt-12 lg:grid-cols-2">
        <Reveal>
          <span className="font-mono text-[9px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
            education
          </span>
          <ul className="mt-5 space-y-5">
            {education.map((e) => (
              <li key={e.institution}>
                <p className="text-[14px] font-medium text-[var(--color-fg)]">
                  {e.institution}
                </p>
                <p className="mt-1 text-[12px] text-[var(--color-dim)]">
                  {e.detail}
                </p>
                <p className="mt-1 font-mono text-[9px] text-[var(--color-accent)]">
                  {e.period}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06}>
          <span className="font-mono text-[9px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
            certifications
          </span>
          <ul className="mt-5 space-y-2">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="text-[12px] leading-snug text-[var(--color-fg-soft)]"
              >
                — {c.name}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 font-mono text-[9px] leading-relaxed text-[var(--color-dim)]">
            <p>
              {personalMeta.birth} · Ehliyet {personalMeta.license} ·{" "}
              {personalMeta.language} · Askerlik: {personalMeta.military}
            </p>
            <p className="mt-2 text-[var(--color-fg-soft)]">
              {personalMeta.address}
            </p>
            <a
              href={cvPdfHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-[var(--color-accent)] hover:underline"
            >
              Tam CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
