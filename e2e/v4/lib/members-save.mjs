// A saved hot-seat game for the members gate (e2e/v4/members.mjs): P1 (the only person) is about to place in round I
// on a table of Gold, Echo, Trading and Magenta, holding a full spread of members: use-once ones ready (Lottery Winner,
// Heiresses), one worth nothing now (Safecracker: the rivals hold nothing), one already used (Speculator), switches
// (Midas on, Translator off), reactions (Prospector, Impressionist), a game-end scorer
// (Tycoon) and one the engine would refuse now (Pawnbroker: nothing to sell). P2 holds Raider (a use still in hand; Stunt Double's copy is a recruit trigger now, not a use);
// P3 lies low (safe this round), and only P3; P4 holds 13
// members (its card scrolls inside the window). The round-start snapshot
// is saved too. No round-start income, so the seat has room for six figures.
import { createGame, applyMove, chooseBotMove } from '../../../src/engine/v4/index.js';
import { resume, memberWeight, cardDef, shopSize } from '../../../src/engine/v4/core.js';
import { seededRandom } from '../../../src/engine/v4/rng.js';
import { buildStamp } from './stamp.mjs';
import { freeCard } from './deal.mjs';

const SEATS = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
export const QUADS = ['gold', 'echo', 'trading', 'thieves'];
export const HAND = ['gold.jackpot', 'gold.speculator', 'gold.midas', 'gold.prospector', 'gold.tycoon',
  'echo.translator', 'echo.tuningfork', 'trading.heiress', 'trading.pawnbroker', 'thieves.bigscore'];
export const RIVAL = ['gold.thrift', 'trading.raider'];
const play = (s, move) => { const next = applyMove(s, move); next.history = [...(s.history || []), [move.player, move.option]]; return next; };

export function membersSave(from = 1) {
  for (let seed = from; seed < from + 200; seed++) {
    let s = createGame({ seats: SEATS, seed, quadrants: QUADS });
    s.build = buildStamp();
    s.history = [];
    const rand = seededRandom(seed);
    for (let n = 0; n < 200 && !(s.round === 1); n++) s = play(s, chooseBotMove(s, rand));
    if (s.round !== 1) continue;
    s = structuredClone(s);
    // a member the cull leaves out of the deck (Lottery Winner, Midas, Translator, Pawnbroker, Safecracker) is minted
    const give = (pid, id) => {
      const u = freeCard(s, id);
      s.shop = s.shop.filter(x => x !== u);
      s.pile = s.pile.filter(x => x !== u);
      s.players[pid].members.push(u);
      s.cards[u].recruitedRound = 0;
      return u;
    };
    const uids = HAND.map(id => give(0, id));
    const theirs = RIVAL.map(id => give(1, id));
    // P4 holds a crowd (w2a #16: a 12+ member seat card ran off the screen): the first 13 one-body members left in
    // the pile (a printed group like Mob counts several members, which would blur cards against members here)
    // (no steal guard such as Bodyguards either: it would make P4 "safe this round" too, and only P3 lies low)
    for (const u of s.pile.filter(x => !s.players.some(p => p.members.includes(x)) && memberWeight(s, x) === 1 && !cardDef(s, x).guardSteal).slice(0, 13)) give(3, s.cards[u].def);
    while (s.shop.length < shopSize(s) && s.pile.length) s.shop.push(s.pile.shift());
    s.cards[uids[HAND.indexOf('gold.midas')]].on = true;
    s.cards[uids[HAND.indexOf('echo.translator')]].on = false;
    s.cards[uids[HAND.indexOf('gold.speculator')]].used = true;
    for (const r of s.resources) s.players[0].res[r] = 3;
    // P3 lies low (w2b #21)
    s.players[2].hideout = 1;
    resume(s); // the step waiting now sees the new hands (its use options)
    const roundStart = s;
    for (let n = 0; n < 400 && !(s.pending && s.pending.player === 0 && s.pending.kind === 'place'); n++) s = play(s, chooseBotMove(s, rand));
    if (!(s.round === 1 && s.pending && s.pending.player === 0 && s.pending.kind === 'place')) continue;
    // P2 still holds the 7 gold Lottery Winner wins (the gate's "Use: +7"), and Raider still in hand (m9): a bot
    // that spent gold or used Raider before P1's turn moves to the next seed
    const raider = s.players[1].members.find(u => s.cards[u].def === 'trading.raider');
    if (raider == null || s.cards[raider].used || s.players[2].hideout !== 1) continue;
    // Safecracker ("steal 2 resources from each rival", v0.99.546) finds nothing to take: the rivals hold nothing now
    // (a use worth nothing now, w2b #19; before the new text it was "no rival holds 2 magenta")
    for (const o of s.players.slice(1)) for (const r of Object.keys(o.res)) o.res[r] = 0;
    // and P1 holds 3 of each, whatever the bots took on the way (Lottery Winner's "+7": 3 gold, +2, doubled)
    for (const r of s.resources) s.players[0].res[r] = 3;
    // only P3 lies low (a bot that took a hideout of its own on the way would light a second "safe this round")
    if ([0, 1, 3].some(k => s.players[k].hideout)) continue;
    return {
      seed, uids: Object.fromEntries(HAND.map((id, k) => [id, uids[k]])),
      save: { config: { seats: SEATS.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal', quadrants: QUADS }, state: s, undo: null, savedAt: Date.now() },
      roundStart: { seed: s.seed, round: 1, names: s.players.map(p => p.name).join('|'), state: roundStart },
    };
  }
  throw new Error('members save: no seed gives P1 a place step in round I');
}
