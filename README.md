# Driftnote — landing page

A landing page for **Driftnote** ("Capture now, organize never.") — a quick-capture
notes tool. This site exists to be the destination for a **Reddit Ads** test
campaign: a real landing page with a working waitlist conversion so the full
ad funnel (impression → click → signup) can be measured end to end.

> The product is a fake-door / waitlist test. The page is built to convert and
> to pass ad review, not to ship the product itself.

## Stack

- **Next.js 16** (App Router) with `output: "export"` → static site
- **Tailwind CSS v4** + **shadcn/ui** (radix-nova preset)
- Deploys to **GitHub Pages** via GitHub Actions
- **Reddit Pixel** fires a `Lead` conversion on waitlist signup
- Waitlist emails captured via **Formspree** (optional; falls back to a local
  success state when not configured)

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export → ./out
pnpm lint
```

## Configuration

Copy `.env.example` → `.env.local` and fill in as needed. All are optional for
local dev; wire them as repo **Variables** for the deploy.

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Path prefix for GitHub Pages project sites (`/driftnote`). Empty locally. |
| `NEXT_PUBLIC_REDDIT_PIXEL_ID` | Reddit advertiser/pixel id. Empty = pixel not loaded. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook/Instagram) Pixel id. Empty = not loaded. |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 Measurement ID (`G-…`). Empty = not loaded. |
| `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` | PostHog project key + host. Empty key = not loaded. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form id for waitlist emails. Empty = local success state only. |

Every analytics/ad provider is independent and gated on its id — set the ones
you want, leave the rest empty. The waitlist conversion fires across all that
are configured (`src/lib/track.ts`).

## Deploy (GitHub Pages)

1. Push to a repo named `driftnote` (so the site lives at
   `https://<user>.github.io/driftnote/` — `NEXT_PUBLIC_BASE_PATH` is set to
   `/driftnote` in `.github/workflows/deploy.yml`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Add repo **Variables** `NEXT_PUBLIC_REDDIT_PIXEL_ID` and
   `NEXT_PUBLIC_FORMSPREE_ID` (Settings → Secrets and variables → Actions).
4. Push to `main`. The workflow builds and publishes `./out`.

If you rename the repo or use a custom domain at the root, change
`NEXT_PUBLIC_BASE_PATH` accordingly (empty string for root).

## Reddit Ads

The end-to-end campaign walkthrough lives in **[REDDIT-ADS.md](./REDDIT-ADS.md)**.

## Project layout

```
src/app/            routes — landing page (/) and /privacy
src/components/site/ landing sections (Hero, CaptureDemo, Pricing, Waitlist…)
src/components/ui/   shadcn/ui primitives
src/lib/            site config (site.ts) + Reddit Pixel helper (track.ts)
.claude/skills/     downloaded design skills (see below)
```

## Design skills used

Bundled under `.claude/skills/` (and `.agents/skills/` for the shadcn skill):

- `frontend-design` — Anthropic's distinctive-design guidance
- `web-interface-guidelines` — Vercel Labs UI MUST/SHOULD/NEVER rules
- `web-design-guidelines` — Vercel Labs UI review skill
- `ui-ux-pro-max` — design-intelligence database (styles, palettes, fonts)
- `shadcn` — official shadcn/ui component skill
