# Space +1 timing, economy test (2026-11-11)
Cory: "the spaces give the +1 only once each round, to the first person who takes it. actually maybe the +1 should just be per game?" / "maybe we can run some economy tests with it."
60 Hard 4-player games per setting, 10-card deck, By color, same seeds (`DECK=10 node scripts/econ/sweep.mjs --games=60 --dir=.econ-plus1 --only=today,plus1-round,plus1-game`, dial `PLUS1=round|game` in core.js plus1Delta; only spaces whose text ends "+1 <color>." are touched).
Results: summary.txt (`node scripts/econ/plus1-summary.mjs .econ-plus1`). "recruits/round" counts new member cards on your own turn, swaps and Borrow included.
- First taker each round: identical to today in all 60 games; no live space takes a second minion in a round.
- Once per game: 12 of the 22 printed +1s a game are not paid (3 per player); income per placement 6.13 -> 5.67; followers 78 -> 75 (winner 90 -> 88); round II recruits 2.65 -> 2.52; wins with 5 or fewer members 52% -> 47%.
- Against Cory's pace (1 / 2 / up to 5 members by round): today runs about 1.6 / 2.7 / 3.2; once per game moves round II down, round III unchanged.
