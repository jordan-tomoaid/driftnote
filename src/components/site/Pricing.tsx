import { Check } from "lucide-react";
import { site } from "@/lib/site";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    note: "forever",
    blurb: "Everything you need to stop losing ideas.",
    features: [
      "Unlimited quick capture",
      "AI auto-filing",
      "Up to 3 projects",
      "Web + desktop hotkey",
    ],
    cta: "Get early access",
    highlight: false,
  },
  {
    name: "Pro",
    price: `$${site.pro.price}`,
    note: `/${site.pro.period}`,
    blurb: "For when your brain produces more than three projects' worth.",
    features: [
      "Everything in Free",
      "Unlimited projects + tags",
      "Custom routing rules",
      "Search across everything",
      "Priority on new features",
    ],
    cta: "Get early access",
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-y border-ink/5 bg-paper/40">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">
            pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Free to start. $5 when you outgrow it.
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-5 sm:grid-cols-2">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={
                p.highlight
                  ? "relative rounded-2xl border-2 border-signal bg-paper p-7"
                  : "relative rounded-2xl border border-ink/10 bg-paper p-7"
              }
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-signal px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-white">
                  most picked
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-ink">{p.name}</h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-ink">{p.price}</span>
                <span className="font-mono text-sm text-ink-soft">{p.note}</span>
              </p>
              <p className="mt-3 text-[15px] text-ink-soft">{p.blurb}</p>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={
                  p.highlight
                    ? "mt-7 block rounded-xl bg-signal px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    : "mt-7 block rounded-xl border border-ink/15 px-4 py-2.5 text-center text-sm font-medium text-ink transition-colors hover:bg-drift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
