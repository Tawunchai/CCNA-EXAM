// node xcheck.js  — cross-bank answer conflicts.
// Only reports duplicates whose option set AND exhibit are identical, so
// anything printed is a genuine contradiction rather than a variant.
const fs = require('fs');
const crypto = require('crypto');
const { all, imagePaths, norm } = require('./lib.cjs');

const banks = all();
const imgs = imagePaths();
const cache = {};
const hash = (v) => {
  if (!v) return 'none';
  if (cache[v]) return cache[v];
  try {
    return (cache[v] = crypto.createHash('md5').update(fs.readFileSync(imgs[v])).digest('hex'));
  } catch {
    return (cache[v] = 'missing:' + v);
  }
};

const answerSig = (q) =>
  q.kind === 'drag'
    ? q.categories.map((c) => norm(c.name) + '=' + c.items.map(norm).sort().join('|')).sort().join(' // ')
    : q.correct.map((c) => norm((q.options.find((o) => o.key === c) || { text: '?' }).text)).sort().join(' | ');

const optionSig = (q) =>
  q.kind === 'drag'
    ? q.categories.flatMap((c) => c.items).map(norm).sort().join('|')
    : q.options.map((o) => norm(o.text)).sort().join('|');

const groups = {};
for (const [bank, qs] of Object.entries(banks))
  for (const q of qs) {
    const k = norm(q.prompt).slice(0, 220);
    if (k) (groups[k] = groups[k] || []).push({ bank, q });
  }

let n = 0;
for (const g of Object.values(groups)) {
  if (g.length < 2) continue;
  if (new Set(g.map((x) => x.q.kind === 'drag')).size > 1) continue;
  if (new Set(g.map((x) => answerSig(x.q))).size === 1) continue;
  if (new Set(g.map((x) => hash(x.q.image))).size !== 1) continue; // different exhibit => different question
  if (new Set(g.map((x) => optionSig(x.q))).size !== 1) continue; // different options => different question
  n++;
  console.log('\n### ' + g.map((x) => x.bank + '#' + x.q.id).join('  vs  '));
  console.log('P: ' + g[0].q.prompt.replace(/\s+/g, ' ').slice(0, 200));
  g.forEach((x) => console.log('   ' + x.bank + '#' + x.q.id + ' -> ' + answerSig(x.q).slice(0, 200)));
}
console.log('\nTOTAL GENUINE CONFLICTS:', n);
