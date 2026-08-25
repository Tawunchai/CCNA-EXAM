import type { ChoiceQuestion, Question } from '../types'
import { shuffle } from './shuffle'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

/**
 * Every shape an explanation uses to name an answer choice. Both alternatives
 * live in ONE regex on purpose: a single `String.replace` pass never re-reads
 * the text it has already written, so no letter can be remapped twice.
 * Running the two as separate passes silently mangled the first line under
 * "❌ ทำไมข้ออื่นผิด:" — the enumerated `C.` became `B.`, then the second pass
 * matched `ผิด:` + newline + that fresh `B` and moved it again, producing two
 * `B.` lines and no `C.`.
 *
 * 1. An enumerated line — the "❌ ทำไมข้ออื่นผิด:" block writes one per wrong
 *    option: `A. ip default-gateway ใช้กับ…`. Anchored to the start of a line
 *    and required to be followed by `.` or `)`, so a routing-table line
 *    (`D 192.168.30.0/24 [90/30720]`, `B* 0.0.0.0/0`) is never mistaken for
 *    an option reference.
 *
 * 2. An in-sentence reference. A bare capital letter is far too common in this
 *    bank to rewrite on sight — it is also an EIGRP/OSPF/BGP route code, a DNS
 *    record type, a hex digit and a device name ("Router A", "R=RIP, B=BGP",
 *    "0-9 และ A-F") — so a letter is only rewritten when it directly follows a
 *    phrase that can introduce nothing else: `✅ ทำไม B ถูก: B ให้ฝั่ง…`,
 *    `❌ ทำไมข้ออื่นผิด: A และ C`, `คำตอบที่ถูกต้องคือ C,E`, `ตัวเลือก D)`,
 *    `เฉลยต้นฉบับตอบ B แต่ B ใช้…`, `→ ตัด C และ D ทิ้ง`, `…สูงสุด ส่วน A บังคับ…`.
 *
 *    The three trailing guards are what keep those phrases from catching
 *    something that only looks like an option:
 *      • `-` / `–` — the one range reference in the bank, "ตัวเลือก A–D
 *        ในเอกสารต้นฉบับ…", must not be half-rewritten;
 *      • a route-code or `record` suffix — "บรรทัดที่ตรงคือ D 192.168.30.0/24",
 *        "รหัสที่เห็นคือ D EX ของ EIGRP", "✅ ทำไม D ถูก: A record (ย่อมาจาก…";
 *      • ` ได้` — "ป้าย cost … คือ A ได้ 20, B ได้ 40" labels paths in an
 *        exhibit, not answer choices.
 *    The IP guard deliberately needs *two* dots: "❌ ข้ออื่นผิด: A 802.1x เป็น…"
 *    is a real option reference that a one-dot guard would swallow.
 */
const LETTER_REF =
  /(^|\n)([A-H])(?=[.)]\s)|(ทำไม|ผิด:|ถูก:|เลือก|ข้อ|คือ|ตอบ|เฉลย:|แต่|ตัด|ส่วน)(\s*)([A-H](?:\s*(?:,|และ|กับ|หรือ|\+|\/)\s*[A-H])*)(?![-–A-Za-z0-9])(?!\s+(?:EX|E1|E2|N1|N2|IA|record)\b)(?!\s+ได้)(?!\s+\d+\.\d+\.)/g

/** Rewrite every option letter an explanation mentions to its new label. */
export function remapExplanation(text: string, map: Record<string, string>): string {
  const swap = (letter: string) => map[letter] ?? letter
  return text.replace(
    LETTER_REF,
    (_m, lead: string | undefined, letter: string, phrase: string, gap: string, list: string) =>
      letter === undefined ? phrase + gap + list.replace(/[A-H]/g, swap) : lead + swap(letter),
  )
}

/**
 * Options that only make sense in their printed position — "all of the above"
 * points at the options above it, so the question breaks the moment the order
 * moves.
 */
function isOrderBound(q: ChoiceQuestion): boolean {
  return q.options.some((o) => /\b(above|below)\b/i.test(o.text))
}

/**
 * Re-deal one question's answer choices.
 *
 * The options are shuffled and then *re-lettered* A → B → C … in their new
 * order, so the sheet still reads like a real exam page rather than a jumbled
 * `C. / A. / D.` list. Everything keyed off the old letters is carried along:
 * `correct`, `optionNotes`, and every letter the Thai explanation mentions.
 * The returned question is a copy — the bank in `data/` is never touched.
 */
export function randomizeChoiceQuestion(q: ChoiceQuestion): ChoiceQuestion {
  if (q.options.length < 2 || isOrderBound(q)) return q

  const dealt = shuffle(q.options)
  const map: Record<string, string> = {}
  const options = dealt.map((o, i) => {
    map[o.key] = LETTERS[i]
    return { key: LETTERS[i], text: o.text }
  })
  if (options.every((o, i) => o.text === q.options[i].text)) return q

  const order = (a: string, b: string) => a.localeCompare(b)
  const correct = q.correct.map((k) => map[k] ?? k).sort(order)

  let optionNotes: Record<string, string> | undefined
  if (q.optionNotes) {
    optionNotes = Object.fromEntries(
      Object.entries(q.optionNotes)
        .map(([k, v]) => [map[k] ?? k, v] as const)
        .sort((a, b) => order(a[0], b[0])),
    )
  }

  return { ...q, options, correct, optionNotes, explanation: remapExplanation(q.explanation, map) }
}

/** Re-deal the choices of every choice question in a paper; drags pass through. */
export function randomizeOptions(questions: Question[]): Question[] {
  return questions.map((q) => (q.kind === 'drag' ? q : randomizeChoiceQuestion(q)))
}
