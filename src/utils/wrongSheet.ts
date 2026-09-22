import type { ChoiceQuestion } from '../types'
import { absoluteUrl, escapeHtml, printHtml } from './printFrame'
import { questionRef, type WrongItem, type WrongLine } from './review'

export interface SheetOptions {
  /** Headline on the sheet, e.g. `ข้อที่ตอบผิด — สอบจำลอง`. */
  title: string
  /** One line of context under it: score, date, how many questions. */
  subtitle: string
  /** Carry the exhibits. Off makes a much lighter file for text-only questions. */
  includeImages: boolean
  /** Move the key to its own section at the back so the sheet can be worked blind. */
  separateKey: boolean
  /** Document title — what the browser offers as the PDF's file name. */
  fileName: string
}

const esc = escapeHtml
const absolute = absoluteUrl

/**
 * A4 at 12–13mm margins gives a 186mm text column, and everything below is
 * sized against it: 9.5–10pt type, so a four-option question and its key take
 * about a fifth of a page; exhibits capped at 118×58mm, so a question with a
 * topology still leaves room for its options; `break-inside: avoid` on every
 * block, so nothing is split across the fold.
 */
const SHEET_CSS = `
@page { size: A4 portrait; margin: 13mm 12mm 12mm; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: 'Inter', 'Noto Sans Thai', system-ui, 'Segoe UI', Roboto, sans-serif;
  font-size: 10pt; line-height: 1.38; color: #0f2333;
  -webkit-print-color-adjust: exact; print-color-adjust: exact;
}
.head { border-bottom: 1.4pt solid #1e5fbf; padding-bottom: 3mm; margin-bottom: 5mm; }
.head h1 { margin: 0; font-size: 15pt; letter-spacing: -0.2pt; }
.head p { margin: 1.5mm 0 0; font-size: 8.5pt; color: #5b7086; }
.q {
  break-inside: avoid; page-break-inside: avoid;
  border: 0.5pt solid #d6dee8; border-left: 2.2pt solid #d0434a; border-radius: 1.6mm;
  padding: 2.6mm 3.4mm; margin: 0 0 2.8mm;
}
.q-head { font-size: 8.5pt; color: #5b7086; margin-bottom: 1.6mm; }
.q-no { font-weight: 700; color: #1e5fbf; font-size: 9.5pt; }
.q-sep { color: #c3cfdc; margin: 0 1.6mm; }
.q-blank { color: #b8622a; font-weight: 700; }
.q-prompt { margin: 0 0 2mm; font-size: 10pt; font-weight: 500; white-space: pre-wrap; }
.q-img {
  display: block; max-width: 118mm; max-height: 58mm; height: auto;
  margin: 0 0 2mm; border: 0.5pt solid #d6dee8; border-radius: 1mm;
}
.opts { margin: 0; padding: 0; list-style: none; }
.opts li { display: flex; gap: 2mm; padding: 0.25mm 0; font-size: 9.5pt; }
.opts .k { flex: 0 0 4.5mm; font-weight: 700; color: #5b7086; }
.opts .t { flex: 1; white-space: pre-wrap; }
.ans { margin-top: 2mm; border-top: 0.5pt dashed #c3cfdc; padding-top: 1.6mm; font-size: 9.5pt; }
.ans-row { display: flex; gap: 2mm; padding: 0.2mm 0; }
.ans-row .tag { flex: 0 0 19mm; font-weight: 700; }
.ans-row .val { flex: 1; white-space: pre-wrap; }
.ok .tag { color: #157347; }
.bad .tag { color: #c0392b; }
.keys { margin-top: 2mm; columns: 2; column-gap: 7mm; }
.keys .kr {
  break-inside: avoid; page-break-inside: avoid;
  font-size: 9pt; padding: 0.9mm 0; border-bottom: 0.4pt dotted #d6dee8;
}
.keys .kr b { color: #1e5fbf; }
.sec { break-before: page; page-break-before: always; }
.sec h2 { margin: 0 0 3mm; font-size: 12.5pt; border-bottom: 1pt solid #1e5fbf; padding-bottom: 2mm; }
.foot { margin-top: 5mm; font-size: 8pt; color: #8496a8; text-align: center; }
`

function optionRows(rows: { key: string; text: string }[]) {
  const li = rows
    .map((o) => `<li><span class="k">${esc(o.key)}.</span><span class="t">${esc(o.text)}</span></li>`)
    .join('')
  return `<ul class="opts">${li}</ul>`
}

const linesText = (lines: WrongLine[], joiner: string) =>
  lines.map((l) => `${l.label}${joiner}${l.text}`).join('\n')

function answerBlock(item: WrongItem, joiner: string) {
  const yours = item.unanswered ? 'ไม่ได้ตอบ' : linesText(item.yours, joiner)
  return `<div class="ans">
    <div class="ans-row bad"><span class="tag">คุณตอบ</span><span class="val">${esc(yours)}</span></div>
    <div class="ans-row ok"><span class="tag">เฉลย</span><span class="val">${esc(linesText(item.key, joiner))}</span></div>
  </div>`
}

/** Drag targets are the answer, so the sheet lists the chips to be sorted instead of options. */
const joinerFor = (item: WrongItem) => (item.question.kind === 'drag' ? ' → ' : '. ')

function questionHtml(item: WrongItem, opts: SheetOptions) {
  const q = item.question
  const ref = questionRef(q)
  const kind =
    q.kind === 'drag'
      ? 'Drag & drop'
      : q.kind === 'multi'
        ? `Multiple choice · choose ${(q as ChoiceQuestion).correct.length}`
        : 'Single choice'
  const images = opts.includeImages ? ([q.image, q.image2].filter(Boolean) as string[]) : []
  const rows =
    q.kind === 'drag'
      ? q.categories.flatMap((c) => c.items).map((text, i) => ({ key: String(i + 1), text }))
      : q.options.map((o) => ({ key: o.key, text: o.text }))
  return `<article class="q">
    <div class="q-head"><span class="q-no">ข้อ ${item.index + 1}</span><span class="q-sep">·</span>Question #${esc(
      ref.number,
    )}${ref.origin ? `<span class="q-sep">·</span>${esc(ref.origin)}` : ''}<span class="q-sep">·</span>${kind}${
      item.unanswered ? '<span class="q-sep">·</span><span class="q-blank">ไม่ได้ตอบ</span>' : ''
    }</div>
    ${images.map((src) => `<img class="q-img" src="${esc(absolute(src))}" alt="">`).join('')}
    <p class="q-prompt">${esc(q.prompt)}</p>
    ${optionRows(rows)}
    ${opts.separateKey ? '' : answerBlock(item, joinerFor(item))}
  </article>`
}

function keySectionHtml(items: WrongItem[]) {
  const rows = items
    .map(
      (item) =>
        `<div class="kr"><b>ข้อ ${item.index + 1}</b> — ${esc(
          linesText(item.key, joinerFor(item)).replace(/\n/g, ' | '),
        )}</div>`,
    )
    .join('')
  return `<section class="sec"><h2>เฉลย</h2><div class="keys">${rows}</div></section>`
}

export function buildSheetHtml(items: WrongItem[], opts: SheetOptions) {
  return `<!doctype html><html lang="th"><head><meta charset="utf-8">
<title>${esc(opts.fileName)}</title><style>${SHEET_CSS}</style></head><body>
<div class="head"><h1>${esc(opts.title)}</h1><p>${esc(opts.subtitle)}</p></div>
${items.map((item) => questionHtml(item, opts)).join('')}
${opts.separateKey ? keySectionHtml(items) : ''}
<div class="foot">CCNA 200-301 · ${items.length} ข้อ · สร้างจากแอปฝึกทำข้อสอบ</div>
</body></html>`
}

/**
 * Hand the sheet to the browser's own PDF writer (see `utils/printFrame.ts`).
 */
export async function printWrongSheet(items: WrongItem[], opts: SheetOptions) {
  await printHtml(buildSheetHtml(items, opts), { fileName: opts.fileName })
}
