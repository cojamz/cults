// Silver, more communal (thread "Make Silver cards more communal", Nov 4; Cory 11:27am: "silver should shift a little to
// be more about the communal nature of silver"). Paper: /mnt/project-files/silver-communal/paper.md. Bot games only.
// REPLACE16 puts each new card in its old card's place (the old card stays in code, retired while the new one is on):
//   member silver.toastmaster (Toastmaster) -> silver.socialites (Socialites)
//   member silver.smoothtalker (Smooth Talkers) -> silver.tongues (Silver Tongues)
// REPLACE16=1 swaps both; REPLACE16=socialites (or a comma list of keys) swaps only those. Unset, nothing changes.
// (Chaperone in Toastmaster's place is REPLACE8=chaperone.)
const RAW = globalThis.process?.env?.REPLACE16 || '';
const REPLACES = { socialites: 'silver.toastmaster', tongues: 'silver.smoothtalker' };
const ON = RAW === '1' ? Object.keys(REPLACES) : RAW.split(',').map(s => s.trim()).filter(k => k in REPLACES);
export const REPLACE16 = ON.length > 0;
export const on16 = key => ON.includes(key);
/** The new card, in its list only when switched on. */
export const add16 = card => (ON.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when a card that replaces it is on. */
export const old16 = oldId => (ON.some(k => REPLACES[k] === oldId) ? { retired: true } : {});
