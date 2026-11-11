// Saved hot-seat games stopped where P1 (the only person) is about to make a move that sends something to someone, for
// the travel gate (e2e/v4/travel.mjs): a steal (round I and round III), a gift (Kickback), a member taken (Poach), a
// member given to a rival (Swindle), a member's Use, and a member recruited off the wheel (Borrow). Each comes from real bot games (P1 played by the Normal bot until the moment), with
// the engine's own effect stream saying what must travel from where to where.
import { createGame, applyMove, chooseBotMove } from '../../../src/engine/v4/index.js';
import { seededRandom } from '../../../src/engine/v4/rng.js';
import { buildStamp } from './stamp.mjs';
import { freeCard } from './deal.mjs';

const SEATS = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
const prompt = s => (s.pending && s.pending.prompt) || '';
const fx = n => n.effects || [];
// kind → the table, and which of P1's moves it is: (state before, move, state after) → { from, to } of what travels
export const TRAVEL = {
  // a take: a rival's stack to yours (it may arrive as magenta)
  steal1: { q: ['gold', 'thieves', 'red', 'purple'], hit: (s, mv, n) => s.round === 1 && takeOf(n) },
  steal3: { q: ['gold', 'thieves', 'red', 'purple'], hit: (s, mv, n) => s.round === 3 && takeOf(n) },
  // a gift: Kickback's +1 gold to the rival you pick, from the space to their gold
  gift: { q: ['gold', 'red', 'blue', 'green'], hit: (s, mv, n) => /^Kickback: give/.test(prompt(s)) && (g => g && { from: g.from, to: g.to })(fx(n).find(e => e.type === 'gain' && e.to.pid !== 0)) },
  // a member taken: Poach, a rival's member to your crowd
  member: { q: ['gold', 'thieves', 'red', 'purple'], hit: (s, mv, n) => /^Poach: (take|recruit) which/.test(prompt(s)) && (e => e && { from: { kind: 'crowd', pid: e.from.pid }, to: { kind: 'member', pid: 0, uid: e.what.uid } })(fx(n).find(e => e.type === 'member-move' && e.to.pid === 0)) },
  // a member given to a rival (Swindle, Nov 10, in Shake Down's old place: "give them a shop member of your choice in its
  // place"): the shop card goes to the rival's crowd
  swindle: { q: ['gold', 'thieves', 'red', 'purple'], hit: (s, mv, n) => /^Swindle: give /.test(prompt(s)) && (e => e && { from: { kind: 'shop', uid: e.from.uid }, to: { kind: 'member', pid: e.to.pid, uid: e.what.uid } })(fx(n).find(e => e.type === 'recruit' && e.from.kind === 'shop' && e.to.pid !== 0)) },
  // a member's Use: what it gives flies from the member to your stack. P1 holds Speculator ("On Use, once per game:
  // double your gold"), used at its first buy step with gold in hand: the live On Use members that gain at once are rare
  // in bot games (the others ask a question first)
  use: { q: ['gold', 'red', 'blue', 'green'], give: 'gold.speculator', forceUse: true, hit: (s, mv, n) => String(mv.option).startsWith('use:') && (g => g && { from: { kind: 'member', pid: 0, uid: g.cause.uid }, to: g.to })(fx(n).find(e => e.type === 'gain' && e.cause.kind === 'member' && e.to.pid === 0)) },
  // a member recruited off the wheel (Borrow, Nov 10: "Recruit the cheapest shop member, for free"; Walk-In's draw off
  // the deck left the game): its card leaves the shop for your crowd
  borrow: { q: ['red', 'gold', 'blue', 'green'], hit: (s, mv, n) => (n.log || []).slice(-8).some(l => /^P1 took Borrow/.test(l)) && (e => e && { from: { kind: 'shop', uid: e.from.uid }, to: { kind: 'member', pid: 0, uid: e.what.uid } })(fx(n).find(e => e.type === 'recruit' && e.from.kind === 'shop' && e.to.pid === 0)) },
};
function takeOf(n) {
  const t = fx(n).find(e => e.type === 'transfer' && e.to.pid === 0);
  if (t) return { from: t.from, to: t.to };
  // a steal that arrives as magenta: a rival's pay and your gain under one cause
  const p = fx(n).find(e => e.type === 'pay' && e.from.pid !== 0 && e.from.kind === 'stack');
  // (two picks in one move pay and gain under one cause: pair the gain of the same color first)
  const gs = p ? fx(n).filter(e => e.type === 'gain' && e.to.pid === 0 && e.cause === p.cause) : [];
  const g = gs.find(e => e.to.r === p.from.r) || gs[0];
  return g ? { from: p.from, to: g.to } : null;
}

/** { save, moves (P1's options to click, in order), expect: { from, to }, after: the engine's state after the last } */
export function travelSave(kind) {
  const sc = TRAVEL[kind];
  for (let seed = 1; seed < 400; seed++) {
    let s = createGame({ seats: SEATS, seed, quadrants: sc.q });
    if (sc.give) { const uid = freeCard(s, sc.give); s.shop = s.shop.filter(u => u !== uid); s.pile = s.pile.filter(u => u !== uid); s.players[0].members.push(uid); s.cards[uid].recruitedRound = 0; s.cards[uid].recruitedBy = 0; }
    const rand = seededRandom(seed);
    const turn = [];
    for (let k = 0; k < 3000 && !s.over; k++) {
      let mv = chooseBotMove(s, rand);
      if (sc.forceUse && s.pending && s.pending.player === 0 && s.pending.kind === 'buy' && (s.players[0].res.gold || 0) > 0) { const u = s.pending.options.find(o => String(o.id).startsWith('use:')); if (u) mv = { player: 0, option: u.id }; }
      let n;
      try { n = applyMove(s, mv, { effects: true }); } catch { break; }
      if (s.pending && s.pending.player === 0) {
        // a counted pick (Collect Debts, Help Yourself) is clicked pick by pick: start at the first one
        // (only picks of the same ask: a Demote swap just before Help Yourself's picks is its own move, not a pick)
        const head = x => prompt(x).split(':')[0];
        if (s.pending.kind !== 'choose' || !turn.length || turn[turn.length - 1][0].pending.kind !== 'choose' || head(turn[turn.length - 1][0]) !== head(s)) turn.length = 0;
        turn.push([s, mv]);
        const hit = sc.hit(s, mv, n);
        if (hit) {
          const start = turn[0][0];
          start.build = buildStamp();
          return {
            seed, expect: hit, after: n, moves: turn.map(([, m]) => m.option),
            save: { config: { seats: SEATS.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal', quadrants: sc.q }, state: start, undo: null, savedAt: Date.now() },
          };
        }
      } else turn.length = 0;
      s = n;
    }
  }
  throw new Error(`travel-save: no game found for ${kind}`);
}
