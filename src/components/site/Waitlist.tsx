"use client";

import { useRef, useState } from "react";
import { Loader2, Check } from "lucide-react";
import { FORMSPREE_ID } from "@/lib/site";
import { trackLead } from "@/lib/track";

type Status = "idle" | "submitting" | "done" | "error";

// Lightweight email check — validate after typing, never block input.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setError("That doesn't look like an email. Mind checking it?");
      inputRef.current?.focus();
      return;
    }
    setError(null);
    setStatus("submitting");

    try {
      // With a Formspree id, POST the email. Without one (local/preview), skip
      // the network so the page still demos the full success flow.
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ email: value, source: "driftnote-landing" }),
        });
        if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      }

      // Reddit Ads conversion: this is the event you optimize the campaign for.
      trackLead({ source: "waitlist" });
      setStatus("done");
    } catch {
      setStatus("error");
      setError("Something broke on our end. Try again in a moment?");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-signal/30 bg-signal-soft px-6 py-8 text-center">
        <span className="mx-auto grid size-11 place-items-center rounded-full bg-signal text-white">
          <Check className="size-5" aria-hidden />
        </span>
        <p className="mt-4 text-lg font-semibold text-ink">You&apos;re on the list.</p>
        <p className="mt-1 text-[15px] text-ink-soft">
          We&apos;ll email you the moment Driftnote opens up. No spam, ever.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            ref={inputRef}
            id="waitlist-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "waitlist-error" : undefined}
            placeholder="you@example.com"
            className="min-h-12 w-full rounded-xl border border-ink/15 bg-paper px-4 text-base text-ink outline-none placeholder:text-ink-soft/60 focus-visible:ring-2 focus-visible:ring-signal"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-signal px-6 text-base font-medium text-white transition-colors hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-drift disabled:opacity-80"
        >
          {submitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
          Get early access
        </button>
      </div>
      {error && (
        <p id="waitlist-error" role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
      <p className="mt-2 font-mono text-[12px] text-ink-soft">
        Free at launch · we&apos;ll only email about Driftnote
      </p>
    </form>
  );
}
