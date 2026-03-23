"use client";

import { cvPdfHref, person } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartMedia";
import { projeler } from "@/lib/paths";
import { Reveal } from "@/components/motion/Reveal";
import { Linkedin, Mail, Phone } from "lucide-react";
const portrait = projeler("MEHMET_SEYRİMEZ.jpg");

export function IdentityAside() {
  return (
    <aside
      id="kimlik"
      className="scroll-mt-6 lg:sticky lg:top-10 lg:self-start lg:scroll-mt-10"
    >
      <Reveal>
        <div className="overflow-hidden rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-panel)] shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]">
          <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none">
            <SmartImage
              src={portrait}
              alt={person.name}
              priority
              sizes="(max-width: 1024px) 100vw, 320px"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[var(--color-canvas)] via-[var(--color-canvas)]/70 to-transparent" />
          </div>
          <div className="border-t border-[var(--color-border)] px-5 pb-6 pt-5">
            <p className="font-mono text-[10px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
              {person.roleLine}
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-3xl">
              {person.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-soft)]">
              {person.headline}
            </p>
            <p className="mt-4 font-mono text-[11px] leading-relaxed text-[var(--color-muted)]">
              {person.credibility}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-6">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent-line)] hover:text-[var(--color-accent)]"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">E-posta</span>
              </a>
              <a
                href={`tel:${person.phoneTel}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent-line)] hover:text-[var(--color-accent)]"
              >
                <Phone className="h-4 w-4" />
                <span className="sr-only">Telefon</span>
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent-line)] hover:text-[var(--color-accent)]"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <a
              href={cvPdfHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex font-mono text-[10px] font-medium tracking-wider text-[var(--color-accent)] uppercase underline-offset-4 hover:underline"
            >
              PDF özgeçmiş
            </a>
            <p className="mt-3 font-mono text-[10px] text-[var(--color-muted)]">
              {person.location}
            </p>
          </div>
        </div>
      </Reveal>
    </aside>
  );
}
