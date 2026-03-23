"use client";

import { contact, person } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="iletisim"
      className="scroll-mt-24 border-b border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(145deg,var(--color-surface-elevated),var(--color-canvas))] p-10 sm:p-14">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-accent)] uppercase">
              İletişim
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              {contact.body}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-10 grid gap-4 border-t border-[var(--color-border)] pt-10 sm:grid-cols-3">
              <a
                href={`mailto:${person.email}`}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas)]/50 p-4 transition-colors hover:border-[var(--color-accent)]/35"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)]">
                    E-posta
                  </p>
                  <p className="mt-1 break-all text-sm font-medium text-[var(--color-fg)]">
                    {person.email}
                  </p>
                </div>
              </a>
              <a
                href={`tel:${person.phoneTel}`}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas)]/50 p-4 transition-colors hover:border-[var(--color-accent)]/35"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)]">
                    Telefon
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-fg)]">
                    {person.phoneDisplay}
                  </p>
                </div>
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-canvas)]/50 p-4 transition-colors hover:border-[var(--color-accent)]/35"
              >
                <Linkedin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)]">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-fg)]">
                    mehmet-seyrimez
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-[var(--color-canvas)] transition-opacity hover:opacity-90"
              >
                {contact.ctaPrimary}
              </a>
              <a
                href={`tel:${person.phoneTel}`}
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/50"
              >
                {contact.ctaPhone}
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-8 py-3.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/50"
              >
                {contact.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
