import type { CSSProperties } from 'react'
import type { AnswerState, Question } from '../types'
import { DOMAINS, type DomainId } from '../data/domains'
import { EXAM_MINUTES, PASS_REFERENCE_PERCENT } from '../data/examBuilder'
import { isUngraded, scorePaper } from '../utils/scoring'
import { collectWrong } from '../utils/review'
import WrongAnswers from './WrongAnswers'

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
  const score = scorePaper(questions, answers)
  const correctCount = score.correct
  const answeredCount = answers.filter((a, i) =>
    isUngraded(questions[i])
      ? false
      : a.kind === 'drag'
        ? Object.values(a.placement).some((v) => v.length > 0)
        : a.selected.length > 0,
  ).length
  // The per-domain quota equals the domain's blueprint weight, so a plain
  // correct/total is already the weighted score — no extra maths needed. The
  // denominator is the *graded* count so an off-blueprint item cannot cost you
  // a point by sitting in the paper unanswered.
  const percent = score.graded > 0 ? Math.round((correctCount / score.graded) * 1000) / 10 : 0
  const passed = percent >= PASS_REFERENCE_PERCENT

  const perDomain = DOMAINS.map((d) => {
    const idx = domains
      .map((x, i) => (x === d.id && !isUngraded(questions[i]) ? i : -1))
      .filter((i) => i >= 0)
    const got = idx.filter((i) => answers[i]?.correct).length
    return { domain: d, count: idx.length, correct: got, pct: idx.length ? (got / idx.length) * 100 : 0 }
  })

  const weakest = perDomain.filter((r) => r.count > 0).sort((a, b) => a.pct - b.pct)
  // Submitting marks the whole paper graded, so this also picks up the blanks.
  const wrong = collectWrong(questions, answers)

  return (
    <div className="sum">
      <span className="hero-badge">● CCNA 200-301 · Mock Exam Result</span>
      <h1>ผลสอบจำลอง CCNA</h1>

      <div className="sum-hero mt-5">
        <div className="ring" style={{ '--pct': percent } as CSSProperties}>
          <div className="ring-inner">{percent}%</div>
        </div>
        <div className={`sum-verdict ${passed ? 'is-pass' : 'is-fail'}`}>
          {passed ? '✅ ผ่านเกณฑ์อ้างอิง' : '❌ ยังไม่ถึงเกณฑ์อ้างอิง'}
        </div>
        <div className="sum-big">
          {correctCount} / {score.graded}
        </div>
        <div className="sum-sub">
          ตอบไปทั้งหมด {answeredCount} ข้อ · ไม่ได้ตอบ {score.graded - answeredCount} ข้อ · ใช้เวลา {fmt(elapsed)} จาก{' '}
          {EXAM_MINUTES} นาที
          {score.ungraded > 0 && ` · ไม่คิดคะแนน ${score.ungraded} ข้อ (จากทั้งหมด ${total} ข้อ)`}
        </div>
        <p className="sum-note">
          เกณฑ์อ้างอิง {PASS_REFERENCE_PERCENT}% — Cisco <strong>ไม่ได้ประกาศคะแนนผ่านอย่างเป็นทางการ</strong>{' '}
          ตัวเลขนี้เป็นค่าที่ผู้สอบรายงานกันทั่วไป (ราว 825/1000) ใช้เป็นแนวเทียบเท่านั้น
        </p>
        <button className="btn btn-primary" onClick={onRestart}>
          เริ่มสอบชุดใหม่
        </button>
      </div>

      <div className="section-title">คะแนนแยกตามหมวด (ตามน้ำหนักข้อสอบจริง)</div>
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
        <div className="advice">
          <strong>ควรทบทวนก่อน:</strong>{' '}
          {weakest
            .slice(0, 3)
            .map((r) => `${r.domain.code} ${r.domain.name} (${Math.round(r.pct)}%)`)
            .join(' · ')}
        </div>
      )}

      <WrongAnswers
        items={wrong}
        title="ข้อที่ตอบผิด — CCNA 200-301 (สอบจำลอง)"
        subtitle={`คะแนน ${correctCount}/${score.graded} (${percent}%) · ผิด/ไม่ได้ตอบ ${wrong.length} ข้อ · ใช้เวลา ${fmt(elapsed)} · ${new Date().toLocaleDateString('th-TH')}`}
        fileStem="CCNA-mock-wrong-answers"
        onReview={onReview}
      />

      <div className="section-title">ทบทวนรายข้อ (แตะเพื่อดูเฉลยและคำอธิบาย)</div>
      <div className="review-list">
        {questions.map((q, i) => {
          const a = answers[i]
          const free = isUngraded(q)
          const answered =
            a && (a.kind === 'drag' ? Object.values(a.placement).some((v) => v.length > 0) : a.selected.length > 0)
          const status = free ? 'skip' : !answered ? 'skip' : a.correct ? 'ok' : 'bad'
          const d = DOMAINS.find((x) => x.id === domains[i])
          return (
            <div key={q.id} className={`review-item review-${status}`} onClick={() => onReview(i)}>
              <div className="review-badge">
                {status === 'ok' && '✅'}
                {status === 'bad' && '❌'}
                {status === 'skip' && (free ? '➖' : '⬜')}
                <span>ข้อ {i + 1}</span>
                {free && <span className="review-free">ไม่คิดคะแนน</span>}
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
