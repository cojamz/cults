// Members left out of the deck (Cory, 2026-10-15: "cull member piles down to the best existing 10, per our
// principles and balance tests"; the list and why each went: design/spheres/cull-10.md). The cards stay
// defined, so old records and the card tests still read them; a table with rules.cull off deals them again.
export const CUT = new Set([
  'gold.midas', 'gold.investor', 'gold.hustler', 'gold.jackpot', 'gold.coinpurse',
  'red.intern', 'red.reserve', 'red.drive', 'red.crowd', 'red.bigfamily', 'red.sponsor',
  'echo.afterimage', 'echo.translator', 'echo.groupie', 'echo.choir',
  'echo.connector', // Cory, 2026-10-28: "I think connector can go" (Green at 15)
  'market.reseller', 'market.onlooker', 'market.auctioneer', 'market.curator', 'market.blackmarket',
  'market.climber', // Cory, 2026-10-18: cut (dead while Release is off); its fill-in is his call
  'market.planner', 'market.underbidder', 'market.sommelier', // concept branch: cost cuts out (Cory, 2026-10-18)
  'market.minimalist', 'market.recluse', // Cory, 2026-10-21: Minimalist no; Recluse to another color
  'purple.errand', 'purple.foreman', 'purple.apprentice', 'purple.taskmaster', 'purple.doubletime',
  'purple.overseer', // Cory, 2026-10-18: cut; its replacement is his call
  'purple.bookkeeper', 'purple.lamplighter', 'purple.patience', // Cory, 2026-10-22: his Purple set of 12
  // Silver 2.0 (Cory, 2026-11-01): his deck of 10 (silver.js), in both the 10 and 15 modes for now
  'silver.silversmith', 'silver.dowager', 'silver.steward', 'silver.benefactor', 'silver.majordomo', 'silver.retinue',
  'silver.revelers', 'silver.heir', 'silver.spoon', 'silver.grandhost', 'silver.saint',
  // Yellow 2.0 (Cory, 2026-10-31): his deck of 15 (yellow.js); Gardener and Harmonist come back
  'yellow.sower', 'yellow.farmer', 'yellow.gleaner', 'yellow.peddler', 'yellow.admirer', 'yellow.latebloomer',
  'yellow.rainmaker', 'yellow.pilgrim', 'yellow.weaver', 'yellow.chefs',
  'yellow.puppeteer', 'yellow.explorer', 'yellow.agitator', // Cory, Nov 1: Caravan, Tastemaker, Spice Route in
  'thieves.mole', 'thieves.lightfingers', 'thieves.bigscore', 'thieves.lookout',
  'trading.lender', 'trading.tipster', 'trading.dealer', 'trading.pawnbroker', 'trading.liquidator',
  'trading.safetynet', 'trading.magnate', 'trading.shareholder', 'trading.reinvestor', // Cory, 2026-10-22: his White set of 12
  'benders.insider', 'benders.straggler', // Straggler: Cory, 2026-10-28, to the bench (design/bench.md)
  'trading.bulkbuyer', 'trading.appraiser', 'market.makeover', 'market.stylist', // Cory, 2026-10-24 / Stylist 2026-10-25: thinning ("I like Closer rest can go"); Restockers replaces Makeover
]);

// The 10-card decks (Cory, 2026-10-31: "create two versions of game, 10 card deck version and 15 card deck version";
// "i'll use your recommendations sight unseen"): rules.deck = 10 also leaves these out, so each 2.0 color and grey deal
// 10 (4 join in round I). Claude's keep/cut list, design/notes/deck-10-keep-cut.md. Without it a table deals the
// 15-card decks (CUT only). Silver has 10 in both modes; Gold is parked.
export const CUT10 = new Set([
  'red.host', 'red.headhunter',
  'echo.bait', 'echo.understudy', 'echo.ensemble', 'echo.impostor',
  'thieves.crew', 'thieves.robinhood', 'thieves.snitch', 'thieves.fixer',
  'purple.extrashift', 'purple.secondwind', 'purple.lateriser', // Gossip back in, Extra Shift out (Cory, Nov 1)
  'market.restocker', 'market.plusone',
  'trading.undertaker',
  'yellow.tinker', 'yellow.matchmaker', 'yellow.spiceroute', 'yellow.leveler', 'yellow.bookcooker',
  'yellow.gobetween', // Tourist takes its place (Cory, Nov 1 3:14pm)
  'benders.bigspender', 'benders.launderer', 'benders.cheerleader', 'benders.secondwind', 'benders.tiebreaker', // grey: Cory, Oct 31, keeps Scout and Old Maid, cuts Coach and Tiebreaker
]);

// The card and scenario tests pin seeded decks and deal cut cards by id, so the test setup deals the full deck through
// this switch (src/test/setup.js); it stays out of DEFAULT_RULES so the build's content stamp sees the real table.
export const FULL_DECK = { tests: false };
