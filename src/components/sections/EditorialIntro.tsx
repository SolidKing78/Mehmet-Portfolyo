"use client";

import { executiveStatements } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function EditorialIntro() {
  return (
    <section id="ozet" className="scroll-mt-6 lg:scroll-mt-10">
      <Reveal>
        <span className="font-mono text-[9px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
          resume
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-5 font-display text-[2.5rem] leading-[1.06] tracking-[-0.025em] text-[var(--color-fg)] italic sm:text-[3.2rem] lg:text-[3.6rem]">
          Üretim hatlarına yakın
          <br />
          mühendislik yazılımı
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-4 flex items-center gap-3 font-mono text-[10px] tracking-wider text-[var(--color-dim)]">
          <span className="text-[var(--color-accent)]">7+ yıl saha deneyimi</span>
          <span className="text-[var(--color-border-strong)]">/</span>
          <span>3 kurum</span>
          <span className="text-[var(--color-border-strong)]">/</span>
          <span>SolidWorks · C# · C++</span>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <p className="mt-8 max-w-xl text-[15px] leading-[1.7] text-[var(--color-fg-soft)]">
          SolidWorks API, VBA, .NET ve C# ile parametrik montaj, teknik resim ve
          üretim çıktılarını tek akışta üreten kurumsal otomasyon. Prefabrik ve
          hafif çelik için C++ tabanlı CAD/CAM; roll-form hatlarıyla doğrudan
          uyumlu çıktı.
        </p>
      </Reveal>

      <div className="mt-10 space-y-0 border-l border-[var(--color-border-strong)]">
        {executiveStatements.slice(2).map((line, i) => (
          <Reveal key={i} delay={0.22 + 0.04 * i}>
            <div className="py-4 pl-5">
              <p className="text-[13px] leading-[1.65] text-[var(--color-fg-soft)]">
                {line}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
