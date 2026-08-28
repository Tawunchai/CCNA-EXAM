import type { AnswerState, ChoiceQuestion, DragQuestion, Question } from '../types'
import { isUngraded } from './scoring'

/**
 * The number a question is filed under in its *source* bank.
 *
 * Merged banks re-key their ids to stay unique and record the original as
 * `V4 #132`; the per-version banks leave `source` undefined and the id is
 * already the original number.
 */
export function questionRef(q: Pick<Question, 'id' | 'source'>): { number: string; origin: string | null } {
  const parsed = q.source?.match(/^(\S+)\s*#(\d+)$/)
  return parsed ? { number: parsed[2], origin: parsed[1] } : { number: String(q.id), origin: null }
}

/** One line of an answer: an option letter and its text, or a drop target and its chips. */
export interface WrongLine {
  label: string
  text: string
}

export interface WrongItem {
  /** Position in the paper this sitting, 0-based — what the screens call "ข้อ n". */
  index: number
  question: Question
  /** Left blank. In exam mode the whole paper is graded on submit, so blanks land here too. */
  unanswered: boolean
  /** What was put down. Empty when `unanswered`. */
  yours: WrongLine[]
  /** The key. */
  key: WrongLine[]
}

/** Option letters in the order they are printed on the card, not the order they were clicked. */
function choiceLines(q: ChoiceQuestion, keys: string[]): WrongLine[] {
  return q.options.filter((o) => keys.includes(o.key)).map((o) => ({ label: o.key, text: o.text }))
}

function dragLines(q: DragQuestion, placement?: Record<string, string[]>): WrongLine[] {
  return q.categories.map((c) => ({
    label: c.name,
    text: (placement ? (placement[c.name] ?? []) : c.items).join(' · ') || '—',
  }))
}

/**
 * The questions worth taking away and drilling again.
 *
 * A question qualifies only once it has actually been graded — `checked` and
 * not correct — and only if it counts for something: the LAB walk-throughs and
 * the off-blueprint strays are skipped exactly as `scorePaper` skips them, so
 * this list and the percentage on the same screen always agree.
 *
 * Practice mode therefore yields only the questions that were revealed and
 * missed; exam mode marks the whole paper `checked` on submit, so blanks
 * qualify too — they cost the same point, and they are the ones to drill.
 */
export function collectWrong(questions: Question[], answers: AnswerState[]): WrongItem[] {
  const out: WrongItem[] = []
  questions.forEach((q, index) => {
    const a = answers[index]
    if (!a || !a.checked || a.correct || isUngraded(q)) return
    if (q.kind === 'drag' && a.kind === 'drag') {
      const placed = Object.values(a.placement).flat()
      out.push({
        index,
        question: q,
        unanswered: placed.length === 0,
        yours: placed.length === 0 ? [] : dragLines(q, a.placement),
        key: dragLines(q),
      })
    } else if (q.kind !== 'drag' && a.kind !== 'drag') {
      out.push({
        index,
        question: q,
        unanswered: a.selected.length === 0,
        yours: choiceLines(q, a.selected),
        key: choiceLines(q, q.correct),
      })
    }
  })
  return out
}
