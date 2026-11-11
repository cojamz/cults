# Plan: actions finished, then balance and feel testing (Nov 11)

Written by the "Plan action balance and feel testing" thread from Cory's message of Nov 11, 1:37pm Eastern (cmsg_01PySa5gYMfCiexiWTLrWgo3Rw3zR68BmoeEPT5wU5Pe2o). Member triage (cut, keep, unsure) has its own thread.

## Where things stand (live v0.99.723)
- **Done**: Green, Blue, Purple, Magenta (round I is the +3 stand-in Stash, his call), Silver.
- **Still open**:
  - **White**: the third round I slot is the +3 stand-in Nest Egg. The round II space that touches rivals is waiting on his pick.
  - **Yellow**: these are his calls and are not built yet: Makeover moves to round II in Housewarming's place, and Yellow needs a new round III. Housewarming itself is still open.
  - **Red**: a space that gets better later in the round is being brainstormed.
- **Already live**: today's game is the Test version, and each space's +1 is paid once a game by default.

## Order of work
1. **Finish the actions** (the White, Yellow and Red threads). "Ready" means every slot on every color has a built space, with no call of his still waiting to be built. A stand-in he chose (Stash, Nest Egg) counts as ready. Each thread ships as soon as its piece passes; no batching.
2. **Ship** the last of them (standing approval to publish).
3. **Action balance run** with the new harness (below): 200 Hard 4-player games of today's game, run twice, once as the game is and once with Tribute Band out and Ensemble in. A space is flagged only when both runs agree. It takes about 2 hours on this box.
4. **Feel playthroughs**: 2 games, each with 4 AI players using the round-diary brief, then a fresh feel judge writes the report. It takes about 2 hours with the games side by side.
5. **One page to Cory**: spaces flagged by both the numbers and the feel games come first, then those flagged by only one, then the members section. Each finding says what happens at the table and what kind of change would fix it. His calls get built and shipped, and only the colors that changed get a rerun.

## The action balance harness (built today)
`DECK=10 node scripts/actions/run.mjs --games=200 [--only=base,no-tribute,plus1-every]`. It plays the games and writes one report per variant (`scripts/actions/report.mjs`).
- **Setup**: today's game: 10-card decks, By color contests, the Test version's members, each space's +1 once a game, Hard bots, tables of 4 random colors.
- **What it reports for each space**:
  - how often it is taken when open, and in which round
  - how early in the round it goes
  - what one minion there earns its placer and the rivals that turn (followers, resources, and members at their price)
  - how its takers do compared with players who ended with about as many members
- **Each color's own resource** (Cory, Nov 11, on Red getting Late Shift for Trending: "we need to consider how to get more red resources ... lets just try it and see what the testing says. We could always add +1 red"): how much of it each player gains, and how much the player who used that color most gains and how many of its members they end with. If Red's comes out short, that goes to Cory with the +1 red option.
- **For each color**: its share of placements, and how much of the winner's play went there. It also gives cloak win rates, the winners-with-5-or-fewer share, and the follower totals.
- **Members get their own section**: who ends the game holding each one, and how they do compared with players as wide. That keeps the member read apart from the spaces without needing separate games.
- **Replacement Green**: `membersOut`/`membersIn` (a rule that bot runs and expert games can set) swaps Tribute Band for **Ensemble** ("Whenever you copy your own action, +1 follower."), worth 3 and counting as 3 members like Tribute Band, so the Green deck stays at 10. Ensemble is Claude's stand-in from Green's own cut cards; the members thread can name a real one.

## Feel playthroughs (built today)
- `DECK=10 node scripts/v4-expert.mjs new <dir> --today --diary [--out=echo.dejavu --in=echo.ensemble]`, then `brief <dir> --brief=round`. Four agents each play one seat from their brief.
- **The players' brief** (design/eval/expert-games/player-brief-round.md):
  - Every placement gives its reasoning and a tag: hard, obvious or stuck.
  - The tool won't let a player start a new round until they write a diary of the round just ended. The diary covers their best move, a regret, how many choices were hard, obvious or stuck, what a rival did that changed their plan, the biggest swing, and fun from 1 to 5.
  - Postgame scores: satisfying choices, dynamic, impactful, arc, comeback, fun and clear. Then one line per space and, kept separate, one per member.
- **The judge** (design/eval/expert-games/feel-judge.md) counts the tags before reading any opinions, checks each score against how that player actually played, quotes the moments, and gives each space a verdict: working, always taken, never wanted, feel-bad, unclear, or too few games to say.

## Members: Claude's call
There will be no separate member balance run now. The member triage thread flags cuts tonight. Until his cuts and replacements are in, member numbers would measure cards that are about to leave. The action games already record members (their own report section, plus the MEMBER lines in the feel games), so each run also gives a member read for free. A member-focused run happens once the replacements land: the same harness, its member section, and one feel game.

## Economy
- **Baseline (running now)**: 60 Hard games each, on the same deals:
  - +1 once a game, today's prices (every member 3 over printed)
  - +1 once a game, members 1 cheaper (2 over printed)
  - +1 once a game, members 2 cheaper (1 over printed)
- **What it reports**: members recruited per round against his pace (1, then 2, then up to 5), wins with 5 or fewer members, follower totals, rounds where nothing in the shop is affordable, and leftovers.
- **"Settled" means all four of these hold before the bigger economy test**:
  1. every color's spaces are ready (step 1 above)
  2. his member cuts and their replacements are built, with every deck back at 10
  3. he has picked the member price level from the baseline
  4. Tribute Band is decided
- **The bigger test then pulls the other levers one at a time against that baseline**: follower card rates, contest prizes, cloak starting resources, the round I deck limit, and space gains by round. The same report as above, plus one feel game on the best two.
