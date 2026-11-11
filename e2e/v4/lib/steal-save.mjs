// Saved hot-seat games stopped on a board-picker choice for P1, the only person.
//  Steals and gifts (Gold, Magenta, Blue, Green): Help Yourself, Redistribute, Lie Low, Collect Debts (round II),
//  Kickback ("give 1 gold to…"); the rivals hold known piles so a test can say which stacks light up.
//  Copies and members (Green, Red, Blue, Magenta): Echo, Cover (round II), Test Drive, Heist (round II; Bury and Shake
//  Down left the wheel Nov 10), Hand-pick (round III).
// Used by the board-picker gate (e2e/v4/steal.mjs) and the before/after shots.
import { createGame, applyMove, chooseBotMove, quadrant } from '../../../src/engine/v4/index.js';
import { contextFor } from '../../../src/engine/v4/core.js';
import { seededRandom } from '../../../src/engine/v4/rng.js';
import { buildStamp } from './stamp.mjs';

export const STEAL_TABLE = ['gold', 'thieves', 'blue', 'green'];
export const BOARD_TABLE = ['echo', 'red', 'market', 'thieves'];
// [table, quadrant id, action key] of each space
export const SPACES = {
  help: [STEAL_TABLE, 'thieves', 'pickpocket'], redistribute: [STEAL_TABLE, 'thieves', 'tipoff'], lielow: [STEAL_TABLE, 'thieves', 'hideout'],
  debts: [STEAL_TABLE, 'gold', 'steal'], kickback: [STEAL_TABLE, 'gold', 'jv'],
  echo: [BOARD_TABLE, 'echo', 'echo'], encore: [BOARD_TABLE, 'echo', 'encore'], cover: [BOARD_TABLE, 'echo', 'hum'], testdrive: [BOARD_TABLE, 'market', 'testdrive'],
  heist: [BOARD_TABLE, 'thieves', 'rob'], handpick: [BOARD_TABLE, 'red', 'take'],
  // Swindle (Nov 10, Shake Down's slot): "Steal a rival's member. Give them a shop member of your choice."
  swindle: [BOARD_TABLE, 'thieves', 'swindle'],
};
// what everyone holds when P1 takes a steal space (P4 holds less than P1: Redistribute still takes from P4, one from
// each rival with no conditions since Cory's 2026-10-17 feedback #18)
export const PILES = [
  { gold: 1, magenta: 0, blue: 1, green: 1 },
  { gold: 3, magenta: 0, blue: 2, green: 4 },
  { gold: 5, magenta: 2, blue: 0, green: 1 },
  { gold: 0, magenta: 1, blue: 0, green: 0 },
];

// placed: false stops a step earlier, with P1 about to place on the space (a test then places it by clicking)
// piles: what everyone holds in place of PILES (steal tables only)
// round: the round to take it in (default the space's own ring; Help Yourself steals 1 × round, so its gate asks for II)
// occupy: { '<space key>': pid } rival minions put down before P1 places (Redistribute steals 1 per Magenta action
//   already holding a minion); each takes one of that rival's minions for the round
export function stealSave(space = 'help', { placed = true, piles = PILES, round: at = null, occupy = null, ownPlaced = null } = {}) {
  const [table, qid, key] = SPACES[space];
  const q = table.indexOf(qid), i = quadrant(qid).actions.findIndex(a => a.key === key), round = at || quadrant(qid).actions[i].ring;
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
  for (let seed = 1; seed < 400; seed++) {
    let s = createGame({ seats, seed, quadrants: table });
    const rand = seededRandom(seed);
    const ready = st => st.round === round && st.pending && st.pending.player === 0 && st.pending.kind === 'place' && st.pending.options.some(o => o.id === `slot:${q}-${i}`);
    for (let n = 0; n < 1500 && !ready(s) && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
    if (!ready(s)) continue;
    if (table === STEAL_TABLE) piles.forEach((r, k) => { s.players[k].res = { ...r }; });
    // the known piles say which stacks light only while every rival can be stolen from (a cloak or Lie Low the bots
    // reached in this seed would hide one: the Nov 3 replacements moved the seeded games onto such a seat)
    if (table === STEAL_TABLE && s.players.slice(1).some(o => !contextFor(s).canSteal(s.players[0], o))) continue;
    if (occupy) {
      if (Object.keys(occupy).some(k => s.slots[k] !== undefined || k === `${q}-${i}`)) continue;
      s = { ...s, slots: { ...s.slots }, players: s.players.map(p => ({ ...p })) };
      for (const [k, pid] of Object.entries(occupy)) { s.slots[k] = pid; s.players[pid].left = Math.max(0, s.players[pid].left - 1); }
    }
    // ownPlaced: P1 has exactly this many minions on the wheel already this round (Help Yourself steals 1 per minion
    // you've placed this round, this one included: Cory, Nov 10); more go on open round I spaces of other colors
    if (ownPlaced != null) {
      const mine = () => Object.values(s.slots).filter(v => v === 0).length;
      if (mine() > ownPlaced) continue;
      s = { ...s, slots: { ...s.slots }, players: s.players.map(p => ({ ...p })) };
      const free = table.flatMap((qq, qi) => quadrant(qq).actions.map((a, ai) => [qi, ai, a])).filter(([qi, ai, a]) => a.ring === 1 && qi !== q && s.slots[`${qi}-${ai}`] === undefined);
      while (mine() < ownPlaced && free.length && s.players[0].left > 1) { const [qi, ai] = free.shift(); s.slots[`${qi}-${ai}`] = 0; s.players[0].left -= 1; }
      if (mine() !== ownPlaced) continue;
    }
    const before = s;
    s = applyMove(s, { player: 0, option: `slot:${q}-${i}` });
    if (!(s.pending && s.pending.player === 0 && s.pending.kind === 'choose')) continue;
    if (!placed) s = before;
    // a board pick needs something on the board: at least two lit choices where the test can see them
    if (placed && table === BOARD_TABLE && s.pending.options.filter(o => o.target).length < 2) continue;
    s.build = buildStamp(); // this build's stamp, or the app sets the save aside as "older version"
    return { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
  }
  throw new Error(`board-pick save: never reached P1 on ${space}`);
}

/** P1 asked by Straggler (round II): "move your last minion to an unused space?", lit spaces plus Stay put. P1 holds
 *  Straggler from the start; bots play every seat until the question comes to P1. */
export function stragglerSave() {
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
  const ready = st => st.round >= 2 && st.pending && st.pending.player === 0 && st.pending.kind === 'choose' && /^Straggler: move your last/.test(st.pending.prompt);
  for (let seed = 1; seed < 200; seed++) {
    let s = createGame({ seats, seed, quadrants: BOARD_TABLE });
    // Straggler is on the bench (Cory, Oct 28), so it's never dealt: hand P1 a copy (the wheel's move pick still gets tested)
    let c = Object.values(s.cards).find(x => x.def === 'benders.straggler');
    if (!c) { const uid = Math.max(...Object.keys(s.cards).map(Number)) + 1; c = s.cards[uid] = { uid, def: 'benders.straggler' }; }
    s.shop = s.shop.filter(u => u !== c.uid); s.pile = s.pile.filter(u => u !== c.uid);
    s.players[0].members.push(c.uid); c.recruitedRound = 0; c.recruitedBy = 0;
    const rand = seededRandom(seed);
    for (let n = 0; n < 2000 && !ready(s) && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
    if (!ready(s) || s.pending.options.filter(o => o.target && o.target.space).length < 2) continue;
    s.build = buildStamp();
    return { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
  }
  throw new Error('straggler save: never reached P1 on Straggler');
}
