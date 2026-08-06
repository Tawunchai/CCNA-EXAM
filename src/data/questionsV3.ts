import type { Question } from '../types'

import v3q1 from '../assets/version_3/question_version3_1.png'
import v3q2 from '../assets/version_3/question_version3_2.png'
import v3q5 from '../assets/version_3/question_version3_5.png'
import v3q6 from '../assets/version_3/question_version3_6.png'
import v3q9 from '../assets/version_3/question_version3_9.png'
import v3q10 from '../assets/version_3/question_version3_10.png'
import v3q11 from '../assets/version_3/question_version3_11.png'
import v3q12 from '../assets/version_3/question_version3_12.png'
import v3q13 from '../assets/version_3/question_version3_13.png'
import v3q14 from '../assets/version_3/question_version3_14.png'
import v3q16 from '../assets/version_3/question_version3_16.png'
import v3q17 from '../assets/version_3/question_version3_17.png'
import v3q18 from '../assets/version_3/question_version3_18.png'
import v3q29 from '../assets/version_3/question_version3_29.png'
import v3q30 from '../assets/version_3/question_version3_30_2.png'
import v3q34 from '../assets/version_3/question_version3_34.png'
import v3q37 from '../assets/version_3/question_version3_37.png'
import v3q39 from '../assets/version_3/question_version3_39.png'
import v3q40 from '../assets/version_3/question_version3_40.png'
import v3q42 from '../assets/version_3/question_version3_42.png'
import v3q44 from '../assets/version_3/question_version3_44.png'
import v3q46 from '../assets/version_3/question_version3_46.png'
import v3q50 from '../assets/version_3/question_version3_50.png'
import v3q54 from '../assets/version_3/question_version3_54.png'
import v3q55 from '../assets/version_3/question_version3_55.png'
import v3q56 from '../assets/version_3/question_version3_56.png'
import v3q57 from '../assets/version_3/question_version3_57.png'
import v3q59 from '../assets/version_3/question_version3_59.png'
import v3q60 from '../assets/version_3/question_version3_60.png'
import v3q61 from '../assets/version_3/question_version3_61.png'
import v3q63 from '../assets/version_3/question_version3_63.png'
import v3q66 from '../assets/version_3/question_version3_66.png'
import v3q67 from '../assets/version_3/question_version3_67.png'
import v3q68 from '../assets/version_3/question_version3_68.png'
import v3q69 from '../assets/version_3/question_version3_69.png'
import v3q71 from '../assets/version_3/question_version3_71.png'
import v3q72 from '../assets/version_3/question_version3_72.png'
import v3q74 from '../assets/version_3/question_version3_74.png'
import v3q75 from '../assets/version_3/question_version3_75.png'
import v3q76 from '../assets/version_3/question_version3_76.png'
import v3q78 from '../assets/version_3/question_version3_78.png'
import v3q79 from '../assets/version_3/question_version3_79.png'
import v3q82 from '../assets/version_3/question_version3_82.png'
import v3q84 from '../assets/version_3/question_version3_84.png'
import v3q85 from '../assets/version_3/question_version3_85.png'
import v3q87 from '../assets/version_3/question_version3_87.png'
import v3q91 from '../assets/version_3/question_version3_91.png'
import v3q93 from '../assets/version_3/question_version3_93.png'

export const QUESTIONS_V3: Question[] = [
  {
    id: 1,
    kind: 'single',
    image: v3q1,
    prompt:
      'Refer to the exhibit. An engineer is asked to configure router R1 so that it forms an OSPF single-area neighbor relationship with R2. Which command sequence must be implemented to configure the router?',
    options: [
      { key: 'A', text: 'router ospf 10 / network 10.0.0.0 0.0.0.3 area 0 / network 10.0.2.0 0.0.0.255 area 0' },
      { key: 'B', text: 'router ospf 10 / network 10.0.0.0 0.0.0.3 area 0 / network 10.0.1.0 0.0.0.255 area 0' },
      { key: 'C', text: 'router ospf 10 / network 10.0.0.0 0.0.0.3 area 0 / network 10.0.2.0 255.255.255.0 area 0' },
      { key: 'D', text: 'router ospf 10 / network 10.0.0.0 0.0.0.252 area 0 / network 10.0.1.0 0.0.0.255 area 0' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — คำสั่ง network ของ OSPF ใช้ "wildcard mask" (ไม่ใช่ subnet mask) และต้องประกาศเฉพาะเครือข่ายที่อยู่บน "อินเทอร์เฟซของเราเอง" เท่านั้น\n• wildcard = 255.255.255.255 − subnet mask\n• /30 → 255.255.255.252 → wildcard 0.0.0.3\n• /24 → 255.255.255.0 → wildcard 0.0.0.255\n\n🔍 อ่าน exhibit: R1 มี 2 อินเทอร์เฟซ\n• G0/0 = 10.0.0.1 อยู่บนลิงก์ WAN 10.0.0.0/30 (ต่อไป R2)\n• ขา LAN = 10.0.1.2 อยู่บนเครือข่าย 10.0.1.0/24 (ฝั่ง R1)\n• 10.0.2.0/24 คือ LAN ของ "R2" ไม่ใช่ของ R1 → R1 ประกาศไม่ได้\n\n✅ ทำไม B ถูก:\n• network 10.0.0.0 0.0.0.3 area 0 → เปิด OSPF บนลิงก์ /30 ทำให้เกิด neighbor กับ R2 ✔\n• network 10.0.1.0 0.0.0.255 area 0 → ประกาศ LAN ของ R1 เอง ✔\n• อยู่ area 0 ทั้งคู่ = single-area ตามโจทย์ ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. ประกาศ 10.0.2.0/24 ซึ่งเป็น LAN ของ R2 — R1 ไม่มีอินเทอร์เฟซในซับเน็ตนี้ คำสั่งจึงไม่มีผลใด ๆ (LAN 10.0.1.0/24 ของ R1 จะไม่ถูกโฆษณา)\nC. ผิด 2 จุด — ประกาศ LAN ของ R2 และใช้ subnet mask 255.255.255.0 แทน wildcard\nD. 0.0.0.252 ไม่ใช่ wildcard ที่ถูกต้องของ /30 (ต้องเป็น 0.0.0.3) — 0.0.0.252 เป็นค่าที่กลับด้านมาผิด\n\n📗 จำไว้สอบ: OSPF/EIGRP network = wildcard | /30→0.0.0.3, /29→0.0.0.7, /28→0.0.0.15, /24→0.0.0.255 • ประกาศเฉพาะซับเน็ตที่ "ขาเราอยู่"',
  },
  {
    id: 2,
    kind: 'drag',
    image: v3q2,
    prompt: 'Drag and drop the HTTP methods used with REST-Based APIs from the left onto the descriptions on the right.',
    categories: [
      { name: 'creates a resource and returns to URI in the response header', items: ['POST'] },
      { name: 'creates or replaces a previously modified resource using information in the request body', items: ['PUT'] },
      { name: 'removes a resource', items: ['DELETE'] },
      { name: "retrieves a list of a resource's URIs", items: ['GET'] },
      { name: 'updates a resource using instructions included in the request body', items: ['PATCH'] },
    ],
    explanation:
      '📘 แนวคิด — HTTP verb ของ REST API (ออกสอบทุกครั้งในหมวด Automation)\n\n• GET → อ่านข้อมูล (retrieve) ไม่เปลี่ยนแปลงอะไร → ปลอดภัย (safe) และ idempotent\n• POST → สร้างข้อมูลใหม่ (create) เซิร์ฟเวอร์เป็นคนกำหนด URI ให้ แล้วส่งกลับมาใน header ชื่อ Location ⭐ ไม่ idempotent (ยิงซ้ำ = สร้างซ้ำ)\n• PUT → แทนที่ทั้งก้อน (full replace) ไคลเอนต์รู้ URI อยู่แล้ว → ถ้ามีอยู่ก็ทับ ถ้าไม่มีก็สร้างใหม่ → idempotent\n• PATCH → แก้ไข "บางฟิลด์" (partial update) ส่งเฉพาะฟิลด์ที่ต้องการเปลี่ยน ฟิลด์อื่นคงเดิม\n• DELETE → ลบ resource\n\n💡 จุดแยก POST vs PUT ที่โจทย์ชอบหลอก:\n• POST = "สร้างแล้วคืน URI ใน response header" (ยังไม่รู้ URI ล่วงหน้า)\n• PUT = "สร้างหรือแทนที่ resource ที่เคยแก้ไขมาก่อน" (รู้ URI แล้ว)\n\n💡 จุดแยก PUT vs PATCH:\n• PUT = เขียนทับทั้งเรคคอร์ด | PATCH = แก้เฉพาะส่วน\n\n📗 จำไว้สอบ: GET=อ่าน, POST=สร้าง, PUT=ทับทั้งก้อน, PATCH=แก้บางส่วน, DELETE=ลบ',
  },
  {
    id: 3,
    kind: 'single',
    prompt: 'What is the collapsed layer in collapsed core architectures?',
    options: [
      { key: 'A', text: 'core and WAN' },
      { key: 'B', text: 'access and WAN' },
      { key: 'C', text: 'distribution and access' },
      { key: 'D', text: 'core and distribution' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรมแคมปัสของ Cisco\n\n🔹 Three-tier (3 ชั้น) — ใช้กับเครือข่ายใหญ่\n• Access layer → พอร์ตที่ผู้ใช้/AP/โทรศัพท์เสียบ, ทำ PoE, port security, VLAN\n• Distribution layer → รวมสวิตช์ access, ทำ inter-VLAN routing, ACL, นโยบาย, FHRP\n• Core layer → backbone ความเร็วสูง หน้าที่เดียวคือ "สวิตช์แพ็กเก็ตให้เร็วที่สุด"\n\n🔹 Two-tier / Collapsed core (2 ชั้น) — ใช้กับเครือข่ายเล็ก–กลาง\n• ยุบ core + distribution เข้าด้วยกันเป็นอุปกรณ์ชุดเดียว ⭐\n• เหลือแค่ Access + Collapsed core\n\n✅ ทำไม D ถูก: ชื่อ "collapsed core" มาจากการที่ core ถูกยุบรวมเข้ากับ distribution จึงประหยัดฮาร์ดแวร์และค่าใช้จ่าย แต่ยังได้ประโยชน์ส่วนใหญ่ของโมเดล 3 ชั้น\n\n❌ ทำไมข้ออื่นผิด:\nA. WAN ไม่ใช่ชั้นในโมเดลแคมปัส (เป็น edge/เชื่อมภายนอก) จึงไม่ถูกยุบกับ core\nB. access ไม่เคยถูกยุบ — ต้องมีพอร์ตให้ผู้ใช้เสียบเสมอ\nC. ถ้ายุบ distribution เข้ากับ access จะไม่เรียกว่า collapsed "core"\n\n📗 จำไว้สอบ: collapsed core = 2-tier = Core + Distribution รวมกัน, ยังมี Access แยกอยู่',
  },
  {
    id: 4,
    kind: 'single',
    prompt: 'What is the MAC address used with VRRP as a virtual address?',
    options: [
      { key: 'A', text: '00-00-0C-07-AD-89' },
      { key: 'B', text: '00-00-5E-00-01-0a' },
      { key: 'C', text: '00-07-C0-70-AB-01' },
      { key: 'D', text: '00-C6-41-93-90-91' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — MAC เสมือนของโปรโตคอล First Hop Redundancy (FHRP) แต่ละตัวมีรูปแบบตายตัว จำได้ = ได้คะแนนฟรี\n\n• HSRP v1 → 0000.0C07.ACxx (xx = group เลขฐานสิบหก)\n• HSRP v2 → 0000.0C9F.Fxxx\n• VRRP → 0000.5E00.01xx ⭐ (xx = VRID/group)\n• GLBP → 0007.B400.xxyy\n\n✅ ทำไม B ถูก: 00-00-5E-00-01-0a ตรงกับรูปแบบ 0000.5E00.01xx โดย xx = 0a (hex) = group 10\n💡 00-00-5E คือ OUI ที่ IANA จองไว้ และ 00-01 คือบล็อกที่กำหนดให้ VRRP โดยเฉพาะ\n\n❌ ทำไมข้ออื่นผิด:\nA. 00-00-0C-07-AD-89 → ขึ้นต้น 0000.0C07 ซึ่งเป็นรูปแบบของ HSRP v1 (0000.0C07.ACxx) ไม่ใช่ VRRP\nC. 00-07-C0-… เป็น MAC ทั่วไปของผู้ผลิต ไม่ใช่ MAC เสมือนสงวนของ FHRP ใด\nD. 00-C6-41-… เป็น MAC ทั่วไป ไม่ตรงรูปแบบใดเลย\n\n📗 จำไว้สอบ: HSRPv1=0000.0C07.ACxx | HSRPv2=0000.0C9F.Fxxx | VRRP=0000.5E00.01xx | GLBP=0007.B400.xxyy',
  },
  {
    id: 5,
    kind: 'drag',
    image: v3q5,
    prompt: 'Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.',
    categories: [
      { name: 'Global Unicast', items: ['2001:db8:600d:cafe::123'] },
      { name: 'Link-Local Unicast', items: ['fe80:a00:27ff:feeb:8eaa'] },
      { name: 'Multicast', items: ['ff05::1:3'] },
      { name: 'Unique Local', items: ['fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc'] },
    ],
    explanation:
      '📘 แนวคิด — ดู "อ็อกเท็ตแรก" ของที่อยู่ IPv6 แล้วบอกชนิดได้ทันที\n\n• Global Unicast (GUA) = 2000::/3 → ขึ้นต้น 2 หรือ 3 → เป็น IP สาธารณะที่เราต์ได้ทั่วอินเทอร์เน็ต (เทียบเท่า public IPv4)\n• Link-Local = FE80::/10 → ในทางปฏิบัติเห็นเป็น FE80::/64 เสมอ → ใช้ได้เฉพาะบนลิงก์เดียว ไม่ถูกเราต์ข้ามเราเตอร์ (ใช้เป็น next-hop และคุยกันของ OSPFv3/EIGRPv6)\n• Multicast = FF00::/8 → ขึ้นต้น FF เสมอ ⭐ (FF02::1 ทุกโหนด, FF02::2 ทุกเราเตอร์, FF02::5/6 OSPFv3)\n• Unique Local (ULA) = FC00::/7 → อ็อกเท็ตแรกเป็น FC หรือ FD (ในทางปฏิบัติใช้ FD เพราะต้องตั้งบิต L=1) → เทียบเท่า private IPv4 ใช้ภายในองค์กร ไม่เราต์ออกอินเทอร์เน็ต\n\n🔍 จับคู่จาก exhibit:\n• 2001:db8:600d:cafe::123 → ขึ้นต้น 2 → Global Unicast ✔ (2001:db8::/32 คือบล็อกสำหรับเอกสาร)\n• fe80:a00:27ff:feeb:8eaa → ขึ้นต้น FE80 → Link-Local ✔\n• ff05::1:3 → ขึ้นต้น FF → Multicast ✔ (5 = site-local scope, ::1:3 = DHCP server)\n• fcba:926a:… → ขึ้นต้น FC → Unique Local ✔\n\n📗 จำไว้สอบ: 2/3=GUA | FE80=Link-Local | FF=Multicast | FC/FD=ULA • IPv6 ไม่มี broadcast (ใช้ multicast แทน)',
  },
  {
    id: 6,
    kind: 'single',
    image: v3q6,
    prompt:
      'Refer to the exhibit. All routers in the network are configured. R2 must be the DR. After the engineer connected the devices, R1 was elected as the DR. Which command sequence must be configured on R2 to be elected as the DR in the network?',
    options: [
      { key: 'A', text: 'R2(config)#interface gi0/0 / R2(config-if)#ip ospf priority 1' },
      { key: 'B', text: 'R2(config)#interface gi0/0 / R2(config-if)#ip ospf priority 100' },
      { key: 'C', text: 'R2(config)#router ospf 1 / R2(config-router)#router-id 10.100.100.100' },
      { key: 'D', text: 'R2(config)#router ospf 1 / R2(config-router)#router-id 192.168.2.7' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — การเลือก DR/BDR บนเครือข่าย broadcast (multi-access)\n1️⃣ ดู OSPF interface priority ก่อน → ค่าสูงสุดชนะ (ค่าเริ่มต้น = 1, ช่วง 0–255, priority 0 = ไม่ร่วมเลือกตั้งเลย)\n2️⃣ ถ้า priority เท่ากัน → ดู Router-ID สูงสุดชนะ\n3️⃣ การเลือกตั้งเป็นแบบ non-preemptive → ตัวที่เป็น DR อยู่แล้วจะไม่ถูกแย่งตำแหน่ง จนกว่าจะ reset ด้วย clear ip ospf process หรืออุปกรณ์ล่ม\n\n🔍 อ่าน exhibit: ทุกตัวใช้ priority ค่าเริ่มต้น (1) เท่ากัน จึงตัดสินด้วย RID\n• R1 = 192.168.2.8 → สูงสุด → ได้เป็น DR\n• R3 = 192.168.2.6 → รองลงมา → BDR\n• R4 = 192.168.2.4, R2 = 192.168.2.1 → ต่ำสุด\n\n✅ ทำไม B ถูก: ตั้ง ip ospf priority 100 บน Gi0/0 ของ R2 ทำให้ priority ของ R2 สูงกว่าทุกตัว (100 > 1) → ในการเลือกตั้งรอบถัดไป R2 จะได้เป็น DR แน่นอน โดยไม่ต้องไปยุ่งกับ RID\n\n❌ ทำไมข้ออื่นผิด:\nA. priority 1 คือค่าเริ่มต้นอยู่แล้ว → ไม่มีอะไรเปลี่ยน R1 ก็ยังเป็น DR\nC. router-id 10.100.100.100 มีค่า "ต่ำกว่า" 192.168.2.8 (เทียบเหมือนเลข IP: 10 < 192) → R2 ยังแพ้ R1\nD. router-id 192.168.2.7 ก็ยังต่ำกว่า 192.168.2.8 ของ R1 → แพ้อยู่ดี\n\n📗 จำไว้สอบ: DR election = priority สูงสุด → RID สูงสุด • priority 0 = ไม่มีวันเป็น DR/BDR • ต้อง clear ip ospf process ถึงจะเลือกตั้งใหม่',
  },
  {
    id: 7,
    kind: 'single',
    prompt: 'Which set of 2.4 GHz nonoverlapping wireless channels is standard in the United States?',
    options: [
      { key: 'A', text: 'channels 2, 7, 9, and 11' },
      { key: 'B', text: 'channels 1, 6, 11, and 14' },
      { key: 'C', text: 'channels 2, 7, and 11' },
      { key: 'D', text: 'channels 1, 6, and 11' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ย่าน 2.4 GHz (2.402–2.483 GHz)\n• แบ่งเป็นช่อง 1–14 โดยศูนย์กลางแต่ละช่องห่างกันเพียง 5 MHz\n• แต่สัญญาณจริงกินความกว้าง ~22 MHz ต่อช่อง\n• 22 ÷ 5 ≈ 4.4 → ต้องเว้นอย่างน้อย 5 ช่อง ช่องจึงจะไม่ทับกัน\n\n🧮 ดังนั้นชุดที่ไม่ทับกัน = 1, 6, 11 (ห่างกันช่องละ 5) ⭐\n\n✅ ทำไม D ถูก: ในสหรัฐฯ (FCC) อนุญาตช่อง 1–11 เท่านั้น ชุดมาตรฐานที่ใช้วางแผน AP หลายตัวจึงเป็น 1, 6, 11\n\n❌ ทำไมข้ออื่นผิด:\nA. 2, 7, 9, 11 → 9 กับ 11 ห่างกันแค่ 2 ช่อง ทับกันแน่นอน\nB. เพิ่มช่อง 14 เข้ามา — ช่อง 14 ใช้ได้เฉพาะในญี่ปุ่น (และเฉพาะ 802.11b) ไม่ใช่มาตรฐานสหรัฐฯ\nC. 2, 7, 11 → 7 กับ 11 ห่างกัน 4 ช่อง ยังทับกันเล็กน้อย และไม่ใช่ชุดมาตรฐาน\n\n📗 จำไว้สอบ: 2.4 GHz = 1, 6, 11 (3 ช่องเท่านั้น) | 5 GHz มีช่องไม่ทับกัน 20+ ช่อง จึงเหมาะกับพื้นที่หนาแน่น',
  },
  {
    id: 8,
    kind: 'single',
    prompt: 'Which command entered on a switch configured with Rapid-PVST+ listens and learns for a specific time period?',
    options: [
      { key: 'A', text: 'switch(config)#spanning-tree vlan 1 max-age 6' },
      { key: 'B', text: 'switch(config)#spanning-tree vlan 1 hello-time 10' },
      { key: 'C', text: 'switch(config)#spanning-tree vlan 1 priority 4096' },
      { key: 'D', text: 'switch(config)#spanning-tree vlan 1 forward-time 20' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตัวจับเวลา (timer) ของ Spanning Tree\n• hello-time (ค่าเริ่มต้น 2 วินาที) → ความถี่ที่ root bridge ส่ง BPDU ออกมา\n• forward-time / forward delay (ค่าเริ่มต้น 15 วินาที) ⭐ → เวลาที่พอร์ต "ค้าง" อยู่ในสถานะ Listening และ Learning อย่างละ 1 ช่วง ก่อนขึ้นเป็น Forwarding\n• max-age (ค่าเริ่มต้น 20 วินาที) → นานแค่ไหนที่สวิตช์จะเก็บข้อมูล BPDU ไว้ก่อนถือว่าหมดอายุ\n• priority → ใช้เลือก root bridge ไม่ใช่ timer\n\n🔍 โจทย์ถาม "listens and learns for a specific time period" = ต้องการกำหนดเวลาของสถานะ Listening + Learning → ตรงกับ forward-time\n\n🧮 ลำดับสถานะพอร์ตของ STP แบบดั้งเดิม (802.1D): Blocking (20s max-age) → Listening (15s) → Learning (15s) → Forwarding รวมประมาณ 30–50 วินาที\n\n✅ ทำไม D ถูก: spanning-tree vlan 1 forward-time 20 กำหนดให้พอร์ตอยู่ใน Listening 20 วินาที และ Learning อีก 20 วินาที ก่อนเปลี่ยนเป็น Forwarding\n\n❌ ทำไมข้ออื่นผิด:\nA. max-age ควบคุมอายุของ BPDU ที่เก็บไว้ ไม่ใช่ระยะเวลาของ Listening/Learning\nB. hello-time ควบคุมความถี่การส่ง BPDU ไม่เกี่ยวกับสถานะพอร์ต\nC. priority ใช้ตัดสินว่าใครเป็น root bridge ไม่ใช่ตัวจับเวลา\n\n📗 จำไว้สอบ: hello 2 / forward delay 15 / max-age 20 • forward-time คุมทั้ง Listening และ Learning • RSTP ปกติไม่ใช้ timer พวกนี้แล้วเพราะใช้ handshake แต่คำสั่งยังตั้งได้',
  },
  {
    id: 9,
    kind: 'drag',
    image: v3q9,
    prompt: 'Drag and drop the Wi-Fi terms from the left onto the descriptions on the right.',
    categories: [
      { name: 'Wi-Fi option based around one or more access points', items: ['distribution system'] },
      { name: 'Wi-Fi option in which cells from different access points are linked together', items: ['extended service set'] },
      { name: 'alphanumeric text string that identifies a wireless network', items: ['SSID'] },
      {
        name: 'Wi-Fi option that enables two or more clients to communicate directly without a central access point',
        items: ['independent basic service set'],
      },
      { name: 'entire wireless cell of an access point and the linkage to the wired network', items: ['infrastructure mode'] },
    ],
    explanation:
      '📘 แนวคิด — ศัพท์ service set ของ 802.11 ที่ต้องแยกให้ออก\n\n• BSS (Basic Service Set) → AP หนึ่งตัว + ไคลเอนต์ที่เข้าร่วม พื้นที่ครอบคลุมเรียก BSA หรือ "cell"\n• IBSS (Independent BSS) ⭐ → ไม่มี AP เลย ไคลเอนต์คุยกันตรง ๆ = ad hoc / peer-to-peer\n• DS (Distribution System) ⭐ → ระบบเชื่อม AP เข้าด้วยกัน (ปกติคือระบบสายอีเทอร์เน็ตด้านหลัง AP) — เป็น "ตัวกลาง" ที่สร้างขึ้นรอบ ๆ AP หนึ่งตัวหรือมากกว่า\n• ESS (Extended Service Set) ⭐ → เอาหลาย BSS/cell จาก AP หลายตัวมาต่อผ่าน DS ให้เป็นเครือข่ายเดียว → ไคลเอนต์ roam ข้าม AP ได้ต่อเนื่อง\n• Infrastructure mode ⭐ → โหมดที่ไคลเอนต์ต้องผ่าน AP เสมอ และ AP เชื่อมเข้าเครือข่ายมีสาย = "ทั้ง cell ของ AP + การเชื่อมกับเครือข่ายมีสาย"\n• SSID → ข้อความตัวอักษร/ตัวเลขที่ใช้ตั้งชื่อเครือข่ายไร้สาย (สูงสุด 32 ตัวอักษร) ส่วน BSSID คือ MAC ของวิทยุ AP\n\n💡 เทียบง่าย ๆ: SSID = ชื่อ | BSSID = MAC ของ AP | BSS = 1 เซลล์ | ESS = หลายเซลล์ต่อกัน | DS = ระบบหลังบ้านที่ต่อ AP เข้าด้วยกัน | IBSS = ไม่มี AP\n\n📗 จำไว้สอบ: roaming ข้าม AP ได้ = ESS | ไม่มี AP = IBSS/ad hoc | ต้องผ่าน AP = infrastructure mode',
  },
  {
    id: 10,
    kind: 'single',
    image: v3q10,
    prompt:
      'Refer to the exhibit. An engineer is configuring a Layer 3 port-channel interface with LACP. The configuration on the first device is complete, and it is verified that both interfaces have registered the neighbor device in the CDP table. Which task on the neighbor device enables the new port channel to come up without negotiating the channel?',
    options: [
      { key: 'A', text: 'Bring up the neighboring interfaces using the no shutdown command.' },
      { key: 'B', text: 'Change the EtherChannel mode on the neighboring interfaces to auto' },
      { key: 'C', text: 'Modify the static EtherChannel configuration of the device to passive mode' },
      { key: 'D', text: 'Configure the IP address of the neighboring device' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ตารางจับคู่โหมด EtherChannel\n\nLACP (มาตรฐาน 802.3ad): active / passive\n• active + active = ขึ้น ✔\n• active + passive = ขึ้น ✔\n• passive + passive = ไม่ขึ้น ✘ (ไม่มีใครเริ่มเจรจา)\n\nPAgP (ของ Cisco): desirable / auto\n• desirable + desirable ✔ | desirable + auto ✔ | auto + auto ✘\n\nStatic: on + on ✔ (ไม่มีการเจรจา) แต่ on จับคู่กับ active/passive/desirable/auto ไม่ได้เลย ✘\n⚠️ ห้ามผสมข้าม protocol เช่น active (LACP) กับ desirable (PAgP) ไม่มีวันขึ้น\n\n🔍 อ่าน exhibit: ฝั่งนี้ตั้ง channel-group 1 mode active = LACP และ Port-channel1 มี ip address (Layer 3 EtherChannel) แต่ line protocol ยัง down\n\n✅ ทำไม C ถูก: ฝั่งตรงข้ามตั้งเป็น static (mode on) อยู่ ซึ่งเข้ากันกับ LACP ไม่ได้ ต้องเปลี่ยนเป็น passive เพื่อให้จับคู่กับ active ของเราได้ — และคำว่า "without negotiating the channel" หมายถึงฝั่งนั้นไม่ต้องเป็นฝ่ายเริ่มเจรจา (passive คือรอให้อีกฝั่งเริ่ม)\n\n❌ ทำไมข้ออื่นผิด:\nA. เห็นเพื่อนบ้านใน CDP อยู่แล้ว แปลว่าอินเทอร์เฟซ up/up ทั้งสองฝั่งแล้ว จึงไม่ต้อง no shutdown\nB. auto เป็นโหมดของ PAgP ผสมกับ LACP active ไม่ได้\nD. ปัญหาอยู่ที่ Layer 2 ("Line protocol … changed state to down") ไม่ใช่เรื่อง IP ซึ่งเป็น Layer 3\n\n📗 จำไว้สอบ: LACP=active/passive | PAgP=desirable/auto | on=static • passive+passive และ auto+auto ไม่ขึ้น • ห้ามผสมข้าม protocol',
  },
  {
    id: 11,
    kind: 'single',
    image: v3q11,
    prompt: 'Refer to the exhibit. What is the next hop for traffic entering R1 with a destination of 10.1.2.126?',
    options: [
      { key: 'A', text: '10.165.20.126' },
      { key: 'B', text: '10.165.20.146' },
      { key: 'C', text: '10.165.20.166' },
      { key: 'D', text: '10.165.20.226' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ลำดับการตัดสินใจของเราเตอร์\n1️⃣ Longest prefix match มาก่อนเสมอ (prefix ยาวที่สุดที่ครอบ IP ปลายทางชนะ)\n2️⃣ ถ้า prefix ยาวเท่ากัน → เทียบ Administrative Distance (ต่ำกว่าชนะ)\n3️⃣ ถ้า AD เท่ากัน → เทียบ metric\n\n🔍 ไล่หา prefix ที่ครอบ 10.1.2.126:\n• D 10.1.2.0/24 via 10.145.20.226 → ครอบ .0–.255 ✔ (prefix ยาว 24)\n• D 10.1.2.0/25 via 10.145.20.126 → block 128 → ครอบ .0–.127 ✔ (prefix ยาว 25)\n• D 10.1.3.0/24, 10.1.3.0/25, 10.1.4.0/25 → คนละ octet ที่ 3 ✘\n• S 10.1.2.112/28 via 10.165.20.166 → block 16 → ครอบ 10.1.2.112–10.1.2.127 ✔ ⭐ (prefix ยาว 28)\n\n🧮 /28 → block size = 256 − 240 = 16 → ขอบเขต .112, .128 → ช่วงคือ .112–.127 → 126 อยู่ในนี้พอดี\n\n✅ ทำไม C ถูก: /28 เป็น prefix ที่ยาวที่สุดในบรรดาที่ครอบ 10.1.2.126 จึงชนะทันทีตามกฎ longest match (ไม่ต้องดู AD ด้วยซ้ำ แต่บังเอิญ static ก็มี AD 1 ต่ำสุดอยู่แล้ว) → next hop = 10.165.20.166\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.165.20.126 มาจากเส้น 10.1.2.0/25 ซึ่ง prefix สั้นกว่า /28\nB. 10.165.20.146 เป็น next hop ของ 10.1.3.0/25 ซึ่งไม่ครอบปลายทางนี้เลย\nD. 10.165.20.226 มาจาก 10.1.2.0/24 ซึ่ง prefix สั้นที่สุด\n\n📗 จำไว้สอบ: longest prefix match มาก่อน AD และ metric เสมอ • /28→block 16, /25→block 128',
  },
  {
    id: 12,
    kind: 'single',
    image: v3q12,
    prompt:
      'Refer to the exhibit. A network engineer must configure R1 so that it sends all packets destined to the 10.0.0.0/24 network to R3, and all packets destined to PC1 to R2. Which configuration must the engineer implement?',
    options: [
      {
        key: 'A',
        text: 'ip route 10.0.0.0 255.255.0.0 172.16.0.2 / ip route 10.0.0.5 255.255.255.255 192.168.0.2',
      },
      {
        key: 'B',
        text: 'ip route 10.0.0.0 255.255.255.0 172.16.0.2 / ip route 10.0.0.5 255.255.255.255 192.168.0.2',
      },
      {
        key: 'C',
        text: 'ip route 10.0.0.0 255.255.0.0 192.168.0.2 / ip route 10.0.0.0 255.255.255.0 172.16.0.2',
      },
      {
        key: 'D',
        text: 'ip route 10.0.0.0 255.255.255.0 192.168.0.2 / ip route 10.0.0.5 255.255.255.255 172.16.0.2',
      },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เขียน static route ให้ตรงเป้าหมาย 2 อย่างพร้อมกัน\n• ต้องใช้ subnet mask ให้ตรงกับ prefix ที่โจทย์บอก (/24 = 255.255.255.0)\n• ต้องชี้ next-hop ไปยังเราเตอร์ที่ถูกฝั่ง\n• host route (/32 = 255.255.255.255) มี prefix ยาวกว่า จึงชนะ /24 เสมอสำหรับ IP นั้นตัวเดียว\n\n🔍 อ่าน exhibit:\n• R1 ↔ R2 ผ่านเครือข่าย 172.16.0.0/24 → next hop ไป R2 = 172.16.0.2\n• R1 ↔ R3 ผ่านเครือข่าย 192.168.0.0/24 → next hop ไป R3 = 192.168.0.2\n• PC1 = 10.0.0.5\n\n🧮 แปลโจทย์เป็นคำสั่ง:\n1️⃣ "ทุกอย่างที่ไป 10.0.0.0/24 → ส่งให้ R3" → ip route 10.0.0.0 255.255.255.0 192.168.0.2\n2️⃣ "แต่ที่ไป PC1 (10.0.0.5) → ส่งให้ R2" → ip route 10.0.0.5 255.255.255.255 172.16.0.2\n\n✅ ทำไม D ถูก: ตรงทั้ง mask และทั้ง next-hop ทั้งสองบรรทัด และเพราะ /32 ยาวกว่า /24 แพ็กเก็ตที่ไป 10.0.0.5 จะวิ่งไป R2 ส่วน 10.0.0.8, 10.0.0.12 ฯลฯ วิ่งไป R3 ตามต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nA. mask ผิด (255.255.0.0 = /16 ไม่ใช่ /24) และ next-hop สลับข้าง (ส่ง /24 ไป R2, ส่ง PC1 ไป R3)\nB. mask /24 ถูก แต่ next-hop สลับข้างทั้งคู่\nC. ไม่มี host route ของ PC1 เลย จึงไม่สามารถแยกทราฟฟิกของ PC1 ออกมาได้\n\n📗 จำไว้สอบ: /32 = host route (mask 255.255.255.255) ชนะทุก prefix ที่สั้นกว่า • เขียน static route = ip route <network> <mask> <next-hop>',
  },
  {
    id: 13,
    kind: 'drag',
    image: v3q13,
    prompt:
      'Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.',
    categories: [
      {
        name: 'Autonomous Access Point',
        items: ['accessible for management via Telnet, SSH, or a Web GUI', 'requires a management IP address'],
      },
      { name: 'Lightweight Access Point', items: ['configured and managed by a WLC', 'supports different operational modes'] },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['supports automatic deployment'] },
    ],
    explanation:
      '📘 แนวคิด — AP 2 สถาปัตยกรรมหลัก\n\n🔹 Autonomous AP (แบบยืนได้ด้วยตัวเอง)\n• มีสมองครบในตัว ทำ real-time + management เองทั้งหมด\n• ต้องตั้ง "management IP address" ให้แต่ละตัว ⭐ เพื่อเข้าไปคอนฟิก\n• เข้าจัดการผ่าน Telnet / SSH / Web GUI ทีละตัว ⭐\n• ขา uplink ต้องเป็น trunk เพราะต้อง bridge หลาย SSID ไปหลาย VLAN\n• จุดอ่อน: มี AP 100 ตัว = ต้องคอนฟิก 100 ครั้ง\n\n🔹 Lightweight AP (LAP)\n• ทำงานเองไม่ได้ ต้อง join กับ WLC ผ่านอุโมงค์ CAPWAP ⭐\n• WLC เป็นคนตั้งค่า/จัดการ ทั้งหมดจากจุดเดียว\n• รองรับหลายโหมดการทำงาน ⭐ (Local, FlexConnect, Monitor, Sniffer, Rogue Detector, Bridge, SE-Connect, Flex+Bridge)\n• แบ่งงานเป็น split-MAC: AP ทำงาน real-time (ส่งเฟรม, encryption, beacon) ส่วน WLC ทำงาน management (auth, roaming, RRM)\n\n❌ ตัวลวงที่ไม่ได้ใช้: "supports automatic deployment" — การ deploy อัตโนมัติเป็นความสามารถของแพลตฟอร์มจัดการอย่าง Cisco DNA Center / PnP ไม่ใช่คุณสมบัติที่ใช้แยก autonomous กับ lightweight ในโจทย์นี้\n\n📗 จำไว้สอบ: Autonomous = mgmt IP ต่อตัว + Telnet/SSH/GUI | Lightweight = WLC + CAPWAP + หลาย mode',
  },
  {
    id: 14,
    kind: 'drag',
    image: v3q14,
    prompt: 'Drag and drop the functions of SNMP fault-management from the left onto the definitions on the right.',
    categories: [
      { name: 'The network management system launches a preconfigured script to restore functionality', items: ['restoration of service'] },
      { name: 'The administrator can manually intervene at the source of the fault', items: ['problem resolution'] },
      { name: 'The system identifies performance degradation or service interruption', items: ['fault detection'] },
      { name: 'The system groups alarms from related issues', items: ['event correlation and aggregation'] },
      { name: 'The system reports on the source of the issue', items: ['fault diagnosis and isolation'] },
    ],
    explanation:
      '📘 แนวคิด — วงจร fault management (อยู่ใน FCAPS: Fault, Configuration, Accounting, Performance, Security)\n\nลำดับการทำงานเมื่อเกิดปัญหา:\n1️⃣ Fault detection ⭐ → ระบบ "ตรวจพบ" ว่ามีบริการล่มหรือประสิทธิภาพตก (จาก SNMP trap / polling / syslog)\n2️⃣ Event correlation and aggregation ⭐ → รวมกลุ่มการแจ้งเตือนที่มาจากต้นเหตุเดียวกัน เช่น ลิงก์เดียวล่มแต่มี alarm 50 อัน → ยุบเหลือเหตุการณ์เดียว ไม่ให้ท่วมหน้าจอ\n3️⃣ Fault diagnosis and isolation ⭐ → วิเคราะห์และ "ระบุแหล่งที่มา" ของปัญหาว่าอยู่ที่อุปกรณ์/พอร์ตใด\n4️⃣ Restoration of service ⭐ → NMS สั่งรันสคริปต์ที่เตรียมไว้ล่วงหน้า เพื่อกู้บริการกลับมาอัตโนมัติ (คำสำคัญ: preconfigured script)\n5️⃣ Problem resolution ⭐ → ผู้ดูแลลงมือแก้ที่ต้นเหตุจริง ๆ ด้วยมือ (เปลี่ยนสาย เปลี่ยนการ์ด แก้คอนฟิก) เพื่อไม่ให้เกิดซ้ำ\n\n💡 คำใบ้ในโจทย์: "preconfigured script" → restoration of service | "manually intervene" → problem resolution | "groups alarms" → correlation | "identifies degradation" → detection | "reports on the source" → diagnosis and isolation\n\n📗 จำไว้สอบ: SNMP trap/inform คือช่องทางที่อุปกรณ์แจ้งเหตุมายัง NMS โดยไม่ต้องรอถูก poll (inform มี ACK, trap ไม่มี)',
  },
  {
    id: 15,
    kind: 'single',
    prompt: 'What is the purpose of the Cisco DNA Center controller?',
    options: [
      { key: 'A', text: 'to securely manage and deploy network devices' },
      { key: 'B', text: 'to scan a network and generate a layer 2 network diagram' },
      { key: 'C', text: 'to provide Layer 3 services to autonomous access points' },
      { key: 'D', text: 'to secure physical access to a data center' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Cisco DNA Center คือคอนโทรลเลอร์ของ SDA (Software-Defined Access) ทำหน้าที่เป็น "single pane of glass" สำหรับเครือข่ายแคมปัส\n\nความสามารถหลัก:\n• Design → วางผังไซต์ ตั้งค่ามาตรฐาน (IP pool, SSID, credential)\n• Policy → กำหนดนโยบายจากเจตนา (intent-based) เช่น กลุ่มนี้ห้ามคุยกับกลุ่มนั้น\n• Provision → ส่งคอนฟิกลงอุปกรณ์อัตโนมัติ รองรับ zero-touch provisioning (PnP) ⭐\n• Assurance → เก็บ telemetry มาวิเคราะห์สุขภาพเครือข่ายและช่วยแก้ปัญหา\n• คุยกับอุปกรณ์ผ่าน southbound API (NETCONF/RESTCONF/CLI/SNMP) และเปิด northbound REST API ให้ระบบอื่นเรียกใช้\n\n✅ ทำไม A ถูก: สรุปภาพรวมของ DNA Center คือการจัดการและ deploy อุปกรณ์เครือข่ายแบบรวมศูนย์และปลอดภัย แทนการ SSH เข้าไปทีละตัว\n\n❌ ทำไมข้ออื่นผิด:\nB. การสแกนแล้ววาดไดอะแกรม Layer 2 เป็นงานของเครื่องมือ discovery/CDP-LLDP mapping — DNA Center ทำ topology map ได้ก็จริงแต่ไม่ใช่ "วัตถุประสงค์" ของมัน\nC. autonomous AP ไม่ต้องพึ่งคอนโทรลเลอร์เลย (นั่นคือความหมายของคำว่า autonomous) และ DNA Center ไม่ได้ให้บริการ Layer 3 แก่ AP\nD. ความปลอดภัยทางกายภาพของดาต้าเซ็นเตอร์เป็นเรื่องกล้อง/คีย์การ์ด ไม่เกี่ยวกับซอฟต์แวร์บริหารเครือข่าย\n\n📗 จำไว้สอบ: DNA Center = controller ของ SDA • ทำ Design/Policy/Provision/Assurance • มี northbound REST API + southbound NETCONF/RESTCONF',
  },
  {
    id: 16,
    kind: 'single',
    image: v3q16,
    prompt:
      'Refer to the exhibit. An engineer must configure router R2 so it is elected as the DR on the WAN subnet. Which command sequence must be configured?',
    options: [
      { key: 'A', text: 'interface gigabitethernet0/0 / ip address 10.0.1.1 255.255.255.224 / ip ospf priority 98' },
      { key: 'B', text: 'interface gigabitethernet0/0 / ip address 10.0.1.1 255.255.255.0 / ip ospf priority 255' },
      { key: 'C', text: 'interface gigabitethernet0/0 / ip address 10.0.0.34 255.255.255.248 / ip ospf priority 0' },
      { key: 'D', text: 'interface gigabitethernet0/0 / ip address 10.0.0.34 255.255.255.224 / ip ospf priority 100' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ต้องผ่าน 2 ด่านพร้อมกัน\n1️⃣ IP address ต้องอยู่ในซับเน็ต WAN เดียวกับ R1 มิฉะนั้นไม่เกิด adjacency (OSPF ตรวจว่า subnet/mask ต้องตรงกัน)\n2️⃣ OSPF priority ต้องสูงกว่าของ R1 เพื่อชนะการเลือกตั้ง DR\n\n🔍 อ่าน exhibit:\n• ซับเน็ต WAN = 10.0.0.32/27 → mask 255.255.255.224 (block 32 → ช่วง .32–.63)\n• R1 = 10.0.0.33 และคอนฟิกไว้ว่า ip ospf priority 99\n• R2 ต้องใช้ 10.0.0.34/27 และ priority > 99\n\n✅ ทำไม D ถูก: 10.0.0.34 255.255.255.224 อยู่ในซับเน็ต 10.0.0.32/27 ตรงกับ R1 ✔ และ priority 100 > 99 ของ R1 ✔ → R2 ได้เป็น DR\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.0.1.1 อยู่คนละซับเน็ต (10.0.1.x เป็น LAN) และ priority 98 < 99 ยังแพ้ R1 อยู่ดี — ผิดสองชั้น\nB. 10.0.1.1/24 คนละซับเน็ตกับลิงก์ WAN → ไม่เกิด neighbor เลย ถึงจะตั้ง priority 255 ก็ไร้ผล\nC. mask 255.255.255.248 คือ /29 ไม่ตรงกับ /27 ของ R1 → OSPF ไม่ยอมเป็นเพื่อนบ้าน และ priority 0 ยิ่งแปลว่า "ไม่ขอร่วมเลือกตั้ง DR/BDR เลย"\n\n📗 จำไว้สอบ: เงื่อนไข OSPF neighbor = area เดียวกัน + subnet/mask เดียวกัน + hello/dead timer ตรงกัน + authentication ตรงกัน • priority 0 = ไม่มีวันเป็น DR/BDR',
  },
  {
    id: 17,
    kind: 'single',
    image: v3q17,
    prompt:
      'Refer to the exhibit. R1 has just received a packet from host A that is destined to host B. Which route in the routing table is used by R1 to reach host B?',
    options: [
      { key: 'A', text: '10.10.13.0/25 [1/0] via 10.10.10.2' },
      { key: 'B', text: '10.10.13.0/25 [110/2] via 10.10.10.6' },
      { key: 'C', text: '10.10.13.0/25 [110/2] via 10.10.10.2' },
      { key: 'D', text: '10.10.13.0/25 [108/0] via 10.10.10.10' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เมื่อ prefix ยาวเท่ากันหมด ให้ตัดสินด้วย Administrative Distance (AD) ที่ต่ำที่สุด\n\nตาราง AD ที่ต้องจำ:\n• Connected = 0 | Static = 1 | eBGP = 20 | EIGRP internal = 90 | OSPF = 110 | IS-IS = 115 | RIP = 120 | EIGRP external = 170 | iBGP = 200 | Unusable = 255\n\n🔍 อ่านคอนฟิกใน exhibit — host B = 10.10.13.10/25:\n• ip route 0.0.0.0 0.0.0.0 10.10.10.2 → default route ใช้เฉพาะเมื่อไม่มี prefix เจาะจง match\n• ip route 10.10.13.0 255.255.255.128 10.10.10.2 111 → static AD 111\n• ip route 10.10.13.0 255.255.255.128 10.10.10.6 112 → static AD 112\n• ip route 10.10.13.0 255.255.255.128 10.10.10.10 108 → static AD 108 ⭐ ต่ำสุด\n• OSPF ก็เรียนรู้ 10.10.13.0/25 มาด้วย AD 110\n\n🧮 เทียบ AD ของ prefix /25 ทั้งหมด: 108 < 110 (OSPF) < 111 < 112 → ชนะคือ AD 108 via 10.10.10.10\n\n✅ ทำไม D ถูก: บรรทัด [108/0] via 10.10.10.10 มี AD ต่ำสุด จึงเป็นเส้นเดียวที่ถูกติดตั้งลงตารางเราต์และใช้งานจริง\n💡 เส้นที่ AD สูงกว่า (111, 112) คือ floating static route — เป็นตัวสำรอง จะโผล่มาแทนก็ต่อเมื่อเส้นหลักหายไป\n\n❌ ทำไมข้ออื่นผิด:\nA. AD 1 คือค่า static ปกติ แต่ที่นี่ไม่มี static ใดถูกตั้ง AD 1 เลย (บรรทัด via 10.10.10.2 คือ default route ซึ่งไม่ใช่ /25)\nB. AD 110 = OSPF ซึ่งสูงกว่า 108\nC. AD 110 = OSPF เช่นกัน สูงกว่า 108\n\n📗 จำไว้สอบ: Connected 0 < Static 1 < eBGP 20 < EIGRP 90 < OSPF 110 < RIP 120 • floating static = static ที่ตั้ง AD สูงกว่า protocol หลักไว้เป็นเส้นสำรอง',
  },
  {
    id: 18,
    kind: 'single',
    image: v3q18,
    prompt:
      'Refer to the exhibit. The given Windows PC is requesting the IP address of the host at www.cisco.com. To which IP address is the request sent?',
    options: [
      { key: 'A', text: '192.168.1.226' },
      { key: 'B', text: '192.168.1.253' },
      { key: 'C', text: '192.168.1.100' },
      { key: 'D', text: '192.168.1.254' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — อ่านผลลัพธ์ ipconfig /all ให้เป็น\n• IPv4 Address → IP ของเครื่องเราเอง\n• Subnet Mask → ใช้คำนวณว่าปลายทางอยู่ในซับเน็ตเดียวกันไหม\n• Default Gateway → เราเตอร์ที่ใช้ส่งแพ็กเก็ต "ออกนอกซับเน็ต"\n• DHCP Server → เครื่องที่แจก IP ให้เรา\n• DNS Servers ⭐ → เครื่องที่เราส่งคำถาม "ชื่อโดเมนนี้ IP อะไร" ไปถาม\n\n🔍 อ่านค่าจาก exhibit (อะแดปเตอร์ Wi-Fi ที่ใช้งานอยู่ — อะแดปเตอร์ Ethernet เป็น Media disconnected):\n• IPv4 Address = 192.168.1.226/24\n• Default Gateway = 192.168.1.100\n• DHCP Server = 192.168.1.254\n• DNS Servers = 192.168.1.253 ⭐\n\n✅ ทำไม B ถูก: การแปลงชื่อ www.cisco.com เป็น IP คืองานของ DNS ดังนั้นเครื่องจะยิงคำสอบถาม DNS (UDP/TCP พอร์ต 53) ไปที่ 192.168.1.253\n💡 สังเกตว่า 192.168.1.253 อยู่ในซับเน็ต 192.168.1.0/24 เดียวกับ PC จึงส่งตรงถึงกันได้เลย ไม่ต้องผ่าน gateway\n\n❌ ทำไมข้ออื่นผิด:\nA. 192.168.1.226 คือ IP ของ PC เอง ไม่ใช่ปลายทาง\nC. 192.168.1.100 คือ default gateway — ใช้เมื่อต้องส่งออกนอกซับเน็ต แต่ในกรณีนี้ DNS อยู่ในซับเน็ตเดียวกันจึงไม่ต้องผ่าน gateway\nD. 192.168.1.254 คือ DHCP server ทำหน้าที่แจก IP ไม่ใช่แปลงชื่อโดเมน\n\n📗 จำไว้สอบ: DNS = UDP/TCP 53 | DHCP = UDP 67 (server) / 68 (client) • ปลายทางอยู่ซับเน็ตเดียวกัน = ส่งตรง, ต่างซับเน็ต = ส่งผ่าน default gateway',
  },
  {
    id: 19,
    kind: 'single',
    prompt: 'What is a feature of TFTP?',
    options: [
      { key: 'A', text: 'provides secure data transfer' },
      { key: 'B', text: 'relies on the well-known TCP port 20 to transmit data' },
      { key: 'C', text: 'uses two separate connections for control and data traffic' },
      { key: 'D', text: 'offers anonymous user login ability' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — TFTP (Trivial File Transfer Protocol) เทียบกับ FTP\n\n🔹 TFTP\n• วิ่งบน UDP พอร์ต 69 ⭐ — ไม่มี handshake ไม่มีการควบคุมการไหล\n• ไม่มีระบบยืนยันตัวตนใด ๆ เลย → ใครก็ตามที่รู้ชื่อไฟล์ก็ดึงได้ = เข้าถึงแบบ anonymous ⭐\n• ไม่เข้ารหัส ข้อมูลวิ่งเป็น plaintext\n• ใช้การเชื่อมต่อ "เดียว" ไม่แยก control/data\n• นิยมใช้สำรอง/กู้คืน config และอัป IOS image บนอุปกรณ์เครือข่าย เพราะโค้ดเล็กมาก\n\n🔹 FTP\n• วิ่งบน TCP พอร์ต 21 (control) และ 20 (data ในโหมด active) → แยก 2 การเชื่อมต่อ\n• ต้อง login ด้วย username/password (แม้จะมีบัญชี anonymous ให้ก็ตาม)\n\n✅ ทำไม D ถูก: TFTP ไม่มีกลไก authentication ใด ๆ ผู้ใช้จึงเข้าถึงไฟล์ได้โดยไม่ต้องระบุตัวตน — เป็นคุณสมบัติที่ตรงกับ "anonymous user login ability"\n\n❌ ทำไมข้ออื่นผิด:\nA. TFTP ไม่เข้ารหัสเลย ไม่ปลอดภัย (ถ้าต้องการความปลอดภัยใช้ SCP หรือ SFTP ซึ่งวิ่งบน SSH พอร์ต 22)\nB. TCP พอร์ต 20 เป็นของ FTP data — TFTP ใช้ UDP 69\nC. การแยก control connection กับ data connection เป็นลักษณะเฉพาะของ FTP ไม่ใช่ TFTP\n\n📗 จำไว้สอบ: TFTP=UDP 69 ไม่มี login | FTP=TCP 20/21 มี login | SFTP/SCP=TCP 22 เข้ารหัส | HTTP=80 | HTTPS=443',
  },
  {
    id: 20,
    kind: 'single',
    prompt: 'Which access point mode relies on a centralized controller for management, roaming, and SSID configuration?',
    options: [
      { key: 'A', text: 'repeater mode' },
      { key: 'B', text: 'bridge mode' },
      { key: 'C', text: 'lightweight mode' },
      { key: 'D', text: 'autonomous mode' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำว่า "lightweight" หมายถึง AP ที่ถูกถอดสมองส่วน management ออกไปไว้ที่ WLC\n\n🔹 Lightweight AP (LAP) ⭐\n• ต้อง join กับ Wireless LAN Controller ผ่านอุโมงค์ CAPWAP (UDP 5246 = control, 5247 = data)\n• WLC จัดการให้ทั้งหมด: การตั้ง SSID, การยืนยันตัวตน, การ roam ข้าม AP, RRM (เลือกช่องสัญญาณและกำลังส่ง)\n• ถ้า WLC หายไป AP ตัวเดียวทำงานต่อไม่ได้ (ยกเว้นตั้งเป็น FlexConnect)\n• แนวคิดนี้เรียกว่า split-MAC: AP ทำ real-time (ส่งเฟรม 802.11, encryption, beacon/ACK) ส่วน WLC ทำ management\n\n✅ ทำไม C ถูก: ตรงนิยามของ lightweight mode ที่ต้องพึ่งคอนโทรลเลอร์รวมศูนย์ในเรื่อง management, roaming และการตั้งค่า SSID\n\n❌ ทำไมข้ออื่นผิด:\nA. repeater mode คือ AP ที่รับสัญญาณจาก AP อีกตัวมาขยายต่อเพื่อเพิ่มระยะ — เป็นบทบาทของวิทยุ ไม่ใช่เรื่องพึ่งคอนโทรลเลอร์\nB. bridge mode ใช้เชื่อมเครือข่าย 2 จุดเข้าด้วยกันแบบไร้สาย (point-to-point / point-to-multipoint)\nD. autonomous mode คือตรงกันข้าม — AP ทำงานเองครบทุกอย่าง ไม่ต้องมี WLC\n\n📗 จำไว้สอบ: CAPWAP = UDP 5246 (control) / 5247 (data) • โหมดของ LAP: Local, FlexConnect, Monitor, Sniffer, Rogue Detector, Bridge, SE-Connect, Flex+Bridge',
  },
  {
    id: 21,
    kind: 'single',
    prompt:
      'Which command creates a static NAT binding for a PC address of 10.1.1.1 to the public routable address 209.165.200.225 assigned to the PC?',
    options: [
      { key: 'A', text: 'R1(config)#ip nat outside source static 209.165.200.225 10.1.1.1' },
      { key: 'B', text: 'R1(config)#ip nat inside source static 209.165.200.225 10.1.1.1' },
      { key: 'C', text: 'R1(config)#ip nat outside source static 10.1.1.1 209.165.200.225' },
      { key: 'D', text: 'R1(config)#ip nat inside source static 10.1.1.1 209.165.200.225' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ไวยากรณ์ static NAT\n\nip nat inside source static <inside-local> <inside-global>\n• inside local = IP จริงของเครื่องภายใน (private) → 10.1.1.1\n• inside global = IP สาธารณะที่ใช้แทนเครื่องนั้นเมื่อออกเน็ต → 209.165.200.225\n• ลำดับคือ "ของจริงก่อน แล้วค่อยของปลอม" (local → global) ⭐\n\nคำศัพท์ NAT 4 ตัวที่ต้องแยกให้ออก:\n• Inside local = IP private ของโฮสต์ภายใน\n• Inside global = IP public ที่ NAT แปลงให้โฮสต์ภายใน\n• Outside global = IP จริงของเซิร์ฟเวอร์ภายนอก\n• Outside local = IP ที่โฮสต์ภายในมองเห็นเซิร์ฟเวอร์ภายนอกเป็น\n\n✅ ทำไม D ถูก: ใช้ inside source (แปลง source ของทราฟฟิกที่ออกจากฝั่ง inside) และเรียงถูกลำดับ local (10.1.1.1) → global (209.165.200.225)\n\n❌ ทำไมข้ออื่นผิด:\nA. ip nat outside source ใช้แปลง IP ของฝั่งภายนอก (เช่นเวลาซับเน็ตซ้อนทับกัน) ไม่ใช่กรณีนี้\nB. ใช้ inside source ถูกแล้ว แต่สลับลำดับ — กลายเป็นบอกว่า IP จริงคือ 209.165.200.225 และแปลงเป็น 10.1.1.1\nC. ผิดทั้งทิศทาง (outside) และแม้ลำดับจะดูถูก แต่ความหมายกลายเป็นแปลง IP ภายนอก\n\n💡 อย่าลืมประกาศ ip nat inside บนอินเทอร์เฟซขา LAN และ ip nat outside บนขา WAN มิฉะนั้น NAT จะไม่ทำงาน\n\n📗 จำไว้สอบ: static NAT = 1:1 ถาวร | dynamic NAT = ดึงจาก pool | PAT/overload = หลายเครื่องต่อ 1 IP แยกด้วยหมายเลขพอร์ต',
  },
  {
    id: 22,
    kind: 'single',
    prompt:
      'Refer to the exhibit.\n\nRIP    10.1.1.16/28 [120/5] via F0/0\nOSPF   10.1.1.0/24 [110/30] via F0/1\nOSPF   10.1.1.0/24 [110/40] via F0/2\nEIGRP  10.1.0.0/26 [90/20] via F0/3\nEIGRP  10.0.0.0/8 [90/133] via F0/4\n\nPackets received by the router from BGP enter via a serial interface at 209.165.201.1. Each route is present within the routing table. Which interface is used to forward traffic with a destination IP of 10.1.1.19?',
    options: [
      { key: 'A', text: 'F0/0' },
      { key: 'B', text: 'F0/1' },
      { key: 'C', text: 'F0/3' },
      { key: 'D', text: 'F0/4' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — กฎเหล็ก: longest prefix match ตัดสินก่อน AD และ metric เสมอ\n⚠️ ข้อนี้เป็นกับดักคลาสสิก หลายคนรีบเทียบ AD (RIP 120 ดูแย่ที่สุด) แล้วตอบผิด\n\n🔍 ไล่เช็คทีละ prefix ว่าครอบ 10.1.1.19 หรือไม่:\n• 10.1.1.16/28 (RIP) → block 16 → ครอบ 10.1.1.16–10.1.1.31 ✔ ⭐ prefix ยาวสุด = 28\n• 10.1.1.0/24 (OSPF ทั้งสองเส้น) → ครอบ 10.1.1.0–10.1.1.255 ✔ (prefix 24)\n• 10.1.0.0/26 (EIGRP) → block 64 ที่ octet 4 แต่ octet 3 เป็น 0 → ครอบ 10.1.0.0–10.1.0.63 ✘ (ปลายทางเป็น 10.1.1.x)\n• 10.0.0.0/8 (EIGRP) → ครอบ 10.0.0.0–10.255.255.255 ✔ (prefix 8 สั้นสุด)\n\n🧮 เรียงความยาว prefix ที่ match: /28 > /24 > /8 → ชนะคือ /28\n\n✅ ทำไม A ถูก: 10.1.1.16/28 เป็น prefix ที่ยาวที่สุดที่ครอบ 10.1.1.19 จึงถูกเลือกทันที แม้ RIP จะมี AD สูงถึง 120 ก็ไม่มีผล เพราะ AD จะถูกนำมาเทียบเฉพาะเมื่อ prefix "ยาวเท่ากัน" เท่านั้น → ส่งออก F0/0\n\n❌ ทำไมข้ออื่นผิด:\nB. F0/1 มาจาก OSPF 10.1.1.0/24 ซึ่ง prefix สั้นกว่า /28 (แม้ AD 110 จะดีกว่า 120 ก็ไม่ได้ใช้)\nC. F0/3 มาจาก 10.1.0.0/26 ซึ่งไม่ครอบ 10.1.1.19 เลย\nD. F0/4 มาจาก 10.0.0.0/8 ซึ่งสั้นที่สุด จะถูกใช้ก็ต่อเมื่อไม่มี prefix ใดยาวกว่านี้ match\n\n📗 จำไว้สอบ: ลำดับตัดสิน = 1) longest prefix match 2) AD ต่ำสุด 3) metric ต่ำสุด • AD/metric เทียบกันได้เฉพาะ prefix ที่ยาวเท่ากัน',
  },
  {
    id: 23,
    kind: 'multi',
    prompt: 'Which two REST API status-code classes represent errors? (Choose two)',
    options: [
      { key: 'A', text: '1XX' },
      { key: 'B', text: '2XX' },
      { key: 'C', text: '3XX' },
      { key: 'D', text: '4XX' },
      { key: 'E', text: '5XX' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — HTTP status code แบ่งเป็น 5 กลุ่มตามหลักแรก\n\n• 1xx Informational → เซิร์ฟเวอร์รับคำขอแล้วกำลังดำเนินการ (เช่น 100 Continue)\n• 2xx Success → สำเร็จ (200 OK, 201 Created, 204 No Content)\n• 3xx Redirection → ต้องไปทำอย่างอื่นต่อเพื่อให้คำขอสมบูรณ์ (301 Moved Permanently, 302 Found)\n• 4xx Client Error ⭐ → ความผิดอยู่ที่ "ฝั่งไคลเอนต์" เช่น 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found\n• 5xx Server Error ⭐ → ความผิดอยู่ที่ "ฝั่งเซิร์ฟเวอร์" เช่น 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable\n\n✅ ทำไม D, E ถูก: มีเพียงกลุ่ม 4xx และ 5xx เท่านั้นที่จัดเป็น error — 4xx โทษไคลเอนต์ (ส่งคำขอมาผิด/ไม่มีสิทธิ์) และ 5xx โทษเซิร์ฟเวอร์ (ประมวลผลไม่ได้)\n\n❌ ทำไมข้ออื่นผิด:\nA. 1xx เป็นข้อมูลชั่วคราวระหว่างทาง ไม่ใช่ข้อผิดพลาด\nB. 2xx คือสำเร็จ ตรงข้ามกับ error\nC. 3xx คือให้ไคลเอนต์ไปยัง URL ใหม่ ยังไม่ถือว่าล้มเหลว\n\n📗 จำไว้สอบ: 401 = ยังไม่ยืนยันตัวตน (Unauthorized) | 403 = ยืนยันตัวตนแล้วแต่ไม่มีสิทธิ์ (Forbidden) | 404 = ไม่พบ resource | 500 = เซิร์ฟเวอร์พัง',
  },
  {
    id: 24,
    kind: 'single',
    prompt:
      'An engineer has configured the domain name, user name, and password on the local router. What is the next step to complete the configuration for a Secure Shell access RSA key?',
    options: [
      { key: 'A', text: 'crypto key generate rsa' },
      { key: 'B', text: 'crypto key pubkey-chain rsa' },
      { key: 'C', text: 'crypto key import rsa pem' },
      { key: 'D', text: 'crypto key zeroize rsa' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ขั้นตอนเปิด SSH บนอุปกรณ์ Cisco (ลำดับสำคัญมาก)\n1️⃣ hostname <ชื่อ> → ต้องไม่ใช่ค่าเริ่มต้น "Router"\n2️⃣ ip domain-name <โดเมน> → ทั้งสองอย่างรวมกันเป็น FQDN ที่ใช้ตั้งชื่อคู่กุญแจ\n3️⃣ crypto key generate rsa (แนะนำ modulus ≥ 1024 บิต เพื่อให้ใช้ SSH v2 ได้) ⭐\n4️⃣ username <ชื่อ> secret <รหัส> → บัญชีในฐานข้อมูลท้องถิ่น\n5️⃣ line vty 0 15 → login local + transport input ssh (ปิด Telnet)\n6️⃣ (ทางเลือก) ip ssh version 2\n\n✅ ทำไม A ถูก: โจทย์บอกว่าตั้ง domain name, username, password เรียบร้อยแล้ว สิ่งที่ยังขาดคือ "คู่กุญแจ RSA" ซึ่งสร้างด้วยคำสั่ง crypto key generate rsa — ถ้าไม่มีกุญแจนี้ SSH จะเปิดใช้งานไม่ได้เลย\n💡 หมายเหตุ: ต้องมี hostname และ domain-name ก่อนเสมอ ไม่งั้นคำสั่งนี้จะฟ้องว่า "% Please define a domain-name first."\n\n❌ ทำไมข้ออื่นผิด:\nB. crypto key pubkey-chain rsa ใช้ "ป้อนกุญแจสาธารณะของเครื่องอื่น" เข้ามาเก็บไว้ ไม่ได้สร้างกุญแจของเราเอง\nC. crypto key import rsa pem ใช้นำเข้ากุญแจจากไฟล์/ภายนอกที่มีอยู่แล้ว โจทย์นี้ยังไม่มีกุญแจให้นำเข้า\nD. crypto key zeroize rsa คือ "ลบ" กุญแจทั้งหมดทิ้ง ซึ่งจะทำให้ SSH ใช้ไม่ได้ (ใช้ตอนต้องการปิด SSH หรือสร้างกุญแจใหม่)\n\n📗 จำไว้สอบ: SSH ต้องมี hostname + domain-name + RSA key + local user + transport input ssh • modulus ≥ 768 ถึงจะใช้ SSHv2 ได้ (แนะนำ 2048)',
  },
  {
    id: 25,
    kind: 'single',
    prompt: 'Which encryption method is used by WPA3?',
    options: [
      { key: 'A', text: 'TKIP' },
      { key: 'B', text: 'SAE' },
      { key: 'C', text: 'PSK' },
      { key: 'D', text: 'AES' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — วิวัฒนาการความปลอดภัย Wi-Fi\n\n• WEP → RC4 + IV 24 บิต → แตกได้ในไม่กี่นาที เลิกใช้แล้ว\n• WPA → TKIP (ยังใช้ RC4 อยู่ แต่เปลี่ยนคีย์ทุกเฟรม) → เลิกใช้แล้ว\n• WPA2 → AES-CCMP (มาตรฐานตั้งแต่ปี 2004) + การยืนยันตัวตนแบบ PSK หรือ 802.1X\n• WPA3 → AES-GCMP + SAE ⭐ แทนที่ PSK/4-way handshake แบบเดิม\n\n🔹 SAE (Simultaneous Authentication of Equals) คืออะไร:\n• เป็นกลไกแลกเปลี่ยนกุญแจแบบ Dragonfly ที่ใช้แทน PSK ใน WPA3-Personal\n• ป้องกันการเดารหัสผ่านแบบ offline dictionary/brute-force ⭐ เพราะผู้โจมตีดักจับ handshake ไปนั่งเดาทีหลังไม่ได้\n• ให้ forward secrecy — แม้รู้รหัสผ่านทีหลังก็ถอดรหัสเซสชันเก่าไม่ได้\n• WPA3 ยังบังคับใช้ PMF (Protected Management Frames, 802.11w) ด้วย\n\n✅ ทำไม B ถูก: SAE คือสิ่งใหม่ที่ WPA3 นำมาใช้แทน PSK ของ WPA2 และเป็นคำตอบที่โจทย์ต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nA. TKIP เป็นของ WPA รุ่นแรก WPA3 ไม่รองรับ TKIP แล้ว\nC. PSK คือวิธีของ WPA/WPA2-Personal ซึ่ง WPA3 มาแทนที่ด้วย SAE\nD. AES ยังถูกใช้อยู่จริง (WPA3 ใช้ AES-GCMP) แต่ AES ก็มีอยู่แล้วใน WPA2 จึงไม่ใช่ "จุดต่าง" ที่โจทย์ถามถึง — คำตอบที่เจาะจงของ WPA3 คือ SAE\n\n📗 จำไว้สอบ: WEP→RC4 | WPA→TKIP | WPA2→AES-CCMP+PSK | WPA3→AES-GCMP+SAE+PMF บังคับ',
  },
  {
    id: 26,
    kind: 'single',
    prompt:
      'An engineer is configuring remote access to a router from IP subnet 10.139.58.0/28. The domain name, crypto keys, and SSH have been configured. Which configuration enables the traffic on the destination router?',
    options: [
      {
        key: 'A',
        text: 'interface FastEthernet0/0 / ip address 10.122.49.1 255.255.255.248 / ip access-group 10 in — ip access-list standard 10 / permit udp 10.139.58.0 0.0.0.7 host 10.122.49.1 eq 22',
      },
      {
        key: 'B',
        text: 'interface FastEthernet0/0 / ip address 10.122.49.1 255.255.255.252 / ip access-group 105 in — ip access-list standard 105 / permit tcp 10.139.58.0 0.0.0.7 eq 22 host 10.122.49.1',
      },
      {
        key: 'C',
        text: 'interface FastEthernet0/0 / ip address 10.122.49.1 255.255.255.252 / ip access-group 110 in — ip access-list extended 110 / permit tcp 10.139.58.0 0.0.0.15 host 10.122.49.1 eq 22',
      },
      {
        key: 'D',
        text: 'interface FastEthernet0/0 / ip address 10.122.49.1 255.255.255.240 / access-group 120 in — ip access-list extended 120 / permit tcp 10.139.58.0 255.255.255.248 any eq 22',
      },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ต้องผ่าน 4 ด่านพร้อมกัน\n1️⃣ SSH วิ่งบน TCP พอร์ต 22 (ไม่ใช่ UDP)\n2️⃣ ต้องใช้ extended ACL เพราะต้องระบุทั้ง source, destination และพอร์ต (standard ACL ระบุได้แค่ source)\n3️⃣ wildcard ของ /28 = 0.0.0.15 (255.255.255.255 − 255.255.255.240)\n4️⃣ คำสั่งกรอง extended ต้องเรียง: permit tcp <source> <wildcard> <destination> eq 22 — พอร์ตวางไว้ "หลังปลายทาง" เพราะเราคุมพอร์ตปลายทาง\n\n✅ ทำไม C ถูก:\n• เป็น extended ACL (110 อยู่ในช่วง 100–199) ✔\n• protocol = tcp ✔\n• source 10.139.58.0 wildcard 0.0.0.15 = /28 ตรงกับโจทย์ ✔\n• destination = host 10.122.49.1 และ eq 22 อยู่หลังปลายทาง = คุมพอร์ตปลายทาง SSH ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ udp (SSH เป็น TCP) และ wildcard 0.0.0.7 = /29 ซึ่งครอบแค่ 10.139.58.0–.7 ไม่ครบ /28 อีกทั้งประกาศเป็น standard\nB. ประกาศเป็น standard แต่ใส่เงื่อนไขแบบ extended (ขัดแย้งกัน), wildcard 0.0.0.7 ผิด และ eq 22 ไปอยู่หลัง source = คุม source port ซึ่งเป็นพอร์ตสุ่มของไคลเอนต์\nD. ใช้ "255.255.255.248" เป็น wildcard (ต้องเป็น 0.0.0.x) และคำสั่งผูก ACL เขียนว่า access-group แทน ip access-group\n\n💡 อ่านทิศทาง: ใส่ in บนอินเทอร์เฟซที่ทราฟฟิก SSH "เข้ามา" และอย่าลืมว่า ACL มี implicit deny any ปิดท้ายเสมอ\n\n📗 จำไว้สอบ: standard ACL 1–99/1300–1999 ดูแค่ source | extended ACL 100–199/2000–2699 ดู source+dest+protocol+port • /28 → wildcard 0.0.0.15',
  },
  {
    id: 27,
    kind: 'single',
    prompt: 'What is a function of spine-and-leaf architecture?',
    options: [
      { key: 'A', text: 'mitigates oversubscription by adding a layer of leaf switches' },
      { key: 'B', text: 'limits payload size of traffic within the leaf layer' },
      { key: 'C', text: 'offers predictable latency of the traffic path between end devices' },
      { key: 'D', text: 'exclusively sends multicast traffic between servers that are directly connected to the spine' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม spine-and-leaf (นิยมในดาต้าเซ็นเตอร์)\n• leaf switch = ชั้นที่เซิร์ฟเวอร์เสียบเข้ามา (access)\n• spine switch = แกนกลาง ทำหน้าที่รับส่งระหว่าง leaf\n• กฎเหล็ก: leaf ทุกตัวต้องต่อกับ spine "ทุกตัว" แต่ leaf ไม่ต่อกันเอง และ spine ก็ไม่ต่อกันเอง\n\n🧮 ผลลัพธ์: การเดินทางระหว่างเซิร์ฟเวอร์สองเครื่องที่อยู่คนละ leaf จะเป็น leaf → spine → leaf = 2 hop เสมอ ไม่ว่าจะเป็นคู่ไหนก็ตาม\n→ ความหน่วง (latency) จึงคงที่และคาดเดาได้ ⭐ เหมาะกับทราฟฟิก east-west (เซิร์ฟเวอร์คุยกันเอง) ที่มีปริมาณมากในดาต้าเซ็นเตอร์ยุคใหม่\n\n✅ ทำไม C ถูก: จุดขายหลักของ spine-leaf คือทุกเส้นทางมีจำนวน hop เท่ากัน → latency คาดเดาได้ และขยายแบนด์วิดท์ได้ด้วยการเพิ่ม spine (ใช้ ECMP กระจายโหลด)\n\n❌ ทำไมข้ออื่นผิด:\nA. การเพิ่ม leaf คือการเพิ่ม "พอร์ตให้เซิร์ฟเวอร์" ซึ่งกลับทำให้ oversubscription แย่ลง — ถ้าจะลด oversubscription ต้องเพิ่ม spine หรือเพิ่ม uplink\nB. spine-leaf ไม่เกี่ยวกับการจำกัดขนาด payload (นั่นเป็นเรื่อง MTU)\nD. spine-leaf รับส่งได้ทุกชนิดทราฟฟิก (unicast/multicast/broadcast) และเซิร์ฟเวอร์ไม่ได้ต่อกับ spine โดยตรง แต่ต่อกับ leaf\n\n📗 จำไว้สอบ: spine-leaf = 2-tier, full mesh ระหว่างชั้น, ทุกเส้นทาง 2 hop เท่ากัน, ใช้ ECMP, เหมาะกับ east-west traffic',
  },
  {
    id: 28,
    kind: 'single',
    prompt: 'What differentiates device management enabled by Cisco DNA Center from traditional campus device management?',
    options: [
      { key: 'A', text: 'CLI-oriented device' },
      { key: 'B', text: 'centralized' },
      { key: 'C', text: 'per-device' },
      { key: 'D', text: 'device-by-device hands-on' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบวิธีจัดการเครือข่าย 2 แบบ\n\n🔹 การจัดการแบบดั้งเดิม (traditional / per-device)\n• เข้าไปทีละตัวผ่าน console, Telnet หรือ SSH แล้วพิมพ์ CLI\n• แต่ละอุปกรณ์มี control plane และคอนฟิกของตัวเอง\n• เพิ่มสวิตช์ 50 ตัว = ทำงานเดิมซ้ำ 50 รอบ → ช้า ผิดพลาดง่าย คอนฟิกไม่สม่ำเสมอ\n\n🔹 การจัดการด้วย Cisco DNA Center (controller-based)\n• รวมศูนย์ไว้ที่คอนโทรลเลอร์เดียว = single pane of glass ⭐\n• ประกาศ "เจตนา" (intent-based) แล้วคอนโทรลเลอร์แปลงเป็นคอนฟิกส่งลงอุปกรณ์เอง ผ่าน southbound API (NETCONF/RESTCONF)\n• รองรับ zero-touch provisioning: แกะกล่อง เสียบสาย อุปกรณ์ดึงคอนฟิกมาเอง\n• มี Assurance คอยเก็บ telemetry เพื่อวิเคราะห์ปัญหาให้อัตโนมัติ\n\n✅ ทำไม B ถูก: จุดต่างที่ชัดที่สุดคือ "centralized" — จัดการทุกอุปกรณ์จากที่เดียว แทนที่จะไล่ทำทีละตัว\n\n❌ ทำไมข้ออื่นผิด:\nA. CLI-oriented คือลักษณะของวิธี "ดั้งเดิม" ไม่ใช่ของ DNA Center\nC. per-device เป็นลักษณะของวิธีดั้งเดิมเช่นกัน\nD. device-by-device hands-on ก็คือวิธีดั้งเดิม (เดินไปทำทีละตัว)\n\n📗 จำไว้สอบ: SDN/controller-based = แยก control plane ออกมารวมศูนย์ • northbound API = คุยกับแอป (REST) | southbound API = คุยกับอุปกรณ์ (NETCONF/RESTCONF/OpenFlow)',
  },
  {
    id: 29,
    kind: 'single',
    image: v3q29,
    prompt:
      'Refer to the exhibit. Router R1 is added to the network and configured with the 10.0.0.64/26 and 10.0.20.0/24 subnets. However, traffic destined for the LAN on R3 is not accessible. Which command when executed on R1 defines a static route to reach the R3 LAN?',
    options: [
      { key: 'A', text: 'ip route 10.0.15.0 255.255.255.0 10.0.20.1' },
      { key: 'B', text: 'ip route 10.0.15.0 255.255.255.192 10.0.20.1' },
      { key: 'C', text: 'ip route 10.0.0.64 255.255.255.192 10.0.20.3' },
      { key: 'D', text: 'ip route 10.0.15.0 255.255.255.0 10.0.20.3' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — static route ต้องระบุ 3 อย่างให้ถูก\n1️⃣ ปลายทาง = เครือข่ายที่ "ไปไม่ถึง"\n2️⃣ subnet mask ต้องตรงกับ prefix ของปลายทาง\n3️⃣ next-hop ต้องเป็น IP ของเราเตอร์ถัดไปที่อยู่ในซับเน็ตเดียวกับเรา\n\n🔍 อ่าน exhibit:\n• R1 = 10.0.20.1 (บน LAN กลาง 10.0.20.0/24) และมี LAN ของตัวเองคือ 10.0.0.64/26\n• R2 = 10.0.20.2 มี LAN 10.0.0.128/26\n• R3 = 10.0.20.3 ⭐ และ LAN ที่เข้าไม่ถึงคือ 10.0.15.0/24 ⭐\n\n🧮 แปลงเป็นคำสั่ง: ปลายทาง 10.0.15.0, mask ของ /24 = 255.255.255.0, next-hop = IP ของ R3 บนซับเน็ตร่วม = 10.0.20.3\n→ ip route 10.0.15.0 255.255.255.0 10.0.20.3\n\n✅ ทำไม D ถูก: ตรงครบทั้งปลายทาง mask และ next-hop\n\n❌ ทำไมข้ออื่นผิด:\nA. mask ถูก แต่ next-hop 10.0.20.1 คือ IP ของ R1 "ตัวเอง" → เท่ากับบอกให้ส่งกลับหาตัวเอง เกิด routing loop\nB. ผิดทั้ง mask (255.255.255.192 = /26 ไม่ตรงกับ /24) และ next-hop เป็นตัวเอง\nC. ปลายทาง 10.0.0.64/26 คือ LAN ของ R1 เองซึ่งเป็น connected route อยู่แล้ว ไม่ต้องเขียน static และไม่ได้แก้ปัญหา\n\n📗 จำไว้สอบ: ip route <dest-network> <mask> <next-hop|exit-interface> • next-hop ต้องอยู่ในซับเน็ตที่เราต่อถึงโดยตรง',
  },
  {
    id: 30,
    kind: 'drag',
    image: v3q30,
    prompt:
      'Refer to the exhibit (Router1 routing table). Drag and drop the prefix lengths from the left onto the corresponding prefixes on the right. Not all prefixes are used.',
    categories: [
      { name: '10.10.13.0', items: ['255.255.255.128'] },
      { name: '10.10.13.144', items: ['255.255.255.240'] },
      { name: '10.10.13.160', items: ['255.255.255.248'] },
      { name: '209.165.202.128', items: ['255.255.255.224'] },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['255.255.255.252'] },
    ],
    explanation:
      '📘 แนวคิด — แปลง prefix length (/xx) เป็น dotted-decimal mask\n• /24 = 255.255.255.0\n• /25 = 255.255.255.128 (block 128)\n• /26 = 255.255.255.192 (block 64)\n• /27 = 255.255.255.224 (block 32)\n• /28 = 255.255.255.240 (block 16)\n• /29 = 255.255.255.248 (block 8)\n• /30 = 255.255.255.252 (block 4)\n\n🔍 อ่านค่าจากตารางเราต์ใน exhibit แล้วจับคู่:\n• O 10.10.13.0/25 → /25 → 255.255.255.128 ✔\n• O 10.10.13.144/28 → /28 → 255.255.255.240 ✔\n• O 10.10.13.160/29 → /29 → 255.255.255.248 ✔\n• B 209.165.202.128 อยู่ใต้บรรทัด "209.165.202.0/27 is subnetted" → /27 → 255.255.255.224 ✔\n\n❌ ตัวลวงที่ไม่ได้ใช้: 255.255.255.252 (/30) — ในตารางเราต์ชุดนี้ prefix /30 มีแต่ 10.10.11.0/30 และ 10.10.12.0/30 ซึ่งไม่ได้อยู่ในรายการที่ต้องจับคู่\n\n💡 เคล็ดลับ: จำ 128/192/224/240/248/252 ให้ขึ้นใจ แล้วนับถอยหลังจาก /25 ได้เลย\n\n📗 จำไว้สอบ: บรรทัด "x.x.x.0/27 is subnetted" คือตัวบอก prefix ของเราต์ที่อยู่ใต้มัน • block size = 256 − ค่า mask octet สุดท้าย',
  },
  {
    id: 31,
    kind: 'single',
    prompt: 'What is a zero-day exploit?',
    options: [
      { key: 'A', text: 'It is when an attacker inserts malicious code into a SQL server.' },
      { key: 'B', text: 'It is when a new network vulnerability is discovered before a fix is available.' },
      { key: 'C', text: 'It is when the perpetrator inserts itself in a conversation between two parties and captures or alters data.' },
      { key: 'D', text: 'It is when the network is saturated with malicious traffic that overloads resources and bandwidth.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — คำศัพท์ภัยคุกคามที่ CCNA ชอบออก\n\n• Zero-day ⭐ → ช่องโหว่ที่เพิ่งถูกค้นพบและยังไม่มีแพตช์ออกมา ผู้ผลิตมีเวลา "ศูนย์วัน" ในการแก้ → อันตรายมากเพราะ IPS/AV ที่ใช้ signature ยังไม่รู้จัก\n• SQL injection → ยัดคำสั่ง SQL ผ่านช่องกรอกข้อมูลของเว็บ เพื่ออ่าน/แก้ฐานข้อมูล\n• Man-in-the-middle (MITM) → ผู้โจมตีแทรกตัวอยู่กลางบทสนทนา แอบดูหรือแก้ไขข้อมูล (เช่น ARP spoofing)\n• DoS / DDoS → ถล่มทราฟฟิกจนแบนด์วิดท์และทรัพยากรของเป้าหมายล้น\n\n✅ ทำไม B ถูก: ตรงนิยามของ zero-day — ช่องโหว่ถูกค้นพบก่อนที่จะมีวิธีแก้ (fix/patch) ให้ใช้\n\n❌ ทำไมข้ออื่นผิด:\nA. เป็นนิยามของ SQL injection\nC. เป็นนิยามของ man-in-the-middle / on-path attack\nD. เป็นนิยามของ DoS / DDoS\n\n💡 การป้องกัน zero-day ต้องพึ่งการตรวจจับเชิงพฤติกรรม (behavior-based) เช่น Cisco AMP/Talos ไม่ใช่ signature เพียงอย่างเดียว\n\n📗 จำไว้สอบ: vulnerability = จุดอ่อน | exploit = วิธีใช้ประโยชน์จากจุดอ่อน | threat = ผู้/สิ่งที่จะมาใช้ exploit นั้น | risk = โอกาส × ผลกระทบ',
  },
  {
    id: 32,
    kind: 'single',
    prompt:
      'After a recent security breach and a RADIUS failure, an engineer must secure the console port of each enterprise router with a local username and password. Which configuration must the engineer apply to accomplish this task?',
    options: [
      {
        key: 'A',
        text: 'aaa new-model / aaa authorization exec default local / aaa authentication login default radius / username localuser privilege 15 secret plaintextpassword',
      },
      { key: 'B', text: 'username localuser secret plaintextpassword / line con 0 / login authentication default / privilege level 15' },
      { key: 'C', text: 'username localuser secret plaintextpassword / line con 0 / no login local / privilege level 15' },
      { key: 'D', text: 'aaa new-model / line con 0 / password plaintextpassword / privilege level 15' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A แต่ A สั่ง aaa authentication login default radius ซึ่งบังคับให้ console ไปยืนยันตัวตนกับ RADIUS — ทั้งที่โจทย์บอกชัดว่า "RADIUS ล่ม" จึงขัดกับความต้องการโดยตรง คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — การรักษาความปลอดภัย console ด้วยบัญชีท้องถิ่น\nรูปแบบมาตรฐานคือ:\n• username <ชื่อ> secret <รหัส> → สร้างบัญชีในฐานข้อมูลท้องถิ่น (secret = เข้ารหัสแบบ hash ต่างจาก password ที่เป็น plaintext)\n• line con 0 → เข้าไปที่พอร์ต console\n• login local (หรือ login authentication <method-list> เมื่อเปิด AAA) → บังคับให้ถามทั้ง username และ password\n\n✅ ทำไม B ถูก: เป็นตัวเลือกเดียวที่ (1) สร้าง local username/secret จริง และ (2) ผูกการยืนยันตัวตนเข้ากับ line con 0 โดยไม่ไปพึ่ง RADIUS ที่ล่มอยู่ → ผู้ใช้ต้องกรอก username + password จากฐานข้อมูลท้องถิ่นจึงจะเข้า console ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. ตั้ง default method list เป็น radius → console จะไปถาม RADIUS ที่ล่ม และไม่มี local เป็น fallback (ถ้าจะถูกต้องต้องเขียนว่า ... default local หรือ ... default radius local)\nC. no login local คือการ "ยกเลิก" การบังคับ login → เปิดเครื่องทิ้งไว้ให้ใครก็เข้าได้ ตรงข้ามกับโจทย์\nD. อาศัยแค่ password ที่ระดับ line ไม่มี username เลย และเมื่อเปิด aaa new-model แล้ว บรรทัด password ใต้ line con 0 จะไม่ถูกใช้ด้วยซ้ำ\n\n💡 หมายเหตุ: คำถามนี้เป็นข้อที่เขียนไม่สมบูรณ์ (ตัวเลือกในอุดมคติควรเป็น line con 0 + login local) จึงต้องเลือก "ตัวที่ดีที่สุด" ตามเจตนาโจทย์\n\n📗 จำไว้สอบ: login = ถามแค่รหัสผ่าน | login local = ถาม username + password จากฐานข้อมูลในเครื่อง | secret ปลอดภัยกว่า password เพราะถูก hash',
  },
  {
    id: 33,
    kind: 'single',
    prompt: 'Which command implies the use of SNMPv3?',
    options: [
      { key: 'A', text: 'snmp-server community' },
      { key: 'B', text: 'snmp-server host' },
      { key: 'C', text: 'snmp-server enable traps' },
      { key: 'D', text: 'snmp-server user' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ SNMP แต่ละเวอร์ชัน\n\n• SNMPv1 / v2c → ยืนยันตัวตนด้วย "community string" ซึ่งเป็นข้อความธรรมดาวิ่งไปในเครือข่ายแบบไม่เข้ารหัส (ro = อ่านอย่างเดียว, rw = อ่านเขียน)\n• SNMPv3 ⭐ → เปลี่ยนมาใช้โมเดล user-based (USM) มี 3 ระดับความปลอดภัย:\n  ‑ noAuthNoPriv → ไม่ยืนยันตัวตน ไม่เข้ารหัส\n  ‑ authNoPriv → ยืนยันตัวตนด้วย MD5/SHA แต่ไม่เข้ารหัสข้อมูล\n  ‑ authPriv → ยืนยันตัวตน + เข้ารหัสด้วย DES/3DES/AES ⭐ ปลอดภัยที่สุด\n• การตั้งค่า SNMPv3 ต้องสร้าง group แล้วผูก user เข้ากับ group ด้วยคำสั่ง snmp-server user <user> <group> v3 auth sha <pass> priv aes 128 <key>\n\n✅ ทำไม D ถูก: คำสั่ง snmp-server user มีเฉพาะในโลกของ SNMPv3 เท่านั้น เพราะ v1/v2c ไม่มีแนวคิดเรื่อง "ผู้ใช้"\n\n❌ ทำไมข้ออื่นผิด:\nA. snmp-server community เป็นคำสั่งของ v1/v2c โดยเฉพาะ (v3 ไม่ใช้ community string)\nB. snmp-server host ใช้กำหนดปลายทางของ trap/inform ได้ในทุกเวอร์ชัน (ระบุ version ต่อท้ายได้ทั้ง 1, 2c และ 3)\nC. snmp-server enable traps ใช้เปิดชนิดของ trap ได้ในทุกเวอร์ชัน\n\n📗 จำไว้สอบ: SNMP = UDP 161 (query) / 162 (trap, inform) • trap ไม่มี ACK ส่วน inform มี ACK จึงเชื่อถือได้กว่า • v3 = ตัวเดียวที่เข้ารหัสได้',
  },
  {
    id: 34,
    kind: 'single',
    image: v3q34,
    prompt: 'Refer to the exhibit. Clients on the WLAN are required to use 802.11r. What action must be taken to meet the requirement?',
    options: [
      { key: 'A', text: 'Enable CCKM under Authentication Key Management' },
      { key: 'B', text: 'Under Protected Management Frames, set the PMF option to Required' },
      { key: 'C', text: 'Set the Fast Transition option to Enable and enable FT 802.1X under Authentication Key Management' },
      { key: 'D', text: 'Set the Fast Transition option and the WPA gtk-randomize State to disable' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — 802.11r คือมาตรฐาน Fast BSS Transition (FT) ที่ทำให้ไคลเอนต์ย้าย AP ได้เร็ว โดยเจรจากุญแจไว้ล่วงหน้าก่อนย้ายจริง เหมาะกับ VoIP/วิดีโอที่ทนความหน่วงไม่ได้\n\nขั้นตอนตั้งค่าใน WLC (GUI):\n1️⃣ WLANs → เลือก WLAN ID → แท็บ Security → Layer 2\n2️⃣ Layer 2 Security = WPA+WPA2 (จะทำให้ตัวเลือก FT ปรากฏ)\n3️⃣ ตั้ง Fast Transition = Enabled ⭐ (ในภาพตอนนี้เป็น Adaptive ซึ่งเป็นโหมดผสมสำหรับอุปกรณ์ Apple ยังไม่ใช่ 802.11r เต็มรูปแบบ)\n4️⃣ ใต้ Authentication Key Management เลือก FT 802.1X (แบบ Enterprise) หรือ FT PSK (แบบ Personal) ⭐\n\n🔍 อ่านจาก exhibit: Fast Transition = Adaptive และช่อง FT 802.1X ยัง "ไม่ถูกติ๊ก" (ติ๊กอยู่แค่ 802.1X ธรรมดา) → ยังไม่ได้ใช้ 802.11r จริง\n\n✅ ทำไม C ถูก: ต้องทำสองอย่างพร้อมกัน — เปลี่ยน Fast Transition เป็น Enable และติ๊ก FT 802.1X ใต้ AKM จึงจะบังคับให้ไคลเอนต์ใช้ 802.11r ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. CCKM (Cisco Centralized Key Management) เป็นกลไก fast roaming แบบเฉพาะของ Cisco ไม่ใช่มาตรฐาน 802.11r\nB. PMF (802.11w) คือการปกป้อง management frame คนละเรื่องกับ fast roaming (แม้ WPA3 จะบังคับใช้ก็ตาม)\nD. การปิด Fast Transition คือการปิด 802.11r ทิ้ง ตรงข้ามกับสิ่งที่โจทย์ต้องการ\n\n📗 จำไว้สอบ: 802.11r = Fast Transition (roaming เร็ว) | 802.11k = Neighbor Report (บอกว่ามี AP ไหนใกล้บ้าง) | 802.11v = BSS Transition Management (ชี้นำให้ย้าย AP) | 802.11w = PMF',
  },
  {
    id: 35,
    kind: 'single',
    prompt: 'When a switch receives a frame for an unknown destination MAC address, how is the frame handled?',
    options: [
      { key: 'A', text: 'broadcast to all ports on the switch' },
      { key: 'B', text: 'flooded to all ports except the origination port' },
      { key: 'C', text: 'forwarded to the first available port' },
      { key: 'D', text: 'inspected and dropped by the switch' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — หน้าที่หลัก 3 อย่างของสวิตช์ Layer 2\n1️⃣ Learning → อ่าน source MAC ของเฟรมที่เข้ามา แล้วจดคู่ MAC ↔ พอร์ต ↔ VLAN ลงตาราง MAC address table (อายุเริ่มต้น 300 วินาที)\n2️⃣ Forwarding / Filtering → ถ้า destination MAC อยู่ในตาราง ส่งออกพอร์ตนั้นพอร์ตเดียว (frame switching) และไม่ส่งออกพอร์ตอื่น (frame filtering)\n3️⃣ Flooding ⭐ → ถ้า destination MAC "ไม่รู้จัก" (unknown unicast) ให้ส่งออกทุกพอร์ตใน VLAN เดียวกัน "ยกเว้นพอร์ตที่เฟรมเข้ามา"\n\n💡 เฟรม 3 ประเภทที่ถูก flood เหมือนกัน เรียกรวมว่า BUM traffic: Broadcast, Unknown unicast, Multicast\n\n✅ ทำไม B ถูก: เป็นนิยามตรง ๆ ของ unknown unicast flooding — ส่งออกทุกพอร์ตใน VLAN นั้น ยกเว้นพอร์ตต้นทาง (เพราะถ้าส่งกลับไปทางเดิมจะกลายเป็นวนกลับหาผู้ส่ง)\n\n❌ ทำไมข้ออื่นผิด:\nA. คำว่า broadcast ใช้กับเฟรมที่มีปลายทาง FFFF.FFFF.FFFF และที่สำคัญ "ทุกพอร์ต" รวมพอร์ตต้นทางด้วยนั้นผิด — ต้องยกเว้นพอร์ตต้นทางเสมอ และต้องจำกัดอยู่ใน VLAN เดียวกันด้วย\nC. สวิตช์ไม่ได้เลือกพอร์ตแบบสุ่มหรือ "พอร์ตแรกที่ว่าง" — นั่นไม่มีอยู่จริง\nD. สวิตช์จะไม่ทิ้งเฟรมเพียงเพราะไม่รู้จักปลายทาง (การทิ้งจะเกิดเมื่อ FCS ผิด, ถูก ACL/port-security บล็อก หรือพอร์ตอยู่สถานะ blocking ของ STP)\n\n📗 จำไว้สอบ: unknown unicast + broadcast + multicast = flood ภายใน VLAN เดียวกัน • VLAN = broadcast domain • MAC aging timer เริ่มต้น 300 วินาที',
  },
  {
    id: 36,
    kind: 'single',
    prompt: 'What is the default port-security behavior on a trunk link?',
    options: [
      { key: 'A', text: 'It causes a network loop when a violation occurs.' },
      { key: 'B', text: 'It disables the native VLAN configuration as soon as port security is enabled.' },
      { key: 'C', text: 'It places the port in the err-disabled state if it learns more than one MAC address.' },
      { key: 'D', text: 'It places the port in the err-disabled state after 10 MAC addresses are statically configured.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ค่าเริ่มต้นของ port security เมื่อพิมพ์แค่ switchport port-security\n• maximum = 1 MAC address ⭐ (ไม่ว่าพอร์ตจะเป็น access หรือ trunk ก็ตาม)\n• violation mode = shutdown ⭐ → เมื่อละเมิดจะดับพอร์ตเป็น err-disabled ทันที\n• aging = 0 (ไม่หมดอายุ), aging type = absolute\n\n🔍 โหมดการละเมิด 3 แบบ:\n• protect → ทิ้งเฟรมของ MAC ส่วนเกินเงียบ ๆ ไม่มี log ไม่นับ counter\n• restrict → ทิ้งเฟรม + เพิ่ม SecurityViolation counter + ส่ง SNMP trap/syslog (พอร์ตยังใช้งานได้)\n• shutdown (ค่าเริ่มต้น) → ดับพอร์ตเป็น err-disabled ⭐\n\n✅ ทำไม C ถูก: เมื่อเปิด port security บนพอร์ต trunk โดยไม่ระบุอะไรเพิ่ม ค่าเริ่มต้น maximum 1 + violation shutdown จะทำให้พอร์ตกลายเป็น err-disabled ทันทีที่เรียนรู้ MAC ตัวที่ 2\n💡 นี่คือเหตุผลว่าทำไมไม่ควรเปิด port security บน trunk โดยไม่ตั้ง maximum ให้เหมาะสม เพราะ trunk มี MAC วิ่งผ่านนับสิบนับร้อย\n\n❌ ทำไมข้ออื่นผิด:\nA. port security ไม่ทำให้เกิดลูป — มันปิดพอร์ตต่างหาก (ป้องกันลูปเป็นหน้าที่ของ STP)\nB. port security ไม่ยุ่งกับการตั้งค่า native VLAN เลย\nD. ค่าเริ่มต้น maximum คือ 1 ไม่ใช่ 10 และการละเมิดนับจาก MAC ที่ "เรียนรู้ได้จริง" ไม่ใช่จำนวนที่คอนฟิกแบบ static\n\n💡 กู้พอร์ตคืนได้ด้วย shutdown → no shutdown หรือตั้ง errdisable recovery cause psecure-violation\n\n📗 จำไว้สอบ: default = max 1 MAC + violation shutdown • protect เงียบ / restrict มี log / shutdown ดับพอร์ต',
  },
  {
    id: 37,
    kind: 'single',
    image: v3q37,
    prompt: 'Refer to the exhibit. How many objects are present in the given JSON-encoded data?',
    options: [
      { key: 'A', text: 'one' },
      { key: 'B', text: 'four' },
      { key: 'C', text: 'seven' },
      { key: 'D', text: 'nine' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ชนิดข้อมูลใน JSON\n• object → อยู่ในวงเล็บปีกกา { } เก็บคู่ "key": value ⭐\n• array → อยู่ในวงเล็บเหลี่ยม [ ] เก็บรายการเรียงลำดับ\n• string → อยู่ในเครื่องหมายคำพูด "…"\n• number → ตัวเลขล้วน ไม่มีเครื่องหมายคำพูด\n• Boolean → true / false\n• null\n\n🧮 วิธีนับเร็ว: นับจำนวนวงเล็บปีกกาเปิด { (หรือปิด }) ทั้งหมด\n\n🔍 ไล่นับจาก exhibit:\n1. { นอกสุด (root object)\n2. "aaaUser": {\n3.   "attributes": { (pwd, firstName, lastName, phone, email)\n4.   "children": [{ ← สมาชิกตัวแรกของ array\n5.     "aaaUserRole": {\n6.       "attributes": { (name: ExampleCisco)\n7.       "children": [{ ← สมาชิกของ array ชั้นใน\n8.         "aaaUserRole": {\n9.           "attributes": { (name: admin)\n→ รวม 9 object\n\n✅ ทำไม D ถูก: นับปีกกาได้ 9 คู่ จึงมี 9 object (สังเกตว่า array มี 2 ชุด แต่ array ไม่นับเป็น object)\n\n❌ ทำไมข้ออื่นผิด:\nA. one คือมองแค่ object นอกสุด ลืมนับ object ที่ซ้อนอยู่ข้างใน\nB. four น้อยเกินไป — แค่ระดับบนก็มีเกิน 4 แล้ว\nC. seven ตกหล่นไป 2 ตัว (มักลืมนับ object ที่อยู่ภายใน array)\n\n📗 จำไว้สอบ: { } = object | [ ] = array | key ต้องเป็น string ในเครื่องหมายคำพูดเสมอ • YAML ใช้การเยื้องบรรทัดแทนวงเล็บ, XML ใช้แท็ก',
  },
  {
    id: 38,
    kind: 'multi',
    prompt: 'What are two examples of multifactor authentication? (Choose two)',
    options: [
      { key: 'A', text: 'single sign-on' },
      { key: 'B', text: 'unique user knowledge' },
      { key: 'C', text: 'passwords that expire' },
      { key: 'D', text: 'soft tokens' },
      { key: 'E', text: 'shared password responsibility' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — Multifactor authentication (MFA) คือการใช้ปัจจัยยืนยันตัวตนจาก "คนละประเภท" ตั้งแต่ 2 อย่างขึ้นไป\n\nปัจจัยมี 3 ประเภทหลัก:\n1️⃣ Something you know (สิ่งที่คุณรู้) ⭐ → รหัสผ่าน, PIN, คำตอบคำถามลับ = unique user knowledge\n2️⃣ Something you have (สิ่งที่คุณมี) ⭐ → soft token (แอป Duo/Google Authenticator ที่สร้างรหัส OTP), hard token, สมาร์ตการ์ด, โทรศัพท์มือถือ\n3️⃣ Something you are (สิ่งที่คุณเป็น) → ลายนิ้วมือ, สแกนม่านตา, ใบหน้า\n\n✅ ทำไม B, D ถูก:\n• B = unique user knowledge → ปัจจัยประเภท "รู้"\n• D = soft tokens → ปัจจัยประเภท "มี"\nสองอย่างนี้มาจากคนละประเภท จึงประกอบกันเป็น multifactor ได้จริง\n\n❌ ทำไมข้ออื่นผิด:\nA. single sign-on คือการล็อกอินครั้งเดียวแล้วใช้ได้หลายระบบ — เป็นเรื่องความสะดวก ไม่ใช่การเพิ่มปัจจัย (จะใช้ MFA ร่วมกับ SSO ก็ได้ แต่ SSO เองไม่ใช่ MFA)\nC. รหัสผ่านที่หมดอายุคือนโยบายรหัสผ่าน — ยังคงเป็นปัจจัยเดียว (สิ่งที่รู้) แค่เปลี่ยนบ่อยขึ้น\nE. การแชร์รหัสผ่านร่วมกันเป็นสิ่งที่ "ลด" ความปลอดภัย และไม่ใช่ปัจจัยยืนยันตัวตน\n\n📗 จำไว้สอบ: MFA = ปัจจัยจากคนละประเภท • รหัสผ่าน + PIN ยังนับเป็นปัจจัยเดียว (know + know) ไม่ใช่ MFA',
  },
  {
    id: 39,
    kind: 'single',
    image: v3q39,
    prompt: 'Refer to the exhibit. What is the subnet mask of the route to the 10.10.13.160 prefix?',
    options: [
      { key: 'A', text: '255.255.255.240' },
      { key: 'B', text: '255.255.255.128' },
      { key: 'C', text: '255.255.248.0' },
      { key: 'D', text: '255.255.255.248' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แปลง /29 เป็น dotted-decimal\n/29 หมายถึงบิต 1 จำนวน 29 ตัวเรียงจากซ้าย:\n11111111.11111111.11111111.11111000 → 255.255.255.248 ⭐\n\nตารางแปลงอ็อกเท็ตสุดท้ายที่ต้องจำ:\n• /25 → 128 | /26 → 192 | /27 → 224 | /28 → 240 | /29 → 248 | /30 → 252 | /31 → 254 | /32 → 255\n\n🔍 อ่านจาก exhibit: บรรทัด O 10.10.13.160/29 [110/2] via 10.10.10.1, GigabitEthernet0/0 → prefix คือ /29\n\n🧮 /29 → block size = 256 − 248 = 8 → ซับเน็ตนี้ครอบ 10.10.13.160–10.10.13.167 (network .160, broadcast .167, ใช้ได้ .161–.166 รวม 6 โฮสต์)\n\n✅ ทำไม D ถูก: /29 = 255.255.255.248 ตรงตามตาราง\n\n❌ ทำไมข้ออื่นผิด:\nA. 255.255.255.240 คือ /28 ซึ่งเป็นของบรรทัด 10.10.13.128/28 และ 10.10.13.144/28\nB. 255.255.255.128 คือ /25 ซึ่งเป็นของบรรทัด 10.10.13.0/25\nC. 255.255.248.0 คือ /21 ซึ่งเป็น mask ระดับอ็อกเท็ตที่ 3 ไม่ปรากฏในตารางนี้เลย (ระวังอย่าสับสนตำแหน่งของเลข 248)\n\n📗 จำไว้สอบ: /29 = 255.255.255.248 = 8 IP = 6 usable • ตำแหน่งของเลขสำคัญพอ ๆ กับตัวเลขเอง',
  },
  {
    id: 40,
    kind: 'single',
    image: v3q40,
    prompt:
      "Refer to the exhibit. Routers R1, R2, and R3 use a protocol to identify their neighbors' IP addresses, hardware platforms, and software versions. A network engineer must configure R2 to avoid sharing any neighbor information with R3, and maintain its relationship with R1. What action meets this requirement?",
    options: [
      { key: 'A', text: 'Configure the no lldp run command globally' },
      { key: 'B', text: 'Configure the no lldp receive command on g0/1' },
      { key: 'C', text: 'Configure the no cdp run command globally' },
      { key: 'D', text: 'Configure the no cdp enable command on g0/2' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — CDP vs LLDP และขอบเขตของคำสั่ง\n\n🔹 CDP (Cisco Discovery Protocol)\n• เป็นของ Cisco และ "เปิดใช้งานโดยค่าเริ่มต้น" ⭐ → โจทย์บอกว่าเราเตอร์กำลังเห็นข้อมูลเพื่อนบ้านอยู่แล้ว จึงหมายถึง CDP\n• ปิดทั้งเครื่อง: no cdp run (global) | ปิดเฉพาะพอร์ต: no cdp enable (interface) ⭐\n• ส่ง advertisement ทุก 60 วินาที, holdtime 180 วินาที\n\n🔹 LLDP (802.1AB มาตรฐานกลาง)\n• "ปิดอยู่โดยค่าเริ่มต้น" บนอุปกรณ์ Cisco → ถ้ายังไม่เคยสั่ง lldp run ก็ไม่มีอะไรให้ปิด\n• เปิดทั้งเครื่อง: lldp run | ควบคุมรายพอร์ต: no lldp transmit / no lldp receive\n• ส่งทุก 30 วินาที, holdtime 120 วินาที\n\n🔍 โจทย์ต้องการ: หยุดแชร์ข้อมูลกับ R3 (ต่อผ่าน g0/2) แต่ยังคงความสัมพันธ์กับ R1 (ต่อผ่าน g0/1) → ต้องปิดเฉพาะอินเทอร์เฟซเดียว ไม่ใช่ทั้งเครื่อง\n\n✅ ทำไม D ถูก: no cdp enable ใต้ interface g0/2 ปิด CDP เฉพาะขาที่ไป R3 ส่วน g0/1 ที่ไป R1 ยังทำงานปกติ — ตรงตามเงื่อนไขทั้งสองข้อ\n\n❌ ทำไมข้ออื่นผิด:\nA. no lldp run ปิด LLDP ทั้งเครื่อง แต่ LLDP ปิดอยู่แล้วโดยค่าเริ่มต้น จึงไม่มีผลใด ๆ\nB. no lldp receive บน g0/1 ผิดทั้งโปรโตคอลและผิดอินเทอร์เฟซ (g0/1 คือขาที่ไป R1 ซึ่งต้องคงไว้)\nC. no cdp run ปิด CDP ทั้งเครื่อง → R2 จะเลิกคุยกับ R1 ด้วย ผิดเงื่อนไขข้อที่สอง\n\n📗 จำไว้สอบ: CDP เปิดโดยค่าเริ่มต้น / LLDP ปิดโดยค่าเริ่มต้น • no cdp run = ทั้งเครื่อง, no cdp enable = รายพอร์ต • LLDP รายพอร์ตใช้ no lldp transmit / no lldp receive',
  },
  {
    id: 41,
    kind: 'single',
    prompt: 'What is a function of an endpoint?',
    options: [
      { key: 'A', text: 'It passes unicast communication between hosts in a network' },
      { key: 'B', text: 'It is used directly by an individual user to access network services' },
      { key: 'C', text: 'It provides security between trusted and untrusted sections of the network' },
      { key: 'D', text: 'It transmits broadcast traffic between devices in the same VLAN' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — endpoint (อุปกรณ์ปลายทาง) คืออะไร\n• คืออุปกรณ์ที่อยู่ "ปลายสุด" ของเครือข่าย ซึ่งผู้ใช้ใช้งานโดยตรงเพื่อเข้าถึงบริการต่าง ๆ\n• ตัวอย่าง: พีซี โน้ตบุ๊ก สมาร์ตโฟน แท็บเล็ต IP phone เครื่องพิมพ์ กล้อง IP อุปกรณ์ IoT\n• เป็นต้นทาง/ปลายทางของข้อมูล ไม่ใช่ตัวส่งต่อข้อมูลของคนอื่น\n• ตรงข้ามกับ intermediary device (สวิตช์ เราเตอร์ ไฟร์วอลล์ AP) ที่ทำหน้าที่ "ส่งต่อ" ทราฟฟิก\n\n✅ ทำไม B ถูก: ตรงนิยาม — endpoint คือจุดที่ผู้ใช้แต่ละคนใช้งานเพื่อเข้าถึงบริการเครือข่าย\n\n❌ ทำไมข้ออื่นผิด:\nA. การส่งต่อ (forward) ทราฟฟิก unicast ระหว่างโฮสต์เป็นหน้าที่ของสวิตช์/เราเตอร์ ไม่ใช่ endpoint\nC. การกั้นระหว่างโซนที่เชื่อถือได้กับเชื่อถือไม่ได้เป็นหน้าที่ของไฟร์วอลล์\nD. การกระจาย broadcast ภายใน VLAN เป็นพฤติกรรมของสวิตช์\n\n💡 ในบริบทความปลอดภัย "endpoint security" หมายถึงการป้องกันที่ตัวอุปกรณ์ผู้ใช้ เช่น Cisco Secure Endpoint (AMP for Endpoints)\n\n📗 จำไว้สอบ: endpoint = ต้นทาง/ปลายทางของข้อมูลที่ผู้ใช้ใช้งานตรง ๆ | intermediary device = สวิตช์/เราเตอร์/ไฟร์วอลล์/AP ที่ทำหน้าที่ส่งต่อ',
  },
  {
    id: 42,
    kind: 'multi',
    image: v3q42,
    prompt:
      'Refer to the exhibit. A network engineer started to configure port security on a new switch. These requirements must be met: MAC addresses must be learned dynamically; log messages must be generated without disabling the interface when unwanted traffic is seen. Which two commands must be configured to complete this task? (Choose two)',
    options: [
      { key: 'A', text: 'SW(config-if)#switchport port-security mac-address 0010.7B84.45E6' },
      { key: 'B', text: 'SW(config-if)#switchport port-security maximum 2' },
      { key: 'C', text: 'SW(config-if)#switchport port-security mac-address sticky' },
      { key: 'D', text: 'SW(config-if)#switchport port-security violation shutdown' },
      { key: 'E', text: 'SW(config-if)#switchport port-security violation restrict' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — แยกความต้องการเป็น 2 ข้อ แล้วจับคู่คำสั่ง\n\n1️⃣ "MAC addresses must be learned dynamically" (พหูพจน์ = มากกว่า 1 ตัว)\n• dynamic = ปล่อยให้สวิตช์เรียนรู้เอง ไม่ระบุ MAC แบบ static และไม่ใช้ sticky (เพราะ sticky จะจดลง running-config กลายเป็นแบบกึ่งถาวร)\n• เนื่องจากใช้คำว่า addresses (พหูพจน์) จึงต้องเพิ่ม maximum จากค่าเริ่มต้น 1 → maximum 2 ⭐\n\n2️⃣ "Log messages must be generated without disabling the interface"\n• เทียบโหมดการละเมิด:\n  ‑ protect → ทิ้งเฟรมเงียบ ๆ ไม่มี log ไม่มี counter ✘ (ไม่มี log)\n  ‑ restrict ⭐ → ทิ้งเฟรม + เพิ่ม SecurityViolation counter + ส่ง SNMP trap และ syslog โดยพอร์ตยังทำงานอยู่ ✔\n  ‑ shutdown (ค่าเริ่มต้น) → ดับพอร์ตเป็น err-disabled ✘ (ปิดอินเทอร์เฟซ)\n\n✅ ทำไม B, E ถูก: maximum 2 รองรับการเรียนรู้ MAC หลายตัวแบบไดนามิก และ violation restrict สร้าง log โดยไม่ดับพอร์ต — ครบทั้งสองเงื่อนไข\n\n❌ ทำไมข้ออื่นผิด:\nA. ระบุ MAC เจาะจง = static ขัดกับคำว่า "learned dynamically"\nC. sticky แม้จะเรียนรู้เองแต่จะเขียน MAC ลง running-config กลายเป็นค่าคงที่ ไม่ใช่ dynamic ล้วน\nD. shutdown จะปิดอินเทอร์เฟซ ซึ่งโจทย์ห้ามไว้ชัดเจน\n\n📗 จำไว้สอบ: protect=เงียบ | restrict=log+counter+ยังใช้งานได้ | shutdown=err-disabled (ค่าเริ่มต้น) • ค่าเริ่มต้น maximum = 1',
  },
  {
    id: 43,
    kind: 'multi',
    prompt: 'What are two features of the DHCP relay agent? (Choose two)',
    options: [
      { key: 'A', text: 'minimizes the necessary number of DHCP servers' },
      { key: 'B', text: 'assigns DNS locally and then forwards request to DHCP server' },
      { key: 'C', text: 'is configured under the Layer 3 interface of a router on the client subnet' },
      { key: 'D', text: 'allows only MAC-to-IP reservations to determine the local subnet of a client' },
      { key: 'E', text: 'permits one IP helper command under an individual Layer 3 interface' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — DHCP relay agent แก้ปัญหาอะไร\n• ข้อความ DHCPDISCOVER ของไคลเอนต์เป็น "broadcast" (ปลายทาง 255.255.255.255) และเราเตอร์ไม่ส่งต่อ broadcast ข้ามซับเน็ต\n• ถ้าไม่มี relay agent จะต้องวาง DHCP server ไว้ในทุก ๆ ซับเน็ต\n• relay agent จะ "แปลง" broadcast นั้นเป็น unicast แล้วส่งไปยัง DHCP server ที่อยู่ต่างซับเน็ต พร้อมใส่ค่า giaddr (gateway IP address) เพื่อบอกเซิร์ฟเวอร์ว่าไคลเอนต์อยู่ซับเน็ตไหน จะได้เลือก pool ถูก\n• คำสั่ง: เข้าไปที่อินเทอร์เฟซ Layer 3 ที่หันหน้าเข้าหาไคลเอนต์ แล้วสั่ง ip helper-address <IP ของ DHCP server> ⭐\n\n✅ ทำไม A, C ถูก:\n• A → มี relay agent แล้วใช้ DHCP server รวมศูนย์เพียงตัวเดียว (หรือไม่กี่ตัว) บริการได้ทุกซับเน็ต จึงลดจำนวนเซิร์ฟเวอร์ที่ต้องมี ✔\n• C → ต้องคอนฟิก ip helper-address บนอินเทอร์เฟซ Layer 3 ของเราเตอร์ที่อยู่ "ในซับเน็ตเดียวกับไคลเอนต์" เพราะมันต้องเป็นตัวรับ broadcast นั้น ✔\n\n❌ ทำไมข้ออื่นผิด:\nB. relay agent ไม่ได้แจก DNS เอง — ค่าทั้งหมด (DNS, default gateway, lease) มาจาก DHCP server\nD. relay agent ระบุซับเน็ตของไคลเอนต์ด้วยฟิลด์ giaddr ไม่ใช่การจอง MAC-to-IP\nE. ใส่ ip helper-address ได้ "มากกว่าหนึ่งบรรทัด" ต่ออินเทอร์เฟซ (เพื่อทำ redundancy ของ DHCP server)\n\n📗 จำไว้สอบ: DHCP = UDP 67 (server) / 68 (client) • ลำดับ DORA = Discover, Offer, Request, Acknowledge • ip helper-address ยังส่งต่อ broadcast UDP อื่นได้ด้วย เช่น TFTP 69, DNS 53, NTP 37/123, NetBIOS 137/138',
  },
  {
    id: 44,
    kind: 'single',
    image: v3q44,
    prompt:
      'Refer to the exhibit. A network engineer must configure router R1 with a host route to the server. Which command must the engineer configure?',
    options: [
      { key: 'A', text: 'R1(config)#ip route 10.10.10.10 255.255.255.255 192.168.0.2' },
      { key: 'B', text: 'R1(config)#ip route 10.10.10.0 255.255.255.0 192.168.0.2' },
      { key: 'C', text: 'R1(config)#ip route 0.0.0.0 0.0.0.0 192.168.0.2' },
      { key: 'D', text: 'R1(config)#ip route 192.168.0.2 255.255.255.255 10.10.10.10' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ชนิดของ static route\n• Host route ⭐ → ชี้ไปยัง IP "เครื่องเดียว" ใช้ mask /32 = 255.255.255.255\n• Network route → ชี้ไปยังทั้งซับเน็ต เช่น /24 = 255.255.255.0\n• Default route → 0.0.0.0 0.0.0.0 ใช้เมื่อไม่มี prefix ใด match\n• Floating static → static ที่ตั้ง AD สูงกว่าปกติเพื่อเป็นเส้นสำรอง\n\n🔍 อ่าน exhibit:\n• Router 1 ต่อกับ Router 2 ผ่าน S0/0 บนลิงก์ 192.168.0.0/30 → R1 = 192.168.0.1, R2 = 192.168.0.2 ⭐ (next-hop คือ 192.168.0.2)\n• Server = 10.10.10.10/24 อยู่หลัง Router 2\n\n🧮 ประกอบคำสั่ง: ip route <ปลายทาง> <mask> <next-hop> → ip route 10.10.10.10 255.255.255.255 192.168.0.2\n\n✅ ทำไม A ถูก: ใช้ mask /32 จึงเป็น host route ที่ชี้ไปเซิร์ฟเวอร์เครื่องนั้นตัวเดียวตามที่โจทย์ขอ และ next-hop คือ IP ของ R2 บนลิงก์ที่ต่อกันอยู่\n\n❌ ทำไมข้ออื่นผิด:\nB. เป็น network route ของทั้งซับเน็ต /24 ไม่ใช่ host route ตามที่โจทย์ระบุ\nC. เป็น default route ครอบคลุมทุกปลายทาง ไม่ใช่ host route\nD. กลับด้าน — เอา next-hop (192.168.0.2) ไปเป็นปลายทาง และเอา IP เซิร์ฟเวอร์ไปเป็น next-hop ซึ่ง 10.10.10.10 ก็ไม่ได้อยู่ในซับเน็ตที่ R1 ต่อถึงโดยตรงด้วย\n\n📗 จำไว้สอบ: host route = /32 (IPv4) หรือ /128 (IPv6) • next-hop ต้องอยู่ในซับเน็ตที่เราต่อถึงโดยตรงเสมอ',
  },
  {
    id: 45,
    kind: 'single',
    prompt: 'In a cloud-computing environment, what is rapid elasticity?',
    options: [
      { key: 'A', text: 'automatic adjustment of capacity based on need' },
      { key: 'B', text: 'control and monitoring of resource consumption by the tenant' },
      { key: 'C', text: 'pooling resources in a multitenant model based on need' },
      { key: 'D', text: 'self-service of computing resources by the tenant' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — 5 คุณลักษณะสำคัญของ cloud computing ตามนิยาม NIST (ออกสอบบ่อย)\n\n1️⃣ On-demand self-service → ผู้ใช้กดสั่งทรัพยากรได้เองโดยไม่ต้องรอเจ้าหน้าที่\n2️⃣ Broad network access → เข้าถึงได้จากทุกที่ผ่านเครือข่ายมาตรฐาน ทุกอุปกรณ์\n3️⃣ Resource pooling → ผู้ให้บริการรวมทรัพยากรเป็นกองกลาง แล้วแบ่งปันให้ผู้เช่าหลายรายแบบ multi-tenant\n4️⃣ Rapid elasticity ⭐ → ขยาย/ลดขนาดทรัพยากรได้อย่างรวดเร็วและอัตโนมัติตามความต้องการ ในมุมมองผู้ใช้ดูเหมือนทรัพยากรไม่มีที่สิ้นสุด\n5️⃣ Measured service → วัดและคิดเงินตามการใช้งานจริง (pay-as-you-go)\n\n✅ ทำไม A ถูก: rapid elasticity คือความสามารถปรับ "ความจุ" ขึ้นลงอัตโนมัติตามโหลด เช่น เว็บมีคนเข้าพุ่ง ระบบเพิ่มเซิร์ฟเวอร์เอง พอคนน้อยก็ลดลงเอง\n\n❌ ทำไมข้ออื่นผิด:\nB. การควบคุมและติดตามปริมาณการใช้ทรัพยากร = measured service\nC. การรวมทรัพยากรแบบ multi-tenant = resource pooling\nD. การที่ผู้เช่ากดสั่งทรัพยากรได้เอง = on-demand self-service\n\n💡 อย่าสับสน: scalability = ความสามารถรองรับการเติบโตในระยะยาว | elasticity = การปรับขึ้นลงแบบเรียลไทม์ตามโหลด\n\n📗 จำไว้สอบ: โมเดลบริการ = IaaS (เช่าเครื่อง) < PaaS (เช่าแพลตฟอร์ม) < SaaS (ใช้แอปสำเร็จรูป) • โมเดลการติดตั้ง = public, private, hybrid, community',
  },
  {
    id: 46,
    kind: 'drag',
    image: v3q46,
    prompt: 'Drag and drop the steps in a standard DNS lookup operation from the left into the order on the right.',
    categories: [
      { name: 'Step 1', items: ['An endpoint submits a request for the IP address of a domain name'] },
      { name: 'Step 2', items: ['The DNS submits a request to a root DNS server'] },
      { name: 'Step 3', items: ['The DNS submits a request to the domain DNS server'] },
      { name: 'Step 4', items: ['The DNS receives a reply from the domain DNS server'] },
      { name: 'Step 5', items: ['The DNS responds to the endpoint'] },
    ],
    explanation:
      '📘 แนวคิด — DNS resolution แบบ recursive (ในโจทย์ "The DNS" หมายถึง local DNS server / recursive resolver)\n\nลำดับที่เกิดขึ้นจริง:\n1️⃣ ไคลเอนต์ (endpoint) ถาม local DNS server ว่า "โดเมนนี้ IP อะไร" ⭐\n2️⃣ local DNS server ยังไม่มีคำตอบใน cache → ไปถาม root DNS server ⭐ (มี 13 กลุ่มทั่วโลก a–m.root-servers.net)\n3️⃣ root ตอบกลับว่าให้ไปถาม TLD server (.com/.net/.org) → resolver ถาม TLD → TLD บอก IP ของ authoritative DNS server ของโดเมนนั้น → resolver จึงส่งคำถามไปยัง domain DNS server ⭐\n4️⃣ domain DNS server (authoritative) ตอบ IP กลับมาให้ resolver ⭐\n5️⃣ resolver ส่งคำตอบกลับไปให้ไคลเอนต์ และเก็บลง cache ตามค่า TTL ⭐\n\n💡 กุญแจการเรียงลำดับ: "ล่างสุด → บนสุด → กลับลงมา" คือ endpoint → resolver → root → TLD → authoritative → resolver → endpoint\n\n💡 ชนิดเรคคอร์ดที่ควรรู้: A (IPv4), AAAA (IPv6), CNAME (ชื่อเล่น), MX (เมล), NS (name server), PTR (reverse lookup)\n\n📗 จำไว้สอบ: DNS ใช้ UDP 53 สำหรับ query ทั่วไป และ TCP 53 เมื่อคำตอบใหญ่เกิน 512 ไบต์ หรือทำ zone transfer',
  },
  {
    id: 47,
    kind: 'single',
    prompt:
      'What must be considered for a locally switched FlexConnect AP if the VLANs that are used by the AP and client access are different?',
    options: [
      { key: 'A', text: 'The APs must be connected to the switch with multiple links in LAG mode.' },
      { key: 'B', text: 'The native VLAN must match the management VLAN of the AP.' },
      { key: 'C', text: 'The switch port mode must be set to trunk.' },
      { key: 'D', text: 'IEEE 802.1Q trunking must be disabled on the switch port.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — FlexConnect กับการวางทราฟฟิกลง VLAN\n\n🔹 FlexConnect (เดิมชื่อ H-REAP) ใช้กับ AP ที่สาขา แต่ WLC อยู่ที่สำนักงานใหญ่\n• Central switching → ทราฟฟิกไคลเอนต์ถูกห่อ CAPWAP ส่งข้ามไปแตกที่ WLC\n• Local switching ⭐ → AP แตกทราฟฟิกไคลเอนต์ลงสวิตช์ที่สาขาเลย ไม่ต้องวิ่งข้าม WAN → ต้องมี VLAN สำหรับไคลเอนต์อยู่บนสวิตช์ที่สาขา\n\n🔍 เมื่อ VLAN ของ AP (management) ต่างจาก VLAN ของไคลเอนต์:\n• AP ต้องส่งทั้งทราฟฟิกจัดการของตัวเอง (ปกติวิ่งบน native VLAN แบบไม่ติดแท็ก) และทราฟฟิกไคลเอนต์แต่ละ SSID (ติดแท็ก VLAN ต่างกัน) ออกสายเส้นเดียวกัน\n• สายเส้นเดียวที่พาหลาย VLAN ได้ = trunk (802.1Q) ⭐\n\n✅ ทำไม C ถูก: เอกสาร Cisco แนะนำให้ตั้งพอร์ตสวิตช์ที่ต่อ FlexConnect AP เป็น trunk เพื่อแยกทราฟฟิกไคลเอนต์ (ติดแท็ก) ออกจาก VLAN จัดการของ AP (native, ไม่ติดแท็ก) ถ้าตั้งเป็น access port ทุกอย่างจะไปกองรวมใน VLAN เดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. LAG (การรวมลิงก์) เป็นเรื่องแบนด์วิดท์/ความซ้ำซ้อน ไม่ได้แก้ปัญหาการแยก VLAN\nB. ต้องเป็น "native VLAN ของพอร์ต ต้องตรงกับ native VLAN ที่ตั้งไว้บน AP" ไม่ใช่ "ตรงกับ management VLAN" — ประโยคนี้ถูกเขียนหลอกไว้\nD. ถ้าปิด 802.1Q trunking ก็จะส่งได้แค่ VLAN เดียว ตรงข้ามกับสิ่งที่ต้องการ\n\n📗 จำไว้สอบ: FlexConnect local switching = ต้องใช้ trunk port + ตั้ง VLAN mapping บน AP • central switching = ทราฟฟิกวิ่งกลับ WLC ผ่าน CAPWAP',
  },
  {
    id: 48,
    kind: 'single',
    prompt: 'Which command configures the Cisco WLC to prevent a serial session with the WLC CLI from being automatically logged out?',
    options: [
      { key: 'A', text: 'config sessions maxsessions 0' },
      { key: 'B', text: 'config serial timeout 9600' },
      { key: 'C', text: 'config serial timeout 0' },
      { key: 'D', text: 'config sessions timeout 0' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — WLC แยกคำสั่งตั้งเวลาหมดอายุตาม "ชนิดของเซสชัน"\n\n• config serial timeout <นาที> ⭐ → คุมเซสชันที่เข้ามาทาง "สายซีเรียล/console" ตั้งได้ 0–160 นาที โดย 0 = ไม่หมดเวลา (ค่าเริ่มต้นคือ 5 นาที)\n• config sessions timeout <นาที> → คุมเซสชัน SSH/Telnet ตั้ง 0 = ไม่หมดเวลา\n• config sessions maxsessions <จำนวน> → จำกัดจำนวนเซสชัน CLI พร้อมกัน (ตั้ง 0 = ปิดการเข้าถึงทาง SSH/Telnet ทั้งหมด)\n\n🔍 โจทย์ระบุชัดว่า "a serial session" → ต้องใช้กลุ่มคำสั่ง serial\n\n✅ ทำไม C ถูก: config serial timeout 0 ตั้งค่าเวลาหมดอายุของเซสชันซีเรียลเป็นศูนย์ = ไม่ถูกเตะออกอัตโนมัติ\n\n❌ ทำไมข้ออื่นผิด:\nA. maxsessions 0 ไม่ได้เกี่ยวกับเวลา และการตั้งเป็น 0 กลับเป็นการ "ปิด" การเข้าถึงระยะไกลเสียด้วยซ้ำ\nB. 9600 เป็นค่า baud rate ไม่ใช่จำนวนนาที (และค่าสูงสุดของ timeout คือ 160 นาที จึงใส่ 9600 ไม่ได้)\nD. config sessions timeout 0 ใช้กับเซสชัน SSH/Telnet ไม่ใช่ซีเรียล — ถูกครึ่งเดียว แต่ผิดชนิดเซสชันตามที่โจทย์ถาม\n\n📗 จำไว้สอบ: serial/console → config serial timeout | SSH/Telnet → config sessions timeout • ค่า 0 = ไม่หมดเวลา',
  },
  {
    id: 49,
    kind: 'multi',
    prompt: 'Which two IPv6 addresses are used to provide connectivity between two routers on a shared link? (Choose two)',
    options: [
      { key: 'A', text: '2002::512:1204b:1111::1/64' },
      { key: 'B', text: 'ff06:bb43:cc13:dd16:1bb:ff14:7545:234d' },
      { key: 'C', text: 'FF02::0001:FF00:0000/104' },
      { key: 'D', text: '2001:701:104b:1111::1/64' },
      { key: 'E', text: '::ffff:10.14.101.1/96' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — คัดที่อยู่ IPv6 ที่ "ใช้เป็น source/ปลายทางของยูนิแคสต์ได้จริง" ออกจากตัวลวง\n\nกฎที่ใช้ตัดตัวเลือก:\n1️⃣ ที่อยู่ multicast (FF00::/8) ห้ามใช้เป็น source address เด็ดขาด\n2️⃣ ที่อยู่ IPv6 มี "::" ย่อได้เพียงครั้งเดียวต่อที่อยู่\n3️⃣ แต่ละกลุ่ม (hextet) มีเลขฐานสิบหกได้สูงสุด 4 ตัว\n\n🔍 ไล่ตัด:\n• A. 2002::512:1204b:1111::1/64 → มี "::" ถึงสองครั้ง ✘ และกลุ่ม "1204b" มี 5 หลัก ✘ → รูปแบบผิดสองจุด\n• B. ff06:… → ขึ้นต้น FF = multicast ✘\n• C. FF02::0001:FF00:0000/104 → ขึ้นต้น FF02 = multicast (เป็นรูปแบบ solicited-node) ✘\n• D. 2001:701:104b:1111::1/64 → global unicast ที่รูปแบบถูกต้อง ✔ ⭐ ใช้ตั้งบนอินเทอร์เฟซของเราเตอร์เพื่อคุยกันบนลิงก์ร่วมได้\n• E. ::ffff:10.14.101.1/96 → เป็น IPv4-mapped IPv6 address ที่รูปแบบถูกต้องตามไวยากรณ์ ✔\n\n✅ ทำไม D, E ถูก: เหลือเพียงสองตัวเลือกนี้ที่ผ่านการตรวจรูปแบบและไม่ใช่ multicast\n\n⚠️ หมายเหตุ: ข้อนี้เป็นคำถามที่เขียนไม่ดี — ในทางปฏิบัติที่อยู่แบบ ::ffff:x.x.x.x ใช้ภายใน stack ของโฮสต์เพื่อให้แอป IPv6 คุยกับ IPv4 ได้ ไม่ได้ถูกตั้งบนอินเทอร์เฟซเราเตอร์จริง ๆ และในโลกจริงเราเตอร์ใช้ "link-local (FE80::/10)" เป็นหลักในการคุยกันบนลิงก์ร่วม แต่ตัวเลือกไม่มีให้ จึงต้องตอบด้วยวิธีตัดตัวเลือกตามรูปแบบที่ถูกต้อง\n\n📗 จำไว้สอบ: FF00::/8 = multicast (ห้ามเป็น source) • "::" ย่อได้ครั้งเดียว • hextet ยาวได้ไม่เกิน 4 หลัก • เราเตอร์เพื่อนบ้าน IPv6 ปกติคุยกันด้วย link-local',
  },
  {
    id: 50,
    kind: 'single',
    image: v3q50,
    prompt:
      'Refer to the exhibit. An architect is managing a wireless network with APs from several branch offices connecting to the WLC in the data center. There is a new requirement for a single WLAN to process the client data traffic without sending it to the WLC. Which action must be taken to complete the request?',
    options: [
      { key: 'A', text: 'Enable local HTTP profiling' },
      { key: 'B', text: 'Enable FlexConnect Local Switching' },
      { key: 'C', text: 'Enable local DHCP Profiling' },
      { key: 'D', text: 'Enable Disassociation Imminent' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เส้นทางเดินของทราฟฟิกไคลเอนต์ในสถาปัตยกรรม WLC\n\n🔹 Central switching (ค่าเริ่มต้นของ Local mode AP)\n• ทราฟฟิกไคลเอนต์ทุกไบต์ถูกห่อใน CAPWAP แล้วส่งข้าม WAN ไปแตกที่ WLC\n• ข้อเสีย: กิน WAN, latency สูง (โดยเฉพาะเวลาสองเครื่องในสาขาเดียวกันคุยกัน ก็ยังต้องวิ่งไปกลับ WLC)\n\n🔹 FlexConnect Local Switching ⭐\n• AP แตกทราฟฟิกไคลเอนต์ลง VLAN ของสวิตช์ที่สาขาโดยตรง ไม่ส่งไป WLC\n• เหลือเพียงทราฟฟิก control (CAPWAP control) ที่ยังวิ่งไปหา WLC\n• เมื่อ WAN ขาด AP ยังทำงานต่อได้ในโหมด standalone (ถ้าตั้ง FlexConnect Local Auth ไว้ ก็ยืนยันตัวตนไคลเอนต์เองได้)\n• ตั้งค่าได้ระดับ WLAN (แท็บ Advanced ของแต่ละ WLAN) → ตรงกับโจทย์ที่ระบุว่า "a single WLAN"\n\n✅ ทำไม B ถูก: ติ๊ก FlexConnect Local Switching ทำให้ WLAN นั้นแตกข้อมูลไคลเอนต์ที่สาขาเลย ตรงตามความต้องการ "ไม่ส่งข้อมูลไปที่ WLC"\n\n❌ ทำไมข้ออื่นผิด:\nA. Local HTTP profiling ใช้เก็บข้อมูลระบุชนิดอุปกรณ์จาก HTTP user-agent — เป็นเรื่อง profiling ไม่ใช่เส้นทางข้อมูล\nC. Local DHCP profiling ก็เป็นการระบุชนิดอุปกรณ์จาก DHCP option เช่นกัน\nD. Disassociation Imminent เป็นส่วนหนึ่งของ 802.11v ใช้บอกไคลเอนต์ให้ย้าย AP ไม่เกี่ยวกับการสวิตช์ทราฟฟิก\n\n📗 จำไว้สอบ: Local mode = central switching | FlexConnect = เลือกได้ทั้ง central และ local switching • CAPWAP control = UDP 5246, data = UDP 5247',
  },
  {
    id: 51,
    kind: 'single',
    prompt: 'What is a function of MAC address learning?',
    options: [
      { key: 'A', text: 'It is disabled by default on all interfaces connected to trunks' },
      { key: 'B', text: 'It increases security on the management VLAN' },
      { key: 'C', text: 'It is enabled by default on all VLANs and interfaces' },
      { key: 'D', text: 'It increases the potential for MAC address flooding' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — MAC address learning คือกลไกพื้นฐานที่สุดของสวิตช์\n• เมื่อเฟรมเข้ามาที่พอร์ตใด สวิตช์จะอ่าน "source MAC" แล้วบันทึกลงตาราง MAC address table เป็นคู่ MAC ↔ พอร์ต ↔ VLAN\n• ทำงานอัตโนมัติทุกพอร์ตและทุก VLAN โดยไม่ต้องคอนฟิกอะไรเลย ⭐ (เปิดใช้งานเป็นค่าเริ่มต้น)\n• รายการจะหมดอายุตาม aging timer ค่าเริ่มต้น 300 วินาที ถ้าไม่มีเฟรมจาก MAC นั้นเข้ามาอีก\n• ผลลัพธ์: สวิตช์ส่งเฟรมออกเฉพาะพอร์ตที่ถูกต้อง แทนที่จะ flood ทุกพอร์ตแบบฮับ → ลดทราฟฟิกและเพิ่มความปลอดภัย\n\n✅ ทำไม C ถูก: การเรียนรู้ MAC เปิดใช้งานโดยค่าเริ่มต้นบนทุก VLAN และทุกอินเทอร์เฟซของสวิตช์ (จะปิดได้ต้องสั่ง no mac address-table learning ซึ่งแทบไม่มีใครทำ)\n\n❌ ทำไมข้ออื่นผิด:\nA. บนพอร์ต trunk ก็เรียนรู้ MAC เหมือนกัน (แยกตาม VLAN) ไม่ได้ถูกปิดไว้\nB. การเรียนรู้ MAC ไม่ได้ออกแบบมาเพื่อความปลอดภัยของ management VLAN — ถ้าต้องการความปลอดภัยต้องใช้ port security, DAI, DHCP snooping\nD. ตรงกันข้าม — การเรียนรู้ MAC ช่วย "ลด" การ flood ส่วน MAC flooding attack คือการที่ผู้โจมตียัด MAC ปลอมจนตารางเต็ม เพื่อบังคับให้สวิตช์ flood (แก้ด้วย port security)\n\n📗 จำไว้สอบ: learning (จาก source MAC) → forwarding/filtering (จาก destination MAC) → flooding (เมื่อไม่รู้จัก) • aging timer เริ่มต้น 300 วินาที',
  },
  {
    id: 52,
    kind: 'single',
    prompt:
      'A Cisco engineer at a new branch office is configuring a wireless network with access points that connect to a controller that is based at corporate headquarters. Wireless client traffic must terminate at the branch office and access-point survivability is required in the event of a WAN outage. Which access point mode must be selected?',
    options: [
      { key: 'A', text: 'Lightweight with local switching disabled' },
      { key: 'B', text: 'Local with AP fallback enabled' },
      { key: 'C', text: 'OfficeExtend with high availability disabled' },
      { key: 'D', text: 'FlexConnect with local switching enabled' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แยกความต้องการ 2 ข้อ\n1️⃣ "ทราฟฟิกไคลเอนต์ต้องจบที่สาขา" → ต้องใช้ local switching\n2️⃣ "AP ต้องอยู่รอดเมื่อ WAN ขาด" → ต้องทำงานแบบ standalone ได้\n\n🔹 FlexConnect มี 2 สถานะ:\n• Connected mode → ยังติดต่อ WLC ได้ตามปกติ\n• Standalone mode ⭐ → WAN ขาด ติดต่อ WLC ไม่ได้ แต่ AP ยังให้บริการ SSID ต่อได้ และถ้าเปิด FlexConnect Local Auth ก็ยืนยันตัวตนไคลเอนต์เองได้\nเมื่อเปิด Local Switching ทราฟฟิกไคลเอนต์จะถูกวางลง VLAN ของสวิตช์สาขาโดยตรง ไม่วิ่งข้าม WAN\n\n✅ ทำไม D ถูก: FlexConnect + local switching ตอบทั้งสองเงื่อนไข — ข้อมูลจบที่สาขา และ AP รอดเมื่อ WAN ล่ม\n\n❌ ทำไมข้ออื่นผิด:\nA. ปิด local switching = ทราฟฟิกถูกส่งกลับไปแตกที่ WLC ผ่าน WAN ขัดกับเงื่อนไขข้อแรก\nB. Local mode คือโหมดมาตรฐานที่ทุกอย่างวิ่งผ่าน CAPWAP ไปหา WLC และเมื่อ WLC หายไป AP จะหยุดให้บริการ ("AP fallback" ไม่ใช่ฟีเจอร์ที่ทำให้อยู่รอด — มันหมายถึงการย้ายกลับไป WLC หลักเมื่อกลับมาออนไลน์)\nC. OfficeExtend เป็น FlexConnect รูปแบบพิเศษสำหรับพนักงานที่บ้าน (สร้าง DTLS tunnel ข้ามอินเทอร์เน็ต) และปิด high availability ยิ่งลดความทนทาน ไม่ตรงบริบทสำนักงานสาขา\n\n📗 จำไว้สอบ: FlexConnect = สาขาไกล, local switching, standalone ได้ | Local mode = ทุกอย่างผ่าน WLC | OfficeExtend = ทำงานที่บ้าน',
  },
  {
    id: 53,
    kind: 'single',
    prompt: 'What is an advantage of using auto mode versus static mode for power allocation when an access point is connected to a PoE switch port?',
    options: [
      { key: 'A', text: 'The default level is used for the access point' },
      { key: 'B', text: 'It detects the device is a powered device' },
      { key: 'C', text: 'All four pairs of the cable are used' },
      { key: 'D', text: 'Power policing is enabled at the same time' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โหมดจ่ายไฟ PoE บนสวิตช์ Cisco (คำสั่ง power inline …)\n\n• auto (ค่าเริ่มต้น) ⭐ → สวิตช์ "ตรวจจับ" ก่อนว่าอุปกรณ์ที่เสียบมาเป็น powered device (PD) จริงหรือไม่ โดยส่งสัญญาณวัดค่าความต้านทานลายเซ็น ถ้าใช่และงบไฟยังเหลือจึงจ่ายไฟ พร้อมหักงบไฟและจัดคิวแบบ first-come first-served\n• static → จองงบไฟไว้ให้พอร์ตนั้นทันทีโดยไม่รอตรวจจับ (กันไฟไว้แน่นอน แต่เปลืองงบถ้าไม่มีอุปกรณ์เสียบจริง)\n• never → ปิดการจ่ายไฟบนพอร์ตนั้น\n\n💡 การตรวจจับสำคัญมาก เพราะถ้าจ่ายไฟใส่อุปกรณ์ที่ไม่รองรับ PoE อาจทำให้อุปกรณ์เสียหายได้\n\n✅ ทำไม B ถูก: ข้อได้เปรียบของ auto คือการตรวจจับว่าอุปกรณ์เป็น PD จริงก่อนจ่ายไฟ (static ไม่ตรวจ แต่จองไฟไว้เลย)\n\n❌ ทำไมข้ออื่นผิด:\nA. การใช้ระดับไฟค่าเริ่มต้นเกิดขึ้นได้ในทั้งสองโหมด ไม่ใช่จุดเด่นของ auto\nC. การใช้สายครบ 4 คู่เป็นเรื่องของ "มาตรฐาน" PoE ที่ใช้ (802.3bt/UPoE ใช้ 4 คู่ ส่วน 802.3af/at ใช้ 2 คู่) ไม่เกี่ยวกับ auto/static\nD. power policing เปิดแยกด้วยคำสั่ง power inline police ไม่ได้มาพร้อมกับโหมด auto\n\n📗 จำไว้สอบ: 802.3af (PoE) 15.4W | 802.3at (PoE+) 30W | 802.3bt (PoE++/UPoE) 60–100W • auto = ตรวจก่อนจ่าย | static = จองไว้ก่อน',
  },
  {
    id: 54,
    kind: 'drag',
    image: v3q54,
    prompt: 'Refer to the exhibit. Drag and drop the learned prefixes from the left onto the subnet masks on the right.',
    categories: [
      { name: '255.255.254.0', items: ['172.16.4.0'] },
      { name: '255.255.255.128', items: ['172.16.2.128'] },
      { name: '255.255.255.224', items: ['172.16.3.64'] },
      { name: '255.255.255.240', items: ['172.16.3.128'] },
      { name: '255.255.255.248', items: ['172.16.3.192'] },
    ],
    explanation:
      '📘 แนวคิด — อ่าน prefix length จากตารางเราต์แล้วแปลงเป็น dotted-decimal mask\n\nตารางแปลงที่ต้องจำ:\n• /23 → 255.255.254.0 (block 2 ที่อ็อกเท็ตที่ 3)\n• /25 → 255.255.255.128\n• /27 → 255.255.255.224\n• /28 → 255.255.255.240\n• /29 → 255.255.255.248\n\n🔍 อ่านทีละบรรทัดจาก exhibit (เฉพาะเราต์ที่เรียนรู้ผ่าน OSPF):\n• O 172.16.2.128/25 → 255.255.255.128 ✔\n• O 172.16.3.64/27 → 255.255.255.224 ✔\n• O 172.16.3.128/28 → 255.255.255.240 ✔\n• O 172.16.3.192/29 → 255.255.255.248 ✔\n• O 172.16.4.0/23 → 255.255.254.0 ✔ (ระวัง! เลข 254 อยู่ที่อ็อกเท็ตที่ 3 ไม่ใช่ที่ 4)\n\n💡 เคล็ดลับ: prefix ยิ่งสั้น ซับเน็ตยิ่งใหญ่ — /23 ใหญ่สุด (512 IP) แล้วไล่ลงมา /25 (128) → /27 (32) → /28 (16) → /29 (8)\n\n📗 จำไว้สอบ: /23 = 255.255.254.0 คือกรณีที่คนพลาดบ่อยที่สุด เพราะ mask ไปตกที่อ็อกเท็ตที่สาม',
  },
  {
    id: 55,
    kind: 'drag',
    image: v3q55,
    prompt: 'Drag and drop the Ansible features from the left to the right. Not all features are used.',
    categories: [
      {
        name: 'คุณสมบัติของ Ansible (feature)',
        items: [
          'uses the YAML language',
          'executes modules via SSH by default',
          'pushes configurations to the client',
          'operates without agents',
        ],
      },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['uses agents to manage hosts', 'requires clients to pull configurations from the server'] },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบเครื่องมือ configuration management 3 ตัวที่ CCNA ออกสอบ\n\n🔹 Ansible ⭐\n• ภาษา: YAML (ไฟล์เรียกว่า playbook)\n• สถาปัตยกรรม: agentless — ไม่ต้องติดตั้งซอฟต์แวร์ใด ๆ บนอุปกรณ์ปลายทาง ⭐\n• การส่งข้อมูล: SSH (พอร์ต 22) หรือ NETCONF เป็นค่าเริ่มต้น ⭐\n• โมเดล: push — เซิร์ฟเวอร์ควบคุมเป็นฝ่ายยัดคอนฟิกลงไปหาอุปกรณ์ ⭐\n\n🔹 Puppet\n• ภาษา: Puppet DSL / Ruby (ไฟล์เรียกว่า manifest, รวมกันเป็น module)\n• สถาปัตยกรรม: ปกติต้องมี agent (มีโหมด agentless ด้วย), ใช้ TCP 8140\n• โมเดล: pull — ไคลเอนต์เป็นฝ่ายไปดึงคอนฟิกจาก Puppet Master ตามรอบ\n\n🔹 Chef\n• ภาษา: Ruby DSL (ไฟล์เรียกว่า recipe, รวมเป็น cookbook)\n• สถาปัตยกรรม: agent-based, ใช้ TCP 10002\n• โมเดล: pull\n\n❌ ตัวลวงที่ไม่ได้ใช้:\n• "uses agents to manage hosts" → เป็นของ Chef/Puppet ไม่ใช่ Ansible ซึ่งเป็น agentless\n• "requires clients to pull configurations from the server" → เป็นโมเดล pull ของ Puppet/Chef ส่วน Ansible เป็น push\n\n📗 จำไว้สอบ: Ansible=YAML+agentless+push+SSH(22) | Puppet=manifest+pull+8140 | Chef=recipe/cookbook+pull+10002',
  },
  {
    id: 56,
    kind: 'single',
    image: v3q56,
    prompt:
      'Refer to the exhibit. After configuring a new static route on the CPE, the engineer entered this series of commands to verify that the new configuration is operating normally. When is the static default route installed into the routing table?',
    options: [
      { key: 'A', text: 'when the default route learned over external BGP becomes invalid' },
      { key: 'B', text: 'when 203.0.113.1 is no longer reachable as a next hop' },
      { key: 'C', text: 'when the default route learned over external BGP changes its next hop' },
      { key: 'D', text: 'when a route to 203.0.113.1 is learned via BGP' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — floating static route\n• เมื่อมีเราต์ไปยังปลายทางเดียวกัน (prefix เท่ากัน) หลายเส้น เราเตอร์จะติดตั้งเฉพาะเส้นที่ AD ต่ำสุดลงในตารางเราต์\n• ถ้าอยากให้ static เป็น "เส้นสำรอง" ต้องตั้ง AD ให้สูงกว่าโปรโตคอลหลัก → เรียกว่า floating static route ⭐\n• เส้นสำรองจะถูก "ลอย" ขึ้นมาแทนที่ก็ต่อเมื่อเส้นหลักหายไปจากตารางเราต์\n\n🔍 อ่าน exhibit:\n• วิศวกรเพิ่ง "คอนฟิก static default route ใหม่" แต่ในผลลัพธ์ show ip route กลับเห็นเพียง B* 0.0.0.0/0 [20/0] via 198.51.100.1 (eBGP มี AD 20)\n• การที่ static ที่เพิ่งสร้างไม่โผล่ในตาราง แปลว่ามันถูกตั้ง AD สูงกว่า 20 → เป็น floating static\n• ping ไป 203.0.113.1 สำเร็จ 5/5 แสดงว่า next-hop ของเส้นสำรองใช้งานได้อยู่ (พร้อมทำหน้าที่)\n\n✅ ทำไม A ถูก: floating static default route จะถูกติดตั้งลงตารางเราต์ก็ต่อเมื่อ default route ที่เรียนรู้จาก eBGP หายไป/ใช้การไม่ได้ (เพื่อนบ้าน BGP ล่ม หรือถอนเราต์ออก)\n\n❌ ทำไมข้ออื่นผิด:\nB. 203.0.113.1 คือ next-hop ของ "static เส้นสำรอง" เอง ถ้ามันเข้าไม่ถึง static ยิ่งใช้ไม่ได้ — ตรงข้ามกับที่โจทย์ถาม\nC. การที่ BGP เปลี่ยน next-hop ไม่ทำให้เราต์หายไปจากตาราง เส้น BGP ก็ยังชนะด้วย AD 20 อยู่ดี\nD. การมีเราต์ไปยัง 203.0.113.1 ผ่าน BGP ไม่ได้เกี่ยวกับการติดตั้ง default route เส้นสำรอง\n\n📗 จำไว้สอบ: AD ต่ำชนะ • eBGP=20, iBGP=200, static=1 (ปรับได้ 1–255) • floating static = static ที่ AD สูงกว่าเส้นหลัก ใช้เป็น backup',
  },
  {
    id: 57,
    kind: 'single',
    image: v3q57,
    prompt:
      'Refer to the exhibit. Wireless LAN access must be set up to force all clients from the NA WLAN to authenticate against the local database. The WLAN is configured for local EAP authentication. The time that users access the network must not be limited. Which action completes this configuration?',
    options: [
      { key: 'A', text: 'Check the Guest User Role check box' },
      { key: 'B', text: 'Clear the Lifetime (seconds) value' },
      { key: 'C', text: 'Set the Lifetime (seconds) value to 0' },
      { key: 'D', text: 'Uncheck the Guest User check box' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — หน้า Local Net Users บน WLC\n• ผู้ใช้ที่สร้างในหน้านี้จะถูกเก็บใน "local database" ของ WLC ใช้กับ local EAP authentication ได้\n• ช่อง Guest User ⭐ → ติ๊กเมื่อต้องการให้บัญชีนี้เป็นบัญชีชั่วคราวที่ "มีวันหมดอายุ"\n• ช่อง Lifetime (seconds) → จะใช้งานได้ก็ต่อเมื่อ Guest User ถูกติ๊กไว้ กำหนดอายุบัญชีได้ 60 ถึง 2,592,000 วินาที (30 วัน) ค่าเริ่มต้น 86,400 วินาที (1 วัน)\n• ช่อง Guest User Role → ใช้ผูกนโยบายจำกัดแบนด์วิดท์ให้ผู้ใช้แขก\n\n🔍 อ่าน exhibit: Guest User ถูกติ๊กไว้ และ Lifetime = 86400 → บัญชีจะหมดอายุใน 24 ชั่วโมง ซึ่งขัดกับโจทย์ที่ว่า "เวลาการใช้งานต้องไม่ถูกจำกัด"\n\n✅ ทำไม D ถูก: เอาเครื่องหมายถูกออกจาก Guest User → บัญชีกลายเป็นผู้ใช้ถาวรในฐานข้อมูลท้องถิ่น ไม่มีวันหมดอายุ และช่อง Lifetime จะถูกปิดไปโดยปริยาย\n\n❌ ทำไมข้ออื่นผิด:\nA. การติ๊ก Guest User Role เป็นการเพิ่มนโยบายให้ผู้ใช้แขก ยิ่งตอกย้ำว่ายังเป็นบัญชีชั่วคราวอยู่\nB. การล้างค่าในช่อง Lifetime ให้ว่างไม่ได้ — ระบบบังคับให้ใส่ค่าในช่วง 60–2,592,000\nC. ค่า 0 อยู่นอกช่วงที่ยอมรับ (ต่ำสุดคือ 60) WLC จะไม่ยอมบันทึก\n\n📗 จำไว้สอบ: Guest User ติ๊ก = บัญชีมีอายุจำกัด (60–2,592,000 วินาที) | ไม่ติ๊ก = บัญชีถาวร',
  },
  {
    id: 58,
    kind: 'single',
    prompt: 'Which remote access protocol provides unsecured remote CLI access?',
    options: [
      { key: 'A', text: 'Telnet' },
      { key: 'B', text: 'SSH' },
      { key: 'C', text: 'console' },
      { key: 'D', text: 'Bash' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ช่องทางเข้าถึงบรรทัดคำสั่งของอุปกรณ์\n\n• Telnet ⭐ → TCP พอร์ต 23, ส่งทุกอย่างเป็น plaintext รวมทั้ง username และ password → ใครดักจับสายก็อ่านได้หมด ถือว่าไม่ปลอดภัย และเป็นการเข้าถึงแบบ "ระยะไกล"\n• SSH → TCP พอร์ต 22, เข้ารหัสทั้งเซสชัน เป็นมาตรฐานที่ควรใช้แทน Telnet เสมอ (ควรใช้ SSHv2)\n• Console → เข้าผ่านสายที่ต่อกับพอร์ต console โดยตรง ไม่ใช่การเข้าถึงระยะไกล และไม่ต้องพึ่งเครือข่าย (ใช้ตอนกู้เครื่อง/ตั้งค่าครั้งแรก)\n• Bash → เป็น "เชลล์" ของระบบปฏิบัติการยูนิกซ์/ลินุกซ์ ไม่ใช่โปรโตคอลเข้าถึงระยะไกล\n\n✅ ทำไม A ถูก: Telnet เป็นโปรโตคอลเข้าถึง CLI ระยะไกลที่ไม่มีการเข้ารหัสเลย ตรงกับคำว่า "unsecured remote CLI access"\n\n❌ ทำไมข้ออื่นผิด:\nB. SSH เข้ารหัส จึงเป็นแบบ secured\nC. console เป็นการเข้าถึงทางกายภาพในที่ตั้ง ไม่ใช่ remote\nD. Bash เป็นโปรแกรมเชลล์ ไม่ใช่โปรโตคอลสื่อสาร\n\n💡 บนอุปกรณ์จริง ควรปิด Telnet ด้วยคำสั่ง transport input ssh ใต้ line vty\n\n📗 จำไว้สอบ: Telnet=TCP 23 ไม่เข้ารหัส | SSH=TCP 22 เข้ารหัส | HTTP=80 | HTTPS=443 | SNMP=UDP 161/162 | Syslog=UDP 514',
  },
  {
    id: 59,
    kind: 'single',
    image: v3q59,
    prompt:
      'Refer to the exhibit. An engineer must configure the interface that connects to PC1 and secure it in a way that only PC1 is allowed to use the port. No VLAN tagging can be used except for a voice VLAN. Which command sequence must be entered to configure the switch?',
    options: [
      {
        key: 'A',
        text: 'switchport mode nonegotiate / switchport port-security / switchport port-security maximum 1',
      },
      {
        key: 'B',
        text: 'switchport mode access / switchport port-security / switchport port-security mac-address 0050.7966.6800',
      },
      {
        key: 'C',
        text: 'switchport mode dynamic desirable / switchport port-security mac-address 0050.7966.6800 / switchport port-security mac-address sticky',
      },
      {
        key: 'D',
        text: 'switchport mode dynamic auto / switchport port-security / switchport port-security violation restrict',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — แยกความต้องการเป็น 2 ข้อ\n1️⃣ "No VLAN tagging can be used except for a voice VLAN" → พอร์ตต้องเป็น access port แบบตายตัว (switchport mode access) ห้ามเป็น trunk และห้ามให้ DTP ไปเจรจาเป็น trunk ได้\n2️⃣ "only PC1 is allowed to use the port" → ต้องล็อก MAC ของ PC1 ไว้แบบเจาะจงด้วย static entry\n\n🔍 อ่าน exhibit: ตาราง MAC ระบุว่า PC1 = 00:50:79:66:68:00 → เขียนในรูปแบบ Cisco เป็น 0050.7966.6800 ⭐\n\n✅ ทำไม B ถูก:\n• switchport mode access → ปิด DTP ตายตัว เป็น access port ไม่ติดแท็ก VLAN (ยังเพิ่ม voice VLAN ทีหลังได้) ✔\n• switchport port-security → เปิดฟีเจอร์ (ค่าเริ่มต้น maximum 1, violation shutdown) ✔\n• switchport port-security mac-address 0050.7966.6800 → ระบุ MAC ของ PC1 โดยตรง ทำให้มีเพียง PC1 เท่านั้นที่ใช้พอร์ตนี้ได้ ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. switchport mode nonegotiate เพียงแค่ปิดการส่งเฟรม DTP แต่ไม่ได้กำหนดว่าพอร์ตเป็น access และไม่ได้ล็อก MAC ของ PC1 (maximum 1 ยอมรับ MAC ตัวแรกที่เข้ามาตัวไหนก็ได้)\nC. dynamic desirable จะพยายามเจรจาเป็น trunk ซึ่งขัดกับข้อห้าม VLAN tagging และการใส่ทั้ง static MAC และ sticky พร้อมกันก็ขัดแย้งกันเอง\nD. dynamic auto ยังเปิดโอกาสให้กลายเป็น trunk ได้ถ้าอีกฝั่งเป็น desirable และ violation restrict ก็ไม่ได้จำกัดว่าต้องเป็น PC1\n\n📗 จำไว้สอบ: switchport mode access = ปิด DTP ถาวร • port security default = max 1 + shutdown • รูปแบบ MAC ของ Cisco = xxxx.xxxx.xxxx',
  },
  {
    id: 60,
    kind: 'single',
    image: v3q60,
    prompt:
      'Refer to the exhibit. A public IPv6 address must be configured for internet access. Which command must be configured on the R2 WAN interface to the service provider?',
    options: [
      { key: 'A', text: 'ipv6 address fe80::260:3EFF:FE11:6770 link-local' },
      { key: 'B', text: 'ipv6 address fe80::/10' },
      { key: 'C', text: 'ipv6 address 2001:db8:433:47:4620:ffff:ffff:ffff/64 anycast' },
      { key: 'D', text: 'ipv6 address 2001:db8:123:45::4/64' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ที่อยู่ IPv6 ที่ใช้ออกอินเทอร์เน็ตต้องเป็น Global Unicast Address (GUA)\n• GUA = 2000::/3 → อ็อกเท็ตแรกขึ้นต้นด้วย 2 หรือ 3 → เราต์ได้ทั่วอินเทอร์เน็ต ⭐\n• Link-local = FE80::/10 → ใช้ได้เฉพาะบนลิงก์เดียว ไม่ถูกเราต์ข้ามเราเตอร์ จึงออกเน็ตไม่ได้\n• ULA = FC00::/7 → เทียบเท่า private IPv4 ไม่ออกเน็ต\n• Anycast → ที่อยู่เดียวกันที่ตั้งบนหลายอุปกรณ์ ใครใกล้สุดรับไป ใช้กับบริการเฉพาะทาง ไม่ใช่ที่อยู่ WAN ปกติ\n\n✅ ทำไม D ถูก: 2001:db8:123:45::4/64 ขึ้นต้นด้วย 2 จึงเป็น global unicast, มี prefix length /64 ตามมาตรฐานของ subnet IPv6 และรูปแบบคำสั่งถูกต้อง (ipv6 address <address>/<prefix-length>)\n💡 อย่าลืมสั่ง ipv6 unicast-routing ที่ระดับ global เพื่อให้เราเตอร์ทำ routing IPv6 ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. FE80:: คือ link-local ซึ่งเราเตอร์สร้างให้อัตโนมัติอยู่แล้ว และไม่สามารถใช้ออกอินเทอร์เน็ตได้\nB. fe80::/10 เป็นการระบุ "ช่วงของ prefix" ไม่ใช่ที่อยู่ของโฮสต์ และยังเป็น link-local อีกเช่นกัน\nC. คำสั่งลงท้ายด้วย anycast ทำให้กลายเป็นที่อยู่ anycast ซึ่งไม่ใช่ที่อยู่ยูนิแคสต์ปกติสำหรับลิงก์ WAN\n\n📗 จำไว้สอบ: 2000::/3=GUA (ออกเน็ตได้) | FE80::/10=link-local | FC00::/7=ULA | FF00::/8=multicast • ต้องมี ipv6 unicast-routing ถึงจะเราต์ IPv6 ได้',
  },
  {
    id: 61,
    kind: 'drag',
    image: v3q61,
    prompt: 'Drag and drop the device behaviors from the left onto the matching HSRP state on the right.',
    categories: [
      { name: 'Learn', items: ['is waiting to hear from the neighbor device'] },
      { name: 'Active', items: ['is forwarding packets'] },
      { name: 'Listen', items: ['has heard from the neighbor device and is receiving hello packets'] },
      { name: 'Speak', items: ['is transmitting and receiving hello packets'] },
      { name: 'Standby', items: ['is ready to forward packets if the device that is currently forwarding packets fails'] },
    ],
    explanation:
      '📘 แนวคิด — สถานะของ HSRP (Hot Standby Router Protocol)\n\nลำดับที่เราเตอร์ไต่ขึ้นไป: Initial → Learn → Listen → Speak → Standby → Active\n\n• Initial/Disabled → ยังไม่พร้อมเข้าร่วม HSRP (เพิ่งบูต หรืออินเทอร์เฟซยังไม่ up)\n• Learn ⭐ → ยังไม่รู้ virtual IP และยังไม่เคยได้ยิน hello จากตัวที่ active → กำลัง "รอฟัง" จากเพื่อนบ้าน\n• Listen ⭐ → รู้ virtual IP แล้ว และ "ได้ยิน" hello จากเพื่อนบ้านอยู่ แต่ตัวเองยังไม่ส่ง hello (ไม่ใช่ทั้ง active และ standby)\n• Speak ⭐ → เริ่ม "ส่งและรับ" hello เพื่อร่วมชิงตำแหน่ง active/standby\n• Standby ⭐ → เป็นตัวสำรอง คอยรับช่วงต่อทันทีถ้า active ล่ม\n• Active ⭐ → เป็นตัวที่ "ส่งต่อแพ็กเก็ต" จริง โดยตอบ ARP ด้วย virtual MAC\n\n💡 คำใบ้ในโจทย์: "waiting to hear"=Learn | "has heard … receiving"=Listen | "transmitting and receiving"=Speak | "ready to forward if … fails"=Standby | "is forwarding"=Active\n\n📗 จำไว้สอบ: HSRP hello 3 วิ / hold 10 วิ • priority เริ่มต้น 100 สูงสุดชนะ, เสมอกันดู IP สูงสุด • ต้องสั่ง preempt ถ้าอยากให้ตัว priority สูงแย่งตำแหน่งคืน • virtual MAC v1 = 0000.0C07.ACxx',
  },
  {
    id: 62,
    kind: 'multi',
    prompt:
      'Which two functions does a WLC perform in the lightweight access-point architecture that an AP performs independently in an autonomous architecture? (Choose two)',
    options: [
      { key: 'A', text: 'handling the association, authentication, and roaming of wireless clients' },
      { key: 'B', text: 'encrypting and decrypting traffic that uses the WAP protocol family' },
      { key: 'C', text: 'preventing collisions between wireless clients on the same RF channel' },
      { key: 'D', text: 'managing RF channels, including transmission power' },
      { key: 'E', text: 'sending and processing beacon frames' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — split-MAC architecture: งานถูกแบ่งระหว่าง LAP กับ WLC\n\n🔹 งานที่ยังอยู่ที่ AP (real-time — ทนความหน่วงไม่ได้)\n• ส่ง/รับเฟรม 802.11 และตอบ ACK\n• ส่ง beacon และตอบ probe response\n• เข้ารหัส/ถอดรหัสเฟรมที่ระดับวิทยุ\n• จัดคิวตาม QoS, MAC management ระดับล่าง\n\n🔹 งานที่ย้ายไปอยู่ที่ WLC (management — ไม่ต้องเรียลไทม์)\n• Association / re-association และการ roaming ของไคลเอนต์ ⭐\n• การยืนยันตัวตน (802.1X/RADIUS proxy) และการจัดการความปลอดภัย ⭐\n• RRM (Radio Resource Management) → เลือกช่องสัญญาณและกำลังส่งให้ AP อัตโนมัติ ⭐\n• นโยบาย QoS, การจัดการ WLAN/SSID, การตรวจจับ rogue AP\n\n✅ ทำไม A, D ถูก: ทั้งการจัดการ association/authentication/roaming และการบริหารช่องสัญญาณกับกำลังส่ง (RRM) เป็นงานที่ autonomous AP ทำเองทีละตัว แต่ในสถาปัตยกรรม lightweight ถูกยกไปให้ WLC ทำรวมศูนย์\n\n❌ ทำไมข้ออื่นผิด:\nB. การเข้ารหัส/ถอดรหัสเป็นงาน real-time ที่ยังทำอยู่ที่ AP และไคลเอนต์ อีกทั้ง "WAP protocol family" เป็นโปรโตคอลของโทรศัพท์มือถือยุคเก่า ไม่เกี่ยวกับ Wi-Fi\nC. การหลีกเลี่ยงการชนกันบนช่องสัญญาณเดียวกันใช้กลไก CSMA/CA ซึ่งทำโดยไคลเอนต์และ AP เองแบบเรียลไทม์ WLC ยุ่งไม่ได้\nE. beacon frame ต้องถูกส่งทุก ~100 ms อย่างแม่นยำ จึงเป็นงาน real-time ที่ AP ต้องทำเอง\n\n📗 จำไว้สอบ: real-time อยู่ที่ AP (เฟรม, beacon, ACK, encryption) | management อยู่ที่ WLC (auth, roaming, RRM, QoS policy, rogue detection)',
  },
  {
    id: 63,
    kind: 'single',
    image: v3q63,
    prompt:
      'Refer to the exhibit. How must OSPF be configured on the GigabitEthernet0/0 interface of the neighbor device to achieve the desired neighbor relationship?',
    options: [
      { key: 'A', text: 'Router(config-if)#ip ospf cost 5' },
      { key: 'B', text: 'Router(config-if)#ip ospf 1 area 2' },
      { key: 'C', text: 'Router(config-if)#ip ospf network point-to-point' },
      { key: 'D', text: 'Router(config-if)#ip ospf priority 1' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — OSPF network type กำหนดว่าจะมีการเลือก DR/BDR หรือไม่\n\n• Broadcast (ค่าเริ่มต้นบนอีเทอร์เน็ต) → มีการเลือก DR/BDR, hello 10 วิ / dead 40 วิ, ค้นหาเพื่อนบ้านอัตโนมัติ\n• Point-to-point ⭐ → ไม่มี DR/BDR, hello 10 วิ / dead 40 วิ, ค้นหาเพื่อนบ้านอัตโนมัติ\n• Non-broadcast (NBMA) → มี DR/BDR, hello 30 วิ / dead 120 วิ, ต้องประกาศเพื่อนบ้านด้วยมือ\n• Point-to-multipoint → ไม่มี DR/BDR, hello 30 วิ / dead 120 วิ\n\n🔍 เปรียบเทียบสองสถานะใน exhibit:\n• ปัจจุบัน: Pri 1, State = FULL/DR → มีการเลือกตั้ง DR อยู่ (network type เป็น broadcast)\n• ที่ต้องการ: Pri 0, State = FULL/ - → เครื่องหมาย "-" หมายถึง "ไม่มีบทบาท DR/BDR ในลิงก์นี้เลย" และ priority แสดงเป็น 0\n\n✅ ทำไม C ถูก: เมื่อเปลี่ยน network type เป็น point-to-point จะไม่มีการเลือก DR/BDR อีกต่อไป สถานะจึงกลายเป็น FULL/ - และ priority ถูกแสดงเป็น 0 เพราะไม่มีความหมายบนลิงก์แบบนี้ — ตรงกับผลลัพธ์ที่ต้องการทุกประการ\n⚠️ ต้องตั้งให้ตรงกันทั้งสองฝั่ง มิฉะนั้น adjacency จะไม่ขึ้น\n\n❌ ทำไมข้ออื่นผิด:\nA. ip ospf cost 5 เปลี่ยนแค่ metric ไม่กระทบสถานะ DR/BDR\nB. ip ospf 1 area 2 ย้ายอินเทอร์เฟซไปคนละ area → เพื่อนบ้านจะขาดกันทันที (area ต้องตรงกัน)\nD. ip ospf priority 1 คือค่าเริ่มต้นอยู่แล้ว จึงยังคงมีการเลือกตั้ง DR ต่อไป (ถ้าใช้ priority 0 จะได้ FULL/DROTHER ไม่ใช่ FULL/ - )\n\n📗 จำไว้สอบ: broadcast & NBMA มี DR/BDR | point-to-point & point-to-multipoint ไม่มี • สถานะ FULL/ - = ลิงก์แบบ point-to-point',
  },
  {
    id: 64,
    kind: 'single',
    prompt: 'What causes a port to be placed in the err-disabled state?',
    options: [
      { key: 'A', text: 'latency' },
      { key: 'B', text: 'nothing plugged into the port' },
      { key: 'C', text: 'shutdown command issued on the port' },
      { key: 'D', text: 'link flapping' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — err-disabled คือสถานะที่สวิตช์ "ปิดพอร์ตเอง" เพื่อป้องกันปัญหาลุกลาม\n\nสาเหตุที่พบบ่อย:\n• port security violation (MAC เกินจำนวนที่กำหนด)\n• link flapping ⭐ → พอร์ตขึ้น-ลงซ้ำ ๆ เกิน 5 ครั้งใน 10 วินาที มักเกิดจากสายชำรุด, ขั้วต่อหลวม, SFP/GBIC เสีย หรือ duplex mismatch\n• BPDU guard ได้รับ BPDU บนพอร์ต PortFast\n• EtherChannel misconfiguration\n• UDLD ตรวจพบลิงก์ทางเดียว, DHCP snooping / DAI rate-limit เกิน, loopback detection\n\n🔍 ตัวอย่างข้อความ log: %PM-4-ERR_DISABLE: link-flap error detected on Fa0/28, putting Fa0/28 in err-disable state\n\n✅ ทำไม D ถูก: link flapping เป็นสาเหตุมาตรฐานหนึ่งของ err-disabled ตามที่ Cisco ระบุไว้\n\n❌ ทำไมข้ออื่นผิด:\nA. ความหน่วง (latency) สูงเป็นปัญหาด้านประสิทธิภาพ ไม่ทำให้พอร์ตถูกปิด\nB. ไม่มีอะไรเสียบ = สถานะ "notconnect" (down/down) ซึ่งต่างจาก err-disabled\nC. สั่ง shutdown = สถานะ "administratively down" ซึ่งเป็นการปิดโดยผู้ดูแล ไม่ใช่ err-disabled ที่สวิตช์ปิดเอง\n\n💡 กู้คืน: เข้าไปที่พอร์ตแล้วสั่ง shutdown ตามด้วย no shutdown หรือให้กู้อัตโนมัติด้วย errdisable recovery cause <สาเหตุ> + errdisable recovery interval <วินาที>\n\n📗 จำไว้สอบ: err-disabled = สวิตช์ปิดเอง | administratively down = คนสั่ง shutdown | notconnect = ไม่มีสายหรือสายเสีย',
  },
  {
    id: 65,
    kind: 'single',
    prompt: 'Which function forwards frames to ports that have a matching destination MAC address?',
    options: [
      { key: 'A', text: 'frame pushing' },
      { key: 'B', text: 'frame filtering' },
      { key: 'C', text: 'frame flooding' },
      { key: 'D', text: 'frame switching' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำศัพท์การทำงานของสวิตช์ Layer 2\n\n• Frame switching (forwarding) ⭐ → เมื่อ destination MAC "อยู่ในตาราง" ให้ส่งเฟรมออกเฉพาะพอร์ตนั้นพอร์ตเดียว = การส่งต่อแบบตรงเป้า\n• Frame filtering → ผลพลอยได้ของการสวิตช์ คือการ "ไม่ส่ง" เฟรมออกพอร์ตอื่นที่ไม่เกี่ยวข้อง (รวมถึงกรณีที่ต้นทางและปลายทางอยู่พอร์ตเดียวกัน ก็ทิ้งเฟรมไปเลย)\n• Frame flooding → เมื่อไม่รู้จัก destination MAC (unknown unicast) หรือเป็น broadcast/multicast → ส่งออกทุกพอร์ตใน VLAN ยกเว้นพอร์ตต้นทาง\n• Frame pushing → ไม่มีอยู่จริงในศัพท์ของ Cisco เป็นตัวลวง\n\n✅ ทำไม D ถูก: โจทย์บอกว่า "ส่งไปยังพอร์ตที่ MAC ปลายทางตรงกัน" ซึ่งตรงกับนิยามของ frame switching/forwarding\n\n❌ ทำไมข้ออื่นผิด:\nA. frame pushing เป็นคำที่แต่งขึ้นมาลวง\nB. frame filtering เน้นที่การ "ไม่ส่ง" ออกพอร์ตที่ไม่เกี่ยวข้อง ไม่ใช่การส่งไปยังพอร์ตที่ตรงกัน\nC. frame flooding ใช้ตอนที่ "ไม่รู้จัก" MAC ปลายทาง ซึ่งตรงข้ามกับโจทย์\n\n📗 จำไว้สอบ: 3 หน้าที่หลักของสวิตช์ = learning (จาก source MAC), forwarding/filtering (จาก destination MAC), flooding (เมื่อไม่รู้จัก)',
  },
  {
    id: 66,
    kind: 'single',
    image: v3q66,
    prompt:
      'Refer to the exhibit. The SW1 and SW2 Gi0/0 ports have been preconfigured. An engineer is given these requirements: allow all PCs to communicate with each other at Layer 3; configure untagged traffic to use VLAN 5; disable VLAN 1 from being used. Which configuration set meets these requirements?',
    options: [
      {
        key: 'A',
        text: 'Option A — SW1 Gi0/1 trunk allowed 5,7,9,108 (ไม่ตั้ง native) / Gi0/2 trunk allowed 7,9,108 ; SW2 Gi0/1 trunk allowed 7 / Gi0/7 trunk allowed 5,7,9,108',
      },
      {
        key: 'B',
        text: 'Option B — SW1 Gi0/1 trunk allowed 5,7,9,108 + native vlan 5 / Gi0/2 mode access ; SW2 Gi0/1 mode access + access vlan 7 / Gi0/7 trunk allowed 7,9,108 + native vlan 5',
      },
      {
        key: 'C',
        text: 'Option C — SW1 Gi0/1 trunk allowed 5,7,9,108 + native vlan 5 / Gi0/2 trunk allowed 5,7,9,108 ; SW2 Gi0/1 mode access + access vlan 7 / Gi0/7 trunk allowed 7,9,108 (ไม่ตั้ง native)',
      },
      {
        key: 'D',
        text: 'Option D — SW1 Gi0/1 trunk allowed 5,7,9,108 + native vlan 5 / Gi0/2 trunk allowed 5,7,9,108 ; SW2 Gi0/1 mode access + access vlan 7 / Gi0/7 trunk allowed 5,7,9,108 + native vlan 5',
      },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แปลงเงื่อนไข 3 ข้อเป็นคำสั่ง\n1️⃣ "untagged traffic ต้องใช้ VLAN 5" → ต้องมี switchport trunk native vlan 5 บน "ทุกลิงก์ trunk" ทั้งสองปลาย (ถ้าตั้งข้างเดียวจะเกิด native VLAN mismatch และ CDP จะเตือน)\n2️⃣ "ห้ามใช้ VLAN 1" → การย้าย native ไปเป็น VLAN 5 และไม่ใส่ VLAN 1 ใน allowed list ก็เป็นการเลิกใช้ VLAN 1 แล้ว\n3️⃣ "ให้ทุก PC คุยกันได้ที่ Layer 3" → ทราฟฟิกของ VLAN 7, 9, 108 ต้องเดินทางไปถึงเราเตอร์ R1 ที่ต่ออยู่กับ SW1 Gi0/2 → ดังนั้น Gi0/2 ต้องเป็น trunk (ทำ router-on-a-stick) ไม่ใช่ access port\n\n🔍 อ่าน exhibit: PC4=VLAN 108 ต่อ SW1, PC1=VLAN 9 และ PC2=VLAN 7 ต่อ SW2, R1 ต่อ SW1 Gi0/2, ลิงก์ระหว่างสวิตช์คือ SW1 Gi0/1 ↔ SW2 Gi0/7\n\n🧮 คัดตัวเลือก:\n• ต้องมี native vlan 5 ทั้ง Gi0/1 (SW1) และ Gi0/7 (SW2) → เหลือ B และ D\n• Gi0/2 ที่ไปหา R1 ต้องเป็น trunk → B ตั้งเป็น access ✘ → เหลือ D\n\n✅ ทำไม D ถูก: ตั้ง native vlan 5 ครบทั้งสองปลายของ trunk, Gi0/2 เป็น trunk ที่อนุญาต VLAN 5,7,9,108 ให้ R1 ทำ inter-VLAN routing ได้ และไม่มี VLAN 1 อยู่ใน allowed list เลย\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มี switchport trunk native vlan 5 เลยสักพอร์ต → untagged ยังคงเป็น VLAN 1\nB. Gi0/2 (ขาไปเราเตอร์) ถูกตั้งเป็น access → ผ่านได้ VLAN เดียว PC ต่าง VLAN จะคุยกันไม่ได้\nC. SW2 Gi0/7 ไม่ได้ตั้ง native vlan 5 และ allowed list ขาด VLAN 5 → native VLAN ไม่ตรงกันสองฝั่ง\n\n📗 จำไว้สอบ: native VLAN ต้องตรงกันทั้งสองปลาย trunk • ขาที่ต่อเราเตอร์เพื่อทำ inter-VLAN routing ต้องเป็น trunk • best practice คือย้าย native VLAN ออกจาก VLAN 1',
  },
  {
    id: 67,
    kind: 'single',
    image: v3q67,
    prompt:
      'Refer to the exhibit. FastEthernet0/1 shows "down down" in show ip interface brief and "notconnect" in show interface status. What is the cause of the issue?',
    options: [
      { key: 'A', text: 'STP' },
      { key: 'B', text: 'shutdown command' },
      { key: 'C', text: 'port security' },
      { key: 'D', text: 'wrong cable type' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — อ่านสถานะพอร์ตให้เป็น แล้วตัดสาเหตุออกทีละข้อ\n\nตารางสถานะที่ต้องจำ:\n• up / up → ปกติ\n• down / down → ปัญหาชั้นกายภาพ (Layer 1): ไม่มีสาย, สายเสีย, ผิดชนิดสาย, ปลายทางปิดอยู่, ความเร็วไม่ตรงกัน → show interface status แสดง notconnect ⭐\n• administratively down / down → มีคนสั่ง shutdown\n• up / down → Layer 1 ปกติ แต่ Layer 2 มีปัญหา (encapsulation ไม่ตรง, keepalive)\n• err-disabled → สวิตช์ปิดพอร์ตเอง (เช่น port security ถูกละเมิด)\n\n🔍 อ่าน exhibit: show ip interface brief แสดง down/down และ show interface status แสดง notconnect\n\n✅ ทำไม D ถูก: notconnect + down/down คืออาการของปัญหาชั้นกายภาพ ซึ่งการใช้สายผิดชนิด (เช่น ใช้ straight-through ในจุดที่ต้องใช้ crossover) ทำให้ลิงก์ไม่ขึ้นเลย เหมือนไม่ได้เสียบสาย\n\n❌ ทำไมข้ออื่นผิด:\nA. ถ้าเป็น STP ที่บล็อกพอร์ต สถานะจะยังเป็น up/up (พอร์ตยังมีสัญญาณ) เพียงแต่ไม่ส่งข้อมูลผู้ใช้\nB. คำสั่ง shutdown จะทำให้ขึ้นว่า "administratively down" ไม่ใช่ down ธรรมดา\nC. port security เมื่อถูกละเมิดจะทำให้พอร์ตเป็น err-disabled ไม่ใช่ notconnect\n\n💡 หมายเหตุ: อุปกรณ์ยุคใหม่มี auto-MDIX ที่แก้เรื่องชนิดสายให้อัตโนมัติ แต่ในบริบทข้อสอบให้ตอบตามหลักการพื้นฐาน\n\n📗 จำไว้สอบ: down/down = Layer 1 | administratively down = สั่ง shutdown | up/down = Layer 2 | err-disabled = สวิตช์ปิดเอง',
  },
  {
    id: 68,
    kind: 'drag',
    image: v3q68,
    prompt:
      'Refer to the exhibit. Drag and drop the subnet masks from the left onto the corresponding subnets on the right. Not all subnet masks are used.',
    categories: [
      { name: '10.10.13.0', items: ['255.255.255.128'] },
      { name: '10.10.13.128', items: ['255.255.255.240'] },
      { name: '10.10.13.160', items: ['255.255.255.248'] },
      { name: '10.10.13.252', items: ['255.255.255.252'] },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['255.255.248.0', '255.255.255.224'] },
    ],
    explanation:
      '📘 แนวคิด — จับคู่ prefix length จากตารางเราต์กับ dotted-decimal mask\n\nตารางแปลง:\n• /21 → 255.255.248.0 | /25 → 255.255.255.128 | /27 → 255.255.255.224\n• /28 → 255.255.255.240 | /29 → 255.255.255.248 | /30 → 255.255.255.252\n\n🔍 อ่านทีละบรรทัดจาก exhibit:\n• O 10.10.13.0/25 → 255.255.255.128 ✔ (ครอบ .0–.127)\n• O 10.10.13.128/28 → 255.255.255.240 ✔ (ครอบ .128–.143)\n• O 10.10.13.160/29 → 255.255.255.248 ✔ (ครอบ .160–.167)\n• O 10.10.13.252/30 → 255.255.255.252 ✔ (ครอบ .252–.255)\n\n❌ ตัวลวงที่ไม่ได้ใช้:\n• 255.255.248.0 = /21 → ไม่มีเราต์ใดในตารางใช้ prefix นี้ (ระวังตำแหน่งเลข 248 อยู่อ็อกเท็ตที่ 3)\n• 255.255.255.224 = /27 → ในตารางมี /27 อยู่ก็จริง แต่เป็นของกลุ่ม 209.165.20x.0 ซึ่งไม่ได้อยู่ในรายการที่ต้องจับคู่\n\n💡 สังเกตว่า 10.10.13.144/28 และ 10.10.13.208/29 ก็อยู่ในตารางด้วย แต่โจทย์ไม่ได้ให้จับคู่ — ต้องอ่านเฉพาะซับเน็ตที่ปรากฏทางขวาเท่านั้น\n\n📗 จำไว้สอบ: /30 = 255.255.255.252 = 4 IP = 2 usable นิยมใช้กับลิงก์ point-to-point ระหว่างเราเตอร์',
  },
  {
    id: 69,
    kind: 'single',
    image: v3q69,
    prompt:
      'Refer to the exhibit. A network engineer must configure the link with these requirements: consume as few IP addresses as possible; leave at least two additional useable IP addresses for future growth. Which set of configurations must be applied?',
    options: [
      { key: 'A', text: 'R1: ip address 10.10.10.1 255.255.255.248 / R2: ip address 10.10.10.4 255.255.255.248' },
      { key: 'B', text: 'R1: ip address 10.10.10.1 255.255.255.240 / R2: ip address 10.10.10.12 255.255.255.240' },
      { key: 'C', text: 'R1: ip address 10.10.10.1 255.255.255.252 / R2: ip address 10.10.10.2 255.255.255.252' },
      { key: 'D', text: 'R1: ip address 10.10.10.1 255.255.255.0 / R2: ip address 10.10.10.5 255.255.255.0' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — คำนวณจำนวน IP ที่ใช้งานได้ของแต่ละ mask\nสูตร: usable = 2^(บิตโฮสต์) − 2 (หัก network address และ broadcast address)\n\n• /30 (255.255.255.252) → 2 บิตโฮสต์ → 4 − 2 = 2 usable → ใช้ไป 2 เหลือ 0 ✘\n• /29 (255.255.255.248) → 3 บิตโฮสต์ → 8 − 2 = 6 usable → ใช้ไป 2 เหลือ 4 ✔ ⭐\n• /28 (255.255.255.240) → 4 บิตโฮสต์ → 16 − 2 = 14 usable → เหลือ 12 (เกินความจำเป็น)\n• /24 (255.255.255.0) → 254 usable → เปลืองมาก\n\n🔍 แปลโจทย์: ต้องการ "ประหยัดที่สุด" แต่ยัง "เหลืออย่างน้อย 2 IP สำรอง" → ต้องการ ≥ 4 usable (2 ใช้จริง + 2 สำรอง) → ตัวเลือกที่เล็กที่สุดที่ผ่านคือ /29\n\n🧮 ตรวจ /29 ของ 10.10.10.0: block size 8 → ซับเน็ต 10.10.10.0/29 ครอบ .0–.7 → network .0, broadcast .7, ใช้ได้ .1–.6\n• R1 = 10.10.10.1 ✔ อยู่ในช่วง\n• R2 = 10.10.10.4 ✔ อยู่ในช่วงและซับเน็ตเดียวกัน\n→ เหลือว่างอีก .2, .3, .5, .6 = 4 IP ✔\n\n✅ ทำไม A ถูก: ใช้ /29 ซึ่งเล็กที่สุดที่ยังเหลือ IP สำรองครบตามเงื่อนไข และ IP ทั้งสองอยู่ในซับเน็ตเดียวกันจริง\n\n❌ ทำไมข้ออื่นผิด:\nB. /28 ใช้ IP มากเกินความจำเป็น (14 usable) ผิดเงื่อนไข "ประหยัดที่สุด" — และ 10.10.10.1 กับ 10.10.10.12 ก็อยู่คนละฝั่งของช่วงแต่ยังซับเน็ตเดียวกัน\nC. /30 เหลือ 0 IP สำรอง ผิดเงื่อนไข "เหลืออย่างน้อย 2"\nD. /24 เปลือง 254 IP สำหรับลิงก์ที่ใช้จริงแค่ 2 — สิ้นเปลืองที่สุด\n\n📗 จำไว้สอบ: /30=2 usable (นิยมสำหรับ P2P), /29=6, /28=14, /27=30, /26=62, /25=126, /24=254 • /31 ใช้กับลิงก์ P2P ได้ 2 IP โดยไม่มี network/broadcast (RFC 3021)',
  },
  {
    id: 70,
    kind: 'single',
    prompt: 'What is a function of Layer 3 switches?',
    options: [
      { key: 'A', text: 'They route traffic between devices in different VLANs.' },
      { key: 'B', text: 'They transmit broadcast traffic when operating in Layer 3 mode exclusively.' },
      { key: 'C', text: 'They forward Ethernet frames between VLANs using only MAC addresses.' },
      { key: 'D', text: 'They move frames between endpoints limited to IP addresses.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Layer 3 switch (multilayer switch) คือสวิตช์ที่ทำ routing ได้ในตัว\n• สวิตช์ธรรมดา (Layer 2) ส่งต่อเฟรมโดยดู MAC เท่านั้น และแยก VLAN คุยกันไม่ได้\n• Layer 3 switch เพิ่มความสามารถ routing เข้ามา ทำ inter-VLAN routing ได้โดยไม่ต้องพึ่งเราเตอร์ภายนอก ⭐\n• ทำได้ 2 วิธี:\n  ‑ SVI (Switch Virtual Interface): interface vlan 10 → ตั้ง IP เป็น default gateway ของ VLAN นั้น (ต้องสั่ง ip routing ที่ระดับ global)\n  ‑ Routed port: สั่ง no switchport บนพอร์ต แล้วตั้ง IP ตรง ๆ เหมือนพอร์ตเราเตอร์\n• ทำงานเร็วกว่า router-on-a-stick มากเพราะใช้ ASIC ในการสวิตช์\n\n✅ ทำไม A ถูก: หน้าที่เด่นของ Layer 3 switch คือเราต์ทราฟฟิกระหว่างอุปกรณ์ที่อยู่คนละ VLAN\n\n❌ ทำไมข้ออื่นผิด:\nB. อุปกรณ์ Layer 3 เป็นตัว "กั้น" broadcast domain — แต่ละ VLAN/ซับเน็ตคือ broadcast domain ของตัวเอง ไม่ได้ส่งต่อ broadcast ข้ามไป\nC. การข้าม VLAN ต้องใช้ข้อมูล Layer 3 (IP address) เสมอ ใช้ MAC อย่างเดียวไม่ได้\nD. ประโยคนี้สับสนระหว่าง frame (Layer 2, ใช้ MAC) กับ packet (Layer 3, ใช้ IP) — Layer 3 switch เราต์ "แพ็กเก็ต" โดยดู IP\n\n📗 จำไว้สอบ: inter-VLAN routing ทำได้ 3 แบบ = router ต่อทีละขา (สิ้นเปลือง) | router-on-a-stick (trunk + subinterface) | Layer 3 switch + SVI (เร็วที่สุด)',
  },
  {
    id: 71,
    kind: 'single',
    image: v3q71,
    prompt:
      'Refer to the exhibit. IPv6 is being implemented within the enterprise. The command ipv6 unicast-routing is configured. Interface Gig0/0 on R1 must be configured to provide a dynamic assignment using the assigned IPv6 block. Which command accomplishes this task?',
    options: [
      { key: 'A', text: 'ipv6 address 2001:DB8:FFFF:FCF3::/64 eui-64' },
      { key: 'B', text: 'ipv6 address 2001:DB8:FFFF:FCF3::/64 link-local' },
      { key: 'C', text: 'ipv6 address 2001:0B8:FFFF:FCF3::1/64' },
      { key: 'D', text: 'ipv6 address autoconfig 2001:DB8:FFFF:FCF2::/64' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — วิธีตั้งที่อยู่ IPv6 บนอินเทอร์เฟซ\n• แบบระบุเอง (static): ipv6 address <address>/<prefix>\n• แบบ EUI-64 ⭐: ipv6 address <prefix>/64 eui-64 → เราเตอร์สร้าง 64 บิตท้าย (interface ID) ให้อัตโนมัติจาก MAC address โดย\n  1️⃣ แบ่ง MAC 48 บิตเป็นสองครึ่ง\n  2️⃣ แทรก FFFE ตรงกลาง\n  3️⃣ พลิกบิตที่ 7 จากซ้าย (U/L bit) ให้เป็น 1\n  → เป็นการกำหนดที่อยู่แบบ "dynamic" จาก block ที่เราให้มา\n• แบบ SLAAC: ipv6 address autoconfig → ให้อินเทอร์เฟซเรียนรู้ prefix จาก RA ของเราเตอร์ตัวอื่น (ใช้ฝั่งไคลเอนต์ ไม่ใช่ฝั่งที่ประกาศ prefix)\n\n🔍 โจทย์: "provide a dynamic assignment using the assigned IPv6 block" = ใช้ prefix ที่ได้รับมา (2001:0db8:ffff:fcf3::/64) แล้วให้ส่วนโฮสต์ถูกสร้างอัตโนมัติ → ตรงกับ EUI-64\n\n✅ ทำไม A ถูก: ระบุ prefix ตามบล็อกที่ได้รับ และใช้คีย์เวิร์ด eui-64 ให้เราเตอร์สร้าง interface ID เองจาก MAC\n\n❌ ทำไมข้ออื่นผิด:\nB. คีย์เวิร์ด link-local ใช้กับที่อยู่ FE80::/10 เท่านั้น ใส่กับ prefix แบบ global unicast ไม่ได้\nC. พิมพ์ prefix ผิด (2001:0B8 แทนที่จะเป็น 2001:0DB8) และเป็นการตั้งค่าแบบ static ไม่ใช่ dynamic\nD. ipv6 address autoconfig ใช้รับ prefix จาก RA และไม่รับพารามิเตอร์ prefix ต่อท้ายแบบนี้ อีกทั้ง prefix ที่ให้มา (FCF2) ยังไม่ตรงกับบล็อกที่ได้รับ (FCF3)\n\n📗 จำไว้สอบ: EUI-64 = MAC 48 บิต + แทรก FFFE ตรงกลาง + พลิกบิต U/L • ต้องสั่ง ipv6 unicast-routing ก่อน เราเตอร์จึงจะเราต์ IPv6 และส่ง RA ได้',
  },
  {
    id: 72,
    kind: 'single',
    image: v3q72,
    prompt: 'Refer to the exhibit. Which router or router group are NTP clients?',
    options: [
      { key: 'A', text: 'R1, R2, and R3' },
      { key: 'B', text: 'R1' },
      { key: 'C', text: 'R2 and R3' },
      { key: 'D', text: 'R1, R3, and R4' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — คำสั่ง NTP บน Cisco IOS\n• ntp server <ip> ⭐ → "ฉันเป็นไคลเอนต์" ของเซิร์ฟเวอร์ตัวนั้น (ไปขอเวลามาซิงค์)\n• ntp master <stratum> → "ฉันเป็นเซิร์ฟเวอร์" โดยอ้างอิงนาฬิกาภายในตัวเอง (ตัวเลขคือค่า stratum ยิ่งน้อยยิ่งใกล้แหล่งเวลาจริง)\n• อุปกรณ์หนึ่งตัวเป็นได้ทั้งไคลเอนต์และเซิร์ฟเวอร์พร้อมกัน (รับเวลามาจากข้างบน แล้วจ่ายต่อให้ข้างล่าง)\n\n🔍 อ่านคอนฟิกทีละตัวจาก exhibit:\n• R1: ntp master 7 + ntp server 209.165.200.225 → เป็นทั้งเซิร์ฟเวอร์และ "ไคลเอนต์" ของ 209.165.200.225 ✔ ⭐\n• R2: ntp server 172.16.0.1 → ไคลเอนต์ล้วน ✔ ⭐\n• R3: ntp master 6 + ntp server 172.16.0.1 → เป็นทั้งเซิร์ฟเวอร์และ "ไคลเอนต์" ของ 172.16.0.1 ✔ ⭐\n• R4: ntp master 7 เท่านั้น → เป็นเซิร์ฟเวอร์อย่างเดียว ไม่ได้ไปขอเวลาจากใคร ✘\n\n✅ ทำไม A ถูก: ทุกตัวที่มีบรรทัด ntp server คือไคลเอนต์ ได้แก่ R1, R2, R3 (172.16.0.1 คือ Loopback 0 ของ R1)\n\n❌ ทำไมข้ออื่นผิด:\nB. R1 เป็นไคลเอนต์จริง แต่ตกหล่น R2 และ R3\nC. ตกหล่น R1 ซึ่งมี ntp server 209.165.200.225 อยู่ด้วย (คนมักเห็น ntp master แล้วเหมาว่าเป็นเซิร์ฟเวอร์อย่างเดียว)\nD. รวม R4 เข้ามาทั้งที่ R4 มีแต่ ntp master จึงเป็นเซิร์ฟเวอร์ล้วน และตกหล่น R2\n\n📗 จำไว้สอบ: ntp server = ไคลเอนต์ | ntp master = เซิร์ฟเวอร์ • NTP ใช้ UDP 123 • stratum 0 = นาฬิกาอะตอม/GPS, ยิ่งเลขมากยิ่งห่างจากแหล่งอ้างอิง',
  },
  {
    id: 73,
    kind: 'multi',
    prompt:
      'A network engineer is replacing the switches that belong to a managed-services client with new Cisco Catalyst switches. The new switches will be configured for updated security standards, including replacing Telnet services with encrypted connections and doubling the modulus size from 1024. Which two commands must the engineer configure on the new switches? (Choose two)',
    options: [
      { key: 'A', text: 'transport input ssh' },
      { key: 'B', text: 'transport input all' },
      { key: 'C', text: 'crypto key generate rsa general-keys modulus 1024' },
      { key: 'D', text: 'crypto key generate rsa usage-keys' },
      { key: 'E', text: 'crypto key generate rsa modulus 2048' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — แยกความต้องการเป็น 2 ข้อ\n1️⃣ "replacing Telnet services with encrypted connections" → ต้องอนุญาตเฉพาะ SSH บน VTY lines\n• transport input ssh ⭐ → รับเฉพาะ SSH ปฏิเสธ Telnet\n• transport input all / telnet ssh → ยังเปิดช่อง Telnet อยู่ ✘\n• transport input none → ปิดการเข้าถึงระยะไกลทั้งหมด\n\n2️⃣ "doubling the modulus size from 1024" → 1024 × 2 = 2048 บิต\n• crypto key generate rsa modulus 2048 ⭐\n• ยิ่ง modulus ใหญ่ยิ่งปลอดภัย แต่ใช้เวลาสร้างและประมวลผลนานขึ้น\n• ต้อง ≥ 768 บิต จึงจะเปิด SSH เวอร์ชัน 2 ได้ (Cisco แนะนำ 2048)\n\n✅ ทำไม A, E ถูก: A ปิด Telnet ให้เหลือแต่ช่องทางที่เข้ารหัส และ E สร้างคู่กุญแจ RSA ขนาด 2048 บิตตามที่โจทย์ระบุ\n\n❌ ทำไมข้ออื่นผิด:\nB. transport input all เปิดทุกโปรโตคอลรวม Telnet ซึ่งเป็นสิ่งที่ต้องเลิกใช้\nC. modulus 1024 คือค่าเดิม ไม่ได้เพิ่มเป็นสองเท่าตามโจทย์\nD. usage-keys สร้างกุญแจแยกสำหรับ signature และ encryption (ใช้กับ IPsec/PKI) และไม่ได้ระบุขนาด modulus ตามที่โจทย์ต้องการ\n\n📗 จำไว้สอบ: SSH ต้องมี hostname + ip domain-name + crypto key generate rsa + username + transport input ssh • modulus ≥ 768 ถึงใช้ SSHv2 ได้',
  },
  {
    id: 74,
    kind: 'single',
    image: v3q74,
    prompt:
      'Refer to the exhibit. An engineer is checking the routing table in the main router to identify the path to a server on the network. Which route does the router use to reach the server at 192.168.2.2?',
    options: [
      { key: 'A', text: 'S 192.168.2.0/28 [1/0] via 10.1.1.1' },
      { key: 'B', text: 'S 192.168.1.0/30 [1/0] via 10.1.1.1' },
      { key: 'C', text: 'S 192.168.0.0/20 [1/0] via 10.1.1.1' },
      { key: 'D', text: 'S 192.168.2.0/29 [1/0] via 10.1.1.1' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — longest prefix match: เมื่อหลายเราต์ครอบ IP ปลายทางเดียวกัน ให้เลือกเส้นที่ prefix ยาวที่สุด (subnet เจาะจงที่สุด)\n\n🔍 ไล่เช็คทีละเราต์ว่าครอบ 192.168.2.2 หรือไม่:\n• S 192.168.0.0/20 → block 16 ที่อ็อกเท็ตที่ 3 → ครอบ 192.168.0.0–192.168.15.255 ✔ (prefix ยาว 20)\n• S 192.168.1.0/30 → ครอบ 192.168.1.0–192.168.1.3 ✘ (คนละอ็อกเท็ตที่ 3)\n• S 192.168.2.0/28 → block 16 → ครอบ 192.168.2.0–192.168.2.15 ✔ (prefix ยาว 28)\n• S 192.168.2.0/29 → block 8 → ครอบ 192.168.2.0–192.168.2.7 ✔ ⭐ (prefix ยาว 29)\n\n🧮 เรียงความยาว prefix ที่ match: /29 > /28 > /20 → ชนะคือ /29\n\n✅ ทำไม D ถูก: 192.168.2.0/29 ครอบ 192.168.2.2 และเป็น prefix ที่ยาวที่สุด (เจาะจงที่สุด) จึงถูกเลือก — สังเกตว่าทุกเส้นเป็น static ที่มี AD 1 เท่ากันหมด จึงตัดสินด้วย prefix ล้วน ๆ\n\n❌ ทำไมข้ออื่นผิด:\nA. /28 ครอบปลายทางจริง แต่สั้นกว่า /29\nB. /30 ครอบแค่ 192.168.1.0–.3 ซึ่งเป็นคนละเครือข่าย ไม่ครอบ 192.168.2.2\nC. /20 ครอบก็จริงแต่กว้างที่สุด จะถูกใช้ต่อเมื่อไม่มีเส้นที่เจาะจงกว่า\n\n📗 จำไว้สอบ: longest prefix match ตัดสินก่อนเสมอ • /29 block 8 → .0–.7 | /28 block 16 → .0–.15 | /20 block 16 ที่อ็อกเท็ตที่ 3',
  },
  {
    id: 75,
    kind: 'single',
    image: v3q75,
    prompt: 'Refer to the exhibit. In which structure does the word "warning" directly reside?',
    options: [
      { key: 'A', text: 'array' },
      { key: 'B', text: 'object' },
      { key: 'C', text: 'Boolean' },
      { key: 'D', text: 'string' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โครงสร้างข้อมูล JSON\n• object = { } เก็บคู่ "key": value\n• array = [ ] เก็บรายการค่าเรียงตามลำดับ คั่นด้วยจุลภาค ⭐\n• string = ข้อความในเครื่องหมายคำพูด "…"\n• Boolean = true / false (ไม่มีเครื่องหมายคำพูด)\n\n🔍 อ่านจาก exhibit:\n"myCar": {\n    "name": "thunder",\n    "wheels": ["good", "good", "pressureLow", "warning"], ⭐\n    "gasLight": false\n}\n\n🧮 คำว่า "warning" เป็นสมาชิกตัวที่ 4 ที่อยู่ระหว่างวงเล็บเหลี่ยม [ ] ของคีย์ "wheels" → โครงสร้างที่ห่อหุ้มมันโดยตรงคือ array\n\n✅ ทำไม A ถูก: โจทย์ถามว่า "อยู่ในโครงสร้างใดโดยตรง" (directly reside) → ตัวที่ห่อชั้นในสุดคือ array ของ wheels\n\n❌ ทำไมข้ออื่นผิด:\nB. object เป็นโครงสร้างที่อยู่ "ชั้นนอก" ขึ้นไป (myCar object ห่อ array อีกที) ไม่ใช่ชั้นที่ห่อโดยตรง\nC. Boolean คือ false ของคีย์ gasLight เป็นคนละค่ากัน\nD. "warning" เอง "เป็น" string ก็จริง แต่โจทย์ถามว่ามัน "อยู่ใน" โครงสร้างอะไร ไม่ได้ถามว่ามันเป็นชนิดอะไร — string ไม่ใช่โครงสร้างที่บรรจุค่าอื่น\n\n📗 จำไว้สอบ: [ ] = array (เรียงลำดับ เข้าถึงด้วยดัชนี) | { } = object (เข้าถึงด้วยชื่อคีย์) • ระวังโจทย์ที่ถาม "อยู่ใน" กับ "เป็น" ให้ดี',
  },
  {
    id: 76,
    kind: 'single',
    image: v3q76,
    prompt:
      'Refer to the exhibit. After applying this configuration to router R1, a network engineer is verifying the implementation. If all links are operating normally, and the engineer sends a series of packets from PC1 to PC3, how are the packets routed?',
    options: [
      { key: 'A', text: 'They are routed to 172.16.20.2.' },
      { key: 'B', text: 'They are distributed sent round robin to interfaces S0/0/0 and S0/0/1.' },
      { key: 'C', text: 'They are routed to 192.168.100.2.' },
      { key: 'D', text: 'They are routed to 10.0.0.2.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — floating static route และการ load balance\n• เมื่อมี static route ไปยังปลายทางเดียวกัน "หลายเส้น" และทุกเส้นมี AD เท่ากัน → เราเตอร์จะติดตั้งทุกเส้นและแบ่งโหลดแบบ equal-cost\n• แต่ถ้าเส้นใดถูกระบุตัวเลข AD ต่อท้าย (เช่น 20) เส้นนั้นจะกลายเป็น "เส้นสำรอง" และจะไม่ถูกติดตั้งลงตารางเราต์ ตราบใดที่เส้นหลักยังใช้งานได้\n\n🔍 อ่านคอนฟิกใน exhibit:\n• ip route 0.0.0.0 0.0.0.0 172.16.20.2 → ไม่ได้ระบุ AD จึงใช้ค่าเริ่มต้น = 1 ⭐ (เส้นหลัก ออกทาง S0/0/0 ไปหา R3)\n• ip route 0.0.0.0 0.0.0.0 10.0.0.2 20 → ระบุ AD = 20 → เป็น floating static (เส้นสำรอง ออกทาง S0/0/1 ไปหา R2)\n\n🧮 เทียบ AD: 1 < 20 → มีเพียงเส้น via 172.16.20.2 เท่านั้นที่อยู่ในตารางเราต์\n\n✅ ทำไม A ถูก: โจทย์ระบุว่า "ทุกลิงก์ทำงานปกติ" ดังนั้นเส้นหลัก AD 1 ยังใช้ได้ แพ็กเก็ตจาก PC1 ไป PC3 จึงถูกส่งไปยัง next-hop 172.16.20.2 ทั้งหมด\n\n❌ ทำไมข้ออื่นผิด:\nB. จะแบ่งโหลดแบบ round robin ได้ ต้องมี AD "เท่ากัน" ทั้งสองเส้น แต่ที่นี่ต่างกัน (1 กับ 20)\nC. 192.168.100.2 ไม่ปรากฏในคอนฟิกหรือแผนผังเลย\nD. 10.0.0.2 คือ next-hop ของเส้นสำรอง จะถูกใช้ก็ต่อเมื่อเส้น 172.16.20.2 ล่มเท่านั้น\n\n📗 จำไว้สอบ: static AD เริ่มต้น = 1 • ใส่ตัวเลขต่อท้ายคำสั่ง ip route = ตั้ง AD เอง = floating static • equal-cost load balancing ต้อง AD และ metric เท่ากัน',
  },
  {
    id: 77,
    kind: 'single',
    prompt:
      'A network administrator plans an update to the Wi-Fi networks in multiple branch offices. Each location is configured with an SSID called "Office". The administrator wants every user who connects to the SSID at any location to have the same access level. What must be set the same on each network to meet the requirement?',
    options: [
      { key: 'A', text: 'radio policy' },
      { key: 'B', text: 'security policies' },
      { key: 'C', text: 'NAS-ID configuration' },
      { key: 'D', text: 'profile name' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — องค์ประกอบของ WLAN บน WLC และผลของแต่ละอย่าง\n• SSID → ชื่อเครือข่ายที่ผู้ใช้เห็นและเลือกเชื่อมต่อ\n• Profile name → ชื่อที่ผู้ดูแลตั้งไว้เรียกใช้ภายใน WLC เท่านั้น ผู้ใช้ไม่เห็น และไม่มีผลต่อสิทธิ์การเข้าถึง\n• Security policies ⭐ → กำหนดวิธียืนยันตัวตนและการเข้ารหัส (WPA2/WPA3, PSK หรือ 802.1X, RADIUS server, AAA override, ACL, QoS) → เป็นตัวกำหนดว่าผู้ใช้ "ได้สิทธิ์เข้าถึงระดับไหน" จริง ๆ\n• Radio policy → เลือกว่า SSID นี้กระจายบนย่าน 2.4 GHz, 5 GHz หรือทั้งคู่ — เป็นเรื่องคลื่นวิทยุ ไม่ใช่สิทธิ์\n• NAS-ID → ตัวระบุที่ WLC ส่งไปให้ RADIUS เพื่อบอกว่าคำขอมาจากอุปกรณ์ใด ใช้แยกนโยบายตามสถานที่ต่างหาก\n\n✅ ทำไม B ถูก: ถ้าจะให้ผู้ใช้ที่เชื่อมต่อ SSID "Office" ทุกสาขาได้ระดับการเข้าถึงเหมือนกัน ต้องตั้งนโยบายความปลอดภัย (วิธี auth, การเข้ารหัส, เซิร์ฟเวอร์ AAA และนโยบายที่ผูกไว้) ให้เหมือนกันทุกที่ — ถ้าสาขาหนึ่งใช้ WPA2-PSK แต่อีกสาขาใช้ 802.1X สิทธิ์ที่ได้จะต่างกันทันที\n\n❌ ทำไมข้ออื่นผิด:\nA. radio policy กระทบแค่ว่าจะเห็น SSID บนย่านความถี่ใด ไม่เกี่ยวกับสิทธิ์\nC. NAS-ID มีไว้ให้ RADIUS "แยกแยะ" ตามสถานที่ ซึ่งกลับทำให้สิทธิ์ต่างกันได้\nD. profile name เป็นชื่อภายในของ WLC ล้วน ๆ ไม่มีผลกับผู้ใช้\n\n📗 จำไว้สอบ: WLAN security policy ที่มีให้เลือก = WEP, WPA, WPA2, WPA3, WAPI • สิทธิ์การเข้าถึงมาจาก authentication + AAA override + ACL ไม่ใช่ชื่อโปรไฟล์',
  },
  {
    id: 78,
    kind: 'single',
    image: v3q78,
    prompt:
      'Refer to the exhibit. Which command set configures ROUTER-1 to allow Internet access for users on the 192.168.1.0/24 subnet while using 209.165.202.129 for Port Address Translation?',
    options: [
      {
        key: 'A',
        text: 'ip nat pool CCNA 192.168.0.0 192.168.1.255 netmask 255.255.255.0 / access-list 10 permit 192.168.0.0 0.0.0.255 / ip nat inside source list 10 pool CCNA overload',
      },
      {
        key: 'B',
        text: 'ip nat pool CCNA 209.165.202.129 209.165.202.129 netmask 255.255.255.255 / access-list 10 permit 192.168.1.0 255.255.255.0 / ip nat inside source list 10 pool CCNA overload',
      },
      {
        key: 'C',
        text: 'ip nat pool CCNA 192.168.0.0 192.168.1.255 netmask 255.255.255.0 / access-list 10 permit 192.168.0.0 255.255.255.0 / ip nat inside source list 10 pool CCNA overload',
      },
      {
        key: 'D',
        text: 'ip nat pool CCNA 209.165.202.129 209.165.202.129 netmask 255.255.255.255 / access-list 10 permit 192.168.1.0 0.0.0.255 / ip nat inside source list 10 pool CCNA overload',
      },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — องค์ประกอบของ PAT (NAT overload) แบบใช้ pool\n1️⃣ pool ต้องบรรจุ "IP สาธารณะ" ที่จะใช้ออกเน็ต — โจทย์ระบุ 209.165.202.129 จึงต้องใส่ค่านี้ทั้งช่วงต้นและช่วงปลาย (pool ที่มี IP เดียว)\n2️⃣ ACL ต้องระบุ "ซับเน็ตภายใน" ที่จะถูกแปลง — 192.168.1.0/24 และ ACL ใช้ wildcard mask เสมอ (0.0.0.255) ไม่ใช่ subnet mask\n3️⃣ ผูกเข้าด้วยกันด้วย ip nat inside source list <ACL> pool <ชื่อ> overload → คีย์เวิร์ด overload คือสิ่งที่ทำให้เป็น PAT (หลายเครื่องใช้ IP เดียวกัน แยกด้วยหมายเลขพอร์ต)\n4️⃣ อย่าลืม ip nat inside บนขา LAN และ ip nat outside บนขา WAN\n\n✅ ทำไม D ถูก: pool มี 209.165.202.129 ตามโจทย์ ✔, ACL ใช้ 192.168.1.0 พร้อม wildcard 0.0.0.255 ที่ถูกต้อง ✔, มี overload ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. pool บรรจุที่อยู่ private (192.168.x.x) ซึ่งออกอินเทอร์เน็ตไม่ได้ และ ACL ระบุ 192.168.0.0 ผิดซับเน็ต\nB. pool ถูก แต่ ACL ใช้ 255.255.255.0 ซึ่งเป็น subnet mask — ในคำสั่ง access-list ต้องใช้ wildcard 0.0.0.255\nC. ผิดทั้ง pool (เป็น private) และ ACL (ทั้งซับเน็ตผิดและใช้ subnet mask แทน wildcard)\n\n📗 จำไว้สอบ: ACL ใช้ wildcard เสมอ (/24 → 0.0.0.255) • overload = PAT รองรับ ~4,000 เซสชันต่อ IP • ต้องมี ip nat inside/outside บนอินเทอร์เฟซ',
  },
  {
    id: 79,
    kind: 'single',
    image: v3q79,
    prompt:
      'Refer to the exhibit. A multivendor network exists and the company is implementing VoIP over the network for the first time. Which configuration is needed to implement the neighbor discovery protocol on the interface and allow it to remain off for the remaining interfaces?',
    options: [
      { key: 'A', text: 'no cdp enable (global) / interface gi1/0/1 / cdp run' },
      { key: 'B', text: 'lldp enable (global) / interface gi1/0/1 / lldp run' },
      { key: 'C', text: 'lldp run (global) / interface gi1/0/1 / lldp enable' },
      { key: 'D', text: 'no cdp run (global) / interface gi1/0/1 / lldp transmit / lldp receive' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เลือกโปรโตคอลค้นหาเพื่อนบ้านให้ถูกกับสภาพแวดล้อม\n• เครือข่ายนี้เป็น multivendor และโทรศัพท์เป็นยี่ห้ออื่น (non-Cisco) → CDP ซึ่งเป็นของ Cisco ใช้ไม่ได้ ต้องใช้ LLDP (มาตรฐาน IEEE 802.1AB) ⭐\n• ขอบเขตคำสั่ง:\n  ‑ ระดับ global: cdp run / no cdp run และ lldp run / no lldp run\n  ‑ ระดับ interface: cdp enable / no cdp enable และ lldp transmit / lldp receive ⭐ (LLDP ไม่มีคำสั่งชื่อ lldp enable)\n• โจทย์ต้องการ: เปิดโปรโตคอลค้นหาเพื่อนบ้าน "เฉพาะพอร์ตที่ต่อโทรศัพท์" และให้พอร์ตอื่น "ปิดอยู่"\n\n✅ ทำไม D ถูก: เป็นตัวเลือกเดียวที่ใช้คำสั่งถูกไวยากรณ์ทั้งหมด — no cdp run ปิด CDP ทั้งเครื่อง (เพราะ CDP เปิดอยู่โดยค่าเริ่มต้นและใช้กับโทรศัพท์ non-Cisco ไม่ได้) แล้วเปิด LLDP เฉพาะ Gi1/0/1 ด้วย lldp transmit และ lldp receive\n\n❌ ทำไมข้ออื่นผิด:\nA. ยังใช้ CDP ซึ่งโทรศัพท์ non-Cisco ไม่รองรับ และสลับขอบเขตคำสั่ง (no cdp enable เป็นคำสั่งระดับ interface แต่ไปสั่งที่ global ส่วน cdp run เป็น global กลับไปสั่งที่ interface)\nB. สลับขอบเขตเช่นกัน — lldp enable ไม่ใช่คำสั่ง global และ lldp run ไม่ใช่คำสั่งระดับ interface\nC. ไวยากรณ์ระดับ interface ผิด (ไม่มีคำสั่ง lldp enable บน IOS ต้องใช้ lldp transmit / lldp receive)\n\n⚠️ หมายเหตุ: ข้อนี้เขียนไม่สมบูรณ์ — ในทางปฏิบัติ LLDP ปิดอยู่โดยค่าเริ่มต้น จึงต้องสั่ง lldp run ที่ระดับ global เพิ่มอีกหนึ่งบรรทัดด้วย ตัวเลือก D จึงเป็นเพียง "คำตอบที่ดีที่สุด" เพราะเป็นตัวเดียวที่ใช้ LLDP กับคำสั่งระดับ interface ได้ถูกต้อง และปิด CDP สำหรับพอร์ตที่เหลือ\n\n📗 จำไว้สอบ: CDP เปิดโดยค่าเริ่มต้น (Cisco เท่านั้น) | LLDP ปิดโดยค่าเริ่มต้น (ข้ามยี่ห้อได้) • global = cdp run / lldp run | interface = cdp enable / lldp transmit / lldp receive',
  },
  {
    id: 80,
    kind: 'single',
    prompt:
      'A network architect is considering whether to implement Cisco DNA Center to deploy devices on a new network. The organization is focused on reducing the time it currently takes to deploy devices in a traditional campus design. For which reason would Cisco DNA Center be more appropriate than traditional management options?',
    options: [
      { key: 'A', text: 'Cisco DNA Center provides zero-touch provisioning to third-party devices.' },
      { key: 'B', text: 'Cisco DNA Center supports deployment with a single pane of glass.' },
      { key: 'C', text: 'Cisco DNA Center minimizes the level of syslog output when reporting on Cisco devices.' },
      { key: 'D', text: 'Cisco DNA Center reduces the need for analytics on third-party access points and devices.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — จุดขายของ Cisco DNA Center คือการรวมทุกอย่างไว้ที่หน้าจอเดียว (single pane of glass)\n• ออกแบบ (Design), กำหนดนโยบาย (Policy), ติดตั้ง (Provision) และเฝ้าระวัง (Assurance) จบในเว็บอินเทอร์เฟซเดียว\n• รองรับ Network Plug and Play (PnP) → อุปกรณ์ใหม่แกะกล่อง เสียบสาย แล้วดึงคอนฟิกและ IOS image มาเองอัตโนมัติ = zero-touch provisioning → ย่นเวลาติดตั้งจากหลายชั่วโมงเหลือไม่กี่นาที ⭐\n• ใช้เทมเพลตเดียวกันกับอุปกรณ์หลายสิบตัวพร้อมกัน → คอนฟิกสม่ำเสมอ ลดข้อผิดพลาดจากการพิมพ์\n\n✅ ทำไม B ถูก: ตอบตรงกับเป้าหมายของโจทย์คือ "ลดเวลาที่ใช้ในการ deploy อุปกรณ์" — การจัดการรวมศูนย์ผ่านหน้าจอเดียวทำให้กระจายคอนฟิกไปยังอุปกรณ์จำนวนมากได้พร้อมกัน แทนการไล่ SSH ทีละตัว\n\n❌ ทำไมข้ออื่นผิด:\nA. zero-touch provisioning ของ DNA Center รองรับอุปกรณ์ Cisco เป็นหลัก ไม่ใช่อุปกรณ์ยี่ห้ออื่น\nC. DNA Center ไม่ได้มีหน้าที่ลดปริมาณ syslog — ตรงกันข้าม มันเก็บ telemetry มากขึ้นเพื่อทำ Assurance\nD. DNA Center ไม่ได้ทำให้ความจำเป็นในการวิเคราะห์อุปกรณ์ยี่ห้ออื่นลดลง และ Assurance ก็ทำงานได้ดีที่สุดกับอุปกรณ์ Cisco\n\n📗 จำไว้สอบ: DNA Center = single pane of glass + PnP/zero-touch + Assurance • ใช้ REST API (northbound) และ NETCONF/RESTCONF (southbound)',
  },
  {
    id: 81,
    kind: 'single',
    prompt: 'How do TCP and UDP fit into a query-response model?',
    options: [
      { key: 'A', text: 'TCP avoids using sequencing, and UDP avoids using acknowledgments.' },
      { key: 'B', text: 'TCP uses error detection for packets, and UDP uses error recovery.' },
      { key: 'C', text: 'TCP establishes a connection prior to sending data, and UDP sends immediately.' },
      { key: 'D', text: 'TCP encourages out-of-order packet delivery, and UDP prevents re-ordering.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ TCP กับ UDP\n\n🔹 TCP (connection-oriented)\n• ทำ 3-way handshake ก่อนส่งข้อมูลจริง: SYN → SYN-ACK → ACK ⭐\n• มี sequence number เรียงลำดับข้อมูล และ acknowledgment ยืนยันการรับ\n• มี error recovery → ถ้าข้อมูลหาย จะส่งซ้ำให้ (retransmission)\n• มี flow control ด้วย sliding window\n• เหมาะกับ HTTP/HTTPS, FTP, SSH, SMTP — งานที่ข้อมูลต้องครบถ้วน\n\n🔹 UDP (connectionless)\n• ไม่มีการสร้างการเชื่อมต่อ ส่งดาต้าแกรมออกไปทันที (fire and forget) ⭐\n• มี checksum ไว้ "ตรวจจับ" ความผิดพลาด (error detection) แต่ไม่มีการกู้คืน — เจอผิดก็ทิ้งเลย\n• ส่วนหัวเล็กเพียง 8 ไบต์ (TCP 20 ไบต์ขึ้นไป) จึงเร็วและ overhead ต่ำ\n• เหมาะกับ DNS, DHCP, TFTP, SNMP, Syslog, VoIP, วิดีโอสตรีมมิ่ง\n\n✅ ทำไม C ถูก: อธิบายความต่างในบริบท query-response ได้ถูกต้อง — TCP ต้องสร้างการเชื่อมต่อก่อนจึงเริ่มส่ง ส่วน UDP ยิงคำถามออกไปได้ทันที\n\n❌ ทำไมข้ออื่นผิด:\nA. กลับด้าน — TCP ต่างหากที่ใช้ sequencing และ UDP ต่างหากที่ไม่มี acknowledgment\nB. สลับกัน — UDP ทำได้แค่ error detection ส่วน TCP ทำ error recovery (ส่งซ้ำ)\nD. TCP ไม่ได้ส่งเสริมการส่งแบบไม่เรียงลำดับ ตรงกันข้าม เมื่อได้รับไม่เรียงลำดับ TCP จะเก็บใส่บัฟเฟอร์แล้วจัดเรียงให้ถูกก่อนส่งขึ้นแอป ส่วน UDP ไม่มีกลไกจัดเรียงเลย\n\n📗 จำไว้สอบ: TCP = handshake, sequence, ACK, retransmission, flow control, header 20 ไบต์ | UDP = ไม่มี handshake, checksum เท่านั้น, header 8 ไบต์',
  },
  {
    id: 82,
    kind: 'drag',
    image: v3q82,
    prompt: 'Drag and drop the RF terms from the left onto the corresponding statements on the right.',
    categories: [
      { name: 'measure of the minimum power required to decode a radio signal without excessive errors', items: ['receiver sensitivity'] },
      { name: 'deviation from the propagation path that occurs when a signal encounters an obstacle', items: ['reflection'] },
      {
        name: 'reduction of energy in a signal as it travels away from the access point and encounters free space or obstacles',
        items: ['absorption'],
      },
      { name: 'measure of the total unwanted signals at the receiver', items: ['noise floor'] },
      { name: 'relative power of the desired radio signal to unwanted signals at the receiver', items: ['signal-to-noise ratio'] },
    ],
    explanation:
      '📘 แนวคิด — ศัพท์ RF ที่ต้องแยกให้ออก\n\n• Receiver sensitivity ⭐ → ระดับกำลังสัญญาณ "ต่ำที่สุด" ที่ตัวรับยังถอดรหัสข้อมูลได้โดยไม่ผิดพลาดเกินไป (หน่วย dBm ค่าติดลบมาก = ไวมาก เช่น −90 dBm ดีกว่า −70 dBm)\n• Reflection ⭐ → สัญญาณ "เบี่ยงเบน" ออกจากเส้นทางเดิมเมื่อชนสิ่งกีดขวาง เช่น กระจก โลหะ (เป็นสาเหตุของ multipath)\n• Absorption ⭐ → พลังงานของสัญญาณ "ลดลง" ขณะเดินทางผ่านอากาศหรือทะลุวัตถุ (ผนัง น้ำ ตัวคน) พลังงานถูกเปลี่ยนเป็นความร้อน\n• Noise floor ⭐ → ผลรวมของสัญญาณรบกวนทั้งหมด ณ ตัวรับ (จากไมโครเวฟ บลูทูธ AP เพื่อนบ้าน สัญญาณพื้นหลัง)\n• Signal-to-Noise Ratio (SNR) ⭐ → อัตราส่วนระหว่างกำลังของสัญญาณที่ต้องการกับ noise floor (หน่วย dB) — ยิ่งสูงยิ่งดี โดยทั่วไป ≥ 25 dB ถือว่าใช้งานได้ดี\n\n💡 ปรากฏการณ์ RF อื่นที่ออกสอบด้วย: refraction (หักเห), scattering (กระจัดกระจาย), diffraction (เลี้ยวเบนรอบขอบวัตถุ), free space path loss (การอ่อนกำลังตามระยะทาง)\n\n💡 คำใบ้ในโจทย์: "minimum power required to decode"=receiver sensitivity | "deviation from path"=reflection | "reduction of energy"=absorption | "total unwanted signals"=noise floor | "relative power of desired vs unwanted"=SNR\n\n📗 จำไว้สอบ: RSSI = ความแรงสัญญาณที่วัดได้ | SNR = RSSI − noise floor | dBm ติดลบน้อยกว่า = แรงกว่า (−60 แรงกว่า −80)',
  },
  {
    id: 83,
    kind: 'single',
    prompt: 'Which interface type enables an application running on a client to send data over an IP network to a server?',
    options: [
      { key: 'A', text: 'southbound interface' },
      { key: 'B', text: 'application programming interface' },
      { key: 'C', text: 'northbound interface' },
      { key: 'D', text: 'Representational State Transfer application programming interface' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ชนิดของอินเทอร์เฟซในบริบท SDN/Automation\n\n• API (Application Programming Interface) ⭐ → ข้อตกลง/ชุดคำสั่งที่ทำให้ซอฟต์แวร์สองตัวคุยกันได้ เป็นคำกว้างที่สุด ครอบคลุมทุกรูปแบบ (REST, SOAP, gRPC, NETCONF, ไลบรารีในเครื่อง ฯลฯ)\n• REST API → API รูปแบบหนึ่งที่ทำงานบน HTTP/HTTPS โดยเฉพาะ ใช้ verb GET/POST/PUT/PATCH/DELETE และมักส่งข้อมูลเป็น JSON/XML\n• Northbound interface → ช่องทางที่ "คอนโทรลเลอร์คุยขึ้นไปหาแอปพลิเคชัน" (ปกติเป็น REST API)\n• Southbound interface → ช่องทางที่ "คอนโทรลเลอร์คุยลงไปหาอุปกรณ์เครือข่าย" (NETCONF, RESTCONF, OpenFlow, SNMP, CLI)\n\n✅ ทำไม B ถูก: โจทย์ถามถึงกรณีทั่วไป — แอปบนไคลเอนต์ส่งข้อมูลผ่านเครือข่าย IP ไปหาเซิร์ฟเวอร์ — ซึ่งเป็นบทบาทของ API ทั่วไป ไม่จำเป็นต้องเป็น REST เสมอไป จึงตอบด้วยคำที่กว้างและถูกต้องเสมอ\n\n❌ ทำไมข้ออื่นผิด:\nA. southbound เป็นทิศทางจากคอนโทรลเลอร์ลงไปยังอุปกรณ์เครือข่าย ไม่ใช่แอปไคลเอนต์คุยกับเซิร์ฟเวอร์\nC. northbound เป็นทิศทางจากคอนโทรลเลอร์ขึ้นไปหาแอป ซึ่งเป็นบริบท SDN เฉพาะ ไม่ใช่คำตอบทั่วไป\nD. REST API เป็น "ชนิดย่อย" ของ API ที่ผูกกับ HTTP/HTTPS เท่านั้น — แคบเกินไปสำหรับคำถามที่ถามแบบทั่วไป\n\n📗 จำไว้สอบ: northbound = คอนโทรลเลอร์ ↔ แอป (REST) | southbound = คอนโทรลเลอร์ ↔ อุปกรณ์ (NETCONF/RESTCONF/OpenFlow) • เจอโจทย์ถามกว้าง ให้ตอบคำที่กว้างกว่า',
  },
  {
    id: 84,
    kind: 'single',
    image: v3q84,
    prompt:
      'Refer to the exhibit. A network administrator must permit traffic from the 10.10.0.0/24 subnet to the WAN on interface Serial0. What is the effect of the configuration as the administrator applies the command?',
    options: [
      { key: 'A', text: 'The sourced traffic from IP range 10.0.0.0 – 10.0.0.255 is allowed on Serial0.' },
      { key: 'B', text: 'The permit command fails and returns an error code.' },
      { key: 'C', text: 'The router fails to apply the access list to the interface.' },
      { key: 'D', text: 'The router accepts all incoming traffic to Serial0 with the last octet of the source IP set to 0.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำสั่งที่ใช้ "ผูก" ACL เข้ากับอินเทอร์เฟซ\n• คำสั่งที่ถูกต้องคือ ip access-group <หมายเลข|ชื่อ> {in | out} ⭐\n• คำสั่ง ip access-list ใช้สำหรับ "สร้าง" ACL แบบตั้งชื่อ (named ACL) ในโหมด global config ไม่ใช่คำสั่งใต้อินเทอร์เฟซ\n\n🔍 อ่านคอนฟิกใน exhibit:\naccess-list 10 permit 10.0.0.0 0.0.0.255 → สร้าง standard ACL 10 สำเร็จ (ไวยากรณ์ถูกต้อง)\ninterface Serial0\n ip access-list 10 in ← ❌ ผิด ต้องเป็น ip access-group 10 in\n\n✅ ทำไม C ถูก: บรรทัดสุดท้ายใช้คำสั่งผิด เราเตอร์จึงปฏิเสธคำสั่งนั้น (ขึ้น % Invalid input) ผลคือ ACL 10 ถูกสร้างขึ้นแต่ไม่เคยถูกนำไปใช้กับอินเทอร์เฟซใดเลย → ไม่มีการกรองเกิดขึ้นจริง\n\n❌ ทำไมข้ออื่นผิด:\nA. ทราฟฟิกจะถูกอนุญาตตาม ACL ก็ต่อเมื่อ ACL ถูกผูกกับอินเทอร์เฟซสำเร็จ ซึ่งในที่นี้ล้มเหลว (และสังเกตด้วยว่าโจทย์อยากกรอง 10.10.0.0/24 แต่ ACL เขียนเป็น 10.0.0.0 0.0.0.255 ซึ่งครอบแค่ 10.0.0.0–10.0.0.255 คนละซับเน็ตกัน)\nB. บรรทัด access-list 10 permit 10.0.0.0 0.0.0.255 ถูกไวยากรณ์ทุกประการ จึงไม่มี error ที่บรรทัดนี้\nD. wildcard 0.0.0.255 หมายถึง "อ็อกเท็ตสุดท้ายเป็นอะไรก็ได้" ไม่ใช่ "ต้องเป็น 0" — และถึงอย่างไร ACL ก็ยังไม่ถูกนำไปใช้อยู่ดี\n\n📗 จำไว้สอบ: สร้าง ACL = access-list / ip access-list | ผูกกับอินเทอร์เฟซ = ip access-group in|out | ผูกกับ VTY = access-class in|out',
  },
  {
    id: 85,
    kind: 'single',
    image: v3q85,
    prompt: 'Refer to the exhibit. A packet sourced from 10.10.10.1 is destined for 10.10.8.14. What is the subnet mask of the destination route?',
    options: [
      { key: 'A', text: '255.255.254.0' },
      { key: 'B', text: '255.255.255.240' },
      { key: 'C', text: '255.255.255.248' },
      { key: 'D', text: '255.255.255.252' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — หาเราต์ที่ครอบ IP ปลายทางก่อน แล้วค่อยแปลง prefix เป็น mask\n\n🔍 ไล่เช็คทีละบรรทัดจาก exhibit ว่าครอบ 10.10.8.14 หรือไม่:\n• C 10.10.8.0/28 → block 16 → ครอบ 10.10.8.0–10.10.8.15 ✔ ⭐\n• C 10.10.10.0/24 → ครอบ 10.10.10.0–.255 ✘ (คนละอ็อกเท็ตที่ 3)\n• L 10.10.10.3/32 → เป็น IP ของอินเทอร์เฟซเอง ✘\n• S 172.16.1.33/32, C 172.16.2.0/23, L 172.16.2.1/32 → คนละเครือข่ายทั้งหมด ✘\n• S* 0.0.0.0/0 via 172.16.2.2 → default route จะใช้ต่อเมื่อไม่มีอะไร match\n\n🧮 มีเพียง 10.10.8.0/28 ที่ครอบปลายทาง → /28 = 255.255.255.240\n(ตรวจซ้ำ: /28 block size = 256 − 240 = 16 → ช่วง .0–.15 → 14 อยู่ในนี้ ✔)\n\n✅ ทำไม B ถูก: เราต์ที่ถูกใช้คือ connected route 10.10.8.0/28 ซึ่งมี subnet mask 255.255.255.240\n\n❌ ทำไมข้ออื่นผิด:\nA. 255.255.254.0 = /23 ซึ่งเป็นของ 172.16.2.0/23 คนละเครือข่ายกับปลายทาง\nC. 255.255.255.248 = /29 ไม่ปรากฏในตารางนี้เลย\nD. 255.255.255.252 = /30 ก็ไม่ปรากฏในตารางเช่นกัน\n\n📗 จำไว้สอบ: /28 = 255.255.255.240 = 16 IP = 14 usable • ตัวอักษร C = connected, L = local (IP ของอินเทอร์เฟซเองเป็น /32), S = static, S* = static default',
  },
  {
    id: 86,
    kind: 'multi',
    prompt: 'What are two reasons to implement IPv4 private addressing on a network? (Choose two)',
    options: [
      { key: 'A', text: 'to expand the routing table on the router' },
      { key: 'B', text: 'to facilitate renumbering when merging networks' },
      { key: 'C', text: 'to enable internal applications to treat the private IPv4 addresses as unique' },
      { key: 'D', text: 'to conserve global unique IPv4 addresses' },
      { key: 'E', text: 'to provide protection from external denial-of-service attacks' },
    ],
    correct: ['C', 'D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D และ E แต่ E ไม่ถูกต้องตามหลักการ — ที่อยู่ private ไม่ได้ถูกออกแบบมาเป็นกลไกความปลอดภัย การป้องกัน DoS เป็นหน้าที่ของไฟร์วอลล์/IPS/rate-limiting คำตอบที่ถูกต้องคือ C และ D (ตรงกับเจตนาของ RFC 1918)\n\n📘 แนวคิด — RFC 1918 กำหนดช่วงที่อยู่ private ไว้ 3 ช่วง\n• 10.0.0.0/8 → 10.0.0.0 – 10.255.255.255\n• 172.16.0.0/12 → 172.16.0.0 – 172.31.255.255\n• 192.168.0.0/16 → 192.168.0.0 – 192.168.255.255\n\nเหตุผลที่ RFC 1918 ระบุไว้:\n1️⃣ ประหยัดที่อยู่ IPv4 สาธารณะ ⭐ → องค์กรใช้ที่อยู่ private ภายในได้ไม่จำกัด แล้วแปลงผ่าน NAT/PAT ออกอินเทอร์เน็ตด้วย IP สาธารณะเพียงไม่กี่หมายเลข\n2️⃣ ให้แอปพลิเคชันภายในองค์กรมองเห็นที่อยู่เหล่านี้เป็น "ที่อยู่ที่ไม่ซ้ำกันภายในองค์กร" ⭐ → โฮสต์ทุกตัวในองค์กรจึงคุยกันได้โดยไม่ต้องขอที่อยู่สาธารณะให้ทุกเครื่อง\n\n✅ ทำไม C, D ถูก: ทั้งสองข้อคือเหตุผลหลักตามเจตนาของมาตรฐาน — ประหยัดที่อยู่สาธารณะ และให้ที่อยู่ที่ไม่ซ้ำกันภายในองค์กรสำหรับใช้งานภายใน\n\n❌ ทำไมข้ออื่นผิด:\nA. ตรงกันข้าม — การใช้ที่อยู่ private ร่วมกับ NAT ช่วย "ลด" ขนาดตารางเราต์บนอินเทอร์เน็ต ไม่ใช่ขยาย\nB. การรวมเครือข่ายสององค์กรที่ต่างก็ใช้ 10.0.0.0/8 มักทำให้ที่อยู่ "ชนกัน" และต้องมานั่งเปลี่ยนเลขใหม่ — เป็นข้อเสียที่รู้กันดี ไม่ใช่ข้อดี\nE. การที่ที่อยู่ private ไม่ถูกเราต์บนอินเทอร์เน็ตเป็นผลพลอยได้ ไม่ใช่วัตถุประสงค์ และไม่ได้ป้องกัน DoS จริง (ทราฟฟิกยังถล่ม IP สาธารณะและแบนด์วิดท์ขาเข้าได้อยู่ดี)\n\n📗 จำไว้สอบ: RFC 1918 = 10/8, 172.16/12, 192.168/16 • APIPA/link-local = 169.254.0.0/16 • loopback = 127.0.0.0/8',
  },
  {
    id: 87,
    kind: 'multi',
    image: v3q87,
    prompt:
      'Refer to the exhibit. A guest WLAN must be created that prompts the client for a username and password on the local web page of the WLC. Which two actions must be performed on the Layer 2 tab before enabling the Authentication option on the Layer 3 tab? (Choose two)',
    options: [
      { key: 'A', text: 'Uncheck the MAC Filtering option check box.' },
      { key: 'B', text: 'Set the Security Type option to Personal.' },
      { key: 'C', text: 'Change the WPA Encryption option from TKIP to CCMP128(AES).' },
      { key: 'D', text: 'Set the Layer 2 Security option to None.' },
      { key: 'E', text: 'Uncheck the WPA Policy option check box, and check the WPA2 Policy option check box.' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — Web authentication (captive portal) ทำงานที่ Layer 3\n• เมื่อจะใช้ Layer 3 Web Auth ที่ให้ผู้ใช้กรอก username/password บนหน้าเว็บของ WLC จะต้อง "ไม่มี" การยืนยันตัวตนที่ Layer 2 ขวางอยู่\n• WLC จะไม่ยอมให้เปิดตัวเลือก Authentication บนแท็บ Layer 3 ถ้า Layer 2 Security ยังตั้งเป็น WPA/WPA2 หรือยังเปิด MAC Filtering อยู่\n\n🔍 อ่าน exhibit: ตอนนี้ Layer 2 Security = WPA+WPA2, Security Type = Enterprise และ MAC Filtering ถูกติ๊กไว้\n\n✅ ทำไม A, D ถูก:\n• D → ตั้ง Layer 2 Security = None ⭐ เพื่อปิดการยืนยันตัวตนระดับ Layer 2 ทั้งหมด (เป็นรูปแบบมาตรฐานของ guest WLAN แบบ open + web auth)\n• A → เอาเครื่องหมายถูกออกจาก MAC Filtering ⭐ เพราะการกรอง MAC เป็นการยืนยันตัวตนที่ Layer 2 อีกรูปแบบหนึ่งซึ่งจะขัดกับ Web Auth\n\n❌ ทำไมข้ออื่นผิด:\nB. การตั้ง Security Type เป็น Personal ยังคงเป็นการใช้ WPA ที่ Layer 2 (แบบ PSK) ซึ่งจะทำให้เปิด Web Auth ไม่ได้อยู่ดี\nC. การเปลี่ยนวิธีเข้ารหัสจาก TKIP เป็น AES เป็นการปรับปรุงความปลอดภัยของ WPA — แต่ยังคงมี Layer 2 security อยู่ ไม่ได้ช่วยให้เปิด Web Auth ได้\nE. การสลับจาก WPA เป็น WPA2 ก็ยังเป็นการใช้ Layer 2 security อยู่ดี\n\n💡 หลังจากตั้งค่านี้แล้ว ไปที่แท็บ Layer 3 → เลือก Web Policy → Authentication แล้วสร้างบัญชีผู้ใช้ใน Local Net Users\n\n📗 จำไว้สอบ: guest WLAN แบบ captive portal = Layer 2 Security: None + Layer 3 Web Policy: Authentication • ห้ามเปิด MAC filtering ร่วมด้วย',
  },
  {
    id: 88,
    kind: 'single',
    prompt: 'Which script paradigm does Puppet use?',
    options: [
      { key: 'A', text: 'manifests and modules' },
      { key: 'B', text: 'strings and marionettes' },
      { key: 'C', text: 'recipes and cookbooks' },
      { key: 'D', text: 'playbooks and roles' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ศัพท์เฉพาะของเครื่องมือ configuration management (ข้อสอบชอบสลับคำ)\n\n🔹 Puppet ⭐\n• Manifest → ไฟล์สคริปต์ที่เขียนด้วย Puppet DSL/Ruby นามสกุล .pp (ย่อจาก Puppet policy) ระบุว่าอุปกรณ์ควรมีสถานะเป็นอย่างไร\n• Module → ชุดของ manifest + template + ไฟล์ประกอบ จัดโครงสร้างไว้เพื่อนำกลับมาใช้ซ้ำและแบ่งปันได้ (Module = Manifests + Data)\n• สถาปัตยกรรม: pull model, ใช้ TCP 8140, ปกติต้องมี agent\n\n🔹 Chef → Recipe (สูตร) รวมกันเป็น Cookbook (ตำรา) เขียนด้วย Ruby DSL, pull model, TCP 10002\n\n🔹 Ansible → Playbook (บทละคร) และ Role เขียนด้วย YAML, agentless, push model ผ่าน SSH (22)\n\n✅ ทำไม A ถูก: Puppet ใช้คู่ศัพท์ manifests และ modules\n\n❌ ทำไมข้ออื่นผิด:\nB. "strings and marionettes" เป็นการเล่นคำกับคำว่า puppet (หุ่นเชิด) ไม่มีอยู่จริงในเครื่องมือใด\nC. recipes และ cookbooks เป็นศัพท์ของ Chef\nD. playbooks และ roles เป็นศัพท์ของ Ansible\n\n📗 จำไว้สอบ: Puppet=manifest/module (.pp) | Chef=recipe/cookbook | Ansible=playbook/role (YAML) • จำคู่กับพอร์ต: 8140 / 10002 / 22',
  },
  {
    id: 89,
    kind: 'single',
    prompt: 'Which IPsec mode encrypts the IP header and the payload?',
    options: [
      { key: 'A', text: 'pipe' },
      { key: 'B', text: 'tunnel' },
      { key: 'C', text: 'control' },
      { key: 'D', text: 'transport' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — IPsec มีโหมดการทำงาน 2 แบบ\n\n🔹 Tunnel mode ⭐\n• ห่อ "แพ็กเก็ต IP เดิมทั้งก้อน" (ทั้งส่วนหัวและ payload) ให้กลายเป็น payload ของแพ็กเก็ตใหม่ แล้วเติมส่วนหัว IP ใหม่ทับลงไป\n• ผลคือ IP header เดิมถูกเข้ารหัสและซ่อนไว้ด้วย → คนดักกลางเห็นเพียง IP ของอุปกรณ์ปลายอุโมงค์\n• ใช้กับ site-to-site VPN ระหว่างเราเตอร์/ไฟร์วอลล์ ซึ่งเป็นกรณีที่พบบ่อยที่สุด\n\n🔹 Transport mode\n• คง "IP header เดิม" ไว้ตามเดิม เข้ารหัสเฉพาะ payload เท่านั้น\n• Overhead น้อยกว่า แต่เปิดเผยว่าใครคุยกับใคร\n• ใช้กับการสื่อสารระหว่างโฮสต์สองเครื่องโดยตรง (end-to-end) เช่น GRE over IPsec\n\n✅ ทำไม B ถูก: โจทย์ถามโหมดที่เข้ารหัส "ทั้ง IP header และ payload" ซึ่งตรงกับ tunnel mode ที่ห่อแพ็กเก็ตเดิมทั้งก้อนไว้ข้างใน\n\n❌ ทำไมข้ออื่นผิด:\nA. "pipe" ไม่ใช่โหมดของ IPsec เป็นตัวลวง\nC. "control" ไม่ใช่โหมดของ IPsec เช่นกัน (control plane เป็นคนละแนวคิด)\nD. transport mode คงส่วนหัว IP เดิมไว้ ไม่ได้เข้ารหัส — ตรงข้ามกับที่โจทย์ถาม\n\n💡 หมายเหตุ: ตัวโจทย์เขียนว่า "IPsec transport mode" ซึ่งชวนสับสน แต่เนื้อหาที่ถามคือโหมดที่เข้ารหัสทั้งส่วนหัวและ payload จึงต้องตอบ tunnel\n\n📗 จำไว้สอบ: tunnel = ห่อทั้งแพ็กเก็ต + IP header ใหม่ (site-to-site VPN) | transport = คง IP header เดิม เข้ารหัสแค่ payload • IPsec ใช้ AH (โปรโตคอล 51, ไม่เข้ารหัส) และ ESP (โปรโตคอล 50, เข้ารหัสได้)',
  },
  {
    id: 90,
    kind: 'single',
    prompt: 'What does WPA3 provide in wireless networking?',
    options: [
      { key: 'A', text: 'increased security and requirement of a complex configuration' },
      { key: 'B', text: 'backward compatibility with WPA and WPA2' },
      { key: 'C', text: 'optional Protected Management Frame negotiation' },
      { key: 'D', text: 'safeguards against brute force attacks with SAE' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — สิ่งที่ WPA3 นำมาใหม่\n\n• SAE (Simultaneous Authentication of Equals) ⭐ → แทนที่ PSK/4-way handshake แบบเดิมใน WPA3-Personal ใช้กระบวนการ Dragonfly handshake\n  ‑ ผู้โจมตีดักจับ handshake ไปนั่งเดารหัสผ่านแบบ offline ไม่ได้อีกต่อไป → ป้องกัน brute force / dictionary attack ⭐\n  ‑ ให้ forward secrecy: รู้รหัสผ่านทีหลังก็ถอดรหัสทราฟฟิกเก่าไม่ได้\n• PMF (802.11w) → บังคับใช้เสมอใน WPA3 (ใน WPA2 เป็นทางเลือก) ป้องกันการปลอม deauthentication frame\n• WPA3-Enterprise มีโหมด 192-bit security suite สำหรับงานที่ต้องการความปลอดภัยสูง\n• Wi-Fi Enhanced Open (OWE) → เข้ารหัสเครือข่ายสาธารณะที่ไม่มีรหัสผ่าน\n\n✅ ทำไม D ถูก: จุดเด่นที่สุดของ WPA3 คือการใช้ SAE เพื่อป้องกันการเดารหัสผ่านแบบ brute force\n\n❌ ทำไมข้ออื่นผิด:\nA. WPA3 เพิ่มความปลอดภัยจริง แต่ "ไม่ได้" ต้องการการตั้งค่าที่ซับซ้อนขึ้น — จุดขายคือปลอดภัยขึ้นโดยที่ผู้ใช้ไม่ต้องทำอะไรยากขึ้น\nB. WPA3 ใช้งานร่วมกับ WPA2 ได้ในโหมดผสม (transition mode) แต่ "ไม่รองรับ WPA รุ่นแรก" การเขียนรวมทั้งสองจึงผิด\nC. กลับด้าน — ใน WPA3 การใช้ PMF เป็น "ข้อบังคับ" ไม่ใช่ทางเลือก (ที่เป็นทางเลือกคือใน WPA2)\n\n📗 จำไว้สอบ: WPA3 = SAE (กัน brute force + forward secrecy) + PMF บังคับ + AES-GCMP + OWE สำหรับเครือข่ายเปิด',
  },
  {
    id: 91,
    kind: 'single',
    image: v3q91,
    prompt: 'Refer to the exhibit. With which metric does router R1 learn the route to host 172.16.0.202?',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '110' },
      { key: 'C', text: '32445' },
      { key: 'D', text: '3184439' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — อ่านค่าในวงเล็บเหลี่ยมของตารางเราต์: [AD/metric]\n• ตัวหน้า = Administrative Distance (ความน่าเชื่อถือของแหล่งที่มา)\n• ตัวหลัง = metric (ต้นทุนของเส้นทางตามการคำนวณของโปรโตคอลนั้น)\n\n🔍 ขั้นที่ 1 — หาว่าเราต์ใดครอบ 172.16.0.202 (longest prefix match):\n• S 172.16.0.0/24 [1/0] → ครอบ 172.16.0.0–172.16.0.255 ✔ (prefix 24)\n• O 172.16.0.128/25 [110/32445] → block 128 → ครอบ 172.16.0.128–172.16.0.255 ✔ ⭐ (prefix 25)\n• D 172.16.0.192/29 [90/3184439] → block 8 → ครอบ 172.16.0.192–172.16.0.199 ✘ (202 > 199)\n\n🧮 ตรวจ /29 ให้ชัด: 256 − 248 = 8 → ขอบเขต .192, .200, .208 → network .192, broadcast .199 → 202 ตกไปอยู่กลุ่ม .200/29 ต่างหาก จึงไม่ match\n\n🔍 ขั้นที่ 2 — เทียบ prefix ที่ match: /25 ยาวกว่า /24 → ชนะคือ O 172.16.0.128/25 [110/32445]\n\n✅ ทำไม C ถูก: เราต์ที่ถูกใช้คือเส้น OSPF /25 ซึ่งมี AD = 110 และ metric = 32445 → โจทย์ถาม "metric" จึงตอบ 32445\n\n❌ ทำไมข้ออื่นผิด:\nA. 0 คือ metric ของ static route 172.16.0.0/24 ซึ่งแพ้ตาม longest prefix match\nB. 110 คือค่า AD ของ OSPF ไม่ใช่ metric (อ่านผิดช่อง)\nD. 3184439 คือ metric ของ EIGRP บนเส้น /29 ซึ่งไม่ครอบ 172.16.0.202 เลย\n\n📗 จำไว้สอบ: [AD/metric] • OSPF metric = cost (คิดจากแบนด์วิดท์) | EIGRP metric = คิดจาก bandwidth + delay | RIP metric = hop count',
  },
  {
    id: 92,
    kind: 'multi',
    prompt: 'Which two actions are taken as the result of traffic policing? (Choose two)',
    options: [
      { key: 'A', text: 'bursting' },
      { key: 'B', text: 'fragmentation' },
      { key: 'C', text: 'dropping' },
      { key: 'D', text: 'remarking' },
      { key: 'E', text: 'buffering' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — Policing vs Shaping (สองเครื่องมือคุมอัตราทราฟฟิกของ QoS)\n\n🔹 Policing (ตำรวจจับ)\n• เมื่อทราฟฟิกเกินอัตราที่กำหนด (CIR) จะ "ลงโทษทันที" โดย:\n  ‑ Drop → ทิ้งแพ็กเก็ตส่วนเกิน ⭐\n  ‑ Remark → ลดระดับความสำคัญ (เช่น ลดค่า DSCP) แล้วปล่อยผ่านไป ให้ไปถูกทิ้งก่อนเพื่อนถ้าเจอความคับคั่งข้างหน้า ⭐\n• ไม่มีการเก็บแพ็กเก็ตไว้ในคิว → ไม่เพิ่มความหน่วง แต่ทำให้กราฟทราฟฟิกเป็นฟันเลื่อยขึ้น ๆ ลง ๆ\n• ใช้ได้ทั้งขาเข้าและขาออก\n\n🔹 Shaping (ตำรวจจราจรโบกรถ)\n• เก็บแพ็กเก็ตส่วนเกินไว้ในบัฟเฟอร์ (buffering) แล้วค่อย ๆ ปล่อยออกให้อัตราคงที่\n• ไม่ทิ้งแพ็กเก็ต (ตราบใดที่บัฟเฟอร์ยังไม่เต็ม) แต่ "เพิ่มความหน่วงและ jitter"\n• ใช้ได้เฉพาะขาออก (outbound) และไม่รองรับการ remark\n\n✅ ทำไม C, D ถูก: policing มีทางเลือกในการจัดการทราฟฟิกส่วนเกินเพียง 2 อย่างคือทิ้ง (drop) หรือทำเครื่องหมายใหม่ให้ต่ำลง (remark)\n\n❌ ทำไมข้ออื่นผิด:\nA. bursting คือการยอมให้ทราฟฟิกพุ่งเกินได้ชั่วครู่ (Bc/Be) เป็น "พารามิเตอร์" ที่ตั้งค่าไว้ ไม่ใช่ "การกระทำ" ที่ policer ทำกับแพ็กเก็ต\nB. fragmentation คือการหั่นแพ็กเก็ตเพราะเกิน MTU เป็นเรื่องของ Layer 3 ไม่ใช่ QoS policing\nE. buffering เป็นพฤติกรรมของ shaping ไม่ใช่ policing\n\n📗 จำไว้สอบ: policing = drop หรือ remark, ไม่หน่วง, ทำได้ทั้ง in/out | shaping = buffer แล้วค่อยปล่อย, หน่วงเพิ่ม, ทำได้เฉพาะ outbound',
  },
  {
    id: 93,
    kind: 'single',
    image: v3q93,
    prompt: 'Refer to the exhibit. Which IP route command created the best path for a packet destined for 10.10.10.3?',
    options: [
      { key: 'A', text: 'ip route 10.0.0.0 255.0.0.0 g0/0' },
      { key: 'B', text: 'ip route 10.10.10.1 255.255.255.255 g0/0' },
      { key: 'C', text: 'ip route 10.10.10.0 255.255.255.240 g0/0' },
      { key: 'D', text: 'ip route 10.10.0.0 255.255.252.0 g0/0' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำสั่ง static route ทุกข้อในตัวเลือกถูกป้อนเข้าไปหมดแล้ว (สังเกตว่าทุกบรรทัดในตารางแสดง "is directly connected" เพราะระบุแค่ exit interface โดยไม่มี next-hop) โจทย์ถามว่าบรรทัดใดสร้างเส้นทางที่ "ถูกใช้จริง" สำหรับ 10.10.10.3\n\n🔍 ไล่เช็คทีละเราต์ว่าครอบ 10.10.10.3 หรือไม่:\n• S 10.0.0.0/8 → ครอบ 10.0.0.0–10.255.255.255 ✔ (prefix 8)\n• C 10.1.1.0/24 → ✘ (คนละอ็อกเท็ตที่ 2/3)\n• S 10.10.0.0/22 → block 4 ที่อ็อกเท็ตที่ 3 → ครอบ 10.10.0.0–10.10.3.255 ✘ (อ็อกเท็ตที่ 3 เป็น 10 ไม่อยู่ในช่วง 0–3)\n• S 10.10.10.0/28 → block 16 → ครอบ 10.10.10.0–10.10.10.15 ✔ ⭐ (prefix 28)\n• S 10.10.10.1/32 → เจาะจงแค่ IP .1 ✘ (ปลายทางคือ .3)\n• S* 0.0.0.0/0 → default ใช้ต่อเมื่อไม่มีอะไร match\n\n🧮 เรียง prefix ที่ match: /28 > /8 > /0 → ชนะคือ 10.10.10.0/28 ซึ่งมาจากคำสั่ง ip route 10.10.10.0 255.255.255.240 g0/0\n\n✅ ทำไม C ถูก: /28 = 255.255.255.240 เป็น prefix ที่ยาวที่สุดที่ครอบ 10.10.10.3\n\n❌ ทำไมข้ออื่นผิด:\nA. /8 ครอบก็จริงแต่กว้างที่สุด แพ้ /28\nB. /32 ชี้เฉพาะ 10.10.10.1 เท่านั้น ไม่ครอบ .3 (ถ้าปลายทางเป็น .1 ข้อนี้จะเป็นคำตอบ)\nD. 255.255.252.0 = /22 ครอบแค่ 10.10.0.0–10.10.3.255 ไม่ถึง 10.10.10.3\n\n📗 จำไว้สอบ: /22 block 4 ที่อ็อกเท็ตที่ 3 | /28 block 16 ที่อ็อกเท็ตที่ 4 • static route ที่ระบุแค่ exit interface จะแสดงว่า "directly connected" ในตารางเราต์',
  },
  {
    id: 94,
    kind: 'single',
    prompt:
      'A WLC sends alarms about a rogue AP, and the network administrator verifies that the alarms are caused by a legitimate autonomous AP. How must the alarms be stopped for the MAC address of the AP?',
    options: [
      { key: 'A', text: 'Place the AP into manual containment.' },
      { key: 'B', text: 'Remove the AP from WLC management.' },
      { key: 'C', text: 'Manually remove the AP from Pending state.' },
      { key: 'D', text: 'Set the AP Class Type to Friendly.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — การจัดประเภท rogue AP บน WLC\n• WLC ถือว่า AP ใดก็ตามที่ตรวจพบในอากาศแต่ไม่ได้อยู่ในการจัดการของตนเองเป็น "rogue" ไว้ก่อน\n• ผู้ดูแลสามารถจัดประเภทใหม่ได้เป็น:\n  ‑ Friendly ⭐ → เป็น AP ที่รู้จักและยอมรับได้ (เช่น AP ของแผนกอื่น หรือ autonomous AP ที่เราตั้งเองแต่ไม่ได้ join WLC) → WLC จะเลิกแจ้งเตือนและเลิกติดตามไคลเอนต์ที่เกาะอยู่กับมัน\n  ‑ Malicious → เป็นภัยจริง ควรจัดการ\n  ‑ Unclassified → ยังไม่จัดประเภท\n• สถานะย่อยของ Friendly: Internal (รู้จักและอยู่ในองค์กร), External (รู้จักแต่เป็นของคนอื่น เช่น ร้านข้าง ๆ), Alert\n\n✅ ทำไม D ถูก: เมื่อยืนยันแล้วว่าเป็น autonomous AP ที่ถูกต้องขององค์กร ให้ตั้ง AP Class Type เป็น Friendly สำหรับ MAC address นั้น → การแจ้งเตือนจะหยุดลง\n\n❌ ทำไมข้ออื่นผิด:\nA. manual containment คือการส่งเฟรม deauthentication ไปกวนไม่ให้ไคลเอนต์เกาะ AP นั้น — เป็นการ "โจมตี" AP ที่ถูกกฎหมายของเราเอง ทำให้เครือข่ายใช้งานไม่ได้ (และอาจผิดกฎหมายถ้าเป็น AP ของคนอื่น)\nB. AP ตัวนี้เป็น autonomous จึงไม่เคยอยู่ในการจัดการของ WLC ตั้งแต่แรก จะเอาออกจากอะไรไม่ได้\nC. Pending เป็นสถานะชั่วคราวระหว่างรอจัดประเภท การลบออกจาก Pending ด้วยมือไม่ได้บอก WLC ว่า AP นี้ปลอดภัย จึงจะกลับมาแจ้งเตือนอีก\n\n📗 จำไว้สอบ: rogue classification = Friendly / Malicious / Unclassified • containment = ส่ง deauth ไปตัดไคลเอนต์ ใช้กับ rogue ที่เป็นภัยจริงเท่านั้น',
  },
  {
    id: 95,
    kind: 'single',
    prompt: 'Which security method is used to prevent man-in-the-middle attack?',
    options: [
      { key: 'A', text: 'authorization' },
      { key: 'B', text: 'authentication' },
      { key: 'C', text: 'anti-replay' },
      { key: 'D', text: 'accounting' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Man-in-the-middle (MITM หรือ on-path attack) คือการที่ผู้โจมตีแทรกตัวอยู่กลางการสื่อสารของสองฝ่าย เพื่อดักอ่านหรือแก้ไขข้อมูล โดยทั้งสองฝ่ายยังเชื่อว่าคุยกับคู่สนทนาตัวจริง\n• ตัวอย่าง: ARP spoofing, DHCP rogue server, การปลอมใบรับรอง SSL\n\n🔍 หัวใจของการป้องกันคือ "ต้องพิสูจน์ให้ได้ว่าอีกฝ่ายเป็นตัวจริง" = authentication ⭐\n• การยืนยันตัวตนด้วยใบรับรองดิจิทัล (certificate) ทำให้ผู้โจมตีที่แทรกกลางไม่สามารถแอบอ้างได้\n• MFA เพิ่มชั้นการยืนยันตัวตน ทำให้แม้ขโมยรหัสผ่านไปก็ใช้ไม่ได้\n• กลไกอื่นที่ช่วยเสริม: Dynamic ARP Inspection (DAI) กัน ARP spoofing, DHCP snooping กัน rogue DHCP, IPsec/TLS ที่ยืนยันตัวตนปลายทางก่อนเข้ารหัส\n\n✅ ทำไม B ถูก: authentication คือการพิสูจน์ตัวตนคู่สนทนา ซึ่งเป็นกลไกโดยตรงที่ทำให้ผู้โจมตีแอบอ้างเป็นอีกฝ่ายไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. authorization = กำหนดว่าผู้ที่ยืนยันตัวตนแล้ว "ทำอะไรได้บ้าง" — เกิดขึ้นหลังการยืนยันตัวตน จึงไม่ได้กัน MITM ตั้งแต่ต้น\nC. anti-replay ป้องกันการดักจับแพ็กเก็ตแล้วนำมาส่งซ้ำ (replay attack) ซึ่งเป็นการโจมตีคนละแบบ แม้จะพบร่วมกันใน IPsec ก็ตาม\nD. accounting = การบันทึกว่าใครทำอะไรเมื่อไหร่ เป็นการตรวจสอบย้อนหลัง ไม่ได้ป้องกันการโจมตีขณะเกิดเหตุ\n\n📗 จำไว้สอบ: AAA = Authentication (คุณเป็นใคร) → Authorization (ทำอะไรได้) → Accounting (ทำอะไรไปบ้าง) • กัน MITM ในสวิตช์ = DAI + DHCP snooping + port security',
  },
]
