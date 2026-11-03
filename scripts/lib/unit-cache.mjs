// Unit-test reuse for check:v4 (Nov 3, "make the full gate faster without dropping coverage"): a test file whose every
// input is byte-for-byte the same as in an earlier passing run is not run again; the check names how many it reused.
//
// A file's key hashes: the test file and every repo file it imports, followed through relative imports, re-exports,
// dynamic imports, `new URL(…)` and import.meta.glob (a glob takes its whole directory: a superset); the lockfile, the
// vitest config, its setup file and this file; the games level; and the value of every environment variable any of
// those files reads (process.env.X, env.X). Anything that could read an input the key can't see makes the file
// uncacheable, so it always runs: a file in the closure that reads the filesystem (readFileSync, readdirSync,
// existsSync…), fetches, runs a process, or imports a path built at run time.
//
// The engine is deterministic for a seed, and the key is every source the test executes, so a reused pass is the pass
// this run would have made. Flaky timing tests are the exception that matters: they were green once on these exact
// inputs, which is all a rerun could add. `--fresh` (and the nightly --full) runs everything.
//
// Passes are shared by every box in /mnt/project-files/harness/unit-pass.jsonl (append-only), else .v4-unit-pass.jsonl.
import { createHash } from 'node:crypto';
import { appendFileSync, existsSync, readFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const SHARED = '/mnt/project-files/harness';
export const passFile = root => (existsSync(SHARED) ? join(SHARED, 'unit-pass.jsonl') : join(root, '.v4-unit-pass.jsonl'));

const EXTS = ['', '.js', '.jsx', '.mjs', '.ts', '.tsx', '/index.js', '/index.jsx'];
const IMPORT = /(?:^|[^\w.])(?:import|export)\s[^'"`;]*?from\s*['"]([^'"]+)['"]|(?:^|[^\w.])import\s*['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)|new URL\(\s*['"]([^'"]+)['"]/g;
const DYNAMIC = /import\s*\(\s*[^'"\s)]/; // import(someVariable): a path the key can't follow
const GLOB = /import\.meta\.glob\(\s*(\[[^\]]*\]|['"][^'"]+['"])/g;
// reads the key can't see (a write, like the thinker's crash dump, can't change a result)
const UNSEEN = /\b(readFileSync|readdirSync|existsSync|statSync|lstatSync|readFile|readdir|opendir|createReadStream|readlinkSync)\b|\bfetch\(|child_process/;
const ENV = /\benv(?:\.|\[\s*['"])([A-Z][A-Z0-9_]+)/g;

function resolveFile(from, spec) {
  if (!spec.startsWith('.') && !spec.startsWith('/')) return null; // a package: the lockfile covers it
  const base = resolve(dirname(from), spec.split('?')[0]);
  for (const e of EXTS) { const f = base + e; if (existsSync(f) && statSync(f).isFile()) return f; }
  return undefined; // a relative import that doesn't resolve: uncacheable
}

/** Every file a test executes (repo-relative paths) and the env names they read; null when something is unseen. */
export function closure(root, testFile, memo = new Map()) {
  const files = new Set(), env = new Set(), stack = [resolve(root, testFile)];
  while (stack.length) {
    const f = stack.pop();
    if (files.has(f)) continue;
    files.add(f);
    let info = memo.get(f);
    if (!info) {
      const src = readFileSync(f, 'utf8');
      info = { deps: [], env: [...src.matchAll(ENV)].map(m => m[1]), bad: UNSEEN.test(src) || DYNAMIC.test(src) };
      for (const m of src.matchAll(IMPORT)) {
        const spec = m[1] || m[2] || m[3] || m[4];
        const r = resolveFile(f, spec);
        if (r === undefined) info.bad = true; else if (r) info.deps.push(r);
      }
      for (const m of src.matchAll(GLOB)) for (const p of m[1].match(/['"]([^'"]+)['"]/g) || []) {
        const pat = p.slice(1, -1);
        if (pat.startsWith('!')) continue;
        const dir = resolve(dirname(f), dirname(pat));
        if (!existsSync(dir)) { info.bad = true; continue; }
        for (const x of readdirSync(dir)) { const full = join(dir, x); if (statSync(full).isFile()) info.deps.push(full); }
      }
      memo.set(f, info);
    }
    if (info.bad) return null;
    info.env.forEach(e => env.add(e));
    stack.push(...info.deps);
  }
  return { files: [...files].map(f => relative(root, f)).sort(), env: [...env].sort() };
}

const hashFile = (root, f, memo) => { if (!memo.has(f)) memo.set(f, createHash('sha1').update(readFileSync(join(root, f))).digest('hex')); return memo.get(f); };

/** { file → key } for the cacheable test files (the rest are left out). */
export function keysFor(root, testFiles, { games = 'verdict' } = {}) {
  const shared = ['package-lock.json', 'vitest.config.js', 'src/test/setup.js', 'scripts/lib/unit-cache.mjs'].filter(f => existsSync(join(root, f)));
  const hashes = new Map(), memo = new Map(), out = {};
  for (const t of testFiles) {
    const c = closure(root, t, memo);
    if (!c) continue;
    const h = createHash('sha1');
    h.update(`games=${games}\n`);
    for (const f of [...shared, ...c.files]) h.update(`${f}:${hashFile(root, f, hashes)}\n`);
    for (const e of c.env) h.update(`env ${e}=${process.env[e] ?? ''}\n`);
    out[t] = h.digest('hex');
  }
  return out;
}

/** Keys with a recorded pass. */
export function passedKeys(root) {
  const f = passFile(root);
  if (!existsSync(f)) return new Set();
  return new Set(readFileSync(f, 'utf8').split('\n').filter(Boolean).map(l => { try { return JSON.parse(l).key; } catch { return null; } }).filter(Boolean));
}

/** Records passes: [{ file, key }]. */
export function recordPasses(root, rows, meta = {}) {
  if (!rows.length) return;
  const f = passFile(root);
  try { mkdirSync(dirname(f), { recursive: true }); } catch { /* exists */ }
  appendFileSync(f, rows.map(r => JSON.stringify({ ...r, ...meta, at: new Date().toISOString() })).join('\n') + '\n');
}

/** Every test file under the given dirs (as vitest would find them). */
export function testFilesUnder(root, dirs) {
  const out = [];
  const walk = d => { for (const x of readdirSync(join(root, d))) { const p = join(d, x); if (statSync(join(root, p)).isDirectory()) walk(p); else if (/\.test\.(js|jsx|mjs|ts|tsx)$/.test(x)) out.push(p); } };
  for (const d of dirs) if (existsSync(join(root, d))) walk(d);
  return out.sort();
}
