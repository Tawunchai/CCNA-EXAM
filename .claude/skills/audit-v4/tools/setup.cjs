// Rebuilds the requireable copies of all four banks and prints a summary.
const { all, imagePaths, OUT } = require('./lib.cjs');

const banks = all();
const v4 = banks.v4;
const imgs = imagePaths();

const missing = v4.filter((q) => q.image && !imgs[q.image]).map((q) => q.id);

console.log('scratch dir :', OUT);
for (const [k, qs] of Object.entries(banks)) {
  console.log(`${k.padEnd(3)} : ${String(qs.length).padStart(4)} questions`);
}
console.log('');
console.log('V4 kinds    :', ['single', 'multi', 'drag'].map((k) => `${k}=${v4.filter((q) => q.kind === k).length}`).join('  '));
console.log('V4 exhibits :', v4.filter((q) => q.image).length, '(+', v4.filter((q) => q.image2).length, 'second exhibits)');
console.log('V4 ungraded :', v4.filter((q) => q.ungraded || /ไม่คิดคะแนน|\bSIMULATION\b/.test(q.prompt)).length);
console.log('V4 already carrying a ⚠️ key-correction note :', v4.filter((q) => /เฉลยต้นฉบับ|แก้เฉลย|แก้โจทย์/.test(q.explanation)).length);
if (missing.length) console.log('!! image var with no file on disk:', missing.join(', '));
