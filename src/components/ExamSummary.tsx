import type { CSSProperties } from 'react'
import type { AnswerState, Question } from '../types'
import { DOMAINS, type DomainId } from '../data/domains'
import { EXAM_MINUTES, PASS_REFERENCE_PERCENT } from '../data/examBuilder'

interface Props {
  questions: Question[]
  domains: DomainId[]
  answers: AnswerState[]
  /** Seconds actually spent, so the header can report pace. */
  elapsed: number
  onRestart: () => void
  onReview: (index: number) => void
}

function fmt(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return h > 0
    ? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    : `${m}:${s.toString().padStart(2, '0')}`
}

function ExamSummary({ questions, domains, answers, elapsed, onRestart, onReview }: Props) {
  const total = questions.length
  const correctCount = answers.filter((a) => a.correct).length
  const answeredCount = answers.filter((a) =>
    a.kind === 'drag' ? Object.values(a.placement).some((v) => v.length > 0) : a.selected.length > 0,
  ).length
  // The per-domain quota equals the domain's blueprint weight, so a plain
  // correct/total is already the weighted score — no extra maths needed.
  const percent = total > 0 ? Math.round((correctCount / total) * 1000) / 10 : 0
  const passed = percent >= PASS_REFERENCE_PERCENT

  const perDomain = DOMAINS.map((d) => {
    const idx = domains.map((x, i) => (x === d.id ? i : -1)).filter((i) => i >= 0)
    const got = idx.filter((i) => answers[i]?.correct).length
    return { domain: d, count: idx.length, correct: got, pct: idx.length ? (got / idx.length) * 100 : 0 }
  })

  const weakest = perDomain.filter((r) => r.count > 0).sort((a, b) => a.pct - b.pct)

  return (
    <div className="summary-screen exam-summary">
      <span className="start-brand">● CCNA 200-301 · Mock Exam Result</span>
      <h1>ผลสอบจำลอง CCNA</h1>

      <div className="score-panel">
        <div className="score-ring" style={{ '--pct': percent } as CSSProperties}>
          <div className="score-ring-inner">{percent}%</div>
        </div>
        <div className={`exam-verdict ${passed ? 'is-pass' : 'is-fail'}`}>
          {passed ? '✅ ผ่านเกณฑ์อ้างอิง' : '❌ ยังไม่ถึงเกณฑ์อ้างอิง'}
        </div>
        <div className="score-big">
          {correctCount} / {total}
        </div>
        <div className="score-sub">
          ตอบไปทั้งหมด {answeredCount} ข้อ · ไม่ได้ตอบ {total - answeredCount} ข้อ · ใช้เวลา {fmt(elapsed)} จาก{' '}
          {EXAM_MINUTES} นาที
        </div>
        <p className="exam-passnote">
          เกณฑ์อ้างอิง {PASS_REFERENCE_PERCENT}% — Cisco <strong>ไม่ได้ประกาศคะแนนผ่านอย่างเป็นทางการ</strong>{' '}
          ตัวเลขนี้เป็นค่าที่ผู้สอบรายงานกันทั่วไป (ราว 825/1000) ใช้เป็นแนวเทียบเท่านั้น
        </p>
        <button className="btn btn-primary" onClick={onRestart}>
          เริ่มสอบชุดใหม่
        </button>
      </div>

      <div className="review-heading">คะแนนแยกตามหมวด (ตามน้ำหนักข้อสอบจริง)</div>
      <div className="domain-table">
        {perDomain.map((r) => (
          <div className="domain-row" key={r.domain.id}>
            <div className="domain-name">
              <span className="domain-code">{r.domain.code}</span>
              <span>
                {r.domain.name}
                <small>{r.domain.nameTh}</small>
              </span>
            </div>
            <div className="domain-bar-wrap">
              <div className="domain-bar">
                <div
                  className={`domain-bar-fill ${r.pct >= PASS_REFERENCE_PERCENT ? 'ok' : r.pct >= 60 ? 'mid' : 'low'}`}
                  style={{ width: `${r.pct}%` }}
                />
              </div>
            </div>
            <div className="domain-score">
              {r.correct}/{r.count}
              <small>{Math.round(r.pct)}%</small>
            </div>
          </div>
        ))}
      </div>

      {weakest.length > 0 && (
        <div className="exam-advice">
          <strong>ควรทบทวนก่อน:</strong>{' '}
          {weakest
            .slice(0, 3)
            .map((r) => `${r.domain.code} ${r.domain.name} (${Math.round(r.pct)}%)`)
            .join(' · ')}
        </div>
      )}

      <div className="review-heading">ทบทวนรายข้อ (แตะเพื่อดูเฉลยและคำอธิบาย)</div>
      <div className="review-list">
        {questions.map((q, i) => {
          const a = answers[i]
          const answered =
            a && (a.kind === 'drag' ? Object.values(a.placement).some((v) => v.length > 0) : a.selected.length > 0)
          const status = !answered ? 'skip' : a.correct ? 'ok' : 'bad'
          const d = DOMAINS.find((x) => x.id === domains[i])
          return (
            <div key={q.id} className={`review-item review-${status}`} onClick={() => onReview(i)}>
              <div className="review-badge">
                {status === 'ok' && '✅'}
                {status === 'bad' && '❌'}
                {status === 'skip' && '⬜'}
                <span>ข้อ {i + 1}</span>
                {d && <span className="review-domain">{d.code}</span>}
                <span className="review-origid">{q.source ?? `#${q.id}`}</span>
              </div>
              <div className="review-prompt">{q.prompt}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExamSummary
