// Inventory: every question a player answers several times in a row (same player, same question kind), from bot games.
// Prints each kind once with how often it ran, its longest run, and the kinds of options it offered.
// node scripts/pick-runs.mjs [games=40]
import { createGame, applyMove } from '../src/engine/v4/core.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
const N = Number(process.argv[2] || 40);
const COLORS = ['market', 'red', 'yellow', 'purple', 'echo', 'thieves', 'silver', 'trading'];
const seen = new Map();
const keyOf = s => { const t = s.queue[0]; return t ? `${t.t}${t.h ? ':' + t.h : ''}` : ''; };
for (let g = 0; g < N; g++) {
  const rand = seededRandom(1000 + g);
  const qs = [...COLORS].sort(() => rand() - 0.5).slice(0, 4);
  let s = createGame({ seats: [0, 1, 2, 3].map(i => ({ name: `P${i + 1}`, kind: 'bot' })), seed: 1000 + g, quadrants: qs });
  let run = null;
  for (let m = 0; m < 2000 && s.pending && !s.over; m++) {
    const k = keyOf(s), who = s.pending.player;
    const kinds = [...new Set(s.pending.options.map(o => o.kind))].sort().join('/');
    if (run && run.k === k && run.who === who) run.n++;
    else { if (run && run.n > 1) { const e = seen.get(run.k) || { runs: 0, max: 0, kinds: new Set(), prompt: run.prompt }; e.runs++; e.max = Math.max(e.max, run.n); run.kinds.forEach(x => e.kinds.add(x)); seen.set(run.k, e); } run = { k, who, n: 1, kinds: new Set(), prompt: s.pending.prompt }; }
    run.kinds.add(kinds);
    const mv = chooseBotMove(s, rand);
    s = applyMove(s, mv);
  }
}
for (const [k, e] of [...seen].sort((a, b) => b[1].runs - a[1].runs)) console.log(`${k.padEnd(28)} runs ${String(e.runs).padStart(4)} max ${e.max}  [${[...e.kinds].join(' | ')}]  ${String(e.prompt).slice(0, 90)}`);
