// Contest-win members (Cory, Nov 4 12:12pm Eastern: "there should be maybe a member or two (perhaps a grey one?) that says
// when you win a contest, get x y z"), bot games only until he picks. REPLACE15 puts each new card in its old card's place
// (the old card stays in code, retired):
//   member benders.spoilsports (Spoilsport) -> benders.cheerleaders (Cheerleaders)
//   member benders.spoilsports (Spoilsport) -> benders.victors (Victors)
//   member benders.spoilsports (Spoilsport) -> benders.warchest (War Chest)
//   member benders.spoilsports (Spoilsport) -> benders.gloaters (Gloaters)
// (Dabblers is protected, Cory Nov 4: "no i like dabblers a lot"; Spoilsport's slot from the director, Nov 4)
// REPLACE15=<key> (or a comma list) swaps only those; 1 swaps all of them. Unset, nothing in the game changes.
const RAW = globalThis.process?.env?.REPLACE15 || '';
const REPLACES = { cheerleaders: 'benders.spoilsports', victors: 'benders.spoilsports', warchest: 'benders.spoilsports', gloaters: 'benders.spoilsports' };
const ON = RAW === '1' ? Object.keys(REPLACES) : RAW.split(',').map(s => s.trim()).filter(k => k in REPLACES);
export const REPLACE15 = ON.length > 0;
/** The new card, in its list only when switched on. */
export const add15 = card => (ON.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when a card that replaces it is on. */
export const old15 = oldId => (oldId && ON.some(k => REPLACES[k] === oldId) ? { retired: true } : {});
