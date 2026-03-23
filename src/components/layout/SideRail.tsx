"use client";

import { person, railNav } from "@/content/site";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Layers,
  LayoutGrid,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const iconMap: Record<string, typeof User> = {
  kimlik: User,
  ozet: LayoutGrid,
  uzmanlik: Sparkles,
  projeler: Layers,
  deneyim: Briefcase,
  iletisim: Mail,
};

const CONTENT_IDS = ["ozet", "uzmanlik", "projeler", "deneyim", "iletisim"];

export function SideRail() {
  const [active, setActive] = useState("kimlik");

  useEffect(() => {
    const contentEls = CONTENT_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];
    if (!contentEls.length) return;

    const threshold = () =>
      window.innerWidth >= 1024 ? 96 : 420;

    const tryKimlik = () => {
      if (window.scrollY < threshold()) {
        setActive("kimlik");
        return true;
      }
      return false;
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (tryKimlik()) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -48% 0px", threshold: [0, 0.12, 0.28, 0.45] },
    );

    contentEls.forEach((el) => obs.observe(el));
    const onScroll = () => tryKimlik();
    window.addEventListener("scroll", onScroll, { passive: true });
    tryKimlik();

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-[var(--color-border)] bg-[var(--color-canvas)]/90 px-1 py-1.5 backdrop-blur-xl lg:top-0 lg:bottom-auto lg:left-0 lg:right-auto lg:h-screen lg:w-[46px] lg:flex-col lg:justify-between lg:border-r lg:border-t-0 lg:px-0 lg:py-6"
      aria-label="Bölüm navigasyonu"
    >
      <div className="hidden font-mono text-[9px] font-medium tracking-[0.3em] text-[var(--color-accent)] lg:flex lg:justify-center">
        {person.initials}
      </div>
      <nav className="flex flex-1 items-center justify-around lg:flex-col lg:justify-center lg:gap-3">
        {railNav.map((item) => {
          const Icon = iconMap[item.id] ?? LayoutGrid;
          const isOn = active === item.id;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={cn(
                "relative flex h-9 w-9 items-center justify-center rounded-md transition-all duration-200",
                isOn
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-dim)] hover:text-[var(--color-fg-soft)]",
              )}
            >
              {isOn && (
                <span className="absolute inset-0 rounded-md border border-[var(--color-accent)]/25 bg-[var(--color-accent-dim)]" />
              )}
              <Icon className="relative h-4 w-4 stroke-[1.5]" />
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="hidden lg:block" aria-hidden />
    </aside>
  );
}
