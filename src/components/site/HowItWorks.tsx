// A genuine 3-step sequence (summon → dump → it files itself), so numbered
// markers are earned here — order carries real meaning, it isn't decoration.

const STEPS = [
  {
    n: "1",
    kbd: "⌘ J",
    title: "Summon it anywhere",
    body: "One global shortcut drops the capture bar over whatever you're doing. No app to switch to, no tab to find.",
  },
  {
    n: "2",
    kbd: "Enter",
    title: "Dump the thought",
    body: "Type the half-formed idea exactly as it arrives. Hit Enter. The bar disappears and you're back to what you were doing in under two seconds.",
  },
  {
    n: "3",
    kbd: "auto",
    title: "It files itself",
    body: "Driftnote reads the note and routes it to the right project and tag. You come back to a sorted pile, not a pile.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-ink/5 bg-paper/40">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">
            how it works
          </p>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Three seconds, start to filed.
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-signal font-heading text-base font-bold text-white">
                  {s.n}
                </span>
                <kbd className="rounded-md border border-ink/15 bg-drift px-2 py-0.5 font-mono text-xs text-ink-soft">
                  {s.kbd}
                </kbd>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
