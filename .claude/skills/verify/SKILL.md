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
| Canvas theme wins | `getComputedStyle(document.body).backgroundColor` | `rgb(238, 242, 247)` |
| No sideways scroll | `documentElement.scrollWidth <= innerWidth` | true, desktop *and* 390px |
| Exhibit never upscaled | `.exhibit img` rect width vs `naturalWidth` | rect ≤ natural (see below) |
| Options re-lettered | `$$eval('.opt-key', e => e.textContent)` | `A B C D` in order |
| Bank window honoured | `.qcard-no` ids over a BIG part paper | all inside the part's range |
| Grading works | press `a`, press `Enter` | `.opt.is-key` appears, `.exp` card renders |
| Explanation renders | `.exp-body` text | contains `📘`, `✅`, `❌` |
| Scroll resets | scroll down, click `ข้อถัดไป` | `window.scrollY === 0` |
| Sidebar has no scrollbar | `.quiz-aside` scrollHeight vs clientHeight | equal; `overflow-y: visible` |
| Ungraded items score nothing | answer a `.qcard-free` card | ถูก/ผิด stat tiles unchanged |
| No runtime errors | `page.on('pageerror')` | none |

Question order is **randomized**, so to reach a specific question you must loop:
read `.qcard-no` (`Question #123`), click `ข้อถัดไป`, repeat until the id matches.

The app is **keyboard-drivable**, which makes drivers much shorter: `a`–`e` (or
`1`–`5`) selects, `Enter` reveals then advances, `←`/`→` move between questions.

### Probes worth running

- **Exhibit sizing** is the single easiest thing to regress. The screenshots are
  ~680×390 native; an earlier `.exhibit img { width: 100% }` blew them up 50%
  into a blurry full-screen wall. Assert the rendered width never exceeds
  `naturalWidth`, and that `.exhibit-zoom` opens `.lightbox` with the image at
  1:1 (`max-w-none`), Esc closing it.
- Force-click a different option **after** grading → inputs must all be
  `disabled` and the marks must not change (answer is locked).
- `Reveal Solution` must be **gone** after grading (no re-grade).
- Screenshot a question whose explanation contains `┌` — ASCII tables must
  stay aligned. Thai text inside table cells breaks alignment; if you see
  drift, the fix is to convert that table to a bullet list, not to fight CSS.
- **Option shuffling** (`.switch-row input`, on by default) re-letters the
  options *and* rewrites every option letter in the explanation. The check
  that actually catches a regression is not "did the order change" — it is:
  load the bank in node (`loadBank.cjs` pattern: strip the `import` lines,
  drop the `: Question[]` annotation, `new Function` the rest), then for each
  question confirm the text behind `.opt.is-key` equals the text of the bank's
  `correct` letters, and that the letters listed under `❌ ทำไมข้ออื่นผิด:` are
  exactly the non-key options with no duplicates. With the switch off, the
  rendered order must equal the bank's order exactly.

## Gotchas

- `.exp-body` is `white-space: pre-wrap` + mono-first font on purpose.
  Switching it to `pre-line` collapses the indentation in the explanations.
- Drag questions render `.dd-item` (left) and `.dd-target` (right), not
  `.opt` — a driver that assumes `.opt` exists will hang on them. Check
  `.qcard-kind` first.
- Click a drag target on its `.dd-target-label`, not the box centre: the
  centre may sit over an already-placed `.dd-chip`, whose own handler pulls
  that chip back out, so a naive fill loop nets one placement.
- On the start screen, **do not** select panels with `.panel:nth-of-type(n)` —
  `nth-of-type` counts every sibling `div`, so it silently picks the wrong
  panel and the test "fails" against a perfectly good app. Filter by heading:
  `page.locator('.panel').filter({ has: page.locator('h2:has-text("…")') })`.
- The sidebar is `position: sticky` and must have **no scrollbar of its own** —
  a nested scrollbar beside the page scrollbar was a reported complaint. It
  fits because the navigator pages in blocks of 50 (`Navigator.PAGE`) and the
  keyboard card is hidden under `@media (max-height: 860px)`. If a sidebar card
  grows, shrink the block size; do not put `overflow-y` back.
- **Scoring skips ungraded questions** (`utils/scoring.ts#isUngraded`): the 9
  off-blueprint strays flagged `ungraded: true` in the bank, plus the 36
  `[LAB — ไม่คิดคะแนน] SIMULATION` walk-throughs, which carry a single dummy
  option that would otherwise score correct every time. They render a
  `.qcard-free` pill and a neutral navigator swatch, and `EXAM_POOL` leaves them
  out so a mock paper is 100 scoreable questions.
  The trap: `[LAB — OSPF]`, `[LAB — EtherChannel]` and the other nine
  topic-tagged LAB items are **ordinary four-option questions that must keep
  counting** — match on `ไม่คิดคะแนน`/`SIMULATION`, never on `[LAB` alone.
  Assert it in node: every ungraded question is either `ungraded: true` or has
  exactly one option.
