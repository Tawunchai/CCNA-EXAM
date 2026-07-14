import { useState, type DragEvent } from 'react'
import type { DragQuestion } from '../types'

interface Props {
  question: DragQuestion
  pool: string[]
  placement: Record<string, string[]>
  checked: boolean
  onPlace: (item: string, category: string) => void
  onRemove: (item: string) => void
  onCheck: () => void
}

function DragDropQuestion({ question, pool, placement, checked, onPlace, onRemove, onCheck }: Props) {
  const [pickedChip, setPickedChip] = useState<string | null>(null)

  const placedItems = new Set(Object.values(placement).flat())
  const remainingPool = pool.filter((item) => !placedItems.has(item))
  const totalItems = question.categories.reduce((n, c) => n + c.items.length, 0)
  const allPlaced = placedItems.size === totalItems

  function categoryStatus(catName: string): 'ok' | 'bad' | null {
    if (!checked) return null
    const cat = question.categories.find((c) => c.name === catName)!
    const placed = [...(placement[catName] ?? [])].sort()
    const correct = [...cat.items].sort()
    if (placed.length === correct.length && placed.every((v, i) => v === correct[i])) return 'ok'
    return 'bad'
  }

  function handleDrop(e: DragEvent, category: string) {
    e.preventDefault()
    const item = e.dataTransfer.getData('text/plain')
    if (item) onPlace(item, category)
  }

  function handleChipClick(item: string) {
    if (checked) return
    setPickedChip((prev) => (prev === item ? null : item))
  }

  function handleCategoryClick(category: string) {
    if (checked || !pickedChip) return
    onPlace(pickedChip, category)
    setPickedChip(null)
  }

  function handlePlacedClick(item: string) {
    if (checked) return
    onRemove(item)
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
        <span className="qkind-badge">Drag &amp; drop</span>
      </div>
      <p className="prompt">{question.prompt}</p>
      <p className="hint">
        ลากชิปด้านล่างไปวางในกล่องหมวดหมู่ที่ถูกต้อง (บนมือถือ: แตะชิปเพื่อเลือก แล้วแตะกล่องหมวดหมู่เพื่อวาง —
        แตะชิปที่วางแล้วเพื่อดึงกลับ)
      </p>

      <div className="drag-pool" onDragOver={(e) => e.preventDefault()}>
        {remainingPool.length === 0 && <span className="pool-empty">— วางครบทุกชิ้นแล้ว —</span>}
        {remainingPool.map((item) => (
          <div
            key={item}
            className={`chip ${pickedChip === item ? 'picked' : ''}`}
            draggable={!checked}
            onDragStart={(e) => e.dataTransfer.setData('text/plain', item)}
            onClick={() => handleChipClick(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="drag-categories">
        {question.categories.map((cat) => {
          const status = categoryStatus(cat.name)
          return (
            <div
              key={cat.name}
              className={`drag-category ${status ? `cat-${status}` : ''}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, cat.name)}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="drag-category-title">{cat.name}</div>
              <div className="drag-category-slots">
                {(placement[cat.name] ?? []).map((item) => {
                  const isCorrectHere = checked && cat.items.includes(item)
                  return (
                    <div
                      key={item}
                      className={`chip placed ${checked ? (isCorrectHere ? 'chip-ok' : 'chip-bad') : ''}`}
                      onClick={() => handlePlacedClick(item)}
                    >
                      {item}
                    </div>
                  )
                })}
              </div>
              {checked && status === 'bad' && (
                <div className="correct-answer-note">เฉลย: {cat.items.join(' / ')}</div>
              )}
            </div>
          )
        })}
      </div>

      {!checked ? (
        <button className="btn btn-primary" disabled={!allPlaced} onClick={onCheck}>
          ตรวจคำตอบ
        </button>
      ) : (
        <div
          className={`feedback ${question.categories.every((c) => categoryStatus(c.name) === 'ok') ? 'good' : 'bad'}`}
        >
          <div className="feedback-title">
            {question.categories.every((c) => categoryStatus(c.name) === 'ok') ? '✅ ถูกต้อง!' : '❌ ยังไม่ถูกทั้งหมด'}
          </div>
          <div className="feedback-body">{question.explanation}</div>
        </div>
      )}
    </div>
  )
}

export default DragDropQuestion
