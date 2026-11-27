# Is there skill in Cults? What we'd test

Nothing here has been run. This is the list to pick from when you say go.

## What skill is (from our talk, Nov 12)

A good player does three things, and none of them is a rule. They are things to weigh each turn.

1. **Counts the real score.** Where each player will finish, with what their members and contests will still give.
2. **Judges a move by the finish.** How it changes their finish against the player they must beat. A gain for me and a loss for them count the same.
3. **Plays the reply out first.** What rivals do next, what is gone before my turn returns, whether they can take it back.

What that looks like at the table:

- Knows who is really winning (you: "Six is a huge one")
- Knows where their own followers will come from
- Has a rough worth for a member in their own cult, and doesn't write off an expensive member whose payoff is hard to count
- Sorts contests into easy, a stretch, or not worth it, and drops the stretches
- Knows when to stop recruiting and buy followers
- Stops a rival when it's cheap and that rival is a real threat
- Picks the space and the buy as one decision, after looking at the shop and the discard pile
- With member moves: which member to take or give, and whether they can just take it back

## What the Hard bots do today

- **The score:** they do guess every player's finish, but roughly. Followers now, plus what resources could buy, plus every contest they lead at the same fixed odds, plus a flat rate for members' abilities.
- **Contests:** every contest they lead or tie counts the same. They don't ask which ones are easy to keep and which are a stretch. This matches what you saw.
- **Rivals:** they count the strongest rival's finish against their own, at less than half weight. They never ask "is this rival a real threat".
- **Looking ahead:** they take their 3 best-looking moves and play each to the end of the round (to the end of the game in round III). Nothing looks across rounds.
- **Space and buy:** the space is rated by what its resources could buy in followers. The member to buy is picked after. So the two are mostly decided apart, which is what you warned about.

## Three questions to answer first

**A. How much of a game is luck?**
Seat four identical Hard bots and play the same deal many times with only small differences in close calls. If the same seat keeps winning, the deal decided the game (starting seat, cloak, shop). If the winner moves around, play decided it. This gives us the ceiling: the share of games skill could ever change.

**B. Does thinking more win more?**
One bot seated with three bots one level weaker, at every level: Easy, Normal, Hard, and Hard looking three times as far. With no skill in the game the stronger bot wins 25% of games. You said on Nov 5 more thought should win "drastically" more often. If looking three times as far wins no more than Hard, either the game stops rewarding thought there or the bot's judgment is the limit, and question C tells us which.

**C. Does each skill win more?**
One seat gets one new habit, the other three play as Hard does today. Same deals played both ways, seats rotated. We count games won out of 100 (25 means no gain) and followers gained per game.

## The habits to test, one at a time

1. **Counts the real score better.** First check how often the bot's guess of the final order at the end of round I and II is right. Then give it a better count of what members will give at game end. Guess: this is the biggest one, since every other choice leans on it.
2. **Contests by ease.** The bot looks at how far ahead it is, how many turns rivals have left and what they hold, and gives up a contest that needs a stretch. Guess: wins more, and games end with fewer resources wasted on lost contests.
3. **Stops only a real threat.** The bot weighs harm to a rival by how likely that rival is to win, and ignores a rival far behind. Check alongside: the leader should not lose just because three players pile on. You don't want that game.
4. **Space and buy together.** The bot rates each space by the best member or followers it could buy with it this turn and next, from the shop as it stands. Guess: clear gain in round I and II, where one resource decides what you can recruit.
5. **When to stop recruiting.** The bot compares a member's rough worth over the turns left against the same resources as followers, with extra room for an expensive member that feeds what it already has. Guess: small gain, since the bots already do a plain version of this.
6. **Member moves and the reply.** Before taking or giving a member, the bot checks whether the rival can take it back or undo it on their next turn. Guess: matters only at tables with member-moving colors.
7. **A payoff in mind.** After round I the bot names where most of its followers will come from and leans its close calls that way, and drops the lean when the table changes. Guess: unsure. You said the game is meant to make plans hard to follow.

## Fake skill

If a habit sounds smart and wins no more, the game doesn't reward it. Each of those comes to you as a question: should the game reward this, and what would have to change.

## Cheap bots, smart ideas

Your principle: the smart AI is for ideas and for building the bots; the bots themselves run on plain rules for weighing things. How that could work: the smart AI is shown real positions from bot games and says what it would do and why. Where it disagrees with Hard, that is a candidate habit. We write it as a plain rule, test it as in C, and keep it only if it wins more.

## Is it improving over time?

Keep one fixed bot as the yardstick (today's Hard). Every habit that passes joins the "best bot". After each change we play best bot against the yardstick on the same deals and add one line to a running page: date, what changed, games won out of 100. Your own games against Hard bots go on the same page.

## Order I'd run them in

A and B first (about an hour of bot games together). They tell us how much room there is before we build anything. Then habits 1, 2 and 4.
