# Choice report

10560 looked-ahead decisions from 111 games (/mnt/project-files/balance-1.0/merged/veryhard.choices). 23% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| purple: Sleep In | AUTO-PICK | 1171 | 53% | 12% | 5% | 57% | 10% | 5% | 11.9 | 30% (57/129) | 279/18%/4% | 326/14%/3% | 566/7%/7% |
| red: Promote | AUTO-PICK | 605 | 51% | 18% | 5% | 69% | 21% | 0% | 13.5 | 45% (55/76) | – | 245/22%/5% | 360/15%/5% |
| yellow: Harvest | AUTO-PICK | 952 | 40% | 11% | 5% | 58% | 28% | 9% | 11.5 | 24% (50/36) | 66/62%/3% | 380/9%/5% | 506/6%/5% |
| purple: Last Call | AUTO-PICK | 428 | 54% | 22% | 5% | 59% | 0% | 2% | 12.9 | 39% (62/28) | – | 243/19%/5% | 185/26%/5% |
| echo: Cover | AUTO-PICK | 741 | 45% | 13% | 5% | 53% | 7% | 4% | 13.1 | 41% (45/90) | – | 347/14%/5% | 394/11%/4% |
| yellow: Big Dilute | AUTO-PICK | 682 | 39% | 11% | 5% | 50% | 17% | 9% | 11.8 | 38% (45/52) | – | 273/15%/3% | 409/9%/6% |
| thieves: Help Yourself | AUTO-PICK | 789 | 59% | 21% | 4% | 74% | 41% | 3% | 11.1 | 36% (50/94) | 68/84%/1% | 257/23%/4% | 464/11%/5% |
| market: Spree | AUTO-PICK | 411 | 44% | 12% | 4% | 56% | 19% | 2% | 10.0 | 28% (21/27) | – | – | 411/12%/4% |
| echo: Build Up | AUTO-PICK | 1215 | 41% | 11% | 4% | 54% | 14% | 7% | 11.4 | 32% (71/84) | 268/19%/6% | 418/12%/4% | 529/7%/3% |
| red: Demote | AUTO-PICK | 880 | 40% | 12% | 4% | 59% | 22% | 6% | 13.6 | 37% (49/72) | – | 408/13%/4% | 472/10%/4% |
| silver: Toast | AUTO-PICK | 1461 | 42% | 11% | 4% | 52% | 17% | 13% | 13.0 | 31% (81/104) | 472/11%/3% | 533/10%/3% | 456/11%/6% |
| echo: Echo | AUTO-PICK | 771 | 45% | 18% | 4% | 70% | 36% | 1% | 11.8 | 40% (47/70) | 155/31%/3% | 297/16%/4% | 319/14%/4% |
| thieves: Crime Wave | AUTO-PICK | 823 | 43% | 13% | 3% | 61% | 18% | 4% | 11.7 | 35% (58/60) | – | 488/13%/3% | 335/15%/4% |
| red: Walk-In | AUTO-PICK | 1152 | 46% | 13% | 3% | 66% | 30% | 7% | 13.7 | 29% (52/86) | 346/14%/5% | 404/13%/1% | 402/12%/4% |
| thieves: Stash | AUTO-PICK | 1327 | 38% | 12% | 3% | 52% | 12% | 6% | 12.0 | 33% (89/69) | 333/18%/5% | 491/10%/2% | 503/10%/3% |
| trading: Estate Sale | AUTO-PICK | 1134 | 36% | 11% | 3% | 61% | 20% | 5% | 13.8 | 33% (52/76) | – | 526/13%/2% | 608/9%/4% |
| echo: Reprise | AUTO-PICK | 1105 | 32% | 13% | 2% | 68% | 23% | 1% | 12.0 | 39% (67/58) | 286/17%/3% | 396/12%/2% | 423/10%/3% |
| thieves: Poach | AUTO-PICK | 307 | 46% | 20% | 2% | 70% | 25% | 2% | 8.4 | 47% (26/33) | – | – | 307/20%/2% |
| purple: Crunch Time | MIXED | 1656 | 22% | 2% | 6% | 11% | 3% | 64% | 8.0 | 8% (20/10) | – | 734/2%/4% | 922/2%/7% |
| market: Peek | MIXED | 1416 | 44% | 10% | 5% | 44% | 4% | 12% | 11.8 | 26% (104/60) | 375/14%/6% | 539/8%/5% | 502/9%/5% |
| purple: Right Away | MIXED | 2056 | 23% | 3% | 5% | 20% | 3% | 42% | 8.6 | 14% (48/16) | 494/5%/4% | 733/2%/4% | 829/3%/7% |
| market: Bury | MIXED | 1000 | 42% | 10% | 5% | 50% | 10% | 10% | 11.5 | 28% (56/59) | – | 356/15%/4% | 644/7%/5% |
| purple: Crowd In | MIXED | 323 | 44% | 15% | 5% | 38% | 2% | 0% | 8.9 | 29% (26/14) | – | – | 323/15%/5% |
| purple: Hold Up | MIXED | 1698 | 36% | 7% | 5% | 39% | 2% | 29% | 11.5 | 22% (82/51) | 353/13%/4% | 653/6%/3% | 692/5%/7% |
| market: Savings | MIXED | 1919 | 31% | 6% | 5% | 32% | 8% | 28% | 10.2 | 18% (79/29) | 399/13%/7% | 707/5%/4% | 813/3%/5% |
| silver: Party Favors | MIXED | 1299 | 35% | 7% | 4% | 45% | 16% | 15% | 10.6 | 32% (53/86) | – | 514/10%/4% | 785/6%/5% |
| yellow: Melting Pot | MIXED | 815 | 33% | 9% | 4% | 50% | 9% | 8% | 11.5 | 34% (42/46) | – | 370/12%/4% | 445/7%/5% |
| silver: Sweet Talk | MIXED | 1462 | 26% | 6% | 4% | 48% | 17% | 23% | 10.5 | 27% (42/54) | – | 549/9%/2% | 913/4%/5% |
| silver: Largesse | MIXED | 368 | 44% | 17% | 4% | 44% | 2% | 0% | 10.4 | 44% (39/32) | – | – | 368/17%/4% |
| thieves: Shake Down | MIXED | 1131 | 34% | 8% | 4% | 53% | 15% | 10% | 11.1 | 31% (49/67) | – | 420/13%/4% | 711/5%/4% |
| trading: Allowance | MIXED | 1761 | 35% | 10% | 4% | 47% | 6% | 10% | 11.6 | 32% (123/73) | 368/17%/4% | 661/9%/2% | 732/8%/5% |
| red: Tryout | MIXED | 1398 | 33% | 9% | 4% | 57% | 20% | 8% | 11.5 | 28% (57/61) | 240/20%/6% | 489/8%/2% | 669/6%/4% |
| market: Out of Style | MIXED | 1586 | 38% | 8% | 4% | 48% | 5% | 10% | 11.4 | 26% (73/83) | 266/20%/5% | 577/8%/3% | 743/4%/3% |
| red: Recruit a Member | MIXED | 336 | 50% | 15% | 4% | 48% | 12% | 0% | 12.0 | 31% (28/23) | – | – | 336/15%/4% |
| echo: Greatest Hits | MIXED | 760 | 13% | 5% | 4% | 37% | 3% | 46% | 6.9 | 38% (29/8) | – | – | 760/5%/4% |
| trading: Farewell | MIXED | 1643 | 26% | 6% | 3% | 32% | 4% | 20% | 11.0 | 28% (42/76) | – | 852/4%/3% | 791/7%/4% |
| red: Gather | MIXED | 1664 | 27% | 8% | 3% | 53% | 6% | 17% | 11.7 | 31% (86/49) | 341/15%/6% | 666/6%/2% | 657/6%/3% |
| market: Recruit Twice | MIXED | 1431 | 27% | 5% | 3% | 52% | 29% | 14% | 10.7 | 22% (40/40) | – | 753/3%/3% | 678/6%/3% |
| silver: Party Gifts | MIXED | 1865 | 31% | 8% | 3% | 43% | 5% | 15% | 11.2 | 25% (86/58) | 464/12%/3% | 760/4%/2% | 641/9%/4% |
| yellow: Dilute | MIXED | 1425 | 25% | 6% | 3% | 50% | 14% | 17% | 10.9 | 26% (49/43) | 249/15%/2% | 518/6%/1% | 658/3%/4% |
| trading: Exchange | MIXED | 2461 | 18% | 4% | 3% | 22% | 2% | 43% | 10.0 | 30% (62/68) | 639/6%/5% | 944/2%/1% | 878/5%/3% |
| yellow: Trade Seeds | MIXED | 1523 | 22% | 4% | 3% | 60% | 11% | 20% | 11.3 | 26% (37/46) | 254/16%/3% | 589/2%/1% | 680/2%/4% |
| thieves: Lie Low | MIXED | 1934 | 21% | 7% | 3% | 57% | 10% | 24% | 10.1 | 32% (85/42) | 377/15%/4% | 733/5%/1% | 824/4%/3% |
| silver: Polish | MIXED | 2294 | 18% | 4% | 3% | 46% | 22% | 34% | 9.3 | 24% (45/49) | 495/10%/1% | 793/3%/1% | 1006/2%/4% |
| yellow: Makeover | MIXED | 597 | 15% | 5% | 3% | 54% | 14% | 14% | 8.4 | 28% (15/8) | – | – | 597/5%/3% |
| echo: Encore | MIXED | 1047 | 24% | 7% | 2% | 67% | 22% | 14% | 10.2 | 25% (28/32) | – | 484/9%/1% | 563/6%/4% |
| trading: Cash In | MIXED | 1057 | 15% | 2% | 2% | 23% | 8% | 23% | 7.6 | 30% (13/36) | – | – | 1057/2%/2% |
| trading: Splurge | FILLER | 2700 | 19% | 3% | 3% | 31% | 3% | 70% | 9.9 | 18% (68/20) | 615/8%/6% | 976/1%/1% | 1109/3%/3% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Volunteer (red) | REAL CHOICE | 248 | 73% | 18% | 13% | 43% | 0% | 5% | 10.6 | 34% (23/39) | 98/23%/19% | 37/35%/16% | 113/7%/6% |
| Dabblers (benders) | REAL CHOICE | 583 | 76% | 14% | 13% | 35% | 0% | 1% | 11.1 | 31% (38/99) | 290/9%/10% | 143/21%/14% | 150/17%/16% |
| Line Cutters (benders) | REAL CHOICE | 477 | 89% | 21% | 12% | 41% | 5% | 5% | 11.6 | 39% (24/138) | 310/19%/10% | 76/25%/18% | 91/22%/10% |
| Early Birds (purple) | REAL CHOICE | 286 | 71% | 9% | 11% | 31% | 0% | 4% | 9.8 | 23% (13/33) | 91/8%/8% | 40/15%/23% | 155/8%/10% |
| Deprogrammers (red) | REAL CHOICE | 148 | 82% | 28% | 11% | 36% | 5% | 0% | 11.9 | 28% (5/28) | 96/26%/14% | 27/44%/7% | 25/20%/4% |
| Window Dressers (market) | REAL CHOICE | 258 | 72% | 15% | 10% | 38% | 0% | 0% | 10.6 | 28% (13/39) | 58/7%/10% | 103/17%/10% | 97/19%/11% |
| Philanthropists (silver) | REAL CHOICE | 211 | 74% | 16% | 10% | 42% | 3% | 0% | 12.2 | 30% (12/34) | – | 116/15%/8% | 95/17%/14% |
| Shopkeeper (trading) | AUTO-PICK | 191 | 68% | 27% | 10% | 71% | 8% | 0% | 7.6 | 31% (11/28) | 42/76%/17% | 23/52%/9% | 126/6%/9% |
| Chronicler (echo) | AUTO-PICK | 158 | 73% | 18% | 10% | 50% | 4% | 0% | 10.9 | 32% (12/25) | – | 100/16%/11% | 58/21%/9% |
| Doppelganger (echo) | AUTO-PICK | 176 | 62% | 16% | 9% | 66% | 7% | 0% | 9.6 | 33% (16/19) | – | 66/18%/15% | 110/15%/5% |
| Double Agent (thieves) | AUTO-PICK | 171 | 57% | 22% | 8% | 63% | 32% | 0% | 12.5 | 35% (14/16) | – | 113/21%/4% | 58/24%/17% |
| Cutpurse (thieves) | AUTO-PICK | 147 | 77% | 35% | 8% | 65% | 33% | 2% | 10.3 | 31% (13/17) | 62/40%/10% | 33/45%/6% | 52/21%/8% |
| Roadie (echo) | AUTO-PICK | 117 | 78% | 38% | 8% | 73% | 11% | 2% | 12.0 | 42% (18/18) | 62/48%/8% | 8/75%/0% | 47/17%/9% |
| Gardener (yellow) | AUTO-PICK | 80 | 64% | 36% | 8% | 79% | 52% | 0% | 10.0 | 25% (4/5) | 28/86%/4% | 32/13%/9% | 20/5%/10% |
| HR (benders) | AUTO-PICK | 320 | 66% | 17% | 7% | 53% | 18% | 0% | 16.1 | 26% (11/42) | – | 193/6%/3% | 127/34%/14% |
| Accomplice (thieves) | AUTO-PICK | 89 | 82% | 49% | 7% | 89% | 59% | 5% | 9.6 | 36% (1/16) | 35/69%/6% | 18/56%/11% | 36/28%/6% |
| Dyer (yellow) | AUTO-PICK | 121 | 61% | 17% | 5% | 65% | 5% | 0% | 8.7 | 34% (6/19) | – | 32/44%/6% | 89/7%/4% |
| Extortionist (thieves) | AUTO-PICK | 140 | 59% | 15% | 4% | 71% | 24% | 0% | 11.4 | 33% (5/21) | – | 34/29%/9% | 106/10%/3% |
| Fan Club (echo) | AUTO-PICK | 121 | 85% | 26% | 4% | 69% | 19% | 0% | 12.3 | 24% (8/15) | – | 29/55%/7% | 92/17%/3% |
| Mob (red) | AUTO-PICK | 52 | 83% | 37% | 4% | 79% | 58% | 0% | 15.0 | 28% (0/9) | – | 32/25%/3% | 20/55%/5% |
| Con Men (benders) | AUTO-PICK | 165 | 84% | 53% | 4% | 83% | 56% | 0% | 9.7 | 43% (13/26) | – | 54/87%/0% | 111/36%/5% |
| Mentor & Protégés (red) | AUTO-PICK | 165 | 61% | 13% | 4% | 57% | 10% | 0% | 13.2 | 20% (9/11) | – | 58/9%/2% | 107/15%/5% |
| Panel (red) | AUTO-PICK | 120 | 62% | 22% | 3% | 65% | 19% | 0% | 15.7 | 23% (5/11) | – | 88/19%/1% | 32/28%/9% |
| Busker (echo) | AUTO-PICK | 163 | 64% | 28% | 2% | 74% | 11% | 0% | 10.4 | 31% (11/20) | 53/51%/6% | 23/57%/0% | 87/7%/1% |
| Caravan (yellow) | AUTO-PICK | 67 | 55% | 21% | 1% | 50% | 7% | 0% | 14.3 | 19% (4/3) | – | 32/31%/3% | 35/11%/0% |
| Stunt Double (echo) | AUTO-PICK | 82 | 83% | 55% | 1% | 84% | 40% | 0% | 11.8 | 24% (5/7) | – | 33/82%/3% | 49/37%/0% |
| Shift Crew (purple) | MIXED | 244 | 44% | 10% | 10% | 16% | 0% | 0% | 9.6 | 26% (18/10) | 80/5%/9% | 77/9%/3% | 87/16%/17% |
| Triplets (red) | MIXED | 387 | 48% | 10% | 10% | 23% | 0% | 0% | 9.6 | 21% (32/6) | 210/7%/10% | 94/13%/5% | 83/16%/13% |
| Recruit Bonus (red) | MIXED | 397 | 67% | 10% | 10% | 26% | 0% | 0% | 10.0 | 22% (20/37) | 186/7%/10% | 79/16%/18% | 132/9%/5% |
| Drifters (yellow) | MIXED | 190 | 63% | 17% | 9% | 34% | 3% | 0% | 12.0 | 24% (13/15) | 81/14%/9% | 60/23%/7% | 49/14%/14% |
| Recluse (trading) | MIXED | 260 | 65% | 17% | 9% | 44% | 5% | 0% | 9.7 | 27% (16/29) | 94/6%/3% | 58/31%/9% | 108/18%/15% |
| Scouts (benders) | MIXED | 792 | 71% | 9% | 9% | 32% | 0% | 3% | 10.8 | 23% (38/91) | 315/7%/8% | 128/23%/10% | 349/7%/9% |
| Agents (echo) | MIXED | 268 | 69% | 15% | 9% | 26% | 0% | 0% | 11.0 | 29% (26/28) | 147/12%/8% | 56/20%/11% | 65/17%/9% |
| Martyrs (trading) | MIXED | 332 | 69% | 13% | 8% | 36% | 0% | 0% | 11.1 | 25% (21/37) | 131/7%/5% | 96/21%/9% | 105/14%/11% |
| Brokers (trading) | MIXED | 310 | 66% | 9% | 8% | 33% | 0% | 0% | 11.3 | 26% (14/39) | – | 115/10%/10% | 195/8%/8% |
| Polisher (silver) | MIXED | 311 | 58% | 14% | 8% | 36% | 0% | 0% | 10.1 | 23% (32/9) | 145/17%/12% | 46/26%/9% | 120/7%/4% |
| Patriarch (red) | MIXED | 218 | 64% | 17% | 8% | 46% | 3% | 0% | 13.5 | 19% (4/22) | – | 157/10%/6% | 61/36%/13% |
| Timekeepers (purple) | MIXED | 292 | 76% | 12% | 8% | 36% | 0% | 0% | 10.3 | 21% (11/35) | 147/5%/6% | 58/16%/7% | 87/22%/13% |
| Trendsetters (market) | MIXED | 317 | 69% | 12% | 8% | 28% | 0% | 0% | 10.1 | 25% (15/39) | 115/4%/8% | 98/20%/7% | 104/13%/9% |
| Toastmaster (silver) | MIXED | 458 | 61% | 7% | 8% | 41% | 6% | 0% | 10.8 | 15% (19/24) | 167/5%/8% | 151/12%/9% | 140/4%/6% |
| Alchemists (benders) | MIXED | 635 | 83% | 9% | 8% | 22% | 0% | 0% | 10.6 | 23% (30/89) | – | 236/13%/9% | 399/7%/7% |
| Snobs (market) | MIXED | 188 | 76% | 19% | 7% | 47% | 11% | 0% | 11.0 | 28% (11/27) | – | 97/13%/6% | 91/25%/9% |
| Kingpin (thieves) | MIXED | 312 | 72% | 11% | 7% | 31% | 0% | 0% | 13.0 | 24% (15/39) | 153/3%/6% | 96/19%/7% | 63/19%/11% |
| High Society (silver) | MIXED | 190 | 72% | 13% | 7% | 48% | 16% | 0% | 13.7 | 25% (4/29) | – | 82/13%/7% | 108/13%/7% |
| Regular (market) | MIXED | 413 | 62% | 9% | 7% | 32% | 3% | 0% | 10.9 | 18% (28/19) | 141/6%/8% | 122/12%/8% | 150/10%/6% |
| Old Money (trading) | MIXED | 315 | 70% | 11% | 7% | 46% | 0% | 0% | 10.6 | 22% (20/29) | – | 95/9%/4% | 220/12%/8% |
| Bouncers (purple) | MIXED | 307 | 72% | 8% | 7% | 38% | 0% | 0% | 11.5 | 20% (14/30) | 126/7%/4% | 78/15%/12% | 103/5%/6% |
| Hot Streak (purple) | MIXED | 268 | 46% | 8% | 6% | 19% | 0% | 0% | 12.5 | 16% (15/4) | – | 113/6%/8% | 155/9%/5% |
| Connoisseurs (market) | MIXED | 481 | 65% | 7% | 6% | 31% | 3% | 0% | 12.1 | 17% (24/30) | 130/2%/3% | 145/9%/6% | 206/10%/7% |
| Critic (market) | MIXED | 473 | 53% | 6% | 6% | 17% | 0% | 3% | 9.3 | 20% (23/28) | 151/5%/5% | 72/14%/10% | 250/5%/5% |
| Ringleader (yellow) | MIXED | 190 | 54% | 9% | 5% | 47% | 6% | 0% | 13.5 | 22% (8/14) | – | 109/10%/4% | 81/7%/7% |
| Big Tent (yellow) | MIXED | 197 | 42% | 7% | 5% | 38% | 8% | 0% | 13.0 | 26% (4/17) | – | 95/11%/5% | 102/3%/5% |
| Raiders (trading) | MIXED | 322 | 57% | 8% | 5% | 32% | 4% | 0% | 11.3 | 16% (18/12) | – | 153/9%/6% | 169/7%/4% |
| Doormen (market) | MIXED | 364 | 68% | 7% | 5% | 42% | 0% | 0% | 9.8 | 13% (17/14) | – | 120/9%/3% | 244/6%/6% |
| Clockmakers (purple) | MIXED | 272 | 64% | 7% | 5% | 11% | 0% | 0% | 11.0 | 16% (8/19) | – | 100/10%/6% | 172/5%/4% |
| Loyalists (red) | MIXED | 270 | 63% | 10% | 4% | 25% | 0% | 0% | 11.1 | 30% (17/33) | – | 76/12%/3% | 194/10%/5% |
| Party Crasher (benders) | MIXED | 893 | 55% | 9% | 4% | 50% | 0% | 1% | 11.1 | 15% (58/17) | 414/0%/1% | 146/27%/12% | 333/11%/5% |
| Cashier (trading) | MIXED | 513 | 39% | 4% | 4% | 29% | 0% | 5% | 9.5 | 13% (10/15) | 128/0%/4% | 199/4%/5% | 186/7%/4% |
| Muse (echo) | MIXED | 475 | 50% | 4% | 4% | 29% | 0% | 0% | 9.9 | 13% (20/11) | 192/2%/3% | 90/14%/8% | 193/3%/3% |
| Closer (purple) | MIXED | 287 | 38% | 6% | 4% | 33% | 0% | 0% | 12.1 | 17% (17/1) | – | 125/10%/5% | 162/3%/3% |
| Grifter (thieves) | MIXED | 157 | 68% | 20% | 4% | 47% | 22% | 0% | 14.2 | 30% (8/22) | – | 69/16%/0% | 88/24%/7% |
| Collector (silver) | MIXED | 376 | 35% | 5% | 3% | 59% | 0% | 0% | 11.9 | 16% (14/7) | 62/0%/0% | 96/5%/5% | 218/6%/4% |
| Anarchist (benders) | MIXED | 754 | 38% | 7% | 3% | 36% | 0% | 0% | 12.1 | 20% (53/5) | – | 215/8%/2% | 539/7%/4% |
| Window Shopper (market) | MIXED | 364 | 57% | 8% | 3% | 43% | 7% | 0% | 12.4 | 19% (15/24) | – | 102/15%/7% | 262/5%/2% |
| Courier (purple) | MIXED | 297 | 38% | 4% | 3% | 38% | 0% | 0% | 10.2 | 15% (12/5) | – | 91/5%/2% | 206/4%/3% |
| Night Owls (purple) | MIXED | 136 | 31% | 4% | 3% | 20% | 0% | 0% | 9.6 | 19% (5/3) | – | 52/0%/0% | 84/6%/5% |
| Sticky Fingers (thieves) | MIXED | 344 | 43% | 5% | 3% | 38% | 6% | 0% | 11.3 | 10% (10/5) | 101/1%/1% | 86/8%/2% | 157/5%/4% |
| Heiresses (trading) | MIXED | 223 | 29% | 9% | 3% | 58% | 5% | 0% | 9.5 | 25% (14/2) | – | 58/10%/5% | 165/8%/2% |
| Shopaholics (market) | MIXED | 270 | 37% | 6% | 3% | 44% | 0% | 0% | 15.3 | 20% (13/7) | – | 131/0%/2% | 139/12%/4% |
| Desperado (thieves) | MIXED | 351 | 46% | 4% | 3% | 40% | 0% | 0% | 11.6 | 13% (12/9) | – | 144/7%/4% | 207/2%/1% |
| Harmonist (yellow) | MIXED | 203 | 35% | 2% | 2% | 60% | 0% | 0% | 14.8 | 8% (3/3) | – | 102/4%/3% | 101/1%/2% |
| Debt Collectors (silver) | MIXED | 290 | 41% | 9% | 2% | 60% | 4% | 0% | 10.3 | 20% (20/3) | – | 75/20%/0% | 215/5%/3% |
| Go-Between (yellow) | MIXED | 335 | 39% | 2% | 2% | 38% | 0% | 0% | 12.7 | 12% (6/9) | 64/2%/5% | 83/5%/1% | 188/2%/2% |
| Exporters (trading) | MIXED | 389 | 42% | 2% | 2% | 56% | 0% | 0% | 13.2 | 7% (7/4) | – | 187/2%/1% | 202/2%/3% |
| Gossip (purple) | MIXED | 266 | 29% | 3% | 2% | 25% | 0% | 0% | 11.9 | 12% (8/1) | – | 105/4%/1% | 161/2%/2% |
| Extra Hand (benders) | MIXED | 572 | 24% | 3% | 2% | 44% | 0% | 0% | 15.1 | 14% (18/2) | – | 318/0%/1% | 254/7%/3% |
| Tastemaker (yellow) | MIXED | 307 | 21% | 2% | 2% | 40% | 0% | 0% | 10.7 | 8% (5/0) | – | 63/3%/2% | 244/1%/2% |
| Gift Wrapper (silver) | MIXED | 476 | 30% | 1% | 1% | 20% | 0% | 0% | 13.4 | 6% (5/3) | – | 113/0%/1% | 363/1%/2% |
| Debutantes (silver) | MIXED | 256 | 38% | 4% | 1% | 55% | 0% | 0% | 12.4 | 17% (11/6) | – | 134/2%/1% | 122/7%/2% |
| Proselytizers (red) | MIXED | 260 | 35% | 3% | 1% | 44% | 0% | 0% | 15.6 | 13% (6/6) | – | 132/1%/2% | 128/6%/1% |
| Shoplifter (thieves) | MIXED | 270 | 27% | 3% | 1% | 29% | 0% | 0% | 14.3 | 10% (6/1) | – | 91/2%/1% | 179/3%/1% |
| Bodyguards (thieves) | MIXED | 186 | 22% | 3% | 1% | 50% | 0% | 0% | 10.8 | 18% (6/1) | – | 62/2%/0% | 124/4%/2% |
| Hoarder (trading) | MIXED | 293 | 23% | 1% | 1% | 25% | 0% | 0% | 12.9 | 7% (4/1) | – | 77/0%/0% | 216/2%/1% |
| Hangers-On (silver) | MIXED | 313 | 42% | 1% | 1% | 25% | 0% | 0% | 11.5 | 5% (4/2) | – | 116/2%/1% | 197/1%/1% |
| Patroness (market) | MIXED | 226 | 14% | 1% | 1% | 0% | 0% | 0% | 13.1 | 10% (2/1) | – | 67/0%/0% | 159/1%/1% |
| Customs (yellow) | MIXED | 352 | 27% | 1% | 1% | 60% | 0% | 0% | 11.2 | 4% (3/1) | 80/0%/0% | 68/4%/1% | 204/1%/1% |
| Smooth Talkers (silver) | MIXED | 232 | 34% | 2% | 0% | 40% | 0% | 0% | 12.5 | 5% (1/3) | – | 48/6%/2% | 184/1%/0% |
| Tribute Band (echo) | MIXED | 82 | 27% | 10% | 0% | 100% | 0% | 0% | 10.7 | 27% (4/2) | – | 7/14%/0% | 75/9%/0% |
| Wallflower (echo) | MIXED | 189 | 15% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 39/0%/0% | 150/0%/0% |
| Old Maid (benders) | DEAD | 1386 | 0% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 472/0%/0% | 914/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Anarchist (benders) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| Polisher (silver) | DEAD | 78 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 29/0%/0% | 44/0%/0% | 5/0%/0% |
| Scouts (benders) | DEAD | 958 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 57/0%/0% | 254/0%/0% | 647/0%/0% |
| Hot Streak (purple) | DEAD | 51 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 44/0%/0% |
| Party Crasher (benders) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 11/0%/0% | 5/0%/0% | – |
| Raiders (trading) | DEAD | 95 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 27/0%/0% | 68/0%/0% |
| Tribute Band (echo) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| Debutantes (silver) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 6/0%/0% |
| Heiresses (trading) | THIN DATA | 1 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | – |
| Extra Hand (benders) | THIN DATA | 11 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 5/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Scouts (3) | REAL CHOICE | 15 | 100% | 40% | 53% | 17% | 0% | 100% | 6.7 | 13% (1/1) | – | 6/50%/33% | 9/33%/67% |
| choose member:Cutpurse (3) | REAL CHOICE | 15 | 93% | 20% | 53% | 33% | 0% | 100% | 3.1 | 43% (0/6) | – | 10/20%/50% | 5/20%/60% |
| choose member:Kingpin (4) | REAL CHOICE | 15 | 100% | 27% | 33% | 0% | 0% | 100% | 4.3 | 20% (3/0) | – | 7/43%/43% | 8/13%/25% |
| choose member:P4's Line Cutters (2) | REAL CHOICE | 23 | 39% | 9% | 13% | 0% | 0% | 100% | 8.7 | 22% (2/0) | – | 4/0%/0% | 19/11%/16% |
| pass:Pass | REAL CHOICE | 5149 | 55% | 20% | 11% | 48% | 7% | 12% | 9.3 | 27% (498/252) | 1275/46%/17% | 1675/20%/14% | 2199/5%/4% |
| followers:small | REAL CHOICE | 5149 | 55% | 12% | 10% | 29% | 0% | 6% | 9.9 | 22% (474/150) | 1275/16%/14% | 1675/16%/13% | 2199/7%/6% |
| choose member:Line Cutters (2) | AUTO-PICK | 17 | 82% | 29% | 18% | 60% | 0% | 80% | 6.3 | 29% (1/3) | – | 8/50%/13% | 9/11%/22% |
| choose member:P2's Con Men (7) | AUTO-PICK | 16 | 19% | 13% | 6% | 50% | 0% | 0% | 5.7 | 33% (1/0) | – | 2/50%/0% | 14/7%/7% |
| followers:mid | MIXED | 4705 | 43% | 7% | 7% | 20% | 0% | 2% | 8.7 | 17% (229/106) | 846/0%/1% | 1669/3%/4% | 2190/12%/11% |
| choose member:P1's Dabblers (3) | MIXED | 15 | 33% | 7% | 7% | 0% | 0% | 0% | 15.8 | 20% (1/0) | – | 2/0%/0% | 13/8%/8% |
| choose member:P3's Kingpin (4) | MIXED | 16 | 50% | 6% | 6% | 0% | 0% | 100% | 12.8 | 13% (1/0) | – | 2/0%/0% | 14/7%/7% |
| followers:top | MIXED | 3789 | 35% | 16% | 6% | 23% | 0% | 0% | 8.1 | 27% (113/241) | 144/0%/0% | 1509/0%/1% | 2136/27%/10% |
| choose member:P1's Line Cutters (2) | MIXED | 17 | 35% | 6% | 6% | 0% | 0% | 100% | 7.9 | 0% (0/0) | – | 4/0%/0% | 13/8%/8% |
| choose member:P4's Cutpurse (3) | MIXED | 19 | 26% | 11% | 5% | 0% | 0% | 100% | 9.1 | 40% (2/0) | – | 4/0%/0% | 15/13%/7% |
| choose member:P3's Line Cutters (2) | MIXED | 19 | 26% | 0% | 5% | – | – | – | 8.4 | 20% (0/1) | – | 2/0%/0% | 17/0%/6% |
| choose member:P1's Alchemists (5) | MIXED | 15 | 40% | 7% | 0% | 0% | 0% | 0% | 12.0 | 17% (1/0) | – | 1/0%/0% | 14/7%/0% |
| choose member:P1's Cutpurse (3) | MIXED | 25 | 12% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 3/0%/0% | 22/0%/0% |
| choose member:P4's Scouts (3) | MIXED | 16 | 19% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P3's Agents (3) | MIXED | 18 | 17% | 0% | 0% | – | – | – | 17.6 | 33% (0/1) | – | 2/0%/0% | 16/0%/0% |
| choose member:P3's Accomplice (3) | FILLER | 22 | 14% | 5% | 0% | 0% | 0% | 100% | 10.8 | 33% (1/0) | – | 4/0%/0% | 18/6%/0% |
| pass:Don’t swap | DEAD | 374 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 172/0%/0% | 202/0%/0% |
| choose member:P3's Polisher (3) | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |

(13377 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 861 | 27% | 702 | 30% |
| trading | 1080 | 20% | 887 | 25% |
| benders | 0 | – | 606 | 25% |
| market | 970 | 21% | 884 | 24% |
| silver | 1011 | 20% | 841 | 22% |
| yellow | 693 | 19% | 586 | 20% |
| red | 895 | 21% | 967 | 19% |
| echo | 926 | 19% | 919 | 13% |
| thieves | 943 | 20% | 987 | 13% |
