# Analytics & pixels — setup

The code is already wired. Each provider is **off until you give it an id**, and
turning one on is just adding a value. Two ways to set ids:

- **Local dev:** put them in `.env.local` (see `.env.example`).
- **Production:** add them as repo **Variables** at
  GitHub → repo → **Settings → Secrets and variables → Actions → Variables**,
  then re-deploy (push to `main`, or Actions → "Deploy to GitHub Pages" → Run
  workflow). The build reads them and bakes them into the static site.

When a user submits the waitlist, one conversion fires across every provider
that's on (`src/lib/track.ts`):

| Provider | Page-view event | Conversion event |
|---|---|---|
| Reddit Pixel | `PageVisit` | `Lead` |
| Meta Pixel | `PageView` | `Lead` |
| GA4 | `page_view` (auto) | `generate_lead` |
| PostHog | `$pageview` (auto) | `waitlist_signup` |

---

## Reddit Pixel

1. [ads.reddit.com](https://ads.reddit.com) → **Events Manager → Set Up Reddit Pixel**.
2. Copy the **advertiser id** (looks like `t2_xxxxxxxx`).
3. Set repo Variable **`NEXT_PUBLIC_REDDIT_PIXEL_ID`** = that id. Re-deploy.
4. Verify with the [Reddit Pixel Helper](https://chromewebstore.google.com) — load
   the page (PageVisit) and submit the form (Lead).
5. In a Conversions campaign, optimize toward the **Lead** event.

## Meta Pixel (Facebook / Instagram)

1. [business.facebook.com](https://business.facebook.com) → **Events Manager** →
   **Connect Data Sources → Web → Meta Pixel** → create one.
2. Copy the **Pixel ID** (a number).
3. Set repo Variable **`NEXT_PUBLIC_META_PIXEL_ID`** = that number. Re-deploy.
4. Verify with the [Meta Pixel Helper](https://chromewebstore.google.com) Chrome
   extension. You'll see `PageView` on load and `Lead` on signup.

## Google Analytics 4

1. [analytics.google.com](https://analytics.google.com) → **Admin → Data Streams →
   Web** → add a stream for the site URL.
2. Copy the **Measurement ID** (`G-XXXXXXXXXX`).
3. Set repo Variable **`NEXT_PUBLIC_GA4_ID`** = `G-…`. Re-deploy.
4. Verify in GA4 → **Reports → Realtime**. The signup shows as the
   `generate_lead` event (mark it as a Key Event/conversion under Admin → Events).

## PostHog

1. [posthog.com](https://posthog.com) → create a project.
2. **Project Settings → Project API Key** — copy it (`phc_...`).
3. Note your region's host: US = `https://us.i.posthog.com`, EU =
   `https://eu.i.posthog.com`.
4. Set repo Variables **`NEXT_PUBLIC_POSTHOG_KEY`** = `phc_...` and (if EU/self-hosted)
   **`NEXT_PUBLIC_POSTHOG_HOST`** = your host. Re-deploy.
5. Verify in PostHog → **Activity**. Auto-pageviews appear, and the signup fires
   `waitlist_signup`. Turn that into a funnel/insight.

---

## A note on consent

Meta Pixel and GA4 set advertising/analytics cookies. If you'll get meaningful EU
traffic, you're expected to ask for consent before loading them. This site does
**not** include a consent banner yet — fine for a quick learning test, worth
adding (e.g. a CMP, or gating `PixelScripts` behind a consent choice) before any
serious EU spend. The privacy policy (`/privacy`) already discloses all four.
