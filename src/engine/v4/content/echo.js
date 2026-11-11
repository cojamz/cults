import { richUp } from './price.js';
// Green copies actions, including copy actions whose targets are chosen afresh.
// Each action pays +1 green; each branch excludes actions already in that branch.
//
// The copy rule: a copy gives the space's own printed gain, as its chip shows: the resources and discount the
// action itself handed its taker, never their members' bonuses and never what they paid. A free member copies as
// "a face-up member costing no more, free". A space that took or traded (Collect Debts, Swap Sides…) is copied by doing the
// action yourself. Green's one rule, printed once (the sphere's `rule`, the rulebook and the glossary's "copy"), not
// on each card: copy choices can chain, but never revisit an action. Occupied center actions can be copied too.
//
// Prototype notes (engine changes this module would like, see design/spheres/echo.md):
// - The engine doesn't record what a space gave. install() wraps every action's resolve and every handler,
//   and records the gains/free recruits made through that content's own ctx (members run on a fresh ctx, so
//   their bonuses never land on a chip). The real fix in core.js: an 'act'-scoped ctx that tags gains and free
//   recruits with the space, kept per round on state (this round and last round, for the board's chips).
// - Member defs keep quadrant 'echo' (core pays the colored part in quadrant('echo').resource = green), so
//   color counts (Potluck, countMembersOfColor) see Green members.
import { registerQuadrant, allQuadrantIds, quadrant, defById, spacesOf } from './index.js';
import { add2, old2, handlers2 } from './replace2.js';
import { add4, old4, handlers4 } from './replace4.js';
import { add10, old10, handlers10, on10 } from './replace10.js';
import { add9, old9 } from './replace9.js';
import { see, endsAhead, resAt, SEE_SPITE, SEE_RING } from './botsee.js';
import { swap11, handlers11 } from './replace11.js';
import { pool, poolSpace } from './pool.js';

// IMPRESSIONIST=n: bot test only; the game pays 1 (Claude, under Cory's "use your judgement", Nov 3; was 2, Cory Nov 1)
// IMPRESSIONIST=self2: bot test of "Whenever you copy an action, +2 of its color." (Cory, Nov 6 question; off in the game)
const IMPRESSION_RAW = String(globalThis.process?.env?.IMPRESSIONIST || 'self2m'); // live since Cory's Nov 6 "ok"
const IMPRESSION_SELF = IMPRESSION_RAW.startsWith('self');
const IMPRESSION = parseInt(IMPRESSION_RAW.replace('self', ''), 10) || 1; // self2m: members copied pay too (Cory, Nov 6)
const impressed = (ctx, p) => (IMPRESSION_SELF ? [p] : ctx.state.players);
const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });
const costOf = def => def.s + def.w;
const COPYIST = 2; // +2, the version Cory short-listed (live Nov 5; was REPLACE10 copyist2)

// ---------- the yield ledger ----------
// state.echo = { round, now: { 'q-i': entry }, last: { ... } (last round's chips, kept for the board), open: key | null }
// entry = { key, p, ring, name, color, idx, echo, res: { color: n }, discount, members: [cost, ...], redo }
// What a space records is its own printed gain for the taker: the amounts its action hands over (before the
// taker's members change them), the discount it gives, and the members it recruits free. Gains from the
// taker's members (Prospector, Underdog, Mentor…) run on a fresh context and are never recorded.
// A space that took or traded (anyone's resources or members went down) records redo: a copy does the action itself.
export function ledger(state) {
  if (!state.echo) state.echo = { round: state.round, now: {}, last: {}, open: null };
  const L = state.echo;
  if (L.round !== state.round) {
    L.last = L.round === state.round - 1 ? L.now : {};
    L.now = {}; L.round = state.round; L.open = null;
  }
  return L;
}
const snapAll = (state, p) => ({ res: state.players.map(o => ({ ...o.res })), members: state.players.map(o => [...o.members]), bonus: state.players.map(o => o.bonus), discount: p.discount });
function settle(state, e) {
  const p = state.players[e.p];
  e.discount = Math.max(0, p.discount - e.before.discount);
  const lost = state.players.some((o, i) => Object.keys(e.before.res[i]).some(r => (o.res[r] || 0) < e.before.res[i][r])
    || e.before.members[i].some(u => !o.members.includes(u))
    // selling followers (White) is a trade too: a copy must sell its own
    || o.bonus < (e.before.bonus?.[i] ?? o.bonus));
  if (lost) e.redo = true;
}
const quadrantDef = (state, uid) => defById(state.cards[uid].def);
// The window for a space stays open while its follow-up choices run, until the taker's buy step. The buy step that
// follows the space carries the space's key (win, set in wrapAction); once that step has been taken off the queue,
// choices made in the buy step (Understudy's copy, a Doppelganger's pick, a tied Mentor pick) never land on the chip.
function windowOpen(state, e) {
  const next = state.queue.find(t => t.t !== 'choose' && t.t !== 'content');
  return !!next && next.t === 'buy' && next.p === e.p && next.win === e.key;
}
// Record what this context hands the taker (the content code's own calls only).
function track(ctx, e) {
  const gain = ctx.gain, recruit = ctx.recruit;
  // Only the action's own printed gains (fromAction) land on the chip; member hooks the action sets off through
  // this same ctx (Caterer, Foreman, Dealer…) don't. `printed` is the gain before a member doubled it (Grand Host).
  ctx.gain = (t, c, n, o) => {
    if (t.id === e.p && n > 0 && o?.fromAction) { const k = o.printed ?? n; if (k > 0) e.res[c] = (e.res[c] || 0) + k; }
    return gain(t, c, n, o);
  };
  ctx.recruit = (t, uid, o) => {
    // a member the taker paid for (Snap Up, Half Price) is a trade: a copy does the action itself
    if (t.id === e.p && o?.paid) e.redo = true;
    else if (t.id === e.p && o?.free) { e.members.push(costOf(quadrantDef(ctx.state, uid)) + richUp(ctx.state)); /* as the shop shows it (Richer: +2) */ e.members.sort((x, y) => x - y); }
    return recruit(t, uid, o);
  };
}
function wrapAction(qid, a, idx) {
  if (a.resolve.__echo) return;
  const orig = a.resolve;
  const wrapped = function (ctx, p) {
    const L = ledger(ctx.state);
    let key = `${ctx.state.quadrants.indexOf(qid)}-${idx}`;
    // a second worker on a taken space (Squatter) gets its own chip, so the first taker's stays copyable
    if (L.now[key] && L.now[key].p !== p.id && ctx.state.squats?.[key]?.includes(p.id)) key = `${key}+${p.id}`;
    const e = { key, p: p.id, ring: a.ring, name: a.name, color: qid, idx, echo: !!a.echo, before: snapAll(ctx.state, p), res: {}, discount: 0, members: [] };
    L.seq = (L.seq || 0) + 1; e.seq = L.seq;
    L.now[key] = e; L.open = key; L.lastBy = key;
    // a space whose gain is an extra turn (Overtime, free since 2026-10-15) hands over nothing a chip can hold:
    // a copy does the action itself, as it did when Overtime was paid for
    if (a.copyDoesIt) e.redo = true;
    track(ctx, e);
    withPath(ctx, [actionKey(key)], () => orig.call(this, ctx, p), key, null);
    settle(ctx.state, e);
    // mark the taker's buy step that follows: the window stays open until it starts (windowOpen)
    const next = ctx.state.queue.find(t => t.t !== 'choose' && t.t !== 'content');
    if (next && next.t === 'buy' && next.p === p.id) next.win = key;
  };
  wrapped.__echo = true;
  wrapped.__orig = orig;
  a.resolve = wrapped;
}
/** The test version (content/testset.js): a candidate space standing in a live space's place, wrapped for the yield
 *  ledger at that place (so Echo, Reprise and Medley copy it as they would the live one), and gated like the rest so a
 *  table without Green runs it bare. Returns a copy; the candidate itself stays as the bot games use it. */
export function wrapInPlace(qid, a, idx) {
  const c = { ...a };
  const bare = a.resolve.__orig || a.resolve;
  c.resolve = bare;
  wrapAction(qid, c, idx);
  const w = c.resolve;
  const gated = function (ctx, p) { return (ctx.state.quadrants.includes('echo') ? w : bare).call(this, ctx, p); };
  Object.assign(gated, { __echo: true, __gated: true, __orig: bare });
  c.resolve = gated;
  return c;
}
function wrapHandler(q, k) {
  const orig = q.handlers[k];
  if (orig.__echo) return;
  const wrapped = function (ctx, p, value, data) {
    const L = ctx.state.echo;
    const e = L && L.open && L.now[L.open];
    const open = e && windowOpen(ctx.state, e);
    if (open) track(ctx, e);
    if (data?.__echoPath) withPath(ctx, data.__echoPath, () => orig.call(this, ctx, p, value, data), data.__echoOrigin, data.__echoCopier ?? null);
    else orig.call(this, ctx, p, value, data);
    if (open) settle(ctx.state, e);
  };
  wrapped.__echo = true;
  q.handlers[k] = wrapped;
}
// st: the table (all piles shows a space's piles version); without it, the printed space
const actionOf = (e, st) => spacesOf(st, e.color)[e.idx];

// ---------- reading and copying ----------
const spaceTotal = e => Object.values(e.res).reduce((a, b) => a + b, 0);
/** Rough worth of copying an entry for player p right now (bots and hints). */
export function entryValue(ctx, e, p = null) {
  // Estimates never recurse through a copy action's estimate: cycles are choices, not infinite bot work.
  if (e.echo) return 2 + (e.color === 'echo' ? VARIANT.plus : 0);
  if (e.redo) { const a = actionOf(e, ctx.state); return p && a.estimate ? a.estimate(ctx, p) : spaceTotal(e); }
  let v = spaceTotal(e) + e.discount * 0.9;
  const shop = ctx.shopCards();
  for (const c of e.members) {
    const fits = shop.filter(x => costOf(x.def) <= c);
    if (fits.length) v += Math.max(...fits.map(x => x.def.f * 1.4 + costOf(x.def) * 0.8));
  }
  return v;
}
const copyable = e => e.echo || e.redo || spaceTotal(e) > 0 || e.discount > 0 || e.members.length > 0;
// c.ability: an Impersonator holding the member's ability counts as it
const has = (ctx, p, key) => (key === 'tuningfork' ? ctx.abilitiesOf(p) : ctx.membersOf(p)).filter(c => [c.def.id, c.copy, c.ability].includes(`echo.${key}`)).length;
const actionKey = key => key.split('+')[0];
const pathNow = ctx => ledger(ctx.state).path || [];
// Agents: no one can copy its owner's actions, the owner included (Cory, 2026-11-11, replacing Oct 29's rivals-only reading)
// Cory, 2026-11-11 1:31pm Eastern: "your actions can't be copied" rather than "rivals cant copy your actions" (you can't copy them either)
const protectedAction = (ctx, e) => has(ctx, ctx.player(e.p), 'agents') > 0;
/** Could `by` copy ledger entry e right now (Green's own rule: copyable, not under Agents, not already in this chain)? */
export const canCopy = (ctx, e, by) => allowed(ctx, e, by);
const allowed = (ctx, e, by, path = pathNow(ctx)) => copyable(e) && !protectedAction(ctx, e, by) && !path.includes(actionKey(e.key));
// The active context exists only while content resolves. Every queued choice/continuation gets its
// own immutable path, so siblings don't poison each other's targets and save/load needs no closures.
// copier: while a copy does a space itself (a redo, Cover, a copied Echo), the copier's Wallflower and Translator act on
// every resource that space hands them ({ p, x, green }), except a gain marked unscaled (turned, not given: Polish's
// turn, Cory Nov 11: "just the +3 should double"); it rides on queued choices like the path, so Polish's
// four picks, made one at a time, are each doubled. Null outside such a copy; a nested copy() starts fresh.
function withPath(ctx, path, fn, origin = ledger(ctx.state).origin, copier = ledger(ctx.state).copier ?? null) {
  const L = ledger(ctx.state), previous = { path: L.path, origin: L.origin, copier: L.copier };
  // base: ctx.gain without any copier's change, so a fresh copy inside a copy is doubled once, not twice
  const choose = ctx.choose, defer = ctx.defer, gain = ctx.gain, base = gain.__copyBase || gain;
  L.path = path; L.origin = origin;
  if (copier) L.copier = copier; else delete L.copier;
  const stamp = data => data?.__echoPath ? data : ({ ...(data || {}), __echoPath: [...path], __echoOrigin: origin ?? null, ...(copier ? { __echoCopier: copier } : {}) });
  ctx.choose = (p, prompt, options, h, data, extra) => choose(p, prompt, options, h, stamp(data), extra);
  ctx.defer = (p, h, data, cause) => defer(p, h, stamp(data), cause);
  if (copier) ctx.gain = Object.assign((t, c, n, o) => (t.id === copier.p && n > 0 ? base(t, copier.green ? 'green' : c, o?.unscaled ? n : n * copier.x, o) : base(t, c, n, o)), { __copyBase: base });
  else ctx.gain = base;
  try { return fn(); }
  finally {
    ctx.choose = choose; ctx.defer = defer; ctx.gain = gain;
    if (previous.path === undefined) delete L.path; else L.path = previous.path;
    if (previous.origin === undefined) delete L.origin; else L.origin = previous.origin;
    if (previous.copier === undefined) delete L.copier; else L.copier = previous.copier;
  }
}
/** What p's copy-changing members do to a copy that does its space itself; null when nothing changes. */
function copierOf(ctx, p) {
  const x = has(ctx, p, 'wallflower') ? 2 : 1, green = translating(ctx, p);
  return x > 1 || green ? { p: p.id, x, green } : null;
}
const translating = (ctx, p) => ctx.membersOf(p).some(c => [c.def.id, c.copy, c.ability].includes('echo.translator') && c.on !== false);
/** The chip on a taken space: exactly what a copy gives. */
export const describe = (ctx, e) => {
  if (e.echo) return `${actionOf(e, ctx?.state).text} Choose again.`;
  if (e.redo) return `do ${e.name} yourself`;
  const bits = Object.entries(e.res).map(([c, n]) => `+${n} ${c}`);
  if (e.discount) bits.push(`${e.discount} off`);
  // say so when no face-up member is that cheap right now, so the chip never promises a member you can't get
  // in words, never "a member (≤6)" (w3a #34)
  for (const c of e.members) {
    const m = c > 0 ? `a member costing ${c} or less` : 'a free member';
    bits.push(ctx.shopCards().some(x => costOf(x.def) <= c) ? m : `${m} (none face up)`);
  }
  return bits.join(', ') || 'nothing';
};
/**
 * Targets: 'previous' is the immediately preceding placement; 'any' is any occupied action;
 * 'own' and 'rival' use minion ownership. Agents and the current branch exclude targets.
 * 'since' remains for legacy callers. skip excludes the current placement while a copy action or recruit resolves.
 */
export const VARIANT = { plus: 1 }; // Every Green action pays its inherent green, including each traversal in a chain.
/**
 * Actions lane r4 batch (Nov 4; pitches/actions-r4-batch.md), REPLACE11 by own key, in Build Up's place:
 * Crowd "+2/3/4 green, +1 more per minion on Green spaces" (this one counts; a joined spot is a minion there too), and
 * Royalties "+3/4/5 green. This round, whenever a rival copies this space, +2 green" (a tab state.royalties
 * [{ pid, round }], paid in heard() when a rival's copy is of Royalties; closed at Round End in core.js).
 */
/** p's own minions on Green spaces (a joined spot counts): Bench Warmers, pool 5 */
const myGreenMinions = (ctx, p) => Object.entries(ctx.state.slots).filter(([k, o]) => o === p.id && ctx.state.quadrants[+k.split('-')[0]] === 'echo').length
  + Object.entries(ctx.state.squats || {}).filter(([k]) => ctx.state.quadrants[+k.split('-')[0]] === 'echo').reduce((a, [, v]) => a + v.filter(o => o === p.id).length, 0);
const greenMinions = ctx => Object.entries(ctx.state.slots).filter(([k]) => ctx.state.quadrants[+k.split('-')[0]] === 'echo').length
  + Object.entries(ctx.state.squats || {}).filter(([k]) => ctx.state.quadrants[+k.split('-')[0]] === 'echo').reduce((a, [, v]) => a + v.length, 0);
const CROWD = {
  key: 'crowd', ring: 1, name: 'Crowd', text: '+2 green in round I, +3 in round II, +4 in round III, +1 more per minion on Green spaces.',
  byRound: { lines: ['+2 green', '+3 green', '+4 green'], rest: '+1 more per minion on Green spaces.' },
  estimate: ctx => 1 + ctx.state.round + greenMinions(ctx) + 1,
  resolve(ctx, p) { plus(ctx, p); const n = greenMinions(ctx); ctx.gain(p, 'green', ctx.state.round + n, { fromAction: true }); ctx.log(`${p.name}'s Crowd: ${n} minion${n === 1 ? '' : 's'} on Green spaces.`); },
};
const ROYALTIES = {
  key: 'royalties', ring: 1, name: 'Royalties', text: '+3 green in round I, +4 in round II, +5 in round III. This round, whenever a rival copies this space, +2 green.',
  byRound: { lines: ['+3 green', '+4 green', '+5 green'], rest: 'This round, whenever a rival copies this space, +2 green.' },
  estimate: ctx => 2 + ctx.state.round + 1,
  resolve(ctx, p) {
    plus(ctx, p); ctx.gain(p, 'green', ctx.state.round + 1, { fromAction: true });
    (ctx.state.royalties ||= []).push({ pid: p.id, round: ctx.state.round });
  },
};
const plus = (ctx, p) => { if (VARIANT.plus) ctx.gain(p, 'green', VARIANT.plus, { fromAction: true }); };
/** Build Up: every minion on Green's spaces right now, anyone's. */
function greenCount(ctx) {
  const st = ctx.state, qi = (st.quadrants || []).indexOf('echo');
  if (qi < 0) return 0;
  let n = 0;
  for (const key of Object.keys(st.slots || {})) if (key.startsWith(`${qi}-`)) n++;
  for (const [key, list] of Object.entries(st.squats || {})) if (key.startsWith(`${qi}-`)) n += list.length;
  return n;
}
/** Whether p's minion is on Build Up already (its estimate then needn't add "this one"). */
function onGreen(ctx, p) {
  const st = ctx.state, qi = (st.quadrants || []).indexOf('echo');
  const k = Object.keys(st.slots || {}).find(key => key.startsWith(`${qi}-`) && spacesOf(st, 'echo')?.[+key.split('-')[1]]?.key === 'chant');
  return k != null && st.slots[k] === p.id;
}
/** The entries `targets` would offer but Agents stops (empty when Agents isn't why), so an empty copy can say so. */
export function agentsBlocked(ctx, p, which, skip = null) {
  const L = ledger(ctx.state), path = pathNow(ctx);
  const fits = e => copyable(e) && protectedAction(ctx, e, p) && !path.includes(actionKey(e.key));
  if (which === 'previous') { const e = previousEntry(ctx, skip); return e && fits(e) ? [e] : []; }
  return Object.values(L.now).filter(e => e.key !== skip && fits(e) && (which === 'own' ? e.p === p.id : which === 'rival' ? e.p !== p.id : true));
}
/** " (Agents prevents copying Gather)" when Agents is why nothing could be copied, else "". */
const agentsWhy = (ctx, blocked) => (blocked.length ? ` (${[...new Set(blocked.map(e => `${ctx.player(e.p).name}'s Agents prevents copying ${e.name}`))].join('; ')})` : '');
export function targets(ctx, p, which, skip = null) {
  const L = ledger(ctx.state);
  const pool = Object.values(L.now);
  if (which === 'previous') {
    const previous = previousEntry(ctx, skip);
    return previous && allowed(ctx, previous, p) ? [previous] : [];
  }
  const since = which === 'since' ? Math.max(0, ...pool.filter(e => e.p === p.id && e.key !== skip).map(e => e.seq || 0)) : 0;
  return pool.filter(e => e.key !== skip && allowed(ctx, e, p) && (which === 'since' ? e.p !== p.id && (e.seq || 0) > since : which === 'own' ? e.p === p.id : which === 'rival' ? e.p !== p.id : true));
}
/**
 * Greatest Hits / Tribute Band replay occupied own actions in placement order. A branch can
 * include copy actions, but not its ancestors. The UI/log explain every blocked action.
 */
export function ownPlan(ctx, p, self = null) {
  const L = ledger(ctx.state);
  const mine = Object.values(L.now).filter(e => e.p === p.id && e.key !== self).sort((a, b) => (a.seq || 0) - (b.seq || 0));
  const take = mine.filter(e => allowed(ctx, e, p));
  const skip = mine.filter(e => !allowed(ctx, e, p)).map(e => ({ e, why: protectedAction(ctx, e, p) ? 'protected' : pathNow(ctx).includes(actionKey(e.key)) ? 'chain' : 'nothing' }));
  return { take, skip };
}
const SKIP_WHY = { protected: 'Agents prevents copying', chain: 'already in this chain', nothing: 'gave nothing' };
/** Group skipped actions by the rule that blocked them. */
export function skipWords(skip) {
  return ['protected', 'chain', 'nothing'].map(why => {
    const names = skip.filter(x => x.why === why).map(x => x.e.name);
    return names.length ? `${names.join(', ')} (${SKIP_WHY[why]})` : '';
  }).filter(Boolean).join('; ');
}
/** Greatest Hits: the round I actions with any minion on them this round, and what was left out and why (Cory, Nov 1). */
export function hitsPlan(ctx, p, self = null) {
  const L = ledger(ctx.state);
  // one action, however many minions are on it: a space a joiner shares counts once, as the copier's own entry if they have one
  const byAction = new Map();
  for (const e of Object.values(L.now).filter(x => x.ring === 1 && x.key !== self).sort((a, b) => (a.seq || 0) - (b.seq || 0))) {
    const k = actionKey(e.key), had = byAction.get(k);
    if (!had || (had.p !== p.id && e.p === p.id)) byAction.set(k, e);
  }
  const all = [...byAction.values()].sort((a, b) => (a.seq || 0) - (b.seq || 0));
  const take = all.filter(e => allowed(ctx, e, p));
  const skip = all.filter(e => !allowed(ctx, e, p)).map(e => ({ e, why: protectedAction(ctx, e, p) ? 'protected' : pathNow(ctx).includes(actionKey(e.key)) ? 'chain' : 'nothing' }));
  return { take, skip };
}
export const HITS = 3;
/** Greatest Hits: copy any 3 round I actions with a minion on them, one at a time in the order you pick. */
function copyHits(ctx, p, self, who) {
  const { take, skip } = hitsPlan(ctx, p, self);
  const skipped = skipWords(skip);
  if (!take.length) { ctx.log(`${p.name} had no round I action to copy${skipped ? `: it skips ${skipped}` : ''}.`); return false; }
  if (skipped) ctx.log(`${who} skips ${skipped}.`);
  orderStep(ctx, p, take.map(e => e.key), who, HITS);
  return true;
}
/** Tribute Band: do every action the chosen rival has a minion on this round, in placement order. */
function copyLeader(ctx, p, leader) {
  const { take, skip } = ownPlan(ctx, leader);
  const skipped = skipWords(skip);
  if (!take.length) { ctx.log(`${p.name}'s Tribute Band has nothing to copy from ${leader.name}${skipped ? `: it skips ${skipped}` : ''}.`); return false; }
  if (skipped) ctx.log(`Tribute Band skips ${skipped}.`);
  ctx.log(`${p.name}'s Tribute Band plays ${leader.name}'s actions.`);
  copyAll(ctx, p, take, 'Tribute Band', 'Tribute Band');
  return true;
}
/** Greatest Hits' next copy: one left goes straight on; more ask which, and the rest wait until that copy is done. */
function orderStep(ctx, p, keys, who, n = Infinity) {
  const L = ledger(ctx.state);
  const left = keys.map(k => L.now[k]).filter(e => e && allowed(ctx, e, p));
  if (n <= 0) return;
  if (left.length === 1) ctx.defer(p, 'echo.continueCopy', { key: left[0].key, by: null, who }, { kind: 'space', key: left[0].key, qid: left[0].color, pid: p.id });
  if (left.length < 2) return;
  const more = Number.isFinite(n) && left.length > n ? ` (${n} more)` : '';
  ctx.choose(p, `${who}: copy which next?${more}`, left.map(e => ({
    id: `space:order:${e.key}`, label: `${e.name} (${ctx.player(e.p).name}): ${describe(ctx, e)}`, kind: 'space', value: e.key, hint: entryValue(ctx, e, p),
  })), 'echo.order', { left: left.map(e => e.key), who, ...(Number.isFinite(n) ? { n } : {}) });
}
/** Latest placement regardless of its owner; legality never makes us fall back to an earlier placement. */
export const previousEntry = (ctx, skip = null) => Object.values(ledger(ctx.state).now)
  .filter(e => e.key !== skip).sort((a, b) => (b.seq || 0) - (a.seq || 0))[0] || null;
/** Exclude the active placement while executing it, rather than guessing from the previous owner's identity. */
export const previousNow = (ctx, p) => {
  const L = ledger(ctx.state);
  return targets(ctx, p, 'previous', L.path?.length ? L.origin : null);
};
/** Headliners (pool 9): every round III space on the wheel but itself, not in this chain: a taken one with the entry
 *  to copy (the copier's own if they share it), an open one to do. */
const BILLING = ['headliners', 'topbilling', 'secondbilling'];
function thirdTargets(ctx, p, ring = 3) {
  const st = ctx.state, path = pathNow(ctx), now = Object.values(ledger(st).now), out = [];
  st.quadrants.forEach((qid, q) => spacesOf(st, qid).forEach((a, i) => {
    const key = `${q}-${i}`;
    if (a.ring !== ring || BILLING.includes(a.key) || path.includes(key) || (a.lastRound && st.round > a.lastRound)) return;
    const es = now.filter(e => actionKey(e.key) === key);
    if (es.length) { const e = es.find(x => x.p === p.id) || es[0]; if (allowed(ctx, e, p)) out.push({ key, a, qid, e }); }
    else if (st.slots[key] === undefined && a.ring <= st.round) out.push({ key, a, qid });
  }));
  return out;
}
/** Encore Crowd (pool 9): round III spaces a rival has a minion on. */
const rivalThirds = (ctx, p) => targets(ctx, p, 'rival').filter(e => e.ring === 3);
/** Cover's targets: open actions with no minion on them, not already in this copy chain. */
function emptyTargets(ctx) {
  const st = ctx.state, path = pathNow(ctx), out = [];
  st.quadrants.forEach((qid, q) => spacesOf(st, qid).forEach((a, i) => {
    const key = `${q}-${i}`;
    if (a.ring <= st.round && !(a.lastRound && st.round > a.lastRound) && st.slots[key] === undefined && !path.includes(key)) out.push({ key, a, qid });
  }));
  return out;
}
const bestValue = (ctx, list, p) => Math.max(0, ...list.map(e => entryValue(ctx, e, p)));
// What doing an empty action would give p: its own estimate. Cover never rates itself (it would ask itself forever),
// and a throw rates 0. Bots used to see every empty action as worth 2, so they took Cover rarely and copied blind.
let rating = false;
function emptyValue(ctx, a, p) {
  if (rating || a.key === 'hum' || !a.estimate) return 0;
  rating = true;
  try { return Math.max(0, a.estimate(ctx, p) || 0); } catch { return 0; } finally { rating = false; }
}
// by: the member making the copy (Understudy, Sleepwalker…), so the log names it. who: the card or space asking
// (the prompt's own name), so a copied space's free member is titled with it ("Sample: take a face-up member…").
function offer(ctx, p, list, prompt, from, by = null, blocked = []) {
  if (!list.length) { ctx.log(`${p.name}${by ? `'s ${by}` : ''} had nothing to copy${agentsWhy(ctx, blocked)}.`); return; }
  const who = by || prompt.split(':')[0];
  ctx.choose(p, prompt, list.map(e => ({
    id: `space:${from}:${e.key}`, label: `${e.name} (${ctx.player(e.p).name}): ${describe(ctx, e)}`, kind: 'space',
    value: e.key, hint: entryValue(ctx, e, p),
  })), 'echo.pick', by ? { from, by, who } : { from, who });
}

/** p copies entry e: same resources, same discount, and a free face-up member (cost ≤ theirs) per member. */
export function copy(ctx, p, e, { later = null, by = null, asker = null } = {}) {
  if (!allowed(ctx, e, p)) return;
  return withPath(ctx, [...pathNow(ctx), actionKey(e.key)], () => copyResolved(ctx, p, e, { later, by, asker }), undefined, null);
}
function copyResolved(ctx, p, e, { later, by, asker }) {
  const taker = ctx.player(e.p);
  const who = by ? `${p.name}'s ${by}: ${p.name}` : p.name;
  if (e.redo || e.echo) {
    // a space that took or traded: the copy does the action itself
    ctx.log(`${who} copies ${e.name}${taker !== p ? ` (${taker.name}'s)` : ''}: doing it again.`);
    heard(ctx, p, e, taker);
    // Wallflower doubles, and Translator greens, what the space hands the copier here too (Cory, Nov 3: copying
    // Polish wasn't doubled)
    const a = actionOf(e, ctx.state), cp = copierOf(ctx, p);
    // a copy never gets the space's first-taker +1 (rules.plus1 'game'; Cory: "plus one to the first taker matters for green")
    ctx.copyPlus1(p, a, e.color, cp?.x || 1, () => withPath(ctx, pathNow(ctx), () => (a.resolve.__orig || a.resolve).call(a, ctx, p), undefined, cp), cp?.green ? 'green' : null);
    return;
  }
  const mult = has(ctx, p, 'wallflower') ? 2 : 1;
  const asGreen = translating(ctx, p);
  ctx.copyPlus1(p, actionOf(e, ctx.state), e.color, mult, () => { for (const [c, n] of Object.entries(e.res)) ctx.gain(p, asGreen ? 'green' : c, n * mult, { fromAction: true }); }, asGreen ? 'green' : null);
  if (e.discount) ctx.discount(p, e.discount, `Copy of ${e.name}`);
  const notes = [mult > 1 ? `doubled by ${p.name}'s Wallflower` : '', asGreen && Object.keys(e.res).length ? `as green by ${p.name}'s Translator` : ''].filter(Boolean);
  ctx.log(`${who} copied ${e.name}${e.p !== p.id ? ` (${ctx.player(e.p).name}'s)` : ''}: ${describe(ctx, e)}${notes.length ? `, ${notes.join(', ')}` : ''}.`);
  heard(ctx, p, e, taker);
  if (later) later.push(...e.members);
  else if (e.members.length) freeStep(ctx, p, { left: [...e.members], who: asker || by || 'Copy' });
}
// members that react to a copy
function heard(ctx, p, e, taker) {
  // each runs as its member, so the log names it ("P1's Choir: +1 green.")
  // any player's copy, +2 (Cory, Nov 1)
  for (const o of impressed(ctx, p)) each(ctx, o, 'tuningfork', 'Impressionist', () => ctx.gain(o, ctx.quadrant(e.color).resource, IMPRESSION));
  // Royalties (REPLACE11=royalties): a rival copying Royalties pays its taker's tab +2 green
  if (e.name === 'Royalties') for (const t of ctx.state.royalties || []) if (t.round === ctx.state.round && t.pid !== p.id) {
    const o = ctx.player(t.pid); ctx.gain(o, 'green', 2); ctx.log(`${o.name}'s Royalties: ${p.name} copied it, +2 green.`);
  }
  each(ctx, p, 'choir', 'Choir', () => ctx.gain(p, 'green', 1));
  each(ctx, p, 'copyist', 'Copyist', () => { p.bonus += COPYIST; }); // REPLACE10
  each(ctx, p, 'roadie9', 'Roadie', () => { const g = ctx.countMembersOfColor(p, 'echo'); if (g) ctx.gain(p, 'green', g); }); // REPLACE9
  for (const owner of ctx.rivals(p)) each(ctx, owner, 'muse', 'Muse', () => ctx.gain(owner, 'green', 1));
  if (taker === p) each(ctx, p, 'ensemble', 'Ensemble', () => { p.bonus += 1; });
  // −1 for the copier, +1 for Bait's owner, so copying your own is even (Cory, Oct 29: "clearly neutral for the
  // player who has it (+1 -1). the +1 shouldnt be limited to rivals only")
  if (taker !== p) each(ctx, taker, 'bait', 'Bait', () => {
    p.bonus -= Math.min(1, ctx.followers(p));
    taker.bonus += 1;
  });
}
// Run fn once per card of p's that is (or copies) the member `key`, each as its own source: a Doppelganger copying
// Muse pays its +1 beside Muse's, named "Doppelganger (as Muse)" (Cory, Oct 28). An artifact has no uid among members.
function each(ctx, p, key, name, fn) {
  const cards = (key === 'tuningfork' ? ctx.abilitiesOf(p) : ctx.membersOf(p)).filter(c => [c.def.id, c.copy, c.ability].includes(`echo.${key}`));
  for (const c of cards) {
    const own = c.def.id === `echo.${key}`;
    // a worn cloak logs as itself ("P1's Green Cloak: +2 red."), like every other cloak, and is its own source
    ctx.asMember(p, own ? c.def.name : `${c.def.name} (as ${name})`, fn, p.members.includes(c.uid) || c.uid === p.artifact ? c.uid : null);
  }
}
/** Copy several spaces; free members are picked one after another at the end. who: the card or space copying. */
export function copyAll(ctx, p, list, by = null, who = by) {
  const member = by && ctx.membersOf(p).find(c => c.def.name === by || (c.copy && defById(c.copy).name === by));
  for (const e of list) ctx.defer(p, 'echo.continueCopy', { key: e.key, by, who: who || 'Copy' },
    member ? { kind: 'member', pid: p.id, uid: member.uid, def: member.def.id } : { kind: 'space', key: e.key, qid: e.color, pid: p.id });
}
function freeStep(ctx, p, data) {
  if (!data.left.length) return;
  const c = data.left[0];
  const fits = ctx.shopCards().filter(x => costOf(x.def) <= c);
  if (!fits.length) { ctx.log(`${p.name}: no face-up member costs ${c} or less.`); freeStep(ctx, p, { ...data, left: data.left.slice(1) }); return; }
  ctx.choose(p, `${data.who || 'Copy'}: take a face-up member costing ${c} or less, free`, fits.map(x => ({
    id: `card:${x.uid}`, label: `${x.def.name} (${costOf(x.def)})`, kind: 'card', value: x.uid, hint: x.def.f * 1.4 + costOf(x.def),
  })), 'echo.free', { cost: c, left: data.left.slice(1), who: data.who || 'Copy' });
}

// Sample's rival members: an On Recruit (or a now-and-round-start effect) that doesn't act on the card itself ("swap
// it", "it becomes a copy"), which a card held by someone else can't do for you. Same test as Red's Tryout.
function rivalRecruits(ctx, p) {
  return ctx.rivals(p).flatMap(o => ctx.membersOf(o).map(c => ({ c, o })))
    .filter(({ c }) => !c.def.artifact && !c.def.recruitNote && c.def.key !== 'impersonators' && (c.def.onRecruited || (c.def.now && (c.def.onRoundStart || c.def.onRoundStartLate)))
      && !/\bit\b|\bthese\b|\bthis member\b|\bcop(?:y|ies)\b/i.test(c.def.text.replace(/^[^:]*:/, '')));
}

// Greatest Hits: your members with an On Recruit (or a now-and-round-start effect, as Sample reads it).
const recruitDef = c => (c.copy ? defById(c.copy) : c.def);
function ownRecruits(ctx, p) {
  return ctx.membersOf(p).filter(c => { const d = recruitDef(c); return !d.artifact && !d.recruitNote && (d.onRecruited || (d.now && (d.onRoundStart || d.onRoundStartLate))); });
}
/**
 * The members a copy-an-On-Recruit card or space could pick for p right now, read from the same lists its choice
 * uses, so a hover can name them before it's taken (Cory, Nov 4: "hovering over copy a rival members on recruit should
 * show you the available options"). which: 'rival' (Sample), 'own' (Greatest Hits, Bootlegger: self left out),
 * 'rivalMember' (Impostors, Impersonator), 'ownMember' (Doppelganger). → [{ uid, def }], def the one it would copy.
 */
export function copyOptions(ctx, p, which, self = null) {
  const bad = ['doppel', 'impostor', 'impersonators'];
  if (which === 'rival') return rivalRecruits(ctx, p).map(({ c }) => ({ uid: c.uid, def: c.def }));
  if (which === 'own') return ownRecruits(ctx, p).filter(c => c.uid !== self && (self == null || recruitDef(c).key !== 'bootlegger')).map(c => ({ uid: c.uid, def: recruitDef(c) }));
  if (which === 'rivalMember') return ctx.rivals(p).flatMap(o => ctx.membersOf(o)).filter(c => c.copy || !bad.includes(c.def.key)).map(c => ({ uid: c.uid, def: defById(c.copy || c.def.id) }));
  if (which === 'ownMember') return ctx.membersOf(p).filter(c => c.uid !== self && (c.copy || !['doppel', 'impostor'].includes(c.def.key))).map(c => ({ uid: c.uid, def: defById(c.copy || c.def.id) }));
  return [];
}
// Greatest Hits is a chain like any copy: an On Recruit it copies (Stunt Double's "copy the action you just took") stays
// in that chain, so it can't copy Greatest Hits again (that looped forever in seeded games, Nov 1).
// ---------- idea pipeline pool 7 helpers ----------
const slotAction = (ctx, key) => { const [q, i] = key.split('-').map(Number); return spacesOf(ctx.state, ctx.state.quadrants[q])[i]; };
/** Open Green spaces on the board now (Stage Door). */
function stageTo(ctx) {
  const st = ctx.state, out = [];
  st.quadrants.forEach((qid, q) => { if (qid === 'echo') spacesOf(st, qid).forEach((a, i) => {
    if (a.ring <= st.round && !(a.lastRound && st.round > a.lastRound) && st.slots[`${q}-${i}`] === undefined) out.push({ key: `${q}-${i}`, a });
  }); });
  return out;
}
/** p's minions on the board, not on a Stage Door. */
function stageFrom(ctx, p) {
  const out = [], st = ctx.state;
  for (const [key, o] of Object.entries(st.slots)) if (o === p.id && slotAction(ctx, key).key !== 'stagedoor') out.push({ key, joined: false });
  for (const [key, list] of Object.entries(st.squats || {})) if (list.includes(p.id) && slotAction(ctx, key).key !== 'stagedoor') out.push({ key, joined: true });
  return out;
}
function stageMove(ctx, p, { key, joined }, to) {
  if (joined) { const list = ctx.state.squats[key]; list.splice(list.indexOf(p.id), 1); if (!list.length) delete ctx.state.squats[key]; } else delete ctx.state.slots[key];
  ctx.state.slots[to] = p.id;
  p.lastSlot = { key: to, joined: false };
  const [q, i] = to.split('-').map(Number);
  ctx.log(`${p.name}'s Stage Door: moves a minion from ${slotAction(ctx, key).name} to ${slotAction(ctx, to).name}.`);
  ctx.state.queue.unshift({ t: 'act', p: p.id, q, i });
}
const medleyKeys = ctx => Object.values(ledger(ctx.state).now || {}).filter(x => ['Medley', 'Remix', 'Mashup', 'Greatest Hits'].includes(x.name)).map(x => actionKey(x.key));
/** Medley: one entry per action with a minion on color q's spaces this round (p's own entry where p shares it). */
function medleyPlan(ctx, p, q, noThird = false, rivalOnly = false) {
  const byAction = new Map();
  for (const e of Object.values(ledger(ctx.state).now || {}).filter(x => x.color === q && !['Medley', 'Remix', 'Mashup', 'Greatest Hits'].includes(x.name) && !(noThird && x.ring === 3) && !(rivalOnly && x.p === p.id)).sort((a, b) => (a.seq || 0) - (b.seq || 0))) {
    const k = actionKey(e.key), had = byAction.get(k);
    if (!had || (had.p !== p.id && e.p === p.id)) byAction.set(k, e);
  }
  return [...byAction.values()].sort((a, b) => (a.seq || 0) - (b.seq || 0)).filter(e => allowed(ctx, e, p));
}
const hitsKeys = ctx => Object.values(ledger(ctx.state).now || {}).filter(x => x.name === 'Greatest Hits').map(x => actionKey(x.key));
let hitsChain = false;
function hitsStep(ctx, p, left) {
  const mine = left.filter(u => ctx.ownerOf(u)?.id === p.id);
  if (!mine.length) return;
  if (mine.length === 1) { ctx.defer(p, 'echo.hitsDo', { uid: mine[0] }); return; }
  ctx.choose(p, `Greatest Hits: copy which member's On Recruit first? (${mine.length} to go)`, mine.map(u => {
    const c = ctx.card(u), d = recruitDef(c);
    return { id: `card:${u}`, label: `${d.name}: ${d.text}`, kind: 'card', value: u, hint: 2 + (d.f || 0) };
  }), 'echo.hitsPick', { left: mine });
}

// ---------- the quadrant ----------
const echoQ = {
  id: 'echo',
  name: 'Green',
  resource: 'green',
  rule: 'Copying a copy lets you choose again. Never copy an action already in its chain. Every Green action gives +1 green.',
  scoring: { label: 'Most green', counts: 'the green you hold when the round ends', score: (ctx, p) => p.res.green },

  actions: [
    // idea pipeline pool 6 (Nov 7): Big Finish's copy as a round III space (every action with your minion, each once,
    // as copies go: Agents and copy chains stop what they stop; this space itself is in the chain). No +1 green: not printed.
    poolSpace({
      key: 'curtaincall', ring: 3, name: 'Curtain Call', echo: true, text: 'Copy every action you have a minion on.',
      estimate: (ctx, p) => targets(ctx, p, 'own').reduce((n, e) => n + entryValue(ctx, e, p), 0),
      resolve(ctx, p) {
        const list = targets(ctx, p, 'own');
        if (!list.length) { ctx.log(`${p.name}'s Curtain Call: no other action of theirs to copy.`); return; }
        ctx.log(`${p.name}'s Curtain Call: copies ${list.map(e => e.name).join(', ')}.`);
        copyAll(ctx, p, list, null, 'Curtain Call');
      },
    }, 'pool6'),
    // idea pipeline pool 9 (Nov 7): Headliners copies any round III space on the wheel: a taken one as a copy of its
    // taker's entry (theirs or yours; a joined spot counts), an open one by doing it as Cover does. Itself and anything
    // already in the chain left out, Agents as for any copy.
    poolSpace({
      key: 'headliners', ring: 3, name: 'Headliners', echo: true, text: "Copy any round III action, even if it's taken. +1 green.",
      estimate: (ctx, p) => VARIANT.plus + Math.max(0, ...thirdTargets(ctx, p).map(x => (x.e ? entryValue(ctx, x.e, p) : emptyValue(ctx, x.a, p)))),
      resolve(ctx, p) {
        plus(ctx, p);
        const list = thirdTargets(ctx, p);
        if (!list.length) { ctx.log(`${p.name}'s Headliners: no round III action to copy.`); return; }
        ctx.choose(p, 'Headliners: copy which round III action?', list.map(x => ({
          id: `space:third:${x.key}`, label: `${x.a.name}${x.e ? ` (${ctx.player(x.e.p).name})` : ''}: ${x.e ? describe(ctx, x.e) : x.a.text}`, kind: 'space',
          value: x.key, hint: x.e ? entryValue(ctx, x.e, p) : emptyValue(ctx, x.a, p),
        })), 'echo.headline');
      },
    }, 'pool9'),
    // idea pipeline pool 15 (Nov 7, round 2): Headliners in Cory's words (copies take a taken space anyway), and the
    // weaker one on round II's spaces. Same copy as Headliners: a taken space from its entry, an open one done.
    ...[['topbilling', 'Top Billing', 3, 'Copy any round III action. +1 green.'], ['secondbilling', 'Second Billing', 2, 'Copy any round II action. +1 green.']].map(([key, name, ring, text]) => poolSpace({
      key, ring: 3, name, echo: true, text,
      estimate: (ctx, p) => VARIANT.plus + Math.max(0, ...thirdTargets(ctx, p, ring).map(x => (x.e ? entryValue(ctx, x.e, p) : emptyValue(ctx, x.a, p)))),
      resolve(ctx, p) {
        plus(ctx, p);
        const list = thirdTargets(ctx, p, ring), rn = ring === 3 ? 'III' : 'II';
        if (!list.length) { ctx.log(`${p.name}'s ${name}: no round ${rn} action to copy.`); return; }
        ctx.choose(p, `${name}: copy which round ${rn} action?`, list.map(x => ({
          id: `space:third:${x.key}`, label: `${x.a.name}${x.e ? ` (${ctx.player(x.e.p).name})` : ''}: ${x.e ? describe(ctx, x.e) : x.a.text}`, kind: 'space',
          value: x.key, hint: x.e ? entryValue(ctx, x.e, p) : emptyValue(ctx, x.a, p),
        })), 'echo.headline', { name, ring });
      },
    }, 'pool15')),
    // pool 9's variation: only a round III space a rival has a minion on, copied as Echo copies
    poolSpace({
      key: 'encorecrowd', ring: 3, name: 'Encore Crowd', echo: true, text: 'Copy a round III action a rival has a minion on. +1 green.',
      estimate: (ctx, p) => VARIANT.plus + bestValue(ctx, rivalThirds(ctx, p), p),
      resolve(ctx, p) { plus(ctx, p); offer(ctx, p, rivalThirds(ctx, p), 'Encore Crowd: copy which round III action?', 'now'); },
    }, 'pool9'),
    swap11(swap11({
      // Cory, Nov 10: "+1 green per minion on green (including this). +1 green. So round 1 is max 4 if its taken last" (was
      // +3/4/5). Anyone's minion counts, this one included (it's on its space when it resolves); a copy counts the same.
      key: 'chant', ring: 1, name: 'Build Up', text: '+1 green per minion on Green spaces, this one included. +1 green.',
      estimate: (ctx, p) => 1 + greenCount(ctx) + (onGreen(ctx, p) ? 0 : 1),
      resolve(ctx, p) {
        plus(ctx, p);
        const n = greenCount(ctx);
        if (n) ctx.gain(p, 'green', n, { fromAction: true });
        ctx.log(`${p.name}'s Build Up: +${n} green (${n} minion${n === 1 ? '' : 's'} on Green).`);
      },
    }, CROWD), ROYALTIES),
    {
      // The previous placement can be your own on a snake double turn.
      key: 'echo', ring: 1, name: 'Echo', echo: true, text: 'Copy the previous action. +1 green.', // back to +1 (Cory, Oct 28)
      estimate: (ctx, p) => VARIANT.plus + bestValue(ctx, targets(ctx, p, 'previous'), p),
      resolve(ctx, p) { plus(ctx, p); offer(ctx, p, previousNow(ctx, p), 'Echo: copy the previous action?', 'now', null, agentsBlocked(ctx, p, 'previous', ledger(ctx.state).path?.length ? ledger(ctx.state).origin : null)); },
    },
    {
      // your own spaces are on the board in your color: no memory of last round needed (it replaced Recall)
      key: 'refrain', ring: 1, name: 'Reprise', echo: true, text: 'Copy an action with your minion. +1 green.', // round I (Cory, 2026-10-27); +1 (Cory, Oct 28)
      estimate: (ctx, p) => VARIANT.plus + bestValue(ctx, targets(ctx, p, 'own'), p),
      resolve(ctx, p) {
        plus(ctx, p);
        offer(ctx, p, targets(ctx, p, 'own'), 'Reprise: copy which of your spaces?', 'now', null, agentsBlocked(ctx, p, 'own'));
      },
    },
    {
      // Cory, Nov 10 10:36am: Crowd takes Sample's round II slot ("I like crowd but feel like it doesnt pay enough. Maybe it
      // gives +3 green."; 10:37am: "+2 plus the one inherent to the space"). Anyone's minion counts, this one included.
      // followers can't ride on a chip, so a copy does Crowd itself (counting the minions on Green at that moment)
      key: 'crowd2', ring: 2, name: 'Crowd', copyDoesIt: true, text: '+1 follower per minion on Green spaces. +3 green.',
      estimate: ctx => 3 + 1.5 * (greenMinions(ctx) + 1),
      resolve(ctx, p) {
        plus(ctx, p);
        ctx.gain(p, 'green', 2, { fromAction: true });
        const n = greenMinions(ctx);
        if (n) { p.bonus += n; ctx.log(`${p.name}'s Crowd: +${n} follower${n === 1 ? '' : 's'} (${n} minion${n === 1 ? '' : 's'} on Green spaces).`); }
      },
    },
    {
      // Retired Nov 10 (Crowd took its slot); kept for old saves.
      // Cory, 2026-10-28: Green had one copy too many, so Sample stops copying a space; "maybe copy an On Recruit"
      // (the rival's member, Claude's read of his yes). Like Red's Tryout, but on a rival's member, not the shop's.
      key: 'encore', pool: true, ring: 2, name: 'Sample', text: 'Copy the On Recruit of a rival’s member. +1 green.', copyDoesIt: true,
      estimate: (ctx, p) => VARIANT.plus + (rivalRecruits(ctx, p).length ? 3 : 0),
      resolve(ctx, p) {
        plus(ctx, p);
        const list = rivalRecruits(ctx, p);
        if (!list.length) { ctx.log(`${p.name}: no rival's member has an On Recruit to copy.`); return; }
        ctx.choose(p, 'Sample: copy which rival member’s On Recruit?', list.map(({ c, o }) => ({
          id: `card:${c.uid}`, label: `${o.name}'s ${c.def.name}: ${c.def.text}`, kind: 'card', value: c.uid, hint: 2 + (c.def.f || 0),
        })), 'echo.encoreCopy');
      },
    },
    {
      // Cory, 2026-10-27: Chorus out; "Copy an action with no minion on it" takes Reprise's round II spot. Name is
      // Claude's fill-in. A copy of an empty space does that action itself (nobody took it, so there's no chip).
      // Cory, Nov 10: "make round II copy an action with a rival's minion on it" (was "Copy an action with no minion on it":
      // "really unintuitive"). Copied as Reprise copies, from a rival's entry instead of yours.
      key: 'hum', ring: 2, name: 'Cover', echo: true, text: 'Copy an action with a rival\u2019s minion on it. +1 green.',
      estimate: (ctx, p) => VARIANT.plus + bestValue(ctx, targets(ctx, p, 'rival'), p),
      resolve(ctx, p) {
        plus(ctx, p);
        offer(ctx, p, targets(ctx, p, 'rival'), 'Cover: copy which rival\u2019s space?', 'now', null, agentsBlocked(ctx, p, 'rival'));
      },
    },
    {
      // Cory, Nov 1 morning: "maybe we try copying all your members On Recruit in any order" (was "Copy any 3 round I
      // actions with a minion on them", +41 in the balance runs). Your own members, so a self-acting On Recruit
      // works on that card; a copied member (Doppelganger, Impostors) does the On Recruit of what it copies.
      // Cory, Nov 10: "The Greatest Hits should be updated to the test version where it picks a color and copys every action
      // on that color with a minion" (Medley's rule and words; was "Copy the On Recruit of each of your members"). Key kept
      // for old saves and records.
      key: 'eternity', ring: 3, name: 'Greatest Hits', text: 'Choose a color other than green. Copy every action with a minion on its spaces. +1 green.',
      // rules.hitsRival (test rule, Cory Nov 11: "we could make it copy rival minions on another color ... I lean more
      // towards rival"): only actions with a rival's minion on them
      estimate: (ctx, p) => VARIANT.plus + Math.max(0, ...ctx.state.quadrants.filter(q => q !== 'echo').map(q => medleyPlan(ctx, p, q, false, !!ctx.state.rules?.hitsRival).reduce((a, e) => a + entryValue(ctx, e, p), 0))),
      resolve(ctx, p) {
        plus(ctx, p);
        const rivalOnly = !!ctx.state.rules?.hitsRival;
        const opts = ctx.state.quadrants.filter(q => q !== 'echo').map(q => ({ q, list: medleyPlan(ctx, p, q, false, rivalOnly) })).filter(x => x.list.length);
        if (!opts.length) { ctx.log(`${p.name}'s Greatest Hits: no color has an action to copy.`); return; }
        withPath(ctx, [...new Set([...pathNow(ctx), ...medleyKeys(ctx)])], () => ctx.choose(p, 'Greatest Hits: copy every action on which color\u2019s spaces?', opts.map(({ q, list }) => ({
          id: `color:${q}`, label: `${quadrant(q).name} (${list.map(e => e.name).join(', ')})`, kind: 'color', value: q, hint: list.reduce((a, e) => a + entryValue(ctx, e, p), 0),
        })), 'echo.medley', { who: 'Greatest Hits', rivalOnly }));
      },
    },
    // idea pipeline pool 7 (Nov 7, writer round 1). Stage Door: as Pacers' move (purple.js), onto a Green space only, and
    // never the Stage Door minion itself. With no other minion on the board or no open Green space, just the +1.
    poolSpace({
      key: 'stagedoor', ring: 2, name: 'Stage Door', text: 'Move one of your other minions to an open Green space and do that space\u2019s action. +1 green.',
      estimate: (ctx, p) => VARIANT.plus + (stageFrom(ctx, p).length ? Math.max(0, ...stageTo(ctx).map(t => emptyValue(ctx, t.a, p))) + 1.5 : 0),
      resolve(ctx, p) {
        plus(ctx, p);
        const to = stageTo(ctx);
        if (!to.length || !stageFrom(ctx, p).length) { ctx.log(`${p.name}'s Stage Door: ${to.length ? 'no other minion on the board to move' : 'no open Green space'}.`); return; }
        ctx.choose(p, 'Stage Door: move one of your other minions to which open Green space?', to.map(t => ({
          id: `to:${t.key}`, label: t.a.name, kind: 'slot', value: t.key, hint: emptyValue(ctx, t.a, p),
        })), 'echo.stageTo');
      },
    }, 'pool7'),
    // Medley: every action with a minion on the chosen color's spaces, copied in placement order (Tribute Band's copyAll);
    // one copy per action however many minions share it; Medley itself is in the chain, so never copied
    poolSpace({
      // a color other than green since Nov 8 (Cory: "We probably have to be specific that you can't choose green. Maybe that's what went wrong.")
      key: 'medley', ring: 3, name: 'Medley', text: 'Choose a color other than green. Copy every action with a minion on its spaces. +1 green.',
      estimate: (ctx, p) => VARIANT.plus + Math.max(0, ...ctx.state.quadrants.filter(q => q !== 'echo').map(q => medleyPlan(ctx, p, q).reduce((a, e) => a + entryValue(ctx, e, p), 0))),
      resolve(ctx, p) {
        plus(ctx, p);
        const opts = ctx.state.quadrants.filter(q => q !== 'echo').map(q => ({ q, list: medleyPlan(ctx, p, q) })).filter(x => x.list.length);
        if (!opts.length) { ctx.log(`${p.name}'s Medley: no color has an action to copy.`); return; }
        withPath(ctx, [...new Set([...pathNow(ctx), ...medleyKeys(ctx)])], () => ctx.choose(p, 'Medley: copy every action on which color\u2019s spaces?', opts.map(({ q, list }) => ({
          id: `color:${q}`, label: `${quadrant(q).name} (${list.map(e => e.name).join(', ')})`, kind: 'color', value: q, hint: list.reduce((a, e) => a + entryValue(ctx, e, p), 0),
        })), 'echo.medley'));
      },
    }, 'pool7'),
    // pool 15 (round 2, the verdict's change): Medley capped at two copies, chosen from that color's actions
    poolSpace({
      key: 'mashup', ring: 3, name: 'Mashup', text: 'Choose a color. Copy up to two actions with a minion on its spaces. +1 green.',
      estimate: (ctx, p) => VARIANT.plus + Math.max(0, ...ctx.state.quadrants.map(q => medleyPlan(ctx, p, q).map(e => entryValue(ctx, e, p)).sort((a, b) => b - a).slice(0, 2).reduce((a, v) => a + v, 0))),
      resolve(ctx, p) {
        plus(ctx, p);
        const opts = ctx.state.quadrants.map(q => ({ q, list: medleyPlan(ctx, p, q) })).filter(x => x.list.length);
        if (!opts.length) { ctx.log(`${p.name}'s Mashup: no color has an action to copy.`); return; }
        withPath(ctx, [...new Set([...pathNow(ctx), ...medleyKeys(ctx)])], () => ctx.choose(p, 'Mashup: copy up to two actions on which color\u2019s spaces?', opts.map(({ q, list }) => ({
          id: `color:${q}`, label: `${quadrant(q).name} (${list.map(e => e.name).join(', ')})`, kind: 'color', value: q, hint: list.map(e => entryValue(ctx, e, p)).sort((a, b) => b - a).slice(0, 2).reduce((a, v) => a + v, 0),
        })), 'echo.mashup'));
      },
    }, 'pool15'),
    // pool 12 (green.md Medley's variation): every round III space left out, Medley's own included
    poolSpace({
      key: 'remix', ring: 3, name: 'Remix', text: 'Choose a color. Copy every action with a minion on its spaces except the round III one. +1 green.',
      estimate: (ctx, p) => VARIANT.plus + Math.max(0, ...ctx.state.quadrants.map(q => medleyPlan(ctx, p, q, true).reduce((a, e) => a + entryValue(ctx, e, p), 0))),
      resolve(ctx, p) {
        plus(ctx, p);
        const opts = ctx.state.quadrants.map(q => ({ q, list: medleyPlan(ctx, p, q, true) })).filter(x => x.list.length);
        if (!opts.length) { ctx.log(`${p.name}'s Remix: no color has an action to copy.`); return; }
        withPath(ctx, [...new Set([...pathNow(ctx), ...medleyKeys(ctx)])], () => ctx.choose(p, 'Remix: copy every action on which color\u2019s spaces (not its round III one)?', opts.map(({ q, list }) => ({
          id: `color:${q}`, label: `${quadrant(q).name} (${list.map(e => e.name).join(', ')})`, kind: 'color', value: q, hint: list.reduce((a, e) => a + entryValue(ctx, e, p), 0),
        })), 'echo.medley', { who: 'Remix', noThird: true }));
      },
    }, 'pool12'),
  ],

  handlers: {
    // pool 7: Stage Door's destination, then which minion (bots move off the space worth least)
    stageTo(ctx, p, to) {
      if (!to || ctx.state.slots[to] !== undefined) return;
      const mine = stageFrom(ctx, p);
      if (!mine.length) return;
      if (mine.length === 1) { stageMove(ctx, p, mine[0], to); return; }
      ctx.choose(p, `Stage Door: move which minion to ${slotAction(ctx, to).name}?`, mine.map(w => ({
        id: `from:${w.key}${w.joined ? '+j' : ''}`, label: `${slotAction(ctx, w.key).name}${w.joined ? ' (joined)' : ''}`, kind: 'slot',
        value: `${w.key}${w.joined ? '+j' : ''}`, hint: -(slotAction(ctx, w.key).estimate?.(ctx, p) || 0),
      })), 'echo.stageFrom', { to });
    },
    stageFrom(ctx, p, from, data) {
      const [key, j] = String(from).split('+');
      const w = stageFrom(ctx, p).find(x => x.key === key && x.joined === (j === 'j'));
      if (!w || ctx.state.slots[data.to] !== undefined) return;
      stageMove(ctx, p, w, data.to);
    },
    // Mashup (pool 15): with more than two to copy, pick them one at a time (bots: the two worth most), then copy in
    // placement order
    mashup(ctx, p, q, data) {
      const list = medleyPlan(ctx, p, q);
      if (!list.length) { ctx.log(`${p.name}'s Mashup: nothing on ${quadrant(q).name} to copy.`); return; }
      if (list.length <= 2) { ctx.log(`${p.name}'s Mashup copies ${list.map(e => e.name).join(' and ')}.`); copyAll(ctx, p, list, null, 'Mashup'); return; }
      echoQ.handlers.mashupPick(ctx, p, null, { ...(data || {}), q, picked: [] });
    },
    mashupPick(ctx, p, v, data) {
      const picked = v == null ? data.picked : [...data.picked, v];
      const list = medleyPlan(ctx, p, data.q), left = list.filter(e => !picked.includes(actionKey(e.key)));
      if (picked.length >= 2 || !left.length) {
        const go = list.filter(e => picked.includes(actionKey(e.key)));
        if (!go.length) return;
        ctx.log(`${p.name}'s Mashup copies ${go.map(e => e.name).join(' and ')}.`);
        copyAll(ctx, p, go, null, 'Mashup');
        return;
      }
      ctx.choose(p, `Mashup: copy which ${quadrant(data.q).name} action${picked.length ? ' second' : ' first'}?`, left.map(e => ({
        id: `space:mash:${actionKey(e.key)}`, label: `${e.name}: ${describe(ctx, e)}`, kind: 'space', value: actionKey(e.key), hint: entryValue(ctx, e, p),
      })), 'echo.mashupPick', { ...data, picked });
    },
    medley(ctx, p, q, data) {
      const who = data?.who || 'Medley', list = medleyPlan(ctx, p, q, !!data?.noThird, !!data?.rivalOnly);
      if (!list.length) { ctx.log(`${p.name}'s ${who}: nothing on ${quadrant(q).name} to copy.`); return; }
      ctx.log(`${p.name}'s ${who} copies every action on ${quadrant(q).name}'s spaces${data?.noThird ? ' but the round III one' : ''}.`);
      copyAll(ctx, p, list, null, who);
    },
    ...handlers10({
      // Bootlegger (REPLACE10): the member picked; its On Recruit runs as Greatest Hits runs one
      bootleg(ctx, p, uid) {
        if (uid == null) return;
        echoQ.handlers.hitsDo(ctx, p, null, { uid });
      },
    }),
    ...handlers4({
      // Opening Act: the rival's first placement of the round, copied once its own choices are made
      openingAct(ctx, p, _v, data) {
        const rival = ctx.player(data.pid);
        const e = Object.values(ledger(ctx.state).now).filter(x => x.p === data.pid && actionKey(x.key) === data.key).sort((a, b) => (b.seq || 0) - (a.seq || 0))[0];
        if (!e || !copyable(e)) { ctx.log(`${p.name}'s Opening Act: ${rival.name}'s first space gave nothing to copy.`); return; }
        if (protectedAction(ctx, e, p)) { ctx.log(`${p.name}'s Opening Act: ${rival.name}'s Agents prevents copying ${e.name}.`); return; }
        withPath(ctx, [], () => copy(ctx, p, e, { by: 'Opening Act' }), e.key);
      },
    }),
    impersonate(ctx, p, uid, data) {
      const self = ctx.card(data.uid), target = ctx.card(uid);
      if (!p.members.includes(self.uid) || !ctx.ownerOf(uid) || ctx.ownerOf(uid) === p) return;
      // one On Use a game, one a round: a use spent under the old ability stays spent for a new one of the same kind
      const was = self.ability ? defById(self.ability) : null;
      if (self.used && was?.activate === 'game') self.gameUsed = true;
      if (self.used && was?.activate === 'round') self.roundUsed = ctx.state.round;
      self.ability = target.copy || target.def.id;
      const d = defById(self.ability);
      self.used = (d.activate === 'game' && !!self.gameUsed) || (d.activate === 'round' && self.roundUsed === ctx.state.round);
      ctx.log(`${p.name}'s Impersonator: has the ability of ${ctx.ownerOf(uid).name}'s ${d.name} ("${d.text}").`);
      // and does its On Recruit now, on Impersonator (Cory, Nov 5)
      if (!d.recruitNote && (d.onRecruited || (d.now && (d.onRoundStart || d.onRoundStartLate)))) {
        ctx.log(`${p.name}'s Impersonator does ${d.name}'s On Recruit.`);
        if (d.onRecruited) ctx.recruitAbility(p, self, d, () => d.onRecruited(ctx, p, self));
        if (d.now) for (const hook of ['onRoundStart', 'onRoundStartLate']) if (d[hook]) ctx.recruitAbility(p, self, d, () => d[hook](ctx, p, self));
      }
    },
    ...handlers2({
      mirrorImage(ctx, p, [oid, c]) {
        const o = ctx.player(oid), d = (o.res[c] || 0) - (p.res[c] || 0);
        if (d > 0) { ctx.gain(p, c, d); ctx.log(`${p.name}'s Mirror Image: +${d} ${c}, as much as ${o.name} holds.`); }
      },
    }),
    tribute(ctx, p, id, data) {
      const leader = ctx.player(id);
      const card = ctx.card(data.uid);
      if (!copyLeader(ctx, p, leader) && card) card.used = false;
    },
    hitsPick(ctx, p, uid, data) {
      ctx.defer(p, 'echo.hitsDo', { uid });
      ctx.defer(p, 'echo.hitsNext', { left: data.left.filter(u => u !== uid) });
    },
    hitsNext(ctx, p, _, data) { hitsStep(ctx, p, data.left); },
    hitsDo(ctx, p, _, data) {
      const c = ctx.card(data.uid);
      if (!c || ctx.ownerOf(data.uid)?.id !== p.id) { ctx.log(`${p.name}: that member left their cult.`); return; }
      const d = recruitDef(c);
      ctx.log(`${p.name} copies ${d.name}'s On Recruit.`);
      hitsChain = true;
      try {
        if (d.onRecruited) ctx.recruitAbility(p, c, d, () => d.onRecruited(ctx, p, c));
        if (d.now) for (const hook of ['onRoundStart', 'onRoundStartLate']) if (d[hook]) ctx.recruitAbility(p, c, d, () => d[hook](ctx, p, c));
      } finally { hitsChain = false; }
    },
    encoreCopy(ctx, p, uid) {
      const o = ctx.ownerOf(uid);
      if (!o || o.id === p.id) { ctx.log(`${p.name}: that member left the rival's cult.`); return; }
      ctx.log(`${p.name} copies ${o.name}'s ${ctx.defOf(uid).name}: its On Recruit.`);
      ctx.borrowOnRecruit(p, uid);
    },
    // Headliners (pool 9): a taken space is copied from its entry, an open one is done
    headline(ctx, p, key, data) {
      const name = data?.name || 'Headliners', hit = thirdTargets(ctx, p, data?.ring || 3).find(x => x.key === key);
      if (!hit) { ctx.log(`${p.name}'s ${name}: that action can't be copied now.`); return; }
      if (hit.e) copy(ctx, p, hit.e, { asker: name });
      else echoQ.handlers.copyEmpty(ctx, p, key);
    },
    openingDo(ctx, p, key) { echoQ.handlers.copyEmpty(ctx, p, key, { as: 'Opening Act' }); },
    warmupDo(ctx, p, key) { echoQ.handlers.copyEmpty(ctx, p, key, { as: 'Warm-Up Act' }); },
    // data.as: a member doing the copy (Warm-Up Act), so the copied action's gain is said under its name; Choir's and
    // Impressionist's lines stay their own
    copyEmpty(ctx, p, key, data) {
      const hit = emptyTargets(ctx).find(x => x.key === key);
      if (!hit) { ctx.log(`${p.name}: that action has a minion now.`); return; }
      withPath(ctx, [...pathNow(ctx), key], () => {
        ctx.log(`${p.name} copies ${hit.a.name}: doing it.`);
        for (const o of impressed(ctx, p)) each(ctx, o, 'tuningfork', 'Impressionist', () => ctx.gain(o, ctx.quadrant(hit.qid).resource, IMPRESSION));
        each(ctx, p, 'choir', 'Choir', () => ctx.gain(p, 'green', 1));
        each(ctx, p, 'copyist', 'Copyist', () => { p.bonus += COPYIST; }); // REPLACE10
        each(ctx, p, 'roadie9', 'Roadie', () => { const g = ctx.countMembersOfColor(p, 'echo'); if (g) ctx.gain(p, 'green', g); }); // REPLACE9
        const cp = copierOf(ctx, p);
        const run = () => ctx.copyPlus1(p, hit.a, hit.qid, cp?.x || 1, () => withPath(ctx, pathNow(ctx), () => (hit.a.resolve.__orig || hit.a.resolve).call(hit.a, ctx, p), undefined, cp), cp?.green ? 'green' : null);
        if (data?.as) ctx.asMember(p, data.as, run); else run();
      });
    },
    continueCopy(ctx, p, _, data) {
      const e = ledger(ctx.state).now[data.key];
      if (e) copy(ctx, p, e, { by: data.by, asker: data.who });
    },
    order(ctx, p, key, data) {
      const L = ledger(ctx.state);
      const e = L.now[key];
      if (e) ctx.defer(p, 'echo.continueCopy', { key, by: null, who: data.who }, { kind: 'space', key, qid: e.color, pid: p.id });
      ctx.defer(p, 'echo.orderNext', { left: data.left.filter(k => k !== key), who: data.who, ...(data.n ? { n: data.n - 1 } : {}) });
    },
    orderNext(ctx, p, _, data) { orderStep(ctx, p, data.left, data.who, data.n ?? Infinity); },
    pick(ctx, p, key, data) {
      const L = ledger(ctx.state);
      const e = (data.from === 'last' ? L.last : L.now)[key];
      if (e) copy(ctx, p, e, { by: data.by || null, asker: data.who || data.by || null });
    },
    free(ctx, p, uid, data) {
      if (!ctx.state.shop.includes(uid)) { freeStep(ctx, p, { left: [data.cost, ...data.left], who: data.who }); return; }
      ctx.recruit(p, uid, { free: true });
      freeStep(ctx, p, data);
    },
    doppelCopy(ctx, p, uid, data) {
      const target = ctx.card(uid);
      const self = ctx.card(data.uid);
      self.copy = target.copy || target.def.id;
      // a copied Hustler works the same color (until its own when-recruited pick below sets one)
      if (target.color !== undefined) self.color = target.color;
      ctx.log(`${p.name}'s ${self.def.name} becomes a copy of ${defById(self.copy).name}.`);
      ctx.impressMember(p, uid); // IMPRESSIONIST=self<n>m bot test: copying a member pays the Green Cloak
      // Becoming a copy is this physical card's Recruit ability. Impostors doesn't recruit that identity again:
      // its ongoing hooks start now, and round-start hooks wait.
      const d = defById(self.copy);
      // Doppelganger also does the copied member's On Recruit right then (Cory, 2026-10-28: a copied Connector
      // did nothing, since Doppelganger only comes in round III and Connector's Round Start never came)
      // Once per round per Doppelganger, so a Doppelganger swapped out and back in by Panel-style swaps can't loop
      // (Claude, under Cory's go-with-your-gut).
      if (self.def.key === 'doppel' && self.copiedRecruit !== ctx.state.round) {
        self.copiedRecruit = ctx.state.round;
        if (d.onRecruited) ctx.recruitAbility(p, self, d, () => d.onRecruited(ctx, p, self));
        if (d.now) for (const hook of ['onRoundStart', 'onRoundStartLate']) if (d[hook]) ctx.recruitAbility(p, self, d, () => d[hook](ctx, p, self));
      }
      ctx.grantWorkers(p, d, self.uid);
    },
  },

  members: [
    // idea pipeline pool 6 (Nov 7): Warm-Up Act's copy with any action open this round: at Round Start no minion is out
    // yet, so it does the action as Cover does an empty one. Green's own copy spaces are left out (nothing to copy yet).
    pool(m('openingact', 'Opening Act', 3, 2, 'Round Start: copy any action.', {
      onRoundStart(ctx, owner) {
        const list = emptyTargets(ctx).filter(x => !(x.qid === 'echo' && x.a.echo));
        if (!list.length) return;
        ctx.choose(owner, 'Opening Act: copy which action?', list.map(x => ({
          id: `slot:${x.key}`, label: `${x.a.name}: ${x.a.text}`, kind: 'action', value: x.key, hint: emptyValue(ctx, x.a, owner),
        })), 'echo.openingDo');
      },
      ...see(info => 3 * endsAhead(info).length), // BOTSEE: a space's worth at each round start
    }), 'pool6'),
    // idea pipeline pool 5 (Nov 7): Round End before contests (as Last-Minute Shopper's); your own minions on Green
    // spaces (a joined spot counts). Price a fill-in.
    pool(m('benchwarmers', 'Bench Warmers', 2, 2, 'Round End: +2 followers per minion you have on Green spaces.', {
      onAllPlaced(ctx, owner) {
        const n = myGreenMinions(ctx, owner);
        if (!n) return;
        ctx.asMember(owner, 'Bench Warmers', () => { owner.bonus += 2 * n; ctx.log(`${owner.name}'s Bench Warmers: ${n} minion${n === 1 ? '' : 's'} on Green spaces, +${2 * n} followers.`); });
      },
      ...see(info => 2.5 * endsAhead(info).length), // BOTSEE: about one minion a round on a Green space
    }), 'pool5'),
    // idea pipeline pool 7 (Nov 7, writer round 1; prices are fill-ins, design-core bands). Costumers: core costumed()
    // (rivals' cloaks run for its owner as their own). Superfans: core squatSlots (rivals' taken Green spaces, no use
    // spent). Packed House (the brief's Full House; Purple's REPLACE5 has a Full House): Round End before contests, as Grave Diggers' (onAllPlaced); a joined minion counts.
    pool(m('costumers', 'Costumers', 5, 3, 'You also have each rival\u2019s cloak.', { allCloaks: true,
      ...see(info => 4 * endsAhead(info).length),
    }), 'pool7'),
    pool(m('superfans', 'Superfans', 6, 2, 'You can place on Green spaces rivals have taken.', { squatGreen: true,
      ...see(info => 3 * endsAhead(info).length),
    }), 'pool7'),
    pool(m('packedhouse', 'Packed House', 4, 2, 'Round End: +1 follower per minion on Green spaces, anyone\u2019s.', {
      onAllPlaced(ctx, owner) {
        const n = greenMinions(ctx);
        ctx.asMember(owner, 'Packed House', () => { owner.bonus += n; ctx.log(`${owner.name}'s Packed House: ${n} minion${n === 1 ? '' : 's'} on Green spaces, +${n} follower${n === 1 ? '' : 's'}.`); });
      },
      ...see(info => 4 * endsAhead(info).length),
    }), 'pool7'),
    // balance pass 1 (bench, both bots agree; design/eval/balance-pass-1.md): 4 → 8
    // REPLACE10 bot test (Nov 4, quality loop lane D): Busker's place. 3 green + 2 any as a player sees it. At round start
    // (before anyone places): one round I space of any color, done for its owner as Cover does an empty one (Green's own
    // copy spaces left out: at round start there is nothing for them to copy). Nothing to remember after.
    // Spaces whose text says "this turn" (Gather, Allowance, Splurge, Peek) are left off: at round start there is no turn
    // for that half to apply to (Lab's play judge, Nov 4). Done as the member, so a copied Build Up's +5 says so.
    // REPLACE10=warmup,warmupcheap: 2 green + 2 any (pitches/D-green-4.md), for a trial beside 3 + 2
    ...add10(m('warmup', 'Warm-Up Act', on10('warmupcheap') ? 1 : 2, 2, 'Round Start: copy a round I action without “this turn” in it.', {
      onRoundStart(ctx, owner) {
        const list = emptyTargets(ctx).filter(x => x.a.ring === 1 && !(x.qid === 'echo' && x.a.key !== 'chant') && !/this turn/i.test(x.a.text || ''));
        if (!list.length) return;
        ctx.choose(owner, 'Warm-Up Act: copy which round I action?', list.map(x => ({
          id: `slot:${x.key}`, label: `${x.a.name}: ${x.a.text}`, kind: 'action', value: x.key, hint: emptyValue(ctx, x.a, owner),
        })), 'echo.warmupDo');
      },
    })),
    // REPLACE10 bot test (Nov 4 noon, scale-up batch 2, pitches/D-scale2.md): Busker's place. 3 green + 2 any as a player
    // sees it. On your turn (placing or buying), once a round: one action a rival has a minion on, done for you as Echo
    // copies (Agents blocks it). The card is turned until the next round starts.
    // Live Nov 4 (director, under Cory's "you dont need my permission"): 4 green + 3 any. Trials: at 3 + 2 owners won 39%
    // (Busker 31%); at 4 + 3 taken 84% (Busker 85%), owners won 35% (Busker 32%).
    // Renamed Buskers and counts as two members (Cory, 2026-11-09 9:44pm Eastern: "song request should be buskers and should be two members")
    m('songrequest', 'Buskers', 3, 3, 'On Use, once per round: copy an action a rival has a minion on.', { n: 2, // a round I member as Busker was (bot-tested in round II; Nov 4)
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const list = targets(ctx, owner, 'rival');
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Buskers: no rival action to copy${agentsWhy(ctx, agentsBlocked(ctx, owner, 'rival'))}.`); return; }
        ctx.log(`${owner.name} uses Buskers.`);
        offer(ctx, owner, list, 'Buskers: copy which rival action?', 'now', 'Buskers');
      },
      botActivate: (ctx, p) => targets(ctx, p, 'rival').some(e => entryValue(ctx, e, p) >= 3),
    }),
    m('evergreen', 'Busker', 1, 2, // Cory, 2026-10-25: cost 3 (was 4)
      'On Recruit: +2 green. Round Start: +2 green.', { retired: true, // Song Request takes its place (Nov 4)
      onRecruited(ctx, owner) { ctx.gain(owner, 'green', 2); },
      onRoundStart(ctx, owner) { ctx.gain(owner, 'green', 2); },
    }),
    m('choir', 'Choir', 4, 2, 'Whenever you copy a space, +1 green.', { n: 2 }), // 2 members (Cory, Oct 29: "choir and raiders can be more"; 2 is Claude's start)
    m('muse', 'Muse', 1, 2, 'Whenever a rival copies an action, +1 green.', { retired: true }), // Impersonator takes its place (Claude, under Cory's "use your judgement", 2026-11-03)
    // Replacement batch 3 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Muse's place. 4 green + 2 any as a player sees it. The chosen
    // member's ability rides on the card (card.ability: core's effectiveDefs), never its worth or member count. Its On
    // Recruit does nothing (nothing is being recruited). At round start the ability it holds still does its Round Start,
    // then the owner chooses again; the new one's Round Start waits for the next round. One On Use a game (and one a
    // round) across every ability it holds. Another Impersonator, or an uncopied Doppelganger or Impostors, has no
    // ability of its own to lend, so it isn't offered.
    // Cory, Nov 5 playtest: "Impersonator should impersontate the on recruit": the chosen member's On Recruit runs too,
    // on Impersonator (as Greatest Hits runs one), answering Claude's question about members with only an On Recruit.
    // Words Claude's fill-in.
    m('impersonators', 'Impersonator', 3, 2, "On Recruit: choose a rival's member. Do its On Recruit, and this member gains its ability.", { // On Recruit only (Cory, Nov 5 backlog yes) // a round I member as Muse was (bot-tested in a later round; Nov 3)
      onRecruited(ctx, owner, card) {
        const list = ctx.rivals(owner).flatMap(o => ctx.membersOf(o)).filter(c => c.copy || !['doppel', 'impostor', 'impersonators'].includes(c.def.key));
        if (!list.length) { ctx.log(`${owner.name}'s Impersonator: no rival member to choose.`); return; }
        ctx.choose(owner, "Impersonator: choose a rival's member; Impersonator has that member's ability", list.map(c => ({
          id: `card:${c.uid}`, label: `${ctx.ownerOf(c.uid).name}: ${c.def.name}`, kind: 'member', value: c.uid,
          hint: impersonateHint(ctx, owner, card, defById(c.copy || c.def.id)),
        })), 'echo.impersonate', { uid: card.uid });
      },
    }),
    // Understudy and Ensemble replaced Choirmaster (green for a rival's copy: a gift for doing nothing, and Muse's
    // twin) and Fan (green when a rival takes the center: nothing to do with copying). Claude, 2026-10-14.
    // Cory, 2026-10-28: back in the deck at 4, "two green two wild" (2 green + 1 any + the +1 wild)
    m('understudy', 'Understudy', 2, 1, 'On Recruit: copy the action taken the previous turn.', { // wording Cory's, Oct 28
      onRecruited(ctx, owner) {
        // Retired Understudy keeps its old before-this-turn behavior in saved games; current Echo uses previousNow.
        const L = ledger(ctx.state), skip = L.origin || (L.now[L.open]?.p === owner.id ? L.open : null);
        offer(ctx, owner, targets(ctx, owner, 'previous', skip), 'Understudy: copy the action taken the previous turn?', 'now', 'Understudy');
      },
    }),
    // was "Game end: +1 follower per green member." (2+2) until the design critic's follow-ups (2026-10-14): now it
    // pays for the copy itself, a rival's space only, and the follower counts at once (heard() above).
    m('ensemble', 'Ensemble', 2, 2, 'Whenever you copy your own action, +1 follower.', { n: 2, f: 3 }), // Cory, 2026-10-28: 2 members; (Cory, Oct 29, balance run: +1 follower)
    m('groupie', 'Groupie', 4, 4, 'Whenever anyone recruits a green member, +1 green.', {
      onAnyRecruit(ctx, owner, card, by, recruited) {
        if (recruited.uid !== card.uid && recruited.def.id.startsWith('echo.')) ctx.gain(owner, 'green', 1);
      },
    }),
    m('translator', 'Translator', 3, 1, 'What you copy comes as green. Switch it on or off when you recruit.', {
      toggle: true,
      onRecruited(ctx, owner, card) { card.on = true; },
    }),
    m('tuningfork', 'Impressionist', 1, 2, 'Whenever you copy an action or a member, +2 of its color (grey: any color).'),
    // Cory, 2026-10-28: back as a big card at 10 (6 green + 3 any + the +1 wild); no follower condition any more
    m('wallflower', 'Wallflower', 6, 3, 'Whenever you copy an action, double the resources it gives you.', { ...old2, ...old10('bigfinish'), ...old10('coverband') }),
    // REPLACE10 bot tests (Nov 4, Members D, requalified paper candidates; gate D-wallflower): Wallflower's place, 7 green
    // + 3 any as a player sees it. Big Finish: every space your minions are on right now, each copied once, as Greatest
    // Hits copies (Agents and copy loops stop what they stop).
    ...add10(m('bigfinish', 'Big Finish', 6, 3, 'On Use, once per game: copy every action you have a minion on.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const list = targets(ctx, owner, 'own');
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Big Finish: no action of theirs to copy yet.`); return; }
        ctx.log(`${owner.name} uses Big Finish.`);
        copyAll(ctx, owner, list, 'Big Finish');
      },
      botActivate: (ctx, p) => targets(ctx, p, 'own').reduce((n, e) => n + entryValue(ctx, e, p), 0) >= 6,
    })),
    // Cover Band: Echo without a minion, once a round, as Echo copies.
    ...add10(m('coverband', 'Cover Band', 6, 3, 'On Use, once per round: copy the previous action.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const list = previousNow(ctx, owner);
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Cover Band: no previous action to copy.`); return; }
        ctx.log(`${owner.name} uses Cover Band.`);
        offer(ctx, owner, list, 'Cover Band: copy the previous action?', 'now', 'Cover Band');
      },
      botActivate: (ctx, p) => previousNow(ctx, p).some(e => entryValue(ctx, e, p) >= 3),
    })),
    // REPLACE2 bot test (Nov 3, replacement batch 2): Wallflower's place. 6 green + 3 any as a player sees it. Any color on
    // the table; a pile isn't an action, so Agents doesn't stop it.
    ...add2(m('mirrorimage', 'Mirror Image', 5, 3, 'On Use, once per game: choose a rival and a color; gain that color until you hold as much of it as they do.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const opts = mirrorOptions(ctx, owner);
        if (!opts.length) { card.used = false; ctx.log(`${owner.name}'s Mirror Image: no rival holds more of any color.`); return; }
        ctx.log(`${owner.name} uses Mirror Image.`);
        ctx.choose(owner, 'Mirror Image: match which rival’s pile?', opts, 'echo.mirrorImage');
      },
      botActivate: (ctx, owner) => {
        const best = Math.max(0, ...mirrorOptions(ctx, owner).map(o => o.hint));
        return (ctx.state.round === 3 && best >= 6) || (ctx.state.round === 3 && owner.left === 0 && best > 0);
      },
    })),
    // Keepsake ("When recruited: copy one of your spaces from this round") is cut: Reprise does the same on a space.
    // Cory, 2026-10-28: Mime returns renamed ("yes but needs a different name"); text and cost 3 are Claude's
    // Nov 4 (Claude, under Cory's go-with-your-gut; was "+1 green per Green space with anyone's minion"): fans copy the
    // leader. Holding the most yourself, or tying for it, it reads the rival with the most; rivals tied for the most:
    // any of their actions (Claude's reading). Nothing when that player has no minion on the board.
    m('mirror', 'Fan Club', 2, 3, 'On Recruit: copy an action of the rival with the most followers.', { n: 3, // 3 members, 3 to 6 (Cory, Oct 29: yes to "counts as 3 members, price 3 to 6")
      onRecruited(ctx, owner) {
        const rivals = ctx.rivals(owner);
        if (!rivals.length) return;
        const most = Math.max(...rivals.map(o => ctx.followers(o)));
        const leaders = rivals.filter(o => ctx.followers(o) === most).map(o => o.id);
        const list = targets(ctx, owner, 'any').filter(e => leaders.includes(e.p));
        const names = leaders.map(id => ctx.player(id).name).join(' and ');
        const whose = leaders.map(id => `${ctx.player(id).name}'s`).join(' or ');
        if (!list.length) { ctx.log(`${owner.name}'s Fan Club: ${names} has no minion on an action to copy.`); return; }
        offer(ctx, owner, list, `Fan Club: copy which of ${whose} actions?`, 'now', 'Fan Club');
      },
    }),
    // Cory, 2026-10-28: "Roadie is good" (Green's 16th); cost 3 is Claude's
    // Cory, 2026-11-01 playtest: "roadie should be On Recruit as well" (now: its round-start part fires once on recruit)
    // REPLACE10 bot test (Nov 4, quality loop lane D): Roadie's place. 2 green + 1 any as a player sees it. Fires where
    // Choir does: each copy of an action you make (Echo, Reprise, Cover, a member's copy), once per copy.
    // REPLACE10=copyist,copyist2: the +2 version (pitches/D-green-4.md), for a trial beside the +1
    // Live Nov 5 in Roadie's place (Cory: "swap roadie out for shortlist green"); Roadie's price, 2 green + 1 any.
    m('copyist', 'Copyist', 1, 1, `Whenever you copy an action, +${COPYIST} follower${COPYIST > 1 ? 's' : ''}.`),
    // REPLACE10 bot test (Nov 4 noon, scale-up batch 2): Roadie's place (pitched in D-roadie.md, passed in D-scale2). 2 green +
    // 1 any as a player sees it. At round end, before the minions go home: your minions on Green's spaces (joined spots count).
    ...add10(m('stagehand', 'Stagehand', 1, 1, 'Round End: +1 follower per minion you have on Green spaces.', {
      onRoundEnd(ctx, owner) {
        const n = minionsOnGreen(ctx, owner);
        if (!n) return;
        owner.bonus += n;
        ctx.log(`${owner.name}'s Stagehand: ${n} minion${n === 1 ? '' : 's'} on Green spaces: +${n} follower${n === 1 ? '' : 's'}.`);
      },
    })),
    m('roadie', 'Roadie', 1, 1, 'On Recruit: +1 green per green member you have. Round Start: +1 green per green member you have.', { now: true, retired: true, ...old4, ...old10('copyist'), ...old10('stagehand'),
      onRoundStart(ctx, owner) {
        const g = ctx.countMembersOfColor(owner, 'echo');
        if (g) ctx.gain(owner, 'green', g);
      },
    }),
    // REPLACE9 (Members C, Nov 4, batch bC11: paper 17 vs 14, quality/evals/gate/C-roadie2): Roadie's place, same
    // price. Pays on every action copy (Echo, Reprise, Cover, Understudy, Stunt Double, Fan Club, Tribute Band), not
    // on copied On Recruits (Sample, Greatest Hits); counts itself, as the old Roadie did.
    // trial q-c-roadie9-c2 (120 Hard games a side): taken 75%, owners won 31% (130 owners; old Roadie 31%). Live Nov 4.
    // Retired Nov 5 (Cory flagged it far too strong; Copyist takes its place).
    m('roadie9', 'Roadie', 1, 1, 'Whenever you copy an action, +1 green per green member you have.', { retired: true }),
    // REPLACE9 (Members C, bC11: paper 16 vs 14; Cory's "paper filters, play ranks", Nov 4): Roadie's place, same price.
    // "Your last turn": your latest space this round (Stunt Double's read); none yet, the use comes back.
    ...add9(m('setlist', 'Setlist', 1, 1, 'On Use, once per round: copy the last action you took this round.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const e = justTook(ctx, owner);
        if (!e) { card.used = false; ctx.log(`${owner.name}'s Setlist: nothing to copy yet this round.`); return; }
        withPath(ctx, [], () => copy(ctx, owner, e, { by: 'Setlist' }), e.key);
      },
      botActivate: (ctx, owner) => !!justTook(ctx, owner),
    })),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Roadie's place. 3 green + 1 any as a player sees it. Core scores it
    // (contestTable, flag copycat): in each contest, a holder whose count is exactly the winner's minus 1, and at least 1,
    // is one of its winners, so the prize splits as any tie's. A spoiled contest has no winner to tie.
    ...add4(m('copycats', 'Copycats', 2, 1, 'Round End: in each contest where you hold exactly 1 less than the winner, you tie for it.', { copycat: true })),
    m('afterimage', 'Sleepwalker', 4, 2, 'On Recruit: copy one of your spaces from last round. Round Start: copy one of your spaces from last round.', { now: true,
      onRoundStart(ctx, owner) {
        const L = ledger(ctx.state);
        const list = Object.values(L.last).filter(e => copyable(e) && e.p === owner.id);
        offer(ctx, owner, list, 'Sleepwalker: copy which of your spaces from last round?', 'last', 'Sleepwalker');
      },
    }),
    m('hourglass', 'Stunt Double', 2, 2, 'On Recruit: copy the action you just took.', {
      onRecruited(ctx, owner) {
        const e = justTook(ctx, owner);
        if (!e) {
          ctx.log(`${owner.name}'s Stunt Double has nothing to copy.`);
          return;
        }
        // A recruited member begins its own chain, even when an action recruited it for free; copied by Greatest Hits,
        // it stays in Greatest Hits' chain. That includes a copy reached through a choice made later (Greatest Hits →
        // Impersonator → a rival's Stunt Double), when hitsChain is already off but the path still holds Greatest Hits:
        // starting fresh there copied Greatest Hits again, forever (seeded bot game, Nov 6).
        const hits = hitsKeys(ctx), inHits = hitsChain || pathNow(ctx).some(k => hits.includes(k));
        withPath(ctx, inHits ? pathNow(ctx) : [], () => copy(ctx, owner, e, { by: 'Stunt Double' }), inHits ? undefined : e.key);
      },
    }),
    // Cory, 2026-10-28: "lets shift tribute band into this", then "should maybe get to pick the rival they copy"
    m('dejavu', 'Tribute Band', 9, 4, /* Cory, Nov 6 12:24am: "make it 10 instead of 11. 10 green 6 wild" (as seen) */ /* Cory, Nov 5: "get tribute band back in at 12" (9 green + 3 any as seen) */ /* Cory, Oct 27: "tribute band at 12" (with the +1 wild); 14 (Cory, Nov 1: "just raise it to 14") */ 'On Use, once per game: choose a rival. Do every action they have a minion on this round.', { n: 3, // 3 members, still 12 (Cory, Oct 29: "Tribute Band at least 3. its cost should still be 12")
      activate: 'game',
      onActivate(ctx, owner, card) {
        const list = ctx.rivals(owner).filter(o => ownPlan(ctx, o).take.length);
        // nothing to copy: the use isn't spent (as Stunt Double's isn't)
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Tribute Band has no rival's actions to copy.`); return; }
        if (list.length === 1) { copyLeader(ctx, owner, list[0]); return; }
        ctx.choose(owner, 'Tribute Band: whose actions?', list.map(o => ({
          id: `player:${o.id}`, label: o.name, kind: 'player', value: o.id, hint: ownPlan(ctx, o).take.reduce((n, e) => n + entryValue(ctx, e, owner), 0),
        })), 'echo.tribute', { uid: card.uid });
      },
      botActivate: (ctx, owner) => owner.left === 0 && ctx.state.round >= 2
        && Math.max(0, ...ctx.rivals(owner).map(o => ownPlan(ctx, o).take.reduce((n, e) => n + entryValue(ctx, e, owner), 0))) >= (ctx.state.round === 3 ? 6 : 10),
      ...old4,
    }),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Tribute Band's place. 7 green + 3 any as a player sees it. "The first
    // minion of a round" is the round's first one placed on the wheel. It is a copy (Agents stops it, Bait and
    // Impressionist answer it), made after that space's own choices and before its taker's recruit step.
    ...add4(m('openingact', 'Opening Act', 6, 3, 'Whenever a rival places the first minion of a round, you do that action too.', { f: 2,
      // BOTSEE: each later round, a rival goes first (seats − 1 in seats), and a copied action brings about 80% of a placement
      ...see(i => [1, 2, 3].filter(r => r > i.round).reduce((a, r) => a + ((i.n - 1) / i.n) * 0.8 * i.income[r - 1], 0)),
      afterRivalAction(ctx, owner, card, qid, rival) {
        const st = ctx.state;
        if (card.opened === st.round || !ctx.placement) return;
        const placed = Object.keys(st.slots).length + Object.values(st.squats || {}).reduce((n, list) => n + list.length, 0);
        if (placed !== 1) return;
        card.opened = st.round;
        // behind the space's own choices (queued as it resolves, at the head), ahead of the taker's recruit step
        const q = st.queue, at = q.findIndex(t => t.t !== 'choose' && t.t !== 'content');
        q.splice(at < 0 ? q.length : at, 0, { t: 'content', p: owner.id, h: 'echo.openingAct', data: { key: ctx.placement.key, pid: rival.id } });
      },
    })),
    // Cory, 2026-10-15: moved here from Red (same card; its rename and recruit-time pick wait for his redesign)
    m('doppel', 'Doppelganger', 3, 2, /* Cory, Nov 5 backlog price yes */ 'On Recruit: this member becomes a copy of another of your members.', { round: 3, // joins in round III (Cory, 2026-10-25)
      onRecruited(ctx, owner, card) {
        const own = ctx.membersOf(owner).filter(c => c.uid !== card.uid && (c.copy || !['doppel', 'impostor'].includes(c.def.key)));
        if (!own.length) return;
        ctx.choose(owner, 'Doppelganger: copy which of your members?', own.map(c => ({
          id: `card:${c.uid}`, label: c.def.name, kind: 'member', value: c.uid,
          hint: ['banker', 'prospector', 'recruiter', 'proselytizer', 'host'].includes(c.def.key) ? 2 : (c.def.vanilla ? 0 : 1),
        })), 'echo.doppelCopy', { uid: card.uid });
      },
    }),
    m('impostor', 'Impostors', 2, 3, /* Cory, 2026-10-28: "more expensive": 6 (was 5) */ 'On Recruit: this member becomes a copy of a rival’s member.', { f: 2, n: 2, round: 3, // +1 follower and member (Cory, Oct 30); joins in round III (Cory, 2026-10-25)
      onRecruited(ctx, owner, card) {
        const rivals = ctx.rivals(owner).flatMap(p => ctx.membersOf(p)).filter(c => c.copy || !['doppel', 'impostor'].includes(c.def.key));
        if (!rivals.length) return;
        ctx.choose(owner, 'Impostors: copy a rival’s member', rivals.map(c => ({
          id: `card:${c.uid}`, label: `${ctx.ownerOf(c.uid).name}: ${c.def.name}`, kind: 'member', value: c.uid,
          hint: (defById(c.copy || c.def.id).f || 1) + 1,
        })), 'echo.doppelCopy', { uid: card.uid });
      },
    }),
    m('connector', 'Connector', 2, 2, 'On Recruit: +1 green per non-green member you have. Round Start: +1 green per non-green member you have.', {
      onRecruited(ctx, owner) { ctx.gain(owner, 'green', nonGreenMembers(ctx, owner)); },
      onRoundStart(ctx, owner) { ctx.gain(owner, 'green', nonGreenMembers(ctx, owner)); },
    }),
    m('agents', 'Agents', 1, 1, 'Your actions can’t be copied.', { f: 2, n: 2 }),
    m('bait', 'Bait', 1, 1, 'Whenever anyone copies one of your actions, they −1 follower and you +1 follower.'),
    // REPLACE10 bot test (Nov 4): Chronicler's place, Cory's idea ("use once per game and the next on-recruit is doubled").
    // 2 green + 3 any as a player sees it. Used on your turn; the member you recruit later this same turn has its On
    // Recruit (or now-and-round-start effect) done twice (core's recruit). A recruit on another turn doesn't count.
    // Cory, Nov 4 10:45am Eastern ("Yeah, go with mine"): Encore takes Chronicler's place, in his words ("once per game,
    // your next On Recruit is doubled"). Used on any turn; the next member you recruit that has an On Recruit, on any turn,
    // has it happen twice; the card stays turned until then, so a table can see it's waiting. Price 2 green + 3 any.
    // Archived: the "this turn" wording (REPLACE10=encore, Nov 4 trials q-d-encore-c1, A/B +0.28).
    m('encore', 'Encore', 2, 2, /* Cory, Nov 5 backlog price yes */ 'On Use, once per game: your next On Recruit happens twice.', {
      activate: 'game',
      onActivate(ctx, owner) {
        owner.encoreTurn = 'next';
        ctx.log(`${owner.name} uses Encore: their next On Recruit happens twice.`);
      },
      // bots use it in the buy step, right before the recruit it should double (Cory, Nov 4: the A/B lost because bots
      // used it early and then bought something else): only when the priciest shop member they can pay for has an On Recruit
      botActivate: (ctx, p) => {
        const can = ctx.shopCards().filter(c => ctx.payChoices(p, c.uid, {}).length);
        if (!can.length) return false;
        const top = can.reduce((a, c) => (c.def.s + c.def.w > a.def.s + a.def.w ? c : a));
        return !!(top.def.onRecruited || top.def.now) && top.def.s + top.def.w >= 5;
      },
    }),
    // REPLACE10 bot test (Nov 4, quality loop lane D): Chronicler's place. 4 green + 3 any as a player sees it. On your
    // turn, once a round: another of your members' On Recruit (or now-and-round-start effect, as Greatest Hits reads it)
    // runs again for you, as one Greatest Hits copy does; the card is turned until the next round starts.
    ...add10(m('bootlegger', 'Bootlegger', 3, 3, 'On Use, once per round: copy the On Recruit of another of your members.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const list = ownRecruits(ctx, owner).filter(c => c.uid !== card.uid && recruitDef(c).key !== 'bootlegger');
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Bootlegger: no other member with an On Recruit.`); return; }
        ctx.log(`${owner.name} uses Bootlegger.`);
        ctx.choose(owner, 'Bootlegger: copy which member\'s On Recruit?', list.map(c => {
          const d = recruitDef(c);
          return { id: `card:${c.uid}`, label: `${d.name}: ${d.text}`, kind: 'card', value: c.uid, hint: 2 + (d.f || 0) };
        }), 'echo.bootleg');
      },
      botActivate: (ctx, p) => ownRecruits(ctx, p).some(c => recruitDef(c).key !== 'bootlegger'),
    })),
    m('chronicler', 'Chronicler', 1, 3, 'Game End: +1 follower per green member you have.', { retired: true, // Encore takes its place (Cory, Nov 4)
      onGameEnd: (ctx, owner) => ctx.countMembersOfColor(owner, 'echo'),
    }),
  ],
};

export function justTook(ctx, p) {
  const L = ledger(ctx.state);
  // your own latest space this round (a rival's space or a copy that ran since can't stand in for it)
  const last = Object.values(L.now).filter(x => x.p === p.id).sort((a, b) => (b.seq || 0) - (a.seq || 0))[0];
  // Recruit hooks can run inside a still-resolving take/swap, before its wrapper settles the yield.
  // Read a settled copy so Stunt Double sees that action without mutating the ledger during UI previews.
  // Only while the space's window is open: once its buy step has started, what the taker pays for a member there is
  // a purchase, not the space taking (re-settling then made Stunt Double redo any space that gave less than the price).
  const e = last && { ...last };
  if (e?.before && windowOpen(ctx.state, last)) settle(ctx.state, e);
  return e && e.p === p.id && copyable(e) && !protectedAction(ctx, e, p) ? e : null;
}

/** Stagehand (REPLACE10): p's minions on Green spaces, joined spots counted. */
function minionsOnGreen(ctx, p) {
  const st = ctx.state, qi = st.quadrants.indexOf('echo');
  let n = 0;
  for (const [key, pid] of Object.entries(st.slots || {})) if (key.startsWith(`${qi}-`) && pid === p.id) n++;
  for (const [key, list] of Object.entries(st.squats || {})) if (key.startsWith(`${qi}-`)) n += list.filter(id => id === p.id).length;
  return n;
}
const nonGreenMembers = (ctx, p) => ctx.membersOf(p).reduce((n, c) => n + (c.def.quadrant === 'echo' ? 0 : ctx.memberWeight(c)), 0);
const greenOccupied = ctx => {
  const q = ctx.state.quadrants.indexOf('echo');
  return Object.keys(ctx.state.slots).filter(key => key.startsWith(`${q}-`) && key !== `${q}-0`).length;
};

export default echoQ;

let installed = false;
/** Register Green and start the yield ledger on every quadrant registered so far. Call once, after the others. */
export function install() {
  if (!installed) registerQuadrant(echoQ);
  for (const id of allQuadrantIds()) {
    const q = quadrant(id);
    q.actions.forEach((a, i) => wrapAction(id, a, i));
    for (const k of Object.keys(q.handlers || {})) wrapHandler(q, k);
    // re-index the wrapped handlers, keeping any relabelled member colors (thieves.js does the same trick)
    const labels = q.members.map(d => d.quadrant);
    registerQuadrant(q);
    q.members.forEach((d, i) => { if (labels[i]) d.quadrant = labels[i]; });
  }
  installed = true;
  return echoQ;
}

/** Mirror Image (REPLACE2): every rival and color where the rival holds more than p; the hint is what p gains. */
function mirrorOptions(ctx, p) {
  const out = [];
  for (const o of ctx.rivals(p)) for (const c of ctx.state.resources) {
    const d = (o.res[c] || 0) - (p.res[c] || 0);
    if (d > 0) out.push({ id: `mirror:${o.id}:${c}`, label: `${o.name}'s ${c}: +${d}`, kind: 'choice', value: [o.id, c], hint: d });
  }
  return out;
}

/** Impersonator (REPLACE3): a rough worth of holding def's ability, for bots' near ties (an On Recruit or a plain card
 *  lends nothing; a game-end count is read now). */
function impersonateHint(ctx, owner, card, def) {
  const keys = Object.keys(def).filter(k => !['key', 'name', 's', 'w', 'text', 'f', 'n', 'id', 'quadrant', 'copies', 'vanilla', 'round', 'onRecruited', 'extraColor', 'extraWild', 'retired'].includes(k));
  if (def.vanilla || !keys.length) return 0;
  let end = 0;
  if (def.onGameEnd) { try { end = def.onGameEnd(ctx, owner, card) || 0; } catch { end = 0; } }
  return (def.s + def.w) * 0.5 + end;
}

