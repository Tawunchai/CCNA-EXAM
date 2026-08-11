import type { Question } from '../types'

/**
 * The six exam domains of the Cisco CCNA 200-301 blueprint, with the official
 * score weighting. The weights double as the question quota for a 100-question
 * mock exam, which is why a raw "correct / 100" percentage is already a
 * blueprint-weighted score — no extra weighting maths needed at grading time.
 */
export type DomainId = 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6'

export interface Domain {
  id: DomainId
  code: string
  name: string
  nameTh: string
  /** Percent of the exam, per the Cisco blueprint. Sums to 100. */
  weight: number
}

export const DOMAINS: Domain[] = [
  { id: 'd1', code: '1.0', name: 'Network Fundamentals', nameTh: 'พื้นฐานเครือข่าย', weight: 20 },
  { id: 'd2', code: '2.0', name: 'Network Access', nameTh: 'การเข้าถึงเครือข่าย', weight: 20 },
  { id: 'd3', code: '3.0', name: 'IP Connectivity', nameTh: 'การเชื่อมต่อ IP / เราต์ติ้ง', weight: 25 },
  { id: 'd4', code: '4.0', name: 'IP Services', nameTh: 'บริการ IP', weight: 10 },
  { id: 'd5', code: '5.0', name: 'Security Fundamentals', nameTh: 'พื้นฐานความปลอดภัย', weight: 15 },
  { id: 'd6', code: '6.0', name: 'Automation and Programmability', nameTh: 'ระบบอัตโนมัติและการเขียนโปรแกรม', weight: 10 },
]

export const DOMAIN_BY_ID: Record<DomainId, Domain> = DOMAINS.reduce(
  (acc, d) => ((acc[d.id] = d), acc),
  {} as Record<DomainId, Domain>,
)

/**
 * The classifier reads the question stem first and only falls back to the
 * answer text when the stem alone matches nothing. Distractors routinely
 * borrow vocabulary from other domains — "What are the two functions of
 * SSIDs?" has a wrong answer reading "used exclusively with controller-based
 * Wi-Fi networks", which on a single combined pass drags a wireless question
 * into 6.0. Reading the stem first keeps the question in the domain it is
 * actually *asking* about; the fallback still rescues the many "Refer to the
 * exhibit. Which configuration…" stems that carry no topic word at all.
 *
 * The Thai explanation is excluded from both passes — it name-drops
 * neighbouring topics ("AD ของ EIGRP = 90, BGP = 20 …") often enough to
 * mislabel a question.
 */
function stemText(q: Question): string {
  return q.prompt.toLowerCase()
}

function fullText(q: Question): string {
  const parts: string[] = [q.prompt]
  if (q.kind === 'drag') {
    for (const c of q.categories) {
      parts.push(c.name)
      parts.push(...c.items)
    }
  } else {
    for (const o of q.options) parts.push(o.text)
  }
  return parts.join(' \n ').toLowerCase()
}

/**
 * Ordered rules — first match wins. Order matters far more than the individual
 * patterns do, because the blueprint itself overlaps: a WPA2 question is
 * wireless *and* security (5.0 owns it), `ip dhcp snooping` is DHCP *and*
 * Layer 2 security (5.0 owns it), an SSID question is wireless principles
 * (1.0) until it turns into WLC GUI configuration (2.0). The narrow,
 * unambiguous patterns are therefore listed before the broad ones.
 */
const RULES: Array<[DomainId, RegExp]> = [
  // ── 5.0 first: wireless security outranks both "wireless" and "security" ──
  [
    'd5',
    /\bwpa\b|\bwpa2\b|\bwpa3\b|\bwep\b|\btkip\b|ccmp|\bgcmp|pre-?shared key|\bpsk\b|\bsae\b|opportunistic wireless encryption|\bowe\b|protected management frame|\bpmf\b|802\.11w|wireless (security|encryption)|perfect forward secrecy|encryption (type|method).*(wlan|wireless)|auth key mgmt|authentication key management/,
  ],
  // ── 5.0: Layer 2 security ──
  [
    'd5',
    /port[- ]security|dhcp snooping|snooping binding|dynamic arp inspection|arp inspection|ip source guard|spurious dhcp|802\.1x|mac authentication bypass|black hole vlan/,
  ],

  // ── 6.0: automation, SDN, APIs, data formats, AI ──
  [
    'd6',
    /\bjson\b|rest api|restful|rest request|rest response|rest[- ]based|restconf|netconf|\byang\b|\byaml\b|ansible|puppet|\bchef\b|terraform|playbook|\bapis?\b|northbound|southbound|\bsdn\b|software[- ]defined|sd-access|dna center|controller[- ]based|controller based|traditional network|network automation|\bautomation\b|automated network|automated|programmab|machine learning|artificial intelligence|generative ai|predictive ai|\bai\b|data model|orchestrat|\bcrud\b|idempot|control plane|data plane|\bplane\b (is|that)|which plane|virtual extensible lan|\bvxlan\b|\blisp\b|underlay|overlay|openflow|opflex|openstack|configuration management|agentless|config(uration)? (push|pull)|which structure does the word|beginning with line \d|\bline \d+ (of|within|in) (the|this)|missing from this output for it to be executed/,
  ],

  // ── 1.0: wireless *principles* (RF, channels, standards) before WLC gear ──
  [
    'd1',
    /nonoverlapping channel|non-overlapping channel|2\.4[- ]?ghz|5[- ]?ghz|802\.11[abgnx]|802\.11ac|802\.11ax|radio frequency|\brf\b|channel bonding|how is noise defined|wi-?fi.*(noise|interference)|(purpose|functions?|characteristics?|role)s? of (an? |the )?(ssid|service-set|service set)|maximum length of characters.*ssid/,
  ],

  // ── 2.0: wireless infrastructure + WLC/AP management ──
  [
    'd2',
    /wireless lan controller|\bwlc\b|access point|\baps?\b|capwap|lwapp|split[- ]mac|autonomous|lightweight|flexconnect|officeextend|mesh|sniffer mode|rogue detector|monitor mode|ap[- ]manager|service port|dynamic interface|virtual interface|\blag\b|band select|\bdtim\b|rx-sop|aironet|client exclusion|session timeout|mac filtering|coverage (cell|hole)|\brrm\b|\bwlan\b|\bssid\b|wireless client|web passthrough|wi-fi direct|p2p block|aireos|controller management pages/,
  ],

  // ── 5.0: the rest of security ──
  [
    'd5',
    /access[- ]list|access-group|access-class|\bacl\b|\baaa\b|radius|tacacs|authentication|authorization|accounting|\bvpn\b|ipsec|\bgre\b|multifactor|multi-factor|biometric|\bpki\b|certificate|\brsa\b(?!.*key generate)|zero-day|phishing|social engineering|malware|\bddos\b|denial of service|syn flood|brute force|man-in-the-middle|man in the middle|threat|vulnerabilit|exploit|attack|user awareness|physical access control|security program|password (policy|complexity|manager|attack)|enable secret|enable password|service password-encryption|username .*secret|local passwords?|scrypt|next-generation (firewall|ips)|intrusion (prevention|detection)|stateful inspection|firewall|honeypot|digest authentication|one-time password|security (policies|posture|program)|exec password|password for (console|telnet|vty)|passwords?:/,
  ],

  // ── 4.0: IP services ──
  [
    'd4',
    /\bnat\b|\bpat\b|nat pool|inside (local|global)|outside (local|global)|\boverload\b|\bntp\b|clock set|clock timezone|\bdhcp\b|helper-address|default-router|excluded-address|\bdns\b|domain name.*(resolution|server)|name resolver|requesting the ip address of the host|ip address of the host at www|snmp|\bmib\b|getbulk|syslog|logging (trap|level|monitor|console)|severity level|\bqos\b|quality of service|traffic (shaping|policing|prioriti)|shaping|policing|classification and marking|per-hop behavior|\bcbwfq\b|\bllq\b|\bwfq\b|\bwred\b|weighted random early detection|congestion (management|avoidance)|priority queue|\bftp\b|\btftp\b|\bssh\b|secure shell|crypto key generate|ip domain[- ]name|remote access.*(cli|management)|telnet/,
  ],

  // ── 3.0: IP connectivity / routing ──
  [
    'd3',
    /\bospf\b|\beigrp\b|\bbgp\b|\brip\b|\bis-is\b|routing table|route table|show ip route|ip route |ipv6 route |static route|default route|floating static|next[- ]hop|longest (prefix|match)|administrative distance|\bmetric\b|routing protocol|route selection|forward the packet|forwards? (a )?packets?|reach (the )?(network|host|destination)|\bdr\b.*\bbdr\b|designated router|router[- ]id|hello (interval|timer)|dead (interval|timer)|neighbor (adjacency|relationship)|\bfhrp\b|\bhsrp\b|\bvrrp\b|\bglbp\b|first hop redundancy|virtual (ip|gateway)|default gateway|gateway of last resort|load[- ]balanc.*(route|path|traffic)|equal cost|passive-interface|area 0|\bospfv2\b|\bospfv3\b|(to|through) which (router|device|interface)|which (router|interface|path|route|next hop)\b|how are the packets routed|destined (to|for) (host|network|ip)|send packets that are destined|forward traffic (to|with)|packets? (is|are) (sent|routed|forwarded)|reference bandwidth|routes are (learned|being exchanged)|set of routes|expected routes|(subnet mask|prefix length) (of|for) (the )?route|learned prefixes/,
  ],

  // ── 2.0: switching / Layer 2 access ──
  [
    'd2',
    /\bvlan\b|trunk|802\.1q|\bdot1q\b|native vlan|\bdtp\b|dynamic (auto|desirable)|switchport|access port|voice vlan|inter-?vlan|\bcdp\b|\blldp\b|discovery protocol|etherchannel|port[- ]channel|\blacp\b|\bpagp\b|channel-group|link aggregation|spanning[- ]tree|\bstp\b|\brstp\b|\bpvst\b|root (bridge|port|guard)|designated port|bpdu|portfast|uplinkfast|loop guard|bridge priority|\bvtp\b|err-?disable/,
  ],

  // ── 1.0: fundamentals (subnetting, IPv6, TCP/UDP, media, topology, virtualisation) ──
  [
    'd1',
    /subnet|\bmask\b|\bcidr\b|\/\d\d\b|255\.255|prefix length|\bipv4\b|\bipv6\b|eui-?64|link[- ]local|unique local|global unicast|anycast|multicast|\bslaac\b|address (block|range|space)|private (ip|address)|rfc 1918|\btcp\b|\budp\b|three-way handshake|\bmtu\b|\bosi\b|transport layer|\bcable\b|\bfiber\b|\bcopper\b|\butp\b|\bstp cable|\bsfp\b|1000base|straight[- ]through|crossover|rollover|duplex|speed mismatch|\bcrc\b|input errors|runts|giants|collision|late collision|interface (errors|condition|counter)|\bpoe\b|power over ethernet|three-tier|two-tier|spine[- ]and[- ]leaf|spine-leaf|collapsed[- ]core|\bwan\b (topology|architecture)|hub-and-spoke|point-to-point (wan|topology)|\bsoho\b|small office|home office|cloud[- ](computing|service|based|native)|cloud (topology|resources)|infrastructure-as-a-service|platform-as-a-service|software-as-a-service|\bsaas\b|\biaas\b|\bpaas\b|virtual machine|hypervisor|container|virtualization|mac address table|\bcam table\b|mac learning|frame flooding|floods? the frame|unknown destination mac|layer 2 switch|layer 3 switch|\bendpoint\b|role (and function )?of (a |an |the )?(router|switch|server|hub)|function of a server|ipconfig|ifconfig|netstat/,
  ],
]

const CACHE = new WeakMap<object, DomainId>()

function firstMatch(text: string): DomainId | null {
  for (const [domain, re] of RULES) {
    if (re.test(text)) return domain
  }
  return null
}

/** The JSON-vocabulary answer set — `array / object / key / value / string /
 * Boolean`. A stem like "In which structure does the word 'warning' directly
 * reside?" carries no topic word at all; the answer set is the only tell that
 * it is a 6.0 data-format question. */
const JSON_PRIMITIVES = new Set(['array', 'object', 'key', 'value', 'string', 'boolean', 'number', 'sequence'])

function looksLikeJsonStructure(q: Question): boolean {
  if (q.kind === 'drag') return false
  const hits = q.options.filter((o) => JSON_PRIMITIVES.has(o.text.trim().toLowerCase())).length
  return hits >= 3
}

/** Classify one question into a blueprint domain. Falls back to 1.0. */
export function classifyDomain(q: Question): DomainId {
  const hit = CACHE.get(q)
  if (hit) return hit
  const found = looksLikeJsonStructure(q) ? 'd6' : (firstMatch(stemText(q)) ?? firstMatch(fullText(q)) ?? 'd1')
  CACHE.set(q, found)
  return found
}
