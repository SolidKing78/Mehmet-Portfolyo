"use client";

import {
  executiveLead,
  pageMap,
  person,
  summaryPillars,
} from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ExecutiveSummary() {
  return (
    <section
      id="ozet"
      className="scroll-mt-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-6 border-b border-[var(--color-border)] pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.28em] text-[var(--color-accent)] uppercase">
                Yönetici özeti
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
                {person.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-[var(--color-muted)] sm:text-base">
                {person.roleTitle}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 text-pretty text-sm leading-relaxed text-[var(--color-fg)] sm:text-base">
                {executiveLead}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.04}>
            <div className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-canvas)] p-5 text-sm">
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-3 text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span className="break-all">{person.email}</span>
              </a>
              <a
                href={`tel:${person.phoneTel}`}
                className="flex items-center gap-3 text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                {person.phoneDisplay}
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Linkedin className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                LinkedIn profili
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {summaryPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.05 * i}>
              <Link
                href={pillar.href}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-canvas)] p-6 transition-colors hover:border-[var(--color-accent)]/35"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--color-fg)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {pillar.body}
                </p>
                <span className="mt-4 font-mono text-[10px] tracking-wider text-[var(--color-accent)] uppercase">
                  Detay →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-14">
            <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase">
              Sayfa haritası
            </p>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
              Aşağı kaydırdıkça her bölüm üst özetin detayını açar.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pageMap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-4 transition-colors hover:border-[var(--color-accent)]/30"
                  >
                    <span className="font-medium text-[var(--color-fg)]">
                      {item.label}
                    </span>
                    <span className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
