import { useEffect, useState } from 'react'

interface ItemStatus {
  answered: boolean
  checked: boolean
  correct: boolean
}

interface Props {
  statuses: ItemStatus[]
  currentIndex: number
  onJump: (index: number) => void
}

/** A "ทำทั้งหมด" sitting is 2085 questions; one flat grid of that many buttons
 *  is unusable (and slow). The navigator pages them in blocks of this size and
 *  follows whichever block you are currently in. */
const PAGE = 100

function Navigator({ statuses, currentIndex, onJump }: Props) {
  const pageCount = Math.ceil(statuses.length / PAGE)
  const [page, setPage] = useState(() => Math.floor(currentIndex / PAGE))

  useEffect(() => setPage(Math.floor(currentIndex / PAGE)), [currentIndex])

  const start = page * PAGE
  const slice = statuses.slice(start, start + PAGE)
  const label = (p: number) => `${p * PAGE + 1}–${Math.min((p + 1) * PAGE, statuses.length)}`

  return (
    <div className="side-card">
      <div className="side-title">ผังข้อสอบ</div>

      {pageCount > 1 &&
        (pageCount <= 6 ? (
          <div className="nav-pages">
            {Array.from({ length: pageCount }, (_, p) => (
              <button key={p} className={`nav-page${p === page ? ' is-active' : ''}`} onClick={() => setPage(p)}>
                {label(p)}
              </button>
            ))}
          </div>
        ) : (
          <div className="nav-jump">
            <button className="nav-step" disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
              ‹
            </button>
            <select value={page} onChange={(e) => setPage(Number(e.target.value))} aria-label="ช่วงข้อ">
              {Array.from({ length: pageCount }, (_, p) => (
                <option key={p} value={p}>
                  ข้อ {label(p)}
                </option>
              ))}
            </select>
            <button className="nav-step" disabled={page === pageCount - 1} onClick={() => setPage((p) => p + 1)}>
              ›
            </button>
          </div>
        ))}

      <div className="nav-grid">
        {slice.map((s, i) => {
          const index = start + i
          let cls = 'nav-btn'
          if (s.checked) cls += s.correct ? ' is-correct' : ' is-incorrect'
          else if (s.answered) cls += ' is-answered'
          if (index === currentIndex) cls += ' is-current'
          return (
            <button key={index} className={cls} onClick={() => onJump(index)}>
              {index + 1}
            </button>
          )
        })}
      </div>

      <div className="legend">
        <span>
          <i className="dot dot-current" /> ข้อปัจจุบัน
        </span>
        <span>
          <i className="dot dot-answered" /> ตอบแล้ว
        </span>
        <span>
          <i className="dot dot-correct" /> ถูก
        </span>
        <span>
          <i className="dot dot-incorrect" /> ผิด
        </span>
        <span>
          <i className="dot dot-empty" /> ยังไม่ตอบ
        </span>
      </div>
    </div>
  )
}

export default Navigator
