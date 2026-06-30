// Fires the waitlist conversion across every analytics/ad provider that's
// loaded. Each provider's base snippet is injected in PixelScripts only when
// its id is configured, so the matching global is simply absent (and skipped)
// when a provider is off. Tracking must never break the user-facing flow, so
// every call is guarded and wrapped.

type Fn = (...args: unknown[]) => void;

interface PosthogLike {
  capture: (event: string, props?: Record<string, unknown>) => void;
}

declare global {
  interface Window {
    rdt?: Fn; // Reddit Pixel
    fbq?: Fn; // Meta Pixel
    gtag?: Fn; // GA4
    posthog?: PosthogLike;
  }
}

function safe(run: () => void): void {
  try {
    run();
  } catch {
    /* analytics errors never surface to the user */
  }
}

/**
 * Waitlist signup conversion. Uses each platform's standard lead event:
 *   Reddit → "Lead"   (optimize the campaign toward this)
 *   Meta   → "Lead"
 *   GA4    → "generate_lead"
 *   PostHog→ "waitlist_signup" (custom)
 */
export function trackLead(meta?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  safe(() => window.rdt?.("track", "Lead", meta));
  safe(() => window.fbq?.("track", "Lead", meta));
  safe(() => window.gtag?.("event", "generate_lead", meta ?? {}));
  safe(() => window.posthog?.capture("waitlist_signup", meta));
}

export {};
