"use client";

import { contactClose, person } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Linkedin, Mail, Phone } from "lucide-react";

export function ContactClose() {
  return (
    <section id="iletisim" className="scroll-mt-8 pb-28 lg:scroll-mt-12 lg:pb-16">
      <Reveal>
        <p className="font-mono text-[11px] font-medium lowercase tracking-[0.28em] text-[var(--color-accent)]">
          iletişim
        </p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          {contactClose.title}
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--color-fg-soft)]">
          {contactClose.body}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-panel)] px-6 py-3.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent-line)]"
          >
            <Mail className="h-4 w-4 text-[var(--color-accent)]" />
            {person.email}
          </a>
          <a
            href={`tel:${person.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-panel)] px-6 py-3.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent-line)]"
          >
            <Phone className="h-4 w-4 text-[var(--color-accent)]" />
            {person.phoneDisplay}
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border)] bg-transparent px-6 py-3.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-14 font-mono text-[10px] tracking-[0.2em] text-[var(--color-muted)] uppercase">
          {contactClose.foot}
        </p>
      </Reveal>
    </section>
  );
}
