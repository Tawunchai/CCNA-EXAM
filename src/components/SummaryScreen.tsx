import type { CSSProperties } from 'react'
import type { AnswerState, Question } from '../types'
import { isUngraded, scorePaper } from '../utils/scoring'
import { collectWrong } from '../utils/review'
import WrongAnswers from './WrongAnswers'

interface Props {
  questions: Question[]
  answers: AnswerState[]
  onRestart: () => void
  onReview: (index: number) => void
}

function SummaryScreen({ questions, answers, onRestart, onReview }: Props) {
  const total = questions.length
  const score = scorePaper(questions, answers)
  const { checked: checkedCount, correct: correctCount, percent } = score
  const wrong = collectWrong(questions, answers)

  return (
    <div className="sum">
      <span className="hero-badge">● CCNA 200-301 · Practice Result</span>
      <h1>สรุปผลการทำข้อสอบ</h1>

      <div className="sum-hero mt-5">
        <div className="ring" style={{ '--pct': percent } as CSSProperties}>
          <div className="ring-inner">{percent}%</div>
        </div>
        <div className="sum-big">
          {correctCount} / {checkedCount || total}
        </div>
        <div className="sum-sub">
          ตอบถูก {correctCount} จากที่ตรวจแล้ว {checkedCount} ข้อ (คิดคะแนน {score.graded} ข้อ จากทั้งหมด {total} ข้อ)
        </div>
        {score.ungraded > 0 && (
          <p className="sum-note">
            ไม่นับคะแนน {score.ungraded} ข้อ — ข้อ LAB/SIMULATION และข้อที่อยู่นอกขอบเขต CCNA 200-301
            ตอบถูกหรือผิดก็ไม่มีผลกับเปอร์เซ็นต์
          </p>
        )}
        <button className="btn btn-primary" onClick={onRestart}>
          สุ่มข้อสอบใหม่
        </button>
      </div>

      <WrongAnswers
        items={wrong}
        title="ข้อที่ตอบผิด — CCNA 200-301 (Practice)"
        subtitle={`ตรวจแล้ว ${checkedCount} ข้อ · ถูก ${correctCount} ข้อ (${percent}%) · ผิด ${wrong.length} ข้อ · ${new Date().toLocaleDateString('th-TH')}`}
        fileStem="CCNA-wrong-answers"
        onReview={onReview}
      />

      <div className="section-title">ทบทวนรายข้อ (แตะเพื่อกลับไปดู)</div>
      <div className="review-list">
        {questions.map((q, i) => {
          const a = answers[i]
          const free = isUngraded(q)
          const status = free ? 'skip' : !a || !a.checked ? 'skip' : a.correct ? 'ok' : 'bad'
          return (
            <div key={q.id} className={`review-item review-${status}`} onClick={() => onReview(i)}>
              <div className="review-badge">
                {status === 'ok' && '✅'}
                {status === 'bad' && '❌'}
                {status === 'skip' && (free ? '➖' : '⬜')}
                <span>ข้อ {i + 1}</span>
                {free && <span className="review-free">ไม่คิดคะแนน</span>}
                <span className="review-origid">{q.source ? `(${q.source})` : `(#${q.id} ในต้นฉบับ)`}</span>
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
