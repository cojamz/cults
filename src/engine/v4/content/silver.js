// Silver: the host. Big gains for you, a little for everyone else. Most silver at round end takes the ring's followers.
// Every Silver space spills onto the table, and the spill is a choice: when you host, which color you hand
// out (it lifts everyone's count in that color's contest), and which rival gets your alms.
// Silver members pay the host; only Guest rewards sitting at someone else's table.
//
// "Give" is Silver's verb: anything a Silver space or member hands to another player. Gifts fire two
// module-level hooks on members: onGive (the giver's members) and onGiven (the receiver's members).
// Gold's Kickback also gives (Cory): gold.js fires the receiver's onGiven hooks itself.
import { MORE } from './price.js';
import { defById } from './index.js';
import { add2, old2, handlers2 } from './replace2.js';
import { add6, old6 } from './replace6.js';
import { add8, old8, handlers8 } from './replace8.js';
import { swap11, handlers11 } from './replace11.js';
import { add14, old14, handlers14 } from './replace14.js';
import { add16, old16, on16 } from './replace16.js';
import { ON8 } from './replace8.js';
import { see, endsAhead, SEE_SPITE } from './botsee.js';
import { pool, poolSpace } from './pool.js';

const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });
const S = 'silver';
// Live: C (Cory's pick 1, Nov 3 9:47pm). HOSTESSES=old plays the earlier card for comparison.
const HOSTESS_TEST = globalThis.process?.env?.HOSTESSES || 'C';
const HOSTESS_TEXT = {
  A: 'On Recruit and Round Start: give each rival 1 silver. +2 followers for each.',
  B: 'On Recruit and Round Start: give each rival 1 silver in round I, 2 in round II, 3 in round III. +1 follower per silver you give.',
  C: 'On Recruit and Round Start: give each rival 1 silver. +1 follower for each.', // Cory's pick 1, Nov 3 9:47pm
};
const SOC_N = Number(globalThis.process?.env?.SOCIALITES_N || 1); // live at +1 since Nov 4 (trial switch kept)
const WW_N = Number(globalThis.process?.env?.WELLWISHERS_N || 3); // trial switch: Well-Wishers' followers per move (Nov 4, c1 read weak)
const others = (ctx, p) => ctx.rivals(p);
const otherColors = ctx => ctx.state.resources.filter(c => c !== S);
const cost = c => c.def.s + c.def.w;
/** Buyout: [rival, card] for each rival member whose cost p's silver covers. */
const buyoutList = (ctx, p) => ctx.rivals(p).flatMap(o => ctx.membersOf(o).filter(c => cost(c) <= (p.res[S] || 0)).map(c => [o, c]));
const memberValue = c => (c.def.f || 1) + 0.5 * cost(c);

// a Doppelganger runs the hooks of the member it copies too
const effDefs = c => (c.copy || c.ability ? [c.def, ...[c.copy, c.ability].filter(Boolean).map(defById)] : [c.def]);
// the artifact too: Silver's artifact is Caterer, whose gift hook never fired from the artifact (bug bash, Nov 1)
function hooks(ctx, p, name) {
  const out = [];
  for (const c of ctx.abilitiesOf(p)) for (const d of effDefs(c)) if (d[name]) out.push([c, d]);
  return out;
}

/** Give n of a color to one player. Fires the receiver's onGiven hooks. */
function giveTo(ctx, giver, to, color, n, once = null) {
  if (!(n > 0)) return;
  if (color === S && dry(ctx, giver, to)) { ctx.log(`${to.name}'s Teetotalers: ${giver.name} can't give ${to.name} silver.`); return false; }
  ctx.gain(to, color, n);
  // run as the member, so what it gives traces to it (Guest)
  for (const [c, d] of hooks(ctx, to, 'onGiven')) ctx.asMember(to, d.name, () => d.onGiven(ctx, to, c, giver, color, n));
  if (color === S) for (const o of ctx.state.players) for (const [c, d] of hooks(ctx, o, 'onAnyGifted')) ctx.asMember(o, d.name, () => d.onAnyGifted(ctx, o, c, giver, once, n));
}
/** Teetotalers (idea pipeline pool 10, flag noSilverGifts; no live card has it): rivals can't give its owner silver. */
const dry = (ctx, giver, to) => giver !== to && hooks(ctx, to, 'noSilverGifts').length > 0;
/** Give n of a color to every other player. One gift for the giver's onGive hooks. */
function giveAll(ctx, giver, color, n) {
  if (!(n > 0)) return;
  for (const o of others(ctx, giver)) giveTo(ctx, giver, o, color, n);
  afterGive(ctx, giver, color);
}
/** One gift from giver to one player, as any sphere gives (Gold's Kickback): receiver's and giver's gift hooks fire. */
/** Guest of Honor's gifts: each of the owner's members costing 4 or less (as a player sees the cost), to each rival. */
function goh(ctx, owner, card) {
  const cheap = ctx.membersOf(owner);
  const ww = ctx.membersOf(owner).some(c => c.def.id === 'silver.wellwishers' || c.def.key === 'wellwishers') ? WW_N : 0;
  const opts = [];
  // bots shed a used-up or plain cheap member, never one still paying; the rival it helps least;
  // giving Guest of Honor itself ends its run: bots do that only in round III
  for (const c of cheap) for (const o of others(ctx, owner)) opts.push({
    id: `give:${c.uid}:${o.id}`, label: `${c.def.name} (${c.def.s + c.def.w}) to ${o.name}`, kind: 'choice', value: [c.uid, o.id],
    hint: 4 + ww - (c.def.f || 1) * 1.5 - (c.used || c.def.vanilla || !(c.def.afterAction || c.def.activate) ? 0 : 3) - (card && c.uid === card.uid && ctx.state.round < 3 ? 6 : 0) - ctx.followers(o) * 0.01,
  });
  return opts;
}

export function give(ctx, giver, to, color, n) {
  if (!(n > 0)) return;
  giveTo(ctx, giver, to, color, n);
  afterGive(ctx, giver, color);
}
function afterGive(ctx, giver, color = null, once = null) {
  for (const [c, d] of hooks(ctx, giver, 'onGive')) ctx.asMember(giver, d.name, () => d.onGive(ctx, giver, c, color, once));
}
/** Silver a Silver space pays its taker: Grand Host doubles it (each copy doubles again). */
function hostGain(ctx, p, n) {
  const k = hooks(ctx, p, 'hostDouble').length;
  if (k) {
    ctx.log(`${p.name}'s Grand Host: the space's ${n} silver comes as ${n * 2 ** k}.`);
    // the hover's Why names it, the biggest part of the payout (panel tester C: only Caterer +1 was listed)
    ctx.note(p, 'Grand Host', `silver gain ${n} → ${n * 2 ** k}`);
  }
  // printed: the space's own gain, which is what a copy (Green) gets
  ctx.gain(p, S, n * 2 ** k, { fromAction: true, printed: n });
  return n * 2 ** k;
}

// Bots: how much I lead (or trail) a color's count by. Handing everyone +1 of a color I lead by 1 or less hurts.
function leadIn(ctx, p, color) {
  const best = Math.max(0, ...others(ctx, p).map(o => o.res[color] || 0));
  return (p.res[color] || 0) - best;
}
const colorHint = (ctx, p, color) => {
  const lead = leadIn(ctx, p, color);
  const risky = (p.res[color] || 0) > 0 && lead >= 0 && lead <= 1 ? -1 : 0; // the gift could tie or pass me
  return risky - 0.3 * (p.res[color] || 0); // otherwise take the color I'm short of
};
/** Half the richest rival's silver, rounded up (plus the +1 they're about to get, for bot estimates). */
const tideAmount = (ctx, p, extra) => Math.ceil((Math.max(0, ...ctx.rivals(p).map(o => o.res[S])) + extra) / 2);
const spillCost = (ctx, n) => 0.25 * n * (ctx.state.players.length - 1);

// Silver 2.0 (Cory, 2026-10-31): Toast, Polish, Party Gifts; Potluck, Sweet Talk; Largesse (design/decisions.md).
// Party Gifts and Largesse hand rivals silver from the bank, never your own, and pay you followers per silver.
/** Minions on Silver spaces, anyone's (Ballroom Dancers). */
function onSilver(ctx) {
  const st = ctx.state, qi = st.quadrants.indexOf(S);
  if (qi < 0) return 0;
  let n = Object.keys(st.slots || {}).filter(k => k.startsWith(`${qi}-`)).length;
  for (const [key, list] of Object.entries(st.squats || {})) if (key.startsWith(`${qi}-`)) n += list.length;
  return n;
}
const lowest = (ctx, p) => Math.min(...others(ctx, p).map(o => ctx.followers(o)));
/** Rivals gain up to `left` silver from the bank, split as the giver picks one at a time. */
function shareStep(ctx, p, data) {
  const given = data.given || {};
  const total = Object.values(given).reduce((s, n) => s + n, 0);
  const left = data.max - total;
  if (left <= 0) return shareDone(ctx, p, data);
  const low = lowest(ctx, p);
  const opts = others(ctx, p).filter(o => !dry(ctx, p, o)).map(o => ({
    id: `player:${o.id}`, label: `${o.name} +1 silver`, kind: 'player', value: o.id,
    // bots spread to whoever trails
    hint: (ctx.followers(o) === low ? 1 : 0) - 0.2 * (given[o.id] || 0),
  }));
  if (!opts.length) return shareDone(ctx, p, data);
  if (!data.must) opts.push({ id: 'done', label: total ? 'Done' : 'Give nothing', kind: 'done', value: 'done', hint: -5 });
  const pay = data.flat != null ? `You get ${data.flat} followers once all ${data.max} are given` : `You get ${data.per} ${data.per === 1 ? 'follower' : 'followers'} for each`;
  ctx.choose(p, `${data.who}: which rival gains 1 silver? ${pay}, ${left} more ${data.must ? 'to give' : 'at most'}`, opts, 'silver.share', { ...data, given });
}
function shareDone(ctx, p, data) {
  const given = data.given || {};
  const total = Object.values(given).reduce((s, n) => s + n, 0);
  if (!total) { ctx.log(`${p.name}'s ${data.who}: gave nothing.`); return; }
  if (data.own) p.res[S] -= total; // your own silver (Patronesses, REPLACE14), not the bank's
  for (const [id, n] of Object.entries(given)) giveTo(ctx, p, ctx.player(Number(id)), S, n);
  afterGive(ctx, p, S);
  const got = data.flat != null ? data.flat : total * data.per;
  p.bonus += got;
  const list = Object.entries(given).map(([id, n]) => `${ctx.player(Number(id)).name} +${n}`).join(', ');
  ctx.log(`${p.name}'s ${data.who}: ${list} silver, then +${got} followers.`);
}
/** Sweet Talk: turn silver into other colors one at a time, as many as you want. */
function turnStep(ctx, p, data) {
  const left = data.max == null ? p.res[S] : Math.min(p.res[S], data.max - (data.done || 0));
  if (left <= 0) return;
  const opts = otherColors(ctx).map(c => ({
    id: `color:${c}`, label: `1 silver → ${data.each} ${c}`, kind: 'color', value: c, spend: { silver: 1, [c]: -data.each },
    hint: 1 - 0.3 * (p.res[c] || 0),
  }));
  opts.push({ id: 'done', label: data.done ? 'Done' : 'Keep my silver', kind: 'done', value: 'done',
    // bots keep a little silver for the contest at Sweet Talk's 1 for 1; Polish's 2 for 1 they always take
    hint: data.each > 1 ? -5 : (p.res[S] <= 2 ? 2 : -1) });
  ctx.choose(p, `${data.who}: turn 1 silver into ${data.each} of a color? (you have ${p.res[S]})`, opts, 'silver.turn', data);
}

/** Polisher: x silver into 2x of any colors. */
function polisherTurn(ctx, p, x) {
  p.res[S] -= x;
  ctx.log(`${p.name}'s Polisher: ${x} silver into ${2 * x} of any colors.`);
  polishPick(ctx, p, 2 * x, 'Polisher');
}
/** Charmers (REPLACE14): +1 of any color, one pick at a time. */
function charmPick(ctx, p, left) {
  ctx.choose(p, `Charmers: +1 of which color? (${left} to pick)`, ctx.state.resources.map(c => ({
    id: `color:${c}`, label: `+1 ${c}`, kind: 'color', value: c, hint: -(p.res[c] || 0) + (c === S ? 0.5 : 0),
  })), 'silver.charm', { left });
}
function polishPick(ctx, p, left, who = 'Polish') {
  // any color, silver included (Cory, Nov 4 1:14pm: "yeah allow silver i guess"; the words already said "any colors")
  ctx.choose(p, `${who}: +1 of which color? (${left} to pick)`, ctx.state.resources.map(c => ({
    id: `color:${c}`, label: `+1 ${c}`, kind: 'color', value: c, hint: -(p.res[c] || 0) - (c === S ? 5 : 0), // silver back for silver is rarely the pick; the sheet's suggestion and bots skip it
  })), 'silver.polish', { left, who });
}

/**
 * Gift Shop (REPLACE11, Actions lane, Nov 4; /mnt/project-files/quality/pitches/actions-polish.md), in Polish's place:
 * "Give a shop member to a rival. +3 silver in round I, +5 in round II, +7 in round III." The member arrives in the
 * rival's cult as a gift, not their recruit (no On Recruit, as a member a rival's move brings in), and the row refills.
 */
/**
 * Open Bar (REPLACE11=openbar, Actions lane, Nov 4, requalified under "paper filters, play ranks"; pitches/actions-polish-r2.md),
 * in Polish's place: "+2 silver. This round, whenever a rival takes a Silver space, +1 follower." The tab is
 * state.openBar [{ pid, round }], read where a space is taken (core.js 'act'); it closes at Round End.
 */
const OPEN_BAR = {
  key: 'openbar', copyDoesIt: true, ring: 1, name: 'Open Bar', text: '+2 silver. This round, whenever a rival takes a Silver space, +1 follower.',
  // the tab pays only on Silver spaces still open for rivals this round (Evaluators, Nov 4: bots took it last, for +2 silver)
  estimate: (ctx, p) => 2 + 0.8 * Math.min(ctx.rivals(p).length, ctx.openSpaces().filter(sp => sp.qid === 'silver' && !/^Open Bar$/.test(sp.name)).length),
  resolve(ctx, p) {
    const got = hostGain(ctx, p, 2);
    (ctx.state.openBar ||= []).push({ pid: p.id, round: ctx.state.round });
    ctx.log(`${p.name}'s Open Bar: +${got} silver; a rival taking a Silver space this round gives them +1 follower.`);
  },
};
const giftSilver = ctx => 2 * ctx.state.round + 1;
const GIFT_SHOP = {
  key: 'giftshop', copyDoesIt: true, ring: 1, name: 'Gift Shop', text: 'Give a shop member to a rival. +3 silver in round I, +5 in round II, +7 in round III.',
  byRound: { lines: ['+3 silver', '+5 silver', '+7 silver'], rest: 'Give a shop member to a rival.' },
  estimate: ctx => giftSilver(ctx) - 1,
  resolve(ctx, p) {
    const got = hostGain(ctx, p, giftSilver(ctx));
    ctx.log(`${p.name}'s Gift Shop: +${got} silver.`);
    const shop = ctx.shopCards(), rivals = ctx.rivals(p);
    if (!shop.length || !rivals.length) { ctx.log(`${p.name}'s Gift Shop: no shop member to give.`); return; }
    ctx.choose(p, 'Gift Shop: give which shop member?', shop.map(c => ({
      id: `card:${c.uid}`, label: `${c.def.name} (${c.def.s + c.def.w})`, kind: 'card', value: c.uid,
      // bots give away the least: the cheapest, lowest-worth card
      hint: -(c.def.s + c.def.w) - 2 * (c.def.f || 0),
    })), 'silver.giftShopCard');
  },
};
function giftShopCard(ctx, p, uid) {
  const c = ctx.card(uid);
  if (!c || !ctx.state.shop.includes(uid)) return;
  ctx.choose(p, `Gift Shop: give ${c.def.name} to which rival?`, ctx.rivals(p).map(o => ({
    id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers)`, kind: 'player', value: o.id,
    // bots gift the rival furthest behind
    hint: -ctx.followers(o),
  })), 'silver.giftShopTo', { uid });
}
function giftShopTo(ctx, p, oid, data) {
  const o = ctx.player(oid), name = ctx.card(data.uid)?.def.name;
  if (!o || o === p || !ctx.giveFromShop(o, data.uid, p)) return;
  ctx.log(`${p.name}'s Gift Shop: gives ${name} to ${o.name}.`);
}

/**
 * Sweet Nothings (Actions lane, Nov 4; /mnt/project-files/quality/pitches/actions-sweet-talk.md), live in Potluck's
 * place since Cory's Nov 6 pick: "+3 silver. Give rivals up to 3 of your silver. +2 of any colors per silver given."
 * Your own silver (not the bank's, as Party Gifts), one at a time; then the colors, as Polish picks them.
 */
const SWEET_NOTHINGS = {
  key: 'sweetnothings', copyDoesIt: true, ring: 2, name: 'Sweet Nothings',
  text: '+3 silver. Give rivals up to 3 of your silver. +2 of any colors per silver given.',
  estimate: ctx => 3 + 3 - spillCost(ctx, 1),
  resolve(ctx, p) {
    hostGain(ctx, p, 3);
    sweetStep(ctx, p, { given: {} });
  },
};
function sweetStep(ctx, p, data) {
  const given = data.given || {};
  const total = Object.values(given).reduce((s, n) => s + n, 0);
  const left = Math.min(3 - total, (p.res[S] || 0) - total); // given silver leaves at Done
  if (left <= 0) return sweetDone(ctx, p, data);
  const low = lowest(ctx, p);
  const opts = others(ctx, p).filter(o => !dry(ctx, p, o)).map(o => ({
    id: `player:${o.id}`, label: `Give ${o.name} 1 of your silver`, kind: 'player', value: o.id, spend: { silver: 1 },
    // bots give to whoever trails, and keep 2 silver
    hint: (ctx.followers(o) === low ? 1 : 0) - 0.2 * (given[o.id] || 0) - ((p.res[S] || 0) - total <= 2 ? 3 : 0),
  }));
  opts.push({ id: 'done', label: total ? 'Done' : 'Give nothing', kind: 'done', value: 'done', hint: 0 });
  ctx.choose(p, `Sweet Nothings: give a rival 1 of your silver for 2 of any colors? (${left} more at most)`, opts, 'silver.sweetStep', { ...data, given });
}
function sweetDone(ctx, p, data) {
  const given = data.given || {};
  const total = Object.values(given).reduce((s, n) => s + n, 0);
  if (!total) { ctx.log(`${p.name}'s Sweet Nothings: gave nothing.`); return; }
  for (const [id, n] of Object.entries(given)) { if (giveTo(ctx, p, ctx.player(Number(id)), S, n) !== false) p.res[S] -= n; }
  afterGive(ctx, p, S);
  const list = Object.entries(given).map(([id, n]) => `${ctx.player(Number(id)).name} +${n}`).join(', ');
  ctx.log(`${p.name}'s Sweet Nothings: ${p.name} hands over ${total} of ${p.name}'s silver (${list}), for ${2 * total} of any colors.`);
  polishPick(ctx, p, 2 * total, 'Sweet Nothings');
}

// Gift Exchange (idea pipeline pool 5, Nov 7; bot games only): each rival +2 silver from the bank (a gift: Silver's gift
// hooks fire), then an extra recruit of a shop member where your silver pays any color (core's how.silverAny: silver may
// pay a member's colored part, as Smooth Talker's does). Optional ("Recruit nothing"). No +1 silver: not printed.
const GX = { silverAny: true };
function gxRow(ctx, p) {
  return ctx.shopCards().filter(c => ctx.price(p, c.uid, GX).afford);
}
const GIFT_EXCHANGE = poolSpace({
  key: 'giftexchange', copyDoesIt: true, ring: 2, name: 'Gift Exchange', text: 'Give each rival 2 silver from the bank. Recruit a member; your silver pays for any color.',
  estimate: (ctx, p) => Math.max(0, ...gxRow(ctx, p).map(c => c.def.f * 1.4 + 1.6)) - spillCost(ctx, 2),
  resolve(ctx, p) {
    giveAll(ctx, p, S, 2);
    ctx.log(`${p.name}'s Gift Exchange: each rival +2 silver.`);
    const row = gxRow(ctx, p);
    if (!row.length) { ctx.log(`${p.name}'s Gift Exchange: can't pay for any shop member.`); return; }
    ctx.choose(p, 'Gift Exchange: recruit which member (your silver pays for any color)?', row.map(c => ({
      id: `card:${c.uid}`, label: `${c.def.name} · pay ${ctx.price(p, c.uid, GX).total}`, kind: 'card', value: c.uid, hint: c.def.f * 1.4 + (c.def.vanilla ? 0 : 1.6) + (c.def.s + c.def.w) * 0.3,
    })).concat({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: -1 }), 'silver.giftExchange');
  },
}, 'pool5');

// idea pipeline pool 12 (Nov 7; silver.md survivor 3): all of one rival's silver to another rival, one pair per pick;
// bots move the most silver, away from whoever it helps most in Most silver. Nothing to move: just the +1.
const regiftPairs = (ctx, p) => ctx.rivals(p).filter(o => (o.res[S] || 0) > 0 && ctx.canSteal(p, o, 'change')).flatMap(o => ctx.rivals(p).filter(t => t !== o).map(t => [o, t]));
const REGIFTERS = poolSpace({
  key: 'regifters', copyDoesIt: true, ring: 2, name: 'Regifters', text: 'Move all of one rival\u2019s silver to another rival. +1 follower per silver moved. +1 silver.',
  estimate: (ctx, p) => 1 + Math.max(0, ...regiftPairs(ctx, p).map(([o]) => o.res[S] || 0)),
  resolve(ctx, p) {
    ctx.gain(p, S, 1, { fromAction: true });
    const pairs = regiftPairs(ctx, p);
    if (!pairs.length) { ctx.log(`${p.name}'s Regifters: no rival has silver to move.`); return; }
    ctx.choose(p, 'Regifters: move all of whose silver to whom?', pairs.map(([o, t]) => ({
      id: `trade:${o.id}:${t.id}`, label: `${o.name}'s ${o.res[S]} silver to ${t.name}`, kind: 'trade', value: [o.id, t.id],
      hint: (o.res[S] || 0) - 0.05 * ctx.followers(t),
    })), 'silver.regift');
  },
}, 'pool12');

export const silverActions = [
  GIFT_EXCHANGE,
  // idea pipeline pool 10 (Nov 7): the +1 is the space's own (Grand Host doubles it); then every player's whole pile of
  // silver at once (counted before anyone gives) goes to the next seat, a gift (Teetotalers' owner keeps what a rival
  // can't give them). "Left" is the next seat in the table's order.
  poolSpace({
    key: 'roundrobin', copyDoesIt: true, ring: 1, name: 'Round Robin', text: '+1 silver. Then every player, you too, gives all their silver to the player on their left.',
    estimate: (ctx, p) => { const ps = ctx.state.players, right = ps[(ps.indexOf(p) + ps.length - 1) % ps.length]; return (right.res[S] || 0) - (p.res[S] || 0); },
    resolve(ctx, p) {
      hostGain(ctx, p, 1);
      const ps = ctx.state.players, pile = ps.map(o => o.res[S] || 0), gave = [];
      ps.forEach((o, i) => {
        const to = ps[(i + 1) % ps.length];
        if (!pile[i] || to === o) return;
        if (dry(ctx, o, to)) { ctx.log(`${to.name}'s Teetotalers: ${o.name} can't give ${to.name} silver, and keeps it.`); return; }
        o.res[S] -= pile[i]; gave.push([o, to, pile[i]]);
      });
      for (const [o, to, n] of gave) giveTo(ctx, o, to, S, n);
      for (const [o] of gave) afterGive(ctx, o, S);
      ctx.log(`${p.name}'s Round Robin: ${gave.length ? gave.map(([o, to, n]) => `${o.name} gives ${to.name} ${n}`).join(', ') : 'nobody has silver to pass'}.`);
    },
  }, 'pool10'),
  // idea pipeline pool 15 (Nov 7, round 2): Round Robin without the whole-pile swing. Pass the Plate: every pile halves
  // (rounded down) to the next seat, counted before anyone gives. Pass It On: only your pile moves left, then your right
  // neighbor's whole pile comes to you, a take that protection stops (Regifters' check).
  poolSpace({
    key: 'passtheplate', copyDoesIt: true, ring: 1, name: 'Pass the Plate', text: '+1 silver. Then every player, you too, gives half their silver, rounded down, to the player on their left.',
    estimate: (ctx, p) => { const ps = ctx.state.players, right = ps[(ps.indexOf(p) + ps.length - 1) % ps.length]; return Math.floor((right.res[S] || 0) / 2) - Math.floor((p.res[S] || 0) / 2); },
    resolve(ctx, p) {
      hostGain(ctx, p, 1);
      const ps = ctx.state.players, pile = ps.map(o => Math.floor((o.res[S] || 0) / 2)), gave = [];
      ps.forEach((o, i) => {
        const to = ps[(i + 1) % ps.length];
        if (!pile[i] || to === o) return;
        if (dry(ctx, o, to)) { ctx.log(`${to.name}'s Teetotalers: ${o.name} can't give ${to.name} silver, and keeps it.`); return; }
        o.res[S] -= pile[i]; gave.push([o, to, pile[i]]);
      });
      for (const [o, to, n] of gave) giveTo(ctx, o, to, S, n);
      for (const [o] of gave) afterGive(ctx, o, S);
      ctx.log(`${p.name}'s Pass the Plate: ${gave.length ? gave.map(([o, to, n]) => `${o.name} gives ${to.name} ${n}`).join(', ') : 'nobody has 2 silver to halve'}.`);
    },
  }, 'pool15'),
  poolSpace({
    key: 'passiton', copyDoesIt: true, ring: 1, name: 'Pass It On', text: '+1 silver. Give all your silver to the player on your left, then take all the silver of the player on your right.',
    estimate: (ctx, p) => { const ps = ctx.state.players, right = ps[(ps.indexOf(p) + ps.length - 1) % ps.length]; return (p.res[S] || 0) - (right.res[S] || 0); },
    resolve(ctx, p) {
      hostGain(ctx, p, 1);
      const ps = ctx.state.players, i = ps.indexOf(p), left = ps[(i + 1) % ps.length], right = ps[(i + ps.length - 1) % ps.length], said = [];
      const mine = p.res[S] || 0;
      if (mine && left !== p) {
        if (dry(ctx, p, left)) said.push(`${left.name}'s Teetotalers: ${p.name} keeps their silver`);
        else { p.res[S] -= mine; giveTo(ctx, p, left, S, mine); afterGive(ctx, p, S); said.push(`gives ${left.name} ${mine}`); }
      }
      const theirs = right.res[S] || 0;
      if (theirs && right !== p) {
        if (!ctx.canSteal(p, right, 'change')) said.push(`can't take ${right.name}'s silver`);
        else { right.res[S] -= theirs; p.res[S] = (p.res[S] || 0) + theirs; said.push(`takes ${right.name}'s ${theirs}`); }
      }
      ctx.log(`${p.name}'s Pass It On: ${said.length ? said.join(', then ') : 'no silver to pass'}.`);
    },
  }, 'pool15'),
  REGIFTERS,
  // pool 15: Regifters with the payout capped at 8 (the verdict's change)
  poolSpace({
    key: 'secretsanta', copyDoesIt: true, ring: 2, name: 'Secret Santa', text: 'Move up to 8 of one rival’s silver to another rival. +1 follower per silver moved. +1 silver.',
    estimate: (ctx, p) => 1 + Math.max(0, ...regiftPairs(ctx, p).map(([o]) => Math.min(8, o.res[S] || 0))),
    resolve(ctx, p) {
      ctx.gain(p, S, 1, { fromAction: true });
      const pairs = regiftPairs(ctx, p);
      if (!pairs.length) { ctx.log(`${p.name}'s Secret Santa: no rival has silver to move.`); return; }
      ctx.choose(p, 'Secret Santa: move up to 8 of whose silver to whom?', pairs.map(([o, t]) => ({
        id: `trade:${o.id}:${t.id}`, label: `${o.name}'s ${Math.min(8, o.res[S])} silver to ${t.name}`, kind: 'trade', value: [o.id, t.id],
        hint: Math.min(8, o.res[S] || 0) - 0.05 * ctx.followers(t),
      })), 'silver.regift', { cap: 8, name: 'Secret Santa' });
    },
  }, 'pool15'),
  {
    // copyDoesIt: a copy gifts the rivals too, so the copier's Silver Cloak pays (Cory, Nov 6: "yes.")
    key: 'toast', copyDoesIt: true, ring: 1, name: 'Toast', text: '+3 silver in round I, +6 in round II, +9 in round III. Each rival +1 silver in round I, +2 in round II, +3 in round III.',
    byRound: { lines: ['+3 silver. Each rival +1 silver.', '+6 silver. Each rival +2 silver.', '+9 silver. Each rival +3 silver.'] },
    estimate: ctx => 3 * ctx.state.round - spillCost(ctx, ctx.state.round),
    resolve(ctx, p) {
      const n = 3 * ctx.state.round;
      const got = hostGain(ctx, p, n);
      giveAll(ctx, p, S, ctx.state.round);
      // what the taker got (Grand Host's doubling included), so the line matches the count
      ctx.log(`${p.name} raised a toast: +${got} silver, +${ctx.state.round} silver to everyone else.`);
    },
  },
  swap11(swap11({
    // Cory, Nov 11 12:24-12:29am: "+3 silver, turn your silver into other colors… maybe make it all one other color",
    // "would be pretty good as a round I even", then "yeah 1. simpler also" (all of it, not "any of it"). Name kept.
    key: 'polish', copyDoesIt: true, ring: 1, name: 'Polish', text: '+3 silver. Then turn all your silver into one other color.',
    estimate: () => 3.5,
    resolve(ctx, p) {
      hostGain(ctx, p, 3);
      const n = p.res[S] || 0, opts = otherColors(ctx);
      if (!n || !opts.length) return;
      ctx.choose(p, `Polish: turn all ${n} of your silver into which color?`, opts.map(c => ({
        id: `color:${c}`, label: `${n} silver → ${n} ${c}`, kind: 'color', value: c, spend: { silver: n, [c]: -n },
        hint: 1 - 0.3 * (p.res[c] || 0),
      })), 'silver.polishAll');
    },
  }, GIFT_SHOP), OPEN_BAR),
  {
    key: 'partygifts', ring: 1, name: 'Party Gifts', copyDoesIt: true, text: 'Give rivals up to 3 silver from the bank. +2 followers per silver given.',
    estimate: ctx => 2 * 6 - spillCost(ctx, 1) * 3,
    resolve(ctx, p) { shareStep(ctx, p, { who: 'Party Gifts', max: 3, per: 2 }); },
  },
  // Sweet Nothings takes Potluck's place (Cory, Nov 6: "yeah 1"; Potluck had rivals choose on your turn). Potluck stays
  // in code, off the wheel; REPLACE11=favors puts it back for a comparison.
  swap11(SWEET_NOTHINGS, {
    key: 'favors', copyDoesIt: true, ring: 2, name: 'Potluck', text: '+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver.',
    estimate: ctx => 2 + (ctx.state.players.length - 1) - spillCost(ctx, 2),
    resolve(ctx, p) {
      hostGain(ctx, p, 2);
      favorAll(ctx, p);
    },
  }),
  {
    // Out of the wheel since Nov 11 (Buyout takes its place); kept for old saves and its tests
    pool: true,
    key: 'tongue', copyDoesIt: true, ring: 2, name: 'Sweet Talk', text: '+3 silver. Then turn any of your silver into other colors.',
    estimate: () => 3.5,
    resolve(ctx, p) {
      hostGain(ctx, p, 3);
      turnStep(ctx, p, { who: 'Sweet Talk', max: null, each: 1, done: 0 });
    },
  },
  {
    // Cory, Nov 11 12:31am: "thats pretty good. lets try it." (Sweet Talk's slot; name Claude's fill-in). You pick the
    // rival and the member; its cost is its price as a player sees it, all paid in silver to that rival; it is a recruit
    // (its On Recruit fires, as Poach's does) and doesn't use your turn's recruit. A purchase, not a steal or a gift.
    key: 'buyout', copyDoesIt: true, ring: 2, name: 'Buyout', text: 'Recruit a rival’s member, paying them its cost in silver. +1 silver.',
    estimate: (ctx, p) => { const l = buyoutList(ctx, p); return l.length ? Math.max(...l.map(([, c]) => memberValue(c))) : 0.5; },
    resolve(ctx, p) {
      const list = buyoutList(ctx, p);
      if (list.length) ctx.choose(p, `Buyout: recruit which rival's member? (you have ${p.res[S] || 0} silver)`, list.map(([o, c]) => ({
        id: `card:${c.uid}`, label: `${o.name}'s ${c.def.name} (${cost(c)} silver)`, kind: 'card', value: c.uid, hint: memberValue(c),
      })).concat({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: 0 }), 'silver.buyout');
      else ctx.log(`${p.name}'s Buyout: no rival's member costs ${p.res[S] || 0} silver or less.`);
      ctx.gain(p, S, 1, { fromAction: true });
    },
  },
  {
    // Cory, Nov 6: "Largesse should have to give 12. And give 10 followers." All 12 must go; 10 followers flat.
    key: 'largesse', copyDoesIt: true, ring: 3, name: 'Largesse', text: 'Give rivals 12 silver from the bank, split as you choose. +10 followers.',
    estimate: ctx => 10 + 10 - spillCost(ctx, 1) * 12,
    resolve(ctx, p) { shareStep(ctx, p, { who: 'Largesse', max: 12, per: 0, flat: 10, must: true }); },
  },
];

const ACT = new Set((globalThis.process?.env?.ACT || '').split(',').filter(Boolean)); // action bot tests (Nov 4): env only, never live
/** Potluck: every rival gives the host 1 resource of their choice, then gains 2 silver. They answer at the same
 *  time (Cory, Oct 31: "they SHOULD be able to do at the same time otherwise takes forever"): one ask each, asked
 *  together (pending.also); bots are queued first so they answer at once and people never wait on them. */
function favorAll(ctx, host) {
  const rivals = others(ctx, host).sort((a, b) => (a.kind === 'bot' ? 0 : 1) - (b.kind === 'bot' ? 0 : 1));
  const key = `favors:${ctx.state.moves}`;
  for (const o of rivals) {
    const have = ctx.state.resources.filter(c => (o.res[c] || 0) > 0);
    if (!have.length) {
      giveTo(ctx, host, o, S, 2, key);
      afterGive(ctx, host, S, key);
      ctx.log(`${o.name} had nothing to give; +2 silver (${host.name}'s Potluck).`);
      continue;
    }
    ctx.choose(o, `Potluck: give ${host.name} 1 resource, then you gain 2 silver`, have.map(c => ({
      id: `color:${c}`, label: `Give 1 ${c}`, kind: 'color', value: c,
      // bots give from their biggest pile, and not the color they lead the host in by 1 or less
      hint: 0.3 * (o.res[c] || 0) - ((o.res[c] || 0) - (host.res[c] || 0) <= 1 && (o.res[c] || 0) >= (host.res[c] || 0) ? 1 : 0),
    })), 'silver.favor', { host: host.id, key }, { together: key });
  }
}


const silver = {
  id: 'silver',
  name: 'Silver',
  resource: S,
  scoring: { label: 'Most silver', counts: 'the silver you hold when the round ends', score: (ctx, p) => p.res[S] },
  actions: silverActions,

  handlers: {
    regift(ctx, p, v, data) {
      const [a, b] = v || [], o = ctx.player(a), t = ctx.player(b);
      if (!o || !t || o === p || t === p || o === t) return;
      const n = Math.min(data?.cap || Infinity, o.res[S] || 0);
      if (!n) return;
      o.res[S] -= n; t.res[S] = (t.res[S] || 0) + n; p.bonus += n;
      ctx.log(`${p.name}'s ${data?.name || 'Regifters'}: moves ${o.name}'s ${n} silver to ${t.name}, +${n} follower${n === 1 ? '' : 's'}.`);
    },
    almoners(ctx, p, id, data) {
      const o = ctx.player(id);
      if (!o || o === p || !(p.res[S] > 0)) return;
      // one gift event for the whole Round End (Caterer pays once; it looped one silver at a time, judge game p6-6301)
      if (giveTo(ctx, p, o, S, 1, data.once || `almoners:${ctx.state.round}:${p.id}`) === false) return;
      p.res[S] -= 1;
      almsStep(ctx, p, { once: data.once || `almoners:${ctx.state.round}:${p.id}`, n: data.n + 1, to: { ...(data.to || {}), [o.name]: ((data.to || {})[o.name] || 0) + 1 } });
    },
    giftExchange(ctx, p, uid) {
      if (uid == null) { ctx.log(`${p.name}'s Gift Exchange: recruits nothing.`); return; }
      if (!ctx.state.shop.includes(uid)) return;
      const ways = ctx.payChoices(p, uid, GX);
      if (!ways.length) return;
      if (ways.length === 1) { giftExchangePay(ctx, p, uid, ways[0]); return; }
      ctx.choose(p, `Gift Exchange: how do you pay for ${ctx.card(uid).def.name}?`, ways.map((v, i) => ({
        id: `pay:${ctx.state.resources.map(r => v[r] || 0).join('-')}`, label: Object.entries(v).filter(([, n]) => n).map(([c, n]) => `${n} ${c}`).join(', ') || 'nothing',
        kind: 'pay', value: v, hint: i === 0 ? 1 : 0, uid,
      })), 'silver.giftExchangePaid', { uid });
    },
    giftExchangePaid(ctx, p, v, data) { if (ctx.state.shop.includes(data.uid)) giftExchangePay(ctx, p, data.uid, v); },
    ...handlers11({ giftShopCard, giftShopTo }),
    // Sweet Nothings, live in Potluck's place (Cory, Nov 6)
    sweetStep(ctx, p, value, data) {
      if (value === 'done') return sweetDone(ctx, p, data);
      const given = { ...(data.given || {}) }; given[value] = (given[value] || 0) + 1;
      sweetStep(ctx, p, { ...data, given });
    },
    godparents(ctx, p, value) {
      const [uid, oid] = value, o = ctx.player(oid);
      if (!p.members.includes(uid) || !o || o === p) return;
      const c = ctx.card(uid), k = c.def.s + c.def.w, name = c.def.name;
      if (!ctx.moveMember(uid, p, o, { actor: p })) return;
      p.bonus += k;
      ctx.log(`${p.name}'s Patrons: gives ${name} to ${o.name}: +${k} followers.`);
    },
    // live since Nov 4 (quality loop): Polisher's place
    guestofhonor(ctx, p, value) {
      if (value === 'none') return;
      const [uid, oid] = value, o = ctx.player(oid);
      if (!p.members.includes(uid) || !o || o === p) return;
      const name = ctx.card(uid).def.name;
      if (!ctx.moveMember(uid, p, o, { actor: p })) return;
      p.bonus += 4;
      ctx.log(`${p.name}'s Guest of Honor: gives ${name} to ${o.name}: +4 followers.`);
    },
    // Kingmakers (Cory, Nov 5; Nov 9: "should give from your silver. And +1 follower for each given. So you dont auto get 3")
    kingmakers(ctx, p, id, data = {}) {
      const once = data.once || `kingmakers:${ctx.state.round}:${p.id}`;
      const to = { ...(data.to || {}) };
      if (id === 'stop') { kingStep(ctx, p, { once, left: 0, to }); return; }
      const o = ctx.player(id);
      if (!o || o === p || !(p.res[S] > 0)) return;
      if (giveTo(ctx, p, o, S, 1, once) !== false) { p.res[S] -= 1; to[o.name] = (to[o.name] || 0) + 1; }
      kingStep(ctx, p, { once, left: (data.left ?? 3) - 1, to });
    },
    ...handlers8({
      usher(ctx, p, id) {
        const o = ctx.player(id);
        if (!o || o === p) return;
        giveTo(ctx, p, o, S, 2);
        afterGive(ctx, p, S);
        p.bonus += 3;
        ctx.log(`${p.name}'s Usher: gives ${o.name} 2 silver: +3 followers.`);
      },
    }),
    ...handlers2({
      hush(ctx, victim, answer, data) {
        const thief = ctx.player(data.thief);
        if (answer === 'pay' && (victim.res[S] || 0) >= 2) {
          victim.res[S] -= 2;
          give(ctx, victim, thief, S, 2);
          ctx.log(`${victim.name}'s Hush Money: ${victim.name} gives ${thief.name} 2 silver instead.`);
          return;
        }
        const got = ctx.steal(thief, victim, { take: data.take, uid: data.uid, followers: data.followers, hushed: true,
          give: (n, took) => { for (const [c, k] of Object.entries(took)) if (k) ctx.gain(thief, c, k); } });
        if (got) ctx.log(`${thief.name} stole ${got} from ${victim.name} (${victim.name} let it go).`);
      },
    }),
    gift(ctx, p, color, data) {
      ctx.gain(p, color, data.mine, { fromAction: true });
      giveAll(ctx, p, color, 1);
      ctx.log(`${p.name} took ${data.mine} ${color} and gave everyone else 1 ${color}.`);
    },
    alms(ctx, p, [id, color]) {
      const t = ctx.player(id);
      giveTo(ctx, p, t, color, 2);
      afterGive(ctx, p, color);
      ctx.log(`${p.name} gave ${t.name} 2 ${color}.`);
    },
    tongue(ctx, p, value) {
      if (value) {
        const [c, x] = value;
        p.res[S] -= x; p.res[c] += x;
        ctx.log(`${p.name} turned ${x} silver into ${x} ${c}.`);
      }
      giveAll(ctx, p, S, 1);
      // each gift names the space (panel tester C: a copied Sweet Talk on an Echo turn gave P3 +1 silver, unexplained)
      for (const o of others(ctx, p)) ctx.log(`${o.name} +1 silver (${p.name}'s Sweet Talk).`);
    },
    share(ctx, p, value, data) {
      if (value === 'done') return shareDone(ctx, p, data);
      const given = { ...data.given, [value]: (data.given[value] || 0) + 1 };
      shareStep(ctx, p, { ...data, given });
    },
    polisher(ctx, p, x) { polisherTurn(ctx, p, x); },
    ...handlers14({
      charm(ctx, p, c, data) {
        ctx.gain(p, c, 1);
        if (data.left > 1) charmPick(ctx, p, data.left - 1);
      },
    }),
    polish(ctx, p, c, data) {
      const who = data.who || 'Polish';
      ctx.gain(p, c, 1);
      ctx.log(`${p.name}'s ${who}: +1 ${c}.`);
      if (data.left > 1) polishPick(ctx, p, data.left - 1, who);
    },
    polishAll(ctx, p, c) {
      const n = p.res[S] || 0;
      if (!n || c === S || !ctx.state.resources.includes(c)) return;
      p.res[S] = 0; ctx.gain(p, c, n);
      ctx.log(`${p.name}'s Polish: ${n} silver into ${n} ${c}.`);
    },
    buyout(ctx, p, uid) {
      if (uid == null) { ctx.log(`${p.name}'s Buyout: recruits nothing.`); return; }
      const hit = buyoutList(ctx, p).find(([, c]) => c.uid === uid);
      if (!hit) return;
      const [o, c] = hit, k = cost(c);
      p.res[S] -= k; o.res[S] = (o.res[S] || 0) + k;
      if (ctx.moveMember(uid, o, p, { recruit: true })) ctx.log(`${p.name}'s Buyout: recruits ${o.name}'s ${c.def.name}, paying ${o.name} ${k} silver.`);
    },
    turn(ctx, p, value, data) {
      if (value === 'done') return;
      p.res[S] -= 1; ctx.gain(p, value, data.each);
      ctx.log(`${p.name}'s ${data.who}: 1 silver into ${data.each} ${value}.`);
      turnStep(ctx, p, { ...data, done: (data.done || 0) + 1 });
    },
    favor(ctx, o, color, data) {
      const host = ctx.player(data.host);
      o.res[color] -= 1; ctx.gain(host, color, 1);
      giveTo(ctx, host, o, S, 2, data.key);
      afterGive(ctx, host, S, data.key);
      ctx.log(`${o.name} gave ${host.name} 1 ${color}, then +2 silver (${host.name}'s Potluck).`);
    },
    creditor(ctx, p, id) {
      const o = ctx.player(id);
      if (!o || o === p) return;
      const k = Math.min(2, Math.max(0, ctx.followers(o)));
      o.bonus -= k; p.bonus += k;
      giveTo(ctx, p, o, S, 3);
      afterGive(ctx, p, S);
      ctx.log(`${p.name}'s Creditor: ${o.name} gives ${p.name} ${k} follower${k === 1 ? '' : 's'}, then gains 3 silver.`);
    },
    benefactor(ctx, p, id) {
      const t = ctx.player(id);
      giveTo(ctx, p, t, S, 1);
      afterGive(ctx, p, S);
      ctx.log(`${p.name}'s Benefactor gives ${t.name} 1 silver.`);
    },
  },

  members: [
    // idea pipeline pool 10 (Nov 7). Teetotalers: every gift of silver to its owner (from a rival's own pile or the bank)
    // doesn't happen; the giver's split skips them. High Rollers: silver paid for a member, its own recruit included (the
    // silver paid for it), as the pay sheet shows it; follower buys don't count. Prices are the writer's fill-ins.
    pool(m('teetotalers', 'Teetotalers', 3, 2, "Rivals can't give you silver.", { f: 2, noSilverGifts: true }), 'pool10'),
    pool(m('highrollers', 'High Rollers', 4, 3, 'Whenever you pay silver for a member, +1 follower per silver paid.', {
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member) return;
        const k = what.spent?.[S] || 0;
        if (k > 0) { owner.bonus += k; ctx.log(`${owner.name}'s High Rollers: paid ${k} silver, +${k} follower${k === 1 ? '' : 's'}.`); }
      },
      ...see(info => 3 * endsAhead(info).length * 0.6), // BOTSEE: about one silver-paid recruit a round, 3 silver
    }), 'pool10'),
    // idea pipeline pool 6 (Nov 7). Almoners: Round End before contests (so it gives up Most silver); every silver, one at
    // a time to the rival the owner picks (bots: the one with the fewest followers), each a gift. Prices are fill-ins.
    pool(m('almoners', 'Almoners', 2, 2, 'Round End: give all your silver to rivals, split as you choose. +1 follower per silver given.', {
      onAllPlaced(ctx, owner) { if ((owner.res[S] || 0) > 0) ctx.asMember(owner, 'Almoners', () => almsStep(ctx, owner, { n: 0 })); },
      ...see(info => 3 * endsAhead(info).length), // BOTSEE: the silver it holds at each round end, as followers
    }), 'pool6'),
    // Dinner Hosts: its own turn only (On Use); the recruit is an extra one, right after this step, as Recruit Twice's.
    pool(m('dinnerhosts', 'Dinner Hosts', 3, 2, 'On Use, once per round: give each rival 2 silver from the bank. Recruit.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner) {
        giveAll(ctx, owner, S, 2);
        ctx.log(`${owner.name}'s Dinner Hosts: each rival +2 silver; ${owner.name} recruits an extra time.`);
        const q = ctx.state.queue, at = q.findIndex(t => !t._fresh);
        q.splice(at < 0 ? q.length : at, 0, { t: 'buy', p: owner.id, _fresh: true });
      },
      botActivate: (ctx, p) => ctx.shopCards().some(c => ctx.price(p, c.uid).afford),
    }), 'pool6'),
    m('guest', 'Hangers-On', 4, 4, 'Whenever a rival gives you something, +1 more of it.', { f: 2, n: 2, retired: true, // Godparent takes its place (Claude, under Cory's "use your judgement", 2026-11-03) // worth 2 (Cory, Nov 1)
      onGiven(ctx, owner, card, giver, color) { if (giver !== owner) ctx.gain(owner, color, 1); },
    }),
    // Replacement batch 6 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Hangers-On's place. 4 silver + 1 any as a player sees it. Any of your
    // members (Godparent itself too) to any rival; its cost is its printed price. A gift, not a steal or a swap
    // (Loyalists and Bodyguards don't stop it): an arrival for the rival (Old Maid's −5 lands on them), and Martyrs pays
    // you as it leaves. A used card stays used.
    m('godparents', 'Patrons', 3, 1, 'On Use, once per game: give one of your members to a rival. Gain its cost in followers.', { // a round I member as Hangers-On was (bot-tested in a later round; Nov 3)
      activate: 'game',
      onActivate(ctx, owner, card) {
        const opts = [];
        for (const c of ctx.membersOf(owner)) for (const o of others(ctx, owner)) opts.push({
          id: `give:${c.uid}:${o.id}`, label: `${c.def.name} (${c.def.s + c.def.w}) to ${o.name}`, kind: 'choice', value: [c.uid, o.id],
          hint: c.def.s + c.def.w - (c.def.f || 1) * 1.5 - (c.used || c.def.vanilla ? 0 : 1) + (c.def.onJoined ? 5 : 0) - ctx.followers(o) * 0.01,
        });
        ctx.choose(owner, 'Patrons: give which of your members to which rival?', opts, 'silver.godparents');
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 || (ctx.state.round === 2 && ctx.membersOf(owner).some(c => c.used && c.def.activate === 'game')),
    }),
    m('benefactor', 'Benefactor', 4, 2, 'On Recruit: +3 silver, and +1 silver to a rival you choose. Round Start: +3 silver, and +1 silver to a rival you choose.', { now: true,
      onRoundStart(ctx, owner) {
        ctx.gain(owner, S, 3);
        const low = Math.min(...others(ctx, owner).map(o => ctx.followers(o)));
        ctx.choose(owner, 'Benefactor: give 1 silver to…', others(ctx, owner).map(o => ({
          id: `player:${o.id}`, label: o.name, kind: 'player', value: o.id, hint: ctx.followers(o) === low ? 1 : 0,
        })), 'silver.benefactor');
      },
    }),
    // Cory, Nov 1: Silver's tenth member. Once per space or card that gives silver, however many rivals it reaches
    // (Potluck' answers count as one gift; Claude, under Cory's go-with-your-gut).
    // Retired: Hostesses takes its place (Claude, under Cory's "use your judgement", 2026-11-03).
    m('giftwrapper', 'Gift Wrapper', 3, 2, 'Whenever you give rivals silver, +1 follower.', { retired: true,
      onGive(ctx, owner, card, color, once) {
        if (color !== S) return;
        if (once) { if (card.wrapped === once) return; card.wrapped = once; }
        owner.bonus += 1;
        ctx.log(`${owner.name}'s Gift Wrapper: +1 follower.`);
      },
    }),
    // Replacement batch 1 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Gift Wrapper's place.
    // 4 silver + 2 any as a player sees it. The silver comes from the bank and is a gift (Hangers-On, Caterer and the giver's gift hooks fire), then the count.
    // Bot test only (Nov 4, Cory on "+1 follower for each": "thats still like max 6 followers? maybe? for more than that in
    // followers? feels bad"): HOSTESSES=A gives each rival 1 silver for +2 followers each; HOSTESSES=B gives 1/2/3 by round,
    // +1 follower per silver given. Unset: the live card.
    m('hostesses', 'Hostesses', 3, 2, HOSTESS_TEXT[HOSTESS_TEST] || 'On Recruit and Round Start: give each rival 1 silver. +1 follower per rival who then holds more silver than you.', { f: 2, ...old14('hostesstwo'), now: true,
      onRoundStart(ctx, owner) {
        if (HOSTESS_TEXT[HOSTESS_TEST]) {
          const n = HOSTESS_TEST !== 'B' ? 1 : Math.min(3, Math.max(1, ctx.state.round || 1)), rivals = others(ctx, owner);
          giveAll(ctx, owner, S, n);
          const k = (HOSTESS_TEST === 'A' ? 2 : n) * rivals.length;
          ctx.log(`${owner.name}'s Hostesses: ${rivals.map(o => o.name).join(', ')} +${n} silver each; ${owner.name} +${k} followers.`);
          owner.bonus += k;
          return;
        }
        giveAll(ctx, owner, S, 1);
        const k = others(ctx, owner).filter(o => (o.res[S] || 0) > (owner.res[S] || 0)).length;
        ctx.log(`${owner.name}'s Hostesses: ${others(ctx, owner).map(o => o.name).join(', ')} +1 silver each${k ? `; ${owner.name} +${k} follower${k === 1 ? '' : 's'}` : ''}.`);
        if (k) owner.bonus += k;
      },
    }),
    // REPLACE14 bot test (Members E lane, Nov 4; lane B's B-scale4, paper 18 vs 16; a play A/B under "paper filters, play
    // ranks"): Hostesses' place, same price. Bank silver, a gift (Caterer, Hangers-On and gift hooks fire).
    ...add14(m('hostesstwo', 'Hostesses', 3, 2, 'Round Start: give each rival 2 silver. +2 followers for each.', { f: 2,
      onRoundStart(ctx, owner) {
        const rivals = others(ctx, owner);
        giveAll(ctx, owner, S, 2);
        owner.bonus += 2 * rivals.length;
        ctx.log(`${owner.name}'s Hostesses: ${rivals.map(o => o.name).join(', ')} +2 silver each; ${owner.name} +${2 * rivals.length} followers.`);
      },
      ...see(info => 2 * (info.n - 1) * [1, 2, 3].filter(r => r > info.round).length),
    })),
    // Cory, Nov 1: "whenever a player is gifted silver +1 silver", then +2 after the test read −4; one gift per space counts once
    // words and +1 (Cory, Nov 1, 2:25pm: "Whenever silver is gifted, +1 silver."), once per gift event
    m('caterer', 'Caterer', 2, 2, 'Whenever you gift silver, +2 silver.', {
      onAnyGifted(ctx, owner, card, giver, once) {
        const k = once || `${ctx.state.moves}:${giver.id}`;
        if (card.catered === k) return;
        // CATERER=self<n>: bot test of "Whenever you gift silver, +n silver." (own gifts only; Nov 6; off in the game)
        const raw = String(globalThis.process?.env?.CATERER || 'self2'), self = raw.startsWith('self');
        if (self && giver?.id !== owner.id) return;
        card.catered = k; ctx.gain(owner, S, Number(raw.replace('self', '') || 1)); // CATERER=n: bot test only (Nov 3)
      },
    }),
    m('majordomo', 'Majordomo', 4, 2, 'Whenever you take a Silver space, +2 silver.', {
      afterAction(ctx, owner, card, qid) { if (qid === S) ctx.gain(owner, S, 2); },
    }),
    // rewards not hosting (Claude under Cory's go-with-your-gut, from the dead-window audit): "+1 more per action silver"
    // was Majordomo at half the yield, since almost all action silver comes from Silver spaces
    m('silversmith', 'Silversmith', 4, 2, 'Whenever a rival takes a Silver space, +1 silver.', {
      afterRivalAction(ctx, owner, card, qid) { if (qid === S) ctx.gain(owner, S, 1); },
    }),
    m('steward', 'Steward', 2, 2, 'On Recruit: +1 silver per 3 silver you hold. Round Start: +1 silver per 3 silver you hold.', { now: true,
      // counts after every other round-start income (Benefactor, Banker…), as a player reads it (Cory hit this, 2026-10-14)
      onRoundStartLate(ctx, owner) { ctx.gain(owner, S, Math.floor(owner.res[S] / 3)); },
    }),
    m('retinue', 'Retinue', 1, 1, 'Worth 3 followers. On Recruit: each rival +1 silver.', {
      f: 3,
      onRecruited(ctx, owner) { giveAll(ctx, owner, S, 1); },
    }),
    // Cory (2026-10-14): replaces Feast Hall. Members are people or groups, and a hall is lots of people: it counts as
    // 3 members (n: 3) everywhere members are counted. Same cost for now; the fair-price screen checks it.
    m('revelers', 'Revelers', 3, 1, 'Counts as 3 members.', { n: 3 }),
    // pays when recruited too (Claude under Cory's go-with-your-gut, from the dead-window audit): blank if recruited in round III
    m('heir', 'Heir', 4, 2, 'On Recruit: +1 silver per member you have. Round III Start: +1 silver per member you have.', {
      onRecruited(ctx, owner) { ctx.gain(owner, S, ctx.memberCount(owner)); },
      onRoundStart(ctx, owner) { if (ctx.state.round === 3) ctx.gain(owner, S, ctx.memberCount(owner)); },
    }),
    // Nov 4 (Claude, under Cory's go-with-your-gut): a fixed 2 per rival ahead, never a share of a rival's silver
    m('spoon', 'Upstart', 4, 2, 'On Recruit: +2 silver per rival with more followers than you.', {
      onRecruited(ctx, owner) {
        const k = others(ctx, owner).filter(o => ctx.followers(o) > ctx.followers(owner)).length;
        if (k) ctx.gain(owner, S, 2 * k);
        else ctx.log(`${owner.name}'s Upstart: no rival has more followers.`);
      },
    }),
    // balance pass 1 (bench, both bots agree; design/eval/balance-pass-1.md): 8 → 4
    // After the Silver space is done; any member of yours costing 4 or less (as a player sees the cost), itself included;
    // "you may": giving none is fine. A gift, as Godparent's (Well-Wishers hears it). Pitch: quality/pitches/B-toastmaster.md.
    // Quality loop (Nov 4), live since Nov 4 (Claude, under Cory's go-with-your-gut): Polisher's place (paper 16 vs 11; balance trial
    // owners won 24% vs Toastmaster's 22%; blind play +0.34 vs Toastmaster, +0.66 vs Polisher; 1.4 fires per owner game).
    // Cory, Nov 4 4:05pm Eastern: "i like the concept of it. maybe on use once per round?" (no choice popped by taking a
    // space). Was "Whenever you take a Silver space, you may give ..."; the gift and the +4 are unchanged.
    m('guestofhonor', 'Guest of Honor', 1, 1, 'On Use, once per round: give a rival one of your members. +4 followers.' /* Cory, Nov 5: "costing 4 or less" cut */, {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const opts = goh(ctx, owner, card);
        if (!opts.length) { card.used = false; ctx.log(`${owner.name}'s Guest of Honor: no member to give.`); return; }
        ctx.log(`${owner.name} uses Guest of Honor.`);
        ctx.choose(owner, 'Guest of Honor: give which member, to which rival? +4 followers', opts, 'silver.guestofhonor');
      },
      botActivate: (ctx, p, card) => goh(ctx, p, card || ctx.membersOf(p).find(c => c.def.key === 'guestofhonor')).some(o => o.hint > 0),
    }),
    // Lane B scale-up (Nov 4, paper b54: 17 vs 11): Toastmaster's place, still Silver's cheap way in. Any silver held, never "more than you".
    ...add8(m('chaperone', 'Chaperone', 1, 1, 'Round Start: +1 follower per rival holding silver.', {
      onRoundStart(ctx, owner) {
        const n = others(ctx, owner).filter(o => (o.res[S] || 0) > 0).length;
        if (!n) return;
        owner.bonus += n;
        ctx.log(`${owner.name}'s Chaperone: ${n} ${n === 1 ? 'rival holds' : 'rivals hold'} silver: +${n} ${n === 1 ? 'follower' : 'followers'}.`);
      },
      ...see(i => [2, 3].filter(r => r > i.round).length * (i.n - 1) * 0.6),
    })),
    m('toastmaster', 'Toastmaster', 1, 1, 'Whenever you take a Silver space, +1 follower.', { ...old8('silver.toastmaster'), ...old16('silver.toastmaster'),
      afterAction(ctx, owner, card, qid) { if (qid === S) owner.bonus += 1; },
    }),
    m('gala', 'Debutantes', 4, 4, 'On Use, once per game: double your silver. Each rival +2 silver.', { f: 2, n: 2, ...old2, ...old6, // worth 2 (Cory, Nov 1)
      activate: 'game',
      onActivate(ctx, owner) {
        ctx.gain(owner, S, owner.res[S]);
        giveAll(ctx, owner, S, 2);
        ctx.log(`${owner.name}'s Debutantes: silver doubled to ${owner.res[S]}, +2 silver to everyone else.`);
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 && owner.res[S] >= 6,
    }),
    m('dowager', 'Dowager', 2, 2, 'Worth 3 followers.', { f: 3 }),
    // REPLACE8 bot test (Nov 4, quality loop lane B, pitches/B-polisher.md 4, passed paper gates b5/b6 at 15 vs 11):
    // Polisher's place, same price. The 2 silver comes from the bank and is a gift (gift hooks fire, as for Hostesses).
    ...add8(m('usher', 'Usher', 1, 1, 'On Recruit: give a rival 2 silver from the bank. +3 followers.', {
      onRecruited(ctx, owner) {
        ctx.choose(owner, 'Usher: which rival gains 2 silver? You get 3 followers', others(ctx, owner).map(o => ({
          id: `player:${o.id}`, label: `${o.name} (${o.res[S] || 0} silver)`, kind: 'player', value: o.id,
          // bots hand it to whoever it helps least in the Silver contest
          hint: -(o.res[S] || 0) - (leadIn(ctx, o, S) >= -2 ? 3 : 0),
        })), 'silver.usher');
      },
    })),
    // REPLACE8 bot test (Nov 4, quality loop lane B, pitches/B-debtcollectors.md R5, passed paper gate b3 at 18): Debt
    // Collectors' place, same price. Any of your members moved into a rival's cult (your Godparent's gift, a rival's
    // Promote or Demote, a steal, a swap), while you still hold Well-Wishers; to the shop or the pile doesn't count.
    ...add8(m('wellwishers', 'Well-Wishers', 4, 3, `Whenever one of your members goes to a rival's cult, +${WW_N} followers.`, { f: 2, n: 2,
      onCultMove(ctx, owner, card, { uid, from, to }) {
        if (from !== owner || !to || to === owner) return;
        owner.bonus += WW_N;
        ctx.log(`${owner.name}'s Well-Wishers: ${ctx.card(uid).def.name} goes to ${to.name}: +${WW_N} followers.`);
      },
      // BOTSEE: about one of your members moved to a rival per 12 rival placements (seat-1 games, Nov 4), 3 followers each
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r], 0) * 0.08 * WW_N),
    })),
    // Silver 2.0 members (Cory, 2026-11-01). Prices are fill-ins until the balance run.
    m('smoothtalker', 'Smooth Talkers', 5, 4, /* Cory, Nov 5 backlog price yes */ 'Your silver pays for any color.', { silverPaysColor: true, f: 2, n: 2, ...old2, ...old14('bigspenders'), ...old14('charmers'), ...old16('silver.smoothtalker') }),
    // REPLACE16 bot test (thread "Make Silver cards more communal", Nov 4; silver-communal/paper.md 3): Smooth Talkers'
    // place, same price. Everyone's silver pays a colored part (core.js tableFlag); a rival's recruit whose colored part
    // took silver pays the owner 1 follower, once per recruit. Your own recruits pay nothing extra.
    ...add16(m('tongues', 'Silver Tongues', 5, 5, "Everyone's silver pays for any color. Whenever a rival pays for a member's color with silver, +1 follower.", { tableSilverPaysColor: true, f: 2, n: 2,
      onRecruit(ctx, owner, card, by, what) {
        if (by === owner || !what?.member || !what.silverForColor) return;
        owner.bonus += 1;
        ctx.log(`${owner.name}'s Silver Tongues: +1 follower (${by.name} paid for a member's color with silver).`);
      },
      // BOTSEE: a rival's silver covers a colored part on about one recruit in eight once gifts are flowing
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r] * [0.05, 0.12, 0.15][r - 1], 0)),
    })),
    // REPLACE14 bot test (Members E lane, Nov 4; quality/pitches/E-smoothtalkers.md): Smooth Talkers' place, same price.
    // The silver you pay for a member (its own recruit not included: it isn't in your cult yet) is handed to rivals you
    // choose, all of it, and pays a follower each, as Party Gifts pays from the bank. Follower buys don't count.
    ...add14(m('bigspenders', 'Big Spenders', 5, 5, 'Silver you pay for members goes to rivals you choose, +1 follower each.', { f: 2, n: 2,
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member || what.member.uid === card.uid) return;
        const k = what.spent?.silver || 0;
        if (k > 0) shareStep(ctx, owner, { who: 'Big Spenders', max: k, per: 1, must: true });
      },
      // BOTSEE: about two silver-paid buys a game after it, about 3 silver each
      ...see(info => 3 * Math.max(0, 3 - info.round)),
    })),
    // REPLACE14 bot test (Members E lane, Nov 4; quality/pitches/E-smoothtalkers.md; paper 19 vs 13): Smooth Talkers'
    // place, same price. Every silver you hand a rival counts (Toast, Party Gifts, Potluck, Largesse, Hostesses, Creditor):
    // the gift's silver is added up as it lands, then paid out once the gift is done, one color pick at a time.
    ...add14(m('charmers', 'Charmers', 5, 5, 'Whenever you gift silver to rivals, +1 of any color per silver gifted.', { f: 2, n: 2,
      onAnyGifted(ctx, owner, card, giver, once, n) {
        if (giver === owner && n > 0) card.charm = (card.charm || 0) + n;
      },
      onGive(ctx, owner, card, color) {
        const k = card.charm || 0;
        if (color !== S || !k) return;
        card.charm = 0;
        ctx.log(`${owner.name}'s Charmers: ${k} silver gifted, +${k} of any colors.`);
        charmPick(ctx, owner, k);
      },
      // BOTSEE: a silver player gives about 4 a round from here (Toast gives 2 or 3 to each rival, Party Gifts 3,
      // Potluck 2 each), one resource each. 2.5 a round had bots pass on it until round III in 32 pinned seeds.
      // This round counts only for the turns still left in it (ab3: bought with one minion left and no gift space open).
      ...see(info => 4 * ([1, 2, 3].filter(r => r > info.round).length + Math.min(1, (info.myNow || 0) / 3))),
    })),
    // REPLACE2 bot test (Nov 3, replacement batch 2): Debutantes' place. 6 silver + 3 any as a player sees it. The +2 each is
    // a gift (Caterer, Hangers-On); the count is all the silver rivals hold after it.
    // REPLACE6 bot test (Nov 3, replacement batch 6): the Debutantes slot (Fundraisers' under REPLACE2). 6 silver + 3 any as
    // a player sees it. The rival who holds the most silver when it's used; their silver stays theirs.
    ...add6(m('socialclimbers', 'Social Climber', 5, 3, 'On Use, once per game: gain followers equal to the silver of the rival who holds the most.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const top = others(ctx, owner).reduce((a, b) => ((b.res[S] || 0) > (a.res[S] || 0) ? b : a));
        const k = top.res[S] || 0;
        if (!k) { card.used = false; ctx.log(`${owner.name}'s Social Climber: no rival holds silver.`); return; }
        owner.bonus += k;
        ctx.log(`${owner.name}'s Social Climber: ${top.name} holds ${k} silver, the most: +${k} followers.`);
      },
      botActivate: (ctx, owner) => { const k = Math.max(0, ...others(ctx, owner).map(o => o.res[S] || 0)); return k >= 8 || (ctx.state.round === 3 && (k >= 5 || owner.left === 0)); },
    })),
    ...add2(m('fundraisers', 'Fundraisers', 5, 3, 'On Use, once per game: each rival +2 silver, then +1 follower per 2 silver rivals hold in all.', { f: 2, ...old6,
      activate: 'game',
      onActivate(ctx, owner) {
        giveAll(ctx, owner, S, 2);
        const held = others(ctx, owner).reduce((t, o) => t + (o.res[S] || 0), 0), k = Math.floor(held / 2);
        owner.bonus += k;
        ctx.log(`${owner.name}'s Fundraisers: each rival +2 silver; rivals hold ${held} silver, so ${owner.name} +${k} follower${k === 1 ? '' : 's'}.`);
      },
      botActivate: (ctx, owner) => {
        const k = Math.floor((others(ctx, owner).reduce((t, o) => t + (o.res[S] || 0), 0) + 2 * others(ctx, owner).length) / 2);
        return (ctx.state.round === 3 && k >= 6) || (ctx.state.round === 3 && owner.left === 0);
      },
    })),
    // REPLACE2 bot test (Nov 3, replacement batch 2): Smooth Talkers' place. 4 silver + 2 any as a player sees it. Core's
    // shared steal asks it first (beforeStolen): with 2 silver, the victim chooses each time, on the thief's turn; paying
    // is a gift of 2 silver and nothing is stolen (no steal reactions), letting it go makes the same steal.
    ...add2(m('hushmoney', 'Hush Money', 3, 2, 'Whenever a rival steals from you, you may give them 2 silver instead.', {
      beforeStolen(ctx, victim, card, thief, what) {
        if (thief === victim || (victim.res[S] || 0) < 2) return false;
        const take = {};
        for (const [c, k] of Object.entries(what.take || {})) { const x = Math.min(k, victim.res[c] || 0); if (x > 0) take[c] = x; }
        const uid = what.uid !== undefined && victim.members.includes(what.uid) ? what.uid : undefined;
        const followers = what.followers ? Math.min(what.followers, Math.max(0, victim.bonus)) : 0;
        const units = Object.values(take).reduce((a, b) => a + b, 0);
        if (!units && uid === undefined && !followers) return false;
        const desc = [units ? Object.entries(take).map(([c, k]) => `${k} ${c}`).join(', ') : '', uid !== undefined ? ctx.card(uid).def.name : '', followers ? `${followers} follower${followers === 1 ? '' : 's'}` : ''].filter(Boolean).join(', ');
        const worth = units + (uid !== undefined ? ctx.card(uid).def.f * 1.5 + ctx.card(uid).def.s + ctx.card(uid).def.w : 0) + followers * 1.5;
        ctx.log(`${victim.name}'s Hush Money: ${thief.name} would steal ${desc}; ${victim.name} may pay 2 silver instead.`);
        ctx.choose(victim, `Hush Money: ${thief.name} is stealing ${desc} from you. Give ${thief.name} 2 silver instead?`, [
          { id: 'pay', label: `Give ${thief.name} 2 silver`, kind: 'choice', value: 'pay', spend: { [S]: 2 }, hint: worth - 2 },
          { id: 'let', label: `Let ${thief.name} take ${desc}`, kind: 'pass', value: 'let', hint: 0 },
        ], 'silver.hush', { thief: thief.id, take, ...(uid !== undefined ? { uid } : {}), followers });
        return true;
      },
    })), // worth 2 (Cory, Nov 1)
    // Lane B scale-up (Nov 4, paper b46: 18 vs 10): Philanthropist's place. Rides every rival recruit of a member.
    // Live since Nov 4 (Claude, under Cory's go-with-your-gut, overnight quality loop): A/B +0.30, balance passed at 120.
    m('charityball', 'Charity Ball', 3, 2, 'Whenever a rival recruits a member, give them 1 silver from the bank. +1 follower.', {
      onAnyRecruit(ctx, owner, card, by) {
        if (by === owner) return;
        giveTo(ctx, owner, by, S, 1); afterGive(ctx, owner, S);
        owner.bonus += 1;
        ctx.log(`${owner.name}'s Charity Ball: gives ${by.name} 1 silver: +1 follower.`);
      },
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r], 0) * 0.5),
    }),
    // Charity Ball takes its place (Claude, under Cory's go-with-your-gut, overnight quality loop, 2026-11-04)
    m('philanthropists', 'Philanthropist', 3, 2, 'On Recruit: give rivals up to 4 silver from the bank, split as you choose. +1 follower per silver you give.', { retired: true,
      onRecruited(ctx, owner) { shareStep(ctx, owner, { who: 'Philanthropist', max: 4, per: 1 }); },
    }),
    // Guest of Honor takes its place (Claude, under Cory's go-with-your-gut, overnight quality loop, 2026-11-04)
    m('polisher', 'Polisher', 1, 1, 'On Use, once per game: turn up to 3 silver into 2 of any colors each.', { retired: true,
      activate: 'game',
      onActivate(ctx, owner) {
        const k = Math.min(3, owner.res[S] || 0);
        if (!k) { ctx.log(`${owner.name}'s Polisher: no silver to turn.`); return; }
        if (k === 1) { polisherTurn(ctx, owner, 1); return; }
        // "up to 3": the player picks how many (Cory, 2026-11-01: "Polisher, yes. Player should be able to")
        ctx.choose(owner, `Polisher: turn how much silver into 2 of any colors each? (you have ${owner.res[S]})`,
          Array.from({ length: k }, (_, i) => i + 1).map(x => ({
            id: `amount:${x}`, label: `${x} silver into ${2 * x}`, kind: 'amount', value: x, spend: { [S]: x }, hint: x === k ? 1 : 0,
          })), 'silver.polisher', {});
      },
      botActivate: (ctx, owner) => (owner.res[S] || 0) >= 3,
    }),
    m('collector', 'Collector', 3, 2, 'Whenever a rival recruits paying silver, +1 silver.', { round: 1, retired: true, // Creditors takes its place (Claude, under Cory's "use your judgement", 2026-11-03)
      onRecruit(ctx, owner, card, by, what) {
        if (by === owner || !(what?.spent?.[S] > 0)) return;
        ctx.gain(owner, S, 1);
        ctx.log(`${owner.name}'s Collector: +1 silver (${by.name} paid silver).`);
      },
    }),
    // Replacement batch 3 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Collector's place. 4 silver + 2 any as a player sees it.
    // Creditor (Claude, under Cory's go-with-your-gut, Nov 4; was Creditors' game-end loss): the rival gives only the
    // followers it has (never below 0); the 3 silver is a gift from the bank, so the gift hooks fire as for Hostesses.
    m('creditors', 'Creditor', 3, 2, 'On Use, once per round: a rival you choose gives you 2 followers, then gains 3 silver.', { // a round I member as Collector was (bot-tested in a later round; Nov 3)
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner) {
        const top = Math.max(...others(ctx, owner).map(o => ctx.followers(o)));
        ctx.choose(owner, 'Creditor: which rival gives you 2 followers, then gains 3 silver?', others(ctx, owner).map(o => ({
          id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers, ${o.res[S] || 0} silver)`, kind: 'player', value: o.id,
          // bots take from a rival who has 2 to give, the leader first, and mind handing silver to a rival who leads it
          hint: Math.min(2, Math.max(0, ctx.followers(o))) * 2 + (ctx.followers(o) === top ? 1 : 0) - (leadIn(ctx, o, S) >= 0 ? 0.5 : 0),
        })), 'silver.creditor');
      },
      botActivate: (ctx, owner) => others(ctx, owner).some(o => ctx.followers(o) >= 2),
    }),
    // REPLACE14 bot test (Members E lane, Nov 4; lane B's B-debtcollectors-2, paper 16 vs 14; play A/B): Debt Collectors'
    // place, same price. Round End as Mob's: after the last placement, before contests (the silver contest sees it).
    ...add14(m('patronesses', 'Patronesses', 4, 3, 'Round End: you may give rivals any of your silver, split as you choose. +1 follower per silver you give.', { f: 2, n: 2,
      onAllPlaced(ctx, owner) {
        const k = owner.res[S] || 0;
        if (!k) { ctx.log(`${owner.name}'s Patronesses: no silver to give.`); return; }
        shareStep(ctx, owner, { who: 'Patronesses', max: k, per: 1, own: true });
      },
      ...see(info => 3 * endsAhead(info).length),
    })),
    m('debtcollector', 'Debt Collectors', 4, 2, 'On Use, once per round: each rival gives you 2 silver, if they have it.', { f: 2, n: 2, ...old8('silver.debtcollector'), ...old14('patronesses'), // worth 2 (Cory, Nov 1); once per round, 4 silver + 2 any (Cory, Nov 5 9:29pm)
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner) {
        let n = 0;
        for (const o of others(ctx, owner)) {
          const k = Math.min(2, o.res[S] || 0);
          if (!k) continue;
          o.res[S] -= k; n += k;
          ctx.log(`${o.name} gave ${owner.name} ${k} silver (Debt Collector).`);
        }
        if (n) ctx.gain(owner, S, n); else ctx.log(`${owner.name}'s Debt Collector: no rival had silver.`);
      },
      botActivate: (ctx, owner) => others(ctx, owner).reduce((t, o) => t + Math.min(2, o.res[S] || 0), 0) >= 2 * Math.max(1, ctx.state.players.length - 2),
    }),
    // "should be multiple members" (Cory): worth 2 followers, so it counts as 2 members (Claude's fill-in)
    // REPLACE8 bot test (Nov 4, quality loop lane B, pitches/B-highsociety.md 1, passed paper gate b13 at 19 and the set
    // check 17 vs 11): High Society's place, same price and worth. Once per recruit (a member or a follower card) whose
    // payment has any silver in it.
    // SOCIALITES_N=1: the +1 version (paper 15), a second trial in case +2 runs away (16 hits in a seat-1 Normal game).
    // Was live in v0.99.571-572 in High Society's place; back to a bot test Nov 4 (Cory, 12:36pm: High Society stays).
    ...(on16('socialites') && !ON8.includes('socialites') ? (c => [c]) : add8)(m('socialites', 'Socialites', 4, 3, `Whenever a rival recruits paying silver, +${SOC_N} follower${SOC_N === 1 ? '' : 's'}.`, { f: 2,
      onRecruit(ctx, owner, card, by, what) {
        if (by === owner || !(what?.spent?.[S] > 0)) return;
        owner.bonus += SOC_N;
        ctx.log(`${owner.name}'s Socialites: +${SOC_N} follower${SOC_N === 1 ? '' : 's'} (${by.name} paid silver).`);
      },
      // BOTSEE: rivals pay some silver on about a quarter of their recruits once gifts are flowing
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r] * [0.1, 0.25, 0.3][r - 1], 0) * SOC_N),
    })),
    // Stays (Cory, 2026-11-04 12:36pm: "No to both", Creditor and High Society stay in Silver)
    m('highsociety', 'High Society', 4, 2, /* Cory, Nov 5 backlog price yes */ 'Whenever a rival takes a Silver space, +1 follower.', { f: 2, ...old8('silver.highsociety'), // Nov 4 (Claude, under Cory's go-with-your-gut; was a game-end count of rivals with more silver)
      afterRivalAction(ctx, owner, card, qid) { if (qid === S) { owner.bonus += 1; ctx.log(`${owner.name}'s High Society: +1 follower.`); } },
      // BOTSEE: about a quarter of the rival placements still to come land on a Silver space
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r], 0) * 0.25),
    }),
    m('grandhost', 'Grand Host', 8, 4, 'Double the silver you gain from Silver spaces.', { hostDouble: true }),
    // balance pass 1 (bench, both bots agree; design/eval/balance-pass-1.md): 12 → 6 (the most one pass moves);
    // pass 2's pooled midpoint (5.2) rounds back to 6, so it stays (design/eval/balance-pass-2.md)
    // Cory, Nov 5 ("I love ballroom!", "yes to kingmaker and ballroom", "yeah patron saints"): silver's three open
    // slots, in the places Charity Ball, Creditor and Hostesses left. Prices and worth are Claude's fill-ins (silver thread).
    m('ballroom', 'Ballroom Dancers', 5, 2, /* 6 silver + 4 any as seen; 1 silver more (Cory, Nov 6: "yes on ballroom dancers", then "yes" to +1 silver: too strong at every bot level) */ 'On Use, once per game: +2 followers per minion on Silver spaces.', { f: 2, n: 2,
      activate: 'game',
      onActivate(ctx, owner, card) {
        const k = onSilver(ctx);
        if (!k) { card.used = false; ctx.log(`${owner.name}'s Ballroom Dancers: no minions on Silver spaces yet.`); return; }
        owner.bonus += 2 * k;
        ctx.log(`${owner.name}'s Ballroom Dancers: ${k} minion${k === 1 ? '' : 's'} on Silver spaces: +${2 * k} followers.`);
      },
      // bots wait for a crowd: most of a round's worth of Silver spaces filled, or anything worth having in round III
      botActivate: (ctx) => { const k = onSilver(ctx); return k >= Math.max(3, ctx.state.players.length) || (ctx.state.round === 3 && k >= 2 && ctx.state.players.every(o => o.left <= 1)); },
      ...see(info => (endsAhead(info).length ? 7 : 0)),
    }),
    m('kingmakers', 'Kingmakers', 2, 1, 'Round End: give rivals up to 3 of your silver, split as you choose. +1 follower per silver given.', {
      onAllPlaced(ctx, owner) {
        if (!others(ctx, owner).length) return;
        kingStep(ctx, owner, { once: `kingmakers:${ctx.state.round}:${owner.id}`, left: 3, to: {} });
      },
      ...see(info => 3 * endsAhead(info).length),
    }),
    // Game End, cost 7 = 4 silver + 3 any as a player sees it (Cory, Nov 6 8:18pm Eastern: "Patron Saints is supposed to be
    // game end!!", "and keep cost at 7")
    m('patronsaints', 'Patron Saints', 3, 2, 'Game End: +1 follower per silver member, anyone’s.', { f: 2,
      onGameEnd: ctx => ctx.state.players.reduce((a, o) => a + ctx.countMembersOfColor(o, S), 0),
    }),
    m('saint', 'Patron Saint', 4, 2, 'Game End: +1 follower per 2 silver members, anyone’s.', {
      onGameEnd: ctx => Math.floor(ctx.state.players.reduce((s, o) => s + ctx.countMembersOfColor(o, S), 0) / 2),
    }),
  ],
};

export default silver;

// Kingmakers: up to 3 of the owner's silver, one at a time to the rival they pick, +1 follower each
function kingStep(ctx, p, data) {
  const list = others(ctx, p).filter(o => !dry(ctx, p, o));
  if (data.left > 0 && (p.res[S] || 0) > 0 && list.length) {
    const given = Object.values(data.to).reduce((a, n) => a + n, 0);
    ctx.choose(p, `Kingmakers: give 1 of your silver to which rival? +1 follower (${Math.min(data.left, p.res[S])} more at most)`, [
      ...list.map(o => ({
        id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers, ${o.res[S] || 0} silver)`, kind: 'player', value: o.id,
        // bots hand it to whoever it helps least: off the Silver contest lead, and not the leader in followers
        hint: 2 - (o.res[S] || 0) * 0.1 - (leadIn(ctx, o, S) >= -3 ? 0.5 : 0) - ctx.followers(o) * 0.01,
      })),
      { id: 'stop', label: given ? 'Keep the rest' : 'Give none', kind: 'choice', value: 'stop', hint: 0 },
    ], 'silver.kingmakers', data);
    return;
  }
  const given = Object.values(data.to).reduce((a, n) => a + n, 0);
  if (!given) return;
  afterGive(ctx, p, S, data.once);
  p.bonus += given;
  ctx.log(`${p.name}'s Kingmakers: gave ${given} silver (${Object.entries(data.to).map(([k, v]) => `${v} to ${k}`).join(', ')}): +${given} follower${given === 1 ? '' : 's'}.`);
}
// Almoners (pool 6): one silver at a time until none is left, then the followers
function almsStep(ctx, p, data) {
  if ((p.res[S] || 0) > 0 && others(ctx, p).some(o => !dry(ctx, p, o))) {
    ctx.choose(p, `Almoners: give 1 silver to which rival? (${p.res[S]} left)`, others(ctx, p).filter(o => !dry(ctx, p, o)).map(o => ({
      id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers, ${o.res[S] || 0} silver)`, kind: 'player', value: o.id, hint: -ctx.followers(o) - 0.1 * (o.res[S] || 0),
    })), 'silver.almoners', data);
    return;
  }
  if (!data.n) return;
  afterGive(ctx, p, S, data.once);
  p.bonus += data.n;
  ctx.log(`${p.name}'s Almoners: gave ${data.n} silver (${Object.entries(data.to).map(([k, v]) => `${v} to ${k}`).join(', ')}), +${data.n} follower${data.n === 1 ? '' : 's'}.`);
}
function giftExchangePay(ctx, p, uid, v) {
  ctx.log(`${p.name}'s Gift Exchange: pays ${Object.entries(v).filter(([, n]) => n).map(([c, n]) => `${n} ${c}`).join(', ') || 'nothing'} for ${ctx.card(uid).def.name}.`);
  ctx.recruit(p, uid, { spend: v, how: GX, paid: true });
}
