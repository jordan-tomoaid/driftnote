"use client";

import { useId, useRef, useState } from "react";
import { CornerDownLeft } from "lucide-react";

// The signature element: a real capture bar. Type a thought, press Enter, and
// watch it get "caught" and auto-filed into a project — the whole product in
// one interaction. The routing is a deliberately simple keyword match so the
// demo feels instant and honest (no fake network spinner pretending to be AI).

type Project = {
  tag: string;
  label: string;
  emoji: string;
  match: RegExp;
};

const PROJECTS: Project[] = [
  { tag: "#errands", label: "Errands", emoji: "🛒", match: /\b(buy|grocer|milk|order|pick up|return|book a|appointment)\w*/i },
  { tag: "#reading", label: "Reading", emoji: "📚", match: /\b(read|article|book|watch|paper|blog|newsletter|bookmark)\w*/i },
  { tag: "#side-project", label: "Side project", emoji: "🚀", match: /\b(idea|build|app|feature|ship|startup|prototype|launch)\w*/i },
  { tag: "#follow-ups", label: "Follow-ups", emoji: "✅", match: /\b(call|email|reply|ping|message|follow up|ask|ping|ttext)\w*/i },
];
const INBOX: Project = { tag: "#inbox", label: "Inbox", emoji: "🗂️", match: /.*/ };

function route(thought: string): Project {
  return PROJECTS.find((p) => p.match.test(thought)) ?? INBOX;
}

const EXAMPLES = [
  "build a Reddit ads landing page this weekend",
  "buy oat milk and coffee filters",
  "read that piece on capture-first note apps",
  "email Sam back about the beta",
];

type Caught = { id: number; text: string; project: Project };

export function CaptureDemo() {
  const [value, setValue] = useState("");
  const [caught, setCaught] = useState<Caught[]>([]);
  const nextId = useRef(1);
  const inputId = useId();

  function capture(raw: string) {
    const text = raw.trim();
    if (!text) return;
    const entry: Caught = { id: nextId.current++, text, project: route(text) };
    setCaught((prev) => [entry, ...prev].slice(0, 4));
    setValue("");
  }

  return (
    <div className="w-full">
      {/* Capture bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          capture(value);
        }}
        className="rounded-2xl border border-ink/10 bg-paper p-2.5 shadow-[0_18px_50px_-24px_rgba(21,22,27,0.45)]"
      >
        <div className="flex items-center gap-2 px-1 pb-2 pt-1">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            Quick capture
          </span>
          <kbd className="ml-auto rounded-md border border-ink/15 bg-drift px-1.5 py-0.5 font-mono text-[11px] text-ink-soft">
            ⌘ J
          </kbd>
        </div>
        <div className="flex items-stretch gap-2">
          <label htmlFor={inputId} className="sr-only">
            Type a thought to capture
          </label>
          <input
            id={inputId}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type a thought, hit Enter…"
            autoComplete="off"
            spellCheck={false}
            className="min-h-11 flex-1 rounded-xl bg-drift px-3.5 text-[15px] text-ink outline-none placeholder:text-ink-soft/70 focus-visible:ring-2 focus-visible:ring-signal"
          />
          <button
            type="submit"
            aria-label="Capture thought"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-signal px-3.5 text-sm font-medium text-white transition-colors hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <CornerDownLeft className="size-4" aria-hidden />
            Catch it
          </button>
        </div>
      </form>

      {/* Try-it chips */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[11px] text-ink-soft">try:</span>
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => capture(ex)}
            className="rounded-full border border-ink/10 bg-paper/70 px-2.5 py-1 text-xs text-ink-soft transition-colors hover:border-signal/40 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            {ex}
          </button>
        ))}
      </div>

      {/* Filed thoughts */}
      <div className="mt-5" aria-live="polite">
        {caught.length === 0 ? (
          <p className="font-mono text-[13px] text-ink-soft">
            ↑ caught thoughts file themselves here, by project.
          </p>
        ) : (
          <ul className="space-y-2">
            {caught.map((c) => (
              <li
                key={c.id}
                className="animate-note-caught flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-3.5 py-2.5"
              >
                <span className="text-lg" aria-hidden>
                  {c.project.emoji}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm text-ink">
                  {c.text}
                </span>
                <span className="shrink-0 rounded-full bg-signal-soft px-2 py-0.5 font-mono text-[11px] text-signal">
                  {c.project.tag}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
