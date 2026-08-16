import { DOMAINS } from '../data/domains'
import { EXAM_MINUTES, EXAM_POOL, EXAM_TOTAL } from '../data/examBuilder'

export type BankId = 'v1' | 'v2' | 'v3' | 'v4' | 'drag'

interface Props {
  bank: BankId
  total: number
  bankTotals: Record<BankId, number>
  onBankChange: (bank: BankId) => void
  onStart: (count: number) => void
  onStartExam: () => void
}

const OPTIONS = [20, 50, 100, 150]

const BANKS: { id: BankId; label: string }[] = [
  { id: 'v1', label: 'Version 1' },
  { id: 'v2', label: 'Version 2' },
  { id: 'v3', label: 'Version 3' },
  { id: 'v4', label: 'BIG CCNA' },
]

function StartScreen({ bank, total, bankTotals, onBankChange, onStart, onStartExam }: Props) {
  const counts = OPTIONS.filter((n) => n < total)
  const isDrag = bank === 'drag'

  return (
    <div className="start-screen">
      <span className="start-brand">● Cisco Certified · 200-301</span>
      <h1>CCNA 200-301 Practice Exam</h1>
      <p className="subtitle">
        คลังข้อสอบฝึกซ้อม {total} ข้อ พร้อมรูป exhibit และเฉลยอธิบายละเอียดเป็นภาษาไทย — สุ่มลำดับข้อใหม่ทุกครั้ง
        (ตัวเลือกเรียง A → D คงที่) เฉลยผ่านการตรวจทานตามเนื้อหา CCNA จริง
      </p>
      <div className="exam-cta">
        <button className="exam-cta-btn" onClick={onStartExam}>
          <span className="exam-cta-icon" aria-hidden="true">
            🎯
          </span>
          <span className="exam-cta-text">
            <span className="exam-cta-title">Start EXAM CCNA</span>
            <span className="exam-cta-note">
              จำลองสอบจริง {EXAM_TOTAL} ข้อ · {EXAM_MINUTES} นาที · สุ่มจาก V1–V4 ({EXAM_POOL.length} ข้อ)
              <br />
              ไม่เฉลยระหว่างสอบ — ตรวจและสรุปผลแยกตามหมวดเมื่อส่งข้อสอบ
            </span>
          </span>
          <span className="exam-cta-go" aria-hidden="true">
            →
          </span>
        </button>
        <div className="exam-cta-weights">
          {DOMAINS.map((d) => (
            <span className="exam-weight-chip" key={d.id}>
              <strong>{d.code}</strong> {d.name} <em>{d.weight}%</em>
            </span>
          ))}
        </div>
      </div>

      <div className="start-card">
        <h2>เลือกชุดข้อสอบ</h2>
        <div className="bank-switch">
          {BANKS.map((b) => (
            <button
              key={b.id}
              className={`bank-option${bank === b.id ? ' is-active' : ''}`}
              aria-pressed={bank === b.id}
              onClick={() => onBankChange(b.id)}
            >
              <span className="bank-option-label">{b.label}</span>
              <span className="bank-option-note">{bankTotals[b.id]} ข้อ</span>
            </button>
          ))}
        </div>

        <h2>หรือฝึกเฉพาะข้อลากวาง</h2>
        <button
          className={`mode-btn${isDrag ? ' is-active' : ''}`}
          aria-pressed={isDrag}
          onClick={() => onBankChange('drag')}
        >
          <span className="mode-btn-icon" aria-hidden="true">
            🧩
          </span>
          <span className="mode-btn-text">
            <span className="mode-btn-label">Drag-Drop CCNA Exam</span>
            <span className="mode-btn-note">
              รวมข้อลากวางจากทั้ง 4 ชุด · {bankTotals.drag} ข้อ (เก็บข้อที่ซ้ำกันไว้ครบ)
            </span>
          </span>
          <span className="mode-btn-check" aria-hidden="true">
            {isDrag ? '✓' : ''}
          </span>
        </button>

        <h2 className="mt-7">เลือกจำนวนข้อที่ต้องการทำ</h2>
        <div className="start-options">
          {counts.map((n) => (
            <button key={n} className="btn btn-outline" onClick={() => onStart(n)}>
              {n} ข้อ
            </button>
          ))}
          <button className="btn btn-primary" onClick={() => onStart(total)}>
            ทำทั้งหมด ({total} ข้อ)
          </button>
        </div>
        <ul className="start-tips">
          {isDrag ? (
            <>
              <li>
                โหมดนี้รวมข้อลากวางจาก Version 1, 2, 3 และ BIG CCNA ไว้ทั้งหมด {bankTotals.drag} ข้อ —
                ข้อที่ซ้ำกันถูกเก็บไว้ครบ เพราะแต่ละชุดใช้คำต่างกันและมีตัวลวงไม่เหมือนกัน
              </li>
              <li>ทุกข้อมีป้ายบอกที่มา เช่น “V4 #132” เพื่อให้ย้อนไปดูในชุดต้นทางได้</li>
              <li>ลากชิปไปวางให้ครบทุกช่องก่อน ปุ่ม “ตรวจคำตอบ” จึงจะกดได้ (บนมือถือใช้วิธีแตะเลือกแล้วแตะกล่อง)</li>
            </>
          ) : (
            <>
              <li>เลือกคำตอบแล้วกด “ตรวจคำตอบ” เพื่อดูผลและคำอธิบายทันที ทีละข้อ</li>
              <li>ข้อที่เฉลยต้นฉบับผิด จะมี “หมายเหตุ” ระบุคำตอบที่ถูกต้องตามหลัก CCNA</li>
              <li>ใช้แผงนำทางด้านล่างกระโดดไปข้อใดก็ได้ และกด “ดูสรุปผล” เพื่อทบทวน</li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default StartScreen
