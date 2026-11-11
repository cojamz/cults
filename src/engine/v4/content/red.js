// Red builds and moves members; held red resources decide its round-end contest.
import { MORE, richUp } from './price.js';
import { discardOf } from '../discard.js';
import { gainColorOf } from './color-of.js';
import { defById as defOf } from './index.js';
import { add1, old1 } from './replace1.js';
import { add3, old3, handlers3 } from './replace3.js';
import { add4, old4, handlers4 } from './replace4.js';
import { see, endsAhead } from './botsee.js';
import { add7, old7, handlers7 } from './replace7.js';
import { add12, old12, on12 } from './replace12.js';
import { swap11, handlers11 } from './replace11.js';
import { pool, poolSpace, anyColors, anyColorStep, freeAsk, freeTake } from './pool.js';
const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });
const cost = c => c.def.s + c.def.w;
/** Pool 6: Family Reunion's shop members: a color one of p's members has, costing up to 6 (was 4: nothing cost that little, judge games Nov 7). */
// Late Shift: your minions on the wheel this round (joined spots count), as Help Yourself counts them
const placedCount = (ctx, p) => Object.values(ctx.state.slots || {}).filter(o => o === p.id).length
  + Object.values(ctx.state.squats || {}).reduce((a, l) => a + l.filter(o => o === p.id).length, 0);
const onBoardNow = (ctx, p) => ctx.state.current === p.id && ctx.state.queue.some(t => t.t === 'endTurn');
const lateCap = (ctx, n) => 2 * n + richUp(ctx.state);
const lateList = (ctx, p, n) => ctx.shopCards().filter(c => cost(c) <= lateCap(ctx, n));
const reunionList = (ctx, p) => {
  const have = new Set(ctx.membersOf(p).map(c => c.asColor || c.def.quadrant).filter(q => q && q !== 'guest' && q !== 'benders'));
  return ctx.shopCards().filter(c => have.has(c.def.quadrant) && cost(c) <= 6 + richUp(ctx.state));
};
/** Pool 6: Trade-Ins' pairs, [your member, shop member costing up to 2 more], members not yet swapped this time. */
const tradeInPairs = (ctx, p, done) => {
  const out = [];
  for (const a of ctx.membersOf(p)) if (!done.includes(a.uid) && ctx.canSwapMember(a.uid)) for (const b of ctx.shopCards()) if (cost(b) <= cost(a) + 2) out.push([a, b]);
  return out;
};
function tradeInStep(ctx, p, data) {
  const who = data.who || 'Trade-Ins', pairs = data.max && data.n >= data.max ? [] : tradeInPairs(ctx, p, data.done);
  if (!pairs.length) { ctx.log(`${p.name}'s ${who}: ${data.n} swap${data.n === 1 ? '' : 's'}.`); return; }
  ctx.choose(p, `${who}: swap which of your members for which shop member? (${data.n} so far${data.max ? `, ${data.max} at most` : ''})`, pairs.map(([a, b]) => ({
    id: `trade:${a.uid}:${b.uid}`, label: `${a.def.name} (${cost(a)}) ↔ Shop: ${b.def.name} (${cost(b)})`, kind: 'trade', value: [a.uid, b.uid],
    hint: (b.def.f + cost(b)) - (a.def.f + cost(a)),
  })).concat({ id: 'none', label: data.n ? 'Done' : 'Swap nothing', kind: 'pass', value: null, hint: 0.5 }), 'red.tradeIn', data);
}
/** Pool 4: offer p every swap of one of their members (one that may be swapped) for a discard pile member, or none. */
function graveSwapAsk(ctx, p, name) {
  const mine = ctx.membersOf(p).filter(c => ctx.canSwapMember(c.uid)), pile = discardOf(ctx.state).map(u => ctx.card(u));
  if (!mine.length || !pile.length) { ctx.log(`${p.name}'s ${name}: ${mine.length ? 'the discard pile is empty' : 'no member to swap'}.`); return; }
  const opts = [];
  for (const a of mine) for (const b of pile) opts.push({ id: `trade:${a.uid}:${b.uid}`, label: `${a.def.name} ↔ discard pile: ${b.def.name}`, kind: 'trade',
    value: [a.uid, b.uid], hint: (b.def.f + cost(b)) - (a.def.f + cost(a)) - (a.used || a.def.activate !== 'game' ? 0 : 1) });
  opts.push({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null, hint: 0.5 });
  ctx.choose(p, `${name}: swap one of your members with one in the discard pile?`, opts, 'red.graveSwap', { name });
}
// ---------- idea pipeline pool 8 helpers ----------
const kinColor = c => c.asColor || c.def.quadrant;
/** Talent Agents: [your member, a shop member costing the same or less] pairs. */
function agentPairs(ctx, p) {
  const shop = ctx.shopCards();
  return ctx.membersOf(p).filter(c => ctx.canSwapMember(c.uid)).flatMap(a => shop.filter(b => cost(b) <= cost(a) && b.def.id !== a.def.id).map(b => [a, b]));
}
/** Bots: a swap that lifts a contest count of the shop member's color, or brings a member worth more. */
function agentHint(ctx, p, a, b) {
  const same = c => ctx.membersOf(p).filter(x => x.uid !== a.uid && kinColor(x) === kinColor(c)).length;
  return (b.def.f || 1) - (a.def.f || 1) + 0.6 * (same(b) - same(a)) + (b.def.onRecruited ? 1 : 0);
}
/** Busybodies: every move of a rival's member costing up to 5 to another rival. */
function busyMoves(ctx, p) {
  const out = [];
  for (const from of ctx.rivals(p)) {
    if (!ctx.canSteal(p, from, 'member')) continue;
    for (const c of ctx.membersOf(from)) if (cost(c) <= 5 + richUp(ctx.state) && ctx.canSwapMember(c.uid)) for (const to of ctx.rivals(p)) if (to !== from) out.push({ c, from, to });
  }
  return out;
}

// bot test (ACT=walkin/initiation): the free member is this turn's recruit, so the turn's own recruit is gone
function usesRecruit(ctx, p) {
  const q = ctx.state.queue;
  for (let i = 0; i < q.length; i++) { if (q[i].p !== p.id) continue; if (q[i].t === 'endTurn') break; if (q[i].t === 'buy' && !q[i].extra) { q.splice(i, 1); return; } }
}
const ACT = new Set((globalThis.process?.env?.ACT || '').split(',').filter(Boolean)); // action bot tests (Nov 4): env only, never live

/**
 * Actions lane r4 batch (Nov 4; pitches/actions-r4-batch.md), REPLACE11 by own key, in Walk-In's place.
 * Blind Date: "Flip the top 2 of the pile. Recruit one; give the other to a rival. +1 red."
 * No Thanks: "Recruit the top member of the pile, or give it to a rival and +3 red. +1 red."
 * The recruit is free, as Walk-In's; a given member arrives without a recruit (ctx.giveFromPile).
 */
const worthOf = (ctx, uid) => { const d = ctx.card(uid).def; return d.s + d.w + 2 * (d.f || 0); };
const BLIND_DATE = {
  key: 'blinddate', ring: 1, name: 'Blind Date', text: 'Flip the top 2 of the pile. Recruit one; give the other to a rival. +1 red.', copyDoesIt: true,
  estimate: ctx => 1 + (ctx.state.pile.length ? 3 : 0),
  resolve(ctx, p) {
    ctx.gain(p, 'red', 1, { fromAction: true });
    const two = ctx.state.pile.slice(0, 2);
    if (!two.length) { ctx.log(`${p.name}: the deck is empty.`); return; }
    ctx.log(`${p.name}'s Blind Date flips ${two.map(u => ctx.card(u).def.name).join(' and ')}.`);
    ctx.choose(p, 'Blind Date: recruit which?', two.map(u => ({ id: `card:${u}`, label: `${ctx.card(u).def.name} (${ctx.card(u).def.s + ctx.card(u).def.w})`, kind: 'card', value: u, hint: worthOf(ctx, u) })), 'red.blindDate', { two });
  },
};
function blindDate(ctx, p, uid, data) {
  if (!ctx.state.pile.includes(uid)) return;
  const other = data.two.find(u => u !== uid);
  // the other waits at the bottom, so a refill after the recruit can't draw it into the shop
  ctx.state.pile = [uid, ...ctx.state.pile.filter(u => u !== uid && u !== other), ...(other !== undefined && ctx.state.pile.includes(other) ? [other] : [])];
  ctx.recruit(p, uid, { free: true, top: true });
  if (other !== undefined && ctx.state.pile.includes(other)) pileGiftAsk(ctx, p, other, 'Blind Date');
}
const NO_THANKS = {
  key: 'nothanks', ring: 1, name: 'No Thanks', text: 'Recruit the top member of the pile, or give it to a rival and +3 red. +1 red.', copyDoesIt: true,
  estimate: ctx => 1 + (ctx.state.pile.length ? 3.5 : 3),
  resolve(ctx, p) {
    ctx.gain(p, 'red', 1, { fromAction: true });
    const top = ctx.state.pile[0];
    if (top === undefined) { ctx.log(`${p.name}: the deck is empty.`); return; }
    const d = ctx.card(top).def;
    ctx.log(`${p.name}'s No Thanks flips ${d.name}.`);
    ctx.choose(p, `No Thanks: recruit ${d.name}, or give it to a rival and +3 red?`, [
      { id: 'keep', label: `Recruit ${d.name}`, kind: 'yes', value: 'keep', hint: worthOf(ctx, top) },
      { id: 'give', label: `Give it away, +3 red`, kind: 'no', value: 'give', hint: 3 },
    ], 'red.nothanks', { uid: top });
  },
};
function nothanks(ctx, p, v, data) {
  if (!ctx.state.pile.includes(data.uid)) return;
  if (v === 'keep') { ctx.state.pile = [data.uid, ...ctx.state.pile.filter(u => u !== data.uid)]; ctx.recruit(p, data.uid, { free: true, top: true }); return; }
  ctx.gain(p, 'red', 3);
  pileGiftAsk(ctx, p, data.uid, 'No Thanks');
}
/** Musical Chairs (pool 11): your member a for rival o's member b, b costing up to 3 more than a. */
function chairPairs(ctx, p, o, got) {
  if (!ctx.canSteal(p, o, 'swap')) return [];
  const mine = ctx.membersOf(p).filter(c => !got.includes(c.uid) && ctx.canSwapMember(c.uid));
  const theirs = ctx.membersOf(o).filter(c => ctx.canSwapMember(c.uid));
  const out = [];
  for (const a of mine) for (const b of theirs) if (a.def.id !== b.def.id && cost(b) <= cost(a) + 3) out.push([a, b]);
  return out;
}
function chairStep(ctx, p, data) {
  while (data.left.length) {
    const o = ctx.player(data.left[0]), pairs = chairPairs(ctx, p, o, data.got);
    if (pairs.length) {
      ctx.choose(p, `${data.who || 'Musical Chairs'}: swap with ${o.name}: which of your members for which of theirs?`, pairs.map(([a, b]) => ({
        id: `trade:${a.uid}:${b.uid}`, label: `${a.def.name} (${cost(a)}) ↔ ${o.name}: ${b.def.name} (${cost(b)})`, kind: 'trade', value: [a.uid, b.uid],
        hint: (b.def.f + cost(b)) - (a.def.f + cost(a)),
      })).concat({ id: 'none', label: `Don’t swap with ${o.name}`, kind: 'pass', value: null, hint: 0 }), 'red.chairs', data);
      return;
    }
    ctx.log(`${p.name}'s ${data.who || 'Musical Chairs'}: nothing to swap with ${o.name}.`);
    data = { ...data, left: data.left.slice(1) };
  }
  ctx.gain(p, 'red', 1, { fromAction: true });
}
function pileGiftAsk(ctx, p, uid, who) {
  const rivals = ctx.rivals(p);
  if (!rivals.length) return;
  ctx.choose(p, `${who}: give ${ctx.card(uid).def.name} to which rival?`, rivals.map(o => ({
    id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers)`, kind: 'player', value: o.id,
    hint: -ctx.followers(o), // bots help the rival furthest behind
  })), 'red.pileGiftTo', { uid, who });
}
function pileGiftTo(ctx, p, oid, data) {
  const o = ctx.player(oid), name = ctx.card(data.uid)?.def.name;
  if (!o || o === p || !ctx.giveFromPile(o, data.uid, p)) return;
  ctx.log(`${p.name}'s ${data.who}: gives ${name} to ${o.name}.`);
}
export default {
  id: 'red',
  name: 'Red',
  resource: 'red',
  scoring: { label: 'Most red', counts: 'the red you hold when the round ends', score: (ctx, p) => p.res.red },

  actions: [
    // idea pipeline pool 6 (Nov 7). Family Reunion: a color among your members (Drifters' chosen color counts); "costing
    // up to 4" as printed. Trade-Ins: one of your members at a time (each once; one just swapped in can't go again), for a
    // shop member costing up to 2 more, Done to stop: a Red swap, so swap reactions and protections apply.
    // idea pipeline pool 11 (Nov 7). Musical Chairs: each rival in seat order, one swap each (or skip): any of your members
    // that can be swapped (not one this space just brought in) for one of theirs costing up to 3 more (cheaper allowed);
    // a Red swap, so swap protections apply. The +1 red last, as printed.
    poolSpace({
      key: 'musicalchairs', ring: 3, name: 'Musical Chairs', copyDoesIt: true, text: "Swap one of your members with one of each rival's members, each costing up to 3 more than the one you give. +1 red.",
      estimate: (ctx, p) => 1 + ctx.rivals(p).reduce((n, o) => n + Math.max(0, ...chairPairs(ctx, p, o, []).map(([a, b]) => b.def.f + cost(b) - a.def.f - cost(a))) * 0.6, 0),
      resolve(ctx, p) { chairStep(ctx, p, { left: ctx.rivals(p).map(o => o.id), got: [] }); },
    }, 'pool11'),
    // idea pipeline pool 15 (Nov 7, round 2): the verdicts' changes. Seat Shuffle: Musical Chairs in words that say one
    // swap per rival, each with a different member of yours, and whose On Recruit fires (yours, as any swap you make).
    // Part Exchange: Trade-Ins with 2 swaps at most.
    poolSpace({
      key: 'seatshuffle', ring: 3, name: 'Seat Shuffle', copyDoesIt: true, text: 'For each rival, you may swap a different one of your members for one of theirs costing up to 3 more. The members you get use their On Recruit. +1 red.',
      estimate: (ctx, p) => 1 + ctx.rivals(p).reduce((n, o) => n + Math.max(0, ...chairPairs(ctx, p, o, []).map(([a, b]) => b.def.f + cost(b) - a.def.f - cost(a))) * 0.6, 0),
      resolve(ctx, p) { chairStep(ctx, p, { left: ctx.rivals(p).map(o => o.id), got: [], who: 'Seat Shuffle' }); },
    }, 'pool15'),
    poolSpace({
      key: 'partexchange', ring: 3, name: 'Part Exchange', copyDoesIt: true, text: 'Swap up to 2 of your members with shop members costing up to 2 more each. +1 red.',
      estimate: (ctx, p) => 1 + Math.min(2, tradeInPairs(ctx, p, []).filter(([a, b]) => cost(b) > cost(a)).length),
      resolve(ctx, p) {
        ctx.gain(p, 'red', 1, { fromAction: true });
        tradeInStep(ctx, p, { done: [], n: 0, max: 2, who: 'Part Exchange' });
      },
    }, 'pool15'),
    poolSpace({
      key: 'familyreunion', ring: 1, name: 'Family Reunion', copyDoesIt: true, text: 'Recruit a member of a color you already have, costing up to 6, for free. +1 red.',
      estimate: (ctx, p) => 1 + Math.max(0, ...reunionList(ctx, p).map(c => c.def.f + 0.6 * cost(c))),
      resolve(ctx, p) {
        freeAsk(ctx, p, 'Family Reunion', reunionList(ctx, p), 'red.poolFree', `no shop member of a color you have costs ${6 + richUp(ctx.state)} or less`);
        ctx.gain(p, 'red', 1, { fromAction: true });
      },
    }, 'pool6'),
    poolSpace({
      key: 'tradeins', ring: 3, name: 'Trade-Ins', copyDoesIt: true, text: 'Swap any number of your members with shop members costing up to 2 more each. +1 red.',
      estimate: (ctx, p) => 1 + tradeInPairs(ctx, p, []).filter(([a, b]) => cost(b) > cost(a)).length,
      resolve(ctx, p) {
        ctx.gain(p, 'red', 1, { fromAction: true });
        tradeInStep(ctx, p, { done: [], n: 0 });
      },
    }, 'pool6'),
    {
      // Cory, Nov 10 (project chat): Red's third round I space is Borrow, Tryout's place (no space relies on On Recruits,
      // 11:57am); 3:00pm: "lets say it gets discarded at the end of the round instead of retruning to shop", "before
      // scoring" kept from his earlier words. Free, the cheapest (a tie is your pick). It goes to the discard pile when the
      // round ends, before the Round End cards and the contests, if it is still in your cult; swapped away (Promote,
      // Demote) it stays where it went ("it also combos with promote/demote").
      key: 'borrow', ring: 1, name: 'Borrow', text: 'Recruit the cheapest shop member, for free. Discard it at round end, before scoring. +1 red.', copyDoesIt: true,
      estimate: ctx => 1 + cheapValue(ctx) * 0.5,
      resolve(ctx, p) {
        ctx.gain(p, 'red', 1, { fromAction: true });
        if (!ctx.shopCards().length) { ctx.log(`${p.name}'s Borrow: the shop is empty.`); return; }
        hireCheapest(ctx, p, 'Borrow', true);
      },
    },
    {
      // Cory, 2026-10-27: replaces Even Swap ("nobody has members initially"). Name and the +2 are Claude's fill-ins.
      // Out of the wheel since Nov 10 (Borrow takes its place); kept for old saves and its tests
      pool: true,
      key: 'evenswap', ring: 1, name: 'Tryout', text: '+2 red. Use a shop member’s On Recruit. It stays in the shop.', copyDoesIt: true, // +2 (Cory, Nov 1)
      estimate: ctx => 2 + (borrowable(ctx).length ? 2 : 0),
      resolve(ctx, p) {
        ctx.gain(p, 'red', 2, { fromAction: true });
        const list = borrowable(ctx);
        if (!list.length) {
          // a Tryout copied by the Stunt Double it just used found that Stunt Double again: name it, so the line isn't
          // read as "there was none" (frame review, Nov 7)
          const used = ctx.shopCards().filter(c => c.def.onRecruited && (c.borrowTurn === turnKey(ctx) || (copiesAction(c.def) && ctx.state.tryoutCopyTurn === turnKey(ctx))));
          ctx.log(used.length ? `${p.name}: no shop member has an On Recruit to use again this turn (${used.map(c => `${c.def.name}’s`).join(', ')} already was).` : `${p.name}: no shop member has an On Recruit effect.`);
          return;
        }
        ctx.choose(p, 'Tryout: use which shop member’s On Recruit?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name}: ${c.def.text}`, kind: 'card', value: c.uid, hint: 2 + (c.def.f || 0),
        })), 'red.borrow');
      },
    },
    {
      // Cory, Nov 11 2:04pm: Late Shift replaces Trending ("1. yes... lets just try it and see what the testing says").
      // The count includes the minion on this space, as Help Yourself reads it; the free member is the player's pick.
      key: 'lateshift', ring: 1, name: 'Late Shift', copyDoesIt: true,
      text: 'Recruit a shop member costing up to 2 per minion you’ve placed this round, for free. +1 red.',
      estimate: (ctx, p) => 1 + Math.max(0, ...lateList(ctx, p, placedCount(ctx, p) + (onBoardNow(ctx, p) ? 0 : 1)).map(c => c.def.f * 1.5 + 1)),
      resolve(ctx, p) {
        const n = placedCount(ctx, p), cap = lateCap(ctx, n);
        freeAsk(ctx, p, 'Late Shift', lateList(ctx, p, n), 'red.poolFree', `${n} minion${n === 1 ? '' : 's'} placed, and no shop member costs ${cap} or less`);
        ctx.gain(p, 'red', 1, { fromAction: true });
      },
    },
    {
      // Out of the wheel since Nov 11 (Late Shift takes its place); kept for old saves and its tests
      pool: true,
      // Cory, Nov 10 11:49am/11:50am: "+1 of the shop's most common color per shop member of that color. +1 red." in
      // Gather's place. Grey members aren't a color. A tie for most common is your pick. Name is Claude's fill-in.
      key: 'trending', ring: 1, name: 'Trending', text: '+1 of the shop’s most common color per shop member of that color. +1 red.', copyDoesIt: true,
      estimate: ctx => 1 + Math.max(0, ...shopColors(ctx).map(([, n]) => n)),
      resolve(ctx, p) {
        ctx.gain(p, 'red', 1, { fromAction: true });
        const list = shopColors(ctx), top = Math.max(0, ...list.map(([, n]) => n));
        const tied = list.filter(([, n]) => n === top && n > 0);
        if (!tied.length) { ctx.log(`${p.name}'s Trending: no colored member in the shop.`); return; }
        if (tied.length === 1) { trend(ctx, p, tied[0][0], top); return; }
        ctx.choose(p, `Trending: +${top} of which color?`, tied.map(([c]) => ({
          id: `color:${c}`, label: `+${top} ${c}`, kind: 'color', value: c, hint: top,
        })), 'red.trending', { n: top });
      },
    },
    swap11({
      // Out of the wheel since Nov 10 (Trending takes its place); kept for old saves and its tests
      pool: true,
      key: 'turnout', ring: 1, name: 'Gather', copyDoesIt: true,
      text: '+2 red in round I, +3 in round II, +4 in round III. If you recruit a member this turn: +1 follower for every 3 resources you pay.',
      // Cory, 2026-10-31: fuel tied to the recruit ("B": 2/3/4 red, 1/2/3 followers). Cory, Nov 9 ("lets say yeah for now"):
      // the followers scale with the member bought, as Splurge's do; per 3 paid is Claude's fill-in. Core pays it on the
      // turn's first paid recruit (spendBonus).
      byRound: { lines: ['+2 red', '+3 red', '+4 red'], rest: 'If you recruit a member this turn: +1 follower for every 3 resources you pay.' },
      estimate: ctx => ctx.state.round + 1 + 2.3,
      resolve(ctx, p) {
        ctx.gain(p, 'red', ctx.state.round + 1, { fromAction: true });
        (p.spendFollowers ||= []).push({ per: 3, name: 'Gather' });
      },
    }, {
      // Rally (REPLACE11=rally, Actions lane r4 batch, Nov 4): Gather's place. Members as the board counts them.
      key: 'rally', ring: 1, name: 'Rally', copyDoesIt: true,
      text: '+2 red in round I, +3 in round II, +4 in round III, +1 more for each rival with more members than you.',
      byRound: { lines: ['+2 red', '+3 red', '+4 red'], rest: '+1 more for each rival with more members than you.' },
      estimate: (ctx, p) => ctx.state.round + 1 + ctx.rivals(p).filter(o => ctx.memberCount(o) > ctx.memberCount(p)).length,
      resolve(ctx, p) {
        const k = ctx.rivals(p).filter(o => ctx.memberCount(o) > ctx.memberCount(p)).length;
        ctx.gain(p, 'red', ctx.state.round + 1 + k, { fromAction: true });
        if (k) ctx.log(`${p.name}'s Rally: ${k} rival${k > 1 ? 's' : ''} with more members, +${k} red.`);
      },
    }),
    {
      // Cory, Nov 10 11:49am/11:50am: "+3 red. If you recruit a member this turn of a color you already have: +4 followers.
      // +1 red." (his call, kept as said beside the round I rule). In Walk-In's place. "A color you already have": one of
      // your members before this recruit is that color; it pays once, on the turn's first recruit that matches. Name is
      // Claude's fill-in (Gather's old job).
      key: 'gather', ring: 1, name: 'Gather', text: '+3 red. If you recruit a member this turn of a color you already have: +4 followers. +1 red.', copyDoesIt: true,
      estimate: (ctx, p) => 4 + (ctx.membersOf(p).length ? 2.5 : 0),
      resolve(ctx, p) {
        ctx.gain(p, 'red', 4, { fromAction: true });
        (p.recruitFollowers ||= []).push({ n: 4, name: 'Gather', sameColor: true });
      },
    },
    swap11(swap11({
      // Cory, 2026-10-27: "recruit the top member of the deck. each rival gets 1 red". Name and the +2 are Claude's fill-ins.
      // Out of the wheel since Nov 10 (Gather takes its place); kept for old saves and its tests
      pool: true,
      key: 'hire', ring: 1, name: 'Walk-In', text: 'Recruit the top member of the pile. Each rival +1 red. +1 red.', copyDoesIt: true,
      estimate: ctx => 1 + (ctx.state.pile.length ? 3 : 0),
      resolve(ctx, p) {
        ctx.gain(p, 'red', 1, { fromAction: true });
        const top = ctx.state.pile[0];
        if (top === undefined) ctx.log(`${p.name}: the deck is empty.`);
        else { ctx.recruit(p, top, { free: true, top: true }); if (ACT.has('walkin')) usesRecruit(ctx, p); }
        for (const o of ctx.rivals(p)) ctx.gain(o, 'red', 1);
      },
      // All piles (Cory, 2026-11-01: "for the piles mode, we may need to change red round 1 action back to recruit the
      // cheapest (+1 red)"): the old Open Door, word for word, in Walk-In's place (content/index.js spacesOf)
      piles: {
        key: 'opendoor', ring: 1, name: 'Open Door', text: 'Recruit the cheapest member in the shop. +1 red.', copyDoesIt: true,
        estimate: ctx => 1 + cheapValue(ctx),
        resolve(ctx, p) { ctx.gain(p, 'red', 1, { fromAction: true }); hireCheapest(ctx, p, 'Open Door'); },
      },
    }, BLIND_DATE), NO_THANKS),
    {
      key: 'hireup', ring: 2, name: 'Promote', text: '+3 red. Swap any member for one costing up to 3 more, from another cult or the shop.', copyDoesIt: true, // any cult, up to 3 (Cory, Nov 5; words Claude's); // +3 red (Cory, Oct 30: balance run)
      estimate: (ctx, p) => 3 + (swapPairs(ctx, p, 'promote').length ? 2 : 0),
      resolve(ctx, p) {
        ctx.gain(p, 'red', ACT.has('promote1') ? 1 : 3, { fromAction: true });
        swap(ctx, p, 'promote', 'Promote: choose a member and its replacement');
      },
    },
    {
      key: 'trade', ring: 2, name: 'Demote', text: '+3 red. Swap any member for one costing up to 3 less, from another cult or the shop.', copyDoesIt: true, // any cult, up to 3 (Cory, Nov 5; words Claude's); // +3 red (Cory, Oct 30: balance run)
      estimate: (ctx, p) => 3 + (swapPairs(ctx, p, 'demote').length ? 2 : 0),
      resolve(ctx, p) { ctx.gain(p, 'red', ACT.has('promote1') ? 1 : 3, { fromAction: true }); swap(ctx, p, 'demote', 'Demote: choose a member and its replacement'); },
    },
    {
      key: 'take', ring: 3, name: 'Initiation', text: `Recruit a shop member costing ${9 + MORE} or less, for free. +1 red.`, // the cap (Cory, 2026-10-24: "8 or less"; 9 since Nov 5, "for named costs, yes go up by 1")
      estimate: ctx => 1 + Math.max(0, ...ctx.shopCards().filter(c => cost(c) <= 9 + MORE + richUp(ctx.state)).map(c => c.def.f + cost(c) * 0.6)),
      resolve(ctx, p) {
        const shop = ctx.shopCards().filter(c => cost(c) <= 9 + MORE + richUp(ctx.state));
        ctx.gain(p, 'red', 1, { fromAction: true });
        if (!shop.length) { ctx.log(`${p.name}: no shop member costs ${9 + MORE + richUp(ctx.state)} or less.`); return; }
        if (ACT.has('initiation')) usesRecruit(ctx, p);
        ctx.choose(p, 'Initiation: which member?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'card', value: c.uid, hint: c.def.f * 1.5 + cost(c),
        })), 'red.takeFree');
      },
    },
  ],

  handlers: {
    chairs(ctx, p, value, data) {
      const o = ctx.player(data.left[0]), next = { ...data, left: data.left.slice(1) };
      if (Array.isArray(value)) {
        const [a, b] = value;
        if (chairPairs(ctx, p, o, data.got).some(([x, y]) => x.uid === a && y.uid === b) && ctx.swapMembers(p, a, b)) {
          ctx.log(`${p.name}'s ${data.who || 'Musical Chairs'}: swaps ${ctx.card(a).def.name} for ${o.name}'s ${ctx.card(b).def.name}.`);
          next.got = [...data.got, b];
        }
      } else ctx.log(`${p.name}'s ${data.who || 'Musical Chairs'}: no swap with ${o.name}.`);
      chairStep(ctx, p, next);
    },
    poolFree: freeTake,
    anyColor: anyColorStep,
    tradeIn(ctx, p, value, data) {
      const who = data.who || 'Trade-Ins';
      if (!Array.isArray(value)) { ctx.log(`${p.name}'s ${who}: ${data.n} swap${data.n === 1 ? '' : 's'}.`); return; }
      const [a, b] = value;
      if (!tradeInPairs(ctx, p, data.done).some(([x, y]) => x.uid === a && y.uid === b)) { tradeInStep(ctx, p, data); return; }
      const names = [ctx.card(a).def.name, ctx.card(b).def.name];
      if (ctx.swapMembers(p, a, b)) ctx.log(`${p.name}'s ${who}: swaps ${names[0]} for ${names[1]} from the shop.`);
      tradeInStep(ctx, p, { ...data, done: [...data.done, a, b], n: data.n + 1 });
    },
    // pool 4: Resurrectionists / Night Diggers, one of your members for one in the discard pile
    graveSwap(ctx, p, value, data) {
      if (!Array.isArray(value)) { ctx.log(`${p.name}'s ${data.name}: doesn't swap.`); return; }
      const [a, b] = value;
      if (!p.members.includes(a) || !discardOf(ctx.state).includes(b) || !ctx.canSwapMember(a)) return;
      const names = [ctx.card(a).def.name, ctx.card(b).def.name];
      ctx.asMember(p, data.name, () => {
        ctx.log(`${p.name}'s ${data.name}: swaps ${names[0]} for ${names[1]} from the discard pile.`);
        // the discard pile's member first, so the one sent there can't come straight back
        if (!ctx.claimMember(p, b)) return;
        ctx.buryMember(p, a);
      });
    },
    // pool 8: Talent Agents' swap, and Nosy Neighbors' move
    talentSwap(ctx, p, v) {
      if (!v) return;
      const [a, b] = v;
      if (!p.members.includes(a) || !ctx.state.shop.includes(b)) return;
      const an = ctx.card(a).def.name, bn = ctx.card(b).def.name;
      if (ctx.swapMembers(p, a, b)) ctx.log(`${p.name}'s Talent Agents: swaps ${an} for ${bn} from the shop.`);
    },
    busyMove(ctx, p, v) {
      const [uid, toId] = v || [], from = ctx.ownerOf(uid), to = ctx.player(toId);
      if (!from || !to || from === p || to === p || from === to) return;
      const name = ctx.card(uid).def.name;
      if (ctx.moveMember(uid, from, to, { actor: p })) ctx.log(`${p.name}'s Nosy Neighbors: moves ${from.name}'s ${name} to ${to.name}.`);
      anyColors(ctx, p, 2, 'Nosy Neighbors', 'red.anyColor');
    },
    ...handlers11({ blindDate, nothanks, pileGiftTo }),
    ...handlers4({
      defect(ctx, p, id) {
        const o = ctx.player(id);
        if (!o || o === p || !ctx.canSteal(p, o, 'swap')) return;
        const mine = defectList(ctx, p), theirs = defectList(ctx, o);
        const names = list => list.map(c => c.def.name).join(', ') || 'nobody';
        ctx.log(`${p.name}'s Defectors: ${p.name}'s red members (${names(mine)}) swap for ${o.name}'s (${names(theirs)}).`);
        // both lists are read before anything moves, so nothing that arrives goes back
        for (const c of mine) ctx.moveMember(c.uid, p, o, { actor: p });
        for (const c of theirs) ctx.moveMember(c.uid, o, p, { recruit: true, actor: p });
      },
      tithe(ctx, giver, uid, data) {
        const owner = ctx.player(data.to);
        if (giver.members.includes(uid)) {
          const name = ctx.card(uid).def.name;
          if (ctx.moveMember(uid, giver, owner, { actor: owner })) ctx.log(`${owner.name}'s Tithe Takers: ${giver.name} gives ${name} to ${owner.name}.`);
        }
        titheStep(ctx, owner, data.left);
      },
    }),
    ...handlers3({
      missionGive(ctx, p, uid, data) {
        const o = ctx.player(data.left[0]);
        if (!p.members.includes(uid)) { missionGiveStep(ctx, p, data); return; }
        const c = ctx.card(uid), k = cost(c), name = c.def.name;
        if (!ctx.moveMember(uid, p, o, { actor: p })) { missionGiveStep(ctx, p, data); return; }
        ctx.log(`${p.name}'s Missionaries: gives ${name} (${k}) to ${o.name}.`);
        missionGiveStep(ctx, p, { left: data.left.slice(1), allow: [...data.allow, k + 2] });
      },
      missionTake(ctx, p, uid, data) {
        if (!ctx.state.shop.includes(uid)) { missionTakeStep(ctx, p, data.allow); return; }
        const k = cost(ctx.card(uid));
        // the smallest allowance it fits uses itself up
        const fit = data.allow.filter(a => a >= k).sort((a, b) => a - b)[0];
        if (fit === undefined) { missionTakeStep(ctx, p, data.allow); return; }
        const rest = [...data.allow]; rest.splice(rest.indexOf(fit), 1);
        ctx.log(`${p.name}'s Missionaries: recruits ${ctx.card(uid).def.name} (${k}, up to ${fit}) for free.`);
        ctx.recruit(p, uid, { free: true });
        if (rest.length) ctx.defer(p, 'red.missionNext', { allow: rest });
      },
      missionNext(ctx, p, _v, data) { missionTakeStep(ctx, p, data.allow); },
    }),
    snatch(ctx, p, value) {
      if (!Array.isArray(value)) { ctx.log(`${p.name} chose not to swap.`); return; }
      const [a, b] = value;
      if (!snatchPairs(ctx, p).some(([x, y]) => x.uid === a && y.uid === b)) return;
      const names = [a, b].map(uid => `${ctx.ownerOf(uid)?.name || 'Shop'}'s ${ctx.card(uid).def.name}`);
      ctx.log(`${p.name}'s Body Snatchers: a swap at round start.`);
      if (ctx.swapMembers(p, a, b)) ctx.log(`${p.name} swapped ${names[0]} and ${names[1]}.`);
    },
    borrow(ctx, p, uid) {
      if (!ctx.state.shop.includes(uid)) { ctx.log(`${p.name}: that member left the shop.`); return; }
      ctx.card(uid).borrowTurn = turnKey(ctx); // once a turn: Stunt Double copying the Tryout that borrowed it looped
      // and one copying member a turn in all: Understudy, Echo, Cover and Tryout went round in a ring (bot games, Nov 4)
      if (copiesAction(ctx.card(uid).def)) ctx.state.tryoutCopyTurn = turnKey(ctx);
      ctx.log(`${p.name} uses ${ctx.defOf(uid).name}’s On Recruit; it stays in the shop.`);
      ctx.borrowOnRecruit(p, uid);
    },
    takeFree(ctx, p, uid) { ctx.recruit(p, uid, { free: true }); },
    borrowFree(ctx, p, uid) { borrowIt(ctx, p, uid); },
    trending(ctx, p, color, data) { trend(ctx, p, color, data.n); },
    ...({ // always registered: Seat Filler (red.drift) is live since Nov 5; the rest are harmless when unused
      convert(ctx, p, uid) {
        const v = ctx.ownerOf(uid), c = ctx.card(uid);
        if (!v || v === p || cost(c) > 4 + MORE + richUp(ctx.state) || !ctx.canSteal(p, v, 'swap') || !ctx.canSwapMember(uid)) return;
        if (!ctx.moveMember(uid, v, p, { recruit: true })) return;
        ctx.log(`${p.name}'s Converts: ${p.name} recruits ${v.name}'s ${c.def.name}.`);
        const shop = ctx.shopCards();
        if (!shop.length) return;
        const low = Math.min(...shop.map(cost)), tied = shop.filter(x => cost(x) === low);
        if (tied.length === 1) { convertGive(ctx, v, tied[0].uid); return; }
        ctx.choose(p, `Converts: which of the shop's cheapest does ${v.name} recruit?`, tied.map(x => ({
          id: `card:${x.uid}`, label: x.def.name, kind: 'card', value: x.uid, hint: 0,
        })), 'red.convertGive', { pid: v.id });
      },
      convertGive(ctx, p, uid, data) { convertGive(ctx, ctx.player(data.pid), uid); },
      drift(ctx, p, uid, data) {
        if (uid == null) { ctx.log(`${p.name} keeps ${ctx.card(data.uid)?.def.name || 'Seat Filler'}.`); return; }
        const me = ctx.card(data.uid);
        if (!p.members.includes(data.uid) || !ctx.state.shop.includes(uid) || cost(ctx.card(uid)) > cost(me) + 3) return;
        const names = [me.def.name, ctx.card(uid).def.name];
        // not a swap (its text names none, so Loyalists doesn't stop it): it goes face up into the row, then the free
        // recruit takes the chosen card's place (the row ends the size it was, nothing new is dealt)
        ctx.buryMember(p, data.uid, p, { shop: true });
        ctx.log(`${p.name}'s ${names[0]} goes to the shop; ${p.name} recruits ${names[1]} for free.`);
        ctx.recruit(p, uid, { free: true });
      },
    }),
    panelMode(ctx, p, mode, data) {
      if (mode === 'promote' || mode === 'demote') swap(ctx, p, mode, `Panel: ${mode} another member`, data?.excludeUid);
    },
    trade(ctx, p, value, data) {
      if (!Array.isArray(value)) { ctx.log(`${p.name} chose not to swap.`); return; }
      const [a, b] = value;
      // Pinned choices reject a moved card; recheck prices/protection too before applying a queued choice.
      if (!swapAllowed(ctx, p, data.mode, data.excludeUid ?? null, a, b)) return;
      const names = [a, b].map(uid => `${ctx.ownerOf(uid)?.name || 'Shop'}'s ${ctx.card(uid).def.name}`);
      if (ctx.swapMembers(p, a, b)) ctx.log(`${p.name} swapped ${names[0]} and ${names[1]}.`);
    },
  },

  members: [
    // idea pipeline pool 5 (Nov 7): your biggest color among your members, counted as the table counts members (a member
    // worth 3 counts 3); guest members have no color. Price a fill-in.
    // idea pipeline pool 11 (Nov 7): one color fits every member (a member's own color, Drifters' chosen one; Dabblers
    // fits any table color; with Painted Faces, yellow fits all); grey counts as a color. Price a fill-in.
    pool(m('familyportrait', 'Family Portrait', 3, 2, 'Game End: if all your members are one color (grey counts as a color), +12 followers.', {
      onGameEnd(ctx, owner) {
        const cards = ctx.membersOf(owner);
        const painted = cards.some(c => ctx.defsOf(c).some(d => d.allAlsoYellow));
        const fits = (c, q) => (c.asColor || c.def.quadrant) === q || (q !== 'guest' && ctx.defsOf(c).some(d => d.everyColor)) || (q === 'yellow' && painted);
        return [...ctx.state.quadrants, 'guest'].some(q => cards.every(c => fits(c, q))) ? 12 : 0;
      },
      ...see(info => (info.round >= 3 ? 4 : 2)), // BOTSEE: a long-shot 12
    }), 'pool11'),
    // pool 15 (round 2, the verdict's change): Clan Elders counting each member card once, whatever it counts as
    pool(m('matriarchs', 'Matriarchs', 3, 2, 'Game End: +2 followers per member card of your biggest color, each card counted once.', {
      onGameEnd(ctx, owner) {
        const by = {};
        for (const c of ctx.membersOf(owner)) { const q = c.def.quadrant; if (q && q !== 'guest' && q !== 'benders') by[q] = (by[q] || 0) + 1; }
        return 2 * Math.max(0, ...Object.values(by));
      },
      ...see(() => 5), // BOTSEE: two or three of one color by the end
    }), 'pool15'),
    pool(m('clanelders', 'Clan Elders', 3, 2, 'Game End: +2 followers per member of your biggest color.', {
      onGameEnd(ctx, owner) {
        const by = {};
        for (const c of ctx.membersOf(owner)) { const q = c.def.quadrant; if (q && q !== 'guest' && q !== 'benders') by[q] = (by[q] || 0) + ctx.memberWeight(c); }
        return 2 * Math.max(0, ...Object.values(by));
      },
      ...see(() => 5), // BOTSEE: two or three of one color by the end
    }), 'pool5'),
    // idea pipeline pool 4 (Nov 7): swap one of your members with one in the discard pile, at Round Start or Round End
    // (before contests, as Last-Minute Shopper's). Optional ("you may"). The discard pile's member joins as your take (its
    // On Recruit fires, as a swap's does); yours goes face up on the discard pile. Prices are fill-ins.
    ...[['resurrectionists', 'Resurrectionists', 'Round Start', 'onRoundStart'], ['nightdiggers', 'Night Diggers', 'Round End', 'onAllPlaced']].map(([key, name, when, hook]) => pool(m(key, name, 2, 1,
      `${when}: you may swap one of your members with one in the discard pile.`, {
        [hook](ctx, owner) { graveSwapAsk(ctx, owner, name); },
        ...see(info => 1.2 * endsAhead(info).length), // BOTSEE: a small upgrade each round
      }), 'pool4')),
    // idea pipeline pool 8 (Nov 7, writer round 1; prices are fill-ins, design-core bands). Kinfolk and Kindred (the
    // brief's Kinfolk B): core onMemberJoins, any arrival (a recruit, a swap, a take, a gift), Kinfolk's own included; a
    // member's color is its own (grey counts as one), Drifters' the one it picked.
    ...[['kinfolk', 'Kinfolk', 3, 2, 1, 'per other member of its color you have'], ['kindred', 'Kindred', 2, 1, 2, 'per 2 other members of its color you have']].map(([key, name, s1, w1, per, words]) => pool(m(key, name, s1, w1,
      `Whenever a member joins your cult, +1 follower ${words}.`, {
        onMemberJoins(ctx, owner, card, joined) {
          const q = kinColor(joined), n = Math.floor(ctx.membersOf(owner).filter(c => c.uid !== joined.uid && kinColor(c) === q).length / per);
          if (!n) return;
          owner.bonus += n;
          ctx.log(`${owner.name}'s ${name}: ${joined.def.name} joins, +${n} follower${n === 1 ? '' : 's'}.`);
        },
        ...see(info => (per === 1 ? 4 : 2) * endsAhead(info).length),
      }), 'pool8')),
    // Talent Agents: Round End before contests, as Grave Diggers' (onAllPlaced); the shop member comes in by a swap of
    // its owner's own doing (a recruit, as Red's swaps are). "Costing the same or less": printed costs.
    pool(m('talentagents', 'Talent Agents', 2, 1, 'Round End: you may swap one of your members with a shop member costing the same or less.', {
      onAllPlaced(ctx, owner) {
        const pairs = agentPairs(ctx, owner);
        if (!pairs.length) return;
        ctx.asMember(owner, 'Talent Agents', () => ctx.choose(owner, 'Talent Agents: swap one of your members with a shop member costing the same or less?', [
          ...pairs.map(([a, b]) => ({ id: `trade:${a.uid}:${b.uid}`, label: `${a.def.name} (${cost(a)}) for ${b.def.name} (${cost(b)})`, kind: 'trade', value: [a.uid, b.uid],
            hint: agentHint(ctx, owner, a, b) })),
          { id: 'no', label: 'Keep them', kind: 'no', value: null, hint: 0.5 },
        ], 'red.talentSwap'));
      },
      ...see(info => 2 * endsAhead(info).length),
    }), 'pool8'),
    // Nosy Neighbors (the brief's Busybodies; Purple's REPLACE13 has a Busybody): moveMember from one rival to another, "costing up to 5" as a player sees it; a rival who can't be
    // taken from (Bodyguards) is left out. Bots move the leader's member to the rival with the fewest followers.
    pool(m('nosyneighbors', 'Nosy Neighbors', 2, 2, 'On Use, once per round: move a member costing up to 5 from one rival\u2019s cult to another rival\u2019s. +2 of any colors.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const opts = busyMoves(ctx, owner);
        if (!opts.length) { card.used = false; ctx.log(`${owner.name}'s Nosy Neighbors: no member to move.`); return; }
        ctx.choose(owner, 'Nosy Neighbors: move which member, to which rival?', opts.map(({ c, from, to }) => ({
          id: `trade:${c.uid}:${to.id}`, label: `${from.name}'s ${c.def.name} (${cost(c)}) to ${to.name}`, kind: 'trade', value: [c.uid, to.id],
          hint: ctx.followers(from) - ctx.followers(to) + (c.def.f || 1),
        })), 'red.busyMove');
      },
      botActivate: (ctx, owner) => busyMoves(ctx, owner).length > 0,
    }), 'pool8'),
    // pool 12 (red.md Ambulance Chasers' variation B; price a fill-in): its color's resource when that color is on the
    // table; a grey member's (or one whose color isn't on the table) is any color, the owner's pick
    pool(m('repomen', 'Repo Men', 1, 1, 'Whenever a member leaves a rival\u2019s cult, +1 of its color (grey: any color).', {
      onRivalLeave(ctx, owner, card, from, left) {
        const r = ctx.state.quadrants.includes(left.def.quadrant) ? ctx.quadrant(left.def.quadrant).resource : null;
        ctx.log(`${owner.name}'s Repo Men: ${left.def.name} left ${from.name}'s cult.`);
        if (r) ctx.gain(owner, r, 1); else anyColors(ctx, owner, 1, 'Repo Men', 'red.anyColor');
      },
      ...see(info => 2 * endsAhead(info).length),
    }), 'pool12'),
    pool(m('ambulancechasers', 'Ambulance Chasers', 1, 1, 'Whenever a member leaves a rival\u2019s cult, +1 follower.', {
      onRivalLeave(ctx, owner, card, from, left) {
        owner.bonus += 1;
        ctx.log(`${owner.name}'s Ambulance Chasers: ${left.def.name} left ${from.name}'s cult, +1 follower.`);
      },
      ...see(info => 2 * endsAhead(info).length),
    }), 'pool8'),
    // idea pipeline pool 3 (Nov 7): a swap of one of your members, by your own card, space or the swap card (one pays
    // once per swap, whichever side it was on: with a rival's member or a shop member). Prices are fill-ins.
    ...[['movers', 'Movers\' Union', 2, 2, 2], ['shiftworkers', 'Shift Workers', 3, 3, 2]].map(([key, name, n, s, w]) => pool(m(key, name, s, w,
      `Whenever you swap one of your members, +${n} of any colors.`, {
        onCultMove(ctx, owner, card, { uid, from, actor, swappedWith }) {
          if (from !== owner || actor !== owner || swappedWith == null || uid === card.uid) return;
          ctx.asMember(owner, name, () => anyColors(ctx, owner, n, name, 'red.anyColor'), card.uid);
        },
        ...see(info => 0.8 * n * endsAhead(info).length), // BOTSEE: about one swap a round for a Red player
      }), 'pool3')),
    m('twins', 'Triplets', 1, 1, 'Worth 3 followers.', { f: 3, n: 3, retired: true }), // Body Snatchers takes its place (Claude, under Cory's "use your judgement", 2026-11-03) // was Twins, worth 2 (Cory, 2026-10-29: "make it triplets, 3 followers")
    // Replacement batch 2 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Triplets' place, and a round I member as Triplets was (round: 1).
    // 4 red + 2 any as a player sees it. Its swap is a choice with "Don't swap" (Red's swaps can be skipped: Cory,
    // 2026-10-22, "You shouldnt HAVE to swap"); a rival's member it can take is one that may be swapped (Loyalists,
    // Bodyguards). The member you get is your recruit (its On Recruit fires), as with Promote.
    m('bodysnatchers', 'Body Snatchers', 2, 2, /* any rival's member (Cory, Nov 8: "swapped for any… make it mid priced… let's try it this way"); already 6, mid priced */ "Round Start: swap one of your members with any rival's member.", { f: 2,
      onRoundStart(ctx, owner, card) {
        const pairs = snatchPairs(ctx, owner);
        if (!pairs.length) { ctx.log(`${owner.name}'s Body Snatchers: no rival member to swap with.`); return; }
        ctx.choose(owner, 'Body Snatchers: swap one of your members with a rival’s?', pairs.map(([a, b]) => ({
          id: `trade:${a.uid}:${b.uid}`, label: `${owner.name}: ${a.def.name} ↔ ${ctx.ownerOf(b.uid).name}: ${b.def.name}`, kind: 'trade',
          value: [a.uid, b.uid], hint: (b.def.f + cost(b)) - (a.def.f + cost(a)),
        })).concat({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null, hint: -99 }), 'red.snatch', { uid: card.uid });
      },
    }),
    m('bigfamily', 'Big Family', 2, 3, 'Worth 4 followers.', { f: 4, n: 4 }), // 4 members (Cory, Oct 29: "maybe make it 4 members"); 5 to 6, Claude's price
    m('volunteer', 'Volunteer', 0, 0, 'Worth 1 follower.', { ...old1, ...old7('red.volunteer') }), // out of the deck (cull.js), Seat Filler in (Cory, Nov 5 backlog yes: "Swap out volunteer for Seat Filler")
    // REPLACE7 bot test (Nov 4, quality loop, Members A): Volunteer's place. 2 red + 1 any as a player sees it, a round I
    // member. At round start (II and III; it can't be bought before round I's) the owner may give it to the shop and
    // recruit a shop member costing up to 3 more, for free: Promote's trade, done by the card itself.
    m('seatfiller', 'Seat Filler', 1, 1, 'Round Start: you may put this in the shop and recruit a shop member costing up to 3 more, for free.', {
      onRoundStart(ctx, owner, card) {
        const list = ctx.shopCards().filter(x => cost(x) <= cost(card) + 3);
        if (!list.length) { ctx.log(`${owner.name}'s ${card.def.name}: no shop member costs ${cost(card) + 3} or less.`); return; }
        ctx.choose(owner, `${card.def.name}: give it to the shop and recruit a shop member costing up to ${cost(card) + 3}?`, list.map(x => ({
          id: `card:${x.uid}`, label: `${card.def.name} ↔ Shop: ${x.def.name} (${cost(x)})`, kind: 'card', value: x.uid,
          hint: (x.def.f + cost(x)) - (card.def.f + cost(card)),
        })).concat({ id: 'none', label: 'Keep it', kind: 'pass', value: null, hint: 0 }), 'red.drift', { uid: card.uid });
      },
      // a free member up to 3 dearer at each round start still ahead (it leaves after one)
      ...see(info => (info.round < 3 ? 3 : 0)),
    }),
    // REPLACE1 bot test (Nov 3, replacement batch 1): Volunteer's place. Fires only when a rival's card or space moves
    // one of your members into that rival's own cult (Promote, Demote, Panel, Poach, Shake Down, Double Agent,
    // Anarchist), never for one you give away yourself, and not for Turncoats itself. 3 red + 1 any as a player sees it.
    ...add1(m('turncoats', 'Turncoats', 2, 1, 'Whenever a rival takes one of your members into their cult, recruit a shop member costing up to its cost, for free.', { f: 2,
      // (a Turncoats that arrives in the same swap wasn't yours when the member was taken)
      onCultMove(ctx, owner, card, { uid, from, to, actor, swappedWith }) {
        if (from !== owner || !to || to !== actor || actor === owner || uid === card.uid || swappedWith === card.uid) return;
        const c = cost(ctx.card(uid)), list = ctx.shopCards().filter(x => cost(x) <= c);
        if (!list.length) { ctx.log(`${owner.name}'s Turncoats: ${actor.name} took ${ctx.card(uid).def.name}, but no shop member costs ${c} or less.`); return; }
        ctx.log(`${owner.name}'s Turncoats: ${actor.name} took ${ctx.card(uid).def.name}, so ${owner.name} recruits a shop member costing up to ${c}, for free.`);
        ctx.choose(owner, `Turncoats: recruit which shop member (costing up to ${c}) for free?`, list.map(x => ({
          id: `card:${x.uid}`, label: `${x.def.name} (${cost(x)})`, kind: 'card', value: x.uid, hint: x.def.f * 1.5 + cost(x),
        })), 'red.takeFree');
      },
    })),
    m('intern', 'Intern', 1, 0, 'Worth 1 follower.'),
    m('mentor', 'Mentor', 5, 3, 'On Recruit: recruit the cheapest member in the shop.', { f: 1, n: 1, // Mentor, counts as 1 member (Cory, Nov 5 backlog yes)
      // 3 members (Cory, Oct 30: +1 follower, "change the names accordingly")
      // +1 follower (Cory, 2026-10-25)
      // card: this Mentor, or a Doppelganger copying it (its free pick says so)
      onRecruited(ctx, owner, card) {
        const who = card && card.def && card.def.key === 'doppel' ? 'Doppelganger (as Mentor)' : 'Mentor';
        if (ctx.shopCards().length) ctx.log(`${owner.name}'s ${who}: the cheapest face-up member comes along free.`);
        hireCheapest(ctx, owner, who);
      },
      ...old4,
    }),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Mentor & Protégés' place. 4 red + 2 any as a player sees it. Each
    // rival with a member, in seat order from the owner's left, chooses one of theirs to give. A gift, not a steal or a
    // swap (the draft's reading), so Bodyguards and Loyalists don't stop it; it is the owner's card taking it, so the
    // giver's Turncoats answers it, and it's an arrival for the owner (Old Maid's −5 lands), not their recruit.
    ...add4(m('tithetakers', 'Tithe Takers', 3, 2, 'On Use, once per game: each rival gives you one of their members.', { f: 2,
      activate: 'game',
      onActivate(ctx, owner, card) {
        const n = ctx.state.players.length, left = Array.from({ length: n - 1 }, (_, k) => (owner.id + 1 + k) % n);
        if (!left.some(id => ctx.player(id).members.length)) { card.used = false; ctx.log(`${owner.name}'s Tithe Takers: no rival has a member.`); return; }
        ctx.log(`${owner.name} uses Tithe Takers.`);
        titheStep(ctx, owner, left);
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 || ctx.rivals(owner).filter(o => o.members.length >= 3).length >= 2,
    })),
    // balance pass 2 (pooled bench, both bots agree; design/eval/balance-pass-2.md): 12 → 6
    m('proselytizer', 'Proselytizers', 3, 4,'Whenever you recruit, +1 follower.', { f: 2, ...old4, // +1 follower (Cory, 2026-10-25)
      // a recruit is a member or a follower purchase (Cory, 2026-10-21); not its own arrival
      onRecruit(ctx, owner, card, by, what) { if (by === owner && what.member?.uid !== card.uid) owner.bonus += 1; },
    }),
    // REPLACE7 (Nov 4, scale-up round 1, Members A): Proselytizers' place (paper 17 and 16, pooled +4 on the old card;
    // Red's set 16 vs 13). 4 red + 4 any, worth 2, counts as 2. A trade, so swap protection holds (Loyalists' cult, a
    // rival who can't be swapped with), as Double Agent's; the taken member is recruited (its On Recruit fires), the
    // rival's free one is too. Ties for the shop's cheapest: the owner picks, on the owner's turn.
    ...add7(m('converts', 'Converts', 3, 4, `On Recruit: recruit a rival’s member costing ${4 + MORE} or less, for free; that rival recruits the shop’s cheapest, for free.`, { f: 2, n: 2,
      onRecruited(ctx, owner, card) {
        const list = ctx.rivals(owner).filter(o => ctx.canSteal(owner, o, 'swap'))
          .flatMap(o => ctx.membersOf(o).filter(c => cost(c) <= 4 + MORE + richUp(ctx.state) && ctx.canSwapMember(c.uid)).map(c => ({ c, o })));
        if (!list.length) { ctx.log(`${owner.name}'s Converts: no rival's member costing ${4 + MORE + richUp(ctx.state)} or less to recruit.`); return; }
        ctx.choose(owner, `Converts: recruit which rival’s member (costing ${4 + MORE + richUp(ctx.state)} or less) for free?`, list.map(({ c, o }) => ({
          id: `card:${c.uid}`, label: `${o.name}: ${c.def.name} (${cost(c)})`, kind: 'card', value: c.uid, hint: c.def.f + cost(c),
        })), 'red.convert');
      },
      ...see(info => 3 + endsAhead(info).length),
    })),
    // REPLACE7 (Nov 4, scale-up round 1, Members A): Proselytizers' place (paper 19 vs 11, Red's set 16 vs 13). 4 red + 4
    // any, worth 1. Pied Piper's trigger: pays the moment your second recruit of your own turn lands (Mentor & Protégés'
    // free one counts; a member counted as several still lands once).
    // Proselytizers' place (paper 18 vs 17 and 13 vs 12): Evangelists (lifted), Zealots.
    ...add7(m('evangelists', 'Evangelists', 3, 4, 'Whenever any player recruits a red member, +2 followers (+3 if it’s you).', { f: 2, n: 2,
      onAnyRecruit(ctx, owner, card, by, member) {
        if (!member || member.uid === card.uid) return;
        const d = typeof member.def === 'string' ? defOf(member.def) : member.def;
        if ((member.asColor || d.quadrant) !== 'red') return;
        const n = by === owner ? 3 : 2;
        owner.bonus += n; ctx.log(`${owner.name}'s Evangelists: ${by.name} recruits a red member, +${n} followers.`);
      },
      ...see(info => 4 * endsAhead(info).length),
    })),
    ...add7(m('zealots', 'Zealots', 3, 4, 'Whenever you recruit, +1 follower and the player with the most followers loses 1 (unless it’s you).', { f: 2, n: 2,
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || what.member?.uid === card.uid) return;
        owner.bonus += 1;
        const top = Math.max(...ctx.state.players.map(o => ctx.followers(o)));
        if (ctx.followers(owner) >= top) { ctx.log(`${owner.name}'s Zealots: +1 follower.`); return; }
        const leaders = ctx.rivals(owner).filter(o => ctx.followers(o) === top);
        for (const o of leaders) o.bonus -= 1;
        ctx.log(`${owner.name}'s Zealots: +1 follower; ${leaders.map(o => o.name).join(' & ')} −1.`);
      },
      ...see(info => 2 * endsAhead(info).length),
    })),
    ...add7(m('drillsergeant', 'Drill Sergeant', 3, 4, 'Whenever you recruit 2 or more members in one turn, +3 followers.', {
      onAnyRecruit(ctx, owner, card, by, recruited) {
        if (by === owner && ctx.state.current === owner.id && owner.turnRecruits >= 2 && owner.turnRecruits - ctx.memberWeight(recruited) < 2) {
          owner.bonus += 3;
          ctx.log(`${owner.name}'s Drill Sergeant: a second recruit this turn, +3 followers.`);
        }
      },
      ...see(info => 3 * endsAhead(info).length * 0.7),
    })),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Proselytizers' place. 6 red + 3 any as a player sees it. Red members
    // are the ones of the red color (Drifters set to red too; Dabblers isn't one). Any rival may be chosen; one whose
    // members can't be swapped (Loyalists: only Loyalists itself moves) keeps those, as a swap would, and the owner's own
    // Loyalists holds the owner's other members the same way. Members taken come in as the owner's recruits (their On
    // Recruit fires), as with Red's swaps; members given are arrivals for the rival.
    ...add4(m('defectors', 'Defectors', 5, 3, "On Use, once per game: swap all your red members, this one too, for all of one rival's red members.", {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const list = ctx.rivals(owner).filter(o => ctx.canSteal(owner, o, 'swap'));
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Defectors: no rival to swap with.`); return; }
        ctx.choose(owner, "Defectors: swap all your red members for which rival's red members?", list.map(o => ({
          id: `player:${o.id}`, label: `${o.name} (${defectList(ctx, o).map(c => c.def.name).join(', ') || 'no red members'})`, kind: 'player', value: o.id,
          hint: defectWorth(ctx, o) - defectWorth(ctx, owner),
        })), 'red.defect');
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && ctx.rivals(owner).some(o => ctx.canSteal(owner, o, 'swap') && defectWorth(ctx, o) - defectWorth(ctx, owner) >= 4),
    })),
    // Nov 4 (Claude, under Cory's go-with-your-gut; was "Game End: +1 follower per red member you have."): it pays for
    // out-redding rivals, not for width. Red members counted as everywhere (Mob itself counts as 4), at each round's end
    // before the contests.
    m('mob', 'Mob', 7, 4, /* 12, 4 members (Cory, Oct 30); worth 4 (Cory, Nov 1: "Just make mob four") */ 'Round End: +2 followers per rival with fewer red members than you.', { f: 4, n: 4,
      onRoundEnd(ctx, owner) {
        // MOB=cards: bot test only (Nov 3): one per red member card, not per member it counts as
        const reds = o => ctx.countMembersOfColor(o, 'red', { cards: globalThis.process?.env?.MOB === 'cards' });
        const k = ctx.rivals(owner).filter(o => reds(o) < reds(owner)).length;
        if (!k) return;
        owner.bonus += 2 * k;
        ctx.log(`${owner.name}'s Mob: ${k} rival${k === 1 ? ' has' : 's have'} fewer red members: +${2 * k} followers.`);
      },
      // BOTSEE: each round end still ahead, +2 for about half the rivals
      ...see(i => endsAhead(i).length * 2 * i.rivals.length * 0.5),
    }),
    // members only, never a follower buy (Cory, 2026-10-29: "red recruit should only work for gaining members")
    // Red Cloak. Cory, Nov 1 5:06pm (version 1 of two tested): "Whenever you recruit a member, +1 red." Swaps and
    // steals count (your own doing: memberAcquired); follower buys don't. 31% of wins off, 28% with the swap card on.
    m('recruiter', 'Recruiter', 4, 1, 'Whenever you recruit a member, +1 red.', {
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member) return;
        // RECRUITER=once|twice: bot test only (Nov 4, Cory "nerf red a little"): at most once (twice) per turn
        const cap = { once: 1, twice: 2 }[globalThis.process?.env?.RECRUITER];
        if (cap) { const k = ctx.turnKey(); if (owner.recruiterTurn !== k) { owner.recruiterTurn = k; owner.recruiterN = 0; } if (owner.recruiterN >= cap) return; owner.recruiterN += 1; }
        ctx.gain(owner, 'red', 1); ctx.log(`${owner.name}'s ${ctx.cloakOr(card, 'Recruiter')}: +1 red.`);
      },
    }),
    m('drive', 'Pied Piper', 2, 2, 'Whenever you recruit 2 or more members in one turn, +2 red.', {
      // pays the moment your second recruit of the turn lands, so the red can still be spent this turn
      onAnyRecruit(ctx, owner, card, by, recruited) {
        // your own turn only: a recruit on someone else's turn (Poach's free recruit) doesn't count toward it
        if (by === owner && ctx.state.current === owner.id && owner.turnRecruits >= 2 && owner.turnRecruits - ctx.memberWeight(recruited) < 2) { ctx.gain(owner, 'red', 2); ctx.log(`${owner.name}'s Pied Piper: +2 red.`); }
      },
    }),
    m('host', 'Host', 2, 2, 'On Recruit: +1 red per 2 members you have. Round Start: +1 red per 2 members you have.', { now: true,
      onRoundStart(ctx, owner) { ctx.gain(owner, 'red', Math.floor(ctx.memberCount(owner) / 2)); },
    }),
    m('sponsor', 'Sponsor', 6, 4, 'Your members cost 2 less.', { costReduction: 2 }),
    m('crowd', 'Crowd-Pleaser', 2, 0, 'Whenever you buy followers, +1 red.', {
      onBuyFollowers(ctx, owner, card, buyer) { if (buyer === owner) ctx.gain(owner, 'red', 1); },
    }),
    // Nov 4, "paper filters, play ranks" (Cory's yes): paper passers at or over the old card go to a play A/B.
    // Patriarch's place: Shepherd (paper 14 vs 10). Ties for the shop's cheapest: its owner picks, at Round Start.
    ...add7(m('shepherd', 'Shepherd', 3, 2, 'Round Start: if you have the fewest members (ties count), recruit the cheapest shop member for free.', { round: 1,
      onRoundStart(ctx, owner) {
        const mine = ctx.memberCount(owner);
        if (ctx.rivals(owner).some(o => ctx.memberCount(o) < mine) || !ctx.shopCards().length) return;
        ctx.log(`${owner.name}'s Shepherd: ${owner.name} has the fewest members, so the cheapest shop member joins free.`);
        hireCheapest(ctx, owner, 'Shepherd');
      },
      ...see(info => 2 * endsAhead(info).length),
    })),
    m('patriarch', 'Patriarch', 5, 2, /* Cory, Nov 5 backlog price yes */ 'Game End: +1 follower per 2 members you have.', { ...old3, ...old7('red.patriarch'), retired: true, // Clan takes its place (Nov 11)
      onGameEnd: (ctx, owner) => Math.floor(ctx.memberCount(owner) / 2),
    }),
    // Cory, 2026-11-11 12:13am Eastern: "Yeah Clan is good. Round End might be a bit too strong but lets try it." Pays
    // Red's contest count (biggest group of one color, grey counts, each card 1), the same count the contest uses.
    // Price is Claude's fill-in (Patriarch's); Patriarch leaves the deck for it (cull.js; Claude's pick pending Cory).
    m('clan', 'Clan', 5, 2, 'Round End: +1 follower per member in your biggest group of one color (grey counts).', {
      onRoundEnd(ctx, owner) {
        const n = Math.max(0, ...[...ctx.state.quadrants, 'guest'].map(q => ctx.countMembersOfColor(owner, q, { cards: true })));
        if (!n) return;
        owner.bonus += n;
        ctx.log(`${owner.name}'s Clan: ${n} member${n === 1 ? '' : 's'} in their biggest group of one color: +${n} followers.`);
      },
      // BOTSEE: each round end still ahead, about 3 in the biggest group
      ...see(i => endsAhead(i).length * 3),
    }),
    // REPLACE3 bot test (Nov 3, replacement batch 3): Patriarch's place. 6 red + 3 any as a player sees it. Every rival
    // gets one (seat order from the owner's left), as long as the owner has members; any member may go, Missionaries
    // itself too. A give is an arrival, not their recruit (Old Maid's −5 lands on them, Martyrs pays the giver). Then one
    // free recruit per member given, each costing up to 2 more than one of them (any order; the smallest allowance that
    // fits is used); an allowance nothing in the shop fits is lost.
    // REPLACE7 (Nov 4, quality loop, Members A batch 2): Patriarch's place (paper 18, Red's set 12 -> 15). 4 red + 2 any as
    // a player sees it. Members counted as the table counts them (a card that counts as 3 is 3), this one included.
    ...add7(m('godfather', 'Godfather', 3, 2, 'On Use, once per game: recruit a shop member costing up to the number of members you have, for free.', {
      activate: 'game',
      onActivate: (...a) => godfatherUse(...a),
      botActivate: godfatherBot,
    })),
    // Godfather's trial (q-a-godfather-c1): owners won 25% vs Patriarch's 33%, so the retune lifts it with followers before
    // touching the price (Cory's price rule): worth 3, so it counts as 3 (worth equals count) and is named as a group,
    // which also raises its own allowance by 2. Same price, same rule.
    ...add7(m('crimefamily', 'Crime Family', 3, 2, 'On Use, once per game: recruit a shop member costing up to the number of members you have, for free.', { f: 3, n: 3,
      activate: 'game',
      onActivate: (...a) => godfatherUse(...a),
      botActivate: godfatherBot,
    })),
    ...add3(m('missionaries', 'Missionaries', 5, 3, 'On Use, once per game: give one of your members to each rival, then recruit a shop member costing up to 2 more for each one given, for free.', { f: 2,
      activate: 'game',
      onActivate(ctx, owner) {
        const n = ctx.state.players.length, left = Array.from({ length: n - 1 }, (_, k) => (owner.id + 1 + k) % n);
        ctx.log(`${owner.name} uses Missionaries.`);
        missionGiveStep(ctx, owner, { left, allow: [] });
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 && ctx.membersOf(owner).filter(c => c.def.key !== 'missionaries').length >= ctx.state.players.length - 1,
    })),
    // Foster Parents takes its place (Claude, under Cory's go-with-your-gut, overnight quality loop, 2026-11-04)
    m('recruitbonus', 'Greeters', 1, 1, 'Your On Recruits also give +1 of that member’s color.', { f: 2, retired: true,
      onRecruitAbility(ctx, owner, card, recruited) { gainColorOf(ctx, owner, recruited.def, 'Greeters'); }, // a guest: nothing; Dabblers: pick
    }),
    // REPLACE7 bot test (Nov 4, quality loop, Members A): Greeters' place, a round I member as Greeters is. 2 red + 2 any
    // as a player sees it, counts as 2. Each of the owner's turns gets one more recruit step that offers only shop (or
    // reachable pile) members costing 4 or less (core: flag cheapBuy, the most any of the owner's cards prints).
    // Quality loop (Nov 4), live since Nov 4 (Claude, under Cory's go-with-your-gut): Greeters' place (paper 15, Red's set 13 -> 15; trial owners 33% vs 30%; blind play 1.50 vs 0.33). 2 red +
    // 2 any as a player sees it, counts as 2, a round I member as Greeters is. Pays when a member comes into its owner's
    // cult out of a rival's, whoever moves it (Promote, Demote, Panel, Body Snatchers, Poach, Shake Down, Kidnapper, a
    // rival's Promote that trades with you); not for the shop. Itself arriving from a rival's counts (Evaluators, Nov 4: a
    // table reads it that way, as Old Maid's own joining counts).
    m('fosterparents', 'Foster Parents', 2, 1, /* 2 red + 1 any printed, 3 red + 3 any as a player sees it: back to a round I price (Cory, Nov 6: "increase the cost a tad", then "lower" so it stays in round I; the split is Claude's fill-in) */ 'Whenever a member joins your cult from a rival’s, +2 followers.', { f: 2, n: 2,
      onCultMove(ctx, owner, card, { uid, from, to }) {
        if (to !== owner || !from || from === owner) return; // itself too, arriving from a rival's (as Old Maid's "this member joins" counts)
        owner.bonus += 2;
        ctx.log(`${owner.name}'s ${card.def.name}: ${ctx.card(uid).def.name} joins from ${from.name}'s cult, +2 followers.`);
      },
      // about one member in from a rival per round for a Red player (Promote, Demote, Body Snatchers)
      ...see(info => 2 * endsAhead(info).length),
    }),
    ...add7(m('ushers', 'Ushers', 1, 2, `Each turn, you may also recruit one member costing ${4 + MORE} or less.`, { f: 2, n: 2, round: 1, cheapBuy: 4 + MORE,
      // about one cheap member a turn in round I, fewer later (the row holds few of them after round I)
      ...see(info => (info.round === 1 ? 0.6 * info.myNow + 2 : info.round === 2 ? 0.3 * info.myNow : 0)),
    })),
    m('movementpenalty', 'Deprogrammers', 1, 1, on12('deprog2') ? 'Whenever a member joins your cult from a rival’s, steal 1 follower from that rival.' : 'Whenever you take a rival’s member out of their cult, they lose 1 follower.', { f: 4, n: 2, ...old12('red.movementpenalty'), // +1 (Cory, Oct 30)
      ...(on12('deprog2') ? {
        // REPLACE12=deprog2 reword (paper requalified, Nov 4): any member that comes to you from a rival's cult (your take,
        // their give, either side of a swap), and the follower comes to you. Not for Deprogrammers' own arrival.
        onCultMove(ctx, owner, card, { uid, from, to, swappedWith }) {
          if (to !== owner || !from || from === owner || uid === card.uid || swappedWith === card.uid) return;
          if (ctx.followers(from) <= 0) { ctx.log(`${owner.name}'s Deprogrammers: ${from.name} has no followers to steal.`); return; }
          from.bonus -= 1; owner.bonus += 1;
          ctx.log(`${owner.name}'s Deprogrammers: ${ctx.card(uid).def.name} joins from ${from.name}'s cult, so ${owner.name} steals 1 follower from ${from.name}.`);
        },
      } : {
        onMoveMember(ctx, owner, card, info) { if (info.from !== owner && ctx.followers(info.from) > 0) info.from.bonus -= 1; },
      }),
    }),
    // Turncoat (3 red + 1 any as a player sees it; REPLACE12=turncoat, paper requalified Nov 4): Cory's back-pocket
    // Turncoats (Nov 4, 12:35am: "I also like Turncoat") with the free recruit from the top of the pile, so nobody chooses
    // on the thief's turn. Same trigger as Turncoats: a rival's card or space takes one of yours into their cult.
    ...add12(m('turncoat', 'Turncoat', 2, 1, 'Whenever a rival takes one of your members, recruit the top member of the pile for free.', { f: 2,
      onCultMove(ctx, owner, card, { uid, from, to, actor, swappedWith }) {
        if (from !== owner || !to || to !== actor || actor === owner || uid === card.uid || swappedWith === card.uid) return;
        const top = ctx.state.pile[0];
        if (top === undefined) { ctx.log(`${owner.name}'s Turncoat: ${actor.name} took ${ctx.card(uid).def.name}, but the pile is empty.`); return; }
        ctx.log(`${owner.name}'s Turncoat: ${actor.name} took ${ctx.card(uid).def.name}, so the top member of the pile joins ${owner.name} free.`);
        ctx.recruit(owner, top, { free: true, top: true });
      },
      // a counter: about one take a game against a Red player
      ...see(info => 1.5 * endsAhead(info).length / 3),
    })),
    // REPLACE12 bot tests (Nov 4, quality loop, lane D2; pitches/D2-batch1.md): Deprogrammers' place, prices Claude's fill-ins.
    // Exit Counselor (3 red + 1 any as a player sees it): when its owner's own card or space hands one of their members
    // to a rival or the shop (Promote, Demote, Panel, Body Snatchers' swap, Godparent, Guest of Honor), the owner uses
    // that member's On Recruit. Never for a member a rival takes, one cast out to the pile (given to nobody; play judge,
    // Nov 4), or Exit Counselor itself.
    ...add12(m('exitcounselor', 'Exit Counselor', 2, 1, 'Whenever you give one of your members away, use its On Recruit.', {
      onCultMove(ctx, owner, card, { uid, from, to, actor, swappedWith }) {
        // (an Exit Counselor that arrives in the same swap wasn't yours when the member left, as with Turncoats)
        if (from !== owner || actor !== owner || to === owner || uid === card.uid || swappedWith === card.uid) return;
        if (discardOf(ctx.state).includes(uid)) return; // cast out to the discard pile (Farewell, Estate Sale): given to nobody
        const gone = ctx.card(uid), d = gone.def;
        if (!d.onRecruited && !(d.now && (d.onRoundStart || d.onRoundStartLate))) { ctx.log(`${owner.name}'s Exit Counselor: ${d.name} has no On Recruit to use.`); return; }
        ctx.log(`${owner.name}'s Exit Counselor: ${d.name} leaves, and ${owner.name} uses its On Recruit.`);
        ctx.borrowOnRecruit(owner, uid);
      },
      // about one give-away a round for a Red player, an On Recruit worth about 2
      ...see(info => 1.5 * endsAhead(info).length),
    })),
    // Foundling (2 red + 1 any as a player sees it): at each Round Start, if no rival has fewer members than its owner
    // (members counted as the table counts them, ties count), the owner recruits the top member of the pile for free.
    ...add12(m('foundling', 'Foundling', 1, 1, 'Round Start: if you have the fewest members (ties count), recruit the top member of the pile for free.', {
      onRoundStart(ctx, owner, card) {
        const mine = ctx.memberCount(owner);
        if (ctx.rivals(owner).some(o => ctx.memberCount(o) < mine)) return;
        const top = ctx.state.pile[0];
        if (top === undefined) { ctx.log(`${owner.name}'s Foundling: the pile is empty.`); return; }
        ctx.log(`${owner.name}'s Foundling: ${owner.name} has the fewest members, so the top member of the pile joins free.`);
        ctx.recruit(owner, top, { free: true, top: true });
      },
      // a free member (about 4) at each Round Start still ahead when behind on members: about half of them
      ...see(info => 2 * (3 - info.round)),
    })),
    m('panel', 'Panel', 4, 2, 'On Use, once per round: promote or demote another of your members.', { f: 3, n: 3, // On Use (Cory, Nov 5 backlog yes)
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        if (!['promote', 'demote'].some(mode => swapPairs(ctx, owner, mode, card.uid).length)) { card.used = false; ctx.log(`${owner.name}'s Panel: nothing to promote or demote.`); return; }
        const options = ['promote', 'demote'].filter(mode => swapPairs(ctx, owner, mode, card.uid).length).map(mode => ({
          id: mode, label: mode === 'promote' ? 'Promote' : 'Demote', kind: 'choice', value: mode,
        }));
        ctx.choose(owner, 'Panel: Promote or Demote?', options, 'red.panelMode', { excludeUid: card.uid });
      },
    }),
    m('loyalists', 'Loyalists', 1, 1, /* 2 red + 2 any as seen (Cory, Nov 6: "Maybe make it 2 and 2", then "yes") */ 'Your other members can’t be swapped.', { f: 3, n: 2, blockMemberSwaps: true }),
    // Cory, 2026-10-24: Red's once per game, "swap a rivals with the shop" (equal or greater cost); name and price Claude's fill-in
    m('headhunter', 'Headhunter', 3, 2, 'On Use, once per game: swap a rival’s member with a shop member that costs as much or more.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        if (!swapPairs(ctx, owner, 'rival').length) { card.used = false; ctx.log(`${owner.name}'s Headhunter: no rival member to swap.`); return; }
        // its swap line doesn't name it, so say the use (the turn card leads with "used Headhunter")
        ctx.log(`${owner.name} uses Headhunter.`);
        swap(ctx, owner, 'rival', 'Headhunter: choose a rival’s member and its shop replacement');
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && swapPairs(ctx, owner, 'rival').some(([a]) => cost(a) >= 5 + MORE + richUp(ctx.state)),
    }),
    m('reserve', 'Benchwarmer', 1, 0, 'Worth 1 follower.'), // placeholder until Cory designs its hold (then it becomes Seat Saver)
  ],
};

// Godfather and Crime Family (REPLACE7): the free recruit, costing up to the owner's member count
// bots: only when some shop member fits (the Lab's c1 void: an empty fit leaves it unused, and a bot re-taking it looped
// to the move cap); then late, or once the count reaches a pricey card
function godfatherBot(ctx, owner) {
  const k = ctx.memberCount(owner), fits = ctx.shopCards().filter(x => cost(x) <= k);
  return fits.length > 0 && (ctx.state.round === 3 || fits.some(x => cost(x) >= 7 + MORE + richUp(ctx.state)));
}
function godfatherUse(ctx, owner, card) {
  const k = ctx.memberCount(owner), list = ctx.shopCards().filter(x => cost(x) <= k);
  if (!list.length) { card.used = false; ctx.log(`${owner.name}'s ${card.def.name}: no shop member costs ${k} or less.`); return; }
  ctx.log(`${owner.name} uses ${card.def.name}: ${k} members, so a shop member costing up to ${k}, for free.`);
  ctx.choose(owner, `${card.def.name}: recruit which shop member (costing up to ${k}) for free?`, list.map(x => ({
    id: `card:${x.uid}`, label: `${x.def.name} (${cost(x)})`, kind: 'card', value: x.uid, hint: x.def.f * 1.5 + cost(x),
  })), 'red.takeFree');
}
function convertGive(ctx, v, uid) {
  if (!ctx.state.shop.includes(uid)) return;
  ctx.log(`${v.name} recruits ${ctx.card(uid).def.name} from the shop, for free (Converts).`);
  ctx.recruit(v, uid, { free: true });
}
/** Body Snatchers (REPLACE2): [one of p's members, a rival's member of the same cost], both swappable. */
function snatchPairs(ctx, p) {
  const mine = ctx.membersOf(p).filter(c => ctx.canSwapMember(c.uid));
  const theirs = ctx.rivals(p).filter(o => ctx.canSteal(p, o, 'swap')).flatMap(o => ctx.membersOf(o).filter(c => ctx.canSwapMember(c.uid)));
  const out = [];
  for (const a of mine) for (const b of theirs) if (a.def.id !== b.def.id) out.push([a, b]); // any cost since Nov 8 (Cory)
  return out;
}
// Tryout's shop members: an On Recruit or round-start effect that doesn't act on the card itself ("swap it",
// "it becomes", or the card by its own name: "Impersonator has that member's ability"), which a member still in the
// shop can't do ("becomes a copy of"; copying an action is fine: Cory asked why Fan Club wasn't offered, Nov 5). Tryout on Impersonator had you pick a rival's member for nothing (Cory's playtest, Nov 4).
const copiesAction = def => /\bcop(?:y|ies)\b/i.test(def.text.replace(/^[^:]*:/, ''));
const turnKey = ctx => `${ctx.state.round}:${(ctx.state.turns || []).length}`;
export function borrowable(ctx) {
  return ctx.shopCards().filter(c => {
    if (c.borrowTurn === turnKey(ctx) || (copiesAction(c.def) && ctx.state.tryoutCopyTurn === turnKey(ctx)) || c.def.recruitNote || !(c.def.onRecruited || (c.def.now && (c.def.onRoundStart || c.def.onRoundStartLate)))) return false;
    const t = c.def.text.replace(/^[^:]*:/, '');
    return !/\bit\b|\bthese\b|\bthis member\b|\ba copy of\b/i.test(t) && !t.toLowerCase().includes(c.def.name.toLowerCase());
  });
}
function cheapValue(ctx) {
  const c = cheapest(ctx);
  return c ? c.def.f + cost(c) * 0.8 : 0;
}
function cheapest(ctx) {
  const shop = ctx.shopCards();
  if (!shop.length) return null;
  return shop.reduce((a, b) => (cost(b) < cost(a) ? b : a));
}
// who: the card or space asking, so its choice is titled with its own name (Mentor & Protégés shares this with Open Door)
function hireCheapest(ctx, p, who, borrow = false) {
  const shop = ctx.shopCards();
  if (!shop.length) return;
  const min = Math.min(...shop.map(cost));
  const tied = shop.filter(c => cost(c) === min);
  if (tied.length === 1) { if (borrow) borrowIt(ctx, p, tied[0].uid); else ctx.recruit(p, tied[0].uid, { free: true }); return; }
  ctx.choose(p, `${who}: which of the cheapest members?`, tied.map(c => ({
    id: `card:${c.uid}`, label: c.def.name, kind: 'card', value: c.uid, hint: c.def.f,
  })), borrow ? 'red.borrowFree' : 'red.takeFree');
}
/** Borrow: recruit it free, and note it for the round end (core endRound discards it if p still has it). */
function borrowIt(ctx, p, uid) {
  if (!ctx.state.shop.includes(uid)) return;
  ctx.recruit(p, uid, { free: true });
  if (p.members.includes(uid)) (ctx.state.borrowed ||= []).push({ uid, pid: p.id, round: ctx.state.round });
}
/** Trending: each color's count of shop members (grey members aren't a color), biggest first. */
function shopColors(ctx) {
  const by = new Map();
  for (const c of ctx.shopCards()) { const col = ctx.quadrant(c.def.quadrant)?.resource; if (col && ctx.state.resources.includes(col)) by.set(col, (by.get(col) || 0) + 1); }
  return [...by].sort((a, b) => b[1] - a[1]);
}
function trend(ctx, p, color, n) {
  ctx.gain(p, color, n, { fromAction: true });
  ctx.log(`${p.name}'s Trending: ${n} ${color} member${n === 1 ? '' : 's'} in the shop, +${n} ${color}.`);
}
// A swap can rearrange any cult, but taking from a protected rival remains blocked.
// Each card's owner and cost are read once (bots rate every pair on a copy, and each rating re-checks its pair: the
// pair loop with a fresh owner lookup per test was most of a bot game's time, Nov 3).
function swapSides(ctx, p, mode) {
  const entry = (c, owner) => ({ c, uid: c.uid, id: c.def.id, owner, cost: cost(c) });
  const cult = ctx.state.players.flatMap(owner => (owner === p ? mode !== 'rival' : ctx.canSteal(p, owner, 'swap')) ? ctx.membersOf(owner).filter(c => ctx.canSwapMember(c.uid)).map(c => entry(c, owner)) : []);
  const shop = ctx.shopCards().map(c => entry(c, undefined));
  const first = mode === 'even' ? [...cult, ...shop] : cult;
  // Promote and Demote reach other cults too, any member that can be swapped (Cory, 2026-10-29: "demote and promote
  // should work with rivals. if their members are able to be swapped"); never two members of the same cult
  const second = mode === 'even' ? first : mode === 'promote' || mode === 'demote' ? [...shop, ...cult] : shop;
  return { first, second };
}
const pairOk = (mode, excludeUid, a, b) => a.uid !== b.uid && a.id !== b.id /* two copies of one member (piles): no swap */ && a.uid !== excludeUid && b.uid !== excludeUid && !(b.owner && b.owner === a.owner) && (mode === 'even' ? a.cost === b.cost
  // Promote never reaches cheaper (Cory, Nov 4 night: "i like it better as any. its just that the rules weren't being obeyed":
  // a copied Promote swapped his Extra Hand, 8, for a rival's Line Cutters, 1); any cult, as before
  : mode === 'promote' ? b.cost <= a.cost + 3 && b.cost >= a.cost : mode === 'rival' ? b.cost >= a.cost : b.cost <= a.cost && b.cost >= a.cost - 3); // 3, not 2 (Cory, Nov 5 backlog yes)
function swapPairs(ctx, p, mode, excludeUid = null) {
  const { first, second } = swapSides(ctx, p, mode);
  const out = [];
  for (const a of first) for (const b of second) if (pairOk(mode, excludeUid, a, b)) out.push([a.c, b.c]);
  return out;
}
/** Is (a, b) one of swapPairs' pairs, as it stands now? */
function swapAllowed(ctx, p, mode, excludeUid, ua, ub) {
  const { first, second } = swapSides(ctx, p, mode);
  const a = first.find(e => e.uid === ua), b = second.find(e => e.uid === ub);
  return !!(a && b && pairOk(mode, excludeUid, a, b));
}
function swap(ctx, p, mode, prompt, excludeUid = null) {
  const pairs = swapPairs(ctx, p, mode, excludeUid);
  if (!pairs.length) { ctx.log(`${p.name}: no eligible members to swap.`); return; }
  const source = card => ctx.ownerOf(card.uid)?.name || 'Shop';
  ctx.choose(p, prompt, pairs.map(([a, b]) => ({
    id: `trade:${a.uid}:${b.uid}`, label: `${source(a)}: ${a.def.name} ↔ ${source(b)}: ${b.def.name}`, kind: 'trade',
    value: [a.uid, b.uid], hint: ctx.ownerOf(a.uid) === p ? (b.def.f + cost(b)) - (a.def.f + cost(a))
      : ctx.ownerOf(b.uid) === p ? (a.def.f + cost(a)) - (b.def.f + cost(b)) : 0,
  // the swap is yours to skip (Cory, 2026-10-22 playtest: "You shouldnt HAVE to swap")
  })).concat({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null, hint: -99 }), 'red.trade', { mode, excludeUid });
}

/** Missionaries (REPLACE3): give one of p's members to the next rival in data.left; then the free recruits. */
function missionGiveStep(ctx, p, data) {
  if (!data.left.length || !p.members.length) { missionTakeStep(ctx, p, data.allow); return; }
  const o = ctx.player(data.left[0]);
  ctx.choose(p, `Missionaries: give which of your members to ${o.name}?`, ctx.membersOf(p).map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'member', value: c.uid,
    // bots give what's worth least to keep and lets in the most: a spent or plain card, a pricier one opens a bigger recruit
    hint: cost(c) * 0.5 - (c.def.f || 1) * 1.5 - (c.used ? 0 : 1) + (c.def.onJoined ? 5 : 0),
  })), 'red.missionGive', data);
}
function missionTakeStep(ctx, p, allow) {
  if (!allow.length) return;
  const most = Math.max(...allow);
  const shop = ctx.shopCards().filter(c => cost(c) <= most);
  if (!shop.length) { ctx.log(`${p.name}'s Missionaries: no shop member costs ${most} or less.`); return; }
  ctx.choose(p, `Missionaries: recruit which member for free? (${allow.length} to go: up to ${[...allow].sort((a, b) => b - a).join(', ')})`, shop.map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'card', value: c.uid, hint: c.def.f * 1.5 + cost(c),
  })), 'red.missionTake', { allow });
}

// ---------- REPLACE4 bot test (Nov 3, replacement batch 4): Defectors and Tithe Takers ----------
/** p's red members that may move in a swap (Loyalists holds the others). */
const defectList = (ctx, p) => ctx.membersOf(p).filter(c => (c.asColor || c.def.quadrant) === 'red' && ctx.canSwapMember(c.uid));
const defectWorth = (ctx, p) => defectList(ctx, p).reduce((n, c) => n + (c.def.f || 1) * 1.5 + cost(c) * 0.5, 0);
/** The next rival in `left` (seat order) with a member gives one to the owner. */
function titheStep(ctx, owner, left) {
  const at = left.findIndex(id => ctx.player(id).members.length);
  if (at < 0) return;
  const o = ctx.player(left[at]);
  ctx.choose(o, `Tithe Takers: give which of your members to ${owner.name}?`, ctx.membersOf(o).map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'member', value: c.uid,
    // a hint for quick reads: the card worth least to keep (a spent or plain one), Old Maid first
    hint: -((c.def.f || 1) * 1.5 + cost(c) * 0.5 + (c.used || c.def.vanilla ? 0 : 1)) + (c.def.onJoined ? 5 : 0),
  })), 'red.tithe', { to: owner.id, left: left.slice(at + 1) });
}
