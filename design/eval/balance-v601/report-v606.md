# Balance report: tonight's cards (v0.99.606)

**Version:** v0.99.606, tonight's replacement cards plus your two calls (Power Shoppers +4, Patron Saints at Game End, cost 7). It does **not** include the Mannequin fix (v0.99.611) or anything shipped after.
**Games:** 2,700 bot games on the 10-card deck, By color contests: Normal 2,400 (1,800 at 4 players, 300 each at 3 and 2), Hard 240, Very Hard 80, plus 120 with one Hard among Normals. Skill ladder: 122 games of two against two. Feel: 2 full games with 8 AI players (on v0.99.601). Abuse hunt: a bot that tries to break each card, 8 games with and without it.
"Owners win X% (even Y%)": how often the player who owned the card won, against what a player with that many members usually wins. Under about 5 points from even is noise at Hard and Very Hard.

## 1. Skill: how much better play wins (two against two, same tables)
| matchup | stronger side's share of wins | followers ahead per seat | games |
|---|---|---|---|
| Hard vs Normal | 80% | +7.9 | 40 |
| Very Hard vs Normal | 88% | +11.9 | 32 |
| Very Hard vs Hard | 54% | +1.6 | 41 |

- **Normal to Hard is a big jump; Hard to Very Hard is almost nothing.** Very Hard won 25 games to Hard's 21, about 1.6 followers a seat, within the noise.
- Why: Hard tries its best few moves by playing the round out, imagining every rival plays like a Normal bot. Very Hard does exactly that, looking about three times further. Imagining weak rivals for longer finds few better moves. A stronger Very Hard would need smarter imagined rivals, not more lookahead.
- One Hard at a table of three Normals won 53% of 120 games (even 25%).

## 2. Did tonight's cards work?
**About right now**
- **Patron Saints** [4 silver + 3 any, worth 2, counts as 2] "Game End: +1 follower per silver member, anyone's." At Game End: owners win even at Hard (25% vs 26%) and Very Hard (26% vs 27%), slightly over at Normal (33% vs 28%). The break-it bot gained about 4 followers with it: fine. **Fixed by your change** (it was owners 53% at Round End).
- **Power Shoppers** [4 blue + 3 any, worth 2, counts as 2] "Whenever you recruit your second member in a turn, +4 followers." At +4: even at Normal (35% vs 35%), slightly over at Hard (40% vs 35%, inside noise). **Fixed by your change** (it was owners 18% at +2). Bots now earn about 5-7 followers from it.
- **Kingmakers** [3 silver + 2 any, worth 1] "Round End: give a rival 3 silver from the bank. +3 followers." Even at every level. AI players liked it (3-4 fun): "choosing who gets the silver is real table politics".
- **Night Manager** [2 purple + 3 any, worth 1] "Round End: if you placed the round's last minion, +1 follower per purple member you have." Even at every level. AI players rated it low (1-3): "only the player going last can use it".
- **Downsizers** [3 white + 2 any, worth 1] "On Use, once per round: cast out one of your members costing 4 or less to the bottom of the pile. +4 white." Even at Normal and Hard after the fix (it was never usable before).
- **Last-Minute Shopper** [3 blue + 1 any, worth 1] "Round End: +2 blue, then you may recruit a shop member, paying its cost." Slightly under at every level (3-4 points). AI players liked it (3-5): "sneaky strong".

**Too strong**
- **Ballroom Dancers** [4 silver + 3 any, worth 2, counts as 2] "On Use, once per game: +2 followers per minion on Silver spaces." Over at every level: Normal 35% vs 29%, Hard 40% vs 30%, Very Hard 43% vs 25% (few games). The break-it bot won 7 of 7 with it and gained about 21 followers. Pays about 10 followers for 7. AI players loved it (fun 3-5). The only new card all three levels and the break-it bot agree is strong.

**Too weak or unused**
- **Counterfeiters** [3 yellow + 2 any, worth 1] "On Use, once per round: turn all of a rival's resources into one color you choose." Bots: under at Normal (24% vs 28%) and clearly under at Hard (18% vs 28%). AI players: the most powerful card at the table and a feel-bad ("picks who wins a contest each round"). Bots can't aim it; people can. Watch with people.
- **Snitch** [3 magenta + 2 any, worth 1] "Whenever a rival steals from you, they lose 1 follower." Hard: 14% vs 24%. AI players 1-2: "a 1-follower penalty never deterred anyone".
- **Night Traders** [3 yellow + 1 any, worth 1] "Round End: before contests are scored, swap up to 3 of your resources for other colors, one for one." Even at Normal, under at Hard (20% vs 27%). AI players: "mostly a threat, rarely used".
- **Heist Crew** [6 magenta + 2 any, worth 1] "On Use, once per game: steal half of a rival's biggest pile, rounded down." Bought in 4% of games even at 6 + 2; owners 17% vs 26%. AI players: Lie Low and Bodyguards blank it.
- **Matchmaker** [4 yellow + 3 any, worth 1] "Whenever you recruit a member of a color none of your members have, +2 wild, +1 follower." Bought in 11% of games, owners slightly under. AI players 1-2.

## 3. Rest of the game
- **Mannequin** [3 blue + 3 any, worth 1] "Blue members in the shop count as your members when contests are scored." Owners 21% vs 31% (Normal), 22% vs 32% (Hard). Already fixed in v0.99.611 (it counted against you in White's Fewest members).
- **Foster Parents** [2 red + 3 any, worth 2, counts as 2] "Whenever a member joins your cult from a rival's, +2 followers." Strong at Hard (41% vs 30%), even at Very Hard; the break-it bot did worse with it. Watch.
- **Cheerleaders** [6 any, worth 3] "Whenever you win a contest, +2 followers." The break-it bot gained about 16 followers; levels disagree (Normal +5, Hard -1). Watch.
- **Loyalists** [3 red + 3 any, worth 3, counts as 3] "Your other members can't be swapped." Under at every level (4-5 points).
- **Colors:** red players win the most at every level (+16 to +19 points over even). Green (echo) +10 to +39. Yellow and white sit below even with Normal and Hard.
- **Spaces:** **Makeover** ("+4 yellow, then rearrange your resources into any mix of colors.") and **Largesse** ("Give rivals up to 10 silver from the bank, split as you choose. +1 follower per silver you give.") are the strongest; **Recruit Twice** ("Recruit an extra time this turn. +3 blue."), **Savings** and **Estate Sale** the weakest.
- **Small cults:** winners with 5 or fewer members 31% (Normal), 35% (Hard), 48% (Very Hard). Bar 20%: met.
- **Comebacks (Hard):** the last player after round I still wins 21%; a winner was 10+ behind going into round III in 21% of games.

## Break-it bot (all 16 cards done)
Flagged as worth clearly more than its price: **Ballroom Dancers** and **Cheerleaders** only. Not flagged: Foster Parents, Martyrs, Picket Line, Tribute Band, Patron Saints, Kidnapper, Panel, Debt Collectors, Bodyguards, Song Request, Night Watch, Desperado, Anarchist, Brokers.
