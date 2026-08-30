// node dump.js <from> <to> [bank]   — compact review listing
// Marks the keyed option with *, and shows the exhibit file so you can Read it.
const { load, imagePaths } = require('./lib.cjs');

const from = +process.argv[2];
const to = +process.argv[3] || from;
const bank = process.argv[4] || 'v4';
const qs = load(bank);
const imgs = imagePaths();

for (const q of qs.filter((x) => x.id >= from && x.id <= to)) {
  const ex = [q.image, q.image2].filter(Boolean).map((v) => imgs[v] || v);
  const tag = ex.length ? ` [IMG ${ex.join(' + ')}]` : '';
  if (q.kind === 'drag') {
    console.log(`\n#${q.id} DRAG${tag} ${q.prompt.replace(/\s+/g, ' ')}`);
    for (const c of q.categories) console.log(`   [${c.name}] :: ${c.items.join(' ; ')}`);
    continue;
  }
  console.log(`\n#${q.id} ${q.kind}${tag} ${q.prompt.replace(/\s+/g, ' ')}`);
  for (const o of q.options) {
    console.log(`   ${q.correct.includes(o.key) ? '*' : ' '}${o.key}. ${o.text.replace(/\s+/g, ' ')}`);
  }
  console.log(`   KEY=${q.correct.join(',')}`);
}
