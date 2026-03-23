"use client";

import { cvPdfHref, person } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartMedia";
import { projeler } from "@/lib/paths";
import { Reveal } from "@/components/motion/Reveal";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const portrait = projeler("MEHMET_SEYRİMEZ.jpg");

const socialLinks = [
  { href: `mailto:${person.email}`, icon: Mail, label: "E-posta" },
  { href: `tel:${person.phoneTel}`, icon: Phone, label: "Telefon" },
  {
    href: person.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
] as const;

export function IdentityAside() {
  return (
    <aside
      id="kimlik"
      className="scroll-mt-4 lg:sticky lg:top-6 lg:self-start"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-panel)] shadow-[0_0_0_1px_rgba(0,0,0,0.6),0_40px_120px_-30px_rgba(0,0,0,0.95)]">
          {/* portrait */}
          <div className="relative aspect-[3/4] w-full">
            <SmartImage
              src={portrait}
              alt={person.name}
              priority
              sizes="(max-width: 1024px) 100vw, 380px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-panel)] via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-panel)] via-[var(--color-panel)]/50 to-transparent opacity-80" />
          </div>

          {/* identity content */}
          <div className="relative -mt-20 px-6 pb-7">
            <p className="font-mono text-[9px] font-medium tracking-[0.4em] text-[var(--color-accent)] uppercase">
              {person.roleLine}
            </p>
            <h1 className="mt-3 font-display text-[2rem] leading-[1.05] tracking-[-0.02em] text-[var(--color-fg)] italic sm:text-[2.4rem]">
              {person.name}
            </h1>

            <div className="mt-5 space-y-3 border-t border-[var(--color-border)] pt-5">
              <p className="text-[13px] leading-[1.6] text-[var(--color-fg-soft)]">
                {person.headline}
              </p>
              <p className="font-mono text-[10px] leading-[1.65] text-[var(--color-dim)]">
                {person.credibility}
              </p>
            </div>

            {/* social row */}
            <div className="mt-6 flex items-center gap-[6px] border-t border-[var(--color-border)] pt-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={
                      "external" in link && link.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      "external" in link && link.external
                        ? "noreferrer"
                        : undefined
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-fg-soft)] transition-colors hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)]"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon className="h-[14px] w-[14px]" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                );
              })}
              <a
                href={cvPdfHref}
                target="_blank"
                rel="noreferrer"
                className="ml-auto flex h-9 items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-elevated)] px-3 font-mono text-[9px] font-medium tracking-[0.15em] text-[var(--color-accent)] uppercase transition-colors hover:border-[var(--color-accent)]/30"
              >
                <Download className="h-3 w-3" />
                CV
              </a>
            </div>

            {/* location */}
            <div className="mt-4 flex items-center gap-2 font-mono text-[9px] text-[var(--color-dim)]">
              <MapPin className="h-3 w-3" />
              {person.location}
            </div>
          </div>
        </div>
      </Reveal>
    </aside>
  );
}
