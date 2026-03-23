"use client";

import { capabilitySignals } from "@/content/site";
import type { SignalStrength } from "@/content/types";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const widthPercent: Record<SignalStrength, string> = {
  1: "32%",
  2: "60%",
  3: "91%",
};

function AnimatedBar({
  strength,
  delay,
}: {
  strength: SignalStrength;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="mt-3 h-[2px] w-full rounded-full bg-[var(--color-border)]">
      <motion.div
        className="h-[2px] rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/20"
        initial={reduce ? { width: widthPercent[strength] } : { width: 0 }}
        whileInView={{ width: widthPercent[strength] }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: delay + 0.2,
        }}
      />
    </div>
  );
}

export function CapabilitySignals() {
  return (
    <section id="uzmanlik" className="scroll-mt-6 lg:scroll-mt-10">
      <Reveal>
        <span className="font-mono text-[9px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
          skills
        </span>
        <h2 className="mt-5 font-display text-[2.25rem] leading-[1.08] tracking-[-0.02em] text-[var(--color-fg)] italic sm:text-[2.8rem]">
          Yetkinlik alanları
        </h2>
      </Reveal>

      <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 shadow-[inset_0_1px_0_var(--color-border),0_0_40px_var(--color-accent-glow)] sm:p-8">
        {capabilitySignals.map((c, i) => (
          <Reveal key={c.id} delay={0.04 * i}>
            <div className={cn(i > 0 && "mt-7")}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[14px] font-medium text-[var(--color-fg)]">
                  {c.label}
                </span>
                <span className="shrink-0 text-right font-mono text-[9px] tracking-wide text-[var(--color-dim)]">
                  {c.note}
                </span>
              </div>
              <AnimatedBar strength={c.strength} delay={0.04 * i} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
