# Choice report

14401 looked-ahead decisions from 146 games (/mnt/project-files/balance-1.0/raw/hard/hard-4p-00001.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00011.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00021.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00031.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00041.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00051.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00061.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00071.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00081.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00091.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00101.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00111.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00121.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00131.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00141.jsonl.choices, /mnt/project-files/balance-1.0/raw/hard/hard-4p-00151.jsonl.choices). 15% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| market: Peek | AUTO-PICK | 2039 | 26% | 10% | 4% | 55% | 12% | 13% | 11.3 | 39% (112/85) | 602/11%/5% | 779/9%/3% | 658/11%/4% |
| market: Bury | AUTO-PICK | 1316 | 25% | 10% | 3% | 57% | 9% | 7% | 11.6 | 42% (62/71) | – | 463/16%/3% | 853/7%/4% |
| echo: Build Up | AUTO-PICK | 1603 | 25% | 11% | 3% | 65% | 18% | 6% | 11.7 | 37% (76/62) | 329/19%/5% | 575/10%/3% | 699/8%/3% |
| silver: Toast | AUTO-PICK | 1376 | 38% | 16% | 3% | 70% | 29% | 3% | 13.9 | 43% (77/122) | 401/19%/5% | 555/14%/2% | 420/17%/3% |
| yellow: Harvest | AUTO-PICK | 1371 | 24% | 11% | 3% | 72% | 39% | 9% | 10.1 | 39% (53/55) | 103/56%/3% | 511/9%/3% | 757/6%/3% |
| yellow: Melting Pot | AUTO-PICK | 1100 | 23% | 10% | 3% | 65% | 21% | 10% | 11.6 | 39% (42/47) | – | 458/12%/2% | 642/9%/4% |
| thieves: Help Yourself | AUTO-PICK | 805 | 47% | 28% | 3% | 86% | 58% | 0% | 13.1 | 42% (45/59) | 80/95%/1% | 251/30%/4% | 474/16%/3% |
| purple: Sleep In | AUTO-PICK | 1449 | 38% | 14% | 3% | 70% | 19% | 5% | 13.8 | 46% (83/152) | 357/18%/3% | 491/14%/3% | 601/11%/3% |
| thieves: Stash | AUTO-PICK | 1895 | 26% | 12% | 3% | 69% | 19% | 3% | 10.9 | 44% (105/93) | 445/18%/4% | 699/11%/1% | 751/10%/3% |
| thieves: Shake Down | AUTO-PICK | 1233 | 25% | 12% | 3% | 72% | 31% | 3% | 12.4 | 48% (58/71) | – | 425/18%/2% | 808/9%/3% |
| purple: Last Call | AUTO-PICK + MISJUDGED | 853 | 31% | 14% | 3% | 74% | 0% | 1% | 11.3 | 51% (74/59) | – | 465/12%/2% | 388/17%/3% |
| red: Promote | AUTO-PICK | 552 | 45% | 28% | 3% | 82% | 44% | 0% | 12.6 | 45% (40/42) | – | 281/27%/2% | 271/28%/3% |
| yellow: Big Dilute | AUTO-PICK | 912 | 27% | 12% | 3% | 75% | 41% | 5% | 13.4 | 46% (35/56) | – | 384/15%/2% | 528/10%/3% |
| thieves: Crime Wave | AUTO-PICK | 1121 | 29% | 13% | 2% | 72% | 36% | 1% | 13.0 | 45% (46/79) | – | 626/12%/2% | 495/16%/3% |
| thieves: Poach | AUTO-PICK | 380 | 38% | 23% | 2% | 75% | 45% | 0% | 9.3 | 49% (25/26) | – | – | 380/23%/2% |
| echo: Cover | AUTO-PICK | 948 | 28% | 13% | 2% | 72% | 18% | 7% | 13.1 | 45% (46/64) | – | 419/15%/1% | 529/11%/3% |
| red: Recruit a Member | AUTO-PICK | 606 | 23% | 11% | 2% | 70% | 36% | 10% | 11.0 | 44% (23/27) | – | – | 606/11%/2% |
| silver: Party Favors | AUTO-PICK | 1426 | 22% | 10% | 2% | 68% | 31% | 6% | 11.8 | 45% (63/61) | – | 462/16%/3% | 964/7%/2% |
| market: Spree | AUTO-PICK | 668 | 24% | 11% | 2% | 63% | 24% | 0% | 12.1 | 44% (30/33) | – | – | 668/11%/2% |
| red: Walk-In | AUTO-PICK | 1592 | 26% | 13% | 2% | 78% | 46% | 11% | 12.5 | 42% (52/79) | 450/14%/2% | 471/15%/3% | 671/10%/2% |
| silver: Largesse | AUTO-PICK | 705 | 23% | 11% | 2% | 74% | 14% | 0% | 10.2 | 42% (30/35) | – | – | 705/11%/2% |
| echo: Echo | AUTO-PICK + MISJUDGED | 782 | 40% | 24% | 2% | 86% | 59% | 0% | 14.1 | 51% (40/61) | 141/45%/1% | 275/23%/3% | 366/17%/2% |
| trading: Estate Sale | AUTO-PICK | 1584 | 25% | 10% | 2% | 73% | 27% | 6% | 11.6 | 41% (49/97) | – | 757/11%/1% | 827/9%/2% |
| red: Demote | AUTO-PICK | 1098 | 23% | 13% | 2% | 75% | 41% | 4% | 15.5 | 41% (44/35) | – | 507/13%/2% | 591/12%/1% |
| echo: Reprise | AUTO-PICK | 1312 | 22% | 15% | 1% | 86% | 46% | 1% | 11.6 | 45% (52/38) | 380/17%/1% | 442/15%/2% | 490/14%/2% |
| purple: Crowd In | AUTO-PICK + MISJUDGED | 563 | 21% | 12% | 1% | 70% | 15% | 0% | 9.4 | 50% (33/22) | – | – | 563/12%/1% |
| market: Savings | MIXED | 2916 | 15% | 5% | 3% | 37% | 14% | 35% | 8.1 | 30% (87/37) | 605/10%/5% | 1059/4%/3% | 1252/3%/2% |
| market: Out of Style | MIXED | 2339 | 21% | 8% | 3% | 55% | 6% | 14% | 10.2 | 39% (93/89) | 355/21%/6% | 784/8%/3% | 1200/4%/3% |
| purple: Hold Up | MIXED | 2367 | 18% | 8% | 3% | 53% | 16% | 28% | 9.1 | 37% (101/47) | 518/13%/5% | 811/7%/2% | 1038/5%/2% |
| trading: Allowance | MIXED | 2355 | 18% | 9% | 3% | 68% | 18% | 13% | 9.6 | 43% (112/60) | 500/15%/4% | 902/7%/1% | 953/7%/3% |
| silver: Sweet Talk | MIXED | 1804 | 17% | 7% | 2% | 60% | 22% | 22% | 10.5 | 38% (44/60) | – | 748/9%/2% | 1056/6%/3% |
| market: Recruit Twice | MIXED | 2123 | 14% | 5% | 2% | 54% | 33% | 22% | 9.3 | 35% (43/51) | – | 1052/4%/3% | 1071/6%/1% |
| silver: Party Gifts | MIXED | 2652 | 16% | 7% | 2% | 56% | 27% | 25% | 9.5 | 33% (63/57) | 671/10%/3% | 1008/6%/2% | 973/7%/2% |
| red: Tryout | MIXED | 1998 | 17% | 8% | 2% | 73% | 34% | 14% | 10.6 | 43% (68/53) | 361/18%/4% | 656/8%/1% | 981/5%/2% |
| trading: Farewell | MIXED | 2204 | 14% | 5% | 2% | 52% | 16% | 21% | 9.4 | 39% (45/71) | – | 1119/4%/2% | 1085/7%/2% |
| red: Gather | MIXED | 2425 | 15% | 7% | 2% | 56% | 16% | 24% | 10.7 | 44% (87/57) | 521/13%/3% | 902/5%/2% | 1002/5%/2% |
| yellow: Trade Seeds | MIXED | 2290 | 11% | 4% | 2% | 53% | 12% | 23% | 10.1 | 36% (38/45) | 316/17%/3% | 861/1%/0% | 1113/2%/3% |
| silver: Polish | MIXED | 3037 | 11% | 4% | 2% | 62% | 34% | 34% | 8.6 | 34% (39/57) | 612/11%/2% | 1052/3%/1% | 1373/2%/2% |
| yellow: Dilute | MIXED | 2140 | 13% | 6% | 1% | 69% | 31% | 26% | 9.7 | 39% (53/43) | 396/14%/3% | 782/4%/1% | 962/4%/1% |
| yellow: Makeover | MIXED | 1006 | 8% | 4% | 1% | 62% | 19% | 43% | 8.4 | 39% (12/15) | – | – | 1006/4%/1% |
| thieves: Lie Low | MIXED | 2481 | 14% | 8% | 1% | 74% | 32% | 13% | 10.5 | 43% (80/39) | 300/26%/2% | 957/7%/1% | 1224/5%/1% |
| echo: Encore | MIXED | 1437 | 15% | 7% | 1% | 72% | 38% | 9% | 11.6 | 40% (32/38) | – | 700/7%/1% | 737/7%/1% |
| purple: Right Away | FILLER | 2941 | 11% | 3% | 3% | 29% | 11% | 66% | 6.5 | 28% (55/32) | 706/4%/2% | 1031/2%/4% | 1204/4%/3% |
| trading: Exchange | FILLER | 3309 | 9% | 3% | 1% | 41% | 14% | 53% | 7.7 | 44% (56/62) | 823/5%/2% | 1221/1%/1% | 1265/5%/2% |
| purple: Crunch Time | DEAD | 2304 | 9% | 3% | 3% | 20% | 8% | 55% | 6.7 | 27% (31/21) | – | 1013/3%/3% | 1291/3%/3% |
| trading: Splurge | DEAD | 3521 | 7% | 3% | 2% | 26% | 18% | 63% | 7.2 | 36% (60/20) | 762/9%/4% | 1222/1%/0% | 1537/1%/1% |
| echo: Greatest Hits | DEAD | 1195 | 5% | 3% | 1% | 67% | 15% | 61% | 6.1 | 45% (17/8) | – | – | 1195/3%/1% |
| trading: Cash In | DEAD | 1487 | 6% | 2% | 1% | 57% | 26% | 52% | 7.2 | 36% (7/25) | – | – | 1487/2%/1% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Roadie (echo) | AUTO-PICK | 132 | 80% | 44% | 11% | 64% | 31% | 5% | 9.5 | 37% (12/20) | 92/47%/11% | 11/55%/27% | 29/31%/3% |
| Dyer (yellow) | AUTO-PICK | 138 | 47% | 20% | 9% | 68% | 18% | 0% | 10.2 | 42% (10/15) | – | 39/38%/10% | 99/13%/9% |
| Dabblers (benders) | AUTO-PICK | 631 | 58% | 20% | 9% | 51% | 7% | 3% | 11.0 | 36% (50/78) | 403/14%/10% | 130/34%/8% | 98/29%/7% |
| Line Cutters (benders) | AUTO-PICK | 424 | 73% | 31% | 8% | 63% | 28% | 2% | 12.9 | 41% (31/82) | 296/30%/6% | 41/46%/7% | 87/29%/15% |
| Volunteer (red) | AUTO-PICK | 230 | 64% | 26% | 8% | 54% | 3% | 5% | 11.1 | 43% (24/39) | 128/29%/9% | 56/27%/11% | 46/15%/2% |
| Philanthropists (silver) | AUTO-PICK | 213 | 55% | 25% | 8% | 57% | 30% | 0% | 11.7 | 44% (21/23) | – | 85/25%/6% | 128/26%/9% |
| Chronicler (echo) | AUTO-PICK | 246 | 48% | 17% | 7% | 51% | 5% | 0% | 12.4 | 45% (23/29) | – | 138/10%/7% | 108/25%/8% |
| Loyalists (red) | AUTO-PICK | 270 | 39% | 12% | 7% | 52% | 9% | 0% | 9.8 | 47% (16/31) | – | 83/20%/11% | 187/9%/5% |
| Shopkeeper (trading) | AUTO-PICK | 170 | 74% | 41% | 6% | 78% | 30% | 0% | 11.7 | 41% (16/27) | 49/78%/4% | 33/61%/3% | 88/13%/9% |
| Old Money (trading) | AUTO-PICK | 401 | 37% | 12% | 6% | 54% | 8% | 0% | 10.1 | 42% (26/34) | – | 162/10%/6% | 239/14%/6% |
| Early Birds (purple) | AUTO-PICK | 280 | 46% | 19% | 6% | 54% | 4% | 2% | 10.7 | 39% (26/24) | 96/22%/7% | 75/21%/7% | 109/14%/5% |
| Polisher (silver) | AUTO-PICK | 481 | 37% | 13% | 6% | 56% | 2% | 0% | 8.9 | 38% (43/25) | 251/10%/9% | 93/23%/5% | 137/11%/1% |
| Timekeepers (purple) | AUTO-PICK | 319 | 45% | 16% | 6% | 54% | 10% | 0% | 10.1 | 32% (14/31) | 190/7%/7% | 65/26%/6% | 64/30%/3% |
| Gardener (yellow) | AUTO-PICK | 177 | 41% | 25% | 6% | 73% | 53% | 4% | 8.1 | 37% (6/12) | 41/66%/2% | 34/35%/3% | 102/6%/8% |
| Fan Club (echo) | AUTO-PICK + MISJUDGED | 160 | 67% | 31% | 6% | 78% | 41% | 0% | 11.4 | 51% (13/31) | – | 48/50%/6% | 112/22%/5% |
| Brokers (trading) | AUTO-PICK | 392 | 42% | 10% | 6% | 55% | 5% | 0% | 9.7 | 34% (16/39) | – | 193/11%/7% | 199/10%/4% |
| High Society (silver) | AUTO-PICK | 216 | 49% | 20% | 6% | 68% | 43% | 0% | 10.7 | 42% (9/27) | – | 107/23%/7% | 109/17%/4% |
| Bouncers (purple) | AUTO-PICK | 375 | 40% | 12% | 5% | 60% | 4% | 0% | 12.0 | 41% (28/33) | 156/7%/4% | 112/19%/11% | 107/12%/2% |
| Drifters (yellow) | AUTO-PICK | 265 | 41% | 16% | 5% | 56% | 19% | 0% | 10.7 | 37% (15/22) | 89/17%/9% | 48/31%/6% | 128/10%/2% |
| Patriarch (red) | AUTO-PICK | 252 | 49% | 19% | 5% | 63% | 17% | 0% | 14.9 | 39% (14/31) | – | 167/15%/5% | 85/27%/5% |
| Snobs (market) | AUTO-PICK | 236 | 51% | 22% | 5% | 71% | 35% | 0% | 11.1 | 40% (12/29) | – | 144/18%/4% | 92/28%/7% |
| Cutpurse (thieves) | AUTO-PICK | 172 | 66% | 38% | 5% | 82% | 49% | 6% | 11.6 | 47% (11/27) | 74/45%/0% | 23/65%/4% | 75/23%/9% |
| Stunt Double (echo) | AUTO-PICK | 90 | 76% | 59% | 4% | 91% | 62% | 2% | 7.8 | 46% (8/8) | – | 42/79%/2% | 48/42%/6% |
| Con Men (benders) | AUTO-PICK | 159 | 91% | 73% | 4% | 89% | 72% | 0% | 7.9 | 43% (13/13) | – | 54/98%/0% | 105/60%/7% |
| Recluse (trading) | AUTO-PICK | 334 | 40% | 18% | 4% | 58% | 18% | 0% | 8.5 | 43% (24/29) | 125/6%/3% | 59/27%/0% | 150/24%/6% |
| Caravan (yellow) | AUTO-PICK | 155 | 46% | 19% | 4% | 67% | 40% | 0% | 14.2 | 39% (3/20) | – | 67/24%/6% | 88/16%/2% |
| Doppelganger (echo) | AUTO-PICK | 242 | 40% | 21% | 4% | 82% | 25% | 0% | 11.7 | 41% (17/18) | – | 75/28%/3% | 167/18%/4% |
| Busker (echo) | AUTO-PICK | 189 | 58% | 30% | 4% | 81% | 44% | 0% | 9.7 | 49% (15/27) | 76/46%/4% | 21/48%/10% | 92/13%/2% |
| Ringleader (yellow) | AUTO-PICK | 293 | 31% | 11% | 3% | 58% | 16% | 0% | 11.8 | 40% (13/22) | – | 164/9%/4% | 129/12%/3% |
| HR (benders) | AUTO-PICK | 440 | 37% | 16% | 3% | 70% | 46% | 0% | 13.0 | 40% (13/40) | – | 204/10%/1% | 236/21%/6% |
| Panel (red) | AUTO-PICK | 93 | 45% | 29% | 3% | 96% | 74% | 0% | 9.9 | 45% (2/8) | – | 60/27%/3% | 33/33%/3% |
| Extortionist (thieves) | AUTO-PICK | 240 | 25% | 10% | 3% | 71% | 21% | 0% | 11.3 | 30% (5/11) | – | 35/29%/3% | 205/7%/2% |
| Mentor & Protégés (red) | AUTO-PICK | 205 | 28% | 11% | 2% | 57% | 26% | 0% | 10.5 | 38% (9/11) | – | 55/9%/2% | 150/12%/3% |
| Shift Crew (purple) | AUTO-PICK | 401 | 23% | 10% | 2% | 59% | 2% | 0% | 11.6 | 37% (24/10) | 104/3%/1% | 159/9%/2% | 138/17%/4% |
| Accomplice (thieves) | AUTO-PICK | 104 | 77% | 63% | 2% | 94% | 72% | 6% | 10.3 | 39% (6/7) | 56/64%/0% | 15/93%/0% | 33/45%/6% |
| Mob (red) | AUTO-PICK | 66 | 64% | 38% | 2% | 84% | 72% | 0% | 11.7 | 42% (2/8) | – | 18/22%/0% | 48/44%/2% |
| Double Agent (thieves) | AUTO-PICK + MISJUDGED | 193 | 31% | 20% | 1% | 84% | 55% | 0% | 12.9 | 53% (8/12) | – | 66/17%/0% | 127/21%/1% |
| Grifter (thieves) | AUTO-PICK | 144 | 47% | 26% | 0% | 89% | 58% | 0% | 12.0 | 49% (7/15) | – | 55/24%/0% | 89/28%/0% |
| Scouts (benders) | MIXED | 832 | 51% | 14% | 10% | 32% | 8% | 4% | 10.4 | 31% (48/79) | 432/12%/11% | 127/24%/12% | 273/11%/7% |
| Recruit Bonus (red) | MIXED | 356 | 45% | 14% | 8% | 45% | 6% | 0% | 9.6 | 36% (26/31) | 227/11%/8% | 66/26%/12% | 63/13%/5% |
| Alchemists (benders) | MIXED | 586 | 55% | 16% | 7% | 43% | 2% | 0% | 12.7 | 42% (42/92) | – | 344/15%/8% | 242/17%/6% |
| Deprogrammers (red) | MIXED | 166 | 72% | 31% | 7% | 46% | 15% | 0% | 12.9 | 36% (12/28) | 115/26%/5% | 19/42%/11% | 32/44%/13% |
| Window Dressers (market) | MIXED | 350 | 44% | 15% | 7% | 44% | 6% | 0% | 9.6 | 47% (28/44) | 81/12%/4% | 103/17%/11% | 166/16%/7% |
| Regular (market) | MIXED | 491 | 30% | 11% | 7% | 40% | 0% | 4% | 8.9 | 32% (31/17) | 167/5%/8% | 113/19%/10% | 211/11%/5% |
| Trendsetters (market) | MIXED | 403 | 41% | 15% | 7% | 42% | 5% | 0% | 11.8 | 43% (27/43) | 146/8%/5% | 124/19%/8% | 133/20%/8% |
| Agents (echo) | MIXED | 403 | 38% | 14% | 7% | 44% | 9% | 0% | 9.2 | 37% (27/29) | 183/12%/8% | 82/23%/9% | 138/10%/5% |
| Martyrs (trading) | MIXED | 381 | 42% | 14% | 7% | 33% | 6% | 0% | 10.8 | 32% (18/33) | 124/6%/7% | 126/19%/8% | 131/16%/5% |
| Toastmaster (silver) | MIXED | 472 | 31% | 9% | 6% | 43% | 2% | 0% | 9.5 | 37% (29/25) | 225/9%/8% | 48/25%/6% | 199/6%/4% |
| Critic (market) | MIXED | 623 | 30% | 8% | 6% | 38% | 2% | 2% | 8.6 | 38% (36/35) | 206/6%/6% | 108/16%/10% | 309/7%/4% |
| Kingpin (thieves) | MIXED | 447 | 36% | 13% | 5% | 48% | 9% | 2% | 10.8 | 41% (23/42) | 180/4%/4% | 114/22%/6% | 153/16%/5% |
| Triplets (red) | MIXED | 597 | 23% | 8% | 5% | 41% | 6% | 0% | 10.6 | 38% (30/21) | 284/2%/1% | 172/15%/6% | 141/12%/10% |
| Connoisseurs (market) | MIXED | 569 | 32% | 9% | 4% | 61% | 4% | 2% | 10.3 | 30% (31/22) | 163/4%/3% | 133/16%/5% | 273/8%/5% |
| Raiders (trading) | MIXED | 507 | 25% | 7% | 4% | 44% | 0% | 0% | 9.5 | 40% (27/25) | – | 197/7%/7% | 310/7%/3% |
| Clockmakers (purple) | MIXED | 371 | 37% | 7% | 4% | 59% | 7% | 0% | 10.2 | 37% (15/34) | – | 153/7%/4% | 218/8%/4% |
| Doormen (market) | MIXED | 501 | 33% | 9% | 4% | 60% | 0% | 0% | 11.5 | 35% (33/25) | – | 200/11%/4% | 301/9%/4% |
| Party Crasher (benders) | MIXED | 1275 | 23% | 7% | 3% | 63% | 1% | 1% | 9.2 | 28% (54/27) | 520/1%/3% | 228/17%/6% | 527/7%/2% |
| Big Tent (yellow) | MIXED | 299 | 20% | 5% | 3% | 50% | 6% | 0% | 12.7 | 31% (6/12) | – | 112/4%/2% | 187/6%/4% |
| Cashier (trading) | MIXED | 559 | 18% | 7% | 3% | 43% | 0% | 0% | 9.0 | 41% (20/21) | 142/2%/2% | 131/11%/5% | 286/7%/3% |
| Window Shopper (market) | MIXED | 531 | 27% | 7% | 3% | 57% | 8% | 0% | 9.6 | 35% (18/30) | – | 173/12%/5% | 358/5%/2% |
| Muse (echo) | MIXED | 654 | 17% | 5% | 3% | 51% | 3% | 3% | 9.1 | 29% (23/9) | 254/3%/2% | 127/10%/6% | 273/5%/2% |
| Go-Between (yellow) | MIXED | 411 | 21% | 6% | 2% | 52% | 4% | 4% | 11.3 | 28% (10/14) | 81/2%/2% | 144/10%/5% | 186/3%/1% |
| Night Owls (purple) | MIXED | 248 | 11% | 4% | 2% | 60% | 0% | 0% | 7.4 | 32% (7/2) | – | 50/2%/0% | 198/5%/3% |
| Sticky Fingers (thieves) | MIXED | 541 | 17% | 5% | 2% | 36% | 4% | 4% | 8.8 | 29% (15/11) | 117/3%/3% | 166/7%/2% | 258/4%/2% |
| Exporters (trading) | MIXED | 568 | 15% | 2% | 2% | 38% | 0% | 0% | 9.9 | 24% (10/10) | – | 219/3%/3% | 349/2%/1% |
| Gift Wrapper (silver) | MIXED | 510 | 12% | 3% | 2% | 62% | 8% | 0% | 10.3 | 25% (11/4) | – | 160/6%/3% | 350/1%/1% |
| Hot Streak (purple) | MIXED | 385 | 13% | 4% | 2% | 53% | 0% | 0% | 8.8 | 40% (14/6) | – | 117/5%/3% | 268/3%/1% |
| Closer (purple) | MIXED | 402 | 15% | 4% | 2% | 60% | 0% | 0% | 8.8 | 30% (13/5) | – | 170/6%/4% | 232/2%/0% |
| Heiresses (trading) | MIXED | 370 | 8% | 5% | 2% | 67% | 0% | 0% | 6.1 | 48% (15/0) | – | 114/8%/4% | 256/4%/1% |
| Debt Collectors (silver) | MIXED | 400 | 14% | 6% | 2% | 75% | 0% | 0% | 10.2 | 38% (16/5) | – | 124/10%/2% | 276/4%/1% |
| Hangers-On (silver) | MIXED | 426 | 12% | 3% | 1% | 36% | 0% | 0% | 14.8 | 26% (10/4) | – | 159/4%/3% | 267/2%/1% |
| Desperado (thieves) | MIXED | 584 | 11% | 3% | 1% | 47% | 0% | 0% | 8.9 | 30% (13/7) | – | 186/5%/2% | 398/2%/1% |
| Harmonist (yellow) | MIXED | 295 | 9% | 3% | 1% | 22% | 0% | 0% | 11.9 | 26% (6/1) | – | 122/2%/0% | 173/4%/2% |
| Collector (silver) | MIXED | 568 | 11% | 3% | 1% | 63% | 6% | 0% | 11.6 | 25% (12/4) | 74/0%/0% | 178/6%/1% | 316/2%/1% |
| Shopaholics (market) | MIXED | 382 | 14% | 3% | 1% | 42% | 0% | 0% | 12.3 | 35% (11/8) | – | 122/2%/0% | 260/4%/2% |
| Debutantes (silver) | MIXED | 333 | 10% | 2% | 1% | 43% | 0% | 0% | 13.5 | 29% (7/3) | – | 115/3%/3% | 218/2%/0% |
| Proselytizers (red) | MIXED | 453 | 13% | 2% | 1% | 71% | 14% | 0% | 12.3 | 22% (4/9) | – | 191/2%/2% | 262/1%/0% |
| Tribute Band (echo) | MIXED + MISJUDGED | 138 | 7% | 5% | 1% | 100% | 0% | 0% | 18.0 | 50% (5/0) | – | 12/0%/0% | 126/6%/1% |
| Anarchist (benders) | DEAD | 1302 | 9% | 3% | 1% | 46% | 0% | 0% | 10.0 | 30% (29/6) | – | 471/2%/1% | 831/3%/1% |
| Customs (yellow) | DEAD | 502 | 7% | 1% | 1% | 43% | 0% | 0% | 9.3 | 22% (6/2) | 75/3%/0% | 128/2%/2% | 299/1%/0% |
| Smooth Talkers (silver) | DEAD | 321 | 10% | 1% | 1% | 50% | 0% | 0% | 10.5 | 29% (4/5) | – | 51/2%/0% | 270/1%/1% |
| Courier (purple) | DEAD | 524 | 9% | 2% | 1% | 67% | 0% | 0% | 8.9 | 20% (7/2) | – | 174/4%/1% | 350/1%/0% |
| Tastemaker (yellow) | DEAD | 444 | 6% | 1% | 0% | 50% | 0% | 0% | 9.3 | 23% (3/3) | – | 133/1%/0% | 311/1%/1% |
| Hoarder (trading) | DEAD | 474 | 4% | 0% | 0% | 0% | 0% | 0% | 13.2 | 10% (2/0) | – | 100/1%/2% | 374/0%/0% |
| Bodyguards (thieves) | DEAD | 239 | 5% | 0% | 0% | 100% | 100% | 0% | 6.4 | 17% (0/2) | – | 45/0%/0% | 194/1%/1% |
| Gossip (purple) | DEAD | 500 | 6% | 2% | 0% | 67% | 0% | 0% | 8.3 | 22% (7/0) | – | 165/3%/1% | 335/1%/0% |
| Extra Hand (benders) | DEAD | 1235 | 3% | 1% | 0% | 36% | 0% | 0% | 12.0 | 35% (9/3) | – | 355/1%/0% | 880/1%/0% |
| Shoplifter (thieves) | DEAD | 425 | 4% | 1% | 0% | 25% | 0% | 0% | 11.4 | 31% (4/1) | – | 99/0%/0% | 326/1%/0% |
| Patroness (market) | DEAD | 426 | 4% | 0% | 0% | 50% | 0% | 0% | 12.1 | 12% (2/0) | – | 103/0%/0% | 323/1%/0% |
| Wallflower (echo) | DEAD | 261 | 1% | 0% | 0% | – | – | – | 10.8 | 0% (0/0) | – | 26/0%/0% | 235/0%/0% |
| Old Maid (benders) | DEAD | 1703 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 521/0%/0% | 1182/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | DEAD | 1504 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 53/0%/0% | 403/0%/0% | 1048/0%/0% |
| Polisher (silver) | DEAD | 96 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 23/0%/0% | 54/0%/0% | 19/0%/0% |
| Raiders (trading) | DEAD | 57 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 46/0%/0% |
| Hot Streak (purple) | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 31/0%/0% |
| Tribute Band (echo) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| Party Crasher (benders) | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 18/0%/0% | 12/0%/0% | 1/0%/0% |
| Anarchist (benders) | THIN DATA | 11 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 11/0%/0% |
| Debutantes (silver) | THIN DATA | 14 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 9/0%/0% |
| Extra Hand (benders) | THIN DATA | 8 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 1/0%/0% |
| Hoarder (trading) | THIN DATA | 10 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 3/0%/0% |
| Doppelganger (echo) | THIN DATA | 12 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 10/0%/0% |
| Debt Collectors (silver) | THIN DATA | 5 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 3/0%/0% |
| Heiresses (trading) | THIN DATA | 1 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | – |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Scouts (3) | REAL CHOICE | 32 | 94% | 34% | 28% | 18% | 0% | 100% | 10.9 | 43% (6/7) | – | 14/50%/21% | 18/22%/33% |
| choose member:Shopkeeper (4) | REAL CHOICE + MISJUDGED | 18 | 89% | 39% | 28% | 43% | 0% | 100% | 11.9 | 56% (4/5) | – | 7/57%/14% | 11/27%/36% |
| choose member:P3's Kingpin (4) | REAL CHOICE | 16 | 19% | 6% | 13% | 0% | 0% | 100% | 3.8 | 0% (0/0) | – | – | 16/6%/13% |
| choose member:Line Cutters (2) | REAL CHOICE | 34 | 97% | 56% | 12% | 42% | 11% | 100% | 8.7 | 45% (3/11) | – | 16/50%/13% | 18/61%/11% |
| choose member:Cutpurse (3) | AUTO-PICK + MISJUDGED | 15 | 93% | 40% | 27% | 50% | 0% | 100% | 8.7 | 71% (4/6) | – | 7/57%/29% | 8/25%/25% |
| choose member:Dabblers (3) | AUTO-PICK | 25 | 92% | 28% | 24% | 57% | 0% | 100% | 7.4 | 48% (4/7) | – | 8/25%/25% | 17/29%/24% |
| choose member:Deprogrammers (3) | AUTO-PICK | 22 | 73% | 41% | 23% | 67% | 0% | 100% | 4.9 | 31% (4/1) | – | 7/43%/29% | 15/40%/20% |
| choose member:Accomplice (3) | AUTO-PICK | 20 | 90% | 40% | 20% | 75% | 0% | 100% | 10.1 | 39% (2/5) | – | 13/46%/23% | 7/29%/14% |
| choose member:Roadie | AUTO-PICK | 19 | 89% | 68% | 16% | 77% | 69% | 100% | 1.9 | 25% (0/2) | – | 7/71%/29% | 12/67%/8% |
| pass:Pass | AUTO-PICK | 6993 | 41% | 21% | 7% | 61% | 14% | 14% | 9.2 | 40% (598/465) | 1670/43%/9% | 2239/23%/10% | 3084/7%/4% |
| choose member:P3's Con Men (7) | AUTO-PICK | 30 | 50% | 20% | 7% | 83% | 17% | 83% | 12.7 | 36% (0/5) | – | 3/67%/0% | 27/15%/7% |
| choose member:P4's Doppelganger (5) | AUTO-PICK | 16 | 19% | 13% | 6% | 50% | 0% | 50% | 17.0 | 33% (1/0) | – | – | 16/13%/6% |
| choose member:P4's Shopkeeper (4) | AUTO-PICK | 18 | 39% | 11% | 6% | 50% | 50% | 100% | 5.7 | 33% (1/1) | – | 2/0%/0% | 16/13%/6% |
| choose member:P4's Con Men (7) | AUTO-PICK | 24 | 46% | 21% | 4% | 60% | 0% | 40% | 11.4 | 45% (2/3) | – | – | 24/21%/4% |
| choose member:P1's Con Men (7) | AUTO-PICK | 28 | 57% | 25% | 4% | 71% | 0% | 100% | 14.5 | 25% (2/2) | – | – | 28/25%/4% |
| followers:top | AUTO-PICK | 4918 | 21% | 14% | 2% | 71% | 50% | 1% | 8.5 | 38% (110/156) | 89/0%/0% | 1820/0%/0% | 3009/22%/4% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | AUTO-PICK | 19 | 26% | 21% | 0% | 75% | 25% | 0% | 23.6 | 50% (1/1) | – | 12/17%/0% | 7/29%/0% |
| choose member:P2's Roadie (3) | AUTO-PICK | 25 | 28% | 12% | 0% | 100% | 67% | 0% | 19.2 | 20% (0/1) | – | 1/0%/0% | 24/13%/0% |
| followers:small | MIXED | 6993 | 39% | 14% | 7% | 44% | 0% | 6% | 10.1 | 37% (633/367) | 1670/13%/8% | 2239/18%/10% | 3084/12%/5% |
| choose member:P3's Grifter (8) | MIXED | 16 | 31% | 6% | 6% | 0% | 0% | 100% | 16.5 | 40% (1/1) | – | – | 16/6%/6% |
| trade:P2: Roadie ↔ P4: Deprogrammers | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/0%/0% | 10/10%/10% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 5/20%/20% | 14/0%/0% |
| choose member:P3's Roadie (3) | MIXED | 20 | 35% | 20% | 5% | 25% | 25% | 25% | 8.5 | 67% (3/1) | – | – | 20/20%/5% |
| trade:P4: Dabblers ↔ P2: Volunteer | MIXED | 20 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 10/10%/10% | 10/0%/0% |
| choose member:P1's Dabblers (3) | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 4.3 | 0% (0/0) | – | 1/0%/0% | 20/5%/5% |
| trade:P3: Line Cutters ↔ P2: Volunteer | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 2.7 | 0% (0/0) | – | 7/14%/14% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Cutpurse | MIXED | 21 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/17%/17% | 15/0%/0% |
| choose member:P3's Line Cutters (2) | MIXED | 25 | 12% | 4% | 4% | 100% | 0% | 0% | 3.8 | 33% (1/0) | – | 2/0%/0% | 23/4%/4% |
| choose member:P4's Kingpin (4) | MIXED | 28 | 21% | 0% | 4% | – | – | – | 7.0 | 33% (0/2) | – | 1/0%/0% | 27/0%/4% |
| followers:mid | MIXED | 6346 | 16% | 7% | 3% | 36% | 2% | 2% | 8.9 | 38% (188/193) | 1050/0%/0% | 2216/1%/1% | 3080/13%/5% |
| trade:P3: Scouts ↔ P2: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/33%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 19.1 | 100% (1/1) | – | 8/0%/0% | 8/13%/0% |
| trade:P1: Martyrs ↔ P2: Shopkeeper | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 3.7 | 0% (0/0) | – | 7/0%/0% | 10/10%/0% |
| trade:P2: Busker ↔ P1: Roadie | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | MIXED | 17 | 18% | 6% | 0% | 0% | 0% | 0% | 5.7 | 100% (1/2) | – | 10/10%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Line Cutters | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Triplets | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P3: Volunteer | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 15.0 | 50% (1/0) | – | 5/0%/0% | 16/6%/0% |
| trade:P1: Line Cutters ↔ P4: Volunteer | MIXED | 23 | 13% | 4% | 0% | 100% | 0% | 0% | 8.8 | 33% (0/1) | – | 9/11%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED | 22 | 14% | 0% | 0% | – | – | – | 5.0 | 67% (0/2) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P3: Volunteer | MIXED | 20 | 10% | 0% | 0% | – | – | – | 5.8 | 50% (0/1) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | MIXED | 15 | 20% | 0% | 0% | – | – | – | 22.0 | 33% (0/1) | – | 7/0%/0% | 8/0%/0% |
| choose member:P1's Busker (4) | MIXED | 18 | 22% | 0% | 0% | – | – | – | 9.4 | 50% (0/2) | – | – | 18/0%/0% |
| choose member:P2's Dabblers (3) | FILLER | 21 | 10% | 5% | 5% | 0% | 0% | 100% | 4.0 | 0% (0/0) | – | 3/0%/0% | 18/6%/6% |
| choose member:P1's Alchemists (5) | FILLER | 15 | 13% | 7% | 0% | 100% | 0% | 100% | 6.0 | 50% (1/0) | – | – | 15/7%/0% |
| choose member:P2's Line Cutters (2) | FILLER | 21 | 10% | 5% | 0% | 0% | 0% | 100% | 10.0 | 50% (1/0) | – | 2/0%/0% | 19/5%/0% |
| choose member:P3's Dabblers (3) | FILLER | 33 | 12% | 3% | 0% | 100% | 0% | 100% | 17.3 | 25% (1/0) | – | 3/0%/0% | 30/3%/0% |
| choose member:P3's Early Birds (3) | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/7% |
| choose member:P2's Cutpurse (3) | DEAD | 16 | 6% | 0% | 6% | – | – | – | 1.2 | 0% (0/0) | – | 1/0%/100% | 15/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Deprogrammers | DEAD | 16 | 6% | 0% | 6% | – | – | – | 1.0 | 0% (0/0) | – | 3/0%/0% | 13/0%/8% |
| trade:P2: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.4 | 0% (0/0) | – | 5/0%/20% | 13/0%/0% |
| trade:P2: Cutpurse ↔ P3: Deprogrammers | DEAD | 21 | 5% | 0% | 5% | – | – | – | 0.8 | 100% (0/1) | – | 6/0%/17% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 29 | 7% | 0% | 3% | – | – | – | 12.7 | 0% (0/0) | – | 9/0%/11% | 20/0%/0% |
| choose member:P2's Scouts (3) | DEAD | 21 | 5% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | 1/0%/0% | 20/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| choose member:P3's Party Crasher (4) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| choose member:P2's Muse (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| choose member:P1's Early Birds (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | – | 17/0%/0% |
| choose member:P4's Cutpurse (3) | DEAD | 26 | 4% | 0% | 0% | – | – | – | 2.4 | 0% (0/0) | – | 1/0%/0% | 25/0%/0% |
| trade:P1: Dabblers ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| pass:Don’t swap | DEAD | 497 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 229/0%/0% | 268/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Volunteer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Polisher ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Accomplice ↔ P2: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| choose member:P1's Accomplice (3) | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 37/0%/0% |
| choose member:P4's Line Cutters (2) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P1: Con Men ↔ Shop: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P1: Con Men ↔ P3: Alchemists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P3: Alchemists ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Con Men ↔ Shop: Anarchist | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Doppelganger ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Scouts ↔ P2: Volunteer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Roadie ↔ P2: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Volunteer | DEAD | 33 | 3% | 0% | 0% | – | – | – | 21.5 | 0% (0/0) | – | 14/0%/0% | 19/0%/0% |
| trade:P4: Dabblers ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Polisher ↔ P4: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Polisher | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P1: Muse ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Busker ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P4: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Busker ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Recluse ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Recluse ↔ P4: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Doppelganger ↔ P4: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Scouts ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Early Birds ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Line Cutters ↔ P4: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 4.6 | 0% (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P3: Loyalists ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P4's Scouts (3) | DEAD | 25 | 4% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P2: Polisher ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Scouts ↔ P3: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P4: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.9 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Early Birds ↔ P2: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Triplets ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| choose member:P3's Volunteer (1) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| choose member:P1's Scouts (3) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Dabblers ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Martyrs ↔ P2: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| choose member:P3's Accomplice (3) | DEAD | 22 | 5% | 0% | 0% | – | – | – | 23.4 | 0% (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P2: Scouts ↔ P3: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Roadie ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Scouts ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Old Maid | DEAD | 24 | 4% | 0% | 0% | – | – | – | 7.0 | 100% (0/1) | – | 2/0%/0% | 22/0%/0% |
| trade:P1: Snobs ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 24/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ P3: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P3: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Agents ↔ P2: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P2: Roadie | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 16/0%/0% |
| choose member:P2's Party Crasher (4) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P2: Panel ↔ Shop: Anarchist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Exporters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 27 | 4% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P2: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ P4: Volunteer | DEAD | 16 | 6% | 0% | 0% | – | – | – | 81.1 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P1: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Scouts ↔ P3: Deprogrammers | DEAD | 30 | 3% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Scouts | DEAD | 30 | 3% | 0% | 0% | – | – | – | 18.4 | 0% (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P1: Line Cutters ↔ P3: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Old Maid | DEAD | 35 | 6% | 0% | 0% | – | – | – | 26.4 | 0% (0/0) | – | 3/0%/0% | 32/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 28 | 4% | 0% | 0% | – | – | – | 26.7 | 0% (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 19 | 5% | 0% | 0% | – | – | – | 13.9 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Party Crasher ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Triplets ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Volunteer | DEAD | 21 | 10% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Cutpurse ↔ P1: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Cutpurse ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P1: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P2: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Patriarch ↔ Shop: Gift Wrapper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| choose member:P2's Recruit Bonus (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Patriarch | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| choose member:P1's Line Cutters (2) | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 35/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 23.8 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.2 | 100% (0/1) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| choose member:P2's Accomplice (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| choose member:P3's Cutpurse (3) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 27/0%/0% |
| trade:P2: Dabblers ↔ P4: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Panel ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Roadie ↔ P1: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.6 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Accomplice ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Accomplice ↔ P2: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P1: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Scouts ↔ P4: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P4: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P4: Triplets ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Party Crasher ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ Shop: Sticky Fingers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Patriarch ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Polisher ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Alchemists ↔ P2: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 26.5 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 20.3 | 100% (0/1) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Early Birds | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P3: Early Birds ↔ P1: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Cutpurse ↔ P4: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Accomplice ↔ P2: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ P4: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P1: Martyrs ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Gardener ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Roadie ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Party Crasher ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Timekeepers ↔ P4: Bouncers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Bouncers ↔ P3: Timekeepers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Alchemists ↔ P4: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P3: Line Cutters ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Triplets ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P4: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Accomplice ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Dabblers ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Roadie ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ P3: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |

(26018 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| market | 1330 | 16% | 1270 | 21% |
| purple | 1218 | 17% | 995 | 19% |
| benders | 0 | – | 784 | 18% |
| trading | 1365 | 13% | 1094 | 17% |
| silver | 1342 | 14% | 1165 | 14% |
| yellow | 1028 | 16% | 862 | 12% |
| red | 1224 | 13% | 1262 | 12% |
| echo | 1180 | 13% | 1227 | 10% |
| thieves | 1340 | 13% | 1368 | 10% |
