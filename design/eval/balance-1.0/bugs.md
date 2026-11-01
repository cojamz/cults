# Bugs and questions from the balance-1.0 round (running log)

Every runner, reviewer and expert game adds here. Kinds: **BUG** (the game breaks its own text, no Cory call involved), **CORY?** (behavior matches or touches a logged call: a question for him, never a fix), **WORDS** (text and behavior agree but tables misread it), **TOOL** (our bots or test tools, not the game). Check design/decisions.md before calling anything a BUG.

| # | kind | what | seen in | status |
|---|---|---|---|---|
| 1 | BUG | Scouts' sweep sent members to the bottom without paying Patroness or Bargain Bin (benders.js scoutDone never called market.js toBottom) | g2, g5 (3 players each) | fixed in v0.9.962 |
| 2 | CORY? | Promote and Demote reach any two cults (rival-to-rival) and measure the cost window from the rival's card. Matches Cory's Oct 29 "should work with rivals"; a "fix" shipped by mistake | g1 (all 4), g3 | reverted; Cory keeps them as is |
| 3 | CORY? | Recruiter ("Whenever a member leaves a rival's cult, +2 red.") doesn't pay when a rival's member goes to the shop (Demote) or is released; fires only cult to cult (core.js swapMembers) | g3 | asked by the balance thread |
| 4 | CORY? | Promote has no lower cost limit (also swaps for anything cheaper) | review | asked by the balance thread |
| 5 | WORDS | Lie Low ("Rivals can't steal or recruit from you this round") doesn't stop Raiders taking followers or Debt Collectors taking silver; Bodyguards same question | g6, g7 (3 players) | for Cory |
| 6 | WORDS | Tastemaker ("Whenever you change rivals' resources, +1 follower.") pays once per space; players read once per resource | g1, review | for Cory |
| 7 | WORDS | Patroness text says "a shop member"; it pays once per batch (Cory, Oct 21) | review | for Cory |
| 8 | CHECK | Echo copying a rival's Last Call while they hold their own made a long skip chain; each skip paid Gossip +1 follower and Pocket Watch +1 purple, eight times in one round | g8 | needs an engine check: is each skip real? |
| 9 | CHECK | Closer ("last minion of the round") didn't fire after a Sleep In skip pushed a turn past it | g1 | needs an engine check |
| 10 | RULE | A member taken by Shake Down or Poach fires its On Recruit again for the taker (Accomplice stole twice) | g7 | as built; flag on the list as a feel note |
| 11 | TOOL | Expert tool: option numbers shift between steps (Dilute, Con Men steals, payments), causing misclicks in 5 games | g1, g4, g5, g7 | tool fix: stable option ids |
| 12 | TOOL | Choice log never shows On Use abilities (Normal's shortcut takes them before the lookahead); bots do use them | review | noted in leads.md; reports read accordingly |
| 13 | TOOL | Balance report: "owned in 103% / 109% of games" for Recruit Bonus and Deprogrammers (counter can pass games shown) | runner 1 | report fix |
| 14 | RULE | Party Crasher can join a taken Makeover on the last placement; Ben rearranged 19 resources and won all three round III contests (+30) | g10 (all 3 players) | as built; top feel note on the list |
| 15 | RULE | Customs gives back 1 yellow per resource a rival changes, so Dilute and Big Dilute against a Customs owner pay the owner | g10 (Cal, Ben) | as built; feel note |
| 16 | TOOL | Expert tool: game state file missing for two `wait` calls between rounds I and II, then back | g10 (Ben) | watch; check the save path if it repeats |
