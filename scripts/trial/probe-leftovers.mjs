// Probe: at each player's last buy of the game (round III, no minions left), what they held, what they chose, and
// whether the resources they kept could have mattered (a held-resource contest they lead or are close in).
// Usage: DECK=10 CONTESTS=byColor LEVEL=normal|hard node scripts/trial/probe-leftovers.mjs <first> <count>
import { createGame, applyMove, allQuadrantIds, quadrant, followers } from '../../src/engine/v4/index.js';
import { chooseBotMove } from '../../src/engine/v4/bots.js';
import { seededRandom } from '../../src/engine/v4/rng.js';
import { sphereVersion } from '../../src/v4/tables.js';
import { deckRules } from '../lib/deck-choice.mjs';
const rules = { ...deckRules(), ...(process.env.CONTESTS ? { contests: process.env.CONTESTS } : {}) };
const [first, count] = [Number(process.argv[2] || 1), Number(process.argv[3] || 20)];
const level = process.env.LEVEL || 'normal';
const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const rows = [];
for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3 + 4 * 101);
  const pool = [...all], quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules });
  const last = {};
  for (let n = 0; !s.over && n < 4000; n++) {
    const pend = s.pending, p = pend && s.players[pend.player];
    const m = chooseBotMove(s, rand, level === 'normal' ? { level } : { level, maxMs: Infinity });
    if (pend && pend.kind === 'buy' && s.round === 3 && p.left === 0) {
      const o = pend.options.find(x => x.id === m.option);
      last[p.id] = { held: { ...p.res }, total: Object.values(p.res).reduce((a, b) => a + b, 0), chose: o ? (o.kind === 'tier' ? `followers:${o.tier}` : o.kind) : m.option, tiers: pend.options.filter(x => x.kind === 'tier').map(x => x.tier) };
    }
    s = applyMove(s, m);
  }
  for (const [pid, x] of Object.entries(last)) rows.push({ g, pid: +pid, ...x, endHeld: Object.values(s.players[pid].res).reduce((a, b) => a + b, 0), won: followers(s, s.players[pid]) === Math.max(...s.players.map(q => followers(s, q))) });
}
const passed = rows.filter(r => r.chose === 'pass');
const avg = a => (a.length ? (a.reduce((x, y) => x + y, 0) / a.length).toFixed(1) : '-');
console.log(`${level}: ${rows.length} last buys. Passed ${passed.length} (${Math.round(100 * passed.length / rows.length)}%), holding ${avg(passed.map(r => r.total))} on average; ${passed.filter(r => r.tiers.length).length} of those passes had a follower buy on offer.`);
console.log(`Chose: ${JSON.stringify(rows.reduce((a, r) => ((a[r.chose] = (a[r.chose] || 0) + 1), a), {}))}. Held at game end: ${avg(rows.map(r => r.endHeld))} a player.`);
for (const r of passed.filter(r => r.total >= 5).slice(0, 8)) console.log(`  game ${r.g} seat ${r.pid}: passed holding ${JSON.stringify(r.held)}, offered ${r.tiers.join(',')}`);
