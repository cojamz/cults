# Bot and AI-player audit (Nov 11-12)

Cory, Nov 11: "crunch time is good. your bots suck. your AI players seem legit terrible you should audit them".
All bot games: Hard (budget 40, as the action test plays), 4 players, today's rules (10-card decks, By color, +1 once a
game), Purple at every table, 50 tables each played twice with the two settings in alternate seats
(scripts/v4-bot-duel.mjs, FORCE=purple TODAY=1). Followers are per seat, new minus old, ± standard error.

## Why the bots skip Crunch Time
Normal (and Hard's shortlist) judges a placement on a copy of the game with no turn queue, so "your next two turns
come right after this one" was worth nothing: Crunch Time read as +2 purple. That is a real blind spot.

| Setting | Crunch Time taken (rd II / rd III) | Followers per seat | Seats won (of 400) |
|---|---|---|---|
| tempo credit (spaces those turns get before rivals) vs old | 34/75 vs 5/6 | -2.2 ± 1.3 | 45 vs 60 |
| Hard plays every turn-moving space out vs old | 95/99 vs 1/1 | -6.0 ± 1.3 | 44 vs 65 |
| made to take Crunch Time with a first or second round II minion vs old | 100 vs 0 | -1.1 ± 1.2 | 49 vs 57 |

- Hard's playouts stop mid-round (40 moves), so a line where the bot just placed three times in a row is scored before
  rivals answer: they flatter Crunch Time and Right Away. That is why the second setting took them nearly every time
  and lost 6 followers.
- Taking Crunch Time early every game is even with the old play (-1.1 ± 1.2). For these bots it's a break-even
  space, not a missed good one. Both switches stay off (BOTTEMPO, opts.tempo true|'look'); the force option in the duel
  script stays for the next test.

## The other spaces
- Flaunt, Buyout: the bots' estimates match what they pay at the silver players hold (under 3 at 93% of round II
  placements): silver-held-round2.md in action-balance-2026-11-11. Not a bot misread.
- Cash In: bots take it late in round III (pick 18 of 20), when the white pile is largest; its takers win 8 points
  more than players as wide. Not a bot misread.
- Agents: also stops its owner copying their own actions (Reprise, Greatest Hits), and the copies it stops are spread
  over three rivals; holders do 5 to 11 points worse than players as wide in every run. Bots skipping it is right.

## AI players
They misread rules, not the spaces' worth: "buying already does that" on Cash In (each recruit buys one batch, so
Cash In saves recruits), Crunch Time used as filler on a last minion (it does nothing there), "counts as N" against
Red's each-card-counts-1. design/notes/expert-primer.md now states these plainly.

## Borrow: a real bot bug, fixed (Nov 12)
Replaying the AI-player games move by move (scripts/v4-ai-audit.mjs, design/eval/ai-audit-2026-11-12/) showed the bots
rating **Borrow** ("Recruit the cheapest shop member, for free. Discard it at round end, before scoring. +1 red.") far
above what the AI players did. The bots' forecast counted the borrowed member as kept: its followers, its place in
member contests and its ability. Bots took Borrow in 93% of the rounds it was open and its takers won 20%.
The fix drops members still on loan from the forecast. 50 tables with Red at every table, played both ways:

| Setting | Borrow taken | Followers per seat | Seats won (of 400) |
|---|---|---|---|
| fixed vs old Hard | 5 vs 246 | +4.4 ± 1.3 | 72 vs 34 |

On by default (BOTBORROW=0 turns it off). Balance numbers that involve Red's Borrow change with it.

## Keeping silver for Flaunt (Nov 12; Cory: "you should just forego the followers to get the resources")
A Hard seat that keeps all its silver through round I (decides as if it held none, never pays with it) and takes
**Flaunt** ("+1 of each other color per 3 silver you hold, up to 3 each. +1 silver.") with its first or second round II
minion, against normal Hard, Silver at every table, 49 tables played both ways (98 games, BOTBORROW on for both):

| Setting | Followers per seat | Seats won (of 392) | Silver held when taking Flaunt |
|---|---|---|---|
| keep silver, Flaunt early vs normal Hard | -4.0 ± 1.1 | 39 vs 62 | 3.6 on average |

Even never spending silver, a player reaches about 3.6 silver by round II, so Flaunt pays +1 of each other color
(3 resources), not 9, while the player gives up round I's Fewest silver contest and the buys that silver would have made.

## Five more spaces the bots take while their takers do worse (Nov 12)
In the action test these five were taken most rounds while their takers won less than players as wide. If the bots
overrated them, a Hard seat that never takes them would beat normal Hard. 40 tables each with that color at every
table, played both ways (80 games, Borrow fix on for both; bans/ has the games):

| Hard that never takes | Followers per seat vs normal Hard | Seats won (of 320) |
|---|---|---|
| Largesse (Silver III) | -1.4 ± 0.9 | 39 vs 44 |
| Test Drive (Blue I) | -1.1 ± 1.5 | 40 vs 40 |
| Word of Mouth (Blue II) | -0.4 ± 1.2 | 43 vs 42 |
| Gather (Red I) | -1.5 ± 1.5 | 45 vs 44 |
| Makeover (Yellow II) | 0.0 ± 1.2 | 43 vs 41 |

None helps: the bots don't overrate these. "Takers do worse than players as wide" comes from who takes them, not from the
space. Use these duels (scripts/v4-bot-duel.mjs ban/force/hoard options) before calling a space a bot misread.

## The +1 once a game (Nov 12; Cory: "it impacts what you do in the game")
Bots read each space by running its text on a copy of the game, where the printed "+1 <color>." always paid, so a
space already claimed read 1 resource too high. With the fix (BOTPLUS1=1) a claimed space reads without it.
50 tables of random colors played both ways (99 games, today's rules):

| Setting | Followers per seat, paired by deal | Seats won (of 396) |
|---|---|---|
| +1 read right vs today's bots | -1.2 ± 1.1 | 48 vs 56 |

No measurable change: 1 resource rarely moves a bot's pick. Left off. The AI players' view now marks each space whose
+1 is still there (a table shows a dot), and their notes say so.

## Build Up first (Nov 12, Cory: "they took Build Up first")
Normal valued a round I contest lead as 75% sure to hold, so an early lead looked worth a space. With early leads read as less sure (0.45 + 0.3 × share of the round played), paired duels on the same deals: Normal 800 games +0.36 ± 0.43 followers a seat (no loss); Hard (budget 40) 50 tables −1.54 ± 1.13 (slightly worse, not proven). So it's on for Normal and Easy picks only; Hard's look-ahead plays out without it. BOTLEAD=0 turns it off.
Step 2 (Nov 12 evening, Cory: "why would they ever take it first?"): a contest of minions on spaces (Green's, Purple's went last) starts again each round, so Normal no longer counts a minion there toward later rounds. Normal opens on Build Up on 17 of 94 tables (was 92, then 44). Same deals, 400 Normal games, fixed against unfixed: +1.22 ± 0.62 followers a seat for the fixed bots.

## Test Drive picks (Nov 12, Cory: "I bet bots are picking terrible options")
scripts/v4-choice-check.mjs plays every Test Drive option to the game's end with Normal bots, 8 Normal games with Blue at the table (23 picks), then replays the bot's pick and the best found on 16 fresh deals (the best of several noisy playouts always looks better than it is). Before: the best beat the bot's pick by 3.10 ± 1.25 followers per use. Main cause: a choice that gives +1 minion this round (Extra Hand through Test Drive) was read as worth nothing, since the bot's copy of the game never counted the new turn. Fix: the chooser's extra minions count as whole turns (a buy plus a full turn's income). After: 2.36 ± 1.01, and Extra Hand is taken in round III where it was best. Same deals, 400 Normal games with and without: +0.20 ± 0.26 followers a seat (no loss). BOTMINION=0 turns it off. Left: Martyrs and Spoilsport sometimes best and passed over; taking a strong member away from rivals isn't counted.
