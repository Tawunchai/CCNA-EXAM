import type { ChoiceQuestion, DragQuestion, Question } from '../types'
import { absoluteUrl, escapeHtml, printHtml } from './printFrame'
import { questionRef } from './review'
import { isUngraded } from './scoring'

/**
 * A whole set of the bank as a printable question paper.
 *
 * Unlike the wrong-answer sheet (`utils/wrongSheet.ts`), which exports what a
 * single sitting got wrong, this exports a *set* straight from the bank so it
 * can be worked on paper: questions in their original BIG order, exhibits
 * attached, and the key gathered in one block at the very back — answers only,
 * no explanation, because the explanations run several paragraphs each and
 * would multiply the page count of a paper meant to be worked, not read.
 *
 * Option letters in the file are the bank's own order — the A/B/C/D shuffle the
 * app offers is deliberately not applied, so the letters in the key at the back
 * always match the letters printed beside each question.
 */
export interface BankSheetOptions {
  /** Headline on the first page, e.g. `BIG CCNA — ชุดที่ 2`. */
  title: string
  /** One line of context under it: range, how many questions, date. */
  subtitle: string
  /** Carry the exhibits. Off makes a far lighter file — a 200-question set with every topology can run to tens of MB. */
  includeImages: boolean
  /** Document title — what the browser offers as the PDF's file name. */
  fileName: string
}

const esc = escapeHtml

/**
 * A4 at 12–13mm margins gives a 186mm text column, and everything below is
 * sized against it: 9.5–10pt type, so a prompt and four options take about a
 * fifth of a page; exhibits capped at 118×58mm, so a question with a topology
 * still leaves room for its options; `break-inside: avoid` on every block, so
 * no question is split across the fold. The key at the back runs three columns
 * of letters — 200 rows would otherwise sprawl over several pages.
 */
const PAPER_CSS = `
@page { size: A4 portrait; margin: 13mm 12mm 12mm; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: 'Inter', 'Noto Sans Thai', system-ui, 'Segoe UI', Roboto, sans-serif;
  font-size: 10pt; line-height: 1.38; color: #0f2333;
  -webkit-print-color-adjust: exact; print-color-adjust: exact;
}
.head { border-bottom: 1.4pt solid #1e5fbf; padding-bottom: 3mm; margin-bottom: 5mm; }
.head h1 { margin: 0; font-size: 16pt; letter-spacing: -0.2pt; }
.head p { margin: 1.5mm 0 0; font-size: 8.5pt; color: #5b7086; }
.head .hint { color: #1e5fbf; font-weight: 700; }
.q {
  break-inside: avoid; page-break-inside: avoid;
  border: 0.5pt solid #d6dee8; border-left: 2.2pt solid #1e5fbf; border-radius: 1.6mm;
  padding: 2.6mm 3.4mm; margin: 0 0 2.8mm;
}
.q-head { font-size: 8.5pt; color: #5b7086; margin-bottom: 1.6mm; }
.q-no { font-weight: 700; color: #1e5fbf; font-size: 10.5pt; }
.q-sep { color: #c3cfdc; margin: 0 1.6mm; }
.q-lab { color: #7a5cc4; font-weight: 700; }
.q-prompt { margin: 0 0 2mm; font-size: 10pt; font-weight: 500; white-space: pre-wrap; }
.q-img {
  display: block; max-width: 118mm; max-height: 58mm; height: auto;
  margin: 0 0 2mm; border: 0.5pt solid #d6dee8; border-radius: 1mm;
}
.opts { margin: 0; padding: 0; list-style: none; }
.opts li { display: flex; gap: 2mm; padding: 0.25mm 0; font-size: 9.5pt; }
.opts .k { flex: 0 0 4.5mm; font-weight: 700; color: #5b7086; }
.opts .t { flex: 1; white-space: pre-wrap; }
.drag { display: flex; gap: 5mm; margin-top: 0.6mm; }
.drag-col { flex: 1; min-width: 0; }
.drag-col h4 { margin: 0 0 1mm; font-size: 8pt; color: #5b7086; text-transform: uppercase; letter-spacing: 0.3pt; }
.drops { margin: 0; padding: 0; list-style: none; }
.drops li { font-size: 9.5pt; font-weight: 600; padding: 0.9mm 0 1.6mm; border-bottom: 0.5pt dashed #c3cfdc; }
.sec { break-before: page; page-break-before: always; }
.sec h2 { margin: 0 0 3mm; font-size: 13pt; border-bottom: 1pt solid #1e5fbf; padding-bottom: 2mm; }
.sec h2.again { margin-top: 7mm; }
.keys { columns: 3; column-gap: 6mm; }
.keys-wide { columns: 2; column-gap: 7mm; }
.kr {
  break-inside: avoid; page-break-inside: avoid;
  font-size: 8.8pt; line-height: 1.32; padding: 0.9mm 0; border-bottom: 0.4pt dotted #d6dee8;
}
.kr b { color: #1e5fbf; }
.kr .kk { font-weight: 700; color: #157347; }
.kr .kt { color: #35506a; }
.foot { margin-top: 5mm; font-size: 8pt; color: #8496a8; text-align: center; }
`

/** The chips to sort, alphabetised so the printed pool does not hand over the grouping. */
const dragPool = (q: DragQuestion) =>
  q.categories
    .flatMap((c) => c.items)
    .slice()
    .sort((a, b) => a.localeCompare(b))

function kindLabel(q: Question) {
  if (q.kind === 'drag') return 'Drag &amp; drop'
  if (q.kind === 'multi') return `Multiple choice · เลือก ${q.correct.length} ข้อ`
  return 'Single choice'
}

function bodyHtml(q: Question) {
  if (q.kind === 'drag') {
    const pool = dragPool(q)
      .map((text, i) => `<li><span class="k">${i + 1}.</span><span class="t">${esc(text)}</span></li>`)
      .join('')
    const drops = q.categories.map((c) => `<li>${esc(c.name)}</li>`).join('')
    return `<div class="drag">
      <div class="drag-col"><h4>รายการที่ต้องลาก</h4><ul class="opts">${pool}</ul></div>
      <div class="drag-col"><h4>กล่องที่ต้องวาง</h4><ul class="drops">${drops}</ul></div>
    </div>`
  }
  const li = (q as ChoiceQuestion).options
    .map((o) => `<li><span class="k">${esc(o.key)}.</span><span class="t">${esc(o.text)}</span></li>`)
    .join('')
  return `<ul class="opts">${li}</ul>`
}

function questionHtml(q: Question, opts: BankSheetOptions) {
  const ref = questionRef(q)
  const images = opts.includeImages ? ([q.image, q.image2].filter(Boolean) as string[]) : []
  const lab = isUngraded(q) ? '<span class="q-sep">·</span><span class="q-lab">ไม่คิดคะแนน</span>' : ''
  return `<article class="q">
    <div class="q-head"><span class="q-no">ข้อ ${esc(ref.number)}</span><span class="q-sep">·</span>${kindLabel(
      q,
    )}${lab}</div>
    ${images.map((src) => `<img class="q-img" src="${esc(absoluteUrl(src))}" alt="">`).join('')}
    <p class="q-prompt">${esc(q.prompt)}</p>
    ${bodyHtml(q)}
  </article>`
}

/** Just the letters — what a whole set is checked against in one pass. */
function shortKey(q: Question) {
  if (q.kind === 'drag') return 'ลากวาง'
  return q.options
    .filter((o) => q.correct.includes(o.key))
    .map((o) => o.key)
    .join(', ')
}

/** The same key again with the answer text, for the ones worth reading back. */
function longKeyText(q: Question) {
  if (q.kind === 'drag') return q.categories.map((c) => `${c.name} → ${c.items.join(' · ')}`).join(' | ')
  const picked = q.options.filter((o) => q.correct.includes(o.key))
  // LAB walk-throughs carry a single placeholder option; their real answer is the
  // config in the explanation, which this sheet deliberately leaves out.
  if (isUngraded(q) && q.options.length === 1) return 'ข้อแล็บ — ไม่คิดคะแนน (ดูชุดคำสั่งเฉลยในแอป)'
  return picked.map((o) => o.text).join(' | ')
}

function keySectionHtml(questions: Question[]) {
  const short = questions
    .map((q) => `<div class="kr"><b>${esc(questionRef(q).number)}</b> <span class="kk">${esc(shortKey(q))}</span></div>`)
    .join('')
  const long = questions
    .map(
      (q) =>
        `<div class="kr"><b>${esc(questionRef(q).number)}</b> <span class="kk">${esc(
          shortKey(q),
        )}</span> <span class="kt">${esc(longKeyText(q))}</span></div>`,
    )
    .join('')
  return `<section class="sec">
    <h2>เฉลย</h2>
    <div class="keys">${short}</div>
    <h2 class="again">เฉลย (พร้อมข้อความคำตอบ)</h2>
    <div class="keys-wide">${long}</div>
  </section>`
}

export function buildBankSheetHtml(questions: Question[], opts: BankSheetOptions) {
  const ordered = questions.slice().sort((a, b) => a.id - b.id)
  return `<!doctype html><html lang="th"><head><meta charset="utf-8">
<title>${esc(opts.fileName)}</title><style>${PAPER_CSS}</style></head><body>
<div class="head"><h1>${esc(opts.title)}</h1><p>${esc(opts.subtitle)}</p>
<p class="hint">เฉลยอยู่หน้าสุดท้าย · ไม่มีคำอธิบาย</p></div>
${ordered.map((q) => questionHtml(q, opts)).join('')}
${keySectionHtml(ordered)}
<div class="foot">CCNA 200-301 · ${ordered.length} ข้อ · สร้างจากแอปฝึกทำข้อสอบ</div>
</body></html>`
}

/**
 * Build the paper and hand it to the browser's PDF writer.
 *
 * The image wait is generous: a 200-question set can carry over a hundred
 * exhibits, and printing before they decode would leave empty boxes in the file.
 */
export async function printBankSheet(questions: Question[], opts: BankSheetOptions) {
  await printHtml(buildBankSheetHtml(questions, opts), {
    fileName: opts.fileName,
    imageTimeoutMs: opts.includeImages ? 45_000 : 2000,
  })
}
