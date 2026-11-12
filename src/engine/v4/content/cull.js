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
  'benders.squatter', 'purple.bouncer', // Cory, Nov 7 ("Yes"): Scouts and Latecomers take their places
  'benders.insider', 'benders.straggler', // Straggler: Cory, 2026-10-28, to the bench (design/bench.md)
  // Cory, Nov 5 backlog ("Yes to the member changes"): his cut list from the member notes; replacements are his pick
  'thieves.grifter', 'thieves.cutpurse', 'yellow.drifters', /* Counterfeiters in its slot, Nov 5 */ 'market.doorman', /* Power Shoppers in its slot, Nov 5 */ 'silver.charityball', 'silver.creditors', 'silver.hostesses', 'yellow.ringleader',
  'yellow.gardener', 'market.shopaholic', 'trading.raider', 'purple.earlybird', 'red.volunteer', // Seat Filler takes Volunteer's place
  'trading.bulkbuyer', 'trading.appraiser', 'market.makeover', 'market.stylist', // Cory, 2026-10-24 / Stylist 2026-10-25: thinning ("I like Closer rest can go"); Restockers replaces Makeover
  // Cory, 2026-11-11 member sort: Silver 2:29pm (Debt Collectors, Ballroom Dancers, High Society, Toastmaster go; Guest of
  // Honor and Patrons move to White as trading.guestofhonor and trading.godparents), Blue 3:41pm (Critic, Window
  // Dressers, Trendsetters), Yellow 2:31pm (Jack-of-All-Trades, Seamstress, Counterfeiters) and 3:45pm (Sleepyheads),
  // White 3:45pm (Old Money, Cashier), Green 3:52pm (Tribute Band, Buskers), Red 2:27pm (Mob, for Clan)
  'silver.debtcollector', 'silver.ballroom', 'silver.highsociety', 'silver.toastmaster', 'silver.guestofhonor', 'silver.godparents',
  'yellow.jack', 'yellow.seamstress', 'yellow.dyejob',
  'echo.impersonators', // Cory, 2026-11-11 9:02pm Eastern: Mimics replaces Impersonator
  'echo.dejavu', // Cory, 2026-11-11 9:32pm Eastern: "cut tribute band" (Regulars has its slot, 9:01pm)
  // Cory, 2026-11-11 9:10pm: Leavetakers replaces Undertaker. Barker ("we should just rethink this", 3:45pm) makes room
  // for Minimalists (Claude, under Cory's go-with-your-gut: his White open slots were "1 (2 if Barker's rethink is a new card)")
  'trading.undertaker', 'trading.barker',
  // the Nov 11 sort's cuts for White and Purple (Old Money, Cashier: 3:45pm; Sleepyheads: "yes to both", 3:45pm), and
  // Heiresses so White deals 10 with Leavetakers and Minimalists in (Claude, under Cory's go-with-your-gut: his lowest
  // mark left after Barker and Old Guard, which he wants to try, and "it doesn't go well with… having fewer members")
  'trading.oldmoney', 'trading.cashier', 'purple.sleepyheads', 'trading.heiress',
  'market.critic', 'market.windowdresser', 'market.trendsetter',
  'echo.songrequest', 'red.mob',
]);

// The 10-card decks (Cory, 2026-10-31: "create two versions of game, 10 card deck version and 15 card deck version";
// "i'll use your recommendations sight unseen"): rules.deck = 10 also leaves these out, so each 2.0 color and grey deal
// 10 (4 join in round I). Claude's keep/cut list, design/notes/deck-10-keep-cut.md. Without it a table deals the
// 15-card decks (CUT only). Silver has 10 in both modes; Gold is parked.
export const CUT10 = new Set([
  'red.host', 'red.headhunter',
  'echo.bait', 'echo.understudy', 'echo.ensemble', 'echo.impostor',
  'thieves.crew', 'thieves.robinhood', 'thieves.fixer', // Snitch back in for Cutpurse's slot (Cory, Nov 5)
  'purple.extrashift', 'purple.secondwind', 'purple.lateriser', // Gossip back in, Extra Shift out (Cory, Nov 1)
  'market.restocker', 'market.plusone',
  'yellow.tinker', 'yellow.spiceroute', // Matchmaker into the 10 deck for Gardeners' slot (Cory, Nov 5)
  'yellow.leveler', 'yellow.bookcooker',
  'yellow.gobetween', // Tourist takes its place (Cory, Nov 1 3:14pm)
  'benders.bigspender', 'benders.launderer', 'benders.cheerleader', 'benders.secondwind', 'benders.tiebreaker', // grey: Cory, Oct 31, keeps Scout and Old Maid, cuts Coach and Tiebreaker
]);

// The card and scenario tests pin seeded decks and deal cut cards by id, so the test setup deals the full deck through
// this switch (src/test/setup.js); it stays out of DEFAULT_RULES so the build's content stamp sees the real table.
export const FULL_DECK = { tests: false };
