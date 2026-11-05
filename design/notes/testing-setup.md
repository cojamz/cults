# How we test Cults: six checks, and when to use each

Everything below already exists; this page puts it in one order so we can pick pieces per change.

## The six checks

**1. Does it work (rules checks).** Automatic tests on every rule and card, a check that every card actually fires in real games, random-move games that hunt crashes, and the browser checks. About 6 minutes. Runs on every change, no exceptions. Answers: does the card do what its text says.

**2. Does the text match (wording review).** Every space and member's words beside what the game actually does and what the wheel prints. A few minutes. After any new card or wording change. Answers: will a table read it right the first time.

**3. Card trial (one card vs the one it replaced).** Bots play the same 120 deals twice, once with the new card and once with the old, so luck cancels out. Reports how often it's bought, how often its owner wins, and how winners won. Hard bots by default; an hour or two per card, shared across boxes. Answers: is this card too strong, too weak, or priced right, against what was there before.

**4. Whole-game balance run.** Every color and member across hundreds of games. Win rate per member, color, space and cloak; dead cards (never bought), dominant cards (owners win far above 25%), trap cards (bought but owners lose); whether players behind can catch up; whether one player can hand someone the win; game length; small-cult wins (bar: at least 20% of winners with 5 or fewer members); and an abuse hunt where one bot tries to break each card. Fast size about 1 hour, deep size overnight. Answers: is the whole game fair, and what's the next problem.

**5. Skill check (bot ladder).** One stronger bot seated against weaker ones. If the better player wins clearly more, the game rewards good play and the weaker bots' numbers can be trusted less. About 30 minutes. Answers: does skill matter, and which bot level to believe.

**6. Feel.** AI expert players play full games and talk at the table, then rate every space and member they touched for "a real choice" and "fun to pick" (1 to 5) and say whether it fits its color. Then a critic reads the games and a skeptic tries to knock down every finding. About 2 hours for 4 games. Answers: is it fun, is it a real decision, does it feel like its color. Your own playtests sit above all of this.

## Which bots for what
- **Normal:** cheap, so we get lots of games. Good for "is something badly broken". Weak: one Hard bot beats three Normals 60% of the time, so trust a Normal number only when Hard agrees.
- **Hard:** the default for prices and win rates.
- **Very Hard:** 3x the cost per game. Use it to confirm a strong combo or a card that only shines with careful play, and as the tie-breaker when Normal and Hard disagree.

## Which checks for which change
- **Price change (one card, ±1):** 1, plus a trial at Hard. About 1 hour.
- **New or reworked card:** 1, 2, a trial at Normal and Hard, and the card rated in at least 2 AI-player games. A few hours.
- **A batch of changes (like tonight):** everything. All six, trials at Normal, Hard and Very Hard, and a before/after against the previous live version on the same deals. Overnight.
- **Before calling a version 1.0:** the deep balance run plus feel games on every color.
- **Bot changes:** 5 only.

## The answer you get back
One page per test: for each changed card, worked / needs adjusting / unclear, with its win rate before and after, how often it's bought, its feel ratings, and one played turn showing why. Then the 3 biggest problems in the whole game, and whether it feels better or worse than last version.
