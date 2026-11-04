// Contest-win members (Cory, Nov 4 12:12pm Eastern: "there should be maybe a member or two (perhaps a grey one?) that says
// when you win a contest, get x y z"), bot games only until he picks. REPLACE15 puts each new card in its old card's place
// (the old card stays in code, retired):
//   new benders.cheerleaders (Cheerleaders) and benders.victors (Victors), added to the grey deck with nothing taken out
// (Cory, Nov 4: "I love spoilsport it should stay. just test them and we'll decide later what to drop"; Dabblers stays too).
// War Chest and Gloaters stay in code, off the trials (Cory picked these two).
// REPLACE15=<key> (or a comma list) swaps only those; 1 swaps all of them. Unset, nothing in the game changes.
const RAW = globalThis.process?.env?.REPLACE15 || '';
const REPLACES = { cheerleaders: null, victors: null, warchest: null, gloaters: null };
const ON = RAW === '1' ? Object.keys(REPLACES) : RAW.split(',').map(s => s.trim()).filter(k => k in REPLACES);
export const REPLACE15 = ON.length > 0;
/** The new card, in its list only when switched on. */
export const add15 = card => (ON.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when a card that replaces it is on. */
export const old15 = oldId => (oldId && ON.some(k => REPLACES[k] === oldId) ? { retired: true } : {});
