import type { Question } from '../types'

import q2 from '../assets/example/question_2.png'
import q3 from '../assets/example/question_3.png'
import q4 from '../assets/example/question_4.png'
import q8 from '../assets/example/question_8.png'
import q10 from '../assets/example/question_10.png'
import q11 from '../assets/example/question_11.png'
import q15 from '../assets/example/question_15.png'
import q25 from '../assets/example/question_25.png'
import q32 from '../assets/example/question_32.png'
import q34 from '../assets/example/question_34.png'
import q38 from '../assets/example/question_38.png'
import q41 from '../assets/example/question_41.png'
import q42 from '../assets/example/question_42.png'
import q43 from '../assets/example/question_43.png'
import q44 from '../assets/example/question_44.png'
import q45 from '../assets/example/question_45.png'
import q48 from '../assets/example/question_48.png'
import q50 from '../assets/example/question_50.png'
import q52 from '../assets/example/question_52.png'
import q53 from '../assets/example/question_53.png'
import q54 from '../assets/example/question_54.png'
import q62 from '../assets/example/question_62.png'
import q65 from '../assets/example/question_65.png'
import q68 from '../assets/example/question_68.png'
import q71 from '../assets/example/question_71.png'
import q73 from '../assets/example/question_73.png'
import q74 from '../assets/example/question_74.png'
import q79 from '../assets/example/question_79.png'
import q80 from '../assets/example/question_80.png'
import q82 from '../assets/example/question_82.png'
import q85 from '../assets/example/question_85.png'
import q91 from '../assets/example/question_91.png'
import q94 from '../assets/example/question_94.png'
import q96 from '../assets/example/question_96.png'
import q99 from '../assets/example/question_99.png'
import q109 from '../assets/example/question_109.png'
import q112 from '../assets/example/question_112.png'
import q118 from '../assets/example/question_118.png'
import q119 from '../assets/example/question_119.png'
import q125 from '../assets/example/question_125.png'
import q127 from '../assets/example/question_127.png'
import q132 from '../assets/example/question_132.png'
import q133 from '../assets/example/question_133.png'
import q134 from '../assets/example/question_134.png'
import q137 from '../assets/example/question_137.png'
import q139 from '../assets/example/question_139.png'
import q141 from '../assets/example/question_141.png'
import q144 from '../assets/example/question_144.png'
import q146 from '../assets/example/question_146.png'
import q156 from '../assets/example/question_156.png'
import q159 from '../assets/example/question_159.png'
import q162 from '../assets/example/question_162.png'
import q182 from '../assets/example/question_182.png'
import q189 from '../assets/example/question_189.png'
import q191 from '../assets/example/question_191.png'
import q195 from '../assets/example/question_195.png'
import q196 from '../assets/example/question_196.png'
import q208 from '../assets/example/question_208.png'
import q212 from '../assets/example/question_212.png'
import q215 from '../assets/example/question_215.png'
import q218 from '../assets/example/question_218.png'
import q221 from '../assets/example/question_221.png'
import q222 from '../assets/example/question_222.png'
import q232 from '../assets/example/question_232.png'
import q234 from '../assets/example/question_234.png'
import q236 from '../assets/example/question_236.png'
import q244 from '../assets/example/question_244.png'
import q245 from '../assets/example/question_245.png'
import q247 from '../assets/example/question_247.png'
import q248 from '../assets/example/question_248.png'
import q253 from '../assets/example/question_253.png'
import q256 from '../assets/example/question_256.png'
import q258 from '../assets/example/question_258.png'
import q259 from '../assets/example/question_259.png'
import q260 from '../assets/example/question_260.png'
import q264 from '../assets/example/question_264.png'
import q267 from '../assets/example/question_267.png'
import q272 from '../assets/example/question_272.png'
import q280 from '../assets/example/question_280.png'
import q282 from '../assets/example/question_282.png'
import q289 from '../assets/example/question_289.png'
import q290 from '../assets/example/question_290.png'
import q291 from '../assets/example/question_291.png'
import q292 from '../assets/example/question_292.png'
import q295 from '../assets/example/question_295.png'
import q297 from '../assets/example/question_297.png'
import q299 from '../assets/example/question_299.png'
import q302 from '../assets/example/question_302.png'
import q306 from '../assets/example/question_306.png'
import q307 from '../assets/example/question_307.png'
import q315 from '../assets/example/question_315.png'
import q316 from '../assets/example/question_316.png'
import q321 from '../assets/example/question_321.png'
import q324 from '../assets/example/question_324.png'
import q329 from '../assets/example/question_329.png'
import q336 from '../assets/example/question_336.png'
import q338 from '../assets/example/question_338.png'
import q340 from '../assets/example/question_340.png'
import q342 from '../assets/example/question_342.png'
import q345 from '../assets/example/question_345.png'
import q348 from '../assets/example/question_348.png'
import q351 from '../assets/example/question_351.png'
import q357 from '../assets/example/question_357.png'
import q361 from '../assets/example/question_361.png'
import q363 from '../assets/example/question_363.png'
import q365 from '../assets/example/question_365.png'
import q367 from '../assets/example/question_367.png'
import q368 from '../assets/example/question_368.png'
import q369 from '../assets/example/question_369.png'
import q372 from '../assets/example/question_372.png'
import q374 from '../assets/example/question_374.png'
import q378 from '../assets/example/question_378.png'
import q379 from '../assets/example/question_379.png'
import q380 from '../assets/example/question_380.png'
import q381 from '../assets/example/question_381.png'
import q382 from '../assets/example/question_382.png'
import q387 from '../assets/example/question_387.png'
import q388 from '../assets/example/question_388.png'
import q390 from '../assets/example/question_390.png'
import q393 from '../assets/example/question_393.png'
import q397 from '../assets/example/question_397.png'
import q399 from '../assets/example/question_399.png'
import q406 from '../assets/example/question_406.png'
import q407 from '../assets/example/question_407.png'
import q411 from '../assets/example/question_411.png'
import q413 from '../assets/example/question_413.png'
import q414 from '../assets/example/question_414.png'
import q418 from '../assets/example/question_418.png'
import q420 from '../assets/example/question_420.png'
import q427 from '../assets/example/question_427.png'
import q429 from '../assets/example/question_429.png'
import q430 from '../assets/example/question_430.png'
import q431 from '../assets/example/question_431.png'
import q432 from '../assets/example/question_432.png'
import q435 from '../assets/example/question_435.png'
import q438 from '../assets/example/question_438.png'
import q440 from '../assets/example/question_440.png'
import q448 from '../assets/example/question_448.png'
import q449 from '../assets/example/question_449.png'
import q450 from '../assets/example/question_450.png'
import q451 from '../assets/example/question_451.png'
import q452 from '../assets/example/question_452.png'
import q453 from '../assets/example/question_453.png'
import q454 from '../assets/example/question_454.png'
import q455 from '../assets/example/question_455.png'
import q456 from '../assets/example/question_456.png'
import q458 from '../assets/example/question_458.png'
import q459 from '../assets/example/question_459.png'
import q464 from '../assets/example/question_464.png'
import q467 from '../assets/example/question_467.png'
import q468 from '../assets/example/question_468.png'
import q471 from '../assets/example/question_471.png'
import q473 from '../assets/example/question_473.png'
import q475 from '../assets/example/question_475.png'
import q477 from '../assets/example/question_477.png'
import q481 from '../assets/example/question_481.png'
import q483 from '../assets/example/question_483.png'
import q485 from '../assets/example/question_485.png'
import q486 from '../assets/example/question_486.png'
import q487 from '../assets/example/question_487.png'
import q490 from '../assets/example/question_490.png'
import q491 from '../assets/example/question_491.png'
import q492 from '../assets/example/question_492.png'
import q496 from '../assets/example/question_496.png'
import q499 from '../assets/example/question_499.png'
import q500 from '../assets/example/question_500.png'

export const QUESTIONS: Question[] = [
  {
    id: 1,
    kind: 'single',
    prompt:
      'Which command entered on a switch configured with Rapid PVST+ listens and learns for a specific time period?',
    options: [
      { key: 'A', text: 'switch(config)#spanning-tree vlan 1 max-age 6' },
      { key: 'B', text: 'switch(config)#spanning-tree vlan 1 hello-time 10' },
      { key: 'C', text: 'switch(config)#spanning-tree vlan 1 priority 4096' },
      { key: 'D', text: 'switch(config)#spanning-tree vlan 1 forward-time 20' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — STP timer ทั้ง 3 ตัว (ค่าเริ่มต้นต้องจำ):\n• hello-time = 2 วิ → ความถี่ในการส่ง BPDU\n• forward-time = 15 วิ → เวลาที่ค้างในแต่ละ state (listening 15 + learning 15 = 30 วิ)\n• max-age = 20 วิ → เก็บ BPDU ไว้นานแค่ไหนก่อนถือว่าหมดอายุ\n\n🔄 STP port states: Blocking → Listening → Learning → Forwarding\n(listening = ฟัง BPDU ไม่เรียน MAC | learning = เริ่มเรียน MAC แต่ยังไม่ forward)\n\n✅ ทำไม D ถูก: มีเพียง forward-time ที่ควบคุม "ระยะเวลาที่พอร์ตอยู่ใน listening และ learning" ก่อนเข้าสู่ forwarding ตรงตามโจทย์ (ตั้งได้ 4–30 วินาที)\n\n❌ ทำไมข้ออื่นผิด:\nA. max-age = อายุของ BPDU ก่อนถูกทิ้ง ไม่เกี่ยวกับ state ของพอร์ต\nB. hello-time = จังหวะส่ง BPDU ไม่ได้กำหนดเวลาค้างใน state\nC. priority = ใช้เลือก root bridge ไม่เกี่ยวกับเวลา\n\n📗 จำไว้สอบ: อยากข้าม listening/learning ไปเลย → ใช้ PortFast (ไม่ใช่ลด forward-time)',
  },
  {
    id: 2,
    kind: 'single',
    image: q2,
    prompt:
      'Refer to the exhibit. All routers in the network are configured; R2 must be the DR. After the engineer connected the devices, R1 was elected as the DR. Which command sequence must be configured on R2 to be elected as the DR in the network?',
    options: [
      { key: 'A', text: 'R2(config)#interface gi0/0\nR2(config-if)#ip ospf priority 1' },
      { key: 'B', text: 'R2(config)#interface gi0/0\nR2(config-if)#ip ospf priority 100' },
      { key: 'C', text: 'R2(config)#router ospf 1\nR2(config-router)#router-id 10.100.100.100' },
      { key: 'D', text: 'R2(config)#router ospf 1\nR2(config-router)#router-id 192.168.2.7' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก DR/BDR ใน OSPF (บนเครือข่าย broadcast):\n1️⃣ OSPF priority "สูงสุด" ชนะ (ค่าเริ่มต้น = 1, ช่วง 0–255)\n2️⃣ ถ้า priority เท่ากัน → Router ID "สูงสุด" ชนะ\n⚠️ priority = 0 → ไม่เข้าร่วมการเลือกเลย (เป็น DROTHER ตลอด)\n\n✅ ทำไม B ถูก: ตั้ง "ip ospf priority 100" บนอินเทอร์เฟซของ R2 ที่ติดกับเซกเมนต์นั้น → 100 สูงกว่าค่าเริ่มต้น 1 ของ R1 → R2 ชนะการเลือกทันที (คำสั่งนี้เป็นระดับ interface ไม่ใช่ระดับ process)\n\n❌ ทำไมข้ออื่นผิด:\nA. priority 1 = ค่าเริ่มต้น เท่ากับ R1 → ตัดสินด้วย Router ID ต่อ ซึ่งไม่การันตีว่า R2 ชนะ\nC, D. การเปลี่ยน router-id ไม่มีผลทันที ต้อง reload หรือ "clear ip ospf process" ก่อน และถ้า priority ต่างกัน router-id ก็ไม่ถูกนำมาใช้ตัดสินอยู่ดี\n\n📗 จำไว้สอบ: DR/BDR ไม่มีการ "ยึดคืน" (non-preemptive) — ถ้า DR ถูกเลือกไปแล้ว การตั้ง priority สูงทีหลังจะยังไม่ยึดตำแหน่ง จนกว่าจะ clear ip ospf process',
  },
  {
    id: 3,
    kind: 'single',
    image: q3,
    prompt:
      'Refer to the exhibit. Routers R1 and R2 have been configured with their respective LAN interfaces. The two circuits are operational and reachable across the WAN. Which command set establishes failover redundancy if the primary circuit goes down?',
    options: [
      {
        key: 'A',
        text: 'R1(config)#ip route 10.10.13.10 255.255.255.255 10.10.10.2\nR2(config)#ip route 192.168.0.100 255.255.255.255 10.10.10.1',
      },
      {
        key: 'B',
        text: 'R1(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.6 2\nR2(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.5 2',
      },
      {
        key: 'C',
        text: 'R1(config)#ip route 10.10.13.10 255.255.255.255 10.10.10.6\nR2(config)#ip route 192.168.0.100 255.255.255.255 10.10.10.5',
      },
      {
        key: 'D',
        text: 'R1(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.6\nR2(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.5',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Floating Static Route (เส้นทางสำรองอัตโนมัติ):\nรูปแบบ: ip route <network> <mask> <next-hop> [AD]\n                                              ↑ ใส่ค่านี้คือหัวใจ!\n• static route ปกติมี AD = 1 (ต่ำ ชนะเสมอ)\n• ถ้าอยากให้เป็น "ตัวสำรอง" ต้องใส่ AD ให้สูงกว่าเส้นหลัก → route จะไม่เข้า routing table จนกว่าเส้นหลักจะล่ม\n\n✅ ทำไม B ถูก: R1/R2 มี default route ผ่านวงจรหลัก (AD 1) อยู่แล้ว การเพิ่ม default route ผ่านวงจรสำรอง (10.10.10.5/.6) พร้อมใส่ AD = 2 ทำให้:\n• วงจรหลักปกติ → ใช้เส้น AD 1 เท่านั้น\n• วงจรหลักล่ม → เส้น AD 2 เข้ามาแทนอัตโนมัติ ✔ ตรงกับคำว่า "failover"\n\n❌ ทำไมข้ออื่นผิด:\nD. เหมือน B ทุกอย่างแต่ "ไม่ใส่ AD" → ได้ AD 1 เท่ากับเส้นหลัก → router จะ load-balance ใช้ทั้งสองเส้นพร้อมกันทันที ไม่ใช่ backup (นี่คือกับดักหลักของข้อนี้!)\nA, C. เป็น host route /32 ไปยังปลายทางเดียว ไม่ใช่ default route ที่รองรับทุกปลายทาง จึงไม่ใช่ failover ของทั้งวงจร\n\n📗 จำไว้สอบ: เห็นตัวเลขต่อท้ายคำสั่ง ip route = floating static route (นิยมใช้ 200–254)',
  },
  {
    id: 4,
    kind: 'single',
    image: q4,
    prompt:
      'Refer to the exhibit. Router R1 Fa0/0 is unable to ping router R3 Fa0/1. Which action must be taken in router R1 to help resolve the configuration issue?',
    options: [
      { key: 'A', text: 'Set the default network as 20.20.20.0' },
      { key: 'B', text: 'Set the default gateway as 20.20.20.2' },
      { key: 'C', text: 'Configure a static route with Fa0 as the egress interface to reach the 20.20.20.0 network' },
      { key: 'D', text: 'Configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0 network' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — router จะ forward ได้ก็ต่อเมื่อมี route ในตาราง หากปลายทางไม่มีใน routing table เลย → ทิ้ง packet ทันที (ping ไม่ผ่าน)\n\n✅ วิเคราะห์: จาก show ip route ของ R1 ไม่มีบรรทัดใดครอบคลุม 20.20.20.0 เลย → ต้องเพิ่ม static route\nคำสั่งที่ถูก: ip route 20.20.20.0 255.255.255.0 10.10.10.2\nโดย 10.10.10.2 = อินเทอร์เฟซของ R2 ซึ่งเป็น "next-hop" ตัวถัดไปที่รู้จักทางไป 20.20.20.0 (R2 ต่อโดยตรงกับทั้งสอง subnet)\n\n❌ ทำไมข้ออื่นผิด:\nA. "ip default-network" เป็นคำสั่งเก่าสำหรับ classful routing ไม่ใช่วิธีแก้ที่ตรงจุด\nB. "ip default-gateway" ใช้กับอุปกรณ์ที่ "ไม่ได้ทำ routing" (เช่นสวิตช์ L2 หรือ router ที่ปิด ip routing) — R1 เป็น router ที่ทำ routing อยู่ จึงไม่ใช้คำสั่งนี้\nC. ระบุ egress interface เป็น Fa0/0 ของ R1 ไม่ได้ เพราะ Fa0/0 ไม่ได้ต่อกับ 20.20.20.0 โดยตรง (ต้องข้าม R2 ก่อน) — การใช้ exit-interface ได้ผลเฉพาะบนลิงก์ point-to-point เท่านั้น\n\n📗 จำไว้สอบ: บน multi-access (Ethernet) ให้ระบุ next-hop IP เสมอ ถ้าระบุแค่ interface router จะต้อง ARP หาทุกปลายทาง (ไม่มีประสิทธิภาพและอาจใช้ไม่ได้)',
  },
  {
    id: 5,
    kind: 'single',
    prompt: 'What is a benefit of using a Cisco Wireless LAN Controller?',
    options: [
      { key: 'A', text: 'Central AP management requires more complex configurations' },
      { key: 'B', text: 'Unique SSIDs cannot use the same authentication method' },
      { key: 'C', text: 'It supports autonomous and lightweight APs' },
      { key: 'D', text: 'It eliminates the need to configure each access point individually' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Autonomous AP vs Lightweight AP:\n• Autonomous AP → ฉลาดในตัว มี config ของตัวเอง ต้องตั้งค่าทีละตัว (ไม่ scale)\n• Lightweight AP (LAP) → "โง่" ไม่มี config ในตัว ต้องพึ่ง WLC ผ่าน CAPWAP/LWAPP\n  → WLC เก็บ config ไว้ที่เดียว เสียบ AP ใหม่ปุ๊บ ได้ config อัตโนมัติ (zero-touch)\n\n✅ ทำไม D ถูก: ประโยชน์หลักของ WLC คือบริหาร AP จำนวนมากจากศูนย์กลาง — เพิ่ม SSID หรือแก้ security ครั้งเดียวบน WLC แล้ว AP ทุกตัวได้ตามทันที ไม่ต้องไล่ตั้งทีละตัว\n\n❌ ทำไมข้ออื่นผิด:\nA. ตรงข้ามกับความจริง — WLC ทำให้ config "ง่ายขึ้น" ไม่ใช่ซับซ้อนขึ้น\nB. ไม่จริง — หลาย SSID ใช้ authentication method เดียวกันได้ตามปกติ\nC. WLC ควบคุมได้เฉพาะ lightweight AP เท่านั้น ไม่ได้จัดการ autonomous AP\n\n📗 จำไว้สอบ: หน้าที่อื่นของ WLC ที่ออกสอบบ่อย — RRM (ปรับ channel/power อัตโนมัติ), roaming, rogue AP detection, ส่ง auth ไป RADIUS',
  },
  {
    id: 6,
    kind: 'single',
    prompt: 'Which network allows devices to communicate without the need to access the Internet?',
    options: [
      { key: 'A', text: '172.9.0.0' },
      { key: 'B', text: '172.28.0.0' },
      { key: 'C', text: '192.0.0.0' },
      { key: 'D', text: '209.165.201.0' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โจทย์ถามว่า network ไหนสื่อสารได้โดย "ไม่ต้องออกอินเทอร์เน็ต" = ถามหา Private IPv4 (RFC 1918)\n\n📊 ช่วง Private ที่ต้องท่องให้ขึ้นใจ:\n• 10.0.0.0 – 10.255.255.255      (10.0.0.0/8)\n• 172.16.0.0 – 172.31.255.255    (172.16.0.0/12) ⚠️ แค่ 16–31 เท่านั้น!\n• 192.168.0.0 – 192.168.255.255  (192.168.0.0/16)\n\n✅ ทำไม B ถูก: 172.28.0.0 → เลข octet ที่ 2 คือ 28 ซึ่งอยู่ในช่วง 16–31 พอดี → เป็น private address ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. 172.9.0.0 → 9 อยู่นอกช่วง 16–31 → เป็น public (กับดักคลาสสิก! อย่าเห็น 172 แล้วเหมาว่า private)\nC. 192.0.0.0 → private class C เริ่มที่ 192.168.x.x เท่านั้น 192.0.x.x เป็น public\nD. 209.165.201.0 → public address ที่ Cisco ชอบใช้ในตัวอย่างเอกสาร\n\n📗 จำไว้สอบ: private address ออกอินเทอร์เน็ตต้องผ่าน NAT/PAT เสมอ',
  },
  {
    id: 7,
    kind: 'multi',
    prompt:
      'When configuring a WLAN with WPA2 PSK in the Cisco Wireless LAN Controller GUI, which two formats are available to select? (Choose two)',
    options: [
      { key: 'A', text: 'ASCII' },
      { key: 'B', text: 'base64' },
      { key: 'C', text: 'binary' },
      { key: 'D', text: 'decimal' },
      { key: 'E', text: 'hexadecimal' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — ตอนตั้ง WPA2-PSK บน WLC หน้า GUI จะให้เลือก "PSK Format" ได้ 2 แบบเท่านั้น:\n• ASCII → 8–63 ตัวอักษร (เช่น MyWiFiPass123) ← ที่คนทั่วไปใช้\n• HEX → 64 ตัวอักษรฐานสิบหกพอดี (= key material ขนาด 256 บิต)\n\n✅ ทำไม A, E ถูก: เป็นสองรูปแบบเดียวที่ WLC รองรับสำหรับใส่ pre-shared key\n\n❌ ทำไมข้ออื่นผิด:\nB. base64 → ใช้เข้ารหัสข้อมูลทั่วไป ไม่ใช่ตัวเลือกในหน้า WLAN security\nC. binary → ไม่มีให้เลือกใน GUI\nD. decimal → ไม่มีให้เลือกเช่นกัน\n\n📗 จำไว้สอบ: ASCII ขั้นต่ำ = 8 ตัว (ถ้าใส่ 7 ตัว WLC จะปฏิเสธ) | HEX ต้อง 64 ตัวเป๊ะ ๆ',
  },
  {
    id: 8,
    kind: 'drag',
    image: q8,
    prompt:
      'Drag and drop the descriptions from the left onto the correct configuration-management technologies on the right (Ansible / Chef / Puppet).',
    categories: [
      { name: 'Ansible', items: ['uses YAML for fundamental configuration elements', 'uses SSH for remote device communication'] },
      { name: 'Chef', items: ['uses TCP port 10002 for configuration push jobs', 'uses Ruby for fundamental configuration elements'] },
      { name: 'Puppet', items: ['uses TCP 8140 for communication', 'fundamental configuration elements are stored in a manifest'] },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ 3 เครื่องมือ Configuration Management (ออกสอบบ่อยมาก):\n\n⭐ Ansible\n   • เขียนด้วย Python • ใช้ SSH (TCP 22) สื่อสาร\n   • Agentless — ไม่ต้องติดตั้งอะไรบนอุปกรณ์ปลายทาง\n   • ไฟล์คอนฟิก = Playbook เขียนด้วย YAML\n\n🔹 Puppet\n   • สร้างจาก Ruby • ใช้ TCP 8140\n   • ต้องติดตั้ง Agent บน node\n   • ไฟล์คอนฟิก = Manifest (.pp)\n\n🔹 Chef\n   • สร้างจาก Ruby • ใช้ TCP 10002 (Chef Push Jobs)\n   • ต้องติดตั้ง Agent บน node\n   • ไฟล์คอนฟิก = Cookbook / Recipe\n\n📗 จำไว้สอบ: เห็น "YAML + SSH + ไม่ต้องลง agent" → Ansible | เห็น "manifest / 8140" → Puppet | เห็น "cookbook, recipe / 10002" → Chef\n(ทั้ง Chef และ Puppet เป็น Ruby เหมือนกัน — ต้องแยกด้วยชื่อไฟล์กับพอร์ต)',
  },
  {
    id: 9,
    kind: 'single',
    prompt:
      'An organization has decided to start using cloud-provided services. Which cloud service allows the organization to install its own operating system on a virtual machine?',
    options: [
      { key: 'A', text: 'platform-as-a-service' },
      { key: 'B', text: 'software-as-a-service' },
      { key: 'C', text: 'network-as-a-service' },
      { key: 'D', text: 'infrastructure-as-a-service' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โมเดลบริการคลาวด์ "ใครดูแลอะไร" (ยิ่งลงไปยิ่งดูแลเองเยอะ):\n\n• SaaS → ใช้แอปสำเร็จรูปผ่านเว็บ (Gmail, Office365)\n  ผู้ใช้ดูแล: แค่ข้อมูลของตัวเอง\n\n• PaaS → ได้แพลตฟอร์มไว้ deploy โค้ด (Heroku, App Engine)\n  ผู้ใช้ดูแล: แอป + ข้อมูล | provider ดูแล OS ให้แล้ว\n\n• ⭐ IaaS → ได้ VM เปล่า ๆ (AWS EC2, Azure VM)\n  ผู้ใช้ดูแล: OS + runtime + แอป + ข้อมูล ← ติดตั้ง OS เองได้!\n\n✅ ทำไม D ถูก: มีเพียง IaaS ที่ให้ผู้ใช้ควบคุมถึงระดับ VM และ "ติดตั้ง OS ของตัวเอง" ได้ตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. PaaS → provider จัดการ OS ให้เรียบร้อยแล้ว ผู้ใช้แตะ OS ไม่ได้\nB. SaaS → ใช้แค่แอป ไม่เห็น OS เลย\nC. NaaS → เป็นบริการด้านเครือข่าย ไม่เกี่ยวกับการติดตั้ง OS\n\n📗 จำไว้สอบ: "ติดตั้ง OS เอง / ควบคุม VM" = IaaS เสมอ',
  },
  {
    id: 10,
    kind: 'drag',
    image: q10,
    prompt: 'Drag and drop the descriptions of file-transfer protocols from the left onto the correct protocols on the right (FTP / TFTP).',
    categories: [
      { name: 'FTP', items: ['provides reliability when loading an IOS image upon boot up', 'uses ports 20 and 21', 'uses TCP'] },
      { name: 'TFTP', items: ['does not require user authentication', 'uses port 69', 'uses UDP'] },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ FTP กับ TFTP (ออกสอบบ่อย):\n\n🔵 FTP (File Transfer Protocol)\n   • ใช้ TCP → พอร์ต 20 (data) และ 21 (control)\n   • ⭐ TCP มี ACK/retransmit → "น่าเชื่อถือ" (reliable) เหมาะกับไฟล์ใหญ่ เช่นโหลด IOS image ตอนบูต\n   • ต้อง authenticate ด้วย username/password\n   • มีคำสั่งครบ: list, delete, rename directory\n\n🟢 TFTP (Trivial FTP)\n   • ใช้ UDP → พอร์ต 69\n   • ⭐ "ไม่ต้อง" authenticate เลย (ไม่มี username/password)\n   • เรียบง่ายมาก โค้ดเล็ก → ฝังใน ROM ของอุปกรณ์ได้\n   • นิยมใช้ backup/restore configuration ในเครือข่ายภายในที่เชื่อถือได้\n\n⚠️ ข้อควรระวัง: TFTP ไม่มีการยืนยันตัวตน → ห้ามใช้ผ่านเครือข่ายสาธารณะเด็ดขาด\n\n📗 จำไว้สอบ: FTP = TCP 20/21 + reliable + ต้อง login | TFTP = UDP 69 + ไม่ต้อง login',
  },
  {
    id: 11,
    kind: 'single',
    image: q11,
    prompt:
      'Refer to the exhibit (Router(config-if)#ip address 192.168.16.143 255.255.255.240 → "Bad mask /28 for address 192.168.16.143"). Which statement explains the configuration error message that is received?',
    options: [
      { key: 'A', text: 'It is a broadcast IP address' },
      { key: 'B', text: 'The router does not support the mask' },
      { key: 'C', text: 'It belongs to a private IP address range' },
      { key: 'D', text: 'It is a network IP address' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — IOS ห้ามตั้ง network address หรือ broadcast address เป็น IP ของอินเทอร์เฟซ (ต้องเป็น "usable host" เท่านั้น)\n\n🧮 คำนวณ: mask 255.255.255.240 = /28\n• Block size = 256 − 240 = 16\n• Subnet ไล่เป็นช่วงละ 16: .0, .16, .32, … .128, .144, …\n• 192.168.16.143 ตกอยู่ในซับเน็ต 192.168.16.128/28\n  → network = .128 | usable = .129–.142 | ⭐ broadcast = .143\n\n✅ ทำไม A ถูก: .143 คือ broadcast address ของซับเน็ตนั้นพอดี IOS จึงขึ้น "Bad mask" และปฏิเสธ\n\n❌ ทำไมข้ออื่นผิด:\nB. router รองรับ /28 ได้ปกติอยู่แล้ว ไม่ใช่ปัญหาที่ตัวมาสก์\nC. 192.168.16.x เป็น private จริง แต่ private ไม่ได้ห้ามตั้งบนอินเทอร์เฟซ — ไม่ใช่สาเหตุ\nD. network address ของซับเน็ตนี้คือ .128 ไม่ใช่ .143\n\n📗 จำไว้สอบ: หา block size จาก 256 − เลข octet สุดท้ายของ mask แล้วไล่ช่วง จะรู้ทันทีว่าเลขนั้นเป็น network / host / broadcast',
  },
  {
    id: 12,
    kind: 'single',
    prompt:
      'Which attribute does a router use to select the best path when two or more different routes to the same destination exist from two different routing protocols?',
    options: [
      { key: 'A', text: 'dual algorithm' },
      { key: 'B', text: 'metric' },
      { key: 'C', text: 'administrative distance' },
      { key: 'D', text: 'hop count' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ลำดับการตัดสินใจของ router (ท่องให้ขึ้นใจ):\n1️⃣ Longest Prefix Match (prefix ยาวสุดชนะ) ← ก่อนเสมอ\n2️⃣ Administrative Distance ต่ำสุด ← ใช้เมื่อ prefix เท่ากันแต่มาจาก "คนละโปรโตคอล"\n3️⃣ Metric ต่ำสุด ← ใช้เมื่อมาจากโปรโตคอลเดียวกัน\n\n📊 ตาราง AD:\n   Connected 0 • Static 1 • eBGP 20 • EIGRP 90\n   OSPF 110 • IS-IS 115 • RIP 120 • EIGRP-ext 170 • iBGP 200\n\n✅ ทำไม C ถูก: โจทย์ระบุชัดว่า "จากคนละ routing protocol" → ต้องใช้ AD ตัดสิน เพราะ metric ของแต่ละโปรโตคอลคนละหน่วย (OSPF=cost, RIP=hop, EIGRP=bandwidth+delay) เอามาเทียบกันตรง ๆ ไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nB. metric ใช้เทียบได้เฉพาะ "ภายในโปรโตคอลเดียวกัน" เท่านั้น\nD. hop count เป็น metric เฉพาะของ RIP ไม่ใช่เกณฑ์ข้ามโปรโตคอล\nA. DUAL เป็นชื่ออัลกอริทึมของ EIGRP ไม่ใช่เกณฑ์เลือกเส้นทางข้ามโปรโตคอล\n\n📗 จำไว้สอบ: AD = "ความน่าเชื่อถือของแหล่งข่าว" ยิ่งต่ำยิ่งเชื่อถือได้',
  },
  {
    id: 13,
    kind: 'single',
    prompt: 'Which command prevents passwords from being stored in the configuration as plain text on a router or switch?',
    options: [
      { key: 'A', text: 'enable secret' },
      { key: 'B', text: 'service password-encryption' },
      { key: 'C', text: 'username Cisco password encrypt' },
      { key: 'D', text: 'enable password' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — รหัสผ่านบน IOS มีหลาย "type":\n• Type 0 = plain text (เห็นชัด ๆ ใน config) ← อันตราย\n• Type 7 = เข้ารหัสแบบอ่อน (ถอดกลับได้!) ← มาจาก service password-encryption\n• Type 5 = MD5 hash (ถอดกลับไม่ได้) ← มาจาก enable secret\n• Type 8/9 = SHA-256/scrypt (แข็งแรงที่สุด) ← username … algorithm-type sha256\n\n✅ ทำไม B ถูก: "service password-encryption" เป็นคำสั่ง global ที่กวาดเข้ารหัสรหัสผ่าน plain-text "ทั้งหมด" ใน running-config อัตโนมัติ (line console/vty password, username password, enable password) ตรงกับโจทย์ที่ถามว่า "ป้องกันไม่ให้เก็บเป็น plain text"\n\n❌ ทำไมข้ออื่นผิด:\nA. enable secret เข้ารหัส (hash) เฉพาะ enable password ของตัวมันเองเท่านั้น ไม่ครอบคลุมรหัสผ่านอื่น ๆ ใน config\nD. enable password เก็บเป็น plain text ถ้าไม่เปิด service password-encryption → เป็นตัวปัญหา ไม่ใช่ตัวแก้\nC. ไม่ใช่คำสั่งที่มีอยู่จริงใน IOS\n\n📗 จำไว้สอบ: Type 7 ถอดรหัสกลับได้ภายในไม่กี่วินาที! ของจริงควรใช้ enable secret / username secret แทน — service password-encryption แค่กัน "คนแอบมอง" เท่านั้น',
  },
  {
    id: 14,
    kind: 'multi',
    prompt: 'A frame that enters a switch fails the Frame Check Sequence. Which two interface counters are incremented? (Choose two)',
    options: [
      { key: 'A', text: 'runts' },
      { key: 'B', text: 'giants' },
      { key: 'C', text: 'frame' },
      { key: 'D', text: 'CRC' },
      { key: 'E', text: 'input errors' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — FCS (Frame Check Sequence) คือ 4 ไบต์ท้ายเฟรม Ethernet ใช้ตรวจว่าข้อมูลเสียหายระหว่างทางหรือไม่ ถ้าคำนวณแล้วไม่ตรง = เฟรมเสีย → นับเป็น CRC error\n\n📊 ตัวนับ interface ที่ต้องแยกให้ออก:\n• CRC → FCS ไม่ผ่าน (ข้อมูลเพี้ยน)\n• runts → เฟรมสั้นกว่า 64 ไบต์\n• giants → เฟรมยาวเกิน 1518 ไบต์\n• frame → เฟรมมีจำนวนบิตไม่ลงตัว (alignment error)\n• ⭐ input errors → ตัวรวม! = runts + giants + no buffer + CRC + frame + overrun + ignored\n\n✅ ทำไม D, E ถูก: เฟรมที่ FCS ไม่ผ่าน จะเพิ่มตัวนับ CRC (D) โดยตรง และเพราะ input errors เป็น "ผลรวม" ของ error ขาเข้าทุกชนิด มันจึงเพิ่มตามไปด้วย (E) → เพิ่มพร้อมกัน 2 ตัว\n\n❌ ทำไมข้ออื่นผิด:\nA. runts เพิ่มเมื่อเฟรม "สั้นเกินไป" ซึ่งเป็นคนละสาเหตุกับ FCS ผิด\nB. giants เพิ่มเมื่อเฟรม "ยาวเกินไป"\nC. frame เพิ่มเมื่อเกิด alignment error (บิตไม่ครบไบต์) ไม่ใช่กรณีทั่วไปของ FCS ผิด\n\n📗 จำไว้สอบ: เจอ CRC error เยอะ → สงสัย duplex mismatch, สายเสีย/ยาวเกิน, หรือสัญญาณรบกวน',
  },
  {
    id: 15,
    kind: 'drag',
    image: q15,
    prompt: 'Drag and drop the WLAN components from the left onto the correct descriptions on the right.',
    categories: [
      { name: 'wireless LAN controller', items: ['device that manages access points'] },
      { name: 'access point', items: ['device that provides Wi-Fi devices with a connection to a wired network'] },
      { name: 'service port', items: ['used for out of band management of a WLC'] },
      { name: 'virtual interface', items: ['used to support mobility management of the WLC'] },
      { name: 'dynamic interface', items: ['applied to the WLAN for wireless client communication'] },
    ],
    explanation:
      '📘 แนวคิด — องค์ประกอบของระบบ WLAN แบบ controller-based:\n\n🔹 Wireless LAN Controller (WLC)\n   → สมองกลาง บริหาร AP ทุกตัวจากที่เดียว (config, RF, security, roaming)\n\n🔹 Access Point (AP)\n   → ตัวกลางที่แปลงสัญญาณไร้สายให้เข้าถึงเครือข่ายมีสายได้\n\n📡 อินเทอร์เฟซของ WLC ที่ต้องแยกให้ออก (ออกสอบบ่อย!):\n• Service port → พอร์ตจัดการ WLC แบบ out-of-band (แยกจากเครือข่ายข้อมูล) รองรับ Telnet/SSH\n• Management interface → ใช้คุยกับ AP (CAPWAP) และเข้า GUI แบบ in-band\n• Virtual interface → IP ปลอม (เช่น 1.1.1.1) ใช้รองรับ mobility, DHCP relay, web auth\n• Dynamic interface → ผูกกับ VLAN ของแต่ละ WLAN สำหรับรับส่งทราฟฟิกของ client จริง ๆ\n• Distribution system port → พอร์ตข้อมูลหลักที่ต่อเข้าสวิตช์\n\n📗 จำไว้สอบ: "out-of-band management" = service port | "ทราฟฟิก client" = dynamic interface | "mobility" = virtual interface',
  },
  {
    id: 16,
    kind: 'single',
    prompt: 'Which command enables a router to become a DHCP client?',
    options: [
      { key: 'A', text: 'ip address dhcp' },
      { key: 'B', text: 'ip helper-address' },
      { key: 'C', text: 'ip dhcp pool' },
      { key: 'D', text: 'ip dhcp client' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — router เกี่ยวข้องกับ DHCP ได้ 3 บทบาท (แยกคำสั่งให้ออก!):\n\n1️⃣ เป็น DHCP Client (ขอ IP เอง)\n   → interface … → ip address dhcp ⭐\n\n2️⃣ เป็น DHCP Server (แจก IP ให้คนอื่น)\n   → ip dhcp pool NAME → network / default-router / dns-server\n\n3️⃣ เป็น DHCP Relay Agent (ส่งต่อคำขอข้าม subnet)\n   → interface (ฝั่งที่ติด client) → ip helper-address <ip ของ DHCP server>\n\n✅ ทำไม A ถูก: "ip address dhcp" ตั้งบนอินเทอร์เฟซ → router จะส่ง DHCPDISCOVER ออกไปขอ IP เอง = กลายเป็น DHCP client ตรงตามโจทย์ (นิยมใช้กับพอร์ตที่ต่อ ISP)\n\n❌ ทำไมข้ออื่นผิด:\nB. ip helper-address → ทำให้เป็น relay agent (ช่วยส่งต่อให้คนอื่น) ไม่ใช่ขอ IP เอง\nC. ip dhcp pool → ทำให้เป็น DHCP server (คนแจก) ตรงข้ามกับ client\nD. "ip dhcp client" ไม่ใช่คำสั่งที่ใช้ตั้ง IP บนอินเทอร์เฟซ\n\n📗 จำไว้สอบ: helper-address ตั้งบนอินเทอร์เฟซฝั่ง "ใกล้ client" เสมอ และชี้ไปที่ IP ของ DHCP server',
  },
  {
    id: 17,
    kind: 'multi',
    prompt: 'Which two encoding methods are supported by REST APIs? (Choose two)',
    options: [
      { key: 'A', text: 'YAML' },
      { key: 'B', text: 'JSON' },
      { key: 'C', text: 'EBCDIC' },
      { key: 'D', text: 'SGML' },
      { key: 'E', text: 'XML' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — REST API รับส่งข้อมูลผ่าน HTTP(S) โดยระบุรูปแบบข้อมูลใน header (Content-Type / Accept) รูปแบบมาตรฐานที่รองรับคือ:\n• ⭐ JSON → { "hostname": "R1" } ← นิยมที่สุดในปัจจุบัน (สั้น อ่านง่าย)\n• ⭐ XML → <hostname>R1</hostname> ← ใช้เยอะใน NETCONF และระบบเก่า\n\n✅ ทำไม B, E ถูก: JSON และ XML เป็นสอง encoding มาตรฐานที่ REST API รองรับ (เช่น Cisco DNA Center, APIC ใช้ทั้งคู่)\n\n❌ ทำไมข้ออื่นผิด:\nA. YAML → ใช้เขียนไฟล์คอนฟิก (Ansible playbook) อ่านง่ายสำหรับคน แต่ไม่ใช่รูปแบบ payload มาตรฐานของ REST API\nC. EBCDIC → ชุดรหัสอักขระของเมนเฟรม IBM ไม่เกี่ยวข้องเลย\nD. SGML → ภาษาต้นตระกูลของ HTML/XML แต่ไม่ได้ใช้เป็น payload ของ REST\n\n📗 จำไว้สอบ: NETCONF = XML เท่านั้น | RESTCONF = ได้ทั้ง XML และ JSON | REST ทั่วไป = JSON/XML',
  },
  {
    id: 18,
    kind: 'single',
    prompt:
      'Two switches are connected and using Cisco Dynamic Trunking Protocol. SW1 is set to Dynamic Desirable. What is the result of this configuration?',
    options: [
      { key: 'A', text: 'The link is in a down state' },
      { key: 'B', text: 'The link is in an error disabled state' },
      { key: 'C', text: 'The link becomes an access port' },
      { key: 'D', text: 'The link becomes a trunk port' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — DTP (Dynamic Trunking Protocol) เจรจาว่าลิงก์จะเป็น trunk หรือ access\n\n📊 ตารางการจับคู่ (ต้องจำ!):\n┌──────────────┬────────┬───────────┬────────┐\n│              │ auto   │ desirable │ trunk  │\n├──────────────┼────────┼───────────┼────────┤\n│ auto         │ ACCESS │ TRUNK     │ TRUNK  │\n│ desirable    │ TRUNK  │ TRUNK     │ TRUNK  │\n│ trunk        │ TRUNK  │ TRUNK     │ TRUNK  │\n└──────────────┴────────┴───────────┴────────┘\n⚠️ มีเพียง auto + auto เท่านั้นที่ "ไม่เกิด trunk" (ต่างคนต่างรอ)\n\n✅ ทำไม D ถูก: SW1 = dynamic desirable → ส่ง DTP ออกไปชวนอย่างเชิงรุก ส่วนอีกฝั่งเป็นค่าเริ่มต้นของสวิตช์ Cisco (dynamic auto หรือ desirable) ซึ่งตอบรับได้ทั้งคู่ → ลิงก์กลายเป็น trunk สำเร็จ\n\n❌ ทำไมข้ออื่นผิด:\nA, B. DTP mismatch ไม่ได้ทำให้ลิงก์ down หรือ err-disabled (err-disable มาจาก port security / BPDU guard)\nC. จะเป็น access ก็ต่อเมื่อทั้งสองฝั่งเป็น auto เท่านั้น — แต่ฝั่งนี้เป็น desirable จึงชวนสำเร็จ\n\n📗 จำไว้สอบ: เพื่อความปลอดภัยของจริง ควรตั้ง "switchport mode trunk" + "switchport nonegotiate" (ปิด DTP) เพื่อกัน VLAN hopping',
  },
  {
    id: 19,
    kind: 'multi',
    prompt: 'When configuring IPv6 on an interface, which two IPv6 multicast groups are joined? (Choose two)',
    options: [
      { key: 'A', text: '2000::' },
      { key: 'B', text: '2002::5' },
      { key: 'C', text: 'FC00::' },
      { key: 'D', text: 'FF02::1' },
      { key: 'E', text: 'FF02::2' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — IPv6 ไม่มี broadcast! ใช้ multicast แทนทั้งหมด (ขึ้นต้นด้วย FF)\n\n📡 Multicast group สำคัญที่ต้องจำ:\n• ⭐ FF02::1 → all-nodes (ทุกอุปกรณ์ IPv6 join อันนี้เสมอ = เทียบเท่า broadcast เดิม)\n• ⭐ FF02::2 → all-routers (เฉพาะ router join)\n• FF02::5 / FF02::6 → OSPFv3 (all-SPF / all-DR routers)\n• FF02::9 → RIPng | FF02::A → EIGRPv6\n• FF02::1:FFxx:xxxx → solicited-node (ใช้แทน ARP ผ่าน NDP)\n\n✅ ทำไม D, E ถูก: เมื่อเปิด IPv6 บนอินเทอร์เฟซของ "router" มันจะ join ทั้ง FF02::1 (ในฐานะ node) และ FF02::2 (ในฐานะ router) โดยอัตโนมัติ\n\n❌ ทำไมข้ออื่นผิด:\nA. 2000:: → เป็น prefix ของ Global Unicast (ไม่ใช่ multicast)\nB. 2002::5 → อยู่ในช่วง 6to4 transition (ยังเป็น unicast)\nC. FC00:: → เป็น Unique Local Address (unicast ภายในองค์กร)\n\n📗 จำไว้สอบ: เห็น "FF" ขึ้นต้น = multicast เสมอ | ส่วน 2000::/3 = global unicast, FC00::/7 = ULA, FE80::/10 = link-local',
  },
  {
    id: 20,
    kind: 'single',
    prompt: 'Which MAC address is recognized as a VRRP virtual address?',
    options: [
      { key: 'A', text: '0000.5E00.010a' },
      { key: 'B', text: '0005.3711.0975' },
      { key: 'C', text: '0000.0C07.AC99' },
      { key: 'D', text: '0007.C070.AB01' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — FHRP แต่ละตัวมี "รูปแบบ virtual MAC" เฉพาะตัว (ออกสอบบ่อยมาก!):\n\n• ⭐ VRRP → 0000.5E00.01XX   (XX = VRRP group ในเลขฐาน 16)\n• HSRP v1 → 0000.0C07.ACXX   (XX = HSRP group)\n• HSRP v2 → 0000.0C9F.FXXX\n• GLBP → 0007.B400.XXYY\n\n✅ ทำไม A ถูก: 0000.5E00.010a → ขึ้นต้นด้วย 0000.5E00.01 ตรงรูปแบบ VRRP พอดี และ 0a (ฐาน 16) = group 10\n\n❌ ทำไมข้ออื่นผิด:\nC. 0000.0C07.AC99 → ขึ้นต้น 0000.0C07.AC = รูปแบบของ HSRP v1 ไม่ใช่ VRRP (นี่คือตัวลวงหลัก!)\nB. 0005.3711.0975 → เป็น MAC ธรรมดาของการ์ดเครือข่าย ไม่ตรงรูปแบบ FHRP ใด\nD. 0007.C070.AB01 → ไม่ตรงรูปแบบมาตรฐานของ FHRP ตัวใดเลย\n\n📗 จำไว้สอบ: จำแค่ 2 ตัวหลักก็พอ — VRRP ขึ้นด้วย "5E00.01" | HSRP ขึ้นด้วย "0C07.AC"',
  },
  {
    id: 21,
    kind: 'single',
    prompt: 'In which way does a spine-and-leaf architecture allow for scalability in a network when additional access ports are required?',
    options: [
      { key: 'A', text: 'A spine switch and a leaf switch can be added with redundant connections between them' },
      { key: 'B', text: 'A spine switch can be added with at least 40 GB uplinks' },
      { key: 'C', text: 'A leaf switch can be added with a single connection to a core spine switch' },
      { key: 'D', text: 'A leaf switch can be added with connections to every spine switch' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Spine-and-Leaf (สถาปัตยกรรม data center ยุคใหม่):\n\n   [Spine1]   [Spine2]      ← ชั้น spine (แกนกลาง)\n      │ ╲    ╱  │\n      │  ╲  ╱   │           ← ทุก leaf ต่อกับ "ทุก" spine\n      │   ╳     │\n   [Leaf1]   [Leaf2]        ← ชั้น leaf (ต่อ server/access port)\n\n📌 กฎเหล็ก 3 ข้อ:\n1. ทุก leaf ต้องต่อกับ spine "ทุกตัว" (full mesh ระหว่างชั้น)\n2. leaf ไม่ต่อกับ leaf\n3. spine ไม่ต่อกับ spine\n→ ผลคือทุก server ห่างกันเพียง 2 hop เสมอ (latency คาดเดาได้ = deterministic)\n\n✅ ทำไม D ถูก: อยากได้พอร์ต access เพิ่ม → เพิ่ม leaf switch ใหม่แล้วลากขึ้นไปหา spine "ทุกตัว" → ขยายได้ทันทีโดย latency/bandwidth ยังคงเท่าเดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. spine ไม่เชื่อมต่อกันเอง — การเพิ่มทั้ง spine และ leaf พร้อม "redundant link ระหว่างกัน" ผิดหลัก\nB. การเพิ่ม spine ช่วยเพิ่ม "แบนด์วิดท์/ความทนทาน" ไม่ได้เพิ่ม "พอร์ต access" ตามที่โจทย์ถาม\nC. ต่อ leaf เข้า spine แค่ตัวเดียว → ผิดกฎ full mesh และไม่มี redundancy\n\n📗 จำไว้สอบ: อยากได้พอร์ตเพิ่ม → เพิ่ม leaf | อยากได้แบนด์วิดท์/redundancy เพิ่ม → เพิ่ม spine',
  },
  {
    id: 22,
    kind: 'single',
    prompt: 'Which type of wireless encryption is used for WPA2 in preshared key mode?',
    options: [
      { key: 'A', text: 'TKIP with RC4' },
      { key: 'B', text: 'RC4' },
      { key: 'C', text: 'AES-128' },
      { key: 'D', text: 'AES-256' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — วิวัฒนาการการเข้ารหัส Wi-Fi (ท่องตามลำดับ):\n• WEP → RC4 (แตกได้ในไม่กี่นาที เลิกใช้)\n• WPA → TKIP + RC4 (ตัวแก้ขัดชั่วคราว ถูกยกเลิกแล้ว)\n• ⭐ WPA2 (802.11i) → CCMP ที่ใช้ AES-128 ← มาตรฐานบังคับ\n• WPA3 → AES (GCMP) + SAE handshake\n\n✅ ทำไม C ถูก: WPA2 กำหนดให้ใช้ CCMP ซึ่งอิง AES ขนาดคีย์ 128 บิต เป็น cipher มาตรฐาน — ใช้เหมือนกันทั้งโหมด Personal (PSK) และ Enterprise (802.1X) ต่างกันแค่ "วิธียืนยันตัวตน" ไม่ใช่ cipher\n\n❌ ทำไมข้ออื่นผิด:\nA, B. TKIP และ RC4 เป็นของ WEP/WPA รุ่นเก่า ไม่ใช่ของ WPA2 (แม้ WPA2 จะยอมให้ใช้ TKIP แบบ backward compat แต่ไม่ใช่มาตรฐานของมัน)\nD. AES-256 ไม่ใช่ค่ามาตรฐานของ WPA2 — ระดับ 192/256 บิตจะเจอใน WPA3-Enterprise\n\n📗 จำไว้สอบ: WPA2-Personal vs WPA2-Enterprise ต่างกันที่ "การ authenticate" (PSK vs 802.1X/RADIUS) แต่ "เข้ารหัสด้วย AES-CCMP เหมือนกัน"',
  },
  {
    id: 23,
    kind: 'multi',
    prompt: 'Which two actions are performed by the Weighted Random Early Detection mechanism? (Choose two)',
    options: [
      { key: 'A', text: 'It drops lower-priority packets before it drops higher-priority packets' },
      { key: 'B', text: 'It can identify different flows with a high level of granularity' },
      { key: 'C', text: 'It guarantees the delivery of high-priority packets' },
      { key: 'D', text: 'It can mitigate congestion by preventing the queue from filling up' },
      { key: 'E', text: 'It supports protocol discovery' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — WRED (Weighted Random Early Detection) = เครื่องมือ "Congestion Avoidance"\n\n⚠️ ปัญหาที่ WRED มาแก้ — Tail Drop:\nถ้าปล่อยให้คิวเต็มแล้วค่อยทิ้ง → แพ็กเก็ตของ "ทุก" TCP flow โดนทิ้งพร้อมกัน\n→ ทุก flow ลดความเร็วพร้อมกัน แล้วเร่งพร้อมกันอีก = "Global Synchronization" (ทราฟฟิกขึ้น ๆ ลง ๆ เป็นคลื่น ใช้แบนด์วิดท์ไม่เต็มที่)\n\n✅ WRED ทำงานอย่างไร:\n• เริ่มทิ้งแพ็กเก็ตแบบสุ่ม "ก่อน" คิวจะเต็ม (D) → คิวไม่มีวันเต็ม → ไม่เกิด tail drop\n• ⭐ ถ่วงน้ำหนักตาม IP Precedence/DSCP → แพ็กเก็ต priority ต่ำมีโอกาสถูกทิ้งก่อน (A)\n• TCP ที่โดนทิ้งจะลดความเร็วเอง → ระบายคิวได้ทัน\n\n✅ ทำไม A, D ถูก: ทิ้งแพ็กเก็ต priority ต่ำก่อน (A) และป้องกันไม่ให้คิวเต็ม (D) คือสองคุณสมบัติหลักของ WRED\n\n❌ ทำไมข้ออื่นผิด:\nC. WRED ไม่ได้ "การันตี" การส่งถึงของแพ็กเก็ต priority สูง — แค่ "ลดโอกาส" ถูกทิ้งเท่านั้น (การันตีต้องใช้ LLQ/priority queue)\nB. การแยกแยะ flow อย่างละเอียด → เป็นหน้าที่ของ NBAR/classification ไม่ใช่ WRED\nE. Protocol discovery → เป็นความสามารถของ NBAR\n\n📗 จำไว้สอบ: Congestion AVOIDANCE (WRED) = ทิ้งก่อนคิวเต็ม | Congestion MANAGEMENT (LLQ, CBWFQ, PQ) = จัดคิวตอนแน่นแล้ว',
  },
  {
    id: 24,
    kind: 'single',
    prompt: 'When a floating static route is configured, which action ensures that the backup route is used when the primary route fails?',
    options: [
      { key: 'A', text: 'The floating static route must have a higher administrative distance than the primary route so it is used as a backup' },
      { key: 'B', text: 'The administrative distance must be higher on the primary route so that the backup route becomes secondary' },
      { key: 'C', text: 'The floating static route must have a lower administrative distance than the primary route so it is used as a backup' },
      { key: 'D', text: 'The default-information originate command must be configured for the route to be installed into the routing table' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Floating Static Route (เส้นสำรองที่ "ลอย" รออยู่):\n\n🔑 หลักการ: router ติดตั้งเฉพาะ route ที่มี AD ต่ำสุดลง routing table\n→ ถ้าอยากให้ static route เป็นแค่ "ตัวสำรอง" ต้องตั้ง AD ให้ "สูงกว่า" เส้นหลัก\n→ มันจะ "ลอย" อยู่ (ไม่เข้าตาราง) จนกว่าเส้นหลักจะหายไป แล้วจึงเข้ามาแทนอัตโนมัติ ✔\n\n🔧 คำสั่ง: ip route <network> <mask> <next-hop> [AD]\n                                                 ↑ ใส่เลขนี้คือหัวใจ\n\n📊 ตัวอย่างจริง:\n• เส้นหลัก: เรียนจาก OSPF → AD 110\n• เส้นสำรอง: ip route 0.0.0.0 0.0.0.0 10.1.1.2 200  ← AD 200 > 110\n→ ปกติใช้ OSPF | OSPF ล่ม → static AD 200 เข้ามาแทน\n\n✅ ทำไม A ถูก: floating static ต้องมี AD "สูงกว่า" เส้นหลัก จึงจะทำหน้าที่เป็น backup ได้\n\n❌ ทำไมข้ออื่นผิด:\nC. ถ้า AD "ต่ำกว่า" เส้นหลัก → มันจะชนะและถูกใช้เป็นเส้น "หลัก" ทันที (ไม่ใช่ backup!) — กลับด้านกันเลย\nB. เราไม่ได้ไปแก้ AD ของเส้นหลัก — เราแก้ที่เส้นสำรองต่างหาก\nD. "default-information originate" ใช้ให้ OSPF โฆษณา default route ออกไป ไม่เกี่ยวกับ floating static\n\n📗 จำไว้สอบ: เห็นตัวเลขต่อท้ายคำสั่ง ip route = floating static (นิยมใช้ 200–254) — ถ้าไม่ใส่จะได้ AD 1 อัตโนมัติ',
  },
  {
    id: 25,
    kind: 'single',
    image: q25,
    prompt:
      'Refer to the exhibit (aaa new-model; aaa authentication login default local; line vty 0 4 → login authentication default; username ciscoadmin password adminadmin123; username ciscoadmin privilege 15; enable password cisco123; enable secret testing1234). Which password must an engineer use to enter enable mode?',
    options: [
      { key: 'A', text: 'adminadmin123' },
      { key: 'B', text: 'default' },
      { key: 'C', text: 'testing1234' },
      { key: 'D', text: 'cisco123' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ลำดับความสำคัญของรหัสผ่านเข้า privileged EXEC (enable mode):\n⭐ กฎทอง: ถ้ามี "enable secret" อยู่ → IOS จะใช้ตัวนี้เสมอ และ "enable password" จะถูกเพิกเฉยไปเลย\n(เหตุผล: enable secret เก็บเป็น MD5 hash แข็งแรงกว่า ส่วน enable password เป็น plain text/Type 7 ที่ถอดกลับได้)\n\n✅ ทำไม C ถูก: ใน config มีทั้งสองคำสั่ง → IOS เลือกใช้ค่าจาก enable secret คือ "testing1234"\n\n❌ ทำไมข้ออื่นผิด:\nA. เป็นรหัสผ่านของ username (ใช้ตอน login เข้า user EXEC) คนละขั้นกับการเข้า enable mode\nD. cisco123 คือค่าใน enable password — จะถูกใช้ก็ต่อเมื่อ "ไม่มี" enable secret เท่านั้น ซึ่งไม่ใช่กรณีนี้\nB. ไม่ใช่รหัสผ่านที่ปรากฏใน config\n\n📗 จำไว้สอบ: ของจริงควรลบ enable password ทิ้งไปเลย เหลือแต่ enable secret (แนวปฏิบัติด้านความปลอดภัย)',
  },
  {
    id: 26,
    kind: 'single',
    prompt: 'How do TCP and UDP differ in the way that they establish a connection between two endpoints?',
    options: [
      { key: 'A', text: 'TCP uses synchronization packets, and UDP uses acknowledgment packets' },
      { key: 'B', text: 'UDP uses SYN, SYN ACK and FIN bits in the frame header while TCP uses SYN, SYN ACK and ACK bits' },
      { key: 'C', text: 'UDP provides reliable message transfer and TCP is a connectionless protocol' },
      { key: 'D', text: 'TCP uses the three-way handshake and UDP does not guarantee message delivery' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — TCP vs UDP:\n\n🔹 TCP (connection-oriented, reliable)\n   • ต้องทำ Three-Way Handshake ก่อนส่ง: SYN → SYN-ACK → ACK\n   • มี ACK, sequence number, retransmission, flow control (windowing)\n   • ปิดการเชื่อมต่อด้วย FIN\n   • ใช้กับ: HTTP/HTTPS, SSH, FTP, SMTP (งานที่ข้อมูลห้ามหาย)\n\n🔹 UDP (connectionless, best-effort)\n   • ส่งได้เลย ไม่ต้อง handshake ไม่มี ACK ไม่ retransmit\n   • เร็วกว่า overhead ต่ำกว่า (header 8 ไบต์ เทียบกับ TCP 20 ไบต์)\n   • ใช้กับ: VoIP, วิดีโอสตรีม, DNS, DHCP, TFTP, SNMP, syslog\n\n✅ ทำไม D ถูก: อธิบายถูกทั้งสองฝั่ง — TCP ใช้ three-way handshake สร้างการเชื่อมต่อ ส่วน UDP ไม่การันตีการส่งถึง\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับมั่ว — UDP ไม่มี acknowledgment packet เลย (นั่นคือจุดเด่นของ TCP)\nB. สลับกันชัดเจน — SYN/SYN-ACK/ACK เป็นของ TCP ไม่ใช่ UDP (และเป็น flag ใน "segment header" ไม่ใช่ frame header)\nC. สลับกันตรงข้าม — TCP ต่างหากที่ reliable ส่วน UDP ต่างหากที่ connectionless\n\n📗 จำไว้สอบ: เสียง/วิดีโอเรียลไทม์เลือก UDP เพราะ "มาช้าดีกว่ามาผิดจังหวะ" — ส่งซ้ำแล้วเสียงกระตุกยิ่งแย่กว่าเสียงหายไปนิดหน่อย',
  },
  {
    id: 27,
    kind: 'single',
    prompt: 'Which mode allows access points to be managed by Cisco Wireless LAN Controllers?',
    options: [
      { key: 'A', text: 'autonomous' },
      { key: 'B', text: 'lightweight' },
      { key: 'C', text: 'bridge' },
      { key: 'D', text: 'mobility express' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โหมดการทำงานของ AP:\n\n• Autonomous → AP มี IOS + config ของตัวเอง ทำงานอิสระ ไม่ต้องมี WLC (ตั้งทีละตัว ไม่ scale)\n• ⭐ Lightweight (LAP) → ไม่มี config ในตัว ต้อง join กับ WLC ผ่าน CAPWAP tunnel (UDP 5246 control / 5247 data) แล้วรับ config + firmware มาจาก WLC\n• Mobility Express → เอา WLC ตัวเล็ก ๆ ไปฝังใน AP เอง (เหมาะกับออฟฟิศเล็ก)\n• Bridge/Mesh → ใช้ AP เชื่อมสองจุดแบบไร้สาย\n\n✅ ทำไม B ถูก: มีเพียง Lightweight mode ที่ออกแบบมาให้ "ถูกจัดการโดย WLC" โดยเฉพาะ — AP จะ join WLC แล้วดาวน์โหลด config มาใช้อัตโนมัติ (zero-touch)\n\n❌ ทำไมข้ออื่นผิด:\nA. Autonomous → ทำงานเองอิสระ ไม่ได้ถูก WLC จัดการ\nC. Bridge → เป็นโหมดใช้งาน (เชื่อมลิงก์ไร้สาย) ไม่ใช่โหมดที่นิยามความสัมพันธ์กับ WLC\nD. Mobility Express → WLC อยู่ในตัว AP เอง ไม่ได้ถูกจัดการโดย WLC ภายนอก\n\n📗 จำไว้สอบ: LAP ↔ WLC คุยกันด้วย CAPWAP (รุ่นเก่าคือ LWAPP) — ถ้า WLC ล่ม LAP โหมด local จะหยุดบริการ แต่โหมด FlexConnect ยังทำงานต่อได้',
  },
  {
    id: 28,
    kind: 'single',
    prompt: 'Which QoS Profile is selected in the GUI when configuring a voice over WLAN deployment?',
    options: [
      { key: 'A', text: 'Bronze' },
      { key: 'B', text: 'Platinum' },
      { key: 'C', text: 'Silver' },
      { key: 'D', text: 'Gold' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — QoS Profile บน Cisco WLC มี 4 ระดับ (ต้องจำให้แม่น เรียงจากสูงไปต่ำ):\n\n• 🥇 Platinum → VOICE ← สำคัญที่สุด latency ต่ำสุด\n• 🥈 Gold → VIDEO\n• 🥉 Silver → Best Effort (ค่าเริ่มต้นของ WLAN ทั่วไป)\n• 🎖️ Bronze → Background (ต่ำสุด เช่น การดาวน์โหลดไฟล์ทั่วไป)\n\n✅ ทำไม B ถูก: งาน Voice over WLAN ต้องการ delay/jitter ต่ำที่สุด จึงต้องเลือกโปรไฟล์ Platinum ซึ่งให้ลำดับความสำคัญสูงสุด\n\n❌ ทำไมข้ออื่นผิด:\nD. Gold → สงวนไว้สำหรับวิดีโอ (ทนต่อ delay ได้มากกว่าเสียง)\nC. Silver → Best Effort เป็นค่าเริ่มต้น ไม่ให้ priority พิเศษ → เสียงจะกระตุก\nA. Bronze → ต่ำสุด ยิ่งไม่เหมาะกับเสียง\n\n📗 จำง่าย: เรียงตามค่าโลหะ Platinum > Gold > Silver > Bronze และ "เสียงแพงสุด" จึงได้ Platinum',
  },
  {
    id: 29,
    kind: 'single',
    prompt: 'If a notice-level message is sent to a syslog server, which event has occurred?',
    options: [
      { key: 'A', text: 'A network device has restarted' },
      { key: 'B', text: 'An ARP inspection has failed' },
      { key: 'C', text: 'A routing instance has flapped' },
      { key: 'D', text: 'A debug operation is running' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ระดับ Syslog Severity 0–7 (ยิ่งเลขน้อยยิ่งรุนแรง) ท่องด้วย "Every Awesome Cisco Engineer Will Need Ice-cream Daily":\n\n   0 Emergency     → ระบบใช้การไม่ได้\n   1 Alert         → ต้องแก้ทันที\n   2 Critical      → วิกฤต (เช่น ฮาร์ดแวร์เสีย)\n   3 Error         → เกิดข้อผิดพลาด\n   4 Warning       → คำเตือน\n   ⭐5 Notification → เหตุการณ์ปกติแต่สำคัญ ควรรู้ไว้\n   6 Informational → ข้อมูลทั่วไป\n   7 Debugging     → ข้อความ debug\n\n✅ ทำไม C ถูก: routing instance flap (neighbor ขึ้น ๆ ลง ๆ / interface up-down) เป็นเหตุการณ์ "ปกติแต่มีนัยสำคัญ" ไม่ถึงขั้น error → ตรงกับ level 5 Notification\n\n❌ ทำไมข้ออื่นผิด:\nA. อุปกรณ์รีสตาร์ท = เหตุร้ายแรงกว่ามาก อยู่ระดับ Emergency/Alert/Critical (0–2)\nB. ARP inspection ล้มเหลว = เป็น error/warning ไม่ใช่ notice\nD. ข้อความจาก debug = level 7 Debugging\n\n📗 จำไว้สอบ: "logging trap X" จะเก็บ log ตั้งแต่ระดับ 0 ถึง X (ยิ่งตั้งเลขสูง ยิ่งได้ log เยอะ)',
  },
  {
    id: 30,
    kind: 'multi',
    prompt: 'What are two southbound APIs? (Choose two)',
    options: [
      { key: 'A', text: 'OpenFlow' },
      { key: 'B', text: 'NETCONF' },
      { key: 'C', text: 'Thrift' },
      { key: 'D', text: 'CORBA' },
      { key: 'E', text: 'DSC' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — ทิศทางของ API ใน SDN (จำภาพแผนที่: เหนือ=แอป ใต้=อุปกรณ์):\n\n        [Applications]\n              ↕  ⬆️ Northbound API (REST, JSON)\n        [SDN Controller]\n              ↕  ⬇️ Southbound API\n     [Switches / Routers]\n\n• ⬆️ Northbound → controller คุยกับ "แอปพลิเคชัน/ผู้ดูแล" ด้านบน → มักเป็น REST API\n• ⬇️ Southbound → controller คุยกับ "อุปกรณ์เครือข่าย" ด้านล่าง เพื่อสั่งค่า/ควบคุม\n   ตัวอย่าง: OpenFlow, NETCONF, RESTCONF, OpFlex, SNMP, CLI/SSH\n\n✅ ทำไม A, B ถูก: OpenFlow (โปรโตคอล SDN มาตรฐานสำหรับสั่ง flow table) และ NETCONF (สั่ง config ผ่าน XML บน SSH พอร์ต 830) ต่างเป็น southbound API ที่ใช้แพร่หลาย\n\n❌ ทำไมข้ออื่นผิด:\nC. Thrift → เฟรมเวิร์ก RPC ทั่วไปของ Facebook ไม่ใช่ southbound API ของ SDN\nD. CORBA → มาตรฐาน middleware เก่าสำหรับเรียกใช้ออบเจ็กต์ข้ามระบบ ไม่เกี่ยวกับ SDN\nE. DSC → ไม่ใช่ southbound API ที่เกี่ยวข้อง\n\n📗 จำไว้สอบ: "controller → อุปกรณ์" = southbound | "controller → แอป/คน" = northbound (มักเป็น REST)',
  },
  {
    id: 31,
    kind: 'single',
    prompt:
      "An email user has been lured into clicking a link in an email sent by their company's security organization. The webpage that opens reports that it was safe but the link could have contained malicious code. Which type of security program is in place?",
    options: [
      { key: 'A', text: 'Physical access control' },
      { key: 'B', text: 'Social engineering attack' },
      { key: 'C', text: 'brute force attack' },
      { key: 'D', text: 'user awareness' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — องค์ประกอบของ Security Program มี 3 เสาหลัก (ออกสอบบ่อย):\n\n1️⃣ ⭐ User Awareness → สร้าง "ความตระหนักรู้" ให้พนักงานทั่วไป\n   เช่น ส่งอีเมล phishing จำลอง, โปสเตอร์เตือน, จดหมายข่าวความปลอดภัย\n\n2️⃣ Training → "ฝึกอบรม" แบบเป็นทางการ มีหลักสูตร มีการวัดผล\n   เช่น คอร์สสอนวิธีตั้งรหัสผ่านที่ดี วิธีจัดการข้อมูลลับ\n\n3️⃣ Physical Access Control → ควบคุมการเข้าถึงทางกายภาพ\n   เช่น badge reader, กุญแจ, biometrics ที่ประตูห้อง server\n\n✅ ทำไม D ถูก: โจทย์บอกว่า "ฝ่ายความปลอดภัยขององค์กรเอง" เป็นคนส่งลิงก์ และหน้าเว็บที่เปิดขึ้นมา "แจ้งเตือนว่าลิงก์นี้อาจอันตราย" → นี่คือการทดสอบ phishing จำลองเพื่อปลุกให้พนักงานระวังตัว = user awareness program\n\n❌ ทำไมข้ออื่นผิด:\nB. Social engineering attack → เป็นชื่อ "การโจมตี" ไม่ใช่ "โปรแกรมความปลอดภัย" และในโจทย์นี้ไม่มีการโจมตีจริง (บริษัทเป็นคนส่งเอง)\nC. Brute force → การเดารหัสผ่านซ้ำ ๆ ไม่เกี่ยวกับอีเมลลิงก์\nA. Physical access control → เรื่องการเข้าออกอาคาร ไม่เกี่ยวกับอีเมล\n\n📗 จำไว้สอบ: คีย์เวิร์ด "บริษัทส่งเอง / ทดสอบ / ให้พนักงานรู้ตัว" → user awareness เสมอ',
  },
  {
    id: 32,
    kind: 'single',
    image: q32,
    prompt: 'An engineer must configure a subnet between two routers. Which usable IP address and subnet mask combination meets this criteria?',
    options: [
      { key: 'A', text: 'interface e0/0\ndescription to HQ-A371:19452\nip address 209.165.201.2 255.255.255.252' },
      { key: 'B', text: 'interface e0/0\ndescription to HQ-A371:19452\nip address 10.2.1.3 255.255.255.252' },
      { key: 'C', text: 'interface e0/0\ndescription to HQ-A371:19452\nip address 172.16.1.4 255.255.255.248' },
      { key: 'D', text: 'interface e0/0\ndescription to HQ-A371:19452\nip address 192.168.1.1 255.255.255.248' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ลิงก์ระหว่าง router 2 ตัว ควรใช้ /30 (255.255.255.252) เพราะให้ usable host พอดี 2 ตัวไม่เหลือทิ้ง\n\n🧮 โครงสร้าง /30: block size = 256 − 252 = 4\n   .0 = network | .1, .2 = usable ✔ | .3 = broadcast\n(รูปแบบซ้ำทุก 4: 0-3, 4-7, 8-11, …)\n\n✅ ตรวจทีละข้อ:\n• A. 209.165.201.2 /30 → อยู่ในซับเน็ต 209.165.201.0/30 (ช่วง .0–.3) → .2 เป็น usable host ✔ ถูกต้อง!\n• B. 10.2.1.3 /30 → อยู่ในซับเน็ต 10.2.1.0/30 (ช่วง .0–.3) → ⚠️ .3 = broadcast address ใช้ตั้งบนอินเทอร์เฟซไม่ได้!\n• C. 172.16.1.4 /29 → mask ผิด (/29 ให้ 6 usable host เปลืองเกินจำเป็น) และ .4 คือ network address ของ 172.16.1.0/29 ด้วย\n• D. 192.168.1.1 /29 → mask /29 ไม่เหมาะกับลิงก์ point-to-point ที่ต้องการแค่ 2 host\n\n📗 จำไว้สอบ: เห็นคำว่า "subnet between two routers" → มองหา /30 (หรือ /31 ในบางกรณีสมัยใหม่) และต้องเช็คว่า IP นั้นไม่ใช่ network/broadcast',
  },
  {
    id: 33,
    kind: 'single',
    prompt: 'What is the default behavior of a Layer 2 switch when a frame with an unknown destination MAC address is received?',
    options: [
      { key: 'A', text: 'The Layer 2 switch drops the received frame' },
      { key: 'B', text: 'The Layer 2 switch floods packets to all ports except the receiving port in the given VLAN' },
      { key: 'C', text: 'The Layer 2 switch sends a copy of a packet to CPU for destination MAC address learning' },
      { key: 'D', text: 'The Layer 2 switch forwards the packet and adds the destination MAC address to its MAC address table' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สวิตช์ตัดสินใจอย่างไรกับเฟรมที่เข้ามา:\n\n1️⃣ Learn → จำ source MAC + พอร์ตที่รับเข้ามา ลงตาราง MAC (CAM table)\n2️⃣ Forward → ถ้ารู้จัก destination MAC → ส่งออก "เฉพาะพอร์ตนั้น" พอร์ตเดียว\n3️⃣ ⭐ Flood → ถ้า "ไม่รู้จัก" destination MAC (unknown unicast) → ส่งออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตที่รับเข้ามา\n   (ทำแบบเดียวกันกับ broadcast FFFF.FFFF.FFFF และ multicast)\n\n✅ ทำไม B ถูก: unknown unicast จะถูก flood ออกทุกพอร์ต "ภายใน VLAN เดียวกัน" ยกเว้นพอร์ตต้นทาง — เพื่อให้เฟรมมีโอกาสถึงปลายทาง และเมื่อปลายทางตอบกลับ สวิตช์จะได้เรียนรู้ MAC นั้นไว้ใช้ครั้งต่อไป\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ไม่ทิ้งเฟรม (การทิ้งจะทำให้การสื่อสารครั้งแรกล้มเหลวเสมอ)\nC. สวิตช์เรียนรู้จาก "source MAC" ไม่ใช่ destination และทำที่ ASIC ไม่ต้องส่งขึ้น CPU\nD. สวิตช์เรียน MAC จาก source เท่านั้น — ไม่เคยเพิ่ม "destination MAC" ลงตาราง\n\n📗 จำไว้สอบ: การ flood ถูกจำกัดอยู่ใน VLAN เดียวกันเสมอ (VLAN = broadcast domain) — นี่คือเหตุผลที่ VLAN ช่วยลด broadcast',
  },
  {
    id: 34,
    kind: 'single',
    image: q34,
    prompt:
      'Refer to the exhibit (R2#show ip nat translations showing Inside global 172.23.104.3/172.23.104.4, Inside local 10.4.4.4/10.4.4.5, Outside local/global 172.23.103.10). An engineer configured NAT translations and has verified that the configuration is correct. Which IP address is the source IP?',
    options: [
      { key: 'A', text: '10.4.4.4' },
      { key: 'B', text: '10.4.4.5' },
      { key: 'C', text: '172.23.103.10' },
      { key: 'D', text: '172.23.104.4' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำศัพท์ NAT 4 ตัวที่ต้องแยกให้ขาด (ตารางนี้ออกสอบทุกครั้ง):\n\n• Inside Local → IP จริงของโฮสต์ภายใน (private) เช่น 10.4.4.4\n• ⭐ Inside Global → IP ที่โลกภายนอก "เห็น" แทนโฮสต์ภายใน (public) เช่น 172.23.104.4\n• Outside Global → IP จริงของเซิร์ฟเวอร์ภายนอก เช่น 172.23.103.10\n• Outside Local → IP ของเซิร์ฟเวอร์ภายนอกในมุมมองของเครือข่ายภายใน (ปกติเท่ากับ outside global)\n\n💡 เคล็ดจำ: "Inside/Outside" = อุปกรณ์นั้นอยู่ฝั่งไหน | "Local/Global" = มองจากมุมของใคร (ภายใน/ภายนอก)\n\n✅ ทำไม D ถูก: เมื่อแพ็กเก็ตวิ่ง "ออก" จากภายในสู่ภายนอก NAT จะแปลง source address จาก inside local (10.4.4.x) → inside global (172.23.104.4) ดังนั้น source IP ที่ปรากฏหลังแปลงคือ 172.23.104.4\n\n❌ ทำไมข้ออื่นผิด:\nA, B. 10.4.4.4 / 10.4.4.5 เป็น inside local = IP ก่อนแปลง (โลกภายนอกไม่เคยเห็น address พวกนี้)\nC. 172.23.103.10 เป็น outside global = ปลายทาง (destination) ไม่ใช่ต้นทาง\n\n📗 จำไว้สอบ: ทราฟฟิกขาออก → NAT เปลี่ยน "source" จาก inside local เป็น inside global | ทราฟฟิกขากลับ → เปลี่ยน "destination" กลับเป็น inside local',
  },
  {
    id: 35,
    kind: 'single',
    prompt: 'Which feature on the Cisco Wireless LAN Controller, when enabled, restricts management access from specific networks?',
    options: [
      { key: 'A', text: 'CPU ACL' },
      { key: 'B', text: 'TACACS' },
      { key: 'C', text: 'Flex ACL' },
      { key: 'D', text: 'RADIUS' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ACL บน WLC มี 2 แบบที่ต้องแยกให้ออก:\n\n• ⭐ CPU ACL → กรองทราฟฟิกที่ "มุ่งเข้าหาตัว WLC เอง" (management plane: GUI/SSH/SNMP)\n  → ใช้จำกัดว่า subnet ไหนบ้างที่เข้ามาจัดการ WLC ได้ ← ตรงกับโจทย์\n• Interface / FlexConnect ACL → กรองทราฟฟิกของ "ไคลเอนต์ไร้สาย" ที่วิ่งผ่าน WLC/AP (data plane)\n\n✅ ทำไม A ถูก: โจทย์ถามถึงการ "จำกัดการเข้าถึงส่วนจัดการ (management access) จากเครือข่ายที่ระบุ" ซึ่งเป็นหน้าที่ของ CPU ACL โดยตรง — เทียบได้กับ "access-class" บน line vty ของ router\n\n❌ ทำไมข้ออื่นผิด:\nC. Flex ACL → ใช้กรองทราฟฟิกของ client ในโหมด FlexConnect ไม่ใช่การป้องกันตัว WLC\nB, D. TACACS+ / RADIUS → เป็นโปรโตคอล AAA ใช้ "ยืนยันตัวตนผู้ใช้" (คุณเป็นใคร) แต่ไม่ได้จำกัด "ว่ามาจากเครือข่ายไหน" ตามที่โจทย์ถาม\n\n📗 จำไว้สอบ: คีย์เวิร์ด "restrict management access" + "specific networks" → CPU ACL',
  },
  {
    id: 36,
    kind: 'single',
    prompt: 'Which command automatically generates an IPv6 address from a specified IPv6 prefix and MAC address of an interface?',
    options: [
      { key: 'A', text: 'ipv6 address dhcp' },
      { key: 'B', text: 'ipv6 address 2001:DB8:5:112::/64 eui-64' },
      { key: 'C', text: 'ipv6 address autoconfig' },
      { key: 'D', text: 'ipv6 address 2001:DB8:5:112::2 link-local' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — EUI-64: วิธีสร้าง Interface ID (64 บิตท้าย) จาก MAC address (48 บิต)\n\n🔧 3 ขั้นตอน:\n1. แบ่ง MAC ครึ่ง: 00 1A 2B | 3C 4D 5E\n2. ⭐ แทรก FFFE ตรงกลาง: 00 1A 2B : FF FE : 3C 4D 5E → ครบ 64 บิต\n3. ⭐ กลับบิตที่ 7 (U/L bit) ของไบต์แรก: 00 → 02\n   ผลลัพธ์: 021A:2BFF:FE3C:4D5E\n\n✅ ทำไม B ถูก: โจทย์ระบุ 2 เงื่อนไข — "specified prefix" + "MAC address"\n"ipv6 address 2001:DB8:5:112::/64 eui-64" ตรงเป๊ะ: ผู้ดูแลระบุ prefix เอง แล้ว IOS สร้างส่วนท้าย 64 บิตจาก MAC ด้วย EUI-64 ให้อัตโนมัติ\n\n❌ ทำไมข้ออื่นผิด:\nC. "ipv6 address autoconfig" = SLAAC → prefix มาจาก Router Advertisement ของ router ไม่ใช่ "ระบุเอง" ตามโจทย์ (แม้จะใช้ EUI-64 เหมือนกันก็ตาม — นี่คือกับดักหลัก!)\nA. "ipv6 address dhcp" → รับ address จาก DHCPv6 server ไม่เกี่ยวกับ MAC เลย\nD. เป็นการตั้ง link-local address แบบ static ตรง ๆ ไม่ได้ใช้ MAC มาคำนวณ\n\n📗 จำไว้สอบ: เห็น "specified/given prefix + MAC" → eui-64 | เห็น "learn prefix from router / RA" → autoconfig (SLAAC)',
  },
  {
    id: 37,
    kind: 'multi',
    prompt: 'An engineer is asked to protect unused ports that are configured in the default VLAN on a switch. Which two steps will fulfill the request? (Choose two)',
    options: [
      { key: 'A', text: 'Configure the ports in an EtherChannel' },
      { key: 'B', text: 'Administratively shut down the ports' },
      { key: 'C', text: 'Configure the port type as access and place in VLAN 99' },
      { key: 'D', text: 'Configure the ports as trunk ports' },
      { key: 'E', text: 'Enable the Cisco Discovery Protocol' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — ทำไมพอร์ตที่ไม่ได้ใช้ใน VLAN 1 ถึงอันตราย?\nVLAN 1 เป็น default VLAN ที่ทราฟฟิกควบคุม (CDP, DTP, VTP, STP) วิ่งอยู่ + เป็น native VLAN ค่าเริ่มต้น\n→ ถ้าคนแปลกหน้าเสียบสายเข้าพอร์ตว่างใน VLAN 1 → เข้าถึงเครือข่ายได้ทันที และเสี่ยงถูก VLAN hopping\n\n🛡️ แนวปฏิบัติที่ถูกต้องสำหรับพอร์ตว่าง (ทำทั้ง 2 อย่าง):\n1️⃣ ⭐ Shutdown พอร์ตทิ้งไว้ → เสียบสายมาก็ไม่ทำงาน (ป้องกันแบบเด็ดขาดที่สุด)\n2️⃣ ⭐ ตั้งเป็น access port แล้วย้ายไป "black hole VLAN" (VLAN ที่ไม่ได้ใช้จริง เช่น 99)\n   → ถึงมีคนเปิดพอร์ตขึ้นมา ก็ไปโผล่ใน VLAN ที่ไม่มีทางออกไปไหน\n\n✅ ทำไม B, C ถูก: shutdown (B) + ย้ายเป็น access ใน VLAN 99 ที่ไม่ได้ใช้ (C) คือสองมาตรการมาตรฐาน\n\n❌ ทำไมข้ออื่นผิด:\nD. ตั้งเป็น trunk → ⚠️ อันตรายที่สุด! trunk มองเห็นทุก VLAN → ผู้โจมตีเสียบมาแล้วเข้าถึงได้หมด\nA. EtherChannel → เป็นการรวมลิงก์เพิ่มแบนด์วิดท์ ไม่เกี่ยวกับความปลอดภัยเลย\nE. เปิด CDP → ⚠️ ยิ่งแย่! CDP เปิดเผยข้อมูลอุปกรณ์ (รุ่น, IOS version, IP) ให้ผู้โจมตี — ควรปิดบนพอร์ตที่ไม่จำเป็นด้วยซ้ำ\n\n📗 จำไว้สอบ: พอร์ตว่าง → shutdown + ย้ายไป unused VLAN + ตั้งเป็น access (ห้ามเป็น trunk เด็ดขาด)',
  },
  {
    id: 38,
    kind: 'single',
    image: q38,
    prompt: 'Which output displays a JSON data representation?',
    options: [
      { key: 'A', text: '{\n  "response": {\n    "taskId": {};\n    "url": "string"\n  };\n  "version": "string"\n}' },
      { key: 'B', text: '{\n  "response"- {\n    "taskId"- {},\n    "url"- "string"\n  },\n  "version"- "string"\n}' },
      { key: 'C', text: '{\n  "response": {\n    "taskId": {},\n    "url": "string"\n  },\n  "version": "string"\n}' },
      { key: 'D', text: '{\n  "response". {\n    "taskId". {};\n    "url". "string"\n  };\n  "version". "string"\n}' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ไวยากรณ์ JSON ที่ถูกต้อง (จำ 4 กฎนี้):\n\n1️⃣ ⭐ ใช้ colon ( : ) คั่นระหว่าง key กับ value → "key": value\n2️⃣ ⭐ ใช้ comma ( , ) คั่นระหว่างคู่ key-value แต่ละคู่\n3️⃣ ใช้ { } ครอบ object และ [ ] ครอบ array\n4️⃣ key ต้องอยู่ในเครื่องหมายคำพูดคู่ ( " ) เสมอ\n\n📄 รูปแบบที่ถูกต้อง:\n{\n  "response": {          ← colon หลัง key\n    "taskId": {},        ← comma คั่นคู่ถัดไป\n    "url": "string"      ← คู่สุดท้ายไม่ต้องมี comma\n  },\n  "version": "string"\n}\n\n✅ ทำไม C ถูก: เป็นตัวเลือกเดียวที่ใช้ colon คั่น key:value และ comma คั่นระหว่างคู่ — ครบถูกต้องทุกจุด\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ semicolon ( ; ) แทน comma → JSON ไม่รู้จักเครื่องหมายนี้\nB. ใช้ hyphen ( - ) แทน colon → key กับ value ไม่ถูกเชื่อมกัน\nD. ใช้ period ( . ) แทน colon และ semicolon แทน comma → ผิดทั้งสองอย่าง\n\n📗 จำไว้สอบ: JSON = { "key" : value , "key2" : value2 } — จำแค่ "colon คั่นคู่, comma คั่นรายการ"',
  },
  {
    id: 39,
    kind: 'single',
    prompt: 'Which command is used to specify the delay time in seconds for LLDP to initialize on any interface?',
    options: [
      { key: 'A', text: 'lldp timer' },
      { key: 'B', text: 'lldp holdtime' },
      { key: 'C', text: 'lldp reinit' },
      { key: 'D', text: 'lldp tlv-select' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — LLDP (Link Layer Discovery Protocol) = โปรโตคอลค้นหาอุปกรณ์เพื่อนบ้าน "มาตรฐานเปิด" (802.1AB)\n→ เทียบเท่ากับ CDP ของ Cisco แต่ใช้ข้ามยี่ห้อได้\n\n📊 คำสั่งตั้งเวลาของ LLDP (ต้องแยกให้ออก!):\n• ⭐ lldp reinit <วินาที> → เวลา "หน่วง" ก่อน LLDP เริ่ม initialize บนอินเทอร์เฟซ (ค่าเริ่มต้น 2 วิ)\n• lldp timer <วินาที> → ความถี่ในการส่ง LLDP update ออกไป (ค่าเริ่มต้น 30 วิ)\n• lldp holdtime <วินาที> → เพื่อนบ้านเก็บข้อมูลเราไว้นานเท่าไหร่ก่อนทิ้ง (ค่าเริ่มต้น 120 วิ)\n• lldp tlv-select → เลือกว่าจะส่งข้อมูล (TLV) ชนิดไหนบ้าง\n\n✅ ทำไม C ถูก: โจทย์ถามหา "delay time ก่อน LLDP จะ initialize" ซึ่งตรงกับคำสั่ง lldp reinit พอดี\n(reinit = re-initialize → คำนี้เองบอกอยู่แล้วว่าเกี่ยวกับการเริ่มต้นใหม่)\n\n❌ ทำไมข้ออื่นผิด:\nA. lldp timer → คุมความถี่ส่ง update ไม่ใช่ delay ตอนเริ่ม\nB. lldp holdtime → คุมอายุข้อมูลที่ฝั่งเพื่อนบ้านเก็บไว้\nD. lldp tlv-select → เลือกชนิดข้อมูลที่ส่ง ไม่เกี่ยวกับเวลา\n\n📗 จำไว้สอบ: เปิด LLDP ด้วย "lldp run" (global) | ดูเพื่อนบ้านด้วย "show lldp neighbors" | CDP = Cisco เท่านั้น, LLDP = ข้ามยี่ห้อ',
  },
  {
    id: 40,
    kind: 'single',
    prompt: 'A network engineer must back up 20 network router configurations globally within a customer environment. Which protocol allows the engineer to perform this function using the Cisco IOS MIB?',
    options: [
      { key: 'A', text: 'CDP' },
      { key: 'B', text: 'SNMP' },
      { key: 'C', text: 'SMTP' },
      { key: 'D', text: 'ARP' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — SNMP (Simple Network Management Protocol) คือระบบจัดการอุปกรณ์แบบรวมศูนย์\n\n🧩 องค์ประกอบของ SNMP:\n• SNMP Manager → ซอฟต์แวร์ NMS ที่สั่งงาน/เก็บข้อมูล (อยู่ที่ศูนย์กลาง)\n• SNMP Agent → โปรแกรมที่รันบนอุปกรณ์ คอยตอบคำขอ\n• ⭐ MIB (Management Information Base) → "ฐานข้อมูล/แผนที่" ของตัวแปรทั้งหมดที่ monitor และสั่งงานได้\n  → Cisco IOS MIB มี object สำหรับสั่ง "copy running-config tftp" ได้ด้วย!\n• SNMP Trap → ข้อความแจ้งเตือนที่ agent ส่งเองโดยไม่ต้องถูกถาม\n\n✅ ทำไม B ถูก: โจทย์ระบุชัดว่าใช้ "Cisco IOS MIB" ซึ่งเป็นโครงสร้างข้อมูลของ SNMP โดยเฉพาะ → SNMP manager สามารถสั่ง backup config ของ router ทั้ง 20 ตัวพร้อมกันจากศูนย์กลางได้ในคราวเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. CDP → ใช้ค้นหาอุปกรณ์เพื่อนบ้านเท่านั้น สั่ง backup config ไม่ได้\nC. SMTP → โปรโตคอลส่งอีเมล ไม่เกี่ยวกับการจัดการอุปกรณ์\nD. ARP → แปลง IP เป็น MAC ทำงานที่ Layer 2/3 ไม่ใช่การจัดการ\n\n📗 จำไว้สอบ: SNMP พอร์ต UDP 161 (query) / 162 (trap) | เห็นคำว่า "MIB" ในโจทย์ → SNMP เสมอ',
  },
  {
    id: 41,
    kind: 'drag',
    image: q41,
    prompt: 'Drag and drop the threat-mitigation techniques from the left onto the types of threat or attack they mitigate on the right.',
    categories: [
      { name: '802.1q double tagging (VLAN hopping)', items: ['Configure VACL'] },
      { name: 'ARP spoofing', items: ['Configure dynamic ARP inspection'] },
      { name: 'unwanted superior BPDUs', items: ['Configure root guard'] },
      { name: 'unwanted BPDUs on PortFast-enabled interfaces', items: ['Configure BPDU guard'] },
    ],
    explanation:
      '📘 แนวคิด — จับคู่ "ภัยคุกคาม → เครื่องมือป้องกัน" (ออกสอบบ่อยมาก):\n\n🔸 802.1Q double tagging (VLAN hopping)\n   ผู้โจมตีใส่ VLAN tag 2 ชั้น → tag ชั้นนอกถูกถอดที่สวิตช์แรก เหลือ tag ชั้นในพาไป VLAN อื่น\n   → ป้องกัน: VACL (กรองทราฟฟิกภายใน VLAN) + เปลี่ยน native VLAN เป็น VLAN ที่ไม่ได้ใช้\n\n🔸 ARP spoofing (Man-in-the-Middle)\n   ผู้โจมตีส่ง ARP ปลอมอ้างว่าตัวเองคือ gateway → ดักอ่านทราฟฟิกได้\n   → ป้องกัน: Dynamic ARP Inspection (DAI) ตรวจ ARP เทียบกับ DHCP snooping binding table\n\n🔸 Superior BPDU ที่ไม่พึงประสงค์\n   สวิตช์แปลกปลอมส่ง BPDU ที่ "ดีกว่า" เข้ามาแย่งเป็น root bridge → topology พังทั้งวง\n   → ป้องกัน: Root Guard (ถ้าพอร์ตนั้นได้รับ superior BPDU จะเข้าสถานะ root-inconsistent ไม่ยอมให้เป็น root port)\n\n🔸 BPDU บนพอร์ต PortFast\n   พอร์ตที่ต่อ PC ไม่ควรได้รับ BPDU เลย ถ้าได้รับ = มีคนแอบเสียบสวิตช์\n   → ป้องกัน: BPDU Guard (สั่ง err-disable พอร์ตทันที)\n\n📗 จำไว้สอบ: Root Guard = "กันแย่งตำแหน่ง root" | BPDU Guard = "กันเสียบสวิตช์ผิดที่" — สองตัวนี้ชอบสลับกันในข้อสอบ!',
  },
  {
    id: 42,
    kind: 'drag',
    image: q42,
    prompt: 'Drag and drop the network protocols from the left onto the correct transport services on the right.',
    categories: [
      { name: 'Connection Oriented (TCP)', items: ['FTP', 'SSH', 'SMTP'] },
      { name: 'Connectionless (UDP)', items: ['SNMP', 'TFTP', 'VoIP'] },
    ],
    explanation:
      '📘 แนวคิด — TCP (connection-oriented) มี handshake + ACK + retransmit → ใช้เมื่อ "ข้อมูลห้ามหาย"\nUDP (connectionless) ส่งเลยไม่การันตี → ใช้เมื่อ "ความเร็วสำคัญกว่าความครบถ้วน"\n\n📊 พอร์ตที่ต้องท่องให้ได้:\n\n🔵 TCP (Connection Oriented)\n   • FTP → 20 (data) / 21 (control)\n   • SSH → 22\n   • Telnet → 23\n   • SMTP → 25\n   • HTTP → 80 | HTTPS → 443\n\n🟢 UDP (Connectionless)\n   • TFTP → 69 (ไม่มี authentication, ใช้ backup config)\n   • SNMP → 161 (trap = 162)\n   • DHCP → 67/68\n   • Syslog → 514\n   • VoIP/RTP → ช่วงพอร์ตสูง (เสียงต้องเรียลไทม์ ส่งซ้ำแล้วยิ่งกระตุก)\n\n⚠️ DNS ใช้ทั้งคู่: UDP 53 (query ปกติ) / TCP 53 (zone transfer, ข้อมูลใหญ่)\n\n📗 จำไว้สอบ: เห็นงานที่ "ทนข้อมูลหายได้ + ต้องการเร็ว" (เสียง วิดีโอ log monitoring) → UDP',
  },
  {
    id: 43,
    kind: 'drag',
    image: q43,
    prompt:
      'A network engineer is configuring an OSPFv2 neighbor adjacency. Drag and drop the parameters from the left onto their required categories on the right. Not all parameters are used.',
    categories: [
      { name: 'must be unique', items: ['IP address', 'router ID'] },
      { name: 'must match', items: ['area ID', 'netmask', 'timers (hello/dead)'] },
    ],
    explanation:
      '📘 แนวคิด — เช็คลิสต์ OSPF neighbor adjacency แบ่งเป็น 2 กลุ่มชัดเจน:\n\n✅ กลุ่ม "ต้องไม่ซ้ำกัน" (must be UNIQUE):\n• Router ID → ถ้าซ้ำกัน OSPF จะ error และ adjacency พังทันที\n• IP address → แต่ละอินเทอร์เฟซต้องมี IP ของตัวเอง (แต่อยู่ subnet เดียวกัน)\n\n✅ กลุ่ม "ต้องตรงกัน" (must MATCH):\n• Area ID → ต้องอยู่ area เดียวกัน\n• Netmask / subnet mask → ต้องอยู่ subnet เดียวกัน\n• Hello / Dead timers → ต้องตรงกันเป๊ะ (ค่าเริ่มต้น 10/40 บน broadcast)\n• Authentication → ต้องตรงกัน\n• MTU → ต้องตรงกัน (ถ้าไม่ตรงจะค้างที่ EXSTART)\n• Stub area flag → ต้องตรงกัน\n\n⚠️ ไม่ถูกใช้ในคำตอบ: OSPF Process ID (เลขหลัง "router ospf")\n→ เป็นค่า local เฉพาะเครื่อง! R1 ใช้ process 1 กับ R2 ใช้ process 99 ก็ยังเป็น neighbor กันได้ปกติ\n→ นี่คือความเข้าใจผิดที่พบบ่อยที่สุดของข้อสอบ OSPF\n\n📗 จำไว้สอบ: Router ID = ต้องไม่ซ้ำ | Process ID = ไม่เกี่ยว | Area/Timers/MTU = ต้องตรง',
  },
  {
    id: 44,
    kind: 'multi',
    image: q44,
    prompt:
      'Refer to the exhibit (R2 access-list 101 deny tcp 10.0.20.0 0.0.0.63 10.0.10.0 0.0.0.63 eq smtp / eq www, applied "ip access-group 101 in" on Gi0/2). An extended ACL has been configured and applied to router R2. The configuration failed to work as intended. Which two changes stop outbound traffic on TCP ports 25 and 80 to 10.0.20.0/26 from the 10.0.10.0 subnet while still allowing all other traffic? (Choose two)',
    options: [
      { key: 'A', text: 'Add a "permit ip any any" statement to the beginning of ACL 101 for allowed traffic' },
      { key: 'B', text: 'Add a "permit ip any any" statement at the end of ACL 101 for allowed traffic' },
      { key: 'C', text: 'The source and destination IPs must be swapped in ACL 101' },
      { key: 'D', text: 'The ACL must be configured the Gi0 interface inbound on R1' },
      { key: 'E', text: 'The ACL must be moved to the Gi0 interface outbound on R2' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — กฎ ACL 3 ข้อที่ต้องจำ:\n1️⃣ ตรวจจากบนลงล่าง เจอ match แรกแล้ว "หยุดทันที" (ไม่อ่านต่อ)\n2️⃣ 👻 มี implicit "deny any any" ซ่อนอยู่ท้ายสุดเสมอ\n3️⃣ Extended ACL เขียนแบบ: deny/permit <protocol> <SOURCE> <DESTINATION> eq <port>\n\n🔍 ปัญหาใน exhibit มี 2 จุด:\n\n❌ จุดที่ 1 — source/destination สลับกัน!\nโจทย์ต้องการบล็อก: จาก 10.0.10.0/26 (ผู้ใช้) → ไป 10.0.20.0/26 (เซิร์ฟเวอร์)\nแต่ ACL เขียน: deny tcp 10.0.20.0 … 10.0.10.0 … (สลับกันอยู่)\n→ ต้องสลับกลับให้ถูก = ข้อ C ✔\n\n❌ จุดที่ 2 — ไม่มี permit ท้าย ACL\nACL มีแต่บรรทัด deny → ทราฟฟิกอื่นทั้งหมดชน implicit deny any → ถูกบล็อกหมด!\n→ ต้องเติม "permit ip any any" ที่ "ท้ายสุด" = ข้อ B ✔\n⚠️ ต้องเติมท้าย ไม่ใช่ต้น! (ถ้าเติมต้น → permit จะ match ก่อน แล้ว deny ไม่มีผลเลย)\n\n❌ ทำไมข้ออื่นผิด:\nA. เติม permit ที่ "ต้น" ACL → ทุกอย่างผ่านหมดตั้งแต่บรรทัดแรก บรรทัด deny ไม่ถูกอ่าน = ACL ไร้ผล\nD, E. ตำแหน่ง apply (inbound บน Gi0/2 ของ R2 ซึ่งเป็นฝั่งที่ทราฟฟิกจาก 10.0.10.0 วิ่งเข้ามา) ถูกต้องอยู่แล้ว ไม่ต้องย้าย\n\n📗 จำไว้สอบ: Extended ACL วางใกล้ "ต้นทาง" | Standard ACL วางใกล้ "ปลายทาง"',
  },
  {
    id: 45,
    kind: 'single',
    image: q45,
    prompt: 'Refer to the exhibit. Which type of route does R1 use to reach host 10.10.13.10?',
    options: [
      { key: 'A', text: 'floating static route' },
      { key: 'B', text: 'host route' },
      { key: 'C', text: 'default route' },
      { key: 'D', text: 'network route' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ประเภทของ route ที่ต้องแยกให้ออก:\n\n• Network route → route ของทั้งซับเน็ต (prefix ไม่ใช่ /32) เช่น 10.10.13.0/25 ← ใช้บ่อยที่สุด\n• Host route → route เจาะจงโฮสต์เดียว ต้องเป็น /32 เท่านั้น เช่น 10.10.13.10/32\n• Default route → 0.0.0.0/0 ใช้เมื่อไม่มี route อื่นตรงเลย (gateway of last resort)\n• Floating static → static route ที่ใส่ AD สูงต่อท้าย ทำหน้าที่เป็นเส้นสำรอง\n\n✅ วิเคราะห์: ปลายทาง 10.10.13.10 → ตรงกับ entry "O 10.10.13.0/25 via 10.10.10.1"\n(/25 ครอบคลุม 10.10.13.0–10.10.13.127 ซึ่งรวม .10 อยู่ด้วย)\nprefix เป็น /25 = ทั้งซับเน็ต ไม่ใช่ /32 → จึงเป็น network route ✔\n\n❌ ทำไมข้ออื่นผิด:\nB. host route ต้องเป็น /32 พอดีเท่านั้น — แต่นี่เป็น /25\nC. default route คือ 0.0.0.0/0 ซึ่งเป็นคนละบรรทัดในตาราง (และจะถูกใช้ก็ต่อเมื่อไม่มี route อื่น match)\nA. floating static ต้องเป็น static (S) ที่มี AD สูงผิดปกติ — แต่นี่เป็น route ที่เรียนจาก OSPF (โค้ด O, AD 110)\n\n📗 จำไว้สอบ: เห็น /32 → host route | เห็น 0.0.0.0/0 → default route | prefix อื่น ๆ → network route',
  },
  {
    id: 46,
    kind: 'single',
    prompt: 'Which mode must be used to configure EtherChannel between two switches without using a negotiation protocol?',
    options: [
      { key: 'A', text: 'on' },
      { key: 'B', text: 'auto' },
      { key: 'C', text: 'active' },
      { key: 'D', text: 'desirable' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — EtherChannel มี 3 วิธีจับกลุ่ม:\n\n1️⃣ ⭐ Static (mode on) → ไม่ใช้โปรโตคอลเจรจาเลย บังคับรวมทันที\n   ⚠️ ต้องตั้ง "on" ทั้งสองฝั่ง! ถ้าฝั่งเดียว → เกิด loop ได้ (ไม่มีใครคอยตรวจสอบ)\n\n2️⃣ LACP (802.3ad — มาตรฐานเปิด ข้ามยี่ห้อได้)\n   • active = เจรจาเชิงรุก | passive = รอ\n   • active+active ✔ | active+passive ✔ | passive+passive ✘\n\n3️⃣ PAgP (ของ Cisco เท่านั้น)\n   • desirable = เชิงรุก | auto = รอ\n   • desirable+desirable ✔ | desirable+auto ✔ | auto+auto ✘\n\n✅ ทำไม A ถูก: โจทย์บอกชัด "without using a negotiation protocol" (ไม่ใช้โปรโตคอลเจรจา) → มีเพียงโหมด "on" ที่ไม่ส่ง LACP/PAgP packet ใด ๆ เลย\n\n❌ ทำไมข้ออื่นผิด:\nC. active → เป็นโหมดของ LACP (มีการเจรจา)\nB, D. auto / desirable → เป็นโหมดของ PAgP (มีการเจรจาเช่นกัน)\n\n📗 จำไว้สอบ: ห้ามผสม LACP กับ PAgP เด็ดขาด! และ mode "on" ต้องตั้งเหมือนกันทั้ง 2 ฝั่งเสมอ',
  },
  {
    id: 47,
    kind: 'single',
    prompt: 'Which IPv6 address block sends packets to a group address rather than a single address?',
    options: [
      { key: 'A', text: '2000::' },
      { key: 'B', text: 'FC00::' },
      { key: 'C', text: 'FE80::' },
      { key: 'D', text: 'FF00::' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — IPv6 address blocks (ท่องให้ขึ้นใจ):\n\n• 2000::/3 → Global Unicast : ส่งถึง "อุปกรณ์เดียว" route บนอินเทอร์เน็ตได้ (= public IPv4)\n• FC00::/7 → Unique Local (ULA) : ส่งถึงอุปกรณ์เดียว ใช้ภายในองค์กร (= private IPv4)\n• FE80::/10 → Link-Local : ส่งถึงอุปกรณ์เดียว บนลิงก์เดียวกันเท่านั้น (มีอัตโนมัติเสมอ)\n• ⭐ FF00::/8 → Multicast : ส่งถึง "กลุ่ม" อุปกรณ์พร้อมกัน ✔\n\n✅ ทำไม D ถูก: โจทย์ถามหา block ที่ส่งไปยัง "group address" แทนที่จะเป็นปลายทางเดียว = multicast → ทุก address ที่ขึ้นต้นด้วย FF คือ multicast ใน IPv6\n\n📡 Multicast group สำคัญ: FF02::1 (all-nodes) • FF02::2 (all-routers) • FF02::5/6 (OSPFv3) • FF02::A (EIGRPv6)\n\n❌ ทำไมข้ออื่นผิด:\nA. 2000:: = global unicast → "unicast" = ส่งถึงตัวเดียว ไม่ใช่กลุ่ม\nB. FC00:: = unique local → ก็ยังเป็น unicast (ตัวเดียว) แค่ใช้ภายในองค์กร\nC. FE80:: = link-local → unicast บนลิงก์เดียว\n\n⭐ เกร็ดสำคัญ: IPv6 "ไม่มี broadcast" แล้ว! ใช้ multicast FF02::1 (all-nodes) ทำหน้าที่แทน',
  },
  {
    id: 48,
    kind: 'drag',
    image: q48,
    prompt: 'Drag and drop the functions from the left onto the correct network components on the right.',
    categories: [
      { name: 'DHCP Server', items: ['holds the TCP/IP settings to be distributed to the clients', 'assigns IP addresses to enabled clients', 'assigns a default gateway to a client'] },
      { name: 'DNS Server', items: ['resolves web URLs to IP addresses', 'stores a list of IP addresses mapped to names'] },
    ],
    explanation:
      '📘 แนวคิด — DHCP กับ DNS ทำงานคนละหน้าที่ (ข้อสอบชอบเอามาสลับกัน!):\n\n🔹 DHCP Server = "คนแจกที่อยู่"\n   • เก็บค่า TCP/IP ทั้งชุดไว้แจก (address pool)\n   • แจก IP address ให้ client พร้อม lease time\n   • แจก default gateway, subnet mask และ DNS server ให้ด้วย\n   • ขั้นตอน 4 ก้าว: DORA = Discover → Offer → Request → Acknowledge\n   • พอร์ต UDP 67 (server) / 68 (client)\n\n🔹 DNS Server = "สมุดโทรศัพท์"\n   • แปลง URL/ชื่อโดเมน → IP address (เช่น cisco.com → 72.163.4.185)\n   • เก็บฐานข้อมูล record ที่จับคู่ชื่อกับ IP (A, AAAA, CNAME, MX, PTR)\n   • พอร์ต UDP 53 (query) / TCP 53 (zone transfer)\n\n⚠️ จุดที่สับสน: DHCP เป็นคน "บอก" ว่า DNS server อยู่ที่ไหน (option 6) แต่ตัว DHCP เองไม่ได้แปลงชื่อ!\n\n📗 จำไว้สอบ: "assign / distribute / pool / lease" → DHCP | "resolve / map name to IP / record" → DNS',
  },
  {
    id: 49,
    kind: 'multi',
    prompt: 'Which two capacities of Cisco DNA Center make it more extensible as compared to traditional campus device management? (Choose two)',
    options: [
      { key: 'A', text: 'adapters that support all families of Cisco IOS software' },
      { key: 'B', text: 'SDKs that support interaction with third-party network equipment' },
      { key: 'C', text: 'customized versions for small, medium, and large enterprises' },
      { key: 'D', text: 'REST APIs that allow for external applications to interact natively with Cisco DNA Center' },
      { key: 'E', text: 'modular design that is upgradable as needed' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — คำว่า "extensible" (ต่อยอดได้) หมายถึงเปิดให้ระบบอื่นมาเชื่อมต่อ/ขยายความสามารถได้ ซึ่ง Cisco DNA Center ทำได้ผ่าน:\n\n1️⃣ ⭐ Intent-based REST APIs → ให้แอปพลิเคชันภายนอกเรียกใช้ ดึงข้อมูล และสั่งงานเครือข่ายได้โดยตรง (northbound API)\n2️⃣ ⭐ SDKs (Multivendor Support) → ชุดพัฒนาที่ให้ DNA Center จัดการอุปกรณ์ของ "ยี่ห้ออื่น" ได้ด้วย ไม่ใช่แค่ Cisco\n3️⃣ Process Adapters → เชื่อมกับระบบ IT อื่น เช่น ITSM (ServiceNow)\n4️⃣ Domain Adapters → เชื่อมกับโดเมนอื่น เช่น ระบบความปลอดภัย\n\n✅ ทำไม B, D ถูก: ทั้ง SDK สำหรับอุปกรณ์ third-party และ REST API สำหรับแอปภายนอก คือสิ่งที่ทำให้ DNA Center "ขยาย/ต่อยอด" ได้เหนือกว่าการจัดการอุปกรณ์แบบเดิมที่ปิดตัวเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. adapter ที่รองรับ IOS ทุกตระกูล → เป็นเรื่อง "ความเข้ากันได้กับของ Cisco เอง" ไม่ใช่การเปิดให้ระบบอื่นต่อยอด\nC. เวอร์ชันย่อยตามขนาดองค์กร → เป็นเรื่องการตลาด/ขนาดการติดตั้ง ไม่ใช่ extensibility\nE. modular design ที่อัปเกรดได้ → เป็นเรื่องการขยายฮาร์ดแวร์/ความจุ ไม่ใช่การเปิด API ให้ระบบอื่น\n\n📗 จำไว้สอบ: เห็นคำว่า "extensible / open / integrate with third-party" → มองหา API และ SDK',
  },
  {
    id: 50,
    kind: 'drag',
    image: q50,
    prompt: 'Drag and drop the AAA functions from the left onto the correct AAA services on the right.',
    categories: [
      { name: 'Authentication', items: ['identifies the user', 'verifies the password associated with a user'] },
      { name: 'Authorization', items: ['restricts the services that are available to a user', 'controls the actions that a user can perform'] },
      { name: 'Accounting', items: ['provides analytical information for the network administrator', 'records user activities'] },
    ],
    explanation:
      '📘 แนวคิด — AAA แยกเป็น 3 หน้าที่ ท่องด้วยคำถาม 3 ข้อ:\n\n1️⃣ Authentication = "คุณเป็นใคร?" 🪪\n   • ระบุตัวผู้ใช้ (identifies the user)\n   • ตรวจสอบรหัสผ่านที่ผูกกับผู้ใช้นั้น (verifies the password)\n\n2️⃣ Authorization = "คุณทำอะไรได้บ้าง?" 🔑\n   • จำกัดว่าบริการใดที่ผู้ใช้เข้าถึงได้ (restricts services)\n   • ควบคุมว่าผู้ใช้สั่งการอะไรได้ (controls actions / privilege level)\n\n3️⃣ Accounting = "คุณทำอะไรไปแล้วบ้าง?" 📝\n   • บันทึกกิจกรรมของผู้ใช้ (records user activities)\n   • ให้ข้อมูลเชิงวิเคราะห์แก่ผู้ดูแลระบบ (analytical information)\n\n📊 โปรโตคอลที่ใช้ (ออกสอบคู่กันเสมอ):\n• RADIUS → UDP 1812/1813 | รวม authen+author เข้าด้วยกัน | เข้ารหัสแค่ password | มาตรฐานเปิด\n• TACACS+ → TCP 49 | แยก A-A-A ออกจากกันชัดเจน | เข้ารหัส payload ทั้งหมด | ของ Cisco\n\n📗 จำไว้สอบ: ใช้ RADIUS กับ "ผู้ใช้ทั่วไป/ไร้สาย" | ใช้ TACACS+ กับ "ผู้ดูแลอุปกรณ์" (คุมได้ถึงระดับคำสั่ง)',
  },
  {
    id: 51,
    kind: 'single',
    prompt: 'What is the primary effect of the spanning-tree portfast command?',
    options: [
      { key: 'A', text: 'It enables BPDU messages' },
      { key: 'B', text: 'It minimizes spanning-tree convergence time' },
      { key: 'C', text: 'It immediately puts the port into the forwarding state when the link comes up' },
      { key: 'D', text: 'It immediately enables the port in the listening state' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — STP ปกติ พอร์ตต้องไต่ผ่าน state ตามลำดับ กว่าจะส่งข้อมูลได้:\n\n   Blocking → Listening (15s) → Learning (15s) → Forwarding\n   รวมแล้วรอ ~30 วินาที (หรือถึง 50 วินาทีถ้ารวม max-age)\n\n⚠️ ปัญหา: เสียบ PC แล้วต้องรอ 30 วิ → DHCP ของเครื่องมัก timeout ไปก่อน → ได้ APIPA (169.254.x.x) แทนที่จะได้ IP จริง!\n\n✅ ทำไม C ถูก: PortFast สั่งให้พอร์ต "กระโดดข้าม" listening และ learning เข้าสู่ forwarding state ทันทีที่ลิงก์ขึ้น → PC ใช้งานได้เลย ไม่ต้องรอ\n\n❌ ทำไมข้ออื่นผิด:\nA. PortFast ไม่ได้ไปยุ่งกับการเปิด/ปิด BPDU — พอร์ตยังส่ง/รับ BPDU ตามปกติ (ถ้าอยากป้องกัน BPDU ต้องเพิ่ม BPDU Guard)\nD. ตรงข้ามเลย! PortFast คือการ "ข้าม" listening state ไม่ใช่ทำให้เข้า listening ทันที\nB. "ลดเวลา convergence" เป็นผลพลอยได้ในภาพรวม แต่ผลกระทบ "หลัก" (primary effect) ที่โจทย์ถามคือ "เข้า forwarding ทันที" ซึ่งข้อ C ระบุชัดกว่า\n\n⚠️ ข้อควรระวัง: ใช้ PortFast เฉพาะพอร์ตที่ต่อ end-host เท่านั้น! ถ้าไปเสียบสวิตช์อีกตัว → เกิด loop ทันที จึงควรใส่ BPDU Guard คู่กันเสมอ\n\n📗 จำไว้สอบ: PortFast (เร็ว) + BPDU Guard (ปลอดภัย) = คู่หูที่ต้องใช้ด้วยกัน',
  },
  {
    id: 52,
    kind: 'drag',
    image: q52,
    prompt: 'Drag and drop the IPv4 network subnets from the left onto the correct usable host ranges on the right.',
    categories: [
      { name: '172.28.192.1 - 172.28.255.254', items: ['172.28.228.144/18'] },
      { name: '172.28.224.1 - 172.28.231.254', items: ['172.28.228.144/21'] },
      { name: '172.28.228.1 - 172.28.229.254', items: ['172.28.228.144/23'] },
      { name: '172.28.228.129 - 172.28.228.254', items: ['172.28.228.144/25'] },
      { name: '172.28.228.145 - 172.28.228.150', items: ['172.28.228.144/29'] },
    ],
    explanation:
      '📘 เทคนิคคิดเร็ว — หา block size จาก 256 − เลข octet สุดท้ายของ mask แล้วไล่นับช่วง\nทุกข้อใช้ IP เดียวกัน (172.28.228.144) ต่างกันแค่ prefix → ต้องหาว่าตกอยู่ในซับเน็ตไหน\n\n🧮 /18 → mask 255.255.192.0 → block = 256−192 = 64 (ที่ octet 3)\n   ช่วง octet 3: 0, 64, 128, ⭐192 → 228 ตกในช่วง 192–255\n   network 172.28.192.0 → usable 172.28.192.1 – 172.28.255.254\n\n🧮 /21 → mask 255.255.248.0 → block = 256−248 = 8 (ที่ octet 3)\n   ช่วง: 216, ⭐224, 232 → 228 ตกในช่วง 224–231\n   network 172.28.224.0 → usable 172.28.224.1 – 172.28.231.254\n\n🧮 /23 → mask 255.255.254.0 → block = 256−254 = 2 (ที่ octet 3)\n   ช่วง: 226, ⭐228, 230 → 228 ตกในช่วง 228–229\n   network 172.28.228.0 → usable 172.28.228.1 – 172.28.229.254\n\n🧮 /25 → mask 255.255.255.128 → block = 128 (ที่ octet 4)\n   ช่วง: 0–127, ⭐128–255 → 144 ตกในช่วงหลัง\n   network 172.28.228.128 → usable .129 – .254\n\n🧮 /29 → mask 255.255.255.248 → block = 8 (ที่ octet 4)\n   ช่วง: 136, ⭐144, 152 → 144 ตกในช่วง 144–151\n   network 172.28.228.144 → usable .145 – .150 (.151 = broadcast)\n\n📗 จำไว้สอบ: usable host = network+1 ถึง broadcast−1 เสมอ | prefix ยิ่งยาว ซับเน็ตยิ่งเล็ก',
  },
  {
    id: 53,
    kind: 'single',
    image: q53,
    prompt: 'Refer to the exhibit (Device ID / Local Intrfce / Holdtme / Capability / Platform / Port ID table). Which command provides this output?',
    options: [
      { key: 'A', text: 'show ip route' },
      { key: 'B', text: 'show ip interface' },
      { key: 'C', text: 'show interface' },
      { key: 'D', text: 'show cdp neighbor' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — CDP (Cisco Discovery Protocol) ค้นหาอุปกรณ์ Cisco ที่ต่ออยู่ข้าง ๆ (Layer 2, ทำงานได้แม้ยังไม่ตั้ง IP!)\n\n🔍 อ่านคอลัมน์ของ "show cdp neighbors" (จำหัวตารางนี้ให้ได้):\n• Device ID → ชื่อ (hostname) ของอุปกรณ์เพื่อนบ้าน\n• Local Intrfce → พอร์ต "ของเรา" ที่ต่อไปหาเขา\n• Holdtme → เหลือเวลากี่วินาทีก่อนลบข้อมูลนี้ทิ้ง (ค่าเริ่มต้น 180 วิ)\n• Capability → เขาเป็นอะไร (R=Router, S=Switch, H=Host, I=IGMP)\n• Platform → รุ่นฮาร์ดแวร์ของเขา\n• Port ID → พอร์ต "ของเขา" ที่ต่อกลับมาหาเรา\n\n✅ ทำไม D ถูก: หัวตารางชุดนี้ (Device ID / Local Intrfce / Holdtme / Capability / Platform / Port ID) เป็นเอกลักษณ์ของ "show cdp neighbors" เท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nA. show ip route → แสดง routing table (มีโค้ด C/S/O/D, prefix, next-hop) คนละรูปแบบเลย\nB. show ip interface → แสดง IP, สถานะ, ACL ที่ผูกอยู่ของแต่ละอินเทอร์เฟซ\nC. show interface → แสดงสถิติ (counters, errors, duplex, speed, MTU)\n\n⚠️ ความปลอดภัย: CDP เปิดเผยรุ่น/IOS version ให้ผู้โจมตี → ควรปิดบนพอร์ตที่ต่อออกภายนอก (no cdp enable)\n\n📗 จำไว้สอบ: CDP = Cisco เท่านั้น (ส่งทุก 60 วิ) | LLDP = มาตรฐานเปิด ข้ามยี่ห้อได้ (show lldp neighbors)',
  },
  {
    id: 54,
    kind: 'single',
    image: q54,
    prompt:
      'Refer to the exhibit (Switch1 Gi0/1 trunk, native VLAN 1; Switch2 Gi0/1 trunk, native VLAN 99). After the switch configuration the ping test fails between PC A and PC B. Based on the output for switch 1, which error must be corrected?',
    options: [
      { key: 'A', text: 'There is a native VLAN mismatch' },
      { key: 'B', text: 'Access mode is configured on the switch ports' },
      { key: 'C', text: 'The PCs are in the incorrect VLAN' },
      { key: 'D', text: 'All VLANs are not enabled on the trunk' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Native VLAN Mismatch:\nบน trunk 802.1Q ทุก VLAN ถูกติดแท็ก ยกเว้น "native VLAN" ที่ส่งแบบ untagged\n→ เมื่อสวิตช์ปลายทางรับเฟรม "ไม่มีแท็ก" มันจะเดาว่าเป็นของ native VLAN "ของตัวเอง"\n\n🔍 วิเคราะห์จาก exhibit:\n• Switch1 → native VLAN = 1\n• Switch2 → native VLAN = 99\n→ Switch1 ส่งทราฟฟิก VLAN 1 แบบ untagged ออกไป\n→ Switch2 รับมา แล้วคิดว่า "นี่คือ VLAN 99!" (เพราะ native ของตัวเองคือ 99)\n→ ⚠️ ทราฟฟิกไปโผล่ผิด VLAN → PC A ping PC B ไม่ผ่าน!\n\n✅ ทำไม A ถูก: native VLAN ทั้งสองฝั่งไม่ตรงกัน (1 vs 99) = native VLAN mismatch\nวิธีแก้: ตั้งให้ตรงกันทั้งสองฝั่ง เช่น "switchport trunk native vlan 99" บน Switch1\n\n⚠️ จุดสำคัญ: trunk ยัง "ฟอร์มขึ้นได้ปกติ" ไม่ล่ม ไม่ err-disable — แค่ขึ้น log เตือน\n   %CDP-4-NATIVE_VLAN_MISMATCH → นี่คือเบาะแสที่ IOS บอกเราตรง ๆ\n\n❌ ทำไมข้ออื่นผิด:\nB. พอร์ตถูกตั้งเป็น trunk แล้ว (ไม่ใช่ access mode) ตาม exhibit\nC. PC อยู่ VLAN ที่ถูกต้อง — ปัญหาอยู่ที่ trunk ไม่ใช่ที่ access port ของ PC\nD. ปัญหาไม่ใช่ VLAN ถูกตัดออกจาก allowed list แต่เป็นเรื่อง native VLAN ไม่ตรงกัน\n\n📗 จำไว้สอบ: native VLAN ไม่ตรง = สอง VLAN ถูกหลอมรวมกัน (security risk → VLAN hopping ได้!)',
  },
  {
    id: 55,
    kind: 'single',
    prompt: 'Which API is used in controller-based architectures to interact with edge devices?',
    options: [
      { key: 'A', text: 'overlay' },
      { key: 'B', text: 'northbound' },
      { key: 'C', text: 'underlay' },
      { key: 'D', text: 'southbound' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ทิศทางของ API ใน SDN (จำภาพแผนที่: เหนือ=แอป, ใต้=อุปกรณ์):\n\n        [Applications / ผู้ดูแล]\n              ↕  ⬆️ Northbound API → มักเป็น REST/JSON\n        [SDN Controller]\n              ↕  ⬇️ Southbound API → OpenFlow, NETCONF, RESTCONF, OpFlex, SNMP, CLI\n     [Switches / Routers / Edge devices]\n\n✅ ทำไม D ถูก: โจทย์ถามถึง API ที่ controller ใช้ "คุยกับ edge device" (อุปกรณ์เครือข่ายจริงที่อยู่ข้างล่าง) → นั่นคือ Southbound API\n\n❌ ทำไมข้ออื่นผิด:\nB. Northbound → ใช้คุยกับ "แอปพลิเคชัน/ผู้ดูแล" ที่อยู่ข้างบน controller (ตรงข้ามกับที่โจทย์ถาม)\nA. Overlay → เป็นชื่อ "เครือข่ายเสมือน" ที่สร้างทับบนเครือข่ายจริง (เช่น VXLAN) ไม่ใช่ API\nC. Underlay → เป็นชื่อ "เครือข่ายกายภาพ" ที่รองรับ overlay อยู่ข้างล่าง ก็ไม่ใช่ API เช่นกัน\n\n📗 จำไว้สอบ: controller → อุปกรณ์ = Southbound | controller → แอป/คน = Northbound\n(Overlay/Underlay เป็นคำเกี่ยวกับ "เครือข่าย" ไม่ใช่ "API" — เป็นตัวลวงที่เจอบ่อย)',
  },
  {
    id: 56,
    kind: 'single',
    prompt: 'Which statement identifies the functionality of virtual machines?',
    options: [
      { key: 'A', text: 'Virtualized servers run most efficiently when they are physically connected to a switch that is separate from the hypervisor' },
      { key: 'B', text: 'The hypervisor can virtualize physical components including CPU, memory, and storage' },
      { key: 'C', text: 'Each hypervisor can support a single virtual machine and a single software switch' },
      { key: 'D', text: 'The hypervisor communicates on Layer 3 without the need for additional resources' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Hypervisor คือชั้นซอฟต์แวร์ที่คั่นระหว่างฮาร์ดแวร์จริงกับ VM มีหน้าที่ "จำลองและจัดสรร" ทรัพยากรกายภาพ (CPU, RAM, storage, NIC) แบ่งให้ VM หลายตัวใช้ร่วมกันอย่างแยกจากกัน (isolation)\n\n🔹 Type 1 (bare-metal) → ติดตั้งบนฮาร์ดแวร์โดยตรง เช่น VMware ESXi, Hyper-V, KVM ← ใช้ใน data center\n🔹 Type 2 (hosted) → ติดตั้งบน OS อีกที เช่น VirtualBox, VMware Workstation ← ใช้บนเครื่องส่วนตัว\n\n✅ ทำไม B ถูก: หน้าที่แก่นของ hypervisor คือ virtualize ทรัพยากรกายภาพ (CPU, memory, storage) ให้ VM ใช้ — ตรงตามนิยาม\n\n❌ ทำไมข้ออื่นผิด:\nC. hypervisor หนึ่งตัวรองรับ VM ได้ "หลายตัว" (นั่นคือจุดประสงค์ทั้งหมดของ virtualization!) และรองรับ virtual switch ได้หลายตัวด้วย\nA. VM เชื่อมต่อผ่าน virtual switch ที่อยู่บน hypervisor ไม่ได้ต้องต่อสวิตช์กายภาพแยกต่างหากเพื่อประสิทธิภาพ\nD. hypervisor ไม่ได้ทำงานที่ Layer 3 — virtual switch ที่มันสร้างทำงานที่ Layer 2 (เหมือนสวิตช์ทั่วไป)\n\n📗 จำไว้สอบ: VM แต่ละตัวมี OS ของตัวเองแยกกัน แต่ "แชร์ฮาร์ดแวร์จริง" ผ่าน hypervisor',
  },
  {
    id: 57,
    kind: 'single',
    prompt: 'Which type of address is the public IP address of a NAT device?',
    options: [
      { key: 'A', text: 'outside global' },
      { key: 'B', text: 'outside local' },
      { key: 'C', text: 'inside global' },
      { key: 'D', text: 'inside local' },
      { key: 'E', text: 'outside public' },
      { key: 'F', text: 'inside public' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำศัพท์ NAT 4 ตัว (ตารางนี้ออกสอบทุกครั้ง!):\n\n💡 เคล็ดจำ: "Inside/Outside" = อุปกรณ์อยู่ฝั่งไหน | "Local/Global" = มองจากมุมไหน (ภายใน/ภายนอก)\n\n• Inside Local → IP จริงของโฮสต์ภายใน = private เช่น 192.168.1.10\n• ⭐ Inside Global → IP ที่โลกภายนอกเห็นแทนโฮสต์ภายใน = public (มักเป็น IP บนพอร์ต WAN ของ router NAT)\n• Outside Global → IP จริงของเซิร์ฟเวอร์ภายนอก = public เช่น 8.8.8.8\n• Outside Local → IP ของเซิร์ฟเวอร์ภายนอกในมุมมองของภายใน (ปกติเท่ากับ outside global)\n\n✅ ทำไม C ถูก: "public IP ของอุปกรณ์ NAT" คือ address ที่ใช้แทนโฮสต์ภายในเมื่อออกสู่โลกภายนอก = Inside Global (เป็น IP สาธารณะที่ ISP จัดสรรให้)\n\n❌ ทำไมข้ออื่นผิด:\nD. inside local → เป็น IP private ภายในก่อนถูกแปล (ไม่ใช่ public)\nA, B. outside global / outside local → หมายถึงโฮสต์ "ปลายทางภายนอก" ไม่ใช่ตัวอุปกรณ์ NAT เอง\nE, F. "outside public" / "inside public" → ไม่ใช่คำศัพท์ที่มีอยู่จริงในนิยาม NAT ของ Cisco (ตัวลวงล้วน ๆ)\n\n📗 จำไว้สอบ: ทราฟฟิกขาออก NAT เปลี่ยน source: inside local → inside global',
  },
  {
    id: 58,
    kind: 'single',
    prompt: 'Which option about JSON is true?',
    options: [
      { key: 'A', text: 'uses predefined tags or angle brackets () to delimit markup text' },
      { key: 'B', text: 'used to describe structured data that includes arrays' },
      { key: 'C', text: 'used for storing information' },
      { key: 'D', text: 'similar to HTML, it is more verbose than XML' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — JSON (JavaScript Object Notation) โครงสร้างข้อมูลที่ REST API ใช้มากที่สุด\n\n📦 ชนิดข้อมูลใน JSON:\n• Object → { } คู่ "key": value ไม่เรียงลำดับ\n• ⭐ Array → [ ] รายการที่เรียงลำดับ เช่น "cars": ["Ford", "BMW", "Fiat"]\n• String "R1" • Number 100 • Boolean true/false • null\n\nตัวอย่าง:\n{\n  "hostname": "R1",\n  "interfaces": ["Gi0/0", "Gi0/1"],   ← array!\n  "up": true\n}\n\n✅ ทำไม B ถูก: JSON ใช้อธิบายข้อมูลที่มีโครงสร้าง (structured data) และรองรับ array ได้เต็มรูปแบบ — ตรงตามนิยาม\n\n❌ ทำไมข้ออื่นผิด:\nA. การใช้ tag และวงเล็บมุม <> เป็นลักษณะของ XML/HTML — JSON ใช้ { } และ [ ] ไม่มี tag\nD. กลับกัน! JSON "กระชับกว่า" XML มาก (ไม่ต้องมี tag เปิด-ปิด) จึงเป็นที่นิยมกว่า\nC. "ใช้เก็บข้อมูล" กว้างเกินไปจนไม่ผิดแต่ก็ไม่ได้ระบุลักษณะเฉพาะของ JSON — ข้อ B อธิบายได้ตรงและเจาะจงกว่า\n\n📗 จำไว้สอบ: { } = object (คู่ key:value) | [ ] = array (รายการเรียงลำดับ) — สองอันนี้ชอบถามสลับกัน',
  },
  {
    id: 59,
    kind: 'single',
    prompt: 'How do TCP and UDP differ in the way they provide reliability for delivery of packets?',
    options: [
      { key: 'A', text: 'TCP is a connectionless protocol that does not provide reliable delivery of data, UDP is a connection-oriented protocol that uses sequencing to provide reliable delivery' },
      { key: 'B', text: 'TCP does not guarantee delivery or error checking to ensure that there is no corruption of data, UDP provides message acknowledgement and retransmits data if lost' },
      { key: 'C', text: 'TCP provides flow control to avoid overwhelming a receiver by sending too many packets at once, UDP sends packets to the receiver in a continuous stream without checking for sequencing' },
      { key: 'D', text: 'TCP uses windowing to deliver packets reliably; UDP provides reliable message transfer between hosts by establishing a three-way handshake' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กลไก "ความน่าเชื่อถือ" ของ TCP ที่ UDP ไม่มีเลย:\n\n🔵 TCP มีครบ:\n• Three-way handshake (SYN → SYN-ACK → ACK) สร้างการเชื่อมต่อก่อนส่ง\n• Sequence number → เรียงลำดับข้อมูลถูกต้อง\n• Acknowledgement (ACK) → ยืนยันว่าได้รับแล้ว\n• Retransmission → ส่งซ้ำถ้าข้อมูลหาย\n• ⭐ Flow control (Windowing) → ปรับขนาดหน้าต่างส่ง ไม่ให้ส่งเร็วเกินกว่าฝั่งรับจะรับไหว (ป้องกัน buffer ล้น)\n\n🟢 UDP ไม่มีอะไรเลย:\n• ส่งเป็นสตรีมต่อเนื่อง ไม่รอ ACK ไม่เรียงลำดับ ไม่ส่งซ้ำ ไม่มี flow control\n\n✅ ทำไม C ถูก: อธิบายถูกทั้งสองฝั่ง — TCP มี flow control กัน receiver ล้น ส่วน UDP ส่งเป็นสตรีมต่อเนื่องโดยไม่ตรวจลำดับ\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับกันหมด — TCP ต่างหากที่ connection-oriented และ reliable ส่วน UDP ต่างหากที่ connectionless\nB. สลับกันชัดเจน — TCP ต่างหากที่มี ACK และ retransmit ส่วน UDP ไม่มี\nD. ถูกครึ่งเดียว — TCP ใช้ windowing จริง แต่ UDP "ไม่มี" three-way handshake และไม่ reliable เลย\n\n📗 จำไว้สอบ: Windowing = TCP เท่านั้น | UDP = fire and forget (ยิงแล้วลืม)',
  },
  {
    id: 60,
    kind: 'multi',
    prompt: 'Which two command sequences must you configure on a switch to establish a Layer 3 EtherChannel with an open-standard protocol? (Choose two)',
    options: [
      { key: 'A', text: 'interface GigabitEthernet0/0\nchannel-group 10 mode on' },
      { key: 'B', text: 'interface GigabitEthernet0/0\nchannel-group 10 mode active' },
      { key: 'C', text: 'interface GigabitEthernet0/0\nchannel-group 10 mode auto' },
      { key: 'D', text: 'interface port-channel 10\nswitchport\nswitchport mode trunk' },
      { key: 'E', text: 'interface port-channel 10\nno switchport\nip address 172.16.0.1 255.255.255.0' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — โจทย์มี 2 เงื่อนไข ต้องตอบให้ครบทั้งคู่:\n\n1️⃣ "open-standard protocol" → ต้องเป็น LACP (802.3ad) ไม่ใช่ PAgP\n   • LACP (มาตรฐานเปิด ข้ามยี่ห้อได้) → โหมด active / passive\n   • PAgP (ของ Cisco เท่านั้น) → โหมด desirable / auto\n   • mode "on" → ไม่ใช้โปรโตคอลใดเลย (static)\n   → ต้องใช้ "channel-group 10 mode active" = ข้อ B ✔\n\n2️⃣ "Layer 3 EtherChannel" → port-channel ต้องมี IP address ของตัวเอง (ไม่ใช่ switchport)\n   • ค่าเริ่มต้นของพอร์ตสวิตช์คือ Layer 2 (switchport)\n   • ต้องสั่ง "no switchport" เพื่อเปลี่ยนเป็น routed port ก่อน\n   • แล้วจึงตั้ง ip address ได้\n   → "interface port-channel 10 / no switchport / ip address …" = ข้อ E ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. mode on → ไม่ใช้โปรโตคอลเจรจาเลย ขัดกับโจทย์ที่ต้องการ open-standard protocol\nC. mode auto → เป็นโหมดของ PAgP ซึ่งเป็นของ Cisco เท่านั้น ไม่ใช่ open standard\nD. "switchport mode trunk" → ทำให้เป็น Layer 2 EtherChannel ตรงข้ามกับที่โจทย์ต้องการ (Layer 3)\n\n📗 จำไว้สอบ: L2 EtherChannel → switchport + trunk | L3 EtherChannel → no switchport + ip address',
  },
  {
    id: 61,
    kind: 'single',
    prompt: 'What is an advantage of Cisco DNA Center versus traditional campus device management?',
    options: [
      { key: 'A', text: 'It supports numerous extensibility options including cross-domain adapters and third-party SDKs' },
      { key: 'B', text: 'It supports high availability for management functions when operating in cluster mode' },
      { key: 'C', text: 'It enables easy autodiscovery of network elements in a brownfield deployment' },
      { key: 'D', text: 'It is designed primarily to provide network assurance' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Cisco DNA Center ต่างจากการจัดการอุปกรณ์แบบเดิม (CLI ทีละกล่อง) ตรงที่เป็น "แพลตฟอร์มเปิด" ที่ต่อยอดได้ ผ่าน 4 ช่องทาง:\n\n1️⃣ Intent-based REST APIs → ให้แอปภายนอกสั่งงาน/ดึงข้อมูลเครือข่ายได้\n2️⃣ ⭐ Multivendor SDKs → จัดการอุปกรณ์ยี่ห้ออื่นได้ ไม่จำกัดแค่ Cisco\n3️⃣ ⭐ Cross-domain Adapters → เชื่อมข้ามโดเมน (เช่น ระบบความปลอดภัย)\n4️⃣ Process Adapters → เชื่อมกับระบบ ITSM เช่น ServiceNow\n\n✅ ทำไม A ถูก: "extensibility" (ความสามารถในการต่อยอด) ผ่าน cross-domain adapter และ third-party SDK คือข้อได้เปรียบหลักเหนือการจัดการแบบดั้งเดิมที่เป็นระบบปิด\n\n❌ ทำไมข้ออื่นผิด:\nB. HA แบบ cluster → เป็นคุณสมบัติที่ดี แต่ระบบจัดการแบบเดิมก็ทำ HA ได้ ไม่ใช่ "ข้อได้เปรียบเฉพาะตัว"\nC. autodiscovery ใน brownfield → เป็นฟีเจอร์หนึ่ง แต่เครื่องมือจัดการเดิม (เช่น Prime) ก็ discover อุปกรณ์ได้เช่นกัน\nD. "ออกแบบมาเพื่อ network assurance เป็นหลัก" → ไม่จริง! DNA Center ทำทั้ง design, provision, policy และ assurance — assurance เป็นแค่ส่วนหนึ่ง\n\n📗 จำไว้สอบ: เห็นคำว่า extensible / open / third-party / API / SDK → นึกถึง DNA Center ทันที',
  },
  {
    id: 62,
    kind: 'multi',
    image: q62,
    prompt:
      'Refer to the exhibit (iBGP route 10.0.0.0/30, RIP route 10.0.0.0/30, OSPF route 10.0.0.0/16, OSPF route 10.0.0.0/30, EIGRP route 10.0.0.1/32). A router received these five routes from different routing information sources. Which two routes does the router install in its routing table? (Choose two)',
    options: [
      { key: 'A', text: 'RIP route 10.0.0.0/30' },
      { key: 'B', text: 'iBGP route 10.0.0.0/30' },
      { key: 'C', text: 'OSPF route 10.0.0.0 (best AD for the overlapping /30 prefix)' },
      { key: 'D', text: 'EIGRP route 10.0.0.1/32' },
      { key: 'E', text: 'OSPF route 10.0.0.0/16' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิดหัวใจ — router ติดตั้ง route ลงตารางอย่างไร:\n⭐ กฎ: route ที่มี "prefix ต่างกัน" จะถูกติดตั้ง "ทั้งหมด" (อยู่ร่วมกันได้!)\n     แต่ route ที่ "prefix เหมือนกันเป๊ะ" จะแข่งกันด้วย AD → เหลือรอดตัวเดียว\n\n🔍 แยกกลุ่มตาม prefix:\n\n🟦 กลุ่ม 10.0.0.0/30 (prefix เดียวกัน 3 ตัว → ต้องแข่ง AD กัน):\n   • OSPF → AD 110 ⭐ ต่ำสุด ชนะ!\n   • RIP → AD 120 ✘ แพ้\n   • iBGP → AD 200 ✘ แพ้\n   → ติดตั้งได้แค่ OSPF ตัวเดียว = ข้อ C ✔\n\n🟩 กลุ่ม 10.0.0.0/16 (prefix ไม่ซ้ำใคร):\n   → ไม่มีคู่แข่ง แต่โจทย์ให้เลือกแค่ 2 และมันซ้ำซ้อนกับ /30 ที่เจาะจงกว่า\n\n🟨 กลุ่ม 10.0.0.1/32 (prefix ไม่ซ้ำใคร):\n   • EIGRP → ไม่มีใครมาแข่ง prefix นี้เลย → ติดตั้งได้แน่นอน = ข้อ D ✔\n\n✅ คำตอบ C, D: OSPF /30 (ชนะ AD) + EIGRP /32 (ไม่มีคู่แข่ง)\n\n📗 จำไว้สอบ: AD ใช้ตัดสิน "เมื่อ prefix เท่ากัน" เท่านั้น! ถ้า prefix ต่างกัน route อยู่ร่วมกันได้หมด (แล้วค่อยเลือกใช้ตอน forward ด้วย longest prefix match)',
  },
  {
    id: 63,
    kind: 'single',
    prompt: 'By default, how does EIGRP determine the metric of a route for the routing table?',
    options: [
      { key: 'A', text: 'It uses the bandwidth and delay values of the path to calculate the route metric' },
      { key: 'B', text: 'It uses a default metric of 10 for all routes that are learned by the router' },
      { key: 'C', text: 'It uses a reference bandwidth and the actual bandwidth of the connected link to calculate the route metric' },
      { key: 'D', text: 'It counts the number of hops between the receiving and destination routers and uses that value as the metric' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — metric ของแต่ละ routing protocol (ห้ามสับสน!):\n\n• ⭐ EIGRP → composite metric จาก Bandwidth + Delay (ค่าเริ่มต้น)\n   - Bandwidth = ค่า "ต่ำสุด" ตลอดเส้นทาง (คอขวด)\n   - Delay = "ผลรวม" ของทุกลิงก์ตลอดเส้นทาง\n   - มีค่า K1–K5 คุมสูตร: ค่าเริ่มต้น K1=1, K3=1, K2=K4=K5=0 → ใช้แค่ BW กับ Delay\n   - (Load และ Reliability ปิดอยู่โดยค่าเริ่มต้น)\n\n• OSPF → Cost = Reference Bandwidth (100 Mbps) ÷ Interface Bandwidth\n• RIP → Hop count (สูงสุด 15 hop)\n• BGP → ใช้ path attributes (AS-path, local preference ฯลฯ)\n\n✅ ทำไม A ถูก: EIGRP คำนวณ metric จาก bandwidth และ delay ของเส้นทางตามค่าเริ่มต้น\n\n❌ ทำไมข้ออื่นผิด:\nC. "reference bandwidth หารด้วย actual bandwidth" → เป็นสูตร Cost ของ OSPF ไม่ใช่ EIGRP (ตัวลวงหลัก!)\nD. hop count → เป็น metric ของ RIP\nB. metric คงที่ 10 → ไม่มีโปรโตคอลใดทำแบบนี้\n\n📗 จำไว้สอบ: EIGRP = BW + Delay | OSPF = Cost (จาก bandwidth) | RIP = Hop count',
  },
  {
    id: 64,
    kind: 'single',
    prompt: 'What is a difference between local AP mode and FlexConnect AP mode?',
    options: [
      { key: 'A', text: 'Local AP mode creates two CAPWAP tunnels per AP to the WLC' },
      { key: 'B', text: 'FlexConnect AP mode fails to function if the AP loses connectivity with the WLC' },
      { key: 'C', text: 'FlexConnect AP mode bridges the traffic from the AP to the WLC when local switching is configured' },
      { key: 'D', text: 'Local AP mode causes the AP to behave as if it were an autonomous AP' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Local mode vs FlexConnect mode:\n\n🔹 Local mode (ค่าเริ่มต้น — เหมาะกับ AP ในสำนักงานเดียวกับ WLC)\n   • ⭐ สร้าง CAPWAP tunnel 2 เส้น ไปยัง WLC เสมอ:\n     - Control tunnel → UDP 5246 (คำสั่ง/จัดการ)\n     - Data tunnel → UDP 5247 (ทราฟฟิกของ client ทั้งหมด)\n   • ทราฟฟิก client ทุกบิต ต้องวิ่งกลับไปที่ WLC ก่อน แล้วค่อยออก (centralized switching)\n   • ⚠️ ถ้า WLC ล่ม/ขาดการเชื่อมต่อ → AP หยุดให้บริการ\n\n🔹 FlexConnect mode (เหมาะกับ AP ที่สาขาไกล ๆ / ผ่าน WAN)\n   • ทำ local switching → ทราฟฟิก client สลับกันเองภายในสาขา ไม่ต้องวิ่งข้าม WAN กลับไป WLC\n   • ✔ ถ้า WLC ขาดการเชื่อมต่อ → ยังบริการ client ต่อได้ (standalone mode)\n\n✅ ทำไม A ถูก: Local mode สร้าง CAPWAP tunnel 2 เส้น (control + data) ไปยัง WLC ซึ่งเป็นความต่างชัดเจนจาก FlexConnect ที่สามารถ switch ทราฟฟิกในสาขาเองได้\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับกัน! FlexConnect ถูกออกแบบมาให้ "ยังทำงานต่อได้" เมื่อขาด WLC — ตัวที่หยุดทำงานคือ Local mode ต่างหาก\nC. กลับกันเช่นกัน — เมื่อตั้ง local switching ทราฟฟิกจะถูกสลับ "ภายในสาขา" ไม่ได้ถูก bridge กลับไป WLC\nD. Local mode ไม่ได้ทำตัวเป็น autonomous AP — มันพึ่ง WLC เต็มตัว (autonomous คือ AP ที่ทำงานเองไม่มี WLC)\n\n📗 จำไว้สอบ: WLC ล่ม → Local mode ดับ | FlexConnect ยังรอด',
  },
  {
    id: 65,
    kind: 'single',
    image: q65,
    prompt: 'Router R1 must send all traffic without a matching routing-table entry to 192.168.1.1. Which configuration accomplishes this task?',
    options: [
      { key: 'A', text: 'R1(config)#ip routing\nR1(config)#ip route default-route 192.168.1.1' },
      { key: 'B', text: 'R1(config)#ip routing\nR1(config)#ip route 192.168.1.1 0.0.0.0 0.0.0.0' },
      { key: 'C', text: 'R1(config)#ip routing\nR1(config)#ip route 0.0.0.0 0.0.0.0 192.168.1.1' },
      { key: 'D', text: 'R1(config)#ip routing\nR1(config)#ip default-gateway 192.168.1.1' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Default Route คือ "ทางออกสุดท้าย" (gateway of last resort) ใช้เมื่อไม่มี route ใดใน routing table ตรงกับปลายทางเลย\n\n🔧 Syntax ที่ถูกต้อง:\n   ip route 0.0.0.0 0.0.0.0 <next-hop-ip>\n           ↑network  ↑mask   ↑ปลายทางถัดไป\n\n💡 ทำไมต้อง 0.0.0.0 0.0.0.0?\nmask 0.0.0.0 = ไม่สนใจบิตใดเลย → match ได้กับทุก IP ปลายทาง\nแต่เพราะ prefix สั้นที่สุด (/0) → ตาม Longest Prefix Match มันจะถูกเลือก "เป็นอันดับสุดท้าย" เสมอ (ใช้ต่อเมื่อไม่มีอย่างอื่นตรง) ← นี่คือความฉลาดของการออกแบบ\n\n✅ ทำไม C ถูก: "ip route 0.0.0.0 0.0.0.0 192.168.1.1" เรียงลำดับถูกต้อง (network → mask → next-hop) ตรงตามที่โจทย์ต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nB. "ip route 192.168.1.1 0.0.0.0 0.0.0.0" → สลับตำแหน่ง! กลายเป็นบอกว่าปลายทางคือ 192.168.1.1 และ next-hop คือ 0.0.0.0 (ไม่มีความหมาย)\nD. "ip default-gateway" → ใช้กับอุปกรณ์ที่ "ไม่ได้ทำ routing" (สวิตช์ L2 หรือ router ที่สั่ง no ip routing) — แต่ที่นี่เปิด ip routing แล้ว จึงต้องใช้ ip route\nA. "ip route default-route …" → ไม่ใช่ syntax ที่มีอยู่จริงใน IOS\n\n📗 จำไว้สอบ: อุปกรณ์ทำ routing → ip route 0.0.0.0 0.0.0.0 | อุปกรณ์ไม่ทำ routing (L2 switch) → ip default-gateway',
  },
  {
    id: 66,
    kind: 'single',
    prompt: 'Which function does the range of private IPv4 addresses perform?',
    options: [
      { key: 'A', text: 'allows multiple companies to each use the same addresses without conflicts' },
      { key: 'B', text: 'provides a direct connection for hosts from outside of the enterprise network' },
      { key: 'C', text: 'ensures that NAT is not required to reach the internet with private range addressing' },
      { key: 'D', text: 'enables secure communications to the internet for all external hosts' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ทำไมถึงต้องมี Private IPv4 (RFC 1918)?\nIPv4 มีแค่ ~4.3 พันล้าน address ซึ่งไม่พอสำหรับทุกอุปกรณ์ในโลก\n→ แก้ด้วยการ "สงวน" บางช่วงไว้ให้ใช้ภายในองค์กร โดย ISP จะไม่ route address พวกนี้บนอินเทอร์เน็ต\n→ ผลคือ ทุกองค์กรใช้ 192.168.1.0/24 พร้อมกันได้ โดยไม่ชนกัน! (เพราะไม่มีใครเห็นข้ามองค์กร)\n\n📊 ช่วงที่สงวนไว้:\n• 10.0.0.0/8 • 172.16.0.0/12 (16–31) • 192.168.0.0/16\n\n✅ ทำไม A ถูก: ประโยชน์หลักของ private address คือหลายองค์กรใช้ช่วงเดียวกันซ้ำกันได้โดยไม่เกิด conflict → ช่วยประหยัด public IPv4 อย่างมหาศาล\n\n❌ ทำไมข้ออื่นผิด:\nB. โฮสต์ภายนอกเชื่อมต่อเข้ามาที่ private address โดยตรง "ไม่ได้" (ต้องทำ port forwarding / static NAT ก่อน)\nC. กลับกันเลย! private address ต้อง "พึ่ง NAT" เพื่อออกอินเทอร์เน็ต ไม่ใช่ทำให้ไม่ต้องใช้ NAT\nD. private address ไม่ได้ให้ "ความปลอดภัย" ในตัวเอง (ความปลอดภัยมาจาก firewall/NAT ไม่ใช่จากตัว address)\n\n📗 จำไว้สอบ: private address ออกเน็ตต้องผ่าน NAT/PAT เสมอ — ตัว address เองไม่มีคุณสมบัติด้านความปลอดภัยใด ๆ',
  },
  {
    id: 67,
    kind: 'single',
    prompt: 'What event has occurred if a router sends a notice level message to a syslog server?',
    options: [
      { key: 'A', text: 'A TCP connection has been torn down' },
      { key: 'B', text: 'An ICMP connection has been built' },
      { key: 'C', text: 'An interface line has changed status' },
      { key: 'D', text: 'A certificate has expired' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ระดับ Syslog Severity (0 = แย่สุด, 7 = ละเอียดสุด):\n   0 Emergency • 1 Alert • 2 Critical • 3 Error • 4 Warning\n   ⭐5 Notification • 6 Informational • 7 Debugging\n\n🔍 อ่านจากข้อความ syslog จริง — ตัวเลขตรงกลางคือ severity:\n   %LINEPROTO-5-UPDOWN: Line protocol on Interface Gi0/1, changed state to up\n              ↑ เลข 5 = Notification\n\n✅ ทำไม C ถูก: การที่ interface/line protocol เปลี่ยนสถานะ (up ↔ down) คือเหตุการณ์ที่ "ปกติแต่ควรรู้" → จัดอยู่ที่ level 5 (Notice) ตรงตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. การปิด TCP connection → เป็นเรื่องระดับ session ทั่วไป มักอยู่ที่ level 6 (Informational)\nB. การสร้าง ICMP connection → ICMP ไม่ได้มีการ "สร้างการเชื่อมต่อ" (เป็น connectionless) และไม่ใช่เหตุการณ์ระดับ notice\nD. Certificate หมดอายุ → เป็นเรื่องร้ายแรงกว่ามาก อยู่ระดับ Error/Warning (3–4)\n\n📗 จำไว้สอบ: %LINEPROTO-5-UPDOWN และ %LINK-3-UPDOWN เป็นสอง log ที่เจอบ่อยที่สุด — สังเกตเลขกลางคือ severity',
  },
  {
    id: 68,
    kind: 'multi',
    image: q68,
    prompt:
      'Refer to the exhibit (SW1#show spanning-tree vlan 30 → protocol rstp; Root ID Priority 32798, Cost 19, Port 1 (FastEthernet2/1)). What two conclusions should be made about this configuration? (Choose two)',
    options: [
      { key: 'A', text: 'The designated port is FastEthernet 2' },
      { key: 'B', text: 'This is a root bridge' },
      { key: 'C', text: 'The spanning-tree mode is Rapid PVST+' },
      { key: 'D', text: 'The spanning-tree mode is PVST+' },
      { key: 'E', text: 'The root port is FastEthernet 2' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — อ่านผลลัพธ์ "show spanning-tree" ให้เป็น:\n\n🔍 ส่วน "Root ID" = ข้อมูลของ root bridge (อาจเป็นตัวเราหรือคนอื่น)\n   • Cost → ต้นทุนรวมจากเราไปถึง root (ถ้าเป็น 0 = เราคือ root เอง!)\n   • ⭐ Port → พอร์ตที่ใช้ไปหา root = "Root Port"\n   • Cost 19 = ลิงก์ FastEthernet 100 Mbps 1 hop (ตารางค่า cost มาตรฐาน)\n\n🔍 ส่วน "Bridge ID" = ข้อมูลของสวิตช์ตัวเราเอง\n\n📊 STP Cost ที่ต้องจำ:\n   10 Mbps = 100 | 100 Mbps (Fa) = 19 | 1 Gbps = 4 | 10 Gbps = 2\n\n✅ วิเคราะห์:\n• เห็นคำว่า "protocol rstp" → นี่คือโหมด Rapid PVST+ (RSTP ที่ทำงานแยกต่อ VLAN) ไม่ใช่ STP เดิม\n• มี Root Port (Fa2/1) และ Cost = 19 (ไม่ใช่ 0) → ⭐ แสดงว่าสวิตช์ตัวนี้ "ไม่ใช่" root bridge\n  (เพราะ root bridge จะมี cost = 0 และ "ไม่มี" root port เลย — ทุกพอร์ตของมันเป็น designated port)\n\n📗 จำไว้สอบ: root bridge = cost 0 + ไม่มี root port + ทุกพอร์ตเป็น designated (forwarding หมด)\nRapid PVST+ = ค่าเริ่มต้นที่แนะนำของ Cisco (converge เร็วกว่า STP เดิมมาก)',
  },
  {
    id: 69,
    kind: 'multi',
    prompt: 'What are two fundamentals of virtualization? (Choose two)',
    options: [
      { key: 'A', text: 'The environment must be configured with one hypervisor that serves solely as a network manager to monitor SNMP traffic' },
      { key: 'B', text: 'It allows logical network devices to move traffic between virtual machines and the rest of the physical network' },
      { key: 'C', text: 'It allows multiple operating systems and applications to run independently on one physical server' },
      { key: 'D', text: 'It allows a physical router to directly connect NICs from each virtual machine into the network' },
      { key: 'E', text: 'It requires that some servers, virtual machines, and network gear reside on the Internet' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — พื้นฐานของ Virtualization:\n\n1️⃣ ⭐ หลาย OS / แอปพลิเคชัน รันแยกอิสระจากกันบนเซิร์ฟเวอร์กายภาพ "ตัวเดียว"\n   • แต่ละ VM มี OS ของตัวเอง แยกขาดจากกัน (isolation)\n   • ทุกตัวแชร์ฮาร์ดแวร์จริง (CPU, RAM, disk, NIC) ผ่าน hypervisor\n   • ประโยชน์: ใช้ทรัพยากรเซิร์ฟเวอร์คุ้มค่าขึ้นมาก (เดิมเซิร์ฟเวอร์ 1 ตัวรัน 1 งาน ใช้ CPU แค่ 10%)\n\n2️⃣ ⭐ Virtual Switch (vSwitch) บน hypervisor\n   • เป็น "สวิตช์ซอฟต์แวร์" ที่เชื่อมทราฟฟิกระหว่าง VM ด้วยกัน\n   • และเชื่อมออกไปยังเครือข่ายกายภาพภายนอกผ่าน NIC จริง\n\n✅ ทำไม B, C ถูก: อุปกรณ์เครือข่ายเสมือนย้ายทราฟฟิกระหว่าง VM กับเครือข่ายจริง (B) และหลาย OS/แอปรันแยกกันบนเครื่องเดียว (C) — สองเสาหลักของ virtualization\n\n❌ ทำไมข้ออื่นผิด:\nA. hypervisor ไม่ได้มีหน้าที่เป็น "network manager คอย monitor SNMP" — หน้าที่มันคือจัดสรรทรัพยากรให้ VM\nD. router กายภาพไม่ได้ต่อเข้ากับ NIC ของแต่ละ VM โดยตรง — VM ต่อผ่าน virtual switch บน hypervisor ก่อนเสมอ\nE. virtualization ไม่ได้บังคับว่าต้องมีอะไรอยู่บนอินเทอร์เน็ต — ทำใน data center ส่วนตัวได้ทั้งหมด (นั่นคือ private cloud)\n\n📗 จำไว้สอบ: VM = OS instance ที่ถูกแยก (decouple) จากฮาร์ดแวร์ | vSwitch = ตัวเชื่อม VM เข้าเครือข่าย',
  },
  {
    id: 70,
    kind: 'single',
    prompt: 'What is the difference regarding reliability and communication type between TCP and UDP?',
    options: [
      { key: 'A', text: 'TCP is reliable and is a connection-oriented protocol; UDP is not reliable and is a connectionless protocol' },
      { key: 'B', text: 'TCP is not reliable and is a connection-oriented protocol; UDP is reliable and is a connectionless protocol' },
      { key: 'C', text: 'TCP is not reliable and is a connectionless protocol; UDP is reliable and is a connection-oriented protocol' },
      { key: 'D', text: 'TCP is reliable and is a connectionless protocol; UDP is not reliable and is a connection-oriented protocol' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — สรุปความต่างหลักของ TCP กับ UDP:\n\n🔵 TCP = Connection-oriented + Reliable\n   • มี three-way handshake (SYN → SYN-ACK → ACK) ก่อนส่ง\n   • มี ACK, sequence number, retransmission, flow control (windowing)\n   • header 20 ไบต์ (ใหญ่กว่า overhead สูงกว่า)\n   • ใช้กับ: HTTP/HTTPS, SSH, FTP, SMTP\n\n🟢 UDP = Connectionless + Best-effort\n   • ส่งได้ทันที ไม่ต้อง handshake ไม่มี ACK ไม่ retransmit\n   • header แค่ 8 ไบต์ → เร็วกว่า overhead ต่ำกว่า\n   • ใช้กับ: VoIP, วิดีโอสตรีม, DNS, DHCP, TFTP, SNMP, syslog\n\n📗 จำไว้สอบ: TCP = "ส่งให้ถึงแน่นอน (แต่ช้ากว่า)" | UDP = "ส่งให้เร็ว (แต่อาจหาย)"',
  },
  {
    id: 71,
    kind: 'single',
    image: q71,
    prompt:
      'Refer to the exhibit (EIGRP: 192.168.12.0/24, RIP: 192.168.12.0/27, OSPF: 192.168.12.0/28). How does the router manage traffic to 192.168.12.16?',
    options: [
      { key: 'A', text: 'It selects the RIP route because it has the longest prefix inclusive of the destination address' },
      { key: 'B', text: 'It chooses the OSPF route because it has the longest prefix inclusive of the destination address' },
      { key: 'C', text: 'It load-balances traffic between all three routes' },
      { key: 'D', text: 'It chooses the EIGRP route because it has the lowest administrative distance' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิดหัวใจ — ⭐ Longest Prefix Match มาก่อน AD เสมอ!\nrouter จะเลือก route ที่ "prefix ยาวที่สุด และครอบคลุมปลายทาง" ก่อน — AD จะถูกใช้ก็ต่อเมื่อ prefix เท่ากันเท่านั้น\n\n🧮 เช็คทีละเส้นว่าครอบคลุม 192.168.12.16 ไหม:\n\n• OSPF 192.168.12.0/28 → block 16 → ช่วง .0 – .15\n  → ❌ ไม่ครอบคลุม .16! (จบที่ .15 พอดี — กับดักหลักของข้อนี้!)\n  แม้ prefix จะยาวที่สุด แต่ "ไม่ match ปลายทาง" ก็ใช้ไม่ได้\n\n• ⭐ RIP 192.168.12.0/27 → block 32 → ช่วง .0 – .31\n  → ✔ ครอบคลุม .16 และเป็น prefix ที่ยาวที่สุดในบรรดาเส้นที่ครอบคลุมจริง\n\n• EIGRP 192.168.12.0/24 → ช่วง .0 – .255\n  → ✔ ครอบคลุม แต่ prefix สั้นกว่า (/24 < /27) → แพ้\n\n✅ ทำไม A ถูก: RIP /27 ชนะเพราะเป็น longest prefix ที่ครอบคลุมปลายทางจริง — แม้ AD ของ RIP (120) จะแย่ที่สุดในสามตัวก็ตาม!\n\n❌ ทำไมข้ออื่นผิด:\nB. OSPF /28 มี prefix ยาวกว่าก็จริง แต่ช่วงจบที่ .15 ไม่ครอบคลุม .16 → ไม่ถูกพิจารณาเลย\nD. EIGRP มี AD ต่ำสุด (90) จริง แต่ AD ไม่ได้ใช้ตัดสินเพราะ prefix ไม่เท่ากัน\nC. router ไม่ load-balance ข้ามโปรโตคอลต่างชนิดกัน\n\n📗 จำไว้สอบ: ต้องคำนวณช่วงก่อนเสมอ! prefix ยาวสุดไม่มีประโยชน์ถ้าไม่ครอบคลุมปลายทาง',
  },
  {
    id: 72,
    kind: 'single',
    prompt: 'How does Cisco DNA Center gather data from the network?',
    options: [
      { key: 'A', text: 'Network devices use different services like SNMP, syslog, and streaming telemetry to send data to the controller' },
      { key: 'B', text: 'Devices establish an IPsec tunnel to exchange data with the controller' },
      { key: 'C', text: 'Devices use the call-home protocol to periodically send data to the controller' },
      { key: 'D', text: 'The Cisco CLI Analyzer tool gathers data from each licensed network device and streams it to the controller' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Cisco DNA Center ทำ "network assurance" ได้ ก็เพราะมันดูดข้อมูลจากอุปกรณ์ตลอดเวลาผ่านหลายช่องทางมาตรฐานที่มีอยู่แล้ว:\n\n• SNMP → ดึงค่าสถานะ/สถิติ (CPU, memory, interface counters)\n• Syslog → รับ log เหตุการณ์ต่าง ๆ จากอุปกรณ์\n• ⭐ Streaming Telemetry → อุปกรณ์ "ผลัก" ข้อมูลออกมาแบบเรียลไทม์ต่อเนื่อง (push model)\n  ต่างจาก SNMP ที่ต้องคอย "ถาม" เป็นรอบ ๆ (poll model) → telemetry จึงเร็วและละเอียดกว่ามาก\n• NetFlow → ข้อมูลการไหลของทราฟฟิก\n\n✅ ทำไม A ถูก: DNA Center ใช้บริการมาตรฐานหลายตัวรวมกัน (SNMP + syslog + streaming telemetry) เพื่อรวบรวมข้อมูลจากอุปกรณ์มาวิเคราะห์\n\n❌ ทำไมข้ออื่นผิด:\nB. IPsec tunnel → ใช้เข้ารหัสทราฟฟิกใน VPN ไม่ใช่ช่องทางเก็บ telemetry\nC. call-home → เป็นฟีเจอร์แจ้งเตือน Cisco TAC เมื่อฮาร์ดแวร์มีปัญหา ไม่ใช่กลไกหลักของ DNA Center\nD. CLI Analyzer → เป็นเครื่องมือช่วยวิเคราะห์ output จาก CLI ด้วยมือ ไม่ได้สตรีมข้อมูลเข้า controller\n\n📗 จำไว้สอบ: SNMP = poll (ถาม) | Telemetry = push (อุปกรณ์ส่งเอง) — telemetry คือแนวทางยุคใหม่',
  },
  {
    id: 73,
    kind: 'drag',
    image: q73,
    prompt: 'Drag and drop the attack-mitigation techniques from the left onto the types of attack that they mitigate on the right.',
    categories: [
      { name: '802.1q double-tagging VLAN-hopping attack', items: ['configure the native VLAN with a nondefault VLAN ID'] },
      { name: 'MAC flooding attack', items: ['configure 802.1x authentication'] },
      { name: 'man-in-the-middle spoofing attack', items: ['configure DHCP snooping'] },
      { name: 'switch-spoofing VLAN-hopping attack', items: ['disable DTP'] },
    ],
    explanation:
      '📘 แนวคิด — จับคู่ "การโจมตี → วิธีป้องกัน" (ต้องแม่นมาก ออกสอบบ่อย):\n\n🔸 802.1Q Double-Tagging (VLAN hopping แบบใส่ tag 2 ชั้น)\n   วิธีโจมตี: ผู้โจมตีอยู่ใน native VLAN แล้วส่งเฟรมที่มี tag 2 ชั้น → สวิตช์แรกถอด tag นอกออก (เพราะเป็น native = untagged) เหลือ tag ในพาเฟรมข้ามไป VLAN เหยื่อ\n   → 🛡️ ป้องกัน: ตั้ง native VLAN เป็น VLAN ที่ไม่ได้ใช้ (nondefault) ผู้โจมตีจึงไม่ได้อยู่ใน native VLAN\n\n🔸 MAC Flooding (ยัด MAC ปลอมจนตาราง CAM เต็ม → สวิตช์ flood ทุกอย่างให้ดักอ่านได้)\n   → 🛡️ ป้องกัน: 802.1X (ต้องยืนยันตัวตนก่อนใช้พอร์ต) หรือ Port Security (จำกัดจำนวน MAC ต่อพอร์ต)\n\n🔸 Man-in-the-Middle / ARP spoofing (ปลอมเป็น gateway ดักอ่านทราฟฟิก)\n   → 🛡️ ป้องกัน: DHCP Snooping (สร้าง binding table IP↔MAC↔port) ทำงานคู่กับ DAI\n\n🔸 Switch Spoofing (VLAN hopping แบบปลอมตัวเป็นสวิตช์แล้วเจรจา trunk)\n   วิธีโจมตี: เสียบอุปกรณ์ที่ส่ง DTP เข้ามา หลอกให้พอร์ตกลายเป็น trunk → เห็นทุก VLAN!\n   → 🛡️ ป้องกัน: ปิด DTP (switchport nonegotiate) และตั้งพอร์ตเป็น access ชัดเจน\n\n📗 จำไว้สอบ: VLAN hopping มี 2 แบบ — double-tagging (แก้ด้วย native VLAN) และ switch-spoofing (แก้ด้วยปิด DTP)',
  },
  {
    id: 74,
    kind: 'single',
    image: q74,
    prompt:
      'Refer to the exhibit. The network administrator wants VLAN 67 traffic to be untagged between Switch 1 and Switch 2 while all other VLANs are to remain tagged. Which command accomplishes this task?',
    options: [
      { key: 'A', text: 'switchport access vlan 67' },
      { key: 'B', text: 'switchport trunk allowed vlan 67' },
      { key: 'C', text: 'switchport private-vlan association host 67' },
      { key: 'D', text: 'switchport trunk native vlan 67' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Native VLAN บน trunk 802.1Q:\nบนลิงก์ trunk ทุก VLAN จะถูก "ติดแท็ก" (tagged) ยกเว้น ⭐ native VLAN เพียงตัวเดียวที่ส่งแบบ "ไม่ติดแท็ก" (untagged)\n\n💡 ทำไมต้องมี native VLAN? → เพื่อรองรับอุปกรณ์เก่าที่อ่าน 802.1Q tag ไม่เป็น (เช่น hub) จะได้ยังสื่อสารได้\n\n✅ ทำไม D ถูก: โจทย์ต้องการให้ "VLAN 67 ไม่ติดแท็ก ส่วน VLAN อื่นยังติดแท็กตามปกติ" → ตรงกับนิยามของ native VLAN พอดี\nคำสั่ง: switchport trunk native vlan 67\n⚠️ ต้องตั้งให้ตรงกันทั้ง 2 ฝั่งของ trunk! ถ้าไม่ตรง → native VLAN mismatch → สอง VLAN จะถูกหลอมรวมกันโดยไม่ตั้งใจ\n\n❌ ทำไมข้ออื่นผิด:\nA. switchport access vlan 67 → เปลี่ยนพอร์ตเป็น access port (ส่งได้ VLAN เดียว) ขัดกับโจทย์ที่ต้องการให้ VLAN อื่นยังผ่าน trunk ได้\nB. switchport trunk allowed vlan 67 → จำกัดให้ trunk ผ่านได้แค่ VLAN 67 เท่านั้น (VLAN อื่นถูกตัดทิ้ง!) และ VLAN 67 ก็ยัง "ติดแท็ก" อยู่ดี\nC. private-vlan → เป็นคนละฟีเจอร์ (แยกการสื่อสารระหว่างพอร์ตใน VLAN เดียวกัน) ไม่เกี่ยวกับการติด/ไม่ติดแท็ก\n\n📗 จำไว้สอบ: native VLAN = untagged | allowed vlan = ควบคุมว่า VLAN ไหนผ่าน trunk ได้บ้าง — สองอันนี้คนละเรื่องกัน!',
  },
  {
    id: 75,
    kind: 'multi',
    prompt: 'What are two roles of the Dynamic Host Configuration Protocol (DHCP)? (Choose two)',
    options: [
      { key: 'A', text: 'The DHCP server offers the ability to exclude specific IP addresses from a pool of IP addresses' },
      { key: 'B', text: 'The DHCP client can request up to four DNS server addresses' },
      { key: 'C', text: 'The DHCP server assigns IP addresses without requiring the client to renew them' },
      { key: 'D', text: 'The DHCP server leases client IP addresses dynamically' },
      { key: 'E', text: 'The DHCP client maintains a pool of IP addresses it can assign' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — หน้าที่ของ DHCP Server:\n• เก็บ address pool ไว้แจก\n• ⭐ กันบาง IP ออกจาก pool ได้ (ip dhcp excluded-address) → เพื่อสงวนไว้ให้เซิร์ฟเวอร์/gateway/เครื่องพิมพ์ที่ตั้ง IP คงที่\n• ⭐ แจก IP แบบ "เช่า" (lease) มีอายุจำกัด → client ต้อง renew ก่อนหมดอายุ (ปกติ renew ที่ 50% ของ lease time)\n• แจก default gateway, subnet mask, DNS server ไปด้วย\n\n🔄 กระบวนการ DORA:\n   Discover (client ตะโกนหา) → Offer (server เสนอ IP) → Request (client ขอ) → Acknowledge (server ยืนยัน)\n\n✅ ทำไม A, D ถูก: การ exclude IP ออกจาก pool (A) และการแจก IP แบบ lease ชั่วคราว (D) เป็นสองบทบาทหลักของ DHCP server\n\n❌ ทำไมข้ออื่นผิด:\nC. ผิดตรงกันข้าม — DHCP แจกแบบมี lease time ที่ต้อง "renew" เสมอ ไม่ได้แจกถาวร\nE. สลับบทบาท! ตัวที่เก็บ address pool คือ "server" ไม่ใช่ "client" (client เป็นฝ่ายขอ)\nB. ไม่มีข้อกำหนดว่า client ขอ DNS ได้สูงสุด 4 ตัว — เป็นตัวเลขที่แต่งขึ้นมา\n\n📗 จำไว้สอบ: DHCP ใช้ UDP 67 (server) / 68 (client) และ DHCPDISCOVER เป็น broadcast → ข้าม subnet ต้องมี ip helper-address',
  },
  {
    id: 76,
    kind: 'multi',
    prompt: 'Which two minimum parameters must be configured on an active interface to enable OSPFv2 to operate? (Choose two)',
    options: [
      { key: 'A', text: 'OSPF area' },
      { key: 'B', text: 'OSPF MD5 authentication key' },
      { key: 'C', text: 'IPv6 address' },
      { key: 'D', text: 'OSPF process ID' },
      { key: 'E', text: 'OSPF stub flag' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — คำสั่งขั้นต่ำที่ทำให้ OSPFv2 ทำงานบนอินเทอร์เฟซ:\n\n   R1(config)# router ospf 1              ← ⭐ Process ID (บังคับ!)\n   R1(config-router)# network 10.0.0.0 0.0.0.255 area 0   ← ⭐ Area (บังคับ!)\n\nหรือแบบ interface-level:\n   R1(config-if)# ip ospf 1 area 0        ← มีทั้ง process ID และ area เช่นกัน\n\n✅ ทำไม A, D ถูก: ต้องมีทั้ง Process ID (เพื่อเปิด OSPF process) และ Area (เพื่อบอกว่าอินเทอร์เฟซนี้อยู่ area ไหน) — ขาดอย่างใดอย่างหนึ่งไม่ได้เลย\n\n❌ ทำไมข้ออื่นผิด:\nB. MD5 authentication → เป็น "ตัวเลือกเสริม" เพื่อความปลอดภัย ไม่ใช่สิ่งจำเป็นให้ OSPF ทำงาน\nE. Stub flag → เป็นตัวเลือกเสริมสำหรับปรับแต่ง area ไม่บังคับ\nC. IPv6 address → OSPFv2 ใช้กับ IPv4 เท่านั้น! (ถ้าเป็น IPv6 ต้องใช้ OSPFv3)\n\n⚠️ ข้อควรรู้: Process ID เป็นค่า "local" — R1 ใช้ 1 และ R2 ใช้ 99 ก็ยังเป็น neighbor กันได้ปกติ แต่ Area ต้องตรงกัน!\n\n📗 จำไว้สอบ: OSPFv2 = IPv4 | OSPFv3 = IPv6 | Process ID ไม่ต้องตรงกัน แต่ Area ต้องตรง',
  },
  {
    id: 77,
    kind: 'multi',
    prompt: 'Which two outcomes are predictable behaviors for HSRP? (Choose two.)',
    options: [
      { key: 'A', text: 'The two routers synchronize configurations to provide consistent packet forwarding' },
      { key: 'B', text: 'The two routers negotiate one router as the active router and the other as the standby router' },
      { key: 'C', text: 'Each router has a different IP address, both routers act as the default gateway on the LAN, and traffic is load-balanced between them' },
      { key: 'D', text: 'The two routers share a virtual IP address that is used as the default gateway for devices on the LAN' },
      { key: 'E', text: 'The two routers share the same interface IP address and default gateway traffic is load-balanced between them' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — HSRP (Hot Standby Router Protocol, ของ Cisco) ทำ default gateway ให้ทนทาน:\n\n🔄 การทำงาน:\n1. router 2 ตัวเจรจากันด้วย hello message (multicast 224.0.0.2, UDP 1985)\n2. ⭐ เลือกกันว่าใครเป็น Active (ตัวที่ forward จริง) และใครเป็น Standby (ตัวสำรองรอ)\n   → priority สูงสุดชนะ (ค่าเริ่มต้น 100) ถ้าเท่ากันดู IP สูงสุด\n3. ⭐ ทั้งคู่แชร์ Virtual IP + Virtual MAC (0000.0C07.ACxx) ร่วมกัน\n4. host ในวงตั้ง default gateway เป็น "virtual IP" → ไม่รู้เลยว่าเบื้องหลังใครทำงานอยู่\n5. ถ้า Active ล่ม → Standby รับช่วงต่อภายในไม่กี่วินาที host ไม่ต้องเปลี่ยนอะไรเลย\n\n✅ ทำไม B, D ถูก: HSRP เลือก active/standby (B) และแชร์ virtual IP เป็น default gateway (D) — ตรงตามกลไกหลัก\n\n❌ ทำไมข้ออื่นผิด:\nA. HSRP ไม่ได้ sync configuration ระหว่าง router (แต่ละตัวยังมี config ของตัวเอง)\nC, E. ⚠️ HSRP "ไม่ทำ load-balancing"! ณ ขณะหนึ่งมีเพียง Active ตัวเดียวที่ forward ทราฟฟิก ส่วน Standby นั่งรอเฉย ๆ\n   → ตัวที่ load-balance ได้จริงคือ GLBP (ของ Cisco เช่นกัน)\n\n📗 จำไว้สอบ: HSRP/VRRP = redundancy อย่างเดียว (active/standby) | GLBP = redundancy + load balancing',
  },
  {
    id: 78,
    kind: 'multi',
    prompt: 'Several new coverage cells are required to improve the Wi-Fi network of an organization. Which two standard designs are recommended? (Choose two.)',
    options: [
      { key: 'A', text: '5GHz provides increased network capacity with up to 23 nonoverlapping channels' },
      { key: 'B', text: 'For maximum throughput, the WLC is configured to dynamically set adjacent access points to different, nonoverlapping channels' },
      { key: 'C', text: '5GHz channel selection requires an autonomous access point' },
      { key: 'D', text: 'Adjacent cells with overlapping channels use a repeater access point' },
      { key: 'E', text: 'Cells that overlap one another are configured to use nonoverlapping channels' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — หลักการออกแบบ WLAN (channel planning):\n\n📡 2.4 GHz → มี nonoverlapping channel แค่ 3 ช่อง: 1, 6, 11\n📡 5 GHz → มี nonoverlapping channel มากถึง ~23 ช่อง (จึงแออัดน้อยกว่ามาก)\n\n⭐ กฎทอง: AP ที่พื้นที่สัญญาณ (cell) ซ้อนทับกัน ต้องใช้ "channel ที่ไม่ทับซ้อนกัน"\nเพราะถ้าใช้ channel เดียวกัน/ทับกัน → เกิด co-channel interference → อุปกรณ์ต้องผลัดกันส่ง → throughput ตกฮวบ\n\n🤖 RRM (Radio Resource Management) บน WLC จะทำสิ่งนี้ให้อัตโนมัติ:\n   • DCA (Dynamic Channel Assignment) → จัด channel ให้ AP ข้างเคียงไม่ชนกัน\n   • TPC (Transmit Power Control) → ปรับกำลังส่งไม่ให้กวนกันเอง\n\n✅ ทำไม B, E ถูก: ให้ WLC/RRM จัด channel ให้ AP ข้างเคียงต่างกันโดยอัตโนมัติ (B) และเซลล์ที่ซ้อนทับกันต้องใช้ nonoverlapping channel (E) — ทั้งคู่คือแนวปฏิบัติมาตรฐาน\n\n❌ ทำไมข้ออื่นผิด:\nA. 5 GHz มี channel เยอะจริง แต่ข้อนี้เป็น "ข้อเท็จจริง" ไม่ใช่ "หลักการออกแบบ (design)" ที่โจทย์ถาม\nC. การเลือก channel ใน 5 GHz ไม่ได้ต้องใช้ autonomous AP — controller-based ก็ทำได้ (และทำได้ดีกว่าด้วย RRM)\nD. การใช้ repeater กับเซลล์ที่ channel ทับกัน → ยิ่งเพิ่มการรบกวนและลด throughput ลงครึ่งหนึ่ง\n\n📗 จำไว้สอบ: 2.4 GHz = 1, 6, 11 เท่านั้น! (ท่องให้ขึ้นใจ)',
  },
  {
    id: 79,
    kind: 'single',
    image: q79,
    prompt:
      'Refer to the exhibit (Router1 connects to MPLS via 10.10.12.0/30, to Internet via 10.10.11.0/30, and to Switch1/VLAN20 via 10.10.10.0/28; static default route via 10.10.11.2). Which path is used by the router for internet traffic?',
    options: [
      { key: 'A', text: '209.165.200.0' },
      { key: 'B', text: '10.10.10.0' },
      { key: 'C', text: '0.0.0.0/0' },
      { key: 'D', text: '10.10.13.0' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ทราฟฟิกอินเทอร์เน็ตมีปลายทางได้เป็นล้าน ๆ IP ทั่วโลก router ไม่มีทางเก็บ route ครบทุกอันได้\n→ จึงใช้ "default route" (0.0.0.0/0) เป็นทางออกสุดท้าย = gateway of last resort\n\n🔍 อ่านจาก routing table:\n   ⭐ S* 0.0.0.0/0 [1/0] via 10.10.11.2\n   • S = Static route | * = candidate default (คือ gateway of last resort)\n   • [1/0] = AD 1 (static) / metric 0\n   • next-hop 10.10.11.2 = ฝั่งตรงข้ามของลิงก์ 10.10.11.0/30 ซึ่งต่อกับ Internet cloud\n\n✅ ทำไม C ถูก: prefix ที่ router ใช้สำหรับทราฟฟิกอินเทอร์เน็ตคือ 0.0.0.0/0 — เพราะทราฟฟิกที่ไม่ตรงกับ route เฉพาะเจาะจงใด ๆ (10.10.10.0/28 ของ VLAN, 10.10.12.0/30 ของ MPLS) จะตกมาที่ default route นี้เสมอ\n\n❌ ทำไมข้ออื่นผิด:\nB. 10.10.10.0/28 → เป็นเครือข่ายภายในของ VLAN 20 (ทราฟฟิกในบ้าน ไม่ใช่ออกอินเทอร์เน็ต)\nD. 10.10.13.0 → เป็นเครือข่ายภายในอีกวง ไม่ใช่ทางออกอินเทอร์เน็ต\nA. 209.165.200.0 → เป็น prefix ที่เรียนมาทาง BGP/MPLS ไม่ใช่เส้นทางสำหรับทราฟฟิกอินเทอร์เน็ตทั่วไป\n\n📗 จำไว้สอบ: เห็น "S*" หรือ "Gateway of last resort is …" → นั่นคือ default route (0.0.0.0/0)',
  },
  {
    id: 80,
    kind: 'single',
    image: q80,
    prompt:
      'Refer to the exhibit (R1 E0/0 trunk to SW1 E0/0; SW1 E0/1 trunk allowed vlan 10 to SW2 E0/1; SW2 E0/2 access vlan 20). What commands are needed to add a subinterface to Ethernet0/0 on R1 to allow for VLAN 20, with IP address 10.20.20.1?',
    options: [
      { key: 'A', text: 'R1(config)#interface ethernet0/0\nR1(config)#encapsulation dot1q 20\nR1(config)#ip address 10.20.20.1 255.255.255.0' },
      { key: 'B', text: 'R1(config)#interface ethernet0/0.20\nR1(config-subif)#encapsulation dot1q 20\nR1(config-subif)#ip address 10.20.20.1 255.255.255.0' },
      { key: 'C', text: 'R1(config)#interface ethernet0/0.20\nR1(config-subif)#ip address 10.20.20.1 255.255.255.0' },
      { key: 'D', text: 'R1(config)#interface ethernet0/0\nR1(config-if)#ip address 10.20.20.1 255.255.255.0' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Router-on-a-Stick (ทำ inter-VLAN routing ด้วยพอร์ตเดียว):\nrouter มีพอร์ตกายภาพเส้นเดียวต่อกับ trunk ของสวิตช์ → ต้องแบ่งเป็น "subinterface" ทีละ VLAN\n\n🔧 ขั้นตอนที่ถูกต้อง (ทั้ง 3 บรรทัด ขาดไม่ได้!):\n   R1(config)# interface ethernet0/0.20          ← 1. สร้าง subinterface (เลข .20 นิยมตั้งให้ตรง VLAN)\n   R1(config-subif)# encapsulation dot1q 20      ← 2. ⭐ บอกว่า subinterface นี้รับผิดชอบ VLAN 20\n   R1(config-subif)# ip address 10.20.20.1 255.255.255.0   ← 3. ตั้ง IP = gateway ของ VLAN 20\n\n⚠️ บรรทัดที่ 2 สำคัญที่สุด! ถ้าไม่มี encapsulation dot1q → subinterface ไม่รู้ว่าตัวเองผูกกับ VLAN ไหน → ใช้งานไม่ได้เลย\n(หมายเหตุ: เลขหลังจุด (.20) เป็นแค่ชื่อ ไม่ได้กำหนด VLAN — VLAN ถูกกำหนดด้วย encapsulation เท่านั้น!)\n\n✅ ทำไม B ถูก: มีครบทั้ง 3 ขั้นตอน และอยู่ในโหมด config-subif ที่ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nC. ขาดบรรทัด "encapsulation dot1q 20" → subinterface ไม่ผูกกับ VLAN ใดเลย ใช้ไม่ได้ (กับดักหลัก!)\nA. ใช้ physical interface (e0/0) ไม่ใช่ subinterface และอยู่ผิดโหมด (config แทน config-subif)\nD. ตั้ง IP บน physical interface ตรง ๆ → รองรับได้แค่ VLAN เดียว ไม่ใช่ router-on-a-stick\n\n📗 จำไว้สอบ: ฝั่งสวิตช์ต้องตั้งพอร์ตนั้นเป็น "switchport mode trunk" ด้วย มิฉะนั้นจะไม่ส่ง tag มาให้ router',
  },
  {
    id: 81,
    kind: 'single',
    prompt: 'Which purpose does a northbound API serve in a controller-based networking architecture?',
    options: [
      { key: 'A', text: 'communicates between the controller and the physical network hardware' },
      { key: 'B', text: 'reports device errors to a controller' },
      { key: 'C', text: 'generates statistics for network hardware and traffic' },
      { key: 'D', text: 'facilitates communication between the controller and the applications' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ทิศทางของ API ใน SDN:\n\n        [Applications / ผู้ดูแล]\n              ↕  ⬆️ Northbound API ← โจทย์ถามอันนี้\n        [SDN Controller]\n              ↕  ⬇️ Southbound API\n     [Switches / Routers]\n\n🔹 Northbound API (ขึ้นเหนือ = ไปหาแอป)\n   • ให้แอปพลิเคชัน/ระบบจัดการ "สั่งงาน" หรือ "ดึงข้อมูล" จาก controller\n   • ผู้ดูแลบอกแค่ "เจตนา" (intent) เช่น "ให้ VLAN 10 คุยกับ VLAN 20 ไม่ได้"\n   • มักเป็น REST API (ใช้ HTTP + JSON) → เขียนโปรแกรมเรียกใช้ง่าย\n\n🔹 Southbound API (ลงใต้ = ไปหาอุปกรณ์)\n   • controller ใช้สั่งค่าลงอุปกรณ์จริง\n   • เช่น OpenFlow, NETCONF, RESTCONF, OpFlex, SNMP, CLI/SSH\n\n✅ ทำไม Northbound ถูก: เป็นช่องทางที่แอปพลิเคชันระดับบนใช้คุยกับ controller — ทำให้เขียนโปรแกรมควบคุมเครือข่ายได้โดยไม่ต้องรู้รายละเอียดอุปกรณ์แต่ละยี่ห้อ\n\n❌ ตัวลวง: "communicates between the controller and the physical network hardware" → นั่นคือ Southbound API (ทิศตรงข้าม!)\n\n📗 จำไว้สอบ: จำภาพแผนที่ — เหนือ (north) = แอป | ใต้ (south) = อุปกรณ์',
  },
  {
    id: 82,
    kind: 'single',
    image: q82,
    prompt:
      'Refer to the exhibit (ip arp inspection vlan 2-10; interface fastethernet0/1 → ip arp inspection trust). If the network environment is operating normally, which type of device must be connected to interface FastEthernet0/1?',
    options: [
      { key: 'A', text: 'DHCP client' },
      { key: 'B', text: 'access point' },
      { key: 'C', text: 'router' },
      { key: 'D', text: 'PC' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Trusted vs Untrusted ใน Dynamic ARP Inspection (DAI):\n\n🔒 Untrusted port (ค่าเริ่มต้นของทุกพอร์ตเมื่อเปิด DAI)\n   • ARP ทุกอันที่เข้ามาจะถูก "ตรวจสอบ" เทียบกับ DHCP snooping binding table\n   • ใช้กับพอร์ตที่ต่อ end-host (PC, โน้ตบุ๊ก) เพราะคือจุดที่ผู้โจมตีจะเสียบเข้ามา\n\n✅ Trusted port (ต้องตั้งเอง: ip arp inspection trust)\n   • ARP ผ่านได้เลย ไม่ต้องตรวจ\n   • ⭐ ใช้กับพอร์ต uplink ที่ต่อไปยังอุปกรณ์โครงสร้างพื้นฐานที่เราควบคุมเอง เช่น router (gateway) หรือสวิตช์ตัวอื่น\n\n💡 ทำไม router ต้องเป็น trusted?\n→ router คือ default gateway ซึ่งต้องตอบ ARP ให้ทุกเครื่องในวงอยู่ตลอดเวลา\n→ ถ้าตั้งเป็น untrusted แล้ว ARP ของ gateway ไม่ผ่านการตรวจ (เพราะ router มี IP แบบ static ไม่มีใน DHCP binding table) → ทั้งเครือข่ายจะใช้งานไม่ได้เลย!\n\n✅ ทำไม C ถูก: พอร์ต Fa0/1 ถูกตั้งเป็น trust → ในเครือข่ายที่ทำงานปกติ อุปกรณ์ที่ต่ออยู่ต้องเป็น router (uplink/gateway)\n\n❌ ทำไมข้ออื่นผิด:\nA, D. DHCP client / PC → เป็น end-host ที่ต้องเป็น "untrusted" และถูกตรวจสอบ (นี่คือจุดที่ผู้โจมตีอยู่!)\nB. access point → ก็นับเป็นอุปกรณ์ฝั่ง access ที่มี client ต่ออยู่ ควรเป็น untrusted\n\n📗 จำไว้สอบ: uplink/router/สวิตช์ตัวอื่น = trusted | พอร์ตที่ต่อผู้ใช้ = untrusted (หลักเดียวกับ DHCP snooping)',
  },
  {
    id: 83,
    kind: 'single',
    prompt: 'What is the primary purpose of a First Hop Redundancy Protocol?',
    options: [
      { key: 'A', text: 'It allows directly connected neighbors to share configuration information' },
      { key: 'B', text: 'It allows a router to use bridge priorities to create multiple loop-free paths to a single destination' },
      { key: 'C', text: 'It reduces routing failures by allowing Layer 3 load balancing between OSPF neighbors that have the same link metric' },
      { key: 'D', text: 'It reduces routing failures by allowing more than one router to represent itself as the default gateway of a network' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ปัญหาที่ FHRP มาแก้:\nPC ทุกเครื่องตั้ง default gateway ไว้ตัวเดียว (เช่น 192.168.1.1)\n→ ⚠️ ถ้า router ตัวนั้นล่ม → ทั้งวง LAN ออกไปไหนไม่ได้เลย = Single Point of Failure!\n→ จะให้ PC ทุกเครื่องไปแก้ gateway เองก็ทำไม่ได้ (มีเป็นร้อยเครื่อง)\n\n✅ FHRP แก้อย่างไร:\n• ให้ router ตั้งแต่ 2 ตัวขึ้นไป "แชร์ virtual IP + virtual MAC" ร่วมกัน\n• PC ตั้ง default gateway เป็น "virtual IP" นั้น\n• router เจรจากันเองว่าใครเป็น Active/Master (ตัวที่ทำงานจริง)\n• ⭐ ถ้าตัว Active ล่ม → ตัว Standby รับช่วง virtual IP/MAC ต่อทันที\n  → PC ไม่รู้ตัวเลย ไม่ต้องเปลี่ยนค่าอะไร ใช้งานต่อได้ราบรื่น\n\n📊 ตระกูล FHRP:\n• HSRP → Cisco เท่านั้น (Active/Standby) MAC 0000.0C07.ACxx\n• VRRP → มาตรฐานเปิด (Master/Backup) MAC 0000.5E00.01xx\n• GLBP → Cisco (ทำ load balancing ได้ด้วย!)\n\n✅ ทำไม D ถูก: ให้ router มากกว่าหนึ่งตัวทำตัวเป็น default gateway ของเครือข่าย → ลดความล้มเหลว\n\n❌ ทำไมข้ออื่นผิด:\nA. การแชร์ข้อมูล config ระหว่างเพื่อนบ้าน → ไม่ใช่หน้าที่ FHRP (แต่ละ router ยังมี config ของตัวเอง)\nB. "bridge priority" + "loop-free path" → นั่นคือ STP ไม่ใช่ FHRP\nC. load balancing ระหว่าง OSPF neighbor ที่ metric เท่ากัน → นั่นคือ ECMP ของ routing protocol ไม่ใช่ FHRP\n\n📗 จำไว้สอบ: FHRP = redundancy ของ "default gateway" (Layer 3) | STP = ป้องกัน loop (Layer 2)',
  },
  {
    id: 84,
    kind: 'single',
    prompt: 'What occurs to frames during the process of frame flooding?',
    options: [
      { key: 'A', text: 'Frames are sent to every port on the switch in the same VLAN except from the originating port' },
      { key: 'B', text: 'Frames are sent to every port on the switch that has a matching entry in the MAC address table' },
      { key: 'C', text: 'Frames are sent to all ports, including those that are assigned to other VLANs' },
      { key: 'D', text: 'Frames are sent to every port on the switch in the same VLAN' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Frame Flooding เกิดเมื่อไหร่?\nสวิตช์จะ flood เฟรมใน 3 กรณี:\n1. Unknown unicast → ไม่รู้จัก destination MAC (ยังไม่มีในตาราง CAM)\n2. Broadcast → destination MAC = FFFF.FFFF.FFFF\n3. Multicast → (ถ้าไม่ได้เปิด IGMP snooping)\n\n⭐ กฎการ flood มี 2 ข้อ ต้องครบทั้งคู่:\n1️⃣ ส่งออก "เฉพาะพอร์ตที่อยู่ใน VLAN เดียวกัน" เท่านั้น\n   → VLAN = broadcast domain → เฟรมข้าม VLAN เองไม่ได้ (ต้องผ่าน router)\n2️⃣ ⭐ "ยกเว้น" พอร์ตต้นทางที่รับเฟรมเข้ามา\n   → ถ้าส่งย้อนกลับไปทางเดิม ผู้ส่งจะได้รับเฟรมของตัวเอง = ไร้สาระและอาจเกิด loop\n\n✅ ทำไม A ถูก: ระบุครบทั้งสองเงื่อนไข — ส่งทุกพอร์ตใน VLAN เดียวกัน และยกเว้นพอร์ตต้นทาง\n\n❌ ทำไมข้ออื่นผิด:\nD. ขาดเงื่อนไข "ยกเว้นพอร์ตต้นทาง" → ถ้าส่งกลับไปหาผู้ส่งด้วยก็ผิด (กับดักหลัก! ต่างจาก A แค่จุดเดียว)\nC. ⚠️ ส่งข้ามไป VLAN อื่นด้วย → ผิดหลักการพื้นฐานของ VLAN (VLAN ต้องแยก broadcast domain จากกัน)\nB. ถ้า "มี entry ตรงกันในตาราง MAC" อยู่แล้ว → สวิตช์จะ forward ออกพอร์ตนั้นพอร์ตเดียว ไม่ต้อง flood เลย (การ flood เกิดตอน "ไม่รู้จัก" ต่างหาก)\n\n📗 จำไว้สอบ: อ่านตัวเลือกให้ครบ! A กับ D ต่างกันแค่วลี "except from the originating port" — และวลีนั้นแหละคือคำตอบ',
  },
  {
    id: 85,
    kind: 'single',
    image: q85,
    prompt:
      'Refer to the exhibit (RTR-1 Gi0/0 172.16.1.62/27 to SW-1 to PC-1 172.16.1.33/27; loopbacks 192.168.1.1, 192.168.2.1, 192.168.3.1). Which configuration on RTR-1 denies SSH access from PC-1 to any RTR-1 interface and allows all other traffic?',
    options: [
      { key: 'A', text: 'access-list 100 deny tcp host 172.16.1.33 any eq 22\naccess-list 100 permit ip any any\ninterface GigabitEthernet0/0\nip access-group 100 in' },
      { key: 'B', text: 'access-list 100 deny tcp host 172.16.1.33 any eq 22\naccess-list 100 permit ip any any\nline vty 0 15\nip access-group 100 in' },
      { key: 'C', text: 'access-list 100 deny tcp host 172.16.1.33 any eq 23\naccess-list 100 permit ip any any\ninterface GigabitEthernet0/0\nip access-group 100 in' },
      { key: 'D', text: 'access-list 100 deny tcp host 172.16.1.33 any eq 23\naccess-list 100 permit ip any any\nline vty 0 15\nip access-group 100 in' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โจทย์นี้มี 2 กับดักซ้อนกัน ต้องผ่านให้ครบทั้งคู่:\n\n🔑 กับดักที่ 1 — พอร์ตของ SSH:\n   • SSH = TCP 22 ⭐\n   • Telnet = TCP 23\n   → ต้องเลือกข้อที่เขียน "eq 22" (ตัด C, D ทิ้งทันที เพราะใช้ 23)\n\n🔑 กับดักที่ 2 — จะ apply ACL ตรงไหน?\nโจทย์บอกว่า deny SSH ไปยัง "any RTR-1 interface" (ทุกอินเทอร์เฟซ!)\n\n   ❌ ถ้า apply ที่ interface Gi0/0 (ip access-group)\n      → กรองแค่ทราฟฟิกที่วิ่งเข้าพอร์ตนั้น\n      → แต่ RTR-1 มี loopback ตั้ง 3 ตัว (192.168.1.1/2.1/3.1)!\n      → PC-1 ยัง SSH ไปที่ IP ของ loopback ได้อยู่ดี = ไม่ปิดครบ ✘\n\n   ✅ ถ้า apply ที่ line vty 0 15 (access-class)\n      → คุมการเข้าถึง "ตัว router เอง" ผ่านทุก vty line\n      → ไม่ว่า PC-1 จะ SSH ไปที่ IP ไหนของ RTR-1 ก็โดนบล็อกหมด ✔\n\n✅ ทำไม B ถูก: ใช้ eq 22 (SSH ถูกต้อง) + apply ที่ line vty 0 15 (ครอบคลุมทุกอินเทอร์เฟซ) + มี permit ip any any ท้าย ACL (ปล่อยทราฟฟิกอื่น)\n\n❌ ทำไมข้ออื่นผิด:\nA. พอร์ต 22 ถูก แต่ apply ที่ interface Gi0/0 → PC-1 ยัง SSH เข้า loopback ได้\nC, D. ใช้ eq 23 = Telnet ไม่ใช่ SSH → ผิดตั้งแต่พอร์ตแล้ว\n\n📗 จำไว้สอบ: คุมการเข้าถึง "ตัวอุปกรณ์เอง" (SSH/Telnet) → ใช้ access-class บน line vty\n              กรองทราฟฟิกที่ "วิ่งผ่าน" อุปกรณ์ → ใช้ ip access-group บน interface',
  },
  {
    id: 86,
    kind: 'multi',
    prompt: "In which two ways does a password manager reduce the chance of a hacker stealing a user's password? (Choose two.)",
    options: [
      { key: 'A', text: 'It automatically provides a second authentication factor that is unknown to the original user' },
      { key: 'B', text: 'It uses an internal firewall to protect the password repository from unauthorized access' },
      { key: 'C', text: 'It protects against keystroke logging on a compromised device or web site' },
      { key: 'D', text: 'It stores the password repository on the local workstation with built-in antivirus and anti-malware functionality' },
      { key: 'E', text: 'It encourages users to create stronger passwords' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — Password Manager ช่วยเรื่องความปลอดภัยอย่างไร:\n\n• ⭐ Auto-fill รหัสผ่านให้แทนการพิมพ์เอง → keylogger (โปรแกรมดักการกดแป้นพิมพ์) ดักอะไรไม่ได้เลย เพราะผู้ใช้ไม่ได้กดแป้น\n• ⭐ สุ่ม/แนะนำรหัสผ่านที่ยาวและซับซ้อน → ผู้ใช้กล้าตั้งรหัสที่แข็งแรงขึ้นเพราะไม่ต้องจำเอง\n• ทำให้ไม่ต้องใช้รหัสผ่านซ้ำกันหลายเว็บ (ลดความเสียหายเมื่อเว็บใดเว็บหนึ่งข้อมูลรั่ว)\n• เก็บรหัสในคลังที่เข้ารหัสด้วย master password ตัวเดียว\n\n✅ ทำไม C, E ถูก: ป้องกัน keystroke logging (C) และส่งเสริมให้ผู้ใช้ตั้งรหัสผ่านที่แข็งแรงขึ้น (E) — เป็นสองประโยชน์หลักที่แท้จริง\n\n❌ ทำไมข้ออื่นผิด:\nB. password manager ไม่ได้มี "firewall ภายใน" มาปกป้องคลังรหัสผ่าน (ใช้การเข้ารหัสต่างหาก)\nD. ไม่ได้มีฟังก์ชัน antivirus/anti-malware ในตัว และหลายตัวเก็บคลังบนคลาวด์ ไม่ใช่แค่บนเครื่อง\nA. ไม่มีข้อความนี้อยู่ในตัวเลือกที่ถูกต้อง\n\n📗 จำไว้สอบ: password manager แก้ปัญหา "คนตั้งรหัสง่าย + ใช้ซ้ำ" ซึ่งเป็นช่องโหว่อันดับ 1 ขององค์กร',
  },
  {
    id: 87,
    kind: 'single',
    prompt: 'Which technology is used to improve web traffic performance by proxy caching?',
    options: [
      { key: 'A', text: 'WSA' },
      { key: 'B', text: 'Firepower' },
      { key: 'C', text: 'ASA' },
      { key: 'D', text: 'FireSIGHT' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — อุปกรณ์ความปลอดภัยของ Cisco แต่ละตัวทำอะไร (ต้องแยกให้ออก):\n\n• ⭐ WSA (Web Security Appliance) → ทำหน้าที่เป็น web proxy\n   - Caching: เก็บสำเนาหน้าเว็บที่คนเข้าบ่อยไว้ → คนถัดไปโหลดจาก cache เร็วขึ้น + ประหยัดแบนด์วิดท์ WAN\n   - กรอง URL, สแกนมัลแวร์, บังคับ policy การใช้เว็บ\n• ESA (Email Security Appliance) → กรองอีเมล/สแปม/ฟิชชิง\n• ASA → firewall + VPN แบบดั้งเดิม\n• Firepower (NGFW) → firewall ยุคใหม่ + IPS + Advanced Malware Protection\n• FireSIGHT → ระบบจัดการ/มอนิเตอร์ของ Firepower\n\n✅ ทำไม A ถูก: โจทย์ถามถึงการเพิ่มประสิทธิภาพทราฟฟิกเว็บด้วย "proxy caching" ซึ่งเป็นหน้าที่โดยตรงของ WSA\n\n❌ ทำไมข้ออื่นผิด:\nC. ASA → เป็น firewall/VPN ไม่ได้ทำ web caching\nB. Firepower → เน้น NGFW/IPS/AMP ไม่ใช่ proxy caching\nD. FireSIGHT → เป็นแค่ระบบจัดการของ Firepower\n\n📗 จำไว้สอบ: WSA = Web (proxy/cache) | ESA = Email | ASA/Firepower = Firewall',
  },
  {
    id: 88,
    kind: 'single',
    prompt: 'Which type of attack can be mitigated by dynamic ARP inspection?',
    options: [
      { key: 'A', text: 'worm' },
      { key: 'B', text: 'malware' },
      { key: 'C', text: 'DDoS' },
      { key: 'D', text: 'man-in-the-middle' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ARP Spoofing นำไปสู่ Man-in-the-Middle อย่างไร:\n\n1. ปกติ PC อยากคุยกับ gateway (192.168.1.1) → ตะโกนถาม ARP ว่า "ใครคือ .1?"\n2. ⚠️ ผู้โจมตีตอบกลับปลอม ๆ ว่า "ฉันเอง!" (ส่ง MAC ของตัวเองมา)\n3. PC จึงส่งทราฟฟิกทั้งหมดไปให้ผู้โจมตีแทน gateway\n4. ผู้โจมตีแอบอ่าน/แก้ไข แล้วส่งต่อไป gateway จริง → เหยื่อไม่รู้ตัวเลย\n→ นี่คือ Man-in-the-Middle (คนกลางดักฟัง)\n\n🛡️ Dynamic ARP Inspection (DAI) แก้อย่างไร:\n• DHCP Snooping สร้างตาราง binding ไว้ก่อน (IP ↔ MAC ↔ port จริง ๆ)\n• DAI ดัก ARP ทุกอันบนพอร์ต untrusted แล้วเทียบกับตารางนั้น\n• ถ้า MAC-to-IP ไม่ตรง → ทิ้ง ARP ปลอมทันที ✔\n\n✅ ทำไม D ถูก: DAI ออกแบบมาเพื่อสกัด ARP spoofing โดยเฉพาะ ซึ่งเป็นรากของการโจมตีแบบ man-in-the-middle\n\n❌ ทำไมข้ออื่นผิด:\nA, B. worm / malware → ป้องกันด้วย antivirus, IPS, AMP ไม่ใช่ DAI (DAI ดูแค่ ARP)\nC. DDoS → ป้องกันด้วย rate limiting, firewall, scrubbing service — DAI ไม่เกี่ยว\n\n📗 จำไว้สอบ: DAI ต้องเปิด DHCP Snooping ก่อนเสมอ (เพราะต้องพึ่ง binding table ของมัน)',
  },
  {
    id: 89,
    kind: 'multi',
    prompt: 'What are two roles of Domain Name Services (DNS)? (Choose Two)',
    options: [
      { key: 'A', text: 'builds a flat structure of DNS names for more efficient IP operations' },
      { key: 'B', text: 'encrypts network traffic as it travels across a WAN by default' },
      { key: 'C', text: 'improves security by protecting IP addresses under Fully Qualified Domain Names (FQDNs)' },
      { key: 'D', text: 'enables applications to identify resources by name instead of IP address' },
      { key: 'E', text: 'allows a single host name to be shared across more than one IP address' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — DNS = "สมุดโทรศัพท์ของอินเทอร์เน็ต" แปลงชื่อที่คนจำง่าย → IP ที่เครื่องเข้าใจ\n\n🔹 บทบาทหลักของ DNS:\n• ⭐ ให้แอป/ผู้ใช้อ้างถึงทรัพยากรด้วย "ชื่อ" แทน IP (พิมพ์ cisco.com แทน 72.163.4.185)\n  → ประโยชน์: ถ้าเซิร์ฟเวอร์ย้าย IP ผู้ใช้ไม่ต้องรู้เลย แค่แก้ที่ DNS\n• ⭐ ชื่อเดียวชี้ไปได้หลาย IP (มีหลาย A record) → ใช้ทำ load balancing / redundancy\n  เช่น google.com ตอบกลับหลาย IP หมุนเวียนกันไป (round-robin DNS)\n• ใช้โครงสร้าง "ลำดับชั้น" (hierarchical): root → .com → cisco.com → www.cisco.com\n\n✅ ทำไม D, E ถูก: อ้างอิงด้วยชื่อแทน IP (D) และชื่อเดียวแมปได้หลาย IP (E) เป็นสองบทบาทหลักของ DNS\n\n❌ ทำไมข้ออื่นผิด:\nA. DNS ใช้โครงสร้างแบบ "ลำดับชั้น (hierarchical)" ไม่ใช่ "แบน (flat)" — นี่คือกับดัก!\nB. DNS ไม่ได้เข้ารหัสทราฟฟิกใด ๆ โดยค่าเริ่มต้น (query แบบเดิมส่งเป็น plain text ด้วยซ้ำ — ต้องใช้ DoH/DoT ถึงจะเข้ารหัส)\nC. DNS ไม่ได้ "ซ่อน/ปกป้อง" IP address — ตรงกันข้าม มันเปิดเผย IP ให้ทุกคนรู้ด้วยซ้ำ!\n\n📗 จำไว้สอบ: DNS ใช้ UDP 53 (query ทั่วไป) / TCP 53 (zone transfer) — record ที่ต้องรู้: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), PTR (reverse), NS, SOA',
  },
  {
    id: 90,
    kind: 'single',
    prompt: 'How do TCP and UDP differ in the way they guarantee packet delivery?',
    options: [
      { key: 'A', text: 'TCP uses checksum, acknowledgement, and retransmissions, and UDP uses checksums only' },
      { key: 'B', text: 'TCP uses two-dimensional parity checks, checksums, and cyclic redundancy checks and UDP uses retransmissions only' },
      { key: 'C', text: 'TCP uses checksum, parity checks, and retransmissions, and UDP uses acknowledgements only' },
      { key: 'D', text: 'TCP uses retransmissions, acknowledgement and parity checks and UDP uses cyclic redundancy checks only' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — กลไก "การันตีการส่งถึง" ของ TCP vs UDP:\n\n🔵 TCP มี 3 กลไก:\n• Checksum → ตรวจว่าข้อมูลเพี้ยนระหว่างทางไหม\n• ⭐ Acknowledgement (ACK) → ผู้รับตอบกลับยืนยันว่า "ได้รับแล้ว"\n• ⭐ Retransmission → ถ้าไม่ได้ ACK ภายในเวลาที่กำหนด → ส่งซ้ำอัตโนมัติ\n→ รวมกันจึงการันตีได้ว่าข้อมูลถึงปลายทางแน่นอนและครบถ้วน\n\n🟢 UDP มีแค่ 1 กลไก:\n• Checksum เท่านั้น → ตรวจได้แค่ว่าข้อมูล "เพี้ยนไหม" ถ้าเพี้ยนก็แค่ "ทิ้ง" ไปเฉย ๆ\n• ไม่มี ACK → ไม่รู้เลยว่าปลายทางได้รับหรือเปล่า\n• ไม่มี retransmission → หายก็หายเลย ไม่ส่งซ้ำ\n\n✅ ทำไม A ถูก: ระบุครบถูกต้อง — TCP ใช้ checksum + ACK + retransmission ส่วน UDP มีแค่ checksum\n\n❌ ทำไมข้ออื่นผิด:\nB. UDP ไม่มี retransmission เลย (และ "two-dimensional parity check" ไม่ใช่กลไกของ TCP)\nC. สลับกัน — UDP ไม่มี acknowledgement (ACK เป็นของ TCP)\nD. UDP ไม่มี CRC เป็นกลไกหลัก (CRC อยู่ที่ชั้น Layer 2 ต่างหาก) และ TCP ไม่ได้ใช้ parity check\n\n📗 จำไว้สอบ: UDP มีแค่ checksum → "ตรวจได้ว่าเพี้ยน แต่แก้ไม่ได้ ก็แค่ทิ้ง"',
  },
  {
    id: 91,
    kind: 'single',
    image: q91,
    prompt:
      'Refer to the exhibit (R1#show ip route: O 10.0.1.3/32 via 10.0.1.3; C 10.0.1.0/24 directly connected Serial0; O 10.0.1.5/32 [110/5] via 10.0.1.50; O 10.0.1.4/32 [110/10] via 10.0.1.4). What is the next hop address for traffic that is destined to host 10.0.1.5?',
    options: [
      { key: 'A', text: '10.0.1.3' },
      { key: 'B', text: '10.0.1.50' },
      { key: 'C', text: '10.0.1.4' },
      { key: 'D', text: 'Loopback0' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Longest Prefix Match: router เลือก route ที่ prefix ยาวที่สุดและครอบคลุมปลายทาง\n⭐ /32 = host route (เจาะจงโฮสต์เดียว) → เป็น prefix ที่ยาวที่สุดเท่าที่เป็นไปได้ → ชนะทุกอย่างเสมอ!\n\n🔍 เช็คทีละบรรทัดสำหรับปลายทาง 10.0.1.5:\n• C 10.0.1.0/24 directly connected → ครอบคลุม .0–.255 (รวม .5) ✔ แต่ prefix แค่ /24\n• O 10.0.1.3/32 → เจาะจงโฮสต์ .3 เท่านั้น → ❌ ไม่ใช่ .5\n• ⭐ O 10.0.1.5/32 [110/5] via 10.0.1.50 → ตรงเป๊ะกับปลายทาง .5! prefix /32 ยาวที่สุด ✔ ชนะ\n• O 10.0.1.4/32 → เจาะจงโฮสต์ .4 → ❌ ไม่ใช่ .5\n\n✅ ทำไม B ถูก: route 10.0.1.5/32 คือ longest match ที่ตรงกับปลายทางพอดี → next-hop คือ 10.0.1.50\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.0.1.3 → เป็น next-hop ของ route ไปยังโฮสต์ .3 (คนละปลายทาง)\nC. 10.0.1.4 → เป็น next-hop ของ route ไปยังโฮสต์ .4 (คนละปลายทาง)\nD. Loopback0 → เป็นอินเทอร์เฟซเสมือน ไม่ใช่ next-hop address\n\n⚠️ กับดัก: อย่าสับสนระหว่าง "ปลายทางของ route" (10.0.1.5) กับ "next-hop" (10.0.1.50) — สองอันนี้คนละตัวกัน!\n\n📗 จำไว้สอบ: /32 (host route) ชนะเสมอ ไม่ว่า AD จะเป็นเท่าไหร่',
  },
  {
    id: 92,
    kind: 'multi',
    prompt: 'What are two benefits of controller-based networking compared to traditional networking?',
    options: [
      { key: 'A', text: 'controller-based increases network bandwidth usage, while traditional lightens the load on the network' },
      { key: 'B', text: 'controller-based inflates software costs, while traditional decreases individual licensing costs' },
      { key: 'C', text: 'Controller-based reduces network configuration complexity, while traditional increases the potential for errors' },
      { key: 'D', text: 'Controller-based provides centralization of key IT functions, while traditional requires distributed management functions' },
      { key: 'E', text: 'controller-based allows for fewer network failures, while traditional increases failure rates' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ Traditional vs Controller-Based:\n\n🔸 Traditional Networking\n• เข้า CLI ตั้งค่าทีละกล่อง (มี 100 สวิตช์ = พิมพ์ 100 รอบ)\n• control plane + management plane กระจายอยู่ทุกอุปกรณ์\n• ⚠️ เสี่ยงพิมพ์ผิด/ตั้งค่าไม่สอดคล้องกัน (configuration drift)\n\n🔹 Controller-Based (SDN / Cisco DNA Center)\n• ⭐ รวมศูนย์การจัดการไว้ที่ controller (centralization)\n• กำหนด "นโยบาย" ครั้งเดียว → controller push ลงทุกอุปกรณ์ให้สอดคล้องกันเอง\n• ⭐ ลดความซับซ้อนและลดโอกาสผิดพลาดจากมนุษย์\n• มองเห็นภาพรวมทั้งเครือข่าย + automation + assurance\n\n✅ ทำไม C, D ถูก: ลดความซับซ้อนของการ config และลดโอกาสผิดพลาด (C) และรวมศูนย์ฟังก์ชัน IT สำคัญไว้ที่เดียว แทนการกระจายไปทุกอุปกรณ์ (D)\n\n❌ ทำไมข้ออื่นผิด:\nA. controller-based ไม่ได้ทำให้ "ใช้แบนด์วิดท์เพิ่มขึ้น" อย่างมีนัยสำคัญ (เป็นข้อความที่แต่งขึ้น)\nB. ไม่ใช่ประโยชน์ — การบอกว่า "ทำให้ค่าซอฟต์แวร์แพงขึ้น" เป็นข้อเสีย ไม่ใช่ข้อดี\nE. controller-based ไม่ได้รับประกันว่า "จะมี failure น้อยลง" โดยตรง (มันช่วยเรื่องการจัดการ ไม่ใช่ความทนทานของฮาร์ดแวร์) — และตัว controller เองอาจเป็น single point of failure ด้วยซ้ำถ้าไม่ทำ HA\n\n📗 จำไว้สอบ: จุดขายของ controller-based = centralized + consistent + automated (ลด human error)',
  },
  {
    id: 93,
    kind: 'single',
    prompt: 'What mechanism carries multicast traffic between remote sites and supports encryption?',
    options: [
      { key: 'A', text: 'ISATAP' },
      { key: 'B', text: 'GRE over IPsec' },
      { key: 'C', text: 'IPsec over ISATAP' },
      { key: 'D', text: 'GRE' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ปัญหาคลาสสิกที่ต้องรู้:\n\n❌ IPsec เพียว ๆ → รองรับ "unicast เท่านั้น"! ส่ง multicast/broadcast ไม่ได้\n   → ผลคือ routing protocol อย่าง OSPF (multicast 224.0.0.5) และ EIGRP (224.0.0.10) วิ่งผ่าน IPsec ตรง ๆ ไม่ได้\n\n❌ GRE เพียว ๆ → ห่อ multicast/broadcast ได้ (ดีมาก!) แต่ "ไม่เข้ารหัส" เลย (ข้อมูลโล่ง ๆ)\n\n✅ ⭐ GRE over IPsec → เอาข้อดีของทั้งคู่มารวมกัน!\n   1. GRE ห่อ multicast → กลายเป็น unicast packet\n   2. IPsec เข้ารหัส GRE packet นั้นอีกที\n   → ได้ทั้ง "รองรับ multicast" + "เข้ารหัส" ครบตามโจทย์\n\n✅ ทำไม B ถูก: เป็นวิธีเดียวในตัวเลือกที่ให้ทั้งการส่ง multicast ข้ามไซต์ และการเข้ารหัส\n\n❌ ทำไมข้ออื่นผิด:\nD. GRE อย่างเดียว → ส่ง multicast ได้ แต่ "ไม่มีการเข้ารหัส" → ไม่ตรงเงื่อนไขโจทย์\nA. ISATAP → เป็นเทคนิค tunnel IPv6 ผ่านเครือข่าย IPv4 ไม่เกี่ยวกับ multicast หรือการเข้ารหัส\nC. IPsec over ISATAP → ไม่ใช่โซลูชันมาตรฐานสำหรับปัญหานี้\n\n📗 จำไว้สอบ: "IPsec = unicast only" — เห็นโจทย์ที่ต้องส่ง routing protocol/multicast ผ่าน VPN → ต้องมี GRE (หรือ DMVPN/VTI) มาห่อก่อนเสมอ',
  },
  {
    id: 94,
    kind: 'single',
    image: q94,
    prompt: 'Refer to the exhibit (Switch1, PC_A and PC_B both in VLAN 200). Which outcome is expected when PC_A sends data to PC_B?',
    options: [
      { key: 'A', text: 'The switch rewrites the source and destination MAC addresses with its own' },
      { key: 'B', text: 'The source MAC address is changed' },
      { key: 'C', text: 'The source and destination MAC addresses remain the same' },
      { key: 'D', text: 'The destination MAC address is replaced with ffff.ffff.ffff' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิดหัวใจ — ใครแก้ MAC address บ้าง? (ออกสอบบ่อยมาก!)\n\n🔹 Switch (Layer 2) → ⭐ ไม่แก้ MAC เลย!\n   แค่อ่าน destination MAC แล้ว forward ออกพอร์ตที่ถูกต้อง\n   source/destination MAC คงเดิมตลอด\n\n🔹 Router (Layer 3) → ⭐ เขียน MAC ใหม่ทุก hop!\n   • source MAC ใหม่ = MAC ของอินเทอร์เฟซขาออกของ router\n   • destination MAC ใหม่ = MAC ของ next-hop\n   • แต่ source/destination "IP" คงเดิมตลอดทาง (ไม่เปลี่ยน!)\n\n✅ ทำไม C ถูก: PC_A และ PC_B อยู่ใน VLAN 200 เดียวกัน (subnet เดียวกัน) → ทราฟฟิกไม่ต้องผ่าน router เลย สวิตช์แค่ forward เฟรมตรง ๆ → source/destination MAC จึงคงเดิมทั้งคู่\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ไม่เคยเอา MAC ของตัวเองไปแทนที่ (สวิตช์ "โปร่งใส" ต่อ MAC address)\nB. source MAC ไม่เปลี่ยน — การเปลี่ยน source MAC เป็นพฤติกรรมของ router\nD. destination MAC จะเป็น ffff.ffff.ffff (broadcast) ก็ต่อเมื่อเป็นเฟรม broadcast เท่านั้น — แต่นี่เป็นการส่งหา PC_B โดยเฉพาะ (unicast)\n\n📗 จำไว้สอบ: ตลอดเส้นทาง — IP ต้นทาง/ปลายทาง "ไม่เปลี่ยน" แต่ MAC "เปลี่ยนทุกครั้งที่ข้าม router"',
  },
  {
    id: 95,
    kind: 'single',
    prompt: 'How will Link Aggregation be implemented on a Cisco Wireless LAN Controller?',
    options: [
      { key: 'A', text: 'One functional physical port is needed to pass client traffic' },
      { key: 'B', text: 'The EtherChannel must be configured in "mode active"' },
      { key: 'C', text: 'When enabled, the WLC bandwidth drops to 500 Mbps' },
      { key: 'D', text: 'To pass client traffic, two or more ports must be configured' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — LAG (Link Aggregation) บน Cisco WLC:\n• รวมพอร์ตกายภาพทั้งหมดของ WLC เป็น "อินเทอร์เฟซตรรกะเดียว" (คล้าย EtherChannel)\n• ประโยชน์: เพิ่มแบนด์วิดท์รวม + มี redundancy (พอร์ตหนึ่งเสีย ที่เหลือรับงานต่อ)\n\n⭐ จุดสำคัญที่ออกสอบ — LAG บน WLC ต่างจาก EtherChannel ทั่วไป:\n• WLC ใช้ LAG แบบ static (mode on) เท่านั้น → ไม่เจรจา LACP/PAgP\n• ⭐ ต้องการเพียง "พอร์ตเดียวที่ยัง up" ก็เพียงพอให้ทราฟฟิก client ไหลผ่านได้ต่อ\n  (ไม่ต้องมี 2 พอร์ตขึ้นไปพร้อมกัน)\n• การเปิด/ปิด LAG ต้อง reboot WLC\n\n✅ ทำไม A ถูก: มีพอร์ตกายภาพที่ทำงานได้เพียงพอร์ตเดียว ก็เพียงพอที่จะส่งผ่านทราฟฟิกของ client แล้ว\n\n❌ ทำไมข้ออื่นผิด:\nD. ผิด — ไม่จำเป็นต้องมี 2 พอร์ตขึ้นไป (นี่คือกับดักหลัก! คนมักคิดว่า "aggregation" ต้องมีหลายเส้น)\nB. WLC ใช้ LAG แบบ static ไม่ได้ตั้ง "mode active" (ซึ่งเป็นโหมด LACP)\nC. การเปิด LAG ไม่ได้ทำให้แบนด์วิดท์ตกลงเหลือ 500 Mbps (ตรงข้าม มันเพิ่มแบนด์วิดท์รวม)\n\n📗 จำไว้สอบ: LAG บน WLC = static bundle, ต้อง reboot ตอนเปิด/ปิด, พอร์ตเดียวก็พอ',
  },
  {
    id: 96,
    kind: 'single',
    image: q96,
    prompt:
      'Refer to the exhibit. Four switches SW1, SW2, SW3, SW4 (default bridge priority 32768 on all) are interconnected in a network:\nSW1 MAC: 0C:E0:38:00:94:04\nSW2 MAC: 0C:0E:15:22:05:97\nSW3 MAC: 0C:0E:15:1A:3C:9D\nSW4 MAC: 0C:E0:18:A1:B3:19\nWhich switch in this configuration will be elected as the root bridge?',
    options: [
      { key: 'A', text: 'SW1' },
      { key: 'B', text: 'SW2' },
      { key: 'C', text: 'SW3' },
      { key: 'D', text: 'SW4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — การเลือก Root Bridge ใน STP:\n\n⭐ Bridge ID = Priority (2 ไบต์) + MAC Address (6 ไบต์)\n   → เทียบ Priority ก่อน (ต่ำสุดชนะ) → ถ้าเท่ากัน จึงเทียบ MAC (ต่ำสุดชนะ)\n   → ค่า priority เริ่มต้น = 32768 (ต้องเป็นทวีคูณของ 4096)\n\n🧮 โจทย์นี้ priority เท่ากันหมด (32768) → ตัดสินด้วย MAC ต่ำสุด\nเทียบทีละไบต์จากซ้ายไปขวา (เลขฐาน 16):\n\n   SW1: 0C:E0:38:00:94:04\n   SW2: 0C:0E:15:22:05:97\n   SW3: 0C:0E:15:1A:3C:9D\n   SW4: 0C:E0:18:A1:B3:19\n\nไบต์ที่ 1: ทุกตัวเป็น 0C → เสมอ\nไบต์ที่ 2: SW2, SW3 = 0E | SW1, SW4 = E0\n   → 0E (=14) < E0 (=224) → ⭐ SW2 กับ SW3 ผ่านเข้ารอบ! (SW1, SW4 ตกรอบ)\nไบต์ที่ 3: ทั้งคู่เป็น 15 → เสมอ\nไบต์ที่ 4: SW3 = 1A (=26) | SW2 = 22 (=34)\n   → 1A < 22 → ⭐ SW3 ชนะ!\n\n✅ ทำไม C ถูก: SW3 มี MAC ต่ำที่สุด (0C:0E:15:1A:…) จึงได้เป็น root bridge\n\n⚠️ กับดัก: อย่าอ่าน hex เป็นเลขฐานสิบ! 0E ดู "เหมือน" ใหญ่กว่าเพราะมีตัวอักษร แต่จริง ๆ 0E = 14 ซึ่งน้อยกว่า E0 = 224 มาก\n\n📗 จำไว้สอบ: อยากบังคับให้สวิตช์ตัวไหนเป็น root → ตั้ง "spanning-tree vlan X priority 0" (ต่ำสุด) หรือ "root primary"',
  },
  {
    id: 97,
    kind: 'single',
    prompt: 'Which device performs stateful inspection of traffic?',
    options: [
      { key: 'A', text: 'firewall' },
      { key: 'B', text: 'switch' },
      { key: 'C', text: 'access point' },
      { key: 'D', text: 'wireless controller' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Stateful Inspection คืออะไร:\n\n🔹 Stateless (เช่น ACL ธรรมดาบน router)\n   • ดูแพ็กเก็ตทีละอันแบบแยกขาด ไม่จำอะไรเลย\n   • ⚠️ ปัญหา: ต้องเขียนกฎขาไป-ขากลับเองทั้งคู่ ยุ่งยากและเสี่ยงเปิดช่องโหว่\n\n🔹 ⭐ Stateful (Firewall)\n   • จำ "สถานะของแต่ละ connection" ไว้ในตาราง (state table)\n   • เมื่อ PC ภายในเปิดการเชื่อมต่อออกไป → firewall จดจำไว้\n   • ทราฟฟิกที่ตอบกลับมาจากการเชื่อมต่อนั้น → ปล่อยผ่านอัตโนมัติ ✔\n   • ทราฟฟิกที่จู่ ๆ วิ่งเข้ามาเองโดยไม่มีการเชื่อมต่อรองรับ → บล็อก ✘\n   → ปลอดภัยกว่าและตั้งค่าง่ายกว่ามาก\n\n✅ ทำไม A ถูก: การติดตามสถานะการเชื่อมต่อ (stateful inspection หรือ dynamic packet filtering) เป็นหน้าที่หลักของ firewall\n\n❌ ทำไมข้ออื่นผิด:\nB. switch → ทำงานที่ Layer 2 ตัดสินใจจาก MAC address เท่านั้น ไม่ติดตาม session\nC. access point → เชื่อมต่ออุปกรณ์ไร้สายเข้าเครือข่ายมีสาย ไม่ได้กรองตามสถานะ\nD. wireless controller → บริหารจัดการ AP ไม่ใช่อุปกรณ์ตรวจสอบ state ของทราฟฟิก\n\n📗 จำไว้สอบ: คีย์เวิร์ด "state / stateful / track connection / dynamic packet filtering" → firewall เสมอ',
  },
  {
    id: 98,
    kind: 'single',
    prompt: 'Which configuration ensures that the switch is always the root for VLAN 750?',
    options: [
      { key: 'A', text: 'Switch(config)#spanning-tree vlan 750 priority 38003685' },
      { key: 'B', text: 'Switch(config)#spanning-tree vlan 750 root primary' },
      { key: 'C', text: 'Switch(config)#spanning-tree vlan 750 priority 614440' },
      { key: 'D', text: 'Switch(config)#spanning-tree vlan 750 priority 0' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — กฎของ STP Priority (ต้องจำให้แม่น):\n⭐ ค่าที่ตั้งได้ = 0 ถึง 61440 เท่านั้น และต้องเป็น "ทวีคูณของ 4096"\n   (0, 4096, 8192, 12288, … 32768 (ค่าเริ่มต้น), … 61440)\n→ ถ้าใส่ค่านอกกฎนี้ IOS จะปฏิเสธคำสั่งทันที!\n\n🧮 ตรวจทีละข้อ:\n• A. priority 38003685 → ❌ เกิน 61440 และไม่ใช่ทวีคูณ 4096 → คำสั่งถูกปฏิเสธ\n• C. priority 614440 → ❌ เกิน 61440 (สังเกตดี ๆ มี 4 เกินมาตัวหนึ่ง!) → ถูกปฏิเสธ\n• B. root primary → ⚠️ IOS จะคำนวณ priority ให้ "ต่ำกว่า root ปัจจุบัน" เท่านั้น\n     (ปกติตั้งเป็น 24576 หรือต่ำกว่า root ปัจจุบัน 4096)\n     → ไม่ได้การันตีว่าจะเป็น root "ตลอดไป"! ถ้ามีสวิตช์ใหม่เข้ามาด้วย priority ต่ำกว่านั้น ก็แพ้ได้\n• ⭐ D. priority 0 → ✔ ถูกกฎ (0 เป็นทวีคูณของ 4096) และเป็นค่า "ต่ำที่สุดเท่าที่เป็นไปได้"\n     → ไม่มีใครตั้งต่ำกว่านี้ได้อีกแล้ว = การันตีเป็น root เสมอ ✔\n\n✅ ทำไม D ถูก: priority 0 คือค่าต่ำสุดที่ถูกกฎ จึงการันตีชนะการเลือก root bridge ตลอด\n(ยกเว้นกรณีสุดโต่งที่มีสวิตช์อื่นตั้ง 0 เหมือนกัน → ค่อยตัดสินด้วย MAC ต่ำสุด)\n\n📗 จำไว้สอบ: โจทย์ที่ใช้คำว่า "always / guarantee" → ต้องเลือก priority 0 ไม่ใช่ root primary!',
  },
  {
    id: 99,
    kind: 'single',
    image: q99,
    prompt:
      'Refer to the exhibit:\nS1: Bridge Priority 32768, MAC AA:AA:AA:AA:AA:AA\nS2: Bridge Priority 30000, MAC BB:BB:BB:BB:BB:BB\nS3: Bridge Priority 30000, MAC CC:CC:CC:CC:CC:CC\nS4: Bridge Priority 32768, MAC DD:DD:DD:DD:DD:DD\nWhich switch becomes the root bridge?',
    options: [
      { key: 'A', text: 'S1' },
      { key: 'B', text: 'S2' },
      { key: 'C', text: 'S3' },
      { key: 'D', text: 'S4' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — การเลือก Root Bridge ใน STP:\n\n⭐ Bridge ID = Priority (2 ไบต์) + MAC Address (6 ไบต์)\n   เกณฑ์: เทียบ Priority ก่อน (ต่ำสุดชนะ) → ถ้า Priority เท่ากัน จึงเทียบ MAC (ต่ำสุดชนะ)\n\n🧮 วิเคราะห์ทีละขั้น:\n\nขั้นที่ 1 — เทียบ Priority (ต่ำสุดชนะ):\n   S1 = 32768 | S2 = 30000 | S3 = 30000 | S4 = 32768\n   → ⭐ S2 และ S3 (30000) ต่ำกว่า S1/S4 (32768) → ผ่านเข้ารอบ\n   → S1, S4 ตกรอบทันที (ไม่ต้องดู MAC เลย)\n\nขั้นที่ 2 — S2 กับ S3 priority เท่ากัน → ตัดสินด้วย MAC ต่ำสุด:\n   S2 = BB:BB:BB:BB:BB:BB\n   S3 = CC:CC:CC:CC:CC:CC\n   → BB (=187) < CC (=204) → ⭐ S2 ชนะ!\n\n✅ ทำไม B ถูก: S2 มี priority ต่ำสุด (เสมอกับ S3) และ MAC ต่ำกว่า S3 → เป็น root bridge\n\n❌ ทำไมข้ออื่นผิด:\nC. S3 → priority เท่ากับ S2 แต่ MAC (CC) สูงกว่า (BB) → แพ้\nA, D. S1, S4 → priority 32768 สูงกว่า → ตกรอบตั้งแต่ขั้นแรก แม้ MAC ของ S1 (AA) จะต่ำที่สุดในทั้งหมดก็ตาม!\n\n⚠️ กับดักสำคัญ: S1 มี MAC ต่ำสุด (AA) แต่ "ไม่ได้เป็น root" เพราะ priority ถูกเทียบ "ก่อน" MAC เสมอ!\n\n📗 จำไว้สอบ: Priority มาก่อน MAC เสมอ — MAC จะถูกใช้ก็ต่อเมื่อ priority เสมอกันเท่านั้น',
  },
  {
    id: 100,
    kind: 'single',
    prompt: 'What protocol allows an engineer to back up 20 network router configurations globally while using the copy function?',
    options: [
      { key: 'A', text: 'SMTP' },
      { key: 'B', text: 'SNMP' },
      { key: 'C', text: 'TCP' },
      { key: 'D', text: 'FTP' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — คีย์เวิร์ดในโจทย์คือ "globally" (ทีเดียวทั้ง 20 ตัว) และ "copy function"\n→ ต้องการเครื่องมือที่สั่งงานอุปกรณ์จำนวนมากพร้อมกันจากศูนย์กลาง\n\n✅ ทำไม B (SNMP) ถูก:\n• SNMP Manager (NMS) สั่งงานอุปกรณ์ทุกตัวได้พร้อมกันจากที่เดียว\n• ⭐ ใน Cisco IOS MIB มี object สำหรับสั่ง "copy running-config tftp" ได้โดยตรง\n  → จึงสั่ง backup config ของ router ทั้ง 20 ตัวได้ในคราวเดียว\n• พอร์ต UDP 161 (query/set) / 162 (trap)\n\n❌ ทำไมข้ออื่นผิด:\nD. FTP → เป็นโปรโตคอล "ขนไฟล์" ได้จริง แต่ต้องเข้าไปสั่ง copy ที่ router ทีละตัวเอง ไม่ได้สั่งพร้อมกันแบบรวมศูนย์ (ไม่ตรงคำว่า "globally")\nA. SMTP → โปรโตคอลส่งอีเมล ไม่เกี่ยวกับการ backup config\nC. TCP → เป็น "โปรโตคอลชั้น transport" ไม่ใช่เครื่องมือจัดการอุปกรณ์ (เป็นแค่ตัวขนส่งให้โปรโตคอลอื่น)\n\n📗 จำไว้สอบ: เห็นคำว่า "MIB / globally / manage many devices" → SNMP เสมอ',
  },
  {
    id: 101,
    kind: 'single',
    prompt:
      'What software defined architecture plane assists network devices with making packet-forwarding decisions by providing Layer 2 reachability and Layer 3 routing information?',
    options: [
      { key: 'A', text: 'data plane' },
      { key: 'B', text: 'control plane' },
      { key: 'C', text: 'policy plane' },
      { key: 'D', text: 'management plane' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — 3 ระนาบของอุปกรณ์เครือข่าย:\n\n1️⃣ ⭐ Control Plane = "สมอง" 🧠\n   • รัน routing protocol (OSPF, EIGRP, BGP) → สร้าง routing table (Layer 3)\n   • เรียนรู้ MAC address, ทำ ARP → สร้าง MAC table (Layer 2 reachability)\n   • ⭐ แล้ว "ส่งตารางเหล่านี้ให้ data plane" ใช้ตัดสินใจ forward\n\n2️⃣ Data Plane = "แขนขา" 💪\n   • forward แพ็กเก็ตจริงตามตารางที่ control plane ป้อนให้ (เร็วมาก ทำที่ ASIC)\n   • ไม่ได้คิดเอง — แค่ทำตามตาราง\n\n3️⃣ Management Plane = "ช่องทางเข้าไปดูแล" 🔧\n   • SSH, Telnet, SNMP, NETCONF, syslog\n\n✅ ทำไม B ถูก: โจทย์บอกว่าเป็นระนาบที่ "ช่วยอุปกรณ์ตัดสินใจ forward โดยให้ข้อมูล L2 reachability และ L3 routing" → นั่นคือหน้าที่ของ control plane (ผู้ผลิตข้อมูล) ไม่ใช่ผู้ใช้ข้อมูล\n\n❌ ทำไมข้ออื่นผิด:\nA. data plane → เป็น "ผู้ใช้" ข้อมูลไป forward ไม่ใช่ "ผู้สร้าง/ผู้ให้" ข้อมูล (นี่คือกับดักหลัก — อ่านโจทย์ให้ดีว่าถามผู้ให้ข้อมูล)\nC. policy plane → ไม่ใช่คำศัพท์มาตรฐาน (ตัวลวง)\nD. management plane → ใช้จัดการ/config อุปกรณ์ ไม่เกี่ยวกับการตัดสินใจ forward\n\n📗 จำไว้สอบ: ใน SDN ตัว control plane ถูกดึงออกมา "รวมศูนย์" ไว้ที่ controller ส่วน data plane ยังกระจายอยู่ที่อุปกรณ์',
  },
  {
    id: 102,
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
      '📘 แนวคิด — เลือกเทคโนโลยี WAN ให้เหมาะกับขนาดองค์กร:\n\n🏠 SOHO (Small Office / Home Office) — ผู้ใช้ไม่กี่คน งบจำกัด\n   → ⭐ Broadband (cable / DSL / fiber) : ถูก ติดตั้งง่าย แบนด์วิดท์พอเพียง\n   → ข้อแลกเปลี่ยน: เป็นลิงก์แบบ "แชร์" ไม่การันตีความเร็ว (best-effort) แต่ SOHO รับได้\n\n🏢 องค์กรขนาดใหญ่ — ต้องการความเสถียร/SLA\n   → Leased line (จ่ายแพง แต่ได้แบนด์วิดท์เต็มการันตี)\n   → MPLS (เชื่อมหลายสาขา มี QoS)\n\n✅ ทำไม A ถูก: broadband cable ให้ความคุ้มค่าที่สุดสำหรับ SOHO — ราคาเข้าถึงได้และเพียงพอต่อผู้ใช้จำนวนน้อย\n\n❌ ทำไมข้ออื่นผิด:\nC. leased line → การันตีแบนด์วิดท์เต็มก็จริง แต่ "แพงเกินความจำเป็น" สำหรับ SOHO อย่างมาก\nB. Frame Relay → เทคโนโลยีเก่าขององค์กรใหญ่ ปัจจุบันเลิกใช้แล้ว (ถูกแทนที่ด้วย MPLS)\nD. ISDN → ช้ามาก (128 kbps) และล้าสมัยไปนานแล้ว\n\n📗 จำไว้สอบ: เห็นคำว่า SOHO / home office / ประหยัด → ตอบ broadband เสมอ',
  },
  {
    id: 103,
    kind: 'multi',
    prompt: 'Which two WAN architecture options help a business improve scalability and reliability for the network? (Choose two)',
    options: [
      { key: 'A', text: 'asynchronous routing' },
      { key: 'B', text: 'single-homed branches' },
      { key: 'C', text: 'dual-homed branches' },
      { key: 'D', text: 'static routing' },
      { key: 'E', text: 'dynamic routing' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — โจทย์ถามหา 2 สิ่ง: Scalability (ขยายได้) + Reliability (ทนทาน)\n\n🔹 Single-homed branch → สาขามีลิงก์ WAN "เส้นเดียว"\n   ⚠️ ลิงก์ขาด = สาขาตัดขาดทันที (single point of failure)\n\n🔹 ⭐ Dual-homed branch → สาขามีลิงก์ WAN "สองเส้น" (อาจคนละ ISP)\n   ✔ เส้นหนึ่งล่ม → สลับไปอีกเส้นอัตโนมัติ = Reliability สูงขึ้น\n\n🔹 Static routing → ตั้งเส้นทางด้วยมือทุกเส้น\n   ⚠️ เพิ่มสาขาใหม่ = ต้องไปแก้ทุก router (ไม่ scale) และลิงก์ล่มก็ไม่ปรับตัวเอง\n\n🔹 ⭐ Dynamic routing (OSPF/EIGRP/BGP) → router คุยกันเอง เรียนรู้เส้นทางอัตโนมัติ\n   ✔ เพิ่มสาขาใหม่ = router เรียนรู้เอง (Scalability)\n   ✔ ลิงก์ล่ม = คำนวณเส้นทางใหม่ให้เอง (Reliability)\n\n✅ ทำไม C, E ถูก: dual-homed (redundancy) + dynamic routing (ปรับตัว/ขยายง่าย) ตอบโจทย์ทั้ง scalability และ reliability\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A,C แต่ "asynchronous routing" ไม่ใช่คำศัพท์ที่มีอยู่จริงในเครือข่าย (เป็นตัวลวงล้วน ๆ) — คำตอบที่ถูกต้องคือ C,E\n\n❌ ทำไมข้ออื่นผิด:\nB. single-homed → มีลิงก์เดียว ไม่มี redundancy เลย = ตรงข้ามกับ reliability\nD. static routing → ไม่ scale และไม่ปรับตัวเมื่อลิงก์ล่ม\n\n📗 จำไว้สอบ: เห็น "scalability + reliability" ในโจทย์ WAN → dual-homed + dynamic routing',
  },
  {
    id: 104,
    kind: 'single',
    prompt: 'What criteria is used first during the root port selection process?',
    options: [
      { key: 'A', text: 'local port ID' },
      { key: 'B', text: 'lowest path cost to the root bridge' },
      { key: 'C', text: "lowest neighbor's bridge ID" },
      { key: 'D', text: "lowest neighbor's port ID" },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก Root Port (พอร์ตที่ใช้ไปหา root bridge) มี 4 ขั้น ตัดสินตามลำดับ:\n\n1️⃣ ⭐ Lowest cumulative path cost ไปยัง root bridge ← เกณฑ์แรกเสมอ!\n2️⃣ Lowest sender (neighbor) Bridge ID\n3️⃣ Lowest sender (neighbor) Port ID\n4️⃣ Lowest local Port ID\n\n📊 ค่า STP Cost มาตรฐาน (ต้องท่อง):\n   10 Mbps = 100 | 100 Mbps (Fa) = 19 | 1 Gbps = 4 | 10 Gbps = 2\n   → cost สะสม = บวก cost ของทุกลิงก์ตลอดทางไปถึง root\n\n✅ ทำไม B ถูก: เกณฑ์แรกสุดคือ path cost สะสมที่ต่ำที่สุดไปยัง root bridge — เกณฑ์ที่เหลือจะถูกใช้ก็ต่อเมื่อ cost เสมอกันเท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nC. neighbor bridge ID → เป็นเกณฑ์ที่ 2 (ใช้เมื่อ cost เท่ากัน)\nD. neighbor port ID → เป็นเกณฑ์ที่ 3\nA. local port ID → เป็นเกณฑ์สุดท้าย (ที่ 4)\n\n📗 จำไว้สอบ: ทุกสวิตช์ที่ไม่ใช่ root จะมี root port "หนึ่งพอร์ตเท่านั้น" | root bridge ไม่มี root port เลย',
  },
  {
    id: 105,
    kind: 'single',
    prompt: 'What criteria is used first during the root port selection process?',
    options: [
      { key: 'A', text: 'local port ID' },
      { key: 'B', text: 'lowest path cost to the root bridge' },
      { key: 'C', text: "lowest neighbor's bridge ID" },
      { key: 'D', text: "lowest neighbor's port ID" },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก Root Port (4 ขั้น ตัดสินตามลำดับ):\n\n1️⃣ ⭐ Lowest cumulative path cost ไปยัง root bridge ← ตัดสินก่อนเสมอ\n2️⃣ Lowest neighbor Bridge ID (ถ้า cost เท่ากัน)\n3️⃣ Lowest neighbor Port ID\n4️⃣ Lowest local Port ID\n\n💡 อย่าสับสนระหว่าง 2 เรื่องนี้:\n• เลือก Root Bridge (ใครเป็นหัวหน้า) → ใช้ Bridge ID ต่ำสุด (priority + MAC)\n• ⭐ เลือก Root Port (ทางไหนไปหาหัวหน้า) → ใช้ Path Cost ต่ำสุด\n\n📊 ค่า STP Cost: 10 Mbps=100 | 100 Mbps=19 | 1 Gbps=4 | 10 Gbps=2\n\n✅ ทำไม B ถูก: เกณฑ์แรกคือ path cost สะสมต่ำสุดไปยัง root bridge (เส้นทางที่ "ถูกที่สุด" ชนะ)\n\n❌ ทำไมข้ออื่นผิด:\nC. neighbor bridge ID → เกณฑ์ที่ 2 (ใช้ต่อเมื่อ cost เท่ากัน)\nD. neighbor port ID → เกณฑ์ที่ 3\nA. local port ID → เกณฑ์สุดท้าย ใช้น้อยที่สุด\n\n📗 จำไว้สอบ: (ข้อนี้ซ้ำกับข้อ 104 ในต้นฉบับ — เป็นข้อที่ออกบ่อยมาก ต้องจำให้แม่น!)',
  },
  {
    id: 106,
    kind: 'single',
    prompt: 'What is a function of Wireless LAN Controller?',
    options: [
      { key: 'A', text: 'register with a single access point that controls traffic between wired and wireless endpoints' },
      { key: 'B', text: 'use SSIDs to distinguish between wireless clients' },
      { key: 'C', text: 'send LWAPP packets to access points' },
      { key: 'D', text: 'monitor activity on wireless and wired LANs' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — WLC คุยกับ Lightweight AP อย่างไร:\n• Lightweight AP (LAP) ไม่มี config ในตัวเลย → ต้อง "join" กับ WLC ก่อนถึงจะทำงานได้\n• ⭐ ใช้โปรโตคอล LWAPP (รุ่นเก่า) / CAPWAP (รุ่นปัจจุบัน) เป็นช่องทางคุยกัน\n  - Control tunnel → UDP 5246 (คำสั่ง/config)\n  - Data tunnel → UDP 5247 (ทราฟฟิก client)\n• WLC ส่ง packet เหล่านี้ไปตั้งค่า AP, อัปเดต firmware, ปรับ channel/power ให้อัตโนมัติ\n\n✅ ทำไม C ถูก: การส่ง LWAPP/CAPWAP packet ไปยัง AP คือกลไกหลักที่ WLC ใช้ควบคุมและจัดการ AP แบบรวมศูนย์\n\n❌ ทำไมข้ออื่นผิด:\nA. "register กับ AP เพียงตัวเดียว" → ผิดตรงกันข้าม! WLC จัดการ AP ได้หลายสิบ-หลายร้อยตัวพร้อมกัน (นั่นคือจุดขายของมัน)\nB. SSID ใช้แยก "เครือข่ายไร้สาย (WLAN)" ออกจากกัน ไม่ได้ใช้แยก client แต่ละคน (client แยกด้วย MAC/session)\nD. การ monitor เป็นหน้าที่รองที่ WLC ทำได้ แต่ไม่ใช่ "ฟังก์ชันหลัก" ที่นิยามตัวมัน\n\n📗 จำไว้สอบ: LWAPP = รุ่นเก่า, CAPWAP = มาตรฐานปัจจุบัน (แต่ข้อสอบยังใช้คำว่า LWAPP อยู่บ่อย ๆ)',
  },
  {
    id: 107,
    kind: 'single',
    prompt: 'Which type of information resides on a DHCP server?',
    options: [
      { key: 'A', text: 'a list of the available IP addresses in a pool' },
      { key: 'B', text: 'a list of public IP addresses and their corresponding names' },
      { key: 'C', text: 'usernames and passwords for the end users in a domain' },
      { key: 'D', text: 'a list of statically assigned MAC addresses' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — DHCP server เก็บอะไรบ้าง:\n• ⭐ Address Pool → รายการ IP ที่ว่างและพร้อมแจก (หัวใจของ DHCP)\n• Excluded addresses → IP ที่กันไว้ไม่แจก (สงวนให้ gateway/server)\n• Lease table → บันทึกว่าแจก IP ไหนให้ MAC ไหน หมดอายุเมื่อไหร่\n• Options ที่แจกไปด้วย → subnet mask, default gateway (option 3), DNS server (option 6)\n\n✅ ทำไม A ถูก: ข้อมูลหลักที่อยู่บน DHCP server คือรายการ IP ที่ว่างใน pool ไว้แจกให้ client\n\n❌ ทำไมข้ออื่นผิด — แต่ละข้อคือข้อมูลของ "เซิร์ฟเวอร์อื่น":\nB. รายการ IP คู่กับชื่อ → เป็นข้อมูลของ DNS server (ข้อสอบชอบเอา DNS มาลวงในคำถาม DHCP!)\nC. username/password ของผู้ใช้ในโดเมน → เป็นข้อมูลของ Domain Controller / AAA server (RADIUS, TACACS+)\nD. รายการ MAC ที่ผูกแบบ static → DHCP ทำได้ (manual binding / reservation) แต่เป็นแค่ "ออปชันเสริม" ไม่ใช่ข้อมูลหลักที่นิยาม DHCP server\n\n📗 จำไว้สอบ: DHCP = แจก IP (pool) | DNS = แปลงชื่อเป็น IP (records) — สองอันนี้ต้องแยกให้ขาด',
  },
  {
    id: 108,
    kind: 'single',
    prompt:
      'A manager asks a network engineer to advise which cloud service model is used so employees do not have to waste their time installing, managing, and updating software which is only used occasionally. Which cloud service model does the engineer recommend?',
    options: [
      { key: 'A', text: 'infrastructure-as-a-service' },
      { key: 'B', text: 'platform-as-a-service' },
      { key: 'C', text: 'business process as a service to support different types of service' },
      { key: 'D', text: 'software-as-a-service' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โมเดลบริการคลาวด์ "ใครดูแลอะไร":\n\n• ⭐ SaaS → ใช้แอปสำเร็จรูปผ่านเว็บ (Gmail, Office 365, Salesforce)\n   provider ดูแลให้หมด: hardware + OS + runtime + ⭐"ติดตั้ง/อัปเดต/บำรุงรักษาซอฟต์แวร์"\n   ผู้ใช้ดูแล: แค่ข้อมูลของตัวเอง → แค่เปิดเบราว์เซอร์เข้าใช้\n\n• PaaS → ได้แพลตฟอร์มไว้ deploy โค้ดเอง (Heroku, App Engine)\n   ผู้ใช้ยังต้องดูแล "แอปของตัวเอง"\n\n• IaaS → ได้ VM เปล่า ๆ (AWS EC2)\n   ผู้ใช้ต้องติดตั้งและดูแล OS + แอปเอง (งานเยอะที่สุด)\n\n🔑 คีย์เวิร์ดในโจทย์: "พนักงานไม่ต้องเสียเวลา installing, managing, updating software"\n→ ตรงกับ SaaS เป๊ะ ๆ (provider จัดการซอฟต์แวร์ให้ทั้งหมด)\n\n✅ ทำไม D ถูก: SaaS ตัดภาระการติดตั้ง/ดูแล/อัปเดตซอฟต์แวร์ออกไปทั้งหมด เหมาะมากกับซอฟต์แวร์ที่ใช้แค่เป็นครั้งคราว (ไม่คุ้มที่จะลงและดูแลเอง)\n\n❌ ทำไมข้ออื่นผิด:\nA. IaaS → ผู้ใช้ต้อง "ติดตั้ง OS และซอฟต์แวร์เอง" = ตรงข้ามกับที่โจทย์ต้องการเลย\nB. PaaS → ยังต้องจัดการแอปพลิเคชันของตัวเอง (เหมาะกับนักพัฒนา ไม่ใช่พนักงานทั่วไป)\nC. BPaaS → เป็นการ outsource "กระบวนการทางธุรกิจ" (เช่น payroll) ไม่ตรงกับเรื่องซอฟต์แวร์ที่ใช้เป็นครั้งคราว\n\n📗 จำไว้สอบ: เห็นคำว่า "ไม่ต้องติดตั้ง/อัปเดตซอฟต์แวร์เอง" → SaaS เสมอ',
  },
  {
    id: 109,
    kind: 'single',
    image: q109,
    prompt: 'Refer to the exhibit. Which type of configuration is represented in the output?',
    options: [
      { key: 'A', text: 'Ansible' },
      { key: 'B', text: 'JSON' },
      { key: 'C', text: 'Chef' },
      { key: 'D', text: 'Puppet' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ดูไวยากรณ์แล้วบอกให้ได้ว่าเป็นเครื่องมือไหน (ออกสอบบ่อย!)\n\n🔍 จาก exhibit:\n   cisco_ospf_vrf ("R1 default":\n     ensure    => \'present\',      ← ⭐ เครื่องหมาย "=>" (fat arrow)\n     auto_cost => \'100\',          ← ⭐ คีย์เวิร์ด "ensure"\n   }\n\n📊 ลายเซ็นของแต่ละเครื่องมือ:\n• ⭐ Puppet → ใช้ "=>" และคีย์เวิร์ด "ensure => present" | ไฟล์ = Manifest (.pp) | พอร์ต 8140\n• Ansible → YAML: ขึ้นต้นด้วย "---" ใช้ "key: value" และขีดกลาง (-) | ไฟล์ = Playbook | SSH 22\n• Chef → Ruby DSL: ใช้ block แบบ "do ... end" | ไฟล์ = Cookbook/Recipe | พอร์ต 10002\n• JSON → ใช้ { "key": value } มี colon และ comma\n\n✅ ทำไม D ถูก: เครื่องหมาย "=>" คู่กับคีย์เวิร์ด "ensure" เป็นเอกลักษณ์เฉพาะของ Puppet manifest\n\n❌ ทำไมข้ออื่นผิด:\nA. Ansible → ต้องเป็น YAML (key: value + ขีดกลาง) ไม่มี "=>"\nB. JSON → ต้องใช้ colon (:) ไม่ใช่ "=>" และ key ต้องอยู่ในเครื่องหมายคำพูดเสมอ\nC. Chef → ใช้ Ruby DSL รูปแบบ do…end ไม่ใช่ "=>"\n\n📗 จำไว้สอบ: เห็น "ensure =>" → Puppet ทันที (นี่คือเบาะแสที่ชัดที่สุด)',
  },
  {
    id: 110,
    kind: 'multi',
    prompt: 'What are two functions of a Layer 2 switch? (Choose two)',
    options: [
      { key: 'A', text: 'acts as a central point for association and authentication servers' },
      { key: 'B', text: 'selects the best route between networks on a WAN' },
      { key: 'C', text: 'moves packets within a VLAN' },
      { key: 'D', text: 'moves packets between different VLANs' },
      { key: 'E', text: 'makes forwarding decisions based on the MAC address of a packet' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — สวิตช์ Layer 2 ทำอะไรได้บ้าง:\n• ⭐ ตัดสินใจ forward จาก "MAC address" (ไม่ใช่ IP!) โดยดูจากตาราง MAC/CAM\n• ⭐ ส่งเฟรมได้ "ภายใน VLAN เดียวกัน" เท่านั้น (VLAN = broadcast domain)\n• เรียนรู้ MAC จาก source ของเฟรมขาเข้า\n• flood เมื่อไม่รู้จักปลายทาง (unknown unicast/broadcast)\n\n🚫 สิ่งที่ L2 switch ทำ "ไม่ได้":\n• ส่งข้ามระหว่าง VLAN → ต้องใช้ Layer 3 (router หรือ L3 switch/SVI)\n• เลือกเส้นทางบน WAN → เป็นงานของ router\n\n✅ ทำไม C, E ถูก: ส่งแพ็กเก็ตภายใน VLAN เดียวกัน (C) และตัดสินใจจาก MAC address (E) คือสองหน้าที่แก่นของ L2 switch\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A,E — แต่ข้อ A ("จุดศูนย์กลางสำหรับ association และ authentication server") เป็นหน้าที่ของ Wireless LAN Controller ไม่ใช่ L2 switch → คำตอบที่ถูกต้องคือ C,E\n\n❌ ทำไมข้ออื่นผิด:\nB. เลือกเส้นทางที่ดีที่สุดบน WAN → หน้าที่ของ router (Layer 3)\nD. ส่งข้ามระหว่าง VLAN → ต้องใช้ Layer 3 เสมอ (L2 switch ทำไม่ได้เด็ดขาด)\nA. เป็นหน้าที่ของ WLC ในระบบไร้สาย\n\n📗 จำไว้สอบ: L2 = MAC + ภายใน VLAN | L3 = IP + ข้าม VLAN/เครือข่าย',
  },
  {
    id: 111,
    kind: 'single',
    prompt:
      'Which spanning-tree enhancement avoids the learning and listening states and immediately places ports in the forwarding state?',
    options: [
      { key: 'A', text: 'BPDUfilter' },
      { key: 'B', text: 'PortFast' },
      { key: 'C', text: 'Backbonefast' },
      { key: 'D', text: 'BPDUguard' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — STP ปกติพอร์ตต้องไต่ผ่าน state ก่อนส่งข้อมูลได้:\n   Blocking → Listening (15s) → Learning (15s) → Forwarding  = รอ ~30 วินาที\n⚠️ ปัญหา: เสียบ PC แล้วรอ 30 วิ → DHCP timeout → เครื่องได้ APIPA (169.254.x.x) แทน IP จริง\n\n📊 STP Enhancements ที่ต้องแยกให้ออก:\n• ⭐ PortFast → ข้าม listening/learning ไปสู่ forwarding "ทันที" (ใช้กับพอร์ตที่ต่อ end host)\n• BPDU Guard → ถ้าพอร์ต PortFast ได้รับ BPDU → err-disable ทันที (ป้องกันคนแอบเสียบสวิตช์)\n• BPDU Filter → ระงับการส่ง/รับ BPDU บนพอร์ตนั้น (ใช้ระวัง! เสี่ยงเกิด loop)\n• UplinkFast → เร่งสลับไป uplink สำรองเมื่อลิงก์ตรงล่ม (direct failure)\n• BackboneFast → เร่ง converge เมื่อเกิด indirect link failure (ลิงก์ที่ไม่ได้ต่อกับเราโดยตรงล่ม)\n\n✅ ทำไม B ถูก: PortFast เป็นตัวเดียวที่ "ข้าม learning และ listening แล้วเข้า forwarding ทันที" ตรงตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. BPDU filter → เกี่ยวกับการระงับ BPDU ไม่ได้เร่ง state ของพอร์ต\nC. BackboneFast → เร่ง convergence กรณี indirect failure ไม่ได้ข้าม state\nD. BPDU guard → ปิดพอร์ต (err-disable) เมื่อได้รับ BPDU ตรงข้ามกับการเปิดใช้งานทันที\n\n📗 จำไว้สอบ: PortFast + BPDU Guard = คู่หูที่ต้องใช้ด้วยกันเสมอ (เร็ว + ปลอดภัย)',
  },
  {
    id: 112,
    kind: 'drag',
    image: q112,
    prompt: 'Drag the IPv6 DNS record types from the left onto the descriptions on the right (AAAA / CNAME / NS / PTR / SOA).',
    categories: [
      { name: 'AAAA', items: ['correlates a host name with an IP address'] },
      { name: 'CNAME', items: ['aliases one name to another'] },
      { name: 'NS', items: ['correlates a domain with its authoritative name servers'] },
      { name: 'PTR', items: ['supports reverse name lookups'] },
      { name: 'SOA', items: ['associates the domain serial number with its owner'] },
    ],
    explanation:
      '📘 แนวคิด — DNS Record Types ที่ต้องจำ (ออกสอบบ่อยมาก):\n\n• A → จับคู่ hostname กับ IPv4 address\n• ⭐ AAAA ("quad-A") → จับคู่ hostname กับ IPv6 address\n   (จำง่าย: IPv6 ยาวกว่า IPv4 4 เท่า → เลยใช้ A สี่ตัว!)\n• ⭐ CNAME (Canonical Name) → สร้าง "alias" ชื่อหนึ่งชี้ไปอีกชื่อหนึ่ง\n   เช่น www.example.com → CNAME → example.com\n• ⭐ NS (Name Server) → ระบุว่า authoritative name server ของโดเมนนี้คือใคร\n• ⭐ PTR (Pointer) → ใช้ทำ "reverse lookup" (IP → ชื่อ) ตรงข้ามกับ A record\n   นิยมใช้ตรวจสอบว่า mail server ไม่ใช่สแปม\n• ⭐ SOA (Start of Authority) → เก็บข้อมูลหลักของโซน: serial number, เจ้าของ (admin email), refresh/retry/expire timer\n• MX (Mail Exchange) → ระบุ mail server ของโดเมน\n\n📗 จำไว้สอบ:\n   ชื่อ → IP (forward) = A / AAAA\n   IP → ชื่อ (reverse) = PTR\n   ชื่อ → ชื่อ (alias) = CNAME\n   ใครดูแลโดเมน = NS | ข้อมูลโซน+serial = SOA',
  },
  {
    id: 113,
    kind: 'single',
    prompt:
      'What is a recommended approach to avoid co-channel congestion while installing access points that use the 2.4 GHz frequency?',
    options: [
      { key: 'A', text: 'different nonoverlapping channels' },
      { key: 'B', text: 'different overlapping channels' },
      { key: 'C', text: 'one overlapping channel' },
      { key: 'D', text: 'one nonoverlapping channel' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ย่าน 2.4 GHz มีปัญหาเรื่องช่องสัญญาณมาก:\n• มีทั้งหมด 11–14 channel (แล้วแต่ประเทศ) แต่แต่ละ channel กว้าง 22 MHz ในขณะที่ห่างกันแค่ 5 MHz\n→ ⚠️ channel ส่วนใหญ่ "ทับซ้อนกัน" (overlap)\n• ⭐ มีเพียง 3 channel ที่ไม่ทับซ้อนกันเลย: 1, 6, 11\n\n📡 ปัญหา 2 แบบที่ต้องแยกให้ออก:\n• Co-channel interference → AP ใกล้กันใช้ channel "เดียวกัน" → ต้องผลัดกันส่ง (แชร์เวลากัน) → throughput ตก\n• Adjacent-channel interference → ใช้ channel ที่ "ทับซ้อนกัน" (เช่น 1 กับ 3) → สัญญาณกวนกันเป็น noise → แย่กว่าอีก!\n\n✅ ทำไม A ถูก: วาง AP ที่อยู่ใกล้กันให้ใช้ channel ที่ "ไม่ทับซ้อนกันและต่างกัน" (1, 6, 11) → หลบได้ทั้ง co-channel และ adjacent-channel interference\n\n❌ ทำไมข้ออื่นผิด:\nB. channel ที่ทับซ้อนกัน (แม้จะต่างกัน) → เกิด adjacent-channel interference สัญญาณกวนกัน\nC, D. ใช้ channel เดียวกันทั้งหมด → เกิด co-channel interference โดยตรง = สิ่งที่โจทย์ต้องการหลีกเลี่ยง!\n\n📗 จำไว้สอบ: 2.4 GHz = 1, 6, 11 เท่านั้น! | 5 GHz มี nonoverlapping channel ~23 ช่อง จึงแออัดน้อยกว่ามาก',
  },
  {
    id: 114,
    kind: 'single',
    prompt: 'Which function is performed by the collapsed core layer in a two-tier architecture?',
    options: [
      { key: 'A', text: 'enforcing routing policies' },
      { key: 'B', text: 'marking interesting traffic for data policies' },
      { key: 'C', text: 'attaching users to the edge of the network' },
      { key: 'D', text: 'applying security policies' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Two-Tier (Collapsed Core):\nเอาชั้น Core + Distribution มา "ยุบรวม" เป็นอุปกรณ์เดียวกัน\n→ เหมาะกับองค์กรขนาดเล็ก-กลางที่ไม่ใหญ่พอจะแยก 3 ชั้น (ประหยัดกว่า)\n\n   [Collapsed Core]  ← ทำหน้าที่ของ core + distribution รวมกัน\n         │\n     [Access]        ← ต่อ end user\n\n📊 หน้าที่ที่ collapsed core รับมาจาก distribution layer:\n• ⭐ บังคับใช้ routing policies (routing ระหว่าง VLAN, route filtering, summarization)\n• เป็นขอบเขต Layer 2 / Layer 3\n• เป็นจุดรวม (aggregation point) ของ access switch\n• ทำ FHRP (HSRP/VRRP) เป็น default gateway ให้ VLAN ต่าง ๆ\n\n✅ ทำไม A ถูก: การบังคับใช้ routing policies เป็นหน้าที่คลาสสิกของ distribution layer ซึ่งถูกรวมเข้ามาอยู่ใน collapsed core\n\n❌ ทำไมข้ออื่นผิด:\nC. การต่อผู้ใช้เข้าเครือข่าย (attaching users to the edge) → เป็นหน้าที่ของ Access layer ไม่ใช่ collapsed core\nB. marking interesting traffic → เป็นงาน QoS ที่ทำที่ access layer (ใกล้ต้นทางที่สุด)\nD. applying security policies → เป็นงานที่ทำได้ แต่ "routing policies" (A) เป็นคำตอบที่ตรงและเป็นแก่นของ distribution มากกว่า\n\n📗 จำไว้สอบ: Access = ต่อผู้ใช้ | Distribution = policy + L2/L3 boundary + aggregation | Core = forward เร็ว ไม่ทำ policy',
  },
  {
    id: 115,
    kind: 'multi',
    prompt: 'What are two functions of a server on a network? (Choose two)',
    options: [
      { key: 'A', text: 'achieves redundancy by exclusively using virtual server clustering' },
      { key: 'B', text: 'runs applications that send and retrieve data for workstations that make requests' },
      { key: 'C', text: 'handles requests from multiple workstations at the same time' },
      { key: 'D', text: 'runs the same operating system in order to communicate with other servers' },
      { key: 'E', text: 'housed solely in a data center that is dedicated to a single client' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — โมเดล Client-Server:\n• Client (workstation) → เป็นฝ่าย "ร้องขอ" บริการ\n• ⭐ Server → เป็นฝ่าย "ให้บริการ" — รันแอปพลิเคชันคอยรับ/ส่งข้อมูลตามที่ client ขอ\n  และต้องรองรับคำขอจาก client "หลายเครื่องพร้อมกัน" ได้ (multi-threaded/concurrent)\n\n✅ ทำไม B, C ถูก:\n• B → server รันแอปที่ส่ง/ดึงข้อมูลให้ workstation ที่ร้องขอ = นิยามตรงตัวของ server\n• C → server ต้องรองรับหลาย workstation พร้อมกัน (ถ้ารับได้ทีละเครื่องก็ไม่ต่างจาก PC ทั่วไป)\n\n❌ ทำไมข้ออื่นผิด — สังเกตคำที่ "แรงเกินจริง":\nA. "exclusively using virtual server clustering" → คำว่า exclusively (เท่านั้น) ผิด! redundancy ทำได้หลายวิธี (RAID, dual PSU, load balancer, HA pair) ไม่จำเป็นต้องใช้ clustering อย่างเดียว\nD. "runs the same OS in order to communicate" → ผิด! server ที่ใช้ OS ต่างกัน (Linux กับ Windows) คุยกันได้สบายผ่านโปรโตคอลมาตรฐาน (HTTP, TCP/IP)\nE. "housed solely in a data center dedicated to a single client" → ผิด! server อยู่ที่ไหนก็ได้ — ในออฟฟิศ, cloud, colocation ที่แชร์กับคนอื่น\n\n📗 จำไว้สอบ: เห็นคำว่า exclusively / solely / must / only ในตัวเลือก → ระวัง! มักเป็นตัวลวงที่ "แรงเกินจริง"',
  },
  {
    id: 116,
    kind: 'single',
    prompt: 'In software defined architectures, which plane is distributed and responsible for traffic forwarding?',
    options: [
      { key: 'A', text: 'management plane' },
      { key: 'B', text: 'control plane' },
      { key: 'C', text: 'policy plane' },
      { key: 'D', text: 'data plane' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โจทย์มี 2 คีย์เวิร์ด ต้องตรงทั้งคู่: "distributed" (กระจาย) + "traffic forwarding" (ส่งต่อทราฟฟิก)\n\n📊 ในสถาปัตยกรรม SDN:\n• Control Plane → ⭐ ถูก "รวมศูนย์" (centralized) ไว้ที่ controller\n   → คำนวณเส้นทาง แล้วส่งตารางลงไปให้อุปกรณ์\n• ⭐ Data Plane → ยังคง "กระจาย" (distributed) อยู่บนอุปกรณ์แต่ละตัว\n   → เพราะการ forward แพ็กเก็ตต้องทำที่ตัวอุปกรณ์เอง (ทำที่ ASIC เร็วระดับนาโนวินาที)\n   → จะให้ส่งแพ็กเก็ตทุกอันไปถาม controller ก่อนก็ช้าเกินไป!\n• Management Plane → ช่องทางจัดการ (SSH, SNMP, NETCONF)\n\n✅ ทำไม D ถูก: Data plane เป็นระนาบเดียวที่ทั้ง "กระจายอยู่ตามอุปกรณ์" และ "รับผิดชอบการ forward ทราฟฟิก" ตรงตามโจทย์ทั้งสองเงื่อนไข\n\n❌ ทำไมข้ออื่นผิด:\nB. control plane → ใน SDN ถูก "รวมศูนย์" (ไม่ใช่ distributed) และหน้าที่คือ "คำนวณเส้นทาง" ไม่ใช่ forward\nA. management plane → ใช้จัดการ/monitor อุปกรณ์ ไม่ได้ forward ทราฟฟิก\nC. policy plane → ไม่ใช่คำศัพท์มาตรฐาน (ตัวลวงที่โผล่บ่อยในชุดข้อสอบนี้)\n\n📗 จำไว้สอบ: SDN = control plane รวมศูนย์ + data plane ยังกระจาย (นี่คือหัวใจของ SDN)',
  },
  {
    id: 117,
    kind: 'single',
    prompt: 'When using Rapid PVST+, which command guarantees the switch is always the root bridge for VLAN 200?',
    options: [
      { key: 'A', text: 'spanning-tree vlan 200 priority 614440' },
      { key: 'B', text: 'spanning-tree vlan 200 priority 38572422' },
      { key: 'C', text: 'spanning-tree vlan 200 priority 0' },
      { key: 'D', text: 'spanning-tree vlan 200 root primary' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎของ STP Priority:\n⭐ ค่าที่ตั้งได้ = 0 ถึง 61440 และต้องเป็น "ทวีคูณของ 4096" เท่านั้น\n   (0, 4096, 8192, … 32768 = ค่าเริ่มต้น, … 61440)\n→ ใส่ค่านอกกฎนี้ IOS ปฏิเสธคำสั่งทันที\n\n🧮 ตรวจทีละข้อ:\n• A. priority 614440 → ❌ เกิน 61440 มาก (สังเกตดี ๆ มีเลข 4 เกินมา!) → ถูกปฏิเสธ\n• B. priority 38572422 → ❌ เกินช่วงและไม่ใช่ทวีคูณ 4096 → ถูกปฏิเสธ\n• D. root primary → ⚠️ IOS แค่คำนวณ priority ให้ "ต่ำกว่า root ปัจจุบัน" (มักได้ 24576)\n     → ไม่ได้การันตีว่าจะเป็น root "ตลอดไป" — ถ้ามีสวิตช์ใหม่ตั้ง priority ต่ำกว่านั้นเข้ามา ก็แพ้ได้\n• ⭐ C. priority 0 → ✔ ถูกกฎ (0 = ทวีคูณของ 4096) และเป็นค่าต่ำสุดที่เป็นไปได้\n     → ไม่มีใครตั้งต่ำกว่านี้ได้อีก = การันตีเป็น root เสมอ\n\n✅ ทำไม C ถูก: โจทย์ใช้คำว่า "guarantees … always" → ต้องใช้ค่าต่ำสุดสัมบูรณ์คือ priority 0\n\n📗 จำไว้สอบ: เห็นคำว่า "always / guarantee" → priority 0 | เห็นแค่ "make it root" ทั่วไป → root primary ก็พอ\n(ข้อนี้เนื้อหาเดียวกับข้อ 98 — ออกซ้ำบ่อยมาก!)',
  },
  {
    id: 118,
    kind: 'drag',
    image: q118,
    prompt: 'Drag and drop the SNMP components from the left onto the descriptions on the right.',
    categories: [
      { name: 'MIB', items: ['collection of variables that can be monitored'] },
      { name: 'SNMP agent', items: ['responds to status requests and requests for information about a device'] },
      { name: 'SNMP manager', items: ['resides on an NMS'] },
      { name: 'SNMP trap', items: ['unsolicited message'] },
    ],
    explanation:
      '📘 แนวคิด — องค์ประกอบของ SNMP (จำภาพนี้):\n\n   [SNMP Manager / NMS]  ←── trap (แจ้งเตือนเอง) ──┐\n         │  query (get/set)                        │\n         ↓                                         │\n   [SNMP Agent บนอุปกรณ์] ─── อ่านค่าจาก ──→ [MIB] ─┘\n\n🧩 แยกทีละตัว:\n• ⭐ MIB (Management Information Base)\n   → "ฐานข้อมูล/แผนที่" ของตัวแปร (object) ทั้งหมดที่ monitor ได้ เช่น CPU, memory, interface counter\n   → แต่ละตัวแปรมีเลขประจำตัวเรียกว่า OID\n\n• ⭐ SNMP Agent\n   → ซอฟต์แวร์ที่รันอยู่ "บนอุปกรณ์" (router/switch)\n   → คอย "ตอบ" คำขอสถานะและข้อมูลจาก manager\n\n• ⭐ SNMP Manager\n   → ซอฟต์แวร์ที่ "อยู่บน NMS" (Network Management System)\n   → เป็นฝ่าย "ถาม" (query) และรวบรวมข้อมูลจาก agent ทุกตัว\n\n• ⭐ SNMP Trap\n   → ข้อความ "ไม่ได้ร้องขอ" (unsolicited) ที่ agent ส่งไปหา manager เองเมื่อเกิดเหตุ\n   → เช่น interface down! ไม่ต้องรอให้ manager มาถาม\n\n📊 พอร์ต: UDP 161 (query/set) | UDP 162 (trap)\n\n📗 จำไว้สอบ: Manager = ถาม (อยู่บน NMS) | Agent = ตอบ (อยู่บนอุปกรณ์) | Trap = agent บอกเอง | MIB = คลังตัวแปร',
  },
  {
    id: 119,
    kind: 'single',
    image: q119,
    prompt:
      'Refer to the exhibit. After the election process, what is the root bridge in the HQ LAN?\nSwitch 1: 0C:E0:38:58:15:77\nSwitch 2: 0C:0E:15:22:1A:61\nSwitch 3: 0C:0E:15:1D:3C:9A\nSwitch 4: 0C:E0:19:A1:4D:16',
    options: [
      { key: 'A', text: 'Switch 1' },
      { key: 'B', text: 'Switch 2' },
      { key: 'C', text: 'Switch 3' },
      { key: 'D', text: 'Switch 4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เมื่อ priority เท่ากันทุกตัว (ไม่ได้ให้มา = ใช้ค่าเริ่มต้น 32768) → ตัดสินด้วย MAC ต่ำสุด\n⚠️ ต้องเทียบเป็นเลข "ฐาน 16" ทีละ octet จากซ้ายไปขวา!\n\n🧮 เทียบทีละขั้น:\n   S1: 0C:E0:38:58:15:77\n   S2: 0C:0E:15:22:1A:61\n   S3: 0C:0E:15:1D:3C:9A\n   S4: 0C:E0:19:A1:4D:16\n\nOctet 1: ทุกตัว = 0C → เสมอ\nOctet 2: S2, S3 = 0E (=14) | S1, S4 = E0 (=224)\n   → ⭐ 0E < E0 → S2 กับ S3 ผ่านเข้ารอบ (S1, S4 ตกรอบทันที)\nOctet 3: S2, S3 = 15 ทั้งคู่ → เสมอ\nOctet 4: S3 = 1D (=29) | S2 = 22 (=34)\n   → ⭐ 1D < 22 → S3 ชนะ!\n\n✅ ทำไม C ถูก: Switch 3 มี MAC ต่ำที่สุด (0C:0E:15:1D:…) → เป็น root bridge\n\n⚠️ กับดักหลัก: อย่าอ่าน hex เป็นเลขฐานสิบ!\n   "E0" ดูเหมือนเล็ก แต่จริง ๆ = 224 ซึ่งใหญ่กว่า "0E" = 14 มาก\n   และ "1D" = 29 น้อยกว่า "22" = 34 (แม้จะดูเหมือน 22 เป็นเลขน้อยกว่าก็ตาม)\n\n📗 จำไว้สอบ: แปลง hex เป็นฐานสิบเสมอเวลาเทียบ MAC → A=10, B=11, C=12, D=13, E=14, F=15',
  },
  {
    id: 120,
    kind: 'single',
    prompt: 'Which CRUD operation modifies an existing table or view?',
    options: [
      { key: 'A', text: 'read' },
      { key: 'B', text: 'create' },
      { key: 'C', text: 'replace' },
      { key: 'D', text: 'update' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — CRUD คือ 4 การกระทำพื้นฐานกับข้อมูล และจับคู่กับ HTTP method ของ REST API:\n\n┌──────────┬──────────────┬───────────────────────────┐\n│ CRUD     │ HTTP Method  │ ความหมาย                   │\n├──────────┼──────────────┼───────────────────────────┤\n│ Create   │ POST         │ สร้างข้อมูลใหม่             │\n│ Read     │ GET          │ อ่าน/ดึงข้อมูล              │\n│ ⭐Update │ PUT / PATCH  │ แก้ไขข้อมูลที่มีอยู่แล้ว     │\n│ Delete   │ DELETE       │ ลบข้อมูล                   │\n└──────────┴──────────────┴───────────────────────────┘\n\n✅ ทำไม D ถูก: โจทย์บอกว่า "modifies an EXISTING table or view" (แก้ไขของที่มีอยู่แล้ว) → ตรงกับ Update พอดี\n\n❌ ทำไมข้ออื่นผิด:\nA. Read → แค่ "อ่าน" ไม่ได้แก้ไขอะไร\nB. Create → "สร้างใหม่" ไม่ใช่แก้ของเดิม\nC. "replace" → ⚠️ ไม่ใช่หนึ่งใน CRUD มาตรฐาน! (เป็นตัวลวง — CRUD มีแค่ Create/Read/Update/Delete)\n\n📗 จำไว้สอบ: PUT = แทนที่ทั้งก้อน | PATCH = แก้บางส่วน — ทั้งคู่นับเป็น Update | สำเร็จ = HTTP 200',
  },
  {
    id: 121,
    kind: 'single',
    prompt:
      'An engineer must configure interswitch VLAN communication between a Cisco switch and a third-party switch. Which action should be taken?',
    options: [
      { key: 'A', text: 'configure IEEE 802.1p' },
      { key: 'B', text: 'configure IEEE 802.1q' },
      { key: 'C', text: 'configure ISL' },
      { key: 'D', text: 'configure DSCP' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — VLAN Trunking Protocol มี 2 ตัว (ต้องแยกให้ออก!):\n\n• ⭐ IEEE 802.1Q ("dot1q") → มาตรฐาน "เปิด" (open standard)\n   - ใช้ได้ข้ามยี่ห้อ (Cisco ↔ HP ↔ Juniper ↔ อื่น ๆ)\n   - ทำงานด้วยการ "แทรก tag 4 ไบต์" เข้าไปในเฟรม Ethernet เดิม\n   - มี native VLAN ที่ส่งแบบ untagged\n   - ⭐ เป็นมาตรฐานเดียวที่ใช้กันในปัจจุบัน\n\n• ISL (Inter-Switch Link) → ของ "Cisco เท่านั้น" (proprietary)\n   - ห่อหุ้มเฟรมทั้งอันใหม่ (encapsulation) ไม่ใช่แทรก tag\n   - ⚠️ ใช้กับสวิตช์ยี่ห้ออื่นไม่ได้! และเลิกใช้ไปแล้ว (deprecated)\n\n✅ ทำไม B ถูก: โจทย์ระบุว่าต้องเชื่อม Cisco กับ "third-party switch" (สวิตช์ยี่ห้ออื่น) → ต้องใช้มาตรฐานเปิด = 802.1Q เท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nC. ISL → เป็นของ Cisco เท่านั้น สวิตช์ยี่ห้ออื่นไม่รู้จัก → trunk ไม่ขึ้น (นี่คือกับดักหลัก!)\nA. 802.1p → เป็นมาตรฐาน "CoS marking" สำหรับ QoS ที่ Layer 2 (3 บิตใน 802.1Q tag) ไม่ใช่โปรโตคอล trunking\nD. DSCP → เป็น QoS marking ที่ Layer 3 (ใน IP header) ไม่เกี่ยวกับ VLAN trunking เลย\n\n📗 จำไว้สอบ: ข้ามยี่ห้อ → 802.1Q เสมอ | เห็นคำว่า third-party/multivendor → ตัด ISL ทิ้งได้ทันที',
  },
  {
    id: 122,
    kind: 'single',
    prompt: 'What is a function of a remote access VPN?',
    options: [
      { key: 'A', text: 'used cryptographic tunneling to protect the privacy of data for multiple users simultaneously' },
      { key: 'B', text: "used exclusively when a user is connected to a company's internal network" },
      { key: 'C', text: 'establishes a secure tunnel between two branch sites' },
      { key: 'D', text: 'allows the users to access company internal network resources through a secure tunnel' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — VPN มี 2 ประเภทหลัก (ต้องแยกให้ขาด):\n\n🔹 ⭐ Remote Access VPN (ผู้ใช้ ↔ องค์กร)\n   • ผู้ใช้ "แต่ละคน" ติดตั้งซอฟต์แวร์ VPN client (เช่น Cisco AnyConnect) บนเครื่องตัวเอง\n   • ใช้ตอนอยู่ "นอก" ออฟฟิศ (ทำงานที่บ้าน, ร้านกาแฟ, โรงแรม)\n   • สร้าง secure tunnel เข้ามาถึงทรัพยากรภายในองค์กรได้เหมือนนั่งอยู่ที่ออฟฟิศ\n   • มักใช้ SSL/TLS VPN หรือ IPsec\n\n🔹 Site-to-Site VPN (สาขา ↔ สาขา)\n   • เชื่อม "เครือข่ายทั้งวง" ของสองไซต์เข้าด้วยกันผ่าน router/firewall ที่ขอบ\n   • ผู้ใช้ปลายทางไม่ต้องติดตั้งอะไรเลย ไม่รู้ตัวด้วยซ้ำว่ามี VPN\n   • มักใช้ IPsec\n\n✅ ทำไม D ถูก: remote access VPN ให้ผู้ใช้เข้าถึงทรัพยากรภายในองค์กรผ่าน secure tunnel — ตรงตามนิยาม\n\n❌ ทำไมข้ออื่นผิด:\nC. "tunnel ระหว่างสองสาขา" → นั่นคือ Site-to-Site VPN ไม่ใช่ remote access (ตัวลวงหลัก!)\nB. "ใช้เฉพาะตอนเชื่อมต่ออยู่ในเครือข่ายภายในองค์กรแล้ว" → ผิดตรงกันข้ามเลย! remote access VPN มีไว้ใช้ตอนอยู่ "นอก" องค์กรต่างหาก\nA. ข้อความคลุมเครือ ไม่ได้ระบุลักษณะเฉพาะของ remote access VPN\n\n📗 จำไว้สอบ: Remote access = คนเดียว มี client software | Site-to-site = ทั้งวง ทำที่ router ขอบ',
  },
  {
    id: 123,
    kind: 'single',
    prompt: 'What is a DHCP client?',
    options: [
      { key: 'A', text: 'a workstation that requests a domain name associated with its IP address' },
      { key: 'B', text: 'a host that is configured to request an IP address automatically' },
      { key: 'C', text: 'a server that dynamically assigns IP addresses to hosts' },
      { key: 'D', text: 'a router that statically assigns IP addresses to hosts' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — บทบาทในระบบ DHCP:\n\n• ⭐ DHCP Client → "ผู้ขอ" — โฮสต์ที่ตั้งค่าให้รับ IP อัตโนมัติ (เช่น PC ที่ตั้ง "Obtain an IP address automatically")\n• DHCP Server → "ผู้แจก" — เก็บ address pool ไว้แจกและจดจำ lease\n• DHCP Relay Agent → "ผู้ส่งต่อ" — router ที่ตั้ง ip helper-address ช่วยส่ง DHCP ข้าม subnet\n\n🔄 กระบวนการ DORA (client เป็นฝ่ายเริ่มเสมอ):\n   1. Discover → client ตะโกน broadcast หา DHCP server\n   2. Offer → server เสนอ IP มาให้\n   3. Request → client ขอใช้ IP นั้น\n   4. Acknowledge → server ยืนยัน\n\n✅ ทำไม B ถูก: DHCP client คือโฮสต์ที่ถูก "ตั้งค่าให้ขอ IP address โดยอัตโนมัติ" — เป็นฝ่ายร้องขอ ไม่ใช่ฝ่ายแจก\n\n❌ ทำไมข้ออื่นผิด:\nC. "server ที่แจก IP แบบไดนามิก" → นั่นคือ DHCP Server (ผู้แจก) ไม่ใช่ client! (ตัวลวงหลัก — อ่านให้ดีว่าโจทย์ถาม client)\nD. "router ที่แจก IP แบบ static" → ไม่ใช่ทั้ง client และไม่ใช่ DHCP ด้วยซ้ำ (static = ตั้งด้วยมือ)\nA. "ขอชื่อโดเมนที่ผูกกับ IP" → นั่นคือการทำ reverse DNS lookup ไม่เกี่ยวกับ DHCP\n\n📗 จำไว้สอบ: บน router สั่งให้เป็น client ด้วย "ip address dhcp" บนอินเทอร์เฟซ',
  },
  {
    id: 124,
    kind: 'multi',
    prompt: 'Which two functions are performed by the core layer in a three-tier architecture? (Choose two)',
    options: [
      { key: 'A', text: 'Provide uninterrupted forwarding service' },
      { key: 'B', text: 'Police traffic that is sent to the edge of the network' },
      { key: 'C', text: 'Provide direct connectivity for end user devices' },
      { key: 'D', text: 'Ensure timely data transfer between layers' },
      { key: 'E', text: 'Inspect packets for malicious activity' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — หน้าที่ของแต่ละชั้นใน Three-Tier (ต้องแยกให้ขาด):\n\n🔹 Access Layer (ชั้นล่าง)\n   • ต่อ end device (PC, โทรศัพท์, AP), PoE, port security, VLAN assignment, QoS marking\n\n🔹 Distribution Layer (ชั้นกลาง)\n   • aggregation point, ขอบเขต L2/L3, inter-VLAN routing\n   • ⭐ ทำ policy ทั้งหมด: ACL, filtering, route summarization, QoS policing, FHRP\n\n🔹 ⭐ Core Layer (ชั้นบน = backbone)\n   • หน้าที่เดียวคือ "forward ให้เร็วที่สุด และไม่มีสะดุด"\n   • ⭐ ห้ามทำ policy/ACL/filtering เด็ดขาด! (เพราะจะหน่วงและเพิ่มภาระ CPU)\n   • เน้น: ความเร็วสูง, redundancy เต็มที่, uptime ต่อเนื่อง\n\n💡 คำขวัญของ Cisco: "Nothing in the core but speed" (ในคอร์มีแต่ความเร็ว)\n\n✅ ทำไม A, D ถูก: ให้บริการ forward อย่างต่อเนื่องไม่สะดุด (A) และรับส่งข้อมูลระหว่างชั้นอย่างรวดเร็ว (D) — ทั้งคู่คือเรื่อง "ความเร็วและความต่อเนื่อง" ตรงตามบทบาทของ core\n\n❌ ทำไมข้ออื่นผิด:\nB. Police traffic → เป็นงาน "policy" ซึ่งทำที่ Distribution layer (core ห้ามทำ!)\nE. ตรวจแพ็กเก็ตหาสิ่งผิดปกติ → เป็นงาน security (firewall/IPS) ไม่ใช่หน้าที่ core\nC. ต่อ end user device โดยตรง → เป็นหน้าที่ของ Access layer\n\n📗 จำไว้สอบ: เห็นคำว่า policy / ACL / filtering / inspect ในคำถามเกี่ยวกับ core → ผิดทันที!',
  },
  {
    id: 125,
    kind: 'single',
    image: q125,
    prompt:
      'Refer to the exhibit. A network administrator must permit SSH access to remotely manage routers. The operations team resides on the 10.20.1.0 network. Which command will accomplish this task?',
    options: [
      { key: 'A', text: 'access-list 2699 permit udp 10.20.1.0 0.0.0.255' },
      { key: 'B', text: 'no access-list 2699 deny tcp any 10.20.1.0 0.0.0.127 eq 22' },
      { key: 'C', text: 'access-list 2699 permit tcp any 10.20.1.0 0.0.0.255 eq 22' },
      { key: 'D', text: 'no access-list 2699 deny ip any 10.20.1.0 0.0.0.255' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิดหัวใจ — ACL ทำงาน "จากบนลงล่าง" และ "หยุดที่บรรทัดแรกที่ match"\n→ ถ้าบรรทัด deny อยู่ "ก่อน" บรรทัด permit → permit จะไม่มีวันถูกอ่านเลย!\n\n🔍 ไล่ ACL ในภาพทีละบรรทัด:\n   1. deny icmp any 10.10.1.0 0.0.0.255 echo\n   2. ⚠️ deny ip any 10.20.1.0 0.0.0.255      ← ตัวปัญหา! บล็อก "ทุกอย่าง" ที่ไปยัง 10.20.1.0/24\n   3. permit ip any 10.10.1.0 0.0.0.255\n   4. permit tcp any 10.20.1.0 0.0.0.127 eq 22  ← อนุญาต SSH อยู่แล้ว! แต่...\n\n💥 ปัญหา: ทราฟฟิก SSH ที่ไปยัง 10.20.1.x จะชนบรรทัดที่ 2 (deny ip) ก่อน → ถูกทิ้งทันที\n→ บรรทัดที่ 4 (permit SSH) ไม่มีวันถูกอ่านเลย = ตายตั้งแต่บรรทัด 2\n\n✅ ทำไม D ถูก: ลบบรรทัด deny ที่เป็นตัวขวาง ด้วย\n   "no access-list 2699 deny ip any 10.20.1.0 0.0.0.255"\n→ พอบรรทัดนั้นหายไป ทราฟฟิก SSH จะไหลลงมาเจอบรรทัด permit ที่มีอยู่แล้ว → ผ่านได้ ✔\n\n❌ ทำไมข้ออื่นผิด:\nC. เพิ่ม permit tcp … eq 22 เข้าไปใหม่ → ⚠️ ไม่ช่วย! เพราะบรรทัดใหม่จะถูก "ต่อท้าย" ACL ซึ่งยังอยู่ "หลัง" บรรทัด deny อยู่ดี → ยังโดนบล็อกเหมือนเดิม (กับดักหลัก!)\nB. ลบบรรทัด "deny tcp … eq 22" → ⚠️ บรรทัดนี้ไม่มีอยู่จริงใน ACL (มีแต่ permit tcp eq 22)\nA. permit udp → SSH ใช้ TCP 22 ไม่ใช่ UDP\n\n📗 จำไว้สอบ: ลำดับใน ACL สำคัญที่สุด! คำสั่งใหม่จะถูกต่อท้ายเสมอ (numbered ACL แก้ตรงกลางไม่ได้ ต้องลบแล้วเขียนใหม่)',
  },
  {
    id: 126,
    kind: 'single',
    prompt: 'What is a practice that protects a network from VLAN hopping attacks?',
    options: [
      { key: 'A', text: 'Enable dynamic ARP inspection' },
      { key: 'B', text: 'Configure an ACL to prevent traffic from changing VLANs' },
      { key: 'C', text: 'Change native VLAN to an unused VLAN ID' },
      { key: 'D', text: 'Implement port security on internet-facing VLANs' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — VLAN Hopping มี 2 แบบ:\n\n1️⃣ Double-Tagging Attack\n   • ผู้โจมตีต้องอยู่ใน "native VLAN" ก่อน (ปกติคือ VLAN 1)\n   • ส่งเฟรมที่ใส่ tag 2 ชั้น: [tag นอก = native VLAN][tag ใน = VLAN เหยื่อ]\n   • สวิตช์ตัวแรกถอด tag นอกออก (เพราะ native = untagged) แล้วส่งต่อ\n   • สวิตช์ตัวที่สองเห็น tag ใน → ส่งเข้า VLAN เหยื่อ! 💥\n   → 🛡️ ป้องกัน: ⭐ เปลี่ยน native VLAN ให้เป็น VLAN ID ที่ "ไม่ได้ใช้งาน"\n      → ผู้โจมตีไม่ได้อยู่ใน native VLAN อีกต่อไป → โจมตีไม่ได้!\n\n2️⃣ Switch Spoofing Attack\n   • ผู้โจมตีปลอมตัวส่ง DTP หลอกให้พอร์ตกลายเป็น trunk → เห็นทุก VLAN\n   → 🛡️ ป้องกัน: ปิด DTP (switchport nonegotiate) + ตั้งพอร์ตเป็น access\n\n✅ ทำไม C ถูก: การเปลี่ยน native VLAN ไปเป็น VLAN ที่ไม่ได้ใช้ เป็นมาตรการมาตรฐานที่ตัดรากของ double-tagging attack โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. Dynamic ARP Inspection → ป้องกัน ARP spoofing / MITM ไม่เกี่ยวกับ VLAN hopping\nD. Port security → จำกัดจำนวน MAC ต่อพอร์ต ป้องกัน MAC flooding ไม่ได้แก้ VLAN hopping\nB. ACL → กรองทราฟฟิกได้ก็จริง แต่ VLAN hopping เกิดที่ Layer 2 (การใส่ tag) ซึ่ง ACL ระดับ IP ไม่สามารถหยุดได้\n\n📗 จำไว้สอบ: มาตรการครบชุดกัน VLAN hopping = เปลี่ยน native VLAN + ปิด DTP + พอร์ตว่าง shutdown',
  },
  {
    id: 127,
    kind: 'single',
    image: q127,
    prompt:
      'Refer to the exhibit. If OSPF is running on this network, how does Router2 handle traffic from Site B to 10.10.13.128 at Site A?',
    options: [
      { key: 'A', text: 'It load-balances traffic out of Fa0/1 and Fa0/2' },
      { key: 'B', text: 'It is unreachable and discards the traffic' },
      { key: 'C', text: 'It sends packets out of interface Fa0/1 only' },
      { key: 'D', text: 'It sends packets out of interface Fa0/2 only' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — router จะทิ้ง (drop) แพ็กเก็ตเมื่อ:\n   1. ไม่มี route ใดใน routing table ครอบคลุมปลายทาง และ\n   2. ไม่มี default route (0.0.0.0/0) มารองรับ\n\n🧮 คำนวณช่วงของ route ที่มี:\n   O 10.10.13.0/25 → mask 255.255.255.128 → block = 256 − 128 = 128\n   → ครอบคลุม 10.10.13.0 ถึง 10.10.13.127 เท่านั้น\n\n🔍 ปลายทาง = 10.10.13.128\n   → ⚠️ อยู่ "นอกช่วง" พอดีเป๊ะ! (route จบที่ .127 ปลายทางคือ .128 = เกินไป 1 เบอร์)\n   → นี่คือกับดักที่ตั้งใจวางไว้ — คนมักเห็น "10.10.13.x" แล้วเหมาว่าตรงกัน\n\n🔍 มี default route ไหม?\n   → บรรทัดบนสุดเขียนว่า "Gateway of last resort is not set" = ไม่มี default route!\n\n✅ ทำไม B ถูก: ไม่มี route ใดครอบคลุม 10.10.13.128 และไม่มี default route → Router2 หาทางไปไม่ได้ → ทิ้งแพ็กเก็ต (unreachable)\n\n❌ ทำไมข้ออื่นผิด:\nC, D. ส่งออก Fa0/1 หรือ Fa0/2 → ทั้งสองเส้นเป็น next-hop ของ route ไป 10.10.13.0/25 ซึ่ง "ไม่ครอบคลุม" ปลายทาง .128\nA. load-balance ทั้งสองเส้น → ก็ยังเป็น route เดียวกันที่ไม่ครอบคลุมปลายทางอยู่ดี\n\n📗 จำไว้สอบ: /25 แบ่ง octet สุดท้ายเป็น 2 ครึ่ง — .0–.127 และ .128–.255 — ต้องเช็คเสมอว่าปลายทางอยู่ครึ่งไหน!',
  },
  {
    id: 128,
    kind: 'single',
    prompt: 'What is the purpose of traffic shaping?',
    options: [
      { key: 'A', text: 'to mitigate delays over slow links' },
      { key: 'B', text: 'to provide fair queuing for buffered flows' },
      { key: 'C', text: 'to limit the bandwidth that a flow can use' },
      { key: 'D', text: 'to be a marking mechanism that identifies different flows' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Traffic Shaping vs Traffic Policing (คู่ที่ต้องแยกให้ขาด!):\n\n🔹 ⭐ Shaping (ปั้นรูป)\n   • ทราฟฟิกที่ "เกิน" อัตราที่กำหนด → เก็บใส่ queue ไว้ก่อน แล้วทยอยส่งทีหลัง\n   • ผลลัพธ์: อัตราการส่งเรียบขึ้น (smoothed) ไม่มีข้อมูลหาย\n   • ⚠️ ข้อแลกเปลี่ยน: เพิ่ม delay (เพราะต้องรอในคิว)\n   • มักใช้ที่ "ขาออก" (outbound) ฝั่งผู้ส่ง\n\n🔹 Policing (ตำรวจ)\n   • ทราฟฟิกที่ "เกิน" → ทิ้งทันที (drop) หรือลด priority\n   • ⚠️ ข้อแลกเปลี่ยน: ข้อมูลหาย แต่ไม่เพิ่ม delay\n   • มักใช้ที่ "ขาเข้า" (inbound) ฝั่งผู้รับ\n\n✅ ทำไม C ถูก: วัตถุประสงค์ของ shaping คือ "จำกัดแบนด์วิดท์ที่ flow หนึ่งใช้ได้" ให้อยู่ในอัตราที่กำหนด — โดยใช้การ buffer เป็นเครื่องมือ\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B — แต่ "fair queuing" เป็นเพียง "กลไก/วิธีจัดคิว" (เช่น WFQ) ไม่ใช่ "วัตถุประสงค์" ของ shaping → คำตอบที่ถูกต้องตามหลัก CCNA คือ C\n\n❌ ทำไมข้ออื่นผิด:\nA. shaping ไม่ได้ลด delay — ตรงกันข้าม มัน "เพิ่ม" delay เพราะต้องพักแพ็กเก็ตไว้ในคิว!\nB. fair queuing = กลไกการจัดคิว (WFQ) ไม่ใช่วัตถุประสงค์ของ shaping\nD. การ mark เพื่อแยกประเภททราฟฟิก = classification/marking (DSCP, CoS) คนละเรื่องกับ shaping\n\n📗 จำไว้สอบ: Shaping = "หน่วงไว้ส่งทีหลัง" (buffer) | Policing = "เกินก็ทิ้งเลย" (drop)',
  },
  {
    id: 129,
    kind: 'single',
    prompt: 'Where does the configuration reside when a helper address is configured to support DHCP?',
    options: [
      { key: 'A', text: 'on the router closest to the server' },
      { key: 'B', text: 'on the router closest to the client' },
      { key: 'C', text: 'on every router along the path' },
      { key: 'D', text: 'on the switch trunk interface' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ทำไมต้องมี DHCP Relay (ip helper-address)?\n\n⚠️ ปัญหา: DHCPDISCOVER เป็น "broadcast" (255.255.255.255)\n→ router "ไม่ forward broadcast" ข้าม subnet โดยธรรมชาติ (นี่คือหน้าที่ของ router — กั้น broadcast domain)\n→ ถ้า DHCP server อยู่คนละ subnet กับ client → client จะไม่มีวันได้ IP เลย!\n\n✅ วิธีแก้ — ip helper-address:\n• ตั้งบนอินเทอร์เฟซของ router ที่ ⭐ "อยู่ใกล้ client ที่สุด" (ฝั่งที่รับ broadcast เข้ามา)\n• router จะ "แปลง broadcast → unicast" แล้วส่งต่อไปยัง IP ของ DHCP server\n• คำสั่ง: interface gi0/0 (ฝั่ง client) → ip helper-address 10.1.1.100\n\n💡 จำง่าย: helper-address ตั้งตรงที่ "ได้ยินเสียงตะโกน" ของ client\n\n✅ ทำไม B ถูก: ต้องตั้งบน router ที่ใกล้ client เพราะเป็นตัวที่ "ได้รับ" DHCP broadcast จาก client โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. router ใกล้ server → ตั้งตรงนี้ไม่มีประโยชน์ เพราะ broadcast ของ client เดินทางมาไม่ถึงตรงนี้อยู่แล้ว (โดนกั้นตั้งแต่ router ตัวแรก)\nC. ทุก router ตลอดเส้นทาง → ไม่จำเป็น! พอแปลงเป็น unicast แล้ว router ตัวอื่น ๆ ก็ route ต่อไปได้เองตามปกติ\nD. บน trunk interface ของสวิตช์ → helper-address เป็นคำสั่งของ router/SVI ไม่ใช่ของพอร์ต trunk\n\n📗 จำไว้สอบ: helper-address ยัง forward broadcast อื่นได้อีก 8 ชนิด (TFTP, DNS, NetBIOS ฯลฯ) ไม่ใช่แค่ DHCP',
  },
  {
    id: 130,
    kind: 'single',
    prompt: 'What facilitates a Telnet connection between devices by entering the device name?',
    options: [
      { key: 'A', text: 'SNMP' },
      { key: 'B', text: 'DNS lookup' },
      { key: 'C', text: 'syslog' },
      { key: 'D', text: 'NTP' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โจทย์ถามว่า "อะไรทำให้ Telnet ด้วยการพิมพ์ชื่ออุปกรณ์ได้"\n→ ต้องมีอะไรสักอย่างแปลง "ชื่อ" → "IP address" ให้ก่อน = DNS lookup\n\n💡 ตัวอย่าง:\n   R1# telnet SW1          ← พิมพ์ชื่อ ไม่ใช่ IP\n   → router ทำ DNS lookup → ได้ IP ของ SW1 → เชื่อมต่อ ✔\n\n🔧 บน Cisco ต้องตั้ง 2 อย่าง:\n   • ip domain-lookup (เปิดใช้ DNS — เปิดอยู่แล้วโดยค่าเริ่มต้น)\n   • ip name-server <ip ของ DNS server>\n   หรือใช้ตารางแบบ static: ip host SW1 10.1.1.2\n\n✅ ทำไม B ถูก: DNS lookup แปลง hostname ให้เป็น IP address → จึง Telnet ด้วยชื่อได้โดยไม่ต้องจำ IP\n\n❌ ทำไมข้ออื่นผิด — แต่ละตัวทำคนละหน้าที่:\nA. SNMP → ใช้ monitor/จัดการอุปกรณ์ (UDP 161/162) ไม่ได้แปลงชื่อ\nC. syslog → เก็บ log เหตุการณ์ (UDP 514) ไม่เกี่ยวกับการแปลงชื่อ\nD. NTP → ซิงค์เวลาให้ตรงกัน (UDP 123) ไม่เกี่ยวกับชื่อ\n\n⚠️ เกร็ด: ถ้าเปิด ip domain-lookup แต่ไม่ได้ตั้ง name-server แล้วพิมพ์คำสั่งผิด → router จะ broadcast หา DNS แล้วค้างหลายวินาที (แก้ด้วย "no ip domain-lookup")\n\n📗 จำไว้สอบ: DNS = ชื่อ ↔ IP | DHCP = แจก IP | NTP = เวลา | SNMP = จัดการ | Syslog = log',
  },
  {
    id: 131,
    kind: 'multi',
    prompt: 'When implementing a router as a DHCP server, which two features must be configured? (Choose two)',
    options: [
      { key: 'A', text: 'relay agent information' },
      { key: 'B', text: 'database agent' },
      { key: 'C', text: 'address pool' },
      { key: 'D', text: 'smart-relay' },
      { key: 'E', text: 'manual bindings' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — ตั้ง router ให้เป็น DHCP Server:\n\n🔧 คำสั่งพื้นฐาน:\n   R1(config)# ip dhcp excluded-address 10.1.1.1 10.1.1.10   ← กัน IP ไว้ไม่แจก\n   R1(config)# ⭐ ip dhcp pool LAN                            ← สร้าง address pool\n   R1(dhcp-config)#   network 10.1.1.0 255.255.255.0          ← ช่วง IP ที่แจก\n   R1(dhcp-config)#   default-router 10.1.1.1                 ← แจก gateway\n   R1(dhcp-config)#   dns-server 8.8.8.8                      ← แจก DNS\n   R1(dhcp-config)#   lease 7                                 ← อายุ lease (วัน)\n\n🔧 ⭐ Manual Binding (จอง IP คงที่ให้เครื่องเฉพาะ เช่น เครื่องพิมพ์/เซิร์ฟเวอร์):\n   R1(config)# ip dhcp pool PRINTER\n   R1(dhcp-config)#   host 10.1.1.50 255.255.255.0\n   R1(dhcp-config)#   client-identifier 0100.1122.3344.55     ← ผูกกับ MAC\n\n✅ ทำไม C, E ถูก: address pool (C) คือหัวใจของ DHCP server และ manual binding (E) คือฟีเจอร์ที่ใช้กำหนด IP คงที่ผ่าน DHCP — ทั้งคู่เป็นการตั้งค่าฝั่ง "server"\n\n❌ ทำไมข้ออื่นผิด:\nA. relay agent information (option 82) → เป็นฟีเจอร์ของ DHCP "relay" ไม่ใช่ server\nD. smart-relay → ก็เป็นฟีเจอร์ของฝั่ง relay เช่นกัน\nB. database agent → ใช้เก็บ binding ไปไว้ที่ external server (FTP/TFTP) เป็นออปชันเสริม ไม่ใช่สิ่งที่ "ต้องมี"\n\n📗 จำไว้สอบ: Server = ip dhcp pool | Relay = ip helper-address | Client = ip address dhcp',
  },
  {
    id: 132,
    kind: 'drag',
    image: q132,
    prompt: 'Drag and drop the QoS congestion-management terms from the left onto the descriptions on the right (CBWFQ / CQ / FIFO / PQ / WFQ).',
    categories: [
      { name: 'CBWFQ', items: ['provides guaranteed bandwidth to a specified class of traffic'] },
      { name: 'CQ', items: ['services a specified number of bytes in one queue before continuing to the next queue'] },
      { name: 'FIFO', items: ['uses store-and-forward queueing'] },
      { name: 'PQ', items: ['places packets into one of four priority-based queues'] },
      { name: 'WFQ', items: ['provides minimum guaranteed bandwidth to one or more flows'] },
    ],
    explanation:
      '📘 แนวคิด — Congestion Management = "วิธีจัดคิว" เมื่อทราฟฟิกแน่น (ตัดสินว่าใครได้ส่งก่อน)\n\n🔹 FIFO (First In First Out)\n   • คิวเดียว มาก่อนได้ก่อน — ⭐ store-and-forward ธรรมดา\n   • ง่ายที่สุด แต่ไม่มี priority เลย (เสียงกับไฟล์ดาวน์โหลดเท่าเทียมกันหมด)\n\n🔹 PQ (Priority Queuing)\n   • ⭐ แบ่งเป็น "4 คิวตามลำดับความสำคัญ": High → Medium → Normal → Low\n   • คิว High ต้องว่างหมดก่อน ถึงจะได้ส่งคิวถัดไป\n   • ⚠️ อันตราย: ถ้า High มีเยอะตลอด → คิว Low ไม่ได้ส่งเลย (starvation)\n\n🔹 CQ (Custom Queuing)\n   • ⭐ ให้บริการทีละ "จำนวน byte ที่กำหนด" ในแต่ละคิว แล้ววนไปคิวถัดไป (round-robin ตามน้ำหนัก)\n   • ทุกคิวได้ส่งแน่นอน ไม่มี starvation แต่ไม่การันตี latency ต่ำ\n\n🔹 WFQ (Weighted Fair Queuing)\n   • ⭐ ให้ "แบนด์วิดท์ขั้นต่ำอย่างเป็นธรรม" แก่แต่ละ flow อัตโนมัติ\n   • flow เล็ก ๆ (interactive) ได้ส่งก่อน flow ใหญ่ (ดาวน์โหลด)\n\n🔹 CBWFQ (Class-Based WFQ)\n   • ⭐ "รับประกันแบนด์วิดท์ให้ class ที่กำหนด" (จัดกลุ่มทราฟฟิกเป็น class เองได้)\n   • เช่น class VOICE ได้ 30%, class WEB ได้ 20%\n\n🔹 LLQ (Low-Latency Queuing) = CBWFQ + priority queue → ดีที่สุดสำหรับเสียง/วิดีโอ\n\n📗 จำไว้สอบ: "4 คิว priority" = PQ | "จำนวน byte ต่อคิว" = CQ | "รับประกัน bandwidth ต่อ class" = CBWFQ | "store-and-forward" = FIFO',
  },
  {
    id: 133,
    kind: 'drag',
    image: q133,
    prompt:
      'An engineer is configuring the router to provide static NAT for the web server. Drag and drop the configuration commands onto the letters (A–F) that correspond to their position in the configuration.',
    categories: [
      { name: 'A (interface Ethernet0)', items: ['ip address 172.16.1.1 255.255.255.0'] },
      { name: 'B (interface Ethernet0)', items: ['ip nat inside'] },
      { name: 'C (interface Serial0)', items: ['ip address 45.83.2.214 255.255.255.240'] },
      { name: 'D (interface Serial0)', items: ['ip nat outside'] },
      { name: 'E', items: ['ip nat inside source static tcp 172.16.1.2 80 45.83.2.214 80 extendable'] },
      { name: 'F', items: ['ip nat inside source list 1 interface s0 overload'] },
    ],
    explanation:
      '📘 แนวคิด — การตั้ง NAT ต้องบอก router 3 อย่างเสมอ:\n   1. อินเทอร์เฟซไหนคือ "ข้างใน" (ip nat inside)\n   2. อินเทอร์เฟซไหนคือ "ข้างนอก" (ip nat outside)\n   3. จะแปลงอย่างไร (คำสั่ง ip nat inside source …)\n\n🔧 ไล่ทีละตำแหน่ง:\n\n📍 interface Ethernet0 (ฝั่ง LAN = ข้างใน)\n   • A → ip address 172.16.1.1 255.255.255.0 ← ตั้ง IP ก่อนเสมอ\n   • B → ⭐ ip nat inside ← ประกาศว่าพอร์ตนี้คือ "ข้างใน"\n\n📍 interface Serial0 (ฝั่ง WAN = ข้างนอก)\n   • C → ip address 45.83.2.214 255.255.255.240 (/28 = public IP)\n   • D → ⭐ ip nat outside ← ประกาศว่าพอร์ตนี้คือ "ข้างนอก"\n\n📍 ระดับ global config (2 บรรทัดนี้คือหัวใจ)\n   • E → ⭐ ip nat inside source static tcp 172.16.1.2 80 45.83.2.214 80 extendable\n     = Static NAT (Port Forwarding) → ให้คนภายนอกเข้าเว็บเซิร์ฟเวอร์ (172.16.1.2:80) ได้\n     คำว่า "extendable" ทำให้ใช้ public IP เดียวกันซ้ำได้กับหลายพอร์ต\n   • F → ⭐ ip nat inside source list 1 interface s0 overload\n     = PAT / NAT overload → ให้ "โฮสต์ภายในอื่น ๆ" (ตาม access-list 1) ออกเน็ตได้\n     โดยแชร์ IP ของ s0 ร่วมกัน (แยกด้วยเลขพอร์ต)\n\n📗 จำไว้สอบ: Static NAT = 1 ต่อ 1 (ให้คนนอกเข้ามาได้) | PAT/overload = หลายต่อ 1 (ให้คนในออกไปได้)',
  },
  {
    id: 134,
    kind: 'drag',
    image: q134,
    prompt: 'Drag and drop the DHCP snooping terms from the left onto the descriptions on the right.',
    categories: [
      { name: 'DHCP server', items: ['network component that propagates IP addresses to hosts on the network'] },
      { name: 'snooping binding database', items: ['list of hosts on the network that are unknown to the administrative domain'] },
      { name: 'spurious DHCP server', items: ['unknown DHCP server within an administrative domain'] },
      { name: 'trusted', items: ['internal device under the control of the network administrator'] },
      { name: 'untrusted', items: ['default state of all interfaces'] },
    ],
    explanation:
      '📘 แนวคิด — DHCP Snooping ป้องกันอะไร?\n⚠️ ภัย: ผู้โจมตีเอา DHCP server ปลอมมาเสียบ → แจก IP + gateway ปลอมให้เหยื่อ → ทราฟฟิกวิ่งผ่านผู้โจมตีหมด (MITM)\n🛡️ DHCP Snooping = สวิตช์ "แอบดู" ทราฟฟิก DHCP แล้วอนุญาตเฉพาะ DHCP server ที่เชื่อถือได้\n\n🧩 คำศัพท์ที่ต้องแยกให้ออก:\n\n• ⭐ DHCP server → อุปกรณ์ที่ "แจก IP address" ให้โฮสต์ในเครือข่าย (ตัวจริงที่ถูกต้อง)\n\n• ⭐ Spurious DHCP server → DHCP server "เถื่อน/ปลอม" ที่ไม่รู้จักในโดเมน (rogue)\n   → นี่คือตัวร้ายที่ DHCP snooping มาปราบ!\n\n• ⭐ Snooping binding database → ตารางที่สวิตช์สร้างขึ้นจากการแอบดู\n   → เก็บ IP ↔ MAC ↔ port ↔ VLAN ของโฮสต์ที่ยังไม่น่าเชื่อถือ\n   → DAI (Dynamic ARP Inspection) เอาตารางนี้ไปใช้ตรวจ ARP ต่อ!\n\n• ⭐ Trusted → พอร์ต/อุปกรณ์ที่ "อยู่ในความควบคุมของผู้ดูแล" (เช่น uplink ที่ไปหา DHCP server จริง)\n   → ปล่อยให้ส่ง DHCP OFFER ได้\n\n• ⭐ Untrusted → ⚠️ "สถานะเริ่มต้นของทุกพอร์ต" เมื่อเปิด DHCP snooping\n   → ห้ามส่ง DHCP OFFER (ถ้าส่งมา = แสดงว่าเป็น server ปลอม → บล็อกทันที!)\n\n🔧 คำสั่ง: ip dhcp snooping → ip dhcp snooping vlan 10 → (บน uplink) ip dhcp snooping trust\n\n📗 จำไว้สอบ: ทุกพอร์ต untrusted โดยค่าเริ่มต้น → ต้องไปตั้ง trust ให้พอร์ต uplink เอง มิฉะนั้น client จะไม่ได้ IP เลย!',
  },
  {
    id: 135,
    kind: 'single',
    prompt: 'What is a role of wireless controllers in an enterprise network?',
    options: [
      { key: 'A', text: 'centralize the management of access points in an enterprise network' },
      { key: 'B', text: 'support standalone or controller-based architectures' },
      { key: 'C', text: 'serve as the first line of defense in an enterprise network' },
      { key: 'D', text: 'provide secure user logins to devices on the network' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — บทบาทของ WLC ในองค์กร:\n⭐ หน้าที่หลัก = "บริหารจัดการ AP จำนวนมากแบบรวมศูนย์"\n\n📊 สิ่งที่ WLC จัดการให้จากที่เดียว:\n• Configuration → เพิ่ม/แก้ SSID, security ครั้งเดียว → AP ทุกตัวได้ตามทันที\n• Firmware → อัปเดต AP ทุกตัวพร้อมกัน\n• ⭐ RRM (Radio Resource Management) → ปรับ channel และกำลังส่งของ AP อัตโนมัติไม่ให้กวนกันเอง\n• Roaming → ให้ client เดินย้าย AP ได้ราบรื่นโดยไม่หลุด\n• Rogue AP detection → ตรวจจับ AP เถื่อน\n• ส่งคำขอ authentication ต่อไปยัง RADIUS/ISE\n\n💡 ถ้าไม่มี WLC: มี AP 100 ตัว = ต้องไล่ตั้งค่าทีละตัว 100 รอบ (ไม่ scale เลย!)\n\n✅ ทำไม A ถูก: การรวมศูนย์การจัดการ AP คือเหตุผลของการมี WLC อยู่\n\n❌ ทำไมข้ออื่นผิด:\nB. "รองรับทั้ง standalone และ controller-based" → ผิด! WLC จัดการได้เฉพาะ lightweight AP (controller-based) เท่านั้น ส่วน standalone/autonomous AP ทำงานเองไม่พึ่ง WLC\nC. "first line of defense" → เป็นหน้าที่ของ Firewall ไม่ใช่ WLC\nD. "ให้ผู้ใช้ login เข้าอุปกรณ์อย่างปลอดภัย" → เป็นหน้าที่ของ AAA server (RADIUS/TACACS+) — WLC แค่ "ส่งต่อ" คำขอไปให้ ไม่ได้ตรวจสอบเอง\n\n📗 จำไว้สอบ: WLC = จัดการ AP รวมศูนย์ | Firewall = ป้องกัน | RADIUS = ยืนยันตัวตน',
  },
  {
    id: 136,
    kind: 'single',
    prompt: 'How do servers connect to the network in a virtual environment?',
    options: [
      { key: 'A', text: 'wireless to an access point that is physically connected to the network' },
      { key: 'B', text: 'a cable connected to a physical switch on the network' },
      { key: 'C', text: 'a virtual switch that links to an access point that is physically connected to the network' },
      { key: 'D', text: 'a software switch on a hypervisor that is physically connected to the network' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — VM เชื่อมต่อเครือข่ายอย่างไร:\n\n   [VM1]  [VM2]  [VM3]          ← แต่ละ VM มี "vNIC" (การ์ดเครือข่ายเสมือน)\n     │      │      │\n   ┌─┴──────┴──────┴─┐\n   │  Virtual Switch │           ← ⭐ สวิตช์ "ซอฟต์แวร์" บน hypervisor\n   └────────┬────────┘\n            │\n      [Physical NIC]             ← การ์ดเครือข่ายจริงของเซิร์ฟเวอร์\n            │\n     [Physical Switch]           ← เครือข่ายจริงภายนอก\n\n🔑 จุดสำคัญ:\n• VM ไม่ได้ต่อสายเข้าสวิตช์จริงโดยตรง — มันต่อกับ virtual switch (vSwitch) ก่อนเสมอ\n• vSwitch เป็น "software switch" ที่รันอยู่บน hypervisor ทำงานเหมือนสวิตช์ L2 ทั่วไป (มี MAC table, รองรับ VLAN)\n• VM คุยกันเองภายในเครื่องเดียวกัน → ทราฟฟิกไม่ออกไปข้างนอกเลย (vSwitch จัดการให้)\n• VM คุยกับโลกภายนอก → ผ่าน vSwitch ออกไปยัง physical NIC\n\n✅ ทำไม D ถูก: VM เชื่อมต่อผ่าน "software switch บน hypervisor" ซึ่ง hypervisor ต่อกับเครือข่ายจริงอีกที — ตรงตามสถาปัตยกรรม\n\n❌ ทำไมข้ออื่นผิด:\nB. "ต่อสายเข้าสวิตช์จริงโดยตรง" → VM เป็นซอฟต์แวร์ ไม่มีพอร์ตกายภาพให้เสียบสาย!\nA, C. เกี่ยวข้องกับ access point / ไร้สาย → เซิร์ฟเวอร์ใน data center ต่อแบบมีสายเสมอ ไม่ได้ใช้ Wi-Fi\n\n📗 จำไว้สอบ: vSwitch = สวิตช์ L2 ที่เป็นซอฟต์แวร์ | ตัวอย่าง: VMware vSwitch/DVS, Cisco Nexus 1000V, Open vSwitch',
  },
  {
    id: 137,
    kind: 'single',
    image: q137,
    prompt:
      'Refer to the exhibit. Which switch becomes the root of the spanning tree for VLAN 110?\nSwitch 1: 32778 0018.184e.3c00\nSwitch 2: 24586 001a.e3ff.a680\nSwitch 3: 28682 0022.55cf.cc00\nSwitch 4: 64000 0e38.7363.657f',
    options: [
      { key: 'A', text: 'Switch 1' },
      { key: 'B', text: 'Switch 2' },
      { key: 'C', text: 'Switch 3' },
      { key: 'D', text: 'Switch 4' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Root Bridge เลือกจาก Bridge ID ต่ำสุด:\n   Bridge ID = Priority + MAC\n   → เทียบ Priority ก่อน (ต่ำสุดชนะ) → ถ้าเท่ากันเท่านั้น จึงเทียบ MAC\n\n🧮 เทียบ Priority (ตัวเลขแรกในแต่ละบรรทัด):\n   Switch 1 → 32778\n   ⭐ Switch 2 → 24586  ← ต่ำสุด! ชนะทันที\n   Switch 3 → 28682\n   Switch 4 → 64000\n\n✅ ทำไม B ถูก: Switch 2 มี priority 24586 ต่ำที่สุดในบรรดาทั้ง 4 ตัว → เป็น root bridge ทันที\n⭐ ไม่ต้องดู MAC เลย! เพราะ MAC จะถูกใช้ก็ต่อเมื่อ priority "เสมอกัน" เท่านั้น\n\n💡 เกร็ด — ทำไม priority ถึงเป็นเลขแปลก ๆ (24586, 32778)?\nเพราะค่านี้คือ Priority + VLAN ID (เรียกว่า Extended System ID ใน PVST+):\n   • 24586 = 24576 + 10 ... เอ๊ะ VLAN 110 นี่นา?\n   • จริง ๆ คือ 24576 + 10 → แต่ในบริบทนี้แค่เทียบว่าเลขไหนน้อยสุดก็พอ\n   • ค่าฐานที่พบบ่อย: 4096, 8192, 24576, 32768 (default)\n\n❌ ทำไมข้ออื่นผิด:\nC. Switch 3 (28682) → สูงกว่า Switch 2\nA. Switch 1 (32778) → สูงกว่า (นี่คือค่า default 32768 + 10)\nD. Switch 4 (64000) → สูงที่สุด แม้ MAC จะขึ้นต้นด้วย 0e ก็ไม่ช่วย เพราะ priority แพ้ไปแล้ว\n\n📗 จำไว้สอบ: Priority มาก่อน MAC เสมอ — ถ้าเห็น priority ต่างกัน ไม่ต้องเสียเวลาเทียบ MAC เลย!',
  },
  {
    id: 138,
    kind: 'single',
    prompt: 'Which device tracks the state of active connections in order to make a decision to forward a packet through?',
    options: [
      { key: 'A', text: 'wireless access point' },
      { key: 'B', text: 'firewall' },
      { key: 'C', text: 'wireless LAN controller' },
      { key: 'D', text: 'router' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Stateful Inspection (หรือเรียกว่า dynamic packet filtering):\n\n🔹 Firewall เก็บ "state table" บันทึกทุกการเชื่อมต่อที่ active อยู่\n   (source IP/port, destination IP/port, สถานะ TCP, เวลา)\n\n📖 ตัวอย่างการทำงาน:\n   1. PC ภายใน (10.1.1.5) เปิดเว็บไปหา 8.8.8.8:443\n   2. firewall จดไว้ใน state table ว่า "การเชื่อมต่อนี้ถูกเปิดจากข้างใน"\n   3. เมื่อ 8.8.8.8 ตอบกลับมา → firewall เช็ค state table → ✔ ตรงกับที่จดไว้ → ปล่อยผ่าน\n   4. ถ้ามีใครจู่ ๆ ยิงแพ็กเก็ตเข้ามาเองโดยไม่มีการเชื่อมต่อรองรับ → ✘ บล็อกทันที\n\n💡 ข้อดี: ไม่ต้องเขียนกฎขากลับเอง firewall รู้เองว่าอันไหนคือ "ทราฟฟิกตอบกลับที่ถูกต้อง"\n\n✅ ทำไม B ถูก: การติดตามสถานะการเชื่อมต่อเพื่อตัดสินใจ forward เป็นนิยามของ stateful firewall\n\n❌ ทำไมข้ออื่นผิด:\nD. router → ⚠️ ตัวลวงที่ดี! router ตัดสินใจจาก "destination IP ในตาราง routing" เท่านั้น ไม่ได้จำสถานะของการเชื่อมต่อ (ACL ธรรมดาบน router เป็น "stateless")\nA. access point → เชื่อมอุปกรณ์ไร้สายเข้าเครือข่ายมีสาย ไม่ได้กรองตามสถานะ\nC. WLC → บริหารจัดการ AP ไม่ใช่อุปกรณ์ตรวจสอบ state ของทราฟฟิก\n\n📗 จำไว้สอบ: คีย์เวิร์ด "state / stateful / track connections / dynamic packet filtering" → firewall เสมอ',
  },
  {
    id: 139,
    kind: 'drag',
    image: q139,
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
      '📘 แนวคิด — เปรียบเทียบ 2 สถาปัตยกรรม:\n\n🔹 Collapsed Core (Two-Tier)\n         [Collapsed Core]   ← ⭐ อุปกรณ์เดียวทำทั้ง core + distribution\n               │\n           [Access]\n   • ⭐ อุปกรณ์เดียวรับหน้าที่ทั้ง core และ distribution (ยุบรวมกัน)\n   • ⭐ ประหยัดกว่า (ซื้ออุปกรณ์น้อยกว่า จ่ายค่าไฟ/ค่าดูแลน้อยกว่า)\n   • ⭐ เหมาะกับเครือข่ายขนาดเล็ก (สาขาเดียว, ตึกเดียว)\n\n🔹 Three-Tier\n            [Core]          ← forward เร็วอย่างเดียว\n              │\n        [Distribution]      ← ⭐ แยกออกมาต่างหาก: policy, L2/L3 boundary\n              │\n          [Access]\n   • ⭐ แยกอุปกรณ์ core กับ distribution ออกจากกันชัดเจน\n   • ⭐ เพิ่มความพร้อมใช้งาน (availability) — มี redundancy หลายชั้น\n   • รองรับการขยายตัวได้ดีกว่ามาก (scalable) เหมาะกับองค์กรใหญ่/หลายตึก\n\n💡 หลักการเลือก: ถ้าเครือข่ายเล็กและงบจำกัด → Collapsed Core ก็เพียงพอ\n                  ถ้าใหญ่ ต้องการ uptime สูงและขยายต่อได้ → Three-Tier\n\n📗 จำไว้สอบ: เห็น "cost-effective / small network / single device" → Collapsed Core\n              เห็น "availability / separate devices / scalable" → Three-Tier',
  },
  {
    id: 140,
    kind: 'single',
    prompt:
      'How does a switch process a frame received on Fa0/1 with the destination MAC address of 0e38.7363.657b when the table is missing the address?',
    options: [
      { key: 'A', text: 'It drops the frame immediately' },
      { key: 'B', text: 'It forwards the frame back out of interface Fa0/1' },
      { key: 'C', text: 'It floods the frame to all interfaces except Fa0/1' },
      { key: 'D', text: 'It holds the frame until the MAC address timer expires and then drops the frame' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สวิตช์ทำอะไรกับเฟรมที่เข้ามา (3 ขั้น):\n1️⃣ Learn → จำ source MAC + พอร์ตที่รับ ลงตาราง MAC (CAM table)\n2️⃣ Forward → ถ้ารู้จัก destination MAC → ส่งออก "พอร์ตนั้นพอร์ตเดียว"\n3️⃣ ⭐ Flood → ถ้า "ไม่รู้จัก" destination MAC (unknown unicast) → ส่งออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตที่รับเข้ามา\n\n🔍 โจทย์นี้: destination MAC = 0e38.7363.657b แต่ "ตารางไม่มี MAC นี้"\n→ เป็น unknown unicast → สวิตช์ต้อง flood\n→ ส่งออกทุกพอร์ต "ยกเว้น Fa0/1" (พอร์ตที่รับเฟรมเข้ามา)\n\n💡 ทำไมต้อง flood แทนที่จะทิ้ง?\n→ เพื่อให้เฟรมมีโอกาสถึงปลายทาง และเมื่อปลายทางตอบกลับ สวิตช์จะได้ "เรียนรู้" MAC นั้นไว้ใช้ครั้งต่อไป → ครั้งหน้าไม่ต้อง flood อีก\n\n✅ ทำไม C ถูก: flood ออกทุกพอร์ตยกเว้นพอร์ตต้นทาง (Fa0/1)\n\n❌ ทำไมข้ออื่นผิด:\nA. ทิ้งเฟรมทันที → การสื่อสารครั้งแรกจะล้มเหลวเสมอ (สวิตช์จะไม่มีวันเรียนรู้ MAC ใหม่ได้เลย)\nB. ส่งกลับออกพอร์ตเดิม (Fa0/1) → ผู้ส่งจะได้รับเฟรมของตัวเองคืน = ไร้สาระและเสี่ยง loop\nD. ถือเฟรมรอจน timer หมดแล้วทิ้ง → สวิตช์ไม่ทำแบบนี้ (มันตัดสินใจทันที ไม่รอ)\n\n📗 จำไว้สอบ: การ flood จำกัดอยู่ใน "VLAN เดียวกัน" เสมอ (VLAN = broadcast domain)',
  },
  {
    id: 141,
    kind: 'drag',
    image: q141,
    prompt: 'Drag and drop the SNMP manager and agent identifier commands from the left onto the functions on the right.',
    categories: [
      { name: 'show snmp chassis', items: ['displays the SNMP server serial number'] },
      { name: 'show snmp community', items: ['displays the SNMP access string'] },
      { name: 'show snmp engineID', items: ['displays the IP address of the remote SNMP device'] },
      { name: 'show snmp group', items: ['displays the SNMP security model in use'] },
      { name: 'show snmp host', items: ['displays information about the SNMP recipient'] },
    ],
    explanation:
      '📘 แนวคิด — คำสั่ง show snmp แต่ละตัวแสดงอะไร (จำจาก "ชื่อคำสั่ง" ได้เลย):\n\n• ⭐ show snmp chassis → แสดง "serial number" ของตัวเครื่อง\n   💡 chassis = ตัวถัง/โครงเครื่อง → เลขประจำเครื่อง\n\n• ⭐ show snmp community → แสดง "access string" (community string)\n   💡 community string = รหัสผ่านของ SNMPv1/v2c\n      - public = อ่านอย่างเดียว (RO) | private = อ่าน-เขียนได้ (RW)\n\n• ⭐ show snmp engineID → แสดง "IP address ของอุปกรณ์ SNMP ฝั่งตรงข้าม"\n   💡 engine ID เป็นรหัสเฉพาะตัว ซึ่งมี IP ฝังอยู่ในนั้น\n\n• ⭐ show snmp group → แสดง "security model ที่ใช้"\n   💡 group ใน SNMPv3 = กำหนดระดับความปลอดภัย (noAuthNoPriv / authNoPriv / authPriv)\n\n• ⭐ show snmp host → แสดงข้อมูล "ผู้รับ" (recipient) ของ trap\n   💡 host = ปลายทางที่เราส่ง trap ไปหา (คือ NMS นั่นเอง)\n\n📗 จำไว้สอบ: SNMPv1/v2c ใช้ community string แบบ plain text (ไม่ปลอดภัย!)\n              SNMPv3 มี authentication + encryption → ควรใช้ตัวนี้ในงานจริง',
  },
  {
    id: 142,
    kind: 'single',
    prompt:
      'A network administrator must enable DHCP services between two sites. What must be configured for the router to pass DHCPDISCOVER messages on to the server?',
    options: [
      { key: 'A', text: 'a DHCP Relay Agent' },
      { key: 'B', text: 'DHCP Binding' },
      { key: 'C', text: 'a DHCP Pool' },
      { key: 'D', text: 'DHCP Snooping' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ปัญหาคลาสสิก: DHCPDISCOVER เป็น "broadcast" (ส่งไป 255.255.255.255)\n⚠️ router "ไม่ forward broadcast" ข้าม subnet เป็นธรรมชาติ (นั่นคือหน้าที่ของมัน — กั้น broadcast domain)\n→ DHCP server อยู่คนละ site (คนละ subnet) → client ตะโกนเท่าไหร่ก็ไม่มีใครได้ยิน!\n\n✅ วิธีแก้ — DHCP Relay Agent:\n• ตั้งด้วยคำสั่ง "ip helper-address <ip ของ DHCP server>"\n• ตั้งบนอินเทอร์เฟซของ router ที่ "อยู่ใกล้ client" (ฝั่งที่ได้ยิน broadcast)\n• router จะ "แปลง broadcast → unicast" แล้วส่งต่อไปหา DHCP server ข้าม site ได้ ✔\n\n✅ ทำไม A ถูก: DHCP Relay Agent คือสิ่งเดียวที่ทำให้ router ส่งต่อ DHCPDISCOVER ข้าม subnet/site ได้\n\n❌ ทำไมข้ออื่นผิด:\nC. DHCP Pool → ใช้เมื่อต้องการให้ router "เป็น DHCP server เอง" — แต่โจทย์บอกว่ามี server อยู่แล้วที่อีก site (แค่ส่งต่อไปให้)\nB. DHCP Binding → คือรายการที่บันทึกว่าแจก IP ไหนให้ MAC ไหน (เป็นผลลัพธ์ ไม่ใช่สิ่งที่ต้องตั้งเพื่อส่งต่อ)\nD. DHCP Snooping → เป็นฟีเจอร์ "ความปลอดภัย" ป้องกัน DHCP server ปลอม ไม่ได้ช่วยส่งต่อข้าม subnet\n\n📗 จำไว้สอบ: Relay = ip helper-address | Server = ip dhcp pool | Client = ip address dhcp | Security = ip dhcp snooping',
  },
  {
    id: 143,
    kind: 'single',
    prompt: 'What is recommended for the wireless infrastructure design of an organization?',
    options: [
      { key: 'A', text: 'group access points together to increase throughput on a given channel' },
      { key: 'B', text: 'configure the first three access points to use Channels 1, 6, and 11' },
      { key: 'C', text: 'include at least two access points on nonoverlapping channels to support load balancing' },
      { key: 'D', text: 'assign physically adjacent access points to the same Wi-Fi channel' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ย่าน 2.4 GHz มี nonoverlapping channel เพียง 3 ช่อง: 1, 6, 11\n(channel อื่นทับซ้อนกันหมด เพราะแต่ละช่องกว้าง 22 MHz แต่ห่างกันแค่ 5 MHz)\n\n📡 การวางแผน channel แบบมาตรฐาน (honeycomb pattern):\n   AP1 = ch 1  |  AP2 = ch 6  |  AP3 = ch 11  |  AP4 = ch 1 (วนกลับ)\n→ AP ที่อยู่ติดกันจะไม่ใช้ channel เดียวกันหรือทับซ้อนกันเลย\n\n✅ ทำไม B ถูก: การตั้ง AP สามตัวแรกให้ใช้ channel 1, 6, 11 คือแนวปฏิบัติมาตรฐานของการออกแบบ WLAN — ครอบคลุมพื้นที่ได้โดยไม่รบกวนกันเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. "จับ AP มารวมกันเพื่อเพิ่ม throughput บน channel เดียวกัน" → ⚠️ ผิดตรงกันข้าม! AP ที่ใช้ channel เดียวกันต้อง "ผลัดกันส่ง" (co-channel interference) → throughput "ลดลง" ไม่ใช่เพิ่ม\nD. "ให้ AP ที่อยู่ติดกันใช้ channel เดียวกัน" → เกิด co-channel interference โดยตรง = แย่ที่สุด\nC. "มี AP อย่างน้อย 2 ตัวบน nonoverlapping channel เพื่อ load balancing" → ฟังดูดีแต่คลุมเครือ และไม่ใช่หลักการออกแบบมาตรฐานที่ Cisco แนะนำ (มาตรฐานคือ 1/6/11)\n\n📗 จำไว้สอบ: 2.4 GHz → 1, 6, 11 (ท่องให้ขึ้นใจ!) | 5 GHz มี nonoverlapping ~23 ช่อง จึงยืดหยุ่นกว่ามาก\nในระบบ WLC มี RRM/DCA คอยจัด channel ให้อัตโนมัติ',
  },
  {
    id: 144,
    kind: 'single',
    image: q144,
    prompt:
      'Refer to the exhibit. The port is configured with "spanning-tree portfast" and "spanning-tree bpduguard enable". What is the result if Gig1 receives an STP BPDU?',
    options: [
      { key: 'A', text: 'The port transitions to STP blocking' },
      { key: 'B', text: 'The port transitions to the root port' },
      { key: 'C', text: 'The port immediately transitions to STP forwarding' },
      { key: 'D', text: 'The port goes into error-disable state' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ทำไม PortFast + BPDU Guard ต้องมาคู่กัน:\n\n🔹 PortFast → ทำให้พอร์ตเข้า forwarding ทันที (ข้าม listening/learning)\n   ⚠️ แต่มีเงื่อนไข: พอร์ตนั้น "ต้องต่อกับ end host เท่านั้น" (PC, printer, server)\n   ⚠️ ถ้ามีคนแอบเอาสวิตช์มาเสียบพอร์ต PortFast → เข้า forwarding ทันทีโดยไม่ผ่าน STP → 💥 เกิด loop!\n\n🔹 ⭐ BPDU Guard → ตัวป้องกันความเสี่ยงข้างต้น\n   • หลักการ: "end host ไม่มีทางส่ง BPDU" (มีแต่สวิตช์เท่านั้นที่ส่ง)\n   • ดังนั้นถ้าพอร์ต PortFast ได้รับ BPDU → แสดงว่ามีสวิตช์แปลกปลอมมาเสียบ!\n   • → สั่ง err-disable พอร์ตนั้น "ทันที" (ปิดพอร์ต หยุด forward ทราฟฟิกทั้งหมด)\n\n✅ ทำไม D ถูก: config ในภาพเปิดทั้ง portfast และ bpduguard → เมื่อ Gig1 ได้รับ BPDU → พอร์ตเข้าสู่ err-disable state ทันที\n\n❌ ทำไมข้ออื่นผิด:\nA. transitions to blocking → เป็นพฤติกรรมของ STP ปกติ (ไม่มี BPDU guard) — BPDU guard รุนแรงกว่านั้น คือ "ปิดพอร์ตไปเลย"\nB. กลายเป็น root port → เป็นไปไม่ได้ พอร์ตถูกปิดไปแล้ว\nC. เข้า forwarding ทันที → นั่นคือพฤติกรรมของ PortFast "ตอนไม่มี BPDU" — แต่พอมี BPDU เข้ามา BPDU guard จะเข้ามาแทรกและปิดพอร์ต\n\n🔧 วิธีกู้พอร์ตที่ err-disable:\n   • shutdown → no shutdown (ทำด้วยมือ)\n   • หรือตั้งให้กู้อัตโนมัติ: errdisable recovery cause bpduguard\n\n📗 จำไว้สอบ: BPDU Guard = err-disable | Root Guard = root-inconsistent (บล็อกแต่ไม่ปิดพอร์ต) — สองตัวนี้ชอบสลับกัน!',
  },
  {
    id: 145,
    kind: 'single',
    prompt: 'What does a switch use to build its MAC address table?',
    options: [
      { key: 'A', text: 'VTP' },
      { key: 'B', text: 'DTP' },
      { key: 'C', text: 'egress traffic' },
      { key: 'D', text: 'ingress traffic' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิดหัวใจ — สวิตช์เรียนรู้ MAC จาก "SOURCE MAC ของเฟรมขาเข้า" เท่านั้น!\n\n📖 ตัวอย่างการทำงาน:\n   PC-A (MAC: aaaa.aaaa.aaaa) ต่ออยู่พอร์ต Fa0/1 → ส่งเฟรมออกมา\n   → สวิตช์อ่าน "source MAC = aaaa.aaaa.aaaa" จากเฟรมที่เข้ามาทาง Fa0/1\n   → บันทึกลงตาราง: aaaa.aaaa.aaaa ↔ Fa0/1 ✔\n   → ครั้งหน้าถ้ามีใครส่งหา aaaa.aaaa.aaaa → สวิตช์รู้แล้วว่าต้องส่งออก Fa0/1\n\n⭐ จุดสำคัญ: สวิตช์ "ไม่เคย" เรียนรู้จาก destination MAC\n   (เพราะ destination อาจเป็นเครื่องที่อยู่คนละที่ หรือยังไม่รู้จักด้วยซ้ำ)\n\n✅ ทำไม D ถูก: "ingress traffic" = ทราฟฟิกขาเข้า → สวิตช์อ่าน source MAC จากเฟรมที่เข้ามาเพื่อสร้างตาราง MAC\n\n❌ ทำไมข้ออื่นผิด:\nC. egress traffic (ขาออก) → สวิตช์ไม่ได้เรียนรู้จากทราฟฟิกขาออก (กับดักหลัก! ต่างจาก D แค่คำเดียว)\nA. VTP (VLAN Trunking Protocol) → ใช้ซิงค์ "VLAN database" ระหว่างสวิตช์ ไม่เกี่ยวกับตาราง MAC\nB. DTP (Dynamic Trunking Protocol) → ใช้เจรจาว่าลิงก์จะเป็น trunk หรือ access ไม่เกี่ยวกับ MAC\n\n📗 จำไว้สอบ: ตาราง MAC มี aging time 300 วินาที (5 นาที) — ถ้าไม่มีทราฟฟิกจาก MAC นั้นเลย จะถูกลบทิ้ง\n              คำสั่งดู: show mac address-table',
  },
  {
    id: 146,
    kind: 'single',
    image: q146,
    prompt:
      'Refer to the exhibit. PC1 is trying to ping PC3 for the first time and sends out an ARP request that arrives at S1 on G0/0. Which action is taken by S1?',
    options: [
      { key: 'A', text: 'It forwards it out G0/1 only' },
      { key: 'B', text: 'It is flooded out every port except G0/0' },
      { key: 'C', text: 'It drops the frame' },
      { key: 'D', text: 'It forwards it out interface G0/2 only' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ARP Request คือ "broadcast" เสมอ!\n\n💡 ทำไม? เพราะ PC1 ยังไม่รู้ MAC ของปลายทาง → ต้องตะโกนถามทุกคนว่า "ใครคือ IP นี้?"\n   → destination MAC = FFFF.FFFF.FFFF (broadcast address)\n\n🔄 ขั้นตอนตอน PC1 ping PC3 ครั้งแรก:\n   1. PC1 ยังไม่มี MAC ของ PC3 ใน ARP cache\n   2. PC1 ส่ง ARP Request แบบ broadcast: "ใครคือ IP ของ PC3? ตอบมาที!"\n   3. ⭐ สวิตช์ S1 รับเข้ามาทาง G0/0 → เห็นว่าเป็น broadcast → flood ออกทุกพอร์ต "ยกเว้น G0/0"\n      (รวมถึงส่งข้าม trunk ไปยัง S2 ด้วย เพื่อให้ถึง PC3)\n   4. PC3 ได้รับ → ตอบ ARP Reply กลับมาแบบ unicast\n\n✅ ทำไม B ถูก: ARP request เป็น broadcast → สวิตช์ flood ออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตที่รับเข้ามา (G0/0)\n\n❌ ทำไมข้ออื่นผิด:\nA, D. ส่งออกพอร์ตเดียว → สวิตช์จะทำแบบนี้กับ "unicast ที่รู้จัก MAC ปลายทางแล้ว" เท่านั้น — แต่นี่เป็น broadcast\nC. ทิ้งเฟรม → สวิตช์ไม่เคยทิ้ง broadcast ภายใน VLAN เดียวกัน (ถ้าทิ้ง PC1 จะไม่มีวันหา PC3 เจอเลย!)\n\n📗 จำไว้สอบ: ARP Request = broadcast (FFFF.FFFF.FFFF) | ARP Reply = unicast (ตอบกลับตรงตัว)\n              broadcast วิ่งได้ใน "VLAN เดียวกัน" เท่านั้น — ข้าม VLAN ต้องผ่าน router',
  },
  {
    id: 147,
    kind: 'single',
    prompt: 'What does a router do when configured with the default DNS lookup settings, and a URL is entered on the CLI?',
    options: [
      { key: 'A', text: 'initiates a ping request to the URL' },
      { key: 'B', text: 'prompts the user to specify the desired IP address' },
      { key: 'C', text: 'continuously attempts to resolve the URL until the command is cancelled' },
      { key: 'D', text: 'sends a broadcast message in an attempt to resolve the URL' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — พฤติกรรมค่าเริ่มต้นของ Cisco IOS:\n• "ip domain-lookup" → ⭐ เปิดอยู่แล้วโดยค่าเริ่มต้น (router พยายาม resolve ชื่อเสมอ)\n• แต่ปกติ "ยังไม่ได้ตั้ง" ip name-server (ไม่รู้ว่า DNS server อยู่ที่ไหน)\n\n😤 อาการที่ทุกคนเคยเจอ:\n   R1# shwo ip route          ← พิมพ์ผิด!\n   Translating "shwo"...domain server (255.255.255.255)\n   → router คิดว่าเราอยาก Telnet ไปหาโฮสต์ชื่อ "shwo"\n   → ⭐ ไม่รู้จัก DNS server → เลย broadcast ไป 255.255.255.255 ถามหาใครก็ได้ที่ช่วย resolve\n   → ค้างอยู่หลายวินาที (รอ timeout) ก่อนจะขึ้น error → น่ารำคาญมาก!\n\n✅ ทำไม D ถูก: router ส่ง broadcast message ออกไปพยายาม resolve ชื่อ/URL นั้น\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่ได้ ping — router พยายาม "resolve ชื่อ" ก่อน (เพื่อจะ Telnet) ไม่ใช่ ping\nB. ไม่ได้ถามผู้ใช้ให้ระบุ IP — มันพยายามหาเอง\nC. ไม่ได้พยายามไม่หยุด — มัน timeout แล้วเลิกเอง (แต่ผู้ใช้กด Ctrl+Shift+6 ยกเลิกได้)\n\n🔧 วิธีแก้ในทางปฏิบัติ (ควรทำในแลบทุกครั้ง!):\n   R1(config)# no ip domain-lookup       ← ปิดการ resolve ชื่อไปเลย\n   R1(config)# line con 0\n   R1(config-line)# logging synchronous  ← กัน log แทรกกลางคำสั่งที่พิมพ์อยู่\n\n📗 จำไว้สอบ: ค่าเริ่มต้น ip domain-lookup = เปิด แต่ไม่มี name-server → จึง broadcast',
  },
  {
    id: 148,
    kind: 'multi',
    prompt: 'Which two WAN architecture options help a business improve scalability and reliability for the network? (Choose two)',
    options: [
      { key: 'A', text: 'asynchronous routing' },
      { key: 'B', text: 'single-homed branches' },
      { key: 'C', text: 'dual-homed branches' },
      { key: 'D', text: 'static routing' },
      { key: 'E', text: 'dynamic routing' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — โจทย์ถามหา 2 สิ่ง: Scalability (ขยายได้) + Reliability (ทนทาน)\n\n🔹 ⭐ Dual-homed branch → สาขามีลิงก์ WAN "สองเส้น" (อาจคนละ ISP)\n   ✔ เส้นหนึ่งล่ม → สลับไปอีกเส้นทันที = Reliability สูงขึ้นชัดเจน\n   (ต่างจาก single-homed ที่มีเส้นเดียว = single point of failure)\n\n🔹 ⭐ Dynamic routing (OSPF/EIGRP/BGP) → router เรียนรู้เส้นทางกันเอง\n   ✔ เพิ่มสาขาใหม่ → router เรียนรู้อัตโนมัติ ไม่ต้องไปแก้ทุกตัว = Scalability\n   ✔ ลิงก์ล่ม → คำนวณเส้นทางใหม่ให้เอง = Reliability\n   (ต่างจาก static routing ที่ต้องแก้ด้วยมือทุกครั้ง และไม่ปรับตัวเมื่อลิงก์ล่ม)\n\n✅ ทำไม C, E ถูก: dual-homed (redundancy) + dynamic routing (ปรับตัวและขยายง่าย) ตอบโจทย์ครบทั้งสองด้าน\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A,C — แต่ "asynchronous routing" ไม่ใช่คำศัพท์ที่มีอยู่จริงในเครือข่ายเลย (เป็นตัวลวงล้วน ๆ) → คำตอบที่ถูกต้องคือ C,E\n\n❌ ทำไมข้ออื่นผิด:\nB. single-homed → ลิงก์เดียว ไม่มี redundancy = ตรงข้ามกับ reliability\nD. static routing → ไม่ scale (ต้องแก้ด้วยมือทุกครั้ง) และไม่ปรับตัวเมื่อลิงก์ล่ม\nA. asynchronous routing → ไม่มีอยู่จริง\n\n📗 หมายเหตุ: ข้อนี้เนื้อหาซ้ำกับข้อ 103 เป๊ะ ๆ — แสดงว่าออกสอบบ่อยมาก ต้องจำให้แม่น!',
  },
  {
    id: 149,
    kind: 'single',
    prompt: 'Which type of security program is violated when a group of employees enters a building using the ID badge of only one person?',
    options: [
      { key: 'A', text: 'intrusion detection' },
      { key: 'B', text: 'user awareness' },
      { key: 'C', text: 'physical access control' },
      { key: 'D', text: 'network authorization' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โปรแกรมความปลอดภัย 3 แบบที่ CCNA ถามบ่อย:\n\n• User awareness → "ให้ความรู้เบื้องต้น" แก่พนักงาน เช่น อีเมลเตือนว่ามี phishing แบบไหนบ้าง\n• User training → "อบรมเป็นทางการ" มีคอร์ส/ทดสอบ เช่น สอนวิธีตั้งรหัสผ่านที่ดี\n• ⭐ Physical access control → คุมการเข้าออก "ทางกายภาพ" เช่น บัตร ID, ประตูล็อก, กุญแจตู้ rack, ห้อง server\n\n🔑 พฤติกรรมในโจทย์นี้เรียกว่า Tailgating (หรือ Piggybacking)\n   = คนหลายคนตามหลังเข้าประตูเดียวกัน โดยรูดบัตรแค่ใบเดียว\n   → ระบบบันทึกว่ามีคนเข้าแค่ 1 คน แต่จริง ๆ เข้าไปหลายคน = audit trail พัง\n   → ถ้ามีคนแปลกปลอมแฝงเข้ามา จะไม่มีร่องรอยเลย\n\n✅ ทำไม C ถูก: หลักการของ physical access control คือ "หนึ่งคน = หนึ่งบัตร = หนึ่งครั้งที่รูด" การที่กลุ่มคนเข้าด้วยบัตรใบเดียวจึงเป็นการละเมิดโปรแกรมนี้โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. intrusion detection → IDS ตรวจจับการบุกรุกบน "เครือข่าย" (ดูแพ็กเก็ต) ไม่เกี่ยวกับประตูอาคาร\nB. user awareness → เกี่ยวกับการให้ความรู้/ความตระหนัก ไม่ใช่ตัวมาตรการควบคุมประตู\nD. network authorization → กำหนดสิทธิ์ว่า user เข้าถึงทรัพยากรใดใน "เครือข่าย" ได้บ้าง (AAA) ไม่ใช่ทางกายภาพ\n\n📗 จำไว้สอบ: เห็นคำว่า badge / door / server room / tailgating → ตอบ Physical access control เสมอ',
  },
  {
    id: 150,
    kind: 'single',
    prompt: 'Which device controls the forwarding of authentication requests for users when connecting to the network using a lightweight access point?',
    options: [
      { key: 'A', text: 'TACACS server' },
      { key: 'B', text: 'wireless access point' },
      { key: 'C', text: 'RADIUS server' },
      { key: 'D', text: 'wireless LAN controller' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ใครทำอะไรตอน client ไร้สาย login (802.1X/WPA2-Enterprise):\n\n   [Client] ──→ [Lightweight AP] ──CAPWAP──→ [WLC] ──RADIUS──→ [ISE/RADIUS Server]\n   Supplicant      (ท่อส่งผ่าน)          ⭐Authenticator      Authentication Server\n\n🔑 บทบาททั้ง 3 (ศัพท์ 802.1X):\n• Supplicant → ตัว client ที่ขอเข้าใช้งาน\n• ⭐ Authenticator → ตัวที่ "ควบคุมและส่งต่อ" คำขอ authentication ไปยัง server\n   → ในสถาปัตยกรรม lightweight AP ตัวนี้คือ WLC (ไม่ใช่ AP!)\n   → เพราะ LAP ไม่มีสมองของตัวเอง มัน tunnel ทุกอย่างผ่าน CAPWAP ไปให้ WLC ตัดสินใจ\n• Authentication Server → ตัวที่ "ตรวจสอบจริง" ว่า user/password ถูกไหม (RADIUS/ISE)\n\n✅ ทำไม D ถูก: โจทย์ถามหาตัวที่ "ควบคุมการส่งต่อ (controls the forwarding of) คำขอ authentication" ในสถาปัตยกรรม lightweight AP → นั่นคือ WLC ซึ่งทำหน้าที่ authenticator\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B (wireless access point) — ซึ่งจะถูกก็ต่อเมื่อเป็น autonomous AP (AP ที่ทำงานเองไม่มี WLC) แต่โจทย์ระบุชัดว่าเป็น "lightweight access point" → คำตอบที่ถูกต้องคือ D\n\n❌ ทำไมข้ออื่นผิด:\nC. RADIUS server → เป็นผู้ "ตรวจสอบ/ตัดสิน" (authentication server) ไม่ใช่ผู้ "ส่งต่อ" คำขอ\nA. TACACS server → เป็น AAA ที่ใช้คุม "ผู้ดูแลอุปกรณ์" ไม่ใช่ผู้ใช้ไร้สาย (ไร้สายใช้ RADIUS)\nB. AP → ในโหมด lightweight มันเป็นแค่ "ท่อ" ส่งผ่านไปยัง WLC ไม่ได้ควบคุมเอง\n\n📗 จำไว้สอบ: Lightweight AP = WLC เป็น authenticator | Autonomous AP = ตัว AP เองเป็น authenticator',
  },
  {
    id: 151,
    kind: 'single',
    prompt: 'What is a benefit of VRRP?',
    options: [
      { key: 'A', text: 'It provides traffic load balancing to destinations that are more than two hops from the source' },
      { key: 'B', text: 'It provides default gateway redundancy on a LAN using two or more routers' },
      { key: 'C', text: 'It allows neighbors to share routing table information between each other' },
      { key: 'D', text: 'It prevents loops in a Layer 2 LAN by forwarding all traffic to a root bridge' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — FHRP (First Hop Redundancy Protocol) แก้ปัญหาอะไร?\n\n   ปัญหา: PC ตั้ง default gateway ได้แค่ IP เดียว → ถ้า router ตัวนั้นล่ม PC ออกเน็ตไม่ได้เลย\n   ทางแก้: ใช้ router ≥ 2 ตัว ร่วมกันสร้าง "Virtual IP + Virtual MAC" หนึ่งชุด\n           PC ชี้ default gateway ไปที่ Virtual IP → ไม่รู้เลยว่าเบื้องหลังมีกี่ตัว\n           Master ล่ม → Backup รับ Virtual IP ต่อทันที (PC ไม่ต้องแก้อะไร)\n\n🔑 ตระกูล FHRP ที่ CCNA ออกสอบ:\n• HSRP → ของ Cisco เท่านั้น | Active/Standby | virtual MAC ขึ้นต้น 0000.0C07.ACxx\n• ⭐ VRRP → มาตรฐานเปิด (RFC) ข้ามยี่ห้อได้ | Master/Backup\n• GLBP → ของ Cisco | ทำ load balancing ได้จริงในกลุ่มเดียวกัน (ตัวอื่นทำไม่ได้)\n\n✅ ทำไม B ถูก: VRRP = default gateway redundancy บน LAN ด้วย router ตั้งแต่ 2 ตัวขึ้นไป — ตรงนิยามเป๊ะ\n\n❌ ทำไมข้ออื่นผิด:\nA. load balancing ไปยังปลายทางที่ไกลกว่า 2 hop → ไม่ใช่ FHRP เลย (FHRP ทำงานแค่ "hop แรก" คือ gateway) และ VRRP เองก็ไม่ทำ load balancing (ต้อง GLBP)\nC. แชร์ routing table ระหว่าง neighbor → นั่นคือ routing protocol (OSPF/EIGRP)\nD. ป้องกัน loop ชั้น 2 ด้วย root bridge → นั่นคือ STP\n\n📗 จำไว้สอบ: HSRP/GLBP = Cisco เท่านั้น | VRRP = มาตรฐานเปิด | GLBP = ตัวเดียวที่ load balance ได้',
  },
  {
    id: 152,
    kind: 'multi',
    prompt: 'Aside from discarding, which two states does the switch port transition through while using RSTP (802.1w)? (Choose two)',
    options: [
      { key: 'A', text: 'listening' },
      { key: 'B', text: 'blocking' },
      { key: 'C', text: 'forwarding' },
      { key: 'D', text: 'learning' },
      { key: 'E', text: 'speaking' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — สถานะพอร์ต STP เดิม (802.1D) เทียบกับ RSTP (802.1w):\n\n   802.1D (STP เดิม) มี 5 สถานะ:\n     Disabled → Blocking → Listening → Learning → Forwarding   (ใช้เวลา ~50 วินาที!)\n\n   ⭐ 802.1w (RSTP) ยุบเหลือ 3 สถานะ:\n     Discarding → Learning → Forwarding                        (เร็วระดับวินาที)\n\n🔑 RSTP รวม Disabled + Blocking + Listening ทั้งสามเข้าเป็น Discarding สถานะเดียว\n   เพราะทั้งสามมีพฤติกรรมเหมือนกันหมด คือ "ไม่ forward เฟรมของ user"\n\n📋 แต่ละสถานะทำอะไร:\n• Discarding → ทิ้งเฟรม, ไม่เรียน MAC\n• Learning   → ยังทิ้งเฟรม แต่ "เริ่มเรียน MAC address" ใส่ตาราง\n• Forwarding → ส่งเฟรมได้เต็มที่ + เรียน MAC ต่อไป\n\n✅ ทำไม C, D ถูก: RSTP มีแค่ 3 สถานะ เมื่อตัด discarding ออกตามที่โจทย์บอก ก็เหลือ learning (D) กับ forwarding (C)\n\n❌ ทำไมข้ออื่นผิด:\nA. listening → เป็นสถานะของ STP เดิม (802.1D) เท่านั้น RSTP ตัดทิ้งไปแล้ว\nB. blocking → เป็นสถานะของ STP เดิมเช่นกัน RSTP เปลี่ยนชื่อรวมเป็น discarding\nE. speaking → ไม่มีอยู่จริงในมาตรฐานใดเลย (ตัวลวง)\n\n📗 จำไว้สอบ: RSTP = 3 สถานะ "DLF" (Discarding-Learning-Forwarding) | เห็น blocking/listening = STP เก่า',
  },
  {
    id: 153,
    kind: 'single',
    prompt: 'Which protocol does an IPv4 host use to obtain a dynamically assigned IP address?',
    options: [
      { key: 'A', text: 'ARP' },
      { key: 'B', text: 'DHCP' },
      { key: 'C', text: 'CDP' },
      { key: 'D', text: 'DNS' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — DHCP แจกอะไรให้ client บ้าง (4 อย่างหลัก):\n   1. IP address        2. Subnet mask\n   3. Default gateway   4. DNS server address\n\n🔑 ขั้นตอน DHCP = DORA (ท่องให้ขึ้นใจ):\n   • D — Discover : client ส่ง broadcast หา DHCP server (ยังไม่มี IP เลย)\n   • O — Offer    : server เสนอ IP มาให้\n   • R — Request  : client ขอจองตัวที่เลือก (ยัง broadcast อยู่ เพื่อบอก server ตัวอื่นว่าไม่เอา)\n   • A — Ack      : server ยืนยัน → client ใช้ IP ได้\n\n✅ ทำไม B ถูก: DHCP คือโปรโตคอลเดียวที่ทำหน้าที่ "แจก IP แบบไดนามิก" ให้โฮสต์โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. ARP → แปลง IP เป็น MAC (หา MAC ของเพื่อนบ้านใน LAN เดียวกัน) ไม่ได้แจก IP\nC. CDP → โปรโตคอลของ Cisco ใช้ค้นหาอุปกรณ์ Cisco ที่ต่ออยู่ข้าง ๆ ไม่เกี่ยวกับ IP ของ host\nD. DNS → แปลงชื่อโดเมน (www.cisco.com) เป็น IP ไม่ได้แจก IP ให้เครื่อง\n\n📗 จำไว้สอบ: DHCP ใช้ UDP พอร์ต 67 (server) / 68 (client) และข้ามเราเตอร์ไม่ได้เอง → ต้องใช้ ip helper-address',
  },
  {
    id: 154,
    kind: 'single',
    prompt: 'Which CRUD operation corresponds to the HTTP GET method?',
    options: [
      { key: 'A', text: 'read' },
      { key: 'B', text: 'update' },
      { key: 'C', text: 'create' },
      { key: 'D', text: 'delete' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ตาราง CRUD ↔ HTTP method (REST API ออกสอบชัวร์):\n\n   CRUD      HTTP method     ความหมาย\n   ------    -------------   ------------------------------------\n   Create    POST            สร้าง object ใหม่\n   ⭐ Read   GET             อ่าน/ดึงข้อมูล (ไม่แก้อะไรทั้งสิ้น)\n   Update    PUT / PATCH     แก้ไข (PUT = แทนที่ทั้งก้อน, PATCH = แก้บางส่วน)\n   Delete    DELETE          ลบทิ้ง\n\n✅ ทำไม A ถูก: GET เป็น method แบบ "อ่านอย่างเดียว" (safe / idempotent) → ตรงกับ Read\n\n❌ ทำไมข้ออื่นผิด:\nB. update → คู่กับ PUT หรือ PATCH ไม่ใช่ GET\nC. create → คู่กับ POST\nD. delete → คู่กับ DELETE\n\n💡 HTTP response code ที่ควรจำคู่กัน:\n   200 OK (สำเร็จ) | 201 Created | 400 Bad Request | 401 Unauthorized | 404 Not Found | 500 Server Error\n\n📗 จำไว้สอบ: REST API ของ Cisco (RESTCONF/DNA Center) ใช้ GET ดึง config เสมอ — เห็น GET → ตอบ Read',
  },
  {
    id: 155,
    kind: 'single',
    prompt: 'In which situation is private IPv4 addressing appropriate for a new subnet on the network of an organization?',
    options: [
      { key: 'A', text: 'There is limited unique address space, and traffic on the new subnet will stay local within the organization' },
      { key: 'B', text: 'The network has multiple endpoint listeners, and it is desired to limit the number of broadcasts' },
      { key: 'C', text: 'Traffic on the subnet must traverse a site-to-site VPN to an outside organization' },
      { key: 'D', text: 'The ISP requires the new subnet to be advertised to the internet for web services' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Private IPv4 ตาม RFC 1918 (ต้องท่องได้ทั้ง 3 ช่วง):\n\n   10.0.0.0     – 10.255.255.255      (10.0.0.0/8)       ← คลาส A ก้อนเดียว\n   172.16.0.0   – 172.31.255.255      (172.16.0.0/12)    ← เฉพาะ 16-31 เท่านั้น!\n   192.168.0.0  – 192.168.255.255     (192.168.0.0/16)\n\n🔑 คุณสมบัติสำคัญ:\n• Router บนอินเทอร์เน็ตจะ "drop" แพ็กเก็ตที่มี private IP เป็นต้นทาง → ออกเน็ตตรง ๆ ไม่ได้\n• ต้องผ่าน NAT/PAT แปลงเป็น public IP ก่อนเสมอ\n• เหตุผลที่มี = ประหยัด public address ที่กำลังจะหมดโลก (IPv4 exhaustion)\n\n✅ ทำไม A ถูก: เข้าเงื่อนไขครบทั้งสองข้อ — (1) public address มีจำกัด (2) ทราฟฟิกวิ่งอยู่ภายในองค์กร ไม่ต้องออกไปข้างนอก → เป็นสถานการณ์ที่ private IP ถูกออกแบบมาเพื่อสิ่งนี้พอดี\n\n❌ ทำไมข้ออื่นผิด:\nB. อยากลด broadcast → นั่นเป็นเรื่องของการแบ่ง VLAN / subnet ให้เล็กลง ไม่เกี่ยวว่า IP จะเป็น private หรือ public เลย\nC. ต้องวิ่งผ่าน site-to-site VPN ไปองค์กรอื่น → ปลายทาง VPN ต้องใช้ public IP และมีโอกาส subnet ชนกับอีกฝั่ง\nD. ISP ให้ประกาศ subnet ออกอินเทอร์เน็ตเพื่อทำ web service → ต้องใช้ public IP เท่านั้น private ประกาศออกเน็ตไม่ได้\n\n📗 จำไว้สอบ: จำ 172.16–172.31 ให้แม่น! ข้อสอบชอบหลอกด้วย 172.32.x.x หรือ 172.15.x.x ซึ่งเป็น public',
  },
  {
    id: 156,
    kind: 'single',
    image: q156,
    prompt:
      'Refer to the exhibit. An access list is required to permit traffic from any host on interface G0/0 (10.100.100.0/24) and deny traffic from interface G0/1 (192.168.0.0/16). Which access list must be applied?',
    options: [
      { key: 'A', text: 'Option A: ip access-list standard 99 / permit 10.100.100.0 0.0.0.255 / deny 192.168.0.0 0.0.255.255' },
      { key: 'B', text: 'Option B: ip access-list standard 99 / permit 10.100.100.0 0.0.0.255 / deny 192.168.0.0 0.255.255.255' },
      { key: 'C', text: 'Option C: ip access-list standard 199 / permit 10.100.100.0 0.0.0.255 / deny 192.168.0.0 0.255.255.255' },
      { key: 'D', text: 'Option D: ip access-list standard 199 / permit 10.100.100.0 0.0.0.255 / deny 192.168.0.0 0.0.255.255' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ข้อนี้ต้องตรวจ 2 เรื่องพร้อมกัน: (1) เลข ACL (2) wildcard mask\n\n🔢 ช่วงหมายเลข ACL ที่ต้องท่อง:\n   1–99      + 1300–1999   → Standard ACL  (กรองได้แค่ source IP)\n   100–199   + 2000–2699   → Extended ACL  (กรอง src, dst, protocol, port ได้)\n   → โจทย์ใช้คำสั่ง "ip access-list standard" ดังนั้นเลขต้องอยู่ในช่วง standard = 99 ✔ (199 ✘)\n\n🔢 การแปลง subnet mask → wildcard mask (เอา 255 ลบทีละไบต์):\n   /24 = 255.255.255.0    → wildcard 0.0.0.255      ← ใช้กับ 10.100.100.0/24 ✔\n   /16 = 255.255.0.0      → wildcard 0.0.255.255    ← ใช้กับ 192.168.0.0/16 ✔\n   /8  = 255.0.0.0        → wildcard 0.255.255.255  ← กว้างเกินไป ✘\n\n✅ ทำไม A ถูก: เป็นตัวเลือกเดียวที่ถูกทั้งคู่ — ใช้เลข 99 (standard ถูกช่วง) และใช้ wildcard 0.0.255.255 สำหรับ 192.168.0.0/16 (ถูกขนาด)\n\n❌ ทำไมข้ออื่นผิด:\nB. เลข 99 ถูก แต่ wildcard 0.255.255.255 = /8 → จะไปครอบคลุม 192.0.0.0–192.255.255.255 กว้างเกินที่โจทย์ต้องการ\nC. ผิดสองชั้น — เลข 199 เป็นช่วง extended + wildcard /8 กว้างเกิน\nD. wildcard ถูก แต่เลข 199 ใช้กับคำสั่ง "standard" ไม่ได้ (IOS จะไม่ยอมรับ)\n\n⚠️ ระวังกับดัก ACL: ทุก ACL มี implicit deny any ต่อท้ายอยู่แล้วโดยอัตโนมัติ — บรรทัด deny ที่เขียนเองจึงมีไว้เพื่อ log/ความชัดเจนเท่านั้น\n\n📗 จำไว้สอบ: Standard ACL ให้วางใกล้ปลายทาง (destination) | Extended ACL วางใกล้ต้นทาง (source)',
  },
  {
    id: 157,
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
      '📘 แนวคิด — ตารางความเร็ววงจร WAN แบบ leased line:\n\n   วงจร   ความเร็ว        ที่มา                        มาตรฐาน\n   ----   -------------   --------------------------   ---------------\n   ⭐ T1  1.544 Mbps      24 ch x 64 kbps + 8 kbps     อเมริกาเหนือ/ญี่ปุ่น\n   E1     2.048 Mbps      32 ch x 64 kbps              ยุโรป\n   T3     44.736 Mbps     28 x T1                      อเมริกาเหนือ\n   E3     34.368 Mbps     16 x E1                      ยุโรป\n\n🔑 ที่มาของเลข 1.544:\n   24 channel x 64 kbps = 1,536 kbps  (แต่ละ channel เรียกว่า DS0)\n   + framing overhead      8 kbps\n   ─────────────────────────────────\n   รวม                 1,544 kbps = 1.544 Mbps\n\n✅ ทำไม A ถูก: T1 = 1.544 Mbps เป็นค่ามาตรฐานตายตัว ท่องได้เลย\n\n❌ ทำไมข้ออื่นผิด:\nB. 2.048 Mbps → เป็นของ E1 (มาตรฐานยุโรป) ไม่ใช่ T1 — ข้อสอบชอบเอามาหลอกคู่กันเสมอ\nC. 34.368 Mbps → เป็นของ E3\nD. 43.7 Mbps → เลขมั่ว ใกล้ ๆ T3 (44.736) แต่ไม่ตรง\n\n📗 จำไว้สอบ: T = อเมริกา (1.544 / 44.736) | E = ยุโรป (2.048 / 34.368) | หน่วยย่อยที่สุดคือ DS0 = 64 kbps',
  },
  {
    id: 158,
    kind: 'single',
    prompt: 'What is a DNS lookup operation?',
    options: [
      { key: 'A', text: 'DNS server pings the destination to verify that it is available' },
      { key: 'B', text: 'serves requests over destination port 53' },
      { key: 'C', text: 'DNS server forwards the client to an alternate IP address when the primary IP is down' },
      { key: 'D', text: 'the server responds to a request to resolve a domain name to an IP address' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — DNS lookup (หรือ name resolution) คืออะไร:\n\n   [PC] "www.cisco.com คือ IP อะไร?" ──→ [DNS server]\n   [PC] ◀── "72.163.4.185" ────────────── [DNS server]\n   จากนั้น PC จึงเอา IP นั้นไปเปิดการเชื่อมต่อจริง\n\n🔑 ประเภท record ที่ต้องรู้:\n• A record    → ชื่อโดเมน → IPv4\n• AAAA record → ชื่อโดเมน → IPv6\n• PTR record  → IP → ชื่อโดเมน (reverse lookup)\n• CNAME       → ชื่อแทน (alias) ชี้ไปอีกชื่อ\n\n✅ ทำไม D ถูก: นิยามตรงตัวของ DNS lookup = "server ตอบคำขอในการ resolve ชื่อโดเมนให้เป็น IP address"\n\n❌ ทำไมข้ออื่นผิด:\nA. DNS ping ปลายทางเพื่อเช็กว่าออนไลน์ → DNS ไม่ทำแบบนั้นเลย มันแค่เปิดตารางแล้วตอบชื่อ→IP ไม่สนใจว่าเครื่องนั้นยังอยู่ไหม\nB. ให้บริการผ่านพอร์ตปลายทาง 53 → ข้อมูลนี้ จริง (DNS ใช้ UDP/TCP 53) แต่มันตอบว่า "ให้บริการที่พอร์ตไหน" ไม่ได้ตอบว่า "lookup คืออะไร" → ไม่ตรงคำถาม\nC. ส่ง client ไป IP สำรองเมื่อตัวหลักล่ม → นั่นเป็นงานของ load balancer / FHRP ไม่ใช่ DNS lookup\n\n📗 จำไว้สอบ: DNS ใช้พอร์ต 53 — UDP สำหรับ query ทั่วไป (เร็ว) และ TCP เมื่อคำตอบใหญ่เกิน 512 ไบต์ หรือทำ zone transfer',
  },
  {
    id: 159,
    kind: 'single',
    image: q159,
    prompt:
      'Refer to the exhibit. A network engineer must configure communication between PC A (VLAN 13) and the File Server (VLAN 13). The trunk between switches currently allows VLANs 10-12. To prevent interruption for any other communications, which command must be configured?',
    options: [
      { key: 'A', text: 'switchport trunk allowed vlan 12' },
      { key: 'B', text: 'switchport trunk allowed vlan none' },
      { key: 'C', text: 'switchport trunk allowed vlan add 13' },
      { key: 'D', text: 'switchport trunk allowed vlan remove 10-11' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำสั่ง switchport trunk allowed vlan มี 4 รูปแบบ ระวังให้ดี!\n\n   คำสั่ง                                    ผลลัพธ์\n   ---------------------------------------   ------------------------------------\n   switchport trunk allowed vlan 13          ⚠️ "เขียนทับ" → เหลือแค่ VLAN 13!\n   ⭐ switchport trunk allowed vlan add 13   เพิ่ม 13 เข้าไปในรายการเดิม (ปลอดภัย)\n   switchport trunk allowed vlan remove 13   เอา 13 ออกจากรายการ\n   switchport trunk allowed vlan none        ไม่อนุญาต VLAN ใดเลย (ตัดขาดหมด)\n\n🔍 สถานการณ์ในโจทย์:\n   trunk ปัจจุบันอนุญาต : VLAN 10, 11, 12\n   PC A + File Server อยู่ : VLAN 13  ← ยังไม่ได้รับอนุญาตให้ข้าม trunk\n   เงื่อนไขสำคัญ         : "ห้ามกระทบการสื่อสารอื่น" → VLAN 10-12 ต้องอยู่ครบ\n\n✅ ทำไม C ถูก: มีแค่คีย์เวิร์ด add เท่านั้นที่เพิ่ม VLAN 13 เข้าไปโดยที่ 10-12 ยังอยู่ครบ → ผลลัพธ์ = 10,11,12,13\n\n❌ ทำไมข้ออื่นผิด:\nA. allowed vlan 12 → เขียนทับทั้งหมด เหลือแค่ VLAN 12 ตัวเดียว! VLAN 10, 11 หลุดหาย และ 13 ก็ยังไม่ได้เพิ่ม → พังสองต่อ\nB. allowed vlan none → ตัด VLAN ทั้งหมดออกจาก trunk การสื่อสารทุกอย่างดับหมด\nD. remove 10-11 → ลบ VLAN 10, 11 ทิ้ง (กระทบผู้ใช้อื่น) และ VLAN 13 ก็ยังไม่ถูกเพิ่มอยู่ดี → ไม่แก้ปัญหาเลย\n\n⚠️ กับดักในงานจริง: การพิมพ์ allowed vlan โดยลืมคำว่า add เป็นสาเหตุ outage คลาสสิกมาก — ทับรายการเดิมทันทีโดยไม่ถามยืนยัน\n\n📗 จำไว้สอบ: เห็นโจทย์ว่า "โดยไม่กระทบสิ่งอื่น (without interrupting)" → มองหาคำว่า add ทันที',
  },
  {
    id: 160,
    kind: 'single',
    prompt: 'Which implementation provides the strongest encryption combination for the wireless environment?',
    options: [
      { key: 'A', text: 'WPA2 + AES' },
      { key: 'B', text: 'WPA + AES' },
      { key: 'C', text: 'WEP' },
      { key: 'D', text: 'WPA + TKIP' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — วิวัฒนาการความปลอดภัย Wi-Fi (เรียงจากอ่อน → แข็งแรง):\n\n   มาตรฐาน   การเข้ารหัส   ตรวจสอบความถูกต้อง   ความปลอดภัย\n   -------   -----------   ------------------   ----------------------------\n   WEP       RC4           CRC-32               ✘ แตกได้ในไม่กี่นาที (เลิกใช้)\n   WPA       TKIP          MIC (Michael)        ~ แค่แพตช์ชั่วคราวของ WEP\n   ⭐ WPA2   AES-CCMP      CBC-MAC              ✔ แข็งแรง (มาตรฐาน 802.11i)\n   WPA3      AES-GCMP      SAE                  ✔✔ แข็งแรงที่สุดปัจจุบัน\n\n🔑 หัวใจคือจับคู่ให้ถูก: WPA2 ต้องมากับ AES เสมอ (ไม่ใช่ TKIP)\n   • TKIP ยังใช้ RC4 เป็นแกนอยู่ → สืบทอดจุดอ่อนของ WEP มา\n   • AES/CCMP เป็น block cipher ที่แข็งแรงจริง ไม่มีช่องโหว่แบบ RC4\n\n✅ ทำไม A ถูก: ในบรรดาตัวเลือกที่ให้มา WPA2 + AES (CCMP) เป็นการจับคู่ที่แข็งแรงที่สุด — มาตรฐานใหม่สุด + อัลกอริทึมแข็งสุด\n\n❌ ทำไมข้ออื่นผิด:\nB. WPA + AES → AES แข็งแรงก็จริง แต่ตัวกรอบ WPA รุ่นแรกยังอ่อนกว่า WPA2 (และเป็นการจับคู่ที่ไม่ค่อยมีใช้จริง)\nD. WPA + TKIP → TKIP แกนเป็น RC4 → อ่อน มีช่องโหว่ที่รู้กันแล้ว\nC. WEP → อ่อนแอที่สุด แตกได้ด้วยเครื่องมือฟรีในไม่กี่นาที ห้ามใช้เด็ดขาด\n\n⚠️ หมายเหตุ: ในโลกจริงปี 2024+ ควรใช้ WPA3 แต่ข้อสอบนี้ไม่มีให้เลือก → ตอบ WPA2+AES\n\n📗 จำไว้สอบ: จับคู่ให้แม่น — WEP=RC4 | WPA=TKIP | WPA2=AES/CCMP | WPA3=SAE',
  },
  {
    id: 161,
    kind: 'single',
    prompt: 'What is a characteristic of a SOHO network?',
    options: [
      { key: 'A', text: 'connects each switch to every other switch in the network' },
      { key: 'B', text: 'enables multiple users to share a single broadband connection' },
      { key: 'C', text: 'provides high throughput access for 1000 or more users' },
      { key: 'D', text: 'includes at least three tiers of devices to provide load balancing and redundancy' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — SOHO = Small Office / Home Office\n\n🏠 ลักษณะของ SOHO:\n• ผู้ใช้น้อยมาก (ประมาณ 1–20 คน)\n• มักใช้อุปกรณ์ "All-in-one" กล่องเดียวจบ = router + switch + AP + firewall รวมกัน\n• เชื่อมต่ออินเทอร์เน็ตด้วยลิงก์ broadband เส้นเดียว (DSL/Cable/Fiber บ้าน)\n• ใช้ NAT/PAT แปลง private IP ทั้งบ้าน/ออฟฟิศ ให้ออกเน็ตผ่าน public IP ตัวเดียว\n• โครงสร้างแบน ไม่มีลำดับชั้น ไม่มี redundancy\n\n✅ ทำไม B ถูก: หัวใจของ SOHO คือ "ให้ผู้ใช้หลายคนแชร์การเชื่อมต่อ broadband เส้นเดียวร่วมกัน" — ตรงนิยาม\n\n❌ ทำไมข้ออื่นผิด:\nA. เชื่อมทุกสวิตช์เข้าหากันทุกตัว → นั่นคือ full-mesh topology ของเครือข่ายใหญ่ SOHO มักมีสวิตช์แค่ตัวเดียว\nC. รองรับผู้ใช้ 1,000+ คนด้วย throughput สูง → นั่นคือ Enterprise/Campus ตรงข้ามกับคำว่า "Small" ในชื่อ\nD. มีอย่างน้อย 3 ชั้น (three-tier) เพื่อ load balancing และ redundancy → Core/Distribution/Access เป็นดีไซน์ของ enterprise ขนาดใหญ่ SOHO ไม่มีชั้นแบบนี้\n\n📗 จำไว้สอบ: SOHO = เล็ก, กล่องเดียวจบ, broadband เส้นเดียว | Three-tier / 1000 users = Enterprise เสมอ',
  },
  {
    id: 162,
    kind: 'single',
    image: q162,
    prompt:
      'Refer to the exhibit. After running the code, which step reduces the amount of data that the NETCONF server returns to the NETCONF client, to only the interface\'s configuration?',
    options: [
      { key: 'A', text: "Use the lxml library to parse the data returned by the NETCONF server for the interface's configuration" },
      { key: 'B', text: 'Create an XML filter as a string and pass it to the get_config() method as an argument' },
      { key: 'C', text: 'Create a JSON filter as a string and pass it to the get_config() method as an argument' },
      { key: 'D', text: "Use the JSON library to parse the data returned by the NETCONF server for the interface's configuration" },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — NETCONF vs RESTCONF (ต้องแยกให้ออก ออกสอบบ่อย):\n\n   โปรโตคอล    รูปแบบข้อมูล      ขนส่งผ่าน       พอร์ต\n   ----------  ---------------   -------------   ------\n   ⭐ NETCONF  XML เท่านั้น!     SSH             830\n   RESTCONF    XML หรือ JSON     HTTPS           443\n   → ทั้งคู่ใช้ YANG เป็นโมเดลข้อมูลเหมือนกัน\n\n🔑 คำถามนี้เน้นคำว่า "ลดข้อมูลที่ เซิร์ฟเวอร์ส่งกลับ" (data that the server returns)\n   → ต้องกรองที่ ฝั่งเซิร์ฟเวอร์ ก่อนส่งออกมา ไม่ใช่รับมาทั้งก้อนแล้วค่อยมาตัดทีหลัง\n   → วิธีคือส่ง subtree filter (เขียนเป็น XML string) เข้าไปเป็น argument ของ get_config()\n\n✅ ทำไม B ถูก: สร้าง XML filter แล้วส่งให้ get_config() → เซิร์ฟเวอร์จะส่งกลับมาเฉพาะ config ของอินเทอร์เฟซที่ขอ ปริมาณข้อมูลลดจริงตั้งแต่ต้นทาง\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D (ใช้ JSON library parse) — ผิดสองชั้น: (1) NETCONF ไม่ใช้ JSON เลย (2) การ parse ที่ฝั่ง client เกิดขึ้น "หลัง" ข้อมูลถูกส่งมาครบแล้ว → ไม่ได้ลดปริมาณที่เซิร์ฟเวอร์ส่งเลยแม้แต่ไบต์เดียว → คำตอบที่ถูกต้องคือ B\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ lxml parse ที่ฝั่ง client → ข้อมูลถูกส่งมาครบแล้ว การ parse ทีหลังไม่ลด traffic\nC. JSON filter → NETCONF ไม่รองรับ JSON (นั่นคือ RESTCONF)\nD. JSON library → ผิดทั้งรูปแบบข้อมูลและผิดทั้งจังหวะ (parse ทีหลัง)\n\n📗 จำไว้สอบ: NETCONF = XML + SSH + พอร์ต 830 | RESTCONF = XML/JSON + HTTPS + พอร์ต 443',
  },
  {
    id: 163,
    kind: 'single',
    prompt: 'Which resource is able to be shared among virtual machines deployed on the same physical server?',
    options: [
      { key: 'A', text: 'disk' },
      { key: 'B', text: 'applications' },
      { key: 'C', text: 'VM configuration file' },
      { key: 'D', text: 'operating system' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Virtualization: อะไร "แชร์" อะไร "แยก"\n\n   ┌──────── VM1 ────────┐ ┌──────── VM2 ────────┐\n   │ Apps (ของตัวเอง)     │ │ Apps (ของตัวเอง)     │  ← แยก\n   │ Guest OS (ของตัวเอง) │ │ Guest OS (ของตัวเอง) │  ← แยก\n   │ vCPU / vRAM / vNIC   │ │ vCPU / vRAM / vNIC   │  ← เสมือน (แยก)\n   └──────────────────────┘ └──────────────────────┘\n   ────────────── Hypervisor ──────────────────────\n   ═══ ฮาร์ดแวร์กายภาพ: CPU | RAM | ⭐DISK | NIC ═══  ← แชร์ร่วมกัน!\n\n🔑 กฎง่าย ๆ: ทุกอย่างที่เป็น ฮาร์ดแวร์กายภาพ ถูกแชร์ผ่าน hypervisor\n               ทุกอย่างที่เป็น ซอฟต์แวร์ของ VM เป็นของใครของมัน\n\n✅ ทำไม A ถูก: disk เป็นทรัพยากรฮาร์ดแวร์กายภาพของเซิร์ฟเวอร์ VM ทุกตัวบนเครื่องนั้นต้องแบ่งพื้นที่จากดิสก์ชุดเดียวกัน (เช่นเดียวกับ CPU และ RAM) → นี่คือ "การแชร์" ที่แท้จริง\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C (VM configuration file) — แต่ไฟล์ config (เช่น .vmx) เป็นของ แต่ละ VM แยกกันคนละไฟล์ ไม่ได้ใช้ร่วมกัน → คำตอบที่ถูกต้องคือ A\n\n❌ ทำไมข้ออื่นผิด:\nB. applications → แต่ละ VM ติดตั้งแอปของตัวเองแยกกัน VM1 ลง Apache ไม่ได้แปลว่า VM2 มีด้วย\nC. VM configuration file → ไฟล์แยกต่อ VM หนึ่งตัว หนึ่งไฟล์\nD. operating system → หัวใจของ virtualization คือแต่ละ VM มี guest OS ของตัวเอง (VM1 อาจเป็น Windows ส่วน VM2 เป็น Linux ได้)\n\n📗 จำไว้สอบ: VM แชร์ "ฮาร์ดแวร์" (CPU/RAM/disk/NIC) แต่แยก "ซอฟต์แวร์" (OS/apps/config)',
  },
  {
    id: 164,
    kind: 'single',
    prompt: 'Which WAN topology provides a combination of simplicity, quality, and availability?',
    options: [
      { key: 'A', text: 'partial mesh' },
      { key: 'B', text: 'full mesh' },
      { key: 'C', text: 'point-to-point' },
      { key: 'D', text: 'hub-and-spoke' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ WAN topology ทั้ง 4 แบบ:\n\n   ⭐ Point-to-point  A ══ B\n      ✔ เรียบง่ายที่สุด (simplicity) — มีแค่ 2 ปลาย ไม่มีอะไรให้ซับซ้อน\n      ✔ คุณภาพสูง (quality) — เป็น dedicated link ไม่แชร์แบนด์วิดท์กับใคร ดีเลย์คงที่\n      ✔ พร้อมใช้งานสูง (availability) — ไม่มีอุปกรณ์ตัวกลางมาเป็นจุดล่ม\n      ✘ แพงถ้าต้องต่อหลายไซต์ (ต้องซื้อวงจรแยกทุกคู่)\n\n   Hub-and-spoke     spoke ─┐\n                     spoke ─┼─ HUB ─ spoke\n      ✔ ประหยัด, จัดการง่าย เพิ่มสาขาง่าย\n      ✘ HUB ล่ม = ทุกสาขาตายหมด (single point of failure) → availability ต่ำ\n      ✘ spoke คุยกันต้องอ้อมผ่าน hub เสมอ (2 hop) → คุณภาพด้อยลง\n\n   Full mesh         ทุกจุดต่อถึงกันหมด (จำนวนลิงก์ = n(n-1)/2)\n      ✔ redundancy สูงสุด\n      ✘ ซับซ้อนและแพงมหาศาล → เสีย simplicity ทันที (6 ไซต์ = 15 ลิงก์!)\n\n   Partial mesh      ต่อถึงกันบางคู่ — ประนีประนอมระหว่าง full mesh กับ hub-and-spoke\n\n✅ ทำไม C ถูก: โจทย์ขอ ครบทั้ง 3 อย่างพร้อมกัน (simplicity + quality + availability) → point-to-point เป็นแบบเดียวที่ได้ครบ เพราะเป็นลิงก์เฉพาะ 2 จุด ไม่มีตัวกลาง ไม่แชร์กับใคร\n\n❌ ทำไมข้ออื่นผิด:\nA. partial mesh → ได้ availability พอใช้ แต่เสีย simplicity (ต้องวางแผนว่าจะต่อคู่ไหนบ้าง)\nB. full mesh → availability เยี่ยม แต่ซับซ้อนและแพงที่สุด → ตกข้อ simplicity ชัดเจน\nD. hub-and-spoke → เรียบง่ายและถูก แต่ hub เป็นจุดล่มจุดเดียว → ตกข้อ availability\n\n📗 จำไว้สอบ: จำนวนลิงก์ full mesh = n(n-1)/2 — ข้อสอบชอบถาม เช่น 6 ไซต์ → 6x5/2 = 15 ลิงก์',
  },
  {
    id: 165,
    kind: 'single',
    prompt: 'Which command on a port enters the forwarding state immediately when a PC is connected to it?',
    options: [
      { key: 'A', text: 'switch(config)#spanning-tree portfast default' },
      { key: 'B', text: 'switch(config)#spanning-tree portfast bpduguard default' },
      { key: 'C', text: 'switch(config-if)#spanning-tree portfast trunk' },
      { key: 'D', text: 'switch(config-if)#no spanning-tree portfast' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กุญแจของข้อนี้อยู่ที่ prompt ของ CLI ไม่ใช่แค่ชื่อคำสั่ง!\n\n   prompt ที่เห็น            ระดับ         ขอบเขตผล\n   ----------------------   -----------   -----------------------------\n   switch(config)#          Global        มีผลกับ "ทุกพอร์ต" ในสวิตช์\n   ⭐ switch(config-if)#    Interface     มีผลกับ "พอร์ตนั้นพอร์ตเดียว"\n\n   โจทย์ถามว่า "คำสั่ง on a port" (บนพอร์ตหนึ่ง ๆ) → ต้องเป็นระดับ config-if เท่านั้น\n   → ตัดตัวเลือก A และ B ทิ้งทันที เพราะเป็น global config\n   → เหลือ C กับ D → D คือ "no spanning-tree portfast" = ปิด PortFast (ตรงข้ามกับที่ต้องการ)\n   → เหลือ C เป็นคำตอบเดียว\n\n🔑 PortFast ทำอะไร:\n   ปกติพอร์ตต้องผ่าน Listening (15s) → Learning (15s) = รอ 30 วินาทีก่อน forward\n   PortFast = ข้ามขั้นตอนนั้น เข้า Forwarding ทันที → PC ได้ IP จาก DHCP ทันเวลา\n   ⚠️ ใช้กับพอร์ตที่ต่อ end device เท่านั้น! ถ้าไปเสียบสวิตช์อีกตัวเข้ามา = เกิด loop ทันที\n   → จึงควรเปิด BPDU Guard คู่กันเสมอ (เจอ BPDU เมื่อไร → err-disable ปิดพอร์ตทันที)\n\n✅ ทำไม C ถูก: เป็นตัวเลือกเดียวที่ (1) อยู่ในโหมด config-if ตามที่โจทย์ระบุ และ (2) เปิด PortFast จริง\n\n❌ ทำไมข้ออื่นผิด:\nA. spanning-tree portfast default → คำสั่ง global เปิด PortFast ให้ทุกพอร์ต access พร้อมกัน ไม่ใช่ "on a port"\nB. spanning-tree portfast bpduguard default → global เช่นกัน และเป็นการเปิด BPDU Guard ไม่ได้เปิด PortFast\nD. no spanning-tree portfast → อยู่ระดับ interface ถูก แต่ "no" = ปิด PortFast ผลตรงข้ามกับโจทย์\n\n⚠️ หมายเหตุ: คีย์เวิร์ด "trunk" ใน C ปกติใช้กับพอร์ต trunk ในโลกจริงพอร์ตที่ต่อ PC จะพิมพ์แค่ "spanning-tree portfast" — แต่ในชุดตัวเลือกนี้ C เป็นตัวเดียวที่ทั้งอยู่ระดับ interface และเปิด PortFast จึงเป็นคำตอบที่ดีที่สุด\n\n📗 จำไว้สอบ: อ่าน prompt ให้ดีทุกครั้ง — (config)# = global | (config-if)# = เฉพาะพอร์ต | ครึ่งหนึ่งของข้อสอบตัดตัวเลือกได้จากตรงนี้',
  },
  {
    id: 166,
    kind: 'multi',
    prompt: 'What are two functions of an SDN controller? (Choose two)',
    options: [
      { key: 'A', text: 'Layer 2 forwarding' },
      { key: 'B', text: 'coordinating VTNs' },
      { key: 'C', text: 'tracking hosts' },
      { key: 'D', text: 'managing the topology' },
      { key: 'E', text: 'protecting against DDoS attacks' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — SDN controller คือ "สมองกลาง" ที่ดึง control plane ออกมาจากอุปกรณ์\n\n         [ Applications ]\n              ↕ Northbound API (REST) — คุยกับแอป/มนุษย์\n      ┌────────────────────┐\n      │  ⭐ SDN Controller │  ← เก็บภาพรวมทั้งเครือข่าย (topology ทั้งใบ)\n      └────────────────────┘\n              ↕ Southbound API (OpenFlow/NETCONF) — สั่งการอุปกรณ์\n      [Switch] [Switch] [Router]  ← เหลือแค่ data plane (forward อย่างเดียว)\n\n🔑 หน้าที่หลักของ controller (อยู่ระดับ "ภาพรวม" ทั้งหมด):\n• จัดการ topology ทั้งเครือข่ายแบบรวมศูนย์ (มองเห็นทุกอุปกรณ์ในมุมมองเดียว)\n• คำนวณเส้นทางและ push flow table ลงไปยังอุปกรณ์\n• ประสานงาน VTN (Virtual Tenant Network) — แบ่งเครือข่ายเสมือนให้แต่ละ tenant/ลูกค้าใช้แยกกันบนโครงสร้างจริงชุดเดียว\n\n✅ ทำไม B, D ถูก: ทั้งสองเป็นงานระดับ "ควบคุมภาพรวม" — coordinating VTN (แบ่งเครือข่ายเสมือน) และ managing topology (บริหารแผนผังเครือข่าย) เป็นหน้าที่ที่ controller ทำแทนอุปกรณ์แต่ละตัว\n\n❌ ทำไมข้ออื่นผิด:\nA. Layer 2 forwarding → เป็นงานของ data plane ที่ยังอยู่บนสวิตช์แต่ละตัว (controller ไม่ได้ forward เฟรมเอง มันแค่บอกว่าให้ forward ไปทางไหน)\nC. tracking hosts → เป็นงานย่อยของแอปพลิเคชันบน controller ไม่ใช่ฟังก์ชันหลักของตัว controller เอง\nE. ป้องกัน DDoS → เป็นงานของ firewall / IPS อุปกรณ์ความปลอดภัยเฉพาะทาง\n\n📗 จำไว้สอบ: Northbound = คุยกับ "แอป" (ขึ้นบน) | Southbound = คุยกับ "อุปกรณ์" (ลงล่าง) — จำทิศทางให้แม่น',
  },
  {
    id: 167,
    kind: 'single',
    prompt: 'What is a network appliance that checks the state of a packet to determine whether the packet is legitimate?',
    options: [
      { key: 'A', text: 'Layer 2 switch' },
      { key: 'B', text: 'load balancer' },
      { key: 'C', text: 'firewall' },
      { key: 'D', text: 'LAN controller' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำว่า "checks the state of a packet" คือคีย์เวิร์ดของ Stateful Firewall\n\n🔑 Stateful firewall ทำงานยังไง:\n   1. เก็บ "ตารางสถานะการเชื่อมต่อ" (state/session table) ไว้ว่ามีใครคุยกับใครอยู่บ้าง\n   2. เมื่อ PC ภายในเปิดการเชื่อมต่อออกไปข้างนอก → จดบันทึกไว้ในตาราง\n   3. แพ็กเก็ตที่ตอบกลับเข้ามา → เทียบกับตาราง ถ้าตรงกับ session ที่เปิดไว้ = ปล่อยผ่าน (legitimate)\n   4. แพ็กเก็ตที่โผล่มาเฉย ๆ ไม่มี session รองรับ = ทิ้งทันที (น่าจะเป็นการโจมตี)\n\n💡 ต่างจาก ACL ธรรมดา (stateless) ที่ดูแค่ทีละแพ็กเก็ต ไม่จำว่าเคยมีการเชื่อมต่อมาก่อนไหม\n\n✅ ทำไม C ถูก: firewall เป็นอุปกรณ์เดียวในตัวเลือกที่ออกแบบมาเพื่อ "ตรวจสถานะแพ็กเก็ตเพื่อตัดสินว่าถูกต้องหรือไม่" โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. Layer 2 switch → ดูแค่ MAC address ปลายทางแล้ว forward ไม่รู้จักแนวคิด "state" หรือความปลอดภัยของแพ็กเก็ตเลย\nB. load balancer → กระจายภาระโหลดไปยังเซิร์ฟเวอร์หลายตัว เน้นประสิทธิภาพ ไม่ใช่การกรองภัยคุกคาม\nD. LAN controller (WLC) → บริหารจัดการ AP ไร้สายแบบรวมศูนย์ ไม่ได้ทำหน้าที่ตรวจสอบแพ็กเก็ต\n\n📗 จำไว้สอบ: Firewall = อนุญาต/ปฏิเสธตามนโยบาย (control) | IDS = แค่ตรวจจับและแจ้งเตือน (สำเนา) | IPS = ตรวจจับ + บล็อกได้ทันที (inline)',
  },
  {
    id: 168,
    kind: 'single',
    prompt: 'When DHCP is configured on a router, which command must be entered so the default gateway is automatically distributed?',
    options: [
      { key: 'A', text: 'default-router' },
      { key: 'B', text: 'default-gateway' },
      { key: 'C', text: 'ip helper-address' },
      { key: 'D', text: 'dns-server' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ตัวอย่างการตั้ง DHCP pool บน router (ท่องโครงนี้ให้ได้):\n\n   R1(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10   ← กัน IP ไม่ให้แจก\n   R1(config)# ip dhcp pool LAN_POOL\n   R1(dhcp-config)# network 192.168.1.0 255.255.255.0   ← ช่วง IP ที่จะแจก\n   R1(dhcp-config)# ⭐ default-router 192.168.1.1        ← แจก DEFAULT GATEWAY\n   R1(dhcp-config)# dns-server 8.8.8.8                   ← แจก DNS\n   R1(dhcp-config)# lease 7                              ← อายุ lease (วัน)\n\n⚠️ กับดักที่ข้อสอบชอบใช้ — สองคำสั่งนี้หน้าตาคล้ายกันมาก แต่คนละเรื่องเลย:\n   • default-router (ในโหมด dhcp-config) = "ฉันจะ แจก gateway ตัวนี้ให้ client"\n   • ip default-gateway (โหมด global) = "ตัว ฉันเอง จะใช้ gateway ตัวนี้ออกเน็ต"\n     → ใช้กับสวิตช์ L2 ที่ทำ routing เองไม่ได้ ไม่ใช่การแจกให้ใคร\n\n✅ ทำไม A ถูก: คำสั่ง default-router คือคำสั่งเดียวที่ทำให้ DHCP server แจกค่า default gateway (DHCP option 3) ออกไปให้ client โดยอัตโนมัติ\n\n❌ ทำไมข้ออื่นผิด:\nB. default-gateway → เป็นการตั้งค่า gateway ให้ "ตัวอุปกรณ์เอง" ใช้ ไม่ได้แจกให้ client (และไม่มีคำสั่งนี้ในโหมด dhcp-config)\nC. ip helper-address → ใช้ทำ DHCP relay คือส่งต่อ broadcast ข้าม router ไปหา DHCP server ที่อยู่คนละ subnet — คนละเรื่องกับการแจก gateway\nD. dns-server → แจกที่อยู่ DNS server (option 6) ไม่ใช่ gateway\n\n📗 จำไว้สอบ: DHCP option ที่ควรจำ — option 3 = default gateway | option 6 = DNS | option 51 = lease time',
  },
  {
    id: 169,
    kind: 'single',
    prompt: 'What is an appropriate use for private IPv4 addressing?',
    options: [
      { key: 'A', text: 'on the public-facing interface of a firewall' },
      { key: 'B', text: 'to allow hosts inside to communicate in both directions with hosts outside the organization' },
      { key: 'C', text: 'on internal hosts that stream data solely to external resources' },
      { key: 'D', text: 'on hosts that communicate only with other internal hosts' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — กฎเหล็กของ private IP (RFC 1918): route บนอินเทอร์เน็ตไม่ได้\n   ISP จะ drop แพ็กเก็ตที่มี private IP เป็นต้นทางทิ้งทันที → ต้องผ่าน NAT แปลงเป็น public ก่อนเสมอ\n\n   ช่วง private ที่ต้องท่อง:  10.0.0.0/8 | 172.16.0.0/12 | 192.168.0.0/16\n\n✅ ทำไม D ถูก: โฮสต์ที่คุยกันเฉพาะ "ภายในองค์กร" (เช่น เครื่องพิมพ์, ไฟล์เซิร์ฟเวอร์ภายใน, กล้องวงจรปิด) ไม่มีความจำเป็นต้องออกอินเทอร์เน็ตเลย → ใช้ private IP ได้เต็มที่ ประหยัด public address ที่หายาก\n\n❌ ทำไมข้ออื่นผิด:\nA. บน interface ฝั่ง public ของ firewall → ฝั่งที่หันออกอินเทอร์เน็ตต้องใช้ public IP เท่านั้น ไม่งั้นโลกภายนอกมองไม่เห็น\nB. ให้เครื่องข้างในคุย "สองทาง" กับข้างนอกได้ → การเริ่มการเชื่อมต่อ จากข้างนอกเข้ามา ต้องมี public IP หรือ static NAT/port forwarding — private IP เดี่ยว ๆ ทำไม่ได้\nC. เครื่องภายในที่ stream ข้อมูลออกไปยัง resource ภายนอก → ต้องออกเน็ต จึงต้องพึ่ง NAT/public IP อยู่ดี ไม่ใช่ "การใช้ private IP อย่างเหมาะสม" ตามที่โจทย์ถาม\n\n💡 สังเกตความต่างของข้อ B/C กับ D: B และ C ล้วนมีคำว่า "outside/external" — พอเกี่ยวกับข้างนอกเมื่อไหร่ private IP เพียว ๆ ก็ไม่พอทันที\n\n📗 จำไว้สอบ: private IP + ต้องออกเน็ต = ต้องมี NAT เสมอ | เห็นคำว่า "internal only" → ตอบ private IP ได้เลย',
  },
  {
    id: 170,
    kind: 'single',
    prompt: 'How is the native VLAN secured in a network?',
    options: [
      { key: 'A', text: 'separate from other VLANs within the administrative domain' },
      { key: 'B', text: 'give it a value in the private VLAN range' },
      { key: 'C', text: 'assign it as VLAN 1' },
      { key: 'D', text: 'configure it as a different VLAN ID on each end of the link' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Native VLAN คืออะไร และทำไมต้องระวัง:\n\n   บน trunk (802.1Q) เฟรมทุก VLAN จะถูกติด tag บอกว่ามาจาก VLAN ไหน\n   ⭐ ยกเว้น native VLAN — เฟรมของมันวิ่งแบบ ไม่มี tag (untagged)\n   ค่าเริ่มต้นของ Cisco: native VLAN = VLAN 1\n\n☠️ ช่องโหว่: VLAN Hopping แบบ Double-Tagging\n   ผู้โจมตีใส่ tag 2 ชั้น → สวิตช์ตัวแรกถอด tag ชั้นนอก (เพราะตรงกับ native VLAN)\n   → เฟรมที่เหลือยังมี tag ชั้นในติดอยู่ → หลุดเข้าไปยัง VLAN เป้าหมายได้!\n\n🛡️ วิธีป้องกัน native VLAN (best practice ของ Cisco):\n   1. ⭐ เปลี่ยน native VLAN ไปเป็น VLAN เฉพาะที่ ไม่มี user คนไหนใช้เลย (เช่น VLAN 999)\n      → ต้องแยกออกจาก VLAN ข้อมูลอื่น ๆ ทั้งหมด\n   2. อย่าใช้ VLAN 1 เป็น native (เพราะเป็นค่า default ที่ผู้โจมตีเดาได้)\n   3. ตั้ง native VLAN ให้ ตรงกันทั้งสองฝั่ง ของ trunk\n\n✅ ทำไม A ถูก: การทำให้ native VLAN แยกออกจาก VLAN อื่นในโดเมน (เป็น VLAN ร้างที่ไม่มีใครใช้) คือวิธีป้องกัน double-tagging attack โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nB. ตั้งค่าให้อยู่ในช่วง private VLAN → Private VLAN เป็นฟีเจอร์คนละเรื่องเลย (แยก host ใน VLAN เดียวกันไม่ให้คุยกัน) ไม่เกี่ยวกับ native VLAN\nC. ตั้งเป็น VLAN 1 → ตรงกันข้ามกับสิ่งที่ควรทำ! VLAN 1 คือค่า default ที่ผู้โจมตีเดาได้ทันที = อันตรายที่สุด\nD. ตั้งคนละ VLAN ID ที่ปลายทั้งสองข้างของลิงก์ → จะเกิด native VLAN mismatch → CDP แจ้งเตือน และเฟรมอาจรั่วข้าม VLAN ได้ = สร้างช่องโหว่เพิ่ม ไม่ใช่ป้องกัน\n\n📗 จำไว้สอบ: Native VLAN = เฟรม untagged | ป้องกัน = เปลี่ยนไปใช้ VLAN ร้าง ไม่ใช่ VLAN 1 และต้องตรงกันสองฝั่ง',
  },
  {
    id: 171,
    kind: 'single',
    prompt: 'What is the purpose of a southbound API in a controller-based networking architecture?',
    options: [
      { key: 'A', text: 'Facilitates communication between the controller and the applications' },
      { key: 'B', text: 'Facilitates communication between the controller and the networking hardware' },
      { key: 'C', text: 'allows application developers to interact with the network' },
      { key: 'D', text: 'integrates a controller with other automation and orchestration tools' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ทิศทางของ API ใน SDN (คิดจากแผนที่: บน = เหนือ, ล่าง = ใต้)\n\n        [ Applications / Orchestration ]\n                    ↑\n            Northbound API  (REST / JSON)  ← คุยกับ "แอปและมนุษย์" ข้างบน\n                    ↑\n        ┌─────────────────────────┐\n        │     SDN Controller      │\n        └─────────────────────────┘\n                    ↓\n         ⭐ Southbound API  ← คุยกับ "ฮาร์ดแวร์" ข้างล่าง\n            (OpenFlow, NETCONF, RESTCONF, SNMP, CLI, OpFlex)\n                    ↓\n        [ Switch ]  [ Router ]  [ AP ]\n\n✅ ทำไม B ถูก: Southbound API = ช่องทางที่ controller ใช้ "สั่งการลงไปยังอุปกรณ์เครือข่าย (networking hardware)" เช่น push flow entry ลงสวิตช์ — ตรงตามนิยาม\n\n❌ ทำไมข้ออื่นผิด:\nA. สื่อสารระหว่าง controller กับ applications → นั่นคือ Northbound API (ทิศตรงข้าม)\nC. ให้นักพัฒนาแอปโต้ตอบกับเครือข่ายได้ → Northbound เช่นกัน (นักพัฒนาอยู่ "ข้างบน")\nD. เชื่อม controller เข้ากับเครื่องมือ automation/orchestration อื่น → Northbound อีกเช่นกัน\n\n💡 เคล็ดลับจำ: ดูว่าอีกฝั่งที่คุยด้วยคือใคร — เป็น "ซอฟต์แวร์/คน" → North | เป็น "อุปกรณ์จริง" → South\n\n📗 จำไว้สอบ: ตัวอย่าง Southbound = OpenFlow, NETCONF, OpFlex, SNMP, CLI | Northbound = REST API',
  },
  {
    id: 172,
    kind: 'single',
    prompt: 'What causes a port to be placed in the err-disabled state?',
    options: [
      { key: 'A', text: 'latency' },
      { key: 'B', text: 'port security violation' },
      { key: 'C', text: 'shutdown command issued on the port' },
      { key: 'D', text: 'nothing plugged into the port' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — err-disabled คือสถานะที่ สวิตช์ปิดพอร์ตเองอัตโนมัติ เพราะตรวจพบสิ่งผิดปกติ\n\n🔑 สาเหตุที่ทำให้เข้า err-disable (ที่ CCNA ออกสอบ):\n• ⭐ Port security violation → เจอ MAC เกินจำนวนที่กำหนด หรือ MAC ไม่ตรงที่ระบุไว้\n• BPDU Guard → พอร์ต PortFast ดันได้รับ BPDU (แปลว่ามีคนเอาสวิตช์มาเสียบ = เสี่ยง loop)\n• EtherChannel misconfiguration, duplex mismatch, link flapping\n\n📋 โหมดของ port security violation (ต้องแยกให้ออก):\n   โหมด        ทิ้งเฟรม   ส่ง syslog/SNMP   ปิดพอร์ต (err-disable)\n   ---------   --------   ---------------   ----------------------\n   protect     ✔          ✘                 ✘\n   restrict    ✔          ✔                 ✘\n   ⭐ shutdown ✔          ✔                 ✔  ← ค่าเริ่มต้น!\n\n🔧 วิธีกู้คืนพอร์ตที่ err-disable:\n   • ด้วยมือ: เข้า interface แล้ว `shutdown` ตามด้วย `no shutdown`\n   • อัตโนมัติ: `errdisable recovery cause psecure-violation` + `errdisable recovery interval 300`\n\n✅ ทำไม B ถูก: port security violation ในโหมด shutdown (ซึ่งเป็นค่า default) จะสั่งปิดพอร์ตเข้าสู่ err-disabled ทันที\n\n❌ ทำไมข้ออื่นผิด:\nA. latency → ความหน่วงสูงไม่ทำให้พอร์ตถูกปิด สวิตช์ไม่ได้เฝ้าดูค่านี้เพื่อ err-disable\nC. สั่ง shutdown ที่พอร์ต → สถานะจะเป็น "administratively down" ซึ่งคนละอย่างกับ err-disabled (อันนี้ผู้ดูแลตั้งใจปิดเอง)\nD. ไม่มีอะไรเสียบอยู่ → สถานะจะเป็น "down/down" (notconnect) ไม่ใช่ err-disable\n\n📗 จำไว้สอบ: ดูสถานะด้วย `show interfaces status` — err-disabled = สวิตช์ปิดเอง | administratively down = คนสั่งปิด',
  },
  {
    id: 173,
    kind: 'single',
    prompt: 'Which switch technology establishes a network connection immediately when it is plugged in?',
    options: [
      { key: 'A', text: 'PortFast' },
      { key: 'B', text: 'BPDU guard' },
      { key: 'C', text: 'UplinkFast' },
      { key: 'D', text: 'BackboneFast' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ตระกูล "Fast" ของ STP ต่างกันตรงไหน (ข้อสอบชอบเอามาสลับกัน):\n\n   ฟีเจอร์          ใช้กับพอร์ตแบบ    ทำอะไร\n   --------------   ---------------   ------------------------------------------\n   ⭐ PortFast      Access (ต่อ PC)   ข้าม listening/learning → forward ทันที\n   UplinkFast       Uplink ไป distri  root port ล่ม → สลับไป uplink สำรองใน ~3 วิ\n   BackboneFast     ทุกพอร์ต          เร่ง converge เมื่อลิงก์ล่มแบบ "อ้อม" (indirect)\n   BPDU Guard       Access + PortFast ได้รับ BPDU → err-disable ปิดพอร์ตทันที\n\n🔑 ทำไมต้องมี PortFast:\n   ปกติพอร์ตต้องรอ Listening 15 วิ + Learning 15 วิ = 30 วินาที ก่อนจะส่งข้อมูลได้\n   → PC ที่บูตเสร็จแล้วขอ DHCP ทันที มักจะ timeout ไปก่อน = ได้ IP แบบ 169.254.x.x\n   → PortFast ข้ามขั้นตอนนั้นทั้งหมด เสียบปุ๊บ forward ปั๊บ\n\n⚠️ ข้อควรระวัง: ห้ามเปิด PortFast บนพอร์ตที่ต่อสวิตช์อีกตัว! เพราะข้ามขั้นตอนตรวจ loop\n   → จึงต้องเปิด BPDU Guard คู่กันเสมอ เป็นตาข่ายนิรภัย\n\n✅ ทำไม A ถูก: PortFast คือฟีเจอร์เดียวที่ทำให้พอร์ต "เชื่อมต่อได้ทันทีที่เสียบ" ตรงตามที่โจทย์ถาม\n\n❌ ทำไมข้ออื่นผิด:\nB. BPDU Guard → ทำหน้าที่ "ปิด" พอร์ตเมื่อเจอ BPDU เป็นมาตรการความปลอดภัย ไม่ได้เร่งการเชื่อมต่อ\nC. UplinkFast → เร่งการสลับไปยัง uplink สำรองเมื่อ root port ล่ม เกี่ยวกับ failover ไม่ใช่การเสียบอุปกรณ์ใหม่\nD. BackboneFast → เร่ง convergence เมื่อเกิด indirect link failure (ลิงก์ที่ไม่ได้ต่อกับเราโดยตรงล่ม) คนละสถานการณ์\n\n📗 จำไว้สอบ: PortFast + BPDU Guard = คู่หูที่ต้องเปิดคู่กันบนพอร์ต access เสมอ',
  },
  {
    id: 174,
    kind: 'single',
    prompt: 'Which security program element involves installing badge readers on data-center doors to allow workers to enter and exit based on their job roles?',
    options: [
      { key: 'A', text: 'role-based access control' },
      { key: 'B', text: 'biometrics' },
      { key: 'C', text: 'multifactor authentication' },
      { key: 'D', text: 'physical access control' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คีย์เวิร์ดในโจทย์คือ "doors" (ประตู) และ "badge readers" (เครื่องอ่านบัตร)\n   ทั้งสองอย่างเป็นสิ่งที่จับต้องได้ = อยู่ในโลก กายภาพ (physical) ไม่ใช่โลกดิจิทัล\n\n🔑 องค์ประกอบของโปรแกรมความปลอดภัยที่ CCNA ถาม:\n• ⭐ Physical access control → ควบคุมการเข้าถึงทาง "กายภาพ": ประตู, badge reader, ห้อง server, ตู้ rack ล็อก, กล้อง CCTV, รปภ.\n• Role-based access control (RBAC) → กำหนด "สิทธิ์ในระบบ/เครือข่าย" ตามบทบาท เช่น admin แก้ config ได้ / operator ดูได้อย่างเดียว\n• Biometrics → วิธี พิสูจน์ตัวตน ด้วยลักษณะทางชีวภาพ (ลายนิ้วมือ, ม่านตา, ใบหน้า)\n• MFA → ใช้หลักฐานตั้งแต่ 2 ประเภทขึ้นไป: สิ่งที่รู้ (รหัส) + สิ่งที่มี (บัตร/โทรศัพท์) + สิ่งที่เป็น (นิ้วมือ)\n\n✅ ทำไม D ถูก: โจทย์บรรยายถึง "การติดตั้ง badge reader ที่ประตู data center เพื่อคุมคนเข้าออก" — นี่คือนิยามตรงตัวของ physical access control\n\n❌ ทำไมข้ออื่นผิด:\nA. role-based access control → เป็นตัวลวงที่แนบเนียนมาก เพราะโจทย์มีคำว่า "based on their job roles" ด้วย! แต่ RBAC ในบริบท CCNA หมายถึงสิทธิ์ใน "ระบบ/เครือข่าย" (เช่น privilege level บน router) — ตัวมาตรการที่โจทย์พูดถึงคือ badge reader ที่ประตูจริง ๆ จึงยังจัดเป็น physical access control\nB. biometrics → ถ้าใช้สแกนนิ้วมือถึงจะใช่ แต่โจทย์ระบุชัดว่าใช้ "badge" (บัตร) ไม่ใช่ชีวมิติ\nC. multifactor authentication → ต้องใช้ ≥ 2 ปัจจัย แต่โจทย์มีแค่บัตรอย่างเดียว = ปัจจัยเดียว\n\n📗 จำไว้สอบ: เห็น door / badge / lock / server room / CCTV → ตอบ Physical access control เสมอ อย่าให้คำว่า "role" มาหลอก',
  },
  {
    id: 175,
    kind: 'single',
    prompt: 'Which network action occurs within the data plane?',
    options: [
      { key: 'A', text: 'compare the destination IP address to the IP routing table' },
      { key: 'B', text: 'run routing protocols (OSPF, EIGRP, RIP, BGP)' },
      { key: 'C', text: 'make a configuration change from an incoming NETCONF RPC' },
      { key: 'D', text: 'reply to an incoming ICMP echo request' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — 3 ระนาบ (planes) ของอุปกรณ์เครือข่าย: ต้องแยกให้ขาด ออกสอบทุกชุด\n\n   ระนาบ              ทำอะไร                                ตัวอย่างงาน\n   ----------------   -----------------------------------   -------------------------------\n   ⭐ Data plane      "ขนส่ง" แพ็กเก็ตของผู้ใช้จริง          forward ตาม FIB, switch เฟรมตาม\n   (Forwarding)       ทำงานเร็วมาก ใช้ ASIC/hardware        MAC table, NAT, ใช้ ACL กรอง\n\n   Control plane      "คิด/ตัดสินใจ" ว่าจะส่งไปทางไหน       รัน OSPF/EIGRP/BGP, STP, ARP,\n                      สร้างตารางให้ data plane ใช้          สร้าง routing table\n\n   Management plane   "ดูแล/ตั้งค่า" ตัวอุปกรณ์             SSH, Telnet, SNMP, Syslog,\n                                                            NETCONF/RESTCONF\n\n✅ ทำไม A ถูก: การนำ destination IP ของแพ็กเก็ตที่วิ่งผ่านมา ไป lookup เทียบกับตาราง forwarding (FIB) เพื่อตัดสินว่าจะส่งออกอินเทอร์เฟซไหน = งานหลักของ data plane เกิดขึ้นกับทุกแพ็กเก็ตที่วิ่งผ่านเราเตอร์\n\n❌ ทำไมข้ออื่นผิด:\nB. รัน routing protocol (OSPF/EIGRP/RIP/BGP) → เป็นงาน control plane (การ "คิด" ว่าเส้นทางไหนดี แล้วสร้างตารางไว้ให้ data plane เอาไปใช้)\nC. เปลี่ยน config จาก NETCONF RPC ที่เข้ามา → เป็นงาน management plane (การตั้งค่าอุปกรณ์)\nD. ตอบ ICMP echo request → เป็นแพ็กเก็ตที่ส่งถึง "ตัวเราเตอร์เอง" (ไม่ได้แค่วิ่งผ่าน) → ต้อง punt ขึ้นไปให้ CPU ประมวลผล = งาน control plane ไม่ใช่ data plane\n\n💡 เคล็ดลับแยก: ถามตัวเองว่า "แพ็กเก็ตนี้แค่วิ่งผ่านไป หรือส่งถึงตัวอุปกรณ์เอง?"\n   วิ่งผ่าน = data plane | ส่งถึงตัวมันเอง = control หรือ management plane\n\n📗 จำไว้สอบ: SDN = ดึง control plane ออกไปรวมศูนย์ที่ controller แต่ data plane ยังอยู่บนอุปกรณ์เหมือนเดิม',
  },
  {
    id: 176,
    kind: 'single',
    prompt: 'What is a DHCP client?',
    options: [
      { key: 'A', text: 'a host that is configured to request an IP address automatically' },
      { key: 'B', text: 'a server that dynamically assigns IP addresses to hosts' },
      { key: 'C', text: 'a workstation that requests a domain name associated with its IP address' },
      { key: 'D', text: 'a router that statically assigns IP addresses to hosts' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — บทบาทในระบบ DHCP มี 3 ตัว อย่าสับสน:\n\n• ⭐ DHCP Client → เครื่อง (PC/มือถือ/IP phone) ที่ถูกตั้งค่าให้ "ขอ IP อัตโนมัติ"\n     บน Windows คือการเลือก "Obtain an IP address automatically"\n     ใช้ UDP พอร์ต 68\n\n• DHCP Server → ตัวที่ "แจก" IP, subnet mask, gateway, DNS ออกไปให้ client\n     อาจเป็น router, Windows Server, หรือ appliance เฉพาะ — ใช้ UDP พอร์ต 67\n\n• DHCP Relay Agent → router ที่คั่นกลางอยู่ ทำหน้าที่ "ส่งต่อ" คำขอข้าม subnet\n     เพราะ DHCP Discover เป็น broadcast ซึ่ง router จะ block ตามปกติ\n     ตั้งด้วยคำสั่ง `ip helper-address <ip ของ server>`\n\n✅ ทำไม A ถูก: DHCP client = โฮสต์ที่ตั้งค่าไว้ให้ร้องขอ IP address โดยอัตโนมัติ — ตรงนิยามเป๊ะ\n\n❌ ทำไมข้ออื่นผิด:\nB. server ที่แจก IP แบบไดนามิกให้โฮสต์ → นั่นคือนิยามของ DHCP Server ไม่ใช่ client (สลับบทบาทกัน)\nC. เวิร์กสเตชันที่ขอชื่อโดเมนที่ผูกกับ IP ของมัน → นั่นเป็นเรื่องของ DNS (reverse lookup) คนละโปรโตคอล\nD. router ที่กำหนด IP แบบ static ให้โฮสต์ → คำว่า static ขัดกับ DHCP โดยตรง (DHCP = dynamic)\n\n📗 จำไว้สอบ: DORA = Discover → Offer → Request → Ack | client ใช้พอร์ต 68, server ใช้ 67',
  },
  {
    id: 177,
    kind: 'single',
    prompt: 'An engineer needs to add an old switch back into a network. To prevent the switch from corrupting the VLAN database, which action must be taken?',
    options: [
      { key: 'A', text: 'Add the switch in the VTP domain with a lower revision number' },
      { key: 'B', text: 'Add the switch with DTP set to dynamic desirable' },
      { key: 'C', text: 'Add the switch in the VTP domain with a higher revision number' },
      { key: 'D', text: 'Add the switch with DTP set to desirable' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — VTP (VLAN Trunking Protocol) และกับดัก revision number\n\n🔑 กฎเหล็กของ VTP: สวิตช์จะ ยอมรับ VLAN database จากตัวที่มี configuration revision number สูงกว่า เสมอ\n   → ไม่สนใจว่าตัวนั้นเป็นสวิตช์เก่า ตัวเล็ก หรือเพิ่งเสียบเข้ามาก็ตาม!\n   → revision number จะ +1 ทุกครั้งที่มีการสร้าง/ลบ/แก้ VLAN\n\n☠️ หายนะที่เกิดขึ้นจริงบ่อยมาก:\n   เอาสวิตช์เก่าที่เคยผ่านการแก้ VLAN มาหลายร้อยครั้ง (revision สูงลิ่ว) มาเสียบเข้าเครือข่าย\n   → มัน advertise ตัวเองออกไป → สวิตช์ทั้งโดเมนเห็นว่า revision สูงกว่า → เขียนทับ VLAN database ทั้งหมด\n   → VLAN ของ production หายเกลี้ยง = เครือข่ายล่มทั้งองค์กร\n\n🛡️ วิธีรีเซ็ต revision ให้เป็น 0 ก่อนนำสวิตช์เก่ากลับเข้ามา (เลือกทำอย่างใดอย่างหนึ่ง):\n   1. เปลี่ยนเป็น `vtp mode transparent` แล้วเปลี่ยนกลับเป็น `vtp mode server/client`\n   2. เปลี่ยนชื่อ VTP domain ไปเป็นชื่ออื่น แล้วเปลี่ยนกลับ\n   3. ลบ vlan.dat แล้ว reload\n\n✅ ทำไม A ถูก: การนำสวิตช์เข้าโดเมนโดยที่มัน revision ต่ำกว่า ตัวที่มีอยู่ = มันจะเป็นฝ่าย "รับ" VLAN database มาใช้ตาม ไม่ใช่ฝ่ายเขียนทับ → VLAN database เดิมปลอดภัย\n\n❌ ทำไมข้ออื่นผิด:\nC. เพิ่มด้วย revision ที่ สูงกว่า → นี่คือสิ่งที่ทำให้เกิดหายนะพอดี! มันจะไปเขียนทับ VLAN ของทั้งโดเมน\nB, D. ตั้งค่า DTP เป็น dynamic desirable → DTP เกี่ยวกับการ "เจรจาว่าจะเป็น trunk หรือ access" เท่านั้น ไม่ได้เกี่ยวกับ VLAN database เลยแม้แต่นิดเดียว → ไม่ช่วยป้องกันอะไร\n\n📗 จำไว้สอบ: VTP mode transparent ไม่ยุ่งกับ VLAN database ของใคร (revision = 0 เสมอ) — ปลอดภัยที่สุด',
  },
  {
    id: 178,
    kind: 'single',
    prompt: 'What is a similarity between OM3 and OM4 fiber optic cable?',
    options: [
      { key: 'A', text: 'Both have a 50 micron core diameter' },
      { key: 'B', text: 'Both have a 9 micron core diameter' },
      { key: 'C', text: 'Both have a 62.5 micron core diameter' },
      { key: 'D', text: 'Both have a 100 micron core diameter' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ตารางไฟเบอร์ที่ CCNA ต้องรู้:\n\n   ชนิด                 ขนาด core     แหล่งกำเนิดแสง   ระยะทาง\n   ------------------   -----------   --------------   ------------------\n   Single-mode (SMF)    9 micron      LASER            ไกลมาก (หลาย กม.)\n   OM1 (multimode)      62.5 micron   LED              สั้น\n   OM2 (multimode)      50 micron     LED              สั้น\n   ⭐ OM3 (multimode)   50 micron     VCSEL laser      ~300 ม. ที่ 10 Gbps\n   ⭐ OM4 (multimode)   50 micron     VCSEL laser      ~400 ม. ที่ 10 Gbps\n\n🔑 OM3 กับ OM4 เหมือนกัน ที่: core ขนาด 50 micron ทั้งคู่ (สายเสียบเข้ากันได้)\n   ต่างกันที่: OM4 มีคุณภาพการผลิตดีกว่า → แบนด์วิดท์สูงกว่า → ส่งได้ไกลกว่า\n\n💡 ทำไม core เล็ก = ส่งได้ไกลกว่า? เพราะ core ยิ่งเล็ก แสงยิ่งเดินทางเป็นเส้นตรงเส้นเดียว\n   ไม่สะท้อนไปมา → ไม่เกิด modal dispersion (สัญญาณเบลอ) → single-mode 9 micron จึงไปได้ไกลสุด\n\n✅ ทำไม A ถูก: โจทย์ถามหา "ความเหมือน" ของ OM3 และ OM4 → ทั้งคู่เป็น multimode ที่ใช้ core ขนาด 50 micron เท่ากัน\n\n❌ ทำไมข้ออื่นผิด:\nB. 9 micron → เป็นขนาด core ของ single-mode ไม่ใช่ multimode\nC. 62.5 micron → เป็นขนาดของ OM1 (multimode รุ่นเก่า) — ข้อสอบชอบเอามาหลอกเพราะเป็น multimode เหมือนกัน\nD. 100 micron → ไม่ใช่มาตรฐานที่ใช้กันเลย (ตัวลวง)\n\n📗 จำไว้สอบ: Single-mode = 9 micron + laser + ไกล | Multimode (OM1-OM4) = 50 หรือ 62.5 micron + ระยะสั้น + ถูกกว่า',
  },
  {
    id: 179,
    kind: 'single',
    prompt: 'What is the benefit of using FHRP?',
    options: [
      { key: 'A', text: 'reduced management overhead on network routers' },
      { key: 'B', text: 'balancing traffic across multiple gateways in proportion to their loads' },
      { key: 'C', text: 'higher degree of availability' },
      { key: 'D', text: 'reduced ARP traffic on the network' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — FHRP มีไว้เพื่ออะไร (ทบทวนจากข้อ 151):\n\n   ปัญหา : PC ตั้ง default gateway ได้แค่ IP เดียว → router ตัวนั้นล่ม = ออกเน็ตไม่ได้เลย\n   ทางแก้ : router หลายตัวช่วยกันถือ "Virtual IP" ตัวเดียว\n            Active ล่ม → Standby รับช่วงต่อภายในไม่กี่วินาที → PC ไม่รู้สึกอะไรเลย\n   ผลลัพธ์ : ⭐ ความพร้อมใช้งาน (availability) ของ default gateway สูงขึ้น\n\n✅ ทำไม C ถูก: ประโยชน์หลัก (และเป็นประโยชน์ร่วมของ FHRP ทุกตัว — HSRP, VRRP, GLBP) คือกำจัด single point of failure ที่ default gateway → higher degree of availability\n\n❌ ทำไมข้ออื่นผิด:\nA. ลด management overhead บนเราเตอร์ → ตรงกันข้าม! การเพิ่ม FHRP ทำให้มี config เพิ่มขึ้นและต้องดูแลมากขึ้น (priority, preempt, tracking) ไม่ได้ลดภาระ\nB. กระจายทราฟฟิกไปยัง gateway หลายตัวตามสัดส่วนภาระ → เป็นความสามารถเฉพาะของ GLBP เท่านั้น ไม่ใช่ประโยชน์ร่วมของ FHRP ทุกตัว (HSRP/VRRP ตัว standby นั่งเฉย ๆ ไม่รับทราฟฟิก)\nD. ลดทราฟฟิก ARP → FHRP ไม่ได้ออกแบบมาเพื่อสิ่งนี้ (ที่จริงมันเพิ่ม hello packet เข้าไปในเครือข่ายด้วยซ้ำ)\n\n💡 วิธีตัดตัวเลือกไว: โจทย์ถามหา "ประโยชน์ของ FHRP" แบบทั่วไป → คำตอบต้องเป็นสิ่งที่ FHRP ทุกตัว มีเหมือนกัน → นั่นคือ redundancy/availability ส่วน load balancing เป็นของ GLBP ตัวเดียว\n\n📗 จำไว้สอบ: HSRP = Active/Standby | VRRP = Master/Backup (มาตรฐานเปิด) | GLBP = ตัวเดียวที่ load balance ได้จริง',
  },
  {
    id: 180,
    kind: 'single',
    prompt: 'Which technology allows for multiple operating systems to be run on a single host computer?',
    options: [
      { key: 'A', text: 'virtual routing and forwarding' },
      { key: 'B', text: 'network port ID virtualization' },
      { key: 'C', text: 'virtual device contexts' },
      { key: 'D', text: 'server virtualization' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เทคโนโลยี "virtualization" 4 ตัวนี้คนละเรื่องกันสิ้นเชิง อย่าสับสน:\n\n• ⭐ Server virtualization → ใช้ hypervisor สร้าง VM หลายตัวบนเครื่องจริงเครื่องเดียว\n     → แต่ละ VM มี guest OS ของตัวเอง → รัน Windows + Linux พร้อมกันบนเครื่องเดียวได้\n     → ตัวอย่าง: VMware ESXi, Hyper-V, KVM\n\n• VRF (Virtual Routing and Forwarding) → แบ่ง ตาราง routing ใน router ตัวเดียวออกเป็นหลายชุดแยกกัน\n     → เกี่ยวกับ routing เท่านั้น ไม่เกี่ยวกับ OS เลย\n\n• VDC (Virtual Device Context) → แบ่งสวิตช์ Nexus ตัวเดียวให้เหมือนมีหลายสวิตช์ (logical device)\n     → ยังเป็นอุปกรณ์เครือข่ายอยู่ ไม่ได้รัน OS ของ server\n\n• NPIV (N_Port ID Virtualization) → เทคโนโลยีฝั่ง Fibre Channel / SAN storage\n\n🔑 hypervisor มี 2 แบบ:\n   Type 1 (bare-metal) → ติดตั้งบนฮาร์ดแวร์โดยตรง (ESXi, Hyper-V) — ใช้ใน data center\n   Type 2 (hosted)     → ติดตั้งบน OS อีกที (VirtualBox, VMware Workstation) — ใช้บนเครื่องส่วนตัว\n\n✅ ทำไม D ถูก: คีย์เวิร์ดคือ "multiple operating systems on a single host" → มีแค่ server virtualization ที่ทำได้ เพราะแต่ละ VM มี guest OS แยกของตัวเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. VRF → แยกแค่ตาราง routing ไม่ได้สร้าง OS ใหม่\nB. NPIV → เป็นเรื่องของพอร์ต Fibre Channel ใน SAN คนละโลก\nC. VDC → แบ่งสวิตช์เป็นหลาย context แต่ทั้งหมดยังเป็นสวิตช์ ไม่ใช่การรัน OS หลายระบบ\n\n📗 จำไว้สอบ: เห็นคำว่า "หลาย OS บนเครื่องเดียว" → ตอบ server virtualization / hypervisor เสมอ',
  },
  {
    id: 181,
    kind: 'single',
    prompt: 'What occurs when overlapping Wi-Fi channels are implemented?',
    options: [
      { key: 'A', text: 'The wireless network becomes vulnerable to unauthorized access' },
      { key: 'B', text: 'Wireless devices are unable to distinguish between different SSIDs' },
      { key: 'C', text: 'Users experience poor wireless network performance' },
      { key: 'D', text: 'Network communications are open to eavesdropping' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ทำไมช่องสัญญาณ 2.4 GHz ถึงทับซ้อนกัน:\n\n   ย่าน 2.4 GHz มี 11 ช่อง (ในไทย/สหรัฐฯ) แต่แต่ละช่องกว้าง 22 MHz ขณะที่ห่างกันแค่ 5 MHz\n   → ช่อง 1 กับ 2, 3, 4, 5 จึงทับกันหมด!\n\n   ⭐ ช่องที่ ไม่ทับซ้อน กันเลยมีแค่ 3 ช่อง:  1, 6, 11\n\n   ch1 ▓▓▓▓▓        ch6 ▓▓▓▓▓        ch11 ▓▓▓▓▓\n   ├──────────┼──────────┼──────────┤   ← ห่างกัน 5 ช่อง ไม่ทับกัน ✔\n\n💥 เกิดอะไรขึ้นเมื่อ channel ทับซ้อนกัน:\n   • สัญญาณรบกวนกันเอง (co-channel / adjacent-channel interference)\n   • เฟรมชนกัน → ต้องส่งซ้ำ (retransmission) เยอะขึ้น\n   • throughput ตกฮวบ, latency สูง, ผู้ใช้รู้สึกว่า "เน็ตช้า/หลุด ๆ"\n\n✅ ทำไม C ถูก: ผลของ channel overlap เป็นเรื่อง ประสิทธิภาพ (performance) ล้วน ๆ — ผู้ใช้จะเจอเน็ตช้า สัญญาณกระตุก ไม่ใช่ปัญหาความปลอดภัย\n\n❌ ทำไมข้ออื่นผิด:\nA. เครือข่ายเสี่ยงต่อการเข้าถึงโดยไม่ได้รับอนุญาต → นั่นเป็นเรื่องของ การเข้ารหัส/authentication (WPA2, 802.1X) การเลือก channel ไม่เกี่ยวกับความปลอดภัยเลย\nB. อุปกรณ์แยก SSID ไม่ออก → SSID ถูกระบุด้วยชื่อในเฟรม beacon อุปกรณ์แยกออกเสมอ ไม่ว่าจะใช้ช่องอะไร\nD. เปิดช่องให้ดักฟังได้ → เป็นเรื่องของการเข้ารหัสอีกเช่นกัน (ถ้าไม่เข้ารหัสก็ถูกดักฟังได้ ไม่ว่าช่องจะทับกันหรือไม่)\n\n📗 จำไว้สอบ: 2.4 GHz = ใช้ได้จริงแค่ 3 ช่อง (1, 6, 11) | 5 GHz = มีช่องไม่ทับซ้อนกว่า 20 ช่อง → จึงเหมาะกับพื้นที่หนาแน่น',
  },
  {
    id: 182,
    kind: 'single',
    image: q182,
    prompt:
      'Refer to the exhibit. An administrator must turn off the Cisco Discovery Protocol on the port (Gi0/0, 10.0.0.253/30). Which command set meets the requirement?',
    options: [
      { key: 'A', text: 'interface gi0/0 / no cdp enable' },
      { key: 'B', text: 'interface gi0/0 / clear cdp table' },
      { key: 'C', text: 'interface gi0/0 / no cdp advertise-v2' },
      { key: 'D', text: 'interface gi0/0 / no cdp run' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — คำสั่ง CDP มี 2 ระดับ ต้องแยกให้ขาด (ออกสอบซ้ำ ๆ):\n\n   คำสั่ง                    โหมด          ขอบเขต\n   ----------------------   -----------   -----------------------------------\n   cdp run / no cdp run     (config)#     ⚠️ ทั้งอุปกรณ์ — ทุกพอร์ตพร้อมกัน\n   ⭐ cdp enable /          (config-if)#  เฉพาะพอร์ตนั้นพอร์ตเดียว\n      no cdp enable\n\n🔍 โจทย์บอกชัด: "turn off CDP on the port (Gi0/0)" → ปิดแค่พอร์ตเดียว\n   → ต้องใช้คำสั่งระดับ interface = no cdp enable\n\n✅ ทำไม A ถูก: เข้า interface gi0/0 แล้วสั่ง no cdp enable → CDP หยุดทำงานเฉพาะพอร์ตนี้ พอร์ตอื่นยังส่ง CDP ตามปกติ\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D — แต่ "no cdp run" เป็นคำสั่ง global ที่ปิด CDP ทั้งอุปกรณ์ (พิมพ์ในโหมด interface ก็ไม่มีผลตามที่ต้องการ) ซึ่งเกินกว่าที่โจทย์ขอมาก → คำตอบที่ถูกต้องคือ A\n\n❌ ทำไมข้ออื่นผิด:\nB. clear cdp table → แค่ล้างตาราง neighbor ที่เก็บไว้ทิ้ง แต่ CDP ยังทำงานอยู่ เดี๋ยวตารางก็เต็มใหม่ภายใน 60 วินาที\nC. no cdp advertise-v2 → แค่หยุดโฆษณา CDP เวอร์ชัน 2 ตัว CDP เองยังทำงานอยู่ (ถอยไปใช้ v1)\nD. no cdp run → ปิด CDP ทั้งเครื่อง ไม่ใช่แค่พอร์ตเดียวตามที่โจทย์ต้องการ\n\n💡 ทำไมต้องปิด CDP บางพอร์ต: พอร์ตที่หันออกไปหา ISP หรือเครือข่ายที่ไม่ไว้ใจ ไม่ควรส่ง CDP ออกไป เพราะ CDP เปิดเผยข้อมูลสำคัญ (รุ่นอุปกรณ์, IOS version, IP, ชื่อพอร์ต) ให้คนภายนอกเห็น = ช่วยผู้โจมตีวางแผน\n\n📗 จำไว้สอบ: CDP = Cisco เท่านั้น | LLDP = มาตรฐานเปิด (คำสั่งคู่กัน: lldp run / lldp transmit / lldp receive)',
  },
  {
    id: 183,
    kind: 'single',
    prompt: 'Which 802.11 management frame type is sent when a client roams between access points on the same SSID?',
    options: [
      { key: 'A', text: 'Reassociation Request' },
      { key: 'B', text: 'Probe Request' },
      { key: 'C', text: 'Authentication Request' },
      { key: 'D', text: 'Association Request' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ลำดับการเข้าร่วมเครือข่ายไร้สายของ client (802.11):\n\n   1. Probe Request/Response      → client ตะโกนถาม "มี SSID ไหนบ้าง?" (ขั้นค้นหา)\n   2. Authentication Req/Resp     → ขั้นตอนพิสูจน์ตัวตนเบื้องต้น (open system)\n   3. Association Request/Resp    → "ขอเข้าร่วมกับ AP ตัวนี้" (⭐ เชื่อมต่อ ครั้งแรก)\n   4. ⭐ Reassociation Request    → "ผมย้ายมาจาก AP ตัวก่อน ขอต่อกับคุณแทน" (roaming)\n\n🔑 ความต่างที่โจทย์ถาม:\n   • Association = ยังไม่เคยเชื่อมกับ AP ไหนใน SSID นี้เลย → เริ่มต้นใหม่\n   • Reassociation = เคยเชื่อมกับ AP ตัวอื่นใน SSID เดียวกันอยู่แล้ว → ย้ายมา (roam)\n     → ในเฟรมจะมีฟิลด์ "Current AP address" บอก AP ใหม่ว่ามาจากตัวไหน\n     → AP ใหม่จึงขอ session/บริบทเดิมมาต่อได้ ไม่ต้อง authenticate ใหม่ทั้งหมด = roam เร็วขึ้น\n\n✅ ทำไม A ถูก: โจทย์ระบุชัดว่า client "roams between APs on the same SSID" → นี่คือสถานการณ์ของ Reassociation Request โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nD. Association Request → ใช้ตอนเชื่อมต่อ AP ครั้งแรก ไม่ใช่ตอนย้าย (นี่คือตัวลวงหลักของข้อนี้)\nB. Probe Request → ใช้ตอนสำรวจหาว่ามี AP/SSID ไหนอยู่แถวนี้บ้าง (client อาจส่งก่อน roam จริง แต่ไม่ใช่เฟรมที่ใช้ "ย้าย")\nC. Authentication Request → เป็นขั้นพิสูจน์ตัวตน ไม่ใช่ขั้นย้าย AP\n\n📗 จำไว้สอบ: เฟรม 802.11 มี 3 ประเภท — Management (beacon, probe, auth, assoc), Control (RTS/CTS, ACK), Data (ข้อมูลจริง)',
  },
  {
    id: 184,
    kind: 'multi',
    prompt: 'What are two improvements provided by automation for network management in an SDN environment? (Choose two)',
    options: [
      { key: 'A', text: 'Data collection and analysis tools establish a baseline for the network' },
      { key: 'B', text: 'Artificial intelligence identifies and prevents potential design failures' },
      { key: 'C', text: 'Machine learning minimizes the overall error rate when automating troubleshooting processes' },
      { key: 'D', text: 'New devices are onboarded with minimal effort' },
      { key: 'E', text: 'Proprietary Cisco APIs leverage multiple network management tools' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — ประโยชน์ที่ automation ใน SDN ให้ได้ "จริง" (ไม่ใช่คำโฆษณา):\n\n• ⭐ Data collection & analysis → controller เห็นภาพรวมทั้งเครือข่าย เก็บสถิติมาสร้าง baseline\n     → รู้ว่า "ปกติ" หน้าตาเป็นยังไง → พอผิดปกติก็ตรวจจับได้ทันที\n\n• ⭐ Zero-touch provisioning (ZTP) → เสียบอุปกรณ์ใหม่ + ต่อสาย = จบ\n     → อุปกรณ์ติดต่อ controller เอง แล้วดึง config/image ลงมาอัตโนมัติ\n     → ไม่ต้องส่งช่างไปนั่งพิมพ์ CLI ทีละตัว = onboard ด้วย "minimal effort"\n\n• Config ที่สม่ำเสมอ ไม่มี human error จากการพิมพ์ผิด\n• เปลี่ยนแปลงพร้อมกันได้ทีละหลายร้อยอุปกรณ์\n\n✅ ทำไม A, D ถูก: ทั้งสองข้อเป็นประโยชน์ที่จับต้องได้และเป็นที่ยอมรับในเอกสาร CCNA — การสร้าง baseline จากข้อมูลที่เก็บมา (A) และการ onboard อุปกรณ์ใหม่ด้วยความพยายามน้อย (D)\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B,E — ทั้งคู่ผิด:\n   • B/C อ้างว่า AI/ML "ป้องกัน design failure ได้" หรือ "ลด error rate โดยรวม" → เป็นการกล่าวอ้างเกินจริง ไม่ใช่ประโยชน์มาตรฐานของ network automation ที่ CCNA สอน\n   • E บอกว่าใช้ "proprietary Cisco API" → ขัดกับหลักการของ SDN/automation ที่เน้น open standard API (REST, NETCONF, RESTCONF) โดยตรง\n   → คำตอบที่ถูกต้องคือ A, D\n\n❌ ทำไมข้ออื่นผิด:\nB. AI ระบุและป้องกัน design failure → เกินจริง automation ไม่ได้ออกแบบเครือข่ายแทนคน\nC. ML ลด error rate ในการ troubleshoot → เกินจริงเช่นกัน (เป็นคำโฆษณา ไม่ใช่ฟีเจอร์พื้นฐาน)\nE. proprietary API → SDN เน้น open API ไม่ใช่ของปิดเฉพาะยี่ห้อ\n\n📗 จำไว้สอบ: เห็นคำว่า "proprietary" ในคำถาม SDN/automation → มักเป็นตัวลวง เพราะ SDN ชูเรื่อง open standard',
  },
  {
    id: 185,
    kind: 'single',
    prompt:
      'An engineer must configure the IPv6 address 2001:0db8:0000:0000:0700:0003:400F:572B on an interface and wants to compress it. Which command must be issued on the router interface?',
    options: [
      { key: 'A', text: 'ipv6 address 2001:db8::700:3:400F:572B' },
      { key: 'B', text: 'ipv6 address 2001:db8:0::700:3:4F:572B' },
      { key: 'C', text: 'ipv6 address 2001:0db8::7:3:4F:572B' },
      { key: 'D', text: 'ipv6 address 2001::db8:0000::700:3:400F:572B' },
    ],
    correct: ['A'],
    explanation:
      '📘 กฎการบีบอัด IPv6 มี 2 ข้อ — และห้ามละเมิด:\n\n   กฎ 1: ตัด leading zero (ศูนย์ที่นำหน้า) ในแต่ละกลุ่มได้\n          0db8 → db8   ✔ | 0003 → 3   ✔ | 0000 → 0   ✔\n          ⚠️ แต่ตัดศูนย์ "ตรงกลาง" หรือ "ท้าย" ไม่ได้เด็ดขาด!\n          400F → 4F   ✘ ผิด! (0 อยู่ตรงกลาง ไม่ใช่นำหน้า)\n\n   กฎ 2: แทนกลุ่มศูนย์ที่ติดกัน (0000:0000:...) ด้วย :: ได้ ครั้งเดียวเท่านั้น\n          ถ้าใช้ 2 ครั้ง → เครื่องจะเดาไม่ได้ว่าแต่ละ :: แทนกี่กลุ่ม = ผิดกฎทันที\n\n🔍 บีบอัดทีละขั้น:\n   ต้นฉบับ : 2001:0db8:0000:0000:0700:0003:400F:572B\n   กฎ 1    : 2001: db8:   0:   0: 700:   3:400F:572B   ← ตัดศูนย์นำหน้าทุกกลุ่ม\n   กฎ 2    : 2001:db8::700:3:400F:572B                 ← ยุบ 0:0 ที่ติดกันเป็น ::\n   ✔ ผลลัพธ์ = 2001:db8::700:3:400F:572B  (ตรงกับตัวเลือก A)\n\n✅ ทำไม A ถูก: บีบอัดถูกต้องตามกฎทั้งสองข้อ — ตัดเฉพาะศูนย์นำหน้า และใช้ :: เพียงครั้งเดียว โดยที่ 400F ยังคงเดิม\n\n❌ ทำไมข้ออื่นผิด:\nB. เขียน 400F เป็น 4F → ผิดกฎ 1 (ไปตัดศูนย์ตรงกลาง) และยังเขียน "0::" ซ้ำซ้อนอีก\nC. ผิดที่ 4F เช่นกัน แถมยังเปลี่ยน 0700 เป็น 7 (ตัดศูนย์ตรงกลางอีกครั้ง — 0700 ตัดได้แค่ 0 ตัวแรก เหลือ 700)\nD. ใช้ :: สองครั้ง → ผิดกฎ 2 ชัดเจน (แถมยังใส่ 0000 ค้างไว้ระหว่างกลาง = ขัดแย้งในตัวเอง)\n\n💡 กับดักคลาสสิกของข้อสอบ: ตัวเลือกผิดมักจะไป "ตัดศูนย์ตรงกลาง" ให้ดูสั้นเท่ ๆ — เห็นเลขแบบ 400F กลายเป็น 4F เมื่อไร ตัดทิ้งได้เลย\n\n📗 จำไว้สอบ: IPv6 = 128 บิต | 8 กลุ่ม × 16 บิต | ตัดได้แค่ศูนย์นำหน้า | :: ใช้ได้ครั้งเดียว',
  },
  {
    id: 186,
    kind: 'single',
    prompt: 'What describes the operation of virtual machines?',
    options: [
      { key: 'A', text: 'Virtual machines are responsible for managing and allocating host hardware resources' },
      { key: 'B', text: 'In a virtual machine environment, physical servers must run one operating system at a time' },
      { key: 'C', text: 'Virtual machines are the physical hardware that support a virtual environment' },
      { key: 'D', text: 'Virtual machines are operating system instances that are decoupled from server hardware' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — หัวใจของ VM คือคำว่า "decoupled (แยกออกจากกัน)"\n\n   สมัยก่อน (physical)  : 1 เซิร์ฟเวอร์ = 1 OS = 1 แอป → ผูกติดฮาร์ดแวร์ ย้ายไม่ได้\n   ⭐ ยุค VM            : OS ถูกห่อเป็น "ไฟล์" ที่ลอยอยู่เหนือฮาร์ดแวร์ผ่าน hypervisor\n                          → ย้าย VM ข้ามเซิร์ฟเวอร์จริงได้ (vMotion) โดยไม่ต้องปิดเครื่อง\n                          → รัน OS หลายระบบพร้อมกันบนเครื่องเดียวได้\n\n   ใครทำอะไร:\n   • Hypervisor → เป็นตัวจัดสรรและควบคุมทรัพยากรฮาร์ดแวร์ (CPU/RAM/disk) ให้ VM แต่ละตัว\n   • VM         → เป็น "ผู้ใช้ทรัพยากร" ที่ hypervisor แบ่งมาให้ ไม่ได้จัดสรรเอง\n\n✅ ทำไม D ถูก: VM = อินสแตนซ์ของระบบปฏิบัติการที่ถูกแยกออกจากฮาร์ดแวร์เซิร์ฟเวอร์ (decoupled from server hardware) — นี่คือนิยามตรงตัวที่สุด\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B ("เซิร์ฟเวอร์จริงต้องรัน OS ทีละระบบ") — ผิดชัดเจน เพราะนั่นคือลักษณะของยุค ก่อน มี virtualization! จุดขายทั้งหมดของ VM คือการรัน OS หลายระบบพร้อมกัน → คำตอบที่ถูกต้องคือ D\n\n❌ ทำไมข้ออื่นผิด:\nA. VM เป็นตัวจัดการและจัดสรรทรัพยากรฮาร์ดแวร์ของ host → สลับบทบาท! การจัดสรรเป็นหน้าที่ของ hypervisor VM เป็นเพียงผู้รับทรัพยากรมาใช้\nB. เซิร์ฟเวอร์จริงต้องรัน OS ทีละระบบ → ตรงข้ามกับความจริงโดยสิ้นเชิง\nC. VM คือฮาร์ดแวร์กายภาพที่รองรับสภาพแวดล้อมเสมือน → ผิดตรงกันข้าม VM เป็น ซอฟต์แวร์ (virtual) ส่วนฮาร์ดแวร์จริงเรียกว่า host\n\n📗 จำไว้สอบ: Hypervisor = ผู้จัดสรร | VM = ผู้ใช้ทรัพยากร + มี guest OS ของตัวเอง + แยกจากฮาร์ดแวร์',
  },
  {
    id: 187,
    kind: 'single',
    prompt: 'Which WLC port connects to a switch to pass normal access-point traffic?',
    options: [
      { key: 'A', text: 'redundancy' },
      { key: 'B', text: 'console' },
      { key: 'C', text: 'distribution system' },
      { key: 'D', text: 'service' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — พอร์ตบน WLC มี 4 แบบ หน้าที่คนละอย่างกันสิ้นเชิง:\n\n   พอร์ต                        หน้าที่\n   --------------------------   -------------------------------------------------\n   ⭐ Distribution System (DS)  พอร์ต ข้อมูลหลัก ต่อเข้าสวิตช์\n                                รับส่งทราฟฟิกของ AP + client + CAPWAP tunnel\n                                รวมเป็น EtherChannel/LAG ได้ รองรับ trunk 802.1Q\n\n   Service port                 พอร์ตจัดการแบบ out-of-band (แยกจากเครือข่ายข้อมูล)\n                                ใช้ตอนเครือข่ายหลักล่ม หรือทำ recovery\n\n   Console port                 จัดการผ่าน CLI ด้วยสายอนุกรม (ต้องนั่งอยู่หน้าเครื่อง)\n\n   Redundancy port              ต่อระหว่าง WLC 2 ตัวเพื่อทำ HA (SSO) เท่านั้น\n                                ไม่ได้ส่งข้อมูลผู้ใช้\n\n✅ ทำไม C ถูก: โจทย์ระบุว่า "ต่อเข้าสวิตช์เพื่อส่ง normal AP traffic" → ทราฟฟิกปกติของ AP วิ่งผ่าน Distribution System port ซึ่งเป็นพอร์ตข้อมูลหลักของ WLC\n\n❌ ทำไมข้ออื่นผิด:\nA. redundancy port → ใช้เฉพาะการซิงก์สถานะระหว่าง WLC คู่ HA ไม่ส่งทราฟฟิก user\nB. console port → ใช้ CLI ผ่านสายอนุกรม ไม่ได้ส่งข้อมูลเครือข่ายเลย\nD. service port → เป็นพอร์ต management แยกต่างหาก (out-of-band) ไม่ใช้รับส่ง data ของ AP/client\n\n📗 จำไว้สอบ: DS port = ทางด่วนข้อมูลหลักของ WLC | Service port = ทางลับสำหรับ admin เท่านั้น',
  },
  {
    id: 188,
    kind: 'single',
    prompt: 'An engineering team asks an implementer to configure syslog for warning conditions and error conditions. Which command achieves the desired result?',
    options: [
      { key: 'A', text: 'logging trap 5' },
      { key: 'B', text: 'logging trap 2' },
      { key: 'C', text: 'logging trap 4' },
      { key: 'D', text: 'logging trap 3' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ระดับความรุนแรงของ Syslog (0-7) ต้องท่องให้ขึ้นใจ:\n\n   ระดับ   ชื่อ            ความหมาย\n   -----   -------------   ------------------------------\n   0       Emergency       ระบบใช้การไม่ได้เลย\n   1       Alert           ต้องแก้ไขทันที\n   2       Critical        ภาวะวิกฤต\n   3       Error           ⭐ ข้อผิดพลาด (error conditions)\n   4       Warning         ⭐ คำเตือน (warning conditions)\n   5       Notification    เหตุการณ์ปกติแต่สำคัญ\n   6       Informational   ข้อมูลทั่วไป (ค่า default ของ IOS)\n   7       Debugging       ละเอียดที่สุด (ใช้ตอน debug เท่านั้น)\n\n🔑 กฎสำคัญของ `logging trap X`:\n   → จะบันทึก log ตั้งแต่ระดับ 0 จนถึง X (ทุกอย่างที่รุนแรงเท่ากับหรือมากกว่า X)\n   → ไม่ใช่ระดับ X ระดับเดียว!\n\n🔍 โจทย์ต้องการ: warning (4) และ error (3)\n   → ต้องเลือกตัวเลขที่ครอบคลุมทั้งคู่ = ตัวที่ใหญ่กว่า = 4\n   → `logging trap 4` = เก็บระดับ 0,1,2,3,4 ✔ (ได้ทั้ง error และ warning ครบ)\n\n✅ ทำไม C ถูก: logging trap 4 ครอบคลุมระดับ 0-4 ซึ่งรวมทั้ง error (3) และ warning (4) ตามที่ทีมงานขอ\n\n❌ ทำไมข้ออื่นผิด:\nD. logging trap 3 → ได้แค่ระดับ 0-3 = มี error แต่ ขาด warning (ระดับ 4 ไม่ถูกเก็บ)\nB. logging trap 2 → ได้แค่ 0-2 = ขาดทั้ง error และ warning\nA. logging trap 5 → ได้ 0-5 = ครอบคลุมครบก็จริง แต่ เกินความจำเป็น (ดึง notification ระดับ 5 มาด้วย) โจทย์ขอเฉพาะ warning + error → 4 ตรงกว่า\n\n💡 เคล็ดจำลำดับ: "Every Awesome Cisco Engineer Will Need Ice Daily"\n   (Emergency, Alert, Critical, Error, Warning, Notification, Informational, Debugging)\n\n📗 จำไว้สอบ: เลขยิ่งน้อย = ยิ่งรุนแรง | logging trap X = เก็บระดับ 0 ถึง X ทั้งหมด',
  },
  {
    id: 189,
    kind: 'drag',
    image: q189,
    prompt: 'Drag and drop the 802.11 wireless standards from the left onto the matching statements on the right.',
    categories: [
      { name: '802.11a', items: ['Operates in the 5 GHz band only and supports a maximum data rate of 54 Mbps'] },
      { name: '802.11ac', items: ['Operates in the 5 GHz band only and supports a maximum data rate that can exceed 100 Mbps'] },
      { name: '802.11b', items: ['Supports a maximum data rate of 11 Mbps'] },
      { name: '802.11g', items: ['Operates in the 2.4 GHz band only and supports a maximum data rate of 54 Mbps'] },
      { name: '802.11n', items: ['Operates in the 2.4 GHz and 5 GHz bands'] },
    ],
    explanation:
      '📘 ตารางมาตรฐาน 802.11 — ท่องตารางนี้ตารางเดียว ตอบได้ทุกข้อเรื่อง Wi-Fi:\n\n   มาตรฐาน   ย่านความถี่        ความเร็วสูงสุด    ชื่อการตลาด\n   -------   ----------------   ---------------   -----------\n   802.11    2.4 GHz            2 Mbps            (ตัวแรกสุด)\n   802.11a   5 GHz เท่านั้น     54 Mbps           -\n   802.11b   2.4 GHz เท่านั้น   11 Mbps           -\n   802.11g   2.4 GHz เท่านั้น   54 Mbps           -\n   802.11n   2.4 + 5 GHz ทั้งคู่ 600 Mbps         Wi-Fi 4\n   802.11ac  5 GHz เท่านั้น     ~1.3 Gbps+        Wi-Fi 5\n   802.11ax  2.4 + 5 (+6) GHz   ~9.6 Gbps         Wi-Fi 6/6E\n\n🔑 จุดที่ข้อสอบชอบหลอก (จำ 3 ข้อนี้พอ):\n   • a กับ g ความเร็วเท่ากันที่ 54 Mbps → แยกด้วยย่านความถี่ (a = 5 GHz, g = 2.4 GHz)\n   • ⭐ n เป็นตัวเดียวที่ได้ทั้งสองย่าน (dual-band) → เห็นคำว่า "both bands" ตอบ n ทันที\n   • ac อยู่ 5 GHz อย่างเดียว และเป็นตัวเดียวในโจทย์ที่ทะลุ 100 Mbps\n\n✅ การจับคู่ที่ถูกต้อง:\n• 802.11a  → 5 GHz อย่างเดียว, สูงสุด 54 Mbps\n• 802.11ac → 5 GHz อย่างเดียว, เกิน 100 Mbps (ระดับ Gbps)\n• 802.11b  → สูงสุด 11 Mbps (ช้าที่สุดในกลุ่ม จำง่าย)\n• 802.11g  → 2.4 GHz อย่างเดียว, สูงสุด 54 Mbps\n• 802.11n  → ได้ทั้ง 2.4 GHz และ 5 GHz\n\n💡 ความเข้ากันได้: b/g/n คุยกันได้ (2.4 GHz ด้วยกัน) แต่ a คุยกับ b/g ไม่ได้ เพราะคนละย่านความถี่\n\n📗 จำไว้สอบ: 2.4 GHz = ไปได้ไกลกว่า ทะลุกำแพงดีกว่า แต่ช้าและมีสัญญาณรบกวนเยอะ | 5 GHz = เร็วกว่า ช่องเยอะกว่า แต่ระยะสั้นกว่า',
  },
  {
    id: 190,
    kind: 'multi',
    prompt: 'Which two protocols are supported on service-port interfaces of a WLC? (Choose two)',
    options: [
      { key: 'A', text: 'RADIUS' },
      { key: 'B', text: 'TACACS+' },
      { key: 'C', text: 'SCP' },
      { key: 'D', text: 'Telnet' },
      { key: 'E', text: 'SSH' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — Service port ของ WLC คือช่องทาง out-of-band management\n\n   • เป็นพอร์ตแยกที่ไม่ยุ่งกับเครือข่ายข้อมูลหลัก (distribution system port)\n   • มีไว้เพื่อ "เข้าไปจัดการ WLC" โดยเฉพาะ — โดยเฉพาะตอนเครือข่ายหลักล่มหรือทำ recovery\n   • ⭐ ดังนั้นโปรโตคอลที่ใช้ผ่านพอร์ตนี้ต้องเป็นโปรโตคอล จัดการอุปกรณ์ (management)\n   • ข้อจำกัด: ไม่รองรับ 802.1Q tagging และไม่รวมเป็น LAG/EtherChannel\n\n✅ ทำไม D, E ถูก: Telnet และ SSH เป็นโปรโตคอลสำหรับเข้า CLI เพื่อจัดการอุปกรณ์ → ตรงตามวัตถุประสงค์ของ service port\n\n❌ ทำไมข้ออื่นผิด:\nA. RADIUS → เป็นโปรโตคอล AAA ที่ WLC ใช้ "ไปคุยกับเซิร์ฟเวอร์" เพื่อตรวจสอบตัวตนผู้ใช้ไร้สาย — ไม่ใช่โปรโตคอลที่ใช้ "เข้ามาจัดการ" WLC ผ่าน service port\nB. TACACS+ → AAA เช่นกัน (ใช้คุมสิทธิ์ผู้ดูแลอุปกรณ์) — เป็นการที่ WLC ออกไปถามเซิร์ฟเวอร์ ไม่ใช่ช่องทางเข้าถึงผ่าน service port\nC. SCP → ใช้คัดลอกไฟล์ผ่าน SSH ไม่ได้อยู่ในรายการโปรโตคอลที่ Cisco ระบุว่ารองรับบน service port\n\n💡 ระวังสับสน: RADIUS/TACACS+ เกี่ยวข้อง กับ WLC จริง แต่มันเป็นทราฟฟิกที่วิ่งผ่าน management interface ปกติ ไม่ใช่ "โปรโตคอลที่รองรับบน service port"\n\n⚠️ ในโลกจริง: Telnet ส่งรหัสผ่านแบบ plain text ไม่ควรใช้เด็ดขาด → ใช้ SSH เท่านั้น (แต่ข้อสอบถามว่า "รองรับ" ไม่ได้ถามว่า "ควรใช้")\n\n📗 จำไว้สอบ: Telnet = พอร์ต 23 (ไม่เข้ารหัส) | SSH = พอร์ต 22 (เข้ารหัส ปลอดภัย)',
  },
  {
    id: 191,
    kind: 'single',
    image: q191,
    prompt:
      'Refer to the exhibit. Router A connects to Router B via G0/0/0 and to Router C via G0/0/1. How must router A be configured so that it only sends Cisco Discovery Protocol information to router C?',
    options: [
      { key: 'A', text: 'cdp run / interface gi0/0/0 / no cdp enable' },
      { key: 'B', text: 'cdp run / interface gi0/0/0 / cdp enable' },
      { key: 'C', text: 'cdp run / interface gi0/0/1 / cdp enable' },
      { key: 'D', text: 'no cdp run / interface gi0/0/1 / cdp enable' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ลำดับชั้นของคำสั่ง CDP: global เป็นสวิตช์ใหญ่ ครอบทุกอย่าง\n\n   cdp run (global)     = เปิดไฟหลักของบ้าน  → ถ้าปิดตัวนี้ ไฟทุกห้องดับหมด\n   cdp enable (per-int) = สวิตช์ไฟรายห้อง     → มีผลก็ต่อเมื่อไฟหลักเปิดอยู่เท่านั้น!\n\n   ⚠️ กฎเหล็ก: ถ้า `no cdp run` (ปิด global) → พิมพ์ `cdp enable` ที่อินเทอร์เฟซกี่ครั้งก็ไร้ผล\n\n🔍 อ่านโจทย์:\n   Router A ── G0/0/0 ──→ Router B   ← ❌ ไม่ ต้องการส่ง CDP\n   Router A ── G0/0/1 ──→ Router C   ← ✔ ต้องการส่ง CDP เฉพาะทางนี้\n\n🔧 วิธีทำ (2 ขั้น):\n   1. `cdp run` → เปิด CDP ระดับเครื่อง (ไฟหลักเปิด — จำเป็นเสมอ)\n   2. `interface gi0/0/0` + `no cdp enable` → ปิดเฉพาะพอร์ตที่ไปหา B\n   → ผลลัพธ์: CDP ยังทำงานบน G0/0/1 (ไปหา C) เท่านั้น ✔ ตรงโจทย์เป๊ะ\n\n   💡 จุดที่ต้องคิดกลับด้าน: เราไม่ได้ "เปิด" พอร์ตที่ต้องการ — เพราะทุกพอร์ตเปิด CDP อยู่แล้วโดย default\n      เราต้อง "ปิด" พอร์ตที่ไม่ต้องการต่างหาก!\n\n✅ ทำไม A ถูก: เปิด CDP global แล้วปิดเฉพาะพอร์ตที่ไปหา B → เหลือแต่ทาง C ที่ยังส่ง CDP\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D — แต่ D ขึ้นต้นด้วย `no cdp run` ซึ่ง ปิด CDP ทั้งเครื่อง ทำให้ `cdp enable` ที่ตามมาไม่มีผลใด ๆ → ผลลัพธ์คือ ไม่ส่ง CDP ให้ใครเลย รวมทั้ง Router C ด้วย → คำตอบที่ถูกต้องคือ A\n\n❌ ทำไมข้ออื่นผิด:\nB. cdp run + cdp enable บน gi0/0/0 → เท่ากับไปเปิด CDP ให้ทาง Router B (ซึ่งไม่ต้องการ!) แถม gi0/0/1 ก็ยังเปิดอยู่ตาม default → ส่งให้ทั้งคู่\nC. cdp run + cdp enable บน gi0/0/1 → ดูเหมือนถูก แต่ไม่ได้ปิด gi0/0/0 → B ก็ยังได้รับ CDP อยู่ดี (เพราะ default เปิดทุกพอร์ต)\nD. no cdp run → ปิด CDP หมดทั้งเครื่อง คำสั่งถัดไปไร้ผล\n\n📗 จำไว้สอบ: CDP เปิดอยู่ทุกพอร์ตโดย default → ถ้าอยากส่งแค่บางพอร์ต ให้คิดว่า "ปิดตัวที่ไม่เอา" ไม่ใช่ "เปิดตัวที่เอา"',
  },
  {
    id: 192,
    kind: 'single',
    prompt: 'Which global command encrypts all passwords in the running configuration?',
    options: [
      { key: 'A', text: 'password-encrypt' },
      { key: 'B', text: 'enable password-encryption' },
      { key: 'C', text: 'enable secret' },
      { key: 'D', text: 'service password-encryption' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — วิธีจัดการรหัสผ่านบน IOS (แยกให้ออก 3 คำสั่ง):\n\n   คำสั่ง                          ผลกับรหัสผ่าน\n   ----------------------------   ------------------------------------------------\n   enable password cisco          เก็บเป็น plain text (ใครดู config ก็อ่านออก!)\n   enable secret cisco            เข้ารหัสด้วย MD5 (Type 5) — แข็งแรง ถอดไม่ได้\n                                  ⚠️ แต่มีผลกับ enable password ตัวเดียวเท่านั้น\n   ⭐ service password-encryption  เข้ารหัส Type 7 ให้รหัสผ่าน plain-text\n      (global config)             ทุกตัว ใน running-config พร้อมกัน\n                                  (console, vty, enable password ฯลฯ)\n\n✅ ทำไม D ถูก: `service password-encryption` เป็นคำสั่ง global ตัวเดียวที่ไล่เข้ารหัสรหัสผ่านที่เป็น plain text ทั้งหมด ใน running-config ตามที่โจทย์ถาม\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B ("enable password-encryption") — ไม่มีคำสั่งนี้อยู่จริงใน IOS เป็นคำที่แต่งขึ้นมาหลอก → คำตอบที่ถูกต้องคือ D\n\n❌ ทำไมข้ออื่นผิด:\nA. password-encrypt → ไม่มีคำสั่งนี้ใน IOS (ตัวลวง)\nB. enable password-encryption → ไม่มีคำสั่งนี้เช่นกัน (ตัวลวงที่แนบเนียนเพราะคำดูคุ้น)\nC. enable secret → เข้ารหัสเฉพาะ enable password ของตัวมันเอง ด้วย MD5 ไม่ได้ไปยุ่งกับรหัสผ่านตัวอื่นใน config เลย → ไม่ตรงคำว่า "all passwords"\n\n⚠️ ความจริงที่ควรรู้: Type 7 ถอดรหัสกลับได้ง่ายมาก (มีเว็บถอดฟรีเต็มไปหมด) มันแค่กัน "คนเดินผ่านมาแอบมอง" เท่านั้น ไม่ใช่การเข้ารหัสที่ปลอดภัยจริง → ของจริงต้องใช้ `enable secret` (Type 5/8/9)\n\n📗 จำไว้สอบ: enable secret ชนะ enable password เสมอถ้าตั้งทั้งคู่ | Type 7 = อ่อน ถอดได้ | Type 5 (MD5) = แข็ง',
  },
  {
    id: 193,
    kind: 'single',
    prompt: 'What is the function of a hub-and-spoke WAN topology?',
    options: [
      { key: 'A', text: 'allows access restrictions to be implemented between subscriber sites' },
      { key: 'B', text: 'provides direct connections between subscribers' },
      { key: 'C', text: 'supports Layer 2 VPNs' },
      { key: 'D', text: 'supports application optimization' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Hub-and-spoke: ทุกอย่างต้องผ่านศูนย์กลาง\n\n           [Spoke A]        [Spoke B]\n                \\             /\n                 \\           /\n                  [  HUB  ]  ← ทราฟฟิกทุกเส้นต้องวิ่งผ่านตรงนี้\n                 /           \\\n           [Spoke C]        [Spoke D]\n\n   ⭐ Spoke A จะคุยกับ Spoke B ได้ ต้องอ้อมผ่าน hub เสมอ (ไม่มีเส้นตรงระหว่างกัน)\n\n💡 ผลที่ตามมา — นี่แหละคือ "ฟังก์ชัน" ที่โจทย์ถาม:\n   เพราะทราฟฟิกทุกหยดต้องผ่าน hub → hub จึงเป็น จุดบังคับใช้นโยบายที่สมบูรณ์แบบ\n   → วาง firewall / ACL ที่ hub ที่เดียว = ควบคุมได้ว่าไซต์ไหนคุยกับไซต์ไหนได้บ้าง\n   → เช่น "สาขา A ห้ามคุยกับสาขา B แต่ทั้งคู่เข้า data center ได้" — ทำได้ง่ายมาก\n\n✅ ทำไม A ถูก: การที่ทุกอย่างผ่านจุดเดียวทำให้ บังคับใช้ข้อจำกัดการเข้าถึง (access restrictions) ระหว่างไซต์ ได้อย่างเบ็ดเสร็จ — เป็นคุณสมบัติเด่นของ hub-and-spoke\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B ("เชื่อมต่อโดยตรงระหว่าง subscriber") — ผิดตรงข้ามเลย! hub-and-spoke ไม่มีการเชื่อมตรงระหว่าง spoke การเชื่อมตรงทุกคู่คือลักษณะของ full mesh ต่างหาก → คำตอบที่ถูกต้องคือ A\n\n❌ ทำไมข้ออื่นผิด:\nB. เชื่อมต่อโดยตรงระหว่าง subscriber → นั่นคือ full mesh ตรงข้ามกับ hub-and-spoke โดยสิ้นเชิง\nC. รองรับ Layer 2 VPN → เป็นเรื่องของ บริการ ที่ผู้ให้บริการเสนอ (VPLS/EoMPLS) ไม่ใช่ฟังก์ชันของ topology\nD. รองรับ application optimization → เป็นงานของอุปกรณ์ WAN optimization (เช่น caching, compression) ไม่ใช่ผลจากรูปแบบ topology\n\n⚠️ ข้อเสียที่ต้องจำคู่กัน: HUB ล่ม = ทุกสาขาตายหมด (single point of failure) และ spoke คุยกันต้องอ้อม 2 hop = latency สูงขึ้น\n\n📗 จำไว้สอบ: Hub-and-spoke = ประหยัด + คุมนโยบายง่าย แต่ hub เป็นจุดล่มจุดเดียว | Full mesh = ต่อตรงทุกคู่ แพงและซับซ้อน',
  },
  {
    id: 194,
    kind: 'single',
    prompt: 'What uses HTTP messages to transfer data to applications residing on different hosts?',
    options: [
      { key: 'A', text: 'OpenFlow' },
      { key: 'B', text: 'OpenStack' },
      { key: 'C', text: 'OpFlex' },
      { key: 'D', text: 'REST' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คีย์เวิร์ดคือ "HTTP messages" → มีตัวเดียวที่ใช้ HTTP คือ REST\n\n   ชื่อ            คืออะไร                             ใช้ HTTP ไหม\n   ------------   ---------------------------------   ------------\n   ⭐ REST        สถาปัตยกรรม API (Northbound)        ✔ ใช่!\n                  ใช้ GET/POST/PUT/DELETE + JSON/XML\n   OpenFlow       โปรโตคอล Southbound (SDN)           ✘ (โปรโตคอลของตัวเอง)\n   OpFlex         โปรโตคอล policy ของ Cisco ACI       ✘ (Southbound)\n   OpenStack      แพลตฟอร์มบริหาร cloud (IaaS)        ✘ (ไม่ใช่โปรโตคอล)\n\n🔑 REST ทำงานยังไง:\n   แอปตัวหนึ่ง (client) ยิง HTTP request ไปหาแอปอีกตัว (server) ที่อยู่คนละเครื่อง\n   GET /api/v1/interfaces  →  server ตอบกลับเป็น JSON/XML\n   → นี่คือ "การส่งข้อมูลไปยังแอปที่อยู่บนโฮสต์อื่น ด้วยข้อความ HTTP" ตรงตามโจทย์\n\n✅ ทำไม D ถูก: REST เป็นรูปแบบเดียวในตัวเลือกที่ใช้ HTTP message เป็นตัวขนส่งข้อมูลระหว่างแอปพลิเคชันต่างโฮสต์\n\n❌ ทำไมข้ออื่นผิด:\nA. OpenFlow → เป็น southbound protocol ที่ controller ใช้คุยกับสวิตช์ ไม่ได้ใช้ HTTP และไม่ได้คุยระหว่าง "แอปพลิเคชัน"\nB. OpenStack → เป็นแพลตฟอร์มโอเพนซอร์สสำหรับสร้าง cloud (จัดการ VM/storage/network) ไม่ใช่โปรโตคอลรับส่งข้อมูล\nC. OpFlex → โปรโตคอล southbound ของ Cisco ACI ใช้ push นโยบายลงอุปกรณ์\n\n💡 ตัวช่วยแยก REST vs RESTCONF: REST = แนวคิด/สถาปัตยกรรมทั่วไป | RESTCONF = การนำ REST มาใช้กับ config อุปกรณ์เครือข่ายโดยเฉพาะ (ใช้ YANG model)\n\n📗 จำไว้สอบ: เห็น HTTP / GET / POST / JSON / Northbound → ตอบ REST เสมอ',
  },
  {
    id: 195,
    kind: 'multi',
    image: q195,
    prompt:
      'Refer to the exhibit. The loopback1 interface of the Atlanta router (2000::1/128) must reach the loopback3 interface of the Washington router (2000::3/128). Which two static host routes must be configured on the New York router? (Choose two)',
    options: [
      { key: 'A', text: 'ipv6 route 2000::1/128 2012::1' },
      { key: 'B', text: 'ipv6 route 2000::3/128 2023::3' },
      { key: 'C', text: 'ipv6 route 2000::3/128 s0/0/0' },
      { key: 'D', text: 'ipv6 route 2000::1/128 2012::2' },
      { key: 'E', text: 'ipv6 route 2000::1/128 s0/0' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — โครงสร้าง static route ของ IPv6:\n\n   ipv6 route <ปลายทาง/prefix> <next-hop>\n                                    ↑\n                    ต้องเป็น IP ของ "router ตัวถัดไป" (เพื่อนบ้าน)\n                    ⚠️ ไม่ใช่ IP ของตัวเราเอง!\n\n   /128 = host route = เจาะจงโฮสต์ตัวเดียว (เทียบเท่า /32 ของ IPv4) ใช้กับ loopback\n\n🔍 อ่านโทโพโลยีจาก exhibit:\n   Atlanta ══(2012::1)══ ... ══(2012::2)══ New York ══(2023::2)══ ... ══(2023::3)══ Washington\n     Lo1 = 2000::1                                                           Lo3 = 2000::3\n\n   → Atlanta และ Washington ต่างมี default route ชี้มาที่ New York อยู่แล้ว\n   → ดังนั้น New York (ตัวกลาง) ต้องรู้ทางไปหา loopback ของ ทั้งสองฝั่ง\n\n🔧 คิดทีละเส้น:\n   เส้นที่ 1 → ไป 2000::1 (loopback ของ Atlanta)\n              next-hop ต้องเป็นเพื่อนบ้านฝั่ง Atlanta = 2012::1 ✔ = ตัวเลือก A\n   เส้นที่ 2 → ไป 2000::3 (loopback ของ Washington)\n              next-hop ต้องเป็นเพื่อนบ้านฝั่ง Washington = 2023::3 ✔ = ตัวเลือก B\n\n✅ ทำไม A, B ถูก: ทั้งสองเส้นระบุปลายทาง /128 ถูกตัว และชี้ next-hop ไปยัง router เพื่อนบ้านที่ถูกทิศทาง\n\n❌ ทำไมข้ออื่นผิด:\nD. ipv6 route 2000::1/128 2012::2 → 2012::2 คืออินเทอร์เฟซของ New York เอง! ชี้ next-hop มาที่ตัวเอง = routing loop ทันที (นี่คือกับดักหลักของข้อนี้ — ต่างกับ A แค่เลขตัวเดียว)\nC. ipv6 route 2000::3/128 s0/0/0 → พอร์ต s0/0/0 ของ NY หันไปทาง Atlanta แต่ 2000::3 อยู่ฝั่ง Washington = ส่งผิดทิศ\nE. ipv6 route 2000::1/128 s0/0 → ระบุพอร์ตแทน next-hop IP บนลิงก์ point-to-point พอทำได้ แต่ชื่อพอร์ตไม่ตรงกับที่มีจริง และตัวเลือก A ชัดเจนกว่า\n\n📗 จำไว้สอบ: next-hop ต้องเป็น IP ของ "อีกฝั่ง" เสมอ — ถ้าเห็นเลขที่เป็นพอร์ตของตัวเอง ตัดทิ้งได้ทันที',
  },
  {
    id: 196,
    kind: 'single',
    image: q196,
    prompt:
      'Refer to the exhibit. If OSPF is running on this network, how does Router2 handle traffic from Site B to 10.10.13.128 at Site A?',
    options: [
      { key: 'A', text: 'It sends packets out of interface Fa0/1 only' },
      { key: 'B', text: 'It sends packets out of interface Fa0/2 only' },
      { key: 'C', text: 'It cannot send packets to 10.10.13.128' },
      { key: 'D', text: 'It load-balances traffic out of Fa0/1 and Fa0/2' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เราเตอร์ส่งแพ็กเก็ตได้ก็ต่อเมื่อ "มีเส้นทางในตาราง" เท่านั้น\n   ถ้าหาไม่เจอ และไม่มี default route (0.0.0.0/0) → drop แพ็กเก็ตทิ้ง แล้วส่ง ICMP unreachable กลับ\n\n🔍 อ่าน exhibit ให้ครบ 2 จุด:\n   จุดที่ 1 → routing table มีแต่ 10.10.13.0/25\n   จุดที่ 2 → ⭐ "Gateway of last resort is not set" = ไม่มี default route!\n\n🔢 คำนวณว่า /25 ครอบคลุมถึงไหน:\n   /25 = 255.255.255.128 → block size = 256 - 128 = 128\n   → subnet เริ่มที่ 10.10.13.0 ครอบคลุม 10.10.13.0 ถึง 10.10.13.127\n   → subnet ถัดไปคือ 10.10.13.128/25 (ครอบคลุม .128 – .255) ← เป็นคนละ subnet!\n\n   10.10.13.0/25   : .0 ────────── .127   ✔ อยู่ในตาราง\n   10.10.13.128/25 : .128 ──────── .255   ✘ ไม่มีในตาราง!\n\n   → ปลายทาง 10.10.13.128 ตกอยู่นอกช่วงที่ router รู้จัก\n\n✅ ทำไม C ถูก: ไม่มี route ที่ตรงกับ 10.10.13.128 และไม่มี default route มารองรับ → Router2 ส่งแพ็กเก็ตไปไม่ได้ ต้อง drop ทิ้ง\n\n❌ ทำไมข้ออื่นผิด:\nA. ส่งออก Fa0/1 อย่างเดียว → ต้องมี route ก่อนถึงจะเลือกพอร์ตได้ แต่ไม่มี route เลย\nB. ส่งออก Fa0/2 อย่างเดียว → เหตุผลเดียวกัน\nD. load-balance ทั้ง Fa0/1 และ Fa0/2 → การ load balance เกิดขึ้นได้ต่อเมื่อมี route ที่มี metric เท่ากันหลายเส้น (ECMP) แต่นี่ไม่มี route แม้แต่เส้นเดียว\n\n💡 กับดักของข้อนี้: ตัวเลข .128 ดูใกล้เคียงกับ 10.10.13.0/25 มาก ถ้าไม่คำนวณ block size จะเผลอคิดว่าอยู่ใน subnet เดียวกัน — แต่ .128 คือ "จุดเริ่มต้นของ subnet ถัดไป" พอดี\n\n📗 จำไว้สอบ: เห็น "Gateway of last resort is not set" ในโจทย์ → เป็นสัญญาณว่าคำตอบอาจเป็น "ส่งไม่ได้/drop" ให้ตรวจ subnet ให้ดี',
  },
  {
    id: 197,
    kind: 'single',
    prompt: 'How does HSRP provide first hop redundancy?',
    options: [
      { key: 'A', text: 'It load-balances traffic by assigning the same metric value to more than one route in the IP routing table' },
      { key: 'B', text: 'It load-balances Layer 2 traffic by flooding traffic out all interfaces configured with the same VLAN' },
      { key: 'C', text: 'It forwards multiple packets to the same destination over different routed links in the data path' },
      { key: 'D', text: 'It uses a shared virtual MAC and a virtual IP address for a group of routers that serve as the default gateway for hosts on a LAN' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — HSRP ทำงานยังไง (กลไกละเอียด):\n\n   R1 (Active)  ─┐\n                 ├─→ ⭐ Virtual IP: 192.168.1.1  +  Virtual MAC: 0000.0C07.ACxx\n   R2 (Standby) ─┘         (xx = หมายเลข HSRP group เป็นเลขฐานสิบหก)\n\n   PC ตั้ง default gateway = 192.168.1.1 (virtual IP)\n   → PC ทำ ARP → ได้ virtual MAC กลับมา → ส่งเฟรมไปหา virtual MAC\n   → PC ไม่รู้เลย ว่าเบื้องหลังมีเราเตอร์กี่ตัว\n\n   R1 ล่ม → R2 รับทั้ง virtual IP และ virtual MAC ไปครอง\n   → ⭐ เพราะ MAC ก็ย้ายตามไปด้วย PC จึงไม่ต้องทำ ARP ใหม่เลย = สลับได้เนียนสนิท\n\n🔑 บทบาทของ HSRP:\n   • Active → ตัวที่รับ-ส่งทราฟฟิกจริง (priority สูงสุดชนะ, ค่าเริ่มต้น = 100)\n   • Standby → ตัวสำรอง คอยฟัง hello ทุก 3 วินาที (hold time 10 วินาที)\n   • ต้องใส่คำสั่ง `preempt` ถ้าอยากให้ตัว priority สูงกลับมายึด active คืนหลังฟื้น\n\n✅ ทำไม D ถูก: อธิบายกลไกของ HSRP ได้ตรงเป๊ะ — กลุ่มเราเตอร์แชร์ virtual MAC + virtual IP ร่วมกัน เพื่อทำหน้าที่เป็น default gateway ให้โฮสต์บน LAN\n\n❌ ทำไมข้ออื่นผิด:\nA. load-balance ด้วยการใส่ metric เท่ากันหลาย route ใน routing table → นั่นคือ ECMP ของ routing protocol คนละเรื่องกับ FHRP\nB. load-balance ชั้น 2 ด้วยการ flood ออกทุกพอร์ตใน VLAN → นั่นคือพฤติกรรม flooding ของสวิตช์ ไม่ใช่ HSRP (และการ flood ไม่ใช่ load balancing ด้วยซ้ำ)\nC. ส่งแพ็กเก็ตไปปลายทางเดียวกันผ่านลิงก์ต่างกันหลายเส้น → เป็นการอธิบาย load balancing ของ routing ไม่ใช่ gateway redundancy\n\n💡 สังเกต: ตัวลวง A, B, C ล้วนพูดถึง load balancing ทั้งหมด — แต่ HSRP คือ redundancy (สำรอง) ไม่ใช่ load balancing (ถ้าอยาก load balance ต้องใช้ GLBP)\n\n📗 จำไว้สอบ: HSRP virtual MAC = 0000.0C07.ACxx | VRRP = 0000.5E00.01xx | GLBP = 0007.B400.xxxx',
  },
  {
    id: 198,
    kind: 'multi',
    prompt: 'What are two characteristics of the distribution layer in a three-tier network architecture? (Choose two)',
    options: [
      { key: 'A', text: 'serves as the network aggregation point' },
      { key: 'B', text: 'provides a boundary between Layer 2 and Layer 3 communications' },
      { key: 'C', text: 'designed to meet continuous, redundant uptime requirements' },
      { key: 'D', text: 'is the backbone for the network topology' },
      { key: 'E', text: 'physical connection point for a LAN printer' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — หน้าที่ของแต่ละชั้นใน Three-Tier (ต้องแยกให้ขาด):\n\n   🔹 Access Layer (ชั้นล่างสุด)\n      • จุดต่อทางกายภาพให้ end device: PC, โทรศัพท์, เครื่องพิมพ์, AP\n      • ทำ PoE, port security, VLAN assignment\n\n   🔹 ⭐ Distribution Layer (ชั้นกลาง) — โจทย์ถามชั้นนี้\n      • เป็นจุดรวม (aggregation point) ของ access switch หลายตัว\n      • เป็นขอบเขตระหว่าง Layer 2 กับ Layer 3 ← ทำ inter-VLAN routing ตรงนี้\n      • เป็นที่วาง policy ทั้งหมด: ACL, filtering, route summarization, QoS, FHRP\n\n   🔹 Core Layer (ชั้นบนสุด)\n      • เป็น backbone ของเครือข่าย\n      • หน้าที่เดียว = forward ให้เร็วที่สุด, redundant uptime ต่อเนื่อง\n      • ⚠️ ห้ามทำ policy/ACL เด็ดขาด (จะหน่วง) — "Nothing in the core but speed"\n\n✅ ทำไม A, B ถูก: ทั้งสองเป็นหน้าที่เฉพาะของ distribution layer — เป็นจุดรวมของ access switch (A) และเป็นเส้นแบ่ง L2/L3 ที่ทำ routing + policy (B)\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B,C — แต่ C ("continuous, redundant uptime") เป็นคำบรรยายของ core layer ชัดเจน (core คือชั้นที่ต้องไม่ล่มเด็ดขาด) → คำตอบที่ถูกต้องคือ A,B\n\n❌ ทำไมข้ออื่นผิด:\nC. ออกแบบเพื่อ uptime ต่อเนื่องและ redundant → เป็นคุณสมบัติของ core layer\nD. เป็น backbone ของ topology → เป็นนิยามของ core layer ตรง ๆ\nE. จุดต่อทางกายภาพสำหรับเครื่องพิมพ์ LAN → เป็นหน้าที่ของ access layer (จุดที่ end device เสียบเข้ามา)\n\n📗 จำไว้สอบ: เห็นคำว่า aggregation / L2-L3 boundary / policy / ACL / summarization → Distribution เสมอ | เห็น backbone / speed / uptime → Core',
  },
  {
    id: 199,
    kind: 'single',
    prompt: 'What is the purpose of using First Hop Redundancy Protocol in a specific subnet?',
    options: [
      { key: 'A', text: 'Filter traffic based on destination IP addressing' },
      { key: 'B', text: 'Sends the default route to the hosts on a network' },
      { key: 'C', text: 'ensures a loop-free physical topology' },
      { key: 'D', text: 'forwards multicast hello messages between routers' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — กลไกภายในของ FHRP: เราเตอร์ในกลุ่มต้องคุยกันตลอดเวลา\n\n   R1 ◀── hello (multicast) ──▶ R2\n   → ส่ง hello หากันทุก ๆ 3 วินาที เพื่อบอกว่า "ฉันยังอยู่"\n   → ถ้า standby ไม่ได้ยิน hello จาก active เกิน hold time (10 วิ) = ถือว่า active ตาย\n   → standby ยึด virtual IP + virtual MAC มาเป็นของตัวเองทันที = failover สำเร็จ\n\n   ที่อยู่ multicast ที่ใช้:\n   • HSRP v1 → 224.0.0.2   | HSRP v2 → 224.0.0.102\n   • VRRP    → 224.0.0.18\n   • GLBP    → 224.0.0.102\n\n✅ ทำไม D ถูก: การส่ง multicast hello message ระหว่างเราเตอร์ในกลุ่ม คือกลไกหลักที่ทำให้ FHRP รู้ว่าใครยังมีชีวิตอยู่และตรวจจับ failure ได้ — ในบรรดาตัวเลือกทั้งหมด มีเพียงข้อนี้ที่บรรยายการทำงานจริงของ FHRP\n\n❌ ทำไมข้ออื่นผิด:\nA. กรองทราฟฟิกตาม destination IP → นั่นคืองานของ ACL ไม่เกี่ยวกับ FHRP เลย\nB. ส่ง default route ไปให้โฮสต์ในเครือข่าย → ตัวลวงที่แนบเนียน! FHRP ไม่ได้ "ส่ง route" ให้ host — host ตั้ง gateway ชี้ไปที่ virtual IP ด้วยตัวเอง (ผ่าน DHCP หรือตั้งมือ) FHRP แค่ทำให้ virtual IP นั้นไม่ล่มเท่านั้น\nC. รับประกัน topology ชั้น 2 ไม่มี loop → นั่นคืองานของ STP คนละโปรโตคอล\n\n💡 อ่านโจทย์ให้ดี: ข้อนี้ถามถึง "purpose/กลไกการทำงาน" ในระดับที่ลึกกว่าคำว่า "redundancy" — และตัวเลือกที่ให้มาไม่มีคำว่า redundancy ตรง ๆ เลย จึงต้องเลือกข้อที่บรรยาย กลไก ได้ถูกต้อง\n\n📗 จำไว้สอบ: FHRP hello = multicast ทุก 3 วินาที, hold time 10 วินาที → active ล่มแล้ว standby รับช่วงภายใน ~10 วิ',
  },
  {
    id: 200,
    kind: 'single',
    prompt: 'Which access layer threat-mitigation technique provides security based on identity?',
    options: [
      { key: 'A', text: 'Dynamic ARP Inspection' },
      { key: 'B', text: 'using a non-default native VLAN' },
      { key: 'C', text: '802.1x' },
      { key: 'D', text: 'DHCP snooping' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คีย์เวิร์ดในโจทย์คือ "based on identity" (อิงตัวตน)\n   → ต้องหาเทคนิคที่ถามว่า "คุณเป็นใคร?" ไม่ใช่แค่ตรวจเนื้อหาแพ็กเก็ต\n\n🔑 802.1X = Port-Based Network Access Control\n\n   [Supplicant] ──→ [Authenticator] ──→ [Authentication Server]\n    ตัว client        สวิตช์/WLC             RADIUS/ISE\n   \n   • ก่อนพิสูจน์ตัวตนสำเร็จ → พอร์ตปล่อยผ่านได้แค่ EAP เท่านั้น (บล็อกทุกอย่างอื่น)\n   • พิสูจน์ผ่าน → พอร์ตเปิดให้ใช้งานเต็มที่ + อาจได้ VLAN/ACL ตามสิทธิ์ของ user คนนั้น\n   • ⭐ ตัดสินใจจาก "ตัวตนของผู้ใช้/อุปกรณ์" โดยตรง = security based on identity\n\n📋 เทคนิคป้องกันชั้น access อื่น ๆ (เทียบให้เห็นความต่าง):\n• DHCP Snooping → สร้างตารางว่าพอร์ตไหนเชื่อถือได้ → บล็อก DHCP server ปลอม\n• Dynamic ARP Inspection (DAI) → ใช้ตาราง DHCP snooping ตรวจ ARP → บล็อก ARP spoofing\n• Non-default native VLAN → ลดความเสี่ยง VLAN hopping\n• Port Security → จำกัดตาม MAC address (แต่ MAC ปลอมง่าย → ไม่นับว่าเป็น identity ที่แท้จริง)\n\n✅ ทำไม C ถูก: 802.1X เป็นเทคนิคเดียวที่ตรวจสอบ ตัวตนของผู้ใช้/อุปกรณ์ (ผ่าน username/password หรือ certificate กับ RADIUS) ก่อนเปิดพอร์ตให้ใช้งาน\n\n❌ ทำไมข้ออื่นผิด:\nA. Dynamic ARP Inspection → ตรวจความถูกต้องของ ARP message (IP-to-MAC binding) ไม่ได้ถามว่าผู้ใช้เป็นใคร\nD. DHCP Snooping → กันเซิร์ฟเวอร์ DHCP ปลอม ไม่เกี่ยวกับตัวตนของผู้ใช้\nB. ใช้ native VLAN ที่ไม่ใช่ค่าเริ่มต้น → เป็นการปรับ config เพื่อกัน VLAN hopping ไม่มีการพิสูจน์ตัวตนใด ๆ\n\n📗 จำไว้สอบ: 802.1X = 3 บทบาท (Supplicant / Authenticator / Authentication Server) และใช้ EAP over LAN (EAPOL) ระหว่าง client กับสวิตช์',
  },
  {
    id: 201,
    kind: 'single',
    prompt: 'What must be considered when using 802.11a?',
    options: [
      { key: 'A', text: 'It is compatible with 802.11b- and 802.11g-compliant wireless devices' },
      { key: 'B', text: 'It is used in place of 802.11b/g when many nonoverlapping channels are required' },
      { key: 'C', text: 'It is susceptible to interference from 2.4 GHz devices such as microwave ovens' },
      { key: 'D', text: 'It is chosen over 802.11b/g when a lower-cost solution is necessary' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — 802.11a อยู่ย่าน 5 GHz ส่วน 802.11b/g อยู่ย่าน 2.4 GHz\n   → คนละย่านความถี่ = คุยกันไม่ได้เลย (เหมือนวิทยุคนละคลื่น)\n\n   ย่าน       จำนวนช่องที่ไม่ทับซ้อน   สัญญาณรบกวน\n   --------   ----------------------   ---------------------------------\n   2.4 GHz    แค่ 3 ช่อง (1, 6, 11)     เยอะมาก! ไมโครเวฟ, Bluetooth,\n                                        โทรศัพท์ไร้สาย, กล้องวงจรปิด\n   ⭐ 5 GHz   มากกว่า 20 ช่อง       น้อยมาก (อุปกรณ์ในบ้านไม่ค่อยใช้ย่านนี้)\n\n✅ ทำไม B ถูก: จุดเด่นที่แท้จริงของ 802.11a คือมันอยู่ย่าน 5 GHz ซึ่งมี nonoverlapping channel เยอะกว่ามาก → เหมาะกับพื้นที่ที่ต้องวาง AP หนาแน่น (ออฟฟิศใหญ่, หอประชุม) โดยช่องไม่ชนกัน\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A ("เข้ากันได้กับ 802.11b/g") — ผิดชัดเจน เพราะ 802.11a อยู่ 5 GHz ส่วน b/g อยู่ 2.4 GHz คนละย่านความถี่ อุปกรณ์คุยกันไม่ได้ → คำตอบที่ถูกต้องคือ B\n\n❌ ทำไมข้ออื่นผิด:\nA. เข้ากันได้กับอุปกรณ์ 802.11b/g → ผิด คนละย่านความถี่ (ตัวที่เข้ากับ b/g ได้คือ 802.11g และ n เพราะอยู่ 2.4 GHz เหมือนกัน)\nC. ถูกรบกวนจากอุปกรณ์ 2.4 GHz เช่นไมโครเวฟ → ผิดกลับด้าน! ไมโครเวฟรบกวน 802.11b/g ต่างหาก 802.11a อยู่ 5 GHz จึงรอดจากการรบกวนนี้ (ที่จริงข้อนี้เป็นข้อดีของ 802.11a ที่ถูกเขียนกลับเป็นข้อเสีย)\nD. เลือกใช้เมื่อต้องการโซลูชันราคาถูกกว่า → ผิด อุปกรณ์ 5 GHz แพงกว่า และครอบคลุมพื้นที่แคบกว่า (ต้องใช้ AP มากกว่า = ยิ่งแพง)\n\n📗 จำไว้สอบ: 802.11a คุยกับ b/g ไม่ได้ | 802.11g คุยกับ b ได้ (2.4 GHz เหมือนกัน) | 802.11n คุยได้ทั้งคู่ (dual-band)',
  },
  {
    id: 202,
    kind: 'single',
    prompt: 'When a site-to-site VPN is configured, which IPsec mode provides encapsulation and encryption of the entire original IP packet?',
    options: [
      { key: 'A', text: 'IPsec tunnel mode with AH' },
      { key: 'B', text: 'IPsec transport mode with AH' },
      { key: 'C', text: 'IPsec tunnel mode with ESP' },
      { key: 'D', text: 'IPsec transport mode with ESP' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — IPsec ต้องเลือก 2 อย่าง: (1) mode และ (2) protocol\n\n🔹 เลือก MODE:\n   Transport mode → เข้ารหัสเฉพาะ payload เก็บ IP header เดิมไว้\n                    [IP header เดิม][ESP][payload ที่เข้ารหัส]\n                    ใช้กับการสื่อสาร host-to-host\n\n   ⭐ Tunnel mode  → ห่อ แพ็กเก็ต IP เดิมทั้งใบ (header + payload) แล้วใส่ IP header ใหม่\n                    [IP header ใหม่][ESP][ ทั้ง IP header เดิม + payload ]\n                                          └─── เข้ารหัสหมดทั้งก้อน ───┘\n                    ⭐ ใช้กับ site-to-site VPN (ซ่อน IP ภายในไม่ให้โลกภายนอกเห็น)\n\n🔹 เลือก PROTOCOL:\n   AH (Authentication Header, protocol 51)\n      ✔ พิสูจน์ตัวตน + ตรวจความถูกต้อง (integrity)\n      ✘ ไม่เข้ารหัสเลย! ข้อมูลยังอ่านออกได้ ← จุดตายของ AH\n      ✘ ใช้กับ NAT ไม่ได้\n\n   ⭐ ESP (Encapsulating Security Payload, protocol 50)\n      ✔ เข้ารหัส (encryption) + พิสูจน์ตัวตน + integrity ครบ\n      ✔ ใช้ได้กับ NAT (ผ่าน NAT-T)\n\n🔍 โจทย์ขอ: "encapsulation และ encryption ของแพ็กเก็ต IP เดิมทั้งหมด"\n   → คำว่า "ทั้งแพ็กเก็ต" = Tunnel mode | คำว่า "encryption" = ESP\n\n✅ ทำไม C ถูก: Tunnel mode + ESP เป็นเพียงชุดเดียวที่ให้ทั้งการห่อหุ้มแพ็กเก็ตเดิมทั้งใบ และเข้ารหัสข้อมูลจริง → มาตรฐานของ site-to-site VPN\n\n❌ ทำไมข้ออื่นผิด:\nA. Tunnel + AH → ห่อหุ้มทั้งแพ็กเก็ตก็จริง แต่ AH ไม่เข้ารหัส → ตกข้อ "encryption" ที่โจทย์ขอ\nB. Transport + AH → ผิดทั้งสองด้าน (ไม่ห่อทั้งแพ็กเก็ต + ไม่เข้ารหัส)\nD. Transport + ESP → เข้ารหัสได้ก็จริง แต่ ไม่ได้ห่อ IP header เดิม (เก็บไว้เปิดเผย) → ตกข้อ "entire original IP packet"\n\n📗 จำไว้สอบ: Site-to-site VPN = Tunnel mode + ESP เสมอ | AH = ไม่มีการเข้ารหัส เห็น AH ในโจทย์ที่ถามหา encryption ให้ตัดทิ้งทันที',
  },
  {
    id: 203,
    kind: 'single',
    prompt: 'What does physical access control regulate?',
    options: [
      { key: 'A', text: 'access to specific networks based on business function' },
      { key: 'B', text: 'access to servers to prevent malicious activity' },
      { key: 'C', text: 'access to computer networks and file systems' },
      { key: 'D', text: 'access to networking equipment and facilities' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แยกให้ขาดระหว่าง "กายภาพ" กับ "ตรรกะ":\n\n   🔒 ⭐ Physical access control (กายภาพ — จับต้องได้)\n      ควบคุมการเข้าถึง อุปกรณ์และสถานที่จริง:\n      • ห้อง server / data center      • ตู้ rack ที่ล็อกกุญแจ\n      • badge reader ที่ประตู          • กล้อง CCTV, รปภ., biometrics\n      → ป้องกันคนเดินเข้าไปถอดสาย เสียบ USB หรือขโมยอุปกรณ์ออกไปเลย\n\n   💻 Logical access control (ตรรกะ — อยู่ในระบบ)\n      ควบคุมการเข้าถึง ข้อมูลและระบบ:\n      • username/password, 802.1X       • ACL, firewall rule\n      • สิทธิ์ในไฟล์ระบบ, RBAC          • privilege level บน router\n\n✅ ทำไม D ถูก: physical access control ควบคุม "การเข้าถึงอุปกรณ์เครือข่ายและสถานที่ (networking equipment and facilities)" — เป็นข้อเดียวที่พูดถึงสิ่งที่จับต้องได้\n\n❌ ทำไมข้ออื่นผิด:\nA. เข้าถึงเครือข่ายเฉพาะตามหน้าที่ทางธุรกิจ → นั่นคือ RBAC / logical access control (กำหนดสิทธิ์ในระบบ)\nB. เข้าถึงเซิร์ฟเวอร์เพื่อป้องกันกิจกรรมมุ่งร้าย → กำกวม แต่สื่อถึงการควบคุมเชิง logical (สิทธิ์ล็อกอินเข้าเซิร์ฟเวอร์)\nC. เข้าถึงเครือข่ายคอมพิวเตอร์และระบบไฟล์ → logical ชัดเจน (ไฟล์และเครือข่ายไม่ใช่สิ่งที่จับต้องได้)\n\n💡 เคล็ดลับตัดตัวเลือก: ถามตัวเองว่า "สิ่งนี้ต้องใช้ มือ เข้าถึง หรือใช้ คีย์บอร์ด?"\n   ใช้มือ (เดินเข้าประตู, จับสาย) = physical | ใช้คีย์บอร์ด (ล็อกอิน, เปิดไฟล์) = logical\n\n📗 จำไว้สอบ: ข้อสอบ CCNA ชอบเอา physical vs logical มาหลอกกัน — มองหาคำว่า facilities / equipment / door / room = physical เสมอ',
  },
  {
    id: 204,
    kind: 'single',
    prompt: 'On workstations running Microsoft Windows, which protocol provides the default gateway for the device?',
    options: [
      { key: 'A', text: 'DHCP' },
      { key: 'B', text: 'STP' },
      { key: 'C', text: 'SNMP' },
      { key: 'D', text: 'DNS' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เครื่อง Windows ที่ตั้งเป็น "Obtain an IP address automatically" จะได้อะไรมาบ้าง:\n\n   ผลลัพธ์จากคำสั่ง `ipconfig` — ทุกบรรทัดนี้มาจาก DHCP ทั้งหมด:\n     IPv4 Address. . . : 192.168.1.50      ← DHCP\n     Subnet Mask . . . : 255.255.255.0     ← DHCP\n     ⭐ Default Gateway : 192.168.1.1        ← DHCP (option 3)\n     DNS Servers . . . : 8.8.8.8           ← DHCP (option 6)\n\n🔑 DHCP option ที่ควรจำ:\n   option 1  = subnet mask\n   ⭐ option 3  = default gateway (router)  ← ข้อนี้ถามถึงตัวนี้\n   option 6  = DNS server\n   option 51 = lease time\n\n✅ ทำไม A ถูก: DHCP เป็นโปรโตคอลที่แจกค่า default gateway ให้เครื่อง client โดยอัตโนมัติ (ผ่าน DHCP option 3) — ไม่มีโปรโตคอลอื่นทำหน้าที่นี้\n\n❌ ทำไมข้ออื่นผิด:\nB. STP → ป้องกัน loop ในเครือข่ายชั้น 2 (สวิตช์คุยกันเอง) ไม่ยุ่งกับการตั้งค่า IP ของ PC เลย\nC. SNMP → ใช้ เฝ้าดู/มอนิเตอร์ อุปกรณ์เครือข่าย (เก็บสถิติ, ส่ง trap) ไม่ได้แจกค่า config ให้ PC\nD. DNS → แปลง ชื่อโดเมนเป็น IP (www.cisco.com → 72.163.4.185) ไม่ได้แจก gateway\n\n💡 ระวังสับสน: DNS server address มาจาก DHCP ก็จริง แต่ตัว โปรโตคอล DNS เอง ไม่ได้เป็นคนแจก — มันแค่ถูกแจก\n\n📗 จำไว้สอบ: ถ้า DHCP ล่ม → Windows จะตั้ง IP ตัวเองเป็น APIPA (169.254.x.x) ซึ่งคุยได้แค่ใน LAN และ ไม่มี default gateway → เห็นเลข 169.254 เมื่อไร แปลว่า DHCP ไม่ตอบ',
  },
  {
    id: 205,
    kind: 'single',
    prompt: 'How are VLAN hopping attacks mitigated?',
    options: [
      { key: 'A', text: 'enable dynamic ARP inspection' },
      { key: 'B', text: 'manually implement trunk ports and disable DTP' },
      { key: 'C', text: 'activate all ports and place in the default VLAN' },
      { key: 'D', text: 'configure extended VLANs' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — VLAN Hopping มี 2 แบบ:\n\n   1. ⭐ Switch Spoofing (แบบที่ข้อนี้ถาม)\n      ผู้โจมตีเอาเครื่องที่ปลอมตัวเป็นสวิตช์มาเสียบ → ส่ง DTP frame เจรจาขอเป็น trunk\n      → ถ้าพอร์ตนั้นตั้งเป็น dynamic auto/desirable → สวิตช์ยอมเป็น trunk ให้!\n      → ผู้โจมตีเห็นทราฟฟิกของ ทุก VLAN ทันที ☠️\n\n   2. Double Tagging\n      ใส่ tag สองชั้น อาศัยช่องโหว่ของ native VLAN (แก้ด้วยการเปลี่ยน native VLAN)\n\n🛡️ วิธีป้องกัน switch spoofing (ต้องทำครบทั้งชุด):\n   • พอร์ตที่เป็น trunk จริง → `switchport mode trunk` (ตั้งด้วยมือ ไม่ให้เจรจา)\n   • ⭐ `switchport nonegotiate` → ปิด DTP ไม่ส่ง DTP frame อีกเลย\n   • พอร์ตที่ต่อ PC → `switchport mode access` (ล็อกเป็น access ตายตัว)\n   • พอร์ตที่ไม่ใช้ → `shutdown` + ย้ายไป VLAN ร้าง\n\n✅ ทำไม B ถูก: การตั้ง trunk ด้วยมือ และ ปิด DTP ตัดตอนกลไกที่ผู้โจมตีใช้พอดี — ถ้าไม่มีการเจรจา DTP เครื่องปลอมก็หลอกให้สวิตช์เปิด trunk ให้ไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. เปิด Dynamic ARP Inspection → DAI ป้องกัน ARP spoofing / man-in-the-middle คนละการโจมตีกันเลย\nC. เปิดใช้ทุกพอร์ตและวางไว้ใน VLAN เริ่มต้น → ยิ่งอันตราย! พอร์ตที่ไม่ใช้ควร shutdown และ VLAN 1 (default) คือสิ่งที่ควรหลีกเลี่ยงที่สุด — ข้อนี้ทำตรงข้ามกับ best practice ทุกอย่าง\nD. ตั้งค่า extended VLAN (1006-4094) → แค่ขยายช่วงหมายเลข VLAN ที่ใช้ได้ ไม่เกี่ยวกับความปลอดภัยเลย\n\n📗 จำไว้สอบ: DTP mode ที่ปลอดภัย = `switchport mode access` หรือ `switchport mode trunk` + `switchport nonegotiate` | อันตราย = dynamic auto / dynamic desirable',
  },
  {
    id: 206,
    kind: 'single',
    prompt: 'What is the role of a firewall in an enterprise network?',
    options: [
      { key: 'A', text: 'Forwards packets based on stateless packet inspection' },
      { key: 'B', text: 'Processes unauthorized packets and allows passage to less secure segments of the network' },
      { key: 'C', text: 'determines which packets are allowed to cross from unsecured to secured networks' },
      { key: 'D', text: 'explicitly denies all packets from entering an administrative domain' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Firewall = "ยามเฝ้าประตู" ระหว่างโซนที่มีระดับความเชื่อถือต่างกัน\n\n   [ อินเทอร์เน็ต ]  ──▶  🔥 FIREWALL  ──▶  [ เครือข่ายภายใน ]\n     ไม่น่าเชื่อถือ         ตัดสินตาม policy      น่าเชื่อถือ\n     (untrusted)          ว่าอะไรผ่านได้บ้าง      (trusted)\n\n   ระดับความเชื่อถือ (security level) บน Cisco ASA:\n     inside = 100 (เชื่อถือสูงสุด) | DMZ = 50 | outside = 0 (ไม่เชื่อถือเลย)\n     → จากสูงไปต่ำ = ผ่านได้โดย default | จากต่ำไปสูง = ต้องมีกฎอนุญาตเท่านั้น\n\n✅ ทำไม C ถูก: หน้าที่หลักของ firewall คือ "ตัดสินว่าแพ็กเก็ตใดได้รับอนุญาตให้ข้ามจากเครือข่ายที่ไม่ปลอดภัย เข้าสู่เครือข่ายที่ปลอดภัย" — ตรงนิยามที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. forward แพ็กเก็ตด้วย stateless packet inspection → firewall สมัยใหม่ทำ stateful inspection (จำสถานะการเชื่อมต่อไว้) ส่วน stateless เป็นแบบของ ACL ธรรมดา\nB. ประมวลผลแพ็กเก็ตที่ไม่ได้รับอนุญาตแล้วปล่อยให้ผ่านไปยังโซนที่ปลอดภัยน้อยกว่า → ฟังดูขัดแย้งในตัวเอง firewall ต้อง drop แพ็กเก็ตที่ไม่ได้รับอนุญาต ไม่ใช่ปล่อยผ่าน\nD. ปฏิเสธแพ็กเก็ตทั้งหมดที่เข้ามาในโดเมน → สุดโต่งเกินไป ถ้าบล็อกทุกอย่างก็ใช้เครือข่ายไม่ได้เลย firewall กรอง "ตามกฎ" ไม่ใช่ปฏิเสธทุกอย่าง\n\n💡 เทียบให้ชัด — สามตัวที่ข้อสอบชอบสลับกัน:\n   • Firewall → ควบคุม (อนุญาต/ปฏิเสธ) ตาม policy\n   • IDS → ตรวจจับ + แจ้งเตือน อย่างเดียว (ดูสำเนาทราฟฟิก บล็อกไม่ได้)\n   • IPS → ตรวจจับ + บล็อกได้ทันที (วาง inline บนเส้นทางทราฟฟิกจริง)\n\n📗 จำไว้สอบ: Stateful = จำ session ได้ (firewall) | Stateless = ดูทีละแพ็กเก็ต ไม่จำอะไร (ACL)',
  },
  {
    id: 207,
    kind: 'single',
    prompt: 'What is a function of the Cisco DNA Center Overall Health Dashboard?',
    options: [
      { key: 'A', text: 'It provides a summary of the top 10 global issues' },
      { key: 'B', text: 'It provides detailed activity logging for the 10 devices and users on the network' },
      { key: 'C', text: 'It summarizes the operational status of each wireless device on the network' },
      { key: 'D', text: 'It summarizes daily and weekly CPU usage for servers and workstations in the network' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Cisco DNA Center คือ controller ที่บริหารเครือข่ายทั้งองค์กรจากหน้าจอเดียว\n\n   หน้า Overall Health Dashboard แสดงภาพรวมสุขภาพเครือข่าย:\n   • คะแนนสุขภาพรวมของ Network devices และ Clients (เป็น %)\n   • ⭐ Top 10 Global Issues — รายการปัญหาสำคัญที่สุดที่ควรแก้ก่อน\n   • สถานะแยกตามไซต์/อาคาร/ชั้น\n\n💡 หัวใจของ DNA Center คือ "Assurance" — ไม่ใช่แค่บอกว่าอุปกรณ์ up หรือ down\n   แต่บอกว่า "ผู้ใช้กำลังเจอปัญหาอะไร" และ "น่าจะเกิดจากอะไร" (ใช้ AI/analytics ช่วยจัดอันดับ)\n\n✅ ทำไม A ถูก: Overall Health Dashboard สรุปภาพรวม และแสดง Top 10 Global Issues — เป็นฟีเจอร์เด่นที่ Cisco ระบุไว้ตรง ๆ\n\n❌ ทำไมข้ออื่นผิด:\nB. บันทึก activity log ละเอียดสำหรับอุปกรณ์และผู้ใช้ 10 ราย → นี่คือหน้าที่ของ syslog / logging server ไม่ใช่ dashboard สรุปภาพรวม (และตัวเลข "10 devices" ก็ฟังดูมั่ว)\nC. สรุปสถานะเฉพาะอุปกรณ์ไร้สาย → แคบเกินไป คำว่า "Overall" หมายถึงทั้งเครือข่าย (มีสายด้วย) ไม่ใช่เฉพาะ wireless\nD. สรุปการใช้ CPU รายวัน/รายสัปดาห์ของ server และ workstation → DNA Center บริหาร อุปกรณ์เครือข่าย (สวิตช์/เราเตอร์/AP) ไม่ได้ไปมอนิเตอร์ CPU ของเซิร์ฟเวอร์และเครื่องผู้ใช้\n\n📗 จำไว้สอบ: DNA Center = SDN controller ของ Cisco สำหรับ campus | ใช้ Northbound REST API ให้แอปเรียก + Southbound คุยกับอุปกรณ์',
  },
  {
    id: 208,
    kind: 'drag',
    image: q208,
    prompt: 'Drag and drop the DNS lookup components from the left onto the functions on the right.',
    categories: [
      { name: 'cache', items: ['local database of address mappings that improves name-resolution performance'] },
      { name: 'DNS', items: ['service that maps hostnames to IP addresses'] },
      { name: 'domain', items: ['component of a URL that indicates the location or organization type'] },
      { name: 'name resolver', items: ['in response to client requests, queries a name server for IP address information'] },
      { name: 'no ip domain-lookup', items: ['disables DNS services on a Cisco device'] },
    ],
    explanation:
      '📘 แนวคิด — องค์ประกอบของระบบ DNS lookup:\n\n• ⭐ DNS → ตัว "บริการ" ที่แปลง hostname เป็น IP address\n     (ภาพรวมของทั้งระบบ — www.cisco.com → 72.163.4.185)\n\n• ⭐ cache → ฐานข้อมูล ในเครื่อง ที่เก็บผลการ resolve ที่เคยทำไปแล้ว\n     → ครั้งต่อไปไม่ต้องถาม DNS server ซ้ำ = เร่งความเร็ว การ resolve\n     → ดูได้ด้วย `ipconfig /displaydns` บน Windows\n\n• ⭐ name resolver → ตัวที่ทำหน้าที่ "ไปถาม" name server แทน client\n     → รับคำขอจากแอป แล้ววิ่งไป query DNS server ให้\n\n• ⭐ domain → ส่วนของ URL ที่บอก ตำแหน่งหรือประเภทองค์กร\n     → .com (การค้า) | .org (องค์กร) | .edu (การศึกษา) | .th (ประเทศไทย)\n\n• ⭐ no ip domain-lookup → คำสั่ง IOS ที่ ปิด บริการ DNS บนอุปกรณ์ Cisco\n     💡 ทำไมต้องปิด? เพราะเวลาพิมพ์คำสั่งผิด เราเตอร์จะนึกว่าเป็นชื่อโฮสต์\n        แล้วพยายาม resolve → ค้างรอ 30 วินาที! ปิดตัวนี้แล้วมันจะ error ทันที\n\n🔑 ลำดับการทำงานจริงเมื่อ PC จะเปิดเว็บ:\n   1. เช็ก cache ในเครื่องก่อน → เจอ = จบ (เร็วมาก)\n   2. ไม่เจอ → name resolver ไปถาม DNS server\n   3. DNS server ตอบ IP กลับมา → เก็บลง cache ไว้ใช้ครั้งหน้า\n\n📗 จำไว้สอบ: DNS ใช้ UDP/TCP พอร์ต 53 | ปิดบน IOS ด้วย `no ip domain-lookup`',
  },
  {
    id: 209,
    kind: 'single',
    prompt:
      'After installing a new Cisco ISE server, which task must the engineer perform on the Cisco WLC to connect wireless clients on a specific VLAN based on their credentials?',
    options: [
      { key: 'A', text: 'Enable the allow AAA Override' },
      { key: 'B', text: 'Enable the Event-Driven RRM' },
      { key: 'C', text: 'Disable the LAG Mode on Next Reboot' },
      { key: 'D', text: 'Enable the Authorized MIC APs against auth-list or AAA' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ปัญหาคือ: WLAN หนึ่งวงถูกผูกกับ VLAN เดียวตายตัว\n   แต่โจทย์ต้องการให้ แต่ละผู้ใช้ไปคนละ VLAN ตาม credentials ของตัวเอง\n   (เช่น พนักงาน → VLAN 10 | แขก → VLAN 20 | ผู้บริหาร → VLAN 30 ทั้งที่ต่อ SSID เดียวกัน)\n\n🔑 ทางแก้ = เปิด AAA Override บน WLC\n\n   [Client login] → [WLC] → [ISE/RADIUS ตรวจ credentials]\n                       ↑              ↓\n                       └── ส่งกลับมาว่า "คนนี้ให้ VLAN 30, ใช้ ACL_MGR"\n                              (RADIUS attribute)\n   • ถ้า ปิด AAA Override → WLC เมิน ค่าที่ ISE ส่งมา ใช้ VLAN ที่ตั้งไว้บน WLAN เท่านั้น\n   • ⭐ ถ้า เปิด AAA Override → WLC ยอมให้ค่าจาก ISE ชนะ ค่าที่ตั้งบน WLAN\n     → client ถูกวางลง VLAN ตามที่ ISE สั่ง = ได้ตามโจทย์\n\n✅ ทำไม A ถูก: AAA Override เป็นสวิตช์ที่อนุญาตให้ค่าที่ RADIUS/ISE ส่งกลับมา (VLAN, ACL, QoS) เขียนทับค่าที่ตั้งไว้บน WLAN → เป็นเงื่อนไขจำเป็นเพื่อจัด VLAN ตาม credentials\n\n❌ ทำไมข้ออื่นผิด:\nB. Event-Driven RRM → RRM คือระบบปรับ คลื่นวิทยุ อัตโนมัติ (กำลังส่ง/ช่องสัญญาณ) โดย Event-Driven RRM จะปรับทันทีเมื่อ AP ล่ม — ไม่เกี่ยวกับ VLAN หรือ authentication เลย\nC. Disable LAG Mode → LAG คือการรวมพอร์ตกายภาพของ WLC เป็นลิงก์เดียว เป็นเรื่องของแบนด์วิดท์/redundancy ไม่ใช่การจัด VLAN ตามผู้ใช้\nD. Authorize MIC APs against auth-list/AAA → เป็นการตรวจสอบว่า AP ตัวไหนได้รับอนุญาตให้ join WLC (ป้องกัน rogue AP) — เป็นเรื่องของ AP ไม่ใช่ client\n\n📗 จำไว้สอบ: AAA Override = ให้ RADIUS สั่ง VLAN/ACL รายผู้ใช้ได้ | จำเป็นเสมอเมื่อทำ dynamic VLAN assignment กับ ISE',
  },
  {
    id: 210,
    kind: 'single',
    prompt: 'A network analyst must configure the date and time on a router using EXEC mode. Which command should be used?',
    options: [
      { key: 'A', text: 'clock timezone' },
      { key: 'B', text: 'clock summer-time recurring' },
      { key: 'C', text: 'clock summer-time date' },
      { key: 'D', text: 'clock set' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำสั่ง clock อยู่คนละโหมดกัน! อ่านโจทย์ให้ดีว่าถามโหมดไหน\n\n   คำสั่ง                            โหมด                    ทำอะไร\n   -------------------------------   ---------------------   ------------------------\n   ⭐ clock set 14:30:00 14 Jul 2026  Privileged EXEC     ตั้งวัน-เวลาปัจจุบันเลย\n      (R1# — มีเครื่องหมาย # ท้าย)                            (ค่านี้ไม่ได้เก็บใน config!)\n\n   clock timezone ICT +7             Global config (R1(config)#)  ตั้งเขตเวลา\n   clock summer-time ... recurring   Global config                ตั้ง daylight saving\n\n🔍 โจทย์ระบุชัด: "using EXEC mode" → ต้องเป็นคำสั่งที่พิมพ์ที่ R1# ไม่ใช่ R1(config)#\n   → มีแค่ `clock set` ตัวเดียวที่อยู่ในโหมด EXEC\n\n✅ ทำไม D ถูก: `clock set hh:mm:ss <วัน> <เดือน> <ปี>` เป็นคำสั่ง privileged EXEC ตัวเดียวที่ตั้งวัน-เวลาปัจจุบันของเราเตอร์โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. clock timezone → อยู่ใน global config mode และตั้งแค่ "เขตเวลา" (offset จาก UTC) ไม่ได้ตั้งเวลาจริง\nB. clock summer-time recurring → global config เช่นกัน ตั้งเวลาออมแสงแบบทำซ้ำทุกปี\nC. clock summer-time date → global config ตั้งเวลาออมแสงตามวันที่ระบุ\n\n⚠️ ข้อควรรู้: เวลาที่ตั้งด้วย `clock set` จะ หายเมื่อ reload (ถ้าไม่มีนาฬิกาฮาร์ดแวร์) → ในงานจริงควรใช้ NTP (`ntp server <ip>`) เพื่อซิงก์เวลาอัตโนมัติ\n\n📗 จำไว้สอบ: เวลาที่ถูกต้องสำคัญมากสำหรับ syslog timestamp, certificate และ Kerberos → NTP จึงเป็นสิ่งจำเป็น ไม่ใช่ของเล่น',
  },
  {
    id: 211,
    kind: 'single',
    prompt:
      'A network administrator configures VLANs 2, 3, and 4. Some ports are assigned to the new VLANs with unused ports remaining. Which action should be taken for the unused ports?',
    options: [
      { key: 'A', text: 'configure ports in the native VLAN' },
      { key: 'B', text: 'configure ports in a black hole VLAN' },
      { key: 'C', text: 'configure ports in a nondefault native VLAN' },
      { key: 'D', text: 'configure ports as access ports' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — พอร์ตที่ "ไม่ได้ใช้" คือช่องโหว่ที่คนมองข้ามบ่อยที่สุด\n\n   ☠️ ถ้าปล่อยพอร์ตว่างไว้เฉย ๆ (ยัง active และอยู่ VLAN 1 ตาม default):\n      ใครก็ตามที่เดินเข้ามาในออฟฟิศ เสียบสาย LAN → ได้เข้าเครือข่ายทันที\n      แถม VLAN 1 มักเป็น management VLAN → เข้าถึงอุปกรณ์เครือข่ายได้ด้วย!\n\n🛡️ Best practice ของ Cisco สำหรับพอร์ตที่ไม่ใช้ (ทำครบ 2 ขั้น):\n   1. ⭐ ย้ายไป black hole VLAN (หรือเรียก parking-lot VLAN)\n      = VLAN ร้างที่ไม่มีใครใช้ ไม่มี SVI ไม่มีเส้นทางออกไปไหนเลย\n      → ถึงมีคนแอบเสียบ ก็ติดอยู่ใน VLAN ที่ไปไหนไม่ได้\n   2. สั่ง `shutdown` ปิดพอร์ตไปเลย (ปลอดภัยที่สุด)\n\n✅ ทำไม B ถูก: การย้ายพอร์ตที่ไม่ใช้ไปยัง black hole VLAN คือมาตรการมาตรฐานที่ตัดความเสี่ยงจากการเสียบสายโดยไม่ได้รับอนุญาต\n\n❌ ทำไมข้ออื่นผิด:\nA. ตั้งพอร์ตไว้ใน native VLAN → อันตรายมาก! native VLAN (default = VLAN 1) เป็นเป้าหมายของ VLAN hopping และมักเป็น management VLAN ด้วย\nC. ตั้งใน nondefault native VLAN → ดีกว่า VLAN 1 นิดหน่อย แต่ native VLAN ยังเป็น VLAN ที่ทราฟฟิกวิ่งผ่าน trunk แบบ untagged → ยังเสี่ยงอยู่ ไม่ใช่ที่สำหรับพอร์ตร้าง\nD. ตั้งเป็น access port → เป็นแค่การกำหนดโหมด แต่ ไม่ได้บอกว่าให้อยู่ VLAN ไหน และไม่ได้ปิดพอร์ต → ไม่ได้เพิ่มความปลอดภัยอะไรเลย\n\n📗 จำไว้สอบ: พอร์ตว่าง = shutdown + ย้ายไป black hole VLAN | อย่าปล่อยไว้ใน VLAN 1 เด็ดขาด',
  },
  {
    id: 212,
    kind: 'single',
    image: q212,
    prompt:
      'Refer to the exhibit. Router R4 is dynamically learning the path to the server. R4 connects to R1 via OSPF Area 20, to R2 via BGP, and to R3 via EIGRP 777. Which path is installed in the routing table of R4?',
    options: [
      { key: 'A', text: 'the path through R1, because the OSPF administrative distance is 110' },
      { key: 'B', text: 'the path through R2, because the iBGP administrative distance is 200' },
      { key: 'C', text: 'the path through R2, because the eBGP administrative distance is 20' },
      { key: 'D', text: 'the path through R3, because the EIGRP administrative distance is lower than OSPF and BGP' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เมื่อ router เรียนรู้เส้นทางไปปลายทางเดียวกันจาก หลายโปรโตคอล\n   → มันจะเลือกโปรโตคอลที่มี Administrative Distance (AD) ต่ำที่สุด ใส่ลง routing table\n   → AD = "ระดับความน่าเชื่อถือ" ยิ่งต่ำ ยิ่งเชื่อถือได้มาก\n\n📋 ตาราง AD ที่ต้องท่องให้ขึ้นใจ (ออกสอบแทบทุกชุด):\n\n   เส้นทาง              AD\n   ------------------   ----\n   Connected            0\n   Static               1\n   ⭐ eBGP (external)   20   ← ต่ำที่สุดในบรรดา dynamic protocol!\n   EIGRP (internal)     90\n   OSPF                 110\n   IS-IS                115\n   RIP                  120\n   EIGRP (external)     170\n   iBGP (internal)      200\n\n🔍 วิเคราะห์โจทย์:\n   R4 อยู่ AS 65513 | R2 อยู่ AS 65512  → คนละ AS = eBGP (ไม่ใช่ iBGP!)\n   • เส้นทางผ่าน R1 → OSPF  → AD = 110\n   • เส้นทางผ่าน R2 → eBGP  → AD = 20 ⭐ ชนะ!\n   • เส้นทางผ่าน R3 → EIGRP → AD = 90\n\n   → 20 < 90 < 110 → eBGP ชนะขาด → R4 ติดตั้งเส้นทางผ่าน R2\n\n✅ ทำไม C ถูก: eBGP มี AD = 20 ต่ำที่สุด → เส้นทางผ่าน R2 ถูกเลือกเข้า routing table\n\n❌ ทำไมข้ออื่นผิด:\nA. ผ่าน R1 เพราะ OSPF AD = 110 → เลข AD ถูก แต่ 110 สูงที่สุด ในสามตัว → แพ้\nB. ผ่าน R2 เพราะ iBGP AD = 200 → เลือกเราเตอร์ถูก แต่เหตุผลผิด! R2 กับ R4 อยู่คนละ AS จึงเป็น eBGP (20) ไม่ใช่ iBGP (200) — ถ้าเป็น iBGP จริง AD 200 จะแพ้ทุกตัวด้วยซ้ำ\nD. ผ่าน R3 เพราะ EIGRP AD ต่ำกว่า OSPF และ BGP → EIGRP (90) ต่ำกว่า OSPF (110) จริง แต่ ไม่ต่ำกว่า eBGP (20) → ผิด\n\n⚠️ กับดักหลักของข้อนี้: ต้องดู AS number ให้ออกว่าเป็น eBGP (20) หรือ iBGP (200) — ต่างกันลิบลับ!\n   AS ต่างกัน = eBGP (น่าเชื่อถือมาก) | AS เดียวกัน = iBGP (AD สูงมาก)\n\n📗 จำไว้สอบ: ถ้า AD เท่ากันจึงค่อยไปเทียบ metric ต่อ | AD ตัดสินก่อนเสมอ',
  },
  {
    id: 213,
    kind: 'single',
    prompt: 'Why was the RFC 1918 address space defined?',
    options: [
      { key: 'A', text: 'conserve public IPv4 addressing' },
      { key: 'B', text: 'preserve public IPv6 address space' },
      { key: 'C', text: 'reduce instances of overlapping IP addresses' },
      { key: 'D', text: 'support the NAT protocol' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ทำไมต้องมี RFC 1918 (private IP)?\n\n   ปัญหา: IPv4 มีแค่ 32 บิต = ที่อยู่ทั้งโลกมีแค่ ~4,300 ล้านเลข\n          แต่มีอุปกรณ์ต่อเน็ตหลายหมื่นล้านเครื่อง → ไม่พอแน่นอน!\n          (เรียกว่า IPv4 address exhaustion)\n\n   ⭐ ทางแก้: กันช่วง IP บางส่วนไว้ให้ทุกองค์กร "ใช้ซ้ำกันได้" ภายในเครือข่ายตัวเอง\n      10.0.0.0/8      (10.0.0.0 – 10.255.255.255)\n      172.16.0.0/12   (172.16.0.0 – 172.31.255.255)\n      192.168.0.0/16  (192.168.0.0 – 192.168.255.255)\n\n   → บริษัท A ใช้ 192.168.1.0/24 | บริษัท B ก็ใช้ 192.168.1.0/24 ได้เหมือนกัน ไม่ชนกัน\n     เพราะ IP พวกนี้ไม่ถูก route บนอินเทอร์เน็ต (ISP drop ทิ้ง)\n   → เวลาออกเน็ต ใช้ NAT/PAT แปลงเป็น public IP ตัวเดียวร่วมกันหลายร้อยเครื่อง\n   → ผลลัพธ์: ประหยัด public IPv4 ได้มหาศาล ✔ นี่คือเหตุผลที่ RFC 1918 ถือกำเนิด\n\n✅ ทำไม A ถูก: วัตถุประสงค์หลักที่ RFC 1918 ถูกนิยามขึ้นมาคือ อนุรักษ์/ประหยัด public IPv4 address ที่กำลังจะหมด\n\n❌ ทำไมข้ออื่นผิด:\nB. ประหยัดพื้นที่ IPv6 → RFC 1918 เป็นเรื่องของ IPv4 ล้วน ๆ (แถม IPv6 มี 128 บิต = มากมายมหาศาล ไม่มีปัญหาขาดแคลนให้ต้องประหยัด)\nC. ลดกรณี IP ซ้อนทับกัน → ตรงกันข้ามเลย! private IP ถูกออกแบบให้ ใช้ซ้ำกันได้ ทุกองค์กร → ที่จริงมันทำให้ IP ซ้อนทับกันเยอะขึ้นด้วยซ้ำ (ปัญหาคลาสสิกตอนสองบริษัทควบรวมกันแล้วใช้ 192.168.1.0/24 ทั้งคู่)\nD. เพื่อรองรับโปรโตคอล NAT → สลับเหตุกับผล! NAT เกิดขึ้นมาเพื่อ *แก้ปัญหา* ให้ private IP ออกเน็ตได้ ไม่ใช่ว่า private IP ถูกสร้างมาเพื่อรองรับ NAT\n\n📗 จำไว้สอบ: RFC 1918 = ประหยัด public IPv4 | NAT = เครื่องมือที่ทำให้มันใช้งานจริงได้',
  },
  {
    id: 214,
    kind: 'single',
    prompt: 'Which HTTP status code is returned after a successful REST API request?',
    options: [
      { key: 'A', text: '200' },
      { key: 'B', text: '301' },
      { key: 'C', text: '404' },
      { key: 'D', text: '500' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — HTTP status code แบ่งเป็นกลุ่มตามหลักร้อย (จำหลักแรกพอ!):\n\n   กลุ่ม   ความหมาย            ตัวอย่างที่ต้องรู้\n   -----   ------------------  ------------------------------------------\n   1xx     ข้อมูล (info)        100 Continue\n   ⭐ 2xx  สำเร็จ!          200 OK, 201 Created, 204 No Content\n   3xx     เปลี่ยนเส้นทาง       301 Moved Permanently, 302 Found\n   4xx     ผิดที่ client    400 Bad Request, 401 Unauthorized,\n                                403 Forbidden, 404 Not Found\n   5xx     ผิดที่ server    500 Internal Server Error, 503 Unavailable\n\n💡 เคล็ดจำ: 4xx = คุณ (client) ทำผิด | 5xx = เขา (server) ทำผิด\n\n✅ ทำไม A ถูก: 200 OK คือรหัสมาตรฐานที่ REST API ตอบกลับเมื่อคำขอสำเร็จ (เช่น GET ดึงข้อมูลได้สำเร็จ)\n\n❌ ทำไมข้ออื่นผิด:\nB. 301 Moved Permanently → resource ถูกย้ายไปที่อยู่ใหม่ถาวร (redirect) ไม่ใช่ "สำเร็จ" ตามที่ขอ\nC. 404 Not Found → หา resource ที่ขอไม่เจอ (ผิดที่ฝั่ง client — พิมพ์ URL ผิด)\nD. 500 Internal Server Error → เซิร์ฟเวอร์พังเอง ประมวลผลไม่ได้\n\n💡 ในบริบท REST API ของ Cisco:\n   • GET สำเร็จ → 200 OK\n   • POST สร้าง object ใหม่สำเร็จ → 201 Created\n   • DELETE สำเร็จแต่ไม่มีข้อมูลตอบกลับ → 204 No Content\n   • ลืมใส่ token → 401 Unauthorized\n\n📗 จำไว้สอบ: 2xx = สำเร็จ | 4xx = client ผิด | 5xx = server ผิด — จำแค่นี้ตอบได้เกือบทุกข้อ',
  },
  {
    id: 215,
    kind: 'single',
    image: q215,
    prompt:
      'Refer to the exhibit. R5 is the current DR and R4 is the BDR. Their interfaces are flapping, so the engineer wants OSPF to elect a different DR and BDR. Which set of configurations must be implemented?',
    options: [
      { key: 'A', text: 'R4 ip ospf priority 20 / R5 ip ospf priority 10' },
      { key: 'B', text: 'R2 ip ospf priority 259 / R3 ip ospf priority 256' },
      { key: 'C', text: 'R5 ip ospf priority 120 / R4 ip ospf priority 110' },
      { key: 'D', text: 'R3 ip ospf priority 255 / R2 ip ospf priority 240' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — การเลือก DR/BDR ใน OSPF (บนเครือข่าย multi-access เช่น Ethernet):\n\n   ลำดับการตัดสิน:\n   1. ⭐ OSPF priority สูงสุดชนะ (ค่าเริ่มต้น = 1, ช่วงที่ตั้งได้ = 0–255)\n      → priority = 0 หมายถึง "ไม่ขอลงสมัครเลย" (จะไม่มีวันเป็น DR/BDR)\n   2. ถ้า priority เท่ากัน → ตัดสินด้วย Router ID สูงสุด\n\n   • DR  = ตัวที่คะแนนสูงสุด | BDR = ตัวที่คะแนนรองลงมา | ที่เหลือ = DROTHER\n\n🔍 โจทย์ต้องการอะไร:\n   R5 = DR ปัจจุบัน, R4 = BDR ปัจจุบัน แต่ อินเทอร์เฟซของทั้งคู่ flapping (เดี๋ยว up เดี๋ยว down)\n   → ต้องการให้ ตัวอื่น (R2/R3) ขึ้นมาเป็น DR/BDR แทน\n   → วิธี: ตั้ง priority ของ R2 และ R3 ให้ สูงกว่า R4/R5\n\n🔢 ตรวจตัวเลือกทีละข้อ:\n   A. R4=20, R5=10  → ยังตั้งให้ R4/R5 เป็น DR/BDR อยู่ดี! (ตัวที่ flapping) ✘\n   B. R2=259, R3=256 → ⚠️ เกินช่วง 0–255! IOS จะไม่ยอมรับคำสั่ง ✘\n   C. R5=120, R4=110 → ยังเป็น R5/R4 เหมือนเดิม ไม่แก้ปัญหาเลย ✘\n   ⭐ D. R3=255, R2=240 → R3 (255) = DR, R2 (240) = BDR ✔ ทั้งคู่สูงกว่า R4/R5 และอยู่ในช่วงที่ถูกต้อง\n\n✅ ทำไม D ถูก: ตั้ง priority ให้ R3 = 255 (สูงสุด → เป็น DR) และ R2 = 240 (รองลงมา → เป็น BDR) ทั้งสองค่าอยู่ในช่วง 0–255 ที่ถูกต้อง และย้าย DR/BDR ออกจาก R4/R5 ที่มีปัญหาสำเร็จ\n\n⚠️ ข้อควรรู้สำคัญ: การเปลี่ยน priority ไม่ทำให้ DR/BDR เปลี่ยนทันที! OSPF ไม่มี preemption\n   → ต้อง `clear ip ospf process` หรือรอให้ adjacency ล่มก่อน จึงจะเลือกใหม่\n\n📗 จำไว้สอบ: OSPF priority = 0–255 (default 1) | priority 0 = ไม่ร่วมเลือกตั้ง | เท่ากันแล้วดู Router ID สูงสุด',
  },
  {
    id: 216,
    kind: 'single',
    prompt: 'What are network endpoints?',
    options: [
      { key: 'A', text: 'act as routers to connect a user to the service provider network' },
      { key: 'B', text: 'a threat to the network if they are compromised' },
      { key: 'C', text: 'support inter-VLAN connectivity' },
      { key: 'D', text: 'enforce policies for campus-wide traffic going to the internet' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Endpoint = อุปกรณ์ "ปลายทาง" ที่ผู้ใช้ใช้งาน ไม่ใช่อุปกรณ์เครือข่าย\n\n   ✔ เป็น endpoint : PC, laptop, สมาร์ตโฟน, แท็บเล็ต, เครื่องพิมพ์, IP phone,\n                     กล้อง IP, อุปกรณ์ IoT, เซิร์ฟเวอร์\n   ✘ ไม่ใช่ endpoint : router, switch, firewall, WLC (พวกนี้คือ network infrastructure)\n\n🔑 ทำไม endpoint ถึงเป็น "ภัยคุกคาม" เมื่อถูกเจาะ:\n   • endpoint อยู่ ในมือผู้ใช้ → เสี่ยงโดนคลิกลิงก์ phishing, เสียบ USB ที่มีมัลแวร์\n   • เป็น จุดเริ่มต้น ที่ผู้โจมตีชอบใช้ที่สุด (attack surface กว้างที่สุด)\n   • เมื่อยึด endpoint ได้แล้ว → ใช้มันเป็นฐาน "เดินต่อ" เข้าไปในเครือข่าย (lateral movement)\n   • ถูกยึดไปเป็นส่วนหนึ่งของ botnet → ใช้โจมตี DDoS ต่อได้\n   → ⭐ ด้วยเหตุนี้จึงต้องมี endpoint protection: antivirus, EDR, NAC (802.1X), patching\n\n✅ ทำไม B ถูก: endpoint เป็น "ภัยคุกคามต่อเครือข่ายหากถูกเจาะ (compromised)" — นี่คือมุมมองด้านความปลอดภัยที่ CCNA เน้น เพราะ endpoint คือจุดอ่อนที่สุดของเครือข่าย\n\n❌ ทำไมข้ออื่นผิด:\nA. ทำหน้าที่เป็น router เชื่อมผู้ใช้เข้ากับเครือข่ายผู้ให้บริการ → นั่นคือหน้าที่ของ router / CPE ไม่ใช่ endpoint (endpoint เป็นผู้ *ใช้* เครือข่าย ไม่ใช่ผู้ *สร้าง* เครือข่าย)\nC. รองรับการเชื่อมต่อระหว่าง VLAN → inter-VLAN routing เป็นงานของ router หรือ L3 switch\nD. บังคับใช้นโยบายกับทราฟฟิกทั้งแคมปัสที่ออกอินเทอร์เน็ต → เป็นงานของ firewall / distribution layer\n\n💡 สังเกต: ตัวลวง A, C, D ล้วนบรรยาย "หน้าที่ของอุปกรณ์เครือข่าย" ทั้งหมด — endpoint ไม่ได้ทำอะไรพวกนั้นเลย\n\n📗 จำไว้สอบ: Endpoint = ปลายทางที่คนใช้งาน = จุดอ่อนที่สุด → NAC/802.1X มีไว้เพื่อคุมมันโดยเฉพาะ',
  },
  {
    id: 217,
    kind: 'multi',
    prompt: 'Which two components are needed to create an Ansible script that configures a VLAN on a switch? (Choose two)',
    options: [
      { key: 'A', text: 'cookbook' },
      { key: 'B', text: 'task' },
      { key: 'C', text: 'playbook' },
      { key: 'D', text: 'model' },
      { key: 'E', text: 'recipe' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — ศัพท์เฉพาะของเครื่องมือ automation แต่ละตัว (ห้ามจำสลับ!):\n\n   เครื่องมือ   ⭐ Ansible        Puppet       Chef\n   ---------   ---------------   ----------   ------------------\n   ไฟล์หลัก     Playbook      Manifest     Cookbook\n   หน่วยย่อย    Task / Play    Class        Recipe\n   ภาษา         YAML              Puppet DSL   Ruby\n   สถาปัตยกรรม  Agentless!    ต้องมี agent  ต้องมี agent\n   ใช้ push/pull  Push (SSH)      Pull         Pull\n\n🔑 โครงสร้างสคริปต์ Ansible จริง:\n\n   ---\n   - name: Configure VLAN            ← นี่คือ Play\n     hosts: switches\n     ⭐ tasks:                        ← รวมกันทั้งหมดคือ Playbook (ไฟล์ YAML นี้)\n       - name: Create VLAN 10        ← นี่คือ Task หนึ่งอัน\n         ios_vlan:\n           vlan_id: 10\n\n✅ ทำไม B, C ถูก: การเขียนสคริปต์ Ansible ต้องมี playbook (ไฟล์ YAML ที่เป็นตัวสคริปต์) และภายในต้องมี task (คำสั่งแต่ละอย่างที่จะให้ทำ เช่น สร้าง VLAN) — ขาดอย่างใดอย่างหนึ่งไม่ได้\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C,D — แต่ "model" ไม่ใช่องค์ประกอบของ Ansible เลย (YANG model เป็นเรื่องของ NETCONF/RESTCONF คนละเครื่องมือ) → คำตอบที่ถูกต้องคือ B,C\n\n❌ ทำไมข้ออื่นผิด:\nA. cookbook → ศัพท์ของ Chef ไม่ใช่ Ansible\nE. recipe → ศัพท์ของ Chef เช่นกัน\nD. model → ไม่ใช่ศัพท์ของ Ansible (เป็นตัวลวงที่ฟังดูเทคนิค)\n\n💡 จุดขายของ Ansible ที่ออกสอบบ่อย: Agentless — ไม่ต้องติดตั้งอะไรบนอุปกรณ์ปลายทาง แค่ใช้ SSH ก็สั่งงานได้เลย (ต่างจาก Puppet/Chef ที่ต้องลง agent)\n\n📗 จำไว้สอบ: Ansible = Playbook + Task + YAML + Agentless + SSH | Chef = Cookbook + Recipe',
  },
  {
    id: 218,
    kind: 'drag',
    image: q218,
    prompt:
      'Drag and drop the statements about networking from the left into the corresponding networking types on the right. Not all statements are used.',
    categories: [
      {
        name: 'Controller-Based Networking',
        items: ['This type deploys a consistent configuration across multiple devices', 'Southbound APIs are used to apply configurations'],
      },
      {
        name: 'Traditional Networking',
        items: ['A distributed control plane is needed', 'This type requires a distributed management plane'],
      },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['Northbound APIs interact with end devices'] },
    ],
    explanation:
      '📘 แนวคิด — คำว่า "distributed (กระจาย)" กับ "centralized (รวมศูนย์)" คือกุญแจของข้อนี้\n\n🔹 Traditional Networking (แบบดั้งเดิม)\n   • ทุกอุปกรณ์มี สมองของตัวเอง → control plane และ management plane อยู่บนแต่ละตัว\n   • ⭐ จึงเป็น "distributed control plane" และ "distributed management plane"\n   • ต้อง SSH เข้าไปตั้งค่าทีละตัว → config เพี้ยนกันได้ง่าย, ขยายยาก\n\n🔹 Controller-Based Networking (SDN)\n   • ดึง control plane ออกมา รวมศูนย์ ไว้ที่ controller ตัวเดียว\n   • ⭐ deploy config ที่สอดคล้องกัน ลงหลายอุปกรณ์พร้อมกันได้ (ไม่มี config drift)\n   • ⭐ ใช้ Southbound API (OpenFlow/NETCONF) push config ลงไปยังอุปกรณ์\n   • ใช้ Northbound API (REST) ให้ แอปพลิเคชัน เรียกใช้งาน controller\n\n✅ การจับคู่ที่ถูกต้อง:\n   Controller-Based → "deploy config ที่สอดคล้องกันไปหลายอุปกรณ์" + "ใช้ Southbound API สั่งค่า"\n   Traditional      → "ต้องมี distributed control plane" + "ต้องมี distributed management plane"\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับ สลับกลุ่มผิด — "distributed control plane" ถูกจัดไปอยู่ฝั่ง Controller-Based ซึ่งขัดแย้งกับนิยามของ SDN โดยตรง (SDN = รวมศูนย์ ไม่ใช่กระจาย!) → ที่ถูกต้องคือมันเป็นของ Traditional\n\n❌ ประโยคที่ไม่ถูกใช้ (ตัวลวง):\n"Northbound APIs interact with end devices" → ผิด! Northbound API คุยกับ แอปพลิเคชัน (ขึ้นข้างบน) ส่วนตัวที่คุยกับอุปกรณ์คือ Southbound API → ประโยคนี้สลับทิศทางจึงไม่ตรงกับกลุ่มไหนเลย\n\n📗 จำไว้สอบ: SDN = Centralized control plane | Traditional = Distributed control plane — จำคำนี้คำเดียวตอบได้ครึ่งข้อ',
  },
  {
    id: 219,
    kind: 'multi',
    prompt: 'Which two events occur automatically when a device is added to Cisco DNA Center? (Choose two)',
    options: [
      { key: 'A', text: 'The device is assigned to the Global site' },
      { key: 'B', text: 'The device is placed into the Unmanaged state' },
      { key: 'C', text: 'The device is placed into the Provisioned state' },
      { key: 'D', text: 'The device is placed into the Managed state' },
      { key: 'E', text: 'The device is assigned to the Local site' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — เมื่อเพิ่ม (หรือ discover) อุปกรณ์เข้า Cisco DNA Center จะเกิด 2 อย่างอัตโนมัติ:\n\n   1. ⭐ อุปกรณ์ถูกกำหนดให้อยู่ที่ Global site โดยอัตโนมัติ\n      → Global คือไซต์ราก (root) ที่มีอยู่ตั้งแต่แรก\n      → ผู้ดูแลค่อยมาย้ายเข้าไซต์ย่อยที่ถูกต้องทีหลัง (Area → Building → Floor)\n\n   2. ⭐ อุปกรณ์เข้าสู่สถานะ Managed (หลัง DNA Center เข้าถึงและเก็บข้อมูลสำเร็จ)\n      → หมายถึง DNA Center สื่อสารกับอุปกรณ์ได้ และพร้อมบริหารจัดการมันแล้ว\n\n📋 สถานะของอุปกรณ์ใน DNA Center (Inventory):\n   • Managed      → ติดต่อได้ปกติ พร้อมใช้งาน ✔\n   • Unreachable      → ติดต่อไม่ได้ (credential ผิด / เครือข่ายมีปัญหา)\n   • Provisioned  → ผ่านการ push config/policy จาก DNA Center แล้ว\n     ⚠️ สถานะนี้ ไม่เกิดอัตโนมัติ — ต้องให้ผู้ดูแลสั่ง provision เอง!\n\n✅ ทำไม A, D ถูก: ทั้งสองเป็นสิ่งที่เกิดขึ้น โดยอัตโนมัติ ทันทีที่เพิ่มอุปกรณ์ — ถูกใส่ไว้ที่ Global site (A) และเข้าสู่ Managed state (D)\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A,B — แต่ B บอกว่าเข้าสู่ Unmanaged state ซึ่งผิด อุปกรณ์ที่เพิ่มสำเร็จจะเข้าสู่ Managed state (ไม่งั้นจะเพิ่มเข้ามาทำไม?) → คำตอบที่ถูกต้องคือ A,D\n\n❌ ทำไมข้ออื่นผิด:\nB. เข้าสู่ Unmanaged state → ผิด จุดประสงค์ของการเพิ่มอุปกรณ์คือให้ DNA Center จัดการได้ จึงเข้าสู่ Managed\nC. เข้าสู่ Provisioned state → ไม่ใช่อัตโนมัติ ต้องรอให้ผู้ดูแลสั่ง provision (push config/policy) ก่อน\nE. ถูกกำหนดให้อยู่ Local site → ไม่มีไซต์ชื่อ "Local" ใน DNA Center (ตัวลวง) ไซต์รากชื่อ Global\n\n📗 จำไว้สอบ: ลำดับชั้นไซต์ของ DNA Center = Global → Area → Building → Floor',
  },
  {
    id: 220,
    kind: 'single',
    prompt: 'Which virtual MAC address is used by VRRP group 1?',
    options: [
      { key: 'A', text: '0050.0c05.ad81' },
      { key: 'B', text: '0007.c061.bc01' },
      { key: 'C', text: '0000.5E00.0101' },
      { key: 'D', text: '0500.3976.6401' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Virtual MAC ของ FHRP แต่ละตัวมีรูปแบบตายตัว ต้องท่อง!\n\n   โปรโตคอล    รูปแบบ Virtual MAC        XX คืออะไร\n   ---------   -----------------------   -----------------------------\n   HSRP v1     0000.0C07.ACXX        group number (ฐานสิบหก)\n   HSRP v2     0000.0C9F.FXXX        group number (3 หลัก)\n   ⭐ VRRP     0000.5E00.01XX        VRID (ฐานสิบหก)\n   GLBP        0007.B400.XXYY        group + AVF number\n\n🔍 คำนวณสำหรับข้อนี้:\n   VRRP group 1 → VRID = 1 → แปลงเป็นฐานสิบหก = 01\n   เติมลงในรูปแบบ: 0000.5E00.01 + 01 = 0000.5E00.0101 ✔\n\n   💡 ถ้าโจทย์เปลี่ยนเป็น group 10 → 10 ฐานสิบ = 0A ฐานสิบหก → 0000.5E00.010A\n      ถ้า group 255 → FF → 0000.5E00.01FF\n\n✅ ทำไม C ถูก: 0000.5E00.0101 ตรงกับรูปแบบ VRRP (0000.5E00.01XX) โดย XX = 01 = group 1\n\n❌ ทำไมข้ออื่นผิด:\nA. 0050.0c05.ad81 → ไม่ตรงกับรูปแบบ FHRP ใด ๆ เลย (เลขมั่ว)\nB. 0007.c061.bc01 → ขึ้นต้นด้วย 0007 ซึ่งใกล้เคียงกับรูปแบบของ GLBP (0007.B400.xxxx) แต่ก็ยังไม่ตรง — และไม่ใช่ VRRP แน่นอน\nD. 0500.3976.6401 → ไม่ตรงกับรูปแบบใดเลย (ตัวลวง)\n\n💡 วิธีตอบเร็ว: มองหาคำนำหน้า 0000.5E00.01 ก่อนเลย เจอปุ๊บตอบปั๊บ ไม่ต้องดูตัวเลือกอื่น\n   (00-00-5E เป็นรหัส OUI ที่ IANA จองไว้สำหรับ VRRP โดยเฉพาะ)\n\n📗 จำไว้สอบ: ทำไมต้องมี virtual MAC? เพื่อให้ตอน failover ทั้ง IP และ MAC ย้ายตามกันไป → PC ไม่ต้องทำ ARP ใหม่ = สลับได้เนียน',
  },
  {
    id: 221,
    kind: 'multi',
    image: q221,
    prompt:
      'Refer to the exhibit. Which two commands on R1 fulfill these requirements? (Choose two) Packets toward the entire network 2001:db8:23::/64 must be forwarded through R2. Packets toward host 2001:db8:23::14 preferably must be forwarded through R3.',
    options: [
      { key: 'A', text: 'ipv6 route 2001:db8:23::/64 fd00:12::2' },
      { key: 'B', text: 'ipv6 route 2001:db8:23::14/128 fd00:13::3' },
      { key: 'C', text: 'ipv6 route 2001:db8:23::14/128 fd00:12::2' },
      { key: 'D', text: 'ipv6 route 2001:db8:23::/64 fd00:12::2' },
      { key: 'E', text: 'ipv6 route 2001:db8:23::14/128 fd00:12::2 200' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — Longest Prefix Match (LPM): กฎเหล็กในการเลือกเส้นทาง\n\n   เมื่อมีหลาย route ที่ครอบคลุมปลายทางเดียวกัน → router เลือกอันที่ prefix ยาวที่สุด เสมอ\n   → prefix ยาว = เจาะจงกว่า = ชนะ\n   → ⭐ LPM ตัดสินก่อน AD และก่อน metric เสมอ! (นี่คือจุดที่คนพลาดบ่อย)\n\n   /128 (host route) > /64 (network route) → /128 ชนะขาด\n\n🔍 โจทย์ต้องการ 2 อย่างพร้อมกัน:\n   1. ทราฟฟิกไปทั้งเครือข่าย 2001:db8:23::/64 → ผ่าน R2\n   2. ทราฟฟิกไปโฮสต์ 2001:db8:23::14 โดยเฉพาะ → ผ่าน R3 (แม้จะอยู่ใน /64 ข้างบนก็ตาม!)\n\n🔧 วิธีทำ — ใช้ LPM เป็นตัวช่วย:\n   route ที่ 1: ipv6 route 2001:db8:23::/64 fd00:12::2      → ไป R2 ✔ (ตัวเลือก D)\n   route ที่ 2: ipv6 route 2001:db8:23::14/128 fd00:13::3   → ไป R3 ✔ (ตัวเลือก B)\n\n   ผลลัพธ์:\n   • แพ็กเก็ตไป ::14  → ตรงกับทั้ง /64 และ /128 → /128 ยาวกว่า ชนะ → ไป R3 ✔\n   • แพ็กเก็ตไป ::20  → ตรงกับ /64 เท่านั้น → ไป R2 ✔\n   → ได้ตามโจทย์ครบทั้งสองข้อ\n\n✅ ทำไม B, D ถูก: D วาง route ทั่วไป (/64) ไปทาง R2 และ B วาง host route (/128) ไปทาง R3 → LPM ทำให้ ::14 วิ่งผ่าน R3 ส่วนที่เหลือวิ่งผ่าน R2 พอดี\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D,E — แต่ E คือ `ipv6 route 2001:db8:23::14/128 fd00:12::2 200` ซึ่งชี้ host ::14 ไปที่ R2 ไม่ใช่ R3! ขัดกับข้อกำหนดข้อที่ 2 โดยตรง (แถมยังใส่ AD 200 ทำให้เป็น floating static ที่ไม่ถูกใช้ด้วยซ้ำ) → คำตอบที่ถูกต้องคือ B,D\n\n❌ ทำไมข้ออื่นผิด:\nC. host route /128 ชี้ไป fd00:12::2 (R2) → ผิดทิศ โจทย์ต้องการให้ผ่าน R3\nE. host route /128 ชี้ไป R2 พร้อม AD 200 → ผิดทิศ สองชั้น: (1) ไปหา R2 แทน R3 (2) AD 200 สูงจนกลายเป็นเส้นสำรองที่ไม่ถูกใช้\nA. ซ้ำกับ D (เนื้อหาเดียวกัน) — ในบริบทนี้ D คือตัวที่ถูกนับ\n\n📗 จำไว้สอบ: ลำดับการตัดสิน = 1) Longest Prefix Match → 2) AD ต่ำสุด → 3) Metric ต่ำสุด ห้ามสลับ!',
  },
  {
    id: 222,
    kind: 'single',
    image: q222,
    prompt:
      'Refer to the exhibit. When PC-A (10.10.10.0) sends traffic to PC-B (10.10.100.0), which network component receives the packet from PC-A, verifies the IP addresses, and forwards the packet to PC-B?',
    options: [
      { key: 'A', text: 'Layer 2 switch' },
      { key: 'B', text: 'Router' },
      { key: 'C', text: 'Load balancer' },
      { key: 'D', text: 'firewall' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — คีย์เวิร์ดในโจทย์: "verifies the IP addresses" (ตรวจสอบที่อยู่ IP)\n   → การตรวจ IP = ทำงานที่ Layer 3 → มีแค่ Router (หรือ L3 switch) ที่ทำได้\n\n🔍 ตรวจ subnet ก่อน:\n   PC-A อยู่ 10.10.10.0  → subnet หนึ่ง\n   PC-B อยู่ 10.10.100.0 → คนละ subnet!\n   → ⭐ คนละ subnet = ต้องมี router เท่านั้น ถึงจะคุยกันได้\n\n🔑 อุปกรณ์ทำงานที่ชั้นไหน:\n   • L2 switch → ดูแค่ MAC address ส่งได้เฉพาะภายใน VLAN/subnet เดียวกัน ข้าม subnet ไม่ได้\n   • ⭐ Router → ดู IP address → เทียบกับ routing table → forward ข้าม subnet ได้\n\n💡 สิ่งที่เกิดขึ้นจริง:\n   1. PC-A เห็นว่าปลายทางคนละ subnet → ส่งเฟรมไปที่ default gateway (router) ก่อน\n   2. Router รับมา → ตรวจ destination IP → หา route ที่ตรง\n   3. Router เขียน MAC ใหม่ (source = ตัวเอง, dest = next-hop) แล้วส่งต่อ\n   4. ⚠️ IP ต้นทาง/ปลายทางไม่เปลี่ยน ตลอดทาง — เปลี่ยนแค่ MAC ทุก hop\n\n✅ ทำไม B ถูก: การสื่อสารข้าม subnet ต้องผ่าน router ที่ตรวจสอบ IP address แล้ว forward ตาม routing table\n\n❌ ทำไมข้ออื่นผิด:\nA. Layer 2 switch → อ่านได้แค่ MAC address ไม่รู้จัก IP เลย → ข้าม subnet ไม่ได้เด็ดขาด\nC. Load balancer → กระจายโหลดไปยังเซิร์ฟเวอร์หลายตัว ไม่ใช่หน้าที่ routing ระหว่าง PC\nD. Firewall → กรองทราฟฟิกตาม policy (แม้จะ route ได้ แต่ หน้าที่หลัก ของมันคือความปลอดภัย ไม่ใช่การ forward ระหว่าง subnet ปกติ)\n\n📗 จำไว้สอบ: subnet ต่างกัน = ต้องมี router เสมอ | subnet เดียวกัน = สวิตช์เอาอยู่',
  },
  {
    id: 223,
    kind: 'single',
    prompt: 'In software-defined architecture, which plane handles switching for traffic through a Cisco router?',
    options: [
      { key: 'A', text: 'Control' },
      { key: 'B', text: 'Management' },
      { key: 'C', text: 'Data' },
      { key: 'D', text: 'application' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — 3 ระนาบ (ทบทวน) และคีย์เวิร์ดของแต่ละอัน:\n\n   ระนาบ              คีย์เวิร์ดที่ต้องจับ\n   ----------------   -----------------------------------------------\n   ⭐ Data plane      switching / forwarding แพ็กเก็ตที่วิ่งผ่าน\n                      "traffic through the router" ← โจทย์ใช้คำนี้!\n   Control plane      routing protocol, สร้างตาราง, ตัดสินใจ\n   Management plane   SSH, SNMP, config, monitor\n\n🔍 อ่านโจทย์ให้ละเอียด: "handles switching for traffic through a Cisco router"\n   → คำว่า "through" = ทราฟฟิกที่ วิ่งผ่าน เราเตอร์ (ไม่ได้ส่งถึงตัวเราเตอร์เอง)\n   → การขนส่งแพ็กเก็ตจากพอร์ตหนึ่งไปอีกพอร์ต = งานของ Data plane ชัดเจน\n\n💡 ทำงานเร็วแค่ไหน: data plane ใช้ ASIC/hardware ประมวลผล ทำได้ระดับหลายล้านแพ็กเก็ตต่อวินาที\n   (ต่างจาก control plane ที่ใช้ CPU ทั่วไป ช้ากว่ามาก)\n\n✅ ทำไม C ถูก: Data plane (หรือ forwarding plane) มีหน้าที่เดียวคือ switching/forwarding แพ็กเก็ตที่วิ่งผ่านอุปกรณ์ ตามตารางที่ control plane สร้างไว้ให้\n\n❌ ทำไมข้ออื่นผิด:\nA. Control plane → เป็นตัว "คิด" — รัน OSPF/EIGRP/BGP, สร้าง routing table แต่ ไม่ได้ forward เอง\nB. Management plane → ใช้ตั้งค่าและมอนิเตอร์อุปกรณ์ (SSH, SNMP, NETCONF) ไม่เกี่ยวกับการส่งข้อมูลผู้ใช้\nD. Application plane → เป็นชั้นบนสุดของ SDN ที่แอปพลิเคชันอยู่ (เรียกใช้ controller ผ่าน Northbound API) ไม่ได้ยุ่งกับแพ็กเก็ตโดยตรง\n\n💡 เปรียบเทียบง่าย ๆ: Control plane = คนวางแผนเส้นทาง (ดูแผนที่) | Data plane = คนขับรถ (ขับตามแผนที่วางไว้)\n\n📗 จำไว้สอบ: SDN ดึง control plane ไปรวมศูนย์ที่ controller — แต่ data plane ยังอยู่บนอุปกรณ์เหมือนเดิม (ไม่งั้นแพ็กเก็ตจะวิ่งไม่ได้)',
  },
  {
    id: 224,
    kind: 'single',
    prompt: 'Which level of severity must be set to get informational syslogs?',
    options: [
      { key: 'A', text: 'alert' },
      { key: 'B', text: 'critical' },
      { key: 'C', text: 'notice' },
      { key: 'D', text: 'debug' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตาราง Syslog severity (ทบทวน — ออกสอบซ้ำ ๆ):\n\n   ระดับ   ชื่อ            อยู่ในตัวเลือกไหม\n   -----   -------------   -----------------\n   0       Emergency\n   1       Alert           ← ตัวเลือก A\n   2       Critical        ← ตัวเลือก B\n   3       Error\n   4       Warning\n   5       Notice          ← ตัวเลือก C\n   6       ⭐ Informational  ← สิ่งที่โจทย์ต้องการ!\n   7       ⭐ Debugging     ← ตัวเลือก D\n\n🔑 กฎ: ตั้ง logging ระดับ X → ได้ log ตั้งแต่ 0 ถึง X ทั้งหมด\n\n🔍 โจทย์ต้องการ informational (ระดับ 6)\n   → ต้องตั้งระดับ ≥ 6 จึงจะได้ log ระดับ 6 มาด้วย\n   → ดูตัวเลือก: alert(1), critical(2), notice(5) ล้วน ต่ำกว่า 6 ทั้งหมด → ไม่ครอบคลุม!\n   → เหลือ debug (7) ตัวเดียวที่ ≥ 6 → ครอบคลุม 0-7 = ได้ informational แน่นอน ✔\n\n✅ ทำไม D ถูก: debug คือระดับ 7 ซึ่งเป็นตัวเดียวในตัวเลือกที่สูงพอจะครอบคลุมระดับ 6 (informational)\n\n❌ ทำไมข้ออื่นผิด:\nA. alert (1) → ได้แค่ระดับ 0-1 ไม่ถึง informational\nB. critical (2) → ได้แค่ 0-2 ยังไม่ถึง\nC. notice (5) → ได้ 0-5 → ขาดไป 1 ระดับพอดี! (informational คือ 6) ← นี่คือกับดักหลักของข้อนี้\n\n⚠️ ระวังในโลกจริง: การตั้ง debug (7) จะได้ log ท่วมท้นมาก กิน CPU และเต็ม buffer เร็ว → ใช้เฉพาะตอน troubleshoot แล้วรีบปิด\n\n📗 จำไว้สอบ: เจอโจทย์แบบนี้ ให้ท่องตารางแล้ว "หาตัวที่เลขเท่ากับหรือมากกว่าที่โจทย์ขอ" — ต่ำกว่าแม้แต่ระดับเดียวก็ตกทันที',
  },
  {
    id: 225,
    kind: 'single',
    prompt: 'When a switch receives a frame for a known destination MAC address, how is the frame handled?',
    options: [
      { key: 'A', text: 'sent to the port identified for the known MAC address' },
      { key: 'B', text: 'broadcast to all ports' },
      { key: 'C', text: 'forwarded to the first available port' },
      { key: 'D', text: 'flooded to all ports except the one from which it originated' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — สวิตช์ตัดสินใจกับเฟรมยังไง (3 กรณี ต้องแยกให้ขาด):\n\n   กรณี                        สวิตช์ทำอะไร\n   -------------------------   -----------------------------------------------\n   ⭐ Known unicast        ส่งออก เฉพาะพอร์ตเดียว ที่ผูกกับ MAC นั้น\n      (MAC อยู่ในตารางแล้ว)     → เรียกว่า "forward" — มีประสิทธิภาพสูงสุด\n\n   Unknown unicast             Flood ออกทุกพอร์ต ยกเว้นพอร์ตที่รับเข้ามา\n      (MAC ไม่มีในตาราง)        → เพราะไม่รู้ว่าปลายทางอยู่ไหน จึงถามทุกทาง\n\n   Broadcast (FFFF.FFFF.FFFF)  Flood ออกทุกพอร์ต ยกเว้นพอร์ตที่รับเข้ามา\n   / Multicast                 → ไปทั้ง broadcast domain\n\n🔑 สวิตช์สร้างตาราง MAC ได้ยังไง:\n   ดูจาก source MAC ของเฟรมที่วิ่งเข้ามา → จดว่า "MAC นี้ อยู่พอร์ตนี้"\n   (จำ 300 วินาทีตาม default aging time แล้วลบทิ้งถ้าไม่มีทราฟฟิกอีก)\n\n✅ ทำไม A ถูก: เมื่อ destination MAC อยู่ในตารางแล้ว (known) สวิตช์ส่งออกเฉพาะพอร์ตที่ผูกกับ MAC นั้นพอร์ตเดียว — ไม่รบกวนพอร์ตอื่นเลย\n\n❌ ทำไมข้ออื่นผิด:\nB. broadcast ออกทุกพอร์ต → ทำแบบนี้เฉพาะเฟรม broadcast จริง ๆ ไม่ใช่ known unicast (และการ broadcast ออกทุกพอร์ตรวมพอร์ตต้นทางก็ผิดด้วย)\nC. forward ออกพอร์ตแรกที่ว่าง → ไม่มีพฤติกรรมแบบนี้เลย สวิตช์ไม่ได้เลือกพอร์ตมั่ว ๆ (ตัวลวงล้วน)\nD. flood ออกทุกพอร์ตยกเว้นพอร์ตต้นทาง → เป็นพฤติกรรมของ unknown unicast และ broadcast ไม่ใช่ known unicast ← นี่คือตัวลวงหลัก อ่านโจทย์ให้ดีว่าเป็น "known"\n\n📗 จำไว้สอบ: Known = ส่งพอร์ตเดียว | Unknown / Broadcast = flood ทุกพอร์ตยกเว้นพอร์ตที่เข้ามา',
  },
  {
    id: 226,
    kind: 'single',
    prompt: 'How does QoS optimize voice traffic?',
    options: [
      { key: 'A', text: 'reducing bandwidth usage' },
      { key: 'B', text: 'by reducing packet loss' },
      { key: 'C', text: 'by differentiating voice and video traffic' },
      { key: 'D', text: 'by increasing jitter' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ศัตรู 3 ตัวของ VoIP (และเกณฑ์ที่ Cisco แนะนำ):\n\n   ศัตรู                  เกณฑ์ที่ยอมรับได้        QoS ช่วยยังไง\n   -------------------   ---------------------   ------------------------------\n   ⭐ Packet loss        < 1%                จัด priority queue → ไม่ถูกทิ้ง\n   Latency (ดีเลย์)      < 150 ms (ทางเดียว)     ส่งเสียงก่อนใคร → ไม่ต้องรอคิว\n   Jitter (ดีเลย์แกว่ง)  < 30 ms                 คิวคงที่ → ดีเลย์สม่ำเสมอ\n\n🔑 QoS ทำงานยังไงกับเสียง:\n   1. จำแนก (classify) → รู้ว่าแพ็กเก็ตไหนคือเสียง\n   2. ทำเครื่องหมาย (mark) → ติด DSCP = EF (Expedited Forwarding, DSCP 46)\n   3. ⭐ จัดคิว (queue) → ใส่ใน LLQ (strict priority queue) = ได้ส่งก่อนใครเสมอ\n      → ผลลัพธ์: แพ็กเก็ตเสียง ไม่ถูก drop เมื่อเครือข่ายแออัด = packet loss ลดลง ✔\n\n💡 ทำไม packet loss สำคัญที่สุดกับเสียง: เสียงใช้ UDP → ไม่มีการส่งซ้ำ!\n   แพ็กเก็ตหายไป = เสียงขาดหายไปเลย ผู้ฟังได้ยินเสียงกระตุก/ขาดหาย ทันที\n\n✅ ทำไม B ถูก: ผลลัพธ์ที่ QoS ทำให้เสียงดีขึ้นจริง ๆ คือ ลด packet loss (รวมถึง latency และ jitter) — เป็นการวัดผลที่จับต้องได้\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C ("แยกแยะทราฟฟิก voice กับ video") — แต่นั่นเป็นเพียง ขั้นตอนหนึ่ง (classification) ในกระบวนการ ไม่ใช่ ผลลัพธ์ ที่ทำให้เสียงดีขึ้น โจทย์ถามว่า QoS "optimize voice" ยังไง → คำตอบต้องเป็นผลลัพธ์ = ลด packet loss → คำตอบที่ถูกต้องคือ B\n\n❌ ทำไมข้ออื่นผิด:\nA. ลดการใช้แบนด์วิดท์ → QoS ไม่ได้ทำให้ใช้แบนด์วิดท์น้อยลง มันแค่ จัดลำดับ ว่าใครได้ใช้ก่อน (แบนด์วิดท์รวมเท่าเดิม)\nC. แยกแยะ voice กับ video → เป็นขั้นตอนกลาง ไม่ใช่ผลลัพธ์ (และไม่ได้ทำให้เสียงดีขึ้นด้วยตัวมันเอง)\nD. เพิ่ม jitter → ผิดกลับด้าน! QoS ลด jitter ต่างหาก (jitter ยิ่งเยอะ เสียงยิ่งแย่)\n\n📗 จำไว้สอบ: Voice = DSCP EF (46) + LLQ | Video = AF41 | เกณฑ์ทอง: loss < 1%, delay < 150ms, jitter < 30ms',
  },
  {
    id: 227,
    kind: 'single',
    prompt: 'What is the function of a controller in controller-based networking?',
    options: [
      { key: 'A', text: 'It serves as the centralized management point of an SDN architecture' },
      { key: 'B', text: 'It centralizes the data plane for the network' },
      { key: 'C', text: 'It is the card on a core router that maintains all routing decisions for a campus' },
      { key: 'D', text: 'It is a pair of core routers that maintain all routing decisions for a campus' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Controller คือ "สมองกลาง" ของ SDN\n\n         [ Applications ]\n              ↕ Northbound API (REST)\n   ┌──────────────────────────────┐\n   │  ⭐ SDN CONTROLLER            │  ← จุดบริหารจัดการรวมศูนย์\n   │  • รวม control plane ทั้งหมด │     (centralized management point)\n   │  • เห็นภาพรวมทั้งเครือข่าย    │\n   └──────────────────────────────┘\n              ↕ Southbound API (OpenFlow/NETCONF)\n   [Switch] [Switch] [Router]  ← ⚠️ data plane ยังอยู่ตรงนี้! (ไม่ได้ย้ายไปไหน)\n\n🔑 จุดที่ต้องแม่นที่สุด: controller รวมศูนย์ control plane เท่านั้น\n   → data plane ยังคงกระจายอยู่บนอุปกรณ์แต่ละตัว — และต้องเป็นแบบนั้น!\n   → ถ้าย้าย data plane ไปที่ controller ด้วย แพ็กเก็ตทุกใบต้องวิ่งอ้อมผ่าน controller = ช้าจนใช้งานไม่ได้\n\n✅ ทำไม A ถูก: controller ทำหน้าที่เป็น centralized management point ของสถาปัตยกรรม SDN — เป็นจุดเดียวที่ผู้ดูแลสั่งงานทั้งเครือข่ายได้\n\n❌ ทำไมข้ออื่นผิด:\nB. รวมศูนย์ data plane → ผิดตรงคำสำคัญ! controller รวม control plane ส่วน data plane ยังอยู่บนอุปกรณ์ (นี่คือตัวลวงที่แนบเนียนที่สุดของข้อนี้ — ต่างกันแค่คำเดียว)\nC. เป็นการ์ดบน core router ที่เก็บการตัดสินใจ routing ทั้งแคมปัส → controller เป็น ซอฟต์แวร์/แพลตฟอร์มแยกต่างหาก ไม่ใช่การ์ดในเราเตอร์\nD. เป็นคู่ core router ที่ดูแลการ routing ทั้งแคมปัส → ไม่ใช่เราเตอร์ แต่เป็น controller (เช่น Cisco DNA Center, APIC)\n\n📗 จำไว้สอบ: SDN = Centralized control plane + Distributed data plane — ท่องประโยคนี้ประโยคเดียวตอบได้หลายข้อ',
  },
  {
    id: 228,
    kind: 'multi',
    prompt: 'What are two similarities between UTP Cat 5e and Cat 6a cabling? (Choose two)',
    options: [
      { key: 'A', text: 'Both operate at a frequency of 500 MHz' },
      { key: 'B', text: 'Both support runs of up to 55 meters' },
      { key: 'C', text: 'Both support runs of up to 100 meters' },
      { key: 'D', text: 'Both support speeds of at least 1 Gigabit' },
      { key: 'E', text: 'Both support speeds up to 10 Gigabit' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 ตารางสาย UTP ที่ CCNA ต้องท่อง:\n\n   ประเภท     ความถี่     ความเร็ว                    ระยะสูงสุด\n   --------   ---------   -------------------------   -------------------------\n   Cat 5      100 MHz     100 Mbps                    100 ม.\n   ⭐ Cat 5e  100 MHz     1 Gbps                  100 ม.\n   Cat 6      250 MHz     1 Gbps (10 Gbps ที่ 55 ม.)  100 ม. (55 ม. ถ้า 10 Gbps)\n   ⭐ Cat 6a  500 MHz     10 Gbps                 100 ม.\n   Cat 7      600 MHz     10 Gbps                     100 ม.\n\n🔍 หา "จุดที่เหมือนกัน" ระหว่าง Cat 5e กับ Cat 6a:\n   • ความถี่  → 100 MHz vs 500 MHz  ✘ ต่างกัน\n   • ⭐ ระยะ  → 100 ม. vs 100 ม.     ✔ เหมือนกัน!\n   • ความเร็ว → 1 Gbps vs 10 Gbps    ✘ ต่างกัน\n     ⭐ แต่... ทั้งคู่ทำได้ อย่างน้อย 1 Gbps ✔ (5e = 1 Gbps พอดี, 6a = 10 Gbps ซึ่งมากกว่า 1)\n\n✅ ทำไม C, D ถูก: ทั้งคู่รองรับระยะสาย 100 เมตร (C) และทั้งคู่ทำความเร็วได้ อย่างน้อย 1 Gbps (D) — สังเกตคำว่า "at least" ในตัวเลือก D ซึ่งเป็นกุญแจสำคัญ\n\n❌ ทำไมข้ออื่นผิด:\nA. ทั้งคู่ทำงานที่ 500 MHz → 500 MHz เป็นของ Cat 6a เท่านั้น (Cat 5e = 100 MHz)\nB. ทั้งคู่รองรับระยะ 55 เมตร → 55 เมตรเป็นข้อจำกัดของ Cat 6 เมื่อวิ่ง 10 Gbps ไม่เกี่ยวกับ 5e/6a\nE. ทั้งคู่รองรับ 10 Gbps → Cat 5e ทำได้แค่ 1 Gbps ไปไม่ถึง 10 Gbps ← ตัวลวงที่คนพลาดบ่อย\n\n💡 กับดักภาษา: D ใช้คำว่า "at least 1 Gigabit" (อย่างน้อย) → Cat 6a ที่ทำได้ 10 Gbps ก็นับว่า "อย่างน้อย 1 Gbps" ด้วย → จึงถือว่าเหมือนกันได้\n   แต่ E ใช้คำว่า "up to 10 Gigabit" ซึ่ง Cat 5e ทำไม่ได้ → ไม่เหมือนกัน\n\n📗 จำไว้สอบ: สายทองแดง UTP ทุกประเภท = สูงสุด 100 เมตร (เกินกว่านั้นต้องใช้ไฟเบอร์)',
  },
  {
    id: 229,
    kind: 'single',
    prompt: 'What is a characteristic of a cloud-based network topology?',
    options: [
      { key: 'A', text: 'wireless connections provide the sole access method to services' },
      { key: 'B', text: 'onsite network services are provided with physical Layer 2 and Layer 3 components' },
      { key: 'C', text: 'services are provided by a public, private, or hybrid deployment' },
      { key: 'D', text: 'physical workstations are configured to share resources' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Cloud มี 2 มิติที่ต้องแยกให้ออก:\n\n🔹 Deployment model (ใครเป็นเจ้าของ / ใครใช้ได้):\n   • Public   → ผู้ให้บริการเปิดให้ทุกคนใช้ (AWS, Azure, GCP)\n   • Private  → องค์กรสร้างไว้ใช้เอง ไม่แชร์กับใคร\n   • Hybrid   → ⭐ ผสมกัน (ข้อมูลลับเก็บ private + ปริมาณงานพุ่งช่วงพีคไป public)\n   • Community → หลายองค์กรที่มีความต้องการคล้ายกันใช้ร่วมกัน\n\n🔹 Service model (ได้อะไรมาใช้):\n   • IaaS → ได้ VM/เครือข่าย/storage เปล่า ๆ ไปติดตั้ง OS เอง\n   • PaaS → ได้แพลตฟอร์มพร้อมรัน แค่เอาโค้ดมาวาง\n   • SaaS → ได้ซอฟต์แวร์สำเร็จรูปใช้เลย (Gmail, Office 365)\n\n✅ ทำไม C ถูก: ลักษณะเฉพาะที่นิยาม cloud ได้ตรงที่สุดคือ "บริการถูกให้ผ่าน public, private หรือ hybrid deployment" — เป็นคุณสมบัติเชิงโครงสร้างของคลาวด์โดยตรง\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A ("เข้าถึงได้ทางไร้สายเท่านั้น") — ผิดชัดเจน คลาวด์เข้าถึงได้ทั้งทาง มีสาย, ไร้สาย, VPN, MPLS — ไม่มีข้อจำกัดว่าต้องไร้สาย → คำตอบที่ถูกต้องคือ C\n\n❌ ทำไมข้ออื่นผิด:\nA. เข้าถึงบริการได้ทางไร้สายอย่างเดียว → ผิด ไม่มีข้อจำกัดแบบนี้ (จะเสียบสาย LAN เข้าคลาวด์ก็ได้)\nB. บริการเครือข่ายให้บริการด้วยอุปกรณ์ L2/L3 กายภาพในสถานที่ → นั่นคือ on-premises (ตรงข้ามกับคลาวด์เลย!) — หัวใจของคลาวด์คือ ไม่ต้อง มีฮาร์ดแวร์เอง\nD. เวิร์กสเตชันกายภาพถูกตั้งค่าให้แชร์ทรัพยากรกัน → เป็นการอธิบาย peer-to-peer network ไม่ใช่คลาวด์\n\n📗 จำไว้สอบ: คุณสมบัติของคลาวด์ (NIST) = On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service (จ่ายตามที่ใช้)',
  },
  {
    id: 230,
    kind: 'single',
    prompt: 'What is the difference in data transmission delivery and reliability between TCP and UDP?',
    options: [
      { key: 'A', text: 'TCP transmits data at a higher rate and ensures packet delivery. UDP retransmits lost data to ensure applications receive the data' },
      { key: 'B', text: 'UDP sets up a connection between both devices before transmitting data. TCP uses the three-way handshake to transmit data with a reliable connection' },
      { key: 'C', text: 'UDP is used for multicast and broadcast communication. TCP is used for unicast communication and transmits data at a higher rate with error checking' },
      { key: 'D', text: 'TCP requires the connection to be established before transmitting data. UDP transmits data at a higher rate without ensuring packet delivery' },
    ],
    correct: ['D'],
    explanation:
      '📘 เปรียบเทียบ TCP กับ UDP (ตารางนี้ตอบได้ครึ่งหมวด transport layer):\n\n   คุณสมบัติ              ⭐ TCP                    ⭐ UDP\n   -------------------   ---------------------   ------------------------\n   การเชื่อมต่อ           Connection-oriented      Connectionless\n                         (3-way handshake ก่อน)   (ยิงเลย ไม่ต้องทักทาย)\n   ความน่าเชื่อถือ        Reliable (มี ACK)    Unreliable (ไม่มี ACK)\n   ส่งซ้ำเมื่อหาย         ✔ retransmit             ✘ หายก็หายเลย\n   เรียงลำดับ            ✔ sequence number        ✘ ไม่รับประกันลำดับ\n   ความเร็ว/overhead     ช้ากว่า (header 20 ไบต์)  เร็วกว่า (header 8 ไบต์)\n   ใช้กับ                HTTP, HTTPS, FTP, SSH,   VoIP, วิดีโอสตรีม, DNS,\n                         SMTP, Telnet              DHCP, TFTP, SNMP\n\n🤝 3-Way Handshake ของ TCP (ท่องให้ได้):  SYN → SYN-ACK → ACK\n\n💡 ทำไม VoIP ใช้ UDP: เสียงที่มาช้า = ไร้ประโยชน์ ส่งซ้ำไปก็สายไปแล้ว\n   → ยอมให้แพ็กเก็ตหายบ้าง ดีกว่ารอ = "เร็วไว้ก่อน ความสมบูรณ์เอาทีหลัง"\n\n✅ ทำไม D ถูก: บรรยายถูกทั้งสองฝั่ง — TCP ต้องสร้างการเชื่อมต่อก่อนส่ง (3-way handshake) และ UDP ส่งเร็วกว่าโดยไม่รับประกันว่าถึงปลายทาง\n\n❌ ทำไมข้ออื่นผิด:\nA. "TCP ส่งเร็วกว่า + UDP ส่งซ้ำเมื่อข้อมูลหาย" → สลับกันทั้งคู่! UDP ต่างหากที่เร็วกว่า และ TCP ต่างหากที่ส่งซ้ำ (UDP ไม่มีกลไก retransmission เลย)\nB. "UDP สร้างการเชื่อมต่อก่อนส่ง + TCP ใช้ 3-way handshake" → ประโยคแรกผิด UDP เป็น connectionless ไม่มีการสร้างการเชื่อมต่อใด ๆ (ประโยคหลังถูก แต่ประโยคแรกผิด → ตกทั้งข้อ)\nC. "TCP เร็วกว่า" → ผิด TCP มี overhead มากกว่า (header ใหญ่กว่า + ต้องรอ ACK) จึงช้ากว่า UDP เสมอ\n\n📗 จำไว้สอบ: TCP = "ส่งจดหมายลงทะเบียน" (ช้าแต่ชัวร์) | UDP = "ตะโกน" (เร็วแต่ไม่รู้ว่าได้ยินไหม)',
  },
  {
    id: 231,
    kind: 'single',
    prompt: 'How are the switches in a spine-and-leaf topology interconnected?',
    options: [
      { key: 'A', text: 'Each leaf switch is connected to one of the spine switches' },
      { key: 'B', text: 'Each leaf switch is connected to two spine switches, making a loop' },
      { key: 'C', text: 'Each leaf switch is connected to each spine switch' },
      { key: 'D', text: 'Each leaf switch is connected to a central leaf switch, then uplinked to a core spine switch' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Spine-and-Leaf: สถาปัตยกรรมมาตรฐานของ data center ยุคใหม่\n\n         [Spine 1]      [Spine 2]      ← ชั้น Spine (backbone)\n            │ ╲          ╱ │\n            │   ╲      ╱   │            ⭐ leaf ทุกตัว ต่อกับ spine ทุกตัว\n            │     ╲  ╱     │               (full mesh ระหว่างสองชั้น)\n            │     ╱  ╲     │\n         [Leaf 1]      [Leaf 2]        ← ชั้น Leaf (ต่อ server)\n            │              │\n         [Server]       [Server]\n\n🔑 กฎ 3 ข้อของ spine-and-leaf:\n   1. ⭐ leaf ทุกตัวต่อกับ spine ทุกตัว\n   2. ❌ leaf ไม่ต่อกับ leaf ด้วยกันเอง\n   3. ❌ spine ไม่ต่อกับ spine ด้วยกันเอง\n\n💡 ประโยชน์ที่ได้:\n   • ⭐ ทุกเซิร์ฟเวอร์ห่างกัน 2 hop เท่ากันหมด (leaf → spine → leaf)\n     → latency คาดเดาได้ สม่ำเสมอ ไม่ว่าจะคุยกับเครื่องไหน\n   • ขยายง่าย: อยากได้แบนด์วิดท์เพิ่ม → เพิ่ม spine | อยากได้พอร์ตเพิ่ม → เพิ่ม leaf\n   • มีหลายเส้นทางเสมอ → ใช้ ECMP กระจายโหลด (ไม่ต้องพึ่ง STP บล็อกพอร์ตทิ้ง!)\n   • เหมาะกับทราฟฟิก East-West (server คุยกันเอง) ซึ่งเป็นส่วนใหญ่ใน data center ยุคนี้\n\n✅ ทำไม C ถูก: leaf switch แต่ละตัวเชื่อมต่อกับ spine switch ทุกตัว — เป็นนิยามหลักของ spine-and-leaf\n\n❌ ทำไมข้ออื่นผิด:\nA. leaf แต่ละตัวต่อกับ spine เพียงตัวเดียว → ไม่มี redundancy เลย spine ตัวนั้นล่ม = leaf หลุดหมด (ขัดกับจุดประสงค์ของสถาปัตยกรรมนี้)\nB. leaf ต่อกับ spine 2 ตัวจนเกิด loop → spine-and-leaf ออกแบบให้ใช้ ECMP (Layer 3) ซึ่งไม่เกิด loop แบบ L2 → คำว่า "making a loop" ผิดแนวคิด\nD. leaf ต่อกับ central leaf แล้วค่อย uplink ไป core spine → นั่นเป็นการบรรยาย three-tier แบบเดิม ไม่ใช่ spine-and-leaf (ซึ่งมีแค่ 2 ชั้น ไม่มี "central leaf")\n\n📗 จำไว้สอบ: Spine-Leaf = 2 ชั้น, full mesh ระหว่างชั้น, ทุกปลายทาง 2 hop เท่ากัน, ใช้ ECMP ไม่ใช่ STP',
  },
  {
    id: 232,
    kind: 'drag',
    image: q232,
    prompt: 'Drag and drop the IPv6 address type characteristics from the left to the right (Link-Local Address / Unique Local Address).',
    categories: [
      { name: 'Link-Local Address', items: ['attached to a single subnet', 'configured only once per interface'] },
      { name: 'Unique Local Address', items: ['addresses with prefix FC00::/7', 'addressing for exclusive use internally without Internet routing'] },
    ],
    explanation:
      '📘 ตารางประเภท IPv6 address (ท่อง prefix ให้แม่น — ตอบได้หลายข้อ):\n\n   ประเภท                  Prefix          ขอบเขต / การใช้งาน\n   --------------------   -------------   -----------------------------------\n   ⭐ Link-Local          FE80::/10   ใช้ได้แค่ใน ลิงก์เดียว (ไม่ข้าม router)\n                                          ทุกอินเทอร์เฟซ IPv6 มีอัตโนมัติ 1 ตัว\n                                          ใช้กับ neighbor discovery, OSPFv3 next-hop\n\n   ⭐ Unique Local (ULA)  FC00::/7    ใช้ ภายในองค์กร เท่านั้น\n                          (ใช้จริง FD00::/8)  ไม่ route ออกอินเทอร์เน็ต\n                                          = เทียบเท่า private IP ของ IPv4 (RFC 1918)\n\n   Global Unicast (GUA)   2000::/3        route บนอินเทอร์เน็ตได้ (= public IP)\n   Multicast              FF00::/8        ส่งถึงกลุ่ม\n\n✅ การจับคู่ที่ถูกต้อง:\n\n   🔹 Link-Local Address (FE80::/10)\n      • "attached to a single subnet" → ขอบเขตแค่ลิงก์เดียว router ไม่ forward ต่อ\n      • "configured only once per interface" → แต่ละอินเทอร์เฟซมีได้ตัวเดียว (สร้างอัตโนมัติ)\n\n   🔹 Unique Local Address (ULA)\n      • "addresses with prefix FC00::/7" → นี่คือ prefix ของ ULA โดยตรง\n      • "exclusive use internally without Internet routing" → ใช้ภายในองค์กร ไม่ออกเน็ต\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับ สลับสองกลุ่มผิด — เอา "FC00::/7" และ "exclusive internal use" ไปไว้ฝั่ง Link-Local ซึ่งผิด (Link-Local คือ FE80::/10 ต่างหาก) → ที่ถูกต้องคือทั้งสองข้อความนั้นเป็นของ Unique Local\n\n💡 เคล็ดจำ: FE80 = First Every interface (ทุกพอร์ตมี) | FC/FD = For Company only (ใช้ในองค์กร)\n\n📗 จำไว้สอบ: PC หนึ่งเครื่องมี IPv6 ได้หลายตัวพร้อมกัน — Link-Local (บังคับมี) + Global Unicast + อาจมี ULA ด้วย',
  },
  {
    id: 233,
    kind: 'single',
    prompt:
      'Refer to the routing table. What is the metric of the route to the 192.168.10.33 subnet?\n\nO IA  192.168.10.32/28 [110/193] via 192.168.30.10, Serial0/0.1\nO IA  192.168.10.0/27  [110/192] via 192.168.30.10, Serial0/0.1\nO IA  192.168.20.0     [110/128] via 192.168.30.10, Serial0/0.1\nO*IA  0.0.0.0/0        [110/84]  via 192.168.30.10, Serial0/0.1',
    options: [
      { key: 'A', text: '84' },
      { key: 'B', text: '110' },
      { key: 'C', text: '128' },
      { key: 'D', text: '192' },
      { key: 'E', text: '193' },
    ],
    correct: ['E'],
    explanation:
      '📘 แนวคิด — ข้อนี้ต้องทำ 2 ขั้น: (1) หา route ที่ถูกด้วย LPM (2) อ่านเลข metric ให้ถูกช่อง\n\n🔢 ขั้นที่ 1 — หา route ที่ตรงกับ 192.168.10.33:\n\n   192.168.10.32/28 → block size = 256-240 = 16 → ครอบคลุม .32 ถึง .47  ✔ มี .33!\n   192.168.10.0/27  → block size = 256-224 = 32 → ครอบคลุม .0  ถึง .31  ✘ ไม่ถึง .33\n   192.168.20.0         → คนละเครือข่ายเลย                                     ✘\n   0.0.0.0/0            → default route (ใช้เมื่อไม่มีอันไหนตรงเลย)             = ตัวสำรอง\n\n   → มี 2 อันที่ "ตรง" คือ /28 และ default route\n   → ⭐ Longest Prefix Match: /28 ยาวกว่า /0 → /28 ชนะ\n\n🔢 ขั้นที่ 2 — อ่านตัวเลขในวงเล็บให้ถูก:\n\n   O IA  192.168.10.32/28  [110/193]  via ...\n                             ↑     ↑\n                            AD   metric\n   → เลขหน้า / = Administrative Distance = 110 (ค่าประจำของ OSPF เสมอ)\n   → เลขหลัง / = ⭐ Metric (ค่า cost ของ OSPF) = 193 ← โจทย์ถามตัวนี้!\n\n✅ ทำไม E ถูก: route ที่ถูกเลือกคือ /28 (LPM) และค่า metric ของมันคือ 193 (เลขหลังเครื่องหมาย /)\n\n❌ ทำไมข้ออื่นผิด:\nB. 110 → นี่คือ Administrative Distance ของ OSPF ไม่ใช่ metric ← กับดักที่คนพลาดมากที่สุด!\nD. 192 → เป็น metric ของ route /27 ซึ่งไม่ครอบคลุม .33 (ครอบคลุมแค่ .0-.31)\nC. 128 → เป็น metric ของ 192.168.20.0 คนละเครือข่ายไปเลย\nA. 84 → เป็น metric ของ default route ซึ่งจะถูกใช้ก็ต่อเมื่อไม่มี route ไหนตรงเลย — แต่นี่มี /28 ที่ตรงกว่า\n\n📗 จำไว้สอบ: ในตาราง routing เลขในวงเล็บคือ [AD/Metric] เสมอ — OSPF=110, EIGRP=90, RIP=120, eBGP=20',
  },
  {
    id: 234,
    kind: 'drag',
    image: q234,
    prompt:
      'An engineer is configuring an encrypted password for the enable command (local user database already configured). Drag the configuration commands into the correct sequence. Not all commands are used.',
    categories: [
      { name: 'first', items: ['enable'] },
      { name: 'second', items: ['configure terminal'] },
      { name: 'third', items: ['enable secret $hf!@4fs'] },
      { name: 'fourth', items: ['line vty 0 4'] },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['exit', 'service password-encryption'] },
    ],
    explanation:
      '📘 แนวคิด — ลำดับชั้นโหมดของ Cisco IOS (ต้องไต่ขึ้นทีละขั้น ข้ามไม่ได้):\n\n   Router>              ← User EXEC (ดูได้นิดหน่อย)\n      ↓ enable\n   Router#              ← Privileged EXEC (ดูได้ทุกอย่าง)\n      ↓ configure terminal\n   Router(config)#      ← Global config (แก้ค่าได้)\n      ↓ line vty 0 4 / interface gi0/0 / ...\n   Router(config-line)# ← Sub-config mode\n\n✅ ลำดับที่ถูกต้อง:\n   1️⃣ enable                  → จาก User EXEC (>) ขึ้นไป Privileged EXEC (#)\n   2️⃣ configure terminal      → จาก # เข้าสู่ Global config (config)#\n   3️⃣ enable secret $hf!@4fs  → ⭐ ตั้งรหัส enable แบบเข้ารหัส (MD5 hash)\n                                     ต้องอยู่ในโหมด global config เท่านั้น\n   4️⃣ line vty 0 4            → เข้าโหมดตั้งค่า vty (สำหรับ SSH/Telnet) ต่อไป\n\n❌ คำสั่งที่ไม่ถูกใช้ (ตัวลวง):\n• exit → ใช้ถอยกลับออกจากโหมด — ในลำดับนี้เรากำลัง "ไต่เข้าไป" ไม่ได้ถอยออก จึงไม่ต้องใช้\n• service password-encryption → เป็นการเข้ารหัส Type 7 (อ่อนแอ ถอดกลับได้!)\n     → โจทย์ขอ "encrypted password for the enable command" ซึ่ง `enable secret` จัดการให้แล้ว\n     → คำสั่งนี้เอาไว้เข้ารหัสรหัสผ่านตัวอื่น ๆ ที่เป็น plain text ไม่ใช่สิ่งที่โจทย์ขอ\n\n💡 ทำไมต้องใช้ enable secret ไม่ใช่ enable password:\n   • enable password → เก็บเป็น plain text อ่านได้เลยจาก running-config ☠️\n   • ⭐ enable secret  → เข้ารหัสด้วย MD5 (Type 5) ถอดกลับไม่ได้ ✔\n   • ถ้าตั้งทั้งคู่ → enable secret ชนะเสมอ\n\n📗 จำไว้สอบ: ข้อสอบชอบถามลำดับโหมด — จำว่า enable → configure terminal เป็นสองขั้นแรกเสมอ',
  },
  {
    id: 235,
    kind: 'single',
    prompt: 'Which action does the router take as it forwards a packet through the network?',
    options: [
      { key: 'A', text: 'The router replaces the original source and destination MAC addresses with the sending router MAC address as the source and the neighbor MAC address as the destination' },
      { key: 'B', text: 'The router encapsulates the original packet and includes a tag that identifies the source router MAC address and transmits it transparently to the destination' },
      { key: 'C', text: 'The router encapsulates the source and destination IP addresses with the sending router IP address as the source and the neighbor IP address as the destination' },
      { key: 'D', text: 'The router replaces the source and destination labels with the sending router interface label as a source and the next-hop router label as a destination' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — กฎทองของการ forward แพ็กเก็ต (ข้อสอบถามบ่อยมาก!):\n\n   ⭐ IP address ไม่เปลี่ยนตลอดทาง — แต่ MAC address เปลี่ยนทุก hop!\n\n   PC-A ──── R1 ──── R2 ──── PC-B\n\n   ช่วง PC-A → R1:\n     src IP = PC-A  | dst IP = PC-B    ← IP คงเดิม\n     src MAC = PC-A | dst MAC = R1     ← MAC ของช่วงนี้\n\n   ช่วง R1 → R2:  ⭐ R1 เขียน MAC ใหม่ทั้งคู่\n     src IP = PC-A  | dst IP = PC-B    ← IP ยังเหมือนเดิมเป๊ะ!\n     src MAC = R1 | dst MAC = R2  ← MAC เปลี่ยนเป็นคู่ใหม่\n\n   ช่วง R2 → PC-B:\n     src IP = PC-A  | dst IP = PC-B    ← IP ยังคงเดิมจนถึงปลายทาง\n     src MAC = R2 | dst MAC = PC-B\n\n💡 ทำไมเป็นแบบนี้:\n   • IP = ที่อยู่ปลายทางสุดท้าย (เหมือนที่อยู่บนซองจดหมาย — ไม่เปลี่ยน)\n   • MAC = ที่อยู่ของ hop ถัดไป (เหมือนบอกทางทีละช่วง — เปลี่ยนทุกครั้ง)\n   • router หา MAC ของ next-hop ด้วย ARP\n\n✅ ทำไม A ถูก: เมื่อ router forward แพ็กเก็ต มัน แทนที่ MAC ต้นทางและปลายทางเดิม ด้วย MAC ของตัวเอง (source) และ MAC ของ next-hop (destination) — บรรยายกระบวนการได้ถูกต้องเป๊ะ\n\n❌ ทำไมข้ออื่นผิด:\nB. ห่อหุ้มแพ็กเก็ตเดิมพร้อม tag ระบุ MAC ของ router ต้นทาง แล้วส่งแบบ transparent → นั่นคือพฤติกรรมของ tunneling (GRE/VPN) ไม่ใช่การ routing ปกติ\nC. ห่อหุ้ม IP ต้นทาง/ปลายทาง ด้วย IP ของ router → ผิด! router ไม่เปลี่ยน IP (ยกเว้นกรณีทำ NAT ซึ่งเป็นฟีเจอร์พิเศษ ไม่ใช่การ forward ปกติ) ← นี่คือตัวลวงหลัก\nD. แทนที่ label ต้นทาง/ปลายทาง ด้วย label ของ next-hop → นั่นคือ MPLS (label switching) ไม่ใช่ IP routing ธรรมดา\n\n📗 จำไว้สอบ: "IP ไม่เปลี่ยน MAC เปลี่ยนทุก hop" — จำประโยคนี้ ตอบได้ทุกข้อที่ถามเรื่อง encapsulation ระหว่างทาง',
  },
  {
    id: 236,
    kind: 'drag',
    image: q236,
    prompt: 'Drag the functions of DHCP from the left into the group on the right. Not all functions are used.',
    categories: [
      {
        name: 'หน้าที่ของ DHCP',
        items: [
          'maintains an address pool',
          'provides local control for network segments using a client-server scheme',
          'reduces the administrative burden for onboarding end users',
          'assigns IP addresses to local hosts for a configurable lease time',
        ],
      },
      { name: 'ไม่ใช่หน้าที่ DHCP (ตัวลวง)', items: ['associates hostnames to IP addresses', 'uses authoritative servers for record keeping'] },
    ],
    explanation:
      '📘 แนวคิด — DHCP vs DNS: สองตัวนี้ข้อสอบชอบเอามาปนกัน แยกให้ขาด!\n\n   ⭐ DHCP = แจก IP ให้เครื่อง        (Dynamic Host Configuration Protocol)\n   ❌ DNS  = แปลงชื่อ เป็น IP         (Domain Name System)\n\n✅ หน้าที่ของ DHCP (4 ข้อที่ถูกจัดเข้ากลุ่ม):\n\n• maintains an address pool → ดูแลคลัง IP ที่จะแจก (สร้างด้วย `network` ในโหมด dhcp-config)\n\n• provides local control for network segments using a client-server scheme\n  → ควบคุมการแจก IP แบบ client-server แยกตาม segment/subnet (แต่ละ subnet มี pool ของตัวเอง)\n\n• reduces the administrative burden for onboarding end users\n  → ⭐ ลดภาระผู้ดูแลมหาศาล! ลองนึกภาพต้องเดินตั้ง IP ทีละเครื่องให้พนักงาน 500 คน\n\n• assigns IP addresses to local hosts for a configurable lease time\n  → แจก IP พร้อม lease time ที่กำหนดได้ (หมดอายุ → คืนเข้า pool ให้คนอื่นใช้ต่อ)\n\n❌ ข้อความที่ไม่ถูกใช้ (เป็นของ DNS ทั้งคู่):\n\n• "associates hostnames to IP addresses" → การผูกชื่อโฮสต์กับ IP = งานของ DNS ชัดเจน\n• "uses authoritative servers for record keeping" → คำว่า authoritative server เป็นศัพท์เฉพาะของ DNS\n  (= เซิร์ฟเวอร์ที่ถือข้อมูลตัวจริงของโดเมนนั้น) DHCP ไม่มีแนวคิดนี้เลย\n\n💡 เคล็ดจำ: เห็นคำว่า name / hostname / record / authoritative → DNS เสมอ\n             เห็นคำว่า pool / lease / assign IP / scope → DHCP เสมอ\n\n📗 จำไว้สอบ: DHCP ใช้ UDP 67/68 + กระบวนการ DORA | DNS ใช้ UDP/TCP 53',
  },
  {
    id: 237,
    kind: 'single',
    prompt: 'In QoS, which prioritization method is appropriate for interactive voice and video?',
    options: [
      { key: 'A', text: 'expedited forwarding' },
      { key: 'B', text: 'traffic policing' },
      { key: 'C', text: 'round-robin scheduling' },
      { key: 'D', text: 'low-latency queuing' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เครื่องมือ QoS แต่ละตัวทำคนละหน้าที่ (อย่าสับสน):\n\n   เครื่องมือ                  ประเภท          ทำอะไร\n   -------------------------  -------------   ---------------------------------\n   ⭐ LLQ                 วิธีจัดคิว   สร้าง strict priority queue\n   (Low-Latency Queuing)      (queuing)       → เสียงได้ส่งก่อนเสมอ ไม่ต้องรอ\n                                              = CBWFQ + priority queue\n\n   CBWFQ                      วิธีจัดคิว       รับประกันแบนด์วิดท์ตามคลาส\n                                              แต่ไม่มี strict priority\n   Round-robin (WFQ)          วิธีจัดคิว       วนคิวเท่า ๆ กัน — ไม่มีใครได้สิทธิพิเศษ\n\n   EF (Expedited Forwarding)  การ marking  ค่า DSCP = 46 ที่ "ติดป้าย" ให้แพ็กเก็ตเสียง\n                              (ไม่ใช่วิธีจัดคิว!)\n   Policing                   จำกัดอัตรา       เกินโควตา → ทิ้งทันที (ทำให้เสียงแย่ลง!)\n   Shaping                    จำกัดอัตรา       เกินโควตา → เก็บใส่ buffer แล้วค่อยส่ง\n\n🔑 ความสัมพันธ์ของ EF กับ LLQ (ทำงานคู่กัน):\n   1. mark แพ็กเก็ตเสียงด้วย DSCP EF (46)  ← ติดป้ายว่า "ฉันสำคัญ"\n   2. queue แพ็กเก็ตที่ติดป้าย EF เข้า LLQ  ← เอาป้ายไปใช้จัดคิวจริง\n   → โจทย์ถามหา "prioritization method" (วิธีจัดลำดับความสำคัญ) = ขั้นที่ 2 = LLQ\n\n✅ ทำไม D ถูก: LLQ คือวิธีจัดคิวที่ให้ strict priority queue กับทราฟฟิกที่ไวต่อดีเลย์ (voice/video แบบโต้ตอบ) — แพ็กเก็ตในคิวนี้ได้ส่งออกก่อนคิวอื่นเสมอ\n\n❌ ทำไมข้ออื่นผิด:\nA. Expedited Forwarding → เป็นค่า DSCP marking (PHB) = แค่ "ติดป้าย" ไม่ใช่ "วิธีจัดคิว" ← ตัวลวงที่แนบเนียนที่สุด เพราะมันเกี่ยวข้องกับเสียงจริง แต่ตอบไม่ตรงคำถาม\nB. Traffic policing → จำกัดอัตราและทิ้งส่วนเกิน → ยิ่งทำให้เสียงแย่ลง (packet loss) ไม่ใช่การให้ priority\nC. Round-robin scheduling → วนให้ทุกคิวเท่า ๆ กัน = ไม่มีใครได้สิทธิพิเศษ → ขัดกับคำว่า "prioritization" โดยตรง\n\n📗 จำไว้สอบ: Voice = mark ด้วย DSCP EF (46) + จัดคิวด้วย LLQ — ทั้งคู่ทำงานคู่กันเสมอ',
  },
  {
    id: 238,
    kind: 'multi',
    prompt: 'Which two values or settings must be entered when configuring a new WLAN in the Cisco Wireless LAN Controller GUI? (Choose two)',
    options: [
      { key: 'A', text: 'management interface settings' },
      { key: 'B', text: 'QoS settings' },
      { key: 'C', text: 'IP address of one or more access points' },
      { key: 'D', text: 'SSID' },
      { key: 'E', text: 'Profile name' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — หน้าจอ "Create New WLAN" บน Cisco WLC ต้องกรอกอะไรบ้าง:\n\n   ช่องที่ บังคับ กรอก:\n   • ⭐ Profile Name → ชื่อโปรไฟล์ที่ใช้ "ภายใน WLC" เพื่อแยกแยะ WLAN แต่ละวง\n                          (ผู้ใช้ทั่วไปมองไม่เห็นชื่อนี้)\n   • ⭐ SSID         → ชื่อเครือข่ายที่ client มองเห็นและเลือกเชื่อมต่อ\n                          (ชื่อที่ปรากฏในรายการ Wi-Fi บนมือถือ)\n   • ID                 → หมายเลข WLAN (ปกติเลือกอัตโนมัติ)\n\n   ช่องที่ตั้ง ทีหลัง (ในแท็บ Security / QoS / Advanced):\n   • Security (WPA2, 802.1X) | QoS | AAA Override | Band Select ฯลฯ\n\n💡 Profile Name กับ SSID ต่างกันยังไง:\n   ตั้งเป็นชื่อเดียวกันก็ได้ แต่แยกกันมีประโยชน์ เช่น\n   Profile Name = "Corp-Floor3-Employees" (ให้ผู้ดูแลรู้ว่าอันไหนคืออันไหน)\n   SSID = "CompanyWiFi" (ให้ผู้ใช้เห็นชื่อสั้น ๆ สวย ๆ)\n\n✅ ทำไม D, E ถูก: SSID และ Profile Name เป็นสองค่าที่ต้องกรอกตั้งแต่หน้าจอแรกของการสร้าง WLAN — ขาดอย่างใดอย่างหนึ่งไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. management interface settings → ตั้งไว้แล้วตอน setup ตัว WLC ครั้งแรก ไม่ใช่ตอนสร้าง WLAN แต่ละวง\nB. QoS settings → เป็นการตั้งค่า เสริม ในแท็บ QoS มีค่า default อยู่แล้ว (Silver) ไม่ใช่ช่องบังคับ\nC. IP address ของ AP → AP ไม่ได้ผูกกับ WLAN โดยตรง! AP join เข้า WLC ผ่าน CAPWAP แยกต่างหาก ไม่ต้องระบุ IP ตอนสร้าง WLAN\n\n📗 จำไว้สอบ: WLAN = SSID + Profile Name + (ผูกกับ interface/VLAN) — สามอย่างนี้คือแกนหลักของการสร้าง WLAN',
  },
  {
    id: 239,
    kind: 'single',
    prompt: 'Which communication interaction takes place when a southbound API is used?',
    options: [
      { key: 'A', text: 'between the SDN controller and PCs on the network' },
      { key: 'B', text: 'between the SDN controller and switches and routers on the network' },
      { key: 'C', text: 'between the SDN controller and services and applications on the network' },
      { key: 'D', text: 'between network applications and switches and routers on the network' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ทิศทาง API ใน SDN (ทบทวน — ข้อสอบถามซ้ำหลายรูปแบบ):\n\n        [ Services / Applications ]   ← ข้างบน\n                  ↕\n           Northbound API (REST/JSON)\n                  ↕\n        ┌────────────────────┐\n        │   SDN Controller   │\n        └────────────────────┘\n                  ↕\n         ⭐ Southbound API (OpenFlow, NETCONF, RESTCONF, SNMP, CLI)\n                  ↕\n        [ Switches / Routers ]        ← ข้างล่าง (ฮาร์ดแวร์จริง)\n\n✅ ทำไม B ถูก: Southbound API = การสื่อสารระหว่าง SDN controller กับ สวิตช์และเราเตอร์ ในเครือข่าย — controller ใช้ช่องทางนี้ push flow entry / config ลงไปยังอุปกรณ์\n\n❌ ทำไมข้ออื่นผิด:\nC. controller ↔ services/applications → นั่นคือ Northbound API (ทิศตรงกันข้าม)\nA. controller ↔ PC ในเครือข่าย → controller ไม่ได้คุยกับ PC ของผู้ใช้โดยตรงเลย มันคุยกับ อุปกรณ์เครือข่าย เท่านั้น\nD. network applications ↔ สวิตช์/เราเตอร์ โดยตรง → ผิดแนวคิดของ SDN! ทุกอย่างต้องผ่าน controller เป็นตัวกลางเสมอ — แอปไม่ได้คุยกับอุปกรณ์ตรง ๆ (นั่นคือจุดขายของ SDN: มีตัวกลางคุมทุกอย่าง)\n\n💡 เคล็ดจำแบบเห็นภาพ: ให้นึกถึงแผนที่ — เหนือ (North) = ขึ้นข้างบน = แอป | ใต้ (South) = ลงข้างล่าง = อุปกรณ์\n   controller อยู่ตรงกลางเสมอ ดังนั้นทั้ง North และ South ต้องมี controller เป็นปลายข้างหนึ่งเสมอ\n\n📗 จำไว้สอบ: Southbound = OpenFlow, NETCONF, OpFlex, SNMP, CLI | Northbound = REST API',
  },
  {
    id: 240,
    kind: 'single',
    prompt: 'What prevents a workstation from receiving a DHCP address?',
    options: [
      { key: 'A', text: 'DTP' },
      { key: 'B', text: 'STP' },
      { key: 'C', text: 'VTP' },
      { key: 'D', text: '802.1Q' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ปัญหาคลาสสิก: "เสียบสายแล้วไม่ได้ IP" มักเกิดจาก STP นี่แหละ!\n\n⏱️ ไทม์ไลน์ที่เกิดขึ้นจริงเมื่อเสียบ PC เข้าพอร์ตที่ไม่ได้เปิด PortFast:\n\n   วินาทีที่ 0   → เสียบสาย, PC บูตเสร็จ ส่ง DHCP Discover ทันที\n   วินาทีที่ 0-15 → พอร์ตอยู่สถานะ Blocking/Listening → ⚠️ ทิ้งเฟรมทั้งหมด!\n                    (DHCP Discover ของ PC หายไปเฉย ๆ ไม่มีใครได้รับ)\n   วินาทีที่ 15-30 → พอร์ตอยู่สถานะ Learning → ยังทิ้งเฟรมอยู่ดี\n   วินาทีที่ 30   → พอร์ตเข้าสู่ Forwarding ในที่สุด\n                    ❌ แต่ PC timeout ไปแล้ว! → ตั้ง IP ตัวเองเป็น APIPA (169.254.x.x)\n\n🔧 ทางแก้: เปิด PortFast บนพอร์ต access\n   → ข้าม Listening/Learning ไปเลย → พอร์ต forward ได้ทันทีที่เสียบ\n   → DHCP Discover ออกไปถึง server ทัน ✔\n   → (และควรเปิด BPDU Guard คู่กันเสมอ เป็นตาข่ายนิรภัยกัน loop)\n\n✅ ทำไม B ถูก: STP คือตัวการที่หน่วงพอร์ตไว้ ~30 วินาที ทำให้ DHCP Discover ของเครื่อง timeout ก่อนที่พอร์ตจะพร้อมส่งข้อมูล\n\n❌ ทำไมข้ออื่นผิด:\nA. DTP → เจรจาว่าพอร์ตจะเป็น trunk หรือ access ไม่ได้หน่วงเวลาจนทำให้ DHCP พลาด\nC. VTP → ซิงก์ VLAN database ระหว่างสวิตช์ ไม่เกี่ยวกับการที่เครื่อง client จะได้ IP หรือไม่\nD. 802.1Q → มาตรฐานการติด VLAN tag บน trunk ไม่ได้ขัดขวางการทำงานของ DHCP\n\n💡 อาการที่ต้องจำ: ผู้ใช้บ่นว่า "บูตเครื่องแล้วต้องรอนาน / ต้องถอดเสียบสายใหม่ถึงจะได้ IP" → สงสัย PortFast ไม่ได้เปิด ทันที\n\n📗 จำไว้สอบ: PortFast แก้ปัญหา DHCP timeout | ได้ IP 169.254.x.x = APIPA = DHCP ไม่ตอบ',
  },
  {
    id: 241,
    kind: 'single',
    prompt: 'An engineer must establish a trunk link between two switches. The neighboring switch is set to trunk or desirable mode. What action should be taken?',
    options: [
      { key: 'A', text: 'configure switchport nonegotiate' },
      { key: 'B', text: 'configure switchport mode dynamic desirable' },
      { key: 'C', text: 'configure switchport mode dynamic auto' },
      { key: 'D', text: 'configure switchport trunk dynamic desirable' },
    ],
    correct: ['C'],
    explanation:
      '📘 ตาราง DTP — ต้องจำให้ขึ้นใจ (ออกสอบทุกชุด!):\n\n                        │ ฝั่งตรงข้าม เป็น...\n   ฝั่งเรา              │ trunk(on)   dynamic     dynamic    access\n                        │             desirable   auto\n   ─────────────────────┼───────────────────────────────────────────\n   trunk (on)           │ TRUNK       TRUNK       TRUNK      (พัง!)\n   dynamic desirable    │ TRUNK       TRUNK       TRUNK      access\n   ⭐ dynamic auto      │ TRUNK   TRUNK   access     access\n   access               │ (พัง!)      access      access     access\n\n🔑 กฎที่ต้องจำ:\n   • desirable = เชิงรุก → ส่ง DTP ออกไป "ขอ" เป็น trunk\n   • auto = เชิงรับ → ไม่ขอเอง แต่ "ตอบรับ" ถ้ามีใครมาขอ\n   • ⚠️ auto + auto = access! (ทั้งคู่รอกันและกัน ไม่มีใครเริ่ม → ไม่เกิด trunk)\n\n🔍 โจทย์บอกว่า: ฝั่งตรงข้ามเป็น trunk หรือ desirable → ทั้งสองแบบเป็นฝ่าย "เชิงรุก" ที่ส่ง DTP มาหาเรา\n   → เราแค่ตั้งเป็น dynamic auto (เชิงรับ) ก็ตอบรับและเกิด trunk ได้แล้ว ✔\n   → ดูตาราง: auto + trunk = TRUNK ✔ | auto + desirable = TRUNK ✔ (ได้ทั้งสองกรณี!)\n\n✅ ทำไม C ถูก: dynamic auto ตอบรับ DTP จากฝั่งที่เป็น trunk หรือ desirable ได้ทั้งคู่ → เกิด trunk ตามต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nA. switchport nonegotiate → ปิด DTP ไปเลย! ถ้าปิดแล้วไม่ได้ตั้ง `switchport mode trunk` ด้วย จะไม่เกิด trunk แน่นอน\nB. dynamic desirable → ⚠️ ทางเทคนิคใช้ได้เหมือนกัน (desirable + trunk/desirable = trunk) แต่เฉลยมาตรฐานเลือก auto เพราะโจทย์บอกว่าฝั่งตรงข้าม "เชิงรุกอยู่แล้ว" เราจึงเป็นฝ่ายรับก็พอ\nD. switchport trunk dynamic desirable → ไม่มีคำสั่งนี้ใน IOS syntax ผิด (ที่ถูกคือ `switchport mode dynamic desirable`)\n\n⚠️ ในโลกจริง: ควรปิด DTP ทั้งหมด! ตั้ง trunk ด้วยมือ + `switchport nonegotiate` เพื่อกัน VLAN hopping (switch spoofing)\n\n📗 จำไว้สอบ: auto+auto = ไม่เกิด trunk | desirable ต้องมีอย่างน้อยฝั่งหนึ่ง ถึงจะเกิด trunk',
  },
  {
    id: 242,
    kind: 'single',
    prompt: 'If a switch port receives a new frame while it is actively transmitting a previous frame, how does it process the frames?',
    options: [
      { key: 'A', text: 'The new frame is delivered first, the previous frame is dropped, and a retransmission request is sent' },
      { key: 'B', text: 'The previous frame is delivered, the new frame is dropped, and a retransmission request is sent' },
      { key: 'C', text: 'The new frame is placed in a queue for transmission after the previous frame' },
      { key: 'D', text: 'The two frames are processed and delivered at the same time' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สวิตช์มี หน่วยความจำ buffer ไว้พักเฟรมโดยเฉพาะ\n\n   พอร์ตกำลังส่งเฟรม A อยู่ ──▶ เฟรม B วิ่งเข้ามาพอดี\n                                    ↓\n                          ⭐ เข้า คิว (queue/buffer) รอ\n                                    ↓\n                          เฟรม A ส่งเสร็จ → ส่งเฟรม B ต่อทันที\n\n   → สวิตช์ทำงานแบบ store-and-forward: รับเฟรมเข้ามาเก็บใน buffer ก่อน\n     ตรวจ FCS (checksum) แล้วค่อยส่งออก → การ "พักคิว" จึงเป็นธรรมชาติของมันอยู่แล้ว\n\n✅ ทำไม C ถูก: เฟรมใหม่ถูกนำไป เข้าคิวรอส่งหลังเฟรมก่อนหน้า — ไม่มีการทิ้งเฟรมหรือขอส่งซ้ำใด ๆ ทั้งสิ้น\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B — แต่ผิด สองชั้น:\n   (1) สวิตช์ ไม่ทิ้งเฟรม เพียงเพราะพอร์ตกำลังยุ่ง (มี buffer ไว้ใช้พอดี)\n   (2) สวิตช์ ไม่มีกลไก retransmission request เลย! การขอส่งซ้ำเป็นงานของ TCP ที่ชั้น transport (Layer 4)\n       สวิตช์ทำงานที่ Layer 2 ไม่รู้จักแนวคิดนี้ด้วยซ้ำ\n   → คำตอบที่ถูกต้องคือ C\n\n❌ ทำไมข้ออื่นผิด:\nA. ส่งเฟรมใหม่ก่อน + ทิ้งเฟรมเก่า + ขอส่งซ้ำ → ผิดหมด (ไม่มีการแซงคิว ไม่มีการทิ้ง ไม่มี retransmission ที่ L2)\nB. ส่งเฟรมเก่า + ทิ้งเฟรมใหม่ + ขอส่งซ้ำ → เฟรมเก่าส่งต่อถูก แต่ เฟรมใหม่ไม่ได้ถูกทิ้ง (เข้าคิวแทน) และไม่มี retransmission request\nD. ส่งสองเฟรมพร้อมกัน → เป็นไปไม่ได้ทางกายภาพ สายเส้นหนึ่งส่งได้ทีละเฟรมเท่านั้น\n\n⚠️ กรณีเดียวที่เฟรมจะถูกทิ้งจริง: buffer เต็ม (เครือข่ายแออัดหนักมาก) → เรียกว่า tail drop\n\n📗 จำไว้สอบ: Retransmission = งานของ TCP (Layer 4) ไม่ใช่สวิตช์ (Layer 2) — เห็นคำนี้ในคำถามเรื่องสวิตช์ ให้ระวังว่าเป็นตัวลวง',
  },
  {
    id: 243,
    kind: 'single',
    prompt:
      'A wireless administrator configured a WLAN, but clients need access to a less congested 5-GHz network for voice quality. What action must be taken?',
    options: [
      { key: 'A', text: 'enable AAA override' },
      { key: 'B', text: 'enable RX-SOP' },
      { key: 'C', text: 'enable DTIM' },
      { key: 'D', text: 'enable Band Select' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ปัญหา: client ที่รองรับทั้งสองย่าน (dual-band) มักติดอยู่ที่ 2.4 GHz\n   เพราะสัญญาณแรงกว่า (ไปได้ไกลกว่า) → แต่ 2.4 GHz แออัดมาก (มีแค่ 3 ช่อง + ไมโครเวฟรบกวน)\n   → คุณภาพเสียง (voice) แย่: latency สูง, jitter เยอะ, packet loss\n\n🔧 ทางแก้ = ⭐ Band Select (บน WLC)\n   • WLC จะ "หน่วง" ไม่ตอบ probe request ที่มาจากย่าน 2.4 GHz ในตอนแรก\n   • บังคับให้ client ที่ทำได้ หันไปใช้ 5 GHz แทน (เรียกว่า band steering)\n   • ผลลัพธ์: client ย้ายไป 5 GHz ที่มีช่องเยอะกว่า 20+ ช่อง แออัดน้อยกว่า → เสียงชัดขึ้น ✔\n\n📋 ฟีเจอร์ WLC อื่นที่เอามาหลอกในข้อนี้:\n• RX-SOP (Receiver Start of Packet) → ตั้ง threshold ว่าสัญญาณต้องแรงแค่ไหน AP ถึงจะรับฟัง\n     → ใช้ตัดสัญญาณอ่อน ๆ ที่มาไกล ไม่ใช่การ steer ไปย่านอื่น\n• DTIM (Delivery Traffic Indication Map) → บอก client ที่หลับอยู่ว่าเมื่อไหร่ควรตื่นมารับ broadcast\n     → เกี่ยวกับ การประหยัดพลังงาน ของ client\n• AAA Override → ให้ RADIUS สั่ง VLAN/ACL รายผู้ใช้ (เกี่ยวกับความปลอดภัย ไม่ใช่ย่านความถี่)\n\n✅ ทำไม D ถูก: Band Select คือฟีเจอร์เดียวที่ทำหน้าที่ชักนำ (steer) client ให้ไปใช้ย่าน 5 GHz ที่แออัดน้อยกว่า — ตรงกับสิ่งที่โจทย์ต้องการเป๊ะ\n\n❌ ทำไมข้ออื่นผิด:\nA. AAA Override → เกี่ยวกับการกำหนด VLAN/ACL ตามตัวตนผู้ใช้ ไม่เกี่ยวกับย่านความถี่\nB. RX-SOP → ปรับความไวในการรับสัญญาณของ AP ไม่ได้ย้าย client ไปย่านอื่น\nC. DTIM → จัดการเรื่อง power save ของ client ไม่เกี่ยวกับการเลือกย่าน\n\n📗 จำไว้สอบ: 2.4 GHz = ไกลกว่า แต่แออัด (3 ช่อง) | 5 GHz = เร็วกว่า ช่องเยอะ (20+) แต่ระยะสั้นกว่า → เสียง/วิดีโอควรอยู่ 5 GHz',
  },
  {
    id: 244,
    kind: 'single',
    image: q244,
    prompt:
      'Refer to the exhibit. PC-2 connects to Gi1/1 and Phone-1 (with PC-1 behind it) connects to Gi1/3. PC-1 and PC-2 must be in the Data VLAN (8) and Phone-1 in the Voice VLAN (9). Which configuration meets these requirements?',
    options: [
      { key: 'A', text: 'Gi1/1: access vlan 8 | Gi1/3: switchport voice vlan 8, access vlan 9' },
      { key: 'B', text: 'Gi1/1: access vlan 9 | Gi1/3: mode trunk, trunk vlan 8, trunk vlan 9' },
      { key: 'C', text: 'Gi1/1: access vlan 8 | Gi1/3: access vlan 8, switchport voice vlan 9' },
      { key: 'D', text: 'Gi1/1: access vlan 8 | Gi1/3: mode trunk, trunk vlan 8, voice vlan 9' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — พอร์ตที่ต่อ IP Phone (มี PC ต่อพ่วงด้านหลัง) คือกรณีพิเศษ!\n\n   [Switch Gi1/3] ─── [IP Phone] ─── [PC-1]\n                        (มีสวิตช์ 3 พอร์ตในตัว)\n\n   พอร์ตเดียวต้องรองรับทราฟฟิก 2 VLAN พร้อมกัน:\n   • ⭐ Voice VLAN (9) → ทราฟฟิกเสียงจากโทรศัพท์ → ส่งแบบ tagged (802.1Q)\n   • ⭐ Data VLAN (8)  → ทราฟฟิกจาก PC ที่ต่อหลังโทรศัพท์ → ส่งแบบ untagged\n\n🔑 คำสั่งที่ถูกต้อง (นี่คือรูปแบบมาตรฐานที่ต้องท่อง):\n\n   interface gi1/3\n     switchport mode access               ← ยังเป็น access! ไม่ใช่ trunk\n     switchport access vlan 8             ← Data VLAN (สำหรับ PC)\n     switchport voice vlan 9              ← Voice VLAN (สำหรับโทรศัพท์)\n\n   ⚠️ ดูเหมือนขัดแย้ง แต่ถูกต้อง! คำสั่ง `switchport voice vlan` จะสร้าง trunk แบบพิเศษให้เอง\n      (บางทีเรียก "mini-trunk" หรือ multi-VLAN access port) โดยที่เราไม่ต้องพิมพ์ mode trunk\n      โทรศัพท์รู้ว่าต้อง tag VLAN 9 ได้จาก CDP/LLDP-MED ที่สวิตช์บอกมา\n\n✅ ทำไม C ถูก:\n   • Gi1/1 (PC-2 ต่อตรง) → `access vlan 8` ✔ ตรงตามที่โจทย์ขอ (PC อยู่ VLAN 8)\n   • Gi1/3 (โทรศัพท์+PC-1) → `access vlan 8` (สำหรับ PC-1) + `switchport voice vlan 9` (สำหรับโทรศัพท์) ✔ ครบถ้วน\n\n❌ ทำไมข้ออื่นผิด:\nA. Gi1/3 ตั้ง voice vlan 8 และ access vlan 9 → สลับกัน! โทรศัพท์จะไปอยู่ VLAN 8 (data) และ PC ไปอยู่ VLAN 9 (voice) → ผิดตรงข้ามกับที่โจทย์ต้องการ\nB. Gi1/1 ตั้ง access vlan 9 → PC-2 ควรอยู่ VLAN 8 ไม่ใช่ 9 (ผิดตั้งแต่พอร์ตแรก) แถม Gi1/3 ตั้งเป็น trunk อีก\nD. Gi1/3 ตั้งเป็น trunk → ไม่ใช่วิธีมาตรฐานสำหรับ IP phone (แม้ในทางเทคนิคจะพอทำได้ แต่ Cisco แนะนำให้ใช้ access + voice vlan เพราะปลอดภัยกว่า — พอร์ต trunk เสี่ยงต่อ VLAN hopping)\n\n📗 จำไว้สอบ: IP Phone = `switchport mode access` + `access vlan <data>` + `switchport voice vlan <voice>` — จำสูตรนี้ 3 บรรทัด',
  },
  {
    id: 245,
    kind: 'single',
    image: q245,
    prompt:
      'Refer to the exhibit. A network engineer must block all computers on VLAN 20 from accessing the web server (10.30.0.100) via HTTP. All other computers must still access it. Which configuration applied to Switch A accomplishes this?',
    options: [
      { key: 'A', text: 'wwwblock: deny tcp any host 10.30.0.100 eq 80 → applied to int vlan 10 in' },
      { key: 'B', text: 'wwwblock: deny tcp any host 10.30.0.100 eq 80 / permit ip any any → applied to int vlan 20 in' },
      { key: 'C', text: 'wwwblock: permit ip any any / deny tcp any host 10.30.0.100 eq 80 → applied to int vlan 30 in' },
      { key: 'D', text: 'wwwblock: permit ip any any / deny tcp any host 10.30.0.100 eq 80 → applied to int vlan 20 in' },
    ],
    correct: ['B'],
    explanation:
      '📘 กฎเหล็กของ ACL 2 ข้อ — ข้อนี้ทดสอบทั้งสองข้อพร้อมกัน:\n\n   กฎ 1: ⭐ ACL ทำงานจากบนลงล่าง หยุดที่บรรทัดแรกที่ match\n          → ถ้าเจอ `permit ip any any` ก่อน = ทุกอย่างผ่านหมด บรรทัดล่างไม่มีวันถูกอ่าน!\n          → ดังนั้น บรรทัด deny ต้องมาก่อน permit เสมอ\n\n   กฎ 2: ⭐ ทุก ACL มี implicit deny any ซ่อนอยู่ท้ายสุด\n          → ถ้าเขียนแค่ deny อย่างเดียว โดยไม่มี permit ต่อท้าย = บล็อกทุกอย่างหมด!\n          → ต้องปิดท้ายด้วย `permit ip any any` เพื่อปล่อยทราฟฟิกอื่นผ่าน\n\n🔍 โจทย์ต้องการ: บล็อก เฉพาะ VLAN 20 ไม่ให้เข้าเว็บเซิร์ฟเวอร์ (HTTP) แต่ VLAN อื่นเข้าได้ปกติ\n\n🔧 ACL ที่ถูกต้อง (ลำดับสำคัญมาก!):\n   ip access-list extended wwwblock\n     1️⃣ deny tcp any host 10.30.0.100 eq 80    ← บล็อก HTTP ไปเว็บเซิร์ฟเวอร์ (ต้องมาก่อน!)\n     2️⃣ permit ip any any                       ← ปล่อยทราฟฟิกอื่นทั้งหมด (กัน implicit deny)\n   interface vlan 20\n     ip access-group wwwblock in             ← ⭐ apply ที่ SVI ของ VLAN 20 ทิศ inbound\n                                                    (ดักตั้งแต่ทราฟฟิกออกจาก VLAN 20)\n\n✅ ทำไม B ถูก: เป็นตัวเลือกเดียวที่ถูกครบ ทั้ง 3 อย่าง — (1) วาง deny ก่อน permit (2) มี permit ปิดท้ายกัน implicit deny (3) apply ที่ VLAN 20 ซึ่งเป็นต้นทางที่ต้องการบล็อก\n\n❌ ทำไมข้ออื่นผิด:\nD. permit ip any any มาก่อน deny → ⚠️ ผิดกฎข้อ 1! ทุกแพ็กเก็ตจะ match บรรทัดแรกแล้วผ่านหมด บรรทัด deny ไม่มีวันถูกอ่านเลย → ACL ไร้ผลโดยสิ้นเชิง\nC. ผิดสองชั้น — ลำดับกลับด้าน (permit ก่อน) และ apply ผิด VLAN (VLAN 30 ไม่ใช่ 20)\nA. ⚠️ ผิดกฎข้อ 2! มีแต่บรรทัด deny ไม่มี `permit ip any any` ต่อท้าย → implicit deny จะบล็อกทุกอย่างของ VLAN นั้น (เน็ตดับสนิท!) แถมยัง apply ผิดที่ (VLAN 10)\n\n📗 จำไว้สอบ: Extended ACL วางใกล้ ต้นทาง (source) | Standard ACL วางใกล้ ปลายทาง (destination)',
  },
  {
    id: 246,
    kind: 'single',
    prompt: 'An engineer must configure a WLAN using the strongest encryption type for WPA2-PSK. Which cipher fulfills the requirement?',
    options: [
      { key: 'A', text: 'WEP' },
      { key: 'B', text: 'RC4' },
      { key: 'C', text: 'AES' },
      { key: 'D', text: 'TKIP' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำว่า cipher = "อัลกอริทึมการเข้ารหัส" (ไม่ใช่ชื่อมาตรฐาน!)\n\n   cipher     แกนอัลกอริทึม        ความแข็งแรง        ใช้กับ\n   --------   ------------------   ----------------   -----------------\n   ⭐ AES     block cipher (CCMP)  ✔✔ แข็งแรงที่สุด   WPA2 / WPA3\n   TKIP       ยังใช้ RC4 เป็นแกน  ~ อ่อน (เลิกใช้)  WPA รุ่นแรก\n   RC4        stream cipher         ✘ มีช่องโหว่       WEP, TKIP\n   WEP        ⚠️ ไม่ใช่ cipher!     ✘ แตกได้ในไม่กี่นาที (เป็นชื่อ "มาตรฐาน" ไม่ใช่ cipher)\n\n🔑 การจับคู่ที่ถูกต้อง (ท่องให้ขึ้นใจ):\n   • WEP  → RC4\n   • WPA  → TKIP (ซึ่งแกนก็ยังเป็น RC4 อยู่ดี → จึงยังอ่อน)\n   • ⭐ WPA2 → AES/CCMP ← โจทย์ถามอันนี้\n   • WPA3 → AES/GCMP + SAE\n\n✅ ทำไม C ถูก: AES (ที่ใช้ผ่านโหมด CCMP) คือ cipher มาตรฐานและแข็งแรงที่สุดของ WPA2 — เป็นการเข้ารหัสแบบ block cipher ที่ยังไม่มีใครเจาะได้\n\n❌ ทำไมข้ออื่นผิด:\nD. TKIP → เป็น cipher ของ WPA รุ่นแรก ออกแบบมาเป็นแค่แพตช์ชั่วคราวของ WEP แกนยังเป็น RC4 → Wi-Fi Alliance ยกเลิกการรับรองไปแล้ว (ห้ามใช้)\nB. RC4 → เป็น stream cipher ที่มีช่องโหว่ที่รู้กันดี (ใช้ใน WEP และ TKIP) → อ่อนแอ\nA. WEP → ⚠️ ไม่ใช่ cipher ด้วยซ้ำ! มันเป็นชื่อ "มาตรฐานความปลอดภัย" (ที่ใช้ RC4 เป็น cipher) และแตกได้ในไม่กี่นาทีด้วยเครื่องมือฟรี\n\n💡 อ่านโจทย์ให้ดี: ถามหา "cipher" ไม่ใช่ "มาตรฐาน" → WEP จึงตอบไม่ได้ตั้งแต่แรกเพราะมันไม่ใช่ cipher\n\n📗 จำไว้สอบ: WPA2-PSK ต้องคู่กับ AES เสมอ — ถ้าเห็น "WPA2 + TKIP" ในตัวเลือก ให้รู้ว่าเป็นการตั้งค่าที่ผิด/ล้าสมัย',
  },
  {
    id: 247,
    kind: 'single',
    image: q247,
    prompt:
      'Refer to the exhibit. The New York router has static routes to Atlanta and Washington. Which command must be configured on the Atlanta and Washington routers so both sites can reach the loopback2 interface on New York?',
    options: [
      { key: 'A', text: 'ipv6 route ::/0 Serial 0/0' },
      { key: 'B', text: 'ipv6 route 0/0 Serial 0/0/0' },
      { key: 'C', text: 'ipv6 route ::/0 Serial 0/0/0' },
      { key: 'D', text: 'ip route 0.0.0.0 0.0.0.0 Serial 0/0/0' },
      { key: 'E', text: 'ipv6 route ::/0 2000::2' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Default route ของ IPv6 กับ IPv4 เขียนต่างกัน:\n\n   IPv4: ip route 0.0.0.0 0.0.0.0 <next-hop หรือ interface>\n   IPv6: ⭐ ipv6 route ::/0 <next-hop หรือ interface>\n\n   → "::/0" แปลว่า "ปลายทางอะไรก็ได้ทั้งหมด" (เทียบเท่า 0.0.0.0/0 ของ IPv4)\n   → เรียกว่า gateway of last resort = ใช้เมื่อไม่มี route ไหนตรงเลย\n\n🔍 สถานการณ์ในโจทย์:\n   Atlanta ═══(serial เส้นเดียว)═══ New York ═══(serial)═══ Washington\n                                      Lo2 = ปลายทางที่ต้องไปให้ถึง\n\n   → Atlanta และ Washington เป็น stub site (ทางออกมีเส้นเดียว!)\n   → ไม่ต้องเขียน route เจาะจงให้ยุ่งยาก → ใช้ default route ชี้ออกทาง serial ก็พอ\n   → ทราฟฟิกทั้งหมด (รวมถึงที่ไป loopback2 ของ NY) วิ่งออกทางนั้นหมด ✔\n\n✅ ทำไม C ถูก: `ipv6 route ::/0 Serial 0/0/0` — syntax ถูกต้องครบ: ใช้ `ipv6 route`, ใช้ prefix `::/0`, และระบุอินเทอร์เฟซ Serial 0/0/0 ที่มีอยู่จริงตาม exhibit\n\n❌ ทำไมข้ออื่นผิด:\nA. `ipv6 route ::/0 Serial 0/0` → syntax ถูก แต่ ชื่ออินเทอร์เฟซผิด! ใน exhibit เป็น Serial 0/0/0 (สามหลัก) ← กับดักที่ต้องอ่าน exhibit ให้ละเอียด\nB. `ipv6 route 0/0 ...` → syntax ผิด IPv6 ต้องเขียน `::/0` ไม่ใช่ `0/0` (เอา IPv4 มาปนกับ IPv6)\nD. `ip route 0.0.0.0 0.0.0.0 ...` → นี่คือคำสั่ง IPv4! โจทย์เป็น IPv6 (loopback2 เป็น IPv6 address)\nE. `ipv6 route ::/0 2000::2` → 2000::2 เป็น loopback address ของ NY ไม่ใช่ IP ของ next-hop บนลิงก์ serial → เราเตอร์จะหาทางไปไม่เจอ (recursive lookup ล้มเหลว)\n\n💡 บนลิงก์ point-to-point (serial) ระบุ ชื่ออินเทอร์เฟซขาออก ได้เลย ไม่ต้องใส่ next-hop IP\n   (เพราะมีปลายทางเดียวอยู่แล้ว ส่งออกไปยังไงก็ถึงอีกฝั่ง)\n\n📗 จำไว้สอบ: IPv6 default route = ::/0 | IPv4 default route = 0.0.0.0 0.0.0.0 — อย่าเขียนสลับกัน',
  },
  {
    id: 248,
    kind: 'drag',
    image: q248,
    prompt: 'Drag and drop the Cisco Wireless LAN Controller security settings from the left onto the correct security-mechanism categories on the right.',
    categories: [
      { name: 'Layer 2 Security Mechanisms', items: ['802.1X', 'WPA+WPA2'] },
      { name: 'Layer 3 Security Mechanisms (for WLAN)', items: ['web policy', 'Passthrough'] },
    ],
    explanation:
      '📘 แนวคิด — WLC แบ่งความปลอดภัยเป็น 2 ชั้น แยกตาม "จังหวะที่ตรวจสอบ"\n\n   ⏱️ ลำดับเวลาที่ client เข้าเครือข่าย:\n   1. เชื่อมต่อกับ AP → ⭐ Layer 2 security ตรวจตรงนี้ (ก่อนได้ IP ด้วยซ้ำ)\n   2. ได้ IP จาก DHCP\n   3. เปิดเบราว์เซอร์ → ⭐ Layer 3 security ตรวจตรงนี้ (หลังมี IP แล้ว)\n\n✅ 🔹 Layer 2 Security Mechanisms (ตรวจตอนเชื่อมต่อ ก่อนได้ IP):\n   • 802.1X → พิสูจน์ตัวตนรายผู้ใช้ผ่าน RADIUS/EAP (enterprise)\n   • WPA+WPA2 → การเข้ารหัสและพิสูจน์ตัวตนระดับเฟรมไร้สาย (AES/CCMP)\n   → ⭐ ถ้าไม่ผ่านชั้นนี้ = เชื่อมต่อกับ AP ไม่ได้เลย (ไม่ได้ IP ด้วย)\n\n✅ 🔹 Layer 3 Security Mechanisms (ตรวจหลังได้ IP แล้ว):\n   • Web Policy → ⭐ Web Authentication — เด้งหน้าเว็บให้ใส่ username/password\n                      (แบบที่เจอในโรงแรม/สนามบิน = captive portal)\n   • Passthrough → Web Passthrough — เด้งหน้าเว็บให้กด "ยอมรับเงื่อนไข" เฉย ๆ\n                       ไม่ต้องใส่รหัสผ่าน (แบบที่เจอตามร้านกาแฟ)\n   → ชั้นนี้ทำงานได้ก็ต่อเมื่อ client มี IP แล้ว (ต้องมี IP ถึงจะเปิดเบราว์เซอร์ได้)\n\n💡 เคล็ดจำ: L2 = ก่อนได้ IP (เข้ารหัสสัญญาณ) | L3 = หลังได้ IP (หน้าเว็บล็อกอิน)\n   → ที่ร้านกาแฟ: ต่อ Wi-Fi ได้เลย (L2 = None/Open) แต่ต้องกดยอมรับหน้าเว็บก่อน (L3 = Passthrough)\n\n📗 จำไว้สอบ: Guest network มักตั้ง L2 = Open/None + L3 = Web Auth (captive portal)',
  },
  {
    id: 249,
    kind: 'single',
    prompt: 'Which unified access point mode continues to serve wireless clients after losing connectivity to the Cisco Wireless LAN Controller?',
    options: [
      { key: 'A', text: 'sniffer' },
      { key: 'B', text: 'mesh' },
      { key: 'C', text: 'flexconnect' },
      { key: 'D', text: 'local' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โหมดของ Lightweight AP (ต้องแยกให้ออก):\n\n   โหมด             ทราฟฟิกวิ่งยังไง              WLC ขาด → ยังใช้ได้?\n   --------------   ---------------------------   -----------------------\n   Local        tunnel ทุกอย่างกลับไป WLC     ❌ บริการหยุด!\n   (ค่าเริ่มต้น)     ผ่าน CAPWAP                    (AP ไม่มีสมองของตัวเอง)\n\n   ⭐ FlexConnect switch ทราฟฟิกในสาขาเองได้    ✔ ยังให้บริการต่อได้!\n   (เดิมชื่อ H-REAP) (local switching)              → เข้าสู่ Standalone mode\n\n   Sniffer          ดักจับแพ็กเก็ตไร้สายเพื่อวิเคราะห์  (ไม่ให้บริการ client อยู่แล้ว)\n   Monitor          สแกนหา rogue AP / IDS          (ไม่ให้บริการ client)\n   Mesh/Bridge      ต่อ AP ถึงกันแบบไร้สาย         (เป็นเรื่องของการเชื่อมโยง ไม่ใช่ survivability)\n\n🔑 FlexConnect มี 2 สถานะ:\n   • Connected mode → ติดต่อ WLC ได้ปกติ (ทำงานเหมือน local mode)\n   • ⭐ Standalone mode → WLC ขาดการติดต่อ! AP สลับมาทำงานเองอัตโนมัติ\n     → ยัง authenticate client ได้ (ถ้าตั้ง local auth ไว้)\n     → ยัง switch ทราฟฟิกภายในสาขาได้ → client ยังใช้งานต่อได้\n\n💡 ทำไม FlexConnect ถึงเกิดมา: สำหรับสาขาย่อย (branch office)\n   สาขาเล็ก ๆ ไม่คุ้มที่จะซื้อ WLC ไปตั้ง แต่ถ้าใช้ local mode แล้วลิงก์ WAN ไปสำนักงานใหญ่ล่ม\n   → Wi-Fi ทั้งสาขาดับหมด! FlexConnect แก้ปัญหานี้พอดี\n\n✅ ทำไม C ถูก: FlexConnect เป็นโหมดเดียวที่ AP ยังให้บริการ client ต่อได้ (เข้าสู่ standalone mode) แม้ขาดการเชื่อมต่อกับ WLC\n\n❌ ทำไมข้ออื่นผิด:\nD. local mode → ตรงข้ามเลย! ทราฟฟิกทั้งหมดต้อง tunnel ผ่าน CAPWAP ไปที่ WLC → WLC หาย = AP ทำอะไรไม่ได้ client หลุดหมด\nA. sniffer mode → AP กลายเป็นเครื่องมือดักจับแพ็กเก็ตเพื่อ troubleshoot ไม่ได้ให้บริการ client ตั้งแต่แรก\nB. mesh mode → ใช้เชื่อม AP เข้าหากันแบบไร้สาย (ที่ที่เดินสายไม่ได้) ไม่ใช่โหมดที่ตอบโจทย์เรื่อง WLC ขาดการเชื่อมต่อ\n\n📗 จำไว้สอบ: Local = ทุกอย่างผ่าน WLC (WLC ล่ม = ดับ) | FlexConnect = สาขาเอาตัวรอดเองได้',
  },
  {
    id: 250,
    kind: 'single',
    prompt: 'What is a difference between RADIUS and TACACS+?',
    options: [
      { key: 'A', text: 'RADIUS is most appropriate for dial authentication, but TACACS+ can be used for multiple types of authentication' },
      { key: 'B', text: 'TACACS+ encrypts only password information and RADIUS encrypts the entire payload' },
      { key: 'C', text: 'TACACS+ separates authentication and authorization, and RADIUS merges them' },
      { key: 'D', text: 'RADIUS logs all commands entered by the administrator, but TACACS+ logs only start, stop, and interim commands' },
    ],
    correct: ['C'],
    explanation:
      '📘 ตารางเปรียบเทียบ RADIUS vs TACACS+ (ท่องตารางนี้ ตอบได้ทุกข้อเรื่อง AAA):\n\n   หัวข้อ              RADIUS                    ⭐ TACACS+\n   ----------------   -----------------------   ---------------------------\n   ผู้พัฒนา            มาตรฐานเปิด (RFC)          Cisco proprietary\n   Transport          UDP (1812/1813)        TCP (49)\n   การเข้ารหัส         ⚠️ เข้ารหัส แค่รหัสผ่าน  ✔ เข้ารหัส ทั้ง payload\n   AAA                ⚠️ รวม Authentication   ⭐ แยก ทั้ง 3 ส่วนออกจากกัน\n                       + Authorization เข้าด้วยกัน   (Authen / Author / Acct)\n   เหมาะกับ           ผู้ใช้ปลายทาง (802.1X,      ผู้ดูแลอุปกรณ์\n                      Wi-Fi, VPN, dial-up)       (คุมว่าใครพิมพ์คำสั่งอะไรได้)\n   คุม command ได้    ✘ ไม่ละเอียด                ✔ ละเอียดถึงระดับคำสั่ง\n\n✅ ทำไม C ถูก: TACACS+ แยก Authentication / Authorization / Accounting ออกจากกันเป็นอิสระ ส่วน RADIUS รวม Authentication กับ Authorization ไว้ด้วยกัน (ตอบ Access-Accept ก็ส่ง authorization attribute มาพร้อมกันเลย)\n\n💡 ทำไมการ "แยก" ถึงสำคัญ: TACACS+ ตรวจ authorization ได้ ทุกครั้งที่พิมพ์คำสั่ง\n   → admin คนนี้พิมพ์ `show` ได้ แต่พิมพ์ `configure terminal` ไม่ได้\n   → RADIUS ทำแบบนี้ไม่ได้เพราะ authorization ถูกส่งมาครั้งเดียวตอนล็อกอิน\n   → ⭐ นี่คือเหตุผลที่ TACACS+ เหมาะกับการคุมผู้ดูแลอุปกรณ์ ส่วน RADIUS เหมาะกับผู้ใช้ทั่วไป\n\n❌ ทำไมข้ออื่นผิด:\nB. "TACACS+ เข้ารหัสแค่รหัสผ่าน / RADIUS เข้ารหัสทั้ง payload" → ⚠️ สลับกันเลย! ความจริงคือ TACACS+ เข้ารหัสทั้ง payload ส่วน RADIUS เข้ารหัสแค่ช่องรหัสผ่าน (ข้อมูลอื่นวิ่งเปิดเผย) ← ตัวลวงที่คนพลาดบ่อยที่สุด\nA. "RADIUS เหมาะกับ dial authentication เท่านั้น" → RADIUS ย่อมาจาก Remote Authentication Dial-In User Service ก็จริง (ที่มาของชื่อ) แต่ปัจจุบันใช้กับ 802.1X, Wi-Fi, VPN ได้หมด → ไม่ได้จำกัดแค่ dial\nD. "RADIUS log ทุกคำสั่ง / TACACS+ log แค่ start-stop" → สลับกันอีกเช่นกัน! TACACS+ ต่างหากที่ log ได้ละเอียดถึงระดับคำสั่ง\n\n📗 จำไว้สอบ: TACACS+ = TCP + Total encryption + แยก AAA + คุม admin | RADIUS = UDP + เข้ารหัสแค่ password + คุม end user',
  },
  {
    id: 251,
    kind: 'single',
    prompt: 'What is a syslog facility?',
    options: [
      { key: 'A', text: 'Host that is configured for the system to send log messages' },
      { key: 'B', text: 'password that authenticates a Network Management System to receive log messages' },
      { key: 'C', text: 'group of log messages associated with the configured severity level' },
      { key: 'D', text: 'set of values that represent the processes that can generate a log message' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด: ข้อความ syslog ทุกอันมี 2 ค่าประกอบกัน คือ Facility (แหล่ง/กระบวนการที่สร้าง log) และ Severity (ระดับความรุนแรง 0–7)\n• Facility = "ใครเป็นคนสร้าง log" เช่น kernel, mail, auth, daemon และบน Cisco นิยมใช้ local0–local7\n• Severity = "log นี้รุนแรงแค่ไหน" (0 emergency … 7 debugging)\n\n✅ ทำไม D ถูก: Facility คือชุดของค่า (set of values) ที่ใช้ระบุว่ากระบวนการใดบนอุปกรณ์เป็นผู้สร้าง log message นั้น เช่นบนสวิตช์ กระบวนการ CDP, SNMP, OSPF ต่างก็สร้าง log ได้ — Facility คือรหัสที่บอกว่ามาจากตัวไหน คำสั่งบน Cisco คือ "logging facility local7"\n\n❌ ทำไมข้ออื่นผิด:\nA. โฮสต์ปลายทางที่รับ log = syslog server ตั้งด้วย "logging <ip>" ไม่ใช่ facility\nB. syslog ไม่มีระบบรหัสผ่าน (ใช้ UDP 514 แบบไม่ authenticate) — การ authenticate NMS เป็นเรื่องของ SNMP community/SNMPv3\nC. การจัดกลุ่ม log ตามความรุนแรงคือ Severity level ไม่ใช่ Facility\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C ซึ่งสับสนระหว่าง Facility กับ Severity — ตามนิยาม syslog (RFC 5424) และเนื้อหา CCNA คำตอบที่ถูกต้องคือ D',
  },
  {
    id: 252,
    kind: 'multi',
    prompt: 'What are two characteristics of a public cloud implementation? (Choose two)',
    options: [
      { key: 'A', text: 'It is owned and maintained by one party, but it is shared among multiple organizations' },
      { key: 'B', text: 'It enables an organization to fully customize how it deploys network resources' },
      { key: 'C', text: 'It provides services that are accessed over the Internet' },
      { key: 'D', text: 'It is a data center on the public Internet that maintains cloud services for only one company' },
      { key: 'E', text: 'It supports network resources from a centralized third-party provider and privately-owned virtual resources' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — Cloud deployment models (ต้องแยกให้ออก):\n• Public cloud = ผู้ให้บริการรายเดียว (AWS/Azure/GCP) เป็นเจ้าของและดูแล แล้วให้หลายองค์กรเช่าใช้ร่วมกัน (multi-tenant) เข้าถึงผ่านอินเทอร์เน็ต\n• Private cloud = ใช้เฉพาะองค์กรเดียว ปรับแต่งได้เต็มที่\n• Hybrid cloud = ผสม public + private เข้าด้วยกัน\n\n✅ ทำไม A ถูก: "เจ้าของรายเดียวดูแล แต่แชร์ให้หลายองค์กร" คือนิยามตรงตัวของ multi-tenancy ใน public cloud\n✅ ทำไม C ถูก: บริการ public cloud เข้าถึงผ่านอินเทอร์เน็ต ไม่ต้องมีโครงสร้างในองค์กร\n\n❌ ทำไมข้ออื่นผิด:\nB. การปรับแต่ง (customize) ได้เต็มที่เป็นจุดเด่นของ private cloud — public cloud ผู้ใช้ควบคุมได้จำกัดตามที่ provider เปิดให้\nD. "ดูแลบริการให้บริษัทเดียว" = private cloud (single-tenant) ไม่ใช่ public\nE. "ผสมทรัพยากรจาก third-party provider กับ virtual resource ที่เป็นของตัวเอง" = นิยามของ HYBRID cloud\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C,E แต่ E คือ hybrid cloud ไม่ใช่ public — คำตอบที่ถูกต้องคือ A,C',
  },
  {
    id: 253,
    kind: 'single',
    image: q253,
    prompt:
      'Refer to the exhibit. How does router R1 handle traffic to 192.168.10.16?\n\nD    192.168.10.0/24 [90/2679326] via 192.168.1.1\nR    192.168.10.0/27 [120/3]     via 192.168.1.2\nO    192.168.10.0/23 [110/2]     via 192.168.1.3\ni L1 192.168.10.0/13 [115/30]    via 192.168.1.4',
    options: [
      { key: 'A', text: 'It selects the IS-IS route because it has the shortest prefix inclusive of the destination address' },
      { key: 'B', text: 'It selects the EIGRP route because it has the lowest administrative distance' },
      { key: 'C', text: 'It selects the OSPF route because it has the lowest cost' },
      { key: 'D', text: 'It selects the RIP route because it has the longest prefix inclusive of the destination address' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิดสำคัญที่สุด — ลำดับการตัดสินใจ forward ของ router:\n1️⃣ Longest Prefix Match (prefix ยาวที่สุด/เจาะจงที่สุด) ← ตัดสินก่อนเสมอ\n2️⃣ ถ้า prefix เท่ากัน จึงเทียบ Administrative Distance (AD)\n3️⃣ ถ้า AD เท่ากันอีก จึงเทียบ Metric\n\n✅ วิเคราะห์: ปลายทาง 192.168.10.16 อยู่ในช่วงของ route ใดบ้าง?\n• /27 (RIP) → 192.168.10.0–192.168.10.31 → ครอบคลุม .16 ✔\n• /24 (EIGRP) → 192.168.10.0–.255 → ครอบคลุม ✔\n• /23 (OSPF) → 192.168.10.0–192.168.11.255 → ครอบคลุม ✔\n• /13 (IS-IS) → ครอบคลุม ✔\nทั้ง 4 เส้นครอบคลุมหมด แต่ /27 เป็น prefix ที่ยาวที่สุด → router เลือก route ของ RIP\n\n❌ ทำไมข้ออื่นผิด:\nB. AD ของ EIGRP (90) ต่ำสุดจริง แต่ AD จะถูกใช้ก็ต่อเมื่อ prefix ยาวเท่ากันเท่านั้น — ที่นี่ prefix ไม่เท่ากัน AD จึงไม่ถูกนำมาใช้ (นี่คือกับดักยอดฮิตของข้อสอบ!)\nC. cost/metric ใช้เทียบภายในโปรโตคอลเดียวกัน ไม่ใช่ข้ามโปรโตคอล\nA. IS-IS มี prefix สั้นที่สุด (/13) จึงถูกเลือกเป็นอันดับสุดท้าย ไม่ใช่อันดับแรก\n\n📗 ตาราง AD ที่ต้องจำ: Connected 0 • Static 1 • eBGP 20 • EIGRP 90 • OSPF 110 • IS-IS 115 • RIP 120 • iBGP 200',
  },
  {
    id: 254,
    kind: 'single',
    prompt: 'What role does a hypervisor provide for each virtual machine in server virtualization?',
    options: [
      { key: 'A', text: 'infrastructure-as-a-service' },
      { key: 'B', text: 'software-as-a-service' },
      { key: 'C', text: 'control and distribution of physical resources' },
      { key: 'D', text: 'services as a hardware controller' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด: Hypervisor (เช่น VMware ESXi, Hyper-V, KVM) คือซอฟต์แวร์ชั้นกลางระหว่างฮาร์ดแวร์จริงกับ VM ทำหน้าที่สร้าง VM และ "จัดสรร + ควบคุม" ทรัพยากรกายภาพ (CPU, RAM, disk, NIC) แบ่งให้แต่ละ VM ใช้งาน\n\n✅ ทำไม C ถูก: หน้าที่หลักของ hypervisor คือ control and distribution of physical resources — คือแบ่งปันฮาร์ดแวร์จริงให้ VM หลายตัวใช้ร่วมกันอย่างเป็นสัดส่วนและแยกจากกัน (isolation)\n\n❌ ทำไมข้ออื่นผิด:\nA. IaaS เป็น "โมเดลบริการคลาวด์" (ขายทรัพยากรพื้นฐานให้เช่า) ไม่ใช่บทบาทของ hypervisor — แม้ IaaS จะใช้ hypervisor อยู่เบื้องหลังก็ตาม\nB. SaaS เป็นโมเดลบริการซอฟต์แวร์สำเร็จรูป ไม่เกี่ยวกับ hypervisor\nD. hypervisor ไม่ใช่ "hardware controller" — มันเป็นซอฟต์แวร์ที่จำลอง (abstract) ฮาร์ดแวร์ให้ VM เห็น\n\n📗 จำไว้: Type 1 hypervisor = ติดตั้งบน bare-metal โดยตรง (ESXi) • Type 2 = ติดตั้งบน OS อีกที (VirtualBox)',
  },
  {
    id: 255,
    kind: 'single',
    prompt: 'What is the function of a server?',
    options: [
      { key: 'A', text: 'It transmits packets between hosts in the same broadcast domain' },
      { key: 'B', text: 'It provides shared applications to end users' },
      { key: 'C', text: 'It routes traffic between Layer 3 devices' },
      { key: 'D', text: 'It creates security zones between trusted and untrusted networks' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด: Server คือเครื่องที่รันแอปพลิเคชัน/บริการ (web, file, mail, database) ไว้ให้ client หลายเครื่องเรียกใช้ร่วมกันตามโมเดล client-server\n\n✅ ทำไม B ถูก: หน้าที่ของ server คือให้บริการแอปพลิเคชันแบบแชร์แก่ผู้ใช้ปลายทาง (shared applications to end users)\n\n❌ ทำไมข้ออื่นผิด — แต่ละข้อคือหน้าที่ของ "อุปกรณ์อื่น":\nA. การส่ง packet ภายใน broadcast domain เดียวกัน = หน้าที่ของ Switch (Layer 2)\nC. การ route ระหว่างเครือข่าย Layer 3 = หน้าที่ของ Router\nD. การสร้าง security zone แบ่ง trusted/untrusted = หน้าที่ของ Firewall\n\n📗 กับดัก: ข้อสอบชอบเอาหน้าที่ของ switch/router/firewall มาเป็นตัวลวงในคำถามเกี่ยวกับ server เสมอ',
  },
  {
    id: 256,
    kind: 'single',
    image: q256,
    prompt:
      'Refer to the exhibit. What is the effect of this configuration?\n\nip arp inspection vlan 5-10\ninterface fastethernet 0/1\n  switchport mode access\n  switchport access vlan 5',
    options: [
      { key: 'A', text: 'All ARP packets are dropped by the switch' },
      { key: 'B', text: 'Egress traffic is passed only if the destination is a DHCP server' },
      { key: 'C', text: 'All ingress and egress traffic is dropped because the interface is untrusted' },
      { key: 'D', text: 'The switch discards all ingress ARP traffic with invalid MAC-to-IP address bindings' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Dynamic ARP Inspection (DAI): เป็นฟีเจอร์ป้องกัน ARP spoofing/ARP poisoning\n• เปิดด้วย "ip arp inspection vlan <list>"\n• DAI จะดักตรวจ ARP ที่เข้ามาบนพอร์ต untrusted แล้วเทียบกับ DHCP snooping binding database (ตาราง IP↔MAC↔port ที่ได้จากการแอบดู DHCP)\n• ถ้า MAC-to-IP binding ไม่ตรง → ทิ้ง ARP นั้น\n• ทุกพอร์ตเป็น untrusted โดยค่าเริ่มต้น (พอร์ตที่ต่อ uplink/DHCP server ต้องตั้ง "ip arp inspection trust")\n\n✅ ทำไม D ถูก: config นี้เปิด DAI บน VLAN 5–10 และ Fa0/1 อยู่ใน VLAN 5 (เป็น untrusted) → สวิตช์จะตรวจ ARP ขาเข้าทุกอันบนพอร์ตนี้ และทิ้งอันที่มี MAC-to-IP binding ไม่ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nA. DAI ไม่ได้ทิ้ง ARP ทั้งหมด — ทิ้งเฉพาะอันที่ binding ไม่ถูกต้อง (ARP ที่ถูกต้องยังผ่านได้ปกติ)\nB. DAI ตรวจ ARP ไม่ได้กรอง egress traffic ตามปลายทางว่าเป็น DHCP server หรือไม่\nC. DAI ไม่ได้บล็อกทราฟฟิกทั้งหมด — กระทบเฉพาะ ARP เท่านั้น ทราฟฟิกอื่น (IP, TCP) ผ่านได้ตามปกติ\n\n📗 คู่หูที่ต้องจำ: DAI ทำงานได้ดีต้องมี DHCP snooping เปิดก่อน (เพื่อสร้าง binding table)',
  },
  {
    id: 257,
    kind: 'single',
    prompt: 'What is a characteristic of private IPv4 addressing?',
    options: [
      { key: 'A', text: 'traverse the Internet when an outbound ACL is applied' },
      { key: 'B', text: 'issued by IANA in conjunction with an autonomous system number' },
      { key: 'C', text: 'composed of up to 65,536 available addresses' },
      { key: 'D', text: 'used without tracking or registration' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Private IPv4 (RFC 1918): ใครก็ใช้ได้อย่างอิสระภายในเครือข่ายตัวเอง ไม่ต้องขอ ไม่ต้องจดทะเบียนกับใคร และ ISP จะไม่ route address เหล่านี้บนอินเทอร์เน็ต\nช่วงที่ต้องจำ:\n• 10.0.0.0/8 → 10.0.0.0 – 10.255.255.255\n• 172.16.0.0/12 → 172.16.0.0 – 172.31.255.255\n• 192.168.0.0/16 → 192.168.0.0 – 192.168.255.255\n\n✅ ทำไม D ถูก: private address ใช้ได้เลยโดยไม่ต้องลงทะเบียนหรือถูกติดตามจากองค์กรใด (used without tracking or registration) — ต่างจาก public address ที่ต้องขอจัดสรรจาก IANA/RIR\n\n❌ ทำไมข้ออื่นผิด:\nA. private address ออกอินเทอร์เน็ตไม่ได้ไม่ว่าจะใส่ ACL อย่างไร — ต้องแปลงเป็น public ผ่าน NAT/PAT เท่านั้น\nB. IANA จัดสรร public address และ ASN — private address ไม่ต้องขอจาก IANA\nC. จำนวน address ขึ้นกับช่วงที่ใช้ (10.0.0.0/8 มีกว่า 16 ล้าน address) ไม่ได้จำกัดที่ 65,536',
  },
  {
    id: 258,
    kind: 'single',
    image: q258,
    prompt:
      'Refer to the exhibit. R1 Gi1/0 (mtu 1600, 192.168.0.1/30) connects to R2 Gi2/0 (192.168.0.2/30). Both run OSPF process 1, area 0, with matching network statements. Which configuration issue is preventing the OSPF neighbor relationship from being established?',
    options: [
      { key: 'A', text: 'R2 is using the passive-interface default command' },
      { key: 'B', text: 'R1 has an incorrect network command for interface Gi1/0' },
      { key: 'C', text: 'R2 should have its network command in area 1' },
      { key: 'D', text: 'R1 interface Gi1/0 has a larger MTU size' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เงื่อนไขที่ต้องตรงกันเพื่อให้ OSPF เกิด neighbor/adjacency:\n1. อยู่ subnet เดียวกัน (และ subnet mask ตรงกัน) ✔ ที่นี่ตรง (/30)\n2. Area ID ตรงกัน ✔ ทั้งคู่ area 0\n3. Hello / Dead timer ตรงกัน ✔\n4. Authentication ตรงกัน ✔\n5. ⭐ MTU ตรงกัน ← ตรงนี้แหละที่ไม่ตรง!\n6. Router ID ต้องไม่ซ้ำกัน ✔ (1.1.1.1 vs 2.2.2.2)\n7. OSPF network type / Stub flag ตรงกัน ✔\n\n✅ ทำไม D ถูก: R1 Gi1/0 ตั้ง "mtu 1600" ส่วน R2 Gi2/0 ใช้ค่าเริ่มต้น 1500 → MTU mismatch\nผลคือ neighbor จะค้างอยู่ที่สถานะ EXSTART/EXCHANGE (เห็น neighbor แต่แลก LSDB ไม่สำเร็จ) และ adjacency ไม่ FULL\n\n❌ ทำไมข้ออื่นผิด:\nA. R2 ใช้ "passive-interface default" จริง แต่มี "no passive-interface GigabitEthernet2/0" กำกับไว้ → พอร์ตที่เชื่อมกันจึงไม่ passive แล้ว ไม่ใช่ปัญหา\nB. network 192.168.0.1 0.0.0.0 area 0 ถูกต้อง (wildcard 0.0.0.0 = match เฉพาะ IP นั้นพอดี เป็นวิธีที่นิยมใช้)\nC. ทั้งสองฝั่งต้องอยู่ area เดียวกัน — การให้ R2 ย้ายไป area 1 จะยิ่งทำให้ area mismatch พังหนักกว่าเดิม\n\n📗 คำสั่งตรวจ: show ip ospf interface | show ip ospf neighbor (ถ้าค้างที่ EXSTART ให้สงสัย MTU ทันที)',
  },
  {
    id: 259,
    kind: 'single',
    image: q259,
    prompt:
      'Refer to the exhibit. A packet is sent across router R1 to host 172.163.3.14. The routing table has a default route (S* 0.0.0.0/0 via 209.165.200.246) plus routes for 172.16.3.0/24 and 172.16.3.0/28. To which destination does the router send the packet?',
    options: [
      { key: 'A', text: '209.165.200.246 (the default route / gateway of last resort)' },
      { key: 'B', text: '209.165.200.254 via the OSPF route to 172.16.3.0/28' },
      { key: 'C', text: '209.165.200.250 via the static route to 172.16.3.0/24' },
      { key: 'D', text: 'The packet is dropped because no route matches' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด: router จับคู่ปลายทางกับ routing table ด้วย Longest Prefix Match ถ้าไม่มี route ใดตรงเลย จึงใช้ default route (gateway of last resort) ถ้าไม่มี default route ด้วยจึงทิ้ง packet\n\n✅ วิเคราะห์ทีละขั้น — จุดสำคัญคือ "อ่านเลขให้ดี":\nปลายทางคือ 172.163.3.14 (หนึ่งร้อยหกสิบสาม) ไม่ใช่ 172.16.3.14!\n• route 172.16.3.0/24 → ครอบคลุม 172.16.3.0–172.16.3.255 → ❌ ไม่ครอบคลุม 172.163.x.x\n• route 172.16.3.0/28 → ❌ ไม่ครอบคลุมเช่นกัน\n• ไม่มี route เฉพาะเจาะจงใดตรงกับ 172.163.3.14 เลย\n→ จึงตกไปใช้ default route S* 0.0.0.0/0 via 209.165.200.246 ✔\n\n❌ ทำไมข้ออื่นผิด:\nB, C. เป็น next-hop ของ route 172.16.3.0 ซึ่งไม่เกี่ยวกับปลายทาง 172.163.3.14 เลย (กับดักคือหลอกให้เผลออ่านเป็น 172.16.3.x)\nD. ไม่ถูกทิ้ง เพราะมี default route รองรับอยู่ (บรรทัด S* คือ gateway of last resort)\n\n📗 บทเรียน: ข้อสอบ CCNA ชอบเปลี่ยนเลข octet เล็กน้อย (172.16 → 172.163) เพื่อทดสอบว่าคุณอ่านละเอียดไหม',
  },
  {
    id: 260,
    kind: 'drag',
    image: q260,
    prompt: 'Drag and drop the characteristics of networking from the left onto the correct networking types on the right.',
    categories: [
      {
        name: 'Controller-Based Networking',
        items: ['focused on network', 'uses white list security model', 'user input is a policy'],
      },
      {
        name: 'Traditional Networking',
        items: ['focused on devices', 'uses black list security model', 'user input is a configuration'],
      },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ 2 แนวทาง:\n\n🔹 Controller-Based (SDN / Cisco DNA Center):\n• focused on network → มองภาพรวมทั้งเครือข่ายเป็นหนึ่งเดียว (ไม่ใช่ทีละกล่อง)\n• user input is a policy → ผู้ดูแลบอก "เจตนา/นโยบาย" (intent) เช่น "ให้ HR คุยกับ Finance ไม่ได้" แล้ว controller แปลงเป็น config เอง\n• uses white list security model → ปฏิเสธทุกอย่างเป็นค่าเริ่มต้น แล้วอนุญาตเฉพาะที่ระบุ (deny by default, permit ที่จำเป็น) ซึ่งปลอดภัยกว่า\n\n🔹 Traditional Networking:\n• focused on devices → ตั้งค่าทีละอุปกรณ์ผ่าน CLI\n• user input is a configuration → ผู้ดูแลพิมพ์คำสั่ง config เองทุกบรรทัด\n• uses black list security model → อนุญาตทุกอย่างเป็นค่าเริ่มต้น แล้วค่อยบล็อกสิ่งที่ไม่ต้องการ (เช่น ACL ที่ deny เฉพาะบางอย่าง)\n\n📗 จำง่าย: SDN = "บอกเจตนา + ปิดก่อนเปิดทีหลัง" | Traditional = "พิมพ์ config + เปิดก่อนปิดทีหลัง"',
  },
  {
    id: 261,
    kind: 'single',
    prompt:
      'A network administrator needs to aggregate 4 ports into a single logical link which must negotiate Layer 2 connectivity to ports on another switch. What must be configured when using active mode on both sides of the connection?',
    options: [
      { key: 'A', text: '802.1q trunks' },
      { key: 'B', text: 'Cisco vPC' },
      { key: 'C', text: 'LLDP' },
      { key: 'D', text: 'LACP' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — EtherChannel (รวมหลายพอร์ตเป็นลิงก์ตรรกะเดียว) มี 2 โปรโตคอลเจรจา:\n\n🔹 LACP (802.3ad) — มาตรฐานเปิด ใช้ข้ามยี่ห้อได้ โหมด:\n   • active = ส่ง LACP ออกไปเจรจาเชิงรุก\n   • passive = รอฝ่ายตรงข้ามเริ่มก่อน\n   ตารางการจับคู่: active+active ✔ | active+passive ✔ | passive+passive ✘ (ไม่เกิด)\n\n🔹 PAgP — ของ Cisco เท่านั้น โหมด: desirable (รุก) / auto (รับ)\n   desirable+desirable ✔ | desirable+auto ✔ | auto+auto ✘\n\n✅ ทำไม D ถูก: คำว่า "active mode" เป็นคีย์เวิร์ดเฉพาะของ LACP โจทย์บอกใช้ active ทั้งสองฝั่ง → ต้องเป็น LACP (คำสั่ง: channel-group 1 mode active)\n\n❌ ทำไมข้ออื่นผิด:\nA. 802.1Q คือ VLAN trunking (แท็ก VLAN) ไม่ใช่การรวมพอร์ตเป็นลิงก์เดียว\nB. vPC เป็นเทคโนโลยีของ Nexus (ให้ 2 สวิตช์ทำตัวเป็นตัวเดียวสำหรับ downstream) ไม่ใช่การเจรจา EtherChannel ในบริบทนี้\nC. LLDP เป็นโปรโตคอลค้นหาอุปกรณ์เพื่อนบ้าน (คู่แข่ง CDP) ไม่ได้รวมลิงก์',
  },
  {
    id: 262,
    kind: 'single',
    prompt: 'When a WPA2-PSK WLAN is configured in the Wireless LAN Controller, what is the minimum number of characters in ASCII format?',
    options: [
      { key: 'A', text: '6' },
      { key: 'B', text: '8' },
      { key: 'C', text: '12' },
      { key: 'D', text: '18' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด: WPA/WPA2 Personal (PSK) กำหนดความยาว pre-shared key ตามมาตรฐาน 802.11i ดังนี้\n• รูปแบบ ASCII: 8–63 ตัวอักษร → ขั้นต่ำ 8 ✔\n• รูปแบบ HEX: 64 ตัวอักษรพอดี (256 บิต)\n\n✅ ทำไม B ถูก: ค่าต่ำสุดของ ASCII passphrase คือ 8 ตัวอักษร — ถ้าใส่น้อยกว่านี้ WLC จะปฏิเสธ\n\n❌ ทำไมข้ออื่นผิด:\nA. 6 ตัวสั้นเกินมาตรฐาน ระบบไม่ยอมรับ\nC, D. 12 และ 18 เป็นความยาวที่ "ใช้ได้" (อยู่ในช่วง 8–63) แต่ไม่ใช่ค่า "ขั้นต่ำ" ที่โจทย์ถาม\n\n📗 จำไว้: ASCII 8–63 ตัว / HEX 64 ตัว — ในทางปฏิบัติควรใช้ยาว ๆ (20+) เพื่อกัน dictionary attack',
  },
  {
    id: 263,
    kind: 'multi',
    prompt: 'What are two differences between optical-fiber cabling and copper cabling? (Choose two)',
    options: [
      { key: 'A', text: 'Light is transmitted through the core of the fiber' },
      { key: 'B', text: 'A BNC connector is used for fiber connections' },
      { key: 'C', text: 'The glass core component is encased in a cladding' },
      { key: 'D', text: 'Fiber connects to physical interfaces using RJ-45 connections' },
      { key: 'E', text: 'The data can pass through the cladding' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — โครงสร้างสายไฟเบอร์ (จากในออกนอก):\n1. Core (แกนแก้ว) → เป็นทางเดินของ "แสง" ที่บรรทุกข้อมูลจริง\n2. Cladding (แก้วหุ้มแกน) → มีดัชนีหักเหต่ำกว่า core ทำให้แสงสะท้อนกลับเข้า core (total internal reflection) แสงจึงไม่รั่วออก\n3. Buffer / Jacket → ปลอกป้องกันภายนอก\nต่างจากสายทองแดงที่ส่งข้อมูลด้วย "สัญญาณไฟฟ้า" ผ่านตัวนำทองแดง\n\n✅ ทำไม A ถูก: ไฟเบอร์ส่งข้อมูลด้วยแสงที่วิ่งผ่าน core — เป็นความต่างหลักจากทองแดง (ไฟฟ้า)\n✅ ทำไม C ถูก: core แก้วถูกหุ้มด้วย cladding ซึ่งเป็นโครงสร้างเฉพาะของไฟเบอร์ ไม่มีในสายทองแดง\n\n❌ ทำไมข้ออื่นผิด:\nB. BNC เป็นหัวต่อของสาย coaxial (ทองแดง) ไม่ใช่ไฟเบอร์ — ไฟเบอร์ใช้ LC, SC, ST, MPO\nD. RJ-45 เป็นหัวต่อของสาย UTP (ทองแดง) — ไฟเบอร์ไม่ใช้ RJ-45\nE. ผิดตรงกันข้าม: cladding มีหน้าที่ "กันไม่ให้แสงหลุดออก" ข้อมูลจึงวิ่งใน core เท่านั้น ไม่ได้วิ่งผ่าน cladding\n\n📗 เสริม: Single-mode core 9 micron (ไกล) • Multimode core 50 หรือ 62.5 micron (ใกล้)',
  },
  {
    id: 264,
    kind: 'single',
    image: q264,
    prompt:
      'Refer to the exhibit. R1 gig0/0: Hello 10, Dead 40. R2 gig0/0: Hello 20, Dead 80. Both are in Area 1, process 100, network type BROADCAST, and both show State DR with no BDR. What action establishes the OSPF neighbor relationship?',
    options: [
      { key: 'A', text: 'modify the hello interval' },
      { key: 'B', text: 'modify the process ID' },
      { key: 'C', text: 'modify the priority' },
      { key: 'D', text: 'modify the network type' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด: OSPF จะไม่ยอมเป็น neighbor กันเลยถ้า Hello interval และ Dead interval ไม่ตรงกัน (ค่าเหล่านี้ถูกบรรจุอยู่ใน Hello packet และถูกตรวจสอบทุกครั้ง)\n\n✅ วิเคราะห์จาก exhibit:\n• R1 → Hello 10, Dead 40\n• R2 → Hello 20, Dead 80\n→ ไม่ตรงกันทั้งคู่! เป็นเหตุผลที่ทั้งสองต่างประกาศตัวเป็น DR และไม่มี BDR (แปลว่าไม่เห็นกันเลย ต่างคนต่างอยู่คนละ segment ในมุมมอง OSPF)\nการแก้: ปรับ hello interval ให้ตรงกัน (dead จะปรับตามอัตโนมัติเป็น 4 เท่า หรือตั้งเองด้วย ip ospf dead-interval)\nคำสั่ง: interface gig0/0 → ip ospf hello-interval 10\n\n❌ ทำไมข้ออื่นผิด:\nB. Process ID (100) เป็นค่า local ของแต่ละ router — ไม่จำเป็นต้องตรงกันเพื่อเป็น neighbor (ที่นี่ตรงกันอยู่แล้วด้วย)\nC. Priority ใช้ตัดสินว่าใครเป็น DR/BDR เท่านั้น — ไม่ได้กันไม่ให้เป็น neighbor และไม่ใช่ต้นเหตุที่นี่\nD. Network type ทั้งสองฝั่งเป็น BROADCAST เหมือนกันอยู่แล้ว จึงไม่ใช่ปัญหา\n\n📗 ค่าเริ่มต้นที่ต้องจำ: Broadcast/P2P → Hello 10s, Dead 40s | NBMA → Hello 30s, Dead 120s',
  },
  {
    id: 265,
    kind: 'single',
    prompt: 'How does WPA3 improve security?',
    options: [
      { key: 'A', text: 'It uses SAE for authentication' },
      { key: 'B', text: 'It uses a 4-way handshake for authentication' },
      { key: 'C', text: 'It uses RC4 for encryption' },
      { key: 'D', text: 'It uses TKIP for encryption' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — วิวัฒนาการความปลอดภัย Wi-Fi:\n• WEP → RC4 (แตกง่ายมาก เลิกใช้)\n• WPA → TKIP + RC4 (ดีขึ้นแต่ยังอ่อน เลิกใช้)\n• WPA2 → AES-CCMP + 4-way handshake (ปลอดภัย แต่มีช่องโหว่ KRACK และถูก brute-force รหัสผ่านแบบ offline ได้)\n• WPA3 → AES + ⭐SAE (Simultaneous Authentication of Equals) หรือเรียกว่า "Dragonfly handshake"\n\n✅ ทำไม A ถูก: WPA3 แทนที่ 4-way handshake (PSK) ด้วย SAE ซึ่งให้ Forward Secrecy และป้องกันการเดารหัสผ่านแบบ offline dictionary attack (ผู้โจมตีดักจับ handshake ไปนั่งเดารหัสทีหลังไม่ได้อีกต่อไป)\n\n❌ ทำไมข้ออื่นผิด:\nB. 4-way handshake คือกลไกของ WPA2 (ซึ่งเป็นจุดอ่อนที่ WPA3 มาแก้) ไม่ใช่สิ่งที่ WPA3 "ปรับปรุงขึ้น"\nC. RC4 คือ cipher เก่าของ WEP/WPA ที่ไม่ปลอดภัย — WPA3 ไม่ใช้\nD. TKIP คือของ WPA รุ่นแรก ถูกยกเลิกไปแล้ว — WPA3 ใช้ AES (GCMP/CCMP)\n\n📗 จำไว้: WPA3 = SAE + AES + Forward Secrecy + ป้องกัน offline dictionary attack',
  },
  {
    id: 266,
    kind: 'single',
    prompt:
      'A device detects two stations transmitting frames at the same time. This condition occurs after the first 64 bytes of the frame is received. Which interface counter increments?',
    options: [
      { key: 'A', text: 'collision' },
      { key: 'B', text: 'CRC' },
      { key: 'C', text: 'runt' },
      { key: 'D', text: 'late collision' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ความต่างระหว่าง collision ธรรมดา กับ late collision:\n• เฟรม Ethernet ขั้นต่ำ = 64 ไบต์ ช่วง 64 ไบต์แรกเรียกว่า "slot time"\n• Collision (ปกติ) → ชนกันภายใน 64 ไบต์แรก = เป็นเรื่องปกติของ half-duplex/CSMA-CD สถานีจะส่งใหม่เอง\n• ⭐ Late collision → ชนกัน "หลัง" 64 ไบต์แรกผ่านไปแล้ว = ผิดปกติเสมอ! เพราะตามทฤษฎีสถานีควรตรวจพบการชนได้ภายใน slot time\n\n✅ ทำไม D ถูก: โจทย์ระบุชัดว่า "occurs after the first 64 bytes" → ตรงนิยาม late collision พอดี\n\n❌ ทำไมข้ออื่นผิด:\nA. collision ธรรมดาเกิดภายใน 64 ไบต์แรก ไม่ตรงกับโจทย์\nB. CRC เพิ่มขึ้นเมื่อค่า checksum (FCS) ไม่ตรง = เฟรมเสียหาย ไม่ใช่เรื่องการชนกันตามเวลา\nC. runt คือเฟรมที่สั้นกว่า 64 ไบต์ (มักเป็นผลพวงของการชน) แต่โจทย์ถามถึงเงื่อนไข "หลัง" 64 ไบต์\n\n📗 สาเหตุที่พบบ่อยของ late collision (ต้องรู้ไว้แก้ปัญหาจริง):\n1️⃣ Duplex mismatch (ฝั่งหนึ่ง full ฝั่งหนึ่ง half) ← สาเหตุอันดับ 1\n2️⃣ สายยาวเกินมาตรฐาน (เกิน 100 เมตรสำหรับ UTP)',
  },
  {
    id: 267,
    kind: 'multi',
    image: q267,
    prompt:
      'Refer to the exhibit. R1 (fa0/0) connects through a switch to R2 (gi0/0, 192.0.2.2). R2 gi0/1 (198.51.100.1) connects to the DHCP server (198.51.100.100). R1 must obtain its IP configuration from DHCP. Which two sets of commands must be configured? (Choose two)',
    options: [
      { key: 'A', text: 'R1(config)# interface fa0/0 → ip helper-address 198.51.100.100' },
      { key: 'B', text: 'R2(config)# interface gi0/0 → ip helper-address 198.51.100.100' },
      { key: 'C', text: 'R1(config)# interface fa0/0 → ip address dhcp / no shutdown' },
      { key: 'D', text: 'R2(config)# interface gi0/0 → ip address dhcp' },
      { key: 'E', text: 'R1(config)# interface fa0/0 → ip helper-address 192.0.2.2' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — DHCP ทำงานด้วย broadcast (DHCPDISCOVER ส่งไป 255.255.255.255) ซึ่ง router จะไม่ forward ข้าม subnet โดยธรรมชาติ จึงต้องมี 2 ส่วน:\n1️⃣ ฝั่ง Client → สั่งให้ขอ IP อัตโนมัติ\n2️⃣ ฝั่ง Router ที่ติดกับ client → ทำ DHCP Relay ด้วย "ip helper-address" เพื่อแปลง broadcast เป็น unicast ส่งต่อไปยัง DHCP server\n\n✅ ทำไม C ถูก: R1 เป็น "client" ในโจทย์นี้ → ต้องสั่ง "ip address dhcp" บน fa0/0 (พร้อม no shutdown เพื่อเปิดพอร์ต) เพื่อให้ R1 ส่ง DHCPDISCOVER ออกไป\n\n✅ ทำไม B ถูก: R2 gi0/0 คืออินเทอร์เฟซที่ "อยู่ใกล้ client (R1) ที่สุด" และเป็นตัวรับ broadcast จาก R1 → ต้องตั้ง ip helper-address ชี้ไปที่ IP ของ DHCP server จริง (198.51.100.100)\n\n❌ ทำไมข้ออื่นผิด:\nA. helper-address ต้องตั้งบน router (R2) ไม่ใช่บนตัว client เอง (R1) — R1 เป็นคนขอ ไม่ใช่คนส่งต่อ\nD. R2 ไม่ได้ต้องการ IP จาก DHCP — R2 มี IP คงที่ (192.0.2.2 / 198.51.100.1) อยู่แล้ว และเป็นผู้ให้บริการ relay\nE. helper-address ต้องชี้ไปที่ "DHCP server" (198.51.100.100) ไม่ใช่ชี้ไปที่ตัว router เอง (192.0.2.2) — และตั้งผิดเครื่องด้วย\n\n📗 กฎทอง: ip helper-address ตั้งบนอินเทอร์เฟซของ router ฝั่งที่ติดกับ client เสมอ และชี้ไปยัง IP ของ DHCP server',
  },
  {
    id: 268,
    kind: 'single',
    prompt: 'When OSPF learns multiple paths to a network, how does it select a route?',
    options: [
      { key: 'A', text: 'It multiplies the active K value by 256 to calculate the route with the lowest metric' },
      { key: 'B', text: 'For each existing interface, it adds the metric from the source router to the destination to calculate the route with the lowest bandwidth' },
      { key: 'C', text: 'It divides a reference bandwidth of 100 Mbps by the actual bandwidth of the existing interface to calculate the route with the lowest cost' },
      { key: 'D', text: 'It counts the number of hops between the source router and the destination to determine the route with the lowest metric' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — OSPF ใช้ metric ชื่อ "Cost" คำนวณจากสูตร:\n\n     Cost = Reference Bandwidth ÷ Interface Bandwidth\n\nโดยค่า Reference Bandwidth เริ่มต้นของ Cisco = 100 Mbps (100,000,000 bps)\nOSPF จะบวก cost ของทุกลิงก์ตลอดเส้นทาง แล้วเลือกเส้นทางที่ cost รวมต่ำสุด (ใช้อัลกอริทึม Dijkstra/SPF)\n\n✅ ตัวอย่างการคำนวณ (ต้องจำ):\n• FastEthernet 100 Mbps → 100/100 = cost 1\n• Ethernet 10 Mbps → 100/10 = cost 10\n• Serial T1 1.544 Mbps → 100/1.544 ≈ cost 64\n• GigabitEthernet 1000 Mbps → 100/1000 = 0.1 → ปัดเป็น 1 (ปัดขึ้นเป็นค่าต่ำสุด 1)\n⚠️ ปัญหา: Gigabit กับ FastEthernet ได้ cost เท่ากัน (=1) จึงควรปรับด้วย "auto-cost reference-bandwidth 10000"\n\n❌ ทำไมข้ออื่นผิด:\nA. ค่า K (K1–K5) เป็นสูตรของ EIGRP ไม่ใช่ OSPF\nB. บิดเบือน — OSPF เลือก "cost ต่ำสุด" ไม่ใช่ "bandwidth ต่ำสุด" (bandwidth ต่ำ = cost สูง = แย่)\nD. การนับ hop count เป็น metric ของ RIP (สูงสุด 15 hops)',
  },
  {
    id: 269,
    kind: 'single',
    prompt:
      'A user configured OSPF between two routers. The serial interface connecting R1 and R2 is running PPP encapsulation. By default, which OSPF network type is seen with "show ip ospf interface"?',
    options: [
      { key: 'A', text: 'point-to-multipoint' },
      { key: 'B', text: 'broadcast' },
      { key: 'C', text: 'point-to-point' },
      { key: 'D', text: 'nonbroadcast' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — OSPF network type เริ่มต้น ขึ้นกับ "Layer 2 encapsulation" ของอินเทอร์เฟซ:\n\n📊 ค่าเริ่มต้นที่ต้องจำ:\n• Ethernet (LAN) → Broadcast → ✔ มีการเลือก DR/BDR\n• ⭐ PPP / HDLC (Serial) → Point-to-Point → ✘ ไม่มี DR/BDR\n• Frame Relay → Nonbroadcast (NBMA) → ✔ มีการเลือก DR/BDR\n\n✅ ทำไม C ถูก: PPP (และ HDLC) บนลิงก์ serial มี network type เริ่มต้นเป็น point-to-point เพราะเป็นลิงก์ที่มีเพียง 2 อุปกรณ์เท่านั้น จึง "ไม่ต้องเลือก DR/BDR" (ไม่มีประโยชน์ที่จะเลือกตัวแทนในเมื่อมีแค่ 2 ตัว) ทำให้ adjacency เกิดเร็วกว่า\n\n❌ ทำไมข้ออื่นผิด:\nB. Broadcast เป็นค่าเริ่มต้นของ Ethernet (LAN) ซึ่งมีหลายอุปกรณ์ในเซกเมนต์เดียวกัน จึงต้องเลือก DR/BDR ลดจำนวน adjacency\nA, D. Point-to-multipoint และ Nonbroadcast (NBMA) เกี่ยวข้องกับ Frame Relay / เครือข่าย hub-and-spoke ไม่ใช่ค่าเริ่มต้นของ PPP\n\n📗 เกร็ด: บน point-to-point Hello=10s Dead=40s แต่บน NBMA Hello=30s Dead=120s',
  },
  {
    id: 270,
    kind: 'single',
    prompt: 'How do AAA operations compare regarding user identification, user services, and access control?',
    options: [
      { key: 'A', text: 'Authorization provides access control and authentication tracks user services' },
      { key: 'B', text: 'Authentication identifies users and accounting tracks user services' },
      { key: 'C', text: 'Accounting tracks user services, and authentication provides access control' },
      { key: 'D', text: 'Authorization identifies users and authentication provides access control' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — AAA แยกเป็น 3 หน้าที่ชัดเจน (ต้องท่องให้ขึ้นใจ):\n\n1️⃣ Authentication (การพิสูจน์ตัวตน) = "คุณเป็นใคร?"\n   → ตรวจ username/password, certificate, token → ระบุตัวผู้ใช้ (identifies users)\n\n2️⃣ Authorization (การให้สิทธิ์) = "คุณทำอะไรได้บ้าง?"\n   → หลังยืนยันตัวตนแล้ว กำหนดว่าเข้าถึงอะไรได้ / รันคำสั่งระดับไหนได้ → นี่คือ access control\n\n3️⃣ Accounting (การบันทึก) = "คุณทำอะไรไปบ้าง?"\n   → บันทึกว่าใครล็อกอินเมื่อไหร่ ใช้ทรัพยากรเท่าไหร่ รันคำสั่งอะไร → tracks user services\n\n✅ ทำไม B ถูก: จับคู่ถูกทั้งสองส่วน — Authentication = ระบุตัวผู้ใช้ ✔ และ Accounting = ติดตาม/บันทึกการใช้บริการ ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับผิด — Authentication ไม่ได้ track services (นั่นคืองานของ Accounting)\nC. สลับผิด — Authentication ไม่ได้ให้ access control (นั่นคืองานของ Authorization)\nD. สลับผิดทั้งคู่ — Authorization ไม่ได้ระบุตัวผู้ใช้ และ Authentication ไม่ได้ทำ access control\n\n📗 โปรโตคอลที่ใช้: RADIUS (รวม authen+author, เข้ารหัสแค่ password, UDP) | TACACS+ (แยก AAA ชัดเจน, เข้ารหัสทั้ง payload, TCP 49)',
  },
  {
    id: 271,
    kind: 'single',
    prompt: 'An engineer requires an interface to actively attempt to establish a trunk link with a neighbor switch. What command must be configured?',
    options: [
      { key: 'A', text: 'switchport mode trunk' },
      { key: 'B', text: 'switchport mode dynamic desirable' },
      { key: 'C', text: 'switchport mode dynamic auto' },
      { key: 'D', text: 'switchport nonegotiate' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — DTP (Dynamic Trunking Protocol) มีโหมดสำคัญ:\n• dynamic desirable → 🔥 เชิงรุก: ส่ง DTP ออกไป "ชวน" อีกฝ่ายเป็น trunk อย่างแข็งขัน\n• dynamic auto → 😴 เชิงรับ: รอให้อีกฝ่ายชวนก่อน ตัวเองไม่ริเริ่ม\n• trunk (on) → เป็น trunk ถาวร (ยังส่ง DTP)\n• nonegotiate → ปิด DTP ไม่เจรจาเลย\n\n📊 ตารางการจับคู่ (ต้องจำ!):\n┌──────────────┬───────┬───────────┬────────┐\n│              │ auto  │ desirable │ trunk  │\n├──────────────┼───────┼───────────┼────────┤\n│ auto         │ ACCESS│ TRUNK     │ TRUNK  │\n│ desirable    │ TRUNK │ TRUNK     │ TRUNK  │\n│ trunk        │ TRUNK │ TRUNK     │ TRUNK  │\n└──────────────┴───────┴───────────┴────────┘\n⚠️ auto + auto = ไม่เกิด trunk (ต่างคนต่างรอ กลายเป็น access port!)\n\n✅ ทำไม B ถูก: คีย์เวิร์ดในโจทย์คือ "actively attempt" (พยายามเชิงรุก) ซึ่งตรงกับ dynamic desirable เท่านั้น — เป็นโหมดเดียวที่ริเริ่มส่ง DTP ไปเจรจาเอง\n\n❌ ทำไมข้ออื่นผิด:\nC. dynamic auto เป็นโหมด "passive/เชิงรับ" — รอฝ่ายตรงข้ามเริ่มก่อน ไม่ได้ actively attempt (นี่คือกับดักของข้อนี้)\nA. switchport mode trunk บังคับเป็น trunk ทันทีโดยไม่ได้ "พยายามเจรจา" ตามที่โจทย์ต้องการ\nD. nonegotiate ปิดการเจรจา DTP ทั้งหมด = ตรงข้ามกับโจทย์เลย\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C (dynamic auto) ซึ่งผิด เพราะ auto เป็นโหมดเชิงรับ — คำตอบที่ถูกต้องคือ B',
  },
  {
    id: 272,
    kind: 'single',
    image: q272,
    prompt:
      'Refer to the exhibit. A packet is sent across router R1 to host 172.16.0.14. The table shows S* 0.0.0.0/0 via 209.165.200.246 (Serial0/1/0), S 172.16.3.0/24 via 209.165.200.250, and O 172.16.3.0/28 via 209.165.200.254. What is the destination route for the packet?',
    options: [
      { key: 'A', text: '209.165.200.254 (the OSPF route to 172.16.3.0/28)' },
      { key: 'B', text: '209.165.200.250 (the static route to 172.16.3.0/24)' },
      { key: 'C', text: '209.165.200.246 (the default route / gateway of last resort)' },
      { key: 'D', text: 'The packet is dropped because no matching route exists' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด: router จับคู่ปลายทางด้วย Longest Prefix Match — ต้องเช็คทีละ route ว่า "ปลายทางอยู่ในช่วงของ route นั้นไหม"\n\n✅ วิเคราะห์ปลายทาง 172.16.0.14 (สังเกต octet ที่ 3 = 0 ไม่ใช่ 3!):\n• route 172.16.3.0/24 → ครอบคลุม 172.16.3.0 – 172.16.3.255 → ❌ ไม่มี 172.16.0.14\n• route 172.16.3.0/28 → ครอบคลุม 172.16.3.0 – 172.16.3.15 → ❌ ไม่มีเช่นกัน\n• บรรทัด "172.16.0.0/16 is variably subnetted" เป็นเพียง "หัวข้อ" (parent) ไม่ใช่ route ที่ใช้ forward ได้จริง ⚠️ กับดักสำคัญ!\n→ ไม่มี route เจาะจงใดตรงเลย จึงตกไปใช้ default route: S* 0.0.0.0/0 via 209.165.200.246 ✔\n\n❌ ทำไมข้ออื่นผิด:\nA, B. เป็น next-hop ของ route ที่ชี้ไป 172.16.3.x ซึ่งไม่ครอบคลุมปลายทาง 172.16.0.14\nD. ไม่ถูกทิ้ง เพราะมี default route (S*) รองรับอยู่\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ .254 ซึ่งผิด เพราะ 172.16.0.14 ไม่อยู่ในช่วง 172.16.3.0/28 เลย — คำตอบที่ถูกต้องคือใช้ default route (.246)\n\n📗 บทเรียน: อย่าเผลอคิดว่าบรรทัด "is variably subnetted" คือ route ที่ใช้ได้ — มันเป็นแค่หัวข้อบอกว่ามี subnet ย่อยอะไรบ้าง',
  },
  {
    id: 273,
    kind: 'single',
    prompt: 'With REST API, which standard HTTP header tells a server which media type is expected by the client?',
    options: [
      { key: 'A', text: 'Accept-Encoding: gzip, deflate' },
      { key: 'B', text: 'Accept-Patch: text/example; charset=utf-8' },
      { key: 'C', text: 'Content-Type: application/json; charset=utf-8' },
      { key: 'D', text: 'Accept: application/json' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แยกให้ออกระหว่าง 2 header ที่คนสับสนบ่อยที่สุด:\n• ⭐ Accept: → client บอก server ว่า "ฉันอยากได้ response กลับมาเป็นรูปแบบไหน" (media type ที่ client คาดหวัง)\n• Content-Type: → บอกว่า "ข้อมูลที่กำลังส่งอยู่ใน body นี้เป็นรูปแบบไหน" (ใช้ได้ทั้ง request และ response)\n\n✅ ทำไม D ถูก: โจทย์ถามหา header ที่ "client บอก server ว่าคาดหวัง media type ใด" ซึ่งตรงกับ "Accept: application/json" พอดี = ขอ response กลับมาเป็น JSON\n\n❌ ทำไมข้ออื่นผิด:\nC. Content-Type บอกชนิดของข้อมูลใน body ที่กำลัง "ส่งไป" ไม่ใช่ชนิดที่ "คาดหวังจะได้รับกลับมา" (นี่คือตัวลวงหลักของข้อนี้)\nA. Accept-Encoding บอกวิธี "บีบอัด" ที่ client รองรับ (gzip/deflate) ไม่ใช่ media type\nB. Accept-Patch เป็น response header ที่ server ใช้บอกว่ารองรับรูปแบบ PATCH แบบใด ไม่ใช่สิ่งที่ client ส่งไปขอ\n\n📗 REST + CRUD ที่ต้องจำ: GET=Read | POST=Create | PUT/PATCH=Update | DELETE=Delete • สำเร็จ = HTTP 200',
  },
  {
    id: 274,
    kind: 'single',
    prompt: 'Which JSON data type is an unordered set of attribute-value pairs?',
    options: [
      { key: 'A', text: 'array' },
      { key: 'B', text: 'string' },
      { key: 'C', text: 'object' },
      { key: 'D', text: 'Boolean' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ชนิดข้อมูลใน JSON:\n\n🔹 Object → ใช้ปีกกา { } บรรจุคู่ "key": value โดย "ไม่สนลำดับ" (unordered)\n   ตัวอย่าง: { "hostname": "R1", "ip": "10.1.1.1", "up": true }\n\n🔹 Array → ใช้วงเล็บเหลี่ยม [ ] เป็นรายการที่ "เรียงตามลำดับ" (ordered) เข้าถึงด้วย index\n   ตัวอย่าง: [ "Gi0/0", "Gi0/1", "Gi0/2" ]\n\n🔹 String → ข้อความในเครื่องหมายคำพูด "R1"\n🔹 Number → 100  🔹 Boolean → true/false  🔹 null\n\n✅ ทำไม C ถูก: คำว่า "unordered set of attribute-value pairs" (ชุดคู่ชื่อ-ค่า ที่ไม่เรียงลำดับ) คือนิยามของ JSON object ตรงตัว — สังเกตเครื่องหมาย { }\n\n❌ ทำไมข้ออื่นผิด:\nA. array เป็น "ordered list" (มีลำดับ ใช้ index) และเก็บเป็นค่าเดี่ยว ๆ ไม่ใช่คู่ attribute-value\nB. string คือค่าข้อความเดี่ยว ไม่ใช่โครงสร้างเก็บคู่ค่า\nD. Boolean มีแค่ true/false ไม่ใช่โครงสร้าง\n\n📗 จำง่าย: { } = object (คู่ key:value ไม่เรียง) | [ ] = array (รายการ เรียงลำดับ)',
  },
  {
    id: 275,
    kind: 'single',
    prompt: 'What is the expected outcome when an EUI-64 address is generated?',
    options: [
      { key: 'A', text: 'The seventh bit of the original MAC address of the interface is inverted' },
      { key: 'B', text: 'The interface ID is configured as a random 64-bit value' },
      { key: 'C', text: 'The characters FE80 are inserted at the beginning of the MAC address of the interface' },
      { key: 'D', text: 'The MAC address of the interface is used as the interface ID without modification' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ขั้นตอนการสร้าง EUI-64 (แปลง MAC 48 บิต → Interface ID 64 บิต):\n\n1️⃣ แบ่ง MAC ครึ่ง: เช่น MAC = 00 1A 2B : 3C 4D 5E\n2️⃣ ⭐ แทรก FFFE ตรงกลาง: 00 1A 2B : FF FE : 3C 4D 5E (ได้ 64 บิตแล้ว)\n3️⃣ ⭐ กลับบิตที่ 7 จากซ้าย (U/L bit — Universal/Local) ของไบต์แรก:\n   00 = 0000 0000 → กลับบิตที่ 7 → 0000 0010 = 02\n   ผลลัพธ์: 021A:2BFF:FE3C:4D5E\n\n✅ ทำไม A ถูก: ขั้นตอนที่เป็นเอกลักษณ์ของ EUI-64 คือการ "invert บิตที่ 7" (U/L bit) ของ MAC เดิม เพื่อบอกว่า address นี้เป็น universally unique\n\n❌ ทำไมข้ออื่นผิด:\nB. การสุ่มค่า 64 บิตคือกลไกของ "IPv6 Privacy Extension" (RFC 4941) ซึ่งทำเพื่อ "ไม่ให้" ถูกติดตามจาก MAC — ตรงข้ามกับ EUI-64\nC. FE80::/10 เป็น prefix ของ link-local address ไม่ใช่สิ่งที่ EUI-64 ทำกับ MAC (EUI-64 สร้างแค่ส่วน interface ID 64 บิตท้าย ส่วน prefix มาจากที่อื่น)\nD. ผิด เพราะ EUI-64 "แก้ไข" MAC ถึง 2 จุด (แทรก FFFE + กลับบิตที่ 7) ไม่ได้ใช้ตรง ๆ\n\n📗 คำสั่ง: ipv6 address 2001:db8::/64 eui-64',
  },
  {
    id: 276,
    kind: 'single',
    prompt: 'Which protocol prompts the Wireless LAN Controller to generate its own local web administration SSL certificate for GUI access?',
    options: [
      { key: 'A', text: 'HTTPS' },
      { key: 'B', text: 'RADIUS' },
      { key: 'C', text: 'TACACS+' },
      { key: 'D', text: 'HTTP' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด: เมื่อเปิดใช้ HTTPS สำหรับการเข้า GUI ของ WLC ตัว controller จะ "สร้าง SSL certificate ของตัวเอง" (self-signed local web administration certificate) ขึ้นมาอัตโนมัติและนำไปใช้กับหน้า GUI ทันที (หรือจะอัปโหลด certificate จากภายนอกก็ได้)\n\n✅ ทำไม A ถูก: HTTPS = HTTP + SSL/TLS การเปิด HTTPS จึงจำเป็นต้องมี certificate → WLC จึงสร้าง local SSL certificate ให้เอง เพื่อเข้ารหัส session ของผู้ดูแลระบบ\n\n❌ ทำไมข้ออื่นผิด:\nD. HTTP เป็นการเข้าแบบ plain-text ไม่เข้ารหัส จึง "ไม่ต้องใช้ certificate" เลย (และไม่ปลอดภัย ควรปิด)\nB. RADIUS เป็นโปรโตคอล AAA ใช้ยืนยันตัวตน "ผู้ใช้ไร้สาย" (UDP 1812/1813) ไม่เกี่ยวกับ certificate ของหน้า GUI\nC. TACACS+ เป็นโปรโตคอล AAA ของ Cisco (TCP 49) ใช้ควบคุมสิทธิ์ผู้ดูแลอุปกรณ์ ไม่ได้สร้าง SSL certificate',
  },
  {
    id: 277,
    kind: 'multi',
    prompt: 'The SW1 interface Gi0 is in the down/down state. Which two configurations are valid reasons for the interface conditions? (Choose two)',
    options: [
      { key: 'A', text: 'There is a duplex mismatch' },
      { key: 'B', text: 'There is a speed mismatch' },
      { key: 'C', text: 'There is a protocol mismatch' },
      { key: 'D', text: 'The interface is shut down' },
      { key: 'E', text: 'The interface is error-disabled' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — ต้องแยกสถานะอินเทอร์เฟซให้ออก (สำคัญมากในการ troubleshoot):\n\n📊 สถานะ (line status / protocol status) และสาเหตุ:\n• up / up → ปกติ ⚠️ (duplex mismatch ก็ยังขึ้น up/up นะ!)\n• ⭐ down / down → ปัญหา Layer 1: สายหลุด, speed mismatch, อุปกรณ์ปลายทางปิด, err-disabled\n• up / down → Layer 1 ดี แต่ Layer 2 พัง: protocol/encapsulation mismatch, keepalive fail\n• administratively down / down → มีคนสั่ง shutdown\n\n✅ ทำไม B ถูก: speed mismatch ทำให้ลิงก์ Layer 1 ตกลงกันไม่ได้เลย → พอร์ตไม่ขึ้น = down/down\n✅ ทำไม E ถูก: err-disabled (จาก port security violation, BPDU guard, late collision ฯลฯ) ทำให้พอร์ตถูกปิดและอยู่ในสถานะ down/down (หยุด forward ทราฟฟิกทั้งหมด)\n\n❌ ทำไมข้ออื่นผิด:\nA. duplex mismatch ⚠️ พอร์ตยังขึ้น up/up! แต่จะมี collision/CRC error เยอะ ประสิทธิภาพตก — ไม่ได้ทำให้ down/down (นี่คือกับดักหลักของข้อนี้)\nC. protocol mismatch (เช่น PPP คุยกับ HDLC) ทำให้ได้ up/down (Layer 1 ขึ้น แต่ line protocol ตก) ไม่ใช่ down/down\nD. การ shutdown ทำให้แสดงเป็น "administratively down/down" ซึ่งเป็นสถานะที่ระบุแยกต่างหาก ไม่ใช่ "down/down" เฉย ๆ\n\n📗 กู้ err-disabled: shutdown → no shutdown หรือ errdisable recovery cause <สาเหตุ>',
  },
  {
    id: 278,
    kind: 'single',
    prompt: 'Which network plane is centralized and manages routing decisions?',
    options: [
      { key: 'A', text: 'policy plane' },
      { key: 'B', text: 'management plane' },
      { key: 'C', text: 'control plane' },
      { key: 'D', text: 'data plane' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — 3 ระนาบ (planes) ของอุปกรณ์เครือข่าย:\n\n1️⃣ Control Plane = "สมอง" 🧠\n   • รัน routing protocol (OSPF, EIGRP, BGP), สร้าง routing table/MAC table\n   • ตัดสินใจว่า "เส้นทางไหนดีที่สุด" แล้วส่งตารางให้ data plane ใช้\n   • ⭐ ใน SDN ระนาบนี้ถูกดึงออกมารวมศูนย์ไว้ที่ controller\n\n2️⃣ Data Plane (Forwarding Plane) = "แขนขา" 💪\n   • forward packet จริงตามตารางที่ control plane ให้มา (เร็วมาก)\n   • ยังคง "กระจาย" อยู่บนอุปกรณ์แต่ละตัว แม้ในระบบ SDN\n\n3️⃣ Management Plane = "ช่องทางเข้าไปดูแล" 🔧\n   • SSH, Telnet, SNMP, NETCONF, syslog — ใช้ config/monitor อุปกรณ์\n\n✅ ทำไม C ถูก: โจทย์มี 2 คีย์เวิร์ด "centralized" + "manages routing decisions" ซึ่งตรงกับ control plane (โดยเฉพาะในสถาปัตยกรรม SDN ที่ control plane ถูกรวมศูนย์ไว้ที่ controller)\n\n❌ ทำไมข้ออื่นผิด:\nD. data plane ทำหน้าที่ forward เท่านั้น ไม่ได้ตัดสินใจเส้นทาง และยังกระจายอยู่ตามอุปกรณ์ (ไม่รวมศูนย์)\nB. management plane ใช้เข้าไปจัดการ/ตรวจสอบอุปกรณ์ ไม่ได้คำนวณ routing\nA. "policy plane" ไม่ใช่คำศัพท์มาตรฐานในสถาปัตยกรรมเครือข่าย (เป็นตัวลวง)',
  },
  {
    id: 279,
    kind: 'single',
    prompt: 'Which action must be taken to assign a global unicast IPv6 address on an interface that is derived from the MAC address of that interface?',
    options: [
      { key: 'A', text: 'configure a stateful DHCPv6 server on the network' },
      { key: 'B', text: 'enable SLAAC on an interface' },
      { key: 'C', text: 'disable the EUI-64 bit process' },
      { key: 'D', text: 'explicitly assign a link-local address' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — วิธีที่โฮสต์ได้ IPv6 global unicast address:\n\n🔹 SLAAC (Stateless Address Autoconfiguration):\n   • โฮสต์ส่ง Router Solicitation (RS) → router ตอบ Router Advertisement (RA) ซึ่งมี "prefix /64"\n   • โฮสต์เอา prefix นั้นมาต่อกับ Interface ID ที่มัน "สร้างเองจาก MAC ผ่านกระบวนการ EUI-64" ⭐\n   • ผลลัพธ์ = global unicast address ที่ derived มาจาก MAC พอดีตามโจทย์\n\n🔹 Stateful DHCPv6:\n   • DHCPv6 server เป็นคนแจก address จาก pool และจดจำ (เก็บ state) ว่าแจกให้ใครไปแล้ว\n   • address ที่ได้ "ไม่ได้" มาจาก MAC ของอินเทอร์เฟซ\n\n✅ ทำไม B ถูก: เฉพาะ SLAAC เท่านั้นที่สร้าง interface ID จาก MAC (ด้วย EUI-64) แล้วประกอบกับ prefix จาก RA กลายเป็น global unicast address\n\n❌ ทำไมข้ออื่นผิด:\nA. stateful DHCPv6 แจก address จาก pool ของ server ซึ่งไม่ได้ derived จาก MAC — ขัดกับโจทย์โดยตรง\nC. ผิดตรงกันข้าม! ถ้า "ปิด" EUI-64 ก็จะไม่มีการสร้าง interface ID จาก MAC เลย — เราต้อง "ใช้" EUI-64 ไม่ใช่ปิด\nD. link-local address (FE80::/10) ใช้สื่อสารเฉพาะภายในลิงก์เท่านั้น ไม่ใช่ global unicast และมีอยู่โดยอัตโนมัติอยู่แล้ว\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A ซึ่งผิด เพราะ DHCPv6 ไม่ได้สร้าง address จาก MAC — คำตอบที่ถูกต้องคือ B\n\n📗 คำสั่งที่เกี่ยวข้อง: ipv6 address autoconfig (SLAAC) หรือ ipv6 address 2001:db8::/64 eui-64',
  },
  {
    id: 280,
    kind: 'single',
    image: q280,
    prompt:
      'Refer to the exhibit. The table shows "S 209.165.200.224 [254/0] via 209.165.202.129". Which command configures a floating static route to provide a backup to the primary link?',
    options: [
      { key: 'A', text: 'ip route 0.0.0.0 0.0.0.0 209.165.202.131' },
      { key: 'B', text: 'ip route 209.165.201.0 255.255.255.224 209.165.202.130' },
      { key: 'C', text: 'ip route 0.0.0.0 0.0.0.0 209.165.200.224' },
      { key: 'D', text: 'ip route 209.165.200.224 255.255.255.224 209.165.202.129 254' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Floating Static Route คือ static route สำรอง ที่จงใจตั้ง Administrative Distance ให้ "สูงกว่า" route หลัก\n• Static route ปกติมี AD = 1 (ต่ำมาก จึงชนะเสมอ)\n• ถ้าอยากให้เป็นแค่ "ตัวสำรอง" ต้องใส่ค่า AD ต่อท้ายคำสั่งให้สูงกว่า route หลัก\n• ผลลัพธ์: route นี้จะ "ลอย" (float) อยู่เฉย ๆ ไม่เข้า routing table จนกว่า route หลักจะหายไป แล้วจึงเข้ามาแทนที่อัตโนมัติ\n\n🔧 รูปแบบคำสั่ง:\n   ip route <network> <mask> <next-hop> [AD]\n                                          ↑ ใส่ตรงนี้คือหัวใจของ floating route\n\n✅ ทำไม D ถูก: มีเลข 254 ต่อท้าย = ตั้ง AD เป็น 254 (สูงมาก) → เป็น floating static route ที่จะทำงานเมื่อเส้นทางหลักล่มเท่านั้น\nสังเกตใน routing table: "S 209.165.200.224 [254/0]" — เลข 254 ในวงเล็บยืนยันว่านี่คือ floating route ที่ตั้งจากคำสั่ง D จริง ๆ ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่ได้ใส่ค่า AD → ได้ AD = 1 ซึ่งจะไปแย่ง/ชนกับ default route หลักที่มีอยู่ ไม่ใช่ตัวสำรอง\nB. ไม่ได้ใส่ค่า AD เช่นกัน → AD = 1 เป็น route ปกติ ไม่ลอย\nC. ไม่ได้ใส่ AD และ next-hop (209.165.200.224) ก็เป็น "network address" ปลายทาง ไม่ใช่ IP ของ next-hop router — ผิดหลักไวยากรณ์\n\n📗 จำไว้: เห็นตัวเลขต่อท้ายคำสั่ง ip route = floating static route เสมอ (นิยมใช้ 200–254)',
  },
  {
    id: 281,
    kind: 'multi',
    prompt: 'Which two QoS tools provide congestion management? (Choose two)',
    options: [
      { key: 'A', text: 'CAR' },
      { key: 'B', text: 'CBWFQ' },
      { key: 'C', text: 'PQ' },
      { key: 'D', text: 'PBR' },
      { key: 'E', text: 'FRTS' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — แยกประเภทเครื่องมือ QoS ให้ออก:\n\n🔹 Congestion Management (การจัดการคิว = "queuing") ← โจทย์ถามอันนี้\n   คือการตัดสินใจว่า "เมื่อคิวเต็ม จะส่งแพ็กเก็ตไหนก่อน" ได้แก่:\n   • FIFO (มาก่อนได้ก่อน)\n   • PQ — Priority Queuing (4 คิวตามลำดับความสำคัญ) ✔\n   • CQ — Custom Queuing (จัดสรร byte ต่อคิว)\n   • WFQ — Weighted Fair Queuing\n   • CBWFQ — Class-Based WFQ (รับประกันแบนด์วิดท์ต่อ class) ✔\n   • LLQ — Low-Latency Queuing (CBWFQ + priority queue สำหรับเสียง)\n\n🔹 Policing / Shaping (จำกัดอัตรา): CAR, FRTS, GTS\n🔹 Congestion Avoidance (ทิ้งก่อนคิวเต็ม): WRED, RED\n🔹 Routing: PBR\n\n✅ ทำไม B, C ถูก: CBWFQ และ PQ ต่างเป็น "กลไกการจัดคิว" (queuing) จึงจัดอยู่ในหมวด congestion management ตรงตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. CAR (Committed Access Rate) = เครื่องมือ policing (จำกัด/ทิ้งทราฟฟิกที่เกินอัตรา) ไม่ใช่การจัดคิว\nE. FRTS (Frame Relay Traffic Shaping) = เครื่องมือ shaping (หน่วงและปรับอัตราให้เรียบ) ไม่ใช่การจัดคิว\nD. PBR (Policy-Based Routing) = การกำหนดเส้นทางตามนโยบาย ไม่เกี่ยวกับ QoS congestion management เลย\n\n📗 จำง่าย: Congestion management = จัดการคิว "ตอนแน่นแล้ว" | Congestion avoidance (WRED) = ทิ้งบางส่วน "ก่อนจะแน่น"',
  },
  {
    id: 282,
    kind: 'single',
    image: q282,
    prompt:
      'Refer to the exhibit. RTR-1 has "access-list 10 deny host 10.150.1.1" applied to line vty 0 4 with "access-class 10 in". A Telnet attempt from PC-2 (10.150.1.2) returns "% Connection refused by remote host". Without allowing Telnet from PC-1, which action permits the traffic?',
    options: [
      { key: 'A', text: 'Add the "access-list 10 permit any" command to the configuration' },
      { key: 'B', text: 'Remove the "access-class 10 in" command from line vty 0 4' },
      { key: 'C', text: 'Add the "ip access-group 10 out" command to interface g0/0' },
      { key: 'D', text: 'Remove the "password" command from line vty 0 4' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิดหัวใจ — ⭐ Implicit Deny All:\nทุก ACL มีบรรทัดที่มองไม่เห็นซ่อนอยู่ท้ายสุดเสมอ คือ "deny any" ดังนั้น:\n\nACL ปัจจุบันคือ:\n   access-list 10 deny host 10.150.1.1     ← บล็อก PC-1 ตามต้องการ\n   (deny any)                              ← 👻 บรรทัดล่องหน! บล็อก "ทุกคนที่เหลือ" รวมถึง PC-2 ด้วย\n\nนี่คือเหตุผลที่ PC-2 (10.150.1.2) โดนปฏิเสธทั้งที่ไม่ได้ตั้งใจบล็อก\n\n✅ ทำไม A ถูก: เพิ่ม "access-list 10 permit any" ต่อท้าย → ACL กลายเป็น:\n   1. deny host 10.150.1.1   ← PC-1 ยังถูกบล็อกอยู่ ✔ (ตรงเงื่อนไข "ห้ามให้ PC-1 เข้า")\n   2. permit any             ← PC-2 และคนอื่นผ่านได้ ✔\n(ACL ทำงานจากบนลงล่าง เจอ match แรกแล้วหยุด → PC-1 ชน deny ก่อน จึงยังโดนบล็อก)\n\n❌ ทำไมข้ออื่นผิด:\nB. การลบ access-class ออกจะทำให้ "ทุกคนเข้าได้หมด รวมถึง PC-1" → ขัดกับเงื่อนไขโจทย์ที่ห้าม PC-1\nC. การใช้ ip access-group บนอินเทอร์เฟซกรองทราฟฟิก "ที่วิ่งผ่าน" router ไม่ใช่ทราฟฟิกที่ "เข้าหาตัว router เอง" (vty) — การควบคุม Telnet/SSH เข้า router ต้องใช้ access-class บน line vty เท่านั้น\nD. password ไม่เกี่ยวกับข้อความ "Connection refused" — ถ้าปัญหาเป็นรหัสผ่านจะขึ้นข้อความอื่น และการลบ password จะทำให้ล็อกอินไม่ได้ (IOS ต้องมี password ถึงจะ Telnet เข้าได้)\n\n📗 จำไว้: ควบคุมการเข้าถึงตัว router (vty) = access-class | กรองทราฟฟิกผ่าน router = ip access-group',
  },
  {
    id: 283,
    kind: 'multi',
    prompt:
      'An engineer must configure an OSPF neighbor relationship between R1 and R3. Authentication is already configured and the connecting interfaces are in the same 192.168.1.0 subnet. What are the next two steps to complete the configuration? (Choose two)',
    options: [
      { key: 'A', text: 'configure the hello and dead timers to match on both sides' },
      { key: 'B', text: 'configure the same process ID for the router OSPF process' },
      { key: 'C', text: 'configure the same router ID on both routing processes' },
      { key: 'D', text: 'configure the interfaces as OSPF active on both sides' },
      { key: 'E', text: 'configure both interfaces with the same area ID' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — เช็คลิสต์สิ่งที่ "ต้องตรงกัน" เพื่อให้ OSPF เป็น neighbor:\n\n✅ ต้องตรงกัน (MATCH):\n   1. อยู่ subnet เดียวกัน + subnet mask ตรงกัน ← โจทย์บอกว่าตรงแล้ว\n   2. ⭐ Area ID ตรงกัน → ข้อ E\n   3. ⭐ Hello / Dead timers ตรงกัน → ข้อ A\n   4. Authentication ตรงกัน ← โจทย์บอกว่าทำแล้ว\n   5. MTU ตรงกัน\n   6. Stub area flag ตรงกัน\n\n❌ ต้อง "ไม่" ตรงกัน / ไม่จำเป็นต้องตรง:\n   • Router ID → ต้อง "ต่างกัน" เด็ดขาด (ถ้าซ้ำจะ error และ adjacency ล้ม)\n   • Process ID → เป็นค่า local เฉพาะเครื่อง ไม่ต้องตรงกันก็ได้ (R1 ใช้ 1, R3 ใช้ 99 ก็ยังเป็น neighbor กันได้!)\n\n✅ ทำไม A, E ถูก: เป็นสองเงื่อนไขที่เหลือซึ่งยังต้องทำ (timers + area ID) เพื่อให้เกิด neighbor relationship\n\n❌ ทำไมข้ออื่นผิด:\nB. Process ID (เลขหลัง "router ospf") มีความหมายเฉพาะภายในเครื่องนั้น ๆ ไม่ต้องตรงกันระหว่าง router — เป็นความเข้าใจผิดที่พบบ่อยมาก ⚠️\nC. Router ID ต้องไม่ซ้ำกัน! การตั้งให้เหมือนกันจะทำให้ OSPF พังทันที (duplicate router ID)\nD. ไม่มีคำสั่ง/แนวคิด "OSPF active interface" — มีแต่ passive-interface (ที่ทำให้ "ไม่" ส่ง Hello)',
  },
  {
    id: 284,
    kind: 'single',
    prompt: 'Which type of traffic is sent with pure IPsec?',
    options: [
      { key: 'A', text: 'broadcast packets from a switch that is attempting to locate a MAC address at one of several remote sites' },
      { key: 'B', text: 'multicast traffic from a server at one site to hosts at another location' },
      { key: 'C', text: 'spanning-tree updates between switches that are at two different sites' },
      { key: 'D', text: 'unicast messages from a host at a remote site to a server at headquarters' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิดสำคัญ: ⭐ IPsec แบบบริสุทธิ์ (pure IPsec) รองรับเฉพาะ UNICAST traffic เท่านั้น!\nไม่สามารถส่ง broadcast หรือ multicast ผ่าน IPsec tunnel ตรง ๆ ได้\n\n💡 ผลกระทบที่สำคัญ: routing protocol อย่าง OSPF (multicast 224.0.0.5) และ EIGRP (224.0.0.10) จึง "วิ่งผ่าน pure IPsec ไม่ได้"\n\n🔧 วิธีแก้ในโลกจริง: ห่อ traffic ด้วย GRE ก่อน แล้วค่อยเข้ารหัสด้วย IPsec\n   → เรียกว่า "GRE over IPsec" (เพราะ GRE ห่อ multicast/broadcast ให้กลายเป็น unicast ได้)\n   → หรือใช้ DMVPN / VTI ซึ่งรองรับ multicast\n\n✅ ทำไม D ถูก: "unicast messages from a host to a server" เป็น unicast แท้ ๆ จึงส่งผ่าน pure IPsec ได้โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. ARP/broadcast packets → IPsec ไม่รองรับ broadcast\nB. multicast traffic → IPsec ไม่รองรับ multicast (ต้องพึ่ง GRE ห่อก่อน)\nC. spanning-tree BPDU → เป็น Layer 2 multicast frame ซึ่ง IPsec (ทำงานที่ Layer 3) ไม่รองรับเลย\n\n📗 จำสั้น ๆ: "IPsec = unicast only" — ถ้าเห็นคำว่า multicast/broadcast ในตัวเลือก ตัดทิ้งได้ทันที',
  },
  {
    id: 285,
    kind: 'single',
    prompt: 'R1 has learned route 10.10.10.0 via numerous routing protocols. Which route is installed?',
    options: [
      { key: 'A', text: 'route with the lowest cost' },
      { key: 'B', text: 'route with the next hop that has the highest IP' },
      { key: 'C', text: 'route with the shortest prefix length' },
      { key: 'D', text: 'route with the lowest administrative distance' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เมื่อ router รู้จักปลายทาง "เดียวกัน (prefix ยาวเท่ากัน)" จากหลายโปรโตคอล จะตัดสินด้วย Administrative Distance (AD) = ค่าความน่าเชื่อถือของแหล่งที่มา (ยิ่งต่ำยิ่งน่าเชื่อถือ)\n\n📊 ตาราง AD ที่ต้องท่องให้ได้ (ยิ่งต่ำยิ่งชนะ):\n   Connected .......... 0\n   Static ............. 1\n   eBGP .............. 20\n   EIGRP (internal) .. 90\n   OSPF ............. 110\n   IS-IS ............ 115\n   RIP .............. 120\n   EIGRP (external) . 170\n   iBGP ............. 200\n   Unusable ......... 255\n\n✅ ทำไม D ถูก: โจทย์บอกว่ารู้จัก route เดียวกันจาก "หลายโปรโตคอล" → เกณฑ์ตัดสินคือ AD ต่ำสุด (เช่น ถ้ามีทั้ง EIGRP 90 และ OSPF 110 → EIGRP ชนะ)\n\n❌ ทำไมข้ออื่นผิด:\nA. cost/metric ใช้เทียบได้เฉพาะ "ภายในโปรโตคอลเดียวกัน" เท่านั้น เพราะแต่ละโปรโตคอลมีหน่วย metric คนละแบบ (OSPF ใช้ cost, RIP ใช้ hop, EIGRP ใช้ bandwidth+delay) เทียบข้ามกันไม่ได้\nB. IP ของ next-hop ไม่ใช่เกณฑ์ตัดสินใด ๆ ในการเลือก route (เป็นตัวลวงล้วน ๆ)\nC. ⚠️ ระวัง! prefix ยาวที่สุด (longest match) ต่างหากที่ชนะ ไม่ใช่สั้นที่สุด — แต่ข้อนี้โจทย์ระบุว่าเป็น route เดียวกัน (10.10.10.0) จึงต้องใช้ AD ตัดสิน\n\n📗 ลำดับตัดสินใจของ router: 1) Longest Prefix Match → 2) ต่ำสุด AD → 3) ต่ำสุด Metric',
  },
  {
    id: 286,
    kind: 'single',
    prompt: 'Which configuration management mechanism uses TCP port 22 by default when communicating with managed nodes?',
    options: [
      { key: 'A', text: 'Ansible' },
      { key: 'B', text: 'Python' },
      { key: 'C', text: 'Puppet' },
      { key: 'D', text: 'Chef' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบเครื่องมือ Configuration Management (ออกสอบบ่อยมาก):\n\n⭐ Ansible\n   • ภาษา: Python  • พอร์ต: TCP 22 (SSH)\n   • Agentless ✔ (ไม่ต้องติดตั้งอะไรบนอุปกรณ์)\n   • ไฟล์: Playbook (เขียนด้วย YAML)\n\n🔹 Puppet\n   • ภาษา: Ruby  • พอร์ต: TCP 8140\n   • ต้องติดตั้ง Agent บน node\n   • ไฟล์: Manifest (.pp)\n\n🔹 Chef\n   • ภาษา: Ruby  • พอร์ต: TCP 10002\n   • ต้องติดตั้ง Agent บน node\n   • ไฟล์: Cookbook / Recipe\n\n✅ ทำไม A ถูก: Ansible เป็น "agentless" — ไม่ต้องติดตั้งซอฟต์แวร์ใด ๆ บนอุปกรณ์ปลายทาง แต่ใช้ SSH (TCP 22) ซึ่งมีอยู่แล้วในอุปกรณ์เครือข่ายเกือบทุกตัว เชื่อมเข้าไปสั่งงานโดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nC. Puppet ใช้ TCP 8140 และต้องติดตั้ง agent บน node\nD. Chef ใช้ TCP 10002 (push jobs) และต้องติดตั้ง agent เช่นกัน\nB. Python เป็น "ภาษาโปรแกรม" ไม่ใช่ configuration management tool (แม้ Ansible จะเขียนด้วย Python ก็ตาม)\n\n📗 จำง่าย: Ansible = ไม่ต้องลง agent + ใช้ SSH 22 + YAML → เป็นเหตุผลที่นิยมที่สุดในงาน network automation',
  },
  {
    id: 287,
    kind: 'single',
    prompt: 'Which 802.11 frame type is indicated by a probe response after a client sends a probe request?',
    options: [
      { key: 'A', text: 'action' },
      { key: 'B', text: 'management' },
      { key: 'C', text: 'control' },
      { key: 'D', text: 'data' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — 802.11 มีเฟรม 3 ประเภทหลัก:\n\n1️⃣ ⭐ Management Frame → ใช้จัดการการเชื่อมต่อระหว่าง client กับ AP ได้แก่:\n   • Beacon (AP ประกาศตัวเป็นระยะ)\n   • Probe Request / Probe Response ✔ (client ถามหา AP / AP ตอบกลับ)\n   • Authentication Request/Response\n   • Association Request/Response\n   • Reassociation Request/Response (ตอน roaming)\n   • Deauthentication / Disassociation\n\n2️⃣ Control Frame → ช่วยควบคุมการเข้าถึงสื่อกลาง: RTS, CTS, ACK, Block ACK\n\n3️⃣ Data Frame → บรรทุกข้อมูลผู้ใช้จริง (payload)\n\n✅ ทำไม B ถูก: Probe Request และ Probe Response เป็นส่วนหนึ่งของกระบวนการ "ค้นหาและเชื่อมต่อ" กับ AP จึงจัดอยู่ในประเภท management frame\n\n❌ ทำไมข้ออื่นผิด:\nC. control frame (RTS/CTS/ACK) ทำหน้าที่ควบคุมจังหวะการส่งเพื่อลดการชนกัน ไม่ได้ใช้ค้นหา AP\nD. data frame ใช้บรรทุกข้อมูลจริงหลังเชื่อมต่อสำเร็จแล้ว\nA. "action frame" เป็น subtype ย่อยหนึ่งของ management frame ไม่ใช่ประเภทหลัก และไม่ใช่คำตอบของ probe response\n\n📗 ลำดับการเชื่อมต่อ Wi-Fi: Probe → Authentication → Association → (ส่ง Data ได้)',
  },
  {
    id: 288,
    kind: 'multi',
    prompt: 'Which two conditions must be met before SSH can operate normally on a Cisco IOS switch? (Choose two)',
    options: [
      { key: 'A', text: 'The switch must be running a k9 (crypto) IOS image' },
      { key: 'B', text: 'The ip domain-name command must be configured on the switch' },
      { key: 'C', text: 'IP routing must be enabled on the switch' },
      { key: 'D', text: 'A console password must be configured on the switch' },
      { key: 'E', text: 'Telnet must be disabled on the switch' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — ขั้นตอนเปิด SSH บน Cisco IOS (ตามลำดับจริง):\n\n1️⃣ ⭐ ต้องมี IOS image แบบ k9 (crypto) → ถ้าเป็น image ธรรมดาจะไม่มีคำสั่งเข้ารหัสเลย ทำ SSH ไม่ได้เด็ดขาด\n2️⃣ ตั้ง hostname → Switch(config)# hostname SW1\n3️⃣ ⭐ ตั้ง domain name → SW1(config)# ip domain-name example.com\n   (ทั้ง hostname และ domain-name จำเป็นเพราะใช้ประกอบเป็นชื่อ FQDN สำหรับสร้าง RSA key)\n4️⃣ สร้าง RSA key → SW1(config)# crypto key generate rsa modulus 1024\n   (ถ้ายังไม่ตั้ง domain-name คำสั่งนี้จะ error ทันที!)\n5️⃣ สร้าง user → username admin secret P@ss\n6️⃣ เปิดใช้บน vty → line vty 0 4 / transport input ssh / login local\n\n✅ ทำไม A ถูก: ถ้า IOS ไม่ใช่เวอร์ชัน k9/crypto จะไม่มีฟีเจอร์เข้ารหัส → SSH ใช้งานไม่ได้เลย\n✅ ทำไม B ถูก: ip domain-name จำเป็นต่อการสร้าง RSA key pair (ซึ่งเป็นหัวใจของ SSH)\n\n❌ ทำไมข้ออื่นผิด:\nC. IP routing ไม่เกี่ยวกับ SSH — สวิตช์ Layer 2 (ไม่เปิด routing) ก็ทำ SSH ได้ปกติ แค่ต้องมี management IP บน SVI\nD. console password ใช้ควบคุมการเข้าทางสาย console เท่านั้น ไม่เกี่ยวกับการเข้าผ่าน SSH (ซึ่งใช้ line vty)\nE. ไม่จำเป็นต้องปิด Telnet — เปิด SSH พร้อมกันได้ (แม้ในทางปฏิบัติควรปิด Telnet ด้วย "transport input ssh" เพื่อความปลอดภัย แต่ไม่ใช่ "เงื่อนไขบังคับ" ให้ SSH ทำงาน)',
  },
  {
    id: 289,
    kind: 'single',
    image: q289,
    prompt:
      'Refer to the exhibit. SW1 Fa0/1 is configured with "switchport trunk native vlan 999" and SW2 Fa0/1 with "switchport trunk native vlan 99". Both are 802.1Q trunks. Which action do the switches take on the trunk link?',
    options: [
      { key: 'A', text: 'The trunk does not form and the ports go into an err-disabled status' },
      { key: 'B', text: 'The trunk forms but the mismatched native VLANs are merged into a single broadcast domain' },
      { key: 'C', text: 'The trunk does not form, but VLAN 99 and VLAN 999 are allowed to traverse the link' },
      { key: 'D', text: 'The trunk forms but VLAN 99 and VLAN 999 are in a shutdown state' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Native VLAN ทำงานอย่างไร:\n• บน trunk 802.1Q ทราฟฟิกทุก VLAN จะถูก "แท็ก" (tag) ยกเว้น native VLAN ที่ส่งแบบ "ไม่แท็ก" (untagged)\n• เมื่อสวิตช์ปลายทางรับเฟรมที่ไม่มีแท็ก มันจะ "เดา" ว่าเฟรมนั้นเป็นของ native VLAN ของ "ตัวเอง"\n\n✅ วิเคราะห์สิ่งที่เกิดขึ้นจริง:\n• SW1 ส่งทราฟฟิก VLAN 999 แบบ untagged (เพราะเป็น native ของ SW1)\n• SW2 รับเฟรม untagged มา แล้วคิดว่า "อ๋อ นี่คือ VLAN 99" (เพราะ native ของ SW2 คือ 99)\n→ ผลลัพธ์: ทราฟฟิก VLAN 999 ของ SW1 ไปโผล่ใน VLAN 99 ของ SW2 = ⚠️ สอง VLAN ถูก "หลอมรวม" เป็น broadcast domain เดียวกัน!\n\n⭐ จุดสำคัญ: trunk ยังคง "ฟอร์มขึ้นได้ตามปกติ" — สวิตช์แค่ขึ้น log เตือน (%CDP-4-NATIVE_VLAN_MISMATCH) แต่ลิงก์ไม่ล่ม ไม่ err-disable\n\n❌ ทำไมข้ออื่นผิด:\nA. native VLAN mismatch "ไม่ได้" ทำให้พอร์ต err-disabled (สิ่งที่ทำให้ err-disable คือ port security violation, BPDU guard) — trunk ยังทำงานอยู่\nC. trunk ฟอร์มขึ้นได้ ไม่ใช่ไม่ฟอร์ม\nD. VLAN ทั้งสองไม่ได้ถูก shutdown — ยังทำงานอยู่ แค่ถูกหลอมรวมกันโดยไม่ตั้งใจ\n\n🔒 ความเสี่ยงด้านความปลอดภัย: native VLAN mismatch เปิดช่องให้ทำ VLAN hopping ได้ → ควรตั้ง native VLAN ให้ตรงกันทั้งสองฝั่ง และใช้ VLAN ที่ไม่ได้ใช้งานจริง',
  },
  {
    id: 290,
    kind: 'single',
    image: q290,
    prompt:
      'Refer to the exhibit. Host A is 10.10.13.214. The OSPF routes include 10.10.13.0/25, 10.10.13.128/28, 10.10.13.144/28, 10.10.13.160/29, and 10.10.13.208/29. Which prefix does Router1 use for traffic to Host A?',
    options: [
      { key: 'A', text: '10.10.10.0' },
      { key: 'B', text: '10.10.13.0' },
      { key: 'C', text: '10.10.13.144' },
      { key: 'D', text: '10.10.13.208' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด: Longest Prefix Match — ต้องคำนวณช่วง (range) ของแต่ละ route แล้วดูว่า Host A (10.10.13.214) ตกอยู่ในช่วงไหน\n\n🧮 คำนวณทีละเส้น:\n• 10.10.13.0/25 → mask 255.255.255.128 → ช่วง .0 – .127 → ❌ ไม่มี .214\n• 10.10.13.128/28 → block 16 → ช่วง .128 – .143 → ❌\n• 10.10.13.144/28 → block 16 → ช่วง .144 – .159 → ❌\n• 10.10.13.160/29 → block 8 → ช่วง .160 – .167 → ❌\n• ⭐ 10.10.13.208/29 → block 8 → ช่วง .208 – .215 → ✔ มี .214 อยู่ในช่วงนี้!\n\n✅ ทำไม D ถูก: มีเพียง 10.10.13.208/29 เท่านั้นที่ครอบคลุม 10.10.13.214 → router เลือกเส้นนี้\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.10.10.0/28 เป็นเครือข่ายที่ต่อโดยตรงกับสวิตช์ ไม่ใช่ปลายทางของ Host A\nB. 10.10.13.0/25 ครอบคลุมแค่ .0–.127 ไม่ถึง .214\nC. 10.10.13.144/28 ครอบคลุมแค่ .144–.159 ไม่ถึง .214\n\n📗 เทคนิคคิดเร็ว: /29 → block size = 256 − 248 = 8 → subnet เริ่มที่ .208 จึงจบที่ .208+8−1 = .215',
  },
  {
    id: 291,
    kind: 'single',
    image: q291,
    prompt:
      'Refer to the exhibit. R2 is configured with BGP, OSPF, EIGRP, and also "ip route 10.1.1.0 255.255.255.0 192.168.0.1". Which protocol does R2 choose to reach network 10.1.1.0?',
    options: [
      { key: 'A', text: 'eBGP' },
      { key: 'B', text: 'static' },
      { key: 'C', text: 'OSPF' },
      { key: 'D', text: 'EIGRP' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด: เมื่อ router รู้จักปลายทางเดียวกัน (10.1.1.0/24) จากหลายแหล่ง จะเลือกแหล่งที่มี Administrative Distance ต่ำที่สุด\n\n📊 เทียบ AD ของแต่ละแหล่งในโจทย์:\n• ⭐ Static → AD 1  ← ต่ำสุด ชนะ! ✔\n• eBGP → AD 20\n• EIGRP → AD 90\n• OSPF → AD 110\n\n✅ ทำไม B ถูก: บรรทัดสุดท้ายของ config คือ "ip route 10.1.1.0 255.255.255.0 192.168.0.1" = static route ซึ่งมี AD = 1 ต่ำกว่าทุกโปรโตคอลแบบไดนามิก → R2 จึงติดตั้ง static route ลง routing table และใช้เส้นนี้\n\n❌ ทำไมข้ออื่นผิด:\nA. eBGP มี AD 20 — ต่ำสุดในบรรดา dynamic protocol แต่ยังแพ้ static (1)\nD. EIGRP มี AD 90 แพ้ทั้ง static และ eBGP\nC. OSPF มี AD 110 สูงสุดในกลุ่มนี้ และสังเกตว่า R2 ตั้ง "network 192.168.1.2" ซึ่งไม่ตรงกับอินเทอร์เฟซจริง (192.168.0.2) → OSPF จะไม่ทำงานบนลิงก์นี้ด้วยซ้ำ\n\n📗 จำไว้: static route (AD 1) มักชนะเสมอ เว้นแต่จะตั้งเป็น floating static (ใส่ AD สูงต่อท้าย)',
  },
  {
    id: 292,
    kind: 'multi',
    image: q292,
    prompt:
      'Refer to the exhibit. The routing table shows: "C 192.168.1.0/26 is directly connected, FastEthernet0/1". Which two addresses are included in this routing table entry? (Choose two)',
    options: [
      { key: 'A', text: '192.168.1.17' },
      { key: 'B', text: '192.168.1.61' },
      { key: 'C', text: '192.168.1.64' },
      { key: 'D', text: '192.168.1.127' },
      { key: 'E', text: '192.168.1.254' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — คำนวณช่วงของ /26:\n• /26 → subnet mask = 255.255.255.192\n• Block size = 256 − 192 = 64\n• Subnet ที่เป็นไปได้: .0, .64, .128, .192\n\n⭐ ดังนั้น 192.168.1.0/26 ครอบคลุม: 192.168.1.0 – 192.168.1.63\n   (network = .0 | usable host = .1 – .62 | broadcast = .63)\n\n✅ ตรวจทีละตัวเลือก:\n• A. 192.168.1.17 → อยู่ในช่วง .0–.63 ✔ ถูกต้อง\n• B. 192.168.1.61 → อยู่ในช่วง .0–.63 ✔ ถูกต้อง\n• C. 192.168.1.64 → ❌ นี่คือ "network address ของ subnet ถัดไป" (192.168.1.64/26) ไม่ได้อยู่ใน /26 นี้แล้ว!\n• D. 192.168.1.127 → ❌ อยู่ใน subnet 192.168.1.64/26 (เป็น broadcast ของ subnet นั้น)\n• E. 192.168.1.254 → ❌ อยู่ใน subnet 192.168.1.192/26\n\n⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B,C แต่ .64 อยู่นอกช่วง /26 นี้อย่างชัดเจน (subnet นี้จบที่ .63) — คำตอบที่ถูกต้องคือ A,B\n\n📗 เทคนิค: หา block size จาก 256 − ค่า mask octet สุดท้าย แล้วนับเป็นช่วง ๆ ไป (0, 64, 128, 192)',
  },
  {
    id: 293,
    kind: 'single',
    prompt: 'Which IPv6 address block forwards packets to a multicast address rather than a unicast address?',
    options: [
      { key: 'A', text: '2000::/3' },
      { key: 'B', text: 'FC00::/7' },
      { key: 'C', text: 'FE80::/10' },
      { key: 'D', text: 'FF00::/8' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตาราง IPv6 address blocks ที่ต้องท่องให้ขึ้นใจ:\n\n• 2000::/3 → Global Unicast : route บนอินเทอร์เน็ตได้ (= public IPv4)\n• FC00::/7 → Unique Local (ULA) : ใช้ภายในองค์กร (= private IPv4)\n• FE80::/10 → Link-Local : ใช้เฉพาะบนลิงก์เดียว (มีอัตโนมัติเสมอ)\n• ⭐ FF00::/8 → Multicast : ส่งหาหลายผู้รับพร้อมกัน ✔\n\n✅ ทำไม D ถูก: ทุก address ที่ขึ้นต้นด้วย FF คือ multicast ใน IPv6 (จำง่าย: FF = "For Fanout" / ส่งกระจาย)\n\n💡 Multicast address สำคัญที่ต้องรู้:\n• FF02::1 → all-nodes (เทียบเท่า broadcast ใน IPv4)\n• FF02::2 → all-routers\n• FF02::5 / FF02::6 → OSPFv3 all-SPF-routers / all-DR-routers\n• FF02::A → EIGRPv6\n\n❌ ทำไมข้ออื่นผิด:\nA. 2000::/3 = global unicast (ส่งหาผู้รับเดียว)\nB. FC00::/7 = unique local unicast (ส่งหาผู้รับเดียว ภายในองค์กร)\nC. FE80::/10 = link-local unicast (ส่งหาผู้รับเดียว บนลิงก์เดียวกัน)\n\n⭐ เกร็ด: IPv6 "ไม่มี broadcast" แล้ว! ใช้ multicast (FF02::1) แทนทั้งหมด',
  },
  {
    id: 294,
    kind: 'multi',
    prompt:
      'What are two recommendations for protecting network ports from being exploited when located in an office space outside of an IT closet? (Choose two)',
    options: [
      { key: 'A', text: 'enable the PortFast feature on ports' },
      { key: 'B', text: 'implement port-based authentication' },
      { key: 'C', text: 'configure static ARP entries' },
      { key: 'D', text: 'configure ports to a fixed speed' },
      { key: 'E', text: 'shut down unused ports' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด: พอร์ตที่อยู่ในพื้นที่เปิด (นอกห้อง IT) เสี่ยงถูกคนแปลกหน้าเสียบอุปกรณ์เข้ามา → ต้องใช้มาตรการที่ "ควบคุมว่าใครมีสิทธิ์ใช้พอร์ต"\n\n✅ ทำไม B ถูก: Port-based authentication (802.1X) บังคับให้อุปกรณ์ต้องพิสูจน์ตัวตนกับ RADIUS/ISE ก่อน จึงจะได้รับอนุญาตให้ใช้เครือข่าย → คนแปลกหน้าเสียบสายมาก็ใช้งานไม่ได้ (นี่คือมาตรการที่แข็งแรงที่สุด)\n\n✅ ทำไม E ถูก: การ shutdown พอร์ตที่ไม่ได้ใช้ (และย้ายไป unused/black-hole VLAN) ทำให้ไม่มีช่องให้เสียบใช้งานได้เลย = ลดพื้นที่โจมตี (attack surface)\n\n❌ ทำไมข้ออื่นผิด:\nA. ⚠️ PortFast เป็นฟีเจอร์ "เพิ่มความเร็ว" (ข้าม STP listening/learning) ไม่ใช่ฟีเจอร์ความปลอดภัยเลย — ที่จริงถ้าเปิดโดยไม่มี BPDU guard ยิ่งเพิ่มความเสี่ยงต่อ STP attack ด้วยซ้ำ\nC. static ARP entries ช่วยลด ARP spoofing ได้บ้าง แต่บริหารจัดการไม่ไหวในสเกลจริง (ต้องใส่ทีละเครื่อง) และไม่ได้ป้องกันคนเสียบสายมาใช้เครือข่าย\nD. การ fix speed เป็นเรื่องประสิทธิภาพ/ความเสถียรของลิงก์ ไม่เกี่ยวกับความปลอดภัยใด ๆ\n\n📗 มาตรการเสริมที่ควรทำด้วย: Port Security (จำกัดจำนวน MAC), DHCP Snooping, DAI, BPDU Guard',
  },
  {
    id: 295,
    kind: 'single',
    image: q295,
    prompt:
      'Refer to the exhibit. Which route type does the routing protocol Code "D" represent in the output?\n\nD  192.168.0.0/24 [90/30720] via 172.16.0.2, 00:00:03, FastEthernet0/0',
    options: [
      { key: 'A', text: 'internal BGP route' },
      { key: 'B', text: 'route of a locally configured IP' },
      { key: 'C', text: 'statically assigned route' },
      { key: 'D', text: 'route learned through EIGRP' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Routing table codes ที่ต้องจำ (ออกสอบบ่อยมาก):\n\n• C → Connected (ต่อโดยตรง) : AD 0\n• L → Local (IP ของอินเทอร์เฟซเอง) : AD 0\n• S → Static : AD 1\n• ⭐ D → EIGRP ✔ : AD 90\n• EX → EIGRP external : AD 170\n• O → OSPF : AD 110\n• IA → OSPF inter-area : AD 110\n• R → RIP : AD 120\n• B → BGP : AD 20 (eBGP) / 200 (iBGP)\n• i → IS-IS : AD 115\n\n✅ ทำไม D ถูก: ตัวอักษร "D" ย่อมาจาก DUAL (Diffusing Update Algorithm) ซึ่งเป็นอัลกอริทึมของ EIGRP\n(เหตุผลที่ไม่ใช้ "E" เพราะ E ถูกจองไว้ให้ EGP มาก่อนแล้ว)\n\n🔍 ยืนยันจาก output: ค่า [90/30720] → เลข 90 คือ AD ของ EIGRP พอดี ✔ (ถ้าเป็น OSPF จะเป็น 110, RIP เป็น 120)\n\n❌ ทำไมข้ออื่นผิด:\nA. internal BGP ใช้โค้ด "B" และมี AD 200\nB. IP ที่ตั้งบนอินเทอร์เฟซเองใช้โค้ด "L" (Local) หรือ "C" (Connected) และมี AD 0\nC. static route ใช้โค้ด "S" และมี AD 1',
  },
  {
    id: 296,
    kind: 'single',
    prompt: 'Which type of IPv6 address is publicly routable in the same way as an IPv4 public address?',
    options: [
      { key: 'A', text: 'global unicast' },
      { key: 'B', text: 'link-local' },
      { key: 'C', text: 'unique local' },
      { key: 'D', text: 'multicast' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เทียบ IPv6 กับ IPv4 ให้เห็นภาพ:\n\n• ⭐ Global Unicast (2000::/3) → เทียบเท่า Public IPv4 ✔ (route บนอินเทอร์เน็ตได้)\n• Unique Local / ULA (FC00::/7) → เทียบเท่า Private IPv4 (RFC 1918)\n• Link-Local (FE80::/10) → เทียบเท่า APIPA (169.254.x.x)\n• Multicast (FF00::/8) → เทียบเท่า Multicast (224.x.x.x)\n\n✅ ทำไม A ถูก: Global Unicast (ขึ้นต้นด้วย 2 หรือ 3) เป็น address ที่ไม่ซ้ำกันทั่วโลก และ ISP จะ route ให้บนอินเทอร์เน็ตสาธารณะ — เทียบเท่า public IPv4 ตรงตัว\n\n❌ ทำไมข้ออื่นผิด:\nB. link-local (FE80::) ใช้ได้เฉพาะภายในลิงก์เดียวเท่านั้น router จะไม่ forward ข้ามลิงก์เด็ดขาด (เทียบได้กับ APIPA)\nC. unique local (FC00::/7) เทียบเท่า private IPv4 — ใช้ภายในองค์กร ไม่ route ออกอินเทอร์เน็ต\nD. multicast (FF00::) ใช้ส่งหาหลายผู้รับพร้อมกัน ไม่ใช่ address ปลายทางเดี่ยวแบบ public\n\n📗 เกร็ดสำคัญ: IPv6 มี address space มหาศาล (2^128) จึงไม่จำเป็นต้องใช้ NAT — โฮสต์ทุกตัวสามารถมี global unicast ของตัวเองได้เลย',
  },
  {
    id: 297,
    kind: 'single',
    image: q297,
    prompt:
      'Refer to the exhibit. "show etherchannel summary" shows Po1(SD) with LACP and ports Fa0/1(I), Fa0/2(I). Both Switch1 and Switch2 have "channel-group 1 mode passive" on both interfaces. Which change allows the two switches to establish an EtherChannel?',
    options: [
      { key: 'A', text: 'Change the protocol to EtherChannel mode on' },
      { key: 'B', text: 'Change the LACP mode to active' },
      { key: 'C', text: 'Change the LACP mode to desirable' },
      { key: 'D', text: 'Change the protocol to PAgP and use auto mode' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — การจับคู่โหมด LACP (ต้องจำ!):\n• active + active → ✔ เกิด EtherChannel\n• active + passive → ✔ เกิด EtherChannel\n• ⚠️ passive + passive → ❌ ไม่เกิด! (ต่างฝ่ายต่างรอให้อีกฝ่ายเริ่มก่อน — ไม่มีใครเริ่มเลย)\n\n🔍 อ่านค่าจาก output:\n• Po1(SD) → S = Layer2, ⭐D = down (channel ล่ม)\n• Fa0/1(I), Fa0/2(I) → ⭐I = stand-alone (พอร์ตไม่ได้เข้าร่วม bundle)\n→ ยืนยันว่า EtherChannel ไม่ฟอร์มขึ้นเพราะทั้งสองฝั่งเป็น passive\n\n✅ ทำไม B ถูก: เปลี่ยนฝั่งใดฝั่งหนึ่ง (หรือทั้งสอง) เป็น "active" → active+passive = ฟอร์ม EtherChannel ได้ทันที\nคำสั่ง: interface range fa0/1-2 → channel-group 1 mode active\n\n❌ ทำไมข้ออื่นผิด:\nA. โหมด "on" ไม่ใช้โปรโตคอลเจรจาเลย (static) — ถ้าเปลี่ยนแค่ฝั่งเดียวเป็น on แต่อีกฝั่งยังเป็น LACP passive จะ "ไม่เกิด" channel และเสี่ยง loop ด้วย (ต้องตั้ง on ทั้งสองฝั่งเท่านั้น)\nC. "desirable" เป็นโหมดของ PAgP ไม่ใช่ LACP — ใช้ผสมกับ LACP passive ไม่ได้ (คนละโปรโตคอล ห้ามผสม!)\nD. เปลี่ยนเป็น PAgP auto จะยิ่งแย่: auto+auto ก็ไม่เกิดเช่นกัน และยังผิดโปรโตคอลกับอีกฝั่งที่เป็น LACP\n\n📗 กฎเหล็ก: ห้ามผสม LACP กับ PAgP เด็ดขาด • LACP: active/passive • PAgP: desirable/auto',
  },
  {
    id: 298,
    kind: 'single',
    prompt: 'What is the path for traffic sent from one user workstation to another workstation on a separate switch in a three-tier architecture model?',
    options: [
      { key: 'A', text: 'access - core - distribution - access' },
      { key: 'B', text: 'access - distribution - distribution - access' },
      { key: 'C', text: 'access - core - access' },
      { key: 'D', text: 'access - distribution - core - distribution - access' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม 3 ชั้นของ Cisco:\n\n         ┌─────────┐\n         │  CORE   │  ← backbone ความเร็วสูง (forward อย่างเดียว)\n         └────┬────┘\n        ┌─────┴─────┐\n   ┌────▼───┐  ┌────▼───┐\n   │  DIST  │  │  DIST  │  ← aggregation, ขอบเขต L2/L3, policy\n   └────┬───┘  └────┬───┘\n   ┌────▼───┐  ┌────▼───┐\n   │ ACCESS │  │ ACCESS │  ← ต่อ end device (PC, phone)\n   └────┬───┘  └────┬───┘\n      PC-A          PC-B\n\n✅ ทำไม D ถูก: ทราฟฟิกจาก PC-A ไป PC-B ที่อยู่คนละ access switch (คนละฝั่ง) ต้องไต่ขึ้นไปและลงมาตามลำดับชั้น:\nAccess (ต้นทาง) → Distribution → Core → Distribution → Access (ปลายทาง)\n⭐ หลักการสำคัญ: access switch จะ "ไม่คุยกันเอง" โดยตรง และ core ไม่เชื่อมกับ access โดยตรง — ต้องผ่าน distribution เสมอ\n\n❌ ทำไมข้ออื่นผิด:\nA. ข้าม distribution ฝั่งต้นทางไปหา core เลย — ผิดหลัก เพราะ access ไม่ได้ต่อกับ core โดยตรง\nB. ขาดชั้น core — distribution สองตัวไม่ได้เชื่อมกันเองโดยตรงในโมเดล 3 ชั้น (ต้องผ่าน core)\nC. ข้าม distribution ทั้งสองฝั่ง — ไม่ใช่โมเดล 3 ชั้น\n\n📗 หมายเหตุ: ถ้าเป็น "two-tier / collapsed core" (core+distribution รวมกัน) เส้นทางจะเป็น access → collapsed core → access',
  },
  {
    id: 299,
    kind: 'single',
    image: q299,
    prompt:
      'Refer to the exhibit. R1 has "C 172.16.1.128/25 directly connected" and a default route "O*E2 0.0.0.0/0 [110/1] via 192.168.14.4". If R1 receives a packet destined to 172.16.1.1, to which IP address does it send the packet?',
    options: [
      { key: 'A', text: '192.168.12.2' },
      { key: 'B', text: '192.168.13.3' },
      { key: 'C', text: '192.168.14.4' },
      { key: 'D', text: '192.168.15.5' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด: ตรวจสอบว่าปลายทางตรงกับ route ใดด้วย Longest Prefix Match ถ้าไม่ตรงเลย → ใช้ default route\n\n🧮 วิเคราะห์ปลายทาง 172.16.1.1:\n• C 172.16.1.128/25 → mask 255.255.255.128 → ครอบคลุม 172.16.1.128 – 172.16.1.255\n  ⚠️ ปลายทางคือ .1 ซึ่ง "น้อยกว่า .128" → ❌ ไม่อยู่ในช่วงนี้! (กับดักหลักของข้อนี้ — คนมักเผลอคิดว่า 172.16.1.x ต้องตรงกับ 172.16.1.128/25)\n• C 172.16.16.1 (Loopback1) → เป็นคนละ address กันเลย (172.16.16.1 ≠ 172.16.1.1) → ❌\n• routes อื่น ๆ เป็นของ 192.168.x.x → ❌\n\n→ ไม่มี route เจาะจงใดตรงกับ 172.16.1.1 เลย → ใช้ default route:\n   O*E2 0.0.0.0/0 [110/1] via ⭐192.168.14.4, FastEthernet1/0 ✔\n(สังเกต "Gateway of last resort is 192.168.14.4" ที่บรรทัดบนสุดก็ยืนยันตรงกัน)\n\n✅ ทำไม C ถูก: 192.168.14.4 คือ next-hop ของ default route ซึ่งเป็นทางเดียวที่เหลือ\n\n❌ ทำไมข้ออื่นผิด:\nA. 192.168.12.2 เป็น next-hop ของ EIGRP route ไปยัง 192.168.10.1/32 (คนละปลายทาง)\nB. 192.168.13.3 เป็น next-hop ของ OSPF route ไปยัง 192.168.10.32/27 (คนละปลายทาง)\nD. 192.168.15.5 เป็น next-hop ของ route ไปยัง 192.168.0.0/16 (ไม่ครอบคลุม 172.16.x.x)\n\n📗 บทเรียน: /25 แบ่ง octet สุดท้ายเป็น 2 ครึ่ง (.0–.127 และ .128–.255) — ต้องดูให้ดีว่าปลายทางอยู่ครึ่งไหน',
  },
  {
    id: 300,
    kind: 'single',
    prompt: 'A packet is destined for 10.10.1.22. Which static route does the router choose to forward the packet?',
    options: [
      { key: 'A', text: 'ip route 10.10.1.0 255.255.255.240 10.10.255.1' },
      { key: 'B', text: 'ip route 10.10.1.16 255.255.255.252 10.10.255.1' },
      { key: 'C', text: 'ip route 10.10.1.20 255.255.255.252 10.10.255.1' },
      { key: 'D', text: 'ip route 10.10.1.20 255.255.255.254 10.10.255.1' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด: router เลือก route ที่ปลายทาง "ตกอยู่ในช่วง" และมี prefix ยาวที่สุด — ต้องคำนวณช่วงของแต่ละตัวเลือก\n\n🧮 คำนวณทีละข้อ (ปลายทาง = 10.10.1.22):\n\n• A. 10.10.1.0 / 255.255.255.240 (/28) → block 16 → ช่วง .0 – .15\n     → ❌ .22 ไม่อยู่ในช่วง\n\n• B. 10.10.1.16 / 255.255.255.252 (/30) → block 4 → ช่วง .16 – .19\n     → ❌ .22 ไม่อยู่ในช่วง\n\n• ⭐C. 10.10.1.20 / 255.255.255.252 (/30) → block 4 → ช่วง .20 – .23\n     → ✔ .22 อยู่ในช่วงนี้พอดี!\n\n• D. 10.10.1.20 / 255.255.255.254 (/31) → block 2 → ช่วง .20 – .21\n     → ❌ .22 เกินมา 1 เบอร์ (จบที่ .21)\n\n✅ ทำไม C ถูก: มีเพียง 10.10.1.20/30 (ช่วง .20–.23) เท่านั้นที่ครอบคลุม 10.10.1.22\n\n📗 เทคนิคคิดเร็ว — หา block size จาก 256 ลบด้วยเลข octet สุดท้ายของ mask:\n• 256 − 240 = 16 → /28 (ช่วงละ 16)\n• 256 − 252 = 4  → /30 (ช่วงละ 4)\n• 256 − 254 = 2  → /31 (ช่วงละ 2)\nแล้วไล่นับช่วงจาก network address ที่ระบุ',
  },
  {
    id: 301,
    kind: 'single',
    prompt:
      'An office has 8 floors with approximately 30-40 users per floor, and one subnet must be used. Which command must be configured on the router Switched Virtual Interface (SVI) to use address space efficiently?',
    options: [
      { key: 'A', text: 'ip address 192.168.0.0 255.255.0.0' },
      { key: 'B', text: 'ip address 192.168.0.0 255.255.254.0' },
      { key: 'C', text: 'ip address 192.168.0.0 255.255.255.128' },
      { key: 'D', text: 'ip address 192.168.0.0 255.255.255.224' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A (255.255.0.0) แต่ผิด — /16 ให้ถึง 65,534 hosts เปลืองสุด ๆ ไม่ "efficient" เลย คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — ต้องหา subnet เล็กที่สุดที่ยัง "พอ" ใส่จำนวน host ทั้งหมดได้ (ประหยัดที่สุด = prefix ยาวที่สุดที่ยังพอ)\n\n🧮 คำนวณ:\n• จำนวนผู้ใช้รวม = 8 ชั้น × 40 (เผื่อสูงสุด) = 320 hosts (ใช้ subnet เดียวตามโจทย์)\n• /24 = 2^8 − 2 = 254 hosts → ❌ ไม่พอ (< 320)\n• /23 (255.255.254.0) = 2^9 − 2 = 510 hosts → ✔ พอ และเหลือทิ้งน้อยสุดในบรรดาตัวเลือก\n\n✅ ทำไม B ถูก: 255.255.254.0 (/23) รองรับ 510 hosts เพียงพอสำหรับ 320 users และประหยัดกว่า /16 มหาศาล\n\n❌ ทำไมข้ออื่นผิด:\nA. 255.255.0.0 (/16) = 65,534 hosts → เปลืองที่อยู่มหาศาล ไม่ efficient\nC. 255.255.255.128 (/25) = 126 hosts → ❌ ไม่พอสำหรับ 320\nD. 255.255.255.224 (/27) = 30 hosts → ❌ ไม่พอ (พอแค่ 1 ชั้น)\n\n📗 จำไว้สอบ: "efficient" = เลือก mask ที่ hosts ≥ ที่ต้องการ แต่เกินน้อยที่สุด (prefix ยาวสุดที่ยังพอ) — /16 กับ /8 มักเป็นกับดัก "เปลือง"',
  },
  {
    id: 302,
    kind: 'drag',
    image: q302,
    prompt:
      'Drag the descriptions of IP protocol transmissions from the left onto the IP traffic types (TCP / UDP) on the right.',
    categories: [
      {
        name: 'TCP',
        items: [
          'sends transmissions in sequence',
          'transmits packets as a stream',
          'uses a lower transmission rate to ensure reliability',
        ],
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
      '📘 แนวคิด — เปรียบเทียบ TCP กับ UDP (ออกสอบบ่อยมาก):\n\n🔵 TCP (connection-oriented, reliable)\n   • ส่งข้อมูลเป็น "stream" ต่อเนื่อง และเรียงลำดับ (sequence numbers)\n   • มี ACK / retransmit → เชื่อถือได้ แต่มี overhead ทำให้ throughput ต่ำกว่า → "lower rate เพื่อความน่าเชื่อถือ"\n   • Header ใหญ่ = 20 bytes (ขึ้นไป)\n\n🟢 UDP (connectionless, best-effort)\n   • ส่งเป็น datagram แยกอิสระทีละชิ้น ("individually") ไม่รับประกันลำดับ\n   • ไม่มี ACK/handshake → เร็ว เหมาะกับงาน real-time ที่ไวต่อ latency (VoIP, วิดีโอ, เกม)\n   • ⭐ Header เล็ก = 8 bytes เท่านั้น (src port, dst port, length, checksum อย่างละ 2 bytes)\n\n✅ การจับคู่:\n• TCP → sends in sequence, transmits as a stream, lower rate to ensure reliability\n• UDP → 8-byte header, transmits individually, higher rate for latency-sensitive apps\n\n📗 จำไว้สอบ: "8-byte header + เร็ว + real-time + ทีละชิ้น" = UDP | "stream + เรียงลำดับ + น่าเชื่อถือ" = TCP',
  },
  {
    id: 303,
    kind: 'single',
    prompt: 'Which command must be entered when a device is configured as an NTP server?',
    options: [
      { key: 'A', text: 'ntp authenticate' },
      { key: 'B', text: 'ntp server' },
      { key: 'C', text: 'ntp peer' },
      { key: 'D', text: 'ntp master' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำสั่ง NTP ที่ต้องแยกให้ออก:\n• ntp master [stratum] → ตั้งอุปกรณ์ให้เป็น "NTP server" (แหล่งเวลาอ้างอิงในเครือข่าย)\n• ntp server <ip> → ตั้งเป็น "NTP client" ให้ไปถามเวลาจาก server ที่ระบุ\n• ntp peer <ip> → โหมด peer สองทาง (ซิงก์เวลาแบบเท่าเทียม)\n• ntp authenticate → เปิดการยืนยันตัวตน NTP (ความปลอดภัย ไม่ได้ทำให้เป็น server)\n\n✅ ทำไม D ถูก: ntp master สั่งให้เราเตอร์กลายเป็นแหล่งเวลาอ้างอิง (authoritative NTP server) ให้ตัวอื่นมาซิงก์\n\n❌ ทำไมข้ออื่นผิด:\nA. เปิด authentication เฉย ๆ ไม่ได้กำหนดบทบาท server\nB. ntp server ทำให้เป็น "client" ที่ไปถามเวลาจากที่อื่น (ตรงข้ามกับ server)\nC. ntp peer เป็นการซิงก์แบบเพื่อน ไม่ใช่ตั้งเป็น server\n\n📗 จำไว้สอบ: master = เป็น server | server = เป็น client (กลับด้านกับสามัญสำนึก — ระวังกับดัก!)',
  },
  {
    id: 304,
    kind: 'single',
    prompt: 'Which command must be entered to configure a DHCP relay?',
    options: [
      { key: 'A', text: 'ip helper-address' },
      { key: 'B', text: 'ip address dhcp' },
      { key: 'C', text: 'ip dhcp pool' },
      { key: 'D', text: 'ip dhcp relay' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — DHCP relay: เมื่อ client กับ DHCP server อยู่คนละ subnet, DHCP DISCOVER เป็น broadcast ที่เราเตอร์จะไม่ส่งข้าม subnet ให้ → ต้องมี relay แปลง broadcast เป็น unicast ส่งไปหา server\n\n✅ ทำไม A ถูก: ใส่ "ip helper-address <ip-ของ-DHCP-server>" ที่ SVI/interface ฝั่ง client → เราเตอร์จะ forward DHCP (และ broadcast บริการอื่นบางตัว) ไปยัง server ข้าม subnet\n\n❌ ทำไมข้ออื่นผิด:\nB. ip address dhcp → สั่งให้ "interface นี้" ไปขอ IP จาก DHCP เอง (เป็น client) ไม่ใช่ relay\nC. ip dhcp pool → สร้าง pool เพื่อทำตัวเป็น DHCP "server" ไม่ใช่ relay\nD. ip dhcp relay → ไม่ใช่คำสั่งที่ถูกต้องใน IOS สำหรับงานนี้\n\n📗 จำไว้สอบ: DHCP relay = "ip helper-address" ใส่ที่ขา interface ที่ติดกับฝั่ง client',
  },
  {
    id: 305,
    kind: 'single',
    prompt:
      'Which technology must be implemented to configure network device monitoring with the highest security?',
    options: [
      { key: 'A', text: 'IP SLA' },
      { key: 'B', text: 'syslog' },
      { key: 'C', text: 'NetFlow' },
      { key: 'D', text: 'SNMPv3' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C (NetFlow) แต่ผิด — คำถามเน้น "highest security" ซึ่ง NetFlow ไม่มีระบบความปลอดภัยในตัว คำตอบที่ถูกต้องคือ D (SNMPv3)\n\n📘 แนวคิด — SNMP เวอร์ชันกับความปลอดภัย:\n• SNMPv1 / v2c → ใช้ community string เป็น clear-text (ไม่ปลอดภัย)\n• ⭐ SNMPv3 → เพิ่ม 3 อย่าง: Authentication (ยืนยันตัวตน), Encryption/Privacy (เข้ารหัสข้อมูล), Integrity (ตรวจว่าข้อมูลไม่ถูกแก้) = ปลอดภัยสูงสุดสำหรับการ monitor อุปกรณ์\n\n✅ ทำไม D ถูก: ในบรรดาตัวเลือก มีเพียง SNMPv3 ที่ให้ authentication + encryption → "monitoring ที่ปลอดภัยที่สุด"\n\n❌ ทำไมข้ออื่นผิด:\nA. IP SLA → วัดคุณภาพเส้นทาง/ความหน่วง ไม่ใช่ระบบ monitor อุปกรณ์แบบมีความปลอดภัย\nB. syslog → ส่ง log แบบ clear-text (UDP 514) ไม่มีการเข้ารหัส\nC. NetFlow → เก็บสถิติทราฟฟิก (flow) ไม่มีกลไกความปลอดภัย/เข้ารหัสในตัว\n\n📗 จำไว้สอบ: เห็นคำว่า "monitoring + highest/most secure" → ตอบ SNMPv3 เสมอ',
  },
  {
    id: 306,
    kind: 'single',
    image: q306,
    prompt:
      'Refer to the exhibit. An engineer booted a new switch and applied this configuration via the console port. Which additional configuration must be applied to allow administrators to authenticate directly to enable (privilege) mode via Telnet using a local username and password?',
    options: [
      { key: 'A', text: 'username admin privilege 15 secret p@ss1234 / line vty 0 4 / login local' },
      { key: 'B', text: 'username admin secret p@ss1234 / line vty 0 4 / login local / enable secret p@ss1234' },
      { key: 'C', text: 'username admin / line vty 0 4 / password p@ss1234 / transport input telnet' },
      { key: 'D', text: 'username admin / line vty 0 4 / password p@ss1234' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โจทย์ต้องการ 2 อย่างพร้อมกัน: (1) ล็อกอิน Telnet ด้วย local username/password และ (2) เข้า "privilege mode ทันที" โดยไม่ต้องพิมพ์ enable ซ้ำ\n\nกุญแจสำคัญ = "privilege 15" ที่ผูกกับ username → พอ login สำเร็จ ผู้ใช้จะได้ระดับ 15 (enable) ทันที\n\n✅ ทำไม A ถูก:\n• username admin privilege 15 secret p@ss1234 → สร้าง user ระดับ 15 (เข้า enable ทันที)\n• line vty 0 4 + login local → บังคับ Telnet ให้ใช้ฐานข้อมูล local username\n→ ครบทั้งการยืนยันตัวตนด้วย local user และเข้า privilege mode ตรง ๆ\n\n❌ ทำไมข้ออื่นผิด:\nB. user ไม่มี privilege 15 → login แล้วได้แค่ user EXEC ต้องพิมพ์ enable + รหัสอีกครั้ง (ไม่ "ตรงเข้า" enable)\nC. ใช้ "password" ที่บรรทัด vty + ไม่มี login local → ไม่ได้ยืนยันด้วย local username และไม่ได้ privilege 15\nD. เหมือน C แต่แย่กว่า — ไม่มี login local, ไม่มี privilege 15, ไม่ได้ authenticate ด้วย username\n\n📗 จำไว้สอบ: "เข้า enable ทันทีหลัง Telnet" = username ... privilege 15 + line vty + login local',
  },
  {
    id: 307,
    kind: 'drag',
    image: q307,
    prompt:
      'Refer to the exhibit (ipconfig /all). Drag the values from the left onto the network parameters on the right. Not all values are used. (Host = 192.168.1.20 /24 on the Wi-Fi adapter.)',
    categories: [
      { name: 'broadcast address', items: ['192.168.1.255'] },
      { name: 'default gateway', items: ['192.168.1.1'] },
      { name: 'host IP address', items: ['192.168.1.20'] },
      { name: 'last assignable IP address in the subnet', items: ['192.168.1.254'] },
      { name: 'MAC address', items: ['B8-76-3F-7C-57-DF'] },
      { name: 'network address', items: ['192.168.1.0'] },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['1A-76-3F-7C-57-DF'] },
    ],
    explanation:
      '🔍 อ่านค่าจาก ipconfig /all — ต้องใช้ของอะแดปเตอร์ "Wi-Fi" ที่เชื่อมต่ออยู่ (IP 192.168.1.20, mask 255.255.255.0, gateway 192.168.1.1, Physical Address B8-76-3F-7C-57-DF)\n\n📘 แนวคิด — subnet 192.168.1.20 /24:\n• network address = 192.168.1.0 (bit host เป็น 0 ทั้งหมด)\n• broadcast address = 192.168.1.255 (bit host เป็น 1 ทั้งหมด)\n• last assignable (usable) = 192.168.1.254 (ก่อน broadcast 1 เบอร์)\n• host IP = 192.168.1.20 (ที่เครื่องได้รับ)\n• default gateway = 192.168.1.1\n• MAC address = B8-76-3F-7C-57-DF (Physical Address ของ Wi-Fi adapter)\n\n⚠️ ตัวลวง: 1A-76-3F-7C-57-DF เป็น MAC ของ "Wi-Fi Direct Virtual Adapter" ที่สถานะ Media disconnected → ไม่ใช่ของการเชื่อมต่อจริง จึงไม่ใช้\n\n📗 จำไว้สอบ: /24 → network = .0, broadcast = .255, last usable = .254 เสมอ • เลือก MAC จากอะแดปเตอร์ที่ "เชื่อมต่ออยู่จริง" เท่านั้น',
  },
  {
    id: 308,
    kind: 'multi',
    prompt: 'Which two actions influence the EIGRP route selection process? (Choose two)',
    options: [
      { key: 'A', text: 'The router calculates the reported distance by multiplying the delay on the exiting interface by 256.' },
      { key: 'B', text: 'The router calculates the best backup path to the destination route and assigns it as the feasible successor.' },
      { key: 'C', text: 'The router calculates the feasible distance of all paths to the destination route.' },
      { key: 'D', text: 'The advertised distance is calculated by a downstream neighbor to inform the local router of the bandwidth on the link.' },
      { key: 'E', text: 'The router must use the advertised distance as the metric for any given route.' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — คำศัพท์ EIGRP ที่ต้องแม่น:\n• Advertised/Reported Distance (AD/RD) = ค่า metric จาก "เพื่อนบ้าน" ถึงปลายทาง (ค่าที่เพื่อนบอกมา)\n• Feasible Distance (FD) = metric รวมจาก "ตัวเราเอง" ถึงปลายทาง (ผ่านเพื่อนคนนั้น)\n• Successor = เส้นทางที่ดีที่สุด (FD ต่ำสุด) → ลงตาราง routing\n• Feasible Successor (FS) = เส้นทางสำรอง ที่ผ่านเงื่อนไข RD < FD ของ successor → เก็บเป็น backup\n\n✅ ทำไม B, C ถูก:\nC. เราเตอร์คำนวณ FD ของทุกเส้นทางที่ไปยังปลายทาง → เพื่อหาว่าตัวไหน metric ต่ำสุด (เป็นขั้นตอนคัดเลือกโดยตรง)\nB. เราเตอร์เลือกเส้นทางสำรองที่ดีที่สุดเป็น Feasible Successor → มีผลต่อกระบวนการคัดเลือก/สำรองเส้นทาง\n\n❌ ทำไมข้ออื่นผิด:\nA. คำอธิบายการคิด RD ผิด — metric ไม่ได้คิดจาก "delay × 256" ตรง ๆ (สูตรจริง = [10^7/BW + sum(delay)/10] × 256 โดย BW เป็น kbps)\nD. AD ถูกคำนวณโดยเพื่อนบ้านจริง แต่ไม่ได้ "เพื่อบอก bandwidth ของลิงก์" — มันคือ metric รวมจากเพื่อนถึงปลายทาง\nE. เราเตอร์ใช้ FD (ไม่ใช่ AD) เป็น metric ของ route ในตาราง — ข้อนี้จึงผิด\n\n📗 จำไว้สอบ: FD = จากเรา, AD = จากเพื่อน • Successor = FD ต่ำสุด • FS ต้องผ่าน feasibility condition (RD < FD)',
  },
  {
    id: 309,
    kind: 'single',
    prompt:
      'Which mode must be set for APs to communicate to a Wireless LAN Controller using the Control and Provisioning of Wireless Access Points (CAPWAP) protocol?',
    options: [
      { key: 'A', text: 'bridge' },
      { key: 'B', text: 'route' },
      { key: 'C', text: 'autonomous' },
      { key: 'D', text: 'lightweight' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โหมดของ Access Point:\n• Autonomous AP → ทำงานเองครบเครื่อง (มี IOS เต็ม) คอนฟิกทีละตัว ไม่ต้องมี WLC\n• ⭐ Lightweight AP → "โง่" โดยตั้งใจ ต้องพึ่ง WLC จัดการ config/RF/security ให้ และคุยกับ WLC ผ่าน "CAPWAP tunnel"\n\n✅ ทำไม D ถูก: CAPWAP เป็นโปรโตคอลที่ใช้ระหว่าง Lightweight AP กับ WLC (control บน UDP 5246, data บน UDP 5247) → AP ต้องอยู่โหมด lightweight จึงจะสร้าง CAPWAP ไปหา WLC ได้\n\n❌ ทำไมข้ออื่นผิด:\nA/B. bridge, route ไม่ใช่โหมดที่เกี่ยวกับการเข้าร่วม WLC ผ่าน CAPWAP\nC. autonomous → AP อิสระ ไม่ใช้ WLC / ไม่ใช้ CAPWAP เพื่อรับการควบคุม\n\n📗 จำไว้สอบ: CAPWAP + WLC = Lightweight AP (split-MAC) | Autonomous = ยืนเดี่ยว ไม่มี controller',
  },
  {
    id: 310,
    kind: 'single',
    prompt: 'Which configuration is needed to generate an RSA key for SSH on a router?',
    options: [
      { key: 'A', text: 'Configure the version of SSH' },
      { key: 'B', text: 'Configure VTY access.' },
      { key: 'C', text: 'Create a user with a password.' },
      { key: 'D', text: 'Assign a DNS domain name' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ลำดับการเปิด SSH บนเราเตอร์: RSA key ต้องมี "ชื่อเต็ม" (FQDN) ในการสร้าง ซึ่งประกอบด้วย hostname + domain name → ดังนั้นต้องตั้ง hostname (ไม่ใช่ค่า default "Router") และตั้ง ip domain-name ก่อน จึงจะรัน crypto key generate rsa ได้\n\n✅ ทำไม D ถูก: ต้อง "ip domain-name <ชื่อโดเมน>" ก่อน มิฉะนั้นคำสั่งสร้างคีย์จะถูกปฏิเสธ (IOS ต้องใช้ hostname.domain มาตั้งชื่อคีย์)\n\n❌ ทำไมข้ออื่นผิด:\nA. เลือก version SSH (ip ssh version 2) ทำ "หลัง" มีคีย์แล้ว ไม่ใช่เงื่อนไขในการสร้างคีย์\nB. คอนฟิก VTY (transport input ssh, login local) จำเป็นสำหรับ "การล็อกอิน" แต่ไม่เกี่ยวกับการ "สร้าง RSA key"\nC. สร้าง user จำเป็นตอนล็อกอินด้วย login local เช่นกัน แต่ไม่ใช่สิ่งที่บังคับก่อน generate คีย์\n\n📗 จำไว้สอบ: ก่อน crypto key generate rsa → ต้องมี (1) hostname ไม่ใช่ค่า default และ (2) ip domain-name',
  },
  {
    id: 311,
    kind: 'single',
    prompt:
      'What makes Cisco DNA Center different from traditional network management applications and their management of networks?',
    options: [
      { key: 'A', text: 'It omits support for auto-discovery of network elements in a greenfield deployment.' },
      { key: 'B', text: 'Its modular design allows someone to implement different versions to meet the specific needs of an organization.' },
      { key: 'C', text: 'It abstracts policy from the actual device configuration.' },
      { key: 'D', text: 'It does not support high availability of management functions when operating in cluster mode.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Cisco DNA Center ใช้แนวคิด "intent-based networking": ผู้ดูแลบอก "เจตนา/นโยบาย" (เช่น กลุ่มนี้ห้ามคุยกับกลุ่มนั้น) แล้ว DNA Center ค่อยแปลงเป็น config จริงลงอุปกรณ์ให้เอง → policy ถูก "แยก (abstract)" ออกจาก CLI ของแต่ละอุปกรณ์\n\n✅ ทำไม C ถูก: จุดต่างสำคัญคือมัน "ดึงนโยบายออกจากการคอนฟิกอุปกรณ์" — ผู้ดูแลไม่ต้องไปแก้ CLI ทีละตัว ต่างจากเครื่องมือดั้งเดิมที่ผูกกับ config ต่ออุปกรณ์\n\n❌ ทำไมข้ออื่นผิด:\nA. DNA Center "รองรับ" auto-discovery (ตรงข้ามกับที่ข้อบอก)\nB. เป็นข้อความกว้าง ๆ ที่ไม่ใช่จุดเด่นเฉพาะของ DNA Center\nD. DNA Center "รองรับ" HA แบบ cluster (3 โหนด) — ข้อนี้จึงกลับความจริง\n\n📗 จำไว้สอบ: DNA Center = intent-based, abstract policy ออกจาก device config, บริหารรวมศูนย์',
  },
  {
    id: 312,
    kind: 'multi',
    prompt: 'Which two primary drivers support the need for network automation? (Choose two.)',
    options: [
      { key: 'A', text: 'Eliminating training needs' },
      { key: 'B', text: 'Increasing reliance on self-diagnostic and self-healing' },
      { key: 'C', text: 'Policy-derived provisioning of resources' },
      { key: 'D', text: 'Providing a single entry point for resource provisioning' },
      { key: 'E', text: 'Reducing hardware footprint' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — ทำไมองค์กรถึงต้องการ network automation? เป้าหมายหลักคือ ปรับใช้ทรัพยากรได้เร็ว/สม่ำเสมอ ตามนโยบาย และมีจุดควบคุมรวมศูนย์ ลด human error\n\n✅ ทำไม C, D ถูก:\nC. Policy-derived provisioning → จัดสรรทรัพยากรตามนโยบายอัตโนมัติ (ตั้ง intent ครั้งเดียว ระบบทำตามทุกที่เหมือนกัน)\nD. Single entry point for provisioning → มีจุดเดียวสั่งงานทั้งเครือข่าย (เช่นผ่าน controller/API) แทนที่จะไล่คอนฟิกทีละกล่อง\n\n❌ ทำไมข้ออื่นผิด:\nA. automation ไม่ได้ "กำจัด" ความจำเป็นในการอบรม — ทีมยังต้องเรียนรู้เครื่องมือ/สคริปต์ใหม่ด้วยซ้ำ\nB. self-healing เป็นผลพลอยได้/คุณสมบัติ ไม่ใช่ "แรงขับหลัก (primary driver)" ที่ทำให้ต้องมี automation\nE. ลด hardware footprint เป็นเรื่องของ virtualization/consolidation ไม่ใช่แรงขับของ automation โดยตรง\n\n📗 จำไว้สอบ: drivers ของ automation = เร็วขึ้น + สม่ำเสมอตามนโยบาย + จุดควบคุมรวมศูนย์ + ลด error',
  },
  {
    id: 313,
    kind: 'single',
    prompt: 'Using direct sequence spread spectrum, which three 2.4-GHz channels are used to limit collisions?',
    options: [
      { key: 'A', text: '1, 6, 11' },
      { key: 'B', text: '1, 5, 10' },
      { key: 'C', text: '1, 2, 3' },
      { key: 'D', text: '5, 6, 7' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ย่าน 2.4 GHz มี 11 ช่อง (ในสหรัฐฯ) แต่ละช่องกว้าง ~22 MHz ขณะที่ช่องอยู่ห่างกันแค่ 5 MHz → ช่องที่ติดกันจะ "ทับซ้อน" กันและกวนกัน\n\n✅ ทำไม A ถูก: ช่อง 1, 6, 11 เป็นชุด non-overlapping (ไม่ทับซ้อน) เพียงชุดเดียวในย่าน 2.4 GHz → วาง AP ที่อยู่ใกล้กันด้วย 1/6/11 จะลดการชนกันของสัญญาณได้ดีที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nB. 1, 5, 10 → ห่างกันแค่ 4–5 ช่อง ยังทับซ้อนกัน\nC. 1, 2, 3 → ติดกันหมด ทับซ้อนรุนแรง\nD. 5, 6, 7 → ติดกัน ทับซ้อนเช่นกัน\n\n📗 จำไว้สอบ: 2.4 GHz non-overlapping = "1, 6, 11" ท่องให้ขึ้นใจ',
  },
  {
    id: 314,
    kind: 'single',
    prompt: 'Which port type supports the spanning-tree portfast command without additional configuration?',
    options: [
      { key: 'A', text: 'access ports' },
      { key: 'B', text: 'Layer 3 main interfaces' },
      { key: 'C', text: 'Layer 3 subinterfaces' },
      { key: 'D', text: 'trunk ports' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — PortFast ทำให้พอร์ตข้าม STP listening/learning ไปเป็น forwarding ทันที (เหมาะกับพอร์ตที่ต่อ end device) โดยดีฟอลต์ใช้ได้กับ "access port" เลย\n\n✅ ทำไม A ถูก: บน access port พิมพ์ "spanning-tree portfast" ได้ทันที ไม่ต้องมีอาร์กิวเมนต์เพิ่ม\n\n❌ ทำไมข้ออื่นผิด:\nB/C. Layer 3 interface / subinterface ไม่รัน STP (ไม่ใช่พอร์ต switching) จึงไม่เกี่ยวกับ portfast\nD. trunk port ต้องใส่คำเพิ่มคือ "spanning-tree portfast trunk" — ไม่ใช่ "ไม่ต้องคอนฟิกเพิ่ม"\n\n📗 จำไว้สอบ: portfast เปล่า ๆ = access port | ถ้าจะใช้บน trunk ต้องเติมคำว่า "trunk" ต่อท้าย',
  },
  {
    id: 315,
    kind: 'single',
    image: q315,
    prompt:
      'Refer to the exhibit. An administrator is tasked with configuring a voice VLAN. What is the expected outcome when a Cisco phone is connected to the GigabitEthernet3/1/4 port on a switch?',
    options: [
      { key: 'A', text: 'The phone and a workstation that is connected to the phone do not have VLAN connectivity.' },
      { key: 'B', text: 'The phone and a workstation that is connected to the phone send and receive data in VLAN 50.' },
      { key: 'C', text: 'The phone sends and receives data in VLAN 50, but a workstation connected to the phone has no VLAN connectivity.' },
      { key: 'D', text: 'The phone sends and receives data in VLAN 50, but a workstation connected to the phone sends and receives data in VLAN 1.' },
    ],
    correct: ['D'],
    explanation:
      '🔍 อ่าน config: interface Gi3/1/4 มีแค่ "switchport voice vlan 50" — ⚠️ ไม่มี "switchport access vlan X" กำหนด data VLAN เลย\n\n📘 แนวคิด — พอร์ตที่มี voice VLAN จะทำตัวเป็น "multi-VLAN access port":\n• Voice traffic → ติด tag 802.1Q ของ voice VLAN (VLAN 50)\n• Data traffic (จาก PC ที่เสียบหลังโทรศัพท์) → เป็น untagged วิ่งใน "access VLAN" ของพอร์ต\n• เมื่อไม่ได้ตั้ง access vlan → access VLAN = ค่า default = VLAN 1\n\n✅ ทำไม D ถูก: โทรศัพท์คุยใน VLAN 50 (voice) ส่วน PC ที่ต่อผ่านโทรศัพท์ได้ VLAN 1 (default data VLAN เพราะไม่ได้ตั้ง)\n\n❌ ทำไมข้ออื่นผิด:\nA. ทั้งคู่ยังมี connectivity — โทรศัพท์ได้ VLAN 50, PC ได้ VLAN 1\nB. PC ไม่ได้อยู่ VLAN 50 (voice VLAN ใช้กับทราฟฟิกเสียงเท่านั้น) — data ยังเป็น VLAN 1\nC. PC ยังมี connectivity ใน VLAN 1 ไม่ได้ถูกตัด\n\n📗 จำไว้สอบ: มี voice vlan แต่ไม่มี access vlan → เสียง = voice VLAN, ข้อมูล PC = VLAN 1 (default)',
  },
  {
    id: 316,
    kind: 'single',
    image: q316,
    prompt: 'Refer to the exhibit. Which route type is configured to reach the internet?',
    options: [
      { key: 'A', text: 'host route' },
      { key: 'B', text: 'default route' },
      { key: 'C', text: 'floating static route' },
      { key: 'D', text: 'network route' },
    ],
    correct: ['B'],
    explanation:
      '🔍 อ่านตาราง: "Gateway of last resort is 10.10.10.18 to network 0.0.0.0" และบรรทัด "B* 0.0.0.0/0 [20/0] via 10.10.10.18"\n\n📘 แนวคิด — ปลายทาง 0.0.0.0/0 (match ทุกปลายทางที่ไม่มี route เจาะจง) = "default route" หรือ "gateway of last resort" → ใช้เป็นทางออกสู่อินเทอร์เน็ต\n(เครื่องหมาย * = ตัวที่เป็น candidate default, ตัว B = เรียนรู้ผ่าน BGP แต่ "ชนิดของ route" ที่ถามคือ default route)\n\n✅ ทำไม B ถูก: 0.0.0.0/0 คือนิยามของ default route ซึ่งเป็นเส้นทางที่กำหนดไว้ไปยังอินเทอร์เน็ต\n\n❌ ทำไมข้ออื่นผิด:\nA. host route = /32 (เจาะจงโฮสต์เดียว) — ไม่ใช่ 0.0.0.0/0\nC. floating static route = static ที่ตั้ง AD สูงเป็น backup — ในตารางนี้ตัว default มาจาก BGP ไม่ใช่ floating static\nD. network route = route ไปยัง subnet เจาะจง (เช่น 10.10.13.0/25) ไม่ใช่ทางออกอินเทอร์เน็ต\n\n📗 จำไว้สอบ: 0.0.0.0/0 = default route = gateway of last resort = ทางออกอินเทอร์เน็ต',
  },
  {
    id: 317,
    kind: 'single',
    prompt:
      'An engineer needs to configure LLDP to send the port description Type-Length-Value (TLV). What command sequence must be implemented?',
    options: [
      { key: 'A', text: 'switch(config-line)#lldp port-description' },
      { key: 'B', text: 'switch(config)#lldp port-description' },
      { key: 'C', text: 'switch(config-if)#lldp port-description' },
      { key: 'D', text: 'switch#lldp port-description' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — LLDP (IEEE 802.1AB) เป็นโปรโตคอลค้นหาเพื่อนบ้านแบบมาตรฐานกลาง เปิด/ปรับตั้งค่าที่ระดับ "global configuration" ด้วยคำสั่งขึ้นต้น lldp ... (เช่น lldp run เพื่อเปิดทั้งเครื่อง) การเลือกส่ง TLV จึงทำในโหมด global config → prompt "switch(config)#"\n\n✅ ทำไม B ถูก: ในบรรดาตัวเลือก มีเพียง prompt "(config)#" ที่เป็น global configuration mode ซึ่งเป็นที่ที่ตั้งค่า LLDP\n\n❌ ทำไมข้ออื่นผิด:\nA. (config-line)# = line configuration mode (เช่น console/vty) ไม่เกี่ยวกับ LLDP\nC. (config-if)# = interface mode — ใช้กับคำสั่งอย่าง lldp transmit/receive แต่โจทย์นี้ชี้ไปที่ global\nD. switch# = privileged EXEC ตั้งค่าคอนฟิกไม่ได้\n\n📗 จำไว้สอบ: เปิด LLDP ทั้งเครื่อง = global config "lldp run" | ปิด/เปิดรายพอร์ต = interface "lldp transmit/receive"',
  },
  {
    id: 318,
    kind: 'single',
    prompt:
      'A user configured OSPF and advertised the Gigabit Ethernet interface in OSPF. By default, which type of OSPF network does this interface belong to?',
    options: [
      { key: 'A', text: 'point-to-multipoint' },
      { key: 'B', text: 'point-to-point' },
      { key: 'C', text: 'broadcast' },
      { key: 'D', text: 'nonbroadcast' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — OSPF network type ตาม default ของแต่ละชนิด interface:\n• Ethernet (Gigabit/Fast) → ⭐ Broadcast → มีการเลือก DR/BDR, hello 10s / dead 40s\n• Serial (HDLC, PPP) → Point-to-Point → ไม่มี DR/BDR, hello 10s / dead 40s\n• Frame Relay physical → Non-broadcast (NBMA)\n\n✅ ทำไม C ถูก: อินเทอร์เฟซ Ethernet เป็น multi-access โดยธรรมชาติ OSPF จึงตั้ง default เป็น "broadcast" (และเลือก DR/BDR)\n\n❌ ทำไมข้ออื่นผิด:\nA. point-to-multipoint ต้องตั้งเองด้วย ip ospf network point-to-multipoint\nB. point-to-point เป็น default ของ Serial (PPP/HDLC) ไม่ใช่ Ethernet\nD. nonbroadcast เป็น default ของ Frame Relay/NBMA\n\n📗 จำไว้สอบ: Ethernet = broadcast (มี DR/BDR) | Serial = point-to-point (ไม่มี DR/BDR) โดย default',
  },
  {
    id: 319,
    kind: 'single',
    prompt: 'What benefit does controller-based networking provide versus traditional networking?',
    options: [
      { key: 'A', text: 'moves from a two-tier to a three-tier network architecture to provide maximum redundancy' },
      { key: 'B', text: 'provides an added layer of security to protect from DDoS attacks' },
      { key: 'C', text: 'allows configuration and monitoring of the network from one centralized point' },
      { key: 'D', text: 'combines control and data plane functionality on a single device to minimize latency' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Controller-based (SDN): แยก control plane ออกจากอุปกรณ์ ไปรวมไว้ที่ controller กลาง → บริหาร คอนฟิก และมอนิเตอร์ทั้งเครือข่ายจาก "จุดเดียว" ผ่าน GUI/API\n\n✅ ทำไม C ถูก: ประโยชน์เด่นคือการควบคุมและมอนิเตอร์แบบรวมศูนย์จากจุดเดียว (แทนที่จะ SSH ไปทีละกล่องแบบเครือข่ายดั้งเดิม)\n\n❌ ทำไมข้ออื่นผิด:\nA. controller-based ไม่ได้บังคับเปลี่ยนโครงสร้างเป็น 3 ชั้น — เป็นคนละเรื่อง\nB. ไม่ได้มีจุดขายเป็นการกัน DDoS โดยตรง\nD. ตรงข้ามกับ SDN โดยสิ้นเชิง — SDN "แยก" control ออกจาก data plane ไม่ใช่รวมไว้ในกล่องเดียว\n\n📗 จำไว้สอบ: controller-based = รวมศูนย์การจัดการจากจุดเดียว + แยก control/data plane',
  },
  {
    id: 320,
    kind: 'multi',
    prompt: 'What are two benefits of FHRPs? (Choose two.)',
    options: [
      { key: 'A', text: 'They prevent loops in the Layer 2 network.' },
      { key: 'B', text: 'They allow encrypted traffic.' },
      { key: 'C', text: 'They are able to bundle multiple ports to increase bandwidth.' },
      { key: 'D', text: 'They enable automatic failover of the default gateway.' },
      { key: 'E', text: 'They allow multiple devices to serve as a single virtual gateway for clients in the network.' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — FHRP (First Hop Redundancy Protocol เช่น HSRP, VRRP, GLBP): ทำให้เราเตอร์หลายตัวรวมกันเป็น "virtual gateway" ตัวเดียว (มี virtual IP + virtual MAC) ที่ client ใช้เป็น default gateway → ถ้าเราเตอร์ตัวหนึ่งล่ม อีกตัวรับช่วงต่อโดย client ไม่ต้องเปลี่ยน gateway\n\n✅ ทำไม D, E ถูก:\nE. เราเตอร์หลายตัวทำหน้าที่เป็น "gateway เสมือนตัวเดียว" ให้ client\nD. รองรับการ failover ของ default gateway อัตโนมัติเมื่อ active router ล่ม\n\n❌ ทำไมข้ออื่นผิด:\nA. ป้องกัน loop L2 = หน้าที่ของ STP ไม่ใช่ FHRP\nB. FHRP ไม่ได้เข้ารหัสทราฟฟิก (เป็นงานของ IPsec/VPN)\nC. รวมพอร์ตเพิ่มแบนด์วิดท์ = EtherChannel/LACP ไม่ใช่ FHRP\n\n📗 จำไว้สอบ: FHRP = virtual gateway + failover ของ default gateway (HSRP/VRRP/GLBP)',
  },
  {
    id: 321,
    kind: 'single',
    image: q321,
    prompt:
      'Refer to the exhibit. The entire contents of the MAC address table are shown. Sales-4 sends a data frame to Sales-1.\n\nMAC Address Table (VLAN 10):\n000c.8590.bb7d  DYNAMIC  Gi1/0/1  (Sales-1)\n3910.4161.9bb7  DYNAMIC  Gi1/0/2  (Sales-2)\n00d0.d3b6.957c  DYNAMIC  Gi1/0/3  (Sales-3)\n\nWhat does the switch do as it receives the frame from Sales-4?',
    options: [
      { key: 'A', text: 'Perform a lookup in the MAC address table and discard the frame due to a missing entry.' },
      { key: 'B', text: 'Insert the source MAC address and port into the forwarding table and forward the frame to Sales-1.' },
      { key: 'C', text: 'Map the Layer 2 MAC address to the Layer 3 IP address and forward the frame.' },
      { key: 'D', text: 'Flood the frame out of all ports except on the port where Sales-1 is connected.' },
    ],
    correct: ['B'],
    explanation:
      '🔍 อ่านตาราง MAC: มีแค่ Sales-1 (Gi1/0/1), Sales-2 (Gi1/0/2), Sales-3 (Gi1/0/3) — ⚠️ ไม่มี Sales-4 (ต่อ Gi1/0/4) ในตาราง\n\n📘 แนวคิด — สวิตช์ทำ 2 อย่างเสมอเมื่อรับเฟรม:\n1) LEARN: ดู source MAC ถ้ายังไม่มีในตาราง → บันทึก (MAC ต้นทาง + พอร์ตขาเข้า)\n2) FORWARD: ดู destination MAC → ถ้ารู้จัก forward ออกพอร์ตนั้นพอร์ตเดียว; ถ้าไม่รู้จัก (unknown unicast) → flood ทุกพอร์ตยกเว้นขาเข้า\n\n✅ ทำไม B ถูก:\n• Source = Sales-4 ยังไม่มีในตาราง → สวิตช์ "เพิ่ม MAC ของ Sales-4 + Gi1/0/4" ลงตาราง (learn)\n• Destination = Sales-1 มีอยู่แล้ว (Gi1/0/1) → forward ตรงไปที่ Sales-1 พอร์ตเดียว (ไม่ flood)\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ไม่ทิ้งเฟรมเพราะ "ไม่มี source" — มันเรียนรู้ source แล้ว forward ตาม destination ที่รู้จัก\nC. การ map MAC↔IP คือ ARP (งาน L3 ของโฮสต์) ไม่ใช่สิ่งที่สวิตช์ L2 ทำ\nD. จะ flood ก็ต่อเมื่อ "ไม่รู้จัก destination" แต่ Sales-1 อยู่ในตารางแล้ว → ไม่ flood\n\n📗 จำไว้สอบ: สวิตช์ learn จาก "source", forward ตาม "destination" — destination รู้จัก = ส่งตรง, ไม่รู้จัก = flood',
  },
  {
    id: 322,
    kind: 'single',
    prompt: 'How does CAPWAP communicate between an access point in local mode and a WLC?',
    options: [
      { key: 'A', text: 'The access point must directly connect to the WLC using a copper cable.' },
      { key: 'B', text: 'The access point must not be connected to the wired network, as it would create a loop.' },
      { key: 'C', text: 'The access point must be connected to the same switch as the WLC.' },
      { key: 'D', text: 'The access point has the ability to link to any switch in the network, assuming connectivity to the WLC.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — CAPWAP สร้าง "tunnel" ระหว่าง Lightweight AP กับ WLC ผ่านเครือข่าย IP (UDP 5246 control / 5247 data) → AP กับ WLC ไม่จำเป็นต้องอยู่ subnet เดียวกันหรือสวิตช์เดียวกัน ขอแค่ routable ถึงกันได้\n\n✅ ทำไม D ถูก: AP ต่อกับสวิตช์ตัวใดในเครือข่ายก็ได้ ตราบใดที่มี IP connectivity ไปถึง WLC ก็สร้าง CAPWAP tunnel ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่ต้องต่อสายทองแดงตรงเข้า WLC — คุยข้าม L3 ได้\nB. AP ต้องต่อ wired network เพื่อไปหา WLC อยู่แล้ว และ CAPWAP ไม่ทำให้เกิด loop\nC. ไม่จำเป็นต้องอยู่สวิตช์เดียวกับ WLC\n\n📗 จำไว้สอบ: CAPWAP = tunnel ข้าม L3 ได้ — AP อยู่ที่ไหนก็ได้ ขอแค่ reach WLC ผ่าน IP',
  },
  {
    id: 323,
    kind: 'single',
    prompt: 'Where does wireless authentication happen?',
    options: [
      { key: 'A', text: 'SSID' },
      { key: 'B', text: 'radio' },
      { key: 'C', text: 'band' },
      { key: 'D', text: 'Layer 2' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ในการตั้งค่า WLAN บน WLC การยืนยันตัวตน (WPA2/WPA3-PSK, 802.1X/EAP) ถูกกำหนดในส่วน "Layer 2 Security" ของ WLAN → การ authenticate ของ Wi-Fi เกิดที่ Layer 2\n\n✅ ทำไม D ถูก: 802.11 authentication/association และการเข้ารหัส (WPA) ทั้งหมดเป็นกลไกระดับ Layer 2\n\n❌ ทำไมข้ออื่นผิด:\nA. SSID = ชื่อเครือข่าย (ป้ายประกาศให้ client เห็น) ไม่ใช่ที่ที่ authenticate\nB. radio = ตัวส่ง/รับคลื่นวิทยุของ AP (ชั้นกายภาพ)\nC. band = ย่านความถี่ (2.4/5 GHz) เป็น Layer 1\n\n📗 จำไว้สอบ: Wi-Fi security/authentication ถูกตั้งใน "Layer 2 Security" ของ WLAN',
  },
  {
    id: 324,
    kind: 'single',
    image: q324,
    prompt:
      'Refer to the exhibit. An engineer must add a subnet for a new office that will add 20 users to the network. Which IPv4 network and subnet mask combination does the engineer assign to minimize wasting addresses? (Existing: 10.10.225.0/28, 10.10.225.16/28, 10.10.225.64/26.)',
    options: [
      { key: 'A', text: '10.10.225.48 255.255.255.240' },
      { key: 'B', text: '10.10.225.32 255.255.255.240' },
      { key: 'C', text: '10.10.225.48 255.255.255.224' },
      { key: 'D', text: '10.10.225.32 255.255.255.224' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ต้องหา subnet ที่ (1) รองรับ 20 users ได้ (2) เล็กที่สุดเพื่อไม่เปลือง (3) ไม่ทับซ้อนกับซับเน็ตที่มีอยู่\n\n🧮 ขนาด subnet ที่ต้องการ: 20 users → /27 (255.255.255.224) ให้ 2^5 − 2 = 30 hosts ✔ (ส่วน /28 ให้แค่ 14 hosts → ไม่พอ)\n\n🔍 หาช่องว่างที่ยังไม่ถูกใช้ (บนบล็อก 10.10.225.x):\n• .0/28 → ใช้ .0–.15\n• .16/28 → ใช้ .16–.31\n• .64/26 → ใช้ .64–.127\n→ ช่องว่างที่เหลือคือ .32–.63\n\n✅ ทำไม D ถูก: 10.10.225.32/27 = ช่วง .32–.63 (30 hosts) → พอดีในช่องว่าง ไม่ทับซ้อน และประหยัดสุด\n\n❌ ทำไมข้ออื่นผิด:\nA. .48/28 → 14 hosts ไม่พอสำหรับ 20\nB. .32/28 → 14 hosts ไม่พอ\nC. .48/27 → ช่วง .48–.79 ⚠️ ทับซ้อนกับ .64/26 (.64–.127) → ใช้ไม่ได้\n\n📗 จำไว้สอบ: หาขนาดจากจำนวน host ก่อน (20 → /27), แล้วหา block ที่ "ว่างและไม่ชน" ของเดิม',
  },
  {
    id: 325,
    kind: 'single',
    prompt: 'Which WPA3 enhancement protects against hackers viewing traffic on the Wi-Fi network?',
    options: [
      { key: 'A', text: 'TKIP encryption' },
      { key: 'B', text: 'AES encryption' },
      { key: 'C', text: 'scrambled encryption key' },
      { key: 'D', text: 'SAE encryption' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — WPA3-Personal เปลี่ยนวิธี handshake จาก PSK (4-way) มาใช้ "SAE" (Simultaneous Authentication of Equals หรือ Dragonfly) → ให้ forward secrecy: แม้แฮกเกอร์ดักจับทราฟฟิกที่เข้ารหัสไว้ทั้งหมด และภายหลังได้รหัสผ่านไป ก็ยังถอดรหัสทราฟฟิกเก่าไม่ได้ และกัน offline dictionary attack\n\n✅ ทำไม D ถูก: SAE คือคุณสมบัติใหม่ของ WPA3 ที่ป้องกันการดักดูทราฟฟิก/เดารหัสผ่านแบบออฟไลน์ ต่างจาก WPA2\n\n❌ ทำไมข้ออื่นผิด:\nA. TKIP เป็นการเข้ารหัสเก่า (ของ WPA รุ่นแรก) และถูกเลิกใช้เพราะไม่ปลอดภัย — ไม่ใช่ของใหม่ใน WPA3\nB. AES (CCMP) มีมาตั้งแต่ WPA2 แล้ว ไม่ใช่ "enhancement" เฉพาะของ WPA3\nC. "scrambled encryption key" ไม่ใช่คำศัพท์จริงของ WPA3\n\n📗 จำไว้สอบ: WPA3 ของใหม่ = SAE (แทน PSK 4-way) → forward secrecy + กัน offline password cracking',
  },
  {
    id: 326,
    kind: 'single',
    prompt: 'A Cisco IP phone receives untagged data traffic from an attached PC. Which action is taken by the phone?',
    options: [
      { key: 'A', text: 'It allows the traffic to pass through unchanged.' },
      { key: 'B', text: 'It drops the traffic.' },
      { key: 'C', text: 'It tags the traffic with the default VLAN.' },
      { key: 'D', text: 'It tags the traffic with the native VLAN.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Cisco IP phone มีสวิตช์ 3 พอร์ตในตัว (uplink ไปสวิตช์, พอร์ต PC, และตัวโทรศัพท์เอง). ทราฟฟิกเสียงของโทรศัพท์จะติด tag ด้วย voice VLAN ส่วนข้อมูลจาก PC ที่ต่อด้านหลังจะถูกส่งผ่าน "ตามเดิม"\n\n✅ ทำไม A ถูก: ทราฟฟิก untagged จาก PC ผ่านโทรศัพท์ไปแบบไม่แก้ไข (unchanged) เพื่อออกไปเป็น data VLAN ที่สวิตช์ปลายทาง — ตรงตามเอกสาร Cisco: "untagged traffic from the device attached to the phone passes through the phone unchanged, regardless of the trust state"\n\n❌ ทำไมข้ออื่นผิด:\nB. โทรศัพท์ไม่ทิ้งทราฟฟิกของ PC\nC/D. โทรศัพท์ "ไม่ได้ติด tag" ให้ข้อมูลของ PC โดยดีฟอลต์ — มันปล่อยผ่าน untagged (สวิตช์จะจัดการ VLAN ให้เอง)\n\n📗 จำไว้สอบ: data จาก PC หลังโทรศัพท์ = ปล่อยผ่าน untagged ไม่แก้ไข (เสียงเท่านั้นที่ติด voice VLAN tag)',
  },
  {
    id: 327,
    kind: 'single',
    prompt: 'Which statement about Link Aggregation when implemented on a Cisco Wireless LAN Controller is true?',
    options: [
      { key: 'A', text: 'To pass client traffic, two or more ports must be configured.' },
      { key: 'B', text: 'The EtherChannel must be configured in "mode active".' },
      { key: 'C', text: 'When enabled, the WLC bandwidth drops to 500 Mbps.' },
      { key: 'D', text: 'One functional physical port is needed to pass client traffic.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — LAG (Link Aggregation) บน WLC รวมพอร์ตกายภาพหลายพอร์ตเป็น bundle เดียวแบบ static (mode on) → เพิ่มแบนด์วิดท์และมี redundancy โดยไม่ต้องเจรจา LACP/PAgP\n\n✅ ทำไม D ถูก: เมื่อเปิด LAG ขอแค่ "มีพอร์ตกายภาพทำงานอย่างน้อย 1 พอร์ต" ก็ยังส่งทราฟฟิก client ต่อได้ (พอร์ตอื่นล่มได้โดยไม่ตัดบริการ)\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่จำเป็นต้องมี 2 พอร์ตขึ้นไป "เพื่อจะส่งทราฟฟิกได้" — 1 พอร์ตที่ทำงานก็พอ\nB. LAG บน WLC เป็น static bundle (mode on) ไม่ได้ใช้ LACP "active"\nC. เปิด LAG ไม่ได้ทำให้แบนด์วิดท์ตกลงเหลือ 500 Mbps\n\n📗 จำไว้สอบ: WLC LAG = static (mode on) + ต้องการพอร์ตทำงานแค่ 1 พอร์ตก็ยังส่ง client ได้',
  },
  {
    id: 328,
    kind: 'single',
    prompt: 'Which set of actions satisfies the requirement for multifactor authentication?',
    options: [
      { key: 'A', text: 'The user swipes a key fob, then clicks through an email link.' },
      { key: 'B', text: 'The user enters a username and password, and then clicks a notification in an authentication app on a mobile device.' },
      { key: 'C', text: 'The user enters a PIN into an RSA token, and then enters the displayed RSA key on a login screen.' },
      { key: 'D', text: 'The user enters a username and password and then re-enters the credentials on a second screen.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Multifactor Authentication (MFA) ต้องใช้ปัจจัย "ต่างประเภทกัน" อย่างน้อย 2 จาก 3 กลุ่ม:\n• Something you KNOW (รหัสผ่าน, PIN)\n• Something you HAVE (มือถือ, token, key fob)\n• Something you ARE (ลายนิ้วมือ, ใบหน้า)\n\n✅ ทำไม B ถูก: username/password = "รู้" (know) + กดยืนยันใน app บนมือถือ = "มี" (have อุปกรณ์นั้น) → สองปัจจัย "ต่างประเภท" = MFA แท้\n\n❌ ทำไมข้ออื่นผิด:\nA. swipe key fob (have) + คลิกลิงก์ในอีเมล — การคลิกลิงก์ไม่ใช่ปัจจัยยืนยันตัวตนที่ชัดเจน (อีเมลเข้าถึงได้จากหลายที่) จึงไม่ครบ MFA ที่รัดกุม\nC. PIN + RSA key ที่แสดงบน token เดียวกัน — ในทางปฏิบัติถือเป็นการใช้ "อุปกรณ์เดียว" ค่อนไปทางปัจจัยเดียว (ตัวเลือก B ชัดเจนกว่าในเชิงสอบ)\nD. password แล้วพิมพ์ password ซ้ำ = ปัจจัยเดียวกัน (know) ทั้งคู่ → ไม่ใช่ MFA\n\n📗 จำไว้สอบ: MFA = ปัจจัย "คนละประเภท" (know + have + are) — พิมพ์รหัสซ้ำสองรอบไม่นับ',
  },
  {
    id: 329,
    kind: 'single',
    image: q329,
    prompt:
      'Refer to the exhibit. Which configuration must be applied to the router that configures PAT to translate all addresses in VLAN 200 (192.168.100.32/27) while allowing devices on VLAN 100 (192.168.100.0/27) to use their own IP addresses?',
    options: [
      { key: 'A', text: 'access-list 99 permit 209.165.201.2 0.0.0.0 / ip nat inside source list 99 interface gi1/0/0 overload / interface gi2/0/1.200 / ip nat inside / interface gi1/0/0 / ip nat outside' },
      { key: 'B', text: 'access-list 99 permit 209.165.201.2 255.255.255.255 / ip nat inside source list 99 interface gi1/0/0 overload / ...' },
      { key: 'C', text: 'access-list 99 permit 192.168.100.0 0.0.0.255 / ip nat inside source list 99 interface gi1/0/0 overload / ...' },
      { key: 'D', text: 'access-list 99 permit 192.168.100.32 0.0.0.31 / ip nat inside source list 99 interface gi1/0/0 overload / interface gi2/0/1.200 / ip nat inside / interface gi1/0/0 / ip nat outside' },
    ],
    correct: ['D'],
    explanation:
      '🔍 อ่าน exhibit: VLAN 100 = 192.168.100.0/27 (.0–.31), VLAN 200 = 192.168.100.33/27 → subnet 192.168.100.32/27 (.32–.63)\n\n📘 แนวคิด — PAT (NAT overload) จะแปลงเฉพาะ address ที่ ACL อนุญาต. ต้องการแปลง "เฉพาะ VLAN 200" และปล่อย VLAN 100 ใช้ IP จริง → ACL ต้อง match แค่ subnet ของ VLAN 200\n\n🧮 wildcard ของ /27: 255.255.255.224 → wildcard = 0.0.0.31 → "192.168.100.32 0.0.0.31" ครอบ .32–.63 (VLAN 200 พอดี)\n\n✅ ทำไม D ถูก:\n• access-list 99 permit 192.168.100.32 0.0.0.31 → เลือกเฉพาะ VLAN 200\n• ip nat inside source list 99 interface gi1/0/0 overload → PAT ออกทาง gi1/0/0\n• ip nat inside ที่ gi2/0/1.200 (ฝั่ง VLAN 200) + ip nat outside ที่ gi1/0/0 → ทิศ NAT ถูกต้อง\n→ VLAN 100 ไม่ถูก match จึงใช้ IP ตัวเองออกไปได้\n\n❌ ทำไมข้ออื่นผิด:\nA/B. ACL match 209.165.201.2 (เป็น public host ปลายทาง) ไม่ใช่ subnet ภายในของ VLAN 200\nC. 192.168.100.0 0.0.0.255 = match ทั้ง .0–.255 → รวม VLAN 100 ด้วย ทำให้ VLAN 100 โดนแปลงไปด้วย (ผิดโจทย์)\n\n📗 จำไว้สอบ: /27 → wildcard 0.0.0.31 • เลือก interface inside/outside ให้ถูกทิศ • ACL ระบุเฉพาะ subnet ที่จะ NAT',
  },
  {
    id: 330,
    kind: 'multi',
    prompt: 'Which two outcomes are predictable behaviors for HSRP? (Choose two.)',
    options: [
      { key: 'A', text: 'The two routers share a virtual IP address that is used as the default gateway for devices on the LAN.' },
      { key: 'B', text: 'The two routers negotiate one router as the active router and the other as the standby router.' },
      { key: 'C', text: 'Each router has a different IP address, both routers act as the default gateway on the LAN, and traffic is load balanced between them.' },
      { key: 'D', text: 'The two routers synchronize configurations to provide consistent packet forwarding.' },
      { key: 'E', text: 'The two routers share the same IP address, and default gateway traffic is load-balanced between them.' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — HSRP (Cisco FHRP): เราเตอร์กลุ่มหนึ่งแชร์ virtual IP + virtual MAC เป็น gateway เสมือน โดยเลือก 1 ตัวเป็น "Active" (ส่งทราฟฟิกจริง) และ 1 ตัวเป็น "Standby" (สำรอง) — โดยดีฟอลต์ "ไม่ load balance" (ทราฟฟิกวิ่งผ่าน active ตัวเดียว)\n\n✅ ทำไม A, B ถูก:\nA. ทั้งคู่แชร์ virtual IP หนึ่งเดียว ที่ client ใช้เป็น default gateway\nB. เจรจากันได้ active หนึ่งตัว / standby หนึ่งตัว (ดูจาก priority แล้ว preempt)\n\n❌ ทำไมข้ออื่นผิด:\nC. HSRP ไม่ load balance โดยดีฟอลต์ (นั่นคือ GLBP) — และ client ใช้ virtual IP เดียว ไม่ใช่หลาย gateway\nD. HSRP ไม่ได้ซิงก์ config ให้กัน — แค่แลก hello ตรวจสถานะกัน\nE. HSRP ไม่ load balance และ "virtual IP" ที่แชร์ไม่ใช่ IP จริงของ interface\n\n📗 จำไว้สอบ: HSRP/VRRP = active-standby (ไม่ load balance) | GLBP = load balance ได้จริง',
  },
  {
    id: 331,
    kind: 'single',
    prompt:
      'How do traditional campus device management and Cisco DNA Center device management differ in regard to deployment?',
    options: [
      { key: 'A', text: 'Cisco DNA Center device management can deploy a network more quickly than traditional campus device management.' },
      { key: 'B', text: 'Traditional campus device management allows a network to scale more quickly than with Cisco DNA Center device management.' },
      { key: 'C', text: 'Cisco DNA Center device management can be implemented at a lower cost than most traditional campus device management options.' },
      { key: 'D', text: 'Traditional campus device management schemes can typically deploy patches and updates more quickly than Cisco DNA Center device management.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — DNA Center ใช้ template/automation และ Plug-and-Play (PnP) ปรับใช้อุปกรณ์หลายตัวพร้อมกันจากศูนย์กลาง → deploy เครือข่ายได้ "เร็วกว่า" การไล่คอนฟิกทีละกล่องด้วยมือแบบดั้งเดิม\n\n✅ ทำไม A ถูก: จุดต่างด้าน deployment คือ DNA Center ปรับใช้/ขยายเครือข่ายได้รวดเร็วกว่าเพราะ automation รวมศูนย์\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับความจริง — DNA Center ต่างหากที่ scale ได้เร็วกว่า\nC. โดยทั่วไป DNA Center ต้องลงทุนสูงกว่า (ไลเซนส์/appliance) ไม่ใช่ถูกกว่า\nD. DNA Center ปรับ patch/update แบบรวมศูนย์ได้เร็วกว่า ไม่ใช่ช้ากว่า\n\n📗 จำไว้สอบ: DNA Center = deploy/scale/patch เร็วกว่า ด้วย automation รวมศูนย์',
  },
  {
    id: 332,
    kind: 'single',
    prompt:
      'A corporate office uses four floors in a building: Floor 1 has 24 users, Floor 2 has 29 users, Floor 3 has 28 users, Floor 4 has 22 users. Which subnet summarizes and gives the most efficient distribution of IP addresses for the router configuration?',
    options: [
      { key: 'A', text: '192.168.0.0/24 as summary and 192.168.0.0/28 for each floor' },
      { key: 'B', text: '192.168.0.0/23 as summary and 192.168.0.0/25 for each floor' },
      { key: 'C', text: '192.168.0.0/25 as summary and 192.168.0.0/27 for each floor' },
      { key: 'D', text: '192.168.0.0/26 as summary and 192.168.0.0/29 for each floor' },
    ],
    correct: ['C'],
    explanation:
      '⚠️ หมายเหตุ: ตัวเลือกในไฟล์ต้นฉบับ (PDF) พิมพ์ซ้ำ/OCR เพี้ยนจนอ่านไม่ได้ จึงสร้างตัวเลือกที่ถูกต้องตามหลัก CCNA ขึ้นใหม่ คำตอบที่ถูกต้องคือ C\n\n📘 แนวคิด — หาขนาด subnet ต่อชั้นจาก "ชั้นที่ผู้ใช้มากที่สุด" แล้วรวม (summarize) ทั้งหมด\n\n🧮 คำนวณ:\n• ชั้นที่ผู้ใช้เยอะสุด = ชั้น 2 มี 29 users → ต้องการ subnet ที่ ≥ 29 hosts\n  - /27 = 2^5 − 2 = 30 hosts ✔ (พอดีและประหยัดสุด) — /28 ให้แค่ 14 → ไม่พอ\n• 4 ชั้น × /27 = ต้องใช้พื้นที่รวมเท่ากับ 4 บล็อกของ /27 = /25\n  - /27 บล็อกละ 32 addresses × 4 = 128 addresses = /25 พอดี\n\n✅ ทำไม C ถูก: ต่อชั้นใช้ /27 (30 hosts พอสำหรับ ≤ 29) และ summary รวมสี่ชั้นเป็น /25 (192.168.0.0/25) → ประหยัดและครอบคลุมพอดี\n\n❌ ทำไมข้ออื่นผิด:\nA. /28 ต่อชั้น = 14 hosts → ไม่พอสำหรับ 29 users\nB. /25 ต่อชั้น = 126 hosts → เกินความจำเป็นมาก (เปลือง) และ summary /23 ใหญ่เกิน\nD. /29 ต่อชั้น = 6 hosts → ไม่พออย่างมาก\n\n📗 จำไว้สอบ: เลือกขนาดต่อ subnet จาก "ชั้นที่ host มากสุด" (29 → /27) แล้ว summary = จำนวนบล็อกรวม (4 × /27 = /25)',
  },
  {
    id: 333,
    kind: 'single',
    prompt:
      'An engineer configured an OSPF neighbor as a designated router. Which state verifies the designated router is in the proper mode?',
    options: [
      { key: 'A', text: 'Exchange' },
      { key: 'B', text: '2-way' },
      { key: 'C', text: 'Full' },
      { key: 'D', text: 'Init' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ลำดับสถานะ OSPF: Down → Init → 2-Way → ExStart → Exchange → Loading → Full\n• DR/BDR จะสร้างความสัมพันธ์แบบ "adjacency เต็มรูปแบบ" กับเพื่อนบ้านทุกตัว → สถานะสุดท้ายที่ควรเห็นคือ "Full"\n• ส่วน DROTHER สองตัวจะค้างกันที่ "2-Way" (ไม่ต้อง full ต่อกันเอง)\n\n✅ ทำไม C ถูก: ถ้า DR ทำงานถูกต้อง มันจะขึ้นสถานะ "Full" กับเพื่อนบ้าน → ยืนยันว่า adjacency สมบูรณ์และแลก LSA กันครบ\n\n❌ ทำไมข้ออื่นผิด:\nA. Exchange = กำลังแลก DBD ยังไม่จบ (สถานะกลางทาง)\nB. 2-Way = เห็นกันแล้วแต่เป็นสถานะที่ DROTHER ค้างต่อกัน ไม่ใช่ "สมบูรณ์"\nD. Init = เพิ่งได้รับ hello ทางเดียว ยังไม่ neighbor สมบูรณ์\n\n📗 จำไว้สอบ: adjacency ที่สมบูรณ์ = "Full" | DROTHER↔DROTHER ค้างที่ "2-Way" ถือเป็นปกติ',
  },
  {
    id: 334,
    kind: 'multi',
    prompt: 'What are two reasons for an engineer to configure a floating static route? (Choose two.)',
    options: [
      { key: 'A', text: 'to automatically route traffic on a secondary path when the primary path goes down' },
      { key: 'B', text: 'to route traffic differently based on the source IP of the packet' },
      { key: 'C', text: 'to enable fallback static routing when the dynamic routing protocol fails' },
      { key: 'D', text: 'to support load balancing via static routing' },
      { key: 'E', text: 'to control the return path of traffic that is sent from the router' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — Floating static route = static route ที่ตั้ง AD ให้ "สูงกว่า" เส้นทางหลัก (static default AD=1 หรือ dynamic เช่น OSPF 110) → จะ "ไม่" ถูกใส่ในตาราง routing จนกว่าเส้นทางหลักจะหาย แล้วมันจึงลอยขึ้นมาแทน (จึงเรียก floating)\n\n✅ ทำไม A, C ถูก:\nA. เป็นเส้นทางสำรอง: พอ primary path ล่ม floating route เข้ามาทำงานอัตโนมัติ\nC. ใช้เป็น fallback เมื่อ dynamic routing protocol ล้มเหลว (เส้นทาง dynamic หายไปจากตาราง)\n\n❌ ทำไมข้ออื่นผิด:\nB. เลือกเส้นทางตาม source IP = policy-based routing (PBR) ไม่ใช่ floating static\nD. floating route "ไม่ได้" load balance — มันซ่อนอยู่จนกว่าเส้นหลักตาย (ถ้า AD เท่ากันจึงจะ balance แต่นั่นไม่ใช่ floating)\nE. ควบคุม return path เป็นเรื่องของฝั่งตรงข้าม/นโยบายอื่น ไม่ใช่หน้าที่ floating static\n\n📗 จำไว้สอบ: floating static = backup ที่ AD สูงกว่า ซ่อนไว้จนเส้นหลักล่ม (ไม่ load balance)',
  },
  {
    id: 335,
    kind: 'single',
    prompt: 'The service password-encryption command is entered on a router. What is the effect of this configuration?',
    options: [
      { key: 'A', text: 'restricts unauthorized users from viewing clear-text passwords in the running configuration' },
      { key: 'B', text: 'encrypts the password exchange when a VPN tunnel is established' },
      { key: 'C', text: 'prevents network administrators from configuring clear-text passwords' },
      { key: 'D', text: 'protects the VLAN database from unauthorized PC connections on the switch' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — service password-encryption ใช้การเข้ารหัสแบบ Type 7 (Vigenère) กับรหัสผ่านที่ปกติเป็น clear-text ใน config (เช่น enable password, line password) → ทำให้คนที่แอบดู show running-config ไม่เห็นรหัสเป็นตัวอักษรตรง ๆ\n\n✅ ทำไม A ถูก: จุดประสงค์คือกันการ "มองเห็น" รหัส clear-text ใน running/startup config (เช่นคนแอบดูจอ/พิมพ์ออกมา)\n\n⚠️ ข้อควรรู้: Type 7 อ่อนมาก ถอดกลับได้ง่ายด้วยเครื่องมือออนไลน์ — ป้องกันแค่ "การเหลือบมอง" ไม่ใช่การโจมตีจริงจัง (รหัสสำคัญควรใช้ secret / Type 8-9)\n\n❌ ทำไมข้ออื่นผิด:\nB. ไม่เกี่ยวกับ VPN — คนละเรื่องกับ IPsec\nC. ไม่ได้ห้ามแอดมินตั้ง clear-text — แค่เข้ารหัสตอนแสดงผล\nD. ไม่เกี่ยวกับ VLAN database\n\n📗 จำไว้สอบ: service password-encryption = ซ่อนรหัส clear-text ใน config ด้วย Type 7 (อ่อน ถอดได้)',
  },
  {
    id: 336,
    kind: 'drag',
    image: q336,
    prompt:
      'Drag and drop the application protocols from the left onto the transport protocols that they use on the right (TCP / UDP).',
    categories: [
      { name: 'TCP', items: ['FTP', 'SMTP', 'SSH'] },
      { name: 'UDP', items: ['DHCP', 'SNMP', 'TFTP'] },
    ],
    explanation:
      '📘 แนวคิด — จำว่าโปรโตคอลชั้นแอปฯ ตัวไหนวิ่งบน TCP (ต้องการความน่าเชื่อถือ) หรือ UDP (เน้นเร็ว/เบา):\n\n🔵 TCP (reliable, มี handshake):\n• FTP (20/21) — โอนไฟล์ต้องครบถ้วน\n• SMTP (25) — ส่งอีเมลต้องไม่ตกหล่น\n• SSH (22) — เซสชันจัดการอุปกรณ์ต้องเสถียร\n\n🟢 UDP (เบา/เร็ว/ไม่ต้อง handshake):\n• DHCP (67/68) — broadcast ขอ IP ตอนบูต\n• SNMP (161/162) — โพลสถานะจำนวนมาก เน้นเบา\n• TFTP (69) — โอนไฟล์แบบง่าย ไม่ต้อง login\n\n📗 จำไว้สอบ: กลุ่ม UDP ที่ต้องจำ = DHCP, SNMP, TFTP, DNS(query), SYSLOG, NTP, VoIP-RTP • ที่เหลือส่วนใหญ่ (FTP, SMTP, SSH, HTTP/S, Telnet) = TCP',
  },
  {
    id: 337,
    kind: 'single',
    prompt:
      'Refer to the exhibit. Which action is taken by the router when a packet is sourced from 10.10.10.2 and destined for 10.10.10.16?\n\nRouter1#show ip route\nGateway of last resort is not set\n  209.165.200.0/27 is subnetted, 1 subnets\nB    209.165.200.224 [20/0] via 10.10.12.2, 00:09:57\n  10.0.0.0/8 is variably subnetted, 4 subnets, 3 masks\nC    10.10.10.0/28 is directly connected, GigabitEthernet0/0\nC    10.10.11.0/30 is directly connected, FastEthernet2/0\nO    10.10.13.0/24 [110/2] via 10.10.10.1, 00:08:34, GigabitEthernet0/0\nC    10.10.12.0/30 is directly connected, GigabitEthernet0/1',
    options: [
      { key: 'A', text: 'It uses a route that is similar to the destination address.' },
      { key: 'B', text: 'It discards the packets.' },
      { key: 'C', text: 'It floods packets to all learned next hops.' },
      { key: 'D', text: 'It queues the packets waiting for the route to be learned.' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A แต่ผิด — การ routing ต้อง "match ช่วงจริง" ไม่ใช่ "คล้าย ๆ" คำตอบที่ถูกต้องคือ B (ทิ้งแพ็กเก็ต)\n\n🔍 อ่านตาราง: "Gateway of last resort is not set" (ไม่มี default route!)\n\n🧮 วิเคราะห์ปลายทาง 10.10.10.16:\n• C 10.10.10.0/28 → block 16 → ครอบ .0–.15\n  ⚠️ ปลายทาง .16 "เกิน" ช่วงนี้ (จบที่ .15) → ไม่ match! (.16 คือ network address ของซับเน็ตถัดไป 10.10.10.16/28 ซึ่งไม่มีในตาราง)\n• route อื่นเป็น 10.10.11.x, 10.10.12.x, 10.10.13.x, 209.165.x → ไม่ครอบ .16 เช่นกัน\n→ ไม่มี route ใด match และไม่มี gateway of last resort → เราเตอร์ "ทิ้ง" แพ็กเก็ต (และอาจส่ง ICMP unreachable กลับ)\n\n✅ ทำไม B ถูก: เมื่อไม่มีเส้นทางที่ตรงและไม่มี default route → drop packet\n\n❌ ทำไมข้ออื่นผิด:\nA. เราเตอร์ไม่ได้ใช้ route ที่ "คล้าย" — ต้อง match ตาม prefix จริงเท่านั้น\nC. เราเตอร์ไม่ flood แพ็กเก็ต (นั่นคือพฤติกรรมสวิตช์ L2)\nD. IP routing ไม่ queue รอเรียนรู้ route — ไม่มีก็ทิ้งทันที\n\n📗 จำไว้สอบ: ไม่มี route match + ไม่มี gateway of last resort = ทิ้งแพ็กเก็ต (drop) เสมอ',
  },
  {
    id: 338,
    kind: 'single',
    image: q338,
    prompt:
      'Refer to the exhibit. After the configuration is applied, the two routers fail to establish an OSPF neighbor relationship. What is the reason for the problem?',
    options: [
      { key: 'A', text: 'The OSPF router IDs are mismatched.' },
      { key: 'B', text: 'Router2 is using the default hello timer.' },
      { key: 'C', text: 'The network statement on Router1 is misconfigured.' },
      { key: 'D', text: 'The OSPF process IDs are mismatched.' },
    ],
    correct: ['B'],
    explanation:
      '🔍 อ่าน config:\n• Router1: ip ospf hello-interval 5 (ตั้ง hello = 5 วินาที)\n• Router2: ไม่ได้ตั้ง hello-interval → ใช้ค่า default = 10 วินาที\n\n📘 แนวคิด — OSPF จะเป็น neighbor กันได้ ค่า Hello และ Dead interval ต้อง "ตรงกันทั้งสองฝั่ง" (ไม่ตรง = ไม่ขึ้น neighbor). Router1 = 5, Router2 = 10 → ไม่ตรง → adjacency ล้ม\n\n✅ ทำไม B ถูก: Router2 ยังใช้ hello timer ค่า default (10) ขณะ Router1 ตั้งเป็น 5 → hello/dead mismatch ทำให้จับคู่ไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. Router ID ต่างกัน (1.1.1.1 กับ 2.2.2.2) เป็นเรื่อง "ปกติ" — จริง ๆ ต้องต่างกันด้วยซ้ำ (ถ้าซ้ำกันต่างหากถึงจะพัง)\nC. network 10.10.10.0 0.0.0.3 area 0 ครอบ .0–.3 ซึ่งรวม IP ทั้งสองฝั่ง (.1 และ .2) → ถูกต้อง ไม่ใช่ปัญหา\nD. Process ID (1000 vs 1001) เป็นค่า "local" ไม่ต้องตรงกันก็เป็น neighbor ได้\n\n📗 จำไว้สอบ: ปัจจัยที่ "ต้องตรง" ถึงจะเป็น OSPF neighbor = Hello/Dead, Area ID, subnet/mask, authentication, stub flag — ส่วน Process ID และ Router ID "ไม่ต้องตรง"',
  },
  {
    id: 339,
    kind: 'single',
    prompt: 'Which design element is a best practice when deploying an 802.11b wireless infrastructure?',
    options: [
      { key: 'A', text: 'disabling TPC so that access points can negotiate signal levels with their attached wireless devices' },
      { key: 'B', text: 'setting the maximum data rate to 54 Mbps on the Cisco Wireless LAN Controller' },
      { key: 'C', text: 'allocating nonoverlapping channels to access points that are in close physical proximity to one another' },
      { key: 'D', text: 'configuring access points to provide clients with a maximum of 5 Mbps' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — 802.11b อยู่ย่าน 2.4 GHz ที่ช่องทับซ้อนกันง่าย → best practice ในการวาง AP หลายตัวที่อยู่ใกล้กันคือให้ใช้ "ช่องที่ไม่ทับซ้อน" (1, 6, 11) เพื่อลด co-channel interference\n\n✅ ทำไม C ถูก: จัดสรร non-overlapping channels ให้ AP ที่อยู่ใกล้กัน = หลักการออกแบบ RF พื้นฐานที่ลดการรบกวนกันเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. ปิด TPC (Transmit Power Control) เป็นการทิ้งกลไกปรับกำลังส่งอัตโนมัติ — ไม่ใช่ best practice\nB. 802.11b รองรับสูงสุดแค่ 11 Mbps — ตั้ง 54 Mbps (ของ 802.11g/a) ไม่สมเหตุผลกับ 802.11b\nD. การล็อกความเร็วไว้ที่ 5 Mbps ไม่ใช่หลักออกแบบมาตรฐาน\n\n📗 จำไว้สอบ: ออกแบบ 2.4 GHz = ใช้ช่อง 1/6/11 (non-overlapping) กับ AP ที่อยู่ใกล้กัน',
  },
  {
    id: 340,
    kind: 'single',
    image: q340,
    prompt:
      'Refer to the exhibit. If configuring a static default route on the router with the "ip route 0.0.0.0 0.0.0.0 10.13.0.1 120" command, how does the router respond?',
    options: [
      { key: 'A', text: 'It ignores the new static route until the existing OSPF default route is removed.' },
      { key: 'B', text: 'It immediately replaces the existing OSPF route in the routing table with the newly configured static route.' },
      { key: 'C', text: 'It starts load-balancing traffic between the two default routes.' },
      { key: 'D', text: 'It starts sending traffic without a specific matching entry in the routing table to GigabitEthernet0/0.' },
    ],
    correct: ['A'],
    explanation:
      '🔍 อ่านตาราง: มี default route อยู่แล้ว = "O*E2 0.0.0.0/0 [110/1] via 10.12.0.1" (OSPF external, AD = 110)\n\n📘 แนวคิด — เมื่อมีหลาย route ไปปลายทางเดียวกัน เราเตอร์เลือกตัวที่ "AD ต่ำกว่า" ลงตาราง. คำสั่งใหม่ตั้ง static default พร้อม AD = 120 (ตัวเลขท้ายสุด)\n\n🧮 เทียบ AD: OSPF E2 = 110 vs static ใหม่ = 120 → 110 < 120 → OSPF ยังชนะ → static (floating) ตัวใหม่ "ไม่ถูกใส่ในตาราง" จนกว่า OSPF default จะหายไป\n\n✅ ทำไม A ถูก: static AD 120 เป็น floating route มันจะรอ (ถูกละเว้น) จนกว่า OSPF default (AD 110) จะหลุดจากตาราง แล้วจึงเข้ามาแทน\n\n❌ ทำไมข้ออื่นผิด:\nB. ถ้าไม่ใส่เลข 120 (AD static = 1) ถึงจะแทน OSPF ทันที — แต่ที่นี่ใส่ 120 จึงไม่แทน\nC. AD ต่างกัน (110 vs 120) → ไม่ load balance (load balance ต้อง AD และ metric เท่ากัน)\nD. เราเตอร์ยังใช้ OSPF default ส่งทราฟฟิกตามปกติ (ทิศทางตาม 10.12.0.1)\n\n📗 จำไว้สอบ: ตัวเลขท้ายคำสั่ง ip route คือ AD — ตั้งให้สูงกว่าเส้นหลัก = floating/backup route',
  },
  {
    id: 341,
    kind: 'single',
    prompt: 'What does an SDN controller use as a communication protocol to relay forwarding changes to a southbound API?',
    options: [
      { key: 'A', text: 'OpenFlow' },
      { key: 'B', text: 'Java' },
      { key: 'C', text: 'REST' },
      { key: 'D', text: 'XML' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม SDN:\n• Northbound API → คุยกับ "ข้างบน" (แอป/ผู้ดูแล) มักเป็น REST\n• ⭐ Southbound API → คุยลงไปหา "อุปกรณ์ข้างล่าง" เพื่อสั่งเปลี่ยน forwarding table โปรโตคอลยอดนิยม = OpenFlow (รวมถึง NETCONF, OpFlex)\n\n✅ ทำไม A ถูก: OpenFlow เป็นโปรโตคอล southbound ที่ controller ใช้ push การเปลี่ยนแปลง forwarding ลงไปยัง switch/อุปกรณ์\n\n❌ ทำไมข้ออื่นผิด:\nB. Java เป็นภาษาโปรแกรม ไม่ใช่โปรโตคอลสื่อสาร southbound\nC. REST เป็น API ฝั่ง northbound (คุยกับแอปข้างบน) เป็นหลัก\nD. XML เป็นรูปแบบข้อมูล (data format) ไม่ใช่โปรโตคอล southbound\n\n📗 จำไว้สอบ: Southbound = OpenFlow/NETCONF (ลงอุปกรณ์) | Northbound = REST (ขึ้นแอป)',
  },
  {
    id: 342,
    kind: 'multi',
    image: q342,
    prompt:
      'Refer to the exhibit. An engineer is configuring the New York router to reach the Lo1 interface (2000::1/128) of the Atlanta router using interface Se0/0/0 as the primary path. Which two commands must be configured on the New York router so that it can reach the Lo1 interface via Washington when the link between New York and Atlanta goes down? (Choose two.) [Atlanta Se0/0/0=2012::1, Washington Se0/0/0=2023::3, New York Se0/0/1=2023::2]',
    options: [
      { key: 'A', text: 'ipv6 route 2000::1/128 2012::1' },
      { key: 'B', text: 'ipv6 route 2000::1/128 2012::1 5' },
      { key: 'C', text: 'ipv6 route 2000::1/128 2012::2' },
      { key: 'D', text: 'ipv6 route 2000::1/128 2023::2 5' },
      { key: 'E', text: 'ipv6 route 2000::1/128 2023::3 5' },
    ],
    correct: ['A', 'E'],
    explanation:
      '🔍 อ่าน topology:\n• New York Se0/0/0 ต่อ Atlanta ผ่าน subnet 2012::/126 → next-hop ฝั่ง Atlanta = 2012::1 (นี่คือ primary path)\n• New York Se0/0/1 ต่อ Washington ผ่าน subnet 2023::/126 → next-hop ฝั่ง Washington = 2023::3 (ทางอ้อมเป็น backup)\n\n📘 แนวคิด — ต้องมี 2 เส้นทางไป 2000::1/128:\n1) Primary ผ่าน Atlanta โดยตรง (AD ปกติ = 1)\n2) Backup (floating) ผ่าน Washington โดยตั้ง AD สูงกว่า (เช่น 5) เพื่อให้ซ่อนไว้จนกว่า primary จะล่ม\n\n✅ ทำไม A, E ถูก:\nA. ipv6 route 2000::1/128 2012::1 → เส้นหลักผ่าน Atlanta (next-hop 2012::1) AD=1\nE. ipv6 route 2000::1/128 2023::3 5 → เส้นสำรองผ่าน Washington (next-hop 2023::3) AD=5 → floating\n\n❌ ทำไมข้ออื่นผิด:\nB. เส้นหลักไม่ควรตั้ง AD=5 — ถ้าตั้งเท่ากับ backup จะสับสน (primary ควร AD ต่ำสุด)\nC. 2012::2 เป็น IP ของ New York เอง ไม่ใช่ next-hop (ต้องชี้ไปที่ Atlanta = 2012::1)\nD. 2023::2 เป็น IP ของ New York เอง (ฝั่ง Se0/0/1) ไม่ใช่ next-hop — ต้องเป็น Washington = 2023::3\n\n📗 จำไว้สอบ: next-hop ต้องเป็น IP ของ "อีกฝั่ง" ของลิงก์เสมอ • backup ตั้ง AD สูงกว่า = floating static route',
  },
  {
    id: 343,
    kind: 'single',
    prompt: 'Which statement correctly compares traditional networks and controller-based networks?',
    options: [
      { key: 'A', text: 'Only traditional networks offer a centralized control plane.' },
      { key: 'B', text: 'Only traditional networks natively support centralized management.' },
      { key: 'C', text: 'Traditional and controller-based networks abstract policies from device configurations.' },
      { key: 'D', text: 'Only controller-based networks decouple the control plane and the data plane.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เครือข่ายดั้งเดิม: แต่ละอุปกรณ์มี control plane ของตัวเอง (distributed) ตัดสินใจ forward เอง. เครือข่าย controller-based (SDN): "แยก" control plane ออกไปไว้ที่ controller กลาง เหลือแต่ data plane บนอุปกรณ์\n\n✅ ทำไม D ถูก: เฉพาะ controller-based เท่านั้นที่ decouple (แยก) control plane ออกจาก data plane — นี่คือหัวใจของ SDN\n\n❌ ทำไมข้ออื่นผิด:\nA. control plane รวมศูนย์เป็นของ controller-based ไม่ใช่ traditional (traditional เป็นแบบกระจาย)\nB. การจัดการรวมศูนย์เป็นจุดเด่นของ controller-based ไม่ใช่ traditional\nC. การ abstract policy ออกจาก config เป็นคุณสมบัติของ controller-based เท่านั้น (traditional ผูกกับ CLI ต่ออุปกรณ์)\n\n📗 จำไว้สอบ: SDN/controller-based = แยก control ออกจาก data plane + รวมศูนย์ | traditional = control plane กระจายในทุกกล่อง',
  },
  {
    id: 344,
    kind: 'single',
    prompt: 'How does the dynamically-learned MAC address feature function?',
    options: [
      { key: 'A', text: 'The CAM table is empty until ingress traffic arrives at each port.' },
      { key: 'B', text: 'Switches dynamically learn MAC addresses of each connecting CAM table.' },
      { key: 'C', text: 'The ports are restricted and learn up to a maximum of 10 dynamically-learned addresses.' },
      { key: 'D', text: 'It requires a minimum number of secure MAC addresses to be filled dynamically.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — สวิตช์เรียนรู้ MAC แบบ dynamic โดยดู "source MAC" ของเฟรมที่วิ่งเข้ามาแต่ละพอร์ต แล้วบันทึกลง CAM/MAC table. ตอนสวิตช์เพิ่งบูต ตารางจะ "ว่างเปล่า" จนกว่าจะมีทราฟฟิกวิ่งเข้ามาให้เรียนรู้\n\n✅ ทำไม A ถูก: CAM table เริ่มต้นว่าง และจะค่อย ๆ เติมเมื่อมี ingress traffic เข้ามาที่แต่ละพอร์ต (สวิตช์อ่าน source MAC ไปเก็บ)\n\n❌ ทำไมข้ออื่นผิด:\nB. ประโยคกำกวม/ผิดหลัก — สวิตช์เรียนจาก source MAC ของเฟรม ไม่ใช่ "เรียน MAC ของ CAM table"\nC. การจำกัดจำนวน (เช่น 10) เป็นเรื่องของ port security ที่ต้องตั้งเอง ไม่ใช่พฤติกรรม dynamic learning โดยธรรมชาติ\nD. "จำนวนขั้นต่ำของ secure MAC" ไม่ใช่กลไก dynamic learning (เกี่ยวกับ port security)\n\n📗 จำไว้สอบ: dynamic learning = ตารางว่างตอนบูต → เรียนจาก source MAC ของเฟรมขาเข้าแต่ละพอร์ต',
  },
  {
    id: 345,
    kind: 'single',
    image: q345,
    prompt:
      'Refer to the exhibit. Which route does R1 select for traffic that is destined to 192.168.16.2?\n\nD     192.168.16.0/26 [90/2679326] via 192.168.1.1\nR     192.168.16.0/24 [120/3] via 192.168.1.2\nO     192.168.16.0/21 [110/2] via 192.168.1.3\ni L1  192.168.16.0/27 [115/30] via 192.168.1.4',
    options: [
      { key: 'A', text: '192.168.16.0/26 via 192.168.1.1 (EIGRP)' },
      { key: 'B', text: '192.168.16.0/24 via 192.168.1.2 (RIP)' },
      { key: 'C', text: '192.168.16.0/21 via 192.168.1.3 (OSPF)' },
      { key: 'D', text: '192.168.16.0/27 via 192.168.1.4 (IS-IS)' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เมื่อปลายทางตรงกับหลาย route เราเตอร์ใช้กฎ "Longest Prefix Match" (prefix ยาวสุดชนะ) ก่อนเสมอ — AD และ metric จะพิจารณา "ต่อเมื่อ prefix ยาวเท่ากัน" เท่านั้น\n\n🧮 ปลายทาง 192.168.16.2 อยู่ในทุก route (เพราะ .2 อยู่ในช่วงต้นของ 192.168.16.0 ทุกอัน) แต่ต้องดูว่า prefix ไหนยาวสุด:\n• /27 → ยาวสุด ✔ (i L1 via 192.168.1.4)\n• /26, /24, /21 → สั้นกว่า\n\n✅ ทำไม D ถูก: 192.168.16.0/27 มี prefix ยาวที่สุด (/27) → เราเตอร์เลือกเส้นทางนี้ (via 192.168.1.4) แม้ IS-IS จะมี AD สูงกว่า EIGRP ก็ตาม เพราะ longest prefix มาก่อน AD\n\n❌ ทำไมข้ออื่นผิด:\nA. /26 ยาวเป็นอันดับสอง — ไม่ชนะ /27\nB. /24 สั้นกว่า\nC. /21 สั้นสุด — แพ้ทุกตัว\n(อย่าหลงเลือกตาม AD ต่ำสุด — AD ใช้ตัดสินเฉพาะเมื่อ prefix เท่ากัน)\n\n📗 จำไว้สอบ: ลำดับการเลือกเส้นทาง = (1) Longest Prefix Match มาก่อน → (2) ถ้า prefix เท่ากันค่อยดู AD → (3) ถ้า AD เท่ากันค่อยดู metric',
  },
  {
    id: 346,
    kind: 'single',
    prompt: 'Which technology can prevent client devices from arbitrarily connecting to the network without state remediation?',
    options: [
      { key: 'A', text: '802.1x' },
      { key: 'B', text: 'IP Source Guard' },
      { key: 'C', text: 'MAC Authentication Bypass' },
      { key: 'D', text: '802.11n' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — 802.1X เป็นระบบ port-based access control: พอร์ตจะถูก "ปิด" ไม่ให้ผ่านจนกว่า client (supplicant) จะยืนยันตัวตนผ่าน authenticator ไปยัง RADIUS server สำเร็จ → กันอุปกรณ์แปลกปลอมเสียบแล้วเข้าเครือข่ายได้ตามใจ และยังต่อยอดกับ posture/state remediation (ตรวจว่าเครื่องมี patch/AV ครบก่อนปล่อยเข้า)\n\n✅ ทำไม A ถูก: 802.1X บังคับ authentication ก่อนเข้าใช้เครือข่าย จึงกันการเชื่อมต่อโดยพลการและรองรับการทำ state remediation\n\n❌ ทำไมข้ออื่นผิด:\nB. IP Source Guard กันการปลอม source IP (จับคู่กับ DHCP snooping) — ไม่ได้ทำ authentication/remediation\nC. MAB (MAC Authentication Bypass) เป็น "ทางเลี่ยง" สำหรับอุปกรณ์ที่ไม่มี 802.1X supplicant (พิสูจน์ด้วย MAC ล้วน) — อ่อนแอ ไม่ใช่ตัวป้องกันหลัก\nD. 802.11n เป็นมาตรฐาน Wi-Fi (ความเร็ว) ไม่เกี่ยวกับความปลอดภัย\n\n📗 จำไว้สอบ: ควบคุมการเข้าถึงพอร์ต + ต้อง authenticate ก่อน = 802.1X (ใช้ RADIUS)',
  },
  {
    id: 347,
    kind: 'single',
    prompt:
      'An engineer observes high usage on the 2.4-GHz channels and lower usage on the 5-GHz channels. What must be configured to allow clients to preferentially use 5-GHz access points?',
    options: [
      { key: 'A', text: 'Re-Anchor Roamed Clients' },
      { key: 'B', text: '11ac MU-MIMO' },
      { key: 'C', text: 'OEAP Split Tunnel' },
      { key: 'D', text: 'Client Band Select' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Band Select ทำงานโดย WLC/AP จงใจ "หน่วง/ไม่ตอบ" probe request ที่เข้ามาบนย่าน 2.4 GHz ในช่วงแรก → ผลักดันให้ dual-band client ที่รองรับ 5 GHz หันไปเชื่อมต่อย่าน 5 GHz แทน (ซึ่งช่องเยอะกว่า แออัดน้อยกว่า)\n\n✅ ทำไม D ถูก: Client Band Select คือฟีเจอร์ที่ออกแบบมาให้ client เอนเอียงไปใช้ 5 GHz โดยตรง ตรงกับสถานการณ์ 2.4 GHz แออัด\n\n❌ ทำไมข้ออื่นผิด:\nA. Re-Anchor Roamed Clients เกี่ยวกับการ anchor client ที่โรมมิ่งไปยัง controller — ไม่เกี่ยวกับการเลือกย่าน\nB. MU-MIMO (11ac) เพิ่มประสิทธิภาพการส่งข้อมูลพร้อมกันหลาย client — ไม่ได้บังคับเลือกย่าน\nC. OEAP Split Tunnel เกี่ยวกับ teleworker AP แยกทราฟฟิก local/corporate — คนละเรื่อง\n\n📗 จำไว้สอบ: 2.4 GHz แออัด อยากผลัก client ไป 5 GHz = เปิด "Band Select"',
  },
  {
    id: 348,
    kind: 'single',
    image: q348,
    prompt:
      'Refer to the exhibit. Which command must be executed for Gi1/1 on SW1 to become a trunk port if Gi1/1 on SW2 is configured in desirable or trunk mode?',
    options: [
      { key: 'A', text: 'switchport mode trunk' },
      { key: 'B', text: 'switchport mode dot1q-tunnel' },
      { key: 'C', text: 'switchport mode dynamic auto' },
      { key: 'D', text: 'switchport mode dynamic desirable' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — DTP (Dynamic Trunking Protocol) matrix ผลลัพธ์การจับคู่โหมด:\n• dynamic auto + dynamic auto → access (ไม่ trunk — ต่างฝ่ายต่างรอ)\n• dynamic auto + dynamic desirable → TRUNK ✔\n• dynamic auto + trunk (on) → TRUNK ✔\n• dynamic desirable + (desirable/auto/trunk) → TRUNK ✔\n\n✅ ทำไม C ถูก: โจทย์บอกว่าฝั่ง SW2 เป็น "desirable หรือ trunk" — ถ้า SW1 ตั้ง "dynamic auto" จะเกิด trunk ได้ครบทั้งสองกรณี (auto+desirable=trunk, auto+trunk=trunk) โดยเป็นการเจรจา DTP อัตโนมัติ\n\n❌ ทำไมข้ออื่นผิด:\nA. switchport mode trunk (on) ก็เกิด trunk ได้จริง แต่ข้อนี้ทดสอบพฤติกรรม DTP ที่ "ฝั่งหนึ่งเจรจา" — คำตอบมาตรฐานคือ auto ที่ตอบสนอง desirable/trunk (และ auto ปลอดภัยกว่า mode on ที่บังคับ trunk ตายตัว)\nB. dot1q-tunnel เป็นโหมด Q-in-Q (service provider) ไม่ใช่ trunk ปกติ\nD. dynamic desirable ก็เกิด trunk ได้ แต่มันจะ "ส่ง DTP ชวน trunk เชิงรุก" — โจทย์เน้นตัวที่ "กลายเป็น trunk เมื่ออีกฝั่งเป็น desirable/trunk" ซึ่ง auto ตอบโจทย์พอดี (ตามเฉลยมาตรฐาน = C)\n\n📗 จำไว้สอบ DTP: auto+auto = ไม่ trunk | ต้องมีอย่างน้อยฝั่งหนึ่งเป็น desirable หรือ on ถึงจะ trunk',
  },
  {
    id: 349,
    kind: 'single',
    prompt: 'Which IPv6 address type provides communication between subnets and is unable to route on the internet?',
    options: [
      { key: 'A', text: 'global unicast' },
      { key: 'B', text: 'unique local' },
      { key: 'C', text: 'link-local' },
      { key: 'D', text: 'multicast' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ชนิด IPv6 unicast:\n• Global unicast (2000::/3) → route บนอินเทอร์เน็ตได้ (เทียบ public IPv4)\n• ⭐ Unique local (FC00::/7, ใช้จริง FD00::/8) → route "ข้าม subnet ภายในองค์กร" ได้ แต่ "ห้าม" route ออกอินเทอร์เน็ต (เทียบ private IPv4 อย่าง 10.x/192.168.x)\n• Link-local (FE80::/10) → ใช้ได้เฉพาะภายในลิงก์เดียว "route ข้าม subnet ไม่ได้เลย"\n\n✅ ทำไม B ถูก: unique local สื่อสารระหว่าง subnet ภายในองค์กรได้ แต่ไม่ routable บนอินเทอร์เน็ต → ตรงตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. global unicast route บนอินเทอร์เน็ตได้ (ตรงข้ามโจทย์)\nC. link-local route ข้าม subnet ไม่ได้ (โจทย์ต้องการ "ระหว่าง subnet ได้")\nD. multicast เป็น one-to-many ไม่ใช่ address สำหรับสื่อสาร unicast ระหว่าง subnet\n\n📗 จำไว้สอบ: ระหว่าง subnet ได้ + ห้ามออกเน็ต = unique local (FD00::/8) ≈ private IPv4',
  },
  {
    id: 350,
    kind: 'multi',
    prompt: 'What are two descriptions of three-tier network topologies? (Choose two.)',
    options: [
      { key: 'A', text: 'The core and distribution layers perform the same functions.' },
      { key: 'B', text: 'The access layer manages routing between devices in different domains.' },
      { key: 'C', text: 'The network core is designed to maintain continuous connectivity when devices fail.' },
      { key: 'D', text: 'The core layer maintains wired connections for each host.' },
      { key: 'E', text: 'The distribution layer runs Layer 2 and Layer 3 technologies.' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — โมเดล 3 ชั้นของ Cisco (Access / Distribution / Core):\n• Access → ต่อ end device (PC, phone, AP), ทำ L2 switching, PoE, port security\n• Distribution → จุดรวม (aggregation), เป็นขอบเขต L2/L3, ทำ routing ระหว่าง VLAN, policy/ACL, redundancy\n• Core → แกนกลางความเร็วสูง เน้น forward เร็วและ "ทำงานต่อเนื่องแม้อุปกรณ์ล่ม" (redundant, high availability)\n\n✅ ทำไม C, E ถูก:\nC. Core ออกแบบให้ redundant เพื่อคงการเชื่อมต่อต่อเนื่องเมื่ออุปกรณ์เสีย (fault tolerance/HA)\nE. Distribution เป็นชั้นที่ผสม L2 และ L3 (inter-VLAN routing, boundary ระหว่างสองโลก)\n\n❌ ทำไมข้ออื่นผิด:\nA. core กับ distribution "ทำหน้าที่ต่างกัน" (core=เร็ว/forward, distribution=policy/aggregation) — จะเหมือนกันก็ต่อเมื่อยุบเป็น collapsed core (2 ชั้น)\nB. การ routing ระหว่างโดเมนไม่ใช่หน้าที่ของ access layer (access เน้น L2 ต่อ end device)\nD. core ไม่ได้ต่อสายตรงถึงทุกโฮสต์ — นั่นคือหน้าที่ของ access layer\n\n📗 จำไว้สอบ: Access=ต่อ endpoint | Distribution=ขอบเขต L2/L3+policy | Core=backbone เร็ว+redundant',
  },
  {
    id: 351,
    kind: 'single',
    image: q351,
    prompt:
      'Refer to the exhibit. An administrator configures four switches for local authentication using passwords stored in a cryptographic hash. The switches must also support SSH access. Which switch is configured correctly?\n\nSW1: line vty 0 15 / no login local / password cisco\nSW2: username admin1 password abcd1234 / username admin2 password abcd1234 / line vty 0 15 / login local\nSW3: username admin1 secret abcd1234 / username admin2 secret abcd1234 / line vty 0 15 / login local\nSW4: username admin1 secret abcd1234 / username admin2 secret abcd1234 / line console 0 / login local',
    options: [
      { key: 'A', text: 'SW1' },
      { key: 'B', text: 'SW2' },
      { key: 'C', text: 'SW3' },
      { key: 'D', text: 'SW4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โจทย์ต้องการ 3 อย่างพร้อมกัน: (1) local auth, (2) รหัสเก็บเป็น cryptographic hash, (3) รองรับ SSH (เข้าทาง vty)\n• "secret" → เก็บรหัสเป็น hash (MD5/type 5 ขึ้นไป) ✔\n• "password" → เก็บเป็น clear-text (หรือ type 7 อ่อน) ✗ ไม่ใช่ cryptographic hash\n• "login local" ที่ line vty → บังคับ authenticate ด้วย local username สำหรับการเข้าระยะไกล (SSH/Telnet)\n\n✅ ทำไม C (SW3) ถูก: ใช้ "username ... secret" (hash) + "line vty 0 15" + "login local" → ครบทั้ง hash และรองรับ SSH ผ่าน vty\n\n❌ ทำไมข้ออื่นผิด:\nA. SW1 → "no login local" + password cisco → ไม่ได้ใช้ local user, รหัส clear-text\nB. SW2 → ใช้ "password" (clear-text ไม่ใช่ hash) แม้จะมี login local ก็ตาม\nD. SW4 → ใช้ secret (hash) ถูก แต่ตั้ง "login local" ที่ line console 0 (พอร์ตคอนโซล) ไม่ใช่ vty → ไม่รองรับ SSH ระยะไกล\n\n📗 จำไว้สอบ: hash = secret (ไม่ใช่ password) • รองรับ SSH = login local ต้องอยู่ที่ line vty ไม่ใช่ console',
  },
  {
    id: 352,
    kind: 'single',
    prompt: 'What is a role of access points in an enterprise network?',
    options: [
      { key: 'A', text: 'connect wireless devices to a wired network' },
      { key: 'B', text: 'support secure user logins to devices or the network' },
      { key: 'C', text: 'integrate with SNMP in preventing DDoS attacks' },
      { key: 'D', text: 'serve as a first line of defense in an enterprise network' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Access Point (AP) ทำหน้าที่เป็น "สะพาน" (bridge) ระหว่างโลกไร้สาย (Wi-Fi clients) กับเครือข่ายมีสาย (wired LAN) → รับเฟรม 802.11 จากอุปกรณ์ไร้สาย แปลงเป็น 802.3 (Ethernet) ส่งเข้าสายและกลับกัน\n\n✅ ทำไม A ถูก: บทบาทหลักของ AP คือเชื่อมอุปกรณ์ไร้สายเข้ากับเครือข่ายมีสาย\n\n❌ ทำไมข้ออื่นผิด:\nB. การ login/authentication เป็นงานของ AAA/RADIUS ไม่ใช่บทบาทหลักของ AP\nC. AP ไม่ได้ทำหน้าที่ป้องกัน DDoS ผ่าน SNMP\nD. first line of defense = firewall/edge ไม่ใช่ AP\n\n📗 จำไว้สอบ: AP = bridge ระหว่าง wireless (802.11) กับ wired (802.3)',
  },
  {
    id: 353,
    kind: 'single',
    prompt: 'What is a function of TFTP in network operations?',
    options: [
      { key: 'A', text: 'transfers a backup configuration file from a server to a switch using a username and password' },
      { key: 'B', text: 'transfers files between file systems on a router' },
      { key: 'C', text: 'transfers a configuration file from a server to a router on a congested link' },
      { key: 'D', text: 'transfers IOS images from a server to a router for firmware upgrades' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — TFTP (Trivial FTP): ใช้ UDP 69, ไม่มี username/password, เรียบง่าย นิยมใช้โอน IOS image และ config ในเครือข่ายภายในที่เชื่อถือได้\n\n✅ ทำไม D ถูก: งานคลาสสิกของ TFTP คือโหลด IOS image จาก server ไปยังอุปกรณ์เพื่ออัปเกรด firmware (มี image ที่เดียว กระจายให้อุปกรณ์อื่นได้เร็ว)\n\n❌ ทำไมข้ออื่นผิด:\nA. TFTP "ไม่มี" ระบบ username/password → ข้อนี้อธิบายเหมือน FTP มากกว่า\nB. โอนไฟล์ระหว่าง file system บนเราเตอร์เดียวกันคือคำสั่ง copy ภายใน ไม่ใช่ TFTP\nC. TFTP ใช้ UDP ซึ่งไม่เหมาะกับลิงก์ที่แออัด (ไม่มี retransmit/flow control ที่ดี) → ยิ่งแย่บนลิงก์ congested\n\n📗 จำไว้สอบ: TFTP = UDP 69, ไม่ต้อง login, ใช้โหลด IOS/backup config ในเน็ตภายใน',
  },
  {
    id: 354,
    kind: 'single',
    prompt:
      'A network engineer must create a diagram of a multivendor network. Which command must be configured on the Cisco devices so that the topology of the network can be mapped?',
    options: [
      { key: 'A', text: 'Device(config)#lldp run' },
      { key: 'B', text: 'Device(config)#cdp run' },
      { key: 'C', text: 'Device(config-if)#cdp enable' },
      { key: 'D', text: 'Device(config)#flow-sampler-map topology' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โจทย์คำสำคัญคือ "multivendor" (หลายยี่ห้อ) → ต้องใช้โปรโตคอลค้นหาเพื่อนบ้านที่เป็น "มาตรฐานกลาง" = LLDP (IEEE 802.1AB) ซึ่งทุกยี่ห้อรองรับ. CDP เป็นของ Cisco เท่านั้น จะเห็นเฉพาะอุปกรณ์ Cisco\n\n✅ ทำไม A ถูก: "lldp run" (global config) เปิด LLDP ทั้งเครื่อง → คุยกับอุปกรณ์ต่างยี่ห้อได้ ทำให้แผนผัง topology ครบ\n\n❌ ทำไมข้ออื่นผิด:\nB/C. cdp run / cdp enable → CDP เป็น Cisco-proprietary เห็นแค่อุปกรณ์ Cisco ไม่ครอบคลุม multivendor\nD. flow-sampler-map ไม่ใช่คำสั่งค้นหา topology\n\n📗 จำไว้สอบ: multivendor/หลายยี่ห้อ = LLDP | Cisco-only = CDP',
  },
  {
    id: 355,
    kind: 'single',
    prompt: 'What is the same for both copper and fiber interfaces when using SFP modules?',
    options: [
      { key: 'A', text: 'They support an inline optical attenuator to enhance signal strength' },
      { key: 'B', text: 'They provide minimal interruption to services by being hot-swappable' },
      { key: 'C', text: 'They offer reliable bandwidth up to 100 Mbps in half duplex mode' },
      { key: 'D', text: 'They accommodate single-mode and multi-mode in a single module' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — SFP (Small Form-factor Pluggable) คือโมดูลเสียบถอดได้ ทั้งแบบทองแดง (1000BASE-T SFP) และไฟเบอร์ (SX/LX...) มีคุณสมบัติร่วมคือ "hot-swappable" (เสียบ/ถอดได้ขณะอุปกรณ์ทำงานอยู่โดยไม่ต้องปิดเครื่อง)\n\n✅ ทำไม B ถูก: ทั้งทองแดงและไฟเบอร์ SFP ต่างก็ hot-swappable → เปลี่ยนโมดูลได้โดยกระทบบริการน้อยที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. inline optical attenuator ใช้กับไฟเบอร์เท่านั้น (ลดสัญญาณแสงไม่ให้แรงเกิน) — ไม่ใช่ของทองแดง และไม่ได้ "เพิ่ม" สัญญาณ\nC. SFP ทั่วไปเป็น Gigabit (1000 Mbps) full-duplex ไม่ใช่ 100 Mbps half-duplex\nD. โมดูลเดียวรองรับได้แบบเดียว (single-mode หรือ multi-mode) ไม่ใช่ทั้งคู่ในโมดูลเดียว\n\n📗 จำไว้สอบ: จุดร่วมของ SFP ทุกชนิด = hot-swappable',
  },
  {
    id: 356,
    kind: 'single',
    prompt: 'When a WLAN with WPA2 PSK is configured in the Wireless LAN Controller GUI, which format is supported?',
    options: [
      { key: 'A', text: 'Unicode' },
      { key: 'B', text: 'base64' },
      { key: 'C', text: 'decimal' },
      { key: 'D', text: 'ASCII' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตอนตั้ง WPA2 Pre-Shared Key (PSK) บน WLC เราพิมพ์คีย์ได้ 2 รูปแบบ: ASCII (8–63 ตัวอักษร) หรือ HEX (64 หลัก). ในบรรดาตัวเลือกที่ให้ มีเพียง ASCII ที่ถูกต้อง\n\n✅ ทำไม D ถูก: WLC รองรับ PSK เป็น ASCII (ข้อความปกติ 8–63 อักขระ)\n\n❌ ทำไมข้ออื่นผิด:\nA. Unicode ไม่ใช่รูปแบบที่ WLC ให้เลือกสำหรับ PSK\nB. base64 ไม่ใช่ตัวเลือก PSK\nC. decimal ไม่ใช่ตัวเลือก (ตัวเลือกจริงคือ ASCII หรือ HEX)\n\n📗 จำไว้สอบ: WPA2 PSK บน WLC = ASCII (8–63 ตัว) หรือ HEX (64 หลัก)',
  },
  {
    id: 357,
    kind: 'drag',
    image: q357,
    prompt:
      'Drag and drop the TCP/IP protocols from the left onto the transmission protocols (TCP / UDP) on the right.',
    categories: [
      { name: 'TCP', items: ['SMTP', 'HTTP', 'Telnet'] },
      { name: 'UDP', items: ['DNS', 'SNMP', 'RTP'] },
    ],
    explanation:
      '📘 แนวคิด — จำว่าโปรโตคอลไหนวิ่งบน TCP (ต้องการความน่าเชื่อถือ) หรือ UDP (เน้นเร็ว/เบา/เรียลไทม์):\n\n🔵 TCP (reliable, มี handshake):\n• SMTP (25) — ส่งอีเมลต้องครบถ้วน\n• HTTP (80) — โหลดหน้าเว็บต้องไม่ตกหล่น\n• Telnet (23) — เซสชันจัดการต้องเสถียร\n\n🟢 UDP (เบา/เร็ว/ไม่ต้อง handshake):\n• DNS (53) — query สั้น ๆ เน้นเร็ว (query ใช้ UDP; zone transfer ใช้ TCP)\n• SNMP (161/162) — โพลสถานะจำนวนมาก เน้นเบา\n• RTP — สตรีมเสียง/วิดีโอเรียลไทม์ (VoIP) ทนการตกหล่นได้ ต้องการความหน่วงต่ำ\n\n📗 จำไว้สอบ: กลุ่ม UDP ที่ต้องจำ = DNS, SNMP, RTP, DHCP, TFTP, SYSLOG, NTP • ที่เหลือ (SMTP, HTTP, Telnet, FTP, SSH) = TCP',
  },
  {
    id: 358,
    kind: 'single',
    prompt: 'When deploying syslog, which severity level logs informational messages?',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '2' },
      { key: 'C', text: '4' },
      { key: 'D', text: '6' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ระดับความรุนแรง syslog มี 0–7 (ยิ่งเลขน้อยยิ่งร้ายแรง) ท่องด้วยประโยค "Every Awesome Cisco Engineer Will Need Ice-cream Daily":\n• 0 Emergency\n• 1 Alert\n• 2 Critical\n• 3 Error\n• 4 Warning\n• 5 Notification\n• 6 Informational ⭐\n• 7 Debugging\n\n✅ ทำไม D ถูก: ข้อความ "informational" = ระดับ 6\n\n❌ ทำไมข้ออื่นผิด:\nA. 0 = Emergency (ระบบใช้งานไม่ได้)\nB. 2 = Critical\nC. 4 = Warning\n\n📗 จำไว้สอบ: 0 Emergency … 4 Warning, 5 Notification, 6 Informational, 7 Debugging',
  },
  {
    id: 359,
    kind: 'single',
    prompt:
      'Refer to the exhibit. What does router R1 use as its OSPF router-ID?\n\nR1#show ip interface brief\nFastEthernet0/0      unassigned    administratively down\nGigabitEthernet1/0   192.168.0.1   up   up\nGigabitEthernet2/0   10.10.1.10    up   up\nGigabitEthernet3/0   10.10.10.20   up   up\nGigabitEthernet4/0   unassigned    administratively down\nLoopback0            172.16.15.10  (up)',
    options: [
      { key: 'A', text: '10.10.1.10' },
      { key: 'B', text: '10.10.10.20' },
      { key: 'C', text: '172.16.15.10' },
      { key: 'D', text: '192.168.0.1' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก OSPF Router-ID:\n1) ค่าที่ตั้งเองด้วย "router-id x.x.x.x" (ถ้ามี — ชนะทุกอย่าง)\n2) IP สูงสุดบน "loopback" interface ที่ up\n3) IP สูงสุดบน physical interface ที่ up/up\n\n🔍 จาก exhibit: ไม่ได้ตั้ง router-id เอง และมี Loopback0 = 172.16.15.10 (up) → OSPF จะเลือก loopback ก่อน physical เสมอ\n\n✅ ทำไม C ถูก: มี loopback ที่ up → ใช้ IP ของ loopback = 172.16.15.10 เป็น Router-ID (ไม่สนว่า physical จะมี IP สูงกว่าหรือไม่)\n\n❌ ทำไมข้ออื่นผิด:\nA/B. 10.10.1.10 และ 10.10.10.20 เป็น physical interface — จะถูกพิจารณาก็ต่อเมื่อ "ไม่มี loopback"\nD. 192.168.0.1 ก็เป็น physical — แพ้ loopback\n\n📗 จำไว้สอบ: loopback ชนะ physical เสมอในการเลือก Router-ID (แม้ IP จะน้อยกว่า)',
  },
  {
    id: 360,
    kind: 'single',
    prompt: 'Which protocol does an access point use to draw power from a connected switch?',
    options: [
      { key: 'A', text: 'Internet Group Management Protocol' },
      { key: 'B', text: 'Adaptive Wireless Path Protocol' },
      { key: 'C', text: 'Cisco Discovery Protocol' },
      { key: 'D', text: 'Neighbor Discovery Protocol' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — PoE (Power over Ethernet) จ่ายไฟให้ AP ผ่านสาย. Cisco AP ใช้ CDP (Cisco Discovery Protocol) เจรจา "ขอกำลังไฟ" ที่ต้องการจากสวิตช์ (power negotiation) เพื่อให้สวิตช์จัดสรรวัตต์ให้พอเหมาะ (นอกเหนือจากขั้นตรวจจับ PoE พื้นฐาน)\n\n✅ ทำไม C ถูก: CDP ใช้แลกข้อมูล power ระหว่าง Cisco AP กับสวิตช์ → AP ร้องขอไฟที่ต้องการได้\n\n❌ ทำไมข้ออื่นผิด:\nA. IGMP = จัดการ multicast group ไม่เกี่ยวกับไฟ\nB. Adaptive Wireless Path Protocol = โปรโตคอล mesh (AWPP) ไม่เกี่ยวกับ PoE\nD. NDP (IPv6 Neighbor Discovery) = ค้นหาเพื่อนบ้าน IPv6 ไม่เกี่ยวกับไฟ\n\n📗 จำไว้สอบ: Cisco AP เจรจากำลังไฟ PoE ผ่าน CDP (LLDP-MED ก็ทำได้กับอุปกรณ์ทั่วไป)',
  },
  {
    id: 361,
    kind: 'single',
    image: q361,
    prompt: 'Refer to the exhibit. To which device does Router1 send packets that are destined to host 10.10.13.165?',
    options: [
      { key: 'A', text: 'Router2' },
      { key: 'B', text: 'Router3' },
      { key: 'C', text: 'Router4' },
      { key: 'D', text: 'Router5' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ใช้ Longest Prefix Match: หาว่า 10.10.13.165 ตกอยู่ใน subnet ใดที่ยาว/เจาะจงที่สุด แล้วดู next-hop → แล้วโยงกลับไปว่า next-hop นั้นคือเราเตอร์ตัวไหน\n\n🧮 ไล่ตรวจ 10.10.13.165:\n• 10.10.13.0/25 → .0–.127 → ❌\n• 10.10.13.128/28 → .128–.143 → ❌\n• 10.10.13.144/28 → .144–.159 → ❌\n• ⭐10.10.13.160/29 → .160–.167 → ✔ (.165 อยู่ในช่วงนี้) via 10.10.10.5, Gi0/1\n\n🔍 next-hop = 10.10.10.5 อยู่ใน subnet 10.10.10.4/30 (ช่วง .4–.7) ซึ่งเชื่อมกับ Router3\n\n✅ ทำไม B (Router3) ถูก: .165 → route 10.10.13.160/29 → next-hop 10.10.10.5 → ลิงก์ 10.10.10.4/30 → Router3\n\n❌ ทำไมข้ออื่นผิด:\nA. Router2 อยู่ 10.10.10.0/30 (next-hop .1)\nC. Router4 อยู่ 10.10.10.8/30 (next-hop .9)\nD. Router5 อยู่ 10.10.10.12/30 (next-hop .13)\n\n📗 จำไว้สอบ: /29 block = 8 → .160–.167 • จับคู่ next-hop กับลิงก์ /30 เพื่อระบุเราเตอร์',
  },
  {
    id: 362,
    kind: 'single',
    prompt: 'Which networking function occurs on the data plane?',
    options: [
      { key: 'A', text: 'forwarding remote client/server traffic' },
      { key: 'B', text: 'facilitates spanning-tree elections' },
      { key: 'C', text: 'processing inbound SSH management traffic' },
      { key: 'D', text: 'sending and receiving OSPF Hello packets' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — แยก 3 planes:\n• Data plane (forwarding plane) → "ส่งต่อทราฟฟิกผู้ใช้" ที่วิ่งผ่านอุปกรณ์ ด้วยความเร็วสูง (ใช้ CEF/FIB)\n• Control plane → "ตัดสินใจ" สร้างเส้นทาง/ตาราง เช่น OSPF, STP, routing protocol\n• Management plane → "จัดการ/ดูแล" อุปกรณ์ เช่น SSH, Telnet, SNMP\n\n✅ ทำไม A ถูก: การ forward ทราฟฟิก client/server ที่วิ่งผ่านเป็นงานของ data plane โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nB. STP election = control plane\nC. SSH management = management plane\nD. OSPF Hello = control plane\n\n📗 จำไว้สอบ: Data=ส่งต่อทราฟฟิกผ่าน | Control=สร้างเส้นทาง (OSPF/STP) | Management=SSH/SNMP',
  },
  {
    id: 363,
    kind: 'single',
    image: q363,
    prompt:
      'Refer to the exhibit. Only four switches are participating in the VLAN 5 spanning-tree process. Branch-1 priority 614440, Branch-2 priority 39082416, Branch-3 priority 0, Branch-4 root primary. Which switch becomes the permanent root bridge for VLAN 5?',
    options: [
      { key: 'A', text: 'Branch-1' },
      { key: 'B', text: 'Branch-2' },
      { key: 'C', text: 'Branch-3' },
      { key: 'D', text: 'Branch-4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Root bridge = สวิตช์ที่มี "Bridge ID ต่ำสุด" (พิจารณา priority ก่อน ถ้าเท่ากันค่อยดู MAC). ยิ่ง priority น้อย ยิ่งมีโอกาสเป็น root\n\n🔍 เทียบค่า:\n• Branch-3 priority = 0 → ต่ำสุดเท่าที่เป็นไปได้ (0 คือค่าน้อยสุด) ✔\n• Branch-4 "root primary" = มาโครที่ตั้ง priority เป็น 24576 (หรือต่ำกว่า root ปัจจุบัน 4096) แต่ "ไม่มีทางลงต่ำกว่า 0 ได้"\n• Branch-1 (614440) และ Branch-2 (39082416) มีค่าสูงมาก\n\n✅ ทำไม C (Branch-3) ถูก: priority 0 เป็นค่าต่ำสุดสัมบูรณ์ → Branch-3 เป็น root bridge ถาวร แม้ Branch-4 จะสั่ง "root primary" ก็ยังสู้ 0 ไม่ได้ (มาโครปรับได้แค่ 24576 เป็นอย่างต่ำในเคสนี้)\n\n❌ ทำไมข้ออื่นผิด:\nA/B. priority สูงเกินไป ไม่มีทางเป็น root\nD. "root primary" ตั้งได้แค่ 24576 (หรือ 4096 ต่ำกว่า root เดิม) แต่ Branch-3 = 0 อยู่แล้ว → Branch-4 แพ้\n\n📗 จำไว้สอบ: root = priority ต่ำสุด • priority 0 = ต่ำสุดชนะทุกตัว • "spanning-tree ... root primary" ≈ ตั้ง 24576 ไม่ใช่ 0',
  },
  {
    id: 364,
    kind: 'multi',
    prompt:
      'Which two tasks must be performed to configure NTP to a trusted server in client mode on a single network device? (Choose two.)',
    options: [
      { key: 'A', text: 'Enable NTP authentication.' },
      { key: 'B', text: 'Verify the time zone.' },
      { key: 'C', text: 'Disable NTP broadcasts.' },
      { key: 'D', text: 'Specify the IP address of the NTP server.' },
      { key: 'E', text: 'Set the NTP server private key.' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — โจทย์เน้น "trusted server" (เชื่อถือได้) + "client mode" → ต้องทำ 2 อย่าง: ชี้ไป server และเปิดการยืนยันตัวตนเพื่อให้แน่ใจว่าคุยกับ server ตัวจริง\n\n✅ ทำไม A, D ถูก:\nD. "ntp server <ip>" → กำหนด IP ของ NTP server ที่จะไปซิงก์เวลา (ทำให้เป็น client)\nA. "ntp authenticate" (+ ntp trusted-key) → เปิด NTP authentication เพื่อยืนยันว่า server น่าเชื่อถือ (trusted)\n\n❌ ทำไมข้ออื่นผิด:\nB. ตั้ง/ตรวจ time zone เป็นเรื่องการแสดงผลเวลาท้องถิ่น ไม่ใช่ขั้นตอนซิงก์กับ trusted server\nC. ปิด NTP broadcast ไม่ใช่ขั้นตอนที่จำเป็นสำหรับ client แบบ unicast\nE. "private key" ไม่ใช่คำศัพท์ NTP (NTP ใช้ authentication key แบบ symmetric ไม่ใช่ public/private)\n\n📗 จำไว้สอบ: client ที่ trusted = ntp server <ip> + ntp authenticate (พร้อม key)',
  },
  {
    id: 365,
    kind: 'single',
    image: q365,
    prompt:
      'Refer to the exhibit. Shortly after SiteA was connected to SiteB over a new single-mode fiber path, users at SiteA report intermittent connectivity with applications hosted at SiteB. Both interfaces are up/up, 10Gbps full duplex, media type SFP-LR. SiteA shows reliability 166/255. What is the cause of the intermittent connectivity issue?',
    options: [
      { key: 'A', text: 'Interface errors are incrementing.' },
      { key: 'B', text: 'An incorrect SFP media type was used at SiteA.' },
      { key: 'C', text: 'High usage is causing high latency.' },
      { key: 'D', text: 'The sites were connected with the wrong cable type.' },
    ],
    correct: ['A'],
    explanation:
      '🔍 อ่านค่าจาก exhibit: SiteA "reliability 166/255" — ค่านี้คือความน่าเชื่อถือของลิงก์ (255/255 = ดีเยี่ยม). 166/255 ≈ 65% → ต่ำผิดปกติ = มี error/สัญญาณเสียบนอินเทอร์เฟซ ทำให้ทราฟฟิกตก ๆ หาย ๆ\n(สังเกต SiteB reliability 255/255 = ปกติ → ปัญหาอยู่ทางฝั่ง SiteA)\n\n📘 แนวคิด — reliability คำนวณจากอัตราส่วนของเฟรมที่รับสำเร็จเทียบ error. ค่าต่ำ = interface errors กำลังเพิ่มขึ้น (เช่นจาก fiber สกปรก/หลวม/ระยะเกิน/สัญญาณอ่อน)\n\n✅ ทำไม A ถูก: reliability 166/255 บ่งชี้ว่า input/CRC errors กำลัง increment → เป็นสาเหตุของ intermittent connectivity\n\n❌ ทำไมข้ออื่นผิด:\nB. media type ทั้งสองฝั่งเป็น SFP-LR "ตรงกัน" และลิงก์ up → ไม่ใช่ SFP ผิดชนิด\nC. txload/rxload = 1/255 (โหลดต่ำมาก) → ไม่ใช่ high usage\nD. ลิงก์ขึ้น up/up ด้วย single-mode fiber ตามโจทย์ → cable ถูกชนิดแล้ว\n\n📗 จำไว้สอบ: reliability = x/255 ยิ่งต่ำ = error เยอะ • ต่ำกว่า 255 มาก ๆ = interface errors incrementing',
  },
  {
    id: 366,
    kind: 'single',
    prompt: 'Where does a switch maintain DHCP snooping information?',
    options: [
      { key: 'A', text: 'in the MAC address table' },
      { key: 'B', text: 'in the CAM table' },
      { key: 'C', text: 'in the binding database' },
      { key: 'D', text: 'in the frame forwarding database' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — DHCP snooping สร้างตารางชื่อ "DHCP snooping binding database" ที่จับคู่: MAC ↔ IP ↔ VLAN ↔ port (ขาที่ untrusted) จากการดักดู DHCP ที่ปล่อยผ่าน. ฟีเจอร์อย่าง Dynamic ARP Inspection และ IP Source Guard ก็ดึงข้อมูลจากฐานนี้\n\n✅ ทำไม C ถูก: ข้อมูล DHCP snooping ถูกเก็บใน "binding database"\n\n❌ ทำไมข้ออื่นผิด:\nA/B. MAC address table = CAM table (อันเดียวกัน) เก็บ MAC↔port สำหรับ switching ไม่ใช่ข้อมูล DHCP\nD. "frame forwarding database" ไม่ใช่ที่เก็บ binding ของ DHCP snooping\n\n📗 จำไว้สอบ: DHCP snooping → binding database (MAC/IP/VLAN/port) → ใช้ต่อโดย DAI และ IP Source Guard',
  },
  {
    id: 367,
    kind: 'single',
    image: q367,
    prompt:
      'Refer to the exhibit. Interface Gi0/1 is configured: switchport access vlan 11 / switchport trunk allowed vlan 1-10 / switchport trunk encapsulation dot1q / switchport trunk native vlan 5 / switchport mode trunk. Which action is expected from SW1 when an untagged frame is received on the GigabitEthernet0/1 interface?',
    options: [
      { key: 'A', text: 'The frame is processed in VLAN 5.' },
      { key: 'B', text: 'The frame is processed in VLAN 11.' },
      { key: 'C', text: 'The frame is processed in VLAN 1.' },
      { key: 'D', text: 'The frame is dropped.' },
    ],
    correct: ['A'],
    explanation:
      '🔍 อ่าน config: "switchport mode trunk" → พอร์ตนี้เป็น trunk (ไม่ใช่ access) ดังนั้น "switchport access vlan 11" ถูก "ละเว้น" (ใช้เฉพาะตอนเป็น access). สิ่งที่มีผลคือ "switchport trunk native vlan 5"\n\n📘 แนวคิด — บน trunk port: เฟรมที่ "ไม่มี tag" (untagged) จะถูกจัดให้อยู่ใน "native VLAN" ส่วนเฟรมที่มี tag จะอยู่ตาม VLAN ใน tag\n\n✅ ทำไม A ถูก: เฟรม untagged เข้ามาบน trunk → ประมวลผลใน native VLAN = VLAN 5\n\n❌ ทำไมข้ออื่นผิด:\nB. access vlan 11 ใช้ไม่ได้เพราะพอร์ตเป็น trunk ไม่ใช่ access\nC. native VLAN ถูกตั้งเป็น 5 (ไม่ใช่ค่า default 1) → ไม่ใช่ VLAN 1\nD. untagged บน trunk ไม่ถูก drop — จะไปอยู่ native VLAN\n\n📗 จำไว้สอบ: บน trunk → untagged = native VLAN | เมื่อ mode trunk คำสั่ง "access vlan" จะถูกละเว้น',
  },
  {
    id: 368,
    kind: 'single',
    image: q368,
    prompt:
      'Refer to the exhibit. Based on the LACP neighbor status (Partner flags show "SP"), in which mode is the SW1 port channel configured?',
    options: [
      { key: 'A', text: 'passive' },
      { key: 'B', text: 'mode on' },
      { key: 'C', text: 'auto' },
      { key: 'D', text: 'active' },
    ],
    correct: ['D'],
    explanation:
      '🔍 อ่าน flags ของ "เพื่อนบ้าน (Partner)": "SP" → S = Slow LACPDUs, ⭐P = เพื่อนบ้านอยู่โหมด "Passive"\n\n📘 แนวคิด — การจับคู่โหมด LACP:\n• active + passive → ✔ เกิด EtherChannel\n• passive + passive → ❌ ไม่เกิด (ต่างฝ่ายต่างรอ)\nเมื่อ EtherChannel ฟอร์มขึ้นได้ (Port State 0x3C = bit synchronizing ติด) และ "เพื่อนบ้านเป็น passive" → ฝั่ง SW1 (local) จึง "ต้องเป็น active" เพราะ passive+passive จะไม่เกิดเลย\n\n✅ ทำไม D ถูก: เพื่อนบ้าน passive + channel ฟอร์มได้ → local SW1 ต้องเป็น active\n\n❌ ทำไมข้ออื่นผิด:\nA. ถ้า SW1 เป็น passive ด้วย → passive+passive จะไม่เกิด channel (ขัดกับที่ port ทำงานอยู่)\nB. "mode on" เป็น static ไม่ใช้ LACP — แต่ exhibit เห็น LACPDU/flags ชัดว่าใช้ LACP\nC. "auto" เป็นโหมดของ PAgP ไม่ใช่ LACP\n\n📗 จำไว้สอบ: LACP flags → A=Active, P=Passive • เพื่อนเป็น passive แล้วยัง form ได้ = ฝั่งเราต้อง active',
  },
  {
    id: 369,
    kind: 'drag',
    image: q369,
    prompt:
      'Refer to the exhibit (Linux "ip route" and "ip addr show eth1": default via 192.168.1.193; 192.168.1.0/26 src 192.168.1.200; link/ether 00:0C:22:83:79:A3). Drag the networking parameters from the left onto the correct values on the right.',
    categories: [
      { name: '192.168.1.193', items: ['default gateway'] },
      { name: '192.168.1.200', items: ['host IP address'] },
      { name: '00:0C:22:83:79:A3', items: ['NIC MAC address'] },
      { name: '00:0C:22', items: ['NIC vendor OUI'] },
      { name: '255.255.255.192', items: ['subnet mask'] },
    ],
    explanation:
      '🔍 อ่านจากคำสั่ง Linux:\n• "ip route": default via 192.168.1.193 → default gateway = 192.168.1.193\n• "192.168.1.0/26 ... src 192.168.1.200" → host IP = 192.168.1.200, prefix /26\n• "ip addr show eth1": link/ether 00:0C:22:83:79:A3 → MAC address ของการ์ด\n\n📘 แนวคิด:\n• NIC MAC address = 00:0C:22:83:79:A3 (48 บิตเต็ม)\n• NIC vendor OUI = 3 ไบต์แรกของ MAC = 00:0C:22 (ระบุผู้ผลิต — Organizationally Unique Identifier)\n• subnet mask จาก /26 = 255.255.255.192 (26 บิตแรกเป็น 1: 11111111.11111111.11111111.11000000)\n• default gateway = 192.168.1.193\n• host IP = 192.168.1.200\n\n📗 จำไว้สอบ: OUI = 3 ไบต์แรกของ MAC (ผู้ผลิต) • /26 = 255.255.255.192 • "default via" = gateway',
  },
  {
    id: 370,
    kind: 'single',
    prompt: 'Which result occurs when PortFast is enabled on an interface that is connected to another switch?',
    options: [
      { key: 'A', text: 'Spanning tree may fail to detect a switching loop in the network that causes broadcast storms.' },
      { key: 'B', text: 'VTP is allowed to propagate VLAN configuration information from switch to switch automatically.' },
      { key: 'C', text: 'Root port choice and spanning tree recalculation are accelerated when a switch link goes down.' },
      { key: 'D', text: 'After spanning tree converges, PortFast shuts down any port that receives BPDUs.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — PortFast ทำให้พอร์ตข้าม listening/learning เข้า forwarding ทันที (ออกแบบมาสำหรับพอร์ตที่ต่อ "end device" เท่านั้น). ถ้าเผลอเปิดบนพอร์ตที่ต่อ "สวิตช์ตัวอื่น" → พอร์ตจะ forward ทันทีโดยไม่รอ STP ตรวจสอบ → อาจเกิด "loop" และ broadcast storm ก่อนที่ STP จะรู้ตัว\n\n✅ ทำไม A ถูก: เปิด PortFast บนลิงก์ระหว่างสวิตช์ = เสี่ยงให้ STP ตรวจไม่ทัน เกิด loop/broadcast storm\n\n❌ ทำไมข้ออื่นผิด:\nB. การกระจาย VLAN คือ VTP ไม่เกี่ยวกับ PortFast\nC. PortFast ไม่ได้เร่ง root port/STP recalculation (นั่นคือ RSTP/UplinkFast/BackboneFast)\nD. การ shut พอร์ตที่รับ BPDU คือหน้าที่ของ "BPDU Guard" ไม่ใช่ PortFast โดยตัวมันเอง\n\n📗 จำไว้สอบ: PortFast ใช้กับพอร์ต end-device เท่านั้น • ต่อสวิตช์ = เสี่ยง loop → ควรคู่กับ BPDU Guard',
  },
  {
    id: 371,
    kind: 'single',
    prompt: 'What is the primary difference between AAA authentication and authorization?',
    options: [
      { key: 'A', text: 'Authentication verifies a username and password, and authorization handles the communication between the authentication agent and the user database.' },
      { key: 'B', text: 'Authentication identifies a user who is attempting to access a system, and authorization validates the user’s password.' },
      { key: 'C', text: 'Authentication identifies and verifies a user who is attempting to access a system, and authorization controls the tasks the user can perform.' },
      { key: 'D', text: 'Authentication controls the system processes a user can access, and authorization logs the activities the user initiates.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — AAA:\n• Authentication (ยืนยันตัวตน) → "คุณเป็นใคร" (username/password, cert, token)\n• Authorization (ให้สิทธิ์) → "คุณทำอะไรได้บ้าง / เข้าถึงทรัพยากรใดได้"\n• Accounting (บันทึก) → "คุณทำอะไรไปบ้าง / นานแค่ไหน" (สำหรับ audit/billing)\n\n✅ ทำไม C ถูก: อธิบายถูกต้อง — authentication = ระบุ+ยืนยันตัวผู้ใช้, authorization = ควบคุมงาน/คำสั่งที่ผู้ใช้ทำได้\n\n❌ ทำไมข้ออื่นผิด:\nA. authorization ไม่ใช่การจัดการการสื่อสารระหว่าง agent กับ database\nB. authorization ไม่ใช่การ "ตรวจรหัสผ่าน" (นั่นคือ authentication)\nD. สลับนิยาม — และการ "log กิจกรรม" คือ accounting ไม่ใช่ authorization\n\n📗 จำไว้สอบ: Authentication=คุณเป็นใคร | Authorization=ทำอะไรได้ | Accounting=ทำอะไรไปแล้ว',
  },
  {
    id: 372,
    kind: 'single',
    image: q372,
    prompt:
      'Refer to the exhibit. A network administrator must configure SSH for remote access to router R1. The requirement is to use a public and private key pair to encrypt management traffic. Which configuration, when applied, meets the requirements?',
    options: [
      { key: 'A', text: 'ip domain-name cisco.com / crypto key generate ec keysize 2048' },
      { key: 'B', text: 'ip domain-name cisco.com / crypto key generate rsa modulus 1024' },
      { key: 'C', text: 'ip domain-name cisco.com / crypto key generate ec keysize 1024' },
      { key: 'D', text: 'ip domain-name cisco.com / crypto key encrypt rsa name myKey' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C (ec keysize 1024) แต่ผิด — EC (elliptic curve) บน Cisco IOS รองรับ keysize เพียง 256/384/521 เท่านั้น "1024 และ 2048 เป็นค่าที่ไม่ถูกต้องสำหรับ EC" คำสั่งจะถูกปฏิเสธ คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — SSH ต้องใช้คู่กุญแจ public/private เพื่อเข้ารหัส. คำสั่งสร้างคู่กุญแจที่ใช้ได้จริงบน IOS:\n• crypto key generate rsa modulus <360–4096> → สร้างคู่กุญแจ RSA (ขั้นต่ำที่แนะนำสำหรับ SSHv2 = 1024) ✔\n• crypto key generate ec keysize <256|384|521> → EC ต้องเป็น 3 ค่านี้เท่านั้น\n\n✅ ทำไม B ถูก: "crypto key generate rsa modulus 1024" สร้างคู่กุญแจ RSA public/private ที่ใช้กับ SSH ได้จริง (ต้องมี ip domain-name ก่อน — ในตัวเลือกมีให้แล้ว)\n\n❌ ทำไมข้ออื่นผิด:\nA. ec keysize 2048 → ค่าไม่ถูกต้องสำหรับ EC (ต้อง 256/384/521)\nC. ec keysize 1024 → ค่าไม่ถูกต้องสำหรับ EC เช่นกัน\nD. "crypto key encrypt rsa" → ใช้เข้ารหัสคีย์ที่มีอยู่ ไม่ใช่ "generate" คู่กุญแจใหม่\n\n📗 จำไว้สอบ: RSA modulus = 360–4096 (ใช้ 1024/2048) | EC keysize = 256/384/521 เท่านั้น',
  },
  {
    id: 373,
    kind: 'single',
    prompt:
      'A network engineer must compress the IPv6 address 2001:0db8:0000:0000:0500:000a:400F:583B before applying it on the interface. Which command must be issued on the interface?',
    options: [
      { key: 'A', text: 'ipv6 address 2001:0db8::5:a:4F:583B' },
      { key: 'B', text: 'ipv6 address 2001:db8::500:a:400F:583B' },
      { key: 'C', text: 'ipv6 address 2001:db8:0::500:a:4F:583B' },
      { key: 'D', text: 'ipv6 address 2001::db8:0000::500:a:400F:583B' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กฎย่อ IPv6: (1) ตัด 0 นำหน้าในแต่ละกลุ่มได้ (2) ใช้ "::" แทนกลุ่มที่เป็น 0 ทั้งหมด "ได้เพียงครั้งเดียว" (3) ห้ามตัด 0 ที่อยู่ "ตรงกลาง/ท้าย" ของกลุ่มที่มีเลขอื่น\n\n🧮 ย่อ 2001:0db8:0000:0000:0500:000a:400F:583B ทีละกลุ่ม:\n• 0db8 → db8 (ตัด 0 นำหน้า)\n• 0000:0000 → :: (แทนสองกลุ่มศูนย์ครั้งเดียว)\n• 0500 → 500 (ตัด 0 นำหน้า) ⚠️ ห้ามเป็น "5" เพราะ 0 อยู่ท้าย ไม่ใช่หน้า\n• 000a → a\n• 400F → 400F (ตัดไม่ได้ ไม่มี 0 นำหน้า) ⚠️ ห้ามเป็น "4F"\n• 583B → 583B\n→ ผลลัพธ์: 2001:db8::500:a:400F:583B ✔\n\n✅ ทำไม B ถูก: ย่อครบถูกทุกกฎ (500 ไม่ใช่ 5, 400F ไม่ใช่ 4F, :: ใช้ครั้งเดียว)\n\n❌ ทำไมข้ออื่นผิด:\nA. เขียน "5" (ผิด ต้อง 500) และ "4F" (ผิด ต้อง 400F)\nC. เขียน "4F" ผิด และ "db8:0::" ใส่ 0 เกินโดยไม่จำเป็น\nD. ใช้ "::" ถึงสองครั้ง (ผิดกฎ) และมีจุดผิดหลายที่\n\n📗 จำไว้สอบ: :: ใช้ได้ครั้งเดียว • ตัดได้เฉพาะ 0 "นำหน้า" กลุ่ม (0500→500 ไม่ใช่ 5)',
  },
  {
    id: 374,
    kind: 'single',
    image: q374,
    prompt:
      'Refer to the exhibit. PC A (192.168.0.10/23) connects to Switch A on VLAN 13; the File Server (192.168.1.20/23) connects to Switch B on VLAN 13. The Switch A–Switch B trunk allows only VLANs 10-12. What is the next step in the configuration to complete connectivity between PC A and the File Server?',
    options: [
      { key: 'A', text: 'Add PC A to VLAN 10 and the File Server to VLAN 11 for VLAN segmentation.' },
      { key: 'B', text: 'Add VLAN 13 to the trunk links on Switch A and Switch B for VLAN propagation.' },
      { key: 'C', text: 'Add a router on a stick between Switch A and Switch B allowing for inter-VLAN routing.' },
      { key: 'D', text: 'Add PC A to the same subnet as the File Server allowing for intra-VLAN communication.' },
    ],
    correct: ['B'],
    explanation:
      '🔍 อ่าน exhibit: PC A = 192.168.0.10/23, File Server = 192.168.1.20/23 → mask /23 = 255.255.254.0 ครอบ 192.168.0.0–192.168.1.255 → "ทั้งคู่อยู่ subnet เดียวกัน" และอยู่ VLAN 13 เหมือนกัน (ไม่ต้อง routing!). แต่ trunk อนุญาตแค่ VLAN 10-12 → VLAN 13 ข้าม trunk ไม่ได้\n\n📘 แนวคิด — เมื่อสองโฮสต์อยู่ VLAN/subnet เดียวกันแต่คนละสวิตช์ trunk ที่เชื่อมต้อง "อนุญาต VLAN นั้น" ให้วิ่งผ่านด้วย\n\n✅ ทำไม B ถูก: เพิ่ม VLAN 13 เข้า allowed list ของ trunk ทั้งสองสวิตช์ → เฟรม VLAN 13 ข้ามไปมาได้ PC A คุย File Server ได้ (L2 เดียวกัน ไม่ต้อง router)\n\n❌ ทำไมข้ออื่นผิด:\nA. ย้ายไป VLAN 10/11 คนละ VLAN กัน → ต้องมี routing เพิ่ม ยุ่งกว่าเดิม\nC. ไม่ต้อง router-on-a-stick เพราะอยู่ subnet/VLAN เดียวกันอยู่แล้ว\nD. ทั้งคู่อยู่ subnet เดียวกันอยู่แล้ว (/23) — ไม่ต้องแก้ IP\n\n📗 จำไว้สอบ: /23 รวม .0 กับ .1 เป็น subnet เดียว • VLAN ต้องอยู่ใน "allowed vlan" ของ trunk จึงจะข้ามได้',
  },
  {
    id: 375,
    kind: 'single',
    prompt: 'Which goal is achieved by the implementation of private IPv4 addressing on a network?',
    options: [
      { key: 'A', text: 'provides an added level of protection against Internet exposure' },
      { key: 'B', text: 'provides a reduction in size of the forwarding table on network routers' },
      { key: 'C', text: 'allows communication across the Internet to other private networks' },
      { key: 'D', text: 'allows servers and workstations to communicate across public network boundaries' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Private IPv4 (RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) "ไม่ถูก route บนอินเทอร์เน็ต" → อุปกรณ์ภายในไม่สามารถถูกเข้าถึงตรง ๆ จากภายนอก (ต้องผ่าน NAT) → เป็นการเพิ่มชั้นป้องกันจากการถูก expose สู่อินเทอร์เน็ต\n\n✅ ทำไม A ถูก: private IP ซ่อนโฮสต์ภายในจากอินเทอร์เน็ต (ต้องผ่าน NAT ก่อน) = ป้องกันการเปิดเผยเพิ่มขึ้น\n\n❌ ทำไมข้ออื่นผิด:\nB. private IP ไม่ได้ลดขนาดตาราง forwarding ของเราเตอร์ (จุดประสงค์หลักคือประหยัด public IP + ความเป็นส่วนตัว)\nC. private IP "route ข้ามอินเทอร์เน็ตไม่ได้" (ตรงข้ามกับข้อนี้)\nD. ต้องมี NAT ก่อนถึงจะออก public ได้ — private เองข้าม public boundary ไม่ได้\n\n📗 จำไว้สอบ: private IP = ประหยัด public IP + ซ่อน/ป้องกันโฮสต์ภายใน (ต้อง NAT ออกเน็ต)',
  },
  {
    id: 376,
    kind: 'single',
    prompt: 'What is a characteristic of spine-and-leaf architecture?',
    options: [
      { key: 'A', text: 'Each device is separated by the same number of hops.' },
      { key: 'B', text: 'It provides variable latency.' },
      { key: 'C', text: 'It provides greater predictability on STP blocked ports.' },
      { key: 'D', text: 'Each link between leaf switches allows for higher bandwidth.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Spine-and-leaf (ใช้ใน data center): ทุก leaf เชื่อมกับทุก spine (full mesh 2 ชั้น) และ "leaf ไม่ต่อกันเอง, spine ไม่ต่อกันเอง". ผลคือทราฟฟิกจาก leaf ใด ๆ ไป leaf อื่นผ่าน spine เพียง 1 ตัวเสมอ → จำนวน hop เท่ากันทุกเส้นทาง → latency คงที่ (predictable)\n\n✅ ทำไม A ถูก: ทุกอุปกรณ์ห่างกัน "จำนวน hop เท่ากัน" (leaf→spine→leaf) → east-west traffic สม่ำเสมอ\n\n❌ ทำไมข้ออื่นผิด:\nB. ให้ latency "คงที่" ไม่ใช่ผันแปร\nC. spine-leaf ใช้ ECMP routing (L3) แทน STP → ไม่มี STP blocked ports ให้พูดถึง\nD. spine-leaf ไม่มีลิงก์ระหว่าง leaf กับ leaf โดยตรง\n\n📗 จำไว้สอบ: spine-leaf = hop เท่ากันทุกเส้น, latency คงที่, ใช้ L3/ECMP แทน STP',
  },
  {
    id: 377,
    kind: 'single',
    prompt:
      'A router running EIGRP has learned the same route from two different paths. Which parameter does the router use to select the best path?',
    options: [
      { key: 'A', text: 'cost' },
      { key: 'B', text: 'administrative distance' },
      { key: 'C', text: 'metric' },
      { key: 'D', text: 'as-path' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เมื่อเรียนรู้เส้นทางเดียวกันจาก "โปรโตคอลเดียวกัน" (ในที่นี้ EIGRP ทั้งคู่) เราเตอร์จะเลือกด้วย "metric" (ค่าต่ำกว่าดีกว่า). AD ใช้เปรียบเทียบ "ข้ามโปรโตคอล" เท่านั้น (ที่นี่เป็น EIGRP เหมือนกัน AD จึงเท่ากัน ไม่ช่วยตัดสิน)\n\n✅ ทำไม C ถูก: EIGRP ใช้ metric (คำนวณจาก bandwidth + delay) ตัดสินเส้นทางที่ดีที่สุดในโปรโตคอลเดียวกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. "cost" เป็น metric ของ OSPF ไม่ใช่ EIGRP\nB. AD ใช้เลือก "ระหว่างต่างโปรโตคอล" — ที่นี่ EIGRP เหมือนกันหมด ใช้ไม่ได้\nD. as-path เป็นแอตทริบิวต์ของ BGP ไม่ใช่ EIGRP\n\n📗 จำไว้สอบ: โปรโตคอลเดียวกัน → เลือกด้วย metric | ต่างโปรโตคอล → เลือกด้วย AD',
  },
  {
    id: 378,
    kind: 'single',
    image: q378,
    prompt:
      'Refer to the exhibit. An engineer must configure GigabitEthernet1/1 to accommodate voice and data traffic (VLAN 300 = Data, VLAN 400 = Voice). Which configuration accomplishes this task?',
    options: [
      { key: 'A', text: 'switchport mode access / switchport access vlan 300 / switchport voice vlan 400' },
      { key: 'B', text: 'switchport mode trunk / switchport trunk vlan 300 / switchport voice vlan 400' },
      { key: 'C', text: 'switchport mode trunk / switchport trunk vlan 300 / switchport trunk vlan 400' },
      { key: 'D', text: 'switchport mode access / switchport voice vlan 300 / switchport access vlan 400' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — พอร์ตที่ต่อ IP phone (มี PC เสียบด้านหลัง) ตั้งเป็น "access port" ที่มีทั้ง data VLAN และ voice VLAN:\n• switchport access vlan <data> → ทราฟฟิก PC (untagged) อยู่ VLAN data\n• switchport voice vlan <voice> → ทราฟฟิกเสียง (tagged) อยู่ VLAN voice\n\n✅ ทำไม A ถูก: mode access + access vlan 300 (data) + voice vlan 400 (voice) → ตรงตามโจทย์ (data=300, voice=400)\n\n❌ ทำไมข้ออื่นผิด:\nB/C. ใช้ "mode trunk" และคำสั่ง "switchport trunk vlan" ที่ไม่มีจริง — voice VLAN ใช้กับ access port ไม่ใช่ trunk แบบนี้\nD. สลับ VLAN ผิด: voice vlan 300 / access vlan 400 → data ไปอยู่ 400, เสียงไปอยู่ 300 (ตรงข้ามโจทย์)\n\n📗 จำไว้สอบ: voice+data = access port • access vlan = data • voice vlan = เสียง',
  },
  {
    id: 379,
    kind: 'single',
    image: q379,
    prompt:
      'Refer to the exhibit. The "show ip ospf interface" command has been executed on R1 (Timer intervals: Hello 10, Dead 40, Wait 40, Retransmit 5; Neighbor Count 3). How is OSPF configured?',
    options: [
      { key: 'A', text: 'The interface is not participating in OSPF.' },
      { key: 'B', text: 'A point-to-point network type is configured.' },
      { key: 'C', text: 'The default Hello and Dead timers are in use.' },
      { key: 'D', text: 'There are six OSPF neighbors on this interface.' },
    ],
    correct: ['C'],
    explanation:
      '🔍 อ่าน exhibit: "Timer intervals configured, Hello 10, Dead 40" และมี DR/BDR + Neighbor Count 3\n\n📘 แนวคิด — ค่า default ของ OSPF บนเครือข่าย broadcast (Ethernet): Hello = 10 วินาที, Dead = 40 วินาที (Dead = 4 × Hello). ในผลลัพธ์เป็น 10/40 พอดี → ใช้ค่า default\n\n✅ ทำไม C ถูก: Hello 10 / Dead 40 = ค่าเริ่มต้นมาตรฐาน → ยืนยันว่าใช้ default timers\n\n❌ ทำไมข้ออื่นผิด:\nA. อินเทอร์เฟซนี้ "มีส่วนร่วม" OSPF อยู่ (มี DR/BDR, neighbor, timers) → ไม่ใช่ไม่ร่วม\nB. มีการเลือก DR/BDR → เป็น network type "broadcast" ไม่ใช่ point-to-point (P2P จะไม่มี DR/BDR)\nD. Neighbor Count = 3 ไม่ใช่ 6\n\n📗 จำไว้สอบ: OSPF broadcast default = Hello 10 / Dead 40 • มี DR/BDR = broadcast (ไม่ใช่ P2P)',
  },
  {
    id: 380,
    kind: 'single',
    image: q380,
    prompt:
      'Refer to the exhibit. An engineer is bringing up a new circuit to the MPLS provider on the Gi0 interface of Router1. The new circuit uses eBGP and learns the route to VLAN25 (10.10.13.0) from the BGP path. Currently 10.10.13.0/25 is learned via OSPF. What is the expected behavior for the traffic flow to route 10.10.13.0?',
    options: [
      { key: 'A', text: 'Traffic to 10.10.13.0/25 is load balanced out of multiple interfaces.' },
      { key: 'B', text: 'Route 10.10.13.0 is updated in the routing table as being learned from interface Gi0.' },
      { key: 'C', text: 'Traffic to 10.10.13.0 is asymmetrical.' },
      { key: 'D', text: 'Route 10.10.13.0 learned via the Gi0/0 interface remains in the routing table.' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D แต่ผิด — eBGP มี AD ต่ำกว่า OSPF จึง "แทนที่" เส้นเดิม คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — เมื่อได้เส้นทางเดียวกัน (prefix เดียวกัน) จากต่างโปรโตคอล เราเตอร์เลือกตัว AD ต่ำกว่าลงตาราง:\n• eBGP AD = 20\n• OSPF AD = 110\n→ 20 < 110 → eBGP ชนะ\n\n✅ ทำไม B ถูก: พอ circuit eBGP ใหม่บน Gi0 เรียนรู้ 10.10.13.0 ด้วย AD 20 → route จะถูก "อัปเดตในตาราง เป็นเรียนรู้ผ่าน Gi0 (BGP)" แทนเส้น OSPF เดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. AD ต่างกัน (20 vs 110) → ไม่ load balance (ต้อง AD และ metric เท่ากันจึงจะแบ่งโหลด)\nC. ไม่มีข้อบ่งชี้ทราฟฟิก asymmetrical จาก exhibit\nD. เส้น OSPF เดิมจะ "หลุด" ออกจากตาราง เพราะ eBGP AD ต่ำกว่า → ไม่ได้อยู่ต่อ\n\n📗 จำไว้สอบ: AD — eBGP 20, EIGRP 90, OSPF 110, RIP 120 • prefix เดียวกันต่างโปรโตคอล → AD ต่ำสุดชนะ',
  },
  {
    id: 381,
    kind: 'single',
    image: q381,
    prompt:
      'Refer to the exhibit. With which metric was the route to host 172.16.0.202 learned? (Table: S 172.16.0.0/24 [1/0]; O 172.16.0.128/25 [110/38443]; D 172.16.0.192/29 [90/3184439])',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '110' },
      { key: 'C', text: '38443' },
      { key: 'D', text: '3184439' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เลือกเส้นทางด้วย Longest Prefix Match ก่อน แล้วจึงอ่าน "metric" (ตัวเลขหลังใน [AD/metric])\n\n🧮 ไล่ตรวจปลายทาง 172.16.0.202:\n• S 172.16.0.0/24 → .0–.255 → ครอบ ✔ (แต่ prefix สั้น /24)\n• O 172.16.0.128/25 → .128–.255 → ครอบ ✔ (prefix /25 ยาวกว่า)\n• D 172.16.0.192/29 → .192–.199 → ❌ (.202 เกิน .199)\n→ ยาวสุดที่ครอบคือ /25 (O 172.16.0.128) → [110/38443]\n\n✅ ทำไม C ถูก: เส้นที่ถูกเลือกคือ O 172.16.0.128/25 ซึ่งมี metric = 38443 (ส่วน 110 คือ AD ไม่ใช่ metric)\n\n❌ ทำไมข้ออื่นผิด:\nA. 0 = metric ของ static (/24) แต่ static ไม่ถูกเลือกเพราะ prefix สั้นกว่า\nB. 110 = AD ของ OSPF (ไม่ใช่ metric)\nD. 3184439 = metric ของ D /29 แต่ /29 ไม่ครอบ .202\n\n📗 จำไว้สอบ: [AD/metric] — ตัวหลังคือ metric • longest prefix match มาก่อน AD/metric',
  },
  {
    id: 382,
    kind: 'single',
    image: q382,
    prompt:
      'Refer to the exhibit. Router R1 is running three routing protocols. Which route characteristic is used by the router to forward the packet it receives for destination IP 172.16.32.1? (Table: D 172.16.32.0/27; O 172.16.32.0/19; R 172.16.32.0/24)',
    options: [
      { key: 'A', text: 'longest prefix' },
      { key: 'B', text: 'metric' },
      { key: 'C', text: 'cost' },
      { key: 'D', text: 'administrative distance' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือกเส้นทาง: (1) Longest Prefix Match มาก่อนเสมอ → (2) ถ้า prefix เท่ากันค่อยดู AD → (3) ถ้า AD เท่ากันค่อยดู metric\n\n🧮 ปลายทาง 172.16.32.1 ตรงกับทั้งสามเส้น (/27, /24, /19) แต่ /27 (D, EIGRP) มี prefix ยาวที่สุด:\n• /27 = 172.16.32.0/27 = .0–.31 → ครอบ .1 ✔ (ยาวสุด)\n• /24, /19 = ครอบเช่นกันแต่ prefix สั้นกว่า\n→ เลือก /27\n\n✅ ทำไม A ถูก: เราเตอร์ใช้ "longest prefix" ตัดสินก่อน (ไม่สนว่า AD ของ EIGRP/OSPF/RIP จะต่างกัน)\n\n❌ ทำไมข้ออื่นผิด:\nB/C. metric/cost ใช้เปรียบเทียบภายในโปรโตคอลเดียวกัน หลังจาก prefix เท่ากันแล้ว\nD. AD ใช้ตัดสินเมื่อ prefix "เท่ากัน" — แต่ที่นี่ prefix ต่างกัน longest prefix จึงชนะก่อน\n\n📗 จำไว้สอบ: Longest Prefix Match > AD > metric (ตามลำดับ)',
  },
  {
    id: 383,
    kind: 'multi',
    prompt: 'What are two benefits of network automation? (Choose two.)',
    options: [
      { key: 'A', text: 'reduced operational costs' },
      { key: 'B', text: 'reduced hardware footprint' },
      { key: 'C', text: 'faster changes with more reliable results' },
      { key: 'D', text: 'fewer network failures' },
      { key: 'E', text: 'increased network security' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — Network automation ใช้สคริปต์/เทมเพลต/controller ทำงานซ้ำ ๆ แทนมือ → ผลลัพธ์: ทำงานเร็วขึ้น สม่ำเสมอ ลด human error และลดต้นทุนดำเนินงาน (OPEX)\n\n✅ ทำไม A, C ถูก:\nA. reduced operational costs → ลดแรงงาน/เวลาในการคอนฟิกซ้ำ ๆ\nC. faster changes with more reliable results → ปรับใช้เร็วและสม่ำเสมอ (ลด error จากคนพิมพ์ผิด)\n\n❌ ทำไมข้ออื่นผิด:\nB. ลด hardware footprint = virtualization/consolidation ไม่ใช่ผลของ automation โดยตรง\nD. "fewer network failures" เป็นผลพลอยได้อ้อม ๆ ไม่ใช่ประโยชน์หลักที่ระบุชัด (automation ที่ผิดพลาดก็ทำพังเป็นวงกว้างได้)\nE. automation ไม่ได้เพิ่มความปลอดภัยโดยตรง (เป็นคนละมิติ)\n\n📗 จำไว้สอบ: ประโยชน์ automation = เร็ว + สม่ำเสมอ/เชื่อถือได้ + ลดต้นทุน/ลด error',
  },
  {
    id: 384,
    kind: 'single',
    prompt:
      'An administrator must secure the WLC from receiving spoofed association requests. Which steps must be taken to configure the WLC to restrict the requests and force the user to wait 10 ms to retry an association request?',
    options: [
      { key: 'A', text: 'Enable Security Association Teardown Protection and set the SA Query timeout to 10.' },
      { key: 'B', text: 'Enable MAC filtering and set the SA Query timeout to 10.' },
      { key: 'C', text: 'Enable 802.1x Layer 2 security and set the Comeback timer to 10.' },
      { key: 'D', text: 'Enable the Protected Management Frame service and set the Comeback timer to 10.' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C แต่ผิด — 802.1x ไม่เกี่ยวกับการกัน spoofed association/Comeback timer คำตอบที่ถูกต้องคือ D\n\n📘 แนวคิด — การป้องกัน spoofed association/deauth เป็นหน้าที่ของ 802.11w = "Protected Management Frame (PMF)" ซึ่งมีพารามิเตอร์:\n• Comeback timer (Association Comeback Time) → บังคับ client "รอ" ก่อนลองส่ง association request ใหม่\n• SA Query timeout → เวลารอผลตอบ SA query\nโจทย์ระบุ "force user to wait 10ms to retry an association request" = Comeback timer\n\n✅ ทำไม D ถูก: เปิด Protected Management Frame (PMF/802.11w) แล้วตั้ง Comeback timer = 10 → บังคับหน่วงเวลาก่อน associate ใหม่ กัน spoofing\n\n❌ ทำไมข้ออื่นผิด:\nA. SA Teardown Protection + SA Query timeout เกี่ยวข้อง แต่พารามิเตอร์ที่ "บังคับรอ retry association" คือ Comeback timer (ไม่ใช่ SA Query timeout)\nB. MAC filtering ไม่กัน spoofed association frame\nC. 802.1x เป็นการ authenticate ผู้ใช้ ไม่เกี่ยวกับ management frame protection\n\n📗 จำไว้สอบ: กัน spoofed management frame = PMF (802.11w) • "รอก่อน associate ใหม่" = Comeback timer',
  },
  {
    id: 385,
    kind: 'single',
    prompt: 'Which function does an SNMP agent perform?',
    options: [
      { key: 'A', text: 'It sends information about MIB variables in response to requests from the NMS.' },
      { key: 'B', text: 'It requests information from remote network nodes about catastrophic system events.' },
      { key: 'C', text: 'It manages routing between Layer 3 devices in a network.' },
      { key: 'D', text: 'It coordinates user authentication between a network device and a TACACS+ or RADIUS server.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — SNMP มี 2 บทบาท:\n• NMS (Manager) → เครื่องศูนย์กลาง ส่ง GET/SET ไปถาม/สั่งอุปกรณ์\n• Agent → รันบนอุปกรณ์ที่ถูกจัดการ เก็บค่าต่าง ๆ ไว้ใน MIB และ "ตอบกลับ" ค่าตัวแปร MIB เมื่อ NMS ร้องขอ (และส่ง trap เตือนเหตุการณ์)\n\n✅ ทำไม A ถูก: หน้าที่ของ agent คือส่งค่าตัวแปร MIB กลับไปตอบคำขอของ NMS\n\n❌ ทำไมข้ออื่นผิด:\nB. agent ไม่ได้ "ร้องขอข้อมูล" จาก node อื่น — มันเป็นฝ่ายตอบ (การถามเป็นงานของ NMS)\nC. การจัดการ routing เป็นงานของ routing protocol ไม่ใช่ SNMP agent\nD. การ authenticate ผู้ใช้กับ TACACS+/RADIUS เป็นงานของ AAA ไม่ใช่ SNMP agent\n\n📗 จำไว้สอบ: NMS ถาม (GET/SET) → Agent ตอบค่าจาก MIB (+ ส่ง trap เตือน)',
  },
  {
    id: 386,
    kind: 'single',
    prompt:
      'What is the effect when loopback interfaces and the configured router ID are absent during the OSPF process configuration?',
    options: [
      { key: 'A', text: 'No router ID is set, and the OSPF protocol does not run.' },
      { key: 'B', text: 'The highest up/up physical interface IP address is selected as the router ID.' },
      { key: 'C', text: 'The lowest IP address is incremented by 1 and selected as the router ID.' },
      { key: 'D', text: 'The router ID 0.0.0.0 is selected and placed in the OSPF process.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก OSPF Router-ID:\n1) router-id ที่ตั้งเอง → ถ้าไม่มี\n2) IP สูงสุดบน loopback ที่ up → ถ้าไม่มี loopback\n3) IP สูงสุดบน physical interface ที่ "up/up"\n\n✅ ทำไม B ถูก: เมื่อไม่มีทั้ง router-id และ loopback → OSPF เลือก IP ที่สูงที่สุดบน physical interface ที่สถานะ up/up เป็น Router-ID\n\n❌ ทำไมข้ออื่นผิด:\nA. OSPF ยังรันได้ ตราบใดที่มี interface ที่ up/up ให้เลือก IP มาเป็น RID\nC. ไม่มีกลไก "เอา IP ต่ำสุด +1"\nD. ไม่ได้เลือก 0.0.0.0 (ถ้าไม่มี IP ใด ๆ ให้เลือกเลย OSPF จะไม่ start ต่างหาก)\n\n📗 จำไว้สอบ: RID = router-id > loopback สูงสุด > physical up/up สูงสุด',
  },
  {
    id: 387,
    kind: 'single',
    image: q387,
    prompt:
      'Refer to the exhibit. The "default-information originate" command is configured under R1 OSPF. R1 has "Gateway of last resort is not set". After testing, workstations on VLAN 20 at Site B cannot reach a DNS server on the Internet. Which action corrects the configuration issue? (R1 connects to the Internet via 10.10.10.16/30, with 10.10.10.18 = Internet side.)',
    options: [
      { key: 'A', text: 'Add the default-information originate command on R2.' },
      { key: 'B', text: 'Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.18 command on R1.' },
      { key: 'C', text: 'Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.2 command on R2.' },
      { key: 'D', text: 'Add the always keyword to the default-information originate command on R1.' },
    ],
    correct: ['B'],
    explanation:
      '🔍 อ่าน exhibit: R1 มี "default-information originate" แต่ "Gateway of last resort is not set" → แปลว่า R1 "ไม่มี default route ของตัวเอง" อยู่เลย\n\n📘 แนวคิด — "default-information originate" (แบบไม่มี always) จะ inject default route เข้า OSPF "ก็ต่อเมื่อ R1 มี default route อยู่ในตารางของตัวเองแล้ว" เท่านั้น. ตอนนี้ R1 ไม่มี → ไม่มีอะไรถูก inject → Site B ไม่ได้ default route → ออกเน็ตไม่ได้\n\n✅ ทำไม B ถูก: สร้าง default route บน R1 ชี้ไปทางอินเทอร์เน็ต (ip route 0.0.0.0 0.0.0.0 10.10.10.18) → R1 มี default แล้ว, default-information originate จึงกระจายให้ R2/Site B ได้ และ R1 เองก็ออกเน็ตได้จริง\n\n❌ ทำไมข้ออื่นผิด:\nA. R2 ไม่ใช่ตัวที่ต่ออินเทอร์เน็ต — เพิ่มคำสั่งบน R2 ไม่ช่วย\nC. ip route บน R2 ชี้ 10.10.10.2 ผิดทิศ (และควรได้ default ผ่าน OSPF จาก R1 อยู่แล้ว)\nD. ใส่ "always" จะ inject default แม้ R1 ไม่มี default จริง → Site B ได้ default แต่ "R1 เองยังไม่มีทางออกเน็ต" → ทราฟฟิกไปตาย ที่ R1 อยู่ดี\n\n📗 จำไว้สอบ: default-information originate ต้องมี default route จริงบนตัว ASBR ก่อน (ยกเว้นใส่ always) — แต่ always อาจสร้าง blackhole ถ้าตัวเองไปไม่ถึงเน็ต',
  },
  {
    id: 388,
    kind: 'single',
    image: q388,
    prompt:
      'Refer to the exhibit (SW2: vtp domain cisco / vtp mode transparent / vtp password ciscotest; fa0/1 trunk to sw1). How does SW2 interact with other switches in this VTP domain?',
    options: [
      { key: 'A', text: 'It processes VTP updates from any VTP clients on the network on its access ports.' },
      { key: 'B', text: 'It receives updates from all VTP servers and forwards all locally configured VLANs out all trunk ports.' },
      { key: 'C', text: 'It forwards only the VTP advertisements that it receives on its trunk ports.' },
      { key: 'D', text: 'It transmits and processes VTP updates from any VTP clients on the network on its trunk ports.' },
    ],
    correct: ['C'],
    explanation:
      '🔍 อ่าน config: "vtp mode transparent"\n\n📘 แนวคิด — VTP transparent mode:\n• "ไม่" ประมวลผล/ซิงก์ VLAN database ตาม VTP (จัดการ VLAN ของตัวเองแยกอิสระ)\n• แต่ยัง "ส่งต่อ (forward)" VTP advertisement ที่รับมาผ่าน trunk ให้สวิตช์อื่น (relay) — เฉพาะเมื่อ version ตรงกัน\n\n✅ ทำไม C ถูก: transparent จะ forward เฉพาะ VTP advertisement ที่มันรับมาบน trunk port (ผ่านต่อ) โดยไม่นำมาประมวลผลกับตัวเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. transparent ไม่ "ประมวลผล" VTP updates (และ VTP วิ่งบน trunk ไม่ใช่ access)\nB. ไม่ได้รับ/ซิงก์จาก server — transparent เป็นอิสระ\nD. transparent ไม่ประมวลผล updates ของ client — แค่ relay ผ่าน trunk\n\n📗 จำไว้สอบ: VTP transparent = จัดการ VLAN เอง + relay VTP ผ่าน trunk (ไม่ประมวลผล/ไม่ซิงก์)',
  },
  {
    id: 389,
    kind: 'single',
    prompt: 'Which condition must be met before an NMS handles an SNMP trap from an agent?',
    options: [
      { key: 'A', text: 'The NMS software must be loaded with the MIB associated with the trap.' },
      { key: 'B', text: 'The NMS must be configured on the same router as the SNMP agent.' },
      { key: 'C', text: 'The NMS must receive a trap and an inform message from the SNMP agent within a configured interval.' },
      { key: 'D', text: 'The NMS must receive the same trap from two different SNMP agents to verify that it is reliable.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — trap คือข้อความแจ้งเตือนที่ agent ส่งมาแบบระบุด้วย OID (ตัวเลข). NMS จะ "แปลความหมาย" ของ OID นั้นได้ก็ต่อเมื่อมี MIB (พจนานุกรมที่แม็ป OID ↔ ความหมาย) ของ trap นั้นโหลดไว้ก่อน\n\n✅ ทำไม A ถูก: NMS ต้องมี MIB ที่เกี่ยวข้องกับ trap โหลดไว้ จึงจะเข้าใจและจัดการ trap ได้\n\n❌ ทำไมข้ออื่นผิด:\nB. NMS กับ agent อยู่คนละอุปกรณ์/คนละที่ได้ (คุยผ่าน IP UDP 162)\nC. trap เป็นการส่งทางเดียว ไม่ต้องได้ทั้ง trap และ inform ภายในช่วงเวลา\nD. ไม่ต้องได้ trap ซ้ำจากสอง agent เพื่อยืนยัน\n\n📗 จำไว้สอบ: NMS ต้องมี MIB ของ trap ก่อน จึงจะตีความ OID ได้',
  },
  {
    id: 390,
    kind: 'single',
    image: q390,
    prompt:
      'Refer to the exhibit. Router R1 (Fa0/0 10.10.10.1) cannot ping router R3 Fa0 (20.20.20.2). R1–R2 is 10.10.10.0/24, R2–R3 is 20.20.20.0/24. R1 has no route to 20.20.20.0. Which action must be taken on R1 to help resolve the configuration issue?',
    options: [
      { key: 'A', text: 'set the default network as 20.20.20.0' },
      { key: 'B', text: 'set the default gateway as 20.20.20.2' },
      { key: 'C', text: 'configure a static route with Fa0 as the egress interface to reach the 20.20.20.0 network' },
      { key: 'D', text: 'configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0 network' },
    ],
    correct: ['D'],
    explanation:
      '🔍 อ่าน exhibit: R1 รู้จักแค่ 10.10.10.0/24 (directly connected) แต่ "ไม่มี route ไป 20.20.20.0" (เครือข่ายของ R3) → ping ไม่ถึง\n\n📘 แนวคิด — R1 ต้องมีเส้นทางไป 20.20.20.0 โดยชี้ next-hop ไปยัง R2 (ตัวกลาง) ที่ IP 10.10.10.2 (ขา R2 ที่ต่อกับ R1)\n\n✅ ทำไม D ถูก: "ip route 20.20.20.0 255.255.255.0 10.10.10.2" → R1 ส่งทราฟฟิกไป R2 ซึ่งรู้จัก 20.20.20.0 (directly connected) → ถึง R3 ได้ (อย่าลืม R3 ต้องมีเส้นทางกลับด้วย)\n\n❌ ทำไมข้ออื่นผิด:\nA. "default network 20.20.20.0" ไม่ใช่วิธีที่เหมาะ (เป็นคำสั่งเก่า/ผิดบริบท)\nB. "default gateway" ใช้บนอุปกรณ์ที่ "ไม่ได้ทำ routing" (host/switch) — R1 เป็น router ที่เปิด ip routing อยู่แล้ว จึงใช้ static route\nC. static route แบบ egress interface (Fa0) บน "Ethernet" ไม่เหมาะ (ควรระบุ next-hop IP เพราะเป็น multi-access) และ Fa0 ต่อไป R2 อยู่แล้ว\n\n📗 จำไว้สอบ: router ที่ขาด route → ใส่ static route ชี้ next-hop เป็น IP ของ router ถัดไป (ไม่ใช่ default gateway)',
  },
  {
    id: 391,
    kind: 'single',
    prompt: 'How does a Cisco Unified Wireless network respond to Wi-Fi channel overlap?',
    options: [
      { key: 'A', text: 'It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points.' },
      { key: 'B', text: 'It allows the administrator to assign channels on a per-device or per-interface basis.' },
      { key: 'C', text: 'It segregates devices from different manufacturers onto different channels.' },
      { key: 'D', text: 'It analyzes client load and background noise and dynamically assigns a channel.' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A แต่ผิด — Cisco ใช้ RRM/DCA วิเคราะห์และเลือกช่องอัตโนมัติ คำตอบที่ถูกต้องคือ D\n\n📘 แนวคิด — Cisco Unified Wireless (WLC) มีระบบ RRM (Radio Resource Management) พร้อม DCA (Dynamic Channel Assignment): AP รายงานสัญญาณรบกวน/โหลด/noise floor ให้ WLC แล้ว WLC "เลือกช่องที่ทับซ้อน/รบกวนน้อยที่สุด" ให้แต่ละ AP โดยอัตโนมัติ\n\n✅ ทำไม D ถูก: ระบบวิเคราะห์ client load + background noise แล้ว "assign channel อัตโนมัติ" เพื่อลด overlap/interference\n\n❌ ทำไมข้ออื่นผิด:\nA. RRM ไม่ได้แค่ "สลับ 2.4/5 GHz" — มันเลือก channel ภายในย่านตามการรบกวน\nB. การตั้ง channel เองรายอุปกรณ์เป็นแบบ manual (autonomous) ไม่ใช่การ "respond" อัตโนมัติของ Unified Wireless\nC. ไม่ได้แยกช่องตามยี่ห้อผู้ผลิต\n\n📗 จำไว้สอบ: WLC จัดการ overlap อัตโนมัติด้วย RRM/DCA (วิเคราะห์ noise/interference แล้วเลือกช่อง)',
  },
  {
    id: 392,
    kind: 'single',
    prompt: 'When a site-to-site VPN is used, which protocol is responsible for the transport of user data?',
    options: [
      { key: 'A', text: 'IKEv2' },
      { key: 'B', text: 'IKEv1' },
      { key: 'C', text: 'IPsec' },
      { key: 'D', text: 'MD5' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ใน site-to-site VPN แบ่งหน้าที่:\n• IKE (IKEv1/IKEv2) → เจรจา/แลกเปลี่ยนกุญแจ และสร้าง SA (control channel) — ไม่ได้ขนข้อมูลผู้ใช้\n• IPsec (โดยเฉพาะ ESP) → "ห่อและขนส่งข้อมูลผู้ใช้จริง" แบบเข้ารหัสผ่าน tunnel\n• MD5 → อัลกอริทึม hashing สำหรับตรวจความถูกต้อง ไม่ใช่ตัวขนส่งข้อมูล\n\n✅ ทำไม C ถูก: IPsec (ESP) เป็นตัวรับผิดชอบขนส่งข้อมูลผู้ใช้ที่เข้ารหัสระหว่างสองไซต์\n\n❌ ทำไมข้ออื่นผิด:\nA/B. IKEv1/IKEv2 ทำหน้าที่เจรจากุญแจ/สร้าง tunnel ไม่ได้ขนข้อมูลผู้ใช้\nD. MD5 เป็น hash สำหรับ integrity ไม่ใช่ตัวขนส่ง\n\n📗 จำไว้สอบ: IKE = ตั้ง tunnel/แลกกุญแจ | IPsec (ESP) = ขน+เข้ารหัสข้อมูลผู้ใช้',
  },
  {
    id: 393,
    kind: 'single',
    image: q393,
    prompt:
      'Refer to the exhibit. An engineer is configuring NAT to translate the source subnet 10.10.0.0/24 to any of three addresses in the pool (192.168.3.1–192.168.3.3). Which configuration should be used?',
    options: [
      { key: 'A', text: 'ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30 / route-map permit 10.10.0.0 255.255.255.0 / ip nat outside destination list 1 pool mypool / g1/1 ip nat inside / g1/2 ip nat outside' },
      { key: 'B', text: 'ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30 / access-list 1 permit 10.10.0.0 0.0.0.255 / ip nat inside source list 1 pool mypool / g1/1 ip nat inside / g1/2 ip nat outside' },
      { key: 'C', text: 'ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30 / access-list 1 permit 10.10.0.0 0.0.0.255 / ip nat outside destination list 1 pool mypool / g1/1 ip nat inside / g1/2 ip nat outside' },
      { key: 'D', text: 'ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30 / access-list 1 permit 10.10.0.0 0.0.0.254 / ip nat inside source list 1 pool mypool / g1/1 ip nat inside / g1/2 ip nat outside' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C แต่ผิด — C ใช้ "ip nat outside destination" (แปลงปลายทาง) ไม่ใช่แปลง "source" ตามโจทย์ คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — แปลง "source subnet" = ใช้ "ip nat inside source list <acl> pool <pool>". ACL ต้อง match subnet ต้นทางด้วย wildcard ที่ถูก และต้องกำหนดขา inside/outside ให้ถูกทิศ\n\n🧮 ตรวจ:\n• 10.10.0.0/24 → wildcard = 0.0.0.255 ✔\n• inside source list → แปลง source ✔\n\n✅ ทำไม B ถูก: access-list 1 permit 10.10.0.0 0.0.0.255 + "ip nat inside source list 1 pool mypool" + inside ที่ g1/1, outside ที่ g1/2 → แปลง source ตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ route-map + "outside destination" ผิดวัตถุประสงค์ (ไม่ใช่แปลง source ด้วย pool แบบ dynamic)\nC. "ip nat outside destination list" = แปลง "ปลายทาง" ไม่ใช่ต้นทาง → ผิดโจทย์\nD. wildcard 0.0.0.254 ผิด (ไม่ครอบ /24 อย่างถูกต้อง — bit ไม่ต่อเนื่อง)\n\n📗 จำไว้สอบ: แปลง source = "ip nat inside source list ... pool ..." • /24 wildcard = 0.0.0.255',
  },
  {
    id: 394,
    kind: 'single',
    prompt: 'What is the primary function of a Layer 3 device?',
    options: [
      { key: 'A', text: 'to analyze traffic and drop unauthorized traffic from the Internet' },
      { key: 'B', text: 'to transmit wireless traffic between hosts' },
      { key: 'C', text: 'to pass traffic between different networks' },
      { key: 'D', text: 'to forward traffic within the same broadcast domain' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — อุปกรณ์ Layer 3 (router / L3 switch) ตัดสินใจส่งต่อแพ็กเก็ตด้วย "IP address" → หน้าที่หลักคือ routing = ส่งทราฟฟิก "ข้ามระหว่างเครือข่าย/subnet ที่ต่างกัน"\n\n✅ ทำไม C ถูก: L3 device เชื่อมและส่งทราฟฟิกระหว่างเครือข่ายที่ต่างกัน (inter-network routing)\n\n❌ ทำไมข้ออื่นผิด:\nA. วิเคราะห์และ drop ทราฟฟิกไม่ได้รับอนุญาต = หน้าที่ firewall (แม้ router ทำ ACL ได้ แต่ไม่ใช่ "primary function")\nB. ส่งทราฟฟิกไร้สาย = AP (Layer 1/2)\nD. ส่งต่อภายใน broadcast domain เดียวกัน = หน้าที่ของ Layer 2 switch\n\n📗 จำไว้สอบ: Layer 3 = routing ข้ามเครือข่าย (ใช้ IP) | Layer 2 = switching ภายใน broadcast domain (ใช้ MAC)',
  },
  {
    id: 395,
    kind: 'single',
    prompt:
      'Router A learns the same route from two different neighbors; one neighbor is an OSPF neighbor and the other is an EIGRP neighbor. What is the administrative distance of the route that will be installed in the routing table?',
    options: [
      { key: 'A', text: '20' },
      { key: 'B', text: '90' },
      { key: 'C', text: '110' },
      { key: 'D', text: '115' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เมื่อเรียนรู้เส้นทางเดียวกันจากต่างโปรโตคอล เราเตอร์เลือกตัวที่มี "AD ต่ำกว่า" ลงตาราง:\n• EIGRP (internal) = 90\n• OSPF = 110\n→ 90 < 110 → EIGRP ชนะ และ AD ที่แสดงในตารางคือ 90\n\n✅ ทำไม B ถูก: EIGRP AD 90 ต่ำกว่า OSPF 110 → เส้น EIGRP ถูกติดตั้ง ค่าที่ปรากฏคือ 90\n\n❌ ทำไมข้ออื่นผิด:\nA. 20 = eBGP (ไม่มีในโจทย์)\nC. 110 = OSPF (แพ้ EIGRP)\nD. 115 = IS-IS (ไม่มีในโจทย์)\n\n📗 จำไว้สอบ AD: Connected 0, Static 1, eBGP 20, EIGRP 90, OSPF 110, IS-IS 115, RIP 120, EIGRP external 170',
  },
  {
    id: 396,
    kind: 'single',
    prompt: 'When the active router in an HSRP group fails, which router assumes the role and forwards packets?',
    options: [
      { key: 'A', text: 'backup' },
      { key: 'B', text: 'standby' },
      { key: 'C', text: 'listening' },
      { key: 'D', text: 'forwarding' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — HSRP มี 2 บทบาทหลัก: "Active" (ส่งต่อทราฟฟิกจริงผ่าน virtual IP/MAC) และ "Standby" (สำรอง คอยเฝ้าดู Active ผ่าน hello). ถ้า Active ล่ม → Standby เลื่อนขึ้นเป็น Active แทนและเริ่ม forward ทราฟฟิก\n\n✅ ทำไม B ถูก: standby router คือตัวสำรองที่รับหน้าที่ต่อเมื่อ active ล่ม\n\n❌ ทำไมข้ออื่นผิด:\nA. "backup" ไม่ใช่ชื่อบทบาทใน HSRP (นั่นเป็นคำของ VRRP บางบริบท/ทั่วไป)\nC. "listening" เป็นสถานะของ router ที่ไม่ใช่ active/standby (เฝ้าฟังเฉย ๆ) ไม่ใช่ตัวที่ขึ้นมาแทน\nD. "forwarding" ไม่ใช่บทบาท HSRP\n\n📗 จำไว้สอบ: HSRP roles = Active (ทำงาน), Standby (สำรอง พร้อมขึ้นแทน), Listen (เฝ้าฟัง)',
  },
  {
    id: 397,
    kind: 'drag',
    image: q397,
    prompt:
      'Drag the descriptions of device management from the left onto the correct types of device management (Cisco DNA Center / Traditional) on the right.',
    categories: [
      {
        name: 'Cisco DNA Center Device Management',
        items: [
          'monitors the cloud for software updates',
          'uses CLI templates to apply a consistent configuration to multiple devices at an individual location',
          'uses NetFlow to analyze potential security threats throughout the network and take appropriate action on that traffic',
        ],
      },
      {
        name: 'Traditional Device Management',
        items: [
          'implements changes via an SSH terminal',
          'manages device configurations on a per-device basis',
          'security is managed near the perimeter of the network with firewalls, VPNs, and IPS',
        ],
      },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบการจัดการอุปกรณ์:\n\n⭐ Cisco DNA Center (รวมศูนย์ + อัตโนมัติ):\n• monitors the cloud for software updates → ดึง/ตรวจอัปเดตจากคลาวด์อัตโนมัติ\n• uses CLI templates → ใช้เทมเพลตดันคอนฟิกที่สม่ำเสมอไปหลายอุปกรณ์พร้อมกัน\n• uses NetFlow ... security threats throughout the network → มองภาพรวมทั้งเครือข่ายและจัดการภัยคุกคามจากศูนย์กลาง\n\n🔹 Traditional (ทำทีละกล่อง):\n• implements changes via an SSH terminal → SSH เข้าไปแก้ทีละเครื่อง\n• manages device configurations on a per-device basis → คอนฟิกแยกทีละอุปกรณ์\n• security managed near the perimeter (firewall/VPN/IPS) → ความปลอดภัยเน้นที่ขอบเครือข่าย\n\n📗 จำไว้สอบ: DNA Center = รวมศูนย์/อัตโนมัติ/เทมเพลต/มองทั้งเครือข่าย | Traditional = SSH ทีละเครื่อง/per-device/ป้องกันที่ perimeter',
  },
  {
    id: 398,
    kind: 'multi',
    prompt:
      'Which two protocols must be disabled to increase security for management connections to a Wireless LAN Controller? (Choose two.)',
    options: [
      { key: 'A', text: 'Telnet' },
      { key: 'B', text: 'SSH' },
      { key: 'C', text: 'HTTP' },
      { key: 'D', text: 'HTTPS' },
      { key: 'E', text: 'TFTP' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — จัดการ WLC ให้ปลอดภัย = ปิดโปรโตคอลที่ "ส่งข้อมูลแบบไม่เข้ารหัส (clear-text)" แล้วใช้เฉพาะแบบเข้ารหัส:\n• Telnet (clear-text) ↔ SSH (เข้ารหัส) → ปิด Telnet ใช้ SSH\n• HTTP (clear-text) ↔ HTTPS (เข้ารหัส) → ปิด HTTP ใช้ HTTPS\n\n✅ ทำไม A, C ถูก: ปิด Telnet และ HTTP (สองตัวที่ไม่เข้ารหัส) เพื่อลดความเสี่ยงถูกดักรหัส\n\n❌ ทำไมข้ออื่นผิด:\nB. SSH = เข้ารหัส ควร "เปิด" ไว้ใช้งาน\nD. HTTPS = เข้ารหัส ควร "เปิด" ไว้ใช้งาน\nE. TFTP ใช้โอนไฟล์ (เช่นอัปเดต) ไม่ใช่ management session หลักที่โจทย์ถาม\n\n📗 จำไว้สอบ: ปิดตัว clear-text (Telnet, HTTP) → ใช้ตัวเข้ารหัสแทน (SSH, HTTPS)',
  },
  {
    id: 399,
    kind: 'drag',
    image: q399,
    prompt:
      'Refer to the exhibit (ipconfig /all; Wi-Fi: IP 192.168.1.20 /24, gateway 192.168.1.1, Physical Address B8-76-3F-7C-57-DF). Drag the node identifiers from the left onto the network parameters on the right.',
    categories: [
      { name: 'broadcast address', items: ['192.168.1.255'] },
      { name: 'default gateway', items: ['192.168.1.1'] },
      { name: 'host IP address', items: ['192.168.1.20'] },
      { name: 'last assignable IP address in the subnet', items: ['192.168.1.254'] },
      { name: 'MAC address', items: ['B8-76-3F-7C-57-DF'] },
    ],
    explanation:
      '🔍 อ่าน ipconfig /all (อะแดปเตอร์ Wi-Fi ที่เชื่อมต่อ): IP 192.168.1.20, mask 255.255.255.0 (/24), gateway 192.168.1.1, Physical Address B8-76-3F-7C-57-DF\n\n📘 แนวคิด — subnet 192.168.1.20 /24:\n• broadcast address = 192.168.1.255 (host bits เป็น 1 หมด)\n• default gateway = 192.168.1.1\n• host IP address = 192.168.1.20\n• last assignable (usable) = 192.168.1.254 (ก่อน broadcast 1 เบอร์)\n• MAC address = B8-76-3F-7C-57-DF\n\n📗 จำไว้สอบ: /24 → network .0, broadcast .255, last usable .254 • MAC = Physical Address ของการ์ดที่ใช้งานจริง',
  },
  {
    id: 400,
    kind: 'single',
    prompt: 'Which action does a router take as it forwards a packet through the network?',
    options: [
      { key: 'A', text: 'The router replaces the source and destination labels with the sending router interface label as a source and the next-hop router label as a destination.' },
      { key: 'B', text: 'The router encapsulates the source and destination IP addresses with the sending router IP address as the source and the neighbor IP address as the destination.' },
      { key: 'C', text: 'The router replaces the original source and destination MAC addresses with the sending router MAC address as the source and the neighbor MAC address as the destination.' },
      { key: 'D', text: 'The router encapsulates the original packet and then includes a tag that identifies the source router MAC address and transmits transparently to the destination.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เมื่อ router ส่งต่อแพ็กเก็ตข้าม hop:\n• "IP ต้นทาง/ปลายทาง" (Layer 3) → ไม่เปลี่ยน (คงเดิมตลอดทาง)\n• "MAC ต้นทาง/ปลายทาง" (Layer 2) → ถูก "เขียนใหม่ทุก hop": source MAC = ของ router ที่กำลังส่ง, destination MAC = ของ hop ถัดไป\n\n✅ ทำไม C ถูก: router แทนที่ MAC เดิมด้วย MAC ของตัวมันเอง (source) และ MAC ของเพื่อนบ้าน next-hop (destination) — ส่วน IP คงเดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. "label" เป็นเรื่องของ MPLS ไม่ใช่ IP routing ทั่วไป\nB. IP address "ไม่ถูกเปลี่ยน" ระหว่าง hop (คงต้นทาง/ปลายทางเดิม)\nD. การใส่ tag แล้วส่ง transparent ไม่ใช่พฤติกรรม routing ปกติ\n\n📗 จำไว้สอบ: ข้าม hop → IP เดิม, MAC เปลี่ยนทุก hop (source=router ปัจจุบัน, dest=next-hop)',
  },
  {
    id: 401,
    kind: 'single',
    prompt: 'Which function is performed by DHCP snooping?',
    options: [
      { key: 'A', text: 'propagates VLAN information between switches' },
      { key: 'B', text: 'listens to multicast traffic for packet forwarding' },
      { key: 'C', text: 'provides DDoS mitigation' },
      { key: 'D', text: 'rate-limits certain traffic' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A แต่ผิด — การกระจาย VLAN คือ VTP ไม่ใช่ DHCP snooping คำตอบที่ถูกต้องคือ D\n\n📘 แนวคิด — DHCP snooping กรอง DHCP บนพอร์ต "untrusted": ยอมเฉพาะ DHCP จากพอร์ต trusted, สร้าง binding database, และ "rate-limit" จำนวน DHCP message บนพอร์ต untrusted เพื่อกัน DHCP starvation/flood\n\n✅ ทำไม D ถูก: DHCP snooping จำกัดอัตรา (rate-limit) DHCP traffic บนพอร์ต untrusted เป็นหนึ่งในหน้าที่หลัก\n\n❌ ทำไมข้ออื่นผิด:\nA. กระจาย VLAN = VTP\nB. ฟัง multicast เพื่อ forward = IGMP snooping\nC. DHCP snooping ไม่ใช่เครื่องมือ DDoS mitigation โดยตรง\n\n📗 จำไว้สอบ: DHCP snooping = trusted/untrusted + binding DB + rate-limit DHCP',
  },
  {
    id: 402,
    kind: 'single',
    prompt:
      'When a client and server are not on the same physical network, which device is used to forward requests and replies between client and server for DHCP?',
    options: [
      { key: 'A', text: 'DHCP relay agent' },
      { key: 'B', text: 'DHCP server' },
      { key: 'C', text: 'DHCPDISCOVER' },
      { key: 'D', text: 'DHCPOFFER' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — DHCP DISCOVER เป็น broadcast ที่ router จะไม่ส่งข้าม subnet ให้. เมื่อ client กับ server อยู่คนละเครือข่าย ต้องมี "DHCP relay agent" (มักเป็น router/L3 switch ที่ตั้ง ip helper-address) แปลง broadcast เป็น unicast ส่งไปหา server และส่งคำตอบกลับ\n\n✅ ทำไม A ถูก: DHCP relay agent เป็นตัวกลาง forward DHCP ระหว่าง client กับ server ข้ามเครือข่าย\n\n❌ ทำไมข้ออื่นผิด:\nB. DHCP server เป็นปลายทางที่ให้ IP ไม่ใช่ตัว forward ข้ามเครือข่าย\nC/D. DHCPDISCOVER, DHCPOFFER เป็น "ข้อความ" ในกระบวนการ DORA ไม่ใช่ "อุปกรณ์"\n\n📗 จำไว้สอบ: client/server คนละ subnet → DHCP relay agent (ip helper-address)',
  },
  {
    id: 403,
    kind: 'single',
    prompt: 'What is a similarity between 1000BASE-LX and 1000BASE-T standards?',
    options: [
      { key: 'A', text: 'Both use the same data-link header and trailer formats.' },
      { key: 'B', text: 'Both cable types support LC connectors.' },
      { key: 'C', text: 'Both cable types support RJ-45 connectors.' },
      { key: 'D', text: 'Both support up to 550 meters between nodes.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — 1000BASE-LX (ไฟเบอร์) และ 1000BASE-T (ทองแดง UTP) ต่างเป็น "Gigabit Ethernet" เหมือนกัน → ใช้เฟรม Ethernet มาตรฐานเดียวกัน (header/trailer เหมือนกัน) เพียงแต่ต่างกันที่ชั้นกายภาพ (สื่อ/ตัวเชื่อมต่อ/ระยะทาง)\n\n✅ ทำไม A ถูก: ทั้งคู่ใช้ Ethernet framing เดียวกัน (Layer 2 header/trailer เหมือนกัน)\n\n❌ ทำไมข้ออื่นผิด:\nB. LC connector = ของไฟเบอร์ (LX) เท่านั้น ไม่ใช่ของ T (ทองแดง)\nC. RJ-45 = ของทองแดง (T) เท่านั้น ไม่ใช่ของ LX (ไฟเบอร์)\nD. 1000BASE-T รองรับ ~100 เมตร (UTP), LX รองรับหลายกิโล — ไม่ใช่ 550 ม. เหมือนกัน\n\n📗 จำไว้สอบ: มาตรฐาน Ethernet ต่างชนิดสื่อ แต่ "เฟรม Layer 2 เหมือนกัน" (header/trailer)',
  },
  {
    id: 404,
    kind: 'single',
    prompt:
      'An organization secures its network with multi-factor authentication using an authenticator app on employee smartphones. How is the application secured if a user’s smartphone is lost or stolen?',
    options: [
      { key: 'A', text: 'The application requires an administrator password to reactivate after a configured interval.' },
      { key: 'B', text: 'The application requires the user to enter a PIN before it provides the second factor.' },
      { key: 'C', text: 'The application challenges a user by requiring an administrator password to reactivate when the smartphone is rebooted.' },
      { key: 'D', text: 'The application verifies that the user is in a specific location before it provides the second factor.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — authenticator app ป้องกันกรณีมือถือหาย/ถูกขโมย โดยเพิ่มปัจจัย "something you know" ทับอีกชั้น: ก่อนแอปจะแสดง/ให้ปัจจัยที่สอง (OTP/approve) ต้องปลดล็อกด้วย PIN (หรือชีวมิติ) ที่มีแต่เจ้าของรู้ → คนที่ขโมยมือถือไปก็ใช้แอปไม่ได้\n\n✅ ทำไม B ถูก: แอปบังคับใส่ PIN ก่อนจะให้ปัจจัยที่สอง → ถึงมือถือหายก็ยังปลอดภัย\n\n❌ ทำไมข้ออื่นผิด:\nA/C. การต้องใช้ "administrator password" ไม่ใช่กลไกป้องกันระดับผู้ใช้ของ authenticator app ทั่วไป\nD. การเช็ก location ไม่ใช่วิธีมาตรฐานที่ป้องกันกรณีเครื่องหาย (โจรอาจอยู่ที่เดิม)\n\n📗 จำไว้สอบ: authenticator app ป้องกันเครื่องหาย = ล็อกด้วย PIN/biometric ก่อนให้ปัจจัยที่สอง',
  },
  {
    id: 405,
    kind: 'single',
    prompt: 'Which protocol requires authentication to transfer a backup configuration file from a router to a remote server?',
    options: [
      { key: 'A', text: 'DTP' },
      { key: 'B', text: 'FTP' },
      { key: 'C', text: 'SMTP' },
      { key: 'D', text: 'TFTP' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบการโอนไฟล์:\n• FTP (TCP 20/21) → "ต้องมี username/password" (authentication) ✔\n• TFTP (UDP 69) → ไม่มี authentication เลย\n\n✅ ทำไม B ถูก: FTP ต้องยืนยันตัวตน (login) ก่อนโอน backup config ไป remote server\n\n❌ ทำไมข้ออื่นผิด:\nA. DTP = Dynamic Trunking Protocol (เจรจา trunk) ไม่เกี่ยวกับโอนไฟล์\nC. SMTP = ส่งอีเมล ไม่ใช่โอน config file\nD. TFTP โอนไฟล์ได้ แต่ "ไม่ต้อง" authenticate → ไม่ตรงโจทย์ที่เน้น "requires authentication"\n\n📗 จำไว้สอบ: ต้อง login เพื่อโอนไฟล์ = FTP | ไม่ต้อง login = TFTP',
  },
  {
    id: 406,
    kind: 'multi',
    image: q406,
    prompt:
      'Refer to the exhibit. "show etherchannel summary" shows Po10(SU) using LACP. Which two commands were used to create port channel 10? (Choose two.)',
    options: [
      { key: 'A', text: 'interface range g0/0-1 / channel-group 10 mode active' },
      { key: 'B', text: 'interface range g0/0-1 / channel-group 10 mode desirable' },
      { key: 'C', text: 'interface range g0/0-1 / channel-group 10 mode passive' },
      { key: 'D', text: 'interface range g0/0-1 / channel-group 10 mode auto' },
      { key: 'E', text: 'interface range g0/0-1 / channel-group 10 mode on' },
    ],
    correct: ['A', 'C'],
    explanation:
      '🔍 อ่าน exhibit: Po10 ใช้ Protocol = "LACP"\n\n📘 แนวคิด — โหมด channel-group แยกตามโปรโตคอล:\n• LACP → "active" หรือ "passive"\n• PAgP → "desirable" หรือ "auto"\n• Static (ไม่ใช้โปรโตคอล) → "on"\nเมื่อ exhibit บอกว่าเป็น LACP → คำสั่งที่ใช้สร้างได้ต้องเป็น active/passive เท่านั้น\n\n✅ ทำไม A, C ถูก: "channel-group 10 mode active" และ "mode passive" เป็นโหมด LACP → ตรงกับ Po10 ที่เป็น LACP\n\n❌ ทำไมข้ออื่นผิด:\nB/D. desirable, auto = โหมดของ PAgP ไม่ใช่ LACP\nE. "on" = static ไม่เจรจาโปรโตคอล → จะไม่ขึ้นว่าเป็น LACP\n\n📗 จำไว้สอบ: LACP = active/passive | PAgP = desirable/auto | Static = on (ห้ามผสมข้ามโปรโตคอล)',
  },
  {
    id: 407,
    kind: 'single',
    image: q407,
    prompt:
      'Refer to the exhibit (ip arp inspection vlan 2 / interface fastethernet 0/1 / switchport mode access / switchport access vlan 2). What is the effect of this configuration?',
    options: [
      { key: 'A', text: 'The switch port interface trust state becomes untrusted.' },
      { key: 'B', text: 'The switch port remains administratively down until the interface is connected to another switch.' },
      { key: 'C', text: 'Dynamic ARP inspection is disabled because the ARP ACL is missing.' },
      { key: 'D', text: 'The switch port remains down until it is configured to trust or untrust incoming packets.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Dynamic ARP Inspection (DAI) ตรวจ ARP packet เทียบกับ DHCP snooping binding เพื่อกัน ARP spoofing/MITM. เมื่อเปิด "ip arp inspection vlan X" → ทุกพอร์ตใน VLAN นั้นกลายเป็น "untrusted" โดยดีฟอลต์ (ต้องไปสั่ง trust เองเฉพาะพอร์ตที่เชื่อถือได้ เช่น uplink)\n\n✅ ทำไม A ถูก: ผลของการเปิด DAI บน VLAN 2 คือพอร์ต (fa0/1) กลายเป็น untrusted โดยอัตโนมัติ → ARP ที่เข้ามาจะถูกตรวจสอบ\n\n❌ ทำไมข้ออื่นผิด:\nB/D. พอร์ตไม่ได้ถูกบังคับ down จากการเปิด DAI — มันยัง up และเริ่มตรวจ ARP\nC. DAI "ทำงาน" ได้โดยไม่ต้องมี ARP ACL (ใช้ binding จาก DHCP snooping) — ไม่ได้ถูกปิดเพราะขาด ACL\n\n📗 จำไว้สอบ: เปิด DAI → ทุกพอร์ตใน VLAN เป็น untrusted โดยดีฟอลต์ (ตั้ง trust เฉพาะ uplink)',
  },
  {
    id: 408,
    kind: 'single',
    prompt:
      'An engineer must configure traffic for a VLAN that is untagged by the switch as it crosses a trunk link. Which command should be used?',
    options: [
      { key: 'A', text: 'switchport trunk allowed vlan 10' },
      { key: 'B', text: 'switchport trunk native vlan 10' },
      { key: 'C', text: 'switchport mode trunk' },
      { key: 'D', text: 'switchport trunk encapsulation dot1q' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — บน trunk (802.1Q): VLAN ทั้งหมดถูกใส่ tag ยกเว้น "native VLAN" ซึ่งวิ่งข้าม trunk แบบ "untagged". ถ้าต้องการให้ VLAN 10 เป็น VLAN ที่ไม่ถูก tag ข้าม trunk → ตั้งให้เป็น native VLAN\n\n✅ ทำไม B ถูก: "switchport trunk native vlan 10" กำหนดให้ VLAN 10 เป็น native → เฟรม VLAN 10 ข้าม trunk แบบ untagged\n\n❌ ทำไมข้ออื่นผิด:\nA. allowed vlan 10 = อนุญาตให้ VLAN 10 ผ่าน trunk (แต่ยังถูก tag ปกติ) ไม่ได้ทำให้ untagged\nC. mode trunk = ตั้งพอร์ตเป็น trunk เฉย ๆ\nD. encapsulation dot1q = เลือกวิธี tagging ไม่ได้ระบุ native VLAN\n\n📗 จำไว้สอบ: untagged ข้าม trunk = "native VLAN" (default คือ VLAN 1) — ควรตรงกันทั้งสองฝั่ง',
  },
  {
    id: 409,
    kind: 'multi',
    prompt:
      'While examining excessive traffic, it is noted that all incoming packets on an interface appear to be allowed even though an IPv4 ACL is applied. Which two misconfigurations cause this behavior? (Choose two.)',
    options: [
      { key: 'A', text: 'The packets fail to match any permit statement.' },
      { key: 'B', text: 'A matching permit statement is too high in the access list.' },
      { key: 'C', text: 'A matching permit statement is too broadly defined.' },
      { key: 'D', text: 'The ACL is empty.' },
      { key: 'E', text: 'A matching deny statement is too high in the access list.' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — ACL ทำงาน "บนลงล่าง หยุดที่บรรทัดแรกที่ตรง" และมี "implicit deny" ปิดท้าย. อาการ "ทุกอย่างผ่านหมด" เกิดจาก permit ที่กว้าง/มาก่อนเกินไปจน match ทราฟฟิกที่ควรถูกบล็อก\n\n✅ ทำไม B, C ถูก:\nC. permit กว้างเกินไป (เช่น permit ip any any) → อนุญาตทุกอย่าง\nB. permit ที่ถูกต้องแต่ "วางสูงเกินไป" ในลิสต์ → match ก่อนถึงบรรทัด deny ที่ตั้งใจไว้ → ทราฟฟิกผ่านทั้งที่ควรถูกบล็อก\n\n❌ ทำไมข้ออื่นผิด:\nA. ถ้าไม่ match permit ใดเลย → โดน implicit deny → ทราฟฟิกจะถูก "บล็อก" ไม่ใช่ผ่าน (ตรงข้ามอาการ)\nD. ACL ที่ "ว่าง/ไม่มีอยู่จริง" ที่ apply ไป — ถ้า ACL ไม่มี entry เลยพฤติกรรมต่างออกไป และไม่ใช่สาเหตุที่ตรงกับ "permit ทำงานผิด"\nE. deny ที่สูงเกินไปจะทำให้ทราฟฟิก "ถูกบล็อก" มากขึ้น ไม่ใช่ผ่านหมด\n\n📗 จำไว้สอบ: ACL อ่านบนลงล่าง หยุดที่ match แรก • permit กว้าง/สูงเกินไป = ปล่อยผ่านเกินตั้งใจ',
  },
  {
    id: 410,
    kind: 'single',
    prompt: 'Why does a switch flood a frame to all ports?',
    options: [
      { key: 'A', text: 'The frame has zero destination MAC addresses.' },
      { key: 'B', text: 'The source MAC address of the frame is unknown.' },
      { key: 'C', text: 'The source and destination MAC addresses of the frame are the same.' },
      { key: 'D', text: 'The destination MAC address of the frame is unknown.' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B แต่ผิด — สวิตช์ flood เมื่อ "ปลายทาง" ไม่รู้จัก ไม่ใช่ "ต้นทาง" คำตอบที่ถูกต้องคือ D\n\n📘 แนวคิด — สวิตช์ทำ 2 อย่างกับทุกเฟรม:\n• LEARN จาก "source MAC" (ถ้าไม่รู้จัก → เรียนรู้ ไม่ใช่ flood)\n• FORWARD ตาม "destination MAC": ถ้ารู้จัก → ส่งพอร์ตเดียว; ถ้า "ไม่รู้จัก (unknown unicast)" หรือเป็น broadcast/multicast → flood ออกทุกพอร์ต (ยกเว้นพอร์ตขาเข้า)\n\n✅ ทำไม D ถูก: flood เกิดเพราะ "destination MAC ไม่มีในตาราง" (unknown unicast) → สวิตช์ไม่รู้จะส่งพอร์ตไหน จึงกระจายไปหมด\n\n❌ ทำไมข้ออื่นผิด:\nA. เฟรมไม่มี "zero destination MAC" ในการทำงานปกติ\nB. source ไม่รู้จัก → แค่ "เรียนรู้" ไม่ทำให้ flood\nC. source = destination ไม่ใช่เงื่อนไขการ flood\n\n📗 จำไว้สอบ: flood = destination MAC ไม่รู้จัก (unknown unicast) / broadcast / multicast',
  },
  {
    id: 411,
    kind: 'single',
    image: q411,
    prompt:
      'Refer to the exhibit. The "ntp server 192.168.0.3" command has been configured on Router 1 to make it an NTP client of Router 2. Which command must be configured on Router 2 so that it operates in server-only mode and relies only on its internal clock?',
    options: [
      { key: 'A', text: 'Router2(config)#ntp passive' },
      { key: 'B', text: 'Router2(config)#ntp server 172.17.0.1' },
      { key: 'C', text: 'Router2(config)#ntp master 4' },
      { key: 'D', text: 'Router2(config)#ntp server 192.168.0.2' },
    ],
    correct: ['C'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B แต่คำสั่งมาตรฐานที่ทำให้เป็น server อ้างอิงนาฬิกาภายในคือ "ntp master" คำตอบที่ถูกต้องคือ C\n\n📘 แนวคิด — "ntp master [stratum]" สั่งให้อุปกรณ์ถือว่า "นาฬิกาภายในของตัวเอง" เป็นแหล่งเวลาอ้างอิง (authoritative) แล้วทำตัวเป็น NTP server ให้ตัวอื่นมาซิงก์ — โดยไม่ต้องพึ่ง server ภายนอก\n\n✅ ทำไม C ถูก: "ntp master 4" ทำให้ Router2 เป็น NTP server (stratum 4) โดยใช้นาฬิกาภายในของตัวเอง ตรงตามโจทย์ "server-only + internal clock"\n\n❌ ทำไมข้ออื่นผิด:\nA. ntp passive เป็นโหมด symmetric passive ไม่ใช่การประกาศตัวเป็น master ด้วยนาฬิกาภายใน\nB. ntp server 172.17.0.1 (ชี้ไป loopback ตัวเอง) เป็นทริกเก่า แต่ไม่ใช่คำสั่งมาตรฐาน — และทำให้ดูเหมือนเป็น client\nD. ntp server 192.168.0.2 = ชี้ไป Router1 → กลายเป็น client ของ Router1 (ตรงข้ามโจทย์)\n\n📗 จำไว้สอบ: เป็น NTP server ด้วยนาฬิกาภายใน = "ntp master [stratum]" | เป็น client = "ntp server <ip>"',
  },
  {
    id: 412,
    kind: 'single',
    prompt:
      'A network administrator enabled port security on a switch interface connected to a printer. What is the next configuration action to allow the port to learn the MAC address of the printer and insert it into the table automatically?',
    options: [
      { key: 'A', text: 'enable dynamic MAC address learning' },
      { key: 'B', text: 'implement static MAC addressing' },
      { key: 'C', text: 'enable sticky MAC addressing' },
      { key: 'D', text: 'implement auto MAC address learning' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — port security "sticky": พอร์ตจะ "เรียนรู้ MAC แบบ dynamic แล้วบันทึกลง running-config โดยอัตโนมัติ" (เหมือน static แต่ไม่ต้องพิมพ์เอง). คำสั่ง: switchport port-security mac-address sticky\n\n✅ ทำไม C ถูก: sticky ให้พอร์ตเรียน MAC ของเครื่องพิมพ์เองและใส่ลงตาราง/คอนฟิกอัตโนมัติ (เซฟแล้วอยู่ถาวร) — ตรงตามโจทย์ "learn ... automatically"\n\n❌ ทำไมข้ออื่นผิด:\nB. static = ต้องพิมพ์ MAC เองทีละตัว (ไม่ใช่ "อัตโนมัติ")\nA/D. "dynamic/auto MAC learning" ไม่ใช่คำสั่ง port-security ที่บันทึก MAC ลงคอนฟิกอัตโนมัติ (dynamic ปกติจะหายเมื่อรีบูต)\n\n📗 จำไว้สอบ: port-security เรียน+บันทึกอัตโนมัติ = sticky (mac-address sticky)',
  },
  {
    id: 413,
    kind: 'multi',
    image: q413,
    prompt:
      'Refer to the exhibit. The New York router has static routes to Atlanta and Washington. (Atlanta Se0/0/0 = 2012::1; New York Se0/0/0 = 2012::2, Se0/0/1 = 2023::2; Washington Se0/0/0 = 2023::3.) Which two tasks must be performed so that the Serial0/0/0 interfaces on the Atlanta and Washington routers can reach one another? (Choose two.)',
    options: [
      { key: 'A', text: 'Configure the ipv6 route 2012:: 2023::1 command on the Washington router.' },
      { key: 'B', text: 'Configure the ipv6 route 2023:: 2012::1 command on the Atlanta router.' },
      { key: 'C', text: 'Configure the ipv6 route 2012:: s0/0/0 command on the Atlanta router.' },
      { key: 'D', text: 'Configure the ipv6 route 2023:: 2012::2 command on the Atlanta router.' },
      { key: 'E', text: 'Configure the ipv6 route 2012:: 2023::2 command on the Washington router.' },
    ],
    correct: ['D', 'E'],
    explanation:
      '🔍 อ่าน exhibit: New York เป็นตัวกลาง (ต่อ Atlanta ผ่าน 2012::/126, ต่อ Washington ผ่าน 2023::/126). Atlanta และ Washington ต้องมี static route ไปหา subnet ของอีกฝ่าย โดยชี้ next-hop ผ่าน New York\n\n📘 แนวคิด — next-hop ต้องเป็น IP ของ "ฝั่ง New York" ของลิงก์นั้น:\n• Atlanta จะไป Washington (2023::/126) → ผ่าน New York ที่ปลาย 2012::2 → "ipv6 route 2023:: 2012::2" (ที่ Atlanta)\n• Washington จะไป Atlanta (2012::/126) → ผ่าน New York ที่ปลาย 2023::2 → "ipv6 route 2012:: 2023::2" (ที่ Washington)\n\n✅ ทำไม D, E ถูก: ทั้งคู่ชี้ next-hop ไปยัง New York (2012::2 และ 2023::2) ซึ่งเป็นทางเดียวที่จะถึงกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. 2023::1 ไม่มีอยู่ (Washington = 2023::3, NY = 2023::2)\nB. 2012::1 คือ Atlanta เอง — Atlanta ชี้ไปตัวเองไม่ได้\nC. ใช้ egress interface s0/0/0 ไปยัง subnet ปลายทาง 2012:: (subnet ของตัวเอง) — ผิดปลายทาง\n\n📗 จำไว้สอบ: static route next-hop = IP ของ "อีกฝั่ง" ลิงก์ (ฝั่ง router ตัวกลาง) เสมอ',
  },
  {
    id: 414,
    kind: 'drag',
    image: q414,
    prompt:
      'Drag and drop the descriptions from the left onto the configuration-management technologies (Ansible / Chef / Puppet) on the right.',
    categories: [
      {
        name: 'Ansible',
        items: ['uses SSH for remote device communication', 'uses YAML for fundamental configuration elements'],
      },
      {
        name: 'Chef',
        items: ['uses TCP port 10002 for configuration push jobs', 'uses Ruby for fundamental configuration elements'],
      },
      {
        name: 'Puppet',
        items: ['fundamental configuration elements are stored in a manifest', 'uses TCP 8140 for communication'],
      },
    ],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ 3 เครื่องมือ Configuration Management (ออกสอบบ่อยมาก):\n\n⭐ Ansible\n   • เขียนบน Python • Agentless → ใช้ "SSH" สื่อสารกับอุปกรณ์ (ไม่ต้องลง agent)\n   • ไฟล์คอนฟิก = Playbook เขียนด้วย "YAML"\n\n🔹 Chef\n   • สร้างจาก "Ruby" • ต้องมี agent\n   • ใช้ "TCP 10002" (Chef Push Jobs) • ไฟล์ = Cookbook/Recipe\n\n🔹 Puppet\n   • สร้างจาก Ruby • ต้องมี agent\n   • ใช้ "TCP 8140" • ไฟล์คอนฟิก = "Manifest" (.pp)\n\n📗 จำไว้สอบ: SSH+YAML+agentless = Ansible | Ruby+10002 = Chef | manifest+8140 = Puppet',
  },
  {
    id: 415,
    kind: 'multi',
    prompt: 'What are two benefits of using the PortFast feature? (Choose two.)',
    options: [
      { key: 'A', text: 'Enabled interfaces are automatically placed in listening state.' },
      { key: 'B', text: 'Enabled interfaces come up and move to the forwarding state immediately.' },
      { key: 'C', text: 'Enabled interfaces never generate topology change notifications.' },
      { key: 'D', text: 'Enabled interfaces that move to the learning state generate switch topology change notifications.' },
      { key: 'E', text: 'Enabled interfaces wait 50 seconds before they move to the forwarding state.' },
    ],
    correct: ['B', 'C'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A,B แต่ A ผิด (PortFast "ข้าม" listening ไม่ใช่เข้า listening) คำตอบที่ถูกต้องคือ B,C\n\n📘 แนวคิด — PortFast ทำให้พอร์ต access (ต่อ end device) "ข้าม listening/learning" เข้าสู่ forwarding ทันที และเนื่องจากพอร์ตนี้ไม่ถือเป็นการเปลี่ยน topology ของ STP มันจึง "ไม่สร้าง TCN (Topology Change Notification)" เมื่อ link ขึ้น/ลง\n\n✅ ทำไม B, C ถูก:\nB. พอร์ตขึ้นแล้ว forward ทันที (ไม่ต้องรอ ~30 วิ)\nC. พอร์ต PortFast ไม่สร้าง TCN → ตาราง MAC ของทั้งเครือข่ายไม่ถูก flush ทุกครั้งที่ PC เปิด/ปิด\n\n❌ ทำไมข้ออื่นผิด:\nA. PortFast "ข้าม" listening/learning ไม่ได้ "เข้า" listening\nD. PortFast "ไม่" สร้าง TCN (ตรงข้ามข้อนี้)\nE. ปกติ STP รอ ~30 วิ (15+15) — PortFast ทำให้ "ไม่รอ" ไม่ใช่รอ 50 วิ\n\n📗 จำไว้สอบ: PortFast = forward ทันที + ไม่สร้าง TCN (ใช้กับพอร์ต end-device เท่านั้น)',
  },
  {
    id: 416,
    kind: 'multi',
    prompt: 'What are two characteristics of an SSID? (Choose two.)',
    options: [
      { key: 'A', text: 'It can be hidden or broadcast in a WLAN.' },
      { key: 'B', text: 'It uniquely identifies an access point in a WLAN.' },
      { key: 'C', text: 'It uniquely identifies a client in a WLAN.' },
      { key: 'D', text: 'It is at most 32 characters long.' },
      { key: 'E', text: 'It provides secured access to a WLAN.' },
    ],
    correct: ['A', 'D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B,E แต่ผิด — B คือ BSSID (ไม่ใช่ SSID) และ SSID ไม่ได้ให้ความปลอดภัย คำตอบที่ถูกต้องคือ A,D\n\n📘 แนวคิด — SSID (Service Set Identifier) = "ชื่อ" ของเครือข่าย Wi-Fi (ข้อความ) ยาวได้สูงสุด 32 อักขระ และผู้ดูแลเลือกได้ว่าจะ broadcast (ให้เห็นชื่อ) หรือ hidden (ซ่อนชื่อ)\n\n✅ ทำไม A, D ถูก:\nA. SSID สามารถถูก broadcast หรือซ่อน (hidden) ได้\nD. SSID ยาวได้ไม่เกิน 32 อักขระ\n\n❌ ทำไมข้ออื่นผิด:\nB. สิ่งที่ระบุ AP แบบไม่ซ้ำคือ "BSSID" (MAC ของวิทยุ AP) ไม่ใช่ SSID\nC. SSID ไม่ได้ระบุ client\nE. SSID เป็นแค่ "ชื่อ" ไม่ได้ให้ความปลอดภัย (ความปลอดภัยมาจาก WPA2/WPA3)\n\n📗 จำไว้สอบ: SSID = ชื่อ WLAN (≤32 ตัว, ซ่อน/แสดงได้) | BSSID = MAC ของ AP (ระบุ AP)',
  },
  {
    id: 417,
    kind: 'single',
    prompt: 'What is the purpose of an SSID?',
    options: [
      { key: 'A', text: 'It provides network security.' },
      { key: 'B', text: 'It differentiates traffic entering access points.' },
      { key: 'C', text: 'It identifies an individual access point on a WLAN.' },
      { key: 'D', text: 'It identifies a WLAN.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — SSID = ชื่อที่ใช้ "ระบุ/เรียก" เครือข่าย WLAN หนึ่ง ๆ เพื่อให้ client เลือกเชื่อมต่อได้ถูกวง\n\n✅ ทำไม D ถูก: จุดประสงค์ของ SSID คือระบุ (ตั้งชื่อ) WLAN\n\n❌ ทำไมข้ออื่นผิด:\nA. ความปลอดภัยมาจาก WPA2/WPA3 ไม่ใช่ SSID\nB. SSID ไม่ได้ทำหน้าที่แยกแยะทราฟฟิกเข้า AP\nC. สิ่งที่ระบุ AP แต่ละตัวคือ BSSID (MAC) ไม่ใช่ SSID\n\n📗 จำไว้สอบ: SSID = ชื่อของ WLAN | BSSID = ตัวระบุ AP (MAC)',
  },
  {
    id: 418,
    kind: 'drag',
    image: q418,
    prompt: 'Drag and drop the AAA terms from the left onto the descriptions on the right.',
    categories: [
      { name: 'tracks activity', items: ['accounting'] },
      { name: 'updates session attributes', items: ['CoA'] },
      { name: 'verifies access rights', items: ['authorization'] },
      { name: 'verifies identity', items: ['authentication'] },
    ],
    explanation:
      '📘 แนวคิด — คำศัพท์ AAA + CoA:\n• Authentication → "verifies identity" (ยืนยันว่าเป็นใคร)\n• Authorization → "verifies access rights" (ตรวจสิทธิ์ว่าทำอะไรได้)\n• Accounting → "tracks activity" (บันทึกกิจกรรม/เวลาใช้งาน)\n• CoA (Change of Authorization) → "updates session attributes" (สั่งเปลี่ยนสิทธิ์/พารามิเตอร์ของ session ที่กำลังใช้อยู่ เช่นเปลี่ยน VLAN, ตัดการเชื่อมต่อ)\n\n📗 จำไว้สอบ: Authentication=ตัวตน | Authorization=สิทธิ์ | Accounting=บันทึก | CoA=แก้ไข session สด ๆ',
  },
  {
    id: 419,
    kind: 'single',
    prompt: 'Which plane is centralized by an SDN controller?',
    options: [
      { key: 'A', text: 'management-plane' },
      { key: 'B', text: 'control-plane' },
      { key: 'C', text: 'data-plane' },
      { key: 'D', text: 'services-plane' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — หัวใจของ SDN คือ "ดึง control plane ออกจากอุปกรณ์แต่ละตัว ไปรวมไว้ที่ SDN controller ส่วนกลาง" ส่วน data plane (การ forward จริง) ยังอยู่บนอุปกรณ์ที่รับคำสั่งจาก controller ผ่าน southbound API\n\n✅ ทำไม B ถูก: SDN controller รวมศูนย์ "control plane" (การตัดสินใจเส้นทาง/นโยบาย)\n\n❌ ทำไมข้ออื่นผิด:\nA. management plane เป็นการดูแลอุปกรณ์ ไม่ใช่สิ่งที่นิยาม SDN โดยตรง\nC. data plane ยังกระจายอยู่บนอุปกรณ์ (ไม่ถูกรวมศูนย์)\nD. "services-plane" ไม่ใช่ plane มาตรฐานในบริบทนี้\n\n📗 จำไว้สอบ: SDN = รวมศูนย์ control plane ไว้ที่ controller (data plane ยังอยู่บนอุปกรณ์)',
  },
  {
    id: 420,
    kind: 'single',
    image: q420,
    prompt:
      'Refer to the exhibit. A network administrator must secure VTY access to a router. Which access-list entry accomplishes this task?',
    options: [
      { key: 'A', text: 'access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq ssh' },
      { key: 'B', text: 'access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq scp' },
      { key: 'C', text: 'access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq telnet' },
      { key: 'D', text: 'access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq https' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — "VTY access" = การเข้ามาจัดการเราเตอร์จากระยะไกล ซึ่งวิธีที่ปลอดภัยคือ SSH (พอร์ต 22, เข้ารหัส). การ "secure" VTY จึงหมายถึงอนุญาตเฉพาะ SSH\n\n✅ ทำไม A ถูก: permit ... eq ssh (พอร์ต 22) → อนุญาตการเข้า VTY แบบเข้ารหัส (SSH) = ปลอดภัย\n\n❌ ทำไมข้ออื่นผิด:\nB. scp เป็นการคัดลอกไฟล์ ไม่ใช่ session เข้า VTY เพื่อจัดการ\nC. telnet (23) เป็น clear-text ไม่ปลอดภัย → ตรงข้ามกับ "secure"\nD. https (443) ใช้กับเว็บ GUI ไม่ใช่ VTY line\n\n📗 จำไว้สอบ: secure VTY = อนุญาต SSH (พอร์ต 22) เท่านั้น + ใช้ "transport input ssh" ที่ line vty',
  },
  {
    id: 421,
    kind: 'single',
    prompt: 'Which action is taken by a switch port enabled for PoE power classification override?',
    options: [
      { key: 'A', text: 'When a powered device begins drawing power from a PoE switch port, a syslog message is generated.' },
      { key: 'B', text: 'As power usage on a PoE switch port is checked, data flow to the connected device is temporarily paused.' },
      { key: 'C', text: 'If a switch determines that a device is using less than the minimum configured power, it assumes the device has failed and disconnects.' },
      { key: 'D', text: 'Should a monitored port exceed the maximum administrative value for power, the port is shut down and err-disabled.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — PoE power classification override / policing: สวิตช์เทียบการใช้พลังงานจริงของพอร์ตกับค่า "administrative maximum". ถ้าพอร์ตดึงไฟ "เกิน" ค่าสูงสุดที่กำหนด → ออก syslog, สั่ง shut พอร์ตเป็น err-disabled และคืนไฟที่จองไว้\n\n✅ ทำไม D ถูก: เมื่อพอร์ตใช้ไฟเกิน administrative maximum → port ถูก shutdown + err-disabled\n\n❌ ทำไมข้ออื่นผิด:\nA. การ "เริ่มดึงไฟ" เฉย ๆ ไม่ได้ทำให้เกิด action ของ override (override เน้นกรณี "เกิน" ค่า)\nB. การตรวจไฟไม่ได้ pause ทราฟฟิกข้อมูล\nC. override ไม่ได้ตัดอุปกรณ์เพราะ "ใช้ไฟน้อยเกินไป" — มันจัดการกรณี "เกิน"\n\n📗 จำไว้สอบ: PoE policing/override → ใช้ไฟเกิน max = syslog + shutdown + err-disabled',
  },
  {
    id: 422,
    kind: 'single',
    prompt:
      'R1 has learned route 192.168.12.0 via IS-IS, OSPF, RIP, and internal EIGRP. Under normal operating conditions, which routing protocol is installed in the routing table?',
    options: [
      { key: 'A', text: 'IS-IS' },
      { key: 'B', text: 'RIP' },
      { key: 'C', text: 'Internal EIGRP' },
      { key: 'D', text: 'OSPF' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — prefix เดียวกันจากหลายโปรโตคอล → เลือกตัว "AD ต่ำสุด" ลงตาราง:\n• Internal EIGRP = 90 ⭐ ต่ำสุด\n• OSPF = 110\n• IS-IS = 115\n• RIP = 120\n\n✅ ทำไม C ถูก: Internal EIGRP มี AD 90 ต่ำสุด → ถูกติดตั้งในตาราง routing\n\n❌ ทำไมข้ออื่นผิด:\nA. IS-IS 115 สูงกว่า EIGRP\nB. RIP 120 สูงสุดในกลุ่มนี้\nD. OSPF 110 สูงกว่า EIGRP 90\n\n📗 จำไว้สอบ AD: EIGRP internal 90 < OSPF 110 < IS-IS 115 < RIP 120 (EIGRP external = 170)',
  },
  {
    id: 423,
    kind: 'multi',
    prompt: 'What are two reasons that cause late collisions to increment on an Ethernet interface? (Choose two.)',
    options: [
      { key: 'A', text: 'when the sending device waits 15 seconds before sending the frame again' },
      { key: 'B', text: 'when the cable length limits are exceeded' },
      { key: 'C', text: 'when one side of the connection is configured for half-duplex' },
      { key: 'D', text: 'when Carrier Sense Multiple Access/Collision Detection is used' },
      { key: 'E', text: 'when a collision occurs after the 32nd byte of a frame has been transmitted' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — "late collision" = การชนที่เกิด "หลัง" ส่งไปแล้วเกิน 64 ไบต์แรก (slot time) ซึ่งไม่ควรเกิดในเครือข่ายที่ออกแบบถูก. สาเหตุคลาสสิก 2 อย่าง: (1) duplex mismatch (ฝั่งหนึ่ง half อีกฝั่ง full), (2) สายยาวเกินมาตรฐาน\n\n✅ ทำไม B, C ถูก:\nB. สายยาวเกินลิมิต → สัญญาณเดินทางนานเกิน slot time → ตรวจ collision ช้า → late collision\nC. ฝั่งหนึ่งเป็น half-duplex (duplex mismatch) → ฝั่ง half ตรวจ carrier ขณะอีกฝั่ง full ส่งตลอด → เกิด late collision\n\n❌ ทำไมข้ออื่นผิด:\nA. การรอ 15 วินาทีไม่ใช่กลไก backoff ของ Ethernet และไม่ใช่สาเหตุ late collision\nD. CSMA/CD เป็นกลไกปกติของ half-duplex ไม่ใช่ "สาเหตุ" ของ late collision\nE. การชน "ก่อน" byte ที่ 64 (ภายใน slot time) คือ collision ปกติ ไม่ใช่ late (E ระบุ 32 ซึ่งไม่ใช่เกณฑ์ late)\n\n📗 จำไว้สอบ: late collision = duplex mismatch หรือ สายยาวเกิน (เกิดหลัง 64 ไบต์แรก)',
  },
  {
    id: 424,
    kind: 'single',
    prompt: 'Which QoS tool is used to optimize voice traffic on a network that is primarily intended for data traffic?',
    options: [
      { key: 'A', text: 'FIFO' },
      { key: 'B', text: 'WFQ' },
      { key: 'C', text: 'PQ' },
      { key: 'D', text: 'WRED' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เสียง (voice) ต้องการความหน่วงต่ำและมาก่อน (priority). ในบรรดาตัวเลือก PQ (Priority Queuing) จัดคิวแบบให้ทราฟฟิกที่สำคัญ (เช่น voice) อยู่คิวลำดับสูงและถูกส่งก่อนเสมอ → เหมาะกับการยกระดับ voice บนเน็ตที่เน้น data\n\n✅ ทำไม C ถูก: PQ ให้ voice ได้สิทธิ์ส่งก่อน (strict priority) → ลด latency/jitter ของเสียง\n\n❌ ทำไมข้ออื่นผิด:\nA. FIFO = มาก่อนได้ก่อน ไม่มีการจัดลำดับความสำคัญ → เสียงจะแย่เมื่อ data เยอะ\nB. WFQ = แบ่งแบนด์วิดท์ตาม flow อย่างยุติธรรม แต่ไม่ได้ให้ voice priority เด็ดขาด\nD. WRED = กลไกจัดการ congestion (ทิ้งแพ็กเก็ตเชิงป้องกัน) ไม่ใช่การให้ priority เสียง\n\n📗 จำไว้สอบ: ให้ voice มาก่อน = PQ (priority) | LLQ = PQ+CBWFQ (คำตอบดีสุดในโลกจริง แต่ที่นี่เลือก PQ)',
  },
  {
    id: 425,
    kind: 'multi',
    prompt: 'What are two characteristics of a controller-based network? (Choose two.)',
    options: [
      { key: 'A', text: 'The administrator can make configuration updates from the CLI.' },
      { key: 'B', text: 'It uses northbound and southbound APIs to communicate between architectural layers.' },
      { key: 'C', text: 'It moves the control plane to a central point.' },
      { key: 'D', text: 'It decentralizes the control plane, which allows each device to make its own forwarding decisions.' },
      { key: 'E', text: 'It uses Telnet to report system issues.' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — controller-based (SDN): ดึง control plane มารวมที่ controller ส่วนกลาง และสื่อสารผ่าน API 2 ทิศ:\n• Northbound API → คุยกับแอป/ผู้ดูแลด้านบน (เช่น REST)\n• Southbound API → คุยลงไปหาอุปกรณ์ด้านล่าง (เช่น OpenFlow/NETCONF)\n\n✅ ทำไม B, C ถูก:\nB. ใช้ northbound + southbound API เชื่อมระหว่างชั้นสถาปัตยกรรม\nC. ย้าย/รวม control plane ไว้ที่จุดศูนย์กลาง (controller)\n\n❌ ทำไมข้ออื่นผิด:\nA. การอัปเดตผ่าน CLI ทีละกล่องเป็นลักษณะของเครือข่ายดั้งเดิม ไม่ใช่จุดเด่น controller-based\nD. controller-based "รวมศูนย์" control plane ไม่ใช่กระจาย (ข้อนี้อธิบาย traditional)\nE. Telnet ไม่ใช่กลไกรายงานของ controller-based\n\n📗 จำไว้สอบ: controller-based = รวมศูนย์ control plane + northbound/southbound API',
  },
  {
    id: 426,
    kind: 'single',
    prompt: 'What is the benefit of configuring PortFast on an interface?',
    options: [
      { key: 'A', text: 'After the cable is connected, the interface uses the fastest speed setting available for that cable type.' },
      { key: 'B', text: 'After the cable is connected, the interface is available faster to send and receive user data.' },
      { key: 'C', text: 'The frames entering the interface are marked with higher priority and then processed faster by a switch.' },
      { key: 'D', text: 'Real-time voice and video frames entering the interface are processed faster.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — PortFast ทำให้พอร์ต access ข้าม listening/learning (~30 วิ) เข้าสู่ forwarding ทันทีเมื่อเสียบสาย → พอร์ต "พร้อมรับส่งข้อมูลได้เร็ว" (เหมาะกับ PC/phone/server ที่ต้องได้ IP จาก DHCP ทันที)\n\n✅ ทำไม B ถูก: หลังเสียบสาย พอร์ตพร้อมรับส่งข้อมูลผู้ใช้ได้เร็วขึ้น (ไม่ต้องรอ STP)\n\n❌ ทำไมข้ออื่นผิด:\nA. PortFast ไม่เกี่ยวกับการเลือก "ความเร็ว" ของพอร์ต (นั่นคือ speed/auto-negotiation)\nC/D. PortFast ไม่ได้ทำ QoS/mark priority หรือเร่งเฉพาะ voice/video — มันแค่ข้ามสถานะ STP\n\n📗 จำไว้สอบ: ประโยชน์ PortFast = พอร์ต forward ได้ทันที (เร็วขึ้น ~30 วิ) สำหรับ end device',
  },
  {
    id: 427,
    kind: 'single',
    image: q427,
    prompt:
      'Refer to the exhibit. An engineer configures interface Gi1/0 on the company PE router to connect to an ISP. The interface has "lldp transmit" and "lldp receive" configured but neighbor discovery is not working. Which action is necessary to complete the configuration if the ISP uses third-party network devices?',
    options: [
      { key: 'A', text: 'Enable LLDP globally.' },
      { key: 'B', text: 'Disable autonegotiation.' },
      { key: 'C', text: 'Disable Cisco Discovery Protocol on the interface.' },
      { key: 'D', text: 'Enable LLDP-MED on the ISP device.' },
    ],
    correct: ['A'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D แต่เราไปตั้งค่าอุปกรณ์ของ ISP (third-party) ไม่ได้ คำตอบที่ถูกต้องคือ A\n\n🔍 อ่าน exhibit: interface Gi1/0 มี "lldp transmit / lldp receive" (ระดับอินเทอร์เฟซ) แต่ LLDP ยังไม่ทำงาน\n\n📘 แนวคิด — ISP ใช้อุปกรณ์ต่างยี่ห้อ → ต้องใช้ LLDP (มาตรฐานกลาง). แต่ LLDP จะทำงานได้ต้องเปิดที่ "ระดับ global" ด้วยคำสั่ง "lldp run" ก่อน (คำสั่งระดับอินเทอร์เฟซอย่างเดียวไม่พอ)\n\n✅ ทำไม A ถูก: ต้อง "lldp run" (global config) เพื่อเปิด LLDP ทั้งเครื่อง แล้ว lldp transmit/receive ที่อินเทอร์เฟซจึงมีผล\n\n❌ ทำไมข้ออื่นผิด:\nB. ปิด autonegotiation ไม่เกี่ยวกับ neighbor discovery\nC. CDP เป็น Cisco-only ใช้กับ third-party ไม่ได้อยู่แล้ว การปิด/เปิด CDP ไม่ช่วยให้ LLDP ทำงาน\nD. เราไม่มีสิทธิ์ไปตั้งค่าอุปกรณ์ของ ISP (คนละองค์กร) — ต้องแก้ที่ฝั่งเราเอง\n\n📗 จำไว้สอบ: LLDP ต้องเปิด global "lldp run" ก่อน แล้วค่อยปรับ lldp transmit/receive รายพอร์ต',
  },
  {
    id: 428,
    kind: 'single',
    prompt:
      'An implementer is preparing hardware for virtualization to create virtual machines on a host. What is needed to provide communication between hardware and virtual machines?',
    options: [
      { key: 'A', text: 'hypervisor' },
      { key: 'B', text: 'router' },
      { key: 'C', text: 'straight cable' },
      { key: 'D', text: 'switch' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Hypervisor (เช่น ESXi, Hyper-V, KVM) คือชั้นซอฟต์แวร์ที่คั่นระหว่างฮาร์ดแวร์จริงกับ VM: มันจัดสรร/แบ่งทรัพยากรจริง (CPU, RAM, NIC, disk) ให้แต่ละ VM และเป็นตัวกลางให้ VM "คุยกับฮาร์ดแวร์" ได้\n\n✅ ทำไม A ถูก: hypervisor เป็นตัวเชื่อม/จัดสรรระหว่างฮาร์ดแวร์กับ VM (จำเป็นต้องมีเพื่อสร้างและรัน VM)\n\n❌ ทำไมข้ออื่นผิด:\nB. router = อุปกรณ์ routing ระหว่างเครือข่าย ไม่ใช่ตัวเชื่อม hardware↔VM\nC. straight cable = สายทองแดง ไม่เกี่ยวกับ virtualization ภายใน host\nD. switch (จริง) ไม่ใช่สิ่งที่เชื่อม VM กับฮาร์ดแวร์ (ภายใน host ใช้ virtual switch ของ hypervisor)\n\n📗 จำไว้สอบ: virtualization → hypervisor คั่นระหว่าง hardware กับ VM (Type 1 = bare-metal, Type 2 = hosted)',
  },
  {
    id: 429,
    kind: 'single',
    image: q429,
    prompt:
      'Refer to the exhibit. Wireless coverage cells (Zones 1-8) reuse channels 1, 6, and 11. Between which zones do wireless users expect to experience intermittent connectivity?',
    options: [
      { key: 'A', text: 'between zones 1 and 2' },
      { key: 'B', text: 'between zones 2 and 5' },
      { key: 'C', text: 'between zones 3 and 4' },
      { key: 'D', text: 'between zones 3 and 6' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เพื่อเลี่ยงสัญญาณกวนกัน เซลล์ (AP) ที่ "อยู่ติดกันและพื้นที่ครอบคลุมทับซ้อน" ต้องใช้ช่องต่างกัน (1/6/11). ปัญหา intermittent connectivity เกิดตรงบริเวณที่เซลล์สองอันซึ่งใช้ "ช่องเดียวกัน" มาทับซ้อนกัน (co-channel interference) → client แถวรอยต่อนั้นจะหลุด ๆ ติด ๆ\n\n🔍 จากผังการวางช่อง 1/6/11 บนเซลล์ที่ทับซ้อน: โซน 3 กับโซน 6 เป็นคู่ที่พื้นที่ทับซ้อนกันแต่ตกอยู่บนช่องเดียวกัน → เกิดการรบกวนแบบ co-channel\n\n✅ ทำไม D ถูก: รอยต่อระหว่างโซน 3 และโซน 6 คือจุดที่เซลล์ช่องเดียวกันซ้อนทับ → users เจอสัญญาณตก ๆ หาย ๆ\n\n❌ ทำไมข้ออื่นผิด:\nA/B/C. คู่โซนเหล่านี้เป็นเซลล์ที่ใช้ "ช่องต่างกัน" ในบริเวณทับซ้อน จึงไม่กวนกัน (ออกแบบถูกตามหลัก 1/6/11)\n\n📗 จำไว้สอบ: intermittent/รบกวน = เซลล์ทับซ้อนกันแต่ใช้ "ช่องเดียวกัน" (co-channel) → เลี่ยงด้วย 1/6/11',
  },
  {
    id: 430,
    kind: 'single',
    image: q430,
    prompt:
      'Refer to the exhibit. Routers R1 and R2 are partially configured with IP addressing and can reach devices on their respective LANs. R1 and R2 connect over 209.165.200.224/x (R1 = .225, R2 = .226). Which command set configures IP connectivity between devices located on both LANs?',
    options: [
      { key: 'A', text: 'R1: ip route 192.168.1.0 255.255.255.0 GigabitEthernet0/0 / R2: ip route 10.1.1.1 255.255.255.0 GigabitEthernet0/0' },
      { key: 'B', text: 'R1: ip route 0.0.0.0 0.0.0.0 209.165.200.225 / R2: ip route 0.0.0.0 0.0.0.0 209.165.200.226' },
      { key: 'C', text: 'R1: ip route 192.168.1.1 255.255.255.0 GigabitEthernet0/1 / R2: ip route 10.1.1.1 255.255.255.0 GigabitEthernet0/1' },
      { key: 'D', text: 'R1: ip route 0.0.0.0 0.0.0.0 209.165.200.226 / R2: ip route 0.0.0.0 0.0.0.0 209.165.200.225' },
    ],
    correct: ['D'],
    explanation:
      '🔍 อ่าน exhibit: R1 LAN = 192.168.1.0/24, R2 LAN = 10.1.1.0/24, เชื่อมกันผ่าน 209.165.200.224/x โดย R1 = .225, R2 = .226. แต่ละฝั่งขาด "เส้นทางไป LAN ของอีกฝ่าย"\n\n📘 แนวคิด — ใส่ default route (0.0.0.0/0) ชี้ไปยัง "IP ของเราเตอร์อีกฝั่ง" (next-hop) เพื่อให้ส่งทราฟฟิกข้ามไปถึง LAN ปลายทางได้:\n• R1 ต้องชี้ไป R2 → next-hop = 209.165.200.226\n• R2 ต้องชี้ไป R1 → next-hop = 209.165.200.225\n\n✅ ทำไม D ถูก: R1 default → .226 (R2), R2 default → .225 (R1) → ทั้งสอง LAN คุยกันได้\n\n❌ ทำไมข้ออื่นผิด:\nA/C. ใส่ route ชี้ไป subnet ของ "ตัวเอง" ผ่าน egress interface ผิด ๆ และ mask/ปลายทางไม่สอดคล้อง — ไม่ได้ชี้ข้ามไป LAN อีกฝั่ง\nB. สลับ next-hop ผิดด้าน (R1 ชี้ .225 = ตัวเอง, R2 ชี้ .226 = ตัวเอง) → วนกลับ ไม่ถึงปลายทาง\n\n📗 จำไว้สอบ: default route next-hop ต้องเป็น IP ของเราเตอร์ "อีกฝั่ง" ของลิงก์ (ไม่ใช่ของตัวเอง)',
  },
  {
    id: 431,
    kind: 'drag',
    image: q431,
    prompt:
      'Drag and drop the lightweight access point operation modes from the left onto the descriptions on the right.',
    categories: [
      { name: 'allows the access point to communicate with the WLC over a WAN link', items: ['FlexConnect mode'] },
      { name: 'allows for packet captures of wireless traffic', items: ['sniffer mode'] },
      { name: 'preferred for connecting access points in a mesh environment', items: ['bridge mode'] },
      { name: 'receive-only mode which acts as a dedicated sensor for RFID and IDS', items: ['monitor mode'] },
      { name: 'transmits normally on one channel and monitors other channels for noise and interference', items: ['local mode'] },
      { name: 'monitors the wired network for rogue access point MAC addresses', items: ['rogue detector mode'] },
    ],
    explanation:
      '📘 แนวคิด — โหมดของ Lightweight AP (ออกสอบบ่อย):\n• Local mode (ดีฟอลต์) → ให้บริการ client และ "off-channel scan" (ส่งบนช่องหลัก + สแกนช่องอื่นดู noise/interference เป็นระยะ)\n• FlexConnect mode → สาขาไกล: AP คุยกับ WLC ผ่าน WAN link และ switch ทราฟฟิก local ได้แม้ WAN ล่ม\n• Monitor mode → receive-only, เป็น sensor เฉพาะทางสำหรับ RFID, IDS, location\n• Sniffer mode → ดักจับ (capture) แพ็กเก็ตไร้สายส่งไปเครื่องวิเคราะห์\n• Bridge/Mesh mode → เชื่อม AP แบบ mesh (ไร้สายระหว่าง AP)\n• Rogue Detector mode → เฝ้าดู "ฝั่งมีสาย" เพื่อจับ MAC ของ rogue AP\n\n📗 จำไว้สอบ: FlexConnect=สาขา/WAN | Sniffer=capture | Monitor=sensor(RFID/IDS) | Bridge=mesh | Local=default+scan | Rogue Detector=จับ rogue บน wired',
  },
  {
    id: 432,
    kind: 'single',
    image: q432,
    prompt:
      'Refer to the exhibit. Which IPv6 configuration is required for R17 to successfully ping the WAN interface on R18? (R17 Fa0/0 = 2001:db8:2::201/64, Fa1/0 = 2001:db8:3::201/64; R18 Fa1/0 = 2001:db8:3::301; R18 WAN subnet = 2001:db8:4::/64.)',
    options: [
      { key: 'A', text: 'Missing "ipv6 unicast-routing"; Fa0/0 = db8:3::201, Fa1/0 = db8:2::201; ipv6 route 2001:DB8:4::/64 2001:DB8:5::101' },
      { key: 'B', text: 'ipv6 unicast-routing enabled; Fa0/0 = db8:2::201, Fa1/0 = db8:3::201; ipv6 route 2001:DB8:4::/64 2001:DB8:3::301' },
      { key: 'C', text: 'Missing "ipv6 unicast-routing" (only ip cef / ipv6 cef); ipv6 route 2001:DB8:4::/64 2001:DB8:4::302' },
      { key: 'D', text: 'ipv6 unicast-routing enabled; ipv6 route 2001:DB8:4::/64 2001:DB8:2::201 (points to R17’s own interface)' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ให้ R17 route IPv6 และ ping WAN ของ R18 ได้ ต้องครบ 3 อย่าง:\n1) เปิด "ipv6 unicast-routing" (ไม่งั้น router จะไม่ forward IPv6 เลย)\n2) interface มี IPv6 address ถูกต้อง (Fa0/0=db8:2::201, Fa1/0=db8:3::201 ตามผัง)\n3) มี static route ไป 2001:db8:4::/64 (WAN ของ R18) โดยชี้ next-hop = R18 ที่ปลาย 2001:db8:3::301 (ขา Fa1/0 ของ R18)\n\n✅ ทำไม B ถูก: มี ipv6 unicast-routing + interface ถูก + route ไป db8:4::/64 ผ่าน next-hop 2001:db8:3::301 (R18) → ครบ ถูกทิศ\n\n❌ ทำไมข้ออื่นผิด:\nA. "ขาด ipv6 unicast-routing" (IPv6 forwarding ปิด) + interface สลับ address + next-hop ผิด\nC. ขาด ipv6 unicast-routing เช่นกัน (มีแค่ ip cef/ipv6 cef ไม่พอ) + next-hop ผิด\nD. next-hop 2001:db8:2::201 เป็น "ขาของ R17 เอง" → ชี้กลับตัวเอง ไปไม่ถึง R18\n\n📗 จำไว้สอบ: IPv6 routing ต้องเปิด "ipv6 unicast-routing" ก่อนเสมอ • next-hop = IP ของ "router ปลายทางถัดไป" ไม่ใช่ของตัวเอง',
  },
  {
    id: 433,
    kind: 'single',
    prompt: 'Which type of organization should use a collapsed-core architecture?',
    options: [
      { key: 'A', text: 'large and requires a flexible, scalable network design' },
      { key: 'B', text: 'large and must minimize downtime when hardware fails' },
      { key: 'C', text: 'small and needs to reduce networking costs currently' },
      { key: 'D', text: 'small but is expected to grow dramatically in the near future' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Collapsed core (two-tier) = ยุบชั้น core กับ distribution รวมเป็นชั้นเดียว → ใช้อุปกรณ์น้อยลง ประหยัดต้นทุน เหมาะกับองค์กร "เล็ก" ที่ไม่ต้องการ scale ใหญ่และอยากลดค่าใช้จ่าย\n\n✅ ทำไม C ถูก: องค์กรเล็กที่ต้องการลดต้นทุนเครือข่ายในตอนนี้ → collapsed core เหมาะสุด (ลงทุนน้อย)\n\n❌ ทำไมข้ออื่นผิด:\nA. องค์กรใหญ่ที่ต้องการยืดหยุ่น/ขยายได้ → ควรใช้ 3-tier (มี core แยก)\nB. องค์กรใหญ่เน้น downtime ต่ำ/redundancy → 3-tier ที่มี core สำรอง\nD. องค์กรที่คาดว่าจะโตเร็ว → ควรวางเป็น 3-tier ตั้งแต่แรกเพื่อรองรับการขยาย\n\n📗 จำไว้สอบ: collapsed core (2-tier) = เล็ก/ประหยัด | 3-tier = ใหญ่/ขยายได้/redundant',
  },
  {
    id: 434,
    kind: 'single',
    prompt: 'What is a capability of FTP in network management operations?',
    options: [
      { key: 'A', text: 'encrypts data before sending between data resources' },
      { key: 'B', text: 'devices are directly connected and use UDP to pass file information' },
      { key: 'C', text: 'uses separate control and data connections to move files between server and client' },
      { key: 'D', text: 'offers proprietary support at the session layer when transferring data' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — FTP ใช้สถาปัตยกรรม client-server และเปิด "สองการเชื่อมต่อแยกกัน":\n• Control connection (TCP 21) → ส่งคำสั่ง/สถานะ\n• Data connection (TCP 20 ในโหมด active) → ขนไฟล์จริง\n\n✅ ทำไม C ถูก: FTP แยก control กับ data connection ในการโอนไฟล์ระหว่าง server กับ client\n\n❌ ทำไมข้ออื่นผิด:\nA. FTP มาตรฐาน "ไม่เข้ารหัส" (clear-text) — การเข้ารหัสเป็นของ FTPS/SFTP\nB. FTP ใช้ "TCP" ไม่ใช่ UDP และไม่จำเป็นต้องต่อตรง\nD. FTP เป็นมาตรฐานเปิด ไม่ใช่ proprietary\n\n📗 จำไว้สอบ: FTP = TCP 20 (data) + 21 (control), แยกสองช่อง, clear-text (ไม่เข้ารหัส)',
  },
  {
    id: 435,
    kind: 'single',
    image: q435,
    prompt:
      'Refer to the exhibit. On R5 interface Gi0, these tasks must be completed: disable all neighbor discovery methods, then permit neighbor discovery, verify no dynamically learned neighbors, and display the IP address of R6’s Gi0 interface. Which configuration must be used?',
    options: [
      { key: 'A', text: 'int Gi0/1 / no cdp run / exit / lldp run / cdp enable / R5#sh cdp neighbor / R5#sh lldp neighbor' },
      { key: 'B', text: 'int Gi0/1 / no cdp enable / exit / no lldp run / cdp run / R5#sh cdp neighbor / R5#sh lldp neighbor' },
      { key: 'C', text: 'int Gi0/1 / no cdp enable / exit / no lldp run / cdp run / R5#sh cdp neighbor detail / R5#sh lldp neighbor' },
      { key: 'D', text: 'int Gi0/1 / no cdp enable / exit / lldp run / no cdp run / R5#sh cdp neighbor detail / R5#sh lldp neighbor' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ไล่ตามงานทีละข้อ:\n1) "ปิด neighbor discovery ทั้งหมดบน Gi0" → "no cdp enable" (ปิด CDP รายพอร์ต) + "no lldp run" (ปิด LLDP ทั้งเครื่อง)\n2) "อนุญาต neighbor discovery" → "cdp run" (เปิด CDP กลับที่ระดับ global)\n3) "ยืนยันไม่มี neighbor ที่เรียนรู้แบบ dynamic" + "แสดง IP ของ R6 Gi0" → "show cdp neighbor detail" (คำสั่ง detail จะโชว์ IP address ของเพื่อนบ้าน)\n\n✅ ทำไม C ถูก: no cdp enable + no lldp run (ปิดทั้งหมด) → cdp run (เปิดกลับ) → "show cdp neighbor detail" (เห็น IP ของ R6) + show lldp neighbor (ยืนยัน LLDP ว่าง)\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ "no cdp run" (ปิด CDP ทั้งเครื่อง) แล้วเปิด lldp + cdp enable → ไม่ตรงลำดับ และ show ไม่ใช่ detail\nB. เหมือน C แต่ใช้ "show cdp neighbor" (ไม่มี detail) → "ไม่เห็น IP" ของ R6 → ไม่ครบงาน\nD. เปิด lldp run (ขัดกับ "ปิดทั้งหมด") + no cdp run (ปิด CDP ที่เพิ่งจะใช้ดู neighbor)\n\n📗 จำไว้สอบ: อยากเห็น "IP address ของเพื่อนบ้าน" ต้องใช้ "show cdp neighbor detail" (ตัวปกติไม่โชว์ IP)',
  },
  {
    id: 436,
    kind: 'single',
    prompt: 'What is a function of a Layer 3 switch?',
    options: [
      { key: 'A', text: 'move frames between endpoints limited to IP addresses' },
      { key: 'B', text: 'transmit broadcast traffic when operating in Layer 3 mode exclusively' },
      { key: 'C', text: 'forward Ethernet frames between VLANs using only MAC addresses' },
      { key: 'D', text: 'flood broadcast traffic within a VLAN' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Layer 3 switch = สวิตช์ที่ทำ routing ได้ (มี SVI/routed port) → ส่งต่อทราฟฟิก "ระหว่าง VLAN/subnet" โดยตัดสินใจด้วย "IP address" (inter-VLAN routing) ด้วยความเร็วสูง\n\n✅ ทำไม A ถูก: L3 switch ส่งต่อระหว่างปลายทางโดยอิง IP address (routing) — ตัวเลือกที่ตรงที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nB. ไม่ได้ "transmit broadcast" เป็นหน้าที่หลัก และ routing ไม่ส่ง broadcast ข้าม subnet\nC. การ route ระหว่าง VLAN ใช้ "IP address" ไม่ใช่ "MAC address อย่างเดียว"\nD. flood broadcast ภายใน VLAN เป็นพฤติกรรม Layer 2 switching ปกติ ไม่ใช่จุดเด่นของ L3 switch\n\n📗 จำไว้สอบ: L3 switch = inter-VLAN routing ด้วย IP (SVI) เร็วระดับฮาร์ดแวร์',
  },
  {
    id: 437,
    kind: 'single',
    prompt: 'Which type of API allows SDN controllers to dynamically make changes to the network?',
    options: [
      { key: 'A', text: 'northbound API' },
      { key: 'B', text: 'REST API' },
      { key: 'C', text: 'SOAP API' },
      { key: 'D', text: 'southbound API' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม SDN:\n• Northbound API → controller คุยกับ "แอป/ผู้ดูแลด้านบน" (มักเป็น REST)\n• ⭐ Southbound API → controller คุยลงไป "สั่งอุปกรณ์ด้านล่าง" ให้เปลี่ยน forwarding table (เช่น OpenFlow, NETCONF) → นี่คือทางที่ controller ลงมือเปลี่ยนแปลงเครือข่ายจริง\n\n✅ ทำไม D ถูก: southbound API เป็นช่องทางที่ SDN controller ใช้ผลักการเปลี่ยนแปลงลงไปยังอุปกรณ์ (dynamic changes)\n\n❌ ทำไมข้ออื่นผิด:\nA. northbound คุยกับแอปด้านบน ไม่ได้ลงไปแก้ที่อุปกรณ์\nB. REST เป็นรูปแบบ API (มักใช้ทาง northbound) ไม่ใช่ "ทิศ" ที่สั่งอุปกรณ์\nC. SOAP เป็นโปรโตคอลรับส่งข้อความ ไม่ใช่ทิศ southbound ที่นิยามการสั่งอุปกรณ์\n\n📗 จำไว้สอบ: Southbound (OpenFlow/NETCONF) = สั่งอุปกรณ์ | Northbound (REST) = คุยกับแอป',
  },
  {
    id: 438,
    kind: 'single',
    image: q438,
    prompt: 'Refer to the exhibit. Which next-hop IP address does Router1 use for packets destined to host 10.10.13.158?',
    options: [
      { key: 'A', text: '10.10.10.5' },
      { key: 'B', text: '10.10.11.2' },
      { key: 'C', text: '10.10.12.2' },
      { key: 'D', text: '10.10.10.9' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A (10.10.10.5) แต่ผิดจากการคำนวณช่วง — คำตอบที่ถูกต้องคือ D (10.10.10.9)\n\n📘 แนวคิด — ใช้ Longest Prefix Match กับ 10.10.13.158\n\n🧮 ไล่ตรวจ:\n• 10.10.13.0/25 → .0–.127 → ❌\n• 10.10.13.128/28 → .128–.143 → ❌ (.158 > .143)\n• ⭐10.10.13.144/28 → .144–.159 → ✔ (.158 อยู่ในช่วงนี้) via 10.10.10.9, Gi0/2\n• 10.10.13.160/29 → .160–.167 → ❌ (.158 < .160)\n\n✅ ทำไม D ถูก: .158 ตกใน 10.10.13.144/28 → next-hop = 10.10.10.9\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.10.10.5 เป็น next-hop ของ 10.10.13.128/28 (.128–.143) และ 10.10.13.160/29 (.160–.167) — ไม่ครอบ .158\nB. 10.10.11.2 คือ gateway of last resort (default) — ใช้เมื่อไม่มี route เจาะจง แต่ที่นี่ .158 match /28 อยู่\nC. 10.10.12.2 เป็น next-hop ของ route 209.165.x (BGP) คนละปลายทาง\n\n📗 จำไว้สอบ: /28 block = 16 → .144/28 = .144–.159 • ต้องคำนวณช่วงให้แม่นก่อนดู next-hop',
  },
  {
    id: 439,
    kind: 'single',
    prompt:
      'A Cisco engineer must configure a single switch interface to (1) accept untagged frames and place them in VLAN 20, and (2) accept tagged frames in VLAN 30 when CDP detects a Cisco IP phone. Which command set must the engineer apply?',
    options: [
      { key: 'A', text: 'switchport mode dynamic desirable / switchport access vlan 20 / switchport trunk allowed vlan 30 / switchport voice vlan 30' },
      { key: 'B', text: 'switchport mode dynamic auto / switchport trunk native vlan 20 / switchport trunk allowed vlan 30 / switchport voice vlan 30' },
      { key: 'C', text: 'switchport mode access / switchport access vlan 20 / switchport voice vlan 30' },
      { key: 'D', text: 'switchport mode trunk / switchport access vlan 20 / switchport voice vlan 30' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — พอร์ตที่ต่อ IP phone (มี PC ต่อด้านหลัง) ตั้งเป็น "access port" ที่มี access VLAN (data) + voice VLAN:\n• untagged (จาก PC) → access VLAN 20\n• tagged voice (โทรศัพท์) → voice VLAN 30 โดยสวิตช์ใช้ CDP บอกโทรศัพท์ให้ tag เสียงด้วย VLAN 30\n\n✅ ทำไม C ถูก: mode access + access vlan 20 (untagged→20) + voice vlan 30 (tagged voice→30 เมื่อ CDP เจอโทรศัพท์) → ตรงทั้งสองเงื่อนไข\n\n❌ ทำไมข้ออื่นผิด:\nA. "dynamic desirable" = พยายามต่อรอง trunk (ไม่ใช่ access ที่โจทย์ต้องการ) และผสมคำสั่ง trunk เกิน\nB. "dynamic auto" + trunk native/allowed → เป็นการตั้ง trunk ไม่ใช่ access port + voice\nD. "mode trunk" ทำให้คำสั่ง access vlan ถูกละเว้น และไม่ตรงสถานการณ์ access + voice\n\n📗 จำไว้สอบ: PC(data) + phone(voice) บนพอร์ตเดียว = access port + "access vlan" (data) + "voice vlan" (เสียง)',
  },
  {
    id: 440,
    kind: 'single',
    image: q440,
    prompt:
      'Refer to the exhibit. An engineer is configuring the HO router. The Fa0/1 interface MAC address is C601.420F.0007 on subnet 2001:DB8:0:1::/64. Which IPv6 address configuration assigns a unique 64-bit (EUI-64) interface ID to the router’s Fa0/1?',
    options: [
      { key: 'A', text: 'ipv6 address 2001:DB8:0:1:C601:42FF:FE0F:7' },
      { key: 'B', text: 'ipv6 address 2001:DB8:0:1:C601:42FE:800F:7' },
      { key: 'C', text: 'ipv6 address 2001:DB8:0:1:FFFF:C601:420F:7' },
      { key: 'D', text: 'ipv6 address 2001:DB8:0:1:FE80:C601:420F:7' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — EUI-64 สร้าง interface ID 64 บิตจาก MAC 48 บิต โดย:\n1) แบ่ง MAC ครึ่งกลาง แล้วแทรก "FFFE" ตรงกลาง\n2) พลิกบิต U/L (บิตที่ 7 ของไบต์แรก)\n\n🧮 MAC C601.420F.0007 → C6-01-42 | 0F-00-07 → แทรก FFFE → C6-01-42-FF-FE-0F-00-07 → interface ID = C601:42FF:FE0F:0007\n(ในบรรดาตัวเลือก มีเพียง A ที่แทรก "FFFE" ถูกตำแหน่ง)\n\n✅ ทำไม A ถูก: 2001:DB8:0:1:C601:42FF:FE0F:7 มี "FF:FE" คั่นกลาง MAC ถูกต้องตาม EUI-64\n⚠️ ข้อสังเกต: ตามหลักเป๊ะ ๆ ต้องพลิกบิต U/L ทำให้ C6→C4 (เป็น C401:42FF:FE0F:7) แต่ตัวเลือกไม่มี C4 → A เป็นคำตอบที่ใกล้ที่สุดและถูกในส่วนการแทรก FFFE (ข้อสอบชุดนี้ไม่พลิกบิต)\n\n❌ ทำไมข้ออื่นผิด:\nB. ตัวเลขกลาง (42FE:800F) ไม่ใช่ผลของการแทรก FFFE\nC. วาง "FFFF" (ไม่ใช่ FFFE) และตำแหน่งผิด\nD. ใส่ "FE80" (นั่นคือ prefix ของ link-local ไม่ใช่ EUI-64 กลาง MAC)\n\n📗 จำไว้สอบ: EUI-64 = แยก MAC กลาง แทรก "FFFE" + พลิกบิต U/L (บิต 7 ของไบต์แรก)',
  },
  {
    id: 441,
    kind: 'single',
    prompt: 'Which WLC management connection type is vulnerable to man-in-the-middle attacks?',
    options: [
      { key: 'A', text: 'SSH' },
      { key: 'B', text: 'HTTPS' },
      { key: 'C', text: 'Telnet' },
      { key: 'D', text: 'console' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ช่องทางที่ "ไม่เข้ารหัส (clear-text)" เสี่ยงถูกดักกลางทาง (MITM) มากที่สุด:\n• Telnet → clear-text ทั้งรหัสและข้อมูล → เสี่ยง MITM/ดักรหัส ✔\n• SSH, HTTPS → เข้ารหัส (ปลอดภัยกว่า)\n• console → ต่อสายตรงกับตัวอุปกรณ์ (physical) → ไม่ใช่ช่องทางเครือข่ายที่ MITM ดักได้ทั่วไป\n\n✅ ทำไม C ถูก: Telnet ส่งทุกอย่างเป็น clear-text ผ่านเครือข่าย → ถูก MITM ดัก/แก้ไขได้ง่าย\n\n❌ ทำไมข้ออื่นผิด:\nA/B. SSH และ HTTPS เข้ารหัส → ทน MITM ได้ดีกว่ามาก\nD. console เป็นการต่อสายตรง (ต้องเข้าถึงตัวเครื่องจริง) ไม่ใช่เป้าหมาย MITM บนเครือข่าย\n\n📗 จำไว้สอบ: clear-text = Telnet/HTTP → เสี่ยง MITM • ใช้ SSH/HTTPS แทน',
  },
  {
    id: 442,
    kind: 'single',
    prompt: 'Which action is taken by the data plane within a network device?',
    options: [
      { key: 'A', text: 'forwards traffic to the next hop' },
      { key: 'B', text: 'constructs a routing table based on a routing protocol' },
      { key: 'C', text: 'provides CLI access to the network device' },
      { key: 'D', text: 'looks up an egress interface in the forwarding information base' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Data plane (forwarding plane) มีหน้าที่ "ส่งต่อทราฟฟิกจริง" ผ่านอุปกรณ์ไปยัง next hop ด้วยความเร็วสูง (ใช้ FIB/CEF ที่ control plane เตรียมไว้)\n\n✅ ทำไม A ถูก: การ forward ทราฟฟิกไปยัง next hop คือการกระทำของ data plane โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nB. สร้าง routing table จาก routing protocol = control plane\nC. CLI access = management plane\nD. การ "lookup egress ใน FIB" เป็นส่วนหนึ่งของกระบวนการ forward ก็จริง แต่ "การกระทำหลัก" ที่โจทย์ต้องการคือ "forward ไป next hop" (A ครอบคลุมและตรงกว่าในเชิงบทบาท data plane)\n\n📗 จำไว้สอบ: Data plane = forward ทราฟฟิก (ใช้ FIB) | Control plane = สร้างตาราง (routing protocol) | Management = CLI/SNMP',
  },
  {
    id: 443,
    kind: 'single',
    prompt: 'What is a function of a Next-Generation IPS?',
    options: [
      { key: 'A', text: 'makes forwarding decisions based on learned MAC addresses' },
      { key: 'B', text: 'serves as a controller within a controller-based network' },
      { key: 'C', text: 'integrates with a RADIUS server to enforce Layer 2 device authentication rules' },
      { key: 'D', text: 'correlates user activity with network events' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Next-Generation IPS (NGIPS) เหนือกว่า IPS แบบเดิม (ที่จับเฉพาะ signature): มันเพิ่ม context awareness เช่น รู้ว่าใคร (user identity), แอปอะไร (application visibility), และ "เชื่อมโยง (correlate) พฤติกรรมผู้ใช้กับเหตุการณ์ในเครือข่าย" เพื่อตรวจจับภัยได้แม่นและลด false positive\n\n✅ ทำไม D ถูก: NGIPS สหสัมพันธ์กิจกรรมผู้ใช้กับ network events เพื่อประเมินภัยคุกคามอย่างมีบริบท\n\n❌ ทำไมข้ออื่นผิด:\nA. ตัดสิน forward จาก MAC = สวิตช์ (Layer 2)\nB. เป็น controller = SDN controller ไม่ใช่ IPS\nC. authenticate อุปกรณ์ผ่าน RADIUS = 802.1X/NAC ไม่ใช่หน้าที่ IPS\n\n📗 จำไว้สอบ: NGIPS = signature + context (user/app awareness) + correlate เหตุการณ์',
  },
  {
    id: 444,
    kind: 'single',
    prompt: 'Which characteristic differentiates the concept of authentication from authorization and accounting?',
    options: [
      { key: 'A', text: 'user-activity logging' },
      { key: 'B', text: 'service limitations' },
      { key: 'C', text: 'consumption-based billing' },
      { key: 'D', text: 'identity verification' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แยกบทบาท AAA:\n• Authentication → "ยืนยันตัวตน (identity verification)" — คุณเป็นใคร\n• Authorization → กำหนดสิทธิ์/ข้อจำกัดบริการ (service limitations) — ทำอะไรได้\n• Accounting → บันทึกกิจกรรม (user-activity logging) และใช้คิดค่าบริการ (consumption-based billing)\n\n✅ ทำไม D ถูก: สิ่งที่ทำให้ authentication ต่างจากอีกสองตัวคือ "การยืนยันตัวตน" (identity verification)\n\n❌ ทำไมข้ออื่นผิด:\nA. user-activity logging = accounting\nB. service limitations = authorization\nC. consumption-based billing = accounting\n\n📗 จำไว้สอบ: Authentication=ตัวตน | Authorization=สิทธิ์/ข้อจำกัด | Accounting=บันทึก/คิดเงิน',
  },
  {
    id: 445,
    kind: 'single',
    prompt:
      'Which value is the unique identifier that an access point uses to establish and maintain wireless connectivity to wireless network devices?',
    options: [
      { key: 'A', text: 'VLAN ID' },
      { key: 'B', text: 'SSID' },
      { key: 'C', text: 'RFID' },
      { key: 'D', text: 'WLAN ID' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — SSID (Service Set Identifier) คือ "ชื่อ/ตัวระบุ" ของเครือข่ายไร้สายที่ AP ประกาศออกไป client ใช้ SSID นี้ในการเลือกและคงการเชื่อมต่อกับ WLAN ที่ถูกต้อง\n\n✅ ทำไม B ถูก: SSID เป็นตัวระบุที่ AP ใช้สร้างและรักษาการเชื่อมต่อไร้สายกับอุปกรณ์ client\n\n❌ ทำไมข้ออื่นผิด:\nA. VLAN ID = ระบุ VLAN บนเครือข่ายมีสาย ไม่ใช่ตัวระบุการเชื่อมต่อไร้สาย\nC. RFID = เทคโนโลยีป้ายระบุวัตถุด้วยคลื่นวิทยุ คนละเรื่อง\nD. WLAN ID = หมายเลข index ของโปรไฟล์ WLAN บน WLC (ใช้ภายใน) ไม่ใช่สิ่งที่ client ใช้เชื่อมต่อ\n\n📗 จำไว้สอบ: ตัวระบุที่ client ใช้เชื่อม Wi-Fi = SSID (ชื่อเครือข่าย)',
  },
  {
    id: 446,
    kind: 'single',
    image: q420,
    prompt:
      'An engineer is configuring remote access to a router from IP subnet 10.139.58.0/28. The domain name, crypto keys, and SSH have been configured. Which configuration enables the traffic on the destination router?',
    options: [
      { key: 'A', text: 'interface Fa0/0 ip address 10.122.49.1 255.255.255.240 / ip access-group 120 in ; ip access-list extended 120 permit tcp 10.139.58.0 255.255.255.248 any eq 22' },
      { key: 'B', text: 'interface Fa0/0 ip address 10.122.49.1 255.255.255.252 / ip access-group 110 in ; ip access-list extended 110 permit tcp 10.139.58.0 0.0.0.15 host 10.122.49.1 eq 22' },
      { key: 'C', text: 'interface Fa0/0 ip address 10.122.49.1 255.255.255.248 / ip access-group 10 in ; ip access-list standard 10 permit udp 10.139.58.0 0.0.0.7 host 10.122.49.1 eq 22' },
      { key: 'D', text: 'interface Fa0/0 ip address 10.122.49.1 255.255.255.252 / ip access-group 105 in ; ip access-list standard 105 permit tcp 10.139.58.0 0.0.0.7 eq 22 host 10.122.49.1' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — อนุญาต SSH (TCP 22) เข้าเราเตอร์จาก subnet 10.139.58.0/28 ต้องใช้ "extended ACL" (เพราะต้องระบุทั้งต้นทาง ปลายทาง และพอร์ต) และ wildcard ของ /28 = 0.0.0.15\n\n✅ ทำไม B ถูก:\n• "ip access-list extended 110" → extended (ระบุ dst + port ได้)\n• "permit tcp 10.139.58.0 0.0.0.15 host 10.122.49.1 eq 22" → tcp/22 (SSH) จาก /28 ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ "255.255.255.248" เป็น wildcard (ผิดรูปแบบ ต้องใช้ 0.0.0.15) และ mask ขา interface /28 ไม่สอดคล้อง\nC. เป็น "standard ACL" ที่ระบุ udp/port ไม่ได้ (standard match ได้แค่ source) และ SSH ใช้ TCP ไม่ใช่ UDP\nD. เรียก "standard 105" แต่ใส่ tcp/dst/port (standard ทำไม่ได้) → รูปแบบผิด\n\n📗 จำไว้สอบ: กรอง SSH (ต้นทาง+ปลายทาง+พอร์ต) ต้องใช้ extended ACL • /28 wildcard = 0.0.0.15 • SSH = TCP 22',
  },
  {
    id: 447,
    kind: 'single',
    prompt: 'Which QoS per-hop behavior changes the value of the ToS field in the IPv4 packet header?',
    options: [
      { key: 'A', text: 'shaping' },
      { key: 'B', text: 'classification' },
      { key: 'C', text: 'policing' },
      { key: 'D', text: 'marking' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — QoS per-hop behaviors:\n• Classification → "แยกแยะ/จัดกลุ่ม" ทราฟฟิก (ยังไม่แก้ header)\n• Marking → "เขียนค่า" ลง header เช่น DSCP/IP Precedence ในฟิลด์ ToS ของ IPv4 → นี่คือตัวที่เปลี่ยนค่า ToS\n• Shaping/Policing → จัดการอัตราส่ง (buffer หรือ drop) ไม่ได้แก้ค่าใน ToS โดยตรง\n\n✅ ทำไม D ถูก: "marking" เป็น PHB ที่เขียน/เปลี่ยนค่าในฟิลด์ ToS (DSCP) ของ IPv4 header\n\n❌ ทำไมข้ออื่นผิด:\nA. shaping = หน่วง/บัฟเฟอร์ให้อยู่ในอัตราที่กำหนด (ไม่แก้ ToS)\nB. classification = แค่จำแนกทราฟฟิก ไม่ได้เขียนค่าลง header\nC. policing = ตรวจอัตรา เกินแล้ว drop/re-mark (ตัว re-mark ก็คือ marking) แต่ "การเปลี่ยนค่า ToS" คือ marking โดยตรง\n\n📗 จำไว้สอบ: เปลี่ยนค่า DSCP/ToS = Marking | classify=แยก, shape=หน่วง, police=จำกัด/ทิ้ง',
  },
  {
    id: 448,
    kind: 'single',
    image: q448,
    prompt:
      'Refer to the exhibit. During an outage, "show ip route 10.1.1.10" returns "% Network not in table". Normally 10.1.1.0/24 is learned via OSPF (distance 110) with next-hop 172.16.2.2 on Gi0/0. Which route must be configured on R1 so that OSPF routing is used when OSPF is up, but the server (10.1.1.10) is still reachable when OSPF goes down?',
    options: [
      { key: 'A', text: 'ip route 10.1.1.10 255.255.255.255 172.16.2.2 100' },
      { key: 'B', text: 'ip route 10.1.1.0 255.255.255.0 gi0 125' },
      { key: 'C', text: 'ip route 10.1.1.0 255.255.255.0 172.16.2.2 100' },
      { key: 'D', text: 'ip route 10.1.1.10 255.255.255.255 gi0/0 125' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ต้องการ "floating static route": static ที่มี AD "สูงกว่า" OSPF (110) เพื่อให้ซ่อนไว้ตอน OSPF ทำงาน และโผล่มาแทนเมื่อ OSPF ล่ม\n\n🧮 เทียบ AD:\n• OSPF = 110\n• static ที่จะเป็น backup ต้อง AD > 110 (เช่น 125)\n→ ตัวที่ AD 100 (< 110) จะ "แย่ง" OSPF ตลอดเวลา (ผิดโจทย์)\n\n✅ ทำไม D ถูก: "ip route 10.1.1.10 255.255.255.255 gi0/0 125" → floating static (AD 125 > 110) ชี้ไปหา server → OSPF ถูกใช้ตอนปกติ, static เข้ามาแทนเมื่อ OSPF หาย\n\n❌ ทำไมข้ออื่นผิด:\nA. AD 100 < 110 → static จะชนะ OSPF ตลอด (OSPF ไม่ได้ถูกใช้ตอนปกติ) → ผิดโจทย์\nC. AD 100 < 110 เช่นกัน → static แทน OSPF ตลอดเวลา\nB. AD 125 (floating ถูก) แต่ใช้ egress interface "gi0" ซึ่งพิมพ์ไม่ครบ/ไม่ตรงชื่อ (Gi0/0) — ตัวเลือก D ระบุ gi0/0 ถูกต้องกว่า\n\n📗 จำไว้สอบ: backup ให้ dynamic route = floating static (AD สูงกว่าเส้นหลัก เช่น > 110 สำหรับ OSPF)',
  },
  {
    id: 449,
    kind: 'drag',
    image: q449,
    prompt:
      'Drag and drop the statements about networking from the left onto the corresponding networking types (Traditional Networking / Controller-Based Networking) on the right.',
    categories: [
      {
        name: 'Traditional Networking',
        items: [
          'New devices are configured using the physical infrastructure.',
          'This type requires a distributed control plane.',
        ],
      },
      {
        name: 'Controller-Based Networking',
        items: [
          'This type allows better control over how networks work and how networks are configured.',
          'This type enables networks to integrate with applications through APIs.',
          'This type provisions resources from a centralized location.',
        ],
      },
    ],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับสลับข้างผิด (จับ "distributed control plane" ไปฝั่ง controller-based และ "centralized" ไปฝั่ง traditional) — ที่ถูกต้องเป็นดังนี้\n\n📘 แนวคิด:\n🔹 Traditional Networking (กระจาย/ทีละกล่อง):\n• New devices are configured using the physical infrastructure → คอนฟิกที่ตัวอุปกรณ์จริงทีละเครื่อง\n• requires a distributed control plane → control plane อยู่กระจายในทุกอุปกรณ์\n\n⭐ Controller-Based Networking (รวมศูนย์/SDN):\n• allows better control over how networks work → คุมภาพรวมได้ดีกว่าจากศูนย์กลาง\n• enables integration with applications through APIs → เชื่อมกับแอปผ่าน API (north/southbound)\n• provisions resources from a centralized location → จัดสรรทรัพยากรจากจุดศูนย์กลาง\n\n📗 จำไว้สอบ: Traditional = distributed control plane + ทีละกล่อง | Controller-based = centralized + API + คุมภาพรวม',
  },
  {
    id: 450,
    kind: 'single',
    image: q450,
    prompt:
      'Refer to the exhibit. Users need to connect to the wireless network with IEEE 802.11r-compatible devices, and the connection must be maintained as users roam between floors. The WLAN uses WPA2 with PSK enabled. What must be the configuration of the connection?',
    options: [
      { key: 'A', text: 'Select the WPA Policy option with the CCKM option.' },
      { key: 'B', text: 'Disable AES encryption.' },
      { key: 'C', text: 'Enable Fast Transition and select the FT 802.1x option.' },
      { key: 'D', text: 'Enable Fast Transition and select the FT PSK option.' },
    ],
    correct: ['D'],
    explanation:
      '🔍 อ่าน exhibit: WPA2 Policy + AES เปิดอยู่ และ Authentication Key Management เลือก "PSK" (ไม่ใช่ 802.1X)\n\n📘 แนวคิด — 802.11r = "Fast Transition (FT)" ช่วยให้ roaming ระหว่าง AP เร็วขึ้น (คงการเชื่อมต่อขณะเดินข้ามชั้น). วิธี key management ของ FT ต้อง "เข้าคู่" กับที่ WLAN ใช้:\n• ถ้าใช้ PSK → เลือก "FT PSK"\n• ถ้าใช้ 802.1X (RADIUS) → เลือก "FT 802.1x"\nโจทย์ระบุ PSK → ต้อง FT PSK\n\n✅ ทำไม D ถูก: เปิด Fast Transition และเลือก "FT PSK" ให้ตรงกับ WPA2-PSK ที่ใช้อยู่ → 802.11r roaming ทำงานและคงการเชื่อมต่อ\n\n❌ ทำไมข้ออื่นผิด:\nA. CCKM เป็น fast-roaming ของ Cisco (CCX) ไม่ใช่ 802.11r และ WPA Policy ไม่ตรงโจทย์\nB. ปิด AES จะลดความปลอดภัย และไม่เกี่ยวกับ fast roaming\nC. FT 802.1x ใช้กับ WLAN ที่ auth แบบ 802.1X/RADIUS — แต่ที่นี่เป็น PSK\n\n📗 จำไว้สอบ: 802.11r = Fast Transition • เลือก FT ให้ตรง auth: PSK→FT PSK, 802.1X→FT 802.1x',
  },
  {
    id: 451,
    kind: 'single',
    image: q451,
    prompt:
      'Refer to the exhibit. The WAN-link interface shows 3,612,699 input errors / 3,612,699 CRC, only 67 broadcasts received, and 0 collisions. What is a reason for poor performance on the network interface?',
    options: [
      { key: 'A', text: 'The interface is receiving excessive broadcast traffic.' },
      { key: 'B', text: 'The cable connection between the two devices is faulty.' },
      { key: 'C', text: 'The interface is operating at a different speed than the connected device.' },
      { key: 'D', text: 'The bandwidth setting of the interface is misconfigured.' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A (broadcast มากเกิน) แต่ผิด — มี broadcast แค่ 67 (น้อยมาก) ตัวชี้ปัญหาจริงคือ CRC error จำนวนมหาศาล คำตอบที่ถูกต้องคือ B\n\n🔍 อ่านค่าจาก exhibit:\n• 3,612,699 input errors, 3,612,699 CRC → ทุก input error เป็น CRC ล้วน ๆ\n• Received 67 broadcasts → น้อยมาก ไม่ใช่ broadcast storm\n• 0 collisions, 0 late collision → ไม่ใช่ duplex/collision\n\n📘 แนวคิด — CRC error สูง ๆ = เฟรมมาถึงแล้ว checksum ไม่ตรง เกิดจากปัญหา "ชั้นกายภาพ": สายชำรุด/หลวม, ตัวเชื่อมต่อเสีย, สัญญาณรบกวน (EMI), หรือ transceiver เสีย\n\n✅ ทำไม B ถูก: CRC error จำนวนมากบ่งชี้สายสัญญาณ/การเชื่อมต่อทางกายภาพมีปัญหา (faulty cable)\n\n❌ ทำไมข้ออื่นผิด:\nA. broadcast = 67 เท่านั้น ไม่ใช่ปริมาณที่ทำให้ช้า\nC. speed mismatch มักทำให้ลิงก์ไม่ขึ้น (down) หรือ runts ไม่ใช่ CRC ล้วน — และลิงก์นี้ up 1000Mbps ปกติ\nD. bandwidth (BW) เป็นค่าที่ใช้คำนวณ metric เท่านั้น ไม่ทำให้เกิด CRC/ช้าจริง\n\n📗 จำไว้สอบ: CRC errors เยอะ = ปัญหาสาย/ฟิสิคัล | late collision = duplex mismatch | runts/giants = เฟรมผิดขนาด',
  },
  {
    id: 452,
    kind: 'single',
    image: q452,
    prompt:
      'Refer to the exhibit. A network engineer must update Switch2 so that it sends LLDP packets every minute and the information sent via LLDP is refreshed (held) for 3 minutes. Which configuration must the engineer apply?',
    options: [
      { key: 'A', text: 'lldp timer 60 / lldp holdtime 180' },
      { key: 'B', text: 'lldp timer 60 / lldp tlv-select 180' },
      { key: 'C', text: 'lldp timer 1 / lldp holdtime 3' },
      { key: 'D', text: 'lldp timer 1 / lldp tlv-select 3' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ค่า LLDP timer/holdtime ตั้งเป็น "วินาที":\n• lldp timer <วินาที> → ทุกกี่วินาทีส่ง LLDP advertisement (default 30)\n• lldp holdtime <วินาที> → เพื่อนบ้านเก็บข้อมูลไว้กี่วินาทีก่อนหมดอายุ (default 120)\n\n🧮 แปลงหน่วย:\n• ส่งทุก 1 นาที = 60 วินาที → lldp timer 60\n• refresh/ค้างไว้ 3 นาที = 180 วินาที → lldp holdtime 180\n\n✅ ทำไม A ถูก: lldp timer 60 + lldp holdtime 180 ตรงตามโจทย์ (หน่วยเป็นวินาที)\n\n❌ ทำไมข้ออื่นผิด:\nB. tlv-select ใช้เลือกชนิด TLV ที่จะส่ง ไม่ใช่ค่า holdtime\nC. timer 1 = ทุก 1 วินาที (ผิด ต้อง 60), holdtime 3 = 3 วินาที (ผิด ต้อง 180)\nD. timer 1 + tlv-select 3 ผิดทั้งคู่\n\n📗 จำไว้สอบ: LLDP timer/holdtime เป็น "วินาที" — 1 นาที = 60, 3 นาที = 180',
  },
  {
    id: 453,
    kind: 'single',
    image: q453,
    prompt:
      'Refer to the exhibit. VLAN 100 (10.10.10.0/24) users can reach the Internet via PAT overload. The ACL NAT_INSIDE_RANGES permits only 10.10.10.0. VLAN 200 = 10.10.20.0/24. Which action must the administrator take to establish Internet connectivity for users in VLAN 200?',
    options: [
      { key: 'A', text: 'Define a NAT pool on the router.' },
      { key: 'B', text: 'Configure static NAT translations for VLAN 200.' },
      { key: 'C', text: 'Configure the ip nat outside command on another interface for VLAN 200.' },
      { key: 'D', text: 'Update the NAT_INSIDE_RANGES ACL to include the VLAN 200 subnet.' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B (static NAT) แต่ไม่เข้ากับดีไซน์ PAT overload ที่มีอยู่ คำตอบที่ถูกต้องคือ D\n\n🔍 อ่าน config: "ip nat inside source list NAT_INSIDE_RANGES interface Gi0/0 overload" และ ACL อนุญาตแค่ "permit 10.10.10.0 0.0.0.255" (VLAN 100). VLAN 200 (10.10.20.0) ไม่อยู่ใน ACL → ไม่ถูกแปลง → ออกเน็ตไม่ได้\n\n📘 แนวคิด — NAT จะแปลงเฉพาะ address ที่ ACL อนุญาต. ตอนนี้ ACL match แค่ VLAN 100 → ต้อง "เพิ่ม 10.10.20.0 0.0.0.255" เข้า ACL เดิม แล้ว VLAN 200 จะใช้ PAT overload ตัวเดียวกันออกเน็ตได้ทันที\n\n✅ ทำไม D ถูก: แค่อัปเดต ACL ให้ครอบ VLAN 200 (permit 10.10.20.0 0.0.0.255) → เข้ากับ overload ที่มีอยู่ ง่ายและถูกต้องที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. NAT pool ไม่จำเป็น เพราะใช้ overload ผ่าน interface Gi0/0 อยู่แล้ว\nB. static NAT ต้องมี public IP ต่อโฮสต์ ไม่เข้ากับดีไซน์ PAT และเปลืองมาก\nC. ip nat outside มีที่ Gi0/0 อยู่แล้ว — VLAN 200 เป็นฝั่ง inside ไม่ใช่ outside\n\n📗 จำไว้สอบ: PAT ไม่ทำงานกับ subnet ที่ไม่มีใน ACL → เพิ่ม subnet เข้า ACL ที่ผูกกับ "ip nat inside source list"',
  },
  {
    id: 454,
    kind: 'single',
    image: q454,
    prompt:
      'Refer to the exhibit. Each route is present in the routing table. Which interface is used to forward traffic with a destination IP of 10.1.1.19?\n\nRIP    10.1.1.16/28 [120/5] via F0/0\nOSPF   10.1.1.0/24 [110/30] via F0/1\nOSPF   10.1.1.0/24 [110/40] via F0/2\nEIGRP  10.1.0.0/26 [90/20] via F0/3\nEIGRP  10.0.0.0/8 [90/133] via F0/4',
    options: [
      { key: 'A', text: 'F0/1' },
      { key: 'B', text: 'F0/0' },
      { key: 'C', text: 'F0/3' },
      { key: 'D', text: 'F0/4' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ใช้ Longest Prefix Match ก่อนเสมอ (prefix ยาวสุดชนะ ไม่สน AD/metric เมื่อ prefix ต่างกัน)\n\n🧮 ไล่ตรวจปลายทาง 10.1.1.19:\n• 10.1.1.16/28 → .16–.31 → ✔ ครอบ .19 (prefix /28 ยาวสุด) via F0/0\n• 10.1.1.0/24 → ครอบ แต่ /24 สั้นกว่า\n• 10.1.0.0/26 → 10.1.0.0–10.1.0.63 → ❌ (.1.19 อยู่คนละ third octet, ไม่ครอบ 10.1.1.x)\n• 10.0.0.0/8 → ครอบแต่สั้นสุด\n→ ยาวสุด = 10.1.1.16/28 via F0/0\n\n✅ ทำไม B ถูก: /28 (10.1.1.16/28) เป็น prefix ยาวสุดที่ครอบ .19 → forward ออก F0/0\n\n❌ ทำไมข้ออื่นผิด:\nA. F0/1 = 10.1.1.0/24 (สั้นกว่า /28)\nC. F0/3 = 10.1.0.0/26 ไม่ครอบ 10.1.1.19\nD. F0/4 = 10.0.0.0/8 สั้นสุด\n\n📗 จำไว้สอบ: Longest Prefix Match มาก่อน AD/metric เสมอ • /28 block = 16 → .16–.31',
  },
  {
    id: 455,
    kind: 'single',
    image: q455,
    prompt:
      'Refer to the exhibit. An engineer is configuring an EtherChannel using LACP between Switch1 and Switch2. Which configuration must be applied so that only Switch1 sends LACP initiation packets?',
    options: [
      { key: 'A', text: 'Switch1: channel-group 1 mode on / Switch2: channel-group 1 mode passive' },
      { key: 'B', text: 'Switch1: channel-group 1 mode passive / Switch2: channel-group 1 mode active' },
      { key: 'C', text: 'Switch1: channel-group 1 mode active / Switch2: channel-group 1 mode passive' },
      { key: 'D', text: 'Switch1: channel-group 1 mode on / Switch2: channel-group 1 mode active' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โหมด LACP:\n• active → "ส่ง LACPDU เชิงรุก" (เริ่มเจรจา/initiation)\n• passive → "รอ" ให้อีกฝ่ายเริ่มก่อน (ไม่ส่ง initiation เอง)\nการจับคู่: active+passive = ✔ เกิด channel | passive+passive = ❌ ไม่เกิด\n\n✅ ทำไม C ถูก: โจทย์ต้องการให้ "เฉพาะ Switch1" ส่ง initiation → Switch1 = active (ส่ง), Switch2 = passive (รอ) → เกิด EtherChannel และมีแค่ Switch1 ที่เริ่ม\n\n❌ ทำไมข้ออื่นผิด:\nA. mode on (static) ไม่ใช้ LACP → ไม่ส่ง LACPDU เลย และผสม on+passive จะไม่เกิด channel\nB. Switch1 passive + Switch2 active → กลายเป็น Switch2 ที่ส่ง initiation (ตรงข้ามโจทย์)\nD. on + active ผสมโหมดผิด (on ไม่เจรจา LACP) → ไม่ฟอร์ม\n\n📗 จำไว้สอบ: active = ส่ง LACPDU เริ่มก่อน | passive = รอ • ต้องมีอย่างน้อยหนึ่งฝั่งเป็น active',
  },
  {
    id: 456,
    kind: 'single',
    image: q456,
    prompt:
      'Refer to the exhibit. R1 learns all routes via OSPF. Which command configures a backup (floating) static route on R1 to reach the 192.168.20.0 network via R3 (192.168.30.2)?',
    options: [
      { key: 'A', text: 'ip route 192.168.20.0 255.255.0.0 192.168.30.2' },
      { key: 'B', text: 'ip route 192.168.20.0 255.255.255.0 192.168.30.2 90' },
      { key: 'C', text: 'ip route 192.168.20.0 255.255.255.0 192.168.30.2 111' },
      { key: 'D', text: 'ip route 192.168.20.0 255.255.255.0 192.168.30.2' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — "backup/floating static route" ต้องตั้ง AD "สูงกว่า" เส้นทางหลัก (OSPF = 110) เพื่อให้ซ่อนไว้ตอน OSPF ทำงาน และเข้ามาแทนเมื่อ OSPF ล่ม\n\n🧮 เทียบ AD:\n• OSPF = 110 → floating ต้อง > 110 (เช่น 111)\n• static ปกติ (ไม่ใส่เลข) = AD 1 → จะแย่ง OSPF ตลอด (ผิด)\n\n✅ ทำไม C ถูก: "...192.168.30.2 111" → AD 111 > 110 → เป็น floating route ที่รอจนกว่า OSPF จะหาย และ mask /24 ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nA. mask 255.255.0.0 (/16) ผิด (ควร /24) และไม่ใส่ AD\nB. AD 90 < 110 → static จะชนะ OSPF ตลอด (ไม่ใช่ backup)\nD. ไม่ใส่ AD = 1 → แทน OSPF ทันที (ไม่ใช่ backup)\n\n📗 จำไว้สอบ: floating static = AD สูงกว่าเส้นหลัก (OSPF 110 → ใช้ 111 ขึ้นไป)',
  },
  {
    id: 457,
    kind: 'single',
    prompt: 'What is the difference between IPv6 unicast and anycast addressing?',
    options: [
      { key: 'A', text: 'IPv6 anycast nodes must be explicitly configured to recognize the anycast address, but IPv6 unicast nodes require no special configuration.' },
      { key: 'B', text: 'IPv6 unicast nodes must be explicitly configured to recognize the unicast address, but IPv6 anycast nodes require no special configuration.' },
      { key: 'C', text: 'An individual IPv6 unicast address is supported on a single interface on one node, but an IPv6 anycast address is assigned to a group of interfaces on multiple nodes.' },
      { key: 'D', text: 'Unlike an IPv6 anycast address, an IPv6 unicast address is assigned to a group of interfaces on multiple nodes.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด:\n• Unicast → หนึ่ง address ผูกกับ "อินเทอร์เฟซเดียว บนอุปกรณ์เดียว" (one-to-one)\n• Anycast → address เดียวกันถูกกำหนดให้ "หลายอินเทอร์เฟซ/หลายอุปกรณ์" พร้อมกัน แพ็กเก็ตจะวิ่งไปหาตัวที่ "ใกล้ที่สุด" (one-to-nearest) เหมาะกับ DNS/CDN\n\n✅ ทำไม C ถูก: อธิบายถูก — unicast = 1 interface/1 node, anycast = กลุ่ม interface บนหลาย node\n\n❌ ทำไมข้ออื่นผิด:\nA/B. สลับ/ผิดเรื่อง "ต้องคอนฟิกให้จำ address" — ประเด็นหลักคือ "จำนวนอุปกรณ์ที่ใช้ address" ไม่ใช่การคอนฟิกจดจำ\nD. กลับข้าง — "unicast" ต่างหากที่ผูกกับ interface เดียว ส่วน anycast คือกลุ่มหลาย node\n\n📗 จำไว้สอบ: unicast = one-to-one | anycast = one-to-nearest (address เดียว หลาย node) | multicast = one-to-many',
  },
  {
    id: 458,
    kind: 'single',
    image: q458,
    prompt:
      'Refer to the exhibit. Router R4 uses a supernet to accommodate 380 users on subnet 10.7.54.0/x (the 380 already includes 30% future growth). Which configuration correctly verifies the IP subnet on R4?',
    options: [
      { key: 'A', text: 'Subnet 10.7.54.0 / mask 255.255.254.0 / broadcast 10.7.54.255 / usable 10.7.54.1 - 10.7.55.254' },
      { key: 'B', text: 'Subnet 10.7.54.0 / mask 255.255.254.0 / broadcast 10.7.55.255 / usable 10.7.54.1 - 10.7.55.254' },
      { key: 'C', text: 'Subnet 10.7.54.0 / mask 255.255.128.0 / broadcast 10.7.55.255 / usable 10.7.54.1 - 10.7.55.254' },
      { key: 'D', text: 'Subnet 10.7.54.0 / mask 255.255.255.0 / broadcast 10.7.54.255 / usable 10.7.54.1 - 10.7.55.254' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — หา subnet ที่รองรับ 380 hosts:\n• /24 = 254 hosts → ❌ ไม่พอ\n• /23 (255.255.254.0) = 2^9 − 2 = 510 hosts → ✔ พอสำหรับ 380 และประหยัดสุด\n\n🧮 subnet 10.7.54.0/23:\n• ครอบคลุม 10.7.54.0 – 10.7.55.255\n• broadcast = 10.7.55.255 (ตัวสุดท้ายของบล็อก)\n• usable = 10.7.54.1 – 10.7.55.254\n\n✅ ทำไม B ถูก: mask /23, broadcast 10.7.55.255, usable .54.1–.55.254 → ถูกทุกค่า\n\n❌ ทำไมข้ออื่นผิด:\nA. broadcast เขียน 10.7.54.255 (ผิด — /23 broadcast ต้องเป็น .55.255) แม้ mask จะ /23\nC. mask 255.255.128.0 (/17) ใหญ่เกินไปมหาศาล — ไม่ใช่ /23\nD. mask 255.255.255.0 (/24) = 254 hosts ไม่พอ 380 และ usable range ไม่สอดคล้อง\n\n📗 จำไว้สอบ: /23 = 510 hosts, ครอบสอง /24 → broadcast ลงท้าย .x+1.255',
  },
  {
    id: 459,
    kind: 'single',
    image: q459,
    prompt:
      'Refer to the exhibit. Which switch becomes the root of the spanning tree for VLAN 20 if all links are of equal speed? (Priorities: SW1 = 24596, SW2 = 28692, SW3 = 32788, SW4 = 64000.)',
    options: [
      { key: 'A', text: 'SW1' },
      { key: 'B', text: 'SW2' },
      { key: 'C', text: 'SW3' },
      { key: 'D', text: 'SW4' },
    ],
    correct: ['A'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ C (SW3) แต่ผิด — SW1 มี priority ต่ำสุด คำตอบที่ถูกต้องคือ A\n\n📘 แนวคิด — Root bridge = สวิตช์ที่มี Bridge ID ต่ำสุด โดยดู "priority ก่อน" (ต่ำสุดชนะ) ถ้า priority เท่ากันจึงดู MAC\n\n🔍 เทียบ priority (รวม sys-ext-id VLAN 20):\n• ⭐SW1 = 24596 (= 24576 + 20) ← ต่ำสุด\n• SW2 = 28692\n• SW3 = 32788 (ค่า default 32768 + 20)\n• SW4 = 64000\n→ 24596 < 28692 < 32788 < 64000 → SW1 ต่ำสุด\n\n✅ ทำไม A ถูก: SW1 มี priority 24596 ต่ำที่สุด → เป็น root bridge (ไม่ต้องดู MAC เพราะ priority ต่างกันแล้ว)\n\n❌ ทำไมข้ออื่นผิด:\nB. SW2 (28692) สูงกว่า SW1\nC. SW3 (32788) เป็น default priority เกือบสูงสุด — ไม่ใช่ root\nD. SW4 (64000) สูงสุด → มีโอกาสเป็น root น้อยสุด\n\n📗 จำไว้สอบ: root = priority ต่ำสุดก่อน แล้วค่อย MAC ต่ำสุด • priority = base + VLAN ID',
  },
  {
    id: 460,
    kind: 'single',
    prompt: 'Which protocol uses SSL?',
    options: [
      { key: 'A', text: 'HTTP' },
      { key: 'B', text: 'SSH' },
      { key: 'C', text: 'HTTPS' },
      { key: 'D', text: 'Telnet' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — SSL/TLS เป็นชั้นเข้ารหัสที่ห่อทราฟฟิกแอปพลิเคชัน. HTTPS = HTTP ที่รันบน SSL/TLS (พอร์ต 443) → เข้ารหัสข้อมูลเว็บ\n\n✅ ทำไม C ถูก: HTTPS ใช้ SSL/TLS เข้ารหัสการรับส่ง HTTP\n\n❌ ทำไมข้ออื่นผิด:\nA. HTTP (80) = clear-text ไม่ใช้ SSL\nB. SSH ใช้กลไกเข้ารหัสของตัวเอง (ไม่ใช่ SSL/TLS)\nD. Telnet (23) = clear-text ไม่เข้ารหัส\n\n📗 จำไว้สอบ: HTTPS = HTTP + SSL/TLS (443) | SSH มีการเข้ารหัสของตัวเอง (ไม่ใช่ SSL)',
  },
  {
    id: 461,
    kind: 'multi',
    prompt: 'Which two spanning-tree states are bypassed on an interface running PortFast? (Choose two.)',
    options: [
      { key: 'A', text: 'disabled' },
      { key: 'B', text: 'listening' },
      { key: 'C', text: 'forwarding' },
      { key: 'D', text: 'learning' },
      { key: 'E', text: 'blocking' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — สถานะ STP ปกติ: Blocking → Listening → Learning → Forwarding (ใช้เวลารวม ~30 วินาที). PortFast ทำให้พอร์ต access "ข้าม" listening และ learning เข้าสู่ forwarding ทันที\n\n✅ ทำไม B, D ถูก: PortFast ข้าม "listening" และ "learning" (สองสถานะกลางที่กินเวลา 15+15 วิ) → พร้อมใช้งานทันที\n\n❌ ทำไมข้ออื่นผิด:\nA. disabled = พอร์ตถูกปิด/ไม่ทำงาน ไม่ใช่สถานะที่ portfast ข้าม\nC. forwarding = ปลายทางที่ portfast วิ่งไปถึง (ไม่ได้ข้าม)\nE. blocking = สถานะเริ่มต้นของพอร์ตที่จะ loop (portfast ไม่ได้ "ข้าม" มันในบริบทนี้ — คำตอบคือ listening/learning)\n\n📗 จำไว้สอบ: PortFast ข้าม listening + learning → forwarding ทันที',
  },
  {
    id: 462,
    kind: 'single',
    prompt:
      'A Cisco engineer must configure a factory-default router: the user EXEC password for console access is p4ssw0rd1, the user EXEC password for Telnet access is s3cr3t2, and the privileged EXEC (enable) password is priv4t3p4ss. Which command sequence must the engineer configure?',
    options: [
      { key: 'A', text: 'enable secret priv4t3p4ss / line con 0 / password login p4ssw0rd1 / line vty 0 15 / password login s3cr3t2 / login' },
      { key: 'B', text: 'enable secret privilege 15 priv4t3p4ss / line con 0 / password p4ssw0rd1 / login / line vty 0 15 / password s3cr3t2 / login' },
      { key: 'C', text: 'enable secret priv4t3p4ss / line con 0 / password p4ssw0rd1 / login / line vty 0 15 / password s3cr3t2 / login' },
      { key: 'D', text: 'enable secret priv4t3p4ss / line con 0 (incomplete)' },
    ],
    correct: ['C'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B แต่ผิด — "enable secret privilege 15 ..." เป็น syntax ที่ไม่ถูกต้อง คำตอบที่ถูกต้องคือ C\n\n📘 แนวคิด — ตั้งรหัสตามบทบาท:\n• enable (privileged EXEC) → "enable secret priv4t3p4ss"\n• console (user EXEC ทางคอนโซล) → line con 0 → password p4ssw0rd1 → login\n• Telnet (user EXEC ทาง vty) → line vty 0 15 → password s3cr3t2 → login\n(ต้องมี "login" ที่แต่ละ line เพื่อบังคับถามรหัสของ line นั้น)\n\n✅ ทำไม C ถูก: ใช้ enable secret (syntax ถูก) + con 0 (password+login) + vty 0 15 (password+login) → ครบทุกบทบาทตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. "password login p4ssw0rd1" ผิด syntax (password รับค่าเดียว "login" กลายเป็นรหัส) และไม่มี login แยกที่ con\nB. "enable secret privilege 15 priv4t3p4ss" ไม่ใช่ syntax ที่ถูก (privilege 15 ใช้กับ username ไม่ใช่ enable secret)\nD. ไม่ครบ (ขาด console/vty password)\n\n📗 จำไว้สอบ: enable secret <pw> | line + password <pw> + login | อย่าปน "privilege 15" เข้ากับ enable secret',
  },
  {
    id: 463,
    kind: 'single',
    prompt: 'How does Rapid PVST+ create a fast loop-free network topology?',
    options: [
      { key: 'A', text: 'It requires multiple links between core switches.' },
      { key: 'B', text: 'It generates one spanning-tree instance for each VLAN.' },
      { key: 'C', text: 'It maps multiple VLANs into the same spanning-tree instance.' },
      { key: 'D', text: 'It uses multiple active paths between end stations.' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A แต่ผิด — คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — Rapid PVST+ = Cisco รัน RSTP "แยกอินสแตนซ์ต่อ VLAN" (Per-VLAN): แต่ละ VLAN มี spanning-tree ของตัวเอง → ปรับ root/blocked port ต่อ VLAN ได้ ทำ load balancing ได้ และ converge เร็ว (RSTP ~ต่ำกว่าวินาที)\n\n✅ ทำไม B ถูก: Rapid PVST+ สร้าง 1 instance ต่อ 1 VLAN (per-VLAN) พร้อมความเร็วแบบ RSTP → loop-free และเร็ว\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่ได้ "บังคับ" ต้องมีหลายลิงก์ระหว่าง core — ไม่เกี่ยวกับวิธีสร้าง topology ของ Rapid PVST+\nC. การ map หลาย VLAN เข้า instance เดียว = MST (ไม่ใช่ Rapid PVST+)\nD. STP ทุกแบบ "บล็อก" เส้นทางสำรอง (ไม่ใช้หลาย active path พร้อมกัน)\n\n📗 จำไว้สอบ: PVST+/Rapid PVST+ = 1 instance ต่อ VLAN | MST = หลาย VLAN ต่อ 1 instance',
  },
  {
    id: 464,
    kind: 'single',
    image: q464,
    prompt:
      'Refer to the exhibit. The link between PC1 (manually set 100/full) and the switch (Fa0/1 duplex auto, speed auto) is up but performs poorly. Which interface condition is causing the performance problem?',
    options: [
      { key: 'A', text: 'There is a duplex mismatch on the interface.' },
      { key: 'B', text: 'There is an issue with the fiber on the switch interface.' },
      { key: 'C', text: 'There is a speed mismatch on the interface.' },
      { key: 'D', text: 'There is an interface type mismatch.' },
    ],
    correct: ['A'],
    explanation:
      '🔍 อ่าน exhibit: PC1 ตั้งค่า "manual 100 speed / full duplex" ส่วนสวิตช์ Fa0/1 เป็น "duplex auto / speed auto"\n\n📘 แนวคิด — เมื่อฝั่งหนึ่งตั้ง full-duplex "แบบ manual" แต่อีกฝั่งเป็น "auto": ฝั่ง auto จะตรวจ speed ได้ (100) แต่ "ตรวจ duplex ไม่ได้" (เพราะอีกฝั่งไม่ส่งสัญญาณ negotiation) → ตาม IEEE ฝั่ง auto จะ fallback เป็น "half-duplex" → เกิด duplex mismatch (ฝั่ง full vs ฝั่ง half) → late collisions, ทราฟฟิกช้า\n\n✅ ทำไม A ถูก: PC full (manual) + switch auto→half = duplex mismatch → performance แย่ (แม้ลิงก์ยัง up)\n\n❌ ทำไมข้ออื่นผิด:\nB. เป็นพอร์ต 10/100BaseTX (ทองแดง) ไม่ใช่ fiber\nC. speed ตรงกัน (ทั้งคู่ 100) — auto ตรวจ speed ได้ ปัญหาอยู่ที่ duplex\nD. ชนิดพอร์ตเหมือนกัน (Ethernet ทองแดง)\n\n📗 จำไว้สอบ: ฝั่ง manual-full + ฝั่ง auto = auto กลายเป็น half → duplex mismatch (อาการ: ช้า + late collisions)',
  },
  {
    id: 465,
    kind: 'single',
    prompt: 'Which PoE mode enables powered-device detection and guarantees power when the device is detected?',
    options: [
      { key: 'A', text: 'dynamic' },
      { key: 'B', text: 'static' },
      { key: 'C', text: 'active' },
      { key: 'D', text: 'auto' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โหมด PoE บน Cisco:\n• power inline auto (default) → ตรวจจับอุปกรณ์และจ่ายไฟ "ตามที่ร้องขอ" (ไม่จองไว้ล่วงหน้า — พอร์ตอื่นอาจแย่งไฟได้)\n• ⭐power inline static → ตรวจจับอุปกรณ์ และ "จอง/รับประกัน" กำลังไฟสูงสุดให้พอร์ตนั้นไว้ล่วงหน้า → เมื่อเจออุปกรณ์ก็มีไฟแน่นอน\n• power inline never → ปิด PoE\n\n✅ ทำไม B ถูก: static ตรวจจับ powered device และ "การันตีไฟ" (จองไว้) เมื่อเจออุปกรณ์\n\n❌ ทำไมข้ออื่นผิด:\nA/C. dynamic, active ไม่ใช่ชื่อโหมด PoE ของ Cisco\nD. auto ตรวจจับและจ่ายตามคำขอ แต่ "ไม่การันตี/ไม่จอง" ไฟล่วงหน้า\n\n📗 จำไว้สอบ: static = จอง/การันตีไฟ | auto = จ่ายตามคำขอ (ไม่จอง) | never = ปิด',
  },
  {
    id: 466,
    kind: 'single',
    prompt: 'What is an expected outcome when network management automation is deployed?',
    options: [
      { key: 'A', text: 'A distributed management plane must be used.' },
      { key: 'B', text: 'Software upgrades are performed from a central controller.' },
      { key: 'C', text: 'Complexity increases when new device configurations are added.' },
      { key: 'D', text: 'Custom applications are needed to configure network devices.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — network management automation รวมศูนย์การจัดการไว้ที่ controller/แพลตฟอร์ม → งานซ้ำ ๆ เช่นการอัปเกรดซอฟต์แวร์ การ push config ทำได้จากจุดเดียวไปยังอุปกรณ์จำนวนมากพร้อมกัน\n\n✅ ทำไม B ถูก: ผลลัพธ์ที่คาดหวังคือทำ software upgrade จาก "central controller" (รวมศูนย์) ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. automation มักใช้ management plane "รวมศูนย์" ไม่ใช่กระจาย\nC. automation "ลด" ความซับซ้อน/ลด error เมื่อเพิ่มอุปกรณ์ ไม่ใช่เพิ่ม\nD. ใช้เครื่องมือ/เทมเพลตของแพลตฟอร์ม ไม่จำเป็นต้องเขียนแอปเองทุกครั้ง\n\n📗 จำไว้สอบ: automation = จัดการรวมศูนย์ (push config/upgrade จากที่เดียว) + ลด error/ความซับซ้อน',
  },
  {
    id: 467,
    kind: 'single',
    image: q467,
    prompt: 'Refer to the exhibit. Which action must be taken to ensure that router A is elected as the DR for OSPF area 0?',
    options: [
      { key: 'A', text: 'Configure the OSPF priority on router A with the lowest value between the three routers.' },
      { key: 'B', text: 'Configure router B and router C as OSPF neighbors of router A.' },
      { key: 'C', text: 'Configure the router A interfaces with the highest OSPF priority value within the area.' },
      { key: 'D', text: 'Configure router A with a fixed OSPF router ID.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — การเลือก DR/BDR บนเครือข่าย broadcast: ดู "OSPF interface priority" สูงสุดก่อน (ค่าสูง = ชนะ) ถ้า priority เท่ากันจึงดู Router-ID สูงสุด. priority 0 = ไม่มีสิทธิ์เป็น DR/BDR\n\n✅ ทำไม C ถูก: ตั้ง priority ของอินเทอร์เฟซ router A ให้ "สูงที่สุด" (เช่น ip ospf priority 255) → A ชนะการเลือก DR\n\n❌ ทำไมข้ออื่นผิด:\nA. priority "ต่ำสุด" จะทำให้ A ไม่ได้เป็น DR (ต่ำสุดอาจถึง 0 = ไม่มีสิทธิ์)\nB. การประกาศ neighbor ด้วยมือไม่ใช่กลไกเลือก DR บน broadcast (และ OSPF broadcast หา neighbor เอง)\nD. Router-ID สูงใช้ตัดสิน "เฉพาะเมื่อ priority เท่ากัน" — การตั้ง RID เฉย ๆ ไม่การันตีว่าสูงสุด\n\n📗 จำไว้สอบ: DR election = priority สูงสุดก่อน → ถ้าเท่ากัน RID สูงสุด • priority 0 = ตัดสิทธิ์',
  },
  {
    id: 468,
    kind: 'single',
    image: q468,
    prompt:
      'Refer to the exhibit. Web traffic is coming in from the WAN interface. Which route takes precedence when the router processes traffic destined for the LAN network 10.0.10.0?\n\nO  10.0.10.0/24 [110/10] via 10.0.1.4, GigabitEthernet0/0\nD  10.0.10.0/24 [90/10] via 10.0.1.5, GigabitEthernet0/1',
    options: [
      { key: 'A', text: 'via next-hop 10.0.1.5' },
      { key: 'B', text: 'via next-hop 10.0.1.4' },
      { key: 'C', text: 'via next-hop 10.0.1.50' },
      { key: 'D', text: 'via next-hop 10.0.1.100' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ปลายทาง 10.0.10.0/24 มีสองเส้นทาง prefix เท่ากัน (/24) แต่ต่างโปรโตคอล → ตัดสินด้วย "AD ต่ำสุด":\n• D (EIGRP) [90/10] via 10.0.1.5 → AD 90\n• O (OSPF) [110/10] via 10.0.1.4 → AD 110\n→ 90 < 110 → EIGRP ชนะ\n\n✅ ทำไม A ถูก: EIGRP (AD 90) ต่ำกว่า OSPF (110) → เส้นทางที่ติดตั้งคือ via 10.0.1.5\n\n❌ ทำไมข้ออื่นผิด:\nB. 10.0.1.4 = เส้น OSPF (AD 110) แพ้ EIGRP\nC. 10.0.1.50 = next-hop ของ route /32 (10.0.1.5/32) คนละปลายทาง\nD. 10.0.1.100 = next-hop ของ route 10.0.1.3/32 คนละปลายทาง\n\n📗 จำไว้สอบ: prefix เท่ากัน ต่างโปรโตคอล → AD ต่ำสุดชนะ (EIGRP 90 < OSPF 110)',
  },
  {
    id: 469,
    kind: 'multi',
    prompt: 'Which two components comprise part of a PKI? (Choose two.)',
    options: [
      { key: 'A', text: 'preshared key that authenticates connections' },
      { key: 'B', text: 'RSA token' },
      { key: 'C', text: 'CA that grants certificates' },
      { key: 'D', text: 'clear-text password that authenticates connections' },
      { key: 'E', text: 'one or more CRLs' },
    ],
    correct: ['C', 'E'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B,C แต่ผิด — "RSA token" ไม่ใช่องค์ประกอบของ PKI คำตอบที่ถูกต้องคือ C,E\n\n📘 แนวคิด — PKI (Public Key Infrastructure) ประกอบด้วย: Certificate Authority (CA) ที่ออก/เซ็นใบรับรอง, digital certificates, Registration Authority (RA), และ Certificate Revocation List (CRL) ที่ระบุใบรับรองที่ถูกเพิกถอน\n\n✅ ทำไม C, E ถูก:\nC. CA = ผู้ออกใบรับรอง (หัวใจของ PKI)\nE. CRL = รายการใบรับรองที่ถูกเพิกถอน (ตรวจว่า cert ยังใช้ได้ไหม)\n\n❌ ทำไมข้ออื่นผิด:\nA. preshared key = การยืนยันตัวตนแบบ symmetric ไม่ใช่ PKI (PKI ใช้คู่กุญแจ public/private)\nB. RSA token = อุปกรณ์ OTP ไม่ใช่องค์ประกอบของ PKI\nD. clear-text password ไม่เกี่ยวกับ PKI\n\n📗 จำไว้สอบ: PKI = CA + certificates + RA + CRL (ระบบใบรับรองด้วยคู่กุญแจ public/private)',
  },
  {
    id: 470,
    kind: 'multi',
    prompt: 'What are two benefits of FHRPs? (Choose two.)',
    options: [
      { key: 'A', text: 'They enable automatic failover of the default gateway.' },
      { key: 'B', text: 'They allow multiple devices to serve as a single virtual gateway for clients in the network.' },
      { key: 'C', text: 'They are able to bundle multiple ports to increase bandwidth.' },
      { key: 'D', text: 'They prevent loops in the Layer 2 network.' },
      { key: 'E', text: 'They allow encrypted traffic.' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — FHRP (HSRP/VRRP/GLBP): รวมเราเตอร์หลายตัวเป็น "virtual gateway" ตัวเดียว (virtual IP/MAC) ที่ client ใช้เป็น default gateway → เมื่อเราเตอร์หลักล่ม อีกตัวรับช่วงต่ออัตโนมัติ โดย client ไม่ต้องเปลี่ยนอะไร\n\n✅ ทำไม A, B ถูก:\nA. failover ของ default gateway อัตโนมัติเมื่อ active router ล่ม\nB. หลายเราเตอร์ทำตัวเป็น "single virtual gateway" ให้ client\n\n❌ ทำไมข้ออื่นผิด:\nC. รวมพอร์ตเพิ่มแบนด์วิดท์ = EtherChannel ไม่ใช่ FHRP\nD. ป้องกัน loop L2 = STP\nE. เข้ารหัสทราฟฟิก = IPsec/VPN\n\n📗 จำไว้สอบ: FHRP = virtual gateway + auto failover ของ default gateway',
  },
  {
    id: 471,
    kind: 'single',
    image: q471,
    prompt:
      'Refer to the exhibit. Which command configures OSPF on the point-to-point link (10.0.0.0/30) between routers R1 and R2?',
    options: [
      { key: 'A', text: 'router-id 10.0.0.15' },
      { key: 'B', text: 'neighbor 10.1.2.0 cost 180' },
      { key: 'C', text: 'ip ospf priority 100' },
      { key: 'D', text: 'network 10.0.0.0 0.0.0.255 area 0' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เปิด OSPF บนอินเทอร์เฟซด้วยคำสั่ง "network <address> <wildcard> area <n>" ใต้ router ospf → OSPF จะเปิดบนทุกอินเทอร์เฟซที่ IP ตกอยู่ในช่วงที่ระบุ\n\n🔍 ลิงก์ R1–R2 = 10.0.0.0/30 (R1 serial = 10.0.0.1). network statement ที่ครอบ 10.0.0.1 = "network 10.0.0.0 0.0.0.255 area 0" (ครอบ 10.0.0.0–10.0.0.255)\n\n✅ ทำไม D ถูก: network 10.0.0.0 0.0.0.255 area 0 ครอบ IP ของลิงก์ point-to-point → เปิด OSPF บนขา serial ของ R1\n\n❌ ทำไมข้ออื่นผิด:\nA. router-id ตั้ง RID ไม่ได้ "เปิด OSPF บนลิงก์"\nB. neighbor ... cost ใช้กับ network type nonbroadcast/point-to-multipoint ไม่ใช่การเปิด OSPF บน p2p\nC. ip ospf priority ปรับ DR/BDR (ไม่เกี่ยวกับ p2p ซึ่งไม่มี DR/BDR) และไม่ใช่คำสั่งเปิด OSPF\n\n📗 จำไว้สอบ: เปิด OSPF = "network <addr> <wildcard> area <n>" (wildcard ต้องครอบ IP ของอินเทอร์เฟซ)',
  },
  {
    id: 472,
    kind: 'single',
    prompt: 'What causes a port to be placed in the err-disabled state?',
    options: [
      { key: 'A', text: 'nothing plugged into the port' },
      { key: 'B', text: 'link flapping' },
      { key: 'C', text: 'shutdown command issued on the port' },
      { key: 'D', text: 'latency' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — err-disabled = สวิตช์ "ปิดพอร์ตอัตโนมัติ" เมื่อเจอเหตุการณ์ผิดปกติ เช่น port-security violation, BPDU guard, หรือ "link flapping" (พอร์ตขึ้น/ลงถี่ ๆ ซ้ำ ๆ)\n\n✅ ทำไม B ถูก: link flapping (พอร์ต up/down รัว ๆ) เป็นสาเหตุคลาสสิกที่ทำให้พอร์ตเข้า err-disabled\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีอะไรเสียบ → พอร์ตแค่ "down" (notconnect) ไม่ใช่ err-disabled\nC. shutdown → พอร์ตเป็น "administratively down" ไม่ใช่ err-disabled\nD. latency (ความหน่วง) ไม่ทำให้พอร์ต err-disabled\n\n📗 จำไว้สอบ: err-disabled จาก port-security/BPDU guard/link flap → กู้คืนด้วย shutdown แล้ว no shutdown (หรือ errdisable recovery)',
  },
  {
    id: 473,
    kind: 'single',
    image: q473,
    prompt:
      'Refer to the exhibit. The router has Gi0/0 (10.10.10.1, to the DHCP client) and Gi0/1 (172.16.2.1, to the DHCP server 172.16.2.2). Which additional configuration allows the PC to obtain its IP address from the DHCP server?',
    options: [
      { key: 'A', text: 'Configure the ip dhcp relay information command under interface Gi0/0.' },
      { key: 'B', text: 'Configure the ip dhcp smart-relay command globally on the router.' },
      { key: 'C', text: 'Configure the ip helper-address 172.16.2.2 command under interface Gi0/0.' },
      { key: 'D', text: 'Configure the ip address dhcp command under interface Gi0/0.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — client กับ DHCP server อยู่คนละ subnet (client ฝั่ง Gi0/0, server ฝั่ง Gi0/1). DHCP DISCOVER เป็น broadcast ที่ router ไม่ส่งข้าม subnet → ต้องตั้ง "ip helper-address <ip-ของ-server>" ที่ "อินเทอร์เฟซฝั่ง client" (Gi0/0) เพื่อ relay ไปหา server\n\n✅ ทำไม C ถูก: ใส่ "ip helper-address 172.16.2.2" ที่ Gi0/0 (ขาที่ติด client) → router แปลง broadcast เป็น unicast ส่งไป server\n\n❌ ทำไมข้ออื่นผิด:\nA. "ip dhcp relay information" (option 82) ไม่ใช่คำสั่งที่ทำให้ relay ทำงาน — ตัวที่จำเป็นคือ ip helper-address\nB. ip dhcp smart-relay เป็นฟีเจอร์เสริม (ใช้เมื่อมีหลาย address pool) ไม่ใช่สิ่งที่ทำให้ relay พื้นฐานทำงาน\nD. ip address dhcp ทำให้ "อินเทอร์เฟซของ router" ไปขอ IP เอง (เป็น client) ไม่ใช่ relay ให้ PC\n\n📗 จำไว้สอบ: DHCP ข้าม subnet = "ip helper-address <server>" ที่ขาฝั่ง client',
  },
  {
    id: 474,
    kind: 'single',
    prompt:
      'Which Layer 2 switch function encapsulates packets for different VLANs so that the packets traverse the same port and maintain traffic separation between the VLANs?',
    options: [
      { key: 'A', text: 'VLAN numbering' },
      { key: 'B', text: 'VLAN DSCP' },
      { key: 'C', text: 'VLAN tagging' },
      { key: 'D', text: 'VLAN marking' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — บน trunk link เฟรมของหลาย VLAN วิ่งผ่านพอร์ตเดียวกัน สวิตช์ใช้ "VLAN tagging" (802.1Q) แทรก tag (VLAN ID) ลงในเฟรม → ปลายทางรู้ว่าเฟรมนั้นเป็นของ VLAN ใด และแยกทราฟฟิกแต่ละ VLAN ออกจากกัน\n\n✅ ทำไม C ถูก: VLAN tagging (802.1Q) ใส่ VLAN ID ลงเฟรม → หลาย VLAN ใช้พอร์ต (trunk) เดียวกันได้โดยแยกกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. "VLAN numbering" ไม่ใช่ฟังก์ชันการ encapsulate เฟรม\nB. DSCP = การ mark QoS ใน IP header ไม่เกี่ยวกับการแยก VLAN บน trunk\nD. "VLAN marking" ไม่ใช่คำศัพท์มาตรฐาน (การใส่ VLAN ID เรียกว่า tagging)\n\n📗 จำไว้สอบ: trunk แยกหลาย VLAN บนพอร์ตเดียว = VLAN tagging (802.1Q)',
  },
  {
    id: 475,
    kind: 'single',
    image: q475,
    prompt:
      'Refer to the exhibit. SW1 is fully configured; the SW4–SW1 and SW9–SW1 links and the SW4 Gi0 / SW9 Gi0/0 access ports are configured. Other switches have all VLANs in their databases. Which configuration establishes a successful ping from PC2 (VLAN 14) to PC7 (VLAN 14) without interrupting traffic flow between other PCs (PC3/PC9 in VLAN 108)?',
    options: [
      { key: 'A', text: 'SW4 Gi0/2 trunk allowed vlan 14 / SW11 Gi0/1 trunk allowed vlan 14 / SW9 Gi0/2 trunk allowed vlan 108' },
      { key: 'B', text: 'SW4 Gi0/2 trunk allowed vlan 14 / SW11 Gi0/1 trunk allowed vlan 14 / SW9 Gi0/2 trunk allowed vlan 108' },
      { key: 'C', text: 'SW4 Gi0/2 trunk allowed vlan 14,108 / SW11 Gi0/2 & Gi0/1 trunk allowed vlan 14,108 / SW9 Gi0/2 trunk allowed vlan 14' },
      { key: 'D', text: 'SW4/SW11/SW9 configured as access ports in VLAN 14' },
    ],
    correct: ['C'],
    explanation:
      '🔍 อ่านโจทย์: PC2 (VLAN 14 บน SW4) ต้อง ping PC7 (VLAN 14 บน SW9) ผ่านเส้นทาง SW4→SW11→SW9 และ "ห้ามรบกวน" ทราฟฟิกอื่น — PC3/PC9 อยู่ VLAN 108 ที่ต้องคุยกันผ่านลิงก์เดียวกัน\n\n📘 แนวคิด — ลิงก์ที่ต้องแบกทั้ง VLAN 14 (สำหรับ PC2–PC7) และ VLAN 108 (สำหรับ PC3–PC9) ต้องเป็น "trunk ที่ allow ทั้ง 14 และ 108" มิฉะนั้นจะตัดทราฟฟิก VLAN 108\n\n✅ ทำไม C ถูก: ตั้ง trunk บน SW4 Gi0/2, SW11 (Gi0/2 และ Gi0/1), SW9 Gi0/2 ให้ allow "vlan 14,108" ครบ → PC2 ถึง PC7 ได้ (VLAN 14) และ PC3–PC9 (VLAN 108) ยังทำงานต่อ ไม่ถูกตัด\n\n❌ ทำไมข้ออื่นผิด:\nA/B. allow เฉพาะ vlan 14 (และ SW9 แค่ 108) → VLAN 108 ถูกตัดบางลิงก์ ทำให้ PC3–PC9 หลุด (รบกวนทราฟฟิกอื่น)\nD. ตั้งเป็น access port จะแบกได้ VLAN เดียว → รบกวน VLAN อื่นและไม่ครบเส้นทาง trunk\n\n📗 จำไว้สอบ: trunk ต้อง "allow ทุก VLAN ที่ต้องวิ่งผ่าน" — ตัด VLAN ออกจาก trunk = ตัดการสื่อสารของ VLAN นั้น',
  },
  {
    id: 476,
    kind: 'single',
    prompt:
      'R1 as an NTP server must have: NTP authentication enabled, NTP packets sourced from Loopback0, NTP stratum 2, and NTP packets permitted only to client IP 209.165.200.225. How should R1 be configured?',
    options: [
      { key: 'A', text: 'ntp authenticate / ntp authentication-key 2 md5 CISCO123 / ntp source Loopback0 / ntp access-group server-only 10 / ntp master 2 / access-list 10 permit 209.165.200.225' },
      { key: 'B', text: 'ntp authenticate / ntp authentication-key 2 md5 CISCO123 / ntp source Loopback0 / ntp access-group server-only 10 / ntp stratum 2 / access-list 10 permit udp host 209.165.200.225 any eq 123' },
      { key: 'C', text: 'ntp authenticate / ntp authentication-key 2 sha1 CISCO123 / ntp source Loopback0 / ntp access-group server-only 10 / ntp master 2 / access-list 10 permit udp host 209.165.200.225 any eq 123' },
      { key: 'D', text: 'ntp authenticate / ntp authentication-key 2 md5 CISCO123 / ntp interface Loopback0 / ntp access-group server-only 10 ...' },
    ],
    correct: ['A'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B แต่ผิด — "ntp stratum 2" ไม่ใช่คำสั่งที่ถูกต้อง (ต้องใช้ "ntp master 2") และ access-list 10 เป็น standard ACL จะใส่ "udp/port" ไม่ได้ คำตอบที่ถูกต้องคือ A\n\n📘 แนวคิด — ไล่ทีละข้อกำหนด:\n• เป็น NTP server ที่ stratum 2 → "ntp master 2" (❌ ไม่มีคำสั่ง ntp stratum)\n• authentication → "ntp authenticate" + "ntp authentication-key 2 md5 CISCO123" (CCNA ใช้ md5)\n• source loopback → "ntp source Loopback0" (❌ ไม่ใช่ ntp interface)\n• อนุญาตเฉพาะ client → "ntp access-group server-only 10" + standard ACL "access-list 10 permit 209.165.200.225" (match แหล่งที่มา)\n\n✅ ทำไม A ถูก: ครบทุกข้อด้วย syntax ที่ถูกต้อง — ntp master 2, md5, ntp source Loopback0, และ standard ACL permit host\n\n❌ ทำไมข้ออื่นผิด:\nB. "ntp stratum 2" ไม่ใช่คำสั่งจริง + ACL 10 ใช้ extended-format (udp/port) ไม่ได้\nC. ใช้ sha1 (CCNA ให้ md5) + ACL รูปแบบผิดเช่น B\nD. "ntp interface Loopback0" ผิด (ต้อง ntp source)\n\n📗 จำไว้สอบ: เป็น NTP server stratum N = "ntp master N" | source = "ntp source <intf>" | จำกัด client = ntp access-group + standard ACL',
  },
  {
    id: 477,
    kind: 'multi',
    image: q477,
    prompt:
      'Refer to the exhibit. Currently R3 is DR and R2 is BDR (all priority 1) on the OSPF Area 0 segment. Which two configurations must the engineer apply so that R1 becomes the DR? (Choose two.)',
    options: [
      { key: 'A', text: 'R1: router ospf 1 / router-id 192.168.100.1' },
      { key: 'B', text: 'R1: interface fastethernet 0/0 / ip ospf priority 200' },
      { key: 'C', text: 'R3: interface fastethernet 0/0 / ip ospf priority 0' },
      { key: 'D', text: 'R1: interface fastethernet 0/0 / ip ospf priority 0' },
      { key: 'E', text: 'R3: interface fastethernet 0/0 / ip ospf priority 200' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — DR election ดู OSPF priority สูงสุดก่อน (priority 0 = ตัดสิทธิ์). ปัจจุบันทุกตัว priority 1, R3 เป็น DR (RID สูงสุด). ต้องทำให้ R1 ชนะ\n\n✅ ทำไม B, C ถูก:\nB. ตั้ง R1 priority = 200 (สูงสุด) → R1 มีสิทธิ์ชนะ DR\nC. ตั้ง R3 priority = 0 → R3 ถอนตัวจากการเป็น DR/BDR → ไม่มาแย่ง\n→ หลัง clear ip ospf process (re-election) R1 (200) จะเป็น DR\n\n❌ ทำไมข้ออื่นผิด:\nA. ตั้ง router-id เฉย ๆ ไม่การันตีว่า R1 ชนะ (priority ทุกตัวยัง 1 เท่ากัน และ election ปัจจุบัน R3 ครองอยู่)\nD. ตั้ง R1 = 0 → R1 "ตัดสิทธิ์" ตัวเอง (ตรงข้ามเป้าหมาย)\nE. ตั้ง R3 = 200 → ยิ่งทำให้ R3 เป็น DR แน่นอน (ผิด)\n\n📗 จำไว้สอบ: อยากให้เป็น DR = ตั้ง priority สูงสุด + ตัดคู่แข่งด้วย priority 0 + re-election (clear ip ospf process)',
  },
  {
    id: 478,
    kind: 'single',
    prompt:
      'Which type of IPv6 address is similar to a unicast address but is assigned to multiple devices on the same network at the same time?',
    options: [
      { key: 'A', text: 'global unicast address' },
      { key: 'B', text: 'anycast address' },
      { key: 'C', text: 'multicast address' },
      { key: 'D', text: 'link-local address' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Anycast: ใช้รูปแบบ address เหมือน unicast ปกติ แต่ "กำหนดให้หลายอุปกรณ์" พร้อมกัน แพ็กเก็ตจะถูกส่งไปยังสมาชิกที่ "ใกล้ที่สุด" (ตาม routing) → one-to-nearest\n\n✅ ทำไม B ถูก: anycast = คล้าย unicast แต่ผูกกับหลายอุปกรณ์พร้อมกัน (ส่งไปตัวใกล้สุด)\n\n❌ ทำไมข้ออื่นผิด:\nA. global unicast = one-to-one (อุปกรณ์เดียว)\nC. multicast = one-to-many (ส่งถึงสมาชิกกลุ่ม "ทุกตัว" ใช้ prefix FF00::/8 ไม่เหมือน unicast)\nD. link-local = unicast ภายในลิงก์เดียว (FE80::/10) ไม่ใช่หลายอุปกรณ์\n\n📗 จำไว้สอบ: anycast = รูปแบบ unicast แต่หลาย node → ส่งไปตัวใกล้สุด (one-to-nearest)',
  },
  {
    id: 479,
    kind: 'multi',
    prompt: 'Which two network actions occur within the data plane? (Choose two.)',
    options: [
      { key: 'A', text: 'Add or remove an 802.1Q trunking header.' },
      { key: 'B', text: 'Make a configuration change from an incoming NETCONF RPC.' },
      { key: 'C', text: 'Run routing protocols.' },
      { key: 'D', text: 'Match the destination MAC address to the MAC address table.' },
      { key: 'E', text: 'Reply to an incoming ICMP echo request.' },
    ],
    correct: ['A', 'D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B,D แต่ผิด — B (NETCONF config) เป็น management plane คำตอบที่ถูกต้องคือ A,D\n\n📘 แนวคิด — Data plane = "ส่งต่อทราฟฟิกจริง" ต่อแพ็กเก็ต/เฟรม ด้วยความเร็วสูง:\n• เพิ่ม/ถอด tag 802.1Q ระหว่างส่งผ่าน trunk (encapsulate/de-encapsulate) = data plane\n• lookup MAC address table เพื่อตัดสินว่าจะ forward ออกพอร์ตไหน = data plane\n\n✅ ทำไม A, D ถูก: ทั้งการจัดการ 802.1Q header (A) และการ match destination MAC กับตาราง (D) เป็นการ forward ต่อเฟรม = data plane\n\n❌ ทำไมข้ออื่นผิด:\nB. เปลี่ยน config จาก NETCONF RPC = "management plane" (การจัดการอุปกรณ์)\nC. run routing protocols (OSPF/EIGRP) = "control plane"\nE. อุปกรณ์ตอบ ICMP echo ที่ส่งมา "ถึงตัวมันเอง" = ประมวลผลโดย CPU = control/management plane (ไม่ใช่ forwarding ผ่าน)\n\n📗 จำไว้สอบ: Data plane = forward เฟรม/แพ็กเก็ต (tag 802.1Q, MAC/FIB lookup) | Control = routing protocol | Management = NETCONF/SSH/SNMP',
  },
  {
    id: 480,
    kind: 'single',
    prompt:
      'Which QoS traffic-handling technique retains excess packets in a queue and reschedules them for later transmission when the configured maximum bandwidth has been surpassed?',
    options: [
      { key: 'A', text: 'weighted random early detection' },
      { key: 'B', text: 'traffic policing' },
      { key: 'C', text: 'traffic shaping' },
      { key: 'D', text: 'traffic prioritization' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เมื่อทราฟฟิกเกินอัตราที่กำหนด:\n• Shaping → "เก็บ (buffer) แพ็กเก็ตส่วนเกินไว้ในคิว" แล้วทยอยส่งทีหลังให้อยู่ในอัตราที่ตั้งไว้ → ทำให้ทราฟฟิกเรียบขึ้น (ไม่ทิ้ง แต่หน่วง)\n• Policing → "ทิ้ง (drop) หรือ re-mark" ส่วนที่เกินทันที (ไม่ buffer)\n\n✅ ทำไม C ถูก: traffic shaping เก็บแพ็กเก็ตส่วนเกินในคิวและ reschedule ส่งทีหลัง ตรงตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. WRED = ทิ้งแพ็กเก็ตเชิงป้องกันเมื่อคิวใกล้เต็ม (congestion avoidance) ไม่ใช่ buffer เพื่อส่งทีหลัง\nB. policing = ทิ้ง/re-mark ส่วนเกิน ไม่ buffer\nD. prioritization = จัดลำดับความสำคัญ ไม่ใช่การหน่วงส่วนเกิน\n\n📗 จำไว้สอบ: shaping = buffer แล้วส่งทีหลัง (หน่วง) | policing = ทิ้ง/re-mark ทันที',
  },
  {
    id: 481,
    kind: 'single',
    image: q481,
    prompt:
      'Refer to the exhibit. An IP packet with a destination of the HTTP virtual IP 192.168.1.250 must be forwarded. Which routing-table entry does the router use?\n\nB  192.168.1.0/24 [20/1] via 192.168.12.2\nR  192.168.1.128/25 [120/5] via 192.168.13.3\nO  192.168.1.192/26 [110/11] via 192.168.14.4\nD  192.168.1.224/27 [90/1024640] via 192.168.15.5',
    options: [
      { key: 'A', text: '192.168.1.0 via 192.168.12.2' },
      { key: 'B', text: '192.168.1.128 via 192.168.13.3' },
      { key: 'C', text: '192.168.1.192 via 192.168.14.4' },
      { key: 'D', text: '192.168.1.224 via 192.168.15.5' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B แต่ผิดจากการคำนวณช่วง — คำตอบที่ถูกต้องคือ D\n\n📘 แนวคิด — Longest Prefix Match: หา prefix ที่ยาวที่สุดที่ครอบปลายทาง 192.168.1.250\n\n🧮 ไล่ตรวจ:\n• 192.168.1.0/24 → .0–.255 → ครอบ (แต่ /24 สั้น)\n• 192.168.1.128/25 → .128–.255 → ครอบ (/25)\n• 192.168.1.192/26 → .192–.255 → ครอบ (/26)\n• ⭐192.168.1.224/27 → .224–.255 → ครอบ .250 (/27 ยาวสุด!) via 192.168.15.5\n\n✅ ทำไม D ถูก: /27 (192.168.1.224/27, ช่วง .224–.255) เป็น prefix ยาวสุดที่ครอบ .250 → ใช้เส้นนี้ (via 192.168.15.5) แม้ AD ของ EIGRP จะไม่ใช่ต่ำสุด เพราะ longest prefix มาก่อน AD\n\n❌ ทำไมข้ออื่นผิด:\nA. /24 สั้นสุด\nB. /25 (.128–.255) ครอบก็จริง แต่สั้นกว่า /27\nC. /26 (.192–.255) ครอบแต่สั้นกว่า /27\n\n📗 จำไว้สอบ: /27 block = 32 → .224–.255 • Longest Prefix Match ชนะก่อน AD/metric เสมอ',
  },
  {
    id: 482,
    kind: 'single',
    prompt: 'Which interface mode must be configured to connect the lightweight APs in a centralized architecture?',
    options: [
      { key: 'A', text: 'WLAN dynamic' },
      { key: 'B', text: 'management' },
      { key: 'C', text: 'trunk' },
      { key: 'D', text: 'access' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ในสถาปัตยกรรมรวมศูนย์ (centralized) Lightweight AP ทำงานโหมด local: มันสร้าง CAPWAP tunnel ไปหา WLC และห่อทราฟฟิก client ทุก VLAN ผ่าน tunnel นั้น → พอร์ตสวิตช์ที่ต่อ AP จึงเป็น "access port" (แบก VLAN เดียวสำหรับ CAPWAP/management ของ AP) ไม่ต้องเป็น trunk\n\n✅ ทำไม D ถูก: พอร์ตที่ต่อ Lightweight AP (centralized/local mode) ตั้งเป็น access port\n\n❌ ทำไมข้ออื่นผิด:\nA. "WLAN dynamic" ไม่ใช่โหมดพอร์ตสวิตช์\nB. "management" ไม่ใช่ switchport mode (เป็นชื่อ interface บน WLC)\nC. trunk ใช้กับ Autonomous AP หรือ FlexConnect ที่ต้องแบกหลาย VLAN — ไม่ใช่ centralized local-mode ที่ tunnel ทุกอย่างผ่าน CAPWAP\n\n📗 จำไว้สอบ: Lightweight AP (centralized/local mode) → access port | Autonomous/FlexConnect ที่ switch VLAN local → trunk',
  },
  {
    id: 483,
    kind: 'multi',
    image: q483,
    prompt:
      'Refer to the exhibit. Which two commands must be configured on router R1 to enable the router to accept secure remote-access connections? (Choose two.)',
    options: [
      { key: 'A', text: 'transport input telnet' },
      { key: 'B', text: 'crypto key generate rsa' },
      { key: 'C', text: 'ip ssh pubkey-chain' },
      { key: 'D', text: 'login console' },
      { key: 'E', text: 'username cisco password 0 Cisco' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — "secure remote-access" = SSH. ขั้นตอนขั้นต่ำ: สร้าง RSA key (สำหรับเข้ารหัส SSH) + มี local user (สำหรับ login local ที่ vty)\n\n✅ ทำไม B, E ถูก:\nB. "crypto key generate rsa" → สร้างคู่กุญแจ RSA ที่ SSH ต้องใช้ (ต้องมี hostname + ip domain-name ก่อน)\nE. "username cisco password 0 Cisco" → สร้าง local user เพื่อให้ vty ใช้ "login local" ยืนยันตัวตนสำหรับ SSH\n\n❌ ทำไมข้ออื่นผิด:\nA. transport input telnet = เปิด "Telnet" (ไม่ปลอดภัย) — ตรงข้ามกับ "secure"; ควรเป็น transport input ssh\nC. ip ssh pubkey-chain ใช้กับ public-key auth ขั้นสูง ไม่จำเป็นสำหรับการเปิด SSH พื้นฐาน\nD. "login console" ไม่ใช่คำสั่งที่ถูกต้อง (login อยู่ใต้ line)\n\n📗 จำไว้สอบ: เปิด SSH = crypto key generate rsa + local user + (line vty: transport input ssh + login local)',
  },
  {
    id: 484,
    kind: 'single',
    prompt:
      'Which type of network attack overwhelms the target server by sending multiple packets to a port until the half-open TCP resources of the target are exhausted?',
    options: [
      { key: 'A', text: 'SYN flood' },
      { key: 'B', text: 'reflection' },
      { key: 'C', text: 'teardrop' },
      { key: 'D', text: 'amplification' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — SYN flood: ผู้โจมตีส่ง TCP SYN จำนวนมากแต่ "ไม่ตอบ ACK" (ไม่ทำ handshake ให้ครบ) → เซิร์ฟเวอร์ค้างสถานะ "half-open" ไว้เต็มตาราง connection → ทรัพยากรหมด รับ connection ใหม่ไม่ได้\n\n✅ ทำไม A ถูก: การถล่มด้วย SYN จน half-open TCP resources หมด = SYN flood\n\n❌ ทำไมข้ออื่นผิด:\nB. reflection = สะท้อนทราฟฟิกผ่าน server อื่นไปหาเหยื่อ (ปลอม source)\nC. teardrop = ส่ง fragment ที่ offset ทับซ้อนกันจนระบบประกอบไม่ได้/ค้าง\nD. amplification = ขยายขนาด response (เช่น DNS/NTP) ให้ท่วมเหยื่อ\n\n📗 จำไว้สอบ: half-open TCP หมด = SYN flood',
  },
  {
    id: 485,
    kind: 'single',
    image: q485,
    prompt:
      'Refer to the exhibit. Router A must establish an OSPF neighbor relationship with neighbor 172.1.1.1, but after 2 hours "show ip ospf neighbor" shows the state stuck in EXCHANGE. What is the next step to establish the adjacency?',
    options: [
      { key: 'A', text: 'Configure router A to use the same MTU size as router B.' },
      { key: 'B', text: 'Set the router B OSPF ID to a nonhost address.' },
      { key: 'C', text: 'Configure a point-to-point link between router A and router B.' },
      { key: 'D', text: 'Set the router B OSPF ID to the same value as its IP address.' },
    ],
    correct: ['A'],
    explanation:
      '🔍 อ่าน exhibit: state ค้างที่ "EXCHANGE" (จริง ๆ มักค้างที่ EXSTART/EXCHANGE)\n\n📘 แนวคิด — OSPF ค้างที่ EXSTART/EXCHANGE = อาการคลาสสิกของ "MTU mismatch" สองฝั่ง: ระหว่างแลก DBD ถ้า MTU ไม่ตรงกัน จะแลกฐานข้อมูลไม่สำเร็จ neighbor ไม่ขึ้น Full\n\n✅ ทำไม A ถูก: ปรับ MTU ของ router A ให้ตรงกับ router B → หลุดจาก EXCHANGE ไปเป็น Full ได้\n\n❌ ทำไมข้ออื่นผิด:\nB/D. Router-ID ที่ต่างกันเป็นเรื่องปกติ (และต้องต่างกันด้วยซ้ำ) — ไม่ใช่สาเหตุค้าง EXCHANGE\nC. network type (p2p) ไม่ใช่สาเหตุของการค้าง EXSTART/EXCHANGE (นั่นคือ MTU)\n\n📗 จำไว้สอบ: OSPF ค้าง EXSTART/EXCHANGE = MTU mismatch (แก้โดยทำ MTU ให้ตรง หรือใส่ ip ospf mtu-ignore)',
  },
  {
    id: 486,
    kind: 'single',
    image: q486,
    prompt:
      'Refer to the exhibit. Routers R1 and R3 have the default configuration and R2 priority is set to 99. Which commands on R3 configure it as the DR in the 10.0.4.0 network?',
    options: [
      { key: 'A', text: 'interface Gig0 / ip ospf priority 100' },
      { key: 'B', text: 'interface Gig0/0 / ip ospf priority 100' },
      { key: 'C', text: 'interface Gig0/0 / ip ospf priority 1' },
      { key: 'D', text: 'interface Gig0 / ip ospf priority 0' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — DR election ดู OSPF priority สูงสุด. R2 ตั้งไว้ 99, R1/R3 เป็น default (priority 1). ให้ R3 ชนะต้องตั้ง priority "สูงกว่า 99" บนอินเทอร์เฟซที่อยู่ในเครือข่าย 10.0.4.0\n\n✅ ทำไม B ถูก: ตั้ง "ip ospf priority 100" (> 99) บนอินเทอร์เฟซของ R3 (ชื่อ Gig0/0 ที่ valid) → R3 มี priority สูงสุด → เป็น DR (หลัง re-election)\n\n❌ ทำไมข้ออื่นผิด:\nA/D. "interface Gig0" เป็นชื่ออินเทอร์เฟซที่ไม่ถูกต้อง (ต้องเป็น Gig0/0 หรือ Gig0/1) — และ D ตั้ง priority 0 = ตัดสิทธิ์\nC. priority 1 < 99 → R2 ยังชนะ (R3 ไม่ได้เป็น DR)\n\n📗 จำไว้สอบ: อยากเป็น DR = priority สูงสุด (ต้องมากกว่าคู่แข่ง) บนอินเทอร์เฟซของเครือข่ายนั้น + re-election',
  },
  {
    id: 487,
    kind: 'single',
    image: q487,
    prompt:
      'Refer to the exhibit. A company is configuring a dual-ISP failover plan so that a floating static route assumes traffic forwarding when the primary link goes down. Which primary route configuration must be used?',
    options: [
      { key: 'A', text: 'ip route 0.0.0.0 0.0.0.0 192.168.0.2 GigabitEthernet1/0' },
      { key: 'B', text: 'ip route 0.0.0.0 0.0.0.0 192.168.0.2 tracked' },
      { key: 'C', text: 'ip route 0.0.0.0 0.0.0.0 192.168.0.2 floating' },
      { key: 'D', text: 'ip route 0.0.0.0 0.0.0.0 192.168.0.2' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ในแผน failover สอง ISP: ปัญหาคือ static route ธรรมดาจะยังอยู่ในตารางตราบใดที่ "ลิงก์แรก (next-hop)" ยังขึ้น แม้ปลายทางฝั่ง ISP จะล่มก็ตาม → floating backup ไม่ทำงาน. การใช้ "object tracking (IP SLA)" ทำให้ตรวจสอบการเชื่อมต่อจริง แล้วถอน primary route เมื่อ path ล่ม → floating route เข้ามาแทน\n\n✅ ทำไม B ถูก: primary route ที่ "tracked" (ผูกกับ IP SLA/track object) จะถูกถอนเมื่อการเชื่อมต่อล่มจริง → floating static (AD สูงกว่า) รับช่วงต่อได้เชื่อถือได้\n\n❌ ทำไมข้ออื่นผิด:\nA. ใส่ egress interface เฉย ๆ ไม่ได้ตรวจสอบการเชื่อมต่อ upstream (ลิงก์อาจ up แต่เน็ตล่ม)\nC. "floating" ไม่ใช่คีย์เวิร์ดของคำสั่ง ip route\nD. static ธรรมดา (ไม่ track) จะไม่ถอนตัวถ้า next-hop ยัง reachable → failover อาจไม่ทำงานเมื่อ ISP ล่มแต่ลิงก์ยัง up\n\n📗 จำไว้สอบ: failover เชื่อถือได้ = primary route แบบ "tracked" (IP SLA) + backup แบบ floating (AD สูงกว่า)',
  },
  {
    id: 488,
    kind: 'single',
    prompt: 'What is one reason to implement LAG on a Cisco WLC?',
    options: [
      { key: 'A', text: 'to increase security and encrypt management frames' },
      { key: 'B', text: 'to provide link redundancy and load balancing' },
      { key: 'C', text: 'to allow for stateful and link-state failover' },
      { key: 'D', text: 'to enable connected switch ports to failover and use different VLANs' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — LAG (Link Aggregation) บน WLC รวมพอร์ตกายภาพหลายพอร์ตเป็น bundle เดียว → ได้ทั้ง "link redundancy" (พอร์ตหนึ่งล่มยังส่งต่อได้) และ "load balancing" (กระจายทราฟฟิก client ข้ามพอร์ต)\n\n✅ ทำไม B ถูก: เหตุผลหลักของ LAG = redundancy + load balancing ของลิงก์\n\n❌ ทำไมข้ออื่นผิด:\nA. LAG ไม่ได้เข้ารหัส management frame (นั่นคือ PMF/802.11w)\nC. stateful/link-state failover เป็นเรื่องของ HA/SSO ระหว่าง WLC ไม่ใช่ LAG\nD. LAG ไม่ได้ทำให้พอร์ตใช้ VLAN ต่างกันเพื่อ failover\n\n📗 จำไว้สอบ: WLC LAG = รวมพอร์ต → redundancy + load balancing (static bundle, mode on)',
  },
  {
    id: 489,
    kind: 'single',
    prompt: 'Which action implements physical access control as part of the security program of an organization?',
    options: [
      { key: 'A', text: 'configuring a password for the console port' },
      { key: 'B', text: 'backing up syslogs at a remote location' },
      { key: 'C', text: 'configuring enable passwords on network devices' },
      { key: 'D', text: 'setting up IP cameras to monitor key infrastructure' },
    ],
    correct: ['D'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ A (รหัส console) แต่ผิด — รหัสผ่านเป็น "logical access control" ไม่ใช่ physical คำตอบที่ถูกต้องคือ D\n\n📘 แนวคิด — แยกประเภทการควบคุมการเข้าถึง:\n• Physical access control → กายภาพ: กล้องวงจรปิด, บัตรผ่าน (badge), ประตู/ล็อก, biometrics, รั้ว, ยาม\n• Logical access control → ตรรกะ/ดิจิทัล: รหัสผ่าน (console/enable), AAA, ACL\n\n✅ ทำไม D ถูก: การติดตั้งกล้อง IP เฝ้าโครงสร้างพื้นฐานสำคัญ = มาตรการ "physical" security/access control\n\n❌ ทำไมข้ออื่นผิด:\nA. รหัส console = logical access control (แม้จะอยู่บนพอร์ตกายภาพ แต่ตัวควบคุมคือรหัสผ่าน = ตรรกะ)\nB. backup syslog = logical/operational control ไม่ใช่ physical\nC. enable password = logical access control\n\n📗 จำไว้สอบ: physical = กล้อง/บัตร/ล็อก/biometrics | logical = password/AAA/ACL',
  },
  {
    id: 490,
    kind: 'drag',
    image: q490,
    prompt:
      'Drag and drop the facts about wireless architectures from the left onto the types of access point (Autonomous / Cloud-Based) on the right. Not all options are used.',
    categories: [
      {
        name: 'Autonomous Access Point',
        items: ['accessible for management via Telnet, SSH, or a web GUI', 'requires a management IP address'],
      },
      {
        name: 'Cloud-Based Access Point',
        items: ['managed from a web-based dashboard', 'supports automatic deployment'],
      },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['configured and managed by a WLC'] },
    ],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับสลับข้อความบางส่วน — ที่ถูกต้องตามหลัก CCNA เป็นดังนี้\n\n📘 แนวคิด — ชนิด AP:\n\n🔹 Autonomous AP (ยืนเดี่ยว มี IOS เต็ม):\n• accessible for management via Telnet, SSH, or a web GUI → เข้าจัดการที่ตัวมันเองได้หลายทาง\n• requires a management IP address → ต้องมี IP เพื่อเข้าไปคอนฟิก\n\n☁️ Cloud-Based AP (เช่น Meraki):\n• managed from a web-based dashboard → จัดการผ่าน dashboard บนคลาวด์\n• supports automatic deployment → zero-touch provisioning ผ่านคลาวด์\n\n⚠️ ตัวลวง (ไม่ใช้): "configured and managed by a WLC" → นี่คือ Lightweight AP ไม่ใช่ทั้ง Autonomous หรือ Cloud-based\n\n📗 จำไว้สอบ: Autonomous = ยืนเดี่ยว (Telnet/SSH/GUI, ต้องมี mgmt IP) | Cloud = dashboard + auto deploy | Lightweight = คุมโดย WLC',
  },
  {
    id: 491,
    kind: 'single',
    image: q491,
    prompt:
      'Refer to the exhibit. The 802.1q trunk between SW1 and SW2 already carries VLANs 1, 100, 101, 102, 103. An engineer must insert the new VLAN 104 into the existing trunk without modifying anything previously configured. Which command accomplishes this task?',
    options: [
      { key: 'A', text: 'switchport trunk allowed vlan 100-104' },
      { key: 'B', text: 'switchport trunk allowed vlan add 104' },
      { key: 'C', text: 'switchport trunk allowed vlan all' },
      { key: 'D', text: 'switchport trunk allowed vlan 104' },
    ],
    correct: ['B'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ D แต่ผิด — "switchport trunk allowed vlan 104" จะ "แทนที่" รายการเดิมทั้งหมดให้เหลือแค่ 104 คำตอบที่ถูกต้องคือ B\n\n📘 แนวคิด — คำสั่ง "switchport trunk allowed vlan ..." โดยไม่มี "add" จะ "เขียนทับ" allowed list เดิมทั้งหมด. ถ้าต้องการ "เพิ่ม" VLAN ใหม่โดยไม่แตะของเดิม ต้องใช้คีย์เวิร์ด "add"\n\n✅ ทำไม B ถูก: "switchport trunk allowed vlan add 104" เพิ่ม VLAN 104 เข้าไปโดยคง VLAN 1,100,101,102,103 เดิมไว้ครบ\n\n❌ ทำไมข้ออื่นผิด:\nA. "vlan 100-104" จะเซ็ต allowed เป็น 100–104 เท่านั้น → ตัด VLAN 1 ออก (แก้ของเดิม)\nC. "vlan all" อนุญาตทุก VLAN (1–4094) → เปลี่ยนพฤติกรรมเดิมมาก\nD. "vlan 104" เซ็ต allowed เหลือแค่ 104 → ตัด 1,100–103 ออกหมด (พังของเดิม)\n\n📗 จำไว้สอบ: เพิ่ม VLAN เข้า trunk โดยไม่แตะของเดิม = "switchport trunk allowed vlan add <id>" (อย่าลืม add!)',
  },
  {
    id: 492,
    kind: 'drag',
    image: q492,
    prompt:
      'An engineer must configure a switch port with port security so that only two random MAC addresses are permitted at a time and flooding devices cannot flood the port. Drag the required configuration commands from the left onto the correct sequence (1-4) on the right. Not all commands are used.',
    categories: [
      { name: '1', items: ['switchport mode access'] },
      { name: '2', items: ['switchport port-security'] },
      { name: '3', items: ['switchport port-security maximum 2'] },
      { name: '4', items: ['switchport port-security mac-address sticky'] },
      {
        name: 'ไม่ใช้ (ตัวลวง)',
        items: [
          'switchport port-security mac-address 0060.3EDD.77AB',
          'switchport port-security mac-address 00D0.D3ED.622A',
          'switchport port-security violation shutdown',
        ],
      },
    ],
    explanation:
      '📘 แนวคิด — ลำดับตั้ง port security (เมื่อต้องการ "MAC แบบสุ่ม 2 ตัว"):\n1) switchport mode access → port-security ใช้ได้เฉพาะ access port (ต้องตั้งก่อน)\n2) switchport port-security → เปิดฟีเจอร์ port-security\n3) switchport port-security maximum 2 → จำกัดให้เรียนรู้ได้สูงสุด 2 MAC\n4) switchport port-security mac-address sticky → เรียนรู้ MAC "แบบไดนามิก (สุ่ม)" แล้วบันทึกอัตโนมัติ\n\n⚠️ ตัวลวง (ไม่ใช้):\n• การใส่ MAC แบบ static (0060.3EDD.77AB, 00D0.D3ED.622A) → ผิด เพราะโจทย์ต้องการ MAC "สุ่ม/ไดนามิก" ไม่ใช่ระบุตายตัว\n• violation shutdown → ค่า default ของ violation คือ shutdown อยู่แล้ว จึงไม่ต้องใส่ (และไม่อยู่ในลำดับ 4 ขั้น)\n\n📗 จำไว้สอบ: MAC สุ่ม = "sticky" (ไม่ใช่ static) • port-security ต้องอยู่บน access port • ลำดับ: mode access → port-security → maximum → sticky',
  },
  {
    id: 493,
    kind: 'single',
    prompt: 'Which field within the access-request packet is encrypted by RADIUS?',
    options: [
      { key: 'A', text: 'authorized services' },
      { key: 'B', text: 'authenticator' },
      { key: 'C', text: 'username' },
      { key: 'D', text: 'password' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — RADIUS "เข้ารหัสเฉพาะฟิลด์รหัสผ่าน (password)" ในแพ็กเก็ต Access-Request เท่านั้น ส่วนที่เหลือ (username, ฯลฯ) ส่งเป็น clear-text → นี่คือจุดอ่อนของ RADIUS เทียบกับ TACACS+ ที่เข้ารหัสทั้ง payload\n\n✅ ทำไม D ถูก: RADIUS เข้ารหัส "password" อย่างเดียวใน Access-Request\n\n❌ ทำไมข้ออื่นผิด:\nA. authorized services ไม่ใช่ฟิลด์ที่ถูกเข้ารหัส (และเป็นเรื่อง authorization)\nB. authenticator เป็นฟิลด์ที่ใช้ในการเข้ารหัส password แต่ตัวมันเองไม่ได้ถูก "เข้ารหัส"\nC. username ส่งเป็น clear-text\n\n📗 จำไว้สอบ: RADIUS เข้ารหัสแค่ password | TACACS+ เข้ารหัสทั้ง payload (ต่างกันข้อนี้ออกสอบบ่อย)',
  },
  {
    id: 494,
    kind: 'single',
    prompt:
      'A network administrator must compress the 64-bit IPv6 address 2001:0EB8:00C1:2200:0001:0000:0000:0331. Which IP address must the administrator configure?',
    options: [
      { key: 'A', text: 'ipv6 address 21:EB8:C1:2200:1::331' },
      { key: 'B', text: 'ipv6 address 2001:EB8:C1:22:1::331' },
      { key: 'C', text: 'ipv6 address 2001:EB8:C1:2200:1::331/64' },
      { key: 'D', text: 'ipv6 address 2001:EB8:C1:2200:1:0000:331' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎย่อ IPv6: ตัด 0 นำหน้าแต่ละกลุ่ม, ใช้ "::" แทนกลุ่มศูนย์ติดกันได้ครั้งเดียว\n\n🧮 ย่อ 2001:0EB8:00C1:2200:0001:0000:0000:0331:\n• 0EB8→EB8, 00C1→C1, 2200→2200, 0001→1\n• 0000:0000 → :: (สองกลุ่มศูนย์ติดกัน)\n• 0331→331\n→ 2001:EB8:C1:2200:1::331 (พร้อม /64)\n\n✅ ทำไม C ถูก: 2001:EB8:C1:2200:1::331/64 ย่อถูกทุกกลุ่มและใช้ :: แทนสองกลุ่มศูนย์ (พร้อม prefix /64)\n\n❌ ทำไมข้ออื่นผิด:\nA. "21" ผิด (2001 ตัดเป็น 21 ไม่ได้ — ตัดได้แค่ 0 นำหน้า → 2001 คงเดิม)\nB. "22" ผิด (2200 ตัดเป็น 22 ไม่ได้ — 0 อยู่ท้ายไม่ใช่หน้า)\nD. ไม่ได้ใช้ :: ย่อกลุ่มศูนย์ และเหลือ 7 กลุ่ม (ไม่ครบ/ผิดรูป)\n\n📗 จำไว้สอบ: ตัดได้เฉพาะ 0 "นำหน้า" กลุ่ม (2200 ≠ 22) • :: ใช้ครั้งเดียวแทนกลุ่มศูนย์ติดกัน',
  },
  {
    id: 495,
    kind: 'single',
    prompt:
      'A network engineer is configuring a switch for SSH remote access. The hostname is already configured. Which additional command must be configured before entering the command to generate the RSA key?',
    options: [
      { key: 'A', text: 'password password' },
      { key: 'B', text: 'crypto key generate rsa modulus 1024' },
      { key: 'C', text: 'ip domain-name domain' },
      { key: 'D', text: 'ip ssh authentication-retries 2' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ก่อนรัน "crypto key generate rsa" อุปกรณ์ต้องมี "ชื่อเต็ม (FQDN)" ซึ่งประกอบด้วย hostname + domain name (IOS ใช้ตั้งชื่อคู่กุญแจ). โจทย์บอกตั้ง hostname แล้ว → ที่ขาดคือ "ip domain-name"\n\n✅ ทำไม C ถูก: ต้อง "ip domain-name <ชื่อโดเมน>" ก่อน จึงจะ generate RSA key ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. "password password" ไม่ใช่คำสั่งที่เกี่ยวกับการสร้างคีย์\nB. เป็น "คำสั่งสร้างคีย์เอง" (โจทย์ถามคำสั่งที่ต้องทำ "ก่อน" คำสั่งนี้)\nD. ip ssh authentication-retries ปรับจำนวนครั้งลองล็อกอิน ทำหลังมี SSH แล้ว ไม่ใช่เงื่อนไขสร้างคีย์\n\n📗 จำไว้สอบ: ก่อน crypto key generate rsa ต้องมี hostname (ไม่ default) + ip domain-name',
  },
  {
    id: 496,
    kind: 'multi',
    image: q496,
    prompt:
      'Refer to the exhibit. R1 has ip domain-name configured and "login local" on the vty lines, but "show ssh" reports no SSH connections running and there is no RSA key. Which two commands must be added so that R1 accepts only encrypted connections? (Choose two.)',
    options: [
      { key: 'A', text: 'username CNAC secret R!41!4319115@' },
      { key: 'B', text: 'ip ssh version 2' },
      { key: 'C', text: 'line vty 0 4' },
      { key: 'D', text: 'crypto key generate rsa 1024' },
      { key: 'E', text: 'transport input ssh' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — "accept only encrypted connections" = ให้เข้าได้เฉพาะ SSH (บล็อก Telnet). สิ่งที่ยังขาด: (1) สร้าง RSA key (ไม่มีคีย์ = SSH ทำงานไม่ได้เลย), (2) จำกัด vty ให้รับเฉพาะ SSH\n\n✅ ทำไม D, E ถูก:\nD. "crypto key generate rsa 1024" → สร้างคู่กุญแจที่ SSH ต้องใช้ (จากที่ show ssh บอกว่าไม่มี server ทำงาน)\nE. "transport input ssh" (ใต้ line vty) → อนุญาตเฉพาะ SSH บน vty → บล็อก Telnet ที่ไม่เข้ารหัส\n\n❌ ทำไมข้ออื่นผิด:\nA. username secret มีประโยชน์ต่อ login local แต่ exhibit มี login local อยู่แล้ว และข้อนี้ไม่ใช่สิ่งที่ทำให้ "รับเฉพาะ encrypted"\nB. ip ssh version 2 เป็นการ hardening เพิ่มเติม แต่ไม่ใช่สองคำสั่งที่จำเป็นสุดเพื่อ "ให้ SSH ทำงานและรับเฉพาะ encrypted"\nC. line vty 0 4 เป็นแค่การเข้าโหมด (โครงเดิมมีอยู่แล้ว) ไม่ใช่คำสั่งที่ทำให้เข้ารหัส\n\n📗 จำไว้สอบ: รับเฉพาะ encrypted = crypto key generate rsa + transport input ssh (ตัด Telnet)',
  },
  {
    id: 497,
    kind: 'multi',
    prompt:
      'A network engineer must configure two subnets from the block 10.70.128.0: the first must support 24 hosts and the second must support 472 hosts. Both must use the longest possible subnet mask, and the router interface must use the first available (usable) address in each subnet. Which two configurations must be used? (Choose two.)',
    options: [
      { key: 'A', text: 'interface vlan 1234 / ip address 10.70.159.1 255.255.254.0' },
      { key: 'B', text: 'interface vlan 1148 / ip address 10.70.148.1 255.255.254.0' },
      { key: 'C', text: 'interface vlan 4722 / ip address 10.70.133.17 255.255.255.192' },
      { key: 'D', text: 'interface vlan 3002 / ip address 10.70.147.17 255.255.255.224' },
      { key: 'E', text: 'interface vlan 155 / ip address 10.70.155.65 255.255.255.224' },
    ],
    correct: ['B', 'E'],
    explanation:
      '⚠️ หมายเหตุ: เฉลยต้นฉบับตอบ B,D แต่ D ผิด — 10.70.147.17 ไม่ใช่ "first usable" ของ /27 คำตอบที่ถูกต้องคือ B,E\n\n📘 แนวคิด — หา mask ยาวสุด (subnet เล็กสุด) ที่ยังพอ + ใช้ IP แรกที่ใช้งานได้ (network+1)\n\n🧮 คำนวณ:\n• 472 hosts → /23 (255.255.254.0 = 510 usable). /23 network ต้องมี 3rd octet เป็นเลขคู่: 10.70.148.0/23 (.148.0–.149.255), first usable = 10.70.148.1 → ตรงกับ B ✔\n• 24 hosts → /27 (255.255.255.224 = 30 usable). /27 first usable ต้องลงท้าย .1/.33/.65/.97/... → 10.70.155.64/27 first usable = 10.70.155.65 → ตรงกับ E ✔\n\n✅ ทำไม B, E ถูก: B เป็น first-usable ของ /23 ที่ถูกต้อง, E เป็น first-usable ของ /27 ที่ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.70.159.1 /23 → /23 ที่ครอบ .159 คือ 10.70.158.0/23 (first usable .158.1) ไม่ใช่ .159.1\nC. /26 (255.255.255.192) ไม่ใช่ mask "ยาวสุด" สำหรับ 24 hosts (ต้อง /27) และ .133.17 ไม่ใช่ first usable\nD. 10.70.147.17 /27 → /27 ที่ครอบ .17 คือ 10.70.147.0/27 (first usable .147.1) ไม่ใช่ .147.17\n\n📗 จำไว้สอบ: /27 first usable ลงท้าย .1/.33/.65/.97/.129/.161/.193/.225 • /23 network 3rd octet ต้องเป็นเลขคู่',
  },
  {
    id: 498,
    kind: 'single',
    prompt: 'What is a function of Opportunistic Wireless Encryption (OWE) in an environment?',
    options: [
      { key: 'A', text: 'offer compression' },
      { key: 'B', text: 'increase security by using a WEP connection' },
      { key: 'C', text: 'provide authentication' },
      { key: 'D', text: 'protect traffic on open networks' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — OWE (Opportunistic Wireless Encryption หรือ Enhanced Open) ใช้กับเครือข่าย "เปิด" (ไม่มีรหัส เช่น Wi-Fi สาธารณะ): มันเข้ารหัสทราฟฟิกระหว่าง client กับ AP โดยอัตโนมัติ "โดยไม่ต้องใส่รหัสผ่าน" → ป้องกันการดักฟังบนเครือข่ายเปิด\n\n✅ ทำไม D ถูก: OWE ปกป้อง (เข้ารหัส) ทราฟฟิกบน open network โดยไม่ต้องมีรหัส\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่ได้ทำ compression\nB. WEP เป็นการเข้ารหัสเก่าที่แตกง่าย (OWE ไม่ได้ใช้ WEP)\nC. OWE ไม่ได้ทำ authentication (ยังเป็น open ไม่มีการยืนยันตัวตน) — มันแค่เข้ารหัส\n\n📗 จำไว้สอบ: OWE / Enhanced Open = เข้ารหัสทราฟฟิกบนเครือข่ายเปิด (ไม่ต้องใส่รหัส, ไม่ authenticate)',
  },
  {
    id: 499,
    kind: 'multi',
    image: q499,
    prompt:
      'Refer to the exhibit. "show etherchannel summary" shows Po10(SU) using LACP. Which two commands, when used together, create port channel 10? (Choose two.)',
    options: [
      { key: 'A', text: 'int range g0/0-1 / channel-group 10 mode active' },
      { key: 'B', text: 'int range g0/0-1 / channel-group 10 mode desirable' },
      { key: 'C', text: 'int range g0/0-1 / channel-group 10 mode passive' },
      { key: 'D', text: 'int range g0/0-1 / channel-group 10 mode auto' },
      { key: 'E', text: 'int range g0/0-1 / channel-group 10 mode on' },
    ],
    correct: ['A', 'C'],
    explanation:
      '🔍 อ่าน exhibit: Po10 Protocol = "LACP"\n\n📘 แนวคิด — โหมด channel-group ตามโปรโตคอล:\n• LACP → "active" หรือ "passive"\n• PAgP → "desirable" หรือ "auto"\n• Static → "on"\nPo10 เป็น LACP → ใช้ได้เฉพาะ active/passive (คู่ที่ใช้ได้: active+active, active+passive)\n\n✅ ทำไม A, C ถูก: "channel-group 10 mode active" และ "mode passive" เป็นโหมด LACP → ตรงกับ Po10 ที่เป็น LACP\n\n❌ ทำไมข้ออื่นผิด:\nB/D. desirable, auto = โหมด PAgP ไม่ใช่ LACP\nE. on = static (ไม่ใช้โปรโตคอล) → จะไม่ขึ้นว่าเป็น LACP\n\n📗 จำไว้สอบ: LACP = active/passive | PAgP = desirable/auto | Static = on (ห้ามผสมข้ามโปรโตคอล)',
  },
  {
    id: 500,
    kind: 'single',
    image: q500,
    prompt:
      'Refer to the exhibit. A static route must be configured on R14 to forward traffic for the 172.21.34.0 network that resides on R86. (R14 Fa0/0 = 10.73.65.65, R86 Fa0/0 = 10.73.65.66, link 10.73.65.64/30.) Which command fulfills the request?',
    options: [
      { key: 'A', text: 'ip route 172.21.34.0 255.255.255.192 10.73.65.65' },
      { key: 'B', text: 'ip route 172.21.34.0 255.255.255.0 10.73.65.65' },
      { key: 'C', text: 'ip route 172.21.34.0 255.255.128.0 10.73.65.64' },
      { key: 'D', text: 'ip route 172.21.34.0 255.255.255.128 10.73.65.66' },
    ],
    correct: ['D'],
    explanation:
      '🔍 อ่าน exhibit: R14 = 10.73.65.65, R86 = 10.73.65.66 (ลิงก์ 10.73.65.64/30). ปลายทาง 172.21.34.0 อยู่ที่ R86 → next-hop ต้องเป็น "IP ของ R86" = 10.73.65.66\n\n📘 แนวคิด — static route: "ip route <network> <mask> <next-hop>". next-hop ต้องชี้ไปยัง "อีกฝั่ง" ของลิงก์ (R86 = .66) ไม่ใช่ตัวเอง (.65) หรือ network address (.64)\n\n✅ ทำไม D ถูก: next-hop = 10.73.65.66 (R86) ถูกต้อง — เป็นตัวเลือกเดียวที่ชี้ไป R86\n\n❌ ทำไมข้ออื่นผิด:\nA. next-hop 10.73.65.65 = "ตัว R14 เอง" → ชี้กลับตัวเอง ผิด\nB. next-hop 10.73.65.65 = ตัวเองเช่นกัน ผิด\nC. next-hop 10.73.65.64 = "network address" ของลิงก์ /30 (ไม่ใช่ IP ของอุปกรณ์) → ใช้เป็น next-hop ไม่ได้\n(หมายเหตุ: mask ของ 172.21.34.0 อาจต่างกันตามแต่ละตัวเลือก แต่ตัวตัดสินหลักคือ next-hop ต้องเป็น .66 ของ R86)\n\n📗 จำไว้สอบ: static route next-hop = IP ของ router "ปลายทางถัดไป" (อีกฝั่งลิงก์) เสมอ ไม่ใช่ตัวเองหรือ network address',
  },
]
