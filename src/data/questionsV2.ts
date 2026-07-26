import type { Question } from '../types'

import v2q1 from '../assets/version_2/version2_question_1.png'
import v2q2 from '../assets/version_2/version2_question_2.png'
import v2q3 from '../assets/version_2/version2_question_3.png'
import v2q5 from '../assets/version_2/version2_question_5.png'
import v2q12 from '../assets/version_2/version2_question_12.png'
import v2q16 from '../assets/version_2/version2_question_16.png'
import v2q35 from '../assets/version_2/version2_question_35.png'
import v2q38 from '../assets/version_2/version2_question_38.png'
import v2q40 from '../assets/version_2/version2_question_40.png'
import v2q44 from '../assets/version_2/version2_question_44.png'
import v2q47 from '../assets/version_2/version2_question_47.png'
import v2q53 from '../assets/version_2/version2_question_53.png'
import v2q62 from '../assets/version_2/version2_question_62.png'
import v2q71 from '../assets/version_2/version2_question_71.png'
import v2q75 from '../assets/version_2/version2_question_75.png'
import v2q82 from '../assets/version_2/version2_question_82.png'
import v2q85 from '../assets/version_2/version2_question_85.png'
import v2q90 from '../assets/version_2/version2_question_90.png'
import v2q93 from '../assets/version_2/version2_question_93.png'
import v2q95 from '../assets/version_2/version2_question_95.png'
import v2q96 from '../assets/version_2/version2_question_96.png'
import v2q99 from '../assets/version_2/version2_question_99.png'

export const QUESTIONS_V2: Question[] = [
  {
    id: 1,
    kind: 'single',
    image: v2q1,
    prompt: 'Refer to the exhibit. Which type of route does R1 use to reach host 10.10.13.10/32?',
    options: [
      { key: 'A', text: 'default route' },
      { key: 'B', text: 'network route' },
      { key: 'C', text: 'host route' },
      { key: 'D', text: 'floating static route' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ชนิดของ route ที่ต้องแยกให้ออก\n• Default route = 0.0.0.0/0 → ใช้เมื่อไม่มี prefix ใด match เลย (gateway of last resort)\n• Network route = route ที่ชี้ไป "ทั้งซับเน็ต" เช่น /24, /25, /28 ⭐\n• Host route = route ที่ชี้ไป "เครื่องเดียว" คือ prefix /32 เท่านั้น\n• Floating static route = static route ที่ตั้ง AD สูงกว่าปกติ เพื่อเป็นเส้นสำรอง (ต้องเห็นตัวเลข AD แปลก ๆ ในคำสั่ง)\n\n🔍 อ่านตารางเราต์ใน exhibit แล้วหาว่า 10.10.13.10 ตกอยู่ใน prefix ใด:\n• C 10.10.10.0/30 → 10.10.10.0–.3 ✘\n• O 10.10.13.0/25 [110/6576] via 10.10.10.1 → block 128 → ครอบ 10.10.13.0–10.10.13.127 ✔ ⭐\n• C 10.10.10.16/30 → ✘\n• O 10.10.13.144/28 [110/110] → block 16 → ครอบ .144–.159 ✘ (10 ไม่อยู่ในช่วงนี้)\n• B* 0.0.0.0/0 [20/0] via 10.10.10.18 → default (ใช้ต่อเมื่อไม่มีอะไร match)\n\n🧮 มีเพียง 10.10.13.0/25 ที่ครอบ 10.10.13.10 → เป็น prefix /25 ซึ่งเป็น "ซับเน็ต" ไม่ใช่ /32\n\n✅ ทำไม B ถูก: R1 ใช้เส้นทาง 10.10.13.0/25 ที่เรียนรู้จาก OSPF ซึ่งเป็น network route (ชี้ไปทั้งซับเน็ต)\n\n❌ ทำไมข้ออื่นผิด:\nA. default route จะถูกใช้ก็ต่อเมื่อไม่มี prefix เจาะจงใด match — แต่ที่นี่มี /25 match อยู่\nC. host route ต้องเป็น /32 ในตารางเราต์ — ไม่มีบรรทัดใดเป็น /32 เลย (อย่าสับสนกับ "/32" ที่อยู่ในคำถาม ซึ่งหมายถึงเราถามถึงโฮสต์ตัวเดียว)\nD. floating static ต้องเป็น static (S) ที่ระบุ AD สูงกว่าปกติ — ในตารางไม่มี static เลย มีแต่ C, O, B\n\n📗 จำไว้สอบ: /32 = host route | /25, /28 ฯลฯ = network route | 0.0.0.0/0 = default • คำถามถาม "ชนิดของ route ที่ถูกใช้" ให้ดู prefix ในตาราง ไม่ใช่ prefix ในคำถาม',
  },
  {
    id: 2,
    kind: 'single',
    image: v2q2,
    prompt: 'Refer to the exhibit. Which prefix does Router1 use for traffic to Host A?',
    options: [
      { key: 'A', text: '10.10.10.0/28' },
      { key: 'B', text: '10.10.13.0/25' },
      { key: 'C', text: '10.10.13.144/28' },
      { key: 'D', text: '10.10.13.208/29' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — longest prefix match: เลือก prefix ที่ "ยาวที่สุด" ที่ครอบ IP ปลายทาง (มาก่อน AD และ metric เสมอ)\n\n🔍 Host A = 10.10.13.214 → ไล่เช็คทุก prefix ในตาราง:\n• 10.10.10.0/28 → 10.10.10.0–.15 ✘ (คนละ octet ที่ 3)\n• 10.10.13.0/25 → block 128 → .0–.127 ✘ (214 > 127)\n• 10.10.13.128/28 → block 16 → .128–.143 ✘\n• 10.10.13.144/28 → .144–.159 ✘\n• 10.10.13.160/29 → block 8 → .160–.167 ✘\n• 10.10.13.208/29 → block 8 → .208–.215 ✔ ⭐ (214 อยู่ในช่วงนี้)\n\n🧮 วิธีคิดเร็ว /29: block size = 256 − 248 = 8 → ขอบเขตคือ .200, .208, .216 → 214 ตกอยู่ในกลุ่ม .208–.215\n\n✅ ทำไม D ถูก: 10.10.13.208/29 เป็น prefix เดียวที่ครอบ 10.10.13.214 และยาวที่สุดด้วย\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.10.10.0/28 อยู่คนละเครือข่าย (10.10.10.x ไม่ใช่ 10.10.13.x)\nB. /25 จบที่ .127 ไม่ถึง .214\nC. /28 ที่ .144 จบที่ .159 ไม่ถึง .214\n\n📗 จำไว้สอบ: /25→block 128 | /26→64 | /27→32 | /28→16 | /29→8 | /30→4 • หา block size ก่อนแล้วค่อยหาช่วง',
  },
  {
    id: 3,
    kind: 'drag',
    image: v2q3,
    prompt: 'Drag and drop the descriptions of file-transfer protocols from the left onto the correct protocols on the right.',
    categories: [
      {
        name: 'FTP',
        items: ['uses ports 20 and 21', 'provides reliability when loading an IOS image upon boot up', 'uses TCP'],
      },
      {
        name: 'TFTP',
        items: ['uses port 69', 'does not require user authentication', 'uses UDP'],
      },
    ],
    explanation:
      '📘 แนวคิด — FTP vs TFTP (ออกสอบบ่อยมาก จำให้แม่น)\n\n🔹 FTP (File Transfer Protocol):\n• uses TCP → มี 3-way handshake, ACK, retransmission → เชื่อถือได้\n• uses ports 20 and 21 → พอร์ต 21 = control (คำสั่ง), พอร์ต 20 = data (ตัวไฟล์) ในโหมด active\n• provides reliability when loading an IOS image upon boot up → เพราะวิ่งบน TCP จึงมั่นใจได้ว่า image ที่โหลดมาครบทุกไบต์ ไม่เสียหาย\n• ต้องยืนยันตัวตนด้วย username/password\n\n🔹 TFTP (Trivial File Transfer Protocol):\n• uses UDP → ไม่มี handshake ไม่มี ACK ระดับ transport (ใช้ block number + ACK ของตัวเองแทน)\n• uses port 69 → พอร์ตเดียว ไม่แยก control/data\n• does not require user authentication → ไม่มีระบบ login เลย (จึงต้องระวังเรื่องความปลอดภัย)\n• เบาและง่าย จึงนิยมใช้สำรอง/กู้คืน config และ IOS image บนอุปกรณ์เครือข่าย\n\n💡 สรุปความต่าง: FTP = หนักแต่ปลอดภัยและเชื่อถือได้ | TFTP = เบา เร็ว ตั้งค่าง่าย แต่ไม่มีการยืนยันตัวตน\n\n📗 จำไว้สอบ: FTP=TCP 20/21 + login | TFTP=UDP 69 + ไม่มี login | SFTP=SSH(TCP 22) | FTPS=FTP over TLS',
  },
  {
    id: 4,
    kind: 'multi',
    prompt: 'A frame that enters a switch fails the Frame Check Sequence. Which two interface counters are incremented? (Choose two.)',
    options: [
      { key: 'A', text: 'input errors' },
      { key: 'B', text: 'frame' },
      { key: 'C', text: 'giants' },
      { key: 'D', text: 'CRC' },
      { key: 'E', text: 'runts' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — Frame Check Sequence (FCS) คือฟิลด์ 4 ไบต์ท้ายเฟรม Ethernet ที่เก็บค่า CRC ของทั้งเฟรม\nปลายทางคำนวณ CRC ใหม่แล้วเทียบกับค่าใน FCS — ถ้าไม่ตรง แปลว่าเฟรมเสียหายระหว่างทาง → ทิ้งเฟรมและเพิ่มตัวนับ\n\n🔍 ตัวนับใน show interfaces ที่ต้องแยกให้ออก:\n• CRC ⭐ → เฟรมมีค่า checksum ไม่ตรง (FCS ผิด) — สาเหตุหลักคือสายไม่ดี, EMI, duplex mismatch\n• input errors ⭐ → ตัวนับ "รวม" ของข้อผิดพลาดขาเข้าทั้งหมด = runts + giants + CRC + frame + overrun + ignored → ดังนั้นเมื่อ CRC เพิ่ม input errors ก็เพิ่มตามเสมอ\n• runts → เฟรมสั้นกว่า 64 ไบต์\n• giants → เฟรมยาวเกิน MTU สูงสุด (ปกติ > 1518 ไบต์)\n• frame → เฟรมมีจำนวนบิตไม่ลงตัวเป็นไบต์ (alignment error) และมี CRC ผิดด้วย\n\n✅ ทำไม A, D ถูก: FCS ผิด = CRC error → ตัวนับ CRC เพิ่ม และเพราะ input errors เป็นผลรวมของทุก error ขาเข้า จึงเพิ่มตามไปด้วย\n\n❌ ทำไมข้ออื่นผิด:\nB. frame = alignment error ซึ่งเป็นกรณีเฉพาะ (บิตไม่ครบไบต์) โจทย์ไม่ได้ระบุว่าเฟรมมีขนาดบิตผิด\nC. giants = เฟรมใหญ่เกินไป ไม่เกี่ยวกับ FCS\nE. runts = เฟรมเล็กเกินไป ไม่เกี่ยวกับ FCS\n\n📗 จำไว้สอบ: input errors = ผลรวมของ runts+giants+CRC+frame+overrun+ignored • CRC สูง → ตรวจสาย/EMI/duplex',
  },
  {
    id: 5,
    kind: 'drag',
    image: v2q5,
    prompt: 'Drag and drop the IPv4 network subnets from the left onto the correct usable host ranges on the right.',
    categories: [
      { name: '172.28.228.1 - 172.28.229.254', items: ['172.28.228.144/23'] },
      { name: '172.28.224.1 - 172.28.231.254', items: ['172.28.228.144/21'] },
      { name: '172.28.228.129 - 172.28.228.254', items: ['172.28.228.144/25'] },
      { name: '172.28.228.145 - 172.28.228.150', items: ['172.28.228.144/29'] },
      { name: '172.28.192.1 - 172.28.255.254', items: ['172.28.228.144/18'] },
    ],
    explanation:
      '📘 แนวคิด — ขั้นตอนหา "usable host range" ของแต่ละ prefix\n1️⃣ หา block size จาก mask (block = 256 − ค่า octet ที่ mask ไม่เต็ม)\n2️⃣ หา network address = ปัดค่า IP ลงไปหาตัวคูณของ block size ที่ใกล้ที่สุด\n3️⃣ broadcast = network + block − 1\n4️⃣ usable = network+1 ถึง broadcast−1\n\n🧮 คำนวณทีละอันจาก 172.28.228.144:\n• /18 = 255.255.192.0 → block 64 ที่ octet 3 → ขอบเขต .0/.64/.128/.192 → 228 อยู่ในกลุ่ม 192 → network 172.28.192.0, broadcast 172.28.255.255 → ใช้ได้ 172.28.192.1 – 172.28.255.254 ✔\n• /21 = 255.255.248.0 → block 8 ที่ octet 3 → ขอบเขต …216/224/232 → 228 อยู่ในกลุ่ม 224 → network 172.28.224.0, broadcast 172.28.231.255 → ใช้ได้ 172.28.224.1 – 172.28.231.254 ✔\n• /23 = 255.255.254.0 → block 2 ที่ octet 3 → ขอบเขต 226/228/230 → network 172.28.228.0, broadcast 172.28.229.255 → ใช้ได้ 172.28.228.1 – 172.28.229.254 ✔\n• /25 = 255.255.255.128 → block 128 ที่ octet 4 → 144 อยู่ในกลุ่ม 128 → network 172.28.228.128, broadcast 172.28.228.255 → ใช้ได้ .129 – .254 ✔\n• /29 = 255.255.255.248 → block 8 ที่ octet 4 → ขอบเขต 136/144/152 → network 172.28.228.144, broadcast 172.28.228.151 → ใช้ได้ .145 – .150 ✔\n\n💡 เคล็ดลับ: prefix ยิ่งสั้น (เลขน้อย) ช่วงยิ่งกว้าง — เรียงจากกว้างไปแคบคือ /18 > /21 > /23 > /25 > /29\n\n📗 จำไว้สอบ: /18→block 64 (octet3) | /21→8 (octet3) | /23→2 (octet3) | /25→128 (octet4) | /29→8 (octet4)',
  },
  {
    id: 6,
    kind: 'single',
    prompt: 'How do TCP and UDP differ in the way that they establish a connection between two endpoints?',
    options: [
      { key: 'A', text: 'TCP uses the three-way handshake, and UDP does not guarantee message delivery.' },
      { key: 'B', text: 'TCP uses synchronization packets, and UDP uses acknowledgment packets.' },
      { key: 'C', text: 'UDP provides reliable message transfer, and TCP is a connectionless protocol.' },
      {
        key: 'D',
        text: 'UDP uses SYN, SYN ACK, and FIN bits in the frame header while TCP uses SYN, SYN ACK, and ACK bits.',
      },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — วิธี "สร้างการเชื่อมต่อ" ของ TCP กับ UDP\n\n🔹 TCP = connection-oriented → ต้องทำ 3-way handshake ก่อนส่งข้อมูลจริง\n  1️⃣ ไคลเอนต์ส่ง SYN (ขอเชื่อมต่อ + แจ้ง sequence number เริ่มต้น)\n  2️⃣ เซิร์ฟเวอร์ตอบ SYN-ACK (ตอบรับ + แจ้ง sequence ของตัวเอง)\n  3️⃣ ไคลเอนต์ส่ง ACK → การเชื่อมต่อพร้อมใช้งาน\n  ปิดการเชื่อมต่อด้วย FIN/ACK (4-way)\n\n🔹 UDP = connectionless → ไม่มีการสร้างการเชื่อมต่อใด ๆ ส่งดาต้าแกรมออกไปเลย (fire and forget) จึงไม่การันตีว่าจะถึงปลายทาง\n\n✅ ทำไม A ถูก: อธิบายถูกทั้งสองฝั่ง — TCP ใช้ 3-way handshake ส่วน UDP ไม่รับประกันการส่งถึง\n\n❌ ทำไมข้ออื่นผิด:\nB. UDP ไม่มีการใช้ acknowledgment packet เลย (ACK เป็นของ TCP ทั้งหมด)\nC. กลับด้านสิ้นเชิง — TCP ต่างหากที่เชื่อถือได้และเป็น connection-oriented ส่วน UDP เป็น connectionless\nD. กลับด้าน + ผิดตำแหน่ง: บิต SYN/ACK/FIN อยู่ใน "TCP header" (Layer 4) ไม่ใช่ frame header (Layer 2) และ UDP ไม่มีบิตเหล่านี้เลย\n\n📗 จำไว้สอบ: TCP = SYN → SYN-ACK → ACK (เปิด), FIN/ACK (ปิด) | UDP = ไม่มี handshake',
  },
  {
    id: 7,
    kind: 'single',
    prompt: 'Which 802.11 frame type is Association Response?',
    options: [
      { key: 'A', text: 'management' },
      { key: 'B', text: 'protected frame' },
      { key: 'C', text: 'action' },
      { key: 'D', text: 'control' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เฟรม 802.11 มี 3 ชนิดหลัก\n\n1️⃣ Management frame ⭐ — ใช้จัดการ "การเข้าร่วม/ออกจาก" เครือข่าย\n  • Beacon (AP ประกาศตัว), Probe Request/Response\n  • Authentication / Deauthentication\n  • Association Request / Association Response ⭐\n  • Reassociation Request/Response (ตอน roaming), Disassociation\n  • Action frame (ก็จัดอยู่ในกลุ่ม management เช่นกัน)\n\n2️⃣ Control frame — ควบคุมการเข้าถึงสื่อกลาง (ใครได้พูดเมื่อไหร่)\n  • RTS, CTS, ACK, PS-Poll, Block ACK\n\n3️⃣ Data frame — บรรทุกข้อมูลของผู้ใช้จริง ๆ\n\n✅ ทำไม A ถูก: Association Response คือเฟรมที่ AP ตอบกลับไคลเอนต์หลังได้รับ Association Request เพื่อยืนยันว่ารับเข้าเป็นสมาชิก BSS แล้ว — เป็นกระบวนการ "จัดการ" จึงเป็น management frame\n\n❌ ทำไมข้ออื่นผิด:\nB. "protected frame" ไม่ใช่ชนิดเฟรม — เป็นเพียง "บิตธง" ใน Frame Control ที่บอกว่า payload ถูกเข้ารหัสอยู่\nC. action เป็นเฟรมย่อยชนิดหนึ่ง "ภายใต้" management แต่ไม่ใช่ชนิดของ Association Response\nD. control frame คือ RTS/CTS/ACK ที่ใช้จัดคิวการส่ง ไม่เกี่ยวกับการเข้าร่วมเครือข่าย\n\n📗 จำไว้สอบ: ลำดับไคลเอนต์เข้าเครือข่าย = Probe → Authentication → Association (ทั้งหมดเป็น management frame)',
  },
  {
    id: 8,
    kind: 'single',
    prompt: 'In which way does a spine-and-leaf architecture allow for scalability in a network when additional access ports are required?',
    options: [
      { key: 'A', text: 'A spine switch and a leaf switch can be added with redundant connections between them.' },
      { key: 'B', text: 'A spine switch can be added with at least 40 GB uplinks.' },
      { key: 'C', text: 'A leaf switch can be added with connections to every spine switch.' },
      { key: 'D', text: 'A leaf switch can be added with a single connection to a core spine switch.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม Spine-and-Leaf (นิยมในดาต้าเซ็นเตอร์ยุคใหม่)\nกฎเหล็ก 3 ข้อ:\n1️⃣ leaf ทุกตัวต้องต่อกับ spine "ทุกตัว" (full mesh ระหว่างสองชั้น)\n2️⃣ leaf ห้ามต่อกับ leaf ด้วยกัน และ spine ห้ามต่อกับ spine ด้วยกัน\n3️⃣ อุปกรณ์ปลายทางเสียบที่ leaf เท่านั้น (spine ไม่มีพอร์ตให้ host)\n\n💡 ผลที่ได้: ทุกเส้นทางระหว่าง host สองตัวมีจำนวน hop เท่ากันเสมอ (leaf → spine → leaf) → latency คาดเดาได้ และไม่ต้องพึ่ง STP เพราะใช้ ECMP/routing กระจายโหลดทุกลิงก์\n\n✅ ทำไม C ถูก: เมื่อต้องการพอร์ตเพิ่ม ก็เพิ่ม leaf switch แล้วต่อขึ้นไปยัง spine "ทุกตัว" → ได้พอร์ตเพิ่มโดยยังคงคุณสมบัติ hop count เท่ากันและกระจายโหลดได้เต็มที่\n\n❌ ทำไมข้ออื่นผิด:\nA. การเพิ่ม spine ใช้เพื่อเพิ่ม "แบนด์วิดท์ระหว่างชั้น" ไม่ใช่เพื่อเพิ่มพอร์ตให้ host — และ spine กับ leaf ไม่ได้ต่อกันแบบ redundant เป็นคู่ ๆ แต่ต่อแบบ full mesh\nB. ความเร็ว uplink (40G/100G) เป็นเรื่องประสิทธิภาพ ไม่ใช่วิธีเพิ่มจำนวนพอร์ต access\nD. ต่อ leaf เข้ากับ spine เพียงตัวเดียว = ผิดหลักการ full mesh → เสีย redundancy และทำให้ hop count ไม่เท่ากัน\n\n📗 จำไว้สอบ: เพิ่มพอร์ต → เพิ่ม leaf | เพิ่มแบนด์วิดท์/ความทนทาน → เพิ่ม spine | leaf ต้องต่อ spine ครบทุกตัว',
  },
  {
    id: 9,
    kind: 'single',
    prompt: 'What identifies the functionality of virtual machines?',
    options: [
      { key: 'A', text: 'The hypervisor communicates on Layer 3 without the need for additional resources.' },
      { key: 'B', text: 'Each hypervisor supports a single virtual machine and a single software switch.' },
      { key: 'C', text: 'The hypervisor virtualizes physical components including CPU, memory, and storage.' },
      {
        key: 'D',
        text: 'Virtualized servers run efficiently when physically connected to a switch that is separate from the hypervisor.',
      },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Virtualization และ Hypervisor\n• Hypervisor (VMM) = ซอฟต์แวร์ชั้นกลางที่ "จำลอง" ฮาร์ดแวร์จริง (CPU, RAM, storage, NIC) แล้วแบ่งให้ VM แต่ละตัวใช้งาน ⭐\n• VM แต่ละตัวมี OS ของตัวเอง (guest OS) และคิดว่าตัวเองมีฮาร์ดแวร์ครบชุดเป็นของตัวเอง\n• ประเภทของ hypervisor:\n  - Type 1 (bare-metal) = ติดตั้งบนฮาร์ดแวร์โดยตรง เช่น VMware ESXi, Hyper-V, KVM → ประสิทธิภาพสูง ใช้ในดาต้าเซ็นเตอร์\n  - Type 2 (hosted) = ทำงานบน OS อีกที เช่น VirtualBox, VMware Workstation → ใช้บนเครื่องส่วนตัว\n• VM ต่อเครือข่ายผ่าน "virtual switch (vSwitch)" ที่อยู่ภายในโฮสต์\n\n✅ ทำไม C ถูก: หัวใจของ virtualization คือ hypervisor จำลององค์ประกอบฮาร์ดแวร์จริงให้กลายเป็นทรัพยากรเสมือนที่แบ่งปันกันได้\n\n❌ ทำไมข้ออื่นผิด:\nA. hypervisor ไม่ได้ทำงานที่ Layer 3 — การสื่อสารของ VM ใช้ vSwitch ซึ่งเป็น Layer 2 และยังต้องใช้ทรัพยากรของโฮสต์อยู่ดี\nB. ผิดชัดเจน — จุดขายทั้งหมดของ hypervisor คือรัน VM ได้ "หลายตัว" พร้อมกัน (และรองรับ vSwitch หลายตัว)\nD. VM สื่อสารกันผ่าน vSwitch ภายในโฮสต์โดยไม่ต้องออกไปสวิตช์ภายนอกด้วยซ้ำ — การแยกสวิตช์ไม่ใช่เงื่อนไขของประสิทธิภาพ\n\n📗 จำไว้สอบ: hypervisor = จำลอง CPU/RAM/Storage/NIC ให้ VM หลายตัวใช้ร่วมกัน • Type 1 = bare-metal, Type 2 = hosted',
  },
  {
    id: 10,
    kind: 'single',
    prompt: 'Which command automatically generates an IPv6 address from a specified IPv6 prefix and the MAC address of an interface?',
    options: [
      { key: 'A', text: 'ipv6 address dhcp' },
      { key: 'B', text: 'ipv6 address 2001:DB8:5:112::/64 eui-64' },
      { key: 'C', text: 'ipv6 address autoconfig' },
      { key: 'D', text: 'ipv6 address 2001:DB8:5:112::2/64 link-local' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C (autoconfig) — แต่ autoconfig ไม่ได้รับ prefix จากคำสั่ง มันรอ prefix จาก Router Advertisement ต่างหาก ขณะที่โจทย์ระบุชัดว่า "จาก IPv6 prefix ที่กำหนดไว้" คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — วิธีให้ IPv6 address บนอินเทอร์เฟซ\n• ipv6 address <prefix>/<len> eui-64 ⭐ → เรากำหนด prefix 64 บิตแรกเอง ส่วน 64 บิตหลัง (interface ID) เราเตอร์สร้างให้อัตโนมัติจาก MAC ด้วยกระบวนการ EUI-64\n• ipv6 address autoconfig → SLAAC: รอฟัง prefix จาก RA ของเราเตอร์ในเครือข่าย แล้วค่อยสร้าง interface ID (เราไม่ได้ระบุ prefix เอง)\n• ipv6 address dhcp → ขอที่อยู่ทั้งก้อนจากเซิร์ฟเวอร์ DHCPv6 (stateful)\n• ipv6 address <addr> link-local → กำหนด link-local address เองแบบตายตัว\n\n🔧 กระบวนการ EUI-64 (3 ขั้นตอน):\n1️⃣ แยก MAC 48 บิตออกเป็น 2 ครึ่ง (OUI 24 บิต | serial 24 บิต)\n2️⃣ แทรก FFFE (16 บิต) ตรงกลาง → ได้ 64 บิต\n3️⃣ พลิกบิตที่ 7 จากซ้าย (Universal/Local bit) จาก 0 เป็น 1\n  ตัวอย่าง MAC 00:0C:29:1A:2B:3C → 020C:29FF:FE1A:2B3C\n\n✅ ทำไม B ถูก: ตรงตามโจทย์ทุกคำ — มี "prefix ที่กำหนด" (2001:DB8:5:112::/64) และคีย์เวิร์ด eui-64 ที่สั่งให้สร้าง interface ID จาก MAC\n\n❌ ทำไมข้ออื่นผิด:\nA. DHCPv6 ได้ที่อยู่จากเซิร์ฟเวอร์ ไม่ได้สร้างจาก MAC\nC. autoconfig (SLAAC) ใช้ prefix จาก RA ไม่ใช่ prefix ที่เราระบุในคำสั่ง\nD. ระบุที่อยู่เต็ม ๆ เองแบบ static และเป็น link-local — ไม่มีการสร้างจาก MAC\n\n📗 จำไว้สอบ: eui-64 = prefix เรากำหนด + host part จาก MAC (แทรก FFFE + พลิกบิต 7) • autoconfig/SLAAC = prefix มาจาก RA',
  },
  {
    id: 11,
    kind: 'multi',
    prompt: 'When configuring IPv6 on an interface, which two IPv6 multicast groups are joined? (Choose two.)',
    options: [
      { key: 'A', text: '2000::/3' },
      { key: 'B', text: '2002::5' },
      { key: 'C', text: 'FC00::/7' },
      { key: 'D', text: 'FF02::1' },
      { key: 'E', text: 'FF02::2' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — เมื่อเปิด IPv6 บนอินเทอร์เฟซของเราเตอร์ อุปกรณ์จะเข้าร่วมกลุ่ม multicast โดยอัตโนมัติ\n\n🔹 กลุ่ม multicast ที่ต้องจำ (ทั้งหมดขึ้นต้น FF02:: = link-local scope):\n• FF02::1 = All Nodes ⭐ → ทุกอุปกรณ์ IPv6 บนลิงก์เข้าร่วม (เทียบได้กับ broadcast ของ IPv4)\n• FF02::2 = All Routers ⭐ → เฉพาะเราเตอร์ (อุปกรณ์ที่เปิด ipv6 unicast-routing)\n• FF02::5 / FF02::6 = OSPFv3 All SPF Routers / All DR Routers\n• FF02::9 = RIPng\n• FF02::A = EIGRPv6\n• FF02::1:FFxx:xxxx = Solicited-node multicast (ใช้ใน NDP แทน ARP)\n\n✅ ทำไม D, E ถูก: เราเตอร์ที่เปิด IPv6 บนอินเทอร์เฟซจะเข้าร่วมทั้ง FF02::1 (ในฐานะ node) และ FF02::2 (ในฐานะ router)\n\n❌ ทำไมข้ออื่นผิด:\nA. 2000::/3 = ช่วง global unicast ไม่ใช่ multicast\nB. 2002::5 อยู่ในช่วง 6to4 (unicast) ไม่ใช่ multicast\nC. FC00::/7 = Unique Local Address (unicast แบบ private)\n\n💡 เกร็ด: ถ้าอุปกรณ์เป็นเพียง host (ไม่ได้เปิด ipv6 unicast-routing) จะเข้าร่วมแค่ FF02::1 กับ solicited-node เท่านั้น\n\n📗 จำไว้สอบ: FF02::1 = ทุก node | FF02::2 = ทุก router | FF02::5,::6 = OSPFv3 | FF00::/8 = multicast ทั้งหมด',
  },
  {
    id: 12,
    kind: 'drag',
    image: v2q12,
    prompt: 'Refer to the exhibit. Drag and drop the networking parameters from the left onto the correct values on the right.',
    categories: [
      { name: '00:0C:22', items: ['NIC vendor OUI'] },
      { name: '00:0C:22:83:79:A3', items: ['NIC MAC address'] },
      { name: '192.168.1.193', items: ['default gateway'] },
      { name: '192.168.1.200', items: ['host IP address'] },
      { name: '255.255.255.192', items: ['subnet mask'] },
    ],
    explanation:
      '📘 แนวคิด — อ่านผลลัพธ์คำสั่งบน Linux ให้ออกว่าค่าไหนคืออะไร\n\n🔍 จากคำสั่ง "ip route":\n  default via 192.168.1.193 dev eth1 → คำว่า "default via" บอก default gateway = 192.168.1.193 ⭐\n  192.168.1.0/26 dev eth1 … src 192.168.1.200 → ซับเน็ตที่ต่ออยู่คือ /26\n\n🔍 จากคำสั่ง "ip addr show eth1":\n  link/ether 00:0C:22:83:79:A3 → MAC address ของการ์ดเครือข่าย ⭐\n  inet 192.168.1.200/26 → host IP address = 192.168.1.200 ⭐ และ prefix = /26\n\n🧮 แปลง /26 เป็น subnet mask: 26 บิตแรกเป็น 1 → 11111111.11111111.11111111.11000000 = 255.255.255.192 ⭐\n\n🔧 OUI (Organizationally Unique Identifier) = 24 บิตแรก (3 ไบต์แรก) ของ MAC ซึ่งระบุ "ผู้ผลิต"\n  จาก 00:0C:22:83:79:A3 → OUI = 00:0C:22 ⭐ ส่วน 83:79:A3 คือหมายเลขเครื่องที่ผู้ผลิตกำหนด\n\n💡 ตรวจสอบความสมเหตุสมผล: /26 block = 64 → เครื่องอยู่ที่ .200 จึงอยู่ในซับเน็ต 192.168.1.192/26 (ช่วง .192–.255) และ gateway .193 ก็เป็น first usable ของซับเน็ตนี้พอดี ✔\n\n📗 จำไว้สอบ: MAC 48 บิต = OUI 24 บิต (ผู้ผลิต) + serial 24 บิต • /26 = 255.255.255.192 • "default via" = gateway',
  },
  {
    id: 13,
    kind: 'single',
    prompt: 'What is the default behavior of a Layer 2 switch when a frame with an unknown destination MAC address is received?',
    options: [
      { key: 'A', text: 'The Layer 2 switch forwards the packet and adds the destination MAC address to its MAC address table.' },
      { key: 'B', text: 'The Layer 2 switch sends a copy of a packet to CPU for destination MAC address learning.' },
      { key: 'C', text: 'The Layer 2 switch floods packets to all ports except the receiving port in the given VLAN.' },
      { key: 'D', text: 'The Layer 2 switch drops the received frame.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สวิตช์ Layer 2 ทำงาน 3 อย่าง\n1️⃣ Learning → อ่าน "source MAC" ของเฟรมที่เข้ามา แล้วบันทึกคู่ (MAC ↔ พอร์ต ↔ VLAN) ลงตาราง CAM\n2️⃣ Forwarding → ถ้ารู้จัก destination MAC → ส่งออกเฉพาะพอร์ตนั้นพอร์ตเดียว\n3️⃣ Flooding ⭐ → ถ้า "ไม่รู้จัก" destination MAC (unknown unicast) → ส่งออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตที่รับเข้ามา\n\n💡 ทำไมต้องยกเว้นพอร์ตขาเข้า? เพราะผู้ส่งอยู่ทางนั้น ส่งกลับไปก็ไร้ประโยชน์และอาจสร้างปัญหา\n💡 ทำไมจำกัดเฉพาะ VLAN เดียวกัน? เพราะ VLAN คือขอบเขตของ broadcast domain — เฟรมจะไม่ข้าม VLAN โดยไม่มีเราเตอร์\n\n✅ ทำไม C ถูก: อธิบายพฤติกรรม flooding ได้ถูกทั้งขอบเขต (VLAN เดียวกัน) และข้อยกเว้น (ไม่ส่งกลับพอร์ตขาเข้า)\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์เรียนรู้จาก "source MAC" เท่านั้น ไม่เคยเรียนรู้จาก destination MAC (เพราะยังไม่รู้ว่าปลายทางอยู่พอร์ตไหน)\nB. สวิตช์ไม่ส่งเฟรมข้อมูลขึ้น CPU เพื่อเรียนรู้ — การ forward/flood ทำที่ ASIC ระดับฮาร์ดแวร์\nD. การทิ้งเฟรมเป็นพฤติกรรมของเราเตอร์เมื่อไม่มี route ไม่ใช่ของสวิตช์\n\n📗 จำไว้สอบ: unknown unicast + broadcast + multicast → flood ใน VLAN เดียวกัน ยกเว้นพอร์ตขาเข้า • MAC aging default 300 วินาที',
  },
  {
    id: 14,
    kind: 'single',
    prompt: 'An engineer must configure a /30 subnet between two routers. Which usable IP address and subnet mask combination meets this criteria?',
    options: [
      { key: 'A', text: 'interface e0/0 / ip address 10.2.1.3 255.255.255.252' },
      { key: 'B', text: 'interface e0/0 / ip address 192.168.1.1 255.255.255.248' },
      { key: 'C', text: 'interface e0/0 / ip address 172.16.1.4 255.255.255.248' },
      { key: 'D', text: 'interface e0/0 / ip address 209.165.201.2 255.255.255.252' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — /30 คือ mask 255.255.255.252 (block size 4) นิยมใช้กับลิงก์ point-to-point ระหว่างเราเตอร์เพราะให้ host ได้พอดี 2 ตัว\nแต่ละกลุ่ม /30 ประกอบด้วย: network, usable 2 ตัว, broadcast — ขอบเขตคือ .0, .4, .8, .12, …\nโจทย์ต้องถูก 2 อย่าง: (1) mask ต้องเป็น /30 และ (2) IP ต้องเป็น "usable" ไม่ใช่ network หรือ broadcast\n\n🧮 ตรวจทีละข้อ:\nA. 10.2.1.3 /255.255.255.252 → mask ถูก (/30) แต่ .3 อยู่ในกลุ่ม 10.2.1.0/30 (network .0, usable .1–.2, broadcast .3) → .3 = broadcast ✘\nB. 192.168.1.1 /255.255.255.248 → mask เป็น /29 ไม่ใช่ /30 ✘\nC. 172.16.1.4 /255.255.255.248 → mask เป็น /29 และ .4 ยังเป็นได้แค่ usable ของ /29 → ผิดโจทย์ตั้งแต่ mask ✘\nD. 209.165.201.2 /255.255.255.252 → mask ถูก (/30) และ .2 อยู่ในกลุ่ม 209.165.201.0/30 (network .0, usable .1–.2, broadcast .3) → .2 = usable ✔ ⭐\n\n✅ ทำไม D ถูก: เป็นข้อเดียวที่ mask เป็น /30 จริง และ IP ที่ใช้เป็นที่อยู่ที่กำหนดให้อินเทอร์เฟซได้\n\n📗 จำไว้สอบ: /30 = 255.255.255.252, block 4, ใช้ได้ 2 host • ขอบเขต .0/.4/.8/.12 • ตัวสุดท้ายของทุกกลุ่มคือ broadcast ห้ามใช้',
  },
  {
    id: 15,
    kind: 'single',
    prompt: 'Which network allows devices to communicate without the need to access the Internet?',
    options: [
      { key: 'A', text: '172.9.0.0/16' },
      { key: 'B', text: '172.28.0.0/16' },
      { key: 'C', text: '192.0.0.0/8' },
      { key: 'D', text: '209.165.201.0/24' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ช่วงที่อยู่ส่วนตัวตาม RFC 1918 (ต้องท่องให้ขึ้นใจ)\n• 10.0.0.0 – 10.255.255.255        (10.0.0.0/8)\n• 172.16.0.0 – 172.31.255.255      (172.16.0.0/12) ⭐ จำช่วง 16 ถึง 31 ให้แม่น\n• 192.168.0.0 – 192.168.255.255    (192.168.0.0/16)\nที่อยู่ในช่วงเหล่านี้จะไม่ถูก route บนอินเทอร์เน็ต จึงใช้สื่อสารกันภายในองค์กรได้โดยไม่ต้องพึ่งอินเทอร์เน็ต (และต้องผ่าน NAT ถ้าจะออกเน็ต)\n\n🔍 ตรวจทีละข้อ:\nA. 172.9.0.0/16 → 9 อยู่นอกช่วง 16–31 → เป็น public address ✘\nB. 172.28.0.0/16 → 28 อยู่ในช่วง 16–31 → private ✔ ⭐\nC. 192.0.0.0/8 → private คือ "192.168.x.x" เท่านั้น ไม่ใช่ 192 ทั้งหมด → เป็น public ✘\nD. 209.165.201.0/24 → เป็นช่วง public ที่ Cisco ใช้ในตัวอย่างเอกสารบ่อย ๆ ✘\n\n✅ ทำไม B ถูก: 172.28.0.0/16 ตกอยู่ใน 172.16.0.0/12 จึงเป็นที่อยู่ส่วนตัวที่ใช้สื่อสารภายในได้เลย\n\n📗 จำไว้สอบ: 10/8 • 172.16–172.31 • 192.168/16 — กับดักคือ 172.x ที่ x นอกช่วง 16–31 และ 192.x ที่ไม่ใช่ 192.168',
  },
  {
    id: 16,
    kind: 'single',
    image: v2q16,
    prompt: 'Refer to the exhibit. Which statement explains the configuration error message that is received?',
    options: [
      { key: 'A', text: 'It belongs to a private IP address range.' },
      { key: 'B', text: 'The router does not support /28 mask.' },
      { key: 'C', text: 'It is a network IP address.' },
      { key: 'D', text: 'It is a broadcast IP address.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — IOS จะปฏิเสธการกำหนด IP ให้อินเทอร์เฟซถ้าที่อยู่นั้นเป็น "network address" หรือ "broadcast address" ของซับเน็ตนั้น พร้อมขึ้นข้อความ "Bad mask …"\n\n🔍 จาก exhibit: ip address 192.168.16.143 255.255.255.240 → mask /28\n\n🧮 คำนวณ:\n• /28 = 255.255.255.240 → block size = 256 − 240 = 16\n• ขอบเขตของซับเน็ตคือ .0, .16, .32, … .128, .144\n• 143 ตกอยู่ในกลุ่มที่เริ่มที่ .128 → ซับเน็ต 192.168.16.128/28\n• network = 192.168.16.128\n• broadcast = 128 + 16 − 1 = 192.168.16.143 ⭐ ← ตรงกับที่พิมพ์พอดี!\n• usable = .129 – .142\n\n✅ ทำไม D ถูก: 192.168.16.143 คือ broadcast address ของซับเน็ต 192.168.16.128/28 จึงกำหนดให้อินเทอร์เฟซไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. 192.168.x.x เป็น private จริง แต่ IOS อนุญาตให้ใช้ที่อยู่ private บนอินเทอร์เฟซได้ปกติ ไม่ใช่สาเหตุของ error\nB. IOS รองรับ /28 (และทุก mask ตั้งแต่ /1–/32) อยู่แล้ว\nC. network address ของซับเน็ตนี้คือ .128 ไม่ใช่ .143\n\n📗 จำไว้สอบ: เห็น "Bad mask" → ตรวจว่า IP นั้นเป็น network หรือ broadcast ของซับเน็ตหรือไม่ • /28 block 16 → .128 ครอบถึง .143',
  },
  {
    id: 17,
    kind: 'single',
    prompt: 'Which IPv6 address type provides communication between subnets and cannot route on the Internet?',
    options: [
      { key: 'A', text: 'link-local' },
      { key: 'B', text: 'unique local' },
      { key: 'C', text: 'multicast' },
      { key: 'D', text: 'global unicast' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โจทย์บังคับ 2 เงื่อนไขพร้อมกัน จึงต้องหาชนิดที่ผ่านทั้งคู่\n1️⃣ "ต้องสื่อสารข้ามซับเน็ตได้" → ต้อง routable ภายในองค์กร\n2️⃣ "ต้อง route บนอินเทอร์เน็ตไม่ได้" → ต้องเป็น private\n\n🔍 เทียบแต่ละชนิด:\n• Link-Local (FE80::/10) → ใช้ได้เฉพาะ "บนลิงก์เดียวกัน" เท่านั้น เราเตอร์ไม่ forward ข้ามลิงก์เด็ดขาด → ตกข้อ 1 ✘\n• Unique Local (FC00::/7 ในทางปฏิบัติใช้ FD00::/8) ⭐ → เทียบได้กับ RFC1918 ของ IPv4: route ข้ามซับเน็ตภายในองค์กรได้ ✔ แต่ ISP จะไม่ประกาศออกอินเทอร์เน็ต ✔ → ผ่านทั้งสองข้อ\n• Multicast (FF00::/8) → เป็นที่อยู่ "กลุ่มปลายทาง" ไม่ใช่ที่อยู่ประจำอินเทอร์เฟซสำหรับสื่อสารทั่วไป ✘\n• Global Unicast (2000::/3) → route บนอินเทอร์เน็ตได้ → ตกข้อ 2 ✘\n\n✅ ทำไม B ถูก: Unique Local Address คือชนิดเดียวที่ routable ภายในองค์กรแต่ห้ามออกอินเทอร์เน็ต\n\n📗 จำไว้สอบ: FE80=แค่ลิงก์เดียว | FD=private ข้ามซับเน็ตได้ | 2000::/3=ออกเน็ตได้ | FF=multicast',
  },
  {
    id: 18,
    kind: 'single',
    prompt: 'Which IPv6 address block sends packets to a group address rather than a single address?',
    options: [
      { key: 'A', text: '2000::/3' },
      { key: 'B', text: 'FC00::/7' },
      { key: 'C', text: 'FE80::/10' },
      { key: 'D', text: 'FF00::/8' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — IPv6 มีที่อยู่ 3 ชนิด (ไม่มี broadcast!)\n• Unicast = หนึ่งต่อหนึ่ง → ส่งถึงอินเทอร์เฟซเดียว\n• Multicast = หนึ่งต่อกลุ่ม ⭐ → ส่งถึงทุกคนที่ "สมัครเป็นสมาชิกกลุ่ม" นั้น\n• Anycast = หนึ่งต่อตัวที่ใกล้ที่สุด → ที่อยู่ unicast เดียวกันอยู่บนหลายเครื่อง\n\n🔍 จำแนกช่วงที่อยู่:\n• 2000::/3 (ขึ้นต้น 2 หรือ 3) → Global Unicast\n• FC00::/7 (ขึ้นต้น FC/FD) → Unique Local Unicast\n• FE80::/10 (ขึ้นต้น FE80) → Link-Local Unicast\n• FF00::/8 (ขึ้นต้น FF) → Multicast ⭐\n\n✅ ทำไม D ถูก: FF00::/8 คือช่วงเดียวที่เป็น multicast — ส่งถึง "กลุ่ม" ปลายทาง ไม่ใช่เครื่องเดียว\n\n❌ ทำไมข้ออื่นผิด: A, B, C ล้วนเป็น unicast (ส่งถึงอินเทอร์เฟซเดียว) ต่างกันแค่ขอบเขตการ route\n\n💡 เกร็ด: IPv6 เลิกใช้ broadcast แล้ว งานที่เคยใช้ broadcast ถูกแทนด้วย multicast เช่น FF02::1 (all nodes) ทำหน้าที่แทน broadcast ของ IPv4\n\n📗 จำไว้สอบ: 2/3=Global | FC/FD=ULA | FE80=Link-Local | FF=Multicast',
  },
  {
    id: 19,
    kind: 'multi',
    prompt: 'What are two reasons that cause late collisions to increment on an Ethernet interface? (Choose two.)',
    options: [
      { key: 'A', text: 'when Carrier Sense Multiple Access/Collision Detection is used' },
      { key: 'B', text: 'when one side of the connection is configured for half-duplex' },
      { key: 'C', text: 'when the sending device waits 15 seconds before sending the frame again' },
      { key: 'D', text: 'when a collision occurs after the 32nd byte of a frame has been transmitted' },
      { key: 'E', text: 'when the cable length limits are exceeded' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — Late collision คือการชนกันที่เกิด "หลังจากส่งไปแล้วเกิน 64 ไบต์แรก" (slot time) ซึ่งผิดปกติ เพราะตามทฤษฎี CSMA/CD การชนต้องถูกตรวจพบภายใน 64 ไบต์แรกเท่านั้น\n\n🔎 สาเหตุหลัก 2 อย่าง:\n1️⃣ Duplex mismatch ⭐ — ฝั่งหนึ่งเป็น full-duplex อีกฝั่งเป็น half-duplex\n  ฝั่ง full จะส่งได้ตลอดเวลาโดยไม่ฟังสาย ส่วนฝั่ง half กำลังส่งอยู่ → ชนกันกลางคัน = late collision\n  (มักเกิดเมื่อฝั่งหนึ่งตั้งค่าตายตัวแต่อีกฝั่งเป็น auto — auto จะ fallback เป็น half-duplex)\n2️⃣ Cable ยาวเกินสเปก ⭐ — สายยาวเกิน 100 เมตร (UTP) ทำให้สัญญาณเดินทางช้าจนตรวจจับการชนไม่ทันภายใน slot time\n\n✅ ทำไม B ถูก: ฝั่งหนึ่งเป็น half-duplex ขณะที่อีกฝั่งเป็น full-duplex = duplex mismatch → สาเหตุอันดับหนึ่งของ late collision\n✅ ทำไม E ถูก: ความยาวสายเกินขีดจำกัดทำให้สัญญาณตรวจการชนไม่ทัน\n\n❌ ทำไมข้ออื่นผิด:\nA. CSMA/CD เป็นกลไก "ปกติ" ของ half-duplex Ethernet ไม่ใช่สาเหตุของ late collision (การชนที่เกิดในช่วง 64 ไบต์แรกถือเป็น collision ธรรมดา)\nC. ตัวเลข 15 วินาทีเป็นค่าที่แต่งขึ้น — CSMA/CD ใช้ binary exponential backoff ในหน่วยไมโครวินาที\nD. ตัวเลขที่ถูกต้องคือ 64 ไบต์ ไม่ใช่ 32 ไบต์\n\n📗 จำไว้สอบ: late collision = ชนหลัง 64 ไบต์ → เกิดจาก duplex mismatch หรือสายยาวเกิน • full-duplex แท้ ๆ ไม่ควรมี collision เลย',
  },
  {
    id: 20,
    kind: 'single',
    prompt: 'What is a benefit of using a Cisco Wireless LAN Controller?',
    options: [
      { key: 'A', text: 'It eliminates the need to configure each access point individually.' },
      { key: 'B', text: 'Central AP management requires more complex configurations.' },
      { key: 'C', text: 'Unique SSIDs cannot use the same authentication method.' },
      { key: 'D', text: 'It supports autonomous and lightweight APs.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Wireless LAN Controller (WLC) กับ Lightweight AP\n• AP แบบ lightweight จะ "ไม่มีสมอง" ของตัวเอง ต้องเชื่อมกับ WLC ผ่านทันเนล CAPWAP (UDP 5246 control / 5247 data)\n• ผู้ดูแลตั้งค่าทุกอย่างที่ WLC เพียงจุดเดียว แล้ว WLC ผลักคอนฟิกลงไปให้ AP ทุกตัวโดยอัตโนมัติ ⭐\n• งานที่ WLC ดูแลรวมศูนย์: SSID/WLAN, นโยบายความปลอดภัย, RRM (เลือกช่องสัญญาณและกำลังส่งอัตโนมัติ), roaming, QoS, การตรวจจับ rogue AP\n\n✅ ทำไม A ถูก: ประโยชน์ที่ชัดเจนที่สุดคือไม่ต้องเข้าไปตั้งค่า AP ทีละตัว — มี AP 200 ตัวก็ตั้งค่าครั้งเดียวที่ WLC\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับด้าน — การจัดการรวมศูนย์ทำให้คอนฟิก "ง่ายและสม่ำเสมอขึ้น" ไม่ใช่ซับซ้อนขึ้น\nC. ไม่จริง — SSID ต่างกันจะใช้วิธียืนยันตัวตนเดียวกันหรือคนละแบบก็ได้ ไม่มีข้อห้ามใด ๆ\nD. WLC จัดการได้เฉพาะ "lightweight AP" เท่านั้น ส่วน autonomous AP ทำงานเองโดยไม่ผูกกับ WLC (จะจัดการรวมศูนย์ต้องใช้เครื่องมืออื่นเช่น Prime Infrastructure)\n\n📗 จำไว้สอบ: WLC + lightweight AP + CAPWAP = จัดการรวมศูนย์ | autonomous AP = ตั้งค่าทีละตัว ไม่ต้องมี WLC',
  },
  {
    id: 21,
    kind: 'single',
    prompt: 'Which action is taken by a switch port enabled for PoE power classification override?',
    options: [
      { key: 'A', text: 'If a monitored port exceeds the maximum administrative value for power, the port is shut down and err-disabled.' },
      { key: 'B', text: 'When a powered device begins drawing power from a PoE switch port, a syslog message is generated.' },
      { key: 'C', text: 'As power usage on a PoE switch port is checked, data flow to the connected device is temporarily paused.' },
      {
        key: 'D',
        text: 'If a switch determines that a device is using less than the minimum configured power, it assumes the device has failed and disconnects it.',
      },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — PoE power classification override (power policing)\nปกติสวิตช์จะจัดสรรไฟตาม "คลาส" ที่อุปกรณ์ประกาศตอนเชื่อมต่อ แต่ผู้ดูแลสามารถกำหนดค่าสูงสุดเองได้ด้วย "power inline consumption/police"\nเมื่อเปิดฟีเจอร์นี้ สวิตช์จะเฝ้าดูการใช้ไฟจริงแบบเรียลไทม์ — ถ้าอุปกรณ์ดึงไฟ "เกิน" ค่าสูงสุดที่กำหนดไว้ สวิตช์จะตัดไฟและปิดพอร์ตเข้าสู่สถานะ err-disabled ⭐\nจุดประสงค์คือป้องกันไม่ให้อุปกรณ์ตัวเดียวดูดไฟจนเกิน power budget รวมของสวิตช์ ซึ่งจะทำให้อุปกรณ์อื่นดับตามไปด้วย\n\n✅ ทำไม A ถูก: อธิบายพฤติกรรมได้ตรงตามเอกสาร Cisco — เกินค่าสูงสุด = ปิดพอร์ต err-disable\n\n❌ ทำไมข้ออื่นผิด:\nB. การเกิด syslog เมื่อ PD เริ่มดึงไฟเป็นเหตุการณ์ปกติของ PoE ทั่วไป ไม่ใช่ผลของ classification override\nC. การตรวจวัดกำลังไฟไม่ได้หยุดการรับส่งข้อมูล — ไฟและข้อมูลวิ่งบนสายเดียวกันได้พร้อมกัน\nD. ไม่มีพฤติกรรม "ใช้ไฟน้อยเกินไปแล้วตัดการเชื่อมต่อ" — สวิตช์สนใจเฉพาะการใช้เกินเท่านั้น\n\n📗 จำไว้สอบ: PoE 802.3af=15.4W | 802.3at (PoE+)=30W | 802.3bt=60/100W • เกิน budget → err-disable → กู้ด้วย shutdown/no shutdown',
  },
  {
    id: 22,
    kind: 'single',
    prompt: 'What occurs to frames during the process of frame flooding?',
    options: [
      { key: 'A', text: 'Frames are sent to all ports, including those that are assigned to other VLANs.' },
      { key: 'B', text: 'Frames are sent to every port on the switch that has a matching entry in MAC address table.' },
      { key: 'C', text: 'Frames are sent to every port on the switch in the same VLAN except from the originating port.' },
      { key: 'D', text: 'Frames are sent to every port on the switch in the same VLAN.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Frame flooding เกิดเมื่อสวิตช์ไม่รู้จัก destination MAC (unknown unicast) หรือเฟรมเป็น broadcast/multicast\nกฎการ flood มี 2 ข้อที่ต้องครบ:\n1️⃣ ส่งออก "ทุกพอร์ตใน VLAN เดียวกัน" เท่านั้น → VLAN คือขอบเขตของ broadcast domain เฟรมจะไม่ข้าม VLAN\n2️⃣ "ยกเว้นพอร์ตที่รับเฟรมนั้นเข้ามา" → เพราะผู้ส่งอยู่ทางนั้นอยู่แล้ว\n\n✅ ทำไม C ถูก: ระบุครบทั้งสองเงื่อนไข — จำกัดใน VLAN เดียวกัน และยกเว้นพอร์ตต้นทาง\n\n❌ ทำไมข้ออื่นผิด:\nA. ผิดที่ "including those that are assigned to other VLANs" — เฟรมไม่มีทางข้าม VLAN ไปเองได้ ต้องมีเราเตอร์/SVI ทำ inter-VLAN routing\nB. ถ้ามี entry ตรงกันในตาราง MAC แล้ว สวิตช์จะ "forward ออกพอร์ตเดียว" ไม่ใช่ flood — flooding เกิดเมื่อ "ไม่มี" entry ต่างหาก\nD. ใกล้เคียงแต่ขาดข้อยกเว้นสำคัญ — ต้องไม่ส่งกลับออกพอร์ตที่รับเข้ามา\n\n📗 จำไว้สอบ: flood = ทุกพอร์ตใน VLAN เดิม "ลบ" พอร์ตขาเข้า • ถ้ารู้จัก MAC ปลายทาง = forward พอร์ตเดียว ไม่ flood',
  },
  {
    id: 23,
    kind: 'single',
    prompt: 'Which function does the range of private IPv4 addresses perform?',
    options: [
      { key: 'A', text: 'allows multiple companies to each use the same addresses without conflicts' },
      { key: 'B', text: 'provides a direct connection for hosts from outside of the enterprise network' },
      { key: 'C', text: 'ensures that NAT is not required to reach the Internet with private range addressing' },
      { key: 'D', text: 'enables secure communications to the Internet for all external hosts' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ที่อยู่ส่วนตัวตาม RFC 1918 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)\nคุณสมบัติสำคัญคือ "เราเตอร์บนอินเทอร์เน็ตจะไม่ประกาศและไม่ route ช่วงเหล่านี้" ผลที่ตามมาคือ:\n• องค์กรนับล้านทั่วโลกใช้ 192.168.1.0/24 พร้อมกันได้โดยไม่ชนกัน ⭐ เพราะแต่ละองค์กรมองเห็นเฉพาะภายในของตัวเอง\n• ช่วยประหยัดที่อยู่ IPv4 สาธารณะซึ่งมีจำกัด (~4.3 พันล้าน)\n• ต้องใช้ NAT/PAT แปลงเป็น IP สาธารณะเมื่อจะออกอินเทอร์เน็ต\n\n✅ ทำไม A ถูก: หน้าที่หลักคือให้หลายองค์กรใช้ช่วงที่อยู่เดียวกันซ้ำกันได้โดยไม่เกิดความขัดแย้ง\n\n❌ ทำไมข้ออื่นผิด:\nB. ตรงกันข้าม — โฮสต์จากภายนอกต่อตรงเข้ามาหาที่อยู่ private ไม่ได้เลย (ต้องทำ static NAT / port forwarding ก่อน)\nC. กลับด้าน — ที่อยู่ private "จำเป็นต้องใช้ NAT" เพื่อออกอินเทอร์เน็ต ไม่ใช่ไม่ต้องใช้\nD. ที่อยู่ private ไม่ได้ให้การสื่อสารที่ "ปลอดภัย" — การเข้ารหัสต้องพึ่ง VPN/TLS ต่างหาก และไม่เกี่ยวกับ external host\n\n📗 จำไว้สอบ: private address = ใช้ซ้ำกันได้ทั่วโลก + ประหยัด IPv4 + ต้องมี NAT จึงออกเน็ตได้ • NAT ≠ ความปลอดภัย',
  },
  {
    id: 24,
    kind: 'single',
    prompt:
      'Which action must be taken to assign a global unicast IPv6 address on an interface that is derived from the MAC address of that interface?',
    options: [
      { key: 'A', text: 'explicitly assign a link-local address' },
      { key: 'B', text: 'disable the EUI-64 bit process' },
      { key: 'C', text: 'enable SLAAC on an interface' },
      { key: 'D', text: 'configure a stateful DHCPv6 server on the network' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — SLAAC (Stateless Address Autoconfiguration)\nเป็นวิธีที่อุปกรณ์ "สร้างที่อยู่ global unicast ของตัวเอง" โดยไม่ต้องมีเซิร์ฟเวอร์:\n1️⃣ อุปกรณ์ส่ง Router Solicitation (RS) ไปที่ FF02::2\n2️⃣ เราเตอร์ตอบ Router Advertisement (RA) พร้อมแจ้ง prefix 64 บิตแรกของเครือข่าย\n3️⃣ อุปกรณ์สร้าง interface ID 64 บิตหลัง "จาก MAC ของตัวเองด้วย EUI-64" ⭐ แล้วนำมาต่อกับ prefix ที่ได้รับ\n4️⃣ ตรวจซ้ำด้วย DAD (Duplicate Address Detection) ก่อนใช้งานจริง\nคำสั่งบนอินเทอร์เฟซคือ "ipv6 address autoconfig"\n\n✅ ทำไม C ถูก: SLAAC คือกลไกที่ทำให้ได้ global unicast address ซึ่งส่วน host มาจาก MAC ของอินเทอร์เฟซโดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. link-local (FE80::) มีอยู่แล้วอัตโนมัติเมื่อเปิด IPv6 และไม่ใช่ global unicast ตามที่โจทย์ขอ\nB. "ปิด" EUI-64 = ตรงข้ามกับที่ต้องการ เพราะ EUI-64 คือกลไกที่สร้างที่อยู่จาก MAC นั่นเอง\nD. DHCPv6 แบบ stateful ได้ที่อยู่มาจากเซิร์ฟเวอร์ซึ่งเป็นคนกำหนด ไม่ได้สร้างจาก MAC ของอินเทอร์เฟซ\n\n💡 เทียบกับข้อ 10: ถ้าโจทย์ให้ "prefix ที่ระบุเอง" → ใช้คำสั่ง eui-64 | ถ้าโจทย์ให้รับ prefix จากเครือข่าย → SLAAC/autoconfig\n\n📗 จำไว้สอบ: SLAAC = RA ให้ prefix + EUI-64 ให้ host part • DHCPv6 stateful = เซิร์ฟเวอร์ให้ทั้งก้อน',
  },
  {
    id: 25,
    kind: 'multi',
    prompt:
      'Several new coverage cells are required to improve the Wi-Fi network of an organization. Which two standard designs are recommended? (Choose two.)',
    options: [
      { key: 'A', text: '5 GHz provides increased network capacity with up to 23 nonoverlapping channels.' },
      { key: 'B', text: '5 GHz channel selection requires an autonomous access point.' },
      { key: 'C', text: 'Cells that overlap one another are configured to use nonoverlapping channels.' },
      { key: 'D', text: 'Adjacent cells with overlapping channels use a repeater access point.' },
      { key: 'E', text: 'For maximum throughput, the WLC is configured to dynamically set adjacent access points to the same channel.' },
    ],
    correct: ['A', 'C'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C,E — แต่การตั้งให้ AP ที่อยู่ติดกันใช้ "ช่องเดียวกัน" คือการสร้าง co-channel interference ซึ่งตรงข้ามกับหลักการออกแบบ คำตอบที่ถูกต้องคือ A,C\n\n📘 แนวคิด — หลักการวางเซลล์ Wi-Fi (cell planning)\n1️⃣ เซลล์ข้างเคียงควร "ซ้อนทับกันประมาณ 10–15%" เพื่อให้ roaming ราบรื่น\n2️⃣ แต่เซลล์ที่ซ้อนกันต้องใช้ "ช่องสัญญาณที่ไม่ทับกัน" (non-overlapping) มิฉะนั้นจะเกิดสัญญาณรบกวน\n  • 2.4 GHz มีเพียง 3 ช่องที่ไม่ทับกัน → 1, 6, 11\n  • 5 GHz มีช่องไม่ทับกันมากถึงราว 23–24 ช่อง (UNII-1/2/2e/3) ⭐ จึงรองรับ AP หนาแน่นได้ดีกว่ามาก\n\n✅ ทำไม A ถูก: จำนวนช่องที่ไม่ทับกันจำนวนมากของ 5 GHz คือเหตุผลหลักที่ทำให้เพิ่มความจุเครือข่ายได้ — เป็นหลักการออกแบบมาตรฐาน\n✅ ทำไม C ถูก: กฎพื้นฐานที่สุดของการวางเซลล์ — พื้นที่ที่ซ้อนกันต้องใช้ช่องต่างกันที่ไม่ทับกัน\n\n❌ ทำไมข้ออื่นผิด:\nB. การเลือกช่องใน 5 GHz ไม่ต้องใช้ autonomous AP — ในทางกลับกัน WLC + RRM/DCA เลือกช่องให้อัตโนมัติได้ดีกว่า\nD. repeater AP ทำให้ throughput ลดลงครึ่งหนึ่ง (ต้องรับและส่งซ้ำบนวิทยุเดียวกัน) ไม่ใช่วิธีแก้ปัญหาช่องทับกัน\nE. ตั้ง AP ข้างเคียงให้ใช้ช่องเดียวกัน = co-channel interference ทำให้ throughput ตกอย่างหนัก (RRM/DCA ถูกออกแบบมาเพื่อทำ "ตรงกันข้าม" คือกระจายช่องให้ต่างกัน)\n\n📗 จำไว้สอบ: 2.4 GHz = 3 ช่อง (1/6/11) | 5 GHz = ~23 ช่อง • เซลล์ซ้อนกัน 10–15% แต่ต้องคนละช่อง',
  },
  {
    id: 26,
    kind: 'single',
    prompt: 'How do TCP and UDP differ in the way they provide reliability for delivery of packets?',
    options: [
      {
        key: 'A',
        text: 'TCP does not guarantee delivery or error checking to ensure that there is no corruption of data, UDP provides message acknowledgement and retransmits data if lost.',
      },
      {
        key: 'B',
        text: 'TCP provides flow control to avoid overwhelming a receiver by sending too many packets at once, UDP sends packets to the receiver in a continuous stream without checking.',
      },
      {
        key: 'C',
        text: 'TCP is a connectionless protocol that does not provide reliable delivery of data; UDP is a connection-oriented protocol that uses sequencing to provide reliable delivery.',
      },
      {
        key: 'D',
        text: 'TCP uses windowing to deliver packets reliably; UDP provides reliable message transfer between hosts by establishing a three-way handshake.',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กลไกความน่าเชื่อถือที่ TCP มีแต่ UDP ไม่มี\n• 3-way handshake → สร้างการเชื่อมต่อก่อนส่ง\n• Sequence number → จัดเรียงลำดับข้อมูลให้ถูกต้อง\n• Acknowledgment + retransmission → ยืนยันการรับ ถ้าไม่ได้ ACK ก็ส่งซ้ำ\n• Flow control (sliding window) ⭐ → ผู้รับแจ้ง "window size" บอกว่ารับไหวแค่ไหน ป้องกันผู้ส่งยิงรัวจนบัฟเฟอร์ผู้รับล้น\n• Congestion control → ลดอัตราส่งเมื่อเครือข่ายแออัด\n\nUDP: มีเพียง source port, destination port, length, checksum — ส่งเป็นสายต่อเนื่องโดยไม่ตรวจสอบว่าผู้รับไหวหรือไม่\n\n✅ ทำไม B ถูก: อธิบายถูกทั้งสองฝั่ง — TCP มี flow control ป้องกันผู้รับรับไม่ทัน ส่วน UDP ยิงต่อเนื่องโดยไม่เช็ค\n\n❌ ทำไมข้ออื่นผิด:\nA. กลับด้านสิ้นเชิง — TCP ต่างหากที่การันตีการส่งและมี error checking ส่วน UDP ไม่มี ACK และไม่ส่งซ้ำ\nC. กลับด้าน — TCP คือ connection-oriented ที่เชื่อถือได้ ส่วน UDP คือ connectionless\nD. ครึ่งแรกถูก (TCP ใช้ windowing) แต่ครึ่งหลังผิด — UDP ไม่มี 3-way handshake และไม่รับประกันการส่ง\n\n📗 จำไว้สอบ: TCP header 20 ไบต์ (seq/ack/window) | UDP header 8 ไบต์ (port/length/checksum) เท่านั้น',
  },
  {
    id: 27,
    kind: 'multi',
    prompt: 'What are two differences between optical-fiber cabling and copper cabling? (Choose two.)',
    options: [
      { key: 'A', text: 'A BNC connector is used for fiber connections' },
      { key: 'B', text: 'The glass core component is encased in a cladding' },
      { key: 'C', text: 'The data can pass through the cladding' },
      { key: 'D', text: 'Light is transmitted through the core of the fiber' },
      { key: 'E', text: 'Fiber connects to physical interfaces using RJ-45 connections' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — โครงสร้างสายไฟเบอร์ออปติก (จากในออกนอก)\n1️⃣ Core (แกนแก้ว) ⭐ → เป็นทางเดินของ "แสง" ทั้งหมด — SMF ~9 ไมครอน, MMF 50 หรือ 62.5 ไมครอน\n2️⃣ Cladding (ชั้นหุ้มแก้ว) ⭐ → แก้วที่มีค่าดัชนีหักเหต่ำกว่า core ทำหน้าที่สะท้อนแสงกลับเข้า core (total internal reflection) แสงจึงไม่รั่วออก\n3️⃣ Buffer / Jacket → ชั้นพลาสติกป้องกันทางกายภาพ\n\n🔌 หัวต่อ:\n• Fiber → LC, SC, ST, MPO\n• Copper (UTP) → RJ-45\n• Coaxial → BNC, F-type\n\n✅ ทำไม B ถูก: แกนแก้วถูกหุ้มด้วย cladding เป็นโครงสร้างเฉพาะของไฟเบอร์ (สายทองแดงใช้ฉนวนพลาสติกหุ้มตัวนำ)\n✅ ทำไม D ถูก: ไฟเบอร์ส่งข้อมูลด้วย "แสง" ผ่าน core ต่างจากทองแดงที่ส่งด้วยสัญญาณไฟฟ้า\n\n❌ ทำไมข้ออื่นผิด:\nA. BNC เป็นหัวต่อของสายโคแอกเชียล ไม่ใช่ไฟเบอร์\nC. ข้อมูลเดินทางใน core เท่านั้น — cladding มีหน้าที่ "สะท้อนแสงกลับ" ไม่ใช่นำข้อมูล\nE. RJ-45 เป็นหัวต่อของสาย UTP ทองแดง ไฟเบอร์ใช้ LC/SC/ST\n\n💡 ข้อดีของไฟเบอร์: ไปได้ไกลกว่ามาก, แบนด์วิดท์สูงกว่า, ไม่โดน EMI/RFI รบกวน, ดักฟังยากกว่า — แต่แพงกว่าและเปราะกว่า\n\n📗 จำไว้สอบ: core=ทางเดินแสง | cladding=สะท้อนแสงกลับ | SMF 9µm ไกลมาก | MMF 50/62.5µm ระยะสั้น',
  },
  {
    id: 28,
    kind: 'single',
    prompt: 'How does CAPWAP communicate between an access point in local mode and a WLC?',
    options: [
      { key: 'A', text: 'The access point must not be connected to the wired network, as it would create a loop' },
      { key: 'B', text: 'The access point must be connected to the same switch as the WLC' },
      { key: 'C', text: 'The access point must directly connect to the WLC using a copper cable' },
      { key: 'D', text: 'The access point has the ability to link to any switch in the network, assuming connectivity to the WLC' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — CAPWAP (Control And Provisioning of Wireless Access Points, RFC 5415)\n• เป็นโปรโตคอลที่สร้าง "ทันเนล" ระหว่าง lightweight AP กับ WLC\n• ใช้ UDP 2 พอร์ต: 5246 = control (เข้ารหัสด้วย DTLS เสมอ) และ 5247 = data (เข้ารหัสได้แต่ไม่บังคับ)\n• ⭐ เป็นทันเนลระดับ Layer 3 → AP กับ WLC อยู่คนละซับเน็ต คนละอาคาร หรือแม้แต่คนละเมืองก็ได้ ขอเพียงมี IP reachability ถึงกัน\n• ใน local mode ทราฟฟิกไคลเอนต์ทั้งหมดจะถูกห่อใน CAPWAP วิ่งกลับไปออกที่ WLC (central switching)\n\n✅ ทำไม D ถูก: AP เสียบเข้าสวิตช์ตัวไหนก็ได้ในเครือข่าย ตราบใดที่ route ไปถึง WLC ได้ ทันเนล CAPWAP ก็จะสร้างขึ้นได้\n\n❌ ทำไมข้ออื่นผิด:\nA. AP ต้องต่อเข้าเครือข่ายมีสายอยู่แล้ว (เพื่อรับไฟ PoE และคุยกับ WLC) และไม่ได้สร้างลูปแต่อย่างใด\nB. ไม่จำเป็นต้องอยู่สวิตช์เดียวกัน — CAPWAP ข้าม Layer 3 ได้\nC. ไม่ต้องต่อตรงเข้า WLC เลย ทันเนลวิ่งผ่านเครือข่ายที่มีอยู่ได้\n\n📗 จำไว้สอบ: CAPWAP = UDP 5246 (control, DTLS) / 5247 (data) • ข้าม L3 ได้ • local mode = ทราฟฟิกกลับไปออกที่ WLC',
  },
  {
    id: 29,
    kind: 'single',
    prompt: 'Which IPv6 address block forwards packets to a multicast address rather than a unicast address?',
    options: [
      { key: 'A', text: '2000::/3' },
      { key: 'B', text: 'FC00::/7' },
      { key: 'C', text: 'FE80::/10' },
      { key: 'D', text: 'FF00::/12' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — จำแนกช่วงที่อยู่ IPv6 จากคำนำหน้า\n• 2000::/3 → Global Unicast (ขึ้นต้น 2 หรือ 3) — route บนอินเทอร์เน็ตได้\n• FC00::/7 → Unique Local Unicast (ขึ้นต้น FC/FD) — private ภายในองค์กร\n• FE80::/10 → Link-Local Unicast (ขึ้นต้น FE80) — ใช้เฉพาะบนลิงก์เดียว\n• FF00::/8 → Multicast ⭐ (ขึ้นต้น FF) — ส่งถึงกลุ่มปลายทาง\n\n🔍 ตัวเลือก D เขียนเป็น FF00::/12 ซึ่ง "อยู่ภายใน" ช่วง multicast FF00::/8 อยู่แล้ว (บิต 8 ตัวแรกยังเป็น 11111111 เหมือนกัน) จึงยังเป็นที่อยู่ multicast — และเป็นตัวเลือกเดียวที่ไม่ใช่ unicast\n\n✅ ทำไม D ถูก: เป็นช่วงเดียวในตัวเลือกที่อยู่ในพื้นที่ multicast (ขึ้นต้นด้วย FF)\n\n❌ ทำไมข้ออื่นผิด: A, B, C ล้วนเป็น unicast ทั้งหมด ต่างกันเพียงขอบเขตการ route\n\n⚠️ ข้อสังเกต: ช่วง multicast อย่างเป็นทางการคือ FF00::/8 ไม่ใช่ /12 — ในข้อสอบจริงถ้าเห็นทั้ง /8 และ /12 ให้เลือก /8 เสมอ แต่ในชุดตัวเลือกนี้มีแค่ /12 จึงต้องตอบ D\n\n📗 จำไว้สอบ: 2/3=Global | FC/FD=ULA | FE80=Link-Local | FF=Multicast (ช่วงจริงคือ FF00::/8)',
  },
  {
    id: 30,
    kind: 'single',
    prompt: 'What is the difference regarding reliability and communication type between TCP and UDP?',
    options: [
      { key: 'A', text: 'TCP is reliable and is a connectionless protocol; UDP is not reliable and is a connection-oriented protocol.' },
      { key: 'B', text: 'TCP is not reliable and is a connectionless protocol; UDP is reliable and is a connection-oriented protocol.' },
      { key: 'C', text: 'TCP is not reliable and is a connection-oriented protocol; UDP is reliable and is a connectionless protocol.' },
      { key: 'D', text: 'TCP is reliable and is a connection-oriented protocol; UDP is not reliable and is a connectionless protocol.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ท่องคู่คำนี้ให้ติดปาก\n• TCP = reliable + connection-oriented ⭐\n  - reliable เพราะมี ACK และการส่งซ้ำเมื่อข้อมูลหาย\n  - connection-oriented เพราะต้องทำ 3-way handshake ก่อนส่งข้อมูล\n  - ใช้กับ HTTP/HTTPS, SMTP, FTP, SSH, Telnet\n• UDP = unreliable + connectionless ⭐\n  - unreliable เพราะไม่มี ACK ไม่มี retransmission (best-effort)\n  - connectionless เพราะส่งดาต้าแกรมออกไปได้เลย ไม่ต้องสร้างการเชื่อมต่อ\n  - ใช้กับ DNS, DHCP, TFTP, SNMP, RTP (เสียง/วิดีโอ), Syslog, NTP\n\n✅ ทำไม D ถูก: จับคู่ถูกทั้งสี่คำ — TCP เชื่อถือได้และ connection-oriented ส่วน UDP ไม่เชื่อถือได้และ connectionless\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับคำว่า connectionless/connection-oriented\nB. สลับคุณสมบัติทั้งหมดของทั้งสองโปรโตคอล\nC. สลับ reliable/unreliable\n\n💡 อย่าเข้าใจผิด: "unreliable" ไม่ได้แปลว่าใช้ไม่ได้ — UDP เหมาะกับงานเรียลไทม์ที่ยอมให้แพ็กเก็ตหายบ้างได้ดีกว่าการรอ retransmit จนเสียงกระตุก\n\n📗 จำไว้สอบ: TCP=reliable+connection-oriented | UDP=unreliable+connectionless',
  },
  {
    id: 31,
    kind: 'multi',
    prompt: 'What are two descriptions of three-tier network topologies? (Choose two.)',
    options: [
      { key: 'A', text: 'The distribution layer runs Layer 2 and Layer 3 technologies' },
      { key: 'B', text: 'The network core is designed to maintain continuous connectivity when devices fail' },
      { key: 'C', text: 'The access layer manages routing between devices in different domains' },
      { key: 'D', text: 'The core layer maintains wired connections for each host' },
      { key: 'E', text: 'The core and distribution layers perform the same functions' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — โมเดล 3 ชั้นของ Cisco และหน้าที่ของแต่ละชั้น\n\n🔹 Access layer — ชั้นที่ผู้ใช้เสียบสาย\n  • ให้พอร์ตแก่ PC/โทรศัพท์/AP, จ่าย PoE, กำหนด VLAN, port security, 802.1X\n\n🔹 Distribution layer ⭐ — ชั้นรวบรวมและกำหนดนโยบาย\n  • รวมลิงก์จาก access หลายตัว\n  • ทำ inter-VLAN routing (Layer 3) ขณะเดียวกันก็ยังรับ trunk/STP จาก access (Layer 2) → จึง "รันทั้ง L2 และ L3" ⭐\n  • บังคับใช้ ACL/QoS/route summarization เป็นขอบเขตของนโยบาย\n\n🔹 Core layer ⭐ — แกนกลางความเร็วสูง\n  • สลับแพ็กเก็ตให้เร็วที่สุด ไม่ทำงานที่ทำให้ช้า (ไม่ทำ ACL/policy)\n  • ออกแบบให้มี redundancy เต็มที่ เพื่อ "ไม่มีวันล่ม" แม้อุปกรณ์ตัวใดตัวหนึ่งเสีย ⭐\n\n✅ ทำไม A ถูก: distribution เป็นรอยต่อระหว่าง L2 (จาก access) กับ L3 (ไป core) จึงต้องรันทั้งสองอย่าง\n✅ ทำไม B ถูก: core ถูกออกแบบให้มีเส้นทางและอุปกรณ์สำรอง เพื่อรักษาการเชื่อมต่อต่อเนื่องเมื่ออุปกรณ์ล้มเหลว\n\n❌ ทำไมข้ออื่นผิด:\nC. การ routing ระหว่างโดเมน/VLAN เป็นหน้าที่ของ distribution ไม่ใช่ access\nD. host เสียบที่ access layer ไม่ใช่ core (core ไม่มีพอร์ตให้ผู้ใช้)\nE. ถ้าทั้งสองชั้นทำงานเหมือนกันก็ไม่มีเหตุผลต้องแยกเป็น 3 ชั้น — core เน้นความเร็ว ส่วน distribution เน้นนโยบาย\n\n📗 จำไว้สอบ: Access=พอร์ตผู้ใช้ | Distribution=นโยบาย+inter-VLAN (L2+L3) | Core=เร็วและไม่ล่ม',
  },
  {
    id: 32,
    kind: 'single',
    prompt: 'Which type of IPv6 address is publicly routable in the same way as IPv4 public addresses?',
    options: [
      { key: 'A', text: 'multicast' },
      { key: 'B', text: 'unique local' },
      { key: 'C', text: 'link-local' },
      { key: 'D', text: 'global unicast' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เทียบชนิดที่อยู่ IPv6 กับ IPv4\n• Global Unicast (2000::/3) ⭐ ↔ IPv4 public address → ISP ประกาศบนอินเทอร์เน็ตได้ ใช้สื่อสารทั่วโลก\n• Unique Local (FC00::/7, ใช้จริง FD00::/8) ↔ IPv4 private (RFC1918) → ใช้ภายในองค์กร ห้ามออกเน็ต\n• Link-Local (FE80::/10) ↔ IPv4 APIPA (169.254.x.x) → ใช้เฉพาะบนลิงก์เดียว ไม่ถูก route ข้าม\n• Multicast (FF00::/8) ↔ IPv4 multicast (224.0.0.0/4) → ส่งถึงกลุ่ม\n\n✅ ทำไม D ถูก: Global Unicast คือชนิดเดียวที่ route ได้ทั่วอินเทอร์เน็ต เทียบเท่ากับ IPv4 public address\n\n❌ ทำไมข้ออื่นผิด:\nA. multicast เป็นที่อยู่ปลายทางแบบกลุ่ม ไม่ใช่ที่อยู่ที่ใช้ระบุตัวโฮสต์เพื่อสื่อสารทั่วไปบนอินเทอร์เน็ต\nB. unique local เทียบเท่ากับ private address → ไม่ถูก route บนอินเทอร์เน็ต\nC. link-local ใช้ได้แค่บนลิงก์เดียวกัน เราเตอร์ไม่ forward ข้ามไปไหนเลย\n\n💡 เกร็ด: IPv6 มีที่อยู่ global unicast มากพอจนไม่ต้องใช้ NAT — ทุกอุปกรณ์มี IP สาธารณะของตัวเองได้ (2^128 ที่อยู่)\n\n📗 จำไว้สอบ: Global Unicast 2000::/3 = public | ULA FD = private | FE80 = link-local | FF = multicast',
  },
  {
    id: 33,
    kind: 'single',
    prompt: 'What is the expected outcome when an EUI-64 address is generated?',
    options: [
      { key: 'A', text: 'The interface ID is configured as a random 64-bit value' },
      { key: 'B', text: 'The characters FE80 are inserted at the beginning of the MAC address of the interface' },
      { key: 'C', text: 'The seventh bit of the original MAC address of the interface is inverted' },
      { key: 'D', text: 'The MAC address of the interface is used as the interface ID without modification' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กระบวนการ EUI-64 แปลง MAC 48 บิต → interface ID 64 บิต มี 3 ขั้นตอน\n\n1️⃣ ผ่า MAC ออกเป็นสองครึ่ง: OUI 24 บิต | Device ID 24 บิต\n2️⃣ แทรกค่า FFFE (16 บิต) ลงตรงกลาง → ได้ 64 บิต\n3️⃣ พลิกบิตที่ 7 จากซ้าย (Universal/Local bit) ⭐ จาก 0 → 1\n\n🧮 ตัวอย่าง MAC = 00:0C:29:1A:2B:3C\n• แทรก FFFE → 000C:29FF:FE1A:2B3C\n• ไบต์แรก 00 = 0000 0000 → พลิกบิตที่ 7 → 0000 0010 = 02\n• ผลลัพธ์ interface ID = 020C:29FF:FE1A:2B3C\n• ถ้า prefix คือ 2001:DB8:5:112::/64 → ที่อยู่เต็ม = 2001:DB8:5:112:20C:29FF:FE1A:2B3C\n\n💡 ทำไมต้องพลิกบิตที่ 7? ในโลก MAC บิตนี้เท่ากับ 0 หมายถึง "globally unique" แต่ในโลก IPv6 กลับนิยามตรงข้าม — บิตนี้เท่ากับ 1 จึงแปลว่า globally unique จึงต้องพลิกเพื่อให้ความหมายตรงกัน\n\n✅ ทำไม C ถูก: การพลิกบิตที่ 7 (U/L bit) คือขั้นตอนเฉพาะตัวที่นิยาม EUI-64\n\n❌ ทำไมข้ออื่นผิด:\nA. ค่าสุ่ม 64 บิตเป็นวิธีของ "privacy extension" (RFC 4941) ซึ่งจงใจทำเพื่อ "ไม่" ให้ตามรอย MAC ได้ — คนละกลไกกับ EUI-64\nB. FE80 คือคำนำหน้าของ link-local address ไม่ใช่ส่วนหนึ่งของกระบวนการ EUI-64 (EUI-64 สร้างเฉพาะครึ่งหลัง)\nD. MAC ถูกดัดแปลงแน่นอน — ทั้งแทรก FFFE และพลิกบิต\n\n📗 จำไว้สอบ: EUI-64 = แทรก FFFE ตรงกลาง + พลิกบิตที่ 7 • เห็น ff:fe กลางที่อยู่ IPv6 = สร้างด้วย EUI-64',
  },
  {
    id: 34,
    kind: 'single',
    prompt:
      'A corporate office uses four floors in a building: Floor 1 has 24 users, Floor 2 has 29 users, Floor 3 has 28 users, and Floor 4 has 22 users. Which subnet summarizes and gives the most efficient distribution of IP addresses for the router configuration?',
    options: [
      { key: 'A', text: '192.168.0.0/24 as summary and 192.168.0.0/28 for each floor' },
      { key: 'B', text: '192.168.0.0/23 as summary and 192.168.0.0/25 for each floor' },
      { key: 'C', text: '192.168.0.0/25 as summary and 192.168.0.0/27 for each floor' },
      { key: 'D', text: '192.168.0.0/26 as summary and 192.168.0.0/29 for each floor' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โจทย์ subnetting ที่ต้องคิด 2 ชั้น: ขนาดของแต่ละชั้น และ summary ที่ครอบทุกชั้น\n\n🧮 ขั้นที่ 1 — หาขนาดซับเน็ตต่อชั้น\n• ชั้นที่มีผู้ใช้มากสุด = 29 คน (ชั้น 2) → ต้องรองรับอย่างน้อย 29 host\n• สูตร host ใช้ได้ = 2ⁿ − 2 → /27 ให้ 2⁵ − 2 = 30 host ✔ (พอดีเป๊ะ)\n• ถ้าใช้ /28 จะได้แค่ 14 host ✘ ไม่พอ\n\n🧮 ขั้นที่ 2 — หา summary ที่ครอบ 4 ชั้น\n• 4 ชั้น × /27 (32 ที่อยู่) = 128 ที่อยู่\n• 128 ที่อยู่ = /25 ⭐\n• แบ่งได้เป็น: 192.168.0.0/27, .32/27, .64/27, .96/27 → รวมพอดี 192.168.0.0/25\n\n✅ ทำไม C ถูก: /27 รองรับ 30 host เพียงพอสำหรับชั้นที่มี 29 คน และ 4 ซับเน็ต /27 รวมกันได้พอดีเป็น /25 — ไม่เหลือทิ้งเลย (ประหยัดที่สุด)\n\n❌ ทำไมข้ออื่นผิด:\nA. /28 = 14 host ไม่พอสำหรับ 22–29 คน (และ /24 ก็เผื่อไว้เกินความจำเป็น)\nB. /25 = 126 host ต่อชั้น เปลืองมาก (ใช้จริงแค่ ~29) และ summary /23 ยิ่งเปลืองหนัก\nD. /29 = 6 host ไม่พอเลยแม้แต่ชั้นเดียว\n\n📗 จำไว้สอบ: /27=30 hosts | /26=62 | /28=14 | /29=6 • summary = จำนวนซับเน็ต × ขนาด แล้วแปลงกลับเป็น prefix',
  },
  {
    id: 35,
    kind: 'single',
    image: v2q35,
    prompt:
      'Refer to the exhibit. An engineer must add a subnet for a new office that will add 20 users to the network. Which IPv4 network and subnet mask combination does the engineer assign to minimize wasting addresses?',
    options: [
      { key: 'A', text: '10.10.225.48 255.255.255.240' },
      { key: 'B', text: '10.10.225.32 255.255.255.240' },
      { key: 'C', text: '10.10.225.48 255.255.255.224' },
      { key: 'D', text: '10.10.225.32 255.255.255.224' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ต้องตอบให้ครบ 3 เงื่อนไข: (1) รองรับ 20 users, (2) ไม่ทับซับเน็ตเดิม, (3) ไม่เปลืองที่อยู่\n\n🧮 ขั้นที่ 1 — ขนาดที่ต้องการ\n• ต้องการ 20 host → 2ⁿ − 2 ≥ 20 → n = 5 → 2⁵ − 2 = 30 host → prefix = /27 (mask 255.255.255.224) ⭐\n• /28 (255.255.255.240) ให้แค่ 14 host ✘ ไม่พอ\n\n🧮 ขั้นที่ 2 — หาช่วงที่ยังว่าง (จาก exhibit)\n• 10.10.225.0/28 → ใช้ .0 – .15\n• 10.10.225.16/28 → ใช้ .16 – .31\n• 10.10.225.64/26 → ใช้ .64 – .127\n→ ช่วงที่ยังว่างและต่อเนื่องคือ .32 – .63 ⭐ (พอดีเป็น 32 ที่อยู่ = /27 หนึ่งก้อน)\n\n🧮 ขั้นที่ 3 — ตรวจความถูกต้องของ network address\n• /27 block = 32 → ขอบเขตต้องเป็น .0, .32, .64, .96 …\n• 10.10.225.32/27 → ถูกต้อง ครอบ .32 – .63 ไม่ชนใคร ✔\n• 10.10.225.48 ไม่ใช่ขอบเขตของ /27 (48 ไม่ใช่ตัวคูณของ 32) → ใช้เป็น network address ของ /27 ไม่ได้ ✘\n\n✅ ทำไม D ถูก: 10.10.225.32 255.255.255.224 = /27 ให้ 30 host (พอสำหรับ 20 คน โดยเผื่อน้อยที่สุด) และวางลงในช่องว่าง .32–.63 ได้พอดีโดยไม่ทับซับเน็ตเดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. /28 ให้ 14 host ไม่พอ 20 คน\nB. /28 ไม่พอเช่นกัน\nC. mask /27 ถูก แต่ .48 ไม่ใช่ network address ที่ถูกต้องของ /27 (ต้องเป็นตัวคูณของ 32)\n\n📗 จำไว้สอบ: network address ต้องเป็นตัวคูณของ block size เสมอ • 20 users → /27 (30 hosts)',
  },
  {
    id: 36,
    kind: 'single',
    prompt: 'What is a characteristic of spine-and-leaf architecture?',
    options: [
      { key: 'A', text: 'Each link between leaf switches allows for higher bandwidth.' },
      { key: 'B', text: 'It provides greater predictability on STP blocked ports.' },
      { key: 'C', text: 'It provides variable latency.' },
      { key: 'D', text: 'Each device is separated by the same number of hops.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Spine-and-Leaf (Clos fabric) ในดาต้าเซ็นเตอร์\nโครงสร้าง: leaf ทุกตัวต่อกับ spine ทุกตัว | leaf ไม่ต่อกับ leaf | spine ไม่ต่อกับ spine | host เสียบที่ leaf เท่านั้น\n\n💡 ผลที่ตามมา:\n• เส้นทางระหว่าง host สองตัวที่อยู่คนละ leaf จะเป็น leaf → spine → leaf เสมอ = 2 hop เท่ากันทุกคู่ ⭐\n• latency จึงคาดเดาได้และคงที่ (deterministic / predictable latency) — สำคัญมากกับทราฟฟิก east-west ในดาต้าเซ็นเตอร์\n• ใช้ ECMP กระจายโหลดบนทุกลิงก์ ไม่ต้องพึ่ง STP บล็อกพอร์ต → ใช้แบนด์วิดท์ได้เต็มทุกเส้น\n• ขยายง่าย: เพิ่ม leaf = เพิ่มพอร์ต, เพิ่ม spine = เพิ่มแบนด์วิดท์\n\n✅ ทำไม D ถูก: ทุกอุปกรณ์ห่างกันด้วยจำนวน hop เท่ากันเสมอ ซึ่งเป็นเอกลักษณ์สำคัญที่สุดของสถาปัตยกรรมนี้\n\n❌ ทำไมข้ออื่นผิด:\nA. leaf ไม่มีลิงก์ต่อกันเองเลยตามหลักการออกแบบ\nB. spine-and-leaf ออกแบบมาเพื่อ "เลิกพึ่ง STP" (ใช้ routing/ECMP แทน) จึงไม่มีพอร์ตถูกบล็อกให้ต้องคาดเดา\nC. กลับด้าน — จุดขายคือ latency "คงที่" ไม่ใช่ผันแปร\n\n📗 จำไว้สอบ: spine-leaf = hop count เท่ากันทุกคู่ + latency คงที่ + ไม่ใช้ STP + ขยายง่าย',
  },
  {
    id: 37,
    kind: 'single',
    prompt:
      'An office has 8 floors with approximately 30-40 users per floor. One subnet must be used. Which command must be configured on the router Switched Virtual Interface to use address space efficiently?',
    options: [
      { key: 'A', text: 'ip address 192.168.0.0 255.255.0.0' },
      { key: 'B', text: 'ip address 192.168.0.0 255.255.254.0' },
      { key: 'C', text: 'ip address 192.168.0.0 255.255.255.128' },
      { key: 'D', text: 'ip address 192.168.0.0 255.255.255.224' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โจทย์ระบุ "One subnet must be used" คือใช้ซับเน็ตเดียวรวมทุกชั้น จึงต้องหาขนาดที่พอดีกับผู้ใช้ทั้งหมด\n\n🧮 คำนวณจำนวน host ที่ต้องรองรับ\n• 8 ชั้น × 40 คน (ค่าสูงสุด) = 320 host\n\n🧮 หา prefix ที่รองรับ 320 host\n• /24 = 254 host ✘ ไม่พอ\n• /23 = 2⁹ − 2 = 510 host ✔ ⭐ (mask 255.255.254.0) — เล็กที่สุดที่ยังพอ\n• /22 = 1022 host → พอแต่เปลืองเกินจำเป็น\n\n✅ ทำไม B ถูก: 255.255.254.0 (/23) ให้ 510 host ซึ่งรองรับ 320 คนได้ และเป็นขนาดที่เล็กที่สุดที่เพียงพอ = ใช้พื้นที่ที่อยู่อย่างมีประสิทธิภาพที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. 255.255.0.0 (/16) = 65,534 host → เปลืองมหาศาล ใช้จริงแค่ 320\nC. 255.255.255.128 (/25) = 126 host ✘ ไม่พอสำหรับ 320 คน\nD. 255.255.255.224 (/27) = 30 host ✘ ไม่พอแม้แต่ชั้นเดียว\n\n💡 เกร็ด: /23 คือการรวม /24 สองวงที่ติดกัน (เช่น 192.168.0.0 กับ 192.168.1.0) — เลข octet ที่ 3 ต้องเป็นเลขคู่เสมอ\n\n📗 จำไว้สอบ: /23=510 hosts | /24=254 | /25=126 | /22=1022 • เลือกอันเล็กที่สุดที่ยังพอ',
  },
  {
    id: 38,
    kind: 'drag',
    image: v2q38,
    prompt: 'Drag and drop the descriptions of IP protocol transmissions from the left onto the IP traffic types on the right.',
    categories: [
      {
        name: 'TCP',
        items: ['sends transmissions in sequence', 'transmits packets as a stream', 'uses a lower transmission rate to ensure reliability'],
      },
      {
        name: 'UDP',
        items: [
          'transmissions include an 8-byte header',
          'transmits packets individually',
          'uses a higher transmission rate to support latency-sensitive applications',
        ],
      },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบพฤติกรรมการส่งของ TCP และ UDP\n\n🔹 TCP (header อย่างน้อย 20 ไบต์):\n• sends transmissions in sequence → มี sequence number กำกับทุกไบต์ ปลายทางเรียงลำดับให้ถูกต้องแม้มาถึงสลับกัน\n• transmits packets as a stream → มองข้อมูลเป็น "สายธารไบต์" ต่อเนื่องบน connection เดียว ไม่ใช่ก้อนแยก ๆ\n• uses a lower transmission rate to ensure reliability → ต้องรอ ACK, ทำ flow control ด้วย window และ congestion control → ช้าลงแต่แลกกับความครบถ้วน\n\n🔹 UDP (header 8 ไบต์เท่านั้น):\n• transmissions include an 8-byte header → มีแค่ 4 ฟิลด์: source port, destination port, length, checksum ⭐ โอเวอร์เฮดต่ำสุด\n• transmits packets individually → แต่ละ datagram เป็นอิสระต่อกัน ไม่มี connection ไม่มีลำดับ\n• uses a higher transmission rate to support latency-sensitive applications → ยิงได้รัวโดยไม่ต้องรอ ACK เหมาะกับ VoIP/วิดีโอสตรีมมิง/เกม\n\n📗 จำไว้สอบ: TCP header 20 ไบต์ (สูงสุด 60) / UDP header 8 ไบต์ • TCP=stream เรียงลำดับ | UDP=datagram อิสระ',
  },
  {
    id: 39,
    kind: 'single',
    prompt:
      'A device detects two stations transmitting frames at the same time. This condition occurs after the first 64 bytes of the frame is received. Which interface counter increments?',
    options: [
      { key: 'A', text: 'runt' },
      { key: 'B', text: 'collision' },
      { key: 'C', text: 'late collision' },
      { key: 'D', text: 'CRC' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เส้นแบ่งสำคัญคือ "64 ไบต์แรก" (slot time ของ Ethernet)\n• Collision (ปกติ) → การชนที่ตรวจพบ "ภายใน" 64 ไบต์แรก — เป็นเรื่องปกติของเครือข่าย half-duplex ที่ใช้ CSMA/CD\n• Late collision ⭐ → การชนที่เกิด "หลังจาก" 64 ไบต์แรกผ่านไปแล้ว — ผิดปกติเสมอ เพราะตามทฤษฎีสถานีต้องรู้ตัวว่าชนก่อนส่งครบ 64 ไบต์\n\n🔎 สาเหตุของ late collision:\n1️⃣ Duplex mismatch (ฝั่งหนึ่ง full อีกฝั่ง half) ← พบบ่อยที่สุด\n2️⃣ สายยาวเกินสเปก (UTP > 100 เมตร) ทำให้สัญญาณเดินทางช้าจนตรวจการชนไม่ทัน\n3️⃣ ต่อ hub/repeater ซ้อนกันเกินจำนวนที่กำหนด\n\n✅ ทำไม C ถูก: โจทย์ระบุชัดว่าการชนเกิด "หลังจากรับ 64 ไบต์แรกไปแล้ว" ซึ่งตรงกับนิยามของ late collision พอดี\n\n❌ ทำไมข้ออื่นผิด:\nA. runt = เฟรมที่สั้นกว่า 64 ไบต์ (ขนาดผิด ไม่ใช่เรื่องเวลาที่ชน)\nB. collision ธรรมดาต้องเกิดภายใน 64 ไบต์แรก — โจทย์บอกว่าเกิดหลังจากนั้น\nD. CRC = ค่า checksum ไม่ตรง (เฟรมเสียหาย) ซึ่งอาจเป็นผลพลอยได้ แต่ไม่ใช่ตัวนับที่ระบุ "เวลาที่เกิดการชน"\n\n📗 จำไว้สอบ: ≤64 ไบต์ = collision ปกติ | >64 ไบต์ = late collision (ผิดปกติ → เช็ค duplex และความยาวสาย)',
  },
  {
    id: 40,
    kind: 'single',
    image: v2q40,
    prompt: 'Refer to the exhibit. Which outcome is expected when PC_A sends data to PC_B after their initial communication?',
    options: [
      { key: 'A', text: 'The source MAC address is changed.' },
      { key: 'B', text: 'The destination MAC address is replaced with ffff.ffff.ffff.' },
      { key: 'C', text: 'The source and destination MAC addresses remain the same.' },
      { key: 'D', text: 'The switch rewrites the source and destination MAC addresses with its own.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สวิตช์ Layer 2 "ไม่แก้ไข" MAC address ในเฟรม\nสวิตช์เพียงอ่าน source MAC เพื่อเรียนรู้ และอ่าน destination MAC เพื่อตัดสินใจส่งออกพอร์ตไหน แล้วส่งเฟรมต่อไปแบบเดิม (เว้นแต่กรณีเพิ่ม/ถอด VLAN tag บนพอร์ต trunk)\n⚠️ การเปลี่ยน MAC เกิดขึ้นที่ "เราเตอร์" เท่านั้น — เมื่อแพ็กเก็ตข้ามซับเน็ต เราเตอร์จะเขียน source/destination MAC ใหม่ทุก hop (ส่วน IP ยังคงเดิม)\n\n🔍 อ่าน exhibit: PC_A และ PC_B อยู่บน VLAN 200 เหมือนกัน ต่อกับ Switch1 ตัวเดียวกัน → เป็นการสื่อสาร "ภายในซับเน็ตเดียวกัน" ไม่ผ่านเราเตอร์เลย\n\n💡 คำว่า "after their initial communication" สำคัญ — หมายความว่า:\n• PC_A รู้ MAC ของ PC_B แล้ว (มีอยู่ใน ARP cache) → ไม่ต้อง ARP ซ้ำ\n• สวิตช์เรียนรู้ MAC ของทั้งคู่ลงตาราง CAM แล้ว → ส่งตรงออกพอร์ตเดียว ไม่ flood\n\n✅ ทำไม C ถูก: ทั้ง source และ destination MAC ยังคงเป็นของ PC_A และ PC_B ตามเดิม เพราะไม่มีเราเตอร์มาคั่นกลาง\n\n❌ ทำไมข้ออื่นผิด:\nA. source MAC จะเปลี่ยนก็ต่อเมื่อเฟรมถูกเราเตอร์ส่งต่อข้ามซับเน็ต\nB. ffff.ffff.ffff คือ broadcast ซึ่งใช้ตอน ARP ครั้งแรกเท่านั้น — โจทย์ระบุว่าสื่อสารกันไปแล้ว จึงรู้ MAC กันแล้ว\nD. สวิตช์ Layer 2 ไม่เคยเขียน MAC ของตัวเองลงในเฟรมที่ส่งต่อ\n\n📗 จำไว้สอบ: ข้าม Layer 2 (สวิตช์) → MAC ไม่เปลี่ยน • ข้าม Layer 3 (เราเตอร์) → MAC เปลี่ยนทุก hop แต่ IP ไม่เปลี่ยน',
  },
  {
    id: 41,
    kind: 'single',
    prompt: 'Using direct sequence spread spectrum, which three 2.4-GHz channels are used to limit collisions?',
    options: [
      { key: 'A', text: '5, 6, 7' },
      { key: 'B', text: '1, 2, 3' },
      { key: 'C', text: '1, 6, 11' },
      { key: 'D', text: '1, 5, 10' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ย่าน 2.4 GHz กับปัญหาช่องซ้อนทับ\n• ในสหรัฐฯ มี 11 ช่อง (ยุโรป 13 ช่อง) แต่ละช่องห่างกันเพียง 5 MHz\n• สัญญาณ DSSS แต่ละช่องกินความกว้างราว 22 MHz → กว้างกว่าระยะห่างระหว่างช่องถึง 4 เท่า\n• ดังนั้นสองช่องจะไม่ทับกันได้ ต้องห่างกันอย่างน้อย 5 ช่อง (5 × 5 MHz = 25 MHz > 22 MHz)\n\n🧮 ตรวจสอบชุด 1, 6, 11:\n• 1 → 6 ห่าง 5 ช่อง ✔\n• 6 → 11 ห่าง 5 ช่อง ✔\n→ เป็นชุดเดียวที่ได้ 3 ช่องไม่ทับกันภายใน 11 ช่อง\n\n✅ ทำไม C ถูก: 1, 6, 11 คือชุด non-overlapping มาตรฐานที่ใช้กันทั่วโลกในย่าน 2.4 GHz\n\n❌ ทำไมข้ออื่นผิด:\nA. 5, 6, 7 ห่างกันแค่ 1 ช่อง → ทับกันเกือบทั้งหมด\nB. 1, 2, 3 ห่างกันแค่ 1 ช่อง → ทับกันหนัก\nD. 1, 5, 10 ห่างกัน 4 และ 5 ช่อง → คู่ 1–5 ยังทับกันบางส่วน\n\n💡 เกร็ด: นี่คือเหตุผลที่ย่าน 5 GHz ได้เปรียบมาก เพราะมีช่อง non-overlapping ราว 23–24 ช่อง จึงวาง AP ได้หนาแน่นกว่ามาก\n\n📗 จำไว้สอบ: 2.4 GHz = 1/6/11 เท่านั้น (3 ช่อง) • ต้องเว้นอย่างน้อย 5 ช่องจึงจะไม่ทับกัน',
  },
  {
    id: 42,
    kind: 'single',
    prompt: 'How do TCP and UDP differ in the way they guarantee packet delivery?',
    options: [
      { key: 'A', text: 'TCP uses retransmissions, acknowledgment, and parity checks, and UDP uses cyclic redundancy checks only' },
      { key: 'B', text: 'TCP uses two-dimensional parity checks, checksums, and cyclic redundancy checks, and UDP uses retransmissions only' },
      { key: 'C', text: 'TCP uses checksum, acknowledgements, and retransmissions, and UDP uses checksums only' },
      { key: 'D', text: 'TCP uses checksum, parity checks, and retransmissions, and UDP uses acknowledgements only' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กลไกที่แต่ละโปรโตคอลมีจริง ๆ\n\n🔹 TCP มี 3 อย่าง:\n1️⃣ Checksum → ตรวจว่าข้อมูลเสียหายระหว่างทางหรือไม่\n2️⃣ Acknowledgment (ACK) → ผู้รับยืนยันว่าได้รับข้อมูลแล้ว\n3️⃣ Retransmission → ถ้าไม่ได้ ACK ภายในเวลา (RTO) ก็ส่งซ้ำ\n(บวก sequence number สำหรับจัดลำดับ และ window สำหรับ flow control)\n\n🔹 UDP มีแค่ 1 อย่าง:\n• Checksum ⭐ → ตรวจความเสียหายของข้อมูลได้อย่างเดียว ถ้าพบว่าเสียก็ "ทิ้งเงียบ ๆ" ไม่แจ้งใครและไม่ขอส่งซ้ำ\n\n⚠️ ทั้ง TCP และ UDP "ไม่ใช้" parity check และไม่ใช้ CRC ที่ระดับ transport (CRC อยู่ในเฟรม Ethernet ที่ Layer 2 ต่างหาก)\n\n✅ ทำไม C ถูก: ระบุกลไกของ TCP ครบสามอย่างและของ UDP อย่างเดียวได้ถูกต้องตรงตามมาตรฐาน\n\n❌ ทำไมข้ออื่นผิด:\nA. TCP ไม่ใช้ parity check และ UDP ไม่ใช้ CRC ที่ชั้น transport\nB. UDP ไม่มี retransmission เด็ดขาด (นั่นคือหัวใจที่ทำให้มันเร็ว)\nD. UDP ไม่มี acknowledgement และ TCP ไม่ใช้ parity check\n\n📗 จำไว้สอบ: TCP = checksum + ACK + retransmission | UDP = checksum อย่างเดียว',
  },
  {
    id: 43,
    kind: 'single',
    prompt:
      'A wireless administrator has configured a WLAN; however, the clients need access to a less congested 5 GHz network for their voice quality. Which action must be taken to meet the requirement?',
    options: [
      { key: 'A', text: 'enable Band Select' },
      { key: 'B', text: 'enable DTIM' },
      { key: 'C', text: 'enable RX-SOP' },
      { key: 'D', text: 'enable AAA override' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ฟีเจอร์ WLAN บน Cisco WLC ที่ชอบออกสอบคู่กัน\n\n• Band Select ⭐ → "ผลัก" ไคลเอนต์ที่รองรับสองย่าน (dual-band) ให้ไปใช้ 5 GHz แทน 2.4 GHz\n  วิธีทำงาน: WLC จงใจ "ไม่ตอบ" probe request ที่ส่งมาบน 2.4 GHz ในช่วงเวลาหนึ่ง ทำให้ไคลเอนต์ที่เห็นทั้งสองย่านเลือกไปเชื่อมต่อที่ 5 GHz ซึ่งว่างกว่าและมีช่องไม่ทับกันมากกว่า\n\n• DTIM (Delivery Traffic Indication Map) → กำหนดความถี่ที่ AP จะส่งทราฟฟิก broadcast/multicast ที่เก็บไว้ให้ไคลเอนต์ที่หลับอยู่ — เกี่ยวกับการประหยัดพลังงาน\n• RX-SOP (Receiver Start of Packet Detection Threshold) → ตั้งระดับความแรงสัญญาณขั้นต่ำที่ AP จะยอมรับเฟรม ใช้ปรับขนาดเซลล์ในพื้นที่หนาแน่น\n• AAA Override → ให้ RADIUS ส่ง attribute มาแทนที่ค่าที่ตั้งไว้บน WLAN (เช่น VLAN, ACL, QoS) เป็นราย user\n\n✅ ทำไม A ถูก: Band Select คือฟีเจอร์ที่ออกแบบมาเพื่อชี้นำไคลเอนต์ไปยังย่าน 5 GHz ที่ว่างกว่าโดยเฉพาะ — ตรงกับความต้องการเรื่องคุณภาพเสียง\n\n❌ ทำไมข้ออื่นผิด:\nB. DTIM เกี่ยวกับการจัดการพลังงานและทราฟฟิก multicast ไม่ได้เลือกย่านความถี่\nC. RX-SOP ปรับขนาดเซลล์ ไม่ได้บังคับเลือกย่าน\nD. AAA Override ใช้กำหนดนโยบายราย user ไม่เกี่ยวกับการเลือกย่านความถี่\n\n📗 จำไว้สอบ: อยากผลักไคลเอนต์ไป 5 GHz → Band Select • สำหรับ VoIP ควรใช้คู่กับ WMM/QoS ด้วย',
  },
  {
    id: 44,
    kind: 'drag',
    image: v2q44,
    prompt: 'Drag and drop the application protocols from the left onto the transport protocols that they use on the right.',
    categories: [
      { name: 'TCP', items: ['FTP', 'SMTP', 'SSH'] },
      { name: 'UDP', items: ['DHCP', 'SNMP', 'TFTP'] },
    ],
    explanation:
      '📘 แนวคิด — จำว่าโปรโตคอลแอปพลิเคชันไหนวิ่งบน TCP หรือ UDP (ออกสอบแทบทุกชุด)\n\n🔹 ใช้ TCP — ต้องการความครบถ้วนของข้อมูล:\n• FTP (20 data / 21 control) — โอนไฟล์ ต้องครบทุกไบต์\n• SMTP (25) — ส่งอีเมล ต้องไม่ตกหล่น\n• SSH (22) — จัดการอุปกรณ์ ทุกตัวอักษรต้องถึง\n• HTTP (80) / HTTPS (443) / Telnet (23) / POP3 (110) / IMAP (143)\n\n🔹 ใช้ UDP — ต้องการความเร็วหรือเป็นข้อความสั้น ๆ:\n• DHCP (67 server / 68 client) — ตอนขอ IP ยังไม่มี IP จะสร้าง TCP connection ไม่ได้ จึงต้องใช้ broadcast บน UDP ⭐\n• SNMP (161 / trap 162) — ข้อความสถานะสั้น ๆ ถามใหม่ได้ถ้าหาย\n• TFTP (69) — เบาและง่าย จัดการความผิดพลาดเองด้วย block number\n• DNS (53), NTP (123), Syslog (514), RTP (เสียง/วิดีโอ)\n\n💡 เหตุผลที่ DHCP ต้องใช้ UDP: ไคลเอนต์ยังไม่มี IP address จึงต้องส่ง broadcast ไปที่ 255.255.255.255 ซึ่ง TCP ทำไม่ได้เพราะต้อง handshake แบบ unicast ก่อน\n\n📗 จำไว้สอบ: FTP/SMTP/SSH/HTTP/Telnet = TCP | DHCP/SNMP/TFTP/DNS/NTP/Syslog/RTP = UDP',
  },
  {
    id: 45,
    kind: 'single',
    prompt: 'What is the destination MAC address of a broadcast frame?',
    options: [
      { key: 'A', text: '00:00:0c:07:ac:01' },
      { key: 'B', text: 'ff:ff:ff:ff:ff:ff' },
      { key: 'C', text: '43:2e:08:00:00:0c' },
      { key: 'D', text: '00:00:0c:43:2e:08' },
      { key: 'E', text: '00:00:0c:ff:ff:ff' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ชนิดของ MAC address ปลายทาง\n• Unicast → บิตสุดท้ายของไบต์แรกเป็น 0 → ส่งถึงอุปกรณ์เดียว\n• Multicast → บิตสุดท้ายของไบต์แรกเป็น 1 เช่น 01:00:5E:xx:xx:xx (IPv4 multicast), 33:33:xx:xx:xx:xx (IPv6 multicast)\n• Broadcast ⭐ → ff:ff:ff:ff:ff:ff (บิต 1 ทั้ง 48 บิต) → สวิตช์จะ flood ออกทุกพอร์ตใน VLAN เดียวกัน\n\n💡 ที่ไหนใช้ broadcast MAC บ้าง: ARP Request, DHCP Discover, NetBIOS — ทุกกรณีที่ผู้ส่ง "ยังไม่รู้ว่าปลายทางอยู่ที่ไหน"\n\n✅ ทำไม B ถูก: ff:ff:ff:ff:ff:ff คือ broadcast MAC มาตรฐานของ Ethernet\n\n❌ ทำไมข้ออื่นผิด:\nA. 00:00:0c:07:ac:01 = virtual MAC ของ HSRP กลุ่มที่ 1 (รูปแบบ 0000.0C07.ACxx) — เป็น unicast\nC, D. เป็น MAC ทั่วไปของอุปกรณ์ (unicast) โดย 00:00:0c คือ OUI ของ Cisco\nE. มี ff เพียงครึ่งหลัง ไม่ใช่ broadcast — broadcast ต้องเป็น ff ทั้ง 6 ไบต์\n\n📗 จำไว้สอบ: broadcast MAC = ff:ff:ff:ff:ff:ff • HSRPv1 = 0000.0C07.ACxx • VRRP = 0000.5E00.01xx',
  },
  {
    id: 46,
    kind: 'multi',
    prompt: 'For what two purposes does the Ethernet protocol use physical addresses? (Choose two.)',
    options: [
      { key: 'A', text: 'to uniquely identify devices at Layer 2' },
      { key: 'B', text: 'to allow communication with devices on a different network' },
      { key: 'C', text: 'to differentiate a Layer 2 frame from a Layer 3 packet' },
      { key: 'D', text: 'to establish a priority system to determine which device gets to transmit first' },
      { key: 'E', text: 'to allow communication between different devices on the same network' },
      { key: 'F', text: 'to allow detection of a remote device when its physical address is unknown' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — MAC address (physical address) คือที่อยู่ 48 บิตที่ฝังมากับการ์ดเครือข่าย\nโครงสร้าง: OUI 24 บิต (ระบุผู้ผลิต) + Device ID 24 บิต (ระบุตัวเครื่อง) → รวมกันแล้วไม่ซ้ำใครทั้งโลก\n\nหน้าที่ของ MAC มี 2 อย่างเท่านั้น:\n1️⃣ ระบุตัวตนอุปกรณ์อย่างไม่ซ้ำกันที่ Layer 2 ⭐\n2️⃣ ใช้ส่งเฟรมระหว่างอุปกรณ์ที่อยู่ "บนเครือข่ายเดียวกัน" (ภายใน broadcast domain / VLAN เดียวกัน) ⭐\n\n⚠️ ขอบเขตสำคัญ: MAC ใช้ได้เฉพาะภายในลิงก์/เครือข่ายเดียวกัน — การสื่อสารข้ามเครือข่ายต้องใช้ IP address (Layer 3) และเราเตอร์จะเขียน MAC ใหม่ทุก hop\n\n✅ ทำไม A ถูก: MAC ระบุตัวอุปกรณ์แต่ละตัวที่ Layer 2 อย่างไม่ซ้ำกัน\n✅ ทำไม E ถูก: MAC ใช้ส่งเฟรมระหว่างอุปกรณ์ภายในเครือข่าย/VLAN เดียวกัน\n\n❌ ทำไมข้ออื่นผิด:\nB. การสื่อสารข้ามเครือข่ายเป็นหน้าที่ของ IP address ไม่ใช่ MAC\nC. การแยกแยะเฟรม L2 จากแพ็กเก็ต L3 ทำโดยฟิลด์ EtherType ไม่ใช่ MAC\nD. Ethernet ไม่มีระบบลำดับความสำคัญจาก MAC — การจัดคิวใช้ CSMA/CD (half-duplex) หรือ QoS/CoS ต่างหาก\nF. การค้นหาอุปกรณ์ที่ยังไม่รู้ MAC เป็นหน้าที่ของ ARP (ซึ่งใช้ IP ถามหา MAC) ไม่ใช่หน้าที่ของ MAC เอง\n\n📗 จำไว้สอบ: MAC = ระบุตัวตน + สื่อสารในเครือข่ายเดียวกัน | IP = สื่อสารข้ามเครือข่าย | ARP = แปลง IP → MAC',
  },
  {
    id: 47,
    kind: 'drag',
    image: v2q47,
    prompt: 'Drag and drop the networking parameters from the left onto the correct values on the right.',
    categories: [
      { name: 'Connection Oriented', items: ['SMTP', 'SSH', 'FTP'] },
      { name: 'Connectionless', items: ['SNMP', 'TFTP', 'VoIP'] },
    ],
    explanation:
      '📘 แนวคิด — "Connection Oriented" = วิ่งบน TCP | "Connectionless" = วิ่งบน UDP\n\n🔹 Connection Oriented (TCP) — ต้อง handshake ก่อน และการันตีความครบถ้วน:\n• SMTP (25) → ส่งอีเมล เนื้อหาต้องครบทุกตัวอักษร\n• SSH (22) → จัดการอุปกรณ์แบบเข้ารหัส ทุกคำสั่งต้องถึงและเรียงถูก\n• FTP (20/21) → โอนไฟล์ ห้ามตกหล่นแม้ไบต์เดียว\n\n🔹 Connectionless (UDP) — ยิงแล้วจบ ไม่มี handshake:\n• SNMP (161/162) → ข้อความสถานะสั้น ๆ ถ้าหายก็ถามใหม่ได้\n• TFTP (69) → เรียบง่าย จัดการความผิดพลาดเองด้วย block number + ACK ของตัวเอง\n• VoIP (RTP) ⭐ → เสียงเรียลไทม์ ยอมให้แพ็กเก็ตหายบ้างดีกว่ารอ retransmit จนเสียงกระตุก\n\n💡 เหตุผลที่ VoIP ต้องใช้ UDP: ถ้าใช้ TCP เมื่อแพ็กเก็ตเสียงหาย TCP จะหยุดรอส่งซ้ำ ทำให้เสียงสะดุดหนักกว่าการปล่อยให้หายไปเฉย ๆ (หูคนแทบไม่ได้ยินความต่างเมื่อหายเพียงเล็กน้อย)\n\n📗 จำไว้สอบ: ต้อง "ครบ" → TCP (connection-oriented) | ต้อง "ทันเวลา" → UDP (connectionless)',
  },
  {
    id: 48,
    kind: 'single',
    prompt: 'Which component of an Ethernet frame is used to notify a host that traffic is coming?',
    options: [
      { key: 'A', text: 'start of frame delimiter' },
      { key: 'B', text: 'Type field' },
      { key: 'C', text: 'preamble' },
      { key: 'D', text: 'Data field' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โครงสร้างเฟรม Ethernet เรียงจากหน้าไปหลัง\n1️⃣ Preamble (7 ไบต์) ⭐ → รูปแบบ 10101010 ซ้ำ ๆ ทำหน้าที่ "ปลุก" และซิงค์นาฬิกาของผู้รับ เป็นสัญญาณบอกว่า "เตรียมตัว มีข้อมูลกำลังมา"\n2️⃣ SFD - Start of Frame Delimiter (1 ไบต์) → รูปแบบ 10101011 บอกว่า "preamble จบแล้ว ข้อมูลจริงเริ่มบรรทัดถัดไป"\n3️⃣ Destination MAC (6 ไบต์)\n4️⃣ Source MAC (6 ไบต์)\n5️⃣ Type/Length (2 ไบต์) → บอกว่า payload เป็นโปรโตคอลอะไร (0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP)\n6️⃣ Data/Payload (46–1500 ไบต์)\n7️⃣ FCS (4 ไบต์) → CRC ตรวจความถูกต้อง\n\n✅ ทำไม C ถูก: preamble คือส่วนที่ "แจ้งเตือน" ผู้รับว่ามีทราฟฟิกกำลังจะมา และช่วยให้ผู้รับซิงค์จังหวะสัญญาณได้ก่อน\n\n❌ ทำไมข้ออื่นผิด:\nA. SFD ทำหน้าที่บอก "จุดเริ่มต้นของเฟรมจริง" ซึ่งมาหลัง preamble — เป็นการชี้ตำแหน่ง ไม่ใช่การแจ้งเตือนล่วงหน้า\nB. Type field บอกชนิดของโปรโตคอลชั้นบน ไม่ได้แจ้งเตือนอะไร\nD. Data field คือตัวข้อมูลเอง\n\n📗 จำไว้สอบ: Preamble 7 ไบต์ (ปลุก/ซิงค์) → SFD 1 ไบต์ (เริ่มเฟรม) → DMAC → SMAC → Type → Data → FCS',
  },
  {
    id: 49,
    kind: 'single',
    prompt:
      'You are configuring your edge router interface with a public IP address for Internet connectivity. The router needs to obtain the IP address from the service provider dynamically. Which command is needed on interface FastEthernet 0/0 to accomplish this?',
    options: [
      { key: 'A', text: 'ip default-gateway' },
      { key: 'B', text: 'ip route' },
      { key: 'C', text: 'ip default-network' },
      { key: 'D', text: 'ip address dhcp' },
      { key: 'E', text: 'ip address dynamic' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — วิธีให้อินเทอร์เฟซได้ IP มาแบบอัตโนมัติ\nคำสั่ง "ip address dhcp" ในโหมด interface configuration จะทำให้อินเทอร์เฟซนั้นทำตัวเป็น "DHCP client" คือส่ง DHCP Discover ออกไปเพื่อขอ IP address, subnet mask และ default gateway จากผู้ให้บริการ\nนี่เป็นวิธีมาตรฐานสำหรับเราเตอร์ขอบที่ต่อกับ ISP แบบ cable/DSL ซึ่ง ISP มักแจก IP สาธารณะแบบไดนามิก\n\n🔧 ตัวอย่างการใช้:\n  Router(config)# interface FastEthernet0/0\n  Router(config-if)# ip address dhcp\n  Router(config-if)# no shutdown\n\n✅ ทำไม D ถูก: เป็นคำสั่งเดียวที่สั่งให้อินเทอร์เฟซขอ IP จาก DHCP server ของ ISP\n\n❌ ทำไมข้ออื่นผิด:\nA. ip default-gateway ใช้กับอุปกรณ์ที่ "ปิด ip routing" (เช่น สวิตช์ Layer 2) และเป็นคำสั่งระดับ global ไม่ใช่ interface\nB. ip route = สร้าง static route ไม่ได้ขอ IP address ให้อินเทอร์เฟซ\nC. ip default-network = กำหนด candidate default route (วิธีเก่าแบบ classful) คนละเรื่อง\nE. ไม่มีคำสั่ง "ip address dynamic" อยู่จริงใน IOS — เป็นตัวลวง\n\n📗 จำไว้สอบ: ขอ IP อัตโนมัติที่อินเทอร์เฟซ = ip address dhcp • ตรวจผลด้วย show ip interface brief หรือ show dhcp lease',
  },
  {
    id: 50,
    kind: 'multi',
    prompt: 'Which two statements about the purpose of the OSI model are accurate? (Choose two.)',
    options: [
      { key: 'A', text: 'Defines the network functions that occur at each layer' },
      { key: 'B', text: 'Facilitates an understanding of how information travels throughout a network' },
      { key: 'C', text: 'Changes in one layer do not impact other layers' },
      { key: 'D', text: 'Ensures reliable data delivery through its layered approach' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — OSI Model คือ "แบบจำลองอ้างอิง" (reference model) ไม่ใช่โปรโตคอลที่ทำงานจริง\n7 ชั้น (จำจากล่างขึ้นบน): Physical → Data Link → Network → Transport → Session → Presentation → Application\n(ท่อง: Please Do Not Throw Sausage Pizza Away)\n\n🎯 วัตถุประสงค์ของแบบจำลอง:\n1️⃣ นิยามหน้าที่ของแต่ละชั้นให้ชัดเจน ⭐ → รู้ว่างานไหนเป็นของชั้นไหน เช่น การหาเส้นทาง = Layer 3, การส่งเฟรมในลิงก์ = Layer 2\n2️⃣ ช่วยให้เข้าใจว่าข้อมูลเดินทางผ่านเครือข่ายอย่างไร ⭐ → เห็นภาพการ encapsulate/de-encapsulate ทีละชั้น\n3️⃣ เป็นภาษากลางให้ผู้ผลิตต่างยี่ห้อออกแบบให้ทำงานร่วมกันได้\n4️⃣ ช่วยแก้ปัญหาอย่างเป็นระบบ (ไล่ตรวจทีละชั้นจากล่างขึ้นบน)\n\n✅ ทำไม A, B ถูก: ทั้งสองข้อคือวัตถุประสงค์หลักตามตำรา — นิยามหน้าที่ของแต่ละชั้น และทำให้เข้าใจการเดินทางของข้อมูล\n\n❌ ทำไมข้ออื่นผิด:\nC. ฟังดูดีแต่ไม่ใช่ "วัตถุประสงค์" ของแบบจำลอง — และในความจริงชั้นต่าง ๆ ก็ส่งผลต่อกัน (เช่น MTU ที่ Layer 2 กระทบการแบ่งส่วนที่ Layer 3/4)\nD. OSI เป็นแบบจำลองแนวคิด ไม่ได้ "รับประกัน" การส่งข้อมูล — ความน่าเชื่อถือมาจากโปรโตคอลจริงอย่าง TCP ที่ Layer 4\n\n📗 จำไว้สอบ: OSI = กรอบแนวคิด 7 ชั้นเพื่อความเข้าใจและ interoperability • TCP/IP model = 4 ชั้นที่ใช้งานจริง',
  },
  {
    id: 51,
    kind: 'multi',
    prompt: 'Which three statements about MAC addresses are correct? (Choose three.)',
    options: [
      { key: 'A', text: 'To communicate with other devices on a network, a network device must have a unique MAC address' },
      { key: 'B', text: 'The MAC address is also referred to as the IP address' },
      { key: 'C', text: 'The MAC address of a device must be configured in the Cisco IOS CLI by a user with administrative privileges' },
      {
        key: 'D',
        text: 'A MAC address contains two main components, the first of which identifies the manufacturer of the hardware and the second of which uniquely identifies the hardware',
      },
      { key: 'E', text: 'An example of a MAC address is 0A:26:B8:D6:65:90' },
      {
        key: 'F',
        text: 'A MAC address contains two main components, the first of which identifies the network on which the host resides and the second of which uniquely identifies the host on the network',
      },
    ],
    correct: ['A', 'D', 'E'],
    explanation:
      '📘 แนวคิด — MAC address (Layer 2 physical address)\n• ยาว 48 บิต = 6 ไบต์ เขียนเป็นเลขฐานสิบหก 12 หลัก\n• โครงสร้าง 2 ส่วน ⭐:\n  - OUI (Organizationally Unique Identifier) 24 บิตแรก → ระบุ "ผู้ผลิต" (IEEE เป็นผู้จัดสรร)\n  - Device/Serial ID 24 บิตหลัง → ผู้ผลิตกำหนดเองให้ไม่ซ้ำกัน\n• ถูกเบิร์นมากับการ์ดตั้งแต่โรงงาน (BIA - Burned-In Address) ไม่ต้องคอนฟิก\n• ต้องไม่ซ้ำกันภายในเครือข่ายเดียวกัน มิฉะนั้นเฟรมจะส่งผิดปลายทาง\n\n✅ ทำไม A ถูก: อุปกรณ์ต้องมี MAC ที่ไม่ซ้ำกัน สวิตช์จึงจะแยกได้ว่าเฟรมควรออกพอร์ตไหน\n✅ ทำไม D ถูก: ตรงตามโครงสร้าง OUI (ผู้ผลิต) + Device ID (ตัวเครื่อง)\n✅ ทำไม E ถูก: 0A:26:B8:D6:65:90 เป็นรูปแบบที่ถูกต้อง — 6 ไบต์ เลขฐานสิบหก คั่นด้วยโคลอน\n\n❌ ทำไมข้ออื่นผิด:\nB. MAC (Layer 2) กับ IP (Layer 3) เป็นคนละอย่างโดยสิ้นเชิง — MAC ติดมากับฮาร์ดแวร์ ส่วน IP กำหนดตามเครือข่ายที่อยู่\nC. MAC มาจากโรงงาน ไม่ต้องคอนฟิกใน CLI (แม้จะเปลี่ยนได้ด้วย MAC spoofing แต่ไม่ใช่ข้อบังคับ)\nF. โครงสร้าง "ส่วนเครือข่าย + ส่วนโฮสต์" เป็นลักษณะของ IP address ไม่ใช่ MAC — MAC ไม่มีแนวคิดเรื่องเครือข่ายเลย (จึง route ไม่ได้)\n\n📗 จำไว้สอบ: MAC 48 บิต = OUI 24 (ผู้ผลิต) + Serial 24 • IP = network + host • MAC ไม่บอกตำแหน่ง จึง route ไม่ได้',
  },
  {
    id: 52,
    kind: 'single',
    prompt: 'Which technique can you use to route IPv6 traffic over an IPv4 infrastructure?',
    options: [
      { key: 'A', text: 'NAT' },
      { key: 'B', text: '6 to 4 tunneling' },
      { key: 'C', text: 'L2TPv3' },
      { key: 'D', text: 'dual-stack' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กลยุทธ์การเปลี่ยนผ่านจาก IPv4 ไป IPv6 มี 3 แบบหลัก\n\n1️⃣ Dual-stack → อุปกรณ์รัน IPv4 และ IPv6 พร้อมกันบนอินเทอร์เฟซเดียวกัน\n  ⚠️ ต้องให้ "ทั้งเส้นทาง" รองรับทั้งสองโปรโตคอล — ไม่ได้แก้ปัญหาเมื่อโครงข่ายตรงกลางเป็น IPv4 ล้วน\n\n2️⃣ Tunneling ⭐ → ห่อแพ็กเก็ต IPv6 ไว้ในแพ็กเก็ต IPv4 (encapsulation) แล้วส่งข้ามโครงข่าย IPv4 ที่ไม่รู้จัก IPv6\n  • 6to4 (ใช้ช่วง 2002::/16), ISATAP, Manual/GRE tunnel, Teredo\n  • เป็นคำตอบเมื่อโจทย์บอกว่าโครงสร้างพื้นฐานกลางเป็น IPv4\n\n3️⃣ Translation (NAT64/NPTv6) → แปลงแพ็กเก็ต IPv6 ↔ IPv4 ใช้เมื่อฝั่งหนึ่งพูดได้แค่ IPv4 อีกฝั่งพูดได้แค่ IPv6\n\n✅ ทำไม B ถูก: 6to4 tunneling ห่อ IPv6 ไว้ใน IPv4 (IP protocol 41) จึงส่งทราฟฟิก IPv6 ข้ามโครงข่าย IPv4 ได้ตามที่โจทย์ต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nA. NAT (แบบ IPv4) แปลง private ↔ public IPv4 ไม่ได้ทำให้ IPv6 วิ่งข้าม IPv4 ได้\nC. L2TPv3 เป็นทันเนล Layer 2 สำหรับขนเฟรม Ethernet ข้ามเครือข่าย ไม่ใช่เครื่องมือเปลี่ยนผ่าน IPv6 มาตรฐาน\nD. dual-stack ต้องการให้ทุกอุปกรณ์ตลอดเส้นทางรองรับ IPv6 ด้วย — ใช้ไม่ได้ถ้าโครงข่ายกลางเป็น IPv4 อย่างเดียว\n\n📗 จำไว้สอบ: โครงข่ายกลางเป็น IPv4 → tunneling | ทุกจุดรองรับสองโปรโตคอล → dual-stack | คุยข้ามโปรโตคอล → NAT64',
  },
  {
    id: 53,
    kind: 'single',
    image: v2q53,
    prompt:
      'Refer to the exhibit. A network technician is asked to design a small network with redundancy. The exhibit represents this design, with all hosts configured in the same VLAN. What conclusions can be made about this design?',
    options: [
      { key: 'A', text: 'This design will function as intended.' },
      { key: 'B', text: 'Spanning-tree will need to be used.' },
      { key: 'C', text: 'The router will not accept the addressing scheme.' },
      { key: 'D', text: 'The connection between switches should be a trunk.' },
      { key: 'E', text: 'The router interfaces must be encapsulated with the 802.1Q protocol.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎเหล็กของ IP addressing บนเราเตอร์\nอินเทอร์เฟซสองตัวของเราเตอร์ "ตัวเดียวกัน" ห้ามอยู่ในซับเน็ตเดียวกันเด็ดขาด (overlapping subnet)\nถ้าพยายามตั้ง IOS จะปฏิเสธด้วยข้อความประมาณ:\n  "% 192.168.1.0 overlaps with GigabitEthernet0/0"\nเหตุผล: ถ้าอินเทอร์เฟซสองตัวอยู่ซับเน็ตเดียวกัน เราเตอร์จะไม่รู้ว่าควรส่งแพ็กเก็ตออกทางไหน — ตารางเราต์จะขัดแย้งกันเอง\n\n🔍 อ่าน exhibit: Router1 มี\n• อินเทอร์เฟซหนึ่งไป Switch1 = 192.168.1.1 /24\n• อีกอินเทอร์เฟซไป Switch2 = 192.168.1.2 /24\n→ ทั้งคู่อยู่ใน 192.168.1.0/24 เหมือนกัน = overlapping ❌ IOS ไม่ยอมรับ\n\n✅ ทำไม C ถูก: เราเตอร์จะปฏิเสธการตั้งค่านี้ตั้งแต่ต้น เพราะสองอินเทอร์เฟซซ้อนซับเน็ตกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้งานไม่ได้ เพราะคอนฟิกไม่ผ่านตั้งแต่แรก\nB. STP ทำงานอัตโนมัติอยู่แล้วบนสวิตช์ (และในผังนี้มีลูประหว่างสวิตช์จริง) แต่นั่นไม่ใช่ "ข้อสรุปหลัก" ของปัญหา — ปัญหาที่ทำให้ออกแบบนี้ใช้ไม่ได้คือ IP ซ้อนกัน\nD. โฮสต์ทั้งหมดอยู่ VLAN เดียวกัน จึงไม่จำเป็นต้องทำ trunk ระหว่างสวิตช์ (access link ก็พอ)\nE. 802.1Q encapsulation ใช้เมื่อทำ router-on-a-stick กับหลาย VLAN — ที่นี่มี VLAN เดียว จึงไม่จำเป็น\n\n📗 จำไว้สอบ: เราเตอร์ตัวเดียวห้ามมี 2 อินเทอร์เฟซในซับเน็ตเดียวกัน • ถ้าอยากมีสองเส้นทางไปสวิตช์เดียวกันให้ใช้ EtherChannel หรือแยกซับเน็ต',
  },
  {
    id: 54,
    kind: 'multi',
    prompt: 'Which two statements are true about the command "ip route 172.16.3.0 255.255.255.0 192.168.2.4"? (Choose two.)',
    options: [
      { key: 'A', text: 'It establishes a static route to the 172.16.3.0 network.' },
      { key: 'B', text: 'It establishes a static route to the 192.168.2.0 network.' },
      { key: 'C', text: 'It configures the router to send any traffic for an unknown destination to the 172.16.3.0 network.' },
      { key: 'D', text: 'It configures the router to send any traffic for an unknown destination out the interface with the address 192.168.2.4.' },
      { key: 'E', text: 'It uses the default administrative distance.' },
      { key: 'F', text: 'It is a route that would be used last if other routes to the same destination exist.' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — โครงสร้างคำสั่ง static route\n  ip route <destination-network> <subnet-mask> <next-hop-ip | exit-interface> [administrative-distance]\n\n🔍 แยกส่วนคำสั่งในโจทย์:\n• 172.16.3.0 = "เครือข่ายปลายทาง" ⭐\n• 255.255.255.0 = subnet mask (/24)\n• 192.168.2.4 = next-hop address (เราเตอร์ตัวถัดไปที่จะส่งต่อให้)\n• ไม่มีตัวเลขต่อท้าย → ใช้ค่า AD เริ่มต้นของ static route คือ 1 ⭐\n\n✅ ทำไม A ถูก: ปลายทางของ route นี้คือเครือข่าย 172.16.3.0/24\n✅ ทำไม E ถูก: ไม่ได้ระบุ AD ท้ายคำสั่ง → ใช้ค่าเริ่มต้น 1 (ต่ำมาก จึงชนะเกือบทุกโปรโตคอล)\n\n❌ ทำไมข้ออื่นผิด:\nB. 192.168.2.4 คือ next hop ไม่ใช่เครือข่ายปลายทาง — ตำแหน่งในคำสั่งบอกหน้าที่ชัดเจน\nC. "ปลายทางที่ไม่รู้จัก" จะถูกส่งไปตาม default route (0.0.0.0 0.0.0.0) เท่านั้น — route นี้เจาะจง 172.16.3.0/24\nD. คำสั่งนี้ระบุ next-hop IP ไม่ใช่ exit interface และไม่ใช่ default route\nF. AD 1 ต่ำที่สุดรองจาก connected → จะถูกใช้ "ก่อน" route อื่นแทบทั้งหมด ไม่ใช่ใช้เป็นอันดับสุดท้าย (ถ้าอยากให้ใช้ทีหลังต้องใส่ AD สูง ๆ เช่น 200 = floating static)\n\n📗 จำไว้สอบ: AD → Connected 0, Static 1, eBGP 20, EIGRP 90, OSPF 110, RIP 120, iBGP 200 • ลำดับคำสั่ง = ปลายทาง → mask → next hop → [AD]',
  },
  {
    id: 55,
    kind: 'multi',
    prompt: 'What are two benefits of private IPv4 IP addresses? (Choose two.)',
    options: [
      { key: 'A', text: 'They are routed the same as public IP addresses.' },
      { key: 'B', text: 'They are less costly than public IP addresses.' },
      { key: 'C', text: 'They can be assigned to devices without Internet connections.' },
      { key: 'D', text: 'They eliminate the necessity for NAT policies.' },
      { key: 'E', text: 'They eliminate duplicate IP conflicts.' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — ที่อยู่ส่วนตัวตาม RFC 1918 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)\nประโยชน์ที่แท้จริง:\n• ใช้ได้ฟรี ไม่ต้องซื้อ/เช่าจาก ISP หรือ RIR ⭐ ต่างจาก public IP ที่มีต้นทุนและมีจำกัด\n• ใช้กับอุปกรณ์ที่ไม่ต้องออกอินเทอร์เน็ตเลยก็ได้ ⭐ เช่น เครื่องพิมพ์ กล้องวงจรปิด อุปกรณ์ควบคุมในโรงงาน เซิร์ฟเวอร์ภายใน\n• ประหยัดพื้นที่ IPv4 สาธารณะโดยรวมของทั้งโลก\n• หลายองค์กรใช้ช่วงเดียวกันซ้ำได้โดยไม่ชนกัน\n\n✅ ทำไม B ถูก: ที่อยู่ส่วนตัวไม่มีค่าใช้จ่าย ขณะที่ public IP ต้องจ่ายให้ ISP\n✅ ทำไม C ถูก: อุปกรณ์ที่ไม่ต้องต่ออินเทอร์เน็ตใช้ที่อยู่ส่วนตัวได้เต็มที่ ไม่จำเป็นต้องเปลือง public IP\n\n❌ ทำไมข้ออื่นผิด:\nA. ตรงข้าม — เราเตอร์บนอินเทอร์เน็ตจะ "ไม่ route" ที่อยู่ส่วนตัวเลย (จึงต้องมี NAT)\nD. กลับด้าน — ที่อยู่ส่วนตัว "ทำให้จำเป็นต้องมี NAT" ถ้าจะออกอินเทอร์เน็ต\nE. ไม่จริง — ภายในเครือข่ายเดียวกันก็ยังตั้ง IP ซ้ำกันได้ถ้าคอนฟิกผิด และการรวมสองบริษัทที่ใช้ 192.168.1.0/24 เหมือนกันจะเกิด overlap ทันที\n\n📗 จำไว้สอบ: private IP = ฟรี + ใช้ภายใน + ต้องมี NAT จึงออกเน็ตได้ • ไม่ได้กันเลข IP ซ้ำ',
  },
  {
    id: 56,
    kind: 'multi',
    prompt: 'What are two benefits that the UDP protocol provides for application traffic? (Choose two.)',
    options: [
      { key: 'A', text: 'UDP traffic has lower overhead than TCP traffic' },
      { key: 'B', text: 'UDP provides a built-in recovery mechanism to retransmit lost packets' },
      { key: 'C', text: 'The CTL field in the UDP packet header enables a three-way handshake to establish the connection' },
      { key: 'D', text: 'UDP maintains the connection state to provide more stable connections than TCP' },
      { key: 'E', text: 'The application can use checksums to verify the integrity of application data' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — UDP header มีเพียง 8 ไบต์ ประกอบด้วย 4 ฟิลด์เท่านั้น\n1️⃣ Source Port (2 ไบต์)\n2️⃣ Destination Port (2 ไบต์)\n3️⃣ Length (2 ไบต์)\n4️⃣ Checksum (2 ไบต์) ⭐ → ตรวจความถูกต้องของข้อมูลได้\n\nเทียบกับ TCP header ที่มีอย่างน้อย 20 ไบต์ (มี sequence, ack, window, flags ฯลฯ)\n\n✅ ทำไม A ถูก: header เล็กกว่าครึ่งหนึ่ง + ไม่มี handshake + ไม่มี ACK → โอเวอร์เฮดต่ำกว่ามาก ทั้งด้านแบนด์วิดท์และการประมวลผล\n✅ ทำไม E ถูก: UDP มีฟิลด์ checksum ให้ตรวจสอบความถูกต้องของข้อมูลได้ (แม้จะไม่ซ่อมให้ก็ตาม — ถ้าผิดก็ทิ้ง แล้วให้แอปพลิเคชันจัดการเอง)\n\n❌ ทำไมข้ออื่นผิด:\nB. UDP ไม่มีกลไกส่งซ้ำเลย — ถ้าแอปต้องการต้องเขียนเองที่ชั้นแอปพลิเคชัน\nC. ไม่มีฟิลด์ชื่อ "CTL" ใน UDP header และ UDP ไม่มี 3-way handshake (มีแค่ 4 ฟิลด์ตามด้านบน)\nD. UDP เป็น connectionless คือ "ไม่เก็บสถานะการเชื่อมต่อ" เลย — ตรงข้ามกับข้อความนี้\n\n📗 จำไว้สอบ: UDP header 8 ไบต์ (port×2, length, checksum) • ข้อดี = เร็ว เบา latency ต่ำ • ข้อเสีย = ไม่การันตีการส่งถึง',
  },
  {
    id: 57,
    kind: 'multi',
    prompt: 'Which two are reasons to implement private IPv4 addressing on your network? (Choose two.)',
    options: [
      { key: 'A', text: 'Comply with PCI regulations' },
      { key: 'B', text: 'Conserve IPv4 address' },
      { key: 'C', text: 'Reduce the size of the forwarding table on network routers' },
      { key: 'D', text: 'Reduce the risk of a network security breach' },
      { key: 'E', text: 'Comply with local law' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — เหตุผลที่องค์กรใช้ที่อยู่ส่วนตัว (RFC 1918)\n\n1️⃣ Conserve IPv4 addresses ⭐ — เหตุผลอันดับหนึ่งตามตำรา\n  IPv4 มีที่อยู่เพียง ~4.3 พันล้าน ซึ่งไม่พอสำหรับอุปกรณ์ทั้งโลก การให้ทุกองค์กรใช้ช่วงส่วนตัวซ้ำกันได้ แล้วแปลงออกด้วย NAT/PAT เพียงไม่กี่ IP สาธารณะ ช่วยยืดอายุ IPv4 ออกไปหลายสิบปี\n\n2️⃣ Reduce the risk of a network security breach ⭐\n  เพราะเราเตอร์บนอินเทอร์เน็ตไม่ route ที่อยู่ส่วนตัว ผู้โจมตีจากภายนอกจึงไม่สามารถ "ต่อตรง" เข้าหาโฮสต์ภายในได้ ต้องผ่าน NAT ที่ขอบเครือข่ายก่อนเสมอ → ลดพื้นที่การโจมตีลงมาก\n  ⚠️ แต่ต้องเข้าใจว่านี่เป็นเพียง "การลดความเสี่ยง" ไม่ใช่มาตรการความปลอดภัยที่พึ่งพาได้ — NAT ไม่ใช่ firewall ยังต้องมี firewall/ACL อยู่ดี\n\n✅ ทำไม B, D ถูก: เป็นสองเหตุผลหลักที่ตำรา CCNA ระบุไว้สำหรับการใช้ private addressing\n\n❌ ทำไมข้ออื่นผิด:\nA. PCI DSS กำหนดเรื่องการแบ่งเซกเมนต์ การเข้ารหัส และการควบคุมการเข้าถึง — ไม่ได้บังคับให้ใช้ที่อยู่ส่วนตัว\nC. เป็นผลพลอยได้ทางอ้อม (prefix ส่วนตัวไม่ปรากฏในตารางเราต์อินเทอร์เน็ต) แต่ไม่ใช่ "เหตุผลที่องค์กรตัดสินใจใช้"\nE. ไม่มีกฎหมายท้องถิ่นใดบังคับเรื่องนี้\n\n📗 จำไว้สอบ: เหตุผลหลัก = ประหยัด IPv4 + ลดการเข้าถึงจากภายนอก • NAT ไม่ใช่ security แต่ช่วยลดความเสี่ยง',
  },
  {
    id: 58,
    kind: 'single',
    prompt: 'Which WAN access technology is preferred for a small office / home office architecture?',
    options: [
      { key: 'A', text: 'broadband cable access' },
      { key: 'B', text: 'frame-relay packet switching' },
      { key: 'C', text: 'dedicated point-to-point leased line' },
      { key: 'D', text: 'Integrated Services Digital Network switching' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เทคโนโลยี WAN กับความเหมาะสมของแต่ละแบบ\n\n• Broadband cable / DSL / FTTH ⭐ → ราคาถูก ติดตั้งง่าย ความเร็วสูงพอสำหรับสำนักงานเล็ก มีให้บริการทั่วไป → เหมาะกับ SOHO ที่สุด\n• Dedicated leased line (T1/E1, Metro Ethernet) → แบนด์วิดท์รับประกัน มี SLA แต่ราคาสูงมาก เหมาะกับองค์กรใหญ่ที่ต้องการความแน่นอน\n• Frame Relay → เทคโนโลยี packet-switched ยุคเก่า (1990s) ปัจจุบันเลิกใช้แล้ว ถูกแทนที่ด้วย MPLS\n• ISDN → เทคโนโลยีดิจิทัลบนสายโทรศัพท์ยุคเก่า BRI ได้แค่ 128 Kbps ล้าสมัยไปแล้ว\n\n✅ ทำไม A ถูก: broadband cable ให้อัตราส่วนความเร็วต่อราคาที่ดีที่สุด ติดตั้งง่าย จึงเป็นตัวเลือกมาตรฐานของ SOHO\n\n❌ ทำไมข้ออื่นผิด:\nB. Frame Relay เป็นเทคโนโลยีที่เลิกใช้แล้วและซับซ้อนเกินความจำเป็นสำหรับสำนักงานเล็ก\nC. leased line แพงเกินไปสำหรับ SOHO (แม้จะเสถียรที่สุด)\nD. ISDN ช้ามาก (128 Kbps) และล้าสมัย\n\n📗 จำไว้สอบ: SOHO → broadband (cable/DSL/fiber) | องค์กรใหญ่ที่ต้องการ SLA → leased line / MPLS | Frame Relay & ISDN = ล้าสมัย',
  },
  {
    id: 59,
    kind: 'multi',
    prompt: 'Which two WAN architecture options help a business achieve scalability and reliability for the network? (Choose two.)',
    options: [
      { key: 'A', text: 'asynchronous routing' },
      { key: 'B', text: 'single-homed branches' },
      { key: 'C', text: 'dual-homed branches' },
      { key: 'D', text: 'static routing' },
      { key: 'E', text: 'dynamic routing' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — โจทย์ขอทั้ง "scalability" (ขยายง่าย) และ "reliability" (ทนทาน)\n\n🔹 Dual-homed branches ⭐ → สาขาแต่ละแห่งมีลิงก์ WAN 2 เส้น (มักคนละ ISP)\n  • ถ้าเส้นหนึ่งล่ม อีกเส้นรับช่วงทันที = reliability\n  • รองรับการเติบโตของทราฟฟิกได้ด้วย (ใช้ทั้งสองเส้นพร้อมกันแบบ load balance ได้)\n\n🔹 Dynamic routing ⭐ (OSPF, EIGRP, BGP)\n  • เราเตอร์เรียนรู้เส้นทางเองและ "คำนวณเส้นทางใหม่อัตโนมัติ" เมื่อลิงก์ล่ม = reliability\n  • เพิ่มสาขาใหม่แล้วเส้นทางกระจายเองโดยไม่ต้องไปแก้ทีละเครื่อง = scalability\n\n✅ ทำไม C, E ถูก: การมีลิงก์สำรองให้ความทนทานทางกายภาพ ส่วน dynamic routing ให้ความทนทานและความยืดหยุ่นทางตรรกะ — ทั้งคู่ตอบโจทย์ทั้งสองด้าน\n\n❌ ทำไมข้ออื่นผิด:\nA. "asynchronous routing" ไม่ใช่คำศัพท์ที่มีอยู่จริงในเครือข่าย — เป็นตัวลวงล้วน ๆ\nB. single-homed = ลิงก์เดียว ไม่มีสำรอง → ลิงก์ขาดคือสาขาตัดขาดทันที (ตรงข้ามกับ reliability)\nD. static routing ต้องพิมพ์เส้นทางเองทุกเส้นทุกเครื่อง — เครือข่ายใหญ่ขึ้นจะบริหารไม่ไหว และไม่ปรับตัวเองเมื่อลิงก์ล่ม\n\n📗 จำไว้สอบ: reliability + scalability → dual-homed + dynamic routing • ระวังตัวลวง "asynchronous routing" ที่ไม่มีอยู่จริง',
  },
  {
    id: 60,
    kind: 'single',
    prompt: 'What is the binary pattern of a unique IPv6 unique local address?',
    options: [
      { key: 'A', text: '00000000' },
      { key: 'B', text: '11111100' },
      { key: 'C', text: '11111111' },
      { key: 'D', text: '11111101' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Unique Local Address (ULA) นิยามไว้ที่ FC00::/7\nคำว่า "/7" หมายถึง 7 บิตแรกถูกกำหนดตายตัว = 1111110 ส่วนบิตที่ 8 (เรียกว่า L bit) เปลี่ยนได้:\n• L = 0 → 11111100 = FC00::/8 (สงวนไว้ ยังไม่ได้กำหนดวิธีใช้)\n• L = 1 → 11111101 = FD00::/8 (ใช้งานจริง — องค์กรสุ่ม Global ID เองได้)\n\n🧮 แปลงเลขฐานสิบหกเป็นฐานสอง:\n• FC = 1111 1100 ⭐\n• FD = 1111 1101\nทั้งคู่ขึ้นต้นด้วย 1111110 เหมือนกัน (7 บิตแรกของ /7)\n\n✅ ทำไม B ถูก: 11111100 คือ FC ซึ่งเป็นค่าเริ่มต้นของบล็อก FC00::/7 ที่นิยาม ULA ไว้\n\n❌ ทำไมข้ออื่นผิด:\nA. 00000000 = 00 → อยู่ในช่วงที่สงวนไว้ (เช่น :: unspecified, ::1 loopback)\nC. 11111111 = FF → เป็นช่วง multicast (FF00::/8)\nD. 11111101 = FD → ถูกต้องในทางปฏิบัติ (เป็น ULA ที่ใช้จริง) แต่โจทย์ถามถึง "บล็อก" ซึ่งเริ่มต้นที่ FC00::/7 = 11111100\n\n📗 จำไว้สอบ: ULA = FC00::/7 (บิต 1111110) • ใช้จริงคือ FD00::/8 • FE80 = link-local | FF = multicast',
  },
  {
    id: 61,
    kind: 'multi',
    prompt: 'Which two options are the best reasons to use an IPv4 private IP space? (Choose two.)',
    options: [
      { key: 'A', text: 'to enable intra-enterprise communication' },
      { key: 'B', text: 'to implement NAT' },
      { key: 'C', text: 'to connect applications' },
      { key: 'D', text: 'to conserve global address space' },
      { key: 'E', text: 'to manage routing overhead' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — เหตุผลหลักในการใช้ที่อยู่ส่วนตัว (RFC 1918)\n\n1️⃣ Enable intra-enterprise communication ⭐ → ให้อุปกรณ์ภายในองค์กรสื่อสารกันได้อย่างอิสระ โดยไม่ต้องขอ public IP ให้ทุกเครื่อง\n  องค์กรจึงวางแผน IP addressing เองได้เต็มที่ (เช่น แบ่ง 10.x.y.0/24 ตามอาคาร/แผนก)\n\n2️⃣ Conserve global address space ⭐ → IPv4 สาธารณะมีจำกัดและหมดไปแล้ว การใช้ที่อยู่ส่วนตัวซ้ำกันทั่วโลกช่วยประหยัดพื้นที่ส่วนกลางอย่างมหาศาล\n\n✅ ทำไม A, D ถูก: เป็นสองเหตุผลเชิงวัตถุประสงค์ที่แท้จริงของการมีอยู่ของ private address space\n\n❌ ทำไมข้ออื่นผิด:\nB. NAT เป็น "ผลที่ตามมา" ที่จำเป็น ไม่ใช่ "เหตุผล" ที่เราเลือกใช้ที่อยู่ส่วนตัว — เราไม่ได้ใช้ private IP เพราะอยากทำ NAT แต่ต้องทำ NAT เพราะใช้ private IP\nC. "เชื่อมต่อแอปพลิเคชัน" เป็นเรื่องของ Layer 4–7 ไม่ใช่เหตุผลในการเลือกช่วงที่อยู่\nE. การจัดการ routing overhead เกี่ยวข้องกับการทำ summarization และการออกแบบลำดับชั้น ไม่ใช่การเลือก private vs public\n\n📗 จำไว้สอบ: private IP → สื่อสารภายในองค์กร + ประหยัด IPv4 สาธารณะ • NAT = ผลพลอยได้ที่จำเป็น ไม่ใช่เป้าหมาย',
  },
  {
    id: 62,
    kind: 'single',
    image: v2q62,
    prompt:
      'Refer to the exhibit. When PC1 sends a packet to PC2, the packet has which source and destination IP address when it arrives at interface Gi0/0 on router R2?',
    options: [
      { key: 'A', text: 'source 192.168.10.10 and destination 10.10.2.2' },
      { key: 'B', text: 'source 192.168.20.10 and destination 192.168.20.1' },
      { key: 'C', text: 'source 192.168.10.10 and destination 192.168.20.10' },
      { key: 'D', text: 'source 10.10.1.1 and destination 10.10.2.2' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎทองของการ routing (ออกสอบบ่อยมาก)\n• IP address ต้นทางและปลายทาง "ไม่เปลี่ยนเลย" ตลอดเส้นทาง (ตราบใดที่ไม่มี NAT) ⭐\n• MAC address ต้นทางและปลายทาง "เปลี่ยนทุก hop" — เราเตอร์แต่ละตัวจะเขียน source MAC เป็นของอินเทอร์เฟซขาออกของตัวเอง และ destination MAC เป็นของ hop ถัดไป\n• TTL ลดลง 1 ทุกครั้งที่ผ่านเราเตอร์ และ header checksum ถูกคำนวณใหม่\n\n🔍 อ่าน exhibit:\n• PC1 = 192.168.10.10 (LAN ของ R1)\n• PC2 = 192.168.20.10 (LAN ของ R3)\n• ลิงก์กลาง R1–R2 = 10.10.1.0/30 และ R2–R3 = 10.10.2.0/30 → เป็นเพียง "ทางผ่าน" เท่านั้น\n\n💡 เมื่อแพ็กเก็ตมาถึง Gi0/0 ของ R2 มันผ่านมาแล้ว 1 hop (R1) แต่ IP header ยังคงเดิมทุกประการ — สิ่งที่เปลี่ยนคือ MAC (เป็นของ R1 → R2) และ TTL (ลดลง 1)\n\n✅ ทำไม C ถูก: source ยังเป็น IP ของ PC1 (192.168.10.10) และ destination ยังเป็น IP ของ PC2 (192.168.20.10) เสมอ\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.10.2.2 เป็น IP ของอินเทอร์เฟซบนลิงก์ WAN ไม่ใช่ปลายทางสุดท้าย\nB. เอา IP ของ PC2 มาเป็น source และ IP ของเราเตอร์มาเป็น destination — ผิดทั้งคู่\nD. IP ของลิงก์ WAN ไม่เคยถูกใส่ลงใน IP header ของแพ็กเก็ตที่วิ่งผ่าน\n\n📗 จำไว้สอบ: IP ไม่เปลี่ยนตลอดทาง (ยกเว้นมี NAT) • MAC เปลี่ยนทุก hop • TTL −1 ทุก hop',
  },
  {
    id: 63,
    kind: 'single',
    prompt: 'What is the same for both copper and fiber interfaces when using SFP modules?',
    options: [
      { key: 'A', text: 'They support an inline optical attenuator to enhance signal strength' },
      { key: 'B', text: 'They accommodate single-mode and multi-mode in a single module' },
      { key: 'C', text: 'They provide minimal interruption to services by being hot-swappable' },
      { key: 'D', text: 'They offer reliable bandwidth up to 100 Mbps in half duplex mode' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — SFP (Small Form-factor Pluggable) คือโมดูลทรานซีฟเวอร์แบบถอดเปลี่ยนได้\n• เสียบเข้า/ถอดออกจากช่องบนสวิตช์หรือเราเตอร์ได้โดย "ไม่ต้องปิดเครื่อง" = hot-swappable ⭐\n  → เปลี่ยนสื่อกลางจากทองแดงเป็นไฟเบอร์ หรือเปลี่ยนระยะทาง (SX/LX/ZX) ได้โดยไม่กระทบพอร์ตอื่น ๆ\n• มีทั้งแบบทองแดง (1000BASE-T SFP ใช้หัว RJ-45) และแบบไฟเบอร์ (SX/LX/ZX ใช้หัว LC)\n• ตระกูลอื่น: SFP+ (10G), QSFP+ (40G), QSFP28 (100G)\n\n✅ ทำไม C ถูก: คุณสมบัติ hot-swappable เป็นสิ่งที่ SFP ทุกชนิดมีเหมือนกัน ไม่ว่าจะเป็นทองแดงหรือไฟเบอร์ — ทำให้เปลี่ยนโมดูลได้โดยบริการหยุดชะงักน้อยที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. optical attenuator ใช้ "ลดทอน" ความแรงของแสง (ไม่ใช่เพิ่ม) เมื่อสัญญาณแรงเกินจนตัวรับเสียหาย — และใช้เฉพาะกับไฟเบอร์ ไม่มีในโมดูลทองแดง\nB. โมดูลหนึ่งตัวรองรับได้อย่างเดียว — ต้องเลือกซื้อให้ตรงชนิดไฟเบอร์ (SMF หรือ MMF)\nD. SFP มาตรฐานรองรับ 1 Gbps full-duplex ไม่ใช่ 100 Mbps half-duplex\n\n📗 จำไว้สอบ: SFP = hot-swappable, 1G | SFP+ = 10G | QSFP+ = 40G | QSFP28 = 100G',
  },
  {
    id: 64,
    kind: 'multi',
    prompt: 'What are two functions of a server on a network? (Choose two.)',
    options: [
      { key: 'A', text: 'handles requests from multiple workstations at the same time' },
      { key: 'B', text: 'achieves redundancy by exclusively using virtual server clustering' },
      { key: 'C', text: 'housed solely in a data center that is dedicated to a single client' },
      { key: 'D', text: 'runs the same operating system in order to communicate with other servers' },
      { key: 'E', text: 'runs applications that send and retrieve data for workstations that make requests' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — โมเดล Client-Server\n• Server = เครื่องที่ "ให้บริการ" — รอรับคำขอจากไคลเอนต์ ประมวลผล แล้วส่งผลลัพธ์กลับ\n• คุณสมบัติสำคัญ:\n  - รองรับคำขอจากไคลเอนต์ "หลายเครื่องพร้อมกัน" ⭐ (ผ่าน multi-threading / connection pooling)\n  - รันแอปพลิเคชันที่จัดเก็บและส่งข้อมูลตามที่ไคลเอนต์ร้องขอ ⭐ (web server, file server, database server, mail server)\n  - ฮาร์ดแวร์มักแรงกว่าเครื่องทั่วไป (CPU หลายคอร์, RAM มาก, RAID, พาวเวอร์ซัพพลายสำรอง)\n\n✅ ทำไม A ถูก: การรับคำขอพร้อมกันจากหลายเวิร์กสเตชันคือหน้าที่พื้นฐานที่สุดของเซิร์ฟเวอร์\n✅ ทำไม E ถูก: เซิร์ฟเวอร์รันแอปพลิเคชันที่รับ-ส่งข้อมูลตามคำขอของไคลเอนต์\n\n❌ ทำไมข้ออื่นผิด:\nB. คำว่า "exclusively" ผิด — ความซ้ำซ้อนทำได้หลายวิธี เช่น RAID, พาวเวอร์คู่, load balancer, failover cluster ไม่จำเป็นต้องเป็น virtual clustering เท่านั้น\nC. คำว่า "solely" ผิด — เซิร์ฟเวอร์อยู่ที่ไหนก็ได้ ทั้งห้องเซิร์ฟเวอร์ในสำนักงาน, colocation, หรือคลาวด์แบบ multi-tenant\nD. ไม่จำเป็นเลย — เซิร์ฟเวอร์ Linux กับ Windows คุยกันได้สบาย เพราะสื่อสารผ่าน "โปรโตคอลมาตรฐาน" (HTTP, SMB, SQL) ไม่ใช่ผ่าน OS เดียวกัน\n\n📗 จำไว้สอบ: server = รอรับคำขอ + ให้บริการหลายไคลเอนต์พร้อมกัน • ระวังตัวเลือกที่มีคำว่า "exclusively/solely/only"',
  },
  {
    id: 65,
    kind: 'single',
    prompt: 'Which function is performed by the collapsed core layer in a two-tier architecture?',
    options: [
      { key: 'A', text: 'enforcing routing policies' },
      { key: 'B', text: 'marking interesting traffic for data policies' },
      { key: 'C', text: 'applying security policies' },
      { key: 'D', text: 'attaching users to the edge of the network' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Collapsed core = การยุบชั้น Core และ Distribution เข้าไว้ในอุปกรณ์เดียวกัน (สถาปัตยกรรม 2 ชั้น)\nดังนั้นชั้นนี้จึงต้องรับหน้าที่ "ของทั้งสองชั้นรวมกัน":\n\n🔹 หน้าที่ที่ได้จาก Core:\n• สลับ/ส่งต่อแพ็กเก็ตด้วยความเร็วสูงระหว่างส่วนต่าง ๆ ของเครือข่าย\n• เป็นจุดเชื่อมต่อไปยัง WAN / อินเทอร์เน็ต / ดาต้าเซ็นเตอร์\n\n🔹 หน้าที่ที่ได้จาก Distribution:\n• Inter-VLAN routing (เกตเวย์ของแต่ละ VLAN)\n• บังคับใช้ "นโยบายการกำหนดเส้นทาง" (routing policy) ⭐ เช่น route summarization, redistribution, route filtering\n• เป็น STP root bridge และจุดรวมของ ACL/QoS\n\n✅ ทำไม A ถูก: การบังคับใช้นโยบาย routing เป็นหน้าที่หลักของ distribution ซึ่งถูกยุบมารวมอยู่ใน collapsed core\n\n❌ ทำไมข้ออื่นผิด:\nB. การทำ marking (จัดลำดับความสำคัญของทราฟฟิก) ควรทำ "ใกล้ต้นทางที่สุด" คือที่ access layer\nC. การใช้นโยบายความปลอดภัยระดับพอร์ต (port security, 802.1X, DHCP snooping) อยู่ที่ access layer เป็นหลัก\nD. การให้ผู้ใช้เสียบสายเข้าเครือข่ายเป็นหน้าที่ของ access layer โดยตรง — collapsed core ไม่มีพอร์ตให้ผู้ใช้\n\n📗 จำไว้สอบ: collapsed core = core + distribution • access ยังแยกอยู่เสมอ (เป็นที่เสียบของผู้ใช้)',
  },
  {
    id: 66,
    kind: 'single',
    prompt: 'What is the primary function of a Layer 3 device?',
    options: [
      { key: 'A', text: 'to transmit wireless traffic between hosts' },
      { key: 'B', text: 'to analyze traffic and drop unauthorized traffic from the Internet' },
      { key: 'C', text: 'to forward traffic within the same broadcast domain' },
      { key: 'D', text: 'to pass traffic between different networks' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — หน้าที่ของอุปกรณ์ตามชั้น OSI\n• Layer 1 (hub, repeater) → ทวนสัญญาณไฟฟ้า/แสง\n• Layer 2 (switch, bridge) → ส่งต่อเฟรมด้วย MAC address "ภายใน" broadcast domain เดียวกัน\n• Layer 3 (router, L3 switch) ⭐ → ส่งต่อแพ็กเก็ตด้วย IP address "ข้าม" เครือข่าย/ซับเน็ตที่ต่างกัน\n  - สร้างและดูแลตารางเราต์ (routing table)\n  - เป็นขอบเขตของ broadcast domain (ไม่ forward broadcast ข้ามไป)\n  - ลด TTL และคำนวณ checksum ใหม่ทุก hop\n\n✅ ทำไม D ถูก: หน้าที่หลักของอุปกรณ์ Layer 3 คือส่งทราฟฟิกระหว่างเครือข่ายที่แตกต่างกัน (routing)\n\n❌ ทำไมข้ออื่นผิด:\nA. การรับส่งทราฟฟิกไร้สายเป็นหน้าที่ของ AP (ทำงานที่ Layer 1/2)\nB. การวิเคราะห์และบล็อกทราฟฟิกที่ไม่ได้รับอนุญาตเป็นหน้าที่ของ firewall/IPS (แม้เราเตอร์จะทำ ACL ได้ แต่ไม่ใช่ "หน้าที่หลัก")\nC. การส่งต่อภายใน broadcast domain เดียวกันคือหน้าที่ของสวิตช์ Layer 2\n\n📗 จำไว้สอบ: L2 switch = ภายใน VLAN/broadcast domain เดียวกัน | L3 router = ข้าม VLAN/ซับเน็ต • router = ขอบเขตของ broadcast domain',
  },
  {
    id: 67,
    kind: 'multi',
    prompt: 'Which two functions are performed by the core layer in a three-tier architecture? (Choose two.)',
    options: [
      { key: 'A', text: 'Provide uninterrupted forwarding service' },
      { key: 'B', text: 'Inspect packets for malicious activity' },
      { key: 'C', text: 'Ensure timely data transfer between layers' },
      { key: 'D', text: 'Provide direct connectivity for end user devices' },
      { key: 'E', text: 'Police traffic that is sent to the edge of the network' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — Core layer คือ "กระดูกสันหลัง" ของเครือข่าย มีคติประจำใจว่า "switch as fast as possible, do nothing else"\n\n🎯 หน้าที่ของ core:\n• Provide uninterrupted forwarding service ⭐ → ต้องไม่ล่มเด็ดขาด ออกแบบด้วยอุปกรณ์และลิงก์สำรองเต็มรูปแบบ (redundancy)\n• Ensure timely data transfer between layers ⭐ → ส่งข้อมูลระหว่างบล็อก distribution ต่าง ๆ ด้วย latency ต่ำที่สุด\n• ใช้ลิงก์ความเร็วสูง (10G/40G/100G) และ hardware switching เต็มรูปแบบ\n\n🚫 สิ่งที่ core "ต้องไม่ทำ" (เพราะจะทำให้ช้าลง):\n• ACL, QoS classification/marking, packet inspection, NAT, policy routing\n→ งานเหล่านี้ผลักไปให้ distribution และ access layer ทำแทน\n\n✅ ทำไม A ถูก: การส่งต่อที่ไม่มีสะดุดคือหน้าที่อันดับหนึ่งของ core\n✅ ทำไม C ถูก: core ต้องรับประกันความรวดเร็วในการรับส่งข้อมูลระหว่างส่วนต่าง ๆ ของเครือข่าย\n\n❌ ทำไมข้ออื่นผิด:\nB. การตรวจจับทราฟฟิกอันตรายเป็นหน้าที่ของ firewall/IPS — ถ้าให้ core ทำจะทำให้ช้าลงอย่างมาก\nD. อุปกรณ์ผู้ใช้เสียบที่ access layer เท่านั้น\nE. การทำ policing/QoS ควรอยู่ที่ distribution หรือ access ซึ่งใกล้ต้นทางมากกว่า\n\n📗 จำไว้สอบ: core = เร็ว + ไม่ล่ม + ไม่ทำ policy | distribution = นโยบาย/routing | access = พอร์ตผู้ใช้',
  },
  {
    id: 68,
    kind: 'single',
    prompt: 'What is a recommended approach to avoid co-channel congestion while installing access points that use the 2.4 GHz frequency?',
    options: [
      { key: 'A', text: 'different nonoverlapping channels' },
      { key: 'B', text: 'one overlapping channel' },
      { key: 'C', text: 'one nonoverlapping channel' },
      { key: 'D', text: 'different overlapping channels' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ปัญหาการรบกวนใน Wi-Fi มี 2 แบบ\n1️⃣ Co-channel interference/congestion ⭐ → AP หลายตัวใช้ "ช่องเดียวกัน" ในพื้นที่ได้ยินกัน\n  → ทุกตัวต้องผลัดกันพูดบนช่องนั้น (แชร์ airtime กัน) → throughput ตกลงอย่างมาก\n2️⃣ Adjacent-channel interference → AP ใช้ช่องที่ "ทับซ้อนกันบางส่วน" เช่น 1 กับ 3\n  → สัญญาณกวนกันเป็น noise ซึ่งแย่กว่าแบบแรกอีก เพราะแก้ไขด้วยการผลัดกันพูดไม่ได้\n\n💡 ทางแก้: ให้ AP ที่อยู่ใกล้กันใช้ "ช่องที่ต่างกันและไม่ทับซ้อนกัน" ซึ่งในย่าน 2.4 GHz มีเพียง 1, 6, 11 → วางสลับกันแบบลายตาราง (เช่น 1-6-11-1-6-11)\n\n✅ ทำไม A ถูก: การใช้ช่องที่ต่างกันและไม่ทับซ้อนกันแก้ได้ทั้งปัญหา co-channel และ adjacent-channel พร้อมกัน\n\n❌ ทำไมข้ออื่นผิด:\nB. ช่องที่ทับซ้อนกันช่องเดียว = แย่ที่สุด เกิดทั้งการแย่งช่องและสัญญาณรบกวน\nC. ใช้ช่องเดียวกันทุก AP (แม้จะเป็นช่องที่ไม่ทับกับใครอื่น) = co-channel congestion เต็ม ๆ ตรงกับปัญหาที่โจทย์ต้องการหลีกเลี่ยง\nD. ช่องต่างกันแต่ยังทับซ้อน (เช่น 1, 3, 5) = adjacent-channel interference ซึ่งแย่กว่า co-channel\n\n📗 จำไว้สอบ: 2.4 GHz → ใช้ 1/6/11 สลับกัน • RRM/DCA บน WLC เลือกช่องให้อัตโนมัติได้',
  },
  {
    id: 69,
    kind: 'single',
    prompt:
      'A manager asks a network engineer to advise which cloud service model is used so employees do not have to waste their time installing, managing, and updating software that is only used occasionally. Which cloud service model does the engineer recommend?',
    options: [
      { key: 'A', text: 'infrastructure-as-a-service' },
      { key: 'B', text: 'platform-as-a-service' },
      { key: 'C', text: 'business process as a service to support different types of service' },
      { key: 'D', text: 'software-as-a-service' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โมเดลบริการคลาวด์ 3 ระดับ (เรียงจาก "เราดูแลเยอะ" ไป "ผู้ให้บริการดูแลเยอะ")\n\n1️⃣ IaaS (Infrastructure as a Service) → ได้มาแค่ VM, storage, network\n  ลูกค้าต้องติดตั้งและดูแล OS + middleware + แอปพลิเคชันเอง (เช่น AWS EC2, Azure VM)\n\n2️⃣ PaaS (Platform as a Service) → ได้แพลตฟอร์มพร้อมรันโค้ด (OS + runtime + ฐานข้อมูล)\n  ลูกค้าดูแลเฉพาะโค้ดและข้อมูลของแอปตัวเอง (เช่น Heroku, Google App Engine)\n\n3️⃣ SaaS (Software as a Service) ⭐ → ได้ซอฟต์แวร์สำเร็จรูปพร้อมใช้ผ่านเบราว์เซอร์\n  ผู้ให้บริการดูแลทุกอย่างตั้งแต่ฮาร์ดแวร์ถึงตัวแอป รวมถึงการอัปเดตเวอร์ชัน (เช่น Microsoft 365, Gmail, Salesforce, Webex)\n\n✅ ทำไม D ถูก: โจทย์ระบุชัดว่าพนักงาน "ไม่ต้องติดตั้ง ไม่ต้องดูแล ไม่ต้องอัปเดตซอฟต์แวร์" ซึ่งตรงกับนิยามของ SaaS พอดี — ยิ่งเป็นซอฟต์แวร์ที่ใช้นาน ๆ ครั้ง ก็ยิ่งคุ้มที่จะจ่ายตามการใช้งานแทนการซื้อและติดตั้งเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. IaaS ยังต้องติดตั้งและดูแล OS กับซอฟต์แวร์เองทั้งหมด → ตรงข้ามกับโจทย์\nB. PaaS เหมาะกับ "นักพัฒนา" ที่จะเขียนแอปเอง ไม่ใช่พนักงานที่แค่อยากใช้ซอฟต์แวร์สำเร็จรูป\nC. BPaaS ไม่ใช่หนึ่งใน 3 โมเดลหลักตามนิยาม NIST ที่ CCNA ใช้\n\n📗 จำไว้สอบ: IaaS=ได้เครื่องเปล่า | PaaS=ได้แพลตฟอร์มให้เขียนโค้ด | SaaS=ได้แอปพร้อมใช้',
  },
  {
    id: 70,
    kind: 'multi',
    prompt: 'What are two functions of a Layer 2 switch? (Choose two.)',
    options: [
      { key: 'A', text: 'acts as a central point for association and authentication servers' },
      { key: 'B', text: 'selects the best route between networks on a WAN' },
      { key: 'C', text: 'moves packets within a VLAN' },
      { key: 'D', text: 'moves packets between different VLANs' },
      { key: 'E', text: 'makes forwarding decisions based on the MAC address of a packet' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — สวิตช์ Layer 2 ทำงานที่ชั้น Data Link เท่านั้น จึงรู้จักแค่ MAC address ไม่รู้จัก IP\n\n🎯 หน้าที่ของสวิตช์ Layer 2:\n1️⃣ Learning → จำ source MAC + พอร์ต ลงตาราง CAM\n2️⃣ Forwarding ⭐ → ตัดสินใจส่งออกพอร์ตใดโดยดูจาก destination MAC\n3️⃣ Flooding → ถ้าไม่รู้จักปลายทาง ส่งออกทุกพอร์ตใน VLAN เดียวกัน\n4️⃣ ส่งต่อทราฟฟิก "ภายใน VLAN เดียวกัน" ⭐ (ข้าม VLAN ไม่ได้ ต้องพึ่งอุปกรณ์ Layer 3)\n5️⃣ ป้องกันลูปด้วย STP และรวมลิงก์ด้วย EtherChannel\n\n✅ ทำไม C ถูก: การส่งต่อทราฟฟิกภายใน VLAN เดียวกันคือขอบเขตการทำงานของสวิตช์ L2 พอดี\n✅ ทำไม E ถูก: สวิตช์ L2 ตัดสินใจส่งต่อจาก MAC address เท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nA. การเป็นศูนย์กลางของ association และ authentication server เป็นหน้าที่ของ Wireless LAN Controller\nB. การเลือกเส้นทางที่ดีที่สุดบน WAN เป็นหน้าที่ของเราเตอร์ (Layer 3) ที่รันโปรโตคอลเราต์ติ้ง\nD. การส่งข้ามระหว่าง VLAN ต้องใช้อุปกรณ์ Layer 3 (router หรือ L3 switch ที่มี SVI) — สวิตช์ L2 ล้วนทำไม่ได้\n\n📗 จำไว้สอบ: L2 switch = MAC + ภายใน VLAN | L3 switch/router = IP + ข้าม VLAN | WLC = จัดการ AP',
  },
  {
    id: 71,
    kind: 'drag',
    image: v2q71,
    prompt: 'Drag and drop the TCP/IP protocols from the left onto their primary transmission protocols on the right.',
    categories: [
      { name: 'TCP', items: ['HTTP', 'SMTP', 'Telnet'] },
      { name: 'UDP', items: ['DNS', 'RTP', 'SNMP'] },
    ],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับจัด DNS ไว้ฝั่ง TCP และ SMTP ไว้ฝั่ง UDP ซึ่งสลับกันผิด — DNS ใช้ UDP เป็นหลัก ส่วน SMTP ใช้ TCP เสมอ การจัดที่ถูกต้องเป็นดังนี้\n\n📘 แนวคิด — จับคู่โปรโตคอลกับ transport ที่ใช้จริง\n\n🔹 ใช้ TCP (ต้องการความครบถ้วนและลำดับที่ถูกต้อง):\n• HTTP (80) → หน้าเว็บต้องมาครบทุกไบต์ ไม่งั้นหน้าเพี้ยน\n• SMTP (25) ⭐ → ส่งอีเมล เนื้อหาห้ามตกหล่นแม้ตัวอักษรเดียว\n• Telnet (23) → เซสชันโต้ตอบ ทุกคำสั่งต้องถึงและเรียงถูกลำดับ\n\n🔹 ใช้ UDP (ต้องการความเร็ว/เป็นข้อความสั้น):\n• DNS (53) ⭐ → คำถาม-คำตอบสั้น ๆ จบในแพ็กเก็ตเดียว ถ้าหายก็ถามใหม่ได้เร็วกว่าการตั้ง TCP connection\n  (ใช้ TCP 53 เฉพาะกรณี zone transfer หรือคำตอบใหญ่เกิน 512 ไบต์)\n• RTP → เสียง/วิดีโอเรียลไทม์ ยอมให้แพ็กเก็ตหายบ้างดีกว่ารอ retransmit จนเสียงกระตุก\n• SNMP (161 / trap 162) → ข้อความสถานะสั้น ๆ โพลใหม่ได้เรื่อย ๆ\n\n📗 จำไว้สอบ: HTTP/SMTP/Telnet/FTP/SSH = TCP | DNS/RTP/SNMP/DHCP/TFTP/NTP/Syslog = UDP',
  },
  {
    id: 72,
    kind: 'single',
    prompt:
      'An engineer observes high usage on the 2.4 GHz channels and lower usage on the 5 GHz channels. What must be configured to allow clients to preferentially use 5 GHz access points?',
    options: [
      { key: 'A', text: 'Client Band Select' },
      { key: 'B', text: 'Re-Anchor Roamed Clients' },
      { key: 'C', text: 'OEAP Split Tunnel' },
      { key: 'D', text: '11ac MU-MIMO' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Client Band Select (บน Cisco WLC)\nเป็นฟีเจอร์ที่ "ชี้นำ" ไคลเอนต์แบบ dual-band ให้ไปเชื่อมต่อที่ย่าน 5 GHz แทน 2.4 GHz\n\n🔧 วิธีทำงาน:\n• เมื่อไคลเอนต์ส่ง probe request มาบน 2.4 GHz ระบบจะจงใจ "หน่วง/ไม่ตอบ" ในช่วงแรก (probe suppression)\n• ไคลเอนต์จะได้รับคำตอบจากย่าน 5 GHz ก่อน จึงเลือกเชื่อมต่อที่ 5 GHz\n• ถ้าไคลเอนต์รองรับเฉพาะ 2.4 GHz ระบบจะยอมตอบให้หลังครบจำนวน probe ที่กำหนด → ไม่มีใครถูกตัดขาด\n\n💡 ทำไมควรผลักไป 5 GHz: ย่าน 5 GHz มีช่องที่ไม่ทับกันราว 23 ช่อง (เทียบกับ 2.4 GHz ที่มีแค่ 3) จึงแออัดน้อยกว่า, มีสัญญาณรบกวนจากอุปกรณ์อื่น (ไมโครเวฟ, Bluetooth) น้อยกว่า และรองรับความเร็วสูงกว่า\n\n✅ ทำไม A ถูก: Band Select คือฟีเจอร์ที่ออกแบบมาเพื่อวัตถุประสงค์นี้โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nB. Re-Anchor Roamed Clients เกี่ยวกับการจัดการ mobility anchor ตอนไคลเอนต์ roam ข้าม controller\nC. OEAP Split Tunnel ใช้กับ OfficeExtend AP เพื่อแยกทราฟฟิกที่ควรวิ่งกลับสำนักงานออกจากทราฟฟิกอินเทอร์เน็ตทั่วไป\nD. MU-MIMO (802.11ac Wave 2) เป็นเทคโนโลยีเสาอากาศที่ให้ AP คุยกับหลายไคลเอนต์พร้อมกัน — เพิ่ม throughput แต่ไม่ได้บังคับเลือกย่าน\n\n📗 จำไว้สอบ: ผลักไคลเอนต์ไป 5 GHz → Band Select • 2.4 GHz = 3 ช่อง | 5 GHz = ~23 ช่อง',
  },
  {
    id: 73,
    kind: 'single',
    prompt: 'Which networking function occurs on the data plane?',
    options: [
      { key: 'A', text: 'processing inbound SSH management traffic' },
      { key: 'B', text: 'sending and receiving OSPF Hello packets' },
      { key: 'C', text: 'facilitates spanning-tree elections' },
      { key: 'D', text: 'forwarding remote client/server traffic' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เครือข่ายแบ่งการทำงานเป็น 3 plane\n\n1️⃣ Data plane (forwarding plane) ⭐ — "ทำงานจริง" กับทราฟฟิกที่วิ่งผ่านอุปกรณ์\n  • ส่งต่อแพ็กเก็ต/เฟรมของผู้ใช้จากพอร์ตหนึ่งไปอีกพอร์ต ⭐\n  • เทียบ destination MAC กับตาราง CAM, เทียบ destination IP กับ FIB\n  • เพิ่ม/ถอด VLAN tag, ทำ NAT, บังคับ ACL, encapsulate/de-encapsulate\n  • ทำงานที่ ASIC ระดับฮาร์ดแวร์เพื่อความเร็วสูงสุด\n\n2️⃣ Control plane — "คิดและตัดสินใจ" ว่าจะส่งต่ออย่างไร\n  • รันโปรโตคอลเราต์ติ้ง (OSPF, EIGRP, BGP) และแลก Hello packet\n  • STP election, ARP, CDP/LLDP, VTP → สร้างตารางให้ data plane ใช้\n\n3️⃣ Management plane — "ดูแลจัดการ" ตัวอุปกรณ์เอง\n  • SSH/Telnet, SNMP, NETCONF, syslog, การล็อกอินของผู้ดูแล\n\n✅ ทำไม D ถูก: การส่งต่อทราฟฟิกของ client/server ที่วิ่งผ่านอุปกรณ์คือนิยามตรงตัวของ data plane\n\n❌ ทำไมข้ออื่นผิด:\nA. SSH ที่เข้ามาหาตัวอุปกรณ์ = management plane\nB. OSPF Hello = control plane (สร้าง/ดูแลตารางเราต์)\nC. STP election = control plane (ตัดสินใจว่าพอร์ตไหนควร forward หรือ block)\n\n📗 จำไว้สอบ: data = ส่งทราฟฟิกผู้ใช้ | control = สร้างตาราง (routing/STP/ARP) | management = SSH/SNMP/syslog',
  },
  {
    id: 74,
    kind: 'single',
    prompt: 'Under which condition is TCP preferred over UDP?',
    options: [
      { key: 'A', text: 'UDP is used when low latency is optimal, and TCP is used when latency is tolerable.' },
      { key: 'B', text: 'TCP is used when dropped data is more acceptable, and UDP is used when data is accepted out-of-order.' },
      { key: 'C', text: 'TCP is used when data reliability is critical, and UDP is used when missing packets are acceptable.' },
      { key: 'D', text: 'UDP is used when data is highly interactive, and TCP is used when data is time-sensitive.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เกณฑ์การเลือกใช้ TCP หรือ UDP\n\n🔹 เลือก TCP เมื่อ "ข้อมูลต้องครบและถูกต้อง 100%" ⭐\n  • โอนไฟล์ (FTP/SFTP) — ขาดไบต์เดียวไฟล์เสีย\n  • เว็บและธุรกรรม (HTTP/HTTPS) — ข้อมูลบัญชี/การเงินผิดไม่ได้\n  • อีเมล (SMTP/IMAP/POP3), ฐานข้อมูล, SSH\n\n🔹 เลือก UDP เมื่อ "ความเร็วสำคัญกว่าความครบถ้วน" ⭐\n  • VoIP และวิดีโอสตรีมมิง (RTP) — แพ็กเก็ตหาย 1–2 ตัวหูแทบไม่ได้ยิน แต่ถ้ารอส่งซ้ำจะกระตุกทันที\n  • เกมออนไลน์, DNS, DHCP, SNMP, NTP, Syslog\n\n✅ ทำไม C ถูก: สรุปเกณฑ์ตัดสินใจได้ตรงประเด็น — ข้อมูลต้องเชื่อถือได้ใช้ TCP, ยอมให้หายบ้างได้ใช้ UDP\n\n❌ ทำไมข้ออื่นผิด:\nA. ครึ่งแรกถูก (UDP latency ต่ำ) แต่ครึ่งหลังพลาดประเด็น — เหตุผลหลักที่เลือก TCP คือความน่าเชื่อถือ ไม่ใช่เพราะ "ทน latency ได้"\nB. กลับด้าน — TCP ต่างหากที่ "ไม่ยอมให้ข้อมูลหาย" และ TCP ก็จัดเรียงลำดับให้ด้วย ส่วน UDP ไม่จัดเรียงเลย\nD. กลับด้าน — งาน time-sensitive (เรียลไทม์) ต่างหากที่ควรใช้ UDP ไม่ใช่ TCP\n\n📗 จำไว้สอบ: ต้อง "ครบ" → TCP | ต้อง "ทันเวลา" → UDP',
  },
  {
    id: 75,
    kind: 'single',
    image: v2q75,
    prompt:
      'Refer to the exhibit. Shortly after SiteA was connected to SiteB over a new single-mode fiber path, users at SiteA report intermittent connectivity issues with applications hosted at SiteB. What is the cause of the intermittent connectivity issue?',
    options: [
      { key: 'A', text: 'Interface errors are incrementing.' },
      { key: 'B', text: 'High usage is causing high latency.' },
      { key: 'C', text: 'An incorrect SFP media type was used at SiteA.' },
      { key: 'D', text: 'The sites were connected with the wrong cable type.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ค่า "reliability" ใน show interface\nแสดงเป็นเศษส่วนของ 255 คำนวณจากค่าเฉลี่ย 5 นาที\n• 255/255 = 100% → สมบูรณ์แบบ ไม่มี error เลย ⭐\n• ต่ำกว่า 255/255 → มี error/drop เกิดขึ้น ยิ่งต่ำยิ่งแย่\n\n🔍 เปรียบเทียบสองฝั่งใน exhibit:\n• SiteA: reliability 166/255 ⭐ = ประมาณ 65% เท่านั้น → มีข้อผิดพลาดจำนวนมากบนอินเทอร์เฟซนี้\n• SiteB: reliability 255/255 = 100% → ปกติดี\n\n🧮 ตรวจข้อมูลอื่นเพื่อตัดตัวเลือกอื่นออก:\n• ทั้งสองฝั่ง media type = SFP-LR ตรงกัน → ชนิด SFP ถูกต้องแล้ว\n• SFP-LR ออกแบบมาสำหรับ single-mode fiber → ตรงกับสายที่ใช้จริง\n• input rate 264 Mbps บนลิงก์ 10 Gbps ≈ 2.6% → ไม่ได้ใช้งานหนักเลย\n• txload/rxload = 1/255 → โหลดต่ำมาก\n\n✅ ทำไม A ถูก: ค่า reliability ที่ตกลงเหลือ 166/255 เฉพาะฝั่ง SiteA ชี้ว่ามี interface error สะสมเพิ่มขึ้นเรื่อย ๆ (มักเกิดจากหัวต่อสกปรก สายงอเกินรัศมี หรือระดับสัญญาณแสงต่ำ) ซึ่งทำให้แพ็กเก็ตเสียหายเป็นช่วง ๆ = การเชื่อมต่อติด ๆ ดับ ๆ\n\n❌ ทำไมข้ออื่นผิด:\nB. โหลดเพียง ~2.6% ของ 10 Gbps และ txload/rxload = 1/255 → ไม่ใช่ปัญหาความแออัด\nC. ทั้งสองฝั่งใช้ SFP-LR เหมือนกัน → ชนิดโมดูลตรงกัน\nD. SFP-LR คู่กับ single-mode fiber ถูกต้องแล้วตามที่โจทย์ระบุ\n\n📗 จำไว้สอบ: reliability 255/255 = ปกติ | ต่ำกว่านั้น = มี error • ปัญหาไฟเบอร์มักเกิดจากหัวต่อสกปรก/สายงอ/กำลังแสงต่ำ',
  },
  {
    id: 76,
    kind: 'single',
    prompt:
      'A network engineer must configure the router R1 GigabitEthernet1/1 interface to connect to the router R2 GigabitEthernet1/1 interface. For the configuration to be applied, the engineer must compress the address 2001:0db8:0000:0000:0500:000a:400F:583B. Which command must be issued on the interface?',
    options: [
      { key: 'A', text: 'ipv6 address 2001::db8:0000::500:a:400F:583B' },
      { key: 'B', text: 'ipv6 address 2001:db8:0::500:a:4F:583B' },
      { key: 'C', text: 'ipv6 address 2001:db8::500:a:400F:583B' },
      { key: 'D', text: 'ipv6 address 2001:0db8::5:a:4F:583B' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎการย่อที่อยู่ IPv6 มี 2 ข้อ\n1️⃣ ตัด "เลขศูนย์นำหน้า" ในแต่ละกลุ่มออกได้ (leading zeros) เช่น 0db8 → db8, 000a → a\n  ⚠️ ห้ามตัดศูนย์ที่อยู่ท้ายกลุ่ม เช่น 400F ตัดไม่ได้เลย และ 0500 → 500 (ตัดได้แค่ศูนย์หน้า)\n2️⃣ ใช้ "::" แทนกลุ่มที่เป็นศูนย์ทั้งหมดติดต่อกันได้ — แต่ใช้ได้ "เพียงครั้งเดียว" ต่อที่อยู่หนึ่ง ๆ\n  (ถ้าใช้สองครั้งจะตีความกลับไม่ได้ว่าแต่ละ :: แทนกี่กลุ่ม)\n\n🧮 ย่อทีละขั้นจาก 2001:0db8:0000:0000:0500:000a:400F:583B\n• ขั้นที่ 1 ตัดศูนย์นำหน้า → 2001:db8:0:0:500:a:400F:583B\n• ขั้นที่ 2 ยุบกลุ่มศูนย์ติดกัน (0:0) ด้วย :: → 2001:db8::500:a:400F:583B ⭐\n\n✅ ทำไม C ถูก: ตรงกับผลลัพธ์ที่ถูกต้องทุกกลุ่ม — ใช้ :: เพียงครั้งเดียว และไม่แตะต้องค่า 400F กับ 583B\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ "::" ถึงสองครั้ง (2001:: และ 0000::) → ผิดกฎเด็ดขาด IOS ปฏิเสธ\nB. เขียน 400F เป็น 4F → ผิด เพราะ 0 ตัวนี้อยู่กลางกลุ่ม ตัดไม่ได้ (4F หมายถึง 004F ซึ่งเป็นคนละค่า)\nD. ผิดสองจุด — เขียน 0500 เป็น 5 (ต้องเป็น 500) และเขียน 400F เป็น 4F\n\n📗 จำไว้สอบ: ตัดได้เฉพาะ "ศูนย์นำหน้า" ในกลุ่ม • :: ใช้ได้ครั้งเดียว • 0db8→db8 ✔ แต่ 400F→4F ✘',
  },
  {
    id: 77,
    kind: 'single',
    prompt: 'What is a network appliance that checks the state of a packet to determine whether the packet is legitimate?',
    options: [
      { key: 'A', text: 'Layer 2 switch' },
      { key: 'B', text: 'LAN controller' },
      { key: 'C', text: 'load balancer' },
      { key: 'D', text: 'firewall' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำสำคัญในโจทย์คือ "checks the state of a packet" ซึ่งชี้ตรงไปที่ Stateful Firewall\n\n🔥 Stateful inspection ทำงานอย่างไร:\n• ไฟร์วอลล์เก็บ "ตารางสถานะการเชื่อมต่อ" (state table / connection table) ของทุกเซสชันที่ผ่านเข้าออก\n• เมื่อโฮสต์ภายในเปิดการเชื่อมต่อออกไป ไฟร์วอลล์จะบันทึกไว้ แล้ว "อนุญาตทราฟฟิกขากลับของเซสชันนั้นโดยอัตโนมัติ"\n• แพ็กเก็ตที่วิ่งเข้ามาโดยไม่มีเซสชันรองรับ (ไม่ตรงกับ state ใดเลย) จะถูกทิ้งทันที → เป็นวิธีตรวจ "ความถูกต้องตามบริบท" ไม่ใช่แค่ดู header ทีละแพ็กเก็ต\n• ต่างจาก stateless ACL ที่ตรวจทีละแพ็กเก็ตโดยไม่จำอะไรเลย\n\n✅ ทำไม D ถูก: firewall (โดยเฉพาะแบบ stateful) คืออุปกรณ์ที่ตรวจสถานะของแพ็กเก็ตเพื่อตัดสินว่าถูกต้องหรือไม่\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ Layer 2 ดูแค่ MAC address ไม่รู้จักแม้แต่ IP ไม่ต้องพูดถึงสถานะการเชื่อมต่อ\nB. WLC จัดการ AP และไคลเอนต์ไร้สาย ไม่ใช่ตัวตรวจสอบความถูกต้องของแพ็กเก็ต\nC. load balancer กระจายภาระไปยังเซิร์ฟเวอร์หลายตัว (แม้บางรุ่นจะมีฟีเจอร์ความปลอดภัยเสริม แต่ไม่ใช่หน้าที่หลัก)\n\n📗 จำไว้สอบ: firewall = แบ่งโซน (inside/outside/DMZ) + stateful inspection | IPS = ตรวจ signature/พฤติกรรมการโจมตี',
  },
  {
    id: 78,
    kind: 'single',
    prompt: 'What is a role of access points in an enterprise network?',
    options: [
      { key: 'A', text: 'integrate with SNMP in preventing DDoS attacks' },
      { key: 'B', text: 'serve as a first line of defense in an enterprise network' },
      { key: 'C', text: 'connect wireless devices to a wired network' },
      { key: 'D', text: 'support secure user logins to devices on the network' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Access Point (AP) คือสะพานเชื่อมระหว่างโลกไร้สายกับโลกมีสาย\n• รับเฟรม 802.11 (ไร้สาย) จากไคลเอนต์ → แปลงเป็นเฟรม 802.3 (Ethernet) → ส่งเข้าเครือข่ายมีสาย และทำย้อนกลับในทิศตรงข้าม ⭐\n• ทำงานหลักที่ Layer 1 และ Layer 2\n• สร้าง BSS (Basic Service Set) ระบุด้วย BSSID = MAC ของวิทยุ AP และประกาศชื่อ SSID ให้ไคลเอนต์เห็น\n• ประเภท: Autonomous AP (ทำงานเอง คอนฟิกทีละตัว) กับ Lightweight AP (ทำงานร่วมกับ WLC ผ่าน CAPWAP)\n\n✅ ทำไม C ถูก: บทบาทหลักและนิยามของ AP คือการนำอุปกรณ์ไร้สายเข้าสู่เครือข่ายมีสาย\n\n❌ ทำไมข้ออื่นผิด:\nA. การป้องกัน DDoS เป็นหน้าที่ของ firewall/IPS/บริการ scrubbing — ส่วน SNMP เป็นเพียงโปรโตคอลเฝ้าติดตาม ไม่ได้ป้องกันการโจมตี\nB. "ด่านแรกของการป้องกัน" คือ firewall ที่ขอบเครือข่าย ไม่ใช่ AP\nD. การยืนยันตัวตนผู้ใช้เป็นหน้าที่ของ AAA server (RADIUS/TACACS+/ISE) — AP เพียงส่งต่อคำขอ 802.1X ไปให้เท่านั้น\n\n📗 จำไว้สอบ: AP = แปลง 802.11 ↔ 802.3 (สะพานไร้สาย-มีสาย) • autonomous = ทำงานเอง | lightweight = ต้องมี WLC',
  },
  {
    id: 79,
    kind: 'single',
    prompt:
      'An implementer is preparing hardware for virtualization to create virtual machines on a host. What is needed to provide communication between hardware and virtual machines?',
    options: [
      { key: 'A', text: 'router' },
      { key: 'B', text: 'hypervisor' },
      { key: 'C', text: 'switch' },
      { key: 'D', text: 'straight cable' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Hypervisor คือชั้นซอฟต์แวร์ที่คั่นกลางระหว่าง "ฮาร์ดแวร์จริง" กับ "เครื่องเสมือน"\n\n🔧 หน้าที่ของ hypervisor:\n• จำลองฮาร์ดแวร์ (CPU, RAM, storage, NIC) ให้ VM แต่ละตัวเห็นว่าตัวเองมีเครื่องครบชุด\n• จัดสรรและจัดคิวการใช้ทรัพยากรจริงให้ VM แต่ละตัวอย่างเป็นธรรม\n• แยก VM ออกจากกัน (isolation) — VM หนึ่งล่มไม่กระทบตัวอื่น\n• มี virtual switch (vSwitch) ภายในให้ VM สื่อสารกันเองและออกสู่เครือข่ายภายนอกผ่าน NIC จริง\n\n📂 ประเภท:\n• Type 1 (bare-metal) → ติดตั้งบนฮาร์ดแวร์โดยตรง: VMware ESXi, Microsoft Hyper-V, KVM, Xen → ประสิทธิภาพสูง ใช้ในดาต้าเซ็นเตอร์\n• Type 2 (hosted) → ติดตั้งบน OS อีกชั้น: VMware Workstation, VirtualBox, Parallels → ใช้บนเครื่องส่วนตัว\n\n✅ ทำไม B ถูก: hypervisor คือองค์ประกอบเดียวที่ทำให้ VM เข้าถึงและสื่อสารกับฮาร์ดแวร์จริงของโฮสต์ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. เราเตอร์เชื่อมเครือข่ายที่ต่างกัน ไม่เกี่ยวกับการเข้าถึงฮาร์ดแวร์ภายในโฮสต์\nC. สวิตช์กายภาพเชื่อมอุปกรณ์เข้าด้วยกัน — ส่วนภายในโฮสต์ใช้ vSwitch ซึ่งเป็นฟีเจอร์ "ของ hypervisor" อยู่แล้ว\nD. สายแลนเป็นเพียงตัวกลางทางกายภาพ ไม่ได้ทำให้เกิด virtualization\n\n📗 จำไว้สอบ: hypervisor = ชั้นกลางระหว่างฮาร์ดแวร์กับ VM • Type 1 = bare-metal | Type 2 = hosted',
  },
  {
    id: 80,
    kind: 'single',
    prompt: 'How does a Cisco Unified Wireless Network respond to Wi-Fi channel overlap?',
    options: [
      { key: 'A', text: 'It allows the administrator to assign the channels on a per-device or per-interface basis.' },
      { key: 'B', text: 'It segregates devices from different manufacturers onto different channels.' },
      { key: 'C', text: 'It analyzes client load and background noise and dynamically assigns a channel.' },
      { key: 'D', text: 'It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — RRM (Radio Resource Management) บน Cisco WLC\nเป็นระบบที่ปรับพารามิเตอร์วิทยุของ AP ทุกตัวโดยอัตโนมัติ ประกอบด้วย 3 อัลกอริทึมหลัก:\n\n1️⃣ DCA (Dynamic Channel Assignment) ⭐ → เลือกช่องสัญญาณให้ AP แต่ละตัวอัตโนมัติ\n  พิจารณาจาก: สัญญาณรบกวน (noise floor), การรบกวนจากอุปกรณ์ Wi-Fi และไม่ใช่ Wi-Fi, ภาระของไคลเอนต์, การใช้งาน airtime, และช่องที่ AP ข้างเคียงใช้อยู่\n2️⃣ TPC (Transmit Power Control) → ปรับกำลังส่งเพื่อควบคุมขนาดเซลล์ไม่ให้ทับกันมากเกินไป\n3️⃣ CHDM (Coverage Hole Detection and Mitigation) → ตรวจจุดอับสัญญาณแล้วเพิ่มกำลังส่งของ AP ที่เกี่ยวข้อง\n\n✅ ทำไม C ถูก: DCA วิเคราะห์ทั้งภาระของไคลเอนต์และสัญญาณรบกวนพื้นหลัง แล้วกำหนดช่องให้อัตโนมัติ — เป็นวิธีที่ระบบ Cisco Unified Wireless ตอบสนองต่อปัญหาช่องทับซ้อน\n\n❌ ทำไมข้ออื่นผิด:\nA. การตั้งช่องเองทีละตัวทำได้ก็จริง (static channel) แต่นั่นคือการ "ปิด" RRM — ไม่ใช่วิธีที่ระบบตอบสนองอัตโนมัติ\nB. RRM ไม่สนใจยี่ห้อของอุปกรณ์เลย — พิจารณาเฉพาะสภาพคลื่นวิทยุ\nD. AP ไม่ได้สลับไปมาระหว่าง 2.4 GHz และ 5 GHz — AP ส่วนใหญ่มีวิทยุทั้งสองย่านทำงานพร้อมกันอยู่แล้ว\n\n📗 จำไว้สอบ: RRM = DCA (เลือกช่อง) + TPC (ปรับกำลังส่ง) + CHDM (อุดจุดอับ)',
  },
  {
    id: 81,
    kind: 'single',
    prompt: 'In which situation is private IPv4 addressing appropriate for a new subnet on the network of an organization?',
    options: [
      { key: 'A', text: 'The network has multiple endpoint listeners, and it is desired to limit the number of broadcasts.' },
      { key: 'B', text: 'The ISP requires the new subnet to be advertised to the Internet for web services.' },
      { key: 'C', text: 'There is limited unique address space, and traffic on the new subnet will stay local within the organization.' },
      { key: 'D', text: 'Traffic on the subnet must traverse a site-to-site VPN to an outside organization.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เมื่อไหร่ควรใช้ที่อยู่ส่วนตัว (RFC 1918)\nเงื่อนไขที่เหมาะสมมี 2 ข้อประกอบกัน:\n1️⃣ พื้นที่ที่อยู่ public มีจำกัด (ซึ่งเป็นความจริงเสมอสำหรับ IPv4 ที่หมดไปแล้ว)\n2️⃣ ทราฟฟิกของซับเน็ตนั้น "อยู่ภายในองค์กร" ไม่ต้องให้คนภายนอกเข้าถึงโดยตรง ⭐\n\n✅ ทำไม C ถูก: ตรงกับทั้งสองเงื่อนไขพอดี — มี public IP จำกัด และทราฟฟิกอยู่ภายในองค์กร จึงไม่มีเหตุผลใดที่ต้องเปลือง public IP กับซับเน็ตนี้\n\n❌ ทำไมข้ออื่นผิด:\nA. การจำกัดจำนวน broadcast ทำได้ด้วยการแบ่ง VLAN/ซับเน็ตให้เล็กลง ไม่เกี่ยวว่าจะใช้ที่อยู่ private หรือ public\nB. ถ้าต้องประกาศซับเน็ตออกอินเทอร์เน็ตเพื่อให้บริการเว็บ ต้องใช้ "public IP" เท่านั้น — ที่อยู่ private ประกาศบนอินเทอร์เน็ตไม่ได้เลย\nD. ที่อยู่ private วิ่งผ่าน site-to-site VPN ได้ก็จริง (นิยมทำด้วยซ้ำ) แต่การมี VPN ไม่ใช่ "เหตุผล" ที่ทำให้เลือกใช้ private address — และยังเสี่ยงเรื่องที่อยู่ทับซ้อนกับองค์กรปลายทางอีก\n\n📗 จำไว้สอบ: ทราฟฟิกอยู่ภายใน → private IP | ต้องให้คนนอกเข้าถึง/ประกาศออกเน็ต → public IP',
  },
  {
    id: 82,
    kind: 'drag',
    image: v2q82,
    prompt: 'Drag and drop the characteristics of network architectures from the left onto the type of architecture on the right.',
    categories: [
      {
        name: 'Collapsed Core',
        items: [
          'single device handles the core and the distribution layer',
          'more cost-effective than other options',
          'most appropriate for small network designs',
        ],
      },
      {
        name: 'Three-Tier',
        items: ['enhances network availability', 'separate devices handle the core and the distribution layer'],
      },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบสถาปัตยกรรม 2 ชั้น กับ 3 ชั้น\n\n🔹 Collapsed Core (2-tier: Collapsed core + Access)\n• single device handles the core and the distribution layer ⭐ → ยุบสองชั้นมารวมบนอุปกรณ์เดียว\n• more cost-effective than other options ⭐ → ซื้ออุปกรณ์น้อยลง ใช้พื้นที่และไฟน้อยลง ดูแลง่ายกว่า\n• most appropriate for small network designs ⭐ → เหมาะกับไซต์เดียว/อาคารเดียว ที่ไม่คาดว่าจะขยายมาก\n• ข้อจำกัด: ขยายตัวได้จำกัด และอุปกรณ์ตัวเดียวต้องแบกทั้งงานสลับความเร็วสูงและงานนโยบาย\n\n🔹 Three-Tier (Core + Distribution + Access)\n• separate devices handle the core and the distribution layer ⭐ → แยกอุปกรณ์ชัดเจนตามหน้าที่\n• enhances network availability ⭐ → มีชั้นและเส้นทางสำรองมากกว่า อุปกรณ์ตัวใดล้มก็ยังมีทางอื่น\n• เหมาะกับองค์กรใหญ่ หลายอาคาร ที่ต้องการขยายตัวและมี uptime สูง\n• ข้อแลกเปลี่ยน: ราคาสูงและซับซ้อนกว่า\n\n📗 จำไว้สอบ: เล็ก/ประหยัด → collapsed core (2 ชั้น) | ใหญ่/ทนทาน/ขยายได้ → three-tier',
  },
  {
    id: 83,
    kind: 'single',
    prompt: 'Which 802.11 frame type is indicated by a probe response after a client sends a probe request?',
    options: [
      { key: 'A', text: 'data' },
      { key: 'B', text: 'management' },
      { key: 'C', text: 'control' },
      { key: 'D', text: 'action' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กระบวนการที่ไคลเอนต์เข้าร่วมเครือข่ายไร้สาย (ทุกขั้นตอนใช้ management frame)\n\n1️⃣ Discovery — ค้นหาเครือข่าย\n  • Passive scanning: รอฟัง Beacon ที่ AP ประกาศทุก ~100 ms\n  • Active scanning: ไคลเอนต์ส่ง Probe Request ออกไปถาม → AP ตอบด้วย Probe Response ⭐ (แจ้ง SSID, อัตราความเร็วที่รองรับ, ความสามารถด้านความปลอดภัย)\n2️⃣ Authentication — ยืนยันตัวตนเบื้องต้น (Open System / Shared Key)\n3️⃣ Association — ขอเข้าเป็นสมาชิก BSS (Association Request/Response)\n4️⃣ จากนั้นจึงเริ่มรับส่ง Data frame ได้\n\n🔍 เฟรม 802.11 มี 3 ชนิด:\n• Management → Beacon, Probe Req/Resp, Auth, Assoc, Deauth, Disassoc, Action\n• Control → RTS, CTS, ACK, PS-Poll, Block ACK\n• Data → ข้อมูลผู้ใช้จริง\n\n✅ ทำไม B ถูก: Probe Response เป็นส่วนหนึ่งของกระบวนการค้นหาและเข้าร่วมเครือข่าย จึงเป็น management frame\n\n❌ ทำไมข้ออื่นผิด:\nA. data frame บรรทุกข้อมูลผู้ใช้ ซึ่งเกิดขึ้นหลังจาก associate สำเร็จแล้วเท่านั้น\nC. control frame ควบคุมจังหวะการเข้าถึงสื่อกลาง (RTS/CTS/ACK) ไม่เกี่ยวกับการค้นหาเครือข่าย\nD. action เป็นเฟรมย่อยชนิดหนึ่งใต้กลุ่ม management (ใช้กับ 802.11k/v, block ACK) แต่ไม่ใช่ชนิดของ Probe Response\n\n📗 จำไว้สอบ: Beacon / Probe / Auth / Assoc / Deauth = management frame ทั้งหมด',
  },
  {
    id: 84,
    kind: 'single',
    prompt: 'What is the difference in data transmission delivery and reliability between TCP and UDP?',
    options: [
      {
        key: 'A',
        text: 'TCP transmits data at a higher rate and ensures packet delivery. UDP retransmits lost data to ensure applications receive the data on the remote end.',
      },
      {
        key: 'B',
        text: 'TCP requires the connection to be established before transmitting data. UDP transmits data at a higher rate without ensuring packet delivery.',
      },
      {
        key: 'C',
        text: 'UDP sets up a connection between both devices before transmitting data. TCP uses the three-way handshake to transmit data with a reliable connection.',
      },
      {
        key: 'D',
        text: 'UDP is used for multicast and broadcast communication. TCP is used for unicast communication and transmits data at a higher rate with error checking.',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ TCP กับ UDP ในสองมิติที่โจทย์ถาม\n\n🔹 การส่งข้อมูล (delivery):\n• TCP → ต้อง "สร้างการเชื่อมต่อก่อน" ด้วย 3-way handshake (SYN → SYN-ACK → ACK) ⭐\n• UDP → ส่งดาต้าแกรมออกไปได้ทันที ไม่มีการเชื่อมต่อ ⭐\n\n🔹 ความน่าเชื่อถือ (reliability):\n• TCP → มี ACK + retransmission + sequencing → รับประกันว่าข้อมูลถึงครบและเรียงถูก\n• UDP → best-effort ไม่การันตีอะไรเลย แต่แลกมาด้วยความเร็วและ latency ที่ต่ำกว่า ⭐\n\n✅ ทำไม B ถูก: อธิบายถูกทั้งสองด้าน — TCP ต้อง handshake ก่อนส่ง ส่วน UDP ส่งได้เร็วกว่าโดยไม่รับประกันการถึงปลายทาง\n\n❌ ทำไมข้ออื่นผิด:\nA. กลับด้าน — UDP ต่างหากที่ส่งได้อัตราสูงกว่า และ UDP ไม่มี retransmission เลย (นั่นเป็นของ TCP)\nC. สลับกันทั้งหมด — UDP ไม่มีการสร้างการเชื่อมต่อ ส่วน 3-way handshake เป็นของ TCP\nD. ผิดสองชั้น: (1) TCP ไม่ได้ส่งเร็วกว่า UDP (2) แม้ UDP จะเป็นตัวเลือกเดียวสำหรับ multicast/broadcast แต่ก็ใช้กับ unicast ได้มากมาย (DNS, DHCP, VoIP) จึงไม่ใช่การแบ่งที่ถูกต้อง\n\n📗 จำไว้สอบ: TCP = handshake + เชื่อถือได้ + ช้ากว่า | UDP = ไม่มี handshake + ไม่การันตี + เร็วกว่า',
  },
  {
    id: 85,
    kind: 'single',
    image: v2q85,
    prompt:
      'Refer to the exhibit. When PC-A sends traffic to PC-B, which network component is in charge of receiving the packet from PC-A, verifying the IP addresses, and forwarding the packet to PC-B?',
    options: [
      { key: 'A', text: 'router' },
      { key: 'B', text: 'Layer 2 switch' },
      { key: 'C', text: 'load balancer' },
      { key: 'D', text: 'firewall' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ตรวจก่อนว่าต้นทางกับปลายทางอยู่ซับเน็ตเดียวกันหรือไม่\n\n🔍 อ่าน exhibit:\n• PC-A = 10.10.10.0 / 255.255.255.0 → อยู่ในเครือข่าย 10.10.10.0/24\n• PC-B = 10.10.100.0 / 255.255.255.0 → อยู่ในเครือข่าย 10.10.100.0/24\n→ octet ที่ 3 ต่างกัน (10 กับ 100) และ mask เป็น /24 → "คนละซับเน็ต" ⭐\n\n💡 เมื่อปลายทางอยู่คนละซับเน็ต:\n1️⃣ PC-A ส่งแพ็กเก็ตไปที่ default gateway (เราเตอร์) โดยใช้ MAC ของเราเตอร์เป็นปลายทางในเฟรม\n2️⃣ เราเตอร์อ่าน destination IP → ค้นตารางเราต์ → เลือกอินเทอร์เฟซขาออก ⭐\n3️⃣ เราเตอร์เขียน MAC ใหม่ (source = ตัวเอง, destination = PC-B) แล้วส่งออกไป\n→ กระบวนการ "ตรวจสอบ IP address แล้วส่งต่อ" คือหน้าที่ของอุปกรณ์ Layer 3 = เราเตอร์\n\n✅ ทำไม A ถูก: เพราะทั้งสองเครื่องอยู่คนละซับเน็ต จึงต้องมีเราเตอร์เป็นผู้ตรวจ IP และส่งต่อ\n\n❌ ทำไมข้ออื่นผิด:\nB. สวิตช์ Layer 2 ดูเฉพาะ MAC address ไม่ตรวจ IP และส่งข้ามซับเน็ตไม่ได้\nC. load balancer กระจายทราฟฟิกไปยังเซิร์ฟเวอร์หลายตัว ไม่ใช่บทบาทในผังนี้\nD. firewall กรองทราฟฟิกตามนโยบาย — ในผังนี้อุปกรณ์กลางคือเราเตอร์ที่ทำหน้าที่ routing\n\n📗 จำไว้สอบ: ซับเน็ตเดียวกัน → สวิตช์พอ | คนละซับเน็ต → ต้องมีเราเตอร์/L3 switch',
  },
  {
    id: 86,
    kind: 'single',
    prompt: 'What is the maximum bandwidth of a T1 point-to-point connection?',
    options: [
      { key: 'A', text: '1.544 Mbps' },
      { key: 'B', text: '2.048 Mbps' },
      { key: 'C', text: '34.368 Mbps' },
      { key: 'D', text: '43.7 Mbps' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — มาตรฐานวงจรดิจิทัลแบบ leased line (ตัวเลขที่ต้องจำ)\n\n🇺🇸 มาตรฐานอเมริกาเหนือ/ญี่ปุ่น (T-carrier):\n• T1 = 1.544 Mbps ⭐ → ประกอบด้วย 24 ช่อง DS0 × 64 kbps + 8 kbps framing\n  (24 × 64,000 = 1,536,000 + 8,000 = 1,544,000 bps)\n• T3 = 44.736 Mbps → เทียบเท่า 28 T1\n\n🇪🇺 มาตรฐานยุโรป (E-carrier):\n• E1 = 2.048 Mbps → 32 ช่อง × 64 kbps (ใช้ 30 ช่องสำหรับข้อมูล)\n• E3 = 34.368 Mbps\n\n✅ ทำไม A ถูก: T1 มีแบนด์วิดท์ 1.544 Mbps ตามมาตรฐาน\n\n❌ ทำไมข้ออื่นผิด:\nB. 2.048 Mbps = E1 (มาตรฐานยุโรป) ไม่ใช่ T1\nC. 34.368 Mbps = E3\nD. 43.7 Mbps ใกล้เคียง T3 แต่ค่าจริงคือ 44.736 Mbps\n\n💡 เกร็ด: DS0 = 64 kbps คือหน่วยพื้นฐาน มาจากการเข้ารหัสเสียงโทรศัพท์ (สุ่มตัวอย่าง 8,000 ครั้ง/วินาที × 8 บิต)\n\n📗 จำไว้สอบ: T1=1.544 | E1=2.048 | T3=44.736 | E3=34.368 | DS0=64 kbps',
  },
  {
    id: 87,
    kind: 'multi',
    prompt: 'What are two similarities between UTP Cat 5e and Cat 6a cabling? (Choose two.)',
    options: [
      { key: 'A', text: 'Both support speeds up to 10 Gigabit.' },
      { key: 'B', text: 'Both support speeds of at least 1 Gigabit.' },
      { key: 'C', text: 'Both support runs of up to 55 meters.' },
      { key: 'D', text: 'Both support runs of up to 100 meters.' },
      { key: 'E', text: 'Both operate at a frequency of 500 MHz.' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — สเปกสายทองแดง UTP แต่ละหมวด\n\n| หมวด | ความเร็วสูงสุด | ระยะสูงสุด | ความถี่ |\n| Cat 5e | 1 Gbps | 100 m | 100 MHz |\n| Cat 6  | 1 Gbps (10 Gbps ได้แค่ 55 m) | 100 m | 250 MHz |\n| Cat 6a | 10 Gbps | 100 m | 500 MHz |\n| Cat 7  | 10 Gbps | 100 m | 600 MHz |\n\n💡 จุดสำคัญ: มาตรฐาน Ethernet บนสายทองแดงกำหนดระยะสูงสุดไว้ที่ 100 เมตรเสมอ (90 m ในผนัง + 10 m สาย patch) ไม่ว่าจะเป็นหมวดใด\n\n✅ ทำไม B ถูก: ทั้ง Cat 5e และ Cat 6a รองรับความเร็วอย่างน้อย 1 Gbps (Cat 5e ได้ 1G, Cat 6a ได้ถึง 10G ซึ่ง "อย่างน้อย 1G" จึงเป็นจริงทั้งคู่)\n✅ ทำไม D ถูก: ทั้งสองหมวดรองรับระยะสูงสุด 100 เมตรเท่ากัน\n\n❌ ทำไมข้ออื่นผิด:\nA. Cat 5e รองรับได้เพียง 1 Gbps ไม่ถึง 10 Gbps (Cat 6a เท่านั้นที่ได้ 10G เต็มระยะ)\nC. 55 เมตรเป็นข้อจำกัดเฉพาะของ Cat 6 เมื่อรัน 10 Gbps ไม่ใช่ระยะของทั้งสองหมวดนี้\nE. 500 MHz เป็นความถี่ของ Cat 6a เท่านั้น ส่วน Cat 5e อยู่ที่ 100 MHz\n\n📗 จำไว้สอบ: Cat5e=1G/100MHz | Cat6=1G ทั่วไป, 10G ที่ 55m/250MHz | Cat6a=10G/100m/500MHz • ทุกหมวดระยะสูงสุด 100 m',
  },
  {
    id: 88,
    kind: 'single',
    prompt: 'What is a characteristic of a cloud-based network topology?',
    options: [
      { key: 'A', text: 'onsite network services are provided with physical Layer 2 and Layer 3 components' },
      { key: 'B', text: 'wireless connections provide the sole access method to services' },
      { key: 'C', text: 'physical workstations are configured to share resources' },
      { key: 'D', text: 'services are provided by a public, private, or hybrid deployment' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — รูปแบบการติดตั้งคลาวด์ (deployment models) มี 4 แบบ\n\n1️⃣ Public cloud → ผู้ให้บริการเป็นเจ้าของโครงสร้างพื้นฐาน เปิดให้ลูกค้าหลายรายใช้ร่วมกัน (multi-tenant) เช่น AWS, Azure, GCP\n2️⃣ Private cloud → สร้างและใช้ภายในองค์กรเดียว (หรือให้ผู้ให้บริการดูแลแบบเฉพาะ) ควบคุมได้เต็มที่ เหมาะกับงานที่มีข้อกำหนดด้านความปลอดภัย/กฎระเบียบ\n3️⃣ Hybrid cloud → ผสมทั้งสองแบบ เชื่อมกันด้วยเทคโนโลยีที่ทำให้ย้ายข้อมูล/แอปข้ามไปมาได้ (เช่น เก็บข้อมูลอ่อนไหวไว้ private แต่ยืดหยุ่นด้วย public ตอนโหลดพุ่ง)\n4️⃣ Community cloud → หลายองค์กรที่มีความต้องการร่วมกันใช้ด้วยกัน (เช่น กลุ่มโรงพยาบาล)\n\n✅ ทำไม D ถูก: การให้บริการผ่านรูปแบบ public, private หรือ hybrid คือลักษณะเด่นที่นิยามโทโพโลยีแบบคลาวด์\n\n❌ ทำไมข้ออื่นผิด:\nA. การมีอุปกรณ์ L2/L3 กายภาพในสถานที่คือลักษณะของเครือข่ายแบบ on-premises ดั้งเดิม ตรงข้ามกับคลาวด์\nB. คลาวด์เข้าถึงได้ทุกช่องทาง — สายแลน, Wi-Fi, VPN, MPLS, Direct Connect — ไม่ได้จำกัดเฉพาะไร้สาย\nC. การให้เวิร์กสเตชันแชร์ทรัพยากรกันคือโมเดล peer-to-peer ไม่ใช่คลาวด์\n\n📗 จำไว้สอบ: deployment = public/private/hybrid/community • service = IaaS/PaaS/SaaS • คุณลักษณะ NIST 5 ข้อ: self-service, broad network access, resource pooling, rapid elasticity, measured service',
  },
  {
    id: 89,
    kind: 'single',
    prompt: 'Which network action occurs within the data plane?',
    options: [
      { key: 'A', text: 'reply to an incoming ICMP echo request' },
      { key: 'B', text: 'make a configuration change from an incoming NETCONF RPC' },
      { key: 'C', text: 'run routing protocols (OSPF, EIGRP, RIP, BGP)' },
      { key: 'D', text: 'compare the destination IP address to the IP routing table' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แยกงานตาม plane\n\n🔹 Data plane (forwarding plane) ⭐ — จัดการทราฟฟิกที่ "วิ่งผ่าน" อุปกรณ์ ทำที่ ASIC เพื่อความเร็ว\n  • เทียบ destination IP กับ routing table/FIB แล้วส่งออกอินเทอร์เฟซที่เหมาะสม ⭐\n  • เทียบ destination MAC กับตาราง CAM\n  • เพิ่ม/ถอด 802.1Q tag, ทำ NAT, บังคับ ACL, ลด TTL\n\n🔹 Control plane — สร้าง "ตาราง" ให้ data plane ใช้\n  • รันโปรโตคอลเราต์ติ้ง (OSPF/EIGRP/BGP/RIP), STP, ARP, CDP/LLDP\n\n🔹 Management plane — ดูแลตัวอุปกรณ์เอง\n  • SSH/Telnet, SNMP, NETCONF/RESTCONF, syslog, NTP\n\n⚠️ กับดักที่ต้องระวัง: ทราฟฟิกที่ "ปลายทางคือตัวอุปกรณ์เอง" (เช่น ping ไปที่เราเตอร์, SSH เข้าเราเตอร์) จะถูกส่งขึ้นไปให้ CPU ประมวลผล = ไม่ใช่ data plane\n\n✅ ทำไม D ถูก: การเทียบ destination IP กับตารางเราต์เพื่อตัดสินใจส่งต่อ คือหัวใจของ data plane\n\n❌ ทำไมข้ออื่นผิด:\nA. การตอบ ICMP echo request หมายถึงแพ็กเก็ตนั้นมีปลายทางเป็นตัวอุปกรณ์เอง → CPU/control plane ประมวลผล ไม่ใช่การ forward ผ่าน\nB. NETCONF RPC ที่เข้ามาเปลี่ยนคอนฟิก = management plane\nC. การรันโปรโตคอลเราต์ติ้ง = control plane\n\n📗 จำไว้สอบ: ทราฟฟิก "ผ่าน" อุปกรณ์ = data plane | ทราฟฟิก "ถึง" อุปกรณ์ = control/management plane',
  },
  {
    id: 90,
    kind: 'single',
    image: v2q90,
    prompt:
      'Refer to the exhibit. R1 has just received a packet from host A that is destined to host B. Which route in the routing table is used by R1 to reach host B?',
    options: [
      { key: 'A', text: '10.10.13.0/25 [1/0] via 10.10.10.2' },
      { key: 'B', text: '10.10.13.0/25 [108/0] via 10.10.10.10' },
      { key: 'C', text: '10.10.13.0/25 [110/2] via 10.10.10.6' },
      { key: 'D', text: '10.10.13.0/25 [110/2] via 10.10.10.2' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เมื่อมีหลายเส้นทางไปยัง prefix "เดียวกัน" เราเตอร์จะเลือกด้วย Administrative Distance ต่ำสุด\n(ถ้า prefix ต่างกัน ให้ใช้ longest prefix match ก่อน — แต่ข้อนี้ทุกเส้นเป็น 10.10.13.0/25 เหมือนกันหมด)\n\n🔍 อ่านคอนฟิกใน exhibit — Host B = 10.10.13.10/25 อยู่ในเครือข่าย 10.10.13.0/25:\n• ip route 0.0.0.0 0.0.0.0 10.10.10.2 → default route (prefix /0 สั้นที่สุด ใช้เป็นทางเลือกสุดท้ายเท่านั้น)\n• ip route 10.10.13.0 255.255.255.128 10.10.10.2 111 → static, AD = 111\n• ip route 10.10.13.0 255.255.255.128 10.10.10.6 112 → static, AD = 112\n• ip route 10.10.13.0 255.255.255.128 10.10.10.10 108 → static, AD = 108 ⭐\n• router ospf 1 (เรียนรู้ 10.10.13.0/25 มาด้วย) → AD = 110\n\n🧮 เปรียบเทียบ AD ของทุกเส้นที่ชี้ไป 10.10.13.0/25:\n  108 < 110 < 111 < 112 → ผู้ชนะคือ static route ที่ตั้ง AD 108 ผ่าน next hop 10.10.10.10\n\n✅ ทำไม B ถูก: AD 108 ต่ำที่สุด จึงเป็นเส้นทางเดียวที่ถูกติดตั้งลงตารางเราต์และใช้ส่งแพ็กเก็ตไป Host B\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มี static route เส้นใดใช้ AD ค่าเริ่มต้น 1 เลย — ทุกเส้นถูกระบุ AD เองทั้งหมด (111, 112, 108)\nC, D. AD 110 เป็นของ OSPF ซึ่งแพ้ static ที่ตั้ง AD 108\n\n💡 บทเรียนสำคัญ: static route ไม่ได้มี AD = 1 เสมอไป — ถ้าเติมตัวเลขท้ายคำสั่ง ค่านั้นจะแทนที่ค่าเริ่มต้นทันที (เทคนิคนี้เรียกว่า floating static route)\n\n📗 จำไว้สอบ: prefix เท่ากัน → AD ต่ำสุดชนะ • AD: Connected 0, Static 1, eBGP 20, EIGRP 90, OSPF 110, RIP 120, iBGP 200',
  },
  {
    id: 91,
    kind: 'multi',
    prompt: 'Which two network actions occur within the data plane? (Choose two.)',
    options: [
      { key: 'A', text: 'Run routing protocols.' },
      { key: 'B', text: 'Make a configuration change from an incoming NETCONF RPC.' },
      { key: 'C', text: 'Add or remove an 802.1Q trunking header.' },
      { key: 'D', text: 'Match the destination MAC address to the MAC address table.' },
      { key: 'E', text: 'Reply to an incoming ICMP echo request.' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — Data plane คือทุกอย่างที่ทำกับทราฟฟิกที่ "วิ่งผ่าน" อุปกรณ์ ประมวลผลด้วยฮาร์ดแวร์ (ASIC) เพื่อความเร็วสูงสุด\n\n🔹 งานที่อยู่ใน data plane:\n• เทียบ destination MAC กับตาราง CAM แล้วเลือกพอร์ตขาออก ⭐\n• เทียบ destination IP กับ FIB แล้วเลือกอินเทอร์เฟซขาออก\n• เพิ่ม/ถอด 802.1Q VLAN tag ตอนเข้า-ออกพอร์ต trunk ⭐\n• encapsulate/de-encapsulate, ทำ NAT, บังคับ ACL, ลด TTL, ทำ QoS queueing\n\n🔹 งานที่ "ไม่ใช่" data plane:\n• Control plane → รันโปรโตคอลเราต์ติ้ง, STP, ARP, CDP/LLDP (สร้างตารางให้ data plane)\n• Management plane → SSH, SNMP, NETCONF, syslog (จัดการตัวอุปกรณ์)\n• ทราฟฟิกที่ปลายทางเป็นตัวอุปกรณ์เอง (เช่น ping มาหาเราเตอร์) → ต้องขึ้น CPU ประมวลผล\n\n✅ ทำไม C ถูก: การเพิ่ม/ถอด VLAN tag เกิดกับเฟรมที่วิ่งผ่านพอร์ต trunk ทำที่ฮาร์ดแวร์ = data plane\n✅ ทำไม D ถูก: การค้นตาราง MAC เพื่อตัดสินใจส่งต่อคือหน้าที่พื้นฐานของ data plane\n\n❌ ทำไมข้ออื่นผิด:\nA. โปรโตคอลเราต์ติ้ง = control plane\nB. NETCONF RPC = management plane\nE. ICMP echo request ที่ส่งมาหาอุปกรณ์เอง → CPU ตอบ ไม่ใช่การ forward ผ่าน\n\n📗 จำไว้สอบ: data = ผ่าน (forward/tag/NAT/ACL) | control = สร้างตาราง | management = ดูแลอุปกรณ์',
  },
  {
    id: 92,
    kind: 'single',
    prompt: 'What are network endpoints?',
    options: [
      { key: 'A', text: 'support inter-VLAN connectivity' },
      { key: 'B', text: 'a threat to the network if they are compromised' },
      { key: 'C', text: 'act as routers to connect a user to the service provider network' },
      { key: 'D', text: 'enforce policies for campus-wide traffic going to the Internet' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Endpoint คืออุปกรณ์ปลายทางที่เชื่อมต่อเข้าเครือข่ายและผู้ใช้ใช้งานโดยตรง\n• ตัวอย่าง: พีซี โน้ตบุ๊ก สมาร์ตโฟน แท็บเล็ต IP phone เครื่องพิมพ์ กล้อง IP อุปกรณ์ IoT\n• เป็น "ต้นทางหรือปลายทาง" ของการสื่อสาร ไม่ได้ทำหน้าที่ส่งต่อให้ใคร (ต่างจากสวิตช์/เราเตอร์ที่เป็น intermediary device)\n\n🔐 มุมมองด้านความปลอดภัย (ซึ่งเป็นสิ่งที่โจทย์เน้น):\n• Endpoint คือ "จุดอ่อนที่สุด" ของเครือข่าย เพราะอยู่ในมือผู้ใช้ทั่วไปที่อาจเผลอคลิกลิงก์ phishing หรือเสียบ USB แปลกปลอม\n• เมื่อ endpoint ถูกยึด ผู้โจมตีจะได้ที่มั่นภายในเครือข่ายทันที แล้วขยายผลต่อ (lateral movement) ไปหาเซิร์ฟเวอร์และข้อมูลสำคัญ ⭐\n• จึงต้องป้องกันด้วย antivirus/EDR, การแพตช์สม่ำเสมอ, 802.1X, NAC, การเข้ารหัสดิสก์ และการอบรมผู้ใช้\n\n✅ ทำไม B ถูก: endpoint เป็นภัยคุกคามต่อเครือข่ายทันทีเมื่อถูกเจาะ — เป็นเหตุผลที่ endpoint security เป็นหัวข้อสำคัญใน CCNA\n\n❌ ทำไมข้ออื่นผิด:\nA. การเชื่อมต่อระหว่าง VLAN เป็นหน้าที่ของเราเตอร์หรือ L3 switch\nC. การเชื่อมผู้ใช้เข้ากับเครือข่ายผู้ให้บริการเป็นหน้าที่ของ CPE/edge router\nD. การบังคับใช้นโยบายกับทราฟฟิกทั้งวิทยาเขตที่ออกอินเทอร์เน็ตเป็นหน้าที่ของ firewall/proxy ที่ขอบเครือข่าย\n\n📗 จำไว้สอบ: endpoint = อุปกรณ์ผู้ใช้ปลายทาง = จุดเริ่มต้นการโจมตีที่พบบ่อยที่สุด',
  },
  {
    id: 93,
    kind: 'single',
    image: v2q93,
    prompt:
      'Refer to the exhibit. The link between PC1 and the switch is up, but it is performing poorly. Which interface condition is causing the performance problem?',
    options: [
      { key: 'A', text: 'There is an issue with the fiber on the switch interface.' },
      { key: 'B', text: 'There is a duplex mismatch on the interface.' },
      { key: 'C', text: 'There is an interface type mismatch.' },
      { key: 'D', text: 'There is a speed mismatch on the interface.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กลไก auto-negotiation และเหตุที่ทำให้เกิด duplex mismatch\nเมื่อฝั่งหนึ่งตั้งค่า "ตายตัว" (hard-coded) แต่อีกฝั่งตั้งเป็น "auto":\n• ฝั่ง auto จะไม่ได้รับสัญญาณเจรจา (FLP) จากฝั่งที่ตั้งตายตัว\n• ฝั่ง auto จึงใช้กลไกสำรอง: ตรวจจับ "ความเร็ว" ได้จากรูปแบบสัญญาณ (parallel detection) → ได้ 100 Mbps ถูกต้อง ✔\n• แต่ "duplex" เดาไม่ได้ → ตามมาตรฐาน IEEE ต้อง fallback เป็น half-duplex ⭐\n\n🔍 อ่าน exhibit:\n• PC1 ตั้งค่าเอง: 100 Mbps, full duplex\n• สวิตช์ Fa0/1: Duplex = auto, Speed = auto → เจรจาไม่ได้ จึงได้ speed 100 (ถูก) แต่ duplex = half (ผิด)\n→ ผลลัพธ์: speed ตรงกัน ลิงก์จึง "up" แต่ duplex ไม่ตรงกัน = duplex mismatch\n\n💥 อาการที่เกิด: ฝั่ง full ส่งได้ตลอดเวลาโดยไม่ฟังสาย ขณะที่ฝั่ง half กำลังส่งอยู่ → ชนกันตลอด เกิด late collision, CRC error, FCS error และต้องส่งซ้ำจำนวนมาก → ลิงก์ "ใช้ได้แต่ช้ามาก" ตรงกับอาการในโจทย์พอดี\n\n✅ ทำไม B ถูก: PC ตั้ง full-duplex แบบตายตัว ส่วนสวิตช์เป็น auto ที่ fallback เป็น half-duplex → duplex mismatch\n\n❌ ทำไมข้ออื่นผิด:\nA. Type คือ 10/100BaseTX = สายทองแดง ไม่ใช่ไฟเบอร์\nC. ทั้งสองฝั่งเป็น Ethernet ทองแดงเหมือนกัน ไม่มี type mismatch\nD. ความเร็วเจรจาได้ตรงกันที่ 100 Mbps อยู่แล้ว (ถ้า speed ไม่ตรงกัน ลิงก์จะไม่ up เลย)\n\n📗 จำไว้สอบ: ตั้งค่าตายตัวข้างเดียว → duplex mismatch เสมอ • แก้โดยตั้ง auto ทั้งคู่ หรือ hard-code ทั้งคู่ให้ตรงกัน • speed ไม่ตรง = ลิงก์ down, duplex ไม่ตรง = ลิงก์ up แต่ช้า',
  },
  {
    id: 94,
    kind: 'single',
    prompt: 'Why was the RFC 1918 address space defined?',
    options: [
      { key: 'A', text: 'conserve public IPv4 addressing' },
      { key: 'B', text: 'support the NAT protocol' },
      { key: 'C', text: 'preserve public IPv6 address space' },
      { key: 'D', text: 'reduce instances of overlapping IP addresses' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — RFC 1918 (ประกาศใช้ปี 1996) กำหนดช่วงที่อยู่ IPv4 ส่วนตัวไว้ 3 ช่วง\n• 10.0.0.0/8        → 1 บล็อกคลาส A (16.7 ล้านที่อยู่)\n• 172.16.0.0/12     → 16 บล็อกคลาส B (172.16 ถึง 172.31)\n• 192.168.0.0/16    → 256 บล็อกคลาส C\n\n🎯 เหตุผลที่ถูกสร้างขึ้น: ในยุค 1990s เห็นได้ชัดว่าที่อยู่ IPv4 (~4.3 พันล้าน) กำลังจะหมด\nแนวคิดคือ "องค์กรส่วนใหญ่ไม่จำเป็นต้องให้ทุกเครื่องมี IP สาธารณะ" — ให้ใช้ช่วงส่วนตัวซ้ำกันได้ทั่วโลก แล้วแปลงออกด้วย NAT/PAT เมื่อจะออกอินเทอร์เน็ต\n→ บริษัทที่มีพนักงาน 5,000 คนอาจใช้ IP สาธารณะเพียงไม่กี่ตัวเท่านั้น = ประหยัดที่อยู่สาธารณะได้มหาศาล ⭐\n\n✅ ทำไม A ถูก: วัตถุประสงค์ที่ระบุไว้ใน RFC โดยตรงคือการอนุรักษ์พื้นที่ที่อยู่ IPv4 สาธารณะ\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับลำดับเหตุและผล — NAT ถูกพัฒนาขึ้นเพื่อ "รองรับ" การใช้ที่อยู่ส่วนตัว ไม่ใช่ว่าที่อยู่ส่วนตัวถูกสร้างเพื่อรองรับ NAT\nC. RFC 1918 เป็นเรื่องของ IPv4 ล้วน ๆ (IPv6 ยังไม่มีในตอนนั้น และ IPv6 ก็มีที่อยู่มากมายจนไม่ต้องประหยัด)\nD. ตรงกันข้าม — การใช้ช่วงเดียวกันซ้ำ ๆ ทำให้ "เพิ่ม" โอกาสที่อยู่ทับซ้อนกันตอนควบรวมบริษัทหรือทำ VPN เชื่อมสององค์กร\n\n📗 จำไว้สอบ: RFC1918 = 10/8, 172.16/12, 192.168/16 • เป้าหมาย = ประหยัด IPv4 สาธารณะ • ต้องมี NAT จึงออกเน็ตได้',
  },
  {
    id: 95,
    kind: 'drag',
    image: v2q95,
    prompt: 'Drag and drop the TCP or UDP details from the left onto their corresponding protocols on the right.',
    categories: [
      {
        name: 'TCP',
        items: ['requires the client and the server to establish a connection before sending the packet', 'supports reliable data transmission'],
      },
      {
        name: 'UDP',
        items: ['transmitted based on data contained in the packet without the need for a data channel', 'provides best-effort service'],
      },
    ],
    explanation:
      '📘 แนวคิด — จุดต่างหลักระหว่าง TCP กับ UDP\n\n🔹 TCP (connection-oriented + reliable):\n• requires the client and the server to establish a connection before sending the packet ⭐\n  → ต้องทำ 3-way handshake (SYN → SYN-ACK → ACK) ให้เสร็จก่อน จึงจะส่งข้อมูลจริงได้\n• supports reliable data transmission ⭐\n  → มี sequence number จัดลำดับ, ACK ยืนยันการรับ, retransmission เมื่อข้อมูลหาย, flow control และ congestion control\n\n🔹 UDP (connectionless + best-effort):\n• transmitted based on data contained in the packet without the need for a data channel ⭐\n  → แต่ละดาต้าแกรมมีข้อมูลครบในตัวเอง (source/destination port) ส่งออกได้เลยโดยไม่ต้องสร้าง "ช่องทาง" ล่วงหน้า\n• provides best-effort service ⭐\n  → พยายามส่งให้ดีที่สุดแต่ไม่รับประกัน ถ้าหายก็หายไป ไม่มีการแจ้งเตือนหรือส่งซ้ำ\n\n💡 ข้อแลกเปลี่ยน: TCP แลกความเร็วกับความถูกต้อง | UDP แลกความถูกต้องกับความเร็วและ latency ที่ต่ำ\n\n📗 จำไว้สอบ: TCP = handshake + reliable (HTTP/FTP/SMTP/SSH) | UDP = ไม่มี handshake + best-effort (DNS/DHCP/RTP/SNMP)',
  },
  {
    id: 96,
    kind: 'drag',
    image: v2q96,
    prompt: 'Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.',
    categories: [
      { name: 'Global Unicast', items: ['2001:db8:600d:cafe::123', '3ffe:e54d:620:a87a::f00d'] },
      { name: 'Unique Local', items: ['fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc', 'fd6d:c83b:5cef:b6b2::1'] },
    ],
    explanation:
      '📘 แนวคิด — จำแนกที่อยู่ IPv6 จาก "ตัวเลขนำหน้า" (จำแค่นี้ก็ตอบได้ทุกข้อ)\n\n• Global Unicast = 2000::/3 → ครอบคลุมที่อยู่ที่ขึ้นต้นด้วย 2 หรือ 3 (ช่วง 2000 – 3FFF) ⭐\n• Unique Local = FC00::/7 → ขึ้นต้นด้วย FC หรือ FD ⭐\n• Link-Local = FE80::/10 → ขึ้นต้นด้วย FE80\n• Multicast = FF00::/8 → ขึ้นต้นด้วย FF\n\n🔍 จำแนกทีละตัว:\n• 2001:db8:600d:cafe::123 → ขึ้นต้น 2001 → อยู่ใน 2000::/3 → Global Unicast ✔\n  (2001:DB8::/32 เป็นช่วงที่สงวนไว้สำหรับเอกสาร แต่ยังจัดอยู่ในหมวด global unicast)\n• 3ffe:e54d:620:a87a::f00d → ขึ้นต้น 3ffe → อยู่ใน 2000::/3 เช่นกัน → Global Unicast ✔\n  (3FFE::/16 คือช่วง 6bone ที่ใช้ทดลองในอดีต ปัจจุบันเลิกใช้แล้ว แต่ยังอยู่ในพื้นที่ global unicast)\n• fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc → ขึ้นต้น FC → Unique Local ✔\n• fd6d:c83b:5cef:b6b2::1 → ขึ้นต้น FD → Unique Local ✔\n\n💡 เคล็ดลับกันพลาด: ดูแค่ "อักขระตัวแรก" ก็แยกได้เกือบหมด — 2/3 = global, F = ต้องดูตัวที่สองต่อ (FC/FD = ULA, FE = link-local, FF = multicast)\n\n📗 จำไว้สอบ: 2000::/3 = Global | FC00::/7 = ULA | FE80::/10 = Link-Local | FF00::/8 = Multicast',
  },
  {
    id: 97,
    kind: 'single',
    prompt: 'Which type of organization should use a collapsed-core architecture?',
    options: [
      { key: 'A', text: 'small and needs to reduce networking costs' },
      { key: 'B', text: 'large and must minimize downtime when hardware fails' },
      { key: 'C', text: 'large and requires a flexible, scalable network design' },
      { key: 'D', text: 'currently small but is expected to grow dramatically in the near future' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เลือกสถาปัตยกรรมให้เหมาะกับขนาดและแผนการเติบโต\n\n🔹 Collapsed core (2-tier) — ยุบ core + distribution เข้าด้วยกัน\n  ✅ เหมาะกับ: องค์กรเล็ก–กลาง ไซต์เดียว/อาคารเดียว ที่ต้องการลดต้นทุน ⭐\n  ✅ ข้อดี: ซื้ออุปกรณ์น้อยกว่า ประหยัดพื้นที่/ไฟ/ค่าดูแล ออกแบบและแก้ปัญหาง่ายกว่า\n  ⚠️ ข้อจำกัด: ขยายตัวได้จำกัด และอุปกรณ์ตัวเดียวต้องแบกทั้งงานสลับความเร็วสูงและงานนโยบาย\n\n🔹 Three-tier — แยก core / distribution / access ชัดเจน\n  ✅ เหมาะกับ: องค์กรใหญ่ หลายอาคาร ที่ต้องการ scalability สูงและ downtime ต่ำที่สุด\n\n✅ ทำไม A ถูก: เหตุผลหลักในการเลือก collapsed core คือขนาดที่เล็กและความต้องการลดต้นทุนเครือข่าย\n\n❌ ทำไมข้ออื่นผิด:\nB. องค์กรใหญ่ที่ต้องการ downtime ต่ำที่สุดควรใช้ 3-tier ที่มีชั้นและเส้นทางสำรองมากกว่า\nC. องค์กรใหญ่ที่ต้องการความยืดหยุ่นและขยายตัวได้ต้องใช้ 3-tier — collapsed core จะกลายเป็นคอขวด\nD. ถ้ารู้อยู่แล้วว่าจะโตเร็วมาก การเริ่มด้วย collapsed core จะต้องรื้อออกแบบใหม่ในไม่ช้า — ควรวางเป็น 3-tier ตั้งแต่ต้น\n\n📗 จำไว้สอบ: เล็ก + ประหยัด + ไม่โตมาก → collapsed core | ใหญ่ + ต้องขยาย + ต้องไม่ล่ม → three-tier',
  },
  {
    id: 98,
    kind: 'single',
    prompt:
      'A network administrator is setting up a new IPv6 network using the address 2001:0EB8:00C1:2200:0001:0000:0000:0331/64. To simplify the configuration, the administrator has decided to compress the address. Which IP address must the administrator configure?',
    options: [
      { key: 'A', text: 'ipv6 address 2001:EB8:C1:22:1::331/64' },
      { key: 'B', text: 'ipv6 address 21:EB8:C1:2200:1::331/64' },
      { key: 'C', text: 'ipv6 address 2001:EB8:C1:2200:1:0000:331/64' },
      { key: 'D', text: 'ipv6 address 2001:EB8:C1:2200:1::331/64' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — กฎการย่อ IPv6 (ทบทวนอีกครั้ง)\n1️⃣ ตัดศูนย์ "นำหน้า" ในแต่ละกลุ่มได้ — แต่ห้ามตัดศูนย์ที่อยู่กลางหรือท้ายกลุ่ม\n2️⃣ ใช้ "::" แทนกลุ่มศูนย์ที่ติดกันได้เพียงครั้งเดียวต่อที่อยู่\n3️⃣ ที่อยู่เต็มต้องมี 8 กลุ่มเสมอ — เมื่อขยาย :: กลับต้องได้ 8 กลุ่มพอดี\n\n🧮 ย่อทีละขั้นจาก 2001:0EB8:00C1:2200:0001:0000:0000:0331\n• ขั้นที่ 1 ตัดศูนย์นำหน้าแต่ละกลุ่ม:\n  0EB8 → EB8 | 00C1 → C1 | 2200 → 2200 (ศูนย์อยู่ท้าย ตัดไม่ได้!) | 0001 → 1 | 0000 → 0 | 0331 → 331\n  ได้ → 2001:EB8:C1:2200:1:0:0:331\n• ขั้นที่ 2 ยุบกลุ่มศูนย์ติดกัน (0:0) เป็น :: →\n  2001:EB8:C1:2200:1::331 ⭐\n\n✅ ทำไม D ถูก: ตรงกับผลลัพธ์ที่ถูกต้องทุกกลุ่ม — คง 2200 ไว้ครบ และใช้ :: แทน 0000:0000 เพียงจุดเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. เขียน 2200 เป็น 22 → ผิด เพราะ 00 อยู่ "ท้าย" กลุ่ม ตัดไม่ได้ (22 หมายถึง 0022 ซึ่งเป็นคนละค่า)\nB. เขียน 2001 เป็น 21 → ผิดสิ้นเชิง (ตัดศูนย์ที่อยู่กลางกลุ่มไม่ได้)\nC. ไม่ได้ใช้ :: และนับกลุ่มได้เพียง 7 กลุ่ม → ที่อยู่ไม่สมบูรณ์ IOS ปฏิเสธ\n\n📗 จำไว้สอบ: 0EB8→EB8 ✔ | 2200→22 ✘ | 0001→1 ✔ | ตรวจเสมอว่าขยาย :: กลับแล้วได้ครบ 8 กลุ่ม',
  },
  {
    id: 99,
    kind: 'drag',
    image: v2q99,
    prompt: 'Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.',
    categories: [
      { name: 'Global Unicast', items: ['3ffe:e54d:620:a87a::f00d', '2001:db8:600d:cafe::123'] },
      { name: 'Link-Local Unicast', items: ['fe80::a00:27ff:feeb:89aa'] },
      { name: 'Multicast', items: ['ff05::1:3'] },
    ],
    explanation:
      '📘 แนวคิด — จำแนกที่อยู่ IPv6 จากคำนำหน้า\n• 2000::/3 → Global Unicast (ขึ้นต้น 2 หรือ 3)\n• FC00::/7 → Unique Local (ขึ้นต้น FC/FD)\n• FE80::/10 → Link-Local Unicast (ขึ้นต้น FE80)\n• FF00::/8 → Multicast (ขึ้นต้น FF)\n\n🔍 จำแนกทีละตัว:\n• 3ffe:e54d:620:a87a::f00d → ขึ้นต้น 3 → อยู่ใน 2000::/3 → Global Unicast ✔\n• 2001:db8:600d:cafe::123 → ขึ้นต้น 2 → Global Unicast ✔\n• fe80::a00:27ff:feeb:89aa → ขึ้นต้น FE80 → Link-Local Unicast ✔\n  💡 สังเกต "ff:fe" แทรกอยู่กลาง interface ID → เป็นสัญญาณว่าสร้างจาก MAC ด้วยกระบวนการ EUI-64\n• ff05::1:3 → ขึ้นต้น FF → Multicast ✔\n  💡 เลข 05 หลัง FF คือ scope = site-local และ ::1:3 คือกลุ่ม All DHCP Servers\n\n📚 ทบทวน scope ของ multicast: FF01=interface-local, FF02=link-local, FF05=site-local, FF0E=global\n\n📗 จำไว้สอบ: 2/3=Global | FC/FD=ULA | FE80=Link-Local | FF=Multicast • เห็น ff:fe กลางที่อยู่ = EUI-64',
  },
  {
    id: 100,
    kind: 'single',
    prompt: 'What is an appropriate use for private IPv4 addressing?',
    options: [
      { key: 'A', text: 'to allow hosts inside to communicate in both directions with hosts outside the organization' },
      { key: 'B', text: 'on internal hosts that stream data solely to external resources' },
      { key: 'C', text: 'on the public-facing interface of a firewall' },
      { key: 'D', text: 'on hosts that communicate only with other internal hosts' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ที่อยู่ส่วนตัว (RFC 1918) เหมาะกับ "อุปกรณ์ที่ทราฟฟิกอยู่ภายในองค์กร"\nเพราะที่อยู่เหล่านี้ไม่ถูก route บนอินเทอร์เน็ต จึงเหมาะที่สุดกับอุปกรณ์ที่คุยกันเองภายใน เช่น\n• เซิร์ฟเวอร์ไฟล์/ฐานข้อมูลภายใน, เครื่องพิมพ์, กล้องวงจรปิด, อุปกรณ์ควบคุมในโรงงาน, VoIP phone\n\n✅ ทำไม D ถูก: โฮสต์ที่สื่อสารเฉพาะกับโฮสต์ภายในด้วยกัน ไม่มีความจำเป็นต้องใช้ IP สาธารณะเลย — เป็นการใช้ที่อยู่ส่วนตัวได้เหมาะสมและตรงวัตถุประสงค์ที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. การสื่อสาร "สองทิศทาง" กับภายนอกหมายความว่าคนภายนอกต้องเริ่มการเชื่อมต่อเข้ามาได้ด้วย — ที่อยู่ส่วนตัวทำแบบนั้นไม่ได้ ต้องมี static NAT/port forwarding หรือใช้ public IP\nB. ถึงจะเป็นการส่งออกทางเดียว โฮสต์นั้นก็ยังต้องผ่าน NAT เพื่อออกอินเทอร์เน็ตอยู่ดี — และคำว่า "solely to external resources" ไม่ใช่บริบทที่เหมาะที่สุดของการใช้ที่อยู่ส่วนตัว (ตัวเลือก D ตรงกว่ามาก)\nC. อินเทอร์เฟซฝั่งสาธารณะของไฟร์วอลล์ "ต้อง" ใช้ public IP เพราะเป็นจุดที่อินเทอร์เน็ตมองเห็นโดยตรง\n\n📗 จำไว้สอบ: ทราฟฟิกอยู่ภายใน → private IP | ต้องให้ภายนอกเข้าถึงได้ → public IP (หรือ static NAT)',
  },
]
