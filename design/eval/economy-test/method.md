# Economy test: how it works (Nov 7)

Cory, Nov 7: "a robust test to give us some good analysis and qualitative sense of what economy tweaks make the game
feel more fun"; "don't set a member card target... observing numerically what happens, and also how it feels (need
really good judges/evals for this)"; "uplevel the robustness of the testing harness".

## Dials (bot games only; the browser game is untouched)
MEMBER_UP (every member's extra), MEMBER_COLOR (how much of it is its color), SPACE_GAIN (each space's printed gain of
its color, +/-), CLOAK_GAIN (each cloak payout, +/-), CLOAK_START (resources with your cloak), R1_LIMIT (round I deck),
FOL_MID / FOL_TOP (followers the 5 and 10 buys give; 1 for 1 never changes), PRIZES (contest prizes by round).
Cards that name a cost move with MEMBER_UP. Code: src/engine/v4/content/price.js (ECON), core.js econRun/econAdjust.

## Numbers (scripts/econ/play.mjs, sweep.mjs, report.mjs)
1. Screen: every mix in mixes.mjs, 60 Hard games each (budget 40), the same deals for every mix, 4 players, 10 deck,
   By color. Every 5th game one seat only buys followers.
2. Paired read: each mix minus today on the same games, with 90% bootstrap ranges; only ranges that miss 0 count.
3. Confirm: the shortlist again at 200 Hard games, plus 300 Normal games as a second kind of player. A finding counts
   only when both agree on the direction.
4. Repeat check: a block of games replayed must match exactly (Hard here is deterministic).

## Feel (scripts/econ/sheets.mjs, judge-brief.md)
1. Shortlist about 5 mixes that differ most, plus today as a hidden control.
2. For each: 3 whole games on different deals, each written out for a different seat, filed under a random letter. The
   key lives outside the judges' folder.
3. Three fresh judges per mix, each a different player: Cory's taste (taste-guide.md and his quotes), a seasoned
   worker-placement player, a casual friend at the table. Each judges A to G and Overall on the brief, citing turns.
4. Agreement: a criterion where the three judges differ by 2 or more points gets a fourth judge, and the report shows
   the split. One write-up is given twice under two letters to test whether judges repeat themselves.
5. Tiers combine both: feel decides the tier (Cory: "the qualitative is more important"); numbers explain why and
   flag anything that breaks (dead turns, runaway leaders, a plan that never wins).
