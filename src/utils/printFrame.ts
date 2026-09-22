/**
 * Hand a self-contained HTML document to the browser's own PDF writer.
 *
 * Shared by every downloadable sheet in the app (the wrong-answer sheet, the
 * per-set question papers). Printing from an off-screen same-origin iframe
 * rather than `window.open`: there is no popup to be blocked, and nothing is
 * left behind in a tab afterwards. The host document's title is borrowed for
 * the duration because that — not the frame's — is what Chrome pre-fills the
 * "Save as PDF" file name with.
 */

/** Resolve once every exhibit has settled, so `print()` never captures a blank box. */
function imagesSettled(doc: Document, timeoutMs: number) {
  const pending = Array.from(doc.images).filter((img) => !img.complete)
  if (pending.length === 0) return Promise.resolve()
  return Promise.race([
    Promise.all(
      pending.map(
        (img) =>
          new Promise<void>((res) => {
            img.onload = img.onerror = () => res()
          }),
      ),
    ).then(() => undefined),
    new Promise<void>((res) => setTimeout(res, timeoutMs)),
  ])
}

/**
 * The app's own title, held while a sheet is printing.
 *
 * A second download started before the first has cleaned up must not capture
 * the *first* sheet's file name as the thing to restore — that would leave the
 * browser tab named `CCNA-…` for the rest of the session. Only the outermost
 * print takes the snapshot, and only it puts the title back.
 */
let printsInFlight = 0
let hostTitle = ''

export interface PrintOptions {
  /** Document title — what the browser offers as the PDF's file name. */
  fileName: string
  /**
   * How long to wait for exhibits before printing anyway. A 200-question paper
   * carries far more images than a wrong-answer sheet, so callers that build
   * the big papers raise this.
   */
  imageTimeoutMs?: number
}

export async function printHtml(html: string, opts: PrintOptions) {
  const frame = document.createElement('iframe')
  frame.setAttribute('aria-hidden', 'true')
  frame.style.cssText = 'position:fixed;right:0;bottom:0;width:1px;height:1px;border:0;opacity:0'
  document.body.appendChild(frame)

  const win = frame.contentWindow
  const doc = frame.contentDocument
  if (!win || !doc) {
    frame.remove()
    return
  }

  doc.open()
  doc.write(html)
  doc.close()
  await imagesSettled(doc, opts.imageTimeoutMs ?? 8000)

  if (printsInFlight === 0) hostTitle = document.title
  printsInFlight++
  let cleaned = false
  const cleanup = () => {
    if (cleaned) return
    cleaned = true
    printsInFlight--
    if (printsInFlight === 0) document.title = hostTitle
    frame.remove()
  }
  document.title = opts.fileName
  win.addEventListener('afterprint', () => setTimeout(cleanup, 400), { once: true })
  // Safety net: not every browser fires `afterprint` when the dialog is cancelled.
  setTimeout(cleanup, 300_000)

  win.focus()
  win.print()
}

const AMP = /&/g
const LT = /</g
const GT = />/g
const QUOT = /"/g

export const escapeHtml = (s: string) =>
  s.replace(AMP, '&amp;').replace(LT, '&lt;').replace(GT, '&gt;').replace(QUOT, '&quot;')

/** Vite hands out root-relative asset URLs; the print frame has a base of its own. */
export const absoluteUrl = (src: string) => new URL(src, document.baseURI).href
