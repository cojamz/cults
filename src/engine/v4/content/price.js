// How much more every member costs than its card file says, and how far each card that names a cost moves with it.
// 2 since Cory, Nov 5 ("i'd rather things be more expensive"); 4 since Nov 5 9:13pm ("your recommendation is 2? lets try
// it"), after bot games at 0 to 4 more (/mnt/project-files/members-count/price-sweep.md). MEMBER_UP=<n> overrides it for bot games only (Cory,
// Nov 5 evening: "keep pushing up the cost of things and see when we get down to where im thinking"); the browser has
// no process, so the game always uses 2.
const env = Number(globalThis.process?.env?.MEMBER_UP);
export const EXTRA_WILD = Number.isInteger(env) && env >= 1 ? env : 4;
// Cards that name a cost move with it (Cory, Nov 5: "for named costs, yes go up by 1", "you need to scale the stuff
// that references cost as well"): every such number in the code is today's printed one plus MORE.
export const MORE = EXTRA_WILD - 2;
// How much of it a colored member pays in its own color: 1 since Nov 2, 2 with the Nov 5 9:13pm raise (Cory: "are you
// increasing only in the core color? or also in the wild? i think in this case do one of both"); the rest is any color.
export const EXTRA_COLOR = EXTRA_WILD >= 4 ? 2 : 1;
