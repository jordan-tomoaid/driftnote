---
name: web-interface-guidelines
description: Vercel's Web Interface Guidelines — concise MUST/SHOULD/NEVER rules for building accessible, fast, delightful UIs. Use when building or reviewing any web UI (interactions, accessibility, forms, layout, animation, performance). Source - vercel-labs/web-interface-guidelines.
metadata:
  author: vercel-labs
  source: https://github.com/vercel-labs/web-interface-guidelines
---

# Web Interface Guidelines (Vercel Labs)

Concise rules for building accessible, fast, delightful UIs. Rules use
MUST / SHOULD / NEVER to guide decisions.

## How to use

- **When building UI**: read `guidelines.md` and apply the MUST/SHOULD/NEVER
  rules as you write components (keyboard support, focus states, hit targets,
  form behavior, loading/empty/error states, motion, performance).
- **When reviewing UI**: follow `review-command.md` — read the target files,
  check each against the rules in `guidelines.md`, and output findings in a
  terse `file:line` format. High signal-to-noise.

## Reference files

- `guidelines.md` — the full ruleset (interactions, accessibility, forms,
  state & navigation, content, layout, animation, performance).
- `review-command.md` — the review procedure and condensed rule checklist.

Apply these especially to the landing page hero, the waitlist form (Enter to
submit, inline validation, loading spinner that keeps its label, paste-friendly
inputs, ≥16px font on mobile), and all focus-visible states.
