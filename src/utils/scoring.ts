import type { AnswerState, Question } from '../types'

/**
 * Whether a question is left out of the score.
 *
 * Two families are ungraded:
 *
 *  • **Off-blueprint items** carried in from the dump — a stray SAP
 *    material-planning question and a run of Cisco Firepower / FMC / FTD items
 *    that are CCNP Security 300-710 material. They are flagged in the bank with
 *    `ungraded: true` and kept because they are still worth reading.
 *
 *  • **SIMULATION walk-throughs**, tagged `[LAB — ไม่คิดคะแนน]`. They exist to
 *    show a worked configuration, so they carry a single dummy option — which
 *    means answering one always "scores" as correct and quietly inflates the
 *    percentage. Detected from the prompt tag, so the 36 of them need no
 *    per-question edit.
 *
 * The test deliberately keys on `ไม่คิดคะแนน` / `SIMULATION` rather than on
 * `[LAB` alone: the other LAB items — `[LAB — OSPF]`, `[LAB — EtherChannel]`
 * and friends — are ordinary four-option questions with a real answer, and they
 * must keep counting.
 */
export function isUngraded(q: Question): boolean {
  return q.ungraded === true || /ไม่คิดคะแนน/.test(q.prompt) || /\bSIMULATION\b/.test(q.prompt)
}

export interface Score {
  /** Questions that count toward the percentage. */
  graded: number
  /** Graded questions that have been submitted/checked. */
  checked: number
  correct: number
  wrong: number
  /** Graded, checked, and correct as a percentage of `checked`. */
  percent: number
  /** Ungraded questions sitting in this paper, for the "not counted" note. */
  ungraded: number
}

/** Score a paper, ignoring every ungraded question on both sides of the ratio. */
export function scorePaper(questions: Question[], answers: AnswerState[]): Score {
  let graded = 0
  let checked = 0
  let correct = 0
  let ungraded = 0
  questions.forEach((q, i) => {
    if (isUngraded(q)) {
      ungraded++
      return
    }
    graded++
    const a = answers[i]
    if (a?.checked) {
      checked++
      if (a.correct) correct++
    }
  })
  return {
    graded,
    checked,
    correct,
    wrong: checked - correct,
    percent: checked > 0 ? Math.round((correct / checked) * 100) : 0,
    ungraded,
  }
}
