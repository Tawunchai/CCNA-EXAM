import { useState, type ReactNode } from 'react'
import type { ChoiceQuestion } from '../types'
import { gradeChoice } from '../utils/grade'
import ExamCard from './ExamCard'

interface Props {
  question: ChoiceQuestion
  /** Blueprint domain number (1–6), shown as "Topic n" the way a dump page does. */
  topic: number
  selected: string[]
  checked: boolean
  onToggle: (key: string) => void
  onCheck: () => void
  /** Prev/next controls, rendered in the card footer. */
  nav?: ReactNode
  /** Mock-exam sitting: no per-question grading, so the check button is hidden
   *  and answers stay editable until the whole paper is submitted. */
  examMode?: boolean
}

function QuestionCard({ question, topic, selected, checked, onToggle, onCheck, nav, examMode }: Props) {
  const [showExplanation, setShowExplanation] = useState(true)
  const isMulti = question.kind === 'multi'
  const isCorrect = checked && gradeChoice(question, selected)

  function optionClass(key: string) {
    const isSelected = selected.includes(key)
    const isKey = question.correct.includes(key)
    if (!checked) return isSelected ? 'opt is-picked' : 'opt'
    if (isKey) return 'opt is-key'
    if (isSelected) return 'opt is-wrong'
    return 'opt is-dim'
  }

  return (
    <>
      <ExamCard
        id={question.id}
        source={question.source}
        topic={topic}
        kind={isMulti ? `Multiple choice · choose ${question.correct.length}` : 'Single choice'}
        image={question.image}
        image2={question.image2}
        prompt={question.prompt}
        footer={nav}
      >
        {isMulti && !/choose/i.test(question.prompt) && (
          <p className="subhint">(Choose {question.correct.length}.)</p>
        )}

        <div className="opts">
          {question.options.map((opt) => (
            <label key={opt.key} className={optionClass(opt.key)}>
              <input
                type={isMulti ? 'checkbox' : 'radio'}
                name={`q-${question.id}`}
                checked={selected.includes(opt.key)}
                disabled={checked}
                onChange={() => onToggle(opt.key)}
              />
              <span className="opt-key">{opt.key}</span>
              <span className="opt-text">{opt.text}</span>
              {checked && question.correct.includes(opt.key) && <span className="opt-flag is-ok">Correct</span>}
              {checked && selected.includes(opt.key) && !question.correct.includes(opt.key) && (
                <span className="opt-flag is-bad">Your answer</span>
              )}
            </label>
          ))}
        </div>

        <div className="actions">
          {!checked && !examMode && (
            <button className="btn btn-solve" disabled={selected.length === 0} onClick={onCheck}>
              Reveal Solution
            </button>
          )}
          {!checked && !examMode && selected.length === 0 && (
            <span className="action-note">เลือกคำตอบก่อน หรือกดปุ่ม A–E บนคีย์บอร์ด</span>
          )}
          {!checked && examMode && <span className="action-note">โหมดสอบ — เฉลยทั้งหมดจะแสดงหลังส่งข้อสอบ</span>}
          {checked && (
            <>
              <span className={`verdict ${isCorrect ? 'is-ok' : 'is-bad'}`}>
                {isCorrect ? '✔ Correct' : '✘ Incorrect'} — Correct Answer: {question.correct.join(', ')}
              </span>
              <button
                className="btn btn-slate btn-sm"
                aria-expanded={showExplanation}
                onClick={() => setShowExplanation((v) => !v)}
              >
                {showExplanation ? 'ซ่อนคำอธิบาย' : 'ดูคำอธิบาย'}
              </button>
            </>
          )}
        </div>
      </ExamCard>

      {checked && showExplanation && (
        <div className={`exp ${isCorrect ? 'is-ok' : 'is-bad'}`}>
          <div className="exp-head">
            <span className="exp-title">{isCorrect ? '✅ ถูกต้อง!' : '❌ ยังไม่ถูก'}</span>
            <span className="exp-key">เฉลย: {question.correct.join(', ')}</span>
          </div>
          <div className="exp-body">{question.explanation}</div>
          {question.optionNotes && (
            <ul className="exp-notes">
              {Object.entries(question.optionNotes).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}.</strong> {v}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}

export default QuestionCard
