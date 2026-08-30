// node audit.js [from] [to] [bank]  — structural contradictions only.
// HARD = a real defect. SOFT = explanation-style noise, safe to ignore.
const { load } = require('./lib.cjs');

const from = +process.argv[2] || 1;
const to = +process.argv[3] || 1e9;
const qs = load(process.argv[4] || 'v4').filter((q) => q.id >= from && q.id <= to);

const hard = [];
const soft = [];

for (const q of qs) {
  if (q.kind === 'drag') {
    const items = q.categories.flatMap((c) => c.items);
    if (new Set(items).size !== items.length) hard.push(`#${q.id} [DUP_ITEM] same item in two buckets`);
    if (q.categories.some((c) => !c.items.length)) soft.push(`#${q.id} [EMPTY_BUCKET]`);
    continue;
  }

  const keys = q.options.map((o) => o.key);
  for (const c of q.correct) if (!keys.includes(c)) hard.push(`#${q.id} [BADKEY] correct ${c} not in ${keys}`);
  if (new Set(keys).size !== keys.length) hard.push(`#${q.id} [DUPKEY] ${keys}`);
  if (!q.correct.length) hard.push(`#${q.id} [NOKEY] no correct answer`);
  if (q.kind === 'single' && q.correct.length !== 1) hard.push(`#${q.id} [CNT] single but ${q.correct.length} keyed`);
  if (q.kind === 'multi' && q.correct.length < 2) hard.push(`#${q.id} [CNT] multi but ${q.correct.length} keyed`);

  const m = /\(Choose (two|three|four|2|3|4)\.?\)/i.exec(q.prompt);
  if (m) {
    const n = { two: 2, three: 3, four: 4, 2: 2, 3: 3, 4: 4 }[m[1].toLowerCase()];
    if (q.correct.length !== n) hard.push(`#${q.id} [CHOOSE] prompt says ${n}, keyed ${q.correct.join('')}`);
    if (q.kind !== 'multi') hard.push(`#${q.id} [KIND] Choose ${n} but kind=${q.kind}`);
  } else if (q.kind === 'multi' && !q.ungraded) {
    hard.push(`#${q.id} [KIND] multi with no "(Choose N)" -> keyed ${q.correct.join('')}`);
  }

  // every ✅ line, collected: does any of them claim a letter that is not keyed?
  const ok = [...q.explanation.matchAll(/✅[^\n]*?ทำไม\s*([A-Z][A-Z,\s และ\/\+]*?)\s*ถูก/g)]
    .flatMap((x) => x[1].match(/[A-Z]/g) || []);
  const claimed = [...new Set(ok)].filter((l) => !q.correct.includes(l));
  if (claimed.length) hard.push(`#${q.id} [EXPL_CLAIMS] ✅ says ${claimed.join(',')} is right but key=${q.correct.join('')}`);
  if (!ok.length && !q.ungraded) soft.push(`#${q.id} [NO_OK] no "✅ ทำไม X ถูก" line`);
  else {
    const un = q.correct.filter((c) => !ok.includes(c));
    if (un.length) soft.push(`#${q.id} [UNCOVERED] ✅ lines skip ${un.join(',')}`);
  }
}

console.log(`=== HARD (real defects): ${hard.length}`);
hard.forEach((l) => console.log(l));
console.log(`\n=== SOFT (style only): ${soft.length}`);
if (process.argv.includes('--soft')) soft.forEach((l) => console.log(l));
else console.log('(pass --soft to list them)');
