// Rule-benders: members that bend a rule instead of paying out (Cory, 2026-10-14). They're guest members: no
// quadrant of their own yet. They're colorless: no sphere counts them, and their whole cost is paid in any colors
// (index.js registerGuests folds the printed colored part into the any part; def.lean is only where it came from).
// They join the shared deck while rules.guests is on, so they can be played and measured.
//
// Most of them are flags the engine reads (core.js, "rule-bending allowances"):
//   squat: true            once per round, place a worker on a rival's taken space
//   extraBuy: true         once per round, a second buy in the same turn
//   anyColorPart: true     pay any member's colored part in any colors
//   pileReach: n           also recruit from the top n of the pile
//   extraWorkers: [I,II,III] extra workers by round (taken after the snake)
//   pickFirst: true        always first in a round's turn order
// Straggler uses the onAllPlaced hook (after the round's last placement, before its contests).
import { discardOf, toDiscard, drawTop } from '../discard.js';
import { registerGuests, spacesOf } from './index.js';
import { extraMinion, spareSpace } from './purple.js';
import { startSteal } from './thieves.js';
import { toBottom, scavenge } from './market.js';
import { REPLACE1, add1, old1, handlers1 } from './replace1.js';
import { add6, old6 } from './replace6.js';
import { add9, old9, handlers9 } from './replace9.js';
import { see, endsAhead } from './botsee.js';
import { pool, freeAsk, freeTake } from './pool.js';
import { MORE } from './price.js';
import { add11, old11, handlers11 } from './replace11.js';
import { add15, old15 } from './replace15.js';
import { pickColors } from './yellow.js';
const holdWorth = (ctx, who, sp) => {
  const [q, i] = sp.key.split('-').map(Number), a = spacesOf(ctx.state, ctx.state.quadrants[q])[i];
  try { return typeof a.estimate === 'function' ? a.estimate(ctx, who) || 0 : sp.ring; } catch { return sp.ring; }
};
/** Hypnotist (REPLACE9 bot test): the open spaces now, as [q, i, action]. */
const hypnoSpaces = ctx => {
  const out = [];
  ctx.state.quadrants.forEach((qid, q) => ctx.quadrant(qid).actions.forEach((a, i) => {
    if (!(a.ring > ctx.state.round || (a.lastRound && ctx.state.round > a.lastRound)) && ctx.state.slots[`${q}-${i}`] === undefined) out.push([q, i, a]);
  }));
  return out;
};
import { startLaunder, launderPick, launderAmount } from './launder.js';

// Prices: member-value sim (scripts/v4-member-value.mjs, 4 normal bots, Release off, handed over at round II),
// priced so value ≈ cost + 1.5 at 1.5 per follower, rounded to the even cost grid. See design/rule-benders.md.
const m = (key, name, lean, s, w, text, extra = {}) => ({ key, name, lean, s, w, text, f: 1, n: 1, bends: true, ...extra });

// ---------- Straggler: after the last placement, move one of your workers to an unused space and do it ----------
function openSpaces(ctx) {
  const out = [];
  ctx.state.quadrants.forEach((qid, q) => spacesOf(ctx.state, qid).forEach((a, i) => {
    if (!(a.ring > ctx.state.round || (a.lastRound && ctx.state.round > a.lastRound)) && ctx.state.slots[`${q}-${i}`] === undefined) out.push({ key: `${q}-${i}`, q, i, a });
  }));
  return out;
}
const actionOf = (ctx, key) => { const [q, i] = key.split('-').map(Number); return spacesOf(ctx.state, ctx.state.quadrants[q])[i]; };
const spaceLabel = (ctx, key) => { const q = Number(key.split('-')[0]); return `${actionOf(ctx, key).name} (${ctx.quadrant(ctx.state.quadrants[q]).name})`; };
/** p's workers on the board: { key, joined } (joined = it shares the space through Squatter). */
function myWorkers(ctx, p) {
  const out = [];
  for (const [key, o] of Object.entries(ctx.state.slots)) if (o === p.id) out.push({ key, joined: false });
  for (const [key, list] of Object.entries(ctx.state.squats || {})) if (list.includes(p.id)) out.push({ key, joined: true });
  return out;
}

// The minion that moves is always the owner's last one placed (Cory, 2026-10-15: "it's always last"), so the only
// question is where it goes. Two Straggler moves can be queued at once (two copies, a Doppelganger): each choice is
// re-checked against the board when it resolves, and offered again with fresh options if an earlier move took its space.
function lastWorker(ctx, p) {
  const all = myWorkers(ctx, p), l = p.lastSlot;
  return (l && all.find(w => w.key === l.key && w.joined === !!l.joined)) || all[all.length - 1] || null;
}
function offerFrom(ctx, owner, uid) {
  const from = lastWorker(ctx, owner), to = openSpaces(ctx);
  if (!from || !to.length) return;
  ctx.choose(owner, `Straggler: move your last minion (on ${actionOf(ctx, from.key).name}) to an unused space and do that action?`, [
    ...to.map(t => ({ id: `to:${t.key}`, label: spaceLabel(ctx, t.key), kind: 'slot', value: t.key, hint: t.a.estimate(ctx, owner) })),
    { id: 'no', label: 'Stay put', kind: 'no', value: null, hint: 0.5 },
  ], 'benders.stragglerTo', { uid, from });
}
/** Open spaces Protesters can sit on: not already blocked, and only while a spare space stays for every minion to come. */
const protestable = ctx => (spareSpace(ctx) ? openSpaces(ctx).filter(t => !(ctx.state.protest?.round === ctx.state.round && ctx.state.protest.keys.includes(t.key))) : []);
const stillMine = (ctx, p, w) => (w.joined ? (ctx.state.squats?.[w.key] || []).includes(p.id) : ctx.state.slots[w.key] === p.id);

const cost = c => c.def.s + c.def.w;
// Anarchist's swaps: any two members, in any cult or the shop, costing within 2 of each other; a rival's member only
// where it may be taken (Bodyguards), and never a member that can't be swapped (Loyalists)
const anarchyCards = (ctx, p) => [...ctx.state.players.flatMap(o => (o === p || ctx.canSteal(p, o, 'swap')) ? ctx.membersOf(o).filter(c => ctx.canSwapMember(c.uid)) : []), ...ctx.shopCards()];
const anarchyFits = (ctx, a, b) => ctx.ownerOf(a.uid) !== ctx.ownerOf(b.uid) // two in the same cult or both in the shop: nothing moves
  && a.def.id !== b.def.id // two copies of one member (piles): nothing changes
  && cost(a) === cost(b);
function anarchyPairs(ctx, p) {
  const all = anarchyCards(ctx, p);
  const out = [];
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) if (anarchyFits(ctx, all[i], all[j])) out.push([all[i], all[j]]);
  return out;
}
/** Is the swap of uids a and b one of anarchyPairs (either way round)? Checks the one pair, not all of them. */
function anarchyPairOk(ctx, p, a, b) {
  const all = anarchyCards(ctx, p);
  const x = all.find(c => c.uid === a), y = all.find(c => c.uid === b);
  return !!(x && y && x !== y && anarchyFits(ctx, x, y));
}
const worth = c => c.def.f + cost(c);
function gainFor(ctx, p, a, b) {
  const oa = ctx.ownerOf(a.uid), ob = ctx.ownerOf(b.uid);
  return oa === p ? worth(b) - worth(a) : ob === p ? worth(a) - worth(b) : 0;
}
function scoutStep(ctx, p, data) {
  // a card already sent stays sent: with a piles shop the row refills at once, and a short deck dealt the same card
  // straight back, so a bot sent it round forever (setup audit, Nov 3: 2 players, Grey piles)
  const left = ctx.shopCards().filter(c => data.start.includes(c.uid) && !(data.sentUids || []).includes(c.uid));
  if (!left.length) return scoutDone(ctx, p, data);
  ctx.choose(p, data.sent.length ? 'Scout: send another to the discard pile, or done' : 'Scout: send which shop members to the discard pile?', [
    ...left.map(c => ({ id: `card:${c.uid}`, label: c.def.name, kind: 'card', value: c.uid, hint: cost(c) > Object.values(p.res).reduce((x, y) => x + y, 0) ? 1 : -1 })),
    { id: 'done', label: 'Done', kind: 'pass', value: null, hint: 0 },
  ], 'benders.scoutPick', data);
}
function scoutDone(ctx, p, data) {
  if (data.sent.length) ctx.log(`${p.name}'s Scout: sent ${data.sent.join(', ')} to the discard pile.`);
  // pays Patroness and Bargain Bin once, as Savings, Bury and Trendsetters do (expert AI games, Nov 1)
  toBottom(ctx, data.sent.length);
  const sentUids = REPLACE1 && data.sent.length ? discardOf(ctx.state).slice(-data.sent.length) : [];
  ctx.refillShop();
  scavenge(ctx, p, sentUids);
}

// Coach's picks: your members with a Once per game or Once per round ability, used or not, but not one Coach already
// used this turn (Tribute Band copying a Tryout that borrowed Coach looped forever; Claude, under Cory's go-with-your-gut)
const coachable = (ctx, p) => ctx.membersOf(p).filter(c => c.freeTurn !== ctx.turnKey()
  && [c.def, c.copy && ctx.defOf(c.copy)].some(d => d?.activate && d.onActivate));
/** Mercenaries (pool 13): n resources from o's biggest piles, one shared steal. */
function hireSteal(ctx, p, o, n, name) {
  if (!ctx.canSteal(p, o)) { ctx.log(`${p.name}'s ${name}: can't steal from ${o.name}.`); return 0; }
  const left = { ...o.res }, take = {};
  for (let i = 0; i < n; i++) {
    const c = [...ctx.state.resources].sort((a, b) => (left[b] || 0) - (left[a] || 0))[0];
    if (!(left[c] > 0)) break;
    left[c] -= 1; take[c] = (take[c] || 0) + 1;
  }
  if (!Object.keys(take).length) { ctx.log(`${p.name}'s ${name}: ${o.name} has nothing to steal.`); return 0; }
  let said = '';
  const k = ctx.steal(p, o, { take, give: (got, took) => {
    for (const [c, x] of Object.entries(took)) p.res[c] = (p.res[c] || 0) + x;
    said = Object.entries(took).map(([c, x]) => `${x} ${c}`).join(', ');
  } });
  if (k) ctx.log(`${p.name}'s ${name}: steals ${said} from ${o.name}.`);
  return k;
}
const members = [
  // idea pipeline pool 6 (Nov 7), grey guests (bot games only). Chameleons: Drifters' choice on a grey card (card.asColor,
  // which every color count reads); it forgets the color when it leaves a cult. Mourners: any cult's member to the
  // discard pile (cast out, released, sent by Doormen), via core's onCultDiscard; never a shop member. Prices fill-ins.
  pool(m('chameleons', 'Chameleons', null, 2, 2, 'On Recruit: choose a color. This member is that color.', {
    onRecruited(ctx, owner, card) {
      ctx.choose(owner, 'Chameleons: this member is which color?', ctx.state.quadrants.map(q => ({
        id: `color:${q}`, label: ctx.quadrant(q).name, kind: 'color', value: q, hint: ctx.countMembersOfColor(owner, q),
      })), 'benders.chameleon', { uid: card.uid });
    },
  }), 'pool6'),
  pool(m('mourners', 'Mourners', null, 2, 2, 'Whenever a member goes from any cult to the discard pile, +1 follower.', {
    onCultDiscard(ctx, owner) { owner.bonus += 1; ctx.log(`${owner.name}'s Mourners: a member went to the discard pile, +1 follower.`); },
    ...see(info => 1.5 * endsAhead(info).length),
  }), 'pool6'),
  // idea pipeline pool 9 (Nov 7), grey guests (bot games only). Vagabonds: at Round End (before contests, as every
  // Round End member) it moves to the one cult with the fewest members as the game counts them (a tie for fewest, its
  // own cult among them or not, and it stays); once a round, so it can't walk again in the same Round End. Its +3 is
  // an arrival like Ghost's: recruited, swapped, taken, given or walked in. Wayfarers: the same arrival, a free shop
  // member costing up to 4 as written, plus MORE as every named cost moves with the price raise (Cory, Nov 5), so 5:
  // nothing costs 4 any more. Prices fill-ins: 6 any as a player sees it, as Saints'.
  pool(m('vagabonds', 'Vagabonds', null, 0, 3, "Round End: this member joins the cult with the fewest members (if tied, it stays). Whenever it joins a cult, that cult's owner +3 followers.", {
    onAllPlaced(ctx, owner, card) {
      if (card.walked === ctx.state.round) return;
      const all = ctx.state.players, low = Math.min(...all.map(o => ctx.memberCount(o))), at = all.filter(o => ctx.memberCount(o) === low);
      if (at.length !== 1 || at[0] === owner) return;
      card.walked = ctx.state.round;
      ctx.log(`${owner.name}'s Vagabonds joins ${at[0].name}'s cult (the fewest members).`);
      ctx.moveMember(card.uid, owner, at[0], { actor: owner });
    },
    onJoined(ctx, owner) { owner.bonus += 3; ctx.log(`${owner.name}'s Vagabonds: joined their cult, +3 followers.`); },
    ...see(() => 3), // BOTSEE: the +3 on the recruit
  }), 'pool9'),
  pool(m('wayfarers', 'Wayfarers', null, 0, 3, `Whenever this member joins your cult, recruit a shop member costing up to ${4 + MORE}, for free.`, {
    onJoined(ctx, owner) {
      freeAsk(ctx, owner, 'Wayfarers', ctx.shopCards().filter(c => c.def.s + c.def.w <= 4 + MORE), 'benders.wayfarers', `no shop member costs ${4 + MORE} or less`);
    },
    ...see(() => 3), // BOTSEE: the free member on the recruit
  }), 'pool9'),
  // idea pipeline pool 7 (Nov 7, writer round 1; prices are fill-ins, 6/7/8 any as a player sees it). Saints and Bandits:
  // onJoined, so a recruit, a swap, a take or a gift all count (as Ghost's). Protesters: core protested(); only while a
  // spare space is left (spareSpace), so no minion is left with nowhere to go.
  pool(m('saints', 'Saints', null, 0, 3, 'Whenever this member joins your cult, +3 followers.', {
    onJoined(ctx, owner) { owner.bonus += 3; ctx.log(`${owner.name}'s Saints: +3 followers.`); },
  }), 'pool7'),
  pool(m('bandits', 'Bandits', null, 0, 4, 'Whenever this member joins your cult, steal 3 resources.', {
    onJoined(ctx, owner) { startSteal(ctx, owner, 'Bandits', 3, { fromAction: false }); },
  }), 'pool7'),
  pool(m('protesters', 'Protesters', null, 0, 5, 'On Use, once per round, from round II: put this member on an open space. Nobody can place there this round.', {
    activate: 'round',
    onRoundStart(ctx, owner, card) { card.used = false; },
    onActivate(ctx, owner, card) {
      const open = protestable(ctx);
      if (ctx.state.round < 2 || !open.length) { card.used = false; ctx.log(`${owner.name}'s Protesters: ${ctx.state.round < 2 ? 'only from round II' : 'no spare open space'}.`); return; }
      ctx.choose(owner, 'Protesters: block which open space this round?', open.map(t => ({
        id: `to:${t.key}`, label: spaceLabel(ctx, t.key), kind: 'slot', value: t.key, hint: Math.max(0, ...ctx.rivals(owner).map(o => t.a.estimate?.(ctx, o) || 0)) - (t.a.estimate?.(ctx, owner) || 0) * 0.5,
      })), 'benders.protest', { uid: card.uid });
    },
    // bots block when a space is worth 4 or more to some rival
    botActivate: (ctx, owner) => ctx.state.round >= 2 && protestable(ctx).some(t => Math.max(0, ...ctx.rivals(owner).map(o => t.a.estimate?.(ctx, o) || 0)) >= 4),
  }), 'pool7'),
  // idea pipeline pool 13 (Nov 7), grey guests (bot games only): the steal is the shared one (Lie Low, Bodyguards, Snitch
  // apply), taken from the victim's biggest piles; then the member moves to that rival's cult whether the steal landed or
  // not, still used (once per round: theirs to use next round; once per game: once for the card). Prices fill-ins.
  ...[['mercenaries', 'Mercenaries', 'round', 3, 1], ['hiredguns', 'Hired Guns', 'game', 5, 2]].map(([key, name, every, n, w]) => pool(m(key, name, null, 0, w,
    `On Use, once per ${every}: steal ${n} resources from a rival, then give them this member.`, {
      activate: every,
      ...(every === 'round' ? { onRoundStart(ctx, owner, card) { card.used = false; } } : {}),
      onActivate(ctx, owner, card) {
        ctx.choose(owner, `${name}: steal ${n} resources from which rival, then give them this member?`, ctx.rivals(owner).map(o => ({
          id: `player:${o.id}`, label: `${o.name} (${Object.values(o.res).reduce((a, b) => a + b, 0)} resources)`, kind: 'player', value: o.id,
          hint: Math.min(n, Object.values(o.res).reduce((a, b) => a + b, 0)) + 0.01 * ctx.followers(o),
        })), 'benders.hire', { uid: card.uid, n, name });
      },
      botActivate: (ctx, owner) => ctx.rivals(owner).some(o => Object.values(o.res).reduce((a, b) => a + b, 0) >= n),
    }), 'pool13')),
  // Party Crasher (was Squatter; id kept for old records): Cory, 2026-10-28, Once per game, cheaper; 5 with the +1 wild (Cory, Nov 1: "5"; was 4)
  m('squatter', 'Party Crasher', 'thieves', 2, 2, 'On Use, once per game: your next minion can be placed on a space a rival already took.', { // cut Nov 7 (cull.js): Scouts takes its place (Cory, "Yes") // still joins in round I at 5, so grey keeps 4 (Claude's fill-in)
    activate: 'game',
    onActivate(ctx, owner, card) {
      if (owner.crashNext) { card.used = false; return; }
      owner.crashNext = true;
      ctx.log(`${owner.name}'s Party Crasher: the next minion may go on a space a rival took.`);
    },
    botActivate: (ctx, p) => ctx.state.round >= 2 && !p.crashNext,
  }),
  // Big Spender as it printed until Oct 28, never dealt: the fixture for the engine's once-per-round second buy
  m('bigspender1', 'Big Spender', 'gold', 1, 1, 'Once per round: recruit twice in one turn.', { extraBuy: true, retired: true }),
  // Cory, 2026-10-28: back in the deck (it stands in for Blue's recruits), One Time Use, 3
  m('bigspender', 'Big Spender', 'gold', 1, 1, 'On Use, once per game: recruit twice this turn.', {
    activate: 'game',
    onActivate(ctx, owner, card) {
      if (owner.buyTwiceNow) { card.used = false; return; }
      owner.buyTwiceNow = true;
      ctx.log(`${owner.name}'s Big Spender: recruit twice this turn.`);
    },
    onTurnEnd(ctx, owner, card, p) { if (p === owner) delete owner.buyTwiceNow; },
    botActivate: (ctx, p) => !p.buyTwiceNow && ctx.state.round >= 2 && p.turnBuys === 0 && Object.values(p.res).reduce((a, b) => a + b, 0) >= 10,
  }),
  m('freelancer', 'Alchemists', 'yellow', 2, 2, /* Freelancer until Cory renamed it, Oct 28 */ 'All your resources count as any when you recruit a member.', { f: 3, anyColorPart: true, ...old6 }), // (Cory, Oct 29, balance run: +1 follower)
  m('insider', 'Insider', 'market', 3, 1, 'You may also recruit from the top 3 of the pile.', { pileReach: 3 }),
  // Extra Hand as it printed until Oct 28, never dealt (retired): the tests of extra minions a card grants by round
  // (Poach and swaps moving an unplaced grant, copies, a full board) keep it as their fixture
  m('extrahand3', 'Extra Hand', 'purple', 5, 4, '+1 minion in round III.', { extraWorkers: [0, 0, 1], retired: true }),
  // Cory, 2026-10-28: "probably needs to be a Use Once… it had to have some category, and On Recruit would be broken"
  m('extrahand', 'Extra Hand', 'purple', 5, 2, /* Cory, Nov 5 backlog price yes */ 'On Use, once per game: +1 minion this round.', { from: 2, ...old9('benders.extrahand'),
    activate: 'game',
    onActivate(ctx, owner, card) { if (!extraMinion(ctx, owner, 'Extra Hand')) card.used = false; },
    botActivate: ctx => ctx.state.round === 3 && spareSpace(ctx),
  }),
  // REPLACE9 bot test (Members C, Nov 4, batch bC1: paper 17 vs Extra Hand's 14, the guests' set 10 -> 14): Extra
  // Hand's place. 6 any as a player sees it. Fewest followers when its Round Start comes up (ties count); no extra
  // minions in round I, the game's rule (extraMinion).
  // c2 (Nov 4, A/B c1: bots only ever met it in round III, after the last Round Start): joins in round I.
  ...add9(m('standin', 'Stand-In', 'purple', 0, 5, 'Round Start: if you have the fewest followers (ties count), +1 minion this round.', { round: 1,
    onRoundStart(ctx, owner) {
      const mine = ctx.followers(owner);
      if (!ctx.state.players.every(o => o === owner || ctx.followers(o) >= mine)) return;
      extraMinion(ctx, owner, 'Stand-In');
    },
    ...see(i => endsAhead(i).filter(r => r > 1 && r > i.round).length * 2), // BOTSEE: about every other later round start, a minion worth about 4
  })),
  // REPLACE9 bot test (Members C, Nov 4): Extra Hand's place. 6 any as a player sees it. The owner picks an open space now;
  // the next minion placed after the owner's turn ends (anyone's, the owner's own on a snake double) must go there
  // (core: state.hypno). If that space is taken by then, or the round ends first, nothing happens.
  ...add9(m('hypnotist', 'Hypnotist', 'purple', 0, 5, 'On Use, once per game: whoever places next puts their minion on an open space you choose.', { from: 2,
    activate: 'game',
    onActivate(ctx, owner, card) {
      const open = hypnoSpaces(ctx);
      if (open.length < 2 || ctx.state.hypno) { card.used = false; ctx.log(`${owner.name}'s Hypnotist: no open space to choose.`); return; }
      // the bots' guess at who places next: the first rival turn still queued (the owner's own, on a snake double, is rare)
      const nxt = ctx.state.queue.find(t => (t.t === 'turn' || t.t === 'place') && t.p !== undefined && t.p !== owner.id);
      const who = nxt ? ctx.player(nxt.p) : owner;
      ctx.choose(owner, 'Hypnotist: whoever places next must put their minion on which open space?', open.map(([q, i, a]) => ({
        id: `slot:${q}-${i}`, label: `${a.name} (${ctx.quadrant(ctx.state.quadrants[q]).name})`, kind: 'choice', value: `${q}-${i}`,
        // bots send the next player to the space worth least to that player (the smallest estimate for them)
        hint: -(typeof a.estimate === 'function' ? (() => { try { return a.estimate(ctx, who) || 0; } catch { return 0; } })() : 0),
      })), 'benders.hypno');
    },
    // bots use it only when a rival still places after them and the open spaces differ for that rival by 3 or more
    // (play judges, Nov 4: one use came on the game's last placement, with nobody left to place)
    botActivate: (ctx, owner) => {
      if (ctx.state.round < 2 || ctx.state.hypno) return false;
      const open = hypnoSpaces(ctx);
      if (open.length < 3) return false;
      const nxt = ctx.state.queue.find(t => (t.t === 'turn' || t.t === 'place') && t.p !== undefined && t.p !== owner.id);
      const who = nxt && ctx.player(nxt.p);
      if (!who || !(who.left > 0)) return false;
      const est = open.map(([, , a]) => { try { return typeof a.estimate === 'function' ? a.estimate(ctx, who) || 0 : 0; } catch { return 0; } });
      return Math.max(...est) - Math.min(...est) >= 3;
    },
  })),
  m('frontrunner', 'Line Cutters', 'purple', 1, 0, 'You go first every round.', { pickFirst: true, f: 3, n: 3, ...old1, ...old11('placeholders') }), // worth 3 (Cory, Nov 1: "maybe we make it 3 members?"), renamed (Cory, Nov 1: "make front runner worth more followers. figure out a better name") // Cory, Oct 21: 5; Oct 27: 4; Oct 28 "could probably be cheaper": 3 with the +1 wild (Claude's price, the floor); Oct 29 "I'm okay with front runners at 2": 2
  // Place Holders' bot pick (Evaluators, Nov 4: bots held Last Call by ring and never took it): hold the space worth
  // most to the holder right now, which is also the one its own placement takes first
  // REPLACE11 bot test (Actions lane, Nov 4; quality/pitches/actions-line-cutters.md): Line Cutters' place, same cost,
  // worth 3, counts as 3. The token is state.held {key, pid, round}; the place step leaves that space out for everyone
  // else this round. Only Round Start (no On Recruit). Off the switch, state.held never exists.
  ...add11(m('placeholders', 'Place Holders', 'purple', 1, 0, 'Round Start: put a token on a space; only you may take it this round.', { f: 3, n: 3,
    ...see(i => endsAhead(i).length * 1.5),
    onRoundStart(ctx, owner, card) {
      const open = ctx.openSpaces();
      if (!open.length) return;
      ctx.choose(owner, 'Place Holders: hold which space for yourself this round?', open.map(sp => ({
        id: `space:${sp.key}`, label: sp.name, kind: 'space', value: sp.key, hint: holdWorth(ctx, owner, sp),
      })), 'benders.holdSpace');
    },
  })),
  // REPLACE1 bot test (Nov 3, replacement batch 1): Line Cutters' place. 4 any as a player sees it. The rival chosen is
  // kept on the card (card.grudge: a marker on that rival's board). Scores after every other game-end bonus, and only
  // loose followers can be taken (as Raiders); Bodyguards and Lie Low block it like any steal.
  ...add1(m('grudge', 'Grudge', null, 0, 3, 'On Recruit: choose a rival. Game End: steal 4 followers from them if they have more than you.', { f: 2, botValue: 0, endLast: true,
    onRecruited(ctx, owner, card) {
      const list = ctx.rivals(owner);
      if (!list.length) return;
      ctx.choose(owner, 'Grudge: choose a rival', list.map(o => ({
        id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers)`, kind: 'player', value: o.id, hint: ctx.followers(o),
      })), 'benders.grudge', { uid: card.uid });
    },
    // a pure read (bots and the results screen call it): what Grudge takes now
    onGameEnd(ctx, owner, card) {
      const t = card.grudge != null ? ctx.player(card.grudge) : null;
      if (!t || t === owner || ctx.followers(t) <= ctx.followers(owner) || !ctx.canSteal(owner, t)) return 0;
      return Math.min(4, Math.max(0, t.bonus));
    },
    onGameEndTake(ctx, owner, card, got) {
      const t = ctx.player(card.grudge);
      t.bonus -= got;
      if (t.final) { t.final.total -= got; t.final.parts.push(`${owner.name}'s Grudge −${got}`); }
      ctx.log(`${owner.name}'s Grudge: steals ${got} follower${got === 1 ? '' : 's'} from ${t.name}.`);
    },
  })),
  // Cory's ideas, Oct 21, on this sim branch only. Launderer is simplified for the bots: one color, not any split.
  // Cory, Oct 28: "Launderers, 2 Followers" and "it should let you completely redo all your money… converting a lot at
  // once and being flexible across colors": all into one color in one click, or split color by color.
  // Cory, Oct 29: "should let me rearrange colors as i please, not all to one color": on screen the Launderers card
  // (LaunderCard.jsx) sets any mix at once and answers these steps itself; bots still pick here
  m('launderer', 'Launderers', null, 0, 3, /* Cory, Oct 27: "closer to 5" with the +1 wild */ 'On Recruit: rearrange your resources into any mix of colors.', { f: 3, n: 3, // +1 (Cory, Oct 30)
    onRecruited(ctx, owner) { startLaunder(ctx, owner, 'Launderers'); },
  }),
  // Cory, 2026-10-28: "a 5 cost Saboteur… gives -3 Followers each time it enters somebody's cult (swapped in OR recruited etc)"
  // Cory, 2026-10-31: renamed Old Maid (the card nobody wants stuck with), same card; the id stays 'saboteur'
  m('saboteur', 'Ghost', null, 0, 2, /* 5 any as a player sees it, round II as before (Cory, Nov 6: "ghost should stay 5 cost") */ 'Worth 0 members. Whenever this member joins your cult, −5 followers.', { f: 0, n: 0, round: 2, // was Old Maid (Cory, Nov 5 backlog yes)
    botValue: 0,
    onJoined(ctx, owner) {
      owner.bonus -= 5; // −5 (Cory, Nov 1 playtest: "old maid might need to be -5 followers")
      ctx.log(`${owner.name}'s Ghost: −5 followers.`);
    },
  }),
  // Cory, 2026-10-28: Dabblers (Turncoat, then Groupies), 3, "give 2 members, and count as every color"
  m('dabblers', 'Dabblers', null, 0, 2, 'Counts as 2 wild members.', { n: 2, everyColor: true, ...old9('benders.dabblers') }),
  // REPLACE9 bot test (Members C, Nov 4, batch bC2: paper 17 vs Dabblers' 12, the guests' set 12 -> 14): Dabblers' place,
  // the single version. 2 any as a player sees it, worth 1, counts as 1 member of every color on the table.
  ...add9(m('dabbler', 'Dabbler', null, 0, 1, 'Counts as a member of every color.', { everyColor: true })),
  // Cory, 2026-10-28: Cheerleader (Champion), 4
  m('cheerleader', 'Cheerleader', null, 0, 3, 'Whenever you win a contest, +1 follower.', {
    // after every contest, as Cheerleaders (Cory, Nov 5: "round ends, contests, members.", then "yes" to moving it), so its
    // +1 never counts in a later contest; a shared contest counts as a win
    afterContests(ctx, owner, card, table) {
      for (const c of table) if (c.winners.includes(owner.id)) { owner.bonus += 1; ctx.log(`${owner.name}'s Cheerleader: +1 follower.`); }
    },
  }),
  // REPLACE15 bot test (Cory, Nov 4: "when you win a contest, get x y z", then "the member should give resources for
  // winning contests", "though cheerleaders is kinda cool too"): added, nothing retired (Cory: Spoilsport and Dabblers stay). A shared contest
  // counts as a win, as for Cheerleader and Sore Loser. Each pays the moment its contest is scored. Prices are guesses.
  // Both pay after every contest is scored (contests score at once at round end), so a +2 never changes another contest's count.
  ...add15(m('cheerleaders', 'Cheerleaders', null, 0, 4, 'Whenever you win a contest, +2 followers.', { f: 3, n: 3, /* Cory, Nov 5: cheaper, counts as 3 */ // worth 2 (owners won 19% at worth 1, 30% at 2: cw3-cheerleaders). Cory, Nov 4: "maybe we can bump cheerleaders to 3 members", then "but for now they go in as-is"
    afterContests(ctx, owner, card, table) {
      for (const c of table) if (c.winners.includes(owner.id)) { owner.bonus += 2; ctx.log(`${owner.name}'s Cheerleaders: +2 followers.`); }
    },
  })),
  // retired Nov 6 (Cory: "i said Victors is bad didnt we take that out??"); grey deals 11 again
  ...add15(m('victors', 'Victors', null, 0, 4, 'Whenever you win a contest, +2 of its color.', { retired: true,
    afterContests(ctx, owner, card, table) {
      for (const c of table) if (c.winners.includes(owner.id)) {
        const color = ctx.quadrant(c.qid).resource;
        // named on the resource ledger as Victors
        ctx.asMember(owner, 'Victors', () => { const got = ctx.gain(owner, color, 2); if (got) ctx.log(`${owner.name}'s Victors: +${got.n} ${got.color}.`); }, card.uid);
      }
    },
  })),
  ...add15(m('warchest', 'War Chest', null, 0, 4, 'Whenever you win a contest, +3 resources in any colors.', {
    onContestWin(ctx, owner) { pickColors(ctx, owner, 3, 'War Chest'); },
  })),
  // resources of the contest's color, through the shared steal (Bodyguards blocks it)
  ...add15(m('gloaters', 'Gloaters', null, 0, 5, 'Whenever you win a contest, take 1 of its color from each rival.', {
    onContestWin(ctx, owner, card, c) {
      const color = ctx.quadrant(c.qid).resource;
      const inst = ctx.stealInstance();
      let got = 0;
      for (const o of ctx.state.players) if (o !== owner) got += ctx.steal(owner, o, { take: { [color]: 1 }, instance: inst, give: n => { owner.res[color] = (owner.res[color] || 0) + n; } });
      if (got) ctx.log(`${owner.name}'s Gloaters: takes ${got} ${color} from rivals.`);
    },
  })),
  // Cory, 2026-10-28: Anarchist, 7, once per round (it stands in for Red's swaps)
  m('anarchist', 'Anarchist', null, 0, 5, /* 6 with the +1 wild (Cory, Nov 1 3:03pm: "maybe we make it a touch cheaper? yes to 1"; was 7) */ 'On Use, once per round: swap any 2 members that cost the same, in any cult or the shop.' /* Cory, Nov 5: fine print cut */, {
    activate: 'round',
    onRoundStart(ctx, owner, card) { card.used = false; },
    onActivate(ctx, owner, card) {
      const pairs = anarchyPairs(ctx, owner);
      if (!pairs.length) { card.used = false; ctx.log(`${owner.name}'s Anarchist: no two members of the same cost to swap.`); return; }
      ctx.log(`${owner.name} uses Anarchist.`);
      const where = c => ctx.ownerOf(c.uid)?.name || 'Shop';
      ctx.choose(owner, 'Anarchist: choose two members of the same cost to swap', pairs.map(([a, b]) => ({
        id: `trade:${a.uid}:${b.uid}`, label: `${where(a)}: ${a.def.name} ↔ ${where(b)}: ${b.def.name}`, kind: 'trade', value: [a.uid, b.uid],
        hint: gainFor(ctx, owner, a, b),
      })).concat({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null, hint: -99 }), 'benders.anarchy', { uid: card.uid });
    },
    botActivate: (ctx, p) => anarchyPairs(ctx, p).some(([a, b]) => gainFor(ctx, p, a, b) >= 2),
  }),
  // Cory, 2026-10-28: Scout, 4, once per round (it stands in for Blue's shop work)
  m('scout', 'Scouts', null, 2, 2, /* Party Crasher's price (Claude, Nov 7) */ 'On Use, once per round: send any shop members to the discard pile, then refill.', { f: 2, n: 2, // back in Party Crasher's place (Cory, Nov 7: "Yes"); earlier Spoilsport took its place (Claude, under Cory's "use your judgement", 2026-11-03); worth 2, plural (Cory, Nov 1: "I like scout, why cut? … make it more members maybe")
    activate: 'round',
    onRoundStart(ctx, owner, card) { card.used = false; },
    onActivate(ctx, owner, card) {
      if (!ctx.state.shop.length) { card.used = false; return; }
      scoutStep(ctx, owner, { start: [...ctx.state.shop], sent: [] });
    },
    botActivate: (ctx, p) => ctx.state.round >= 2 && ctx.shopCards().filter(c => cost(c) > Object.values(p.res).reduce((a, b) => a + b, 0)).length >= 3,
  }),
  // Replacement batch 2 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Scouts' place, and a round I member as Scouts was (round: 1, so grey
  // keeps 4). 6 any as a player sees it. Chosen after the round's last placement, before anything is scored (core's
  // allPlaced step), among every contest, your own lead included (Cory, Nov 6: "lets just make spoilsport 'choose a
  // contest' rather than one you dont lead. It doesnt make sense to exclude it, most players wouldnt do it anyways");
  // core's contest table then gives that contest no winner this round (state.spoiled).
  m('spoilsports', 'Spoilsport', null, 0, 5, 'Round End: choose a contest; nobody wins it this round.', {
    onAllPlaced(ctx, owner) {
      const led = new Map(ctx.state.players.map(o => [o.id, ctx.contestsLed(o)]));
      const opts = ctx.state.quadrants.map(q => {
        const winners = ctx.state.players.filter(o => led.get(o.id).includes(q));
        const mine = winners.some(o => o.id === owner.id);
        return {
          id: `spoil:${q}`, label: `${ctx.quadrant(q).name} (${winners.length ? `${winners.map(o => o.name).join(' & ')} lead${winners.length === 1 ? 's' : ''}` : 'nobody leads'})`, kind: 'choice', value: q,
          // bots spoil the contest of the rival furthest ahead, never their own lead
          hint: mine ? -1 : winners.length ? Math.max(...winners.map(o => ctx.followers(o))) / winners.length : 0,
        };
      });
      ctx.choose(owner, 'Spoilsport: which contest does nobody win this round?', opts, 'benders.spoil');
    },
  }),
  // Cory, 2026-10-28: Con Men, 6, counts as 2 members; On Recruit (was One Time Use), split among rivals like Help Yourself
  // Cory, 2026-10-29: "for the steal on recruit, you should get to choose when you steal": On Use, once per game
  m('conmen', 'Con Men', null, 0, 6, /* 7 (Cory, Oct 29: "i would put con men at 7") */ 'On Recruit: steal 5 resources.', { n: 2,
    // On Recruit, not a once-per-game use (Cory, 2026-10-31: "Con men should be on recruit")
    onRecruited(ctx, owner) { startSteal(ctx, owner, 'Con Men', 5, { fromAction: false }); },
  }),
  // Cory, 2026-10-28: HR (Archivist), 9, worth 3 (so it counts as 3 members)
  m('hr', 'HR', null, 0, 9, /* price 10 and +2 per color (Cory, Nov 1: "we can try +2. then price it at 10 to start") */ 'Game End: +2 followers per color you have 3 members of.', { f: 4, n: 4, retired: true, // Sore Loser takes its place (Claude, under Cory's "use your judgement", 2026-11-04)
    // guests count as a color here, they just have no resource (Cory, 2026-10-30: "should they count for the purposes of HR? they should")
    onGameEnd: (ctx, owner) => 2 * [...ctx.state.quadrants, 'guest'].filter(q => ctx.countMembersOfColor(owner, q) >= 3).length,
  }),
  // Cory, 2026-10-28: the 8 ("use one of your One Time Use members again"), named Coach (Cory, Oct 29); now any member's
  // Once per game or Once per round ability, as a free extra use (Cory, Oct 29: "activate the On Use effect of one of
  // your members (could be a once per round)")
  m('secondwind', 'Coach', null, 0, 6, /* 7 (Cory, Oct 30: "coach should be cheaper") */ 'On Recruit: activate one of your members’ On Use ability as a free extra use.', {
    onRecruited(ctx, owner) {
      const list = coachable(ctx, owner);
      if (!list.length) { ctx.log(`${owner.name}'s Coach: no member with an On Use ability.`); return; }
      ctx.choose(owner, 'Coach: which member’s On Use ability do you activate?', list.map(c => ({
        id: `card:${c.uid}`, label: c.def.name, kind: 'card', value: c.uid, hint: cost(c),
      })), 'benders.rewind');
    },
  }),
  // Replacement batch 6 (Nov 3), live since Nov 4 (Claude, under Cory's "use your judgement"): HR's place. 5 any as a player sees it. Read right after the contests
  // are scored (core's afterContests): a shared contest counts as a win; rivals tied for the most wins (at least 1):
  // the owner chooses. Loose followers only, through the shared steal (Bodyguards blocks it), as Raiders takes.
  m('sorelosers', 'Sore Loser', null, 0, 4, 'Round End: if you win no contest, steal 5 followers from the rival who wins the most.', { round: 3, // a round III member as HR was (bot-tested in round II; Nov 4)
    afterContests(ctx, owner, card, table) {
      const wins = o => table.filter(c => c.winners.includes(o.id)).length;
      // each quiet case says why in the log (Cory's playtest, Nov 4: "the sore loser didnt trigger")
      if (wins(owner)) { ctx.log(`${owner.name}'s Sore Loser: ${owner.name} won or tied a contest, so no steal.`); return; }
      const rivals = ctx.state.players.filter(o => o !== owner && wins(o) > 0);
      if (!rivals.length) { ctx.log(`${owner.name}'s Sore Loser: no rival won a contest, so no steal.`); return; }
      const most = Math.max(...rivals.map(wins));
      const top = rivals.filter(o => wins(o) === most);
      if (top.length === 1) return soreSteal(ctx, owner, top[0]);
      ctx.choose(owner, 'Sore Loser: steal 5 followers from which rival?', top.map(o => ({
        id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers)`, kind: 'player', value: o.id, hint: ctx.followers(o),
      })), 'benders.sore');
    },
  }),
  // REPLACE6 bot test: Alchemists' place. 5 any as a player sees it. The stall is a list beside this card
  // (state.stalls[uid]); core's recruit step offers it to rivals and pays them the cost (stallCards in core.js).
  // Unsold members stay beside the card; a card that leaves its owner keeps its stall unsold (Claude's reading).
  ...add6(m('peddlers', 'Peddlers', null, 0, 4, 'On Recruit and Round Start: put the top member of the pile beside this card. Rivals may recruit members there, paying you instead of the bank.', { now: true, stall: true,
    onRoundStart(ctx, owner, card) {
      const s = ctx.state;
      const uid = drawTop(s, ctx.log);
      if (uid === undefined) return;
      ((s.stalls ||= {})[card.uid] ||= []).push(uid);
      ctx.log(`${owner.name}'s Peddlers: ${ctx.card(uid).def.name} goes on the stall.`);
    },
  })),
  m('tiebreaker', 'Tiebreaker', null, 0, 3, /* Cory, Oct 28 night: "a little cheaper. 4?": 4 with the +1 wild */ 'You win every contest tie you’re in.', { tiebreak: true }),
  m('straggler', 'Straggler', 'purple', 6, 1, /* Oct 27, Cory "too cheap": 8 with the +1 wild (Claude's price) */ 'Once per round, after the last minion is placed: you may move your last minion to an open space and take it.', {
    onAllPlaced(ctx, owner, card) {
      if (card.usedRound === ctx.state.round) return;
      offerFrom(ctx, owner, card.uid);
    },
  }),
];

export const handlers = {
  // pool 13: Mercenaries / Hired Guns
  hire(ctx, p, id, data) {
    const o = ctx.player(id);
    if (!o || o === p || !p.members.includes(data.uid)) return;
    ctx.asMember(p, data.name, () => hireSteal(ctx, p, o, data.n, data.name), data.uid);
    if (!p.members.includes(data.uid)) return;
    ctx.log(`${p.name}'s ${data.name}: joins ${o.name}'s cult.`);
    ctx.moveMember(data.uid, p, o, { actor: p });
  },
  wayfarers(ctx, p, uid, data) { freeTake(ctx, p, uid, data); },
  chameleon(ctx, p, q, data) {
    const card = ctx.card(data.uid);
    if (!p.members.includes(data.uid) || !ctx.state.quadrants.includes(q)) return;
    card.asColor = q;
    ctx.log(`${p.name}'s Chameleons: this member is ${ctx.quadrant(q).name}.`);
    for (const c of ctx.abilitiesOf(p)) for (const d of ctx.defsOf(c)) {
      if (d.onColorChosen && c.uid !== card.uid) ctx.asMember(p, d.name, () => d.onColorChosen(ctx, p, c, card), p.members.includes(c.uid) ? c.uid : null);
    }
  },
  // pool 7: Protesters' space, blocked for everyone until the round ends
  protest(ctx, p, key, data) {
    if (!key || ctx.state.slots[key] !== undefined || !protestable(ctx).some(t => t.key === key)) { const c = ctx.card(data.uid); if (c) c.used = false; return; }
    const st = ctx.state;
    if (!st.protest || st.protest.round !== st.round) st.protest = { round: st.round, keys: [] };
    st.protest.keys.push(key);
    ctx.log(`${p.name}'s Protesters sit on ${spaceLabel(ctx, key)}: nobody can place there this round.`);
  },
  ...handlers11({
    holdSpace(ctx, p, key) {
      if (!key) return;
      ctx.state.held = { key, pid: p.id, round: ctx.state.round };
      ctx.log(`${p.name}'s Place Holders: only they may take ${ctx.openSpaces().find(s => s.key === key)?.name || 'that space'} this round.`);
    },
  }),
  ...handlers9({
    hypno(ctx, p, key) {
      const [q, i] = String(key).split('-').map(Number);
      ctx.state.hypno = { key, by: p.id, round: ctx.state.round, armed: false };
      ctx.log(`${p.name}'s Hypnotist: whoever places next must take ${ctx.quadrant(ctx.state.quadrants[q]).actions[i].name}.`);
    },
  }),
  pickColor(ctx, p, r, data) { // gainColorOf (color-of.js): Dabblers' owner picks its color
    if (!ctx.state.resources.includes(r)) return;
    const n = data?.n || 1; // a cloak's grey pick can pay more than 1 (Cory, Nov 6)
    ctx.gain(p, r, n);
    ctx.log(`${p.name}'s ${data.who}: +${n} ${r}.`);
  },
  anarchy(ctx, p, value) {
    if (!Array.isArray(value)) { ctx.log(`${p.name} chose not to swap.`); return; }
    const [a, b] = value;
    if (!anarchyPairOk(ctx, p, a, b)) return;
    const names = [a, b].map(uid => `${ctx.ownerOf(uid)?.name || 'Shop'}'s ${ctx.card(uid).def.name}`);
    if (ctx.swapMembers(p, a, b)) ctx.log(`${p.name}'s Anarchist swapped ${names[0]} and ${names[1]}.`);
  },
  scoutPick(ctx, p, uid, data) {
    if (uid === null || uid === undefined) return scoutDone(ctx, p, data);
    if (!ctx.state.shop.includes(uid)) return scoutStep(ctx, p, data);
    const i = ctx.state.shop.indexOf(uid);
    ctx.state.shop.splice(i, 1);
    toDiscard(ctx.state, uid);
    scoutStep(ctx, p, { ...data, sent: [...data.sent, ctx.card(uid).def.name], sentUids: [...(data.sentUids || []), uid] });
  },
  rewind(ctx, p, uid) {
    if (!coachable(ctx, p).some(x => x.uid === uid)) return;
    ctx.log(`${p.name}'s Coach: uses ${ctx.card(uid).def.name}.`);
    ctx.freeUse(p, uid);
  },

  stragglerFrom(ctx, p, from, data) {
    if (!from) return;
    if (!stillMine(ctx, p, from)) { offerFrom(ctx, p, data.uid); return; }
    const to = openSpaces(ctx);
    if (!to.length) return;
    ctx.choose(p, 'Straggler: move it to which unused space?', to.map(t => ({
      id: `to:${t.key}`, label: spaceLabel(ctx, t.key), kind: 'slot', value: t.key, hint: t.a.estimate(ctx, p),
    })), 'benders.stragglerTo', { ...data, from });
  },
  stragglerTo(ctx, p, to, data) {
    if (!to) return; // stayed put
    if (!stillMine(ctx, p, data.from) || ctx.state.slots[to] !== undefined) { offerFrom(ctx, p, data.uid); return; }
    const card = ctx.card(data.uid);
    card.usedRound = ctx.state.round;
    const { key, joined } = data.from;
    // the old space's action already happened and stays; only the worker leaves
    if (joined) {
      const list = ctx.state.squats[key];
      list.splice(list.indexOf(p.id), 1);
      if (!list.length) delete ctx.state.squats[key];
    } else delete ctx.state.slots[key];
    ctx.state.slots[to] = p.id;
    p.lastSlot = { key: to, joined: false };
    const [q, i] = to.split('-').map(Number);
    ctx.log(`${p.name}'s Straggler moves a minion from ${actionOf(ctx, key).name} to ${actionOf(ctx, to).name}.`);
    // the engine's own act task: the new space resolves as usual (no buy)
    ctx.state.queue.unshift({ t: 'act', p: p.id, q, i });
  },
  launder: launderPick,
  launderAmount,
  spoil(ctx, p, q) {
    const s = ctx.state;
    if (!s.spoiled || s.spoiled.round !== s.round) s.spoiled = { round: s.round, list: [] };
    s.spoiled.list.push({ qid: q, by: p.id });
    ctx.log(`${p.name}'s Spoilsport: nobody wins the ${ctx.quadrant(q).name} contest this round.`);
  },
  sore(ctx, p, id) { soreSteal(ctx, p, ctx.player(id)); },
  ...handlers1({
    grudge(ctx, p, pid, data) {
      const card = ctx.card(data.uid);
      if (!p.members.includes(card.uid)) return;
      card.grudge = pid;
      ctx.log(`${p.name}'s Grudge: a grudge against ${ctx.player(pid).name}.`);
    },
  }),
};

/** Sore Loser (live since Nov 4): 3 loose followers from t. */
function soreSteal(ctx, owner, t) {
  const got = ctx.steal(owner, t, { followers: 5 });
  if (got) ctx.log(`${owner.name}'s Sore Loser: ${owner.name} won no contest; steals ${got} follower${got === 1 ? '' : 's'} from ${t.name}.`);
  else ctx.log(`${owner.name}'s Sore Loser: can't steal from ${t.name}.`);
}

const group = { id: 'benders', members, handlers };
let installed = false;
export function install() {
  if (installed) return group;
  registerGuests('benders', members, handlers);
  installed = true;
  return group;
}
export default group;
