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

function Navigator({ statuses, currentIndex, onJump }: Props) {
  return (
    <div className="navigator">
      <div className="navigator-legend">
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
      <div className="navigator-grid">
        {statuses.map((s, i) => {
          let cls = 'nav-btn'
          if (s.checked) cls += s.correct ? ' correct' : ' incorrect'
          else if (s.answered) cls += ' answered'
          if (i === currentIndex) cls += ' current'
          return (
            <button key={i} className={cls} onClick={() => onJump(i)}>
              {i + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Navigator
