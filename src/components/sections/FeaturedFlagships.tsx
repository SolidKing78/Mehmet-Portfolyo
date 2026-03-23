"use client";

import { flagshipProjects } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SmartImage, SmartVideo } from "@/components/ui/SmartMedia";

export function FeaturedFlagships() {
  return (
    <section id="projeler" className="scroll-mt-8 lg:scroll-mt-12">
      <Reveal>
        <p className="font-mono text-[11px] font-medium lowercase tracking-[0.28em] text-[var(--color-accent)]">
          seçili işler
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          Üç imza proje
        </h2>
      </Reveal>

      <div className="mt-12 space-y-16 sm:space-y-20">
        {flagshipProjects.map((project, index) => (
          <Reveal key={project.slug} delay={0.06 * index}>
            <article className="grid gap-8 border border-[var(--color-border)] bg-[var(--color-panel)]/60 lg:grid-cols-12 lg:gap-0">
              <div className="relative min-h-[220px] border-b border-[var(--color-border)] lg:col-span-5 lg:min-h-[320px] lg:border-b-0 lg:border-r">
                {project.media[0]?.kind === "video" ? (
                  <SmartVideo
                    src={project.media[0].src}
                    poster={project.media[0].poster}
                    caption={project.media[0].caption}
                    className="min-h-[220px] lg:min-h-[320px]"
                  />
                ) : (
                  <div className="relative h-full min-h-[220px] lg:min-h-[320px]">
                    {project.media[0] ? (
                      <SmartImage
                        src={project.media[0].src}
                        alt={project.media[0].alt}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    ) : null}
                  </div>
                )}
              </div>
              <div className="flex flex-col px-6 py-8 lg:col-span-7 lg:px-10 lg:py-10">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-fg-soft)]">
                  {project.context}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.role}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[var(--color-border)] bg-[var(--color-elevated)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-fg-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-l-2 border-[var(--color-accent-line)] pl-4 text-sm font-medium leading-relaxed text-[var(--color-fg)]">
                  {project.outcome}
                </p>
                {project.media.length > 1 ? (
                  <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md">
                    {project.media.slice(1).map((m) => (
                      <div
                        key={m.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--color-border)]"
                      >
                        {m.kind === "video" ? (
                          <SmartVideo
                            src={m.src}
                            poster={m.poster}
                            caption={m.caption}
                            className="min-h-0"
                          />
                        ) : (
                          <SmartImage
                            src={m.src}
                            alt={m.alt}
                            sizes="200px"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
