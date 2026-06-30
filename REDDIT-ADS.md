# Reddit Ads — end-to-end playbook for Driftnote

Goal: learn the **whole** Reddit Ads flow with this landing page as the
destination — from a live URL, through the pixel, to a campaign you can watch
convert. Written for a small learning budget.

This page is already wired for it:

- `/privacy` exists (ad review requires a reachable privacy policy).
- The waitlist form fires a Reddit **`Lead`** conversion event on submit
  (`src/lib/track.ts`). You just need to drop in your pixel id.

---

## 0. What you need first

- A Reddit account (an aged account with some karma draws less scrutiny).
- A live landing page URL → ship this site (see `README.md` → Deploy).
- A payment method for [ads.reddit.com](https://ads.reddit.com).
- 20–30 minutes.

A `*.github.io/driftnote/` URL is a perfectly valid ad destination. A custom
domain looks more credible but is not required to learn the flow.

---

## 1. Get the landing page live

Follow `README.md` → **Deploy (GitHub Pages)**. Confirm both URLs load:

- `https://<user>.github.io/driftnote/`
- `https://<user>.github.io/driftnote/privacy/`

Test the waitlist form submits and shows the success state. (Until a pixel id
is set, the `Lead` event simply no-ops — that's expected.)

---

## 2. Create the Reddit Pixel

1. [ads.reddit.com](https://ads.reddit.com) → create an account, fill in
   business/billing details.
2. **Events Manager → Set Up Reddit Pixel.** Reddit gives you an
   **advertiser/pixel id** (looks like `t2_xxxxxxxx`).
3. You do **not** need to paste Reddit's raw snippet — this site loads the pixel
   itself. Just set the id:
   - Local test: `.env.local` → `NEXT_PUBLIC_REDDIT_PIXEL_ID=t2_xxxxxxxx`
   - Production: repo **Settings → Secrets and variables → Actions →
     Variables** → `NEXT_PUBLIC_REDDIT_PIXEL_ID = t2_xxxxxxxx`, then re-run the
     deploy.
4. Reload the live page. In Events Manager you should see a **PageVisit** event
   arrive. Submit the waitlist form → a **Lead** event should arrive.
   (The [Reddit Pixel Helper](https://chromewebstore.google.com) extension makes
   this easy to verify.)

> Events this site sends: `PageVisit` on load, `Lead` on waitlist signup.
> `Lead` is the one you optimize the campaign toward.

---

## 3. Pick a campaign objective

Reddit objectives map to the funnel. For a learning test, two sane paths:

| Objective | Use when | Min useful budget |
|---|---|---|
| **Traffic** (Clicks) | You just want to learn the flow + drive cheap clicks | ~$5–10/day |
| **Conversions** (`Lead`) | You want Reddit to optimize toward signups | ~$50+/day |

**Recommendation for learning:** start with **Traffic** at **$5–10/day**. It's
the cheapest way to see the entire pipeline work (creative → click → landing →
pixel → signup) without needing the 50+ conversions a Conversions campaign
requires to exit its learning phase. Switch to **Conversions / `Lead`** once
you have the pixel firing and want real optimization.

Reddit minimums: **$5/day** per campaign, **$25** lifetime. Practical minimum
for meaningful data is **$25–50/day**; conversion optimization needs **≥50
`Lead` events** to leave the learning phase, so budget accordingly if you go
that route.

---

## 4. Build the ad group (targeting)

For Driftnote's "ideas scattered across six notes apps" person, target by
**communities** and **interests** rather than broad demographics:

- Communities: `r/productivity`, `r/Notion`, `r/ObsidianMD`, `r/PKMS`,
  `r/Anki`, `r/ADHD`, `r/getdisciplined`, `r/SaaS`, `r/SideProject`,
  `r/Entrepreneur`.
- Interests: Productivity, Technology, Software.
- Geo: start with US/CA/UK/AU (English), desktop + mobile.
- Bid: start with Reddit's suggested auto-bid; cap daily budget low while
  learning.

Narrow targeting = cleaner signal on a small budget. You can broaden later.

---

## 5. Write the ad creative

You already wrote excellent native-Reddit copy — use it. A **free-form / text
post ad** that reads like a real post outperforms a polished banner here.

**Headline / title:**

> I kept forgetting my best ideas across six different notes apps, so I built a
> place that only does one thing — catch them.

**Body:**

> Tried Notion, Apple Notes, sticky notes, phone memos… and opened none of
> them. So I made a tiny tool: one hotkey, type the thought, hit Enter, done —
> and the AI files it to the right project on its own. Free plan is plenty.
> Curious what features people would actually want.

**Destination URL:** your live landing page
(`https://<user>.github.io/driftnote/`).

**Call to action:** "Learn More" or "Sign Up".

Tips:
- Match the subreddit's voice; avoid hype and emoji-stuffing.
- Make 2–3 title variants to A/B (the title carries most of the click).
- Reddit shows a preview as it'll appear in-feed — check mobile.

---

## 6. Submit + pass review

- Ads enter **review** (often minutes to a day).
- Common rejection reasons: no privacy policy (we have `/privacy`), misleading
  claims, broken destination, or prohibited content. Keep claims honest —
  Driftnote is a waitlist, so "join the waitlist / early access" framing is
  truthful.

---

## 7. Measure + iterate

Watch in Ads Manager (and Events Manager):

- **CTR** — is the title pulling clicks? (iterate titles)
- **Landing → Lead rate** — of clicks, how many sign up? (iterate hero + CTA)
- **Cost per Lead** — your north-star for this test.

A useful first read needs ~100+ clicks. Then:
- Kill the worst title variant, double the best.
- If CTR is fine but signups are low, the page/offer is the problem.
- If CTR is low, the creative/targeting is the problem.

---

## Quick checklist

- [ ] Landing page live; `/` and `/privacy` load
- [ ] Waitlist form submits and shows success
- [ ] `NEXT_PUBLIC_REDDIT_PIXEL_ID` set; PageVisit + Lead verified in Events Manager
- [ ] (Optional) `NEXT_PUBLIC_FORMSPREE_ID` set so emails are actually captured
- [ ] Campaign created (Traffic to start), $5–10/day
- [ ] Ad group targeted to relevant communities
- [ ] 2–3 title variants using the native copy above
- [ ] Submitted for review
- [ ] Checking CTR / cost-per-Lead daily

Sources: Reddit Ads Help (ads.reddit.com), and 2026 budget/objective guidance
from stackmatix.com and almcorp.com.
