// node siblings.js "<prompt fragment>"   — find the same question in every bank
// before deciding a key is wrong. Shows each copy's options, key and exhibit hash.
const fs = require('fs');
const crypto = require('crypto');
const { all, imagePaths } = require('./lib.cjs');

const needle = (process.argv[2] || '').toLowerCase();
if (!needle) {
  console.error('usage: node siblings.js "<prompt fragment>"');
  process.exit(1);
}

const imgs = imagePaths();
const hash = (v) => {
  if (!v) return '—';
  try {
    return crypto.createHash('md5').update(fs.readFileSync(imgs[v])).digest('hex').slice(0, 8);
  } catch {
    return 'missing';
  }
};

for (const [bank, qs] of Object.entries(all())) {
  for (const q of qs) {
    if (!q.prompt.toLowerCase().includes(needle)) continue;
    console.log(`\n--- ${bank} #${q.id}   exhibit=${hash(q.image)}`);
    console.log('    ' + q.prompt.replace(/\s+/g, ' ').slice(0, 170));
    if (q.kind === 'drag') q.categories.forEach((c) => console.log(`    [${c.name}] ${c.items.join(' ; ')}`));
    else q.options.forEach((o) => console.log(`    ${q.correct.includes(o.key) ? '*' : ' '}${o.key}. ${o.text}`));
  }
}
