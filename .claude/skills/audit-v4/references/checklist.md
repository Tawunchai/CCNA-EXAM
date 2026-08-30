# Per-question checklist and the facts these 2085 questions lean on

## Checklist

1. Answer it yourself from fundamentals **before** reading the key.
2. Does the prompt contain an inline exhibit summary? Verify it against the
   image — one of those summaries was flat wrong (#1728).
3. If there's an `image`, open it unless the explanation already quotes
   concrete values *and* you reached the same answer independently.
4. `(Choose N)` — does N match `correct.length`?
5. Longest-prefix questions: compute every candidate range and check the
   destination actually falls inside it. Most planted errors are a route that
   *looks* like it covers the destination but stops short.
6. Floating-static questions: is the AD strictly greater than the protocol it
   backs up? (static 1 · eBGP 20 · EIGRP 90 · OSPF 110 · RIP 120 · EIGRP ext
   170 · iBGP 200)
7. Drag items: does every bucket have the right count, and are the unused
   options parked in `ไม่ใช้ (ตัวลวง)`? A distractor in no bucket never renders.
8. Before calling a key wrong, run `siblings.cjs` — the same question usually
   exists in V1/V2/V3 and they should all agree.

## Administrative distance

| Source | AD |
|---|---|
| Connected / Local | 0 |
| Static | 1 |
| eBGP | 20 |
| EIGRP internal | 90 |
| IGRP | 100 |
| OSPF | 110 |
| IS-IS | 115 |
| RIP | 120 |
| EIGRP external | 170 |
| iBGP | 200 |
| Unreachable | 255 |

Selection order: **longest prefix → AD → metric.** AD only decides between
routes with the *same* prefix length. Equal AD *and* equal metric ⇒ load-share.

## Subnetting

Block size = 256 − mask octet. `/25`=128 `/26`=64 `/27`=32 `/28`=16 `/29`=8
`/30`=4. Usable hosts = 2^h − 2. Last usable = broadcast − 1.
A point-to-point link wants /30; "leave two spare addresses" wants /29.

## EtherChannel

| | on | auto | desirable | passive | active |
|---|---|---|---|---|---|
| **on** | ✔ | ✘ | ✘ | ✘ | ✘ |
| **auto** | ✘ | ✘ | ✔ | ✘ | ✘ |
| **desirable** | ✘ | ✔ | ✔ | ✘ | ✘ |
| **passive** | ✘ | ✘ | ✘ | ✘ | ✔ |
| **active** | ✘ | ✘ | ✘ | ✔ | ✔ |

PAgP = auto/desirable (Cisco). LACP = passive/active (802.3ad, "industry
standard"). WLC LAG requires `channel-group mode on`. Layer 3 bundle needs
`no switchport` on the port-channel.

## DTP

trunk+trunk ✔ · trunk+desirable ✔ · trunk+auto ✔ · desirable+desirable ✔ ·
desirable+auto ✔ · **auto+auto ✘** · nonegotiate+dynamic ✘

## STP

Root = lowest bridge ID = **priority first, then MAC**. Priority is a multiple
of 4096, default 32768. `root primary` sets 24576 (or 4096 below the current
root) — only `priority 0` *guarantees* root.

Classic states: blocking (receives BPDUs) · listening (**processes** BPDUs, no
learning) · learning · forwarding · disabled.
Rapid PVST+: discarding · learning · forwarding. PortFast skips learning.
`forward-time` sets the listening+learning duration.

## Port security

Defaults the moment `switchport port-security` is entered: `maximum 1`,
`violation shutdown`, dynamic (non-sticky) learning. Requires an access or
static-trunk port.

| Violation | drops | counter | syslog/SNMP | port |
|---|---|---|---|---|
| protect | ✔ | ✘ | ✘ | up |
| restrict | ✔ | ✔ | ✔ | up |
| shutdown | ✔ | ✔ | ✔ | err-disabled |

Sticky writes learned MACs into running-config; they don't age out and survive
link-down.

## OSPF

Must match: area ID, hello/dead, MTU, authentication, stub flag, subnet.
Must differ: router ID. Need not match: process ID, priority, cost.
Stuck in EXSTART/EXCHANGE ⇒ MTU mismatch. Router ID: manual → highest loopback
→ highest active interface. Cost = reference bandwidth ÷ interface bandwidth
(reference default 100 Mbps). `priority 0` = never DR. Point-to-point network
type ⇒ no DR/BDR election.

## Wireless

2.4 GHz non-overlapping: **1, 6, 11**. 5 GHz: 23 channels.
WPA2 = AES/CCMP-128 · WPA3-Personal = SAE + CCMP-128 · WPA3-Enterprise 192-bit
= GCMP-256. PMF required for WPA3. 802.11r = Fast Transition. SSID ≤ 32 chars,
case-sensitive.

WLC interfaces: management (in-band) · service port (out-of-band) · virtual
(guest auth, DHCP relay, mobility) · dynamic (mapped to a WLAN) · AP-manager
(CAPWAP tunnel source). Console = out-of-band asynchronous. 5 concurrent GUI /
Telnet sessions.

AP modes: local (two CAPWAP tunnels; monitors other channels) · FlexConnect
(local switching, survives WAN loss, needs a trunk port when tagging VLANs) ·
monitor (RFID/IDS sensor) · sniffer · rogue detector (watches the *wired* side)
· bridge/mesh (point-to-multipoint root) · SE-Connect.

## Syslog

0 emergency · 1 alert · 2 critical · 3 error · 4 warning · 5 notification
(interface up/down, device restart) · 6 informational · 7 debugging.
`logging trap N` sends 0..N.

## QoS

Classification → marking (DSCP inside the ToS byte) → policing (drops or
remarks excess) / shaping (buffers and delays excess) → queuing (FIFO, PQ =
four priority queues, CQ = byte count per queue, WFQ = min bandwidth per flow,
CBWFQ = min bandwidth per class, LLQ = CBWFQ + strict priority for voice) →
WRED (drops low priority early to avoid tail drop).

## IPv6

`2000::/3` global unicast · `FC00::/7` unique local (`FD00::/8` in practice) ·
`FE80::/10` link-local · `FF00::/8` multicast · `::1` loopback · `2001:DB8::/32`
documentation. EUI-64: split the MAC, insert `FFFE`, flip the 7th bit —
**but several items in this bank offer no bit-flipped option, so the intended
answer is simply the one with `FFFE` inserted; the explanations say so.**
OSPFv3 peers over link-local, `FF02::5`/`FF02::6`, enabled per interface.
