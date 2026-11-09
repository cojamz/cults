// Choice walls: which questions a player meets as a flat list of buttons (no gift card, no board pick), over seeded
// mixed-table bot games. Cory, Nov 9 ("this can be way better", on Godparent's member×rival list).
//   node scripts/v4-choice-walls.mjs [games=60] [min options=4]
import { createGame, applyMove } from '../src/engine/v4/core.js';
import { chooseBotMove } from '../src/engine/v4/bots.js';
import { seededRandom } from '../src/engine/v4/rng.js';
import { makeTables } from '../src/test/engine/v4/fuzz-tables-runner.js';
import { giftPick, boardPicker } from '../src/v4/game/boardPick.js';

const games = Number(process.argv[2] || 60), min = Number(process.argv[3] || 4);
const { tables } = makeTables(7, 6);
const seen = new Map();
for (let g = 0; g < games; g++) {
  let s = createGame({ seats: [0, 1, 2, 3].map(() => ({ kind: 'bot' })), seed: 3000 + g, quadrants: tables[g % tables.length] });
  s.players.forEach(p => { p.bot = 'normal'; });
  const rand = seededRandom(g + 5);
  let k = 0;
  while (!s.over && k++ < 8000) {
    const pend = s.pending;
    if (pend && pend.kind === 'choose' && pend.options?.length >= min) {
      const gp = giftPick(s, pend), bp = (!gp || gp.board) ? boardPicker(s, pend) : null;
      if (!gp && !bp) {
        const key = String(pend.prompt).replace(/\d+/g, 'N').replace(/(swap with|to|from) [A-Z]\w+/g, '$1 X').slice(0, 90);
        const e = seen.get(key) || { n: 0, max: 0, ex: null };
        e.n++; if (pend.options.length > e.max) { e.max = pend.options.length; e.ex = pend.options.slice(0, 4).map(o => `${o.kind}:${JSON.stringify(o.value)} "${o.label}"`); }
        seen.set(key, e);
      }
    }
    try { s = applyMove(s, chooseBotMove(s, rand)); } catch (e) { break; }
  }
}
for (const [k, e] of [...seen].sort((a, b) => b[1].max - a[1].max)) console.log(`${String(e.max).padStart(3)} opts  x${e.n}  ${k}\n      ${e.ex.join(' | ')}`);
