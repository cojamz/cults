# Bot misplays reported by other threads (Nov 4), to work through

Each line: the card's text, what the bot did, what a sensible player does, and the general gap behind it.

- **Encore** ("On Use, once per game: your next On Recruit happens twice."): used on the turn bought, or with no On Recruit member to recruit, or swapped away unused. Gap: a use that only pays on a later buy looked like zero, so the card's rule decided. BOTSMART measures it on the buy (followUpGain).
- **Hot Streak** ("On Use, once per game: +3 followers per turn in a row you've taken just before this one."): 88% of 298 uses in round III with 1 turn in a row (+3). Gap: no plan to chain turns (Crunch Time) before using it; any +3 cleared the use bar. Open.
- **Party Crasher** ("On Use, once per game: your next minion can be placed on a space a rival already took."): spent at first chance in round II. BOTSMART judges it on the placement it opens (placeUse).
- **Debt Collectors, Godparent, Debutantes, Godfather**: fired the turn bought (Lab, 900 games). Same now-or-later gap.
- **Quilter** ("On Use, once per game: turn up to 3 full sets into 6 followers each."): held about 4 full sets in round III, offered Use several times, never used; lost 73 to 81 (quality/evals/play/quilter-h1, seed 12404). To trace: useGain likely threw or rated 0.
- **Dyer** ("On Recruit: +1 yellow per color you hold. Round Start: +1 yellow per color you hold."): bought for 7 in round III after the last Round Start, when 7 followers was better.
- **Tryout** fired an On Recruit that gave nothing (buyersclub-h1 base, game 6, round I).
- **Open Bar** ("+2 silver. This round, whenever a rival takes a Silver space, +1 follower."): taken after the other Silver spaces were gone. Gap: payoffs that come later in the round are invisible to the quick ranking, and Hard only looks ahead from its top 3.
- **Snobs** ("Whenever a rival recruits a member costing 3 or less, +1 follower."): bought on the last buys of round III. Gap: rival-triggered payoffs aren't forecast by recruit timing.
- **Roadie** rework ("Whenever you copy an action, +1 green per green member you have."): owner never chose copy spaces; swapped it away after its first +3.
- **Night Watch** rework ("Whenever any player takes the Goes Last token, +1 follower per minion on it."): took Sleep In over an open Last Call showing +6.
- **Early Birds** rework ("If you place the round's first minion, your next turn comes right after it."): swapped away the turn it fired. Gap: its value estimate is small.
- **Dabblers** ("Counts as 2 wild members."): bots count it through the game's own counting; Round End payouts it feeds (Mob) weren't forecast for any recruit. BOTSMART adds them (roundEndPay).
- **Lamplighters** ("Whenever you take the Goes Last token, +1 follower per color you have a minion on.") bought while holding old Early Birds ("Your turns can't be skipped"), which stops its owner from taking the token: a dead card (quality/evals/play/lamplighters-h1, game 4 B, moves 77/90). Gap: a recruit's value ignores conflicts with members already held.
- **Night Watch**: paid 5 purple to keep it under Shake Down, then cast it out with Farewell the next turn (lamplighters-h1 game 2 A, moves 78 and 84). Gap: no consistency between turns.
- **Meddler** rework ("On Use, once per round: change 1 of each rival's resources one for one. +1 follower per rival changed."): used, then picked "Change nothing", losing +3 (quality/evals/play/meddler9-h1 game 2 B move 131). Bought on a last turn for 4 followers in all when 6 were on offer for the same resources (game 1 B). To trace: the change picker rating.
- **Splurge** ("This turn, if you recruit a member, +1 follower for every 2 resources you pay for it (every 1 in round II). +1 white.") and candidate **Patron**: bot takes the space, then recruits nothing with an affordable member in the shop (15 of 20 sheets, play/ab/patron, bots 58aca38a). Gap: a space is rated without the buy that follows it on the same turn.
