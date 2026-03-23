"use client";

import { person } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SmartImage } from "@/components/ui/SmartMedia";
import { projeler } from "@/lib/paths";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const portraitSrc = projeler("MEHMET_SEYRİMEZ.jpg");

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--color-border)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[40rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:py-28">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
              {person.roleTitle}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-4 text-balance text-4xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {person.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {person.subhead}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-muted)]">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
              >
                <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                {person.email}
              </a>
              <a
                href={`tel:${person.phoneTel}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
              >
                <Phone className="h-4 w-4 text-[var(--color-accent)]" />
                {person.phoneDisplay}
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
              >
                <Linkedin className="h-4 w-4 text-[var(--color-accent)]" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#ozet"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-fg)] px-6 py-3 text-sm font-semibold text-[var(--color-canvas)] transition-opacity hover:opacity-90"
              >
                Özeti oku
              </Link>
              <Link
                href="#projeler"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
              >
                Projeler
              </Link>
              <Link
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                İletişim
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="relative">
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0">
              <SmartImage
                src={portraitSrc}
                alt={`${person.name} portre`}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-canvas)]/90 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-mono text-[10px] tracking-wider text-[var(--color-muted)] uppercase">
              CAD · Otomasyon · Mühendislik yazılımı
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
