---
name: audit-v4
description: Deep answer-key audit of the BIG CCNA V4 bank (src/data/questionsV4.ts, 2085 questions), opening every exhibit image. Use when the user asks to verify, re-check, or fix the V4 answer keys — a whole range, a single question, or the full bank.
---

# Auditing BIG CCNA V4

`src/data/questionsV4.ts` — one flat `QUESTIONS_V4: Question[]`, ids `1..2085`,
cut into four sittings by `src/data/v4Parts.ts` (1‑500 / 501‑1000 / 1001‑1500 /
1501‑2085). Types in `src/types.ts`.

**979 questions carry an `image`** (12 also carry `image2`), 219 are `drag`,
45 are ungraded (LAB/SIMULATION walk-throughs plus off-blueprint items).

A full text-level pass was completed 2026‑08‑30 (log: `CCNA_V4_FULLCHECK_2085.md`).
120 items already carry a `⚠️ หมายเหตุ … เฉลยต้นฉบับตอบ X` note from earlier
corrections. **The remaining value is in the exhibits** — the earlier pass read
images only when an explanation looked thin. This skill is for the pass that
opens them.

## The one rule that matters

> **The exhibit is the authority.** Not the prompt's inline summary, not the
> explanation, not the dump's key.

Every real error found so far came from a picture nobody opened:
`[90/144]` misread as `[90/1441]` (#1508), a collisions counter of 6.6 billion
summarised in the prompt as "0 collisions" (#1728), two coverage cells that
turned out to share channel 11 (#1680), STP priorities that exist only in the
topology drawing (#1364 family).

## Workflow

### 1. Set up the loader once per session

`node .claude/skills/audit-v4/tools/setup.cjs` writes `v1.cjs` … `v4.cjs` into
`%TEMP%/ccna-audit-v4` — the `.ts` banks with their image imports stubbed out so
they can be `require`d — and prints a summary of the bank. Every other tool
reads those. Run it once per session; re-run it after you edit a bank.

### 2. Run the scripted pre-pass

`node .claude/skills/audit-v4/tools/audit.cjs` — catches keys pointing at
options that don't exist, `(Choose N)` vs `correct.length` mismatches,
single/multi mismatches, and `✅ ทำไม X ถูก` lines naming a letter that isn't
keyed.

`node .claude/skills/audit-v4/tools/xcheck.cjs` — duplicate prompts across
V1/V2/V3/V4, filtered to those with **both an identical option set and an
identical exhibit** (md5 of the PNG). Anything it prints is a genuine conflict.

Both currently return clean. If they still do, say so and move to step 3
rather than re-deriving them.

### 3. Review in batches, opening exhibits

`node .claude/skills/audit-v4/tools/dump.cjs <from> <to>` prints
id / kind / prompt / options / key compactly. Batches of 40–60 keep the
reasoning sharp.

For each item:

- Work the answer out from CCNA fundamentals **before** looking at the key.
- **If it has an `image`, open it** unless the explanation already quotes
  concrete values from it *and* your independent reasoning lands on the same
  answer. Small exhibits are unreadable at native size — upscale first:
  `python .claude/skills/audit-v4/tools/zoom.py <path> [factor]` writes an
  enlarged copy to the scratchpad, then `Read` that.
- Compare against sibling copies in V1/V2/V3 before concluding anything is
  wrong: `node .claude/skills/audit-v4/tools/siblings.cjs "<prompt fragment>"`.

### 4. Log every 100 questions

Append a section to `CCNA_V4_FULLCHECK_2085.md` under
`## บันทึกรายช่วง 100 ข้อ`, in the established format: the range, ✅/⚠️ status,
and bullets for the items that needed real thought (with the calculation, not
just "correct"). Update the status table at the top too. This is what makes the
work resumable — do it as you go, not at the end.

### 5. Verify before declaring done

`npx tsc --noEmit -p tsconfig.app.json` then `npm run build`, then re-run
`audit.cjs` and `xcheck.cjs`. Report the counts.

## Editing rules

1. **Change `correct` and `explanation`. Leave `prompt` and `options` alone.**
   The user practises against the same dump PDFs; rewording makes their
   practice diverge from the real exam. If an option's wording is what makes
   the question unanswerable, set the verified key and flag the wording in the
   report instead of silently fixing it.
   *Two documented exceptions:* an inline exhibit summary a previous pass added
   to the prompt that contradicts the attached image (#1728), and a prompt an
   explanation admits was reconstructed because the original was unreadable
   (#1508). The image wins in both.
2. **Every override gets a `⚠️ หมายเหตุ (แก้เฉลย): เดิม … คำตอบที่ถูกต้องคือ …`
   line at the top of the explanation**, naming what the old key was and what
   in the exhibit disproves it.
3. **Fix every copy together.** These questions repeat across V1/V2/V3/V4 —
   `#1680` had a twin in V1 `#429`, `#552` in V2 `#435`. Patch them in the same
   commit or the banks contradict each other.
4. **Where the published key is defensible but technically wrong, keep the key
   and document the objection.** Precedents: #1093 (the source offers three
   single-mode traits for two slots) and the #665 port-security drag. Write the
   real CCNA principle into the explanation under a `⚠️` heading so the user
   learns both the exam answer and the truth.
5. Options stay A → B → C → D. Option text stays English; Thai belongs in the
   explanation, the `[LAB — …]` tag, and drag bucket labels.

## Known false alarms — do not "fix" these

Hundreds of items share a prompt but differ underneath. Different keys there
are **correct**, not conflicts. Check the option set and the exhibit hash
before touching anything.

- **Same prompt, different option set.** The "What is a characteristic of an
  SSID / encryption / private IPv4 / a Layer 2 switch / frame switching / MAC
  learning" families; #760 vs #789 (SDN controller); #1321 vs #1479 (DNS
  lookup); #533 vs #529 (syslog notice level); #1057 vs #1993 (port security on
  a voice VLAN); #1201 vs #1825 (OfficeExtend vs FlexConnect).
- **Same prompt, different exhibit.** The EUI-64 families, the root-bridge
  families, "which interface is used to send traffic", #419 vs #903 (metric
  32445 vs 38443), #609 vs #2026 (Secure-up vs Secure-shutdown).
- **Root-bridge and cable-type items hide the deciding fact in the picture.**
  The prompt may list only MAC addresses while the topology drawing carries the
  STP priorities (#1364, #1375, #1383, #1387). See the
  `cable-type-pin-criteria` memory for the "which cable type" family — every
  variant that states pin roles answers crossover.
- Residual `EXPL_MISSING` / `NO_OK` / `EXPL_OK` hits from `audit.cjs` are
  explanation-style noise, not contradictions.

## Settled — do not re-litigate

| Item | Answer | Why |
|---|---|---|
| #665 · #1522 · #1717 · V1 #492 · V2 #730 | slot 4 = `mac-address sticky` | `violation shutdown` is already the default; "random" picks sticky out of the three `mac-address` options. Technical objection documented in the explanation. |
| #1093 | multimode gets "ideal over longer distances" | Source is defective — three single-mode traits for two slots. Documented. |
| #1224 · #1844 · V1 #943 | crossover | Pin roles stated for both ends ⇒ same wiring ⇒ must cross. |
| #159 · #164 | "forwards traffic to the next hop" | Agrees across V1/V2/V4. |
| #437 family | "forwards multicast hello messages between routers" | Agrees across V1/V2/V4. |
| #1508 | single, key B (F0/11) | Exhibit reads `[90/144]`. |
| #1680 · V1 #429 | zones 3 and 4 | Zones 3 and 6 don't overlap; 3 and 4 do and share channel 11. |

## Reference

`references/checklist.md` — the per-question checklist and the CCNA facts these
2085 questions lean on most (AD table, block sizes, DTP/LACP/PAgP matrices, STP
port states, violation modes, WLC interfaces, syslog levels).
