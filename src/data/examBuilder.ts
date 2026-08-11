import { QUESTIONS } from './questions'
import { QUESTIONS_V2 } from './questionsV2'
import { QUESTIONS_V3 } from './questionsV3'
import { classifyDomain, DOMAINS, type DomainId } from './domains'
import { shuffle } from '../utils/shuffle'
import type { ChoiceQuestion, Question } from '../types'

/** A full mock sitting: 100 items, 120 minutes — the shape of the real 200-301. */
export const EXAM_TOTAL = 100
export const EXAM_MINUTES = 120

/**
 * Cisco does not publish the 200-301 cut score. 825/1000 is the figure the
 * community consistently reports, so it is shown as a *reference* line rather
 * than a verdict — see the wording on the result screen.
 */
export const PASS_REFERENCE_PERCENT = 82.5

/** Each bank restarts its ids at 1, and the app keys per-question UI state by
 *  id, so every bank is shifted into its own range before they are merged. */
const ID_OFFSET = { v1: 1_000_000, v2: 2_000_000, v3: 3_000_000 } as const

function rekey(bank: Question[], label: string, offset: number): Question[] {
  return bank.map((q) => ({ ...q, id: q.id + offset, source: `${label} #${q.id}` }))
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

/** Identity of a question for de-duplication: the stem plus the set of answer
 *  texts. The three banks share ~470 questions verbatim; without this the same
 *  item could be drawn twice in one sitting. Variants that share a stem but
 *  carry a different exhibit and a different answer set survive as separate
 *  questions, which is intended — they test different things. */
function identity(q: Question): string {
  const body =
    q.kind === 'drag'
      ? q.categories
          .map((c) => `${norm(c.name)}:${c.items.map(norm).sort().join(',')}`)
          .sort()
          .join('|')
      : (q as ChoiceQuestion).options
          .map((o) => norm(o.text))
          .sort()
          .join('|')
  return `${norm(q.prompt)}##${body}`
}

/** Every question from V1 + V2 + V3, de-duplicated, with unique ids. */
export const EXAM_POOL: Question[] = (() => {
  const merged = [
    ...rekey(QUESTIONS, 'V1', ID_OFFSET.v1),
    ...rekey(QUESTIONS_V2, 'V2', ID_OFFSET.v2),
    ...rekey(QUESTIONS_V3, 'V3', ID_OFFSET.v3),
  ]
  const seen = new Set<string>()
  const out: Question[] = []
  for (const q of merged) {
    const key = identity(q)
    if (seen.has(key)) continue
    seen.add(key)
    out.push(q)
  }
  return out
})()

/** The de-duplicated pool, bucketed by blueprint domain. */
export const POOL_BY_DOMAIN: Record<DomainId, Question[]> = (() => {
  const map = {} as Record<DomainId, Question[]>
  for (const d of DOMAINS) map[d.id] = []
  for (const q of EXAM_POOL) map[classifyDomain(q)].push(q)
  return map
})()

export interface ExamPaper {
  questions: Question[]
  /** Domain of each question, positionally aligned with `questions`. */
  domains: DomainId[]
}

/**
 * Draw a 100-question paper that matches the blueprint weighting: 20 / 20 / 25
 * / 10 / 15 / 10. Because the per-domain quota equals the domain's percentage,
 * a plain "correct out of 100" is already a blueprint-weighted score.
 *
 * Drag-and-drop items are not quota'd separately — they sit in the pool at
 * their natural rate (~10%), so a sitting picks up roughly ten of them the way
 * a real exam does.
 */
export function buildExam(): ExamPaper {
  const picked: Question[] = []
  const used = new Set<number>()

  for (const d of DOMAINS) {
    let taken = 0
    for (const q of shuffle(POOL_BY_DOMAIN[d.id])) {
      if (taken >= d.weight) break
      if (used.has(q.id)) continue
      picked.push(q)
      used.add(q.id)
      taken++
    }
  }

  // Guard: if a domain were ever short of its quota, top up from anything
  // unused so a paper is always exactly EXAM_TOTAL questions.
  for (const q of shuffle(EXAM_POOL)) {
    if (picked.length >= EXAM_TOTAL) break
    if (used.has(q.id)) continue
    picked.push(q)
    used.add(q.id)
  }

  const questions = shuffle(picked).slice(0, EXAM_TOTAL)
  return { questions, domains: questions.map(classifyDomain) }
}
