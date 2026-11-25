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
