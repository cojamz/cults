# A stronger Very Hard (Nov 1)

Head-to-heads, deck 10, 4 seats, each table played twice with seats swapped (`scripts/v4-bot-duel.mjs`). A is today's Very Hard (300 moves of lookahead, 4 options). Followers per seat are paired per table.

| B (the challenger) | tables | seats won A / B | followers A−B | read |
|---|---|---|---|---|
| paired dice + halving, 6 options, window 6, same 300 moves | 7 (box restarted mid-run) | 6 / 8 | −0.3 ± 4.9 | no clear gain at the same budget |
| same, 300 moves, tables 17 to 30 (runner 1) | 14 | 14 / 14 | −3.8 ± 3.3 | a small gain, inside the noise |
| same, 900 moves | 12 | 8 / 20 | −4.9 ± 2.1 | clearly stronger; A better on 2 of 12 tables |

Very Hard for the 1.0 balance round: `BOTOPTS='{"crn":true,"halving":true,"candidates":6,"window":6,"budget":900}' LEVEL=veryhard` (sims only; the in-game Very Hard is unchanged). It costs about 3x today's Very Hard per move.
