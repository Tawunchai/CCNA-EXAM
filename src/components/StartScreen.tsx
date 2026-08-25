import { DOMAINS } from '../data/domains'
import { EXAM_MINUTES, EXAM_POOL, EXAM_TOTAL } from '../data/examBuilder'
import { V4_PARTS } from '../data/v4Parts'

export type BankId = 'v1' | 'v2' | 'v3' | 'v4' | 'v4a' | 'v4b' | 'v4c' | 'v4d' | 'drag'

interface Props {
  bank: BankId
  total: number
  bankTotals: Record<BankId, number>
  shuffleOptions: boolean
  onBankChange: (bank: BankId) => void
  onShuffleOptionsChange: (on: boolean) => void
  onStart: (count: number) => void
  onStartExam: () => void
}

const OPTIONS = [20, 50, 100, 150, 250, 500]

const BANKS: { id: BankId; label: string }[] = [
  { id: 'v1', label: 'Version 1' },
  { id: 'v2', label: 'Version 2' },
  { id: 'v3', label: 'Version 3' },
  { id: 'v4', label: 'BIG CCNA' },
]

function StartScreen({
  bank,
  total,
  bankTotals,
  shuffleOptions,
  onBankChange,
  onShuffleOptionsChange,
  onStart,
  onStartExam,
}: Props) {
  const counts = OPTIONS.filter((n) => n < total)
  const isDrag = bank === 'drag'

  return (
    <div className="start">
      <span className="hero-badge">● Cisco Certified · 200-301</span>
      <h1>CCNA 200-301 Practice Exam</h1>
      <p className="hero-sub">
        คลังข้อสอบ {total} ข้อ พร้อมรูป exhibit และเฉลยอธิบายละเอียดเป็นภาษาไทย — สุ่มลำดับข้อและสลับตัวเลือก
        A/B/C/D ใหม่ทุกครั้ง เฉลยผ่านการตรวจทานตามเนื้อหา CCNA จริง
      </p>

      <div className="cta">
        <button className="cta-btn" onClick={onStartExam}>
          <span className="cta-icon" aria-hidden="true">
            🎯
          </span>
          <span className="cta-text">
            <span className="cta-title">Start EXAM CCNA</span>
            <span className="cta-note">
              จำลองสอบจริง {EXAM_TOTAL} ข้อ · {EXAM_MINUTES} นาที · สุ่มจาก V1–V4 ({EXAM_POOL.length} ข้อ)
              <br />
              ไม่เฉลยระหว่างสอบ — ตรวจและสรุปผลแยกตามหมวดเมื่อส่งข้อสอบ
            </span>
          </span>
          <span className="cta-go" aria-hidden="true">
            →
          </span>
        </button>
        <div className="weights">
          {DOMAINS.map((d) => (
            <span className="weight-chip" key={d.id}>
              <strong>{d.code}</strong> {d.name} <em>{d.weight}%</em>
            </span>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>เลือกชุดข้อสอบ</h2>
        </div>
        <p className="panel-note">ทุกชุดสุ่มลำดับข้อใหม่ทุกครั้งที่เริ่ม</p>
        <div className="choice-grid">
          {BANKS.map((b) => (
            <button
              key={b.id}
              className={`choice${bank === b.id ? ' is-active' : ''}`}
              aria-pressed={bank === b.id}
              onClick={() => onBankChange(b.id)}
            >
              <span className="choice-label">{b.label}</span>
              <span className="choice-count">{bankTotals[b.id]} ข้อ</span>
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>BIG CCNA แบ่ง 4 ส่วน</h2>
          <span className="chip chip-brand">วันละ ~500 ข้อ</span>
        </div>
        <p className="panel-note">
          ตัดจากคลัง BIG CCNA {bankTotals.v4} ข้อชุดเดียวกัน ไม่ได้ทำสำเนาใหม่ — เลขข้อยังเป็นเลขเดิมของ BIG
          (เช่น “Question #517” ในส่วนที่ 2 คือข้อ 517 ของ BIG) จึงไล่ทำให้ครบทั้งคลังได้โดยไม่ซ้ำและไม่ตกหล่น
        </p>
        <div className="choice-grid">
          {V4_PARTS.map((p) => (
            <button
              key={p.id}
              className={`choice${bank === p.id ? ' is-active' : ''}`}
              aria-pressed={bank === p.id}
              onClick={() => onBankChange(p.id)}
            >
              <span className="choice-label">ส่วนที่ {p.index}</span>
              <span className="choice-range">
                ข้อ {p.from}–{p.to}
              </span>
              <span className="choice-count">{p.questions.length} ข้อ</span>
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>ฝึกเฉพาะข้อลากวาง</h2>
        </div>
        <p className="panel-note">รวมข้อ drag-and-drop จากทั้ง 4 ชุด — ฝั่งซ้ายคือรายการที่ลาก ฝั่งขวาคือกล่องที่ต้องวาง</p>
        <button
          className={`mode-btn${isDrag ? ' is-active' : ''}`}
          aria-pressed={isDrag}
          onClick={() => onBankChange('drag')}
        >
          <span className="mode-icon" aria-hidden="true">
            🧩
          </span>
          <span className="mode-text">
            <span className="mode-label">Drag-Drop CCNA Exam</span>
            <span className="mode-note">{bankTotals.drag} ข้อ (เก็บข้อที่ซ้ำกันไว้ครบ)</span>
          </span>
          <span className="mode-check" aria-hidden="true">
            {isDrag ? '✓' : ''}
          </span>
        </button>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>ตัวเลือกการสุ่ม</h2>
        </div>
        <label className="switch-row">
          <input type="checkbox" checked={shuffleOptions} onChange={(e) => onShuffleOptionsChange(e.target.checked)} />
          <span>
            <span className="switch-label">สลับลำดับตัวเลือก A/B/C/D ในแต่ละข้อ</span>
            <span className="switch-note">
              กันการจำ “ข้อนี้ตอบ C” — เฉลย, ตัวอักษรในคำอธิบาย และหมายเหตุรายตัวเลือก
              จะถูกปรับตามลำดับใหม่ให้อัตโนมัติ (ข้อลากวางจะสลับลำดับรายการฝั่งซ้ายแทน)
            </span>
          </span>
        </label>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>เลือกจำนวนข้อที่ต้องการทำ</h2>
        </div>
        <p className="panel-note">
          ชุดที่เลือกอยู่: <strong className="text-ink">{isDrag ? 'Drag-Drop' : BANKS.find((b) => b.id === bank)?.label ?? `BIG ส่วนที่ ${bank.slice(-1).toUpperCase()}`}</strong>{' '}
          · {total} ข้อ
        </p>
        <div className="count-grid">
          {counts.map((n) => (
            <button key={n} className="btn btn-outline" onClick={() => onStart(n)}>
              {n} ข้อ
            </button>
          ))}
          <button className="btn btn-primary" onClick={() => onStart(total)}>
            ทั้งหมด ({total})
          </button>
        </div>
        <ul className="tips">
          {isDrag ? (
            <>
              <li>ทุกข้อมีป้ายบอกที่มา เช่น “V4 #132” เพื่อให้ย้อนไปดูในชุดต้นทางได้</li>
              <li>ลากรายการจากฝั่งซ้ายไปวางในกล่องฝั่งขวาให้ครบทุกช่อง ปุ่ม “Reveal Solution” จึงจะกดได้</li>
            </>
          ) : (
            <>
              <li>
                ใช้คีย์บอร์ดได้ทั้งชุด — <strong className="text-ink">A–E</strong> เลือกคำตอบ,{' '}
                <strong className="text-ink">Enter</strong> ดูเฉลยแล้วไปข้อถัดไป,{' '}
                <strong className="text-ink">← →</strong> เลื่อนข้อ
              </li>
              <li>รูป exhibit แสดงตามขนาดจริง ถ้าอ่านไม่ชัดกดปุ่ม “ขยายรูป” มุมขวาบนของรูป</li>
              <li>ข้อที่เฉลยต้นฉบับผิด จะมี “หมายเหตุ” ระบุคำตอบที่ถูกต้องตามหลัก CCNA</li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default StartScreen
