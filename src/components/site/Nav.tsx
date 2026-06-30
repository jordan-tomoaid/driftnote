import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-drift/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-bold text-ink">
          <span
            aria-hidden
            className="grid size-6 place-items-center rounded-md bg-signal text-[13px] text-white"
          >
            ⌁
          </span>
          {site.name}
        </a>
        <div className="flex items-center gap-1.5">
          <a
            href="#pricing"
            className="hidden rounded-lg px-3 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink sm:block"
          >
            Pricing
          </a>
          <a
            href="#waitlist"
            className="rounded-lg bg-ink px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-drift"
          >
            Get early access
          </a>
        </div>
      </nav>
    </header>
  );
}
