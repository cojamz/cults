# Batch 7: every new card replayed with bots that can see what cards do

Earlier batches used bots that, when deciding whether to buy, couldn't see what most new cards do (why-unbought.md). The fix (bot test only for now) lets them weigh On Use cards and "whenever a rival..." cards. Each batch: 120 games with the hardest fixed bots, 10-card deck, against 120 games of today's game with the same bots. "Taken": owned per game it showed up. "Owners won": 25% is an even share. Cards already live are marked (live).

## Strong: owners win 37% or more (too strong as priced)
- **Turncoats** (Red, replaces Volunteer) "Whenever a rival takes one of your members into their cult, recruit a shop member costing up to its cost, for free.": taken 98%, owners 55%.
- **Defectors** (Red, replaces Proselytizers) "On Use, once per game: swap all your red members, this one too, for all of one rival's red members.": 75%, 50%.
- **Outbidders** (Blue, replaces Window Dressers) "Whenever a rival recruits a shop member, you may pay its cost plus 2 to recruit it instead. They get back what they paid and recruit again.": 43%, 46%.
- **Fundraisers** (Silver, replaces Debutantes) "On Use, once per game: each rival +2 silver, then +1 follower per 2 silver rivals hold in all.": 57%, 45%. Earlier called a miss; with bots that use it well it's strong.
- **Mirror Image** (Green, replaces Wallflower) "On Use, once per game: choose a rival and a color; gain that color until you hold as much of it as they do.": 56%, 44%.
- **Social Climbers** (Silver, Debutantes slot) "On Use, once per game: gain followers equal to the silver of the rival who holds the most.": 68%, 41%.
- **Evictors** (White, replaces Hoarder) "On Use, once per game: cast out a rival's member to the bottom of the pile. You and that rival each gain white equal to its cost.": 68%, 37%. Earlier a miss.
- **Tithe Takers** (Red, replaces Mentor & Protégés) "On Use, once per game: each rival gives you one of their members.": 118%, 37%.

## Fair and wanted: taken often, owners 24 to 34%
- **Spoilsports** (live) 64%, 35%; **Hostesses** (live) 75%, 33%; **Body Snatchers** (live) 48%, 33%; **Misers** (live) 53%, 23%. The live four hold up; Spoilsports is on the strong side.
- **Kidnappers** (next live, at 2 more) at the old price 93%, 33%; **Impersonators** (next live) 89%, 32%; **Creditors** (next live) 49%, 24%; **Godparents** (next live) 70%, 25%.
- **Night Watch** (Purple, replaces Clockmakers) "Whenever a rival takes the Goes Last token, +1 follower per minion on it.": 54%, 28%; Clockmakers 60%, 22%.
- **Second-Story Men** (Magenta, replaces Sticky Fingers) "Round End: before contests are scored, steal 2 resources from one rival.": 43%, 28%; Sticky Fingers 40%, 17%.
- **Hawkers** (Blue, replaces Connoisseurs) "On Use, once per round: choose a shop member. Starting on your left, each rival may recruit it, paying its cost plus 2 to you. If none does, you recruit it for free.": 71%, 28%; Connoisseurs 86%, 27%.
- **Sore Losers** (Grey, replaces HR) "Round End: if you win no contest, steal 3 followers from the rival who wins the most.": 68%, 25%; HR 137%, 35%.
- **Peddlers** (Grey, replaces Alchemists): 84%, 26%; Alchemists 98%, 25%. One rules bug left in the build.
- **Copycats** (Green, replaces Roadie): 52%, 26%. **Racketeers** (Magenta): 44%, 32%. **Inquisitors** (White, replaces Raiders): 92%, 34%, close to an auto-buy.
- **Grudge** (Grey, replaces Line Cutters): 114%, 26%: bought nearly every game, an auto-buy.

## Still rarely bought, even by bots that can see them
Barterers, Second Fiddles, Jackals, Vultures, Tagalongs, Full House, Opening Act, Late Shoppers, Pacers, Interrupters, Completists, Doorbusters, Night Market, Successors, Pallbearers, Scavengers, Hush Money (texts in batch1.md to batch6.md). These are the real misses.

## What it means
- Bot blindness hid about eight strong cards; most are On Use, once per game, and need a higher price before they're fair.
- Next live set (Claude's pick, fair and wanted, not auto-buys, each a clear piece to build or counter with): **Night Watch**, **Second-Story Men**, **Hawkers**, **Sore Losers**.
- The fixed bots are a bot test only. Putting them in the live game makes every bot better at using On Use cards; that's a separate step.
