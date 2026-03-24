"use client";

import { flagshipProjects } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SmartImage, SmartVideo } from "@/components/ui/SmartMedia";

export function FeaturedFlagships() {
  return (
    <section id="projeler" className="scroll-mt-6 lg:scroll-mt-10">
      <Reveal>
        <span className="font-mono text-[9px] font-medium tracking-[0.35em] text-[var(--color-accent)] uppercase">
          projects
        </span>
        <h2 className="mt-5 font-display text-[2.25rem] leading-[1.08] tracking-[-0.02em] text-[var(--color-fg)] italic sm:text-[2.8rem]">
          Seçili çalışmalar
        </h2>
      </Reveal>

      <div className="mt-12 space-y-10">
        {flagshipProjects.map((project, index) => (
          <Reveal key={project.slug} delay={0.06 * index}>
            <article className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[0_0_40px_var(--color-accent-glow)]">
              {/* media */}
              <div className="relative aspect-[16/9] w-full border-b border-[var(--color-border)] bg-black sm:aspect-[2/1]">
                {project.media[0]?.kind === "video" ? (
                  <SmartVideo
                    key={project.media[0].src}
                    src={project.media[0].src}
                    caption={project.media[0].caption}
                    className="h-full"
                  />
                ) : project.media[0] ? (
                  <SmartImage
                    src={project.media[0].src}
                    alt={project.media[0].alt}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                ) : null}
              </div>

              {/* content */}
              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[var(--color-dim)] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[var(--color-border)]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.7] text-[var(--color-fg-soft)]">
                  {project.context}
                </p>
                <p className="mt-3 text-[13px] leading-[1.7] text-[var(--color-dim)]">
                  {project.role}
                </p>

                <div className="mt-5 flex flex-wrap gap-[6px]">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-elevated)] px-2 py-[3px] font-mono text-[9px] tracking-wider text-[var(--color-fg-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-l-2 border-[var(--color-accent)]/40 pl-4">
                  <p className="text-[13px] font-medium leading-[1.65] text-[var(--color-fg)]">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
