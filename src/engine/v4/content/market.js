// Blue (the market): bend the shop. Recruit outside your buy, ignore colors, pay half, churn the row.
// Scoring: most blue (Cory, 2026-10-15; the old rule counted members costing 8 or more, a cutoff he cut).
// Blue's members watch who recruits blue members, and Blue's spaces pay out in blue.
import { MORE, richUp } from './price.js';
import { discardOf, toDiscard, deckReady, takeFromDiscard } from '../discard.js';
import { registerQuadrant } from './index.js';
import { gainColorOf } from './color-of.js';
import { REPLACE1, add1, old1, handlers1 } from './replace1.js';
import { add2, old2 } from './replace2.js';
import { add3, old3, handlers3 } from './replace3.js';
import { add4, old4, handlers4 } from './replace4.js';
import { add9, old9, handlers9 } from './replace9.js';
import { add11, old11, handlers11, swap11 } from './replace11.js';
import { on12, handlers12 } from './replace12.js';
import { add14, old14 } from './replace14.js';
import { on13, add13, old13, handlers13 } from './replace13.js';
import { see, endsAhead, resAt, SEE_SPITE, SEE_RING } from './botsee.js';
import { pool, poolSpace, anyColors, anyColorStep, chooseRival } from './pool.js';
import { give } from './silver.js';
/** Rummage's cost cap (test version, Nov 8). */
const RUMMAGE_CAP = 5;
const THRIFT_N = Number(globalThis.process?.env?.THRIFT_N || 2); // Thrift Hunters' followers (balance test knob: 3)
/** Bury's blue for a card: half its cost rounded down, or its whole cost under REPLACE12=buryfull. */
const SNOBS_TEXT = on12('snobsup') ? 'Whenever you recruit a member costing more than each of your others, +2 followers.'
  : on12('snobsround') ? 'Round End: +1 follower per blue member you have.' : 'Game End: +1 follower per blue member you have.';
const buryGain = c => (on12('buryfull') ? priceOf(c) : Math.floor(priceOf(c) / 2));

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
  } else if (fromPile && takeFromDiscard(ctx.state, uid)) ctx.state.shop.push(uid); // off the discard pile, the same way
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
  // Barker ("Each time you recruit a member, you may also recruit followers"; Cory, Nov 4: "it should stack with blue
  // actions"): Blue's recruit ladder recruits on the space now (Nov 10), so each of its members brings Barker's
  // followers-only recruit right after it, before the ladder's next pick
  if (LADDER.has(why) && ctx.state.shop.includes(uid) === false && ctx.membersOf(p).some(c => ctx.defsOf(c).some(d => d.followersTwice)))
    ctx.state.queue.unshift({ t: 'buy', p: p.id, barker: true });
}
const LADDER = new Set(['Markdown', 'Recruit Twice', 'Spree']);

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
// Window Dressers (REPLACE9 rework): one shop member at a time, or Done; with the shop empty it's Done at once
function wd9Step(ctx, p, data) {
  const shop = ctx.shopCards();
  if (!shop.length) { market.handlers.wd9(ctx, p, 'done', data); return; }
  // bots: send away what they can't afford, but keep the shop when they can afford nothing and hold under 3 resources,
  // since a refill they can't use is a fresh row for the next rival (Nov 4 A/B: bots cleared it broke in 4 of 12 games)
  const held = Object.values(p.res).reduce((a, b) => a + b, 0);
  const canBuy = shop.some(c => ctx.payChoices(p, c.uid, {}).length);
  const broke = !canBuy && held < 3;
  ctx.choose(p, `Window Dressers: send which member to the discard pile? (${data.n} so far)`, [...shop.map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: broke || ctx.payChoices(p, c.uid, {}).length ? -1 : 1,
  })), { id: 'done', label: data.n ? 'Done' : 'Keep the shop', kind: 'done', value: 'done', hint: 0 }], `${Q}.wd9`, data);
}
function churnStep(ctx, p, { left, who = 'Churn', sent }) {
  const shop = ctx.shopCards();
  if (left <= 0 || !shop.length) return;
  ctx.choose(p, `${who}: send which member to the discard pile? (${left} to go)`, shop.map(c => ({
    // bots send away the priciest (what a rival would buy next)
    id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: priceOf(c),
  })), `${Q}.churn`, { left, who, ...(sent ? { sent } : {}) });
}
/** Tastemakers (REPLACE13=trendsetters2): up to 2 sends after a recruit, one at a time, or stop; one refill after. */
function trendStep(ctx, p, data) {
  const shop = ctx.shopCards();
  ctx.choose(p, `Tastemakers: send a member to the discard pile (+1 blue)? (${2 - data.n} to go)`, [...shop.map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: priceOf(c) + 1,
  })), { id: 'done', label: 'Send no more', kind: 'pass', value: 'done', hint: 0 }], `${Q}.trend13`, data);
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
// the members a turn's sends put at the bottom, kept for Scavengers (REPLACE1) and Pickers (REPLACE13=pickers)
const TRACK = REPLACE1 || on13('pickers');
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
function windowPick(ctx, owner, left, sent = [], who = 'Window Shopper', row = null) {
  const all = ctx.shopCards(), first = who !== 'Window Shopper' && row == null;
  const shop = row == null ? all : all.filter(c => row.includes(c.uid));
  if (first) row = all.map(c => c.uid);
  if (!shop.length) { scavenge(ctx, owner, sent); return; }
  // Out of Style (Nov 10) goes through the same steps, by its own name; a grey member gives 1 of any color there
  const named = who === 'Window Shopper' ? {} : { who };
  // the count stays to the last pick ("(last one)"), so the question doesn't change shape under it (picky bot, Nov 11)
  ctx.choose(owner, left > 1 ? `${who}: send which member to the discard pile? (${left} to go)` : sent.length ? `${who}: send which member to the discard pile? (last one)` : `${who}: send which member to the discard pile?`, shop.map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: who === 'Window Shopper' ? priceOf(c) : 1 + 0.1 * priceOf(c),
  })), `${Q}.windowShop`, { left, ...named, ...(TRACK || who !== 'Window Shopper' ? { sent } : {}), ...(row ? { row } : {}) });
}
/** Test Drive (Nov 10): the hook that plays a member's effect now, by its printed timing; null when its timing doesn't count. */
export function driveHook(def) {
  const t = def.text || '';
  if (/^On Use\b/.test(t)) return def.onActivate ? 'onActivate' : null;
  if (/^On Recruit\b/.test(t)) return def.onRecruited ? 'onRecruited' : null;
  if (/^Round Start\b/.test(t)) return def.onRoundStart ? 'onRoundStart' : def.onRoundStartLate ? 'onRoundStartLate' : null;
  // Round End members that act before scoring (Cat Burglars, Kidnappers, Paupers) run on core's onAllPlaced
  if (/^Round End\b/.test(t)) return def.onRoundEnd ? 'onRoundEnd' : def.onAllPlaced ? 'onAllPlaced' : null;
  return null;
}
/** Blue's recruit ladder (Nov 10): discard pile members p can pay for at the price `how` sets. */
const discardFits = (ctx, p, how) => discardOf(ctx.state).filter(u => ctx.price(p, u, how).afford);
const discardBest = (ctx, p, how) => Math.max(0, ...discardFits(ctx, p, how).map(u => botWorth(ctx.card(u))));
/** Markdown, Recruit Twice, Spree: recruit a member from the discard pile now, paying as `how` says; data.left in all. */
function discardOffer(ctx, p, data) {
  if (!(data.left > 0)) return;
  const list = discardFits(ctx, p, data.how);
  if (!list.length) { ctx.log(`${p.name}'s ${data.why}: ${discardOf(ctx.state).length ? 'can’t pay for any member in the discard pile' : 'the discard pile is empty'}.`); return; }
  ctx.choose(p, `${data.why}: recruit which member from the discard pile${data.how.less ? `, paying ${data.how.less} less` : ''}?${data.left > 1 ? ` (${data.left} to go)` : ''}`, list.map(u => {
    const c = ctx.card(u), pr = ctx.price(p, u, data.how);
    return { id: `card:${u}`, label: `${c.def.name} · pay ${pr.total}`, kind: 'card', value: u, hint: botWorth(c) + (priceOf(c) - pr.total) * 0.5 };
  }).concat({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: -1 }), `${Q}.discardPick`, data);
}

const BARGAIN = String(globalThis.process?.env?.BARGAIN || 'cost1').match(/^self(\d+)$/); // BARGAIN=self<n>: bot test of "Whenever you send members to the bottom of the pile, +n blue." (on your turn; Nov 6; off in the game)
export function toBottom(ctx, k) {
  if (!(k > 0)) return;
  if (/^(cost|turn)\d*$/.test(globalThis.process?.env?.BARGAIN || 'cost1')) ctx.bargainCost(k);
  for (const p of ctx.state.players) for (const u of [...p.members, ...(p.artifact !== undefined ? [p.artifact] : [])]) {
    const def = ctx.defOf(ctx.card(u)), defs = ctx.defsOf(u);
    // run as the card, so its hover's "gained this game" counts it (it read 0 for Bargain Bin: artifact audit, Nov 1);
    // a copy (Doppelganger, Impersonator) pays too
    if (defs.some(d => d.bottomFollowers)) ctx.asMember(p, def.name, () => { p.bonus += 1; ctx.log(`${p.name}'s ${def.name}: +1 follower.`); }, u);
    // Blue's artifact (Cory, 2026-10-24): once per batch, turns only, as Patroness
    if (defs.some(d => d.bottomBlue) && !/^(cost|turn)\d*$/.test(globalThis.process?.env?.BARGAIN || 'cost1') && (!BARGAIN || ctx.state.current === p.id)) ctx.asMember(p, def.name, () => { const got = ctx.gain(p, B, BARGAIN ? Number(BARGAIN[1]) : 1); if (got) ctx.log(`${p.name}'s ${def.name}: +${got.n} ${got.color}.`); }, u);
  }
}
/** Scavengers (REPLACE1 bot test, Nov 3): `actor` just sent these shop members to the bottom of the pile; each rival
 *  holding Scavengers may recruit one of them, paying its cost (asked on the actor's turn, as Shake Down asks its victim).
 *  Unset, never called with anything to do. */
export function scavenge(ctx, actor, uids) {
  if (!actor || !uids?.length) return;
  // Impulse Buyers (idea pipeline pool 8, candidates only): "Whenever you send shop members to the discard pile, recruit
  // an extra time this turn." One send (a batch) is one extra recruit; on its owner's own turn only.
  // Bargain Hunters (pool 12, Impulse Buyers' variation B): the same, once per turn (card.impulseTurn)
  if (ctx.state.current === actor.id) for (const c of ctx.membersOf(actor)) if (ctx.defsOf(c).some(d => d.impulse && d.pool) && uids.some(u => discardOf(ctx.state).includes(u))) {
    if (ctx.defsOf(c).some(d => d.impulse === 'turn')) { if (c.impulseTurn === ctx.turnKey()) continue; c.impulseTurn = ctx.turnKey(); }
    ctx.asMember(actor, c.def.name, () => { extraBuys(ctx, actor, 1); ctx.log(`${actor.name}'s ${c.def.name}: sent shop members to the discard pile, recruit an extra time this turn.`); }, c.uid);
  }
  // Pickers (REPLACE13=pickers): its owner just sent these down on their own turn; they may also recruit one, paying its cost
  if (on13('pickers') && ctx.membersOf(actor).some(c => ctx.defsOf(c).some(d => d.pickers))) {
    const opts = uids.filter(u => discardOf(ctx.state).includes(u)).filter(u => ctx.payChoices(actor, u, {}).length).map(u => ctx.card(u)).map(x => ({
      id: `card:${x.uid}`, label: `${x.def.name} · pay ${ctx.price(actor, x.uid, {}).total}`, kind: 'card', value: x.uid, hint: botWorth(x),
    }));
    if (opts.length) {
      opts.push({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: -1 });
      ctx.choose(actor, `Pickers: you sent ${uids.length === 1 ? 'a member' : `${uids.length} members`} to the discard pile. Also recruit one of them, paying its cost?`, opts, `${Q}.pickers13`);
    }
  }
  if (!REPLACE1) return;
  for (const o of ctx.rivals(actor)) for (const c of ctx.membersOf(o)) {
    if (!c.def.scavenge) continue;
    const opts = uids.filter(u => discardOf(ctx.state).includes(u) || ctx.state.shop.includes(u)).filter(u => ctx.payChoices(o, u, {}).length).map(u => ctx.card(u)).map(x => ({
      id: `card:${x.uid}`, label: `${x.def.name} · pay ${ctx.price(o, x.uid, {}).total}`, kind: 'card', value: x.uid, hint: botWorth(x),
    }));
    if (!opts.length) continue;
    opts.push({ id: 'none', label: 'Recruit nothing', kind: 'pass', value: null, hint: -1 });
    ctx.choose(o, `Scavengers: ${actor.name} sent ${uids.length === 1 ? 'a member' : `${uids.length} members`} to the discard pile. Recruit one of them, paying its cost?`, opts, `${Q}.scavenge`);
  }
}
/** Gift Cards (idea pipeline pool 11): ask which resource to give next. */
function giftCardsStep0(ctx, p, data) {
  const cs = ctx.state.resources.filter(c => (p.res[c] || 0) > 0);
  if (!cs.length) return;
  ctx.choose(p, `Gift Cards: give which resource to ${ctx.player(data.to).name}? (${3 - data.left} of 2)`, cs.map(c => ({
    id: `color:${c}`, label: `${c} (${p.res[c]})`, kind: 'color', value: c, hint: p.res[c],
  })), `${Q}.giftCardsStep`, data);
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

/** Last-Minute Shopper's round-end recruit (Cory, Nov 5: "should just be recruiting… it can let you buy followers"): one
 *  ordinary recruit, a shop member or a follower card, before contests are scored. It isn't a turn: a fresh count of this
 *  turn's recruits, as Late Shoppers' round-end recruit. */
function lmOffer(ctx, owner) {
  const st = ctx.state;
  owner.turnRecruits = 0; owner.turnBuys = 0; delete owner.peekReach; delete owner.perSpend; delete owner.clearance; delete owner.recruitFollowers;
  const at = st.queue.findIndex(t => !t._fresh);
  st.queue.splice(at < 0 ? st.queue.length : at, 0, { t: 'buy', p: owner.id, lastMinute: true, _fresh: true });
}
/** The alternate's "+2 of any colors": one color at a time; bots take the color they hold least of. */
function lmGainAsk(ctx, owner, left) {
  ctx.choose(owner, `Last-Minute Shopper: +1 of which color${left > 1 ? ' (1 of 2)' : ' (2 of 2)'}?`, ctx.state.resources.map(c => ({
    id: `color:${c}`, label: c, kind: 'color', value: c, hint: -(owner.res[c] || 0),
  })), `${Q}.lastMinuteGain`, { left });
}

const market = {
  id: Q,
  name: 'Blue',
  resource: B,
  scoring: { label: 'Most blue', counts: 'the blue you hold when the round ends', score: (ctx, p) => p.res.blue },

  // Cory's Blue (2026-10-20, decisions.md): churn the shop, dig into the pile, buy more than once. Every action gives
  // +1 blue (the economy call). Names are working names. A copy (Echo) does the action itself: the doing is the value.
  actions: [
    // idea pipeline pool 5 (Nov 7): "costing up to 6" as printed (the brief's number; it doesn't move with MORE).
    // Up to 5 since Nov 8 (Cory, on the ship list: "a round two space that gives you basically seven resources. That
    // seems rather high… play with that going between five and six"; Claude's default for the test version, RUMMAGE_CAP)
    poolSpace({
      key: 'rummage', ring: 2, name: 'Rummage', copyDoesIt: true, text: `Recruit a member from the discard pile costing up to ${RUMMAGE_CAP}, for free. +1 blue.`,
      estimate: ctx => 1 + Math.max(0, ...discardOf(ctx.state).map(u => ctx.card(u)).filter(c => priceOf(c) <= RUMMAGE_CAP + richUp(ctx.state)).map(c => c.def.f + 0.6 * priceOf(c))),
      resolve(ctx, p) {
        const list = discardOf(ctx.state).filter(u => priceOf(ctx.card(u)) <= RUMMAGE_CAP + richUp(ctx.state));
        if (!list.length) ctx.log(`${p.name}'s Rummage: no member in the discard pile costs ${RUMMAGE_CAP + richUp(ctx.state)} or less.`);
        else ctx.choose(p, 'Rummage: recruit which discard pile member for free?', list.map(u => ({
          id: `card:${u}`, label: `${ctx.card(u).def.name} (${priceOf(ctx.card(u))})`, kind: 'card', value: u, hint: botWorth(ctx.card(u)),
        })), `${Q}.rummage`);
        ctx.gain(p, B, 1, { fromAction: true });
      },
    }, 'pool5'),
    // idea pipeline pool 11 (Nov 7). Keeping Up: members as the board counts them (Dabblers 2), each extra recruit a turn
    // recruit like Recruit Twice's. Clean Sweep: every member recruit this turn sweeps (core recruited() reads
    // p.cleanSweep; cleared at turn start and end), the recruited member's printed cost against the shop's printed costs.
    // idea pipeline pool move (Nov 9, catch-up and member movement; Cory: "yeah add some member movement ideas to the next
    // test pool"): Repossessors on a space, aimed only up the table (members as the board counts them, Dabblers 2).
    // The member goes face up into the shop as Repossessors' does (the shared repo handler). Number a fill-in.
    poolSpace({
      key: 'foreclose', ring: 2, name: 'Foreclose', copyDoesIt: true, text: '+2 blue. Put a member of a rival with more members than you into the shop.',
      estimate: (ctx, p) => 2 + Math.max(0, ...forecloseList(ctx, p).map(({ c }) => 0.5 * botWorth(c))),
      resolve(ctx, p) {
        ctx.gain(p, B, 2, { fromAction: true });
        const list = forecloseList(ctx, p);
        if (!list.length) { ctx.log(`${p.name}'s Foreclose: no rival has more members.`); return; }
        ctx.choose(p, "Foreclose: put which rival's member into the shop?", list.map(({ c, o }) => ({
          id: `card:${c.uid}`, label: `${o.name}'s ${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: botWorth(c) + 0.1 * ctx.memberCount(o),
        })), `${Q}.repo`, { name: 'Foreclose', more: true });
      },
    }, 'poolmove'),
    poolSpace({
      key: 'keepingup', ring: 2, name: 'Keeping Up', copyDoesIt: true, text: 'Recruit an extra time this turn for each rival with more members than you. +1 blue.',
      estimate: (ctx, p) => 1 + 2.5 * ctx.rivals(p).filter(o => ctx.memberCount(o) > ctx.memberCount(p)).length,
      resolve(ctx, p) {
        const k = ctx.rivals(p).filter(o => ctx.memberCount(o) > ctx.memberCount(p)).length;
        if (k) extraBuys(ctx, p, k);
        ctx.log(k ? `${p.name}'s Keeping Up: ${k} rival${k > 1 ? 's have' : ' has'} more members, ${k === 1 ? 'an extra recruit' : `${k} extra recruits`} this turn.`
          : `${p.name}'s Keeping Up: no rival has more members.`);
        ctx.gain(p, B, 1, { fromAction: true });
      },
    }, 'pool11'),
    poolSpace({
      key: 'cleansweep', ring: 1, name: 'Clean Sweep', copyDoesIt: true, text: '+2 blue. This turn, after you recruit a member, send every shop member costing less than it to the discard pile, then refill.',
      estimate: () => 2.5,
      resolve(ctx, p) { ctx.gain(p, B, 2, { fromAction: true }); p.cleanSweep = true; },
    }, 'pool11'),
    {
      // Cory, Nov 10 2:48pm (Savings' slot): "Discard a shop member. Use its effect now. +1 blue." Effects that count: "Once
      // per game, once per round, Round End, Round start, On recruit" (2:49pm: once per game included for now, watched in
      // play); 2:51pm: named Test Drive. Any shop member may go; a member whose timing isn't one of those (Whenever, Game
      // End, none) only goes to the discard pile. The shop refills.
      key: 'testdrive', ring: 1, name: 'Test Drive', copyDoesIt: true, text: 'Discard a shop member. Use its effect now. +1 blue.',
      estimate: ctx => 1 + (ctx.shopCards().some(c => driveHook(c.def)) ? 2.5 : 0.3),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        const shop = ctx.shopCards();
        if (!shop.length) { ctx.log(`${p.name}'s Test Drive: the shop is empty.`); return; }
        ctx.choose(p, 'Test Drive: discard which shop member and use its effect?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name}: ${driveHook(c.def) ? c.def.text : `${c.def.text} (no effect to use now)`}`, kind: 'card', value: c.uid,
          hint: driveHook(c.def) ? 2 + (c.def.f || 0) : -priceOf(c) * 0.1,
        })), `${Q}.testDrive`);
      },
    },
    swap11({
      // every color's 3/4/5 (Cory, 2026-10-27); Churn's sweep goes (Claude's default: Out of Style keeps Blue's sweep).
      // Name is Claude's fill-in.
      // Out of the wheel since Nov 10 (Test Drive takes its place); kept for old saves and its tests
      pool: true,
      key: 'bargain', ring: 1, name: 'Savings', copyDoesIt: true,
      text: '+2 blue in round I, +3 in round II, +4 in round III. Before you recruit, you may discard one shop member and refill.',
      // Cory, 2026-10-31: fuel that announces Blue ("C"); was +3/4/5 blue
      estimate: ctx => ctx.state.round + 1.5,
      byRound: { lines: ['+2 blue', '+3 blue', '+4 blue'], rest: 'Before you recruit, you may discard one shop member and refill.' },
      resolve(ctx, p) {
        ctx.gain(p, B, ctx.state.round + 1, { fromAction: true });
        const shop = ctx.shopCards();
        if (!shop.length) return;
        ctx.choose(p, 'Savings: send a shop member to the discard pile?', shop.map(c => ({
          id: `card:${c.uid}`, label: c.def.name, kind: 'card', value: c.uid, hint: 0,
        })).concat({ id: 'none', label: 'Keep the shop', kind: 'pass', value: null, hint: 1 }), `${Q}.savings`);
      },
    }, {
      // Clearance (REPLACE11=clearancesale; Recruit Twice already has the key 'clearance'), Actions lane r4 batch, Nov 4): Savings' place. The price rule is core.js
      // clearanceFree (p.clearance, cleared at turn start or on the free recruit).
      key: 'clearancesale', ring: 1, name: 'Clearance', copyDoesIt: true,
      text: '+2 blue in round I, +3 in round II, +4 in round III. This turn the cheapest shop member costs you nothing.',
      byRound: { lines: ['+2 blue', '+3 blue', '+4 blue'], rest: 'This turn the cheapest shop member costs you nothing.' },
      estimate: ctx => ctx.state.round + 1 + Math.min(...ctx.shopCards().map(c => c.def.s + c.def.w), 4),
      resolve(ctx, p) { ctx.gain(p, B, ctx.state.round + 1, { fromAction: true }); p.clearance = true; },
    }),
    {
      // Cory, Nov 10 2:31pm ("too strong turn 1, very luck of the draw"; 2:22pm: "you discard three and you basically get the
      // benefit of the blue cloak (and +1 blue)"): "Discard 3 shop members and refill. +1 of each discarded member's color.
      // +1 blue." One at a time, the row refilling after each; a grey member gives 1 of any color (as the Blue Cloak reads
      // grey: Claude's fill-in). Was "Discard every shop member of one color and refill. +1 blue per member discarded."
      key: 'restock', ring: 1, name: 'Out of Style', text: 'Discard 3 shop members and refill. +1 of each discarded member’s color. +1 blue.', copyDoesIt: true,
      estimate: ctx => 1 + Math.min(3, ctx.shopCards().length),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        windowPick(ctx, p, 3, [], 'Out of Style');
      },
    },
    {
      // Cory, Nov 10 2:57pm, Blue's recruit ladder ("Make it 3/5/7. and always from discard."; 2:53pm "Markdown should
      // recruit now. then you also get a nromal recruit at the end"): "Recruit a member from the discard pile now, paying 2
      // less. +3 blue." Peek's place (2:17pm "markdown is great"). The +3 includes the space's own +1 (2:58pm).
      key: 'markdown', ring: 1, name: 'Markdown', copyDoesIt: true, text: 'Recruit a member from the discard pile now, paying 2 less. +3 blue.',
      estimate: (ctx, p) => 3 + discardBest(ctx, p, { less: 2 }) * 0.6,
      resolve(ctx, p) { ctx.gain(p, B, 3, { fromAction: true }); discardOffer(ctx, p, { why: 'Markdown', how: { less: 2 }, left: 1 }); },
    },
    {
      // Out of the wheel since Nov 10 (Markdown takes its place); kept for old saves and its tests
      pool: true,
      key: 'showroom', ring: 1, name: 'Peek', text: 'Look at the top 4 of the pile and put them back in any order. You may recruit one of them this turn. +3 blue in round I, +4 in round II, +5 in round III.', copyDoesIt: true, // +3/+4/+5 (Cory, Nov 5)
      // scales, more blue (Cory, 2026-10-22 playtest: weak in round I, "should give more resource", "Peek should really really scale")
      byRound: { lead: 'Look at the top 4 of the pile and put them back in any order. You may recruit one of them this turn.', lines: ['+3 blue', '+4 blue', '+5 blue'] },
      estimate: (ctx, p) => ctx.state.round + 2 + Math.max(0, ...ctx.state.pile.slice(0, 4).map(u => ctx.card(u)).filter(c => ctx.payChoices(p, c.uid, {}).length).map(botWorth)) * 0.3,
      resolve(ctx, p) {
        ctx.gain(p, B, ctx.state.round + 2, { fromAction: true });
        const top = ctx.state.pile.slice(0, 4);
        p.peekReach = Math.max(p.peekReach || 0, top.length);
        ctx.log(`${p.name} peeks at the top ${top.length} of the pile.`);
        peekStep(ctx, p, { left: top, placed: [] });
      },
    },
    {
      // Cory, Nov 10 2:57pm, the ladder: "Recruit a member from the discard pile now. +5 blue." (was "+3 blue. Recruit an
      // extra time this turn."); the turn's own recruit still comes at turn end
      key: 'clearance', ring: 2, name: 'Recruit Twice', text: 'Recruit a member from the discard pile now. +5 blue.', copyDoesIt: true,
      estimate: (ctx, p) => 5 + discardBest(ctx, p, {}) * 0.6,
      resolve(ctx, p) { ctx.gain(p, B, 5, { fromAction: true }); discardOffer(ctx, p, { why: 'Recruit Twice', how: {}, left: 1 }); },
    },
    // REPLACE12 bot tests (Nov 4, quality loop, lane D2; pitches/D2-batch1.md), one at a time in Bury's place.
    // Dumpster Dive: the bottom 3 members of the pile (the last ones sent down), one recruited free if it costs 6 or less;
    // the turn's own recruit stays. Delivery: a shop member goes straight into a rival's cult (an arrival, not their
    // recruit: Old Maid's −5 lands on them), and the row refills.
    ...(on12('dumpsterdive') ? [{
      key: 'dumpsterdive', ring: 2, name: 'Dumpster Dive', text: `Look at the top 3 members of the discard pile and recruit one of them for free, costing up to ${6 + MORE}. +1 blue.`, copyDoesIt: true,
      // a table can't see the bottom of the pile before the look, so bots value the pull blind: a free member worth
      // about 3 while there are rounds for it to work, less in round III (play judges, Nov 4: the old peek gave it away)
      estimate: ctx => 1 + (ctx.state.round < 3 ? 3.5 : 2),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        const bottom = discardOf(ctx.state).slice(-3).reverse().map(u => ctx.card(u));
        ctx.log(`${p.name}'s Dumpster Dive: the top of the discard pile is ${bottom.map(c => `${c.def.name} (${priceOf(c)})`).join(', ') || 'empty'}.`);
        const fit = bottom.filter(c => priceOf(c) <= 6 + MORE + richUp(ctx.state));
        if (!fit.length) { ctx.log(`${p.name}'s Dumpster Dive: none of them costs ${6 + MORE + richUp(ctx.state)} or less.`); return; }
        ctx.choose(p, `Dumpster Dive: recruit which of the top 3 of the discard pile for free (costing up to ${6 + MORE + richUp(ctx.state)})?`, fit.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: priceOf(c) + c.def.f * 1.5,
        })).concat({ id: 'none', label: 'Take none', kind: 'pass', value: null, hint: -1 }), `${Q}.dive`);
      },
    }] : []),
    ...(on12('delivery') ? [{
      key: 'delivery', ring: 2, name: 'Delivery', text: 'Give a shop member to a rival; gain blue equal to its cost. +1 blue.', copyDoesIt: true,
      estimate: ctx => 1 + Math.max(0, ...ctx.shopCards().map(priceOf)),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        const shop = ctx.shopCards();
        if (!shop.length) return;
        // bots: the dearest card, or a member that costs its new owner followers (Old Maid), aimed below
        ctx.choose(p, 'Delivery: give which shop member to a rival?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (+${priceOf(c)} blue)`, kind: 'card', value: c.uid, hint: priceOf(c) + (c.def.f < 0 ? 4 : 0),
        })), `${Q}.deliverCard`);
      },
    }] : []),
    ...(on12('dumpsterdive') || on12('delivery') ? [] : [
    {
      // Cory, Nov 10 12:14pm/12:15pm: "Simply, +1 Follower per 2 members you have" in Bury's place ("it doesnt need to be
      // called bury!"; name Claude's fill-in, kept); 12:31pm: "+1 blue. Every color action gives +1 of its color".
      // Members as the board counts them; rounded down (Claude's fill-in).
      key: 'wordofmouth', ring: 2, name: 'Word of Mouth', copyDoesIt: true, text: '+1 follower per 2 members you have. +1 blue.',
      estimate: (ctx, p) => 1 + 1.5 * Math.floor(ctx.memberCount(p) / 2),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        const n = Math.floor(ctx.memberCount(p) / 2);
        if (n) p.bonus += n;
        ctx.log(`${p.name}'s Word of Mouth: ${ctx.memberCount(p)} member${ctx.memberCount(p) === 1 ? '' : 's'}, +${n} follower${n === 1 ? '' : 's'}.`);
      },
    },
    {
      // Out of the wheel since Nov 10 (Word of Mouth takes its place); kept for old saves and its tests
      pool: true,
      key: 'pricecheck', ring: 2, name: 'Bury', text: on12('buryfull') ? 'Discard a shop member and refill. Gain its cost in blue. +1 blue.' : 'Discard a shop member and refill. Gain half its cost in blue, rounded down. +1 blue.', copyDoesIt: true,
      estimate: ctx => 1 + Math.max(0, ...ctx.shopCards().map(c => buryGain(c))),
      resolve(ctx, p) {
        ctx.gain(p, B, 1, { fromAction: true });
        const shop = ctx.shopCards();
        if (!shop.length) return;
        ctx.choose(p, 'Bury: send which member to the discard pile?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (+${buryGain(c)} blue)`, kind: 'card', value: c.uid, hint: buryGain(c),
        })), `${Q}.bury`);
      },
    }]),
    {
      // Cory, Nov 10 2:57pm, the ladder: "Recruit two members from the discard pile now. +7 blue." (was "+6 blue. Recruit
      // two extra times this turn."); one at a time, then the turn's own recruit at turn end
      key: 'spree', ring: 3, name: 'Spree', text: 'Recruit two members from the discard pile now. +7 blue.', copyDoesIt: true,
      estimate: (ctx, p) => 7 + discardBest(ctx, p, {}) * 1.1,
      resolve(ctx, p) { ctx.gain(p, B, 7, { fromAction: true }); discardOffer(ctx, p, { why: 'Spree', how: {}, left: 2 }); },
    },
  ],

  handlers: {
    // pool 13: Bailiffs / Repossessors
    repo(ctx, p, uid, data) {
      const o = ctx.ownerOf(uid);
      if (!o || o === p) return;
      if (data?.more && ctx.memberCount(o) <= ctx.memberCount(p)) return; // Foreclose: only up the table
      if (data?.toPile) {
        ctx.log(`${p.name}'s ${data.name}: discards ${o.name}'s ${ctx.card(uid).def.name}.`);
        ctx.buryMember(o, uid, p);
        return;
      }
      ctx.log(`${p.name}'s ${data.name}: ${o.name}'s ${ctx.card(uid).def.name} goes into the shop.`);
      ctx.buryMember(o, uid, p, { shop: true });
    },
    swapShop(ctx, p, value) {
      if (!Array.isArray(value)) { ctx.log(`${p.name}'s Swap Shoppers: no swap.`); return; }
      const [a, b] = value;
      if (!swapShopPairs(ctx, p).some(([x, y]) => x.uid === a && y.uid === b)) return;
      const names = [ctx.card(a).def.name, ctx.card(b).def.name];
      if (!takeFromDiscard(ctx.state, b)) return;
      ctx.state.shop.push(b); // lifted into the row for a moment, so it joins as any member a move brings in
      ctx.giveFromShop(p, b, p);
      ctx.buryMember(p, a, p);
      ctx.log(`${p.name}'s Swap Shoppers: swaps ${names[0]} for ${names[1]} from the discard pile.`);
    },
    rummage(ctx, p, uid) { if (discardOf(ctx.state).includes(uid) && priceOf(ctx.card(uid)) <= RUMMAGE_CAP + richUp(ctx.state)) graveTake(ctx, p, uid, 'Rummage'); },
    // idea pipeline pool 3: Grave Diggers' and Salvagers' pick among tied cheapest discard pile members
    graveFree(ctx, p, uid, data) { if (discardOf(ctx.state).includes(uid)) ctx.asMember(p, data.name, () => graveTake(ctx, p, uid, data.name)); },
    anyColor: anyColorStep,
    // idea pipeline pool 11: Clean Sweep's sweep (core recruited()), Gift Cards' gift
    cleanSweep(ctx, p, uid) {
      const c0 = ctx.card(uid);
      if (!c0) return;
      const out = ctx.shopCards().filter(c => priceOf(c) < priceOf(c0));
      if (!out.length) { ctx.log(`${p.name}'s Clean Sweep: no shop member costs less than ${c0.def.name}.`); return; }
      for (const c of out) { ctx.state.shop.splice(ctx.state.shop.indexOf(c.uid), 1); toDiscard(ctx.state, c.uid); }
      ctx.refillShop();
      ctx.log(`${p.name}'s Clean Sweep: sends ${out.map(c => c.def.name).join(', ')} to the discard pile.`);
      toBottom(ctx, out.length);
      scavenge(ctx, p, out.map(c => c.uid));
    },
    giftCardsTo(ctx, p, oid) { if (ctx.player(oid) && ctx.player(oid) !== p) giftCardsStep0(ctx, p, { to: oid, left: 2 }); },
    giftCardsStep(ctx, p, color, data) {
      if (!((p.res[color] || 0) > 0)) return;
      const o = ctx.player(data.to);
      p.res[color] -= 1;
      give(ctx, p, o, color, 1);
      ctx.log(`${p.name}'s Gift Cards: gives ${o.name} 1 ${color}.`);
      if (data.left > 1) giftCardsStep0(ctx, p, { ...data, left: data.left - 1 });
      else { extraBuys(ctx, p, 1); ctx.log(`${p.name}'s Gift Cards: recruit an extra time this turn.`); }
    },
    // idea pipeline pool 1 (content/pool.js): Temps and its variation
    temps(ctx, p, uid, data) {
      if (!p.members.includes(uid)) return;
      const name = ctx.card(uid).def.name;
      ctx.asMember(p, data.who, () => {
        ctx.buryMember(p, uid);
        ctx.log(`${p.name}'s ${data.who}: discarded ${name}.`);
        anyColors(ctx, p, data.n, data.who, 'market.anyColor');
        extraBuys(ctx, p, data.buys);
        ctx.log(`${p.name}'s ${data.who}: recruit ${data.buys === 1 ? 'an extra time' : `${data.buys} extra times`} this turn.`);
      });
    },
    ...handlers12({
      dive(ctx, p, uid) {
        if (uid == null) { ctx.log(`${p.name}'s Dumpster Dive: takes none.`); return; }
        if (!takeFromDiscard(ctx.state, uid)) return;
        ctx.state.shop.push(uid); // up off the discard pile, then recruited as from the row
        ctx.log(`${p.name}'s Dumpster Dive: recruits ${ctx.card(uid).def.name} from the discard pile, for free.`);
        ctx.recruit(p, uid, { free: true });
      },
      deliverCard(ctx, p, uid) {
        const c = ctx.card(uid);
        if (!c || !ctx.state.shop.includes(uid)) return;
        const bad = c.def.f < 0, top = Math.max(...ctx.rivals(p).map(o => ctx.followers(o))), low = Math.min(...ctx.rivals(p).map(o => ctx.followers(o)));
        ctx.choose(p, `Delivery: give ${c.def.name} to which rival?`, ctx.rivals(p).map(o => ({
          id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers)`, kind: 'player', value: o.id,
          hint: bad ? (ctx.followers(o) === top ? 3 : 0) : (ctx.followers(o) === low ? 2 : 0),
        })), `${Q}.deliverTo`, { uid });
      },
      deliverTo(ctx, p, oid, data) {
        const o = ctx.player(oid), c = ctx.card(data.uid);
        if (!o || !c || !ctx.state.shop.includes(data.uid)) return;
        const k = priceOf(c);
        ctx.log(`${p.name}'s Delivery: ${c.def.name} goes to ${o.name}'s cult; ${p.name} +${k} blue.`);
        ctx.giveFromShop(o, data.uid, p);
        if (k) ctx.gain(p, B, k, { fromAction: true });
      },
    }),
    ...handlers11({
      snobReserve(ctx, p, uid) {
        if (!ctx.state.shop.includes(uid)) return;
        ctx.state.reserved = { uid, pid: p.id };
        ctx.log(`${p.name}'s Snobs: a token on ${ctx.card(uid).def.name}; only ${p.name} may recruit it this round.`);
      },
    }),
    doormen(ctx, p, value) {
      if (!Array.isArray(value)) { ctx.log(`${p.name} chose not to use Doormen.`); return; }
      const [a, b] = value;
      if (!doorPairs(ctx, p).some(([x, y]) => x.uid === a && y.uid === b)) return;
      const rival = ctx.ownerOf(a), sent = ctx.card(a).def.name, given = ctx.card(b).def.name;
      if (!ctx.swapMembers(p, a, b)) return;
      ctx.memberDiscarded(rival, a); // Martyrs: "Whenever this member is discarded" pays the cult it left
      ctx.buryFromShop(a);
      ctx.log(`${p.name}'s Doormen: sends ${rival.name}'s ${sent} to the discard pile and gives ${rival.name} ${given}.`);
      ctx.memberBottomed();
      scavenge(ctx, p, [a]);
    },
    windowShop(ctx, p, uid, data) {
      if (!ctx.state.shop.includes(uid)) return;
      const who = data?.who || 'Window Shopper', space = who !== 'Window Shopper';
      const c = ctx.card(uid), col = colorOf(ctx, c);
      ctx.state.shop.splice(ctx.state.shop.indexOf(uid), 1);
      toDiscard(ctx.state, uid);
      if (col) ctx.gain(p, col, 1, space ? { fromAction: true } : undefined);
      ctx.log(`${p.name}'s ${who} sends ${c.def.name} to the discard pile${col ? `: +1 ${col}` : ''}.`);
      if (c.def.everyColor) gainColorOf(ctx, p, c.def, who);
      // a grey member gives 1 of any color, the sender's pick, for Window Shopper too (Cory's playtest, Nov 9: "window shopper
      // didnt give resources when used on round start (on grey members)")
      else if (!col) anyColors(ctx, p, 1, who, 'market.anyColor');
      // Out of Style's three sends are one batch (Patroness and the Blue Cloak pay once per batch, Cory Oct 21); Window
      // Shopper keeps paying per send, as it always has
      ctx.refillShop();
      if (!space) toBottom(ctx, 1);
      // Out of Style ("Discard 3 shop members and refill"): all three come from the row as it was when the space was taken,
      // never a card that just slid in (the row refills as it goes so it is never short between picks; the end is the same)
      const row = space ? (data?.row || []).filter(u => ctx.state.shop.includes(u)) : null;
      if (data?.left > 1 && (space ? row.length : ctx.shopCards().length)) windowPick(ctx, p, data.left - 1, TRACK || space ? [...(data.sent || []), uid] : [], who, row);
      else { if (space) toBottom(ctx, (data?.sent || []).length + 1); scavenge(ctx, p, [...(data?.sent || []), uid]); }
    },
    // Test Drive (Nov 10): the member goes to the discard pile first, then its effect plays for p
    testDrive(ctx, p, uid) {
      if (!ctx.state.shop.includes(uid)) return;
      const c = ctx.card(uid), hook = driveHook(ctx.defOf(c));
      ctx.buryFromShop(uid);
      ctx.log(`${p.name}'s Test Drive: sends ${c.def.name} to the discard pile${hook ? ' and uses its effect' : ''}.`);
      toBottom(ctx, 1);
      if (hook) ctx.useEffectOf(p, uid, hook);
      scavenge(ctx, p, [uid]);
    },
    discardPick(ctx, p, uid, data) {
      if (uid == null) { ctx.log(`${p.name}'s ${data.why}: recruits nothing.`); return; }
      if (!discardOf(ctx.state).includes(uid) || !ctx.payChoices(p, uid, data.how).length) return;
      askPay(ctx, p, `${data.why}: how do you pay ${ctx.price(p, uid, data.how).total} for ${ctx.card(uid).def.name}?`, { uid, why: data.why, fromPile: true, how: data.how });
      if (data.left > 1) discardOffer(ctx, p, { ...data, left: data.left - 1 });
    },
    churn(ctx, p, uid, data) {
      if (ctx.state.shop.includes(uid)) {
        const i = ctx.state.shop.indexOf(uid);
        ctx.state.shop.splice(i, 1);
        toDiscard(ctx.state, uid); ctx.state.bbBatch = (ctx.state.bbBatch || 0) + 1; // BARGAIN=cost bot test counts each
        ctx.log(`${data.who === 'Churn' || !data.who ? 'Churn' : `${p.name}'s ${data.who}`}: ${p.name} sends ${ctx.card(uid).def.name} to the discard pile.`);
      }
      const sent = TRACK && discardOf(ctx.state).includes(uid) ? [...(data.sent || []), uid] : data.sent || [];
      if (data.left - 1 <= 0 || !ctx.state.shop.length) scavenge(ctx, p, sent);
      churnStep(ctx, p, { left: data.left - 1, who: data.who, ...(TRACK ? { sent } : {}) });
    },
    wd9(ctx, p, uid, data) {
      if (uid === 'done') {
        ctx.refillShop();
        if (data.n) toBottom(ctx, 1); // one batch, as Churn: Patroness and the Blue Cloak pay once
        extraBuys(ctx, p, 1);
        ctx.log(`${p.name}'s Window Dressers: ${data.n} sent to the discard pile, the shop refills; recruit again this turn.`);
        return;
      }
      if (ctx.state.shop.includes(uid)) {
        ctx.state.shop.splice(ctx.state.shop.indexOf(uid), 1);
        toDiscard(ctx.state, uid); ctx.state.bbBatch = (ctx.state.bbBatch || 0) + 1; // BARGAIN=cost bot test counts each
        ctx.log(`${p.name}'s Window Dressers: ${p.name} sends ${ctx.card(uid).def.name} to the discard pile.`);
      }
      wd9Step(ctx, p, { n: data.n + 1 });
    },
    churnRefill(ctx) { ctx.refillShop(); toBottom(ctx, 1); },
    outOfStyle(ctx, p, color) {
      const out = ctx.shopCards().filter(c => styleOf(ctx, c) === color);
      for (const c of out) { ctx.state.shop.splice(ctx.state.shop.indexOf(c.uid), 1); toDiscard(ctx.state, c.uid); }
      ctx.refillShop();
      ctx.log(`Out of Style: ${p.name} sends ${out.length} ${styleWord(color)} member${out.length === 1 ? '' : 's'} to the discard pile.`);
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
      ctx.log(`Savings: ${p.name} sends ${c.def.name} to the discard pile.`);
      toBottom(ctx, 1);
      scavenge(ctx, p, [uid]);
    },
    bury(ctx, p, uid) {
      if (!ctx.state.shop.includes(uid)) return;
      const c = ctx.card(uid), k = buryGain(c);
      ctx.buryFromShop(uid);
      ctx.log(`Bury: ${p.name} sends ${c.def.name} to the discard pile.`);
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
    }),
    hawk(ctx, p, uid) {
      if (!ctx.state.shop.includes(uid)) return;
      const n = ctx.state.players.length;
      ctx.log(`${p.name}'s Hawker: offers ${ctx.card(uid).def.name}.`);
      hawkAsk(ctx, p, uid, Array.from({ length: n - 1 }, (_, k) => (p.id + 1 + k) % n));
    },
    hawkAnswer(ctx, o, value, data) {
      const owner = ctx.player(data.owner), plan = value === 'buy' && ctx.state.shop.includes(data.uid) ? hawkPlan(ctx, o, data.uid) : null;
      if (!plan) { hawkAsk(ctx, owner, data.uid, data.left); return; }
      for (const [c, k] of Object.entries(plan.extra)) { o.res[c] -= k; owner.res[c] = (owner.res[c] || 0) + k; }
      ctx.log(`${owner.name}'s Hawker: ${o.name} recruits ${ctx.card(data.uid).def.name} and pays ${payLabel(plan.extra)} to ${owner.name}.`);
      ctx.recruit(o, data.uid, { free: false, spend: plan.spend });
    },
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
    // Last-Minute Shopper is in the deck (Nov 5): its handler is always registered
    lastMinute(ctx, p, uid) {
      if (uid == null) { ctx.log(`${p.name}'s Last-Minute Shopper: recruits nothing.`); return; }
      if (!ctx.state.shop.includes(uid) || !ctx.payChoices(p, uid, {}).length) return;
      askPay(ctx, p, `Last-Minute Shopper: how do you pay for ${ctx.card(uid).def.name}?`, { uid, why: 'Last-Minute Shopper', fromPile: true, how: {} });
    },
    ...handlers9({
      stallhold(ctx, p, uid, data) {
        const st = ctx.state, i = st.shop.indexOf(uid);
        if (i < 0) return;
        // the slot refills from the top of the pile, in place
        if (deckReady(st, ctx.log)) st.shop.splice(i, 1, st.pile.shift()); else st.shop.splice(i, 1);
        ((st.stalls ||= {})[data.card] ||= []).push(uid);
        ctx.log(`${p.name}'s Stallholder: ${ctx.card(uid).def.name} goes beside it until round end; a rival who recruits it pays ${p.name}.`);
      },
      lastMinuteGain(ctx, p, color, data) {
        ctx.gain(p, color, 1);
        ctx.log(`${p.name}'s Last-Minute Shopper: +1 ${color}.`);
        if (data.left > 1) lmGainAsk(ctx, p, data.left - 1); else lmOffer(ctx, p);
      },
    }),
    ...handlers13({
      pickers13(ctx, p, uid) {
        if (uid == null) { ctx.log(`${p.name}'s Pickers: recruits nothing.`); return; }
        if (!discardOf(ctx.state).includes(uid) || !ctx.payChoices(p, uid, {}).length) return;
        askPay(ctx, p, `Pickers: how do you pay for ${ctx.card(uid).def.name}?`, { uid, why: 'Pickers', fromPile: true, how: {} });
      },
      trend13(ctx, p, uid, data) {
        if (uid !== 'done' && ctx.state.shop.includes(uid)) {
          ctx.state.shop.splice(ctx.state.shop.indexOf(uid), 1);
          toDiscard(ctx.state, uid);
          ctx.log(`${p.name}'s Tastemakers: ${p.name} sends ${ctx.card(uid).def.name} to the discard pile.`);
          data = { ...data, n: data.n + 1, sent: [...data.sent, uid] };
          if (data.n < 2 && ctx.state.shop.length) { trendStep(ctx, p, data); return; }
        }
        ctx.refillShop();
        if (data.n) {
          toBottom(ctx, 1);
          const got = ctx.gain(p, B, data.n);
          if (got) ctx.log(`${p.name}'s Tastemakers: +${got.n} ${got.color}.`);
          scavenge(ctx, p, data.sent);
        }
      },
    }),
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
    // idea pipeline pool 13 (Nov 7): a rival's member (printed cost) goes face up into the shop row as Yard Sale's do, wiped
    // clean as any member back in the shop; anyone recruits it as usual, its owner included. Not a steal (members are
    // moved, as Lie Low's ruling allows). Prices fill-ins.
    // Repossessors discards (Cory, Nov 11 3:41pm: "it should go into the discard, actually")
    ...[['bailiffs', 'Bailiffs', 'round', 5], ['repossessors', 'Repossessors', 'game', 8, true]].map(([key, name, every, cap, toPile]) => pool(m(key, name, 3, 2,
      toPile ? `On Use, once per ${every}: discard a rival's member costing up to ${cap}.` : `On Use, once per ${every}: put a rival's member costing up to ${cap} into the shop.`, {
        activate: every,
        ...(every === 'round' ? { onRoundStart(ctx, owner, card) { card.used = false; } } : {}),
        onActivate(ctx, owner, card) {
          const list = repoList(ctx, owner, cap);
          if (!list.length) { card.used = false; ctx.log(`${owner.name}'s ${name}: no rival's member costs ${cap + richUp(ctx.state)} or less.`); return; }
          ctx.choose(owner, toPile ? `${name}: discard which rival's member?` : `${name}: put which rival's member into the shop?`, list.map(({ c, o }) => ({
            id: `card:${c.uid}`, label: `${o.name}'s ${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid,
            hint: botWorth(c) + (o.res && ctx.memberCount(o) >= Math.max(...ctx.state.players.map(x => ctx.memberCount(x))) ? 2 : 0),
          })), `${Q}.repo`, { name, toPile: !!toPile });
        },
        botActivate: (ctx, owner) => repoList(ctx, owner, cap).length > 0,
      }), 'pool13')),
    // idea pipeline pool 8 (Nov 7, writer round 1; price a fill-in): scavenge() is every "you sent shop members to the
    // discard pile" moment (Churn, Bury, Window Dressers…), so it pays there.
    pool(m('bargainhunters', 'Bargain Hunters', 3, 2, 'Once per turn, when you send shop members to the discard pile, recruit an extra time this turn.', { impulse: 'turn',
      ...see(info => 2.5 * endsAhead(info).length),
    }), 'pool12'),
    pool(m('impulsebuyers', 'Impulse Buyers', 3, 2, 'Whenever you send shop members to the discard pile, recruit an extra time this turn.', { impulse: true,
      ...see(info => 3 * endsAhead(info).length),
    }), 'pool8'),
    // idea pipeline pool 3 (Nov 7): the discard pile as a second shop. Prices are fill-ins (design-core bands).
    // Grave Diggers: "Round End" before contests, as Last-Minute Shopper's (onAllPlaced). Cheapest = lowest printed cost; a
    // tie is the owner's pick.
    // idea pipeline pool 11 (Nov 7). Prices are fill-ins (the writer's). Gift Cards: needs 2 resources to give; the
    // rival first, then each resource one at a time (bots give what they hold most of); then the extra recruit, as
    // Recruit Twice's. Black Friday Crowd: while it's on this turn, every recruit of yours leaves one more recruit
    // waiting (Pass ends them all, as every run of recruits).
    pool(m('giftcards', 'Gift Cards', 2, 2, 'On Use, once per round: give a rival 2 of your resources, then recruit an extra time this turn.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        if (totalRes(owner) < 2) { card.used = false; ctx.log(`${owner.name}'s Gift Cards: needs 2 resources to give.`); return; }
        chooseRival(ctx, owner, 'Gift Cards: give 2 of your resources to which rival?', `${Q}.giftCardsTo`, null, o => -ctx.followers(o));
      },
      botActivate: (ctx, owner) => totalRes(owner) >= 4 && ctx.shopCards().length > 0,
    }), 'pool11'),
    pool(m('blackfriday', 'Black Friday Crowd', 5, 2, 'On Use, once per game: recruit as many times as you like this turn.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        card.friday = ctx.turnKey();
        extraBuys(ctx, owner, 1);
        ctx.log(`${owner.name}'s Black Friday Crowd: recruit as many times as you like this turn.`);
      },
      onRecruit(ctx, owner, card, by) {
        if (by !== owner || card.friday == null || card.friday !== ctx.turnKey() || ctx.state.current !== owner.id) return;
        if (!ctx.state.queue.some(t => t.p === owner.id && t.t === 'buy' && !t.extra && !t.afterPurchase)) extraBuys(ctx, owner, 1);
      },
      onTurnEnd(ctx, owner, card, p) { if (p === owner) delete card.friday; },
      // bots wait for round III, or a pile worth spending twice over
      botActivate: (ctx, owner) => ctx.state.round === 3 || totalRes(owner) >= 16,
    }), 'pool11'),
    pool(m('gravediggers', 'Grave Diggers', 4, 2, 'Round End: recruit the cheapest member in the discard pile, for free.', {
      onAllPlaced(ctx, owner) { ctx.asMember(owner, 'Grave Diggers', () => graveFree(ctx, owner, 'Grave Diggers')); },
      ...see(info => 2.5 * endsAhead(info).length), // BOTSEE: a cheap member free at each round end still ahead
    }), 'pool3'),
    // Pickers: core offers every discard pile member in its owner's own buy step, once per round (flag discardPick); the
    // recruit is that turn's buy, paid at its normal price. Key pickers3; named Junk Collectors (the brief's
    // Pickers), as the REPLACE13 bot test already has a Pickers.
    pool(m('pickers3', 'Junk Collectors', 2, 2, 'Once per round, on your turn, you may recruit from the discard pile instead of the shop.', { discardPick: true,
      ...see(info => 1.2 * endsAhead(info).length), // BOTSEE: a wider choice of member about once a round
    }), 'pool3'),
    pool(m('salvagers', 'Salvagers', 2, 1, 'On Use, once per game: recruit the cheapest member in the discard pile, for free.', {
      activate: 'game',
      onActivate(ctx, owner, card) { if (!graveFree(ctx, owner, 'Salvagers')) card.used = false; },
      // bots wait for a member worth having: costing 3 or more, or any in round III
      botActivate: ctx => { const l = cheapestDiscard(ctx); return l.length > 0 && (ctx.state.round === 3 || priceOf(ctx.card(l[0])) >= 3); },
    }), 'pool3'),
    // idea pipeline pool 1 (Nov 7): Cory's Temps, 1:15pm "maybe temp gives 4 wild on the discard", 1:16pm "AND it gives the
    // extra recruit"; price 4 blue + 4 any as seen is the brainstorm thread's fill-in. Temps (Big) is the variation step's.
    ...[['temps', 'Temps', 'round', 4, 1], ['tempsbig', 'Temp Agency', 'game', 6, 2]].map(([key, name, every, n, buys]) => pool(m(key, name, 3, 3,
      `On Use, once per ${every}: discard one of your members, then +${n} of any colors and recruit ${buys === 1 ? 'an extra time' : `${buys} extra times`} this turn.`, {
        activate: every,
        ...(every === 'round' ? { onRoundStart(ctx, owner, card) { card.used = false; } } : {}),
        onActivate(ctx, owner, card) {
          const list = ctx.membersOf(owner).filter(c => c.uid !== card.uid);
          if (!list.length) { card.used = false; ctx.log(`${owner.name}'s ${name}: no other member to discard.`); return; }
          ctx.choose(owner, `${name}: discard which member?`, list.map(c => ({ id: `card:${c.uid}`, label: c.def.name, kind: 'card', value: c.uid,
            hint: -((c.def.f || 1) + (c.used ? -1 : 0)) })), `${Q}.temps`, { who: name, n, buys });
        },
        botActivate: (ctx, owner) => ctx.membersOf(owner).some(c => c.def.key !== key && ((c.def.f || 1) <= 1 || c.used)),
      }), 'pool1')),
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
    m('connoisseur', 'Connoisseurs', 1, 2, 'Whenever you recruit a blue member, +1 blue.', { f: 2, retired: true, // Hawker takes its place (Claude, under Cory's "use your judgement", 2026-11-04)
      onAnyRecruit(ctx, owner, card, by, rec) { if (by === owner && rec.uid !== card.uid && ctx.defOf(rec).key !== 'drifters' && (isBlue(ctx.defOf(rec)) || ctx.defOf(rec).everyColor)) ctx.gain(owner, B, 1); },
      onColorChosen(ctx, owner, card, member) { if (member.asColor === Q) ctx.gain(owner, B, 1); },
    }),
    // Replacement batch 4 (Nov 3), live since Nov 4 (Claude, under Cory's "use your judgement"): Connoisseurs' place. 5 blue + 3 any as a player sees it. Each rival in
    // seat order from the owner's left is offered it if they can pay: its cost goes to the bank as any recruit's, and 2
    // more (from the piles they hold most of) to the owner (the draft's reading of "paying its cost plus 2 to you"). The
    // rival's recruit is theirs (its On Recruit fires) and doesn't use their turn's recruit.
    m('hawkers', 'Hawker', 4, 3, 'On Use, once per round: choose a shop member. Starting on your left, each rival may recruit it, paying its cost plus 2 to you. If none does, you recruit it for free.', { retired: true, /* cut by Cory, Nov 4 playtest: "Hawker needs to get cut and replaced" */ // a round I member as Connoisseurs was (bot-tested in a later round; Nov 4)
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const shop = ctx.shopCards();
        if (!shop.length) { card.used = false; ctx.log(`${owner.name}'s Hawker: the shop is empty.`); return; }
        ctx.choose(owner, 'Hawker: offer which shop member?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: botWorth(c),
        })), `${Q}.hawk`);
      },
      botActivate: ctx => ctx.shopCards().length > 0,
    }),
    // REPLACE9 bot test (Members C, Nov 4): Hawker reworded to Round Start, so every rival's choice comes in a Round Start
    // resolved one player at a time (Cory's turn-flow rule, Nov 4 12:35am). Same price and handlers (hawk, hawkAnswer). Not a
    // turn: a rival's buy here doesn't use up their recruit, and "this turn" effects don't pay on it.
    ...add9(m('hawker2', 'Hawker', 4, 3, 'Round Start: choose a shop member. Starting on your left, each rival may recruit it, paying its cost plus 2 to you. If none does, you recruit it for free.', { round: 1,
      onRoundStart(ctx, owner) {
        const shop = ctx.shopCards();
        if (!shop.length) { ctx.log(`${owner.name}'s Hawker: the shop is empty.`); return; }
        ctx.choose(owner, 'Hawker: offer which shop member?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: botWorth(c),
        })), `${Q}.hawk`);
      },
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
    m('bargainbin', 'Bargain Bin', 0, 0, 'Whenever you discard a member, +1 of its color (grey: any color).', { artifact: true, bottomBlue: true }),
    m('patroness', 'Patroness', 5, 2, 'Whenever shop members go to the discard pile, +1 follower.', { bottomFollowers: true, ...old3, ...old14('ragpicker') }),
    // REPLACE14 bot test (Members E lane, Nov 4; quality/pitches/E-redo1.md, paper 18 vs 16; a play A/B under "paper
    // filters, play ranks"): Patroness' place, same price. Core offers the pile's bottom card beside the shop (flag pileBottom).
    ...add14(m('ragpicker', 'Ragpicker', 5, 2, 'You may recruit the top member of the discard pile as if it were in the shop.', { pileBottom: true,
      ...see(i => 1.5 * endsAhead(i).length) })), // BOTSEE: about one good buried member a round to pick from
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
    // Actions lane (Nov 4; /mnt/project-files/quality/pitches/actions-snobs.md), REPLACE11=snob2 in Snobs' place: the
    // velvet rope. The token is state.reserved; core keeps every rival recruit (buy, swap, free) off the card until the
    // round ends or the card leaves the shop.
    // On Recruit too (Nov 4, A/B: bought in round III after its Round Start, it never fired); now: true runs the Round
    // Start effect on recruit, once (a separate onRecruited fired it twice: play judge, seed 328)
    ...add11(m('snob2', 'Snobs', 3, 2, 'On Recruit and Round Start: put a token on a shop member. Until the round ends, only you may recruit it.', { f: 2, round: 1, now: true,
      onRoundStart(ctx, owner) {
        const shop = ctx.shopCards();
        if (!shop.length) return;
        ctx.choose(owner, 'Snobs: reserve which shop member this round?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid, hint: botWorth(c),
        })), `${Q}.snobReserve`);
      },
    })),
    // REPLACE11 bot test (Actions lane, Nov 4, requalified under "paper filters, play ranks"): Snobs' place, disdain.
    // A member's cost is its printed cost (colored + any).
    ...add11(m('snobs3', 'Snobs', 3, 2, `Whenever a rival recruits a member costing ${4 + MORE} or less, +1 follower.`, { f: 2,
      ...see(i => endsAhead(i).length * 1.5),
      onAnyRecruit(ctx, owner, card, by, rec) {
        const d = ctx.defOf(rec);
        if (by !== owner && d.s + d.w <= 4 + MORE + richUp(ctx.state)) { owner.bonus += 1; ctx.log(`${owner.name}'s Snobs: ${by.name} recruited ${d.name}, +1 follower.`); }
      },
    })),
    m('snob', 'Snobs', 3, 2, SNOBS_TEXT, { f: 2, ...old11('snob2'), ...old11('snobs3'), ...old9('market.snob'),
      // REPLACE12 rewords (lane D2, Nov 4, pitches/D2-batch2.md, passed paper): snobsup "trading up", snobsround the
      // same count at every Round End. Unset: the live Game End count.
      ...(on12('snobsup') ? {
        // the recruit that costs more than each of your other members (Snobs' own arrival isn't one; no others yet counts)
        onRecruit(ctx, owner, card, by, what) {
          const c = what?.member;
          if (by !== owner || !c || c.uid === card.uid) return;
          const others = ctx.membersOf(owner).filter(x => x.uid !== c.uid);
          if (others.some(x => priceOf(x) >= priceOf(c))) return;
          owner.bonus += 2;
          ctx.log(`${owner.name}'s Snobs: ${c.def.name} (${priceOf(c)}) costs more than each of their other members, +2 followers.`);
        },
        ...see(i => endsAhead(i).length * 2),
      } : on12('snobsround') ? {
        onRoundEnd(ctx, owner) {
          const n = ctx.countMembersOfColor(owner, Q);
          if (!n) return;
          owner.bonus += n;
          ctx.log(`${owner.name}'s Snobs: ${n} blue member${n === 1 ? '' : 's'}, +${n} follower${n === 1 ? '' : 's'}.`);
        },
        ...see(i => (endsAhead(i).length + 1) * 2),
      } : {
        onGameEnd: (ctx, owner) => ctx.countMembersOfColor(owner, Q),
      }),
    }),
    // REPLACE9 bot test (Members C, Nov 4, batch bC1: paper 17 vs Snobs' 12, Blue's set 13 -> 17): Snobs' place. 4 blue
    // + 3 any as a player sees it. Pays once a turn, on the owner's second member recruit of that turn (Recruit Twice,
    // Spree, Shopaholics); buying followers isn't a member. Recruiting Power Shoppers itself counts as the first.
    // In the deck for Doormen's slot (Cory, Nov 5: "i actually do like power shoppers", "doormen")
    // Cory, 2026-11-11 8:34pm Eastern: "Swap shoppers is pretty good. Let's try it… Definitely number one." Your member goes
    // to the discard pile and the other joins your cult (a swap, not a recruit: no On Recruit). Price is Claude's fill-in.
    m('swapshoppers', 'Swap Shoppers', 2, 2, 'On Use, once per round: swap one of your members for a discard-pile member that costs the same.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const pairs = swapShopPairs(ctx, owner);
        if (!pairs.length) { card.used = false; ctx.log(`${owner.name}'s Swap Shoppers: no discard-pile member costs the same as one of yours.`); return; }
        ctx.choose(owner, 'Swap Shoppers: swap which of your members for which discard-pile member?', pairs.map(([a, b]) => ({
          id: `trade:${a.uid}:${b.uid}`, label: `${a.def.name} ↔ ${b.def.name} (${priceOf(b)})`, kind: 'trade', value: [a.uid, b.uid],
          // bots trade a used-up or plain member for one still to use, or worth more
          hint: (b.def.f - a.def.f) + (a.used ? 1 : 0) + (b.def.activate || b.def.onAllPlaced || b.def.onGameEnd ? 0.5 : 0) - (a.uid === card.uid ? 3 : 0),
        })).concat({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null, hint: 0 }), `${Q}.swapShop`);
      },
      botActivate: (ctx, owner, card) => swapShopPairs(ctx, owner).some(([a, b]) => b.def.f > a.def.f || (a.used && a.uid !== card?.uid)),
    }),
    // Cory, 2026-11-11 8:42pm Eastern: "I do like Thrift Hunters" (8:42pm: "should maybe be 3 followers… but we can balance
    // test it": +2 built, +3 for the next balance test, THRIFT_N). Any recruit of a member off the discard pile (core
    // marks it: what.fromDiscard). Price is Claude's fill-in.
    m('thrifthunters', 'Thrift Hunters', 2, 2, `Whenever you recruit from the discard pile, +${THRIFT_N} followers.`, {
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what?.member || !what.fromDiscard || what.member.uid === card.uid) return;
        owner.bonus += THRIFT_N;
        ctx.log(`${owner.name}'s Thrift Hunters: ${what.member.def?.name || ctx.card(what.member.uid).def.name} from the discard pile, +${THRIFT_N} followers.`);
      },
      ...see(i => endsAhead(i).length * 2),
    }),
    // Cory, 2026-11-11 8:49pm Eastern, his idea ("Yeah, just put that in there"): Recruit Twice's discard-pile recruit,
    // paid as usual. Price is Claude's fill-in.
    m('repeatcustomers', 'Repeat Customers', 3, 2, 'On Recruit: +3 blue, then recruit from the discard pile.', {
      onRecruited(ctx, owner) {
        ctx.gain(owner, B, 3);
        discardOffer(ctx, owner, { why: 'Repeat Customers', how: {}, left: 1 });
      },
    }),
    m('powershoppers', 'Power Shoppers', 3, 2, 'Whenever you recruit your second member in a turn, +3 followers.', { f: 2, // +3 (Cory, Nov 11 3:41pm: "let's just put it down to 3. For right now")
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what?.member || what.member.uid === card.uid) return; // itself: onRecruited counts it
        const key = `${ctx.state.round}:${(ctx.state.turns || []).length}`;
        if (card.shopTurn !== key) { card.shopTurn = key; card.shopN = 0; }
        card.shopN += 1;
        if (card.shopN !== 2) return;
        owner.bonus += 3;
        ctx.log(`${owner.name}'s Power Shoppers: a second member this turn, +3 followers.`);
      },
      onRecruited(ctx, owner, card) {
        const key = `${ctx.state.round}:${(ctx.state.turns || []).length}`;
        if (card.shopTurn !== key) { card.shopTurn = key; card.shopN = 1; }
      },
      ...see(i => endsAhead(i).length * 3), // BOTSEE: about one double-recruit turn a round still ahead
    }),
    // REPLACE9 bot test (Members C, Nov 4): Hawker's place (Hawker asked rivals to choose on its owner's turn). 3 blue + 2 any as a
    // player sees it. The shop's blue members count toward the owner's members in every contest that counts them (core
    // contestMembers: Most members, and Fewest members against the owner). Rivals answer by sending blue members to the bottom.
    // Live since Nov 5 in Hawker's place: the one blue card on Cory's short list ("Pretty cool; short list for blue").
    m('mannequin', 'Mannequin', 2, 2, 'Blue members in the shop count as your members when contests are scored.', {}), // joins by cost (round II), per Cory's round I cost cutoffs
    // REPLACE9 bot test (Members C, Nov 4): Hawker's place, second try (Mannequin lost its blind A/B). 4 blue + 1 any as a
    // player sees it. The stall is the Peddlers list (state.stalls[uid], flag stall 'anyone'): core's recruit step offers it to
    // everyone; a rival pays its cost to the owner, the owner pays the bank. After contests an unsold member goes to the
    // bottom of the pile (Claude's ruling, pitch file). Red's free recruits and Promote don't reach it: it isn't in the shop.
    ...add9(m('stallholder', 'Stallholder', 3, 1, 'On Use, once per round: move a shop member beside this card, then refill. Until round end, anyone may recruit it there; a rival pays its cost to you.', { round: 1, stall: 'anyone',
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; }, // once per round: each round's use comes back (as Doormen)
      onActivate(ctx, owner, card) {
        const shop = ctx.shopCards();
        if (!shop.length || ctx.state.stalls?.[card.uid]?.length) { card.used = false; ctx.log(`${owner.name}'s Stallholder: nothing to move.`); return; }
        // bots stall the priciest member they can't pay for themselves (a rival may, and pays them)
        ctx.choose(owner, 'Stallholder: move which shop member beside it?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${priceOf(c)})`, kind: 'card', value: c.uid,
          hint: priceOf(c) + (ctx.payChoices(owner, c.uid, {}).length ? -3 : 0),
        })), `${Q}.stallhold`, { card: card.uid });
      },
      botActivate: ctx => ctx.state.round >= 1,
      afterContests(ctx, owner, card) {
        const list = ctx.state.stalls?.[card.uid];
        if (!list?.length) return;
        for (const uid of list.splice(0)) { toDiscard(ctx.state, uid); ctx.log(`${owner.name}'s Stallholder: ${ctx.card(uid).def.name} goes unsold to the discard pile.`); }
      },
    })),
    m('recluse', 'Recluse', 2, 2, 'Game End: +2 followers per rival with more members than you.', {
      onGameEnd: (ctx, owner) => 2 * rivalsBigger(ctx, owner),
    }),
    // concepts, Oct 21, not approved (design/eval/member-concepts-2026-10-21.md): prices are sim starting points
    // Cory, 2026-10-24: Blue's round start ("Yeah I kinda like it") and Blue's once per game, the shop refresh that replaces
    // Makeover; names and prices Claude's fill-in
    m('windowshopper', 'Window Shopper', 2, 2, /* 2 members (Cory, Nov 1, 2:20pm) */ 'On Recruit and Round Start: discard 2 shop members. +1 of each one’s color.', { now: true, ...old4,
      onRoundStart(ctx, owner) { windowPick(ctx, owner, 2); },
    }),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Window Shopper's place. 5 blue + 3 any as a player sees it. Core runs
    // it (flag roundEndBuy): after each round's contests are scored, one recruit step (a member or followers) per holder
    // in that round's turn order, before the row goes to the bottom; in round III, before the Game End cards count.
    ...add4(m('lateshoppers', 'Late Shoppers', 4, 3, 'Round End: after contests are scored, recruit once.', { roundEndBuy: true,
      ...see(i => endsAhead(i).length * 2.5) })), // BOTSEE: an extra recruit each round end still ahead
    m('restocker', 'Restockers', 2, 1, 'On Use, once per game: discard the whole shop and refill.', {
      f: 2, // (Cory, Oct 29, balance run: +1 follower)
      activate: 'game',
      onActivate(ctx, owner, card) {
        if (!ctx.state.shop.length) { card.used = false; ctx.log(`${owner.name}'s Restockers: the shop is empty.`); return; }
        sweepRow(ctx, owner); ctx.refillShop();
        ctx.log(`${owner.name}'s Restockers sends the whole shop to the discard pile and refills it.`);
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
    // REPLACE9 bot test (Members C, Nov 4, batch bC7b: paper 19 vs 11, raised bar): Window Dressers reworded, same price
    // and worth. Shop members one at a time to the bottom of the pile until Done (the row refills once, after), then one
    // more recruit this turn (as Plus-Ones). Bots send away what they can't afford.
    ...add9(m('windowdressers9', 'Window Dressers', 2, 1, 'On Recruit: discard any shop members and refill. Recruit again this turn.', { f: 3,
      onRecruited(ctx, owner) { wd9Step(ctx, owner, { n: 0 }); },
    })),
    // REPLACE9 (Members C, bC7b: paper 14 vs 11; Cory's "paper filters, play ranks", Nov 4): Window Dressers' place,
    // same price. Its own recruit counts (it is a blue member by then).
    ...add9(m('buyersclub', "Buyers' Club", 2, 1, 'Whenever you recruit, +3 blue.', { f: 3, n: 3,
      // "Whenever you recruit": a member or a follower purchase (Cory, 2026-10-21), so onRecruit, not onAnyRecruit.
      onRecruit(ctx, owner, card, by) {
        if (by !== owner) return;
        // Was "+1 blue per blue member, up to 3": it counts as 3 blue members itself, so that always read +3 (Hard A/B judges, Nov 4).
        ctx.gain(owner, B, 3); ctx.log(`${owner.name}'s Buyers' Club: +3 blue.`);
      },
    })),
    m('windowdresser', 'Window Dressers', 2, 0, /* Cory, Nov 5 backlog price yes */ 'On Recruit: discard 3 shop members and refill.', { f: 3, ...old4, ...old9('market.windowdresser'),
      onRecruited(ctx, owner) {
        ctx.log(`${owner.name}'s Window Dressers: send 3 shop members to the discard pile.`);
        churnStep(ctx, owner, { left: Math.min(3, ctx.state.shop.length), who: 'Window Dressers' }); // its own name on the question, not "Churn" (picky bot, Nov 11)
        ctx.defer(owner, `${Q}.churnRefill`);
      },
    }),
    m('plusone', 'Plus-Ones', 2, 1, 'On Recruit: recruit again this turn.', { f: 2,
      onRecruited(ctx, owner) { extraBuys(ctx, owner, 1); ctx.log(`${owner.name}'s Plus-Ones: recruit again this turn.`); },
    }),
    // Cory, Nov 1 3:21pm (picked 1): a rival's member to the bottom of the pile, and the owner hands them a shop member
    // costing up to 2 more. Given, not recruited, so its On Recruit doesn't fire. Price 2 blue + 5 any, worth and counts
    // as 2: the design thread's fill-ins. A trade, not a steal (Bodyguards and Lie Low block steals only).
    m('doorman', 'Doormen', 2, 5, 'On Use, once per round: send a rival’s member to the discard pile. Give them a shop member; it can cost up to 2 less, or any amount more.', { f: 2, n: 2,
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const pairs = doorPairs(ctx, owner);
        if (!pairs.length) { card.used = false; ctx.log(`${owner.name}'s Doormen: no rival's member has a shop member costing at most 2 less.`); return; }
        ctx.log(`${owner.name} uses Doormen.`);
        ctx.choose(owner, 'Doormen: send which rival member to the discard pile, and give them which shop member?', pairs.map(([a, b]) => ({
          id: `trade:${a.uid}:${b.uid}`, label: `${ctx.ownerOf(a.uid).name}: ${a.def.name} → discard pile, gets ${b.def.name}`, kind: 'trade', value: [a.uid, b.uid],
          hint: botWorth(a) - botWorth(b),
        })).concat({ id: 'none', label: 'Don’t send one', kind: 'pass', value: null, hint: -99 }), `${Q}.doormen`, { uid: card.uid });
      },
      botActivate: (ctx, p) => doorPairs(ctx, p).some(([a, b]) => botWorth(a) - botWorth(b) >= 2),
    }),
    // Cory's, Oct 21: "one recruit, refresh the shop. all the members"; prices are sim starting points
    m('makeover', 'Makeover', 2, 1, 'On Recruit: discard the whole shop and refill.', { f: 3,
      onRecruited(ctx, owner) { sweepRow(ctx, owner); },
    }),
    // Cory's, Oct 21: "when you buy followers +1 blue"; his Oct 21 definition makes buying followers a recruit
    // REPLACE11 bot test (Actions lane, Nov 4): Regular's place. Counted in member cards you hold (a counts-as member is
    // one card; a member who leaves lowers the count), read when you pay: the recruit that makes 3, 6 or 9 cards is free,
    // each number once a game (Evaluators, Nov 4: else dropping to 2 cards earns a second free 3rd).
    ...add11(m('punchcard', 'Punch Card', 1, 1, 'Your 3rd, 6th and 9th member cards cost nothing.', { punchCard: true,
      // BOTSEE: about 4 resources for each of 3, 6, 9 still ahead of its member cards and in reach (about 0.6 cards a
      // placement); worth nothing bought as the 9th card (Evaluators, Nov 4: a bot bought it as its 9th)
      // a free recruit is a member, not leftover resources, so it keeps its worth in round III too; and a buy still queued
      // this turn that would be the free card counts again, so a double recruit takes Punch Card first (Evaluators, Nov 4)
      ...see(i => {
        const c = i.owner.members.length, now = i.s.queue.filter(t => t.t === 'buy' && t.p === i.owner.id).length >= 2 && [3, 6, 9].includes(c + 1); // queue[0] is this buy
        return [3, 6, 9].filter(n => n > c && n - c <= Math.max(1, i.placesLeft * 0.6)).length * 4 + (now ? 3 : 0);
      }) })),
    m('regular', 'Regular', 1, 1, 'Whenever you buy followers, +1 blue.', { ...old9('market.regular'), ...old11('punchcard'),
      onBuyFollowers(ctx, owner, card, by) { if (by.id === owner.id && ctx.gain(owner, B, 1)) ctx.log(`${owner.name}'s Regular: +1 blue.`); },
    }),
    // REPLACE9 bot test (Members C, Nov 4): Regular's place. 2 blue + 1 any as a player sees it (Blue's cheap way in once Regular and Critic are gone; paper gate, Nov 4). "Fewest" is read at each
    // purchase, before it lands (ties count): the buy that lifts you past a rival is still free, the next one isn't. A
    // free purchase hands the owner this turn's recruit step again (a member or more followers).
    ...add9(m('bargainhunter', 'Bargain Hunter', 1, 1, "While you have the fewest followers (ties count), buying followers doesn't use up your recruit.", { round: 1,
      ...see(i => endsAhead(i).length * 1.5), // BOTSEE: about one free recruit a round while behind
      onBuyFollowers(ctx, owner, card, by, tier) {
        if (by.id !== owner.id) return;
        const before = ctx.followers(owner) - tier.get;
        if (!ctx.state.players.every(o => o === owner || ctx.followers(o) >= before)) return;
        ctx.state.queue.unshift({ t: 'buy', p: owner.id });
        ctx.log(`${owner.name}'s Bargain Hunter: fewest followers, so that purchase didn't use up the recruit.`);
      },
    })),
    // Cory's pick for Blue's 12th, Oct 21 ("trendsetter is good!")
    m('trendsetter', 'Trendsetters', 2, 1, 'Whenever you recruit a member, discard 1 shop member and refill.', { f: 3,
      ...old13('pickers', 'trendsetters2', 'fashionpolice'),
      // members only, not follower buys (Cory, Oct 27: it was paying Bargain Bin and Patroness on every follower buy)
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member || what.member.uid === card.uid || !ctx.state.shop.length) return;
        churnStep(ctx, owner, { left: 1, who: 'Trendsetters' });
        ctx.defer(owner, `${Q}.churnRefill`);
      },
    }),
    // REPLACE13 (lane F, Nov 4; quality/pitches/F-batch2.md): candidates for Trendsetters' slot, bot games only
    ...add13(m('pickers', 'Pickers', 2, 1, 'Whenever you send shop members to the discard pile, you may also recruit one of them, paying its cost.', { f: 2, n: 2, pickers: true })),
    ...add13(m('trendsetters2', 'Tastemakers', 3, 2, 'Whenever you recruit a member, send up to 2 shop members to the discard pile, then refill. +1 blue each.', { f: 3, n: 3,
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member || what.member.uid === card.uid || !ctx.state.shop.length) return;
        trendStep(ctx, owner, { n: 0, sent: [] });
      },
    })),
    ...add13(m('fashionpolice', 'Fashion Police', 2, 1, 'Whenever you recruit a member, send every shop member of its color to the discard pile, then refill.', { f: 3, n: 3,
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member || what.member.uid === card.uid) return;
        const col = styleOf(ctx, ctx.card(what.member.uid));
        const out = ctx.shopCards().filter(c => styleOf(ctx, c) === col);
        if (!out.length) return;
        for (const c of out) { ctx.state.shop.splice(ctx.state.shop.indexOf(c.uid), 1); toDiscard(ctx.state, c.uid); }
        ctx.refillShop();
        ctx.log(`${owner.name}'s Fashion Police: sends ${out.length} ${styleWord(col)} member${out.length === 1 ? '' : 's'} to the discard pile.`);
        toBottom(ctx, 1);
        scavenge(ctx, owner, out.map(c => c.uid));
      },
    })),
    // Cory's yes, Oct 21
    m('critic', 'Critic', 1, 1, 'Whenever a rival recruits a blue member, +1 follower.', { ...old1, ...old9('market.critic'),
      onAnyRecruit(ctx, owner, card, by, rec) {
        if (by !== owner && isBlue(ctx.defOf(rec))) { owner.bonus += 1; ctx.log(`${owner.name}'s Critic: +1 follower.`); }
      },
    }),
    // REPLACE9 bot test (Members C, Nov 4): Critic's place. 3 blue + 1 any as a player sees it. After the round's last
    // placement, before contests are scored (onAllPlaced, as Second-Story Man), the owner may recruit one face-up member,
    // paying its cost the usual way; the new member counts in this round's contests. A member recruited then doesn't use
    // its own Round End that round (the round's round-end members have already been asked).
    // In the deck for Shopaholics' slot (Cory, Nov 5: "Last minute shopper is good. it should also give one or 2 blue at
    // round end"; +2 is Claude's pick). The blue comes before contests are scored, so it counts for Most blue.
    m('lastminute', 'Last-Minute Shopper', 2, 0, /* +3 (Cory, Nov 6: "Give last minute shopper an extra blue") */ 'Round End: +3 blue, then you may recruit.', { round: 1,
      ...see(i => endsAhead(i).length * 3), // BOTSEE: 2 blue and an extra paid recruit each round end still ahead
      onAllPlaced(ctx, owner) { const got = ctx.gain(owner, B, 3); if (got) ctx.log(`${owner.name}'s Last-Minute Shopper: +${got.n} ${got.color}.`); lmOffer(ctx, owner); },
    }),
    // Alternate (director, Nov 4: numbers for Cory on both): REPLACE9=lastminute2. The same card, first +2 resources of the
    // owner's choice (one color at a time), so the round-end recruit has something to pay with.
    ...add9(m('lastminute2', 'Last-Minute Shopper', 2, 1, 'Round End: +2 of any colors, then you may recruit.', { round: 1,
      ...see(i => endsAhead(i).length * 3), // BOTSEE: 2 resources and an extra paid recruit each round end still ahead
      onAllPlaced(ctx, owner) { lmGainAsk(ctx, owner, 2); },
    })),
    // REPLACE1 bot test (Nov 3, replacement batch 1): Critic's place. 4 blue + 2 any as a player sees it. Every turn send of
    // shop members to the bottom (Savings, Out of Style, Bury, Window Shopper, Window Dressers, Trendsetters, Restockers,
    // Makeover, Scouts, Doormen's sent member) asks it; the round-start refresh doesn't (nobody sends those).
    ...add1(m('scavengers', 'Scavengers', 3, 2, 'Whenever a rival sends shop members to the discard pile, you may recruit one of them, paying its cost.', { scavenge: true })),
    // Claude's fill-in counters, Oct 21, not approved
  ],
};

/** Foreclose (pool move): every member of each rival with more members than p. */
function forecloseList(ctx, p) {
  return ctx.rivals(p).filter(o => ctx.memberCount(o) > ctx.memberCount(p)).flatMap(o => ctx.membersOf(o).map(c => ({ c, o })));
}
/** Bailiffs (pool 13): rivals' members costing up to cap, as printed. */
// Swap Shoppers: [yours, a discard-pile member] that cost the same
function swapShopPairs(ctx, p) {
  const pile = discardOf(ctx.state).map(u => ctx.card(u));
  const out = [];
  for (const a of ctx.membersOf(p)) for (const b of pile) if (priceOf(a) === priceOf(b)) out.push([a, b]);
  return out;
}
function repoList(ctx, p, cap) {
  return ctx.rivals(p).flatMap(o => ctx.membersOf(o).filter(c => c.def.s + c.def.w <= cap + richUp(ctx.state)).map(c => ({ c, o })));
}
export default market;

let installed = false;
/** Register Blue with the engine (tests and scripts call this; index.js is untouched). */
export function install() {
  if (installed) return market;
  registerQuadrant(market);
  installed = true;
  return market;
}

// Grave Diggers and Salvagers (idea pipeline pool 3): the discard pile's cheapest members by printed cost
function cheapestDiscard(ctx) {
  const d = discardOf(ctx.state);
  if (!d.length) return [];
  const low = Math.min(...d.map(u => priceOf(ctx.card(u))));
  return d.filter(u => priceOf(ctx.card(u)) === low);
}
/** Recruit the discard pile's cheapest member for free (the owner picks among a tie). False when the pile is empty. */
function graveFree(ctx, p, name) {
  const list = cheapestDiscard(ctx);
  if (!list.length) { ctx.log(`${p.name}'s ${name}: the discard pile is empty.`); return false; }
  if (list.length === 1) { graveTake(ctx, p, list[0], name); return true; }
  ctx.choose(p, `${name}: recruit which of the cheapest members in the discard pile, for free?`, list.map(u => ({
    id: `card:${u}`, label: ctx.card(u).def.name, kind: 'card', value: u, hint: botWorth(ctx.card(u)),
  })), `${Q}.graveFree`, { name });
  return true;
}
function graveTake(ctx, p, uid, name) {
  if (!takeFromDiscard(ctx.state, uid)) return;
  // lifted into the row for a moment, so it is recruited the normal way (as payAndRecruit does)
  ctx.state.shop.push(uid);
  ctx.log(`${p.name}'s ${name}: recruits ${ctx.card(uid).def.name} from the discard pile for free.`);
  ctx.recruit(p, uid, { free: true });
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

// ---------- Hawker (replacement batch 4, live since Nov 4) ----------
/** What rival o pays for Hawker' uid: { spend } (its price, the usual way, to the bank) and { extra } (2 more, from the
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
  if (!ctx.state.shop.includes(uid)) { ctx.log(`${owner.name}'s Hawker: that member left the shop.`); return; }
  const c = ctx.card(uid);
  for (let i = 0; i < left.length; i++) {
    const o = ctx.player(left[i]), plan = hawkPlan(ctx, o, uid);
    if (!plan) continue;
    ctx.choose(o, `Hawker: recruit ${c.def.name}, paying its cost and 2 more to ${owner.name}?`, [
      { id: 'buy', label: `Recruit it (${payLabel(plan.spend)}, and ${payLabel(plan.extra)} to ${owner.name})`, kind: 'choice', value: 'buy', hint: botWorth(c) - (priceOf(c) + 2) * 0.6 },
      { id: 'pass', label: 'Pass', kind: 'pass', value: 'pass', hint: 0 },
    ], `${Q}.hawkAnswer`, { owner: owner.id, uid, left: left.slice(i + 1) });
    return;
  }
  ctx.log(`${owner.name}'s Hawker: no rival recruits ${c.def.name}, so ${owner.name} recruits it for free.`);
  ctx.recruit(owner, uid, { free: true });
}
