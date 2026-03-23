"use client";

import { cn } from "@/lib/utils";
import { nav, person } from "@/content/site";
import { MobileNav } from "@/components/layout/MobileNav";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [hash, setHash] = useState("#hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.08], [0.65, 1]);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#hero");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <motion.header
        style={{ opacity }}
        className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)]/80 bg-[var(--color-canvas)]/85 backdrop-blur-md"
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="#hero"
            className="font-display text-sm font-semibold tracking-tight text-[var(--color-fg)]"
          >
            {person.name.split(" ")[0]}
            <span className="text-[var(--color-muted)]">.</span>
          </Link>
          <div className="flex flex-1 items-center justify-end gap-3 md:justify-center">
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Ana navigasyon"
            >
              {nav.map((item) => {
                const active = hash === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-colors",
                      active
                        ? "bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-fg)]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <MobileNav />
          </div>
          <Link
            href="#iletisim"
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
          >
            İletişim
          </Link>
        </div>
        <motion.div
          className="h-px origin-left bg-[var(--color-accent)]"
          style={{ scaleX }}
        />
      </motion.header>
      <div className="h-14" aria-hidden />
    </>
  );
}
