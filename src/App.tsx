import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { QUESTIONS } from './data/questions'
import { QUESTIONS_V2 } from './data/questionsV2'
import { QUESTIONS_V3 } from './data/questionsV3'
import { QUESTIONS_V4 } from './data/questionsV4'
import { V4_PART_BY_ID } from './data/v4Parts'
import { DRAG_QUESTIONS } from './data/dragBank'
import { shuffle } from './utils/shuffle'
import { randomizeOptions } from './utils/randomizeOptions'
import { gradeChoice, gradeDrag } from './utils/grade'
import type { AnswerState, ChoiceQuestion, DragQuestion, Question } from './types'
import StartScreen from './components/StartScreen'
import type { BankId } from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import DragDropQuestion from './components/DragDropQuestion'
import Navigator from './components/Navigator'
import SummaryScreen from './components/SummaryScreen'
import ExamSummary from './components/ExamSummary'
import { buildExam, EXAM_MINUTES } from './data/examBuilder'
import { classifyDomain, DOMAINS, type DomainId } from './data/domains'
import { isUngraded, scorePaper } from './utils/scoring'

type Screen = 'start' | 'quiz' | 'summary'
type Mode = 'practice' | 'exam'

const EXAM_SECONDS = EXAM_MINUTES * 60

const BANKS: Record<BankId, Question[]> = {
  v1: QUESTIONS,
  v2: QUESTIONS_V2,
  v3: QUESTIONS_V3,
  v4: QUESTIONS_V4,
  v4a: V4_PART_BY_ID.v4a.questions,
  v4b: V4_PART_BY_ID.v4b.questions,
  v4c: V4_PART_BY_ID.v4c.questions,
  v4d: V4_PART_BY_ID.v4d.questions,
  drag: DRAG_QUESTIONS,
}

const BANK_LABELS: Record<BankId, string> = {
  v1: 'V1',
  v2: 'V2',
  v3: 'V3',
  v4: 'BIG',
  v4a: 'BIG 1/4',
  v4b: 'BIG 2/4',
  v4c: 'BIG 3/4',
  v4d: 'BIG 4/4',
  drag: 'DRAG',
}

/** "Topic 1" … "Topic 6" on the question bar — the blueprint domain number. */
const TOPIC_NUMBER: Record<DomainId, number> = DOMAINS.reduce(
  (acc, d, i) => ((acc[d.id] = i + 1), acc),
  {} as Record<DomainId, number>,
)

const OPTION_KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function emptyAnswer(q: Question): AnswerState {
  if (q.kind === 'drag') {
    return { kind: 'drag', placement: {}, checked: false, correct: false }
  }
  return { kind: q.kind, selected: [], checked: false, correct: false }
}

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0')
  const s = (totalSeconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function App() {
  const [screen, setScreen] = useState<Screen>('start')
  const [mode, setMode] = useState<Mode>('practice')
  const [bank, setBank] = useState<BankId>('v4')
  const [shuffleOptions, setShuffleOptions] = useState(true)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [examDomains, setExamDomains] = useState<DomainId[]>([])
  const [topics, setTopics] = useState<number[]>([])
  const [dragPools, setDragPools] = useState<Record<number, string[]>>({})
  const [answers, setAnswers] = useState<AnswerState[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (screen !== 'quiz') return
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [screen])

  // "ข้อถัดไป" sits at the bottom of the card, so without this you land on the
  // next question already scrolled past its exhibit and stem.
  useEffect(() => {
    if (screen === 'quiz') window.scrollTo(0, 0)
  }, [screen, currentIndex])

  /**
   * Shared setup for both modes.
   *
   * When the shuffle switch is on, each choice question is re-dealt here — the
   * options are shuffled and re-lettered A → B → C, and the answer key, the
   * per-option notes and every option letter the Thai explanation mentions are
   * rewritten to match (see `utils/randomizeOptions`). The paper therefore
   * carries its *own* copy of each question; the banks in `data/` are never
   * mutated, so the next sitting deals a fresh order.
   */
  function loadPaper(source: Question[], domains: DomainId[], nextMode: Mode) {
    const picked = shuffleOptions ? randomizeOptions(source) : source
    const pools: Record<number, string[]> = {}
    picked.forEach((q) => {
      if (q.kind === 'drag') {
        pools[q.id] = shuffle((q as DragQuestion).categories.flatMap((c) => c.items))
      }
    })
    setMode(nextMode)
    setQuizQuestions(picked)
    setExamDomains(domains)
    setTopics(picked.map((q) => TOPIC_NUMBER[classifyDomain(q)]))
    setDragPools(pools)
    setAnswers(picked.map(emptyAnswer))
    setCurrentIndex(0)
    setSeconds(0)
    setScreen('quiz')
  }

  function startQuiz(count: number) {
    loadPaper(shuffle(BANKS[bank]).slice(0, count), [], 'practice')
  }

  function startExam() {
    const paper = buildExam()
    loadPaper(paper.questions, paper.domains, 'exam')
  }

  function restart() {
    setScreen('start')
  }

  /**
   * Exam mode withholds feedback while the paper is open, so grading happens
   * once at the end: every answer is marked `checked` so the review screen can
   * show the explanation the same way practice mode does.
   */
  const submitExam = useCallback(() => {
    setAnswers((prev) =>
      prev.map((a, i) => {
        const q = quizQuestions[i]
        if (!q) return a
        if (q.kind === 'drag' && a.kind === 'drag') {
          return { ...a, checked: true, correct: gradeDrag(q, a.placement) }
        }
        if (q.kind !== 'drag' && a.kind !== 'drag') {
          return { ...a, checked: true, correct: gradeChoice(q, a.selected) }
        }
        return a
      }),
    )
    setScreen('summary')
  }, [quizQuestions])

  // Hard stop when the clock runs out, exactly like the real sitting.
  useEffect(() => {
    if (screen === 'quiz' && mode === 'exam' && seconds >= EXAM_SECONDS) submitExam()
  }, [screen, mode, seconds, submitExam])

  const current = quizQuestions[currentIndex]
  const currentAnswer = answers[currentIndex]

  function updateAnswer(index: number, next: AnswerState) {
    setAnswers((prev) => {
      const copy = prev.slice()
      copy[index] = next
      return copy
    })
  }

  function toggleChoice(key: string) {
    if (!current || current.kind === 'drag' || currentAnswer.kind === 'drag') return
    const q = current as ChoiceQuestion
    const a = currentAnswer
    if (a.checked) return
    let nextSelected: string[]
    if (q.kind === 'single') {
      nextSelected = [key]
    } else {
      nextSelected = a.selected.includes(key) ? a.selected.filter((k) => k !== key) : [...a.selected, key]
    }
    updateAnswer(currentIndex, { ...a, selected: nextSelected })
  }

  function checkChoice() {
    if (!current || current.kind === 'drag' || currentAnswer.kind === 'drag') return
    const q = current as ChoiceQuestion
    const correct = gradeChoice(q, currentAnswer.selected)
    updateAnswer(currentIndex, { ...currentAnswer, checked: true, correct })
  }

  function placeDragItem(item: string, category: string) {
    if (!current || current.kind !== 'drag' || currentAnswer.kind !== 'drag') return
    if (currentAnswer.checked) return
    const placement: Record<string, string[]> = {}
    for (const [cat, items] of Object.entries(currentAnswer.placement)) {
      placement[cat] = items.filter((i) => i !== item)
    }
    placement[category] = [...(placement[category] ?? []), item]
    updateAnswer(currentIndex, { ...currentAnswer, placement })
  }

  function removeDragItem(item: string) {
    if (!current || current.kind !== 'drag' || currentAnswer.kind !== 'drag') return
    if (currentAnswer.checked) return
    const placement: Record<string, string[]> = {}
    for (const [cat, items] of Object.entries(currentAnswer.placement)) {
      placement[cat] = items.filter((i) => i !== item)
    }
    updateAnswer(currentIndex, { ...currentAnswer, placement })
  }

  function checkDrag() {
    if (!current || current.kind !== 'drag' || currentAnswer.kind !== 'drag') return
    const q = current as DragQuestion
    const correct = gradeDrag(q, currentAnswer.placement)
    updateAnswer(currentIndex, { ...currentAnswer, checked: true, correct })
  }

  const goPrev = useCallback(() => setCurrentIndex((i) => Math.max(0, i - 1)), [])
  const goNext = useCallback(
    () => setCurrentIndex((i) => Math.min(quizQuestions.length - 1, i + 1)),
    [quizQuestions.length],
  )

  /**
   * Keyboard driving. Working through 500 questions in a sitting is mostly
   * "pick a letter, reveal, move on" — doing that with the mouse alone is the
   * difference between an hour and two. The handler is held in a ref so the
   * listener is attached once and still sees fresh state on every keystroke.
   */
  function handleKey(e: KeyboardEvent) {
    if (screen !== 'quiz' || e.metaKey || e.ctrlKey || e.altKey) return
    const el = e.target as HTMLElement | null
    if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
      return
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
      return
    }
    if (!current || current.kind === 'drag') return
    const q = current as ChoiceQuestion
    if (e.key === 'Enter') {
      e.preventDefault()
      if (currentAnswer.checked || mode === 'exam') goNext()
      else if (currentAnswer.kind !== 'drag' && currentAnswer.selected.length > 0) checkChoice()
      return
    }
    const letter = e.key.toUpperCase()
    const byLetter = OPTION_KEYS.includes(letter) ? letter : null
    // 1–8 select by position, for keyboards where the letter row is awkward.
    const byNumber = /^[1-8]$/.test(e.key) ? OPTION_KEYS[Number(e.key) - 1] : null
    const pick = byLetter ?? byNumber
    if (pick && q.options.some((o) => o.key === pick)) {
      e.preventDefault()
      toggleChoice(pick)
    }
  }

  const keyRef = useRef(handleKey)
  keyRef.current = handleKey
  useEffect(() => {
    const listener = (e: KeyboardEvent) => keyRef.current(e)
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [])

  const statuses = useMemo(
    () =>
      answers.map((a, i) => ({
        answered: a.kind === 'drag' ? Object.values(a.placement).some((v) => v.length > 0) : a.selected.length > 0,
        checked: a.checked,
        correct: a.correct,
        // The navigator paints these neutral rather than green/red — a question
        // that cannot be right or wrong should not look like either.
        ungraded: quizQuestions[i] ? isUngraded(quizQuestions[i]) : false,
      })),
    [answers, quizQuestions],
  )

  const total = quizQuestions.length
  // Progress counts every question you still have to work through; the score
  // counts only the graded ones (see utils/scoring).
  const score = useMemo(() => scorePaper(quizQuestions, answers), [quizQuestions, answers])
  const answeredCount = statuses.filter((s) => s.checked).length
  // Exam mode gives no running score — only how much of the paper is filled in.
  const filledCount = statuses.filter((s) => s.answered).length
  const doneCount = mode === 'exam' ? filledCount : answeredCount
  const remaining = Math.max(0, EXAM_SECONDS - seconds)

  if (screen === 'start') {
    return (
      <StartScreen
        bank={bank}
        total={BANKS[bank].length}
        bankTotals={
          Object.fromEntries(Object.entries(BANKS).map(([id, qs]) => [id, qs.length])) as Record<BankId, number>
        }
        shuffleOptions={shuffleOptions}
        onBankChange={setBank}
        onShuffleOptionsChange={setShuffleOptions}
        onStart={startQuiz}
        onStartExam={startExam}
      />
    )
  }

  if (screen === 'summary') {
    const backToQuestion = (i: number) => {
      setCurrentIndex(i)
      setScreen('quiz')
    }
    return mode === 'exam' ? (
      <ExamSummary
        questions={quizQuestions}
        domains={examDomains}
        answers={answers}
        elapsed={Math.min(seconds, EXAM_SECONDS)}
        onRestart={restart}
        onReview={backToQuestion}
      />
    ) : (
      <SummaryScreen questions={quizQuestions} answers={answers} onRestart={restart} onReview={backToQuestion} />
    )
  }

  if (!current) return null

  const navButtons = (
    <>
      <button className="btn btn-outline btn-sm" disabled={currentIndex === 0} onClick={goPrev}>
        ← ข้อก่อนหน้า
      </button>
      <span className="action-note">
        {currentIndex + 1} / {total}
      </span>
      {currentIndex === total - 1 ? (
        <button className="btn btn-primary btn-sm" onClick={() => (mode === 'exam' ? submitExam() : setScreen('summary'))}>
          {mode === 'exam' ? 'ส่งข้อสอบ / ตรวจผล' : 'เสร็จสิ้น / ดูสรุปผล'}
        </button>
      ) : (
        <button className="btn btn-outline btn-sm" onClick={goNext}>
          ข้อถัดไป →
        </button>
      )}
    </>
  )

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="topbar-brand">
            <span className="topbar-mark">CC</span>
            <span>
              <span className="topbar-title">CCNA 200-301</span>
              <span className="topbar-sub">
                {mode === 'exam' ? 'Mock Exam' : bank === 'drag' ? 'Drag-Drop' : 'Practice'}
              </span>
            </span>
          </div>

          <div className="topbar-mid">
            <span className="chip chip-brand">{mode === 'exam' ? 'EXAM' : BANK_LABELS[bank]}</span>
            <span className="chip">
              ข้อ {currentIndex + 1} / {total}
            </span>
            <div className="meter">
              <div className="meter-fill" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
            </div>
          </div>

          <div className="topbar-right">
            {mode === 'exam' ? (
              <>
                <span className={`chip${remaining <= 300 ? ' chip-urgent' : ''}`}>⏱ {formatTime(remaining)}</span>
                <button className="btn btn-primary btn-sm" onClick={submitExam}>
                  ส่งข้อสอบ
                </button>
              </>
            ) : (
              <>
                <span className="chip">⏱ {formatTime(seconds)}</span>
                <button className="btn btn-outline btn-sm" onClick={() => setScreen('summary')}>
                  ดูสรุปผล
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="quiz-layout">
        <main className="quiz-main">
          {current.kind === 'drag' ? (
            <DragDropQuestion
              key={current.id}
              question={current as DragQuestion}
              topic={topics[currentIndex] ?? 1}
              pool={dragPools[current.id] ?? []}
              placement={currentAnswer.kind === 'drag' ? currentAnswer.placement : {}}
              checked={currentAnswer.checked}
              onPlace={placeDragItem}
              onRemove={removeDragItem}
              onCheck={checkDrag}
              nav={navButtons}
              examMode={mode === 'exam'}
            />
          ) : (
            <QuestionCard
              key={current.id}
              question={current as ChoiceQuestion}
              topic={topics[currentIndex] ?? 1}
              selected={currentAnswer.kind !== 'drag' ? currentAnswer.selected : []}
              checked={currentAnswer.checked}
              onToggle={toggleChoice}
              onCheck={checkChoice}
              nav={navButtons}
              examMode={mode === 'exam'}
            />
          )}
        </main>

        <aside className="quiz-aside">
          <div className="side-card">
            <div className="side-title">ความคืบหน้า</div>
            <div className="stat-grid">
              <div className="stat">
                <span className="stat-num">
                  {doneCount}
                  <span className="text-muted text-[13px] font-semibold">/{total}</span>
                </span>
                <span className="stat-label">{mode === 'exam' ? 'ตอบแล้ว' : 'ตรวจแล้ว'}</span>
              </div>
              <div className="stat">
                <span className="stat-num">{total - doneCount}</span>
                <span className="stat-label">เหลืออีก</span>
              </div>
              {mode === 'exam' ? (
                <div className="stat col-span-2">
                  <span className="stat-num">{formatTime(remaining)}</span>
                  <span className="stat-label">เวลาที่เหลือ (จาก {EXAM_MINUTES} นาที)</span>
                </div>
              ) : (
                <>
                  <div className="stat is-ok">
                    <span className="stat-num">{score.correct}</span>
                    <span className="stat-label">ถูก</span>
                  </div>
                  <div className="stat is-bad">
                    <span className="stat-num">{score.wrong}</span>
                    <span className="stat-label">ผิด</span>
                  </div>
                </>
              )}
            </div>
            <div className="side-progress">
              <div className="meter">
                <div className="meter-fill" style={{ width: `${(doneCount / total) * 100}%` }} />
              </div>
              {score.checked > 0 && mode !== 'exam' && <span>{score.percent}% ถูก</span>}
            </div>
            {score.ungraded > 0 && (
              <p className="side-note">
                ในชุดนี้มี {score.ungraded} ข้อที่ไม่คิดคะแนน — คิดคะแนนจาก {score.graded} ข้อ
              </p>
            )}
          </div>

          <Navigator statuses={statuses} currentIndex={currentIndex} onJump={setCurrentIndex} />

          {/* Nothing to press on a phone, and it is the card that gives way on
              a short screen so the sidebar never needs its own scrollbar. */}
          <div className="side-card keys-card hidden lg:block">
            <div className="side-title">ปุ่มลัด</div>
            <div className="keys">
              <div>
                <span>เลือกคำตอบ</span>
                <span>
                  <kbd className="kbd">A</kbd> … <kbd className="kbd">E</kbd> / <kbd className="kbd">1</kbd>–
                  <kbd className="kbd">5</kbd>
                </span>
              </div>
              <div>
                <span>{mode === 'exam' ? 'ข้อถัดไป' : 'เฉลย / ข้อถัดไป'}</span>
                <kbd className="kbd">Enter</kbd>
              </div>
              <div>
                <span>ย้อน / ถัดไป</span>
                <span>
                  <kbd className="kbd">←</kbd> <kbd className="kbd">→</kbd>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
