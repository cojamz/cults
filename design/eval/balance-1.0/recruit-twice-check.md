# Do the bots play Recruit Twice right?

**Recruit Twice** (Blue, opens in round II): "Recruit twice this turn. +3 blue."

Checked Nov 1 on the 10-card deck, for the 1:29pm question ("it can be a 20 follower swing").

## Short answer

The bots pick the space about right. They spend its two recruits a little badly. Neither comes close to 20 followers.

- **Picking it:** the bots take it in nearly every round III (more than 9 times in 10) and in under half of round IIs. When a bot holding 20 or more skips it, playing the game out both ways says the skip was usually right. On average, taking it and making two 10-follower buys ends about 2 followers behind the space the bot took instead.
- **Spending it:** the bots often use the second recruit on 1 follower so they keep a contest lead. Making two 10-follower buys does about 1 follower better on average. In some positions it does 8 or 9 better (the turn below is one of them).
- **Why it isn't a 20-follower swing:** you get a recruit every turn anyway, so one of the two 10s was coming regardless. The second one only adds followers if you'd otherwise end the game with 10+ unspent resources that aren't holding a contest. Spending 20 at once also costs contests: each color's contest is "most of that color held when the round ends", worth 10 followers in round III (5 each on a tie). The space is worth most on your last turn, and by then it's almost always gone.

## How each bot level judges it

- **Normal** (Easy is Normal with random noise added): for each open space it plays the space on a copy of the game. Then it scores the result: followers, contests, and what your resources can still turn into with the recruits you have left. It does count the second recruit. The space adds one more recruit to that count. That recruit is worth up to 10 followers, but only when your resources outrun your recruits.
  - Its quick read is a bit too low. In round III with 20+ held and 3 turns left, Normal rates Recruit Twice about 6 followers below its best space. Played out, the gap is about 2 to 3. Early in round III it rates it about 9 below, and played out the gap is about 5. So it undervalues the space by about 3 or 4 followers, but that isn't enough to change which space is better.
- **Hard and Very Hard:** they take Normal's best few spaces and play each one forward with Normal bots to the end of the round. In round III that means the end of the game. So their lookahead spends the two recruits the way Normal does: it buys with both most of the time, and sometimes uses the second on a 1-follower buy to keep a contest. In round III the lookahead turned down Recruit Twice after Normal's quick read had put it first 73 of 207 times (Hard) and 93 of 191 times (Very Hard). So looking ahead makes the bots like it less, not more.

## What the bots actually do with it

Sources: the 1.0 batch game records and choice logs (Normal 385 games with Blue on the table, Hard 204, Very Hard 191), plus my own replays. I replayed 385 Normal games and 14 Hard games with Blue on the table, recording what each player held at every turn.

**How often it's taken when open**
- Round II: taken in 42% of rounds (Normal), 45% (Hard), 48% (Very Hard).
- Round III: taken in 95% (Normal), 93% (Hard), 91% (Very Hard).
- In both rounds it goes late. The median taker had 1 turn left in round II and 2 in round III.

**What the taker holds** (Normal replays; Hard is similar)
- Round II: median 11 resources (14 after the +3 blue).
- Round III: median 21 resources (24 after the +3 blue). Over half held 20 or more.

**What the two recruits buy**
- Round II: never two 10-follower buys (0 of 161). Most often a member, then nothing (55 times), or two members (48). The second recruit went unused 55% of the time. In round II it is mostly "+3 blue and a member".
- Round III (Normal, 364 turns):
  - two 10-follower buys: 58 (16%)
  - a 10 and a 5: 43
  - a 10 and a member: 37
  - 5 followers, then 1 follower: 48
  - 10 followers, then 1 follower: 45
  - 1 follower and 1 follower: 22
  - second recruit unused: 64 (18%)
  - the rest mixed members and small buys: 47
- Hard and Very Hard choice logs, round III: two 10-follower buys in 22 of 190 turns (Hard) and 18 of 178 (Very Hard). The second recruit went unused (passed, or nothing affordable) in about 1 in 6 (Hard) and 1 in 8 (Very Hard).
- In the turns I traced, a 1-follower buy was the bot keeping a contest lead. Spending the color it leads would hand that contest to a rival.

**Players holding 20+ in round III who leave it open**
- In Normal games, 854 players held 20+ on a turn while Recruit Twice was open. 202 of them took it (24%) and 652 never did.
- Of those 652 skips, it went later to another player holding 20+ in 353 rounds, to a player holding under 20 in 267, and stayed open in 32.
- Most skips came early in the round: the player still had 3 to 5 minions. The bots took **Spree** instead 230 times in 1,618 such turns (Blue, round III: "Recruit 3 times this turn. +5 blue."). The rest were spread over 45 other spaces.
- On a player's own last turn, holding 20+, it was still open only 20 times in 385 games. The bot took it 16 of those 20 times.

**Is a skip a mistake? Played out both ways.** I took 163 real round III positions where a Normal bot holding 20+ left it open. From each, I played the bot's pick and Recruit Twice to the end of the game, 12 times each, on the same dice, with Normal bots for everyone afterward.
- With 3 turns left (76 positions): Recruit Twice as the bot spends it ends 2.5 followers worse than the bot's pick (±1.2). With two 10-follower buys made, it ends 1.8 worse (±1.3). The bot's pick won 31% of games, Recruit Twice 22 to 24%.
- With 4 or 5 turns left (87 positions): Recruit Twice as the bot spends it is 5.4 worse (±1.5). With two 10s made, it is 2.0 worse (±2.3).
- Two 10-follower buys beat the bot's own use of the two recruits by 1.2 followers (±0.8) across 104 positions. In a third of positions the gap was 5 or more.
- Making two 10s now didn't raise the player's final follower count compared with the bot's pick (about 0 difference). The 10s bought now are 10s the player would have bought on later turns.

**Win rates of takers** (game records): takers won 23% (Normal), 19% (Hard) and 24% (Very Hard). Other players won 29%, 31% and 30%. This fits a slightly weaker space taken late, by players who often have nothing better left. It doesn't fit a bot missing a big payoff.

**Resources left at game end** (Normal, 456 players): median 14 held, of which a median 6 weren't holding any contest lead. 35% of players ended with 10+ spare. For them, an extra recruit on their last turn would have been worth up to 10 followers. That is the one place the space shines, and it's rarely open then.

## One round III turn, played by hand

Game 437 (Normal bots; table Blue, Purple, White, Yellow), round III. P1 has 3 minions left, counting this one.

- **P1:** 26 followers, holds 24 (14 blue, 6 white, 2 purple, 2 yellow). Leader P3 has 34; P2 has 24, P4 has 25.
- **Contests now** (10 followers each at game end, 5 each on a tie): P1 leads Most blue (14 to P3's 8) and Most white (6 to P3's 5).
- **The bot's pick, Dilute** (Yellow: "+2 yellow, then change up to 3 of rivals' resources one for one."): +2 yellow. It changes 3 of P3's and P4's purple into other colors. Its one recruit buys **Window Dressers** (cost 4, worth 3). Its 10-follower buys come on later turns.
- **Recruit Twice:** +3 blue, so 27 held. A 10-follower buy (8 blue, 1 purple, 1 yellow) takes P1 to 36. A second 10-follower buy (the same mix) takes P1 to 46. Left: 1 blue and 6 white. That's +20 followers this turn, but the blue lead is gone: P1 has 1 blue, P3 has 8.
- **The bot's own Recruit Twice:** it buys 10 followers, then 1 follower, to keep the blue lead.

Played out 60 times from this exact position:

| Line | P1's final followers | P1 wins |
|---|---|---|
| Recruit Twice with two 10-follower buys | 64.8 | 50% |
| Dilute (the bot's pick) | 55.2 | 10% |
| Recruit Twice spent the bot's way | 55.5 | 10% |

Here the bot was wrong twice. It skipped the space, and had it taken the space, it would have spent it badly. Across all 163 positions this is the exception: on average the bot's pick ends about 2 followers ahead. The other way round, in game 427 P3 holds 20 with 3 minions left (and already has **Shopaholics**: "You can recruit twice each turn."). There, **Demote** (Red: "Swap a member with a shop or rival member costing up to 2 less. +3 red.") wins 80% of the 60 playthroughs, and Recruit Twice with two 10s wins 10%. With Demote, P3 swapped into **Snobs** ("Game End: +1 follower per blue member you have.") and bought **Mob** ("Game End: +1 follower per red member you have."), still took Recruit Twice the next turn (nobody had taken it), and made its 10-follower buy on its last turn.

## What this means

- The bots don't miss a 20-follower swing. One of the two 10s is the recruit every turn already gives. The other only pays when you finish the game with 10+ spare resources, and spending 20 at once usually costs a contest worth 5 to 10.
- The bots do have one real weakness here. They use the second recruit to protect contests more than they should. That costs about 1 follower on average, and up to about 9 in some positions. Normal also rates the space about 3 or 4 followers too low, though it still picks the right space most of the time.
- Most of the shortfall is the space itself. It's worth most on a player's last turn, and it's open then in 1 game in 20. In round II it mostly means "+3 blue and a member". In round III, **Spree** sits beside it and does the same thing bigger.

How this was measured: game records and choice logs from the 1.0 batch, as they are. My own replays used today's rules with the batch's seeds. The rules changed slightly after the batch, so the replayed games don't match the recorded ones exactly.
