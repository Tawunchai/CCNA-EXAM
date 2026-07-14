import type { CSSProperties } from 'react'
import type { AnswerState, Question } from '../types'

interface Props {
  questions: Question[]
  answers: AnswerState[]
  onRestart: () => void
  onReview: (index: number) => void
}

function SummaryScreen({ questions, answers, onRestart, onReview }: Props) {
  const total = questions.length
  const checkedCount = answers.filter((a) => a.checked).length
  const correctCount = answers.filter((a) => a.checked && a.correct).length
  const percent = checkedCount > 0 ? Math.round((correctCount / checkedCount) * 100) : 0

  return (
    <div className="summary-screen">
      <h1>สรุปผลการทำข้อสอบ</h1>
      <div className="score-panel">
        <div className="score-ring" style={{ '--pct': percent } as CSSProperties}>
          <div className="score-ring-inner">{percent}%</div>
        </div>
        <div className="score-big">
          {correctCount} / {checkedCount || total}
        </div>
        <div className="score-sub">
          ตอบถูก {correctCount} จากที่ตรวจแล้ว {checkedCount} ข้อ (จากทั้งหมด {total} ข้อ)
        </div>
        <button className="btn btn-primary" onClick={onRestart}>
          สุ่มข้อสอบใหม่
        </button>
      </div>

      <div className="review-heading">ทบทวนรายข้อ (แตะเพื่อกลับไปดู)</div>
      <div className="review-list">
        {questions.map((q, i) => {
          const a = answers[i]
          const status = !a || !a.checked ? 'skip' : a.correct ? 'ok' : 'bad'
          return (
            <div key={q.id} className={`review-item review-${status}`} onClick={() => onReview(i)}>
              <div className="review-badge">
                {status === 'ok' && '✅'}
                {status === 'bad' && '❌'}
                {status === 'skip' && '⬜'}
                <span>ข้อ {i + 1}</span>
                <span className="review-origid">(#{q.id} ในต้นฉบับ)</span>
              </div>
              <div className="review-prompt">{q.prompt}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SummaryScreen
