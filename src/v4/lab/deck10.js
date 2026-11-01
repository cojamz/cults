// Claude's keep/cut proposal for 10-member decks (Oct 31), shown by the members page at ?deck10. Not a rule: the game
// deals what content/cull.js says. design/notes/deck-10-keep-cut.md has the same list in words.
export const DECK10 = {
 "red": {
  "head": "cut Headhunter and Host. Exactly 4 round I members already.",
  "cards": {
   "red.volunteer": {
    "why": "The cheapest card in the game."
   },
   "red.twins": {},
   "red.recruitbonus": {
    "why": "Your own design."
   },
   "red.movementpenalty": {
    "why": "Red's sting."
   },
   "red.host": {
    "cut": true,
    "why": "A round start trickle; you said those feel weak. Patriarch already pays per 2 members."
   },
   "red.patriarch": {},
   "red.loyalists": {
    "why": "The counter to Red's own swaps."
   },
   "red.headhunter": {
    "cut": true,
    "why": "My fill-in. It does what Promote and Demote already do (swap with a rival's member), once."
   },
   "red.proselytizer": {},
   "red.panel": {
    "why": "Your own design."
   },
   "red.mentor": {
    "why": "Big buy."
   },
   "red.mob": {
    "why": "Big buy, pays per red member."
   }
  }
 },
 "echo": {
  "head": "cut Understudy, Bait, Impostors and Ensemble.",
  "cards": {
   "echo.roadie": {
    "why": "Pays per green member."
   },
   "echo.agents": {
    "why": "Green's sting (you like it moved around as a blocker)."
   },
   "echo.bait": {
    "cut": true,
    "why": "A third copy counter after Agents and Muse; Agents does the blocking."
   },
   "echo.evergreen": {
    "why": "The catch-up you wanted."
   },
   "echo.muse": {
    "why": "Your counter to a chaining player."
   },
   "echo.understudy": {
    "cut": true,
    "why": "Stunt Double's twin; you cut it once for that reason."
   },
   "echo.ensemble": {
    "cut": true,
    "why": "Pays for copying yourself, which Impressionist (the artifact) and Wallflower already reward."
   },
   "echo.hourglass": {},
   "echo.doppel": {},
   "echo.chronicler": {
    "why": "Game end, per green member."
   },
   "echo.mirror": {
    "why": "You kept it Oct 30."
   },
   "echo.impostor": {
    "cut": true,
    "why": "Doppelganger's twin (copy a rival's member instead of yours)."
   },
   "echo.wallflower": {
    "why": "Big buy."
   },
   "echo.dejavu": {
    "why": "Big buy."
   }
  }
 },
 "thieves": {
  "head": "cut Crew, Robin Hood, Snitch and Fixer.",
  "cards": {
   "thieves.cutpurse": {},
   "thieves.accomplice": {},
   "thieves.crew": {
    "cut": true,
    "why": "Plain followers, no stealing; Purple's Shift Crew is the same card."
   },
   "thieves.sticky": {},
   "thieves.robinhood": {
    "cut": true,
    "why": "Only pays when you rob the leader; Desperado covers the catch-up thief."
   },
   "thieves.kingpin": {
    "why": "Game end, per magenta member."
   },
   "thieves.snitch": {
    "cut": true,
    "why": "Bodyguards is the counter to stealing; two is one too many in 10."
   },
   "thieves.desperado": {},
   "thieves.grifter": {},
   "thieves.fixer": {
    "cut": true,
    "why": "Double Agent and the Poach space already take a rival's member."
   },
   "thieves.extortionist": {
    "why": "The big Cutpurse, as you set it."
   },
   "thieves.shoplifter": {},
   "thieves.watchdog": {
    "why": "Big buy and the counter."
   },
   "thieves.doubleagent": {
    "why": "Big buy."
   }
  }
 },
 "purple": {
  "head": "cut Go-Getter, Late Risers and Gossip; Early Birds and Timekeepers get cheaper so round I has 4.",
  "cards": {
   "purple.crew": {},
   "purple.bouncer": {
    "why": "Purple's sting."
   },
   "purple.earlybird": {
    "round": 1,
    "price": 3,
    "why": "The counter to Bouncers, and a second cheap card."
   },
   "purple.timekeepers": {
    "round": 1,
    "price": 4,
    "why": "Like Magenta's Kingpin. Game end, per purple member."
   },
   "purple.clockmaker": {},
   "purple.closer": {},
   "purple.streak": {},
   "purple.courier": {},
   "purple.gossip": {
    "why": "Pays on every skip, yours included (Cory, Nov 1: back in, in place of Extra Shift)."
   },
   "purple.secondwind": {
    "cut": true,
    "why": "+1 minion, same as Extra Shift and grey's Extra Hand."
   },
   "purple.lateriser": {
    "cut": true,
    "why": "A third +1 minion card."
   },
   "purple.nightowl": {
    "why": "Big buy."
   },
   "purple.extrashift": {
    "cut": true,
    "why": "A worse Night Owl: one +1 minion, once (Cory, Nov 1: Gossip takes its place)."
   }
  }
 },
 "market": {
  "head": "cut Restockers, Plus-Ones and Doormen's round I spot. Blue has only 4 round II members, so it runs 5 and 5, with Doormen up to 5 in round II.",
  "cards": {
   "market.regular": {
    "why": "Cheap."
   },
   "market.connoisseur": {
    "why": "Pays per blue member."
   },
   "market.restocker": {
    "cut": true,
    "why": "A third shop sweeper after Window Dressers and Trendsetters."
   },
   "market.windowdresser": {},
   "market.plusone": {
    "cut": true,
    "why": "Shopaholics' twin (recruit twice)."
   },
   "market.doorman": {
    "round": 2,
    "price": 5,
    "why": "Round II is where Shopaholics makes double recruits happen."
   },
   "market.trendsetter": {},
   "market.critic": {
    "price": 3,
    "why": "Blue's sting, and at 3 Blue's second cheap card."
   },
   "market.windowshopper": {},
   "market.snob": {
    "why": "Game end, per blue member."
   },
   "market.patroness": {
    "why": "Big buy."
   },
   "market.shopaholic": {
    "why": "Big buy."
   }
  }
 },
 "trading": {
  "head": "cut Undertaker; Recluse and Cashier get cheaper so round I has 4.",
  "cards": {
   "trading.shopkeeper": {},
   "trading.martyr": {},
   "trading.recluse": {
    "round": 1,
    "price": 3,
    "why": "You love it, and White has no cheap card."
   },
   "trading.broker": {},
   "trading.raider": {
    "why": "White's sting."
   },
   "trading.cashier": {
    "round": 1,
    "price": 3,
    "why": "It cashes in what Shopkeeper makes."
   },
   "trading.undertaker": {
    "cut": true,
    "why": "Martyrs' twin (followers when a member leaves you)."
   },
   "trading.oldmoney": {
    "why": "Game end, per white member."
   },
   "trading.exporter": {},
   "trading.hoarder": {
    "why": "Big buy."
   },
   "trading.heiress": {
    "why": "Big buy."
   }
  }
 },
 "yellow": {
  "head": "cut Tinker, Matchmaker, Agitator, Leveler and Book Cookers; Go-Between and Drifters get cheaper so round I has 4.",
  "cards": {
   "yellow.gardener": {},
   "yellow.customs": {
    "why": "Yellow's counter."
   },
   "yellow.gobetween": {
    "round": 1,
    "price": 4,
    "why": ""
   },
   "yellow.drifters": {
    "round": 1,
    "price": 3,
    "why": "Yellow's second cheap card."
   },
   "yellow.tinker": {
    "cut": true,
    "why": "Rearranging your own resources is grey's Launderers and Yellow's round III space."
   },
   "yellow.matchmaker": {
    "cut": true,
    "why": "The same trigger as Yellow's artifact, Guest Book (\"Whenever you recruit a member of a color none of your members have, +2 yellow\"). You kept it beside Guest Book Oct 31; this is the first one to go at 10."
   },
   "yellow.explorer": {},
   "yellow.agitator": {
    "cut": true,
    "why": "Four cards change rivals' resources; keep Ringleader and Puppeteers."
   },
   "yellow.ringleader": {
    "why": "Yellow's sting."
   },
   "yellow.harmonist": {
    "why": "Game end."
   },
   "yellow.dyer": {},
   "yellow.leveler": {
    "cut": true,
    "why": "A fourth card that changes rivals' resources."
   },
   "yellow.bigtent": {
    "why": "Big buy, game end."
   },
   "yellow.bookcooker": {
    "cut": true,
    "why": "Launderers' twin, and the round III space does it too."
   },
   "yellow.puppeteer": {
    "why": "Big buy and sting."
   }
  }
 },
 "guest": {
  "head": "cut Big Spender, Launderers, Cheerleader, Coach and Tiebreaker (Cory).",
  "cards": {
   "benders.frontrunner": {
    "why": "Bends turn order."
   },
   "benders.bigspender": {
    "cut": true,
    "why": "Blue's Shopaholics and Plus-Ones do recruiting twice; you once said no to it."
   },
   "benders.dabblers": {
    "why": "Bends colors."
   },
   "benders.scout": { "why": "Your call: stays."},
   "benders.squatter": {
    "why": "Bends blocking."
   },
   "benders.launderer": {
    "cut": true,
    "why": "Yellow's round III space now does it."
   },
   "benders.cheerleader": {
    "cut": true,
    "why": "A follower drip, not a rule bend; Tiebreaker covers contests."
   },
   "benders.tiebreaker": { "cut": true, "why": "Your call: out."},
   "benders.freelancer": {
    "why": "Bends payment."
   },
   "benders.saboteur": { "why": "Your call: stays."},
   "benders.anarchist": {},
   "benders.conmen": {},
   "benders.secondwind": { "cut": true, "why": "Your call: out."},
   "benders.extrahand": {
    "why": "Big buy, bends minions."
   },
   "benders.hr": {
    "why": "Big buy."
   }
  }
 }
};
