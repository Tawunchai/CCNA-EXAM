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
| V2 ลำดับ 36–85 | ⏳ ยังไม่ตรวจ | — |
| V3 ทั้ง 49 | ⏳ ยังไม่ตรวจ | — |
| V4 ทั้ง 219 | ⏳ ยังไม่ตรวจ | — |
| **รวม** | **150 / 468** | **เฉลยผิด 1 ข้อ (3 สำเนา) — แก้แล้ว** |

> **ทำต่อจาก: V2 ลำดับที่ 36 (จากทั้งหมด 85) — เท่ากับลำดับรวมที่ 151 จาก 468**

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
