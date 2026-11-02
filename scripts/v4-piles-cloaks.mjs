// Cloaks under each shop (Cory, 2026-11-01: "not all artifacts will be like equally able to trigger… some artifacts will
// be super favored by the members in the shop"): bots play the same seeds and tables with SHOP=deck|grey|all, and each
// game records, per player, the cloak they wore, what it paid (its log lines), followers and the win.
// Usage: SHOP=deck|grey|all LEVEL=normal|hard DECK=10 node scripts/v4-piles-cloaks.mjs <first> <count> <out.jsonl>
// Tables: 4 seats, 4 of the 2.0 colors without Blue (All piles has no Blue, so every shop plays the same tables).
import { appendFileSync } from 'node:fs';
import { createGame, applyMove, followers, memberCount, allQuadrantIds, cardDef } from '../src/engine/v4/index.js';
import { logCount } from '../src/engine/v4/core.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { deckRules } from './lib/deck-choice.mjs';

const DECK = deckRules();
const [first, count, out] = [Number(process.argv[2] || 1), Number(process.argv[3] || 1), process.argv[4] || 'cloaks.jsonl'];
// ONLY=echo plays just the games whose table has that color (a re-run after a fix to one cloak)
const only = process.env.ONLY;
const shop = process.env.SHOP || 'deck', level = process.env.LEVEL || 'normal';
const colors = allQuadrantIds().filter(q => sphereVersion(q) === '2.0' && q !== 'market');
const botOpts = level === 'hard' || level === 'veryhard' ? { level, maxMs: Infinity } : { level };

for (let g = first; g < first + count; g++) {
  const rand = seededRandom(g * 7717 + 3 + 4 * 101);
  const pool = [...colors], table = [];
  while (table.length < 4) table.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  if (only && !table.includes(only)) continue;
  let s = createGame({ seats: Array.from({ length: 4 }, (_, i) => ({ kind: 'bot', name: `P${i + 1}` })), seed: g, quadrants: table, rules: { ...DECK, ...(shop === 'deck' ? {} : { shop }) } });
  const paid = s.players.map(() => ({ times: 0, amount: 0 }));
  let moves = 0;
  const t0 = Date.now();
  while (!s.over && ++moves < 6000) {
    const n0 = logCount(s);
    s = applyMove(s, chooseBotMove(s, rand, botOpts));
    const fresh = s.log.slice(Math.max(0, s.log.length - (logCount(s) - n0)));
    for (const line of fresh) {
      const m = /^(P\d)'s [A-Z][a-z]+ Cloak: (.*)$/.exec(typeof line === 'string' ? line : '');
      if (!m) continue;
      const i = Number(m[1].slice(1)) - 1;
      paid[i].times++;
      paid[i].amount += [...m[2].matchAll(/([+-]\d+)/g)].reduce((t, x) => t + Number(x[1]), 0);
    }
  }
  if (!s.over) { appendFileSync(out, JSON.stringify({ game: g, shop, level, table, stuck: true }) + '\n'); continue; }
  const fs = s.players.map(p => followers(s, p)), best = Math.max(...fs);
  const cloakOf = p => { for (const q in s.artifacts) if (s.artifacts[q] === p.artifact) return q; return null; };
  appendFileSync(out, JSON.stringify({
    game: g, shop, level, table, secs: Math.round((Date.now() - t0) / 1000),
    piles: s.rules.piles ? s.rules.piles.defs : null,
    players: s.players.map((p, i) => ({ cloak: cloakOf(p), paidTimes: paid[i].times, paid: paid[i].amount, followers: fs[i], win: fs[i] === best, members: memberCount(s, p) })),
  }) + '\n');
}
