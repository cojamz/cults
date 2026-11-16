# Economy baseline (Nov 11)
Cory, Nov 11: "I think the way I'm leaning is to have the one resource per space, per game, that can get taken. And then we will probably like reduce the member costs slightly. ... run a couple tests on that baseline to see if there's anything wrong. Not too many."
Hard bots, 4 players, 10-card decks, By color, each space's +1 once a game, same deals in every mix (`DECK=10 node scripts/econ/sweep.mjs --games=60 --dir=.econ-base --only='plus1-game,plus1-game up2,plus1-game up1'`). Two deals hung a bot inside one move for over 80 minutes (plus1-game game 50, plus1-game up1 game 58) and were stopped, so the matched read is games 1-49. Raw: /mnt/project-files/economy-test/baseline-2026-11-11/.
"Members a round" counts member cards a player gains on their own turn (paid, free, swaps and Borrow), per player. Pace to track (Cory, Nov 11, a guideline): 1 / 2 / up to 5.

```
plus1-game games 49 | recruits/round 1.65 / 2.33 / 3.04 | members 4.3 | win fol 86 | all fol 70 | small wins 46% | income/place 5.15 | nothing affordable 34% | leftover end 5.3 | +1 paid/cut per game 11.5 / 14.2
plus1-game_up2 games 49 | recruits/round 1.98 / 2.87 / 3.13 | members 5.2 | win fol 86 | all fol 72 | small wins 47% | income/place 5.28 | nothing affordable 24% | leftover end 5.2 | +1 paid/cut per game 11.8 / 14.0
plus1-game_up1 games 49 | recruits/round 2.21 / 3.44 / 3.72 | members 6.2 | win fol 89 | all fol 75 | small wins 39% | income/place 5.44 | nothing affordable 15% | leftover end 5.3 | +1 paid/cut per game 11.8 / 14.2
```
- Today's prices (every member 3 over printed, 1 of it its color): 1.7 / 2.3 / 3.0 members a round; no shop member affordable on 34% of buys.
- 1 cheaper (2 over printed): 2.0 / 2.9 / 3.1; 24%. Winners and small-cult wins unchanged (86 followers, 47%).
- 2 cheaper (1 over printed): 2.2 / 3.4 / 3.7; 15%. Small-cult wins drop to 39%, followers up 3-4.
- Cheaper members mostly add early members; round III stays near 3 in every mix, short of "up to 5". The +1 once a game pays 11-12 of the ~26 printed +1s a game.
- Nothing broke: every finished game ended normally, leftovers at the end about 5 in every mix.
