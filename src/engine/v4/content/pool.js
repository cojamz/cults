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
