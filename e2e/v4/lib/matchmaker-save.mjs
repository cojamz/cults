// A saved hot-seat game stopped on P1's buy, P1 holding Matchmaker ("Whenever you recruit a member of a color none of
// your members have, +2 wild, +1 follower.") with a member of a new color face up and plenty to pay with. Used by the
// Matchmaker probe (Cory, Nov 6: "Matchmaker resource selection is slow").
import { createGame, applyMove, chooseBotMove } from '../../../src/engine/v4/index.js';
import { resume } from '../../../src/engine/v4/core.js';
import { seededRandom } from '../../../src/engine/v4/rng.js';
import { buildStamp } from './stamp.mjs';

export const MM_TABLE = ['yellow', 'red', 'market', 'thieves'];
const SEATS = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
const wrap = s => { s.build = buildStamp(); return { config: { seats: SEATS.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal', quadrants: MM_TABLE }, state: s, undo: null, savedAt: Date.now() }; };

export function matchmakerSave(from = 3) {
  for (let seed = from; seed < from + 200; seed++) {
    let s = createGame({ seats: SEATS, seed, quadrants: MM_TABLE });
    const rand = seededRandom(seed);
    for (let n = 0; n < 2000 && !(s.pending && s.pending.player === 0 && s.pending.kind === 'buy') && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
    if (!(s.pending && s.pending.player === 0 && s.pending.kind === 'buy')) continue;
    s = structuredClone(s);
    const mm = Object.values(s.cards).find(x => x.def === 'yellow.matchmaker');
    if (!mm) continue;
    for (const p of s.players) p.members = p.members.filter(u => u !== mm.uid);
    s.shop = s.shop.filter(u => u !== mm.uid); s.pile = s.pile.filter(u => u !== mm.uid);
    // P1 holds Matchmaker only, so every other color in the shop is new
    for (const u of s.players[0].members) s.pile.push(u);
    s.players[0].members = [mm.uid]; mm.recruitedRound = 0; mm.recruitedBy = 0;
    for (const r of s.resources) s.players[0].res[r] = 8;
    resume(s);
    if (s.pending?.player !== 0 || s.pending.kind !== 'buy') continue;
    const target = s.shop.find(u => s.cards[u].def.split('.')[0] !== 'yellow' && s.pending.options.some(o => o.id === `card:${u}`));
    if (target == null) continue;
    return { save: wrap(s), seed, target };
  }
  throw new Error('no Matchmaker save');
}
