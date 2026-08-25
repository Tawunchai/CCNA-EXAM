import { useState, type DragEvent, type ReactNode } from 'react'
import type { DragQuestion } from '../types'
import ExamCard from './ExamCard'
import { isUngraded } from '../utils/scoring'

interface Props {
  question: DragQuestion
  /** Blueprint domain number (1–6), shown as "Topic n". */
  topic: number
  pool: string[]
  placement: Record<string, string[]>
  checked: boolean
  onPlace: (item: string, category: string) => void
  onRemove: (item: string) => void
  onCheck: () => void
  /** Prev/next controls, rendered in the card footer. */
  nav?: ReactNode
  /** Mock-exam sitting: no per-question grading, so the check button is hidden
   *  and chips stay movable until the whole paper is submitted. */
  examMode?: boolean
}

/**
 * Cisco's drag-and-drop items are laid out as two facing columns — the answers
 * to be dragged on the left, the labelled targets on the right — so that is the
 * layout here.
 *
 * A dragged item keeps its seat on the left as a spent placeholder instead of
 * being removed from the list. Collapsing the list would reshuffle every
 * remaining item under the cursor after each drop, which makes a five-item
 * question needlessly fiddly; the placeholder also keeps the two columns the
 * same height.
 */
function DragDropQuestion({
  question,
  topic,
  pool,
  placement,
  checked,
  onPlace,
  onRemove,
  onCheck,
  nav,
  examMode,
}: Props) {
  const [pickedItem, setPickedItem] = useState<string | null>(null)
  const [hoverTarget, setHoverTarget] = useState<string | null>(null)

  const placedItems = new Set(Object.values(placement).flat())
  const totalItems = question.categories.reduce((n, c) => n + c.items.length, 0)
  const allPlaced = placedItems.size === totalItems
  const allCorrect = question.categories.every((c) => categoryStatus(c.name) === 'ok')

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
    setHoverTarget(null)
    const item = e.dataTransfer.getData('text/plain')
    if (item) onPlace(item, category)
    setPickedItem(null)
  }

  function handleItemClick(item: string) {
    if (checked) return
    if (placedItems.has(item)) {
      onRemove(item)
      return
    }
    setPickedItem((prev) => (prev === item ? null : item))
  }

  function handleTargetClick(category: string) {
    if (checked || !pickedItem) return
    onPlace(pickedItem, category)
    setPickedItem(null)
  }

  return (
    <>
      <ExamCard
        id={question.id}
        source={question.source}
        topic={topic}
        kind="Drag and drop"
        image={question.image}
        image2={question.image2}
        prompt={question.prompt}
        ungraded={isUngraded(question)}
        footer={nav}
      >
        <p className="subhint">
          ลากรายการจากคอลัมน์ซ้ายไปวางในกล่องด้านขวา — บนมือถือแตะรายการซ้ายเพื่อเลือก แล้วแตะกล่องขวาเพื่อวาง
          (แตะรายการที่วางแล้วเพื่อดึงกลับ)
        </p>

        <div className="dd-board">
          <div className="dd-col">
            <div className="dd-col-head">Answers</div>
            <div className="dd-list">
              {pool.map((item) => {
                const used = placedItems.has(item)
                return (
                  <div
                    key={item}
                    className={`dd-item${used ? ' is-used' : ''}${pickedItem === item ? ' is-picked' : ''}`}
                    draggable={!checked && !used}
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', item)}
                    onDragEnd={() => setHoverTarget(null)}
                    onClick={() => handleItemClick(item)}
                  >
                    <span className="dd-item-text">{item}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="dd-col">
            <div className="dd-col-head">Drop here</div>
            <div className="dd-list">
              {question.categories.map((cat) => {
                const status = categoryStatus(cat.name)
                const placed = placement[cat.name] ?? []
                return (
                  <div
                    key={cat.name}
                    className={`dd-target${status ? ` is-${status}` : ''}${
                      hoverTarget === cat.name ? ' is-over' : ''
                    }${pickedItem ? ' is-armed' : ''}`}
                    onDragOver={(e) => {
                      e.preventDefault()
                      setHoverTarget(cat.name)
                    }}
                    onDragLeave={() => setHoverTarget((t) => (t === cat.name ? null : t))}
                    onDrop={(e) => handleDrop(e, cat.name)}
                    onClick={() => handleTargetClick(cat.name)}
                  >
                    <div className="dd-target-label">{cat.name}</div>
                    <div className="dd-slots">
                      {placed.map((item) => (
                        <div
                          key={item}
                          className={`dd-chip${checked ? (cat.items.includes(item) ? ' is-ok' : ' is-bad') : ''}`}
                          onClick={(e) => {
                            // Without this the click also reaches the target box,
                            // which would drop the currently picked item in as
                            // the chip is being pulled back out.
                            e.stopPropagation()
                            if (!checked) onRemove(item)
                          }}
                        >
                          {item}
                        </div>
                      ))}
                      {Array.from({ length: Math.max(0, cat.items.length - placed.length) }).map((_, i) => (
                        <div key={`empty-${i}`} className="dd-slot-empty" />
                      ))}
                    </div>
                    {checked && status === 'bad' && <div className="dd-answer">เฉลย: {cat.items.join(' / ')}</div>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="actions">
          {!checked && !examMode && (
            <button className="btn btn-solve" disabled={!allPlaced} onClick={onCheck}>
              Reveal Solution
            </button>
          )}
          {!checked && !examMode && (
            <span className="action-note">
              วางแล้ว {placedItems.size}/{totalItems} รายการ
            </span>
          )}
          {!checked && examMode && <span className="action-note">โหมดสอบ — เฉลยทั้งหมดจะแสดงหลังส่งข้อสอบ</span>}
          {checked && (
            <span className={`verdict ${allCorrect ? 'is-ok' : 'is-bad'}`}>
              {allCorrect ? '✔ Correct' : '✘ Incorrect — ดูเฉลยในกล่องที่ทำเครื่องหมายไว้'}
            </span>
          )}
        </div>
      </ExamCard>

      {checked && (
        <div className={`exp ${allCorrect ? 'is-ok' : 'is-bad'}`}>
          <div className="exp-head">
            <span className="exp-title">{allCorrect ? '✅ ถูกต้อง!' : '❌ ยังไม่ถูกทั้งหมด'}</span>
          </div>
          <div className="exp-body">{question.explanation}</div>
        </div>
      )}
    </>
  )
}

export default DragDropQuestion
