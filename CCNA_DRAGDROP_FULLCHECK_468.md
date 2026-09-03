# Drag-Drop CCNA EXAM — Full check ทั้ง 468 ข้อ

เริ่ม 2026-09-02 · ไฟล์เป้าหมาย `src/data/dragBank.ts`
(รวม drag จาก V1 115 + V2 85 + V3 49 + V4 219 · id ถูกบวก offset v1+100000 / v2+200000 / v3+300000 / v4+400000
แต่ในเอกสารนี้อ้างด้วย **เลข source เดิม** เช่น "V4 #665")

เกณฑ์: คิดคำตอบเองตามหลัก CCNA 200-301 ก่อน แล้วเปิดภาพ exhibit จริงทุกใบ (zoom ก่อนอ่านทุกครั้ง) แล้วจึงเทียบกับเฉลยในระบบ

---

## สถานะรวม

| ช่วง | สถานะ | แก้ไข |
|---|---|---|
| V1 #1–36 (จาก 115) | ✅ ตรวจแล้ว เปิดภาพ 36 ใบ | 0 |
| V1 #37–50 (จาก 115) | ✅ ตรวจแล้ว เปิดภาพ 14 ใบ | 0 |
| V1 #51–100 (จาก 115) | ✅ ตรวจแล้ว เปิดภาพ 49 ใบ | 3 (V1#769 + สำเนา V2#732 · V4#667) |
| V1 #101–115 (จบ V1) | ✅ ตรวจแล้ว เปิดภาพ 15 ใบ | 0 |
| V2 ลำดับ 1–35 (จาก 85) | ✅ ตรวจแล้ว เปิดภาพ 34 ใบ | 0 |
| V2 ลำดับ 36–85 (จบ V2) | ✅ ตรวจแล้ว เปิดภาพ 50 ใบ | 0 |
| V3 ลำดับ 1–22 (จาก 49) | ✅ ตรวจแล้ว เปิดภาพ 22 ใบ | 0 |
| V3 ลำดับ 23–49 (จบ V3) | ✅ ตรวจแล้ว เปิดภาพ 27 ใบ | 0 |
| V4 ลำดับ 1–53 (จาก 219) | ✅ ตรวจแล้ว เปิดภาพ 53 ใบ | 0 |
| V4 ลำดับ 54–101 (จาก 219) | ✅ ตรวจแล้ว เปิดภาพ 52 ใบ | 1 (V4#897 — แก้ explanation) |
| V4 ลำดับ 102–157 (จาก 219) | ✅ ตรวจแล้ว เปิดภาพ 56 ใบ | 0 |
| V4 ลำดับ 158–219 (จบ V4) | ✅ ตรวจแล้ว เปิดภาพ 57 ใบ (5 ข้อไม่มีภาพ) | 0 |
| **รวม** | **468 / 468 — ✅ ครบ 100%** | **เฉลยผิด 1 ข้อ (3 สำเนา) — แก้แล้ว · explanation คลาดเคลื่อน 1 ข้อ — แก้แล้ว** |

> ## ✅ ตรวจครบทั้ง 468 ข้อแล้ว (จบ 2026-09-04)
>
> เปิดภาพ exhibit จริงทุกใบที่มี — **461 ข้อมีภาพ** (7 ข้อในคลังเป็นโจทย์ข้อความล้วนไม่มี exhibit:
> V1#760 · V2#150 · V4#2057 · V4#2058 · V4#2059 · V4#2060 · V4#2077) และ **7 ข้อมี exhibit สองใบ** เปิดครบทั้งสองใบ

---

## ผลสแกนอัตโนมัติ (รันครั้งเดียว ครอบทั้ง 468 ข้อ — เสร็จแล้ว)

### เฉลยขัดแย้งกัน = **0** จากสแกนอัตโนมัติ

> ⚠️ สแกนนี้จับคู่เฉพาะ "ชุดไอเทมเหมือนกันเป๊ะ" จึง **มองไม่เห็น** กรณีที่ข้อเดียวกัน
> ถูกออกมาหลายเวอร์ชันโดยเปิดช่องคนละชุด (เช่น Authn+Authz กับ Acct+Authz) — ชุดไอเทมจึงต่างกันเล็กน้อย
> แต่เฉลยขัดกันจริง ต้องตรวจด้วยมือถึงเจอ (ดูกรณี AAA reverse Telnet ด้านล่าง)

สแกนโดยจับคู่ข้อที่โจทย์เหมือนกัน แล้วเทียบ **ไอเทม → ป้ายช่อง** (normalize ป้ายให้ `step 1` = `1`
และ `255.255.255.128 (/25)` = `255.255.255.128`) เพื่อไม่ให้การเรียงช่องสลับกันกลายเป็นสัญญาณเท็จ

| ประเภท | จำนวนกลุ่ม | สรุป |
|---|---|---|
| ชุดไอเทมเดียวกัน + จับคู่ต่างกัน | 1 | ตรวจแล้ว **ไม่ใช่ข้อขัดแย้ง** (ดูด้านล่าง) |
| ชุดไอเทมคนละชุด (variant คนละใบ) | 35 | ถูกต้องตามการออกแบบ ไม่ใช่ข้อขัดแย้ง |

**กลุ่มเดียวที่ติดมา — Rapid PVST+ forwarding state** (V1#516 · V1#615 · V2#261 · V4#261)
ต่างกันแค่ **ชื่อป้ายช่อง** (`Forwarding state actions` / `Rapid PVST+ forwarding state` / ป้ายภาษาไทย)
เทียบชุดคำตอบกับชุดตัวลวงโดยไม่สนป้ายแล้ว **เหมือนกันเป๊ะทั้ง 4 สำเนา** → ไม่ต้องแก้

### 🟡 ข้อบกพร่องเชิงโครงสร้างที่พบ (ไม่ใช่เฉลยผิด) — 10 ข้อ ทั้งหมดอยู่ใน V4

โจทย์เขียนว่า *"Not all ... are used"* แต่ในคลัง **ไม่มีช่องตัวลวงเลย** ผู้ฝึกจึงเห็นไอเทมพอดีกับช่อง
ทำให้ข้อง่ายผิดปกติและขัดกับข้อความในโจทย์ตัวเอง (สำเนาใน V1/V2/V3 ของข้อเดียวกันมีตัวลวงครบ)

`V4#416 · V4#480 · V4#592 · V4#900 · V4#909 · V4#975 · V4#989 · V4#992 · V4#1001 · V4#1018`

เพิ่มจากการตรวจด้วยตา (สแกนอัตโนมัติจับไม่ได้เพราะโจทย์ไม่มีคำว่า "Not all"):
`V2#175` — ภาพมี 6 ไอเทม แต่มีแค่ 4 ช่อง (L2 Tunnel 2 · L3 Tunnel 2) คลังบันทึกไว้ 4 ไอเทมพอดี **ขาดตัวลวง 2 ใบ**คือ `It forwards only IP EtherType frames.` และ `It supports LWAPP tunneling within Ethernet frames and UDP packets.` — เฉลย 4 ช่องถูกต้องแล้ว

**เฉลย (ไอเทมที่ต้องวาง) ของทั้ง 10 ข้อถูกต้องแล้ว** — ขาดแค่ตัวลวง รอการตัดสินใจว่าจะเติมหรือไม่

---

## บันทึกรายช่วง

### V1 ลำดับ 1–36 · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 36 ใบ

**ข้อที่ต้องคำนวณ/ตรวจด้วยตาจริง**

- **V1#52** subnet ranges ของ 172.28.228.144 ครบ 5 มาสก์ — /18 → บล็อก 3rd octet 64 (192–255) = `.192.1–.255.254` · /21 → บล็อก 8 (224–231) = `.224.1–.231.254` · /23 → บล็อก 2 (228–229) = `.228.1–.229.254` · /25 → 144 ตกใน 128–255 = `.228.129–.228.254` · /29 → บล็อก 8 (144–151) = `.228.145–.228.150` ✔ ตรงทุกช่อง
- **V1#133** (static NAT A–F) ผังยืนยัน e0 = ฝั่ง inside (172.16.1.x) · s0 = ฝั่ง outside · ลำดับ **E = `ip nat inside source static tcp …` ก่อน F = `ip nat inside source list 1 … overload`** ✔ **ตรงกับที่แก้ V4#552 / V2#435 ไว้ในรอบก่อน** — ยืนยันการแก้นั้นถูกต้อง
- **V1#307** ตัวลวง `1A-76-3F-7C-57-DF` ไม่ใช่ MAC มั่ว แต่เป็น MAC ของ **Microsoft Wi-Fi Direct Virtual Adapter ที่ Media disconnected** ในรูปเดียวกัน ส่วนของจริงคือ Wi-Fi adapter `B8-76-3F-7C-57-DF` ✔ (ต้องเปิดรูปถึงจะเห็น)
- **V1#369** Linux — `default via 192.168.1.193` = gateway · `src 192.168.1.200` = host IP · `/26` → `255.255.255.192` · OUI = 3 ไบต์แรกของ MAC = `00:0C:22` ✔
- **V1#236** (หน้าที่ DHCP) เคยถูกแก้ไว้รอบก่อนแล้ว โดยอ้าง **RFC 1034 §2.2** ว่าประโยค *"provides local control for network segments using a client-server scheme"* เป็นคำบรรยายของ **DNS** ไม่ใช่ DHCP → ตัวลวงถูกต้อง ทั้ง 4 สำเนา (V1#236 · V2#501 · V2#673 · V4#592) ตรงกัน ✔
- **V1#431** (AP modes) รูปเป็นภาพที่ **วางไอเทม `rogue detector mode` ลงช่องไว้แล้ว 1 ช่อง** เหลือ 5 ช่องว่าง — คลังบันทึกครบทั้ง 6 คู่ ซึ่งถูกต้องตามหลัก (FlexConnect = ผ่าน WAN · sniffer = จับแพ็กเก็ต · bridge = mesh · monitor = receive-only RFID/IDS · local = ส่งปกติช่องเดียวและสแกนช่องอื่น · rogue detector = เฝ้าฝั่งมีสายหา MAC ของ rogue AP) ✔
- **V1#43** OSPFv2 — ตัวลวงคือ **OSPF process ID** ถูกต้อง เพราะเป็นค่า *locally significant* ไม่ต้องตรงกันและไม่ต้องไม่ซ้ำ ✔
- **V1#218** ตัวลวงคือ *"Northbound APIs interact with end devices"* ถูกต้อง — northbound API คุยกับแอปพลิเคชัน ส่วนที่คุยกับอุปกรณ์คือ southbound ✔
- **V1#234** ตัวลวงคือ `service password-encryption` (ไม่จำเป็นเพราะ `enable secret` แฮชอยู่แล้ว) และ `line vty 0 4` (คนละบริบท) ✔

**ข้อที่ตรงกับหลักมาตรฐาน ตรวจแล้วไม่มีปัญหา**
V1#8 / V1#414 (Ansible YAML+SSH · Chef Ruby+10002 · Puppet 8140+manifest) · V1#10 (FTP 20/21+TCP · TFTP 69+UDP) · V1#15 (WLC/AP/service port/virtual/dynamic) · V1#41 (VACL · DAI · root guard · BPDU guard) · V1#42 · V1#336 · V1#357 (TCP/UDP) · V1#48 (DHCP/DNS) · V1#50 · V1#418 (AAA + CoA) · V1#73 (native VLAN · 802.1x · DHCP snooping · disable DTP) · V1#112 (DNS records) · V1#118 / V1#141 (SNMP) · V1#132 (QoS CBWFQ/CQ/FIFO/PQ/WFQ) · V1#134 (DHCP snooping) · V1#139 (collapsed core 3 / three-tier 2) · V1#189 (802.11a/ac/b/g/n) · V1#208 (DNS lookup) · V1#232 (link-local / ULA FC00::/7) · V1#248 (WLC L2/L3 security) · V1#260 / V1#397 / V1#449 (controller-based vs traditional) · V1#302 (TCP/UDP 8-byte header) · V1#399 (ipconfig)

### V1 ลำดับ 37–50 · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 14 ใบ

- **V1#490** (Autonomous / Cloud-based AP) ภาพมี 5 ไอเทม ช่องละ 2 = 4 ช่อง → ตัวลวง 1 ใบ ตรงกับคลัง · ตัวลวง `configured and managed by a WLC` = Lightweight AP ✔
- **V1#492** (port security 4 ขั้น) ภาพยืนยัน 7 ไอเทม 4 ช่อง — เป็นข้อถกเถียง sticky vs violation shutdown ที่บันทึกเหตุผลไว้ครบแล้วใน explanation คงเฉลยเดิมตามข้อสอบ ✔
- **V1#511** Controller-based vs Traditional 6 ไอเทม 3+3 ช่อง ✔
- **V1#516** Rapid PVST+ forwarding — เทียบกับรายการของ Cisco โดยตรง: forwarding state *ไม่มี* บรรทัด "Receives, processes, and transmits BPDUs received from the system module" (บรรทัดนั้นอยู่ในสถานะ listening/learning/blocking) → ตัวลวง 2 ใบถูกต้อง ✔ ตรงกับ V1#615 · V2#261 · V4#261
- **V1#521 · V1#544 · V1#560** TCP/UDP สามใบคนละชุดข้อความ ตรวจแยกกันแล้วถูกทุกใบ ✔
- **V1#525** AAA — ยืนยันการแก้รอบก่อน: `secures access to routers` = Authentication, `allows the user to change to enable mode` = Authorization ✔
- **V1#538** VACL / DAI / root guard / BPDU guard ✔
- **V1#543** IPv6 anycast/multicast/unicast — ภาพจัดไอเทมเป็น 3 คู่ให้ตรงแนวกับ 3 กล่อง แต่ **คู่ในภาพไม่ใช่คำตอบ** (คู่ที่ 2 มี one-to-many คู่กับ non-host device ซึ่งคนละชนิด) เป็นแค่การจัดวาง → เฉลยในคลัง (unicast=interface+link-local/loopback · multicast=one-to-many+FF00::/8 · anycast=หลาย interface+non-host) ถูกต้อง ✔
- **V1#551** DNA Center vs Traditional 6 ไอเทม 3+3 ✔
- **V1#558** security policy/standard + awareness<training<education ✔
- **V1#559** DHCP snooping / DAI / IPSG / storm control ✔
- **V1#564** คำนวณครบ: /30 .128–.131 last=.130 · /29 .8–.15 first=192.168.4.9 · /28 192.168.3.0 last=.14 mask .240 · /29 192.168.3.8 last=.14 mask .248 (กับดัก .14 ซ้ำสอง mask) · ตัวลวง .129=first, .131=broadcast, 192.168.4.13/28 ไม่ใช่ทั้ง first/last ✔ ผังในภาพตรงกับ Gi1/0–Gi1/3

### V1 ลำดับ 51–100 · ⚠️ พบเฉลยผิด 1 ข้อ (แก้ครบ 3 สำเนา) — เปิดภาพ 49 ใบ

#### 🔴 แก้แล้ว — AAA reverse Telnet (V1#769 · V2#732 · V4#667)

**อาการ:** ข้อนี้มี 6 ประโยค แต่เปิดช่องแค่ 2 กลุ่ม กลุ่มละ 2 ช่อง — มีสองเวอร์ชันในคลัง:

| เวอร์ชัน | ช่องที่เปิด | ข้อที่มี | เดิมวาง reverse Telnet ไว้ที่ |
|---|---|---|---|
| A | Authentication + Authorization | V1#802 · V3#222 | Authentication ✅ |
| B | Accounting + Authorization | V3#316 | ตัวลวง ✅ |
| B | Accounting + Authorization | **V1#769 · V2#732 · V4#667** | **Authorization ❌** |

**ทำไมสามข้อนั้นผิด:** ประโยคทั้ง 6 ถูกออกแบบมาเป็น 3 คู่ (Authentication 2 · Authorization 2 · Accounting 2) แล้วแต่ละเวอร์ชันเปิดช่องมาแค่ 2 กลุ่ม เหลือคู่ที่สามเป็นตัวลวง ⭐
เวอร์ชัน A ชี้ขาดว่า `It enables the device to allow user- or group-based access.` = **Authorization** (ไม่มีทางตีความอื่น เพราะช่องอีกกล่องคือ Authentication) จึงบังคับให้ `reverse Telnet` ต้องเป็นคู่ของ Authentication
เมื่อเวอร์ชัน B เปิด Accounting + Authorization คู่ Authentication จึงต้องเป็นตัวลวงทั้งคู่ — ตรงกับ V3#316

**แก้เป็น:** Authorization = `enables the device to allow user- or group-based access` + `restricts the CLI commands that a user can perform` · ตัวลวง = `verifies the user and password …` + `leverages a RADIUS server … reverse Telnet session`
ใส่บรรทัด ⚠️ หมายเหตุ (แก้เฉลย) ครบทั้ง 3 สำเนา พร้อมบันทึกข้อโต้แย้งเรื่อง `aaa authorization reverse-access` ไว้ให้ผู้ฝึกรู้ทั้งสองมุม (ตามกฎข้อ 4 ของ audit)
หมายเหตุ: ก่อนหน้านี้ explanation ของ V2#732 เคยเขียนว่า "แก้ให้เป็นตัวลวงแล้ว" แต่ categories ยังวางไว้ใต้ Authorization — คำอธิบายกับเฉลยขัดกันเอง ตอนนี้ตรงกันหมดแล้ว

#### ข้อที่ต้องคิด/เปิดภาพจริง

- **V1#650** อ่าน `show ip route` จริง: 172.16.2.128/25 · 172.16.3.64/27 · 172.16.3.128/28 · 172.16.3.192/29 · 172.16.4.0/23 — ตรงกับ mask ทุกช่อง ✔
- **V1#861** อ่าน AD จากวงเล็บ: [120/2]=RIP · [110/84437]=OSPF · [90/3184437]=EIGRP · [1/1]=static · 207.165.200.248/30 เป็น directly connected จึงเป็นตัวลวง ✔
- **V1#710** ตารางเราต์ยืนยัน longest-prefix match ครบ: /25→Gi0/0=Router2 · /28(.128)→Gi0/1=Router3 · /28(.144)→Gi0/2=Router4 · /29(.208)→Gi0/3=Router5 · B 209.165.200.224/27 via 10.10.12.2=MPLS · 1.1.1.1→S* default via 10.10.11.2=Internet ✔
- **V1#746** ผังยืนยันหมายเลขพอร์ต: R1=10.10.10.2 / R2=10.10.10.1 บน 10.10.10.0/30 และ R2=10.10.10.6 / R3=10.10.10.5 บน 10.10.10.4/30 → next-hop ทั้ง 4 บรรทัดถูก · ตัวลวงคือ host route /32 ซึ่งขัดกับคำว่า "static network route" ในโจทย์ ✔
- **V1#799** (agent/agentless/pull/push/provision/post) คู่ที่หลอกคือ agent กับ pull — "daemon" = ซอฟต์แวร์ที่รันอยู่ = **agent** · "deployment option" = ชื่อโมเดล = **pull** · `post` ไม่ใช่ศัพท์ในหมวดนี้เลย จึงเป็นตัวลวง ✔
- **V1#836** HSRP — Learn = ยังไม่รู้ virtual IP จึง "รอฟังจากเพื่อนบ้าน" · Listen = "ได้ยินแล้วและกำลังรับ hello" ✔ (ยืนยันการแก้รอบก่อน)
- **V1#717** AP modes — Monitor = CleanAir/air quality ทุกช่อง + RFID · Sensor = ทำตัวเป็นไคลเอนต์ทดสอบ (DNA Assurance) · Sniffer = ดักเฟรมช่องเดียวส่งให้เครื่องรีโมต ✔
- **V1#565** ประโยค "unable to serve as destination addresses" เขียนหลวม (link-local เป็นปลายทางบนลิงก์เดียวกันได้) แต่ภาพยืนยัน ULA 3 ช่อง + Link-Local 2 ช่อง จาก 6 ไอเทม → FF02::5 เป็นตัวลวงเดียว เฉลยคงเดิม ✔
- **V1#843–855** (IPv6 characteristic 9 ใบ) — ภาพจัดไอเทมเป็นคู่เพื่อจัดหน้าเท่านั้น **คู่ในภาพไม่ใช่คำตอบ** (เช่น #843 จับ one-to-one คู่กับ counterpart of private IPv4) — เฉลยในคลังถูกทุกใบ ✔
- **V1#609** WLAN terms — distribution system คือ "entire wireless cell … and the linkage to the wired network" โดยการตัดตัวเลือก (อีก 4 ช่องชัดเจน) ✔
- **V1#697** ภาพเป็นแค่ผัง (OSPF/eBGP/Static/EIGRP/iBGP → 10.10.10.0/24) ไม่มีข้อความฝั่งซ้าย — เงื่อนไขถูกเรียบเรียงขึ้นใหม่ตามลำดับ AD (1→20→90→110→200) ซึ่งถูกต้อง ✔
- **V1#788 vs V1#689** เป็น AAA คนละชุดไอเทม (#788 มี "limits the services available to a user" / #689 มี "restricts the CLI commands") — ไม่ขัดกัน ✔

#### ข้อที่ตรงมาตรฐาน ตรวจแล้วไม่มีปัญหา

V1#566 / V1#590 (IPv6 prefix 4 ชนิด) · V1#569 (QoS) · V1#580 / V1#611 / V1#756 (controller-based vs traditional) · V1#587 (RADIUS/TACACS+) · V1#588 / V1#701 (REST methods) · V1#614 (TCP/UDP protocols) · V1#615 (Rapid PVST+ — ซ้ำ V1#516) · V1#622 (DNS lookup 5 ขั้น) · V1#625 (FF05/FE80/FD00/2001:DB8) · V1#632 / V1#794 (TCP/UDP characteristics) · V1#642 (DNA Center vs Traditional) · V1#648 (Ansible features) · V1#662 (Ansible terms) · V1#671 (WLC interfaces) · V1#675 (DNS commands) · V1#689 (AAA Acct/Authz) · V1#699 (Split-MAC vs Autonomous) · V1#720 (northbound API) · V1#753 (virtualization) · V1#760 (SNMP — ไม่มีภาพ) · V1#781 (DNA Center vs Traditional use cases) · V1#802 (AAA Authn/Authz)

### V1 ลำดับ 101–115 (จบ V1) · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 15 ใบ

- **V1#935** ซูมอ่านตารางเราต์จริง: 10.10.13.0/**25** · .128/**28** · .160/**29** · .252/**30** → mask ตรงทั้ง 4 ช่อง · ตัวลวง 255.255.248.0 กับ 255.255.255.224 ไม่มีในตาราง ✔
- **V1#968 / V1#985** สถาปัตยกรรมชั้นเครือข่าย — #968 ตัวลวงคือ `monitors network traffic` · #985 ตัวลวงคือ `perimeter edge` และ spine-leaf จับคู่กับ top-of-rack ✔ (ยืนยันการแก้รอบก่อนของ #985)
- **V1#918** AAA — ตัวลวงคือ `It assigns per-user attributes.` ซึ่งเป็นงานของ Authorization ที่โจทย์ไม่ได้เปิดช่อง ✔
- **V1#1239** AAA — `It uses a RADIUS server to allow user access.` = Authentication ✔ **สอดคล้องกับการแก้ reverse Telnet ข้างบน**
- **V1#1223** ลำดับโหมด IOS: enable → configure terminal → enable secret → exit · ตัวลวง `line vty 0 4` ✔
- **V1#863** AAA + CoA (updates session attributes) ✔ · **V1#906** console/Telnet/SSH/HTTPS ✔ · **V1#946** ตัวลวง `operates on OSI Layer 5` (ทั้ง TCP/UDP อยู่ Layer 4) ✔ · **V1#1081** copper vs multi-mode fiber ✔
- **V1#1098 · V1#1145 · V1#1155 · V1#1032** IPv6/TCP-UDP ตรงมาตรฐาน ✔ · **V1#1230** DNS lookup 5 ขั้น ✔

### V2 ลำดับ 1–35 · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 34 ใบ (V2 #150 ไม่มีภาพ)

- **V2#5** คำนวณ usable range ครบ 5 มาสก์จาก 172.28.228.144 — /23→228.1–229.254 · /21→224.1–231.254 · /25→228.129–228.254 · /29→228.145–228.150 · /18→192.1–255.254 ✔
- **V2#12** อ่าน `ip route` + `ip addr` จริง: default via 192.168.1.193 = gateway · src 192.168.1.200 = host IP · /26 → 255.255.255.192 · OUI = 00:0C:22 ✔
- **V2#153 / V2#182** `ipconfig /all` — กับดักคือ MAC `1A-76-3F-7C-57-DF` ของ Wi-Fi Direct Virtual Adapter ที่ **Media disconnected** ตัวจริงคือ `B8-76-3F-7C-57-DF` ✔ · #182 เพิ่มช่อง Network address (192.168.1.0) และมีตัวลวง 3 ใบ (subnet mask, MAC ปลอม, 192.168.1.15 = DNS) ✔
- **V2#71** ยืนยันการแก้รอบก่อน: DNS = UDP · SMTP = TCP (เฉลยต้นฉบับสลับกัน) ✔
- **V2#176** ยืนยันการแก้รอบก่อน: cells จากหลาย AP เชื่อมกัน = **extended service set** ไม่ใช่ distribution system ✔ ตรงกับ V1#609
- **V2#278** ยืนยันการแก้รอบก่อน: Lightweight = `configured and managed by a WLC` + `supports different operational modes` · `supports automatic deployment` เป็นของ Cloud-Based จึงเป็นตัวลวง ✔ ตรงกับ V2#272 · V3#13 · V3#176
- **V2#261** Rapid PVST+ — ตรงกับ V1#516 / V1#615 ✔ · **V2#132** = ข้อเดียวกับ V1#564 แต่ไม่มีตัวลวง (โจทย์ไม่ได้เขียนว่า Not all) ✔
- **V2#134** ต้นฉบับพิมพ์ `FE80::abcdf:…` ผิดรูปแบบ (กลุ่มละไม่เกิน 4 หลัก) แต่ไม่กระทบคำตอบ เพราะตัดสินที่คำนำหน้า FE80 ✔
- **V2#148** DNS records — AAAA=host→IP · CNAME=alias · NS=authoritative servers · SOA=serial+owner · PTR=reverse ✔
- **V2#175** เฉลย 4 ช่องถูก (L2 = EtherType 0xBBBB + L2 connectivity · L3 = ต้องมี IP + UDP/UDP Lite) แต่ **คลังขาดตัวลวง 2 ใบที่มีอยู่ในภาพ** — บันทึกไว้ในหัวข้อข้อบกพร่องเชิงโครงสร้างด้านบน
- **V2#207** ประโยชน์ของ WLC 4 คู่ ✔ · **V2#187** WLC interfaces (service port=OOB · virtual=mobility/guest · dynamic=WLAN client) ✔
- ตรงมาตรฐานไม่มีปัญหา: V2#3 (FTP/TFTP) · V2#38 · V2#95 · V2#141 · V2#146 · V2#155 (TCP/UDP) · V2#44 · V2#47 (TCP/UDP apps) · V2#82 (collapsed core vs three-tier) · V2#96 · V2#99 · V2#118 · V2#131 · V2#136 · V2#137 · V2#139 · V2#150 (IPv6) · V2#154 (DNS lookup components) · V2#258 (RADIUS/TACACS+) · V2#272 (AP types) · V2#284 (threat mitigation)


### V2 ลำดับ 36–85 (จบ V2) · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 50 ใบ

**ข้อที่ต้องเปิดภาพ/คิดจริง**

- **V2#435 · V2#650** (static NAT A–F) เปิดผังทั้งสองใบ ยืนยันโครงคอนฟิกเหมือนกันเป๊ะ: `interface Ethernet0` → A B · `interface Serial0` → C D · global → E F · แล้วปิดท้ายด้วย `access-list 1 permit 172.16.1.0 0.0.0.255` ที่พิมพ์มาให้แล้ว → **E = static NAT, F = overload** ทั้งสองใบ ✔ ยืนยันการแก้รอบก่อนของ V2#435 ว่าถูกต้อง (V2#650 ใช้ public IP คนละชุด 209.165.201.x แต่ลำดับเดียวกัน)
- **V2#438** ภาพพิมพ์ไอเทมว่า `CBWGQ` (ตกตัว F) และ **V2#515 · V2#668** พิมพ์ว่า `cloud-based weighted fair queueing` (ที่ถูกคือ *class-based*) — เป็นคำผิดในต้นฉบับข้อสอบ ไม่กระทบเฉลย คลังเก็บชื่อที่ถูกต้องไว้แล้ว ✔
- **V2#466** ภาพเขียนช่อง 802.11ac ว่า "maximum data rate of 100 Mbps" ส่วนคลังเขียน "above 100 Mbps" — ต่างกันแค่ถ้อยคำป้ายช่อง ตัวเฉลย (802.11ac = 5 GHz only) ถูกต้อง ✔
- **V2#441 · V2#666** (show snmp …) เป็นข้อที่ Cisco ไม่มีคำสั่งจริงครบทุกตัว แต่เฉลยตามข้อสอบสอดคล้องกันทั้งสองใบ: host=recipient · engineID=IP ของอุปกรณ์รีโมต · group=security model · community=access string · chassis=serial number ✔
- **V2#443** DHCP snooping — จุดที่คนพลาดคือ `snooping binding database` ถูกจับคู่กับ "list of hosts … unknown to the administrative domain" (ถ้อยคำต้นฉบับเขียนกลับด้าน แต่เป็นเฉลยมาตรฐานของข้อนี้) ✔
- **V2#501 · V2#673** (หน้าที่ DHCP) ภาพยืนยัน 7 ไอเทม 4 ช่อง → ตัวลวง 3 ใบเป็นคำบรรยายของ DNS ทั้งหมด ✔ ตรงกับ V1#236
- **V2#730** port security — ภาพยืนยัน 7 ไอเทม 4 ช่อง เฉลยคง sticky ไว้ที่ขั้น 4 ตามข้อสอบ (เหตุผลข้อโต้แย้ง sticky vs violation shutdown บันทึกไว้ใน explanation แล้ว) ✔ ตรงกับ V1#492
- **V2#732** AAA reverse Telnet — เปิดภาพยืนยันว่าช่องที่เปิดคือ **Accounting + Authorization** ตรงกับที่แก้ไว้รอบก่อน (reverse Telnet เป็นตัวลวง) ✔
- **V2#803** Configuration Management vs Orchestration — Puppet = config management · Ansible = orchestration ตามเฉลยข้อสอบ (ทั้งคู่ทำ config management ได้ในโลกจริง แต่ข้อนี้บังคับให้แยกคู่) ✔

**ข้อที่ตรงมาตรฐาน ตรวจแล้วไม่มีปัญหา**
V2#290 (console/Telnet/SSH/HTTPS) · V2#330 (Cloud vs Lightweight AP) · V2#336 (Monitor/Sensor/Sniffer) · V2#383 (AD 0-1-20-90-110-120) · V2#409 (DNS records) · V2#410 (SNMP components) · V2#436 (policy map/service policy/DSCP) · V2#439 · V2#461 · V2#626 (TCP/UDP) · V2#442 · V2#700 (attack mitigation) · V2#498 · V2#792 (controller-based vs traditional) · V2#499 · V2#720 (ลำดับ enable secret) · V2#500 · V2#637 (DHCP vs DNS) · V2#554 (OSPFv2 must match/unique) · V2#580 · V2#775 (AAA + CoA) · V2#669 (SNMP fault management) · V2#691 · V2#743 (AAA) · V2#694 (WLC L2/L3 security) · V2#744 (security policy/standard + awareness/training/education) · V2#750 (DHCP snooping/DAI/storm control/IPSG) · V2#762 · V2#789 (controller-based vs traditional) · V2#770 (Ansible/Chef/Puppet) · V2#778 (cloud characteristics) · V2#795 (REST methods 5 ตัว) · V2#799 (DNA Center vs Traditional) · V2#804 (REST 4 ตัว + PATCH ตัวลวง) · V2#805 (REST principles) · V2#806 (Ansible terms)

### V3 ลำดับ 1–22 · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 22 ใบ

- **V3#30 · V3#68** อ่านตาราง `show ip route` จริงทั้งสองใบ — #30: 10.10.13.0/25 · .144/28 · .160/29 · 209.165.202.128/27 ✔ (ตัวลวง /30) · #68: 10.10.13.0/25 · .128/28 · .160/29 · .252/30 ✔ (ตัวลวง 255.255.248.0 กับ 255.255.255.224 ซึ่งไม่มีในตาราง) — สองใบนี้ใช้ prefix ชุดต่างกัน จึงไม่ขัดกัน
- **V3#54** 172.16.2.128/25 · 172.16.3.64/27 · 172.16.3.128/28 · 172.16.3.192/29 · 172.16.4.0/23 ✔ ตรงกับ V1#650
- **V3#61** HSRP — Learn = "รอฟังจากเพื่อนบ้าน" · Listen = "ได้ยินแล้วและกำลังรับ hello" ✔ ตรงกับ V1#836
- **V3#114** ไล่ตาม AD ครบ 5 เงื่อนไข: ทุกโปรโตคอลขึ้น→Static(1) · OSPF+eBGP ล่ม→Static · static+eBGP ล่ม→EIGRP(90) ชนะ OSPF(110) · static+EIGRP ล่ม→eBGP(20) · static+OSPF ล่ม→eBGP(20) ชนะ EIGRP(90) ✔
- **V3#13** Autonomous = Telnet/SSH/WebGUI + management IP · Lightweight = WLC + operational modes · ตัวลวง = automatic deployment (เป็นของ Cloud-based) ✔ ตรงกับ V2#278 · V2#330
- **V3#9** distribution system = "entire wireless cell … and the linkage to the wired network" · extended service set = "cells from different APs are linked together" ✔ ตรงกับ V1#609 · V2#176
- **V3#5** ภาพพิมพ์ `fe80:a00:27ff:feeb:8eaa` (ตก `::`) ส่วนคลังเก็บ `fe80::a00:27ff:feeb:89aa` — ต่างที่ตัวสะกดของต้นฉบับ ไม่กระทบชนิดที่อยู่ ✔
- **V3#122 · V3#141** AAA สองใบเปิดช่องคนละคู่ (#122 = Accounting+Authorization · #141 = Authentication+Authorization) เทียบเนื้อคำตอบแล้วสอดคล้องกัน ไม่ขัดกัน ✔
- **V3#82** ภาพเป็นไดอะแกรมคลื่นสะท้อน/ดูดซับเท่านั้น ไม่มีข้อความช่อง — เฉลยตามนิยาม RF มาตรฐาน ✔
- ตรงมาตรฐาน: V3#2 (REST methods) · V3#14 (SNMP fault management) · V3#46 (DNS lookup 5 ขั้น) · V3#55 (Ansible features) · V3#97 (Split-MAC vs Autonomous) · V3#98 (Ansible terms) · V3#100 (DNA Center vs Traditional) · V3#106 (REST 4 ตัว) · V3#129 (DNS commands) · V3#139 (IPv6 FF05/FE80/FD00/2001:DB8) · V3#140 (3 vs 23 non-overlapping channels)


### V3 ลำดับ 23–49 (จบ V3) · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 27 ใบ

- **V3#243** อ่านตาราง Router2 จริง: 10.10.13.0/25 และ 10.10.13.144/28 ผ่าน Router1 → `10.10.13.1` (อยู่ใน /25) และ `10.10.13.150` (อยู่ใน .144–.159) = Router1 · ส่วน `10.10.13.129` **ไม่ตกในทั้งสอง prefix** จึงไปตาม default via 10.10.10.13 = Internet เช่นเดียวกับ `10.10.10.16` และ `10.10.100.128` ✔ (ข้อนี้กับดักคือ .129 ที่ดูเหมือนอยู่ใน 10.10.13.x)
- **V3#284** ผัง + ตารางเราต์ครบ: /25→Gi0/0 via 10.10.10.1=Router2 · .128/28→Gi0/1 via 10.10.10.5=Router3 · .144/28→Gi0/2 via 10.10.10.9=Router4 · .208/29→Gi0/3 via 10.10.10.13=Router5 · B 209.165.200.224/27 via 10.10.12.2=MPLS · 1.1.1.1→default via 10.10.11.2=Internet ✔
- **V3#154** ผังยืนยัน next-hop: R1→10.10.10.1(R2) · R2→10.10.10.5(R3) และ 10.10.10.2(R1) · R3→10.10.10.6(R2) · ตัวลวงคือ host route /32 ซึ่งขัดกับคำว่า "static network route" ✔ ตรงกับ V1#746
- **V3#222 · V3#316** AAA reverse Telnet สองเวอร์ชัน — #222 เปิด Authentication+Authorization (reverse Telnet = Authentication) · #316 เปิด Accounting+Authorization (reverse Telnet = ตัวลวง) — **สอดคล้องกันทั้งคู่** และยืนยันการแก้ V1#769 · V2#732 · V4#667 ✔
- **V3#246 · V3#278** AAA เปิดช่องคนละคู่ เทียบเนื้อคำตอบแล้วไม่ขัดกัน ✔
- **V3#285** ULA 3 ช่อง + Link-Local 2 ช่อง จาก 6 ไอเทม → FF02::5 เป็นตัวลวงเดียว ✔ ตรงกับ V1#565
- **V3#293 · #294 · #300 · #303 · #308** ชุด "IPv6 characteristic" 5 ใบ เปิดช่องคนละคู่กัน (Multicast+Anycast / GUA+Multicast / GUA+ULA / GUA+Link-Local ×2) ตรวจแยกทีละใบแล้วถูกทุกใบ ✔
- ตรงมาตรฐาน: V3#142 (cloud computing 5 คุณลักษณะ) · V3#144 (VLAN port modes) · V3#176 (Cloud vs Lightweight AP) · V3#178 (SNMP managed device/MIB/NMS/agent) · V3#180 (Traditional vs DNA Center) · V3#187 (GUA vs ULA) · V3#197 (virtualization) · V3#200 · V3#241 (TCP/UDP) · V3#208 (agent/agentless/provision/pull/push + ตัวลวง post) · V3#240 (DNS lookup commands 6 ตัว) · V3#281 (northbound API 4 ช่อง + ตัวลวง southbound 3 ใบ) · V3#283 (AP modes Monitor/Sensor/Sniffer) · V3#313 (DNA Center vs Traditional use cases)

### V4 ลำดับ 1–53 · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 53 ใบ

- **V4#5** usable range 5 มาสก์จาก 172.28.228.144 ✔ ตรงกับ V1#52 · V2#5
- **V4#12** Linux `ip route`/`ip addr` — gateway .193 · host .200 · /26 = 255.255.255.192 · OUI 00:0C:22 ✔
- **V4#132** ผังยืนยัน DC-1 Gi1/0→ISP · Gi1/1→HQ-1 · Gi1/2→สวิตช์ · HQ-1 Gi1/3→HQ-SW1 · คำนวณ: /30 last=209.165.202.130 · /29 first=192.168.4.9 · /28 last=192.168.3.14 mask .240 · /29 last=192.168.3.14 mask .248 ✔ (กับดัก .14 ซ้ำสองมาสก์) ตรงกับ V1#564
- **V4#153 · V4#182** `ipconfig /all` — MAC จริงคือ `B8-76-3F-7C-57-DF` ของ Wi-Fi adapter ส่วน `1A-76-3F-7C-57-DF` เป็นของ Wi-Fi Direct Virtual Adapter ที่ Media disconnected ✔ · #182 เพิ่มช่อง Network address และมีตัวลวง MAC ปลอม ✔
- **V4#480** ตารางเราต์ยืนยัน /25 · .144/28 · .160/29 · 209.165.202.128/27 ✔ — **แต่โจทย์เขียน "Not all prefixes are used" ทั้งที่คลังไม่มีตัวลวง** (อยู่ในรายการข้อบกพร่องเชิงโครงสร้างแล้ว)
- **V4#416** เช่นกัน: ภาพมี 6 ไอเทม 5 ช่อง ตัวลวงคือ OSPF process ID แต่คลังไม่มีช่องตัวลวง — เฉลย must match/must be unique ถูกต้อง ✔
- **V4#592** เช่นกัน: ภาพมี 7 ไอเทม 4 ช่อง คลังไม่มีตัวลวง — 4 หน้าที่ที่เลือกถูกต้อง ✔
- **V4#552** ผัง static NAT A–F เหมือน V1#133 · V2#435 เป๊ะ → E = static NAT, F = overload ✔ ยืนยันการแก้รอบก่อน
- **V4#175** L2/L3 Tunnel — **ใบนี้มีตัวลวงครบ 2 ใบ** (`forwards only IP EtherType frames` · `supports LWAPP tunneling within Ethernet frames and UDP packets`) ต่างจาก V2#175 ที่ขาดไป → ยืนยันว่า V2#175 คือใบที่บกพร่อง ไม่ใช่เฉลยผิด
- **V4#261** Rapid PVST+ forwarding ✔ ตรงกับ V1#516 · V1#615 · V2#261
- **V4#586** ภาพพิมพ์ `cloud-based weighted fair queueing` (ที่ถูกคือ class-based) เช่นเดียวกับ V2#515/V2#668 — คลังเก็บ `CBWFQ` ซึ่งถูกต้อง ✔
- **V4#272 · V4#278 · V4#330** AP architecture สามใบเปิดช่องคนละคู่ (Autonomous+Cloud / Autonomous+Lightweight / Cloud+Lightweight) เทียบเนื้อคำตอบแล้วสอดคล้องกันทั้งสามใบ ✔
- ตรงมาตรฐาน: V4#3 (FTP/TFTP) · V4#38 · V4#44 · V4#47 · V4#71 · V4#95 · V4#141 · V4#146 · V4#155 · V4#523 (TCP/UDP) · V4#82 (collapsed core vs three-tier) · V4#96 · V4#99 · V4#118 · V4#131 · V4#134 · V4#136 · V4#137 · V4#139 · V4#150 (IPv6) · V4#148 (DNS records) · V4#154 (DNS lookup components) · V4#176 (Wi-Fi terms) · V4#187 (WLAN components) · V4#207 (WLC benefits) · V4#258 (RADIUS/TACACS+) · V4#284 (threat mitigation) · V4#290 (management connections) · V4#336 (AP modes) · V4#383 (AD order) · V4#534 (DHCP/DNS) · V4#545 · V4#583 (SNMP) · V4#588 (SNMP fault management) · V4#614 (AAA) · V4#617 (WLC L2/L3 security) · V4#623 (attack mitigation) · V4#651 (ลำดับ enable secret)


### V4 ลำดับ 54–101 · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 52 ใบ (มี 4 ข้อที่มี exhibit สองใบ)

#### 🟠 แก้ explanation 1 ข้อ — V4#897 (เลขในโจทย์ต้นฉบับพิมพ์ผิด)

โจทย์ให้ปลายทาง `209.165.200.30` แต่ตารางเราต์มีแค่ `B 209.165.200.224/27` (ช่วง .224–.255)
ถ้าอ่านตามตัวอักษร `.30` **ไม่ตกในเส้นทางใดเลย** จึงต้องตกไป default route เหมือน `1.1.1.1`
→ ช่อง MPLS จะว่างและช่อง Internet จะได้สองใบ ซึ่งเป็นไปไม่ได้เพราะโจทย์มี 6 ไอเทมต่อ 6 ช่องพอดี
เทียบกับ **V3#284** ที่ใช้ตารางเดียวกันเป๊ะแต่พิมพ์ `209.165.200.230` ถูกต้อง → ยืนยันว่าเป็นการพิมพ์ตกเลข 2 ในต้นฉบับ
**เฉลย (MPLS cloud) ถูกอยู่แล้ว** แต่ explanation เดิมอธิบายกำกวมว่า *"ไม่ใช่ แต่เส้นทาง BGP ทั้งสามเส้นชี้ผ่าน 10.10.12.2"*
จึงเขียนใหม่ให้ระบุชัดว่าเป็นการพิมพ์ผิดของต้นฉบับ พร้อมอ้าง V3#284 เป็นหลักฐาน (ไม่แตะข้อความไอเทมตามกฎ)

#### ข้อที่ต้องเปิดภาพ/คิดจริง

- **V4#909** ผังยืนยัน R1=10.10.10.2 · R2=10.10.10.1/.6 · R3=10.10.10.5 → next-hop ทั้ง 4 บรรทัดถูก ✔ (ข้อนี้อยู่ในรายการ "ขาดตัวลวง" — ตัวลวงที่ควรมีคือ host route /32 สองใบ)
- **V4#900** ตารางเราต์: /25 · .128/28 · .160/29 · .252/30 ✔ (ขาดตัวลวง 255.255.248.0 กับ 255.255.255.224 ที่มีในภาพ)
- **V4#928** Router2 — `10.10.13.129` **ไม่ตก** ทั้ง 10.10.13.0/25 และ 10.10.13.144/28 จึงไป default = Internet เช่นเดียวกับ 10.10.10.16 และ 10.10.100.128 · ส่วน .1 กับ .150 ไป Router1 ✔ ตรงกับ V3#243
- **V4#936** 172.16.2.128/25 · 3.64/27 · 3.128/28 · 3.192/29 · 4.0/23 ✔ ตรงกับ V1#650 · V3#54
- **V4#938** ไล่ AD ครบ 5 เงื่อนไข ✔ ตรงกับ V3#114 · V1#697
- **V4#811** ภาพ OCR เพี้ยนเป็น "J" กับ "2J" (ที่จริงคือ 3 กับ 23) — คลังเก็บเลขถูกต้อง ✔
- **V4#801** ภาพพิมพ์ "vital machine" (ที่ถูกคือ virtual machine) — ไม่กระทบเฉลย ✔
- **V4#989** ภาพพิมพ์ "It reaches the CLI commands…" และ "It permits and derives login attempts." (ที่ถูกคือ *restricts* และ *denies*) — คลังเก็บข้อความที่ถูกต้อง ✔
- **V4#975 · V4#989 · V4#992 · V4#1001 · V4#1018** ทั้งห้าข้อยืนยันด้วยตาแล้วว่า **ภาพมีตัวลวงจริง** แต่คลังไม่มีช่องตัวลวง — ตรงกับรายการข้อบกพร่องเชิงโครงสร้างด้านบน เฉลยที่วางถูกต้องทุกข้อ
- **V4#871 vs V4#187** WLAN components สองใบใช้ป้ายช่องต่างกัน (#187 = "used to support mobility management" · #871 = "used for guest authentication") แต่ทั้งคู่ตอบ **virtual interface** ถูกต้องทั้งคู่ — ไม่ขัดกัน ✔

#### ข้อที่ตรงมาตรฐาน ตรวจแล้วไม่มีปัญหา

V4#665 (port security) · V4#667 (AAA reverse Telnet — ยืนยันการแก้) · V4#676 · V4#688 · V4#729 (AAA/CoA) · V4#689 (security program) · V4#701 (DHCP snooping/DAI/storm control/IPSG) · V4#715 · V4#753 · V4#757 · V4#784 (controller-based vs traditional) · V4#723 · V4#776 (Ansible/Chef/Puppet) · V4#725 · V4#766 · V4#1008 · V4#1021 (DNA Center vs Traditional) · V4#732 · V4#832 (cloud) · V4#761 · V4#777 · V4#778 (REST) · V4#773 (config management vs orchestration) · V4#779 (Ansible terms) · V4#799 (RF terms) · V4#852 (VLAN port modes) · V4#868 (Split-MAC vs Autonomous) · V4#905 (HSRP) · V4#950 (SNMP components) · V4#956 (QoS features) · V4#958 (DNS lookup 5 ขั้น) · V4#960 · V4#963 (DNS commands) · V4#970 (attack mitigation)


### V4 ลำดับ 102–157 · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 56 ใบ

ช่วงนี้เป็นบล็อกใหญ่ของข้อ **"ชนิดสายเคเบิล"** (copper / single-mode / multimode) กับ **"ชนิดที่อยู่ IPv6"**
ที่ออกมาหลายสิบใบโดยสลับคู่กล่องไปเรื่อย ๆ — จุดที่ต้องระวังคือ **ประโยคเดียวกันเปลี่ยนคำตอบได้เมื่อคู่เทียบเปลี่ยน**

#### ⚠️ คู่ที่ดูเหมือนขัดกันแต่ไม่ขัด (ตรวจแล้วถูกทั้งคู่)

| ประโยค | ใบที่ตอบ A | ใบที่ตอบ B | เหตุผล |
|---|---|---|---|
| `is ideal over longer distances with little loss of integrity` | **V4#1088 · V4#1137 · V4#1329** → single-mode | **V4#1093** → multimode | #1093 จับคู่ SMF กับ MMF และช่อง SMF ถูกใช้ไปแล้วโดย `uses a single wavelength` + `DWDM` ซึ่งชี้ SMF แบบไม่มีทางตีความอื่น ประโยคที่เหลือจึงตกไป MMF โดยการตัดตัวเลือก ⭐ ส่วนใบอื่นจับคู่ SMF กับ copper ประโยคนี้จึงเป็น SMF |
| `has increased attenuation over long distances` | **V4#1087** → multimode (คู่กับ copper) | **V4#1125** → multimode (คู่กับ SMF) | ตอบเหมือนกันทั้งสองใบ ไม่ขัดกัน |
| `used to support mobility management of the WLC` / `used for guest authentication` | **V4#187 · V4#871** → virtual interface | — | ป้ายช่องต่างกันแต่คำตอบเดียวกัน ถูกทั้งคู่ |

#### ข้อที่ต้องเปิดภาพ/คิดจริง

- **V4#1292** อ่าน `show ip route` จริง: `[120/2]` = RIP → 172.16.2.0/24 · `[110/84437]` = OSPF → 192.168.1.0/24 · `[90/3184437]` = EIGRP → 192.168.2.0/24 · `[1/1]` = static → 207.165.200.244/30 · ส่วน 207.165.200.248/30 เป็น **directly connected** จึงเป็นตัวลวง ✔ ตรงกับ V1#861
- **V4#1398 · V4#1409** ใช้ภาพร่วมกับ V3#30 และ V3#100 (ไฟล์เดียวกันคนละคลัง) เฉลยตรงกันทั้งคู่ ✔
- **V4#1275 · V4#1327** (AP vs WLC) ตัวลวงถูกต้อง — `makes forwarding decisions when in LWAP mode` ผิดเพราะในโหมด LWAP การตัดสินใจส่งต่ออยู่ที่ WLC ⭐ · `requires a special adapter for PoE` ผิดเพราะ AP รองรับ PoE ในตัวผ่านสาย Ethernet เส้นเดียว ⭐
- **V4#1147** QoS ต่อชนิดทราฟฟิก: web = best effort · database sync = policing (จำกัดอัตราทราฟฟิกก้อนใหญ่) · VoIP = priority queue · video = shaping ✔
- **V4#1309 · V4#1323** ภาพสะกดป้ายช่องว่า "cooper" (ที่ถูกคือ copper) — ไม่กระทบเฉลย ✔
- **V4#1093 · V4#1115 · V4#1125** สาม SMF-vs-MMF ใบ ตรวจทีละใบแล้วเฉลยสอดคล้องกัน ✔

#### ข้อที่ตรงมาตรฐาน ตรวจแล้วไม่มีปัญหา

สาย: V4#1081 · V4#1086 · V4#1087 · V4#1088 · V4#1089 · V4#1091 · V4#1137 · V4#1153 · V4#1165 · V4#1186 · V4#1267 · V4#1271 · V4#1277 · V4#1284 · V4#1298 · V4#1329
IPv6 ที่อยู่: V4#1068 · V4#1090 · V4#1092 · V4#1101 · V4#1119 · V4#1132 · V4#1171 · V4#1188 · V4#1282
IPv6 คุณลักษณะ: V4#1102 · V4#1103 · V4#1114 · V4#1127 · V4#1135 · V4#1144 · V4#1170 · V4#1190 · V4#1256 · V4#1263 · V4#1272 · V4#1289 · V4#1301 · V4#1325 · V4#1336
อื่น ๆ: V4#1024 (DNA Center vs Traditional) · V4#1028 (agent/agentless/provision/pull/push + ตัวลวง post) · V4#1112 (DHCP snooping) · V4#1130 (AAA Acct/Authz) · V4#1155 (HTTP verbs)


### V4 ลำดับ 158–219 (จบ V4 · จบทั้งคลัง) · ✅ เฉลยถูกทั้งหมด — เปิดภาพ 57 ใบ

ช่วงท้ายของ V4 เป็น **สำเนาข้ามคลัง** เป็นหลัก คือใช้ไฟล์ภาพร่วมกับ V1 (`assets/example/`), V2 (`assets/version_2/`)
และ V3 (`assets/version_3/`) โดยตรง — เทียบ "เนื้อคำตอบ" กับต้นฉบับทุกใบแล้วตรงกันหมด ไม่มีคู่ใดขัดกัน

#### ข้อที่ต้องคิด/คำนวณจริง

- **V4#2076** (ข้อใหม่ ไม่มีสำเนา) ปลายทาง 192.168.20.108 — ตรวจ 3 prefix ในตาราง: `/27` = .64–.95 (**ไม่ครอบ**) · `/28` = .96–.111 (ครอบ) · `/29` = .104–.111 (ครอบ) → **longest prefix match ชนะที่ /29** ⭐ แล้วใน /29 มีสองเส้น O `[110/40]` กับ D `[90/40]` → AD ต่ำกว่าชนะ = **EIGRP AD 90 · metric 40** ✔ ตัวลวง `/28` `/27` `25` ถูกต้อง
- **V4#2056** ลูกศรชี้ในภาพ: A = `B*` = route source · B = `20` ใน [20/0] = administrative distance · C = `0` = metric · D = `6w3d` = timestamp · E = `GigabitEthernet0/0/1` = outbound interface ✔ ตัวลวง `next-hop interface` กับ `subnet mask` ถูกต้อง (บรรทัดนี้ไม่มี mask แยก และ next-hop เขียนเป็น IP ไม่ใช่ interface)
- **V4#2057** (ไม่มีภาพ) ตรวจ broadcast ทีละใบ: `10.63.255.255/10` → /10 บล็อกละ 64 ในออกเตตที่ 2 → 10.0.0.0–10.63.255.255 ✔ · `172.16.255.39/29` → บล็อก 32–39 ✔ · `172.20.255.255/16` ✔ · `192.168.255.127/25` → บล็อก .0–.127 ✔ · ตัวลวง `10.1.255.254/24` (broadcast จริงคือ .255) และ `192.168.1.10/24` ✔
- **V4#2059** (ไม่มีภาพ) ACL 107 `deny tcp 207.16.12.0 0.0.3.255 any eq http` → wildcard 0.0.3.255 ครอบ **207.16.12.0–207.16.15.255** ⭐ → บล็อกเฉพาะ `207.16.14.7:80` และ `207.16.13.14 http` · ส่วน `207.16.15.9:23` อยู่ในช่วง IP แต่พอร์ตไม่ใช่ 80 จึงผ่าน · `207.16.32.14` กับ `207.16.16.14` อยู่นอกช่วง จึงผ่านด้วย `permit ip any any` ✔
- **V4#1789** ไล่ AD ครบ 5 ระดับ: static(1) → eBGP(20) → EIGRP(90) → OSPF(110) → iBGP(200) ✔
- **V4#1826** อ่าน AD จากวงเล็บ: [120/2]=RIP · [110/84437]=OSPF · [90/3184437]=EIGRP · [1/1]=static · 207.165.200.248/30 เป็น directly connected จึงเป็นตัวลวง ✔ ตรงกับ V1#861 · V4#1292
- **V4#1761** คำนวณ 4 อินเทอร์เฟซ + ตัวลวง 3 ใบ ✔ ตรงกับ V1#564 · V4#132 · ส่วน **V4#1455** เป็นเวอร์ชันไม่มีตัวลวง ซึ่งโจทย์ก็ไม่ได้เขียนว่า "Not all" จึงถูกต้อง
- **V4#1682** ภาพเป็นแบบที่ **วาง `rogue detector mode` ลงช่องไว้แล้ว 1 ช่อง** เหลือ 5 ช่องว่าง — คลังเก็บครบ 6 คู่ ถูกต้อง ✔ ตรงกับ V1#431
- **V4#1625 · V4#1668** ipconfig — MAC จริงคือ `B8-76-3F-7C-57-DF` ส่วน `1A-76-3F-7C-57-DF` เป็นของ Wi-Fi Direct Virtual Adapter ที่ Media disconnected ✔
- **V4#1846** ตัวลวง `operates on OSI Layer 5` ถูกต้อง (TCP/UDP อยู่ Layer 4 ทั้งคู่) ✔
- **V4#2077** ตัวลวง `uses stateful packet inspection` ถูกต้อง — เป็นงานของไฟร์วอลล์ ไม่ใช่คุณสมบัติของ TCP/UDP ✔
- **V4#2058 · V4#2060** (ไม่มีภาพ) hierarchical LAN 3 ชั้น และลำดับ DHCP DORA ตรงมาตรฐาน ✔

#### ข้อที่เป็นสำเนาข้ามคลัง เทียบเนื้อคำตอบกับต้นฉบับแล้วตรงกันทุกใบ

จาก V3: V4#1398(=V3#30) · V4#1409(=V3#100) · V4#1412(=V3#106) · V4#1415(=V3#122) · V4#1420(=V3#139) · V4#1423(=V3#154) · V4#1435(=V3#246) · V4#1439(=V3#313)

จาก V2: V4#1442(=V2#38) · V4#1443(=V2#44) · V4#1444(=V2#47) · V4#1455(=V2#132) · V4#1481(=V2#436) · V4#1482(=V2#438) · V4#1485(=V2#466) · V4#1491(=V2#498) · V4#1520(=V2#720) · V4#1522(=V2#730) · V4#1524(=V2#792) · V4#1525(=V2#806)

จาก V1: V4#1527(=V1#8) · V4#1528(=V1#10) · V4#1555(=V1#112) · V4#1559(=V1#132) · V4#1560(=V1#133) · V4#1588(=V1#232) · V4#1590(=V1#234) · V4#1591(=V1#236) · V4#1624(=V1#302) · V4#1625(=V1#307) · V4#1635(=V1#336) · V4#1645(=V1#357) · V4#1651(=V1#369) · V4#1667(=V1#397) · V4#1668(=V1#399) · V4#1676(=V1#414) · V4#1682(=V1#431) · V4#1689(=V1#449) · V4#1715(=V1#490) · V4#1717(=V1#492) · V4#1731(=V1#511) · V4#1739(=V1#521) · V4#1743(=V1#525) · V4#1753(=V1#543) · V4#1754(=V1#544) · V4#1757(=V1#551) · V4#1761(=V1#564) · V4#1762(=V1#565) · V4#1776(=V1#671) · V4#1784(=V1#689) · V4#1789(=V1#697) · V4#1810(=V1#781) · V4#1826(=V1#861) · V4#1846(=V1#946) · V4#1855(=V1#968) · V4#1864(=V1#985) · V4#1890(=V1#1032)

ข้อใหม่ของ V4 ที่ไม่มีสำเนา: V4#2056 · V4#2057 · V4#2058 · V4#2059 · V4#2060 · V4#2076 · V4#2077

---

## สรุปผลรวมทั้ง 468 ข้อ

| หัวข้อ | จำนวน |
|---|---|
| ข้อที่ตรวจ (เปิด exhibit จริงทุกใบที่มี) | **468 / 468** |
| ภาพ exhibit ที่เปิด | 461 ข้อมีภาพ (ในนั้น 7 ข้อมีสองใบ) · 7 ข้อไม่มีภาพ |
| 🔴 **เฉลยผิด — แก้แล้ว** | **1 กรณี (3 สำเนา): AAA reverse Telnet · V1#769 · V2#732 · V4#667** |
| 🟠 **explanation คลาดเคลื่อน — แก้แล้ว** | **1 ข้อ: V4#897 (ต้นฉบับพิมพ์ 209.165.200.30 แทน .230)** |
| 🟡 ข้อบกพร่องเชิงโครงสร้าง (เฉลยถูก แต่ขาดช่องตัวลวง) | **11 ข้อ** — ยังไม่แก้ รอการตัดสินใจ |
| ⚪ เฉลยขัดแย้งกันข้ามคลัง | **0** (หลังแก้ reverse Telnet แล้ว) |

### 🟡 รายการ 11 ข้อที่ขาดช่องตัวลวง (เฉลยที่วางถูกต้องแล้วทุกข้อ)

โจทย์เขียนว่า *"Not all … are used"* และ **ภาพ exhibit มีไอเทมส่วนเกินจริง** แต่ในคลังไม่มีช่อง `ไม่ใช้ (ตัวลวง)`
ผู้ฝึกจึงเห็นไอเทมพอดีกับช่อง ทำให้ข้อง่ายผิดปกติและขัดกับข้อความในโจทย์เอง (สำเนาในคลังอื่นของข้อเดียวกันมีตัวลวงครบ)

| ข้อ | ตัวลวงที่ควรมี (ตามภาพ) | สำเนาที่มีตัวลวงครบ |
|---|---|---|
| V4#416 | OSPF process ID | V1#43 · V2#554 |
| V4#480 | 255.255.255.252 | V3#30 · V4#1398 |
| V4#592 | associates hostnames to IP addresses · uses authoritative servers for record keeping · provides local control for network segments using a client-server scheme | V1#236 · V2#501 · V2#673 |
| V4#900 | 255.255.248.0 · 255.255.255.224 | V3#68 |
| V4#909 | ip route 10.10.13.10 255.255.255.255 10.10.10.1 · ip route 10.10.14.10 255.255.255.255 10.10.10.6 | V1#746 · V3#154 · V4#1423 |
| V4#975 | It records the duration of each connection. · It supports User Access Reporting. | V3#122 · V4#1415 |
| V4#989 | It records the amount of network resources consumed by the user. · It tracks the services that a user is using. | V3#141 |
| V4#992 | It performs user validation via TACACS+. · It verifies "who you are". | V4#1130 |
| V4#1001 | communicates between the SDN controller and the data plane · supports network virtualization protocols · uses OpenFlow to interface between the data and control planes | V3#281 |
| V4#1018 | uses agents to manage hosts · requires clients to pull configurations from the server | V3#55 |
| V2#175 | It forwards only IP EtherType frames. · It supports LWAPP tunneling within Ethernet frames and UDP packets. | V4#175 |

> ⚠️ การเติมตัวลวงเหล่านี้ต้อง **เพิ่มข้อความไอเทมใหม่** เข้าไปในคลัง ซึ่งกฎ audit ข้อ 3 ห้ามแก้ข้อความไอเทม
> จึงยังไม่ดำเนินการ — รอคำสั่งว่าจะให้เติมหรือปล่อยไว้ตามเดิม

### 📌 บทเรียนจากการตรวจ: "สำเนาข้ามคลังที่ตอบไม่เหมือนกัน ≠ เฉลยขัดกัน"

พบหลายกรณีที่ประโยคเดียวกันถูกวางคนละกล่องในคนละใบ แต่ **ถูกต้องทั้งคู่** เพราะกล่องที่โจทย์เปิดมาต่างกัน:

1. **AAA** — ชุด 6 ประโยคถูกออกแบบเป็น 3 คู่ (Authn / Authz / Acct) แล้วแต่ละใบเปิดแค่ 2 กล่อง คู่ที่สามจึงกลายเป็นตัวลวง
   (เคสนี้มีทั้งที่ถูก และที่ **ผิดจริง** คือ reverse Telnet ที่แก้ไปแล้ว)
2. **สายเคเบิล** — `is ideal over longer distances with little loss of integrity` = single-mode เมื่อคู่กับ copper (V4#1088 · #1137 · #1329)
   แต่ = multimode เมื่อคู่กับ single-mode (V4#1093) เพราะช่อง SMF ถูกใช้ไปแล้วโดยประโยคที่ชี้ SMF แบบไม่มีทางตีความอื่น
3. **WLC virtual interface** — ป้ายช่องเขียนต่างกัน (`mobility management` vs `guest authentication`) แต่คำตอบเดียวกัน
4. **AP architecture** — ใบที่เปิด Cloud+Lightweight / Autonomous+Lightweight / Autonomous+Cloud ทำให้ตัวลวงเป็นคนละใบทุกครั้ง

วิธีตรวจที่ใช้: **เทียบชุด "ไอเทม → คำตอบ" โดยไม่สนชื่อป้ายช่อง แล้วดูก่อนเสมอว่ากล่องที่โจทย์เปิดมาเหมือนกันหรือไม่**
