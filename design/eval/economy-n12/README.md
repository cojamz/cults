# Economy test, Cory's four price settings (2026-11-12)
Cory, Nov 12: "run games on "once a game" and evaluate today, richer, inbetween (one less any) and one less color than "today". So four."
60 Hard 4-player games per setting, 10-card deck, By color, each space's +1 once a game, the same deals in every setting, today's bots (the bot +1 fix measured no change and stays off). `DECK=10 node scripts/econ/sweep.mjs --games=60 --dir=.econ-n12 --only='n12 today,n12 richer,n12 between,n12 color-1'`; summary `node scripts/econ/plus1-summary.mjs .econ-n12 --names=n12_today,n12_richer,n12_between,n12_color-1`; same-deal differences `node scripts/econ/pair-n12.mjs`. Raw: /mnt/project-files/economy-test/n12/.
Settings: today (members printed + 1 color + 2 any); Richer (+2 color +2 any, spaces +1); in between (+2 color +1 any, spaces +1); one less color (+0 color +2 any).

```
today    members a round 1.78 / 2.42 / 3.00 | members end 5.0 | winner 83 | all 70 | wins with 5 or fewer members 37% | income a placement 5.08 | no member affordable 36%
richer   1.40 / 2.19 / 2.57 | 4.0 | 85 | 76 | 61% | 5.94 | 42%
between  1.79 / 2.48 / 2.77 | 4.8 | 88 | 76 | 48% | 6.01 | 33%
color-1  2.26 / 2.92 / 3.52 | 6.0 | 83 | 72 | 35% | 5.18 | 24%
```
Same deals against today, per player, with 90% ranges: Richer followers +6.1 (4.2 to 7.9), members -0.9; in between followers +6.4 (4.6 to 8.3), members -0.2 (round III -0.2); one less color followers +2.3 (0.5 to 4.0), members +1.1 (+0.5 in each round).
- No setting reaches "up to 5" in round III; one less color comes closest (3.5) and is the only one that also cuts turns with nothing affordable.
- Richer moves wins toward small cults (61% won with 5 or fewer members) and lowers members in every round.
- In between keeps today's member pace in rounds I and II and adds about 6 followers each from the richer spaces.
