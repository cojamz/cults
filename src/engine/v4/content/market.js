// Blue (the market): bend the shop. Recruit outside your buy, ignore colors, pay half, churn the row.
// Scoring: most blue (Cory, 2026-10-15; the old rule counted members costing 8 or more, a cutoff he cut).
// Blue's members watch who recruits blue members, and Blue's spaces pay out in blue.
import { registerQuadrant } from './index.js';
import { gainColorOf } from './color-of.js';
import { REPLACE1, add1, old1, handlers1 } from './replace1.js';
import { add2, old2 } from './replace2.js';
import { add3, old3, handlers3 } from './replace3.js';
import { add4, old4, handlers4 } from './replace4.js';

const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });
const B = 'blue';
const Q = 'market';
const isBlue = def => def.quadrant === Q;

/** Printed cost of a member (before any discount). */
export const priceOf = c => c.def.s + c.def.w;
/** Total printed cost of a player's members. */
export const memberValue = (ctx, p) => ctx.membersOf(p).reduce((s, c) => s + priceOf(c), 0);
const totalRes = p => Object.values(p.res).reduce((a, b) => a + b, 0);
// A member's color, or null when its sphere isn't on this table (a guest member leaning to an absent sphere):
// then its colored part is paid in any colors, and nothing gains 'its color'.
const colorOf = (ctx, c) => { const r = ctx.quadrant(c.def.quadrant).resource; return ctx.state.resources.includes(r) ? r : null; };
// what a bot thinks a member is worth to it (mirrors the greedy buy score)
const botWorth = c => c.def.f * 1.4 + (c.def.vanilla ? 0 : 1.6) + priceOf(c) * 0.3;

// Measuring knob: with lean on, Snap Up and Half Price use up your buy this turn instead of adding a recruit.
// Half Price always uses your buy; this knob makes Snap Up's recruit use it too.
let LEAN = false;
export function setLean(on) { LEAN = !!on; }

// Doormen: [rival's member, shop member costing at most 2 less, anything above allowed (Cory, Nov 2: "4 and anything above" for a 6)] (a trade of members, so swap protections apply)
const doorPairs = (ctx, p) => {
  const out = [];
  for (const o of ctx.rivals(p)) {
    if (!ctx.canSteal(p, o, 'swap')) continue;
    for (const a of ctx.membersOf(o)) {
      if (!ctx.canSwapMember(a.uid)) continue;
      for (const b of ctx.shopCards()) if (priceOf(b) >= priceOf(a) - 2) out.push([a, b]);
    }
  }
  return out;
};

// ---------- paying outside the normal buy ----------
// One price rule (the engine's memberPrice, through ctx.price / ctx.payChoices): every discount and rule-changer
// applies here as in the buy step (Intro Offer, Sponsor, Penny Pincher's double gold). how: Snap Up { anyColors },
// Half Price { anyColors, half }, Talent Scout {} (at its cost).
const SNAP = { anyColors: true }, HALF = { anyColors: true, half: true };
const howFor = why => (why === 'Half Price' ? HALF : why === 'Snap Up' ? SNAP : {});
const payLabel = v => Object.entries(v).filter(([, n]) => n).map(([c, n]) => `${n} ${c}`).join(', ') || 'nothing';

/** Recruit `uid` from the face-up row at the price `how` sets (the player picks how to pay). */
function buyAt(ctx, p, uid, how, why) {
  if (!ctx.payChoices(p, uid, how).length) return;
  askPay(ctx, p, `${why}: how do you pay ${ctx.price(p, uid, how).total} for ${ctx.card(uid).def.name}?`, { uid, why, how });
}
/**
 * The buy step's pay rule, for every recruit outside it (Snap Up, Half Price, Talent Scout): one way to pay pays at
 * once, unless that way gives up a lead or tie you hold (then the pay sheet asks, saying so, with Cancel); more than
 * one way, the player picks (decisions.md, 2026-10-15 17:55; panel tester C: a member-ability buy paid silently).
 */
function askPay(ctx, p, prompt, data) {
  const list = ctx.payChoices(p, data.uid, data.how || {});
  if (!list.length) return;
  const asks = list.length > 1 || ctx.leadsLost(p, list[0]).length > 0;
  if (!asks) { payAndRecruit(ctx, p, list[0], data); return; }
  // uid and how ride on each way to pay, so a screen can show the member and its price (the pay sheet); ids unchanged
  const opts = list.map((v, i) => ({
    id: `pay:${ctx.state.resources.map(r => v[r] || 0).join('-')}`, label: payLabel(v), kind: 'pay', value: v, hint: i === 0 ? 1 : 0, uid: data.uid, how: data.how || {},
  }));
  // the one way gives up a lead: the sheet's Cancel recruits nothing
  if (list.length === 1) opts.push({ id: 'back', label: 'Cancel', kind: 'back', value: null, hint: -1 });
  ctx.choose(p, prompt, opts, `${Q}.pay`, data);
}
function payAndRecruit(ctx, p, v, { uid, why, fromPile, how = howFor(why) }) {
  const card = ctx.card(uid);
  const pile = ctx.state.pile;
  if (fromPile && pile.includes(uid)) {
    // lift it out of the pile into the row for a moment, so it is recruited the normal way
    pile.splice(pile.indexOf(uid), 1);
    ctx.state.shop.push(uid);
  }
  if (!ctx.state.shop.includes(uid)) { ctx.log(`${why}: ${card.def.name} is gone.`); return; }
  // a member's own recruit names the member ("P1's Talent Scout: pays …"); an action's names the action
  ctx.log(fromPile ? `${p.name}'s ${why}: pays ${payLabel(v)} for ${card.def.name}.` : `${why}: ${p.name} pays ${payLabel(v)} for ${card.def.name}.`);
  if ((why === 'Half Price' || (LEAN && why === 'Snap Up')) && !fromPile) {
    const q = ctx.state.queue, k = q.findIndex(t => t.t === 'buy' && !t.extra && t.p === p.id);
    // it is this turn's buy: it counts as a real first buy, so a second buy (Big Spender) still follows
    if (k >= 0) { q.splice(k, 1); p.turnBuys = (p.turnBuys || 0) + 1; }
  }
  // the engine takes the payment (and spends a discount) by the same price rule; `paid` tells a copy (Green) this
  // wasn't a free member
  ctx.recruit(p, uid, { spend: v, how, paid: true });
}

/** Offer face-up members the player can pay for at the price `how` sets, in any colors. */
function offerRow(ctx, p, how, why) {
  const opts = ctx.shopCards().map(c => [c, ctx.price(p, c.uid, how)]).filter(([, pr]) => pr.afford).map(([c, pr]) => ({
    id: `card:${c.uid}`, label: `${c.def.name} · pay ${pr.total}`, kind: 'card', value: c.uid, hint: botWorth(c) + (priceOf(c) - pr.total) * 0.5,
  }));
  if (!opts.length) { ctx.log(`${why}: ${p.name} can't pay for anything.`); return; }
  opts.push({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: -1 });
  ctx.choose(p, `${why}: recruit which member?`, opts, `${Q}.pickRow`, { why });
}
function bestRowValue(ctx, p, how) {
  const ok = ctx.shopCards().map(c => [c, ctx.price(p, c.uid, how)]).filter(([, pr]) => pr.afford);
  return ok.length ? Math.max(...ok.map(([c, pr]) => botWorth(c) + (priceOf(c) - pr.total) * 0.6)) : 0;
}

/** Churn: pick shop members one at a time; the row refills once, after the last (churnRefill, queued behind the picks). */
// who: the space or member doing it (Churn, or Trendsetters), named in the prompt and the log
function churnStep(ctx, p, { left, who = 'Churn' }) {
  const shop = ctx.shopCards();
  if (left <= 0 || !shop.length) return;
  ctx.choose(p, `${who}: send which member to the bottom? (${left} to go)`, shop.map(c => ({
    // bots send away the priciest (what a rival would buy next)
    id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: priceOf(c),
  })), `${Q}.churn`, { left, who });
}
/** Peek: the player sets the order of the top cards, top first; the last one falls in place. */
function peekStep(ctx, p, { left, placed }) {
  if (left.length <= 1) {
    const pile = ctx.state.pile;
    // only cards still in the pile: a refill between the peek and the reorder (Trendsetters on a Peek recruit) may have drawn one
    const order = [...placed, ...left].filter(u => pile.includes(u));
    const rest = pile.filter(u => !order.includes(u));
    pile.splice(0, pile.length, ...order, ...rest);
    if (order.length) ctx.log(`${p.name} puts the top ${order.length} of the pile back in a new order.`);
    return;
  }
  ctx.choose(p, `Peek: which goes ${placed.length ? 'next' : 'on top'}?`, [...left.map(u => ctx.card(u)).map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid,
    // bots put what they can buy on top
    hint: (ctx.payChoices(p, c.uid, {}).length ? 10 : 0) + botWorth(c),
  })),
  // the rest stay as they lie, in one click (Cory, playtest Oct 28: the Peek row's "Keep this order")
  { id: 'keep', label: 'Keep this order', kind: 'keep', value: 'keep', hint: -1 }], `${Q}.peek`, { left, placed }, { show: { peek: { placed, left } } });
}
/** Colors of the face-up members, with how many of each. */
// Out of Style's colors: neutral (colorless guests) is one of them (Cory, 2026-10-28: "you should be able to chose
// neutral as a color you send to the bottom")
const styleOf = (ctx, c) => colorOf(ctx, c) || 'neutral';
// said "grey" to players (Cory: neutral members are "grey"); the id stays 'neutral'
const styleWord = c => (c === 'neutral' ? 'grey' : c);
function shopColors(ctx) {
  const n = {};
  for (const c of ctx.shopCards()) { const col = styleOf(ctx, c); n[col] = (n[col] || 0) + 1; }
  return Object.entries(n).sort(([a], [b]) => (a === 'neutral') - (b === 'neutral')); // neutral last
}

function sweepRow(ctx, actor = null) {
  const old = [...ctx.state.shop];
  for (const u of old) ctx.buryFromShop(u);
  toBottom(ctx, old.length);
  scavenge(ctx, actor, old);
}
/** k shop members just went to the bottom of the pile on someone's turn: Patroness pays once (Cory, Oct 21: "just one
 * follower each time it happens, not per card"), not for the round-start refresh. */
// Window Shopper: one pick at a time, so the second choice sees the refilled shop
function windowPick(ctx, owner, left, sent = []) {
  const shop = ctx.shopCards();
  if (!shop.length) { scavenge(ctx, owner, sent); return; }
  ctx.choose(owner, left > 1 ? `Window Shopper: send which member to the bottom? (${left} to go)` : 'Window Shopper: send which member to the bottom?', shop.map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: priceOf(c),
  })), `${Q}.windowShop`, { left, ...(REPLACE1 ? { sent } : {}) });
}

export function toBottom(ctx, k) {
  if (!(k > 0)) return;
  for (const p of ctx.state.players) for (const u of [...p.members, ...(p.artifact !== undefined ? [p.artifact] : [])]) {
    const def = ctx.defOf(ctx.card(u));
    // run as the card, so its hover's "gained this game" counts it (it read 0 for Bargain Bin: artifact audit, Nov 1)
    if (def.bottomFollowers) ctx.asMember(p, def.name, () => { p.bonus += 1; ctx.log(`${p.name}'s ${def.name}: +1 follower.`); }, u);
    // Blue's artifact (Cory, 2026-10-24): once per batch, turns only, as Patroness
    if (def.bottomBlue) ctx.asMember(p, def.name, () => { const got = ctx.gain(p, B, 1); if (got) ctx.log(`${p.name}'s ${def.name}: +${got.n} ${got.color}.`); }, u);
  }
}
/** Scavengers (REPLACE1 bot test, Nov 3): `actor` just sent these shop members to the bottom of the pile; each rival
 *  holding Scavengers may recruit one of them, paying its cost (asked on the actor's turn, as Shake Down asks its victim).
 *  Unset, never called with anything to do. */
export function scavenge(ctx, actor, uids) {
  if (!REPLACE1 || !actor || !uids?.length) return;
  for (const o of ctx.rivals(actor)) for (const c of ctx.membersOf(o)) {
    if (!c.def.scavenge) continue;
    const opts = uids.filter(u => ctx.state.pile.includes(u) || ctx.state.shop.includes(u)).filter(u => ctx.payChoices(o, u, {}).length).map(u => ctx.card(u)).map(x => ({
      id: `card:${x.uid}`, label: `${x.def.name} · pay ${ctx.price(o, x.uid, {}).total}`, kind: 'card', value: x.uid, hint: botWorth(x),
    }));
    if (!opts.length) continue;
    opts.push({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: -1 });
    ctx.choose(o, `Scavengers: ${actor.name} sent ${uids.length === 1 ? 'a member' : `${uids.length} members`} to the bottom of the pile. Recruit one of them, paying its cost?`, opts, `${Q}.scavenge`);
  }
}
/** Extra buys this turn: they run right after the current one (added to the engine's queue directly). */
// "this turn" recruits join the turn's recruit step, after every action still resolving (a Greatest Hits chain) (Maxwell, Oct 26)
function extraBuys(ctx, p, k) {
  const q = ctx.state.queue, adds = Array.from({ length: k }, () => ({ t: 'buy', p: p.id }));
  let at = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i].p !== p.id) continue;
    if (q[i].t === 'endTurn') break;
    if (q[i].t === 'buy') { at = i; break; }
  }
  q.splice(at, 0, ...adds);
}

const market = {
  id: Q,
  name: 'Blue',
  resource: B,
  scoring: { label: 'Most blue', counts: 'the blue you hold when the round ends', score: (ctx, p) => p.res.blue },

  // Cory's Blue (2026-10-20, decisions.md): churn the shop, dig into the pile, buy more than once. Every action gives
  // +1 blue (the economy call). Names are working names. A copy (Echo) does the action itself: the doing is the value.
  actions: [
    {
      // every color's 3/4/5 (Cory, 2026-10-27); Churn's sweep goes (Claude's default: Out of Style keeps Blue's sweep).
      // Name is Claude's fill-in.
      key: 'bargain', ring: 1, name: 'Savings', copyDoesIt: true,
      text: '+2 blue in round I, +3 in round II, +4 in round III. Before you recruit, you may send one shop member to the bottom of the pile, then refill.',
      // Cory, 2026-10-31: fuel that announces Blue ("C"); was +3/4/5 blue
      estimate: ctx => ctx.state.round + 1.5,
      byRound: { lines: ['+2 blue', '+3 blue', '+4 blue'], rest: 'Before you recruit, you may send one shop member to the bottom of the pile, then refill.' },
      resolve(ctx, p) {
        ctx.gain(p, B, ctx.state.round + 1, { fromAction: true });
        const shop = ctx.shopCards();
        if (!shop.length) return;
        ctx.choose(p, 'Savings: send a shop member to the bottom of the pile?', shop.map(c => ({
          id: `card:${c.uid}`, label: c.def.name, kind: 'card', value: c.uid, hint: 0,
        })).concat({ id: 'none', label: 'Keep the shop', kind: 'pass', value: null, hint: 1 }), `${Q}.savings`);
      },
    },
    {
      key: 'restock', ring: 1, name: 'Out of Style', text: 'Send every shop member of one color to the bottom of the pile, then refill. +1 blue per member sent. +1 blue.', copyDoesIt: true, // per member sent: Cory, Oct 28 ("it's actually rather good that way")
      estimate: ctx => 1 + Math.max(0, ...shopColors(ctx).map(([, n]) => n)),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        const colors = shopColors(ctx);
        if (!colors.length) return;
        ctx.choose(p, 'Out of Style: send which color to the bottom?', colors.map(([c, n]) => ({
          id: `color:${c}`, label: `${styleWord(c)} (${n})`, kind: 'color', value: c, hint: n,
        })), `${Q}.outOfStyle`);
      },
    },
    {
      key: 'showroom', ring: 1, name: 'Peek', text: 'Look at the top 4 of the pile and put them back in any order. This turn your recruit may be one of them. +2 blue in round I, +4 in round II, +6 in round III.', copyDoesIt: true,
      // scales, more blue (Cory, 2026-10-22 playtest: weak in round I, "should give more resource", "Peek should really really scale")
      byRound: { lead: 'Look at the top 4 of the pile and put them back in any order. This turn your recruit may be one of them.', lines: ['+2 blue', '+4 blue', '+6 blue'] },
      estimate: (ctx, p) => 2 * ctx.state.round + Math.max(0, ...ctx.state.pile.slice(0, 4).map(u => ctx.card(u)).filter(c => ctx.payChoices(p, c.uid, {}).length).map(botWorth)) * 0.3,
      resolve(ctx, p) {
        ctx.gain(p, B, 2 * ctx.state.round, { fromAction: true });
        const top = ctx.state.pile.slice(0, 4);
        p.peekReach = Math.max(p.peekReach || 0, top.length);
        ctx.log(`${p.name} peeks at the top ${top.length} of the pile.`);
        peekStep(ctx, p, { left: top, placed: [] });
      },
    },
    {
      key: 'clearance', ring: 2, name: 'Recruit Twice', text: 'Recruit twice this turn. +3 blue.', copyDoesIt: true,
      estimate: (ctx, p) => 3 + Math.min(10, Math.max(0, totalRes(p) - 2)) * 0.4, // +3 blue (Cory, Nov 1)
      resolve(ctx, p) { ctx.gain(p, B, 3, { fromAction: true }); extraBuys(ctx, p, 1); ctx.log(`${p.name} recruits twice this turn.`); },
    },
    {
      key: 'pricecheck', ring: 2, name: 'Bury', text: 'Send a shop member to the bottom of the pile, then refill. Gain blue equal to half its cost, rounded down. +1 blue.', copyDoesIt: true,
      estimate: ctx => 1 + Math.max(0, ...ctx.shopCards().map(c => Math.floor(priceOf(c) / 2))),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        const shop = ctx.shopCards();
        if (!shop.length) return;
        ctx.choose(p, 'Bury: send which member to the bottom?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (+${Math.floor(priceOf(c) / 2)} blue)`, kind: 'card', value: c.uid, hint: Math.floor(priceOf(c) / 2),
        })), `${Q}.bury`);
      },
    },
    {
      key: 'spree', ring: 3, name: 'Spree', text: 'Recruit 3 times this turn. +5 blue.', copyDoesIt: true,
      estimate: (ctx, p) => 5 + Math.min(10, Math.max(0, totalRes(p) - 3)) * 0.8, // +5 blue (Cory, Nov 1)
      resolve(ctx, p) { ctx.gain(p, B, 5, { fromAction: true }); extraBuys(ctx, p, 2); ctx.log(`${p.name} goes on a spree: 3 recruits this turn.`); },
    },
  ],

  handlers: {
    doormen(ctx, p, value) {
      if (!Array.isArray(value)) { ctx.log(`${p.name} chose not to use Doormen.`); return; }
      const [a, b] = value;
      if (!doorPairs(ctx, p).some(([x, y]) => x.uid === a && y.uid === b)) return;
      const rival = ctx.ownerOf(a), sent = ctx.card(a).def.name, given = ctx.card(b).def.name;
      if (!ctx.swapMembers(p, a, b)) return;
      ctx.buryFromShop(a);
      ctx.log(`${p.name}'s Doormen: sends ${rival.name}'s ${sent} to the bottom of the pile and gives ${rival.name} ${given}.`);
      ctx.memberBottomed();
      scavenge(ctx, p, [a]);
    },
    windowShop(ctx, p, uid, data) {
      if (!ctx.state.shop.includes(uid)) return;
      const c = ctx.card(uid), col = colorOf(ctx, c);
      ctx.state.shop.splice(ctx.state.shop.indexOf(uid), 1);
      ctx.state.pile.push(uid);
      if (col) ctx.gain(p, col, 1);
      ctx.log(`${p.name}'s Window Shopper sends ${c.def.name} to the bottom of the pile${col ? `: +1 ${col}` : ''}.`);
      if (c.def.everyColor) gainColorOf(ctx, p, c.def, 'Window Shopper');
      ctx.refillShop(); toBottom(ctx, 1);
      if (data?.left > 1) windowPick(ctx, p, data.left - 1, REPLACE1 ? [...(data.sent || []), uid] : []);
      else scavenge(ctx, p, [...(data?.sent || []), uid]);
    },
    churn(ctx, p, uid, data) {
      if (ctx.state.shop.includes(uid)) {
        const i = ctx.state.shop.indexOf(uid);
        ctx.state.shop.splice(i, 1);
        ctx.state.pile.push(uid);
        ctx.log(`${data.who === 'Churn' || !data.who ? 'Churn' : `${p.name}'s ${data.who}`}: ${p.name} sends ${ctx.card(uid).def.name} to the bottom of the pile.`);
      }
      const sent = REPLACE1 && ctx.state.pile.includes(uid) ? [...(data.sent || []), uid] : data.sent || [];
      if (data.left - 1 <= 0 || !ctx.state.shop.length) scavenge(ctx, p, sent);
      churnStep(ctx, p, { left: data.left - 1, who: data.who, ...(REPLACE1 ? { sent } : {}) });
    },
    churnRefill(ctx) { ctx.refillShop(); toBottom(ctx, 1); },
    outOfStyle(ctx, p, color) {
      const out = ctx.shopCards().filter(c => styleOf(ctx, c) === color);
      for (const c of out) { ctx.state.shop.splice(ctx.state.shop.indexOf(c.uid), 1); ctx.state.pile.push(c.uid); }
      ctx.refillShop();
      ctx.log(`Out of Style: ${p.name} sends ${out.length} ${styleWord(color)} member${out.length === 1 ? '' : 's'} to the bottom.`);
      toBottom(ctx, out.length);
      const got = out.length ? ctx.gain(p, B, out.length, { fromAction: true }) : null;
      if (got) ctx.log(`${p.name}'s Out of Style: +${got.n} ${got.color}.`);
      scavenge(ctx, p, out.map(c => c.uid));
    },
    peek(ctx, p, uid, data) {
      if (uid === 'keep') { peekStep(ctx, p, { left: [], placed: [...data.placed, ...data.left] }); return; }
      peekStep(ctx, p, { left: data.left.filter(u => u !== uid), placed: [...data.placed, uid] });
    },
    savings(ctx, p, uid) {
      if (uid == null || !ctx.state.shop.includes(uid)) return;
      const c = ctx.card(uid);
      ctx.buryFromShop(uid);
      ctx.log(`Savings: ${p.name} sends ${c.def.name} to the bottom of the pile.`);
      toBottom(ctx, 1);
      scavenge(ctx, p, [uid]);
    },
    bury(ctx, p, uid) {
      if (!ctx.state.shop.includes(uid)) return;
      const c = ctx.card(uid), k = Math.floor(priceOf(c) / 2);
      ctx.buryFromShop(uid);
      ctx.log(`Bury: ${p.name} sends ${c.def.name} to the bottom of the pile.`);
      toBottom(ctx, 1);
      const got = k ? ctx.gain(p, B, k, { fromAction: true }) : null;
      if (got) ctx.log(`${p.name}'s Bury: +${got.n} ${got.color}.`);
      scavenge(ctx, p, [uid]);
    },
    pickRow(ctx, p, uid, data) {
      if (uid === null) { ctx.log(`${data.why}: ${p.name} recruits nothing.`); return; }
      buyAt(ctx, p, uid, howFor(data.why), data.why);
    },
    ...handlers3({
      complete(ctx, p, color) {
        const left = ctx.shopCards().filter(c => colorOf(ctx, c) === color).map(c => c.uid);
        ctx.log(`${p.name}'s Completists: recruits every ${color} shop member (${left.map(u => ctx.card(u).def.name).join(', ')}).`);
        completeStep(ctx, p, left);
      },
      completeNext(ctx, p, _v, data) { completeStep(ctx, p, data.left); },
    }),
    ...handlers4({
      // Outbidders: core asks (askOutbid) and settles it either way
      outbid(ctx, p, value, data) { if (value === 'outbid') ctx.outbidTake(p, data); else ctx.outbidLet(data); },
      hawk(ctx, p, uid) {
        if (!ctx.state.shop.includes(uid)) return;
        const n = ctx.state.players.length;
        ctx.log(`${p.name}'s Hawkers: offers ${ctx.card(uid).def.name}.`);
        hawkAsk(ctx, p, uid, Array.from({ length: n - 1 }, (_, k) => (p.id + 1 + k) % n));
      },
      hawkAnswer(ctx, o, value, data) {
        const owner = ctx.player(data.owner), plan = value === 'buy' && ctx.state.shop.includes(data.uid) ? hawkPlan(ctx, o, data.uid) : null;
        if (!plan) { hawkAsk(ctx, owner, data.uid, data.left); return; }
        for (const [c, k] of Object.entries(plan.extra)) { o.res[c] -= k; owner.res[c] = (owner.res[c] || 0) + k; }
        ctx.log(`${owner.name}'s Hawkers: ${o.name} recruits ${ctx.card(data.uid).def.name} and pays ${payLabel(plan.extra)} to ${owner.name}.`);
        ctx.recruit(o, data.uid, { free: false, spend: plan.spend });
      },
    }),
    pay(ctx, p, v, data) {
      if (!v) { ctx.log(`${data.why}: ${p.name} recruits nothing.`); return; }
      payAndRecruit(ctx, p, v, data);
    },
    blackMarket(ctx, p, uid) {
      if (uid === null) return;
      const c = ctx.card(uid);
      if (!scoutChoices(ctx, p, uid).length) return;
      askPay(ctx, p, `Talent Scout: how do you pay for ${c.def.name}?`, { uid, why: 'Talent Scout', fromPile: true, how: {} });
    },
    ...handlers1({
      scavenge(ctx, p, uid) {
        if (uid == null) { ctx.log(`${p.name}'s Scavengers: recruits nothing.`); return; }
        if (!scoutChoices(ctx, p, uid).length) return;
        askPay(ctx, p, `Scavengers: how do you pay for ${ctx.card(uid).def.name}?`, { uid, why: 'Scavengers', fromPile: true, how: {} });
      },
    }),
    climb(ctx, p, color) {
      ctx.gain(p, color, 2);
      ctx.log(`${p.name}'s Social Climber: +2 ${color}.`);
    },
  },

  members: [
    m('stylist', 'Stylist', 2, 2, 'Whenever anyone recruits a blue member, +1 blue.', {
      onAnyRecruit(ctx, owner, card, by, rec) {
        if (rec.uid !== card.uid && isBlue(ctx.defOf(rec))) ctx.gain(owner, B, 1);
      },
    }),
    // Onlooker, Connoisseurs, Curator, Auctioneer, Sommelier, Patroness and Snobs counted members costing 8 or more until
    // Cory cut that cutoff (2026-10-15); they count blue members now, which come about as often (Normal bots, Blue
    // tables: 23% of recruits are blue, 27% cost 8+). Onlooker pays 2, or Stylist (anyone, +1, for 4) would beat it.
    m('onlooker', 'Onlooker', 6, 4, 'Whenever a rival recruits a blue member, +2 blue.', {
      onAnyRecruit(ctx, owner, card, by, rec) { if (by !== owner && isBlue(ctx.defOf(rec))) ctx.gain(owner, B, 2); },
    }),
    // your own Dabblers counts as blue and Drifters once it picks Blue (Cory, Nov 1: they always work in the owner's favor)
    m('connoisseur', 'Connoisseurs', 1, 2, 'Whenever you recruit a blue member, +1 blue.', { f: 2, ...old4,
      onAnyRecruit(ctx, owner, card, by, rec) { if (by === owner && rec.uid !== card.uid && ctx.defOf(rec).key !== 'drifters' && (isBlue(ctx.defOf(rec)) || ctx.defOf(rec).everyColor)) ctx.gain(owner, B, 1); },
      onColorChosen(ctx, owner, card, member) { if (member.asColor === Q) ctx.gain(owner, B, 1); },
    }),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Connoisseurs' place. 5 blue + 3 any as a player sees it. Each rival in
    // seat order from the owner's left is offered it if they can pay: its cost goes to the bank as any recruit's, and 2
    // more (from the piles they hold most of) to the owner (the draft's reading of "paying its cost plus 2 to you"). The
    // rival's recruit is theirs (its On Recruit fires) and doesn't use their turn's recruit.
    ...add4(m('hawkers', 'Hawkers', 4, 3, 'On Use, once per round: choose a shop member. Starting on your left, each rival may recruit it, paying its cost plus 2 to you. If none does, you recruit it for free.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const shop = ctx.shopCards();
        if (!shop.length) { card.used = false; ctx.log(`${owner.name}'s Hawkers: the shop is empty.`); return; }
        ctx.choose(owner, 'Hawkers: offer which shop member?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: botWorth(c),
        })), `${Q}.hawk`);
      },
      botActivate: ctx => ctx.shopCards().length > 0,
    })),
    m('reseller', 'Reseller', 4, 2, 'Whenever you recruit, +1 of that member’s color.', {
      onAnyRecruit(ctx, owner, card, by, rec) { if (by === owner && rec.uid !== card.uid) gainColorOf(ctx, owner, ctx.defOf(rec), 'Reseller'); },
    }),
    m('curator', 'Curator', 2, 2, 'On Recruit: +1 blue per other blue member you have. Round Start: +1 blue per other blue member you have.', { now: true,
      onRoundStart(ctx, owner, card) { ctx.gain(owner, B, ctx.countMembersOfColor(owner, Q) - (card && isBlue(card.def) ? ctx.memberWeight(card) : 0)); },
    }),
    m('planner', 'Planner', 2, 2, 'On Recruit: your next member costs 2 less per round number. Round Start: your next member costs 2 less per round number.', { now: true,
      byRound: { lead: 'On Recruit and Round Start: your next member costs:', lines: ['2 less', '4 less', '6 less'] },
      onRoundStart(ctx, owner) { ctx.discount(owner, 2 * ctx.state.round, 'Planner'); },
    }),
    m('underbidder', 'Underbidder', 2, 0, 'On Recruit: your next member costs 2 less per rival with more members than you. Round Start: your next member costs 2 less per rival with more members than you.', { now: true,
      onRoundStart(ctx, owner) { ctx.discount(owner, 2 * rivalsBigger(ctx, owner), 'Underbidder'); },
    }),
    m('minimalist', 'Minimalist', 2, 0, 'On Recruit: +1 blue per rival with more members than you. Round Start: +1 blue per rival with more members than you.', { now: true,
      onRoundStart(ctx, owner) { const k = rivalsBigger(ctx, owner); if (k) ctx.gain(owner, B, k); },
    }),
    // replaced (Claude under Cory's go-with-your-gut, from the dead-window audit): the old round-start trade-in never fired
    // in bot play, and the base Release rule does its job better. Releasing the Climber itself gives nothing extra.
    m('climber', 'Social Climber', 2, 0, 'Whenever you release another member, +2 of any color you choose.', {
      onRelease(ctx, owner) {
        ctx.choose(owner, 'Social Climber: +2 of which color?', ctx.state.resources.map(c => ({
          // bots take the color they hold least of
          id: `color:${c}`, label: `+2 ${c}`, kind: 'color', value: c, hint: -(owner.res[c] || 0),
        })), `${Q}.climb`);
      },
    }),
    m('auctioneer', 'Auctioneer', 4, 2, 'Whenever a rival recruits a non-blue member, +1 blue.', {
      onAnyRecruit(ctx, owner, card, by, rec) { if (by !== owner && !isBlue(ctx.defOf(rec))) ctx.gain(owner, B, 1); },
    }),
    m('sommelier', 'Sommelier', 2, 2, 'Whenever you recruit a blue member, your next member costs 2 less.', {
      onAnyRecruit(ctx, owner, card, by, rec) { if (by === owner && rec.uid !== card.uid && isBlue(ctx.defOf(rec))) ctx.discount(owner, 2, 'Sommelier'); },
    }),
    // Cory, Oct 21: "whenever cards are placed on the bottom of the deck". Turns only, not the round-start refresh
    // (Claude's fill-in: he called bottom-of-pile payouts "too strong between rounds" on Oct 20).
    // Blue's artifact only, never dealt (Cory, 2026-10-24: "whenever shop members go to the bottom of the pile, gain 1
    // blue… one per batch"). Name is Claude's fill-in.
    m('bargainbin', 'Bargain Bin', 0, 0, 'Whenever members go to the bottom of the pile, +1 blue.', { artifact: true, bottomBlue: true }),
    m('patroness', 'Patroness', 5, 2, 'Whenever shop members go to the bottom of the pile, +1 follower.', { bottomFollowers: true, ...old3 }),
    // REPLACE3 bot test (Nov 3, replacement batch 3): Patroness' place. 6 blue + 3 any as a player sees it. The color's
    // members are the ones face up when it's used (a refill drawn meanwhile isn't one of them), each paid at its price
    // the usual way (the pay sheet when there's more than one way); one you can't pay for when its turn comes stays in
    // the shop. These recruits don't use up the turn's recruit (as Talent Scout's doesn't). Grey members have no color.
    ...add3(m('completists', 'Completists', 5, 3, 'On Use, once per game: recruit every shop member of one color, paying their costs.', { f: 2,
      activate: 'game',
      onActivate(ctx, owner, card) {
        const opts = completeColors(ctx, owner);
        if (!opts.length) { card.used = false; ctx.log(`${owner.name}'s Completists: no shop member of a color you can pay for.`); return; }
        ctx.choose(owner, 'Completists: recruit every shop member of which color?', opts, `${Q}.complete`);
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && completeColors(ctx, owner).some(o => o.affordable >= 2),
    })),
    m('blackmarket', 'Talent Scout', 2, 2, 'Once per game, on your turn: also look at the top 5 of the pile and recruit one at its cost.', {
      activate: 'game',
      onActivate(ctx, owner) {
        const opts = ctx.state.pile.slice(0, 5).map(u => ctx.card(u))
          .filter(c => scoutChoices(ctx, owner, c.uid).length)
          .map(c => ({ id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: botWorth(c) }));
        if (!opts.length) { ctx.log(`${owner.name}'s Talent Scout has nothing affordable.`); return; }
        opts.push({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: -1 });
        ctx.choose(owner, 'Talent Scout: recruit which of the top 5?', opts, `${Q}.blackMarket`);
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && totalRes(owner) >= 8,
    }),
    m('snob', 'Snobs', 3, 2, 'Game End: +1 follower per blue member you have.', { f: 2,
      onGameEnd: (ctx, owner) => ctx.countMembersOfColor(owner, Q),
    }),
    m('recluse', 'Recluse', 2, 2, 'Game End: +2 followers per rival with more members than you.', {
      onGameEnd: (ctx, owner) => 2 * rivalsBigger(ctx, owner),
    }),
    // concepts, Oct 21, not approved (design/eval/member-concepts-2026-10-21.md): prices are sim starting points
    // Cory, 2026-10-24: Blue's round start ("Yeah I kinda like it") and Blue's once per game, the shop refresh that replaces
    // Makeover; names and prices Claude's fill-in
    m('windowshopper', 'Window Shopper', 2, 2, /* 2 members (Cory, Nov 1, 2:20pm) */ 'On Recruit and Round Start: send 2 shop members to the bottom of the pile. +1 of each one’s color.', { now: true, ...old4,
      onRoundStart(ctx, owner) { windowPick(ctx, owner, 2); },
    }),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Window Shopper's place. 5 blue + 3 any as a player sees it. Core runs
    // it (flag roundEndBuy): after each round's contests are scored, one recruit step (a member or followers) per holder
    // in that round's turn order, before the row goes to the bottom; in round III, before the Game End cards count.
    ...add4(m('lateshoppers', 'Late Shoppers', 4, 3, 'Round End: after contests are scored, recruit once.', { roundEndBuy: true })),
    m('restocker', 'Restockers', 2, 1, 'On Use, once per game: send the whole shop to the bottom of the pile, then refill.', {
      f: 2, // (Cory, Oct 29, balance run: +1 follower)
      activate: 'game',
      onActivate(ctx, owner, card) {
        if (!ctx.state.shop.length) { card.used = false; ctx.log(`${owner.name}'s Restockers: the shop is empty.`); return; }
        sweepRow(ctx, owner); ctx.refillShop();
        ctx.log(`${owner.name}'s Restockers sends the whole shop to the bottom of the pile and refills it.`);
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && !ctx.shopCards().some(c => ctx.payChoices(owner, c.uid, {}).length),
    }),
    m('shopaholic', 'Shopaholics', 3, 5, 'You can recruit twice each turn.', { buyTwice: true, f: 3, n: 3, ...old2 }), // +1 follower and member (Cory, Oct 30)
    // REPLACE2 bot test (Nov 3, replacement batch 2): Shopaholics' place. 5 blue + 3 any as a player sees it. Core runs it
    // (flag roundStartBuy): at each round start after the fresh row is dealt, one buy step (a member or followers) per
    // holder, in that round's turn order, before the first placement.
    ...add2(m('doorbusters', 'Doorbusters', 4, 3, 'Round Start: recruit once, before anyone places.', { f: 2, roundStartBuy: true })),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Window Dressers' place. 3 blue + 1 any as a player sees it. Core asks
    // it in the recruit step (askOutbid, core.js): a rival's shop member chosen and paid for there.
    ...add4(m('outbidders', 'Outbidders', 2, 1, 'Whenever a rival recruits a shop member, you may pay its cost plus 2 to recruit it instead. They get back what they paid and recruit again.', { outbids: true })),
    m('windowdresser', 'Window Dressers', 2, 1, 'On Recruit: send 3 shop members to the bottom of the pile, then refill.', { f: 3, ...old4,
      onRecruited(ctx, owner) {
        ctx.log(`${owner.name}'s Window Dressers: send 3 shop members to the bottom of the pile.`);
        churnStep(ctx, owner, { left: Math.min(3, ctx.state.shop.length) });
        ctx.defer(owner, `${Q}.churnRefill`);
      },
    }),
    m('plusone', 'Plus-Ones', 2, 1, 'On Recruit: recruit again this turn.', { f: 2,
      onRecruited(ctx, owner) { extraBuys(ctx, owner, 1); ctx.log(`${owner.name}'s Plus-Ones: recruit again this turn.`); },
    }),
    // Cory, Nov 1 3:21pm (picked 1): a rival's member to the bottom of the pile, and the owner hands them a shop member
    // costing up to 2 more. Given, not recruited, so its On Recruit doesn't fire. Price 2 blue + 5 any, worth and counts
    // as 2: the design thread's fill-ins. A trade, not a steal (Bodyguards and Lie Low block steals only).
    m('doorman', 'Doormen', 2, 5, 'On Use, once per round: send a rival’s member to the bottom of the pile. Give them a shop member; it can cost up to 2 less, or any amount more.', { f: 2, n: 2,
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const pairs = doorPairs(ctx, owner);
        if (!pairs.length) { card.used = false; ctx.log(`${owner.name}'s Doormen: no rival's member has a shop member costing at most 2 less.`); return; }
        ctx.log(`${owner.name} uses Doormen.`);
        ctx.choose(owner, 'Doormen: send which rival member to the bottom of the pile, and give them which shop member?', pairs.map(([a, b]) => ({
          id: `trade:${a.uid}:${b.uid}`, label: `${ctx.ownerOf(a.uid).name}: ${a.def.name} → pile, gets ${b.def.name}`, kind: 'trade', value: [a.uid, b.uid],
          hint: botWorth(a) - botWorth(b),
        })).concat({ id: 'none', label: 'Don’t send one', kind: 'pass', value: null, hint: -99 }), `${Q}.doormen`, { uid: card.uid });
      },
      botActivate: (ctx, p) => doorPairs(ctx, p).some(([a, b]) => botWorth(a) - botWorth(b) >= 2),
    }),
    // Cory's, Oct 21: "one recruit, refresh the shop. all the members"; prices are sim starting points
    m('makeover', 'Makeover', 2, 1, 'On Recruit: send the whole shop to the bottom of the pile, then refill.', { f: 3,
      onRecruited(ctx, owner) { sweepRow(ctx, owner); },
    }),
    // Cory's, Oct 21: "when you buy followers +1 blue"; his Oct 21 definition makes buying followers a recruit
    m('regular', 'Regular', 1, 1, 'Whenever you buy followers, +1 blue.', {
      onBuyFollowers(ctx, owner, card, by) { if (by.id === owner.id && ctx.gain(owner, B, 1)) ctx.log(`${owner.name}'s Regular: +1 blue.`); },
    }),
    // Cory's pick for Blue's 12th, Oct 21 ("trendsetter is good!")
    m('trendsetter', 'Trendsetters', 2, 1, 'Whenever you recruit a member, send 1 shop member to the bottom of the pile, then refill.', { f: 3,
      // members only, not follower buys (Cory, Oct 27: it was paying Bargain Bin and Patroness on every follower buy)
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member || what.member.uid === card.uid || !ctx.state.shop.length) return;
        churnStep(ctx, owner, { left: 1, who: 'Trendsetters' });
        ctx.defer(owner, `${Q}.churnRefill`);
      },
    }),
    // Cory's yes, Oct 21
    m('critic', 'Critic', 1, 1, 'Whenever a rival recruits a blue member, +1 follower.', { ...old1,
      onAnyRecruit(ctx, owner, card, by, rec) {
        if (by !== owner && isBlue(ctx.defOf(rec))) { owner.bonus += 1; ctx.log(`${owner.name}'s Critic: +1 follower.`); }
      },
    }),
    // REPLACE1 bot test (Nov 3, replacement batch 1): Critic's place. 4 blue + 2 any as a player sees it. Every turn send of
    // shop members to the bottom (Savings, Out of Style, Bury, Window Shopper, Window Dressers, Trendsetters, Restockers,
    // Makeover, Scouts, Doormen's sent member) asks it; the round-start refresh doesn't (nobody sends those).
    ...add1(m('scavengers', 'Scavengers', 3, 2, 'Whenever a rival sends shop members to the bottom of the pile, you may recruit one of them, paying its cost.', { scavenge: true })),
    // Claude's fill-in counters, Oct 21, not approved
  ],
};

export default market;

let installed = false;
/** Register Blue with the engine (tests and scripts call this; index.js is untouched). */
export function install() {
  if (installed) return market;
  registerQuadrant(market);
  installed = true;
  return market;
}

// Talent Scout recruits from the pile at the member's own price, by the one price rule.
const scoutChoices = (ctx, p, uid) => ctx.payChoices(p, uid, {});
function rivalsBigger(ctx, p) { const mine = ctx.memberCount(p); return ctx.rivals(p).filter(o => ctx.memberCount(o) > mine).length; }
function showroomCount(ctx) { return ctx.shopCards().filter(c => isBlue(c.def)).reduce((n, c) => n + ctx.memberWeight(c), 0); }
function priciest(ctx, p) { return Math.max(0, ...ctx.membersOf(p).map(priceOf)); }

/** Completists (REPLACE3): the colors face up in the shop, each with how many of its members p could pay for one by one. */
function completeColors(ctx, p) {
  const by = new Map();
  for (const c of ctx.shopCards()) { const col = colorOf(ctx, c); if (col) by.set(col, [...(by.get(col) || []), c]); }
  const out = [];
  for (const [col, cards] of by) {
    // a rough count: the cheapest first, out of what p holds in all
    let left = Object.values(p.res).reduce((a, b) => a + b, 0), affordable = 0, worth = 0;
    for (const c of [...cards].sort((a, b) => priceOf(a) - priceOf(b))) {
      const pr = ctx.price(p, c.uid, {});
      if (!pr.afford || pr.total > left) continue;
      left -= pr.total; affordable++; worth += botWorth(c);
    }
    if (!affordable) continue;
    out.push({ id: `color:${col}`, label: `${col} (${cards.map(c => c.def.name).join(', ')})`, kind: 'choice', value: col, hint: worth, affordable });
  }
  return out;
}
function completeStep(ctx, p, left) {
  for (let k = 0; k < left.length; k++) {
    const uid = left[k];
    if (!ctx.state.shop.includes(uid) || !ctx.payChoices(p, uid, {}).length) {
      if (ctx.state.shop.includes(uid)) ctx.log(`Completists: ${p.name} can't pay for ${ctx.card(uid).def.name}.`);
      continue;
    }
    buyAt(ctx, p, uid, {}, 'Completists');
    if (k + 1 < left.length) ctx.defer(p, `${Q}.completeNext`, { left: left.slice(k + 1) });
    return;
  }
}

// ---------- REPLACE4 bot test (Nov 3, replacement batch 4): Hawkers ----------
/** What rival o pays for Hawkers' uid: { spend } (its price, the usual way, to the bank) and { extra } (2 more, from the
 *  piles o holds most of, to the owner); null when o can't pay both. */
function hawkPlan(ctx, o, uid) {
  const spend = ctx.payChoices(o, uid, {})[0];
  if (!spend) return null;
  const left = { ...o.res }, extra = {};
  for (const r in spend) left[r] -= spend[r] || 0;
  for (let k = 0; k < 2; k++) {
    const c = Object.keys(left).filter(r => left[r] > 0).sort((a, b) => left[b] - left[a])[0];
    if (!c) return null;
    left[c] -= 1; extra[c] = (extra[c] || 0) + 1;
  }
  return { spend, extra };
}
/** The next rival in `left` (seat order) who can pay is asked; when none is left, the owner recruits it for free. */
function hawkAsk(ctx, owner, uid, left) {
  if (!ctx.state.shop.includes(uid)) { ctx.log(`${owner.name}'s Hawkers: that member left the shop.`); return; }
  const c = ctx.card(uid);
  for (let i = 0; i < left.length; i++) {
    const o = ctx.player(left[i]), plan = hawkPlan(ctx, o, uid);
    if (!plan) continue;
    ctx.choose(o, `Hawkers: recruit ${c.def.name}, paying its cost and 2 more to ${owner.name}?`, [
      { id: 'buy', label: `Recruit it (${payLabel(plan.spend)}, and ${payLabel(plan.extra)} to ${owner.name})`, kind: 'choice', value: 'buy', hint: botWorth(c) - (priceOf(c) + 2) * 0.6 },
      { id: 'pass', label: 'Pass', kind: 'pass', value: 'pass', hint: 0 },
    ], `${Q}.hawkAnswer`, { owner: owner.id, uid, left: left.slice(i + 1) });
    return;
  }
  ctx.log(`${owner.name}'s Hawkers: no rival recruits ${c.def.name}, so ${owner.name} recruits it for free.`);
  ctx.recruit(owner, uid, { free: true });
}
