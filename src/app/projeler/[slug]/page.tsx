import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SmartImage, SmartVideo } from "@/components/ui/SmartMedia";
import { projectDetails } from "@/content/projects";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-[1120px] px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
      >
        <ArrowLeft size={16} />
        Ana sayfaya dön
      </Link>

      <section className="mt-6 rounded-md border border-white/10 bg-[#060919]/80 p-6 sm:p-8">
        <span className="text-xs tracking-[0.2em] text-cyan-300 uppercase">{project.label}</span>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{project.titleTr}</h1>
        <p className="mt-3 max-w-[72ch] text-sm leading-relaxed text-zinc-300">{project.summaryTr}</p>
      </section>

      <section className="mt-6 overflow-hidden rounded-md border border-white/10 bg-black/40">
        <div className="relative min-h-[320px] sm:min-h-[430px]">
          {project.heroMedia.kind === "video" ? (
            <SmartVideo src={project.heroMedia.src} poster={project.heroMedia.poster} />
          ) : (
            <SmartImage src={project.heroMedia.src} alt={project.titleTr} />
          )}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[62%_38%]">
        <article className="rounded-md border border-white/10 bg-[#060919]/80 p-6">
          <h2 className="text-2xl font-semibold text-white">Proje Detayı</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
            {project.detailTr.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <article className="rounded-md border border-white/10 bg-[#060919]/80 p-6">
            <h3 className="text-xl font-semibold text-white">Teknoloji Yığını</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {project.technologies.map((tech) => (
                <li key={tech} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 text-cyan-300" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-md border border-white/10 bg-[#060919]/80 p-6">
            <h3 className="text-xl font-semibold text-white">Çıktılar</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 text-cyan-300" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        </aside>
      </section>
    </main>
  );
}

