export type QuestionKind = 'single' | 'multi' | 'drag'

export interface Option {
  key: string
  text: string
}

interface BaseQuestion {
  id: number
  kind: QuestionKind
  prompt: string
  image?: string
  /**
   * Second exhibit. A handful of dump questions split the exhibit across two
   * screenshots (topology on one, `show` output on the other); both have to be
   * on screen or the question is unanswerable.
   */
  image2?: string
  explanation: string
  /**
   * Where the question came from, e.g. `V2 #136`. Set only by merged banks
   * (see `data/dragBank.ts`) whose ids are re-keyed to stay unique; the
   * per-version banks leave it undefined and fall back to showing `id`.
   */
  source?: string
  /**
   * Keep the question in the bank, but leave it out of every score.
   *
   * Set on the items that came through the dump but are not CCNA 200-301
   * material — a stray SAP question and a block of Cisco Firepower/FTD items
   * that belong to CCNP Security 300-710. They are still worth reading, so
   * they stay; they just must not move the percentage either way.
   *
   * `utils/scoring.ts#isUngraded` is the only thing that should read this — it
   * also treats the LAB/SIMULATION items as ungraded, because their prompt
   * already promises "ไม่คิดคะแนน" and they carry a single dummy option that
   * would otherwise score as correct every time.
   */
  ungraded?: boolean
}

export interface ChoiceQuestion extends BaseQuestion {
  kind: 'single' | 'multi'
  options: Option[]
  correct: string[]
  optionNotes?: Record<string, string>
}

export interface DragCategory {
  name: string
  items: string[]
}

export interface DragQuestion extends BaseQuestion {
  kind: 'drag'
  categories: DragCategory[]
}

export type Question = ChoiceQuestion | DragQuestion

export interface ChoiceAnswerState {
  kind: 'single' | 'multi'
  selected: string[]
  checked: boolean
  correct: boolean
}

export interface DragAnswerState {
  kind: 'drag'
  placement: Record<string, string[]>
  checked: boolean
  correct: boolean
  categoryResults?: Record<string, boolean>
}

export type AnswerState = ChoiceAnswerState | DragAnswerState

export interface RuntimeQuestion extends Omit<Question, 'options'> {
  options?: Option[]
  dragPool?: string[]
}
