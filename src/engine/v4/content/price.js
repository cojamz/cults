// How much more every member costs than its card file says, and how far each card that names a cost moves with it.
// 2 since Cory, Nov 5 ("i'd rather things be more expensive"); 4 since Nov 5 9:13pm ("your recommendation is 2? lets try
// it"), after bot games at 0 to 4 more (/mnt/project-files/members-count/price-sweep.md).
// 3 since Nov 5 11:08pm (Cory: "I can already tell stuff is probably a bit too expensive", then picked "1 more, any
// color"): the 1 of its color stays, the rest is any. MEMBER_UP=<n> overrides it for bot games only (Cory,
// Nov 5 evening: "keep pushing up the cost of things and see when we get down to where im thinking"); the browser has
// no process, so the game always uses 2.
const env = Number(globalThis.process?.env?.MEMBER_UP);
export const EXTRA_WILD = Number.isInteger(env) && env >= 1 ? env : 3;
// Cards that name a cost move with it (Cory, Nov 5: "for named costs, yes go up by 1", "you need to scale the stuff
// that references cost as well"): every such number in the code is today's printed one plus MORE.
export const MORE = EXTRA_WILD - 2;
// How much of it a colored member pays in its own color: 1 since Nov 2, 2 with the Nov 5 9:13pm raise (Cory: "are you
// increasing only in the core color? or also in the wild? i think in this case do one of both"); the rest is any color.
export const EXTRA_COLOR = (() => {
  // MEMBER_COLOR=<n>: bot games only (economy test, Cory Nov 7): how much of the extra is the member's own color
  const c = Number(globalThis.process?.env?.MEMBER_COLOR);
  return Number.isInteger(c) && c >= 0 ? Math.min(c, EXTRA_WILD) : EXTRA_WILD >= 4 ? 2 : 1;
})();
// Economy dials, bot games only (Cory, Nov 7: "test lot of combinations ... member costs (and color vs wild shift),
// robe resource gain, and resources given from board"; "no functionality changes except for round 1 deck limit and
// cards that mention member cost"). The browser has no process, so the game always uses today's numbers.
//   SPACE_GAIN=<d>: each space's printed gain of its own color moves by d (never below 0)
//   CLOAK_GAIN=<d>: each resource payout a cloak's ability makes moves by d (never below 0)
//   CLOAK_START=<n>: resources of its color you get when you pick a cloak (today 1)
//   R1_LIMIT=<n>: round I's deck takes members whose printed cost, before the extra, is n or less (today 3, shown as 5)
const num = k => { const v = Number(globalThis.process?.env?.[k]); return Number.isInteger(v) ? v : null; };
export const ECON = Object.freeze({
  space: num('SPACE_GAIN') ?? 0,
  cloak: num('CLOAK_GAIN') ?? 0,
  cloakStart: num('CLOAK_START') ?? 1,
  r1: num('R1_LIMIT'),
  folMid: num('FOL_MID'), folTop: num('FOL_TOP'),
  prizes: globalThis.process?.env?.PRIZES ? globalThis.process.env.PRIZES.split(',').map(Number) : null,
});
