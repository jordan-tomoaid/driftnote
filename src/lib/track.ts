// Thin wrapper around the Reddit Pixel global (`rdt`). The pixel snippet is
// injected in layout.tsx only when an advertiser id is configured, so these
// helpers no-op safely when it is absent (local dev, preview builds).

type RdtArgs = [string, ...unknown[]];

interface RdtFn {
  (...args: RdtArgs): void;
}

declare global {
  interface Window {
    rdt?: RdtFn;
  }
}

/**
 * Fire a Reddit conversion event. We use "Lead" for the waitlist signup —
 * it's the standard event for "captured an interested person" and is what
 * you optimize an awareness/consideration campaign toward.
 */
export function trackLead(meta?: Record<string, unknown>): void {
  if (typeof window === "undefined" || typeof window.rdt !== "function") return;
  try {
    window.rdt("track", "Lead", meta);
  } catch {
    // Tracking must never break the user-facing flow.
  }
}

export {};
