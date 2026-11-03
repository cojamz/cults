// How far to trust the bots: a sample of Normal's real decisions, each replayed over EVERY option on offer, each option
// played forward by Normal bots to the end of the round on the same dice (common seeds), and valued the way a finished
// round is. The best is picked on one set of dice and re-measured against Normal's pick on fresh dice (the best of many
// noisy averages always looks better than it is). Regret = that difference, in followers over the best rival.
// Small regret everywhere: the bots' numbers stand. Big regret on some kind of decision: numbers that hang on it are
// suspect, and the report says which.
//   DECK=10 node scripts/balance/trust.mjs [--games=6] [--every=9] [--seeds=8] [--workers=3] --json=out.json --md=out.md
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { writeFileSync } from 'node:fs';
import { createGame, applyMove, followers, cardDef } from '../../src/engine/v4/core.js';
import { chooseNormalMove, scoreOptions } from '../../src/engine/v4/bots.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { allQuadrantIds, quadrant } from '../../src/engine/v4/content/index.js';
import { sphereVersion } from '../../src/v4/tables.js';
import { deckRules } from '../lib/deck-choice.mjs';

const flags = Object.fromEntries(process.argv.slice(2).map(a => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true]; }));
const ROLL = { noise: 0.6, payWays: 2, payOptions: 2 };
const margin = (s, me) => followers(s, s.players[me]) - Math.max(...s.players.filter(p => p.id !== me).map(p => followers(s, p)));
function boundary(s, me) {
  if (!s.pending) return margin(s, me);
  const probe = { ...s, pending: { player: me, kind: 'buy', options: [{ id: 'pass', kind: 'pass' }] } };
  return scoreOptions(probe, () => 0, { spite: 1 })[0].v;
}
function label(s, o) {
  if (o.kind === 'slot') { const a = quadrant(s.quadrants[o.q]).actions[o.i]; return a ? `space ${a.name}` : o.id; }
  if (o.kind === 'card') return `recruit ${cardDef(s, o.uid).name}`;
  if (o.kind === 'use') return `use ${cardDef(s, o.uid).name}`;
  if (o.kind === 'tier') return `follower buy ${o.tier}`;
  return `${o.kind} ${o.label || o.id}`;
}
function playFrom(s, me, seed) {
  const r = seededRandom(seed), round = s.round;
  let k = 0;
  while (!s.over && s.round === round && k++ < 1500) s = applyMove(s, chooseNormalMove(s, r, ROLL));
  return s.over ? margin(s, me) : boundary(s, me);
}

function runGame(g, o) {
  const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
  const rand = seededRandom(g * 911 + 17);
  const pool = [...all], quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: 7000 + g, quadrants: quads, rules: o.rules });
  const out = [];
  let n = 0;
  while (!s.over) {
    const pend = s.pending;
    const mv = chooseNormalMove(s, rand);
    if (['place', 'buy', 'choose', 'pay'].includes(pend.kind) && pend.options.length > 1 && s.round >= 1 && ++n % o.every === 0) {
      const me = pend.player;
      const vals = pend.options.map(opt => {
        let t = 0;
        for (let k = 0; k < o.seeds; k++) { try { t += playFrom(applyMove(s, { player: me, option: opt.id }), me, g * 1e5 + n * 100 + k); } catch { t += -100; } }
        return { id: opt.id, label: label(s, opt), v: t / o.seeds };
      });
      const best = vals.reduce((a, b) => (b.v > a.v ? b : a));
      const took = vals.find(v => v.id === mv.option);
      // the best of many noisy averages looks better than it is: measure the two again on fresh dice
      const again = id => { let t = 0; for (let k = 0; k < o.seeds; k++) { try { t += playFrom(applyMove(s, { player: me, option: id }), me, g * 1e5 + n * 100 + 50 + k); } catch { t += -100; } } return t / o.seeds; };
      const regret = best.id === took.id ? 0 : again(best.id) - again(took.id);
      out.push({ g, round: s.round, kind: pend.kind, options: vals.length, regret, took: took.label, best: best.label, prompt: pend.kind === 'choose' ? String(s.queue[0]?.prompt || '').slice(0, 80) : '' });
    }
    s = applyMove(s, mv);
  }
  return out;
}

if (!isMainThread) {
  for (const g of workerData.games) parentPort.postMessage(runGame(g, workerData));
} else {
  const o = { rules: deckRules(), every: Number(flags.every || 9), seeds: Number(flags.seeds || 8) };
  const games = Number(flags.games || 6), workers = Math.min(games, Number(flags.workers || 3));
  const t0 = Date.now(), rows = [];
  await Promise.all(Array.from({ length: workers }, (_, w) => new Promise((res, rej) => {
    const wk = new Worker(fileURLToPath(import.meta.url), { workerData: { ...o, games: Array.from({ length: games }, (_, g) => g).filter(g => g % workers === w) }, argv: process.argv.slice(2) });
    wk.on('message', r => rows.push(...r)); wk.on('error', rej); wk.on('exit', res);
  })));
  const mean = a => a.reduce((x, y) => x + y, 0) / (a.length || 1);
  const by = {};
  for (const r of rows) (by[r.kind] ??= []).push(r);
  const md = [`## How far to trust the bots`, '',
    `${rows.length} of Normal's decisions from ${games} games were replayed over every option, each played forward ${o.seeds} times to the end of the round on the same dice (${((Date.now() - t0) / 60000).toFixed(0)} min).`,
    `On average Normal's pick was ${mean(rows.map(r => r.regret)).toFixed(2)} followers worse than the best option; ${Math.round(100 * rows.filter(r => r.regret >= 1).length / (rows.length || 1))}% of picks were 1 or more worse.`];
  const kindName = { place: 'where to place', buy: 'what to buy', choose: '"you choose" moments', pay: 'how to pay' };
  for (const [k, list] of Object.entries(by)) md.push(`- ${kindName[k] || k}: ${list.length} decisions, ${mean(list.map(r => r.regret)).toFixed(2)} worse on average, ${list.filter(r => r.regret >= 1).length} of them by 1 or more.`);
  const worst = [...rows].sort((a, b) => b.regret - a.regret).slice(0, 6).filter(r => r.regret >= 1);
  if (worst.length) { md.push('', 'Biggest misses:'); for (const r of worst) md.push(`- round ${['', 'I', 'II', 'III'][r.round]}${r.prompt ? ` (${r.prompt})` : ''}: took ${r.took}; ${r.best} was ${r.regret.toFixed(1)} better.`); }
  const verdict = mean(rows.map(r => r.regret)) < 0.5 ? 'TRUSTED' : mean(rows.map(r => r.regret)) < 1.5 ? 'MOSTLY TRUSTED' : 'SUSPECT';
  md.splice(1, 0, `Verdict: ${verdict}.`);
  if (flags.json) writeFileSync(flags.json, JSON.stringify({ verdict, rows }, null, 1));
  if (flags.md) writeFileSync(flags.md, md.join('\n') + '\n'); else console.log(md.join('\n'));
}
