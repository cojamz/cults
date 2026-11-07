// Candidate cards for the idea pipeline (scripts/ideas/README.md; Cory, Nov 7: "i want to do many many cards and
// actions", each judged against our bar on its own, not against the card it might replace). Bot games only.
// A member marked pool(...) sits in its color's member list but is retired, so no real game ever deals it. A space
// marked poolSpace(...) sits in its color's actions list and is moved out to POOL_SPACES when the color registers,
// so no real game ever shows it. scripts/v4-balance.mjs with POOL=1 (or POOL=<key>,<key>) rotates candidates into
// each game in place of live cards of the same color (members) or the same color and round (spaces), and puts them
// back after the game.
export const POOL_ON = !!globalThis.process?.env?.POOL;
/** A candidate member: never dealt in a real game. */
export const pool = (def, batch) => Object.assign(def, { pool: batch || true, retired: true });
/** A candidate space: kept out of the color's wheel. */
export const poolSpace = (a, batch) => Object.assign(a, { pool: batch || true });
/** Candidate spaces by color id, filled as colors register (content/index.js). */
export const POOL_SPACES = {};

/** "+n of any colors" for a candidate: one at a time, each to the color the player holds least of (what bots pick when
 *  asked one color at a time, as Last-Minute Shopper asks). Bot games only; a card that ships asks the player. */
export function anyColors(ctx, p, n, who) {
  const got = {};
  for (let i = 0; i < n; i++) {
    const c = [...ctx.state.resources].sort((a, b) => (p.res[a] || 0) - (p.res[b] || 0))[0];
    ctx.gain(p, c, 1); got[c] = (got[c] || 0) + 1;
  }
  ctx.log(`${p.name}'s ${who}: +${n} of any colors (${Object.entries(got).map(([c, k]) => `${k} ${c}`).join(', ')}).`);
}
/** Ask p to pick a rival; bots lean to the rival with the most followers unless hint says otherwise. */
export function chooseRival(ctx, p, prompt, handler, data = null, hint = o => ctx.followers(o)) {
  ctx.choose(p, prompt, ctx.rivals(p).map(o => ({ id: `player:${o.id}`, label: `${o.name} (${ctx.followers(o)} followers)`, kind: 'player', value: o.id, hint: hint(o) })), handler, data);
}
/** Ask p to recruit one of `list` (shop members) for free, under the card or space `name`; the answer goes to `handler`
 *  (each color file routes it to freeTake). False, with a log line, when the list is empty. */
export function freeAsk(ctx, p, name, list, handler, why = 'no shop member fits') {
  if (!list.length) { ctx.log(`${p.name}'s ${name}: ${why}.`); return false; }
  ctx.choose(p, `${name}: recruit which member for free?`, list.map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${c.def.s + c.def.w})`, kind: 'card', value: c.uid, hint: c.def.f * 1.5 + c.def.s + c.def.w,
  })), handler, { name, ok: list.map(c => c.uid) });
  return true;
}
export function freeTake(ctx, p, uid, data) {
  if (!ctx.state.shop.includes(uid) || (data.ok && !data.ok.includes(uid))) return;
  ctx.log(`${p.name}'s ${data.name}: recruits ${ctx.card(uid).def.name} for free.`);
  ctx.recruit(p, uid, { free: true });
}
