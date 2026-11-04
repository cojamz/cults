// Silver: the host. Big gains for you, a little for everyone else. Most silver at round end takes the ring's followers.
// Every Silver space spills onto the table, and the spill is a choice: when you host, which color you hand
// out (it lifts everyone's count in that color's contest), and which rival gets your alms.
// Silver members pay the host; only Guest rewards sitting at someone else's table.
//
// "Give" is Silver's verb: anything a Silver space or member hands to another player. Gifts fire two
// module-level hooks on members: onGive (the giver's members) and onGiven (the receiver's members).
// Gold's Kickback also gives (Cory): gold.js fires the receiver's onGiven hooks itself.
import { defById } from './index.js';
import { add2, old2, handlers2 } from './replace2.js';
import { add6, old6 } from './replace6.js';
import { add8, old8, handlers8 } from './replace8.js';
import { swap11, handlers11 } from './replace11.js';
import { see, endsAhead, SEE_SPITE } from './botsee.js';

const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });
const S = 'silver';
// Live: C (Cory's pick 1, Nov 3 9:47pm). HOSTESSES=old plays the earlier card for comparison.
const HOSTESS_TEST = globalThis.process?.env?.HOSTESSES || 'C';
const HOSTESS_TEXT = {
  A: 'On Recruit and Round Start: give each rival 1 silver. +2 followers for each.',
  B: 'On Recruit and Round Start: give each rival 1 silver in round I, 2 in round II, 3 in round III. +1 follower per silver you give.',
  C: 'On Recruit and Round Start: give each rival 1 silver. +1 follower for each.', // Cory's pick 1, Nov 3 9:47pm
};
const SOC_N = Number(globalThis.process?.env?.SOCIALITES_N || 2);
const others = (ctx, p) => ctx.rivals(p);
const otherColors = ctx => ctx.state.resources.filter(c => c !== S);

// a Doppelganger runs the hooks of the member it copies too
const effDefs = c => (c.copy ? [c.def, defById(c.copy)] : [c.def]);
// the artifact too: Silver's artifact is Caterer, whose gift hook never fired from the artifact (bug bash, Nov 1)
function hooks(ctx, p, name) {
  const out = [];
  for (const c of ctx.abilitiesOf(p)) for (const d of effDefs(c)) if (d[name]) out.push([c, d]);
  return out;
}

/** Give n of a color to one player. Fires the receiver's onGiven hooks. */
function giveTo(ctx, giver, to, color, n, once = null) {
  if (!(n > 0)) return;
  ctx.gain(to, color, n);
  // run as the member, so what it gives traces to it (Guest)
  for (const [c, d] of hooks(ctx, to, 'onGiven')) ctx.asMember(to, d.name, () => d.onGiven(ctx, to, c, giver, color, n));
  if (color === S) for (const o of ctx.state.players) for (const [c, d] of hooks(ctx, o, 'onAnyGifted')) ctx.asMember(o, d.name, () => d.onAnyGifted(ctx, o, c, giver, once));
}
/** Give n of a color to every other player. One gift for the giver's onGive hooks. */
function giveAll(ctx, giver, color, n) {
  if (!(n > 0)) return;
  for (const o of others(ctx, giver)) giveTo(ctx, giver, o, color, n);
  afterGive(ctx, giver, color);
}
/** One gift from giver to one player, as any sphere gives (Gold's Kickback): receiver's and giver's gift hooks fire. */
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
const lowest = (ctx, p) => Math.min(...others(ctx, p).map(o => ctx.followers(o)));
/** Rivals gain up to `left` silver from the bank, split as the giver picks one at a time. */
function shareStep(ctx, p, data) {
  const given = data.given || {};
  const total = Object.values(given).reduce((s, n) => s + n, 0);
  const left = data.max - total;
  if (left <= 0) return shareDone(ctx, p, data);
  const low = lowest(ctx, p);
  const opts = others(ctx, p).map(o => ({
    id: `player:${o.id}`, label: `${o.name} +1 silver`, kind: 'player', value: o.id,
    // bots spread to whoever trails
    hint: (ctx.followers(o) === low ? 1 : 0) - 0.2 * (given[o.id] || 0),
  }));
  opts.push({ id: 'done', label: total ? 'Done' : 'Give nothing', kind: 'done', value: 'done', hint: -5 });
  ctx.choose(p, `${data.who}: which rival gains 1 silver? You get ${data.per} ${data.per === 1 ? 'follower' : 'followers'} for each, ${left} more at most`, opts, 'silver.share', { ...data, given });
}
function shareDone(ctx, p, data) {
  const given = data.given || {};
  const total = Object.values(given).reduce((s, n) => s + n, 0);
  if (!total) { ctx.log(`${p.name}'s ${data.who}: gave nothing.`); return; }
  for (const [id, n] of Object.entries(given)) giveTo(ctx, p, ctx.player(Number(id)), S, n);
  afterGive(ctx, p, S);
  p.bonus += total * data.per;
  const list = Object.entries(given).map(([id, n]) => `${ctx.player(Number(id)).name} +${n}`).join(', ');
  ctx.log(`${p.name}'s ${data.who}: ${list} silver, then +${total * data.per} followers.`);
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
function polishPick(ctx, p, left, who = 'Polish') {
  ctx.choose(p, `${who}: +1 of which color? (${left} to pick)`, otherColors(ctx).map(c => ({
    id: `color:${c}`, label: `+1 ${c}`, kind: 'color', value: c, hint: -(p.res[c] || 0),
  })), 'silver.polish', { left, who });
}

/**
 * Gift Shop (REPLACE11, Actions lane, Nov 4; /mnt/project-files/quality/pitches/actions-polish.md), in Polish's place:
 * "Give a shop member to a rival. +3 silver in round I, +5 in round II, +7 in round III." The member arrives in the
 * rival's cult as a gift, not their recruit (no On Recruit, as a member a rival's move brings in), and the row refills.
 */
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

export const silverActions = [
  {
    key: 'toast', ring: 1, name: 'Toast', text: '+3 silver in round I, +6 in round II, +9 in round III. Each rival +1 silver in round I, +2 in round II, +3 in round III.',
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
  swap11({
    key: 'polish', copyDoesIt: true, ring: 1, name: 'Polish', text: 'Turn 2 of your silver into 4 of any colors.',
    estimate: (ctx, p) => Math.min(2, p.res[S] || 0) * 1 + 0.5,
    resolve(ctx, p) {
      // with 1 silver, 1 turns into 2 (Claude's reading of "2 silver -> 4 wild")
      const k = Math.min(2, p.res[S] || 0);
      if (!k) { ctx.log(`${p.name}'s Polish: no silver to turn.`); return; }
      p.res[S] -= k;
      ctx.log(`${p.name}'s Polish: ${k} silver into ${2 * k} of any colors.`);
      polishPick(ctx, p, 2 * k);
    },
  }, GIFT_SHOP),
  {
    key: 'partygifts', ring: 1, name: 'Party Gifts', copyDoesIt: true, text: 'Give rivals up to 3 silver from the bank, split as you choose. +2 followers per silver you give.',
    estimate: ctx => 2 * 6 - spillCost(ctx, 1) * 3,
    resolve(ctx, p) { shareStep(ctx, p, { who: 'Party Gifts', max: 3, per: 2 }); },
  },
  {
    key: 'favors', ring: 2, name: 'Potluck', text: '+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver.',
    estimate: ctx => 2 + (ctx.state.players.length - 1) - spillCost(ctx, 2),
    resolve(ctx, p) {
      hostGain(ctx, p, 2);
      favorAll(ctx, p);
    },
  },
  {
    key: 'tongue', copyDoesIt: true, ring: 2, name: 'Sweet Talk', text: '+3 silver. Then turn as many of your silver as you want into other colors.',
    estimate: () => 3.5,
    resolve(ctx, p) {
      hostGain(ctx, p, 3);
      turnStep(ctx, p, { who: 'Sweet Talk', max: null, each: 1, done: 0 });
    },
  },
  {
    key: 'largesse', copyDoesIt: true, ring: 3, name: 'Largesse', text: 'Give rivals up to 10 silver from the bank, split as you choose. +1 follower per silver you give.',
    estimate: ctx => { const n = ACT.has('largesse6') ? 6 : 10; return 2 * n - spillCost(ctx, 1) * n; },
    resolve(ctx, p) { shareStep(ctx, p, { who: 'Largesse', max: ACT.has('largesse6') ? 6 : 10, per: 1 }); },
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
    ...handlers11({ giftShopCard, giftShopTo }),
    godparents(ctx, p, value) {
      const [uid, oid] = value, o = ctx.player(oid);
      if (!p.members.includes(uid) || !o || o === p) return;
      const c = ctx.card(uid), k = c.def.s + c.def.w, name = c.def.name;
      if (!ctx.moveMember(uid, p, o, { actor: p })) return;
      p.bonus += k;
      ctx.log(`${p.name}'s Godparent: gives ${name} to ${o.name}: +${k} followers.`);
    },
    ...handlers8({
      guestofhonor(ctx, p, value) {
        if (value === 'none') return;
        const [uid, oid] = value, o = ctx.player(oid);
        if (!p.members.includes(uid) || !o || o === p) return;
        const name = ctx.card(uid).def.name;
        if (!ctx.moveMember(uid, p, o, { actor: p })) return;
        p.bonus += 4;
        ctx.log(`${p.name}'s Guest of Honor: gives ${name} to ${o.name}: +4 followers.`);
      },
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
    polish(ctx, p, c, data) {
      const who = data.who || 'Polish';
      ctx.gain(p, c, 1);
      ctx.log(`${p.name}'s ${who}: +1 ${c}.`);
      if (data.left > 1) polishPick(ctx, p, data.left - 1, who);
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
    m('guest', 'Hangers-On', 4, 4, 'Whenever a rival gives you something, +1 more of it.', { f: 2, n: 2, retired: true, // Godparent takes its place (Claude, under Cory's "use your judgement", 2026-11-03) // worth 2 (Cory, Nov 1)
      onGiven(ctx, owner, card, giver, color) { if (giver !== owner) ctx.gain(owner, color, 1); },
    }),
    // Replacement batch 6 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Hangers-On's place. 4 silver + 1 any as a player sees it. Any of your
    // members (Godparent itself too) to any rival; its cost is its printed price. A gift, not a steal or a swap
    // (Loyalists and Bodyguards don't stop it): an arrival for the rival (Old Maid's −5 lands on them), and Martyrs pays
    // you as it leaves. A used card stays used.
    m('godparents', 'Godparent', 3, 1, 'On Use, once per game: give one of your members to a rival. Gain followers equal to its cost.', { round: 1, // a round I member as Hangers-On was (bot-tested in a later round; Nov 3)
      activate: 'game',
      onActivate(ctx, owner, card) {
        const opts = [];
        for (const c of ctx.membersOf(owner)) for (const o of others(ctx, owner)) opts.push({
          id: `give:${c.uid}:${o.id}`, label: `${c.def.name} (${c.def.s + c.def.w}) to ${o.name}`, kind: 'choice', value: [c.uid, o.id],
          hint: c.def.s + c.def.w - (c.def.f || 1) * 1.5 - (c.used || c.def.vanilla ? 0 : 1) + (c.def.onJoined ? 5 : 0) - ctx.followers(o) * 0.01,
        });
        ctx.choose(owner, 'Godparent: give which of your members to which rival?', opts, 'silver.godparents');
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
    m('hostesses', 'Hostesses', 3, 2, HOSTESS_TEXT[HOSTESS_TEST] || 'On Recruit and Round Start: give each rival 1 silver. +1 follower per rival who then holds more silver than you.', { f: 2, now: true,
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
    // Cory, Nov 1: "whenever a player is gifted silver +1 silver", then +2 after the test read −4; one gift per space counts once
    // words and +1 (Cory, Nov 1, 2:25pm: "Whenever silver is gifted, +1 silver."), once per gift event
    m('caterer', 'Caterer', 2, 2, 'Whenever silver is gifted, +1 silver.', {
      onAnyGifted(ctx, owner, card, giver, once) {
        const k = once || `${ctx.state.moves}:${giver.id}`;
        if (card.catered === k) return;
        card.catered = k; ctx.gain(owner, S, Number(globalThis.process?.env?.CATERER || 1)); // CATERER=n: bot test only (Nov 3)
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
    // REPLACE8 bot test (Nov 4, quality loop lane B, pitches/B-toastmaster.md 2, passed paper gate b8 at 19 vs 10):
    // Toastmaster's place, same price. After the Silver space is done; any member of yours costing 3 or less (as a
    // player sees the cost), itself included; "you may": giving none is fine. A gift, as Godparent's (Well-Wishers hears it).
    ...add8(m('guestofhonor', 'Guest of Honor', 1, 1, 'Whenever you take a Silver space, you may give a rival one of your members costing 3 or less. +4 followers.', {
      afterAction(ctx, owner, card, qid) {
        if (qid !== S) return;
        const cheap = ctx.membersOf(owner).filter(c => c.def.s + c.def.w <= 3);
        if (!cheap.length) return;
        const ww = ctx.membersOf(owner).some(c => c.def.id === 'silver.wellwishers' || c.def.key === 'wellwishers') ? 3 : 0;
        const opts = [];
        for (const c of cheap) for (const o of others(ctx, owner)) opts.push({
          id: `give:${c.uid}:${o.id}`, label: `${c.def.name} (${c.def.s + c.def.w}) to ${o.name}`, kind: 'choice', value: [c.uid, o.id],
          // bots shed a used-up or plain cheap member, never one still paying; the rival it helps least
          // giving Guest of Honor itself ends its run: bots do that only in round III
          hint: 4 + ww - (c.def.f || 1) * 1.5 - (c.used || c.def.vanilla || !c.def.afterAction ? 0 : 3) - (c.uid === card.uid && ctx.state.round < 3 ? 6 : 0) - ctx.followers(o) * 0.01,
        });
        opts.push({ id: 'none', label: 'Give nothing', kind: 'pass', value: 'none', hint: 0 });
        ctx.choose(owner, 'Guest of Honor: give one of your members costing 3 or less to a rival, for +4 followers?', opts, 'silver.guestofhonor');
      },
    })),
    m('toastmaster', 'Toastmaster', 1, 1, 'Whenever you take a Silver space, +1 follower.', { ...old8('silver.toastmaster'),
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
    ...add8(m('wellwishers', 'Well-Wishers', 4, 3, "Whenever one of your members goes to a rival's cult, +3 followers.", { f: 2, n: 2,
      onCultMove(ctx, owner, card, { uid, from, to }) {
        if (from !== owner || !to || to === owner) return;
        owner.bonus += 3;
        ctx.log(`${owner.name}'s Well-Wishers: ${ctx.card(uid).def.name} goes to ${to.name}: +3 followers.`);
      },
      // BOTSEE: about one of your members moved to a rival per 12 rival placements (seat-1 games, Nov 4), 3 followers each
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r], 0) * 0.08 * 3),
    })),
    // Silver 2.0 members (Cory, 2026-11-01). Prices are fill-ins until the balance run.
    m('smoothtalker', 'Smooth Talkers', 5, 5, 'Your silver pays for any color.', { silverPaysColor: true, f: 2, n: 2, ...old2 }),
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
    m('philanthropists', 'Philanthropist', 3, 2, 'On Recruit: give rivals up to 4 silver from the bank, split as you choose. +1 follower per silver you give.', {
      onRecruited(ctx, owner) { shareStep(ctx, owner, { who: 'Philanthropist', max: 4, per: 1 }); },
    }),
    m('polisher', 'Polisher', 1, 1, 'On Use, once per game: turn up to 3 silver into 2 of any colors each.', { ...old8('silver.polisher'),
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
    m('creditors', 'Creditor', 3, 2, 'On Use, once per round: a rival you choose gives you 2 followers, then gains 3 silver.', { round: 1, // a round I member as Collector was (bot-tested in a later round; Nov 3)
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
    m('debtcollector', 'Debt Collectors', 4, 3, 'On Use, once per game: each rival gives you 2 silver, if they have it.', { f: 2, n: 2, ...old8('silver.debtcollector'), // worth 2 (Cory, Nov 1)
      activate: 'game',
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
    ...add8(m('socialites', 'Socialites', 4, 3, `Whenever a rival recruits paying silver, +${SOC_N} follower${SOC_N === 1 ? '' : 's'}.`, { f: 2,
      onRecruit(ctx, owner, card, by, what) {
        if (by === owner || !(what?.spent?.[S] > 0)) return;
        owner.bonus += SOC_N;
        ctx.log(`${owner.name}'s Socialites: +${SOC_N} follower${SOC_N === 1 ? '' : 's'} (${by.name} paid silver).`);
      },
      // BOTSEE: rivals pay some silver on about a quarter of their recruits once gifts are flowing
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r] * [0.1, 0.25, 0.3][r - 1], 0) * SOC_N),
    })),
    m('highsociety', 'High Society', 4, 3, 'Whenever a rival takes a Silver space, +1 follower.', { f: 2, ...old8('silver.highsociety'), // Nov 4 (Claude, under Cory's go-with-your-gut; was a game-end count of rivals with more silver)
      afterRivalAction(ctx, owner, card, qid) { if (qid === S) { owner.bonus += 1; ctx.log(`${owner.name}'s High Society: +1 follower.`); } },
      // BOTSEE: about a quarter of the rival placements still to come land on a Silver space
      ...see(i => [1, 2, 3].reduce((a, r) => a + i.rivalByRound[r], 0) * 0.25),
    }),
    m('grandhost', 'Grand Host', 8, 4, 'Double the silver you gain from Silver spaces.', { hostDouble: true }),
    // balance pass 1 (bench, both bots agree; design/eval/balance-pass-1.md): 12 → 6 (the most one pass moves);
    // pass 2's pooled midpoint (5.2) rounds back to 6, so it stays (design/eval/balance-pass-2.md)
    m('saint', 'Patron Saint', 4, 2, 'Game End: +1 follower per 2 silver members, anyone’s.', {
      onGameEnd: ctx => Math.floor(ctx.state.players.reduce((s, o) => s + ctx.countMembersOfColor(o, S), 0) / 2),
    }),
  ],
};

export default silver;
