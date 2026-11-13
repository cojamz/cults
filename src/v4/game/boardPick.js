// The board picker (Cory, 2026-10-15: "those selector screens were awful"): a choice is answered on the board itself.
// Each option the engine marks with a structured `target` (core.js withTargets) lights the thing it names, and a click
// there picks it: { space } a wheel space, { uid } a member (in the shop or on a seat), { pid } a player's cult,
// { pid, res } one of their resource stacks (give: true for a gift), { res } your own stack of a color. Options are
// read by their target only, never by their label. What has no place on the board (Pass, "All 3 as green", an amount)
// stays a button by the caption, and every pick is also in a compact list for the keyboard.
import { quadrant, defById, followers, spacesOf } from '../../engine/v4/index.js';
import { lastSpace } from './seats.js';
import { anySpaces } from '../../engine/v4/content/testset.js';

/**
 * The picker for the pending choice, or null when it isn't one (no option has a place on the board, or two options
 * name the same thing): { title, actor, count, only, options, where: Map(boardKey → option), rest: [option],
 * spaces: Map(slotKey → optionId), cards: Map(uid → option), seats: { [pid]: { res, seat, members } }, kinds: Set }.
 * Board keys: space:q-i, shop:uid, member:uid, stack:pid:color, seat:pid.
 */
export function boardPicker(state, pend) {
  if (!pend || pend.kind !== 'choose' || !pend.options || !pend.options.length) return null;
  // a gift or a pair (Good Deed, Kickback, the swaps, Trade Seeds, Sweet Talk) is picked on the gift card by the space;
  // a steal, a recruit from the row or a minion's move asks on that card too, and its targets stay lit on the board
  // (g.board), so they are picked either place
  const g = giftPick(state, pend);
  if (g && !g.board) return null;
  const where = new Map(), rest = [];
  const holder = uid => state.players.find(p => p.members.includes(uid));
  const list = pend.options;
  for (const o of list) {
    const t = o.target;
    let key = null;
    if (t && typeof t.space === 'string') key = `space:${t.space}`;
    // a member from the top of the pile (Talent Scout) is laid out in the shop strip for the pick (ShopCards' tray)
    else if (t && Number.isInteger(t.uid)) key = state.shop.includes(t.uid) || state.pile.slice(0, 5).includes(t.uid) ? `shop:${t.uid}` : holder(t.uid) ? `member:${t.uid}` : null;
    else if (t && Number.isInteger(t.pid) && state.players[t.pid]) key = t.res ? `stack:${t.pid}:${t.res}` : `seat:${t.pid}`;
    else if (t && t.res) key = `stack:${pend.player}:${t.res}`;
    // Peek's "Keep this order" lives on its own row in the shop (ShopCards' PileRow), not as a second button up here
    if (!key) { if (o.kind !== 'keep') rest.push(o); continue; }
    if (where.has(key)) {
      // two copies of one space (its taker's and a Squatter's join): the board keeps the better one for you, the other
      // is a button by the caption; giving up here put a grid of chips over the wheel (w4 skeptic #3, Sample)
      const prev = where.get(key);
      if (o.kind === 'space' && prev.kind === 'space') {
        if ((o.hint ?? 0) > (prev.hint ?? 0)) { where.set(key, o); rest.push(prev); } else rest.push(o);
        continue;
      }
      return null; // two answers on one thing: the list says it better
    }
    where.set(key, o);
  }
  if (!where.size) return null;
  const spaces = new Map(), cards = new Map(), seats = {}, kinds = new Set();
  const seat = pid => seats[pid] || (seats[pid] = { res: {}, seat: null, members: {} });
  let give = false;
  for (const [key, o] of where) {
    const [kind, a, b] = key.split(':');
    if (kind === 'space') { spaces.set(a, o.id); kinds.add('space'); }
    else if (kind === 'shop') { cards.set(Number(a), o); kinds.add(state.shop.includes(Number(a)) ? 'shop' : 'pile'); }
    else if (kind === 'member') { const h = holder(Number(a)); seat(h.id).members[a] = o; kinds.add(h.id === pend.player ? 'own-member' : 'member'); }
    else if (kind === 'stack') { seat(Number(a)).res[b] = o; kinds.add(Number(a) === pend.player ? 'own-stack' : 'stack'); if (o.target.give) give = true; }
    else if (kind === 'seat') { seat(Number(a)).seat = o; kinds.add('seat'); }
  }
  const colors = [...new Set([...where.keys()].filter(k => k.startsWith('stack:')).map(k => k.split(':')[2]))];
  // engine prompts read "Name: question"; the name is what's asking (a space or a member)
  const m = String(pend.prompt || '').match(/^([^:]{2,40}):\s(.*)$/);
  return {
    title: m ? m[1] : '', question: m ? m[2] : String(pend.prompt || ''), actor: pend.player, count: pend.count || null, give,
    // the engine's own reason for each player who can't be picked now (a steal's per-rival limit), for dim seats
    blocked: pend.blocked || null,
    only: kinds.has('stack') && !give && colors.length === 1 ? colors[0] : null, options: list, where, rest, spaces, cards, seats, kinds, pend,
  };
}

/**
 * The gift card (Cory: the two-step pick on the seats was "very bad/confusing"): a choice that gives something to a
 * rival, or pairs two things, is picked on a small card beside the space just used, never on the seats and never from
 * a grid of combination chips. Its rows, in order:
 *   give    Good Deed: a color (the table's dots), then the rival who gets it (their faces)
 *   gift    Kickback, Benefactor: the color is fixed ("give 1 gold to…"), so only the rivals' faces (their seats light too)
 *   colors  Trade Seeds: the color you give (yours), then the one you get
 *   amount  Sweet Talk: the color you get, then how many
 *   trade   Red swaps: two members from different cults or the shop, grouped by their actual holder
 *   color   Goody Bags, Cheap Seats: one row, a color of yours (a space's ask only; Done and "N left" ride along)
 * And three asks from far away (live panel round 1: the steal's, Collect Debts', Snap Up's and Hand-pick's targets sat
 * 420–600 px from the space while the prompt sat top centre; Straggler waited on a pill up there), which open on the
 * same card while their targets stay lit on the board (board: where else they're picked):
 *   steal   Help Yourself, Collect Debts, Redistribute, Lie Low, Heist: each rival's face and the stacks you can
 *           take from, one coin per click, and "Take all N" (plan: the picks it makes, biggest pile first)
 *   recruit Hand-pick, Open Door (and Churn, Bury: the shop members they send to the bottom): picture, name, price
 *   move    Straggler: the lit spaces on the wheel are the answer; the card says so and holds Stay put
 * The model: { kind, title, head, n, color, actor, chosen, firsts, seconds, others, rest, done, sameCost, board }.
 *   firsts: the first row, [{ id, a, chosen }]: id "@pick:a" lifts it, "@unpick" (the one lifted) puts it down; another
 *     first switches. The screen answers these itself; nothing goes to the engine.
 *   seconds: the second row once a first is picked (at once, for a gift): [{ o, b }], o the engine's own option (its id
 *     unchanged), b what it pairs with (a player id, a color, an amount, a member uid).
 *   others: what the second row can hold, shown quiet before a first is picked, so the card never changes shape.
 *   rest: answers with no place in a row (Keep it all, Done).
 */
export function giftPick(state, pend, first = null) {
  if (!pend || pend.kind !== 'choose' || !pend.options || !pend.options.length) return null;
  const m = String(pend.prompt || '').match(/^([^:]{2,40}):\s(.*)$/);
  const title = m ? m[1] : '';
  const question = m ? m[2] : String(pend.prompt || '');
  const base = { title, actor: pend.player, done: null, sameCost: false };
  const other = otherPick(state, pend, title, question, base, first);
  if (other) return other;
  // a pick of a color of the table, not of a resource (Greatest Hits' "Choose a color other than green", Hustler,
  // Fortune Teller): the colors' rims, on the card and on the wheel, never resource coins (Cory, Nov 13: "selecting a
  // color shouldnt use resources, is should use the rims of the colors", "like for greatest hits"). The same test the
  // engine uses to read a pick as colors of the table (core withTargets).
  const rim = rimPick(state, pend, question, base);
  if (rim) return rim;
  // a gift of a fixed color to a rival: every answer is a player ("Kickback: give 1 gold to…")
  const gift = question.match(/^give (\d+) (\w+) to\b/i);
  const players = pend.options.filter(o => o.target && Number.isInteger(o.target.pid) && o.target.res == null && o.target.pid !== pend.player);
  if (gift && players.length && players.length === pend.options.length) {
    const n = Number(gift[1]), color = state.resources.includes(gift[2]) ? gift[2] : null;
    return { ...base, kind: 'gift', n, color, head: 'Give', chosen: color, firsts: [], seconds: players.map(o => ({ o, b: o.target.pid })), others: players.map(o => o.target.pid), rest: [] };
  }
  // rivals gain silver from the bank, split one at a time (Party Gifts, Largesse, Philanthropist; Cory, 2026-11-01:
  // "not clear how many times you've clicked / what's remaining"): the rivals' faces, each with what you've sent them
  // so far, and "N given · M left" on the card. The engine hands the silver out at Done, so the tally is the card's.
  const share = state.queue?.[0]?.h === 'silver.share' ? state.queue[0].data : null;
  if (share && players.length) {
    const given = share.given || {};
    const total = Object.values(given).reduce((s, n) => s + n, 0);
    const color = state.resources.includes('silver') ? 'silver' : null;
    return { ...base, kind: 'share', n: share.max, color, chosen: color, per: share.per || 0, flat: share.flat ?? null, given, total, left: Math.max(0, share.max - total),
      head: `Give rivals ${share.must ? '' : 'up to '}${share.max} silver`, firsts: [], seconds: players.map(o => ({ o, b: o.target.pid })), others: players.map(o => o.target.pid),
      rest: pend.options.filter(o => !players.includes(o)) };
  }
  // Kingmakers: up to 3 of your own silver to the rivals you pick, set whole on the same card as Party Gifts' and
  // given in one move (Cory, Nov 13: "they should make that decision all at once")
  const king = state.queue?.[0]?.h === 'silver.kingmakers' ? state.queue[0].data || {} : null;
  if (king && players.length) {
    const me = state.players[pend.player];
    const given = {};
    for (const [name, k] of Object.entries(king.to || {})) { const o = state.players.find(x => x.name === name); if (o) given[o.id] = k; }
    const total = Object.values(given).reduce((a, k) => a + k, 0);
    const left = Math.max(0, Math.min(king.left ?? 3, me.res.silver || 0));
    const color = state.resources.includes('silver') ? 'silver' : null;
    return { ...base, kind: 'share', own: true, n: left + total, color, chosen: color, per: 1, flat: null, given, total, left,
      head: `Give rivals up to ${left + total} of your silver`, firsts: [], seconds: players.map(o => ({ o, b: o.target.pid })), others: players.map(o => o.target.pid),
      rest: pend.options.filter(o => !players.includes(o)) };
  }
  // Sweet Talk's "turn any of your silver into other colors" (and any silver-into-colors turn the engine asks one coin at
  // a time): the whole turn set on one card, then one press (Cory, Nov 9: "sweet talk decisions all happen then
  // animations. not animation for each resource"): ConvertPicker.jsx
  const turn = state.queue?.[0]?.h === 'silver.turn' ? state.queue[0].data : null;
  if (turn) {
    const outs = pend.options.filter(o => o.kind === 'color' && o.spend && state.resources.includes(o.value));
    const quit = pend.options.find(o => o.kind === 'done');
    if (outs.length && quit && outs.length + 1 === pend.options.length) {
      const from = Object.keys(outs[0].spend).find(k => outs[0].spend[k] > 0) || 'silver';
      const have = state.players[pend.player].res[from] || 0;
      const left = turn.max == null ? have : Math.max(0, Math.min(have, turn.max - (turn.done || 0)));
      return { ...base, kind: 'convert', from, each: turn.each || 1, left, done: turn.done || 0, head: `Turn ${from} into other colors`, chosen: null, stop: quit, outs, firsts: [], seconds: [], others: [], rest: [] };
    }
  }
  // "turn up to N of your resources into followers, one at a time" (Exchange): picked whole, like a payment (SpendPicker.jsx)
  const spend = question.match(/^turn which resource into (\d+) followers\?\s*\((\d+) left\)/i);
  const spends = pend.options.filter(o => o.kind === 'color' && o.spend && state.resources.includes(o.value));
  const stop = pend.options.find(o => o.kind === 'done');
  if (spend && spends.length && stop && spends.length + 1 === pend.options.length) {
    const per = Number(spend[1]), left = Number(spend[2]);
    return { ...base, kind: 'spend', per, left, head: `Turn up to ${left} ${left === 1 ? 'resource' : 'resources'} into ${per} followers${left === 1 ? '' : ' each'}`, chosen: null, stop, spends, firsts: [], seconds: [], others: [], rest: [] };
  }
  const change = changePick(state, pend, base);
  if (change) return change;
  const far = farPick(state, pend, title, question, base);
  if (far) return far;
  // a color of yours asked by a space just used (Goody Bags' color, Cheap Seats' "pay 1 for 1 follower"): one row of your
  // colors on the card by the space (Cory, 2026-10-15: choices come to where you act), never your seat's stacks ~500 px
  // away. Asks from a member or a release (no space behind them) stay on your stacks.
  // neutral (Out of Style, Cory 2026-10-28) is a color with no stack of yours: a gray dot in the same row
  const neutral = o => !o.target && o.kind === 'color' && o.value === 'neutral';
  const own = pend.options.filter(o => (o.target && o.target.res && o.target.pid == null && o.target.space == null && o.target.uid == null) || neutral(o));
  const fromSpace = title && state.quadrants.some(q => spacesOf(state, q).some(a => a.name === title));
  // a member's "+N in colors you choose" (Matchmaker, War Chest) takes the same split card as Harvest's, where a plain
  // question opens (Cory, Nov 6: "Matchmaker resource selection is slow": it was one click on your stacks per coin)
  const memberSplit = !fromSpace && /\(\d+ to pick\)/.test(question) && pend.options.every(o => o.kind === 'color');
  if ((fromSpace || memberSplit) && own.length >= 2 && own.length + pend.options.filter(o => !o.target && !neutral(o)).length === pend.options.length) {
    const left = (question.match(/\((\d+) left\)/) || [])[1];
    // "+1 of which color? (3 to pick)" (Harvest): the whole gain split at once, like a payment (SplitPicker.jsx)
    const toPick = Number((question.match(/\((\d+) to pick\)/) || [])[1] || 0);
    const ask = question.replace(/\s*\(\d+ left\)\s*/, ' ').replace(/\s*\(\d+ to pick\)\s*/, ' ').trim();
    // "pay which resource for 1 follower?" reads "Pay 1 for 1 follower"; any other question is its first sentence, the
    // rest of it the line under it ("Which color?" / "You get 2, everyone else gets 1.")
    const payFor = ask.match(/^pay which \w+ for (\d+ \w+)\?\s*(.*)$/i);
    const [q1, ...more] = ask.split('?');
    // a split's headline says the whole job, never the one coin the engine asks (picky bot, Nov 4: "Polish: +1 of which
    // color?" over a card that said "+4 in colors you choose")
    const head = payFor ? `Pay 1 for ${payFor[1]}` : toPick ? `Pick ${toPick} color${toPick === 1 ? '' : 's'}` : `${q1[0].toUpperCase()}${q1.slice(1)}${more.length ? '?' : ''}`;
    const sub = payFor ? payFor[2] : more.join('?').trim();
    return { ...base, kind: 'color', n: null, color: null, chosen: null, pay: !!payFor, left: left == null ? null : Number(left), toPick,
      head, sub, firsts: [], seconds: own.map(o => ({ o, b: neutral(o) ? 'neutral' : o.target.res })), others: own.map(o => (neutral(o) ? 'neutral' : o.target.res)), rest: pend.options.filter(o => !o.target && !neutral(o)) };
  }
  const res = state.resources, pairs = [], rest = [];
  let kind = null;
  for (const o of pend.options) {
    const t = o.target, v = o.value;
    let k = null, a, b;
    if (t && t.give && Number.isInteger(t.pid) && t.res) { k = 'give'; a = t.res; b = t.pid; }
    else if (o.kind === 'trade' && Array.isArray(v) && v.length === 2 && v.every(Number.isInteger)) { k = 'trade'; [a, b] = v; }
    else if (o.kind === 'swap' && Array.isArray(v) && res.includes(v[0]) && res.includes(v[1])) { k = 'colors'; [a, b] = v; }
    else if (o.kind === 'swap' && Array.isArray(v) && res.includes(v[0]) && Number.isInteger(v[1])) { k = 'amount'; [a, b] = v; }
    if (!k) { rest.push(o); continue; }
    if (kind && kind !== k) return null;
    kind = k;
    pairs.push({ o, a, b });
  }
  if (!kind) return null;
  const byColor = (x, y) => res.indexOf(x) - res.indexOf(y);
  const firstsAll = [...new Set(pairs.map(x => x.a))];
  if (kind !== 'trade') firstsAll.sort(byColor);
  const chosen = firstsAll.includes(first) ? first : firstsAll.length === 1 ? firstsAll[0] : null;
  const firsts = firstsAll.map(a => ({ id: a === chosen ? '@unpick' : `@pick:${a}`, a, chosen: a === chosen }));
  const seconds = chosen == null ? [] : pairs.filter(x => x.a === chosen).map(({ o, b }) => ({ o, b }));
  const others = [...new Set(pairs.map(x => x.b))];
  if (kind === 'colors') others.sort(byColor);
  else if (kind === 'give' || kind === 'amount') others.sort((x, y) => x - y);
  const n = Number((question.match(/give (\d+)/) || [])[1]) || null;
  const done = (question.match(/\((\d+) swapped so far\)/) || [])[1];
  // Promote and Demote by name, or by a member's question about them (Panel: "Panel: demote another member")
  const swapKind = /^promote\b/i.test(title) || /^promote\b/i.test(question) ? 'Promote' : /^demote\b/i.test(title) || /^demote\b/i.test(question) ? 'Demote' : null;
  // the swap card trades within 2 cost, never only equal ones (its card: "costing up to 2 more or less")
  const swapCard = /swap card/i.test(question) || /swap card/i.test(title);
  // Body Snatchers trades one of yours for a rival's, never two rivals' (playtest, Nov 3: the generic head read "any two")
  const snatch = /body snatchers/i.test(title) || /body snatchers/i.test(question);
  // Exchange Students and Swap Shoppers say their own rule (four-player review, Nov 12: both read Anarchist's "any two")
  const exchange = /exchange students/i.test(title) || /exchange students/i.test(question);
  const swapShop = /swap shoppers/i.test(title) || /swap shoppers/i.test(question);
  // the card's own rule, never its name again under its name (picky bot, Nov 11: "DEMOTE / Demote a member")
  const tradeHead = swapKind === 'Promote' ? 'Swap a member for one costing up to 3 more' : swapKind === 'Demote' ? 'Swap a member for one costing up to 3 less' : swapCard ? 'Swap card: a member within 2 cost' : snatch || exchange ? 'Swap one of yours for a rival’s of the same cost' : swapShop ? 'Swap one of yours for a discard-pile member of the same cost' : 'Swap any two equal-cost members';
  const head = { give: n ? `A rival you pick gets ${n}` : 'A rival you pick gets some', colors: 'Swap one for one', amount: 'Swap for another color', trade: tradeHead }[kind];
  // Trade Seeds' swaps still to make, on the card's title line ("1 swapped · 2 left")
  const swapTask = state.queue?.[0]?.h === 'yellow.swap' ? state.queue[0].data : null;
  const left = swapTask && Number.isInteger(swapTask.left) ? swapTask.left : null;
  return { ...base, kind, n, color: null, head, chosen, firsts, seconds, others, rest, done: done == null ? null : Number(done), left, sameCost: /equal cost/i.test(question) };
}

/**
 * Questions that were a flat wall of buttons (Cory, Nov 9, on Godparent's "Kingmakers (8) to bee, Kingmakers (8) to
 * crab…": "this can be way better"), each on the gift card instead:
 * - a member to a rival (Godparent, Guest of Honor, Nosy Neighbors): the members as pictures with their cost, then the
 *   rivals' faces; tap a member, then a rival (kind 'handover')
 * - a grey member's "+N of any color: which?" (the cloaks): one row of color dots (kind 'color')
 * - Spoilsport's contest: one tile per contest, its color and who leads it (kind 'contest')
 * - Heist Crew's "steal half of which pile?": the half-pile steal card (kind 'steal', halfPile)
 * Null when it isn't one of these.
 */
/** The table's colors offered by a pick, as rims: [{ o, qid }], or null when the pick isn't one of colors of the table. */
export function rimOptions(state, pend) {
  // a color of the table is named as the color ("Gold", "Yellow (Harvest, Polish)"); a resource as itself ("+1 gold",
  // "gold (3)"). Red, Gold, Yellow and Purple share their ids with their resources, so the name tells them apart.
  const named = o => { try { const n = quadrant(o.value).name; return o.label === n || String(o.label).startsWith(`${n} (`); } catch { return false; } };
  const colors = (pend?.options || []).filter(o => o.kind === 'color');
  const quads = colors.filter(o => typeof o.value === 'string' && state.quadrants.includes(o.value) && (!state.resources.includes(o.value) || named(o)));
  if (quads.length < 1 || quads.length !== colors.length || !quads.some(named)) return null;
  return quads.map(o => ({ o, qid: o.value }));
}
function rimPick(state, pend, question, base) {
  const rims = rimOptions(state, pend);
  if (!rims) return null;
  const tiles = rims.map(({ o, qid }) => {
    let name = qid;
    try { name = quadrant(qid).name; } catch { /* a color no longer registered: its id */ }
    // what the color brings, from the option's own words: "Yellow (Harvest, Polish)" reads "Harvest, Polish"
    const extra = (String(o.label || '').match(/\(([^)]*)\)\s*$/) || [])[1] || '';
    return { o, b: qid, qid, name, extra };
  });
  const [q1, ...more] = question.split('?');
  const ask = q1.replace(/\.\s.*$/, '');
  const head = `${ask[0].toUpperCase()}${ask.slice(1)}${more.length ? '?' : ''}`;
  const sub = more.length ? more.join('?').trim() : q1.includes('. ') ? q1.slice(q1.indexOf('. ') + 2).trim() : '';
  return { ...base, kind: 'rim', n: null, color: null, chosen: null, head, sub, tiles,
    firsts: [], seconds: tiles.map(t => ({ o: t.o, b: t.b })), others: tiles.map(t => t.b), rest: pend.options.filter(o => !rims.some(r => r.o === o)) };
}
function otherPick(state, pend, title, question, base, first) {
  const opts = pend.options;
  const h = state.queue?.[0]?.h;
  const holderOf = uid => state.players.find(p => p.members.includes(uid));
  if (/to which rival\b/i.test(question)) {
    const pairs = [], rest = [];
    for (const o of opts) {
      const v = o.value;
      const from = Array.isArray(v) && v.length === 2 && Number.isInteger(v[0]) && state.cards[v[0]] && Number.isInteger(v[1]) && state.players[v[1]] ? holderOf(v[0]) : null;
      if (from && from.id !== v[1]) pairs.push({ o, a: v[0], b: v[1] }); else rest.push(o);
    }
    if (pairs.length >= 2) {
      const firstsAll = [...new Set(pairs.map(x => x.a))];
      const chosen = firstsAll.includes(first) ? first : firstsAll.length === 1 ? firstsAll[0] : null;
      const move = firstsAll.some(u => holderOf(u).id !== pend.player);
      const fol = (question.match(/\+(\d+) followers?/) || [])[1];
      const pickedCost = chosen == null ? null : (String((pairs.find(x => x.a === chosen) || {}).o?.label || '').match(/\((\d+)\)/) || [])[1];
      const sub = fol ? `+${fol} followers.` : /godparent/i.test(title) ? (pickedCost ? `You gain ${pickedCost} followers (its cost).` : 'You gain its cost in followers.') : move ? 'Tap a member, then the rival it goes to.' : '';
      return { ...base, kind: 'handover', move, n: null, color: null, chosen, sub,
        head: move ? 'Move a member to another rival' : 'Give one of your members to a rival',
        firsts: firstsAll.map(a => ({ id: a === chosen ? '@unpick' : `@pick:${a}`, a, chosen: a === chosen })),
        seconds: chosen == null ? [] : pairs.filter(x => x.a === chosen).map(({ o, b }) => ({ o, b })),
        others: [...new Set(pairs.map(x => x.b))].sort((x, y) => x - y), rest };
    }
  }
  if (h === 'benders.pickColor' && opts.length >= 2 && opts.every(o => typeof o.value === 'string' && state.resources.includes(o.value))) {
    // several "+1 of which color?" in a row for this player (a cloak's grey pick, then Dabblers' and Revelers'): one split
    // card for all of them, sent as one move (Cory, Nov 13: "they should make that decision all at once")
    const q = state.queue || [], one = t => !(t.data && t.data.n > 1);
    let row = 0;
    while (row < q.length && q[row].t === 'choose' && q[row].h === 'benders.pickColor' && q[row].p === pend.player && one(q[row])) row++;
    if (row > 1 && one(q[0])) {
      const whos = [...new Set(q.slice(0, row).map(t => (t.data && t.data.who) || '').filter(Boolean))];
      return { ...base, title: whos.length === 1 ? whos[0] : 'Grey members', kind: 'color', n: null, color: null, chosen: null, pay: false, left: null, toPick: row,
        head: `Pick ${row} colors`, sub: whos.join(', '), firsts: [], seconds: opts.map(o => ({ o, b: o.value })), others: opts.map(o => o.value), rest: [] };
    }
    const n = (question.match(/\+(\d+)/) || [])[1] || '1';
    const who = (question.match(/^(.+?) is grey/) || [])[1];
    return { ...base, kind: 'color', n: null, color: null, chosen: null, pay: false, left: null, toPick: 0,
      head: `+${n} of any color`, sub: who ? `${who} is grey, so you pick the color.` : 'A grey member: you pick the color.',
      firsts: [], seconds: opts.map(o => ({ o, b: o.value })), others: opts.map(o => o.value), rest: [] };
  }
  if (h === 'benders.spoil' && opts.length >= 2) {
    const tiles = [];
    for (const o of opts) {
      let res = null;
      try { res = quadrant(o.value).resource; } catch { return null; }
      const paren = (String(o.label).match(/\(([^)]*)\)$/) || [])[1] || '';
      const names = /nobody/i.test(paren) ? [] : paren.replace(/\s+leads?$/, '').split(' & ');
      const lead = names.map(nm => (state.players.find(p => p.name === nm) || {}).id).filter(Number.isInteger);
      tiles.push({ o, b: res, qid: o.value, lead, name: String(o.label).replace(/\s*\([^)]*\)$/, '') });
    }
    return { ...base, kind: 'contest', n: null, color: null, chosen: null, head: 'Pick a contest nobody wins this round', sub: 'Its leaders get nothing for it.',
      firsts: [], seconds: tiles, others: tiles.map(t => t.b), tiles, rest: [] };
  }
  if (h === 'thieves.hoardBreak' && opts.every(o => o.kind === 'pile' && Array.isArray(o.value))) {
    const takes = opts.map(o => ({ ...o, target: { pid: o.value[0], res: o.value[1] }, take: Number((String(o.label).match(/take (\d+)/) || [])[1]) || 1 }));
    const model = stealModel(state, pend, title, question, base, takes);
    const rivals = model.rivals.map(r => (r.stacks.length ? r : { ...r, why: (pend.blocked && pend.blocked[r.pid]) || `${r.name} has no pile of 2 or more.` }));
    return { ...model, rivals, board: null, halfPile: true, n: null, left: null, plan: null, head: 'Steal half of a rival\u2019s biggest pile', sub: 'Rounded down.' };
  }
  return null;
}

/**
 * Changing rivals' resources (Dilute, Big Dilute, Agitator, Meddler, Puppeteers; Cory, Nov 2: the rearrange "feels
 * pretty bad"): one card with each rival's piles and a row of the colors they can become, for both of the engine's
 * questions (which pile, then which color), so the card keeps its shape. GiftCard keeps the color picked, so a tap on a
 * pile answers both. Null when it isn't one.
 */
function changePick(state, pend, base) {
  const task = state.queue?.[0];
  if (!task || (task.h !== 'yellow.changeFrom' && task.h !== 'yellow.changeTo') || !task.data) return null;
  const d = task.data, to = task.h === 'yellow.changeTo';
  const byId = new Map(pend.options.map(o => [o.id, o]));
  const pick = to && Array.isArray(d.pick) ? d.pick : null;
  const rivals = state.players.filter(o => o.id !== pend.player).map(o => {
    const stacks = state.resources.map(r => ({ res: r, has: o.res[r] || 0, o: to ? null : byId.get(`res:${o.id}:${r}`) || null })).filter(x => x.has > 0);
    const live = to ? stacks.length > 0 : stacks.some(x => x.o);
    const why = live ? null : (pend.blocked && pend.blocked[o.id]) || (d.perRival && (d.used || []).includes(o.id) ? `${o.name}: changed already.` : stacks.length ? `${o.name} can't be changed.` : `${o.name} has nothing to change.`);
    return { pid: o.id, name: o.name, stacks: live ? stacks : [], why };
  });
  const colorOpts = {};
  if (to) for (const o of pend.options) if (o.kind === 'color' && typeof o.value === 'string') colorOpts[o.value] = o;
  const rest = to ? [] : pend.options.filter(o => o.kind === 'done');
  const who = pick ? state.players[pick[0]] : null;
  const head = pick ? `Change ${who.name}'s 1 ${pick[1]} into…` : "Change rivals' resources";
  return { ...base, title: base.title || d.who || '', kind: 'change', n: null, color: null, chosen: null, head, step: to ? 'to' : 'from', pick,
    rivals, colorOpts, left: Number.isInteger(d.left) ? d.left : null, done: d.done || null, firsts: [], seconds: [], others: [], rest };
}

/** The name of the space a player's last minion stands on (p.lastSlot), or null. */
function lastSpaceName(state, p) {
  const l = p && p.lastSlot;
  if (!l || typeof l.key !== 'string') return null;
  const [q, i] = l.key.split('-').map(Number);
  try { const a = spacesOf(state, state.quadrants[q])[i]; return a ? a.name : null; } catch { return null; }
}
const SHOP_HEADS = { 'Hand-pick': 'Take a member, free', 'Initiation': 'Recruit a shop member, free', 'Open Door': 'Recruit the cheapest shop member, free', 'Bury': 'Send one to the discard pile: half its cost in blue' };

/** The steal, the recruit from the row and the minion's move, on the card by the space (see giftPick), or null. */
function farPick(state, pend, title, question, base) {
  const p = state.players[pend.player];
  if (!p || !title) return null;
  const loose = pend.options.filter(o => !o.target);
  // the space asking is the one your last minion stands on (an Echo copy, a member's own steal: the board, as before)
  const atSpace = lastSpaceName(state, p) === title;
  const takes = pend.options.filter(o => o.target && Number.isInteger(o.target.pid) && o.target.res && !o.target.give && o.target.pid !== pend.player);
  // Half-pile theft is one stack choice, never a counted sequence of coin picks.
  const halfPile = state.queue?.[0]?.h === 'thieves.halfPile';
  if (halfPile && takes.length && takes.length === pend.options.length) {
    const model = stealModel(state, pend, title, question, base, takes);
    return { ...model, halfPile: true, n: null, left: null, plan: null, head: 'Steal half a pile', sub: 'One color; rounded down.' };
  }
  if (atSpace && pend.count && takes.length && takes.length === pend.options.length) return stealModel(state, pend, title, question, base, takes);
  const row = pend.options.filter(o => o.target && Number.isInteger(o.target.uid) && state.shop.includes(o.target.uid));
  if (atSpace && row.length && row.length + loose.length === pend.options.length) {
    const head = SHOP_HEADS[title] || `${question[0].toUpperCase()}${question.slice(1)}`;
    return { ...base, kind: 'recruit', board: 'shop', n: null, color: null, chosen: null, head, firsts: [], seconds: row.map(o => ({ o, b: o.target.uid })), others: row.map(o => o.target.uid), rest: loose };
  }
  // a member of yours moving your last minion (Straggler): the lit spaces are on the wheel, right by the card
  const spaces = pend.options.filter(o => o.target && typeof o.target.space === 'string');
  const holds = p.members.some(u => { try { return defById(state.cards[u].def).name === title; } catch { return false; } });
  if (holds && p.lastSlot && spaces.length && spaces.length + loose.length === pend.options.length) {
    const on = (question.match(/\(on ([^)]+)\)/) || [])[1];
    return { ...base, kind: 'move', board: 'wheel', n: null, color: null, chosen: null, from: on || lastSpaceName(state, p),
      head: loose.length ? 'Move this minion?' : 'Move it to which space?', sub: 'Pick a lit space: it moves there and does that action.',
      firsts: [], seconds: spaces.map(o => ({ o, b: o.target.space })), others: spaces.map(o => o.target.space), rest: loose };
  }
  return null;
}

/** What one rival's pile of a color holds for this steal right now: what they hold less what's already picked. */
function stealPicked(state, pend) {
  const task = state.queue && state.queue[0];
  return task && task.t === 'choose' && task.prompt === pend.prompt && task.data && task.data.picked ? task.data.picked : {};
}
function stealModel(state, pend, title, question, base, takes) {
  const picked = stealPicked(state, pend);
  // Collect Debts keeps { pid: n } of gold, a Magenta steal { pid: { color: n } }
  const pickedOf = (pid, r) => { const x = picked[pid]; return x == null ? 0 : typeof x === 'number' ? (r === 'gold' ? x : 0) : x[r] || 0; };
  const asked = (question.match(/^take \d+ (\w+)/i) || [])[1];
  const color = state.resources.includes(asked) ? asked : null;
  const offer = new Map(takes.map(o => [`${o.target.pid}:${o.target.res}`, o]));
  const rivals = state.players.filter(o => o.id !== pend.player).map(o => {
    const stacks = state.resources.filter(r => !color || r === color).map(r => {
      const o2 = offer.get(`${o.id}:${r}`) || null;
      return { res: r, has: Math.max(0, (o.res[r] || 0) - pickedOf(o.id, r)), o: o2 };
    }).filter(s => s.has > 0 && s.o);
    const why = stacks.length ? null : (pend.blocked && pend.blocked[o.id]) || (o.hideout === state.round ? `${o.name} is lying low this round.` : `${o.name} has no${color ? ` ${color}` : 'thing'} to take.`);
    return { pid: o.id, name: o.name, stacks, why };
  });
  const count = pend.count || { of: 1, left: 1 };
  const avail = rivals.reduce((t, r) => t + r.stacks.reduce((u, s) => u + s.has, 0), 0);
  const taken = count.of - count.left;
  const n = Math.min(count.of, taken + avail);
  const limit = (question.match(/\(\d+ left, ([^)]+)\)/) || [])[1];
  // a steal owed 1 from each of some rivals (Redistribute, Heist: "1 each from P3, P4", or "at least 1 from each
  // of …"): "Take all" takes those first, one each, so a forced split is one click too (live panel round 3)
  const owedNames = ((limit || '').match(/^(?:1 each from|at least 1 from each of) (.+)$/) || [])[1];
  const owed = owedNames ? owedNames.split(', ').map(nm => (state.players.find(o => o.name === nm) || {}).id).filter(Number.isInteger) : [];
  const plan = stealPlan(rivals, Math.min(count.left, avail), owed, /^1 each from/.test(limit || ''));
  return { ...base, kind: 'steal', board: 'seats', n, color, chosen: null, left: taken > 0 ? Math.min(count.left, avail) : null,
    // the card's own verb: the wheel says "Steal 1", so the sheet does too (picky bot, Nov 4: "Take 1" on Lie Low's sheet)
    head: `Steal ${n}${color ? ` ${color}` : ''}`, sub: limit ? `${limit[0].toUpperCase()}${limit.slice(1)}.` : '',
    rivals, plan, firsts: [], seconds: takes.map(o => ({ o, b: `${o.target.pid}:${o.target.res}` })), others: takes.map(o => `${o.target.pid}:${o.target.res}`), rest: [] };
}
/**
 * "Take all": the picks a one-click steal makes, biggest pile first (ties: the rival seated first, then the table's
 * color order), one coin at a time: [{ pid, res }]. Each is still checked against the engine's options as it's made.
 */
export function stealPlan(rivals, k, owed = [], eachOnly = false) {
  const left = new Map(), amounts = new Map();
  for (const r of rivals) for (const s of r.stacks) { const key = `${r.pid}:${s.res}`; left.set(key, s.has); amounts.set(key, s.o?.take || 1); }
  const out = [];
  // owed: rivals who must give 1 each, taken first (their biggest pile); eachOnly: and nothing more from them
  const due = owed.slice();
  const given = new Set();
  for (let i = 0; i < k;) {
    let best = null;
    const who = due.length ? due.shift() : null;
    for (const [key, n] of left) {
      const pid = Number(key.split(':')[0]);
      if (who != null ? pid !== who : eachOnly && given.has(pid)) continue;
      if (n > 0 && (!best || n > left.get(best))) best = key;
    }
    if (best) given.add(Number(best.split(':')[0]));
    if (!best) break;
    const take = Math.min(amounts.get(best), left.get(best), k - i);
    left.set(best, left.get(best) - take);
    i += take;
    const [pid, res] = best.split(':');
    out.push({ pid: Number(pid), res, ...(take > 1 ? { take } : {}) });
  }
  return out;
}

/**
 * The pay sheet's warning, for a choice that spends your coins (Cheap Seats, All In, Trade Seeds…): the engine marks
 * each answer that gives up a contest lead or tie you hold (breaks), and one plain line says so before you click
 * (panel tester C #1: Cheap Seats gave up a silver lead with no warning). Null when no answer does.
 */
export function leadWarning(options) {
  const lost = [...new Set((options || []).flatMap(o => o.breaks || []))];
  if (!lost.length) return null;
  const ties = [...new Set((options || []).flatMap(o => o.ties || []))];
  const or = l => (l.length > 1 ? `${l.slice(0, -1).join(', ')} or ${l[l.length - 1]}` : l[0]);
  return `Spending ${or(lost)} gives up ${leadsLost(lost, ties, or)}.`;
}
/**
 * What a payment gives up, in words: "your lead in gold", "your tie for most silver", or both joined. A tie is never
 * called a lead (blind tester B: the pay sheet said "lead" where they only tied). `join` lists colors.
 */
export function leadsLost(breaks, ties = [], join = l => l.join(' and ')) {
  const leads = breaks.filter(c => !ties.includes(c)), tied = breaks.filter(c => ties.includes(c));
  return [leads.length ? `your lead in ${join(leads)}` : null, tied.length ? `your tie for most ${join(tied)}` : null].filter(Boolean).join(' and ');
}

/**
 * The caption, docked under the headline: { title, what, left, how }. "Help Yourself: take 2 · 1 left" (the count
 * rides on the engine's task); else the engine's question, which
 * moves to the line under it when it's too long to be a headline. what may hold { dot: color } parts.
 */
export function pickCaption(state, pk) {
  const cap = whose(state, pk, captionOf(state, pk));
  const warn = leadWarning(pk.options);
  return warn ? { ...cap, how: `${cap.how} · ${warn}`, warn } : cap;
}
/** A choice you answer on someone else's turn names the move that asks it (picky bot, Nov 4: "Potluck: give P2 1
 *  resource" with no word that P2 took Potluck): "P2 took Potluck: give them 1 resource". */
function whose(state, pk, cap) {
  const cur = state.current != null && state.current !== pk.actor ? state.players[state.current] : null;
  if (!cur || !cap.title) return cap;
  const took = lastSpace(state, cur.id);
  if (!took || took.name !== cap.title) return cap;
  const them = w => (typeof w === 'string' ? w.replace(new RegExp(`\\b${cur.name}\\b`, 'g'), 'them').replace(/, then .*$/, '') : w);
  const asked = !cap.what && cap.how && !/^Click /.test(cap.how) ? them(cap.how[0].toLowerCase() + cap.how.slice(1)) : null;
  const what = cap.what ? cap.what.map(them) : asked && asked.length <= 40 ? [asked] : null;
  return { ...cap, title: `${cur.name} took ${cap.title}`, what };
}
function captionOf(state, pk) {
  if (pk.title === 'Straggler' && pk.kinds.has('space')) return { title: 'Straggler', what: ['move your minion'], how: 'Inspect a space, then move there.' };
  // Peek (Cory, playtest Oct 28: "Peek UI is unintuitive"): what the row is for, and that you may recruit one after
  if (pk.title === 'Peek' && pk.pend && pk.pend.show && pk.pend.show.peek) {
    const n = pk.pend.show.peek.placed.length + pk.pend.show.peek.left.length;
    return { title: 'Peek', what: [`set the order of the top ${n}`], how: 'Click or drag them into the order they’ll be drawn, then Done, or keep this order. You may recruit one this turn.' };
  }
  if (pk.kinds.has('stack') && !pk.give && pk.count && pk.title) {
    // the steal's limit, in the engine's words ("1 each from P3, P4"), leads the how line
    const limit = (String(pk.question).match(/\(\d+ left, ([^)]+)\)/) || [])[1];
    // "· N left" only once the first is taken: at the start it said the count twice ("take 3 · 3 left", w4b #17)
    // never more than the lit stacks hold (blind testers, 2026-10-15: "take 3 gold" with 2 on the table)
    const lit = Object.entries(pk.seats).reduce((t, [pid, x]) => t + Object.keys(x.res).reduce((u, r) => u + ((state.players[pid] && state.players[pid].res[r]) || 0), 0), 0);
    const of = Math.min(pk.count.of, pk.count.of - pk.count.left + lit);
    return { title: pk.title, what: [`steal ${of}${pk.only ? ` ${pk.only}` : ''}`], left: pk.count.left < pk.count.of ? Math.min(pk.count.left, lit) : null, how: `${limit ? `${limit[0].toUpperCase()}${limit.slice(1)}. ` : ''}${pickHow(pk)}` };
  }
  const q = pk.title ? pk.question : state.pending.prompt;
  // a member of yours asking (Double Agent just recruited): its rule goes under the headline, so you see why
  const asker = askerOf(state, pk);
  // a long question ("Hustler: actions in which color give you extra gold?") says what to do in a few words instead,
  // and the line under it says where to click, with the card's rule after it only when the whole line fits (w3a #14:
  // the rule clipped to "…per ro…" and nothing said to click one of your colors); the rule is on the asker's card
  if (asker && q.length > 30) {
    const rest = asker.text.replace(/^(?:When recruited|On Recruit)[,:]\s*/i, '').replace(/^(?:you choose|pick) an? \w+\.\s*/i, '');
    const how = `${pickHow(pk)}. ${rest[0].toUpperCase()}${rest.slice(1)}`;
    return { title: pk.title, what: [askWords(q) || shortAsk(pk)], left: pk.count ? pk.count.left : null, how: how.length <= 64 ? how : pickHow(pk), rule: asker.text };
  }
  if (asker) return { title: pk.title, what: [q], left: pk.count ? pk.count.left : null, how: asker.text };
  if (q.length > 30) return { title: pk.title, what: null, left: pk.count ? pk.count.left : null, how: q[0].toUpperCase() + q.slice(1) };
  return { title: pk.title, what: [q], left: pk.count ? pk.count.left : null, how: pickHow(pk) };
}

/** The member of the actor's that asks this question (its name is the prompt's title), else null: { uid, text }. */
export function askerOf(state, pk) {
  if (!pk || !pk.title) return null;
  const p = state.players[pk.actor];
  // only a member recruited this turn's round by them (Double Agent's "When recruited"): one they use says how instead
  const uid = p && p.members.find(u => state.cards[u] && defById(state.cards[u].def).name === pk.title && state.cards[u].recruitedRound === state.round && state.cards[u].recruitedBy === p.id && !state.cards[u].used);
  return uid == null ? null : { uid, text: defById(state.cards[uid].def).text };
}

/** The question's own words, short: "send which member to the bottom? (2 to go)" is "send a member to the bottom", so
 *  the caption says what the pick is for (picky bot, Nov 4: "Window Shopper: pick a member", for what?). Else null. */
export function askWords(q) {
  const m = String(q || '').match(/^(\w+) which (\w+)\b([^?(]*)\??\s*(?:\([^)]*\))?$/i);
  // "copy which of P2's actions" is "copy one of P2's actions", never "copy a of…" (Cory, Nov 9: Fan Club's prompt)
  const w = m ? `${m[1].toLowerCase()} ${/^of$/i.test(m[2]) ? 'one of' : `a ${m[2]}`}${m[3].trimEnd()}` : null;
  return w && w.length <= 34 ? w : null;
}
/** What a choice wants, in two words, from what it lights ("pick a color"). */
function shortAsk(pk) {
  const k = pk.kinds;
  if (k.has('space')) return 'pick a space';
  if (k.has('own-stack') || k.has('stack')) return 'pick a color';
  if (k.has('seat')) return 'pick a rival';
  return 'pick a member';
}

/** How to answer, in a few words: where the lit things are. */
export function pickHow(pk) {
  const k = pk.kinds, say = [];
  if (k.has('space')) say.push('a lit space on the wheel');
  if (k.has('shop')) say.push('a lit member in the shop');
  if (k.has('pile')) say.push('one of the lit members from the top of the pile');
  // whose cult it is (picky bot, Nov 11: "a lit member on a cult")
  if (k.has('member') || k.has('own-member')) say.push(k.has('own-member') && !k.has('member') ? 'one of your lit members' : k.has('own-member') ? 'a lit member on any cult' : 'a lit member on a rival’s cult');
  if (k.has('stack')) say.push(pk.give ? 'a color on a rival’s cult' : 'a lit stack on a rival’s cult');
  if (k.has('own-stack')) say.push('one of your lit stacks');
  if (k.has('seat')) say.push('a rival’s cult');
  return `Click ${say.join(' or ')}`;
}

/** What one option is, for the keyboard list: "P3's green", "P3: green", "P3", your "green", else the engine's words. */
export function pickName(state, o) {
  const t = o.target;
  if (!t) return o.label;
  if (Number.isInteger(t.pid) && state.players[t.pid]) {
    const who = state.players[t.pid].name;
    return t.res == null ? who : t.give ? `${who}: ${t.res}` : `${who}’s ${t.res}`;
  }
  if (t.res && t.space == null && t.uid == null) return o.label;
  return o.label;
}

/** The rule of the space the actor just took, when it's what's asking (for "why not" on a dim stack). */
function ruleText(state, pk) {
  const last = lastSpace(state, pk.actor);
  if (!last || last.name !== pk.title) return '';
  try { const a = anySpaces(last.qid).flatMap(a => (a.piles ? [a, a.piles] : [a])).find(x => x.name === last.name); return a ? a.text : ''; } catch { return ''; }
}

/**
 * One cult's part in the picker, or null when it takes no part: { lit, seat: option|null, why (seat-level),
 * stacks: { [color]: { option, why } } | null, members: { [uid]: option } | null, picked, give }.
 * Rival stacks (a steal, a gift) and rival seats (pick a player) light on every rival, dim ones saying why; your own
 * stacks light for a color pick; members light wherever the engine offers them, the rest of the figures recede.
 */
export function seatPart(state, pk, pid, picked = {}) {
  if (!pk) return null;
  const own = pid === pk.actor;
  const p = state.players[pid];
  const here = pk.seats[pid] || { res: {}, seat: null, members: {} };
  const k = pk.kinds;
  const stackPick = own ? k.has('own-stack') : k.has('stack');
  const seatPick = !own && k.has('seat');
  const memberPick = k.has('member') || k.has('own-member');
  if (!stackPick && !seatPick && !memberPick) return null;
  const asking = pk.title || 'This choice';
  const rule = own ? '' : ruleText(state, pk);
  const hiding = !own && p.hideout === state.round;
  let stacks = null;
  if (stackPick) {
    stacks = {};
    for (const r of state.resources) {
      const option = here.res[r] || null;
      let why = null;
      if (!option) {
        const has = p.res[r] || 0;
        if (own) why = `${asking}: not ${r}.`;
        else if (pk.give) why = `${asking} can’t give ${r} to ${p.name} now.`;
        else if (hiding && has) why = `${p.name} is lying low this round: no one can take their resources.`;
        else if (!has) why = `${p.name} has no ${r}.`;
        else if (pk.only && r !== pk.only) why = `${asking} takes only ${pk.only}.`;
        else if (pk.blocked && pk.blocked[pid]) why = pk.blocked[pid];
        else if (picked[r] && picked[r] >= has) why = `You’ve already picked all of ${p.name}’s ${r}.`;
        else why = `${asking} can’t take from ${p.name} now.${rule ? ` ${rule}` : ''}`;
      }
      stacks[r] = { option, why };
    }
  }
  const members = memberPick ? here.members : null;
  const lit = !!here.seat || Object.keys(here.res).length > 0 || Object.keys(here.members).length > 0;
  const seatWhy = lit || own ? null : seatPick ? `${asking}: not ${p.name}.` : hiding ? `${p.name} is lying low this round.` : pk.blocked && pk.blocked[pid] ? pk.blocked[pid] : stackPick ? `${asking} can’t pick ${p.name} now.${rule ? ` ${rule}` : ''}` : null;
  // a seat dims only when it's one of the things being picked between (a rival with nothing to take, a player not offered)
  const dims = !own && !lit && (seatPick || stackPick);
  const asker = own ? askerOf(state, pk) : null;
  // a steal from the player with the most followers pays the thief's Robin Hood: that seat says so before you pick
  // (design pod, from the detail designer: the target wasn't marked, so a player picked blind)
  let bonus = null;
  if (!own && stackPick && !pk.give && lit && Number.isInteger(pk.actor)) {
    const thief = state.players[pk.actor];
    const hoods = (thief.members || []).filter(u => state.cards[u] && state.cards[u].def === 'thieves.robinhood' && !state.cards[u].used).length;
    const fol = o => followers(state, o);
    if (hoods && state.players.every(o => fol(o) <= fol(p))) bonus = { n: hoods, why: `Robin Hood: take from ${p.name}, who has the most followers, and you gain +${hoods} follower${hoods > 1 ? 's' : ''}.` };
  }
  return { lit, dim: dims, seat: seatPick ? here.seat : null, seatMode: seatPick, why: seatWhy, stacks, members, picked, give: pk.give, askerUid: asker ? asker.uid : null, bonus };
}

/** The shop's lookup while a picker is up: a face-up member is a pick when the engine names its uid. */
export const shopLookup = pk => id => {
  // Peek's "Keep this order" is answered from the shop's pile row
  if (id === 'keep') return pk.options.find(o => o.id === 'keep' && o.kind === 'keep') || null;
  // a shop pick you can stop early (Scouts' Done) is answered from the shop too
  const stop = pk.options.find(o => o.id === id && o.kind === 'pass');
  if (stop) return stop;
  const m = /^card:(\d+)$/.exec(id);
  // a held member shows in the shop strip only in a copy's tray (Sample: ShopCards' copyTray), picked there as on its seat
  return m ? pk.cards.get(Number(m[1])) || pk.where.get(`member:${m[1]}`) || null : null;
};
