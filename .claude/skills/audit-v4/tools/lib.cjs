// Shared loader: turns the .ts banks into requireable .js by stubbing the
// image imports, and resolves each image variable to its file on disk.
const fs = require('fs');
const path = require('path');
const os = require('os');

const SRC = 'c:/CCNA-EXAM/src/data';
const OUT = path.join(os.tmpdir(), 'ccna-audit-v4');
const FILES = { v1: 'questions', v2: 'questionsV2', v3: 'questionsV3', v4: 'questionsV4' };

function outDir() {
  fs.mkdirSync(OUT, { recursive: true });
  return OUT;
}

function load(bank) {
  const name = FILES[bank];
  let src = fs.readFileSync(`${SRC}/${name}.ts`, 'utf8');
  src = src.replace(/^import\s+type\s+.*$/m, '');
  src = src.replace(/^import\s+(\w+)\s+from\s+'[^']*'$/gm, "const $1 = '$1';");
  src = src.replace(/export const \w+: Question\[\] =/, 'const Q =');
  src += '\nmodule.exports = Q;\n';
  const p = path.join(outDir(), `${bank}.cjs`);
  fs.writeFileSync(p, src);
  return require(p);
}

/** image-variable name -> absolute png path, for every bank */
function imagePaths() {
  const map = {};
  for (const name of Object.values(FILES)) {
    const src = fs.readFileSync(`${SRC}/${name}.ts`, 'utf8');
    for (const m of src.matchAll(/^import\s+(\w+)\s+from\s+'(\.\.\/assets\/[^']+)'/gm)) {
      map[m[1]] = path.resolve(`${SRC}/${m[2]}`).replace(/\\/g, '/');
    }
  }
  return map;
}

const all = () => Object.fromEntries(Object.keys(FILES).map((b) => [b, load(b)]));
const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

module.exports = { load, all, imagePaths, outDir, norm, OUT };
