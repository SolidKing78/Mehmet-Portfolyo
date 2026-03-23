import { person } from "@/content/site";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-sm font-semibold">{person.name}</p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            CAD otomasyonu · Üretim yazılımı · AI-native geliştirme
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
          <Link className="hover:text-[var(--color-accent)]" href="#projeler">
            Projeler
          </Link>
          <Link className="hover:text-[var(--color-accent)]" href="#deneyim">
            Deneyim
          </Link>
          <a
            className="hover:text-[var(--color-accent)]"
            href={`mailto:${person.email}`}
          >
            E-posta
          </a>
        </div>
        <p className="text-xs text-[var(--color-muted)]">
          © {year} {person.name}
        </p>
      </div>
    </footer>
  );
}
