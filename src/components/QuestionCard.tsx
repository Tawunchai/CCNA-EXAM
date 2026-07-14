import type { ChoiceQuestion, Option } from '../types'
import { gradeChoice } from '../utils/grade'

interface Props {
  question: ChoiceQuestion
  options: Option[]
  selected: string[]
  checked: boolean
  onToggle: (key: string) => void
  onCheck: () => void
}

function QuestionCard({ question, options, selected, checked, onToggle, onCheck }: Props) {
  const isMulti = question.kind === 'multi'

  function optionClass(opt: Option) {
    const isSelected = selected.includes(opt.key)
    const isCorrect = question.correct.includes(opt.key)
    if (!checked) return isSelected ? 'opt selected' : 'opt'
    if (isCorrect) return 'opt correct'
    if (isSelected && !isCorrect) return 'opt incorrect'
    return 'opt'
  }

  return (
    <div className="question-card">
      {question.image && (
        <div className="exhibit">
          <img src={question.image} alt={`exhibit for question ${question.id}`} />
        </div>
      )}
      <div className="q-head">
        <span className="qnum-badge">Q{question.id}</span>
        <span className="qkind-badge">{isMulti ? `Multiple choice · ${question.correct.length}` : 'Single choice'}</span>
      </div>
      <p className="prompt">{question.prompt}</p>
      {isMulti && <p className="hint">เลือกได้มากกว่า 1 คำตอบ — Choose {question.correct.length}</p>}

      <div className="options">
        {options.map((opt) => (
          <label key={opt.key} className={optionClass(opt)}>
            <input
              type={isMulti ? 'checkbox' : 'radio'}
              name={`q-${question.id}`}
              checked={selected.includes(opt.key)}
              disabled={checked}
              onChange={() => onToggle(opt.key)}
            />
            <span className="opt-key">{opt.key}</span>
            <span className="opt-text">{opt.text}</span>
            {checked && question.correct.includes(opt.key) && <span className="mark ok">✔ คำตอบที่ถูก</span>}
            {checked && selected.includes(opt.key) && !question.correct.includes(opt.key) && (
              <span className="mark bad">✘ ที่คุณเลือก (ไม่ถูก)</span>
            )}
          </label>
        ))}
      </div>

      {!checked ? (
        <button className="btn btn-primary" disabled={selected.length === 0} onClick={onCheck}>
          ตรวจคำตอบ
        </button>
      ) : (
        <div className={`feedback ${gradeChoice(question, selected) ? 'good' : 'bad'}`}>
          <div className="feedback-title">
            {gradeChoice(question, selected) ? '✅ ถูกต้อง!' : '❌ ยังไม่ถูก'}
            {' — '}
            เฉลย: {question.correct.join(', ')}
          </div>
          <div className="feedback-body">{question.explanation}</div>
          {question.optionNotes && (
            <ul className="option-notes">
              {Object.entries(question.optionNotes).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}.</strong> {v}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default QuestionCard
