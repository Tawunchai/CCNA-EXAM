import { QUESTIONS } from './questions'
import { QUESTIONS_V2 } from './questionsV2'
import { QUESTIONS_V3 } from './questionsV3'
import { QUESTIONS_V4 } from './questionsV4'
import type { DragQuestion, Question } from '../types'

/**
 * Every drag-and-drop question from all three banks, merged into one set.
 *
 * Duplicates across versions are kept on purpose — the same drag shows up with
 * different wording, different distractors and a different number of slots in
 * each version, so meeting it more than once is useful practice rather than
 * noise.
 *
 * Ids collide across the source banks (each restarts at 1), and the app keys
 * its per-question state (`dragPools`) by id — so each version is shifted into
 * its own numeric range and the human-readable origin is kept in `source`.
 */
/** Each bank gets its own id range so the merged ids stay unique. */
const ID_RANGE = { v1: 100_000, v2: 200_000, v3: 300_000, v4: 400_000 } as const

function collect(bank: Question[], label: string, offset: number): DragQuestion[] {
  return bank
    .filter((q): q is DragQuestion => q.kind === 'drag')
    .map((q) => ({ ...q, id: q.id + offset, source: `${label} #${q.id}` }))
}

export const DRAG_QUESTIONS: DragQuestion[] = [
  ...collect(QUESTIONS, 'V1', ID_RANGE.v1),
  ...collect(QUESTIONS_V2, 'V2', ID_RANGE.v2),
  ...collect(QUESTIONS_V3, 'V3', ID_RANGE.v3),
  ...collect(QUESTIONS_V4, 'V4', ID_RANGE.v4),
]
