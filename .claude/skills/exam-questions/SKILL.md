---
name: exam-questions
description: Add or correct CCNA 200-301 exam questions in src/data/questions.ts from a dump PDF. Use whenever the user sends exam pages and asks to extend the question bank or fix an answer key.
---

# Adding CCNA exam questions

The bank lives in `src/data/questions.ts` — one flat `QUESTIONS: Question[]`,
ids `1..N`, currently **1–300**. Types are in `src/types.ts`.

## Non-negotiable rules

1. **The dump's answer key is often wrong.** Roughly 1 in 8 answers in these
   PDFs is incorrect. Never copy the key. Reason it out from CCNA
   fundamentals, and `WebSearch` anything debatable (ExamTopics /
   itexamanswers / 9tut). Corrections found so far: Q103, 110, 128, 148, 150,
   162, 163, 182, 184, 186, 191, 192, 193, 198, 201, 217, 218, 219, 221, 226,
   229, 232, 242, 251, 252, 271, 272, 279, 292.
2. **When you override the key, say so in the explanation** with a
   `⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ X แต่ … คำตอบที่ถูกต้องคือ Y` line. The user is
   studying from the same PDF and will otherwise think the app is broken.
3. **Options stay in A → B → C → D order.** The app shuffles *questions*, never
   options (`App.tsx` deliberately does not shuffle `q.options`).
4. **Images come from `src/assets/example/question_<id>.png`.** Check what
   exists first — `ls src/assets/example/` — and only set `image:` for ids that
   have a file. If a routing table is the whole exhibit and there's no PNG,
   paste the table into the `prompt` as text instead.

## Question shape

```ts
{ id, kind: 'single' | 'multi' | 'drag', image?, prompt, options, correct, explanation }
```

- `multi` → `correct` has 2+ keys; the UI shows "Choose N" from its length.
- `drag` → `categories: [{ name, items }]`. The pool is built from
  `categories.flatMap(c => c.items)`, so **a distractor that belongs to no
  category will never appear**. For "not all statements are used" questions,
  add a decoy category named `ไม่ใช้ (ตัวลวง)` holding the unused items.

## Explanation format (Thai, this exact skeleton)

The user is sitting an exam. Explanations teach, they don't just assert.

```
📘 แนวคิด — <the concept / table / rule the question tests>
   <the CCNA facts needed: AD table, block size, DTP matrix, port states…>

✅ ทำไม <X> ถูก: <reasoning, showing the calculation step by step>

❌ ทำไมข้ออื่นผิด:
A. <why this specific distractor fails>
B. <…>

📗 จำไว้สอบ: <the one line worth memorising>
```

Optional: `⚠️ หมายเหตุ` for an overridden key, `🔍` for reading values out of an
exhibit.

**No box-drawing tables with Thai text inside the cells.** Thai glyphs aren't
monospace, so `│` columns drift and it looks broken. Pure-ASCII cells
(`auto`/`TRUNK`/numbers) are fine. Anything with Thai → use `•` bullets.

## Workflow

1. `ls src/assets/example/` → know which ids have exhibits.
2. Work through the PDF; for each question decide the *correct* answer, not the
   printed one. `WebSearch` the debatable ones.
3. Append to `questions.ts`; add `import qNNN from '../assets/example/question_NNN.png'`
   at the top for each new image.
4. Integrity check — must print 0 dups / 0 missing:
   ```bash
   grep -oE "id: [0-9]+" src/data/questions.ts | grep -oE "[0-9]+" | sort -n > /tmp/ids.txt
   comm -23 <(seq 1 300) /tmp/ids.txt   # missing
   sort /tmp/ids.txt | uniq -d          # dups
   ```
5. Run the **`verify`** skill (build → preview → drive in Chromium). Not tests.
