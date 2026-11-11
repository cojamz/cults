import { MORE, richUp } from './price.js';
import { memberScoring } from './member-scoring.js';
// White: the exchange. Your followers are liquid: sell them for white when you need fuel, draw white on them
// (Dividend), buy them back cheap. Fewest followers at round end takes the ring's followers (Cory, 2026-10-15):
// sell before the round ends to dip under the table, buy back after.
//
// Rules this module adds:
// - You can only sell or spend loose followers: the ones you've won or bought (p.bonus). Never yourself, never your members
//   (Cory, 2026-10-14). So nobody can drop below 1 follower, and nobody sells in round I unless they bought first.
// - "Sell" is White's own verb: White members can react to it (onSell), which only White's actions and
//   members call.
// - No white→followers at par in ring II (2026-10-14 rework, Claude under Cory's go-with-your-gut): Cash In's
//   "trade any white for followers 1 for 1" turned "sell for 3, buy back for 1" into a loop. Sales stay at 3
//   (Sell High, Pawnbroker): measured, a scripted seller doesn't win more, and sellers out-win non-sellers.
//
// Engine note (see design/spheres/trading.md):
// - Actions can't leave anything due later (a loan repaid at game end) because only members have
//   round-end and game-end hooks. That's why the loan lives on a member (Lender), not on a space.
import { registerQuadrant, defById } from './index.js';
import { add3, old3, handlers3 } from './replace3.js';
import { add6, old6, handlers6 } from './replace6.js';
import { add9, old9 } from './replace9.js';
import { swap11, handlers11, add11, old11 } from './replace11.js';
import { swap14, handlers14, add14, old14 } from './replace14.js';
import { see, endsAhead, resAt } from './botsee.js';
import { pool, poolSpace, chooseRival } from './pool.js';
import { add10, old10, handlers10 } from './replace10.js';
import { add8, old8 } from './replace8.js';
import { on12, handlers12, add12, old12 } from './replace12.js';

const W = 'white';
/** Idea pipeline pool 2: one resource to one rival per pick, or stop; bots give their most-held non-white color to the
 *  rival with the fewest followers. */
function giveForWhiteAsk(ctx, p, data) {
  const opts = [];
  for (const o of ctx.rivals(p)) if (!data.once || !(data.to || []).includes(o.id)) for (const [c, n] of Object.entries(p.res)) if (n > 0 && c !== W)
    opts.push({ id: `give:${o.id}:${c}`, label: `${o.name} gets 1 ${c}`, kind: 'choice', value: [o.id, c], hint: n - 0.05 * ctx.followers(o) });
  if (!opts.length) return;
  opts.push({ id: 'done', label: 'Give no more', kind: 'done', value: 'done', hint: -10 });
  ctx.choose(p, `${data.name}: give a rival 1 resource for ${data.each} white? (${data.max - data.given} more at most)`, opts, 'trading.giveForWhite', data);
}
/** No rival has fewer followers than p (ties count): Low Profile (REPLACE12). */
const richer = (ctx, p) => ctx.rivals(p).filter(o => ctx.followers(o) > ctx.followers(p)).length;
const fewestFollowers = (ctx, p) => !ctx.rivals(p).some(o => ctx.followers(o) < ctx.followers(p));
const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });

/** Followers you can sell: your loose followers (the ones you've won or bought). */
export const sellable = p => Math.max(0, p.bonus);
const ahead = (ctx, p) => ctx.rivals(p).filter(o => ctx.followers(o) > ctx.followers(p)).length;
// How bots value a follower against one resource, by round (resources compound early, followers are the score late).
const fv = ctx => [1.6, 1.3, 1.2][ctx.state.round - 1] ?? 1.2;
/**
 * White Exchange (REPLACE11=whiteexchange, Actions lane r4 batch, Nov 4; pitches/actions-r4-batch.md), in Exchange's
 * place: "+1 white. Then turn up to 2 white (3 in round II, 4 in round III) into 3 followers each." White only, so
 * spending it weighs against the White contest. One at a time, until the limit or Done.
 */
const WHITE_EXCHANGE = {
  key: 'whiteexchange', copyDoesIt: true, ring: 1, name: 'White Exchange', text: '+1 white. Then turn up to 2 white (3 in round II, 4 in round III) into 3 followers each.',
  byRound: { lead: '+1 white. Then:', lines: ['Turn up to 2 white into 3 followers each.', 'Turn up to 3 white into 3 followers each.', 'Turn up to 4 white into 3 followers each.'] },
  estimate: (ctx, p) => 1 + Math.min(ctx.state.round + 1, (p.res[W] || 0) + 1) * (3 * fv(ctx) - 1),
  resolve(ctx, p) {
    ctx.gain(p, W, 1, { fromAction: true });
    whiteExchangeStep(ctx, p, { left: ctx.state.round + 1, done: 0 });
  },
};
/**
 * Loan (REPLACE11=loan, Actions lane r4 batch, Nov 4), in Exchange's place: "+4 white in round I, +5 in round II, +6 in
 * round III. Round End: pay back 3 white or lose 3 followers." The debt is state.loans [{ pid, round }], asked after the
 * round's last placement and before its contests (core.js allPlaced), so paying it back weighs against the White contest.
 */
const LOAN = {
  key: 'loan', copyDoesIt: true, ring: 1, name: 'Loan', text: '+4 white in round I, +5 in round II, +6 in round III. Round End: pay back 3 white or lose 3 followers.',
  byRound: { lines: ['+4 white', '+5 white', '+6 white'], rest: 'Round End: pay back 3 white or lose 3 followers.' },
  estimate: ctx => ctx.state.round + 3 - 2.5,
  resolve(ctx, p) {
    ctx.gain(p, W, ctx.state.round + 3, { fromAction: true });
    (ctx.state.loans ||= []).push({ pid: p.id, round: ctx.state.round });
    ctx.log(`${p.name}'s Loan: pay back 3 white at Round End, or lose 3 followers.`);
  },
};
export function loanDue(ctx) {
  const due = (ctx.state.loans || []).filter(l => l.round === ctx.state.round);
  ctx.state.loans = (ctx.state.loans || []).filter(l => l.round !== ctx.state.round);
  for (const l of due) {
    const p = ctx.player(l.pid);
    if ((p.res[W] || 0) < 3) { p.bonus -= 3; ctx.log(`${p.name}'s Loan: not 3 white to pay back, so -3 followers.`); continue; }
    ctx.choose(p, 'Loan: pay back 3 white, or lose 3 followers?', [
      { id: 'pay', label: 'Pay back 3 white', kind: 'yes', value: 'pay', spend: { [W]: 3 }, hint: -3 * (ctx.state.round >= 3 ? 0.3 : 0.9) }, // white left after round III buys nothing (Evaluators, Nov 4)
      { id: 'lose', label: 'Lose 3 followers', kind: 'no', value: 'lose', hint: -3 * fv(ctx) },
    ], 'trading.loanPay');
  }
}
function whiteExchangeStep(ctx, p, data) {
  if (data.left <= 0 || !(p.res[W] > 0)) return;
  ctx.choose(p, `White Exchange: turn 1 white into 3 followers? (${data.left} left)`, [
    { id: 'white', label: '1 white → 3 followers', kind: 'color', value: W, spend: { [W]: 1 }, hint: 3 * fv(ctx) - 1 },
    { id: 'done', label: data.done ? 'Done' : 'Turn nothing', kind: 'done', value: 'done', hint: 0.1 },
  ], 'trading.whiteExchange', data);
}
const lastTurn = (ctx, p) => ctx.state.round === 3 && p.left === 0;

export const SELL_HIGH = { most: 2, each: 3 };
export const PAWN = { each: 2 }; // Your Call: per round number, +1 follower or this much white
export const BUY_LOW = { per: 2 }; // the old Cheap Seats (1 for 1, this many per round number); its handler stays for old saves
export const CHEAP_SEATS = { per: 3 }; // white held per follower
export const LIQUIDATE = { most: 5, each: 2 };
// All In pays this many followers per resource (experiments try 0.5: 2 resources per follower)
export const BOOM = { per: 1 };
// experiment knob: greedy bots' appetite for selling followers
export const BOTS = { sell: true };

/** Sell k followers for `each` white apiece. Fires onSell on the seller's members (a Doppelganger's copy too). */
export function sell(ctx, p, k, each, { fromAction = false, why = 'sold', by = null } = {}) {
  k = Math.min(k, sellable(p));
  if (!(k > 0)) return 0;
  p.bonus -= k;
  ctx.gain(p, W, k * each, { fromAction });
  // a member's sale names the member ("P1's Pawnbroker: sold 1 follower for 3 white.")
  ctx.log(`${p.name}${by ? `'s ${by}:` : ''} ${why} ${k} follower${k > 1 ? 's' : ''} for ${k * each} white.`);
  // members reacting to the sale (Dealer, Reinvestor) are named in the log like any member hook
  for (const c of ctx.membersOf(p)) {
    for (const d of [c.def, c.copy ? defById(c.copy) : null]) if (d?.onSell) ctx.asMember(p, d.name, () => d.onSell(ctx, p, c, k));
  }
  return k;
}

// Why a sale finds nothing to sell (Cory: a skipped printed part says so in the log).
const NOTHING_TO_SELL = 'no followers to sell (only followers you bought or won can be sold)';
function sellChoice(ctx, p, prompt, most, each, why) {
  const max = Math.min(most, sellable(p));
  if (max <= 0) { ctx.log(`${prompt.split(':')[0]}: ${p.name} has ${NOTHING_TO_SELL}.`); return; }
  const v = fv(ctx), late = lastTurn(ctx, p);
  const opts = [];
  for (let k = 0; k <= max; k++) {
    opts.push({
      id: `amount:${k}`, label: k === 0 ? 'Sell none' : `Sell ${k} for ${k * each} white`, kind: 'amount', value: k,
      hint: late || !BOTS.sell ? -k : k * (each - v),
    });
  }
  ctx.choose(p, prompt, opts, 'trading.sell', { each, why });
}

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

/**
 * Yard Sale (REPLACE11, Actions lane, Nov 4; /mnt/project-files/quality/pitches/actions-estate-sale.md), in Estate
 * Sale's place: "At the end of your turn, cast out one of your members face up into the shop, gain white equal to
 * twice its cost. +1 white." The sale waits for the end of your recruits (so you can't buy it straight back: bots sold
 * and rebought for a profit when it came first). The member leaves as a cast-out does (Undertaker, Martyrs, Recruiter
 * hear it), fresh, and sits at the end of the shop row (one card over the row's size until the row goes under the pile
 * at round end), so anyone can recruit it.
 */
/**
 * Cash Out (REPLACE11=cashout, Actions lane, Nov 4; /mnt/project-files/quality/pitches/actions-estate-sale-r2.md), in
 * Estate Sale's place: "+1 white. Turn up to 4 of your followers into 2 white each." The mirror of Cash In. Only loose
 * followers turn (Cory: followers attached to members can't be sold), through sell(), so Dealer and the like still hear it.
 */
const CASH_OUT = {
  key: 'cashout', copyDoesIt: true, ring: 2, name: 'Cash Out', text: '+1 white. Turn up to 4 of your followers into 2 white each.',
  estimate: (ctx, p) => 1 + Math.min(4, sellable(p)) * (2 - fv(ctx)) * 0.5,
  resolve(ctx, p) {
    ctx.gain(p, W, 1, { fromAction: true });
    const most = Math.min(4, sellable(p));
    if (!most) { ctx.log(`${p.name}'s Cash Out: ${NOTHING_TO_SELL}.`); return; }
    const opts = [];
    for (let k = most; k >= 0; k--) opts.push({ id: `n:${k}`, label: k ? `Turn ${k} follower${k > 1 ? 's' : ''} into ${2 * k} white` : 'Keep my followers', kind: k ? 'n' : 'done', value: k,
      // bots: lean on the contest and Cash In; a middle amount
      hint: k === 2 ? 1 : k === 0 ? 0.2 : 0.5 - 0.1 * k });
    ctx.choose(p, `Cash Out: turn how many followers into 2 white each? (up to ${most})`, opts, 'trading.cashOut');
  },
};
const YARD_SALE = {
  key: 'yardsale', copyDoesIt: true, ring: 2, name: 'Yard Sale', text: 'At the end of your turn, put one of your members face up into the shop, gain white equal to twice its cost. +1 white.',
  // a rival may buy it off the row: bots count a little less than the full twice
  estimate: (ctx, p) => 1 + Math.max(0, ...ctx.membersOf(p).map(c => buryValue(ctx, p, c, 2) - 1)),
  resolve(ctx, p) {
    ctx.gain(p, W, 1, { fromAction: true });
    const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn' && t.p === p.id);
    const task = { t: 'content', p: p.id, h: 'trading.yardSaleAsk' };
    if (end >= 0) q.splice(end, 0, task); else q.unshift(task);
  },
};
function yardSaleAsk(ctx, p) {
  const list = ctx.membersOf(p);
  if (!list.length) { ctx.log(`${p.name}'s Yard Sale: no members to sell.`); return; }
  const opts = list.map(c => ({ id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: buryValue(ctx, p, c, 2) - 1 }));
  opts.push({ id: 'done', label: 'Keep them all', kind: 'done', value: 'done', hint: 0 });
  ctx.choose(p, 'Yard Sale: put which member into the shop?', opts, 'trading.yardSale');
}
function yardSale(ctx, p, uid) {
  if (uid === 'done') { ctx.log(`${p.name}'s Yard Sale: keeps every member.`); return; }
  if (!p.members.includes(uid)) return;
  const name = ctx.card(uid).def.name;
  const c = ctx.buryMember(p, uid, p, { shop: true });
  ctx.gain(p, W, 2 * c, { fromAction: true });
  ctx.log(`${p.name}'s Yard Sale: ${name} paid ${2 * c} white.`);
  gotRidOf(ctx, p);
}

// Pawn Shop (REPLACE14, Members E lane, Nov 4; quality/pitches/E-exchange.md), in Exchange's place: one whole color
// into followers, one for one, without spending the turn's recruit; then the white. Brokers pays as on Exchange.
const pawnBest = (ctx, p) => Math.max(0, ...ctx.state.resources.map(r => p.res[r] || 0));
const PAWN_SHOP = {
  key: 'pawnshop', copyDoesIt: true, ring: 1, name: 'Pawn Shop', text: 'Turn all of one color you hold into followers, one for one. +1 white.',
  estimate: (ctx, p) => 1 + pawnBest(ctx, p) * (fv(ctx) - 1) + (pawnBest(ctx, p) ? 0.5 : 0),
  resolve(ctx, p) {
    const held = ctx.state.resources.filter(r => p.res[r] > 0);
    if (!held.length) { ctx.log(`${p.name}'s Pawn Shop: nothing to turn in.`); ctx.gain(p, W, 1, { fromAction: true }); return; }
    const v = fv(ctx);
    const opts = held.map(r => ({
      id: `color:${r}`, label: `All ${p.res[r]} ${r} → ${p.res[r]} follower${p.res[r] === 1 ? '' : 's'}`, kind: 'color', value: r, spend: { [r]: p.res[r] },
      // bots cash their biggest pile, white last (it scores on Cash In); late in the game every pile is worth cashing
      hint: p.res[r] * (v - 1) + 0.01 * p.res[r] - (r === W && ctx.state.round < 3 ? 0.3 * p.res[r] : 0),
    }));
    opts.push({ id: 'done', label: 'Turn nothing in', kind: 'done', value: 'done', hint: 0.1 });
    ctx.choose(p, 'Pawn Shop: turn all of which color into followers?', opts, 'trading.pawnShop', {});
  },
};

// Hand-Offs and Bequest (idea pipeline pool 3, Nov 7; bot games only): give one of your members to a rival (your pick
// of member and rival; a gift, not a swap or a steal), then white on its printed cost (and Bequest's followers), then
// the +1 white every White space prints (coordinator, Nov 7: a space must do something for a player with no members).
// a bot gives the member worth least kept against what it pays, a little less for the followers the rival gets
const giveValue = (ctx, p, c, each, f) => buryValue(ctx, p, c, each) + f * fv(ctx) - 0.4 * c.def.f;
const giveSpace = (key, name, text, each, f) => poolSpace({
  key, copyDoesIt: true, ring: 2, name, text,
  estimate: (ctx, p) => 1 + Math.max(0, ...ctx.membersOf(p).map(c => giveValue(ctx, p, c, each, f))),
  resolve(ctx, p) {
    const list = ctx.membersOf(p);
    if (!list.length) { ctx.log(`${p.name}'s ${name}: no members to give.`); ctx.gain(p, W, 1, { fromAction: true }); return; }
    ctx.choose(p, `${name}: give which of your members to a rival?`, list.map(c => ({
      id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: giveValue(ctx, p, c, each, f),
    })), 'trading.handOff', { name, each, f });
  },
}, 'pool3');

const trading = {
  id: 'trading',
  name: 'White',
  resource: W,
  // Cory, 2026-10-17: competitions count their own-color members, except Gold/Silver/Yellow.
  scoring: { label: 'Most white', counts: 'the white you hold when the round ends', score: (ctx, p) => p.res.white },

  // White, reworked by Cory (2026-10-22, design/spheres/white-actions-draft-2026-10-22.md): "basically better
  // exchange for followers". The names are Claude's fill-ins.
  actions: [
    // idea pipeline pool 5 (Nov 7): cast out one at a time (Done to stop), each to the discard pile, +3 followers each;
    // a cast-out, so Undertaker pays. No +1 white: not printed.
    poolSpace({
      key: 'cleanslate', copyDoesIt: true, ring: 2, name: 'Clean Slate', text: 'Discard any number of your members. +3 followers each.',
      estimate: (ctx, p) => ctx.membersOf(p).map(c => dowagersValue(ctx, p, c)).filter(v => v > 0).reduce((a, b) => a + b, 0),
      resolve(ctx, p) {
        if (!ctx.membersOf(p).length) { ctx.log(`${p.name}'s Clean Slate: no members to discard.`); return; }
        slateStep(ctx, p, { n: 0 });
      },
    }, 'pool5'),
    giveSpace('handoffs', 'Hand-Offs', 'Give one of your members to a rival. Gain white equal to twice its cost. +1 white.', 2, 0),
    giveSpace('bequest', 'Bequest', 'Give one of your members to a rival. Gain white equal to its cost, +3 followers. +1 white.', 1, 3),
    // idea pipeline pool 14 (Nov 7): variations of the judges' favorites. Charity Drive: Handouts at 2 white each. Care
    // Packages: round I, up to 2, no rival gets more than 1. Hand-Me-Downs: round III, up to 2 members, no rival gets
    // more than 1 (Done after the first); the +1 white once, at the end.
    poolSpace({
      key: 'charitydrive', copyDoesIt: true, ring: 2, name: 'Charity Drive', text: 'Give up to 4 of your non-white resources to rivals, split as you choose. +2 white per resource given. +1 white.',
      estimate: (ctx, p) => 1 + 1.2 * Math.min(4, Object.entries(p.res).filter(([c]) => c !== W).reduce((a, [, n]) => a + n, 0)),
      resolve(ctx, p) { ctx.gain(p, W, 1, { fromAction: true }); giveForWhiteAsk(ctx, p, { name: 'Charity Drive', max: 4, each: 2, given: 0 }); },
    }, 'pool14'),
    poolSpace({
      key: 'carepackages', copyDoesIt: true, ring: 1, name: 'Care Packages', text: 'Give up to 2 of your non-white resources to rivals, no more than 1 each. +3 white per resource given. +1 white.',
      estimate: (ctx, p) => 1 + 2 * Math.min(2, Object.entries(p.res).filter(([c]) => c !== W).reduce((a, [, n]) => a + n, 0)),
      resolve(ctx, p) { ctx.gain(p, W, 1, { fromAction: true }); giveForWhiteAsk(ctx, p, { name: 'Care Packages', max: 2, each: 3, given: 0, once: true, to: [] }); },
    }, 'pool14'),
    // idea pipeline pool 15 (Nov 7, round 2): Care Packages made stronger, two ways (+4 white each; up to 3 gifts)
    ...[['giftbaskets', 'Gift Baskets', 2, 4], ['goodiebags', 'Goodie Bags', 3, 3]].map(([key, name, max, each]) => poolSpace({
      key, copyDoesIt: true, ring: 1, name, text: `Give up to ${max} of your non-white resources to rivals, no more than 1 each. +${each} white per resource given. +1 white.`,
      estimate: (ctx, p) => 1 + (each - 1) * Math.min(max, ctx.rivals(p).length, Object.entries(p.res).filter(([c]) => c !== W).reduce((a, [, n]) => a + n, 0)),
      resolve(ctx, p) { ctx.gain(p, W, 1, { fromAction: true }); giveForWhiteAsk(ctx, p, { name, max, each, given: 0, once: true, to: [] }); },
    }, 'pool15')),
    // pool 15: Bequest with one payoff, followers equal to the member's cost
    poolSpace({
      key: 'heirlooms', copyDoesIt: true, ring: 2, name: 'Heirlooms', text: 'Give one of your members to a rival. Gain followers equal to its cost. +1 white.',
      estimate: (ctx, p) => 1 + Math.max(0, ...ctx.membersOf(p).map(c => cost(ctx, c.uid) - 0.6 * c.def.f)),
      resolve(ctx, p) {
        const list = ctx.membersOf(p);
        if (!list.length) { ctx.log(`${p.name}'s Heirlooms: no members to give.`); ctx.gain(p, W, 1, { fromAction: true }); return; }
        ctx.choose(p, 'Heirlooms: give which of your members to a rival?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: cost(ctx, c.uid) - 0.6 * c.def.f,
        })), 'trading.handOff', { name: 'Heirlooms', each: 0, f: 0, fPer: 1 });
      },
    }, 'pool15'),
    // pool 15: Last Hurrah that can't fire a once-per-game ability (the verdict's change); any member may still go
    poolSpace({
      key: 'swansong', copyDoesIt: true, ring: 2, name: 'Swan Song', text: 'Discard one of your members, using its once-per-round On Use first, even if it\u2019s used up. +2 white.',
      estimate: (ctx, p) => 2 + Math.max(0, ...ctx.membersOf(p).map(c => (roundUse(c) ? 4 : 0) - (c.def.f || 1))),
      resolve(ctx, p) {
        ctx.gain(p, W, 2, { fromAction: true });
        const list = ctx.membersOf(p);
        if (!list.length) { ctx.log(`${p.name}'s Swan Song: no member to discard.`); return; }
        ctx.choose(p, 'Swan Song: discard which member (its once-per-round On Use first)?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name}${roundUse(c) ? ' (On Use, once per round)' : ''}`, kind: 'card', value: c.uid, hint: (roundUse(c) ? 4 : 0) - (c.def.f || 1),
        })), 'trading.lastHurrah', { name: 'Swan Song', roundOnly: true });
      },
    }, 'pool15'),
    poolSpace({
      key: 'handmedowns', copyDoesIt: true, ring: 3, name: 'Hand-Me-Downs', text: 'Give up to 2 of your members to rivals, no more than 1 each. Gain white equal to twice their cost. +1 white.',
      estimate: (ctx, p) => 1 + ctx.membersOf(p).map(c => giveValue(ctx, p, c, 2, 0)).sort((a, b) => b - a).slice(0, 2).filter(v => v > 0).reduce((a, b) => a + b, 0),
      resolve(ctx, p) {
        const list = ctx.membersOf(p);
        if (!list.length) { ctx.log(`${p.name}'s Hand-Me-Downs: no members to give.`); ctx.gain(p, W, 1, { fromAction: true }); return; }
        ctx.choose(p, 'Hand-Me-Downs: give which of your members to a rival?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: giveValue(ctx, p, c, 2, 0),
        })), 'trading.handOff', { name: 'Hand-Me-Downs', each: 2, f: 0, left: 2, to: [] });
      },
    }, 'pool14'),
    poolSpace({
      key: 'handouts', copyDoesIt: true, ring: 2, name: 'Handouts', text: 'Give up to 4 of your non-white resources to rivals, split as you choose. +3 white per resource given. +1 white.',
      estimate: (ctx, p) => 1 + 2 * Math.min(4, Object.entries(p.res).filter(([c]) => c !== W).reduce((a, [, n]) => a + n, 0)),
      resolve(ctx, p) { ctx.gain(p, W, 1, { fromAction: true }); giveForWhiteAsk(ctx, p, { name: 'Handouts', max: 4, each: 3, given: 0 }); },
    }, 'pool2'),
    // idea pipeline pool 7 (Nov 7, writer round 1): the On Use member, used once more on its way out. A space with no
    // members still gives +2 white. A member with no On Use is discarded with nothing first.
    poolSpace({
      key: 'lasthurrah', copyDoesIt: true, ring: 2, name: 'Last Hurrah', text: 'Discard one of your members, using its On Use first, even if it\u2019s used up. +2 white.',
      estimate: (ctx, p) => 2 + Math.max(0, ...ctx.membersOf(p).map(c => (hasUse(c) ? 4 : 0) - (c.def.f || 1))),
      resolve(ctx, p) {
        ctx.gain(p, W, 2, { fromAction: true });
        const list = ctx.membersOf(p);
        if (!list.length) { ctx.log(`${p.name}'s Last Hurrah: no member to discard.`); return; }
        ctx.choose(p, 'Last Hurrah: discard which member (its On Use first)?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name}${hasUse(c) ? ' (On Use)' : ''}`, kind: 'card', value: c.uid, hint: (hasUse(c) ? 4 : 0) - (c.def.f || 1) - (c.used ? 0 : 0.5),
        })), 'trading.lastHurrah');
      },
    }, 'pool7'),
    // REPLACE12 bot tests (Nov 4, quality loop, lane D2; pitches/D2-batch1.md), one at a time in Allowance's place.
    // Pawnshop: only followers you recruited or won can be turned in (the ones a steal can take; members' printed
    // followers stay), up to the round's number.
    ...(on12('pawnshop') ? [{
      key: 'pawnshop', copyDoesIt: true, ring: 1, name: 'Pawnshop', text: 'Turn up to 1 of your followers (2 in round II, 3 in round III) into 2 white each. +1 white.',
      byRound: { lines: ['Turn up to 1 of your followers into 2 white. +1 white.', 'Turn up to 2 of your followers into 2 white each. +1 white.', 'Turn up to 3 of your followers into 2 white each. +1 white.'] },
      estimate: (ctx, p) => 1 + Math.min(ctx.state.round, Math.max(0, p.bonus)) * (ctx.state.round < 3 ? 1 : 0.5),
      resolve(ctx, p) {
        const most = Math.min(ctx.state.round, Math.max(0, p.bonus));
        if (!most) { ctx.log(`${p.name}'s Pawnshop: no recruited or won followers to turn in.`); ctx.gain(p, W, 1, { fromAction: true }); return; }
        // bots: worth it before round III's buys run out, or to get under a rival for White's fewest-followers contest
        const opts = [];
        for (let k = most; k >= 0; k--) opts.push({ id: `n:${k}`, label: k ? `Turn ${k} follower${k > 1 ? 's' : ''} into ${2 * k} white` : 'Turn in none', kind: k ? 'choice' : 'pass', value: k, hint: k * (ctx.state.round < 3 ? 0.9 : 0.2) });
        ctx.choose(p, `Pawnshop: turn up to ${most} of your followers into 2 white each?`, opts, 'trading.pawnshop');
      },
    }] : []),
    // Low Profile: "fewest followers" as White's contest counts them (ties count).
    ...(on12('lowprofile') ? [{
      key: 'lowprofile', copyDoesIt: true, ring: 1, name: 'Low Profile', text: '+2 white in round I, +3 in round II, +4 in round III, doubled if you have the fewest followers (ties count).',
      byRound: { lines: ['+2 white, doubled if you have the fewest followers (ties count).', '+3 white, doubled if you have the fewest followers (ties count).', '+4 white, doubled if you have the fewest followers (ties count).'] },
      estimate: (ctx, p) => (ctx.state.round + 1) * (fewestFollowers(ctx, p) ? 2 : 1),
      resolve(ctx, p) {
        const low = fewestFollowers(ctx, p), n = (ctx.state.round + 1) * (low ? 2 : 1);
        ctx.gain(p, W, n, { fromAction: true });
        ctx.log(`${p.name}'s Low Profile: +${n} white${low ? ' (doubled: the fewest followers)' : ''}.`);
      },
    }] : []),
    // Pocket Money: rivals with more followers than you, as the score track shows them.
    ...(on12('pocketmoney') ? [{
      key: 'pocketmoney', copyDoesIt: true, ring: 1, name: 'Pocket Money', text: '+1 white per rival with more followers than you in round I, +2 per rival in round II, +3 in round III. +1 white.',
      byRound: { lines: ['+1 white per rival with more followers than you. +1 white.', '+2 white per rival with more followers than you. +1 white.', '+3 white per rival with more followers than you. +1 white.'] },
      estimate: (ctx, p) => 1 + ctx.state.round * richer(ctx, p),
      resolve(ctx, p) {
        const k = richer(ctx, p), n = ctx.state.round * k;
        if (n) ctx.gain(p, W, n, { fromAction: true });
        ctx.log(`${p.name}'s Pocket Money: ${k} rival${k === 1 ? '' : 's'} with more followers, +${n} white.`);
        ctx.gain(p, W, 1, { fromAction: true });
      },
    }] : []),
    {
      // Cory, 2026-11-11 10:33am Eastern: "Modest means is good. I like." Allowance's slot; name Claude's fill-in.
      // 10:44am: "make modest means +2. Keep in mind the +1 for the space." (+2 per rival, then the standard +1)
      // Counts members as White's contest does (memberCount: a card that counts as 2 counts 2).
      key: 'modestmeans', copyDoesIt: true, ring: 1, name: 'Modest Means', text: '+2 white per rival with more members than you. +1 white.',
      estimate: (ctx, p) => 1 + 2 * ctx.rivals(p).filter(o => ctx.memberCount(o) > ctx.memberCount(p)).length,
      resolve(ctx, p) {
        const k = ctx.rivals(p).filter(o => ctx.memberCount(o) > ctx.memberCount(p)).length;
        if (k) ctx.gain(p, W, 2 * k, { fromAction: true });
        ctx.log(`${p.name}'s Modest Means: ${k} rival${k === 1 ? '' : 's'} with more members, +${2 * k} white.`);
        ctx.gain(p, W, 1, { fromAction: true });
      },
    },
    // Allowance left the wheel Nov 11 (Modest Means took its slot); kept for old saves and its tests.
    ...(on12('pawnshop') || on12('lowprofile') || on12('pocketmoney') ? [] : [{
      pool: true,
      key: 'stipend', copyDoesIt: true, ring: 1, name: 'Allowance',
      text: '+3 white in round I, +4 in round II, +5 in round III. If you recruit a member this turn: +1 follower in round I, +2 in round II, +3 in round III.', // +1 white (Cory, Nov 6: "white needs a bigger white gain in the begining", "just buff those by +1 white")
      // Gather's shape (Cory, 2026-10-31: "just default to gather style for now for the rest"); was +1/2/3 followers and +2/3/4 white
      byRound: { lines: ['+3 white. If you recruit a member this turn: +1 follower.', '+4 white. If you recruit a member this turn: +2 followers.', '+5 white. If you recruit a member this turn: +3 followers.'] },
      estimate: ctx => ctx.state.round + 2 + ctx.state.round * 0.7,
      resolve(ctx, p) {
        ctx.gain(p, W, ctx.state.round + 2, { fromAction: true });
        (p.recruitFollowers ||= []).push({ n: ctx.state.round, name: 'Allowance', broker: true });
      },
    }]),
    swap11({
      key: 'splurge', copyDoesIt: true, ring: 1, name: 'Splurge', text: '+2 white. If you recruit a member this turn: +1 follower for every 2 resources you pay (every 1 in round II).', // +2 white (Cory, Nov 6: "just buff those by +1 white"); members only: Claude's default, 2026-10-27; +1 (Cory, Oct 28); per 1 in round II (Cory, Nov 1 1:39pm)
      byRound: { lines: ['+2 white. If you recruit a member this turn: +1 follower for every 2 resources you pay.', '+2 white. If you recruit a member this turn: +1 follower for every 1 resource you pay.', '+2 white. If you recruit a member this turn: +1 follower for every 2 resources you pay.'] },
      estimate: (ctx, p) => 2 + Math.floor(Math.min(totalRes(p) + 1, 7) / (ctx.state.round === 2 ? 1 : 2)) * fv(ctx) * 0.8,
      resolve(ctx, p) {
        ctx.gain(p, W, 2, { fromAction: true });
        p.perSpend = true;
      },
    }, {
      // Patron (REPLACE11=patron, Actions lane r4 batch, Nov 4): Splurge's place. Paid on the turn's first member recruit
      // (core.js recruitFollowersBonus); followers, not resources.
      key: 'patron', copyDoesIt: true, ring: 1, name: 'Patron', text: '+1 white. If you recruit a member this turn: each rival with more followers than you gives you 1 follower.',
      estimate: (ctx, p) => 1 + 1.6 * ctx.rivals(p).filter(o => ctx.followers(o) > ctx.followers(p)).length,
      resolve(ctx, p) {
        ctx.gain(p, W, 1, { fromAction: true });
        (p.recruitFollowers ||= []).push({ patron: true, name: 'Patron' });
      },
    }),
    swap11(swap11(swap14({
      key: 'exchange', copyDoesIt: true, ring: 1, name: 'Exchange', text: '+2 white. Then turn up to 1 resource (2 in round II, 3 in round III) into 2 followers each.', // +2 white (Cory, Nov 6: "just buff those by +1 white"); Cory, 2026-10-23: "up to", you can stop early
      byRound: { lead: '+2 white. Then:', lines: ['Turn up to 1 resource into 2 followers each.', 'Turn up to 2 resources into 2 followers each.', 'Turn up to 3 resources into 2 followers each.'] }, // white first (Cory, Nov 1 text audit)
      estimate: (ctx, p) => 2 + Math.min(ctx.state.round, totalRes(p) + 1) * (2 * fv(ctx) - 1),
      resolve(ctx, p) {
        ctx.gain(p, W, 2, { fromAction: true });
        exchangeStep(ctx, p, { left: ctx.state.round, done: 0 });
      },
    }, PAWN_SHOP), WHITE_EXCHANGE), LOAN),
    {
      key: 'farewell', copyDoesIt: true, ring: 2, name: 'Farewell', text: 'Discard one of your members. Gain its cost in followers. +1 white.', // "cast out": Cory, 2026-10-24
      estimate: (ctx, p) => 1 + Math.max(0, ...ctx.membersOf(p).map(c => buryValue(ctx, p, c, fv(ctx)))),
      resolve(ctx, p) {
        ctx.gain(p, W, 1, { fromAction: true });
        buryChoice(ctx, p, 'Farewell', 'followers');
      },
    },
    swap11({
      key: 'estatesale', copyDoesIt: true, ring: 2, name: 'Estate Sale', text: 'Discard one of your members. Gain its cost in white. +1 white.',
      estimate: (ctx, p) => 1 + Math.max(0, ...ctx.membersOf(p).map(c => buryValue(ctx, p, c, 1))),
      resolve(ctx, p) {
        ctx.gain(p, W, 1, { fromAction: true });
        buryChoice(ctx, p, 'Estate Sale', 'white');
      },
    }, swap11(YARD_SALE, CASH_OUT)),
    {
      key: 'cashin', copyDoesIt: true, ring: 3, name: 'Cash In', text: 'Turn all your white into followers. +1 white.',
      estimate: (ctx, p) => (p.res[W] || 0) * fv(ctx) + 1,
      resolve(ctx, p) {
        const n = p.res[W] || 0;
        if (n) {
          p.res[W] = 0;
          actionFollowers(ctx, p, n);
          ctx.log(`${p.name}'s Cash In: ${n} white became ${plural(n, 'follower')}.`);
          turned(ctx, p);
        } else ctx.log(`${p.name}'s Cash In: no white to turn into followers.`);
        ctx.gain(p, W, 1, { fromAction: true });
      },
    },
  ],

  handlers: {
    // pool 7: Day Trippers / Tourists, the discard or keep
    dayTrip(ctx, p, uid, data) {
      if (uid == null || !p.members.includes(uid)) return;
      const name = ctx.card(uid).def.name;
      ctx.asMember(p, data.name, () => {
        ctx.buryMember(p, uid);
        if (data.kind === 'white') ctx.gain(p, W, data.n); else p.bonus += data.n;
        ctx.log(`${p.name}'s ${data.name}: discards ${name}, +${data.n} ${data.kind === 'white' ? 'white' : 'followers'}.`);
      }, data.uid);
    },
    // pool 7: Last Hurrah, the member's On Use (used up or not), then the discard once that use is done
    lastHurrah(ctx, p, uid, data) {
      if (!p.members.includes(uid)) return;
      const c = ctx.card(uid), who = data?.name || 'Last Hurrah';
      if (data?.roundOnly ? roundUse(c) : hasUse(c)) { ctx.log(`${p.name}'s ${who}: uses ${c.def.name} one last time.`); ctx.freeUse(p, uid); }
      ctx.defer(p, 'trading.lastHurrahGo', { uid, name: who });
    },
    lastHurrahGo(ctx, p, _v, data) {
      if (!p.members.includes(data.uid)) return;
      const name = ctx.card(data.uid).def.name;
      ctx.buryMember(p, data.uid);
      ctx.log(`${p.name}'s ${data.name || 'Last Hurrah'}: discards ${name}.`);
    },
    // Hand-Offs / Bequest (pool 3): the member, then the rival (bots give to the rival with the fewest followers)
    slate(ctx, p, value, data) {
      if (value === 'done' || !p.members.includes(value)) { ctx.log(`${p.name}'s Clean Slate: discarded ${data.n} member${data.n === 1 ? '' : 's'}.`); return; }
      const name = ctx.card(value).def.name;
      ctx.buryMember(p, value);
      p.bonus += 3;
      ctx.log(`${p.name}'s Clean Slate: discarded ${name}, +3 followers.`);
      gotRidOf(ctx, p);
      slateStep(ctx, p, { n: data.n + 1 });
    },
    // pool 4: Next of Kin / Second Cousins' free recruit, one of the shop members offered
    kinRecruit(ctx, p, uid, data) {
      if (!ctx.state.shop.includes(uid) || !data.ok.includes(uid)) return;
      ctx.log(`${p.name}'s ${data.name}: recruits ${ctx.card(uid).def.name} for free.`);
      ctx.recruit(p, uid, { free: true });
    },
    handOff(ctx, p, uid, data) {
      if (data.member) {
        if (!p.members.includes(uid)) return;
        chooseRival(ctx, p, `${data.name}: give ${ctx.card(uid).def.name} to which rival?`, 'trading.handOffTo', { ...data, uid }, o => -ctx.followers(o));
        return;
      }
      if (uid == null || !p.members.includes(uid)) { ctx.gain(p, W, 1, { fromAction: true }); return; }
      if (data.to?.length) {
        const opts = ctx.rivals(p).filter(o => !data.to.includes(o.id)).map(o => ({ id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers)`, kind: 'player', value: o.id, hint: -ctx.followers(o) }));
        ctx.choose(p, `${data.name}: give ${ctx.card(uid).def.name} to which rival?`, opts, 'trading.handOffTo', { ...data, uid });
        return;
      }
      chooseRival(ctx, p, `${data.name}: give ${ctx.card(uid).def.name} to which rival?`, 'trading.handOffTo', { ...data, uid }, o => -ctx.followers(o));
    },
    handOffTo(ctx, p, oid, data) {
      const o = ctx.player(oid), uid = data.uid;
      if (!o || !p.members.includes(uid) || !ctx.moveMember(uid, p, o)) { ctx.gain(p, W, 1, { fromAction: true }); return; }
      const name = ctx.card(uid).def.name, k = cost(ctx, uid);
      ctx.log(`${p.name}'s ${data.name}: gives ${name} to ${o.name}.`);
      if (k * data.each) ctx.gain(p, W, k * data.each, { fromAction: true });
      if (data.f) p.bonus += data.f;
      if (data.fPer) p.bonus += k * data.fPer;
      // idea pipeline pool 14: Hand-Off Artists (a member: no +1 white); Hand-Me-Downs (a second member, to another rival)
      if (data.member) { ctx.log(`${p.name}'s ${data.name}: +${k * data.each} white.`); return; }
      if (data.left > 1) {
        ctx.log(`${p.name}'s ${data.name}: +${k * data.each} white.`);
        const to = [...(data.to || []), o.id], list = ctx.membersOf(p);
        if (list.length && ctx.rivals(p).some(r => !to.includes(r.id))) {
          ctx.choose(p, `${data.name}: give another member to a different rival?`, list.map(c => ({
            id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: giveValue(ctx, p, c, data.each, data.f),
          })).concat({ id: 'none', label: 'Give no more', kind: 'pass', value: null, hint: 0 }), 'trading.handOff', { ...data, left: data.left - 1, to });
          return;
        }
        ctx.gain(p, W, 1, { fromAction: true });
        return;
      }
      ctx.gain(p, W, 1, { fromAction: true });
      if (data.fPer) { ctx.log(`${p.name}'s ${data.name}: +${k * data.fPer} follower${k * data.fPer === 1 ? '' : 's'}, +1 white.`); return; }
      ctx.log(`${p.name}'s ${data.name}: +${k * data.each} white${data.f ? `, +${data.f} followers` : ''}, +1 white.`);
    },
    // idea pipeline pool 2: give resources to rivals, one at a time, for white (Cory, Nov 7: "playing around cash in")
    giveForWhite(ctx, p, v, data) {
      if (v !== 'done') {
        const [id, c] = v, o = ctx.player(id);
        if ((p.res[c] || 0) > 0 && !(data.once && (data.to || []).includes(id))) { p.res[c]--; o.res[c] = (o.res[c] || 0) + 1; data.given++; if (data.once) data.to = [...(data.to || []), id]; ctx.gain(p, W, data.each); ctx.log(`${p.name}'s ${data.name}: gave ${o.name} 1 ${c}, +${data.each} white.`); }
      }
      if (v === 'done' || data.given >= data.max) return;
      giveForWhiteAsk(ctx, p, data);
    },
    ...handlers12({
      pawnbrokers(ctx, p, k) {
        const n = Math.min(Number(k) || 0, 5, Math.max(0, p.bonus));
        if (!n) return;
        p.bonus -= n; ctx.gain(p, W, 2 * n);
        ctx.log(`${p.name}'s Pawnbrokers: ${n} follower${n > 1 ? 's' : ''} turned into ${2 * n} white.`);
      },
      pawnshop(ctx, p, k) {
        const n = Math.min(Number(k) || 0, Math.max(0, p.bonus));
        if (n) { p.bonus -= n; ctx.gain(p, W, 2 * n, { fromAction: true }); }
        ctx.log(n ? `${p.name}'s Pawnshop: ${n} follower${n > 1 ? 's' : ''} turned into ${2 * n} white.` : `${p.name}'s Pawnshop: turned in no followers.`);
        ctx.gain(p, W, 1, { fromAction: true });
      },
    }),
    ...handlers11({ yardSale, yardSaleAsk,
      landlordToken(ctx, p, v) {
        if (!v || !ctx.state.cards[v.uid]) return;
        ctx.state.cards[v.uid].landToken = { key: v.key, round: ctx.state.round };
        const [q, i] = v.key.split('-').map(Number), name = ctx.state.quadrants[q] && ctx.openSpaces().find(s => s.key === v.key)?.name;
        ctx.log(`${p.name}'s Landlord: a token on ${name || 'a space'} this round.`);
      },
      cashOut(ctx, p, k) { if (k > 0) sell(ctx, p, k, 2, { fromAction: true, why: 'cashed out', by: 'Cash Out' }); },
    }),
    ...handlers10({
      pauper(ctx, p, yes) {
        const n = p.res[W] || 0;
        if (!yes || !n) { ctx.log(`${p.name}'s Pauper: keeps ${n} white.`); return; }
        p.res[W] = 0; p.bonus += n;
        ctx.log(`${p.name}'s Pauper: ${n} white became ${plural(n, 'follower')}.`);
        turned(ctx, p);
      },
    }),
    ...handlers6({
      successor(ctx, p, uid, data) {
        if (!ctx.state.shop.includes(uid) || cost(ctx, uid) > data.max) return;
        ctx.log(`${p.name}'s Successors: recruits ${ctx.card(uid).def.name} for free.`);
        ctx.recruit(p, uid, { free: true });
      },
      inquire(ctx, o, uid, data) {
        const owner = ctx.player(data.owner);
        if (o.members.includes(uid)) {
          const name = ctx.card(uid).def.name;
          ctx.log(`${owner.name}'s Inquisitors: ${o.name} discards ${name}; ${owner.name} +2 followers.`);
          ctx.buryMember(o, uid, o);
          owner.bonus += 2;
        }
        inquireStep(ctx, owner, data.left);
      },
    }),
    ...handlers3({
      evict(ctx, p, uid) {
        const o = ctx.ownerOf(uid);
        if (!o || o === p) return;
        const c = ctx.card(uid), name = c.def.name, k = c.def.s + c.def.w;
        ctx.log(`${p.name}'s Evictors: discards ${o.name}'s ${name} to the discard pile.`);
        ctx.buryMember(o, uid, p);
        ctx.gain(p, W, k);
        ctx.gain(o, W, k);
        ctx.log(`${p.name}'s Evictors: ${p.name} and ${o.name} each +${k} white.`);
      },
    }),
    raiders(ctx, p, id) {
      const t = raidTargets(ctx, p).find(o => o.id === id);
      if (t && (p.res[W] || 0) >= 2) raidersSteal(ctx, p, t);
    },
    ...handlers14({
      brokerage(ctx, p, value) {
        const k = Math.min(Number(value) || 0, p.res[W] || 0);
        if (!k) { ctx.log(`${p.name}'s Brokers: kept their white.`); return; }
        p.res[W] -= k; p.bonus += 2 * k;
        ctx.log(`${p.name}'s Brokers: ${k} white into ${2 * k} followers.`);
      },
      pawnShop(ctx, p, value) {
        if (value !== 'done') {
          const k = p.res[value] || 0;
          if (k > 0) {
            p.res[value] = 0;
            actionFollowers(ctx, p, k);
            ctx.log(`${p.name}'s Pawn Shop: ${k} ${value} became ${k} follower${k === 1 ? '' : 's'}.`);
            turned(ctx, p);
          }
        } else ctx.log(`${p.name}'s Pawn Shop: turned nothing in.`);
        ctx.gain(p, W, 1, { fromAction: true });
      },
    }),
    loanPay(ctx, p, value) {
      if (value === 'pay' && (p.res[W] || 0) >= 3) { p.res[W] -= 3; ctx.log(`${p.name} paid back the Loan: -3 white.`); }
      else { p.bonus -= 3; ctx.log(`${p.name} didn't pay back the Loan: -3 followers.`); }
    },
    whiteExchange(ctx, p, value, data) {
      if (value === 'done' || !(p.res[W] > 0)) return;
      p.res[W] -= 1;
      if (data.done === 0) actionFollowers(ctx, p, 3); else p.bonus += 3;
      ctx.log(`${p.name}'s White Exchange: 1 white became 3 followers.`);
      if (data.done === 0) turned(ctx, p);
      whiteExchangeStep(ctx, p, { left: data.left - 1, done: data.done + 1 });
    },
    exchange(ctx, p, value, data) {
      if (value === 'done') return;
      p.res[value] -= 1;
      if (data.done === 0) actionFollowers(ctx, p, 2); else p.bonus += 2;
      ctx.log(`${p.name}'s Exchange: 1 ${value} became 2 followers.`);
      if (data.done === 0) turned(ctx, p);
      exchangeStep(ctx, p, { left: data.left - 1, done: data.done + 1 });
    },
    bury(ctx, p, uid, data) {
      if (!p.members.includes(uid)) return;
      const name = ctx.card(uid).def.name;
      const run = () => {
        const c = ctx.buryMember(p, uid);
        if (data.gain === 'white') { ctx.gain(p, W, c, { fromAction: !data.by }); ctx.log(`${p.name}'s ${data.what}: ${name} paid ${c} white.`); }
        else {
          if (data.by) p.bonus += c; else actionFollowers(ctx, p, c);
          ctx.log(`${p.name}'s ${data.what}: ${name} paid ${plural(c, 'follower')}.`);
          if (c) turned(ctx, p);
        }
        gotRidOf(ctx, p);
      };
      if (data.by) ctx.asMember(p, data.by, run); else run();
    },
    moneylender(ctx, p, uid) {
      if (!p.members.includes(uid)) return;
      const name = ctx.card(uid).def.name;
      ctx.asMember(p, 'Downsizers', () => { ctx.buryMember(p, uid); ctx.gain(p, W, 4); ctx.log(`${p.name}'s Downsizers: discarded ${name}, +4 white.`); });
      gotRidOf(ctx, p);
    },
    dowagers(ctx, p, value, data) {
      if (value === 'done' || !p.members.includes(value)) return;
      const name = ctx.card(value).def.name;
      ctx.asMember(p, 'Dowagers', () => { ctx.buryMember(p, value); p.bonus += 3; ctx.log(`${p.name}'s Dowagers: discarded ${name}, +3 followers.`); });
      gotRidOf(ctx, p);
      dowagersStep(ctx, p, { ...data, n: data.n + 1 });
    },
    buryPick(ctx, p, value, data) { if (value !== 'done') trading.handlers.bury(ctx, p, value, data); },
    appraise(ctx, p, value, data) {
      // Appraiser: first the member, then followers or white
      ctx.choose(p, `Appraiser: ${ctx.card(value).def.name} pays followers or white?`, [
        { id: 'pick:followers', label: `${plural(cost(ctx, value), 'follower')}`, kind: 'choice', value: 'followers', hint: fv(ctx) },
        { id: 'pick:white', label: `${cost(ctx, value)} white`, kind: 'choice', value: 'white', hint: ctx.state.round < 3 ? 1.5 : 0.5 },
      ], 'trading.appraiseGain', { uid: value });
    },
    appraiseGain(ctx, p, value, data) {
      trading.handlers.bury(ctx, p, data.uid, { gain: value, what: 'Appraiser', by: 'Appraiser' });
    },
    boom(ctx, p, value) {
      if (value === 'none') return;
      let n = 0;
      for (const r of ctx.state.resources) if (value === 'all' || r !== W) { n += p.res[r]; p.res[r] = 0; }
      const f = Math.floor(n * BOOM.per);
      actionFollowers(ctx, p, f);
      ctx.log(`${p.name}'s All In: ${n} resources became ${f} followers.`);
    },
    sell(ctx, p, k, data) { sell(ctx, p, k, data.each, { fromAction: true, why: data.why }); },
    buyLow(ctx, p, value, data) {
      if (value === 'done') return;
      buyLow(ctx, p, value, data.done === 0);
      buyLowStep(ctx, p, { left: data.left - 1, done: data.done + 1 });
    },
    raid(ctx, p, k, data) {
      const t = ctx.player(data.t);
      // under the card's name, so the leader's loss reads "P1's Raiders" in the results, as before
      ctx.asMember(p, 'Raiders', () => raid(ctx, p, t, Math.min(k, raidAmount(ctx, p, t))));
    },
    pawn(ctx, p, k) {
      const r = ctx.state.round, white = PAWN.each * k;
      if (white) ctx.gain(p, W, white, { fromAction: true });
      actionFollowers(ctx, p, r - k);
      ctx.log(`${p.name}'s Your Call: ${[r - k ? `+${plural(r - k, 'follower')}` : '', white ? `+${white} white` : ''].filter(Boolean).join(', ')}.`);
    },
  },

  // Cory's 12 (2026-10-22, design/spheres/white-members-2026-10-22.md). Prices are Claude's educated guesses
  // (white + any, followers printed); names marked new are Claude's fill-ins.
  members: [
    // idea pipeline pool 5 (Nov 7): members counted as the table counts them (a member worth 3 counts 3), this one
    // included. Round End before contests. Price a fill-in.
    // idea pipeline pool 14 (Nov 7): variations. Hand-Off Artists: Hand-Offs as a once-per-round member (one of your other
    // members). Anchorites: Hermits at 2 or fewer for +5. Wallflowers: fewest members at the table (ties count). Members
    // counted as the table counts them. Prices are fill-ins.
    pool(m('handoffartists', 'Hand-Off Artists', 3, 2, 'On Use, once per round: give one of your other members to a rival. Gain white equal to twice its cost.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const list = ctx.membersOf(owner).filter(c => c.uid !== card.uid);
        if (!list.length || !ctx.rivals(owner).length) { card.used = false; ctx.log(`${owner.name}'s Hand-Off Artists: no other member to give.`); return; }
        ctx.choose(owner, 'Hand-Off Artists: give which of your other members to a rival?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: giveValue(ctx, owner, c, 2, 0),
        })), 'trading.handOff', { name: 'Hand-Off Artists', each: 2, f: 0, member: true });
      },
      botActivate: (ctx, owner) => ctx.membersOf(owner).some(c => c.def.key !== 'handoffartists' && giveValue(ctx, owner, c, 2, 0) > 3),
    }), 'pool14'),
    // 3 or fewer since Nov 8 (Cory: "Plus five. Let's try that… owners won 14%… maybe we buff it… three or fewer members")
    pool(m('anchorites', 'Anchorites', 2, 1, 'Round End: if you have 3 or fewer members, +5 followers.', {
      onAllPlaced(ctx, owner) {
        const n = ctx.memberCount(owner);
        if (n > 3) return;
        ctx.asMember(owner, 'Anchorites', () => { owner.bonus += 5; ctx.log(`${owner.name}'s Anchorites: ${n} member${n === 1 ? '' : 's'}, +5 followers.`); });
      },
      ...see(info => ((info.owner?.members.length || 0) <= 2 ? 4 : 1) * endsAhead(info).length), // BOTSEE: while the cult stays tiny
    }), 'pool14'),
    // Test version (Nov 8): Last Hurrah as a member (Cory: "I'm interested to try last hurrah. I don't like it as a
    // space. Too specific for a space."). Name, wording and price are Claude's fill-ins; the use and the discard are
    // Last Hurrah's own (handlers lastHurrah / lastHurrahGo).
    pool(m('oldguard', 'Old Guard', 2, 2, 'On Use, once per round: discard another of your members, using its On Use first, even if it\u2019s used up. +2 white.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const list = ctx.membersOf(owner).filter(c => c.uid !== card.uid);
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Old Guard: no other member to discard.`); return; }
        ctx.gain(owner, W, 2);
        ctx.choose(owner, 'Old Guard: discard which member (its On Use first)?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name}${hasUse(c) ? ' (On Use)' : ''}`, kind: 'card', value: c.uid, hint: (hasUse(c) ? 4 : 0) - (c.def.f || 1) - (c.used ? 0 : 0.5),
        })), 'trading.lastHurrah', { name: 'Old Guard' });
      },
      botActivate: (ctx, owner) => ctx.membersOf(owner).some(c => c.def.key !== 'oldguard' && hasUse(c) && c.used),
    }), 'testset'),
    pool(m('wallflowers', 'Wallflowers', 2, 1, 'Round End: if no rival has fewer members than you, +4 followers.', {
      onAllPlaced(ctx, owner) {
        const n = ctx.memberCount(owner);
        if (ctx.rivals(owner).some(o => ctx.memberCount(o) < n)) return;
        ctx.asMember(owner, 'Wallflowers', () => { owner.bonus += 4; ctx.log(`${owner.name}'s Wallflowers: no rival has fewer members, +4 followers.`); });
      },
      ...see(info => 2 * endsAhead(info).length), // BOTSEE: about half the round ends
    }), 'pool14'),
    pool(m('hermits', 'Hermits', 2, 1, 'Round End: if you have 3 or fewer members, +3 followers.', {
      onAllPlaced(ctx, owner) {
        const n = ctx.memberCount(owner);
        if (n > 3) return;
        ctx.asMember(owner, 'Hermits', () => { owner.bonus += 3; ctx.log(`${owner.name}'s Hermits: ${n} member${n === 1 ? '' : 's'}, +3 followers.`); });
      },
      ...see(info => ((info.owner?.members.length || 0) <= 2 ? 3 : 1) * endsAhead(info).length), // BOTSEE: while the cult stays small
    }), 'pool5'),
    // idea pipeline pool 4 (Nov 7): a member that replaces itself when it leaves (swapped, stolen, given, released, cast
    // out); "its cost" is its printed cost as the table sees it. The recruit is from the shop, the former owner's pick.
    ...[['nextofkin', 'Next of Kin', 'up to', (k, c) => k <= c, 2, 2], ['secondcousins', 'Second Cousins', 'less than', (k, c) => k < c, 2, 1]].map(([key, name, how, fits, s, w]) => pool(m(key, name, s, w,
      `Whenever this member leaves your cult, recruit a member costing ${how} its cost, for free.`, {
        onLeave(ctx, owner, card) {
          const c = card.def.s + card.def.w, ok = ctx.shopCards().filter(x => fits(x.def.s + x.def.w, c));
          if (!ok.length) { ctx.log(`${owner.name}'s ${name}: left; no shop member costs ${how} ${c}.`); return; }
          ctx.asMember(owner, name, () => ctx.choose(owner, `${name} left your cult: recruit which shop member (costing ${how} ${c}), for free?`, ok.map(x => ({
            id: `card:${x.uid}`, label: `${x.def.name} (${x.def.s + x.def.w})`, kind: 'card', value: x.uid, hint: x.def.f + 0.3 * (x.def.s + x.def.w),
          })), 'trading.kinRecruit', { name, ok: ok.map(x => x.uid) }));
        },
        ...see(() => 1), // BOTSEE: a member back when it's taken or swapped; bots don't plan it
      }), 'pool4')),
    // idea pipeline pool 7 (Nov 7, writer round 1; prices are fill-ins, design-core bands). Day Trippers and Backpackers
    // (its +2 followers version): asked after the recruited member's On Recruit (core afterOwnRecruit). Ascetics: core
    // counted() (every member count: contests and color counts).
    ...[['daytrippers', 'Day Trippers', 'white', 3], ['tourists', 'Backpackers', 'followers', 2]].map(([key, name, kind, n]) => pool(m(key, name, 3, 2,
      `Whenever you recruit a member, you may discard it after its On Recruit, for +${n} ${kind === 'white' ? 'white' : 'followers'}.`, {
        afterOwnRecruit(ctx, owner, card, rec) {
          const keep = (rec.def.f || 1) + (lasting(rec.def) ? 3 : 0);
          ctx.choose(owner, `${name}: discard ${rec.def.name} for +${n} ${kind === 'white' ? 'white' : 'followers'}?`, [
            { id: `card:${rec.uid}`, label: `Discard ${rec.def.name}`, kind: 'card', value: rec.uid, hint: n * (kind === 'white' ? 1 : 1.3) + (fewestMembersCult(ctx) ? 1 : 0) },
            { id: 'keep', label: `Keep ${rec.def.name}`, kind: 'no', value: null, hint: keep },
          ], 'trading.dayTrip', { name, kind, n, uid: card.uid });
        },
        ...see(info => 3 * endsAhead(info).length),
      }), 'pool7')),
    // idea pipeline pool 12 (Nov 7; white.md variation A3; price a fill-in): asked after the On Recruit (core
    // afterOwnRecruit, only for a member that has one) or after the On Use (core afterOwnUse), its own choices first
    pool(m('retirees', 'Retirees', 3, 2, 'Whenever you use one of your members\u2019 On Recruit or On Use, you may discard it, for +3 white.', {
      afterOwnRecruit(ctx, owner, card, rec) { if (rec.def.onRecruited || rec.def.now) retireAsk(ctx, owner, card, rec); },
      afterOwnUse(ctx, owner, card, used) { if (used.uid !== card.uid) retireAsk(ctx, owner, card, used); },
      ...see(info => 3 * endsAhead(info).length),
    }), 'pool12'),
    pool(m('ascetics', 'Ascetics', 6, 3, 'Your other members count as 0 members.', { othersZero: true,
      ...see(info => 4 * endsAhead(info).length),
    }), 'pool7'),
    pool(m('almsgivers', 'Almsgivers', 3, 3, 'Round End: give up to 2 of your non-white resources to rivals, split as you choose. +3 white per resource given.', {
      onAllPlaced(ctx, owner) { ctx.asMember(owner, 'Almsgivers', () => giveForWhiteAsk(ctx, owner, { name: 'Almsgivers', max: 2, each: 3, given: 0 })); },
      ...see(info => 4 * endsAhead(info).length),
    }), 'pool2'),
    // Recluse moves here from Blue (Cory, 2026-10-25: "yes"), so a seat with few members has a payoff
    // Round End, not Game End (Cory, 2026-11-06: "Recluse should be Round End"): counted at each round's end
    m('recluse', 'Recluse', 2, 1, 'Round End: +2 followers per rival with more members than you.', { round: 1,
      onRoundEnd(ctx, owner) {
        const k = ctx.rivals(owner).filter(o => ctx.memberCount(o) > ctx.memberCount(owner)).length;
        if (!k) return;
        owner.bonus += 2 * k;
        ctx.log(`${owner.name}'s Recluse: ${k} rival${k === 1 ? ' has' : 's have'} more members: +${2 * k} followers.`);
      },
      ...see(info => endsAhead(info).length * 2),
    }),
    // Cory, 2026-10-25: cost 3 (was 4), so White has a cheap starter
    // REPLACE10 bot test (Nov 4, quality loop lane D): Landlord's place. 3 white + 1 any as a player sees it. "Fewest
    // followers" read at that moment, ties count, as Pauper and Desperado read it.
    ...add10(m('almoner', 'Almoner', 2, 1, 'On Recruit and Round Start: +2 white, or +4 if you have the fewest followers (ties count).', { now: true,
      onRoundStart(ctx, owner) {
        const last = ctx.state.players.every(o => ctx.followers(o) >= ctx.followers(owner)), n = last ? 4 : 2;
        ctx.gain(owner, W, n);
        ctx.log(`${owner.name}'s Almoner: +${n} white${last ? ' (fewest followers)' : ''}.`);
      },
    })),
    // Actions lane (Nov 4; /mnt/project-files/quality/pitches/actions-landlord.md), REPLACE11=landlord2 in Landlord's
    // place: rent on a wheel space. The token is the card's landToken {key, round}; a rival placing a minion there (a
    // joined spot counts, a Green copy doesn't: it sits on the Green space) pays the owner +3 white from the bank.
    ...add11(m('landlord2', 'Landlord', 2, 1, 'On Recruit and Round Start: put your token on a space. This round, whenever a rival takes it, +3 white.', { now: true,
      onRoundStart(ctx, owner, card) {
        const open = ctx.openSpaces();
        if (!open.length) return;
        ctx.choose(owner, 'Landlord: put your token on which space this round?', open.map(sp => ({
          id: `space:${sp.key}`, label: sp.name, kind: 'space', value: { uid: card.uid, key: sp.key },
          hint: sp.ring + ctx.rivals(owner).filter(o => ctx.countMembersOfColor(o, sp.qid) > 0).length,
        })), 'trading.landlordToken');
      },
      // BOTSEE: a token each round still ahead (this one too: On Recruit), taken by a rival about half the rounds (4 of 8 tokens in the A/B
      // games, seeds 501-512), 3 white each. Without it Hard bots bought it in 6 of 12 games against the old card's 11.
      ...see(i => endsAhead(i).reduce((a, r) => a + 0.5 * 3 * resAt(r), 0)),
      afterRivalAction(ctx, owner, card) {
        const t = ctx.state.cards[card.uid]?.landToken;
        if (!t || t.round !== ctx.state.round || ctx.placement?.key !== t.key) return;
        ctx.gain(owner, W, 3);
        ctx.log(`${owner.name}'s Landlord: rent on the token's space, +3 white.`);
      },
    })),
    // Lane B scale-up (Nov 4, paper b62: 17 vs 10): Landlord's place, still White's cheap starter. Fewest members, ties count.
    ...add8(m('squire', 'Squire', 2, 1, 'On Recruit and Round Start: +2 white, or +6 white if you have the fewest members (ties count).', { now: true,
      onRoundStart(ctx, owner) {
        const fewest = ctx.state.players.every(o => ctx.memberCount(o) >= ctx.memberCount(owner)), n = fewest ? 6 : 2;
        ctx.gain(owner, W, n);
        ctx.log(`${owner.name}'s Squire: +${n} white${fewest ? ' (fewest members)' : ''}.`);
      },
    })),
    // REPLACE9 bot test (Members C, Nov 4, batch bC9: paper 15 vs Landlord's 11): Landlord's place. 3 white + 1 any as a
    // player sees it. One of your other members costing 4 or less (3 before every member +1) to the bottom of the pile (as Farewell), +4 white; with
    // none, the use comes back. Bots cast out their cheapest-worth member, from round II.
    // Live in Raiders' slot as Downsizers (Cory, Nov 5: "i like moneylender. needs a different name. maybe slightly cheap"; name Claude's fill-in, 3 white + 2 any as a player sees it)
    m('moneylender', 'Downsizers', 2, 1, 'On Use, once per round: discard one of your members. +4 white.' /* Cory, Nov 5: "costing 4 or less" cut */, {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const list = ctx.membersOf(owner).filter(c => c.uid !== card.uid);
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Downsizers: no other member to discard.`); return; }
        ctx.choose(owner, 'Downsizers: discard which member for 4 white?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: -(c.def.f + (c.def.onDiscard ? -6 : 0)),
        })), 'trading.moneylender');
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && ctx.membersOf(owner).some(c => c.def.key !== 'moneylender' && c.def.f <= 1),
    }),
    // Cory, Nov 4 11:53am: "White should definitely have a member that gives an extra buy each turn ... limit the bonus
    // recruit to followers"; 12:45pm: "landlord is easily the worst white card". Landlord's place. Name, price and worth 1
    // are Claude's fill-ins. REPLACE14=barker.
    // trial barker-landlord (120 Hard games a side): taken 38%, owners won 46% (28 owners); White Cloak 24% -> 31%. Live.
    m('barker', 'Barker', 2, 2, 'Each time you recruit a member, you may also recruit followers.', // Cory, Nov 4 2:27pm: "you can always recruit followers, even if you recruited a member"; 2:28pm: "it should stack with blue actions"
      { followersTwice: true }), // a round I member as Landlord was
    m('shopkeeper', 'Landlord', 2, 1, 'On Recruit: +2 white. Round Start: +2 white.', { now: true, retired: true, ...old10('almoner'), ...old8('trading.shopkeeper'), ...old11('landlord2'), ...old9('trading.shopkeeper'),
      onRoundStart(ctx, owner) { ctx.gain(owner, W, 2); },
    }),
    // REPLACE10 bot test (Nov 4, quality loop lane D): Heiresses' place. 5 white + 4 any as a player sees it, worth 2.
    // Any other member of yours leaving your cult (stolen, swapped, given, cast out, traded in): core's cardLeaves.
    ...add10(m('widows', 'Widows', 4, 4, 'Whenever another of your members leaves your cult, +2 followers.', { f: 2,
      onOtherLeave(ctx, owner, card, gone) {
        owner.bonus += 2;
        ctx.log(`${owner.name}'s Widows: ${gone.def.name} left: +2 followers.`);
      },
    })),
    m('heiress', 'Heiresses', 4, 4, // 9 (Cory, Oct 30: balance run)
      'On Use, once per game: +1 white per member you have.', { f: 2, ...old10('widows'), ...old9('trading.heiress'),
      activate: 'game',
      onActivate(ctx, owner) {
        const n = ctx.memberCount(owner);
        ctx.gain(owner, W, n);
        ctx.log(`${owner.name} used Heiresses: +${n} white.`);
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 || (ctx.state.round === 2 && ctx.memberCount(owner) >= 5),
    }),
    // REPLACE9 bot test (Members C, Nov 4, batch bC5: paper 15 vs Heiresses' 11, White's set 14 -> 16): Heiresses' place.
    // 4 white + 3 any as a player sees it. Reads followers at Round End, before contests (onAllPlaced), ties count.
    ...add9(m('latebloomers', 'Late Bloomers', 3, 3, 'Round End: if you have the fewest followers (ties count), +3 white.', { f: 2,
      onAllPlaced(ctx, owner) {
        const mine = ctx.followers(owner);
        if (!ctx.state.players.every(o => o === owner || ctx.followers(o) >= mine)) return;
        ctx.gain(owner, W, 3);
        ctx.log(`${owner.name}'s Late Bloomers: fewest followers, +3 white.`);
      },
    })),
    // REPLACE9 bot test (Members C, Nov 4, batch bC6: paper 18 vs Heiresses' 14, White's set 13 -> 16): Heiresses' place.
    // 5 white + 4 any as a player sees it. One member at a time to the bottom of the pile (as Farewell), +3 followers
    // each, until you stop or have no other member; using it with no other member doesn't spend it (as Appraiser).
    ...add9(m('dowagers', 'Dowagers', 4, 4, 'On Use, once per game: discard any of your other members; +3 followers each.', { f: 2,
      activate: 'game',
      onActivate(ctx, owner, card) {
        if (!ctx.membersOf(owner).some(c => c.uid !== card.uid)) { card.used = false; ctx.log(`${owner.name}'s Dowagers: no other member to discard.`); return; }
        dowagersStep(ctx, owner, { uid: card.uid, n: 0 });
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 && ctx.membersOf(owner).filter(c => dowagersValue(ctx, owner, c) > 0).length >= 2,
    })),
    m('bulkbuyer', 'Bulk Buyer', 1, 2, 'Whenever you buy 5 or more followers, +1 follower.', { f: 2,
      onBuyFollowers(ctx, owner, card, buyer, tier) {
        if (buyer === owner && tier?.get >= 5) { owner.bonus += 1; ctx.log(`${owner.name}'s Bulk Buyer: +1 follower.`); }
      },
    }),
    m('broker', 'Brokers', 2, 2, 'Whenever a White action gives you followers, +2 followers.', { f: 3, brokerBonus: 2, ...old14('brokerage') }), // (Cory, Oct 29, balance run: +1 follower; Nov 11: +2)
    m('exporter', 'Exporters', 2, 4, 'Whenever you recruit a non-white member, +1 white.', { f: 2, retired: true, // Misers takes its place (Claude, under Cory's "use your judgement", 2026-11-03)
      onAnyRecruit(ctx, owner, card, by, recruited) {
        if (by === owner && recruited.uid !== card.uid && ctx.defOf(recruited).quadrant !== 'trading') ctx.gain(owner, W, 1);
      },
    }),
    // Replacement batch 1 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Exporters' place.
    // 4 white + 3 any as a player sees it.
    m('heirs', 'Misers', 3, 3, 'Game End: +1 follower per 2 white you hold.', { f: 2, ...old14('interest'), ...old14('thrifty'),
      onGameEnd: (ctx, owner) => Math.floor((owner.res[W] || 0) / 2),
    }),
    // REPLACE14 bot tests (Members E lane, Nov 4, BOTSMART A/Bs of above-bar paper ideas, Cory's yes to play them all):
    // Misers with interest (paper 15 vs 13, quality/pitches/E-misers-accomplice.md), same price.
    ...add14(m('interest', 'Misers', 3, 3, 'Round Start: +1 white per 3 white you hold.', { f: 2,
      onRoundStart(ctx, owner) {
        const k = Math.floor((owner.res[W] || 0) / 3);
        if (!k) { ctx.log(`${owner.name}'s Misers: under 3 white, no interest.`); return; }
        ctx.gain(owner, W, k);
        ctx.log(`${owner.name}'s Misers: +${k} white.`);
      },
      // BOTSEE: about 6 white held at each later round start, 2 white each, worth a follower each before round III ends
      ...see(info => 2 * [1, 2, 3].filter(r => r > info.round).length),
    })),
    // Misers at 1 per white (lane B's M2, paper 18 vs 16, quality/pitches/B-scale4.md; play A/B under "paper filters, play
    // ranks"), same price.
    ...add14(m('thrifty', 'Misers', 3, 3, 'Game End: +1 follower per white you hold.', { f: 2,
      onGameEnd: (ctx, owner) => owner.res[W] || 0,
    })),
    // Brokers with a round-end cash-out (paper 14 vs 13, quality/pitches/E-brokers.md), same price. After the round's last
    // placement and before contests, as Night Market's swap.
    ...add14(m('brokerage', 'Brokers', 2, 2, 'Round End: before contests are scored, you may turn up to 2 of your white into 2 followers each.', { f: 3,
      onAllPlaced(ctx, owner) {
        const max = Math.min(2, owner.res[W] || 0);
        if (!max) { ctx.log(`${owner.name}'s Brokers: no white to turn in.`); return; }
        ctx.choose(owner, 'Brokers: turn how many white into 2 followers each?', Array.from({ length: max + 1 }, (_, i) => max - i).map(n => ({
          id: `n:${n}`, label: n ? `${n} white → ${2 * n} followers` : 'Keep the white', kind: 'number', value: n, hint: n,
        })), 'trading.brokerage');
      },
      // BOTSEE: about 2 white each round end still ahead, 2 followers each
      ...see(info => 4 * endsAhead(info).length * 0.75),
    })),
    // REPLACE6 bot test (Nov 3, replacement batch 6): Raiders' place. 4 white + 1 any as a player sees it. Each rival with a
    // member, in seat order from your left, picks one of theirs; it goes to the bottom of the pile as their own cast-out
    // (Martyrs pays them, their Successors answers it, Pallbearers hears it). Not a steal, so Bodyguards doesn't stop it.
    ...add6(m('inquisitors', 'Inquisitors', 3, 1, 'On Use, once per game: each rival discards one of their members. +2 followers per member discarded.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const n = ctx.state.players.length, left = Array.from({ length: n - 1 }, (_, k) => (owner.id + 1 + k) % n);
        if (!left.some(id => ctx.player(id).members.length)) { card.used = false; ctx.log(`${owner.name}'s Inquisitors: no rival has a member.`); return; }
        ctx.log(`${owner.name} uses Inquisitors.`);
        inquireStep(ctx, owner, left);
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && ctx.rivals(owner).filter(o => o.members.length).length >= 2,
    })),
    m('raider', 'Raiders', 2, 2, /* Claude's fill-in price 4, was 5 (Cory, 2026-10-22: "probably too expensive") */ 'On Use, once per game: steal 4 followers from a rival. Pay them 2 white.', { n: 2, ...old6, ...old12('trading.raider'), // 2 members (Cory, Oct 29: "choir and raiders can be more"; 2 is Claude's start)
      activate: 'game',
      // any rival, the owner's pick (Cory, Nov 1: "Raiders shouldnt have to be from the leader")
      onActivate(ctx, owner, card) {
        const ts = raidTargets(ctx, owner);
        if (!ts.length || (owner.res[W] || 0) < 2) { card.used = false; ctx.log(`${owner.name}'s Raiders: ${!ts.length ? 'no rival has followers to steal' : 'needs 2 white'}.`); return; }
        if (ts.length === 1) return raidersSteal(ctx, owner, ts[0]);
        ctx.choose(owner, 'Raiders: steal 4 followers from which rival?', ts.map(t => ({
          id: `player:${t.id}`, label: `${t.name} (${ctx.followers(t)} followers)`, kind: 'player', value: t.id, hint: ctx.followers(t),
        })), 'trading.raiders');
      },
      botActivate: (ctx, owner) => { const t = raidTarget(ctx, owner, true); return !!t && sellable(t) >= 3 && (owner.res[W] || 0) >= 2; }, // bots still raid the leader
    }),
    // REPLACE12=pawnbrokers (lane D2, Nov 4, pitches/D2-batch2.md; paper 21, White's set 8 -> 15): Raiders' place, its
    // price and count. The followers turned in are the ones you recruited or won (Pawnshop's and Liquidator's rule), the
    // owner's pick of how many, on their own turn.
    ...add12(m('pawnbrokers', 'Pawnbrokers', 2, 2, 'On Use, once per game: turn up to 5 of your followers into 2 white each.', { n: 2, ...old6,
      activate: 'game',
      onActivate(ctx, owner, card) {
        const most = Math.min(5, Math.max(0, owner.bonus));
        if (!most) { card.used = false; ctx.log(`${owner.name}'s Pawnbrokers: no recruited or won followers to turn in.`); return; }
        const opts = [];
        for (let k = most; k >= 1; k--) opts.push({ id: `n:${k}`, label: `Turn ${k} follower${k > 1 ? 's' : ''} into ${2 * k} white`, kind: 'choice', value: k, hint: k * (ctx.state.round < 3 ? 0.9 : 0.2) });
        ctx.choose(owner, `Pawnbrokers: turn up to ${most} of your followers into 2 white each?`, opts, 'trading.pawnbrokers', { uid: card.uid });
      },
      botActivate: (ctx, owner) => ctx.state.round === 2 && owner.bonus >= 3,
    })),
    // new (Claude's names from here down)
    // REPLACE6 bot test (Nov 3, replacement batch 6): Cashier's place. 4 white + 1 any as a player sees it. Your own
    // cast-out of your own member (Farewell, Estate Sale, Appraiser; one Inquisitors makes you do): a shop member costing up
    // to its printed price, free (your recruit). A rival casting out your member (Evictors) isn't you casting out.
    ...add6(m('successors', 'Successors', 3, 1, 'Whenever you discard one of your members, recruit a shop member costing up to its cost, for free.', {
      onCastOut(ctx, owner, card, { from, actor, cost: k, name }) {
        if (from !== owner || actor !== owner) return;
        const list = ctx.shopCards().filter(c => cost(ctx, c.uid) <= k);
        if (!list.length) { ctx.log(`${owner.name}'s Successors: no shop member costs ${k} or less.`); return; }
        ctx.choose(owner, `Successors: recruit which shop member (costing up to ${k}) for free?`, list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: c.def.f * 1.5 + cost(ctx, c.uid),
        })), 'trading.successor', { max: k, was: name });
      },
    })),
    m('cashier', 'Cashier', 2, 0, 'On Recruit: turn all your white into followers.', { ...old6,
      onRecruited(ctx, owner) {
        const n = owner.res[W] || 0;
        if (!n) { ctx.log(`${owner.name}'s Cashier: no white to turn into followers.`); return; }
        owner.res[W] = 0; owner.bonus += n;
        ctx.log(`${owner.name}'s Cashier: ${n} white became ${plural(n, 'follower')}.`);
        turned(ctx, owner);
      },
    }),
    m('undertaker', 'Undertaker', 2, 2, 'Whenever you discard one of your members, +2 followers.', { onGotRidOf: 2 }),
    m('appraiser', 'Appraiser', 3, 2, 'On Use, once per game: discard one of your members. Gain its cost in followers or white.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const list = ctx.membersOf(owner).filter(c => c.uid !== card.uid);
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Appraiser: no other member to discard.`); return; }
        ctx.choose(owner, 'Appraiser: discard which member?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: buryValue(ctx, owner, c, fv(ctx)),
        })), 'trading.appraise');
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && ctx.membersOf(owner).some(c => c.def.key !== 'appraiser' && buryValue(ctx, owner, c, fv(ctx)) >= 2),
    }),
    // Cory, Nov 1: artifacts fire on any player's move ("Whenever any player buys followers, +1 white"): −8 → +1 in 400 games
    // Cory, Nov 3 8:52pm ("buff white a touch"): +2 on your own buys (Claude, under his go-with-your-gut; trial
    // cloaks-rw, holders 22% → 27% Normal, 21% → 28% Hard, 22% → 34% Very Hard)
    m('changer', 'Money Changers', 2, 1, 'Whenever you buy followers, +2 white.', { f: 2,
      onBuyFollowers(ctx, owner, card, buyer) {
        const CH = globalThis.process?.env?.CHANGER || 'self'; // live: own buys only, +2 (Cory, Nov 6 "ok")
        if (CH.startsWith('self') && buyer?.id !== owner.id) return; // CHANGER=self: bot test only (Nov 3); self3: +3 (Nov 6)
        const k = CH === 'self3' ? 3 : buyer?.id === owner.id && CH !== 'one' ? 2 : 1; // CHANGER=one: +1 on every buy, bot test only (Nov 4, with Most white)
        ctx.gain(owner, W, k);
        ctx.log(`${owner.name}'s ${ctx.cloakOr(card, 'Money Changers')}: +${k} white.`);
      },
    }),
    // Cory, 2026-11-09 10:16pm Eastern: "martyr should give +4 white +4 followers when discarded" (was "Whenever this member
    // leaves your cult, gain its cost in followers."): only a discard pays now, never a steal or a swap
    m('martyr', 'Martyrs', 2, 1, 'Whenever this member is discarded, +4 white and +4 followers.', { f: 3,
      onDiscard(ctx, owner, card) {
        ctx.asMember(owner, 'Martyrs', () => { ctx.gain(owner, W, 4); owner.bonus += 4; ctx.log(`${owner.name}'s Martyrs were discarded: +4 white, +4 followers.`); }, card.uid);
      },
    }),
    // Cory, 2026-10-24: "go deep card for every color" ("sure for now"); name and price Claude's fill-in, priced like Chronicler
    // REPLACE6 bot test (Nov 3, replacement batch 6): Old Money's place. 4 white + 1 any as a player sees it. Any rival's
    // cast-out to the bottom of the pile (Farewell, Estate Sale, Evictors, one Inquisitors makes them do, yours or theirs
    // cast out by them); its cost is its printed price.
    ...add6(m('pallbearers', 'Pallbearers', 3, 1, 'Whenever a rival discards one of their members, gain followers equal to half its cost, rounded up.', {
      onCastOut(ctx, owner, card, { actor, cost: k, name }) {
        if (!actor || actor === owner || !(k > 0)) return;
        const n = Math.ceil(k / 2);
        owner.bonus += n;
        ctx.log(`${owner.name}'s Pallbearers: ${actor.name} discarded ${name} (${k}): +${n} followers.`);
      },
    })),
    // REPLACE10 bot test (Nov 4, quality loop lane D): Old Money's place. 4 white + 3 any as a player sees it. Asked after
    // the round's last placement and before anything is scored (core's allPlaced step), only while the owner has the fewest
    // followers (ties count) and holds white: turning it in gives up the white it would have held for the contests.
    ...add10(m('pauper', 'Pauper', 3, 3, 'Round End: before contests are scored, if you have the fewest followers (ties count), you may turn all your white into followers.', {
      onAllPlaced(ctx, owner) {
        const n = owner.res[W] || 0;
        if (!n || !ctx.state.players.every(o => ctx.followers(o) >= ctx.followers(owner))) return;
        ctx.choose(owner, `Pauper: turn your ${n} white into ${plural(n, 'follower')}?`, [
          { id: 'yes', label: `Turn ${n} white into ${plural(n, 'follower')}`, kind: 'choice', value: true, hint: n },
          { id: 'no', label: `Keep the ${n} white`, kind: 'done', value: false, hint: 0 },
        ], 'trading.pauper');
      },
    })),
    // Lane B scale-up (Nov 4, paper b46: 15 vs 11): Old Money's place. Fewest members read at round start, ties count.
    ...add8(m('pennypincher', 'Penny Pincher', 1, 4, 'Round Start: if you have the fewest members, +3 white.', {
      onRoundStart(ctx, owner) {
        if (!ctx.state.players.every(o => ctx.memberCount(o) >= ctx.memberCount(owner))) return;
        ctx.gain(owner, W, 3);
        ctx.log(`${owner.name}'s Penny Pincher: fewest members: +3 white.`);
      },
    })),
    // REPLACE8=executor bot test (Nov 4, lane B; paper gate B-oldmoney-w at 14 vs 12, requalified under "paper filters,
    // play ranks"): Old Money's place, same price. Any member that moves out of a rival's cult (to any cult or the shop).
    ...add8(m('executor', 'Executor', 1, 4, 'Whenever a member leaves a rival\'s cult, +1 follower.', {
      onCultMove(ctx, owner, card, { uid, from }) {
        if (!from || from === owner) return;
        owner.bonus += 1;
        ctx.log(`${owner.name}'s Executor: ${ctx.card(uid).def.name} leaves ${from.name}'s cult: +1 follower.`);
      },
      // BOTSEE: about one rival member moved per 8 rival placements at a table with steals and swaps
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r], 0) * 0.12),
    })),
    m('oldmoney', 'Old Money', 1, 4, /* 6 (Cory, Oct 30) */ 'Game End: +1 follower per white member you have.', { ...old6, ...old10('pauper'), ...old8('trading.oldmoney'),
      onGameEnd: (ctx, owner) => ctx.countMembersOfColor(owner, 'trading'),
    }),
    // was Hoarder; new name (Cory, Nov 4: "I like hoarder! it should have a different name/image")
    m('hoarder', 'Magpie', 4, 3, 'On Use, once per game: turn all your resources into white.', { ...old3,
      activate: 'game',
      onActivate(ctx, owner, card) {
        let n = 0;
        for (const r of ctx.state.resources) if (r !== W && owner.res[r]) { n += owner.res[r]; owner.res[r] = 0; }
        if (!n) { card.used = false; ctx.log(`${owner.name}'s Magpie: nothing but white already.`); return; }
        owner.res[W] = (owner.res[W] || 0) + n;
        ctx.log(`${owner.name}'s Magpie: ${n} resources became white.`);
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 && totalRes(owner) - (owner.res[W] || 0) >= 3,
    }),
    // REPLACE3 bot test (Nov 3, replacement batch 3): Hoarder's place. 5 white + 3 any as a player sees it. Any rival's
    // member (casting out isn't a steal or a swap, so Bodyguards and Loyalists don't stop it); its cost is its printed
    // price. It leaves its cult as a cast-out does (Martyrs pays its owner), then both players gain the white.
    ...add3(m('evictors', 'Evictors', 4, 3, "On Use, once per game: discard a rival's member. You and that rival each gain white equal to its cost.", {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const list = ctx.rivals(owner).flatMap(o => ctx.membersOf(o).map(c => [o, c]));
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Evictors: no rival has a member.`); return; }
        ctx.choose(owner, "Evictors: discard which rival's member?", list.map(([o, c]) => ({
          id: `card:${c.uid}`, label: `${o.name}'s ${c.def.name} (${c.def.s + c.def.w})`, kind: 'member', value: c.uid,
          hint: (c.def.f || 1) * 1.5 + c.def.s + c.def.w,
        })), 'trading.evict');
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && ctx.rivals(owner).some(o => ctx.membersOf(o).some(c => c.def.s + c.def.w >= 6 + MORE + richUp(ctx.state))),
    })),
    // cut by Cory (2026-10-22); kept defined for old records and card tests
    m('dealer', 'Dealer', 2, 0, 'Whenever you sell followers, +1 white per follower sold.', {
      onSell(ctx, owner, card, k) { ctx.gain(owner, W, k); },
    }),
    m('pawnbroker', 'Pawnbroker', 2, 2, 'On Use, once per round: sell 1 follower you bought or won, for 3 white.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        if (!sellable(owner)) { card.used = false; ctx.log(`${owner.name}'s Pawnbroker: ${NOTHING_TO_SELL}.`); return; }
        sell(ctx, owner, 1, 3, { by: 'Pawnbroker' });
      },
      botActivate: (ctx, owner) => sellable(owner) > 0 && ctx.state.round < 3,
    }),
    m('safetynet', 'Rich Uncle', 2, 0, 'On Recruit: if you have no white, +3 white. Round Start: if you have no white, +3 white.', { now: true,
      onRoundStart(ctx, owner) { if (!owner.res[W]) ctx.gain(owner, W, 3); },
    }),
    m('tipster', 'Tipster', 4, 2, 'Whenever a rival buys followers, +1 white.', {
      onBuyFollowers(ctx, owner, card, buyer) { if (buyer !== owner) ctx.gain(owner, W, 1); },
    }),
    m('lender', 'Lender', 4, 0, 'When it joins you: +5 white. Game End: lose 2 followers.', {
      onRecruited(ctx, owner, card) { payLoan(ctx, owner, card); },
      onTurnEnd(ctx, owner, card) { if (!card.loanPaid) payLoan(ctx, owner, card); },
      onGameEnd: (ctx, owner) => -Math.min(2, sellable(owner)),
    }),
    m('magnate', 'Magnate', 2, 2, 'Game End: +1 follower per 3 white.', {
      onGameEnd: (ctx, owner) => Math.floor(owner.res[W] / 3),
    }),
    m('shareholder', 'Shareholder', 2, 1, 'Worth 3 followers.', { f: 3 }),
    m('liquidator', 'Liquidator', 2, 1, `On Use, once per game: sell up to ${LIQUIDATE.most} followers you bought or won, for ${LIQUIDATE.each} white each.`, {
      activate: 'game',
      onActivate(ctx, owner, card) {
        if (!sellable(owner)) { card.used = false; ctx.log(`${owner.name}'s Liquidator: ${NOTHING_TO_SELL}.`); return; }
        sell(ctx, owner, LIQUIDATE.most, LIQUIDATE.each, { why: 'liquidated', by: 'Liquidator' });
      },
      botActivate: (ctx, owner) => ctx.state.round === 2 && sellable(owner) >= 3,
    }),
    m('reinvestor', 'Reinvestor', 2, 2, 'Whenever you sell followers, your next member costs 2 less per follower sold.', {
      onSell(ctx, owner, card, k) { ctx.discount(owner, 2 * k, 'Reinvestor'); ctx.log(`${owner.name}'s Reinvestor: next member costs ${owner.discount} less.`); },
    }),
  ],
};

const cost = (ctx, uid) => { const d = ctx.card(uid).def; return d.s + d.w; };
// pool 7 helpers: an On Use member (its own or a copy's); a member with more than an On Recruit; a fewest members contest
/** Swan Song (pool 15): a once-per-round On Use, its own or a copied one. */
function roundUse(c) { return [c.def, c.copy && defById(c.copy)].some(d => d?.activate === 'round' && d.onActivate); }
function hasUse(c) { return [c.def, c.copy && defById(c.copy)].some(d => d?.activate && d.onActivate); }
function lasting(d) { return Object.keys(d).some(k => /^on[A-Z]/.test(k) && k !== 'onRecruited') || !!d.activate || !!d.botValue; }
function retireAsk(ctx, owner, card, c) {
  const keep = (c.def.f || 1) + (lasting(c.def) && !(c.def.activate === 'game') ? 3 : 0);
  ctx.choose(owner, `Retirees: discard ${c.def.name} for +3 white?`, [
    { id: `card:${c.uid}`, label: `Discard ${c.def.name}`, kind: 'card', value: c.uid, hint: 3 },
    { id: 'keep', label: `Keep ${c.def.name}`, kind: 'no', value: null, hint: keep },
  ], 'trading.dayTrip', { name: 'Retirees', kind: 'white', n: 3, uid: card.uid });
}
function fewestMembersCult(ctx) { return ctx.state.quadrants.includes('trading'); }
const defsOf = (ctx, c) => ctx.defsOf(c);
// Banker: "Whenever you turn resources or members into followers, +1 white" (once per turning)
function turned(ctx, p) {
  for (const c of ctx.abilitiesOf(p)) for (const d of defsOf(ctx, c)) if (d.onTurned) { ctx.gain(p, W, d.onTurned); ctx.log(`${p.name}'s ${d.name}: +${d.onTurned} white.`); }
}
// Undertaker: "Whenever you cast out one of your members, +2 followers"
// Dowagers: what casting out one member for 3 followers is worth to a bot (as buryValue, at a flat 3)
const dowagersValue = (ctx, p, c) => 3 * fv(ctx) - (c.def.f + (c.used || ctx.state.round === 3 ? 0 : 1) + (c.def.onDiscard ? -6 : 0));
function dowagersStep(ctx, p, data) {
  const list = ctx.membersOf(p).filter(c => c.uid !== data.uid);
  if (!list.length) return;
  const opts = list.map(c => ({ id: `card:${c.uid}`, label: `${c.def.name} (+3 followers)`, kind: 'card', value: c.uid, hint: dowagersValue(ctx, p, c) }));
  opts.push({ id: 'done', label: data.n ? 'Done' : 'Discard nobody', kind: 'done', value: 'done', hint: 0 });
  ctx.choose(p, `Dowagers: discard which member? (${data.n} so far)`, opts, 'trading.dowagers', data);
}
// Clean Slate (pool 5): one member at a time, as Dowagers asks
function slateStep(ctx, p, data) {
  const list = ctx.membersOf(p);
  if (!list.length) return;
  const opts = list.map(c => ({ id: `card:${c.uid}`, label: `${c.def.name} (+3 followers)`, kind: 'card', value: c.uid, hint: dowagersValue(ctx, p, c) }));
  opts.push({ id: 'done', label: data.n ? 'Done' : 'Discard nobody', kind: 'done', value: 'done', hint: 0 });
  ctx.choose(p, `Clean Slate: discard which member? (${data.n} so far)`, opts, 'trading.slate', data);
}
function gotRidOf(ctx, p) {
  for (const c of ctx.membersOf(p)) for (const d of defsOf(ctx, c)) if (d.onGotRidOf) { p.bonus += d.onGotRidOf; ctx.log(`${p.name}'s ${d.name}: +${d.onGotRidOf} followers.`); }
}
// What getting rid of a member is worth to a bot: its cost (in followers or white) less what it's worth kept
function buryValue(ctx, p, c, each) {
  const kept = c.def.f + (c.used || ctx.state.round === 3 ? 0 : 1) + (c.def.onDiscard ? -6 : 0);
  return cost(ctx, c.uid) * each - kept;
}
function buryChoice(ctx, p, what, gain) {
  const list = ctx.membersOf(p);
  if (!list.length) { ctx.log(`${p.name}'s ${what}: no members to send away.`); return; }
  const each = gain === 'white' ? 1 : fv(ctx);
  const opts = list.map(c => ({ id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'card', value: c.uid, hint: buryValue(ctx, p, c, each) }));
  // no "Keep them all": casting out is mandatory (Cory, Nov 4 11:42am: "should farewell and estate sale be mandatory?" ... "yes")
  ctx.choose(p, `${what}: discard which member?`, opts, 'trading.buryPick', { gain, what });
}
// Exchange: one resource at a time (you pick the color), 2 followers each, up to the round's limit or Done
function exchangeStep(ctx, p, data) {
  const held = ctx.state.resources.filter(r => p.res[r] > 0);
  if (data.left <= 0 || !held.length) return;
  const v = fv(ctx);
  const opts = held.map(r => ({
    id: `color:${r}`, label: `1 ${r} → 2 followers`, kind: 'color', value: r, spend: { [r]: 1 },
    hint: (2 * v - 1) + 0.01 * (p.res[r] - (r === W ? 3 : 0)),
  }));
  opts.push({ id: 'done', label: data.done ? 'Done' : 'Turn nothing', kind: 'done', value: 'done', hint: 0.1 });
  ctx.choose(p, `Exchange: turn which resource into 2 followers? (${data.left} left)`, opts, 'trading.exchange', data);
}

const totalRes = p => Object.values(p.res).reduce((a, b) => a + b, 0);
// Cheap Seats pays one resource at a time (you pick the color), until the round's limit or Done.
function buyLowStep(ctx, p, data) {
  const held = ctx.state.resources.filter(r => p.res[r] > 0);
  if (data.left <= 0 || !held.length) return;
  const v = fv(ctx);
  const opts = held.map(r => ({
    id: `color:${r}`, label: `1 ${r} → 1 follower`, kind: 'color', value: r, spend: { [r]: 1 },
    // bots pay from the biggest pile, white last (it scores here); they keep a little to recruit with until late
    hint: (v - 1) + 0.01 * (p.res[r] - (r === W ? 3 : 0) - (r === 'gold' ? 1 : 0)),
  }));
  opts.push({ id: 'done', label: data.done ? 'Done' : 'Trade nothing', kind: 'done', value: 'done', hint: totalRes(p) <= 3 && !lastTurn(ctx, p) ? 0.5 : 0.1 });
  ctx.choose(p, `Cheap Seats: pay which resource for 1 follower? (${data.left} left)`, opts, 'trading.buyLow', data);
}
function payLoan(ctx, owner, card) {
  card.loanPaid = true;
  ctx.gain(owner, W, 5);
  ctx.log(`${owner.name}'s Lender: +5 white.`);
}
// Cheap Seats trades one resource at a time; Brokers pays once per use of the action (on its first trade), not per trade.
function buyLow(ctx, p, color, first = true) {
  p.res[color] -= 1;
  if (first) actionFollowers(ctx, p, 1); else p.bonus += 1;
  ctx.log(`${p.name} traded 1 ${color} for 1 follower.`);
}
/** Followers from a White action, plus 1 per Brokers (a Doppelganger's copy counts too). Called once per action use. */
function actionFollowers(ctx, p, n) {
  if (!(n > 0)) return;
  let extra = 0;
  for (const c of ctx.membersOf(p)) for (const d of [c.def, c.copy ? defById(c.copy) : null]) extra += d?.brokerBonus || 0;
  p.bonus += n + extra;
  if (extra) ctx.log(`${p.name}'s Brokers: +${extra} follower${extra > 1 ? 's' : ''}.`);
}

/** The leader: most followers, and more than you. Ties go to whoever has more followers to sell. */
// guarded: only a leader who can be stolen from (Bodyguards, Lie Low: Cory, 2026-11-01, they block steals, not swaps)
function raidTarget(ctx, p, guarded = false) {
  const top = Math.max(...ctx.state.players.map(o => ctx.followers(o)));
  if (ctx.followers(p) >= top) return null;
  return ctx.rivals(p).filter(o => ctx.followers(o) === top && (!guarded || ctx.canSteal(p, o))).sort((a, b) => b.bonus - a.bonus)[0];
}
/** Raiders: rivals with followers who can be stolen from (Bodyguards, Lie Low block it) */
const raidTargets = (ctx, p) => ctx.rivals(p).filter(o => sellable(o) > 0 && ctx.canSteal(p, o));
function raidersSteal(ctx, owner, t) {
  const k = Math.min(4, sellable(t));
  owner.res[W] -= 2; t.res[W] = (t.res[W] || 0) + 2;
  t.bonus -= k; owner.bonus += k;
  ctx.log(`${owner.name}'s Raiders stole ${plural(k, 'follower')} from ${t.name} and paid 2 white.`);
  // a steal for the Magenta Cloak (Fence: "Whenever a rival steals from you, +2 magenta."; Cory, Nov 1: "Count raiders… that should count")
  const info = { thief: owner, victim: t, took: {}, n: k, followers: k, instance: ctx.stealInstance() };
  for (const o of ctx.state.players) for (const c of ctx.abilitiesOf(o)) {
    for (const d of [c.def, ...(c.copy ? [ctx.defOf({ def: c.copy })] : [])]) if (d.key === 'fence' && d.onSteal) ctx.asMember(o, d.name, () => d.onSteal(ctx, o, c, info), c.uid);
  }
}
function raid(ctx, owner, t, k) {
  if (!(k > 0)) return;
  owner.res[W] -= k; t.res[W] += k;
  t.bonus -= k; owner.bonus += k;
  ctx.log(`${owner.name}'s Raiders bought ${k} follower${k > 1 ? 's' : ''} from ${t.name} for ${k} white.`);
}
function raidAmount(ctx, p, t) {
  return Math.min(3, sellable(t), p.res[W]);
}

/** Inquisitors (REPLACE6): the next rival in `left` (seat order) with a member casts one out. */
function inquireStep(ctx, owner, left) {
  const at = left.findIndex(id => ctx.player(id).members.length);
  if (at < 0) return;
  const o = ctx.player(left[at]);
  ctx.choose(o, 'Inquisitors: discard which of your members?', ctx.membersOf(o).map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${cost(ctx, c.uid)})`, kind: 'member', value: c.uid,
    hint: -((c.def.f || 1) * 1.5 + cost(ctx, c.uid) * 0.5 + (c.used || c.def.vanilla ? 0 : 1)) + (c.def.onDiscard ? 6 : 0),
  })), 'trading.inquire', { owner: owner.id, left: left.slice(at + 1) });
}

export default trading;

let installed = false;
/** Register White with the engine (tests and scripts call this; index.js is untouched). */
export function install() {
  if (installed) return trading;
  registerQuadrant(trading);
  installed = true;
  return trading;
}
