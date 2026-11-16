// Normal-bot audit (Cory, Nov 12, playtesting: "immediately seeing Normal bots making very dumb decisions"). Plays
// Normal-bot games on today's rules and, at every placement and buy, plays Normal's pick and its next best options out
// to the round's end (the game's end in round III) on shared seeds, the way Hard looks ahead. Lists the picks that
// lost the most followers against the best option found, with the round and what was open, so the causes can be read.
// Usage: DECK=10 node scripts/v4-normal-audit.mjs [--games=4] [--first=1] [--gap=3] [--budget=240] [--out=file.md]
import fs from 'node:fs';
import { createGame, applyMove, actionAt, allQuadrantIds } from '../src/engine/v4/index.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { chooseThinkerMove } from '../src/engine/v4/thinker.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { sphereVersion } from '../src/v4/tables.js';
import { deckRules } from './lib/deck-choice.mjs';

const arg = (k, d) => { const a = process.argv.find(x => x.startsWith(`--${k}=`)); return a ? a.slice(k.length + 3) : d; };
const GAMES = Number(arg('games', 4)), FIRST = Number(arg('first', 1)), GAP = Number(arg('gap', 3)), BUDGET = Number(arg('budget', 240)), OUT = arg('out', '');
const rows = [];
let looked = 0;
const nameOf = (s, id) => {
  const o = s.pending.options.find(x => x.id === id);
  if (!o) return id;
  if (o.kind === 'slot') { const a = actionAt(s, o.q, o.i); return `${a?.name} (${s.quadrants[o.q]})`; }
  return o.label || id;
};
for (let g = FIRST; g < FIRST + GAMES; g++) {
  const rand = seededRandom(g * 911 + 7);
  const pool = allQuadrantIds().filter(q => sphereVersion(q) === '2.0'), quads = (process.env.FORCE || '').split(',').filter(Boolean);
  for (const q of quads) pool.splice(pool.indexOf(q), 1);
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: { ...deckRules(), roundDecks: 2, contests: 'byColor', plus1: 'game' } });
  for (let k = 0; !s.over && k < 3000; k++) {
    const m = chooseBotMove(s, rand, { level: 'normal' });
    if (['place', 'buy'].includes(s.pending.kind) && s.pending.options.length > 1) {
      looked++;
      let info = null;
      // Hard's look-ahead over normal's top 4, with a big budget, no time cap; window wide so all 4 are played out
      chooseThinkerMove(s, seededRandom(g * 31 + k), { budget: BUDGET, candidates: 4, window: 100, maxMs: Infinity, crn: true, onDecision: d => { info = d; } });
      if (info && info.options.length > 1) {
        const mine = info.options.find(o => o.id === m.option), best = info.options.reduce((a, b) => ((b.mean ?? -1e9) > (a.mean ?? -1e9) ? b : a));
        if (mine && best.id !== m.option && best.mean - mine.mean > GAP) {
          rows.push({ g, round: s.round, kind: s.pending.kind, who: s.pending.player, table: quads.join(', '), chose: nameOf(s, m.option), best: nameOf(s, best.id), lost: +(best.mean - mine.mean).toFixed(1), held: JSON.stringify(s.players[s.pending.player].res) });
        }
      }
    }
    s = applyMove(s, m);
  }
  process.stderr.write(`game ${g} done (${rows.length} flagged so far)\n`);
}
const lines = [`# Normal-bot audit`, '', `${GAMES} Normal games on today's rules. ${looked} placements and buys checked; ${rows.length} lost more than ${GAP} followers against the best of Normal's top 4, each played to the round's end (the game's end in round III).`, ''];
for (const r of rows.sort((a, b) => b.lost - a.lost)) lines.push(`- game ${r.g} (${r.table}), round ${r.round} ${r.kind}, seat ${r.who}: chose ${r.chose}; better ${r.best}; lost ${r.lost}. Held ${r.held}.`);
const text = lines.join('\n') + '\n';
if (OUT) fs.writeFileSync(OUT, text);
process.stdout.write(text);
