// Action balance harness, runner: plays the same games under each variant, 4 at a time, restart-safe, then writes one
// report per variant. Variants (Claude's, Nov 11): base is today's game; no-tribute swaps Tribute Band for Ensemble so
// Green's deck stays at 10 (Cory: "maybe we'll cut tribute band ... We'll need to put in a replacement green").
// Usage: DECK=10 node scripts/actions/run.mjs [--games=200] [--chunk=10] [--only=base,no-tribute] [--dir=.actions-runs/<id>]
import { spawn, execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';

export const VARIANTS = {
  base: {},
  'no-tribute': { MEMBERS_OUT: 'echo.dejavu', MEMBERS_IN: 'echo.ensemble' },
  'plus1-every': { PLUS1: 'every' },
};
const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, ...v] = a.replace(/^--/, '').split('='); return [k, v.join('=') || true]; }));
const games = Number(flags.games || 200), chunk = Number(flags.chunk || 10), W = Number(flags.workers || 4);
const sha = execSync('git rev-parse --short HEAD').toString().trim();
const dir = flags.dir || `.actions-runs/${new Date().toISOString().slice(0, 10)}-${sha}`;
const names = flags.only ? String(flags.only).split(',') : ['base', 'no-tribute'];
const jobs = [];
for (const n of names) mkdirSync(`${dir}/${n}`, { recursive: true });
for (let first = 1; first <= games; first += chunk) for (const n of names) {
  const out = `${dir}/${n}/${first}.jsonl`;
  const k = Math.min(chunk, games - first + 1);
  const have = existsSync(out) ? readFileSync(out, 'utf8').trim().split('\n').filter(Boolean).length : 0;
  if (have < k) jobs.push({ n, first: first + have, count: k - have, out });
}
console.log(`${dir}: ${jobs.length} jobs`);
let running = 0, i = 0;
const report = () => { for (const n of names) execSync(`node scripts/actions/report.mjs ${dir}/${n} --md=${dir}/${n}.md > /dev/null`); console.log(`reports: ${names.map(n => `${dir}/${n}.md`).join(' ')}`); };
const next = () => {
  if (i >= jobs.length && !running) return report();
  while (running < W && i < jobs.length) {
    const j = jobs[i++]; running++;
    const c = spawn('node', ['scripts/actions/play.mjs', String(j.first), String(j.count), j.out], { env: { ...process.env, BUDGET: process.env.BUDGET || '40', ...VARIANTS[j.n] }, stdio: 'inherit' });
    c.on('exit', code => { running--; console.log(`${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })} ${j.n} ${j.first}+${j.count} exit ${code}`); next(); });
  }
};
next();
