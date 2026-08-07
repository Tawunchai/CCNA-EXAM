# CCNA 200-301 — ผลตรวจสอบรอบสุดท้าย V1 + V2 + V3 : เฉลยที่ยังผิดอยู่

> ## ✅ สถานะ: แก้ไขครบทุกรายการแล้ว (8 ส.ค. 2026)
>
> | รายการ | จำนวน | สถานะ |
> |:---|---:|:---|
> | เฉลยผิด (ส่วนที่ 1) | 14 | ✅ แก้แล้ว |
> | เฉลยขัดกันเอง — AD 115/100 (ส่วนที่ 2) | 1 โจทย์ | ✅ รวมเป็น 115 ทั้งหมด |
> | ข้อความตัวเลือกผิด (ส่วนที่ 3) | 6 | ✅ แก้แล้ว |
> | drag ขาดหมวดตัวลวง (ส่วนที่ 4.1) | 12 | ✅ เติมแล้ว |
> | คำอธิบายไม่มีบรรทัด ✅ (ส่วนที่ 4.2) | 7 | ✅ เติมแล้ว |
> | **เจอเพิ่มระหว่างแก้ — AAA reverse Telnet วางผิดกลุ่ม** | **3** | ✅ แก้แล้ว (V1#769, V1#802, V2#732) |
>
> **ผลตรวจซ้ำหลังแก้ทั้งหมด:** ข้อขัดแย้งข้ามชุด **12 → 0** · ปัญหาโครงสร้าง **22 → 2** (เหลือเฉพาะ false positive) · override note 238/238 ตรง · IPv6 41/41 ถูก · สคริปต์ยืนยันรายข้อ **36/36 PASS** · `tsc -b` + `vite build` ✅ ผ่าน
>
> เอกสารนี้เก็บไว้เป็นบันทึกว่า "เคยผิดตรงไหน เพราะอะไร" — ใช้ทบทวนก่อนสอบได้

---

## 🆕 รายการที่พบเพิ่มระหว่างการแก้ไข — AAA: reverse Telnet วางผิดกลุ่ม (3 ข้อ)

ตอนเติมหมวดตัวลวงให้ drag ต้องเปิดภาพ exhibit ทุกใบ จึงพบว่าโจทย์ตระกูล AAA ในแอป **จัดกลุ่มไม่ตรงกันเอง**:

| ข้อ | ประโยค "leverages a RADIUS server … reverse Telnet session" เดิมอยู่ที่ | แก้เป็น |
|:---|:---|:---|
| **V1#769** | Authorization | **ตัวลวง (Authentication)** |
| **V1#802** | Authorization | **Authentication** |
| **V2#732** | Authorization | **ตัวลวง (Authentication)** |
| V1#1239 · V3#222 · V3#316 | Authentication อยู่แล้ว ✔ | ไม่ต้องแก้ |

**เหตุผล:** ข้อสอบชุดนี้วางประโยคไว้ 6 ประโยคพอดี = Authentication 2 + Authorization 2 + Accounting 2 ⭐ ถ้าให้ reverse Telnet เป็น Authorization จะเหลือ Authorization ถึง 3 ประโยคแต่มีช่องแค่ 2 และ **ข้อ V1#802 จะไม่มีคำตอบที่ลงตัวเลย** การจัดให้เป็นคู่ของ Authentication ทำให้ทั้ง 6 ข้อในตระกูลนี้ลงตัวและสอดคล้องกันหมด

> 💡 เกร็ดที่ใส่ไว้ในคำอธิบายแล้ว: บน IOS จริงมีคำสั่ง `aaa authorization reverse-access` อยู่ด้วย ประโยคนี้จึงตีความเป็น authorization ก็ได้ในโลกจริง — แต่ในชุดข้อสอบนี้ถูกออกแบบให้เป็นคู่ของ Authentication

---

> ตรวจ **2,367 ข้อ** — V1 (1,242) + V2 (808) + V3 (317)
> วิธีตรวจ: สคริปต์อัตโนมัติ 8 ชุด + เทียบข้อซ้ำข้ามชุด 556 กลุ่ม + ไล่คำนวณเองทีละข้อในหมวดที่คำนวณได้ + ค้นเว็บยืนยันข้อที่เถียงได้
> เกณฑ์ = หลัก CCNA 200-301 ที่ถูกต้องจริง ไม่ยึดเฉลยใน dump

---

## สรุปผล

| รายการ | จำนวน |
|:---|---:|
| ข้อที่ตรวจทั้งหมด | 2,367 |
| 🔴 **เฉลยผิด — แก้แล้ว ✅** | **14** |
| 🆕 AAA reverse Telnet วางผิดกลุ่ม (พบเพิ่มตอนแก้) — แก้แล้ว ✅ | 3 |
| 🟠 เฉลยขัดกันเองระหว่างชุด — รวมเป็นค่าเดียวแล้ว ✅ | 1 โจทย์ (4 ข้อ) |
| 🟡 เฉลยถูก แต่ "ข้อความตัวเลือก" ผิด — แก้แล้ว ✅ | 6 |
| 🔵 ปัญหาเชิงโครงสร้าง — แก้แล้ว ✅ | 19 |
| ✅ ผ่านการตรวจ ไม่ต้องแก้ | 2,325 |

**กระจายตามชุด (เฉพาะเฉลยผิด):** V1 = 4 ข้อ · V2 = 2 ข้อ · V3 = 11 ข้อ

> 💡 ข่าวดีสำหรับการเตรียมสอบ: **V1 และ V2 แทบสะอาดแล้ว** (ผิดรวมกัน 3 ข้อจาก 2,050 ข้อ = 0.15%) ความผิดพลาดเกือบทั้งหมดกระจุกอยู่ใน **V3** ซึ่งเป็นชุดที่เพิ่งทำเสร็จล่าสุดและยังไม่เคยผ่านการไล่ตรวจข้ามชุด

---

# 🔴 ส่วนที่ 1 — เฉลยผิด ต้องแก้ (14 ข้อ)

## 1.1 Version 1 — 2 ข้อ

### ❌ V1 ข้อ 624 — เฉลย `D` → ต้องเป็น **`A`**

> **What is a reason to implement IPv4 private addressing?**
> A. Reduce the risk of a network security breach
> B. Comply with PCI regulations
> C. Comply with local law
> D. Reduce the size of the forwarding table on network routers ← เฉลยปัจจุบัน

**ทำไมผิด:** private address ไม่ได้ทำให้ตาราง forwarding ของเราเตอร์ "ในเครือข่ายเรา" เล็กลงเลย — เราเตอร์ภายในยังต้องรู้จักทุกซับเน็ตเหมือนเดิม ส่วนตารางเราต์ของอินเทอร์เน็ตนั้นไม่เคยมี RFC1918 อยู่แล้วตั้งแต่แรก จึงไม่ใช่ "ผลจากการเลือกใช้ private addressing"

**คำตอบที่ถูก = A** เพราะเราเตอร์บนอินเทอร์เน็ตทิ้งแพ็กเก็ตที่ปลายทางเป็น 10/8, 172.16/12, 192.168/16 เสมอ → เครื่องภายในถูกติดต่อจากภายนอกโดยตรงไม่ได้ → ลด attack surface

**หลักฐานยืนยัน 2 ทาง:**
1. ข้อเดียวกันเป๊ะ ตัวเลือกชุดเดียวกันเป๊ะ อยู่ใน **V3 ข้อ 134 ซึ่งเฉลย A** → ในแอปนี้เองมี 2 ข้อที่ขัดกัน
2. โจทย์พี่น้องกัน *"Which goal is achieved by the implementation of private IPv4 addressing on a network?"* เฉลยคือ **"Provides an added level of protection against Internet exposure"** และวาง *"Provides a reduction in size of the forwarding table on network routers"* ไว้เป็น **ตัวลวงโดยเฉพาะ**

> ⚠️ ระวังอย่าสับสนกับข้อ "เลือก 2 ข้อ" (V2#169 / V3#86) — ชุดตัวเลือกคนละชุด คำตอบคนละแบบ ดูหัวข้อ 1.2

---

### ❌ V1 ข้อ 643 — เฉลย `C` → ต้องเป็น **`A`**

> **Refer to the exhibit.** Wireless LAN access must be set up to force all clients from the NA WLAN to authenticate against the local database. The WLAN is configured for local EAP authentication. **The time that users access the network must not be limited.**
> A. Uncheck the Guest User check box
> B. Check the Guest User Role check box
> C. Set the Lifetime (seconds) value to 0 ← เฉลยปัจจุบัน
> D. Clear the Lifetime (seconds) value

**อ่าน exhibit:** หน้า `Security > Local Net Users > New` — ช่อง **Guest User ถูกติ๊กไว้** และ **Lifetime (seconds) = 86400**

**ทำไม A ถูก:** ช่อง Lifetime จะโผล่ขึ้นมา **ก็ต่อเมื่อติ๊ก Guest User เท่านั้น** — พอเอาติ๊กออก ช่อง Lifetime หายไปทั้งช่อง บัญชีกลายเป็น local net user ถาวรที่ไม่มีวันหมดอายุ ตรงกับ "must not be limited" พอดี
เหตุผลเสริมที่แรงกว่านั้น: **บัญชี Guest User ใช้ได้กับ web authentication (Layer 3) เท่านั้น ไม่รองรับ local EAP (802.1X)** ในเมื่อโจทย์บอกชัดว่า WLAN นี้ตั้งเป็น local EAP บัญชีนี้จึง **ต้องไม่เป็น guest** ตั้งแต่แรก → ติ๊กออกตอบได้ทั้งสองเงื่อนไขในคำสั่งเดียว

**ทำไม C ผิด:** ช่วงค่าที่ WLC ยอมรับคือ 60–2,592,000 วินาที การใส่ 0 เป็นทางลัดที่ไม่ตรงกับสิ่งที่โจทย์ต้องการ และไม่ได้แก้ปัญหาว่าบัญชี guest ใช้กับ local EAP ไม่ได้

**หลักฐาน:** V3 ข้อ 57 คือข้อเดียวกัน ชุดตัวเลือกเดียวกัน **เฉลย "Uncheck the Guest User check box"** ✔ และตรงกับคำเฉลยที่ใช้กันทั่วไป

---

## 1.2 Version 2 — 1 ข้อ

### ❌ V2 ข้อ 169 — เฉลย `D,E` → ต้องเป็น **`A,E`**

> **What are two reasons to implement IPv4 private addressing on a network? (Choose two.)**
> A. To enable internal applications to treat the private IPv4 addresses as unique
> B. To facilitate renumbering when merging networks
> C. To expand the routing table on the router
> D. To provide protection from external denial-of-service attacks ← เฉลยปัจจุบัน (ผิด)
> E. To conserve global unique IPv4 addresses ← ถูกอยู่แล้ว

**ทำไม D ผิด:** private addressing **ไม่ได้ป้องกัน DoS จากภายนอก** — ผู้โจมตียิงใส่ IP สาธารณะที่หน้า NAT/firewall ได้ตามปกติ แล้วลิงก์ขาเข้าก็ตันอยู่ดี การซ่อนเครื่องภายในช่วยเรื่อง "การเข้าถึงโดยตรง" ไม่ใช่ "การถล่มแบนด์วิดท์"

**ทำไม A ถูก:** มาจาก RFC 1918 §4 โดยตรง — ที่อยู่ส่วนตัว "unique ภายในขอบเขตองค์กร" ทำให้แอปพลิเคชันภายในอ้างอิงแต่ละเครื่องได้อย่างไม่ซ้ำกัน โดยไม่ต้องขอที่อยู่ระดับโลกให้ทุกเครื่อง

**หลักฐาน:** V3 ข้อ 86 คือข้อเดียวกัน ชุดตัวเลือกเดียวกัน **เฉลย "treat as unique" + "conserve"** ✔

---

## 1.3 Version 3 — 11 ข้อ

| ข้อ | เดิม | **แก้เป็น** | หัวข้อ | เหตุผลย่อ |
|----:|:---:|:---:|:---|:---|
| 9 | (drag) | **(drag)** | Wi-Fi terms | `infrastructure mode` ↔ `distribution system` สลับกัน |
| 25 | B (SAE) | **D (AES)** | WPA3 | SAE = การยืนยันตัวตน ไม่ใช่การเข้ารหัส |
| 42 | B,E | **C,E** | port security | ต้องใช้ `sticky` ไม่ใช่ `maximum 2` |
| 104 | A | **D** | ระดับ syslog | level ไม่ใช่กลไก rate-limit |
| 136 | C,E | **D,E** | โปรโตคอลจัดการ AP | 802.1x ใช้กับไคลเอนต์ ไม่ใช่แอดมิน |
| 172 | A | **B** | longest prefix match | /23 ครอบปลายทาง ไม่ตกไป default |
| 192 | A,E | **A,D** | SSH remote config | ขาด `enable secret` ไม่ใช่ขาด username |
| 196 | A | **B** | หัวต่อไฟเบอร์ | GBIC = SC, SFP = LC → LC to SC |
| 225 | C | **A** | trunk ข้ามยี่ห้อ | DTP เป็นของ Cisco ใช้กับ third-party ไม่ได้ |
| 260 | C | **A** | อ่าน show interface | exhibit เขียน "0 collisions" ชัด ๆ |
| 283 | (drag) | **(drag)** | AP modes | Monitor ↔ Sensor สลับ 2 ชิ้น |

### รายละเอียดข้อสำคัญของ V3

**ข้อ 9 — Wi-Fi terms (drag)**
ปัจจุบันวาง `distribution system` ไว้ที่ "based around one or more access points" และ `infrastructure mode` ไว้ที่ "entire wireless cell … and the linkage to the wired network" — **สลับกัน**
ที่ถูก: **infrastructure mode** = โหมดที่มี AP เป็นศูนย์กลาง | **distribution system** = ตัวเชื่อมเซลล์ไร้สายเข้ากับเครือข่ายมีสาย
ยืนยัน: V1#609 และ V2#176 (ผ่านการแก้มาแล้วรอบก่อน) วางตรงข้ามกับ V3#9

**ข้อ 25 — WPA3**
WPA3-Personal บังคับ **CCMP-128 (AES)**, WPA3-Enterprise 192-bit ใช้ **GCMP-256 (AES)**
**SAE (Dragonfly handshake)** มาแทน 4-way handshake ของ WPA2 = *authentication / key exchange* ไม่ใช่ *encryption*
โจทย์ถามคำว่า **encryption** → ตอบ **AES**
ยืนยัน: V1#605 และ V2#735 (ข้อเดียวกัน) ตอบ AES ทั้งคู่

**ข้อ 42 — port security** (exhibit เดียวกับ V1#654 เป๊ะ)
exhibit มีอยู่แล้ว: `switchport mode access` + `switchport port-security`
เงื่อนไข ① MAC ต้องเรียนรู้แบบ dynamic → `switchport port-security mac-address sticky`
เงื่อนไข ② log ได้โดยพอร์ตไม่ดับ → `switchport port-security violation restrict`
`maximum 2` ไม่ตอบเงื่อนไขข้อไหนเลย → **C,E**

**ข้อ 104 — ระดับ syslog**
`logging trap <n>` / `logging buffered <n>` คือการ **กรองตามระดับ** ไม่ใช่การ **จำกัดอัตรา** (rate-limit เป็นคำสั่ง `logging rate-limit` คนละตัว)
การตั้งคนละระดับในแต่ละอุปกรณ์ = คุมปริมาณข้อความที่เก็บ/ส่ง → **D**
ยืนยัน: V1#626 (ข้อเดียวกัน ตัวเลือกเดียวกัน) ตอบ D

**ข้อ 136 — Which two protocols … authentication and configuration on access points**
คำสำคัญคือ **"by an administrator"** = แอดมินล็อกอินเข้าไปจัดการตัว AP → **TACACS+ (D)** และ **RADIUS (E)**
**802.1x** เป็นการยืนยันตัวตนของ *ไคลเอนต์* ที่พอร์ต ไม่ใช่ของแอดมิน
ยืนยัน: V1#657 และ V2#335 ตอบ TACACS+ + RADIUS ทั้งคู่

**ข้อ 172 — subnet mask ของเส้นทางปลายทาง** (exhibit เดียวกับ V1#1112 เป๊ะ)
```
S    172.16.1.33/32   is directly connected, Gi0/0/1
C    172.16.2.0/23    is directly connected, Gi0/0/1
L    172.16.2.1/32    is directly connected, Gi0/0/1
S*   0.0.0.0/0 [1/0] via 172.16.2.2
```
ปลายทาง **172.16.3.254** → `/23` block size ที่อ็อกเท็ต 3 = 2 → **172.16.2.0/23 ครอบ 172.16.2.0 – 172.16.3.255** → ครอบปลายทาง ✔
longest prefix match: `/23` ยาวกว่า `/0` → **ชนะ default route** → mask = **255.255.254.0** = **B**

> คำอธิบายในแอปตอนนี้คำนวณถูกทุกบรรทัด แล้วสรุปกลับข้างว่า "ให้มองว่าปลายทางอยู่นอกเครือข่าย" ซึ่งขัดกับ longest prefix match — ต้องเขียนใหม่ทั้งย่อหน้า

**ข้อ 192 — SSH remote config** (exhibit เดียวกับ V2#751)
config เดิมมีครบแล้ว: hostname ✔ · ip domain-name ✔ · `username CCNA privilege 1 password cisco123` ✔ · RSA key generated ✔
ที่ขาด: ① vty ยังเป็น `transport input telnet` → ต้องเป็น `ssh` ② **ไม่มี `enable secret` เลย** — user เป็น privilege 1 ล็อกอินเข้าไปได้แค่ user EXEC จึง **แก้ config ไม่ได้**
การเพิ่ม username ใหม่ไม่ช่วยอะไร เพราะมี username อยู่แล้ว → **A,D**

**ข้อ 196 — GBIC vs SFP**
**GBIC** (เช่น Cisco WS-G5484 1000BASE-SX) ใช้ **duplex SC**
**SFP / mini-GBIC** (เช่น GLC-SX-MM) ใช้ **duplex LC**
ต่อสองฝั่งนี้เข้าด้วยกัน → สาย **LC to SC** = **B**
คำอธิบายในแอปที่บอกว่า "เอกสาร Cisco ระบุว่าทั้งคู่ใช้ Dual LC" ผิด — เป็นจริงเฉพาะฝั่ง SFP
ยืนยัน: V1#742 ตอบ "LC to SC"

**ข้อ 225 — บริษัทควบรวม ต่าง vendor** (exhibit เดียวกับ V1#819)
exhibit `show interface Et0/0 switchport` ระบุ **`Administrative Trunking Encapsulation: isl`**
- ISL เป็นของ Cisco → คุยกับสวิตช์ยี่ห้ออื่นไม่ได้ ต้องเปลี่ยนเป็น **dot1q**
- `dynamic desirable` = **DTP ซึ่งเป็นของ Cisco เช่นกัน** → เจรจากับ third-party ไม่สำเร็จ และไม่ได้แก้ปัญหา encapsulation
→ ต้อง static trunk + dot1q = **A**

**ข้อ 260 — Which interface condition is occurring**
exhibit: `Full-duplex, 100 Mb/s` · `1876 runts` · `0 input errors, 0 CRC` · **`0 collisions`** · `0 late collision` · `30 second input rate 0 bits/sec`
- **C (collisions) เป็นไปไม่ได้ 2 ชั้น** — ตัวนับเขียน 0 ตรง ๆ และลิงก์เป็น full-duplex ซึ่งไม่มี collision ตามนิยาม
- duplex mismatch ต้องเห็น late collision + CRC → 0 ทั้งคู่
- high throughput ขัดกับ rate 0 bits/sec
- เหลือ **A (bad NIC)** — runts จำนวนมากโดยไม่มี collision/CRC = การ์ดฝั่งตรงข้ามยิงเฟรมสั้นผิดปกติ
> เทียบกับ V3#261 ที่ exhibit เหมือนกันแต่ rate = 225 Mbps บนลิงก์ 100 Mbps และ txload/rxload = 255/255 → **high throughput** ✔ ข้อนั้นถูกแล้ว

**ข้อ 283 — AP modes (drag)**
ปัจจุบัน: Monitor ได้ "analytics for wireless performance testing" และ Sensor ได้ "air-quality data and interference detection" → **สลับกัน**
ที่ถูก:
- **Monitor** = ไม่ส่งข้อมูลลูกค้า สแกนทุกช่อง → RFID-tag location tracking + **air-quality/interference detection across all enabled channels** (CleanAir)
- **Sensor** = ทำตัวเป็นเซนเซอร์ให้ DNA Center Assurance → **analytics for wireless performance testing** + real-time client troubleshooting เมื่ออยู่นอกสถานที่
- **Sniffer** = จับแพ็กเก็ตช่องที่กำหนดแล้วส่งต่อให้ซอฟต์แวร์วิเคราะห์ระยะไกล (ถูกอยู่แล้ว)
ยืนยัน: V1#717 และ V2#336 วางเหมือนกันทั้งคู่ ต่างจาก V3#283

---

# 🟠 ส่วนที่ 2 — เฉลยขัดกันเองในแอป ต้องเลือกให้ตรงกัน (1 โจทย์ / 4 ข้อ)

### V1#655 · V1#1026 · V2#602 ตอบ **AD 115** — แต่ V3#109 ตอบ **AD 100**

> Traffic from R1 to the 10.10.2.0/24 subnet uses 192.168.1.2 as its next hop. … traffic with destination **10.10.2.1** passes through **R3**, and all other traffic to 10.10.2.0/24 passes through R2.
> `ip route 10.10.2.1 255.255.255.255 192.168.1.4 **115**` ← V1#655, V1#1026, V2#602
> `ip route 10.10.2.1 255.255.255.255 192.168.1.4 **100**` ← V3#109

**exhibit ทั้ง 4 ข้อเหมือนกันหมด:** `Known via "ospf 1", distance 110, metric 2`

**วิเคราะห์:** ทั้งสองตัวเลือกใช้ mask **/32** เหมือนกัน และ **longest prefix match ตัดสินก่อน AD เสมอ** → เส้นทาง /32 ชนะ /24 ของ OSPF ไม่ว่าจะตั้ง AD เป็น 115 หรือ 100 ก็ตาม **ทั้งสองข้อทำงานได้จริงทั้งคู่** — เป็นข้อสอบที่ dump ออกแบบมาไม่รัดกุม (ตัวลวงจริง ๆ คือสองข้อที่ใช้ /24 ต่างหาก: AD 115 จะไม่ถูกติดตั้งเลย ส่วน AD 100 จะดึงทราฟฟิกทั้ง /24 ไปทาง R3)

**สิ่งที่ทำไปแล้ว ✅:** ปรับ **V3#109 เป็น AD 115** ให้ตรงกับอีก 3 ข้อ (เสียงข้างมาก 3 ต่อ 1) และเขียนคำอธิบายใหม่ให้ชี้ชัดว่าตัวตัดสินคือ mask /32 ไม่ใช่ค่า AD พร้อมเตือนว่าข้อนี้ต้นฉบับกำกวม — เพราะถ้าปล่อยไว้ จะเจอข้อเดียวกันสองรอบแล้วได้ถูกครั้งหนึ่งผิดครั้งหนึ่ง สับสนตอนทบทวน

คำเตือนที่ใส่ไว้ในคำอธิบายทั้ง 4 ข้อ:

> ⚠️ ข้อนี้ต้นฉบับกำกวม — ตัวชี้ขาดคือ **mask /32** ไม่ใช่ค่า AD ถ้าในห้องสอบเจอตัวเลือก /32 เพียงตัวเดียว ให้ตอบตัวนั้นทันทีโดยไม่ต้องสนใจ AD

---

# 🟡 ส่วนที่ 3 — เฉลยถูก แต่ข้อความตัวเลือกผิด (6 ข้อ) — ✅ แก้แล้วทั้งหมด

ตัวอักษรที่เฉลยไว้ถูกแล้ว แต่ **ข้อความที่แสดง** ผิด ถ้าท่องตามจะจำผิดไปสอบ

| ข้อ | ปัญหา | แก้เป็น |
|:---|:---|:---|
| **V2#29** | ตัวเลือก D เขียน `FF00::/12` | **`FF00::/8`** — บล็อก multicast ของ IPv6 คือ /8 (เทียบ V1#293 ที่เขียนถูก) |
| **V3#230** | mask ในทุกตัวเลือกถูกสลับมั่ว — ตัวเลือก B ที่เฉลยไว้ (R7 `/28`, R8 `/26`, R9 `/29`) **ไม่มีบรรทัดไหนเป็น last usable จริงเลยสักบรรทัด** (10.19.63.94 บน /26 → last usable คือ .126) | ตาม exhibit: R7 `10.88.31.126 255.255.255.192` · R8 `10.19.63.94 255.255.255.240` · R9 `10.23.98.158 255.255.255.224` (= ชุดเดียวกับ V1#586 / V2#109) |
| **V3#199** | ตัวเลือก **C กับ D ข้อความเหมือนกันทุกตัวอักษร** | คืนตัวเลือก D ให้เป็นตัวลวงที่ต่างจริง |
| **V3#5** | `fe80:a00:27ff:feeb:8eaa` ตก `::` และเลขเพี้ยน | **`fe80::a00:27ff:feeb:89aa`** (ตาม V1#566) |
| **V3#296** | ตัวเลือก C เขียนว่า `Anti software` | **`antimalware software`** |
| **V1#501** | ทุกตัวเลือกไม่มี prefix length (`ipv6 address fd00::1234:2343` — IOS ปฏิเสธคำสั่งนี้) และตัวเลือก B มีแค่ 7 กลุ่ม | เติม `/64` ให้ทุกตัวเลือกแบบ V2#115 |

---

# 🔵 ส่วนที่ 4 — ปัญหาเชิงโครงสร้าง — ✅ แก้แล้วทั้งหมด

### 4.1 drag ที่โจทย์บอก "Not all … are used" แต่ไม่มีหมวดตัวลวง (12 ข้อ)

pool ของ drag สร้างจาก `categories.flatMap(c => c.items)` — **ถ้าไม่ใส่หมวด `ไม่ใช้ (ตัวลวง)` ชิ้นลวงจะไม่ปรากฏเลย** ทำให้ข้อนั้นง่ายกว่าข้อสอบจริงมาก (เหลือชิ้นเท่ากับช่องพอดี เดาก็ถูก)

เปิดภาพ exhibit ทุกใบเพื่อดูว่าชิ้นไหนคือตัวลวงจริง แล้วเติมเข้าไปครบทั้ง 12 ข้อ:

| ข้อ | ชิ้นตัวลวงที่เติม |
|:---|:---|
| V1#43 · V2#554 | `OSPF process ID` (locally significant ไม่ต้องตรงและไม่ต้องไม่ซ้ำ) |
| V2#136 | `IPv6 addresses in the format FF02::5` (เป็น multicast ไม่ใช่ ULA/link-local) |
| V2#182 | `255.255.255.0` · `1A-76-3F-7C-57-DF` (MAC ของอะแดปเตอร์อีกตัว) · `192.168.1.15` |
| V2#272 | `configured and managed by a WLC` (เป็นของ Lightweight) |
| V2#278 | `supports different operational modes` |
| V2#330 | `accessible for management via Telnet, SSH, or a Web GUI` (เป็นของ Autonomous) |
| V2#498 · V2#792 | `Northbound APIs interact with end devices` (ประโยคผิดข้อเท็จจริง — northbound คุยกับแอป) |
| V2#732 | `leverages a RADIUS server … reverse Telnet` · `verifies the user and password …` |
| V2#743 | `It assigns per-user attributes.` (เป็นของ Authorization) |
| V2#804 | `PATCH` |

### 4.2 ไม่มีบรรทัด `✅ ทำไม X ถูก` ในคำอธิบาย (7 ข้อ)

เดิมทั้ง 7 ข้อมีเนื้อหาสอนครบอยู่แล้ว แต่ใช้รูปแบบ bullet แทนบรรทัดสรุป ทำให้สคริปต์ตรวจอัตโนมัติเทียบเฉลยกับคำอธิบายไม่ได้ — เติมบรรทัด `✅ ทำไม X ถูก:` (และ `❌ ทำไมข้ออื่นผิด` ที่ขาด) ให้ครบแล้ว

```
V1#44  V1#60  V1#70  V1#881  V1#905  V2#622  V3#160
```

---

# ✅ ส่วนที่ 5 — Test cases ที่รันแล้ว และผลลัพธ์

## 5.1 การตรวจอัตโนมัติเชิงโครงสร้าง (ครอบคลุมทั้ง 2,367 ข้อ)

| # | การตรวจ | V1 | V2 | V3 |
|--:|:---|:---:|:---:|:---:|
| 1 | id ครบ 1–N ไม่ซ้ำ ไม่ขาด | ✅ 1242 | ✅ 808 | ✅ 317 |
| 2 | ทุก key ใน `correct` มีอยู่จริงในตัวเลือก | ✅ | ✅ | ✅ |
| 3 | ลำดับตัวเลือกเป็น A→B→C→D→E ต่อเนื่อง | ✅ | ✅ | ✅ |
| 4 | ไม่มีตัวเลือกข้อความว่าง | ✅ | ✅ | ✅ |
| 5 | ไม่มีตัวเลือกข้อความซ้ำกันเอง | ✅ | ✅ | ❌ **V3#199** |
| 6 | `correct` ไม่มีค่าซ้ำ และเรียงตัวอักษร | ✅ | ✅ | ✅ |
| 7 | `single` = 1 คำตอบ / `multi` ≥ 2 คำตอบ | ✅ | ✅ | ✅ |
| 8 | จำนวนคำตอบตรงกับ "Choose two/three" ในโจทย์ | ✅ | ✅ | ✅ |
| 9 | ทุกข้อ multi มีคำว่า "Choose N" ในโจทย์ | ✅ | ✅ | ✅ |
| 10 | ตัวอักษรใน `✅ ทำไม X ถูก` ตรงกับ `correct` | ✅ | ✅ | ✅ |
| 11 | `❌ ทำไมข้ออื่นผิด` ไม่โจมตีตัวเลือกที่เป็นคำตอบ | ✅ | ✅ | ✅ |
| 12 | drag ไม่มี item ซ้ำ / ไม่มีหมวดว่าง | ✅ | ✅ | ✅ |
| 13 | drag "not all are used" ต้องมีหมวดตัวลวง | ✅ | ✅ | ✅ |
| 14 | หมายเหตุ `⚠️ เฉลยที่ถูกต้องคือ X` ตรงกับ `correct` จริง | ✅ **238/238** | ✅ | ✅ |

> **ผลรวมหลังแก้:** ปัญหาเชิงโครงสร้าง **22 → 2** และ 2 รายการที่เหลือคือ false positive ของสคริปต์เอง (V1#1012 กับ V1#1108 ใช้ `B. —` เป็นตัวคั่นในหัวข้อ `❌` ทำให้สคริปต์เข้าใจผิดว่ากำลังโจมตีคำตอบที่ถูก)

## 5.2 การตรวจเชิงเนื้อหาที่คำนวณได้จริง

| การตรวจ | ขอบเขต | ผล |
|:---|---:|:---|
| **IPv6 address type** — จำแนก GUA/LLA/ULA/Multicast จากตัวเลขจริง แล้วเทียบกับที่วางไว้ | 41 จุด | ✅ 0 ผิด |
| **Subnet math** — network/broadcast/first-usable/last-usable/จำนวน host | 36 ข้อ | ❌ 1 (V3#230, เป็นปัญหาข้อความตัวเลือก) |
| **ตาราง Administrative Distance** ในคำอธิบาย | ทุกข้อที่พูดถึง AD | ✅ 0 ผิด (hit ทั้งหมดเป็น process-id / EIGRP-external 170 ที่ถูกอยู่แล้ว) |
| **เลขพอร์ต** (SSH/Telnet/FTP/SMTP/DNS/TFTP/HTTP/HTTPS/NTP/SNMP/syslog/TACACS+/RADIUS) | ทุกข้อที่พูดถึงพอร์ต | ✅ 0 ผิด |
| **Syslog severity 0–7** ทั้งตระกูล | 10 ข้อ | ✅ 0 ผิด |
| **EtherChannel / LACP / PAgP / DTP matrix** | 43 ข้อ | ✅ 0 ผิด |
| **OSPF hello/dead timer mismatch** (ไล่อ่าน exhibit ทีละภาพ) | V1#638, V3#238, V3#275 | ✅ ถูกทั้ง 3 (คนละ exhibit คนละคำตอบ ถูกต้องตามภาพ) |
| **STP root bridge election** (priority → MAC ต่ำสุด) | V1#804 | ✅ SW4 ถูก (07:c1 < 0d:ca) |

## 5.3 การเทียบข้อซ้ำข้ามชุด (จุดที่เจอความผิดพลาดจริงมากที่สุด)

วิธี: จับกลุ่มโจทย์ที่เหมือนกัน แล้วเทียบ **ข้อความของคำตอบ** ไม่ใช่ตัวอักษร (เพราะแต่ละชุดสลับลำดับตัวเลือก) สำหรับ drag เทียบเป็นคู่ (คำอธิบาย ↔ ชิ้นส่วน) แบบไม่สนทิศทาง

| ขั้น | ผล |
|:---|:---|
| กลุ่มโจทย์ซ้ำที่ตรวจพบ | **556 กลุ่ม** |
| กลุ่มที่คำตอบ (เทียบด้วยข้อความ) ไม่ตรงกัน | 99 กลุ่ม |
| — ในนั้นเป็น **ข้อขัดแย้งจริง** (ชุดตัวเลือกเหมือนกันเป๊ะ) | **12 กลุ่ม** |
| — ที่เหลือ 87 กลุ่ม = ชุดตัวเลือกคนละชุด / คนละ variant | ✅ ไล่ดูครบทุกกลุ่ม ไม่มีเฉลยผิดเพิ่ม |
| เพิ่ม fuzzy matching (โจทย์คล้ายกัน ≥ 85% + ชุดตัวเลือกเหมือนกัน) | เจอเพิ่ม **19 คู่** |
| **รวมข้อขัดแย้งที่ต้องตัดสิน** | **31 จุด → ตัดสินและแก้ครบแล้ว** |
| **ผลตรวจซ้ำหลังแก้** | **hard conflict 12 → 0** ✅ · fuzzy 19 → 3 (ทั้ง 3 เป็น false positive: V3#260 vs #261 คนละ exhibit, HSRP vs VRRP) |

### ตัวอย่างคู่ที่ตรวจแล้วพบว่า "ต่างกันแต่ถูกทั้งคู่" (ไม่ต้องแก้)

| คู่ | เหตุผลที่ต่างกันได้ |
|:---|:---|
| V1#396 (HSRP → standby) vs V2#565 (VRRP → backup) | คนละโปรโตคอล HSRP ใช้ Active/Standby, VRRP ใช้ Master/Backup ✔ |
| V1#172 (port security violation) vs V1#472 / V2#140 / V3#64 (link flapping) | ชุดตัวเลือกคนละชุด — ทั้งสองอย่างทำให้ err-disabled ได้จริง ✔ |
| V1#51 (forwarding เมื่อลิงก์ขึ้น) vs V2#178 (ลดเวลา convergence) | V2 ตัวลวงเขียนว่า "when the switch is reloaded" ซึ่งผิด → ต้องเลือกข้อ convergence ✔ |
| V1#660 (`ip access-group` บนอินเทอร์เฟซ) vs V1#1213 / V2#701 (`access-class` บน vty) | V1#660 ไม่มีตัวเลือก access-class ให้เลือกเลย ✔ |
| V3#238 (dead-interval 40) vs V3#275 (hello-interval 10) vs V1#638 (hello 15 + dead 20) | exhibit คนละภาพ ตัวเลข timer คนละชุด ✔ |
| V2#688 (trust state → untrusted) vs V2#707 (ทิ้ง ARP ที่ binding ไม่ถูก) | config ใน exhibit คนละแบบ ✔ |

---

# 🧪 ส่วนที่ 6 — วิธีทดสอบซ้ำหลังแก้

## 6.1 สคริปต์ตรวจอัตโนมัติ (รันซ้ำได้ทุกครั้งที่แก้ไฟล์)

```js
// tools/check.mjs — โหลดไฟล์ .ts ทั้ง 3 ชุดโดยตัด import รูปภาพออก
import fs from 'node:fs'; import path from 'node:path'

function load(file, name) {
  let src = fs.readFileSync(path.join('src/data', file), 'utf8')
    .replace(/^import[^\n]*\n/gm, '')                       // ตัด import ทั้งหมด
    .replace(new RegExp(`export const ${name}\\s*:\\s*Question\\[\\]\\s*=`), `const ${name} =`)
    .replace(/image:\s*([A-Za-z_$][\w$]*)\s*,/g, "image: '$1',")  // ตัวแปรรูป -> string
  const tmp = `.tmp_${file}.mjs`
  fs.writeFileSync(tmp, `${src}\nexport default ${name}\n`)
  return import('file://' + path.resolve(tmp))
}
const V1 = (await load('questions.ts',   'QUESTIONS')).default
const V2 = (await load('questionsV2.ts', 'QUESTIONS_V2')).default
const V3 = (await load('questionsV3.ts', 'QUESTIONS_V3')).default
```

จากนั้นเดินลูปตรวจข้อ 1–14 ในตาราง 5.1 — เกณฑ์ผ่านคือ **พิมพ์ 0 ปัญหาทุกหัวข้อ**

## 6.2 Test case รายข้อที่ต้องกดยืนยันในเบราว์เซอร์

หลังแก้แล้ว เปิดแอปแล้วกดตอบตาม "คำตอบใหม่" ทุกข้อ ต้องขึ้น **✅ ถูกต้อง!** ทุกข้อ

| ข้อ | กดตอบ | คาดหวัง |
|:---|:---|:---|
| V1#624 | A | ✅ |
| V1#643 | A | ✅ |
| V2#169 | A + E | ✅ |
| V3#25 | D | ✅ |
| V3#42 | C + E | ✅ |
| V3#104 | D | ✅ |
| V3#136 | D + E | ✅ |
| V3#172 | B | ✅ |
| V3#192 | A + D | ✅ |
| V3#196 | B | ✅ |
| V3#225 | A | ✅ |
| V3#260 | A | ✅ |
| V3#9 | ลาก `infrastructure mode` → "based around one or more access points" และ `distribution system` → "entire wireless cell … wired network" | ✅ ครบทุกช่อง |
| V3#283 | Monitor = RFID + air-quality · Sensor = analytics + real-time troubleshooting | ✅ ครบทุกช่อง |
| V3#109 | ตัวเลือก AD 115 (ปรับให้ตรงกับ V1/V2 แล้ว) | ✅ |
| V1#769 · V2#732 | Authorization = user/group-based + restrict CLI · reverse Telnet ต้องเหลือค้างใน pool | ✅ |
| V1#802 | Authentication = verifies + reverse Telnet · Authorization = user/group-based + restrict CLI | ✅ |

### Test case เชิงลบ (ต้อง **ไม่** ผ่าน)

| ข้อ | กดตอบคำตอบเดิม | คาดหวัง |
|:---|:---|:---|
| V1#624 | D | ❌ |
| V2#169 | D + E | ❌ |
| V3#196 | A (LC to LC) | ❌ |
| V3#260 | C (collisions) | ❌ |

### Test case สำหรับ drag ที่เติมหมวดตัวลวง (12 ข้อในหัวข้อ 4.1)

- เปิดข้อนั้น → **นับจำนวนชิ้นใน pool ต้องมากกว่าจำนวนช่องรวม**
- ลากทุกชิ้นที่ถูกต้องลงช่อง → ชิ้นตัวลวงต้องเหลือค้างใน pool → กดตรวจแล้วต้องขึ้น ✅

## 6.3 คำสั่งตรวจสุดท้าย

```bash
npx tsc -b          # typecheck ต้องผ่าน
npm run build       # build ต้องผ่าน
npm run lint        # oxlint ต้องไม่มี error
```

---

# 📌 สรุปสำหรับคนที่กำลังจะเข้าห้องสอบ

**ถ้าไม่มีเวลาแก้ทั้งหมด ให้จำ 3 ข้อนี้ไว้ก่อน — เป็นข้อที่แอปยังเฉลยผิดใน V1/V2 ที่คุณใช้ซ้อมหลัก:**

1. **IPv4 private addressing (ถามเหตุผลเดียว)** → ตอบ **"ลดความเสี่ยงถูกเจาะ"** ไม่ใช่ "ลดขนาด forwarding table"
2. **IPv4 private addressing (Choose two)** → **"treat as unique"** + **"conserve global addresses"** ไม่ใช่ "ป้องกัน DoS"
3. **WLC local EAP + ห้ามจำกัดเวลาใช้งาน** → **Uncheck the Guest User check box** ไม่ใช่ตั้ง Lifetime = 0

4. **AAA — "leverages a RADIUS server to grant user access to a reverse Telnet session"** → ในชุดข้อสอบนี้จัดเป็น **Authentication** (คู่กับ "verifies the user…") ส่วน Authorization คือ "enables user- or group-based access" + "restricts the CLI commands"

**และจุดที่คนพลาดบ่อยซึ่งแอปเฉลยถูกอยู่แล้ว — ทวนให้แม่น:**

- **GBIC = SC · SFP = LC** → ต่อข้ามกันใช้สาย **LC to SC**
- **WPA3 เข้ารหัสด้วย AES** · SAE คือการ *ยืนยันตัวตน* ไม่ใช่การเข้ารหัส
- **longest prefix match มาก่อน AD เสมอ** — /32 ชนะ /24 ไม่ว่า AD จะเป็นเท่าไร
- **/23 ครอบ 2 อ็อกเท็ต** เช่น 172.16.2.0/23 ครอบถึง 172.16.**3**.255
- **full-duplex ไม่มี collision** — เห็น runts + 0 collision + 0 CRC = **bad NIC**
- **DTP และ ISL เป็นของ Cisco** — เจอโจทย์ "ต่างยี่ห้อ / third-party" ให้ตัดทิ้งทันที เลือก static trunk + dot1q
- **`switchport trunk allowed vlan add`** เมื่อโจทย์บอก "without impact to existing"
- **802.1x = ยืนยันตัวตนไคลเอนต์** · **TACACS+ / RADIUS = ยืนยันตัวตนแอดมิน**

---

*ตรวจโดยสคริปต์อัตโนมัติ 8 ชุด + ตรวจมือรายข้อในหมวดที่คำนวณได้ + เทียบข้อซ้ำข้ามชุด 556 กลุ่ม + ค้นเว็บยืนยัน 9 ข้อที่เถียงได้*
*อัปเดตล่าสุด: 8 สิงหาคม 2026*
