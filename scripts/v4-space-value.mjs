// What one minion on each wheel space is worth, measured in played bot games (Cory, Nov 4: "have we ever done an
// explicit balance evaluation of the actions?").
//   DECK=10 CONTESTS=byColor LEVEL=hard node scripts/v4-space-value.mjs <first> <count> <out.jsonl>
//   node scripts/v4-space-value.mjs --report <out.jsonl>...   (one table: spaces by value per minion)
// For every placement, the placer's turn is measured from the placement until the next placement (or the round's
// end, whose contest payout is left out): followers gained + resources gained (1 resource buys 1 follower) + members
// gained at their printed cost - members lost at cost. A paid recruit is about even (resources become a member), so
// what remains is what the space added. Also kept: what the rivals lost or gained in that window. Not counted: turn
// order (Goes Last, skips, extra turns), extra minions, and a member's later effects.
import { appendFileSync, readFileSync } from 'node:fs';
import { createGame, applyMove, followers, allQuadrantIds, quadrant } from '../src/engine/v4/index.js';
import { defById } from '../src/engine/v4/content/index.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';

const RENAME = { thieves: 'Magenta', echo: 'Green', market: 'Blue', trading: 'White', red: 'Red', purple: 'Purple', silver: 'Silver', yellow: 'Yellow' };

if (process.argv[2] === '--report') {
  const rows = process.argv.slice(3).flatMap(f => readFileSync(f, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse));
  const games = new Set(rows.map(r => r.game)).size;
  const by = {};
  for (const r of rows) {
    const k = `${r.space}|${r.ring}`;
    const b = (by[k] ??= { n: 0, v: 0, f: 0, res: 0, mem: 0, riv: 0, rounds: [0, 0, 0], early: 0, win: 0 });
    b.n++; b.v += r.value; b.f += r.df; b.res += r.dres; b.mem += r.dmem; b.riv += r.rivals; b.rounds[r.round - 1]++;
    b.early += r.pick; b.win += r.won ? 1 : 0;
  }
  const list = Object.entries(by).map(([k, b]) => { const [space, ring] = k.split('|'); return { space, ring, ...b }; })
    .sort((a, b) => b.v / b.n - a.v / a.n);
  console.log(`${games} games, ${rows.length} placements. Value = followers + resources + members (at cost) the placer gained that turn.`);
  console.log('space | ring | uses | value/minion | followers | resources | members | rivals | uses in round I/II/III | avg pick # in round | taker won');
  for (const b of list) console.log([b.space, b.ring, b.n, (b.v / b.n).toFixed(1), (b.f / b.n).toFixed(1), (b.res / b.n).toFixed(1), (b.mem / b.n).toFixed(1),
    (b.riv / b.n).toFixed(1), b.rounds.join('/'), (b.early / b.n).toFixed(1), `${Math.round(100 * b.win / b.n)}%`].join(' | '));
  process.exit(0);
}

const [first, count, out] = [Number(process.argv[2] || 1), Number(process.argv[3] || 1), process.argv[4] || 'space-value.jsonl'];
const level = process.env.LEVEL || 'hard', seats = Number(process.env.SEATS || 4);
const rules = { deck: Number(process.env.DECK || 10), ...(process.env.CONTESTS ? { contests: process.env.CONTESTS } : {}) };
const botOpts = level === 'hard' || level === 'veryhard' ? { level, maxMs: Infinity } : { level };
const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const costOf = d => { try { const x = defById(d); return (x.s || 0) + (x.w || 0); } catch { return 0; } };
const snap = st => st.players.map(p => ({ f: followers(st, p), r: Object.values(p.res).reduce((x, y) => x + y, 0), m: new Map(p.members.map(u => [u, costOf(st.cards[u].def)])) }));
const worth = (a, b) => {
  let mem = 0;
  for (const [u, c] of b.m) if (!a.m.has(u)) mem += c;
  for (const [u, c] of a.m) if (!b.m.has(u)) mem -= c;
  return { df: b.f - a.f, dres: b.r - a.r, dmem: mem };
};

for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3 + seats * 101);
  const pool = [...all], quads = [];
  while (quads.length < seats) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: Array.from({ length: seats }, () => ({ kind: 'bot' })), seed: g, quadrants: quads, rules });
  const rows = [];
  let open = null, moves = 0;
  const pickNo = {};
  const close = () => { if (open) { rows.push(open); open = null; } };
  while (!s.over && ++moves < 4000) {
    const pl = s.pending.player, kind = s.pending.kind, round = s.round;
    const m = chooseBotMove(s, rand, botOpts);
    let space = null;
    if (kind === 'place' && typeof m.option === 'string' && /^(slot|squat):/.test(m.option)) {
      const [q, i] = m.option.split(':')[1].split('-').map(Number);
      const a = quadrant(s.quadrants[q]).actions[i];
      if (a) space = { space: `${RENAME[s.quadrants[q]] || s.quadrants[q]}: ${a.name}`, ring: ['I', 'II', 'III'][a.ring - 1] || String(a.ring) };
    }
    if (kind === 'place') close();
    const pre = snap(s);
    s = applyMove(s, m);
    if (s.round !== round || s.over) { close(); continue; } // the round's contest payout is not the space's
    const post = snap(s);
    if (space) {
      pickNo[round] = (pickNo[round] || 0) + 1;
      open = { game: g, round, seat: pl, ...space, pick: pickNo[round], df: 0, dres: 0, dmem: 0, rivals: 0 };
    }
    if (open) {
      const w = worth(pre[open.seat], post[open.seat]);
      open.df += w.df; open.dres += w.dres; open.dmem += w.dmem;
      for (let i = 0; i < seats; i++) if (i !== open.seat) { const x = worth(pre[i], post[i]); open.rivals += x.df + x.dres + x.dmem; }
    }
  }
  close();
  if (!s.over) continue;
  const top = Math.max(...s.players.map(p => followers(s, p)));
  for (const r of rows) { r.value = r.df + r.dres + r.dmem; r.won = followers(s, s.players[r.seat]) === top; appendFileSync(out, JSON.stringify(r) + '\n'); }
}
