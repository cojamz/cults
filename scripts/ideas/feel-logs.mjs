// The feel step (scripts/ideas/README.md): replays the pool games where a candidate card mattered, with full logs, so a
// reader can say what the table went through (who it stung, whether anyone could track it). Games replay exactly: same
// game number, same settings, same commit (the trial's own checkout).
// Usage: node scripts/ideas/feel-logs.mjs <pool trial> "<card name>" [--n=3] [--out=<dir>]
// Picks games where the card was recruited (members) or taken most (spaces), winners and losers both when it can.
import { readFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { loadGames } from './pool-report.mjs';

const TRIALS = process.env.TRIALS_DIR || '/mnt/project-files/trials';
const args = process.argv.slice(2), flag = k => (args.find(a => a.startsWith(`--${k}=`)) || '').split('=')[1];
const [trial, card] = args.filter(a => !a.startsWith('--'));
const n = Number(flag('n') || 3);
const spec = JSON.parse(readFileSync(join(TRIALS, 'trials', trial, 'spec.json'), 'utf8'));
const rows = loadGames(trial);
const hits = [];
for (const r of rows) for (const p of r.players) {
  const got = Object.keys(p.gotRound || {}).some(k => k.startsWith(`${card} (`));
  const placed = Object.entries(p.places || {}).filter(([k]) => k.endsWith(`: ${card}`)).reduce((a, [, v]) => a + v, 0);
  if (got || placed) hits.push({ game: r.game, seat: p.seat, win: p.win, weight: got ? 1 : placed });
}
if (!hits.length) { console.log(`${card}: no game in ${trial} where it mattered.`); process.exit(0); }
hits.sort((a, b) => b.weight - a.weight || a.game - b.game);
const pick = [], seen = new Set();
for (const want of [true, false, true, false, true]) { const h = hits.find(x => x.win === want && !seen.has(x.game)); if (h && pick.length < n) { pick.push(h); seen.add(h.game); } }
for (const h of hits) if (pick.length < n && !seen.has(h.game)) { pick.push(h); seen.add(h.game); }
const wt = join(process.cwd(), '.trial-wt', spec.sha.slice(0, 12));
if (!existsSync(join(wt, 'scripts/v4-balance.mjs'))) { console.error(`No checkout of ${spec.sha.slice(0, 8)} here: run trial.mjs work ${trial} once, or check it out.`); process.exit(1); }
const out = flag('out') || join(TRIALS, 'trials', trial, 'feel', card.replace(/[^A-Za-z0-9]+/g, '-'));
mkdirSync(out, { recursive: true });
for (const h of pick) {
  execFileSync('node', ['scripts/v4-balance.mjs', String(h.game), '1', join(out, `g${h.game}.jsonl`)], { cwd: wt, env: { ...process.env, ...spec.env, LOGS: out }, stdio: 'ignore' });
  console.log(`game ${h.game}: seat P${h.seat + 1} ${h.win ? 'won' : 'lost'}`);
}
console.log(`Logs: ${out} (${readdirSync(out).filter(f => f.endsWith('.txt')).join(', ')})`);
