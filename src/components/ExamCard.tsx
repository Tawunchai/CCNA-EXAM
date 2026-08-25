import { useEffect, useState, type ReactNode } from 'react'

interface Props {
  id: number
  /** `V4 #132` for merged banks; the per-version banks leave this undefined. */
  source?: string
  topic: number
  kind: string
  image?: string
  image2?: string
  prompt: string
  children: ReactNode
  /** Prev/next strip, rendered in the card's own footer. */
  footer?: ReactNode
}

/**
 * The shell every question is drawn in: the blue `Question #n … Topic n` bar,
 * the exhibit, the stem, then whatever the question type needs.
 *
 * The number in the bar is the question's number *in its source bank*, not its
 * position in the paper (that is what the top bar and the navigator show), so a
 * question can be looked up in the PDF while the paper order stays random.
 */
function ExamCard({ id, source, topic, kind, image, image2, prompt, children, footer }: Props) {
  const [zoomed, setZoomed] = useState(false)
  const parsed = source?.match(/^(\S+)\s*#(\d+)$/)
  const number = parsed ? parsed[2] : String(id)
  const origin = parsed ? parsed[1] : null

  useEffect(() => {
    if (!zoomed) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoomed(false)
    window.addEventListener('keydown', onKey)
    // The overlay owns the whole viewport; letting the page behind it scroll
    // makes the wheel feel broken once the image itself stops scrolling.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [zoomed])

  return (
    <>
      <div className="qcard">
        <div className="qcard-head">
          <span className="qcard-no">Question #{number}</span>
          {origin && <span className="qcard-origin">{origin}</span>}
          <span className="qcard-kind">{kind}</span>
          <span className="qcard-topic">Topic {topic}</span>
        </div>
        <div className="qcard-body">
          {image && (
            <div className="exhibit">
              <img src={image} alt={`exhibit for question ${number}`} />
              {image2 && <img src={image2} alt={`exhibit for question ${number} (2)`} />}
              <button className="exhibit-zoom" onClick={() => setZoomed(true)}>
                🔍 ขยายรูป
              </button>
            </div>
          )}
          <p className="prompt">{prompt}</p>
          {children}
        </div>
        {footer && <div className="qcard-foot">{footer}</div>}
      </div>

      {zoomed && image && (
        <div className="lightbox" onClick={() => setZoomed(false)}>
          <div className="lightbox-bar">
            <span>Question #{number} — exhibit (ขนาดจริง เลื่อนดูได้)</span>
            <button className="btn btn-sm btn-outline" onClick={() => setZoomed(false)}>
              ปิด (Esc)
            </button>
          </div>
          <div className="lightbox-scroll" onClick={(e) => e.stopPropagation()}>
            <img src={image} alt={`exhibit for question ${number}, full size`} />
            {image2 && <img src={image2} alt={`exhibit for question ${number} (2), full size`} />}
          </div>
        </div>
      )}
    </>
  )
}

export default ExamCard
