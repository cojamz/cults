#!/usr/bin/env node
// Did every candidate card do something in real games? (idea pipeline step 3, Cory Nov 7: "uplevel the robustness")
// Plays quick Normal games with the candidates dealt in (POOL rotation, 3 and 4 players), keeps every game's log, and
// counts per card: games dealt, games bought or taken, and log lines where it acted. A card dealt often that never acts
// is a build bug or a dead card; read its lines with feel-logs.mjs before anything else.
//   node scripts/ideas/fires.mjs <pool tags> [--games 80] [--out dir]
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const flag = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const tags = args[0];
if (!tags) { console.log('node scripts/ideas/fires.mjs <pool tags> [--games 80] [--out dir]'); process.exit(1); }
const n = Number(flag('games', 80));
const out = flag('out', `/tmp/fires-${tags.replace(/,/g, '+')}`);
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });

const rows = [];
for (const seats of [4, 3]) {
  const logs = path.join(out, `${seats}p`); fs.mkdirSync(logs);
  const jl = path.join(out, `${seats}p.jsonl`);
  execFileSync('node', ['scripts/v4-balance.mjs', '1', String(Math.ceil(n / 2)), jl], { cwd: ROOT, stdio: 'ignore',
    env: { ...process.env, DECK: '10', CONTESTS: 'byColor', LEVEL: 'normal', SEATS: String(seats), POOL: tags, LOGS: logs } });
  for (const line of fs.readFileSync(jl, 'utf8').trim().split('\n')) {
    const r = JSON.parse(line); if (!r.pool) continue;
    const g = r.game ?? r.g ?? r.seed;
    const file = fs.readdirSync(logs).find(f => f.endsWith(`-${g}.txt`));
    rows.push({ rec: r.pool, log: file ? fs.readFileSync(path.join(logs, file), 'utf8') : '' });
  }
}
const cards = {};
for (const { rec, log } of rows) {
  const names = [...rec.members.map(x => ({ x, kind: 'member' })), ...rec.spaces.map(s => ({ x: s.in.split(': ')[1], kind: 'space' }))];
  for (const { x, kind } of names) {
    const c = (cards[x] ??= { kind, dealt: 0, got: 0, acted: 0, sample: null });
    c.dealt++;
    const lines = log.split('\n').filter(l => l.includes(x));
    const got = lines.some(l => new RegExp(`recruited ${x}\\b|\\btook ${x}\\b`).test(l));
    // what the card did: not the shop listing it, not the recruit or the placement itself
    const acts = lines.filter(l => !/recruited |^Table:|in the shop|[Ss]hop:|discard pile|\btook /.test(l) || new RegExp(`${x}:|'s ${x}`).test(l));
    if (got) c.got++;
    c.acted += acts.length;
    if (!c.sample && acts.length) c.sample = acts[0].slice(0, 160);
  }
}
const L = [`Fire check, ${tags}: ${rows.length} Normal games (3 and 4 players)`, ''];
for (const [k, c] of Object.entries(cards).sort()) {
  const v = c.acted === 0 ? (c.got ? 'NEVER ACTED though bought/taken: check the build' : 'never bought or taken') : 'acts';
  L.push(`${k} (${c.kind}): dealt ${c.dealt}, bought/taken ${c.got}, lines ${c.acted}: ${v}${c.sample ? `\n   e.g. ${c.sample}` : ''}`);
}
fs.writeFileSync(path.join(out, 'fires.md'), L.join('\n') + '\n');
console.log(L.join('\n'));
console.log(`\nlogs in ${out}`);
