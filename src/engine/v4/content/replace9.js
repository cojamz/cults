// Members C (overnight quality loop, Nov 4; /mnt/project-files/quality/pitches/C-*.md), bot games only. REPLACE9=1
// deals each new member in its old card's place (the old card is retired, so never dealt):
//   yellow.customs -> yellow.tollkeeper
//   yellow.dyer -> yellow.quilter (rarely bought in its trial), or yellow.tailor (Tailor; not part of REPLACE9=1)
//   benders.dabblers -> benders.dabbler (Dabbler, the single version)
//   trading.heiress -> trading.latebloomers (Late Bloomers)
//   trading.heiress -> trading.dowagers (Dowagers)
//   (yellow.customs -> yellow.dutycollector is live since Nov 4: Customs Officer always retired, Duty Collector always on)
//   market.windowdresser -> market.windowdressers9 (Window Dressers, reworded), or market.buyersclub (Buyers' Club)
//   yellow.ringleader -> yellow.meddler9 (Meddler, once per round)
//   trading.shopkeeper -> trading.moneylender (Moneylender, Landlord's place)
//   echo.roadie -> echo.roadie9 (Roadie, reworked: green per green member on every copy), or echo.setlist
//   purple.nightwatch -> purple.nightwatch9 (Night Watch, any player's take, the owner's too), or purple.lamplighters
//   market.critic -> market.lastminute (or market.lastminute2, the +2-resources alternate; not part of REPLACE9=1)
//   market.regular -> market.bargainhunter
//   benders.extrahand -> benders.hypnotist (too strong in its trial), or benders.standin (Stand-In; not part of REPLACE9=1)
//   market.snob -> market.powershoppers (Power Shoppers)
//   (yellow.tastemaker -> yellow.jack is live since Nov 4: Tastemaker always retired, Jack-of-All-Trades always on)
//   yellow.caravan -> yellow.ambassadors, or yellow.signpainters (Sign Painters)
//   (yellow.harmonist -> yellow.seamstress is live since Nov 4: Harmonist always retired, Seamstress always on)
//   market.hawkers -> market.mannequin (or market.stallholder, or market.hawker2: Hawker at Round Start)
// One card at a time: REPLACE9=<key> or a comma list of keys (REPLACE9=quilter,hypnotist); 1 means all of them.
// Unset, the new cards are never defined and nothing in the game changes.
const VAL = globalThis.process?.env?.REPLACE9 || '';
/** new card key -> the old card id it takes the place of */
const REPLACES = { tollkeeper: 'yellow.customs', quilter: 'yellow.dyer', lastminute: 'market.critic', lastminute2: 'market.critic', bargainhunter: 'market.regular', hypnotist: 'benders.extrahand', ambassadors: 'yellow.caravan', mannequin: 'market.hawkers', stallholder: 'market.hawkers', hawker2: 'market.hawkers', powershoppers: 'market.snob', standin: 'benders.extrahand', tailor: 'yellow.dyer', dabbler: 'benders.dabblers', latebloomers: 'trading.heiress', dowagers: 'trading.heiress', windowdressers9: 'market.windowdresser', moneylender: 'trading.shopkeeper', roadie9: 'echo.roadie', nightwatch9: 'purple.nightwatch', lamplighters: 'purple.nightwatch', setlist: 'echo.roadie', meddler9: 'yellow.ringleader', buyersclub: 'market.windowdresser', signpainters: 'yellow.caravan' };
export const ON9 = VAL === '1' ? Object.keys(REPLACES).filter(k => !['lastminute2', 'mannequin', 'stallholder', 'ambassadors', 'hypnotist', 'standin', 'quilter', 'tailor', 'dowagers', 'windowdressers9', 'moneylender', 'roadie9', 'nightwatch9', 'lamplighters', 'setlist', 'meddler9', 'buyersclub', 'signpainters'].includes(k)) : VAL.split(',').map(x => x.trim()).filter(k => REPLACES[k]);
export const REPLACE9 = ON9.length > 0;
/** The new card, in its color's member list only when it is switched on. */
export const add9 = card => (ON9.includes(card.key) ? [card] : []);
/** The old card's extra fields: retired when the card that replaces it is on, nothing otherwise. */
export const old9 = oldId => (ON9.some(k => REPLACES[k] === oldId) ? { retired: true } : {});
/** Handlers the new cards use, registered under the switch. */
export const handlers9 = hs => (REPLACE9 ? hs : {});
