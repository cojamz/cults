// Plays every mix in mixes.mjs on the same games (Hard, 4 players, 10-card deck, By color), 4 at a time, restart-safe.
// Usage: DECK=10 node scripts/econ/sweep.mjs [--games=60] [--chunk=15] [--dir=/mnt/project-files/economy-test/runs] [--only=a,b]
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { MIXES } from './mixes.mjs';
const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, ...v] = a.replace(/^--/, '').split('='); return [k, v.join('=') || true]; }));
const games = Number(flags.games || 60), chunk = Number(flags.chunk || 15), W = Number(flags.workers || 4);
// local disk by default: appends on the shared network folder broke 3 lines on Nov 7; copy results there after
const dir = flags.dir || '.econ-runs';
mkdirSync(dir, { recursive: true });
const slug = n => n.replace(/[^a-z0-9+=-]+/gi, '_');
const names = flags.only ? String(flags.only).split(',') : Object.keys(MIXES);
const jobs = [];
for (let first = 1; first <= games; first += chunk) for (const n of names) {
  const out = `${dir}/${slug(n)}.${first}.jsonl`;
  const have = existsSync(out) ? readFileSync(out, 'utf8').trim().split('\n').filter(Boolean).length : 0;
  const k = Math.min(chunk, games - first + 1);
  if (have < k) jobs.push({ n, first: first + have, count: k - have, out });
}
console.log(`${jobs.length} jobs`);
let running = 0, i = 0;
const next = () => {
  while (running < W && i < jobs.length) {
    const j = jobs[i++]; running++;
    const c = spawn('node', ['scripts/econ/play.mjs', String(j.first), String(j.count), j.out], { env: { ...process.env, BUDGET: process.env.BUDGET || '40', ...Object.fromEntries(Object.entries(MIXES[j.n]).map(([k, v]) => [k, String(v)])) }, stdio: 'inherit' });
    c.on('exit', code => { running--; console.log(`${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })} ${j.n} ${j.first}+${j.count} exit ${code}`); next(); });
  }
};
next();
