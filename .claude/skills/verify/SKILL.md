---
name: verify
description: Build, run, and drive the CCNA practice-exam app in a real browser to prove a change works. Use after any change to questions data, components, or styles.
---

# Verify — CCNA practice exam app

Runtime observation only. Typecheck and lint are **not** verification here — they
never catch the bugs this app actually has (misaligned explanation tables, a
theme that flips to dark on someone else's OS, shuffled answer options).

## Stack

Vite 8 + React 19 + TypeScript + **Tailwind CSS v4** (`@tailwindcss/vite`).
All styling lives in `src/index.css` (`@theme` tokens + `@layer components`).
There is no `App.css` and no `tailwind.config.js` — v4 is CSS-first.

## Build + serve

```bash
npx vite build                       # must be clean
npx vite preview --port 4321 &       # serve the built bundle
curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/   # expect 200
```

Use a **fresh port** each run; kill the old one (`pkill -f "vite preview"`)
or you will silently test a stale bundle.

## Drive it (Playwright)

Playwright is available via `npx` (no repo dep). Install once into the
scratchpad, then drive the built app:

```bash
cd "$SCRATCHPAD" && npm i playwright@1.60.0 --silent
```

Always launch with **`colorScheme: 'dark'`**. The exam sheet deliberately
commits to one white theme; emulating an OS in dark mode is the only way to
prove the theme holds for a user whose Windows is dark (this was a real bug).

```js
const ctx = await browser.newContext({ viewport: { width: 1600, height: 1000 }, colorScheme: 'dark' })
```

### The checks that matter

| Check | How | Expect |
|---|---|---|
| White theme wins | `getComputedStyle(document.body).backgroundColor` | `rgb(255, 255, 255)` |
| Full-width layout | `#root` bounding width | == viewport width |
| Options not shuffled | `$$eval('.opt-key', e => e.textContent)` | `A,B,C,D…` in order |
| Question count | start screen text | mentions `300` |
| Grading works | click `.opt`, click `ตรวจคำตอบ` | `.opt.correct` appears |
| Explanation renders | `.feedback-body` text | contains `📘`, `✅`, `❌` |
| No runtime errors | `page.on('pageerror')` | none |

Question order is **randomized**, so to reach a specific question you must loop:
read `.qnum-badge` (`Q123`), click `ข้อถัดไป`, repeat until the id matches.

### Probes worth running

- Force-click a different option **after** grading → inputs must all be
  `disabled` and the marks must not change (answer is locked).
- `ตรวจคำตอบ` button must be **gone** after grading (no re-grade).
- Screenshot a question whose explanation contains `┌` — ASCII tables must
  stay aligned. Thai text inside table cells breaks alignment; if you see
  drift, the fix is to convert that table to a bullet list, not to fight CSS.

## Gotchas

- `.feedback-body` is `white-space: pre-wrap` + mono-first font on purpose.
  Switching it to `pre-line` collapses the indentation in the explanations.
- Drag questions render `.drag-category`, not `.opt` — a driver that assumes
  `.opt` exists will hang on them. Check `.qkind-badge` first.
