import { QUESTIONS_V4 } from './questionsV4'
import type { Question } from '../types'

export type V4PartId = 'v4a' | 'v4b' | 'v4c' | 'v4d'
export type V4SliceId = `v4s${number}`

export interface V4Part<Id extends string = V4PartId> {
  id: Id
  /** 1-based part number, used for the "ส่วนที่ n" / "ชุดที่ n" label. */
  index: number
  from: number
  to: number
  questions: Question[]
}

const LAST_ID = QUESTIONS_V4.reduce((max, q) => Math.max(max, q.id), 0)

function windowOf(from: number, to: number) {
  return QUESTIONS_V4.filter((q) => q.id >= from && q.id <= to)
}

/**
 * BIG CCNA, cut into four sittings of ~500 questions so the whole 2085-question
 * bank can be worked through over four days without losing your place. The
 * full bank stays available as its own option — these are windows onto it, not
 * copies: a part keeps each question's original BIG number, so "Question #517"
 * in part 2 is the same item as #517 in the full bank.
 */
const CUTS = [1, 501, 1001, 1501] as const

export const V4_PARTS: V4Part[] = CUTS.map((from, i) => {
  const to = i + 1 < CUTS.length ? CUTS[i + 1] - 1 : LAST_ID
  return {
    id: (['v4a', 'v4b', 'v4c', 'v4d'] as const)[i],
    index: i + 1,
    from,
    to,
    questions: windowOf(from, to),
  }
})

export const V4_PART_BY_ID: Record<V4PartId, V4Part> = V4_PARTS.reduce(
  (acc, p) => ((acc[p.id] = p), acc),
  {} as Record<V4PartId, V4Part>,
)

/**
 * The same bank again in shorter 200-question windows (1–200, 201–400, …, with
 * whatever is left over in the last one) for days when 500 is too much. Like
 * the parts above, these are views onto BIG with the original numbering kept.
 */
const SLICE_SIZE = 200

export const V4_SLICES: V4Part<V4SliceId>[] = Array.from({ length: Math.ceil(LAST_ID / SLICE_SIZE) }, (_, i) => {
  const from = i * SLICE_SIZE + 1
  const to = Math.min(from + SLICE_SIZE - 1, LAST_ID)
  return { id: `v4s${i + 1}` as const, index: i + 1, from, to, questions: windowOf(from, to) }
})
