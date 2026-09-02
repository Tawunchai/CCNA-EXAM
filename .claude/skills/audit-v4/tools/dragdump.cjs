const { all, imagePaths } = require('./lib.cjs');
const banks = all();
const imgs = imagePaths();
const LAB = ['v1','v2','v3','v4'];
const list = [];
for (const b of LAB) {
  banks[b].filter(q => q.kind === 'drag').forEach(q => list.push({ bank: b.toUpperCase(), q }));
}
const from = Number(process.argv[2] || 1), to = Number(process.argv[3] || list.length);
const only = process.argv[4]; // optional bank filter
let n = 0;
for (const e of list) {
  n++;
  if (only && e.bank !== only.toUpperCase()) continue;
  if (n < from || n > to) continue;
  const q = e.q;
  console.log(`\n===== [${n}] ${e.bank} #${q.id} ${q.image ? 'IMG=' + (imgs[q.image]||q.image) : '(no image)'}${q.image2 ? ' IMG2=' + (imgs[q.image2]||q.image2) : ''}`);
  console.log('PROMPT: ' + q.prompt.replace(/\n/g, ' | '));
  q.categories.forEach(c => console.log(`  [${c.name}] :: ${c.items.join(' ;; ')}`));
  console.log('EXPL: ' + (q.explanation||'').replace(/\n/g,' | '));
}
console.error(`total drag = ${list.length}`);
