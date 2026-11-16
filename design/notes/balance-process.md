# The balance and feel test (Nov 1)

Cory, Nov 1 (10:32 to 10:41am Eastern): run Normal, Hard and Very Hard bots on the 10-card deck; find a better way to test or make Very Hard stronger; judge the feel of every action, member and artifact (strategically relevant, enjoyable to pick, fits its color) so the output names reworks, not only number tweaks; add meta commentary on the game's feel (what's working, what isn't, where to focus revisions); and nothing that reads as "the bot doesn't know how to play". He approved running it all ("put as many resources behind this as you need").

## What the round must give Cory
One list, answerable by number:
1. **Number tweaks**: prices, follower values, member counts. The balance thread can ship these.
2. **Reworks**: actions, members and artifacts that don't feel strategic, fun or on-color, each with a direction (not finished card text: he designs the cards).
3. **Meta commentary**: what's working in the game, what isn't, and the two or three places design time pays off most.
Every line names the card with its full text and says which instruments back it.

## The instruments (each answers a different question)
1. **Win numbers, three bot levels** (who wins with what). Deck 10, the same seeds at every level, one color per seat as dealt, every 5th game one seat buys only followers.
   - Normal: 800 games at 4 seats, 300 each at 2 and 3 seats (runner 1).
   - Hard: 300 games at 4 seats, with the choice log (runner 2).
   - Very Hard, rebuilt: about 120 games at 4 seats, with the choice log (runner 3).
   - Read with `scripts/v4-balance-report.mjs` and the game-feel lens (`lens.mjs`), which tags each card DOMINANT / TRAP / DEAD / SLEEPER and SKILL+ / SKILL− across the levels.
2. **A stronger Very Hard** (so "the bot plays badly" stops being an excuse). Today's Very Hard looks 3x as far as Hard, and that alone beat Hard 25 seats to 17 (design/eval/hard-value). The rebuild keeps the same thinking but spends it better: every option it weighs is played out on the same dice (so two options are compared on the same luck, not different luck), it weighs 6 options instead of 4, and after each pass it drops the weaker half and spends the rest on the close calls. Head-to-head against today's Very Hard, tables played twice with seats swapped (`scripts/v4-bot-duel.mjs`, design/eval/vh-duel/). It only replaces Very Hard in the runs if it wins clearly; the in-game Very Hard is unchanged until it does.
3. **The choice log** (is a card a real choice?). Hard and Very Hard record every decision: what was on offer, which options they played out, what each was worth, what they took. `scripts/v4-choice-report.mjs` turns it into, per space and member: REAL CHOICE (often a close call against something else), AUTO-PICK (taken by a wide margin whenever it's there), FILLER (taken when nothing else is), DEAD (never weighed), and MISJUDGED (the cheap Normal bot rates it very differently from the lookahead, so Normal's numbers on it are suspect). This is "strategically relevant", measured by the strongest player we have.
4. **Expert AI-player games** (what it feels like). Four games, four AI players each, all eight 2.0 colors at two tables each, deck 10 (`scripts/v4-expert.mjs`, brief: design/eval/expert-games/player-brief-feel.md). Every move carries the player's reasoning and table talk; after the game each player rates every space, their artifact and every member they bought or weighed: strategic 1 to 5, fun to pick 1 to 5, fits its color, and why; plus a META note on the whole game.
5. **Paper read, per color** (does it fit, is it fun). Four color reviewers, two colors each, read the live card text, the color's fantasy (design-core.md), the numbers from 1 to 4, and the playtest answer key, and give every action, member and artifact one verdict: keep, number tweak, or rework (with a direction), plus "fits the color?". Every flag needs one played-out turn (4 players, a named round, the gain against the best other choice).
6. **The skeptic** (the bot-artifact filter). One reviewer whose only job is to knock recommendations down: is this only Normal (gone at Hard and Very Hard)? Do the expert players disagree? Does the played turn hold up? Is it price, not design? A rework survives only with at least two independent instruments behind it (bots at Hard or Very Hard, the choice log, expert players, the paper read). Number tweaks need the bots at two levels to agree on direction.
7. **Meta commentary**: one writer reads everything above plus past human playtests and writes what's working, what isn't, and where to focus design revisions, each claim tied to its evidence.

## Order and timing
- Now, before the fixes publish: the Very Hard head-to-heads (here and on the three runner boxes), the choice report, the expert-game brief.
- The moment the fixes publish (the "Balance the 10-card decks" thread sends the sha): all three bot runs start on that sha in parallel on the runner boxes; the four expert games start here.
- As results land: color reviewers, then the skeptic, then the meta writer, then one list to Cory.

## Guardrails
- Deck 10 only. White and Cash In aren't singled out (Cory: "don't single it out"); the general passes cover them.
- Recommendations only: nothing changes what a card does without Cory. Prices and counts follow his standing rules (lean pricier, never below 2, lift with followers before cutting price).
- Every number names its instrument. Bot findings on interaction cards need a played-out turn. Under 30 owners: "too few to read".
