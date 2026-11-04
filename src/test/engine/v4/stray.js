// Members that moved sphere (Doppelganger went Red → Green, Cory 2026-10-15): the card scenes written for the old
// table still deal them, so a scene whose spheres don't include the card's own gets a copy of it made up on the spot.
// the retired Extra Hand (never dealt) too, and the four cards retired Nov 3 (Hostesses, Misers, Spoilsport and Body
// Snatchers took their places): their rules stay, and the scenes that use them as fixtures still run
export const STRAYS = new Set(['echo.doppel', 'benders.extrahand3', 'benders.bigspender1',
  'red.twins', 'trading.exporter', 'silver.giftwrapper', 'benders.scout',
  'echo.muse', 'silver.collector', 'thieves.kingpin', 'silver.guest']); // and the four retired later Nov 3 (Impersonator, Creditors, Kidnapper, Godparent)
export function stray(s, def) {
  const uid = Math.max(...Object.keys(s.cards).map(Number)) + 1;
  s.cards[uid] = { uid, def };
  return uid;
}
