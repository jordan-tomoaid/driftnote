import { Keyboard, Sparkles, FolderTree, EyeOff } from "lucide-react";

const FEATURES = [
  {
    icon: Keyboard,
    title: "Keyboard-native",
    body: "Built for the moment a thought hits. Global hotkey in, Enter out. Your hands never leave the keys.",
  },
  {
    icon: Sparkles,
    title: "AI sorts it for you",
    body: "Every note is read and routed to the project and tag it belongs to. The sorting happens after you've moved on.",
  },
  {
    icon: FolderTree,
    title: "Projects, not folders",
    body: "Notes collect under the things you actually work on. No folder trees to build, no system to maintain.",
  },
  {
    icon: EyeOff,
    title: "Zero upkeep",
    body: "There's no inbox to triage at the end of the day. Capture now, organize never — that's the whole deal.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          what makes it different
        </p>
        <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
          A place that only does the catching.
        </h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-ink/10 bg-paper p-6 transition-colors hover:border-signal/30"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-signal-soft text-signal">
              <f.icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
