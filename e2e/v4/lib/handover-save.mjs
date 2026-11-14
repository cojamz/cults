// Saved hot-seat games stopped on a member-to-rival pick for P1 (Godparent; Cory, Nov 9: "this can be way better"):
// bots play every seat to round III's buy step, P1 is handed Godparent and a few members, then uses it.
import { createGame, applyMove, chooseBotMove } from '../../../src/engine/v4/index.js';
import { seededRandom } from '../../../src/engine/v4/rng.js';
import { resume } from '../../../src/engine/v4/core.js';
import { buildStamp } from './stamp.mjs';

export function handoverSave({ round = 3, card = 'silver.godparents' } = {}) {
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
  for (let seed = 1; seed < 200; seed++) {
    let s = createGame({ seats, seed, quadrants: ['silver', 'red', 'market', 'trading'] });
    const rand = seededRandom(seed);
    const ready = st => st.round === round && st.pending && st.pending.player === 0 && st.pending.kind === 'buy';
    for (let n = 0; n < 3000 && !ready(s) && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
    if (!ready(s) || s.players[0].members.length < 3) continue;
    s = structuredClone(s);
    let c = Object.values(s.cards).find(x => x.def === card && !s.players.some(p => p.members.includes(x.uid)));
    if (!c) { const uid = Math.max(...Object.keys(s.cards).map(Number)) + 1; c = s.cards[uid] = { uid, def: card }; }
    s.shop = s.shop.filter(u => u !== c.uid); s.pile = s.pile.filter(u => u !== c.uid);
    s.players[0].members.push(c.uid); c.recruitedRound = 1; c.recruitedBy = 0; c.used = false;
    // re-ask the buy step so the new member's On Use is offered, then use it
    s.queue = [{ t: 'buy', p: 0 }, ...s.queue.slice(1)];
    s.pending = null;
    s = resume(s);
    s = applyMove(s, { player: 0, option: `use:${c.uid}` });
    if (!s.pending || s.pending.kind !== 'choose' || s.pending.player !== 0) continue;
    s.build = buildStamp();
    return { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
  }
  throw new Error('handover save: never reached');
}
