# Why buying only followers got better (Cory, Nov 25 1:39am: "hmm why did it become so much better to only buy followers?")

Method: the same Normal-bot 4-player games (DECK=10, By color contests) replayed at each build with that build's own scripts/v4-balance.mjs; a seat that only buys followers sits in every 5th game. Raw: /tmp/claude-0/bisect (box-local).

| build | follower-only seat won | its followers |
|---|---|---|
| 0e4119d7 Nov 6 (v0.99.606) | 18% (113 games) | 68 |
| 4979f947 before "every member costs 2 more" | 18% (80) | 68 |
| f597081d after it | 15% (80) | 70 |
| 07296f4e before the Nov 7 contest change | 20% (80) | 66 |
| 93f8fd05 after it (Red most of one color, White fewest members 0 counts, Silver fewest silver 0 counts) | 41% (80) | 77 |
| c36466be Nov 7 end | 31% (80) | 76 |
| e1d9770b Nov 9 | 31% (80) | 77 |
| 72af9dd6 / fe6185aa before/after every member worth 1 | 31% / 32% | 77 / 76 |
| 34bce463 / 8c8ae170 before/after Gold deleted | 30% / 32% | 75 / 76 |
| today (v0.99.804-806) | 30% (60) and 45% (80) | 75-77 |

Mechanism: with 0 members the follower-only seat wins White's "fewest members" contest in 85% of rounds (an ordinary seat 11%), Green's 81% (40%), Magenta's 50% (20%). Tonight's changes did not move it. The fast run's "Hard 7% to 25%" rested on 48 and 24 games and was withdrawn.

## Correction (Nov 25, 7am, after Cory: "white isn't in every game... gold wasn't even really in the game")
Tables deal 4 of 8 colors at random (each color in ~50% of games); Gold was never dealt. The 85% figure was over rounds where White was dealt. Pooled post-Nov-7 builds (~440 follower-only games): White dealt 43% wins, not dealt 18%; pre-Nov-7 21% / 15%. White contest: follower-only seat wins alone 54% of rounds, ties 32%; any other seat alone 2%. Green: alone only 15% (the 81% was mostly ties). Magenta: alone 43% vs 14%. The follower-only bot never buys from the shop; spaces or rivals hand it a member in ~half its games; it ends with 0 in ~6 of 10. Script: split.py.

## Do the bots over-value White's contest? (Nov 25, 7:20am, Cory: "it's your bots over indexing on that")
White dealt in every game (MUST=trading), Normal, 4 seats, seeds 1-500, DECK=10, byColor.
- Bot contest estimate counted a tie as the whole prize (core pays half, rounded up). TIEHALF=1 (bots.js) counts it half. Follower-only seat: control 48/100, tie-half 42/100 (noise). Normal seats' members 5.1 -> 5.3. Flag left off.
- WHITEBLIND=0: seat 0 ignores White's contest when deciding; same seeds, 400 games without the follower-only seat. Seat 0 wins 121 (30%) today vs 108 (27%) blind; members 5.2 -> 6.5; lead over best rival -2.2 +- 1.8 followers. So shrinking with White out is right, not a bot over-valuation.
- Normal seats hold 5.9 members with White dealt vs 8.7 without (bisect pooled).
- Agent primer (design/notes/expert-primer.md) says nothing pushing fewest members; its line "Grey members are not a color" is stale against Yellow's live contest "(grey is a color)".
