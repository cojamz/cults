# Bugs and questions from the balance-1.0 round (running log)

Every runner, reviewer and expert game adds here. Kinds: **BUG** (the game breaks its own text, no Cory call involved), **CORY?** (behavior matches or touches a logged call: a question for him, never a fix), **WORDS** (text and behavior agree but tables misread it), **TOOL** (our bots or test tools, not the game). Check design/decisions.md before calling anything a BUG.

| # | kind | what | seen in | status |
|---|---|---|---|---|
| 1 | BUG | Scouts' sweep sent members to the bottom without paying Patroness or Bargain Bin (benders.js scoutDone never called market.js toBottom) | g2, g5 (3 players each) | fixed in v0.9.962 |
| 2 | CORY? | Promote and Demote reach any two cults (rival-to-rival) and measure the cost window from the rival's card. Matches Cory's Oct 29 "should work with rivals"; a "fix" shipped by mistake | g1 (all 4), g3 | reverted; Cory keeps them as is |
| 3 | CORY? | Recruiter ("Whenever a member leaves a rival's cult, +2 red.") doesn't pay when a rival's member goes to the shop (Demote) or is released; fires only cult to cult (core.js swapMembers) | g3 | Cory, Nov 1 12:11pm: yes, it pays on shop moves too; shipping after the red re-runs started, so bot numbers on Recruiter predate it |
| 4 | CORY? | Promote has no lower cost limit (also swaps for anything cheaper) | review | asked by the balance thread |
| 5 | WORDS | Lie Low ("Rivals can't steal or recruit from you this round") doesn't stop Raiders taking followers or Debt Collectors taking silver; Bodyguards same question | g6, g7 (3 players) | for Cory |
| 6 | WORDS | Tastemaker ("Whenever you change rivals' resources, +1 follower.") pays once per space; players read once per resource | g1, review | for Cory |
| 7 | WORDS | Patroness text says "a shop member"; it pays once per batch (Cory, Oct 21) | review | for Cory |
| 8 | CHECK | Echo copying a rival's Last Call while they hold their own made a long skip chain; each skip paid Gossip +1 follower and Pocket Watch +1 purple, eight times in one round | g8 | needs an engine check: is each skip real? |
| 9 | CHECK | Closer ("last minion of the round") didn't fire after a Sleep In skip pushed a turn past it | g1 | needs an engine check |
| 10 | RULE | A member taken by Shake Down or Poach fires its On Recruit again for the taker (Accomplice stole twice) | g7 | as built; flag on the list as a feel note |
| 11 | TOOL | Expert tool: option numbers shift between steps (Dilute, Con Men steals, payments), causing misclicks in 5 games | g1, g4, g5, g7, g9, g10, g12 | fixed Nov 1: an option keeps its number through the whole turn, a gone option's number is refused; a stale number can no longer land on another option; checked with 2 scripted games, 250 stale picks, none landed wrong |
| 12 | TOOL | Choice log never shows On Use abilities (Normal's shortcut takes them before the lookahead); bots do use them | review | noted in leads.md; reports read accordingly |
| 13 | TOOL | Balance report: "owned in 103% / 109% of games" for Recruit Bonus and Deprogrammers (counter can pass games shown) | runner 1 | fixed Nov 1: a game counts as showing a member when it was in the shop or a bot owned it (members taken in the same move they were dealt were missed); Very Hard now tops at 100%. Reports regenerate on the next gather |
| 14 | RULE | Party Crasher can join a taken Makeover on the last placement; Ben rearranged 19 resources and won all three round III contests (+30) | g10 (all 3 players) | as built; top feel note on the list |
| 15 | RULE | Customs gives back 1 yellow per resource a rival changes, so Dilute and Big Dilute against a Customs owner pay the owner | g10 (Cal, Ben) | as built; feel note |
| 16 | TOOL | Expert tool: game state file missing for two `wait` calls between rounds I and II, then back | g10 (Ben) | fixed Nov 1: every read of a game file retries for up to 3 s, so a read landing mid-save waits instead of failing |
| 17 | CHECK | Stash paid one magenta more than its printed amount every time (player's read; may be the color's +1 the space gives) | g9 (Ben) | needs an engine check |
| 18 | WORDS | Lie Low didn't stop Red's swaps or Anarchist taking the Lie Low player's members; the whole table read it as blocking them (extends row 5) | g9 | swaps going through is Cory's Nov 1 call ("they can still move your members around"); a words question only |
| 19 | CHECK | Final swap lists: Double Agent and Anarchist offered none of Dee's members (Bodyguards), Double Agent none of Ava's (Lie Low); both texts only say they stop stealing | g9 | engine check: Cory's Nov 1 call says swaps (Promote, Demote, Anarchist) go through Lie Low, so Anarchist hiding a Lie Low player's members would be a BUG; Double Agent and Bodyguards unruled |
| 20 | WORDS | Recruiter misread again: player expected +2 red when their member went to the shop (see row 3) | g9 (Ben) | for Cory with row 3 |
| 21 | RULE | Panel's On Recruit fires for whoever swaps it in, so Promote or Double Agent on a rival's Panel gives two swaps from one move | g9 (Cal, Dee) | as built; feel note |
| 22 | WORDS | Agents ("blocks copying") doesn't stop Encore copying its owner's Con Men steal; owner read it as blocked | g9 (Ava) | for Cory |
| 23 | RULE | Copies of follower spaces: Echo, Reprise, Party Crasher, Tribute Band repeat Party Gifts and Largesse (Largesse paid 10 three times in round III, Tribute Band +20) | g9 (all 4) | as built; top feel note with row 14 |
| 24 | RULE | Farewell and Estate Sale pay a member's full cost even after its once-per-game ability is spent (Heiresses: +7 white used, then 9 white cast out) | g12 (Ben) | as built; feel note |
| 25 | RULE | Money Changers' +1 white on every follower buy kept white uncontested all game for its owner | g12 (Ben, won white 3 of 3) | already a lead (fewer fires) |
| 26 | WORDS | Guest Book never fired for new red or yellow members while its owner held Dabblers (wild members); owner expected +4 yellow | g12 (Ava) | engine check, then a wording question |
| 27 | WORDS | Caterer pays once per gift action, not once per player who gets silver; owner checked before buying | g11 (Dee) | for Cory if the text reads per player |
