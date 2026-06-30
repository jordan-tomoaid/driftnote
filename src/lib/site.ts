// Single source of truth for site config + copy. Keeping content here (not
// inline in JSX) makes the voice easy to tune without touching layout code.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the GitHub Pages base path. */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export const site = {
  name: "Driftnote",
  tagline: "Capture now, organize never.",
  // Used in <title>/OG. Kept short and concrete, end-user framed.
  description:
    "Driftnote is one keyboard shortcut for every stray idea. Type it, press Enter, and it files itself into the right project. Capture now, organize never.",
  url: "https://driftnote.example", // replace once a real domain is live
  pro: { price: 5, period: "mo" },
} as const;

// Analytics / advertising ids. Every one is optional and gated: when an id is
// empty, that provider's script is never loaded and its events no-op. Set them
// in .env.local (local) or as repo Variables (deploy). No code change needed to
// turn a provider on — just add its id.
export const REDDIT_PIXEL_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "";
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

// Formspree form id for the waitlist. Empty = the form falls back to a local
// "saved" state so the page still demos end-to-end without a backend.
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
