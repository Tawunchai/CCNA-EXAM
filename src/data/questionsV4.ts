import type { Question } from '../types'

import v4q1 from '../assets/version_4/question_verion4_1.png'
import v4q2 from '../assets/version_4/question_verion4_2.png'
import v4q3 from '../assets/version_4/question_verion4_3.png'
import v4q5 from '../assets/version_4/question_verion4_5.png'
import v4q12 from '../assets/version_4/question_verion4_12_1.png'
import v4q16 from '../assets/version_4/question_verion4_16.png'
import v4q35 from '../assets/version_4/question_verion4_35.png'
import v4q38 from '../assets/version_4/question_verion4_38.png'
import v4q40 from '../assets/version_4/question_verion4_40.png'
import v4q44 from '../assets/version_4/question_verion4_44.png'
import v4q47 from '../assets/version_4/question_verion4_47.png'
import v4q53 from '../assets/version_4/question_verion4_53.png'
import v4q62 from '../assets/version_4/question_verion4_62.png'
import v4q71 from '../assets/version_4/question_verion4_71.png'
import v4q75 from '../assets/version_4/question_verion4_75.png'
import v4q82 from '../assets/version_4/question_verion4_82.png'
import v4q85 from '../assets/version_4/question_verion4_85.png'
import v4q90 from '../assets/version_4/question_verion4_90.png'
import v4q93 from '../assets/version_4/question_verion4_93.png'
import v4q95 from '../assets/version_4/question_verion4_95.png'
import v4q96 from '../assets/version_4/question_verion4_96.png'
import v4q99 from '../assets/version_4/question_verion4_99.png'
import v4q101 from '../assets/version_4/question_verion4_101.png'
import v4q103 from '../assets/version_4/question_verion4_103.png'
import v4q109 from '../assets/version_4/question_verion4_109.png'
import v4q118 from '../assets/version_4/question_verion4_118.png'
import v4q123 from '../assets/version_4/question_verion4_123.png'
import v4q129 from '../assets/version_4/question_verion4_129.png'
import v4q130 from '../assets/version_4/question_verion4_130.png'
import v4q131 from '../assets/version_4/question_verion4_131.png'
import v4q132 from '../assets/version_4/question_verion4_132_1.png'
import v4q134 from '../assets/version_4/question_verion4_134.png'
import v4q135 from '../assets/version_4/question_verion4_135.png'
import v4q136 from '../assets/version_4/question_verion4_136.png'
import v4q137 from '../assets/version_4/question_verion4_137.png'
import v4q139 from '../assets/version_4/question_verion4_139.png'
import v4q141 from '../assets/version_4/question_verion4_141.png'
import v4q143 from '../assets/version_4/question_verion4_143.png'
import v4q146 from '../assets/version_4/question_verion4_146.png'
import v4q148 from '../assets/version_4/question_verion4_148.png'
import v4q150 from '../assets/version_4/question_verion4_150.png'
import v4q153 from '../assets/version_4/question_verion4_153_1.png'
import v4q154 from '../assets/version_4/question_verion4_154.png'
import v4q155 from '../assets/version_4/question_verion4_155.png'
import v4q156 from '../assets/version_4/question_verion4_156.png'
import v4q166 from '../assets/version_4/question_verion4_166.png'
import v4q173 from '../assets/version_4/question_verion4_173.png'
import v4q175 from '../assets/version_4/question_verion4_175.png'
import v4q176 from '../assets/version_4/question_verion4_176.png'
import v4q181 from '../assets/version_4/question_verion4_181.png'
import v4q182 from '../assets/version_4/question_verion4_182_1.png'
import v4q184 from '../assets/version_4/question_verion4_184.png'
import v4q186 from '../assets/version_4/question_verion4_186.png'
import v4q187 from '../assets/version_4/question_verion4_187.png'
import v4q189 from '../assets/version_4/question_verion4_189.png'
import v4q194 from '../assets/version_4/question_verion4_194.png'
import v4q195 from '../assets/version_4/question_verion4_195.png'
import v4q199 from '../assets/version_4/question_verion4_199.png'
import v4q201 from '../assets/version_4/question_verion4_201.png'
import v4q202 from '../assets/version_4/question_verion4_202.png'
import v4q203 from '../assets/version_4/question_verion4_203.png'
import v4q207 from '../assets/version_4/question_verion4_207.png'
import v4q209 from '../assets/version_4/question_verion4_209.png'
import v4q213 from '../assets/version_4/question_verion4_213.png'
import v4q229 from '../assets/version_4/question_verion4_229.png'
import v4q237 from '../assets/version_4/question_verion4_237.png'
import v4q242 from '../assets/version_4/question_verion4_242.png'
import v4q247 from '../assets/version_4/question_verion4_247.png'
import v4q248a from '../assets/version_4/question_verion4_248_1.png'
import v4q248b from '../assets/version_4/question_verion4_248_2.png'
import v4q249 from '../assets/version_4/question_verion4_249.png'
import v4q254 from '../assets/version_4/question_verion4_254.png'
import v4q258 from '../assets/version_4/question_verion4_258.png'
import v4q260 from '../assets/version_4/question_verion4_260.png'
import v4q261 from '../assets/version_4/question_verion4_261.png'
import v4q263 from '../assets/version_4/question_verion4_263.png'
import v4q264 from '../assets/version_4/question_verion4_264.png'
import v4q266 from '../assets/version_4/question_verion4_266.png'
import v4q268 from '../assets/version_4/question_verion4_268.png'
import v4q269 from '../assets/version_4/question_verion4_269.png'
import v4q270 from '../assets/version_4/question_verion4_270.png'
import v4q272 from '../assets/version_4/question_verion4_272.png'
import v4q274 from '../assets/version_4/question_verion4_274.png'
import v4q275 from '../assets/version_4/question_verion4_275.png'
import v4q276 from '../assets/version_4/question_verion4_276.png'
import v4q277 from '../assets/version_4/question_verion4_277.png'
import v4q278 from '../assets/version_4/question_verion4_278.png'
import v4q279 from '../assets/version_4/question_verion4_279.png'
import v4q280 from '../assets/version_4/question_verion4_280.png'
import v4q282 from '../assets/version_4/question_verion4_282.png'
import v4q284 from '../assets/version_4/question_verion4_284.png'
import v4q287 from '../assets/version_4/question_verion4_287.png'
import v4q288 from '../assets/version_4/question_verion4_288.png'
import v4q290 from '../assets/version_4/question_verion4_290.png'
import v4q292 from '../assets/version_4/question_verion4_292.png'
import v4q293 from '../assets/version_4/question_verion4_293.png'
import v4q296 from '../assets/version_4/question_verion4_296.png'
import v4q299 from '../assets/version_4/question_verion4_299.png'
import v4q306 from '../assets/version_4/question_verion4_306.png'
import v4q307 from '../assets/version_4/question_verion4_307.png'
import v4q308 from '../assets/version_4/question_verion4_308.png'
import v4q309 from '../assets/version_4/question_verion4_309.png'
import v4q310 from '../assets/version_4/question_verion4_310.png'
import v4q312 from '../assets/version_4/question_verion4_312.png'
import v4q317a from '../assets/version_4/question_verion4_317_1.png'
import v4q317b from '../assets/version_4/question_verion4_317_2.png'
import v4q319 from '../assets/version_4/question_verion4_319.png'
import v4q320a from '../assets/version_4/question_verion4_320_1.png'
import v4q320b from '../assets/version_4/question_verion4_320_2.png'
import v4q321 from '../assets/version_4/question_verion4_321.png'
import v4q322 from '../assets/version_4/question_verion4_322.png'
import v4q323a from '../assets/version_4/question_verion4_323_1.png'
import v4q323b from '../assets/version_4/question_verion4_323_2.png'
import v4q324 from '../assets/version_4/question_verion4_324.png'
import v4q326 from '../assets/version_4/question_verion4_326.png'
import v4q329 from '../assets/version_4/question_verion4_329.png'
import v4q330 from '../assets/version_4/question_verion4_330.png'
import v4q336 from '../assets/version_4/question_verion4_336.png'
import v4q340 from '../assets/version_4/question_verion4_340.png'
import v4q342 from '../assets/version_4/question_verion4_342.png'
import v4q343 from '../assets/version_4/question_verion4_343.png'
import v4q347 from '../assets/version_4/question_verion4_347.png'
import v4q349 from '../assets/version_4/question_verion4_349.png'
import v4q350 from '../assets/version_4/question_verion4_350.png'
import v4q351 from '../assets/version_4/question_verion4_351.png'
import v4q354 from '../assets/version_4/question_verion4_354.png'
import v4q355 from '../assets/version_4/question_verion4_355.png'
import v4q356 from '../assets/version_4/question_verion4_356.png'
import v4q357 from '../assets/version_4/question_verion4_357.png'
import v4q358 from '../assets/version_4/question_verion4_358.png'
import v4q359 from '../assets/version_4/question_verion4_359.png'
import v4q362 from '../assets/version_4/question_verion4_362.png'
import v4q366 from '../assets/version_4/question_verion4_366.png'
import v4q368 from '../assets/version_4/question_verion4_368.png'
import v4q370 from '../assets/version_4/question_verion4_370.png'
import v4q372 from '../assets/version_4/question_verion4_372.png'
import v4q375 from '../assets/version_4/question_verion4_375.png'
import v4q379 from '../assets/version_4/question_verion4_379.png'
import v4q380 from '../assets/version_4/question_verion4_380.png'
import v4q383 from '../assets/version_4/question_verion4_383.png'
import v4q386 from '../assets/version_4/question_verion4_386.png'
import v4q387 from '../assets/version_4/question_verion4_387.png'
import v4q388 from '../assets/version_4/question_verion4_388.png'
import v4q389 from '../assets/version_4/question_verion4_389.png'
import v4q391 from '../assets/version_4/question_verion4_391.png'
import v4q394 from '../assets/version_4/question_verion4_394.png'
import v4q396 from '../assets/version_4/question_verion4_396.png'
import v4q398 from '../assets/version_4/question_verion4_398.png'
import v4q399 from '../assets/version_4/question_verion4_399.png'
import v4q400 from '../assets/version_4/question_verion4_400.png'

/**
 * BIG CCNA — ชุดที่ 4 (ข้อ 1–400)
 *
 * เฉลยทุกข้อตรวจทานใหม่ตามหลัก CCNA 200-301 ไม่ได้คัดลอกจากคีย์ในไฟล์ต้นฉบับ
 * ข้อที่คีย์ต้นฉบับ/คีย์ที่แพร่หลายทางอินเทอร์เน็ตขัดกับหลักการ จะมีบรรทัด
 * "⚠️ หมายเหตุ" กำกับไว้ในคำอธิบาย
 */
export const QUESTIONS_V4: Question[] = [
  {
    id: 1,
    kind: 'single',
    image: v4q1,
    prompt: 'Refer to the exhibit. Which type of route does R1 use to reach host 10.10.13.10/32?',
    options: [
      { key: 'A', text: 'default route' },
      { key: 'B', text: 'network route' },
      { key: 'C', text: 'host route' },
      { key: 'D', text: 'floating static route' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ชนิดของเส้นทางในตารางเราต์ ดูจาก "ความยาวพรีฟิกซ์" ของตัวเส้นทาง ไม่ใช่ของปลายทางที่เราถาม\n• default route → 0.0.0.0/0 ครอบคลุมทุกปลายทาง ใช้เมื่อไม่มีอะไรตรงเลย\n• network route → พรีฟิกซ์ที่สั้นกว่า /32 เช่น /24 /25 /28 คือ "ทั้งเครือข่าย"\n• host route → พรีฟิกซ์ /32 พอดี ชี้ไปที่โฮสต์เดียวเท่านั้น\n• floating static route → static route ที่ตั้ง AD สูงกว่าปกติไว้เป็นตัวสำรอง (จะไม่โผล่ในตารางจนกว่าเส้นหลักจะล่ม)\n\n🔍 อ่าน exhibit — ตาราง R1 มี 5 บรรทัด\n• C 10.10.10.0/30 → directly connected\n• O 10.10.13.0/25 [110/6576] via 10.10.10.1\n• C 10.10.10.16/30 → directly connected\n• O 10.10.13.144/28 [110/110] via 10.10.10.1\n• B* 0.0.0.0/0 [20/0] via 10.10.10.18\n\n✅ ทำไม B ถูก: หา longest match ของ 10.10.13.10\n• 10.10.13.0/25 → ช่วง 10.10.13.0 – 10.10.13.127 → 10.10.13.10 อยู่ในช่วงนี้ ✔\n• 10.10.13.144/28 → ช่วง 10.10.13.144 – 10.10.13.159 → ไม่ครอบคลุม ✘\nดังนั้น R1 ใช้บรรทัด 10.10.13.0/25 ซึ่งเป็นพรีฟิกซ์ "ทั้งเครือข่าย" (/25 < /32) จึงเรียกว่า network route\n\n❌ ทำไมข้ออื่นผิด:\nA. default route (0.0.0.0/0) จะถูกใช้ก็ต่อเมื่อไม่มีเส้นทางที่เจาะจงกว่า — แต่ที่นี่มี /25 ตรงอยู่ จึงไม่ใช้ default\nC. host route ต้องเป็น /32 ในตาราง — โจทย์เขียน /32 ที่ "ปลายทางที่เราถาม" ไม่ใช่ที่ตัวเส้นทาง เป็นกับดักคลาสสิก\nD. ไม่มี static route ในตารางเลย (ทุกบรรทัดเป็น C, O, B) จึงไม่มีทางเป็น floating static\n\n📗 จำไว้สอบ: ดูชนิดเส้นทางที่ "พรีฟิกซ์ในตาราง" ไม่ใช่ที่ IP ปลายทาง • /32=host route, 0.0.0.0/0=default, อื่น ๆ =network route',
  },
  {
    id: 2,
    kind: 'single',
    image: v4q2,
    prompt: 'Refer to the exhibit. Which prefix does Router1 use for traffic to Host A?',
    options: [
      { key: 'A', text: '10.10.10.0/28' },
      { key: 'B', text: '10.10.13.0/25' },
      { key: 'C', text: '10.10.13.144/28' },
      { key: 'D', text: '10.10.13.208/29' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — Longest Prefix Match: เราเตอร์เลือกเส้นทางที่ "ตรงและเจาะจงที่สุด" (subnet mask ยาวที่สุด) ก่อนเสมอ AD และ metric จะถูกนำมาเทียบก็ต่อเมื่อพรีฟิกซ์ยาวเท่ากันเท่านั้น\n\n🔍 อ่าน exhibit: Host A = 10.10.13.214 — ไล่ดูทุกบรรทัดที่ขึ้นต้น 10.10.13\n• 10.10.13.0/25 → block 128 → ช่วง .0 – .127 → 214 ไม่อยู่ ✘\n• 10.10.13.128/28 → block 16 → ช่วง .128 – .143 ✘\n• 10.10.13.144/28 → ช่วง .144 – .159 ✘\n• 10.10.13.160/29 → block 8 → ช่วง .160 – .167 ✘\n• 10.10.13.208/29 → ช่วง .208 – .215 → 214 อยู่ในช่วงนี้ ✔\n\n✅ ทำไม D ถูก: 10.10.13.208/29 เป็นบรรทัดเดียวที่ครอบคลุม 10.10.13.214 (และยังเป็นพรีฟิกซ์ที่ยาวที่สุดด้วย /29)\n\n❌ ทำไมข้ออื่นผิด:\nA. 10.10.10.0/28 เป็นซับเน็ตของลิงก์ระหว่าง Router1 กับ Switch1 ไม่เกี่ยวกับ 10.10.13.x\nB. 10.10.13.0/25 ครอบเฉพาะ .0–.127 ไม่ถึง .214\nC. 10.10.13.144/28 ครอบเฉพาะ .144–.159\n\n📗 จำไว้สอบ: /29 block=8, /28 block=16, /27 block=32, /26 block=64, /25 block=128 • หาช่วงก่อน แล้วค่อยตอบ',
  },
  {
    id: 3,
    kind: 'drag',
    image: v4q3,
    prompt: 'Drag and drop the descriptions of file-transfer protocols from the left onto the correct protocols on the right.',
    categories: [
      {
        name: 'FTP',
        items: ['provides reliability when loading an IOS image upon boot up', 'uses ports 20 and 21', 'uses TCP'],
      },
      { name: 'TFTP', items: ['does not require user authentication', 'uses port 69', 'uses UDP'] },
    ],
    explanation:
      '📘 แนวคิด — FTP กับ TFTP ทำงานคนละชั้นความน่าเชื่อถือ\n\n🔹 FTP (File Transfer Protocol)\n• วิ่งบน TCP → มี 3-way handshake, ACK, retransmission → เชื่อถือได้\n• ใช้ 2 พอร์ต: TCP 21 = control channel (คำสั่ง), TCP 20 = data channel (ข้อมูลจริง)\n• ต้อง login ด้วย username/password (หรือ anonymous)\n• เพราะ TCP รับประกันการส่ง จึงเหมาะกับการโหลด IOS image ตอนบูต — ถ้าไฟล์ IOS ขาดไปแม้แต่ไบต์เดียวเราเตอร์จะบูตไม่ขึ้น\n\n🔹 TFTP (Trivial FTP)\n• วิ่งบน UDP พอร์ต 69 → ไม่มี handshake ไม่มี ACK ระดับ transport\n• ไม่มีระบบยืนยันตัวตนเลย (no username/password) → ง่ายแต่ไม่ปลอดภัย\n• โค้ดเล็กมาก จึงยัดลง ROM ของอุปกรณ์ได้ ใช้กู้ระบบ/ก๊อป config ในแลน\n\n🔍 จับคู่:\n• provides reliability when loading an IOS image upon boot up → FTP (ความน่าเชื่อถือมาจาก TCP)\n• uses ports 20 and 21 → FTP\n• uses TCP → FTP\n• does not require user authentication → TFTP\n• uses port 69 → TFTP\n• uses UDP → TFTP\n\n📗 จำไว้สอบ: FTP = TCP 20/21 + ต้อง login | TFTP = UDP 69 + ไม่ต้อง login | SFTP = SSH 22, FTPS = FTP over TLS',
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
      '📘 แนวคิด — FCS (Frame Check Sequence) คือช่อง 4 ไบต์ท้ายเฟรมอีเทอร์เน็ตที่เก็บค่า CRC ผู้รับคำนวณ CRC ใหม่แล้วเทียบ ถ้าไม่ตรง = เฟรมเสียหาย\n\n🔹 ตัวนับใน show interfaces และความหมาย\n• CRC → เฟรมมาถึงครบแต่ค่า checksum ไม่ตรง (สายเสีย, EMI, duplex mismatch)\n• runts → เฟรมสั้นกว่า 64 ไบต์\n• giants → เฟรมยาวกว่า 1518 ไบต์ (เกิน MTU)\n• frame → เฟรมมี CRC ผิด "และ" จำนวนบิตไม่ครบไบต์ (alignment error)\n• input errors → ตัวรวมยอด = runts + giants + no buffer + CRC + frame + overrun + ignored\n\n✅ ทำไม A และ D ถูก: เฟรมที่สอบ FCS ไม่ผ่าน → CRC เพิ่มขึ้น 1 และเพราะ input errors เป็นผลรวมของ error ขาเข้าทั้งหมด input errors จึงเพิ่มขึ้นตามไปด้วยเสมอ\n\n❌ ทำไมข้ออื่นผิด:\nB. frame จะเพิ่มเฉพาะกรณี alignment error (บิตไม่ลงตัวเป็นไบต์) ซึ่งเป็นชุดย่อยเฉพาะ ไม่ใช่ทุกครั้งที่ FCS ผิด\nC. giants เพิ่มเมื่อเฟรมยาวเกินเท่านั้น ไม่เกี่ยวกับ FCS\nE. runts เพิ่มเมื่อเฟรมสั้นเกินเท่านั้น\n\n📗 จำไว้สอบ: FCS fail → CRC + input errors • CRC สูง = ปัญหาชั้นกายภาพ (สาย/หัว/duplex mismatch)',
  },
  {
    id: 5,
    kind: 'drag',
    image: v4q5,
    prompt: 'Drag and drop the IPv4 network subnets from the left onto the correct usable host ranges on the right.',
    categories: [
      { name: '172.28.192.1 - 172.28.255.254', items: ['172.28.228.144/18'] },
      { name: '172.28.224.1 - 172.28.231.254', items: ['172.28.228.144/21'] },
      { name: '172.28.228.1 - 172.28.229.254', items: ['172.28.228.144/23'] },
      { name: '172.28.228.129 - 172.28.228.254', items: ['172.28.228.144/25'] },
      { name: '172.28.228.145 - 172.28.228.150', items: ['172.28.228.144/29'] },
    ],
    explanation:
      '📘 แนวคิด — วิธีหาช่วงโฮสต์ที่ใช้ได้ 3 ขั้น\n1️⃣ หา block size = 256 − ค่าอ็อกเท็ตที่ "น่าสนใจ" ของ subnet mask\n2️⃣ นับทีละ block จนถึงค่าที่ ≤ ตัวเลขใน IP → ได้ network address\n3️⃣ usable = network+1 ถึง broadcast−1\n\n🔍 คำนวณทีละข้อ (IP เดิม 172.28.228.144 ทุกครั้ง)\n\n• /18 → mask 255.255.192.0 → block 64 ที่อ็อกเท็ต 3 → 0, 64, 128, 192 → 228 อยู่ในช่วง 192–255\n  network 172.28.192.0 | broadcast 172.28.255.255 | usable 172.28.192.1 – 172.28.255.254\n\n• /21 → mask 255.255.248.0 → block 8 ที่อ็อกเท็ต 3 → …216, 224, 232 → 228 อยู่ในช่วง 224–231\n  network 172.28.224.0 | broadcast 172.28.231.255 | usable 172.28.224.1 – 172.28.231.254\n\n• /23 → mask 255.255.254.0 → block 2 ที่อ็อกเท็ต 3 → เลขคู่เสมอ → 228\n  network 172.28.228.0 | broadcast 172.28.229.255 | usable 172.28.228.1 – 172.28.229.254\n\n• /25 → mask 255.255.255.128 → block 128 ที่อ็อกเท็ต 4 → 0 หรือ 128 → 144 อยู่ครึ่งหลัง\n  network 172.28.228.128 | broadcast 172.28.228.255 | usable 172.28.228.129 – 172.28.228.254\n\n• /29 → mask 255.255.255.248 → block 8 ที่อ็อกเท็ต 4 → …136, 144, 152 → 144 พอดี\n  network 172.28.228.144 | broadcast 172.28.228.151 | usable 172.28.228.145 – 172.28.228.150\n\n📗 จำไว้สอบ: /18=block 64 (อ็อกเท็ต 3), /21=8, /23=2, /25=128 (อ็อกเท็ต 4), /29=8 • ยิ่ง prefix ยาว ช่วงยิ่งแคบ',
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
      '📘 แนวคิด — TCP vs UDP เรื่องการ "สร้างการเชื่อมต่อ"\n\n🔹 TCP = connection-oriented\n• ก่อนส่งข้อมูลจริงต้องทำ 3-way handshake: SYN → SYN-ACK → ACK\n• ปิดการเชื่อมต่อด้วย FIN/ACK (4-way)\n• มี sequence number, acknowledgment, retransmission, flow control (windowing)\n\n🔹 UDP = connectionless\n• ยิงดาต้าแกรมออกไปเลย ไม่มี handshake ไม่มี ACK\n• "best-effort" — ถ้าหายก็หาย แอปพลิเคชันต้องจัดการเอง\n• เฮดเดอร์เล็กแค่ 8 ไบต์ (TCP 20 ไบต์ขึ้นไป) → overhead ต่ำ เร็วกว่า\n\n✅ ทำไม A ถูก: บอกถูกทั้งสองฝั่ง — TCP ใช้ three-way handshake ในการเปิดการเชื่อมต่อ ส่วน UDP ไม่มีกลไกรับประกันการส่งถึง\n\n❌ ทำไมข้ออื่นผิด:\nB. UDP ไม่มี acknowledgment packet เลย — สลับหน้าที่กันมั่ว\nC. กลับด้านทั้งคู่ — TCP ต่างหากที่เชื่อถือได้และเป็น connection-oriented\nD. ผิด 2 ชั้น — บิต SYN/ACK/FIN อยู่ใน "TCP header" (ชั้น 4) ไม่ใช่ frame header (ชั้น 2) และ UDP ไม่มีบิตพวกนี้เลย\n\n📗 จำไว้สอบ: TCP = SYN, SYN-ACK, ACK (3-way) เฮดเดอร์ 20B | UDP = ไม่มี handshake เฮดเดอร์ 8B',
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
      '📘 แนวคิด — เฟรม 802.11 แบ่งเป็น 3 ชนิดใหญ่ (ดูที่ฟิลด์ Type ใน Frame Control)\n\n🔹 Management frame (Type 00) — ใช้จัดการการเข้า/ออกเครือข่าย\n• Beacon, Probe Request/Response\n• Authentication / Deauthentication\n• Association Request / Association Response ⭐\n• Reassociation Request/Response, Disassociation\n• Action frame (เป็น subtype หนึ่งของ management)\n\n🔹 Control frame (Type 01) — ช่วยจัดคิวการส่ง ไม่มี payload ข้อมูล\n• RTS, CTS, ACK, PS-Poll, Block ACK\n\n🔹 Data frame (Type 10) — เฟรมที่บรรทุกข้อมูลผู้ใช้จริง\n\n✅ ทำไม A ถูก: Association Response คือเฟรมที่ AP ตอบกลับไคลเอนต์เพื่อ "รับเข้าเป็นสมาชิก BSS" พร้อมกำหนด AID (Association ID) — เป็นงานบริหารจัดการการเข้าร่วมเครือข่าย จึงจัดอยู่ในกลุ่ม management\n\n❌ ทำไมข้ออื่นผิด:\nB. protected frame ไม่ใช่ "ชนิดเฟรม" แต่เป็นบิตหนึ่งใน Frame Control ที่บอกว่า payload ถูกเข้ารหัสอยู่\nC. action เป็น subtype ย่อยของ management (ใช้กับ 802.11k/v/r) ไม่ใช่ชนิดของ Association Response\nD. control frame มีแค่ RTS/CTS/ACK ฯลฯ ไม่มี Association Response\n\n📗 จำไว้สอบ: ลำดับเข้า WLAN = Beacon/Probe → Authentication → Association ทั้งหมดเป็น management frame ทั้งสิ้น',
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
      '📘 แนวคิด — สถาปัตยกรรม spine-and-leaf (Clos fabric) ในดาต้าเซ็นเตอร์\n• leaf = สวิตช์ชั้นเข้าถึง เซิร์ฟเวอร์/สตอเรจเสียบที่นี่\n• spine = แกนกลาง ทำหน้าที่ส่งต่อระหว่าง leaf เท่านั้น\n• กติกาเหล็ก: leaf ทุกตัวต้องต่อไป spine "ทุกตัว" | leaf ห้ามต่อกันเอง | spine ห้ามต่อกันเอง\n• ผลลัพธ์: ทุกเซิร์ฟเวอร์ห่างกัน 2 hop เท่ากันหมด → latency คาดเดาได้ และใช้ ECMP กระจายโหลดได้เต็มทุกเส้น (ไม่มีพอร์ตถูก STP บล็อกทิ้ง)\n\n✅ ทำไม C ถูก: เมื่อต้องการ "พอร์ตเข้าถึงเพิ่ม" ก็เพิ่ม leaf switch อีกตัวแล้วลากอัปลิงก์ไปยัง spine ทุกตัว — ขยายได้ทันทีโดยไม่กระทบของเดิม และยังคงคุณสมบัติ 2-hop เท่ากันหมดไว้\n\n❌ ทำไมข้ออื่นผิด:\nA. การเพิ่ม spine ไม่จำเป็นเมื่อต้องการแค่พอร์ตเข้าถึง (spine เพิ่มเมื่อต้องการแบนด์วิดท์/ความทนทานมากขึ้น) และ spine กับ leaf ไม่ได้ต่อ "ระหว่างกันเอง" แบบ redundant คู่เดียว\nB. เพิ่ม spine ช่วยเรื่องแบนด์วิดท์ ไม่ได้เพิ่มพอร์ตให้เซิร์ฟเวอร์เสียบ\nD. ผิดกติกา — leaf ต้องต่อไป spine ทุกตัว ไม่ใช่ตัวเดียว มิฉะนั้นจะเสียคุณสมบัติเส้นทางเท่ากันและกลายเป็นจุดล้มเหลวจุดเดียว\n\n📗 จำไว้สอบ: เพิ่มพอร์ต = เพิ่ม leaf | เพิ่มแบนด์วิดท์/ความทนทาน = เพิ่ม spine | leaf ต่อ spine ทุกตัวเสมอ',
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
      '📘 แนวคิด — Virtual Machine กับ Hypervisor\n• hypervisor คือซอฟต์แวร์ที่นั่งอยู่ระหว่างฮาร์ดแวร์จริงกับ VM\n• หน้าที่หลัก: แบ่ง (virtualize) ทรัพยากรกายภาพ — CPU, RAM, storage, NIC — ออกเป็นชุดเสมือนให้แต่ละ VM\n• Type 1 (bare-metal) → ติดตั้งบนฮาร์ดแวร์ตรง ๆ เช่น VMware ESXi, Hyper-V, KVM → ใช้ในดาต้าเซ็นเตอร์\n• Type 2 (hosted) → ติดตั้งบน OS อีกที เช่น VirtualBox, VMware Workstation → ใช้บนเครื่องส่วนตัว\n• VM แต่ละตัวมี OS ของตัวเอง (guest OS) และไม่รู้ว่ากำลังแชร์ฮาร์ดแวร์กับใครอยู่\n\n✅ ทำไม C ถูก: นิยามตรงตัวของ hypervisor คือการจำลองส่วนประกอบทางกายภาพ (CPU, memory, storage) ให้ VM ใช้งานราวกับเป็นเครื่องจริง\n\n❌ ทำไมข้ออื่นผิด:\nA. hypervisor ทำงานหลัก ๆ ที่ชั้น 2 ผ่าน virtual switch (vSwitch) และแน่นอนว่า "ต้องใช้" ทรัพยากรของโฮสต์\nB. hypervisor หนึ่งตัวรัน VM ได้หลายสิบ–หลายร้อยตัว และสร้าง vSwitch ได้หลายตัว\nD. VM ต่อออกนอกผ่าน virtual switch ที่อยู่ "ภายใน" hypervisor เอง ไม่ต้องมีสวิตช์กายภาพแยก\n\n📗 จำไว้สอบ: hypervisor = จำลอง CPU/RAM/Storage ให้ VM • Type 1 = bare-metal (ดาต้าเซ็นเตอร์), Type 2 = hosted (เดสก์ท็อป)',
  },
  {
    id: 10,
    kind: 'single',
    prompt: 'Which command automatically generates an IPv6 address from a specified IPv6 prefix and MAC address of an interface?',
    options: [
      { key: 'A', text: 'ipv6 address dhcp' },
      { key: 'B', text: 'ipv6 address 2001:DB8:5:112::/64 eui-64' },
      { key: 'C', text: 'ipv6 address autoconfig' },
      { key: 'D', text: 'ipv6 address 2001:DB8:5:112::2/64 link-local' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — EUI-64 คือวิธีสร้าง "ครึ่งหลัง" (interface ID 64 บิต) ของที่อยู่ IPv6 จาก MAC address 48 บิต\n\n🔧 ขั้นตอน EUI-64\n1️⃣ ผ่า MAC 48 บิตเป็นสองครึ่ง (OUI 24 บิต | serial 24 บิต)\n2️⃣ แทรก FF:FE ลงตรงกลาง → ได้ 64 บิต\n3️⃣ กลับบิตที่ 7 จากซ้าย (U/L bit) ของไบต์แรก\nตัวอย่าง MAC 0012.7FEB.6B40 → 0212:7FFF:FEEB:6B40\n\n✅ ทำไม B ถูก: คำสั่ง ipv6 address <prefix>/64 eui-64 บอกให้เราเตอร์ใช้พรีฟิกซ์ที่เราระบุเป็นครึ่งหน้า แล้ว "คำนวณครึ่งหลังเองจาก MAC ของอินเทอร์เฟซนั้น" ตรงกับที่โจทย์ถามทุกประการ\n\n❌ ทำไมข้ออื่นผิด:\nA. ipv6 address dhcp → ขอที่อยู่ทั้งก้อนจากเซิร์ฟเวอร์ DHCPv6 (stateful) ไม่ได้ใช้ MAC และไม่ได้ระบุพรีฟิกซ์เอง\nC. ipv6 address autoconfig → SLAAC ซึ่ง "รอฟังพรีฟิกซ์จาก RA ของเราเตอร์ตัวอื่น" ไม่ใช่พรีฟิกซ์ที่เราระบุเอง (โจทย์บอกว่า specified prefix)\nD. ใส่ที่อยู่แบบตายตัว ::2 เอง แถมคีย์เวิร์ด link-local ยังขัดกับพรีฟิกซ์ 2001:DB8 ที่เป็น global unicast\n\n📗 จำไว้สอบ: eui-64 = เรากำหนดพรีฟิกซ์ + เราเตอร์คำนวณจาก MAC | autoconfig (SLAAC) = ฟังพรีฟิกซ์จาก RA | dhcp = ขอทั้งก้อนจากเซิร์ฟเวอร์',
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
      '📘 แนวคิด — กลุ่ม multicast มาตรฐานของ IPv6 (ขึ้นต้น FF เสมอ)\n• FF02::1 → all-nodes ทุกอุปกรณ์ที่เปิด IPv6 บนลิงก์เข้าร่วมกลุ่มนี้ ⭐ (แทน broadcast ของ IPv4)\n• FF02::2 → all-routers เฉพาะเราเตอร์ (อุปกรณ์ที่เปิด ipv6 unicast-routing)\n• FF02::5 / FF02::6 → OSPFv3 all-SPF-routers / all-DR-routers\n• FF02::9 → RIPng | FF02::A → EIGRPv6\n• FF02::1:FFxx:xxxx → solicited-node ใช้กับ NDP/DAD แทน ARP\n\n✅ ทำไม D และ E ถูก: เมื่อกำหนดที่อยู่ IPv6 บนอินเทอร์เฟซของ "เราเตอร์" อุปกรณ์จะเข้าร่วมทั้ง FF02::1 (ในฐานะโหนดหนึ่งบนลิงก์) และ FF02::2 (ในฐานะเราเตอร์) — เห็นได้จาก show ipv6 interface\n\n❌ ทำไมข้ออื่นผิด:\nA. 2000::/3 เป็นบล็อก global unicast ไม่ใช่ multicast\nB. 2002::/16 เป็นบล็อกของ 6to4 tunneling ไม่ใช่ multicast\nC. FC00::/7 เป็น unique local address (ULA) ไม่ใช่ multicast\n\n📗 จำไว้สอบ: multicast ต้องขึ้นต้น FF เท่านั้น • FF02::1=ทุกโหนด, FF02::2=ทุกเราเตอร์, FF02::5/6=OSPFv3, FF02::A=EIGRPv6',
  },
  {
    id: 12,
    kind: 'drag',
    image: v4q12,
    prompt: 'Refer to the exhibit. Drag and drop the networking parameters from the left onto the correct values on the right.',
    categories: [
      { name: '192.168.1.193', items: ['default gateway'] },
      { name: '192.168.1.200', items: ['host IP address'] },
      { name: '00:0C:22:83:79:A3', items: ['NIC MAC address'] },
      { name: '00:0C:22', items: ['NIC vendor OUI'] },
      { name: '255.255.255.192', items: ['subnet mask'] },
    ],
    explanation:
      '📘 แนวคิด — อ่านค่าเครือข่ายจากคำสั่งบนโฮสต์ Linux (ip route / ip addr show)\n\n🔍 อ่าน exhibit ทีละบรรทัด\n• "default via 192.168.1.193 dev eth1" → คำว่า default = เส้นทางสำรองสุดท้าย ปลายทางที่ชี้ไปคือ default gateway → 192.168.1.193\n• "inet 192.168.1.200/26" → นี่คือที่อยู่ IP ของโฮสต์เอง → 192.168.1.200\n• "/26" → mask 26 บิต = 255.255.255.192 (block size 64)\n• "link/ether 00:0C:22:83:79:A3" → MAC address ของ NIC ทั้ง 6 ไบต์\n• OUI (Organizationally Unique Identifier) = 3 ไบต์แรกของ MAC ที่ IEEE จ่ายให้ผู้ผลิต → 00:0C:22\n\n💡 ตรวจทานความสมเหตุสมผล: /26 block 64 → ซับเน็ตคือ 192.168.1.192 – 192.168.1.255 → gateway .193 (โฮสต์แรก) และโฮสต์ .200 อยู่ในซับเน็ตเดียวกันพอดี ✔\n\n📗 จำไว้สอบ: MAC 6 ไบต์ = OUI 3 ไบต์แรก (ผู้ผลิต) + 3 ไบต์หลัง (หมายเลขเครื่อง) • /26=255.255.255.192, /27=224, /28=240, /29=248, /30=252',
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
      '📘 แนวคิด — สวิตช์ชั้น 2 ทำ 3 อย่างกับเฟรม\n1️⃣ Learn → จดจำ "source MAC" คู่กับพอร์ตที่เฟรมเข้ามา ลงตาราง CAM/MAC (อายุ 300 วินาที)\n2️⃣ Forward / Filter → ถ้ารู้จัก destination MAC ส่งออกพอร์ตเดียวที่ตรง\n3️⃣ Flood → ถ้า "ไม่รู้จัก" destination MAC (unknown unicast) หรือเป็น broadcast/multicast → ส่งออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตที่รับเข้ามา\n\n✅ ทำไม C ถูก: unknown unicast flooding คือพฤติกรรมมาตรฐาน สวิตช์จะกระจายเฟรมออกทุกพอร์ตใน VLAN นั้น (ไม่ข้าม VLAN เพราะแต่ละ VLAN เป็นคนละ broadcast domain) และไม่ส่งย้อนออกพอร์ตต้นทาง\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์เรียนรู้จาก "source MAC" เท่านั้น ไม่เคยเรียนรู้จาก destination MAC\nB. การ flood ทำในฮาร์ดแวร์ (ASIC) ไม่ต้องยกขึ้น CPU — ถ้ายกขึ้น CPU ทุกเฟรมสวิตช์คงล่ม\nD. สวิตช์ไม่ดร็อป — การดร็อปเฟรมที่ไม่รู้จักเป็นพฤติกรรมของ "เราเตอร์" เมื่อไม่มีเส้นทาง หรือของ port security เมื่อละเมิดกฎ\n\n📗 จำไว้สอบ: เรียนรู้จาก source MAC, ตัดสินใจส่งจาก destination MAC, ไม่รู้จัก = flood ใน VLAN เดิม',
  },
  {
    id: 14,
    kind: 'single',
    prompt: 'An engineer must configure a /30 subnet between two routers. Which usable IP address and subnet mask combination meets this criteria?',
    options: [
      { key: 'A', text: 'interface e0/0 description to XX-AXXX:XXXXX ip address 10.2.1.3 255.255.255.252' },
      { key: 'B', text: 'interface e0/0 description to XX-AXXX:XXXXX ip address 192.168.1.1 255.255.255.248' },
      { key: 'C', text: 'interface e0/0 description to XX-AXXX:XXXXX ip address 172.16.1.4 255.255.255.248' },
      { key: 'D', text: 'interface e0/0 description to XX-AXXX:XXXXX ip address 209.165.201.2 225.255.255.252' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — /30 คือ mask 255.255.255.252 block size 4 → แต่ละซับเน็ตมี 4 ที่อยู่: network, usable 2 ตัว, broadcast จึงเป็นมาตรฐานของลิงก์ point-to-point ระหว่างเราเตอร์\n\n✅ ทำไม D ถูก: mask ที่โจทย์ตั้งใจคือ 255.255.255.252 (/30)\n• 209.165.201.0 = network | .1 และ .2 = usable | .3 = broadcast\n• 209.165.201.2 จึงเป็น "ที่อยู่ที่ใช้ได้" บน /30 ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. mask /30 ถูกต้อง แต่ 10.2.1.3 คือ broadcast ของซับเน็ต 10.2.1.0/30 (.0 net, .1–.2 usable, .3 broadcast) → กำหนดให้อินเทอร์เฟซไม่ได้\nB. mask 255.255.255.248 คือ /29 ไม่ใช่ /30 ตามที่โจทย์กำหนด\nC. mask 255.255.255.248 คือ /29 เช่นกัน แถม 172.16.1.4 ยังไม่ใช่ที่อยู่ที่ใช้ได้ถ้าเป็น /30 (172.16.1.4 จะเป็น network address)\n\n⚠️ หมายเหตุ: ตัวเลือก D ในไฟล์ต้นฉบับพิมพ์ mask เป็น "225.255.255.252" ซึ่งเป็นคำผิดของ "255.255.255.252" — ข้อสอบจริงชุดนี้ก็สะกดผิดแบบเดียวกัน และคำตอบที่ถูกยังคงเป็น D เพราะเป็นตัวเลือกเดียวที่ให้ที่อยู่ "ใช้ได้จริง" บน /30\n\n📗 จำไว้สอบ: /30 = 4 ที่อยู่ ใช้ได้ 2 • ตัวเลขลงท้ายที่หาร 4 ลงตัว = network, +3 = broadcast (0/3, 4/7, 8/11, …)',
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
      '📘 แนวคิด — ช่วง IP ส่วนตัวตาม RFC 1918 (ต้องท่องให้ขึ้นใจ)\n• 10.0.0.0 – 10.255.255.255 → 10.0.0.0/8\n• 172.16.0.0 – 172.31.255.255 → 172.16.0.0/12 ⭐ (เฉพาะอ็อกเท็ตสอง 16 ถึง 31 เท่านั้น)\n• 192.168.0.0 – 192.168.255.255 → 192.168.0.0/16\nที่อยู่ส่วนตัวจะไม่ถูกเราต์บนอินเทอร์เน็ต ใช้สื่อสารกันภายในองค์กรได้เลยโดยไม่ต้องออกเน็ต\n\n✅ ทำไม B ถูก: 172.28.0.0/16 มีอ็อกเท็ตที่สอง = 28 ซึ่งอยู่ในช่วง 16–31 พอดี → เป็น private address\n\n❌ ทำไมข้ออื่นผิด:\nA. 172.9.x.x → 9 น้อยกว่า 16 → อยู่นอกช่วง 172.16–172.31 → เป็น public address\nC. 192.0.0.0/8 → ช่วงส่วนตัวคือ 192.168.0.0/16 เท่านั้น ไม่ใช่ทั้ง 192.x.x.x (192.0.2.0/24 ยังเป็นบล็อกสำหรับเอกสารด้วย)\nD. 209.165.201.0/24 เป็นบล็อก public ที่ Cisco ใช้เป็นตัวอย่างในหลักสูตรตลอด\n\n📗 จำไว้สอบ: 10/8, 172.16/12 (16–31 เท่านั้น), 192.168/16 • เจอ 172.x ให้เช็กอ็อกเท็ตสองทุกครั้ง',
  },
  {
    id: 16,
    kind: 'single',
    image: v4q16,
    prompt: 'Refer to the exhibit. Which statement explains the configuration error message that is received?',
    options: [
      { key: 'A', text: 'It belongs to a private IP address range.' },
      { key: 'B', text: 'The router does not support /28 mask.' },
      { key: 'C', text: 'It is a network IP address.' },
      { key: 'D', text: 'It is a broadcast IP address.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เราเตอร์ปฏิเสธที่อยู่ที่เป็น network address หรือ broadcast address ของซับเน็ตนั้นเสมอ พร้อมขึ้นข้อความ "Bad mask /xx for address …"\n\n🔍 อ่าน exhibit: ip address 192.168.16.143 255.255.255.240\n• mask 255.255.255.240 = /28 → block size = 256 − 240 = 16\n• ไล่ block: 128, 144, 160 … → 143 ตกอยู่ในบล็อกที่เริ่มที่ 128\n• network = 192.168.16.128 | usable = .129 – .142 | broadcast = 192.168.16.143 ⭐\n\n✅ ทำไม D ถูก: 192.168.16.143 คือที่อยู่ broadcast ของซับเน็ต 192.168.16.128/28 พอดี จึงกำหนดให้อินเทอร์เฟซไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. 192.168.x.x เป็น private จริง แต่ IOS ยอมให้ใช้ private address บนอินเทอร์เฟซได้ตามปกติ ไม่ใช่สาเหตุ\nB. /28 เป็น mask มาตรฐานที่เราเตอร์ Cisco ทุกรุ่นรองรับ\nC. network address ของบล็อกนี้คือ .128 ไม่ใช่ .143\n\n📗 จำไว้สอบ: /28 block 16 → ขอบเขต 0,16,32,…,128,144 • ตัวสุดท้ายก่อนขอบถัดไป = broadcast (143, 159, 175, …)',
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
      '📘 แนวคิด — โจทย์ตั้งเงื่อนไข 2 ข้อพร้อมกัน จึงต้องหาชนิดที่ผ่านทั้งคู่\n1️⃣ "สื่อสารข้ามซับเน็ตได้" → ต้องเราต์ได้ภายในองค์กร\n2️⃣ "ออกอินเทอร์เน็ตไม่ได้"\n\n🔹 สรุปชนิดที่อยู่ IPv6\n• Link-local (FE80::/10) → ใช้ได้เฉพาะบนลิงก์เดียว เราเตอร์ไม่ส่งต่อข้ามลิงก์เด็ดขาด → ผ่านข้อ 2 แต่ตกข้อ 1\n• Unique Local / ULA (FC00::/7 ใช้จริง FD00::/8) → เราต์ได้ทั่วองค์กรข้ามซับเน็ต แต่ ISP ไม่รับโฆษณาออกอินเทอร์เน็ต → ผ่านทั้ง 2 ข้อ ⭐ เทียบเท่า private IPv4 (RFC 1918)\n• Multicast (FF00::/8) → เป็นการส่งแบบกลุ่ม ไม่ใช่ที่อยู่สำหรับสื่อสารทั่วไประหว่างโฮสต์\n• Global Unicast (2000::/3) → เราต์ได้ทั้งอินเทอร์เน็ต → ตกข้อ 2\n\n✅ ทำไม B ถูก: unique local address เป็นชนิดเดียวที่ "เราต์ข้ามซับเน็ตภายในได้ แต่ออกอินเทอร์เน็ตไม่ได้"\n\n📗 จำไว้สอบ: FE80=ลิงก์เดียว | FC/FD=ภายในองค์กร (private) | 2/3=อินเทอร์เน็ต | FF=multicast',
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
      '📘 แนวคิด — "group address" = multicast (ส่งครั้งเดียวถึงผู้รับหลายเครื่องที่สมัครเข้ากลุ่ม)\n\n🔹 แผนที่บล็อก IPv6 ที่ต้องจำ\n• 2000::/3 → Global Unicast (ขึ้นต้น 2 หรือ 3) — one-to-one เราต์ได้ทั่วโลก\n• FC00::/7 → Unique Local (ขึ้นต้น FC/FD) — one-to-one ภายในองค์กร\n• FE80::/10 → Link-Local — one-to-one บนลิงก์เดียว\n• FF00::/8 → Multicast (ขึ้นต้น FF ทุกตัว) ⭐ — one-to-many\n\n✅ ทำไม D ถูก: FF00::/8 คือบล็อก multicast ทั้งหมดของ IPv6 ที่อยู่ที่ขึ้นต้นด้วย FF จะถูกส่งไปยัง "กลุ่ม" ไม่ใช่เครื่องเดียว\n\n💡 IPv6 ยกเลิก broadcast ทิ้งไปเลย แล้วใช้ multicast แทน เช่น FF02::1 (all-nodes) ทำหน้าที่เหมือน broadcast ของ IPv4\n\n❌ ทำไมข้ออื่นผิด: A, B, C ล้วนเป็น unicast (ส่งถึงอินเทอร์เฟซเดียว) ต่างกันแค่ขอบเขตที่เราต์ไปถึง\n\n📗 จำไว้สอบ: เห็น FF ขึ้นต้น = multicast เสมอ • IPv6 ไม่มี broadcast',
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
      '📘 แนวคิด — late collision คือการชนกันที่เกิด "หลังส่งไปแล้วเกิน 64 ไบต์แรก" (slot time) ซึ่งผิดปกติ เพราะโดยปกติ CSMA/CD ต้องตรวจพบการชนภายใน 64 ไบต์แรกเสมอ\n\n🔹 สาเหตุหลักของ late collision มี 2 อย่าง\n1️⃣ Duplex mismatch — ฝั่งหนึ่งตั้ง half-duplex อีกฝั่งตั้ง full-duplex ⭐ พบบ่อยที่สุด\n   • ฝั่ง full ส่งได้ตลอดเวลาโดยไม่ฟังสาย ส่วนฝั่ง half ที่กำลังส่งอยู่จะตรวจพบสัญญาณซ้อน → นับเป็น late collision\n2️⃣ สายยาวเกินมาตรฐาน (UTP เกิน 100 เมตร) — สัญญาณเดินทางช้าจนกว่าจะรู้ว่าชน ก็ส่งเกิน 64 ไบต์ไปแล้ว\n\n✅ ทำไม B และ E ถูก: ตรงกับสาเหตุทั้งสองข้อข้างต้นพอดี\n\n❌ ทำไมข้ออื่นผิด:\nA. CSMA/CD คือกลไก "ปกติ" ของ half-duplex ที่ทำให้เกิด collision ธรรมดา (ไม่ใช่ late) — การมี CSMA/CD ไม่ได้ทำให้เกิด late collision\nC. หลังชนกัน อุปกรณ์จะรอตาม back-off algorithm ในระดับไมโครวินาที ไม่ใช่ 15 วินาที — เป็นตัวเลขมั่ว\nD. เส้นแบ่งคือ 64 ไบต์ (512 บิต = slot time) ไม่ใช่ 32 ไบต์ — ตัวลวงเรื่องตัวเลข\n\n📗 จำไว้สอบ: collision ปกติ = ภายใน 64 ไบต์ | late collision = หลัง 64 ไบต์ = duplex mismatch หรือสายยาวเกิน 100 ม.',
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
      '📘 แนวคิด — สถาปัตยกรรม WLAN แบบรวมศูนย์ (split-MAC)\n• Autonomous AP → AP อิสระ ตั้งค่าทีละตัว มี 50 ตัวก็ต้องเข้าไปตั้ง 50 ครั้ง\n• Lightweight AP + WLC → AP โยนงานบริหาร (RF, ความปลอดภัย, roaming, QoS) ให้ WLC ตัวเดียวคุมทั้งหมดผ่านทันเนล CAPWAP\n\n🔹 ประโยชน์หลักของ WLC\n• ตั้งค่าที่เดียว กระจายให้ AP ทุกตัวอัตโนมัติ ⭐\n• RRM (Radio Resource Management) — เลือกช่องสัญญาณและกำลังส่งให้เองอัตโนมัติ\n• Roaming ราบรื่นระหว่าง AP โดยไม่ต้อง re-authenticate\n• ตรวจจับ rogue AP และรวมศูนย์นโยบายความปลอดภัย\n\n✅ ทำไม A ถูก: นี่คือเหตุผลอันดับหนึ่งที่องค์กรซื้อ WLC — ไม่ต้องคอนฟิก AP ทีละตัวอีกต่อไป\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับด้าน — การบริหารรวมศูนย์ทำให้คอนฟิก "ง่ายลง" ไม่ใช่ซับซ้อนขึ้น\nC. ผิด — SSID หลายตัวใช้วิธียืนยันตัวตนแบบเดียวกันได้สบาย ๆ (และใช้ต่างกันก็ได้)\nD. WLC จัดการได้เฉพาะ lightweight AP เท่านั้น — autonomous AP ทำงานอิสระ ไม่ join WLC\n\n📗 จำไว้สอบ: WLC = คอนฟิกที่เดียว + RRM + roaming + rogue detection • คุมได้เฉพาะ lightweight AP ผ่าน CAPWAP',
  },
  {
    id: 21,
    kind: 'single',
    prompt: 'Which action is taken by switch port enabled for PoE power classification override?',
    options: [
      { key: 'A', text: 'If a monitored port exceeds the maximum administrative value for power, the port is shutdown and err-disabled.' },
      { key: 'B', text: 'When a powered device begins drawing power from a PoE switch port, a syslog message is generated.' },
      { key: 'C', text: 'As power usage on a PoE switch port is checked, data flow to the connected device is temporarily paused.' },
      { key: 'D', text: 'If a switch determines that a device is using less than the minimum configured power, it assumes the device has failed and disconnects it.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — PoE power classification override (คำสั่ง power inline consumption / power inline police)\n• ปกติสวิตช์จะจองพลังงานให้พอร์ตตาม "class" ที่อุปกรณ์ประกาศมา (Class 0–4)\n• classification override = ผู้ดูแลบังคับกำหนดเพดานพลังงานเอง ไม่เชื่อค่าที่อุปกรณ์ประกาศ\n• สวิตช์จะเฝ้าดูการใช้พลังงานจริงของพอร์ตนั้นตลอดเวลา\n\n✅ ทำไม A ถูก: ถ้าอุปกรณ์ดึงไฟ "เกิน" ค่าสูงสุดที่ผู้ดูแลตั้งไว้ สวิตช์จะปิดพอร์ตและใส่สถานะ err-disabled เพื่อป้องกันไม่ให้อุปกรณ์ตัวเดียวดูดไฟจนงบพลังงานรวมของสวิตช์หมดและกระทบพอร์ตอื่น\n\n💡 ตาราง PoE ที่ควรจำ\n• 802.3af (PoE) → 15.4W ต่อพอร์ต (ปลายทางได้ ~12.95W)\n• 802.3at (PoE+) → 30W\n• 802.3bt (PoE++/UPOE) → 60W / 90W\n\n❌ ทำไมข้ออื่นผิด:\nB. การขึ้น syslog เมื่ออุปกรณ์เริ่มดึงไฟเป็นเหตุการณ์ปกติของ PoE ทั่วไป ไม่ใช่ผลของ classification override\nC. PoE ส่งไฟกับข้อมูลไปพร้อมกันบนสายเส้นเดียวได้ ไม่มีการ "หยุดพักข้อมูล" เพื่อวัดไฟ\nD. สวิตช์ไม่ตัดอุปกรณ์เพราะใช้ไฟ "น้อยเกินไป" — กลไกนี้เฝ้าดูขีดสูงสุด ไม่ใช่ขีดต่ำสุด\n\n📗 จำไว้สอบ: power classification override = ใช้ไฟเกินเพดาน → พอร์ต shutdown + err-disabled',
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
      '📘 แนวคิด — frame flooding เกิดใน 3 กรณี\n1️⃣ unknown unicast — ไม่มี destination MAC ในตาราง MAC\n2️⃣ broadcast — ปลายทาง FFFF.FFFF.FFFF\n3️⃣ unknown multicast\n\n🔑 กฎของการ flood มี 2 ข้อที่ตัวเลือกชอบหลอก\n• ห้ามข้าม VLAN → VLAN คือ broadcast domain แยกกัน สวิตช์จะ flood เฉพาะภายใน VLAN เดิม\n• ห้ามส่งย้อนออกพอร์ตต้นทาง → ถ้าส่งกลับไป เครื่องต้นทางจะได้รับเฟรมของตัวเอง เกิดลูป\n\n✅ ทำไม C ถูก: ระบุครบทั้งสองเงื่อนไข — ส่งออกทุกพอร์ตใน VLAN เดียวกัน "ยกเว้น" พอร์ตที่รับเฟรมเข้ามา\n\n❌ ทำไมข้ออื่นผิด:\nA. ผิดหลักการแยก VLAN — การส่งข้าม VLAN ต้องผ่านอุปกรณ์ชั้น 3 เท่านั้น\nB. ถ้ามี entry ตรงในตาราง MAC อยู่แล้ว สวิตช์จะ "forward" ออกพอร์ตเดียว ไม่ใช่ flood — ขัดกับนิยามของคำถาม\nD. ถูกเกือบหมดแต่ลืมข้อยกเว้นสำคัญ "except from the originating port"\n\n📗 จำไว้สอบ: flood = ทุกพอร์ตใน VLAN เดียวกัน ลบพอร์ตขาเข้า • ไม่มีวันข้าม VLAN',
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
      '📘 แนวคิด — RFC 1918 กันบล็อกที่อยู่ไว้ให้ใช้ซ้ำได้ภายในองค์กร\n• 10.0.0.0/8 | 172.16.0.0/12 | 192.168.0.0/16\n• เราเตอร์บนอินเทอร์เน็ตถูกตั้งให้ "ทิ้ง" แพ็กเก็ตที่มีที่อยู่เหล่านี้ จึงไม่มีทางชนกันข้ามองค์กร\n\n✅ ทำไม A ถูก: บริษัท ก และบริษัท ข ต่างใช้ 192.168.1.0/24 ภายในของตัวเองได้พร้อมกันโดยไม่ขัดแย้ง เพราะที่อยู่เหล่านี้ไม่เคยถูกโฆษณาออกอินเทอร์เน็ต — นี่คือเหตุผลหลักที่ RFC 1918 ช่วยชะลอการหมดของ IPv4\n\n❌ ทำไมข้ออื่นผิด:\nB. ตรงข้ามเลย — โฮสต์จากภายนอกเชื่อมเข้ามาที่ private address ตรง ๆ ไม่ได้ ต้องผ่าน NAT/port forwarding หรือ VPN\nC. กลับด้าน — private address "จำเป็นต้องใช้ NAT" เพื่อออกอินเทอร์เน็ต ไม่ใช่ไม่ต้องใช้\nD. private address ไม่ได้ให้ความปลอดภัยในตัวเอง (ไม่มีการเข้ารหัส) และไม่ได้ทำอะไรให้ external host\n\n📗 จำไว้สอบ: private IP = ใช้ซ้ำได้ทุกองค์กร + ประหยัด public IP + ต้องมี NAT ถึงจะออกเน็ตได้',
  },
  {
    id: 24,
    kind: 'single',
    prompt: 'Which action must be taken to assign a global unicast IPv6 address on an interface that is derived from the MAC address of that interface?',
    options: [
      { key: 'A', text: 'explicitly assign a link-local address' },
      { key: 'B', text: 'disable the EUI-64 bit process' },
      { key: 'C', text: 'enable SLAAC on an interface' },
      { key: 'D', text: 'configure a stateful DHCPv6 server on the network' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — SLAAC (Stateless Address Autoconfiguration)\n• อุปกรณ์ส่ง Router Solicitation (RS) ไปที่ FF02::2\n• เราเตอร์ตอบด้วย Router Advertisement (RA) ซึ่งบอก "พรีฟิกซ์ /64" ของลิงก์นั้น\n• อุปกรณ์สร้าง interface ID 64 บิตท้ายเอง โดยค่าเริ่มต้นใช้ EUI-64 จาก MAC address ของอินเทอร์เฟซ\n• รวมพรีฟิกซ์ + interface ID = ที่อยู่ global unicast เต็ม ๆ โดยไม่ต้องมีเซิร์ฟเวอร์ใด ๆ\n• บน IOS สั่งด้วย ipv6 address autoconfig\n\n✅ ทำไม C ถูก: SLAAC คือกระบวนการที่ทำให้ได้ "global unicast address ที่ครึ่งหลังมาจาก MAC" ตรงตามที่โจทย์ถาม\n\n❌ ทำไมข้ออื่นผิด:\nA. link-local (FE80::) ถูกสร้างอัตโนมัติอยู่แล้วเมื่อเปิด IPv6 และไม่ใช่ global unicast\nB. กลับด้านสนิท — ต้อง "ใช้" EUI-64 ไม่ใช่ปิด ถ้าปิดจะได้ interface ID แบบสุ่มแทน\nD. stateful DHCPv6 คือเซิร์ฟเวอร์แจกที่อยู่ทั้งก้อนจาก pool ที่ตั้งไว้ ไม่ได้อิงกับ MAC ของอินเทอร์เฟซ\n\n📗 จำไว้สอบ: SLAAC = RA ให้พรีฟิกซ์ + EUI-64 จาก MAC = ไม่ต้องใช้เซิร์ฟเวอร์ • stateful DHCPv6 = เซิร์ฟเวอร์ให้ที่อยู่เต็ม',
  },
  {
    id: 25,
    kind: 'multi',
    prompt: 'Several new coverage cells are required to improve the Wi-Fi network of an organization. Which two standard designs are recommended? (Choose two.)',
    options: [
      { key: 'A', text: '5GHz provides increased network capacity with up to 23 nonoverlapping channels.' },
      { key: 'B', text: '5GHz channel selection requires an autonomous access point.' },
      { key: 'C', text: 'Cells that overlap one another are configured to use nonoverlapping channels.' },
      { key: 'D', text: 'Adjacent cells with overlapping channels use a repeater access point.' },
      { key: 'E', text: 'For maximum throughput, the WLC is configured to dynamically set adjacent access points to the channel.' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — หลักการวางเซลล์ Wi-Fi\n• พื้นที่ครอบคลุมควรซ้อนกัน 10–15% เพื่อให้ roaming ราบรื่น\n• แต่เซลล์ที่ซ้อนกันต้องใช้ "ช่องสัญญาณที่ไม่ทับกัน" มิฉะนั้นจะเกิด co-channel interference\n• ย่าน 2.4 GHz มีช่องไม่ทับกันแค่ 3 ช่อง (1, 6, 11) → แออัดง่าย\n• ย่าน 5 GHz มีช่องไม่ทับกันมากถึง ~23 ช่อง (นับแบบ 20 MHz รวม UNII-1/2/2e/3) → ความจุสูงกว่ามาก\n\n✅ ทำไม A ถูก: 5 GHz ให้ช่องไม่ทับกันราว 23 ช่อง จึงรองรับ AP หนาแน่นและเพิ่มความจุรวมของเครือข่ายได้\n✅ ทำไม C ถูก: เป็นกฎทองของการออกแบบ — เซลล์ที่พื้นที่ทับกันต้องตั้งคนละช่องที่ไม่ทับกัน\n\n❌ ทำไมข้ออื่นผิด:\nB. การเลือกช่อง 5 GHz ทำได้ทั้งบน autonomous AP และ lightweight AP + WLC (ซึ่งทำอัตโนมัติด้วย RRM ยิ่งดีกว่า)\nD. repeater AP ลดทรูพุตลงครึ่งหนึ่ง (ต้องรับและส่งซ้ำบนวิทยุเดียวกัน) และไม่ได้แก้ปัญหาช่องทับกัน\nE. ตั้ง AP ที่อยู่ติดกันให้ใช้ "ช่องเดียวกัน" คือสิ่งที่ต้องหลีกเลี่ยงที่สุด — RRM ของ WLC ทำตรงกันข้ามคือกระจายให้คนละช่อง\n\n📗 จำไว้สอบ: 2.4 GHz = 3 ช่อง (1/6/11) | 5 GHz ≈ 23 ช่อง • เซลล์ซ้อนกัน = ต้องคนละช่องเสมอ',
  },
  {
    id: 26,
    kind: 'single',
    prompt: 'How do TCP and UDP differ in the way they provide reliability for delivery of packets?',
    options: [
      { key: 'A', text: 'TCP does not guarantee delivery or error checking to ensure that there is no corruption of data, UDP provides message acknowledgement and retransmits data if lost.' },
      { key: 'B', text: 'TCP provides flow control to avoid overwhelming a receiver by sending too many packets at once, UDP sends packets to the receiver in a continuous stream without checking.' },
      { key: 'C', text: 'TCP is a connectionless protocol that does not provide reliable delivery of data; UDP is a connection-oriented protocol that uses sequencing to provide reliable delivery.' },
      { key: 'D', text: 'TCP uses windowing to deliver packets reliably; UDP provides reliable message transfer between hosts by establishing a three-way handshake.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กลไกความน่าเชื่อถือของ TCP มี 4 อย่าง\n1️⃣ Sequence number → เรียงลำดับและตรวจว่ามีชิ้นไหนหาย\n2️⃣ Acknowledgment → ผู้รับยืนยันกลับ ถ้าไม่ได้ ACK ก็ส่งซ้ำ\n3️⃣ Retransmission → ส่งซ้ำเมื่อ timeout\n4️⃣ Flow control (windowing) → ผู้รับบอกขนาด window ได้ ผู้ส่งจึงไม่ยิงเร็วเกินจนบัฟเฟอร์ล้น ⭐\n\n🔹 UDP ไม่มีอะไรเลยในสี่ข้อนี้ — ยิงดาต้าแกรมออกเป็นสายต่อเนื่องโดยไม่รอ ACK ไม่ปรับความเร็ว\n\n✅ ทำไม B ถูก: บรรยายถูกทั้งสองฝั่ง — TCP มี flow control กันผู้รับล้น ส่วน UDP ส่งเป็นสตรีมต่อเนื่องโดยไม่ตรวจสอบ\n\n❌ ทำไมข้ออื่นผิด:\nA. กลับด้านสนิท — TCP ต่างหากที่รับประกันการส่งและมี ACK/retransmission ส่วน UDP ไม่มี\nC. กลับด้านเช่นกัน — TCP = connection-oriented, UDP = connectionless\nD. ครึ่งแรกถูก (TCP ใช้ windowing) แต่ครึ่งหลังผิด — UDP ไม่มี three-way handshake และไม่รับประกันการส่ง\n\n📗 จำไว้สอบ: TCP = seq + ACK + retransmit + windowing | UDP = ยิงแล้วลืม (fire and forget)',
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
      '📘 แนวคิด — โครงสร้างสายไฟเบอร์ออปติก (จากในออกนอก)\n1️⃣ Core → แกนแก้ว (หรือพลาสติก) เป็นทางเดินของ "แสง" ⭐\n2️⃣ Cladding → ปลอกแก้วที่มีดัชนีหักเหต่ำกว่า core ทำหน้าที่สะท้อนแสงกลับเข้าแกน (total internal reflection) ไม่ให้แสงรั่วออก\n3️⃣ Buffer / Jacket → ชั้นป้องกันทางกล\n\n🔹 ต่างจากทองแดงตรงไหน\n• ไฟเบอร์ส่ง "แสง" ทองแดงส่ง "สัญญาณไฟฟ้า"\n• ไฟเบอร์ไม่ถูกรบกวนจาก EMI/RFI เลย ทองแดงถูกรบกวนได้\n• ไฟเบอร์วิ่งไกลกว่ามาก (SMF หลายสิบกิโลเมตร) ทองแดง UTP จำกัด 100 เมตร\n• หัวต่อไฟเบอร์: LC, SC, ST, MPO — ส่วนทองแดง UTP ใช้ RJ-45\n\n✅ ทำไม B ถูก: core แก้วถูกหุ้มด้วย cladding เสมอ ซึ่งเป็นโครงสร้างเฉพาะของไฟเบอร์ที่ทองแดงไม่มี\n✅ ทำไม D ถูก: ข้อมูลเดินทางเป็นลำแสงภายใน core\n\n❌ ทำไมข้ออื่นผิด:\nA. BNC เป็นหัวต่อของสาย coaxial (เช่น 10BASE2 ยุคเก่า) ไม่ใช่ไฟเบอร์\nC. cladding มีหน้าที่ "สะท้อนแสงกลับ" ไม่ให้ผ่านออกไป ข้อมูลจึงไม่เดินทางผ่าน cladding\nE. RJ-45 เป็นหัวของสาย UTP ทองแดง ไฟเบอร์ใช้ LC/SC/ST/MPO\n\n📗 จำไว้สอบ: ไฟเบอร์ = core (แสงวิ่ง) + cladding (สะท้อนกลับ) • หัวไฟเบอร์ LC/SC/ST • RJ-45 และ BNC = ทองแดง',
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
      '📘 แนวคิด — CAPWAP (Control And Provisioning of Wireless Access Points)\n• เป็นทันเนลระหว่าง lightweight AP กับ WLC วิ่งอยู่บน IP/UDP\n• UDP 5246 = control channel (เข้ารหัสด้วย DTLS เสมอ)\n• UDP 5247 = data channel (เลือกเข้ารหัสได้)\n• เพราะเป็นทันเนล "ชั้น 3" AP กับ WLC จึงอยู่คนละซับเน็ต คนละอาคาร หรือคนละไซต์ก็ได้ ขอแค่ IP ถึงกัน\n• Local mode = โหมดเริ่มต้น ทราฟฟิกของไคลเอนต์ทั้งหมดถูกส่งกลับไปที่ WLC ก่อน (centrally switched)\n\n✅ ทำไม D ถูก: AP เสียบกับสวิตช์ตัวไหนในเครือข่ายก็ได้ ตราบใดที่เราต์ไปถึง IP ของ WLC ได้ ทันเนล CAPWAP ก็ก่อตัวได้\n\n❌ ทำไมข้ออื่นผิด:\nA. AP ต้องต่อสายเข้าเครือข่ายแบบใช้สายอยู่แล้ว (เพื่อรับ PoE และคุยกับ WLC) และไม่ทำให้เกิดลูปเพราะทราฟฟิกไร้สายถูกหุ้มอยู่ในทันเนล\nB. ไม่จำเป็นเลย — ถ้าต้องอยู่สวิตช์เดียวกัน การออกแบบแคมปัสขนาดใหญ่คงเป็นไปไม่ได้\nC. ไม่ต้องต่อตรง — CAPWAP เป็นทันเนลชั้น 3 ข้ามเราเตอร์ได้\n\n📗 จำไว้สอบ: CAPWAP = UDP 5246 (control, DTLS) / 5247 (data) • ทันเนลชั้น 3 → AP กับ WLC อยู่คนละซับเน็ตได้',
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
      '📘 แนวคิด — บล็อกที่อยู่ IPv6 และชนิดการส่ง\n• 2000::/3 → Global Unicast → unicast (หนึ่งต่อหนึ่ง)\n• FC00::/7 → Unique Local → unicast ภายในองค์กร\n• FE80::/10 → Link-Local → unicast บนลิงก์เดียว\n• FF00::/8 → Multicast → หนึ่งต่อกลุ่ม ⭐\n\n✅ ทำไม D ถูก: ในบรรดาตัวเลือกทั้งสี่ มีเพียง FF00::/12 เท่านั้นที่อยู่ในตระกูล FF (multicast) ที่เหลือเป็น unicast ทั้งหมด\n\n⚠️ หมายเหตุ: บล็อก multicast ที่ถูกต้องตามมาตรฐานคือ FF00::/8 ไม่ใช่ /12 — ข้อสอบชุดนี้พิมพ์เป็น /12 (ซึ่งจริง ๆ คือช่วงย่อยของ multicast ที่ flags = 0) แต่เมื่อเทียบกับอีกสามตัวเลือกที่เป็น unicast ล้วน คำตอบที่ต้องเลือกยังคงเป็น D อยู่ดี ถ้าในข้อสอบจริงมีทั้ง FF00::/8 และ FF00::/12 ให้เลือก ให้ตอบ FF00::/8\n\n❌ ทำไมข้ออื่นผิด: A, B, C เป็น unicast ทั้งสามตัว ไม่มีตัวไหนส่งแบบกลุ่ม\n\n📗 จำไว้สอบ: ขึ้นต้น FF = multicast เสมอ • บล็อกมาตรฐานคือ FF00::/8',
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
      '📘 แนวคิด — ข้อนี้ถามคุณสมบัติ 2 แกนพร้อมกัน ต้องถูกทั้งคู่จึงจะเลือกได้\n\n🔹 แกนที่ 1 — ความน่าเชื่อถือ (reliability)\n• TCP = reliable → มี ACK, sequence number, retransmission\n• UDP = unreliable / best-effort → ไม่มี ACK ไม่ส่งซ้ำ\n\n🔹 แกนที่ 2 — ชนิดการสื่อสาร (communication type)\n• TCP = connection-oriented → ทำ 3-way handshake ก่อนส่ง\n• UDP = connectionless → ยิงได้เลย\n\n✅ ทำไม D ถูก: จับคู่ถูกทั้งสี่จุด — TCP reliable + connection-oriented, UDP unreliable + connectionless\n\n❌ ทำไมข้ออื่นผิด:\nA. ครึ่งแรกถูกเรื่อง reliable แต่เรียก TCP ว่า connectionless ซึ่งผิด\nB. กลับด้านทั้งหมด\nC. กลับด้านเรื่อง reliability\n\n💡 ใช้งานจริง: TCP → HTTP/HTTPS, FTP, SMTP, SSH, Telnet | UDP → DNS, DHCP, TFTP, SNMP, RTP/VoIP, syslog\n\n📗 จำไว้สอบ: TCP = เชื่อถือได้ + ต้องสร้างการเชื่อมต่อ | UDP = ไม่รับประกัน + ไม่ต้องสร้างการเชื่อมต่อ',
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
      '📘 แนวคิด — โมเดลลำดับชั้นแบบ 3 ชั้นของ Cisco\n\n🔹 Access layer (ชั้นเข้าถึง)\n• พอร์ตที่ผู้ใช้ PC โทรศัพท์ AP เครื่องพิมพ์เสียบ\n• ทำ VLAN, PoE, port security, PortFast — ส่วนใหญ่เป็นงานชั้น 2\n\n🔹 Distribution layer (ชั้นกระจาย)\n• จุดรวมของสวิตช์ access หลายตัว\n• ทำ inter-VLAN routing, ACL, QoS, route summarization, FHRP\n• เป็นรอยต่อระหว่างชั้น 2 กับชั้น 3 → จึงรัน "ทั้ง Layer 2 และ Layer 3" ⭐\n\n🔹 Core layer (ชั้นแกน)\n• backbone ความเร็วสูง หน้าที่เดียวคือส่งต่อแพ็กเก็ตให้เร็วที่สุด\n• ออกแบบให้ซ้ำซ้อนสูง (redundant links, redundant devices) เพื่อไม่ให้เครือข่ายล่มเมื่ออุปกรณ์ตัวใดตัวหนึ่งเสีย ⭐\n• ไม่ทำ ACL/นโยบายหนัก ๆ เพราะจะถ่วงความเร็ว\n\n✅ ทำไม A ถูก: distribution เป็นชั้นเดียวที่ทำงานคาบเกี่ยวทั้ง L2 และ L3\n✅ ทำไม B ถูก: หัวใจของการออกแบบ core คือความพร้อมใช้งานต่อเนื่องแม้อุปกรณ์ล้ม\n\n❌ ทำไมข้ออื่นผิด:\nC. การเราต์ระหว่างโดเมน/VLAN เป็นงานของ distribution ไม่ใช่ access\nD. โฮสต์เสียบที่ access layer ไม่ใช่ core — core ไม่ควรมีผู้ใช้ต่อตรงเลย\nE. ถ้าทั้งสองชั้นทำหน้าที่เหมือนกัน ก็ไม่มีเหตุผลต้องแยกเป็นสองชั้น (การรวมกันเรียกว่า collapsed core)\n\n📗 จำไว้สอบ: access=ผู้ใช้เสียบ | distribution=L2+L3, ACL, นโยบาย | core=เร็วและซ้ำซ้อน ไม่มีนโยบาย',
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
      '📘 แนวคิด — เทียบชนิดที่อยู่ IPv6 กับของ IPv4\n• Global Unicast (2000::/3) ↔ public IPv4 → เราต์ได้ทั่วอินเทอร์เน็ต ⭐\n• Unique Local (FC00::/7, ใช้จริง FD00::/8) ↔ private IPv4 (RFC 1918) → ภายในองค์กรเท่านั้น\n• Link-Local (FE80::/10) ↔ APIPA 169.254.x.x → ลิงก์เดียวเท่านั้น\n• Multicast (FF00::/8) ↔ multicast 224.0.0.0/4 → ส่งแบบกลุ่ม\n\n✅ ทำไม D ถูก: global unicast address คือที่อยู่ที่ RIR/ISP จัดสรรให้ และเราต์ได้ทั่วอินเทอร์เน็ตสาธารณะ เหมือน public IPv4 ทุกประการ\n\n💡 โครงสร้าง GUA มาตรฐาน: /48 global routing prefix (ISP ให้) + /16 subnet ID (องค์กรแบ่งเอง ได้ 65,536 ซับเน็ต) + /64 interface ID\n\n❌ ทำไมข้ออื่นผิด:\nA. multicast เป็นที่อยู่ปลายทางแบบกลุ่ม ไม่ใช่ที่อยู่ประจำตัวโฮสต์\nB. unique local ถูกกรองทิ้งที่ขอบอินเทอร์เน็ต ไม่ต่างจาก private IPv4\nC. link-local ไม่ผ่านเราเตอร์แม้แต่ตัวเดียว\n\n📗 จำไว้สอบ: GUA 2000::/3 = public • ULA FD00::/8 = private • FE80::/10 = link-local • FF00::/8 = multicast',
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
      '📘 แนวคิด — ขั้นตอน EUI-64 ทีละสเต็ป (MAC 48 บิต → interface ID 64 บิต)\n1️⃣ ผ่า MAC ครึ่งกลาง: OUI 24 บิต | Device ID 24 บิต\n2️⃣ แทรก FFFE (16 บิต) ลงตรงกลาง → รวมเป็น 64 บิต\n3️⃣ กลับ (invert) บิตที่ 7 นับจากซ้ายของไบต์แรก ซึ่งคือ U/L bit (Universal/Local) ⭐\n\n🔧 ตัวอย่างจริง MAC = 00:1B:44:11:3A:B7\n• แทรก FFFE → 001B:44FF:FE11:3AB7\n• ไบต์แรก 00 = 0000 0000 → กลับบิตที่ 7 → 0000 0010 = 02\n• ผลลัพธ์ interface ID = 021B:44FF:FE11:3AB7\n\n✅ ทำไม C ถูก: การกลับบิตที่ 7 (U/L bit) เป็นขั้นตอนบังคับของ EUI-64 — บิตนี้บอกว่าที่อยู่ถูกกำหนดจากส่วนกลาง (0) หรือกำหนดเอง (1) ในโลก IPv6 กลับความหมายให้ 1 = universal\n\n❌ ทำไมข้ออื่นผิด:\nA. ค่าสุ่ม 64 บิตคือกลไก "privacy extension" (RFC 4941) ซึ่งเป็นคนละอย่างกับ EUI-64\nB. FE80 คือพรีฟิกซ์ของ link-local ที่เติมข้างหน้าที่อยู่ ไม่ใช่ขั้นตอนของ EUI-64 (และไม่ได้เติมหน้า MAC)\nD. ถ้าใช้ MAC ตรง ๆ ก็จะได้แค่ 48 บิต ไม่ครบ 64 และไม่มีการแทรก FFFE\n\n📗 จำไว้สอบ: EUI-64 = ผ่าครึ่ง + แทรก FFFE + กลับบิตที่ 7 • เห็น FF:FE กลางที่อยู่ = ร่องรอยของ EUI-64',
  },
  {
    id: 34,
    kind: 'single',
    prompt: 'A corporate office uses four floors in a building. Floor 1 has 24 users. Floor 2 has 29 users. Floor 3 has 28 users. Floor 4 has 22 users. Which subnet summarizes and gives the most efficient distribution of IP addresses for the router configuration?',
    options: [
      { key: 'A', text: '192.168.0.0/24 as summary and 192.168.0.0/28 for each floor' },
      { key: 'B', text: '192.168.0.0/23 as summary and 192.168.0.0/25 for each floor' },
      { key: 'C', text: '192.168.0.0/25 as summary and 192.168.0.0/27 for each floor' },
      { key: 'D', text: '192.168.0.0/26 as summary and 192.168.0.0/29 for each floor' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โจทย์ subnetting 2 ชั้น: หา mask ของแต่ละชั้นก่อน แล้วค่อยหา summary\n\n1️⃣ หา mask ต่อชั้น — ชั้นที่ใหญ่สุดคือชั้น 2 มี 29 ผู้ใช้\n   สูตร: 2^h − 2 ≥ 29\n   • /28 → 2^4 − 2 = 14 ที่อยู่ ✘ ไม่พอ\n   • /27 → 2^5 − 2 = 30 ที่อยู่ ✔ พอดีและประหยัดที่สุด\n\n2️⃣ หา summary — ต้องครอบ 4 ซับเน็ต /27\n   • /27 มี block size 32 → 4 × 32 = 128 ที่อยู่\n   • 128 ที่อยู่ = /25 (2^7 = 128)\n   • ตรวจ: /25 ยืมมา 2 บิตได้ 4 ซับเน็ต /27 พอดีเป๊ะ ✔\n\n📋 ผังที่ได้\n• ชั้น 1 → 192.168.0.0/27 (ใช้ได้ .1–.30)\n• ชั้น 2 → 192.168.0.32/27 (.33–.62)\n• ชั้น 3 → 192.168.0.64/27 (.65–.94)\n• ชั้น 4 → 192.168.0.96/27 (.97–.126)\n• รวมทั้งหมด = 192.168.0.0/25\n\n✅ ทำไม C ถูก: /27 พอดีกับ 29 ผู้ใช้ และ /25 ครอบสี่ชั้นได้พอดีโดยไม่เหลือทิ้ง\n\n❌ ทำไมข้ออื่นผิด:\nA. /28 ให้แค่ 14 โฮสต์ ไม่พอสำหรับชั้นที่มี 22–29 คน\nB. /25 ต่อชั้นให้ 126 โฮสต์ เปลืองมหาศาล และ summary /23 ก็ใหญ่เกินจำเป็น\nD. /29 ให้แค่ 6 โฮสต์ ไม่พอเลย และ /26 ก็เล็กเกินกว่าจะครอบ 4 ชั้นที่ต้องการชั้นละ 30\n\n📗 จำไว้สอบ: หาชั้นที่ใหญ่สุดก่อน → เลือก /x ที่พอดี → คูณจำนวนชั้น → ได้ summary',
  },
  {
    id: 35,
    kind: 'single',
    image: v4q35,
    prompt: 'Refer to the exhibit. An engineer must add a subnet for a new office that will add 20 users to the network. Which IPv4 network and subnet mask combination does the engineer assign to minimize wasting addresses?',
    options: [
      { key: 'A', text: '10.10.225.48 255.255.255.240' },
      { key: 'B', text: '10.10.225.32 255.255.255.240' },
      { key: 'C', text: '10.10.225.48 255.255.255.224' },
      { key: 'D', text: '10.10.225.32 255.255.255.224' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ต้องผ่าน 3 ด่านพร้อมกัน: (1) โฮสต์พอ (2) ไม่ทับซับเน็ตเดิม (3) เป็น network address ที่ถูกต้องของ mask นั้น\n\n1️⃣ โฮสต์พอไหม — ต้องการ 20 ผู้ใช้\n• /28 (255.255.255.240) → 2^4 − 2 = 14 โฮสต์ ✘ ไม่พอ\n• /27 (255.255.255.224) → 2^5 − 2 = 30 โฮสต์ ✔ พอและประหยัดที่สุด\n→ ตัด A และ B ทิ้งทันที (ทั้งคู่เป็น /28)\n\n2️⃣ ที่ว่างอยู่ตรงไหน — จาก exhibit ซับเน็ตที่ใช้ไปแล้ว\n• 10.10.225.0/28 → .0 – .15\n• 10.10.225.16/28 → .16 – .31\n• 10.10.225.64/26 → .64 – .127\n→ ช่องว่างที่เหลือคือ .32 – .63\n\n3️⃣ เป็น network address ที่ถูกต้องของ /27 หรือไม่\n• /27 block size 32 → ขอบเขตต้องเป็น 0, 32, 64, 96, …\n• 10.10.225.32 ✔ ถูกต้อง | 10.10.225.48 ✘ ไม่ใช่ขอบของ /27 (48 ตกกลางบล็อก 32–63)\n\n✅ ทำไม D ถูก: 10.10.225.32/27 ให้ 30 โฮสต์ (ใช้ได้ .33 – .62) อยู่ในช่องว่าง .32–.63 พอดี ไม่ทับใคร\n\n❌ ทำไมข้ออื่นผิด:\nA. /28 ให้ 14 โฮสต์ ไม่พอ 20 คน\nB. /28 ไม่พอเช่นกัน\nC. 10.10.225.48 ไม่ใช่ network address ที่ถูกต้องของ /27\n\n📗 จำไว้สอบ: network address ต้องหารด้วย block size ลงตัว • /27 → 0, 32, 64, 96, 128, …',
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
      '📘 แนวคิด — spine-and-leaf ถูกออกแบบมาแก้ปัญหาทราฟฟิก east-west (เซิร์ฟเวอร์คุยกันเอง) ในดาต้าเซ็นเตอร์\n• leaf ทุกตัวต่อไป spine ทุกตัว | leaf ไม่ต่อกันเอง | spine ไม่ต่อกันเอง\n• ผลคือทุกเส้นทางระหว่างเซิร์ฟเวอร์สองตัวจะเป็น leaf → spine → leaf เสมอ = 2 hop เท่ากันหมด ⭐\n• เมื่อระยะทางเท่ากันทุกคู่ latency จึง "คาดเดาได้" (deterministic)\n• ใช้ ECMP กระจายโหลดทุกอัปลิงก์พร้อมกัน จึงไม่มีพอร์ตถูก STP บล็อกทิ้งให้เสียเปล่า\n\n✅ ทำไม D ถูก: คุณสมบัติเด่นที่สุดของ Clos fabric คือทุกอุปกรณ์ห่างกันด้วยจำนวน hop เท่ากัน\n\n❌ ทำไมข้ออื่นผิด:\nA. leaf ไม่มีลิงก์ต่อกันเองเลยตามการออกแบบ\nB. โครงสร้างนี้ตั้งใจ "ไม่ใช้ STP" (ใช้ ECMP/VXLAN แทน) จึงไม่มีเรื่องพอร์ตถูกบล็อกให้คาดเดา\nC. ตรงข้าม — จุดขายคือ latency คงที่และคาดเดาได้ ไม่ใช่แปรผัน\n\n📗 จำไว้สอบ: spine-leaf = 2 hop เสมอ, latency คงที่, ไม่มี STP บล็อกพอร์ต, ขยายด้วยการเพิ่ม leaf',
  },
  {
    id: 37,
    kind: 'single',
    prompt: 'An office has 8 floors with approximately 30-40 users per floor. One subnet must be used. Which command must be configured on the router Switched Virtual Interface to use address space efficiently?',
    options: [
      { key: 'A', text: 'ip address 192.168.0.0 255.255.0.0' },
      { key: 'B', text: 'ip address 192.168.0.0 255.255.254.0' },
      { key: 'C', text: 'ip address 192.168.0.0 255.255.255.128' },
      { key: 'D', text: 'ip address 192.168.0.0 255.255.255.224' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โจทย์บังคับ "ซับเน็ตเดียว" จึงต้องรวมผู้ใช้ทุกชั้นไว้ในซับเน็ตนั้น\n\n1️⃣ นับจำนวนโฮสต์ที่ต้องการ\n• 8 ชั้น × 40 คน (เอาค่าสูงสุดไว้ก่อน) = 320 โฮสต์\n\n2️⃣ หา mask ที่เล็กที่สุดที่ยังพอ\n• /24 (255.255.255.0) → 254 โฮสต์ ✘ ขาดไป 66\n• /23 (255.255.254.0) → 2^9 − 2 = 510 โฮสต์ ✔ พอและประหยัดที่สุด\n• /22 → 1022 โฮสต์ → เปลืองเกินจำเป็น\n\n✅ ทำไม B ถูก: 255.255.254.0 คือ /23 ให้ 510 โฮสต์ ครอบ 320 คนได้พอดีโดยเหลือเผื่อพอสมควร\n\n❌ ทำไมข้ออื่นผิด:\nA. 255.255.0.0 = /16 → 65,534 โฮสต์ เปลืองมหาศาลสำหรับ 320 คน\nC. 255.255.255.128 = /25 → 126 โฮสต์ ไม่พอแม้แต่ 4 ชั้น\nD. 255.255.255.224 = /27 → 30 โฮสต์ พอแค่ชั้นเดียว (และยังไม่พอถ้าชั้นนั้นมี 40 คน)\n\n💡 คำว่า SVI (Switched Virtual Interface) คือ interface vlan X บนสวิตช์ชั้น 3 ใช้เป็น gateway ให้ VLAN นั้น\n\n📗 จำไว้สอบ: /24=254, /23=510, /22=1022, /25=126, /26=62, /27=30, /28=14 โฮสต์',
  },
  {
    id: 38,
    kind: 'drag',
    image: v4q38,
    prompt: 'Drag and drop the descriptions of transport protocol transmissions from the left onto the correct protocols on the right.',
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
      '📘 แนวคิด — เทียบ TCP กับ UDP ในมุม "รูปแบบการส่ง"\n\n🔹 TCP — stream-oriented\n• มองข้อมูลเป็นสายต่อเนื่อง (byte stream) แล้วหั่นเป็น segment เอง\n• ทุก segment มี sequence number → ผู้รับประกอบกลับตามลำดับได้เสมอ\n• ต้องรอ ACK และปรับ window ทำให้อัตราส่งช้าลง แต่แลกมาด้วยความน่าเชื่อถือ\n• เฮดเดอร์ 20 ไบต์ (ไม่รวม options)\n\n🔹 UDP — message-oriented\n• แต่ละดาต้าแกรมเป็นอิสระต่อกัน ส่งทีละชิ้นแยกกัน ไม่มีลำดับ\n• เฮดเดอร์เล็กแค่ 8 ไบต์ ⭐ (source port, destination port, length, checksum อย่างละ 2 ไบต์)\n• ไม่รอ ACK ไม่มี flow control → ส่งได้เร็วกว่า เหมาะกับ VoIP วิดีโอสด เกม\n\n🔍 จับคู่:\n• sends transmissions in sequence → TCP (มี sequence number)\n• transmits packets as a stream → TCP\n• uses a lower transmission rate to ensure reliability → TCP\n• transmissions include an 8-byte header → UDP\n• transmits packets individually → UDP\n• uses a higher transmission rate to support latency-sensitive applications → UDP\n\n📗 จำไว้สอบ: TCP เฮดเดอร์ 20B + stream + เรียงลำดับ | UDP เฮดเดอร์ 8B + ทีละดาต้าแกรม + เร็ว',
  },
  {
    id: 39,
    kind: 'single',
    prompt: 'A device detects two stations transmitting frames at the same time. This condition occurs after the first 64 bytes of the frame is received. Which interface counter increments?',
    options: [
      { key: 'A', text: 'runt' },
      { key: 'B', text: 'collision' },
      { key: 'C', text: 'late collision' },
      { key: 'D', text: 'CRC' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เส้นแบ่ง 64 ไบต์ (slot time = 512 บิต) คือหัวใจของข้อนี้\n• collision ปกติ → ตรวจพบ "ภายใน" 64 ไบต์แรก → ถือว่าปกติในโหมด half-duplex\n• late collision → ตรวจพบ "หลัง" 64 ไบต์แรก ⭐ → ผิดปกติเสมอ ต้องหาสาเหตุ\n\n🔍 อ่านโจทย์: "after the first 64 bytes of the frame is received" → ตรงนิยาม late collision เป๊ะ\n\n✅ ทำไม C ถูก: การชนกันที่เกิดหลังไบต์ที่ 64 จะถูกนับที่ตัวนับ late collision ใน show interfaces\n\n💡 สาเหตุที่ต้องไล่เมื่อเจอ late collision\n1️⃣ duplex mismatch (พบบ่อยที่สุด) — ฝั่งหนึ่ง half อีกฝั่ง full\n2️⃣ สายยาวเกินมาตรฐาน (UTP > 100 เมตร)\n3️⃣ มีอุปกรณ์/รีพีตเตอร์ในเส้นทางมากเกินกฎ 5-4-3\n\n❌ ทำไมข้ออื่นผิด:\nA. runt = เฟรมสั้นกว่า 64 ไบต์ (ซึ่งอาจเป็นผลพลอยได้ของ collision) แต่โจทย์ถามถึงเหตุการณ์การชน ไม่ใช่ขนาดเฟรม\nB. collision ธรรมดาต้องเกิด "ก่อน" ไบต์ที่ 64 — โจทย์ระบุชัดว่าเกิดหลัง\nD. CRC = เฟรมมาครบแต่ checksum ผิด ไม่ได้บ่งบอกเรื่องการชน\n\n📗 จำไว้สอบ: ≤64 ไบต์ = collision (ปกติในโหมด half) | >64 ไบต์ = late collision (ต้องแก้ duplex/สาย)',
  },
  {
    id: 40,
    kind: 'single',
    image: v4q40,
    prompt: 'Refer to the exhibit. Which outcome is expected when PC_A sends data to PC_B after their initial communication?',
    options: [
      { key: 'A', text: 'The source MAC address is changed.' },
      { key: 'B', text: 'The destination MAC address is replaced with ffff.ffff.ffff.' },
      { key: 'C', text: 'The source and destination MAC addresses remain the same.' },
      { key: 'D', text: 'The switch rewrites the source and destination MAC addresses with its own.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎการเปลี่ยน/ไม่เปลี่ยนที่อยู่\n• MAC address จะถูกเขียนใหม่ก็ต่อเมื่อแพ็กเก็ตผ่าน "อุปกรณ์ชั้น 3" (เราเตอร์ / SVI) เท่านั้น\n• สวิตช์ชั้น 2 ทำหน้าที่แค่ "ส่งต่อเฟรม" ไม่แตะทั้ง source และ destination MAC\n• IP address ต้นทาง/ปลายทางไม่เปลี่ยนตลอดเส้นทาง (ยกเว้นมี NAT)\n\n🔍 อ่าน exhibit: PC_A และ PC_B ต่ออยู่กับ Switch1 ตัวเดียวกัน และอยู่ VLAN 200 เหมือนกันทั้งคู่\n→ อยู่ broadcast domain เดียวกัน ไม่มีเราเตอร์คั่นกลาง\n\n💡 คำว่า "after their initial communication" สำคัญมาก — หมายความว่า\n• ARP เสร็จแล้ว PC_A รู้ MAC ของ PC_B แล้ว → ไม่ต้อง broadcast อีก\n• สวิตช์เรียนรู้ MAC ของทั้งคู่ลงตาราง CAM แล้ว → ไม่ต้อง flood อีก\n\n✅ ทำไม C ถูก: เฟรมจาก PC_A จะมี source = MAC ของ PC_A และ destination = MAC ของ PC_B ตลอดทาง เพราะไม่มีอุปกรณ์ชั้น 3 มาเปลี่ยนแปลง\n\n❌ ทำไมข้ออื่นผิด:\nA. source MAC เปลี่ยนเฉพาะเมื่อเราเตอร์ส่งต่อออกอินเทอร์เฟซใหม่\nB. ffff.ffff.ffff คือ broadcast ซึ่งใช้เฉพาะตอน ARP ครั้งแรกเท่านั้น — โจทย์บอกว่าผ่านการสื่อสารครั้งแรกไปแล้ว\nD. สวิตช์ชั้น 2 ไม่เคยใส่ MAC ของตัวเองลงในเฟรมที่ส่งต่อ\n\n📗 จำไว้สอบ: สวิตช์ = ไม่แตะ MAC | เราเตอร์ = เขียน MAC ใหม่ทุก hop แต่ IP คงเดิม',
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
      '📘 แนวคิด — ย่าน 2.4 GHz ในอเมริกาเหนือมี 11 ช่อง (ยุโรป 13) แต่ละช่องกว้าง 22 MHz ขณะที่จุดกลางช่องห่างกันแค่ 5 MHz\n• ช่องจะไม่ทับกันได้ ต้องห่างกันอย่างน้อย 5 หมายเลขช่อง (22 ÷ 5 ≈ 5)\n• 1 → 6 ห่าง 5 ✔ | 6 → 11 ห่าง 5 ✔ | 1 → 11 ห่าง 10 ✔\n• จึงเหลือชุดเดียวที่ไม่ทับกันเลยคือ 1, 6, 11 ⭐\n\n✅ ทำไม C ถูก: 1, 6, 11 คือชุดช่องมาตรฐาน (nonoverlapping) ที่ใช้วางเซลล์ AP แบบรังผึ้งเพื่อไม่ให้สัญญาณชนกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. 5, 6, 7 ห่างกันแค่ 1 ช่อง → ทับกันเกือบทั้งหมด\nB. 1, 2, 3 ห่างกันแค่ 1 ช่อง → ทับกันหนัก\nD. 1, 5, 10 ห่างกัน 4 และ 5 → คู่ 1 กับ 5 ยังทับกันบางส่วน\n\n💡 DSSS (Direct Sequence Spread Spectrum) คือเทคนิคมอดูเลตของ 802.11b ที่กระจายสัญญาณกว้าง 22 MHz จึงเป็นที่มาของกฎ 1/6/11\n\n📗 จำไว้สอบ: 2.4 GHz = 1, 6, 11 เท่านั้น • 5 GHz มีช่องไม่ทับกันเยอะกว่ามาก (~23 ช่อง)',
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
      '📘 แนวคิด — เครื่องมือที่แต่ละโปรโตคอลมีจริง ๆ\n\n🔹 TCP มีครบชุด\n• Checksum → ตรวจว่าข้อมูลเสียหายระหว่างทางหรือไม่\n• Acknowledgment → ผู้รับยืนยันกลับทุก segment\n• Retransmission → ส่งซ้ำเมื่อไม่ได้ ACK ภายในเวลา\n• Sequence number, windowing, flow control\n\n🔹 UDP มีอย่างเดียว\n• Checksum (ยังเป็นตัวเลือก ปิดได้ใน IPv4) → บอกได้แค่ว่าข้อมูล "เสีย" แล้วก็ทิ้งไป ไม่มีการขอส่งใหม่ ⭐\n• ไม่มี ACK ไม่มี retransmission ไม่มี sequence number\n\n✅ ทำไม C ถูก: ระบุเครื่องมือของทั้งสองฝั่งได้ถูกต้องครบถ้วน — TCP มี checksum + ACK + retransmission ส่วน UDP มีแค่ checksum\n\n❌ ทำไมข้ออื่นผิด:\nA. parity check เป็นกลไกตรวจสอบข้อผิดพลาดชั้นล่าง ไม่ใช่ของ TCP และ UDP ก็ไม่ได้ใช้ CRC (CRC อยู่ในเฟรมชั้น 2)\nB. UDP ไม่มี retransmission เด็ดขาด\nD. UDP ไม่มี acknowledgment เด็ดขาด\n\n📗 จำไว้สอบ: UDP มีแค่ checksum • CRC อยู่ที่ชั้น 2 (FCS) ไม่ใช่ชั้น 4',
  },
  {
    id: 43,
    kind: 'single',
    prompt: 'A wireless administrator has configured a WLAN; however, the clients need access to a less congested 5-GHz network for their voice quality. Which action must be taken to meet the requirement?',
    options: [
      { key: 'A', text: 'enable Band Select' },
      { key: 'B', text: 'enable DTIM' },
      { key: 'C', text: 'enable RX-SOP' },
      { key: 'D', text: 'enable AAA override' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ฟีเจอร์ WLC ที่ชื่อคล้ายกันแต่ทำคนละเรื่อง\n\n• Band Select ⭐ → ผลักไคลเอนต์ที่รองรับสองย่าน (dual-band) ให้ไปเกาะ 5 GHz แทน 2.4 GHz\n  วิธีทำ: AP จงใจ "ไม่ตอบ" probe request บน 2.4 GHz ในช่วงแรก ๆ ไคลเอนต์จึงหันไปลอง 5 GHz\n  ผล: 5 GHz มีช่องเยอะกว่า แออัดน้อยกว่า → คุณภาพเสียง VoIP ดีขึ้น\n\n• DTIM (Delivery Traffic Indication Map) → บอกไคลเอนต์ที่หลับอยู่ว่ามี multicast/broadcast รออยู่ เกี่ยวกับการประหยัดพลังงาน ไม่ใช่การเลือกย่าน\n\n• RX-SOP (Receiver Start of Packet Detection Threshold) → ตั้งระดับสัญญาณขั้นต่ำที่ AP จะยอมรับ ใช้ปรับขนาดเซลล์ ไม่ใช่ย้ายย่าน\n\n• AAA override → ยอมให้เซิร์ฟเวอร์ RADIUS ส่งค่า VLAN/ACL/QoS มาทับค่าที่ตั้งไว้บน WLAN เป็นเรื่องนโยบายผู้ใช้\n\n✅ ทำไม A ถูก: Band Select เป็นฟีเจอร์เดียวที่ออกแบบมาเพื่อ "ผลักไคลเอนต์ไป 5 GHz" ตรงตามความต้องการของโจทย์\n\n📗 จำไว้สอบ: Band Select=ดันไป 5 GHz | DTIM=power save | RX-SOP=ขนาดเซลล์ | AAA override=นโยบายจาก RADIUS',
  },
  {
    id: 44,
    kind: 'drag',
    image: v4q44,
    prompt: 'Drag and drop the application protocols from the left onto the transport protocols that it uses on the right.',
    categories: [
      { name: 'TCP', items: ['FTP', 'SMTP', 'SSH'] },
      { name: 'UDP', items: ['DHCP', 'SNMP', 'TFTP'] },
    ],
    explanation:
      '📘 แนวคิด — จำพอร์ตแล้วจะตอบข้อแบบนี้ได้ทันที\n\n🔹 ใช้ TCP (ต้องการความถูกต้องครบถ้วน)\n• FTP → TCP 20 (data) / 21 (control)\n• SMTP → TCP 25 (อีเมลขาออก)\n• SSH → TCP 22\n• HTTP 80, HTTPS 443, Telnet 23, POP3 110, IMAP 143\n\n🔹 ใช้ UDP (ต้องการความเร็ว/เบา หรือเป็นการถามสั้น ๆ)\n• DHCP → UDP 67 (server) / 68 (client) — ต้อง broadcast ตอนยังไม่มี IP จึงใช้ TCP ไม่ได้\n• SNMP → UDP 161 (query) / 162 (trap) — โพลข้อมูลถี่ ๆ หายบ้างไม่เป็นไร\n• TFTP → UDP 69\n• DNS → UDP 53 (ปกติ) แต่ใช้ TCP 53 เมื่อคำตอบยาวเกิน 512 ไบต์หรือทำ zone transfer\n• RTP/VoIP, syslog 514, NTP 123\n\n🔍 จับคู่: FTP, SMTP, SSH → TCP | DHCP, SNMP, TFTP → UDP\n\n📗 จำไว้สอบ: จำเป็นชุด — TCP: FTP 20/21, SSH 22, Telnet 23, SMTP 25, HTTP 80, HTTPS 443 | UDP: DHCP 67/68, TFTP 69, SNMP 161/162, NTP 123, syslog 514',
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
      '📘 แนวคิด — MAC address พิเศษที่ต้องจำ\n• FF:FF:FF:FF:FF:FF → Layer 2 broadcast ⭐ ทุกบิตเป็น 1 ทั้ง 48 บิต ทุกอุปกรณ์ใน broadcast domain ต้องรับและประมวลผล\n• 01:00:5E:xx:xx:xx → IPv4 multicast ที่แมปมาเป็น MAC\n• 33:33:xx:xx:xx:xx → IPv6 multicast\n• 0000.0C07.ACxx → MAC เสมือนของ HSRP v1\n• 0000.5E00.01xx → MAC เสมือนของ VRRP\n\n✅ ทำไม B ถูก: ff:ff:ff:ff:ff:ff คือที่อยู่ broadcast ของอีเทอร์เน็ต ใช้ใน ARP request, DHCP Discover และการค้นหาอุปกรณ์อื่นบนลิงก์\n\n❌ ทำไมข้ออื่นผิด:\nA. 00:00:0c:07:ac:01 คือ MAC เสมือนของ HSRP group 1 (0000.0C07.AC + group ในเลขฐาน 16) เป็น unicast\nC. 43:2e:08:00:00:0c เป็น MAC ทั่วไป (สังเกตว่า 43 ไม่ใช่ OUI ที่มีความหมายพิเศษ)\nD. 00:00:0c เป็น OUI ของ Cisco แต่ทั้งก้อนยังเป็น unicast address ธรรมดา\nE. ครึ่งหลังเป็น ff:ff:ff แต่ครึ่งหน้าไม่ใช่ → ต้องเป็น F ทั้ง 12 ตัวเท่านั้นจึงจะเป็น broadcast\n\n📗 จำไว้สอบ: broadcast MAC = FFFF.FFFF.FFFF (F 12 ตัว) • บิตแรกสุด (I/G bit) = 1 หมายถึงส่งแบบกลุ่ม',
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
      '📘 แนวคิด — physical address = MAC address (48 บิต) ทำงานที่ชั้น 2\n• 24 บิตแรก = OUI ระบุผู้ผลิต (IEEE เป็นผู้จ่าย)\n• 24 บิตหลัง = หมายเลขเครื่องที่ผู้ผลิตกำหนด\n• รวมกันแล้วต้องไม่ซ้ำกันทั้งโลก → ใช้ระบุตัวตนอุปกรณ์ในเครือข่ายเดียวกันได้อย่างแม่นยำ\n• ขอบเขตการทำงาน: "ภายใน broadcast domain เดียวกัน" เท่านั้น เมื่อข้ามเราเตอร์ MAC จะถูกเขียนใหม่ทุกครั้ง\n\n✅ ทำไม A ถูก: MAC ทำหน้าที่ระบุตัวตนอุปกรณ์แบบไม่ซ้ำกันที่ชั้น 2\n✅ ทำไม E ถูก: อุปกรณ์บนเครือข่าย/ซับเน็ตเดียวกันส่งเฟรมหากันโดยอ้างอิง MAC ปลายทางโดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nB. การสื่อสารข้ามเครือข่ายเป็นหน้าที่ของ IP address (ชั้น 3) — MAC เดินทางข้ามเราเตอร์ไม่ได้\nC. การแยกชั้นทำผ่านฟิลด์ EtherType/Protocol ไม่ใช่ผ่าน MAC\nD. การจัดลำดับสิทธิ์ส่งใช้ CSMA/CD หรือ QoS ไม่เกี่ยวกับ MAC\nF. ถ้าไม่รู้ MAC ปลายทาง ต้องใช้ ARP (ซึ่งอาศัย IP) มาค้นหา — และ ARP ใช้ไม่ได้กับอุปกรณ์ระยะไกลข้ามเราเตอร์\n\n📗 จำไว้สอบ: MAC = ระบุตัวตน + สื่อสารในเครือข่ายเดียวกัน | IP = สื่อสารข้ามเครือข่าย',
  },
  {
    id: 47,
    kind: 'drag',
    image: v4q47,
    prompt: 'Drag and drop the protocols from the left onto the correct transport behaviour on the right.',
    categories: [
      { name: 'Connection Oriented', items: ['SMTP', 'SSH', 'FTP'] },
      { name: 'Connectionless', items: ['SNMP', 'TFTP', 'VoIP'] },
    ],
    explanation:
      '📘 แนวคิด — "connection oriented" = วิ่งบน TCP (ต้องจับมือ 3 ทางก่อน) | "connectionless" = วิ่งบน UDP (ยิงได้เลย)\n\n🔹 Connection Oriented (TCP)\n• SMTP (TCP 25) → อีเมลต้องส่งถึงครบทุกไบต์ ห้ามตกหล่น\n• SSH (TCP 22) → เซสชันโต้ตอบ ต้องเรียงลำดับตัวอักษรถูกต้อง\n• FTP (TCP 20/21) → ไฟล์ต้องสมบูรณ์ 100%\n\n🔹 Connectionless (UDP)\n• SNMP (UDP 161/162) → โพลค่าถี่ ๆ หายไปบ้างรอบหน้าก็ได้ใหม่\n• TFTP (UDP 69) → เรียบง่าย โค้ดเล็ก ใช้ในแลนที่เชื่อถือได้อยู่แล้ว\n• VoIP / RTP (UDP) → เสียงต้องมาตรงเวลา ถ้ามัวรอส่งซ้ำจะได้ยินสะดุด ยอมให้แพ็กเก็ตหายดีกว่าช้า ⭐\n\n💡 หลักคิดเร็ว: "ถูกต้องสำคัญกว่าเร็ว → TCP" | "เร็วสำคัญกว่าถูกต้องครบ → UDP"\n\n📗 จำไว้สอบ: ไฟล์/อีเมล/รีโมต = TCP | เสียง/วิดีโอสด/มอนิเตอร์ = UDP',
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
      '📘 แนวคิด — โครงสร้างเฟรมอีเทอร์เน็ตเรียงตามลำดับที่ส่งออกสาย\n1️⃣ Preamble — 7 ไบต์ รูปแบบ 10101010 ซ้ำ ๆ ⭐\n   หน้าที่: ปลุกและซิงค์นาฬิกาของผู้รับ = "เตรียมตัวนะ กำลังจะมีข้อมูลมา"\n2️⃣ SFD (Start of Frame Delimiter) — 1 ไบต์ 10101011\n   หน้าที่: บอกว่า "หมดคำนำแล้ว ไบต์ถัดไปคือเนื้อเฟรมจริง"\n3️⃣ Destination MAC — 6 ไบต์\n4️⃣ Source MAC — 6 ไบต์\n5️⃣ Type/Length — 2 ไบต์ (0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP)\n6️⃣ Data/Payload — 46–1500 ไบต์\n7️⃣ FCS — 4 ไบต์ ตรวจความถูกต้อง\n\n✅ ทำไม C ถูก: preamble คือส่วนที่ทำหน้าที่ "แจ้งเตือนล่วงหน้า" ว่ากำลังมีทราฟฟิกเข้ามา และให้ผู้รับซิงค์จังหวะบิตให้ตรงกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. SFD บอกจุด "เริ่ม" ของเฟรมจริง — เป็นขั้นถัดจากการแจ้งเตือน ไม่ใช่ตัวแจ้งเตือน\nB. Type field บอกว่า payload เป็นโปรโตคอลอะไร (IPv4/IPv6/ARP)\nD. Data field คือเนื้อข้อมูลจริง ไม่ได้ทำหน้าที่แจ้งเตือน\n\n📗 จำไว้สอบ: Preamble (7B ปลุก+ซิงค์) → SFD (1B เริ่มจริง) → DstMAC → SrcMAC → Type → Data → FCS',
  },
  {
    id: 49,
    kind: 'single',
    prompt: 'You are configuring your edge routers interface with a public IP address for Internet connectivity. The router needs to obtain the IP address from the service provider dynamically. Which command is needed on interface FastEthernet 0/0 to accomplish this?',
    options: [
      { key: 'A', text: 'ip default-gateway' },
      { key: 'B', text: 'ip route' },
      { key: 'C', text: 'ip default-network' },
      { key: 'D', text: 'ip address dhcp' },
      { key: 'E', text: 'ip address dynamic' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เมื่อ ISP แจกที่อยู่ให้แบบไดนามิก ต้องตั้งอินเทอร์เฟซให้เป็น "DHCP client"\n\n🔧 คำสั่งที่ใช้จริง\nRouter(config)# interface FastEthernet0/0\nRouter(config-if)# ip address dhcp\nRouter(config-if)# no shutdown\n\n💡 ผลข้างเคียงที่ควรรู้: เมื่อรับ IP จาก DHCP เราเตอร์จะได้ default route (0.0.0.0/0) จาก DHCP option 3 มาโดยอัตโนมัติด้วย จึงไม่ต้องตั้ง static default route เอง\n\n✅ ทำไม D ถูก: ip address dhcp เป็นคำสั่งระดับอินเทอร์เฟซที่สั่งให้ขอที่อยู่จากเซิร์ฟเวอร์ DHCP ของ ISP\n\n❌ ทำไมข้ออื่นผิด:\nA. ip default-gateway เป็นคำสั่ง global ใช้กับอุปกรณ์ที่ "ไม่ได้เราต์" (สวิตช์ชั้น 2 หรือเราเตอร์ที่ปิด ip routing)\nB. ip route ใช้สร้าง static route ด้วยมือ ไม่ใช่การขอที่อยู่ให้อินเทอร์เฟซ\nC. ip default-network ใช้ประกาศเครือข่ายเป็น candidate default route ในโปรโตคอลแบบ classful (RIP/IGRP) เป็นคนละเรื่อง\nE. ไม่มีคำสั่ง ip address dynamic ใน Cisco IOS — เป็นตัวเลือกลวง\n\n📗 จำไว้สอบ: ip address dhcp = รับ IP จาก ISP + ได้ default route แถมมาด้วย',
  },
  {
    id: 50,
    kind: 'multi',
    prompt: 'Which two statements about the purpose of the OSI model are accurate? (Choose two.)',
    options: [
      { key: 'A', text: 'Defines the network functions that occur at each layer' },
      { key: 'B', text: 'Facilitates an understanding of how information travels throughout a network' },
      { key: 'C', text: 'Changes in one layer do not impact other layer' },
      { key: 'D', text: 'Ensures reliable data delivery through its layered approach' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — OSI model คือ "แบบจำลองอ้างอิง" (reference model) ไม่ใช่โปรโตคอลที่รันจริง\n\n🔹 7 ชั้นและหน้าที่\n7 Application → บริการให้ผู้ใช้ (HTTP, FTP, SMTP)\n6 Presentation → เข้ารหัส/บีบอัด/แปลงรูปแบบ (SSL, JPEG)\n5 Session → เปิด-ปิด-จัดการเซสชัน\n4 Transport → TCP/UDP, port, segment\n3 Network → IP, routing, packet\n2 Data Link → MAC, switching, frame\n1 Physical → บิต สายสัญญาณ แรงดันไฟ\n\n🔹 ประโยชน์ของแบบจำลอง\n• กำหนดชัดว่าหน้าที่ใดอยู่ชั้นไหน → ผู้ผลิตต่างเจ้าทำงานร่วมกันได้\n• ช่วยให้เข้าใจและอธิบาย "การเดินทางของข้อมูล" ตั้งแต่แอปจนถึงสาย\n• ใช้แยกแยะปัญหาเวลาแก้ไข (troubleshoot ทีละชั้น)\n\n✅ ทำไม A ถูก: จุดประสงค์หลักคือนิยามว่าหน้าที่อะไรเกิดที่ชั้นไหน\n✅ ทำไม B ถูก: ช่วยให้เห็นภาพการไหลของข้อมูลตลอดเครือข่าย (encapsulation/de-encapsulation)\n\n❌ ทำไมข้ออื่นผิด:\nC. ฟังดูดีแต่ผิด — การเปลี่ยนแปลงในชั้นหนึ่งกระทบชั้นอื่นได้จริง เช่น เปลี่ยน MTU ที่ชั้น 2 กระทบการแบ่งส่วนที่ชั้น 3/4 (แบบจำลองแค่ "ลด" การพึ่งพากัน ไม่ได้ตัดขาด)\nD. OSI เป็นแบบจำลองแนวคิด ไม่ได้ "รับประกัน" การส่งข้อมูล — ความน่าเชื่อถือมาจากโปรโตคอลอย่าง TCP ที่ชั้น 4\n\n📗 จำไว้สอบ: OSI = กรอบอ้างอิงเพื่อ "นิยามหน้าที่" และ "อธิบายการเดินทางของข้อมูล" ไม่ใช่ตัวรับประกันอะไร',
  },
  {
    id: 51,
    kind: 'multi',
    prompt: 'Which three statements about MAC addresses are correct? (Choose three.)',
    options: [
      { key: 'A', text: 'To communicate with other devices on a network, a network device must have a unique MAC address' },
      { key: 'B', text: 'The MAC address is also referred to as the IP address' },
      { key: 'C', text: 'The MAC address of a device must be configured in the Cisco IOS CLI by a user with administrative privileges' },
      { key: 'D', text: 'A MAC address contains two main components, the first of which identifies the manufacturer of the hardware and the second of which uniquely identifies the hardware' },
      { key: 'E', text: 'An example of a MAC address is 0A:26:B8:D6:65:90' },
      { key: 'F', text: 'A MAC address contains two main components, the first of which identifies the network on which the host resides and the second of which uniquely identifies the host on the network' },
    ],
    correct: ['A', 'D', 'E'],
    explanation:
      '📘 แนวคิด — MAC address คืออะไร\n• ยาว 48 บิต = 6 ไบต์ เขียนเป็นเลขฐาน 16 12 ตัว\n• โครงสร้าง 2 ส่วน: OUI 3 ไบต์แรก (ผู้ผลิต) + NIC-specific 3 ไบต์หลัง (หมายเลขเครื่อง) ⭐\n• เผาไว้ใน NIC ตั้งแต่โรงงาน (burned-in address) จึงเรียกว่า physical address\n• ต้องไม่ซ้ำกันทั้งโลก มิฉะนั้นสวิตช์จะสับสนว่าจะส่งเฟรมออกพอร์ตไหน\n\n✅ ทำไม A ถูก: ถ้า MAC ซ้ำกันในเครือข่ายเดียวกัน ตาราง CAM จะกระพริบไปมา (MAC flapping) และการสื่อสารจะพัง\n✅ ทำไม D ถูก: ตรงกับโครงสร้าง OUI + serial ที่อธิบายข้างต้น\n✅ ทำไม E ถูก: 0A:26:B8:D6:65:90 มี 6 ไบต์ 12 หลักฐานสิบหก เป็นรูปแบบ MAC ที่ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nB. MAC (ชั้น 2) กับ IP (ชั้น 3) เป็นคนละสิ่งโดยสิ้นเชิง — MAC ประจำตัวฮาร์ดแวร์ ส่วน IP เปลี่ยนตามเครือข่ายที่ไปอยู่\nC. MAC มาจากโรงงานอยู่แล้ว ไม่ต้องตั้งค่า (แม้จะ override ได้ด้วยคำสั่ง mac-address แต่ก็ไม่ใช่ "ต้องทำ")\nF. นี่คือคำอธิบายของ "IP address" (network portion + host portion) ไม่ใช่ MAC — เป็นตัวลวงที่จับคู่กับ D\n\n📗 จำไว้สอบ: MAC = 48 บิต = OUI (ผู้ผลิต) + serial (เครื่อง) | IP = network portion + host portion',
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
      '📘 แนวคิด — 3 วิธีเปลี่ยนผ่านจาก IPv4 ไป IPv6\n\n1️⃣ Dual-stack → อุปกรณ์รันทั้ง IPv4 และ IPv6 พร้อมกันบนอินเทอร์เฟซเดียว\n   ต้องใช้ได้ทั้งสองโปรโตคอล "ตลอดเส้นทาง" ถ้ามีช่วงที่รองรับแค่ IPv4 ก็ไปไม่ได้\n\n2️⃣ Tunneling (6to4, ISATAP, GRE, Teredo) ⭐ → ห่อแพ็กเก็ต IPv6 ไว้ข้างในแพ็กเก็ต IPv4\n   แกนกลางที่เป็น IPv4 ล้วนจะเห็นเป็นแพ็กเก็ต IPv4 ธรรมดา จึงส่งผ่านได้\n   ตรงตามที่โจทย์ถาม: "route IPv6 traffic over an IPv4 infrastructure"\n\n3️⃣ Translation (NAT64/NPTv6) → แปลงที่อยู่ IPv6 ↔ IPv4 ให้โฮสต์คนละโปรโตคอลคุยกันได้\n\n✅ ทำไม B ถูก: 6to4 tunneling ห่อ IPv6 ไว้ใน IPv4 (protocol 41) แล้วส่งข้ามโครงสร้างพื้นฐาน IPv4 เดิมได้ทันที\n\n❌ ทำไมข้ออื่นผิด:\nA. NAT (แบบ IPv4 ดั้งเดิม) แปลงที่อยู่ private ↔ public ในโลก IPv4 ไม่ได้ขน IPv6\nC. L2TPv3 เป็นทันเนลของ "เฟรมชั้น 2" ข้าม IP (pseudowire) ไม่ใช่วิธีมาตรฐานสำหรับขน IPv6 ในบริบท CCNA\nD. dual-stack ต้องการให้ทุก hop รองรับ IPv6 อยู่แล้ว จึงแก้ปัญหา "แกนกลางเป็น IPv4 ล้วน" ไม่ได้\n\n📗 จำไว้สอบ: dual-stack=รันคู่กัน | tunneling=ห่อ v6 ใน v4 (ใช้เมื่อแกนกลางยังเป็น v4) | NAT64=แปลงข้ามโปรโตคอล',
  },
  {
    id: 53,
    kind: 'single',
    image: v4q53,
    prompt: 'Refer to the exhibit. A network technician is asked to design a small network with redundancy. The exhibit represents this design, with all hosts configured in the same VLAN. What conclusions can be made about this design?',
    options: [
      { key: 'A', text: 'This design will function as intended.' },
      { key: 'B', text: 'Spanning-tree will need to be used.' },
      { key: 'C', text: 'The router will not accept the addressing scheme.' },
      { key: 'D', text: 'The connection between switches should be a trunk.' },
      { key: 'E', text: 'The router interfaces must be encapsulated with the 802.1Q protocol.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎเหล็กของ Cisco IOS: อินเทอร์เฟซสองขาของเราเตอร์ตัวเดียวกัน "ห้าม" อยู่ในซับเน็ตเดียวกัน\nถ้าพยายามตั้ง IOS จะขึ้น error ว่า "% 192.168.1.0 overlaps with FastEthernet0/0" และปฏิเสธคำสั่ง\nเหตุผล: ถ้าซับเน็ตเดียวกันโผล่บนสองขา เราเตอร์จะไม่รู้ว่าต้องส่งแพ็กเก็ตออกขาไหน ตารางเราต์จะขัดแย้งกันเอง\n\n🔍 อ่าน exhibit\n• Router1 ขาหนึ่งไป Switch1 ตั้ง 192.168.1.1/24\n• Router1 อีกขาไป Switch2 ตั้ง 192.168.1.2/24\n• ทั้งสองขาอยู่ในซับเน็ต 192.168.1.0/24 เหมือนกันเป๊ะ ⛔\n\n✅ ทำไม C ถูก: เราเตอร์จะปฏิเสธการตั้งค่าที่อยู่ขาที่สอง เพราะซับเน็ตทับซ้อนกับขาแรก การออกแบบนี้จึงใช้งานไม่ได้ตั้งแต่ขั้นคอนฟิก\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีทางทำงานได้ เพราะคอนฟิกไม่ผ่านตั้งแต่ต้น\nB. STP จะทำงานอัตโนมัติอยู่แล้วบนสวิตช์ Cisco และปัญหาที่แท้จริงไม่ใช่ลูป แต่เป็นการทับซ้อนของซับเน็ตบนเราเตอร์\nD. โฮสต์ทั้งหมดอยู่ VLAN เดียวกัน ลิงก์ระหว่างสวิตช์เป็น access ก็เพียงพอ ไม่จำเป็นต้องเป็น trunk\nE. 802.1Q จำเป็นเมื่อทำ router-on-a-stick หลาย VLAN — ที่นี่มี VLAN เดียว\n\n📗 จำไว้สอบ: สองอินเทอร์เฟซของเราเตอร์ตัวเดียวกัน ห้ามซับเน็ตทับกัน → IOS ขึ้น "overlaps with"',
  },
  {
    id: 54,
    kind: 'multi',
    prompt: 'Which two statements are true about the command ip route 172.16.3.0 255.255.255.0 192.168.2.4? (Choose two.)',
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
      '📘 แนวคิด — แกะโครงสร้างคำสั่ง static route\nip route <destination-network> <subnet-mask> <next-hop-IP หรือ exit-interface> [AD]\n\n🔍 แกะคำสั่งในโจทย์: ip route 172.16.3.0 255.255.255.0 192.168.2.4\n• 172.16.3.0 = เครือข่ายปลายทางที่ต้องการไปให้ถึง\n• 255.255.255.0 = /24\n• 192.168.2.4 = next-hop IP (ที่อยู่ของเราเตอร์ตัวถัดไป ไม่ใช่ขาของเราเอง)\n• ไม่ได้พิมพ์ตัวเลข AD ต่อท้าย → ใช้ค่าเริ่มต้น\n\n📊 ค่า Administrative Distance ที่ต้องจำ\n• Connected = 0 | Static = 1 ⭐ | eBGP = 20 | EIGRP = 90 | OSPF = 110 | RIP = 120 | iBGP = 200 | Unusable = 255\n\n✅ ทำไม A ถูก: สร้าง static route ไปยังเครือข่าย 172.16.3.0/24 ตรงตามพารามิเตอร์แรก\n✅ ทำไม E ถูก: ไม่ระบุ AD ต่อท้าย → ใช้ค่าเริ่มต้นของ static route คือ 1\n\n❌ ทำไมข้ออื่นผิด:\nB. 192.168.2.4 เป็น next-hop ไม่ใช่ปลายทาง\nC. เส้นทางสำหรับ "ปลายทางที่ไม่รู้จัก" คือ default route (ip route 0.0.0.0 0.0.0.0 …) ซึ่งไม่ใช่คำสั่งนี้\nD. เช่นเดียวกับ C และ 192.168.2.4 ก็ไม่ใช่อินเทอร์เฟซของเราเตอร์เราเอง\nF. เส้นทางที่ "ใช้เป็นอันดับสุดท้าย" คือ floating static route ซึ่งต้องตั้ง AD สูง ๆ ต่อท้าย (เช่น 200) — คำสั่งนี้ AD = 1 ซึ่งชนะเกือบทุกโปรโตคอล\n\n📗 จำไว้สอบ: AD ต่ำ = น่าเชื่อถือกว่า ชนะ • Connected 0 < Static 1 < eBGP 20 < EIGRP 90 < OSPF 110 < RIP 120',
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
      '📘 แนวคิด — ประโยชน์ที่แท้จริงของที่อยู่ส่วนตัว (RFC 1918)\n• ฟรี ไม่ต้องเช่า/ซื้อจาก ISP หรือ RIR (public IPv4 มีราคาซื้อขายจริงในตลาด) ⭐\n• ใช้ได้ทันทีกับอุปกรณ์ที่ไม่ต้องออกอินเทอร์เน็ตเลย เช่น เครื่องพิมพ์ กล้องวงจรปิด อุปกรณ์ควบคุมในโรงงาน\n• ทุกองค์กรใช้บล็อกเดียวกันได้พร้อมกันโดยไม่ชนกัน → ชะลอการหมดของ IPv4\n• ซ่อนโครงสร้างภายในจากภายนอกได้ระดับหนึ่ง (เป็นผลพลอยได้ ไม่ใช่ระบบความปลอดภัย)\n\n✅ ทำไม B ถูก: private address ไม่มีค่าใช้จ่าย ต่างจาก public IP ที่ต้องขอจัดสรรและมีต้นทุน\n✅ ทำไม C ถูก: อุปกรณ์ที่ไม่ต้องคุยกับอินเทอร์เน็ตใช้ private address ได้เลย ไม่เปลือง public IP แม้แต่ตัวเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. ตรงข้าม — เราเตอร์บนอินเทอร์เน็ตจะทิ้งแพ็กเก็ตที่มีที่อยู่ RFC 1918 ทันที\nD. กลับด้าน — การใช้ private address ทำให้ "ต้องมี" NAT/PAT เพื่อออกอินเทอร์เน็ต\nE. ไม่จริง — ถ้าตั้งซ้ำกันภายในเครือข่ายเดียวกันก็ยังชนกันได้ตามปกติ และการรวมสองบริษัทที่ใช้ 192.168.1.0/24 เหมือนกันก็เกิดปัญหาซ้อนทับ\n\n📗 จำไว้สอบ: private IP = ฟรี + ใช้ซ้ำได้ทุกองค์กร + ต้องมี NAT ถึงออกเน็ต + ไม่ได้ป้องกันการตั้ง IP ซ้ำ',
  },
  {
    id: 56,
    kind: 'multi',
    prompt: 'What are two benefits that the UDP protocol provide for application traffic? (Choose two.)',
    options: [
      { key: 'A', text: 'UDP traffic has lower overhead than TCP traffic' },
      { key: 'B', text: 'UDP provides a built-in recovery mechanism to retransmit lost packets' },
      { key: 'C', text: 'The CTL field in the UDP packet header enables a three-way handshake to establish the connection' },
      { key: 'D', text: 'UDP maintains the connection state to provide more stable connections than TCP' },
      { key: 'E', text: 'The application can use checksums to verify the integrity of application data' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — UDP header มีแค่ 4 ฟิลด์ รวม 8 ไบต์\n• Source Port (2 ไบต์)\n• Destination Port (2 ไบต์)\n• Length (2 ไบต์)\n• Checksum (2 ไบต์) ⭐\nเทียบกับ TCP header 20 ไบต์ขึ้นไป ที่มี sequence, ack, window, flags, ฯลฯ\n\n✅ ทำไม A ถูก: เฮดเดอร์เล็กกว่ากว่าครึ่ง แถมไม่มี handshake ไม่มี ACK → overhead ต่ำกว่า TCP อย่างชัดเจน เหมาะกับทราฟฟิกที่ต้องการความหน่วงต่ำ\n✅ ทำไม E ถูก: UDP มีฟิลด์ checksum ให้ตรวจความถูกต้องของข้อมูลได้ และแอปพลิเคชันสามารถเพิ่มกลไกตรวจสอบ/กู้คืนของตัวเองทับลงไปได้ตามต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nB. UDP ไม่มีกลไกส่งซ้ำใด ๆ ในตัวเอง — ถ้าแอปต้องการก็ต้องเขียนเอง\nC. ไม่มีฟิลด์ชื่อ CTL ใน UDP header และ UDP ไม่มี three-way handshake เด็ดขาด\nD. UDP เป็น stateless ไม่เก็บสถานะการเชื่อมต่อเลย — เป็นข้อความที่ขัดกับนิยามของ UDP โดยตรง\n\n📗 จำไว้สอบ: UDP header 8 ไบต์ = SrcPort + DstPort + Length + Checksum • ไม่มี state ไม่มี ACK ไม่มี retransmit',
  },
  {
    id: 57,
    kind: 'multi',
    prompt: 'Which two goals reasons to implement private IPv4 addressing on your network? (Choose two.)',
    options: [
      { key: 'A', text: 'Comply with PCI regulations' },
      { key: 'B', text: 'Conserve IPv4 address' },
      { key: 'C', text: 'Reduce the size of the forwarding table on network routers' },
      { key: 'D', text: 'Reduce the risk of a network security breach' },
      { key: 'E', text: 'Comply with local law' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — เหตุผลหลักที่องค์กรใช้ที่อยู่ส่วนตัว\n1️⃣ ประหยัด IPv4 ⭐ — ทั้งองค์กรอาจใช้ public IP จริงเพียงไม่กี่ตัว แล้วให้เครื่องภายในหลายพันเครื่องออกเน็ตผ่าน PAT\n2️⃣ ลดความเสี่ยงถูกโจมตี — เครื่องภายในไม่มีที่อยู่ที่เราต์ได้จากอินเทอร์เน็ต ผู้โจมตีภายนอกจึงเชื่อมเข้ามาตรง ๆ ไม่ได้ ต้องผ่าน NAT/firewall ก่อนเสมอ (ถือเป็นการซ่อนโครงสร้างภายใน)\n\n✅ ทำไม B ถูก: การอนุรักษ์พื้นที่ที่อยู่ IPv4 คือเจตนารมณ์ดั้งเดิมของ RFC 1918\n✅ ทำไม D ถูก: การไม่มีเส้นทางจากอินเทอร์เน็ตเข้ามาถึงโดยตรงช่วยลดพื้นที่ให้โจมตี (attack surface)\n\n❌ ทำไมข้ออื่นผิด:\nA. PCI DSS เน้นเรื่องการเข้ารหัส แบ่งเซกเมนต์ และควบคุมการเข้าถึงข้อมูลบัตร ไม่ได้กำหนดว่าต้องใช้ private IP\nC. ขนาดตาราง forwarding "ภายใน" องค์กรไม่ได้เล็กลงเพราะใช้ private address — สิ่งที่เล็กลงคือตารางบนอินเทอร์เน็ต ซึ่งไม่ใช่ "network routers" ของเรา\nE. ไม่มีกฎหมายท้องถิ่นใดบังคับให้ใช้ที่อยู่ส่วนตัว\n\n⚠️ หมายเหตุ: ข้อ D มักถูกถกเถียง เพราะ NAT ไม่ใช่กลไกความปลอดภัยที่แท้จริง (ไม่มีการเข้ารหัส ไม่มีการตรวจสอบ) แต่ในบริบทข้อสอบ CCNA ถือว่าการที่ภายนอกเข้าถึงเครื่องภายในไม่ได้โดยตรง = ลดความเสี่ยง จึงเป็นคำตอบที่ถูกต้อง\n\n📗 จำไว้สอบ: private IPv4 = ประหยัดที่อยู่ + ซ่อนเครื่องภายในจากอินเทอร์เน็ต',
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
      '📘 แนวคิด — เทคโนโลยี WAN แต่ละแบบเหมาะกับใคร\n• Broadband cable / DSL / FTTH → ราคาถูก ติดตั้งง่าย แบนด์วิดท์สูงพอสำหรับผู้ใช้ไม่กี่คน ⭐ เหมาะกับ SOHO\n• Frame Relay → เทคโนโลยียุค 1990 ปัจจุบันเลิกใช้แล้ว (ถูกแทนที่ด้วย MPLS)\n• Leased line (T1/E1, point-to-point) → แบนด์วิดท์รับประกัน มี SLA แต่ค่าใช้จ่ายสูงมาก เหมาะกับองค์กรใหญ่หรือเชื่อมสาขาสำคัญ\n• ISDN → ความเร็วต่ำมาก (BRI 128 kbps) ล้าสมัย เคยใช้เป็นลิงก์สำรอง\n\n✅ ทำไม A ถูก: SOHO ต้องการ "ถูกและพร้อมใช้" — broadband cable ให้แบนด์วิดท์สูงในราคาที่สำนักงานเล็กหรือบ้านรับไหว จึงเป็นตัวเลือกมาตรฐาน\n\n❌ ทำไมข้ออื่นผิด:\nB. Frame Relay เลิกให้บริการไปแล้วในเชิงพาณิชย์\nC. leased line แพงเกินความจำเป็นสำหรับผู้ใช้ไม่กี่คน\nD. ISDN ช้าเกินไปสำหรับการใช้งานยุคปัจจุบัน\n\n📗 จำไว้สอบ: SOHO = broadband (cable/DSL/fiber) • องค์กรใหญ่ = MPLS/leased line • Frame Relay & ISDN = ล้าสมัย',
  },
  {
    id: 59,
    kind: 'multi',
    prompt: 'Which two WAN architecture options help a business scalability and reliability for the network? (Choose two.)',
    options: [
      { key: 'A', text: 'asychronous routing' },
      { key: 'B', text: 'single-homed branches' },
      { key: 'C', text: 'dual-homed branches' },
      { key: 'D', text: 'static routing' },
      { key: 'E', text: 'dynamic routing' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — โจทย์ถามสองคุณสมบัติ: ขยายได้ (scalability) และเชื่อถือได้ (reliability)\n\n🔹 Dual-homed branch\n• สาขามีลิงก์ WAN สองเส้น (หรือสอง ISP)\n• เส้นหนึ่งล่ม อีกเส้นรับงานต่อทันที → reliability สูง ⭐\n• Single-homed = เส้นเดียว = single point of failure\n\n🔹 Dynamic routing (OSPF, EIGRP, BGP)\n• เราเตอร์เรียนรู้และแลกเปลี่ยนเส้นทางกันเอง\n• เพิ่มสาขาใหม่ = เสียบแล้วเครือข่ายรู้จักเอง ไม่ต้องไล่แก้ static route ทุกตัว → scalability ⭐\n• เส้นทางล่ม = คำนวณเส้นทางใหม่อัตโนมัติ → reliability\n\n✅ ทำไม C ถูก: ลิงก์สำรองคือหัวใจของความน่าเชื่อถือระดับ WAN\n✅ ทำไม E ถูก: dynamic routing รองรับการเติบโตและปรับตัวเมื่อเส้นทางเปลี่ยนได้เอง\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีคำว่า "asynchronous routing" ในศัพท์เครือข่าย — เป็นตัวเลือกลวง\nB. single-homed คือจุดล้มเหลวจุดเดียว ตรงข้ามกับความน่าเชื่อถือ\nD. static routing ต้องแก้ด้วยมือทุกครั้งที่เครือข่ายเปลี่ยน และไม่หลบเส้นทางเสียเองได้ → ขยายยาก\n\n📗 จำไว้สอบ: dual-homed = ทนทาน | dynamic routing = ขยายง่ายและปรับตัวเอง',
  },
  {
    id: 60,
    kind: 'single',
    prompt: 'What is the binary pattern of unique ipv6 unique local address?',
    options: [
      { key: 'A', text: '00000000' },
      { key: 'B', text: '11111100' },
      { key: 'C', text: '11111111' },
      { key: 'D', text: '11111101' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Unique Local Address (ULA) คือ FC00::/7\n• /7 หมายถึง 7 บิตแรกถูกล็อกไว้ = 1111110\n• บิตที่ 8 คือ L bit (Local) ซึ่งยังว่างให้เลือกได้ 0 หรือ 1\n  • L = 0 → 11111100 = FC → สงวนไว้ให้หน่วยงานกลางจัดสรร (ยังไม่มีการนิยามใช้งานจริง)\n  • L = 1 → 11111101 = FD → กำหนดเองในองค์กร ⭐ (นี่คือที่ใช้จริงทั้งหมดในปัจจุบัน)\n\n✅ ทำไม B ถูก: เมื่อถามถึง "รูปแบบไบนารีของ ULA" คำตอบมาตรฐานคืออ็อกเท็ตแรกของบล็อก FC00::/7 นั่นคือ 11111100 (= FC)\n\n💡 ในการใช้งานจริงคุณจะเห็นแต่ที่อยู่ที่ขึ้นต้นด้วย FD (11111101) เพราะ RFC 4193 กำหนดให้ตั้ง L=1 เมื่อสร้าง prefix เอง — ทั้ง FC และ FD ต่างอยู่ในบล็อก FC00::/7 เดียวกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. 00000000 = 00 → เป็นบล็อกที่รวม :: (unspecified) และ ::1 (loopback)\nC. 11111111 = FF → นี่คือ multicast\nD. 11111101 = FD ซึ่งเป็นครึ่งที่ใช้จริงของ ULA แต่ไม่ใช่ "รูปแบบของบล็อก /7" ที่โจทย์ถาม\n\n📗 จำไว้สอบ: ULA = FC00::/7 → 1111110x • FD = ใช้จริง (L=1), FC = สงวน (L=0) • FF = multicast',
  },
  {
    id: 61,
    kind: 'multi',
    prompt: 'Which two options are the best reasons to use an IPV4 private IP space? (Choose two.)',
    options: [
      { key: 'A', text: 'to enable intra-enterprise communication' },
      { key: 'B', text: 'to implement NAT' },
      { key: 'C', text: 'to connect applications' },
      { key: 'D', text: 'to conserve global address space' },
      { key: 'E', text: 'to manage routing overhead' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — แยกให้ออกระหว่าง "เหตุผลที่ใช้" กับ "ผลที่ตามมา"\n\n🔹 เหตุผลที่ใช้ private IP space\n1️⃣ ให้เครื่องภายในองค์กรคุยกันเองได้ครบทุกเครื่อง โดยไม่ต้องขอ public IP ทีละตัว ⭐\n2️⃣ ประหยัดพื้นที่ที่อยู่ IPv4 ทั่วโลก (global address space) ซึ่งใกล้หมดแล้ว ⭐\n\n🔹 ผลที่ตามมา (ไม่ใช่เหตุผล)\n• ต้องติดตั้ง NAT/PAT เพิ่ม → เป็น "ภาระ" ที่เกิดขึ้นเพราะเลือกใช้ private IP ไม่ใช่เป้าหมาย\n\n✅ ทำไม A ถูก: จุดประสงค์แรกของ RFC 1918 คือรองรับการสื่อสารภายในองค์กร (intra-enterprise)\n✅ ทำไม D ถูก: การอนุรักษ์ public IPv4 คือเหตุผลเชิงนโยบายที่ทำให้ RFC 1918 ถือกำเนิด\n\n❌ ทำไมข้ออื่นผิด:\nB. NAT เป็นสิ่งที่ "ต้องทำเพิ่ม" เมื่อใช้ private IP ไม่ใช่เหตุผลที่เลือกใช้ (ไม่มีใครใช้ private IP เพราะอยากได้ NAT)\nC. "เชื่อมต่อแอปพลิเคชัน" ทำได้ทั้งบน public และ private address ไม่ใช่คุณสมบัติเฉพาะ\nE. private IP ไม่ได้ช่วยลด routing overhead ภายในองค์กร — ตารางเราต์ภายในยังเท่าเดิม\n\n📗 จำไว้สอบ: เหตุผลใช้ private IP = สื่อสารภายใน + ประหยัด public IPv4 (NAT คือผลพวง ไม่ใช่เหตุผล)',
  },
  {
    id: 62,
    kind: 'single',
    image: v4q62,
    prompt: 'Refer to the exhibit. When PC1 sends a packet to PC2, the packet has which source and destination IP address when it arrives at interface Gi0/0 on router R2?',
    options: [
      { key: 'A', text: 'source 192.168.10.10 and destination 10.10.2.2' },
      { key: 'B', text: 'source 192.168.20.10 and destination 192.168.20.1' },
      { key: 'C', text: 'source 192.168.10.10 and destination 192.168.20.10' },
      { key: 'D', text: 'source 10.10.1.1 and destination 10.10.2.2' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎทองของการเดินทางแบบ end-to-end\n• IP address ต้นทาง/ปลายทาง = "คงเดิมตลอดเส้นทาง" ตั้งแต่ต้นจนถึงปลาย (ยกเว้นเจอ NAT)\n• MAC address ต้นทาง/ปลายทาง = "เปลี่ยนทุก hop" ที่ผ่านอุปกรณ์ชั้น 3\n\n🔍 อ่าน exhibit\n• PC1 = 192.168.10.10 (ปลายทางสุดท้ายที่เริ่มส่ง)\n• PC2 = 192.168.20.10 (ปลายทางสุดท้ายที่จะไปถึง)\n• เส้นทาง: PC1 → R1 → (10.10.1.0/30) → R2 Gi0/0 → R2 Gi0/1 → (10.10.2.0/30) → R3 → PC2\n\n✅ ทำไม C ถูก: ที่จุดใดก็ตามรวมถึงตอนแพ็กเก็ตมาถึง Gi0/0 ของ R2 เฮดเดอร์ IP ยังคงเป็น\n• source = 192.168.10.10 (PC1)\n• destination = 192.168.20.10 (PC2)\nที่อยู่ 10.10.1.x / 10.10.2.x เป็นเพียง "ที่อยู่ของถนน" ที่ใช้เลือกเส้นทางและใช้แมป MAC เท่านั้น ไม่เคยปรากฏในเฮดเดอร์ IP ของแพ็กเก็ตนี้\n\n❌ ทำไมข้ออื่นผิด:\nA. เอาที่อยู่ลิงก์ WAN (10.10.2.2) มาเป็นปลายทาง — ผิด ปลายทางต้องเป็น PC2 เสมอ\nB. สลับให้ PC2 เป็นต้นทาง และเอา 192.168.20.1 (ขา LAN ของ R3) เป็นปลายทาง — ผิดทั้งคู่\nD. ใช้ที่อยู่ของลิงก์ระหว่างเราเตอร์ทั้งสองฝั่ง ซึ่งไม่ใช่ที่อยู่ในเฮดเดอร์ IP ของแพ็กเก็ตผู้ใช้\n\n📗 จำไว้สอบ: IP ต้นทาง/ปลายทาง = ไม่เปลี่ยน (ถ้าไม่มี NAT) | MAC = เปลี่ยนทุก hop',
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
      '📘 แนวคิด — SFP (Small Form-factor Pluggable) คือโมดูลทรานซีฟเวอร์แบบถอดเปลี่ยนได้\n• เสียบ/ถอดได้ขณะอุปกรณ์ยังทำงานอยู่ = hot-swappable ⭐ ไม่ต้องปิดสวิตช์หรือรีบูต\n• มีทั้งรุ่นทองแดง (1000BASE-T SFP ใช้ RJ-45) และรุ่นไฟเบอร์ (SX, LX, ZX, SR, LR)\n• ตระกูลที่ควรรู้: SFP (1G) → SFP+ (10G) → SFP28 (25G) → QSFP+ (40G) → QSFP28 (100G)\n\n✅ ทำไม C ถูก: คุณสมบัติ hot-swappable เป็นสิ่งที่ SFP ทุกชนิดมีเหมือนกัน ไม่ว่าจะเป็นทองแดงหรือไฟเบอร์ — ทำให้เปลี่ยนสื่อกลางหรือซ่อมได้โดยกระทบบริการน้อยที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. optical attenuator ใช้ "ลด" ความแรงสัญญาณแสง (กันตัวรับอิ่มตัวเมื่อระยะสั้นเกินไป) ไม่ใช่เพิ่ม และใช้กับไฟเบอร์เท่านั้น\nB. SFP หนึ่งตัวรองรับโหมดเดียว — single-mode หรือ multi-mode ต้องเลือกซื้อให้ตรงกับสายที่ใช้\nD. SFP มาตรฐานเริ่มต้นที่ 1 Gbps full duplex ไม่ใช่ 100 Mbps half duplex\n\n📗 จำไว้สอบ: SFP = hot-swappable ทั้งทองแดงและไฟเบอร์ • SFP=1G, SFP+=10G, QSFP28=100G',
  },
  {
    id: 64,
    kind: 'multi',
    prompt: 'What are two functions of a server on a network? (Choose two.)',
    options: [
      { key: 'A', text: 'handles requests from multiple workstations at the same time' },
      { key: 'B', text: 'achieves redundancy by exclusively using virtual server clustering' },
      { key: 'C', text: 'housed solely in a data center that is dedicated to a single client achieves redundancy by exclusively using virtual server clustering' },
      { key: 'D', text: 'runs the same operating system in order to communicate with other servers' },
      { key: 'E', text: 'runs applications that send and retrieve data for workstations that make requests' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — บทบาทของเซิร์ฟเวอร์ในโมเดล client-server\n• เซิร์ฟเวอร์ = ผู้ให้บริการ รอรับคำขอแล้วตอบกลับ\n• ไคลเอนต์ = ผู้ร้องขอบริการ\n• เซิร์ฟเวอร์ตัวเดียวรองรับไคลเอนต์ได้พร้อมกันจำนวนมาก โดยใช้ multi-threading และแยกแต่ละการเชื่อมต่อด้วยหมายเลข port\n• ตัวอย่าง: web server, file server, DHCP, DNS, database, mail\n\n✅ ทำไม A ถูก: ความสามารถรองรับคำขอจากเวิร์กสเตชันหลายเครื่องพร้อมกันคือคุณสมบัติพื้นฐานที่สุดของเซิร์ฟเวอร์\n✅ ทำไม E ถูก: เซิร์ฟเวอร์รันแอปพลิเคชันที่รับ/ส่งข้อมูลกลับให้ไคลเอนต์ที่ร้องขอ\n\n❌ ทำไมข้ออื่นผิด:\nB. คำว่า "exclusively" ผิด — ความซ้ำซ้อนทำได้หลายวิธี เช่น RAID, load balancer, HSRP, สำรองข้อมูล ไม่ได้มีแค่ virtual clustering\nC. ผิดสองชั้น — เซิร์ฟเวอร์ไม่จำเป็นต้องอยู่ในดาต้าเซ็นเตอร์ที่อุทิศให้ลูกค้ารายเดียว (มี cloud, colocation, on-premise) และยังมีคำว่า exclusively ซ้ำอีก\nD. เซิร์ฟเวอร์ต่างระบบปฏิบัติการคุยกันได้สบายผ่านโปรโตคอลมาตรฐาน (HTTP, SMB, NFS) — นี่คือจุดประสงค์ของการมีมาตรฐานเปิด\n\n📗 จำไว้สอบ: เจอคำว่า "exclusively / solely / always / only" ในตัวเลือก ให้สงสัยไว้ก่อนว่าผิด',
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
      '📘 แนวคิด — collapsed core = ยุบชั้น core เข้ากับชั้น distribution เป็นอุปกรณ์ชุดเดียว\n→ อุปกรณ์นั้นจึงต้องรับงานของ "ทั้งสองชั้น" มาทำ\n\n🔹 งานที่ชั้น distribution เคยทำและตกมาอยู่ที่ collapsed core\n• Inter-VLAN routing\n• บังคับใช้นโยบายการเราต์ (route filtering, redistribution, summarization) ⭐\n• FHRP (HSRP/VRRP) เป็นเกตเวย์สำรอง\n• QoS และ ACL ระดับชั้นกลาง\n\n🔹 งานที่ชั้น core เคยทำ\n• ส่งต่อแพ็กเก็ตความเร็วสูงระหว่างส่วนต่าง ๆ ของเครือข่าย\n\n✅ ทำไม A ถูก: การบังคับใช้นโยบายการเราต์เป็นหน้าที่หลักที่ชั้น distribution ถืออยู่ และเมื่อยุบรวมกันแล้ว collapsed core ก็เป็นผู้รับผิดชอบ\n\n❌ ทำไมข้ออื่นผิด:\nB. การมาร์ก interesting traffic (จำแนกและติดป้าย QoS) นิยมทำที่ชั้น access ให้ใกล้ต้นทางที่สุด\nC. นโยบายความปลอดภัยหลัก ๆ อยู่ที่ไฟร์วอลล์/ขอบเครือข่าย ส่วนที่ access ก็มี port security และ 802.1X\nD. การ "ต่อผู้ใช้เข้าขอบเครือข่าย" คือหน้าที่ของ access layer ซึ่งยังคงแยกอยู่ ไม่ได้ถูกยุบ\n\n📗 จำไว้สอบ: two-tier = Access + Collapsed core (core+distribution) • access ไม่เคยถูกยุบ',
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
      '📘 แนวคิด — อุปกรณ์ชั้น 3 (เราเตอร์, สวิตช์ชั้น 3, ไฟร์วอลล์ที่เราต์ได้)\n• ตัดสินใจส่งต่อโดยดู "destination IP address" เทียบกับตารางเราต์\n• เชื่อมเครือข่าย/ซับเน็ตที่ต่างกันเข้าด้วยกัน\n• แบ่ง broadcast domain — broadcast ไม่ข้ามเราเตอร์\n• เขียน MAC ต้นทาง/ปลายทางใหม่ทุกครั้งที่ส่งต่อ แต่ IP คงเดิม\n\n✅ ทำไม D ถูก: หน้าที่หลักที่สุดของอุปกรณ์ชั้น 3 คือส่งต่อทราฟฟิกข้ามเครือข่ายที่ต่างกัน (routing)\n\n❌ ทำไมข้ออื่นผิด:\nA. การรับส่งไร้สายเป็นงานของ AP (ชั้น 1/2)\nB. การวิเคราะห์และดร็อปทราฟฟิกที่ไม่ได้รับอนุญาตคือหน้าที่เฉพาะของไฟร์วอลล์ ซึ่งเป็นบทบาทด้านความปลอดภัย ไม่ใช่ "หน้าที่หลักของอุปกรณ์ชั้น 3 โดยทั่วไป"\nC. การส่งต่อภายใน broadcast domain เดียวกันคืองานของสวิตช์ชั้น 2 — และเราเตอร์ต่างหากที่ "แบ่ง" broadcast domain\n\n📗 จำไว้สอบ: L1=hub/สาย | L2=switch (MAC, ภายใน VLAN) | L3=router (IP, ข้ามเครือข่าย, แบ่ง broadcast domain)',
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
      '📘 แนวคิด — core layer คือ "ทางด่วน" ของเครือข่าย\n• เป้าหมายเดียว: ส่งต่อแพ็กเก็ตให้เร็วที่สุดและไม่ขาดตอน\n• ออกแบบให้ซ้ำซ้อน (redundant devices + redundant links) เพื่อ high availability\n• ตั้งใจ "ไม่ทำ" งานหนัก ๆ อย่าง ACL, NAT, deep packet inspection เพราะจะเพิ่ม latency และทำให้ทางด่วนกลายเป็นคอขวด\n\n✅ ทำไม A ถูก: ความต่อเนื่องของบริการส่งต่อ (uninterrupted forwarding) คือเหตุผลที่ core ต้องซ้ำซ้อนและเร็ว\n✅ ทำไม C ถูก: core ทำหน้าที่ขนข้อมูลระหว่างบล็อก distribution ต่าง ๆ ให้ทันเวลาและมี latency ต่ำ\n\n❌ ทำไมข้ออื่นผิด:\nB. การตรวจจับทราฟฟิกอันตรายเป็นงานของไฟร์วอลล์/IPS ที่ขอบเครือข่าย ไม่ใช่ core\nD. ผู้ใช้เสียบที่ access layer เท่านั้น — core ไม่ควรมีอุปกรณ์ปลายทางต่อตรง\nE. การ police/shape ทราฟฟิกนิยมทำที่ distribution หรือ access ไม่ใช่ core\n\n📗 จำไว้สอบ: core = เร็ว + ซ้ำซ้อน + ไม่มีนโยบาย • นโยบายอยู่ที่ distribution, ผู้ใช้อยู่ที่ access',
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
      '📘 แนวคิด — ปัญหาการรบกวน 2 แบบใน Wi-Fi\n• Co-channel interference (CCI) → AP ที่อยู่ใกล้กันใช้ "ช่องเดียวกัน" ทั้งคู่ต้องผลัดกันส่ง (แชร์เวลาออกอากาศ) → ทรูพุตตกเพราะต้องรอคิว\n• Adjacent-channel interference (ACI) → AP ใช้ช่องที่ "ทับกันบางส่วน" เช่น 1 กับ 3 → สัญญาณกวนกันเป็นสัญญาณรบกวน (noise) ซึ่งแย่กว่าการรอคิวเสียอีก\n\n🔧 วิธีแก้: วางเซลล์แบบรังผึ้งด้วยช่อง 1, 6, 11 สลับกันไป ให้ AP ที่อยู่ติดกันไม่มีทางใช้ช่องเดียวกันหรือช่องที่ทับกัน\n\n✅ ทำไม A ถูก: ใช้ช่องที่ "ต่างกัน" และ "ไม่ทับกัน" (1/6/11) เป็นวิธีมาตรฐานที่แก้ได้ทั้ง CCI และ ACI ในคราวเดียว\n\n❌ ทำไมข้ออื่นผิด:\nB. ช่องเดียวและยังทับกันอีก = แย่ที่สุด\nC. "ช่องไม่ทับกันหนึ่งช่อง" หมายถึงทุก AP ใช้ช่องเดียวกันหมด = co-channel congestion เต็ม ๆ ซึ่งคือสิ่งที่โจทย์ต้องการหลีกเลี่ยง\nD. ช่องต่างกันแต่ยังทับกัน (เช่น 1, 3, 5) → เกิด adjacent-channel interference\n\n📗 จำไว้สอบ: 2.4 GHz ใช้ 1, 6, 11 เท่านั้น • ต่างช่อง + ไม่ทับกัน = ทางออกเดียว',
  },
  {
    id: 69,
    kind: 'single',
    prompt: 'A manager asks a network engineer to advise which cloud service models are used so employees do not have to waste their time installing, managing, and updating software that is only used occasionally. Which cloud service model does the engineer recommend?',
    options: [
      { key: 'A', text: 'infrastructure-as-a-service' },
      { key: 'B', text: 'platform-as-a-service' },
      { key: 'C', text: 'business process as service to support different types of service' },
      { key: 'D', text: 'software-as-a-service' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โมเดลบริการคลาวด์ 3 ระดับ (ยิ่งลงล่าง ผู้ใช้ยิ่งดูแลน้อยลง)\n\n🔹 IaaS (Infrastructure as a Service)\n• ผู้ให้บริการให้ฮาร์ดแวร์เสมือน: VM, storage, network\n• ผู้ใช้ต้องลง OS เอง แพตช์เอง ลงแอปเอง\n• ตัวอย่าง: AWS EC2, Azure VM\n\n🔹 PaaS (Platform as a Service)\n• ให้ OS + runtime + ฐานข้อมูลมาพร้อม ผู้ใช้แค่เอาโค้ดมาวาง\n• เหมาะกับนักพัฒนา ตัวอย่าง: Heroku, Azure App Service\n\n🔹 SaaS (Software as a Service) ⭐\n• ได้แอปพลิเคชันสำเร็จรูปพร้อมใช้ผ่านเบราว์เซอร์\n• ผู้ให้บริการดูแลทุกอย่าง ตั้งแต่ฮาร์ดแวร์ถึงการอัปเดตซอฟต์แวร์\n• ตัวอย่าง: Microsoft 365, Google Workspace, Salesforce, Webex\n\n✅ ทำไม D ถูก: โจทย์บอกชัดว่าพนักงาน "ไม่ต้องเสียเวลาติดตั้ง บริหาร และอัปเดตซอฟต์แวร์" ซึ่งตรงกับ SaaS พอดี — เปิดเบราว์เซอร์แล้วใช้ได้เลย เหมาะกับซอฟต์แวร์ที่ใช้นาน ๆ ครั้งเพราะจ่ายตามการใช้งาน\n\n❌ ทำไมข้ออื่นผิด:\nA. IaaS ยังต้องลงและอัปเดตซอฟต์แวร์เองทั้งหมด\nB. PaaS ลดภาระเรื่อง OS แต่ยังต้องพัฒนาและดูแลแอปเอง\nC. BPaaS ไม่ใช่หนึ่งในสามโมเดลหลักที่ CCNA สอน และไม่ตรงกับโจทย์\n\n📗 จำไว้สอบ: IaaS=ให้เครื่อง | PaaS=ให้แพลตฟอร์มพัฒนา | SaaS=ให้แอปพร้อมใช้ (ผู้ใช้ไม่ต้องดูแลอะไรเลย)',
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
      '📘 แนวคิด — สวิตช์ชั้น 2 ทำอะไรได้และทำอะไรไม่ได้\n\n✔ ทำได้\n• เรียนรู้ MAC ต้นทางลงตาราง CAM\n• ตัดสินใจส่งต่อจาก "destination MAC" ⭐\n• ส่งต่อเฟรมภายใน VLAN เดียวกัน\n• แบ่ง collision domain ให้ทุกพอร์ต (ต่างจากฮับ)\n• สร้าง VLAN, ทำ trunk 802.1Q, รัน STP\n\n✘ ทำไม่ได้\n• เราต์ระหว่าง VLAN (ต้องใช้เราเตอร์หรือสวิตช์ชั้น 3)\n• เลือกเส้นทางบน WAN (งานของเราเตอร์)\n• เป็นศูนย์กลาง authentication (งานของ WLC/RADIUS)\n\n✅ ทำไม C ถูก: สวิตช์ชั้น 2 ส่งเฟรมไปมาระหว่างพอร์ตที่อยู่ VLAN เดียวกัน\n✅ ทำไม E ถูก: การตัดสินใจส่งต่ออิงจาก MAC address คือนิยามของสวิตช์ชั้น 2\n\n❌ ทำไมข้ออื่นผิด:\nA. งานรวมศูนย์การเชื่อมต่อและยืนยันตัวตนไร้สายเป็นของ WLC\nB. การเลือกเส้นทางที่ดีที่สุดบน WAN เป็นงานของเราเตอร์ (ชั้น 3)\nD. การส่งข้าม VLAN ต้องใช้อุปกรณ์ชั้น 3 — สวิตช์ชั้น 2 ล้วนทำไม่ได้\n\n📗 จำไว้สอบ: L2 switch = MAC + ภายใน VLAN เท่านั้น • ข้าม VLAN ต้อง L3 เสมอ',
  },
  {
    id: 71,
    kind: 'drag',
    image: v4q71,
    prompt: 'Drag and drop the TCP/IP protocols from the left onto their primary transmission protocols on the right.',
    categories: [
      { name: 'TCP', items: ['HTTP', 'SMTP', 'Telnet'] },
      { name: 'UDP', items: ['DNS', 'RTP', 'SNMP'] },
    ],
    explanation:
      '📘 แนวคิด — เลือก TCP หรือ UDP ตามความต้องการของแอปพลิเคชัน\n\n🔹 ต้องการความถูกต้องครบถ้วน → TCP\n• HTTP (TCP 80) → หน้าเว็บขาดไปหนึ่งไบต์ก็เพี้ยน\n• SMTP (TCP 25) → อีเมลต้องครบทุกตัวอักษร\n• Telnet (TCP 23) → เซสชันโต้ตอบ ต้องเรียงลำดับถูกต้อง\n\n🔹 ต้องการความเร็ว/เบา → UDP\n• DNS (UDP 53) → คำถาม-คำตอบสั้น ๆ ถามใหม่ถูกกว่าตั้ง TCP connection\n  💡 DNS ใช้ TCP 53 เมื่อคำตอบยาวเกิน 512 ไบต์ หรือทำ zone transfer\n• RTP (UDP) → เสียง/วิดีโอเรียลไทม์ ยอมให้แพ็กเก็ตหายดีกว่ารอส่งซ้ำจนเสียงสะดุด ⭐\n• SNMP (UDP 161/162) → โพลค่าถี่ ๆ หายบ้างรอบหน้าได้ใหม่\n\n📗 จำไว้สอบ: DNS = UDP 53 เป็นหลัก (TCP 53 สำหรับคำตอบยาว/zone transfer) • RTP/VoIP = UDP เสมอ',
  },
  {
    id: 72,
    kind: 'single',
    prompt: 'An engineer observes high usage on the 2.4GHz channels and lower usage on the 5GHz channels. What must be configured to allow clients to preferentially use 5GHz access points?',
    options: [
      { key: 'A', text: 'Client Band Select' },
      { key: 'B', text: 'Re-Anchor Roamed Clients' },
      { key: 'C', text: 'OEAP Spilt Tunnel' },
      { key: 'D', text: '11ac MU-MIMO' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ปัญหาคลาสสิก: ไคลเอนต์ dual-band ส่วนใหญ่ชอบเกาะ 2.4 GHz เพราะสัญญาณไปได้ไกลกว่า แต่ 2.4 GHz มีแค่ 3 ช่อง จึงแออัดเร็ว\n\n🔧 Client Band Select แก้ปัญหานี้อย่างไร\n• AP จงใจ "หน่วง/ไม่ตอบ" probe request ที่ส่งมาบนวิทยุ 2.4 GHz ในช่วงแรก\n• ไคลเอนต์ที่รองรับสองย่านจะหันไปลองสแกน 5 GHz แล้วเชื่อมต่อที่นั่นแทน\n• ไคลเอนต์ที่รองรับแค่ 2.4 GHz จะยังเชื่อมต่อได้ตามปกติหลังพ้นช่วงหน่วง\n\n✅ ทำไม A ถูก: Client Band Select คือฟีเจอร์ WLC ที่ออกแบบมาเพื่อผลักไคลเอนต์ไปย่าน 5 GHz โดยเฉพาะ ตรงตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nB. Re-Anchor Roamed Clients → บังคับให้ไคลเอนต์ที่ย้ายมาสร้างทันเนลใหม่ที่ WLC ตัวใหม่ เกี่ยวกับ mobility ไม่ใช่การเลือกย่าน\nC. OEAP Split Tunnel → แยกทราฟฟิกภายในบ้านออกจากทราฟฟิกองค์กรสำหรับ AP ที่ทำงานจากบ้าน (Office Extend AP)\nD. 802.11ac MU-MIMO → เทคนิคส่งข้อมูลไปหลายไคลเอนต์พร้อมกัน เพิ่มทรูพุตแต่ไม่ได้ย้ายไคลเอนต์ไปคนละย่าน\n\n📗 จำไว้สอบ: อยากให้ไคลเอนต์ไป 5 GHz = Band Select (บางเอกสารเรียก band steering)',
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
      '📘 แนวคิด — 3 ระนาบการทำงานของอุปกรณ์เครือข่าย\n\n🔹 Data plane (forwarding plane)\n• งานเดียว: ส่งต่อทราฟฟิก "ของผู้ใช้" ให้เร็วที่สุด ⭐\n• ทำในฮาร์ดแวร์ (ASIC/TCAM) — ค้น FIB, ค้นตาราง MAC, ใส่/ถอด 802.1Q tag, ทำ NAT, บังคับ ACL\n\n🔹 Control plane\n• สร้าง "แผนที่" ที่ data plane เอาไปใช้\n• รันโปรโตคอลเราต์ (OSPF, EIGRP, BGP), STP, ARP, CDP/LLDP, HSRP\n• ทำงานบน CPU\n\n🔹 Management plane\n• ให้มนุษย์/ระบบเข้ามาบริหารอุปกรณ์: SSH, Telnet, SNMP, NETCONF, syslog\n\n✅ ทำไม D ถูก: การส่งต่อทราฟฟิกระหว่างไคลเอนต์กับเซิร์ฟเวอร์คือทราฟฟิกของผู้ใช้ (transit traffic) ซึ่งเป็นงานของ data plane โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. SSH ที่วิ่งเข้ามาหาตัวอุปกรณ์เอง = management plane\nB. OSPF Hello ใช้สร้างและรักษาความสัมพันธ์เพื่อนบ้าน = control plane\nC. การเลือกตั้ง root bridge ของ STP = control plane\n\n📗 จำไว้สอบ: ทราฟฟิก "ผ่าน" อุปกรณ์ = data plane | ทราฟฟิกที่ "สร้าง/ส่งถึง" ตัวอุปกรณ์เอง = control หรือ management plane',
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
      '📘 แนวคิด — เลือกโปรโตคอลชั้น 4 จากลักษณะของแอปพลิเคชัน\n\n🔹 เลือก TCP เมื่อ "ความถูกต้องสำคัญกว่าความเร็ว"\n• โอนไฟล์ (FTP/SFTP), เว็บ (HTTP/HTTPS), อีเมล (SMTP/IMAP), ฐานข้อมูล, SSH\n• ข้อมูลขาดหายแม้ไบต์เดียวไม่ได้ ยอมช้าลงเพื่อส่งซ้ำ\n\n🔹 เลือก UDP เมื่อ "ความเร็วสำคัญกว่าความครบถ้วน"\n• VoIP, วิดีโอสตรีมมิงสด, เกมออนไลน์, DNS, DHCP, TFTP, SNMP\n• เสียงที่หายไป 1 แพ็กเก็ตหูแทบไม่ได้ยิน แต่ถ้ามัวรอส่งซ้ำ เสียงจะกระตุกฟังไม่รู้เรื่อง ⭐\n\n✅ ทำไม C ถูก: สรุปหลักการเลือกได้ถูกต้องทั้งสองฝั่ง — ต้องการความน่าเชื่อถือใช้ TCP, ยอมให้แพ็กเก็ตหายได้ใช้ UDP\n\n❌ ทำไมข้ออื่นผิด:\nA. ประโยคเรื่อง latency ถูกอยู่ แต่โจทย์ถามว่า "เมื่อใดจึงเลือก TCP" ซึ่งคำตอบคือเรื่องความน่าเชื่อถือ ไม่ใช่ความทนต่อ latency — และการบอกว่า TCP ใช้เมื่อ "ทน latency ได้" เป็นการอธิบายผลข้างเคียง ไม่ใช่เงื่อนไขการเลือก\nB. กลับด้าน — TCP ต่างหากที่ใช้เมื่อ "ยอมให้ข้อมูลหายไม่ได้"\nD. กลับด้านทั้งคู่ — ข้อมูลที่ไวต่อเวลา (time-sensitive) ต้องใช้ UDP ไม่ใช่ TCP\n\n📗 จำไว้สอบ: ถูกต้องครบถ้วน → TCP | เรียลไทม์/ทนการสูญหายได้ → UDP',
  },
  {
    id: 75,
    kind: 'single',
    image: v4q75,
    prompt: 'Refer to the exhibit. Shortly after SiteA was connected to SiteB over a new single-mode fiber path, users at SiteA report intermittent connectivity issues with applications hosted at SiteB. What is the cause of the intermittent connectivity issue?',
    options: [
      { key: 'A', text: 'Interface errors are incrementing.' },
      { key: 'B', text: 'High usage is causing high latency.' },
      { key: 'C', text: 'An incorrect SFP media type was used at SiteA.' },
      { key: 'D', text: 'The sites were connected with the wrong cable type.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ค่า reliability ใน show interface\n• เขียนเป็นเศษส่วนฐาน 255 คำนวณจากค่าเฉลี่ยถ่วงน้ำหนัก 5 นาที\n• 255/255 = 100% ไม่มี error เลย = ปกติ\n• ต่ำกว่า 255/255 = มี error สะสมอยู่ ยิ่งต่ำยิ่งแย่ ⭐\n\n🔍 อ่าน exhibit เปรียบเทียบสองฝั่ง\n• SiteA: reliability 166/255 ⛔ ≈ 65% เท่านั้น → มี error จำนวนมาก\n• SiteB: reliability 255/255 ✔ ปกติดี\n• ทั้งสองฝั่ง: media type is SFP-LR เหมือนกัน ✔ (LR = Long Reach เหมาะกับ single-mode fiber ตรงตามโจทย์)\n• ทั้งสองฝั่ง: Full Duplex, 10000Mbps เท่ากัน ✔ ไม่มี mismatch\n• อัตราส่ง input/output ของทั้งคู่สอดคล้องกัน (264 Mbps / 122 Mbps บนลิงก์ 10 Gbps) → ใช้แบนด์วิดท์แค่ ~2.6% ไม่ได้หนาแน่นเลย\n\n✅ ทำไม A ถูก: reliability 166/255 ที่ฝั่ง SiteA เป็นหลักฐานตรง ๆ ว่ามี interface error เพิ่มขึ้นเรื่อย ๆ (สายไฟเบอร์สกปรก งอ หรือหัวต่อไม่แน่น) ทำให้เฟรมเสียหายและต้องส่งซ้ำ ผู้ใช้จึงรู้สึกว่าติด ๆ ดับ ๆ\n\n❌ ทำไมข้ออื่นผิด:\nB. ใช้แบนด์วิดท์เพียง ~2.6% ของลิงก์ 10 Gbps ไม่มีทางเกิดคอขวด\nC. ทั้งสองฝั่งเป็น SFP-LR เหมือนกันซึ่งถูกต้องสำหรับ single-mode fiber แล้ว\nD. โจทย์ระบุว่าเป็น single-mode fiber และ SFP ก็เป็น LR ที่คู่กัน — ชนิดสายถูกต้อง\n\n📗 จำไว้สอบ: reliability < 255/255 = มี error • SR=multimode ระยะสั้น | LR/ZX=single-mode ระยะไกล',
  },
  {
    id: 76,
    kind: 'single',
    prompt: 'A network engineer must configure the router R1 GigabitEthernet1/1 interface to connect to the router R2 GigabitEthernet1/1 interface. For the configuration to be applied, the engineer must compress the address 2001:0db8:0000:0000:0500:000a:400F:583B. Which command must be issued on the interface?',
    options: [
      { key: 'A', text: 'ipv6 address 2001::db8:0000::500:a:400F:583B' },
      { key: 'B', text: 'ipv6 address 2001:db8:0::500:a:4F:583B' },
      { key: 'C', text: 'ipv6 address 2001:db8::500:a:400F:583B' },
      { key: 'D', text: 'ipv6 address 2001:0db8::5:a:4F:583B' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กฎย่อที่อยู่ IPv6 มี 2 ข้อ\n1️⃣ ตัดเลข 0 นำหน้าในแต่ละกลุ่มออกได้ (0db8 → db8, 000a → a, 0000 → 0)\n   ⚠️ ห้ามตัดเลข 0 ที่อยู่ "ท้าย" หรือ "กลาง" กลุ่ม (400F ตัดเป็น 4F ไม่ได้เด็ดขาด)\n2️⃣ แทนกลุ่มที่เป็นศูนย์ล้วนติดกันด้วย :: ได้ "ครั้งเดียว" ต่อที่อยู่\n\n🔧 ย่อทีละขั้น: 2001:0db8:0000:0000:0500:000a:400F:583B\n• ขั้นที่ 1 ตัดศูนย์นำหน้า → 2001:db8:0:0:500:a:400F:583B\n• ขั้นที่ 2 กลุ่มที่ 3 และ 4 เป็นศูนย์ติดกัน ยุบด้วย :: → 2001:db8::500:a:400F:583B ✔\n\n✅ ทำไม C ถูก: ทำครบทั้งสองกฎอย่างถูกต้อง และใช้ :: เพียงครั้งเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ :: สองครั้งในที่อยู่เดียว — ผิดกฎเด็ดขาด เพราะจะกำกวมว่าแต่ละจุดแทนกี่กลุ่ม\nB. ไม่ได้ยุบกลุ่มศูนย์ (ยังเหลือ :0:) และย่อ 400F เป็น 4F ซึ่งผิด — 0 ตัวนั้นอยู่กลางกลุ่ม ตัดไม่ได้\nD. ย่อ 0500 เป็น 5 ผิด (ต้องเป็น 500 เพราะ 0 ที่ตัดได้คือตัวนำหน้าเท่านั้น) และย่อ 400F เป็น 4F ก็ผิดอีก\n\n📗 จำไว้สอบ: ตัดได้เฉพาะ 0 "นำหน้า" ของแต่ละกลุ่ม • :: ใช้ได้ครั้งเดียวต่อที่อยู่',
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
      '📘 แนวคิด — คำว่า "checks the state of a packet" ชี้ตรงไปที่ stateful inspection firewall\n\n🔹 ไฟร์วอลล์แบบ stateful ทำงานอย่างไร\n• เก็บตาราง state (connection table) จำทุกเซสชันที่ "เริ่มจากภายใน" ออกไป\n• เมื่อแพ็กเก็ตตอบกลับเข้ามา จะตรวจว่าตรงกับเซสชันที่มีอยู่ในตารางหรือไม่\n• ตรง → อนุญาตผ่าน | ไม่ตรง → ถือว่าไม่ถูกต้อง ทิ้งทันที\n• ต่างจาก stateless (ACL ธรรมดา) ที่ดูแต่ละแพ็กเก็ตแยกกันโดยไม่จำบริบท\n\n✅ ทำไม D ถูก: ไฟร์วอลล์เป็นอุปกรณ์เดียวในตัวเลือกที่ตรวจสอบ "สถานะ" ของแพ็กเก็ตเพื่อตัดสินว่าถูกต้องตามกฎหมายหรือไม่\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ชั้น 2 ดูแค่ MAC address ไม่มีความคิดเรื่องเซสชันหรือสถานะ\nB. WLC บริหาร AP และไคลเอนต์ไร้สาย ไม่ได้ทำหน้าที่ตรวจสอบความถูกต้องของแพ็กเก็ต\nC. load balancer กระจายภาระไปยังเซิร์ฟเวอร์หลายตัว (แม้จะติดตามเซสชันเพื่อ persistence แต่จุดประสงค์คือกระจายโหลด ไม่ใช่ความปลอดภัย)\n\n📗 จำไว้สอบ: stateful firewall = จำเซสชัน อนุญาตเฉพาะขากลับที่คู่กัน | stateless ACL = ดูทีละแพ็กเก็ต',
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
      '📘 แนวคิด — Access Point (AP) คือสะพานระหว่างโลกไร้สายกับโลกใช้สาย\n• ด้านหนึ่งเป็นวิทยุ 802.11 คุยกับไคลเอนต์ไร้สาย\n• อีกด้านเป็นพอร์ตอีเทอร์เน็ตต่อเข้าสวิตช์ (มักรับไฟผ่าน PoE ไปด้วย)\n• AP แปลงเฟรม 802.11 ↔ 802.3 ทำงานที่ชั้น 1 และชั้น 2\n• Autonomous AP = ตั้งค่าเอง ทำงานอิสระ | Lightweight AP = ถูกคุมโดย WLC ผ่าน CAPWAP\n\n✅ ทำไม C ถูก: บทบาทพื้นฐานที่สุดของ AP คือทำให้อุปกรณ์ไร้สายเข้าถึงเครือข่ายแบบใช้สายได้\n\n❌ ทำไมข้ออื่นผิด:\nA. การป้องกัน DDoS เป็นงานของไฟร์วอลล์/IPS/บริการ scrubbing ส่วน SNMP มีไว้มอนิเตอร์เท่านั้น\nB. ด่านแรกของการป้องกันคือไฟร์วอลล์ที่ขอบเครือข่าย ไม่ใช่ AP\nD. การล็อกอินเข้าอุปกรณ์อย่างปลอดภัยเป็นหน้าที่ของ AAA/RADIUS/TACACS+ (AP เพียงส่งต่อคำขอ 802.1X ไปให้เท่านั้น)\n\n📗 จำไว้สอบ: AP = แปลง 802.11 ↔ 802.3 เชื่อมไร้สายเข้าเครือข่ายใช้สาย',
  },
  {
    id: 79,
    kind: 'single',
    prompt: 'An implementer is preparing hardware for virtualization to create virtual machines on a host. What is needed to provide communication between hardware and virtual machines?',
    options: [
      { key: 'A', text: 'router' },
      { key: 'B', text: 'hypervisor' },
      { key: 'C', text: 'switch' },
      { key: 'D', text: 'straight cable' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — hypervisor คือชั้นซอฟต์แวร์ที่คั่นระหว่างฮาร์ดแวร์จริงกับ VM\n\n🔹 หน้าที่ของ hypervisor\n• จัดสรรและจำลอง CPU, RAM, storage, NIC ให้แต่ละ VM\n• กำหนดตารางเวลาให้ VM แต่ละตัวได้ใช้ CPU จริงตามโควตา\n• แยกแต่ละ VM ออกจากกัน (isolation) — VM ตัวหนึ่งล่มไม่ลามไปตัวอื่น\n• สร้าง virtual switch (vSwitch) ให้ VM คุยกันเองและออกสู่เครือข่ายภายนอกผ่าน NIC จริง\n\n✅ ทำไม B ถูก: ถ้าไม่มี hypervisor ก็ไม่มีตัวกลางที่จะให้ VM เข้าถึงฮาร์ดแวร์จริงได้เลย — VM จะสร้างไม่ได้ตั้งแต่แรก\n\n❌ ทำไมข้ออื่นผิด:\nA. router เชื่อมเครือข่ายที่ต่างกันในระดับ IP ไม่ได้ทำหน้าที่แบ่งทรัพยากรฮาร์ดแวร์ให้ VM\nC. สวิตช์กายภาพเชื่อมโฮสต์เข้าเครือข่าย แต่การสื่อสารระหว่าง VM กับฮาร์ดแวร์ของโฮสต์เกิดขึ้นภายในเครื่องผ่าน hypervisor\nD. สายแลนเป็นแค่สื่อกลางทางกายภาพ ไม่เกี่ยวกับการจำลองทรัพยากร\n\n📗 จำไว้สอบ: hypervisor = ตัวกลางระหว่างฮาร์ดแวร์กับ VM • Type 1 บนฮาร์ดแวร์ตรง | Type 2 บน OS อีกที',
  },
  {
    id: 80,
    kind: 'single',
    prompt: 'How does a Cisco Unified Wireless Network respond to Wi-Fi channel overlap?',
    options: [
      { key: 'A', text: 'It allows the administrator to assign the channels on a per-device or per-interface basis.' },
      { key: 'B', text: 'It segregates devices from different manufactures onto different channels.' },
      { key: 'C', text: 'It analyzes client load and background noise and dynamically assigns a channel.' },
      { key: 'D', text: 'It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — RRM (Radio Resource Management) คือสมองอัตโนมัติของ Cisco Unified Wireless Network\n\n🔹 องค์ประกอบของ RRM\n• DCA (Dynamic Channel Assignment) → วิเคราะห์สัญญาณรบกวน สัญญาณรบกวนจาก AP ข้างเคียง และภาระของไคลเอนต์ แล้วเลือกช่องที่ดีที่สุดให้ AP แต่ละตัวอัตโนมัติ ⭐\n• TPC (Transmit Power Control) → ปรับกำลังส่งให้เซลล์ซ้อนกันพอดี ไม่มากไม่น้อย\n• Coverage Hole Detection → ตรวจจับจุดอับสัญญาณแล้วเพิ่มกำลังส่งชดเชย\n\n✅ ทำไม C ถูก: WLC ใช้ RRM/DCA วิเคราะห์ภาระของไคลเอนต์และ noise พื้นหลัง แล้วจ่ายช่องสัญญาณให้ใหม่แบบไดนามิก ทำให้ AP ที่อยู่ใกล้กันไม่ใช้ช่องทับกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. การตั้งช่องทีละตัวด้วยมือทำได้ก็จริง (static channel) แต่นั่นคือการ "ปิด" RRM ไม่ใช่วิธีที่ระบบตอบสนองต่อการทับซ้อนโดยอัตโนมัติ\nB. RRM ไม่สนใจว่าใครเป็นผู้ผลิตอุปกรณ์ไคลเอนต์เลย\nD. AP ที่รองรับสองย่านจะเปิดวิทยุทั้ง 2.4 GHz และ 5 GHz พร้อมกัน ไม่ได้สลับไปมา\n\n📗 จำไว้สอบ: RRM = DCA (เลือกช่อง) + TPC (ปรับกำลัง) + Coverage Hole Detection',
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
      '📘 แนวคิด — เงื่อนไขที่เหมาะกับที่อยู่ส่วนตัว (RFC 1918)\n1️⃣ public IPv4 มีจำกัด/แพง → อยากประหยัด\n2️⃣ ทราฟฟิกของซับเน็ตนั้นอยู่ภายในองค์กร ไม่ต้องให้อินเทอร์เน็ตเข้าถึงโดยตรง\nเมื่อครบสองข้อนี้ ที่อยู่ส่วนตัวคือคำตอบที่เหมาะที่สุด\n\n✅ ทำไม C ถูก: ระบุครบทั้งสองเงื่อนไข — พื้นที่ที่อยู่ไม่พอ และทราฟฟิกอยู่ภายในองค์กร จึงไม่จำเป็นต้องเปลือง public IP\n\n❌ ทำไมข้ออื่นผิด:\nA. การจำกัดจำนวน broadcast ทำได้ด้วยการแบ่ง VLAN/ซับเน็ตให้เล็กลง ไม่เกี่ยวว่าที่อยู่นั้นเป็น private หรือ public\nB. ถ้าต้องโฆษณาซับเน็ตออกอินเทอร์เน็ตเพื่อให้บริการเว็บ ก็ต้องใช้ public address — เราเตอร์บนอินเทอร์เน็ตจะทิ้งเส้นทางที่เป็น RFC 1918 ทันที\nD. กรณีนี้ยังใช้ private address ได้ (VPN แบบ site-to-site หุ้มทราฟฟิกไว้ในทันเนล) แต่มีความเสี่ยงสูงที่ซับเน็ตจะทับกับขององค์กรปลายทาง จึงไม่ใช่สถานการณ์ที่ "เหมาะสมที่สุด" เท่ากับ C\n\n📗 จำไว้สอบ: private IP เหมาะเมื่อ "ทราฟฟิกอยู่ภายใน + อยากประหยัด public IP" • ให้บริการสาธารณะต้องใช้ public IP',
  },
  {
    id: 82,
    kind: 'drag',
    image: v4q82,
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
      '📘 แนวคิด — เปรียบเทียบสองสถาปัตยกรรมแคมปัส\n\n🔹 Collapsed Core (Two-Tier)\n• ยุบชั้น core + distribution ไว้ในอุปกรณ์ชุดเดียว ⭐\n• ซื้ออุปกรณ์น้อยลง → ประหยัดค่าใช้จ่ายและค่าดูแล\n• เหมาะกับเครือข่ายขนาดเล็กถึงกลาง หรือไซต์สาขา\n• ข้อจำกัด: ขยายยากเมื่อโตขึ้น และอุปกรณ์ตัวเดียวรับภาระสองชั้น\n\n🔹 Three-Tier\n• แยก core, distribution และ access เป็นอุปกรณ์คนละชุด ⭐\n• core ซ้ำซ้อนสูงและไม่ทำงานหนักด้านนโยบาย → ความพร้อมใช้งานสูงกว่า\n• เหมาะกับองค์กรใหญ่ หลายอาคาร หลายพันผู้ใช้\n• ข้อแลกเปลี่ยน: ราคาแพงกว่าและซับซ้อนกว่า\n\n🔍 จับคู่:\n• single device handles the core and the distribution layer → Collapsed Core\n• more cost-effective than other options → Collapsed Core\n• most appropriate for small network designs → Collapsed Core\n• enhances network availability → Three-Tier\n• separate devices handle the core and the distribution layer → Three-Tier\n\n📗 จำไว้สอบ: collapsed core = ถูก เล็ก อุปกรณ์เดียวคุมสองชั้น | three-tier = แพง ใหญ่ ทนทานกว่า',
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
      '📘 แนวคิด — ลำดับการเข้าร่วม WLAN ของไคลเอนต์ ทุกขั้นตอนใช้ management frame ทั้งสิ้น\n1️⃣ Discovery → ไคลเอนต์ส่ง Probe Request / AP ตอบ Probe Response (หรือฟัง Beacon ที่ AP ส่งทุก ~100 ms)\n2️⃣ Authentication → Authentication Request / Response (ขั้น open system)\n3️⃣ Association → Association Request / Response (AP มอบ AID ให้)\n→ จากนั้นจึงเริ่มส่ง data frame ได้\n\n🔹 ชนิดเฟรม 802.11\n• Management (Type 00) → Beacon, Probe Req/Resp ⭐, Auth, Assoc, Deauth, Disassoc, Action\n• Control (Type 01) → RTS, CTS, ACK, PS-Poll, Block ACK\n• Data (Type 10) → บรรทุกข้อมูลผู้ใช้จริง\n\n✅ ทำไม B ถูก: Probe Response เป็น subtype หนึ่งของ management frame ใช้ตอบว่า AP ตัวนี้รองรับ SSID ที่ถามมา พร้อมแจ้งความสามารถ (อัตราส่ง ความปลอดภัย ช่องสัญญาณ)\n\n❌ ทำไมข้ออื่นผิด:\nA. data frame ใช้ส่งข้อมูลผู้ใช้หลังเข้าร่วมเครือข่ายสำเร็จแล้ว\nC. control frame ช่วยจัดคิวการส่งเท่านั้น ไม่มี Probe Response\nD. action เป็น subtype ย่อยของ management (802.11k/v/r) คนละ subtype กับ Probe Response\n\n📗 จำไว้สอบ: Beacon, Probe, Auth, Assoc = management frame ทั้งหมด',
  },
  {
    id: 84,
    kind: 'single',
    prompt: 'What is the difference in data transmission delivery and reliability between TCP and UDP?',
    options: [
      { key: 'A', text: 'TCP transmits data at a higher rate and ensures packet delivery. UDP retransmits lost data to ensure applications receive the data on the remote end.' },
      { key: 'B', text: 'TCP requires the connection to be established before transmitting data. UDP transmits data at a higher rate without ensuring packet delivery.' },
      { key: 'C', text: 'UDP sets up a connection between both devices before transmitting data. TCP uses the three-way handshake to transmit data with a reliable connection.' },
      { key: 'D', text: 'UDP is used for multicast and broadcast communication. TCP is used for unicast communication and transmits data at a higher rate with error checking.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สรุปความต่างสองแกน\n• TCP → ต้องทำ 3-way handshake ก่อนส่งข้อมูล และรับประกันว่าข้อมูลถึงปลายทางครบ แต่แลกมาด้วยความช้าจากการรอ ACK\n• UDP → ยิงได้เลยไม่ต้องสร้างการเชื่อมต่อ ส่งได้เร็วกว่า แต่ไม่รับประกันว่าจะถึง\n\n✅ ทำไม B ถูก: ระบุถูกทั้งสองฝั่ง — TCP ต้องสร้างการเชื่อมต่อก่อน ส่วน UDP ส่งด้วยอัตราที่สูงกว่าโดยไม่รับประกันการส่งถึง\n\n❌ ทำไมข้ออื่นผิด:\nA. ผิดสองจุด — TCP ไม่ได้ส่ง "เร็วกว่า" (overhead มากกว่า) และ UDP ไม่มีการส่งซ้ำเด็ดขาด\nC. สลับหน้าที่กันหมด — UDP ไม่มีการสร้างการเชื่อมต่อ ส่วน three-way handshake เป็นของ TCP\nD. UDP ใช้กับ unicast ได้ปกติ (DNS, DHCP) และ TCP ไม่ได้ส่งเร็วกว่า UDP — คำอธิบายกลับด้าน\n\n💡 เกร็ด: TCP ใช้กับ multicast/broadcast ไม่ได้เพราะต้องจับมือทีละคู่ ส่วน UDP ทำได้ — แต่นั่นไม่ได้แปลว่า UDP ใช้เฉพาะ multicast/broadcast\n\n📗 จำไว้สอบ: TCP = handshake + รับประกัน (ช้ากว่า) | UDP = ไม่ต้อง handshake + ไม่รับประกัน (เร็วกว่า)',
  },
  {
    id: 85,
    kind: 'single',
    image: v4q85,
    prompt: 'Refer to the exhibit. When PC-A sends traffic to PC-B, which network component is in charge of receiving the packet from PC-A, verifying the IP addresses, and forwarding the packet to PC-B?',
    options: [
      { key: 'A', text: 'router' },
      { key: 'B', text: 'Layer 2 switch' },
      { key: 'C', text: 'load balancer' },
      { key: 'D', text: 'firewall' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — คำว่า "verifying the IP addresses and forwarding" คือนิยามของการเราต์ ซึ่งเป็นงานชั้น 3\n\n🔍 อ่าน exhibit\n• PC-A → 10.10.10.0 mask 255.255.255.0 → อยู่เครือข่าย 10.10.10.0/24\n• PC-B → 10.10.100.0 mask 255.255.255.0 → อยู่เครือข่าย 10.10.100.0/24\n• คนละเครือข่ายกัน → ต้องมีอุปกรณ์ชั้น 3 คั่นกลาง\n• ในภาพมีเราเตอร์อยู่ตรงกลาง โดยแต่ละฝั่งมีสวิตช์ชั้น 2 ต่ออยู่\n\n✅ ทำไม A ถูก: เราเตอร์เป็นตัวรับแพ็กเก็ตจาก PC-A ตรวจ destination IP เทียบกับตารางเราต์ แล้วส่งต่อออกอินเทอร์เฟซที่ถูกต้องไปยังฝั่ง PC-B (พร้อมเขียน MAC ใหม่)\n\n❌ ทำไมข้ออื่นผิด:\nB. สวิตช์ชั้น 2 ดูแค่ MAC address ไม่ได้ตรวจสอบ IP และส่งข้ามเครือข่ายไม่ได้ — ทำหน้าที่แค่นำเฟรมจาก PC ไปถึงเราเตอร์\nC. load balancer กระจายภาระไปยังเซิร์ฟเวอร์หลายตัว ไม่มีในภาพและไม่ใช่หน้าที่นี้\nD. firewall กรองทราฟฟิกตามนโยบายความปลอดภัย ไม่มีในภาพ\n\n📗 จำไว้สอบ: คนละซับเน็ต = ต้องผ่านอุปกรณ์ชั้น 3 (เราเตอร์/สวิตช์ L3) เสมอ',
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
      '📘 แนวคิด — มาตรฐานลิงก์ดิจิทัลของผู้ให้บริการที่ต้องจำ\n\n🔹 มาตรฐานอเมริกาเหนือ / ญี่ปุ่น (T-carrier)\n• T1 = 1.544 Mbps ⭐ = 24 ช่อง DS0 × 64 kbps + 8 kbps framing\n• T3 = 44.736 Mbps = 28 × T1\n\n🔹 มาตรฐานยุโรป (E-carrier)\n• E1 = 2.048 Mbps = 32 ช่อง × 64 kbps\n• E3 = 34.368 Mbps\n\n✅ ทำไม A ถูก: T1 มีความเร็ว 1.544 Mbps ตามนิยามมาตรฐาน\n\n🔧 ที่มาของตัวเลข: 24 ช่องเสียง × 64,000 bps = 1,536,000 bps บวก framing bit 8,000 bps = 1,544,000 bps = 1.544 Mbps\n\n❌ ทำไมข้ออื่นผิด:\nB. 2.048 Mbps คือ E1 (มาตรฐานยุโรป)\nC. 34.368 Mbps คือ E3\nD. 43.7 Mbps เป็นตัวเลขที่ใกล้ T3 (44.736) แต่ไม่ถูกต้อง — เป็นตัวลวง\n\n📗 จำไว้สอบ: T1=1.544 | E1=2.048 | T3=44.736 | E3=34.368 | DS0=64 kbps',
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
      '📘 แนวคิด — ตารางสาย UTP ที่ต้องจำ\n\nCat 5e → 1 Gbps ที่ 100 เมตร | ความถี่ 100 MHz\nCat 6  → 1 Gbps ที่ 100 เมตร, 10 Gbps ได้แค่ 55 เมตร | ความถี่ 250 MHz\nCat 6a → 10 Gbps ที่ 100 เมตร | ความถี่ 500 MHz ⭐\nCat 7  → 10 Gbps ที่ 100 เมตร | ความถี่ 600 MHz\n\n💡 กฎ 100 เมตรของอีเทอร์เน็ตบนทองแดงใช้กับสายทุกประเภทตั้งแต่ Cat 5e ขึ้นไป (90 ม. horizontal + 10 ม. patch cord)\n\n✅ ทำไม B ถูก: ทั้งสองรองรับอย่างน้อย 1 Gbps — Cat 5e ได้ 1 Gbps, Cat 6a ได้ถึง 10 Gbps ซึ่ง "อย่างน้อย 1 Gbps" จึงจริงทั้งคู่\n✅ ทำไม D ถูก: ทั้งสองใช้ระยะสูงสุด 100 เมตรตามมาตรฐาน\n\n❌ ทำไมข้ออื่นผิด:\nA. Cat 5e ทำได้แค่ 1 Gbps ไม่ถึง 10 Gbps\nC. ระยะ 55 เมตรเป็นข้อจำกัดเฉพาะของ Cat 6 เมื่อวิ่ง 10 Gbps ไม่ใช่คุณสมบัติร่วม\nE. 500 MHz เป็นความถี่ของ Cat 6a เท่านั้น — Cat 5e อยู่ที่ 100 MHz\n\n📗 จำไว้สอบ: Cat5e=1G/100MHz | Cat6=1G ที่ 100 ม. หรือ 10G ที่ 55 ม./250MHz | Cat6a=10G ที่ 100 ม./500MHz',
  },
  {
    id: 88,
    kind: 'single',
    prompt: 'What is a characteristic of cloud-based network topology?',
    options: [
      { key: 'A', text: 'onsite network services are provided with physical Layer 2 and Layer 3 components' },
      { key: 'B', text: 'wireless connections provide the sole access method to services' },
      { key: 'C', text: 'physical workstations are configured to share resources' },
      { key: 'D', text: 'services are provided by a public, private, or hybrid deployment' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โมเดลการติดตั้งคลาวด์ (deployment model) 4 แบบ\n• Public cloud → ผู้ให้บริการภายนอกเปิดให้ใครก็ใช้ผ่านอินเทอร์เน็ต (AWS, Azure, GCP)\n• Private cloud → สร้างและใช้เองภายในองค์กรเดียว ควบคุมได้เต็มที่\n• Hybrid cloud → ผสมทั้งสอง เช่น เก็บข้อมูลอ่อนไหวไว้ private แล้วใช้ public รองรับโหลดช่วงพีก\n• Community cloud → กลุ่มองค์กรที่มีความต้องการคล้ายกันใช้ร่วมกัน\n\n🔹 คุณลักษณะของคลาวด์ตาม NIST: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service\n\n✅ ทำไม D ถูก: หัวใจของโทโพโลยีแบบคลาวด์คือบริการถูกส่งมอบผ่านโมเดลการติดตั้งแบบ public, private หรือ hybrid\n\n❌ ทำไมข้ออื่นผิด:\nA. การมีอุปกรณ์ชั้น 2/3 กายภาพในสถานที่คือลักษณะของ on-premise ซึ่งตรงข้ามกับคลาวด์\nB. เข้าถึงคลาวด์ได้ทั้งแบบใช้สายและไร้สาย ไม่ได้จำกัดเฉพาะไร้สาย\nC. การให้เวิร์กสเตชันแชร์ทรัพยากรกันเองคือโมเดล peer-to-peer ไม่ใช่คลาวด์\n\n📗 จำไว้สอบ: deployment = public / private / hybrid / community | service = IaaS / PaaS / SaaS',
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
      '📘 แนวคิด — แยกงานเข้าสามระนาบ\n\n🔹 Data plane → ส่งต่อทราฟฟิกผู้ใช้\n• เทียบ destination IP กับตารางเราต์/FIB แล้วเลือกอินเทอร์เฟซขาออก ⭐\n• เทียบ destination MAC กับตาราง CAM\n• ใส่/ถอด 802.1Q tag, ทำ NAT, บังคับ ACL, จัดคิว QoS\n\n🔹 Control plane → สร้างข้อมูลให้ data plane ใช้\n• OSPF, EIGRP, RIP, BGP, STP, ARP, CDP/LLDP, HSRP\n\n🔹 Management plane → บริหารอุปกรณ์\n• SSH, Telnet, SNMP, NETCONF/RESTCONF, syslog, NTP\n\n✅ ทำไม D ถูก: การเทียบ destination IP กับตารางเราต์เพื่อหาว่าจะส่งออกทางไหน คือขั้นตอนแกนกลางของการส่งต่อแพ็กเก็ต = data plane\n\n❌ ทำไมข้ออื่นผิด:\nA. ICMP echo request ที่ส่งถึง "ตัวอุปกรณ์เอง" ต้องยกขึ้นให้ CPU ตอบ จัดเป็น control plane (บางตำราจัดเป็น management)\nB. NETCONF RPC ใช้เปลี่ยนคอนฟิก = management plane\nC. โปรโตคอลเราต์ทั้งหมด = control plane\n\n📗 จำไว้สอบ: ทราฟฟิก "ผ่านเครื่อง" = data plane | "ถึงเครื่อง" = control/management plane',
  },
  {
    id: 90,
    kind: 'single',
    image: v4q90,
    prompt: 'Refer to the exhibit. R1 has just received a packet from host A that is destined to host B. Which route in the routing table is used by R1 to reach host B?',
    options: [
      { key: 'A', text: '10.10.13.0/25 [1/0] via 10.10.10.2' },
      { key: 'B', text: '10.10.13.0/25 [108/0] via 10.10.10.10' },
      { key: 'C', text: '10.10.13.0/25 [110/2] via 10.10.10.6' },
      { key: 'D', text: '10.10.13.0/25 [110/2] via 10.10.10.2' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เมื่อพรีฟิกซ์ยาวเท่ากันทุกเส้น (ทุกตัวเลือกเป็น /25 หมด) ตัวตัดสินคือ Administrative Distance ที่ "ต่ำที่สุด" ชนะ (metric จะดูก็ต่อเมื่อ AD เท่ากัน)\n\n🔍 อ่าน exhibit — คำสั่งที่ตั้งไว้บน R1\n• ip route 10.10.13.0 255.255.255.128 10.10.10.2 111 → static AD = 111\n• ip route 10.10.13.0 255.255.255.128 10.10.10.6 112 → static AD = 112\n• ip route 10.10.13.0 255.255.255.128 10.10.10.10 108 → static AD = 108 ⭐ ต่ำสุด\n• router ospf 1 … → OSPF เรียนรู้ 10.10.13.0/25 มาด้วย AD = 110\n\n📊 เรียงลำดับ AD: 108 (static) < 110 (OSPF) < 111 (static) < 112 (static)\n\n✅ ทำไม B ถูก: static route ที่ตั้ง AD ไว้ 108 มีค่าต่ำที่สุด จึงเป็นเส้นเดียวที่ถูกติดตั้งลงตารางเราต์และใช้จริง — next-hop คือ 10.10.10.10 (ผ่าน R3)\n\n💡 นี่คือตัวอย่างของ floating static route ที่ทำงานกลับด้าน — ปกติเราตั้ง AD สูงกว่าโปรโตคอลเพื่อให้เป็นตัวสำรอง แต่ที่นี่ตั้ง 108 ซึ่งต่ำกว่า OSPF (110) จึงกลายเป็นเส้นหลักแทน\n\n❌ ทำไมข้ออื่นผิด:\nA. AD 1 คือค่าเริ่มต้นของ static แต่คำสั่งในภาพระบุ AD ไว้ทุกบรรทัด ไม่มีบรรทัดไหนที่ AD เป็น 1\nC. AD 110 (OSPF) สูงกว่า 108 จึงแพ้\nD. AD 110 เช่นกัน และ next-hop ก็ไม่ตรงกับเส้นที่ชนะ\n\n📗 จำไว้สอบ: Connected 0 < Static 1 < eBGP 20 < EIGRP 90 < OSPF 110 < RIP 120 < iBGP 200 • AD ต่ำชนะ',
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
      '📘 แนวคิด — data plane คืองานที่ทำกับทราฟฟิกที่ "วิ่งผ่าน" อุปกรณ์ และมักทำในฮาร์ดแวร์ ASIC เพื่อความเร็ว\n\n🔹 ตัวอย่างงาน data plane\n• ค้นตาราง MAC เพื่อหาว่าจะส่งเฟรมออกพอร์ตไหน ⭐\n• ใส่ 802.1Q tag ตอนส่งออก trunk และถอด tag ตอนส่งออก access port ⭐\n• ค้น FIB เพื่อหาอินเทอร์เฟซขาออก\n• ทำ NAT, บังคับ ACL, จัดคิว QoS, ลด TTL\n\n✅ ทำไม C ถูก: การเติม/ถอด 802.1Q header เกิดกับเฟรมของผู้ใช้ทุกเฟรมที่ผ่าน trunk ทำในฮาร์ดแวร์ = data plane\n✅ ทำไม D ถูก: การจับคู่ destination MAC กับตาราง CAM คือการตัดสินใจส่งต่อโดยตรง = data plane\n\n❌ ทำไมข้ออื่นผิด:\nA. โปรโตคอลเราต์ (OSPF/EIGRP/BGP) สร้างตารางเราต์ = control plane\nB. NETCONF RPC ใช้เปลี่ยนคอนฟิกอุปกรณ์ = management plane\nE. ICMP echo request ที่ส่ง "ถึงตัวอุปกรณ์" ต้องให้ CPU ประมวลผลและตอบ = control plane (ไม่ใช่ทราฟฟิกที่วิ่งผ่าน)\n\n📗 จำไว้สอบ: data plane = ทำกับเฟรม/แพ็กเก็ตที่ผ่านเครื่อง (MAC lookup, VLAN tag, FIB, NAT, ACL, QoS)',
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
      '📘 แนวคิด — endpoint คืออุปกรณ์ "ปลายทาง" ที่ผู้ใช้หรือบริการอยู่ตรงนั้น\n• PC, โน้ตบุ๊ก, สมาร์ตโฟน, แท็บเล็ต\n• IP phone, เครื่องพิมพ์, กล้อง IP, อุปกรณ์ IoT\n• เซิร์ฟเวอร์\n→ ไม่ใช่อุปกรณ์เครือข่าย (สวิตช์ เราเตอร์ ไฟร์วอลล์ AP ไม่ใช่ endpoint)\n\n🔹 มุมมองด้านความปลอดภัย\n• endpoint คือ "จุดอ่อนที่สุด" ของเครือข่ายองค์กร เพราะอยู่ในมือผู้ใช้ที่อาจคลิกลิงก์ฟิชชิงหรือเสียบ USB แปลกปลอม\n• เมื่อ endpoint ถูกยึด ผู้โจมตีจะได้ที่ยืนภายในเครือข่าย (foothold) แล้วขยายผลไปยังระบบอื่น ⭐\n• จึงเกิดผลิตภัณฑ์กลุ่ม endpoint security: AMP for Endpoints, NAC/ISE, 802.1X, antivirus/EDR\n\n✅ ทำไม B ถูก: ในบริบทความปลอดภัยของ CCNA endpoint ถูกนิยามว่าเป็นภัยคุกคามต่อเครือข่ายทันทีที่ถูกเจาะสำเร็จ\n\n❌ ทำไมข้ออื่นผิด:\nA. การเชื่อมต่อระหว่าง VLAN เป็นงานของเราเตอร์หรือสวิตช์ชั้น 3\nC. อุปกรณ์ที่เชื่อมผู้ใช้เข้าเครือข่ายผู้ให้บริการคือ CPE/เราเตอร์ขอบ ไม่ใช่ endpoint\nD. การบังคับใช้นโยบายทราฟฟิกออกอินเทอร์เน็ตเป็นงานของไฟร์วอลล์/พร็อกซี\n\n📗 จำไว้สอบ: endpoint = อุปกรณ์ปลายทางของผู้ใช้/เซิร์ฟเวอร์ = จุดเสี่ยงที่สุดของเครือข่าย',
  },
  {
    id: 93,
    kind: 'single',
    image: v4q93,
    prompt: 'Refer to the exhibit. The link between PC1 and the switch is up, but it is performing poorly. Which interface condition is causing the performance problem?',
    options: [
      { key: 'A', text: 'There is an issue with the fiber on the switch interface.' },
      { key: 'B', text: 'There is a duplex mismatch on the interface.' },
      { key: 'C', text: 'There is an interface type mismatch.' },
      { key: 'D', text: 'There is a speed mismatch on the interface.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กลไก autonegotiation และกับดักคลาสสิก\n• ถ้าอีกฝั่งตั้งค่าตายตัว (hard-code) ฝั่งที่ตั้ง auto จะ "ไม่ได้ยิน" สัญญาณเจรจา\n• ฝั่ง auto จะเดาความเร็วได้เองจาก electrical signal (parallel detection) → ความเร็วมักตรงกัน\n• แต่ duplex เดาไม่ได้ → ฝั่ง auto จะถอยไปใช้ค่าปลอดภัยที่สุดคือ half-duplex ⭐\n• ผลลัพธ์: ฝั่งหนึ่ง full ฝั่งหนึ่ง half → ลิงก์ "up" แต่ช้ามาก มี late collision, FCS error, runt เพียบ\n\n🔍 อ่าน exhibit\n• PC1: Manual settings — 100 speed, full duplex (ตั้งตายตัว)\n• Switch Fa0/1: Duplex = auto, Speed = auto, Status = connected\n→ ความเร็วตรงกันที่ 100 (สวิตช์เดาถูก) แต่ duplex ไม่ตรง: PC = full, สวิตช์ตกไปเป็น half\n\n✅ ทำไม B ถูก: duplex mismatch อธิบายอาการ "ลิงก์ขึ้นแต่ประสิทธิภาพแย่" ได้ตรงที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. พอร์ตเป็น 10/100BaseTX ซึ่งเป็นทองแดง ไม่ใช่ไฟเบอร์\nC. ทั้งสองฝั่งเป็นอีเทอร์เน็ตทองแดงเหมือนกัน ไม่มี type mismatch\nD. ถ้า speed ไม่ตรงกัน ลิงก์จะ "ไม่ขึ้น" เลย (down) — แต่โจทย์บอกว่าลิงก์ขึ้นอยู่\n\n📗 จำไว้สอบ: speed mismatch → ลิงก์ down | duplex mismatch → ลิงก์ up แต่ช้า + late collision',
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
      '📘 แนวคิด — RFC 1918 "Address Allocation for Private Internets" (ปี 1996)\n• กันบล็อกไว้ 3 ช่วง: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16\n• เหตุผลที่เขียน RFC นี้: IPv4 มีที่อยู่แค่ ~4.3 พันล้าน และกำลังจะหมด ⭐\n• แนวคิด: องค์กรส่วนใหญ่มีเครื่องจำนวนมากที่ "ไม่จำเป็นต้องมีที่อยู่ระดับโลก" (เครื่องพิมพ์ เครื่องพนักงาน) จึงให้ใช้ที่อยู่ซ้ำกันได้ทุกองค์กร แล้วค่อยแปลงเป็น public IP ไม่กี่ตัวตอนออกเน็ต\n\n✅ ทำไม A ถูก: เจตนารมณ์หลักคือการอนุรักษ์พื้นที่ที่อยู่ IPv4 สาธารณะให้ใช้ได้นานที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับลำดับเหตุและผล — NAT (RFC 1631, ปี 1994) เกิดขึ้นเป็น "เครื่องมือ" ที่ทำให้ private address ใช้งานจริงได้ ไม่ใช่ว่า RFC 1918 ถูกสร้างเพื่อรองรับ NAT\nC. RFC 1918 เป็นเรื่อง IPv4 ล้วน ๆ — IPv6 มีที่อยู่ 340 อันเดซิลเลียน ไม่มีปัญหาขาดแคลน\nD. ตรงกันข้ามเลย — การใช้ private address ทำให้เกิดที่อยู่ "ทับซ้อน" ระหว่างองค์กรเป็นเรื่องปกติ (ซึ่งเป็นปัญหาเวลาควบรวมกิจการหรือทำ VPN)\n\n📗 จำไว้สอบ: RFC 1918 = ประหยัด public IPv4 | NAT = เครื่องมือที่ทำให้ใช้ได้จริง',
  },
  {
    id: 95,
    kind: 'drag',
    image: v4q95,
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
      '📘 แนวคิด — คำสำคัญที่ชี้ชัดว่าเป็น TCP หรือ UDP\n\n🔹 คำที่บ่งบอก TCP\n• "establish a connection" / "handshake" / "3-way" → ต้องสร้างการเชื่อมต่อก่อน ⭐\n• "reliable" / "guaranteed delivery" / "acknowledgment" / "retransmission" / "sequence"\n• "flow control" / "windowing"\n\n🔹 คำที่บ่งบอก UDP\n• "best-effort" → พยายามส่งให้ดีที่สุด แต่ไม่รับประกัน ⭐\n• "connectionless" / "without establishing a connection" / "no data channel"\n• "low overhead" / "8-byte header" / "latency-sensitive"\n\n🔍 จับคู่:\n• requires the client and the server to establish a connection before sending the packet → TCP\n• supports reliable data transmission → TCP\n• transmitted based on data contained in the packet without the need for a data channel → UDP (ทุกดาต้าแกรมมีข้อมูลครบในตัวเอง ไม่ต้องเปิดช่องทางล่วงหน้า)\n• provides best-effort service → UDP\n\n📗 จำไว้สอบ: เห็น "connection / reliable" → TCP | เห็น "best-effort / connectionless" → UDP',
  },
  {
    id: 96,
    kind: 'drag',
    image: v4q96,
    prompt: 'Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.',
    categories: [
      { name: 'Global Unicast', items: ['2001:db8:600d:cafe::123', '3ffe:e54d:620:a87a::f00d'] },
      { name: 'Unique Local', items: ['fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc', 'fd6d:c83b:5cef:b6b2::1'] },
    ],
    explanation:
      '📘 แนวคิด — ดูอ็อกเท็ตแรกแล้วบอกชนิดได้ทันที\n• Global Unicast = 2000::/3 → ขึ้นต้นด้วยเลข 2 หรือ 3 (ครอบคลุม 2000:: ถึง 3FFF::) ⭐\n• Unique Local = FC00::/7 → ขึ้นต้น FC หรือ FD ⭐\n• Link-Local = FE80::/10 → ขึ้นต้น FE80\n• Multicast = FF00::/8 → ขึ้นต้น FF\n\n🔍 จำแนกทีละที่อยู่\n• 2001:db8:600d:cafe::123 → ขึ้นต้น 2 → Global Unicast ✔ (2001:db8::/32 คือบล็อกสงวนสำหรับเอกสาร)\n• 3ffe:e54d:620:a87a::f00d → ขึ้นต้น 3 → ยังอยู่ในช่วง 2000::/3 → Global Unicast ✔ (3ffe::/16 เคยเป็นบล็อกของ 6bone ในอดีต แต่ก็นับเป็น GUA)\n• fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc → ขึ้นต้น FC → Unique Local ✔\n• fd6d:c83b:5cef:b6b2::1 → ขึ้นต้น FD → Unique Local ✔\n\n💡 กับดักที่พบบ่อย: หลายคนคิดว่า GUA ต้องขึ้นต้น 2001 เท่านั้น แต่จริง ๆ แล้ว 2000::/3 ครอบคลุมทั้งเลข 2 และ 3 ที่หลักแรก\n\n📗 จำไว้สอบ: 2/3 = GUA | FC/FD = ULA | FE80 = Link-Local | FF = Multicast',
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
      '📘 แนวคิด — collapsed core (two-tier) ยุบชั้น core เข้ากับ distribution\n\n🔹 ข้อดี\n• อุปกรณ์น้อยลง → ต้นทุนซื้อและค่าดูแลต่ำกว่า ⭐\n• คอนฟิกง่ายกว่า จำนวนจุดที่ต้องบริหารน้อยกว่า\n\n🔹 ข้อจำกัด\n• อุปกรณ์ชุดเดียวรับภาระสองชั้น → เป็นคอขวดเมื่อเครือข่ายโต\n• ขยายลำบาก ถ้าโตขึ้นมากต้องรื้อออกแบบใหม่เป็น three-tier\n• ความทนทานต่ำกว่าเพราะจุดล้มเหลวรวมศูนย์มากขึ้น\n\n✅ ทำไม A ถูก: องค์กรขนาดเล็กที่ต้องการควบคุมค่าใช้จ่ายคือกลุ่มเป้าหมายตรง ๆ ของ collapsed core\n\n❌ ทำไมข้ออื่นผิด:\nB. องค์กรใหญ่ที่ต้องการลด downtime ให้น้อยที่สุดควรใช้ three-tier ที่มี core ซ้ำซ้อนแยกออกมา\nC. องค์กรใหญ่ที่ต้องการความยืดหยุ่นและขยายได้ ต้องใช้ three-tier\nD. ถ้ารู้ล่วงหน้าว่าจะโตเร็วมาก ควรออกแบบเป็น three-tier ตั้งแต่ต้น จะได้ไม่ต้องรื้อทำใหม่\n\n📗 จำไว้สอบ: collapsed core = เล็ก + งบจำกัด | three-tier = ใหญ่ + ต้องการขยายและทนทาน',
  },
  {
    id: 98,
    kind: 'single',
    prompt: 'A network administrator is setting up a new IPv6 network using the 64-bit address 2001:0EB8:00C1:2200:0001:0000:0000:0331/64. To simplify the configuration, the administrator has decided to compress the address. Which IP address must the administrator configure?',
    options: [
      { key: 'A', text: 'ipv6 address 2001:EB8:C1:22:1::331/64' },
      { key: 'B', text: 'ipv6 address 21:EB8:C1:2200:1::331/64' },
      { key: 'C', text: 'ipv6 address 2001:EB8:C1:2200:1:0000:331/64' },
      { key: 'D', text: 'ipv6 address 2001:EB8:C1:2200:1::331/64' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ย่อ IPv6 ทีละกลุ่มอย่างระมัดระวัง\n\n🔧 ที่อยู่เดิม: 2001:0EB8:00C1:2200:0001:0000:0000:0331\nแยกเป็น 8 กลุ่มแล้วตัด 0 นำหน้าของแต่ละกลุ่ม\n• กลุ่ม 1: 2001 → 2001 (ไม่มี 0 นำหน้า)\n• กลุ่ม 2: 0EB8 → EB8\n• กลุ่ม 3: 00C1 → C1\n• กลุ่ม 4: 2200 → 2200 ⚠️ 0 สองตัวอยู่ "ท้าย" กลุ่ม ตัดไม่ได้เด็ดขาด\n• กลุ่ม 5: 0001 → 1\n• กลุ่ม 6: 0000 → 0\n• กลุ่ม 7: 0000 → 0\n• กลุ่ม 8: 0331 → 331\n→ ได้ 2001:EB8:C1:2200:1:0:0:331\n\nจากนั้นยุบกลุ่ม 6 และ 7 ที่เป็นศูนย์ติดกันด้วย ::\n→ 2001:EB8:C1:2200:1::331 ✔\n\n✅ ทำไม D ถูก: ทำถูกทั้งการตัดศูนย์นำหน้าและการยุบด้วย :: เพียงครั้งเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. ย่อกลุ่ม 2200 เป็น 22 ซึ่งผิด — 0 ที่ท้ายกลุ่มตัดไม่ได้ (2200 กับ 0022 เป็นคนละค่ากันโดยสิ้นเชิง)\nB. ย่อ 2001 เป็น 21 ซึ่งผิดร้ายแรง — 0 อยู่กลางกลุ่ม ตัดไม่ได้\nC. ไม่ได้ยุบกลุ่มศูนย์ให้เป็น :: และเหลือแค่ 7 กลุ่ม ที่อยู่ไม่ครบ 128 บิต\n\n📗 จำไว้สอบ: ตัดได้เฉพาะ 0 "นำหน้า" ของแต่ละกลุ่ม • 2200 ≠ 22 • :: ใช้ครั้งเดียวต่อที่อยู่',
  },
  {
    id: 99,
    kind: 'drag',
    image: v4q99,
    prompt: 'Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.',
    categories: [
      { name: 'Global Unicast', items: ['2001:db8:600d:cafe::123', '3ffe:e54d:620:a87a::f00d'] },
      { name: 'Link-Local Unicast', items: ['fe80::a00:27ff:feeb:89aa'] },
      { name: 'Multicast', items: ['ff05::1:3'] },
    ],
    explanation:
      '📘 แนวคิด — แผนที่บล็อก IPv6 ที่ต้องจำให้แม่น\n• 2000::/3 → Global Unicast (ขึ้นต้นเลข 2 หรือ 3)\n• FC00::/7 → Unique Local (FC/FD)\n• FE80::/10 → Link-Local (ในทางปฏิบัติเห็นเป็น FE80::/64)\n• FF00::/8 → Multicast (ขึ้นต้น FF)\n\n🔍 จำแนกทีละที่อยู่\n• 2001:db8:600d:cafe::123 → ขึ้นต้น 2 → Global Unicast ✔\n• 3ffe:e54d:620:a87a::f00d → ขึ้นต้น 3 → ยังอยู่ใน 2000::/3 → Global Unicast ✔\n• fe80::a00:27ff:feeb:89aa → ขึ้นต้น FE80 → Link-Local ✔\n  💡 สังเกต ff:fe ตรงกลาง = ร่องรอยว่าสร้างด้วย EUI-64 จาก MAC\n• ff05::1:3 → ขึ้นต้น FF → Multicast ✔\n  💡 เลข 5 หลัง FF0 คือ scope = site-local และ ::1:3 คือกลุ่ม All DHCP Servers\n\n📗 จำไว้สอบ scope ของ multicast: FF01=interface, FF02=link, FF05=site, FF08=organization, FF0E=global',
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
      '📘 แนวคิด — ที่อยู่ส่วนตัวเหมาะกับอุปกรณ์ที่ "ไม่ต้องให้อินเทอร์เน็ตเข้าถึงโดยตรง"\n• ที่อยู่ RFC 1918 ถูกเราเตอร์อินเทอร์เน็ตทิ้งทันที จึงเข้าจากภายนอกไม่ได้\n• ถ้าต้องออกเน็ต ต้องผ่าน NAT/PAT แปลงเป็น public IP ก่อนเสมอ\n\n✅ ทำไม D ถูก: โฮสต์ที่คุยเฉพาะกับเครื่องภายในด้วยกัน (เครื่องพิมพ์ กล้อง IP อุปกรณ์ควบคุมในโรงงาน เซิร์ฟเวอร์ภายใน) คือกรณีใช้งานที่เหมาะสมที่สุด — ไม่ต้องเปลือง public IP แม้แต่ตัวเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. คำว่า "both directions" คือปัญหา — การเชื่อมต่อขาเข้าจากภายนอกมาหา private address ทำไม่ได้ (นอกจากจะตั้ง static NAT/port forwarding เป็นราย ๆ ไป)\nB. โฮสต์ที่สตรีมข้อมูลออกไปยังทรัพยากรภายนอกต้องผ่าน NAT ซึ่งทำได้ แต่นี่ไม่ใช่ "การใช้งานที่เหมาะสมที่สุด" ของ private address — เป็นเพียงกรณีที่ต้องพึ่ง NAT เพิ่ม\nC. อินเทอร์เฟซฝั่งสาธารณะของไฟร์วอลล์ "ต้อง" เป็น public IP มิฉะนั้นอินเทอร์เน็ตจะเราต์มาถึงไม่ได้เลย\n\n📗 จำไว้สอบ: private IP = เครื่องที่คุยกันเองภายใน • ขอบที่ติดอินเทอร์เน็ต = public IP เสมอ',
  },
  {
    id: 101,
    kind: 'single',
    image: v4q101,
    prompt: 'Refer to the exhibit. An engineer is configuring the HO router. Which IPv6 address configuration must be applied to the router fa0/1 interface for the router to assign a unique 64-bit IPv6 address to itself?',
    options: [
      { key: 'A', text: 'ipv6 address 2001:DB8:0:1:FFFF:C601:420F:7/64' },
      { key: 'B', text: 'ipv6 address 2001:DB8:0:1:FE80:C601:420F:7/64' },
      { key: 'C', text: 'ipv6 address 2001:DB8:0:1:C601:42FF:FE0F:7/64' },
      { key: 'D', text: 'ipv6 address 2001:DB8:0:1:C601:42FF:800F:7/64' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สร้าง interface ID ด้วย EUI-64 จาก MAC address\n1️⃣ ผ่า MAC 48 บิตออกเป็นสองครึ่ง (24 บิต | 24 บิต)\n2️⃣ แทรก FFFE ลงตรงกลาง\n3️⃣ กลับบิตที่ 7 (U/L bit) ของไบต์แรก\n\n🔍 อ่าน exhibit: fa0/1 MAC = C601.420F.0007 และพรีฟิกซ์ของลิงก์ = 2001:DB8:0:1::/64\n\n🔧 คำนวณ\n• ผ่าครึ่ง: C601 42 | 0F 0007\n• แทรก FFFE ตรงกลาง → C601:42FF:FE0F:0007\n• ตัดศูนย์นำหน้ากลุ่มสุดท้าย: 0007 → 7\n• รวมกับพรีฟิกซ์ → 2001:DB8:0:1:C601:42FF:FE0F:7/64 ✔\n\n✅ ทำไม C ถูก: เป็นตัวเลือกเดียวที่แทรก FFFE ไว้ตรงกลาง interface ID ได้ถูกตำแหน่ง — สังเกตรูปแบบ xxxx:xxFF:FExx:xxxx ซึ่งเป็นลายเซ็นของ EUI-64\n\n💡 หมายเหตุเรื่องบิตที่ 7: C6 = 1100 0110 ถ้ากลับบิตที่ 7 อย่างเคร่งครัดจะได้ C4 แต่ข้อสอบชุดนี้ (และคีย์ที่ใช้กันทั่วไป) เน้นทดสอบ "การแทรก FFFE" เป็นหลัก จึงเลือก C ซึ่งเป็นตัวเลือกเดียวที่มี FFFE อยู่ในตำแหน่งที่ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nA. เอา FFFF ไปวางไว้ "ข้างหน้า" แทนที่จะแทรก FFFE ตรงกลาง\nB. FE80 เป็นพรีฟิกซ์ของ link-local ไม่ใช่ค่าที่ใช้แทรกใน EUI-64\nD. ใช้ 800F แทน FE0F — ค่าที่แทรกต้องเป็น FFFE เท่านั้น\n\n📗 จำไว้สอบ: เห็น xx:xxFF:FExx ตรงกลาง interface ID = EUI-64 แน่นอน',
  },
  {
    id: 102,
    kind: 'single',
    prompt: 'What is a similarity between 1000BASE-LX and 1000BASE-T standards?',
    options: [
      { key: 'A', text: 'Both use the same data-link header and trailer formats.' },
      { key: 'B', text: 'Both cable types support RJ-45 connectors.' },
      { key: 'C', text: 'Both support up to 550 meters between nodes.' },
      { key: 'D', text: 'Both cable types support LR connectors.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — มาตรฐาน xxxBASE-yy ต่างกันแค่ที่ "ชั้นกายภาพ" (ชั้น 1) เท่านั้น\n• ชั้น 2 (Data Link) ยังคงเป็น Ethernet เหมือนกันทุกมาตรฐาน → เฟรมมี Preamble, SFD, Dst MAC, Src MAC, Type, Data, FCS เหมือนกันหมด ⭐\n• นี่คือเหตุผลที่เราต่อสวิตช์ทองแดงเข้ากับสวิตช์ไฟเบอร์ได้โดยไม่ต้องแปลงอะไรที่ชั้น 2\n\n🔹 เปรียบเทียบสองมาตรฐาน\n• 1000BASE-T → สาย UTP ทองแดง Cat 5e ขึ้นไป, หัว RJ-45, ระยะ 100 เมตร\n• 1000BASE-LX → ไฟเบอร์ (multimode หรือ single-mode), หัว LC/SC, ระยะ 550 ม. (MMF) ถึง 10 กม. (SMF)\n\n✅ ทำไม A ถูก: ทั้งคู่ใช้รูปแบบเฟรมอีเทอร์เน็ต (header และ trailer) เดียวกันที่ชั้น 2 ต่างกันแค่วิธีส่งบิตลงสื่อกลาง\n\n❌ ทำไมข้ออื่นผิด:\nB. RJ-45 ใช้กับทองแดงเท่านั้น — 1000BASE-LX ใช้หัวไฟเบอร์ LC/SC\nC. 550 เมตรเป็นระยะของ 1000BASE-LX บน multimode fiber ส่วน 1000BASE-T จำกัดที่ 100 เมตร\nD. "LR connector" ไม่ใช่ชื่อหัวต่อ — LR เป็นชื่อมาตรฐาน (Long Reach) ไม่ใช่ชนิดหัว และทองแดงก็ไม่มีอะไรเกี่ยวข้อง\n\n📗 จำไว้สอบ: ทุกมาตรฐาน Ethernet ใช้เฟรมชั้น 2 เหมือนกัน ต่างกันแค่ชั้น 1 (สื่อกลาง หัวต่อ ระยะ)',
  },
  {
    id: 103,
    kind: 'single',
    image: v4q103,
    prompt: 'Refer to the exhibit. The given Windows PC is requesting the IP address of the host at www.cisco.com. To which IP address is the request sent?',
    options: [
      { key: 'A', text: '192.168.1.253' },
      { key: 'B', text: '192.168.1.100' },
      { key: 'C', text: '192.168.1.226' },
      { key: 'D', text: '192.168.1.254' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — การแปลงชื่อโดเมนเป็น IP address คือหน้าที่ของ DNS โฮสต์จะส่งคำถามไปที่ "DNS Server" ที่ตั้งไว้ ไม่ใช่ที่ default gateway หรือ DHCP server\n\n🔍 อ่าน exhibit จากผลลัพธ์ ipconfig /all ของอะแดปเตอร์ Wi-Fi\n• IPv4 Address = 192.168.1.226 → ที่อยู่ของเครื่องเอง\n• Subnet Mask = 255.255.255.0\n• Default Gateway = 192.168.1.100 → ประตูออกไปเครือข่ายอื่น\n• DHCP Server = 192.168.1.254 → ตัวที่แจกที่อยู่ให้เครื่องนี้\n• DNS Servers = 192.168.1.253 ⭐ → ตัวที่รับคำถามแปลงชื่อ\n\n✅ ทำไม A ถูก: คำขอ DNS ของ www.cisco.com จะถูกส่งเป็น UDP พอร์ต 53 ไปยัง 192.168.1.253 ซึ่งเป็น DNS server ที่เครื่องได้รับมาจาก DHCP\n\n💡 แม้ DNS server จะอยู่ในซับเน็ตเดียวกัน (192.168.1.0/24) แพ็กเก็ตก็ส่งตรงถึงกันได้เลยโดยไม่ต้องผ่าน gateway\n\n❌ ทำไมข้ออื่นผิด:\nB. 192.168.1.100 เป็น default gateway ใช้ส่งทราฟฟิกออกนอกซับเน็ต ไม่ใช่ผู้ตอบคำถาม DNS\nC. 192.168.1.226 เป็นที่อยู่ของ PC เอง\nD. 192.168.1.254 เป็น DHCP server ทำหน้าที่แจก IP ไม่ใช่แปลงชื่อ\n\n📗 จำไว้สอบ: DNS query = UDP 53 ส่งไปที่ "DNS Servers" ที่ระบุใน ipconfig เท่านั้น',
  },
  {
    id: 104,
    kind: 'single',
    prompt: 'Which function forwards frames to ports that have a matching destination MAC address?',
    options: [
      { key: 'A', text: 'frame flooding' },
      { key: 'B', text: 'frame filtering' },
      { key: 'C', text: 'frame pushing' },
      { key: 'D', text: 'frame switching' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ศัพท์เฉพาะของ Cisco สำหรับพฤติกรรมของสวิตช์\n\n🔹 Frame filtering ⭐\n• เมื่อสวิตช์ "รู้จัก" destination MAC ในตาราง CAM แล้ว\n• จะส่งเฟรมออกเฉพาะพอร์ตที่ตรงกันพอร์ตเดียว และ "กรอง" (ไม่ส่ง) ออกพอร์ตอื่นทั้งหมด\n• คำว่า filtering มาจากมุมมองที่ว่าสวิตช์กรองไม่ให้เฟรมไปรบกวนพอร์ตที่ไม่เกี่ยวข้อง\n\n🔹 Frame flooding\n• เมื่อ "ไม่รู้จัก" destination MAC (unknown unicast) หรือเป็น broadcast/multicast\n• ส่งออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตขาเข้า\n\n✅ ทำไม B ถูก: frame filtering คือฟังก์ชันที่ส่งเฟรมออกเฉพาะพอร์ตที่ MAC ปลายทางตรงกัน ตามที่โจทย์บรรยาย\n\n❌ ทำไมข้ออื่นผิด:\nA. frame flooding เป็นสิ่งที่เกิดเมื่อ "ไม่มี" รายการที่ตรงกัน — ตรงข้ามกับโจทย์\nC. ไม่มีคำว่า frame pushing ในศัพท์เครือข่าย — เป็นตัวเลือกลวง\nD. frame switching เป็นคำกว้าง ๆ ที่หมายถึงกระบวนการทั้งหมดของสวิตช์ (learn + filter + flood) ไม่ได้เจาะจงพฤติกรรมที่โจทย์ถาม\n\n📗 จำไว้สอบ: รู้จัก MAC → filter (ส่งพอร์ตเดียว) | ไม่รู้จัก MAC → flood (ส่งทุกพอร์ตใน VLAN)',
  },
  {
    id: 105,
    kind: 'single',
    prompt: 'Which type of IPv6 address is similar to a unicast address but is assigned to multiple devices on the same network at the same time?',
    options: [
      { key: 'A', text: 'global unicast address' },
      { key: 'B', text: 'link-local address' },
      { key: 'C', text: 'anycast address' },
      { key: 'D', text: 'multicast address' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — IPv6 มีการส่ง 3 แบบ (ไม่มี broadcast)\n\n🔹 Unicast — หนึ่งต่อหนึ่ง\n• ส่งถึงอินเทอร์เฟซเดียวเท่านั้น\n\n🔹 Multicast (FF00::/8) — หนึ่งต่อหลาย\n• ส่งถึง "ทุกเครื่อง" ที่สมัครเข้ากลุ่มนั้น ทุกคนได้รับสำเนาเหมือนกันหมด\n\n🔹 Anycast — หนึ่งต่อ "ตัวที่ใกล้ที่สุด" ⭐\n• ที่อยู่ anycast หน้าตาเหมือน unicast ธรรมดาทุกประการ (อยู่ในบล็อก unicast)\n• แต่ถูกกำหนดให้อุปกรณ์หลายตัวพร้อมกัน\n• เราเตอร์จะส่งแพ็กเก็ตไปยังตัวที่ "ใกล้ที่สุด" ตามการวัดของโปรโตคอลเราต์เท่านั้น ไม่ได้ส่งให้ทุกตัว\n• ใช้จริงกับ DNS root server และ CDN เพื่อกระจายโหลดตามภูมิศาสตร์\n\n✅ ทำไม C ถูก: anycast ตรงกับคำบรรยาย "คล้าย unicast แต่ถูกกำหนดให้อุปกรณ์หลายตัวพร้อมกัน" ทุกประการ\n\n❌ ทำไมข้ออื่นผิด:\nA. global unicast กำหนดให้อินเทอร์เฟซเดียวเท่านั้น\nB. link-local ก็เป็น unicast (แม้ทุกอินเทอร์เฟซจะมี FE80:: ของตัวเอง แต่แต่ละตัวมีที่อยู่ไม่ซ้ำกัน)\nD. multicast ไม่ได้ "คล้าย unicast" — มีบล็อกที่อยู่ของตัวเอง (FF00::/8) และส่งถึงทุกสมาชิกในกลุ่ม\n\n📗 จำไว้สอบ: unicast=หนึ่งต่อหนึ่ง | multicast=หนึ่งต่อกลุ่ม (ทุกตัว) | anycast=หนึ่งต่อตัวที่ใกล้สุด • IPv6 ไม่มี broadcast',
  },
  {
    id: 106,
    kind: 'single',
    prompt: 'What is a characteristic of private IPv4 addressing?',
    options: [
      { key: 'A', text: 'composed of up to 65,536 available addresses' },
      { key: 'B', text: 'issued by IANA in conjunction with an autonomous system number' },
      { key: 'C', text: 'used without tracking or registration' },
      { key: 'D', text: 'traverse the Internet when an outbound ACL is applied' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ที่อยู่ส่วนตัวไม่ต้องขออนุญาตใคร\n• 10.0.0.0/8 | 172.16.0.0/12 | 192.168.0.0/16 เป็นบล็อกที่ IANA "กันไว้" ให้ทุกคนใช้ได้เสรี\n• ไม่ต้องลงทะเบียนกับ RIR (ARIN, RIPE, APNIC) ไม่ต้องแจ้ง ISP ไม่มีใครติดตาม ⭐\n• ต่างจาก public IP ที่ต้องขอจัดสรร มีเจ้าของชัดเจน และตรวจสอบได้ผ่าน WHOIS\n\n✅ ทำไม C ถูก: จะใช้บล็อกไหนภายในองค์กรก็ได้ตามใจ ไม่มีขั้นตอนติดตามหรือลงทะเบียนใด ๆ\n\n❌ ทำไมข้ออื่นผิด:\nA. จำนวนที่อยู่ต่างกันมากในแต่ละบล็อก — 10.0.0.0/8 มีกว่า 16.7 ล้านที่อยู่, 172.16.0.0/12 มีกว่า 1 ล้าน, 192.168.0.0/16 มี 65,536 — เลข 65,536 ใช้ได้กับบล็อกเดียวเท่านั้น ไม่ใช่ลักษณะร่วม\nB. IANA ไม่ได้ "ออกให้" เป็นราย ๆ พร้อม AS number — AS number ใช้กับ BGP บนอินเทอร์เน็ตสาธารณะ ซึ่ง private address ไม่เกี่ยวข้อง\nD. ไม่ว่าจะตั้ง ACL อย่างไร ที่อยู่ RFC 1918 ก็ไม่มีทางเดินทางบนอินเทอร์เน็ตได้ — ต้องผ่าน NAT แปลงเป็น public IP เท่านั้น\n\n📗 จำไว้สอบ: private IP = ใช้ฟรี ไม่ต้องลงทะเบียน แต่ต้องมี NAT ถึงจะออกเน็ต',
  },
  {
    id: 107,
    kind: 'single',
    prompt: 'What is a function of an endpoint on a network?',
    options: [
      { key: 'A', text: 'provides wireless services to users in a building' },
      { key: 'B', text: 'connects server and client device to a network' },
      { key: 'C', text: 'allows users to record data and transmit to a file server' },
      { key: 'D', text: 'forwards traffic between VLANs on a network' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — endpoint คืออุปกรณ์ "ปลายทาง" ที่เป็นต้นทางหรือปลายทางของข้อมูล ไม่ใช่อุปกรณ์โครงสร้างพื้นฐาน\n• PC, โน้ตบุ๊ก, สมาร์ตโฟน, แท็บเล็ต, IP phone, เครื่องพิมพ์, กล้อง IP, เซิร์ฟเวอร์\n• สวิตช์ เราเตอร์ ไฟร์วอลล์ AP = อุปกรณ์เครือข่าย ไม่ใช่ endpoint\n\n🔹 หน้าที่ของ endpoint\n• เป็นจุดที่ผู้ใช้ "สร้าง" ข้อมูล เช่น พิมพ์เอกสาร บันทึกวิดีโอ กรอกแบบฟอร์ม\n• ส่งข้อมูลนั้นไปยังบริการบนเครือข่าย เช่น file server, ฐานข้อมูล, คลาวด์ ⭐\n\n✅ ทำไม C ถูก: การที่ผู้ใช้บันทึกข้อมูลบนเครื่องแล้วส่งไปเก็บที่ file server คือพฤติกรรมตามนิยามของ endpoint\n\n❌ ทำไมข้ออื่นผิด:\nA. การให้บริการไร้สายในอาคารเป็นหน้าที่ของ access point ซึ่งเป็นอุปกรณ์เครือข่าย\nB. สิ่งที่ "เชื่อม" เซิร์ฟเวอร์และไคลเอนต์เข้าเครือข่ายคือสวิตช์ — endpoint คือตัวเซิร์ฟเวอร์/ไคลเอนต์เอง ไม่ใช่ตัวเชื่อม (นี่คือกับดักหลักของข้อนี้)\nD. การส่งต่อทราฟฟิกระหว่าง VLAN เป็นงานของเราเตอร์หรือสวิตช์ชั้น 3\n\n📗 จำไว้สอบ: endpoint = ต้นทาง/ปลายทางของข้อมูล (PC, phone, เซิร์ฟเวอร์) ไม่ใช่ตัวกลางที่ส่งต่อข้อมูล',
  },
  {
    id: 108,
    kind: 'single',
    prompt: 'What is the function of a controller in controller-based networking?',
    options: [
      { key: 'A', text: 'It serves as the centralized management point of an SDN architecture' },
      { key: 'B', text: 'It is a pair of core routers that maintain all routing decisions for a campus' },
      { key: 'C', text: 'It centralizes the data plane for the network' },
      { key: 'D', text: 'It is the card on a core router that maintains all routing decisions for a campus.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — SDN (Software-Defined Networking) แยก control plane ออกจากอุปกรณ์แต่ละตัวมารวมไว้ที่ controller\n\n🔹 หน้าที่ของ SDN controller\n• เป็นศูนย์กลางบริหารและมองเห็นทั้งเครือข่าย (single pane of glass) ⭐\n• คำนวณเส้นทางและนโยบายให้ทั้งระบบ แล้วโปรแกรมลงอุปกรณ์\n• คุยกับผู้ดูแล/แอปพลิเคชันผ่าน northbound API (REST/JSON)\n• คุยกับอุปกรณ์เครือข่ายผ่าน southbound API (NETCONF, OpenFlow, OpFlex)\n• ตัวอย่างจริง: Cisco DNA Center, Cisco APIC (ACI), SD-WAN vManage\n\n✅ ทำไม A ถูก: controller คือจุดบริหารรวมศูนย์ของสถาปัตยกรรม SDN ตรงตามนิยาม\n\n❌ ทำไมข้ออื่นผิด:\nB. controller เป็นซอฟต์แวร์/แพลตฟอร์มบริหาร ไม่ใช่คู่ของ core router\nC. SDN รวมศูนย์ "control plane" ไม่ใช่ data plane — การส่งต่อแพ็กเก็ตยังคงกระจายอยู่ที่อุปกรณ์แต่ละตัวเพื่อความเร็ว\nD. controller ไม่ใช่การ์ดในเราเตอร์ แต่เป็นระบบแยกต่างหาก (มักรันเป็นแอปพลายแอนซ์หรือคลัสเตอร์เซิร์ฟเวอร์)\n\n📗 จำไว้สอบ: SDN = รวมศูนย์ control plane ที่ controller | data plane ยังกระจายอยู่ที่อุปกรณ์ • northbound=แอป, southbound=อุปกรณ์',
  },
  {
    id: 109,
    kind: 'single',
    image: v4q109,
    prompt: 'Refer to the exhibit. Each router must be configured with the last usable IP address in the subnet. Which configuration fulfills this requirement?',
    options: [
      { key: 'A', text: 'R7: 10.88.31.127 255.255.255.192 | R8: 10.19.63.95 255.255.255.240 | R9: 10.23.98.159 255.255.255.224' },
      { key: 'B', text: 'R7: 10.88.31.126 255.255.255.240 | R8: 10.19.63.94 255.255.255.192 | R9: 10.23.98.158 255.255.255.248' },
      { key: 'C', text: 'R7: 10.88.31.127 255.255.255.240 | R8: 10.19.63.95 255.255.255.192 | R9: 10.23.98.159 255.255.255.248' },
      { key: 'D', text: 'R7: 10.88.31.126 255.255.255.192 | R8: 10.19.63.94 255.255.255.240 | R9: 10.23.98.158 255.255.255.224' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — "last usable address" = broadcast address ลบหนึ่ง และ subnet mask ต้องตรงกับที่ระบุใน exhibit ด้วย\n\n🔍 คำนวณทีละเราเตอร์\n\n1️⃣ R7 Fa1/0 → 10.88.31.64/26\n• /26 = 255.255.255.192 | block size 64\n• network 10.88.31.64 | broadcast 10.88.31.127 | last usable = 10.88.31.126 ✔\n\n2️⃣ R8 Fa0/0 → 10.19.63.80/28\n• /28 = 255.255.255.240 | block size 16\n• network 10.19.63.80 | broadcast 10.19.63.95 | last usable = 10.19.63.94 ✔\n\n3️⃣ R9 Fa1/1 → 10.23.98.128/27\n• /27 = 255.255.255.224 | block size 32\n• network 10.23.98.128 | broadcast 10.23.98.159 | last usable = 10.23.98.158 ✔\n\n✅ ทำไม D ถูก: ตรงทั้งที่อยู่และ mask ครบทั้งสามเราเตอร์ — .126/26, .94/28, .158/27\n\n❌ ทำไมข้ออื่นผิด:\nA. ใช้ .127, .95, .159 ซึ่งเป็น broadcast address ทั้งหมด กำหนดให้อินเทอร์เฟซไม่ได้ และ mask ก็สลับกันมั่ว\nB. ที่อยู่ถูกแต่ mask สลับกันหมด (R7 ควรเป็น /26 ไม่ใช่ /28)\nC. ทั้งที่อยู่เป็น broadcast และ mask ก็ผิด\n\n📗 จำไว้สอบ: /26 block 64 | /27 block 32 | /28 block 16 • last usable = broadcast − 1 • ตรวจ mask ให้ตรงกับ exhibit เสมอ',
  },
  {
    id: 110,
    kind: 'single',
    prompt: 'How do TCP and UDP fit into a query-responsible model?',
    options: [
      { key: 'A', text: 'TCP avoids using sequencing and UDP avoids using acknowledgments' },
      { key: 'B', text: 'TCP establishes a connection prior to sending data, and UDP sends immediately' },
      { key: 'C', text: 'TCP encourages out-of-order packet delivery, and UDP prevents re-ordering' },
      { key: 'D', text: 'TCP uses error detection for packets, and UDP uses error recovery.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ในโมเดลถาม-ตอบ (query-response) สิ่งที่ต่างกันชัดที่สุดคือ "ต้องเปิดการเชื่อมต่อก่อนหรือไม่"\n\n🔹 TCP\n• ต้องทำ 3-way handshake (SYN → SYN-ACK → ACK) ก่อนส่งคำถามแม้แต่ไบต์เดียว\n• เสียเวลาไป 1 round-trip ก่อนเริ่มงานจริง แต่ได้ความน่าเชื่อถือกลับมา\n\n🔹 UDP\n• ยิงคำถามออกไปได้ทันที ไม่มีการเตรียมการใด ๆ ⭐\n• เหมาะกับการถาม-ตอบสั้น ๆ อย่าง DNS ที่ตั้ง TCP connection แล้วไม่คุ้มค่าเวลา\n\n✅ ทำไม B ถูก: สรุปความต่างหลักได้ถูกต้อง — TCP สร้างการเชื่อมต่อก่อน UDP ส่งทันที\n\n❌ ทำไมข้ออื่นผิด:\nA. กลับด้าน — TCP "ใช้" sequencing (ไม่ใช่หลีกเลี่ยง) ส่วนที่ว่า UDP ไม่ใช้ ACK นั้นถูก แต่ครึ่งแรกผิดจึงตกทั้งข้อ\nC. TCP ไม่ได้ "ส่งเสริม" การมาถึงผิดลำดับ — TCP จัดเรียงให้ถูกต้องเสมอ ส่วน UDP ต่างหากที่ไม่จัดเรียงให้\nD. ทั้ง TCP และ UDP มี checksum สำหรับ error detection เหมือนกัน แต่ UDP ไม่มี error recovery เลย — กลับด้าน\n\n📗 จำไว้สอบ: TCP = handshake ก่อน (เสีย 1 RTT) | UDP = ยิงทันที (เหมาะกับ DNS/DHCP)',
  },
  {
    id: 111,
    kind: 'single',
    prompt: 'What provides centralized control of authentication and roaming in an enterprise network?',
    options: [
      { key: 'A', text: 'a lightweight access point' },
      { key: 'B', text: 'a wireless LAN controller' },
      { key: 'C', text: 'a firewall' },
      { key: 'D', text: 'a LAN switch' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม split-MAC ของ Cisco แบ่งงานระหว่าง AP กับ WLC\n\n🔹 lightweight AP รับผิดชอบงานเรียลไทม์\n• ส่ง/รับคลื่นวิทยุ, ตอบ ACK 802.11, เข้ารหัสข้อมูล, ส่ง beacon\n\n🔹 WLC รับผิดชอบงานบริหารรวมศูนย์ ⭐\n• Authentication — เป็นตัวกลางคุยกับ RADIUS/ISE แทน AP ทุกตัว\n• Roaming — จัดการให้ไคลเอนต์ย้าย AP โดยไม่ต้อง re-authenticate (key caching, mobility group)\n• RRM — จ่ายช่องสัญญาณและกำลังส่งอัตโนมัติ\n• นโยบายความปลอดภัย, QoS, การตรวจจับ rogue AP\n\n✅ ทำไม B ถูก: WLC คืออุปกรณ์ที่รวมศูนย์ทั้งการยืนยันตัวตนและการจัดการ roaming ให้ AP ทั้งเครือข่าย\n\n❌ ทำไมข้ออื่นผิด:\nA. lightweight AP โยนงานเหล่านี้ให้ WLC ทั้งหมด ไม่ได้ทำเอง (ถ้าทำเองจะเป็น autonomous AP)\nC. ไฟร์วอลล์กรองทราฟฟิกตามนโยบายความปลอดภัย ไม่เกี่ยวกับ roaming ไร้สาย\nD. สวิตช์ LAN ให้พอร์ตและ PoE แก่ AP แต่ไม่ได้บริหาร roaming หรือ authentication ไร้สาย\n\n📗 จำไว้สอบ: split-MAC → AP ทำงานวิทยุเรียลไทม์ | WLC ทำ auth, roaming, RRM, นโยบาย',
  },
  {
    id: 112,
    kind: 'single',
    prompt: 'Which set of 2.4 GHz nonoverlapping wireless channels is standard in the United States?',
    options: [
      { key: 'A', text: 'channels 1, 6, 11, and 14' },
      { key: 'B', text: 'channels 2, 7, 9, and 11' },
      { key: 'C', text: 'channels 2, 7, and 11' },
      { key: 'D', text: 'channels 1, 6, and 11' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ย่าน 2.4 GHz\n• สหรัฐฯ (FCC) อนุญาตช่อง 1–11 เท่านั้น\n• ยุโรป (ETSI) อนุญาตช่อง 1–13\n• ญี่ปุ่นเท่านั้นที่มีช่อง 14 (และใช้ได้เฉพาะ 802.11b)\n• แต่ละช่องกว้าง 22 MHz จุดกลางห่างกัน 5 MHz → ต้องห่างกัน 5 หมายเลขจึงจะไม่ทับกัน\n\n✅ ทำไม D ถูก: 1, 6, 11 คือชุดสามช่องที่ไม่ทับกันเลยและใช้ได้ในสหรัฐฯ (1↔6 ห่าง 5, 6↔11 ห่าง 5)\n\n❌ ทำไมข้ออื่นผิด:\nA. ช่อง 14 ใช้ได้เฉพาะในญี่ปุ่น ไม่ใช่มาตรฐานของสหรัฐฯ\nB. 2, 7, 9, 11 → คู่ 7 กับ 9 ห่างกันแค่ 2 → ทับกันหนัก\nC. 2, 7, 11 → คู่ 7 กับ 11 ห่างกันแค่ 4 → ยังทับกันบางส่วน\n\n💡 การจัดเซลล์ในทางปฏิบัติ: วางแบบรังผึ้ง 1-6-11-1-6-11 สลับกันไป ให้ AP ที่อยู่ติดกันไม่ซ้ำช่อง\n\n📗 จำไว้สอบ: 2.4 GHz = 1, 6, 11 (สหรัฐฯ 1–11, ยุโรป 1–13, ญี่ปุ่นมี 14)',
  },
  {
    id: 113,
    kind: 'single',
    prompt: 'A network engineer is installing an IPv6-only capable device. The client has requested that the device IP address be reachable only from the internal network. Which type of IPv6 address must the engineer assign?',
    options: [
      { key: 'A', text: 'IPv4-compatible IPv6 address' },
      { key: 'B', text: 'unique local address' },
      { key: 'C', text: 'link-local address' },
      { key: 'D', text: 'aggregatable global address' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โจทย์ต้องการ "เข้าถึงได้จากเครือข่ายภายในเท่านั้น"\n→ ต้องเราต์ได้ภายในองค์กร (ข้ามซับเน็ตได้) แต่ห้ามเข้าถึงจากอินเทอร์เน็ต\n\n🔹 ประเมินแต่ละชนิด\n• ULA (FC00::/7 ใช้จริง FD00::/8) → เราต์ได้ทั่วองค์กร แต่ ISP กรองทิ้ง ⭐ ตรงเงื่อนไขทั้งสองข้อ\n• Link-local (FE80::/10) → ใช้ได้แค่บนลิงก์เดียว เราเตอร์ไม่ส่งต่อ → ถ้าอุปกรณ์อยู่คนละซับเน็ตกับผู้ใช้ก็เข้าถึงไม่ได้ → แคบเกินไป\n• Global unicast (2000::/3) → เข้าถึงได้จากอินเทอร์เน็ต → ขัดกับความต้องการ\n• IPv4-compatible IPv6 (::a.b.c.d) → ถูกยกเลิก (deprecated) ไปแล้วตาม RFC 4291\n\n✅ ทำไม B ถูก: unique local address เทียบเท่ากับ private IPv4 ให้ทั้งความสามารถในการเราต์ภายในและการปิดกั้นจากภายนอกพร้อมกัน\n\n📗 จำไว้สอบ: ULA = private ของ IPv6 • ใช้ FD00::/8 ในทางปฏิบัติ • link-local เข้าถึงได้แค่ลิงก์เดียว',
  },
  {
    id: 114,
    kind: 'single',
    prompt: 'What is a requirement for nonoverlapping Wi-Fi channels?',
    options: [
      { key: 'A', text: 'different security settings' },
      { key: 'B', text: 'discontinuous frequency ranges' },
      { key: 'C', text: 'unique SSIDs' },
      { key: 'D', text: 'different transmission speeds' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — "ช่องไม่ทับกัน" เป็นเรื่องของ "คลื่นความถี่" ล้วน ๆ ไม่เกี่ยวกับการตั้งค่าซอฟต์แวร์ใด ๆ\n\n🔧 ทำไมช่อง 1, 6, 11 จึงไม่ทับกัน\n• ช่อง 1 → กินย่าน 2.401 – 2.423 GHz\n• ช่อง 6 → กินย่าน 2.426 – 2.448 GHz\n• ช่อง 11 → กินย่าน 2.451 – 2.473 GHz\n→ ช่วงความถี่ของทั้งสามไม่คาบเกี่ยวกันเลย (discontinuous) จึงส่งพร้อมกันได้โดยไม่กวนกัน ⭐\n\n✅ ทำไม B ถูก: เงื่อนไขเดียวของการเป็นช่องที่ไม่ทับกันคือช่วงความถี่ต้องแยกขาดจากกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. การตั้งค่าความปลอดภัย (WPA2/WPA3) เป็นเรื่องของการเข้ารหัสข้อมูล ไม่ได้เปลี่ยนความถี่ที่ใช้\nC. SSID เป็นเพียงชื่อเครือข่าย — AP หลายตัวใช้ SSID เดียวกันบนคนละช่องได้ (และนั่นคือการออกแบบมาตรฐาน)\nD. ความเร็วในการส่งขึ้นกับการมอดูเลตและคุณภาพสัญญาณ ไม่เกี่ยวกับการทับซ้อนของช่อง\n\n📗 จำไว้สอบ: nonoverlapping = ช่วงความถี่ไม่คาบเกี่ยวกัน → 2.4 GHz มีแค่ 1, 6, 11',
  },
  {
    id: 115,
    kind: 'single',
    prompt: 'A network engineer must implement an IPv6 configuration on the vlan 2000 interface to create a routable locally-unique unicast address that is blocked from being advertised to the internet. Which configuration must the engineer apply?',
    options: [
      { key: 'A', text: 'interface vlan 2000 / ipv6 address ff00:0000:aaaa::1234:2343/64' },
      { key: 'B', text: 'interface vlan 2000 / ipv6 address fd00::1234:2343/64' },
      { key: 'C', text: 'interface vlan 2000 / ipv6 address fe80:0000:aaaa::1234:2343/64' },
      { key: 'D', text: 'interface vlan 2000 / ipv6 address fc00:0000:aaaa::a15d:1234:2343:8aca/64' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — แกะคำสำคัญในโจทย์ 3 คำ\n1️⃣ "routable" → ต้องเราต์ข้ามซับเน็ตภายในได้ → ตัด link-local (FE80) ทิ้ง\n2️⃣ "locally-unique unicast" → คือ Unique Local Address (ULA)\n3️⃣ "blocked from being advertised to the internet" → ยืนยันว่าเป็น ULA ไม่ใช่ global unicast\n\n🔹 รายละเอียดของ ULA (RFC 4193)\n• บล็อกเต็มคือ FC00::/7 ซึ่งครอบทั้ง FC และ FD\n• บิตที่ 8 คือ L bit\n  • L = 1 → FD00::/8 → "locally assigned" กำหนดเองในองค์กร ⭐ นี่คือที่ใช้จริงทั้งหมด\n  • L = 0 → FC00::/8 → สงวนไว้ให้หน่วยงานกลางจัดสรร ซึ่ง "ยังไม่เคยถูกนิยามวิธีใช้งาน"\n\n✅ ทำไม B ถูก: fd00::1234:2343/64 อยู่ในบล็อก FD00::/8 ซึ่งเป็น ULA ที่กำหนดเองได้และใช้งานได้จริง ตรงตามความต้องการทั้งสามข้อ\n\n❌ ทำไมข้ออื่นผิด:\nA. ff00:: เป็น multicast ไม่ใช่ unicast\nC. fe80:: เป็น link-local เราต์ข้ามซับเน็ตไม่ได้ → ตกข้อ "routable"\nD. fc00:: อยู่ในช่วง L=0 ที่ยังไม่มีการนิยามการใช้งาน จึงไม่ใช่ตัวเลือกที่ถูกต้องในทางปฏิบัติ\n\n📗 จำไว้สอบ: ULA ที่ใช้จริง = FD00::/8 เสมอ • FC00::/8 สงวนไว้ ยังไม่ใช้',
  },
  {
    id: 116,
    kind: 'multi',
    prompt: 'What are two characteristics of an SSID? (Choose two.)',
    options: [
      { key: 'A', text: 'It uniquely identifies a client in a WLAN.' },
      { key: 'B', text: 'It is at most 32 characters long' },
      { key: 'C', text: 'It uniquely identifies an access point in a WLAN' },
      { key: 'D', text: 'It provides secured access to a WLAN.' },
      { key: 'E', text: 'It can be hidden or broadcast in a WLAN.' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — SSID (Service Set Identifier) คือ "ชื่อ" ของเครือข่ายไร้สาย\n• ยาวได้สูงสุด 32 อักขระ (ตามมาตรฐาน IEEE 802.11) ⭐\n• เป็น case-sensitive (ตัวพิมพ์เล็ก-ใหญ่ต่างกัน)\n• AP จะประกาศ SSID ผ่าน beacon frame โดยค่าเริ่มต้น (broadcast)\n• สามารถปิดการประกาศได้ (hidden/cloaked SSID) ผู้ใช้ต้องพิมพ์ชื่อเอง ⭐\n\n⚠️ การซ่อน SSID ไม่ใช่มาตรการความปลอดภัยที่แท้จริง — ชื่อยังหลุดออกมาใน probe request/association frame ซึ่งดักจับได้ง่าย\n\n✅ ทำไม B ถูก: ข้อจำกัด 32 อักขระเป็นข้อกำหนดตายตัวของมาตรฐาน\n✅ ทำไม E ถูก: SSID เลือกได้ว่าจะประกาศหรือซ่อน\n\n❌ ทำไมข้ออื่นผิด:\nA. สิ่งที่ระบุตัวตนไคลเอนต์คือ MAC address ไม่ใช่ SSID (ไคลเอนต์หลายร้อยเครื่องใช้ SSID เดียวกันได้)\nC. สิ่งที่ระบุตัวตน AP แต่ละตัวคือ BSSID (MAC ของวิทยุ AP) — AP หลายตัวใช้ SSID เดียวกันได้ นั่นคือการทำ ESS\nD. SSID เป็นแค่ชื่อ ไม่ได้ให้ความปลอดภัยใด ๆ — ความปลอดภัยมาจาก WPA2/WPA3, 802.1X\n\n📗 จำไว้สอบ: SSID=ชื่อเครือข่าย (≤32 ตัว) | BSSID=MAC ของ AP | ESS=หลาย AP ใช้ SSID เดียวกัน',
  },
  {
    id: 117,
    kind: 'single',
    prompt: 'When a switch receives a frame for a known destination MAC address, how is the frame handled?',
    options: [
      { key: 'A', text: 'flooded to all ports except the one from which it originated' },
      { key: 'B', text: 'forwarded to the first available port' },
      { key: 'C', text: 'sent to the port identified for the known MAC address' },
      { key: 'D', text: 'broadcast to all ports' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — กระบวนการตัดสินใจของสวิตช์\n1️⃣ รับเฟรมเข้ามา → บันทึก source MAC + พอร์ตขาเข้า ลงตาราง CAM\n2️⃣ ค้นหา destination MAC ในตาราง CAM\n   • เจอ → ส่งออก "พอร์ตเดียว" ที่ระบุไว้ในตาราง (frame filtering) ⭐\n   • ไม่เจอ → flood ออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตขาเข้า\n\n✅ ทำไม C ถูก: เมื่อรู้จัก destination MAC แล้ว สวิตช์จะส่งเฟรมออกเฉพาะพอร์ตที่จับคู่ไว้ ทำให้พอร์ตอื่นไม่ต้องรับภาระทราฟฟิกที่ไม่เกี่ยวข้อง — นี่คือข้อได้เปรียบหลักของสวิตช์เหนือฮับ\n\n❌ ทำไมข้ออื่นผิด:\nA. การ flood ใช้เมื่อ "ไม่รู้จัก" MAC ปลายทาง — ตรงข้ามกับเงื่อนไขในโจทย์\nB. สวิตช์ไม่ได้เลือก "พอร์ตแรกที่ว่าง" แบบสุ่ม — เลือกจากตาราง CAM อย่างเจาะจง\nD. การ broadcast ออกทุกพอร์ตใช้เฉพาะกับเฟรมที่ปลายทางเป็น FFFF.FFFF.FFFF\n\n📗 จำไว้สอบ: known MAC → ส่งพอร์ตเดียว (filter) | unknown MAC → flood ใน VLAN | broadcast MAC → ทุกพอร์ตใน VLAN',
  },
  {
    id: 118,
    kind: 'drag',
    image: v4q118,
    prompt: 'Drag and drop the IPv6 address details from the left onto the corresponding types on the right.',
    categories: [
      { name: 'Anycast', items: ['used exclusively by a non-host device', 'assigned to more than one interface'] },
      { name: 'Multicast', items: ['derived from the FF00::/8 address range', 'provides one-to-many communications'] },
      { name: 'Unicast', items: ['includes link-local and loopback addresses', 'identifies an interface on an IPv6 device'] },
    ],
    explanation:
      '📘 แนวคิด — IPv6 มีการส่ง 3 แบบ (เลิกใช้ broadcast แล้ว)\n\n🔹 Unicast — หนึ่งต่อหนึ่ง\n• ระบุอินเทอร์เฟซเดียวบนอุปกรณ์เดียว ⭐\n• ครอบคลุมหลายชนิดย่อย: global unicast (2000::/3), unique local (FC00::/7), link-local (FE80::/10) และ loopback (::1)\n\n🔹 Multicast — หนึ่งต่อหลาย\n• อยู่ในบล็อก FF00::/8 ทั้งหมด ⭐\n• ส่งครั้งเดียวถึงทุกเครื่องที่สมัครเข้ากลุ่ม = one-to-many\n\n🔹 Anycast — หนึ่งต่อตัวที่ใกล้ที่สุด\n• ที่อยู่เดียวถูกกำหนดให้อินเทอร์เฟซหลายตัวบนอุปกรณ์หลายเครื่อง ⭐\n• ในบริบท CCNA ระบุว่าใช้กับอุปกรณ์ที่ไม่ใช่โฮสต์ (เราเตอร์) เช่น Subnet-Router anycast address\n\n🔍 จับคู่:\n• used exclusively by a non-host device → Anycast\n• assigned to more than one interface → Anycast\n• derived from the FF00::/8 address range → Multicast\n• provides one-to-many communications → Multicast\n• includes link-local and loopback addresses → Unicast\n• identifies an interface on an IPv6 device → Unicast\n\n📗 จำไว้สอบ: unicast=1 อินเทอร์เฟซ | multicast=FF00::/8 กลุ่ม | anycast=หลายอินเทอร์เฟซ ส่งถึงตัวใกล้สุด',
  },
  {
    id: 119,
    kind: 'single',
    prompt: 'What is the collapsed layer in collapsed core architectures?',
    options: [
      { key: 'A', text: 'Core and distribution' },
      { key: 'B', text: 'access and WAN' },
      { key: 'C', text: 'distribution and access' },
      { key: 'D', text: 'core and WAN' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โมเดลลำดับชั้นของ Cisco\n\n🔹 Three-tier (3 ชั้น)\n• Access → ผู้ใช้/AP/เครื่องพิมพ์เสียบ ทำ VLAN, PoE, port security\n• Distribution → รวมสวิตช์ access, ทำ inter-VLAN routing, ACL, นโยบาย, FHRP\n• Core → backbone ความเร็วสูง ส่งต่อแพ็กเก็ตอย่างเดียว\n\n🔹 Two-tier / Collapsed core (2 ชั้น)\n• ยุบ Core + Distribution รวมเป็นอุปกรณ์ชุดเดียว ⭐\n• เหลือ Access + Collapsed core\n\n✅ ทำไม A ถูก: ชื่อ "collapsed core" มาจากการที่ชั้น core ถูกยุบเข้ากับชั้น distribution — ประหยัดอุปกรณ์ในขณะที่ยังได้ประโยชน์ส่วนใหญ่ของโมเดลลำดับชั้น\n\n❌ ทำไมข้ออื่นผิด:\nB. WAN ไม่ใช่ชั้นในโมเดลแคมปัส (เป็นบล็อกขอบที่เชื่อมออกภายนอก)\nC. ถ้ายุบ distribution เข้ากับ access จะไม่เรียกว่า collapsed "core" — และ access ไม่เคยถูกยุบเพราะต้องมีพอร์ตให้ผู้ใช้เสียบเสมอ\nD. core ไม่ได้ยุบรวมกับ WAN\n\n📗 จำไว้สอบ: collapsed core = 2-tier = Core + Distribution รวมกัน + Access แยกอยู่',
  },
  {
    id: 120,
    kind: 'single',
    prompt: 'What is a characteristic of a SOHO network?',
    options: [
      { key: 'A', text: 'includes at least three tiers of devices to provide load balancing and redundancy' },
      { key: 'B', text: 'connects each switch to every other switch in the network' },
      { key: 'C', text: 'enables multiple users to share a single broadband connection' },
      { key: 'D', text: 'provides high throughput access for 1000 or more users' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — SOHO = Small Office / Home Office\n• ผู้ใช้ไม่กี่คน มักไม่เกิน 10–20 คน\n• อุปกรณ์มักเป็นกล่องเดียว "all-in-one" ที่รวมเราเตอร์ + สวิตช์ + AP + ไฟร์วอลล์ + NAT ไว้ด้วยกัน\n• เชื่อมออกอินเทอร์เน็ตด้วยลิงก์ broadband เส้นเดียว (cable/DSL/fiber) แล้วให้ทุกคนใช้ร่วมกันผ่าน NAT/PAT ⭐\n• งบจำกัด ไม่มีความซ้ำซ้อน ไม่มีเจ้าหน้าที่ไอทีประจำ\n\n✅ ทำไม C ถูก: การให้ผู้ใช้หลายคนแชร์การเชื่อมต่อ broadband เส้นเดียวคือลักษณะเด่นที่สุดของเครือข่าย SOHO\n\n❌ ทำไมข้ออื่นผิด:\nA. สถาปัตยกรรมสามชั้นพร้อม load balancing และความซ้ำซ้อนเป็นของเครือข่ายองค์กรขนาดใหญ่\nB. การต่อสวิตช์ทุกตัวเข้าหากันทั้งหมดคือ full mesh ซึ่งใช้ในดาต้าเซ็นเตอร์/WAN ไม่ใช่ SOHO (ที่มักมีสวิตช์แค่ตัวเดียว)\nD. การรองรับผู้ใช้ 1000 คนขึ้นไปคือเครือข่ายระดับองค์กร ไม่ใช่ SOHO\n\n📗 จำไว้สอบ: SOHO = กล่องเดียวรวมทุกอย่าง + broadband เส้นเดียว + NAT + ผู้ใช้ไม่กี่คน',
  },
  {
    id: 121,
    kind: 'single',
    prompt: 'What is the role of disaggregation in controller-based networking?',
    options: [
      { key: 'A', text: 'It divides the control-plane and data-plane functions.' },
      { key: 'B', text: 'It streamlines traffic handling by assigning individual devices to perform either Layer 2 or Layer 3 functions' },
      { key: 'C', text: 'It summarizes the routes between the core and distribution layers of the network topology' },
      { key: 'D', text: 'It enables a network topology to quickly adjust from a ring network to a star network' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — disaggregation คือการ "แยกส่วนที่เคยรวมอยู่ในกล่องเดียวออกจากกัน"\n\n🔹 เครือข่ายแบบดั้งเดิม\n• เราเตอร์/สวิตช์แต่ละตัวมีทั้ง control plane (คิดเส้นทางเอง) และ data plane (ส่งต่อเอง) อยู่ในกล่องเดียว\n• อุปกรณ์ทุกตัวต้องคำนวณเส้นทางเองแยกกัน\n\n🔹 เครือข่ายแบบมี controller (SDN)\n• ดึง control plane ออกมารวมไว้ที่ controller ⭐\n• อุปกรณ์เหลือทำแค่ data plane (ส่งต่อแพ็กเก็ตตามที่ controller สั่ง)\n• ผลลัพธ์: มองเห็นภาพรวมทั้งเครือข่ายจากจุดเดียว ตั้งนโยบายพร้อมกันทุกอุปกรณ์ และเปลี่ยนพฤติกรรมเครือข่ายด้วยซอฟต์แวร์ได้\n\n✅ ทำไม A ถูก: disaggregation ในบริบท controller-based networking หมายถึงการแยกหน้าที่ control plane ออกจาก data plane ตรงตามนิยาม\n\n❌ ทำไมข้ออื่นผิด:\nB. การกำหนดให้อุปกรณ์ทำเฉพาะงานชั้น 2 หรือชั้น 3 เป็นเรื่องของการออกแบบลำดับชั้น ไม่ใช่ disaggregation\nC. route summarization เป็นเทคนิคของโปรโตคอลเราต์ ไม่เกี่ยวข้อง\nD. การเปลี่ยนโทโพโลยีทางกายภาพจาก ring เป็น star ไม่ใช่สิ่งที่ SDN ทำ\n\n📗 จำไว้สอบ: disaggregation = แยก control plane ออกจาก data plane • control ไปอยู่ที่ controller, data ยังอยู่ที่อุปกรณ์',
  },
  {
    id: 122,
    kind: 'single',
    prompt: 'What is a function performed by a web server?',
    options: [
      { key: 'A', text: 'send and retrieve email from client devices' },
      { key: 'B', text: 'securely store files for FTP access' },
      { key: 'C', text: "authenticate and authorize a user's identity" },
      { key: 'D', text: 'provide an application that is transmitted over HTTP' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เซิร์ฟเวอร์แต่ละชนิดมีหน้าที่เฉพาะ\n• Web server → ให้บริการหน้าเว็บและแอปพลิเคชันผ่าน HTTP (TCP 80) / HTTPS (TCP 443) ⭐\n• Mail server → รับส่งอีเมล ผ่าน SMTP (25), POP3 (110), IMAP (143)\n• File / FTP server → เก็บและแชร์ไฟล์ ผ่าน FTP (20/21), SFTP (22), SMB (445)\n• AAA server → ยืนยันตัวตนและกำหนดสิทธิ์ ผ่าน RADIUS (1812/1813) หรือ TACACS+ (49)\n• DNS server → แปลงชื่อเป็น IP ผ่าน UDP/TCP 53\n• DHCP server → แจกที่อยู่ IP ผ่าน UDP 67/68\n\n✅ ทำไม D ถูก: หน้าที่หลักของ web server คือส่งมอบเนื้อหาและแอปพลิเคชันให้เบราว์เซอร์ผ่านโปรโตคอล HTTP/HTTPS\n\n❌ ทำไมข้ออื่นผิด:\nA. การรับส่งอีเมลเป็นงานของ mail server\nB. การเก็บไฟล์เพื่อเข้าถึงผ่าน FTP เป็นงานของ file/FTP server\nC. การยืนยันตัวตนและกำหนดสิทธิ์เป็นงานของ AAA server (RADIUS/TACACS+/ISE)\n\n📗 จำไว้สอบ: web=HTTP 80/HTTPS 443 | mail=SMTP 25/POP3 110/IMAP 143 | FTP=20/21 | AAA=RADIUS 1812',
  },
  {
    id: 123,
    kind: 'single',
    image: v4q123,
    prompt: 'Refer to the exhibit. Site A was recently connected to site B over a new single-mode fiber path. Users at site A report intermittent connectivity issues with applications hosted at site B. What is the reason for the problem?',
    options: [
      { key: 'A', text: 'Physical network errors are being transmitted between the two sites.' },
      { key: 'B', text: 'Heavy usage is causing high latency.' },
      { key: 'C', text: 'The wrong cable type was used to make the connection.' },
      { key: 'D', text: 'An incorrect type of transceiver has been inserted into a device on the link' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ต้องจับคู่ SFP ให้ตรงกับชนิดของสายไฟเบอร์และตรงกันทั้งสองฝั่ง\n• SFP-SR (Short Reach) → ออกแบบมาสำหรับ multimode fiber ระยะสูงสุดประมาณ 300 เมตร ใช้ความยาวคลื่น 850 nm\n• SFP-LR (Long Reach) → ออกแบบมาสำหรับ single-mode fiber ระยะสูงสุด 10 กิโลเมตร ใช้ความยาวคลื่น 1310 nm\n• ทั้งสองฝั่งของลิงก์ต้องใช้ชนิดเดียวกันเสมอ มิฉะนั้นความยาวคลื่นไม่ตรงกัน สัญญาณจะเพี้ยน\n\n🔍 อ่าน exhibit เปรียบเทียบสองฝั่ง\n• ระยะทางระหว่างไซต์ = 7 กิโลเมตร และเป็น single-mode fiber\n• SiteA → media type is SFP-SR ⛔ (SR รองรับได้แค่ ~300 เมตร บน multimode)\n• SiteB → media type is SFP-LR ✔ (ถูกต้องสำหรับ single-mode 7 กม.)\n• reliability ทั้งสองฝั่ง = 255/255 → ยังไม่มี error สะสมให้เห็นชัด\n• อัตราใช้งานแค่ ~264 Mbps บนลิงก์ 10 Gbps → ไม่ใช่ปัญหาแบนด์วิดท์\n\n✅ ทำไม D ถูก: SiteA ใส่ SFP-SR ผิดชนิด — ทั้งไม่ตรงกับสายและระยะทาง 7 กม. เกินความสามารถของ SR ไปไกลมาก ทำให้สัญญาณอ่อนและติด ๆ ดับ ๆ\n\n❌ ทำไมข้ออื่นผิด:\nA. reliability = 255/255 ทั้งสองฝั่ง แสดงว่ายังไม่มี error สะสมจำนวนมาก (ต่างจากข้อ 75 ที่ SiteA เป็น 166/255)\nB. ใช้แบนด์วิดท์เพียง ~2.6% ของ 10 Gbps ไม่มีทางเกิดคอขวด\nC. โจทย์ระบุว่าเป็น single-mode fiber ซึ่งถูกต้องแล้วสำหรับระยะ 7 กม. — ที่ผิดคือทรานซีฟเวอร์ ไม่ใช่สาย\n\n📗 จำไว้สอบ: SR=multimode ≤300 ม. (850 nm) | LR=single-mode ≤10 กม. (1310 nm) | ZX=single-mode ≤70 กม. • สองฝั่งต้องเหมือนกัน',
  },
  {
    id: 124,
    kind: 'single',
    prompt: 'Which protocol uses the SSL?',
    options: [
      { key: 'A', text: 'SSH' },
      { key: 'B', text: 'HTTPS' },
      { key: 'C', text: 'HTTP' },
      { key: 'D', text: 'Telnet' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — SSL/TLS คือชั้นเข้ารหัสที่ทำงานอยู่ระหว่างชั้น transport กับชั้น application\n• SSL (Secure Sockets Layer) เป็นรุ่นเก่า → ปัจจุบันถูกแทนที่ด้วย TLS (Transport Layer Security) แล้ว แต่คนยังเรียกติดปากว่า SSL\n• ให้บริการ 3 อย่าง: เข้ารหัสข้อมูล, ตรวจสอบตัวตนเซิร์ฟเวอร์ด้วยใบรับรองดิจิทัล, ตรวจความสมบูรณ์ของข้อมูล\n\n🔹 โปรโตคอลที่ห่อด้วย SSL/TLS\n• HTTPS = HTTP + TLS → TCP 443 ⭐\n• FTPS = FTP + TLS | SMTPS, IMAPS, LDAPS\n• AnyConnect SSL VPN\n\n✅ ทำไม B ถูก: HTTPS คือ HTTP ที่ถูกห่อด้วย SSL/TLS โดยตรง — ตัวอักษร S ท้ายชื่อมาจากคำว่า Secure ซึ่งได้มาจาก SSL/TLS นั่นเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. SSH มีกลไกเข้ารหัสและแลกเปลี่ยนกุญแจเป็นของตัวเอง ไม่ได้พึ่ง SSL/TLS (ใช้ TCP 22)\nC. HTTP (TCP 80) เป็น plaintext ไม่มีการเข้ารหัสเลย — ดักอ่านได้ทั้งหมด\nD. Telnet (TCP 23) เป็น plaintext เช่นกัน รหัสผ่านที่พิมพ์จะถูกดักอ่านได้ จึงควรใช้ SSH แทนเสมอ\n\n📗 จำไว้สอบ: HTTPS=443 (HTTP+TLS) | HTTP=80 | SSH=22 (เข้ารหัสเอง) | Telnet=23 (ไม่เข้ารหัส)',
  },
  {
    id: 125,
    kind: 'single',
    prompt: 'Why is UDP more suitable than TCP for applications that require low latency such as VoIP?',
    options: [
      { key: 'A', text: 'UDP reliably guarantees delivery of all packets: TCP drops packets under heavy load' },
      { key: 'B', text: 'UDP uses sequencing data for packets to arrive in order TCP offers the capability to receive packets in random order' },
      { key: 'C', text: 'TCP uses congestion control for efficient packet delivery: UDP uses flow control mechanisms for the delivery of packets' },
      { key: 'D', text: 'TCP sends an acknowledgement for every packet received: UDP operates without acknowledgments' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ทำไม VoIP จึงต้องใช้ UDP\n• เสียงต้องมาถึงหูตรงเวลาแบบต่อเนื่อง (ควรมี latency ต่ำกว่า 150 ms ทางเดียว)\n• ถ้าแพ็กเก็ตเสียงหายไป 1–2 ชิ้น หูแทบไม่ได้ยินความต่าง\n• แต่ถ้ามัวรอ ACK และส่งซ้ำแบบ TCP เสียงจะมาช้าและกระตุก ฟังไม่รู้เรื่อง ⭐\n→ ในงานเรียลไทม์ "มาช้า" แย่กว่า "หายไปเลย"\n\n✅ ทำไม D ถูก: TCP ต้องรอ acknowledgment สำหรับข้อมูลที่ส่งไป และส่งซ้ำเมื่อไม่ได้รับ ทำให้เกิดความหน่วง ส่วน UDP ไม่มี ACK เลย จึงส่งต่อเนื่องได้โดยไม่สะดุด — เป็นเหตุผลตรงที่สุดที่ VoIP เลือก UDP\n\n❌ ทำไมข้ออื่นผิด:\nA. กลับด้านสนิท — UDP ไม่รับประกันการส่งถึง ส่วน TCP ต่างหากที่รับประกัน\nB. กลับด้าน — TCP ต่างหากที่ใช้ sequence number จัดเรียงลำดับ ส่วน UDP ไม่จัดเรียงให้\nC. กลับด้าน — flow control (windowing) เป็นของ TCP ไม่ใช่ UDP และ UDP ไม่มีกลไกควบคุมใด ๆ ทั้งสิ้น\n\n💡 เกร็ด: VoIP ใช้ RTP บน UDP โดยตัว RTP มี sequence number และ timestamp ของตัวเองไว้ให้ปลายทางจัดลำดับและกำจัด jitter\n\n📗 จำไว้สอบ: VoIP/วิดีโอสด = UDP เพราะไม่ต้องรอ ACK • เรียลไทม์: มาช้า แย่กว่า หายไป',
  },
  {
    id: 126,
    kind: 'multi',
    prompt: 'What are the two functions of SSIDs? (Choose two.)',
    options: [
      { key: 'A', text: 'uses the maximum of 32 alphanumeric characters' },
      { key: 'B', text: 'controls the speed of the Wi-Fi network' },
      { key: 'C', text: 'used exclusively with controller-based Wi-Fi networks' },
      { key: 'D', text: 'supports a single access point' },
      { key: 'E', text: 'broadcasts by default' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — SSID คือชื่อเครือข่ายไร้สาย ทำหน้าที่ให้ไคลเอนต์รู้ว่าจะเข้าเครือข่ายไหน\n• ยาวสูงสุด 32 อักขระตามมาตรฐาน IEEE 802.11 ⭐\n• เป็น case-sensitive\n• โดยค่าเริ่มต้น AP จะประกาศ SSID ออกมาใน beacon frame ทุก ~100 มิลลิวินาที ⭐ (ปิดได้แต่ไม่ใช่ค่าตั้งต้น)\n\n✅ ทำไม A ถูก: ข้อจำกัดความยาว 32 อักขระเป็นข้อกำหนดตายตัวของมาตรฐาน\n✅ ทำไม E ถูก: การประกาศ SSID เป็นพฤติกรรมเริ่มต้น เพื่อให้ไคลเอนต์มองเห็นและเลือกเชื่อมต่อได้\n\n❌ ทำไมข้ออื่นผิด:\nB. ความเร็วของเครือข่ายขึ้นกับมาตรฐาน 802.11 ที่ใช้ ความกว้างช่อง และคุณภาพสัญญาณ — SSID เป็นแค่ชื่อ ไม่ควบคุมความเร็ว\nC. SSID ใช้ได้ทั้งกับ autonomous AP และ controller-based เหมือนกัน คำว่า "exclusively" ทำให้ผิด\nD. AP หลายตัวใช้ SSID เดียวกันได้ (และควรทำ) เพื่อสร้าง ESS ที่ให้ไคลเอนต์ roam ข้าม AP ได้ไร้รอยต่อ\n\n📗 จำไว้สอบ: SSID ≤ 32 อักขระ + broadcast โดยค่าเริ่มต้น + หลาย AP ใช้ SSID เดียวกันได้ (ESS)',
  },
  {
    id: 127,
    kind: 'multi',
    prompt: 'Which two characteristics describe the access layer in a three-tier network architecture? (Choose two.)',
    options: [
      { key: 'A', text: 'serves as the network aggregation point' },
      { key: 'B', text: 'physical connection point for a LAN printer' },
      { key: 'C', text: 'designed to meet continuous redundant uptime requirements' },
      { key: 'D', text: 'layer at which a wireless access point connects to the wired network' },
      { key: 'E', text: 'provides a boundary between Layer 2 and Layer 3 communications' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — access layer คือ "ชั้นที่อุปกรณ์ปลายทางเสียบสาย"\n\n🔹 อุปกรณ์ที่ต่อที่ access layer\n• PC, โน้ตบุ๊ก\n• เครื่องพิมพ์ LAN ⭐\n• IP phone (พร้อม PoE)\n• Access Point ⭐ (AP เป็นอุปกรณ์ที่ต้องเสียบเข้าเครือข่ายใช้สายเหมือนอุปกรณ์ปลายทางตัวหนึ่ง)\n• กล้อง IP, อุปกรณ์ IoT\n\n🔹 ฟีเจอร์ที่ทำที่ access layer\n• กำหนด VLAN ให้พอร์ต, PoE, port security, 802.1X, PortFast, BPDU Guard\n\n✅ ทำไม B ถูก: เครื่องพิมพ์ LAN เป็นอุปกรณ์ปลายทางที่เสียบเข้าที่ access layer\n✅ ทำไม D ถูก: AP เชื่อมเข้าเครือข่ายใช้สายผ่านพอร์ตของสวิตช์ access (และรับ PoE จากที่นั่น)\n\n❌ ทำไมข้ออื่นผิด:\nA. จุดรวม (aggregation point) คือ distribution layer ที่รับสวิตช์ access หลายตัวมารวมกัน\nC. ความต้องการ uptime ต่อเนื่องพร้อมความซ้ำซ้อนสูงสุดเป็นข้อกำหนดของ core layer\nE. รอยต่อระหว่างชั้น 2 กับชั้น 3 อยู่ที่ distribution layer (จุดที่ทำ inter-VLAN routing)\n\n📗 จำไว้สอบ: access=ปลายทางเสียบ (PC, printer, AP, phone) | distribution=รวม+L2/L3 boundary | core=เร็ว+ซ้ำซ้อน',
  },
  {
    id: 128,
    kind: 'single',
    prompt: 'Which PoE mode enables powered-devices detection and guarantees power when the device detected?',
    options: [
      { key: 'A', text: 'auto' },
      { key: 'B', text: 'static' },
      { key: 'C', text: 'dynamic' },
      { key: 'D', text: 'active' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โหมด PoE บนพอร์ตสวิตช์ Cisco (คำสั่ง power inline …)\n\n🔹 power inline auto (ค่าเริ่มต้น)\n• ตรวจจับอุปกรณ์ก่อน แล้วค่อยจ่ายไฟตาม class ที่อุปกรณ์ประกาศ\n• พลังงานถูกจองจาก "งบรวม" ตอนที่อุปกรณ์เสียบเข้ามาเท่านั้น\n• ถ้างบพลังงานหมดก่อน อุปกรณ์ที่เสียบทีหลังอาจไม่ได้ไฟ → ไม่รับประกัน\n\n🔹 power inline static ⭐\n• ตรวจจับอุปกรณ์เช่นกัน แต่ "จองพลังงานไว้ล่วงหน้า" ตั้งแต่ตอนคอนฟิก แม้ยังไม่มีอุปกรณ์เสียบ\n• เมื่อตรวจพบอุปกรณ์ พลังงานที่จองไว้พร้อมจ่ายทันที = รับประกันได้แน่นอน\n• เหมาะกับอุปกรณ์สำคัญที่ห้ามดับ เช่น IP phone ของแผนกฉุกเฉิน กล้องรักษาความปลอดภัย\n\n🔹 power inline never → ปิด PoE บนพอร์ตนั้นถาวร\n\n✅ ทำไม B ถูก: โหมด static ทั้งตรวจจับอุปกรณ์และรับประกันพลังงานเพราะจองไว้ล่วงหน้าแล้ว\n\n❌ ทำไมข้ออื่นผิด:\nA. auto ตรวจจับได้แต่ไม่รับประกัน — แข่งกันใช้งบพลังงานรวม\nC. ไม่มีโหมดชื่อ dynamic\nD. ไม่มีโหมดชื่อ active\n\n📗 จำไว้สอบ: auto=ตรวจจับ+จ่ายตามที่เหลือ | static=จองไว้ล่วงหน้า รับประกัน | never=ปิด PoE',
  },
  {
    id: 129,
    kind: 'single',
    image: v4q129,
    prompt: 'Refer to the exhibit. The router has been configured with a supernet to accommodate the requirement for 380 users on a subnet. The requirement already considers 30% future growth. Which configuration verifies the IP subnet on router R4?',
    options: [
      { key: 'A', text: 'Subnet: 10.7.54.0 | Mask: 255.255.128.0 | Broadcast: 10.5.55.255 | Range: 10.7.54.1 - 10.7.55.254' },
      { key: 'B', text: 'Subnet: 10.7.54.0 | Mask: 255.255.255.0 | Broadcast: 10.7.54.255 | Range: 10.7.54.1 - 10.7.55.254' },
      { key: 'C', text: 'Subnet: 10.7.54.0 | Mask: 255.255.254.0 | Broadcast: 10.7.54.255 | Range: 10.7.54.1 - 10.7.55.254' },
      { key: 'D', text: 'Subnet: 10.7.54.0 | Mask: 255.255.254.0 | Broadcast: 10.7.55.255 | Range: 10.7.54.1 - 10.7.55.254' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — supernet คือการรวมหลายซับเน็ตเข้าด้วยกันโดยยืม mask ให้สั้นลง เพื่อให้โฮสต์ทั้งหมดอยู่ในซับเน็ตเดียว\n\n1️⃣ ต้องการกี่โฮสต์ — 380 (รวมการเติบโต 30% แล้ว)\n• /24 → 254 โฮสต์ ✘ ไม่พอ\n• /23 → 2^9 − 2 = 510 โฮสต์ ✔ พอดี\n→ mask = 255.255.254.0\n\n2️⃣ คำนวณขอบเขตของ 10.7.54.0/23\n• block size ที่อ็อกเท็ต 3 = 256 − 254 = 2 → ขอบเขตเป็นเลขคู่: 52, 54, 56 …\n• network = 10.7.54.0\n• ช่วงทั้งหมดครอบ 2 อ็อกเท็ต: 10.7.54.0 ถึง 10.7.55.255\n• broadcast = 10.7.55.255 ⭐ (ตัวสุดท้ายของช่วง)\n• usable = 10.7.54.1 ถึง 10.7.55.254\n\n✅ ทำไม D ถูก: ถูกครบทั้ง 4 ค่า — mask /23, network .54.0, broadcast 10.7.55.255 และช่วงโฮสต์ที่ใช้ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. mask 255.255.128.0 คือ /17 ซึ่งใหญ่เกินไปมหาศาล (32,766 โฮสต์) และ broadcast ที่เขียนไว้ก็ผิด subnet (10.5.x.x)\nB. mask /24 ให้แค่ 254 โฮสต์ ไม่พอ 380 คน และ broadcast .54.255 ก็ขัดกับช่วงที่เขียนว่าถึง .55.254\nC. mask ถูก (/23) แต่ระบุ broadcast เป็น 10.7.54.255 ซึ่งผิด — บน /23 ตัวนั้นเป็นที่อยู่โฮสต์ปกติ broadcast จริงคือ 10.7.55.255\n\n📗 จำไว้สอบ: /23 = 510 โฮสต์ ครอบ 2 อ็อกเท็ตที่ 3 (คู่-คี่) • broadcast = ตัวสุดท้ายของช่วงทั้งหมด',
  },
  {
    id: 130,
    kind: 'single',
    image: v4q130,
    prompt: 'Refer to the exhibit. Configurations for the switch and PCs are complete. Which configuration must be applied so that VLANs 2 and 3 communicate back and forth?',
    options: [
      { key: 'A', text: 'interface GigabitEthernet0/0 / ip address 10.10.2.10 255.255.252.0' },
      { key: 'B', text: 'interface GigabitEthernet0/0.10 / encapsulation dot1Q 3 / ip address 10.10.2.10 255.255.254.0' },
      { key: 'C', text: 'interface GigabitEthernet0/0.3 / encapsulation dot1Q 3 native / ip address 10.10.2.10 255.255.252.0' },
      { key: 'D', text: 'interface GigabitEthernet0/0.3 / encapsulation dot1Q 10 / ip address 10.10.2.10 255.255.255.252' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — router-on-a-stick: เราเตอร์ขาเดียวทำ inter-VLAN routing ผ่านซับอินเทอร์เฟซ VLAN ละหนึ่งตัว\n• encapsulation dot1Q <vlan-id> ต้องระบุหมายเลข VLAN ให้ตรงกับ VLAN จริง\n• เลขซับอินเทอร์เฟซ (เช่น .10) เป็นเพียงป้ายกำกับในเครื่อง ไม่จำเป็นต้องตรงกับหมายเลข VLAN (แม้จะนิยมตั้งให้ตรงเพื่อความอ่านง่าย)\n• คีย์เวิร์ด native ใช้เฉพาะกับ VLAN ที่เป็น native ของ trunk เท่านั้น\n\n🔍 อ่าน exhibit\n• Gi0/0.2 ถูกตั้งไว้แล้ว: encapsulation dot1Q 2 + ip 10.10.10.10 255.255.255.0 → รองรับ VLAN 2 เรียบร้อย\n• Native vlan ของ trunk = 10\n• PC ใน VLAN 3 มีที่อยู่ 10.10.2.1/23 → เครือข่าย 10.10.2.0/23 → mask ต้องเป็น 255.255.254.0\n→ สิ่งที่ขาดคือซับอินเทอร์เฟซสำหรับ VLAN 3\n\n✅ ทำไม B ถูก: ตรวจครบทุกจุด\n• encapsulation dot1Q 3 → ตรงกับ VLAN 3 ✔\n• mask 255.255.254.0 (/23) → ตรงกับซับเน็ตของ PC ใน VLAN 3 ✔\n• เลขซับอินเทอร์เฟซเป็น .10 ซึ่งไม่ตรงกับ VLAN — ดูแปลกแต่ใช้งานได้จริง เพราะสิ่งที่กำหนด VLAN คือคำสั่ง encapsulation ไม่ใช่เลขซับอินเทอร์เฟซ\n\n❌ ทำไมข้ออื่นผิด:\nA. ตั้ง IP บนอินเทอร์เฟซหลักโดยไม่มี encapsulation dot1Q → รับเฉพาะเฟรมที่ไม่มีแท็ก ทำ inter-VLAN routing ไม่ได้ และ mask /22 ก็ผิด\nC. ใส่คีย์เวิร์ด native กับ VLAN 3 ซึ่งผิด (native VLAN ของ trunk คือ 10) และ mask /22 ก็ไม่ตรงกับ /23 ของ PC\nD. encapsulation dot1Q 10 คือ VLAN ผิด (ต้องเป็น 3) และ mask /30 ให้โฮสต์ได้แค่ 2 ตัว\n\n📗 จำไว้สอบ: VLAN ถูกกำหนดโดย "encapsulation dot1Q x" ไม่ใช่เลขซับอินเทอร์เฟซ • mask ต้องตรงกับซับเน็ตของ PC',
  },
  {
    id: 131,
    kind: 'drag',
    image: v4q131,
    prompt: 'Drag and drop the IPv6 address type characteristics from the left to the right.',
    categories: [
      { name: 'Global Unicast Address', items: ['equivalent to public IPv4 addresses', 'routable and reachable via the Internet'] },
      { name: 'Link-Local Address', items: ['configured only once per interface', 'attached to a single subnet'] },
    ],
    explanation:
      '📘 แนวคิด — เทียบ Global Unicast กับ Link-Local\n\n🔹 Global Unicast Address (GUA) — 2000::/3\n• เทียบเท่ากับ public IPv4 ⭐ — ได้รับจัดสรรจาก RIR/ISP และไม่ซ้ำกันทั้งโลก\n• เราต์ได้และเข้าถึงได้จากทุกที่บนอินเทอร์เน็ต ⭐\n• อินเทอร์เฟซเดียวมี GUA ได้หลายที่อยู่พร้อมกัน\n\n🔹 Link-Local Address — FE80::/10\n• สร้างขึ้นเองอัตโนมัติทันทีที่เปิด IPv6 บนอินเทอร์เฟซ\n• ต่ออินเทอร์เฟซหนึ่งมีได้ "หนึ่งเดียว" ⭐ (ถ้ากำหนดใหม่ด้วยมือจะทับของเดิม)\n• ใช้ได้เฉพาะบนลิงก์/ซับเน็ตเดียวเท่านั้น เราเตอร์ไม่ส่งต่อ ⭐\n• ใช้เป็น next-hop ของโปรโตคอลเราต์ (OSPFv3/EIGRPv6) และใช้ทำ NDP\n\n🔍 จับคู่:\n• equivalent to public IPv4 addresses → Global Unicast\n• routable and reachable via the Internet → Global Unicast\n• configured only once per interface → Link-Local\n• attached to a single subnet → Link-Local\n\n📗 จำไว้สอบ: GUA 2000::/3 = public เราต์ทั่วโลก | FE80::/10 = หนึ่งเดียวต่ออินเทอร์เฟซ อยู่ลิงก์เดียว',
  },
  {
    id: 132,
    kind: 'drag',
    image: v4q132,
    prompt: 'Refer to the exhibit. The IP address configurations must be completed on the DC-1 and HQ-1 routers based on these requirements: DC-1 Gi1/0 must be the last usable address on a /30; DC-1 Gi1/1 must be the first usable address on a /29; DC-1 Gi1/2 must be the last usable address on a /28; HQ-1 Gi1/3 must be the last usable address on a /29. Drag and drop the commands from the left onto the destination interfaces on the right. Not all commands are used.',
    categories: [
      { name: 'DC-1 Gi1/0', items: ['ip address 209.165.202.130 255.255.255.252'] },
      { name: 'DC-1 Gi1/1', items: ['ip address 192.168.4.9 255.255.255.248'] },
      { name: 'DC-1 Gi1/2', items: ['ip address 192.168.3.14 255.255.255.240'] },
      { name: 'HQ-1 Gi1/3', items: ['ip address 192.168.3.14 255.255.255.248'] },
      {
        name: 'ไม่ใช้ (ตัวลวง)',
        items: [
          'ip address 209.165.202.129 255.255.255.252',
          'ip address 209.165.202.131 255.255.255.252',
          'ip address 192.168.4.13 255.255.255.240',
        ],
      },
    ],
    explanation:
      '📘 แนวคิด — คำนวณ network / usable / broadcast ของแต่ละ mask แล้วจับคู่กับเงื่อนไข\n\n1️⃣ DC-1 Gi1/0 = last usable บน /30 (255.255.255.252, block 4)\n• ตัวเลือกที่เป็น /30 มีสามตัว: 209.165.202.129, .130, .131\n• บล็อกที่ครอบทั้งสามคือ 209.165.202.128/30\n• network .128 | usable .129 และ .130 | broadcast .131\n→ last usable = 209.165.202.130 ✔ (.129 คือ first usable, .131 คือ broadcast ใช้ไม่ได้)\n\n2️⃣ DC-1 Gi1/1 = first usable บน /29 (255.255.255.248, block 8)\n• ตัวเลือกที่เป็น /29: 192.168.4.9 และ 192.168.3.14\n• 192.168.4.9 → บล็อก 192.168.4.8/29 → usable .9–.14 → .9 = first usable ✔\n• 192.168.3.14 → บล็อก 192.168.3.8/29 → usable .9–.14 → .14 = last usable (ไม่ใช่ first)\n→ 192.168.4.9 255.255.255.248 ✔\n\n3️⃣ DC-1 Gi1/2 = last usable บน /28 (255.255.255.240, block 16)\n• ตัวเลือกที่เป็น /28: 192.168.3.14 และ 192.168.4.13\n• 192.168.3.14 → บล็อก 192.168.3.0/28 → usable .1–.14 → .14 = last usable ✔\n• 192.168.4.13 → บล็อก 192.168.4.0/28 → usable .1–.14 → .13 ไม่ใช่ตัวสุดท้าย ✘\n→ 192.168.3.14 255.255.255.240 ✔\n\n4️⃣ HQ-1 Gi1/3 = last usable บน /29\n• 192.168.3.14 255.255.255.248 → บล็อก 192.168.3.8/29 → usable .9–.14 → .14 = last usable ✔\n\n💡 สังเกตกับดัก: ที่อยู่ 192.168.3.14 ปรากฏสองครั้งแต่ mask ต่างกัน (/28 กับ /29) และให้ผลลัพธ์ต่างกัน — ต้องอ่าน mask ทุกครั้ง อย่าดูแค่ตัวเลข IP\n\n📗 จำไว้สอบ: /30 block 4 | /29 block 8 | /28 block 16 • first usable = network+1, last usable = broadcast−1',
  },
  {
    id: 133,
    kind: 'single',
    prompt: 'How is RFC 1918 addressing used in a network?',
    options: [
      { key: 'A', text: 'They are used to access the Internet from the internal network without conversion.' },
      { key: 'B', text: 'They are used in place of public addresses for Increased security.' },
      { key: 'C', text: 'They are used with NAT to preserve public IPv4 addresses.' },
      { key: 'D', text: 'They are used by Internet Service Providers to route over the Internet.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — RFC 1918 กับ NAT ทำงานเป็นคู่กันเสมอ\n• ภายในองค์กรใช้ที่อยู่ส่วนตัว (10/8, 172.16/12, 192.168/16) ได้เต็มที่ ฟรีและไม่จำกัดจำนวน\n• เมื่อต้องออกอินเทอร์เน็ต เราเตอร์ขอบทำ NAT/PAT แปลงที่อยู่ส่วนตัวเป็น public IP\n• PAT (NAT overload) ใช้ public IP เพียงตัวเดียวรองรับเครื่องภายในได้หลายพันเครื่อง โดยแยกแต่ละเซสชันด้วยหมายเลข port ⭐\n→ ผลลัพธ์: ประหยัด public IPv4 ได้มหาศาล\n\n✅ ทำไม C ถูก: อธิบายความสัมพันธ์ที่ถูกต้อง — ใช้ที่อยู่ RFC 1918 คู่กับ NAT เพื่ออนุรักษ์ public IPv4\n\n❌ ทำไมข้ออื่นผิด:\nA. คำว่า "without conversion" ผิด — ที่อยู่ส่วนตัวออกอินเทอร์เน็ตตรง ๆ ไม่ได้เลย ต้องแปลงเสมอ\nB. ความปลอดภัยเป็นผลพลอยได้ ไม่ใช่วัตถุประสงค์ — NAT ไม่ได้เข้ารหัสหรือตรวจสอบอะไร และไม่ควรถือเป็นมาตรการความปลอดภัย\nD. ISP ไม่เราต์ที่อยู่ RFC 1918 บนอินเทอร์เน็ต — ตรงกันข้าม ISP จะกรองทิ้งที่ขอบ (bogon filtering)\n\n📗 จำไว้สอบ: RFC 1918 + NAT/PAT = ประหยัด public IPv4 • ไม่มี NAT = ออกเน็ตไม่ได้',
  },
  {
    id: 134,
    kind: 'drag',
    image: v4q134,
    prompt: 'Drag and drop the IPv6 address types from the left onto their descriptions on the right.',
    categories: [
      { name: 'multicast address used only locally within the site', items: ['FF05::23:becf:22:1111'] },
      {
        name: 'address that is automatically created on a link when IPv6 is enabled on an interface',
        items: ['FE80::abcdf:ffff:12de:3992'],
      },
      { name: 'address that is prohibited from routing to the Internet', items: ['FD00:0000:0000:1a2d:a153:3992:a19d:ccca'] },
      { name: 'address that is unique and reserved for documentation purposes', items: ['2001:DB8::bced:1234:456d:aacc'] },
    ],
    explanation:
      '📘 แนวคิด — จำแนกจากอ็อกเท็ต/พรีฟิกซ์แรก แล้วจับคู่กับคำบรรยาย\n\n• FF05::23:becf:22:1111 → ขึ้นต้น FF = multicast\n  หลัก 4 ตัวคือ scope: FF01=interface, FF02=link, FF05=site ⭐, FF08=organization, FF0E=global\n  → "multicast ที่ใช้เฉพาะภายในไซต์" ✔\n\n• FE80::abcdf:ffff:12de:3992 → FE80::/10 = link-local\n  สร้างขึ้นเองอัตโนมัติทันทีที่เปิด IPv6 บนอินเทอร์เฟซ ไม่ต้องคอนฟิกอะไรเลย ⭐\n  → "ที่อยู่ที่ถูกสร้างอัตโนมัติบนลิงก์เมื่อเปิด IPv6" ✔\n\n• FD00:0000:0000:1a2d:… → FD = Unique Local (FC00::/7)\n  ISP กรองทิ้งที่ขอบ ไม่มีทางเราต์ออกอินเทอร์เน็ต ⭐\n  → "ที่อยู่ที่ถูกห้ามเราต์ออกอินเทอร์เน็ต" ✔\n\n• 2001:DB8::bced:1234:456d:aacc → 2001:DB8::/32\n  บล็อกที่ IANA สงวนไว้สำหรับใช้ในเอกสาร/ตำรา (RFC 3849) เทียบเท่ากับ 192.0.2.0/24 ของ IPv4 ⭐\n  → "ที่อยู่ที่สงวนไว้สำหรับการทำเอกสาร" ✔\n\n📗 จำไว้สอบ: FF05=site multicast | FE80=link-local อัตโนมัติ | FD=ULA ห้ามออกเน็ต | 2001:DB8=สำหรับเอกสาร',
  },
  {
    id: 135,
    kind: 'single',
    image: v4q135,
    prompt: 'Refer to the exhibit. What is a reason for poor performance on the network interface?',
    options: [
      { key: 'A', text: 'The interface is receiving excessive broadcast traffic.' },
      { key: 'B', text: 'The bandwidth setting of the interface is misconfigured.' },
      { key: 'C', text: 'The cable connection between the two devices is faulty.' },
      { key: 'D', text: 'The interface is operating at a different speed than the connected device.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — อ่านตัวนับใน show interface เพื่อชี้ตัวปัญหา\n• CRC สูง → เฟรมมาถึงแต่ checksum ผิด = สัญญาณเสียหายระหว่างทาง (สายชำรุด หัวหลวม EMI รบกวน)\n• late collision สูง → duplex mismatch หรือสายยาวเกิน\n• input errors ≈ CRC → ยืนยันว่าปัญหาอยู่ที่ชั้นกายภาพ\n• lost carrier / interface resets → ลิงก์ล้มลุกคลุกคลาน\n\n🔍 อ่าน exhibit ทีละบรรทัด\n• 3,612,699 input errors, 3,612,699 CRC ⛔ — input errors เท่ากับ CRC เป๊ะ แปลว่า error ทั้งหมดมาจาก CRC ล้วน ๆ\n• 0 frame, 0 overrun, 0 ignored → ไม่ใช่ปัญหาบัฟเฟอร์หรือ alignment\n• 0 collisions, 0 late collision → ไม่ใช่ duplex mismatch\n• Full Duplex, 1000Mbps, link type is auto → ความเร็วและ duplex เจรจาสำเร็จเรียบร้อย\n• 5 lost carrier, 1 interface resets → ลิงก์เคยหลุดจริง\n\n✅ ทำไม C ถูก: CRC error จำนวนมหาศาลโดยไม่มี collision และไม่มี frame error เลย เป็นลายเซ็นคลาสสิกของ "ปัญหาสายกายภาพ" — สายชำรุด หัวต่อไม่แน่น หรือมีสัญญาณรบกวน\n\n❌ ทำไมข้ออื่นผิด:\nA. Received 67 broadcasts เท่านั้น — น้อยมาก ไม่ใช่ปัญหา broadcast storm\nB. คำสั่ง bandwidth มีผลแค่การคำนวณ metric ของโปรโตคอลเราต์และรายงาน SNMP ไม่กระทบทรูพุตจริง\nD. ถ้าความเร็วไม่ตรงกัน ลิงก์จะไม่ขึ้นเลย แต่ที่นี่ line protocol is up และเจรจาได้ 1000Mbps Full Duplex เรียบร้อย\n\n📗 จำไว้สอบ: CRC สูง + ไม่มี collision = สายเสีย | CRC + late collision = duplex mismatch',
  },
  {
    id: 136,
    kind: 'drag',
    image: v4q136,
    prompt: 'Drag and drop the IPv6 address descriptions from the left onto the IPv6 address types on the right. Not all options are used.',
    categories: [
      {
        name: 'Unique Local Addresses',
        items: ['IPv6 addresses that begin with FD', 'may be used by multiple organizations at the same time', 'private IPv6 addresses'],
      },
      { name: 'Link-Local Addresses', items: ['serve as next-hop addresses', 'unable to serve as destination addresses'] },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['IPv6 addresses in the format FF02::5'] },
    ],
    explanation:
      '📘 แนวคิด — เทียบ ULA กับ Link-Local\n\n🔹 Unique Local Address (ULA) — FC00::/7 ใช้จริง FD00::/8\n• ขึ้นต้นด้วย FD ในทางปฏิบัติทั้งหมด ⭐\n• เทียบเท่ากับ private IPv4 (RFC 1918) — เป็นที่อยู่ส่วนตัวของ IPv6\n• องค์กรหลายแห่งใช้พร้อมกันได้โดยไม่ชนกัน เพราะไม่มีการโฆษณาออกอินเทอร์เน็ต ⭐\n• เราต์ได้ภายในองค์กร ข้ามซับเน็ตได้\n\n🔹 Link-Local Address — FE80::/10\n• ใช้เป็น next-hop address ของโปรโตคอลเราต์ (OSPFv3, EIGRPv6) และของ static route ⭐\n• ใช้เป็นปลายทางของแพ็กเก็ตที่ต้องเดินทางข้ามลิงก์ไม่ได้ — เราเตอร์ไม่ส่งต่อ FE80:: ข้ามอินเทอร์เฟซ ⭐\n\n🔹 ตัวลวงที่ไม่ได้ใช้\n• "IPv6 addresses in the format FF02::5" → FF ขึ้นต้น = multicast (FF02::5 คือกลุ่ม OSPFv3 all-SPF-routers) ไม่ใช่ทั้ง ULA และ link-local unicast\n\n📗 จำไว้สอบ: FD=ULA (private ของ IPv6) | FE80=link-local (next-hop ของ routing protocol) | FF02::5=multicast OSPFv3',
  },
  {
    id: 137,
    kind: 'drag',
    image: v4q137,
    prompt: 'Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.',
    categories: [
      { name: 'Global Unicast', items: ['2001:db8:600d:cafe::123'] },
      { name: 'Link-Local Unicast', items: ['fe80::a00:27ff:feeb:89aa'] },
      { name: 'Multicast', items: ['ff05:1:3'] },
      { name: 'Unique Local', items: ['fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc'] },
    ],
    explanation:
      '📘 แนวคิด — ดูอ็อกเท็ตแรกแล้วบอกชนิดได้ทันที\n• 2 หรือ 3 → Global Unicast (2000::/3)\n• FE80 → Link-Local (FE80::/10)\n• FF → Multicast (FF00::/8)\n• FC หรือ FD → Unique Local (FC00::/7)\n\n🔍 จำแนกทีละที่อยู่\n• 2001:db8:600d:cafe::123 → ขึ้นต้น 2 → Global Unicast ✔\n  (2001:db8::/32 คือบล็อกสงวนสำหรับเอกสาร แต่ยังนับเป็นชนิด GUA)\n• fe80::a00:27ff:feeb:89aa → ขึ้นต้น FE80 → Link-Local Unicast ✔\n  💡 สังเกต ff:fe ตรงกลาง = ร่องรอยของ EUI-64 ที่สร้างจาก MAC\n• ff05:1:3 → ขึ้นต้น FF → Multicast ✔\n  💡 scope 5 = site-local และหมู่ ::1:3 คือกลุ่ม All DHCP Servers\n• fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc → ขึ้นต้น FC → Unique Local ✔\n\n📗 จำไว้สอบ: 2/3=GUA | FE80=Link-Local | FF=Multicast | FC/FD=ULA • IPv6 ไม่มี broadcast',
  },
  {
    id: 138,
    kind: 'single',
    prompt: 'Which WAN topology has the highest degree of reliability?',
    options: [
      { key: 'A', text: 'point-to-point' },
      { key: 'B', text: 'router-on-a-stick' },
      { key: 'C', text: 'full mesh' },
      { key: 'D', text: 'hub-and-spoke' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โทโพโลยี WAN และความทนทาน\n\n🔹 Full mesh ⭐\n• ทุกไซต์เชื่อมตรงถึงทุกไซต์\n• จำนวนลิงก์ = n(n−1)/2 → 5 ไซต์ต้องใช้ 10 ลิงก์, 10 ไซต์ต้องใช้ 45 ลิงก์\n• ลิงก์ใดล่มก็ยังมีเส้นทางอื่นเสมอ → ความน่าเชื่อถือสูงสุด\n• ข้อเสีย: แพงมากและขยายยาก (จำนวนลิงก์โตแบบกำลังสอง)\n\n🔹 Partial mesh\n• เชื่อมเฉพาะคู่ที่สำคัญ → สมดุลระหว่างราคากับความทนทาน\n\n🔹 Hub-and-spoke\n• ทุกสาขาเชื่อมเข้าศูนย์กลางตัวเดียว\n• ประหยัดและบริหารง่าย แต่ hub เป็น single point of failure\n\n🔹 Point-to-point\n• เชื่อมสองจุดเท่านั้น ไม่มีเส้นทางสำรอง\n\n✅ ทำไม C ถูก: full mesh มีเส้นทางสำรองมากที่สุด จึงทนต่อความล้มเหลวได้ดีที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA. point-to-point มีเส้นเดียว ล่มแล้วจบ\nB. router-on-a-stick เป็นเทคนิคทำ inter-VLAN routing ใน LAN ไม่ใช่โทโพโลยี WAN เลย\nD. hub-and-spoke ถ้า hub ล่ม สาขาทั้งหมดขาดจากกัน\n\n📗 จำไว้สอบ: full mesh = ทนทานสุด แต่แพงสุด • ลิงก์ = n(n−1)/2 • hub-and-spoke = ถูกแต่มีจุดตายที่ hub',
  },
  {
    id: 139,
    kind: 'drag',
    image: v4q139,
    prompt: 'Drag and drop the IPv6 address type characteristics from the left to the right.',
    categories: [
      { name: 'Link-Local Address', items: ['configured only once per interface', 'attached to a single subnet'] },
      {
        name: 'Unique Local Address',
        items: ['addressing for exclusive use internally without Internet routing', 'addresses with prefix FC00::/7'],
      },
    ],
    explanation:
      '📘 แนวคิด — เทียบ Link-Local กับ Unique Local (สองคำนี้คล้ายกันจนสับสนบ่อย)\n\n🔹 Link-Local Address — FE80::/10\n• อินเทอร์เฟซหนึ่งมีได้ "หนึ่งที่อยู่เท่านั้น" ⭐ (ถ้ากำหนดใหม่ด้วยมือจะทับของเดิม)\n• ผูกกับลิงก์/ซับเน็ตเดียว เราเตอร์ไม่ส่งต่อข้ามอินเทอร์เฟซเด็ดขาด ⭐\n• สร้างขึ้นอัตโนมัติเมื่อเปิด IPv6 บนอินเทอร์เฟซ\n• ใช้ทำ NDP, DAD และเป็น next-hop ของโปรโตคอลเราต์\n\n🔹 Unique Local Address — FC00::/7 (ใช้จริง FD00::/8)\n• พรีฟิกซ์ FC00::/7 ⭐\n• ใช้ภายในองค์กรเท่านั้น ไม่ถูกเราต์ออกอินเทอร์เน็ต ⭐\n• เราต์ข้ามซับเน็ตภายในองค์กรได้ (ต่างจาก link-local)\n• เทียบเท่า private IPv4 ตาม RFC 1918\n\n🔍 จับคู่:\n• configured only once per interface → Link-Local\n• attached to a single subnet → Link-Local\n• addressing for exclusive use internally without Internet routing → Unique Local\n• addresses with prefix FC00::/7 → Unique Local\n\n📗 จำไว้สอบ: link-local = ลิงก์เดียว หนึ่งเดียวต่ออินเทอร์เฟซ | ULA = ทั้งองค์กร แต่ไม่ออกเน็ต',
  },
  {
    id: 140,
    kind: 'single',
    prompt: 'What causes a port to be placed in the err-disabled state?',
    options: [
      { key: 'A', text: 'nothing plugged into the port' },
      { key: 'B', text: 'link flapping' },
      { key: 'C', text: 'latency' },
      { key: 'D', text: 'shutdown command issued on the port' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — err-disabled คือสถานะที่สวิตช์ "ปิดพอร์ตเอง" เพื่อป้องกันไม่ให้ปัญหาลามไปทั้งเครือข่าย\n\n🔹 สาเหตุที่ทำให้เกิด err-disabled\n• Port security violation (พบ MAC เกินที่อนุญาต)\n• Link flapping ⭐ — ลิงก์ขึ้น-ลงถี่ ๆ ซ้ำ ๆ ทำให้ STP ต้องคำนวณใหม่ตลอดเวลาและ CPU ทำงานหนัก\n• BPDU Guard ตรวจพบ BPDU บนพอร์ตที่เปิด PortFast ไว้\n• UDLD ตรวจพบลิงก์ทางเดียว\n• EtherChannel misconfiguration\n• Storm control เกินเกณฑ์\n• Duplex mismatch ที่รุนแรง\n\n🔧 การกู้คืน: ต้อง shutdown แล้ว no shutdown ที่พอร์ต หรือตั้ง errdisable recovery cause <สาเหตุ> ให้กู้คืนเองอัตโนมัติ\n\n✅ ทำไม B ถูก: link flapping เป็นสาเหตุมาตรฐานที่ทำให้พอร์ตถูกใส่สถานะ err-disabled\n\n❌ ทำไมข้ออื่นผิด:\nA. พอร์ตที่ไม่มีอะไรเสียบจะแสดงสถานะ "notconnect" ไม่ใช่ err-disabled\nC. latency สูงเป็นปัญหาด้านประสิทธิภาพ ไม่ทำให้สวิตช์ปิดพอร์ต\nD. คำสั่ง shutdown ทำให้พอร์ตอยู่ในสถานะ "administratively down" ซึ่งเป็นคนละสถานะกับ err-disabled\n\n📗 จำไว้สอบ: err-disable = port security, BPDU guard, link flap, UDLD, storm control • กู้ด้วย shut/no shut',
  },
  {
    id: 141,
    kind: 'drag',
    image: v4q141,
    prompt: 'Drag and drop the characteristics of transport layer protocols from the left onto the corresponding protocols on the right.',
    categories: [
      {
        name: 'TCP',
        items: ['provides support for retransmission of lost packets', 'guarantees packet delivery', 'uses a 32-bit sequence number'],
      },
      { name: 'UDP', items: ['requires less computer resources', 'offers minimal overhead within a packet', 'ideal for voice traffic'] },
    ],
    explanation:
      '📘 แนวคิด — โครงสร้างเฮดเดอร์บอกทุกอย่าง\n\n🔹 TCP header (20 ไบต์ขึ้นไป)\n• Sequence number ขนาด 32 บิต ⭐ และ Acknowledgment number ขนาด 32 บิต\n• Window size สำหรับ flow control, flags (SYN/ACK/FIN/RST/PSH/URG)\n• ด้วยฟิลด์เหล่านี้ TCP จึงรู้ว่าชิ้นไหนหาย แล้วส่งซ้ำได้ → รับประกันการส่งถึง\n• ราคาที่จ่าย: CPU และหน่วยความจำมากกว่า (ต้องเก็บสถานะทุกเซสชัน)\n\n🔹 UDP header (8 ไบต์เท่านั้น)\n• มีแค่ SrcPort, DstPort, Length, Checksum → overhead น้อยที่สุด ⭐\n• ไม่ต้องเก็บสถานะ → ใช้ทรัพยากรเครื่องน้อยกว่า ⭐\n• ไม่รอ ACK → เหมาะกับเสียงและวิดีโอเรียลไทม์ ⭐\n\n🔍 จับคู่:\n• provides support for retransmission of lost packets → TCP\n• guarantees packet delivery → TCP\n• uses a 32-bit sequence number → TCP\n• requires less computer resources → UDP\n• offers minimal overhead within a packet → UDP\n• ideal for voice traffic → UDP\n\n📗 จำไว้สอบ: TCP header 20B + seq/ack 32 บิต | UDP header 8B ไม่มี state • เสียง = UDP เสมอ',
  },
  {
    id: 142,
    kind: 'single',
    prompt: 'A network engineer must configure an interface with IP address 10.10.10.145 and a subnet mask equivalent to 11111111.11111111.11111111.11111000. Which subnet mask must the engineer use?',
    options: [
      { key: 'A', text: '/29' },
      { key: 'B', text: '/30' },
      { key: 'C', text: '/27' },
      { key: 'D', text: '/28' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — prefix length คือ "จำนวนบิต 1" ที่อยู่ติดกันจากซ้ายใน subnet mask\n\n🔧 นับบิตทีละอ็อกเท็ต\n• 11111111 = 8 บิต (= 255)\n• 11111111 = 8 บิต (= 255)\n• 11111111 = 8 บิต (= 255)\n• 11111000 = 5 บิต (= 248)\n→ รวม 8 + 8 + 8 + 5 = 29 บิต → /29 ✔\n→ ในรูปทศนิยม = 255.255.255.248\n\n💡 ตรวจสอบซ้ำด้วย block size: /29 → 256 − 248 = 8\n• 10.10.10.145 ตกในบล็อกที่เริ่มที่ 144 (144, 152, 160 …)\n• network 10.10.10.144 | usable .145 – .150 | broadcast .151\n• 10.10.10.145 จึงเป็นโฮสต์ตัวแรกที่ใช้ได้ ✔\n\n✅ ทำไม A ถูก: mask ที่ให้มามีบิต 1 รวม 29 ตัว = /29\n\n❌ ทำไมข้ออื่นผิด:\nB. /30 = 11111111.11111111.11111111.11111100 (255.255.255.252) — อ็อกเท็ตสุดท้ายมี 6 บิต ไม่ใช่ 5\nC. /27 = …11100000 (255.255.255.224) — อ็อกเท็ตสุดท้ายมี 3 บิต\nD. /28 = …11110000 (255.255.255.240) — อ็อกเท็ตสุดท้ายมี 4 บิต\n\n📗 จำไว้สอบ: 10000000=128(/25), 11000000=192(/26), 11100000=224(/27), 11110000=240(/28), 11111000=248(/29), 11111100=252(/30)',
  },
  {
    id: 143,
    kind: 'single',
    image: v4q143,
    prompt: 'Refer to the exhibit. The switches are connected via a Cat5 Ethernet cable that is tested successfully. The interfaces are configured as access ports and are both in a down status. What is the cause of the issue?',
    options: [
      { key: 'A', text: 'The speed settings on the switches are mismatched' },
      { key: 'B', text: 'The distance between the two switches is not supported by Cat5' },
      { key: 'C', text: 'The switches are configured with incompatible duplex settings' },
      { key: 'D', text: 'The portfast command is missing from the configuration' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — กฎสำคัญที่ต้องแยกให้ออก\n• Speed mismatch → ลิงก์ "ไม่ขึ้น" เลย (down/down) ⭐ เพราะสัญญาณคนละอัตราซิงค์กันไม่ได้ที่ชั้นกายภาพ\n• Duplex mismatch → ลิงก์ "ขึ้น" ปกติแต่ทำงานแย่ มี late collision และ CRC error เพียบ\n\n🔍 อ่าน exhibit\n• Switch A Port 1 → Speed 100, Duplex Half\n• Switch B Port 2 → Speed 10, Duplex Full\n• ระยะทาง 99 เมตร / 325 ฟุต\n• โจทย์ระบุว่าทั้งสองพอร์ตอยู่ในสถานะ down\n\n📊 วิเคราะห์\n• ความเร็วต่างกัน (100 vs 10) ⛔ → ทำให้ลิงก์ down ตรงตามอาการ\n• duplex ก็ต่างกัน (Half vs Full) แต่ผลของ duplex mismatch คือ "up แต่ช้า" ไม่ใช่ down\n• 99 เมตร ยังอยู่ในขีดจำกัด 100 เมตรของ Cat5 → ไม่ใช่ปัญหา\n\n✅ ทำไม A ถูก: speed mismatch เป็นสาเหตุเดียวที่อธิบายอาการ "ลิงก์ down ทั้งสองฝั่ง" ได้\n\n❌ ทำไมข้ออื่นผิด:\nB. 99 เมตรยังไม่เกิน 100 เมตร และสายก็ผ่านการทดสอบแล้วตามโจทย์\nC. duplex mismatch มีอยู่จริงในภาพ แต่ทำให้ลิงก์ทำงานแย่ ไม่ได้ทำให้ down — จึงไม่ใช่สาเหตุของอาการที่ถาม\nD. PortFast เพียงข้ามสถานะ listening/learning ของ STP ไม่มีผลต่อการที่ลิงก์จะขึ้นหรือไม่ขึ้น\n\n📗 จำไว้สอบ: speed ไม่ตรง → down | duplex ไม่ตรง → up แต่ช้า + late collision',
  },
  {
    id: 144,
    kind: 'multi',
    prompt: 'Which two IP addressing schemes provide internet access to users on the network while preserving the public IPv4 address space? (Choose two.)',
    options: [
      { key: 'A', text: 'IPv6 addressing' },
      { key: 'B', text: 'PAT with private internal addressing' },
      { key: 'C', text: 'single public Class A network' },
      { key: 'D', text: 'private networks only' },
      { key: 'E', text: 'custom addresses from ARIN' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — โจทย์ต้องการสองเงื่อนไขพร้อมกัน: (1) ผู้ใช้ออกอินเทอร์เน็ตได้ (2) ประหยัด public IPv4\n\n🔹 PAT (Port Address Translation / NAT overload)\n• เครื่องภายในใช้ที่อยู่ RFC 1918 ทั้งหมด\n• ตอนออกเน็ตแปลงเป็น public IP เพียงตัวเดียว โดยแยกแต่ละเซสชันด้วยหมายเลข port ต้นทาง\n• public IP หนึ่งตัวรองรับเครื่องภายในได้หลายพันเครื่อง ⭐\n\n🔹 IPv6\n• พื้นที่ที่อยู่ 128 บิต = 3.4 × 10^38 ที่อยู่ ไม่มีทางหมด\n• ทุกเครื่องได้ที่อยู่ระดับโลกของตัวเอง ออกเน็ตได้ตรง ไม่ต้องใช้ NAT\n• ทุกเครื่องที่ย้ายไป IPv6 = public IPv4 ที่ประหยัดได้ ⭐\n\n✅ ทำไม A ถูก: การใช้ IPv6 ทำให้ไม่ต้องกิน public IPv4 เลย จึงอนุรักษ์พื้นที่ IPv4 ได้โดยตรง\n✅ ทำไม B ถูก: PAT คือกลไกมาตรฐานที่ให้ผู้ใช้จำนวนมากออกเน็ตผ่าน public IP เพียงตัวเดียว\n\n❌ ทำไมข้ออื่นผิด:\nC. Class A สาธารณะกิน public IP ไปถึง 16.7 ล้านที่อยู่ — เปลืองมหาศาล ตรงข้ามกับการอนุรักษ์\nD. "private networks only" ล้วน ๆ ออกอินเทอร์เน็ตไม่ได้เลยถ้าไม่มี NAT → ตกเงื่อนไขข้อ 1\nE. การขอที่อยู่จาก ARIN คือการขอ public IPv4 มาใช้เพิ่ม → ไม่ได้ประหยัด\n\n📗 จำไว้สอบ: ประหยัด IPv4 = PAT (หลาย host : 1 public IP) หรือ ย้ายไป IPv6',
  },
  {
    id: 145,
    kind: 'single',
    prompt: 'The address block 192.168.32.0/24 must be subnetted into smaller networks. The engineer must meet these requirements: Create 8 new subnets; Each subnet must accommodate 30 hosts; Interface VLAN 10 must use the last usable IP in the first new subnet; A Layer 3 interface is used. Which configuration must be applied to the interface?',
    options: [
      { key: 'A', text: 'no switchport / mode trunk / ip address 192.168.32.97 255.255.255.224' },
      { key: 'B', text: 'switchport / ip address 192.168.32.65 255.255.255.240' },
      { key: 'C', text: 'no switchport / ip address 192.168.32.30 255.255.255.224' },
      { key: 'D', text: 'no switchport / mode access / ip address 192.168.32.62 255.255.255.240' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — แก้ทีละเงื่อนไข\n\n1️⃣ ต้องการ 8 ซับเน็ต และแต่ละซับเน็ตรองรับ 30 โฮสต์\n• ยืม 3 บิตจาก /24 → 2^3 = 8 ซับเน็ต ✔\n• เหลือ 5 บิตสำหรับโฮสต์ → 2^5 − 2 = 30 โฮสต์ ✔ พอดีเป๊ะ\n→ mask = /27 = 255.255.255.224 (block size 32)\n\n2️⃣ ซับเน็ตแรกคือซับเน็ตไหน\n• 192.168.32.0/27 → network .0 | usable .1 – .30 | broadcast .31\n\n3️⃣ last usable IP ในซับเน็ตแรก\n• broadcast .31 ลบหนึ่ง = 192.168.32.30 ⭐\n\n4️⃣ Layer 3 interface บนสวิตช์\n• ต้องสั่ง no switchport เพื่อเปลี่ยนพอร์ตจากโหมดสวิตช์เป็น routed port ก่อน จึงจะใส่ ip address ได้\n\n✅ ทำไม C ถูก: ครบทุกเงื่อนไข — no switchport, ที่อยู่ 192.168.32.30 (last usable ของซับเน็ตแรก), mask 255.255.255.224 (/27 ให้ 8 ซับเน็ต × 30 โฮสต์)\n\n❌ ทำไมข้ออื่นผิด:\nA. 192.168.32.97 เป็นโฮสต์ในซับเน็ตที่ 4 (.96/27) ไม่ใช่ซับเน็ตแรก และคำสั่ง mode trunk ขัดกับ no switchport\nB. คำสั่ง switchport ทำให้เป็นพอร์ตชั้น 2 ซึ่งใส่ IP ไม่ได้ และ mask /28 ให้แค่ 14 โฮสต์ ไม่พอ 30\nD. mask /28 ให้แค่ 14 โฮสต์ ไม่พอ และ mode access ก็ขัดกับ routed port\n\n📗 จำไว้สอบ: routed port ต้อง no switchport ก่อนเสมอ • /27 = 8 ซับเน็ต × 30 โฮสต์ จาก /24',
  },
  {
    id: 146,
    kind: 'drag',
    image: v4q146,
    prompt: 'Drag and drop the TCP or UDP details from the left onto their corresponding protocols on the right.',
    categories: [
      { name: 'TCP', items: ['used to reliably share files between devices', 'supports reliable data transmission'] },
      { name: 'UDP', items: ['appropriate for streaming operations with minimal latency', 'provides best-effort service'] },
    ],
    explanation:
      '📘 แนวคิด — คำสำคัญที่ชี้ชัดว่าเป็นโปรโตคอลไหน\n\n🔹 คำที่บ่งบอก TCP\n• "reliably" / "reliable" → มี ACK และ retransmission ⭐\n• "share files" → การโอนไฟล์ต้องครบทุกไบต์ (FTP, SFTP, SMB)\n• "connection" / "handshake" / "sequence" / "flow control"\n\n🔹 คำที่บ่งบอก UDP\n• "streaming" / "minimal latency" / "real-time" → ต้องเร็ว ไม่รอ ACK ⭐\n• "best-effort" → พยายามส่งให้ดีที่สุด แต่ไม่รับประกัน ⭐\n• "connectionless" / "low overhead"\n\n🔍 จับคู่:\n• used to reliably share files between devices → TCP\n• supports reliable data transmission → TCP\n• appropriate for streaming operations with minimal latency → UDP\n• provides best-effort service → UDP\n\n💡 เหตุผลเชิงลึก: สตรีมมิงยอมให้เฟรมภาพหายไปบ้าง (ภาพกระตุกนิดหน่อย) ดีกว่าให้ภาพค้างรอส่งซ้ำ — TCP ที่ส่งซ้ำจะทำให้เกิด buffering ที่ผู้ชมเกลียดที่สุด\n\n📗 จำไว้สอบ: ไฟล์/reliable → TCP | สตรีม/best-effort/latency ต่ำ → UDP',
  },
  {
    id: 147,
    kind: 'multi',
    prompt: 'What are two reasons to deploy private addressing on a network? (Choose two.)',
    options: [
      { key: 'A', text: 'to subnet addresses in an organized hierarchy' },
      { key: 'B', text: 'to reduce network maintenance costs' },
      { key: 'C', text: 'to segment local IP addresses from the global routing table' },
      { key: 'D', text: 'to hide sensitive data from access users within an enterprise' },
      { key: 'E', text: 'to route protected data securely via an Internet service provider' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — สิ่งที่ private addressing ทำได้จริง\n1️⃣ แยกที่อยู่ภายในออกจากตารางเราต์ระดับโลก — เราเตอร์บนอินเทอร์เน็ตไม่มีและไม่รับเส้นทาง RFC 1918 เลย ที่อยู่ภายในจึงไม่เคยปรากฏใน global routing table ⭐\n2️⃣ ซ่อนโครงสร้างและทรัพยากรภายในจากผู้ที่ไม่ควรเห็น — จากภายนอกมองไม่เห็นว่าองค์กรมีเครื่องอะไรบ้าง ที่อยู่อะไรบ้าง ⭐\n\n✅ ทำไม C ถูก: ที่อยู่ RFC 1918 ถูกกันออกจากตารางเราต์สาธารณะโดยสมบูรณ์ — เป็นการแบ่งแยกที่อยู่ภายในออกจากอินเทอร์เน็ต\n✅ ทำไม D ถูก: การที่ที่อยู่ภายในเข้าถึงจากภายนอกไม่ได้ ช่วยปกปิดระบบและข้อมูลอ่อนไหวไว้ระดับหนึ่ง\n\n❌ ทำไมข้ออื่นผิด:\nA. การจัดลำดับชั้นซับเน็ตอย่างเป็นระบบทำได้เท่ากันทั้งกับที่อยู่ public และ private — ไม่ใช่เหตุผลเฉพาะของ private\nB. private address ไม่ได้ลดค่าบำรุงรักษาเครือข่าย (ยังต้องดูแลอุปกรณ์เท่าเดิม แถมต้องเพิ่ม NAT เข้ามาอีก)\nE. private address ไม่มีการเข้ารหัสใด ๆ — การส่งข้อมูลอย่างปลอดภัยผ่าน ISP ต้องใช้ VPN (IPsec/SSL)\n\n📗 จำไว้สอบ: private IP = ไม่อยู่ในตารางเราต์โลก + ซ่อนโครงสร้างภายใน • ความปลอดภัยจริงต้องใช้ VPN/firewall',
  },
  {
    id: 148,
    kind: 'drag',
    image: v4q148,
    prompt: 'Drag and drop the IPv6 DNS record types from the left onto the description on the right.',
    categories: [
      { name: 'correlates a host name with an IP address', items: ['AAAA'] },
      { name: 'aliases one name to another', items: ['CNAME'] },
      { name: 'correlates a domain with its authoritative name servers', items: ['NS'] },
      { name: 'supports reverse name lookups', items: ['PTR'] },
      { name: 'associates the domain serial number with its owner', items: ['SOA'] },
    ],
    explanation:
      '📘 แนวคิด — เรคคอร์ด DNS ที่ต้องจำสำหรับ CCNA\n\n• A → แมปชื่อโฮสต์ไปยังที่อยู่ IPv4 (32 บิต)\n• AAAA (quad-A) → แมปชื่อโฮสต์ไปยังที่อยู่ IPv6 (128 บิต) ⭐\n  💡 ที่ชื่อ AAAA เพราะ IPv6 ยาวเป็น 4 เท่าของ IPv4 จึงใช้ A สี่ตัว\n• CNAME (Canonical Name) → ตั้งชื่อเล่นให้ชื่ออื่น เช่น www.example.com → web01.example.com ⭐\n• NS (Name Server) → ระบุว่าเซิร์ฟเวอร์ใดเป็นผู้มีอำนาจ (authoritative) สำหรับโดเมนนี้ ⭐\n• PTR (Pointer) → ค้นย้อนกลับจาก IP ไปหาชื่อ (reverse DNS lookup) ⭐ ใช้กับโซน in-addr.arpa / ip6.arpa\n• SOA (Start of Authority) → เก็บข้อมูลกำกับโซน: อีเมลผู้ดูแล serial number ค่า refresh/retry/expire/TTL ⭐\n• MX (Mail Exchange) → ระบุเซิร์ฟเวอร์อีเมลของโดเมน\n\n🔍 จับคู่:\n• correlates a host name with an IP address → AAAA\n• aliases one name to another → CNAME\n• correlates a domain with its authoritative name servers → NS\n• supports reverse name lookups → PTR\n• associates the domain serial number with its owner → SOA\n\n📗 จำไว้สอบ: A=IPv4 | AAAA=IPv6 | CNAME=ชื่อเล่น | NS=เนมเซิร์ฟเวอร์ | PTR=ค้นย้อนกลับ | SOA=ข้อมูลโซน | MX=อีเมล',
  },
  {
    id: 149,
    kind: 'single',
    prompt: 'Which property is shared by 10GBase-SR and 10GBase-LR interfaces?',
    options: [
      { key: 'A', text: 'Both use the single-mode fiber type.' },
      { key: 'B', text: 'Both require UTP cable media for transmission.' },
      { key: 'C', text: 'Both require fiber cable media for transmission.' },
      { key: 'D', text: 'Both use the multimode fiber type.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — มาตรฐาน 10 Gigabit Ethernet\n\n• 10GBASE-SR (Short Reach) → multimode fiber, ความยาวคลื่น 850 nm, ระยะ 26–400 เมตร (ขึ้นกับเกรด OM)\n• 10GBASE-LR (Long Reach) → single-mode fiber, ความยาวคลื่น 1310 nm, ระยะสูงสุด 10 กิโลเมตร\n• 10GBASE-ER (Extended Reach) → single-mode fiber, 1550 nm, ระยะสูงสุด 40 กิโลเมตร\n• 10GBASE-T → สายทองแดง UTP Cat 6a ขึ้นไป, ระยะ 100 เมตร\n\n✅ ทำไม C ถูก: ทั้ง SR และ LR ต่างเป็นมาตรฐานบน "ไฟเบอร์ออปติก" เหมือนกัน — ต่างกันแค่ชนิดของไฟเบอร์และความยาวคลื่น ดังนั้นคุณสมบัติร่วมคือ "ต้องใช้สายไฟเบอร์"\n\n❌ ทำไมข้ออื่นผิด:\nA. เฉพาะ LR ที่ใช้ single-mode — SR ใช้ multimode\nB. UTP เป็นของ 10GBASE-T ไม่ใช่ SR หรือ LR\nD. เฉพาะ SR ที่ใช้ multimode — LR ใช้ single-mode\n\n💡 ตัวช่วยจำ: S = Short (multimode ใกล้), L = Long (single-mode ไกล), E = Extended (single-mode ไกลมาก), T = Twisted pair (ทองแดง)\n\n📗 จำไว้สอบ: SR=multimode 850nm สั้น | LR=single-mode 1310nm 10 กม. | ER=single-mode 1550nm 40 กม. | T=UTP 100 ม.',
  },
  {
    id: 150,
    kind: 'drag',
    image: v4q150,
    prompt: 'Drag and drop the IPv6 addresses from the left onto the corresponding address types on the right.',
    categories: [
      { name: 'Global Unicast', items: ['3ffe:e54d:620:a87a::f00d'] },
      { name: 'Link-Local Unicast', items: ['fe80::a00:27ff:feeb:89aa'] },
      { name: 'Multicast', items: ['ff05::1:3'] },
      { name: 'Unique Local', items: ['fd6d:c83b:5cef:b6b2::1'] },
    ],
    explanation:
      '📘 แนวคิด — ตารางจำแนกชนิดที่อยู่ IPv6 จากพรีฟิกซ์\n• 2000::/3 → Global Unicast (หลักแรกเป็น 2 หรือ 3) ⭐\n• FC00::/7 → Unique Local (ขึ้นต้น FC หรือ FD)\n• FE80::/10 → Link-Local\n• FF00::/8 → Multicast\n\n🔍 จำแนกทีละที่อยู่\n• 3ffe:e54d:620:a87a::f00d → ขึ้นต้นเลข 3 → อยู่ในช่วง 2000::/3 → Global Unicast ✔\n  💡 กับดัก: หลายคนคิดว่า GUA ต้องขึ้นต้น 2001 เท่านั้น แต่ 2000::/3 ครอบทั้ง 2xxx และ 3xxx\n• fe80::a00:27ff:feeb:89aa → ขึ้นต้น FE80 → Link-Local Unicast ✔\n• ff05::1:3 → ขึ้นต้น FF → Multicast ✔ (scope 5 = site-local, กลุ่ม ::1:3 = All DHCP Servers)\n• fd6d:c83b:5cef:b6b2::1 → ขึ้นต้น FD → Unique Local ✔ (FD = ULA ที่กำหนดเองในองค์กร)\n\n📗 จำไว้สอบ: 2/3=GUA | FC/FD=ULA | FE80=Link-Local | FF=Multicast',
  },
  {
    id: 151,
    kind: 'single',
    prompt: 'Which device permits or denies network traffic based on a set of rules?',
    options: [
      { key: 'A', text: 'switch' },
      { key: 'B', text: 'firewall' },
      { key: 'C', text: 'wireless controller' },
      { key: 'D', text: 'access point' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ไฟร์วอลล์คืออุปกรณ์ที่ทำงานตาม "ชุดกฎ" (rule set / access policy)\n• แต่ละกฎระบุ: source IP, destination IP, protocol, port แล้วตามด้วย permit หรือ deny\n• ประมวลผลจากบนลงล่าง เจอกฎที่ตรงก่อนก็หยุดทันที\n• ปิดท้ายด้วย implicit deny — อะไรที่ไม่ได้อนุญาตไว้ ถือว่าห้ามทั้งหมด ⭐\n• Stateful firewall ยังจำเซสชันที่เริ่มจากภายในไว้ เพื่ออนุญาตเฉพาะทราฟฟิกขากลับที่คู่กัน\n\n✅ ทำไม B ถูก: การอนุญาตหรือปฏิเสธทราฟฟิกตามชุดกฎคือนิยามหลักของไฟร์วอลล์\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ชั้น 2 ส่งต่อเฟรมตามตาราง MAC ไม่ได้ตัดสินอนุญาต/ปฏิเสธตามนโยบาย (สวิตช์ชั้น 3 ใส่ ACL ได้ แต่นั่นก็คือการทำงานแบบไฟร์วอลล์อย่างง่าย ไม่ใช่หน้าที่หลักของสวิตช์)\nC. WLC บริหาร AP และไคลเอนต์ไร้สาย ไม่ใช่ตัวกรองทราฟฟิกหลักของเครือข่าย\nD. AP เชื่อมอุปกรณ์ไร้สายเข้าเครือข่ายใช้สาย ไม่ได้ทำหน้าที่กรองตามกฎ\n\n📗 จำไว้สอบ: firewall = permit/deny ตามกฎ + implicit deny ท้ายสุด • stateful = จำเซสชัน',
  },
  {
    id: 152,
    kind: 'single',
    prompt: 'What is the role of a firewall in an enterprise network?',
    options: [
      { key: 'A', text: 'determines which packets are allowed to cross from unsecured to secured networks' },
      { key: 'B', text: 'processes unauthorized packets and allows passage to less secure segments of the network' },
      { key: 'C', text: 'forwards packets based on stateless packet inspection' },
      { key: 'D', text: 'explicitly denies all packets from entering an administrative domain' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ไฟร์วอลล์ยืนอยู่ที่ "รอยต่อระหว่างโซนความปลอดภัย"\n• Outside / untrusted → อินเทอร์เน็ต (ระดับความปลอดภัยต่ำสุด)\n• DMZ → เซิร์ฟเวอร์ที่เปิดให้ภายนอกเข้าถึงได้ (ระดับกลาง)\n• Inside / trusted → เครือข่ายภายในองค์กร (ระดับสูงสุด)\n\n🔧 กฎการทำงานพื้นฐานของ Cisco ASA\n• ทราฟฟิกจากโซนที่ปลอดภัยสูงกว่า → ไปโซนที่ต่ำกว่า = อนุญาตโดยค่าเริ่มต้น\n• ทราฟฟิกจากโซนที่ปลอดภัยต่ำกว่า → ไปโซนที่สูงกว่า = ปฏิเสธ เว้นแต่มีกฎอนุญาตชัดเจน ⭐\n\n✅ ทำไม A ถูก: บทบาทหลักคือตัดสินว่าแพ็กเก็ตใดจากฝั่งที่ไม่ปลอดภัยจะได้รับอนุญาตให้ข้ามเข้าฝั่งที่ปลอดภัย — นี่คือใจกลางของหน้าที่ไฟร์วอลล์\n\n❌ ทำไมข้ออื่นผิด:\nB. ไฟร์วอลล์ "ทิ้ง" แพ็กเก็ตที่ไม่ได้รับอนุญาต ไม่ใช่ปล่อยผ่านไปยังส่วนที่ปลอดภัยน้อยกว่า\nC. ไฟร์วอลล์ยุคปัจจุบันเป็น stateful (จำเซสชัน) — stateless คือ ACL แบบพื้นฐานซึ่งอ่อนแอกว่ามาก\nD. ถ้าปฏิเสธทุกแพ็กเก็ตแบบไม่มีข้อยกเว้น เครือข่ายก็ใช้งานไม่ได้เลย — ไฟร์วอลล์ต้องอนุญาตทราฟฟิกที่ถูกต้องผ่านได้\n\n📗 จำไว้สอบ: firewall = ประตูระหว่างโซน • สูง→ต่ำ อนุญาต | ต่ำ→สูง ต้องมีกฎอนุญาตชัดเจน',
  },
  {
    id: 153,
    kind: 'drag',
    image: v4q153,
    prompt: 'Refer to the exhibit. An engineer is tasked with verifying network configuration parameters on a client workstation to report back to the team lead. Drag and drop the node identifiers from the left onto the network parameters on the right.',
    categories: [
      { name: 'broadcast address', items: ['192.168.1.255'] },
      { name: 'default gateway', items: ['192.168.1.1'] },
      { name: 'host IP address', items: ['192.168.1.20'] },
      { name: 'last assignable IP address in the subnet', items: ['192.168.1.254'] },
      { name: 'MAC address', items: ['B8-76-3F-7C-57-DF'] },
    ],
    explanation:
      '📘 แนวคิด — อ่านค่าจากผลลัพธ์ ipconfig /all แล้วคำนวณค่าที่เหลือ\n\n🔍 อ่าน exhibit (อะแดปเตอร์ Wireless LAN Wi-Fi)\n• Physical Address = B8-76-3F-7C-57-DF → MAC address ของ NIC ที่ใช้งานจริง ⭐\n• IPv4 Address = 192.168.1.20 → ที่อยู่ของโฮสต์\n• Subnet Mask = 255.255.255.0 → /24\n• Default Gateway = 192.168.1.1\n\n🔧 คำนวณค่าที่ไม่ได้แสดงตรง ๆ\n• /24 → network = 192.168.1.0 | broadcast = 192.168.1.255 ⭐\n• last assignable (usable) = broadcast − 1 = 192.168.1.254 ⭐\n\n⚠️ กับดักที่ต้องระวัง: ในผลลัพธ์มี MAC สองตัว\n• 1A-76-3F-7C-57-DF → ของอะแดปเตอร์ "Wi-Fi Direct Virtual Adapter" ที่มีสถานะ Media disconnected\n• B8-76-3F-7C-57-DF → ของอะแดปเตอร์ Wi-Fi ที่เชื่อมต่ออยู่จริงและมี IP → ตัวนี้คือคำตอบ\n\n📗 จำไว้สอบ: /24 → broadcast = .255, last usable = .254 • เลือก MAC ของอะแดปเตอร์ที่ "มี IP" เท่านั้น',
  },
  {
    id: 154,
    kind: 'drag',
    image: v4q154,
    prompt: 'Drag and drop the DNS lookup components from the left onto the functions on the right.',
    categories: [
      { name: 'service that maps hostname to IP addresses', items: ['DNS'] },
      { name: 'local database of address mappings that improves name resolution performance', items: ['cache'] },
      { name: 'in response to client requests, queries a name server for IP address information', items: ['name resolver'] },
      { name: 'component of a URL that indicates the location or organization type', items: ['domain'] },
      { name: 'disables DNS services on a Cisco device', items: ['no ip domain-lookup'] },
    ],
    explanation:
      '📘 แนวคิด — องค์ประกอบของระบบ DNS\n\n• DNS (Domain Name System) → บริการที่แปลงชื่อโฮสต์เป็นที่อยู่ IP ใช้ UDP/TCP พอร์ต 53 ⭐\n\n• cache → ฐานข้อมูลชั่วคราวในเครื่องที่เก็บผลการค้นหาที่เพิ่งได้มา ตามอายุ TTL\n  ครั้งต่อไปถามชื่อเดิมก็ตอบจาก cache ได้ทันที ไม่ต้องวิ่งออกไปถามใหม่ → เร็วขึ้นและลดภาระเซิร์ฟเวอร์ ⭐\n  (บน Windows ดูด้วย ipconfig /displaydns ล้างด้วย ipconfig /flushdns)\n\n• name resolver → ส่วนของไคลเอนต์ที่รับคำขอจากแอปพลิเคชัน แล้วไปถาม name server แทน ⭐\n\n• domain → ส่วนหนึ่งของ URL ที่บอกตำแหน่งหรือประเภทองค์กร เช่น .com (พาณิชย์) .edu (การศึกษา) .th (ประเทศไทย) ⭐\n\n• no ip domain-lookup → คำสั่ง IOS ที่ปิดบริการค้นหาชื่อบนอุปกรณ์ Cisco ⭐\n  💡 นิยมใส่คำสั่งนี้ในแล็บ เพราะถ้าพิมพ์คำสั่งผิด IOS จะเข้าใจว่าเป็นชื่อโฮสต์แล้วพยายามค้นหา ทำให้คอนโซลค้างหลายวินาที\n\n📗 จำไว้สอบ: DNS=UDP/TCP 53 | cache=จำผลไว้ให้เร็วขึ้น | resolver=ฝั่งไคลเอนต์ | no ip domain-lookup=ปิดการค้นหาชื่อบน IOS',
  },
  {
    id: 155,
    kind: 'drag',
    image: v4q155,
    prompt: 'Drag and drop the TCP or UDP details from the left onto their corresponding protocols on the right.',
    categories: [
      {
        name: 'TCP',
        items: ['requires the client and the server to establish a connection before sending the packet', 'used to reliably share files between devices'],
      },
      {
        name: 'UDP',
        items: ['transmitted based on data contained in the packet without the need for a data channel', 'appropriate for streaming operations with minimal latency'],
      },
    ],
    explanation:
      '📘 แนวคิด — จับคำสำคัญแล้วแยกฝั่งได้ทันที\n\n🔹 TCP — connection-oriented และเชื่อถือได้\n• "establish a connection before sending" → 3-way handshake (SYN → SYN-ACK → ACK) ⭐\n• "reliably share files" → การโอนไฟล์ต้องครบทุกไบต์ ใช้ ACK และ retransmission (FTP, SFTP, SMB) ⭐\n\n🔹 UDP — connectionless และ best-effort\n• "without the need for a data channel" → ไม่ต้องเปิดช่องทางล่วงหน้า ทุกดาต้าแกรมมีข้อมูลครบในตัวเองแล้วยิงออกไปได้เลย ⭐\n• "streaming with minimal latency" → สตรีมมิงต้องการความต่อเนื่อง ยอมให้แพ็กเก็ตหายบ้างดีกว่ารอส่งซ้ำจนภาพค้าง ⭐\n\n💡 ข้อสอบชุดนี้มีคำถามลากวาง TCP/UDP หลายข้อ (95, 141, 146, 155) ที่ใช้ประโยคเดียวกันสลับไปมา — จำ "คำสำคัญ" ไว้จะตอบได้ทุกข้อ\n\n📗 จำไว้สอบ: connection / reliable / files → TCP | connectionless / best-effort / streaming → UDP',
  },
  {
    id: 156,
    kind: 'single',
    image: v4q156,
    prompt: 'Refer to the exhibit. An IP subnet must be configured on each router that provides enough addresses for the number of assigned hosts and anticipates no more than 10% growth for new hosts. Which configuration script must be used?',
    options: [
      { key: 'A', text: 'R7: 10.1.56.1 255.255.192.0 | R8: 10.9.32.1 255.255.224.0 | R9: 10.23.96.1 255.255.128.0' },
      { key: 'B', text: 'R7: 10.1.56.1 255.255.240.0 | R8: 10.9.32.1 255.255.224.0 | R9: 10.23.96.1 255.255.192.0' },
      { key: 'C', text: 'R7: 10.1.56.1 255.255.252.0 | R8: 10.9.32.1 255.255.255.0 | R9: 10.23.96.1 255.255.240.0' },
      { key: 'D', text: 'R7: 10.1.56.1 255.255.192.0 | R8: 10.9.32.1 255.255.224.0 | R9: 10.23.96.1 255.255.128.0' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำนวณจำนวนโฮสต์ที่ต้องการ (บวกการเติบโต 10%) แล้วเลือก mask ที่เล็กที่สุดที่ยังพอ\n\n1️⃣ R7 Fa1/0 → 923 โฮสต์\n• บวก 10% = 923 × 1.10 = 1,015.3 → ต้องรองรับอย่างน้อย 1,016\n• /22 → 2^10 − 2 = 1,022 ✔ พอดี → mask 255.255.252.0\n• /23 → 510 ✘ ไม่พอ\n\n2️⃣ R8 Fa0/0 → 225 โฮสต์\n• บวก 10% = 247.5 → ต้องรองรับอย่างน้อย 248\n• /24 → 254 ✔ พอดี → mask 255.255.255.0\n• /25 → 126 ✘ ไม่พอ\n\n3️⃣ R9 Fa1/1 → 3,641 โฮสต์\n• บวก 10% = 4,005.1 → ต้องรองรับอย่างน้อย 4,006\n• /20 → 2^12 − 2 = 4,094 ✔ พอดี → mask 255.255.240.0\n• /21 → 2,046 ✘ ไม่พอ\n\n✅ ทำไม C ถูก: ตรงทั้งสามเราเตอร์ — R7 /22, R8 /24, R9 /20 ซึ่งเป็น mask ที่เล็กที่สุดที่ยังรองรับความต้องการพร้อมการเติบโต 10%\n\n❌ ทำไมข้ออื่นผิด:\nA. R7 ได้ /18 (16,382 โฮสต์) และ R9 ได้ /17 (32,766 โฮสต์) — ใหญ่เกินความจำเป็นมหาศาล เปลืองที่อยู่\nB. R7 ได้ /20 (4,094) ใหญ่เกินไปสำหรับ 1,016 และ R9 ได้ /18 (16,382) ก็ใหญ่เกินไปสำหรับ 4,006\nD. เหมือนกับ A ทุกประการ — ทั้งสามซับเน็ตใหญ่เกินความจำเป็น\n\n📗 จำไว้สอบ: /20=4094 | /21=2046 | /22=1022 | /23=510 | /24=254 | /25=126 โฮสต์',
  },
  {
    id: 157,
    kind: 'single',
    prompt: 'Which action is taken by a switch port enabled for PoE power classification override?',
    options: [
      { key: 'A', text: 'As power usage on a PoE switch port is checked data flow to the connected device is temporarily paused' },
      { key: 'B', text: 'When a powered device begins drawing power from a PoE switch port, a syslog message is generated' },
      { key: 'C', text: 'If a switch determines that a device is using less than the minimum configured power, it assumes the device has failed and disconnects it' },
      { key: 'D', text: 'Should a monitored port exceed the maximum administrative value for power, the port is shut down and err-disabled' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — PoE power classification override (คำสั่ง power inline consumption / power inline police)\n• ปกติสวิตช์เชื่อค่า class ที่อุปกรณ์ประกาศมา แล้วจองพลังงานตามนั้น\n• classification override = ผู้ดูแลกำหนดเพดานพลังงานเอง แล้วให้สวิตช์เฝ้าดูการใช้จริงเทียบกับเพดานนั้น\n• ถ้าอุปกรณ์ดึงไฟเกินเพดาน สวิตช์จะปิดพอร์ตและใส่สถานะ err-disabled ทันที ⭐\n• จุดประสงค์: ป้องกันไม่ให้อุปกรณ์ตัวเดียวดูดไฟจนงบพลังงานรวมของสวิตช์หมด แล้วกระทบพอร์ตอื่นทั้งหมด\n\n✅ ทำไม D ถูก: อธิบายพฤติกรรมได้ตรงตามนิยาม — ใช้ไฟเกินค่าสูงสุดที่ตั้งไว้ → พอร์ตถูกปิดและเข้าสู่ err-disabled\n\n💡 ตารางมาตรฐาน PoE ที่ควรจำ\n• 802.3af (PoE) → 15.4W | 802.3at (PoE+) → 30W | 802.3bt (PoE++) → 60W/90W\n\n❌ ทำไมข้ออื่นผิด:\nA. PoE ส่งไฟและข้อมูลไปพร้อมกันบนสายเส้นเดียวได้ ไม่มีการหยุดพักข้อมูลเพื่อวัดไฟ\nB. syslog เมื่ออุปกรณ์เริ่มดึงไฟเป็นเหตุการณ์ปกติของ PoE ทั่วไป ไม่ใช่ผลของ classification override\nC. กลไกนี้เฝ้าดู "ขีดสูงสุด" ไม่ใช่ขีดต่ำสุด — สวิตช์ไม่ตัดอุปกรณ์เพราะใช้ไฟน้อยเกินไป\n\n📗 จำไว้สอบ: power classification override = เกินเพดาน → shutdown + err-disabled (ข้อนี้ซ้ำกับข้อ 21 สลับตัวเลือก)',
  },
  {
    id: 158,
    kind: 'single',
    prompt: 'What is a function spine-and-leaf architecture?',
    options: [
      { key: 'A', text: 'Offers predictable latency of the traffic path between end devices.' },
      { key: 'B', text: 'Exclusively sends multicast traffic between servers that are directly connected to the spine.' },
      { key: 'C', text: 'Mitigates oversubscription by adding a layer of leaf switches.' },
      { key: 'D', text: 'Limits payload size of traffic within the leaf layer.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — spine-and-leaf (Clos fabric) ในดาต้าเซ็นเตอร์\n• leaf ทุกตัวต่อไป spine ทุกตัว | leaf ไม่ต่อกันเอง | spine ไม่ต่อกันเอง\n• เส้นทางระหว่างเซิร์ฟเวอร์สองตัวใด ๆ = leaf → spine → leaf เสมอ = 2 hop เท่ากันหมด\n• เมื่อจำนวน hop เท่ากันทุกคู่ latency จึงคาดเดาได้ (deterministic latency) ⭐\n• ใช้ ECMP กระจายโหลดทุกอัปลิงก์พร้อมกัน ไม่มีพอร์ตถูก STP บล็อกทิ้งให้เสียเปล่า\n• ออกแบบมารองรับทราฟฟิก east-west (เซิร์ฟเวอร์คุยกันเอง) ซึ่งครองสัดส่วนส่วนใหญ่ในดาต้าเซ็นเตอร์ยุคใหม่\n\n✅ ทำไม A ถูก: ความสามารถในการคาดเดา latency คือคุณสมบัติเด่นที่สุดที่ได้จากการที่ทุกเส้นทางมีความยาวเท่ากัน\n\n❌ ทำไมข้ออื่นผิด:\nB. spine ไม่มีเซิร์ฟเวอร์ต่อตรง (เซิร์ฟเวอร์ต่อที่ leaf เท่านั้น) และ fabric ก็ขนได้ทุกชนิดทราฟฟิก ไม่ใช่แค่ multicast\nC. การเพิ่ม leaf คือการเพิ่ม "พอร์ตเข้าถึง" — สิ่งที่ลด oversubscription คือการเพิ่ม spine หรือเพิ่มแบนด์วิดท์อัปลิงก์\nD. สถาปัตยกรรมนี้ไม่ได้จำกัดขนาด payload — MTU เป็นเรื่องของการตั้งค่าอินเทอร์เฟซ ไม่ใช่โทโพโลยี\n\n📗 จำไว้สอบ: spine-leaf = 2 hop เท่ากันหมด → latency คาดเดาได้ • เพิ่มพอร์ต=เพิ่ม leaf, เพิ่มแบนด์วิดท์=เพิ่ม spine',
  },
  {
    id: 159,
    kind: 'single',
    prompt: 'Which action is taken by the data plane within a network device?',
    options: [
      { key: 'A', text: 'Constructs a routing table based on a routing protocol.' },
      { key: 'B', text: 'Forwards traffic to the next hop.' },
      { key: 'C', text: 'Looks up an egress interface in the forwarding information base.' },
      { key: 'D', text: 'Provides CLI access to the network device.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ระนาบการทำงานสามชั้น\n• Control plane → สร้าง "แผนที่": รันโปรโตคอลเราต์ สร้าง RIB (routing table) แล้วกลั่นเป็น FIB\n• Data plane → ใช้ FIB ที่ได้มาส่งต่อแพ็กเก็ตในฮาร์ดแวร์ ⭐\n• Management plane → CLI, SSH, SNMP, NETCONF\n\n🔧 กระบวนการ CEF (Cisco Express Forwarding) ที่ data plane ทำ\n1️⃣ รับแพ็กเก็ตเข้ามา\n2️⃣ ค้นหา destination IP ใน FIB → ได้อินเทอร์เฟซขาออกและ next-hop ⭐\n3️⃣ ค้น adjacency table ได้ MAC ปลายทาง แล้วเขียนเฮดเดอร์ชั้น 2 ใหม่\n4️⃣ ส่งออกอินเทอร์เฟซนั้น\n\n✅ ทำไม C ถูก: การค้นหาอินเทอร์เฟซขาออกใน FIB คือ "การกระทำ" ที่ data plane ลงมือทำจริงกับทุกแพ็กเก็ต และทำในฮาร์ดแวร์ ASIC\n\n⚠️ หมายเหตุ: ข้อ B "Forwards traffic to the next hop" ก็เป็นงานของ data plane เช่นกัน — คำถามนี้จึงมีสองตัวเลือกที่อยู่ระนาบเดียวกัน คีย์ที่ใช้กันทั่วไปเลือก C เพราะเป็น "การกระทำเฉพาะเจาะจง" (ขั้นตอนค้น FIB) ส่วน B เป็นการบรรยายผลลัพธ์โดยรวม สังเกตว่าข้อ 164 ในชุดนี้ถามว่า "key function ของ data plane คืออะไร" โดยไม่มีตัวเลือก FIB คำตอบจึงเป็น "forwarding traffic to the next hop" — ถ้าเจอทั้งสองตัวเลือกพร้อมกัน ให้เลือก FIB lookup\n\n❌ ทำไมข้ออื่นผิด:\nA. การสร้างตารางเราต์จากโปรโตคอลเราต์ = control plane\nD. การให้เข้าถึง CLI = management plane\n\n📗 จำไว้สอบ: control สร้าง FIB → data ใช้ FIB • management = CLI/SSH/SNMP',
  },
  {
    id: 160,
    kind: 'single',
    prompt: 'What is the function of the control plane?',
    options: [
      { key: 'A', text: 'It exchanges routing table information.' },
      { key: 'B', text: 'It provides CLI access to the network device.' },
      { key: 'C', text: 'It looks up an egress interface in the forwarding information base.' },
      { key: 'D', text: 'It forwards traffic to the next hop.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — control plane คือ "สมอง" ที่คิดว่าจะส่งไปทางไหน แล้วบอกให้ data plane ทำตาม\n\n🔹 งานของ control plane\n• รันโปรโตคอลเราต์และแลกเปลี่ยนข้อมูลเส้นทางกับเพื่อนบ้าน (OSPF, EIGRP, BGP, RIP) ⭐\n• สร้าง RIB (routing table) แล้วกลั่นเป็น FIB ส่งให้ data plane ใช้\n• รัน STP (เลือก root bridge, กำหนดบทบาทพอร์ต)\n• รัน ARP, CDP/LLDP, HSRP/VRRP\n• ทำงานบน CPU ของอุปกรณ์\n\n✅ ทำไม A ถูก: การแลกเปลี่ยนข้อมูลตารางเราต์กับอุปกรณ์อื่นเป็นหน้าที่หลักและเป็นเอกลักษณ์ของ control plane\n\n❌ ทำไมข้ออื่นผิด:\nB. การให้เข้าถึง CLI = management plane\nC. การค้นหาอินเทอร์เฟซขาออกใน FIB = data plane (control plane เป็นคน "สร้าง" FIB แต่คน "ใช้" คือ data plane)\nD. การส่งต่อทราฟฟิกไปยัง next hop = data plane\n\n💡 เปรียบเทียบง่าย ๆ: control plane = คนวางแผนเส้นทางและเขียนแผนที่ | data plane = คนขับรถที่ใช้แผนที่นั้น | management plane = คนที่เข้ามาสั่งงานทั้งสองฝ่าย\n\n📗 จำไว้สอบ: control=โปรโตคอลเราต์+STP+ARP | data=ส่งต่อแพ็กเก็ต | management=SSH/SNMP/NETCONF',
  },
  {
    id: 161,
    kind: 'multi',
    prompt: 'Which two cable types must be used to connect an access point to the WLC when 2.5-Gbps and 5-Gbps upload speeds are required? (Choose two.)',
    options: [
      { key: 'A', text: '10GBASE-T' },
      { key: 'B', text: '1000BASE-LX/LH' },
      { key: 'C', text: 'Cat 5e' },
      { key: 'D', text: 'Cat 5' },
      { key: 'E', text: 'Cat 3' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — Multigigabit Ethernet (802.3bz / Cisco mGig)\n• AP รุ่นใหม่ (Wi-Fi 5 Wave 2, Wi-Fi 6) ทำทรูพุตไร้สายได้เกิน 1 Gbps แต่การเดินสายทองแดงใหม่ทั้งอาคารมีต้นทุนสูงมาก\n• 802.3bz จึงกำหนดความเร็ว 2.5GBASE-T และ 5GBASE-T ที่วิ่งได้บนสาย Cat 5e เดิม ⭐ ระยะ 100 เมตรเต็ม\n• 10GBASE-T รองรับความเร็วต่ำกว่าได้ทั้งหมด (10G/5G/2.5G/1G/100M) จึงครอบคลุมความต้องการ 2.5 และ 5 Gbps แน่นอน ⭐\n\n📊 ความสามารถของสายแต่ละชนิด\n• Cat 3 → 10 Mbps เท่านั้น (ยุคโทรศัพท์)\n• Cat 5 → 100 Mbps (Gigabit ยังไม่รับประกัน)\n• Cat 5e → 1 Gbps และรองรับ 2.5G/5G ด้วย 802.3bz ✔\n• Cat 6 → 1 Gbps ที่ 100 ม. หรือ 10 Gbps ที่ 55 ม.\n• Cat 6a → 10 Gbps ที่ 100 ม.\n\n✅ ทำไม A ถูก: อินเทอร์เฟซ 10GBASE-T ทำ auto-negotiate ลงมาที่ 2.5G และ 5G ได้ จึงรองรับความต้องการนี้\n✅ ทำไม C ถูก: Cat 5e เป็นสายขั้นต่ำที่ 802.3bz รับรองสำหรับความเร็ว 2.5G และ 5G\n\n❌ ทำไมข้ออื่นผิด:\nB. 1000BASE-LX/LH เป็นมาตรฐานไฟเบอร์ที่ทำได้แค่ 1 Gbps — ไม่ถึง 2.5 หรือ 5 Gbps\nD. Cat 5 รองรับได้แค่ 100 Mbps ไม่ผ่านเกณฑ์\nE. Cat 3 รองรับได้แค่ 10 Mbps ล้าสมัยมาก\n\n📗 จำไว้สอบ: mGig (802.3bz) = 2.5G/5G บน Cat 5e เดิม • 10GBASE-T ลดความเร็วลงมารองรับได้ทั้งหมด',
  },
  {
    id: 162,
    kind: 'single',
    prompt: 'What is a benefit for external users who consume public cloud resources?',
    options: [
      { key: 'A', text: 'Implemented over a dedicated WAN' },
      { key: 'B', text: 'All hosted on physical servers' },
      { key: 'C', text: 'Accessed over the Internet' },
      { key: 'D', text: 'Located in the same data center as the users' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คุณลักษณะของ public cloud\n• ทรัพยากรถูกโฮสต์โดยผู้ให้บริการภายนอก (AWS, Azure, GCP)\n• เข้าถึงได้จากทุกที่ผ่านอินเทอร์เน็ต ไม่ต้องลงทุนวางลิงก์ WAN เฉพาะ ⭐\n• จ่ายตามที่ใช้จริง (pay-as-you-go) ไม่ต้องซื้อฮาร์ดแวร์ล่วงหน้า\n• ขยาย/ลดขนาดได้ทันที (rapid elasticity)\n• ผู้ใช้ไม่ต้องดูแลฮาร์ดแวร์และดาต้าเซ็นเตอร์เลย\n\n✅ ทำไม C ถูก: ข้อได้เปรียบชัดเจนที่สุดสำหรับผู้ใช้ภายนอกคือเข้าถึงบริการได้จากทุกที่ผ่านอินเทอร์เน็ต — พนักงานทำงานจากบ้าน สาขา หรือระหว่างเดินทางก็ใช้ได้เหมือนกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. dedicated WAN (เช่น MPLS, Direct Connect) เป็นตัวเลือกเสริมที่ต้องจ่ายเพิ่มสำหรับองค์กรที่ต้องการแบนด์วิดท์รับประกัน ไม่ใช่ลักษณะพื้นฐานของ public cloud\nB. public cloud ทำงานบนโครงสร้างเสมือน (VM และคอนเทนเนอร์) เป็นหลัก ไม่ใช่เซิร์ฟเวอร์กายภาพล้วน ๆ\nD. ทรัพยากรอยู่ในดาต้าเซ็นเตอร์ของผู้ให้บริการซึ่งอาจอยู่คนละทวีปกับผู้ใช้ — และนั่นก็ไม่ใช่ปัญหาเพราะเข้าถึงผ่านอินเทอร์เน็ตได้อยู่ดี\n\n📗 จำไว้สอบ: public cloud = เข้าผ่านอินเทอร์เน็ต + จ่ายตามใช้ + ขยายทันที + ไม่ต้องดูแลฮาร์ดแวร์',
  },
  {
    id: 163,
    kind: 'single',
    prompt: 'An engineer must update the configuration on two PCs in two different subnets to communicate locally with each other. One PC is configured with IP address 192.168.25.128/25 and the other with 192.168.25.100/25. Which network mask must the engineer configure on both PCs to enable the communication?',
    options: [
      { key: 'A', text: '255.255.255.248' },
      { key: 'B', text: '255.255.255.224' },
      { key: 'C', text: '255.255.255.0' },
      { key: 'D', text: '255.255.255.252' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สองโฮสต์จะคุยกันตรง ๆ (โดยไม่ผ่านเราเตอร์) ได้ ต้องอยู่ในซับเน็ตเดียวกัน\n\n🔍 วิเคราะห์สถานการณ์ปัจจุบัน (/25)\n• /25 → mask 255.255.255.128 → block size 128 → แบ่ง 192.168.25.0/24 เป็นสองครึ่ง\n  • ครึ่งแรก 192.168.25.0/25 → ช่วง .0 – .127\n  • ครึ่งหลัง 192.168.25.128/25 → ช่วง .128 – .255\n• PC1 = 192.168.25.128 → อยู่ครึ่งหลัง (และเป็น network address ของครึ่งหลังพอดี)\n• PC2 = 192.168.25.100 → อยู่ครึ่งแรก\n→ คนละซับเน็ต จึงคุยกันตรง ๆ ไม่ได้\n\n🔧 ต้องขยาย mask ให้สั้นลงจนครอบทั้ง .100 และ .128\n• /26 (255.255.255.192) → block 64 → .64–.127 กับ .128–.191 → ยังแยกกัน ✘\n• /25 → ยังแยกกัน ✘\n• /24 (255.255.255.0) → ครอบ .0 – .255 ทั้งหมด → ทั้งสองอยู่ซับเน็ตเดียวกัน ✔ ⭐\n\n✅ ทำไม C ถูก: 255.255.255.0 (/24) เป็นตัวเลือกเดียวที่ทำให้ทั้ง 192.168.25.100 และ 192.168.25.128 ตกอยู่ในซับเน็ต 192.168.25.0/24 เดียวกัน และทั้งคู่กลายเป็นโฮสต์ที่ใช้ได้ปกติ\n\n❌ ทำไมข้ออื่นผิด:\nA. /29 (block 8) → .96–.103 กับ .128–.135 → ยิ่งแยกห่างกว่าเดิม\nB. /27 (block 32) → .96–.127 กับ .128–.159 → ยังคนละซับเน็ต\nD. /30 (block 4) → เล็กมาก แยกกันแน่นอน\n\n📗 จำไว้สอบ: mask ยิ่งสั้น ซับเน็ตยิ่งใหญ่ • อยากให้สองที่อยู่อยู่ด้วยกัน = ทำ mask ให้สั้นลง',
  },
  {
    id: 164,
    kind: 'single',
    prompt: 'Which key function is provided by the data plane?',
    options: [
      { key: 'A', text: 'Originating packets' },
      { key: 'B', text: 'Exchanging routing table data' },
      { key: 'C', text: 'Making routing decisions' },
      { key: 'D', text: 'Forwarding traffic to the next hop' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — data plane มีหน้าที่เดียวคือ "ส่งต่อทราฟฟิกของผู้ใช้ให้เร็วที่สุด"\n\n🔹 สิ่งที่ data plane ทำ\n• ค้น FIB ด้วย destination IP → ได้อินเทอร์เฟซขาออกและ next-hop\n• เขียนเฮดเดอร์ชั้น 2 ใหม่ (MAC ต้นทาง/ปลายทาง) แล้วส่งออก ⭐\n• ค้นตาราง MAC สำหรับสวิตชิ่ง, ใส่/ถอด VLAN tag, ทำ NAT, บังคับ ACL, จัดคิว QoS, ลด TTL\n• ทำในฮาร์ดแวร์ ASIC/TCAM ไม่ผ่าน CPU\n\n✅ ทำไม D ถูก: การส่งต่อทราฟฟิกไปยัง next hop คือฟังก์ชันหลักและเป็นเหตุผลที่ data plane มีอยู่\n\n❌ ทำไมข้ออื่นผิด:\nA. การ "สร้าง" แพ็กเก็ตขึ้นเอง (เช่น OSPF Hello, ARP request, ICMP reply) เป็นงานที่ CPU ทำ = control plane\nB. การแลกเปลี่ยนข้อมูลตารางเราต์กับเพื่อนบ้าน = control plane\nC. การ "ตัดสินใจเรื่องเส้นทาง" (คำนวณว่าเส้นไหนดีที่สุดด้วย SPF/DUAL) = control plane — data plane เพียงทำตามผลลัพธ์ที่ถูกโปรแกรมลงมาใน FIB แล้ว\n\n💡 เส้นแบ่งที่ต้องแม่น: control plane = "คิด/ตัดสินใจ" | data plane = "ลงมือส่ง"\n\n📗 จำไว้สอบ: data plane = forwarding เท่านั้น • ทุกอย่างที่ต้อง "คิด" หรือ "คุยกับเพื่อนบ้าน" = control plane',
  },
  {
    id: 165,
    kind: 'single',
    prompt: 'When should an engineer implement a collapsed-core architecture?',
    options: [
      { key: 'A', text: 'Only when using VSS technology' },
      { key: 'B', text: 'For small networks with minimal need for growth' },
      { key: 'C', text: 'For large networks that are connected to multiple remote sites' },
      { key: 'D', text: 'The access and distribution layers must be on the same device' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — collapsed core (two-tier) = ยุบชั้น core เข้ากับ distribution\n\n🔹 เหมาะเมื่อไร\n• เครือข่ายขนาดเล็กถึงกลาง ผู้ใช้ไม่มาก\n• งบประมาณจำกัด อยากลดจำนวนอุปกรณ์ ⭐\n• ไม่คาดว่าจะขยายมากในอนาคตอันใกล้ ⭐\n• ไซต์เดียวหรือไม่กี่อาคาร\n\n🔹 ไม่เหมาะเมื่อไร\n• เครือข่ายใหญ่หลายอาคาร/หลายไซต์ → ควรใช้ three-tier\n• ต้องการความพร้อมใช้งานสูงสุด → three-tier ที่มี core แยกจะทนทานกว่า\n• คาดว่าจะโตเร็ว → ควรออกแบบ three-tier ตั้งแต่แรก จะได้ไม่ต้องรื้อทำใหม่\n\n✅ ทำไม B ถูก: ตรงกับกรณีใช้งานหลักของ collapsed core — เครือข่ายเล็กที่ไม่มีแผนขยายมากนัก\n\n❌ ทำไมข้ออื่นผิด:\nA. VSS (Virtual Switching System) เป็นเทคโนโลยีรวมสวิตช์สองตัวให้ทำงานเป็นตัวเดียวเชิงตรรกะ — ใช้ร่วมกับ collapsed core ได้แต่ไม่ใช่เงื่อนไขบังคับ (คำว่า "only" ทำให้ผิด)\nC. เครือข่ายใหญ่ที่เชื่อมหลายไซต์ต้องใช้ three-tier ที่มี core แยกออกมา\nD. ใน collapsed core ชั้นที่ถูกยุบคือ core + distribution ไม่ใช่ access + distribution — access ยังแยกอยู่เสมอ\n\n📗 จำไว้สอบ: collapsed core = เล็ก + งบจำกัด + ไม่โตมาก | three-tier = ใหญ่ + หลายไซต์ + ต้องการขยาย',
  },
  {
    id: 166,
    kind: 'single',
    image: v4q166,
    prompt: 'Refer to the exhibit. An engineer assigns IP addressing to the current VLAN with three PCs. The configuration must also account for the expansion of 30 additional VLANs using the same Class C subnet for subnetting and host count. Which command set fulfills the request while reserving address space for the expected growth?',
    options: [
      { key: 'A', text: 'interface vlan 10 / ip address 192.168.0.1 265.255.255.252' },
      { key: 'B', text: 'interface vlan 10 / ip address 192.168.0.1 255.255.255.248' },
      { key: 'C', text: 'interface vlan 10 / ip address 192.168.0.1 255.255.255.0' },
      { key: 'D', text: 'interface vlan 10 / ip address 192.168.0.1 255.255.255.128' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ต้องแบ่ง Class C เดียว (192.168.0.0/24) ให้ได้จำนวนซับเน็ตตามที่ต้องการ\n\n1️⃣ ต้องการกี่ซับเน็ต\n• VLAN ปัจจุบัน 1 + ขยายอีก 30 = 31 ซับเน็ต\n\n2️⃣ ต้องยืมกี่บิตจาก /24\n• 2^4 = 16 ✘ ไม่พอ 31\n• 2^5 = 32 ✔ พอ (เหลือเผื่ออีก 1)\n→ ยืม 5 บิต → /24 + 5 = /29 → mask 255.255.255.248\n\n3️⃣ แต่ละซับเน็ตรองรับกี่โฮสต์\n• /29 → 2^3 − 2 = 6 โฮสต์\n• VLAN ปัจจุบันมี 3 PC + ต้องมี gateway 1 ที่อยู่ = 4 → 6 ที่อยู่เพียงพอ ✔\n\n✅ ทำไม B ถูก: mask 255.255.255.248 (/29) ให้ 32 ซับเน็ตซึ่งครอบคลุม 31 VLAN ที่ต้องการ และแต่ละซับเน็ตมี 6 โฮสต์ซึ่งเพียงพอกับ 3 PC บวก gateway\n\n❌ ทำไมข้ออื่นผิด:\nA. "265" ไม่ใช่ค่าที่เป็นไปได้ในอ็อกเท็ต (สูงสุดคือ 255) — mask นี้ผิดรูปแบบ\nC. 255.255.255.0 คือ /24 ทั้งก้อน = ซับเน็ตเดียว ไม่ได้แบ่งอะไรเลย รองรับ 31 VLAN ไม่ได้\nD. 255.255.255.128 คือ /25 = แบ่งได้แค่ 2 ซับเน็ต ไม่พอ 31 VLAN\n\n📗 จำไว้สอบ: ยืม n บิต = 2^n ซับเน็ต • จาก /24 ยืม 5 บิต = /29 = 32 ซับเน็ต × 6 โฮสต์',
  },
  {
    id: 167,
    kind: 'single',
    prompt: 'A client experiences slow throughput from a server that is directly connected to the core switch in a data center. A network engineer finds minimal latency on connections to the server, but data transfers are unreliable, and the output of the show interfaces counters errors command shows a high FCS-Err count on the interface that is connected to the server. What is the cause of the throughput issue?',
    options: [
      { key: 'A', text: 'a physical cable fault' },
      { key: 'B', text: 'a speed mismatch' },
      { key: 'C', text: 'high bandwidth usage' },
      { key: 'D', text: 'a cable that is too long' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ตัวนับ FCS-Err (Frame Check Sequence Error) บอกอะไร\n• เฟรมมาถึงครบทั้งเฟรม แต่ค่า CRC ที่คำนวณได้ไม่ตรงกับที่ผู้ส่งแนบมา\n• แปลว่าบิตบางตัว "เพี้ยน" ระหว่างเดินทางบนสื่อกลาง\n• สาเหตุหลัก: สายชำรุด หัวต่อหลวม/ออกซิไดซ์ สายพับงอเกินรัศมี หรือมีสัญญาณรบกวนแม่เหล็กไฟฟ้า ⭐\n\n🔍 วิเคราะห์เบาะแสในโจทย์\n• "minimal latency" → ไม่มีคอขวดหรือคิวยาว → ตัดปัญหาแบนด์วิดท์ทิ้ง\n• "data transfers are unreliable" → ข้อมูลเสียหายต้องส่งซ้ำ ทรูพุตจึงตก\n• "high FCS-Err count" → ชี้ตรงไปที่ชั้นกายภาพ\n• "directly connected to the core switch" → เป็นการเชื่อมต่อระยะสั้นภายในดาต้าเซ็นเตอร์\n\n✅ ทำไม A ถูก: FCS error จำนวนมากโดยไม่มีปัญหา latency คือลายเซ็นของสายกายภาพที่มีปัญหา — วิธีแก้คือเปลี่ยนสาย เปลี่ยนหัว หรือย้ายพอร์ต\n\n❌ ทำไมข้ออื่นผิด:\nB. speed mismatch จะทำให้ลิงก์ไม่ขึ้นเลย ไม่ใช่ขึ้นแล้วมี FCS error\nC. หากใช้แบนด์วิดท์สูงจนเต็ม จะเห็น output drops และ latency สูง ไม่ใช่ FCS error — และโจทย์ระบุว่า latency ต่ำ\nD. สายยาวเกินจะทำให้เกิด late collision เป็นหลัก และในดาต้าเซ็นเตอร์ที่เซิร์ฟเวอร์ต่อตรงกับสวิตช์ ระยะสายสั้นมากอยู่แล้ว\n\n📗 จำไว้สอบ: FCS-Err / CRC สูง = ปัญหาสายกายภาพ • latency ต่ำแต่ทรูพุตแย่ = ข้อมูลเสียหายต้องส่งซ้ำ',
  },
  {
    id: 168,
    kind: 'single',
    prompt: 'What is the difference between 1000BASE-LX/LH and 1000BASE-ZX interfaces?',
    options: [
      { key: 'A', text: '1000BASE-LX/LH interoperates with multimode and single-mode fiber, and 1000BASE-ZX needs a conditioning patch cable with multimode.' },
      { key: 'B', text: '1000BASE-ZX interoperates with dual-rate 100M/1G 10Km SFP over multimode fiber, and 1000BASE-LX/LH supports only single-rate' },
      { key: 'C', text: '1000BASE-ZX is supported on links up to 1000km, and 1000BASE-LX/LH operates over links up to 70 km' },
      { key: 'D', text: '1000BASE-LX/LH is supported on links up to 10km, and 1000Base-ZX operates over links up to 70 km' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — มาตรฐาน Gigabit Ethernet บนไฟเบอร์ และระยะทางสูงสุด\n\n• 1000BASE-SX → multimode fiber, 850 nm, ระยะ 220–550 เมตร\n• 1000BASE-LX/LH → single-mode fiber ระยะสูงสุด 10 กิโลเมตร ⭐ (ใช้กับ multimode ได้ถึง 550 ม. แต่ต้องมี mode-conditioning patch cable)\n• 1000BASE-ZX → single-mode fiber, 1550 nm, ระยะสูงสุด 70 กิโลเมตร ⭐ (บางแหล่งระบุ ~100 กม. บนไฟเบอร์คุณภาพสูง)\n\n✅ ทำไม D ถูก: ระบุระยะทางถูกต้องทั้งสองมาตรฐาน — LX/LH = 10 กม. และ ZX = 70 กม. ซึ่งคือความต่างหลักระหว่างทั้งสอง\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับกัน — ตัวที่ต้องใช้ mode-conditioning patch cable กับ multimode คือ LX/LH ไม่ใช่ ZX (ZX ออกแบบมาสำหรับ single-mode ระยะไกลเท่านั้น)\nB. ZX ไม่ได้ทำงานบน multimode fiber และคำอธิบายเรื่อง dual-rate ก็ไม่ตรงกับมาตรฐาน\nC. ตัวเลขสลับและเกินจริง — ZX ไม่ถึง 1000 กม. และ LX/LH ไม่ถึง 70 กม.\n\n📗 จำไว้สอบ: SX=MMF 550 ม. | LX/LH=SMF 10 กม. | ZX=SMF 70 กม. • ยิ่งความยาวคลื่นสูง ยิ่งไปได้ไกล',
  },
  {
    id: 169,
    kind: 'multi',
    prompt: 'What are two reasons to implement IPv4 private addressing on a network? (Choose two.)',
    options: [
      { key: 'A', text: 'To enable internal applications to treat the private IPv4 addresses as unique' },
      { key: 'B', text: 'To facilitate renumbering when merging networks' },
      { key: 'C', text: 'To expand the routing table on the router' },
      { key: 'D', text: 'To provide protection from external denial-of-service attacks' },
      { key: 'E', text: 'To conserve global unique IPv4 addresses' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — เหตุผลที่ถูกต้องของการใช้ private IPv4\n1️⃣ ประหยัด public IPv4 ที่มีจำกัด — เจตนารมณ์หลักของ RFC 1918 ⭐\n2️⃣ ภายในองค์กร ที่อยู่ส่วนตัวยังคง "ไม่ซ้ำกัน" และแอปพลิเคชันภายในใช้มันระบุเครื่องแต่ละตัวได้อย่างชัดเจน เหมือนใช้ public IP ทุกประการ ⭐\n\n✅ ทำไม A ถูก: แม้จะเป็นที่อยู่ที่องค์กรอื่นก็ใช้ได้ แต่ "ภายในองค์กรของเรา" ที่อยู่เหล่านี้ไม่ซ้ำกันเลย แอปภายในจึงอ้างอิงและระบุตัวตนเครื่องได้ตามปกติ\n✅ ทำไม E ถูก: การอนุรักษ์ที่อยู่ IPv4 ระดับโลกคือเหตุผลตั้งต้นของ RFC 1918\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับด้าน — การควบรวมเครือข่ายสองแห่งที่ต่างก็ใช้ 192.168.1.0/24 จะเกิดปัญหาที่อยู่ทับซ้อน ต้องเสียเวลาเปลี่ยนหมายเลขใหม่ทั้งฝั่ง private address จึงทำให้การควบรวม "ยากขึ้น" ไม่ใช่ง่ายขึ้น\nC. ตรงข้าม — private address ช่วยให้ตารางเราต์บนอินเทอร์เน็ต "เล็กลง" ไม่ใช่ขยายตารางบนเราเตอร์\nD. NAT ไม่ได้ป้องกัน DoS — การโจมตี DoS ยิงไปที่ public IP ของ firewall/เราเตอร์ขอบซึ่งยังล้นได้เหมือนเดิม การป้องกัน DoS ต้องใช้ firewall, rate limiting หรือบริการ scrubbing\n\n📗 จำไว้สอบ: private IPv4 = ประหยัด public IP + ระบุตัวตนภายในได้ไม่ซ้ำ • ไม่ได้ป้องกัน DoS และทำให้ควบรวมยากขึ้น',
  },
  {
    id: 170,
    kind: 'single',
    prompt: 'Which concern is addressed with the use of private IPv4 addressing?',
    options: [
      { key: 'A', text: 'Lack of routing protocol support for CIDR and VLSM' },
      { key: 'B', text: 'Lack of security protocols at the network perimeter' },
      { key: 'C', text: 'Lack of available TCP/UDP ports per IPv5 address' },
      { key: 'D', text: 'Lack of available publicly routable unique IPv4 address' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ปัญหาที่ RFC 1918 ถูกสร้างมาแก้\n• IPv4 มีที่อยู่ทั้งหมด 2^32 ≈ 4.3 พันล้าน ซึ่งไม่พอกับจำนวนอุปกรณ์บนโลก\n• IANA จ่ายบล็อก /8 สุดท้ายให้ RIR ไปตั้งแต่เดือนกุมภาพันธ์ 2011 → public IPv4 หมดอย่างเป็นทางการ\n• RFC 1918 บรรเทาปัญหาโดยให้องค์กรใช้ที่อยู่ซ้ำกันได้ภายใน แล้วแปลงเป็น public IP ไม่กี่ตัวผ่าน NAT ตอนออกเน็ต ⭐\n\n✅ ทำไม D ถูก: การขาดแคลนที่อยู่ IPv4 สาธารณะที่ไม่ซ้ำกันและเราต์ได้ คือปัญหาที่ private addressing ถูกออกแบบมาแก้โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. CIDR และ VLSM เป็นเทคนิคการแบ่งซับเน็ตแบบยืดหยุ่น รองรับโดยโปรโตคอลไร้คลาส (OSPF, EIGRP, RIPv2, BGP) อยู่แล้ว — ไม่เกี่ยวกับ private address\nB. private address ไม่ได้ให้ความปลอดภัยที่ขอบเครือข่าย — ต้องใช้ firewall, IPS, VPN ต่างหาก\nC. ไม่มีสิ่งที่เรียกว่า "IPv5" (เลข 5 ถูกใช้ทดลองกับ ST protocol แล้วยกเลิกไป) และจำนวนพอร์ตต่อที่อยู่คือ 65,535 ซึ่งไม่ใช่ปัญหาที่ private address แก้\n\n📗 จำไว้สอบ: private IPv4 แก้ปัญหาเดียวคือ "public IPv4 ไม่พอ" • ความปลอดภัยต้องใช้เครื่องมืออื่น',
  },
  {
    id: 171,
    kind: 'single',
    prompt: 'What is the path for traffic sent from one user workstation to another workstation on a separate switch in a three-tier architecture model?',
    options: [
      { key: 'A', text: 'access → core → access' },
      { key: 'B', text: 'access → distribution → distribution → access' },
      { key: 'C', text: 'access → core → distribution → access' },
      { key: 'D', text: 'access → distribution → core → distribution → access' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — กฎการไหลของทราฟฟิกในโมเดล 3 ชั้น\n• อุปกรณ์ปลายทางเสียบที่ access layer เสมอ\n• access ต่อขึ้นไปหา distribution เท่านั้น (ไม่เคยต่อตรงเข้า core)\n• distribution ต่อขึ้นไปหา core\n• core เชื่อมบล็อก distribution ต่าง ๆ เข้าด้วยกัน\n→ ห้ามข้ามชั้น เพราะการข้ามชั้นทำลายความเป็นลำดับชั้นและทำให้ออกแบบ/แก้ปัญหายาก\n\n🔍 ไล่เส้นทางเมื่อผู้ใช้สองคนอยู่คนละบล็อก\nPC1 → สวิตช์ access A → distribution A → core → distribution B → สวิตช์ access B → PC2\n\n✅ ทำไม D ถูก: เป็นเส้นทางเดียวที่เดินครบทุกชั้นตามลำดับ ขึ้นจาก access ผ่าน distribution ไป core แล้วลงกลับมาอีกฝั่งอย่างสมมาตร\n\n❌ ทำไมข้ออื่นผิด:\nA. ข้ามชั้น distribution ทั้งสองฝั่ง — access ไม่เคยต่อตรงเข้า core\nB. ขาด core ไป — ถ้าอยู่คนละบล็อก distribution ต้องผ่าน core เสมอ (distribution สองตัวไม่ได้ต่อตรงกันเอง)\nC. ไม่สมมาตร — ขาไปข้าม distribution แต่ขากลับมี ซึ่งเป็นไปไม่ได้ในโครงสร้างแบบลำดับชั้น\n\n💡 ข้อยกเว้น: ถ้าเวิร์กสเตชันทั้งสองอยู่ใต้บล็อก distribution เดียวกัน เส้นทางจะเป็น access → distribution → access โดยไม่ต้องขึ้น core\n\n📗 จำไว้สอบ: three-tier = access → distribution → core → distribution → access (ขึ้นแล้วลง สมมาตรเสมอ)',
  },
  {
    id: 172,
    kind: 'single',
    prompt: 'What is the difference between IPv6 unicast and anycast addressing?',
    options: [
      { key: 'A', text: 'An individual IPv6 unicast address is supported on a single interface on one node, but an IPv6 anycast address is assigned to a group of interfaces on multiple nodes.' },
      { key: 'B', text: 'IPv6 anycast nodes must be explicitly configured to recognize the anycast address, but IPv6 unicast nodes require no special configuration.' },
      { key: 'C', text: 'IPv6 unicast nodes must be explicitly configured to recognize the unicast address, but IPv6 anycast nodes require no special configuration.' },
      { key: 'D', text: 'Unlike an IPv6 anycast address, an IPv6 unicast address is assigned to a group of interfaces on multiple nodes.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ความต่างพื้นฐานอยู่ที่ "จำนวนอินเทอร์เฟซที่ถือที่อยู่นั้น"\n\n🔹 Unicast\n• ที่อยู่หนึ่งผูกกับอินเทอร์เฟซเดียว บนอุปกรณ์เดียว ⭐\n• แพ็กเก็ตที่ส่งไปจะถึงอินเทอร์เฟซนั้นเท่านั้น\n\n🔹 Anycast\n• ที่อยู่เดียวกันถูกกำหนดให้อินเทอร์เฟซหลายตัว บนอุปกรณ์หลายเครื่อง ⭐\n• เราเตอร์ส่งแพ็กเก็ตไปยังตัวที่ "ใกล้ที่สุด" ตามการวัดของโปรโตคอลเราต์ (ไม่ได้ส่งให้ทุกตัว)\n• ที่อยู่ anycast ดึงมาจากพื้นที่ unicast ปกติ — แยกจากภายนอกไม่ออกว่าเป็น anycast\n• ใช้จริงกับ DNS root server, CDN, 6to4 relay\n\n✅ ทำไม A ถูก: อธิบายความต่างได้ตรงตามนิยาม — unicast = อินเทอร์เฟซเดียวบนโหนดเดียว, anycast = กลุ่มอินเทอร์เฟซบนหลายโหนด\n\n❌ ทำไมข้ออื่นผิด:\nB. ประโยคนี้ถูกในทางเทคนิค (บน Cisco IOS ต้องใส่คีย์เวิร์ด anycast กำกับ) แต่ไม่ใช่ "ความแตกต่างพื้นฐาน" ที่โจทย์ถาม — ความต่างหลักคือเรื่องจำนวนอินเทอร์เฟซที่ถือที่อยู่\nC. กลับด้าน — unicast นั่นแหละที่ไม่ต้องตั้งค่าพิเศษ\nD. กลับด้านสนิท — anycast ต่างหากที่ถูกกำหนดให้กลุ่มอินเทอร์เฟซบนหลายโหนด\n\n📗 จำไว้สอบ: unicast=1 อินเทอร์เฟซ | anycast=หลายอินเทอร์เฟซ ส่งถึงตัวใกล้สุด | multicast=หลายอินเทอร์เฟซ ส่งถึงทุกตัว',
  },
  {
    id: 173,
    kind: 'single',
    image: v4q173,
    prompt: 'Refer to the exhibit. Between which zones do wireless users expect to experience intermittent connectivity?',
    options: [
      { key: 'A', text: 'between zones 1 and 2' },
      { key: 'B', text: 'between zones 2 and 5' },
      { key: 'C', text: 'between zones 3 and 4' },
      { key: 'D', text: 'between zones 3 and 6' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Co-channel interference (CCI)\n• เซลล์ Wi-Fi ที่พื้นที่ครอบคลุมซ้อนทับกันจะต้องใช้ "ช่องที่ไม่ทับกัน" (1, 6, 11)\n• ถ้าเซลล์สองเซลล์ที่ซ้อนกันดันใช้ "ช่องเดียวกัน" ทั้งคู่ต้องผลัดกันส่ง (แชร์เวลาออกอากาศ)\n• ผลลัพธ์: ทรูพุตตก แพ็กเก็ตหน่วง และผู้ใช้ที่เดินอยู่บริเวณรอยต่อจะรู้สึกว่าเชื่อมต่อติด ๆ ดับ ๆ ⭐\n\n🔍 อ่าน exhibit\n• ภาพแสดง 8 เซลล์ที่ซ้อนทับกัน โดยมีคำอธิบาย 3 ช่อง: Channel 1, Channel 6, Channel 11\n• ลายเส้นในแต่ละเซลล์บอกว่าเซลล์นั้นใช้ช่องอะไร\n• เซลล์ 3 และเซลล์ 4 ที่อยู่ติดกันใช้ "ช่องเดียวกัน" (ช่อง 11) และพื้นที่ทับกันด้วย ⛔\n\n✅ ทำไม C ถูก: โซน 3 กับ 4 เป็นคู่เดียวที่ซ้อนทับกันในขณะที่ใช้ช่องสัญญาณเดียวกัน จึงเกิด co-channel interference ทำให้ผู้ใช้บริเวณนั้นเชื่อมต่อไม่ต่อเนื่อง\n\n❌ ทำไมข้ออื่นผิด: คู่โซนอื่น ๆ (1-2, 2-5, 3-6) แม้จะซ้อนทับกันแต่ใช้ช่องที่ต่างกันและไม่ทับกัน จึงส่งพร้อมกันได้โดยไม่รบกวนกัน\n\n📗 จำไว้สอบ: เซลล์ที่ซ้อนกัน + ช่องเดียวกัน = co-channel interference → ต้องเปลี่ยนให้เป็น 1/6/11 สลับกัน',
  },
  {
    id: 174,
    kind: 'single',
    prompt: 'Which WAN topology provides a combination of simplicity, quality, and availability?',
    options: [
      { key: 'A', text: 'partial mesh' },
      { key: 'B', text: 'full mesh' },
      { key: 'C', text: 'point-to-point' },
      { key: 'D', text: 'hub-and-spoke' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เทียบโทโพโลยี WAN ในสามมิติ: ความเรียบง่าย คุณภาพ และความพร้อมใช้งาน\n\n🔹 Hub-and-spoke ⭐\n• ทุกสาขา (spoke) เชื่อมเข้าศูนย์กลาง (hub) ตัวเดียว\n• Simplicity → จำนวนลิงก์เท่ากับจำนวนสาขา บริหารและแก้ปัญหาง่ายที่สุด\n• Quality → ควบคุมคุณภาพและนโยบายได้จากจุดเดียว\n• Availability → เพิ่มลิงก์สำรองที่ hub ก็ได้ความทนทานในระดับที่ยอมรับได้ ด้วยต้นทุนที่สมเหตุสมผล\n• เป็นโทโพโลยีที่องค์กรส่วนใหญ่ใช้จริง (สำนักงานใหญ่ + สาขา)\n\n🔹 Full mesh → ทนทานที่สุดแต่แพงและซับซ้อนมาก (n(n−1)/2 ลิงก์) — ไม่ "simple"\n🔹 Partial mesh → สมดุลกว่า full mesh แต่ยังซับซ้อนกว่า hub-and-spoke\n🔹 Point-to-point → เรียบง่ายที่สุดแต่ไม่มีความซ้ำซ้อนเลย และเชื่อมได้แค่สองจุด\n\n✅ ทำไม D ถูก: hub-and-spoke เป็นตัวเลือกเดียวที่ให้ทั้งสามคุณสมบัติในระดับสมดุล — เรียบง่าย ควบคุมคุณภาพได้ และยังพร้อมใช้งานในระดับที่ยอมรับได้\n\n📗 จำไว้สอบ: full mesh=ทนทานสุด/แพงสุด | hub-and-spoke=สมดุลที่สุด/ใช้จริงมากที่สุด | point-to-point=สองจุดเท่านั้น',
  },
  {
    id: 175,
    kind: 'drag',
    image: v4q175,
    prompt: 'Drag and drop the statements about wireless architectures from the left onto the architectures on the right.',
    categories: [
      {
        name: 'Layer 2 Tunnel',
        items: [
          'It encapsulates LWAPP traffic between the access point and the WLC in EtherType 0xBBBB.',
          "It facilitates Layer 2 connectivity between the WLC's wired interface and the WLAN clients.",
        ],
      },
      {
        name: 'Layer 3 Tunnel',
        items: ['It requires IP addresses on the access point and the WLC.', 'It uses UDP or UDP Lite for IPv6 deployments.'],
      },
      {
        name: 'ไม่ใช้ (ตัวลวง)',
        items: ['It forwards only IP EtherType frames.', 'It supports LWAPP tunneling within Ethernet frames and UDP packets.'],
      },
    ],
    explanation:
      '📘 แนวคิด — LWAPP/CAPWAP มีโหมดทันเนล 2 แบบ\n\n🔹 Layer 2 Tunnel (โหมดเก่า เลิกใช้แล้ว)\n• ห่อทราฟฟิก LWAPP ไว้ใน "เฟรมอีเทอร์เน็ต" โดยตรง ใช้ EtherType 0xBBBB ⭐\n• AP กับ WLC ไม่ต้องมี IP address เลย ขอแค่ต่ออยู่ในโดเมนชั้น 2 เดียวกัน\n• ให้การเชื่อมต่อชั้น 2 ระหว่างขาใช้สายของ WLC กับไคลเอนต์ไร้สาย ⭐\n• ข้อจำกัดใหญ่: เราต์ข้ามเราเตอร์ไม่ได้ → AP ต้องอยู่ VLAN เดียวกับ WLC\n\n🔹 Layer 3 Tunnel (โหมดที่ใช้จริงในปัจจุบัน)\n• ห่อไว้ในแพ็กเก็ต IP/UDP → เราต์ข้ามเครือข่ายได้\n• ทั้ง AP และ WLC ต้องมี IP address ⭐\n• CAPWAP ใช้ UDP 5246 (control) / 5247 (data) และใช้ UDP Lite เมื่อใช้งานบน IPv6 ⭐\n• AP จึงอยู่คนละอาคาร คนละไซต์กับ WLC ได้\n\n🔹 ตัวลวงที่ไม่ได้ใช้\n• "It forwards only IP EtherType frames." — ไม่ใช่คำบรรยายเฉพาะของโหมดใดโหมดหนึ่ง\n• "It supports LWAPP tunneling within Ethernet frames and UDP packets." — คลุมเครือ เพราะพูดถึงทั้งสองโหมดพร้อมกัน\n\n📗 จำไว้สอบ: L2 tunnel = EtherType 0xBBBB ไม่ต้องมี IP | L3 tunnel = UDP 5246/5247 ต้องมี IP ทั้งสองฝั่ง',
  },
  {
    id: 176,
    kind: 'drag',
    image: v4q176,
    prompt: 'Drag and drop the Wi-Fi terms from the left onto the descriptions on the right.',
    categories: [
      { name: 'Wi-Fi option in which cells from different access points are linked together', items: ['extended service set'] },
      {
        name: 'Wi-Fi option that enables two or more clients to communicate directly without a central access point',
        items: ['independent basic service set'],
      },
      { name: 'Wi-Fi option based around one or more access points', items: ['infrastructure mode'] },
      { name: 'alphanumeric text string that identifies a wireless network', items: ['SSID'] },
      { name: 'entire wireless cell of an access point and the linkage to the wired network', items: ['distribution system'] },
    ],
    explanation:
      '📘 แนวคิด — ศัพท์โครงสร้าง WLAN ที่ออกสอบบ่อย\n\n• BSS (Basic Service Set) → เซลล์เดียวที่มี AP หนึ่งตัวเป็นศูนย์กลาง ระบุด้วย BSSID (MAC ของวิทยุ AP)\n\n• IBSS (Independent BSS) → โหมด ad-hoc / peer-to-peer ⭐\n  ไคลเอนต์สองเครื่องขึ้นไปคุยกันเองโดยไม่มี AP เป็นตัวกลางเลย\n\n• Infrastructure mode → โหมดปกติที่มี AP หนึ่งตัวขึ้นไปเป็นศูนย์กลาง ⭐\n  ไคลเอนต์ทุกเครื่องคุยผ่าน AP เสมอ ไม่คุยกันตรง ๆ\n\n• ESS (Extended Service Set) → เอาหลาย BSS จาก AP หลายตัวมาเชื่อมโยงกันด้วย SSID เดียวกัน ⭐\n  ทำให้ไคลเอนต์เดินข้ามเซลล์ (roam) ได้อย่างไร้รอยต่อ\n\n• Distribution System (DS) → ระบบใช้สาย (มักเป็นอีเทอร์เน็ต) ที่เชื่อม AP ทั้งหมดเข้าด้วยกันและเชื่อมเซลล์ไร้สายเข้ากับเครือข่ายใช้สาย ⭐\n\n• SSID → สตริงตัวอักษร/ตัวเลขความยาวไม่เกิน 32 อักขระที่ใช้เป็นชื่อเครือข่ายไร้สาย ⭐\n\n📗 จำไว้สอบ: BSS=1 AP | IBSS=ไม่มี AP (ad-hoc) | ESS=หลาย AP SSID เดียวกัน | DS=ระบบใช้สายที่เชื่อม AP | SSID=ชื่อเครือข่าย',
  },
  {
    id: 177,
    kind: 'single',
    prompt: 'How are the switches in a spine-and-leaf topology interconnected?',
    options: [
      { key: 'A', text: 'Each leaf switch is connected to one of the spine switches' },
      { key: 'B', text: 'Each leaf switch is connected to each spine switch.' },
      { key: 'C', text: 'Each leaf switch is connected to two spine switches, making a loop.' },
      { key: 'D', text: 'Each leaf switch is connected to a central leaf switch, then uplinked to a core spine switch.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — กฎการเชื่อมต่อของ spine-and-leaf (Clos fabric) มี 3 ข้อ ต้องจำให้ครบ\n1️⃣ leaf ทุกตัวต้องต่อไปยัง spine "ทุกตัว" ⭐\n2️⃣ leaf ห้ามต่อกันเอง\n3️⃣ spine ห้ามต่อกันเอง\n\n🔹 ผลลัพธ์ที่ได้จากกฎเหล่านี้\n• ทุกเซิร์ฟเวอร์ห่างกัน 2 hop เท่ากันหมด (leaf → spine → leaf) → latency คาดเดาได้\n• มีเส้นทางขนานหลายเส้น → ใช้ ECMP กระจายโหลดได้เต็มทุกลิงก์ ไม่มีพอร์ตถูก STP บล็อก\n• ขยายพอร์ตเข้าถึงด้วยการเพิ่ม leaf | ขยายแบนด์วิดท์ด้วยการเพิ่ม spine\n• เพิ่มตัวใหม่ได้โดยไม่กระทบของเดิม\n\n✅ ทำไม B ถูก: การที่ leaf ทุกตัวต่อไป spine ทุกตัวคือหัวใจของสถาปัตยกรรมนี้ ซึ่งเป็นที่มาของคุณสมบัติทั้งหมดข้างต้น\n\n❌ ทำไมข้ออื่นผิด:\nA. ถ้าต่อไป spine ตัวเดียว จะเสียคุณสมบัติเส้นทางเท่ากันและกลายเป็นจุดล้มเหลวจุดเดียว\nC. โครงสร้างนี้ตั้งใจไม่ให้เกิดลูปชั้น 2 (ใช้เราติ้ง/VXLAN แทน STP) และการต่อแค่สอง spine ก็ไม่ครบตามกฎ\nD. ไม่มีแนวคิด "central leaf switch" ในสถาปัตยกรรมนี้เลย — leaf ไม่ต่อกันเองเด็ดขาด\n\n📗 จำไว้สอบ: leaf ต่อ spine ทุกตัว | leaf ไม่ต่อ leaf | spine ไม่ต่อ spine',
  },
  {
    id: 178,
    kind: 'single',
    prompt: 'What is the primary effect of the spanning-tree portfast command?',
    options: [
      { key: 'A', text: 'It immediately enables the port in the listening state.' },
      { key: 'B', text: 'It immediately puts the port into the forwarding state when the switch is reloaded.' },
      { key: 'C', text: 'It enables BPDU messages.' },
      { key: 'D', text: 'It minimizes spanning-tree convergence time.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — สถานะพอร์ตของ STP แบบดั้งเดิม (802.1D)\n• Blocking (20 วินาที) → Listening (15 วินาที) → Learning (15 วินาที) → Forwarding\n• รวมแล้วพอร์ตต้องรอประมาณ 30–50 วินาทีกว่าจะส่งข้อมูลได้\n• ปัญหา: PC ที่เพิ่งเปิดเครื่องจะขอ DHCP ไม่ทัน เพราะพอร์ตยังไม่ forward\n\n🔧 PortFast แก้ปัญหาอย่างไร\n• ข้ามสถานะ listening และ learning ไปเลย → พอร์ตเข้าสู่ forwarding ทันทีที่ลิงก์ขึ้น ⭐\n• ผลลัพธ์คือ "ลดเวลาที่ต้องรอ" ก่อนใช้งานพอร์ตได้\n• ใช้ได้กับพอร์ต access ที่ต่อกับอุปกรณ์ปลายทางเท่านั้น ห้ามใช้กับพอร์ตที่ต่อสวิตช์ตัวอื่น\n• ควรใช้คู่กับ BPDU Guard เสมอ เพื่อปิดพอร์ตทันทีถ้ามีใครแอบเสียบสวิตช์เข้ามา\n\n✅ ทำไม D ถูก: ผลลัพธ์หลักของ PortFast คือการลดเวลาที่ spanning-tree ต้องใช้ก่อนพอร์ตจะพร้อมส่งข้อมูล — พอร์ตพร้อมใช้งานทันทีแทนที่จะรอ 30–50 วินาที\n\n❌ ทำไมข้ออื่นผิด:\nA. PortFast "ข้าม" สถานะ listening ไม่ใช่เข้าสู่ listening\nB. PortFast ทำงานทุกครั้งที่ "ลิงก์ขึ้น" ไม่ใช่เฉพาะตอนรีบูตสวิตช์ — คำว่า "when the switch is reloaded" จำกัดขอบเขตแคบเกินจริง\nC. PortFast ไม่ได้เปิดใช้ BPDU — พอร์ตยังส่งและรับ BPDU ตามปกติ (นี่คือเหตุผลที่ต้องใช้ BPDU Guard คู่กัน)\n\n📗 จำไว้สอบ: PortFast = ข้าม listening/learning → forwarding ทันที = ลดเวลา convergence • ใช้กับพอร์ตปลายทางเท่านั้น + คู่กับ BPDU Guard',
  },
  {
    id: 179,
    kind: 'single',
    prompt: 'What occurs when PortFast is enabled on an interface that is connected to another switch?',
    options: [
      { key: 'A', text: 'Root port choice and spanning-tree recalculation are accelerated when a switch link goes down.' },
      { key: 'B', text: 'After spanning-tree converges, PortFast shuts down any port that receives BPDUs.' },
      { key: 'C', text: 'VTP is allowed to propagate VLAN configuration information from switch to switch automatically.' },
      { key: 'D', text: 'Spanning-tree fails to detect a switching loop increasing the likelihood of broadcast storms.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เหตุผลที่ PortFast ห้ามใช้กับพอร์ตที่ต่อสวิตช์\n• PortFast ทำให้พอร์ตเข้าสู่ forwarding ทันทีโดยไม่ผ่าน listening/learning\n• สถานะ listening และ learning มีไว้เพื่อให้สวิตช์ "ฟัง BPDU" และตรวจสอบก่อนว่าจะเกิดลูปหรือไม่ ⭐\n• เมื่อข้ามสองสถานะนี้ไป สวิตช์จึงส่งข้อมูลออกทันทีโดยยังไม่รู้ว่ามีเส้นทางซ้ำซ้อนอยู่\n• ถ้าปลายทางเป็นสวิตช์อีกตัวที่มีเส้นทางอื่นเชื่อมถึงกันอยู่แล้ว → เกิดลูปชั้น 2 ทันที\n\n⚠️ ผลของลูปชั้น 2 (ร้ายแรงมาก)\n• Broadcast storm — เฟรม broadcast วนไม่รู้จบ กินแบนด์วิดท์จนเต็ม\n• MAC table instability — ตาราง CAM กระพริบไปมา (MAC flapping)\n• เฟรมซ้ำซ้อนถูกส่งหลายรอบ\n• เฟรมอีเทอร์เน็ตไม่มีฟิลด์ TTL จึงไม่มีอะไรหยุดการวนได้เอง — เครือข่ายล่มจนกว่าจะถอดสาย\n\n✅ ทำไม D ถูก: PortFast บนลิงก์ระหว่างสวิตช์ทำให้ STP ไม่มีโอกาสตรวจพบลูปก่อนพอร์ตเริ่ม forward จึงเสี่ยงเกิด broadcast storm สูงมาก\n\n❌ ทำไมข้ออื่นผิด:\nA. PortFast ไม่ได้เร่งการเลือก root port หรือการคำนวณ STP ใหม่ — มันแค่ข้ามขั้นตอนบนพอร์ตนั้น\nB. การปิดพอร์ตเมื่อได้รับ BPDU คือหน้าที่ของ "BPDU Guard" ซึ่งเป็นฟีเจอร์แยกที่ต้องเปิดเพิ่ม\nC. VTP เป็นโปรโตคอลกระจายข้อมูล VLAN ที่ทำงานผ่าน trunk ไม่เกี่ยวกับ PortFast เลย\n\n📗 จำไว้สอบ: PortFast + ลิงก์ระหว่างสวิตช์ = ลูป + broadcast storm • ป้องกันด้วย BPDU Guard เสมอ',
  },
  {
    id: 180,
    kind: 'single',
    prompt: 'Which QoS Profile is selected in the GUI when configuring a voice over WLAN deployment?',
    options: [
      { key: 'A', text: 'Platinum' },
      { key: 'B', text: 'Bronze' },
      { key: 'C', text: 'Gold' },
      { key: 'D', text: 'Silver' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โปรไฟล์ QoS บน Cisco WLC มี 4 ระดับ เรียงจากสูงไปต่ำ\n\n• Platinum → เสียง (Voice) ⭐ ให้ความสำคัญสูงสุด latency ต่ำสุด\n• Gold → วิดีโอ (Video)\n• Silver → ข้อมูลทั่วไป (Best Effort) — เป็นค่าเริ่มต้นของ WLAN ใหม่\n• Bronze → ทราฟฟิกพื้นหลัง (Background) เช่น การสำรองข้อมูล การอัปเดต\n\n💡 วิธีจำ: เรียงตามมูลค่าโลหะจากแพงสุดไปถูกสุด = Platinum > Gold > Silver > Bronze และเสียงคือสิ่งที่ไวต่อความหน่วงมากที่สุดจึงได้ระดับสูงสุด\n\n✅ ทำไม A ถูก: การใช้งานเสียงผ่าน WLAN (voice over WLAN / VoWLAN) ต้องเลือกโปรไฟล์ Platinum เพื่อให้แพ็กเก็ตเสียงได้รับการจัดคิวก่อนใคร ลด latency และ jitter\n\n💡 เชื่อมโยงกับมาตรฐาน: Platinum แมปกับ WMM Access Category "Voice" (AC_VO) และค่า DSCP EF (46) ซึ่งเป็นค่ามาตรฐานของทราฟฟิกเสียง\n\n❌ ทำไมข้ออื่นผิด:\nB. Bronze เป็นระดับต่ำสุด เหมาะกับทราฟฟิกที่ไม่เร่งด่วน\nC. Gold สำหรับวิดีโอ ซึ่งทนความหน่วงได้มากกว่าเสียง\nD. Silver เป็นค่าเริ่มต้นสำหรับข้อมูลทั่วไป ไม่มีการรับประกันคุณภาพ\n\n📗 จำไว้สอบ: Platinum=Voice | Gold=Video | Silver=Best Effort (ค่าเริ่มต้น) | Bronze=Background',
  },
  {
    id: 181,
    kind: 'single',
    image: v4q181,
    prompt:
      'Refer to the exhibit. Which switch in this configuration will be elected as the root bridge? (All switches use the default bridge priority.) SW1: 0C:E0:38:41:86:07 / SW2: 0C:0E:15:22:05:97 / SW3: 0C:0E:15:1A:3C:9D / SW4: 0C:E0:18:A1:B3:19',
    options: [
      { key: 'A', text: 'SW1' },
      { key: 'B', text: 'SW2' },
      { key: 'C', text: 'SW3' },
      { key: 'D', text: 'SW4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — การเลือก root bridge ของ STP\n• Bridge ID = Bridge Priority (16 บิต) + MAC address (48 บิต)\n• ค่า Bridge ID ที่ "ต่ำที่สุด" ชนะ\n• เทียบ priority ก่อน ถ้าเท่ากันจึงเทียบ MAC address ⭐\n• Priority เริ่มต้น = 32768 (ถ้าใช้ PVST+ จะเป็น 32768 + VLAN ID)\n\n🔍 โจทย์ระบุว่าทุกสวิตช์ใช้ priority เริ่มต้นเท่ากัน → ตัดสินด้วย MAC ที่ต่ำที่สุด\n\n🔧 เทียบ MAC ทีละไบต์จากซ้ายไปขวา\n• ไบต์แรกทุกตัวเป็น 0C เท่ากันหมด → ไปดูไบต์ที่สอง\n• SW2 = 0E | SW3 = 0E | SW1 = E0 | SW4 = E0\n• 0E (ทศนิยม 14) < E0 (ทศนิยม 224) → SW2 และ SW3 เข้ารอบ ตัด SW1 และ SW4 ทิ้ง\n• ไบต์ที่สาม: SW2 = 15, SW3 = 15 → เท่ากัน\n• ไบต์ที่สี่: SW2 = 22 | SW3 = 1A\n• 1A (ทศนิยม 26) < 22 (ทศนิยม 34) → SW3 ชนะ ⭐\n\n✅ ทำไม C ถูก: SW3 (0C:0E:15:1A:3C:9D) มี MAC address ต่ำที่สุด จึงได้เป็น root bridge\n\n❌ ทำไมข้ออื่นผิด:\nA. SW1 มีไบต์ที่สองเป็น E0 ซึ่งสูงกว่า 0E มาก\nB. SW2 ต่างจาก SW3 ที่ไบต์ที่สี่ — 22 > 1A จึงแพ้\nD. SW4 มีไบต์ที่สองเป็น E0 เช่นกัน\n\n⚠️ กับดัก: อย่าเทียบ MAC แบบอ่านเป็นตัวเลขทศนิยมทั้งก้อน ต้องเทียบทีละไบต์ในฐานสิบหกจากซ้ายไปขวา\n\n📗 จำไว้สอบ: root bridge = priority ต่ำสุด → ถ้าเท่ากันดู MAC ต่ำสุด • บังคับให้เป็น root ด้วย spanning-tree vlan x root primary หรือ priority 0',
  },
  {
    id: 182,
    kind: 'drag',
    image: v4q182,
    prompt:
      "Refer to the exhibit. An engineer is required to verify that the network parameters are valid for the users' wireless LAN connectivity on a /24 subnet. Drag and drop the values from the left onto the network parameters on the right. Not all values are used.",
    categories: [
      { name: 'broadcast address', items: ['192.168.1.255'] },
      { name: 'default gateway', items: ['192.168.1.1'] },
      { name: 'host IP address', items: ['192.168.1.20'] },
      { name: 'last assignable IP address in the subnet', items: ['192.168.1.254'] },
      { name: 'MAC address', items: ['B8-76-3F-7C-57-DF'] },
      { name: 'Network address', items: ['192.168.1.0'] },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['1A-76-3F-7C-57-DF'] },
    ],
    explanation:
      '📘 แนวคิด — อ่านค่าจาก ipconfig /all แล้วคำนวณส่วนที่เหลือด้วยหลัก subnetting /24\n\n🔍 อ่าน exhibit (อะแดปเตอร์ Wireless LAN adapter Wi-Fi ที่เชื่อมต่ออยู่จริง)\n• Physical Address = B8-76-3F-7C-57-DF → MAC address ⭐\n• IPv4 Address = 192.168.1.20 → host IP address\n• Subnet Mask = 255.255.255.0 → /24\n• Default Gateway = 192.168.1.1\n\n🔧 คำนวณค่าที่ต้องหาเอง (บน /24)\n• Network address = 192.168.1.0 ⭐ (ที่อยู่แรกของช่วง)\n• Broadcast address = 192.168.1.255 ⭐ (ที่อยู่สุดท้ายของช่วง)\n• Last assignable (usable) = broadcast − 1 = 192.168.1.254 ⭐\n• First assignable = 192.168.1.1 (ซึ่งในที่นี้ถูกใช้เป็น gateway)\n\n⚠️ ตัวลวงที่ไม่ได้ใช้: 1A-76-3F-7C-57-DF\n• เป็น MAC ของอะแดปเตอร์ "Microsoft Wi-Fi Direct Virtual Adapter" ซึ่งมีสถานะ Media disconnected และไม่มี IP\n• สังเกตว่า MAC สองตัวนี้ต่างกันแค่ไบต์แรก (B8 กับ 1A) เพราะ virtual adapter ถูกสร้างจากการ์ดตัวเดียวกัน — ต้องเลือกตัวที่ "เชื่อมต่ออยู่จริง" เท่านั้น\n\n📗 จำไว้สอบ: /24 → network=.0, broadcast=.255, usable=.1–.254 • เลือก MAC ของอะแดปเตอร์ที่มี IP',
  },
  {
    id: 183,
    kind: 'single',
    prompt: 'An engineer needs to configure LLDP to send the port description type length value (TLV). Which command sequence must be implemented?',
    options: [
      { key: 'A', text: 'switch(config-if)#lldp port-description' },
      { key: 'B', text: 'switch#lldp port-description' },
      { key: 'C', text: 'switch(config-line)#lldp port-description' },
      { key: 'D', text: 'switch(config)#lldp port-description' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — LLDP (Link Layer Discovery Protocol) มาตรฐาน IEEE 802.1AB\n• เป็นทางเลือกแบบเปิดของ CDP (ซึ่งเป็นของ Cisco เท่านั้น) จึงใช้ค้นหาอุปกรณ์ข้ามยี่ห้อได้\n• ปิดอยู่โดยค่าเริ่มต้นบน IOS — ต้องเปิดด้วย lldp run ในโหมด global\n• ข้อมูลถูกส่งเป็นชุด TLV (Type-Length-Value) เช่น port description, system name, system capabilities, management address\n\n🔧 ระดับโหมดของคำสั่ง LLDP\n• Global config → lldp run (เปิดทั้งเครื่อง), lldp timer, lldp holdtime, lldp reinit\n• Interface config → lldp transmit / lldp receive (เปิด-ปิดรายพอร์ต) และการเลือก TLV ที่จะส่ง ⭐\n\n✅ ทำไม A ถูก: การเลือกว่าจะส่ง TLV ใดบ้างเป็นการตั้งค่าระดับ "อินเทอร์เฟซ" จึงต้องอยู่ในโหมด switch(config-if)#\n\n❌ ทำไมข้ออื่นผิด:\nB. switch# คือ privileged EXEC mode ใช้สำหรับคำสั่งดู/ตรวจสอบ (show, debug) ไม่ใช่ตั้งค่า\nC. switch(config-line)# คือโหมดตั้งค่าสายเชื่อมต่อ (console, vty) สำหรับกำหนดการเข้าถึงอุปกรณ์ ไม่เกี่ยวกับ LLDP\nD. switch(config)# ใช้ตั้งค่าที่มีผลทั้งเครื่อง เช่น lldp run แต่การเลือก TLV เป็นเรื่องรายอินเทอร์เฟซ\n\n📗 จำไว้สอบ: lldp run = global | เลือก TLV และ transmit/receive = interface • CDP เป็นของ Cisco, LLDP เป็นมาตรฐานเปิด',
  },
  {
    id: 184,
    kind: 'single',
    image: v4q184,
    prompt: 'Refer to the exhibit. Which switch becomes the root bridge?',
    options: [
      { key: 'A', text: 'S1' },
      { key: 'B', text: 'S2' },
      { key: 'C', text: 'S3' },
      { key: 'D', text: 'S4' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — การเลือก root bridge ทำ 2 ขั้นตามลำดับ\n1️⃣ เทียบ Bridge Priority ก่อน → ค่าต่ำสุดชนะ ⭐\n2️⃣ ถ้า priority เท่ากัน จึงเทียบ MAC address → ค่าต่ำสุดชนะ\n\n🔍 อ่าน exhibit\n• S1 → Priority 32768 | MAC AA:AA:AA:AA:AA:AA\n• S2 → Priority 30000 | MAC BB:BB:BB:BB:BB:BB\n• S3 → Priority 30000 | MAC CC:CC:CC:CC:CC:CC\n• S4 → Priority 32768 | MAC DD:DD:DD:DD:DD:DD\n\n🔧 ขั้นที่ 1: เทียบ priority\n• 30000 < 32768 → S2 และ S3 เข้ารอบ ส่วน S1 และ S4 ตกรอบทันที\n  💡 สังเกตว่า MAC ของ S1 คือ AA ซึ่งต่ำที่สุดในทั้งหมด แต่ไม่มีความหมายเลยเพราะแพ้ตั้งแต่ขั้น priority — นี่คือกับดักหลักของข้อนี้\n\n🔧 ขั้นที่ 2: S2 กับ S3 priority เท่ากัน (30000) จึงเทียบ MAC\n• BB:BB:BB:BB:BB:BB < CC:CC:CC:CC:CC:CC → S2 ชนะ ⭐\n\n✅ ทำไม B ถูก: S2 มี priority ต่ำสุดร่วมกับ S3 และเมื่อเทียบ MAC แล้ว BB ต่ำกว่า CC จึงได้เป็น root bridge\n\n❌ ทำไมข้ออื่นผิด:\nA. S1 มี MAC ต่ำสุด (AA) จริง แต่ priority 32768 สูงกว่า 30000 → แพ้ตั้งแต่ขั้นแรก\nC. S3 priority เท่า S2 แต่ MAC CC สูงกว่า BB\nD. S4 มีทั้ง priority สูงและ MAC สูงสุด\n\n📗 จำไว้สอบ: priority มาก่อน MAC เสมอ • priority ต้องเป็นพหุคูณของ 4096 (0–61440) • root primary ตั้งให้เป็น 24576',
  },
  {
    id: 185,
    kind: 'single',
    prompt: 'Which configuration ensures that the switch is always the root for VLAN 750?',
    options: [
      { key: 'A', text: 'Switch(config)#spanning-tree vlan 750 priority 38418607' },
      { key: 'B', text: 'Switch(config)#spanning-tree vlan 750 priority 0' },
      { key: 'C', text: 'Switch(config)#spanning-tree vlan 750 root primary' },
      { key: 'D', text: 'Switch(config)#spanning-tree vlan 750 priority 614440' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — การควบคุม root bridge ด้วย priority\n• ค่า priority ต้องเป็นพหุคูณของ 4096 และอยู่ในช่วง 0 ถึง 61440\n• ค่าที่ใช้ได้: 0, 4096, 8192, 12288, 16384, 20480, 24576, 28672, 32768 (ค่าเริ่มต้น), … , 61440\n• ค่าต่ำสุดชนะ → priority 0 คือค่าต่ำสุดที่เป็นไปได้ ⭐ ไม่มีสวิตช์ใดตั้งให้ต่ำกว่านี้ได้อีก\n\n🔧 เทียบกับคำสั่ง root primary\n• spanning-tree vlan x root primary จะตั้ง priority ให้เป็น 24576 (หรือต่ำกว่า root ปัจจุบัน 4096 ถ้า root เดิมต่ำกว่า 24576)\n• เป็นการคำนวณ "ครั้งเดียวตอนพิมพ์คำสั่ง" — ถ้าภายหลังมีสวิตช์ตัวใหม่เข้ามาด้วย priority ต่ำกว่า ก็จะแย่งตำแหน่ง root ไปได้\n→ จึงไม่ "รับประกัน" ว่าจะเป็น root ตลอดไป\n\n✅ ทำไม B ถูก: priority 0 คือค่าต่ำสุดที่เป็นไปได้ทางทฤษฎี ไม่มีสวิตช์ใดชนะได้ (จะเสมอได้อย่างมาก แล้วตัดสินด้วย MAC) จึงเป็นวิธีเดียวที่ "รับประกัน" ตำแหน่ง root ตามที่โจทย์ถาม\n\n❌ ทำไมข้ออื่นผิด:\nA. 38418607 เกินช่วงที่อนุญาต (สูงสุด 61440) และไม่ใช่พหุคูณของ 4096 → IOS ปฏิเสธคำสั่ง\nC. root primary ตั้งให้ 24576 ซึ่งสวิตช์ตัวอื่นตั้ง 0, 4096, 8192, … มาแย่งได้ → ไม่รับประกัน\nD. 614440 เกินช่วง 0–61440 เช่นกัน (สังเกตว่ามีเลข 4 เกินมาหนึ่งตัวจาก 61440) → คำสั่งไม่ผ่าน\n\n📗 จำไว้สอบ: priority = พหุคูณ 4096 ช่วง 0–61440 • ต้องการรับประกัน = priority 0 | root primary = 24576 เท่านั้น',
  },
  {
    id: 186,
    kind: 'single',
    image: v4q186,
    prompt: 'Refer to the exhibit. After the switch configuration, the ping test fails between PC A and PC B. Based on the output for switch 1, which error must be corrected?',
    options: [
      { key: 'A', text: 'The PCs are in the incorrect VLAN.' },
      { key: 'B', text: 'All VLANs are not enabled on the trunk.' },
      { key: 'C', text: 'Access mode is configured on the switch ports.' },
      { key: 'D', text: 'There is a native VLAN mismatch.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — native VLAN คือ VLAN ที่ถูกส่งข้าม trunk แบบ "ไม่ติดแท็ก" (untagged)\n• ทั้งสองปลายของ trunk ต้องตั้ง native VLAN ให้ตรงกัน มิฉะนั้นเฟรมที่ไม่ติดแท็กจะถูกอ่านเป็นคนละ VLAN\n• ผลลัพธ์: ทราฟฟิกรั่วข้าม VLAN (VLAN hopping) และการสื่อสารระหว่าง VLAN นั้นล้มเหลว\n• CDP จะขึ้นเตือน "%CDP-4-NATIVE_VLAN_MISMATCH"\n\n🔍 อ่าน exhibit เปรียบเทียบสองสวิตช์\n• Switch 1 Gi0/1 → Trunking Native Mode VLAN: 1 (default) ⛔\n• Switch 2 Gi0/1 → Trunking Native Mode VLAN: 99 (VLAN0099) ⛔\n→ ไม่ตรงกัน คือปัญหา\n\n✅ ตรวจข้ออื่นทีละข้อ\n• ทั้งสองฝั่งเป็น Administrative Mode: trunk และ Operational Mode: trunk → trunk ก่อตัวสำเร็จ ✔\n• Trunking VLANs Enabled: 50-100 ทั้งสองฝั่ง → VLAN 99 ของ PC อยู่ในช่วงนี้ ✔\n• Encapsulation dot1q ตรงกัน ✔\n\n✅ ทำไม D ถูก: native VLAN ไม่ตรงกัน (1 กับ 99) เป็นข้อผิดพลาดเดียวที่ปรากฏในผลลัพธ์ และเป็นสาเหตุที่ทำให้ ping ล้มเหลว\n\n❌ ทำไมข้ออื่นผิด:\nA. PC ทั้งสองอยู่ VLAN 99 เหมือนกันตามภาพ ซึ่งถูกต้อง\nB. Trunking VLANs Enabled: 50-100 ครอบคลุม VLAN 99 แล้ว ไม่ใช่ปัญหา\nC. ผลลัพธ์แสดงว่าพอร์ต Gi0/1 ทำงานในโหมด trunk ไม่ใช่ access\n\n📗 จำไว้สอบ: native VLAN ต้องตรงกันทั้งสองฝั่ง trunk • ค่าเริ่มต้นคือ VLAN 1 • เปลี่ยนด้วย switchport trunk native vlan x',
  },
  {
    id: 187,
    kind: 'drag',
    image: v4q187,
    prompt: 'Drag and drop the WLAN components from the left onto the correct descriptions on the right.',
    categories: [
      { name: 'device that manages access points', items: ['wireless LAN controller'] },
      { name: 'device that provides Wi-Fi devices with a connection to a wired network', items: ['access point'] },
      { name: 'used for out of band management of a WLC', items: ['service port'] },
      { name: 'used to support mobility management of the WLC', items: ['virtual interface'] },
      { name: 'applied to the WLAN for wireless client communication', items: ['dynamic interface'] },
    ],
    explanation:
      '📘 แนวคิด — ส่วนประกอบของ WLAN และอินเทอร์เฟซบน WLC\n\n🔹 อุปกรณ์\n• Wireless LAN Controller (WLC) → บริหาร lightweight AP ทั้งหมดผ่าน CAPWAP ⭐\n• Access Point (AP) → เชื่อมอุปกรณ์ Wi-Fi เข้ากับเครือข่ายใช้สาย แปลง 802.11 ↔ 802.3 ⭐\n\n🔹 อินเทอร์เฟซบน WLC (ต้องแยกให้ออก ออกสอบบ่อยมาก)\n• Management interface → ใช้คุย CAPWAP กับ AP และเข้าบริหาร WLC ผ่านเครือข่ายปกติ (in-band)\n• Service port → พอร์ตกายภาพแยกต่างหากสำหรับบริหารแบบ out-of-band ⭐\n  ใช้ตอนกู้ระบบหรือเมื่อเครือข่ายหลักล่ม ไม่รองรับ VLAN tagging\n• Virtual interface → IP ปลอมที่ไม่ได้เราต์จริง (นิยมใช้ 1.1.1.1)\n  ใช้รองรับ mobility management, DHCP relay, web authentication และ guest tunneling ⭐\n• Dynamic interface → เทียบเท่ากับ VLAN interface ผูกกับ WLAN แต่ละตัว\n  เป็นทางที่ทราฟฟิกของไคลเอนต์ไร้สายวิ่งออกสู่เครือข่ายใช้สาย ⭐\n\n📗 จำไว้สอบ: management=in-band+CAPWAP | service port=out-of-band | virtual=mobility/web auth (1.1.1.1) | dynamic=VLAN ของไคลเอนต์',
  },
  {
    id: 188,
    kind: 'single',
    prompt: 'Which unified access point mode continues to serve wireless clients after losing connectivity to the Cisco Wireless LAN Controller?',
    options: [
      { key: 'A', text: 'local' },
      { key: 'B', text: 'mesh' },
      { key: 'C', text: 'flexconnect' },
      { key: 'D', text: 'sniffer' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โหมดการทำงานของ lightweight AP\n\n• Local mode (ค่าเริ่มต้น) → ทราฟฟิกไคลเอนต์ทั้งหมดถูกส่งกลับไปที่ WLC ผ่านทันเนล CAPWAP ก่อนเสมอ (centrally switched)\n  ถ้าขาดการติดต่อกับ WLC → AP เข้าสู่โหมดกำพร้า ไคลเอนต์ใช้งานไม่ได้\n\n• FlexConnect mode (เดิมชื่อ H-REAP) ⭐ → ออกแบบมาสำหรับสาขาที่เชื่อมกับ WLC ผ่านลิงก์ WAN\n  • สลับทราฟฟิกไคลเอนต์ออกที่ท้องถิ่นได้เลย (local switching) ไม่ต้องวิ่งข้าม WAN\n  • เมื่อลิงก์ไป WLC ขาด AP เข้าสู่ standalone mode และยังให้บริการไคลเอนต์ต่อได้ ⭐\n  • ยืนยันตัวตนที่ท้องถิ่นได้ถ้าตั้ง local authentication ไว้\n\n• Mesh / Bridge mode → AP เชื่อมกันแบบไร้สายในจุดที่เดินสายไม่ได้\n\n• Sniffer mode → AP กลายเป็นตัวดักจับแพ็กเก็ตไร้สายส่งไปยังเครื่องวิเคราะห์ ไม่ให้บริการไคลเอนต์เลย\n\n• Monitor / Rogue Detector → เฝ้าระวังภัยคุกคาม ไม่ให้บริการไคลเอนต์\n\n✅ ทำไม C ถูก: FlexConnect เป็นโหมดเดียวที่ออกแบบมาให้ AP ทำงานต่อและให้บริการไคลเอนต์ได้แม้ขาดการเชื่อมต่อกับ WLC\n\n📗 จำไว้สอบ: local=ทราฟฟิกกลับ WLC หมด | flexconnect=สลับที่ท้องถิ่น + อยู่รอดเมื่อ WAN ล่ม | sniffer/monitor=ไม่ให้บริการไคลเอนต์',
  },
  {
    id: 189,
    kind: 'single',
    image: v4q189,
    prompt: 'Refer to the exhibit. Which command provides this output?',
    options: [
      { key: 'A', text: 'show ip route' },
      { key: 'B', text: 'show cdp neighbor' },
      { key: 'C', text: 'show ip interface' },
      { key: 'D', text: 'show interface' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — จำ "หัวตาราง" ของแต่ละคำสั่งแล้วตอบได้ทันที\n\n🔍 อ่าน exhibit — สิ่งที่เห็นในผลลัพธ์\n• บรรทัด "Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge, S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone, D - Remote, C - CVTA, M - Two-port Mac Relay" ⭐\n• หัวคอลัมน์: Device ID | Local Interface | Holdtime | Capability | Platform | Port ID ⭐\n\n💡 ทั้งสองอย่างนี้เป็นลายเซ็นเฉพาะของคำสั่ง show cdp neighbors — ไม่มีคำสั่งอื่นแสดงผลแบบนี้เลย\n\n🔹 CDP (Cisco Discovery Protocol)\n• เป็นโปรโตคอลของ Cisco ทำงานที่ชั้น 2 เปิดใช้งานโดยค่าเริ่มต้น\n• ส่งประกาศทุก 60 วินาที holdtime 180 วินาที\n• บอกให้รู้ว่าอุปกรณ์ข้างเคียงคือใคร รุ่นอะไร ต่ออยู่ที่พอร์ตไหน\n• show cdp neighbors detail จะแสดง IP address และเวอร์ชัน IOS ของเพื่อนบ้านเพิ่มด้วย\n\n✅ ทำไม B ถูก: หัวคอลัมน์และ Capability Codes ตรงกับรูปแบบผลลัพธ์ของ show cdp neighbor ทุกประการ\n\n❌ ทำไมข้ออื่นผิด:\nA. show ip route แสดงรหัสเส้นทาง (C, S, O, D, B) พร้อมพรีฟิกซ์ [AD/metric] และ next-hop\nC. show ip interface แสดงสถานะ IP, ACL ที่ผูกอยู่, helper address รายอินเทอร์เฟซ\nD. show interface แสดง MTU, BW, duplex, reliability และตัวนับ error ต่าง ๆ\n\n📗 จำไว้สอบ: CDP=Cisco เท่านั้น (ส่งทุก 60 วิ, holdtime 180) | LLDP=มาตรฐานเปิด (802.1AB) ต้องเปิดด้วย lldp run',
  },
  {
    id: 190,
    kind: 'single',
    prompt: 'Which mode must be used to configure EtherChannel between two switches without using a negotiation protocol?',
    options: [
      { key: 'A', text: 'active' },
      { key: 'B', text: 'on' },
      { key: 'C', text: 'auto' },
      { key: 'D', text: 'desirable' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โหมดของ EtherChannel แบ่งตามโปรโตคอลเจรจา\n\n🔹 LACP (802.3ad — มาตรฐานเปิด)\n• active → เริ่มเจรจาเอง ส่ง LACP packet ออกไปก่อน\n• passive → รอฝ่ายตรงข้ามเริ่มก่อน\n• จับคู่ได้: active-active ✔ | active-passive ✔ | passive-passive ✘ (ไม่มีใครเริ่ม)\n\n🔹 PAgP (ของ Cisco)\n• desirable → เริ่มเจรจาเอง\n• auto → รอฝ่ายตรงข้ามเริ่ม\n• จับคู่ได้: desirable-desirable ✔ | desirable-auto ✔ | auto-auto ✘\n\n🔹 Static / Manual\n• on ⭐ → ไม่ส่งและไม่ฟังแพ็กเก็ตเจรจาใด ๆ บังคับรวมพอร์ตเป็นบันเดิลทันที\n• ต้องตั้ง on ทั้งสองฝั่งเท่านั้น — ถ้าตั้ง on ข้างเดียวแล้วอีกข้างเป็น active/desirable บันเดิลจะไม่ก่อตัวและอาจเกิดลูปได้\n\n✅ ทำไม B ถูก: โหมด on คือโหมดเดียวที่ไม่ใช้โปรโตคอลเจรจาใด ๆ ตรงตามที่โจทย์ถาม\n\n❌ ทำไมข้ออื่นผิด:\nA. active ใช้โปรโตคอล LACP\nC. auto ใช้โปรโตคอล PAgP\nD. desirable ใช้โปรโตคอล PAgP\n\n📗 จำไว้สอบ: LACP=active/passive (มาตรฐาน) | PAgP=desirable/auto (Cisco) | on=ไม่เจรจา ต้องตั้งเหมือนกันทั้งสองฝั่ง',
  },
  {
    id: 191,
    kind: 'single',
    prompt: 'Which mode allows access points to be managed by Cisco Wireless LAN Controllers?',
    options: [
      { key: 'A', text: 'bridge' },
      { key: 'B', text: 'lightweight' },
      { key: 'C', text: 'mobility express' },
      { key: 'D', text: 'autonomous' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ประเภทของ Access Point\n\n🔹 Autonomous AP (standalone)\n• มี IOS ของตัวเอง ตั้งค่าและทำงานอิสระ\n• ไม่ join WLC — มี 50 ตัวก็ต้องเข้าไปคอนฟิก 50 ครั้ง\n\n🔹 Lightweight AP ⭐\n• ไม่มีคอนฟิกของตัวเอง ต้อง join WLC ผ่านทันเนล CAPWAP\n• ใช้สถาปัตยกรรม split-MAC: AP ทำงานวิทยุเรียลไทม์ ส่วน WLC ทำงานบริหาร (auth, roaming, RRM, นโยบาย)\n• เป็นโหมดเดียวที่ถูกจัดการโดย WLC ได้\n\n🔹 Mobility Express\n• AP ตัวหนึ่งรัน WLC เวอร์ชันย่อในตัวเอง แล้วทำหน้าที่ควบคุม AP ตัวอื่นในไซต์เดียวกัน\n• เหมาะกับสาขาเล็กที่ไม่คุ้มค่าซื้อ WLC แยก — ไม่ใช่คำตอบเพราะโจทย์ถามถึงโหมดที่ "ถูกจัดการโดย WLC"\n\n✅ ทำไม B ถูก: lightweight คือโหมดที่ AP ยอมให้ WLC เป็นผู้ควบคุมทั้งหมดผ่าน CAPWAP ตรงตามโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. bridge/mesh mode เป็น "โหมดการทำงาน" ของ lightweight AP อีกที (ใช้เชื่อม AP กันแบบไร้สาย) ไม่ใช่ประเภทของ AP\nC. Mobility Express คือ AP ที่ "ทำตัวเป็น WLC" ไม่ใช่ AP ที่ถูกจัดการโดย WLC ภายนอก\nD. autonomous AP ทำงานอิสระ ไม่ join WLC เลย\n\n📗 จำไว้สอบ: lightweight + WLC + CAPWAP = split-MAC | autonomous = อิสระ | Mobility Express = WLC ในตัว AP',
  },
  {
    id: 192,
    kind: 'multi',
    prompt: 'Which two values or settings must be entered when configuring a new WLAN in the Cisco Wireless LAN Controller GUI? (Choose two.)',
    options: [
      { key: 'A', text: 'QoS settings' },
      { key: 'B', text: 'IP address of one or more access points' },
      { key: 'C', text: 'SSID' },
      { key: 'D', text: 'profile name' },
      { key: 'E', text: 'management interface settings' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — ขั้นตอนสร้าง WLAN ใหม่บน WLC GUI (เมนู WLANs → Create New)\n\n🔧 ฟิลด์ที่ "บังคับกรอก" ในหน้าแรก\n• Type → เลือก WLAN (หรือ Guest LAN / Remote LAN)\n• Profile Name → ชื่อโปรไฟล์ที่ใช้ระบุ WLAN นี้ภายใน WLC ⭐ ต้องไม่ซ้ำกับโปรไฟล์อื่น\n• SSID → ชื่อเครือข่ายที่ผู้ใช้จะเห็นและเลือกเชื่อมต่อ ⭐ (ยาวไม่เกิน 32 อักขระ)\n• ID → หมายเลข WLAN (1–512)\n\n💡 Profile Name กับ SSID ตั้งต่างกันได้ — เช่น profile name = "Corp-Employee-5G" แต่ SSID = "CorpWiFi" ซึ่งทำให้ผู้ดูแลแยกแยะโปรไฟล์ได้ง่ายโดยที่ผู้ใช้เห็นชื่อสั้น ๆ\n\n✅ ทำไม C ถูก: SSID เป็นฟิลด์บังคับ — ถ้าไม่มี ไคลเอนต์ก็ไม่รู้จะเชื่อมต่ออะไร\n✅ ทำไม D ถูก: Profile Name เป็นฟิลด์บังคับที่ WLC ใช้อ้างอิง WLAN นี้ภายในระบบ\n\n❌ ทำไมข้ออื่นผิด:\nA. QoS อยู่ในแท็บ QoS มีค่าเริ่มต้นเป็น Silver อยู่แล้ว ปรับทีหลังได้ ไม่ใช่ฟิลด์บังคับตอนสร้าง\nB. AP join WLC เองผ่าน CAPWAP โดยอัตโนมัติ (ค้นหาผ่าน DHCP option 43, DNS หรือ broadcast) — ไม่ต้องพิมพ์ IP ของ AP ตอนสร้าง WLAN\nE. Management interface ถูกตั้งไว้ตั้งแต่ตอนติดตั้ง WLC ครั้งแรก ไม่ใช่ส่วนหนึ่งของการสร้าง WLAN ใหม่\n\n📗 จำไว้สอบ: สร้าง WLAN ต้องกรอก Profile Name + SSID (+ ID) • AP join เองผ่าน CAPWAP',
  },
  {
    id: 193,
    kind: 'single',
    prompt: 'Which command is used to specify the delay time in seconds for LLDP to initialize on any interface?',
    options: [
      { key: 'A', text: 'lldp timer' },
      { key: 'B', text: 'lldp tlv-select' },
      { key: 'C', text: 'lldp reinit' },
      { key: 'D', text: 'lldp holdtime' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำสั่งตั้งเวลาของ LLDP (ทั้งหมดอยู่ในโหมด global config)\n\n• lldp reinit <วินาที> ⭐ → กำหนดเวลาหน่วงก่อนที่ LLDP จะเริ่มทำงานบนอินเทอร์เฟซ (ค่าเริ่มต้น 2 วินาที)\n  จุดประสงค์: กันไม่ให้ LLDP เริ่มส่งประกาศทันทีขณะที่อินเทอร์เฟซยังไม่นิ่ง (เช่น ตอนลิงก์กระพริบ)\n\n• lldp timer <วินาที> → ความถี่ในการส่งประกาศ LLDP ออกไป (ค่าเริ่มต้น 30 วินาที)\n\n• lldp holdtime <วินาที> → ระยะเวลาที่เพื่อนบ้านจะเก็บข้อมูลของเราไว้ก่อนลบทิ้ง (ค่าเริ่มต้น 120 วินาที)\n\n• lldp tlv-select → เลือกว่าจะส่ง TLV ใดบ้าง (ตั้งที่ระดับอินเทอร์เฟซ)\n\n✅ ทำไม C ถูก: คำว่า "delay time to initialize" ตรงกับ lldp reinit ซึ่งเป็นตัวหน่วงการเริ่มทำงานของ LLDP บนอินเทอร์เฟซโดยเฉพาะ\n\n❌ ทำไมข้ออื่นผิด:\nA. lldp timer คุมความถี่ในการส่ง ไม่ใช่การหน่วงเริ่มต้น\nB. lldp tlv-select เลือกชนิดข้อมูลที่จะส่ง ไม่เกี่ยวกับเวลา\nD. lldp holdtime คือ "อายุข้อมูล" ที่เพื่อนบ้านเก็บไว้ ไม่ใช่การหน่วงเริ่มต้น\n\n💡 เทียบกับ CDP: cdp timer (60 วินาที) และ cdp holdtime (180 วินาที)\n\n📗 จำไว้สอบ: LLDP — reinit=2 วิ (หน่วงเริ่ม), timer=30 วิ (ความถี่ส่ง), holdtime=120 วิ (อายุข้อมูล)',
  },
  {
    id: 194,
    kind: 'single',
    image: v4q194,
    prompt: 'Refer to the exhibit. How does SW2 interact with other switches in this VTP domain?',
    options: [
      { key: 'A', text: 'It transmits and processes VTP updates from any VTP clients on the network on its trunk ports.' },
      { key: 'B', text: 'It processes VTP updates from any VTP clients on the network on its access ports.' },
      { key: 'C', text: 'It receives updates from all VTP servers and forwards all locally configured VLANs out all trunk ports.' },
      { key: 'D', text: 'It forwards only the VTP advertisements that it receives on its trunk ports.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — โหมด VTP มี 3 แบบ\n\n🔹 Server (ค่าเริ่มต้น)\n• สร้าง/แก้ไข/ลบ VLAN ได้ และประกาศให้ทั้งโดเมน\n• รับและประมวลผลประกาศจากตัวอื่น พร้อมอัปเดตฐานข้อมูล VLAN ของตัวเอง\n\n🔹 Client\n• สร้าง/แก้ไข VLAN เองไม่ได้\n• รับ ประมวลผล และส่งต่อประกาศ VTP\n\n🔹 Transparent ⭐\n• สร้าง/แก้ไข VLAN ของตัวเองได้ แต่เก็บไว้ "เฉพาะในเครื่อง" (local only) ไม่ประกาศออกไป\n• ไม่ประมวลผลประกาศ VTP ที่ได้รับ — ไม่อัปเดตฐานข้อมูล VLAN ตัวเองตามที่คนอื่นบอก\n• แต่ยัง "ส่งต่อ" (relay) ประกาศ VTP ที่ได้รับออกไปทางพอร์ต trunk อื่น เพื่อไม่ให้ตัดขาดสวิตช์ที่อยู่ถัดไป ⭐\n• VTP revision number ของตัวเองคงเป็น 0 เสมอ\n\n🔍 อ่าน exhibit: SW2 ตั้ง "vtp mode transparent" และพอร์ต fa0/1 เป็น trunk แบบ dot1q\n\n✅ ทำไม D ถูก: สวิตช์ในโหมด transparent ทำหน้าที่เป็นเพียง "ตัวส่งต่อ" ประกาศ VTP ที่รับเข้ามาทางพอร์ต trunk เท่านั้น โดยไม่นำไปประมวลผลกับฐานข้อมูล VLAN ของตัวเอง\n\n❌ ทำไมข้ออื่นผิด:\nA. transparent ไม่ "ประมวลผล" ประกาศที่ได้รับ (ส่งต่ออย่างเดียว)\nB. VTP ทำงานผ่านพอร์ต trunk เท่านั้น ไม่ใช่ access port\nC. transparent ไม่โฆษณา VLAN ที่ตั้งไว้ในเครื่องออกไปให้ใคร\n\n📗 จำไว้สอบ: transparent = ตั้ง VLAN เองได้ (local) + ไม่ประมวลผล + ส่งต่อประกาศ + revision = 0 เสมอ',
  },
  {
    id: 195,
    kind: 'single',
    image: v4q195,
    prompt: 'Refer to the exhibit. Based on the LACP neighbor status, in which mode is the SW1 port channel configured?',
    options: [
      { key: 'A', text: 'mode on' },
      { key: 'B', text: 'active' },
      { key: 'C', text: 'passive' },
      { key: 'D', text: 'auto' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — คำสั่ง show lacp neighbor แสดงข้อมูลของ "ฝ่ายตรงข้าม" (partner) ไม่ใช่ของตัวเอง\n\n🔍 อ่าน exhibit\n• หัวข้อระบุชัดว่า "Partner\'s information:"\n• Flags ของทั้งสองพอร์ต Et1/0 และ Et1/1 = SP\n  • S = Device is requesting Slow LACPDUs (ส่งทุก 30 วินาที)\n  • P = Device is in Passive mode ⭐\n→ แปลว่า "ฝ่ายตรงข้าม (SW2) อยู่ในโหมด passive"\n\n📊 ตารางการจับคู่ LACP\n• active + active → บันเดิลก่อตัว ✔\n• active + passive → บันเดิลก่อตัว ✔\n• passive + passive → ไม่ก่อตัว ✘ (ไม่มีใครเริ่มเจรจา)\n\n🔧 ให้เหตุผลย้อนกลับ\n• เราเห็นข้อมูล LACP neighbor ได้ = การเจรจา LACP เกิดขึ้นจริงและบันเดิลก่อตัวสำเร็จ\n• partner (SW2) เป็น passive\n• passive + passive จะไม่มีทางก่อตัวได้\n→ ดังนั้น SW1 ต้องเป็น active เท่านั้น ⭐\n\n✅ ทำไม B ถูก: SW1 ต้องอยู่ในโหมด active จึงจะเริ่มเจรจากับ partner ที่เป็น passive ได้สำเร็จ\n\n❌ ทำไมข้ออื่นผิด:\nA. โหมด on ไม่ส่ง LACPDU เลย จึงไม่มีทางมีข้อมูล LACP neighbor ให้แสดง\nC. ถ้า SW1 เป็น passive ด้วย ทั้งสองฝ่ายจะรอกันไปมา บันเดิลไม่ก่อตัว\nD. auto เป็นโหมดของ PAgP ไม่ใช่ LACP — คนละโปรโตคอลกัน\n\n📗 จำไว้สอบ: show lacp neighbor = ข้อมูลของ partner • flag P=passive, A=active, S=slow, F=fast',
  },
  {
    id: 196,
    kind: 'single',
    prompt: 'Two switches are connected and using Cisco Dynamic Trunking Protocol. SW1 is set to Dynamic Auto and SW2 is set to Dynamic Desirable. What is the result of this configuration?',
    options: [
      { key: 'A', text: 'The link becomes an access port.' },
      { key: 'B', text: 'The link is in an error disabled state.' },
      { key: 'C', text: 'The link is in a down state.' },
      { key: 'D', text: 'The link becomes a trunk port.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตารางผลลัพธ์ของ DTP (ต้องท่องให้ขึ้นใจ)\n\n         access   dynamic auto   dynamic desirable   trunk\naccess    access     access           access          ผิดพลาด\nauto      access     access           TRUNK           TRUNK\ndesirable access     TRUNK            TRUNK           TRUNK\ntrunk     ผิดพลาด    TRUNK            TRUNK           TRUNK\n\n🔹 ความหมายของแต่ละโหมด\n• dynamic auto → "ฉันจะเป็น trunk ก็ได้ ถ้าเธอขอมา" (ตั้งรับ ไม่ริเริ่มเอง)\n• dynamic desirable → "ฉันอยากเป็น trunk ขอเลยนะ" (ริเริ่มส่ง DTP ออกไปชวน) ⭐\n\n🔍 วิเคราะห์โจทย์\n• SW1 = dynamic auto → รออย่างเดียว\n• SW2 = dynamic desirable → ส่ง DTP ไปชวน SW1\n• SW1 ได้รับคำชวน → ตอบตกลง → ลิงก์กลายเป็น trunk ✔\n\n✅ ทำไม D ถูก: desirable ริเริ่มเจรจาและ auto ยอมรับ ลิงก์จึงก่อตัวเป็น trunk สำเร็จ\n\n❌ ทำไมข้ออื่นผิด:\nA. จะเป็น access ก็ต่อเมื่อทั้งสองฝั่งเป็น auto (ไม่มีใครเริ่ม) หรือมีฝั่งใดตั้ง access ไว้\nB. err-disabled เกิดจาก port security, BPDU guard, link flap ฯลฯ ไม่ใช่จากการเจรจา DTP ที่สำเร็จ\nC. ลิงก์จะ down เมื่อมีปัญหาทางกายภาพหรือ speed mismatch ไม่ใช่จากผลของ DTP\n\n💡 แนวปฏิบัติที่ดี: ควรตั้ง switchport mode trunk พร้อม switchport nonegotiate แบบตายตัวเพื่อความปลอดภัย เพราะ DTP อาจถูกใช้โจมตีแบบ VLAN hopping ได้\n\n📗 จำไว้สอบ: ต้องมีอย่างน้อยหนึ่งฝั่งเป็น desirable หรือ trunk จึงจะได้ trunk • auto + auto = access',
  },
  {
    id: 197,
    kind: 'single',
    prompt: 'A Cisco IP phone receives untagged data traffic from an attached PC. Which action is taken by the phone?',
    options: [
      { key: 'A', text: 'It drops the traffic.' },
      { key: 'B', text: 'It allows the traffic to pass through unchanged.' },
      { key: 'C', text: 'It tags the traffic with the native VLAN.' },
      { key: 'D', text: 'It tags the traffic with the default VLAN.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม voice VLAN\n• โทรศัพท์ IP ของ Cisco มีสวิตช์ 3 พอร์ตในตัว: พอร์ตขึ้นสวิตช์ | พอร์ตต่อ PC | พอร์ตภายในของตัวโทรศัพท์เอง\n• พอร์ตบนสวิตช์ที่ต่อโทรศัพท์ถูกตั้งเป็น access + voice VLAN เช่น\n  switchport mode access\n  switchport access vlan 10 → VLAN ข้อมูลของ PC\n  switchport voice vlan 20 → VLAN เสียงของโทรศัพท์\n\n🔧 การไหลของทราฟฟิก\n• ทราฟฟิกเสียงจากตัวโทรศัพท์ → ติดแท็ก 802.1Q ด้วย voice VLAN (20) พร้อมค่า CoS 5\n• ทราฟฟิกข้อมูลจาก PC → โทรศัพท์ "ปล่อยผ่านไปเฉย ๆ โดยไม่แตะต้อง" ⭐ ยังคงไม่ติดแท็กเหมือนเดิม\n• สวิตช์รับเฟรมที่ไม่ติดแท็ก → จัดให้อยู่ใน access VLAN (10) ตามที่ตั้งไว้\n\n✅ ทำไม B ถูก: โทรศัพท์ไม่แก้ไขทราฟฟิกของ PC เลย ปล่อยผ่านไปแบบไม่ติดแท็ก แล้วให้สวิตช์เป็นผู้จัดหมวดหมู่ VLAN เอง\n\n💡 เกร็ด: สั่งให้โทรศัพท์ติดแท็กหรือกำหนดลำดับความสำคัญให้ทราฟฟิกของ PC ก็ได้ ด้วยคำสั่ง switchport priority extend cos <0-7> แต่ค่าเริ่มต้นคือปล่อยผ่านไม่แตะต้อง\n\n❌ ทำไมข้ออื่นผิด:\nA. ถ้าดร็อป PC ที่เสียบหลังโทรศัพท์ก็จะใช้เครือข่ายไม่ได้เลย — ขัดกับจุดประสงค์ของการออกแบบ\nC. โทรศัพท์ไม่ติดแท็กให้ทราฟฟิกของ PC — สวิตช์ต่างหากที่ตีความเฟรมไม่ติดแท็กว่าเป็น access VLAN\nD. ไม่มีการติดแท็กด้วย default VLAN (VLAN 1) แต่อย่างใด\n\n📗 จำไว้สอบ: เสียง=ติดแท็ก voice VLAN (CoS 5) | ข้อมูลจาก PC=ไม่ติดแท็ก ปล่อยผ่าน → สวิตช์จัดเข้า access VLAN',
  },
  {
    id: 198,
    kind: 'single',
    prompt: 'Which design element is a best practice when deploying an 802.11b wireless infrastructure?',
    options: [
      { key: 'A', text: 'allocating nonoverlapping channels to access points that are in close physical proximity to one another' },
      { key: 'B', text: 'disabling TCP so that access points can negotiate signal levels with their attached wireless devices' },
      { key: 'C', text: 'configuring access points to provide clients with a maximum of 5 Mbps' },
      { key: 'D', text: 'setting the maximum data rate to 54 Mbps on the Cisco Wireless LAN Controller' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — 802.11b ทำงานบนย่าน 2.4 GHz ความเร็วสูงสุด 11 Mbps ใช้เทคนิค DSSS\n• ย่าน 2.4 GHz มีช่องที่ไม่ทับกันเพียง 3 ช่อง คือ 1, 6, 11\n• AP ที่ตั้งอยู่ใกล้กันจนพื้นที่ครอบคลุมซ้อนทับ ต้องใช้ช่องที่ไม่ทับกัน มิฉะนั้นจะเกิดการรบกวน\n\n🔹 ผลของการวางช่องผิด\n• Co-channel interference → ช่องเดียวกัน ต้องผลัดกันส่ง ทรูพุตตกครึ่ง\n• Adjacent-channel interference → ช่องทับกันบางส่วน (เช่น 1 กับ 3) กลายเป็นสัญญาณรบกวนล้วน ๆ ซึ่งแย่กว่า\n\n✅ ทำไม A ถูก: การจัดช่องแบบรังผึ้ง 1/6/11 ให้ AP ที่อยู่ใกล้กันใช้คนละช่อง เป็นแนวปฏิบัติมาตรฐานที่สำคัญที่สุดของการออกแบบ 2.4 GHz\n\n❌ ทำไมข้ออื่นผิด:\nB. TCP เป็นโปรโตคอลชั้น 4 ไม่เกี่ยวกับการเจรจาระดับสัญญาณวิทยุเลย — และการปิด TCP จะทำให้เว็บ อีเมล และทุกอย่างใช้ไม่ได้\nC. การจงใจจำกัดความเร็วไว้ที่ 5 Mbps ทั้งที่ 802.11b ทำได้ 11 Mbps เป็นการลดประสิทธิภาพโดยไม่จำเป็น\nD. 54 Mbps เป็นความเร็วสูงสุดของ 802.11a/g ไม่ใช่ 802.11b (ซึ่งได้สูงสุด 11 Mbps) — ตั้งไปก็ไม่มีผล\n\n📗 จำไว้สอบ: 802.11b=11 Mbps 2.4 GHz | 802.11g=54 Mbps 2.4 GHz | 802.11a=54 Mbps 5 GHz | 802.11n=600 Mbps ทั้งสองย่าน',
  },
  {
    id: 199,
    kind: 'single',
    image: v4q199,
    prompt: 'Refer to the exhibit. The network administrator wants VLAN 67 traffic to be untagged between Switch 1 and Switch 2, while all other VLANs are to remain tagged. Which command accomplishes this task?',
    options: [
      { key: 'A', text: 'switchport access vlan 67' },
      { key: 'B', text: 'switchport trunk allowed vlan 67' },
      { key: 'C', text: 'switchport private-vlan association host 67' },
      { key: 'D', text: 'switchport trunk native vlan 67' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — native VLAN บน trunk 802.1Q\n• บนลิงก์ trunk ทุก VLAN จะถูกติดแท็ก 802.1Q ยกเว้น VLAN เดียวคือ "native VLAN" ที่ถูกส่งแบบไม่ติดแท็ก ⭐\n• ค่าเริ่มต้นของ native VLAN คือ VLAN 1\n• เปลี่ยนได้ด้วยคำสั่ง switchport trunk native vlan <vlan-id>\n• ⚠️ ต้องตั้งให้ตรงกันทั้งสองปลายของ trunk มิฉะนั้นจะเกิด native VLAN mismatch\n\n🔍 อ่านโจทย์: ต้องการให้ VLAN 67 "ไม่ติดแท็ก" ระหว่าง Switch 1 กับ Switch 2 ขณะที่ VLAN อื่นยังติดแท็กตามปกติ\n→ ตรงกับนิยามของ native VLAN พอดี\n\n✅ ทำไม D ถูก: switchport trunk native vlan 67 ทำให้ VLAN 67 กลายเป็น native VLAN ของ trunk นี้ จึงถูกส่งแบบไม่ติดแท็ก ส่วน VLAN อื่นยังคงติดแท็ก 802.1Q ตามเดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. switchport access vlan 67 ใช้กับพอร์ต access เท่านั้น — จะทำให้พอร์ตหยุดเป็น trunk และ VLAN อื่นทั้งหมดสื่อสารข้ามไม่ได้\nB. switchport trunk allowed vlan 67 จำกัดให้ผ่านได้เฉพาะ VLAN 67 เท่านั้น (VLAN อื่นถูกบล็อกหมด) และ VLAN 67 ก็ยังคงติดแท็กอยู่ดี\nC. private VLAN เป็นฟีเจอร์แยกอุปกรณ์ภายใน VLAN เดียวกัน ไม่เกี่ยวกับการติดแท็กบน trunk\n\n📗 จำไว้สอบ: native VLAN = VLAN เดียวที่ไม่ติดแท็กบน trunk • ค่าเริ่มต้น VLAN 1 • ต้องตรงกันทั้งสองฝั่ง',
  },
  {
    id: 200,
    kind: 'multi',
    prompt: 'Which two command sequences must be configured on a switch to establish a Layer 3 EtherChannel with an open-standard protocol? (Choose two.)',
    options: [
      { key: 'A', text: 'interface GigabitEthernet0/0/1 / channel-group 10 mode auto' },
      { key: 'B', text: 'interface GigabitEthernet0/0/1 / channel-group 10 mode on' },
      { key: 'C', text: 'interface port-channel 10 / no switchport / ip address 172.16.0.1 255.255.255.0' },
      { key: 'D', text: 'interface GigabitEthernet0/0/1 / channel-group 10 mode active' },
      { key: 'E', text: 'interface port-channel 10 / switchport / switchport mode trunk' },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — โจทย์กำหนด 2 เงื่อนไข ต้องได้ทั้งคู่\n1️⃣ "open-standard protocol" → ต้องใช้ LACP (802.3ad) ไม่ใช่ PAgP ซึ่งเป็นของ Cisco\n   • LACP → โหมด active / passive ⭐\n   • PAgP → โหมด desirable / auto\n   • on → ไม่ใช้โปรโตคอลใดเลย (static)\n2️⃣ "Layer 3 EtherChannel" → พอร์ตแชนแนลต้องเป็น routed port ที่มี IP address\n   • ต้องสั่ง no switchport บนอินเทอร์เฟซ port-channel ก่อน แล้วจึงใส่ ip address ⭐\n\n🔧 ลำดับการคอนฟิกที่ถูกต้อง\nSwitch(config)# interface port-channel 10\nSwitch(config-if)# no switchport\nSwitch(config-if)# ip address 172.16.0.1 255.255.255.0\n!\nSwitch(config)# interface range GigabitEthernet0/0/1 - 2\nSwitch(config-if-range)# no switchport\nSwitch(config-if-range)# channel-group 10 mode active\n\n✅ ทำไม C ถูก: สร้างอินเทอร์เฟซ port-channel เป็น routed port ด้วย no switchport แล้วกำหนด IP → ได้ Layer 3 EtherChannel\n✅ ทำไม D ถูก: channel-group 10 mode active ใช้ LACP ซึ่งเป็นโปรโตคอลมาตรฐานเปิดตามที่โจทย์กำหนด\n\n❌ ทำไมข้ออื่นผิด:\nA. mode auto ใช้ PAgP ซึ่งเป็นกรรมสิทธิ์ของ Cisco ไม่ใช่มาตรฐานเปิด\nB. mode on ไม่ใช้โปรโตคอลเจรจาใด ๆ เลย ขัดกับเงื่อนไข "open-standard protocol"\nE. คำสั่ง switchport ทำให้ port-channel เป็นอินเทอร์เฟซชั้น 2 ซึ่งขัดกับความต้องการ Layer 3 EtherChannel\n\n📗 จำไว้สอบ: LACP=active/passive (มาตรฐาน) | PAgP=desirable/auto (Cisco) | L3 EtherChannel ต้อง no switchport ทั้งบน port-channel และพอร์ตสมาชิก',
  },
  {
    id: 201,
    kind: 'multi',
    image: v4q201,
    prompt: 'Refer to the exhibit. Which two commands when used together create port channel 10? (Choose two.)',
    options: [
      { key: 'A', text: 'int range g0/0-1 / channel-group 10 mode active' },
      { key: 'B', text: 'int range g0/0-1 / channel-group 10 mode desirable' },
      { key: 'C', text: 'int range g0/0-1 / channel-group 10 mode passive' },
      { key: 'D', text: 'int range g0/0-1 / channel-group 10 mode auto' },
      { key: 'E', text: 'int range g0/0-1 / channel-group 10 mode on' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — เลือกโหมด EtherChannel ให้เข้าคู่กัน\nโหมดของ EtherChannel มี 3 ตระกูล และห้ามข้ามตระกูลกัน\n• LACP (มาตรฐาน 802.3ad) → active / passive\n• PAgP (ของ Cisco) → desirable / auto\n• Static → on (ไม่เจรจา)\n\nตารางคู่ที่จับกันติด\nactive + active   = ติด\nactive + passive  = ติด\npassive + passive = ไม่ติด (ไม่มีใครเริ่มเจรจา)\ndesirable + auto  = ติด\nauto + auto       = ไม่ติด\non + on           = ติด\nข้ามตระกูลทุกกรณี = ไม่ติด\n\n🔍 อ่าน exhibit: show etherchannel summary บอกว่า Po10(SU) ใช้ Protocol = LACP\nคำว่า SU = S (Layer2) + U (in use) แปลว่าแชนแนลนี้ทำงานอยู่จริง และ Protocol ระบุชัดว่า LACP\n\n✅ ทำไม A + C ถูก: เมื่อโปรโตคอลที่ต้องได้คือ LACP คำสั่งที่ใช้ได้มีแค่ mode active และ mode passive เท่านั้น เอา 2 ข้อนี้ไปวางคนละฝั่ง (active ฝั่งหนึ่ง passive อีกฝั่ง) พอร์ตแชนแนลก็เกิดขึ้นและรายงานเป็น LACP ตรงกับ exhibit\n\n❌ ทำไมข้ออื่นผิด:\nB, D. desirable/auto เป็นคำสั่งของ PAgP → show etherchannel summary จะรายงาน Protocol = PAgP ไม่ใช่ LACP\nE. mode on สร้างแชนแนลแบบ static ไม่มีการเจรจาเลย → คอลัมน์ Protocol จะเป็น "-" ไม่ใช่ LACP\n\n📗 จำไว้สอบ: เห็นคำว่า LACP → ตอบ active/passive เท่านั้น • passive+passive ไม่ติด ต้องมีฝั่งใดฝั่งหนึ่ง active',
  },
  {
    id: 202,
    kind: 'single',
    image: v4q202,
    prompt:
      'Refer to the exhibit. An administrator is tasked with configuring a voice VLAN. What is the expected outcome when a Cisco phone is connected to the GigabitEthernet 3/1/4 port on a switch?',
    options: [
      { key: 'A', text: 'The phone and a workstation that is connected to the phone do not have VLAN connectivity.' },
      {
        key: 'B',
        text: 'The phone sends and receives data in VLAN 50, but a workstation connected to the phone sends and receives data in VLAN 1.',
      },
      {
        key: 'C',
        text: 'The phone sends and receives data in VLAN 50, but a workstation connected to the phone has no VLAN connectivity.',
      },
      { key: 'D', text: 'The phone and a workstation that is connected to the phone send and receive data in VLAN 50.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — พอร์ตที่มีทั้ง voice VLAN และ data VLAN\nเมื่อสั่ง switchport voice vlan <id> สวิตช์จะ\n• ส่ง CDP บอกโทรศัพท์ว่า "เสียงให้ติดแท็ก VLAN 50"\n• เฟรมที่เข้ามาแบบไม่ติดแท็ก (untagged) = ทราฟฟิกของ PC → ถูกจัดเข้า access VLAN ของพอร์ต\n\n🔍 อ่าน exhibit ทีละบรรทัด\ninterface GigabitEthernet3/1/4\n switchport voice vlan 50   ← มีแค่บรรทัดเดียว\nไม่มี switchport access vlan ... เลย → พอร์ตจึงใช้ค่าเริ่มต้นคือ access VLAN 1\n\n✅ ทำไม B ถูก:\n• โทรศัพท์ติดแท็ก VLAN 50 ตามที่ CDP สั่ง → เสียงวิ่งใน VLAN 50 ✔\n• PC ที่เสียบหลังโทรศัพท์ส่งเฟรมไม่ติดแท็ก → สวิตช์โยนเข้า access VLAN ซึ่งไม่ได้ตั้งไว้ = VLAN 1 ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. พอร์ตยังทำงานปกติทั้งคู่ ไม่ได้ตัดการเชื่อมต่อ\nC. PC ไม่ได้ขาดการเชื่อมต่อ มันแค่ตกไปอยู่ VLAN 1 ซึ่งเป็นค่าเริ่มต้น\nD. ถ้าอยากให้ทั้งคู่อยู่ VLAN 50 ต้องสั่ง switchport access vlan 50 ด้วย ซึ่งใน exhibit ไม่มี\n\n📗 จำไว้สอบ: voice VLAN = ติดแท็ก (โทรศัพท์) • access VLAN = ไม่ติดแท็ก (PC) • ไม่สั่ง access vlan → ได้ VLAN 1 อัตโนมัติ',
  },
  {
    id: 203,
    kind: 'single',
    image: v4q203,
    prompt:
      'Refer to the exhibit. Which action is expected from SW1 when the untagged frame is received on the GigabitEthernet0/1 interface?',
    options: [
      { key: 'A', text: 'The frame is processed in VLAN 1' },
      { key: 'B', text: 'The frame is processed in VLAN 11' },
      { key: 'C', text: 'The frame is processed in VLAN 5' },
      { key: 'D', text: 'The frame is dropped' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เฟรมไม่ติดแท็กที่เข้ามาทาง trunk จะถูกจัดเข้า native VLAN\nกฎของ 802.1Q\n• VLAN ทุกตัวบน trunk ติดแท็ก ยกเว้น native VLAN ตัวเดียวที่วิ่งแบบไม่ติดแท็ก\n• เฟรมขาเข้าที่ไม่มีแท็ก → สวิตช์ถือว่าเป็นของ native VLAN\n\n🔍 อ่าน exhibit — ต้องดูให้ครบว่าบรรทัดไหน "มีผล"\ninterface GigabitEthernet0/1\n switchport access vlan 11        ← ถูกเก็บไว้เฉย ๆ ไม่มีผล เพราะพอร์ตไม่ได้อยู่โหมด access\n switchport trunk allowed vlan 1-10\n switchport trunk encapsulation dot1q\n switchport trunk native vlan 5    ← ตัวนี้แหละที่มีผล\n switchport mode trunk             ← ยืนยันว่าพอร์ตเป็น trunk\n\n✅ ทำไม C ถูก: พอร์ตอยู่โหมด trunk จริง เฟรมที่เข้ามาไม่มีแท็ก → สวิตช์ประมวลผลใน native VLAN = VLAN 5\n\n❌ ทำไมข้ออื่นผิด:\nA. VLAN 1 คือ native VLAN ค่าเริ่มต้น แต่ที่นี่ถูกเปลี่ยนเป็น 5 แล้ว\nB. VLAN 11 มาจากคำสั่ง switchport access vlan 11 ซึ่งจะมีผลก็ต่อเมื่อพอร์ตอยู่โหมด access เท่านั้น — เป็นตัวลวงคลาสสิก\nD. เฟรมไม่ถูกทิ้ง สวิตช์รับได้ปกติ (สังเกตว่า VLAN 5 อยู่ในช่วง allowed 1-10 ด้วย)\n\n📗 จำไว้สอบ: คำสั่ง access และ trunk อยู่ร่วมกันในพอร์ตเดียวได้ แต่จะมีผลเฉพาะชุดที่ตรงกับ switchport mode ปัจจุบัน',
  },
  {
    id: 204,
    kind: 'single',
    prompt: 'Which command is used to enable LLDP globally on a Cisco IOS ISR?',
    options: [
      { key: 'A', text: 'lldp run' },
      { key: 'B', text: 'lldp enable' },
      { key: 'C', text: 'lldp transmit' },
      { key: 'D', text: 'cdp run' },
      { key: 'E', text: 'cdp enable' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — คำสั่งระดับ global กับระดับ interface ของ LLDP/CDP\n\nLLDP (มาตรฐาน IEEE 802.1AB — ใช้ข้ามยี่ห้อได้)\n• Device(config)# lldp run          → เปิด LLDP ทั้งเครื่อง ⭐\n• Device(config-if)# lldp transmit  → ให้พอร์ตนี้ "ส่ง" LLDP\n• Device(config-if)# lldp receive   → ให้พอร์ตนี้ "รับ" LLDP\n\nCDP (ของ Cisco เท่านั้น)\n• Device(config)# cdp run           → เปิด CDP ทั้งเครื่อง\n• Device(config-if)# cdp enable     → เปิด CDP เฉพาะพอร์ต\n\n✅ ทำไม A ถูก: lldp run เป็นคำสั่งใน global configuration mode ที่เปิดใช้งาน LLDP ทั้งอุปกรณ์ ซึ่งตรงกับคำว่า "globally" ในโจทย์ (โดยดีฟอลต์ LLDP ปิดอยู่บน IOS)\n\n❌ ทำไมข้ออื่นผิด:\nB. lldp enable ไม่มีอยู่จริงใน Cisco IOS (สับสนกับ cdp enable)\nC. lldp transmit เป็นคำสั่งระดับอินเทอร์เฟซ และเปิดแค่ทิศส่งอย่างเดียว\nD, E. เป็นคำสั่งของ CDP ไม่ใช่ LLDP\n\n📗 จำไว้สอบ: LLDP → run (global) / transmit + receive (interface) • CDP → run (global) / enable (interface)',
  },
  {
    id: 205,
    kind: 'single',
    prompt: 'Which command should you enter to configure an LLDP delay time of 5 seconds?',
    options: [
      { key: 'A', text: 'lldp timer 5000' },
      { key: 'B', text: 'lldp holdtime 5' },
      { key: 'C', text: 'lldp reinit 5000' },
      { key: 'D', text: 'lldp reinit 5' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตัวจับเวลา 3 ตัวของ LLDP (ทุกตัวมีหน่วยเป็น "วินาที")\n• lldp timer <วินาที>    = ทุกกี่วินาทีจึงส่ง LLDP advertisement (ดีฟอลต์ 30)\n• lldp holdtime <วินาที> = เพื่อนบ้านเก็บข้อมูลเราไว้นานแค่ไหนก่อนลบทิ้ง (ดีฟอลต์ 120)\n• lldp reinit <วินาที>   = "delay time" หน่วงก่อนเริ่มต้น LLDP ใหม่บนอินเทอร์เฟซ (ดีฟอลต์ 2)\n\n✅ ทำไม D ถูก: คำว่า delay time ในศัพท์ LLDP หมายถึงเวลาหน่วงก่อน initialize อินเทอร์เฟซ ซึ่งตั้งด้วย lldp reinit และหน่วยเป็นวินาที → ต้องการ 5 วินาที จึงเป็น lldp reinit 5\n\n❌ ทำไมข้ออื่นผิด:\nA. lldp timer คุมความถี่ในการส่ง ไม่ใช่ delay และ 5000 คือ 5000 วินาที (เกินช่วงที่รับได้)\nB. lldp holdtime คุมอายุข้อมูลฝั่งเพื่อนบ้าน ไม่ใช่ delay\nC. หน่วยเป็นวินาทีอยู่แล้ว การใส่ 5000 คือ 5000 วินาที ไม่ใช่ 5 วินาที (ดักคนที่คิดว่าเป็นมิลลิวินาที)\n\n📗 จำไว้สอบ: reinit = delay ก่อนเริ่มใหม่ • timer = ความถี่ส่ง • holdtime = อายุข้อมูล — ทั้งสามหน่วยเป็นวินาทีทั้งหมด',
  },
  {
    id: 206,
    kind: 'single',
    prompt:
      'In a CDP environment, what happens when the CDP interface on an adjacent device is configured without an IP address?',
    options: [
      { key: 'A', text: 'CDP becomes inoperable on that neighbor' },
      { key: 'B', text: 'CDP uses the IP address of another interface for that neighbor' },
      { key: 'C', text: 'CDP operates normally, but it cannot provide IP address information for that neighbor' },
      { key: 'D', text: 'CDP operates normally, but it cannot provide any information for that neighbor' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — CDP ทำงานที่ Layer 2 ไม่ได้พึ่ง IP\nCDP ห่อข้อมูลใน frame ที่ส่งไปยัง multicast MAC 0100.0CCC.CCCC ผ่าน SNAP จึงคุยกันได้แม้ไม่มี IP address สักตัวบนลิงก์\n\nข้อมูลที่ CDP โฆษณา (TLV)\n• Device ID (ชื่อโฮสต์)\n• Port ID (ชื่ออินเทอร์เฟซ)\n• Platform / Capabilities (รุ่นและบทบาท)\n• Native VLAN, Duplex, VTP domain\n• Address = IP ของอินเทอร์เฟซ ← ตัวนี้เท่านั้นที่ต้องมี IP\n\n✅ ทำไม C ถูก: เมื่ออินเทอร์เฟซของเพื่อนบ้านไม่มี IP address ตัว Address TLV ก็ว่างเปล่า แต่ TLV อื่น ๆ ยังส่งครบ → show cdp neighbors ยังเห็นชื่อ พอร์ต และรุ่น เพียงแต่ show cdp neighbors detail จะไม่มีบรรทัด IP address ให้\n\n❌ ทำไมข้ออื่นผิด:\nA. CDP ไม่ต้องพึ่ง IP จึงไม่ล่ม\nB. CDP โฆษณา IP ของอินเทอร์เฟซที่ส่งออกเท่านั้น ไม่ไปหยิบของอินเทอร์เฟซอื่นมาแทน\nD. "ไม่ให้ข้อมูลใดเลย" แรงเกินไป — ขาดเฉพาะข้อมูล IP\n\n📗 จำไว้สอบ: CDP/LLDP = Layer 2 → ใช้ตรวจสอบว่าสายต่อถูกตัวไหมได้แม้ Layer 3 ยังไม่ทำงาน',
  },
  {
    id: 207,
    kind: 'drag',
    image: v4q207,
    prompt:
      'Drag and drop the benefits of a Cisco Wireless LAN Controller from the left onto the correct examples on the right.',
    categories: [
      { name: 'Controller provides centralized management of users and VLANs', items: ['Easy Deployment Process'] },
      { name: 'Access points auto adjust signal strength', items: ['Dynamic RF Feature'] },
      { name: 'Controller image auto deployed to access Points', items: ['Easy upgrade process'] },
      { name: 'Controller uses loadbalancing to maximize throughput', items: ['Optimized user performance'] },
    ],
    explanation:
      '📘 แนวคิด — ประโยชน์ของ WLC แต่ละข้อสังเกตจากคำสำคัญในประโยคตัวอย่าง\n\n• Dynamic RF Feature → RRM (Radio Resource Management) ให้ AP ปรับกำลังส่งและช่องสัญญาณเองอัตโนมัติ\n  คำใบ้: "auto adjust signal strength" = ปรับความแรงสัญญาณเอง\n\n• Easy Deployment Process → ติดตั้ง AP ใหม่แล้วรับคอนฟิก ผู้ใช้ และ VLAN จากศูนย์กลางทันที ไม่ต้องไปตั้งทีละตัว\n  คำใบ้: "centralized management of users and VLANs"\n\n• Easy upgrade process → อัปเกรดเฟิร์มแวร์ที่ WLC ที่เดียว แล้ว WLC ผลัก image ลง AP ทุกตัวให้เอง\n  คำใบ้: "image auto deployed to access Points"\n\n• Optimized user performance → WLC เกลี่ยผู้ใช้ระหว่าง AP (client load balancing) ไม่ให้กระจุกตัวที่ AP เดียว\n  คำใบ้: "loadbalancing to maximize throughput"\n\n💡 เทคนิคจับคู่: ประโยคที่มีคำว่า auto + สัญญาณ → RF, คำว่า image/firmware → upgrade, คำว่า users/VLANs → deployment, คำว่า throughput/load → performance\n\n📗 จำไว้สอบ: WLC รวมศูนย์ 4 เรื่องหลัก — คอนฟิก, RF, การอัปเกรด และการเกลี่ยโหลดผู้ใช้',
  },
  {
    id: 208,
    kind: 'single',
    prompt: 'When configuring an EtherChannel bundle, which mode enables LACP only if a LACP device is detected?',
    options: [
      { key: 'A', text: 'Passive' },
      { key: 'B', text: 'Desirable' },
      { key: 'C', text: 'On' },
      { key: 'D', text: 'Auto' },
      { key: 'E', text: 'Active' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โหมด "เชิงรับ" กับ "เชิงรุก" ของ EtherChannel\n\nLACP (802.3ad — มาตรฐานเปิด)\n• active  = เชิงรุก ส่ง LACP ออกไปชวนเจรจาก่อนเสมอ\n• passive = เชิงรับ ไม่ส่งก่อน รอจนตรวจพบ LACP จากอีกฝั่งจึงตอบ ⭐\n\nPAgP (ของ Cisco)\n• desirable = เชิงรุก\n• auto      = เชิงรับ\n\n✅ ทำไม A ถูก: ประโยค "enables LACP only if a LACP device is detected" ตรงนิยามของ passive เป๊ะ — พอร์ตจะเงียบจนกว่าจะได้ยิน LACP จากเพื่อนบ้าน จึงค่อยเปิดใช้งาน\n\n❌ ทำไมข้ออื่นผิด:\nB. desirable เป็นเชิงรุกของ PAgP ไม่ใช่ LACP และมันชวนเจรจาก่อน\nC. on ไม่เจรจาเลย บังคับรวมลิงก์ทันที ไม่สนว่าอีกฝั่งเป็นอะไร (เสี่ยงลูป)\nD. auto เป็นเชิงรับของ PAgP ไม่ใช่ LACP — เป็นตัวลวงที่คนตอบผิดบ่อยที่สุด\nE. active เป็น LACP ก็จริง แต่เป็นเชิงรุก ส่งก่อนเสมอ ไม่ตรงกับ "only if detected"\n\n📗 จำไว้สอบ: เชิงรับ LACP = passive, เชิงรับ PAgP = auto • สองฝั่งเชิงรับด้วยกัน (passive+passive หรือ auto+auto) แชนแนลไม่เกิด',
  },
  {
    id: 209,
    kind: 'single',
    image: v4q209,
    prompt: 'Refer to the exhibit. Which VLAN ID is associated with the default VLAN in the given environment?',
    options: [
      { key: 'A', text: 'VLAN 1' },
      { key: 'B', text: 'VLAN 5' },
      { key: 'C', text: 'VLAN 10' },
      { key: 'D', text: 'VLAN 20' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — อย่าสับสนระหว่าง 3 คำนี้ ข้อสอบชอบเอามาปนกัน\n• Default VLAN = VLAN 1 เสมอ เป็นค่าที่ติดมากับสวิตช์ Cisco ทุกตัว ทุกพอร์ตเริ่มต้นอยู่ VLAN 1 และลบไม่ได้\n• Native VLAN = VLAN ที่วิ่งแบบไม่ติดแท็กบน trunk (ตั้งค่าได้ ดีฟอลต์คือ 1)\n• Access VLAN = VLAN ที่ผูกกับพอร์ต access\n\n🔍 อ่าน exhibit\nSW1/SW2 Fa0/0: switchport access vlan 5      → นี่คือ access VLAN\nSW1/SW2 Fa0/1: switchport trunk native vlan 10 → นี่คือ native VLAN\nไม่มีคำสั่งใดเปลี่ยน default VLAN เพราะเปลี่ยนไม่ได้\n\n✅ ทำไม A ถูก: ไม่ว่าจะคอนฟิกอะไรลงไป default VLAN ของสวิตช์ Cisco คือ VLAN 1 เสมอ — เป็นข้อเท็จจริงตายตัว ไม่ขึ้นกับ exhibit\n\n❌ ทำไมข้ออื่นผิด:\nB. VLAN 5 คือ access VLAN ของพอร์ต Fa0/0\nC. VLAN 10 คือ native VLAN ที่ถูกตั้งใหม่บน trunk\nD. VLAN 20 เป็นเพียงขอบบนของช่วง allowed vlan 5-20 ไม่ได้มีบทบาทพิเศษ\n\n📗 จำไว้สอบ: default VLAN = 1 (ลบไม่ได้) • VLAN 1002-1005 สงวนไว้ให้ FDDI/Token Ring • native VLAN เปลี่ยนได้และต้องตรงกันทั้งสองฝั่ง trunk',
  },
  {
    id: 210,
    kind: 'multi',
    prompt: 'Which two VLAN IDs indicate a default VLAN? (Choose two.)',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '1' },
      { key: 'C', text: '1005' },
      { key: 'D', text: '1006' },
      { key: 'E', text: '4096' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — ช่วงหมายเลข VLAN บนสวิตช์ Cisco\n0        = สงวน ใช้ไม่ได้\n1        = default VLAN สร้างมาให้แล้ว ลบไม่ได้ ⭐\n2-1001   = normal range สร้าง/ลบได้อิสระ\n1002-1005 = default VLAN ที่ระบบสร้างให้เอง สำหรับ FDDI และ Token Ring ⭐\n           (1002 fddi-default, 1003 token-ring-default, 1004 fddinet-default, 1005 trnet-default)\n1006-4094 = extended range ต้องอยู่ใน VTP transparent/v3\n4095      = สงวน ใช้ไม่ได้\n\n✅ ทำไม B + C ถูก: คำว่า "default VLAN" ในบริบทของ Cisco คือ VLAN ที่มีอยู่ในฐานข้อมูลตั้งแต่แกะกล่องโดยไม่ต้องสร้าง — ได้แก่ VLAN 1 และ VLAN 1002-1005 ในตัวเลือกที่ให้มามีเพียง 1 และ 1005 ที่เข้าข่าย\n\n❌ ทำไมข้ออื่นผิด:\nA. VLAN 0 เป็นหมายเลขสงวน (ใช้ในแท็ก 802.1p priority-only) สร้างไม่ได้\nD. VLAN 1006 อยู่ใน extended range ต้องสร้างเอง ไม่ใช่ค่าเริ่มต้น\nE. VLAN 4096 เกินขอบเขต — VLAN ID มี 12 บิต จึงสูงสุดที่ 4095 และ 4095 ก็สงวนอีก\n\n📗 จำไว้สอบ: default VLAN = 1 + 1002-1005 • ใช้ได้จริง 1-1005 กับ 1006-4094 • สงวน 0 และ 4095',
  },
  {
    id: 211,
    kind: 'multi',
    prompt:
      'Which two pieces of information about a Cisco device can Cisco Discovery Protocol communicate? (Choose two.)',
    options: [
      { key: 'A', text: 'the native VLAN' },
      { key: 'B', text: 'the trunking protocol' },
      { key: 'C', text: 'the VTP domain' },
      { key: 'D', text: 'the spanning-tree priority' },
      { key: 'E', text: 'the spanning-tree protocol' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — CDP โฆษณาอะไรบ้าง (TLV ที่ออกสอบ)\n✔ Device ID — ชื่อโฮสต์ของเพื่อนบ้าน\n✔ Port ID — อินเทอร์เฟซที่เชื่อมกันอยู่\n✔ Platform & Capabilities — รุ่นและบทบาท (R = Router, S = Switch)\n✔ Address — IP ของอินเทอร์เฟซนั้น\n✔ Native VLAN ⭐ — ใช้ตรวจ native VLAN mismatch (สวิตช์จะขึ้นเตือน %CDP-4-NATIVE_VLAN_MISMATCH)\n✔ Duplex ⭐ — ใช้ตรวจ duplex mismatch\n✔ VTP Management Domain ⭐\n✔ IOS version, Power (PoE), Holdtime\n\n✅ ทำไม A + C ถูก: native VLAN และ VTP management domain เป็น TLV มาตรฐานที่ CDP ส่งออกไปทุกครั้ง จึงเป็นเหตุผลที่ CDP ใช้จับ native VLAN mismatch และ VTP domain ที่พิมพ์ผิดได้\n\n❌ ทำไมข้ออื่นผิด:\nB. CDP ไม่บอกว่าลิงก์ใช้ ISL หรือ 802.1Q — เรื่องนี้เป็นหน้าที่ของ DTP\nD, E. ข้อมูล spanning-tree (priority, โหมด PVST+/RSTP, root bridge) เดินทางใน BPDU ไม่ใช่ใน CDP\n\n📗 จำไว้สอบ: CDP บอก native VLAN + duplex + VTP domain → จึงเป็นเครื่องมือแรกที่ใช้ตามหา mismatch ทางกายภาพและ VLAN',
  },
  {
    id: 212,
    kind: 'multi',
    prompt: 'After you deploy a new WLAN controller on your network, which two additional tasks should you consider? (Choose two.)',
    options: [
      { key: 'A', text: 'deploy load balancers' },
      { key: 'B', text: 'configure additional vlans' },
      { key: 'C', text: 'configure multiple VRRP groups' },
      { key: 'D', text: 'deploy POE switches' },
      { key: 'E', text: 'configure additional security policies' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — เอา WLC เข้ามาแล้วต้องทำอะไรต่อ\nWLC ทำหน้าที่รวมศูนย์ SSID หลายวง แต่ละ SSID มักต้องแยกกลุ่มผู้ใช้ออกจากกัน จึงเกิดงานตามมา 2 อย่างเป็นหลัก\n1️⃣ VLAN เพิ่ม — แต่ละ WLAN/SSID ควรถูกแมปไปยัง dynamic interface ของ WLC ที่ผูกกับ VLAN ของตัวเอง (เช่น Corp, Guest, Voice) เพื่อแยก broadcast domain และแยกซับเน็ต\n2️⃣ นโยบายความปลอดภัยเพิ่ม — แต่ละ SSID ต้องกำหนดวิธียืนยันตัวตนของมันเอง (WPA2-PSK, 802.1X/RADIUS, Web-Auth สำหรับแขก) รวมถึง ACL และ QoS profile\n\n✅ ทำไม B + E ถูก: ทั้งสองอย่างเป็นงานที่เกิดขึ้นแน่นอนเมื่อเพิ่ม WLC เพราะ WLC ออกแบบมาให้บริการหลาย SSID หลายกลุ่มผู้ใช้พร้อมกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. load balancer เป็นอุปกรณ์กระจายโหลดของเซิร์ฟเวอร์แอปพลิเคชัน ไม่เกี่ยวกับการติดตั้ง WLC\nC. VRRP ใช้ทำ gateway สำรอง — WLC มีกลไกสำรองของตัวเอง (HA SSO / N+1) ไม่ต้องพึ่ง VRRP\nD. PoE switch จำเป็นสำหรับ "AP" ไม่ใช่สำหรับ WLC และในหลายกรณีสวิตช์ PoE มีอยู่แล้วก่อนติด WLC\n\n📗 จำไว้สอบ: 1 SSID ≈ 1 dynamic interface ≈ 1 VLAN ≈ 1 นโยบายความปลอดภัย',
  },
  {
    id: 213,
    kind: 'single',
    image: v4q213,
    prompt: 'Refer to the exhibit. How will switch SW2 handle traffic from VLAN 10 on SW1?',
    options: [
      { key: 'A', text: 'It sends the traffic to VLAN 10.' },
      { key: 'B', text: 'It sends the traffic to VLAN 100.' },
      { key: 'C', text: 'It drops the traffic.' },
      { key: 'D', text: 'It sends the traffic to VLAN 1.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — native VLAN mismatch ทำให้ทราฟฟิก "รั่ว" ข้าม VLAN\nบน trunk 802.1Q ทราฟฟิกของ native VLAN จะถูกส่งออกไปโดย "ไม่ติดแท็ก" และฝั่งรับก็จะเอาเฟรมไม่ติดแท็กไปใส่ native VLAN ของ "ตัวเอง"\n\n🔍 อ่าน exhibit\nSW1 Fa0/1: switchport trunk native vlan 10\nSW2 Fa0/1: switchport trunk native vlan 100\nทั้งสองฝั่ง allowed vlan 5-20 เหมือนกัน\n\n🔗 ไล่เส้นทางเฟรม\n1. โฮสต์ใน VLAN 10 บน SW1 ส่งข้อมูล → SW1 เห็นว่า VLAN 10 = native ของตัวเอง จึงถอด/ไม่ใส่แท็ก แล้วส่งออก trunk\n2. SW2 รับเฟรมที่ "ไม่มีแท็ก" → กฎบังคับให้จัดเข้า native VLAN ของ SW2 ซึ่งคือ VLAN 100\n\n✅ ทำไม B ถูก: ทราฟฟิกจาก VLAN 10 ของ SW1 จบลงใน VLAN 100 ของ SW2 — สอง VLAN ถูกเชื่อมเป็น broadcast domain เดียวกันโดยไม่ตั้งใจ ซึ่งเป็นช่องโหว่ VLAN hopping\n\n❌ ทำไมข้ออื่นผิด:\nA. จะเป็นแบบนี้ก็ต่อเมื่อ native VLAN ตรงกันทั้งสองฝั่ง\nC. trunk ยังขึ้นปกติ เฟรมไม่ถูกทิ้ง (CDP จะแค่ขึ้น log เตือน native VLAN mismatch)\nD. VLAN 1 จะเป็นปลายทางก็ต่อเมื่อ SW2 ไม่ได้เปลี่ยน native VLAN ไว้\n\n📗 จำไว้สอบ: native VLAN ไม่ตรงกัน = trunk ยังขึ้น แต่สอง VLAN ถูกเชื่อมเข้าด้วยกัน — เป็นปัญหาความปลอดภัย ไม่ใช่ปัญหาลิงก์ดาวน์',
  },
  {
    id: 214,
    kind: 'multi',
    prompt: 'Which two commands can you use to configure an actively negotiate EtherChannel? (Choose two.)',
    options: [
      { key: 'A', text: 'channel-group 10 mode on' },
      { key: 'B', text: 'channel-group 10 mode auto' },
      { key: 'C', text: 'channel-group 10 mode passive' },
      { key: 'D', text: 'channel-group 10 mode desirable' },
      { key: 'E', text: 'channel-group 10 mode active' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — คำว่า "actively negotiate" = ฝั่งนี้เป็นผู้เริ่มส่งแพ็กเก็ตเจรจาออกไปเอง\n\nแยกเป็นตาราง\nโหมด      โปรโตคอล   เริ่มเจรจาก่อนไหม\nactive    LACP       ใช่ ⭐\npassive   LACP       ไม่ (รอฝั่งตรงข้าม)\ndesirable PAgP       ใช่ ⭐\nauto      PAgP       ไม่ (รอฝั่งตรงข้าม)\non        ไม่มี      ไม่เจรจาเลย\n\n✅ ทำไม D + E ถูก: มีเพียง desirable (PAgP) และ active (LACP) เท่านั้นที่ส่งแพ็กเก็ตเจรจาออกไปก่อนโดยไม่ต้องรอ — โจทย์ไม่ได้ระบุว่าต้องเป็นมาตรฐานเปิด จึงตอบได้ทั้งสองตระกูล\n\n❌ ทำไมข้ออื่นผิด:\nA. mode on ไม่เจรจาเลย บังคับรวมลิงก์ทันที — ถ้าอีกฝั่งเป็น active/desirable แชนแนลจะไม่เกิดและอาจเกิดลูป\nB. auto เป็นเชิงรับของ PAgP\nC. passive เป็นเชิงรับของ LACP\n\n💡 กับดัก: ถ้าโจทย์เพิ่มคำว่า "open standard" หรือ "non-proprietary" คำตอบจะเหลือแค่ active เท่านั้น\n\n📗 จำไว้สอบ: เชิงรุก = active (LACP) / desirable (PAgP) • เชิงรับ = passive (LACP) / auto (PAgP)',
  },
  {
    id: 215,
    kind: 'single',
    prompt: 'How does STP prevent forwarding loops at OSI Layer 2?',
    options: [
      { key: 'A', text: 'TTL' },
      { key: 'B', text: 'MAC address forwarding' },
      { key: 'C', text: 'Collision avoidance' },
      { key: 'D', text: 'Port blocking' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ทำไม Layer 2 ถึงต้องมี STP\nเฟรมอีเทอร์เน็ต "ไม่มี" ฟิลด์ TTL แบบแพ็กเก็ต IP ดังนั้นถ้ามีเส้นทางวนซ้ำ เฟรม broadcast จะวิ่งวนไม่รู้จบจนเกิด broadcast storm, MAC table instability และเฟรมซ้ำซ้อน\n\nวิธีที่ STP แก้ปัญหา\n1️⃣ เลือก root bridge (BID ต่ำสุด = priority ก่อน แล้วค่อย MAC)\n2️⃣ ทุกสวิตช์ที่ไม่ใช่ root เลือก root port 1 พอร์ต (cost ไปหา root ต่ำสุด)\n3️⃣ ทุกเซกเมนต์เลือก designated port 1 พอร์ต\n4️⃣ พอร์ตที่เหลือถูกสั่งให้ blocking — ไม่ส่งต่อข้อมูลผู้ใช้ แต่ยังฟัง BPDU อยู่ ⭐\n\n✅ ทำไม D ถูก: การ block พอร์ตส่วนเกินคือกลไกเดียวที่ STP ใช้ตัดลูป โทโพโลยีทางกายภาพยังเป็นวงแหวน แต่โทโพโลยีเชิงตรรกะกลายเป็นต้นไม้ที่ไม่มีวง และเมื่อลิงก์หลักล่ม พอร์ตที่ block อยู่ก็จะถูกปลดมาใช้แทน\n\n❌ ทำไมข้ออื่นผิด:\nA. TTL อยู่ในเฮดเดอร์ IP (Layer 3) เฟรม Layer 2 ไม่มี จึงเป็นเหตุผลที่ต้องมี STP ตั้งแต่แรก\nB. การส่งต่อตาม MAC address คือหน้าที่ปกติของสวิตช์ ไม่ได้ป้องกันลูป\nC. Collision avoidance (CSMA/CA) เป็นเรื่องของการแย่งใช้สื่อ ไม่เกี่ยวกับลูป\n\n📗 จำไว้สอบ: เฟรม L2 ไม่มี TTL → ลูปไม่มีวันจบเอง → STP ต้อง block พอร์ต',
  },
  {
    id: 216,
    kind: 'multi',
    prompt: 'Which two statements about VTP are true? (Choose two.)',
    options: [
      { key: 'A', text: 'All switches must be configured with the same VTP domain name' },
      { key: 'B', text: 'All switches must be configured to perform trunk negotiation' },
      { key: 'C', text: 'All switches must be configured with a unique VTP domain name' },
      { key: 'D', text: 'The VTP server must have the highest revision number in the domain' },
      { key: 'E', text: 'All switches must use the same VTP version' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — เงื่อนไขที่ VTP จะซิงก์ฐานข้อมูล VLAN ให้สำเร็จ\n1️⃣ VTP domain name ต้องสะกดตรงกันเป๊ะ (case-sensitive) ⭐\n2️⃣ VTP version ต้องตรงกัน (v1/v2/v3 คุยข้ามเวอร์ชันไม่ได้) ⭐\n3️⃣ ต้องมี trunk เชื่อมกัน เพราะ VTP advertisement วิ่งเฉพาะบน trunk\n4️⃣ ถ้าตั้งรหัสผ่าน VTP ต้องตรงกันด้วย\n\n✅ ทำไม A + E ถูก: ทั้ง domain name และ version เป็นเงื่อนไขบังคับ ถ้าอย่างใดอย่างหนึ่งไม่ตรง สวิตช์จะเมินข้อความ VTP ของกันและกันไปเลย\n\n❌ ทำไมข้ออื่นผิด:\nB. trunk จำเป็นก็จริง แต่ไม่จำเป็นต้อง "เจรจา" (DTP) — ตั้ง switchport mode trunk แบบตายตัวทั้งสองฝั่งก็ใช้ได้ และปลอดภัยกว่า\nC. ตรงข้ามกับความจริง — ถ้าชื่อโดเมนไม่ซ้ำกัน แต่ละตัวจะกลายเป็นคนละโดเมนและไม่ซิงก์กันเลย\nD. อันตรายและไม่จริง — สวิตช์ตัวไหนก็ตาม (แม้เป็น client) ที่มี revision number สูงกว่าจะเป็นตัวที่เขียนทับฐานข้อมูล VLAN ของทั้งโดเมน นี่คือสาเหตุที่การเสียบสวิตช์เก่าเข้าเครือข่ายทำ VLAN หายทั้งระบบ — ต้องรีเซ็ต revision ให้เป็น 0 ก่อน (เปลี่ยนเป็น transparent แล้วกลับมา หรือเปลี่ยนชื่อโดเมนไปกลับ)\n\n📗 จำไว้สอบ: VTP ต้องตรงกัน 3 อย่าง = domain name + version + password • revision สูงสุดเป็นผู้ชนะ ไม่ใช่ role',
  },
  {
    id: 217,
    kind: 'single',
    prompt: 'Which type does a port become when it receives the best BPDU on a bridge?',
    options: [
      { key: 'A', text: 'The designated port' },
      { key: 'B', text: 'The backup port' },
      { key: 'C', text: 'The alternate port' },
      { key: 'D', text: 'The root port' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — บทบาทของพอร์ตใน STP/RSTP\n• Root port (RP) — พอร์ตบนสวิตช์ที่ไม่ใช่ root ซึ่ง "ได้รับ BPDU ที่ดีที่สุด" คือเส้นทางที่มี cost ไปถึง root bridge ต่ำที่สุด มีได้ 1 พอร์ตต่อสวิตช์ สถานะ forwarding ⭐\n• Designated port (DP) — พอร์ตฝั่งที่ "ส่ง" BPDU ที่ดีที่สุดลงเซกเมนต์นั้น มี 1 พอร์ตต่อเซกเมนต์ สถานะ forwarding\n• Alternate port — พอร์ตที่ได้รับ BPDU ดีรองลงมาจากสวิตช์อื่น เป็นเส้นทางสำรองไปหา root สถานะ blocking/discarding\n• Backup port — พอร์ตที่ได้รับ BPDU ที่ดีกว่าจาก "ตัวเอง" (เกิดบนฮับหรือเซกเมนต์ที่ต่อสวิตช์เดียวกันสองเส้น) สถานะ blocking\n\n✅ ทำไม D ถูก: คำนิยามของ root port คือพอร์ตที่รับ superior BPDU หรือ "BPDU ที่ดีที่สุด" เข้ามา จึงถูกเลือกเป็นทางขึ้นสู่ root bridge\n\n❌ ทำไมข้ออื่นผิด:\nA. designated port เป็นพอร์ตที่ "ส่ง" BPDU ที่ดีที่สุดออกไป ไม่ใช่รับ\nB. backup port รับ BPDU ที่ดีกว่าจากสวิตช์ตัวเดียวกัน จึงเป็นสำรองของ designated port ไม่ใช่ของเส้นทางไป root\nC. alternate port รับ BPDU ที่ดี แต่ "ไม่ดีที่สุด" จึงเป็นสำรองของ root port\n\n📗 จำไว้สอบ: รับ BPDU ดีที่สุด = Root Port • ส่ง BPDU ดีที่สุด = Designated Port • สำรองของ RP = Alternate • สำรองของ DP = Backup',
  },
  {
    id: 218,
    kind: 'single',
    prompt: 'Which value can you modify to configure a specific interface as the preferred forwarding interface?',
    options: [
      { key: 'A', text: 'The interface number' },
      { key: 'B', text: 'The port priority' },
      { key: 'C', text: 'The VLAN priority' },
      { key: 'D', text: 'The hello time' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ลำดับการตัดสินเลือก root port ของ STP (ไล่จากบนลงล่าง หยุดทันทีที่ชนะ)\n1️⃣ Root path cost ต่ำสุด\n2️⃣ Bridge ID ของเพื่อนบ้าน (sender BID) ต่ำสุด\n3️⃣ Port ID ของเพื่อนบ้าน (sender Port ID) ต่ำสุด ← port priority + port number\n4️⃣ Port ID ของตัวเอง (local Port ID) ต่ำสุด\n\nPort ID = port priority (8 บิต ดีฟอลต์ 128 ปรับทีละ 16) + port number\nคำสั่ง: Switch(config-if)# spanning-tree [vlan <id>] port-priority <0-240>\n\n✅ ทำไม B ถูก: เมื่อสองลิงก์มี cost และ BID เท่ากันทุกอย่าง (เช่นสวิตช์สองตัวต่อกันด้วยสองเส้นความเร็วเท่ากัน) ตัวตัดสินคือ Port ID — ลด port priority ของอินเทอร์เฟซที่ต้องการให้ต่ำกว่า 128 พอร์ตนั้นจะถูกเลือกเป็นพอร์ต forwarding\n\n❌ ทำไมข้ออื่นผิด:\nA. หมายเลขอินเทอร์เฟซเป็นสมบัติทางกายภาพ เปลี่ยนไม่ได้ (แม้จะถูกใช้เป็นตัวตัดสินลำดับสุดท้ายก็ตาม)\nC. ไม่มีค่าที่เรียกว่า "VLAN priority" ใน STP — ที่มีคือ bridge priority ต่อ VLAN ซึ่งใช้เลือก root bridge ไม่ใช่เลือกพอร์ต\nD. hello time คุมความถี่ในการส่ง BPDU (ดีฟอลต์ 2 วินาที) ไม่มีผลต่อการเลือกพอร์ต\n\n📗 จำไว้สอบ: อยากบังคับพอร์ตไหนให้ forward → ลด port-priority (ค่าต่ำชนะ) • อยากบังคับสวิตช์ไหนเป็น root → ลด bridge priority',
  },
  {
    id: 219,
    kind: 'single',
    prompt: 'Which statement about Cisco Discovery Protocol is true?',
    options: [
      { key: 'A', text: 'It is a Cisco-proprietary protocol.' },
      { key: 'B', text: 'It runs on the network layer.' },
      { key: 'C', text: 'It can discover information from routers, firewalls, and switches.' },
      { key: 'D', text: 'It runs on the physical layer and the data link layer.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ข้อเท็จจริงหลักของ CDP\n• เป็นโปรโตคอลกรรมสิทธิ์ของ Cisco (Cisco-proprietary) อุปกรณ์ยี่ห้ออื่นไม่รองรับ ⭐\n• ทำงานที่ชั้น Data Link (Layer 2) ชั้นเดียว ไม่ได้ทำงานที่ Physical Layer\n• ส่งทุก 60 วินาที holdtime 180 วินาที\n• เปิดใช้งานโดยดีฟอลต์บนอุปกรณ์ Cisco ส่วนใหญ่\n\n✅ ทำไม A ถูก: CDP ถูกพัฒนาและเป็นสมบัติของ Cisco เท่านั้น — นี่คือเหตุผลตรง ๆ ที่ทำให้ต้องมี LLDP (IEEE 802.1AB) เอาไว้ใช้ในเครือข่ายที่มีหลายยี่ห้อปนกัน\n\n❌ ทำไมข้ออื่นผิด:\nB. CDP ทำงานที่ Data Link ไม่ใช่ Network Layer — จึงใช้ได้แม้ยังไม่มี IP บนลิงก์\nC. หลอกเก่ง — CDP ค้นหาได้เฉพาะอุปกรณ์ Cisco เท่านั้น (เราเตอร์/สวิตช์/โทรศัพท์/AP ของ Cisco) ไฟร์วอลล์ยี่ห้ออื่นมองไม่เห็น ยิ่งกว่านั้นบน Cisco ASA รุ่นเก่าก็ไม่รองรับ CDP\nD. ผิดครึ่งเดียว — CDP อยู่ที่ Data Link อย่างเดียว ไม่ได้ลงไปถึง Physical Layer\n\n📗 จำไว้สอบ: CDP = Cisco เท่านั้น, L2, 60/180 วินาที • LLDP = มาตรฐานเปิด, L2, 30/120 วินาที, ต้องเปิดเอง',
  },
  {
    id: 220,
    kind: 'multi',
    prompt: 'What are two reasons a network administrator would use CDP? (Choose two.)',
    options: [
      { key: 'A', text: 'to verify the type of cable interconnecting two devices' },
      { key: 'B', text: 'to determine the status of network services on a remote device' },
      { key: 'C', text: 'to obtain VLAN information from directly connected switches' },
      { key: 'D', text: 'to verify Layer 2 connectivity between two devices when Layer 3 fails' },
      { key: 'E', text: 'to obtain the IP address of a connected device in order to telnet to the device' },
      { key: 'F', text: 'to determine the status of the routing protocols between directly connected routers' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — CDP มีประโยชน์ตรงไหนในงานจริง\nCDP ทำงานที่ Layer 2 ล้วน ๆ จึงยังเห็นเพื่อนบ้านแม้ IP จะยังคอนฟิกผิดหรือยังไม่ได้ใส่ ประโยชน์หลักจึงมี 2 ข้อ\n1️⃣ ยืนยันว่าสายต่อถูกอุปกรณ์/ถูกพอร์ตจริง (Layer 2 ใช้ได้) แม้ ping ไม่ผ่าน ⭐\n2️⃣ ดึง IP ของเพื่อนบ้านจาก show cdp neighbors detail หรือ show cdp entry * เพื่อ telnet/ssh เข้าไปต่อ ⭐\n\n✅ ทำไม D + E ถูก: ทั้งคู่คือวิธีที่แอดมินใช้ CDP จริงในการไล่แก้ปัญหา — พิสูจน์ว่าลิงก์ชั้น 2 ดี และหา IP ปลายทางเพื่อเข้าไปจัดการต่อ\n\n❌ ทำไมข้ออื่นผิด:\nA. CDP บอกชนิดพอร์ตและรุ่นอุปกรณ์ แต่ไม่บอกว่าสายเป็น straight-through, crossover หรือ fiber ชนิดไหน\nB. สถานะของบริการ (HTTP, DNS, DHCP) เป็นเรื่องชั้นแอปพลิเคชัน CDP ไม่แตะ\nC. CDP บอกแค่ "native VLAN" ของลิงก์เท่านั้น ไม่ได้ส่งรายการ VLAN ทั้งฐานข้อมูลมาให้ — งานนั้นเป็นของ VTP\nF. CDP ไม่รู้จัก OSPF/EIGRP/BGP ต้องใช้ show ip ospf neighbor หรือ show ip eigrp neighbors แทน\n\n📗 จำไว้สอบ: CDP ใช้ตอบ 2 คำถาม — "ปลายสายนี้คืออุปกรณ์อะไร พอร์ตไหน" และ "IP ของมันคืออะไร"',
  },
  {
    id: 221,
    kind: 'multi',
    prompt: 'What are two benefits of using VTP in a switching environment? (Choose two.)',
    options: [
      { key: 'A', text: 'It allows switches to read frame tags.' },
      { key: 'B', text: 'It allows ports to be assigned to VLANs automatically.' },
      { key: 'C', text: 'It maintains VLAN consistency across a switched network.' },
      { key: 'D', text: 'It allows frames from multiple VLANs to use a single interface.' },
      {
        key: 'E',
        text: 'It allows VLAN information to be automatically propagated throughout the switching environment.',
      },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — VTP ทำอะไรและไม่ทำอะไร\nVTP (VLAN Trunking Protocol) มีหน้าที่เดียวคือ "ซิงก์ฐานข้อมูล VLAN" (หมายเลข VLAN + ชื่อ VLAN) ระหว่างสวิตช์ในโดเมนเดียวกัน โดยส่ง advertisement ผ่าน trunk\n\nสิ่งที่ VTP ทำ\n✔ สร้าง/ลบ/เปลี่ยนชื่อ VLAN ที่ VTP server ตัวเดียว แล้วกระจายไปทุกตัวอัตโนมัติ\n✔ ทำให้ทุกสวิตช์มีรายการ VLAN ตรงกัน ลดความผิดพลาดจากการพิมพ์ซ้ำ ๆ\n\nสิ่งที่ VTP ไม่ทำ\n✘ ไม่กำหนดว่าพอร์ตไหนอยู่ VLAN ไหน (ต้องสั่ง switchport access vlan เอง)\n✘ ไม่ติด/ถอดแท็ก 802.1Q\n✘ ไม่สร้าง trunk ให้ (นั่นคือหน้าที่ของ DTP)\n\n✅ ทำไม C + E ถูก: ทั้งสองข้อคือคำอธิบายเดียวกันของหน้าที่หลัก VTP — กระจายข้อมูล VLAN อัตโนมัติ (E) ผลลัพธ์คือฐานข้อมูล VLAN สอดคล้องกันทั้งเครือข่าย (C)\n\n❌ ทำไมข้ออื่นผิด:\nA. การอ่านแท็กเป็นความสามารถของ 802.1Q ในตัวสวิตช์เอง ไม่ต้องมี VTP\nB. VTP ไม่เคยกำหนดพอร์ตเข้า VLAN ให้ — ตัวลวงที่ตอบผิดกันมากที่สุด\nD. การส่งหลาย VLAN ผ่านพอร์ตเดียวคือ trunking (802.1Q) ไม่ใช่ VTP\n\n📗 จำไว้สอบ: VTP = ซิงก์ "รายชื่อ VLAN" เท่านั้น • การจับพอร์ตเข้า VLAN ยังต้องทำมือทุกตัว',
  },
  {
    id: 222,
    kind: 'multi',
    prompt: 'Which three statements are typical characteristics of VLAN arrangements? (Choose three.)',
    options: [
      { key: 'A', text: 'A new switch has no VLANs configured.' },
      { key: 'B', text: 'Connectivity between VLANs requires a Layer 3 device.' },
      { key: 'C', text: 'VLANs typically decrease the number of collision domains.' },
      { key: 'D', text: 'Each VLAN uses a separate address space.' },
      { key: 'E', text: 'A switch maintains a separate bridging table for each VLAN.' },
      { key: 'F', text: 'VLANs cannot span multiple switches.' },
    ],
    correct: ['B', 'D', 'E'],
    explanation:
      '📘 แนวคิด — คุณสมบัติพื้นฐานของ VLAN\n• VLAN 1 ตัว = broadcast domain 1 วง = ซับเน็ต IP 1 วง\n• สวิตช์แยกตาราง MAC (bridging table) ของแต่ละ VLAN ออกจากกัน จึงมีชื่อว่า Independent VLAN Learning\n• การข้าม VLAN ต้องผ่านอุปกรณ์ Layer 3 (เราเตอร์, router-on-a-stick หรือ SVI บน L3 switch)\n\n✅ ทำไม B, D, E ถูก:\nB. VLAN แยก broadcast domain ออกจากกัน จึงต้องมีการ routing เพื่อคุยข้าม VLAN ✔\nD. เพราะแต่ละ VLAN คือคนละ broadcast domain จึงต้องใช้คนละซับเน็ต ✔\nE. สวิตช์เก็บ MAC address table แยกต่อ VLAN — สังเกตคอลัมน์ VLAN ในผลลัพธ์ show mac address-table ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ใหม่มี VLAN 1 (และ 1002-1005) อยู่แล้วเสมอ และทุกพอร์ตอยู่ใน VLAN 1\nC. สลับกัน — VLAN แบ่ง broadcast domain ไม่ใช่ collision domain, collision domain ถูกแยกด้วย "จำนวนพอร์ตของสวิตช์" อยู่แล้ว และ VLAN ทำให้ broadcast domain "เพิ่ม" ขึ้นไม่ใช่ลดลง\nF. VLAN ข้ามสวิตช์ได้สบายด้วย trunk 802.1Q — นี่คือเหตุผลหลักที่ VLAN มีประโยชน์\n\n📗 จำไว้สอบ: 1 VLAN = 1 broadcast domain = 1 subnet = 1 ตาราง MAC • ข้าม VLAN ต้องใช้ Layer 3',
  },
  {
    id: 223,
    kind: 'single',
    prompt:
      'On a corporate network, hosts on the same VLAN can communicate with each other, but they are unable to communicate with hosts on different VLANs. What is needed to allow communication between the VLANs?',
    options: [
      {
        key: 'A',
        text: 'a router with subinterfaces configured on the physical interface that is connected to the switch',
      },
      { key: 'B', text: 'a router with an IP address on the physical interface connected to the switch' },
      { key: 'C', text: 'a switch with an access link that is configured between the switches' },
      { key: 'D', text: 'a switch with a trunk link that is configured between the switches' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Inter-VLAN routing แบบ router-on-a-stick\nอาการที่โจทย์บอก (ใน VLAN เดียวกันคุยได้ ข้าม VLAN ไม่ได้) คืออาการปกติของสวิตช์ Layer 2 ล้วน ๆ ต้องเพิ่มอุปกรณ์ Layer 3 เข้ามาทำหน้าที่ default gateway ให้ทุก VLAN\n\n🔧 คอนฟิกที่ต้องได้\nSwitch(config-if)# switchport mode trunk        ← ฝั่งสวิตช์\n!\nRouter(config)# interface g0/0.10\nRouter(config-subif)# encapsulation dot1Q 10\nRouter(config-subif)# ip address 10.0.10.1 255.255.255.0\nRouter(config)# interface g0/0.20\nRouter(config-subif)# encapsulation dot1Q 20\nRouter(config-subif)# ip address 10.0.20.1 255.255.255.0\n\n✅ ทำไม A ถูก: subinterface 1 ตัวต่อ 1 VLAN ทำให้เราเตอร์มี IP อยู่ในทุก VLAN ผ่านสายกายภาพเส้นเดียว จึงเป็น gateway ให้ทุก VLAN และ routing ข้ามกันได้\n\n❌ ทำไมข้ออื่นผิด:\nB. อินเทอร์เฟซกายภาพตัวเดียวที่ไม่มี subinterface ถอดแท็ก 802.1Q ไม่เป็น จึงรองรับได้แค่ VLAN เดียว\nC. access link ส่งได้ VLAN เดียว และไม่ได้เพิ่มความสามารถ Layer 3 ให้เลย\nD. trunk ระหว่างสวิตช์ทำให้ VLAN "ขยาย" ข้ามสวิตช์ได้ แต่ยังคงไม่มีใคร routing ให้ — ปัญหาเดิมยังอยู่\n\n📗 จำไว้สอบ: ข้าม VLAN = ต้องมี Layer 3 เสมอ • ทางเลือกคือ router-on-a-stick (subinterface) หรือ SVI บน multilayer switch',
  },
  {
    id: 224,
    kind: 'single',
    prompt: 'Which statement about LLDP is true?',
    options: [
      { key: 'A', text: 'It is a Cisco proprietary protocol.' },
      { key: 'B', text: 'It is configured in global configuration mode.' },
      { key: 'C', text: 'The LLDP update frequency is a fixed value.' },
      { key: 'D', text: 'It runs over the transport layer.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ข้อเท็จจริงหลักของ LLDP (IEEE 802.1AB)\n• เป็นมาตรฐานเปิด ใช้ข้ามยี่ห้อได้ ตรงข้ามกับ CDP\n• ทำงานที่ชั้น Data Link (Layer 2) ไม่ได้พึ่ง TCP/UDP\n• ปิดอยู่โดยดีฟอลต์บน Cisco IOS ต้องเปิดเองที่ global config ด้วย lldp run ⭐\n• ค่าเวลาปรับได้ทั้งหมด: lldp timer (ดีฟอลต์ 30 วิ), lldp holdtime (120 วิ), lldp reinit (2 วิ)\n\n✅ ทำไม B ถูก: การเปิด LLDP ทั้งเครื่องทำที่ global configuration mode — Device(config)# lldp run จากนั้นถ้าต้องการปิดเป็นรายพอร์ตจึงค่อยใช้ no lldp transmit / no lldp receive ที่ระดับอินเทอร์เฟซ\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับกับ CDP — LLDP เป็นมาตรฐาน IEEE จึงใช้กับอุปกรณ์หลายยี่ห้อได้ นี่คือเหตุผลที่โจทย์ "เครือข่ายหลายยี่ห้อ" มักตอบ lldp run\nC. ไม่คงที่ ปรับได้ด้วย lldp timer <วินาที>\nD. LLDP ไม่วิ่งบน TCP/UDP เลย มันเป็นเฟรม Ethernet ที่ส่งไปยัง multicast MAC 0180.C200.000E โดยตรง\n\n📗 จำไว้สอบ: LLDP เปิดเองที่ global (lldp run) • CDP เปิดมาให้แล้ว • ทั้งคู่ = Layer 2',
  },
  {
    id: 225,
    kind: 'single',
    prompt: 'What is a function of Wireless LAN Controller?',
    options: [
      {
        key: 'A',
        text: 'register with a single access point that controls traffic between wired and wireless endpoints',
      },
      { key: 'B', text: 'use SSIDs to distinguish between wireless clients' },
      { key: 'C', text: 'send LWAPP packets to access points' },
      { key: 'D', text: 'monitor activity on wireless and wired LANs' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — WLC คุย AP ด้วยอะไร\nในสถาปัตยกรรมรวมศูนย์ (split-MAC) ตัว lightweight AP จะสร้างอุโมงค์ไปยัง WLC ด้วยโปรโตคอล LWAPP (รุ่นเดิม) หรือ CAPWAP (รุ่นปัจจุบัน) โดยมี 2 อุโมงค์\n• Control tunnel (CAPWAP UDP 5246) — คอนฟิก, RRM, การจัดการ AP\n• Data tunnel (CAPWAP UDP 5247) — ทราฟฟิกของไคลเอนต์ที่ถูกห่อส่งกลับมาที่ WLC\n\nงานที่ WLC รับไปทำแทน AP: การเชื่อมต่อ (association), การยืนยันตัวตน, การโรมมิ่ง, การจัดการ RF, นโยบายความปลอดภัย\n\n✅ ทำไม C ถูก: การส่งแพ็กเก็ต LWAPP/CAPWAP ไปยัง AP คือกลไกหลักที่ WLC ใช้ควบคุมและตั้งค่า AP ทุกตัวจากศูนย์กลาง — ถ้าไม่มีอุโมงค์นี้ AP จะทำงานไม่ได้เลย\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับทิศทาง — AP ต่างหากที่ register (join) เข้ากับ WLC และ WLC หนึ่งตัวรองรับ AP ได้จำนวนมาก ไม่ใช่ตัวเดียว\nB. SSID ใช้แยก "เครือข่ายไร้สาย" ออกจากกัน ไม่ได้ใช้แยกไคลเอนต์ — ไคลเอนต์ถูกแยกด้วย MAC address\nD. การเฝ้าดูทราฟฟิกเป็นงานของ IDS/IPS หรือระบบ NMS ไม่ใช่หน้าที่หลักของ WLC และ WLC ไม่ได้เฝ้าดูฝั่ง LAN แบบมีสาย\n\n📗 จำไว้สอบ: AP join → WLC • CAPWAP control = UDP 5246, data = UDP 5247 • LWAPP คือรุ่นก่อนหน้าของ CAPWAP',
  },
  {
    id: 226,
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
      '📘 แนวคิด — แยกบทบาทของผลิตภัณฑ์ความปลอดภัย Cisco\n• WSA (Web Security Appliance) — พร็อกซีสำหรับทราฟฟิกเว็บ ทำ URL filtering, สแกนมัลแวร์, และ proxy caching เก็บเนื้อหาที่ถูกเรียกบ่อยไว้ในเครื่อง ทำให้เว็บเร็วขึ้นและประหยัดแบนด์วิดท์ ⭐\n• ESA (Email Security Appliance) — อีเมล (สแปม/ฟิชชิ่ง)\n• ASA (Adaptive Security Appliance) — ไฟร์วอลล์แบบ stateful + VPN\n• Firepower (FTD) — NGFW/NGIPS ตรวจจับภัยคุกคามเชิงลึก\n• FireSIGHT / FMC — คอนโซลบริหารจัดการ Firepower\n\n✅ ทำไม A ถูก: มีเพียง WSA เท่านั้นที่ทำหน้าที่พร็อกซีเว็บพร้อมแคช ซึ่งเป็นคำสำคัญตรงตัวในโจทย์ ("proxy caching" เพื่อ "improve web traffic performance")\n\n❌ ทำไมข้ออื่นผิด:\nB. Firepower เน้นตรวจจับ/ป้องกันการบุกรุก ไม่ได้แคชเนื้อหาเว็บ\nC. ASA เป็นไฟร์วอลล์กรองทราฟฟิกตามสถานะการเชื่อมต่อ ไม่มีฟังก์ชันแคช\nD. FireSIGHT เป็นแค่ระบบจัดการและรายงาน ไม่ได้อยู่บนเส้นทางข้อมูลเพื่อแคช\n\n📗 จำไว้สอบ: WSA = เว็บ/พร็อกซี/แคช • ESA = อีเมล • ASA = ไฟร์วอลล์ • FMC = คอนโซลจัดการ',
  },
  {
    id: 227,
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
      '📘 แนวคิด — ลำดับการเลือก root port (ทำตามลำดับ หยุดทันทีที่ตัดสินได้)\n1️⃣ Root path cost สะสมไปถึง root bridge ต่ำสุด ⭐ ตัวแรกเสมอ\n2️⃣ Bridge ID ของเพื่อนบ้านที่ส่ง BPDU มา (sender BID) ต่ำสุด\n3️⃣ Port ID ของเพื่อนบ้าน (sender Port ID = port priority + port number) ต่ำสุด\n4️⃣ Port ID ของตัวเอง (local Port ID) ต่ำสุด\n\nตาราง STP cost (IEEE ปรับปรุงแล้ว)\n10 Mbps  = 100\n100 Mbps = 19\n1 Gbps   = 4\n10 Gbps  = 2\n\n✅ ทำไม B ถูก: STP มองหาเส้นทางที่ "ถูกที่สุด" ไปยัง root bridge ก่อนเป็นอันดับแรก โดยรวม cost ของทุกลิงก์ขาออกที่ต้องผ่าน เกณฑ์อื่นจะถูกหยิบมาใช้ต่อเมื่อ cost เท่ากันเท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nC. sender BID เป็นเกณฑ์ที่ 2 ใช้ตอนมีสองเส้นทาง cost เท่ากันแต่มาจากคนละสวิตช์\nD. sender Port ID เป็นเกณฑ์ที่ 3 ใช้ตอนต่อกับสวิตช์ตัวเดียวกันด้วยสองสาย\nA. local Port ID เป็นเกณฑ์สุดท้าย ใช้น้อยมาก (เช่นต่อผ่านฮับ)\n\n📗 จำไว้สอบ: จำลำดับ "Cost → BID → Port ID เพื่อนบ้าน → Port ID ตัวเอง" • ค่าต่ำชนะทุกข้อ',
  },
  {
    id: 228,
    kind: 'single',
    prompt: 'Which statement about VLAN configuration is true?',
    options: [
      { key: 'A', text: 'The switch must be in VTP server or transparent mode before you can configure a VLAN' },
      { key: 'B', text: 'The switch must be in config-vlan mode before you configure an extended VLAN' },
      { key: 'C', text: 'Dynamic inter-VLAN routing is supported on VLAN2 through VLAN 4064' },
      { key: 'D', text: 'A switch in VTP transparent mode save the VLAN databases to the running configuration only' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โหมด VTP กับสิทธิ์ในการสร้าง VLAN\nโหมด        สร้าง/แก้ VLAN ได้ไหม   ส่งต่อ advertisement   เก็บ VLAN ที่ไหน\nServer      ได้ ⭐                    ส่ง + รับ              vlan.dat + ซิงก์ทั้งโดเมน\nClient      ไม่ได้                    ส่งต่อ + รับ           vlan.dat (รับมาอย่างเดียว)\nTransparent ได้ (เฉพาะของตัวเอง) ⭐   ส่งต่อเฉย ๆ ไม่ประมวลผล vlan.dat + running-config\n\n✅ ทำไม A ถูก: สวิตช์ที่อยู่โหมด VTP client จะปฏิเสธคำสั่งสร้าง VLAN ("VTP VLAN configuration not allowed when device is in CLIENT mode") จึงต้องอยู่ในโหมด server หรือ transparent ก่อนเท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nB. สลับลำดับกัน — ต้องเข้า config-vlan mode ด้วยคำสั่ง vlan <id> จาก global config เสียก่อน ไม่ใช่ต้องอยู่ในโหมดนั้นอยู่แล้ว และ extended VLAN (1006-4094) ยังต้องใช้ VTP transparent หรือ VTPv3 ด้วย\nC. VLAN ใช้งานได้สูงสุดถึง 4094 (12 บิต ลบ 0 กับ 4095 ที่สงวน) ตัวเลข 4064 ไม่มีความหมายใด ๆ\nD. VTP transparent บันทึกฐานข้อมูล VLAN ลง "ทั้ง" running-config และไฟล์ vlan.dat ในแฟลช ไม่ใช่แค่ running-config\n\n📗 จำไว้สอบ: client สร้าง VLAN ไม่ได้ • extended VLAN ต้อง transparent (หรือ VTPv3) • VLAN ปกติเก็บใน flash:vlan.dat ไม่ใช่ startup-config',
  },
  {
    id: 229,
    kind: 'multi',
    image: v4q229,
    prompt: 'Refer to the exhibit. What two conclusions should be made about this configuration? (Choose two.)',
    options: [
      { key: 'A', text: 'The root port is FastEthernet 2/1' },
      { key: 'B', text: 'The designated port is FastEthernet 2/1' },
      { key: 'C', text: 'The spanning-tree mode is PVST+' },
      { key: 'D', text: 'This is a root bridge' },
      { key: 'E', text: 'The spanning-tree mode is Rapid PVST+' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — อ่านผลลัพธ์ show spanning-tree ให้เป็น\nบล็อก "Root ID" บอกข้อมูลของ root bridge ที่สวิตช์นี้รู้จัก\n• ถ้าสวิตช์นี้ "เป็น" root เอง จะมีบรรทัด "This bridge is the root" และ Cost = 0 โดยไม่มีบรรทัด Port\n• ถ้ามีบรรทัด Cost และ Port แสดงว่า root อยู่ที่อื่น และ Port ที่ระบุคือ root port\n\n🔍 อ่าน exhibit\nSpanning tree enabled protocol rstp   ← โปรโตคอลคือ RSTP\nRoot ID Priority 32798\n        Cost 19                        ← มี cost แปลว่าต้องเดินทางไปหา root\n        Port 1 (FastEthernet 2/1)      ← พอร์ตที่ใช้เดินทางไปหา root = root port\n\n✅ ทำไม A + E ถูก:\nA. บรรทัด "Port 1 (FastEthernet 2/1)" ในบล็อก Root ID คือการประกาศว่า Fa2/1 เป็น root port ของสวิตช์นี้ ✔\nE. คำว่า "protocol rstp" ในคำสั่ง show spanning-tree ของ Cisco หมายถึงโหมด Rapid PVST+ (คำสั่ง spanning-tree mode rapid-pvst) เพราะ Cisco รัน RSTP แยกต่อ VLAN ✔ สังเกตว่าหัวข้อบอก VLAN0030 = ต่อ VLAN จริง\n\n❌ ทำไมข้ออื่นผิด:\nB. Fa2/1 เป็น root port ไม่ใช่ designated port — พอร์ตหนึ่งเป็นได้บทบาทเดียว\nC. ถ้าเป็น PVST+ (STP 802.1D ดั้งเดิม) บรรทัดจะเขียนว่า "protocol ieee"\nD. ถ้าเป็น root bridge จะต้องมีข้อความ "This bridge is the root" และ cost = 0 ซึ่ง exhibit ไม่มี\n\n📗 จำไว้สอบ: protocol ieee = PVST+ • protocol rstp = Rapid PVST+ • มีบรรทัด Port ใต้ Root ID = ตัวเองไม่ใช่ root และนั่นคือ root port',
  },
  {
    id: 230,
    kind: 'single',
    prompt:
      'A network engineer must create a diagram of a multivendor network. Which command must be configured on the Cisco devices so that the topology of the network is allowed to be mapped?',
    options: [
      { key: 'A', text: 'Device(config)#lldp run' },
      { key: 'B', text: 'Device(config)#cdp run' },
      { key: 'C', text: 'Device(config-if)#cdp enable' },
      { key: 'D', text: 'Device(config)#flow-sampler-map topology' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — คำสำคัญคือ "multivendor" (หลายยี่ห้อ)\nเมื่อในเครือข่ายมีอุปกรณ์ทั้ง Cisco และยี่ห้ออื่น โปรโตคอลค้นหาเพื่อนบ้านที่ใช้ได้มีทางเดียวคือ LLDP เพราะเป็นมาตรฐาน IEEE 802.1AB ที่ทุกยี่ห้อรองรับ\n\nเปรียบเทียบ\n          CDP                LLDP\nเจ้าของ   Cisco เท่านั้น      IEEE 802.1AB (เปิด)\nดีฟอลต์   เปิดอยู่แล้ว        ปิด ต้องสั่ง lldp run\nส่งทุก    60 วินาที          30 วินาที\nholdtime  180 วินาที         120 วินาที\n\n✅ ทำไม A ถูก: lldp run เปิด LLDP บนอุปกรณ์ Cisco ทำให้มันแลกเปลี่ยนข้อมูลเพื่อนบ้านกับสวิตช์/เราเตอร์ยี่ห้ออื่นได้ เครื่องมือทำแผนผังจึงมองเห็นโทโพโลยีครบทั้งเครือข่าย\n\n❌ ทำไมข้ออื่นผิด:\nB, C. CDP คุยได้เฉพาะกับอุปกรณ์ Cisco ด้วยกัน อุปกรณ์ยี่ห้ออื่นจะหายไปจากแผนผัง (และ cdp run ก็เปิดอยู่แล้วโดยดีฟอลต์)\nD. flow-sampler-map เกี่ยวกับ NetFlow sampling ใช้เก็บสถิติทราฟฟิก ไม่ได้ใช้ค้นหาเพื่อนบ้าน\n\n📗 จำไว้สอบ: เห็นคำว่า multivendor / third-party / non-Cisco → ตอบ LLDP ทันที',
  },
  {
    id: 231,
    kind: 'single',
    prompt: 'How do AAA operations compare regarding user identification, user services, and access control?',
    options: [
      { key: 'A', text: 'Authorization provides access control, and authentication tracks user services' },
      { key: 'B', text: 'Authentication identifies users, and accounting tracks user services' },
      { key: 'C', text: 'Accounting tracks user services, and authentication provides access control' },
      { key: 'D', text: 'Authorization identifies users, and authentication provides access control' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สาม A ของ AAA แยกหน้าที่กันชัดเจน\n• Authentication (การพิสูจน์ตัวตน) = "คุณคือใคร" ตรวจ username/password, ใบรับรอง, โทเคน ⭐ identifies users\n• Authorization (การให้สิทธิ์) = "คุณทำอะไรได้บ้าง" กำหนด privilege level, คำสั่งที่รันได้, VLAN/ACL ที่ได้รับ ⭐ access control\n• Accounting (การบันทึกบัญชีใช้งาน) = "คุณทำอะไรไปบ้าง นานเท่าไร" บันทึกเวลาเริ่ม/จบ, คำสั่งที่ใช้, ปริมาณข้อมูล ⭐ tracks user services\n\n✅ ทำไม B ถูก: จับคู่ถูกทั้งสองท่อน — authentication ทำหน้าที่ระบุตัวผู้ใช้ และ accounting ทำหน้าที่ติดตามบริการที่ผู้ใช้ใช้ไป\n\n❌ ทำไมข้ออื่นผิด:\nA. ท่อนแรกถูก (authorization = access control) แต่ท่อนหลังผิด — การติดตามบริการเป็นงานของ accounting ไม่ใช่ authentication\nC. ท่อนแรกถูก แต่ท่อนหลังผิด — access control เป็นงานของ authorization\nD. สลับหน้าที่กันทั้งคู่ — authentication ต่างหากที่ระบุตัวตน และ authorization ต่างหากที่คุมสิทธิ์\n\n📗 จำไว้สอบ: Authentication = ใคร • Authorization = ทำอะไรได้ • Accounting = ทำอะไรไปแล้ว',
  },
  {
    id: 232,
    kind: 'single',
    prompt: 'What is the difference between RADIUS and TACACS+?',
    options: [
      {
        key: 'A',
        text: 'RADIUS logs all commands that are entered by the administrator, but TACACS+ logs only start, stop, and interim commands.',
      },
      { key: 'B', text: 'TACACS+ separates authentication and authorization, and RADIUS merges them.' },
      { key: 'C', text: 'TACACS+ encrypts only password information, and RADIUS encrypts the entire payload.' },
      {
        key: 'D',
        text: 'RADIUS is most appropriate for dial authentication, but TACACS+ can be used for multiple types of authentication.',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ตารางเปรียบเทียบที่ออกสอบทุกครั้ง\nหัวข้อ            RADIUS                    TACACS+\nเจ้าของ           มาตรฐานเปิด (RFC 2865)    Cisco proprietary\nชั้นขนส่ง         UDP 1812/1813 (เดิม 1645/1646)  TCP 49\nเข้ารหัส          เฉพาะฟิลด์รหัสผ่าน         ทั้ง payload ⭐\nแยก AAA           รวม authentication + authorization ⭐  แยกทั้งสามอิสระจากกัน ⭐\nเหมาะกับ          การเข้าถึงเครือข่าย/802.1X   การจัดการอุปกรณ์ (command authorization)\n\n✅ ทำไม B ถูก: TACACS+ ออกแบบให้ authentication, authorization และ accounting เป็นกระบวนการอิสระ จึงสั่งงานแบบละเอียดได้ เช่นให้ผู้ใช้คนหนึ่งรันได้เฉพาะคำสั่ง show ส่วน RADIUS รวม authentication กับ authorization ไว้ในข้อความ Access-Accept ข้อความเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. สลับกัน — TACACS+ ต่างหากที่บันทึกทุกคำสั่งที่แอดมินพิมพ์ (command accounting) ส่วน RADIUS บันทึกแค่ start/stop/interim ของเซสชัน\nC. สลับกันเช่นกัน — RADIUS เข้ารหัสเฉพาะรหัสผ่าน ส่วน TACACS+ เข้ารหัสทั้ง payload\nD. ตกยุคและไม่ใช่ความแตกต่างที่แท้จริง ทั้งสองใช้ยืนยันตัวตนได้หลายรูปแบบ\n\n📗 จำไว้สอบ: TACACS+ = TCP 49 + เข้ารหัสทั้งหมด + แยก AAA (เหมาะกับคุมอุปกรณ์) • RADIUS = UDP + เข้ารหัสแค่รหัสผ่าน + รวม A กับ A (เหมาะกับ 802.1X)',
  },
  {
    id: 233,
    kind: 'single',
    prompt: 'What is a difference between local AP mode and FlexConnect AP mode?',
    options: [
      { key: 'A', text: 'Local AP mode creates two CAPWAP tunnels per AP to the WLC' },
      { key: 'B', text: 'Local AP mode causes the AP to behave as if it were an autonomous AP' },
      { key: 'C', text: 'FlexConnect AP mode fails to function if the AP loses connectivity with the WLC' },
      {
        key: 'D',
        text: 'FlexConnect AP mode bridges the traffic from the AP to the WLC when local switching is configured',
      },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Local mode กับ FlexConnect ต่างกันตรง "ข้อมูลไคลเอนต์วิ่งไปไหน"\n\nLocal mode (โหมดดีฟอลต์)\n• สร้างอุโมงค์ CAPWAP 2 เส้นไปยัง WLC เสมอ ⭐\n  – Control: UDP 5246\n  – Data: UDP 5247\n• ทราฟฟิกของไคลเอนต์ทุกไบต์ถูกห่อส่งกลับไปที่ WLC ก่อน (centrally switched)\n• ถ้าขาดการติดต่อกับ WLC → AP หยุดให้บริการ\n\nFlexConnect mode (ใช้ที่สาขาไกล)\n• เลือกได้ว่า SSID ไหน local switching (ปล่อยลงสวิตช์ที่สาขาเลย) SSID ไหน central switching\n• ถ้าขาดการติดต่อกับ WLC ยังให้บริการไคลเอนต์ต่อได้ในโหมด standalone\n\n✅ ทำไม A ถูก: AP โหมด local สร้างอุโมงค์ CAPWAP สองเส้น (control + data) ไปยัง WLC เสมอ ซึ่งเป็นความแตกต่างเชิงโครงสร้างจาก FlexConnect ที่ข้อมูลอาจไม่วิ่งผ่านอุโมงค์เลย\n\n❌ ทำไมข้ออื่นผิด:\nB. AP แบบ autonomous ทำงานเองไม่ต้องมี WLC — ตรงข้ามกับ local mode ที่พึ่ง WLC ทุกอย่าง\nC. กลับด้าน — FlexConnect ต่างหากที่ยังทำงานต่อได้เมื่อขาด WLC ส่วน local mode ต่างหากที่หยุดทำงาน\nD. ขัดแย้งในตัวเอง — เมื่อตั้ง local switching ทราฟฟิกจะถูกปล่อยลงเครือข่ายท้องถิ่นที่สาขา ไม่ได้ส่งกลับไป WLC\n\n📗 จำไว้สอบ: Local = 2 อุโมงค์ CAPWAP ทุกอย่างวิ่งกลับ WLC • FlexConnect = สาขาไกล สลับข้อมูลได้เอง อยู่รอดเมื่อ WAN ล่ม',
  },
  {
    id: 234,
    kind: 'multi',
    prompt: 'The SW1 interface g0/1 is in the down/down state. What are two reasons for the interface condition? (Choose two.)',
    options: [
      { key: 'A', text: 'There is a protocol mismatch' },
      { key: 'B', text: 'There is a duplex mismatch' },
      { key: 'C', text: 'The interface is shut down' },
      { key: 'D', text: 'The interface is error-disabled' },
      { key: 'E', text: 'There is a speed mismatch' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — อ่านสถานะสองช่องของอินเทอร์เฟซ (line status / protocol status)\nสถานะ                  ความหมาย\nup / up                ปกติดี\nup / down              ชั้นกายภาพดี แต่ Layer 2 มีปัญหา (encapsulation ไม่ตรง, keepalive หาย)\ndown / down            ชั้นกายภาพมีปัญหา — สายหลุด ปลายทางดับ ความเร็วไม่ตรงกัน หรือถูก err-disable ⭐\nadministratively down / down  ถูกสั่ง shutdown ไว้ (ช่องแรกเขียนว่า administratively down ไม่ใช่ down เฉย ๆ)\n\n✅ ทำไม D + E ถูก:\nD. พอร์ตที่โดน err-disable (จาก port-security violation, BPDU guard, link flap, UDLD, loopback detection) ถูกระบบสั่งปิด สถานะที่รายงานคือ down/down จนกว่าจะ shutdown แล้ว no shutdown หรือรอ errdisable recovery ✔\nE. เมื่อ "ฮาร์ดโค้ด" ความเร็วคนละค่ากันทั้งสองฝั่ง (เช่นฝั่งหนึ่ง speed 100 อีกฝั่ง speed 1000) การเชื่อมสัญญาณที่ชั้นกายภาพล้มเหลว ลิงก์จึงไม่ขึ้นเลย → down/down ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. protocol mismatch (encapsulation ต่างกันบนลิงก์ WAN เช่น HDLC กับ PPP) ทำให้ได้ up/down เพราะชั้นกายภาพยังดี ติดที่ Layer 2\nB. duplex mismatch ลิงก์ยังขึ้น up/up ตามปกติ อาการที่เห็นคือ late collision, FCS error และ throughput ตก ไม่ใช่พอร์ตดาวน์\nC. พอร์ตที่ถูกสั่ง shutdown จะรายงานเป็น "administratively down / down" ซึ่งเป็นคนละสถานะกับ down/down ที่โจทย์ระบุ ⭐ จุดที่ต้องแยกให้ออก\n\n📗 จำไว้สอบ: down/down = ปัญหา Layer 1 (สายเสีย, ปลายทางดับ, speed ไม่ตรง, err-disable) • administratively down = ถูก shutdown • up/down = ปัญหา Layer 2 • up/up แต่ช้า = duplex mismatch',
  },
  {
    id: 235,
    kind: 'single',
    prompt: 'How will Link Aggregation be implemented on a Cisco Wireless LAN Controller?',
    options: [
      { key: 'A', text: 'The EtherChannel must be configured in "mode active".' },
      { key: 'B', text: 'When enabled, the WLC bandwidth drops to 500 Mbps.' },
      { key: 'C', text: 'To pass client traffic, two or more ports must be configured.' },
      { key: 'D', text: 'One functional physical port is needed to pass client traffic.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — LAG บน WLC ไม่เหมือน EtherChannel บนสวิตช์\nข้อกำหนดของ Link Aggregation (LAG) บน Cisco WLC\n• WLC รวมพอร์ตทั้งหมดเป็นมัดเดียวแบบ static (unconditional) เท่านั้น ไม่รองรับ LACP/PAgP\n  → ฝั่งสวิตช์จึงต้องตั้ง channel-group ... mode on ⭐\n• ต้องรีบูต WLC หลังเปิดหรือปิด LAG\n• เมื่อเปิด LAG แล้ว มีพอร์ตกายภาพทำงานอยู่เพียง "หนึ่ง" พอร์ตก็เพียงพอให้ทราฟฟิกไคลเอนต์วิ่งได้ ⭐\n• ทุก dynamic interface จะแมปกับ LAG อัตโนมัติ ไม่ต้องผูกพอร์ตทีละตัว\n\n✅ ทำไม D ถูก: จุดประสงค์ของ LAG คือความทนทาน — ถ้าพอร์ตในมัดล่มไปเหลือแค่พอร์ตเดียว ทราฟฟิกของไคลเอนต์ก็ยังผ่านได้ตามปกติ ไม่ต้องมีพอร์ตครบทุกเส้น\n\n❌ ทำไมข้ออื่นผิด:\nA. WLC ไม่รองรับการเจรจา LACP จึงใช้ mode active ไม่ได้ ต้องเป็น mode on\nB. LAG ไม่ได้ลดแบนด์วิดท์ ตรงกันข้าม มันรวมแบนด์วิดท์ของพอร์ตเข้าด้วยกัน\nC. ขัดกับข้อ D — ต้องการพอร์ตที่ใช้งานได้เพียงพอร์ตเดียวก็พอ\n\n📗 จำไว้สอบ: LAG บน WLC = static เท่านั้น (mode on) + ต้องรีบูต + 1 พอร์ตที่รอดก็ยังส่งทราฟฟิกได้',
  },
  {
    id: 236,
    kind: 'multi',
    prompt: 'Which two conditions must be met before SSH operates normally on a Cisco IOS switch? (Choose two.)',
    options: [
      { key: 'A', text: 'IP routing must be enabled on the switch.' },
      { key: 'B', text: 'A console password must be configured on the switch.' },
      { key: 'C', text: 'Telnet must be disabled on the switch.' },
      { key: 'D', text: 'The switch must be running a k9 (crypto) IOS image.' },
      { key: 'E', text: 'The ip domain-name command must be configured on the switch.' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — ขั้นตอนเปิด SSH ให้ใช้งานได้จริง\n1️⃣ ต้องรัน IOS image ที่มีชุดเข้ารหัส (ชื่อไฟล์มี k9) เพราะ SSH ต้องใช้ RSA/AES ⭐\n2️⃣ ตั้งชื่อโฮสต์ที่ไม่ใช่ค่าเริ่มต้น: hostname SW1\n3️⃣ ตั้งชื่อโดเมน: ip domain-name example.com ⭐ (จำเป็นเพราะ FQDN ถูกใช้เป็นชื่อของคู่กุญแจ RSA)\n4️⃣ สร้างกุญแจ: crypto key generate rsa modulus 1024 ขึ้นไป\n5️⃣ สร้างบัญชีผู้ใช้: username admin secret <รหัส>\n6️⃣ ที่ line vty: transport input ssh + login local\n\n✅ ทำไม D + E ถูก: ถ้าไม่มี image แบบ k9 คำสั่ง crypto จะไม่มีให้ใช้เลย และถ้าไม่ตั้ง ip domain-name คำสั่ง crypto key generate rsa จะฟ้อง "% Please define a domain-name first." ทั้งสองจึงเป็นเงื่อนไขบังคับ\n\n❌ ทำไมข้ออื่นผิด:\nA. SSH ไม่ต้องการ IP routing — สวิตช์ Layer 2 ต้องการเพียง SVI ที่มี IP และ default gateway ก็พอ\nB. รหัสผ่านคอนโซลเป็นคนละช่องทางกับ VTY ไม่เกี่ยวกับ SSH\nC. ปิด Telnet เป็นเรื่องที่ควรทำเพื่อความปลอดภัย (transport input ssh) แต่ SSH ทำงานได้แม้ยังเปิด Telnet ค้างไว้\n\n📗 จำไว้สอบ: SSH ต้องมี hostname + domain-name + RSA key + user local + transport input ssh บน image k9',
  },
  {
    id: 237,
    kind: 'single',
    image: v4q237,
    prompt: 'Refer to the exhibit. Which password must an engineer use to enter the enable mode?',
    options: [
      { key: 'A', text: 'adminadmin123' },
      { key: 'B', text: 'cisco123' },
      { key: 'C', text: 'default' },
      { key: 'D', text: 'testing1234' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — enable secret ชนะ enable password เสมอ\nเมื่อคอนฟิกทั้งสองคำสั่งพร้อมกัน IOS จะใช้ enable secret เพียงอย่างเดียว และ enable password จะถูกละเลยทั้งหมด เพราะ\n• enable password เก็บแบบ plaintext (หรือเข้ารหัสอ่อนแบบ type 7)\n• enable secret เก็บเป็นแฮช MD5/SHA (type 5/8/9) ปลอดภัยกว่ามาก\n\n🔍 อ่าน exhibit ทีละบรรทัด\nusername ciscoadmin password adminadmin123  ← รหัสสำหรับ "ล็อกอิน" ไม่ใช่เข้า enable\nusername ciscoadmin privilege 15            ← ให้สิทธิ์ระดับ 15 กับบัญชีนี้\nenable password cisco123                    ← ถูกทับ ไม่มีผล\nenable secret testing1234                   ← ตัวที่ใช้จริง ⭐\n\n✅ ทำไม D ถูก: เมื่อพิมพ์คำสั่ง enable ที่ user EXEC prompt ระบบจะถามหารหัสจาก enable secret ก่อน จึงต้องพิมพ์ testing1234\n\n❌ ทำไมข้ออื่นผิด:\nA. adminadmin123 เป็นรหัสของบัญชี ciscoadmin ใช้ตอนล็อกอินผ่าน vty (aaa authentication login default local) ไม่ใช่ตอนเข้า enable\nB. cisco123 ถูก enable secret ทับไปแล้ว\nC. คำว่า default ในบรรทัด login authentication default เป็นเพียง "ชื่อของ method list" ไม่ใช่รหัสผ่าน\n\n📗 จำไว้สอบ: มีทั้ง enable secret และ enable password → secret ชนะเสมอ • privilege 15 ในบัญชีทำให้ล็อกอินแล้วเข้า privileged mode ทันทีโดยไม่ต้องพิมพ์ enable',
  },
  {
    id: 238,
    kind: 'single',
    prompt: 'Which state does the switch port move to when PortFast is enabled?',
    options: [
      { key: 'A', text: 'blocking' },
      { key: 'B', text: 'listening' },
      { key: 'C', text: 'learning' },
      { key: 'D', text: 'forwarding' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — PortFast ข้ามขั้นตอนของ STP\nสถานะปกติของ STP 802.1D เมื่อพอร์ตเพิ่งขึ้น\nblocking (20 วิ) → listening (15 วิ) → learning (15 วิ) → forwarding\nรวมประมาณ 30-50 วินาที กว่า PC จะส่งข้อมูลได้ ทำให้ DHCP ของเครื่องไคลเอนต์หมดเวลาไปก่อน\n\nเมื่อเปิด PortFast\n• พอร์ตกระโดดเข้า forwarding ทันทีที่ลิงก์ขึ้น ⭐ ข้าม listening และ learning\n• พอร์ตไม่สร้าง TCN (Topology Change Notification) เวลาลิงก์ขึ้น/ลง จึงไม่ไปล้างตาราง MAC ของทั้งเครือข่าย\n\n⚠️ ใช้กับพอร์ต access ที่ต่อ "อุปกรณ์ปลายทาง" เท่านั้น (PC, เซิร์ฟเวอร์, เครื่องพิมพ์) ห้ามใช้กับพอร์ตที่ต่อสวิตช์ เพราะจะเกิดลูปได้ จึงควรจับคู่กับ BPDU Guard เสมอ\n\n✅ ทำไม D ถูก: จุดประสงค์ของ PortFast คือให้พอร์ตพร้อมรับส่งข้อมูลทันที จึงเข้าสถานะ forwarding โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA, B, C. blocking, listening และ learning คือสถานะที่ PortFast "ข้าม" ไม่ใช่สถานะปลายทาง\n\n📗 จำไว้สอบ: PortFast → forwarding ทันที + ไม่สร้าง TCN • คู่กับ BPDU Guard เสมอ • ใน RSTP เทียบเท่ากับ edge port',
  },
  {
    id: 239,
    kind: 'single',
    prompt:
      'Which protocol prompts the Wireless LAN Controller to generate its own local web administration SSL certificate for GUI access?',
    options: [
      { key: 'A', text: 'RADIUS' },
      { key: 'B', text: 'HTTPS' },
      { key: 'C', text: 'TACACS+' },
      { key: 'D', text: 'HTTP' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ทำไม WLC ต้องมีใบรับรอง SSL\nGUI ของ WLC เข้าถึงได้ 2 ทาง\n• HTTP (พอร์ต 80) — ข้อความล้วน ไม่ต้องใช้ใบรับรอง\n• HTTPS (พอร์ต 443) — ต้องมีใบรับรองเพื่อทำ TLS handshake ⭐\n\nเมื่อผู้ดูแลเปิดใช้งาน HTTPS สำหรับหน้าเว็บจัดการ (Management > HTTP-HTTPS > HTTPS Access = Enabled) ตัว WLC จะสร้าง self-signed SSL certificate ของตัวเองขึ้นมาโดยอัตโนมัติ เพื่อใช้เข้ารหัสเซสชัน (นี่คือเหตุผลที่เบราว์เซอร์ขึ้นเตือน "certificate not trusted" ในการเข้าครั้งแรก)\n\n✅ ทำไม B ถูก: HTTPS คือโปรโตคอลที่ต้องพึ่งใบรับรอง จึงเป็นตัวกระตุ้นให้ WLC สร้าง local web administration SSL certificate ขึ้นมาเอง\n\n❌ ทำไมข้ออื่นผิด:\nA, C. RADIUS และ TACACS+ เป็นโปรโตคอล AAA ใช้ยืนยันตัวตนผู้ใช้กับเซิร์ฟเวอร์ภายนอก ไม่เกี่ยวกับใบรับรองของหน้าเว็บ\nD. HTTP ส่งข้อมูลแบบไม่เข้ารหัส จึงไม่ต้องใช้ใบรับรองใด ๆ\n\n📗 จำไว้สอบ: HTTPS = HTTP + TLS → ต้องมีใบรับรอง → WLC สร้าง self-signed ให้อัตโนมัติ (เปลี่ยนเป็นใบรับรองจาก CA จริงได้ภายหลัง)',
  },
  {
    id: 240,
    kind: 'single',
    prompt:
      'An engineer must configure interswitch VLAN communication between a Cisco switch and a third-party switch. Which action should be taken?',
    options: [
      { key: 'A', text: 'configure DSCP' },
      { key: 'B', text: 'configure IEEE 802.1q' },
      { key: 'C', text: 'configure ISL' },
      { key: 'D', text: 'configure IEEE 802.1p' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โปรโตคอลติดแท็ก VLAN บน trunk\n• IEEE 802.1Q — มาตรฐานเปิด แทรกแท็ก 4 ไบต์เข้าไปในเฟรมเดิม รองรับทุกยี่ห้อ มี native VLAN ที่ไม่ติดแท็ก ⭐\n• ISL (Inter-Switch Link) — ของ Cisco ล้วน ห่อเฟรมทั้งอันด้วยเฮดเดอร์ 26 ไบต์ + FCS 4 ไบต์ ปัจจุบันเลิกใช้แล้วในสวิตช์รุ่นใหม่\n\n🔧 คอนฟิกฝั่ง Cisco\nSwitch(config-if)# switchport trunk encapsulation dot1q\nSwitch(config-if)# switchport mode trunk\n(สวิตช์รุ่นใหม่รองรับเฉพาะ dot1q จึงไม่ต้องพิมพ์บรรทัดแรก)\n\n✅ ทำไม B ถูก: เมื่อปลายทางเป็นสวิตช์ยี่ห้ออื่น ต้องใช้วิธีติดแท็กที่เป็นมาตรฐานสากล นั่นคือ 802.1Q เท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nA. DSCP เป็นฟิลด์ 6 บิตในเฮดเดอร์ IP ใช้จัดลำดับความสำคัญ QoS ชั้น 3 ไม่ได้ทำ VLAN tagging\nC. ISL เป็นกรรมสิทธิ์ของ Cisco สวิตช์ยี่ห้ออื่นถอดแท็กไม่ออก — เป็นตัวลวงหลักของข้อนี้\nD. 802.1p คือ 3 บิต CoS ที่ฝังอยู่ในแท็ก 802.1Q ใช้จัดลำดับความสำคัญชั้น 2 ไม่ใช่ตัวที่ทำ trunk\n\n📗 จำไว้สอบ: ข้ามยี่ห้อ = 802.1Q เท่านั้น • ISL = Cisco เท่านั้นและเลิกใช้แล้ว • 802.1p/CoS อยู่ "ภายใน" แท็ก 802.1Q',
  },
  {
    id: 241,
    kind: 'single',
    prompt:
      'An engineer requires a switch interface to actively attempt to establish a trunk link with a neighbor switch. What command must be configured?',
    options: [
      { key: 'A', text: 'switchport mode trunk' },
      { key: 'B', text: 'switchport mode dynamic desirable' },
      { key: 'C', text: 'switchport nonegotiate' },
      { key: 'D', text: 'switchport mode dynamic auto' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ตาราง DTP ที่ต้องท่องให้ได้\n                 trunk    dynamic desirable   dynamic auto   access\ntrunk            trunk    trunk               trunk          ผิดพลาด\ndesirable        trunk    trunk               trunk          access\nauto             trunk    trunk               access ⭐      access\naccess           ผิดพลาด  access              access         access\n\nคำสำคัญ\n• dynamic desirable = "เชิงรุก" ส่งเฟรม DTP ออกไปชวนเป็น trunk ⭐\n• dynamic auto = "เชิงรับ" รอให้อีกฝั่งชวนเท่านั้น\n• mode trunk = เป็น trunk แน่นอน และยังส่ง DTP ออกไปด้วย\n• nonegotiate = ปิด DTP ไม่ส่งเฟรมเจรจาเลย\n\n✅ ทำไม B ถูก: โจทย์เน้นคำว่า "actively attempt to establish a trunk" คือฝ่ายเราต้องเป็นผู้ริเริ่มเจรจา ซึ่งตรงกับ dynamic desirable พอดี — มันจะจับคู่เป็น trunk ได้กับทั้ง trunk, desirable และ auto\n\n❌ ทำไมข้ออื่นผิด:\nA. mode trunk บังคับเป็น trunk ทันทีโดยไม่ต้อง "พยายามเจรจา" — และจะพังถ้าอีกฝั่งเป็น access\nC. nonegotiate ปิดการเจรจาทั้งหมด ตรงข้ามกับโจทย์\nD. dynamic auto เป็นเชิงรับ ถ้าเจอ auto ด้วยกันจะกลายเป็น access ทั้งคู่\n\n📗 จำไว้สอบ: desirable = เชิงรุก • auto = เชิงรับ • auto+auto = access (ไม่เกิด trunk)',
  },
  {
    id: 242,
    kind: 'single',
    image: v4q242,
    prompt:
      'Refer to the exhibit. After the election process, what is the root bridge in the HQ LAN?\n\nSwitch 1: 0C:E0:38:81:32:58\nSwitch 2: 0C:0E:15:22:1A:61\nSwitch 3: 0C:0E:15:1D:3C:9A\nSwitch 4: 0C:E0:19:A1:4D:16',
    options: [
      { key: 'A', text: 'Switch 1' },
      { key: 'B', text: 'Switch 2' },
      { key: 'C', text: 'Switch 3' },
      { key: 'D', text: 'Switch 4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เลือก root bridge จาก Bridge ID ที่ต่ำที่สุด\nBridge ID = Bridge Priority (4 บิตบน + 12 บิต VLAN) + MAC address\nโจทย์ให้มาแต่ MAC ไม่ได้ให้ priority → แปลว่าทุกตัว priority เท่ากัน (32768 + VLAN) ตัวตัดสินจึงเหลือ MAC address ที่ต่ำที่สุด\n\n🔍 เทียบ MAC ทีละไบต์จากซ้ายไปขวา หยุดทันทีที่ต่างกัน\nไบต์ที่ 1: ทุกตัวเป็น 0C เท่ากัน → ดูต่อ\nไบต์ที่ 2:\n  SW1 = E0\n  SW2 = 0E ⭐ ต่ำกว่า\n  SW3 = 0E ⭐ ต่ำกว่า\n  SW4 = E0\n  → คัด SW1 และ SW4 ทิ้ง (0E = 14 น้อยกว่า E0 = 224)\nไบต์ที่ 3: SW2 = 15, SW3 = 15 เท่ากัน → ดูต่อ\nไบต์ที่ 4:\n  SW2 = 22 (ฐานสิบ 34)\n  SW3 = 1D (ฐานสิบ 29) ⭐ ต่ำกว่า\n\n✅ ทำไม C ถูก: 0C:0E:15:1D:3C:9A ของ Switch 3 เป็น MAC ที่ต่ำที่สุด จึงชนะการเลือกตั้งและกลายเป็น root bridge\n\n❌ ทำไมข้ออื่นผิด:\nA, D. ไบต์ที่สองเป็น E0 ซึ่งสูงกว่า 0E ของ SW2/SW3 มาก ตกรอบแรก\nB. สู้ถึงไบต์ที่สี่แล้วแพ้ 22 > 1D\n\n📗 จำไว้สอบ: เทียบ MAC เป็นเลขฐานสิบหกทีละไบต์ อย่าอ่านรวมเป็นสตริง • priority ก่อน แล้วค่อย MAC • ค่าต่ำสุดชนะ',
  },
  {
    id: 243,
    kind: 'single',
    prompt:
      'An engineer must establish a trunk link between two switches. The neighboring switch is set to trunk or desirable mode. What action should be taken?',
    options: [
      { key: 'A', text: 'configure switchport nonegotiate' },
      { key: 'B', text: 'configure switchport mode dynamic desirable' },
      { key: 'C', text: 'configure switchport mode dynamic auto' },
      { key: 'D', text: 'configure switchport trunk dynamic desirable' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เมื่ออีกฝั่งเป็นเชิงรุกอยู่แล้ว ฝั่งเราเป็นเชิงรับก็พอ\nโจทย์บอกว่าเพื่อนบ้านตั้งเป็น trunk หรือ desirable ซึ่งทั้งสองโหมด "ส่ง DTP ออกมาชวน" อยู่แล้ว ฝ่ายเราจึงเพียงตอบรับก็ได้ trunk\n\nตรวจกับตาราง DTP\nauto + trunk     = trunk ✔\nauto + desirable = trunk ✔\nauto + auto      = access ✘ (แต่โจทย์ไม่ได้ให้กรณีนี้)\n\n✅ ทำไม C ถูก: switchport mode dynamic auto ทำให้พอร์ตรอฟังคำชวน เมื่ออีกฝั่งเป็น trunk หรือ desirable ลิงก์จะกลายเป็น trunk ครบทั้งสองสถานการณ์ที่โจทย์ระบุ\n\n❌ ทำไมข้ออื่นผิด:\nA. nonegotiate ปิด DTP → ถ้าพอร์ตยังเป็น dynamic อยู่ก็จะไม่มีวันขึ้นเป็น trunk (คำสั่งนี้ใช้ได้เฉพาะเมื่อพอร์ตถูกตั้งเป็น mode trunk หรือ mode access แบบตายตัวแล้ว)\nB. desirable ก็ได้ trunk เหมือนกัน แต่โจทย์เน้นสถานการณ์ที่อีกฝั่งเป็นเชิงรุกอยู่แล้ว คำตอบที่ตรงกับเจตนาของข้อสอบและประหยัดการส่ง DTP คือ auto\nD. ไม่มีคำสั่ง switchport trunk dynamic desirable อยู่จริงใน IOS — ไวยากรณ์ผิด\n\n📗 จำไว้สอบ: ต้องมีอย่างน้อยหนึ่งฝั่งเป็นเชิงรุก (trunk หรือ desirable) แล้วอีกฝั่งเป็น auto ก็เพียงพอ',
  },
  {
    id: 244,
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
      '📘 แนวคิด — ฟีเจอร์เสริมของ STP แต่ละตัวทำอะไร\n• PortFast — ข้าม listening และ learning ให้พอร์ตเข้า forwarding ทันที ใช้กับพอร์ตที่ต่ออุปกรณ์ปลายทาง ⭐\n• BPDU Guard — ถ้าพอร์ตที่เปิด PortFast ได้รับ BPDU ให้ err-disable ทันที (กัน rogue switch)\n• BPDU Filter — ไม่ส่งและไม่รับ BPDU บนพอร์ตนั้น (ใช้อย่างระวัง เสี่ยงลูป)\n• Root Guard — ถ้าได้รับ superior BPDU ให้พอร์ตเข้าสถานะ root-inconsistent (กันการเปลี่ยน root โดยไม่ตั้งใจ)\n• UplinkFast — สลับไปใช้ลิงก์สำรองอย่างรวดเร็วเมื่อ root port ล่ม (ที่ access layer)\n• BackboneFast — เร่งการฟื้นตัวเมื่อลิงก์ล่มแบบทางอ้อม (indirect failure) ตัดเวลา max age 20 วินาที\n\n✅ ทำไม B ถูก: PortFast คือฟีเจอร์เดียวที่ตรงกับคำอธิบาย "ข้าม learning และ listening แล้วเข้า forwarding ทันที" ประหยัดเวลาไป 30 วินาที ทำให้ PC ขอ DHCP ได้ทันเวลา\n\n❌ ทำไมข้ออื่นผิด:\nA. BPDU Filter ปิดการรับส่ง BPDU ไม่ได้ย่นเวลาการเข้าสถานะ forwarding\nC. BackboneFast เร่งการ converge หลังลิงก์ล่ม ไม่ได้ทำให้พอร์ตใหม่ forward ทันที\nD. BPDU Guard ทำหน้าที่ปิดพอร์ต ไม่ได้เร่งอะไรเลย\n\n📗 จำไว้สอบ: PortFast เร่ง / BPDU Guard ป้องกัน — ใช้คู่กันเสมอบนพอร์ต access',
  },
  {
    id: 245,
    kind: 'single',
    prompt: 'How does the dynamically-learned MAC address feature function?',
    options: [
      { key: 'A', text: 'The CAM table is empty until ingress traffic arrives at each port' },
      { key: 'B', text: 'Switches dynamically learn MAC addresses of each connecting CAM table.' },
      { key: 'C', text: 'The ports are restricted and learn up to a maximum of 10 dynamically-learned addresses' },
      { key: 'D', text: 'It requires a minimum number of secure MAC addresses to be filled dynamically' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — สวิตช์เรียนรู้ MAC จาก "ต้นทาง" ของเฟรมขาเข้าเท่านั้น\nกระบวนการทำงาน\n1. สวิตช์เพิ่งบูต → CAM table (MAC address table) ว่างเปล่า ⭐\n2. เฟรมแรกวิ่งเข้ามาที่พอร์ตใด สวิตช์อ่าน source MAC ของเฟรมนั้น แล้วบันทึกคู่ (MAC ↔ พอร์ต ↔ VLAN)\n3. เมื่อต้องส่งต่อ สวิตช์ค้น destination MAC ในตาราง\n   • เจอ → ส่งออกพอร์ตนั้นพอร์ตเดียว (forward/filter)\n   • ไม่เจอ → flood ออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตต้นทาง\n4. รายการที่ไม่มีทราฟฟิกจะหมดอายุใน 300 วินาที (5 นาที) แล้วถูกลบ\n\n✅ ทำไม A ถูก: การเรียนรู้แบบไดนามิกเป็นกระบวนการเชิงรับล้วน ๆ — สวิตช์ไม่ไปสำรวจอะไรเอง ตารางจึงว่างจนกว่าจะมีเฟรมวิ่งเข้ามาที่พอร์ต\n\n❌ ทำไมข้ออื่นผิด:\nB. ประโยคขัดกับความจริง — สวิตช์เรียนจาก "เฟรม" ไม่ได้เรียนจาก CAM table ของเพื่อนบ้าน (สวิตช์ไม่แลกเปลี่ยนตาราง MAC กัน)\nC. เพดาน 10 แอดเดรสเป็นเรื่องของ port-security ที่ต้องตั้งเอง ไม่ใช่พฤติกรรมดีฟอลต์ (ดีฟอลต์ของ port-security คือ 1)\nD. ไม่มีข้อกำหนด "จำนวนขั้นต่ำ" ใด ๆ ทั้งสิ้น\n\n📗 จำไว้สอบ: เรียนจาก source MAC • ส่งต่อโดยดู destination MAC • ไม่รู้จัก = flood • อายุ 300 วินาที',
  },
  {
    id: 246,
    kind: 'single',
    prompt: 'When using Rapid PVST+, which command guarantees the switch is always the root bridge for VLAN 200?',
    options: [
      { key: 'A', text: 'spanning-tree vlan 200 priority 614440' },
      { key: 'B', text: 'spanning-tree vlan 200 priority 0' },
      { key: 'C', text: 'spanning-tree vlan 200 root primary' },
      { key: 'D', text: 'spanning-tree vlan 200 priority 38813258' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — Bridge Priority ต้องเป็นพหุคูณของ 4096\nค่าที่ใส่ได้: 0, 4096, 8192, 12288, ..., 61440 (ดีฟอลต์ 32768)\nยิ่งต่ำยิ่งชนะ และ 0 คือค่าต่ำสุดที่เป็นไปได้ จึงไม่มีสวิตช์ตัวไหนตั้งค่าให้ต่ำกว่านี้ได้อีก ⭐\n\n✅ ทำไม B ถูก: priority 0 การันตีชัยชนะถาวร เพราะไม่มีใครตั้งต่ำกว่าได้ (ถ้ามีตัวอื่นตั้ง 0 เหมือนกัน ค่อยไปตัดสินกันที่ MAC address ซึ่งเป็นกรณีสุดขั้ว)\n\n❌ ทำไมข้ออื่นผิด:\nA. 614440 ไม่ใช่พหุคูณของ 4096 และเกินเพดาน 61440 → IOS ปฏิเสธคำสั่ง (น่าจะพิมพ์ 61440 เกินมาหนึ่งตัว ซึ่งเป็นค่าที่ "สูงที่สุด" คือแพ้ทุกตัวอยู่ดี)\nC. root primary คำนวณ priority ให้อัตโนมัติ = 24576 หรือถ้า root ปัจจุบันต่ำกว่านั้นก็ตั้งให้ต่ำกว่า root เดิม 4096 — มันเป็นการคำนวณ "ครั้งเดียว ณ ตอนพิมพ์คำสั่ง" ถ้าภายหลังมีสวิตช์ใหม่ตั้ง priority ต่ำกว่าเข้ามา เราจะเสียตำแหน่ง root ทันที จึงไม่ใช่การ "guarantee" ⭐ นี่คือกับดักหลักของข้อนี้\nD. 38813258 เกินเพดานและไม่ใช่พหุคูณของ 4096 → คำสั่งไม่ผ่าน\n\n📗 จำไว้สอบ: อยากการันตี root ตลอดกาล → priority 0 • root primary ให้แค่ 24576 และไม่ป้องกันอนาคต',
  },
  {
    id: 247,
    kind: 'single',
    image: v4q247,
    prompt:
      'Refer to the exhibit. Which command must be executed for Gi1/1 on SW1 to passively become a trunk port if Gi1/1 on SW2 is configured in desirable or trunk mode?',
    options: [
      { key: 'A', text: 'switchport mode dynamic auto' },
      { key: 'B', text: 'switchport mode dot1-tunnel' },
      { key: 'C', text: 'switchport mode dynamic desirable' },
      { key: 'D', text: 'switchport mode trunk' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — คำสำคัญคือ "passively" (เชิงรับ)\nโหมด DTP แบ่งเป็นสองฝ่าย\n• เชิงรุก (ส่ง DTP ชวนก่อน): switchport mode trunk, switchport mode dynamic desirable\n• เชิงรับ (รอให้ชวน): switchport mode dynamic auto ⭐\n\n🔍 อ่านโจทย์: SW2 Gi1/1 เป็น desirable หรือ trunk = ฝ่ายรุกอยู่แล้ว จึงเหลือให้ SW1 ทำหน้าที่ฝ่ายรับ\n\nตรวจผลลัพธ์ทั้งสองกรณี\nSW1 auto + SW2 desirable = trunk ✔\nSW1 auto + SW2 trunk     = trunk ✔\nได้ trunk ทั้งคู่ตามที่โจทย์ต้องการ และ exhibit ก็ระบุว่าลิงก์นี้ต้องขน VLAN 2-20\n\n✅ ทำไม A ถูก: dynamic auto คือโหมดเชิงรับตัวเดียวใน DTP มันจะไม่ส่งเฟรมชวนก่อน แต่จะตอบรับเมื่อได้ยินคำชวนจาก SW2\n\n❌ ทำไมข้ออื่นผิด:\nB. dot1q-tunnel (Q-in-Q) ใช้ห่อ VLAN ของลูกค้าไว้ในเครือข่ายผู้ให้บริการ ไม่ใช่ trunk ปกติ และไวยากรณ์ก็สะกดผิด\nC. desirable เป็นเชิงรุก ขัดกับคำว่า passively ในโจทย์\nD. mode trunk บังคับเป็น trunk ทันทีและยังส่ง DTP ด้วย ก็เป็นเชิงรุกเช่นกัน\n\n📗 จำไว้สอบ: เห็นคำว่า passively → dynamic auto • เห็นคำว่า actively → dynamic desirable',
  },
  {
    id: 248,
    kind: 'single',
    image: v4q248a,
    image2: v4q248b,
    prompt:
      'Refer to the exhibit. The entire contents of the MAC address table are shown. Sales-4 sends a data frame to Sales-1. What does the switch do as it receives the frame from Sales-4?',
    options: [
      { key: 'A', text: 'Map the Layer 2 MAC address to the Layer 3 IP address and forward the frame.' },
      { key: 'B', text: 'Insert the source MAC address and port into the forwarding table and forward the frame to Sales-1.' },
      { key: 'C', text: 'Perform a lookup in the MAC address table and discard the frame due to a missing entry.' },
      { key: 'D', text: 'Flood the frame out of all ports except on the port where Sales-1 is connected.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สวิตช์ทำสองอย่างเสมอเมื่อรับเฟรม: เรียนรู้ก่อน แล้วค่อยส่งต่อ\n1️⃣ Learning — อ่าน source MAC ของเฟรม แล้วบันทึกคู่กับพอร์ตที่รับเข้ามา\n2️⃣ Forwarding — ค้น destination MAC ในตาราง เจอ → ส่งออกพอร์ตเดียว, ไม่เจอ → flood\n\n🔍 อ่าน exhibit ทั้งสองรูป\nโทโพโลยี: Sales-1=Gi1/0/1, Sales-2=Gi1/0/2, Sales-3=Gi1/0/3, Sales-4=Gi1/0/4 ทั้งหมดอยู่ VLAN 10\nMAC table มีแค่ 3 แถว: Gi1/0/1, Gi1/0/2, Gi1/0/3\n→ Sales-4 (Gi1/0/4) ยังไม่มีในตาราง แต่ Sales-1 (Gi1/0/1) มีอยู่แล้ว ⭐\n\n🔗 ไล่ขั้นตอน\n• Sales-4 ส่งเฟรม → สวิตช์เรียนรู้ source MAC ของ Sales-4 ผูกกับ Gi1/0/4 เพิ่มเข้าตาราง\n• ค้น destination = MAC ของ Sales-1 → พบที่ Gi1/0/1\n• ส่งเฟรมออกทาง Gi1/0/1 พอร์ตเดียว ไม่ flood\n\n✅ ทำไม B ถูก: อธิบายครบทั้งสองขั้น — เพิ่ม MAC ต้นทางของ Sales-4 ลงตาราง แล้วส่งต่อไปยัง Sales-1 ที่รู้จักอยู่แล้ว\n\n❌ ทำไมข้ออื่นผิด:\nA. การแมป MAC กับ IP เป็นหน้าที่ของ ARP บนโฮสต์/เราเตอร์ สวิตช์ L2 ไม่แตะเฮดเดอร์ IP\nC. เฟรมไม่ถูกทิ้ง — MAC ปลายทาง (Sales-1) อยู่ในตารางเรียบร้อย\nD. flood จะเกิดก็ต่อเมื่อ "ปลายทาง" ไม่รู้จัก แต่ที่ไม่รู้จักคือ "ต้นทาง" ซึ่งไม่ทำให้เกิด flood\n\n📗 จำไว้สอบ: ต้นทางไม่รู้จัก → เรียนรู้ • ปลายทางไม่รู้จัก → flood • สองเรื่องนี้แยกกันคนละส่วน',
  },
  {
    id: 249,
    kind: 'single',
    image: v4q249,
    prompt:
      'Refer to the exhibit. An engineer must configure GigabitEthernet1/1 to accommodate voice and data traffic. Which configuration accomplishes this task?',
    options: [
      {
        key: 'A',
        text: 'interface gigabitethernet1/1 / switchport mode access / switchport access vlan 300 / switchport voice vlan 400',
      },
      {
        key: 'B',
        text: 'interface gigabitethernet1/1 / switchport mode trunk / switchport trunk vlan 300 / switchport trunk vlan 400',
      },
      {
        key: 'C',
        text: 'interface gigabitethernet1/1 / switchport mode access / switchport voice vlan 300 / switchport access vlan 400',
      },
      {
        key: 'D',
        text: 'interface gigabitethernet1/1 / switchport mode trunk / switchport trunk vlan 300 / switchport voice vlan 400',
      },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — พอร์ตสำหรับโทรศัพท์ + PC ต้องเป็น access ไม่ใช่ trunk\nรูปแบบมาตรฐาน\ninterface <พอร์ต>\n switchport mode access\n switchport access vlan <VLAN ข้อมูล>   ← ทราฟฟิก PC มาแบบไม่ติดแท็ก\n switchport voice vlan <VLAN เสียง>     ← สวิตช์ใช้ CDP บอกโทรศัพท์ให้ติดแท็ก VLAN นี้\n\nสิ่งที่เกิดขึ้นจริง: พอร์ตกลายเป็น "multi-VLAN access port" (บางทีเรียก mini-trunk) รับได้ 2 VLAN โดยไม่ต้องประกาศเป็น trunk\n\n🔍 อ่าน exhibit: VLAN 300 = Data, VLAN 400 = Voice บนสวิตช์ SW10 พอร์ต Gi1/1\n\n✅ ทำไม A ถูก: จับคู่ถูกทั้งสอง — access vlan 300 ให้ข้อมูลจาก PC และ voice vlan 400 ให้เสียงจากโทรศัพท์ พร้อมกับตั้ง mode access ตามหลักปฏิบัติ\n\n❌ ทำไมข้ออื่นผิด:\nB. ไม่มีคำสั่ง switchport trunk vlan <id> อยู่จริง (ที่ถูกคือ switchport trunk allowed vlan) และการทำ trunk ไปหาโทรศัพท์ไม่ใช่แนวทางที่ Cisco แนะนำ\nC. สลับ VLAN กัน — เสียงไปอยู่ 300 ข้อมูลไปอยู่ 400 ซึ่งกลับด้านกับ exhibit\nD. ไวยากรณ์ผิดและใช้โหมด trunk ซึ่งไม่จำเป็น\n\n📗 จำไว้สอบ: โทรศัพท์ + PC = mode access + access vlan (data) + voice vlan (voice) — ไม่ใช่ trunk',
  },
  {
    id: 250,
    kind: 'single',
    prompt:
      'An engineer needs to add an old switch back into a network. To prevent the switch from corrupting the VLAN database, which action must be taken?',
    options: [
      { key: 'A', text: 'Add the switch in the VTP domain with a lower revision number.' },
      { key: 'B', text: 'Add the switch in the VTP domain with a higher revision number.' },
      { key: 'C', text: 'Add the switch with DTP set to dynamic desirable.' },
      { key: 'D', text: 'Add the switch with DTP set to desirable.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — กับดัก VTP revision number ที่ทำ VLAN หายทั้งเครือข่าย\nกฎเหล็กของ VTP: สวิตช์ตัวใดก็ตามในโดเมนที่มี "configuration revision number สูงกว่า" จะเป็นตัวที่ฐานข้อมูล VLAN ของมันถูกนำไปเขียนทับทุกตัวในโดเมน — ไม่สนใจว่ามันเป็น server หรือ client ⭐\n\n☠️ สถานการณ์อันตราย: เอาสวิตช์เก่าที่เคยผ่านการสร้าง/ลบ VLAN มามาก (revision สูง) มาเสียบเข้าโดเมนเดิม → VLAN ทั้งหมดในเครือข่ายถูกแทนที่ด้วยของเก่า พอร์ตที่อยู่ VLAN ที่หายไปจะกลายเป็น inactive และเครือข่ายล่มทั้งระบบ\n\n🔧 วิธีรีเซ็ต revision ให้เป็น 0 ก่อนเสียบ (ทำอย่างใดอย่างหนึ่ง)\n1. เปลี่ยนเป็น VTP transparent แล้วเปลี่ยนกลับเป็น client/server\n   Switch(config)# vtp mode transparent\n   Switch(config)# vtp mode client\n2. เปลี่ยนชื่อโดเมนไปเป็นชื่ออื่นแล้วเปลี่ยนกลับ\n3. ลบ flash:vlan.dat แล้วรีโหลด\nยืนยันด้วย show vtp status → ต้องเห็น Configuration Revision : 0\n\n✅ ทำไม A ถูก: การทำให้สวิตช์เก่ามี revision ต่ำกว่าโดเมนปัจจุบัน ทำให้มันเป็นฝ่าย "รับ" ข้อมูล VLAN ที่ถูกต้องเข้าไป แทนที่จะไปเขียนทับของคนอื่น\n\n❌ ทำไมข้ออื่นผิด:\nB. ตรงข้ามเลย — revision สูงกว่าคือสาเหตุของหายนะที่โจทย์ต้องการป้องกัน\nC, D. DTP ควบคุมการเจรจา trunk ไม่มีผลใด ๆ ต่อฐานข้อมูล VLAN\n\n📗 จำไว้สอบ: ก่อนเสียบสวิตช์เก่าทุกครั้ง ต้อง show vtp status แล้วเช็ก Configuration Revision ให้เป็น 0',
  },
  {
    id: 251,
    kind: 'single',
    prompt:
      'Which technology prevents client devices from arbitrarily connecting to the network without state remediation?',
    options: [
      { key: 'A', text: '802.11n' },
      { key: 'B', text: '802.1x' },
      { key: 'C', text: 'MAC Authentication Bypass' },
      { key: 'D', text: 'IP Source Guard' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — 802.1X คือระบบควบคุมการเข้าถึงพอร์ต (Port-Based Network Access Control)\nองค์ประกอบสามส่วน\n• Supplicant — ซอฟต์แวร์บนเครื่องไคลเอนต์ที่ส่งข้อมูลยืนยันตัวตน\n• Authenticator — สวิตช์หรือ AP ที่กั้นพอร์ตไว้ ปล่อยผ่านเฉพาะ EAPoL จนกว่าจะยืนยันตัวตนสำเร็จ\n• Authentication Server — RADIUS (เช่น Cisco ISE) ที่ตัดสินอนุญาต/ปฏิเสธ\n\nคำว่า "state remediation" ในโจทย์หมายถึงการตรวจสุขภาพเครื่อง (posture assessment) เช่นแอนตี้ไวรัสอัปเดตหรือยัง แพตช์ครบไหม ถ้าไม่ผ่านจะถูกส่งเข้า VLAN กักกันให้แก้ไขก่อน ซึ่งเป็นงานที่ต่อยอดจากกรอบการทำงานของ 802.1X\n\n✅ ทำไม B ถูก: 802.1X บล็อกทราฟฟิกทุกอย่างบนพอร์ตจนกว่าเครื่องจะยืนยันตัวตนและผ่านการประเมินสถานะ ทำให้อุปกรณ์แปลกปลอมเสียบสายแล้วใช้เครือข่ายทันทีไม่ได้\n\n❌ ทำไมข้ออื่นผิด:\nA. 802.11n เป็นมาตรฐาน Wi-Fi เรื่องความเร็ว/MIMO ไม่ใช่ระบบความปลอดภัย\nC. MAB เป็น "ทางเลี่ยง" สำหรับอุปกรณ์ที่ไม่มี supplicant (เครื่องพิมพ์, กล้อง) โดยยืนยันจาก MAC เท่านั้น จึงไม่มีการตรวจสถานะเครื่องและปลอม MAC ได้ง่าย\nD. IP Source Guard กันการปลอม IP address บนพอร์ต ไม่ได้ทำหน้าที่ยืนยันตัวตนผู้ใช้\n\n📗 จำไว้สอบ: 802.1X = ต้องยืนยันตัวตนก่อนจึงได้ใช้พอร์ต • คู่กับ RADIUS/ISE • MAB คือแผนสำรองสำหรับอุปกรณ์ที่ทำ 802.1X ไม่ได้',
  },
  {
    id: 252,
    kind: 'single',
    prompt: 'Which protocol does an access point use to draw power from a connected switch?',
    options: [
      { key: 'A', text: 'Internet Group Management Protocol' },
      { key: 'B', text: 'Cisco Discovery Protocol' },
      { key: 'C', text: 'Adaptive Wireless Path Protocol' },
      { key: 'D', text: 'Neighbor Discovery Protocol' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — PoE เจรจากำลังไฟฟ้าได้อย่างไร\nการจ่ายไฟผ่านสาย LAN มีสองขั้น\n1️⃣ ตรวจจับและจัดคลาสด้วยฮาร์ดแวร์ตามมาตรฐาน 802.3af/at — สวิตช์วัดความต้านทานเพื่อรู้ว่าอุปกรณ์ต้องการไฟคลาสไหน (จ่ายแบบหยาบ ๆ)\n2️⃣ เจรจาละเอียดด้วยโปรโตคอล — เพื่อขอไฟเพิ่มหรือคืนไฟที่ไม่ใช้\n   • CDP power negotiation (ของ Cisco) ⭐ AP บอกสวิตช์ว่า "ผมต้องการ 25.5 W นะ"\n   • LLDP-MED (มาตรฐานเปิด) ทำหน้าที่เดียวกันสำหรับอุปกรณ์ต่างยี่ห้อ\n\n✅ ทำไม B ถูก: ในสภาพแวดล้อม Cisco ล้วน AP ใช้ TLV ด้านพลังงานของ CDP เพื่อร้องขอกำลังไฟที่ต้องการจากสวิตช์ ทำให้สวิตช์จัดสรรไฟได้พอดีและไม่จองงบไฟเกินจำเป็น (ตรวจดูได้ด้วย show power inline detail)\n\n❌ ทำไมข้ออื่นผิด:\nA. IGMP ใช้จัดการสมาชิกกลุ่ม multicast ไม่เกี่ยวกับไฟฟ้า\nC. AWPP (Adaptive Wireless Path Protocol) ใช้หาเส้นทางในเครือข่าย mesh ของ AP ไม่เกี่ยวกับ PoE\nD. NDP เป็นโปรโตคอลของ IPv6 ที่ใช้แทน ARP ไม่เกี่ยวกับพลังงาน\n\n📗 จำไว้สอบ: PoE ขั้นแรกใช้ฮาร์ดแวร์ (802.3af/at) ขั้นต่อมาใช้ CDP (Cisco) หรือ LLDP-MED (มาตรฐาน) เจรจากำลังไฟ',
  },
  {
    id: 253,
    kind: 'single',
    prompt:
      'An administrator must secure the WLC from receiving spoofed association requests. Which steps must be taken to configure the WLC to restrict the requests and force the user to wait 10 ms to retry an association request?',
    options: [
      { key: 'A', text: 'Enable MAC filtering and set the SA Query timeout to 10.' },
      { key: 'B', text: 'Enable 802.1x Layer 2 security and set the Comeback timer to 10.' },
      { key: 'C', text: 'Enable Security Association Teardown Protection and set the SA Query timeout to 10.' },
      { key: 'D', text: 'Enable the Protected Management Frame service and set the Comeback timer to 10.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — PMF (802.11w) ปกป้องเฟรมจัดการของ Wi-Fi\nเฟรมประเภท management ของ 802.11 (association, deauthentication, disassociation) เดิมไม่มีการเข้ารหัสหรือเซ็นรับรอง ผู้โจมตีจึงปลอมเฟรมเหล่านี้เพื่อเตะผู้ใช้ออกจากระบบ (deauth attack) หรือยิง association ปลอมถล่ม WLC ได้\n\n802.11w — Protected Management Frame (PMF) แก้ปัญหานี้ด้วยตัวจับเวลาสองตัวใน WLC\n• Comeback timer — บอกไคลเอนต์ว่า "ต้องรอกี่มิลลิวินาทีจึงจะลอง associate ใหม่ได้" ⭐ ตรงกับ 10 ms ในโจทย์\n• SA Query timeout — เวลารอคำตอบจากการตรวจสอบ Security Association ก่อนตัดสินว่าไคลเอนต์เดิมยังอยู่หรือไม่\n\n✅ ทำไม D ถูก: โจทย์ระบุสองอย่างพร้อมกัน — ป้องกัน association request ปลอม (= เปิด PMF) และบังคับให้รอ 10 ms ก่อนลองใหม่ (= Comeback timer) ตรงกับตัวเลือกนี้ทั้งคู่\n\n❌ ทำไมข้ออื่นผิด:\nA. MAC filtering กรองรายชื่อ MAC ที่อนุญาต แต่ MAC ปลอมได้ง่ายมาก และไม่มีเรื่องเวลารอ\nB. 802.1X จัดการการยืนยันตัวตนของผู้ใช้ ไม่ได้ปกป้องเฟรม management และ Comeback timer เป็นพารามิเตอร์ของ PMF ไม่ใช่ของ 802.1X\nC. SA Query timeout เป็นพารามิเตอร์ของ PMF ก็จริง แต่ทำหน้าที่รอคำตอบการตรวจสอบ ไม่ใช่ตัวบังคับเวลารอก่อนลองใหม่\n\n📗 จำไว้สอบ: 802.11w = PMF • Comeback timer = รอกี่ ms ก่อนลอง associate ใหม่ • SA Query = ตรวจว่าเซสชันเดิมยังมีชีวิตอยู่ไหม',
  },
  {
    id: 254,
    kind: 'single',
    image: v4q254,
    prompt:
      'Refer to the exhibit. Only four switches are participating in the VLAN spanning-tree process.\n\nBranch-1: priority 614440\nBranch-2: priority 39391170\nBranch-3: priority 0\nBranch-4: root primary\n\nWhich switch becomes the permanent root bridge for VLAN 5?',
    options: [
      { key: 'A', text: 'Branch-1' },
      { key: 'B', text: 'Branch-2' },
      { key: 'C', text: 'Branch-3' },
      { key: 'D', text: 'Branch-4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ค่าที่ใส่ในคำสั่ง priority ต้องถูกกติกาก่อน จึงจะมีผล\nกติกา: bridge priority ต้องเป็นพหุคูณของ 4096 และอยู่ในช่วง 0-61440 เท่านั้น\n\n🔍 ตรวจทีละตัว\n• Branch-1 priority 614440 → เกิน 61440 มหาศาลและไม่ใช่พหุคูณ 4096 → IOS ปฏิเสธ ใช้ค่าดีฟอลต์ 32768 ต่อไป\n• Branch-2 priority 39391170 → เกินขอบเขตเช่นกัน → ถูกปฏิเสธ ใช้ 32768\n• Branch-3 priority 0 → ถูกกติกา (0 คือพหุคูณของ 4096 และเป็นค่าต่ำสุด) ⭐\n• Branch-4 root primary → IOS คำนวณให้เอง ถ้า root ปัจจุบันมี priority สูงกว่า 24576 จะตั้งเป็น 24576; ถ้า root ปัจจุบันต่ำกว่านั้น จะพยายามตั้งให้ต่ำกว่า root เดิม 4096 — แต่เมื่อ root ปัจจุบันคือ 0 แล้ว มันลงต่ำกว่านั้นไม่ได้ จึงชนะไม่ได้\n\n✅ ทำไม C ถูก: Branch-3 มี priority 0 ซึ่งเป็นค่าต่ำสุดที่เป็นไปได้ในระบบ ไม่มีสวิตช์ตัวใดตั้งต่ำกว่านี้ได้อีก จึงเป็น root bridge แบบถาวรตามคำว่า "permanent" ในโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA, B. ค่าที่ใส่ผิดกติกา คำสั่งไม่ถูกยอมรับ ทั้งคู่จึงยังใช้ priority ดีฟอลต์ 32768\nD. root primary เป็นการคำนวณ ณ เวลาที่พิมพ์คำสั่ง ไม่สามารถเอาชนะ priority 0 ได้ และไม่ถือเป็นการล็อกตำแหน่งแบบถาวร\n\n📗 จำไว้สอบ: priority ที่ถูกกติกา = 0, 4096, 8192, ..., 61440 • ค่าที่ผิดกติกาจะถูกปฏิเสธและใช้ 32768 เหมือนเดิม',
  },
  {
    id: 255,
    kind: 'single',
    prompt:
      'An engineer must configure traffic for a VLAN that is untagged by the switch as it crosses a trunk link. Which command should be used?',
    options: [
      { key: 'A', text: 'switchport trunk encapsulation dot1q' },
      { key: 'B', text: 'switchport trunk allowed vlan 10' },
      { key: 'C', text: 'switchport mode trunk' },
      { key: 'D', text: 'switchport trunk native vlan 10' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — native VLAN คือ VLAN เดียวที่ไม่ติดแท็กบน trunk 802.1Q\nบน trunk ทุก VLAN จะถูกใส่แท็ก 4 ไบต์ ยกเว้น native VLAN ที่ถูกส่งออกไป "เปล่า ๆ" เพื่อความเข้ากันได้ย้อนหลังกับอุปกรณ์ที่อ่านแท็กไม่เป็น (เช่นฮับหรือ AP รุ่นเก่า)\n\nข้อควรรู้\n• ค่าดีฟอลต์ของ native VLAN คือ VLAN 1\n• ต้องตั้งให้ตรงกันทั้งสองฝั่งของ trunk ไม่งั้น CDP จะแจ้งเตือน native VLAN mismatch และทราฟฟิกจะรั่วข้าม VLAN\n• แนวปฏิบัติที่ดีคือย้าย native VLAN ไปเป็นหมายเลขที่ไม่ได้ใช้งานจริง เพื่อกัน VLAN hopping แบบ double tagging\n\n✅ ทำไม D ถูก: switchport trunk native vlan 10 สั่งให้ VLAN 10 เป็น VLAN ที่วิ่งข้าม trunk แบบไม่ติดแท็ก ตรงกับคำว่า "untagged by the switch as it crosses a trunk link" ในโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. encapsulation dot1q เลือกวิธีติดแท็ก (dot1q หรือ isl) ไม่ได้เลือกว่า VLAN ไหนจะไม่ติดแท็ก\nB. allowed vlan 10 คุมว่า VLAN ใดผ่าน trunk ได้บ้าง แต่ VLAN 10 ก็ยังถูกติดแท็กอยู่ดี\nC. mode trunk แค่เปลี่ยนพอร์ตให้เป็น trunk ยังไม่ได้กำหนดอะไรเกี่ยวกับ native VLAN\n\n📗 จำไว้สอบ: native VLAN = ไม่ติดแท็ก • เฟรมไม่ติดแท็กที่เข้ามา → จัดเข้า native VLAN • ต้องตรงกันทั้งสองฝั่ง',
  },
  {
    id: 256,
    kind: 'multi',
    prompt: 'What are two benefits of using the PortFast feature? (Choose two.)',
    options: [
      { key: 'A', text: 'Enabled interfaces are automatically placed in listening state.' },
      { key: 'B', text: 'Enabled interfaces wait 50 seconds before they move to the forwarding state.' },
      { key: 'C', text: 'Enabled interfaces never generate topology change notifications.' },
      { key: 'D', text: 'Enabled interfaces come up and move to the forwarding state immediately.' },
      {
        key: 'E',
        text: 'Enabled interfaces that move to the learning state generate switch topology change notifications.',
      },
    ],
    correct: ['C', 'D'],
    explanation:
      '📘 แนวคิด — PortFast ให้ประโยชน์สองอย่างที่แยกกันชัดเจน\n1️⃣ เร็ว — พอร์ตข้าม listening (15 วิ) และ learning (15 วิ) เข้า forwarding ทันทีที่ลิงก์ขึ้น ⭐ ประหยัดไป 30 วินาที ทำให้ DHCP ของ PC ไม่ timeout\n2️⃣ นิ่ง — พอร์ตไม่สร้าง TCN (Topology Change Notification) เมื่อลิงก์ขึ้นหรือลง ⭐\n   ทำไมสำคัญ: TCN ทุกครั้งจะทำให้สวิตช์ทั้งเครือข่ายลดอายุ MAC table จาก 300 วินาทีเหลือ 15 วินาที เกิดการ flood ทั่วทั้งวง ถ้าพนักงานเปิด-ปิดคอมพิวเตอร์ทุกเช้าโดยไม่มี PortFast เครือข่ายจะปั่นป่วนทุกวัน\n\n✅ ทำไม C + D ถูก: ทั้งสองข้อคือประโยชน์ที่แท้จริง — เข้า forwarding ทันที (D) และไม่ก่อ TCN (C)\n\n❌ ทำไมข้ออื่นผิด:\nA. listening คือสถานะที่ PortFast "ข้าม" ไม่ใช่สถานะที่พอร์ตจะเข้าไปอยู่\nB. 50 วินาทีคือเวลารวมของ STP แบบไม่มี PortFast (20 blocking + 15 listening + 15 learning) — ตรงข้ามกับสิ่งที่ PortFast ทำ\nE. กลับด้านกับข้อ C — PortFast ทำให้ "ไม่" เกิด TCN\n\n📗 จำไว้สอบ: PortFast = forward ทันที + ไม่มี TCN • ใช้กับพอร์ตปลายทางเท่านั้น + ควรเปิด BPDU Guard คู่กัน',
  },
  {
    id: 257,
    kind: 'single',
    prompt: 'What is the benefit of configuring PortFast on an interface?',
    options: [
      {
        key: 'A',
        text: 'The frames entering the interface are marked with the higher priority and then processed faster by a switch.',
      },
      { key: 'B', text: 'After the cable is connected, the interface is available faster to send and receive user data.' },
      { key: 'C', text: 'Real-time voice and video frames entering the interface are processed faster.' },
      {
        key: 'D',
        text: 'After the cable is connected, the interface uses the fastest speed setting available for that cable type.',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — PortFast แก้ปัญหาเรื่อง "เวลา" ไม่ใช่เรื่อง "ลำดับความสำคัญ"\nไม่มี PortFast (STP 802.1D)\nลิงก์ขึ้น → blocking 20 วิ → listening 15 วิ → learning 15 วิ → forwarding\nรวม 30-50 วินาที ระหว่างนี้ PC ส่งอะไรไม่ได้เลย → DHCP DISCOVER หมดเวลา → เครื่องได้ APIPA 169.254.x.x\n\nมี PortFast\nลิงก์ขึ้น → forwarding ทันที ⭐ → PC ได้ IP จาก DHCP ตามปกติ\n\n✅ ทำไม B ถูก: อธิบายประโยชน์ได้ตรงตัวที่สุด — เสียบสายแล้วพอร์ตพร้อมรับส่งข้อมูลผู้ใช้ได้เร็วขึ้นมาก โดยไม่ต้องรอ STP เดินผ่านสถานะกลาง\n\n❌ ทำไมข้ออื่นผิด:\nA. การใส่เครื่องหมายลำดับความสำคัญเป็นงานของ QoS (CoS/DSCP) PortFast ไม่ยุ่งกับ header ของเฟรมเลย\nC. เสียงและวิดีโอไม่ได้ถูกประมวลผลเร็วขึ้นจาก PortFast — จะทำแบบนั้นต้องใช้ QoS queueing\nD. การเลือกความเร็วเป็นหน้าที่ของ auto-negotiation ตามมาตรฐาน 802.3 คนละเรื่องกับ spanning-tree\n\n📗 จำไว้สอบ: PortFast = เร็วขึ้นเพราะข้ามสถานะ STP ไม่ใช่เพราะได้สิทธิ์พิเศษด้าน QoS',
  },
  {
    id: 258,
    kind: 'drag',
    image: v4q258,
    prompt: 'Drag and drop the functions of AAA supporting protocols from the left onto the protocols on the right.',
    categories: [
      {
        name: 'RADIUS',
        items: [
          'encrypts only the password when it sends an access request',
          'combines authentication and authorization',
          'uses UDP',
        ],
      },
      {
        name: 'TACACS+',
        items: [
          'encrypts the entire body of the access-request packet',
          'separates all three AAA operations',
          'uses TCP',
        ],
      },
    ],
    explanation:
      '📘 แนวคิด — ตารางเปรียบเทียบ RADIUS กับ TACACS+ ที่ต้องท่องให้ขึ้นใจ\n\nหัวข้อ          RADIUS                       TACACS+\nมาตรฐาน        เปิด (RFC 2865/2866)          Cisco proprietary\nชั้นขนส่ง      UDP 1812/1813                 TCP 49\nการเข้ารหัส    เฉพาะฟิลด์รหัสผ่านเท่านั้น     ทั้ง payload ของแพ็กเก็ต\nโครงสร้าง AAA  รวม authentication + authorization  แยกทั้งสามอิสระจากกัน\nใช้กับ         802.1X, การเข้าถึงเครือข่าย    การจัดการอุปกรณ์ (command authorization)\n\n💡 เทคนิคจำ\n• TACACS+ ขึ้นต้นด้วย T เหมือน TCP และ Total encryption ⭐\n• RADIUS ใช้ UDP และเข้ารหัสแค่รหัสผ่าน จึงเบากว่าแต่ปลอดภัยน้อยกว่า\n• เพราะ RADIUS รวม authentication กับ authorization ไว้ในข้อความ Access-Accept ข้อความเดียว มันจึงสั่งสิทธิ์ระดับคำสั่งทีละคำสั่งไม่ได้ — งานคุมคำสั่งบนเราเตอร์/สวิตช์จึงเป็นของ TACACS+\n\n📗 จำไว้สอบ: อยากคุมว่าใครพิมพ์คำสั่งอะไรได้บ้าง → TACACS+ • อยากยืนยันตัวตนผู้ใช้เข้าเครือข่าย/Wi-Fi → RADIUS',
  },
  {
    id: 259,
    kind: 'single',
    prompt: 'Why does a switch flood a frame to all ports?',
    options: [
      { key: 'A', text: 'The frame has zero destination MAC addresses.' },
      { key: 'B', text: 'The destination MAC address of the frame is unknown.' },
      { key: 'C', text: 'The source MAC address of the frame is unknown' },
      { key: 'D', text: 'The source and destination MAC addresses of the frame are the same.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สวิตช์ flood เมื่อไร\nสวิตช์จะส่งเฟรมออกทุกพอร์ตใน VLAN เดียวกัน (ยกเว้นพอร์ตที่รับเข้ามา) ใน 3 กรณี\n1️⃣ Unknown unicast — ค้น destination MAC ในตารางแล้วไม่เจอ ⭐\n2️⃣ Broadcast — ปลายทางเป็น ffff.ffff.ffff\n3️⃣ Multicast — ปลายทางเป็น multicast MAC (ถ้าไม่ได้เปิด IGMP snooping)\n\n🔗 ทำไมถึงต้อง flood: สวิตช์ไม่รู้ว่าปลายทางอยู่พอร์ตไหน จึงต้องส่งไปทุกทางเพื่อให้แน่ใจว่าถึงมือ เมื่อปลายทางตอบกลับ สวิตช์ก็จะเรียนรู้ตำแหน่งของมันและครั้งต่อไปจะส่งตรงพอร์ตเดียว\n\n✅ ทำไม B ถูก: การไม่รู้จัก "ปลายทาง" คือเงื่อนไขเดียวที่ทำให้เกิด unknown unicast flooding\n\n❌ ทำไมข้ออื่นผิด:\nA. เฟรมต้องมี destination MAC เสมอ 6 ไบต์ ไม่มีสิ่งที่เรียกว่า "zero destination MAC addresses"\nC. ต้นทางที่ไม่รู้จักทำให้สวิตช์ "เรียนรู้" เพิ่มลงตาราง ไม่ได้ทำให้ flood — นี่คือตัวลวงหลักของข้อนี้ ⭐\nD. ต้นทางกับปลายทางเหมือนกันเป็นเฟรมผิดปกติ สวิตช์จะทิ้ง ไม่ใช่ flood\n\n📗 จำไว้สอบ: ปลายทางไม่รู้จัก → flood • ต้นทางไม่รู้จัก → learn • สองเรื่องนี้อย่าสับสน',
  },
  {
    id: 260,
    kind: 'single',
    image: v4q260,
    prompt:
      'Refer to the exhibit. An engineer configures interface Gi1/0 on the company PE router to connect to an ISP. Neighbor discovery is disabled. Which action is necessary to complete the configuration if the ISP uses third-party network devices?',
    options: [
      { key: 'A', text: 'Disable autonegotiation.' },
      { key: 'B', text: 'Enable LLDP globally.' },
      { key: 'C', text: 'Enable LLDP-MED on the ISP device.' },
      { key: 'D', text: 'Disable Cisco Discovery Protocol on the interface.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — LLDP ต้องเปิดครบสองชั้น\nชั้นที่ 1 (global): Router(config)# lldp run — ถ้าไม่มีบรรทัดนี้ LLDP ไม่ทำงานเลย ⭐\nชั้นที่ 2 (interface): Router(config-if)# lldp transmit และ lldp receive — เปิด/ปิดรายพอร์ต\n\n🔍 อ่าน exhibit\ninterface Gi1/0\n description HQ_DC3992-38488\n duplex full\n speed 100\n negotiation auto\n lldp transmit    ← ชั้นอินเทอร์เฟซพร้อมแล้ว\n lldp receive     ← ชั้นอินเทอร์เฟซพร้อมแล้ว\nสังเกตว่า "ไม่มี" คำสั่ง lldp run ที่ระดับ global และโจทย์ก็ยืนยันว่า "Neighbor discovery is disabled"\n\n✅ ทำไม B ถูก: เมื่อฝั่ง ISP ใช้อุปกรณ์ยี่ห้ออื่น ต้องใช้ LLDP ซึ่งเป็นมาตรฐานเปิด และคำสั่งระดับอินเทอร์เฟซจะไม่มีผลจนกว่าจะเปิด lldp run ที่ระดับ global ก่อน\n\n❌ ทำไมข้ออื่นผิด:\nA. autonegotiation เกี่ยวกับความเร็ว/ดูเพล็กซ์ ไม่มีผลต่อการค้นหาเพื่อนบ้าน\nC. เราไม่มีสิทธิ์ไปคอนฟิกอุปกรณ์ของ ISP และ LLDP-MED เป็นส่วนขยายสำหรับอุปกรณ์ปลายทางอย่างโทรศัพท์ IP ไม่ใช่สำหรับลิงก์ระหว่างเราเตอร์\nD. การปิด CDP ไม่ได้ช่วยให้ LLDP ทำงาน (และ CDP ก็คุยกับอุปกรณ์ยี่ห้ออื่นไม่ได้อยู่แล้ว)\n\n📗 จำไว้สอบ: lldp run (global) ต้องมาก่อนเสมอ แล้ว lldp transmit/receive (interface) จึงจะมีผล',
  },
  {
    id: 261,
    kind: 'drag',
    image: v4q261,
    prompt:
      'Drag and drop the Rapid PVST+ forwarding state actions from the left to the right. Not all actions are used.',
    categories: [
      {
        name: 'พฤติกรรมของพอร์ตในสถานะ Forwarding (Rapid PVST+)',
        items: [
          'BPDUs received are forwarded to the system module',
          'Frames received from the attached segment are processed',
          'Switched frames received from other ports are advanced',
          'The port in the forwarding state responds to network management messages',
        ],
      },
      {
        name: 'ไม่ใช้ (ตัวลวง)',
        items: [
          'BPDUs received from the system module are processed and transmitted',
          'Frames received from the attached segment are discarded',
        ],
      },
    ],
    explanation:
      '📘 แนวคิด — พอร์ตในสถานะ forwarding ทำอะไรบ้าง (ตามเอกสาร Cisco)\nพอร์ตที่อยู่สถานะ forwarding จะ\n✔ ส่งต่อเฟรมที่รับมาจากเซกเมนต์ที่ต่ออยู่ → "Frames received from the attached segment are processed"\n✔ ส่งต่อเฟรมที่สวิตช์ส่งข้ามมาจากพอร์ตอื่น → "Switched frames received from other ports are advanced"\n✔ เรียนรู้ MAC address ลงตาราง\n✔ รับ BPDU แล้วส่งขึ้นไปให้ system module → "BPDUs received are forwarded to the system module"\n✔ ตอบข้อความจัดการเครือข่าย (SNMP ฯลฯ) → "The port in the forwarding state responds to network management messages"\n\n❌ ตัวลวงสองอันที่ไม่ใช้ และเหตุผล\n• "BPDUs received from the system module are processed and transmitted" — ประโยคที่มีคำว่า transmitted นี้เป็นคำอธิบายของสถานะ listening และ learning ในสถานะ forwarding เอกสารเขียนเพียงว่า "processes BPDUs received from the system module" ไม่มีคำว่า transmitted\n• "Frames received from the attached segment are discarded" — การทิ้งเฟรมเป็นพฤติกรรมของสถานะ blocking, listening และ disabled ซึ่งตรงข้ามกับ forwarding โดยสิ้นเชิง\n\n💡 เทียบสถานะให้เห็นภาพ\nBlocking/Discarding : ทิ้งข้อมูล ไม่เรียน MAC แต่ฟัง BPDU\nListening           : ทิ้งข้อมูล ไม่เรียน MAC ส่ง+รับ BPDU\nLearning            : ทิ้งข้อมูล เรียน MAC ส่ง+รับ BPDU\nForwarding          : ส่งข้อมูล เรียน MAC ประมวลผล BPDU\n\n📗 จำไว้สอบ: forwarding = ส่งข้อมูลได้ + เรียน MAC ได้ • ประโยคที่มีคำว่า discarded ไม่มีทางเป็นของ forwarding',
  },
  {
    id: 262,
    kind: 'single',
    prompt: 'Which access point mode relies on a centralized controller for management, roaming, and SSID configuration?',
    options: [
      { key: 'A', text: 'lightweight mode' },
      { key: 'B', text: 'autonomous mode' },
      { key: 'C', text: 'bridge mode' },
      { key: 'D', text: 'repeater mode' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — สถาปัตยกรรม AP สองแบบหลัก\n• Autonomous AP — ทำงานเองครบวงจร มี IOS ของตัวเอง คอนฟิก SSID/ความปลอดภัยทีละตัว ผ่าน CLI หรือหน้าเว็บ เหมาะกับที่ที่มี AP ไม่กี่ตัว\n• Lightweight AP — ทำงานร่วมกับ WLC แบบ split-MAC ⭐\n  งานที่ AP ยังทำเอง (real-time): ส่ง/รับคลื่น, ACK, บีคอน, การเข้ารหัส\n  งานที่ WLC รับไปทำแทน: การยืนยันตัวตน, การเชื่อมต่อ, การโรมมิ่ง, การจัดการ RF, การกระจาย SSID และนโยบายความปลอดภัย\n  เชื่อมกันด้วยอุโมงค์ CAPWAP (UDP 5246 ควบคุม / 5247 ข้อมูล)\n\n✅ ทำไม A ถูก: คำอธิบายในโจทย์ — พึ่งคอนโทรลเลอร์กลางสำหรับการจัดการ การโรมมิ่ง และการตั้ง SSID — คือนิยามของ lightweight AP เป๊ะ ๆ\n\n❌ ทำไมข้ออื่นผิด:\nB. autonomous ตรงข้าม มันทำงานได้เองโดยไม่ต้องมี WLC\nC. bridge (mesh) mode เป็นโหมดย่อยของ AP สำหรับเชื่อมสองอาคารแบบไร้สาย ไม่ใช่คำตอบของสถาปัตยกรรมการจัดการ\nD. repeater mode ขยายสัญญาณโดยรับ-ส่งซ้ำ ทำให้ throughput ลดครึ่ง ไม่เกี่ยวกับการจัดการรวมศูนย์\n\n📗 จำไว้สอบ: lightweight = ต้องมี WLC + CAPWAP • autonomous = ตัวใครตัวมัน • split-MAC = แบ่งงานระหว่าง AP กับ WLC',
  },
  {
    id: 263,
    kind: 'single',
    image: v4q263,
    prompt:
      'Refer to the exhibit. A network engineer must configure communication between PC A and the File Server. To prevent interruption for any other communications, which command must be configured?',
    options: [
      { key: 'A', text: 'switchport trunk allowed vlan 12' },
      { key: 'B', text: 'switchport trunk allowed vlan none' },
      { key: 'C', text: 'switchport trunk allowed vlan add 13' },
      { key: 'D', text: 'switchport trunk allowed vlan remove 10-11' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำว่า add สำคัญมากในคำสั่ง allowed vlan\n• switchport trunk allowed vlan <list>     → "แทนที่" รายการเดิมทั้งหมด ⚠️ VLAN ที่ไม่ได้พิมพ์จะถูกตัดออกทันที\n• switchport trunk allowed vlan add <list>  → "เพิ่ม" เข้าไปในรายการเดิม ของเก่ายังอยู่ครบ ⭐\n• switchport trunk allowed vlan remove <list> → เอาออกจากรายการ\n\n🔍 อ่าน exhibit\nPC A 192.168.0.10/23 อยู่ Switch A พอร์ต Gi0/4 → switchport access vlan 13\nFile Server 192.168.1.20/23 อยู่ Switch B พอร์ต Gi0/3 → switchport access vlan 13\nทั้งคู่อยู่ VLAN 13 และซับเน็ต /23 เดียวกัน (192.168.0.0/23 ครอบคลุม 192.168.0.0-192.168.1.255) จึงควรคุยกันได้\nแต่ Switch A Gi0/1: switchport trunk allowed vlan 10-12 ← ไม่มี VLAN 13! ทราฟฟิกจึงข้าม trunk ไม่ได้\n\n✅ ทำไม C ถูก: switchport trunk allowed vlan add 13 เติม VLAN 13 เข้าไปในรายการที่อนุญาต โดย VLAN 10, 11 และ 12 ยังคงผ่านได้เหมือนเดิม → ตรงกับเงื่อนไข "prevent interruption for any other communications"\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีคำว่า add → รายการจะเหลือแค่ VLAN 12 ตัวเดียว VLAN 10, 11 และ 13 ถูกตัดทั้งหมด — ทำให้เครือข่ายเสียหายหนัก\nB. none = ปิดทุก VLAN บน trunk ตัดขาดทั้งหมด\nD. remove 10-11 ตัด VLAN ที่ยังใช้งานอยู่ออก และ VLAN 13 ก็ยังไม่ได้เพิ่มอยู่ดี\n\n📗 จำไว้สอบ: จะเพิ่ม VLAN บน trunk ที่ใช้งานอยู่ ต้องมีคำว่า add เสมอ ไม่งั้นเป็นการเขียนทับ',
  },
  {
    id: 264,
    kind: 'single',
    image: v4q264,
    prompt: 'Refer to the exhibit. What is the result if Gig1/11 receives an STP BPDU?',
    options: [
      { key: 'A', text: 'The port transitions to STP blocking.' },
      { key: 'B', text: 'The port immediately transitions to STP forwarding.' },
      { key: 'C', text: 'The port goes into error-disable state.' },
      { key: 'D', text: 'The port transitions to the root port.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — BPDU Guard = พอร์ตนี้ห้ามเจอสวิตช์เด็ดขาด\nตรรกะของ BPDU Guard: พอร์ตที่เปิด PortFast ถูกออกแบบมาให้ต่อกับอุปกรณ์ปลายทาง (PC, เครื่องพิมพ์, เซิร์ฟเวอร์) ซึ่งจะไม่ส่ง BPDU ออกมา ดังนั้นถ้าพอร์ตนั้น "ได้รับ" BPDU แปลว่ามีคนเอาสวิตช์มาเสียบ ซึ่งอาจทำให้เกิดลูปหรือแย่งตำแหน่ง root bridge\n→ ทางแก้: ปิดพอร์ตทันทีด้วยการเข้าสถานะ err-disabled ⭐\n\n🔍 อ่าน exhibit\nswitch(config)#interface gigabitEthernet 1/11\nswitch(config-if)#switchport mode access\nswitch(config-if)#spanning-tree portfast\nswitch(config-if)#spanning-tree bpduguard enable   ← ตัวชี้ขาด\n\n🔧 การกู้คืนพอร์ต\n• ทำมือ: shutdown แล้ว no shutdown\n• อัตโนมัติ: errdisable recovery cause bpduguard + errdisable recovery interval 300\nตรวจสอบด้วย show interfaces status err-disabled\n\n✅ ทำไม C ถูก: เมื่อ BPDU Guard ทำงาน พอร์ตจะถูกสั่งปิดเข้าสถานะ err-disabled ทันทีที่เห็น BPDU เข้ามาแม้เพียงเฟรมเดียว\n\n❌ ทำไมข้ออื่นผิด:\nA. การเข้า blocking เป็นพฤติกรรมของ STP ปกติเมื่อไม่มี BPDU Guard\nB. PortFast ทำให้ forward ทันทีก็จริง แต่เมื่อ BPDU มาถึง BPDU Guard มีอำนาจเหนือกว่าและสั่งปิดพอร์ต\nD. พอร์ตถูกปิดไปแล้ว จึงเป็นบทบาทใด ๆ ใน STP ไม่ได้\n\n📗 จำไว้สอบ: BPDU Guard → err-disable ปิดพอร์ต • BPDU Filter → เมิน BPDU (อันตราย เสี่ยงลูป) • Root Guard → root-inconsistent (blocking ชั่วคราว ฟื้นเองได้)',
  },
  {
    id: 265,
    kind: 'single',
    prompt: 'Which access layer threat-mitigation technique provides security based on identity?',
    options: [
      { key: 'A', text: 'Dynamic ARP Inspection' },
      { key: 'B', text: 'DHCP snooping' },
      { key: 'C', text: '802.1x' },
      { key: 'D', text: 'using a non-default native VLAN' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เทคนิคป้องกันภัยที่ชั้น access แต่ละตัวแก้ปัญหาคนละอย่าง\n• 802.1X — ยืนยัน "ตัวตน" ของผู้ใช้/อุปกรณ์กับ RADIUS ก่อนจึงเปิดพอร์ตให้ใช้งาน ⭐ identity-based\n• DHCP Snooping — สร้างรายชื่อพอร์ตที่เชื่อถือได้ กัน DHCP server ปลอม และสร้างตาราง binding (MAC-IP-VLAN-พอร์ต)\n• Dynamic ARP Inspection (DAI) — ใช้ตาราง binding จาก DHCP Snooping ตรวจ ARP ที่วิ่งผ่าน เพื่อกัน ARP spoofing / man-in-the-middle\n• IP Source Guard — ใช้ตาราง binding เดียวกันกันการปลอม source IP\n• Port Security — จำกัดจำนวน/ระบุ MAC address ที่ใช้พอร์ตได้\n• Non-default native VLAN — กัน VLAN hopping แบบ double tagging\n\n✅ ทำไม C ถูก: มีเพียง 802.1X เท่านั้นที่ตัดสินจาก "ตัวตน" (ชื่อผู้ใช้/รหัสผ่าน หรือใบรับรองดิจิทัล) แล้วยังส่ง VLAN และ ACL กลับมาให้พอร์ตแบบไดนามิกได้ตามสิทธิ์ของแต่ละคน\n\n❌ ทำไมข้ออื่นผิด:\nA. DAI ตรวจความถูกต้องของข้อความ ARP ไม่ได้ถามว่าผู้ใช้เป็นใคร\nB. DHCP Snooping กรอง DHCP server ปลอม ไม่ได้พิสูจน์ตัวตนผู้ใช้\nD. การเปลี่ยน native VLAN เป็นการตั้งค่าเชิงป้องกันโครงสร้าง ไม่มีเรื่องตัวตนเข้ามาเกี่ยว\n\n📗 จำไว้สอบ: เห็นคำว่า identity / user-based → 802.1X • DHCP Snooping เป็นฐานให้ DAI และ IP Source Guard ทำงานต่อ',
  },
  {
    id: 266,
    kind: 'single',
    image: v4q266,
    prompt: 'Refer to the exhibit. Which action do the switches take on the trunk link?',
    options: [
      { key: 'A', text: 'The trunk does not form, and the ports go into an err-disabled status.' },
      { key: 'B', text: 'The trunk forms, but the mismatched native VLANs are merged into a single broadcast domain.' },
      { key: 'C', text: 'The trunk forms, but VLAN 99 and VLAN 999 are in a shutdown state.' },
      { key: 'D', text: 'The trunk does not form, but VLAN 99 and VLAN 999 are allowed to traverse the link.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — native VLAN ไม่ตรงกันทำให้เกิดอะไร\nสิ่งที่ "เกิดขึ้น"\n✔ trunk ยังขึ้นได้ตามปกติ ลิงก์ไม่ดาวน์\n✔ VLAN ที่ติดแท็กทุกตัวยังวิ่งข้ามได้ถูกต้อง\n✔ CDP ตรวจพบและขึ้น log เตือน %CDP-4-NATIVE_VLAN_MISMATCH\n✔ ทราฟฟิกของ native VLAN ทั้งสองฝั่งถูกเชื่อมรวมเป็น broadcast domain เดียวกัน ⭐\n\nสิ่งที่ "ไม่เกิดขึ้น"\n✘ พอร์ตไม่ถูก err-disable (ต่างจากกรณี BPDU Guard หรือ port-security)\n✘ VLAN ไม่ถูก shutdown\n\n🔍 อ่าน exhibit\nSW1 Fa0/1: switchport trunk native vlan 999\nSW2 Fa0/1: switchport trunk native vlan 99\nทั้งคู่ encapsulation dot1q และ mode trunk → trunk เกิดขึ้นแน่นอน\n\n🔗 ทำไมจึงรวมเป็นโดเมนเดียว: SW1 ส่งทราฟฟิก VLAN 999 ออกไปแบบไม่ติดแท็ก → SW2 รับเฟรมไม่ติดแท็กแล้วจัดเข้า VLAN 99 ของตัวเอง ผลคือ VLAN 999 กับ VLAN 99 กลายเป็นวงเดียวกัน — เป็นช่องโหว่ความปลอดภัย\n\n✅ ทำไม B ถูก: อธิบายทั้งสองผลลัพธ์ถูกต้อง — trunk ขึ้น และ native VLAN ทั้งสองถูกเชื่อมรวมกัน\n\n❌ ทำไมข้ออื่นผิด:\nA. native VLAN mismatch ไม่ทำให้ err-disable\nC. VLAN ไม่ถูกสั่ง shutdown จากเหตุนี้\nD. trunk ขึ้นแน่นอน เพราะทั้งสองฝั่งสั่ง mode trunk แบบตายตัวแล้ว\n\n📗 จำไว้สอบ: native VLAN mismatch = trunk ขึ้น + CDP เตือน + VLAN รวมกัน (ปัญหาความปลอดภัย ไม่ใช่ลิงก์ดาวน์)',
  },
  {
    id: 267,
    kind: 'multi',
    prompt:
      'A network engineer must configure two new subnets using the address block 10.70.128.0/19 to meet these requirements:\n• The first subnet must support 24 hosts.\n• The second subnet must support 472 hosts.\n• Both subnets must use the longest subnet mask possible from the address block.\n\nWhich two configurations must be used to configure the new subnets and meet a requirement to use the first available address in each subnet for the router interfaces? (Choose two.)',
    options: [
      { key: 'A', text: 'interface vlan 1148 / ip address 10.70.148.1 255.255.254.0' },
      { key: 'B', text: 'interface vlan 3002 / ip address 10.70.147.17 255.255.255.224' },
      { key: 'C', text: 'interface vlan 4722 / ip address 10.70.133.17 255.255.255.192' },
      { key: 'D', text: 'interface vlan 1234 / ip address 10.70.159.1 255.255.254.0' },
      { key: 'E', text: 'interface vlan 155 / ip address 10.70.155.65 255.255.255.224' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — สองขั้นตอน: หา mask ที่สั้นที่สุดที่พอ แล้วเช็กว่า IP เป็น "โฮสต์แรก" จริงไหม\n\n1️⃣ หา mask จากจำนวนโฮสต์\n• ต้องการ 24 โฮสต์ → 2^5-2 = 30 ✔ ใช้ 5 บิตโฮสต์ → /27 (255.255.255.224) block 32\n• ต้องการ 472 โฮสต์ → 2^9-2 = 510 ✔ ใช้ 9 บิตโฮสต์ → /23 (255.255.254.0) block 2 ในออกเตตที่สาม\n\n2️⃣ ตรวจแต่ละตัวเลือกว่าเป็นโฮสต์แรกของซับเน็ตหรือไม่\nA. 10.70.148.1 /23 → ออกเตตที่สาม 148 เป็นเลขคู่ = ขอบซับเน็ต → เน็ตเวิร์ก 10.70.148.0/23 โฮสต์แรก = 10.70.148.1 ✔ และอยู่ในบล็อก 10.70.128.0/19 (128.0-159.255) ✔\nB. 10.70.147.17 /27 → บล็อก 32: 17 อยู่ในช่วง 0-31 → เน็ตเวิร์ก 10.70.147.0 โฮสต์แรกคือ .1 ไม่ใช่ .17 ✘\nC. mask /26 ให้ 62 โฮสต์ ซึ่งไม่ใช่ mask ที่ยาวที่สุดสำหรับ 24 โฮสต์ (/27 ยาวกว่าและยังพอ) ✘\nD. 10.70.159.1 /23 → 159 เป็นเลขคี่ → เน็ตเวิร์กคือ 10.70.158.0/23 โฮสต์แรก = 10.70.158.1 ไม่ใช่ .159.1 ✘\nE. 10.70.155.65 /27 → บล็อก 32: 65 อยู่ในช่วง 64-95 → เน็ตเวิร์ก 10.70.155.64 โฮสต์แรก = .65 ✔ อยู่ในบล็อก /19 ✔\n\n✅ ทำไม A + E ถูก: A ให้ซับเน็ต /23 (510 โฮสต์ รองรับ 472) พร้อมโฮสต์แรก และ E ให้ซับเน็ต /27 (30 โฮสต์ รองรับ 24) พร้อมโฮสต์แรก ครบทั้งสองเงื่อนไข\n\n📗 จำไว้สอบ: /23 ขอบซับเน็ตอยู่ที่ออกเตตสามเป็นเลขคู่ • /27 block 32 → 0, 32, 64, 96, 128, 160, 192, 224',
  },
  {
    id: 268,
    kind: 'single',
    image: v4q268,
    prompt:
      'Refer to the exhibit. An administrator must configure interfaces Gi1/1 and Gi1/3 on switch SW11. PC-1 and PC-2 must be placed in the Data VLAN, and Phone-1 must be placed in the Voice VLAN. Which configuration meets these requirements?',
    options: [
      {
        key: 'A',
        text: 'interface gi1/1 / switchport mode access / switchport access vlan 8 !! interface gi1/3 / switchport mode access / switchport access vlan 8 / switchport voice vlan 9',
      },
      {
        key: 'B',
        text: 'interface gi1/1 / switchport mode access / switchport access vlan 8 !! interface gi1/3 / switchport mode trunk / switchport trunk vlan 8 / switchport voice vlan 9',
      },
      {
        key: 'C',
        text: 'interface gi1/1 / switchport mode access / switchport access vlan 9 !! interface gi1/3 / switchport mode trunk / switchport trunk vlan 8 / switchport trunk vlan 9',
      },
      {
        key: 'D',
        text: 'interface gi1/1 / switchport mode access / switchport access vlan 8 !! interface gi1/3 / switchport mode access / switchport voice vlan 8 / switchport access vlan 9',
      },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — จับคู่พอร์ตกับอุปกรณ์ให้ถูกก่อน แล้วค่อยใส่คำสั่ง\n🔍 อ่าน exhibit\nVLAN 8 = Data, VLAN 9 = Voice\nGi1/1 → PC-2 โดยตรง (มีแต่ข้อมูล ไม่มีเสียง)\nGi1/3 → Phone-1 แล้วมี PC-1 เสียบต่อหลังโทรศัพท์ (มีทั้งเสียงและข้อมูล)\n\n🔧 คอนฟิกที่ควรได้\ninterface Gi1/1\n switchport mode access\n switchport access vlan 8         ← PC-2 อยู่ VLAN ข้อมูล\n!\ninterface Gi1/3\n switchport mode access\n switchport access vlan 8         ← PC-1 (ไม่ติดแท็ก) เข้า VLAN ข้อมูล\n switchport voice vlan 9          ← โทรศัพท์ติดแท็ก VLAN เสียง\n\n✅ ทำไม A ถูก: ตรงตามข้อกำหนดครบ — PC ทั้งสองอยู่ VLAN 8 และโทรศัพท์อยู่ VLAN 9 อีกทั้งพอร์ตที่ต่อโทรศัพท์ยังคงเป็น mode access ตามแนวปฏิบัติของ Cisco (สวิตช์ใช้ CDP บอกโทรศัพท์ให้ติดแท็ก VLAN 9 เอง)\n\n❌ ทำไมข้ออื่นผิด:\nB, C. ไม่มีคำสั่ง switchport trunk vlan <id> ในไวยากรณ์จริง (ที่ถูกคือ switchport trunk allowed vlan) และการทำ trunk ไปหาโทรศัพท์ไม่ใช่แนวทางมาตรฐาน\nC. ยังเอา PC-2 ไปไว้ VLAN 9 ซึ่งเป็น VLAN เสียง ผิดข้อกำหนด\nD. สลับ VLAN — เอาเสียงไป 8 และข้อมูลไป 9 ตรงข้ามกับ exhibit\n\n📗 จำไว้สอบ: พอร์ตโทรศัพท์ = access + access vlan (data) + voice vlan (voice) เสมอ ไม่ใช่ trunk',
  },
  {
    id: 269,
    kind: 'single',
    image: v4q269,
    prompt:
      'Refer to the exhibit. Users need to connect to the wireless network with IEEE 802.11r-compatible devices. The connection must be maintained as users travel between floors or to other areas in the building. What must be the configuration of the connection?',
    options: [
      { key: 'A', text: 'Disable AES encryption.' },
      { key: 'B', text: 'Enable Fast Transition and select the FT 802.1x option.' },
      { key: 'C', text: 'Enable Fast Transition and select the FT PSK option.' },
      { key: 'D', text: 'Select the WPA Policy option with the CCKM option.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — 802.11r = Fast Transition (FT) ช่วยให้โรมข้าม AP โดยไม่ขาดสาย\nปกติเมื่อไคลเอนต์ย้าย AP ต้องทำ 4-way handshake ใหม่ทั้งชุด ใช้เวลา 50-100 ms ซึ่งทำให้สายวิดีโอคอลหรือ VoIP สะดุด\n802.11r ทำ key negotiation ล่วงหน้ากับ AP ตัวถัดไป จึงเหลือเวลาสลับไม่ถึง 50 ms\n\nเมื่อเปิด Fast Transition ต้องเลือกวิธีจัดการกุญแจให้ตรงกับที่ WLAN ใช้อยู่\n• FT 802.1X → ใช้เมื่อ WLAN ยืนยันตัวตนกับ RADIUS (แบบองค์กร)\n• FT PSK    → ใช้เมื่อ WLAN ใช้รหัสผ่านร่วม (Pre-Shared Key)\n\n🔍 อ่าน exhibit\nFast Transition = Disable            ← ต้องเปลี่ยนเป็น Enable\nWPA2 Policy ✔ / WPA2 Encryption AES ✔\nAuthentication Key Management: PSK ✔ Enable (802.1X และ CCKM ไม่ได้ติ๊ก)\n→ WLAN นี้ใช้ PSK อยู่ จึงต้องเลือก FT PSK ให้สอดคล้องกัน\n\n✅ ทำไม C ถูก: เปิด Fast Transition เพื่อรองรับ 802.11r และเลือก FT PSK ให้ตรงกับวิธียืนยันตัวตนแบบ PSK ที่ WLAN ใช้อยู่\n\n❌ ทำไมข้ออื่นผิด:\nA. AES คือการเข้ารหัสที่ปลอดภัยและจำเป็นสำหรับ WPA2 — การปิดจะทำให้เครือข่ายอ่อนแอลงและไม่ช่วยเรื่องโรมมิ่งเลย\nB. FT 802.1X ใช้ไม่ได้ เพราะ WLAN นี้ไม่ได้เปิด 802.1X (ช่องไม่ได้ติ๊ก)\nD. CCKM เป็นกลไกโรมมิ่งเร็วของ Cisco เอง ไม่ใช่ 802.11r ที่โจทย์ระบุ และ WPA (v1) ก็ล้าสมัยแล้ว\n\n📗 จำไว้สอบ: 802.11r = FT • เลือก FT PSK ถ้าใช้รหัสผ่านร่วม / FT 802.1X ถ้าใช้ RADIUS • CCKM คือของ Cisco ไม่ใช่มาตรฐาน',
  },
  {
    id: 270,
    kind: 'single',
    image: v4q270,
    prompt:
      'Refer to the exhibit. An engineer is asked to insert the new VLAN into the existing trunk without modifying anything previously configured. Which command accomplishes this task?',
    options: [
      { key: 'A', text: 'switchport trunk allowed vlan 100-104' },
      { key: 'B', text: 'switchport trunk allowed vlan 104' },
      { key: 'C', text: 'switchport trunk allowed vlan all' },
      { key: 'D', text: 'switchport trunk allowed vlan add 104' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำสำคัญคือ "without modifying anything previously configured"\nคำสั่ง switchport trunk allowed vlan มีสี่รูปแบบ\n• <list>       → เขียนทับรายการเดิมทั้งหมด ⚠️\n• add <list>   → เติมเข้าไปโดยของเดิมยังอยู่ ⭐\n• remove <list>→ เอาออกจากรายการ\n• all / none / except → ตั้งทั้งชุดใหม่\n\n🔍 อ่าน exhibit: ลิงก์ 802.1q ระหว่าง SW1 E0/0 กับ SW2 E0/0 ปัจจุบันขน VLAN 1, 100, 101, 102, 103 และต้องการเพิ่ม VLAN 104\n\n✅ ทำไม D ถูก: switchport trunk allowed vlan add 104 เติม VLAN 104 เข้าไป โดย VLAN 1 และ 100-103 ยังคงอยู่ครบ — ตรงกับข้อกำหนดที่ห้ามแตะของเดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. ผลลัพธ์จะเหลือแค่ VLAN 100-104 → VLAN 1 หายไป ซึ่งถือว่าแก้ไขของเดิม (และ VLAN 1 มักถูกใช้เป็น native VLAN)\nB. รายการจะเหลือ VLAN 104 ตัวเดียว ตัด VLAN 1 และ 100-103 ออกหมด — ลิงก์แทบใช้งานไม่ได้\nC. all เปิดทุก VLAN 1-4094 ซึ่งเปลี่ยนพฤติกรรมเดิมและขัดหลักความปลอดภัย (ควรอนุญาตเท่าที่จำเป็น)\n\n📗 จำไว้สอบ: เติม VLAN บน trunk ที่มีคนใช้อยู่ ต้องพิมพ์คำว่า add เสมอ — ลืมแล้วเครือข่ายล่มทันที',
  },
  {
    id: 271,
    kind: 'multi',
    prompt:
      'Aside from discarding, which two states does the switch port transition through while using RSTP (802.1w)? (Choose two.)',
    options: [
      { key: 'A', text: 'blocking' },
      { key: 'B', text: 'speaking' },
      { key: 'C', text: 'listening' },
      { key: 'D', text: 'learning' },
      { key: 'E', text: 'forwarding' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — RSTP ยุบสถานะจาก 5 เหลือ 3\nSTP 802.1D (เดิม)          RSTP 802.1w (ใหม่)\ndisabled  ┐\nblocking  ├─────────────→  discarding\nlistening ┘\nlearning  ───────────────→  learning ⭐\nforwarding ──────────────→  forwarding ⭐\n\nเหตุผลที่ยุบได้: สามสถานะแรก (disabled, blocking, listening) ล้วน "ไม่ส่งข้อมูลผู้ใช้และไม่เรียน MAC" เหมือนกันหมด RSTP จึงรวมเป็น discarding ตัวเดียวเพื่อความชัดเจน\n\nสถานะที่เหลือ 3 ตัวของ RSTP\n• Discarding — ไม่ส่งข้อมูล ไม่เรียน MAC\n• Learning — ยังไม่ส่งข้อมูล แต่เริ่มเรียน MAC แล้ว ⭐\n• Forwarding — ส่งข้อมูลและเรียน MAC ⭐\n\n✅ ทำไม D + E ถูก: เมื่อโจทย์ตัด discarding ออกไปแล้ว RSTP เหลือเพียง learning และ forwarding เท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nA. blocking เป็นสถานะของ STP รุ่นเดิม RSTP รวมเข้าไปใน discarding แล้ว\nB. ไม่มีสถานะชื่อ speaking ใน spanning-tree ใด ๆ ทั้งสิ้น\nC. listening ก็ถูกยุบเข้า discarding เช่นกัน\n\n📗 จำไว้สอบ: RSTP มี 3 สถานะ = discarding / learning / forwarding • บทบาทพอร์ต 4 แบบ = root / designated / alternate / backup',
  },
  {
    id: 272,
    kind: 'drag',
    image: v4q272,
    prompt:
      'Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.',
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
      '📘 แนวคิด — สถาปัตยกรรม AP มี 3 แบบ แยกกันที่ "ใครเป็นคนคุม"\n\n1️⃣ Autonomous AP — คุมตัวเอง\n• มี IOS ของตัวเอง ต้องคอนฟิกทีละตัว\n• เข้าไปจัดการผ่าน Telnet, SSH หรือหน้าเว็บของ AP ⭐\n• จึงต้องมี management IP address บนตัว AP เอง ⭐\n\n2️⃣ Cloud-Based AP (เช่น Meraki) — คุมจากคลาวด์\n• จัดการผ่านแดชบอร์ดเว็บบนคลาวด์ ⭐\n• เสียบสายแล้วโทรกลับหาคลาวด์เพื่อดึงคอนฟิกเอง = zero-touch / automatic deployment ⭐\n• ไม่ต้องมี WLC ในสถานที่\n\n3️⃣ Lightweight AP — คุมโดย WLC (ตัวลวงของข้อนี้)\n• "configured and managed by a WLC" ผ่านอุโมงค์ CAPWAP\n• ข้อนี้ไม่มีช่องให้วาง จึงเป็นตัวเลือกที่ไม่ถูกใช้\n\n💡 เทคนิคจับคู่: เห็นคำว่า Telnet/SSH/CLI ของตัวเอง → autonomous • เห็นคำว่า dashboard/automatic → cloud • เห็นคำว่า WLC/CAPWAP → lightweight\n\n📗 จำไว้สอบ: autonomous = ตัวใครตัวมัน • lightweight = พึ่ง WLC • cloud = พึ่งแดชบอร์ดบนอินเทอร์เน็ต',
  },
  {
    id: 273,
    kind: 'single',
    prompt: 'Which interface mode must be configured to connect the lightweight APs in a centralized architecture?',
    options: [
      { key: 'A', text: 'WLAN dynamic' },
      { key: 'B', text: 'trunk' },
      { key: 'C', text: 'access' },
      { key: 'D', text: 'management' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ทำไมพอร์ตที่ต่อ lightweight AP จึงเป็น access ไม่ใช่ trunk\nในสถาปัตยกรรมรวมศูนย์ (centralized / local mode) ทราฟฟิกของไคลเอนต์ไร้สายทุก SSID จะถูก "ห่อ" ไว้ในอุโมงค์ CAPWAP แล้วส่งกลับไปแกะที่ WLC\n→ สวิตช์จึงเห็นแค่แพ็กเก็ต CAPWAP ที่มาจาก IP เดียวของ AP ใน VLAN เดียว ไม่ได้เห็น VLAN ของผู้ใช้เลย\n→ พอร์ตนั้นจึงต้องการเพียง VLAN เดียว = access port ⭐\n\n🔧 คอนฟิกทั่วไป\ninterface GigabitEthernet1/0/10\n description ** Lightweight AP **\n switchport mode access\n switchport access vlan 100        ← VLAN สำหรับจัดการ AP\n spanning-tree portfast\n\n⚠️ ข้อยกเว้นที่ต้องใช้ trunk\n• AP โหมด FlexConnect ที่ทำ local switching (VLAN ผู้ใช้แตกออกที่สาขา)\n• Autonomous AP ที่แมปหลาย SSID ไปหลาย VLAN\n\n✅ ทำไม C ถูก: lightweight AP ในสถาปัตยกรรมรวมศูนย์ต้องการ VLAN เดียวสำหรับสร้างอุโมงค์ CAPWAP ไปหา WLC จึงใช้พอร์ต access\n\n❌ ทำไมข้ออื่นผิด:\nA. dynamic interface เป็นอินเทอร์เฟซเชิงตรรกะ "บน WLC" ที่แมป WLAN เข้ากับ VLAN ไม่ใช่โหมดของพอร์ตสวิตช์\nB. trunk จำเป็นเฉพาะกรณี FlexConnect local switching หรือ autonomous AP ซึ่งไม่ใช่สถาปัตยกรรมรวมศูนย์\nD. management interface ก็เป็นอินเทอร์เฟซบน WLC ไม่ใช่โหมดของพอร์ตสวิตช์\n\n📗 จำไว้สอบ: local mode AP → พอร์ต access • FlexConnect local switching → พอร์ต trunk • autonomous หลาย SSID → พอร์ต trunk',
  },
  {
    id: 274,
    kind: 'single',
    image: v4q274,
    prompt:
      'Refer to the exhibit. The following must be considered:\n• SW1 is fully configured for all traffic.\n• The SW4 and SW9 links to SW1 have been configured.\n• The SW4 interface Gi0/1 and Gi0/0 on SW9 have been configured.\n• The remaining switches have had all VLANs added to their VLAN database.\n\nWhich configuration establishes a successful ping from PC2 to PC7 without interruption to traffic flow between other PCs?',
    options: [
      {
        key: 'A',
        text: 'SW4: Gi0/7 trunk allowed vlan 108 / Gi0/2 access vlan 14 — SW11: Gi0/2 trunk allowed vlan 14,108 / Gi0/1 trunk allowed vlan 14,108 — SW9: Gi0/2 access vlan 14',
      },
      {
        key: 'B',
        text: 'SW4: Gi0/2 trunk allowed vlan 14,108 — SW11: Gi0/2 trunk allowed vlan 14,108 / Gi0/1 trunk allowed vlan 14,108 — SW9: Gi0/2 trunk allowed vlan 14',
      },
      {
        key: 'C',
        text: 'SW4: Gi0/2 trunk allowed vlan 14 — SW11: Gi0/1 trunk allowed vlan 14 — SW9: Gi0/2 trunk allowed vlan 108',
      },
      {
        key: 'D',
        text: 'SW4: Gi0/2 access vlan 14 — SW11: Gi0/2 trunk allowed vlan 14 / Gi0/0 access vlan 14 / Gi0/1 trunk — SW9: Gi0/2 access vlan 14',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เชื่อมสองโฮสต์ที่อยู่ VLAN เดียวกันแต่คนละสวิตช์ ต้องมี trunk ต่อเนื่องตลอดเส้นทาง\n\n🔍 อ่าน exhibit\nPC2 อยู่ VLAN 14 ต่อ SW4 Gi0/1 (คอนฟิกแล้ว)\nPC7 อยู่ VLAN 14 ต่อ SW9 Gi0/0 (คอนฟิกแล้ว)\nPC3 และ PC9 อยู่ VLAN 108 บน SW4 Gi0/3 และ SW11 Gi0/4\nเส้นทางล่าง: SW4 Gi0/2 ── SW11 Gi0/2 ... SW11 Gi0/1 ── SW9 Gi0/2\n\n🔗 พอร์ตที่ยังต้องคอนฟิก 4 จุด: SW4 Gi0/2, SW11 Gi0/2, SW11 Gi0/1, SW9 Gi0/2\nทุกจุดต้องเป็น trunk เพราะต้องขน VLAN 14 (PC2↔PC7) และช่วง SW4-SW11 ยังต้องขน VLAN 108 (PC3↔PC9) ด้วย\n\n✅ ทำไม B ถูก: ตั้งครบทั้งสี่พอร์ตเป็น trunk — ฝั่ง SW4↔SW11 อนุญาต VLAN 14 และ 108 (รองรับทั้งสองคู่ PC) ส่วน SW11↔SW9 อนุญาต VLAN 14 ตามที่ต้องใช้จริง ping จาก PC2 ไป PC7 จึงผ่าน และการสื่อสารของ PC3-PC9 ใน VLAN 108 ไม่ถูกกระทบ\n\n❌ ทำไมข้ออื่นผิด:\nA. ตั้ง SW4 Gi0/2 และ SW9 Gi0/2 เป็น access port ทำให้ลิงก์ระหว่างสวิตช์ขนได้ VLAN เดียว และยังไปยุ่งกับ Gi0/7 ที่คอนฟิกเสร็จแล้วจนตัด VLAN 14 ทิ้ง\nC. ไม่ได้คอนฟิก SW11 Gi0/2 เลย เส้นทางจึงขาด และ SW9 Gi0/2 อนุญาตแค่ VLAN 108 ซึ่ง PC7 ไม่ได้อยู่\nD. ใช้ access port บนลิงก์ระหว่างสวิตช์หลายจุด และไปแตะ Gi0/0 ของ SW9 ที่คอนฟิกไว้แล้ว\n\n📗 จำไว้สอบ: ลิงก์ระหว่างสวิตช์ที่ต้องขนมากกว่า 1 VLAN = trunk เสมอ • ต้องอนุญาต VLAN ให้ครบทุกช่วงของเส้นทาง',
  },
  {
    id: 275,
    kind: 'single',
    image: v4q275,
    prompt:
      'Refer to the exhibit. The network administrator must prevent the switch Cat9K-2 IP address from being visible in LLDP without disabling the protocol. Which action must be taken to complete the task?',
    options: [
      { key: 'A', text: 'Configure the no lldp mac-phy-cfg command globally on Cat9K-2.' },
      { key: 'B', text: 'Configure the no lldp receive command on interface G1/0/21 on Cat9K-1.' },
      { key: 'C', text: 'Configure the no lldp transmit command on interface G1/0/21 on Cat9K-1.' },
      { key: 'D', text: 'Configure the no lldp tlv-select management-address command globally on Cat9K-2.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — LLDP ส่งข้อมูลเป็นชิ้น ๆ เรียกว่า TLV และเลือกปิดเป็นรายชิ้นได้\nคำสั่ง lldp tlv-select <ชื่อ TLV> ใช้เปิด/ปิด TLV แต่ละตัวโดยที่ LLDP ยังทำงานอยู่\nTLV ที่ปิดได้ เช่น\n• management-address ⭐ — IP ที่ใช้จัดการอุปกรณ์\n• port-description, system-name, system-description, system-capabilities\n• mac-phy-cfg — ความเร็วและดูเพล็กซ์\n\n🔍 อ่าน exhibit\nCat9K-1# show lldp entry Cat9K-2\n...\nManagement Addresses:\n    IP: 10.5.110.2      ← ข้อมูลที่ต้องซ่อน\nจุดสำคัญ: ข้อมูลนี้ถูก "ส่งออกมาโดย Cat9K-2" ดังนั้นต้องแก้ที่ต้นทางคือ Cat9K-2\n\n🔧 คำสั่ง\nCat9K-2(config)# no lldp tlv-select management-address\n\n✅ ทำไม D ถูก: ปิดเฉพาะ TLV ที่บรรจุ IP address ทำให้ Cat9K-1 ยังเห็นชื่อ พอร์ต และรุ่นของ Cat9K-2 ได้ตามปกติ แต่ไม่เห็น IP — ตรงตามเงื่อนไข "without disabling the protocol"\n\n❌ ทำไมข้ออื่นผิด:\nA. mac-phy-cfg เป็น TLV เรื่องความเร็ว/ดูเพล็กซ์ ไม่ใช่ที่อยู่ IP\nB. no lldp receive บน Cat9K-1 ทำให้ Cat9K-1 ไม่รับ LLDP อะไรเลยจากพอร์ตนั้น เท่ากับปิดการมองเห็นทั้งหมด เกินกว่าที่โจทย์ขอ\nC. no lldp transmit บน Cat9K-1 หยุดการ "ส่ง" ของ Cat9K-1 เอง ซึ่งไม่เกี่ยวกับข้อมูลที่ Cat9K-2 ส่งออกมา\n\n📗 จำไว้สอบ: ต้องการซ่อนข้อมูลบางส่วน → no lldp tlv-select <TLV> ที่อุปกรณ์ "ต้นทาง" ของข้อมูลนั้น',
  },
  {
    id: 276,
    kind: 'single',
    image: v4q276,
    prompt:
      'Refer to the exhibit. An engineer has started to configure replacement switch SW1. To verify part of the configuration, the engineer issued the commands as shown and noticed that the entry for PC2 is missing. Which change must be applied to SW1 so that PC1 and PC2 communicate normally?',
    options: [
      {
        key: 'A',
        text: 'interface fa0/2 / no switchport access vlan 2 / no switchport trunk allowed vlan 3 / switchport trunk allowed vlan 2',
      },
      {
        key: 'B',
        text: 'interface fa0/2 / no switchport access vlan 2 / switchport trunk native vlan 2 / switchport trunk allowed vlan 3',
      },
      {
        key: 'C',
        text: 'interface fa0/2 / no switchport mode trunk / no switchport trunk allowed vlan 3 / switchport mode access',
      },
      {
        key: 'D',
        text: 'interface fa0/1 / no switchport access vlan 2 / switchport access vlan 3 / switchport trunk allowed vlan 2',
      },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — พอร์ตที่ต่อ PC ต้องเป็น access ไม่ใช่ trunk\n🔍 อ่าน exhibit เทียบสองพอร์ต\ninterface FastEthernet0/1        interface FastEthernet0/2\n switchport access vlan 2         switchport access vlan 2\n switchport mode access ✔         switchport trunk allowed vlan 3\n                                  switchport mode trunk ✘\n\nและตาราง MAC มีเพียง\nVLAN 2  0007.ec53.4289  DYNAMIC  Fa0/1    ← PC1 เท่านั้น\nไม่มีแถวของ PC2 (0007.ec89.7513) บน Fa0/2\n\n🔗 วิเคราะห์สาเหตุ\n• Fa0/2 ถูกตั้งเป็น trunk และอนุญาตเฉพาะ VLAN 3\n• PC2 เป็นเครื่องธรรมดา ส่งเฟรมแบบไม่ติดแท็ก → สวิตช์จัดเข้า native VLAN (VLAN 1)\n• VLAN 1 ไม่อยู่ในรายการ allowed (มีแต่ VLAN 3) → เฟรมถูกทิ้ง สวิตช์จึงไม่เคยเรียนรู้ MAC ของ PC2\n• คำสั่ง switchport access vlan 2 ที่อยู่บน Fa0/2 ไม่มีผล เพราะพอร์ตอยู่โหมด trunk\n\n✅ ทำไม C ถูก: เปลี่ยน Fa0/2 กลับเป็น access port และล้างคำสั่ง trunk ทิ้ง เมื่อพอร์ตเป็น access แล้ว คำสั่ง switchport access vlan 2 ที่มีอยู่เดิมจะกลับมามีผล → PC2 เข้า VLAN 2 เดียวกับ PC1 และคุยกันได้\n\n❌ ทำไมข้ออื่นผิด:\nA. ยังคงสถานะ trunk ไว้ ทั้งที่ปลายทางเป็น PC ธรรมดา และไปลบคำสั่ง access vlan 2 ที่จำเป็นออก\nB. ใช้ native vlan 2 ทำให้พอใช้งานได้ในทางเทคนิค แต่ยังเป็น trunk ไปหา PC ซึ่งผิดหลักการและเปิดช่องโหว่ VLAN hopping\nD. ไปแก้ Fa0/1 ซึ่งเป็นพอร์ตที่ทำงานถูกต้องอยู่แล้ว และยังย้าย PC1 ไป VLAN 3 ทำให้เสียหายหนักกว่าเดิม\n\n📗 จำไว้สอบ: MAC ของ PC ไม่ขึ้นในตาราง + พอร์ตเป็น trunk = เกือบทุกครั้งคือคอนฟิกโหมดพอร์ตผิด',
  },
  {
    id: 277,
    kind: 'single',
    image: v4q277,
    prompt:
      'Refer to the exhibit. Which switch becomes the root of the spanning tree?\n\nSwitch 1 — BID: 32778 0018.184e.3c00\nSwitch 2 — BID: 24586 001a.e3ff.a680\nSwitch 3 — BID: 28682 0022.55cf.cc00\nSwitch 4 — BID: 64000 4e15.8403.08f',
    options: [
      { key: 'A', text: 'Switch 1' },
      { key: 'B', text: 'Switch 2' },
      { key: 'C', text: 'Switch 3' },
      { key: 'D', text: 'Switch 4' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เปรียบเทียบ Bridge ID โดยดู priority ก่อน MAC เสมอ\nBridge ID = priority (16 บิต) + MAC address (48 บิต)\nถ้า priority ต่างกัน จบที่ priority เลย ไม่ต้องดู MAC\n\n🔍 เรียงค่า priority จากน้อยไปมาก\nSwitch 2 = 24586 ⭐ ต่ำสุด\nSwitch 3 = 28682\nSwitch 1 = 32778\nSwitch 4 = 64000\n\n💡 เกร็ดที่ควรรู้: ตัวเลขเหล่านี้เป็นค่า priority ที่รวม extended system ID (หมายเลข VLAN) เข้าไปแล้ว\n24586 = 24576 + 10 → priority ที่ตั้งไว้ 24576 บน VLAN 10\n28682 = 28672 + 10 → priority 28672 บน VLAN 10\n32778 = 32768 + 10 → ค่าดีฟอลต์บน VLAN 10\n\n✅ ทำไม B ถูก: Switch 2 มี priority 24586 ต่ำสุดในกลุ่ม จึงชนะการเลือกตั้งทันทีโดยไม่ต้องเปรียบเทียบ MAC address เลย (MAC จะถูกใช้ก็ต่อเมื่อ priority เสมอกัน)\n\n❌ ทำไมข้ออื่นผิด:\nA. 32778 เป็นค่าดีฟอลต์ที่ไม่ได้ปรับ สูงกว่า Switch 2\nC. 28682 ต่ำเป็นอันดับสอง จะได้เป็น root ก็ต่อเมื่อ Switch 2 หายไป\nD. 64000 สูงที่สุด แม้ MAC จะขึ้นต้นด้วย 4e ก็ไม่มีผล เพราะ priority แพ้ไปตั้งแต่ต้น\n\n📗 จำไว้สอบ: priority ก่อน แล้วค่อย MAC • priority ที่เห็นในผลลัพธ์ = ค่าที่ตั้ง + หมายเลข VLAN',
  },
  {
    id: 278,
    kind: 'drag',
    image: v4q278,
    prompt:
      'Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.',
    categories: [
      {
        name: 'Autonomous Access Point',
        items: ['accessible for management via Telnet, SSH, or a Web GUI', 'requires a management IP address'],
      },
      {
        name: 'Lightweight Access Point',
        items: ['configured and managed by a WLC', 'supports different operational modes'],
      },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['supports automatic deployment'] },
    ],
    explanation:
      '📘 แนวคิด — เทียบ Autonomous กับ Lightweight\n\nAutonomous AP (ทำงานเอง)\n• มีระบบปฏิบัติการและคอนฟิกของตัวเอง ต้องตั้งค่าทีละเครื่อง\n• เข้าไปจัดการผ่าน Telnet / SSH / หน้าเว็บของ AP โดยตรง ⭐\n• จำเป็นต้องมี management IP address บนตัว AP ⭐\n• ถ้ามีหลาย SSID ต้องต่อพอร์ต trunk ที่สวิตช์\n\nLightweight AP (พึ่ง WLC)\n• คอนฟิกและควบคุมทั้งหมดโดย WLC ผ่านอุโมงค์ CAPWAP ⭐\n• รองรับหลายโหมดการทำงาน ⭐ ได้แก่ local, FlexConnect, monitor, sniffer, rogue detector, bridge/mesh, SE-Connect, sensor\n• ไม่ต้องคอนฟิกทีละตัว AP ดึงคอนฟิกจาก WLC เมื่อ join สำเร็จ\n\n❌ ตัวลวงที่ไม่ได้ใช้: "supports automatic deployment" เป็นจุดขายเด่นของ Cloud-Based AP (เช่น Meraki) ที่เสียบสายแล้วโทรกลับหาคลาวด์เพื่อดึงคอนฟิกเอง — โจทย์ข้อนี้ไม่มีช่อง Cloud-Based ให้วาง\n\n📗 จำไว้สอบ: หลายโหมดการทำงาน (local/FlexConnect/monitor/sniffer) = ความสามารถของ lightweight AP เท่านั้น',
  },
  {
    id: 279,
    kind: 'single',
    image: v4q279,
    prompt:
      'Refer to the exhibit. An engineer is configuring a Layer 3 port-channel interface with LACP. The configuration on the first device is complete, and it is verified that both interfaces have registered the neighbor device in the CDP table. Which task on the neighbor device enables the new port channel to come up without negotiating the channel?',
    options: [
      { key: 'A', text: 'Configure the IP address of the neighboring device.' },
      { key: 'B', text: 'Bring up the neighboring interfaces using the no shutdown command.' },
      { key: 'C', text: 'Change the EtherChannel mode on the neighboring interfaces to auto.' },
      { key: 'D', text: 'Modify the static EtherChannel configuration of the device to passive mode.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ฝั่งหนึ่ง active แล้ว อีกฝั่งต้องเป็น active หรือ passive เท่านั้น\n🔍 อ่าน exhibit (อุปกรณ์ตัวแรก)\ninterface g2/0/0 / channel-group 1 mode active\ninterface g4/0/0 / channel-group 1 mode active\ninterface Port-channel1 / ip address 203.0.113.65 255.255.255.252   ← Layer 3\n%LINEPROTO-5-UPDOWN: Line protocol on Interface Port-channel1, changed state to down\n\n🔗 วิเคราะห์\n• อุปกรณ์ตัวแรกใช้ LACP mode active เรียบร้อย\n• CDP เห็นเพื่อนบ้านทั้งสองอินเทอร์เฟซ → ชั้นกายภาพและ Layer 2 ปกติดี พอร์ตไม่ได้ shutdown\n• แต่ Port-channel1 ยังดาวน์ → แปลว่าฝั่งตรงข้ามยังเป็น static (mode on) ซึ่งจับคู่กับ active ไม่ได้\n\nตารางจับคู่ LACP\nactive + active  = ติด\nactive + passive = ติด ⭐\nactive + on      = ไม่ติด (คนละกลไก)\nactive + auto/desirable = ไม่ติด (คนละโปรโตคอล)\n\n✅ ทำไม D ถูก: เปลี่ยนฝั่งเพื่อนบ้านจาก static (mode on) เป็น passive ทำให้จับคู่กับ active ได้ และคำว่า passive หมายถึงฝั่งนั้น "ไม่เริ่มเจรจาเอง" เพียงตอบรับคำเชิญจากฝั่ง active — ตรงกับวลี "without negotiating the channel" ในโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. Port-channel ชั้น 2 ต้องขึ้นก่อน IP จึงจะทำงาน การใส่ IP ไม่ทำให้ line protocol ขึ้น\nB. CDP เห็นเพื่อนบ้านแล้ว แปลว่าอินเทอร์เฟซ up อยู่ ไม่ได้ถูก shutdown\nC. auto เป็นโหมดของ PAgP ซึ่งเข้ากันกับ LACP ไม่ได้เลย\n\n📗 จำไว้สอบ: LACP จับคู่ได้เฉพาะ active/passive • on คือ static ไม่เจรจา • ห้ามผสมข้ามตระกูล PAgP กับ LACP',
  },
  {
    id: 280,
    kind: 'single',
    image: v4q280,
    prompt:
      'Refer to the exhibit. Which configuration establishes a Layer 2 LACP EtherChannel when applied to both switches?',
    options: [
      { key: 'A', text: 'interface range G1/1 - 1/3 / switchport mode trunk / channel-group 1 mode active / no shutdown' },
      { key: 'B', text: 'interface range G1/1 - 1/3 / switchport mode access / channel-group 1 mode passive / no shutdown' },
      {
        key: 'C',
        text: 'interface range G1/1 - 1/3 / switchport mode trunk / channel-group 1 mode desirable / no shutdown',
      },
      { key: 'D', text: 'interface range G1/1 - 1/3 / switchport mode access / channel-group 1 mode on / no shutdown' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — โจทย์กำหนดสามเงื่อนไข ต้องผ่านครบ\n1️⃣ "Layer 2" → พอร์ตต้องเป็น switchport (ไม่ใช่ no switchport แบบ Layer 3)\n2️⃣ "LACP" → ต้องใช้ mode active หรือ passive เท่านั้น\n3️⃣ "applied to both switches" → คอนฟิกชุดเดียวกันนี้ถูกวางลงทั้งสองฝั่ง จึงต้องเป็นคู่ที่จับกันติดเมื่อเหมือนกันทั้งคู่\n\n🔍 ตรวจเงื่อนไขที่ 3 กับตาราง LACP\nactive + active   = ติด ⭐\npassive + passive = ไม่ติด (ไม่มีใครเริ่มเจรจา)\n\n✅ ทำไม A ถูก: ผ่านครบทั้งสามข้อ — เป็น switchport (Layer 2), ใช้ mode active ซึ่งเป็น LACP, และเมื่อวางเหมือนกันทั้งสองฝั่งจะได้ active + active ซึ่งจับคู่กันติด (การตั้ง mode trunk ก็สมเหตุสมผลสำหรับลิงก์ระหว่างสวิตช์ที่ต้องขนหลาย VLAN)\n\n❌ ทำไมข้ออื่นผิด:\nB. passive ทั้งสองฝั่ง ไม่มีใครส่ง LACP ออกไปก่อน แชนแนลจึงไม่มีวันเกิด — เป็นกับดักหลักของข้อนี้ ⭐\nC. desirable เป็นโหมดของ PAgP ซึ่งเป็นกรรมสิทธิ์ Cisco ไม่ใช่ LACP ตามที่โจทย์ระบุ\nD. mode on คือ static EtherChannel ไม่มีการเจรจา จึงไม่ใช่ LACP\n\n📗 จำไว้สอบ: คอนฟิกเดียวกันสองฝั่ง → ต้องเลือกโหมดที่จับคู่กับตัวเองได้ = active+active หรือ desirable+desirable หรือ on+on',
  },
  {
    id: 281,
    kind: 'single',
    prompt: 'Which switching concept is used to create separate broadcast domains?',
    options: [
      { key: 'A', text: 'STP' },
      { key: 'B', text: 'VTP' },
      { key: 'C', text: 'VLAN' },
      { key: 'D', text: 'CSMA/CD' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — อุปกรณ์/เทคโนโลยีอะไรแบ่งโดเมนอะไร\nCollision domain (โดเมนการชน)\n• ฮับ = ทุกพอร์ตอยู่โดเมนเดียวกัน\n• สวิตช์ = แยกทุกพอร์ตเป็นคนละ collision domain ⭐\nBroadcast domain (โดเมนกระจายสัญญาณ)\n• สวิตช์ธรรมดา = ทั้งเครื่องเป็น broadcast domain เดียว\n• VLAN = แบ่งสวิตช์ตัวเดียวออกเป็นหลาย broadcast domain ⭐\n• เราเตอร์ = แยก broadcast domain ตามอินเทอร์เฟซ\n\nสูตรที่ควรจำ: 1 VLAN = 1 broadcast domain = 1 ซับเน็ต IP\n\n✅ ทำไม C ถูก: VLAN คือการแบ่งสวิตช์ทางตรรกะออกเป็นหลายกลุ่ม เฟรม broadcast ที่เกิดใน VLAN หนึ่งจะไม่ข้ามไปอีก VLAN — จึงเป็นการสร้าง broadcast domain แยกกันโดยไม่ต้องซื้อสวิตช์เพิ่ม\n\n❌ ทำไมข้ออื่นผิด:\nA. STP ป้องกันลูปโดยการบล็อกพอร์ตส่วนเกิน ไม่ได้แบ่งโดเมนใด ๆ\nB. VTP แค่ซิงก์รายชื่อ VLAN ระหว่างสวิตช์ — ตัวที่สร้างโดเมนคือ VLAN เอง VTP เป็นเพียงเครื่องมือช่วยจัดการ (ตัวลวงที่คนพลาดบ่อย)\nD. CSMA/CD เป็นกลไกจัดการการชนของสัญญาณในอีเทอร์เน็ตแบบ half-duplex เกี่ยวกับ collision domain ไม่ใช่ broadcast domain\n\n📗 จำไว้สอบ: สวิตช์แยก collision domain • VLAN และเราเตอร์แยก broadcast domain',
  },
  {
    id: 282,
    kind: 'single',
    image: v4q282,
    prompt: 'Refer to the exhibit. Which action must be taken so that neighboring devices rapidly discover switch Cat9300?',
    options: [
      { key: 'A', text: 'Enable portfast on the ports that connect to neighboring devices.' },
      { key: 'B', text: 'Configure the cdp timer 10 command on switch Cat9300.' },
      { key: 'C', text: 'Configure the cdp holdtime 10 command on switch Cat9300' },
      { key: 'D', text: 'Configure the cdp timer 10 command on the neighbors of switch Cat9300' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — timer กับ holdtime ทำคนละหน้าที่\n• cdp timer <วินาที>    = "เราส่ง" CDP advertisement บ่อยแค่ไหน (ดีฟอลต์ 60) ⭐ ยิ่งถี่ เพื่อนบ้านยิ่งเจอเราเร็ว\n• cdp holdtime <วินาที> = "เพื่อนบ้านเก็บ" ข้อมูลของเราไว้นานแค่ไหนก่อนลบทิ้ง (ดีฟอลต์ 180)\n\n🔍 อ่าน exhibit\nCat9300# show cdp\nGlobal CDP information:\n    Sending CDP packets every 60 seconds     ← ค่าปัจจุบันคือดีฟอลต์\n    Sending a holdtime value of 180 seconds\n\n🔗 วิเคราะห์: ที่ 60 วินาที เพื่อนบ้านอาจต้องรอถึงหนึ่งนาทีกว่าจะได้รับ advertisement แรกและเห็น Cat9300 ในตาราง หากลด timer เหลือ 10 วินาที เพื่อนบ้านจะเห็นเราภายในไม่เกิน 10 วินาที\n\n✅ ทำไม B ถูก: การค้นพบเกิดจากอุปกรณ์ "ส่ง" advertisement ออกไป ดังนั้นถ้าต้องการให้เพื่อนบ้านค้นพบ Cat9300 เร็วขึ้น ต้องลด cdp timer บน Cat9300 ซึ่งเป็นฝั่งที่ถูกค้นพบ\n\n❌ ทำไมข้ออื่นผิด:\nA. PortFast เร่งการเข้าสถานะ forwarding ของ STP ไม่เกี่ยวกับความถี่ในการส่ง CDP\nC. holdtime 10 กลับทำให้แย่ลง — เพื่อนบ้านจะลบ Cat9300 ออกจากตารางทุก 10 วินาที ในขณะที่ advertisement ยังมาทุก 60 วินาที ผลคือรายการหายไปเกือบตลอดเวลา ⚠️\nD. การเร่ง timer ของเพื่อนบ้านทำให้ "เพื่อนบ้านถูกค้นพบเร็วขึ้น" ไม่ใช่ Cat9300 — สลับทิศทาง\n\n📗 จำไว้สอบ: อยากให้คนอื่นเห็นเราเร็ว → ลด timer ที่ "เรา" • holdtime ควรมากกว่า timer เสมอ (มาตรฐานคือ 3 เท่า)',
  },
  {
    id: 283,
    kind: 'single',
    prompt: 'What is a requirement when configuring or removing LAG on a WLC?',
    options: [
      { key: 'A', text: 'The incoming and outgoing ports for traffic flow must be specified if LAG is enabled.' },
      { key: 'B', text: 'The management interface must be reassigned if LAG is disabled' },
      { key: 'C', text: 'The controller must be rebooted after enabling or reconfiguring LAG' },
      { key: 'D', text: 'Multiple untagged interfaces on the same port must be supported' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ข้อกำหนดของ Link Aggregation (LAG) บน Cisco WLC\n1️⃣ ต้องรีบูตคอนโทรลเลอร์ทุกครั้งหลังเปิด ปิด หรือแก้ไข LAG ⭐ เพราะเป็นการเปลี่ยนโครงสร้างพอร์ตระดับล่าง\n2️⃣ WLC รองรับเฉพาะ EtherChannel แบบ static เท่านั้น ฝั่งสวิตช์จึงต้องตั้ง channel-group ... mode on (ไม่มี LACP/PAgP)\n3️⃣ เมื่อเปิด LAG ทุก dynamic interface จะแมปเข้ามัดโดยอัตโนมัติ ไม่ต้องผูกพอร์ตทีละตัว\n4️⃣ มีพอร์ตกายภาพที่ใช้งานได้เพียงพอร์ตเดียวก็ยังส่งทราฟฟิกไคลเอนต์ได้\n\n✅ ทำไม C ถูก: การรีบูตเป็นเงื่อนไขบังคับที่คู่มือ Cisco ระบุไว้ชัดเจน — ถ้าไม่รีบูต การตั้งค่า LAG จะยังไม่มีผล\n\n❌ ทำไมข้ออื่นผิด:\nA. ตรงข้ามกับจุดประสงค์ของ LAG — เมื่อเปิด LAG แล้วไม่ต้องระบุพอร์ตขาเข้า/ขาออกอีกต่อไป ระบบจัดการเองทั้งหมด\nB. ไม่จำเป็นต้องย้าย management interface เมื่อปิด LAG (อาจต้องระบุพอร์ตกายภาพให้อินเทอร์เฟซ แต่ไม่ใช่การ "reassign" ตามที่ข้อนี้อ้าง)\nD. ตรงข้าม — บนพอร์ตหนึ่งรองรับ untagged interface ได้เพียงตัวเดียว\n\n📗 จำไว้สอบ: LAG บน WLC = static (mode on) + ต้องรีบูต + พอร์ตเดียวที่รอดก็ยังทำงานได้',
  },
  {
    id: 284,
    kind: 'drag',
    image: v4q284,
    prompt:
      'Drag and drop the threat-mitigation techniques from the left onto the types of threat or attack they mitigate on the right.',
    categories: [
      { name: '802.1q double tagging', items: ['configure a VLAN access control list'] },
      { name: 'ARP spoofing', items: ['configure the dynamic ARP inspection feature'] },
      { name: 'unwanted superior BPDUs', items: ['configure the root guard feature'] },
      { name: 'unwanted BPDUs on PortFast enabled interfaces', items: ['configure the BPDU guard feature'] },
    ],
    explanation:
      '📘 แนวคิด — จับคู่ภัยคุกคามกับเครื่องมือป้องกันที่ตรงจุด\n\n• 802.1Q double tagging (VLAN hopping) → VLAN ACL (VACL)\n  ผู้โจมตีใส่แท็กสองชั้น: ชั้นนอกเป็น native VLAN (ถูกถอดที่สวิตช์แรก) ชั้นในเป็น VLAN เป้าหมาย ทำให้เฟรมกระโดดข้าม VLAN ได้\n  ป้องกัน: VACL กรองทราฟฟิกภายใน VLAN + ย้าย native VLAN ไปเป็นหมายเลขที่ไม่ได้ใช้ + ไม่ใช้ VLAN 1\n\n• ARP spoofing → Dynamic ARP Inspection (DAI)\n  ผู้โจมตีปลอมข้อความ ARP ให้เหยื่อเชื่อว่าตนคือ gateway เพื่อดักข้อมูล (man-in-the-middle)\n  ป้องกัน: DAI ตรวจทุกข้อความ ARP เทียบกับตาราง DHCP snooping binding ถ้าไม่ตรงจะทิ้งทันที\n\n• Unwanted superior BPDUs → Root Guard\n  สวิตช์ที่ไม่พึงประสงค์ส่ง BPDU ที่ดีกว่าเข้ามาแล้วแย่งตำแหน่ง root bridge ทำให้ทราฟฟิกไหลผิดทาง\n  ป้องกัน: Root Guard บนพอร์ตที่หันไป downstream — ถ้าเจอ superior BPDU จะสั่งพอร์ตเป็น root-inconsistent (บล็อกชั่วคราว) แล้วฟื้นเองเมื่อ BPDU หยุด\n\n• Unwanted BPDUs on PortFast enabled interfaces → BPDU Guard\n  มีคนเอาสวิตช์มาเสียบพอร์ตที่ควรต่อแค่ PC ทำให้เสี่ยงเกิดลูป\n  ป้องกัน: BPDU Guard ปิดพอร์ตเป็น err-disabled ทันทีที่ได้รับ BPDU\n\n💡 แยก Root Guard กับ BPDU Guard: superior BPDU → Root Guard (บล็อก ฟื้นเอง) • BPDU ใด ๆ บนพอร์ต PortFast → BPDU Guard (err-disable ต้องกู้เอง)\n\n📗 จำไว้สอบ: DAI ต้องพึ่งตาราง binding จาก DHCP Snooping จึงต้องเปิด DHCP Snooping ก่อนเสมอ',
  },
  {
    id: 285,
    kind: 'single',
    prompt:
      'Which type of port is used to connect the wired network when an autonomous AP maps two VLANs to its WLANs?',
    options: [
      { key: 'A', text: 'access' },
      { key: 'B', text: 'LAG' },
      { key: 'C', text: 'trunk' },
      { key: 'D', text: 'EtherChannel' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Autonomous AP ที่มีหลาย SSID ต้องส่งหลาย VLAN ลงสายเส้นเดียว\nAutonomous AP ทำงานเองโดยไม่มี WLC จึงต้อง "แตกแท็ก" VLAN เองที่ตัวมัน\n• SSID Corp  → VLAN 10\n• SSID Guest → VLAN 20\nเฟรมของแต่ละ SSID จะถูกติดแท็ก 802.1Q ตาม VLAN ที่แมปไว้ แล้วส่งออกพอร์ตอีเทอร์เน็ตเส้นเดียวกัน\n→ สวิตช์ฝั่งรับต้องเป็น trunk เพื่ออ่านแท็กและแยก VLAN ให้ถูกต้อง ⭐\n\n🔧 คอนฟิกฝั่งสวิตช์\ninterface GigabitEthernet1/0/5\n description ** Autonomous AP **\n switchport trunk encapsulation dot1q\n switchport mode trunk\n switchport trunk allowed vlan 10,20\n switchport trunk native vlan 99\n\n💡 เทียบกับ lightweight AP: ทราฟฟิกทุก SSID ถูกห่อใน CAPWAP ส่งกลับ WLC สวิตช์เห็นแค่ VLAN เดียว → พอร์ต access ก็พอ\n\n✅ ทำไม C ถูก: การส่งมากกว่าหนึ่ง VLAN ผ่านลิงก์เส้นเดียวต้องใช้ trunk ซึ่งเป็นพอร์ตชนิดเดียวที่คงแท็ก 802.1Q ไว้\n\n❌ ทำไมข้ออื่นผิด:\nA. access port ส่งได้ VLAN เดียวและถอดแท็กทิ้ง จึงรองรับ 2 VLAN ไม่ได้\nB, D. LAG และ EtherChannel เป็นการรวมหลายสายเป็นลิงก์เดียวเพื่อเพิ่มแบนด์วิดท์/ความทนทาน ไม่ได้แก้เรื่องการแยก VLAN\n\n📗 จำไว้สอบ: autonomous AP หลาย SSID → trunk • lightweight AP (local mode) → access',
  },
  {
    id: 286,
    kind: 'single',
    prompt:
      'A network administrator needs to aggregate 4 ports into a single logical link which must negotiate layer 2 connectivity to ports on another switch. What must be configured when using active mode on both sides of the connection?',
    options: [
      { key: 'A', text: 'LLDP' },
      { key: 'B', text: 'LACP' },
      { key: 'C', text: 'Cisco vPC' },
      { key: 'D', text: '802.1q trunks' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — คำว่า "active mode" ชี้ตัวโปรโตคอลได้ทันที\nโหมดของ EtherChannel แยกตามโปรโตคอลอย่างชัดเจน\n• LACP (IEEE 802.3ad — มาตรฐานเปิด) → active / passive ⭐\n• PAgP (Cisco proprietary) → desirable / auto\n• Static → on\n\nคำว่า "active mode on both sides" จึงเป็นไปได้กับ LACP เท่านั้น และ active + active คือคู่ที่จับกันติด\n\n🔧 คอนฟิกตัวอย่าง\nSwitch(config)# interface range g0/1 - 4\nSwitch(config-if-range)# switchport mode trunk\nSwitch(config-if-range)# channel-group 1 mode active\nตรวจสอบด้วย show etherchannel summary → ต้องเห็น Po1(SU) และ Protocol = LACP\n\n✅ ทำไม B ถูก: LACP เป็นโปรโตคอลที่ใช้โหมด active และทำหน้าที่เจรจารวม 4 พอร์ตกายภาพเป็นลิงก์ตรรกะเดียว (Port-channel) พร้อมตรวจสอบว่าปลายทางพร้อมรวมจริง\n\n❌ ทำไมข้ออื่นผิด:\nA. LLDP ใช้ค้นหาเพื่อนบ้าน ไม่ได้รวมลิงก์\nC. vPC (virtual Port-Channel) เป็นเทคโนโลยีของ Nexus ที่ให้สวิตช์สองตัวรับ EtherChannel จากอุปกรณ์เดียว ไม่ใช่คำตอบของโหมด active และไม่อยู่ในขอบเขต CCNA\nD. 802.1Q ทำหน้าที่ติดแท็ก VLAN บน trunk ไม่ได้รวมพอร์ต (แม้จะใช้ร่วมกับ EtherChannel ได้ก็ตาม)\n\n📗 จำไว้สอบ: active/passive = LACP (มาตรฐาน) • desirable/auto = PAgP (Cisco) • on = static ไม่เจรจา',
  },
  {
    id: 287,
    kind: 'single',
    image: v4q287,
    prompt:
      'Refer to the exhibit. An engineer built a new L2 LACP EtherChannel between SW1 and SW2 and executed these show commands to verify the work. Which action must be taken to establish an LACP port channel?',
    options: [
      { key: 'A', text: 'Change the channel-group mode on SW1 to desirable' },
      { key: 'B', text: 'Change the channel-group mode on SW1 to active or passive' },
      { key: 'C', text: 'Change the channel-group mode on SW2 to auto' },
      { key: 'D', text: 'Configure the interface port-channel 1 command on both switches' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — โหมดต้องอยู่ตระกูลเดียวกันจึงจะจับคู่กันได้\n🔍 อ่าน exhibit\nSW1 Fa0/1 และ Fa0/2: channel-group 1 mode on      ← static ไม่เจรจา\nSW2 Fa0/1 และ Fa0/2: channel-group 1 mode active  ← LACP\nทั้งสองฝั่งตั้ง trunk และ allowed vlan 100, 200, 300 ตรงกันแล้ว ปัญหาจึงอยู่ที่โหมดล้วน ๆ\n\nตารางความเข้ากันได้\non + on          = ติด (แต่ไม่ใช่ LACP)\nactive + active  = ติด (LACP) ⭐\nactive + passive = ติด (LACP) ⭐\non + active      = ไม่ติด ✘ ← สถานการณ์ปัจจุบัน\n\n✅ ทำไม B ถูก: SW2 เป็น active อยู่แล้ว จึงต้องเปลี่ยน SW1 จาก on ให้เป็น active หรือ passive อย่างใดอย่างหนึ่ง แชนแนลจึงจะขึ้นและรายงานเป็น LACP ตามที่โจทย์ต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nA. desirable เป็น PAgP ผสมกับ active ของ LACP ไม่ได้\nC. auto ก็เป็น PAgP เช่นกัน และการเปลี่ยน SW2 ที่ตั้งถูกอยู่แล้วเป็นการแก้ผิดจุด\nD. อินเทอร์เฟซ Port-channel 1 ถูกสร้างขึ้นอัตโนมัติเมื่อสั่ง channel-group อยู่แล้ว การพิมพ์คำสั่งนี้เพิ่มไม่ได้แก้ปัญหาโหมดที่ไม่เข้ากัน\n\n📗 จำไว้สอบ: on ผสมกับ active/passive ไม่ได้ • ตรวจปัญหา EtherChannel ให้ดู show etherchannel summary แล้วเทียบโหมดสองฝั่งก่อนเสมอ',
  },
  {
    id: 288,
    kind: 'single',
    image: v4q288,
    prompt:
      'Refer to the exhibit. For security reasons, automatic neighbor discovery must be disabled on the R5 Gi0/1 interface. These tasks must be completed:\n• Disable all neighbor discovery methods on R5 interface Gi0/1\n• Permit neighbor discovery on R5 interface Gi0/2\n• Verify there are no dynamically learned neighbors on R5 interface Gi0/1\n• Display the IP address of R6\'s interface Gi0/2\n\nWhich configuration must be used?',
    options: [
      {
        key: 'A',
        text: 'int Gi0/1 / no cdp enable / exit / lldp run / no cdp run — then: sh cdp neighbor detail / sh lldp neighbor',
      },
      {
        key: 'B',
        text: 'int Gi0/1 / no cdp enable / exit / no lldp run / cdp run — then: sh cdp neighbor / sh lldp neighbor',
      },
      {
        key: 'C',
        text: 'int Gi0/1 / no cdp run / exit / lldp run / cdp enable — then: sh cdp neighbor / sh lldp neighbor',
      },
      {
        key: 'D',
        text: 'int Gi0/1 / no cdp enable / exit / no lldp run / cdp run — then: sh cdp neighbor detail / sh lldp neighbor',
      },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตรวจทีละเงื่อนไขทั้งสี่ข้อ\n🔍 อ่าน exhibit: R5 Gi0/1 หันออกอินเทอร์เน็ต (ต้องปิดการค้นหาเพื่อนบ้าน) ส่วน Gi0/2 ต่อไป R6 (ต้องเปิดไว้)\n\n1️⃣ ปิดทุกวิธีค้นหาเพื่อนบ้านบน Gi0/1\n   • no cdp enable ที่อินเทอร์เฟซ → ปิด CDP เฉพาะ Gi0/1 ✔\n   • no lldp run ที่ global → ปิด LLDP ทั้งเครื่อง ซึ่งรวมถึง Gi0/1 ✔\n   ครบทั้งสองโปรโตคอลบน Gi0/1\n2️⃣ อนุญาตให้ค้นหาเพื่อนบ้านบน Gi0/2\n   • cdp run ที่ global เปิด CDP ทั้งเครื่อง และเนื่องจากปิดเฉพาะ Gi0/1 ไว้ Gi0/2 จึงยังใช้ CDP ได้ ✔\n3️⃣ ตรวจว่าไม่มีเพื่อนบ้านบน Gi0/1 → show cdp neighbor detail จะไม่แสดงรายการใดที่มาจาก Gi0/1 ✔\n4️⃣ แสดง IP ของ R6 Gi0/2 → ต้องใช้ show cdp neighbor "detail" เพราะแบบย่อไม่แสดงคอลัมน์ IP address ⭐\n\n✅ ทำไม D ถูก: ผ่านครบทั้งสี่ข้อ โดยเฉพาะข้อ 4 ที่ต้องมีคำว่า detail จึงจะเห็น IP address ของเพื่อนบ้าน\n\n❌ ทำไมข้ออื่นผิด:\nA. สั่ง lldp run (เปิด LLDP ทั้งเครื่อง) แล้ว no cdp run — ผลคือ Gi0/1 ยังมี LLDP ทำงานอยู่ ไม่ได้ปิด "ทุกวิธี" ตามข้อ 1\nB. ใช้ show cdp neighbor แบบไม่มี detail จึงไม่เห็น IP ของ R6 ตามข้อ 4\nC. no cdp run เป็นคำสั่งระดับ global แต่ถูกพิมพ์ในโหมดอินเทอร์เฟซ (ไวยากรณ์ผิด) และยังเปิด LLDP ทั้งเครื่องซึ่งขัดกับข้อ 1\n\n📗 จำไว้สอบ: no cdp enable = ปิดรายพอร์ต • no cdp run = ปิดทั้งเครื่อง • อยากเห็น IP ของเพื่อนบ้านต้องใช้ show cdp neighbors detail หรือ show cdp entry *',
  },
  {
    id: 289,
    kind: 'multi',
    prompt: 'Which two spanning-tree states are bypassed on an interface running PortFast? (Choose two.)',
    options: [
      { key: 'A', text: 'disabled' },
      { key: 'B', text: 'listening' },
      { key: 'C', text: 'learning' },
      { key: 'D', text: 'blocking' },
      { key: 'E', text: 'forwarding' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — เส้นทางปกติของพอร์ต STP กับเส้นทางที่มี PortFast\nไม่มี PortFast (802.1D)\nblocking (20 วิ) → listening (15 วิ) → learning (15 วิ) → forwarding\n\nมี PortFast\nลิงก์ขึ้น → forwarding ทันที\nโดยข้าม listening ⭐ และ learning ⭐ ไปเลย รวมประหยัดเวลา 30 วินาที\n\nแต่ละสถานะทำอะไร\n• Blocking — ทิ้งข้อมูล ไม่เรียน MAC แต่ฟัง BPDU\n• Listening — ทิ้งข้อมูล ไม่เรียน MAC แต่ส่งและรับ BPDU เพื่อคำนวณโทโพโลยี\n• Learning — ทิ้งข้อมูล แต่เริ่มเรียน MAC address เข้าตาราง\n• Forwarding — ส่งข้อมูลและเรียน MAC ตามปกติ\n\n✅ ทำไม B + C ถูก: listening และ learning คือสองสถานะหน่วงเวลาที่ PortFast ตัดออก ทำให้พอร์ตพร้อมใช้งานทันทีที่เสียบสาย\n\n❌ ทำไมข้ออื่นผิด:\nA. disabled คือพอร์ตที่ถูก shutdown หรือใช้งานไม่ได้ ไม่ใช่สถานะระหว่างทางในการ converge\nD. blocking เป็นสถานะเริ่มต้นสั้น ๆ ที่พอร์ตทุกตัวผ่าน — PortFast มุ่งตัดสองสถานะกลางที่กินเวลา 30 วินาที\nE. forwarding คือ "ปลายทาง" ที่ PortFast พาไปถึงเร็วขึ้น ไม่ใช่สถานะที่ถูกข้าม\n\n📗 จำไว้สอบ: PortFast ข้าม listening + learning = ประหยัด 30 วินาที • ใน RSTP เรียกพอร์ตแบบนี้ว่า edge port',
  },
  {
    id: 290,
    kind: 'drag',
    image: v4q290,
    prompt: 'Drag and drop the management connection types from the left onto the definitions on the right.',
    categories: [
      { name: 'supports physical connections over a serial cable', items: ['console'] },
      { name: 'supports secure web access for management of the device', items: ['HTTPS'] },
      {
        name: 'supports encrypted access to CLI and a secure channel for data transfer',
        items: ['SSH'],
      },
      { name: 'supports clear-text connections to the controller CLI', items: ['Telnet'] },
    ],
    explanation:
      '📘 แนวคิด — ช่องทางเข้าไปจัดการอุปกรณ์มี 4 แบบ แบ่งเป็น in-band กับ out-of-band\n\n• Console (out-of-band)\n  ต่อสายอนุกรม (RJ-45 to DB-9 หรือ USB) เข้าพอร์ต console โดยตรง ⭐ physical serial cable\n  ใช้ได้แม้เครือข่ายล่มหรือยังไม่ได้คอนฟิก IP — เป็นทางเดียวที่ใช้กู้รหัสผ่านได้\n\n• Telnet (in-band, TCP 23)\n  เข้า CLI ผ่านเครือข่าย แต่ส่งทุกอย่างเป็นข้อความล้วน ⭐ clear-text รวมถึงรหัสผ่าน — ไม่ควรใช้ในงานจริง\n\n• SSH (in-band, TCP 22)\n  เข้า CLI ผ่านเครือข่ายแบบเข้ารหัสทั้งเซสชัน ⭐ encrypted access to CLI และยังใช้เป็นช่องทางโอนไฟล์ที่ปลอดภัย (SCP/SFTP)\n\n• HTTPS (in-band, TCP 443)\n  เข้าหน้าเว็บจัดการอุปกรณ์แบบเข้ารหัสด้วย TLS ⭐ secure web access (ส่วน HTTP พอร์ต 80 ไม่เข้ารหัส)\n\n💡 เทคนิคจับคู่: มีคำว่า serial/physical → console • มีคำว่า clear-text → Telnet • มีคำว่า CLI + encrypted → SSH • มีคำว่า web → HTTPS\n\n📗 จำไว้สอบ: ปิด Telnet เสมอ ใช้ SSH แทน (transport input ssh) • console คือทางรอดเดียวเมื่อเครือข่ายใช้ไม่ได้',
  },
  {
    id: 291,
    kind: 'single',
    prompt:
      'An engineer is configuring data and voice services to pass through the same port. The designated switch interface fastethernet0/1 must transmit packets using the same priority for data when they are received from the access port of the IP phone. Which configuration must be used?',
    options: [
      { key: 'A', text: 'interface fastethernet0/1 / switchport voice vlan dot1p' },
      { key: 'B', text: 'interface fastethernet0/1 / switchport priority extend cos 7' },
      { key: 'C', text: 'interface fastethernet0/1 / switchport voice vlan untagged' },
      { key: 'D', text: 'interface fastethernet0/1 / switchport priority extend trust' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — สวิตช์สั่งโทรศัพท์ให้จัดการค่า CoS ของ PC อย่างไร\nโทรศัพท์ IP ของ Cisco มีสวิตช์เล็ก ๆ ในตัว เมื่อ PC ที่เสียบด้านหลังส่งเฟรมที่มีค่า CoS มาด้วย โทรศัพท์ต้องตัดสินใจว่าจะทำอย่างไรกับค่านั้น — สวิตช์เป็นผู้สั่งผ่าน CDP\n\n• switchport priority extend trust → "เชื่อค่าเดิม" ส่งต่อค่า CoS ของ PC ไปตามที่ได้รับ ไม่แก้ไข ⭐\n• switchport priority extend cos <0-7> → "เขียนทับ" ค่า CoS ของ PC ด้วยค่าที่กำหนด (ดีฟอลต์คือเขียนทับด้วย 0)\n\n🔍 ตีความโจทย์: "must transmit packets using the same priority for data when they are received from the access port of the IP phone" — ส่งออกด้วยลำดับความสำคัญ "เดียวกันกับที่รับเข้ามา" คือไม่เปลี่ยนแปลงค่า → ตรงกับ trust\n\n✅ ทำไม D ถูก: switchport priority extend trust สั่งให้โทรศัพท์เชื่อและคงค่า CoS ที่ PC ใส่มา ทำให้แพ็กเก็ตถูกส่งต่อด้วยลำดับความสำคัญเดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. switchport voice vlan dot1p สั่งให้โทรศัพท์ส่งทราฟฟิกเสียงใน VLAN 0 พร้อมแท็ก 802.1p (ใช้เมื่อไม่ต้องการแยก voice VLAN) ไม่เกี่ยวกับ CoS ของ PC\nB. cos 7 เป็นการเขียนทับค่าของ PC ด้วย 7 ซึ่งเปลี่ยนลำดับความสำคัญ ไม่ใช่ "same priority" (7 ยังเป็นค่าที่สงวนไว้สำหรับทราฟฟิกควบคุมเครือข่ายอีกด้วย)\nC. switchport voice vlan untagged สั่งให้โทรศัพท์ส่งเสียงแบบไม่ติดแท็ก จึงไม่มีฟิลด์ CoS ให้พูดถึงเลย\n\n📗 จำไว้สอบ: trust = คงค่าเดิมของ PC • extend cos <n> = เขียนทับด้วย n • ดีฟอลต์ของโทรศัพท์คือไม่เชื่อ PC และเขียนทับเป็น 0',
  },
  {
    id: 292,
    kind: 'single',
    image: v4q292,
    prompt: 'Refer to the exhibit. Which change to the configuration on Switch2 allows the two switches to establish an EtherChannel?',
    options: [
      { key: 'A', text: 'Change the LACP mode to desirable' },
      { key: 'B', text: 'Change the protocol to PAgP and use auto mode' },
      { key: 'C', text: 'Change the LACP mode to active' },
      { key: 'D', text: 'Change the protocol to EtherChannel mode on' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — passive เจอ passive แชนแนลไม่มีวันเกิด\n🔍 อ่าน exhibit\nSwitch1# show etherchannel summary\n1  Po1(SD)  LACP  Fa0/2(I) Fa0/1(I)\nอ่านตัวอักษรสถานะ\n• (SD) = S คือ Layer 2, D คือ down ⚠️\n• (I) = individual/stand-alone พอร์ตไม่ได้เข้ามัด\nคอนฟิกทั้งสองฝั่ง\nSwitch1 Fa0/1, Fa0/2: channel-group 1 mode passive\nSwitch2 Fa0/1, Fa0/2: channel-group 1 mode passive\n\n🔗 ทำไมไม่ติด: passive แปลว่า "จะตอบก็ต่อเมื่อมีคนชวน" เมื่อทั้งสองฝั่งรอให้อีกฝ่ายเริ่ม จึงไม่มีใครส่งแพ็กเก็ต LACP ออกไปเลย แชนแนลจึงค้างที่สถานะ down ตลอดกาล\n\n✅ ทำไม C ถูก: เปลี่ยน Switch2 เป็น active ทำให้มีฝ่ายเริ่มเจรจา (active + passive = ติด) แชนแนลจะขึ้นเป็น Po1(SU) และยังคงใช้ LACP ตามเดิม\n\n❌ ทำไมข้ออื่นผิด:\nA. desirable เป็นโหมดของ PAgP จับคู่กับ passive ของ LACP ไม่ได้\nB. เปลี่ยนไป PAgP auto ก็ยังเป็นโหมดเชิงรับอีก และผสมกับ passive ฝั่ง Switch1 ไม่ได้\nD. mode on ไม่เจรจาเลย จับคู่กับ passive ไม่ได้ (on ใช้ได้เฉพาะกับ on ทั้งสองฝั่ง)\n\n📗 จำไว้สอบ: อย่างน้อยหนึ่งฝั่งต้องเป็นเชิงรุก → active (LACP) หรือ desirable (PAgP) • ตัวอักษรใน show etherchannel summary: SU = ใช้งานได้, SD = ดาวน์, (I) = พอร์ตหลุดมัด',
  },
  {
    id: 293,
    kind: 'single',
    image: v4q293,
    prompt:
      'Refer to the exhibit. An engineer must configure the interface that connects to PC1 and secure it in a way that only PC1 is allowed to use the port. No VLAN tagging can be used except for a voice VLAN. Which command sequence must be entered to configure the switch?',
    options: [
      {
        key: 'A',
        text: 'switchport mode dynamic auto / switchport port-security / switchport port-security violation restrict',
      },
      { key: 'B', text: 'switchport mode nonegotiate / switchport port-security / switchport port-security maximum 1' },
      {
        key: 'C',
        text: 'switchport mode access / switchport port-security / switchport port-security mac-address 0050.7966.6800',
      },
      {
        key: 'D',
        text: 'switchport mode dynamic desirable / switchport port-security mac-address 0050.7966.6800 / switchport port-security mac-address sticky',
      },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โจทย์ตั้งเงื่อนไขไว้สองข้อ\n1️⃣ "only PC1 is allowed to use the port" → ต้องล็อก MAC address ของ PC1 ไว้แบบเจาะจง ไม่ใช่แค่จำกัดจำนวน\n2️⃣ "No VLAN tagging can be used except for a voice VLAN" → พอร์ตต้องเป็น access ไม่ใช่ trunk หรือ dynamic\n\n🔍 อ่าน exhibit — ตาราง MAC ของ workstation\nPC 1 → 00:50:79:66:68:00\nPC 2 → 28:39:26:34:82:51\nPC 3 → 00:50:79:66:68:78\nPC 4 → 00:50:79:66:68:44\nรูปแบบที่ใช้ในคำสั่ง IOS คือ 0050.7966.6800\n\n🔧 คอนฟิกที่ถูกต้อง\ninterface <พอร์ต ที่ต่อ PC1>\n switchport mode access                                  ← เงื่อนไขข้อ 2\n switchport port-security                                ← เปิดฟีเจอร์\n switchport port-security mac-address 0050.7966.6800     ← เงื่อนไขข้อ 1\n\n✅ ทำไม C ถูก: ผ่านครบทั้งสองเงื่อนไข — ตั้งเป็น access port และผูก MAC ของ PC1 ไว้แบบตายตัว ถ้ามีเครื่องอื่นมาเสียบ พอร์ตจะเข้าสถานะ err-disabled ตามค่า violation ดีฟอลต์ (shutdown)\n\n❌ ทำไมข้ออื่นผิด:\nA. dynamic auto อาจกลายเป็น trunk ได้ ขัดกับข้อห้ามเรื่อง VLAN tagging และ violation restrict เป็นแค่การตั้งพฤติกรรมเมื่อละเมิด ไม่ได้ระบุว่าใครใช้ได้\nB. nonegotiate ไม่ได้กำหนดโหมดพอร์ต และ maximum 1 เพียงจำกัดจำนวนเป็น 1 — ใครมาเสียบก่อนก็ได้ใช้ ไม่ได้เจาะจงว่าต้องเป็น PC1 ⭐ นี่คือกับดักหลัก\nD. dynamic desirable จะพยายามเป็น trunk ขัดกับโจทย์ และไม่มีคำสั่ง switchport port-security เปิดใช้งานฟีเจอร์เลย\n\n📗 จำไว้สอบ: maximum = จำกัด "จำนวน" • mac-address <MAC> = ระบุ "ตัวตน" • sticky = เรียนรู้แล้วจำไว้อัตโนมัติ • violation ดีฟอลต์ = shutdown',
  },
  {
    id: 294,
    kind: 'single',
    prompt:
      'Which protocol must be implemented to support separate authorization and authentication solutions for wireless APs?',
    options: [
      { key: 'A', text: 'RADIUS' },
      { key: 'B', text: 'TACACS+' },
      { key: 'C', text: '802.1X' },
      { key: 'D', text: 'Kerberos' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — คำสำคัญคือ "separate authorization and authentication"\nคุณสมบัติที่แยกสอง AAA ออกจากกันได้เป็นเอกลักษณ์ของ TACACS+ เท่านั้น\n\nTACACS+\n• แยก authentication, authorization และ accounting ออกเป็นกระบวนการอิสระ ⭐\n• จึงใช้เซิร์ฟเวอร์คนละตัวสำหรับแต่ละหน้าที่ได้ เช่นยืนยันตัวตนกับ Active Directory แต่ให้สิทธิ์จากฐานข้อมูลอีกชุด\n• ใช้ TCP 49 และเข้ารหัสทั้ง payload\n\nRADIUS\n• รวม authentication กับ authorization ไว้ในข้อความ Access-Accept ข้อความเดียว จึงแยกไม่ได้\n• ใช้ UDP 1812/1813 และเข้ารหัสเฉพาะรหัสผ่าน\n\n✅ ทำไม B ถูก: เมื่อโจทย์ต้องการ "โซลูชันแยกกัน" สำหรับ authorization กับ authentication มีเพียง TACACS+ ที่ออกแบบมารองรับ ซึ่ง WLC ของ Cisco ก็รองรับ TACACS+ สำหรับการจัดการผู้ดูแลระบบ\n\n❌ ทำไมข้ออื่นผิด:\nA. RADIUS ผูกสองขั้นตอนไว้ด้วยกันโดยธรรมชาติ จึงแยกไม่ได้ (แม้จะเป็นตัวเลือกยอดนิยมสำหรับยืนยันตัวตนไคลเอนต์ไร้สายก็ตาม)\nC. 802.1X เป็น "กรอบการทำงาน" ที่ควบคุมการเข้าถึงพอร์ต ไม่ใช่โปรโตคอล AAA เอง — มันต้องเรียกใช้ RADIUS อยู่เบื้องหลัง\nD. Kerberos เป็นระบบยืนยันตัวตนด้วยตั๋ว (ticket) ในโดเมน Windows ไม่ได้ออกแบบมาสำหรับ AAA ของอุปกรณ์เครือข่าย\n\n📗 จำไว้สอบ: เห็นคำว่า separate/แยก AAA → TACACS+ • เห็นคำว่า 802.1X client authentication → RADIUS',
  },
  {
    id: 295,
    kind: 'single',
    prompt: 'Which port type supports the spanning-tree portfast command without additional configuration?',
    options: [
      { key: 'A', text: 'trunk ports' },
      { key: 'B', text: 'Layer 3 sub interfaces' },
      { key: 'C', text: 'Layer 3 main interfaces' },
      { key: 'D', text: 'access ports' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — PortFast ออกแบบมาสำหรับพอร์ตที่ต่ออุปกรณ์ปลายทาง\nคำสั่ง spanning-tree portfast (ไม่มีคำต่อท้าย) ใช้ได้ทันทีบนพอร์ต access เท่านั้น ⭐\nถ้าพิมพ์บนพอร์ต trunk IOS จะเตือนว่าคำสั่งไม่มีผล และต้องเพิ่มคำว่า trunk เข้าไปเป็น\nSwitch(config-if)# spanning-tree portfast trunk\nซึ่งเป็น "additional configuration" ตามที่โจทย์กันออกไป\n\n⚠️ คำเตือนที่ IOS แสดงเมื่อเปิด PortFast\n"%Warning: portfast should only be enabled on ports connected to a single host..."\nเพราะถ้าพอร์ตนั้นต่อกับสวิตช์อีกตัว การเข้า forwarding ทันทีจะทำให้เกิดลูปชั่วคราวได้ จึงควรเปิด BPDU Guard คู่กันเสมอ\n\n✅ ทำไม D ถูก: พอร์ต access คือพอร์ตที่ต่อ PC เซิร์ฟเวอร์หรือเครื่องพิมพ์ ซึ่งเป็นกรณีใช้งานที่ PortFast ถูกออกแบบมา จึงรับคำสั่งได้ทันทีโดยไม่ต้องเติมพารามิเตอร์ใด\n\n❌ ทำไมข้ออื่นผิด:\nA. trunk port ต้องเติมคำว่า trunk ต่อท้ายคำสั่ง จึงถือว่าต้องมีคอนฟิกเพิ่ม\nB, C. อินเทอร์เฟซ Layer 3 (routed port หรือ subinterface) ไม่รัน spanning-tree เลย เพราะ STP ทำงานที่ Layer 2 เท่านั้น\n\n📗 จำไว้สอบ: portfast บน access = ใช้ได้เลย • บน trunk = ต้องเติมคำว่า trunk • บน L3 = ไม่มี STP',
  },
  {
    id: 296,
    kind: 'multi',
    image: v4q296,
    prompt: 'Refer to the exhibit. What are two conclusions about this configuration? (Choose two.)',
    options: [
      { key: 'A', text: 'The spanning-tree mode is Rapid PVST+' },
      { key: 'B', text: 'This is the root bridge' },
      { key: 'C', text: 'The spanning-tree mode is PVST+' },
      { key: 'D', text: 'The designated port is FastEthernet 2/1' },
      { key: 'E', text: 'The root port is FastEthernet 2/1' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — อ่านสองบรรทัดสำคัญของ show spanning-tree\nบรรทัดที่ 1: "Spanning tree enabled protocol <xxx>"\n• protocol ieee → PVST+ (STP 802.1D ดั้งเดิม แยกต่อ VLAN)\n• protocol rstp → Rapid PVST+ (RSTP 802.1w แยกต่อ VLAN) ⭐\n• protocol mstp → MST\nบรรทัดที่ 2-4 ใต้ Root ID: ถ้ามี Cost และ Port แสดงว่าตัวเองไม่ใช่ root และ Port ที่ระบุคือ root port\n\n🔍 อ่าน exhibit\nSpanning tree enabled protocol rstp        → Rapid PVST+ ✔\nRoot ID Priority 32798\n        Address 0025.63e9.c800\n        Cost 19                            → ต้องจ่าย cost 19 เพื่อไปถึง root แปลว่า root อยู่ที่อื่น\n        Port 1 (FastEthernet 2/1)          → เส้นทางไป root ออกทาง Fa2/1 = root port ✔\nและหัวข้อ VLAN0030 ยืนยันว่าเป็น spanning-tree แยกต่อ VLAN\n\n✅ ทำไม A + E ถูก: คำว่า rstp บ่งบอกโหมด Rapid PVST+ (A) และบรรทัด Port ใต้ Root ID บ่งบอกว่า Fa2/1 คือ root port (E)\n\n❌ ทำไมข้ออื่นผิด:\nB. ถ้าเป็น root bridge ต้องมีข้อความ "This bridge is the root" และ Cost = 0 โดยไม่มีบรรทัด Port\nC. PVST+ จะแสดงคำว่า protocol ieee ไม่ใช่ rstp\nD. พอร์ตหนึ่งมีได้บทบาทเดียว — Fa2/1 เป็น root port แล้ว จึงเป็น designated port ไม่ได้\n\n📗 จำไว้สอบ: ieee = PVST+ • rstp = Rapid PVST+ • มีบรรทัด Cost + Port ใต้ Root ID = ไม่ใช่ root และนั่นคือ root port',
  },
  {
    id: 297,
    kind: 'single',
    prompt:
      'A Cisco engineer must configure a single switch interface to meet these requirements:\n• Accept untagged frames and place them in VLAN 20\n• Accept tagged frames in VLAN 30 when CDP detects a Cisco IP phone\n\nWhich command set must the engineer apply?',
    options: [
      {
        key: 'A',
        text: 'switchport mode dynamic desirable / switchport access vlan 20 / switchport trunk allowed vlan 30 / switchport voice vlan 30',
      },
      { key: 'B', text: 'switchport mode access / switchport access vlan 20 / switchport voice vlan 30' },
      {
        key: 'C',
        text: 'switchport mode dynamic auto / switchport trunk native vlan 20 / switchport trunk allowed vlan 30 / switchport voice vlan 30',
      },
      { key: 'D', text: 'switchport mode trunk / switchport access vlan 20 / switchport voice vlan 30' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — แปลข้อกำหนดสองข้อเป็นคำสั่ง\nข้อกำหนด 1: "Accept untagged frames and place them in VLAN 20"\n→ เฟรมไม่ติดแท็กมาจาก PC ต้องเข้า data VLAN → switchport mode access + switchport access vlan 20\nข้อกำหนด 2: "Accept tagged frames in VLAN 30 when CDP detects a Cisco IP phone"\n→ คำว่า "เมื่อ CDP ตรวจพบโทรศัพท์ Cisco" คือกลไกของ voice VLAN โดยเฉพาะ → switchport voice vlan 30\n\n🔧 คอนฟิกที่ได้\ninterface <พอร์ต>\n switchport mode access\n switchport access vlan 20      ← untagged → VLAN 20\n switchport voice vlan 30       ← สวิตช์ใช้ CDP บอกโทรศัพท์ให้ติดแท็ก VLAN 30\n\n✅ ทำไม B ถูก: กระชับและตรงข้อกำหนดทั้งสองข้อพอดี พอร์ตกลายเป็น multi-VLAN access port ที่รับเฟรมไม่ติดแท็กเข้า VLAN 20 และเฟรมติดแท็ก VLAN 30 จากโทรศัพท์\n\n❌ ทำไมข้ออื่นผิด:\nA. dynamic desirable อาจกลายเป็น trunk เต็มรูปแบบ ซึ่งเกินความจำเป็นและเปิดช่องโหว่ VLAN hopping\nC. dynamic auto + native vlan ทำให้พอร์ตเป็น trunk ซึ่งไม่ใช่รูปแบบมาตรฐานสำหรับต่อโทรศัพท์ และคำสั่ง trunk จะไปลบล้างพฤติกรรม access ที่ต้องการ\nD. คำสั่งขัดกันเอง — ตั้ง mode trunk แต่ใส่ switchport access vlan ซึ่งจะไม่มีผลใด ๆ\n\n📗 จำไว้สอบ: voice VLAN คือกลไกที่สวิตช์ "บอกโทรศัพท์ผ่าน CDP/LLDP-MED" ให้ติดแท็ก — พอร์ตยังเป็น access อยู่เสมอ',
  },
  {
    id: 298,
    kind: 'single',
    prompt: 'What does a switch use to build its MAC address table?',
    options: [
      { key: 'A', text: 'VTP' },
      { key: 'B', text: 'DTP' },
      { key: 'C', text: 'ingress traffic' },
      { key: 'D', text: 'egress traffic' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สวิตช์เรียนรู้จากเฟรมที่ "เข้ามา" เท่านั้น\nขั้นตอนการเรียนรู้ (MAC learning)\n1. เฟรมวิ่งเข้าพอร์ตหนึ่ง (ingress) ⭐\n2. สวิตช์อ่านฟิลด์ source MAC address ของเฟรมนั้น\n3. บันทึกลงตาราง CAM: MAC + พอร์ต + VLAN + เวลา\n4. ถ้าไม่มีทราฟฟิกจาก MAC นั้นภายใน 300 วินาที รายการจะถูกลบ\n\nสังเกตว่าสวิตช์ไม่เคยเรียนรู้จาก destination MAC และไม่เคยเรียนรู้จากเฟรมขาออก เพราะเฟรมขาออกไม่ได้ให้ข้อมูลใหม่ว่า "ใครอยู่ตรงไหน"\n\n✅ ทำไม C ถูก: การเรียนรู้เกิดขึ้นจากทราฟฟิกขาเข้าล้วน ๆ — นี่คือเหตุผลที่สวิตช์เพิ่งบูตจะมีตาราง MAC ว่างเปล่าจนกว่าจะมีอุปกรณ์เริ่มส่งข้อมูล\n\n❌ ทำไมข้ออื่นผิด:\nA. VTP ซิงก์ฐานข้อมูล "VLAN" ระหว่างสวิตช์ ไม่เกี่ยวกับตาราง MAC เลย และสวิตช์ไม่เคยแลกเปลี่ยนตาราง MAC กัน\nB. DTP เจรจาว่าพอร์ตจะเป็น trunk หรือ access ไม่เกี่ยวกับการเรียนรู้ MAC\nD. เฟรมขาออกถูกส่งไปตามผลการค้นหาในตารางที่มีอยู่แล้ว จึงไม่ก่อให้เกิดการเรียนรู้ใหม่\n\n📗 จำไว้สอบ: เรียนจาก source MAC ของเฟรม "ขาเข้า" • ส่งต่อโดยดู destination MAC • อายุรายการ 300 วินาที',
  },
  {
    id: 299,
    kind: 'single',
    image: v4q299,
    prompt:
      'Refer to the exhibit. The EtherChannel is configured with a speed of 1000 and duplex as full on both ends of channel group 1. What is the next step to configure the channel on switch A to respond to but not initiate LACP communication?',
    options: [
      { key: 'A', text: 'interface range gigabitethernet0/0/0-15 / channel-group 1 mode on' },
      { key: 'B', text: 'interface range gigabitethernet0/0/0-15 / channel-group 1 mode desirable' },
      { key: 'C', text: 'interface port-channel 1 / channel-group 1 mode auto' },
      { key: 'D', text: 'interface port-channel 1 / channel-group 1 mode passive' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ถอดความโจทย์เป็นโหมด\n"respond to but not initiate LACP communication" แยกได้สองส่วน\n• LACP → ตัดโหมดของ PAgP (desirable, auto) และ static (on) ออกทันที เหลือแค่ active กับ passive\n• respond but not initiate → ตอบได้แต่ไม่เริ่มเอง = เชิงรับ = passive ⭐\n\nสรุปคุณสมบัติเชิงรุก/เชิงรับ\nactive    (LACP) ส่ง LACP ออกไปชวนก่อน\npassive   (LACP) เงียบไว้ ตอบเมื่อได้รับ ⭐\ndesirable (PAgP) ส่งก่อน\nauto      (PAgP) รอ\non        ไม่ส่ง ไม่ตอบ ไม่เจรจาใด ๆ\n\n✅ ทำไม D ถูก: passive คือโหมดเดียวใน LACP ที่ตอบรับการเจรจาโดยไม่เริ่มเอง สวิตช์ A จึงรอให้ฝั่งตรงข้าม (ที่ต้องเป็น active) เป็นผู้เปิดฉาก\n\n❌ ทำไมข้ออื่นผิด:\nA. mode on ไม่ใช้ LACP เลย บังคับรวมลิงก์ทันทีโดยไม่เจรจา ขัดกับโจทย์ที่ระบุ LACP\nB. desirable เป็น PAgP และยังเป็นเชิงรุก ผิดทั้งสองประเด็น\nC. auto เป็นเชิงรับก็จริง แต่เป็นของ PAgP ไม่ใช่ LACP — เป็นกับดักที่คนตอบผิดมากที่สุด ⭐\n\n📗 จำไว้สอบ: respond only = passive (LACP) หรือ auto (PAgP) — ต้องดูก่อนว่าโจทย์ระบุโปรโตคอลไหน',
  },
  {
    id: 300,
    kind: 'single',
    prompt: 'Which command entered on a switch configured with Rapid PVST+ listens and learns for a specific time period?',
    options: [
      { key: 'A', text: 'switch(config)#spanning-tree vlan 1 priority 4096' },
      { key: 'B', text: 'switch(config)#spanning-tree vlan 1 hello-time 10' },
      { key: 'C', text: 'switch(config)#spanning-tree vlan 1 max-age 6' },
      { key: 'D', text: 'switch(config)#spanning-tree vlan 1 forward-time 20' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตัวจับเวลาสามตัวของ spanning-tree\n• hello-time (ดีฟอลต์ 2 วินาที) — root bridge ส่ง BPDU ทุกกี่วินาที\n• forward-delay / forward-time (ดีฟอลต์ 15 วินาที) — พอร์ตอยู่ในสถานะ listening นานเท่าไร และอยู่ในสถานะ learning นานเท่าไร ⭐ ตัวเดียวคุมทั้งสองช่วง\n• max-age (ดีฟอลต์ 20 วินาที) — เก็บ BPDU ที่ได้รับไว้นานแค่ไหนก่อนถือว่าข้อมูลหมดอายุแล้วคำนวณใหม่\n\n🔗 เชื่อมโยงกับโจทย์: คำว่า "listens and learns for a specific time period" ตรงกับนิยามของ forward-time พอดี — พอร์ตจะใช้เวลา 15 วินาทีใน listening แล้วอีก 15 วินาทีใน learning (รวม 30 วินาทีตามค่าดีฟอลต์)\n\n✅ ทำไม D ถูก: spanning-tree vlan 1 forward-time 20 ปรับให้แต่ละสถานะ (listening และ learning) กินเวลา 20 วินาที ซึ่งเป็นคำสั่งเดียวที่ควบคุมระยะเวลาที่พอร์ตค้างอยู่ในสองสถานะนี้\n\n❌ ทำไมข้ออื่นผิด:\nA. priority 4096 ใช้กำหนดโอกาสได้เป็น root bridge ไม่เกี่ยวกับเวลา\nB. hello-time คุมความถี่ในการส่ง BPDU ไม่ได้คุมว่าพอร์ตค้างในสถานะใดนานแค่ไหน\nC. max-age คุมอายุของข้อมูล BPDU ที่รับมา ไม่ใช่ระยะเวลาของสถานะพอร์ต\n\n📗 จำไว้สอบ: hello 2 / forward-delay 15 / max-age 20 • เวลารวมกว่าจะ forward ในแบบ 802.1D = 20 + 15 + 15 = 50 วินาที',
  },
  {
    id: 301,
    kind: 'single',
    prompt:
      'What must a network administrator consider when deciding whether to configure a new wireless network with APs in autonomous mode or APs running in cloud-based mode?',
    options: [
      {
        key: 'A',
        text: 'Autonomous mode APs are less dependent on an underlay but more complex to maintain than APs in cloud-based mode.',
      },
      {
        key: 'B',
        text: 'Cloud-based mode APs rely on underlays and are more complex to maintain than APs in autonomous mode.',
      },
      { key: 'C', text: 'Cloud-based mode APs are easy to deploy but harder to automate than APs in autonomous mode.' },
      { key: 'D', text: 'Autonomous mode APs are easy to deploy and automate than APs in cloud-based mode.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เทียบ Autonomous กับ Cloud-based ในสองมิติ: การพึ่งพาเครือข่าย และภาระการดูแล\n\nAutonomous AP\n• คอนฟิกทั้งหมดอยู่ในตัว AP เอง ⭐ ไม่ต้องพึ่งคอนโทรลเลอร์หรือการเชื่อมต่ออินเทอร์เน็ต (พึ่ง underlay น้อย)\n• แต่ต้องเข้าไปตั้งค่าและอัปเกรดทีละเครื่อง — มี 50 ตัวก็ทำ 50 รอบ ⭐ ภาระดูแลสูง\n\nCloud-based AP (เช่น Meraki)\n• ต้องมีเส้นทางไปยังคลาวด์ตลอดเวลาเพื่อจัดการ (พึ่ง underlay/อินเทอร์เน็ตมาก)\n• แต่จัดการทุกตัวพร้อมกันจากแดชบอร์ดเดียว มี zero-touch provisioning และอัปเกรดอัตโนมัติ ⭐ ภาระดูแลต่ำ\n\n✅ ทำไม A ถูก: สรุปการแลกเปลี่ยนได้ถูกทั้งสองมิติ — autonomous พึ่งพาโครงสร้างเครือข่ายน้อยกว่า แต่ดูแลยากกว่าเพราะต้องทำทีละตัว\n\n❌ ทำไมข้ออื่นผิด:\nB. กลับด้านทั้งประโยคหลัง — cloud-based ดูแลง่ายกว่า ไม่ใช่ยากกว่า\nC. ครึ่งแรกถูก (cloud ติดตั้งง่าย) แต่ครึ่งหลังผิด — การทำงานอัตโนมัติคือจุดแข็งที่สุดของ cloud-based ไม่ใช่จุดอ่อน\nD. กลับด้าน — autonomous ต้องคอนฟิกทีละตัว จึงไม่ได้ติดตั้งง่ายหรืออัตโนมัติกว่า cloud\n\n📗 จำไว้สอบ: autonomous = อิสระแต่เหนื่อย • cloud = สบายแต่ต้องมีเน็ต • lightweight/WLC = รวมศูนย์ในองค์กรของตัวเอง',
  },
  {
    id: 302,
    kind: 'single',
    prompt: 'When a switch receives a frame for an unknown destination MAC address, how is the frame handled?',
    options: [
      { key: 'A', text: 'flooded to all ports except the origination port' },
      { key: 'B', text: 'forwarded to the first available port' },
      { key: 'C', text: 'broadcast to all ports on the switch' },
      { key: 'D', text: 'inspected and dropped by the switch' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — unknown unicast flooding\nเมื่อสวิตช์ค้น destination MAC ในตาราง CAM แล้วไม่พบ มันไม่มีทางรู้ว่าปลายทางเสียบอยู่พอร์ตไหน จึงต้องส่งออก "ทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตที่รับเฟรมนั้นเข้ามา" ⭐\nเหตุผลที่ยกเว้นพอร์ตต้นทาง: อุปกรณ์ที่ส่งเฟรมมาย่อมไม่ใช่ปลายทางของเฟรมตัวเอง\n\nสามกรณีที่สวิตช์ flood\n1️⃣ Unknown unicast — ปลายทางไม่อยู่ในตาราง\n2️⃣ Broadcast — ปลายทางเป็น ffff.ffff.ffff\n3️⃣ Multicast — ปลายทางเป็น multicast MAC (เมื่อไม่ได้เปิด IGMP snooping)\n\n🔗 ผลลัพธ์ต่อเนื่อง: เมื่อเครื่องปลายทางได้รับและตอบกลับ สวิตช์จะเรียนรู้ MAC ของมันจากเฟรมตอบกลับ ครั้งต่อไปจึงส่งตรงพอร์ตเดียวโดยไม่ flood อีก\n\n✅ ทำไม A ถูก: อธิบายพฤติกรรม flooding ได้ครบถ้วน รวมถึงข้อยกเว้นพอร์ตต้นทาง\n\n❌ ทำไมข้ออื่นผิด:\nB. ไม่มีแนวคิด "พอร์ตแรกที่ว่าง" ในการสวิตช์เฟรม — สวิตช์ไม่เดาสุ่ม\nC. ผิดสองจุด: คำว่า broadcast ใช้กับ "ชนิดของเฟรม" ไม่ใช่การกระทำ และการส่ง "ทุกพอร์ตบนสวิตช์" จะข้ามขอบเขต VLAN ซึ่งผิดหลักการแยก broadcast domain ⭐\nD. การทิ้งเฟรมจะทำให้การสื่อสารครั้งแรกล้มเหลวทุกครั้ง ซึ่งไม่ใช่พฤติกรรมของสวิตช์\n\n📗 จำไว้สอบ: flood = ทุกพอร์ต "ใน VLAN เดียวกัน" ยกเว้นพอร์ตต้นทาง — ไม่ข้าม VLAN เด็ดขาด',
  },
  {
    id: 303,
    kind: 'single',
    prompt: 'Which state is bypassed in Rapid PVST+ when PortFast is enabled on a port?',
    options: [
      { key: 'A', text: 'blocking' },
      { key: 'B', text: 'forwarding' },
      { key: 'C', text: 'learning' },
      { key: 'D', text: 'discarding' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Rapid PVST+ มีเพียง 3 สถานะ\ndiscarding → learning → forwarding\n(RSTP ยุบ disabled, blocking และ listening ของ 802.1D เดิมเข้าเป็น discarding ตัวเดียว)\n\nเมื่อเปิด PortFast บนพอร์ต RSTP จะถือว่าพอร์ตนั้นเป็น "edge port" คือพอร์ตที่ต่ออุปกรณ์ปลายทาง จึงข้ามขั้นตอนกลางเข้า forwarding ทันที\n\n🔍 ในบริบทของ Rapid PVST+ สถานะที่ถูกข้ามคือ learning ⭐ เพราะ\n• discarding ไม่ใช่สถานะที่ "ถูกข้าม" — พอร์ตเริ่มต้นอยู่ที่นี่เสมอเพียงเสี้ยววินาที\n• forwarding คือปลายทางที่ต้องไปถึง ไม่ใช่สิ่งที่ข้าม\n• เหลือ learning ตัวเดียวที่เป็นสถานะหน่วงเวลาจริง ๆ (15 วินาทีตามค่า forward-delay)\n\n💡 เทียบกับ 802.1D: PortFast ข้ามทั้ง listening และ learning แต่เมื่อ RSTP ยุบ listening ไปรวมกับ discarding แล้ว จึงเหลือให้ข้ามเพียง learning\n\n✅ ทำไม C ถูก: learning เป็นสถานะหน่วงเวลาสุดท้ายที่ยังเหลืออยู่ในโมเดล 3 สถานะของ RSTP และ PortFast ตัดมันออกไป\n\n❌ ทำไมข้ออื่นผิด:\nA. blocking ไม่มีอยู่แล้วใน RSTP (ถูกยุบเป็น discarding)\nB. forwarding คือเป้าหมาย ไม่ใช่สิ่งที่ถูกข้าม\nD. discarding เป็นสถานะเริ่มต้นของทุกพอร์ต ไม่ได้ถูกข้าม\n\n📗 จำไว้สอบ: 802.1D 5 สถานะ (disabled/blocking/listening/learning/forwarding) • RSTP 3 สถานะ (discarding/learning/forwarding)',
  },
  {
    id: 304,
    kind: 'single',
    prompt: 'What happens when a switch receives a frame with a destination MAC address that recently aged out?',
    options: [
      { key: 'A', text: 'The switch floods the frame to all ports in all VLANs except the port that received the frame.' },
      { key: 'B', text: 'The switch floods the frame to all ports in the VLAN except the port that received the frame.' },
      {
        key: 'C',
        text: 'The switch references the MAC address aging table for historical addresses on the port that received the frame.',
      },
      {
        key: 'D',
        text: 'The switch drops the frame and learns the destination MAC address again from the port that received the frame.',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — รายการที่หมดอายุแล้ว = ไม่มีอยู่ในตาราง = unknown unicast\nสวิตช์เก็บรายการใน CAM table ไว้ 300 วินาที (5 นาที) นับจากเฟรมล่าสุดที่ได้รับจาก MAC นั้น เมื่อครบเวลาแล้วไม่มีทราฟฟิกใหม่ รายการจะถูกลบทิ้ง\n\n🔗 ผลที่ตามมา: เฟรมที่ส่งไปยัง MAC ที่เพิ่งหมดอายุจะถูกจัดการเหมือน "ปลายทางที่ไม่รู้จัก" ทุกประการ คือถูก flood ออกทุกพอร์ต "ใน VLAN เดียวกัน" ยกเว้นพอร์ตต้นทาง\nเมื่อเครื่องปลายทางตอบกลับ สวิตช์ก็จะเรียนรู้ตำแหน่งของมันใหม่และกลับมาส่งตรงพอร์ตเดียวตามเดิม\n\n⚠️ เกร็ดจากงานจริง: ถ้าอายุ ARP บนเราเตอร์ (14,400 วินาที) นานกว่าอายุ MAC บนสวิตช์ (300 วินาที) มาก จะเกิด unknown unicast flooding เป็นระยะ ๆ ในเครือข่าย จึงมีคำแนะนำให้ปรับสองค่านี้ให้ใกล้เคียงกัน\n\n✅ ทำไม B ถูก: การ flood จำกัดอยู่แค่ VLAN เดียวกันเสมอ และยกเว้นพอร์ตที่รับเฟรมเข้ามา\n\n❌ ทำไมข้ออื่นผิด:\nA. คำว่า "all VLANs" ผิดหลักการพื้นฐาน — VLAN คือ broadcast domain ที่แยกจากกัน เฟรมไม่มีทางข้ามไปเองโดยไม่ผ่าน Layer 3 ⭐\nC. ไม่มีสิ่งที่เรียกว่า "MAC address aging table" ที่เก็บประวัติย้อนหลัง — รายการที่หมดอายุถูกลบทิ้งไปเลย\nD. สวิตช์ไม่ทิ้งเฟรม และเรียนรู้ได้จาก "source MAC" เท่านั้น ไม่มีทางเรียน destination MAC จากเฟรมขาเข้า\n\n📗 จำไว้สอบ: MAC aging 300 วินาที • หมดอายุแล้ว = unknown unicast = flood ใน VLAN นั้น',
  },
  {
    id: 305,
    kind: 'single',
    prompt: 'What is a function of store-and-forward switching?',
    options: [
      { key: 'A', text: 'It reduces latency by eliminating error checking within the frame' },
      { key: 'B', text: 'It produces an effective level of error-free network traffic using CRCs.' },
      { key: 'C', text: 'It buffers frames and forwards regardless of errors within the frames.' },
      { key: 'D', text: 'It forwards a frame by checking only the destination MAC address' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — วิธีสวิตช์เฟรม 3 แบบ\n• Store-and-forward — รับเฟรมเข้ามาทั้งเฟรม เก็บลงบัฟเฟอร์ คำนวณ CRC เทียบกับฟิลด์ FCS ถ้าไม่ตรงจะทิ้งเฟรมนั้นทันที ⭐\n  ข้อดี: ไม่ปล่อยเฟรมเสียหายออกไปรบกวนเครือข่าย / ข้อเสีย: หน่วงเวลามากที่สุด\n  เป็นวิธีดีฟอลต์ของสวิตช์ Cisco ยุคใหม่ และจำเป็นเมื่อต้องเปลี่ยนความเร็วสื่อหรือทำ QoS\n• Cut-through — อ่านแค่ 6 ไบต์แรก (destination MAC) แล้วส่งต่อทันที เร็วที่สุดแต่ปล่อยเฟรมเสียผ่านไปด้วย\n• Fragment-free — อ่าน 64 ไบต์แรกก่อนส่ง เป็นทางสายกลาง เพราะการชนกัน (collision) ส่วนใหญ่เกิดใน 64 ไบต์แรก\n\n✅ ทำไม B ถูก: หัวใจของ store-and-forward คือการตรวจ CRC/FCS ทุกเฟรมก่อนส่งต่อ ทำให้เฟรมที่ผิดพลาดถูกกรองทิ้ง เครือข่ายจึงมีแต่ทราฟฟิกที่ปลอดข้อผิดพลาด\n\n❌ ทำไมข้ออื่นผิด:\nA. บรรยายถึง cut-through ซึ่งลดความหน่วงโดยยอมข้ามการตรวจสอบข้อผิดพลาด\nC. ขัดแย้งในตัวเอง — บัฟเฟอร์เต็มเฟรมก็เพื่อ "ตรวจ" ข้อผิดพลาด ไม่ใช่เพื่อเมินมัน\nD. การดูแค่ destination MAC คือพฤติกรรมของ cut-through\n\n📗 จำไว้สอบ: store-and-forward = ทั้งเฟรม + ตรวจ CRC (ช้าแต่สะอาด) • cut-through = 6 ไบต์แรก (เร็วแต่ปล่อยขยะ) • fragment-free = 64 ไบต์แรก',
  },
  {
    id: 306,
    kind: 'single',
    image: v4q306,
    prompt:
      'Refer to the exhibit. Switch AccSw1 has just been added to the network along with PC2. All VLANs have been implemented on AccSw2. How must the ports on AccSw2 be configured to establish Layer 2 connectivity between PC1 and PC2?',
    options: [
      {
        key: 'A',
        text: 'interface GigabitEthernet1/2 / switchport mode access / switchport access vlan 2 !! interface GigabitEthernet1/24 / switchport mode trunk',
      },
      {
        key: 'B',
        text: 'interface GigabitEthernet1/1 / switchport mode access / switchport access vlan 11 !! interface GigabitEthernet1/24 / switchport mode trunk',
      },
      {
        key: 'C',
        text: 'interface GigabitEthernet1/24 / switchport mode trunk / switchport trunk allowed vlan 11, 12 !! interface GigabitEthernet1/1 / switchport access vlan 11',
      },
      {
        key: 'D',
        text: 'interface GigabitEthernet1/2 / switchport mode access / switchport access vlan 12 !! interface GigabitEthernet1/24 / switchport mode trunk switchport trunk allowed vlan 11, 12',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สอง PC จะคุยกันที่ Layer 2 ได้ต้องอยู่ VLAN เดียวกัน และลิงก์ระหว่างสวิตช์ต้องเป็น trunk\n\n🔍 อ่าน exhibit\nStaff PC1 = 10.0.1.11/24 ต่อ AccSw1 พอร์ต g1/1\nStaff PC2 = 10.0.1.12/24 ต่อ AccSw2 พอร์ต g1/1\nลิงก์ระหว่างสวิตช์ = g1/24\nจากผลลัพธ์ show vlan:\n  VLAN 2  IT-Support → Fa0/1\n  VLAN 3  Servers   → Fa0/2\n  VLAN 11 Staff     → Gi1/1 ⭐\n  VLAN 12 Guests    → Gi1/2\nทั้งสองเครื่องชื่อ "Staff" และอยู่ซับเน็ต 10.0.1.0/24 เดียวกัน → ต้องอยู่ VLAN 11\n\n🔧 สิ่งที่ต้องคอนฟิกบน AccSw2\n• Gi1/1 → access port ใน VLAN 11 (ให้ PC2 เข้ากลุ่ม Staff)\n• Gi1/24 → trunk (ให้ VLAN 11 ข้ามไปหา AccSw1 ได้)\n\n✅ ทำไม B ถูก: ตั้งพอร์ตที่ต่อ PC2 (Gi1/1) เป็น access VLAN 11 ตรงกับ VLAN ของ PC1 และตั้ง Gi1/24 เป็น trunk เพื่อขน VLAN ข้ามสวิตช์ ครบทั้งสองเงื่อนไข\n\n❌ ทำไมข้ออื่นผิด:\nA. คอนฟิก Gi1/2 ซึ่งไม่ใช่พอร์ตของ PC2 และใส่ VLAN 2 (IT-Support) ผิดทั้งพอร์ตและ VLAN\nC. ใส่ VLAN 11 บน Gi1/1 ถูก แต่ลืมสั่ง switchport mode access และการจำกัด allowed vlan 11,12 ก็ตัด VLAN อื่นที่อาจใช้อยู่ออก\nD. คอนฟิกผิดพอร์ต (Gi1/2) และผิด VLAN (12 = Guests) PC2 จะไปอยู่กลุ่มแขกแทนที่จะเป็น Staff\n\n📗 จำไว้สอบ: อ่าน show vlan เพื่อดูว่าพอร์ตไหนอยู่ VLAN ไหน แล้วจับคู่กับซับเน็ต IP ของโฮสต์เสมอ',
  },
  {
    id: 307,
    kind: 'single',
    image: v4q307,
    prompt:
      'Refer to the exhibit. A network engineer must update the configuration on Switch2 so that it sends LLDP packets every minute and the information sent via LLDP is refreshed every 3 minutes. Which configuration must the engineer apply?',
    options: [
      { key: 'A', text: 'Switch2(config)#lldp timer 60 / Switch2(config)#lldp tlv-select 180' },
      { key: 'B', text: 'Switch2(config)#lldp timer 60 / Switch2(config)#lldp holdtime 180' },
      { key: 'C', text: 'Switch2(config)#lldp timer 1 / Switch2(config)#lldp holdtime 3' },
      { key: 'D', text: 'Switch2(config)#lldp timer 1 / Switch2(config)#lldp tlv-select 3' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — แปลงหน่วยเวลาให้ถูกก่อนเลือกคำสั่ง\nคำสั่ง LLDP ทุกตัว "รับค่าเป็นวินาที" ไม่ใช่นาที ⭐\n• lldp timer <วินาที>    = ส่ง advertisement ทุกกี่วินาที (ดีฟอลต์ 30)\n• lldp holdtime <วินาที> = เพื่อนบ้านเก็บข้อมูลเราไว้นานแค่ไหน (ดีฟอลต์ 120)\n• lldp reinit <วินาที>   = หน่วงก่อนเริ่ม LLDP ใหม่บนอินเทอร์เฟซ (ดีฟอลต์ 2)\n\n🔢 แปลงจากโจทย์\n• "every minute" = 1 นาที = 60 วินาที → lldp timer 60\n• "refreshed every 3 minutes" = 3 นาที = 180 วินาที → lldp holdtime 180\n\n🔍 อ่าน exhibit (ค่าปัจจุบัน)\nLLDP advertisements are sent every 30 seconds\nLLDP hold time advertised is 120 seconds\nLLDP interface reinitialisation delay is 2 seconds\nทั้งหมดเป็นค่าดีฟอลต์ จึงต้องแก้สองบรรทัดแรก\n\n✅ ทำไม B ถูก: ใช้คำสั่งถูกตัว (timer คู่กับ holdtime) และแปลงหน่วยถูกต้อง (60 และ 180 วินาที) อีกทั้งยังคงสัดส่วน holdtime = 3 เท่าของ timer ตามมาตรฐาน\n\n❌ ทำไมข้ออื่นผิด:\nA. lldp tlv-select ใช้เปิด/ปิด TLV รายชิ้น ไม่ใช่คำสั่งตั้งเวลา และไม่รับค่าตัวเลข\nC. ใส่ 1 และ 3 ราวกับหน่วยเป็นนาที — ผลจริงคือส่งทุก 1 วินาทีและ holdtime 3 วินาที ซึ่งถี่จนสิ้นเปลืองทรัพยากร\nD. ผิดทั้งหน่วยและผิดคำสั่งตัวที่สอง\n\n📗 จำไว้สอบ: LLDP ทุกค่าเป็นวินาที • holdtime ควรเป็น 3 เท่าของ timer • CDP ก็ใช้สัดส่วนเดียวกัน (60/180)',
  },
  {
    id: 308,
    kind: 'single',
    image: v4q308,
    prompt:
      'Refer to the exhibit. Switch A is newly configured. All VLANs are present in the VLAN database. The IP phone and PC A on Gi0/1 must be configured for the appropriate VLANs to establish connectivity between the PCs. Which command set fulfills the requirement?',
    options: [
      {
        key: 'A',
        text: 'switchport mode access / switchport access vlan 50 / switchport voice vlan 51',
      },
      {
        key: 'B',
        text: 'switchport mode trunk / switchport trunk allowed vlan add 50, 51 / switchport voice vlan dot1p',
      },
      { key: 'C', text: 'switchport mode trunk / switchport trunk allowed vlan 50, 51 / mls qos trust cos' },
      { key: 'D', text: 'switchport mode access / switchport access vlan 50 / switchport voice vlan untagged' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — รูปแบบมาตรฐานของพอร์ตที่ต่อโทรศัพท์ + PC\n🔍 อ่าน exhibit\nData VLAN 50, Voice VLAN 51\nSwitch A พอร์ต G0/1 → โทรศัพท์ → PC A (ต่อพ่วงหลังโทรศัพท์)\nฝั่งตรงข้าม Switch B ก็มีโครงสร้างเดียวกันเพื่อให้ PC A คุยกับ PC B ได้\n\n🔧 คอนฟิกที่ถูกต้อง\ninterface GigabitEthernet0/1\n switchport mode access\n switchport access vlan 50      ← PC A ส่งเฟรมไม่ติดแท็ก → เข้า VLAN 50\n switchport voice vlan 51       ← สวิตช์ใช้ CDP สั่งโทรศัพท์ให้ติดแท็ก VLAN 51\n\n💡 ทำไมไม่ใช้ trunk: พอร์ตแบบนี้เรียกว่า multi-VLAN access port สวิตช์ยอมรับเฟรมติดแท็กเฉพาะจาก voice VLAN เท่านั้น จึงปลอดภัยกว่า trunk เต็มรูปแบบซึ่งเปิดช่องให้ VLAN hopping\n\n✅ ทำไม A ถูก: ตรงตามรูปแบบมาตรฐานทุกบรรทัด PC A เข้า VLAN 50 และโทรศัพท์เข้า VLAN 51 ทำให้ PC A กับ PC B ที่อยู่ VLAN 50 เหมือนกันสื่อสารกันได้\n\n❌ ทำไมข้ออื่นผิด:\nB. voice vlan dot1p สั่งให้โทรศัพท์ใช้ VLAN 0 พร้อมแท็ก priority ซึ่งขัดกับความต้องการที่ให้เสียงอยู่ VLAN 51 และการทำ trunk ไปหาโทรศัพท์ไม่ใช่แนวปฏิบัติมาตรฐาน\nC. ไม่มีคำสั่ง voice vlan เลย โทรศัพท์จะไม่ได้รับคำสั่งให้ติดแท็ก VLAN 51 (ส่วน mls qos trust cos เป็นเรื่อง QoS คนละประเด็น)\nD. voice vlan untagged สั่งให้เสียงวิ่งแบบไม่ติดแท็ก ผลคือเสียงกับข้อมูลปนกันใน VLAN 50 ไม่ได้แยกไป VLAN 51 ตามที่ต้องการ\n\n📗 จำไว้สอบ: access + access vlan (data) + voice vlan (voice) = สูตรตายตัวของพอร์ตโทรศัพท์',
  },
  {
    id: 309,
    kind: 'single',
    image: v4q309,
    prompt:
      'Refer to the exhibit. Two new switches are being installed. The remote monitoring team uses the support network to monitor both switches. Which configuration is the next step to establish a Layer 2 connection between the two PCs?',
    options: [
      {
        key: 'A',
        text: 'SwitchA: interface Gi0/1 / switchport access vlan 500 — SwitchB: interface Gi0/1 / switchport access vlan 500',
      },
      {
        key: 'B',
        text: 'SwitchA: interface Gi0/1 / switchport mode trunk — SwitchB: interface Gi0/1 / switchport mode trunk',
      },
      {
        key: 'C',
        text: 'SwitchA: interface Gi0/0 / switchport trunk allowed vlan 500, 550 — SwitchB: interface Gi0/0 / switchport trunk allowed vlan 500, 550',
      },
      {
        key: 'D',
        text: 'SwitchA: interface Gi0/0 / spanning-tree portfast / spanning-tree bpduguard enable — SwitchB: interface Gi0/0 / spanning-tree portfast / spanning-tree bpduguard enable',
      },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ตรวจว่าอะไรทำไปแล้ว และอะไรยังขาด\n🔍 อ่าน exhibit — คอนฟิกที่มีอยู่ (เหมือนกันทั้งสองสวิตช์)\nvlan 500 name sales        ← VLAN ถูกสร้างแล้ว\nvlan 550 name support      ← VLAN ถูกสร้างแล้ว\ninterface Gi0/0\n switchport mode trunk     ← ลิงก์ระหว่างสวิตช์เป็น trunk แล้ว ✔\ninterface Gi0/1\n switchport mode access    ← ตั้งเป็น access แล้ว\n spanning-tree portfast\n spanning-tree bpduguard enable\n                           ← แต่ "ไม่มี" switchport access vlan ⚠️\n\n🔗 วิเคราะห์: Sales PC A และ Sales PC B ต่ออยู่ที่ Gi0/1 ของแต่ละสวิตช์ แต่พอร์ตยังไม่ได้ถูกกำหนด VLAN จึงตกอยู่ใน VLAN 1 ซึ่งไม่ใช่ VLAN sales ที่ต้องการ\n\n✅ ทำไม A ถูก: เติมคำสั่ง switchport access vlan 500 ให้พอร์ต Gi0/1 ทั้งสองฝั่ง PC ทั้งคู่จึงเข้า VLAN 500 (sales) และเมื่อ trunk บน Gi0/0 พร้อมอยู่แล้ว การสื่อสาร Layer 2 ระหว่างสองเครื่องก็สำเร็จ\n\n❌ ทำไมข้ออื่นผิด:\nB. Gi0/1 ต่อกับ PC ธรรมดา การเปลี่ยนเป็น trunk ไม่เหมาะสมและไม่ได้แก้ปัญหาเรื่อง VLAN\nC. Gi0/0 เป็น trunk อยู่แล้วและโดยดีฟอลต์อนุญาตทุก VLAN — การจำกัดเป็น 500, 550 ไม่ใช่ขั้นตอนที่ขาดหายและไม่ทำให้ PC เชื่อมต่อกันได้\nD. PortFast และ BPDU Guard ถูกตั้งไว้แล้วบน Gi0/1 อีกทั้งการเอาไปใส่บน Gi0/0 ซึ่งเป็น trunk ระหว่างสวิตช์เป็นเรื่องอันตราย จะทำให้พอร์ตถูก err-disable ทันทีที่ได้รับ BPDU ⚠️\n\n📗 จำไว้สอบ: switchport mode access เพียงอย่างเดียวไม่พอ ต้องมี switchport access vlan <id> ด้วย ไม่งั้นพอร์ตอยู่ VLAN 1',
  },
  {
    id: 310,
    kind: 'single',
    image: v4q310,
    prompt:
      'Refer to the exhibit. An engineer is configuring a new Cisco switch, NewSW, to replace SW2. The details have been provided:\n• Switches SW1 and SW2 are third-party devices without support for trunk ports.\n• The existing connections must be maintained between PC1, PC2, and PC3.\n• Allow the switch to pass traffic from future VLAN 10.\n\nWhich configuration must be applied?',
    options: [
      {
        key: 'A',
        text: 'interface f0/0 / switchport mode trunk / switchport trunk native vlan 10 / switchport trunk native vlan 10',
      },
      {
        key: 'B',
        text: 'interface f0/0 / switchport mode access / switchport trunk allowed vlan 2, 10 / switchport trunk native vlan 2',
      },
      {
        key: 'C',
        text: 'interface f0/0 / switchport mode access / switchport trunk allowed vlan 2, 10 / switchport trunk native vlan 10',
      },
      {
        key: 'D',
        text: 'interface f0/0 / switchport mode trunk / switchport trunk allowed vlan 2, 10 / switchport trunk native vlan 2',
      },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เชื่อมกับสวิตช์ที่ไม่รองรับ trunk ต้องใช้ native VLAN เป็นสะพาน\n🔍 อ่าน exhibit\nSW1#show interface FastEthernet0/0\n switchport access vlan 2\n switchport mode access          ← SW1 ส่งเฟรมออกมา "ไม่ติดแท็ก" ใน VLAN 2\nPC ทั้งหมดอยู่ VLAN 2 และมีแผนจะเพิ่ม VLAN 10 ในอนาคต\n\n🔗 ต้องได้อะไรบ้าง\n1️⃣ ต้องรับเฟรมไม่ติดแท็กจาก SW1 เข้า VLAN 2 → ตั้ง native vlan 2 ⭐\n2️⃣ ต้องเตรียมรองรับ VLAN 10 ในอนาคต → ต้องเป็น trunk และอนุญาต VLAN 2 กับ 10\n\n💡 ทำไม trunk ถึงใช้ได้ทั้งที่ SW1 ไม่รองรับ: บน 802.1Q ทราฟฟิกของ native VLAN วิ่งแบบไม่ติดแท็ก ดังนั้นฝั่ง SW1 ที่เป็น access port ก็ยังรับส่งได้ตามปกติ ขณะที่ VLAN 10 ในอนาคตจะวิ่งแบบติดแท็กบนสายเส้นเดียวกัน\n\n✅ ทำไม D ถูก: ตั้ง mode trunk (รองรับหลาย VLAN), อนุญาต VLAN 2 และ 10, และกำหนด native vlan 2 ให้เข้ากันได้กับ access port ของ SW1 — ครบทั้งสามข้อกำหนด\n\n❌ ทำไมข้ออื่นผิด:\nA. ตั้ง native vlan 10 ซ้ำสองบรรทัดและไม่มี allowed vlan → เฟรมไม่ติดแท็กจาก SW1 (ซึ่งเป็นของ VLAN 2) จะถูกจัดเข้า VLAN 10 ผิดวง PC ขาดการเชื่อมต่อทันที\nB, C. ตั้ง mode access ทำให้คำสั่ง trunk ทั้งหมดไม่มีผล พอร์ตรองรับได้แค่ VLAN เดียว จึงขนทราฟฟิก VLAN 10 ในอนาคตไม่ได้\n\n📗 จำไว้สอบ: trunk คุยกับ access port ได้ผ่าน native VLAN — ตั้ง native ให้ตรงกับ access vlan ของอีกฝั่งเสมอ',
  },
  {
    id: 311,
    kind: 'single',
    prompt:
      'Which WLC interface provides out-of-band management in the Cisco Unified Wireless Network Architecture?',
    options: [
      { key: 'A', text: 'AP-Manager' },
      { key: 'B', text: 'service port' },
      { key: 'C', text: 'dynamic' },
      { key: 'D', text: 'virtual' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — อินเทอร์เฟซบน WLC มี 5 ชนิด แต่ละชนิดมีหน้าที่เฉพาะ\n• Management — ใช้จัดการ WLC แบบ in-band (SSH/HTTPS/SNMP) และเป็นปลายทางที่ AP ใช้ join ผ่าน CAPWAP\n• Service port — พอร์ตกายภาพแยกต่างหาก (มักชื่อ SP) สำหรับจัดการ "นอกแถบ" (out-of-band) ⭐ ไม่รองรับ VLAN tagging ไม่มี default gateway ของตัวเอง และใช้เมื่อเครือข่ายหลักมีปัญหาหรือตอนกู้ระบบ\n• AP-Manager — ใช้เป็นต้นทางของอุโมงค์ CAPWAP ไปยัง AP (บน WLC รุ่นใหม่รวมเข้ากับ management แล้ว)\n• Dynamic — เทียบเท่า SVI แมป WLAN เข้ากับ VLAN ของผู้ใช้\n• Virtual — IP ปลอม (เช่น 192.0.2.1) ใช้ทำ mobility, DHCP relay และหน้า web authentication\n\n✅ ทำไม B ถูก: service port เป็นพอร์ตกายภาพเฉพาะที่แยกออกจากเส้นทางข้อมูลปกติ จึงเป็นช่องทางจัดการแบบ out-of-band ตัวเดียวของ WLC\n\n❌ ทำไมข้ออื่นผิด:\nA. AP-Manager ทำหน้าที่สร้างอุโมงค์ไปหา AP ไม่ใช่ช่องทางจัดการตัว WLC\nC. dynamic interface เป็นทางออกของทราฟฟิกไคลเอนต์เข้าสู่ VLAN ต่าง ๆ\nD. virtual interface เป็น IP เชิงตรรกะที่ไม่ผูกกับพอร์ตกายภาพใด จึงเข้าถึงจากภายนอกไม่ได้\n\n📗 จำไว้สอบ: out-of-band = service port • in-band = management interface • virtual = IP ปลอมสำหรับ mobility/web auth',
  },
  {
    id: 312,
    kind: 'single',
    image: v4q312,
    prompt:
      'Refer to the exhibit. The network engineer is configuring a new WLAN and is told to use a setup password for authentication instead of the RADIUS servers. Which additional set of tasks must the engineer perform to complete the configuration?',
    options: [
      { key: 'A', text: 'Disable PMF / Enable PSK / Enable 802.1x' },
      { key: 'B', text: 'Select WPA Policy / Enable CCKM / Enable PSK' },
      { key: 'C', text: 'Select WPA Policy / Select WPA2 Policy / Enable FT PSK' },
      { key: 'D', text: 'Select WPA2 Policy / Disable PMF / Enable PSK' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — "setup password" = Pre-Shared Key (PSK) ไม่ใช่ RADIUS\nเมื่อไม่ใช้เซิร์ฟเวอร์ RADIUS แปลว่าเลือกโหมด Personal (WPA2-PSK) ต้องตั้งสองอย่างในหน้า Layer 2 Security\n1️⃣ ติ๊ก WPA2 Policy (พร้อม AES) เพื่อกำหนดวิธีเข้ารหัส\n2️⃣ ติ๊ก PSK ในส่วน Authentication Key Management แล้วใส่รหัสผ่าน\n\n🔍 อ่าน exhibit — สถานะปัจจุบัน\nLayer 2 Security = WPA+WPA2\nPMF = Required                    ← เป็นปัญหา\nWPA Policy ☐ / WPA2 Policy ☐      ← ยังไม่ได้ติ๊กเลย ⚠️\nAuthentication Key Management: 802.1X ☐ CCKM ☐ PSK ☐ FT 802.1X ☐ FT PSK ☐ ← ว่างทั้งหมด\n\n⚠️ เรื่อง PMF: การตั้ง PMF เป็น Required บังคับให้ไคลเอนต์ทุกเครื่องต้องรองรับ 802.11w เท่านั้น อุปกรณ์เก่าจะเชื่อมต่อไม่ได้เลย ในการตั้งค่า WPA2-PSK แบบพื้นฐานจึงต้องปิด PMF ไว้ก่อน\n\n✅ ทำไม D ถูก: ครบสามอย่างที่ยังขาด — ติ๊ก WPA2 Policy (กำหนดการเข้ารหัส), ปิด PMF (ให้ไคลเอนต์ทั่วไปเชื่อมต่อได้), และเปิด PSK (ใช้รหัสผ่านแทน RADIUS)\n\n❌ ทำไมข้ออื่นผิด:\nA. ขาดการติ๊ก WPA2 Policy และการเปิด 802.1X ขัดกับโจทย์ที่บอกว่าไม่ใช้ RADIUS ⭐\nB. WPA (v1) ใช้ TKIP ซึ่งล้าสมัยและไม่ปลอดภัย ส่วน CCKM เป็นกลไกโรมมิ่งของ Cisco ที่ต้องใช้ร่วมกับ 802.1X\nC. FT PSK เป็นเรื่องของ Fast Transition (802.11r) ซึ่งโจทย์ไม่ได้ขอ และการเปิด WPA v1 ก็ไม่เหมาะสม\n\n📗 จำไว้สอบ: ไม่มี RADIUS = PSK (Personal) • มี RADIUS = 802.1X (Enterprise) • PMF Required ตัดอุปกรณ์เก่าออกทั้งหมด',
  },
  {
    id: 313,
    kind: 'single',
    prompt:
      'Which mode must be set for APs to communicate to a Wireless LAN Controller using the Control and Provisioning of Wireless Access Points (CAPWAP) protocol?',
    options: [
      { key: 'A', text: 'route' },
      { key: 'B', text: 'bridge' },
      { key: 'C', text: 'lightweight' },
      { key: 'D', text: 'autonomous' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — CAPWAP มีอยู่ได้เฉพาะระหว่าง lightweight AP กับ WLC\nCAPWAP (RFC 5415) เป็นโปรโตคอลที่สืบทอดจาก LWAPP ใช้สร้างอุโมงค์สองเส้น\n• Control tunnel — UDP 5246 (เข้ารหัสด้วย DTLS เสมอ) ใช้ส่งคอนฟิก คำสั่ง และข้อมูล RRM\n• Data tunnel — UDP 5247 (เข้ารหัสด้วย DTLS เป็นตัวเลือก) ใช้ห่อทราฟฟิกของไคลเอนต์\n\nขั้นตอนที่ AP เข้าร่วมกับ WLC (join process)\n1. AP ได้ IP จาก DHCP\n2. ค้นหา WLC (DHCP option 43, DNS ชื่อ CISCO-CAPWAP-CONTROLLER, broadcast ในซับเน็ต หรือค่าที่บันทึกไว้)\n3. ส่ง Discovery Request → WLC ตอบ Discovery Response\n4. ส่ง Join Request → Join Response\n5. ดาวน์โหลดเฟิร์มแวร์ให้ตรงกับ WLC (ถ้าต่างจะรีบูต) แล้วรับคอนฟิก\n\n✅ ทำไม C ถูก: มีเพียง AP ในโหมด lightweight ที่ยอมมอบหน้าที่ควบคุมให้ WLC และสร้างอุโมงค์ CAPWAP ขึ้นมา\n\n❌ ทำไมข้ออื่นผิด:\nA. route ไม่ใช่โหมดของ AP\nB. bridge (mesh) เป็นโหมดย่อยที่ AP แบบ lightweight เลือกใช้ได้ แต่ไม่ใช่คำตอบของคำถามว่าอะไรทำให้ใช้ CAPWAP ได้\nD. autonomous AP ทำงานเองโดยไม่มี WLC จึงไม่ใช้ CAPWAP เลย\n\n📗 จำไว้สอบ: CAPWAP = UDP 5246 (ควบคุม) + 5247 (ข้อมูล) • ใช้ได้เฉพาะ lightweight AP • AP หา WLC ได้จาก DHCP option 43 / DNS / broadcast',
  },
  {
    id: 314,
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
      '📘 แนวคิด — ฟีเจอร์เร่งความเร็วของ STP ทั้งสามตัวแก้คนละสถานการณ์\n• PortFast — พอร์ต access เข้า forwarding ทันทีที่เสียบสาย ข้าม listening/learning ⭐ (แก้ปัญหา "เสียบแล้วรอ 30 วินาที")\n• UplinkFast — เมื่อ root port ล่ม สวิตช์ที่ชั้น access สลับไปใช้ alternate port ภายใน 1-5 วินาที (แก้ปัญหาลิงก์ตรงล่ม)\n• BackboneFast — เมื่อเกิด indirect link failure ตัดเวลารอ max age 20 วินาทีออกไป (แก้ปัญหาลิงก์ล่มที่อยู่ไกลออกไป)\n• BPDU Guard — ไม่ได้เร่งอะไร แต่ปิดพอร์ตเมื่อได้รับ BPDU\n\n✅ ทำไม A ถูก: ข้อความ "establishes a network connection immediately when it is plugged in" คือคำอธิบายของ PortFast ตรงตัว — เสียบสายแล้วใช้งานได้ทันที\n\n❌ ทำไมข้ออื่นผิด:\nB. BPDU Guard เป็นฟีเจอร์ป้องกัน ทำงานร่วมกับ PortFast แต่ไม่ได้ทำให้เชื่อมต่อเร็วขึ้น\nC. UplinkFast จัดการเหตุการณ์ "ลิงก์ที่มีอยู่ล่ม" ไม่ใช่ "เสียบสายใหม่"\nD. BackboneFast จัดการความล้มเหลวทางอ้อมในแกนกลางเครือข่าย ไม่เกี่ยวกับพอร์ตปลายทาง\n\n📗 จำไว้สอบ: PortFast = เสียบแล้วใช้ได้ทันที • UplinkFast = ลิงก์ตรงล่ม สลับเร็ว • BackboneFast = ลิงก์ทางอ้อมล่ม converge เร็ว',
  },
  {
    id: 315,
    kind: 'single',
    prompt: 'Which command on a port enters the forwarding state immediately when a PC is connected to it?',
    options: [
      { key: 'A', text: 'switch(config)#spanning-tree portfast default' },
      { key: 'B', text: 'switch(config)#spanning-tree portfast bpduguard default' },
      { key: 'C', text: 'switch(config-if)#spanning-tree portfast trunk' },
      { key: 'D', text: 'switch(config-if)#no spanning-tree portfast' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เปิด PortFast ได้สองระดับ\nระดับ global (เปิดทีเดียวทั้งเครื่อง)\nSwitch(config)# spanning-tree portfast default\n→ เปิด PortFast ให้ "ทุกพอร์ตที่อยู่โหมด access" โดยอัตโนมัติ ⭐ พอร์ต trunk ไม่ได้รับผล\nระดับ interface (เปิดทีละพอร์ต)\nSwitch(config-if)# spanning-tree portfast\n\n🔍 ตีความโจทย์: "เมื่อ PC ถูกเสียบเข้ากับพอร์ต ให้เข้าสถานะ forwarding ทันที" — พอร์ตที่ต่อ PC คือ access port ซึ่งคำสั่ง portfast default ครอบคลุมพอดี\n\n✅ ทำไม A ถูก: spanning-tree portfast default ทำให้ทุกพอร์ต access เข้า forwarding ทันทีที่ลิงก์ขึ้น จึงตอบโจทย์ "เสียบ PC แล้วใช้งานได้เลย" โดยไม่ต้องพิมพ์ทีละพอร์ต\n\n❌ ทำไมข้ออื่นผิด:\nB. spanning-tree portfast bpduguard default เปิด "BPDU Guard" ให้พอร์ตที่มี PortFast อยู่แล้ว — เป็นการเพิ่มการป้องกัน ไม่ได้เปิด PortFast เอง ⭐ กับดักหลักของข้อนี้\nC. เติมคำว่า trunk ใช้กับพอร์ต trunk ที่ต่อสวิตช์หรือเซิร์ฟเวอร์เสมือน ไม่ใช่พอร์ตที่ต่อ PC ธรรมดา\nD. no spanning-tree portfast ปิดฟีเจอร์ ทำให้พอร์ตกลับไปรอ 30 วินาทีตามเดิม — ตรงข้ามกับที่ต้องการ\n\n📗 จำไว้สอบ: portfast default = เปิด PortFast ทุก access port • portfast bpduguard default = เปิด BPDU Guard ให้พอร์ตที่มี PortFast',
  },
  {
    id: 316,
    kind: 'single',
    prompt:
      'If a switch port receives a new frame while it is actively transmitting a previous frame, how does it process the frames?',
    options: [
      { key: 'A', text: 'The new frame is delivered first, the previous frame is dropped, and a retransmission request is sent' },
      { key: 'B', text: 'The previous frame is delivered, the new frame is dropped, and a retransmission request is sent' },
      { key: 'C', text: 'The new frame is placed in a queue for transmission after the previous frame' },
      { key: 'D', text: 'The two frames are processed and delivered at the same time' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สวิตช์ใช้บัฟเฟอร์และคิวจัดการเฟรมที่มาพร้อมกัน\nพอร์ตหนึ่งส่งได้ทีละเฟรมเท่านั้น (serialization) เมื่อมีเฟรมใหม่เข้ามาระหว่างที่กำลังส่งเฟรมเดิมอยู่ สวิตช์จะ\n1. เก็บเฟรมใหม่ไว้ในบัฟเฟอร์ของพอร์ตขาออก\n2. เข้าคิวรอ (โดยดีฟอลต์เป็นแบบ FIFO — มาก่อนได้ก่อน)\n3. ส่งออกตามลำดับเมื่อพอร์ตว่าง ⭐\n\nกรณีที่คิวเต็มจริง ๆ สวิตช์จะทิ้งเฟรม (tail drop) และนับเป็นค่า output drops ซึ่งเป็นสัญญาณว่าพอร์ตถูกใช้งานหนักเกินไป — ตรวจได้จาก show interfaces\n\n💡 QoS เข้ามาเปลี่ยนลำดับได้: เมื่อเปิด QoS สวิตช์จะมีหลายคิวและจัดเฟรมสำคัญ (เช่นเสียง CoS 5 / DSCP EF) ให้ออกก่อน แทนที่จะเป็น FIFO ล้วน\n\n✅ ทำไม C ถูก: กลไกจริงคือการเข้าคิวรอในบัฟเฟอร์แล้วส่งต่อเมื่อพอร์ตว่าง ไม่มีการทิ้งเฟรมโดยไม่จำเป็น\n\n❌ ทำไมข้ออื่นผิด:\nA, B. สวิตช์ที่ชั้น 2 ไม่มีกลไก "ขอส่งใหม่" (retransmission) — เรื่องนั้นเป็นหน้าที่ของ TCP ที่ชั้น 4 บนโฮสต์ปลายทาง ⭐\nD. พอร์ตกายภาพส่งได้ทีละเฟรม เป็นไปไม่ได้ที่จะส่งสองเฟรมพร้อมกันบนสายเส้นเดียว\n\n📗 จำไว้สอบ: สวิตช์ = บัฟเฟอร์ + คิว • ไม่มี retransmission ที่ Layer 2 • คิวล้น = output drops ไม่ใช่การขอส่งซ้ำ',
  },
  {
    id: 317,
    kind: 'single',
    image: v4q317a,
    image2: v4q317b,
    prompt:
      'Refer to the exhibit. The entire MAC address table for SW1 is shown here. What does SW1 do when Br-4 sends a frame for Br-2?',
    options: [
      {
        key: 'A',
        text: 'It performs a lookup in the MAC address table for Br-4 and discards the frame due to a missing entry.',
      },
      { key: 'B', text: 'It floods the frame out of all ports except on the port where Br-2 is connected.' },
      {
        key: 'C',
        text: 'It inserts the source MAC address and port into the forwarding table and forwards the frame to Br-2.',
      },
      { key: 'D', text: 'It maps the Layer 2 MAC address for Fa0/3 to the Layer 3 IP address and forwards the frame.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — แยกให้ชัดระหว่าง "ต้นทางไม่รู้จัก" กับ "ปลายทางไม่รู้จัก"\n• ต้นทางไม่รู้จัก → สวิตช์ "เรียนรู้" เพิ่มลงตาราง (ไม่ทำให้ flood)\n• ปลายทางไม่รู้จัก → สวิตช์ "flood" ออกทุกพอร์ตใน VLAN\n\n🔍 อ่าน exhibit ทั้งสองรูป\nโทโพโลยี: Br-1=Fa0/1, Br-2=Fa0/3, Br-3=Fa0/4, Br-4=Fa0/2 ทั้งหมดอยู่ VLAN 50\nMAC address table มี 3 แถว\n  50  000c.8590.bb7d  DYNAMIC  Fa0/1   ← Br-1\n  50  010a.7a17.45bc  DYNAMIC  Fa0/3   ← Br-2 ⭐ มีอยู่แล้ว\n  50  7aa7.4041.0525  DYNAMIC  Fa0/4   ← Br-3\nไม่มีแถวของ Fa0/2 → Br-4 ยังไม่ถูกเรียนรู้\n\n🔗 ไล่เหตุการณ์เมื่อ Br-4 ส่งเฟรมหา Br-2\n1. สวิตช์อ่าน source MAC ของ Br-4 → ไม่มีในตาราง → บันทึกคู่กับ Fa0/2 (learning)\n2. ค้น destination MAC ของ Br-2 → พบที่ Fa0/3\n3. ส่งเฟรมออกทาง Fa0/3 พอร์ตเดียว ไม่ flood\n\n✅ ทำไม C ถูก: อธิบายครบทั้งสองขั้นตอน — เพิ่ม MAC ของ Br-4 ลงตารางแล้วส่งตรงไปยัง Br-2 ที่รู้จักอยู่แล้ว\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ค้นหาโดยใช้ "destination" ไม่ใช่ source และ Br-2 ก็อยู่ในตารางอยู่แล้ว จึงไม่มีการทิ้งเฟรม\nB. flood เกิดเมื่อปลายทางไม่รู้จัก แต่ Br-2 อยู่ในตารางเรียบร้อย ⭐ ตัวลวงหลัก\nD. การแมป MAC กับ IP เป็นหน้าที่ของ ARP บนอุปกรณ์ Layer 3 สวิตช์ L2 ไม่แตะเฮดเดอร์ IP\n\n📗 จำไว้สอบ: เห็นโจทย์แบบนี้ ให้เช็กว่า "ปลายทาง" อยู่ในตารางไหม — อยู่ = ส่งตรง, ไม่อยู่ = flood',
  },
  {
    id: 318,
    kind: 'single',
    prompt: 'How does MAC learning function?',
    options: [
      { key: 'A', text: 'adds unknown source MAC addresses to the CAM table' },
      { key: 'B', text: 'protects against denial of service attacks' },
      { key: 'C', text: 'populates the ARP table with the egress port' },
      { key: 'D', text: 'sends an ARP request to locate unknown destinations' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — MAC learning คือกระบวนการเชิงรับล้วน ๆ\nทุกครั้งที่เฟรมวิ่งเข้าพอร์ต สวิตช์จะ\n1. อ่านฟิลด์ source MAC address ⭐\n2. ตรวจว่ามีในตาราง CAM แล้วหรือยัง\n   • ยังไม่มี → เพิ่มรายการใหม่ (MAC + พอร์ต + VLAN)\n   • มีแล้วแต่พอร์ตเปลี่ยน → อัปเดตพอร์ตใหม่ (กรณีย้ายเครื่อง)\n   • มีแล้วพอร์ตเดิม → รีเซ็ตตัวจับเวลาอายุกลับเป็น 300 วินาที\n\n⚠️ ช่องโหว่ที่เกี่ยวข้อง: MAC flooding attack ใช้ประโยชน์จากกลไกนี้ โดยยิงเฟรมที่มี source MAC ปลอมนับพันเข้ามาจนตาราง CAM เต็ม ทำให้สวิตช์ต้อง flood ทุกอย่างและผู้โจมตีดักข้อมูลได้ — ป้องกันด้วย port security\n\n✅ ทำไม A ถูก: ใจความสำคัญของ MAC learning คือการนำ source MAC ที่ยังไม่รู้จักมาบันทึกลงตาราง CAM พร้อมพอร์ตที่รับเข้ามา\n\n❌ ทำไมข้ออื่นผิด:\nB. MAC learning ไม่ได้ป้องกันอะไรเลย ตรงกันข้าม มันคือช่องทางที่ถูกใช้โจมตีแบบ MAC flooding — ตัวที่ป้องกันคือ port security\nC. ตาราง ARP (แมป IP ↔ MAC) เป็นของโฮสต์และอุปกรณ์ Layer 3 คนละตารางกับ CAM (แมป MAC ↔ พอร์ต) ⭐\nD. สวิตช์ Layer 2 ไม่ส่ง ARP request เอง เมื่อไม่รู้จักปลายทางมันจะ flood ไม่ใช่ถามหาด้วย ARP\n\n📗 จำไว้สอบ: CAM table = MAC ↔ พอร์ต (บนสวิตช์) • ARP table = IP ↔ MAC (บนโฮสต์/เราเตอร์) — อย่าสับสน',
  },
  {
    id: 319,
    kind: 'single',
    image: v4q319,
    prompt:
      'Refer to the exhibit. An engineer is configuring an EtherChannel using LACP between Switches 1 and 2. Which configuration must be applied so that only Switch 1 sends LACP initiation packets?',
    options: [
      { key: 'A', text: 'Switch1: channel-group 1 mode on — Switch2: channel-group 1 mode active' },
      { key: 'B', text: 'Switch1: channel-group 1 mode active — Switch2: channel-group 1 mode passive' },
      { key: 'C', text: 'Switch1: channel-group 1 mode passive — Switch2: channel-group 1 mode active' },
      { key: 'D', text: 'Switch1: channel-group 1 mode on — Switch2: channel-group 1 mode passive' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ใครเป็นคน "เริ่ม" ส่ง LACP\n• active  = ส่งแพ็กเก็ต LACP ออกไปชวนเจรจาก่อน (initiator) ⭐\n• passive = ไม่ส่งก่อน รอจนได้รับ LACP จากอีกฝั่งแล้วจึงตอบ (responder) ⭐\n\n🔍 ตีความโจทย์: "only Switch 1 sends LACP initiation packets" — ให้ Switch 1 เป็นผู้เริ่มฝ่ายเดียว ส่วน Switch 2 ต้องไม่เริ่ม\n→ Switch 1 = active, Switch 2 = passive\n\n✅ ทำไม B ถูก: active + passive เป็นคู่ที่จับกันติดและมีเพียง Switch 1 เท่านั้นที่ส่งแพ็กเก็ตเริ่มเจรจา ตรงตามเงื่อนไขทุกข้อ\n\n❌ ทำไมข้ออื่นผิด:\nA. Switch 1 เป็น mode on ซึ่งไม่ส่ง LACP เลย (เป็น static) จึงขัดกับโจทย์ที่ให้ Switch 1 เป็นผู้เริ่ม และ on + active ก็จับคู่กันไม่ได้\nC. สลับบทบาท — Switch 2 กลายเป็นผู้เริ่มแทน ตรงข้ามกับที่โจทย์ต้องการ\nD. on + passive ไม่มีใครส่ง LACP เลย แชนแนลไม่มีวันขึ้น\n\n📗 จำไว้สอบ: LACP initiator = active • LACP responder = passive • active+active ก็ติด แต่จะมีสองฝ่ายที่ส่งแพ็กเก็ตเริ่มเจรจา ซึ่งขัดกับคำว่า "only"',
  },
  {
    id: 320,
    kind: 'single',
    image: v4q320a,
    image2: v4q320b,
    prompt:
      'Refer to the exhibit. The entire Marketing-SW1 MAC address table is shown here. What does the switch do when PC-4 sends a frame to PC-1?',
    options: [
      { key: 'A', text: 'It performs a lookup in the MAC address table and discards the frame due to a missing entry.' },
      { key: 'B', text: 'It maps the Layer 2 MAC address to the Layer 3 IP address and forwards the frame.' },
      { key: 'C', text: 'It inserts the source MAC address and port into the table and forwards the frame to PC-1.' },
      { key: 'D', text: 'It floods the frame out of all ports except on the port where PC-1 is connected.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สองขั้นตอนของสวิตช์: เรียนรู้จากต้นทาง แล้วส่งต่อโดยดูปลายทาง\n\n🔍 อ่าน exhibit ทั้งสองรูป\nโทโพโลยี: PC-1=Gi1/0, PC-2=Gi1/2, PC-3=Gi1/3, PC-4=Gi1/4 ทั้งหมดอยู่ VLAN 101\nMAC address table มี 3 แถว\n  101  000a.000a.000a  DYNAMIC  Gi1/0   ← PC-1 ⭐ มีอยู่แล้ว\n  101  3986.3986.3986  DYNAMIC  Gi1/2   ← PC-2\n  101  00d0.00d0.00d0  DYNAMIC  Gi1/3   ← PC-3\nไม่มีแถวของ Gi1/4 → PC-4 ยังไม่ถูกเรียนรู้\n\n🔗 ไล่เหตุการณ์เมื่อ PC-4 ส่งเฟรมหา PC-1\n1. Learning — อ่าน source MAC ของ PC-4 ยังไม่มีในตาราง จึงบันทึกคู่กับพอร์ต Gi1/4\n2. Forwarding — ค้น destination MAC ของ PC-1 พบที่ Gi1/0\n3. ส่งเฟรมออกทาง Gi1/0 พอร์ตเดียว\n\n✅ ทำไม C ถูก: ครอบคลุมทั้งสองขั้นตอนอย่างถูกต้อง — เพิ่ม MAC ต้นทางของ PC-4 พร้อมพอร์ตลงตาราง แล้วส่งเฟรมตรงไปยัง PC-1 ที่รู้จักอยู่แล้ว\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีการทิ้งเฟรม เพราะ MAC ปลายทาง (PC-1) อยู่ในตารางเรียบร้อย\nB. การแมป MAC กับ IP เป็นหน้าที่ของ ARP บนโฮสต์และอุปกรณ์ Layer 3 ไม่ใช่ของสวิตช์ L2\nD. flood จะเกิดเมื่อ "ปลายทาง" ไม่รู้จักเท่านั้น — ที่ไม่รู้จักในโจทย์นี้คือต้นทาง ซึ่งนำไปสู่การเรียนรู้ ไม่ใช่การ flood ⭐\n\n📗 จำไว้สอบ: ปลายทางอยู่ในตาราง = ส่งตรงพอร์ตเดียว • ต้นทางไม่อยู่ในตาราง = เรียนรู้เพิ่ม (ไม่เกี่ยวกับการ flood)',
  },
  {
    id: 321,
    kind: 'single',
    image: v4q321,
    prompt:
      'Refer to the exhibit. All VLANs are present in the VLAN database. Which command sequence must be applied to complete the configuration?',
    options: [
      { key: 'A', text: 'interface FastEthernet0/1 / switchport mode access / switchport voice vlan 10' },
      {
        key: 'B',
        text: 'interface FastEthernet0/1 / switchport trunk native vlan 10 / switchport trunk allowed vlan 10,15',
      },
      {
        key: 'C',
        text: 'interface FastEthernet0/1 / switchport trunk allowed vlan add 10 / vlan 10 / private-vlan isolated',
      },
      { key: 'D', text: 'interface FastEthernet0/1 / switchport mode trunk / switchport trunk allowed vlan 10,15' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ดูว่าคอนฟิกปัจจุบันมีอะไรแล้ว และขาดอะไร\n🔍 อ่าน exhibit\nData Vlan 15 (PC เสียบหลังโทรศัพท์), Voice Vlan 10 (โทรศัพท์ IP), ทั้งคู่ต่อเข้าสวิตช์ที่พอร์ต f0/1\nSW#show run\ninterface FastEthernet0/1\n switchport access vlan 15      ← มี data VLAN แล้ว\n                                ← ขาด switchport mode access และ switchport voice vlan 10 ⚠️\n\n🔧 สิ่งที่ต้องเติม\ninterface FastEthernet0/1\n switchport mode access         ← ล็อกพอร์ตให้เป็น access (กัน DTP เจรจากลายเป็น trunk)\n switchport voice vlan 10       ← สั่งให้โทรศัพท์ติดแท็ก VLAN 10 สำหรับเสียง\n\n✅ ทำไม A ถูก: เติมสองบรรทัดที่ขาดพอดี ทำให้พอร์ตกลายเป็น multi-VLAN access port — PC ส่งเฟรมไม่ติดแท็กเข้า VLAN 15 ส่วนโทรศัพท์ติดแท็ก VLAN 10 ตามที่สวิตช์แจ้งผ่าน CDP\n\n❌ ทำไมข้ออื่นผิด:\nB. ตั้ง native vlan 10 บน trunk จะทำให้ PC (ที่ส่งไม่ติดแท็ก) ตกไปอยู่ VLAN เสียงแทน ผิดวัตถุประสงค์\nC. private-vlan isolated ใช้แยกโฮสต์ภายใน VLAN เดียวกันไม่ให้คุยกัน คนละเรื่องกับ voice VLAN โดยสิ้นเชิง\nD. การทำ trunk ไปหาโทรศัพท์ไม่ใช่แนวปฏิบัติของ Cisco และคำสั่ง switchport access vlan 15 ที่มีอยู่เดิมจะไม่มีผลทันทีที่พอร์ตกลายเป็น trunk\n\n📗 จำไว้สอบ: พอร์ตโทรศัพท์ = mode access + access vlan (data) + voice vlan (voice) — จำสูตรนี้ให้ขึ้นใจ',
  },
  {
    id: 322,
    kind: 'single',
    image: v4q322,
    prompt:
      'Refer to the exhibit. Which switch becomes the root of a spanning tree for VLAN 10 if the primary switch fails and all links are of equal speed?',
    options: [
      { key: 'A', text: 'SW1' },
      { key: 'B', text: 'SW2' },
      { key: 'C', text: 'SW3' },
      { key: 'D', text: 'SW4' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โจทย์ถามหา "ตัวสำรอง" ไม่ใช่ตัวหลัก ต้องเรียงลำดับ priority ให้ครบ\n🔍 อ่านค่า Bridge ID จาก exhibit (VLAN 10)\nSW1 : 32778  0018.1843.3cb0\nSW2 : 24586  004a.13e9.3912  ⭐ ต่ำสุด → เป็น root ปัจจุบัน (primary)\nSW3 : 28682  0022.55cf.cc00  ⭐ ต่ำเป็นอันดับสอง\nSW4 : 64000  0022.66ed.a29f\n\n🔢 แกะตัวเลข priority (ค่าที่แสดง = priority ที่ตั้ง + extended system ID ซึ่งคือหมายเลข VLAN)\n24586 = 24576 + 10\n28682 = 28672 + 10\n32778 = 32768 + 10 (ค่าดีฟอลต์)\n64000 = 63990 + 10 → ตั้งไว้สูงเพื่อไม่ให้เป็น root\n\n🔗 ไล่เหตุการณ์: เมื่อ SW2 (root ปัจจุบัน) ล่ม สวิตช์ที่เหลือจะเลือกตั้งใหม่ ผู้ที่มี priority ต่ำสุดในกลุ่มที่เหลือคือ SW3 ที่ 28682\n\n✅ ทำไม C ถูก: SW3 มี priority ต่ำเป็นอันดับสอง จึงรับตำแหน่ง root ต่อทันทีเมื่อ SW2 หายไป (โจทย์ระบุว่าทุกลิงก์ความเร็วเท่ากัน จึงไม่มีตัวแปรเรื่อง cost มาเกี่ยวข้อง)\n\n❌ ทำไมข้ออื่นผิด:\nA. 32778 เป็นค่าดีฟอลต์ที่ยังสูงกว่า SW3\nB. SW2 คือ root ตัวปัจจุบันที่โจทย์บอกว่าล่มไปแล้ว\nD. 64000 สูงที่สุด ถูกตั้งใจตั้งไว้เพื่อไม่ให้ได้เป็น root\n\n📗 จำไว้สอบ: root สำรอง = priority ต่ำเป็นอันดับสอง • ในงานจริงใช้คำสั่ง spanning-tree vlan <id> root secondary เพื่อตั้ง priority 28672 ให้อัตโนมัติ',
  },
  {
    id: 323,
    kind: 'single',
    image: v4q323a,
    image2: v4q323b,
    prompt:
      'Refer to the exhibit. Host A sent a data frame destined for host D. What does the switch do when it receives the frame from host A?',
    options: [
      { key: 'A', text: 'It floods the frame out of all ports except port Fa0/1' },
      { key: 'B', text: 'It experiences a broadcast storm' },
      { key: 'C', text: 'It shuts down the port Fa0/1 and places it in err-disable mode' },
      { key: 'D', text: 'It drops the frame from the switch CAM table' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ปลายทางไม่อยู่ในตาราง = unknown unicast → flood\n🔍 อ่าน exhibit ทั้งสองรูป\nโทโพโลยี: A=Fa0/1, B=Fa0/2, C=Fa0/3, D=Fa0/4\nSwitchA#show mac-address table\n  VLAN 2  000c.859c.bb7b  DYNAMIC  Fa0/1   ← host A\n  VLAN 2  0010.11dc.3e91  DYNAMIC  Fa0/2   ← host B\n  VLAN 2  0041.39d1.c469  DYNAMIC  Fa0/3   ← host C\nไม่มีรายการของ Fa0/4 → MAC ของ host D ยังไม่ถูกเรียนรู้ ⭐\n\n🔗 ไล่เหตุการณ์\n1. สวิตช์รับเฟรมจาก A ทาง Fa0/1 → source MAC ของ A มีในตารางแล้ว เพียงรีเซ็ตตัวจับเวลา\n2. ค้น destination MAC ของ D → ไม่พบ\n3. เข้าเงื่อนไข unknown unicast → flood ออกทุกพอร์ตใน VLAN 2 ยกเว้นพอร์ตต้นทาง Fa0/1\n4. เมื่อ D ตอบกลับ สวิตช์จะเรียนรู้ MAC ของ D ที่ Fa0/4 ครั้งต่อไปจะส่งตรงพอร์ตเดียว\n\n✅ ทำไม A ถูก: อธิบายพฤติกรรม unknown unicast flooding ได้ถูกต้องรวมถึงข้อยกเว้นพอร์ตที่รับเฟรมเข้ามา\n\n❌ ทำไมข้ออื่นผิด:\nB. broadcast storm เกิดจาก "ลูปในโทโพโลยี" ที่ทำให้เฟรมวนไม่รู้จบ ไม่ใช่จากการ flood ครั้งเดียวตามปกติ\nC. err-disable เกิดจาก port security, BPDU Guard หรือ link flap — ไม่มีเหตุใดในโจทย์นี้\nD. สวิตช์ไม่ทิ้งเฟรม และ "ทิ้งเฟรมจากตาราง CAM" เป็นประโยคที่ไม่มีความหมายทางเทคนิค\n\n📗 จำไว้สอบ: ปลายทางไม่รู้จัก → flood ใน VLAN เดียวกัน ยกเว้นพอร์ตต้นทาง • เรียนรู้ตำแหน่งปลายทางได้เมื่อมันตอบกลับ',
  },
  {
    id: 324,
    kind: 'single',
    image: v4q324,
    prompt:
      'Refer to the exhibit. Which switch becomes the root of the spanning tree?\n\nSwitch 1 — BID: 32778 0018.184e.3c00\nSwitch 2 — BID: 24586 001a.e3ff.a680\nSwitch 3 — BID: 28682 0022.55cf.cc00\nSwitch 4 — BID: 64000 0e41.4503.004f',
    options: [
      { key: 'A', text: 'Switch 1' },
      { key: 'B', text: 'Switch 2' },
      { key: 'C', text: 'Switch 3' },
      { key: 'D', text: 'Switch 4' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก root bridge\n1️⃣ เปรียบเทียบ Bridge Priority ก่อนเสมอ — ค่าต่ำสุดชนะทันที\n2️⃣ ถ้า priority เท่ากันจึงไปเปรียบเทียบ MAC address (ค่าต่ำสุดชนะ)\n\n🔍 เรียงลำดับ priority จาก exhibit\nSwitch 2 = 24586 ⭐ ต่ำสุด\nSwitch 3 = 28682\nSwitch 1 = 32778\nSwitch 4 = 64000\n\n💡 แกะที่มาของตัวเลข: ค่าที่แสดงได้รวม extended system ID (หมายเลข VLAN) เข้าไปแล้ว เช่น 24586 = 24576 + 10 หมายถึงผู้ดูแลตั้ง priority 24576 บน VLAN 10 ซึ่งเป็นค่าที่คำสั่ง spanning-tree vlan 10 root primary ตั้งให้โดยอัตโนมัติ\n\n✅ ทำไม B ถูก: Switch 2 มี priority ต่ำสุด (24586) จึงชนะการเลือกตั้งทันทีในขั้นตอนแรก โดยไม่ต้องดู MAC address เลย — สังเกตว่า MAC ของ Switch 1 (0018...) ต่ำกว่าของ Switch 2 (001a...) แต่ไม่มีผลเพราะ priority ตัดสินไปก่อนแล้ว ⭐\n\n❌ ทำไมข้ออื่นผิด:\nA. แม้ MAC จะต่ำที่สุดในกลุ่ม แต่ priority 32778 สูงกว่า Switch 2 จึงแพ้ตั้งแต่ขั้นตอนแรก — เป็นกับดักคลาสสิกของข้อนี้\nC. 28682 ต่ำเป็นอันดับสอง ได้เป็น root สำรองเท่านั้น\nD. 64000 สูงที่สุด ถูกตั้งไว้เพื่อไม่ให้เป็น root\n\n📗 จำไว้สอบ: priority มาก่อน MAC เสมอ • ถ้า priority ต่างกันแม้เพียงหน่วยเดียว ก็ไม่ต้องดู MAC อีกเลย',
  },
  {
    id: 325,
    kind: 'single',
    prompt:
      'Which channel-group mode must be configured when multiple distribution interfaces connected to a WLC are bundled?',
    options: [
      { key: 'A', text: 'Channel-group mode passive.' },
      { key: 'B', text: 'Channel-group mode on.' },
      { key: 'C', text: 'Channel-group mode desirable.' },
      { key: 'D', text: 'Channel-group mode active.' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — WLC รองรับเฉพาะ EtherChannel แบบ static\nคุณสมบัติของ Link Aggregation (LAG) บน Cisco WLC\n• ไม่รองรับการเจรจา ไม่ว่าจะเป็น LACP หรือ PAgP ⭐\n• เป็น unconditional / static EtherChannel เท่านั้น\n→ ฝั่งสวิตช์ที่ต่อกับ WLC จึงต้องตั้งเป็น mode on ให้ตรงกัน\n\n🔧 คอนฟิกฝั่งสวิตช์ที่ถูกต้อง\nSwitch(config)# interface range gigabitethernet1/0/1 - 4\nSwitch(config-if-range)# switchport mode trunk\nSwitch(config-if-range)# switchport trunk allowed vlan 10,20,30\nSwitch(config-if-range)# channel-group 1 mode on\n\n⚠️ สิ่งที่เกิดขึ้นถ้าตั้งผิด: ถ้าฝั่งสวิตช์ตั้ง active หรือ desirable มันจะรอการเจรจาที่ไม่มีวันมาถึงจาก WLC ผลคือ EtherChannel ไม่ขึ้น พอร์ตกลายเป็น individual และอาจเกิดลูปหรือทราฟฟิกกระเด้งไปมา\n\n✅ ทำไม B ถูก: mode on บังคับรวมลิงก์โดยไม่ต้องเจรจา ซึ่งเป็นวิธีเดียวที่เข้ากันได้กับ LAG ของ WLC\n\n❌ ทำไมข้ออื่นผิด:\nA, D. passive และ active เป็นโหมดของ LACP ซึ่ง WLC ไม่รองรับ\nC. desirable เป็นโหมดของ PAgP ซึ่ง WLC ก็ไม่รองรับเช่นกัน\n\n📗 จำไว้สอบ: WLC LAG = mode on เท่านั้น + ต้องรีบูต WLC หลังเปิด/ปิด LAG',
  },
  {
    id: 326,
    kind: 'single',
    image: v4q326,
    prompt: 'Refer to the exhibit. Which switch becomes the root of a spanning tree for VLAN 20 if all links are of equal speed?',
    options: [
      { key: 'A', text: 'SW1' },
      { key: 'B', text: 'SW2' },
      { key: 'C', text: 'SW3' },
      { key: 'D', text: 'SW4' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — เลือก root จาก priority ที่ต่ำที่สุด\n🔍 อ่านค่าจาก exhibit (VLAN 20)\nSW1 = 24596  0018.184e.3c00  ⭐ ต่ำสุด\nSW2 = 28692  004a.13e9.6900\nSW3 = 32788  0022.55cf.dd00\nSW4 = 64000  0041.396d.690f\n\n🔢 แกะตัวเลข (priority ที่แสดง = ค่าที่ตั้ง + หมายเลข VLAN)\n24596 = 24576 + 20 → ตั้งด้วย spanning-tree vlan 20 root primary\n28692 = 28672 + 20 → ตั้งด้วย spanning-tree vlan 20 root secondary\n32788 = 32768 + 20 → ค่าดีฟอลต์ ไม่ได้ตั้งอะไร\n64000 = 63980 + 20 → ตั้งสูงเพื่อไม่ให้เป็น root\n\n✅ ทำไม A ถูก: SW1 มี priority 24596 ต่ำที่สุดในกลุ่ม จึงชนะการเลือกตั้ง root bridge ทันที ไม่ต้องพิจารณา MAC address และเนื่องจากโจทย์ระบุว่าทุกลิงก์ความเร็วเท่ากัน จึงไม่มีปัจจัยเรื่อง path cost มารบกวน\n\n❌ ทำไมข้ออื่นผิด:\nB. 28692 ต่ำเป็นอันดับสอง ทำหน้าที่เป็น root สำรองหาก SW1 ล่ม\nC. 32788 เป็นค่าดีฟอลต์ที่ไม่มีการปรับแต่ง\nD. 64000 สูงที่สุด ถูกตั้งใจกันออกจากการเป็น root (มักทำกับสวิตช์ที่ชั้น access)\n\n📗 จำไว้สอบ: root primary = 24576 • root secondary = 28672 • ดีฟอลต์ = 32768 • ทุกค่าบวกหมายเลข VLAN เข้าไปเสมอ',
  },
  {
    id: 327,
    kind: 'single',
    prompt:
      'Which Layer 2 switch function encapsulates packets for different VLANs so that the packets transverse the same port and maintain traffic separation between the VLANs?',
    options: [
      { key: 'A', text: 'VLAN marking' },
      { key: 'B', text: 'VLAN numbering' },
      { key: 'C', text: 'VLAN DSCP' },
      { key: 'D', text: 'VLAN tagging' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — VLAN tagging คือกลไกที่ทำให้ trunk เป็นไปได้\nสวิตช์แทรกแท็ก 802.1Q ขนาด 4 ไบต์เข้าไปในเฟรมอีเทอร์เน็ต ระหว่างฟิลด์ Source MAC กับ Type/Length\n\nโครงสร้างแท็ก 802.1Q (4 ไบต์)\n• TPID  16 บิต = 0x8100 บอกว่าเฟรมนี้มีแท็ก\n• PCP    3 บิต = Priority Code Point (CoS 0-7) สำหรับ QoS ชั้น 2\n• DEI    1 บิต = Drop Eligible Indicator\n• VID   12 บิต = หมายเลข VLAN (1-4094)\n\n🔗 ผลลัพธ์: เมื่อทุกเฟรมพก VLAN ID ติดตัวไปด้วย สวิตช์ปลายทางจึงแยกออกได้ว่าเฟรมไหนเป็นของ VLAN ใด ทำให้หลาย VLAN ใช้สายเส้นเดียวกันได้โดยไม่ปะปนกัน\n\n✅ ทำไม D ถูก: VLAN tagging คือชื่อเรียกกระบวนการนี้โดยตรง ตรงกับคำอธิบายในโจทย์ทุกประการ\n\n❌ ทำไมข้ออื่นผิด:\nA. คำว่า marking ใช้ในบริบท QoS (การใส่ค่า CoS/DSCP) ไม่ใช่การแยก VLAN\nB. VLAN numbering เป็นเพียงการตั้งหมายเลขให้ VLAN ไม่ใช่กลไกส่งข้อมูลข้ามลิงก์\nC. DSCP เป็นฟิลด์ 6 บิตในเฮดเดอร์ IP (Layer 3) ใช้จัดลำดับความสำคัญ ไม่เกี่ยวกับการแยก VLAN\n\n📗 จำไว้สอบ: 802.1Q = แท็ก 4 ไบต์ ประกอบด้วย VID 12 บิต + CoS 3 บิต • ISL ห่อทั้งเฟรม 26+4 ไบต์ (เลิกใช้แล้ว)',
  },
  {
    id: 328,
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
      '📘 แนวคิด — SSID คือ "ชื่อ" ของเครือข่ายไร้สาย\nคุณสมบัติของ SSID (Service Set Identifier)\n• ยาวได้สูงสุด 32 อักขระ และเป็น case-sensitive\n• AP ประกาศ SSID ออกมาในเฟรม beacon ทุก ๆ 100 ms (หรือซ่อนไว้ก็ได้)\n• ไคลเอนต์ใช้ SSID เพื่อระบุว่าจะเข้าร่วมเครือข่ายไหน แล้วจึงทำ association\n• หนึ่ง AP รองรับหลาย SSID พร้อมกันได้ โดยแต่ละ SSID มี BSSID (MAC ของวิทยุ) ของตัวเอง\n\nคำที่มักสับสน\n• BSSID = MAC address ของอินเทอร์เฟซวิทยุ AP สำหรับ SSID นั้น ๆ\n• BSS   = AP หนึ่งตัวกับไคลเอนต์ที่เชื่อมอยู่\n• ESS   = หลาย AP ที่ใช้ SSID เดียวกัน ทำให้โรมมิ่งข้าม AP ได้\n\n✅ ทำไม B ถูก: SSID คือตัวระบุที่ AP ใช้ประกาศตัวและใช้สร้าง/รักษาการเชื่อมต่อกับอุปกรณ์ไร้สาย ตรงกับคำอธิบายในโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. VLAN ID ใช้แยกเครือข่ายฝั่งมีสาย (แม้จะถูกแมปกับ SSID บน WLC ก็ตาม) ไคลเอนต์ไร้สายไม่ได้ใช้ค่านี้ในการเชื่อมต่อ\nC. RFID เป็นเทคโนโลยีติดตามวัตถุด้วยคลื่นวิทยุ คนละเรื่องกับ Wi-Fi\nD. WLAN ID เป็นเพียงหมายเลขลำดับภายในของ WLC (1-512) ที่ใช้อ้างอิงโปรไฟล์ ไม่ได้ถูกส่งออกอากาศ\n\n📗 จำไว้สอบ: SSID = ชื่อที่คนเห็น • BSSID = MAC ของวิทยุ AP • ESS = หลาย AP ชื่อเดียวกัน ทำให้โรมได้',
  },
  {
    id: 329,
    kind: 'single',
    image: v4q329,
    prompt:
      'Refer to the exhibit. An engineer must configure neighbor discovery between the company router and an ISP. What is the next step to complete the configuration if the ISP uses a third-party router?',
    options: [
      { key: 'A', text: 'Enable LLDP globally.' },
      { key: 'B', text: 'Disable CDP on gi0/0.' },
      { key: 'C', text: 'Enable LLDP TLVs on the ISP router.' },
      { key: 'D', text: 'Disable auto-negotiation.' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — third-party router = ต้องใช้ LLDP และต้องเปิดที่ global ก่อน\n🔍 อ่าน exhibit\ninterface gigabitethernet0/0\n description Circuit-ATT4139-84320\n duplex full\n speed 1000\n media-type gbic\n negotiation auto\n lldp transmit        ← เปิดที่อินเทอร์เฟซแล้ว\n lldp receive         ← เปิดที่อินเทอร์เฟซแล้ว\nสิ่งที่ขาด: คำสั่ง lldp run ที่ระดับ global configuration ⚠️\n\n🔗 ทำไมต้องมีทั้งสองระดับ: บน Cisco IOS ตัว LLDP ปิดอยู่โดยดีฟอลต์ คำสั่งระดับอินเทอร์เฟซ (lldp transmit/receive) จะไม่มีผลใด ๆ จนกว่าจะสั่ง lldp run เปิดโปรโตคอลทั้งเครื่องเสียก่อน\n\n💡 ทำไมไม่ใช้ CDP: CDP เป็นกรรมสิทธิ์ของ Cisco เราเตอร์ของ ISP ซึ่งเป็นยี่ห้ออื่นจะไม่เข้าใจและไม่ตอบกลับ\n\n✅ ทำไม A ถูก: การพิมพ์ lldp run ที่ global config เป็นขั้นตอนสุดท้ายที่ทำให้คำสั่งบนอินเทอร์เฟซที่ตั้งไว้แล้วเริ่มทำงาน และ LLDP ก็เป็นมาตรฐานเปิดที่คุยกับอุปกรณ์ต่างยี่ห้อได้\n\n❌ ทำไมข้ออื่นผิด:\nB. การปิด CDP ไม่ได้ทำให้ LLDP ทำงาน (แม้ในทางปฏิบัติจะควรปิด CDP บนลิงก์ที่ออกสู่ภายนอกเพื่อความปลอดภัยก็ตาม)\nC. เราไม่มีสิทธิ์เข้าไปคอนฟิกอุปกรณ์ของ ISP และโดยดีฟอลต์ LLDP ก็ส่ง TLV พื้นฐานอยู่แล้ว\nD. auto-negotiation เกี่ยวกับความเร็ว/ดูเพล็กซ์ ไม่มีผลต่อการค้นหาเพื่อนบ้าน\n\n📗 จำไว้สอบ: lldp run (global) ต้องมาก่อน • มีอุปกรณ์ต่างยี่ห้อ = LLDP เสมอ',
  },
  {
    id: 330,
    kind: 'drag',
    image: v4q330,
    prompt:
      'Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.',
    categories: [
      {
        name: 'Cloud-Based Access Point',
        items: ['managed from a Web-based dashboard', 'supports automatic deployment'],
      },
      {
        name: 'Lightweight Access Point',
        items: ['configured and managed by a WLC', 'supports different operational modes'],
      },
      { name: 'ไม่ใช้ (ตัวลวง)', items: ['accessible for management via Telnet, SSH, or a Web GUI'] },
    ],
    explanation:
      '📘 แนวคิด — เทียบ Cloud-Based กับ Lightweight\n\nCloud-Based AP (เช่น Cisco Meraki)\n• จัดการทุกอย่างผ่านแดชบอร์ดเว็บบนคลาวด์ ⭐ ไม่ต้องมีคอนโทรลเลอร์ในสถานที่\n• รองรับการติดตั้งอัตโนมัติแบบ zero-touch ⭐ — เสียบสาย ได้ IP จาก DHCP แล้วโทรกลับหาคลาวด์เพื่อดึงคอนฟิกและเฟิร์มแวร์เอง\n• ข้อแลกเปลี่ยน: ต้องมีเส้นทางออกอินเทอร์เน็ตตลอดเวลาสำหรับการจัดการ (แต่ไคลเอนต์ยังใช้งานต่อได้ชั่วคราวถ้าเน็ตล่ม)\n\nLightweight AP\n• คอนฟิกและควบคุมโดย WLC ทั้งหมดผ่านอุโมงค์ CAPWAP ⭐\n• รองรับหลายโหมดการทำงาน ⭐ — local, FlexConnect, monitor, sniffer, rogue detector, bridge/mesh, SE-Connect, sensor\n• WLC จัดการ RRM, การโรมมิ่ง, การยืนยันตัวตน และนโยบายความปลอดภัยให้ทั้งหมด\n\n❌ ตัวลวงที่ไม่ได้ใช้: "accessible for management via Telnet, SSH, or a Web GUI" เป็นลักษณะของ Autonomous AP ที่มีระบบจัดการอยู่ในตัวเองและต้องเข้าไปคอนฟิกทีละเครื่อง — โจทย์ข้อนี้ไม่มีช่อง Autonomous ให้วาง\n\n📗 จำไว้สอบ: dashboard/zero-touch → cloud • WLC/CAPWAP/หลายโหมด → lightweight • Telnet/SSH/CLI ของตัวเอง → autonomous',
  },
  {
    id: 331,
    kind: 'single',
    prompt: 'What is a function of MAC learning on a switch?',
    options: [
      { key: 'A', text: 'MAC address learning is disabled by default on all VLANs.' },
      { key: 'B', text: 'Frames received for a destination MAC address not listed in the address table are dropped.' },
      { key: 'C', text: 'The MAC address table is used to populate the ARP table.' },
      { key: 'D', text: 'A static MAC address is manually added to the MAC table.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตาราง MAC มีสองประเภทของรายการ\n• Dynamic — เรียนรู้อัตโนมัติจาก source MAC ของเฟรมขาเข้า มีอายุ 300 วินาที หายไปเมื่อรีบูต\n• Static — ผู้ดูแลใส่เอง ไม่มีวันหมดอายุ และคงอยู่ในคอนฟิก ⭐\n  Switch(config)# mac address-table static 0011.2233.4455 vlan 10 interface gi1/0/5\n  ใช้เมื่อ: ล็อกเซิร์ฟเวอร์สำคัญไว้กับพอร์ตเดียว หรือสร้างรายการ "ดำ" ที่ชี้ไปยัง drop\n\n✅ ทำไม D ถูก: การเพิ่มรายการแบบ static ด้วยมือเป็นข้อความที่ถูกต้องเพียงข้อเดียวเกี่ยวกับการทำงานของตาราง MAC ในตัวเลือกทั้งสี่\n\n❌ ทำไมข้ออื่นผิด:\nA. ตรงข้ามกับความจริง — MAC learning เปิดใช้งานโดยดีฟอลต์ทุก VLAN ถ้าปิดไป สวิตช์จะกลายเป็นฮับที่ flood ทุกอย่าง\nB. เฟรมที่ปลายทางไม่รู้จักจะถูก "flood" ไม่ใช่ "drop" ⭐ ตัวลวงหลักของข้อนี้\nC. ตาราง MAC (MAC ↔ พอร์ต) กับตาราง ARP (IP ↔ MAC) เป็นคนละตารางที่สร้างจากคนละกลไก และไม่ได้เติมข้อมูลให้กันและกัน\n\n📗 จำไว้สอบ: dynamic = เรียนเอง อายุ 300 วิ • static = ใส่มือ ไม่หมดอายุ • ไม่รู้จักปลายทาง = flood ไม่ใช่ drop',
  },
  {
    id: 332,
    kind: 'single',
    prompt: 'What does a switch do when it receives a frame whose destination MAC address is missing from the MAC address table?',
    options: [
      { key: 'A', text: 'It changes the checksum of the frame to a value that indicates an invalid frame.' },
      { key: 'B', text: 'It updates the CAM table with the destination MAC address of the frame.' },
      { key: 'C', text: 'It appends the table with a static entry for the MAC and shuts down the port.' },
      { key: 'D', text: 'It floods the frame unchanged across all remaining ports in the incoming VLAN.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — unknown unicast flooding และคำสำคัญสองคำ\n"unchanged" — สวิตช์ Layer 2 ส่งต่อเฟรมโดยไม่แก้ไขเนื้อหาใด ๆ (ไม่แตะ MAC ต้นทาง/ปลายทาง ไม่แตะ checksum)\n"in the incoming VLAN" — การ flood จำกัดอยู่แค่ VLAN เดียวกับที่เฟรมเข้ามา ไม่ข้าม VLAN เด็ดขาด ⭐\n\n🔗 กระบวนการเต็ม\n1. รับเฟรม → เรียนรู้ source MAC (ถ้ายังไม่มีในตาราง)\n2. ค้น destination MAC ในตาราง → ไม่พบ\n3. flood ออกทุกพอร์ตใน VLAN เดียวกัน ยกเว้นพอร์ตต้นทาง\n4. เมื่อปลายทางตอบกลับ สวิตช์เรียนรู้ตำแหน่งของมัน ครั้งต่อไปส่งตรงพอร์ตเดียว\n\n✅ ทำไม D ถูก: อธิบายพฤติกรรมได้ครบทั้งสามประเด็น — flood, ไม่แก้ไขเฟรม และจำกัดอยู่ใน VLAN ที่เฟรมเข้ามา\n\n❌ ทำไมข้ออื่นผิด:\nA. สวิตช์ไม่เคยแก้ไข checksum/FCS ของเฟรมที่ส่งต่อ (ยกเว้นกรณีทำ VLAN tagging ซึ่งต้องคำนวณ FCS ใหม่แต่ไม่ได้ทำให้เฟรมเสีย)\nB. สวิตช์เรียนรู้จาก "source" MAC เท่านั้น เป็นไปไม่ได้ที่จะเรียนรู้ destination MAC จากเฟรมที่เพิ่งรับเข้ามา เพราะยังไม่รู้ว่ามันอยู่พอร์ตไหน ⭐\nC. ไม่มีการสร้างรายการ static อัตโนมัติ และไม่มีเหตุผลใดให้ปิดพอร์ต\n\n📗 จำไว้สอบ: flood = ใน VLAN เดียวกัน ยกเว้นพอร์ตต้นทาง เฟรมไม่ถูกดัดแปลง • เรียนรู้จาก source เท่านั้น',
  },
  {
    id: 333,
    kind: 'single',
    prompt:
      'By default, how long will the switch continue to know a workstation MAC address after the workstation stops sending traffic?',
    options: [
      { key: 'A', text: '200 seconds' },
      { key: 'B', text: '300 seconds' },
      { key: 'C', text: '600 seconds' },
      { key: 'D', text: '900 seconds' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ค่า MAC address aging time\nค่าดีฟอลต์ของสวิตช์ Cisco คือ 300 วินาที (5 นาที) ⭐\nตัวจับเวลาจะรีเซ็ตกลับเป็น 300 ทุกครั้งที่ได้รับเฟรมจาก MAC นั้นอีก ถ้าเงียบครบ 300 วินาทีรายการจะถูกลบทิ้ง\n\n🔧 คำสั่งที่เกี่ยวข้อง\nSwitch(config)# mac address-table aging-time <10-1000000>\nSwitch# show mac address-table aging-time\nSwitch# clear mac address-table dynamic\n\n💡 ค่าที่ควรจำเทียบกัน\n• MAC aging บนสวิตช์  = 300 วินาที (5 นาที)\n• ARP cache บนเราเตอร์ = 14,400 วินาที (4 ชั่วโมง)\nเพราะ ARP อยู่นานกว่ามาก โฮสต์อาจส่งข้อมูลไปยัง MAC ที่สวิตช์ลืมไปแล้ว ทำให้เกิด unknown unicast flooding เป็นระยะ — ในเครือข่ายที่ต้องการความเงียบจึงมีคำแนะนำให้ปรับสองค่านี้ให้ใกล้เคียงกัน\n\n✅ ทำไม B ถูก: 300 วินาทีคือค่าดีฟอลต์ที่ Cisco กำหนดมาและเป็นค่าที่ออกสอบบ่อยที่สุด\n\n❌ ทำไมข้ออื่นผิด:\nA, C, D. 200, 600 และ 900 วินาทีไม่ใช่ค่าดีฟอลต์ของ MAC aging (แม้จะตั้งเองได้ก็ตาม)\n\n📗 จำไว้สอบ: MAC aging = 300 วินาที • ARP timeout = 4 ชั่วโมง • STP max age = 20 วินาที',
  },
  {
    id: 334,
    kind: 'single',
    prompt:
      'A project objective is to minimize the association time to the different access points as mobile devices move around the office. The ideal solution must cover numerous devices and device types, including laptops, mobile phones, tablets and wireless printers. What must be configured?',
    options: [
      { key: 'A', text: '802.11v BSS Max Idle Service' },
      { key: 'B', text: '802.11v Disassociation Imminent' },
      { key: 'C', text: '802.11ax BSS configure' },
      { key: 'D', text: '802.11k neighbor List Dual Band' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตระกูลมาตรฐานที่ช่วยเรื่องการโรมมิ่ง\n• 802.11k — Radio Resource Management: AP ส่ง "Neighbor Report" บอกไคลเอนต์ว่ามี AP ตัวไหนอยู่ใกล้บ้างและอยู่ช่องไหน ⭐\n  ผลคือไคลเอนต์ไม่ต้องสแกนทุกช่องสัญญาณเอง (ซึ่งกินเวลานาน) ทำให้เวลาในการ associate กับ AP ตัวถัดไปสั้นลงมาก\n  แบบ Dual Band ยังบอกทั้งเพื่อนบ้านย่าน 2.4 GHz และ 5 GHz จึงครอบคลุมอุปกรณ์ได้หลากหลายชนิด\n• 802.11v — Wireless Network Management: ให้เครือข่ายชี้นำไคลเอนต์ เช่น BSS Transition Management, BSS Max Idle (ยืดเวลาก่อนถูกตัด), Disassociation Imminent (แจ้งว่ากำลังจะตัด)\n• 802.11r — Fast Transition: ทำ key negotiation ล่วงหน้าเพื่อลดเวลายืนยันตัวตนตอนโรม\n\n✅ ทำไม D ถูก: เป้าหมายของโจทย์คือ "ลดเวลาในการ associate" ซึ่งเวลาส่วนใหญ่หมดไปกับการที่ไคลเอนต์ต้องสแกนหา AP เอง 802.11k Neighbor List (แบบ Dual Band) ตัดขั้นตอนนั้นออกโดยส่งรายชื่อ AP ข้างเคียงให้ล่วงหน้า และรองรับอุปกรณ์หลากหลายชนิดตามที่โจทย์ระบุ\n\n❌ ทำไมข้ออื่นผิด:\nA. BSS Max Idle ยืดเวลาก่อนที่ AP จะตัดไคลเอนต์ที่เงียบอยู่ ช่วยเรื่องการประหยัดพลังงาน ไม่ได้เร่งการ associate\nB. Disassociation Imminent เป็นการ "ไล่" ไคลเอนต์ออกจาก AP ปัจจุบัน ไม่ได้ทำให้เข้า AP ใหม่เร็วขึ้น\nC. 802.11ax (Wi-Fi 6) เน้นเพิ่มความจุและประสิทธิภาพด้วย OFDMA/MU-MIMO ไม่ได้ออกแบบมาแก้เรื่องเวลาโรมมิ่งโดยตรง\n\n📗 จำไว้สอบ: 802.11k = รายชื่อเพื่อนบ้าน (ลดเวลาสแกน) • 802.11v = เครือข่ายชี้นำไคลเอนต์ • 802.11r = ลดเวลายืนยันตัวตน',
  },
  {
    id: 335,
    kind: 'multi',
    prompt:
      'Which two protocols are used by an administrator for authentication and configuration on access points? (Choose two.)',
    options: [
      { key: 'A', text: '802.1Q' },
      { key: 'B', text: 'RADIUS' },
      { key: 'C', text: 'Kerberos' },
      { key: 'D', text: 'TACACS+' },
      { key: 'E', text: '802.1x' },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — โปรโตคอล AAA ที่อุปกรณ์เครือข่ายใช้ได้จริงมีสองตัว\n• RADIUS — มาตรฐานเปิด (RFC 2865) ใช้ UDP 1812/1813 เข้ารหัสเฉพาะรหัสผ่าน รวม authentication กับ authorization เข้าด้วยกัน\n• TACACS+ — ของ Cisco ใช้ TCP 49 เข้ารหัสทั้ง payload แยกทั้งสาม AAA ออกจากกัน เหมาะกับการควบคุมคำสั่งของผู้ดูแลระบบ\n\nทั้งสองตัวถูกใช้ในสองบทบาทบน AP/WLC\n1️⃣ ยืนยันตัวตน "ผู้ดูแลระบบ" ที่ล็อกอินเข้าไปตั้งค่าอุปกรณ์\n2️⃣ ยืนยันตัวตน "ผู้ใช้ไร้สาย" (โดยเฉพาะ RADIUS ที่ทำงานคู่กับ 802.1X/EAP)\n\n✅ ทำไม B + D ถูก: RADIUS และ TACACS+ เป็นโปรโตคอล AAA เพียงสองตัวที่ Cisco AP และ WLC รองรับสำหรับการยืนยันตัวตนและควบคุมการตั้งค่า\n\n❌ ทำไมข้ออื่นผิด:\nA. 802.1Q เป็นมาตรฐานติดแท็ก VLAN บน trunk ไม่ใช่โปรโตคอลความปลอดภัย\nC. Kerberos เป็นระบบยืนยันตัวตนด้วยตั๋วในโดเมน Windows ไม่ได้ใช้ยืนยันตัวตนผู้ดูแลอุปกรณ์เครือข่าย\nE. 802.1X เป็น "กรอบการทำงาน" ควบคุมการเข้าถึงพอร์ต ไม่ใช่โปรโตคอล AAA เอง — มันต้องเรียกใช้ RADIUS เป็นเบื้องหลังเสมอ ⭐ ตัวลวงที่พลาดกันบ่อย\n\n📗 จำไว้สอบ: โปรโตคอล AAA = RADIUS + TACACS+ • 802.1X = กรอบการทำงานที่เรียกใช้ RADIUS • EAP = วิธียืนยันตัวตนที่วิ่งอยู่ภายใน 802.1X',
  },
  {
    id: 336,
    kind: 'drag',
    image: v4q336,
    prompt: 'Drag and drop the statements about access-point modes from the left onto the corresponding modes on the right.',
    categories: [
      {
        name: 'Monitor',
        items: [
          'It enables enhanced RFID-tag location tracking.',
          'It provides air-quality data and interference detection across all enabled channels.',
        ],
      },
      {
        name: 'Sensor',
        items: [
          'It supports real-time Wi-Fi client troubleshooting when network engineers are offsite.',
          'It supports analytics for wireless performance testing.',
        ],
      },
      {
        name: 'Sniffer',
        items: [
          'It captures and forwards packets on a specific wireless channel.',
          'It supports software that analyzes wireless frames on a remote device.',
        ],
      },
    ],
    explanation:
      '📘 แนวคิด — โหมดการทำงานของ lightweight AP แต่ละโหมดทำอะไร\n\n• Monitor mode — ปิดวิทยุฝั่งให้บริการ ใช้เวลาทั้งหมดสแกนคลื่นอย่างเดียว\n  หน้าที่: ตรวจจับ rogue AP, ทำ IDS/IPS ไร้สาย, ติดตามตำแหน่งแท็ก RFID/RTLS ⭐, เก็บข้อมูลคุณภาพอากาศคลื่นและสัญญาณรบกวนด้วย CleanAir ⭐\n\n• Sensor mode — AP ทำตัวเป็น "ไคลเอนต์จำลอง" (Cisco DNA Center Wireless Sensor)\n  หน้าที่: ยิงทดสอบจริงเป็นรอบ ๆ (เชื่อมต่อ, ขอ DHCP, ทดสอบ DNS/RADIUS, วัดความเร็ว) แล้วรายงานผล ทำให้วิศวกรที่อยู่นอกสถานที่เห็นปัญหาของผู้ใช้ได้แบบเรียลไทม์ ⭐ และได้ข้อมูลวิเคราะห์ประสิทธิภาพเครือข่าย ⭐\n\n• Sniffer mode — AP จับทุกเฟรมบนช่องสัญญาณที่กำหนด ⭐ แล้วห่อส่งต่อไปยังเครื่องปลายทางที่รันโปรแกรมวิเคราะห์ เช่น Wireshark หรือ OmniPeek ⭐\n  ใช้เมื่อต้องวิเคราะห์ปัญหาระดับเฟรม 802.11 อย่างละเอียด\n\n💡 เทคนิคจับคู่: มีคำว่า RFID / air quality / rogue → Monitor • มีคำว่า testing / analytics / offsite → Sensor • มีคำว่า capture / forward / remote analyzer → Sniffer\n\n📗 จำไว้สอบ: โหมดอื่นที่ควรรู้ — local (ดีฟอลต์), FlexConnect (สาขา), bridge/mesh, rogue detector, SE-Connect (วิเคราะห์สเปกตรัม)',
  },
  {
    id: 337,
    kind: 'single',
    prompt:
      'A WLC sends alarms about a rogue AP, and the network administrator verifies that the alarms are caused by a legitimate autonomous AP. How must the alarms be stopped for the MAC address of the AP?',
    options: [
      { key: 'A', text: 'Remove the AP from WLC management' },
      { key: 'B', text: 'Place the AP into manual containment.' },
      { key: 'C', text: 'Manually remove the AP from Pending state.' },
      { key: 'D', text: 'Set the AP Class Type to Friendly.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — WLC จัดประเภท rogue AP ได้หลายแบบ\nเมื่อ WLC ตรวจพบ AP ที่ไม่ได้อยู่ในการจัดการของตน มันจะขึ้นเป็น rogue และให้ผู้ดูแลจัดประเภทได้\n• Friendly ⭐ — AP ที่รู้จักและยอมรับได้ เช่น AP ของแผนกอื่น AP ของเพื่อนบ้าน หรือ autonomous AP ที่องค์กรตั้งเอง → WLC หยุดส่งการแจ้งเตือนสำหรับ MAC นั้น\n• Malicious — AP ของผู้ไม่หวังดีที่เสียบอยู่ในเครือข่ายเรา ควรจัดการทันที\n• Unclassified — ยังไม่ได้ตัดสิน (สถานะเริ่มต้น)\n• Custom — กำหนดกฎเอง\n\nสถานะย่อยที่พบบ่อย: Internal, External, Alert, Contained, Threat, Pending\n\n🔧 ขั้นตอนบน WLC GUI: Monitor > Rogues > Unclassified APs → เลือก MAC ของ AP → ตั้ง Class Type = Friendly และ State = Internal/External → Apply\n\n✅ ทำไม D ถูก: เมื่อยืนยันแล้วว่าเป็น autonomous AP ที่ถูกต้องขององค์กร การตั้ง Class Type เป็น Friendly เป็นวิธีมาตรฐานที่บอก WLC ว่า MAC นี้ปลอดภัย ให้เลิกแจ้งเตือน\n\n❌ ทำไมข้ออื่นผิด:\nA. AP นี้เป็น autonomous จึงไม่เคยอยู่ภายใต้การจัดการของ WLC ตั้งแต่แรก จะถอดออกจากอะไรไม่ได้\nB. manual containment คือการที่ WLC ยิงเฟรม deauthentication ใส่ AP นั้นเพื่อ "ปิดปาก" มัน — เป็นการโจมตี AP ที่ถูกกฎหมายขององค์กรเอง ⚠️ ผิดวัตถุประสงค์ร้ายแรง\nC. Pending เป็นเพียงสถานะชั่วคราวระหว่างรอการจัดประเภท การลบออกจากสถานะนี้ไม่ได้หยุดการแจ้งเตือนอย่างถาวร\n\n📗 จำไว้สอบ: rogue ที่รู้จักและปลอดภัย → Friendly • rogue อันตราย → Contain (แต่ต้องระวังข้อกฎหมายเรื่องการรบกวนคลื่น)',
  },
  {
    id: 338,
    kind: 'single',
    prompt: 'What is one reason to implement LAG on a Cisco WLC?',
    options: [
      { key: 'A', text: 'to increase security and encrypt management frames' },
      { key: 'B', text: 'to enable connected switch ports to failover and use different VLANs' },
      { key: 'C', text: 'to provide link redundancy and load balancing' },
      { key: 'D', text: 'to allow for stateful and link-state failover' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — LAG คือ EtherChannel ในภาษาของ WLC\nประโยชน์ที่ได้จากการรวมพอร์ต\n1️⃣ Redundancy — ถ้าพอร์ตใดพอร์ตหนึ่งหรือสายเส้นใดล่ม ทราฟฟิกจะย้ายไปพอร์ตที่เหลือทันทีโดยไม่ต้องรอ STP converge ⭐\n2️⃣ Load balancing — กระจายทราฟฟิกข้ามพอร์ตในมัดด้วยอัลกอริทึมแฮช (จาก MAC/IP ต้นทาง-ปลายทาง) จึงได้แบนด์วิดท์รวมมากขึ้น ⭐\n3️⃣ ความเรียบง่าย — dynamic interface ทุกตัวแมปเข้ามัดโดยอัตโนมัติ ไม่ต้องผูกพอร์ตทีละตัว\n\n⚙️ ข้อกำหนดที่ต้องจำคู่กัน: WLC รองรับเฉพาะ static EtherChannel (ฝั่งสวิตช์ตั้ง mode on) และต้องรีบูต WLC หลังเปิดหรือปิด LAG\n\n✅ ทำไม C ถูก: ความทนทานของลิงก์และการกระจายโหลดคือเหตุผลหลักสองข้อของการทำ LAG ตรงกับนิยามของ link aggregation ทุกรูปแบบ\n\n❌ ทำไมข้ออื่นผิด:\nA. การเข้ารหัสเฟรม management เป็นหน้าที่ของ PMF (802.11w) ในฝั่งไร้สาย ไม่เกี่ยวกับการรวมพอร์ตฝั่งมีสาย\nB. LAG ทำให้พอร์ตทั้งมัดทำงานเป็น "หนึ่งลิงก์ตรรกะ" ที่ขนทุก VLAN เหมือนกัน ไม่ใช่ให้แต่ละพอร์ตแยกใช้คนละ VLAN\nD. stateful failover เป็นเรื่องของ HA SSO ระหว่าง WLC สองตัว (คนละกลไกกับ LAG ที่ทำงานภายในตัวเดียว)\n\n📗 จำไว้สอบ: LAG = redundancy + load balancing • static เท่านั้น • ต้องรีบูตหลังเปลี่ยนค่า',
  },
  {
    id: 339,
    kind: 'single',
    prompt:
      'When an access point is seeking to join a wireless LAN controller, which message is sent to the AP-Manager interface?',
    options: [
      { key: 'A', text: 'Discovery response' },
      { key: 'B', text: 'DHCP request' },
      { key: 'C', text: 'DHCP discover' },
      { key: 'D', text: 'Discovery request' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ลำดับการ join ของ lightweight AP\n1️⃣ AP บูตแล้วขอ IP จาก DHCP (DHCP Discover → Offer → Request → Ack)\n2️⃣ AP ค้นหา WLC จากแหล่งใดแหล่งหนึ่ง\n   • DHCP option 43\n   • DNS ชื่อ CISCO-CAPWAP-CONTROLLER.localdomain\n   • broadcast ในซับเน็ตเดียวกัน\n   • รายการ WLC ที่เคย join แล้วบันทึกไว้ใน NVRAM\n3️⃣ AP ส่ง CAPWAP Discovery Request ไปยัง WLC ⭐\n4️⃣ WLC ตอบ Discovery Response พร้อมข้อมูลจำนวน AP ที่รองรับและโหลดปัจจุบัน\n5️⃣ AP เลือก WLC แล้วส่ง Join Request → WLC ตอบ Join Response\n6️⃣ ถ้าเวอร์ชันเฟิร์มแวร์ไม่ตรงกัน AP จะดาวน์โหลดจาก WLC แล้วรีบูต\n7️⃣ AP รับคอนฟิกและเริ่มให้บริการ\n\n✅ ทำไม D ถูก: ในบรรดาข้อความที่ให้เลือก มีเพียง Discovery Request ที่ "AP เป็นผู้ส่งไปหา WLC" ในขั้นตอนที่ AP กำลังมองหาคอนโทรลเลอร์เพื่อเข้าร่วม\n\n❌ ทำไมข้ออื่นผิด:\nA. Discovery Response เป็นข้อความที่ WLC "ตอบกลับ" มายัง AP ทิศทางตรงข้าม ⭐\nB, C. DHCP Discover และ DHCP Request เกิดในขั้นตอนก่อนหน้า ตอนที่ AP ยังขอ IP address อยู่ และส่งไปยัง DHCP server ไม่ใช่ WLC\n\n📗 จำไว้สอบ: AP ส่ง Discovery Request → WLC ตอบ Discovery Response → AP ส่ง Join Request → WLC ตอบ Join Response',
  },
  {
    id: 340,
    kind: 'single',
    image: v4q340,
    prompt:
      'Refer to the exhibit. A network engineer configures the Cisco WLC to authenticate local wireless clients against a RADIUS server. Which task must be performed to complete the process?',
    options: [
      { key: 'A', text: 'Change the Support for CoA to Enabled' },
      { key: 'B', text: 'Select Enable next to Management' },
      { key: 'C', text: 'Select Enable next to Network User' },
      { key: 'D', text: 'Change the Server Status to Disabled' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ช่อง Network User กับ Management บนหน้าเพิ่ม RADIUS server ทำคนละหน้าที่\n• Network User ☑ — ให้ใช้เซิร์ฟเวอร์นี้ยืนยันตัวตนของ "ผู้ใช้ไร้สาย" ที่เชื่อมต่อผ่าน WLAN ⭐\n• Management ☑ — ให้ใช้เซิร์ฟเวอร์นี้ยืนยันตัวตนของ "ผู้ดูแลระบบ" ที่ล็อกอินเข้าหน้าจัดการ WLC\n(ติ๊กได้ทั้งสองช่องพร้อมกัน หรือแยกเซิร์ฟเวอร์คนละตัวสำหรับแต่ละบทบาท)\n\n🔍 อ่าน exhibit — RADIUS Authentication Servers > New\nServer IP Address : 192.168.25.2 ✔\nShared Secret     : ตั้งแล้ว ✔\nPort Number       : 1812 ✔ (พอร์ตมาตรฐานของ RADIUS authentication)\nServer Status     : Enabled ✔\nNetwork User      : ☐ Enable  ← ยังไม่ได้ติ๊ก ⚠️\nManagement        : ☐ Enable\n\n✅ ทำไม C ถูก: โจทย์ระบุชัดว่าต้องการยืนยันตัวตนของ "local wireless clients" ซึ่งคือผู้ใช้ไร้สาย จึงต้องติ๊กช่อง Network User ให้เซิร์ฟเวอร์นี้ถูกใช้กับการยืนยันตัวตนของ WLAN\n\n❌ ทำไมข้ออื่นผิด:\nA. Support for CoA (Change of Authorization) ใช้ให้เซิร์ฟเวอร์สั่งเปลี่ยนสิทธิ์ของเซสชันที่กำลังทำงานอยู่ (เช่นการทำ posture remediation ด้วย ISE) เป็นฟีเจอร์เสริม ไม่จำเป็นสำหรับการยืนยันตัวตนพื้นฐาน\nB. Management ใช้กับผู้ดูแลระบบที่ล็อกอินเข้า WLC ไม่ใช่ไคลเอนต์ไร้สายตามที่โจทย์ระบุ ⭐ ตัวลวงหลัก\nD. การตั้ง Server Status เป็น Disabled จะปิดการใช้งานเซิร์ฟเวอร์นี้ทั้งหมด — ตรงข้ามกับสิ่งที่ต้องการ\n\n📗 จำไว้สอบ: RADIUS authentication = UDP 1812 • accounting = UDP 1813 • Network User = ไคลเอนต์ / Management = ผู้ดูแล',
  },
  {
    id: 341,
    kind: 'single',
    prompt:
      'After installing a new Cisco ISE server, which task must the engineer perform on the Cisco WLC to connect wireless clients on a specific VLAN based on their credentials?',
    options: [
      { key: 'A', text: 'Disable the LAG Mode on Next Reboot.' },
      { key: 'B', text: 'Enable the Event Driven RRM.' },
      { key: 'C', text: 'Enable the Allow AAA Override.' },
      { key: 'D', text: 'Enable the Authorize MIC APs against auth-list or AAA' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — AAA Override ให้เซิร์ฟเวอร์ RADIUS สั่งค่าทับคอนฟิกของ WLAN ได้\nโดยปกติ WLAN หนึ่งวงจะผูกกับ dynamic interface (VLAN) เพียงวงเดียว ผู้ใช้ทุกคนที่เชื่อมต่อ SSID นั้นจึงได้ VLAN เดียวกันหมด\nเมื่อเปิด Allow AAA Override บนโปรไฟล์ WLAN ตัว ISE จะส่ง RADIUS attribute กลับมาพร้อมผลการยืนยันตัวตน และ WLC จะเชื่อฟังค่าเหล่านั้นแทนค่าที่ตั้งไว้ ⭐\n\nAttribute ที่ส่งกลับมาได้\n• Tunnel-Private-Group-ID → หมายเลข VLAN หรือชื่อ interface group ⭐ (นี่คือกลไกที่ทำให้ผู้ใช้แต่ละคนไปคนละ VLAN)\n• Airespace-ACL-Name → ชื่อ ACL ที่จะใช้กับผู้ใช้คนนั้น\n• QoS profile, session timeout ฯลฯ\n\n💡 ตัวอย่างการใช้งาน: พนักงานฝ่ายบัญชีล็อกอิน SSID "Corp" แล้วถูกโยนไป VLAN 20 ส่วนฝ่ายไอทีล็อกอิน SSID เดียวกันแต่ไป VLAN 30 โดยไม่ต้องสร้าง SSID เพิ่ม\n\n🔧 ตำแหน่งบน GUI: WLANs > เลือก WLAN > Advanced > Allow AAA Override ☑\n\n✅ ทำไม C ถูก: การให้ ISE เป็นผู้ตัดสิน VLAN ตามข้อมูลประจำตัวของผู้ใช้ ต้องเปิด Allow AAA Override เท่านั้น มิฉะนั้น WLC จะเมินค่าที่ ISE ส่งมาและใช้ VLAN ที่ตั้งไว้ในโปรไฟล์เสมอ\n\n❌ ทำไมข้ออื่นผิด:\nA. LAG Mode เกี่ยวกับการรวมพอร์ตกายภาพฝั่ง uplink ไม่เกี่ยวกับการกำหนด VLAN ให้ผู้ใช้\nB. Event Driven RRM ให้ WLC ปรับกำลังส่งทันทีเมื่อเกิดสัญญาณรบกวน เป็นเรื่อง RF ล้วน ๆ\nD. การอนุญาต MIC AP เป็นการยืนยันตัวตนของ "ตัว AP" ที่จะ join WLC ไม่ใช่ของผู้ใช้ไร้สาย\n\n📗 จำไว้สอบ: dynamic VLAN assignment = Allow AAA Override + RADIUS attribute Tunnel-Private-Group-ID',
  },
  {
    id: 342,
    kind: 'single',
    image: v4q342,
    prompt:
      'Refer to the exhibit. Router R1 is running three different routing protocols. Which route characteristic is used by the router to forward the packet that it receives for destination IP 172.16.32.1?',
    options: [
      { key: 'A', text: 'longest prefix' },
      { key: 'B', text: 'administrative distance' },
      { key: 'C', text: 'cost' },
      { key: 'D', text: 'metric' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ลำดับการตัดสินใจส่งต่อแพ็กเก็ตของเราเตอร์\n1️⃣ Longest prefix match — เลือกเส้นทางที่ subnet mask ยาวที่สุดที่ยังครอบคลุมปลายทาง ⭐ ทำก่อนเสมอ\n2️⃣ Administrative distance — ใช้ก็ต่อเมื่อมีหลายโปรโตคอลเสนอ "prefix เดียวกันเป๊ะ"\n3️⃣ Metric — ใช้ก็ต่อเมื่อเป็นโปรโตคอลเดียวกันและ prefix เดียวกัน\n\n🔍 อ่าน exhibit — ปลายทาง 172.16.32.1\nD  172.16.32.0/27  [90/2888597172]  via 20.1.1.1   → /27 ครอบคลุม .0-.31 → .1 อยู่ในช่วง ✔\nO  172.16.32.0/19  [110/292094]     via 20.1.1.10  → /19 ครอบคลุม 172.16.32.0-172.16.63.255 ✔\nR  172.16.32.0/24  [120/2]          via 20.1.1.3   → /24 ครอบคลุม .0-.255 ✔\n\nทั้งสามเส้นทางครอบคลุมปลายทางหมด แต่มี prefix ยาวไม่เท่ากัน\nเรียงความยาว: /27 (ยาวสุด) > /24 > /19\n\n✅ ทำไม A ถูก: เมื่อ prefix ไม่เท่ากัน เราเตอร์จะใช้กฎ longest prefix match เป็นตัวตัดสินอันดับแรก จึงเลือกเส้นทาง EIGRP /27 ทันที โดย "ไม่สนใจ" ว่า AD ของ EIGRP (90) จะสูงหรือต่ำกว่าใคร\n\n❌ ทำไมข้ออื่นผิด:\nB. AD จะถูกนำมาเทียบก็ต่อเมื่อสองโปรโตคอลเสนอ prefix ที่เหมือนกันทุกประการ เช่น ทั้งคู่เป็น /27 — กับดักที่คนตอบผิดมากที่สุด ⭐\nC. cost เป็นชื่อ metric ของ OSPF ใช้เทียบกันเองภายใน OSPF เท่านั้น\nD. metric ใช้เทียบเส้นทางจากโปรโตคอลเดียวกันที่มี prefix เดียวกัน\n\n📗 จำไว้สอบ: prefix ยาวสุดชนะก่อน → แล้วค่อย AD → แล้วค่อย metric — ห้ามสลับลำดับ',
  },
  {
    id: 343,
    kind: 'single',
    image: v4q343,
    prompt:
      'Refer to the exhibit. Router R1 Fa0/0 cannot ping router R3 Fa0/1. Which action must be taken in router R1 to help resolve the configuration issue?',
    options: [
      { key: 'A', text: 'set the default gateway as 20.20.20.2' },
      { key: 'B', text: 'configure a static route with Fa0/1 as the egress interface to reach the 20.20.2.0/24 network' },
      { key: 'C', text: 'configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0/24 network' },
      { key: 'D', text: 'set the default network as 20.20.20.0/24' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — เราเตอร์ส่งแพ็กเก็ตไปยังเครือข่ายที่ไม่มีในตารางเส้นทางไม่ได้\n🔍 อ่าน exhibit\nโทโพโลยี: R1 Fa0/0 (10.10.10.1) ── (10.10.10.2) R2 Fa0/0 ... R2 Fa0/1 (20.20.20.1) ── (20.20.20.2) R3 Fa0/1\n\nR1#show ip route\n C  10.10.10.0 is directly connected, FastEthernet0/0\n Gateway of last resort is not set\n → R1 รู้จักแค่ 10.10.10.0/24 ไม่มีทางไป 20.20.20.0/24 เลย ⚠️\n\nR2#show ip route\n C  20.20.20.0 directly connected, Fa0/1\n C  10.10.10.0 directly connected, Fa0/0\n → R2 รู้จักทั้งสองฝั่ง ทำหน้าที่เป็นทางผ่าน\n\nR3#show ip route\n C  20.20.20.0 directly connected, Fa0/1\n S  10.10.10.0 [1/0] via 20.20.20.1\n → R3 มีเส้นทางกลับมาหา 10.10.10.0 แล้ว (ขาไปกลับต้องครบทั้งสองทิศ)\n\n🔧 คำสั่งที่ต้องเพิ่มบน R1\nR1(config)# ip route 20.20.20.0 255.255.255.0 10.10.10.2\n\n✅ ทำไม C ถูก: R1 ต้องมีเส้นทางไปยัง 20.20.20.0/24 โดยชี้ next hop ไปที่ 10.10.10.2 ซึ่งเป็นอินเทอร์เฟซของ R2 บนเครือข่ายที่ R1 ต่ออยู่ เมื่อเพิ่มแล้วขาไปครบและ R3 ก็มีเส้นทางกลับอยู่แล้ว ping จึงสำเร็จ\n\n❌ ทำไมข้ออื่นผิด:\nA. ip default-gateway ใช้กับอุปกรณ์ที่ "ปิด" การ routing (เช่นสวิตช์ L2) บนเราเตอร์ที่เปิด ip routing อยู่คำสั่งนี้ไม่มีผล และ 20.20.20.2 ก็ไม่ได้อยู่ติดกับ R1\nB. next hop ต้องเป็น 10.10.10.2 ไม่ใช่ออกทาง Fa0/1 (ซึ่งเป็นอินเทอร์เฟซที่ไม่ได้ชี้ไปหา R2) และเลข 20.20.2.0/24 ก็ผิดจากเครือข่ายจริง\nD. ip default-network เป็นคำสั่งเก่าที่ใช้กับ classful routing ปัจจุบันเลิกใช้แล้ว และไม่ได้แก้ปัญหาเส้นทางเฉพาะเจาะจง\n\n📗 จำไว้สอบ: next hop ต้องเป็น IP ที่อยู่ในซับเน็ตที่เราต่อตรงอยู่เสมอ • ping สำเร็จต้องมีเส้นทางครบทั้งไปและกลับ',
  },
  {
    id: 344,
    kind: 'single',
    prompt: 'By default, how does EIGRP determine the metric of a route for the routing table?',
    options: [
      { key: 'A', text: 'It uses the bandwidth and delay values of the path to calculate the route metric.' },
      { key: 'B', text: 'It uses a default metric of 10 for all routes that are learned by the router.' },
      {
        key: 'C',
        text: 'It counts the number of hops between the receiving and destination routers and uses that value as the metric.',
      },
      {
        key: 'D',
        text: 'It uses a reference bandwidth and the actual bandwidth of the connected link to calculate the route metric.',
      },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — EIGRP composite metric\nEIGRP คำนวณ metric จากค่า K constant ห้าตัว แต่โดยดีฟอลต์เปิดใช้เพียงสองตัว\nK1 = 1 (Bandwidth)  ⭐\nK2 = 0 (Load)\nK3 = 1 (Delay)      ⭐\nK4 = 0, K5 = 0 (Reliability, MTU)\n\nสูตรแบบดีฟอลต์ (classic metric)\nMetric = 256 × [ (10^7 / แบนด์วิดท์ต่ำสุดบนเส้นทาง หน่วย Kbps) + (ผลรวม delay หน่วยสิบไมโครวินาที) ]\n\n💡 จุดที่ควรสังเกต\n• ใช้แบนด์วิดท์ "ต่ำสุด" (bottleneck) ตลอดเส้นทาง ไม่ใช่ผลรวม\n• ใช้ delay "รวม" ของทุกอินเทอร์เฟซขาออกตลอดเส้นทาง\n• Load กับ Reliability ปิดอยู่โดยดีฟอลต์เพราะเป็นค่าที่แกว่งตลอดเวลา ถ้าเปิดจะทำให้เส้นทางไม่นิ่ง\n\n✅ ทำไม A ถูก: bandwidth และ delay คือสองตัวแปรที่มีน้ำหนักในสูตรดีฟอลต์ (K1=K3=1) ตรงตามที่ EIGRP ใช้จริง\n\n❌ ทำไมข้ออื่นผิด:\nB. EIGRP ไม่มี metric คงที่ 10 (ค่า 10 คือ hop count สูงสุดดีฟอลต์ของ... ไม่ใช่ทั้งนั้น — ไม่มีที่มา)\nC. การนับ hop เป็นวิธีของ RIP ซึ่งจำกัดที่ 15 hop — EIGRP ใช้ hop count เพียงเพื่อจำกัดขอบเขต (สูงสุด 100) ไม่ได้ใช้เป็น metric\nD. reference bandwidth หารด้วยแบนด์วิดท์จริงเป็นสูตร cost ของ OSPF (ดีฟอลต์ 100 Mbps) ไม่ใช่ของ EIGRP ⭐ ตัวลวงหลัก\n\n📗 จำไว้สอบ: EIGRP = bandwidth + delay (K1, K3) • OSPF = 100 Mbps ÷ bandwidth • RIP = hop count',
  },
  {
    id: 345,
    kind: 'single',
    prompt:
      'Router R1 must send all traffic without a matching routing-table entry to 192.168.1.1. Which configuration accomplishes this task?',
    options: [
      { key: 'A', text: 'R1(config)#ip routing / R1(config)#ip route default-route 192.168.1.1' },
      { key: 'B', text: 'R1(config)#ip routing / R1(config)#ip route 192.168.1.1 0.0.0.0 0.0.0.0' },
      { key: 'C', text: 'R1(config)#ip routing / R1(config)#ip route 0.0.0.0 0.0.0.0 192.168.1.1' },
      { key: 'D', text: 'R1(config)#ip routing / R1(config)#ip default-gateway 192.168.1.1' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — โครงสร้างคำสั่ง static route\nip route <เครือข่ายปลายทาง> <subnet mask> <next hop หรือ อินเทอร์เฟซขาออก> [AD]\n\nDefault route (เส้นทางสุดท้าย) คือ static route ที่ปลายทางเป็น 0.0.0.0 และ mask เป็น 0.0.0.0\n• 0.0.0.0/0 = prefix ยาว 0 บิต → ตรงกับทุกที่อยู่ IP\n• เพราะเป็น prefix ที่สั้นที่สุด กฎ longest prefix match จึงเลือกมันเป็นตัวสุดท้ายเมื่อไม่มีเส้นทางอื่นตรงกว่า ⭐\n\n🔧 คำสั่งที่ถูกต้อง\nR1(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.1\nตรวจสอบด้วย show ip route → จะเห็นบรรทัด "Gateway of last resort is 192.168.1.1 to network 0.0.0.0" และรายการ S* 0.0.0.0/0\n\n✅ ทำไม C ถูก: เรียงลำดับพารามิเตอร์ถูกต้อง — ปลายทาง 0.0.0.0, mask 0.0.0.0, next hop 192.168.1.1 ทำให้ทราฟฟิกที่ไม่ตรงกับเส้นทางใดเลยถูกส่งไปยัง 192.168.1.1\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีคีย์เวิร์ด default-route ในไวยากรณ์ของคำสั่ง ip route\nB. สลับตำแหน่งกัน — เขียนเป็นการสร้างเส้นทางไปยังเครือข่าย "192.168.1.1" ด้วย mask 0.0.0.0 และ next hop 0.0.0.0 ซึ่งไม่มีความหมาย ⭐ กับดักหลัก\nD. ip default-gateway ใช้กับอุปกรณ์ที่ปิด IP routing เท่านั้น (เช่นสวิตช์ L2 หรือเราเตอร์ในโหมด ROMmon) เมื่อ ip routing เปิดอยู่คำสั่งนี้จะถูกเมิน\n\n📗 จำไว้สอบ: default route = ip route 0.0.0.0 0.0.0.0 <next hop> • ip default-gateway ใช้กับอุปกรณ์ที่ไม่ทำ routing',
  },
  {
    id: 346,
    kind: 'single',
    prompt: 'A packet is destined for 10.10.1.22. Which static route does the router choose to forward the packet?',
    options: [
      { key: 'A', text: 'ip route 10.10.1.0 255.255.255.240 10.10.255.1' },
      { key: 'B', text: 'ip route 10.10.1.20 255.255.255.252 10.10.255.1' },
      { key: 'C', text: 'ip route 10.10.1.16 255.255.255.252 10.10.255.1' },
      { key: 'D', text: 'ip route 10.10.1.20 255.255.255.254 10.10.255.1' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ตรวจทีละเส้นทางว่า "ครอบคลุม" ปลายทางหรือไม่ ก่อนจะเทียบความยาว\nปลายทางที่ต้องการ: 10.10.1.22\n\n🔢 คำนวณช่วงของแต่ละตัวเลือก\nA. 10.10.1.0 /28 (255.255.255.240) → block 16 → ช่วง 10.10.1.0 - 10.10.1.15\n   .22 ไม่อยู่ในช่วง ✘\nB. 10.10.1.20 /30 (255.255.255.252) → block 4 → ช่วง 10.10.1.20 - 10.10.1.23 ⭐\n   .22 อยู่ในช่วง ✔ (ใช้ได้จริง: .21 และ .22 เป็นโฮสต์, .20 เน็ตเวิร์ก, .23 broadcast)\nC. 10.10.1.16 /30 → block 4 → ช่วง 10.10.1.16 - 10.10.1.19\n   .22 ไม่อยู่ในช่วง ✘\nD. 10.10.1.20 /31 (255.255.255.254) → block 2 → ช่วง 10.10.1.20 - 10.10.1.21\n   .22 ไม่อยู่ในช่วง ✘\n\n✅ ทำไม B ถูก: มีเพียงเส้นทางเดียวเท่านั้นที่ครอบคลุม 10.10.1.22 คือ 10.10.1.20/30 ซึ่งมีช่วง .20-.23 — จึงไม่ต้องไปเทียบความยาว prefix กับใครเลย\n\n💡 เทคนิคคำนวณเร็ว: block size = 256 − ค่าออกเตตสุดท้ายของ mask\n255.255.255.240 → 256-240 = 16 → ขอบซับเน็ตที่ 0, 16, 32, 48...\n255.255.255.252 → 256-252 = 4  → ขอบซับเน็ตที่ 0, 4, 8, 12, 16, 20, 24...\n255.255.255.254 → 256-254 = 2  → ขอบซับเน็ตที่ 0, 2, 4, 6...\n\n📗 จำไว้สอบ: หาช่วงของแต่ละเส้นทางก่อน คัดตัวที่ไม่ครอบคลุมทิ้ง แล้วค่อยเลือก prefix ที่ยาวที่สุดจากตัวที่เหลือ',
  },
  {
    id: 347,
    kind: 'single',
    image: v4q347,
    prompt: 'Refer to the exhibit. How does the router manage traffic to 192.168.12.16?',
    options: [
      { key: 'A', text: 'It chooses the EIGRP route because it has the lowest administrative distance.' },
      { key: 'B', text: 'It load-balances traffic between all three routes.' },
      { key: 'C', text: 'It chooses the OSPF route because it has the longest prefix inclusive of the destination address.' },
      { key: 'D', text: 'It selects the RIP route because it has the longest prefix inclusive of the destination address.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำว่า "inclusive of the destination address" คือกุญแจของข้อนี้\nเส้นทางที่ prefix ยาวกว่าไม่ได้ชนะเสมอไป — มันต้อง "ครอบคลุมปลายทาง" ด้วย\n\n🔍 อ่าน exhibit และคำนวณช่วง สำหรับปลายทาง 192.168.12.16\nEIGRP: 192.168.12.0/24 → ช่วง 192.168.12.0 - 192.168.12.255 → ครอบคลุม ✔\nRIP  : 192.168.12.0/27 → block 32 → ช่วง 192.168.12.0 - 192.168.12.31 → ครอบคลุม ✔ ⭐\nOSPF : 192.168.12.0/28 → block 16 → ช่วง 192.168.12.0 - 192.168.12.15 → ไม่ครอบคลุม ✘ (.16 เริ่มซับเน็ตถัดไปพอดี)\n\n🔗 คัดเหลือสองเส้นทางที่ครอบคลุม แล้วเทียบความยาว: /27 ยาวกว่า /24 → RIP ชนะ\n\n✅ ทำไม D ถูก: แม้ OSPF จะมี prefix ยาวที่สุด (/28) แต่ช่วงของมันจบที่ .15 จึงไม่ครอบคลุม .16 ต้องตัดทิ้ง เหลือ RIP (/27) เป็นเส้นทางที่ยาวที่สุดในบรรดาที่ครอบคลุมปลายทาง\n\n❌ ทำไมข้ออื่นผิด:\nA. AD จะถูกนำมาเทียบก็ต่อเมื่อ prefix เท่ากันเป๊ะ ที่นี่ทั้งสามเส้นทางมี mask ต่างกัน จึงไม่เข้าเงื่อนไข\nB. การทำ load balancing เกิดได้เฉพาะเส้นทางจากโปรโตคอลเดียวกัน prefix เดียวกัน และ metric เท่ากัน\nC. OSPF /28 ครอบคลุมแค่ .0-.15 ไม่ถึง .16 ⭐ นี่คือกับดักที่ออกแบบมาดักคนที่เห็น "/28 ยาวสุด" แล้วตอบทันทีโดยไม่คำนวณช่วง\n\n📗 จำไว้สอบ: /28 block 16 → 0-15, 16-31 • /27 block 32 → 0-31, 32-63 • ต้องคำนวณช่วงก่อนเทียบความยาวเสมอ',
  },
  {
    id: 348,
    kind: 'multi',
    prompt: 'What are two reasons for an engineer to configure a floating static route? (Choose two.)',
    options: [
      { key: 'A', text: 'to enable fallback static routing when the dynamic routing protocol fails' },
      { key: 'B', text: 'to route traffic differently based on the source IP of the packet' },
      { key: 'C', text: 'to automatically route traffic on a secondary path when the primary path goes down' },
      { key: 'D', text: 'to support load balancing via static routing' },
      { key: 'E', text: 'to control the return path of traffic that is sent from the router' },
    ],
    correct: ['A', 'C'],
    explanation:
      '📘 แนวคิด — floating static route คือ static route ที่ตั้ง AD ให้ "สูงกว่า" เส้นทางหลัก\nโดยดีฟอลต์ static route มี AD = 1 ซึ่งชนะทุกโปรโตคอลไดนามิก ถ้าอยากให้มันเป็นแค่ตัวสำรอง ต้องตั้ง AD ให้สูงกว่าโปรโตคอลหลัก\n\nตาราง AD ที่ต้องจำ\nConnected  0\nStatic     1\neBGP      20\nEIGRP     90\nOSPF     110\nIS-IS    115\nRIP      120\nEIGRP external 170\niBGP     200\n\n🔧 ตัวอย่าง: เส้นทางหลักเรียนผ่าน OSPF (AD 110) ต้องการสำรองผ่านลิงก์ WAN สำรอง\nR1(config)# ip route 10.0.0.0 255.0.0.0 192.168.99.2 200\n(ใส่ 200 ซึ่งสูงกว่า 110 → static route นี้จะซ่อนอยู่ ไม่ถูกติดตั้งในตารางเส้นทาง)\nเมื่อ OSPF สูญเสียเส้นทางนั้น floating static จะโผล่เข้ามาแทนโดยอัตโนมัติ และเมื่อ OSPF กลับมา มันก็ถอยออกไปเอง\n\n✅ ทำไม A + C ถูก: ทั้งสองข้อคือคำอธิบายเดียวกันของหน้าที่เดียว — เป็นเส้นทางสำรองที่เข้ามาทำงานอัตโนมัติเมื่อเส้นทางหลัก (จากโปรโตคอลไดนามิกหรือ static เดิม) หายไป\n\n❌ ทำไมข้ออื่นผิด:\nB. การเลือกเส้นทางตาม source IP คือ Policy-Based Routing (PBR) ซึ่งใช้ route-map ไม่ใช่ floating static\nD. ตรงข้ามกับหลักการ — floating static ตั้ง AD ให้ต่างกันโดยเจตนา จึงมีเส้นทางเดียวถูกติดตั้ง ไม่เกิด load balancing (ถ้าอยากแบ่งโหลดต้องให้ AD เท่ากัน)\nE. เส้นทางบนเราเตอร์เราคุมได้แค่ทิศขาออก ทิศขากลับขึ้นอยู่กับตารางเส้นทางของอุปกรณ์ปลายทาง\n\n📗 จำไว้สอบ: floating static = static + AD ที่สูงกว่าเส้นทางหลัก • ถ้าอยากให้เป็นสำรองของ OSPF ต้องใส่ AD > 110',
  },
  {
    id: 349,
    kind: 'single',
    image: v4q349,
    prompt: 'Refer to the exhibit. How does router R1 handle traffic to 192.168.10.16?',
    options: [
      { key: 'A', text: 'It selects the IS-IS route because it has the shortest prefix inclusive of the destination address' },
      { key: 'B', text: 'It selects the RIP route because it has the longest prefix inclusive of the destination address' },
      { key: 'C', text: 'It selects the OSPF route because it has the lowest cost' },
      { key: 'D', text: 'It selects the EIGRP route because it has the lowest administrative distance' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — longest prefix match มาก่อน administrative distance เสมอ\n🔍 อ่าน exhibit และคำนวณช่วง สำหรับปลายทาง 192.168.10.16\nD    192.168.10.0/24  [90/2679326]  → ช่วง 192.168.10.0 - 192.168.10.255 → ครอบคลุม ✔\nR    192.168.10.0/27  [120/3]       → block 32 → ช่วง 192.168.10.0 - 192.168.10.31 → ครอบคลุม ✔ ⭐ ยาวที่สุด\nO    192.168.10.0/23  [110/2]       → ช่วง 192.168.10.0 - 192.168.11.255 → ครอบคลุม ✔\ni L1 192.168.10.0/13  [115/30]      → ช่วงกว้างมาก → ครอบคลุม ✔\n\nทั้งสี่เส้นทางครอบคลุมปลายทางทั้งหมด จึงต้องเทียบความยาว prefix\nเรียงจากยาวไปสั้น: /27 > /24 > /23 > /13\n\n✅ ทำไม B ถูก: RIP มี prefix /27 ยาวที่สุดในบรรดาเส้นทางที่ครอบคลุม 192.168.10.16 จึงถูกเลือก แม้ว่า RIP จะมี AD สูงที่สุด (120) ก็ตาม เพราะ AD จะถูกนำมาเทียบก็ต่อเมื่อ prefix เท่ากันเท่านั้น\n\n❌ ทำไมข้ออื่นผิด:\nA. IS-IS มี prefix /13 สั้นที่สุด — เราเตอร์เลือก "ยาวที่สุด" ไม่ใช่สั้นที่สุด\nC. cost ของ OSPF ใช้เทียบกันเองภายใน OSPF และ /23 ก็ยังสั้นกว่า /27\nD. AD ของ EIGRP ต่ำกว่าจริง แต่ prefix /24 สั้นกว่า /27 ของ RIP จึงแพ้ในขั้นตอนแรกและไม่มีโอกาสได้เทียบ AD เลย ⭐ กับดักที่พบบ่อยที่สุด\n\n📗 จำไว้สอบ: เจอ prefix ต่างกัน = ตัดสินด้วยความยาว • เจอ prefix เหมือนกัน = ตัดสินด้วย AD • โปรโตคอลเดียวกัน prefix เดียวกัน = ตัดสินด้วย metric',
  },
  {
    id: 350,
    kind: 'multi',
    image: v4q350,
    prompt:
      'Refer to the exhibit. A router received these five routes from different routing information sources. Which two routes does the router install in its routing table? (Choose two.)',
    options: [
      { key: 'A', text: 'OSPF route 10.0.0.0/30' },
      { key: 'B', text: 'IBGP route 10.0.0.0/30' },
      { key: 'C', text: 'OSPF route 10.0.0.0/16' },
      { key: 'D', text: 'EIGRP route 10.0.0.1/32' },
      { key: 'E', text: 'RIP route 10.0.0.0/30' },
    ],
    correct: ['A', 'D'],
    explanation:
      '📘 แนวคิด — prefix ที่ต่างกัน = คนละปลายทาง ไม่ต้องแข่งกัน\nเราเตอร์จะเทียบ administrative distance ก็ต่อเมื่อ "prefix เหมือนกันเป๊ะ" เท่านั้น\n\n🔍 จัดกลุ่มเส้นทางทั้งห้าจาก exhibit\nกลุ่มที่ 1 — prefix 10.0.0.0/30 มีสามเจ้าเสนอเข้ามา ต้องแข่ง AD กัน\n   • OSPF  AD 110 ⭐ ต่ำสุด → ชนะ ติดตั้งลงตาราง\n   • RIP   AD 120 → แพ้\n   • iBGP  AD 200 → แพ้\nกลุ่มที่ 2 — prefix 10.0.0.0/16 มี OSPF เจ้าเดียว → ไม่มีคู่แข่ง\nกลุ่มที่ 3 — prefix 10.0.0.1/32 มี EIGRP เจ้าเดียว → ไม่มีคู่แข่ง ⭐ และเป็น host route ที่เจาะจงที่สุด\n\n✅ ทำไม A + D ถูก: OSPF ชนะการแข่งขัน AD ในกลุ่ม /30 (110 < 120 < 200) และ EIGRP /32 ไม่มีใครแข่งด้วยจึงถูกติดตั้งทันที — สองข้อนี้คือคำตอบที่คีย์ของข้อสอบต้องการ\n\n⚠️ หมายเหตุ: บนเราเตอร์จริง เส้นทาง OSPF 10.0.0.0/16 (ตัวเลือก C) ก็จะถูกติดตั้งด้วยเช่นกัน เพราะเป็นคนละ prefix และไม่มีใครแข่ง รวมแล้วตารางเส้นทางจะมี "สาม" รายการ ไม่ใช่สอง คำถามที่บังคับให้เลือกเพียงสองข้อจึงเป็นจุดบกพร่องของโจทย์ต้นฉบับ — ให้ตอบตามคีย์ที่ยอมรับกันคือ A และ D แต่ต้องเข้าใจว่าในความเป็นจริง C ก็อยู่ในตารางด้วย\n\n❌ ทำไมข้ออื่นผิด:\nB. iBGP มี AD 200 สูงที่สุด แพ้ทั้ง OSPF และ RIP ในกลุ่ม /30\nE. RIP มี AD 120 แพ้ OSPF ที่ 110\n\n📗 จำไว้สอบ: AD — Connected 0, Static 1, eBGP 20, EIGRP 90, OSPF 110, IS-IS 115, RIP 120, EIGRP ext 170, iBGP 200',
  },
  {
    id: 351,
    kind: 'single',
    image: v4q351,
    prompt: 'Refer to the exhibit. To which device does Router1 send packets that are destined to host 10.10.13.165?',
    options: [
      { key: 'A', text: 'Router2' },
      { key: 'B', text: 'Router3' },
      { key: 'C', text: 'Router4' },
      { key: 'D', text: 'Router5' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สองขั้นตอน: หา prefix ที่ตรงที่สุด แล้วแปลง next hop เป็นชื่ออุปกรณ์\n\n🔢 ขั้นที่ 1 — คำนวณช่วงของแต่ละเส้นทาง สำหรับปลายทาง 10.10.13.165\nO  10.10.13.0/25   → block 128 → ช่วง .0 - .127     → .165 ไม่อยู่ ✘\nO  10.10.13.128/28 → block 16  → ช่วง .128 - .143   → .165 ไม่อยู่ ✘\nO  10.10.13.144/28 → block 16  → ช่วง .144 - .159   → .165 ไม่อยู่ ✘\nO  10.10.13.160/29 → block 8   → ช่วง .160 - .167   → .165 อยู่ ✔ ⭐\nO  10.10.13.208/29 → block 8   → ช่วง .208 - .215   → .165 ไม่อยู่ ✘\nเส้นทางที่ชนะ: 10.10.13.160/29 via 10.10.10.5, GigabitEthernet0/1\n\n🔢 ขั้นที่ 2 — next hop 10.10.10.5 อยู่บนลิงก์ไหน\nจากโทโพโลยี ลิงก์ /30 ทั้งสี่เส้นของ Router1\n  10.10.10.0/30  → ช่วง .0-.3   (ใช้ได้ .1, .2)   → Router2\n  10.10.10.4/30  → ช่วง .4-.7   (ใช้ได้ .5, .6)   → Router3 ⭐ 10.10.10.5 อยู่ในช่วงนี้\n  10.10.10.8/30  → ช่วง .8-.11  (ใช้ได้ .9, .10)  → Router4\n  10.10.10.12/30 → ช่วง .12-.15 (ใช้ได้ .13, .14) → Router5\n\n✅ ทำไม B ถูก: เส้นทางที่ตรงที่สุดคือ 10.10.13.160/29 ซึ่งชี้ next hop ไปที่ 10.10.10.5 และ IP นั้นอยู่ในซับเน็ต 10.10.10.4/30 ที่เชื่อมกับ Router3\n\n❌ ทำไมข้ออื่นผิด:\nA. Router2 อยู่บน 10.10.10.0/30 (next hop จะเป็น 10.10.10.1) ซึ่งเป็นเส้นทางของ 10.10.13.0/25\nC. Router4 อยู่บน 10.10.10.8/30 (next hop 10.10.10.9) เป็นเส้นทางของ 10.10.13.144/28\nD. Router5 อยู่บน 10.10.10.12/30 (next hop 10.10.10.13) เป็นเส้นทางของ 10.10.13.208/29\n\n📗 จำไว้สอบ: /29 block 8 → 160, 168, 176... • /28 block 16 → 128, 144, 160... • /30 block 4 → 0, 4, 8, 12',
  },
  {
    id: 352,
    kind: 'single',
    prompt: 'R1 has learned route 10.10.10.0/24 via numerous routing protocols. Which route is installed?',
    options: [
      { key: 'A', text: 'route with the next hop that has the highest IP' },
      { key: 'B', text: 'route with the lowest cost' },
      { key: 'C', text: 'route with the lowest administrative distance' },
      { key: 'D', text: 'route with the shortest prefix length' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — คำสำคัญในโจทย์คือ "10.10.10.0/24 via numerous routing protocols"\nprefix ระบุมาแล้วว่าเป็น /24 เหมือนกันทุกเส้นทาง จึงข้ามขั้นตอน longest prefix match ไปได้เลย และเมื่อมาจาก "คนละโปรโตคอล" ตัวตัดสินคือ administrative distance ⭐\n\nลำดับการตัดสินใจแบบเต็ม\n1️⃣ Longest prefix match — ในข้อนี้เท่ากันหมด ข้ามไป\n2️⃣ Administrative distance — ใช้ตัดสินเมื่อ prefix เดียวกันแต่คนละโปรโตคอล ⭐\n3️⃣ Metric — ใช้เมื่อโปรโตคอลเดียวกันและ prefix เดียวกัน\n\nตาราง AD (ค่าต่ำ = น่าเชื่อถือกว่า = ชนะ)\nConnected 0 / Static 1 / eBGP 20 / EIGRP 90 / OSPF 110 / IS-IS 115 / RIP 120 / EIGRP ext 170 / iBGP 200\n\n💡 ทำไมต้องมี AD: metric ของแต่ละโปรโตคอลคำนวณคนละวิธี (hop count เทียบกับ cost เทียบกับ composite metric) จึงเอามาเทียบกันตรง ๆ ไม่ได้ Cisco จึงใช้ AD เป็นตัววัด "ความน่าเชื่อถือ" ของแหล่งข้อมูลแทน\n\n✅ ทำไม C ถูก: เมื่อ prefix เท่ากันและมาจากหลายโปรโตคอล เราเตอร์ติดตั้งเฉพาะเส้นทางจากโปรโตคอลที่มี AD ต่ำสุดลงในตารางเส้นทาง ส่วนที่เหลือถูกเก็บไว้ในฐานข้อมูลของโปรโตคอลนั้น ๆ (RIB ของแต่ละโปรโตคอล) เผื่อไว้ใช้เมื่อตัวที่ชนะหายไป\n\n❌ ทำไมข้ออื่นผิด:\nA. ค่า IP ของ next hop ไม่เคยเป็นเกณฑ์ตัดสินในการเลือกเส้นทาง\nB. cost เป็นชื่อ metric ของ OSPF เทียบข้ามโปรโตคอลไม่ได้\nD. prefix สั้นที่สุดจะแพ้เสมอ (กฎคือ "ยาวที่สุดชนะ") และในข้อนี้ prefix ก็เท่ากันหมดอยู่แล้ว\n\n📗 จำไว้สอบ: prefix เท่ากัน + คนละโปรโตคอล → AD ต่ำสุดชนะ • โปรโตคอลเดียวกัน → metric ต่ำสุดชนะ',
  },
  {
    id: 353,
    kind: 'multi',
    prompt: 'Which two minimum parameters must be configured on an active interface to enable OSPFv2 to operate? (Choose two.)',
    options: [
      { key: 'A', text: 'OSPF process ID' },
      { key: 'B', text: 'OSPF MD5 authentication key' },
      { key: 'C', text: 'OSPF stub flag' },
      { key: 'D', text: 'IPv6 address' },
      { key: 'E', text: 'OSPF area' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — พารามิเตอร์ขั้นต่ำที่ OSPFv2 ต้องมี\nไม่ว่าจะเปิด OSPF ด้วยวิธีใด ก็ต้องระบุสองสิ่งนี้เสมอ\n1️⃣ Process ID — หมายเลขกระบวนการ (1-65535) มีความหมายเฉพาะบนเราเตอร์ตัวนั้น ไม่จำเป็นต้องตรงกับเพื่อนบ้าน ⭐\n2️⃣ Area — หมายเลขพื้นที่ ต้องตรงกันบนอินเทอร์เฟซทั้งสองฝั่งของลิงก์ ไม่งั้นไม่เกิด adjacency ⭐\n\n🔧 สองวิธีในการเปิด OSPF บนอินเทอร์เฟซ\nวิธีที่ 1 — ผ่าน network statement\nR1(config)# router ospf 1              ← process ID\nR1(config-router)# network 10.0.0.0 0.0.0.255 area 0   ← area\nวิธีที่ 2 — สั่งที่อินเทอร์เฟซโดยตรง\nR1(config-if)# ip ospf 1 area 0        ← มีทั้ง process ID และ area ในบรรทัดเดียว\n\nสิ่งที่ต้องตรงกันเพื่อให้เกิด neighbor: area, hello/dead timer, subnet เดียวกัน, MTU, authentication, และต้องไม่ใช่ stub flag ที่ต่างกัน — แต่ process ID "ไม่" ต้องตรงกัน\n\n✅ ทำไม A + E ถูก: ทั้งสองค่าเป็นพารามิเตอร์บังคับที่ไม่มีค่าเริ่มต้นให้ ต้องพิมพ์ระบุเองเสมอไม่ว่าจะใช้วิธีไหน\n\n❌ ทำไมข้ออื่นผิด:\nB. MD5 authentication เป็นตัวเลือกเสริมเพื่อความปลอดภัย OSPF ทำงานได้โดยไม่ต้องมี\nC. stub flag ใช้กับ area ประเภทพิเศษเท่านั้น ไม่ใช่ค่าบังคับ\nD. IPv6 address ใช้กับ OSPFv3 — OSPFv2 รองรับเฉพาะ IPv4 ⭐ ตัวลวงที่ดักคนอ่านโจทย์ไม่ละเอียด\n\n📗 จำไว้สอบ: OSPFv2 = IPv4, ต้องมี process ID + area • process ID ไม่ต้องตรงกัน แต่ area ต้องตรงกัน',
  },
  {
    id: 354,
    kind: 'single',
    image: v4q354,
    prompt:
      'Refer to the exhibit. What commands are needed to add a sub-interface to Ethernet0/0 on R1 to allow for VLAN 20, with IP address 10.20.20.1/24?',
    options: [
      {
        key: 'A',
        text: 'interface ethernet0/0 / encapsulation dot1q 20 / ip address 10.20.20.1 255.255.255.0',
      },
      {
        key: 'B',
        text: 'interface ethernet0/0.20 / encapsulation dot1q 20 / ip address 10.20.20.1 255.255.255.0',
      },
      { key: 'C', text: 'interface ethernet0/0.20 / ip address 10.20.20.1 255.255.255.0' },
      { key: 'D', text: 'interface ethernet0/0 / ip address 10.20.20.1 255.255.255.0' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — router-on-a-stick ต้องมีครบสามบรรทัด\n1️⃣ สร้าง subinterface — ใส่จุดตามด้วยหมายเลข เช่น ethernet0/0.20\n   (ตัวเลขหลังจุดเป็นเพียงชื่อเรียกภายในเครื่อง ไม่จำเป็นต้องตรงกับ VLAN แต่นิยมทำให้ตรงเพื่อความชัดเจน)\n2️⃣ ระบุ VLAN ที่จะถอด/ติดแท็ก — encapsulation dot1Q 20 ⭐ ตัวเลขในบรรทัดนี้ต่างหากที่ต้องตรงกับ VLAN จริง\n3️⃣ ใส่ IP address ให้เป็น default gateway ของ VLAN นั้น\n\n🔍 อ่าน exhibit\nR1: interface Ethernet0/0 / no ip address     ← อินเทอร์เฟซแม่ไม่มี IP (ถูกต้องแล้ว)\nSW1: E0/0 switchport mode trunk               ← ฝั่งสวิตช์เป็น trunk แล้ว\nSW2: E0/2 switchport access vlan 20           ← โฮสต์ VLAN 20 อยู่ปลายทาง\n\n✅ ทำไม B ถูก: มีครบทั้งสามบรรทัด — สร้าง subinterface .20, ประกาศ encapsulation dot1Q 20 เพื่อให้เราเตอร์รู้จักแท็กของ VLAN 20 และใส่ IP 10.20.20.1/24 เป็น gateway\n\n❌ ทำไมข้ออื่นผิด:\nA. ใส่คำสั่ง encapsulation บนอินเทอร์เฟซกายภาพ ซึ่ง IOS ไม่ยอมรับ — คำสั่งนี้ใช้ได้เฉพาะบน subinterface\nC. สร้าง subinterface แล้วแต่ขาด encapsulation dot1Q 20 → เราเตอร์ไม่รู้ว่าต้องรับ/ส่งแท็ก VLAN ไหน อินเทอร์เฟซจึงใช้งานไม่ได้ ⭐ ข้อผิดพลาดที่พบบ่อยที่สุดในงานจริง\nD. ใส่ IP บนอินเทอร์เฟซกายภาพตรง ๆ รองรับได้เพียง VLAN เดียว (แบบไม่ติดแท็ก) จึงทำ inter-VLAN routing ไม่ได้\n\n📗 จำไว้สอบ: subinterface + encapsulation dot1Q <vlan> + ip address = สูตรครบของ router-on-a-stick • ถ้า VLAN นั้นเป็น native ให้เติมคำว่า native ต่อท้าย',
  },
  {
    id: 355,
    kind: 'single',
    image: v4q355,
    prompt: 'Refer to the exhibit. What does router R1 use as its OSPF router-ID?',
    options: [
      { key: 'A', text: '10.10.1.10' },
      { key: 'B', text: '10.10.10.20' },
      { key: 'C', text: '172.16.15.10' },
      { key: 'D', text: '192.168.0.1' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก OSPF Router ID (หยุดทันทีที่เจอ)\n1️⃣ ค่าที่กำหนดเองด้วยคำสั่ง router-id <x.x.x.x> → ชนะทุกกรณี\n2️⃣ IP ที่สูงที่สุดของอินเทอร์เฟซ loopback ที่สถานะ up ⭐\n3️⃣ IP ที่สูงที่สุดของอินเทอร์เฟซกายภาพที่สถานะ up\n\n💡 ทำไม loopback ถึงมาก่อน: loopback ไม่มีวันดาวน์เพราะไม่มีสายกายภาพ Router ID จึงนิ่งตลอดอายุการใช้งาน — นี่คือเหตุผลที่แนวปฏิบัติที่ดีแนะนำให้สร้าง loopback ไว้เสมอ\n\n🔍 อ่าน exhibit — show ip interface brief\nFastEthernet0/0    unassigned      administratively down / down\nGigabitEthernet1/0  192.168.0.1     up / up\nGigabitEthernet2/0  10.10.1.10      up / up\nGigabitEthernet3/0  10.10.10.20     up / up\nGigabitEthernet4/0  unassigned      administratively down / down\nLoopback0           172.16.15.10    (loopback ขึ้นเสมอ) ⭐\n\n✅ ทำไม C ถูก: มี Loopback0 ที่กำหนด IP ไว้และอยู่ในสถานะใช้งานได้ ตามลำดับข้อ 2 ระบบจึงหยิบ 172.16.15.10 มาเป็น Router ID โดยไม่ต้องพิจารณาอินเทอร์เฟซกายภาพเลย\n\n❌ ทำไมข้ออื่นผิด:\nA, B, D. ทั้งสามเป็น IP บนอินเทอร์เฟซกายภาพซึ่งอยู่ในลำดับที่ 3 จะถูกใช้ก็ต่อเมื่อไม่มี loopback เลย (ถ้าเป็นกรณีนั้น ตัวที่ชนะจะเป็น 192.168.0.1 เพราะสูงที่สุดในเชิงตัวเลข)\n\n⚠️ ข้อควรระวัง: Router ID จะไม่เปลี่ยนเองแม้ภายหลังจะสร้าง loopback ใหม่ที่มี IP สูงกว่า ต้องสั่ง clear ip ospf process หรือรีโหลดเราเตอร์ก่อน\n\n📗 จำไว้สอบ: router-id ที่ตั้งเอง > loopback สูงสุด > อินเทอร์เฟซกายภาพสูงสุด • Router ID มีรูปแบบเหมือน IP แต่ไม่ใช่ IP',
  },
  {
    id: 356,
    kind: 'multi',
    image: v4q356,
    prompt:
      'Refer to the exhibit. The loopback1 interface of the Atlanta router must reach the loopback3 interface of the Washington router. Which two static host routes must be configured on the New York router? (Choose two.)',
    options: [
      { key: 'A', text: 'ipv6 route 2000::3/128 s0/0/0' },
      { key: 'B', text: 'ipv6 route 2000::1/128 s0/0/1' },
      { key: 'C', text: 'ipv6 route 2000::1/128 2012::1' },
      { key: 'D', text: 'ipv6 route 2000::1/128 2012::2' },
      { key: 'E', text: 'ipv6 route 2000::3/128 2023::3' },
    ],
    correct: ['C', 'E'],
    explanation:
      '📘 แนวคิด — เส้นทางต้องครบทั้งไปและกลับ และ next hop ต้องเป็น "ของอีกฝั่ง"\n\n🔍 อ่าน exhibit — ผังที่อยู่ IPv6\nAtlanta    : S0/0/0 = 2012::1/126 , Loopback1 = 2000::1/128\nNew-York   : S0/0/0 = 2012::2/126 , S0/0/1 = 2023::2/126 , Loopback2 = 2000::2/128\nWashington : S0/0/0 = 2023::3/126 , Loopback3 = 2000::3/128\nโทโพโลยี: Atlanta ─(2012::/126)─ New-York ─(2023::/126)─ Washington\n\n🔗 New York อยู่ตรงกลาง จึงต้องรู้เส้นทางไปยังปลายทางทั้งสองข้าง\n• ไป Loopback1 ของ Atlanta (2000::1/128) → ออกทาง S0/0/0 next hop = 2012::1 (ฝั่ง Atlanta) ⭐\n• ไป Loopback3 ของ Washington (2000::3/128) → ออกทาง S0/0/1 next hop = 2023::3 (ฝั่ง Washington) ⭐\n\n🔧 คำสั่ง\nNewYork(config)# ipv6 route 2000::1/128 2012::1\nNewYork(config)# ipv6 route 2000::3/128 2023::3\n(Atlanta และ Washington มี default route ::/0 ชี้มาที่ New York อยู่แล้วตามที่ระบุใน exhibit จึงไม่ต้องเพิ่มอะไร)\n\n✅ ทำไม C + E ถูก: ทั้งสองบรรทัดใช้ /128 ซึ่งเป็น host route ตามที่โจทย์ระบุ และชี้ next hop ไปยัง IP ของเราเตอร์ปลายทางแต่ละฝั่งได้ถูกต้อง\n\n❌ ทำไมข้ออื่นผิด:\nA. ชี้ 2000::3 (ของ Washington) ออกทาง s0/0/0 ซึ่งหันไปทาง Atlanta — ผิดทิศทางโดยสิ้นเชิง\nB. ชี้ 2000::1 (ของ Atlanta) ออกทาง s0/0/1 ซึ่งหันไปทาง Washington — ผิดทิศเช่นกัน\nD. 2012::2 คืออินเทอร์เฟซของ New York เอง การชี้ next hop มาที่ตัวเองทำให้เกิดลูป ⭐ ข้อผิดพลาดคลาสสิก\n\n📗 จำไว้สอบ: host route IPv6 = /128 (เทียบเท่า /32 ของ IPv4) • next hop ต้องเป็น IP ของ "เพื่อนบ้าน" ไม่ใช่ของตัวเอง',
  },
  {
    id: 357,
    kind: 'single',
    image: v4q357,
    prompt:
      'Refer to the exhibit. After the configuration is applied, the two routers fail to establish an OSPF neighbor relationship. What is the reason for the problem?',
    options: [
      { key: 'A', text: 'The OSPF process IDs are mismatched' },
      { key: 'B', text: 'The network statement on Router1 is misconfigured' },
      { key: 'C', text: 'Router2 is using the default hello timer' },
      { key: 'D', text: 'The OSPF router IDs are mismatched' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สิ่งที่ต้องตรงกันจึงจะเกิด OSPF neighbor\n✔ ต้องตรงกัน: Area ID, Hello interval, Dead interval ⭐, ซับเน็ตและ mask, MTU, ประเภทเครือข่าย, authentication, สถานะ stub flag\n✘ ไม่ต้องตรงกัน: Process ID, Router ID (ห้ามซ้ำกันด้วยซ้ำ), priority, cost\n\n🔍 อ่าน exhibit เทียบสองฝั่ง\nRouter1                              Router2\ninterface Gi1/1                      interface Gi1/1\n ip address 10.10.10.1 /30            ip address 10.10.10.2 /30\n ip ospf hello-interval 5  ⚠️        (ไม่ได้ตั้ง → ใช้ดีฟอลต์ 10)\nrouter ospf 1000                     router ospf 1001\n router-id 1.1.1.1                    router-id 2.2.2.2\n network 10.10.10.0 0.0.0.3 area 0    network 10.10.10.0 0.0.0.3 area 0\n                                      passive-interface default\n                                      no passive-interface Gi1/1  ← ยกเลิก passive ให้ Gi1/1 แล้ว จึงไม่ใช่ปัญหา\n\n🔗 วิเคราะห์: Router1 ตั้ง hello-interval เป็น 5 วินาที (ทำให้ dead interval กลายเป็น 20 อัตโนมัติ) ส่วน Router2 ใช้ดีฟอลต์ 10/40 → ค่าไม่ตรงกัน เราเตอร์ทั้งสองจะทิ้ง Hello packet ของกันและกัน จึงไม่มีวันเกิด neighbor\n\n✅ ทำไม C ถูก: hello timer ที่ไม่ตรงกันเป็นสาเหตุเดียวในคอนฟิกนี้ที่ขัดขวางการเกิด adjacency — แก้ได้โดยตั้ง ip ospf hello-interval 5 บน Router2 ด้วย หรือลบคำสั่งนั้นออกจาก Router1\n\n❌ ทำไมข้ออื่นผิด:\nA. Process ID (1000 กับ 1001) เป็นค่าเฉพาะเครื่อง ไม่ต้องตรงกันเลย ⭐ ตัวลวงที่พลาดกันมากที่สุด\nB. network 10.10.10.0 0.0.0.3 area 0 ถูกต้องแล้ว — wildcard 0.0.0.3 ตรงกับ /30 พอดี และครอบคลุมอินเทอร์เฟซ Gi1/1\nD. Router ID ต้อง "ไม่ซ้ำกัน" ต่างหาก การที่ 1.1.1.1 กับ 2.2.2.2 ต่างกันคือสิ่งที่ถูกต้องแล้ว\n\n📗 จำไว้สอบ: เปลี่ยน hello-interval แล้ว dead-interval จะกลายเป็น 4 เท่าโดยอัตโนมัติ • ทั้งสองค่าต้องตรงกันทั้งสองฝั่ง',
  },
  {
    id: 358,
    kind: 'single',
    image: v4q358,
    prompt: 'Refer to the exhibit. Which route type is configured to reach the Internet?',
    options: [
      { key: 'A', text: 'floating static route' },
      { key: 'B', text: 'host route' },
      { key: 'C', text: 'network route' },
      { key: 'D', text: 'default route' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — แยกประเภทเส้นทางจาก prefix\n• Default route — 0.0.0.0/0 ใช้เมื่อไม่มีเส้นทางอื่นตรงกว่า ⭐ แสดงเป็น "Gateway of last resort"\n• Host route — /32 (IPv4) หรือ /128 (IPv6) ชี้ไปยังโฮสต์ตัวเดียว\n• Network route — prefix ระหว่างกลาง เช่น /24, /25 ชี้ไปยังซับเน็ตหนึ่ง\n• Floating static route — static route ที่ตั้ง AD สูงกว่าปกติเพื่อทำหน้าที่สำรอง\n\n🔍 อ่าน exhibit\nR1#sh ip ro\nGateway of last resort is 10.10.10.18 to network 0.0.0.0   ⭐ บรรทัดนี้บอกชัด\n C  10.10.10.0/30    directly connected, FastEthernet0/1\n O  10.10.13.0/25    [110/6576] via 10.10.10.1\n C  10.10.10.16/30   directly connected, FastEthernet0/24\n O  10.10.13.144/28  [110/110] via 10.10.10.1\n B* 0.0.0.0/0        [20/0] via 10.10.10.18   ⭐ prefix /0 ชี้ออกอินเทอร์เน็ต\n\nแกะสัญลักษณ์: B = เรียนรู้ผ่าน BGP, * = candidate default, [20/0] = AD 20 (eBGP) และ metric 0\n\n✅ ทำไม D ถูก: เส้นทาง 0.0.0.0/0 คือนิยามของ default route และจากโทโพโลยีมันชี้ไปยัง 10.10.10.18 ซึ่งเป็นฝั่งอินเทอร์เน็ตพอดี\n\n❌ ทำไมข้ออื่นผิด:\nA. floating static ต้องเป็นเส้นทางแบบ static (ตัว S) ที่มี AD สูงกว่าปกติ แต่เส้นทางนี้เป็น B (BGP) ด้วย AD 20 ซึ่งเป็นค่าปกติของ eBGP\nB. host route ต้องเป็น /32 ซึ่งไม่ปรากฏในตารางนี้\nC. network route เช่น 10.10.13.0/25 มีอยู่จริงในตาราง แต่ใช้เข้าถึงเครือข่ายภายใน ไม่ใช่อินเทอร์เน็ต\n\n📗 จำไว้สอบ: เห็นคำว่า "Gateway of last resort" หรือ prefix 0.0.0.0/0 → default route เสมอ',
  },
  {
    id: 359,
    kind: 'single',
    image: v4q359,
    prompt: 'Refer to the exhibit. Which path is used by the router for Internet traffic?',
    options: [
      { key: 'A', text: '209.165.200.0/27' },
      { key: 'B', text: '0.0.0.0/0' },
      { key: 'C', text: '10.10.13.0/24' },
      { key: 'D', text: '10.10.10.0/28' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ทราฟฟิกอินเทอร์เน็ตวิ่งผ่าน default route\nที่อยู่ปลายทางบนอินเทอร์เน็ตมีนับพันล้านที่อยู่ ไม่มีทางใส่ครบในตารางเส้นทางขององค์กร จึงใช้ default route 0.0.0.0/0 เป็นตัวรับทั้งหมด — prefix ยาว 0 บิตหมายความว่าตรงกับทุกที่อยู่ และเพราะสั้นที่สุด กฎ longest prefix match จึงหยิบมันมาใช้เป็นทางเลือกสุดท้าย ⭐\n\n🔍 อ่าน exhibit\nRouter1#show ip route\nGateway of last resort is 10.10.11.2 to network 0.0.0.0   ⭐\n B  209.165.200.224 [20/0] via 10.10.12.2       ← เส้นทางเฉพาะที่เรียนจาก BGP ฝั่ง MPLS\n C  10.10.10.0/28   directly connected, Gi0/0   ← เครือข่ายภายใน\n C  10.10.11.0/30   directly connected, Fa2/0   ← ลิงก์ออกอินเทอร์เน็ต\n O  10.10.13.0/24   [110/2] via 10.10.10.1      ← VLAN ผู้ใช้ เรียนจาก OSPF\n C  10.10.12.0/30   directly connected, Gi0/1   ← ลิงก์ไป MPLS\n S* 0.0.0.0/0       [1/0] via 10.10.11.2        ⭐ default route ชี้ไปฝั่งอินเทอร์เน็ต\n\nแกะสัญลักษณ์: S = static route, * = candidate default, [1/0] = AD 1 (static) และ metric 0\n\n✅ ทำไม B ถูก: ทราฟฟิกที่มุ่งออกอินเทอร์เน็ตจะไม่ตรงกับเส้นทางเฉพาะใด ๆ ในตาราง จึงตกลงมาที่ 0.0.0.0/0 แล้วถูกส่งไปยัง 10.10.11.2 ซึ่งจากโทโพโลยีคือเราเตอร์ฝั่งอินเทอร์เน็ต\n\n❌ ทำไมข้ออื่นผิด:\nA. 209.165.200.0/27 เป็น prefix เฉพาะที่เรียนผ่าน BGP จากฝั่ง MPLS ใช้ได้กับปลายทางนั้นเท่านั้น\nC. 10.10.13.0/24 เป็นเครือข่ายผู้ใช้ภายใน (VLAN 20)\nD. 10.10.10.0/28 เป็นลิงก์ภายในที่ต่อไปยัง Switch1\n\n📗 จำไว้สอบ: Gateway of last resort = default route = ทางออกอินเทอร์เน็ต • ดูสัญลักษณ์ * เพื่อระบุ candidate default',
  },
  {
    id: 360,
    kind: 'single',
    prompt: 'When OSPF learns multiple paths to a network, how does it select a route?',
    options: [
      {
        key: 'A',
        text: 'For each existing interface, it adds the metric from the source router to the destination to calculate the route with the lowest bandwidth.',
      },
      {
        key: 'B',
        text: 'It counts the number of hops between the source router and the destination to determine the route with the lowest metric.',
      },
      {
        key: 'C',
        text: 'It divides a reference bandwidth of 100 Mbps by the actual bandwidth of the exiting interface to calculate the route with the lowest cost.',
      },
      { key: 'D', text: 'It multiplies the active K values by 256 to calculate the route with the lowest metric.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — OSPF cost คำนวณจากแบนด์วิดท์\nสูตร: Cost = reference bandwidth ÷ แบนด์วิดท์ของอินเทอร์เฟซ (หน่วยเดียวกัน)\nreference bandwidth ดีฟอลต์ของ Cisco = 100 Mbps (100,000,000 bps) ⭐\nผลลัพธ์ปัดลงเป็นจำนวนเต็ม และค่าต่ำสุดที่เป็นไปได้คือ 1\n\nตาราง cost ตามค่าดีฟอลต์\n10 Mbps  → 100 ÷ 10   = 10\n100 Mbps → 100 ÷ 100  = 1\n1 Gbps   → 100 ÷ 1000 = 0.1 → ปัดเป็น 1 ⚠️\n10 Gbps  → ก็ได้ 1 เช่นกัน ⚠️\n\n⚠️ ปัญหาที่ตามมา: ลิงก์ 100 Mbps, 1 Gbps และ 10 Gbps ได้ cost เท่ากันหมด (=1) OSPF จึงแยกไม่ออกว่าเส้นไหนเร็วกว่า\n🔧 วิธีแก้: ปรับ reference bandwidth ให้สูงขึ้นและทำ "ทุกเราเตอร์" ในโดเมนให้ตรงกัน\nR1(config-router)# auto-cost reference-bandwidth 100000   (หน่วยเป็น Mbps = 100 Gbps)\nหรือกำหนด cost ตรง ๆ ที่อินเทอร์เฟซด้วย ip ospf cost <1-65535>\n\nเส้นทางที่ถูกเลือกคือเส้นที่มีผลรวม cost ของทุกลิงก์ขาออกตลอดเส้นทางต่ำที่สุด\n\n✅ ทำไม C ถูก: อธิบายสูตรได้ตรงตัว — เอา reference bandwidth 100 Mbps หารด้วยแบนด์วิดท์ของอินเทอร์เฟซขาออก แล้วเลือกเส้นทางที่ cost รวมต่ำสุด\n\n❌ ทำไมข้ออื่นผิด:\nA. OSPF เลือกเส้นทางที่ "cost ต่ำสุด" ไม่ใช่ "แบนด์วิดท์ต่ำสุด" ประโยคนี้กลับความหมาย\nB. การนับ hop เป็นวิธีของ RIP\nD. การคูณค่า K ด้วย 256 เป็นสูตร composite metric ของ EIGRP\n\n📗 จำไว้สอบ: OSPF cost = 100 Mbps ÷ bandwidth • ต้องปรับ reference-bandwidth ให้เท่ากันทุกเราเตอร์ ไม่งั้นการคำนวณเส้นทางจะเพี้ยน',
  },
  {
    id: 361,
    kind: 'single',
    prompt:
      'When a floating static route is configured, which action ensures that the backup route is used when the primary route fails?',
    options: [
      {
        key: 'A',
        text: 'The administrative distance must be higher on the primary route so that the backup route becomes secondary.',
      },
      {
        key: 'B',
        text: 'The default-information originate command must be configured for the route to be installed into the routing table.',
      },
      {
        key: 'C',
        text: 'The floating static route must have a lower administrative distance than the primary route so it is used as a backup.',
      },
      {
        key: 'D',
        text: 'The floating static route must have a higher administrative distance than the primary route so it is used as a backup',
      },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — floating static route "ลอย" อยู่นอกตารางเส้นทางจนกว่าจะถูกเรียกใช้\nเราเตอร์ติดตั้งเฉพาะเส้นทางที่มี AD ต่ำสุดสำหรับ prefix หนึ่ง ๆ ลงในตารางเส้นทาง ดังนั้นถ้าต้องการให้ static route เป็นเพียง "ตัวสำรอง" ต้องตั้ง AD ให้สูงกว่าเส้นทางหลัก ⭐\n\n🔗 กลไกการทำงาน\n1. ปกติ: เส้นทางหลัก (AD ต่ำกว่า) อยู่ในตาราง ส่วน floating static ถูกซ่อนไว้ ไม่ปรากฏใน show ip route\n2. เส้นทางหลักหาย: เมื่อโปรโตคอลไดนามิกถอนเส้นทางออก ตำแหน่งนั้นว่างลง\n3. floating static ถูกติดตั้งเข้าแทนอัตโนมัติ\n4. เส้นทางหลักกลับมา: AD ต่ำกว่าจึงแย่งตำแหน่งคืน floating static กลับไปซ่อนตามเดิม\n\n🔧 ตัวอย่าง — สำรองเส้นทางที่เรียนผ่าน OSPF (AD 110)\nR1(config)# ip route 172.16.0.0 255.255.0.0 192.168.99.2 130\n(130 > 110 จึงเป็นตัวสำรอง — ถ้าใส่แค่ ip route ... โดยไม่ระบุ AD จะได้ AD 1 ซึ่งจะไปแย่งตำแหน่งเส้นทางหลักทันที ⚠️)\n\n✅ ทำไม D ถูก: AD ที่สูงกว่าเส้นทางหลักคือเงื่อนไขเดียวที่ทำให้ static route ทำหน้าที่เป็นแบ็กอัพแทนที่จะเป็นเส้นทางหลัก\n\n❌ ทำไมข้ออื่นผิด:\nA. AD ของเส้นทางหลักมาจากโปรโตคอลที่ใช้ (OSPF 110, EIGRP 90) เราไม่ได้ไปเพิ่มค่าให้มัน — เราปรับที่ static route ต่างหาก\nB. default-information originate ใช้สั่งให้ OSPF โฆษณา default route ออกไปให้เพื่อนบ้าน คนละเรื่องกับ floating static\nC. กลับด้าน — AD ต่ำกว่าจะทำให้ static route ชนะและกลายเป็นเส้นทางหลักตลอดเวลา ซึ่งไม่ใช่สิ่งที่ต้องการ ⭐\n\n📗 จำไว้สอบ: floating static = ip route <net> <mask> <next hop> <AD ที่สูงกว่าโปรโตคอลหลัก>',
  },
  {
    id: 362,
    kind: 'single',
    image: v4q362,
    prompt: 'Refer to the exhibit. The show ip ospf interface command has been executed on R1. How is OSPF configured?',
    options: [
      { key: 'A', text: 'A point-to-point network type is configured.' },
      { key: 'B', text: 'The interface is not participating in OSPF.' },
      { key: 'C', text: 'The default Hello and Dead timers are in use.' },
      { key: 'D', text: 'There are six OSPF neighbors on this interface.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ค่า timer ดีฟอลต์ของ OSPF ขึ้นกับประเภทเครือข่าย\nประเภทเครือข่าย        Hello   Dead   เลือก DR/BDR\nBroadcast              10      40     ใช่ ⭐\nPoint-to-point         10      40     ไม่\nNon-broadcast (NBMA)   30      120    ใช่\nPoint-to-multipoint    30      120    ไม่\n\n🔍 อ่าน exhibit ทีละบรรทัด\nDesignated Router (ID) 10.11.11.11, Interface address 10.10.10.1\nBackup Designated router (ID) 10.3.3.3, Interface address 10.10.10.3\n   → มีการเลือก DR และ BDR แสดงว่าเป็นเครือข่ายแบบ broadcast (หรือ NBMA)\nTimer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5  ⭐ ตรงกับค่าดีฟอลต์ของ broadcast เป๊ะ\nNeighbor Count is 3, Adjacent neighbor count is 3\nAdjacent with neighbor 10.1.1.4 / 10.2.2.2 / 10.3.3.3\n\n✅ ทำไม C ถูก: Hello 10 และ Dead 40 คือค่าดีฟอลต์ของเครือข่ายแบบ broadcast ซึ่งเป็นประเภทที่ exhibit แสดงอยู่ (สังเกตได้จากการมี DR/BDR) จึงสรุปได้ว่าไม่มีการปรับ timer ใด ๆ\n\n❌ ทำไมข้ออื่นผิด:\nA. เครือข่ายแบบ point-to-point ไม่มีการเลือก DR/BDR เลย แต่ exhibit แสดงทั้ง DR และ BDR ชัดเจน ⭐\nB. ถ้าไม่ได้เข้าร่วม OSPF จะไม่มีข้อมูลเหล่านี้ให้แสดงเลย และคงไม่มี neighbor 3 ตัว\nD. Neighbor Count คือ 3 ไม่ใช่ 6 — เลข 6 ที่เห็นในบรรทัด "Last flood scan length is 1, maximum is 6" เป็นค่าสถิติเรื่องการ flood LSA คนละเรื่องกัน\n\n📗 จำไว้สอบ: broadcast และ point-to-point ใช้ Hello 10 / Dead 40 • NBMA และ point-to-multipoint ใช้ Hello 30 / Dead 120 • Dead = 4 เท่าของ Hello เสมอ',
  },
  {
    id: 363,
    kind: 'single',
    prompt:
      'A user configured OSPF and advertised the Gigabit Ethernet interface in OSPF. By default, to which type of OSPF network does this interface belong?',
    options: [
      { key: 'A', text: 'point-to-multipoint' },
      { key: 'B', text: 'point-to-point' },
      { key: 'C', text: 'broadcast' },
      { key: 'D', text: 'nonbroadcast' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ประเภทเครือข่าย OSPF ถูกกำหนดโดยชนิดของสื่อโดยอัตโนมัติ\nสื่อ/encapsulation           ประเภทดีฟอลต์      DR/BDR   Hello/Dead\nEthernet (Gi, Fa, Te)        broadcast ⭐        ใช่       10 / 40\nSerial แบบ HDLC หรือ PPP     point-to-point      ไม่       10 / 40\nFrame Relay (อินเทอร์เฟซหลัก) non-broadcast       ใช่       30 / 120\nLoopback                     loopback            ไม่       -\n\n🔗 ทำไม Ethernet ถึงเป็น broadcast: สื่ออีเทอร์เน็ตรองรับการส่งแบบ multicast/broadcast ได้ในตัว และมีโอกาสที่จะมีเราเตอร์หลายตัวอยู่บนเซกเมนต์เดียวกัน OSPF จึงต้องเลือก DR/BDR เพื่อลดจำนวน adjacency\n• ถ้ามีเราเตอร์ n ตัวโดยไม่มี DR จะต้องมี n(n-1)/2 adjacency\n• เมื่อมี DR/BDR เหลือเพียง 2n-3 adjacency และการ flood LSA จะรวมศูนย์ผ่าน DR (multicast 224.0.0.6)\n\n💡 เกร็ดจากงานจริง: บนลิงก์อีเทอร์เน็ตที่มีเราเตอร์แค่สองตัว นิยมเปลี่ยนเป็น point-to-point ด้วยคำสั่ง ip ospf network point-to-point เพื่อข้ามการเลือก DR/BDR ทำให้ converge เร็วขึ้น\n\n✅ ทำไม C ถูก: อินเทอร์เฟซ Gigabit Ethernet ถูกจัดเป็นประเภท broadcast โดยอัตโนมัติ พร้อมการเลือก DR/BDR และ timer 10/40\n\n❌ ทำไมข้ออื่นผิด:\nA. point-to-multipoint ต้องตั้งเองด้วยคำสั่ง ip ospf network point-to-multipoint มักใช้กับ Frame Relay แบบ hub-and-spoke\nB. point-to-point เป็นดีฟอลต์ของอินเทอร์เฟซ serial ไม่ใช่อีเทอร์เน็ต\nD. nonbroadcast เป็นดีฟอลต์ของ Frame Relay/ATM ที่ส่ง broadcast เองไม่ได้ ต้องประกาศเพื่อนบ้านด้วยมือผ่านคำสั่ง neighbor\n\n📗 จำไว้สอบ: Ethernet = broadcast (มี DR/BDR) • Serial = point-to-point (ไม่มี DR/BDR) • DR ใช้ 224.0.0.6, ทุกเราเตอร์ OSPF ใช้ 224.0.0.5',
  },
  {
    id: 364,
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
      '📘 แนวคิด — คำสำคัญคือ "from two different routing protocols"\nเมื่อเส้นทางมาจากคนละโปรโตคอล จะเอา metric มาเทียบกันตรง ๆ ไม่ได้ เพราะแต่ละโปรโตคอลคำนวณคนละวิธี\n• RIP  → นับ hop (1-15)\n• OSPF → cost = 100 Mbps ÷ bandwidth\n• EIGRP→ composite จาก bandwidth และ delay คูณ 256\nเลข 2 ของ RIP กับเลข 2 ของ OSPF จึงไม่ได้แปลว่าดีเท่ากัน\n\nCisco จึงกำหนด Administrative Distance (0-255) ให้เป็นตัววัด "ความน่าเชื่อถือของแหล่งข้อมูล" ค่าต่ำ = เชื่อถือได้มากกว่า = ชนะ ⭐\nConnected 0 / Static 1 / eBGP 20 / EIGRP 90 / OSPF 110 / IS-IS 115 / RIP 120 / EIGRP external 170 / iBGP 200 / Unknown 255 (ไม่ถูกติดตั้ง)\n\n✅ ทำไม C ถูก: administrative distance คือกลไกเดียวที่ออกแบบมาเพื่อเปรียบเทียบเส้นทางจากคนละโปรโตคอลโดยเฉพาะ\n\n❌ ทำไมข้ออื่นผิด:\nA. DUAL เป็นอัลกอริทึมภายในของ EIGRP ใช้คำนวณเส้นทางที่ไม่มีลูป ไม่ได้ใช้เทียบข้ามโปรโตคอล\nB. metric ใช้เทียบได้เฉพาะภายในโปรโตคอลเดียวกันเท่านั้น ⭐ ตัวลวงหลัก\nD. hop count เป็น metric เฉพาะของ RIP\n\n💡 อย่าลืม: ก่อนถึงขั้นเทียบ AD เราเตอร์จะดู longest prefix match ก่อนเสมอ — AD ใช้เฉพาะเมื่อ prefix เหมือนกันเป๊ะ\n\n📗 จำไว้สอบ: prefix ยาวสุด → AD ต่ำสุด → metric ต่ำสุด (เรียงตามลำดับนี้เท่านั้น)',
  },
  {
    id: 365,
    kind: 'single',
    prompt:
      'Router A learns the same route from two different neighbors; one of the neighbor routers is an OSPF neighbor, and the other is an EIGRP neighbor. What is the administrative distance of the route that will be installed in the routing table?',
    options: [
      { key: 'A', text: '20' },
      { key: 'B', text: '90' },
      { key: 'C', text: '110' },
      { key: 'D', text: '115' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — เส้นทางเดียวกันจากสองโปรโตคอล ตัดสินด้วย AD\nAD ที่เกี่ยวข้องในโจทย์\n• EIGRP (internal) = 90 ⭐ ต่ำกว่า\n• OSPF             = 110\n\n🔗 ผลลัพธ์: เราเตอร์ติดตั้งเส้นทางจาก EIGRP ลงในตารางเส้นทาง และเมื่อดูด้วย show ip route จะเห็นบรรทัดขึ้นต้นด้วย D พร้อมวงเล็บ [90/xxxxx] — เลข 90 คือ AD ส่วนเลขหลังสแลชคือ metric\nเส้นทาง OSPF ไม่หายไปไหน มันยังอยู่ในฐานข้อมูลของ OSPF (LSDB) และจะถูกติดตั้งแทนทันทีถ้าเส้นทาง EIGRP หายไป\n\n✅ ทำไม B ถูก: EIGRP มี AD 90 ต่ำกว่า OSPF ที่ 110 จึงเป็นผู้ชนะ และค่า AD ที่ปรากฏในตารางเส้นทางก็คือ 90\n\n❌ ทำไมข้ออื่นผิด:\nA. 20 คือ AD ของ eBGP ซึ่งไม่ได้อยู่ในโจทย์\nC. 110 คือ AD ของ OSPF ซึ่งแพ้ไป จึงไม่ปรากฏในตารางเส้นทาง\nD. 115 คือ AD ของ IS-IS ซึ่งไม่ได้อยู่ในโจทย์\n\n⚠️ ข้อควรระวัง: ถ้าเส้นทางนั้นเป็น EIGRP "external" (เรียนจากการ redistribute เข้ามา) AD จะเป็น 170 ซึ่ง "สูงกว่า" OSPF ผลลัพธ์จะพลิกกลับเป็น OSPF ชนะทันที — โจทย์ข้อนี้ไม่ได้ระบุว่าเป็น external จึงใช้ค่า internal 90\n\n📗 จำไว้สอบ: Connected 0, Static 1, eBGP 20, EIGRP 90, OSPF 110, IS-IS 115, RIP 120, EIGRP ext 170, iBGP 200',
  },
  {
    id: 366,
    kind: 'single',
    image: v4q366,
    prompt:
      'Refer to the exhibit. An engineer is bringing up a new circuit to the MPLS provider on the Gi0/1 interface of Router 1. The new circuit uses eBGP and learns the route to VLAN25 from the BGP path. What is the expected behavior for the traffic flow for route 10.10.13.0/25?',
    options: [
      { key: 'A', text: 'Traffic to 10.10.13.0/25 is load balanced out of multiple interfaces.' },
      { key: 'B', text: 'Traffic to 10.10.13.0/25 is asymmetrical.' },
      { key: 'C', text: 'Route 10.10.13.0/25 is updated in the routing table as being learned from interface Gi0/1.' },
      { key: 'D', text: 'Route 10.10.13.0/25 learned via the Gi0/0 interface remains in the routing table.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — eBGP มี AD 20 ซึ่งต่ำกว่า OSPF ที่ 110\n🔍 อ่าน exhibit — สถานะปัจจุบันของ Router1\nO  10.10.13.0/25 [110/2] via 10.10.10.1, GigabitEthernet0/0   ← เรียนผ่าน OSPF จาก Router2\nS* 0.0.0.0/0 [1/0] via 10.10.11.2\nโทโพโลยี: Router1 อยู่ AS 2000 (Site B), MPLS คือ AS 1000, Router2 อยู่ AS 3000 (Site A) ที่มี VLAN 25 = 10.10.13.0/25\n\n🔗 เมื่อวงจร eBGP บน Gi0/1 ขึ้น\n• Router1 จะได้รับ prefix 10.10.13.0/25 จาก MPLS ผ่าน eBGP ด้วย AD 20\n• เทียบกับเส้นทางเดิมที่เรียนผ่าน OSPF ด้วย AD 110\n• prefix เหมือนกันเป๊ะ (/25 ทั้งคู่) จึงตัดสินด้วย AD → 20 < 110 → eBGP ชนะ ⭐\n• เส้นทางในตารางถูกแทนที่ด้วยรายการ B ที่ชี้ออกทาง Gi0/1\n• เส้นทาง OSPF ไม่หายไป มันถอยไปอยู่ใน LSDB ของ OSPF รอเป็นตัวสำรอง\n\n✅ ทำไม C ถูก: ตารางเส้นทางจะอัปเดตให้ 10.10.13.0/25 ถูกเรียนรู้ผ่าน Gi0/1 (เส้นทาง BGP) แทนที่ Gi0/0 (เส้นทาง OSPF) เพราะ AD ที่ต่ำกว่าชนะ\n\n❌ ทำไมข้ออื่นผิด:\nA. load balancing เกิดได้เฉพาะเส้นทางจากโปรโตคอลเดียวกันที่มี metric เท่ากัน — คนละโปรโตคอลกันจะติดตั้งแค่ตัวชนะเพียงตัวเดียว\nB. traffic asymmetry อาจเกิดขึ้นได้จริงในทางปฏิบัติ แต่ไม่ใช่ "พฤติกรรมที่คาดหมาย" ที่โจทย์ถามถึงเรื่องการเลือกเส้นทาง\nD. เส้นทาง OSPF ผ่าน Gi0/0 จะถูกถอดออกจากตารางเส้นทาง เพราะแพ้ AD ให้ eBGP ⭐\n\n📗 จำไว้สอบ: eBGP AD = 20 (ต่ำกว่า IGP ทุกตัว!) ส่วน iBGP AD = 200 (สูงกว่า IGP ทุกตัว) — จำสองค่านี้แยกกันให้ดี',
  },
  {
    id: 367,
    kind: 'multi',
    prompt: 'Which two actions influence the EIGRP route selection process? (Choose two.)',
    options: [
      {
        key: 'A',
        text: 'The advertised distance is calculated by a downstream neighbor to inform the local router of the bandwidth on the link.',
      },
      { key: 'B', text: 'The router calculates the feasible distance of all paths to the destination route.' },
      { key: 'C', text: 'The router must use the advertised distance as the metric for any given route.' },
      {
        key: 'D',
        text: 'The router calculates the best backup path to the destination route and assigns it as the feasible successor.',
      },
      {
        key: 'E',
        text: 'The router calculates the reported distance by multiplying the delay on the exiting interface by 256.',
      },
    ],
    correct: ['B', 'D'],
    explanation:
      '📘 แนวคิด — ศัพท์หลักของ EIGRP ที่ต้องแยกให้ออก\n• Advertised Distance (AD) หรือ Reported Distance (RD) = ระยะทางจาก "เพื่อนบ้าน" ไปถึงปลายทาง (เพื่อนบ้านเป็นคนคำนวณแล้วบอกเรามา)\n• Feasible Distance (FD) = ระยะทางจาก "ตัวเราเอง" ไปถึงปลายทาง = metric ของเราไปหาเพื่อนบ้าน + AD ของเพื่อนบ้าน ⭐\n• Successor = เส้นทางที่มี FD ต่ำสุด → ถูกติดตั้งลงตารางเส้นทาง\n• Feasible Successor (FS) = เส้นทางสำรองที่ผ่านเงื่อนไข feasibility condition คือ AD ของมัน < FD ปัจจุบัน ⭐\n  เงื่อนไขนี้รับประกันว่าเส้นทางสำรองจะไม่ย้อนกลับมาหาเราเอง (ไม่มีลูป) จึงสลับใช้ได้ทันทีโดยไม่ต้องคำนวณใหม่\n\n✅ ทำไม B + D ถูก:\nB. EIGRP คำนวณ FD ของทุกเส้นทางที่รู้จักไปยังปลายทางหนึ่ง ๆ เพื่อหาว่าเส้นไหนคือ successor ✔\nD. จากเส้นทางที่เหลือ EIGRP เลือกตัวที่ผ่านเงื่อนไข feasibility แล้วเก็บไว้ใน topology table เป็น feasible successor ทำให้ converge ได้ในระดับต่ำกว่าวินาทีเมื่อเส้นทางหลักล่ม ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. AD ไม่ได้บอกแค่แบนด์วิดท์ของลิงก์ — มันคือ metric รวม (bandwidth + delay) ที่เพื่อนบ้านคำนวณจากตำแหน่งของมันไปยังปลายทาง\nC. เราเตอร์ใช้ FD เป็น metric ที่ติดตั้งในตารางเส้นทาง ไม่ใช่ AD — AD ใช้เพียงตรวจเงื่อนไข feasibility เท่านั้น\nE. RD ไม่ได้มาจากการเอา delay คูณ 256 เฉย ๆ — สูตรเต็มคือ 256 × [(10^7 ÷ แบนด์วิดท์ต่ำสุด) + ผลรวม delay]\n\n📗 จำไว้สอบ: FD = metric ของเรา • AD/RD = metric ของเพื่อนบ้าน • เงื่อนไข FS คือ AD < FD ปัจจุบัน',
  },
  {
    id: 368,
    kind: 'single',
    image: v4q368,
    prompt:
      'Refer to the exhibit. If OSPF is running on this network, how does Router2 handle traffic from Site B to 10.10.13.128/25 at Site A?',
    options: [
      { key: 'A', text: 'It sends packets out of interface Fa0/1 only.' },
      { key: 'B', text: 'It sends packets out of interface Fa0/2 only.' },
      { key: 'C', text: 'It load-balances traffic out of Fa0/1 and Fa0/2.' },
      { key: 'D', text: 'It cannot send packets to 10.10.13.128/25.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — Equal-Cost Multi-Path (ECMP)\nเมื่อโปรโตคอลไดนามิกพบหลายเส้นทางไปยัง prefix เดียวกัน "ด้วย metric เท่ากันเป๊ะ" เราเตอร์จะติดตั้งทุกเส้นลงในตารางเส้นทางและกระจายทราฟฟิกไปทั้งหมด\n• OSPF รองรับ ECMP สูงสุด 4 เส้นทางโดยดีฟอลต์ (ปรับได้ถึง 16-32 ด้วย maximum-paths)\n• OSPF ทำ ECMP ได้เฉพาะเมื่อ cost "เท่ากัน" เท่านั้น (ต่างจาก EIGRP ที่ใช้ variance ทำ unequal-cost ได้)\n\n🔍 อ่าน exhibit\nRouter2#show ip route\n C  10.10.10.8/30  directly connected, FastEthernet0/2\n C  10.10.10.12/30 directly connected, FastEthernet0/1\n O  10.10.13.0/25  [110/11] via 10.10.10.9, 00:00:03, FastEthernet0/2\n                   [110/11] via 10.10.10.13, 00:00:03, FastEthernet0/1   ⭐ สองบรรทัดใต้ prefix เดียวกัน\n C  10.10.10.4/30  directly connected, FastEthernet0/2\n\nสังเกตว่าเส้นทาง 10.10.13.0/25 มี next hop สองตัวด้วย cost เท่ากัน [110/11] ทั้งคู่ นี่คือรูปแบบการแสดงผลของ ECMP\n\n💡 หมายเหตุเรื่อง prefix: โจทย์ถามถึง 10.10.13.128/25 ส่วนตารางมี 10.10.13.0/25 — สาระสำคัญที่ข้อสอบต้องการวัดคือการอ่าน "สอง next hop ที่ cost เท่ากัน" แล้วสรุปว่าเกิดการแบ่งโหลด\n\n✅ ทำไม C ถูก: เมื่อมีสองเส้นทางที่ cost เท่ากัน (110/11) OSPF ติดตั้งทั้งคู่ และเราเตอร์กระจายทราฟฟิกออกทั้ง Fa0/1 และ Fa0/2\n\n❌ ทำไมข้ออื่นผิด:\nA, B. การเลือกออกทางเดียวจะเกิดก็ต่อเมื่อ cost ไม่เท่ากัน แต่ที่นี่เท่ากันพอดี\nD. เส้นทางมีอยู่ในตารางชัดเจน จึงส่งแพ็กเก็ตได้แน่นอน\n\n📗 จำไว้สอบ: cost เท่ากัน → ECMP • วิธีกระจายดีฟอลต์ของ CEF คือ per-destination (แฮชจาก src/dst IP) ไม่ใช่ per-packet',
  },
  {
    id: 369,
    kind: 'multi',
    prompt: 'Which two outcomes are predictable behaviors for HSRP? (Choose two.)',
    options: [
      { key: 'A', text: 'The two routers negotiate one router as the active router and the other as the standby router.' },
      {
        key: 'B',
        text: 'The two routers share the same interface IP address, and default gateway traffic is load-balanced between them.',
      },
      { key: 'C', text: 'The two routers synchronize configurations to provide consistent packet forwarding.' },
      {
        key: 'D',
        text: 'Each router has a different IP address, both routers act as the default gateway on the LAN, and traffic is load-balanced between them.',
      },
      {
        key: 'E',
        text: 'The two routers share a virtual IP address that is used as the default gateway for devices on the LAN.',
      },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — HSRP คือ First Hop Redundancy Protocol ของ Cisco\nหลักการทำงาน\n• เราเตอร์ในกลุ่มเดียวกันแชร์ "virtual IP" หนึ่งตัวและ "virtual MAC" หนึ่งตัว ⭐\n  virtual MAC ของ HSRPv1 = 0000.0C07.ACxx (xx = หมายเลขกลุ่มเป็นเลขฐานสิบหก)\n• โฮสต์ทุกเครื่องบน LAN ตั้ง default gateway ชี้ไปที่ virtual IP นี้ตัวเดียว\n• เราเตอร์เลือกกันเองว่าใครเป็น Active (ส่งต่อทราฟฟิกจริง) และใครเป็น Standby (คอยเฝ้า) ⭐\n  เกณฑ์: priority สูงสุดชนะ (ดีฟอลต์ 100) ถ้าเสมอให้ IP สูงสุดชนะ\n• ส่ง hello ทุก 3 วินาที holdtime 10 วินาที เมื่อ Active เงียบไป Standby จะขึ้นแทน\n• การเปลี่ยนตัวไม่กระทบโฮสต์เลย เพราะ virtual IP และ virtual MAC ยังเป็นชุดเดิม\n\n✅ ทำไม A + E ถูก: ทั้งสองข้อคือแก่นของ HSRP — มีการเลือกบทบาท Active/Standby (A) และการใช้ virtual IP ร่วมกันเป็น gateway ของโฮสต์ (E)\n\n❌ ทำไมข้ออื่นผิด:\nB. HSRP ไม่แบ่งโหลด มีเพียงเราเตอร์ Active ตัวเดียวที่ส่งต่อทราฟฟิก และแต่ละเราเตอร์ยังมี IP จริงของตัวเองต่างหากจาก virtual IP\nC. HSRP ไม่ซิงก์คอนฟิกใด ๆ ระหว่างเราเตอร์ — มันแลกเปลี่ยนเพียง hello packet เพื่อตรวจสถานะกันเท่านั้น\nD. บรรยาย GLBP (Gateway Load Balancing Protocol) ซึ่งเป็นโปรโตคอลของ Cisco ที่แบ่งโหลดได้จริงโดยแจก virtual MAC ต่างกันให้แต่ละโฮสต์ ⭐\n\n💡 อยากได้ load balancing กับ HSRP ทำได้โดยสร้างหลายกลุ่ม แล้วสลับให้แต่ละเราเตอร์เป็น Active คนละ VLAN\n\n📗 จำไว้สอบ: HSRP/VRRP = active-standby (ไม่แบ่งโหลด) • GLBP = แบ่งโหลดได้จริง • HSRP hello 3/hold 10 วินาที',
  },
  {
    id: 370,
    kind: 'multi',
    image: v4q370,
    prompt:
      'Refer to the exhibit. An engineer is configuring the New York router to reach the Lo1 interface of the Atlanta router using interface Se0/0/0 as the primary path. Which two commands must be configured on the New York router so that it reaches the Lo1 interface of the Atlanta router via Washington when the link between New York and Atlanta goes down? (Choose two.)',
    options: [
      { key: 'A', text: 'ipv6 route 2000::1/128 2012::1' },
      { key: 'B', text: 'ipv6 route 2000::1/128 2012::1 5' },
      { key: 'C', text: 'ipv6 route 2000::1/128 2012::2' },
      { key: 'D', text: 'ipv6 route 2000::1/128 2023::2 5' },
      { key: 'E', text: 'ipv6 route 2000::1/128 2023::3 5' },
    ],
    correct: ['A', 'E'],
    explanation:
      '📘 แนวคิด — เส้นทางหลัก + floating static สำรอง ในโลก IPv6\n🔍 อ่าน exhibit — ผังที่อยู่\nAtlanta    : S0/0/0 = 2012::1 , S0/0/1 = 2013::1 , Loopback1 = 2000::1/128 ⭐ ปลายทางที่ต้องการ\nNew-York   : S0/0/0 = 2012::2 (ไป Atlanta) , S0/0/1 = 2023::2 (ไป Washington)\nWashington : S0/0/0 = 2023::3 (ไป New York) , S0/0/1 = 2013::3 (ไป Atlanta)\n\n🔗 สองเส้นทางที่ต้องสร้างบน New York\n1️⃣ เส้นทางหลัก — ผ่าน Se0/0/0 ตรงไปหา Atlanta\n   next hop = 2012::1 (อินเทอร์เฟซของ Atlanta)\n   ไม่ระบุ AD → ได้ค่าดีฟอลต์ 1 ⭐\n   ipv6 route 2000::1/128 2012::1\n2️⃣ เส้นทางสำรอง — ผ่าน Washington\n   next hop = 2023::3 (อินเทอร์เฟซของ Washington ไม่ใช่ของ New York เอง)\n   ระบุ AD = 5 ซึ่งสูงกว่า 1 → เป็น floating static ที่ซ่อนอยู่จนกว่าเส้นทางหลักจะหาย ⭐\n   ipv6 route 2000::1/128 2023::3 5\n\n✅ ทำไม A + E ถูก: A คือเส้นทางหลักที่ AD 1 ผ่านลิงก์ตรง ส่วน E คือ floating static ที่ AD 5 ผ่าน Washington ซึ่งจะถูกติดตั้งอัตโนมัติเมื่อลิงก์ New York–Atlanta ล่ม\n\n❌ ทำไมข้ออื่นผิด:\nB. ใส่ AD 5 ให้เส้นทางหลักด้วย ทำให้ทั้งสองเส้นมี AD เท่ากัน (5 กับ 5) → เกิด load balancing แทนที่จะเป็นหลัก-สำรอง\nC. 2012::2 คืออินเทอร์เฟซของ New York เอง การชี้ next hop มาที่ตัวเองทำให้เกิดลูป ⭐\nD. 2023::2 ก็เป็นอินเทอร์เฟซของ New York เอง (ฝั่ง S0/0/1) ผิดด้วยเหตุผลเดียวกัน\n\n📗 จำไว้สอบ: next hop = IP ของ "เพื่อนบ้าน" เสมอ • ไม่ระบุ AD = 1 • floating static ต้องใส่ AD สูงกว่าเส้นทางหลัก',
  },
  {
    id: 371,
    kind: 'single',
    prompt: 'How does HSRP provide first hop redundancy?',
    options: [
      {
        key: 'A',
        text: 'It load-balances Layer 2 traffic along the path by flooding traffic out all interfaces configured with the same VLAN.',
      },
      {
        key: 'B',
        text: 'It uses a shared virtual MAC and a virtual IP address to a group of routers that serve as the default gateway for hosts on a LAN.',
      },
      { key: 'C', text: 'It forwards multiple packets to the same destination over different routed links in the data path.' },
      {
        key: 'D',
        text: 'It load-balances traffic by assigning the same metric value to more than one route to the same destination in the IP routing table.',
      },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ปัญหาที่ FHRP มาแก้\nโฮสต์ทั่วไปมี default gateway ได้เพียงตัวเดียว ถ้าเราเตอร์ตัวนั้นล่ม โฮสต์จะออกจากซับเน็ตไม่ได้เลยจนกว่าจะมีคนไปเปลี่ยนค่าให้ทีละเครื่อง\n\nวิธีที่ HSRP แก้\n• เราเตอร์หลายตัวรวมเป็นกลุ่มเดียว แชร์ virtual IP หนึ่งตัวและ virtual MAC หนึ่งตัว ⭐\n  – virtual MAC ของ HSRPv1 = 0000.0C07.ACxx (xx = group ID ฐานสิบหก)\n  – virtual MAC ของ HSRPv2 = 0000.0C9F.Fxxx\n• โฮสต์ตั้ง gateway ชี้ที่ virtual IP และเก็บ virtual MAC ไว้ในตาราง ARP\n• เราเตอร์ที่เป็น Active ตอบ ARP ด้วย virtual MAC และส่งต่อทราฟฟิกจริง\n• เมื่อ Active ล่ม Standby ขึ้นมารับหน้าที่และเริ่มตอบด้วย virtual MAC เดิม → โฮสต์ไม่รู้สึกอะไรเลย ไม่ต้องล้าง ARP cache ⭐\n\n💡 เปรียบเทียบ FHRP\nHSRP  Cisco  1 active + 1 standby  hello 3/hold 10\nVRRP  มาตรฐาน 1 master + backup    hello 1 วินาที\nGLBP  Cisco  แบ่งโหลดได้จริง       แจก virtual MAC ต่างกันให้แต่ละโฮสต์\n\n✅ ทำไม B ถูก: อธิบายกลไกหลักได้ครบ — กลุ่มเราเตอร์แชร์ virtual MAC และ virtual IP เพื่อทำหน้าที่เป็น default gateway ให้โฮสต์บน LAN\n\n❌ ทำไมข้ออื่นผิด:\nA. บรรยายการ flood ของสวิตช์ที่ Layer 2 คนละเรื่องกับความซ้ำซ้อนของ gateway\nC. บรรยาย per-packet load balancing ซึ่งเป็นเรื่องของการ routing ไม่ใช่ FHRP\nD. บรรยาย ECMP (เส้นทาง metric เท่ากันหลายเส้น) ซึ่งก็เป็นเรื่องของ routing เช่นกัน\n\n📗 จำไว้สอบ: FHRP = virtual IP + virtual MAC • HSRP virtual MAC ขึ้นต้น 0000.0C07.AC',
  },
  {
    id: 372,
    kind: 'single',
    image: v4q372,
    prompt: 'Refer to the exhibit. Which action establishes the OSPF neighbor relationship without forming an adjacency?',
    options: [
      { key: 'A', text: 'modify hello interval' },
      { key: 'B', text: 'modify process ID' },
      { key: 'C', text: 'modify priority' },
      { key: 'D', text: 'modify network type' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — hello/dead timer ต้องตรงกันก่อน มิฉะนั้นจะไม่มีความสัมพันธ์ใด ๆ เกิดขึ้นเลย\n🔍 อ่าน exhibit เทียบสองฝั่ง\nR1# sh ip ospf int gig0/0                R2# sh ip ospf int gig0/0\n Internet Address 10.201.24.8/28, Area 1   Internet Address 10.201.24.1/28, Area 1\n Process ID 100, Router ID 192.168.1.1     Process ID 100, Router ID 172.16.1.1\n Network Type BROADCAST, Cost 1            Network Type BROADCAST, Cost 1\n State DR, Priority 1                      State DR, Priority 1\n Designated Router (ID) 192.168.1.1        Designated Router (ID) 172.16.1.1\n No backup designated router               No backup designated router\n Hello 10, Dead 40, Wait 40  ⭐             Hello 20, Dead 80, Wait 80  ⭐ ไม่ตรงกัน\n\n🔗 วิเคราะห์\n• ทั้ง Area (1), Network Type (BROADCAST) และซับเน็ต (10.201.24.0/28) ตรงกันหมด\n• จุดเดียวที่ไม่ตรงคือ Hello 10/Dead 40 เทียบกับ Hello 20/Dead 80\n• ผลคือทั้งคู่ทิ้ง Hello packet ของกันและกัน ต่างฝ่ายต่างคิดว่าตัวเองอยู่ลำพัง จึงเลือกตัวเองเป็น DR ทั้งคู่และไม่มี BDR — เป็นหลักฐานชัดว่าไม่เคยเห็นหน้ากันเลย ⭐\n\n✅ ทำไม A ถูก: การแก้ hello interval ให้ตรงกันเป็นการกระทำเดียวที่ทำให้เราเตอร์ทั้งสองเริ่มมองเห็นกันและสร้างความสัมพันธ์ระดับ neighbor ได้ — ตราบใดที่ timer ยังไม่ตรง จะไม่มีทั้ง neighbor และ adjacency\n\n❌ ทำไมข้ออื่นผิด:\nB. Process ID เป็นค่าเฉพาะเครื่อง ไม่ต้องตรงกัน (และในโจทย์ก็เป็น 100 เหมือนกันอยู่แล้ว)\nC. การปรับ priority มีผลต่อการเลือก DR/BDR เท่านั้น และจะทำได้ก็ต่อเมื่อเราเตอร์เห็นกันแล้ว — ตอนนี้ยังไม่เห็นกันด้วยซ้ำ\nD. Network Type เป็น BROADCAST ตรงกันทั้งสองฝั่งอยู่แล้ว จึงไม่ใช่สาเหตุ\n\n📗 จำไว้สอบ: สิ่งที่ต้องตรงกันจึงเกิด neighbor — area, hello/dead timer, subnet/mask, MTU, authentication, network type, stub flag • สิ่งที่ไม่ต้องตรง — process ID, router ID, priority, cost',
  },
  {
    id: 373,
    kind: 'single',
    prompt:
      'Which command must you enter to guarantee that an HSRP router with higher priority becomes the HSRP primary router after it is reloaded?',
    options: [
      { key: 'A', text: 'standby 10 preempt' },
      { key: 'B', text: 'standby 10 version 1' },
      { key: 'C', text: 'standby 10 priority 150' },
      { key: 'D', text: 'standby 10 version 2' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — priority ตัดสิน "ตอนเลือกตั้ง" แต่ preempt ตัดสิน "ตอนกลับมา"\nพฤติกรรมดีฟอลต์ของ HSRP: preemption ปิดอยู่ ⚠️\nหมายความว่าเราเตอร์ที่มี priority สูงกว่าจะ "ไม่" แย่งตำแหน่งคืนจากเราเตอร์ที่กำลังเป็น Active อยู่ — แม้จะควรเป็นผู้ชนะก็ตาม\n\n🔗 สถานการณ์ที่โจทย์บรรยาย\n1. R1 priority 150 เป็น Active / R2 priority 100 เป็น Standby\n2. R1 รีโหลด → R2 ขึ้นเป็น Active\n3. R1 กลับมา → เห็นว่า R2 เป็น Active อยู่แล้ว ถ้าไม่มี preempt R1 จะยอมเป็น Standby ทั้งที่ priority สูงกว่า ⚠️\n4. เมื่อสั่ง standby 10 preempt บน R1 → R1 จะทวงตำแหน่ง Active คืนทันทีที่กลับมา ⭐\n\n🔧 คอนฟิกที่สมบูรณ์\nR1(config-if)# standby 10 ip 10.1.1.254\nR1(config-if)# standby 10 priority 150\nR1(config-if)# standby 10 preempt\nR1(config-if)# standby 10 preempt delay minimum 60   ← หน่วงให้ routing protocol converge ก่อนค่อยทวงตำแหน่ง\n\n✅ ทำไม A ถูก: preempt คือคำสั่งเดียวที่บังคับให้เราเตอร์ priority สูงกว่าทวงตำแหน่ง Active คืนหลังกลับมาออนไลน์\n\n❌ ทำไมข้ออื่นผิด:\nB, D. version 1 กับ version 2 กำหนดรูปแบบโปรโตคอล (v2 รองรับ group ID ถึง 4095, IPv6 และ timer ระดับมิลลิวินาที) ไม่เกี่ยวกับการทวงตำแหน่ง\nC. priority 150 ทำให้ "สมควร" เป็น Active ก็จริง แต่ถ้าไม่มี preempt มันก็จะยืนดูเฉย ๆ ⭐ กับดักหลักของข้อนี้\n\n📗 จำไว้สอบ: HSRP preemption ปิดโดยดีฟอลต์ (ต่างจาก VRRP ที่เปิดไว้) • priority สูงสุดชนะ ถ้าเสมอให้ IP สูงสุดชนะ',
  },
  {
    id: 374,
    kind: 'single',
    prompt: 'Which command should you enter to verify the priority of a router in an HSRP group?',
    options: [
      { key: 'A', text: 'show hsrp' },
      { key: 'B', text: 'show sessions' },
      { key: 'C', text: 'show interfaces' },
      { key: 'D', text: 'show standby' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำสั่ง HSRP บน Cisco IOS ใช้คำว่า "standby" ไม่ใช่ "hsrp"\nคำสั่งคอนฟิกก็ขึ้นต้นด้วย standby เช่นกัน\nR1(config-if)# standby 1 ip 10.1.1.254\nR1(config-if)# standby 1 priority 150\nR1(config-if)# standby 1 preempt\nคำสั่งตรวจสอบจึงเป็น show standby ให้สอดคล้องกัน ⭐\n\n📄 ตัวอย่างผลลัพธ์ของ show standby\nGigabitEthernet0/0 - Group 1\n  State is Active\n    2 state changes, last state change 00:05:12\n  Virtual IP address is 10.1.1.254\n  Active virtual MAC address is 0000.0c07.ac01\n  Hello time 3 sec, hold time 10 sec\n  Preemption enabled\n  Active router is local\n  Standby router is 10.1.1.2, priority 100 (expires in 8.096 sec)\n  Priority 150 (configured 150)      ⭐ บรรทัดที่ตอบโจทย์\n  Group name is "hsrp-Gi0/0-1" (default)\n\n💡 คำสั่งที่เกี่ยวข้อง\n• show standby brief — สรุปแบบตารางบรรทัดเดียวต่อกลุ่ม เหมาะกับการตรวจเร็ว ๆ\n• show standby <interface> <group>\n• debug standby events — ดูการเปลี่ยนบทบาทแบบเรียลไทม์\n\n✅ ทำไม D ถูก: show standby เป็นคำสั่งมาตรฐานที่แสดงข้อมูล HSRP ครบทุกอย่าง รวมถึง priority ที่โจทย์ถามหา\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีคำสั่ง show hsrp ใน Cisco IOS — เป็นตัวลวงที่อ่านผ่าน ๆ แล้วดูเข้าท่าที่สุด ⭐\nB. show sessions แสดงเซสชัน Telnet ขาออกจากเราเตอร์ ไม่เกี่ยวกับ HSRP\nC. show interfaces แสดงสถานะกายภาพ ตัวนับข้อผิดพลาด และ MTU แต่ไม่แสดงข้อมูล FHRP\n\n📗 จำไว้สอบ: HSRP → show standby • VRRP → show vrrp • GLBP → show glbp',
  },
  {
    id: 375,
    kind: 'single',
    image: v4q375,
    prompt:
      'Refer to the exhibit. Which command would you use to configure a static route on Router1 to network 192.168.202.0/24 with a nondefault administrative distance?',
    options: [
      { key: 'A', text: 'router1(config)#ip route 192.168.202.0 255.255.255.0 192.168.201.2 1' },
      { key: 'B', text: 'router1(config)#ip route 192.168.202.0 255.255.255.0 192.168.201.2 5' },
      { key: 'C', text: 'router1(config)#ip route 1 192.168.201.1 255.255.255.0 192.168.201.2' },
      { key: 'D', text: 'router1(config)#ip route 5 192.168.202.0 255.255.255.0 192.168.201.2' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — ตำแหน่งของ AD อยู่ "ท้ายสุด" ของคำสั่ง\nไวยากรณ์: ip route <เครือข่าย> <subnet mask> <next hop> [AD]\nถ้าไม่ใส่ค่าท้ายสุด static route จะได้ AD = 1 ซึ่งเป็นค่าดีฟอลต์ ⭐\nคำว่า "nondefault administrative distance" ในโจทย์จึงหมายถึงต้องใส่ตัวเลขที่ "ไม่ใช่ 1"\n\n🔍 อ่าน exhibit\nRouter1 มีอินเทอร์เฟซ 192.168.201.1 (ไปหา Router2) และ 192.168.200.225 (ฝั่ง LAN)\nRouter2 มี 192.168.201.2 (หันมาหา Router1) และ 192.168.202.129 (ฝั่ง LAN)\n→ next hop ที่ถูกต้องคือ 192.168.201.2 ซึ่งเป็นอินเทอร์เฟซของ Router2 บนลิงก์ที่เชื่อมกัน\n\n✅ ทำไม B ถูก: เรียงพารามิเตอร์ถูกต้องครบถ้วน — ปลายทาง 192.168.202.0, mask 255.255.255.0, next hop 192.168.201.2 และปิดท้ายด้วย AD = 5 ซึ่งต่างจากค่าดีฟอลต์ 1 ตามที่โจทย์ต้องการ\n\n❌ ทำไมข้ออื่นผิด:\nA. ใส่ AD = 1 ซึ่ง "เป็น" ค่าดีฟอลต์อยู่แล้ว จึงไม่ตรงกับคำว่า nondefault ⭐ กับดักหลักของข้อนี้\nC. เอาเลข AD ไปวางไว้หน้าสุด (ผิดไวยากรณ์) และยังใส่เครือข่ายปลายทางเป็น 192.168.201.1 ซึ่งเป็นอินเทอร์เฟซของตัวเอง\nD. เอาเลข 5 ไปวางไว้หน้าเครือข่ายปลายทาง ซึ่ง IOS จะปฏิเสธคำสั่งทันที\n\n📗 จำไว้สอบ: AD ต่อท้ายสุดเสมอ • static ดีฟอลต์ AD 1 • ใส่ AD สูงกว่าโปรโตคอลหลัก = floating static',
  },
  {
    id: 376,
    kind: 'multi',
    prompt: 'Which of the following dynamic routing protocols are Distance Vector routing protocols? (Choose two.)',
    options: [
      { key: 'A', text: 'IS-IS' },
      { key: 'B', text: 'EIGRP' },
      { key: 'C', text: 'OSPF' },
      { key: 'D', text: 'BGP' },
      { key: 'E', text: 'RIP' },
    ],
    correct: ['B', 'E'],
    explanation:
      '📘 แนวคิด — จำแนกโปรโตคอลตามอัลกอริทึมที่ใช้หาเส้นทาง\n\nDistance Vector — "บอกต่อสิ่งที่ตัวเองรู้ ให้เฉพาะเพื่อนบ้านที่ติดกัน" ไม่มีภาพรวมของทั้งเครือข่าย รู้แค่ทิศทาง (vector) และระยะทาง (distance)\n• RIP ⭐ — ใช้ Bellman-Ford นับ hop สูงสุด 15, ส่งตารางเส้นทางทั้งชุดทุก 30 วินาที, กันลูปด้วย split horizon, route poisoning และ holddown timer\n• EIGRP ⭐ — Cisco จัดประเภทเป็น "advanced distance vector" ใช้ DUAL เก็บตาราง topology และ feasible successor จึง converge เร็วเหมือน link-state แต่รากฐานยังเป็น distance vector คือเรียนรู้เส้นทางจากสิ่งที่เพื่อนบ้านบอกมา ไม่ได้สร้างแผนที่ทั้งเครือข่ายเอง\n\nLink State — "ทุกตัวมีแผนที่เครือข่ายเหมือนกัน แล้วต่างคนต่างคำนวณเส้นทางเอง"\n• OSPF — ใช้ Dijkstra SPF คำนวณบน LSDB\n• IS-IS — หลักการเดียวกับ OSPF แต่วิ่งบน CLNS ไม่ใช่ IP\n\nPath Vector\n• BGP — โฆษณา AS_PATH ทั้งเส้นทางเพื่อกันลูประหว่างองค์กร\n\n✅ ทำไม B + E ถูก:\nE. RIP เป็น distance vector แบบดั้งเดิม เรียนรู้จากตารางที่เพื่อนบ้านส่งมาให้ล้วน ๆ ✔\nB. EIGRP เป็น advanced distance vector — Cisco เองระบุไว้ในเอกสารว่าอยู่ในตระกูล distance vector แม้จะมีกลไก DUAL และ partial update ที่ทำให้ทำงานได้เร็วกว่า RIP มาก ✔\n\n❌ ทำไมข้ออื่นผิด:\nA, C. IS-IS และ OSPF เป็น link-state — เก็บ LSDB ที่เหมือนกันทั้ง area แล้วรัน SPF เอง ไม่ได้เชื่อสิ่งที่เพื่อนบ้านคำนวณมาให้\nD. BGP เป็น path vector — ตัดสินใจจาก AS_PATH และ attribute เชิงนโยบาย ไม่ได้ใช้ metric เชิงระยะทาง\n\n📗 จำไว้สอบ: DV = RIP + EIGRP (advanced) • LS = OSPF, IS-IS • PV = BGP • ข้อต่างสำคัญ: DV เชื่อสิ่งที่เพื่อนบ้านบอก, LS สร้างแผนที่เองแล้วคำนวณเอง',
  },
  {
    id: 377,
    kind: 'single',
    prompt:
      'You have configured a router with an OSPF router ID, but its IP address still reflects the physical interface. Which action can you take to correct the problem in the least disruptive way?',
    options: [
      { key: 'A', text: 'Reload the OSPF process' },
      { key: 'B', text: 'Specify a loopback address' },
      { key: 'C', text: 'Reboot the router' },
      { key: 'D', text: 'Save the router configuration' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — Router ID ถูกล็อกไว้ตั้งแต่ตอนที่ OSPF เริ่มทำงาน\nOSPF เลือก Router ID เพียง "ครั้งเดียว" ตอนที่กระบวนการเริ่มต้น แล้วจะยึดค่านั้นไว้ตลอด แม้ภายหลังจะพิมพ์คำสั่ง router-id ใหม่ หรือสร้าง loopback ที่มี IP สูงกว่าก็ตาม\n→ ต้องบังคับให้ OSPF เริ่มกระบวนการใหม่เพื่ออ่านค่าที่ตั้งไว้ ⭐\n\n🔧 คำสั่งที่ใช้\nR1# clear ip ospf process\nReset ALL OSPF processes? [no]: yes\nสิ่งที่เกิดขึ้น: adjacency ทั้งหมดถูกรีเซ็ตและสร้างใหม่ ใช้เวลาไม่กี่วินาที ทราฟฟิกสะดุดสั้น ๆ แต่บริการอื่นบนเราเตอร์ (สวิตชิ่ง, ACL, NAT, การเชื่อมต่อ SSH) ไม่ถูกกระทบเลย\n\n💡 ลำดับการเลือก Router ID (ทบทวน)\n1. คำสั่ง router-id ที่กำหนดเอง\n2. IP สูงสุดของ loopback ที่ up\n3. IP สูงสุดของอินเทอร์เฟซกายภาพที่ up\n\n✅ ทำไม A ถูก: clear ip ospf process บังคับให้ OSPF อ่าน Router ID ใหม่ตามที่คอนฟิกไว้ และเป็นวิธีที่รบกวนน้อยที่สุดเมื่อเทียบกับการรีบูตทั้งเครื่อง\n\n❌ ทำไมข้ออื่นผิด:\nB. โจทย์บอกว่ากำหนด router-id ไว้แล้ว การเพิ่ม loopback ไม่ช่วย เพราะ router-id ที่กำหนดเองมีลำดับสูงกว่า loopback อยู่แล้ว — และถึงเพิ่มไปก็ยังต้องรีเซ็ตกระบวนการอยู่ดี\nC. การรีบูตเราเตอร์ได้ผลก็จริง แต่ทำให้ทุกบริการหยุดหลายนาที ขัดกับคำว่า "least disruptive" ⭐\nD. การบันทึกคอนฟิก (copy running-config startup-config) เพียงเก็บค่าไว้ใช้ตอนบูตครั้งหน้า ไม่ได้ทำให้ Router ID เปลี่ยนตอนนี้\n\n📗 จำไว้สอบ: เปลี่ยน router-id หรือเพิ่ม loopback แล้วต้อง clear ip ospf process เสมอ จึงจะมีผล',
  },
  {
    id: 378,
    kind: 'single',
    prompt: 'Which command should you enter to view the error log in an EIGRP for IPv6 environment?',
    options: [
      { key: 'A', text: 'show ipv6 eigrp neighbors' },
      { key: 'B', text: 'show ipv6 eigrp topology' },
      { key: 'C', text: 'show ipv6 eigrp traffic' },
      { key: 'D', text: 'show ipv6 eigrp events' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — คำสั่งตรวจสอบ EIGRP สำหรับ IPv6 แต่ละตัวแสดงอะไร\n• show ipv6 eigrp neighbors — รายชื่อเพื่อนบ้าน, ที่อยู่ link-local, hold time, SRTT, RTO, คิวที่ค้าง\n• show ipv6 eigrp topology — ตาราง topology ทั้งหมด รวม successor และ feasible successor พร้อมค่า FD/RD\n• show ipv6 eigrp traffic — สถิติจำนวนแพ็กเก็ต Hello, Update, Query, Reply, ACK ที่ส่งและรับ\n• show ipv6 eigrp events — บันทึกเหตุการณ์ภายในของ EIGRP ⭐ เป็น log ที่ใช้ไล่หาสาเหตุเมื่อเกิดปัญหา เช่น เพื่อนบ้านหลุด เส้นทางเปลี่ยน หรือเกิด SIA (Stuck In Active)\n\n💡 ผลลัพธ์ของ show ipv6 eigrp events จะเป็นรายการตามเวลา เช่น\n1  20:15:32.123 Route installed: 2001:DB8::/64 ...\n2  20:15:32.119 Metric set: 2001:DB8::/64 ...\n3  20:15:30.887 NDB delete: ...\nซึ่งช่วยให้เห็นลำดับเหตุการณ์ย้อนหลังโดยไม่ต้องเปิด debug ที่กินทรัพยากรมาก\n\n✅ ทำไม D ถูก: คีย์เวิร์ด events คือส่วนที่แสดงบันทึกเหตุการณ์/ข้อผิดพลาดภายในของกระบวนการ EIGRP ตรงกับคำว่า "error log" ในโจทย์\n\n❌ ทำไมข้ออื่นผิด:\nA. neighbors แสดงสถานะความสัมพันธ์ปัจจุบัน ไม่ใช่ประวัติเหตุการณ์\nB. topology แสดงเส้นทางที่รู้จักทั้งหมด ไม่ใช่บันทึกข้อผิดพลาด\nC. traffic แสดงเพียงตัวนับจำนวนแพ็กเก็ตแต่ละชนิด\n\n📗 จำไว้สอบ: neighbors = ใครเป็นเพื่อนบ้าน • topology = รู้จักเส้นทางอะไรบ้าง • traffic = นับแพ็กเก็ต • events = บันทึกเหตุการณ์',
  },
  {
    id: 379,
    kind: 'single',
    image: v4q379,
    prompt:
      'Refer to the exhibit. Router R1 must be configured to reach the 10.0.3.0/24 network from the 10.0.1.0/24 segment. Which command must be used to configure the route?',
    options: [
      { key: 'A', text: 'route add 10.0.3.0 0.255.255.255 10.0.4.2' },
      { key: 'B', text: 'ip route 10.0.3.0 0.255.255.255 10.0.4.2' },
      { key: 'C', text: 'route add 10.0.3.0 mask 255.255.255.0 10.0.4.3' },
      { key: 'D', text: 'ip route 10.0.3.0 255.255.255.0 10.0.4.3' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — ตรวจสามอย่าง: ไวยากรณ์, subnet mask และ next hop\n1️⃣ ไวยากรณ์บน Cisco IOS คือ ip route ไม่ใช่ route add (route add เป็นคำสั่งของ Windows/Linux) ⭐\n2️⃣ ต้องใช้ subnet mask ไม่ใช่ wildcard mask — คำสั่ง ip route รับ subnet mask เท่านั้น (wildcard ใช้กับ ACL และ network statement ของ OSPF) ⭐\n3️⃣ next hop ต้องเป็น IP ของเราเตอร์ที่ต่อกับเครือข่ายปลายทาง\n\n🔍 อ่าน exhibit\nR1 : Gi0/0 → 10.0.1.0/24 (ฝั่ง LAN)  , Gi0/1 → 10.0.4.1 (ลิงก์กลาง)\nR2 : Gi0/0 → 10.0.2.0/24            , Gi0/1 → 10.0.4.2\nR3 : Gi0/0 → 10.0.3.0/24 ⭐ ปลายทาง  , Gi0/1 → 10.0.4.3 ⭐ next hop ที่ถูกต้อง\nทั้งสามเราเตอร์เชื่อมกันบนเซกเมนต์ร่วม 10.0.4.0/24\n\n🔧 คำสั่งที่ถูกต้อง\nR1(config)# ip route 10.0.3.0 255.255.255.0 10.0.4.3\n\n✅ ทำไม D ถูก: ใช้คำสั่ง ip route ตามไวยากรณ์ของ IOS, ใช้ subnet mask 255.255.255.0 ให้ตรงกับ /24 และชี้ next hop ไปที่ 10.0.4.3 ซึ่งเป็นอินเทอร์เฟซของ R3 ที่ต่อกับเครือข่าย 10.0.3.0/24 โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA, C. route add ไม่ใช่คำสั่งของ Cisco IOS\nA, B. 0.255.255.255 เป็น wildcard mask ที่ยังคำนวณผิดด้วย (wildcard ของ /24 คือ 0.0.0.255) และ next hop 10.0.4.2 คือ R2 ซึ่งไม่ได้ต่อกับ 10.0.3.0/24\nB. ผิดที่ mask และ next hop แม้คำสั่ง ip route จะถูกต้อง\n\n📗 จำไว้สอบ: ip route ใช้ subnet mask • ACL และ OSPF network statement ใช้ wildcard mask • route add คือคำสั่งบน PC ไม่ใช่บนเราเตอร์',
  },
  {
    id: 380,
    kind: 'multi',
    image: v4q380,
    prompt:
      'Refer to the exhibit. Which two statements about the network environment of router R1 must be true? (Choose two.)',
    options: [
      { key: 'A', text: 'The EIGRP administrative distance was manually changed from 90 to 170.' },
      { key: 'B', text: 'There are 20 different network masks within the 10.0.0.0/8 network.' },
      { key: 'C', text: 'Ten routes are equally load-balanced between Te0/1/0.100 and Te0/2/0.100.' },
      { key: 'D', text: 'The 10.0.0.0/8 network was learned via external EIGRP.' },
      { key: 'E', text: 'A static default route to 10.85.33.14 was defined.' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — อ่านรายละเอียดจากผลลัพธ์ show ip route ทีละบรรทัด\n🔍 บรรทัดหัวข้อ\n"10.0.0.0/8 is variably subnetted, 6692 subnets, 20 masks" ⭐\n→ คำว่า "20 masks" บอกตรง ๆ ว่าภายในเครือข่าย 10.0.0.0/8 มี subnet mask ที่ต่างกัน 20 แบบ (VLSM)\n\n🔍 นับเส้นทาง D EX ที่มีสอง next hop\nD*EX 0.0.0.0/0        [170/257024] via 10.85.33.14 และ 10.85.33.10\nD EX 10.0.1.0/24      [170/51968] สองเส้นทาง\nD EX 10.0.2.0/23      สองเส้นทาง\nD EX 10.0.4.0/22      สองเส้นทาง\nD EX 10.0.8.0/21      สองเส้นทาง\nD EX 10.0.16.0/20     สองเส้นทาง\nD EX 10.0.32.0/19     สองเส้นทาง\nD EX 10.1.255.240/28  สองเส้นทาง\nD EX 10.2.0.0/16      สองเส้นทาง\nD EX 10.3.0.0/16      สองเส้นทาง\nรวม 10 เส้นทาง ทุกเส้นมี metric เท่ากันและออกทาง TenGigabitEthernet0/2/0.100 กับ 0/1/0.100 ⭐ นี่คือ ECMP\n\n✅ ทำไม B + C ถูก:\nB. อ่านตรงจากบรรทัดหัวข้อ "20 masks" ✔\nC. นับเส้นทาง D EX ที่มี next hop คู่ได้พอดี 10 เส้นทาง แต่ละเส้น metric เท่ากันจึงแบ่งโหลดออกสองอินเทอร์เฟซ ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. AD 170 คือค่า "ดีฟอลต์" ของ EIGRP external อยู่แล้ว (ส่วน 90 เป็นของ EIGRP internal) จึงไม่ได้มีใครไปแก้ ⭐\nD. ในตารางไม่มีรายการของ prefix 10.0.0.0/8 เลย — บรรทัด "10.0.0.0/8 is variably subnetted" เป็นเพียงหัวข้อจัดกลุ่มการแสดงผล ไม่ใช่เส้นทางจริง ⭐ กับดักหลัก\nE. เส้นทางดีฟอลต์แสดงเป็น D*EX ซึ่งหมายถึงเรียนรู้ผ่าน EIGRP external ถ้าเป็น static จะขึ้นเป็น S* แทน\n\n📗 จำไว้สอบ: D = EIGRP, D EX = EIGRP external (AD 170), S = static, O = OSPF, B = BGP • เครื่องหมาย * = candidate default',
  },
  {
    id: 381,
    kind: 'multi',
    prompt: 'Which two statements about exterior routing protocols are true? (Choose two.)',
    options: [
      { key: 'A', text: 'They determine the optimal path within an autonomous system.' },
      { key: 'B', text: 'They determine the optimal path between autonomous systems.' },
      { key: 'C', text: 'BGP is the current standard exterior routing protocol.' },
      { key: 'D', text: 'Most modern networking supports both EGP and BGP for external routing.' },
      { key: 'E', text: 'Most modern network routers support both EGP and EIGRP for external routing.' },
    ],
    correct: ['B', 'C'],
    explanation:
      '📘 แนวคิด — แบ่งโปรโตคอลตามขอบเขตที่ทำงาน\nIGP (Interior Gateway Protocol) — ทำงาน "ภายใน" autonomous system เดียว\n• RIP, EIGRP, OSPF, IS-IS\n• เป้าหมาย: หาเส้นทางที่เร็วที่สุด converge ไว\n\nEGP (Exterior Gateway Protocol) — ทำงาน "ระหว่าง" autonomous system ⭐\n• BGP (ปัจจุบันคือ BGPv4) เป็นมาตรฐานเดียวที่ใช้จริงบนอินเทอร์เน็ต ⭐\n• เป้าหมาย: ควบคุมนโยบายการรับส่งทราฟฟิกระหว่างองค์กร ไม่ได้เน้นความเร็วในการ converge\n• เป็น path vector โฆษณา AS_PATH ทั้งเส้นเพื่อป้องกันลูประหว่าง AS\n\n💡 หมายเหตุทางประวัติศาสตร์: เคยมีโปรโตคอลชื่อ "EGP" (RFC 904) อยู่จริงในยุคแรกของอินเทอร์เน็ต แต่ถูกแทนที่ด้วย BGP ไปนานแล้ว ปัจจุบันคำว่า EGP ใช้เรียก "ประเภท" ของโปรโตคอล ไม่ใช่ชื่อโปรโตคอลที่ยังใช้งาน\n\n✅ ทำไม B + C ถูก:\nB. นิยามของ exterior routing protocol คือการหาเส้นทางระหว่าง AS ✔\nC. BGPv4 คือมาตรฐานที่อินเทอร์เน็ตทั้งโลกใช้อยู่ในปัจจุบัน ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. การหาเส้นทางภายใน AS เป็นหน้าที่ของ IGP ไม่ใช่ EGP\nD. โปรโตคอล EGP ตัวเดิมเลิกใช้ไปแล้ว เราเตอร์สมัยใหม่ไม่รองรับ\nE. EIGRP เป็น IGP ของ Cisco ไม่ได้ใช้เป็น external routing protocol และ EGP ก็เลิกใช้แล้ว\n\n📗 จำไว้สอบ: IGP = ภายใน AS (RIP/EIGRP/OSPF/IS-IS) • EGP = ระหว่าง AS (BGP เท่านั้น) • eBGP AD 20, iBGP AD 200',
  },
  {
    id: 382,
    kind: 'single',
    prompt:
      'You have two paths for the 10.10.10.0 network - one that has a feasible distance of 3072 and the other of 6144. What do you need to do to load balance your EIGRP routes?',
    options: [
      { key: 'A', text: 'Change the maximum paths to 2' },
      { key: 'B', text: 'Change the configuration so they both have the same feasible distance' },
      { key: 'C', text: 'Change the variance for the path that has a feasible distance of 3072 to 2' },
      { key: 'D', text: 'Change the IP addresses so both paths have the same source IP address' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — EIGRP ทำ unequal-cost load balancing ได้ด้วยคำสั่ง variance\nโดยดีฟอลต์ variance = 1 หมายความว่า EIGRP ติดตั้งเฉพาะเส้นทางที่มี FD เท่ากับ successor เท่านั้น (equal-cost)\nเมื่อตั้ง variance เป็น n เส้นทางที่จะถูกติดตั้งเพิ่มต้องผ่านสองเงื่อนไข\n1️⃣ FD ของเส้นทางนั้น ≤ (FD ของ successor × n) ⭐\n2️⃣ ต้องเป็น feasible successor อยู่แล้ว คือ AD ของมัน < FD ของ successor (เงื่อนไขกันลูป)\n\n🔢 คำนวณจากโจทย์\nsuccessor FD = 3072 (เส้นทางที่ดีที่สุด)\nอีกเส้นทาง FD = 6144\nอัตราส่วน = 6144 ÷ 3072 = 2 พอดี\n→ ต้องตั้ง variance เป็น 2 เพราะ 3072 × 2 = 6144 ซึ่งครอบคลุมเส้นทางที่สองพอดี ⭐\n\n🔧 คำสั่ง\nR1(config)# router eigrp 100\nR1(config-router)# variance 2\nR1(config-router)# maximum-paths 4        ← ดีฟอลต์อยู่แล้ว\nผลลัพธ์: EIGRP กระจายทราฟฟิกแบบ "สัดส่วนตาม metric" คือเส้นทางที่เร็วกว่าได้รับทราฟฟิกมากกว่า ไม่ใช่แบ่งครึ่งเท่ากัน\n\n✅ ทำไม C ถูก: variance 2 เป็นค่าที่ทำให้เส้นทาง FD 6144 เข้าเงื่อนไขและถูกติดตั้งควบคู่กับ successor FD 3072 เกิดการแบ่งโหลดแบบ unequal-cost\n\n❌ ทำไมข้ออื่นผิด:\nA. maximum-paths กำหนด "จำนวนสูงสุด" ของเส้นทางที่ติดตั้งได้ (ดีฟอลต์ 4 อยู่แล้ว) แต่ไม่ได้อนุญาตให้เส้นทางที่ metric ต่างกันเข้ามา ⭐ ตัวลวงหลัก\nB. การไปแก้ bandwidth/delay ให้ FD เท่ากันเป็นการบิดเบือนค่าความจริงของลิงก์ ทำให้ EIGRP คำนวณผิดพลาดในภาพรวม\nD. IP address ต้นทางไม่มีผลใด ๆ ต่อการเลือกเส้นทางหรือการแบ่งโหลด\n\n📗 จำไว้สอบ: EIGRP = โปรโตคอลเดียวที่ทำ unequal-cost load balancing ได้ด้วย variance • OSPF ทำได้เฉพาะ equal-cost',
  },
  {
    id: 383,
    kind: 'drag',
    image: v4q383,
    prompt:
      'Drag each route source from the left to the numbers on the right, beginning with the lowest and ending with the highest administrative distance.',
    categories: [
      { name: '1 (AD ต่ำสุด = 0)', items: ['connected'] },
      { name: '2 (AD = 1)', items: ['static'] },
      { name: '3 (AD = 20)', items: ['EBGP'] },
      { name: '4 (AD = 90)', items: ['EIGRP'] },
      { name: '5 (AD = 110)', items: ['OSPF'] },
      { name: '6 (AD สูงสุด = 120)', items: ['RIP'] },
    ],
    explanation:
      '📘 แนวคิด — ตาราง Administrative Distance ที่ต้องท่องให้ขึ้นใจ\nAD คือ "ระดับความน่าเชื่อถือ" ของแหล่งที่มาของเส้นทาง ค่าต่ำ = เชื่อถือได้มากกว่า = ชนะเมื่อ prefix เหมือนกัน\n\nแหล่งที่มา              AD\nConnected               0    ⭐ ต่อตรง เห็นกับตา เชื่อถือได้ที่สุด\nStatic                  1    ⭐ ผู้ดูแลพิมพ์เอง\neBGP                    20   ⭐ มาจากภายนอก AS จึงตั้งให้ต่ำเพื่อให้ชนะ IGP\nEIGRP (internal)        90   ⭐\nIGRP                    100  (เลิกใช้แล้ว)\nOSPF                    110  ⭐\nIS-IS                   115\nRIP                     120  ⭐\nEIGRP (external)        170  — เรียนจากการ redistribute เข้ามา จึงเชื่อถือน้อยลง\niBGP                    200  — ภายใน AS เดียวกัน ตั้งสูงเพื่อไม่ให้แย่งงาน IGP\nUnknown / Unreachable   255  — ไม่ถูกติดตั้งลงตารางเส้นทางเลย\n\n💡 เทคนิคจำ: 0 → 1 → 20 → 90 → 110 → 115 → 120 → 170 → 200 → 255\n"ต่อตรง ศูนย์ / สแตติก หนึ่ง / อีบีจีพี ยี่สิบ / เก้าสิบ อีไอจีอาร์พี / ร้อยสิบ โอเอสพีเอฟ / ร้อยยี่สิบ ริป"\n\n⚠️ กับดักที่ออกสอบบ่อย\n• eBGP (20) ต่ำกว่า IGP ทุกตัว แต่ iBGP (200) สูงกว่า IGP ทุกตัว — จำแยกกันให้ดี\n• EIGRP internal 90 กับ external 170 ต่างกันมาก ถ้าโจทย์บอกว่าเป็น external ผลการเปรียบเทียบจะพลิก\n\n📗 จำไว้สอบ: AD ใช้ตัดสินเมื่อ "prefix เหมือนกันเป๊ะ" แต่มาจากคนละโปรโตคอล — ถ้า prefix ต่างกัน ให้ใช้ longest prefix match ก่อนเสมอ',
  },
  {
    id: 384,
    kind: 'multi',
    prompt: 'Which two circumstances can prevent two routers from establishing an OSPF neighbor adjacency? (Choose two.)',
    options: [
      { key: 'A', text: 'mismatched autonomous system numbers' },
      { key: 'B', text: 'an ACL blocking traffic from multicast address 224.0.0.10' },
      { key: 'C', text: 'mismatched process IDs' },
      { key: 'D', text: 'mismatched hello timers and dead timers' },
      { key: 'E', text: 'use of the same router ID on both devices' },
    ],
    correct: ['D', 'E'],
    explanation:
      '📘 แนวคิด — เช็กลิสต์สิ่งที่ทำให้ OSPF ไม่เกิด adjacency\n✘ สาเหตุที่ทำให้ล้มเหลว\n• Area ID ไม่ตรงกัน\n• Hello / Dead interval ไม่ตรงกัน ⭐\n• Subnet และ mask ไม่อยู่วงเดียวกัน\n• MTU ไม่ตรงกัน (ค้างที่สถานะ EXSTART/EXCHANGE)\n• Authentication ไม่ตรงกัน\n• Network type ไม่เข้ากัน\n• Stub area flag ไม่ตรงกัน\n• Router ID ซ้ำกัน ⭐ (OSPF ใช้ Router ID ระบุตัวตน ถ้าซ้ำจะเกิด log %OSPF-4-DUP_RTRID1 และ adjacency ไม่เสถียร)\n• ACL บล็อก 224.0.0.5 (AllSPFRouters) หรือ 224.0.0.6 (AllDRouters)\n• พอร์ตถูกตั้งเป็น passive-interface\n\n✔ สิ่งที่ "ไม่" เป็นปัญหา\n• Process ID ต่างกัน — เป็นค่าเฉพาะเครื่อง\n• Priority ต่างกัน — มีผลแค่การเลือก DR/BDR\n• Cost ต่างกัน\n\n✅ ทำไม D + E ถูก:\nD. Hello/Dead ที่ไม่ตรงกันทำให้ทั้งสองฝ่ายทิ้ง Hello packet ของกันและกัน จึงไม่มีทางเห็นกันเลย ✔\nE. Router ID ที่ซ้ำกันทำให้ OSPF สับสนในการระบุตัวตนของ LSA และ adjacency ไม่สามารถคงอยู่ได้ ✔\n\n❌ ทำไมข้ออื่นผิด:\nA. OSPF ไม่มีแนวคิดเรื่อง autonomous system number ในการสร้าง neighbor (นั่นเป็นของ EIGRP ที่ต้องใช้ AS number ตรงกัน และของ BGP)\nB. 224.0.0.10 เป็น multicast ของ EIGRP ⭐ ส่วน OSPF ใช้ 224.0.0.5 และ 224.0.0.6 — ตัวลวงที่ดักคนจำสลับ\nC. Process ID เป็นเลขที่มีความหมายเฉพาะบนเราเตอร์ตัวนั้น ไม่ต้องตรงกันเลย ⭐ ตัวลวงยอดฮิต\n\n📗 จำไว้สอบ: multicast — OSPF 224.0.0.5/224.0.0.6 • EIGRP 224.0.0.10 • RIPv2 224.0.0.9 • ทุกเราเตอร์ 224.0.0.2',
  },
  {
    id: 385,
    kind: 'multi',
    prompt: 'Which three describe the reasons large OSPF networks use a hierarchical design? (Choose three.)',
    options: [
      { key: 'A', text: 'to speed up convergence' },
      { key: 'B', text: 'to reduce routing overhead' },
      { key: 'C', text: 'to lower costs by replacing routers with distribution layer switches' },
      { key: 'D', text: 'to decrease latency by increasing bandwidth' },
      { key: 'E', text: 'to confine network instability to single areas of the network' },
      { key: 'F', text: 'to reduce the complexity of router configuration' },
    ],
    correct: ['A', 'B', 'E'],
    explanation:
      '📘 แนวคิด — ทำไม OSPF ต้องแบ่ง area\nOSPF เป็น link-state ทุกเราเตอร์ใน area เดียวกันต้องเก็บ LSDB ที่เหมือนกันเป๊ะและรัน SPF ทุกครั้งที่โทโพโลยีเปลี่ยน\n→ ถ้าเครือข่ายใหญ่มากและมีแค่ area เดียว จะเกิดปัญหาสามอย่าง\n1️⃣ LSDB ใหญ่มาก กิน RAM และ CPU\n2️⃣ ทุกครั้งที่มีลิงก์กระพริบที่มุมใดมุมหนึ่ง เราเตอร์ "ทุกตัว" ต้องรัน SPF ใหม่หมด\n3️⃣ ตารางเส้นทางบวมเพราะไม่มีการสรุปเส้นทาง\n\n✅ การแบ่ง area แก้ได้ครบทั้งสาม\nA. เร่งการ converge — SPF คำนวณเฉพาะภายใน area ที่เกิดเหตุ ฐานข้อมูลเล็กลง คำนวณเร็วขึ้น ✔\nB. ลด routing overhead — ABR สรุปเส้นทาง (area range) ทำให้ LSA และตารางเส้นทางเล็กลง ประหยัดแบนด์วิดท์และหน่วยความจำ ✔\nE. จำกัดความไม่เสถียรไว้ใน area เดียว — ลิงก์กระพริบใน area 1 จะไม่บังคับให้เราเตอร์ใน area 2 รัน SPF ใหม่ ✔\n\n❌ ทำไมข้ออื่นผิด:\nC. การออกแบบ OSPF เป็นเรื่องเชิงตรรกะ ไม่ได้เกี่ยวกับการเปลี่ยนอุปกรณ์เพื่อลดต้นทุน (และ OSPF ยังต้องการอุปกรณ์ Layer 3 อยู่ดี)\nD. การเพิ่มแบนด์วิดท์เป็นการลงทุนด้านฮาร์ดแวร์/วงจร ไม่ได้เกิดจากการแบ่ง area\nF. ในทางกลับกัน หลาย area ทำให้คอนฟิก "ซับซ้อนขึ้น" — ต้องตั้ง ABR, area range, virtual link และเลือกประเภท area (stub/NSSA) ⭐\n\n📗 จำไว้สอบ: area 0 = backbone ทุก area ต้องเชื่อมถึง • ABR = คั่นระหว่าง area • ASBR = คั่นระหว่าง OSPF กับโปรโตคอลอื่น',
  },
  {
    id: 386,
    kind: 'single',
    image: v4q386,
    prompt: 'Refer to the exhibit. If R1 receives a packet destined to 172.16.1.1, to which IP address does it send the packet?',
    options: [
      { key: 'A', text: '192.168.14.4' },
      { key: 'B', text: '192.168.12.2' },
      { key: 'C', text: '192.168.13.3' },
      { key: 'D', text: '192.168.15.5' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ไล่ตรวจทุกเส้นทางว่ามีตัวไหนครอบคลุมปลายทางหรือไม่ ถ้าไม่มีเลยจึงใช้ default route\n\n🔍 อ่าน exhibit — ปลายทาง 172.16.1.1\nC  172.16.1.128/25 directly connected, Gi1/1/0\n   → /25 block 128 → ช่วง 172.16.1.128 - 172.16.1.255 → .1 ไม่อยู่ในช่วง ✘ ⭐ กับดักหลัก\nC  192.168.12.0/24, 192.168.13.0/24, 192.168.14.0/24 → คนละเครือข่าย ✘\nC  172.16.16.1 directly connected, Loopback1 → เป็น host เดี่ยว ไม่ใช่ 172.16.1.1 ✘\nO  192.168.10.0/24, 192.168.10.32/27, 192.168.0.0/16 → คนละเครือข่าย ✘\nD  192.168.10.1/32 → คนละเครือข่าย ✘\nO*E2 0.0.0.0/0 [110/1] via 192.168.14.4, FastEthernet1/0 ⭐ default route\nและบรรทัดบนสุดยืนยันว่า "Gateway of last resort is 192.168.14.4 to network 0.0.0.0"\n\n🔗 สรุป: ไม่มีเส้นทางเฉพาะใดครอบคลุม 172.16.1.1 เลย แพ็กเก็ตจึงตกลงมาที่ default route\n\n✅ ทำไม A ถูก: เมื่อไม่มีเส้นทางที่ตรงกว่า เราเตอร์ส่งแพ็กเก็ตไปยัง gateway of last resort ซึ่งคือ 192.168.14.4\n\n❌ ทำไมข้ออื่นผิด:\nB. 192.168.12.2 อยู่บนเซกเมนต์ที่ต่อตรงแต่ไม่มีเส้นทางใดชี้ไปที่นั่นสำหรับปลายทางนี้\nC. 192.168.13.3 เป็น next hop ของเส้นทาง 192.168.10.32/27 เท่านั้น\nD. 192.168.15.5 เป็น next hop ของเส้นทาง 192.168.0.0/16 ซึ่งครอบคลุมเฉพาะ 192.168.x.x ไม่ใช่ 172.16.x.x\n\n💡 บทเรียนสำคัญ: อย่าเห็น "172.16.1.x" ในตารางแล้วรีบสรุปว่าตรงกัน ต้องคำนวณช่วงของ /25 ก่อนเสมอ — 172.16.1.128/25 เริ่มที่ .128 ไม่ได้ครอบคลุม .1\n\n📗 จำไว้สอบ: /25 block 128 → 0-127 กับ 128-255 • ไม่มีเส้นทางตรง = ใช้ default route • ไม่มี default route ด้วย = ทิ้งแพ็กเก็ต',
  },
  {
    id: 387,
    kind: 'single',
    image: v4q387,
    prompt: 'Refer to the exhibit. On R1 which routing protocol is in use on the route to 192.168.10.1?',
    options: [
      { key: 'A', text: 'RIP' },
      { key: 'B', text: 'OSPF' },
      { key: 'C', text: 'IGRP' },
      { key: 'D', text: 'EIGRP' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — หาเส้นทางที่ตรงที่สุดก่อน แล้วดูตัวอักษรหน้าบรรทัด\n🔍 อ่าน exhibit — ปลายทาง 192.168.10.1\nO  192.168.10.0/24  [110/2]    via 192.168.14.4  → ช่วง .0 - .255 → ครอบคลุม ✔\nO  192.168.10.32/27 [110/11]   via 192.168.13.3  → block 32 → ช่วง .32 - .63 → ไม่ครอบคลุม ✘\nO  192.168.0.0/16   [110/2]    via 192.168.15.5  → ครอบคลุม ✔\nD  192.168.10.1/32  [90/52778] via 192.168.12.2  → host route ตรงตัว ✔ ⭐ ยาวที่สุด\nO*E2 0.0.0.0/0      [110/1]    via 192.168.14.4  → ครอบคลุม ✔ (แต่สั้นที่สุด)\n\nเรียงความยาว prefix ของเส้นทางที่ครอบคลุม: /32 > /24 > /16 > /0\n→ ชนะคือ /32 ซึ่งขึ้นต้นด้วยตัวอักษร D\n\n📖 ตัวอักษรที่ควรจำจากตาราง codes\nC = connected, S = static, R = RIP, D = EIGRP ⭐, EX = EIGRP external,\nO = OSPF, IA = OSPF inter area, E1/E2 = OSPF external, i = IS-IS, B = BGP\n(ตัว D มาจากคำว่า DUAL ซึ่งเป็นอัลกอริทึมของ EIGRP เพราะตัว E ถูกใช้โดย EGP ไปแล้ว)\n\n✅ ทำไม D ถูก: เส้นทางที่ชนะคือ 192.168.10.1/32 ซึ่งมีรหัส D = EIGRP และค่า [90/52778] ก็ยืนยัน เพราะ 90 คือ AD ของ EIGRP internal พอดี\n\n❌ ทำไมข้ออื่นผิด:\nA. RIP ใช้ตัว R และมี AD 120 ซึ่งไม่ปรากฏในตารางนี้เลย\nB. OSPF ใช้ตัว O และ AD 110 — มีอยู่หลายบรรทัดจริง แต่ทุกบรรทัดมี prefix สั้นกว่า /32 จึงแพ้กฎ longest prefix match ⭐\nC. IGRP เป็นโปรโตคอลรุ่นเก่าที่เลิกใช้แล้วตั้งแต่ IOS 12.3\n\n📗 จำไว้สอบ: D = EIGRP (AD 90) • O = OSPF (AD 110) • R = RIP (AD 120) • เลขในวงเล็บคือ [AD/metric]',
  },
  {
    id: 388,
    kind: 'single',
    image: v4q388,
    prompt: 'Refer to the exhibit. Which command do you enter so that R1 advertises the loopback0 interface to the BGP peers?',
    options: [
      { key: 'A', text: 'network 172.16.1.32 mask 255.255.255.224' },
      { key: 'B', text: 'network 172.16.1.0 0.0.0.255' },
      { key: 'C', text: 'network 172.16.1.32 255.255.255.224' },
      { key: 'D', text: 'network 172.16.1.33 mask 255.255.255.224' },
      { key: 'E', text: 'network 172.16.1.32 mask 0.0.0.31' },
      { key: 'F', text: 'network 172.16.1.32 0.0.0.31' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — ไวยากรณ์ network ของ BGP ต่างจาก OSPF และ EIGRP\nBGP:  network <หมายเลขเครือข่าย> mask <subnet mask>   ⭐ ต้องมีคำว่า mask และใช้ subnet mask\nOSPF: network <ที่อยู่> <wildcard mask> area <id>      ← ใช้ wildcard\nEIGRP:network <ที่อยู่> [wildcard mask]                ← ใช้ wildcard\n\n⚠️ กฎเหล็กของ BGP: prefix ที่ประกาศต้องมีอยู่ในตารางเส้นทางแบบ "ตรงกันเป๊ะ" ทั้งหมายเลขเครือข่ายและ mask ไม่งั้น BGP จะไม่โฆษณาออกไป\n\n🔢 คำนวณจาก exhibit\ninterface Loopback0\n ip address 172.16.1.33 255.255.255.224\n→ /27 block 32 → 33 อยู่ในช่วง 32-63\n→ หมายเลขเครือข่าย = 172.16.1.32 ⭐ (ไม่ใช่ .33 ซึ่งเป็นที่อยู่โฮสต์)\n→ subnet mask = 255.255.255.224\n\n🔧 คำสั่งที่ถูกต้อง\nR1(config)# router bgp 100\nR1(config-router)# network 172.16.1.32 mask 255.255.255.224\n\n✅ ทำไม A ถูก: ใช้หมายเลขเครือข่าย (ไม่ใช่ที่อยู่โฮสต์) พร้อมคีย์เวิร์ด mask และ subnet mask ที่ถูกต้อง ตรงกับรายการในตารางเส้นทางพอดี\n\n❌ ทำไมข้ออื่นผิด:\nB. ใช้ wildcard mask ซึ่งเป็นไวยากรณ์ของ OSPF/EIGRP และหมายเลขเครือข่ายก็ผิด (.0 แทนที่จะเป็น .32)\nC, F. ขาดคีย์เวิร์ด mask → BGP จะตีความเป็น classful (172.16.0.0/16) ซึ่งไม่ตรงกับตารางเส้นทาง จึงไม่โฆษณาออกไป\nD. ใช้ 172.16.1.33 ซึ่งเป็นที่อยู่ของอินเทอร์เฟซ ไม่ใช่หมายเลขเครือข่าย ⭐ กับดักหลัก\nE. มีคีย์เวิร์ด mask แต่ใส่ wildcard (0.0.0.31) ตามหลัง ซึ่งผิดชนิดของค่า\n\n📗 จำไว้สอบ: BGP ใช้ subnet mask พร้อมคำว่า mask • OSPF/EIGRP ใช้ wildcard • ต้องประกาศหมายเลขเครือข่าย ไม่ใช่ที่อยู่โฮสต์',
  },
  {
    id: 389,
    kind: 'single',
    image: v4q389,
    prompt: 'Refer to the exhibit. What administrative distance has the route to 192.168.10.1?',
    options: [
      { key: 'A', text: '1' },
      { key: 'B', text: '90' },
      { key: 'C', text: '110' },
      { key: 'D', text: '120' },
    ],
    correct: ['B'],
    explanation:
      '📘 แนวคิด — สองขั้นตอน: หาเส้นทางที่ชนะ แล้วอ่านเลขตัวแรกในวงเล็บ\nรูปแบบของ show ip route: [AD/metric] เช่น [90/52778] หมายถึง AD = 90 และ metric = 52778\n\n🔍 ขั้นที่ 1 — หาเส้นทางที่ตรงที่สุดกับ 192.168.10.1\nO  192.168.10.0/24  [110/2]    → ครอบคลุม แต่ /24\nO  192.168.10.32/27 [110/11]   → block 32 → ช่วง .32-.63 → ไม่ครอบคลุม ✘\nO  192.168.0.0/16   [110/2]    → ครอบคลุม แต่ /16\nD  192.168.10.1/32  [90/52778] → host route ตรงตัว ✔ ⭐ /32 ยาวที่สุด\nO*E2 0.0.0.0/0      [110/1]    → ครอบคลุม แต่ /0 สั้นที่สุด\n\n🔍 ขั้นที่ 2 — อ่านค่า AD ของเส้นทางที่ชนะ\nD 192.168.10.1/32 [90/52778] via 192.168.12.2 → AD = 90 ⭐\nสอดคล้องกับตัวอักษร D ซึ่งหมายถึง EIGRP internal ที่มี AD ดีฟอลต์ 90 พอดี\n\n✅ ทำไม B ถูก: เส้นทางที่เราเตอร์ใช้จริงคือ EIGRP host route /32 ซึ่งมี AD = 90 ตามที่แสดงในวงเล็บ\n\n❌ ทำไมข้ออื่นผิด:\nA. 1 คือ AD ของ static route ซึ่งไม่มีในตารางนี้ (สังเกตว่าไม่มีบรรทัดใดขึ้นต้นด้วย S)\nC. 110 คือ AD ของ OSPF ซึ่งมีอยู่หลายบรรทัด แต่ทุกบรรทัดมี prefix สั้นกว่า /32 จึงไม่ถูกเลือก ⭐\nD. 120 คือ AD ของ RIP ซึ่งไม่ปรากฏในตารางนี้เลย\n\n📗 จำไว้สอบ: longest prefix match ตัดสินก่อน แล้วค่อยอ่าน AD ของเส้นทางที่ชนะ • [AD/metric] เลขซ้ายคือ AD เสมอ',
  },
  {
    id: 390,
    kind: 'single',
    prompt: 'Which value is used to determine the active router in an HSRP default configuration?',
    options: [
      { key: 'A', text: 'Router loopback address' },
      { key: 'B', text: 'Router IP address' },
      { key: 'C', text: 'Router priority' },
      { key: 'D', text: 'Router tracking number' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ลำดับการเลือก Active router ของ HSRP\n1️⃣ Priority สูงสุดชนะ (ช่วง 0-255 ค่าดีฟอลต์ 100) ⭐\n2️⃣ ถ้า priority เท่ากัน → IP address ของอินเทอร์เฟซที่สูงที่สุดชนะ\n\n⚠️ ข้อควรจำ: HSRP ใช้ priority "สูงสุด" ชนะ ซึ่งตรงข้ามกับ STP ที่ใช้ priority "ต่ำสุด" ชนะ — เป็นจุดที่สลับกันบ่อยที่สุดในห้องสอบ ⭐\n\n🔧 คอนฟิกที่เกี่ยวข้อง\nR1(config-if)# standby 1 ip 10.1.1.254\nR1(config-if)# standby 1 priority 150     ← สูงกว่าดีฟอลต์ 100\nR1(config-if)# standby 1 preempt          ← ต้องมี ไม่งั้นจะไม่ทวงตำแหน่งคืนหลังรีบูต\nR1(config-if)# standby 1 track Gi0/1 30   ← ถ้าลิงก์ขาออกล่ม ให้ลด priority ลง 30\n\n💡 เกี่ยวกับ tracking: การ track ทำให้เราเตอร์ลด priority ของตัวเองลงเมื่ออินเทอร์เฟซขาออกล่ม เพื่อสละตำแหน่ง Active ให้เพื่อนที่ยังมีเส้นทางออกอยู่ — แต่ตัวเลขที่ใช้ตัดสินก็ยังคงเป็น "priority" ที่ถูกลดค่าแล้วอยู่ดี\n\n✅ ทำไม C ถูก: priority คือค่าแรกที่ HSRP นำมาเปรียบเทียบเพื่อเลือก Active router และเป็นค่าที่ผู้ดูแลปรับแต่งได้โดยตรง\n\n❌ ทำไมข้ออื่นผิด:\nA. loopback address ใช้เป็น OSPF Router ID ไม่เกี่ยวกับการเลือก Active ของ HSRP\nB. IP address เป็นเพียงเกณฑ์ตัดสิน "อันดับสอง" ใช้เมื่อ priority เสมอกันเท่านั้น\nD. ไม่มีค่าที่เรียกว่า "tracking number" — มีแต่ interface tracking ซึ่งทำงานโดยการปรับค่า priority\n\n📗 จำไว้สอบ: HSRP priority สูงสุดชนะ (ต่างจาก STP ที่ต่ำสุดชนะ) • เสมอกันให้ IP สูงสุดชนะ • preempt ปิดโดยดีฟอลต์',
  },
  {
    id: 391,
    kind: 'multi',
    image: v4q391,
    prompt:
      'Refer to the exhibit. If RTR01 is configured as shown, which three addresses will be received by other routers that are running EIGRP on the network? (Choose three.)',
    options: [
      { key: 'A', text: '192.168.2.0' },
      { key: 'B', text: '10.4.3.0' },
      { key: 'C', text: '10.0.0.0' },
      { key: 'D', text: '172.16.0.0' },
      { key: 'E', text: '172.16.4.0' },
      { key: 'F', text: '192.168.0.0' },
    ],
    correct: ['A', 'C', 'D'],
    explanation:
      '📘 แนวคิด — auto-summary บังคับให้ EIGRP สรุปเป็นขอบเขต classful\n🔍 อ่าน exhibit\nRTR01(config)# router eigrp 103\nRTR01(config-router)# network 10.4.3.0\nRTR01(config-router)# network 172.16.4.0\nRTR01(config-router)# network 192.168.2.0\nRTR01(config-router)# auto-summary          ⭐ ตัวชี้ขาด\n\n📖 ทบทวนคลาสของที่อยู่ IPv4\nClass A : 1-126     mask ตามคลาส /8   → 10.x.x.x\nClass B : 128-191   mask ตามคลาส /16  → 172.16.x.x\nClass C : 192-223   mask ตามคลาส /24  → 192.168.2.x\n\n🔗 เมื่อ auto-summary ทำงาน EIGRP จะโฆษณาเครือข่ายที่ขอบเขตคลาส\n• 10.4.3.0    → คลาส A → สรุปเป็น 10.0.0.0/8 ⭐\n• 172.16.4.0  → คลาส B → สรุปเป็น 172.16.0.0/16 ⭐\n• 192.168.2.0 → คลาส C → 192.168.2.0/24 อยู่ที่ขอบเขตคลาสอยู่แล้ว จึงโฆษณาตามเดิม ⭐\n\n✅ ทำไม A + C + D ถูก: เพื่อนบ้านจะได้รับสามเครือข่ายนี้ — 192.168.2.0 (ไม่ถูกสรุปเพราะเป็นขอบคลาสอยู่แล้ว), 10.0.0.0 และ 172.16.0.0 (ถูกสรุปขึ้นไปที่ขอบคลาส)\n\n❌ ทำไมข้ออื่นผิด:\nB. 10.4.3.0 เป็นซับเน็ตย่อยที่ถูกสรุปกลืนหายไปใน 10.0.0.0/8 ⭐\nE. 172.16.4.0 ถูกสรุปกลืนหายไปใน 172.16.0.0/16 เช่นกัน\nF. 192.168.0.0 ไม่ใช่ขอบเขตคลาสของ 192.168.2.0 — คลาส C สรุปที่ออกเตตที่สาม จึงได้ 192.168.2.0 ไม่ใช่ 192.168.0.0\n\n💡 เกร็ด: บน IOS รุ่นใหม่ EIGRP ตั้ง no auto-summary เป็นค่าเริ่มต้นแล้ว เพราะการสรุปอัตโนมัติทำให้เกิดปัญหา discontiguous network — แต่โจทย์ข้อนี้เปิดไว้อย่างชัดเจน\n\n📗 จำไว้สอบ: auto-summary → สรุปที่ขอบคลาส A=/8, B=/16, C=/24 • ปิดด้วย no auto-summary เพื่อรองรับ VLSM',
  },
  {
    id: 392,
    kind: 'single',
    prompt:
      'Which configuration command can you apply to an HSRP router so that its local interface becomes active if all other routers in the group fail?',
    options: [
      { key: 'A', text: 'no additional config is required' },
      { key: 'B', text: 'standby 1 track ethernet' },
      { key: 'C', text: 'standby 1 preempt' },
      { key: 'D', text: 'standby 1 priority 250' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — HSRP มีกลไกเข้ารับหน้าที่แทนอยู่ในตัวอยู่แล้ว\nสถานะของเราเตอร์ในกลุ่ม HSRP จะไล่ไปตามลำดับ\nInitial → Learn → Listen → Speak → Standby → Active\n\nเมื่อเราเตอร์ตัวอื่นในกลุ่มล่มทั้งหมด\n1. เราเตอร์ที่เหลือหยุดได้รับ hello (ส่งทุก 3 วินาที)\n2. เมื่อครบ holdtime 10 วินาทีโดยไม่ได้ยินใครเลย มันจะถือว่าตัวเองเป็นตัวเดียวที่เหลือ\n3. มันเลื่อนสถานะขึ้นเป็น Active โดยอัตโนมัติ และเริ่มตอบ ARP ด้วย virtual MAC ⭐\nทั้งหมดนี้เป็นพฤติกรรมมาตรฐานที่ไม่ต้องคอนฟิกอะไรเพิ่ม\n\n✅ ทำไม A ถูก: การเป็น Active เมื่อไม่มีคู่แข่งเหลืออยู่คือกลไกพื้นฐานของ HSRP ที่ทำงานเองทันทีที่เปิดใช้งาน ไม่ต้องมีคำสั่งเสริมใด ๆ\n\n❌ ทำไมข้ออื่นผิด:\nB. interface tracking ใช้ "ลด" priority ของตัวเองเมื่ออินเทอร์เฟซขาออกล่ม เพื่อสละตำแหน่งให้เพื่อน — เป็นเรื่องตรงข้ามกับที่โจทย์ถาม (และไวยากรณ์ก็ไม่สมบูรณ์ ต้องระบุหมายเลขอินเทอร์เฟซและค่า decrement)\nC. preempt จำเป็นเมื่อต้องการ "ทวงตำแหน่งคืน" จากเราเตอร์ที่กำลังเป็น Active อยู่ แต่ในสถานการณ์ที่ทุกตัวล่มไปหมดแล้ว ไม่มีใครให้ทวงคืน จึงไม่จำเป็น ⭐\nD. priority 250 ช่วยให้ชนะการเลือกตั้งเมื่อมีคู่แข่ง แต่เมื่อไม่เหลือคู่แข่งแล้ว ค่านี้ก็ไม่มีความหมาย\n\n📗 จำไว้สอบ: HSRP hello 3 วินาที / holdtime 10 วินาที • เหลือตัวเดียว = ขึ้นเป็น Active เอง • preempt ใช้ตอนกลับมาหลังล่ม',
  },
  {
    id: 393,
    kind: 'multi',
    prompt: 'Which two statements about eBGP neighbor relationships are true? (Choose two.)',
    options: [
      { key: 'A', text: 'The two devices must reside in different autonomous systems' },
      { key: 'B', text: 'Neighbors must be specifically declared in the configuration of each device' },
      { key: 'C', text: 'They can be created dynamically after the network statement is configured' },
      { key: 'D', text: 'The two devices must reside in the same autonomous system' },
      { key: 'E', text: 'The two devices must have matching timer settings' },
    ],
    correct: ['A', 'B'],
    explanation:
      '📘 แนวคิด — eBGP กับ iBGP ต่างกันที่หมายเลข AS\n• eBGP = เพื่อนบ้านอยู่คนละ AS ⭐ (AD 20, TTL ดีฟอลต์ = 1 จึงต้องต่อตรงกัน หรือใช้ ebgp-multihop)\n• iBGP = เพื่อนบ้านอยู่ AS เดียวกัน (AD 200, ไม่ต้องต่อตรง)\n\nBGP ไม่ค้นหาเพื่อนบ้านเองแบบ OSPF หรือ EIGRP — มันเปิดการเชื่อมต่อ TCP พอร์ต 179 ไปยัง IP ที่ระบุไว้เท่านั้น จึงต้องประกาศเพื่อนบ้านด้วยมือทั้งสองฝั่ง ⭐\n\n🔧 คอนฟิกตัวอย่าง\nR1(config)# router bgp 65001\nR1(config-router)# neighbor 203.0.113.2 remote-as 65002    ← ประกาศเพื่อนบ้านและ AS ของเขา\n!\nR2(config)# router bgp 65002\nR2(config-router)# neighbor 203.0.113.1 remote-as 65001    ← ต้องประกาศกลับมาด้วย\n\n✅ ทำไม A + B ถูก:\nA. คำว่า "e" ใน eBGP มาจาก external หมายถึงระหว่าง AS ที่ต่างกัน ✔\nB. BGP ต้องประกาศเพื่อนบ้านอย่างเจาะจงด้วยคำสั่ง neighbor ทั้งสองฝั่ง ไม่มีการค้นหาอัตโนมัติ ✔\n\n❌ ทำไมข้ออื่นผิด:\nC. คำสั่ง network ของ BGP ใช้ "โฆษณา prefix" ที่มีอยู่ในตารางเส้นทางออกไป ไม่ได้ใช้เปิดใช้งานอินเทอร์เฟซหรือค้นหาเพื่อนบ้านแบบ OSPF/EIGRP ⭐ ตัวลวงหลัก\nD. บรรยาย iBGP ไม่ใช่ eBGP\nE. BGP ไม่ต้องการให้ keepalive/holdtime ตรงกัน — ระหว่างการเปิดเซสชันทั้งสองฝั่งจะเจรจาแล้วใช้ค่า holdtime ที่ "ต่ำกว่า" ร่วมกัน (ดีฟอลต์ keepalive 60 / holdtime 180 วินาที)\n\n📗 จำไว้สอบ: BGP ใช้ TCP 179 • eBGP AD 20 / iBGP AD 200 • ต้องพิมพ์ neighbor เองทั้งสองฝั่งเสมอ',
  },
  {
    id: 394,
    kind: 'single',
    image: v4q394,
    prompt: 'Refer to the exhibit. How will the router handle a packet destined for 192.0.2.156?',
    options: [
      { key: 'A', text: 'The router will forward the packet via either Serial0 or Serial1.' },
      { key: 'B', text: 'The router will return the packet to its source.' },
      { key: 'C', text: 'The router will forward the packet via Serial2.' },
      { key: 'D', text: 'The router will drop the packet.' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — ไม่มีเส้นทางเฉพาะ ให้ใช้ default route\n🔍 อ่าน exhibit — ปลายทาง 192.0.2.156\nGateway of last resort is 192.168.4.1 to network 0.0.0.0   ⭐ บรรทัดสำคัญที่สุด\n 10.0.0.0/24 is subnetted, 3 subnets\n C  10.0.2.0 directly connected, Ethernet1\n D  10.0.3.0 [90/2195456] via 192.168.1.2, Serial0\n D  10.0.4.0 [90/2195456] via 192.168.3.1, Serial1\n C  192.168.1.0/24 directly connected, Serial0\n D  192.168.2.0/24 [90/2681856] via 192.168.1.2, Serial0\n                   [90/2681856] via 192.168.3.1, Serial1\n C  192.168.3.0/24 directly connected, Serial1\n C  192.168.4.0/24 directly connected, Serial2   ⭐\n\n🔗 ไล่ตรรกะ\n1. ไม่มีเส้นทางใดในตารางครอบคลุม 192.0.2.156 เลย (ทุกเส้นเป็น 10.x หรือ 192.168.x)\n2. จึงตกลงมาที่ default route ซึ่งชี้ next hop = 192.168.4.1\n3. 192.168.4.1 อยู่ในเครือข่าย 192.168.4.0/24 ที่ต่อตรงอยู่กับ Serial2\n4. เราเตอร์จึงส่งแพ็กเก็ตออกทาง Serial2 ⭐\n\n✅ ทำไม C ถูก: เส้นทางสุดท้ายชี้ไปที่ 192.168.4.1 ซึ่งเข้าถึงได้ผ่านอินเทอร์เฟซ Serial2 ตามที่บรรทัด "C 192.168.4.0/24 directly connected, Serial2" ระบุไว้\n\n❌ ทำไมข้ออื่นผิด:\nA. Serial0 และ Serial1 ใช้สำหรับเส้นทางที่เรียนผ่าน EIGRP ไปยัง 10.0.3.0, 10.0.4.0 และ 192.168.2.0 เท่านั้น ไม่ใช่ทางออกของ default route\nB. เราเตอร์ไม่เคย "ส่งแพ็กเก็ตกลับไปหาต้นทาง" — กรณีที่ส่งไม่ได้จริง ๆ มันจะทิ้งแพ็กเก็ตแล้วส่ง ICMP Destination Unreachable กลับไปแทน\nD. จะทิ้งแพ็กเก็ตก็ต่อเมื่อ "ไม่มี" default route แต่ที่นี่มี gateway of last resort ตั้งไว้ชัดเจน ⭐\n\n📗 จำไว้สอบ: เห็น "Gateway of last resort is <IP>" → หาว่า IP นั้นอยู่บนอินเทอร์เฟซไหน แล้วตอบอินเทอร์เฟซนั้น',
  },
  {
    id: 395,
    kind: 'multi',
    prompt: 'Which statements describe the routing protocol OSPF? (Choose three.)',
    options: [
      { key: 'A', text: 'It supports VLSM.' },
      { key: 'B', text: 'It is used to route between autonomous systems.' },
      { key: 'C', text: 'It confines network instability to one area of the network.' },
      { key: 'D', text: 'It increases routing overhead on the network.' },
      { key: 'E', text: 'It allows extensive control of routing updates.' },
      { key: 'F', text: 'It is simpler to configure than RIP v2.' },
    ],
    correct: ['A', 'C', 'E'],
    explanation:
      '📘 แนวคิด — คุณสมบัติหลักของ OSPF\n• เป็น link-state, classless, มาตรฐานเปิด (RFC 2328), AD = 110\n• ส่ง subnet mask ไปพร้อมกับเส้นทาง จึงรองรับ VLSM และ CIDR เต็มรูปแบบ ⭐\n• แบ่ง area ได้ ทำให้ปัญหาในพื้นที่หนึ่งไม่กระทบพื้นที่อื่น ⭐\n• ควบคุมการโฆษณาเส้นทางได้ละเอียด — area range (สรุปเส้นทาง), stub/totally stubby/NSSA (กรอง LSA), passive-interface, route filtering, cost ปรับเองได้ ⭐\n\n✅ ทำไม A, C, E ถูก:\nA. OSPF เป็น classless ส่ง mask มาด้วยเสมอ จึงใช้ซับเน็ตขนาดต่างกันในเครือข่ายเดียวได้ ✔\nC. เมื่อลิงก์ใน area 1 กระพริบ การรัน SPF จะจำกัดอยู่แค่ area 1 เท่านั้น เราเตอร์ใน area อื่นไม่ต้องคำนวณใหม่ ✔\nE. เครื่องมือควบคุมเส้นทางของ OSPF มีให้เลือกมาก ทั้งการสรุป การกรอง LSA ตามประเภท area และการปรับ cost ✔\n\n❌ ทำไมข้ออื่นผิด:\nB. การหาเส้นทางระหว่าง AS เป็นหน้าที่ของ BGP — OSPF เป็น IGP ที่ทำงานภายใน AS เดียว\nD. ตรงกันข้าม OSPF ช่วย "ลด" routing overhead — มันส่งเฉพาะการเปลี่ยนแปลง (triggered update) ไม่ได้ส่งตารางทั้งชุดทุก 30 วินาทีแบบ RIP ⭐\nF. OSPF ซับซ้อนกว่า RIPv2 มาก ต้องเข้าใจเรื่อง area, DR/BDR, ประเภท LSA และ wildcard mask — ส่วน RIPv2 พิมพ์แค่สองสามบรรทัดก็ใช้ได้แล้ว\n\n📗 จำไว้สอบ: OSPF = link-state, classless, VLSM ได้, แบ่ง area, AD 110, multicast 224.0.0.5/224.0.0.6',
  },
  {
    id: 396,
    kind: 'single',
    image: v4q396,
    prompt: 'Refer to the exhibit. After you apply the given configurations to R1 and R2, you notice that OSPFv3 fails to start. What is the reason for the problem?',
    options: [
      { key: 'A', text: 'The area numbers on R1 and R2 are mismatched' },
      { key: 'B', text: 'The IPv6 network addresses on R1 and R2 are mismatched' },
      { key: 'C', text: 'The autonomous system numbers on R1 and R2 are mismatched' },
      { key: 'D', text: 'The router ids on R1 and R2 are mismatched' },
    ],
    correct: ['A'],
    explanation:
      '📘 แนวคิด — OSPFv3 ยังต้องการ area ที่ตรงกันเหมือน OSPFv2\n🔍 อ่าน exhibit เทียบสองฝั่ง\nR1                                    R2\nipv6 unicast-routing                  ipv6 unicast-routing\ninterface FastEthernet0/0             interface FastEthernet0/0\n no ip address                         no ip address\n ipv6 enable                           ipv6 enable\n ipv6 address 3001:DBB:13::1/64        ipv6 address 2001:DBB:12::12/64\n ipv6 ospf 1 area 0  ⚠️                ipv6 ospf 1 area 3  ⚠️ ไม่ตรงกัน\nipv6 router ospf 1                    ipv6 router ospf 1\n router-id 172.16.1.1                  router-id 172.16.3.3\n\n🔗 วิเคราะห์: อินเทอร์เฟซที่ต่อกันโดยตรงถูกใส่ไว้คนละ area (0 กับ 3) ซึ่ง OSPF ทุกเวอร์ชันถือว่า area ID เป็นค่าที่ต้องตรงกันในเฟรม Hello มิฉะนั้น Hello จะถูกทิ้งและไม่เกิด adjacency ⭐\n\n💡 จุดสำคัญของ OSPFv3 ที่ต่างจาก OSPFv2\n• OSPFv3 สร้าง adjacency ผ่าน "link-local address" (FE80::/10) ไม่ได้ใช้ที่อยู่ global\n→ ดังนั้น prefix IPv6 global ที่ต่างกัน "ไม่" ทำให้ neighbor ล้มเหลว (ต่างจาก OSPFv2 ที่ต้องอยู่ซับเน็ตเดียวกัน) ⭐\n• Router ID ยังเป็นเลข 32 บิตรูปแบบ IPv4 และต้องกำหนดเองถ้าไม่มีอินเทอร์เฟซ IPv4\n• เปิดที่อินเทอร์เฟซโดยตรงด้วย ipv6 ospf <process> area <area>\n\n✅ ทำไม A ถูก: area 0 กับ area 3 ไม่ตรงกันคือสาเหตุที่ OSPFv3 ไม่สามารถสร้าง adjacency ได้ — แก้โดยเปลี่ยนฝั่งใดฝั่งหนึ่งให้ตรงกับอีกฝั่ง\n\n❌ ทำไมข้ออื่นผิด:\nB. prefix IPv6 ที่ต่างกันไม่เป็นปัญหาสำหรับ OSPFv3 เพราะมันคุยกันผ่าน link-local address ⭐ นี่คือความรู้เฉพาะของ OSPFv3 ที่ข้อสอบต้องการวัด\nC. OSPF ไม่มีแนวคิดเรื่อง autonomous system number (นั่นเป็นของ EIGRP และ BGP)\nD. Router ID ต้อง "ไม่ซ้ำกัน" ต่างหาก การที่ 172.16.1.1 กับ 172.16.3.3 ต่างกันจึงถูกต้องแล้ว\n\n📗 จำไว้สอบ: OSPFv3 ใช้ link-local สร้าง adjacency • area ยังต้องตรงกัน • router-id ยังเป็นรูปแบบ IPv4 32 บิต',
  },
  {
    id: 397,
    kind: 'single',
    prompt: 'Which command is used to display the collection of OSPF link states?',
    options: [
      { key: 'A', text: 'show ip ospf link-state' },
      { key: 'B', text: 'show ip ospf lsa database' },
      { key: 'C', text: 'show ip ospf neighbors' },
      { key: 'D', text: 'show ip ospf database' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — สามตารางของ OSPF และคำสั่งที่ใช้ดู\n1️⃣ Neighbor table → show ip ospf neighbor\n   ใครเป็นเพื่อนบ้าน สถานะอะไร (Init, 2-WAY, EXSTART, EXCHANGE, LOADING, FULL) ใครเป็น DR/BDR\n2️⃣ Link-State Database (LSDB) → show ip ospf database ⭐\n   คลังเก็บ LSA ทั้งหมดที่เราเตอร์รู้จัก = "แผนที่" ของทั้ง area ซึ่งเราเตอร์ทุกตัวใน area เดียวกันต้องมีเหมือนกันเป๊ะ\n3️⃣ Routing table → show ip route ospf\n   ผลลัพธ์หลังรันอัลกอริทึม SPF (Dijkstra) บน LSDB แล้ว\n\n📖 ประเภท LSA ที่ควรรู้\nType 1 Router LSA        — ภายใน area\nType 2 Network LSA       — สร้างโดย DR บนเครือข่าย broadcast\nType 3 Summary LSA       — สร้างโดย ABR เพื่อบอกเส้นทางข้าม area\nType 4 ASBR Summary LSA  — ตำแหน่งของ ASBR\nType 5 External LSA      — เส้นทางที่ redistribute เข้ามาจากภายนอก\nType 7 NSSA External LSA — external ภายใน NSSA\n\n✅ ทำไม D ถูก: show ip ospf database คือคำสั่งมาตรฐานที่แสดงเนื้อหาทั้งหมดของ LSDB ซึ่งเป็น "การรวบรวม link state" ตามที่โจทย์ถามถึง\n\n❌ ทำไมข้ออื่นผิด:\nA. ไม่มีคำสั่ง show ip ospf link-state ใน IOS แม้ชื่อจะฟังดูสมเหตุสมผลที่สุด ⭐\nB. ไม่มีคำสั่ง show ip ospf lsa database — คำว่า lsa เกินมาและทำให้ไวยากรณ์ผิด\nC. show ip ospf neighbors แสดงเพื่อนบ้านและสถานะ ไม่ได้แสดงเนื้อหาของ LSA\n\n📗 จำไว้สอบ: neighbor = ใครอยู่ข้าง ๆ • database = แผนที่ทั้ง area • route = ผลลัพธ์หลังคำนวณ SPF',
  },
  {
    id: 398,
    kind: 'multi',
    image: v4q398,
    prompt:
      'Refer to the exhibit. A network associate has configured OSPF with the command:\nCity(config-router)# network 192.168.12.64 0.0.0.63 area 0\n\nAfter completing the configuration, the associate discovers that not all the interfaces are participating in OSPF. Which three of the interfaces shown in the exhibit will participate in OSPF according to this configuration statement? (Choose three.)',
    options: [
      { key: 'A', text: 'FastEthernet0/0' },
      { key: 'B', text: 'FastEthernet0/1' },
      { key: 'C', text: 'Serial0/0' },
      { key: 'D', text: 'Serial0/1.102' },
      { key: 'E', text: 'Serial0/1.103' },
      { key: 'F', text: 'Serial0/1.104' },
    ],
    correct: ['B', 'C', 'D'],
    explanation:
      '📘 แนวคิด — แปลง wildcard mask เป็นช่วงที่อยู่ แล้วตรวจทีละอินเทอร์เฟซ\nwildcard 0.0.0.63 → บิตที่เป็น 0 คือส่วนที่ต้องตรงกัน\n63 = 00111111 ในเลขฐานสอง → 6 บิตท้ายเป็น "อิสระ" → เทียบเท่า subnet mask /26\n→ ช่วงที่ครอบคลุมคือ 192.168.12.64 ถึง 192.168.12.127 ⭐\n\n🔍 ตรวจทีละอินเทอร์เฟซจาก exhibit\nFastEthernet0/0  192.168.12.48   → อยู่ในช่วง .0-.63 ของซับเน็ตก่อนหน้า ✘\nFastEthernet0/1  192.168.12.65   → อยู่ในช่วง .64-.127 ✔ ⭐\nSerial0/0        192.168.12.121  → อยู่ในช่วง .64-.127 ✔ ⭐\nSerial0/1        unassigned      → ไม่มี IP จึงเข้าร่วมไม่ได้ ✘\nSerial0/1.102    192.168.12.125  → อยู่ในช่วง .64-.127 ✔ ⭐\nSerial0/1.103    192.168.12.129  → เกิน .127 ไปอยู่ซับเน็ต .128-.191 ✘\nSerial0/1.104    192.168.12.133  → เกิน .127 เช่นกัน ✘\n\n✅ ทำไม B + C + D ถูก: ทั้งสามอินเทอร์เฟซมี IP อยู่ในช่วง 192.168.12.64-127 พอดี จึงถูกคำสั่ง network ครอบคลุมและเข้าร่วมกระบวนการ OSPF ใน area 0\n\n❌ ทำไมข้ออื่นผิด:\nA. .48 ต่ำกว่าขอบล่าง .64 (อยู่ในซับเน็ต 192.168.12.0/26)\nE. .129 สูงกว่าขอบบน .127 เพียงสองหน่วย แต่ก็เพียงพอที่จะตกไปอยู่ซับเน็ตถัดไป ⭐\nF. .133 สูงกว่าขอบบน .127 เช่นกัน\n\n💡 เทคนิคแปลง wildcard เป็น subnet mask: เอา 255.255.255.255 ลบด้วย wildcard\n255.255.255.255 − 0.0.0.63 = 255.255.255.192 = /26 → block 64 → ขอบซับเน็ตที่ 0, 64, 128, 192\n\n📗 จำไว้สอบ: network statement ของ OSPF ใช้ wildcard mask • อินเทอร์เฟซที่ไม่มี IP หรือ shutdown จะไม่เข้าร่วมไม่ว่าคำสั่งจะครอบคลุมหรือไม่',
  },
  {
    id: 399,
    kind: 'single',
    image: v4q399,
    prompt:
      'Refer to the exhibit. C-router is to be used as a "router-on-a-stick" to route between the VLANs. All the interfaces have been properly configured and IP routing is operational. The hosts in the VLANs have been configured with the appropriate default gateway. What is true about this configuration?',
    options: [
      {
        key: 'A',
        text: 'These commands need to be added to the configuration: C-router(config)# router eigrp 123 / C-router(config-router)# network 172.19.0.0',
      },
      {
        key: 'B',
        text: 'These commands need to be added to the configuration: C-router(config)# router ospf 1 / C-router(config-router)# network 172.19.0.0 0.0.3.255 area 0',
      },
      {
        key: 'C',
        text: 'These commands need to be added to the configuration: C-router(config)# router rip / C-router(config-router)# network 172.19.0.0',
      },
      { key: 'D', text: 'No further routing configuration is required.' },
    ],
    correct: ['D'],
    explanation:
      '📘 แนวคิด — เครือข่ายที่ "ต่อตรง" ไม่ต้องใช้โปรโตคอลหาเส้นทาง\nเราเตอร์รู้จักเครือข่ายที่ต่อตรงกับอินเทอร์เฟซของตัวเองโดยอัตโนมัติ (รหัส C ในตารางเส้นทาง AD = 0) และสามารถ routing ระหว่างเครือข่ายเหล่านั้นได้ทันทีที่ ip routing เปิดอยู่\n\n🔍 อ่าน exhibit\nD-Switch ── C-router (สายเส้นเดียว trunk)\nFa0/0.1 - 172.19.1.254/24 VLAN 1\nFa0/0.2 - 172.19.2.254/24 VLAN 2\nFa0/0.3 - 172.19.3.254/24 VLAN 3\nโจทย์ยืนยันว่า "All the interfaces have been properly configured and IP routing is operational" และโฮสต์ตั้ง default gateway ถูกต้องแล้ว\n\n🔗 ตารางเส้นทางที่ได้โดยอัตโนมัติ\nC  172.19.1.0/24 is directly connected, FastEthernet0/0.1\nC  172.19.2.0/24 is directly connected, FastEthernet0/0.2\nC  172.19.3.0/24 is directly connected, FastEthernet0/0.3\nเมื่อโฮสต์ใน VLAN 1 ส่งข้อมูลไปหาโฮสต์ใน VLAN 2 มันจะส่งไปที่ gateway 172.19.1.254 เราเตอร์ค้นตารางเจอ 172.19.2.0/24 ที่ต่อตรง แล้วส่งออก subinterface .2 ทันที\n\n✅ ทำไม D ถูก: โปรโตคอลหาเส้นทาง (RIP, OSPF, EIGRP) จำเป็นก็ต่อเมื่อต้องเรียนรู้เส้นทางไปยังเครือข่ายที่ "ไม่ได้ต่อตรง" ในกรณี router-on-a-stick นี้ ทุก VLAN ต่ออยู่กับเราเตอร์ตัวเดียวกันหมด จึงไม่ต้องคอนฟิกอะไรเพิ่มเลย\n\n❌ ทำไมข้ออื่นผิด:\nA, B, C. การเพิ่ม EIGRP, OSPF หรือ RIP เข้าไปไม่ได้ทำให้อะไรดีขึ้น เพราะเส้นทางทั้งหมดอยู่ในตารางแล้วด้วย AD 0 ซึ่งไม่มีโปรโตคอลใดชนะได้ — เป็นการเพิ่มภาระ CPU และแบนด์วิดท์โดยเปล่าประโยชน์ ⭐\n\n💡 เมื่อไรจึงต้องใช้โปรโตคอลหาเส้นทาง: เมื่อมีเราเตอร์ตั้งแต่สองตัวขึ้นไปที่ต้องบอกเส้นทางให้กันและกัน หรือเมื่อมีเครือข่ายปลายทางที่อยู่ห่างออกไปหลายฮอป\n\n📗 จำไว้สอบ: เครือข่ายต่อตรง AD = 0 อยู่ในตารางอัตโนมัติ • router-on-a-stick VLAN เดียวกันหมด = ไม่ต้องมี routing protocol',
  },
  {
    id: 400,
    kind: 'single',
    image: v4q400,
    prompt: 'Refer to the exhibit. Which address and mask combination represents a summary of the routes learned by EIGRP?',
    options: [
      { key: 'A', text: '192.168.25.0 255.255.255.240' },
      { key: 'B', text: '192.168.25.0 255.255.255.252' },
      { key: 'C', text: '192.168.25.16 255.255.255.240' },
      { key: 'D', text: '192.168.25.16 255.255.255.252' },
      { key: 'E', text: '192.168.25.28 255.255.255.240' },
      { key: 'F', text: '192.168.25.28 255.255.255.252' },
    ],
    correct: ['C'],
    explanation:
      '📘 แนวคิด — สรุปเส้นทาง (route summarization) คือหาบล็อกที่เล็กที่สุดที่ครอบคลุมทุกเส้นทาง\n\n🔍 อ่าน exhibit — เส้นทางที่เรียนผ่าน EIGRP (รหัส D) มีสี่รายการ\nD  192.168.25.16  [90/1823638] via 192.168.15.5, Serial0/1\nD  192.168.25.20  [90/2681856] via 192.168.15.5, Serial0/1\nD  192.168.25.24  [90/3837233] via 192.168.15.5, Serial0/1\nD  192.168.25.28  [90/8127323] via 192.168.15.5, Serial0/1\nหัวข้อบอกว่า "192.168.25.0/30 is subnetted, 4 subnets" → ทุกเส้นเป็น /30 (block 4)\n\n🔢 หาช่วงที่ต้องครอบคลุม\nเริ่มต่ำสุดที่ 192.168.25.16\nสิ้นสุดสูงสุดที่ 192.168.25.28 + 3 = 192.168.25.31\n→ ต้องครอบคลุม .16 ถึง .31 รวม 16 ที่อยู่\n\n🔢 แปลงเป็น mask\n16 ที่อยู่ = 2^4 → ต้องใช้ 4 บิตโฮสต์ → prefix = 32 − 4 = /28\n/28 = 255.255.255.240 → block 16 → ขอบซับเน็ตที่ .0, .16, .32, .48\n→ ซับเน็ตที่ครอบคลุม .16-.31 พอดีคือ 192.168.25.16/28 ⭐\n\n✅ ทำไม C ถูก: 192.168.25.16 255.255.255.240 ครอบคลุมทั้งสี่ซับเน็ต /30 พอดีเป๊ะโดยไม่กินพื้นที่เกินและไม่ขาด\n\n❌ ทำไมข้ออื่นผิด:\nA. 192.168.25.0/28 ครอบคลุมช่วง .0-.15 ซึ่งไม่มีเส้นทางใดอยู่ในนั้นเลย\nB. 192.168.25.0/30 ครอบคลุมแค่ .0-.3\nD. 192.168.25.16/30 ครอบคลุมแค่ .16-.19 ได้เพียงเส้นทางเดียวจากสี่เส้น\nE. 192.168.25.28 ไม่ใช่ขอบซับเน็ตที่ถูกต้องสำหรับ /28 (block 16 ขอบต้องเป็น .0, .16, .32) IOS จะไม่ยอมรับ\nF. 192.168.25.28/30 ครอบคลุมแค่ .28-.31 ได้เพียงเส้นทางสุดท้าย\n\n📗 จำไว้สอบ: สรุปเส้นทาง = หาบิตที่เหมือนกันทุกเส้นทางจากซ้ายมาขวา • นับจำนวนที่อยู่ที่ต้องครอบคลุมแล้วแปลงเป็นจำนวนบิตโฮสต์',
  },
]
