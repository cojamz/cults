# Action test on the finished actions (v0.99.726, Nov 11)

What went in:
- **Bot games**: 400 games with Hard bots and 4 players, on today's game: 10-card decks, each color its own contest, and each space's +1 paid only to its first taker. 200 games are the game as it is, and 200 are the same deals with Tribute Band swapped for Ensemble.
- **AI players' games**: 3 games, each with 4 AI players who wrote a diary after every round. The tables were White, Blue, Magenta and Yellow; then Red, Green, Purple and Silver; then Yellow, White, Red and Purple. A fresh judge read all of their diaries.

Findings come first when both kinds of game agree. Anything that rests on one AI game says so. The full tables, transcripts and judge reports are in the repo under design/eval/action-balance-2026-11-11/ and design/eval/feel-games-2026-11-11/.

## Both kinds of game agree

1. **Greatest Hits** (Green, round III) "Choose a color other than green. Copy every action with a minion on its spaces. +1 green."
   - In the bot games, one minion there earns about 25. A typical round III space earns about 11.
   - Its takers won 54% of games, where players who ended with as many members won about 28%.
   - In the AI game with Green, all four players named it as the moment of round III. One player took it and two more copied it the same lap (Reprise into Echo, then Cover), so it paid three players.
2. **Silver's round II spaces sit empty.**
   - **Flaunt** "+1 of each other color per 3 silver you hold, up to 3 each. +1 silver."
   - **Buyout** "Recruit a rival's member, paying them its cost in silver. +1 silver."
   - In the bot games, Flaunt was left empty in 73% of the rounds it was open and Buyout in 82%. When Buyout is taken, its takers do worse than players as wide.
   - Every AI player scored both a 1. Their reason: holding silver loses Silver's own contest, and nobody had enough silver for either to pay. Buyout was only ever taken as the last space left.
3. **Purple Cloak** "Whenever you take the Goes Last token, +3 purple."
   - In the bot games, players who picked it won 41 to 44%, where 25% is an even share. The next best cloak was White at 30%.
   - In the Red, Green, Purple, Silver AI game, the winner (121 followers, against 80 for second) won the Went last contest all three rounds and bought followers 10 at a time with purple.
   - In the other AI game with Purple, rivals took the Goes Last token from the Purple player four times, and that player lost.
4. **Cash In** (White, round III) "Turn all your white into followers. +1 white."
   - It was never taken in any of the three AI games. Their reason: buying followers already turns white into followers 1 for 1, so it adds only the +1.
   - In the bot games it was left empty in half the rounds it was open.
5. **Crunch Time** (Purple, round II) "+2 purple. Your next two turns come right after this one."
   - In the bot games it was left empty in 60% of the rounds it was open.
   - In the AI games it was taken only as filler, scored 1 or 2, and does nothing when it lands on a player's last minion.

## What players liked (AI games)

- **Swapping members** is what players said they would come back for. Promote and Demote scored 4 or 5 from all 8 players in the last two games.
  - **Promote** "+3 red. Swap any member for one costing up to 3 more, from another cult or the shop."
  - **Demote** "+3 red. Swap any member for one costing up to 3 less, from another cult or the shop."
  - **Write-Off** "Give a member to a rival for its cost in white. +1 white."
  - The Ghost (−5 followers to whoever holds it) moved 4 to 5 times a game and was every player's highlight. One player called it too swingy.
  - The catch, from the diaries: the swaps mostly moved points among the three players chasing the leader.
  - In the bot games, about 4.5 members leave each player's cult a game, half of them through Promote and Demote.
- **Late Shift** (Red, round I) "Recruit a shop member costing up to 2 per minion you've placed this round, for free. +1 red."
  - Taken every round in the AI games. Players raced to place their third minion first, a real timing choice.
  - In the bot games it earns about 4 more than a typical round I space, and its takers win at an even rate.
- **Offering** (Yellow, round III) "+5 yellow. Each rival discards 2 of each color among your members."
  - In the bot games, rivals lose about 9 resources between them each time it's taken, and its takers win at an even rate.
  - Taken once in the AI games: timed before rivals' last buys, it cost three players 9 resources, and its taker said it "felt great". Too few games to judge its size.

## How the AI games were won
- In the last two AI games the winner held one contest every round that rivals couldn't reach, then bought followers 1 for 1 almost every turn. The first game's winner also played a small cult, with the White Cloak and Anchorites.
  - In one game it was Went last with Purple, as above.
  - In another it was Fewest members, with zero members and the White Cloak, which gives back 2 white on every follower buy.
  - Swaps couldn't touch a player with nothing worth taking. One player said "nothing in the game punishes holding zero members."
- In the bot games, winners had 5 or fewer members in 48% of games. The bar is at least 20%.

## Your questions from today
- **Red's supply** with Late Shift in Trending's place: the player who used Red's spaces most gained about 17 red a game. That is about the same as Green (15), Yellow (19) and Blue (18). It's not short.
- **Tribute Band out, Ensemble in**: no measurable change, the same result as the first run. Winners with 5 or fewer members were 48% either way, and winners scored 81.6 followers either way.

## Notes for the members pass (AI players, not acted on here)
- **Spoilsport** "Round End: choose a contest; nobody wins it this round." decided the first AI game by cancelling a round III +10.
- Players misread "counts as N members" against the Red contest's "each card counts 1", and grey members not counting as a color for Yellow.
