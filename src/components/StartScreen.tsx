interface Props {
  total: number
  onStart: (count: number) => void
}

const OPTIONS = [20, 50, 100, 150]

function StartScreen({ total, onStart }: Props) {
  return (
    <div className="start-screen">
      <span className="start-brand">
        ● Cisco Certified · 200-301
      </span>
      <h1>CCNA 200-301 Practice Exam</h1>
      <p className="subtitle">
        คลังข้อสอบฝึกซ้อม {total} ข้อ พร้อมรูป exhibit และเฉลยอธิบายละเอียดเป็นภาษาไทย — สุ่มลำดับข้อใหม่ทุกครั้ง
        (ตัวเลือกเรียง A → D คงที่) เฉลยผ่านการตรวจทานตามเนื้อหา CCNA จริง
      </p>
      <div className="start-card">
        <h2>เลือกจำนวนข้อที่ต้องการทำ</h2>
        <div className="start-options">
          {OPTIONS.map((n) => (
            <button key={n} className="btn btn-outline" onClick={() => onStart(n)}>
              {n} ข้อ
            </button>
          ))}
          <button className="btn btn-primary" onClick={() => onStart(total)}>
            ทำทั้งหมด ({total} ข้อ)
          </button>
        </div>
        <ul className="start-tips">
          <li>เลือกคำตอบแล้วกด “ตรวจคำตอบ” เพื่อดูผลและคำอธิบายทันที ทีละข้อ</li>
          <li>ข้อที่เฉลยต้นฉบับผิด จะมี “หมายเหตุ” ระบุคำตอบที่ถูกต้องตามหลัก CCNA</li>
          <li>ใช้แผงนำทางด้านล่างกระโดดไปข้อใดก็ได้ และกด “ดูสรุปผล” เพื่อทบทวน</li>
        </ul>
      </div>
    </div>
  )
}

export default StartScreen
