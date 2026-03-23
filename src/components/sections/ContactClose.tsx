"use client";

import { contactClose, person } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Linkedin, Mail, Phone } from "lucide-react";

export function ContactClose() {
  return (
    <section id="iletisim" className="scroll-mt-6 pb-28 lg:scroll-mt-10 lg:pb-16">
      <Reveal>
        <span className="font-mono text-[9px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
          contact
        </span>
        <h2 className="mt-5 max-w-md font-display text-[2.25rem] leading-[1.08] tracking-[-0.02em] text-[var(--color-fg)] italic sm:text-[2.8rem]">
          {contactClose.title}
        </h2>
        <p className="mt-5 max-w-lg text-[14px] leading-[1.7] text-[var(--color-fg-soft)]">
          {contactClose.body}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2.5 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-panel)] px-5 py-3 text-[13px] font-medium text-[var(--color-fg)] transition-all hover:border-[var(--color-accent)]/30 hover:shadow-[0_0_24px_var(--color-accent-glow)]"
          >
            <Mail className="h-4 w-4 text-[var(--color-accent)]" />
            {person.email}
          </a>
          <a
            href={`tel:${person.phoneTel}`}
            className="inline-flex items-center gap-2.5 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-panel)] px-5 py-3 text-[13px] font-medium text-[var(--color-fg)] transition-all hover:border-[var(--color-accent)]/30"
          >
            <Phone className="h-4 w-4 text-[var(--color-accent)]" />
            {person.phoneDisplay}
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-[var(--color-border)] px-5 py-3 text-[13px] text-[var(--color-dim)] transition-all hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-16 font-mono text-[9px] tracking-[0.3em] text-[var(--color-border-strong)] uppercase">
          {contactClose.foot}
        </p>
      </Reveal>
    </section>
  );
}
