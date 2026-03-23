import { person } from "@/content/site";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-sm font-semibold">{person.name}</p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            {person.roleTitle}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-xs text-[var(--color-muted)] sm:text-sm">
          <a
            className="w-fit hover:text-[var(--color-accent)]"
            href={`mailto:${person.email}`}
          >
            {person.email}
          </a>
          <a
            className="w-fit hover:text-[var(--color-accent)]"
            href={`tel:${person.phoneTel}`}
          >
            {person.phoneDisplay}
          </a>
          <a
            className="w-fit hover:text-[var(--color-accent)]"
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
          <Link className="hover:text-[var(--color-accent)]" href="#ozet">
            Özet
          </Link>
          <Link className="hover:text-[var(--color-accent)]" href="#projeler">
            Projeler
          </Link>
          <Link className="hover:text-[var(--color-accent)]" href="#iletisim">
            İletişim
          </Link>
        </div>
        <p className="text-xs text-[var(--color-muted)] lg:text-right">
          © {year} {person.name}
        </p>
      </div>
    </footer>
  );
}
