// Bot choice audit: at every choice a Normal bot makes in seeded games (a target, a color, a member, a trade), every
// option is played out on a copy of the game and valued; the report counts how often the old way (the card's hint, or
// the 16 trades a quick read ranked best) picked something else, and how many followers that cost, by card.
//   DECK=10 node scripts/v4-bot-choice-audit.mjs [games=20]
import { createGame, applyMove, cardDef } from '../src/engine/v4/core.js';
import { allQuadrantIds } from '../src/engine/v4/content/index.js';
import { sphereVersion } from '../src/v4/tables.js';
import { chooseBotMove, tradeScore, botInternals } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { deckRules } from './lib/deck-choice.mjs';

const games = Number(process.argv[2] || 20);
const rules = deckRules();
const all = allQuadrantIds().filter(q => sphereVersion(q) === '2.0');
const rows = {};
const row = k => (rows[k] ||= { n: 0, differ: 0, lost: 0, worst: 0, fails: 0 });
const t0 = Date.now();
for (let g = 1; g <= games; g++) {
  const rand = seededRandom(g * 7717 + 3 + 404);
  const pool = [...all], quads = [];
  while (quads.length < 4) quads.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: g, quadrants: quads, rules: { ...rules, swapCard: g % 2 === 0 } });
  let k = 0;
  while (!s.over && k++ < 6000) {
    const pend = s.pending;
    if (pend.kind === 'choose' && pend.options.length > 1 && pend.options.some(o => o.kind !== 'pass')) {
      const task = s.queue[0];
      const label = `${task?.h || '?'} · ${String(task?.prompt || '').split(':')[0].slice(0, 30)}`;
      const isTrade = pend.options.every(o => o.kind === 'trade' || o.kind === 'pass') && pend.options.some(o => o.kind === 'trade');
      const isMember = pend.options.every(o => o.kind === 'member');
      const opts = isTrade || isMember ? pend.options.filter(o => o.kind !== 'pass') : botInternals.avoidUndo(s, pend);
      globalThis.__swapFail = 0;
      const rated = botInternals.rateOnCopy(s, pend, opts);
      const r = row(label);
      r.n++;
      r.fails += globalThis.__swapFail;
      const best = Math.max(...rated.map(x => x.v));
      let old;
      if (isTrade) {
        const q = o => tradeScore(s, pend.player, o.value);
        const top = new Set([...opts].sort((a, b) => q(b) - q(a)).slice(0, 16).map(o => o.id));
        old = rated.filter(x => top.has(x.o.id)).reduce((a, b) => (b.v > a.v ? b : a));
      } else if (isMember) old = rated.reduce((a, b) => (b.v > a.v ? b : a));
      else old = rated.reduce((a, b) => ((b.o.hint || 0) > (a.o.hint || 0) ? b : a));
      const gap = best - old.v;
      if (gap > 0.25) { r.differ++; r.lost += gap; r.worst = Math.max(r.worst, gap); }
    }
    s = applyMove(s, chooseBotMove(s, rand, { level: 'normal' }));
  }
}
const list = Object.entries(rows).sort((a, b) => b[1].lost - a[1].lost);
console.log(`${games} games, ${((Date.now() - t0) / 1000).toFixed(0)}s. Choices where the old way picked worse by more than 1/4 follower:`);
for (const [k, r] of list) console.log(`${String(r.differ).padStart(4)}/${String(r.n).padEnd(4)} lost ${r.lost.toFixed(1).padStart(6)} worst ${r.worst.toFixed(1).padStart(5)}${r.fails ? ` fails ${r.fails}` : ''}  ${k}`);
