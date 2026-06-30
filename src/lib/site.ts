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

// Reddit Pixel advertiser id. Set NEXT_PUBLIC_REDDIT_PIXEL_ID in CI / .env.local
// to wire conversion tracking. Empty = pixel scripts are skipped (safe locally).
export const REDDIT_PIXEL_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID ?? "";

// Formspree form id for the waitlist. Empty = the form falls back to a local
// "saved" state so the page still demos end-to-end without a backend.
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
