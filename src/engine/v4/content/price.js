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
  // SPACE_GAIN_R=a,b,c: the space dial by round (round I, II, III), added to SPACE_GAIN
  spaceR: globalThis.process?.env?.SPACE_GAIN_R ? globalThis.process.env.SPACE_GAIN_R.split(',').map(Number) : null,
  cloak: num('CLOAK_GAIN') ?? 0,
  cloakStart: num('CLOAK_START') ?? 1,
  r1: num('R1_LIMIT'),
  folMid: num('FOL_MID'), folTop: num('FOL_TOP'),
  prizes: globalThis.process?.env?.PRIZES ? globalThis.process.env.PRIZES.split(',').map(Number) : null,
});
// The Richer setting (setup "Economy: Richer", rules.econ 'rich'; core.js RICH): every member costs 2 more (1 of its
// color + 1 any, grey members 2 any). Everything that names a member's cost moves up the same 2 (Cory, Nov 9: "if you
// meddle with member prices you have to tweak everything that references them, including deck limit"): each cap in the
// rules adds richUp(state), and every text a player reads moves its named costs with richText. Round decks go by the
// printed price, so each round keeps its members.
export const RICH_UP = 2;
// The price settings (rules.econ): how much more each member costs (color, any; grey members pay it all as any),
// how much more each space gives of its color, and how far every named cost moves (up = color + any = grey).
// '+1 any' (Cory, Nov 12, after the economy judges: "let's add a switch for +1any"): every member 1 more of any.
export const ECON_SETS = Object.freeze({
  rich: Object.freeze({ color: 1, any: 1, grey: 2, space: 1, up: RICH_UP }),
  any1: Object.freeze({ color: 0, any: 1, grey: 1, space: 0, up: 1 }),
});
for (const [k, e] of Object.entries(ECON_SETS)) if (e.color + e.any !== e.up || e.grey !== e.up) throw new Error(`Economy ${k}: every member must cost up more, so named costs move with it`);
/** The price settings a table can pick besides today's ('rich', 'any1'). */
export const ECON_VALUES = Object.freeze(Object.keys(ECON_SETS));
/** The table's price setting, or null at today's prices. */
export const econSet = state => ECON_SETS[state?.rules?.econ] || null;
/** Whether this table's prices differ from today's (Richer or +1 any). */
export const isRich = state => !!econSet(state);
/** How far a named member cost moves at this table (0 today, 2 under Richer, 1 under +1 any). */
export const richUp = state => econSet(state)?.up || 0;
// "costing 9 or less", "costing up to 5", "costing 7 or more", "member, up to 5", "≤8": an absolute cost, never a
// relative one ("costing up to 3 more", "at most 2 less", "within 2").
const NAMED_COST = /(\bcosting (?:up to |at most )?|\bmember, up to |≤)(\d+)(?!\d)(?!\s*(?:more|less)\b)/g;
/** A text with every named member cost moved by n. */
export const shiftCosts = (text, n) => (!n || typeof text !== 'string' ? text : text.replace(NAMED_COST, (_, a, d) => `${a}${Number(d) + n}`));
/** A text as this table reads it (named costs moved under Richer). */
export const richText = (state, text) => shiftCosts(text, richUp(state));
