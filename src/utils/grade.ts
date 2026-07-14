import type { ChoiceQuestion, DragQuestion } from '../types'

export function gradeChoice(question: ChoiceQuestion, selected: string[]): boolean {
  if (selected.length !== question.correct.length) return false
  const a = [...selected].sort()
  const b = [...question.correct].sort()
  return a.every((v, i) => v === b[i])
}

export function gradeDrag(question: DragQuestion, placement: Record<string, string[]>): boolean {
  return question.categories.every((cat) => {
    const placed = [...(placement[cat.name] ?? [])].sort()
    const correct = [...cat.items].sort()
    return placed.length === correct.length && placed.every((v, i) => v === correct[i])
  })
}
