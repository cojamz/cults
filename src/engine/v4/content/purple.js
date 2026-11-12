import { richUp } from './price.js';
// Purple: extra turns. Its spaces give them free (Cory, 2026-10-15: no board action requires spending); purple held
// counts for the ring, and members (Taskmaster) can still buy a turn with it.
// Most purple at round end takes the ring's followers.
// Rework (Claude, 2026-10-14, under Cory's go-with-your-gut, after his first play): every extra turn a Purple space
// gives is a net gain (one worker in, two or more out); Linger became Plan Ahead; the ring counts purple honestly.
// Reprice (Claude, 2026-10-14, go-with-your-gut, from the member-value sim in design/eval/purple-members.md): Corner-Cutter,
// Taskmaster, Late Risers 4+2; Overseer 2+2; Go-Getter 6+2. Night Owls takes Relay's slot.
//
// Engine notes (content-only, no core change, but for roundOrder):
// - Crunch Time is not an extra turn: turnsNow moves your own next turns up to right after this one (no new minion).
// - An extra turn is an ordinary { t: 'turn' } task put right after the current turn ends (p.left += 1).
// - Extra turns only happen when the board has a space to spare (more open spaces than turns still to come),
//   so they never squeeze anyone out of the last space (round I fills every space).
// - onExtraTurn / onRivalExtraTurn are purple-only member hooks, fired by the helpers below.
import { defById, spacesOf } from './index.js';
import { add3, old3, handlers3 } from './replace3.js';
import { add5, old5 } from './replace5.js';
import { swap11, handlers11 } from './replace11.js';
import { add14, old14 } from './replace14.js';
import { add13, old13 } from './replace13.js';
import { add7, old7, REPLACE7 } from './replace7.js';
import { REPLACE3 } from './replace3.js';
import { add9, old9 } from './replace9.js';
import { see, endsAhead } from './botsee.js';
import { pool, poolSpace, chooseRival, freeAsk, freeTake } from './pool.js';

const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });
const P = 'purple';
const wheelMinions = ctx => Object.keys(ctx.state.slots || {}).length + Object.values(ctx.state.squats || {}).reduce((n, l) => n + l.length, 0);
const TURN_VALUE = [3, 5, 7]; // a placement plus its buy, by round

/** Workers p has on the board right now (a worker sharing a rival's space counts too). */
export const onBoard = (ctx, p) => Object.values(ctx.state.slots).filter(o => o === p.id).length
  + Object.values(ctx.state.squats || {}).reduce((s, list) => s + list.filter(o => o === p.id).length, 0);
/** Open spaces right now, as [quadrant index, action index]. */
function openSpaces(ctx) {
  const out = [];
  ctx.state.quadrants.forEach((qid, q) => spacesOf(ctx.state, qid).forEach((a, i) => {
    if (!(a.ring > ctx.state.round || (a.lastRound && ctx.state.round > a.lastRound)) && ctx.state.slots[`${q}-${i}`] === undefined) out.push([q, i]);
  }));
  return out;
}
// a minion still to land this turn counts too (a queued place, or one held while a member is used beside the spaces):
// Go-Getter used before placing at a full round I took a rival's last space, and the rival's minion sat out
const scheduled = ctx => ctx.state.queue.filter(t => t.t === 'turn' || t.t === 'place').length + (ctx.state.unplaced || 0);
/** True when one more turn can't squeeze anyone out of a space. */
export const spareSpace = ctx => openSpaces(ctx).length > scheduled(ctx);
/** What extra turns that cost `base` purple cost p (Corner-Cutter halves it, rounded up). Only Taskmaster pays now:
 *  Overtime is free (Cory, 2026-10-15: "no board action should require spending"). */
const priceFor = (ctx, p, base) => (ctx.membersOf(p).some(c => ctx.defsOf(c).some(d => d.halfTurns)) ? Math.ceil(base / 2) : base);
/** How many more turns the board has room for (open spaces beyond the turns still to come). */
const room = ctx => openSpaces(ctx).length - scheduled(ctx);
const canBuyTurn = (ctx, p, base, n = 1) => (p.res[P] || 0) >= priceFor(ctx, p, base) && room(ctx) >= n;
/** "(Corner-Cutter: 8 → 4)" when Corner-Cutter made it cheaper, so the price traces to the card. */
const halfNote = (base, c) => (c < base ? ` (Corner-Cutter: ${base} → ${c})` : '');
/** Pay for n extra turns; without the purple (or the spare spaces), take the fallback gain instead. */
function buyTurn(ctx, p, base, what, fallback, member = false, n = 1) {
  if (canBuyTurn(ctx, p, base, n)) {
    const c = priceFor(ctx, p, base);
    p.res[P] -= c;
    const turns = n === 1 ? 'an extra turn' : `${n} extra turns`;
    ctx.log(member ? `${p.name}'s ${what}: pays ${c} purple for ${turns}${halfNote(base, c)}.` : `${p.name} pays ${c} purple for ${what}${halfNote(base, c)}.`);
    extraTurns(ctx, p, n);
    return true;
  }
  if (fallback) ctx.gain(p, P, fallback, { fromAction: true });
  return false;
}
const turnValue = ctx => TURN_VALUE[ctx.state.round - 1] || 3;
/** A free space: n extra turns right after this one, as many as the board has room for. */
const freeTurnsEstimate = (ctx, n) => Math.max(0, Math.min(n, room(ctx) - 1)) * turnValue(ctx);
function freeTurns(ctx, p, n, what) {
  if (!spareSpace(ctx)) { ctx.log(`${p.name}'s ${what}: no free space this round, so no extra turn.`); return 0; }
  // a seat placing on taken spaces (Overtime) could take the same extra-turn space forever: none that round
  if (p.squatAll === ctx.state.round) { ctx.log(`${p.name}'s ${what}: no extra turn while placing on taken spaces.`); return 0; }
  return extraTurns(ctx, p, n);
}

function fire(ctx, p, hook, ...args) {
  for (const c of ctx.membersOf(p)) {
    const defs = [c.def];
    // the copied member's def by id: it may be a guest member with no quadrant of its own
    if (c.copy) defs.push(defById(c.copy));
    // run as the member, so what it changes is logged under its name (Foreman, Courier, Apprentice, Overseer)
    for (const d of defs) if (d && d[hook]) ctx.asMember(p, d.name, () => d[hook](ctx, p, c, ...args));
  }
}
function extraHooks(ctx, p) {
  fire(ctx, p, 'onExtraTurn');
  for (const o of ctx.rivals(p)) fire(ctx, o, 'onRivalExtraTurn', p);
}

/** One more minion for p this round, placed after everyone else's (the snake carries on until every minion is placed).
 *  Only while the board has a free space for it, so a round never hands out more extra minions than it has spare spaces. */
export function extraMinion(ctx, p, what) {
  if (ctx.state.round === 1) { ctx.log(`No extra minions in round I: ${p.name} gets no extra minion from ${what}.`); return 0; }
  if (!spareSpace(ctx)) { ctx.log(`${p.name}'s ${what}: no free space this round, so no extra minion.`); return 0; }
  // before the round closes: ahead of allPlaced, or, once that has run (a recruit during Straggler's after-the-last-minion
  // step), ahead of the round's end; never after it (a seeded game placed a minion after the game was over, Nov 4)
  const q = ctx.state.queue, close = q.findIndex(t => t.t === 'allPlaced'), end = q.findIndex(t => t.t === 'endRound');
  q.splice(close >= 0 ? close : end >= 0 ? end : q.length, 0, { t: 'turn', p: p.id });
  p.left += 1;
  ctx.log(`${p.name}'s ${what}: ${p.name} gets 1 more minion this round.`);
  extraHooks(ctx, p);
  return 1;
}

// where the current turn ends in the queue. A preview has no endTurn: its hold stands in, so an extra turn waits behind
// it and never starts inside the preview (Errand Runner copied by Sample started the turn there and paid Courier's
// "consecutive turn" +1 each, which the real turn only pays once the recruit step is done, Nov 5)
const turnEnd = q => q.findIndex(t => t.t === 'endTurn' || t.t === 'previewHold');

/** Give p up to n extra turns right after the current one. Returns how many it got. */
export function extraTurns(ctx, p, n = 1, why = null, { quiet = false } = {}) {
  // no extra minions in round I (Cory, 2026-10-15): every space there is already spoken for
  if (ctx.state.round === 1) { ctx.log(`No extra minions in round I: ${p.name} gets no extra turn${why ? ` from ${why}` : ''}.`); return 0; }
  let k = 0;
  for (; k < n && spareSpace(ctx); k++) {
    const q = ctx.state.queue;
    const end = turnEnd(q);
    q.splice(end < 0 ? 0 : end + 1 + k, 0, { t: 'turn', p: p.id });
    p.left += 1;
  }
  if (k) {
    // why: the member that gave it (Errand Runner, Go-Getter), so the turn traces to the card
    if (!quiet) ctx.log(`${why ? `${p.name}'s ${why}: ${p.name}` : p.name} gets ${k === 1 ? '1 more minion' : `${k} more minions`}, placed now.`); // Cory, 2026-10-29: "extra turn" left the game's words
    for (let i = 0; i < k; i++) extraHooks(ctx, p);
  // said with the card or space first, so the turn card names it (Cory, 2026-10-15: "I bought Night Owls in round 1 and it
  // didn't seem to give me an extra"; with 4 players round I has no free space)
  } else ctx.log(why ? `${p.name}'s ${why}: no free space this round, so no extra turn.` : `No free space this round: ${p.name} gets no extra turn.`);
  return k;
}

/** p is passed over on their next turn this round; that minion places once the snake carries on past everyone else. */
function skipNext(ctx, p, why, by = p, quiet = false, { token = false, last = false } = {}) {
  // Early Birds (Cory, 2026-10-22): "your turns cannot be skipped", your own Sleep In and Last Call too
  if (noSkip(ctx, p)) { if (!quiet) ctx.log(`${p.name}'s Early Birds: ${p.name}'s turn can't be skipped.`); return false; }
  const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn');
  const close = q.findIndex(t => t.t === 'allPlaced'), stop = close < 0 ? q.length : close;
  const mine = t => t.t === 'turn' && t.p === p.id && !t.token && !(last && t.now);
  let i = end + 1;
  // last: the hand empties at its last snake turn (Sleep In puts one minion on the Goes Last token)
  if (last) { i = stop - 1; while (i > end && !mine(q[i])) i--; if (i <= end) i = stop; }
  else while (i < stop && !mine(q[i])) i++;
  if (i >= stop) { ctx.log(`${by.name}'s ${why}: ${p === by ? 'no turn' : `${p.name} has no turn`} left to skip this round.`); return false; }
  // where that turn sat in the round's order, matched as the seats match it (as turnsNow does)
  const s = ctx.state, { order } = ctx.roundOrder();
  const seq = [...(s.turns || []).map(pid => ({ pid })), ...q.filter(t => t.t === 'turn').map(task => ({ pid: task.p, task }))];
  let j = 0;
  for (const t of seq) if (j < order.length && order[j] === t.pid) t.at = j++;
  const [task] = q.splice(i, 1);
  const at = (seq.find(t => t.task === task) || {}).at;
  if (token) task.token = true;
  // where the turn sat, a marker: the turn is really skipped when play reaches it (Gossip pays then); a token's marker
  // turns back into the turn if the token is taken first (the minion goes back to its owner's hand)
  q.splice(i, 0, { t: 'content', p: p.id, h: 'purple.skipped', data: token ? { why, by: by.id, token: true, ...(at !== undefined ? { at } : {}) } : { why, by: by.id } });
  q.splice(stop, 0, task);
  // its new place: after every other turn of the round's order still to come
  if (at !== undefined && at !== order.length - 1) {
    if (!s.early || s.early.round !== s.round) s.early = { round: s.round, moves: [] };
    s.early.moves.push({ p: p.id, from: at, to: order.length - 1, why, late: true });
  }
  if (!quiet) ctx.log(`${by.name}'s ${why}: ${p.name} skips their next turn.`);
  return true;
}
const noSkip = (ctx, p) => ctx.membersOf(p).some(c => ctx.defsOf(c).some(d => d.noSkip));
/** p's turns still to come this round (after the one now running), as queue indices. */
const turnsAhead = (ctx, p) => {
  const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn'), close = q.findIndex(t => t.t === 'allPlaced');
  const out = [];
  for (let i = end + 1; i < (close < 0 ? q.length : close); i++) if (q[i].t === 'turn' && q[i].p === p.id) out.push(i);
  return out;
};
/** Pool 3: p steals n resources from rival o, one at a time from o's biggest pile (no choice on the trigger), as one
 *  steal (protections and steal reactions apply). Returns how many it took. */
function plainSteal(ctx, p, o, n, name) {
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
/** Stagehands (pool 4): one extra recruit for p, right after the buy step still to come this turn (as Blue's extraBuys);
 *  off p's turn, a recruit step of its own now. */
function extraRecruit(ctx, p) {
  const q = ctx.state.queue;
  let at = q.findIndex(t => !t._fresh);
  if (ctx.state.current === p.id) for (let i = 0; i < q.length; i++) {
    if (q[i].p !== p.id) continue;
    if (q[i].t === 'endTurn') { at = i; break; }
    if (q[i].t === 'buy') { at = i; break; }
  }
  q.splice(at < 0 ? q.length : at, 0, { t: 'buy', p: p.id });
}
/** Bouncers / Doormen (pool 3): a rival's recruits this turn reached the line, so they skip their next turn. */
function bounceCheck(ctx, owner, card, by, member, line, name) {
  if (by === owner || ctx.state.current !== by.id || !member) return;
  const key = ctx.turnKey();
  if (!card.bounce || card.bounce.k !== key || card.bounce.pid !== by.id) card.bounce = { k: key, pid: by.id, n: 0 };
  const before = card.bounce.n;
  card.bounce = { ...card.bounce, n: before + ctx.memberWeight(member) };
  if (before < line && card.bounce.n >= line) ctx.asMember(owner, name, () => {
    ctx.log(`${owner.name}'s ${name}: ${by.name} recruited ${line} or more members this turn.`);
    skipNext(ctx, by, name, owner);
  }, card.uid);
}
/** Who holds the Goes Last token this round (Cory, Nov 1, 2:16pm and 2:35pm), or null. */
export const tokenHolder = s => (s.goesLast && s.goesLast.round === s.round ? s.goesLast.pid : null);
/**
 * p takes the Goes Last token: "Its holder places the minions on it once every hand is empty. If someone takes it, the
 * minions on it go back to their owner's hand." The old holder's minions rejoin the snake: each one still waiting on a
 * passed turn takes that turn again, and any whose turn already went by places after the other hands (core lastCallLast
 * keeps the new holder's minions on the token behind them).
 */
function takeToken(ctx, p, why, what = '') {
  const s = ctx.state, was = tokenHolder(s);
  s.goesLast = { round: s.round, pid: p.id };
  // POCKETWATCH=token<n>, bot test only (Cory, Nov 6: "when you take the Go Last token, +4 purple or something")
  const tok = String(globalThis.process?.env?.POCKETWATCH || 'token2').match(/^token(\d+)$/);
  if (tok && was !== p.id) for (const c of ctx.abilitiesOf(p)) if (c.def.id === 'purple.pocketwatch') ctx.asMember(p, c.def.name, () => {
    const got = ctx.gain(p, 'purple', Number(tok[1])); if (got) ctx.log(`${p.name}'s ${ctx.cloakOr(c, 'Pocket Watch')}: +${got.n} ${got.color}.`);
  }, c.uid);
  // Sleepyheads (REPLACE7): "Whenever you take the Goes Last token, +2 followers."
  for (const c of ctx.membersOf(p)) if (c.def.tokenPay) ctx.asMember(p, c.def.name, () => {
    p.bonus += c.def.tokenPay;
    ctx.log(`${p.name}'s ${c.def.name}: ${p.name} takes the Goes Last token, +${c.def.tokenPay} followers.`);
  }, c.uid);
  // idea pipeline pool 3 (Ushers' Cut, Ticket Takers): "Whenever you take the Goes Last token", a take, not a keep
  if (was !== p.id) for (const c of ctx.membersOf(p)) if (c.def.onTakeToken) ctx.asMember(p, c.def.name, () => c.def.onTakeToken(ctx, p, c), c.uid);
  // idea pipeline pool 10 (Scalpers): "Whenever a rival takes the Goes Last token"; no live card has the hook
  if (was !== p.id) for (const o of ctx.rivals(p)) for (const c of ctx.membersOf(o)) if (c.def.onRivalTakeToken) ctx.asMember(o, c.def.name, () => c.def.onRivalTakeToken(ctx, o, c, p), c.uid);
  // idea pipeline pool 12 (candidates only): Line Jumpers, "Whenever a rival takes the Goes Last token, your next turn
  // comes right after theirs"; Bellhops (the variation, renamed: pool 10 has a Night Porters), "Whenever the Goes Last token leaves you, ..." (turnsNow, as Right Away)
  if (was !== p.id) for (const o of ctx.rivals(p)) for (const c of ctx.membersOf(o)) {
    if (c.def.pool && (c.def.lineJump || (c.def.tokenLeaves && was === o.id))) ctx.asMember(o, c.def.name, () => turnsNow(ctx, o, 1, c.def.name), c.uid);
  }
  if (was === null || was === p.id) { ctx.log(`${p.name}'s ${why}: ${p.name} ${was === p.id ? 'keeps' : 'takes'} the Goes Last token${what}.`); return; }
  const o = ctx.player(was), q = s.queue;
  const close = q.findIndex(t => t.t === 'allPlaced'), stop = close < 0 ? q.length : close;
  const on = q.slice(0, stop).filter(t => t.t === 'turn' && t.p === o.id && t.token);
  on.forEach(t => { delete t.token; });
  // a passed turn still to come is the minion's own turn again
  for (const t of on) {
    const m = q.findIndex(x => x.t === 'content' && x.h === 'purple.skipped' && x.p === o.id && x.data && x.data.token);
    if (m < 0) break;
    const at = q[m].data.at;
    q.splice(q.indexOf(t), 1);
    q.splice(q.findIndex(x => x.t === 'content' && x.h === 'purple.skipped' && x.p === o.id && x.data && x.data.token), 1, t);
    if (s.early && s.early.round === s.round) {
      const k = s.early.moves.findIndex(mv => mv.p === o.id && mv.late && mv.from === at);
      if (k >= 0) s.early.moves.splice(k, 1);
    }
  }
  ctx.log(`${p.name}'s ${why}: ${p.name} takes the Goes Last token${what} from ${o.name}${on.length ? `, and ${on.length === 1 ? 'the minion on it goes' : `the ${on.length} minions on it go`} back to ${o.name}` : ''}.`);
}
/** Switch Places (pool 13): the queue index of p's next turn this round (not one waiting on the token), or -1. */
function nextOwnTurn(ctx, p) {
  const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn'), close = q.findIndex(t => t.t === 'allPlaced');
  for (let i = end + 1; i < (close < 0 ? q.length : close); i++) if (q[i].t === 'turn' && q[i].p === p.id && !q[i].token) return i;
  return -1;
}
/** Rivals whose next turn can trade with p's; gain: how many places earlier p's turn comes. */
function switchTargets(ctx, p) {
  const i = nextOwnTurn(ctx, p);
  if (i < 0) return [];
  return ctx.rivals(p).map(o => ({ o, j: nextOwnTurn(ctx, o) })).filter(x => x.j >= 0).map(x => ({ ...x, gain: i - x.j }));
}
function askSwitch(ctx, p, name) {
  const list = switchTargets(ctx, p);
  if (!list.length) { ctx.log(`${p.name}'s ${name}: no next turn to swap.`); return false; }
  ctx.choose(p, `${name}: swap your next turn with which rival's next turn?`, list.map(({ o, gain }) => ({
    id: `player:${o.id}`, label: `${o.name} (your turn moves ${gain >= 0 ? `${gain} earlier` : `${-gain} later`})`, kind: 'player', value: o.id, hint: gain,
  })), 'purple.switchTurn', { name });
  return true;
}
/** Scalpers (pool 10): the token's taker gives the Scalpers' owner 2 of their resources, picked one at a time. */
function scalpStep(ctx, p, data) {
  const to = ctx.player(data.to), have = ctx.state.resources.filter(c => (p.res[c] || 0) > 0);
  if (data.left > 0 && have.length) {
    ctx.choose(p, `${to.name}'s Scalpers: give ${to.name} 1 of which resource? (${data.left} to give)`, have.map(c => ({
      id: `color:${c}`, label: c, kind: 'color', value: c, hint: p.res[c] - (c === P ? 1 : 0),
    })), 'purple.scalpGive', data);
    return;
  }
  if (data.n) ctx.log(`${to.name}'s Scalpers: ${p.name} took the Goes Last token and gave ${to.name} ${data.got.join(' and ')}.`);
  else ctx.log(`${to.name}'s Scalpers: ${p.name} took the Goes Last token but has nothing to give.`);
}
/**
 * p takes the Goes Last token and puts n of their minions still to place on it (Last Call: all; Sleep In: 1). Each one
 * empties the hand a turn sooner, so p's turns that still have a rival's turn after them are passed (skip markers);
 * the rest already come last and only join the token. Early Birds ("Your turns can't be skipped."): the space pays and
 * nothing goes on the token, so the token stays where it is (decisions, Nov 1 2:21pm: take the payout without going last).
 */
// Cory, Nov 9: "maybe the goes last token applies to ALL of your minions?" (test version first; live since Nov 10, the
// Purple plan: "The token: your turns are skipped until every rival is out of minions, for all your minions"): a Purple
// space's token holds every minion you have left, as Last Call's does; members keep their own words
const ALL_LAST = new Set(['Last Callers', 'Sleep In', 'Hold Up', 'Right Away', 'Closing Time', 'Overtime', 'On a Roll']);
function toToken(ctx, p, n, why) {
  if (ALL_LAST.has(why)) n = Math.max(n, turnsLeft(ctx, p));
  if (noSkip(ctx, p)) { ctx.log(`${p.name}'s Early Birds: ${p.name}'s turns can't be skipped, so ${p.name} doesn't go last.`); return 0; }
  const kept = tokenHolder(ctx.state) === p.id; // already theirs: they keep it, they don't take it (Night Watch pays on a take)
  takeToken(ctx, p, why);
  let put = 0;
  // Last Call: the next turns are the ones passed while the rivals still place; Sleep In: the hand empties at the end
  for (; put < n && waitsOnRival(ctx, p) && (n === 1 ? lastWaits(ctx, p) : true); put++) {
    if (!skipNext(ctx, p, why, p, true, { token: true, last: n === 1 })) break;
  }
  // the rest: already after every rival's turn, they wait on the token too (nothing passes, so nothing pays)
  const q = ctx.state.queue, rest = turnsAhead(ctx, p).map(i => q[i]).filter(t => !t.token && !t.now);
  for (const t of rest.slice(-(n - put) || rest.length)) if (put < n) { t.token = true; put++; }
  if (put) ctx.log(`${p.name}'s ${why}: ${put === 1 ? '1 minion waits' : `${put} minions wait`} on the Goes Last token.`);
  if (!kept) nightWatch(ctx, p, put);
  // Lamplighters (REPLACE9, Members C bC11): "Whenever you take the Goes Last token, +1 follower per color you have a
  // minion on." Counts the space just taken; pays on a take, not on keeping it.
  if (!kept) for (const c of ctx.membersOf(p)) if (c.def.lampColors) ctx.asMember(p, c.def.name, () => {
    const st = ctx.state, qs = new Set();
    for (const [key, pid] of Object.entries(st.slots || {})) if (pid === p.id) qs.add(key.split('-')[0]);
    for (const [key, list] of Object.entries(st.squats || {})) if (list.includes(p.id)) qs.add(key.split('-')[0]);
    if (!qs.size) return;
    p.bonus += qs.size;
    ctx.log(`${p.name}'s ${c.def.name}: +${qs.size} follower${qs.size === 1 ? '' : 's'} (minions on ${qs.size} color${qs.size === 1 ? '' : 's'}).`);
  }, c.uid);
  // Snoozers (REPLACE7): "Whenever you take the Goes Last token, +1 purple per minion on it."
  if (put > 0) for (const c of ctx.membersOf(p)) if (c.def.tokenPurple) ctx.asMember(p, c.def.name, () => {
    ctx.gain(p, 'purple', put);
    ctx.log(`${p.name}'s ${c.def.name}: +${put} purple (${put} minion${put === 1 ? '' : 's'} on the Goes Last token).`);
  }, c.uid);
  return put;
}
/** Night Watch (live since Nov 4): p just took the Goes Last token with n minions on it; each rival's Night
 *  Watch pays +1 follower per minion (the REPLACE9 rework pays its owner's own take as well). */
function nightWatch(ctx, p, n) {
  if (!(n > 0)) return;
  // watchToken 'any' (REPLACE9 rework, Members C bC12): pays on its owner's own take too
  for (const o of ctx.state.players) for (const c of ctx.membersOf(o)) if (c.def.watchToken && (o !== p || c.def.watchToken === 'any')) ctx.asMember(o, c.def.name, () => {
    o.bonus += n;
    ctx.log(`${o.name}'s Night Watch: +${n} follower${n === 1 ? '' : 's'} (${p.name} took the Goes Last token with ${n} minion${n === 1 ? '' : 's'} on it).`);
  }, c.uid);
}
/** p's last turn this round still has a rival's turn after it (Sleep In passes that one). */
const lastWaits = (ctx, p) => {
  const q = ctx.state.queue, ahead = turnsAhead(ctx, p).filter(i => !q[i].token && !q[i].now);
  if (!ahead.length) return false;
  const close = q.findIndex(t => t.t === 'allPlaced');
  return q.slice(ahead[ahead.length - 1] + 1, close < 0 ? q.length : close).some(t => t.t === 'turn' && t.p !== p.id && !t.token);
};
/** The skip marker reached: p's turn is passed over now. Gossip (Cory, 2026-10-22: "+1 follower every time a players
 *  turn is skipped", anyone's, yours too; Oct 23: "should pay when turn is actually skipped"). */
function skipped(ctx, p, value, data) {
  // Early Birds checked when the skipped turn comes, not when the skip was set (Cory, 2026-10-22: "your turns cannot be
  // skipped, your own Sleep In and Last Call too"): one recruited after the skip was set (Sleep In, then Early Birds on
  // the same turn) gives the turn back; the minion waiting on the token, if any, comes off it and places now.
  if (noSkip(ctx, p)) {
    const q = ctx.state.queue, close = q.findIndex(t => t.t === 'allPlaced'), stop = close < 0 ? q.length : close;
    let k = stop - 1;
    while (k >= 0 && !(q[k].t === 'turn' && q[k].p === p.id && !!q[k].token === !!data?.token)) k--;
    if (k >= 0) {
      const [t] = q.splice(k, 1);
      delete t.token;
      q.unshift(t);
      const s = ctx.state;
      if (s.early && s.early.round === s.round) {
        const m = s.early.moves.findIndex(mv => mv.p === p.id && mv.late && (data?.at === undefined || mv.from === data.at));
        if (m >= 0) s.early.moves.splice(m, 1);
      }
      ctx.log(`${p.name}'s Early Birds: ${p.name}'s turn can't be skipped, so ${p.name} takes it now.`);
      return;
    }
  }
  ctx.skipBeat(p, data?.why, () => {
    ctx.log(`${p.name}'s turn is skipped${data?.why ? ` (${data.why})` : ''}.`);
    for (const o of ctx.state.players) for (const c of ctx.abilitiesOf(o)) for (const d of ctx.defsOf(c)) if (d.onSkip) ctx.asMember(o, c.def.name, () => d.onSkip(ctx, o, c, p, data?.by));
  }, data?.by);
}
/** How many turns p still has to come this round, after the one now running. */
const turnsLeft = (ctx, p) => {
  const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn'), close = q.findIndex(t => t.t === 'allPlaced');
  return q.slice(end + 1, close < 0 ? q.length : close).filter(t => t.t === 'turn' && t.p === p.id).length;
};
/** p's next turn this round still has a rival's turn after it (Last Call's "until everyone else is out of minions"). */
const waitsOnRival = (ctx, p) => {
  const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn'), close = q.findIndex(t => t.t === 'allPlaced');
  const win = q.slice(end + 1, close < 0 ? q.length : close);
  const mine = win.findIndex(t => t.t === 'turn' && t.p === p.id);
  return mine >= 0 && win.slice(mine + 1).some(t => t.t === 'turn' && t.p !== p.id);
};
/** Turns in a row p took just before the one now running (this round's turn record; the last entry is this turn). */
const inARow = (ctx, p) => {
  const turns = ctx.state.turns || [];
  let k = 0;
  for (let i = turns.length - 2; i >= 0 && turns[i] === p.id; i--) k++;
  return ctx.state.current === p.id ? k : 0;
};
/** Whose turn comes next this round, after the one now running (yours too, at a snake end); null when none. */
const nextTurnOf = ctx => {
  const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn'), close = q.findIndex(t => t.t === 'allPlaced');
  const t = q.slice(end + 1, close < 0 ? q.length : close).find(x => x.t === 'turn');
  return t ? t.p : null;
};

/**
 * p takes up to n of their own turns still to come this round right after this one (Crunch Time; Cory, 2026-10-15:
 * "it's not extra turns, it's taking two immediate turns with existing minions"). No new minion, so placements this
 * round don't change, no spare space is needed, and the extra-turn members (Foreman, Overseer…) don't fire.
 * The round's order (roundOrder) moves the same turns up, so the seats' "your turn in N" stay true. Returns how many.
 */
export function turnsNow(ctx, p, n, why) {
  const s = ctx.state, q = s.queue;
  // a preview has no endTurn: its hold stands in, so the moved-up turns wait behind the rest of this act (Greatest Hits)
  const end = q.findIndex(t => t.t === 'endTurn' || t.t === 'previewHold');
  const close = q.findIndex(t => t.t === 'allPlaced');
  const stop = close < 0 ? q.length : close;
  // your LAST n turns of the round move up, so the turns in between stay where they are and you finish early
  // (Cory, 2026-10-21: it shouldn't skip your next turns)
  const picks = [];
  for (let i = stop - 1; i > end && picks.length < n; i--) if (q[i].t === 'turn' && q[i].p === p.id) picks.unshift(i);
  // "no turns left", not "no minions": spare minions can still sit at home for extra turns (frame review, Nov 7)
  if (!picks.length) { ctx.log(`${p.name} has no turns left this round to take now: ${why} does nothing.`); return 0; }
  // where each turn sits in the round's order, matched as the seats match it (extra turns sit outside it)
  const { order } = ctx.roundOrder();
  const seq = [...(s.turns || []).map(pid => ({ pid })), ...q.filter(t => t.t === 'turn').map(task => ({ pid: task.p, task }))];
  let j = 0;
  for (const t of seq) if (j < order.length && order[j] === t.pid) t.at = j++;
  const done = (s.turns || []).length;
  const cur = Math.max(-1, ...seq.slice(0, done).map(t => (t.at === undefined ? -1 : t.at)));
  // what you just did happens now, even past a skip you already have (Cory, 2026-10-29: a copied Right Away after Last
  // Call came at the round's end; "what would be intuitive?" Claude's answer, his game): core's lastCallLast leaves it
  const tasks = picks.map(i => { q[i].now = true; return q[i]; });
  for (let k = picks.length - 1; k >= 0; k--) q.splice(picks[k], 1);
  q.splice(end + 1, 0, ...tasks);
  const moves = [];
  tasks.forEach((task, k) => {
    const at = (seq.find(t => t.task === task) || {}).at;
    if (at !== undefined && at !== cur + 1 + k) moves.push({ p: p.id, from: at, to: cur + 1 + k, why });
  });
  if (moves.length) {
    if (!s.early || s.early.round !== s.round) s.early = { round: s.round, moves: [] };
    s.early.moves.push(...moves);
  }
  const k = tasks.length;
  const few = k < n ? ` (${k === 1 ? 'their last minion' : `their last ${k} minions`})` : '';
  ctx.log(`${p.name}'s ${why}: ${p.name} takes ${k === 1 ? 'their next turn' : `their next ${k} turns`} now${few}.`);
  return k;
}
/** Playing your own turns sooner: each one that jumps rivals gets first pick of the spaces they'd have taken. */
const turnsNowEstimate = (ctx, p, n) => {
  const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn');
  const close = q.findIndex(t => t.t === 'allPlaced');
  const stop = close < 0 ? q.length : close;
  const mine = [];
  for (let i = stop - 1; i > end && mine.length < n; i--) if (q[i].t === 'turn' && q[i].p === p.id) mine.push(i);
  // each pulled turn jumps every rival turn before it
  return mine.reduce((v, i) => v + Math.min(1, q.slice(end + 1, i).filter(t => t.t === 'turn' && t.p !== p.id).length / 3) * turnValue(ctx) * 0.25, 0);
};

/** Overtime, off the board since 2026-10-15 (Rush Hour took its space). Kept for the extra-turn member tests only:
 *  test/engine/v4/retired-overtime.js puts it back on Purple's quadrant for one test file. */
/** Relay Runners (REPLACE7 bot test): its owner's Right Away gives two turns right after. */
const relayRunners = (ctx, p) => ctx.membersOf(p).some(c => ctx.defsOf(c).some(d => d.relayRunners));
/** Roll Call left the board on 2026-10-22 (Right Away took its space); tests that need a plain purple space keep it
 *  in that space (test/engine/v4/retired-overtime.js useRetiredRollCall). */
export const RETIRED_ROLLCALL = {
  key: 'windup', ring: 1, name: 'Roll Call', text: '+1 purple per minion you have on the board, this one included.',
  estimate: (ctx, p) => onBoard(ctx, p) + 1,
  resolve(ctx, p) { ctx.gain(p, P, onBoard(ctx, p), { fromAction: true }); },
};
export const RETIRED_OVERTIME = {
  key: 'overtime', ring: 2, name: 'Overtime', text: 'Take 1 extra turn right after this one.',
  copyDoesIt: true,
  estimate: ctx => freeTurnsEstimate(ctx, 1),
  resolve(ctx, p) { freeTurns(ctx, p, 1, 'Overtime'); },
};

/**
 * Call Back (REPLACE11, Actions lane, Nov 4; Cory's Nov 3 yes to "new Purple speed spaces that fit going last"):
 * "+1 purple in round I, +2 in round II, +3 in round III. Take the Goes Last token: move another of your minions from
 * the wheel onto it, and its space opens." The minion leaves its space (what it did stays done) and waits on the
 * token like Sleep In's: placed once every hand is empty. With no other minion on the wheel, you still take the token.
 */
const callBackKeys = (ctx, p) => myWorkers(ctx, p).filter(w => !(ctx.placement && w.key === ctx.placement.key && w.joined === !!ctx.placement.joined));
const CALL_BACK = {
  key: 'callback', copyDoesIt: true, ring: 1, name: 'Call Back',
  text: '+1 purple in round I, +2 in round II, +3 in round III. Take the Goes Last token: move another of your minions from the wheel onto it, and its space opens.',
  byRound: { lines: ['+1 purple', '+2 purple', '+3 purple'], rest: 'Take the Goes Last token: move another of your minions from the wheel onto it, and its space opens.' },
  // a placement back (worth most of a turn: the leftover space plus its recruit) and the round's last minion
  estimate: (ctx, p) => ctx.state.round + (callBackKeys(ctx, p).length ? Math.round(turnValue(ctx) * 0.6) + 1 : 0),
  resolve(ctx, p) {
    ctx.gain(p, P, ctx.state.round, { fromAction: true });
    // no turn is skipped (the called-back minion is a new turn at the end), so Early Birds doesn't stop it
    const mine = callBackKeys(ctx, p);
    if (!mine.length) { takeToken(ctx, p, 'Call Back', ' (no other minion of theirs on the wheel to move onto it)'); return; }
    if (mine.length === 1) { callBack(ctx, p, `${mine[0].key}${mine[0].joined ? '+j' : ''}`); return; }
    ctx.choose(p, 'Call Back: move which minion onto the Goes Last token?', mine.map(w => ({
      id: `from:${w.key}${w.joined ? '+j' : ''}`, label: `${pacerSpace(ctx, w.key).name}${w.joined ? ' (joined)' : ''}`, kind: 'slot',
      value: `${w.key}${w.joined ? '+j' : ''}`,
      // bots free the space worth least to the rivals who could take it next
      hint: -pacerSpace(ctx, w.key).estimate(ctx, p),
    })), 'purple.callBack');
  },
};
function callBack(ctx, p, from) {
  const [key, j] = String(from).split('+');
  const w = myWorkers(ctx, p).find(x => x.key === key && x.joined === (j === 'j'));
  if (!w) return;
  if (w.joined) {
    const list = ctx.state.squats[key];
    list.splice(list.indexOf(p.id), 1);
    if (!list.length) delete ctx.state.squats[key];
  } else delete ctx.state.slots[key];
  takeToken(ctx, p, 'Call Back');
  ctx.log(`${p.name}'s Call Back: ${p.name} moves their minion from ${pacerSpace(ctx, key).name} onto the Goes Last token, and ${pacerSpace(ctx, key).name} is open again.`);
  const q = ctx.state.queue, close = q.findIndex(t => t.t === 'allPlaced');
  q.splice(close < 0 ? q.length : close, 0, { t: 'turn', p: p.id, token: true });
  p.left += 1;
  nightWatch(ctx, p, 1);
}

export default {
  id: 'purple',
  name: 'Purple',
  resource: P,
  handlers: {
    // idea pipeline pool 1: give a rival the Goes Last token (Cory, Nov 7: "making all a players members go last")
    poolFree: freeTake,
    // pool 3: Ticket Takers' rival
    ticketSteal(ctx, p, id) { const o = ctx.player(id); if (o) ctx.asMember(p, 'Ticket Takers', () => plainSteal(ctx, p, o, 2, 'Ticket Takers')); },
    // pool 10: Scalpers, one resource at a time from the taker
    // pool 13: Switch Places / Seat Swappers
    switchTurn(ctx, p, id, data) {
      const o = ctx.player(id), q = ctx.state.queue, i = nextOwnTurn(ctx, p), j = nextOwnTurn(ctx, o);
      if (!o || i < 0 || j < 0) return;
      [q[i], q[j]] = [q[j], q[i]];
      ctx.log(`${p.name}'s ${data.name}: ${p.name}'s next turn and ${o.name}'s next turn switch places.`);
    },
    scalpGive(ctx, p, color, data) {
      const to = ctx.player(data.to);
      if (!to || !((p.res[color] || 0) > 0)) return;
      p.res[color] -= 1; ctx.gain(to, color, 1);
      scalpStep(ctx, p, { ...data, left: data.left - 1, n: data.n + 1, got: [...(data.got || []), color] });
    },
    sendLast(ctx, p, id, data) {
      const o = ctx.player(id), n = data.all ? turnsLeft(ctx, o) : 1;
      ctx.log(`${p.name}'s ${data.name}: ${o.name} takes the Goes Last token.`);
      if (n) toToken(ctx, o, n, data.name);
    },
    skipped,
    ...handlers11({ callBack }),
    // Interrupters (REPLACE3) and Interrupter (REPLACE7) share the ask; the log names the holder's card
    ...(REPLACE3 || REPLACE7 ? {
      interrupt(ctx, owner, answer, data) {
        const mover = ctx.player(data.pid), name = data.name || 'Interrupters';
        if (answer === 'skip') { skipNext(ctx, mover, name, owner); return; }
        ctx.log(`${owner.name}'s ${name}: lets ${mover.name} go again.`);
        askInterrupt(ctx, mover, owner.id);
      },
    } : {}),
    ...handlers3({
      pacerTo(ctx, p, to, data) {
        if (!to || ctx.state.slots[to] !== undefined) return;
        const mine = myWorkers(ctx, p);
        if (!mine.length) return;
        if (mine.length === 1) { pacerMove(ctx, p, mine[0], to); return; }
        ctx.choose(p, `Pacers: move which minion to ${pacerSpace(ctx, to).name}?`, mine.map(w => ({
          id: `from:${w.key}${w.joined ? '+j' : ''}`, label: `${pacerSpace(ctx, w.key).name}${w.joined ? ' (joined)' : ''}`, kind: 'slot',
          value: `${w.key}${w.joined ? '+j' : ''}`,
          // bots move off the space worth least to the next player (it opens for them)
          hint: -pacerSpace(ctx, w.key).estimate(ctx, p),
        })), 'purple.pacerFrom', { to });
      },
      pacerFrom(ctx, p, from, data) {
        const [key, j] = String(from).split('+');
        const w = myWorkers(ctx, p).find(x => x.key === key && x.joined === (j === 'j'));
        if (!w || ctx.state.slots[data.to] !== undefined) return;
        pacerMove(ctx, p, w, data.to);
      },
    }),
  },
  // Most purple: honest about what the old "most workers on the board" measured (everyone places every worker, so
  // purple's tiebreak decided it). Holding purple for the ring is the price of spending it on turns.
  // held purple, like every reworked color (Cory, 2026-10-22: "contests are always resources now")
  scoring: { label: 'Most purple', counts: 'the purple you hold when the round ends', score: (ctx, p) => p.res.purple || 0 },

  actions: [
    // idea pipeline pool 16 (Nov 7; ideas/purple-r2.md): the count is every minion on the wheel but the one just placed
    // here (squatters and joined spots count, as Survey counts them). Price-free; numbers are fill-ins.
    poolSpace({
      key: 'witchinghour', ring: 3, name: 'Witching Hour', text: '+2 purple. +1 follower per other minion on the wheel.',
      estimate: (ctx, p) => 2 + Math.max(0, wheelMinions(ctx)),
      resolve(ctx, p) {
        ctx.gain(p, P, 2, { fromAction: true });
        const k = Math.max(0, wheelMinions(ctx) - 1);
        if (k) p.bonus += k;
        ctx.log(`${p.name}'s Witching Hour: ${k} other minion${k === 1 ? '' : 's'} on the wheel, +${k} follower${k === 1 ? '' : 's'}.`);
      },
    }, 'pool16'),
    ...[['closingtime', 'Closing Time', 2, true], ['waityourturn', 'Wait Your Turn', 1, false]].map(([key, name, ring, all]) => poolSpace({
      key, copyDoesIt: true, ring, name,
      text: all ? '+3 purple. Give a rival the Goes Last token: their other minions are placed after everyone else’s.'
        : '+2 purple in round I, +3 in round II, +4 in round III. Give a rival the Goes Last token: their next minion is placed after everyone else’s.',
      estimate: ctx => (all ? 3 : ctx.state.round + 1) + 1,
      resolve(ctx, p) {
        ctx.gain(p, P, all ? 3 : ctx.state.round + 1, { fromAction: true });
        if (ctx.rivals(p).some(o => turnsLeft(ctx, o))) chooseRival(ctx, p, `${name}: which rival takes the Goes Last token?`, 'purple.sendLast', { name, all },
          o => (turnsLeft(ctx, o) ? 10 : 0) + ctx.followers(o));
      },
    }, 'pool1')),
    // idea pipeline pool 13 (Nov 7): your next turn and a rival's next turn trade places in the round's order (a minion
    // waiting on the Goes Last token isn't a next turn). Either may be earlier; the table sees both move.
    poolSpace({
      key: 'switchplaces', copyDoesIt: true, ring: 2, name: 'Switch Places', text: "+3 purple. Swap your next turn with a rival's next turn.",
      estimate: (ctx, p) => 3 + 1 + (switchTargets(ctx, p).some(x => x.gain > 0) ? 2 : 0),
      resolve(ctx, p) { ctx.gain(p, P, 3, { fromAction: true }); askSwitch(ctx, p, 'Switch Places'); },
    }, 'pool13'),
    // idea pipeline pool 10 (Nov 7): Cut In takes the token with no minion put on it (the card says only "take"); the
    // old holder's minions on it go back to their hand as any take does, then their next turn this round is skipped
    // (Hold Up's skip; Early Birds stops it). Nobody held it, or you did: no skip.
    poolSpace({
      key: 'cutin', copyDoesIt: true, ring: 2, name: 'Cut In', text: '+3 purple. Take the Goes Last token. Whoever held it skips their next turn.',
      estimate: (ctx, p) => 3 + 1 + (tokenHolder(ctx.state) !== null && tokenHolder(ctx.state) !== p.id ? 2 : 0),
      resolve(ctx, p) {
        ctx.gain(p, P, 3, { fromAction: true });
        const was = tokenHolder(ctx.state);
        takeToken(ctx, p, 'Cut In');
        if (was !== null && was !== p.id) skipNext(ctx, ctx.player(was), 'Cut In', p);
      },
    }, 'pool10'),
    // pool 15 (round 2, the verdict's change): Cut In's skip in words that say who skips; it plays the same
    poolSpace({
      key: 'buttin', copyDoesIt: true, ring: 2, name: 'Butt In', text: '+3 purple. Take the Goes Last token. If a rival held it, that rival skips their next turn.',
      estimate: (ctx, p) => 3 + 1 + (tokenHolder(ctx.state) !== null && tokenHolder(ctx.state) !== p.id ? 2 : 0),
      resolve(ctx, p) {
        ctx.gain(p, P, 3, { fromAction: true });
        const was = tokenHolder(ctx.state);
        takeToken(ctx, p, 'Butt In');
        if (was !== null && was !== p.id) skipNext(ctx, ctx.player(was), 'Butt In', p);
      },
    }, 'pool15'),
    {
      // Cory, 2026-10-22: "+4 purple, skip your next turn" (always +4: +3 and the space's +1), from the old game's
      // "Gain 4 purple, skip next turn". You're passed over once; the snake carries on and you still place every minion.
      // Cory, 2026-10-25: +3 instead of +4 ("skip a turn is basically automatically giving 2 followers")
      // Cory, 2026-10-28: grows by round, "maybe more like 4/5/6", so a late skip is worth taking
      // Cory, Nov 1 2:35pm: the Goes Last token ("Let's just try it with the goes last token"): one minion waits on it,
      // so your hand empties a turn early and that snake turn is passed (a skip, for Pocket Watch and Gossip)
      key: 'skip', copyDoesIt: true, ring: 1, name: 'Sleep In', text: '+4 purple in round I, +5 in round II, +6 in round III. Take the Goes Last token: your other minions are placed after everyone else’s.',
      byRound: { lines: ['+4 purple', '+5 purple', '+6 purple'], rest: 'Take the Goes Last token: your other minions are placed after everyone else’s.' },
      estimate: ctx => ctx.state.round + 3,
      resolve(ctx, p) {
        ctx.gain(p, P, ctx.state.round + 3, { fromAction: true });
        toToken(ctx, p, 1, 'Sleep In');
      },
    },
    {
      // Cory, Nov 10 12:43am: Purple's third round I space, "+2 purple * consecutive turn. so it's always at least 2 purple
      // but could get up to like 10"; 12:45am: a skipped turn doesn't break a streak (consecutive means no other player
      // placed in between: skips aren't turns); 12:48am: it takes the Goes Last token. Hold Up's place. Name is Claude's fill-in.
      key: 'onaroll', copyDoesIt: true, ring: 1, name: 'On a Roll', text: '+2 purple per consecutive turn, this one included. Take the Goes Last token: your other minions are placed after everyone else’s.',
      estimate: (ctx, p) => 2 * (inARow(ctx, p) + 1),
      resolve(ctx, p) {
        const n = inARow(ctx, p) + 1;
        ctx.gain(p, P, 2 * n, { fromAction: true });
        ctx.log(`${p.name}'s On a Roll: ${n} turn${n === 1 ? '' : 's'} in a row, +${2 * n} purple.`);
        toToken(ctx, p, 1, 'On a Roll');
      },
    },
    {
      // Cory, 2026-10-22: replaces Catch Up ("the skip should replace catch up"); "1 purple per round" so it isn't weak
      // late. Wording and name are Claude's fill-in.
      // Out of the wheel since Nov 10 (On a Roll takes its place, Cory's Purple plan); kept for old saves and its tests
      pool: true,
      key: 'holdup', copyDoesIt: true, ring: 1, name: 'Hold Up', text: '+2 purple in round I, +3 in round II, +4 in round III. The next turn is skipped, even if it’s yours.',
      byRound: { lines: ['+2 purple', '+3 purple', '+4 purple'], rest: 'The next turn is skipped, even if it’s yours.' },
      // Cory, 2026-10-22: "it has to be the next TURN not even the next player. so a player could skip their own in
      // snake draft". Whoever's turn comes next is passed over once and still places every minion.
      // Cory, 2026-10-25: +1 each round (Hard bot read).
      estimate: ctx => ctx.state.round + 2,
      resolve(ctx, p) {
        ctx.gain(p, P, ctx.state.round + 1, { fromAction: true });
        const who = nextTurnOf(ctx);
        if (who == null) { ctx.log(`${p.name}'s Hold Up: no turn left to skip this round.`); return; }
        skipNext(ctx, ctx.player(who), 'Hold Up', p);
      },
    },
    swap11({
      // Cory, 2026-10-22: "+1 purple, take another turn right after this one", in Roll Call's spot. One of your own
      // turns, moved up (his yes: you still place the same minions that round), like Crunch Time's two. Name: fill-in.
      // Cory, 2026-10-23: "Right Away should scale. +1 +2 +3" (Hold Up's wording).
      key: 'again', copyDoesIt: true, ring: 1, name: 'Right Away', text: '+2 purple in round I, +3 in round II, +4 in round III. Your next turn comes right after this one.', // 2/3/4 (Cory, Nov 6: "it should scale more. like 2/3/4")
      byRound: { lines: ['+2 purple', '+3 purple', '+4 purple'], rest: 'Your next turn comes right after this one.' },
      estimate: (ctx, p) => ctx.state.round + 1 + turnsNowEstimate(ctx, p, 1),
      resolve(ctx, p) { ctx.gain(p, P, ctx.state.round + 1, { fromAction: true }); turnsNow(ctx, p, relayRunners(ctx, p) ? 2 : 1, 'Right Away'); },
    }, CALL_BACK),
    {
      // Cory, 2026-10-22: "+1 purple, you can play on occupied spaces this round" (+2 with the inherent +1; he may
      // raise it to +3 after play). Any taken space, yours or a rival's, for the rest of this round. Name is Claude's fill-in.
      // Cory, 2026-10-28 9:31pm Eastern: "It should just be like, +5 purple and gain a minion this round" (placing on
      // taken spaces copied too much with Greatest Hits). Extra minions stop when the round's spare spaces run out.
      key: 'crowdin', copyDoesIt: true, ring: 3, name: 'Overtime', text: '+4 purple. +1 minion this round. Take the Goes Last token: that minion goes after everyone else’s.', // +4 (Cory, Nov 5: "give a little more purple"); the token (Cory, Nov 6: "Overtime is good. I like it", a third way to take it)
      estimate: ctx => 4 + (spareSpace(ctx) ? turnValue(ctx) : 0),
      resolve(ctx, p) {
        ctx.gain(p, P, 4, { fromAction: true });
        if (!extraMinion(ctx, p, 'Overtime')) return;
        // the extra minion waits on the Goes Last token (as Night Owls' did with NIGHTOWL=token); Early Birds keeps it off
        if (noSkip(ctx, p)) { ctx.log(`${p.name}'s Early Birds: ${p.name}'s turns can't be skipped, so ${p.name} doesn't go last.`); return; }
        const q = ctx.state.queue, t = turnsAhead(ctx, p).map(i => q[i]).pop();
        const kept = tokenHolder(ctx.state) === p.id;
        takeToken(ctx, p, 'Overtime', ' with its extra minion on it');
        if (t) t.token = true;
        if (t && !kept) nightWatch(ctx, p, 1);
      },
    },
    {
      // Cory, 2026-10-22: a follower bonus for taking the rest of your turns last ("YES now you're cooking"), in his
      // words ("take the remainder of your turns when others are out of minions"), "let's just try it at 2 followers
      // per minion left". Replaces Rush Hour. Name is Claude's fill-in.
      key: 'lastcall', copyDoesIt: true, ring: 2, name: 'Last Call', text: '+1 purple. +1 follower and +1 purple per minion you have left. Take the Goes Last token: your other minions go after everyone else’s.', // (Cory, Nov 1: "keep it one follower, and give purple per minion"; "also keep +1 purple up front")
      estimate: (ctx, p) => 1 + 2 * Math.max(0, p.left - 1),
      resolve(ctx, p) {
        ctx.gain(p, P, 1 + p.left, { fromAction: true });
        const k = turnsLeft(ctx, p), f = p.left;
        if (f) { p.bonus += f; ctx.log(`${p.name}'s Last Call: +${f} follower${f === 1 ? '' : 's'}.`); }
        // only turns with a rival's turn still after them are skipped: once everyone else is out of minions (or already
        // places before you, as after your own earlier Last Call) there is nothing to wait for, so nothing is skipped and
        // Gossip and Pocket Watch pay nothing (balance-1.0 g8: a second copy of Last Call re-skipped turns already last,
        // paying both for skips that passed over no one)
        // every minion left goes on the Goes Last token (Cory, Nov 1 2:35pm)
        toToken(ctx, p, k, 'Last Call');
      },
    },
    {
      // the burst, free (Cory, 2026-10-15): was "pay all your purple (4 or more) for 2 extra turns, else +4 purple"
      // your own turns, now (Cory, 2026-10-15: "it's not extra turns, it's taking two immediate turns with existing
      // minions"): no new minion, no spare space needed, and the extra-turn members don't fire
      key: 'rally', copyDoesIt: true, ring: 2, name: 'Crunch Time', text: '+2 purple. Your next two turns come right after this one.',
      // Cory, 2026-10-22: "all should give at least 1"; 2026-10-25: +2 (Hard bot read).
      estimate: (ctx, p) => 2 + turnsNowEstimate(ctx, p, 2),
      resolve(ctx, p) { ctx.gain(p, P, 2, { fromAction: true }); turnsNow(ctx, p, 2, 'Crunch Time'); },
    },
    // The test version (Cory, Nov 8: "Lets just try goes last token on all the purple"; content/testset.js). The token
    // comes after what the space already does: Right Away's and Crunch Time's turns come first, then the minion after
    // them waits on the token (Claude's reading, put to Cory the same turn).
    poolSpace({
      key: 'holduplast', copyDoesIt: true, ring: 1, name: 'Hold Up', text: '+2 purple in round I, +3 in round II, +4 in round III. Whoever\u2019s turn is next skips it, even yours. Then take the Goes Last token: your next minion is placed after everyone else\u2019s.',
      byRound: { lines: ['+2 purple', '+3 purple', '+4 purple'], rest: 'Whoever\u2019s turn is next skips it, even yours. Then take the Goes Last token: your next minion is placed after everyone else\u2019s.' },
      estimate: ctx => ctx.state.round + 2,
      resolve(ctx, p) {
        ctx.gain(p, P, ctx.state.round + 1, { fromAction: true });
        const who = nextTurnOf(ctx);
        if (who == null) ctx.log(`${p.name}'s Hold Up: no turn left to skip this round.`);
        else skipNext(ctx, ctx.player(who), 'Hold Up', p);
        toToken(ctx, p, 1, 'Hold Up');
      },
    }, 'testset'),
    poolSpace({
      key: 'againlast', copyDoesIt: true, ring: 1, name: 'Right Away', text: '+2 purple in round I, +3 in round II, +4 in round III. Your next turn comes right after this one. Then take the Goes Last token: your minion after that is placed after everyone else\u2019s.',
      byRound: { lines: ['+2 purple', '+3 purple', '+4 purple'], rest: 'Your next turn comes right after this one. Then take the Goes Last token: your minion after that is placed after everyone else\u2019s.' },
      estimate: (ctx, p) => ctx.state.round + 1 + turnsNowEstimate(ctx, p, 1),
      resolve(ctx, p) { ctx.gain(p, P, ctx.state.round + 1, { fromAction: true }); turnsNow(ctx, p, relayRunners(ctx, p) ? 2 : 1, 'Right Away'); toToken(ctx, p, 1, 'Right Away'); },
    }, 'testset'),
    poolSpace({
      key: 'rallylast', copyDoesIt: true, ring: 2, name: 'Crunch Time', text: '+2 purple. Your next two turns come right after this one. Then take the Goes Last token: your minion after those is placed after everyone else\u2019s.',
      estimate: (ctx, p) => 2 + turnsNowEstimate(ctx, p, 2),
      resolve(ctx, p) { ctx.gain(p, P, 2, { fromAction: true }); turnsNow(ctx, p, 2, 'Crunch Time'); toToken(ctx, p, 1, 'Crunch Time'); },
    }, 'testset'),
    // test version (Cory, Nov 9: "lets try it at 2 followers"): Closing Time in Crunch Time's place
    poolSpace({
      key: 'closinglast', copyDoesIt: true, ring: 2, name: 'Closing Time', text: '+2 purple. +2 followers per rival with no minions left. Take the Goes Last token: your next minion is placed after everyone else\u2019s.',
      estimate: (ctx, p) => 2 + 2 * ctx.rivals(p).filter(o => !o.left).length,
      resolve(ctx, p) {
        ctx.gain(p, P, 2, { fromAction: true });
        const n = ctx.rivals(p).filter(o => !o.left).length;
        if (n) { p.bonus += 2 * n; ctx.log(`${p.name}'s Closing Time: +${2 * n} followers (${n} rival${n === 1 ? '' : 's'} out of minions).`); }
        toToken(ctx, p, 1, 'Closing Time');
      },
    }, 'testset'),
  ],

  members: [
    // idea pipeline pool 16 (Nov 7; ideas/purple-r2.md; prices are fill-ins). Both act once the round's turns are queued.
    // Stragglers: your last turn this round moves to the end; the Goes Last token's minions still sort after it.
    pool(m('stragglers', 'Stragglers', 5, 2, "Your last minion each round is placed after everyone else's. A Goes Last minion still goes after it.", {
      onRoundQueued(ctx, owner, card) {
        const q = ctx.state.queue, stop = q.findIndex(t => t.t === 'allPlaced');
        if (stop < 0) return;
        let last = -1;
        for (let i = 0; i < stop; i++) if (q[i].t === 'turn' && q[i].p === owner.id) last = i;
        if (last < 0 || last === stop - 1) return;
        const [t] = q.splice(last, 1);
        q.splice(stop - 1, 0, t);
        ctx.log(`${owner.name}'s Stragglers: ${owner.name}'s last minion is placed after everyone else's.`);
      },
      ...see(info => 3 * endsAhead(info).length),
    }), 'pool16'),
    // Tag Team: each of your turns pulls your next one right behind it (pairs, in order; an odd last turn stays put)
    pool(m('tagteam', 'Tag Team', 3, 2, 'Each time your turn comes, take two turns in a row.', {
      onRoundQueued(ctx, owner, card) {
        const q = ctx.state.queue, stop = q.findIndex(t => t.t === 'allPlaced');
        if (stop < 0) return;
        let moved = 0;
        for (let i = 0; i < stop; i++) {
          if (!(q[i].t === 'turn' && q[i].p === owner.id)) continue;
          let j = -1;
          for (let k = i + 1; k < stop; k++) if (q[k].t === 'turn' && q[k].p === owner.id) { j = k; break; }
          if (j < 0) break;
          if (j > i + 1) { const [t] = q.splice(j, 1); q.splice(i + 1, 0, t); moved++; }
          i++;
        }
        if (moved) ctx.log(`${owner.name}'s Tag Team: ${owner.name}'s turns come two in a row.`);
      },
      ...see(info => 2 * endsAhead(info).length),
    }), 'pool16'),
    // idea pipeline pool 10 (Nov 7). Scalpers: the taker picks the 2 (one at a time, from what they hold), on their own
    // turn. Night Porters (the brief's Night Shift, renamed: a Night Shift is already in the REPLACE7 test): holding the
    // token at Round End, the owner keeps it into next round, and once the round's turns are queued their last minion
    // goes on it (as Sleep In's does). A keep, not a take, so take triggers don't fire. Prices are the writer's fill-ins.
    pool(m('seatswappers', 'Seat Swappers', 2, 2, "On Use, once per round: swap your next turn with a rival's next turn.", {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) { if (!askSwitch(ctx, owner, 'Seat Swappers')) card.used = false; },
      botActivate: (ctx, p) => switchTargets(ctx, p).some(x => x.gain >= 3),
    }), 'pool13'),
    pool(m('scalpers', 'Scalpers', 2, 2, 'Whenever a rival takes the Goes Last token, they give you 2 of their resources.', {
      onRivalTakeToken(ctx, owner, card, taker) { scalpStep(ctx, taker, { to: owner.id, left: 2, n: 0 }); },
      ...see(info => 2 * endsAhead(info).length * 0.8), // BOTSEE: about one rival take a round
    }), 'pool10'),
    pool(m('nightporters', 'Night Porters', 4, 2, "Round End: if you hold the Goes Last token, you keep it: next round your last minion is placed after everyone else's.", { f: 2,
      onAllPlaced(ctx, owner, card) {
        if (tokenHolder(ctx.state) !== owner.id || ctx.state.round >= 3) return;
        card.keepFor = { round: ctx.state.round + 1, pid: owner.id };
        ctx.log(`${owner.name}'s Night Porters: ${owner.name} keeps the Goes Last token into next round.`);
      },
      onRoundQueued(ctx, owner, card) {
        const k = card.keepFor;
        if (!k || k.round !== ctx.state.round || k.pid !== owner.id) return;
        delete card.keepFor;
        ctx.state.goesLast = { round: ctx.state.round, pid: owner.id };
        toToken(ctx, owner, 1, 'Night Porters');
      },
    }), 'pool10'),
    // idea pipeline pool 12 (Nov 7; purple.md round 3 and its variation; prices are fill-ins): core-free, in takeToken
    pool(m('linejumpers', 'Line Jumpers', 3, 2, 'Whenever a rival takes the Goes Last token, your next turn comes right after theirs.', { lineJump: true,
      ...see(info => 2 * endsAhead(info).length),
    }), 'pool12'),
    pool(m('bellhops', 'Bellhops', 3, 2, 'Whenever the Goes Last token leaves you, your next turn comes right after.', { tokenLeaves: true,
      ...see(info => 1.5 * endsAhead(info).length),
    }), 'pool12'),
    // idea pipeline pool 5 (Nov 7): Round End before contests; "placed the round's last minion" is the round's last turn
    // (the Goes Last token's minions included). "costing up to 5" as printed. Price a fill-in.
    pool(m('sweepers', 'Sweepers', 2, 2, "Round End: if you placed the round's last minion, recruit a member costing up to 5, for free.", {
      onAllPlaced(ctx, owner) {
        if ((ctx.state.turns || []).at(-1) !== owner.id) return;
        ctx.asMember(owner, 'Sweepers', () => freeAsk(ctx, owner, 'Sweepers', ctx.shopCards().filter(c => c.def.s + c.def.w <= 5 + richUp(ctx.state)), 'purple.poolFree', `placed last, but no shop member costs ${5 + richUp(ctx.state)} or less`));
      },
      ...see(info => 1.5 * endsAhead(info).length * 0.3), // BOTSEE: a cheap member when it goes last, now and then
    }), 'pool5'),
    // idea pipeline pool 4 (Nov 7): the Goes Last token pays a recruit, an extra one this turn (as Recruit Twice's)
    pool(m('stagehands', 'Stagehands', 3, 2, 'Whenever you take the Goes Last token, recruit.', {
      onTakeToken(ctx, owner) { extraRecruit(ctx, owner); ctx.log(`${owner.name}'s Stagehands: ${owner.name} recruits an extra time.`); },
      ...see(info => 2.5 * endsAhead(info).length * 0.6), // BOTSEE: an extra recruit about every other round
    }), 'pool4'),
    // idea pipeline pool 3 (Nov 7): the Goes Last token pays a steal; a rival's big turn is skipped. Prices are fill-ins.
    pool(m('usherscut', "Ushers' Cut", 2, 2, 'Whenever you take the Goes Last token, steal 1 resource from each rival.', {
      onTakeToken(ctx, owner) { for (const o of ctx.rivals(owner)) plainSteal(ctx, owner, o, 1, "Ushers' Cut"); },
      ...see(info => 2 * endsAhead(info).length * 0.6), // BOTSEE: about one take a round when it pays, 3 resources less spite
    }), 'pool3'),
    pool(m('tickettakers', 'Ticket Takers', 2, 1, 'Whenever you take the Goes Last token, steal 2 resources from one rival.', {
      onTakeToken(ctx, owner) {
        chooseRival(ctx, owner, 'Ticket Takers: steal 2 resources from which rival?', 'purple.ticketSteal', null,
          o => Math.min(2, Object.values(o.res).reduce((a, b) => a + b, 0)) + 0.01 * ctx.followers(o));
      },
      ...see(info => 1.5 * endsAhead(info).length * 0.6),
    }), 'pool3'),
    // "in one turn": recruits made on that rival's own turn, counted as the table counts members (a card worth 3 counts as
    // 3); "their next turn": the next one this round, as Hold Up's skip (none left: nothing). Heavies (key bouncers3)
    // is the brief's Bouncers, renamed (the culled Bouncers); Gatekeepers the brief's Doormen (Blue has a Doormen).
    ...[['bouncers3', 'Heavies', 2, 3, 2], ['gatekeepers', 'Gatekeepers', 3, 2, 1]].map(([key, name, line, s, w]) => pool(m(key, name, s, w,
      `Whenever a rival recruits ${line === 2 ? 'two' : 'three'} or more members in one turn, they skip their next turn.`, {
        onAnyRecruit(ctx, owner, card, by, member) { bounceCheck(ctx, owner, card, by, member, line, name); },
        ...see(info => (line === 2 ? 1 : 0.4) * endsAhead(info).length), // BOTSEE: a rival's lost turn, worth a little to its owner
      }), 'pool3')),
    pool(m('ushers', 'Ushers', 2, 3, 'On Use, once per round: give a rival the Goes Last token: their other minions are placed after everyone else’s.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        if (!ctx.rivals(owner).some(o => turnsLeft(ctx, o))) { card.used = false; ctx.log(`${owner.name}'s Ushers: no rival has a minion left.`); return; }
        chooseRival(ctx, owner, 'Ushers: which rival takes the Goes Last token?', 'purple.sendLast', { name: 'Ushers', all: true },
          o => (turnsLeft(ctx, o) ? 10 : 0) + ctx.followers(o));
      },
    }), 'pool1'),
    m('secondwind', 'Go-Getter', 4, 2, 'On Use, once per game: +1 minion, placed right after this turn.', { from: 2,
      activate: 'game',
      onActivate(ctx, owner, card) { if (!extraTurns(ctx, owner, 1, 'Go-Getter')) card.used = false; },
      botActivate: ctx => ctx.state.round === 3 && spareSpace(ctx),
    }),
    m('errand', 'Errand Runner', 4, 4, 'On Recruit: take an extra turn after this one.', {
      onRecruited(ctx, owner) { extraTurns(ctx, owner, 1, 'Errand Runner'); },
    }),
    m('taskmaster', 'Taskmaster', 4, 2, 'On Use, once per round: pay 5 purple to take an extra turn after this one.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        if (!buyTurn(ctx, owner, 5, 'Taskmaster', 0, true)) { card.used = false; ctx.log(`${owner.name} can't pay for Taskmaster now.`); }
      },
      botActivate: (ctx, owner) => canBuyTurn(ctx, owner, 5) && ctx.state.round >= 2,
    }),
    m('lateriser', 'Late Risers', 4, 2, 'Round Start: if you have the fewest followers (ties count), +1 minion, placed before anyone else.', { f: 2, n: 2, from: 2, // +1 (Cory, Oct 30)
      // the round's turns are queued after round-start hooks, so this one goes first
      onRoundStart(ctx, owner) {
        const me = ctx.followers(owner);
        if (ctx.state.round > 1 && ctx.rivals(owner).every(o => ctx.followers(o) >= me)) {
          // the round's minions aren't queued yet, so count them from what each player has left: with one sphere per
          // player and Extra Hand twice (a Doppelganger), round III at 2 players can be full before this turn
          const due = ctx.state.players.reduce((n, o) => n + o.left, 0);
          if (openSpaces(ctx).length <= due) { ctx.log(`No space to spare: ${owner.name} gets no extra turn from Late Risers.`); return; }
          ctx.state.queue.unshift({ t: 'turn', p: owner.id });
          owner.left += 1;
          ctx.log(`${owner.name}'s Late Risers: 1 more minion, placed first.`);
          extraHooks(ctx, owner);
        }
      },
    }),
    m('foreman', 'Foreman', 4, 2, 'Whenever you take an extra turn, +1 purple per minion you have on the board.', {
      onExtraTurn(ctx, owner) { ctx.gain(owner, P, onBoard(ctx, owner)); },
    }),
    // Cory, 2026-10-29: pays on two turns in a row ("the former"), not on a new minion; "courier doesnt seem to work right"
    // (Right Away and Crunch Time never paid). Price 6 (was 5): Claude, under Cory's go-with-your-gut, since the snake's
    // turnarounds now pay too
    // Cory, Nov 4 12:35am: reworded, same rule ("whenever you take a consecutive turn... it benefits you to stack your turns all
    // together"): each turn that comes right after your own pays, so Crunch Time's three in a row pays twice
    m('courier', 'Courier', 3, 2, 'Whenever you take a consecutive turn, +1 of each other color.', { ...old3, ...old7('purple.courier'),
      onTurnInRow(ctx, owner) { for (const c of ctx.state.resources) if (c !== P) ctx.gain(owner, c, 1); },
    }),
    // REPLACE7 bot test (Nov 4, quality loop, Members A): Courier's place. 4 purple + 2 any as a player sees it. On the
    // second of two turns in a row (Right Away, Crunch Time, a snake turnaround, a +1 minion placed now) the owner has one
    // more recruit step that turn (core reads p.turnExtraBuys when it lays out the turn).
    ...add7(m('runner', 'Runner', 3, 2, 'Whenever you take two turns in a row, recruit once more on the second.', {
      onTurnInRow(ctx, owner) { owner.turnExtraBuys = (owner.turnExtraBuys || 0) + 1; ctx.log(`${owner.name}'s Runner: two turns in a row, so ${owner.name} recruits once more this turn.`); },
      // about one two-in-a-row a round for a purple player (a turnaround or Right Away), a recruit worth ~1.5 followers
      ...see(info => 1.5 * endsAhead(info).length),
    })),
    // REPLACE7 (Nov 4, quality loop, Members A): Courier's place, the lane's pick (paper gate 17 of 20). Batch 3's
    // Interrupters as one member with a singular name; same ask (askInterrupt), same price (4 purple + 2 any).
    ...add7(m('interrupter', 'Interrupter', 3, 2, 'Whenever a rival takes two turns in a row, you may skip the second.', { interrupts: true,
      onRivalTurnInRow(ctx, owner, card, mover) { return askInterrupt(ctx, mover, -1); },
    })),
    // REPLACE3 bot test (Nov 3, replacement batch 3): Courier's place. 4 purple + 2 any as a player sees it. Core asks it
    // when a rival's turn starts right after their own (onRivalTurnInRow): skipping passes that turn as Hold Up does
    // (it places after the round's other turns; Early Birds stops it; Gossip pays). Offered only while another player
    // still has a turn this round (with none, a skip would move nothing). Two holders are asked in seat order.
    ...add3(m('interrupters', 'Interrupters', 3, 2, 'Whenever a rival takes two turns in a row, you may skip the second.', { interrupts: true,
      onRivalTurnInRow(ctx, owner, card, mover) { return askInterrupt(ctx, mover, -1); },
    })),
    m('apprentice', 'Apprentice', 2, 2, 'Whenever you take an extra turn, your next member costs 4 less.', {
      onExtraTurn(ctx, owner) { ctx.discount(owner, 4, 'Apprentice'); },
    }),
    m('overseer', 'Overseer', 2, 2, 'Whenever a rival takes an extra turn, gain half your purple, rounded down (at most 4).', {
      onRivalExtraTurn(ctx, owner) { ctx.gain(owner, P, Math.min(4, Math.floor((owner.res[P] || 0) / 2))); },
    }),
    // fill-in (critic): took the slot of an earlier card called Timekeeper (the name now belongs to the game-end purple card)
    // balance pass 1 (bench, both bots agree; design/eval/balance-pass-1.md): 6 → 4 (the most one pass moves);
    // balance pass 2 (pooled bench, midpoint 2.1; design/eval/balance-pass-2.md): 4 → 2
    m('doubletime', 'Corner-Cutter', 2, 0,'Purple you pay for extra turns costs half, rounded up.', { halfTurns: true }),
    // pays on your last placement of the round, before that turn's buy (at round end, round III's purple came too late).
    // +1 per worker measured 8.4 followers (57% win, easy bots): late purple decides the ring. Half that is the card.
    // Cory, 2026-10-15: pays when your last turn of the round ends, after an Overtime or Night Owls minion has landed
    m('bookkeeper', 'Bookkeeper', 4, 2, 'After your last turn each round: +1 purple per 2 of your minions on the board.', {
      onTurnEnd(ctx, owner, card, who) {
        if (who !== owner || owner.left !== 0 || card.paidRound === ctx.state.round) return;
        card.paidRound = ctx.state.round;
        ctx.gain(owner, P, Math.floor(onBoard(ctx, owner) / 2));
      },
    }),
    // Cory, 2026-10-29: "clock maker doesnt feel good" (was +1 purple per 2 purple you have, on recruit and at round start).
    // Price 5 (was 4): Claude, under Cory's go-with-your-gut ("will likely need to rebalance cost"): first pick of two spaces
    // every round beats the old trickle. Core builds the order (firstTwoInRow).
    m('clockmaker', 'Clockmakers', 2, 2, 'Round Start: take your first two turns in a row.', { f: 2, firstTwoInRow: true, retired: true }), // (Cory, Oct 29, balance run: +1 follower); Night Watch takes its place (Claude, under Cory's "use your judgement", 2026-11-04)
    // Replacement batch 1 (Nov 3), live since Nov 4 (Claude, under Cory's "use your judgement"): Clockmakers' place. 3 purple + 2 any as a player sees it. Last Call
    // and Sleep In pay for the minions they put on the token, Night Owls for its 1.
    m('nightwatch', 'Night Watch', 2, 2, 'Whenever a rival takes the Goes Last token, +1 follower per minion on it.', { f: 2, watchToken: true, retired: true, ...old7('purple.nightwatch'), ...old9('purple.nightwatch') }), // retired Nov 6 (Cory: "night watch makes no fucking sense and needs to be immediately replaced")
    // REPLACE9 (Members C, Nov 4, batch bC12: paper 18 vs 12, quality/evals/gate/C-nightwatch3): Night Watch, any
    // player's take, its owner's included. Same price.
    // REPLACE9 (Members C, bC11: paper 17 vs 14; Cory's "paper filters, play ranks", Nov 4): Night Watch's place. Same price.
    ...add9(m('lamplighters', 'Lamplighters', 2, 2, 'Whenever you take the Goes Last token, +1 follower per color you have a minion on.', { f: 2, lampColors: true })),
    ...add9(m('nightwatch9', 'Night Watch', 2, 2, 'Whenever any player takes the Goes Last token, +1 follower per minion on it.', { f: 2, watchToken: 'any' })),
    // REPLACE7 (Nov 4, quality loop, Members A batch 3): Night Watch's place (paper 17, Purple's set 13 -> 16). Cory's
    // Pace-Setter ("could be a good idea for a different batch"), in his Courier words. 3 purple + 2 any, counts as 2.
    // On each turn that comes right after your own, the next rival's turn (the first one still queued) is skipped, as
    // Hold Up skips it; automatic, nobody chooses. Early Birds stops it; Gossip and Pocket Watch pay.
    ...add7(m('pacesetters', 'Pace-Setters', 2, 2, 'Whenever you take a consecutive turn, the next player skips their turn.', { f: 2, n: 2,
      onTurnInRow(ctx, owner, card) {
        const q = ctx.state.queue, close = q.findIndex(t => t.t === 'allPlaced');
        const t = q.slice(0, close < 0 ? q.length : close).find(x => x.t === 'turn' && x.p !== owner.id);
        if (!t) return;
        skipNext(ctx, ctx.player(t.p), card.def.name, owner);
      },
      ...see(info => 1.2 * endsAhead(info).length), // a skip a round, about a space to the rival behind
    })),
    // balance pass 2 (pooled bench, both bots agree; design/eval/balance-pass-2.md): 8 → 12
    m('lamplighter', 'Lamplighter', 6, 2,'On Recruit: +1 purple per minion you get this round (3 / 4 / 5). Round Start: +1 purple per minion you get this round (3 / 4 / 5).', { now: true,
      // Cory, 2026-10-15: every minion you get counts (Extra Hand's too)
      onRoundStart(ctx, owner) { ctx.gain(owner, P, owner.workers || [3, 4, 5][ctx.state.round - 1] || 3); },
    }),
    // Relay's slot (Cory cut Relay, 2026-10-14). Member-value sim, handed over at round II: 6.9 followers, 53% win
    // (Normal bots, n=320), so 8+2 (design/eval/purple-members.md). At 4 players round I has no space to spare, so it
    // pays from round II. Fires once per round (owlRound), whether or not the board had room.
    // Cory, Nov 1 2:35pm: the Goes Last token; the extra minion waits on it
    m('nightowl', 'Night Owls', 6, 1, 'From round II: after your last minion, +1 minion, placed right away.', { f: 2, from: 2, retired: true, ...old7('purple.nightowl'), // retired Nov 6 (Cory: "I thought we replaced night owls? why still seeing it")
      // its onRecruited only says when the extra minion starts: no On Recruit for Tryout or Sample to borrow
      recruitNote: true,
      // recruited after your last minion of the round (its buy step): it waits for next round, and says so
      onRecruited(ctx, owner, card) {
        if (owner.left !== 0 || ctx.state.round < 1) return;
        card.owlRound = ctx.state.round;
        ctx.log(ctx.state.round < 3 ? `${owner.name}'s Night Owls: ${owner.name}'s last minion this round is already placed, so its extra turn starts next round.`
          : `${owner.name}'s Night Owls: ${owner.name}'s last minion is already placed, and this is the last round, so it gives no extra turn.`);
      },
      afterAction(ctx, owner, card) {
        if (owner.left !== 0 || card.owlRound === ctx.state.round) return;
        card.owlRound = ctx.state.round;
        const token = globalThis.process?.env?.NIGHTOWL === 'token';
        if (!extraTurns(ctx, owner, 1, 'Night Owls', { quiet: token })) return;
        // No Goes Last token since Nov 3 (Claude, under Cory's "use your judgement"): with the token its owner won the
        // By color Purple contest in 84% of the rounds they held it and won 46% of Hard games; placed right away, 21% and 32%.
        // NIGHTOWL=token: bot test only, the old way (the extra minion waits on the Goes Last token).
        if (!token) return;
        const q = ctx.state.queue, t = turnsAhead(ctx, owner).map(i => q[i]).pop();
        takeToken(ctx, owner, 'Night Owls', ' with 1 more minion on it');
        if (t) t.token = true;
        if (t) nightWatch(ctx, owner, 1);
      },
    }),
    // Night Owls' place (paper 19 vs 18; "paper filters, play ranks"). Night Owls' extra minion, which may only join a
    // space a rival already took (Party Crasher's join): the queued turn carries join, and core offers only joins for it.
    ...add7(m('moonlighters', 'Moonlighters', 6, 1, 'From round II: after your last minion, +1 minion, placed right away on a space a rival already took.', { f: 2, n: 2, from: 2,
      afterAction(ctx, owner, card) {
        if (owner.left !== 0 || card.owlRound === ctx.state.round || ctx.state.round < 2) return;
        card.owlRound = ctx.state.round;
        const q = ctx.state.queue, end = turnEnd(q);
        if (!extraTurns(ctx, owner, 1, 'Moonlighters')) return;
        const t = q[end < 0 ? 0 : end + 1];
        if (t && t.t === 'turn' && t.p === owner.id) { t.join = true; owner.crashNext = true; }
      },
    })),
    m('patience', 'Timekeeper', 4, 2, 'Game end: +1 follower per 3 purple.', {
      onGameEnd: (ctx, owner) => Math.floor((owner.res[P] || 0) / 3),
    }),
    // Cory's Purple members (2026-10-22); names are Claude's fill-ins; prices are the pricing thread's educated guesses
    m('earlybird', 'Early Birds', 2, 0, 'Your turns can’t be skipped.', { f: 2, noSkip: true, ...old14('firstbirds') }),
    // REPLACE14 bot test (Members E lane, Nov 4; quality/pitches/E-earlybirds.md): Early Birds reworked (Cory, Nov 1: "a
    // full rework"), same price. The round's first minion is the first space taken this round; Right Away's turn rule.
    ...add14(m('firstbirds', 'Early Birds', 2, 0, 'If you place the round’s first minion, your next turn comes right after it.', { f: 2, n: 2,
      afterAction(ctx, owner, card) {
        const s = ctx.state;
        if (card.paidRound === s.round) return;
        const placed = Object.keys(s.slots || {}).length + Object.values(s.squats || {}).reduce((a, l) => a + l.length, 0);
        if (placed !== 1 || s.slots[ctx.placement?.key] !== owner.id) return;
        card.paidRound = s.round;
        turnsNow(ctx, owner, 1, 'Early Birds');
      },
      // BOTSEE (fixed after the Evaluators' read, Nov 4: bots swapped it away while holding Line Cutters): about 3 per
      // fire, for each Round Start still ahead (this round too while nobody has placed), sure with Line Cutters, likely
      // with the fewest followers (who goes first from round II), rare otherwise.
      ...see(info => {
        const s = info.s, o = info.owner;
        const first = o.members.some(u => defById(s.cards[u].def)?.pickFirst) ? 1
          : Math.min(...s.players.map(x => x.bonus)) === o.bonus ? 0.6 : 0.15;
        const placed = Object.keys(s.slots || {}).length > 0;
        // this round: nobody has placed and you're first in its order, so it fires for sure (e-firstbirds-ab4, 1130:
        // the bot first in round II swapped it away before placing)
        const now = placed ? 0 : (s.order?.[0] === o.id ? 1 : first);
        return 5 * (first * [1, 2, 3].filter(r => r > info.round).length + now);
      }),
    })), // (Cory, Oct 29, balance run: +1 follower)
    // REPLACE5 bot test (Nov 3, replacement batch 5): Bouncers' place. 6 purple + 3 any as a player sees it. Every +1
    // minion a rival gets (Overtime, Night Owls, Go-Getter, Extra Hand, Overtime…: the purple helpers' onRivalExtraTurn)
    // gives you one, placed after everyone else's, while the board has a spare space (none in round I). A minion from
    // Tagalongs doesn't set off another Tagalongs.
    ...add5(m('tagalongs', 'Tagalongs', 5, 3, 'Whenever a rival gets +1 minion, you get +1 minion too.', {
      onRivalExtraTurn(ctx, owner) {
        if (ctx.state.tagalong) return;
        ctx.state.tagalong = true;
        try { extraMinion(ctx, owner, 'Tagalongs'); } finally { delete ctx.state.tagalong; }
      },
    })),
    // Latecomers: Bouncers' place (Cory, Nov 7: "Yes"; his ask: "a purple that gives the go last token"). Same price as Bouncers.
    m('latecomers', 'Latecomers', 1, 2, 'On Recruit: take the Goes Last token: your next minion goes after everyone else’s.', { f: 2,
      onRecruited(ctx, owner) { toToken(ctx, owner, 1, 'Latecomers'); },
    }),
    m('bouncer', 'Bouncers', 1, 2, 'On Recruit: the next two rivals’ turns are skipped.', { f: 2, ...old5, // cut Nov 7 (cull.js): Latecomers takes its place (Cory, "Yes")
      // the next two turns that belong to rivals; your own turn between them still happens (Cory's yes)
      onRecruited(ctx, owner) {
        const q = ctx.state.queue, end = q.findIndex(t => t.t === 'endTurn'), close = q.findIndex(t => t.t === 'allPlaced');
        const who = q.slice(end + 1, close < 0 ? q.length : close).filter(x => x.t === 'turn' && x.p !== owner.id).slice(0, 2).map(x => x.p);
        if (!who.length) { ctx.log(`${owner.name}'s Bouncers: no rival has a turn left to skip this round.`); return; }
        // the second is the next rival turn after the first one moves to the end: skip in order
        // a turn Early Birds keeps still counts as one of the two: the second is the rival turn after it (Nov 5: both
        // tries had landed on the Early Birds seat, so the rival after it was never skipped)
        let moved = 0, kept = 0;
        while (moved + kept < 2) {
          const q2 = ctx.state.queue, e2 = q2.findIndex(t => t.t === 'endTurn'), c2 = q2.findIndex(t => t.t === 'allPlaced');
          const rest = q2.slice(e2 + 1, c2 < 0 ? q2.length : c2).filter(x => x.t === 'turn');
          const next = rest.slice(0, rest.length - moved).filter(x => x.p !== owner.id)[kept];
          if (!next) break;
          if (skipNext(ctx, ctx.player(next.p), 'Bouncers', owner)) moved++; else kept++;
        }
      },
    }),
    // Purple's artifact only, never dealt (Claude's pick, 2026-10-24, after Cory found Courier "a little too good").
    // Name is Claude's fill-in.
    // +2 (Cory, Nov 1 8:25pm: option A; 19.5% held in the 200-game test, against 11% at +1)
    m('pocketwatch', 'Pocket Watch', 0, 0, 'Whenever you take the Goes Last token, +2 purple.', { artifact: true, // +2 (Cory, Nov 11 9:32pm Eastern: "ship ... purple at +2"; was +3, owners won 40% in the action test)
      onSkip(ctx, owner, card, p, by) {
        // POCKETWATCH=self<n>: bot test of "Whenever you skip a rival's turn, +n purple." (Nov 6; off in the game)
        const own = String(globalThis.process?.env?.POCKETWATCH || 'token2').match(/^self(\d+)$/);
        if (own && (by !== owner.id || p === owner)) return;
        if (/^token/.test(String(globalThis.process?.env?.POCKETWATCH || 'token2'))) return;
        const got = ctx.gain(owner, 'purple', own ? Number(own[1]) : 2); if (got) ctx.log(`${owner.name}'s ${ctx.cloakOr(card, 'Pocket Watch')}: +${got.n} ${got.color}.`); },
    }),
    m('gossip', 'Gossip', 2, 2, /* Cory, Nov 5 backlog price yes */ 'Whenever a player’s turn is skipped, +1 follower.', { ...old13('busybody'),
      onSkip(ctx, owner) { owner.bonus += 1; ctx.log(`${owner.name}'s Gossip: +1 follower.`); },
    }),
    // REPLACE13=busybody (lane F, Nov 4): Gossip's lifted control, A/B only; a number change on a live card is Cory's call
    ...add13(m('busybody', 'Busybody', 3, 2, 'Whenever a player’s turn is skipped, +2 followers.', {
      onSkip(ctx, owner) { owner.bonus += 2; ctx.log(`${owner.name}'s Busybody: +2 followers.`); },
    })),
    m('extrashift', 'Extra Shift', 5, 3, 'On Recruit: +1 minion this round.', { from: 2,
      // the snake carries on until every minion is placed, so the new one goes after everyone else's
      onRecruited(ctx, owner) {
        extraMinion(ctx, owner, 'Extra Shift');
      },
    }),
    // Cory, 2026-10-23: "its when you place THE last minion of the round. so it benefits folks going last"
    // Cory, 2026-10-24: "go deep card for every color" ("sure for now"); name and price Claude's fill-in, priced like Chronicler
    m('timekeepers', 'Timekeeper', 1, 2, 'Game End: +1 follower per purple member you have.', { ...old5, ...old7('purple.timekeepers'),
      onGameEnd: (ctx, owner) => ctx.countMembersOfColor(owner, 'purple'),
    }),
    // REPLACE7=timekeeperlift (Nov 4, director 9:36am Eastern): the lifted control, paper 16 vs 13. A number change on a
    // live card is Cory's call: off by default, A/B only, never shipped without his yes. Named apart so sheets can pair it.
    ...add7(m('timekeeperlift', 'Head Timekeeper', 1, 2, 'Game End: +2 followers per purple member you have.', { round: 1,
      onGameEnd: (ctx, owner) => 2 * ctx.countMembersOfColor(owner, 'purple'),
    })),
    // REPLACE5 bot test (Nov 3, replacement batch 5): Timekeeper' place. 4 purple + 2 any as a player sees it. Counted
    // at round end before the contests: every minion of yours on a space (one joining a rival's space too); a minion
    // that sat out for want of a space isn't on the wheel.
    ...add5(m('fullhouse', 'Full House', 3, 2, 'Round End: if you have more minions on the wheel than every rival, +1 follower per minion you have there.', {
      onRoundEnd(ctx, owner) {
        const mine = onBoard(ctx, owner);
        if (!mine || ctx.rivals(owner).some(o => onBoard(ctx, o) >= mine)) return;
        owner.bonus += mine;
        ctx.log(`${owner.name}'s Full House: ${mine} minions on the wheel, more than every rival: +${mine} followers.`);
      },
    })),
    // REPLACE7 (Nov 4, scale-up round 1, Members A): Timekeeper's place, two candidates that passed paper. 2 purple + 2 any.
    // Night Shift (paper 15, set 16): the token holder at Round End, the round's own token (Sleep In, Last Call, Call Back).
    ...add7(m('nightshift', 'Night Shift', 1, 2, 'Round End: if you hold the Goes Last token, +1 follower per purple member you have.', { round: 1,
      onRoundEnd(ctx, owner, card) {
        if (tokenHolder(ctx.state) !== owner.id) return;
        const k = ctx.countMembersOfColor(owner, 'purple');
        if (!k) return;
        owner.bonus += k;
        ctx.log(`${owner.name}'s ${card.def.name}: ${owner.name} holds the Goes Last token, +${k} follower${k === 1 ? '' : 's'} (${k} purple member${k === 1 ? '' : 's'}).`);
      },
      ...see(info => 1.5 * endsAhead(info).length),
    })),
    // Wake-Up Caller (paper 17, set 14): the leader's first turn of the round is passed (skipNext, as Hold Up; Early Birds
    // blocks it). Ties: each of them. If the owner leads, the owner skips too. Runs once the round's turns are queued.
    ...add7(m('wakeupcaller', 'Wake-Up Caller', 1, 2, 'Round Start: the player with the most followers skips their first turn (each of them, if tied).', { round: 1,
      onRoundQueued(ctx, owner, card) {
        const top = Math.max(...ctx.state.players.map(o => ctx.followers(o)));
        if (!(top > 0)) return;
        for (const o of ctx.state.players.filter(o => ctx.followers(o) === top)) skipNext(ctx, o, card.def.name, owner);
      },
      ...see(info => 1.2 * endsAhead(info).length),
    })),
    // Purple's round I extra-turn gap (director, Nov 4 12:40pm), Timekeeper's place. 2 purple + 2 any.
    // Sprinter (paper 16 vs 11): Crunch Time's turn rule, once a game, when you choose (turnsNow, as Crunch Time).
    // Nov 4, "paper filters, play ranks" (Cory's yes; director 12:47pm): paper passers at or over the bar and the old
    // card go straight to a play A/B. Timekeeper's place: Old Timer (14), Lookouts (15), Errand Boy (14).
    // Relay Runners (paper 14 vs 11): Right Away's own turn rule, two turns for its owner (the space reads the flag).
    ...add7(m('relayrunners', 'Relay Runners', 1, 2, 'Your Right Away gives your next two turns right after it.', { f: 2, n: 2, round: 1, relayRunners: true,
      ...see(info => 1.5 * endsAhead(info).length),
    })),
    ...add7(m('oldtimer', 'Old Timer', 1, 2, 'Round End: put a time token on this card. Worth 1 more follower per time token.', { round: 1,
      onRoundEnd(ctx, owner, card) { card.time = (card.time || 0) + 1; ctx.log(`${owner.name}'s Old Timer: a time token (worth ${1 + card.time}).`); },
      ...see(info => endsAhead(info).length),
    })),
    // Live Nov 6 (Cory: "2 yea but plus 2 followers. fuck it just add them both. we'll slowly start getting to 12 each"):
    // +2 followers, joining Purple's deck beside Night Owls. Night Watch's price (Claude, under Cory's go-with-your-gut).
    m('lookouts', 'Lookouts', 2, 2, 'Whenever you take a consecutive turn, +2 followers.', { f: 2, n: 2,
      onTurnInRow(ctx, owner) { owner.bonus += 2; ctx.log(`${owner.name}'s Lookouts: a turn in a row, +2 followers.`); },
      ...see(info => 3 * endsAhead(info).length),
    }),
    ...add7(m('errandboy', 'Errand Boy', 1, 2, 'On Recruit: your next turn comes right after this one.', { round: 1,
      onRecruited(ctx, owner) { turnsNow(ctx, owner, 1, 'Errand Boy'); },
    })),
    ...add7(m('sprinter', 'Sprinter', 1, 2, 'On Use, once per game: your next two turns come right after this one.', { round: 1,
      activate: 'game',
      onActivate(ctx, owner, card) { if (!turnsNow(ctx, owner, 2, 'Sprinter')) card.used = false; },
      // bots: round III, when pulling two turns up jumps rivals' turns
      botActivate: (ctx, owner) => ctx.state.round === 3 && turnsNowEstimate(ctx, owner, 2) > 0,
    })),
    // Early Risers (paper 15 vs 11, 2 on catch-up): Clockmakers' rule while you have the fewest followers at Round Start
    // (core: flag firstTwoIfFewest). Counts as 2, so a group name (judges: "Head Start" read as one member).
    ...add7(m('earlyrisers', 'Early Risers', 1, 2, 'Round Start: if you have the fewest followers (ties count), your first two turns come in a row.', { f: 2, n: 2, round: 1, firstTwoIfFewest: true,
      ...see(info => (info.round < 3 ? 1.5 : 0)),
    })),
    // Snoozers (scale-up 1, Shift Crew's place: paper 14 vs 8, Purple's set 15 vs 10). Same price as Shift Crew (3 purple
    // + 1 any), worth 3, counts as 3. Pays on Sleep In and Last Call (core: toToken), per minion they put on the token.
    ...add7(m('snoozers', 'Snoozers', 2, 1, 'Whenever you take the Goes Last token, +1 purple per minion on it.', { f: 3, n: 3, round: 1, tokenPurple: true,
      ...see(info => 1.5 * endsAhead(info).length),
    })),
    // Sleepyheads (paper 17, set 17): pays whenever its owner's space or card takes the token (keeping it, by taking it
    // again, counts: the space says "Take the Goes Last token"); Early Birds stops the take, so no pay (core: takeToken).
    // Live Nov 6 in Night Watch's place (Cory: "1 ok"), at Night Watch's price (Claude, under Cory's go-with-your-gut).
    m('sleepyheads', 'Sleepyheads', 2, 2, 'Whenever you take the Goes Last token, +3 followers.', { f: 2, n: 2, tokenPay: 3, // +3 (Cory, Nov 6 12:24am: "yes to sleepyheads")
      ...see(info => 3 * endsAhead(info).length),
    }),
    // Cory, 2026-11-11 9:10pm Eastern: "last callers is fine. Let's try that" (his ask, 2:27pm: a member that grabs the Goes
    // Last token). Takes it as a Purple space does: your other minions wait until every other hand is empty. Sleepyheads'
    // place and price (Claude, under Cory's go-with-your-gut).
    m('lastcallers', 'Last Callers', 2, 2, 'On Use, once per round: take the Goes Last token.', {
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        // "take the Goes Last token" with no minion left still takes it (from a rival too), as Last Call does (combo test Nov 12)
        toToken(ctx, owner, 1, 'Last Callers');
      },
      // a bot takes it with its last minion in hand, when a rival holds the token
      botActivate: (ctx, p) => turnsLeft(ctx, p) === 1 && tokenHolder(ctx.state) != null && tokenHolder(ctx.state) !== p.id,
    }),
    // REPLACE7 (Nov 4, quality loop, Members A batch 5): Timekeeper's place, a round I first taste of the extra-turn plan
    // (director's ask; paper 18 vs 9, Purple's set 18 vs 9). Right Away's turn rule, carried, once a round, on your own
    // turn: your last turn of the round moves up to right after this one (turnsNow, as Right Away). 2 purple + 2 any.
    ...add7(m('gobetween', 'Go-Between', 1, 2, 'On Use, once per round: your next turn comes right after this one.', { round: 1,
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) { if (!turnsNow(ctx, owner, 1, 'Go-Between')) card.used = false; },
      // bots: when pulling a turn up jumps at least one rival's turn
      botActivate: (ctx, owner) => turnsNowEstimate(ctx, owner, 1) > 0,
    })),
    // Live in Early Birds' slot (Cory, Nov 5: "night manager yes"). Was REPLACE7 (Nov 4, Members A batch 2): Timekeeper's place (paper 19, 18 on a second gate). 2 purple + 2
    // any as a player sees it. "Placed the round's last minion" is the By color Purple contest's own measure (lastPlaced).
    m('nightmanager', 'Night Managers', 1, 2, 'Round End: if you placed the round’s last minion, +1 follower per purple member you have.', { n: 2, // counts as 2 members, price kept (Cory, Nov 6: "night managers should be worth 2 members")
      onRoundEnd(ctx, owner, card) {
        const last = ctx.state.lastPlaced;
        if (!last || last.round !== ctx.state.round || last.pid !== owner.id) return;
        const k = ctx.countMembersOfColor(owner, 'purple');
        if (!k) return;
        owner.bonus += k;
        ctx.log(`${owner.name}'s ${card.def.name}: ${owner.name} placed the round's last minion, +${k} follower${k === 1 ? '' : 's'} (${k} purple member${k === 1 ? '' : 's'}).`);
      },
      ...see(info => endsAhead(info).length), // about 3 followers a round it fires, a third of the rounds
    }),
    // REPLACE13 (lane F, Nov 4; quality/pitches/F-batch2.md): candidates for Closer's slot, bot games only
    ...add13(m('lastorders', 'Last Orders', 2, 2, 'When you place the last minion of the round, recruit once more.', {
      afterAction(ctx, owner, card) {
        if (card.paidRound === ctx.state.round || ctx.state.players.some(o => o.left > 0)) return;
        card.paidRound = ctx.state.round;
        const q = ctx.state.queue;
        let at = 0;
        for (let i = 0; i < q.length; i++) { if (q[i].p !== owner.id) continue; if (q[i].t === 'endTurn') break; if (q[i].t === 'buy') { at = i; break; } }
        q.splice(at, 0, { t: 'buy', p: owner.id });
        ctx.log(`${owner.name}'s Last Orders: the round's last minion, so ${owner.name} recruits once more this turn.`);
      },
    })),
    ...add13(m('nightporter', 'Night Porter', 2, 2, 'Each minion you place once all rivals are out of minions: +2 followers.', {
      afterAction(ctx, owner) {
        if (ctx.rivals(owner).some(o => o.left > 0)) return;
        owner.bonus += 2;
        ctx.log(`${owner.name}'s Night Porter: every rival is out of minions, +2 followers.`);
      },
    })),
    ...add13(m('closingact', 'Closing Act', 2, 2, 'When you place the last minion of the round: +2 followers in round I, +4 in round II, +6 in round III.', {
      afterAction(ctx, owner, card) {
        if (card.paidRound === ctx.state.round || ctx.state.players.some(o => o.left > 0)) return;
        card.paidRound = ctx.state.round;
        const k = 2 * ctx.state.round;
        owner.bonus += k;
        ctx.log(`${owner.name}'s Closing Act: the round's last minion, +${k} followers.`);
      },
    })),
    m('closer', 'Closer', 2, 2, 'When you place the last minion of the round: +4 purple.', { ...old13('lastorders', 'nightporter', 'closingact'),
      afterAction(ctx, owner, card) {
        if (card.paidRound === ctx.state.round || ctx.state.players.some(o => o.left > 0)) return;
        card.paidRound = ctx.state.round;
        ctx.gain(owner, P, 4);
      },
    }),
    // Cory, 2026-10-28: Once per game at +3 per turn in a row (was once per round at +2)
    m('streak', 'Hot Streak', 2, 2, 'On Use, once per game: +3 followers per turn in a row you’ve taken just before this one.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const k = inARow(ctx, owner);
        if (!k) { card.used = false; ctx.log(`${owner.name}'s Hot Streak: no turns in a row just before this one yet.`); return; }
        owner.bonus += 3 * k;
        ctx.log(`${owner.name}'s Hot Streak: +${3 * k} followers.`);
      },
      botActivate: (ctx, owner) => inARow(ctx, owner) >= 2 || (inARow(ctx, owner) >= 1 && ctx.state.round === 3),
    }),
    // REPLACE7 (Nov 4, scale-up 3, Shift Crew's place): Lifers (paper 15, set 15 vs 10). A time token per round end sits
    // on the card (card.time) and moves with it, so a rival who takes it keeps the tokens; core's valueOf adds them.
    ...add7(m('lifers', 'Lifers', 2, 1, 'Round End: put a time token on this card. Worth 1 more follower per time token.', { f: 2, n: 2, round: 1,
      onRoundEnd(ctx, owner, card) { card.time = (card.time || 0) + 1; ctx.log(`${owner.name}'s Lifers: a time token (worth ${2 + card.time}).`); },
      ...see(info => endsAhead(info).length),
    })),
    // Floor Crew (paper 13, set 12 vs 10; A/B +0.41): each recruit (a member or a follower purchase, Cory 2026-10-21) pays
    // +1 purple per 2 of its owner's minions on the board; not its own arrival (as Proselytizers).
    ...add7(m('floorcrew', 'Floor Crew', 2, 1, 'Whenever you recruit, +1 purple per 2 of your minions on the board.', { f: 3, n: 3, round: 1,
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || what.member?.uid === card.uid) return;
        const n = Math.floor(onBoard(ctx, owner) / 2);
        if (n) { ctx.gain(owner, P, n); ctx.log(`${owner.name}'s Floor Crew: +${n} purple.`); }
      },
      ...see(info => 0.5 * endsAhead(info).length),
    })),
    // Live since Nov 4 in Shift Crew's place (scale-up 4: paper 13, set 13 vs 10, play A/B +0.42, owners 28% vs 29%; the
    // director's ship call under Cory's "you aren't supposed to wait for me"). Silversmith's rule in purple, in its words
    // ("takes a Silver space"), so the hook is the same (afterRivalAction).
    m('picketline', 'Picket Line', 2, 1, 'Whenever a rival takes a Purple space, +1 purple.', { f: 3, n: 3, round: 1,
      afterRivalAction(ctx, owner, card, qid) { if (qid === P) { ctx.gain(owner, P, 1); ctx.log(`${owner.name}'s Picket Line: +1 purple.`); } },
      ...see(info => 2 * endsAhead(info).length),
    }),
    m('crew', 'Shift Crew', 2, 1, 'Worth 4 followers.', { f: 4, n: 4, vanilla: true, round: 1, ...old3, retired: true }), // retired Nov 4: Picket Line
    // REPLACE7 (Nov 4, quality loop, Members A batch 2): Shift Crew's place (paper 19; Purple's pair set check with Night
    // Manager 11 -> 17). Clockmakers' tested rule (core: firstTwoInRow). Worth and count are one number (rulebook), so 3
    // and 3 at 3 purple + 2 any, a round I member as Shift Crew is (Claude's fill-in; pitched as worth 2, counts as 4).
    ...add7(m('daylaborers', 'Day Laborers', 2, 2, 'Round Start: take your first two turns in a row.', { f: 3, n: 3, round: 1, firstTwoInRow: true })), // 2 members (Cory, Oct 29); 4 (Cory, Nov 1: "shift crew is just bad. should be 4 members?"), price 4 Claude's
    // REPLACE3 bot test (Nov 3, replacement batch 3): Shift Crew's place. 6 purple + 3 any as a player sees it. On your
    // turn, any of your minions on the board (a joined one too) moves to a space with no minion on it, and that space's
    // action happens, as Straggler's move does; the old space's action stays done and the space opens. No recruit comes
    // with it (it is an action, not a turn).
    ...add3(m('pacers', 'Pacers', 5, 3, 'On Use, once per round: move one of your minions to an open space and do that action.', { f: 2,
      activate: 'round',
      onRoundStart(ctx, owner, card) { card.used = false; },
      onActivate(ctx, owner, card) {
        const to = pacerOpen(ctx);
        if (!to.length || !myWorkers(ctx, owner).length) { card.used = false; ctx.log(`${owner.name}'s Pacers: ${to.length ? 'no minion on the board to move' : 'no open space'}.`); return; }
        ctx.choose(owner, 'Pacers: move one of your minions to which open space?', to.map(t => ({
          id: `to:${t.key}`, label: t.a.name, kind: 'slot', value: t.key, hint: t.a.estimate(ctx, owner),
        })), 'purple.pacerTo');
      },
      botActivate: (ctx, owner) => myWorkers(ctx, owner).length > 0 && Math.max(0, ...pacerOpen(ctx).map(t => t.a.estimate(ctx, owner))) >= 3,
    })),
  ],
};

// ---------- REPLACE3 bot test (Nov 3, replacement batch 3): Interrupters and Pacers ----------
const holds = (c, key) => !!(c.def[key] || (c.copy && defById(c.copy)?.[key]) || (c.ability && defById(c.ability)?.[key]));
/** mover's turn is the second in a row: ask the next rival holding Interrupters (seat order, after seat `after`) whether
 *  to skip it. True when a choice was queued. */
function askInterrupt(ctx, mover, after) {
  if (noSkip(ctx, mover)) return false;
  const q = ctx.state.queue, close = q.findIndex(t => t.t === 'allPlaced');
  // another player's turn still to come this round (the asked turn itself sits at the head of the queue)
  if (!q.slice(0, close < 0 ? q.length : close).some(t => t.t === 'turn' && t.p !== mover.id)) return false;
  const o = ctx.rivals(mover).find(x => x.id > after && ctx.membersOf(x).some(c => holds(c, 'interrupts')));
  if (!o) return false;
  const closer = ctx.membersOf(mover).some(c => [c.def.id, c.copy, c.ability].includes('purple.closer'));
  const name = ctx.membersOf(o).find(c => holds(c, 'interrupts'))?.def.name || 'Interrupters';
  ctx.choose(o, `${name}: ${mover.name} takes two turns in a row. Skip the second?`, [
    { id: 'skip', label: `Skip ${mover.name}'s turn`, kind: 'choice', value: 'skip', hint: closer ? 0 : 1 },
    { id: 'let', label: `Let ${mover.name} go`, kind: 'pass', value: 'let', hint: closer ? 1 : 0 },
  ], 'purple.interrupt', { pid: mover.id, name });
  return true;
}
function pacerOpen(ctx) {
  const out = [];
  ctx.state.quadrants.forEach((qid, q) => spacesOf(ctx.state, qid).forEach((a, i) => {
    if (!(a.ring > ctx.state.round || (a.lastRound && ctx.state.round > a.lastRound)) && ctx.state.slots[`${q}-${i}`] === undefined) out.push({ key: `${q}-${i}`, q, i, a });
  }));
  return out;
}
const pacerSpace = (ctx, key) => { const [q, i] = key.split('-').map(Number); return spacesOf(ctx.state, ctx.state.quadrants[q])[i]; };
function myWorkers(ctx, p) {
  const out = [];
  for (const [key, o] of Object.entries(ctx.state.slots)) if (o === p.id) out.push({ key, joined: false });
  for (const [key, list] of Object.entries(ctx.state.squats || {})) if (list.includes(p.id)) out.push({ key, joined: true });
  return out;
}
function pacerMove(ctx, p, { key, joined }, to) {
  if (joined) {
    const list = ctx.state.squats[key];
    list.splice(list.indexOf(p.id), 1);
    if (!list.length) delete ctx.state.squats[key];
  } else delete ctx.state.slots[key];
  ctx.state.slots[to] = p.id;
  p.lastSlot = { key: to, joined: false };
  const [q, i] = to.split('-').map(Number);
  ctx.log(`${p.name}'s Pacers: moves a minion from ${pacerSpace(ctx, key).name} to ${pacerSpace(ctx, to).name}.`);
  // the engine's own act task: the new space resolves as usual (no recruit)
  ctx.state.queue.unshift({ t: 'act', p: p.id, q, i });
}
