// The Reddit-honest origin story, in the founder's voice. Plain, specific,
// no marketing gloss — this is the section that makes a scattered-notes person
// feel seen.

const APPS = ["Notion", "Apple Notes", "sticky notes", "phone memos", "a random .txt", "Slack to myself"];

export function Problem() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-signal">
        why this exists
      </p>
      <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
        I kept losing my best ideas in six different notes apps.
      </h2>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
        <p>
          I tried{" "}
          {APPS.map((a, i) => (
            <span key={a}>
              <span className="text-ink">{a}</span>
              {i < APPS.length - 1 ? ", " : ""}
            </span>
          ))}
          . The result was always the same: I&apos;d open none of them.
        </p>
        <p>
          The problem was never <em>where</em> to write things down. It was the
          half-second of friction deciding where it goes — which app, which
          folder, which tag. By the time I&apos;d decided, the thought was gone.
        </p>
        <p className="text-ink">
          So I built one place that only does the catching. You dump the thought.
          It figures out where it belongs. You never organize anything.
        </p>
      </div>
    </section>
  );
}
