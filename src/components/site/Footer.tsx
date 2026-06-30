import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-paper/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
        <div className="flex items-center gap-2 font-heading font-bold text-ink">
          <span
            aria-hidden
            className="grid size-5 place-items-center rounded bg-signal text-[11px] text-white"
          >
            ⌁
          </span>
          {site.name}
          <span className="ml-2 font-sans text-sm font-normal text-ink-soft">
            {site.tagline}
          </span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-ink-soft">
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy
          </Link>
          <a href="#waitlist" className="transition-colors hover:text-ink">
            Early access
          </a>
        </nav>
      </div>
    </footer>
  );
}
