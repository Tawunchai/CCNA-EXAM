import { useState } from 'react'
import { questionRef, type WrongItem } from '../utils/review'
import { printWrongSheet } from '../utils/wrongSheet'

interface Props {
  items: WrongItem[]
  /** Headline carried into the PDF, e.g. `ข้อที่ตอบผิด — สอบจำลอง CCNA`. */
  title: string
  /** One line of context under it — score and date — also carried into the PDF. */
  subtitle: string
  /** Base file name the browser offers when saving; the date is appended here. */
  fileStem: string
  onReview: (index: number) => void
}

const today = () => new Date().toISOString().slice(0, 10)

/**
 * The wrong answers, pulled out of the full review list into their own block.
 *
 * The list on the summary screens runs the whole paper in order, which is the
 * wrong shape for the one thing you actually do after a sitting: work back
 * through what you missed. This section carries only those, shows the key
 * beside what was put down, and exports the same set as a printable sheet.
 *
 * The explanation is deliberately left out of both — it is several paragraphs
 * per question and would triple the page count of a sheet meant to be re-worked
 * rather than re-read; the summary list below still links back to the full card.
 */
function WrongAnswers({ items, title, subtitle, fileStem, onReview }: Props) {
  const [includeImages, setIncludeImages] = useState(true)
  const [separateKey, setSeparateKey] = useState(false)
  const [printing, setPrinting] = useState(false)

  const withImages = items.filter((i) => i.question.image).length

  async function download() {
    setPrinting(true)
    try {
      await printWrongSheet(items, {
        title,
        subtitle,
        includeImages,
        separateKey,
        fileName: `${fileStem}-${today()}`,
      })
    } finally {
      setPrinting(false)
    }
  }

  if (items.length === 0) {
    return (
      <>
        <div className="section-title">ข้อที่ตอบผิด</div>
        <div className="wrong-empty">🎉 ไม่มีข้อที่ตอบผิดในชุดนี้ — เก่งมาก!</div>
      </>
    )
  }

  return (
    <>
      <div className="section-title">ข้อที่ตอบผิด ({items.length} ข้อ)</div>

      <div className="wrong-bar">
        <div className="wrong-bar-opts">
          <label className="wrong-check">
            <input type="checkbox" checked={includeImages} onChange={(e) => setIncludeImages(e.target.checked)} />
            แนบรูปประกอบ {withImages > 0 && <span className="wrong-check-note">({withImages} ข้อมีรูป)</span>}
          </label>
          <label className="wrong-check">
            <input type="checkbox" checked={separateKey} onChange={(e) => setSeparateKey(e.target.checked)} />
            แยกเฉลยไว้หน้าสุดท้าย <span className="wrong-check-note">(ฝึกทำก่อนดูเฉลย)</span>
          </label>
        </div>
        <button className="btn btn-primary btn-sm" disabled={printing} onClick={download}>
          {printing ? 'กำลังเตรียมไฟล์…' : '⬇ ดาวน์โหลด PDF'}
        </button>
      </div>
      <p className="wrong-hint">
        ไฟล์เป็น A4 มีเฉพาะ <strong>โจทย์ + ตัวเลือก + เฉลย</strong> (ไม่มีคำอธิบาย) — กดแล้วเลือกปลายทางเป็น
        “Save as PDF” ในหน้าต่างพิมพ์ของเบราว์เซอร์
      </p>

      <div className="wrong-list">
        {items.map((item) => {
          const ref = questionRef(item.question)
          const joiner = item.question.kind === 'drag' ? ' → ' : '. '
          return (
            <div key={item.question.id} className="wrong-item" onClick={() => onReview(item.index)}>
              <div className="wrong-head">
                <span className="wrong-no">ข้อ {item.index + 1}</span>
                <span className="review-origid">
                  #{ref.number}
                  {ref.origin ? ` · ${ref.origin}` : ''}
                </span>
                {item.unanswered && <span className="wrong-blank">ไม่ได้ตอบ</span>}
              </div>
              <div className="wrong-prompt">{item.question.prompt}</div>
              <div className="wrong-ans">
                <div className="wrong-row is-bad">
                  <span className="wrong-tag">คุณตอบ</span>
                  <span className="wrong-val">
                    {item.unanswered ? '—' : item.yours.map((l) => `${l.label}${joiner}${l.text}`).join('\n')}
                  </span>
                </div>
                <div className="wrong-row is-ok">
                  <span className="wrong-tag">เฉลย</span>
                  <span className="wrong-val">
                    {item.key.map((l) => `${l.label}${joiner}${l.text}`).join('\n')}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WrongAnswers
