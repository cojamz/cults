# Express balance test: Hard bots only, new +1 price

**What was played:** 300 games, 4 Hard bots each, 10-card deck, By color contests. 60 of them had one seat that only buys followers, so card and robe numbers come from the other 240 tables (960 seats).
**Version:** the branch after your 5 calls tonight (Ballroom Dancers, Last-Minute Shopper, Night Traders, Heist Crew, Foster Parents), at the price you picked at 11:07pm: every member 1 more than this afternoon, in any color (a colored member pays printed + 1 of its color + 2 any; named costs +1).
**Why 300:** each robe is worn by about 120 players, so a robe's win share is good to about ±8 points. A member bought in 30%+ of games has 60+ owners (good to about ±10). That is enough to see anything 10+ points out of line, which is what an express check is for. Cards bought rarely (under 20 owners) can't be read at this size.
**How to read "wins X% vs Y%":** X is how often the owner won; Y is how often a player with that many members usually wins. Even for a robe is 25%.
**Compared with:** the 240 Hard games from last night's run (v0.99.606, the old price) where a card appears in both.

## The price itself
- Members per player: 9.8 cards on average; the winner had 6.3.
- Winners with 5 or fewer member cards: 43% of games (bar: at least 20%; last night 35%).
- The seat that only buys followers won 15% (last night 7%): buying followers is closer to a real plan at this price, still behind.
- Seat order is even (21% to 27%).

## Robes (the color each player picked before round I)
| robe | text | holders win | holders |
|---|---|---|---|
| White | Whenever any player buys followers, +1 white (+2 if it's you). | **38%** | 124 |
| Blue | Whenever members go to the bottom of the pile, +1 blue. | 34% | 116 |
| Green | Whenever any player copies an action, +1 of its color. | 32% | 115 |
| Yellow | Whenever you recruit a member of a color none of your members have, +2 yellow. | 23% | 116 |
| Purple | Whenever a player's turn is skipped, +2 purple. | 23% | 114 |
| Silver | Whenever silver is gifted, +1 silver. | 20% | 122 |
| Red | Whenever you recruit a member, +1 red. | 19% | 126 |
| Magenta | Whenever a rival steals from you, +2 magenta. | **13%** | 127 |

- White is too strong and Magenta too weak. The robe trial running now found the same for White (40% there) and is testing new versions of all eight; its second round finishes tonight. **Default: take the robe trial's set when it lands; no separate fix from this test.**
- White jumped from 22% last night to 38%: more players buy followers at the higher member price, and every follower buy feeds White.

## Members out of line (20+ owners)
**Too strong**
- **Tribute Band** [9 green + 5 any, worth 3, counts as 3] "On Use, once per game: choose a rival. Do every action they have a minion on this round." Owners win 68% vs 31% (20 owners; bought in 10% of games it showed). The biggest gap in the game, even on few owners. Fix: back to 11 green (11 green + 5 any). Default: that.
- **Night Owls** [7 purple + 3 any, worth 2, counts as 2] "From round II: after your last minion, +1 minion, placed right away." 43% vs 27% (27 owners). Too few owners to act on; watch.
- **Heiresses** [5 white + 6 any, worth 2, counts as 2] "On Use, once per game: +1 white per member you have." 41% vs 29% (28 owners). Watch.
- **Ballroom Dancers** [5 silver + 4 any, worth 2, counts as 2] "On Use, once per game: +2 followers per minion on Silver spaces." 38% vs 28% (47 owners), the same gap as last night before your price raise. Owners still earn about 10 followers from it. Watch one more run; if it holds, 1 more silver.

**Too weak**
- **Sleepyheads** [3 purple + 4 any, worth 2, counts as 2] "Whenever you take the Goes Last token, +2 followers." Owners win 11% vs 26% (62 owners): the clearest weak card. Taking Goes Last means taking Last Call ("+1 purple. +1 follower and +1 purple per minion you have left. Take the Goes Last token: your other minions are placed after everyone else's."), which one player gets per round. Fix: +3 followers. Default: that.
- **Encore** [3 green + 4 any, worth 1] "On Use, once per game: your next On Recruit happens twice." 17% vs 31% (32 owners); also weak last night (21% vs 31%). Fix: worth 2. Default: that.
- **Hot Streak** [3 purple + 4 any, worth 1] "On Use, once per game: +3 followers per turn in a row you've taken just before this one." 18% vs 28% (39 owners), but it was 34% vs 29% last night. Noise until another run agrees; watch.
- **Seat Filler, Loyalists, Body Snatchers** (red): each 6 points under, in both runs, but owned in 80-90% of games, so they are bought as filler, not as plans. Watch.
- **Ghost** (grey) [7 any, worth 0] "Worth 0 members. Whenever this member joins your cult, −5 followers." Owners lose, as the card intends. No fix.

## Spaces
- **Makeover** (Yellow, round III) "+4 yellow, then rearrange your resources into any mix of colors." Owners +14 points, +12 last night. You kept it as is on Nov 2; it is still the strongest space in both runs. Possible fix: +2 yellow.
- **Largesse** (Silver, round III) "Give rivals 12 silver from the bank, split as you choose. +10 followers." +11 points (your new 12-for-10 text). Possible fix: +8 followers. Default: leave it until you've played it.
- **Last Call** (Purple, round II) +9 points both runs. Watch.
- **Recruit Twice** (Blue, round II) "Recruit an extra time this turn. +3 blue." -10 points, weakest space (-6 last night). You said on Nov 1 the bots may be misjudging it, so this is not evidence yet.
- **Estate Sale** (White) and **Toast** (Silver, round I) each -5, weak in both runs. Watch.

## Colors (players with 3+ members of one color)
White +20 (19 players, too few), Blue +13, Silver +12, Red +12, Yellow -12 (20 players). Yellow has been below even in every run since Nov 3.

## Not run in this express check
Normal and Very Hard bots, the skill ladder, the break-it bot, AI players, the critic and skeptic. Raw numbers: raw-hard-300.txt beside this file.
