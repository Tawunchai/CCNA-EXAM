import { useEffect, useMemo, useState } from 'react'
import { QUESTIONS } from './data/questions'
import { shuffle } from './utils/shuffle'
import { gradeChoice, gradeDrag } from './utils/grade'
import type { AnswerState, ChoiceQuestion, DragQuestion, Option, Question } from './types'
import StartScreen from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import DragDropQuestion from './components/DragDropQuestion'
import Navigator from './components/Navigator'
import SummaryScreen from './components/SummaryScreen'

type Screen = 'start' | 'quiz' | 'summary'

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
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [displayOptions, setDisplayOptions] = useState<Record<number, Option[]>>({})
  const [dragPools, setDragPools] = useState<Record<number, string[]>>({})
  const [answers, setAnswers] = useState<AnswerState[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (screen !== 'quiz') return
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [screen])

  function startQuiz(count: number) {
    const picked = shuffle(QUESTIONS).slice(0, count)
    const opts: Record<number, Option[]> = {}
    const pools: Record<number, string[]> = {}
    picked.forEach((q) => {
      if (q.kind === 'drag') {
        pools[q.id] = shuffle((q as DragQuestion).categories.flatMap((c) => c.items))
      } else {
        // Keep answer options in their original A → B → C → D order (do not shuffle);
        // only the question order is randomized.
        opts[q.id] = (q as ChoiceQuestion).options
      }
    })
    setQuizQuestions(picked)
    setDisplayOptions(opts)
    setDragPools(pools)
    setAnswers(picked.map(emptyAnswer))
    setCurrentIndex(0)
    setSeconds(0)
    setScreen('quiz')
  }

  function restart() {
    setScreen('start')
  }

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

  const statuses = useMemo(
    () =>
      answers.map((a) => ({
        answered: a.kind === 'drag' ? Object.values(a.placement).some((v) => v.length > 0) : a.selected.length > 0,
        checked: a.checked,
        correct: a.correct,
      })),
    [answers],
  )

  const answeredCount = statuses.filter((s) => s.checked).length
  const correctCount = statuses.filter((s) => s.checked && s.correct).length

  if (screen === 'start') {
    return <StartScreen total={QUESTIONS.length} onStart={startQuiz} />
  }

  if (screen === 'summary') {
    return (
      <SummaryScreen
        questions={quizQuestions}
        answers={answers}
        onRestart={restart}
        onReview={(i) => {
          setCurrentIndex(i)
          setScreen('quiz')
        }}
      />
    )
  }

  if (!current) return null

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-bar">
          <div className="app-header-left">
            <span className="app-title">
              CCNA 200-301 <span className="dot-cisco">●</span> Practice Exam
            </span>
            <span className="progress-text">
              ข้อ {currentIndex + 1} / {quizQuestions.length}
            </span>
          </div>
          <div className="app-header-right">
            <span className="timer">⏱ {formatTime(seconds)}</span>
            <span className="score-text">
              ถูก <strong>{correctCount}</strong>/{answeredCount} ที่ตรวจแล้ว
            </span>
            <button className="btn btn-outline btn-sm" onClick={() => setScreen('summary')}>
              ดูสรุปผล
            </button>
          </div>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="app-main">
        {current.kind === 'drag' ? (
          <DragDropQuestion
            question={current as DragQuestion}
            pool={dragPools[current.id] ?? []}
            placement={currentAnswer.kind === 'drag' ? currentAnswer.placement : {}}
            checked={currentAnswer.checked}
            onPlace={placeDragItem}
            onRemove={removeDragItem}
            onCheck={checkDrag}
          />
        ) : (
          <QuestionCard
            question={current as ChoiceQuestion}
            options={displayOptions[current.id] ?? []}
            selected={currentAnswer.kind !== 'drag' ? currentAnswer.selected : []}
            checked={currentAnswer.checked}
            onToggle={toggleChoice}
            onCheck={checkChoice}
          />
        )}

        <div className="nav-buttons">
          <button
            className="btn btn-outline"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          >
            ← ข้อก่อนหน้า
          </button>
          {currentIndex === quizQuestions.length - 1 ? (
            <button className="btn btn-primary" onClick={() => setScreen('summary')}>
              เสร็จสิ้น / ดูสรุปผล
            </button>
          ) : (
            <button
              className="btn btn-outline"
              onClick={() => setCurrentIndex((i) => Math.min(quizQuestions.length - 1, i + 1))}
            >
              ข้อถัดไป →
            </button>
          )}
        </div>

        <Navigator statuses={statuses} currentIndex={currentIndex} onJump={setCurrentIndex} />
      </main>
    </div>
  )
}

export default App
