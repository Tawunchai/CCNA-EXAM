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
  explanation: string
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
