# Choice report

22623 looked-ahead decisions from 230 games (/mnt/project-files/balance-1.0/merged/hard.choices). 15% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| purple: Crowd In | AUTO-PICK | 895 | 27% | 14% | 4% | 63% | 16% | 1% | 10.4 | 46% (63/39) | – | – | 895/14%/4% |
| red: Promote | AUTO-PICK | 625 | 51% | 29% | 4% | 85% | 49% | 1% | 13.7 | 48% (46/64) | – | 331/29%/3% | 294/29%/4% |
| thieves: Poach | AUTO-PICK + MISJUDGED | 563 | 39% | 23% | 3% | 80% | 41% | 2% | 10.4 | 50% (41/41) | – | – | 563/23%/3% |
| market: Peek | AUTO-PICK | 3006 | 26% | 11% | 3% | 59% | 11% | 12% | 11.4 | 36% (185/84) | 867/13%/5% | 1079/10%/3% | 1060/10%/3% |
| silver: Largesse | AUTO-PICK | 816 | 28% | 14% | 3% | 67% | 11% | 0% | 10.7 | 49% (56/51) | – | – | 816/14%/3% |
| purple: Sleep In | AUTO-PICK | 2436 | 34% | 14% | 3% | 62% | 16% | 4% | 13.3 | 43% (150/188) | 499/22%/4% | 808/15%/2% | 1129/9%/4% |
| yellow: Harvest | AUTO-PICK | 2699 | 25% | 12% | 3% | 71% | 42% | 9% | 10.7 | 41% (115/104) | 195/61%/2% | 939/11%/3% | 1565/7%/3% |
| market: Bury | AUTO-PICK | 2116 | 27% | 10% | 3% | 64% | 12% | 10% | 11.0 | 44% (110/124) | – | 752/15%/3% | 1364/8%/3% |
| thieves: Help Yourself | AUTO-PICK | 1282 | 44% | 26% | 3% | 84% | 54% | 1% | 12.3 | 44% (69/98) | 121/90%/0% | 434/27%/3% | 727/15%/3% |
| echo: Cover | AUTO-PICK | 1706 | 28% | 13% | 3% | 76% | 27% | 5% | 13.1 | 49% (78/125) | – | 891/12%/3% | 815/13%/3% |
| market: Spree | AUTO-PICK | 982 | 29% | 12% | 3% | 61% | 27% | 0% | 11.2 | 45% (39/76) | – | – | 982/12%/3% |
| thieves: Crime Wave | AUTO-PICK | 1713 | 28% | 13% | 3% | 71% | 26% | 2% | 12.7 | 45% (99/90) | – | 935/13%/2% | 778/14%/4% |
| silver: Toast | AUTO-PICK | 2878 | 27% | 10% | 3% | 65% | 26% | 14% | 12.5 | 42% (111/179) | 962/9%/3% | 1070/10%/2% | 846/13%/3% |
| echo: Build Up | AUTO-PICK | 2812 | 27% | 11% | 3% | 69% | 26% | 6% | 12.5 | 46% (143/174) | 528/21%/4% | 1035/10%/2% | 1249/9%/3% |
| thieves: Stash | AUTO-PICK | 3023 | 25% | 11% | 3% | 63% | 22% | 8% | 11.7 | 43% (150/140) | 656/17%/3% | 1101/10%/3% | 1266/9%/2% |
| red: Recruit a Member | AUTO-PICK | 631 | 25% | 12% | 2% | 71% | 33% | 5% | 12.8 | 43% (27/29) | – | – | 631/12%/2% |
| yellow: Melting Pot | AUTO-PICK | 2193 | 23% | 10% | 2% | 69% | 23% | 7% | 11.3 | 42% (88/107) | – | 915/13%/2% | 1278/9%/2% |
| echo: Echo | AUTO-PICK + MISJUDGED | 1503 | 34% | 22% | 2% | 87% | 54% | 1% | 13.1 | 51% (77/95) | 268/42%/3% | 542/21%/2% | 693/15%/2% |
| purple: Last Call | AUTO-PICK | 1466 | 32% | 14% | 2% | 69% | 0% | 1% | 13.7 | 45% (100/114) | – | 733/13%/1% | 733/15%/3% |
| yellow: Big Dilute | AUTO-PICK | 1886 | 24% | 12% | 2% | 74% | 33% | 6% | 11.0 | 43% (83/82) | – | 679/17%/1% | 1207/9%/2% |
| red: Walk-In | AUTO-PICK | 1629 | 28% | 14% | 2% | 80% | 56% | 8% | 13.2 | 41% (38/95) | 473/16%/2% | 453/17%/2% | 703/11%/2% |
| trading: Estate Sale | AUTO-PICK | 2097 | 25% | 12% | 2% | 78% | 33% | 4% | 11.8 | 40% (77/101) | – | 948/14%/2% | 1149/10%/2% |
| echo: Reprise | AUTO-PICK | 2517 | 22% | 13% | 2% | 84% | 48% | 1% | 12.2 | 44% (70/104) | 722/16%/1% | 826/13%/1% | 969/12%/2% |
| red: Demote | AUTO-PICK | 1087 | 28% | 14% | 1% | 76% | 41% | 2% | 14.4 | 44% (47/57) | – | 526/15%/2% | 561/13%/1% |
| market: Savings | MIXED | 4494 | 15% | 5% | 3% | 42% | 14% | 31% | 8.5 | 32% (142/67) | 873/11%/4% | 1648/4%/3% | 1973/4%/3% |
| purple: Hold Up | MIXED | 4087 | 18% | 7% | 3% | 49% | 11% | 29% | 10.3 | 37% (175/88) | 770/15%/4% | 1441/7%/2% | 1876/5%/4% |
| market: Out of Style | MIXED | 3533 | 21% | 9% | 3% | 59% | 8% | 12% | 10.5 | 42% (143/160) | 471/24%/5% | 1307/8%/2% | 1755/5%/3% |
| red: Tryout | MIXED | 2250 | 18% | 8% | 3% | 68% | 34% | 17% | 10.9 | 41% (79/64) | 403/18%/5% | 674/10%/2% | 1173/4%/3% |
| silver: Party Favors | MIXED | 2305 | 21% | 9% | 2% | 67% | 27% | 8% | 12.9 | 43% (87/95) | – | 858/13%/1% | 1447/7%/3% |
| trading: Allowance | MIXED | 3400 | 20% | 9% | 2% | 66% | 17% | 9% | 11.0 | 41% (152/111) | 674/17%/3% | 1301/8%/2% | 1425/7%/3% |
| silver: Sweet Talk | MIXED | 2692 | 17% | 7% | 2% | 66% | 32% | 13% | 10.6 | 40% (69/90) | – | 1075/10%/1% | 1617/6%/3% |
| market: Recruit Twice | MIXED | 3180 | 14% | 5% | 2% | 63% | 33% | 15% | 9.7 | 38% (75/72) | – | 1660/3%/3% | 1520/7%/2% |
| silver: Party Gifts | MIXED | 3794 | 17% | 8% | 2% | 58% | 18% | 16% | 10.7 | 46% (137/130) | 949/11%/3% | 1536/5%/2% | 1309/9%/2% |
| thieves: Shake Down | MIXED | 2191 | 23% | 10% | 2% | 72% | 27% | 7% | 11.5 | 42% (85/103) | – | 790/14%/2% | 1401/7%/2% |
| echo: Encore | MIXED | 2598 | 15% | 7% | 2% | 67% | 34% | 14% | 11.1 | 43% (73/69) | – | 1157/8%/1% | 1441/7%/3% |
| trading: Farewell | MIXED | 3135 | 15% | 6% | 2% | 56% | 24% | 16% | 10.9 | 43% (78/99) | – | 1624/5%/2% | 1511/8%/2% |
| red: Gather | MIXED | 2647 | 15% | 7% | 2% | 63% | 23% | 24% | 9.6 | 38% (87/52) | 543/13%/4% | 1010/5%/1% | 1094/5%/2% |
| thieves: Lie Low | MIXED | 4370 | 13% | 6% | 2% | 65% | 29% | 26% | 8.2 | 45% (117/98) | 812/14%/2% | 1567/4%/1% | 1991/4%/2% |
| echo: Greatest Hits | MIXED | 2006 | 7% | 3% | 2% | 59% | 7% | 44% | 6.4 | 46% (45/17) | – | – | 2006/3%/2% |
| yellow: Trade Seeds | MIXED | 4587 | 12% | 4% | 2% | 58% | 21% | 25% | 10.6 | 41% (75/130) | 688/16%/4% | 1749/2%/1% | 2150/2%/2% |
| silver: Polish | MIXED | 4642 | 10% | 4% | 1% | 57% | 36% | 39% | 9.6 | 38% (82/62) | 1033/9%/2% | 1562/3%/1% | 2047/3%/2% |
| yellow: Dilute | MIXED | 4191 | 13% | 6% | 1% | 71% | 28% | 19% | 10.0 | 39% (103/88) | 745/15%/2% | 1492/5%/1% | 1954/4%/1% |
| yellow: Makeover | MIXED | 1943 | 8% | 4% | 1% | 61% | 25% | 35% | 9.5 | 35% (27/18) | – | – | 1943/4%/1% |
| purple: Right Away | FILLER | 5042 | 11% | 4% | 3% | 30% | 12% | 60% | 7.0 | 29% (112/42) | 1164/6%/2% | 1748/2%/3% | 2130/4%/4% |
| trading: Exchange | FILLER | 4915 | 9% | 3% | 1% | 46% | 19% | 50% | 8.7 | 39% (70/93) | 1217/4%/3% | 1842/1%/1% | 1856/5%/1% |
| purple: Crunch Time | DEAD | 3993 | 9% | 2% | 3% | 23% | 6% | 63% | 6.1 | 30% (56/51) | – | 1734/2%/3% | 2259/3%/3% |
| trading: Splurge | DEAD | 5260 | 7% | 3% | 2% | 37% | 20% | 57% | 7.5 | 36% (87/40) | 1124/8%/3% | 1847/0%/0% | 2289/2%/2% |
| trading: Cash In | DEAD | 2189 | 8% | 2% | 2% | 51% | 29% | 39% | 7.3 | 36% (18/36) | – | – | 2189/2%/2% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Volunteer (red) | AUTO-PICK | 297 | 58% | 24% | 12% | 55% | 1% | 3% | 8.0 | 43% (41/32) | 158/27%/15% | 53/26%/15% | 86/16%/6% |
| Dabblers (benders) | AUTO-PICK | 1101 | 55% | 18% | 10% | 50% | 10% | 0% | 11.0 | 35% (82/124) | 646/14%/11% | 200/34%/10% | 255/17%/8% |
| Timekeepers (purple) | AUTO-PICK | 649 | 48% | 16% | 9% | 53% | 12% | 0% | 9.6 | 40% (46/71) | 312/9%/10% | 179/19%/7% | 158/28%/11% |
| Line Cutters (benders) | AUTO-PICK | 708 | 75% | 30% | 9% | 61% | 24% | 4% | 11.7 | 37% (37/144) | 459/31%/10% | 104/39%/10% | 145/20%/8% |
| Kingpin (thieves) | AUTO-PICK | 644 | 42% | 14% | 8% | 58% | 6% | 1% | 11.2 | 35% (34/60) | 324/6%/7% | 132/26%/6% | 188/20%/10% |
| Polisher (silver) | AUTO-PICK | 671 | 34% | 13% | 7% | 52% | 3% | 2% | 9.1 | 42% (62/34) | 291/14%/10% | 110/26%/5% | 270/6%/4% |
| Shopkeeper (trading) | AUTO-PICK | 191 | 80% | 53% | 6% | 70% | 30% | 0% | 9.5 | 38% (18/28) | 84/73%/8% | 55/56%/7% | 52/19%/2% |
| Roadie (echo) | AUTO-PICK | 256 | 69% | 43% | 6% | 77% | 17% | 1% | 9.8 | 42% (36/31) | 170/49%/7% | 26/46%/0% | 60/22%/7% |
| Snobs (market) | AUTO-PICK | 403 | 51% | 22% | 6% | 67% | 33% | 0% | 12.5 | 41% (17/55) | – | 230/16%/7% | 173/31%/6% |
| Drifters (yellow) | AUTO-PICK | 510 | 42% | 18% | 6% | 63% | 26% | 0% | 10.8 | 37% (26/44) | 163/26%/9% | 179/21%/6% | 168/7%/3% |
| Philanthropists (silver) | AUTO-PICK | 393 | 52% | 21% | 6% | 60% | 15% | 0% | 12.5 | 40% (35/43) | – | 143/23%/6% | 250/19%/6% |
| Bouncers (purple) | AUTO-PICK | 688 | 39% | 14% | 6% | 53% | 3% | 0% | 11.8 | 39% (55/48) | 290/11%/7% | 112/22%/9% | 286/13%/4% |
| Window Dressers (market) | AUTO-PICK | 591 | 47% | 17% | 5% | 54% | 8% | 1% | 12.0 | 32% (28/57) | 199/10%/8% | 198/20%/4% | 194/21%/3% |
| Chronicler (echo) | AUTO-PICK | 512 | 51% | 18% | 5% | 65% | 12% | 0% | 12.3 | 40% (42/58) | – | 267/19%/5% | 245/17%/5% |
| Old Money (trading) | AUTO-PICK | 548 | 40% | 13% | 5% | 53% | 12% | 0% | 11.6 | 34% (28/43) | – | 262/12%/5% | 286/15%/5% |
| Gardener (yellow) | AUTO-PICK | 340 | 47% | 30% | 4% | 82% | 49% | 2% | 10.9 | 45% (14/35) | 84/69%/6% | 75/43%/7% | 181/7%/3% |
| Patriarch (red) | AUTO-PICK | 204 | 50% | 25% | 4% | 75% | 35% | 0% | 10.5 | 33% (10/18) | – | 133/17%/5% | 71/41%/4% |
| Cutpurse (thieves) | AUTO-PICK | 274 | 61% | 35% | 4% | 86% | 54% | 2% | 11.3 | 43% (14/35) | 152/40%/3% | 30/57%/7% | 92/18%/7% |
| Fan Club (echo) | AUTO-PICK | 210 | 72% | 41% | 4% | 83% | 43% | 0% | 13.8 | 49% (21/35) | – | 98/55%/5% | 112/29%/4% |
| Con Men (benders) | AUTO-PICK | 351 | 76% | 54% | 4% | 90% | 71% | 0% | 10.6 | 37% (10/39) | – | 116/86%/2% | 235/39%/6% |
| Extortionist (thieves) | AUTO-PICK | 299 | 40% | 22% | 4% | 69% | 31% | 0% | 11.5 | 35% (17/18) | – | 110/30%/5% | 189/17%/4% |
| Shift Crew (purple) | AUTO-PICK | 770 | 23% | 10% | 4% | 57% | 8% | 1% | 9.3 | 41% (41/29) | 190/3%/1% | 313/10%/4% | 267/16%/6% |
| High Society (silver) | AUTO-PICK | 342 | 49% | 19% | 4% | 72% | 33% | 0% | 11.1 | 40% (18/41) | – | 95/22%/3% | 247/17%/4% |
| Doppelganger (echo) | AUTO-PICK | 460 | 36% | 18% | 4% | 65% | 21% | 0% | 10.3 | 43% (32/32) | – | 145/28%/4% | 315/14%/3% |
| Window Shopper (market) | AUTO-PICK | 745 | 34% | 12% | 4% | 62% | 17% | 0% | 10.6 | 39% (38/54) | – | 225/22%/6% | 520/8%/3% |
| Busker (echo) | AUTO-PICK | 285 | 64% | 39% | 4% | 79% | 30% | 0% | 10.8 | 45% (27/39) | 118/55%/3% | 50/58%/4% | 117/15%/3% |
| Double Agent (thieves) | AUTO-PICK | 345 | 37% | 19% | 3% | 83% | 45% | 0% | 11.4 | 33% (9/23) | – | 151/15%/2% | 194/21%/5% |
| Dyer (yellow) | AUTO-PICK | 293 | 48% | 22% | 3% | 80% | 32% | 0% | 10.8 | 40% (19/29) | – | 65/54%/6% | 228/13%/3% |
| HR (benders) | AUTO-PICK | 653 | 41% | 19% | 3% | 73% | 47% | 0% | 16.5 | 40% (19/64) | – | 377/12%/1% | 276/29%/5% |
| Loyalists (red) | AUTO-PICK | 313 | 43% | 15% | 3% | 60% | 4% | 2% | 12.6 | 34% (25/21) | – | 131/22%/2% | 182/10%/3% |
| Ringleader (yellow) | AUTO-PICK | 509 | 34% | 12% | 3% | 65% | 8% | 0% | 12.6 | 38% (29/35) | – | 242/13%/2% | 267/10%/3% |
| Accomplice (thieves) | AUTO-PICK | 147 | 78% | 69% | 3% | 93% | 78% | 2% | 12.6 | 46% (7/9) | 99/69%/1% | 24/79%/8% | 24/58%/4% |
| Caravan (yellow) | AUTO-PICK | 299 | 40% | 17% | 2% | 63% | 27% | 0% | 11.7 | 31% (12/21) | – | 85/35%/2% | 214/10%/2% |
| Grifter (thieves) | AUTO-PICK | 349 | 43% | 23% | 2% | 85% | 51% | 0% | 12.0 | 45% (15/35) | – | 135/22%/2% | 214/23%/2% |
| Stunt Double (echo) | AUTO-PICK | 213 | 62% | 44% | 2% | 82% | 58% | 0% | 14.4 | 38% (8/21) | – | 85/65%/4% | 128/30%/1% |
| Panel (red) | AUTO-PICK | 122 | 44% | 30% | 2% | 89% | 50% | 0% | 14.9 | 42% (5/10) | – | 80/31%/1% | 42/26%/2% |
| Mentor & Protégés (red) | AUTO-PICK | 191 | 36% | 18% | 2% | 66% | 20% | 3% | 13.0 | 27% (8/9) | – | 58/19%/3% | 133/18%/1% |
| Mob (red) | AUTO-PICK | 66 | 55% | 35% | 2% | 91% | 74% | 0% | 19.3 | 42% (2/6) | – | 29/21%/0% | 37/46%/3% |
| Scouts (benders) | MIXED | 1370 | 51% | 14% | 10% | 39% | 5% | 2% | 9.6 | 37% (89/162) | 679/12%/12% | 239/28%/10% | 452/10%/6% |
| Early Birds (purple) | MIXED | 573 | 44% | 14% | 9% | 48% | 11% | 0% | 9.1 | 38% (35/57) | 225/16%/12% | 97/24%/9% | 251/10%/6% |
| Deprogrammers (red) | MIXED | 207 | 68% | 32% | 9% | 47% | 11% | 0% | 11.4 | 33% (14/30) | 165/28%/7% | 31/39%/13% | 11/64%/18% |
| Recruit Bonus (red) | MIXED | 456 | 45% | 14% | 8% | 48% | 2% | 0% | 10.1 | 38% (32/44) | 246/12%/9% | 54/31%/15% | 156/13%/5% |
| Trendsetters (market) | MIXED | 664 | 40% | 14% | 7% | 35% | 3% | 0% | 11.2 | 37% (42/54) | 238/11%/9% | 181/20%/7% | 245/13%/4% |
| Martyrs (trading) | MIXED | 605 | 38% | 15% | 7% | 40% | 6% | 0% | 10.1 | 35% (38/39) | 236/6%/7% | 193/21%/5% | 176/19%/8% |
| Connoisseurs (market) | MIXED | 991 | 36% | 9% | 6% | 51% | 2% | 1% | 10.5 | 24% (43/41) | 342/5%/9% | 269/16%/7% | 380/7%/4% |
| Critic (market) | MIXED | 834 | 31% | 11% | 6% | 38% | 2% | 0% | 10.1 | 41% (65/40) | 296/6%/7% | 221/19%/10% | 317/9%/3% |
| Recluse (trading) | MIXED | 587 | 40% | 16% | 6% | 43% | 10% | 0% | 10.7 | 42% (33/60) | 222/9%/5% | 141/21%/6% | 224/20%/8% |
| Agents (echo) | MIXED | 731 | 41% | 14% | 6% | 49% | 7% | 1% | 10.4 | 32% (46/48) | 405/13%/7% | 126/20%/6% | 200/11%/5% |
| Toastmaster (silver) | MIXED | 881 | 28% | 9% | 6% | 41% | 5% | 0% | 9.6 | 33% (47/33) | 290/10%/12% | 114/24%/4% | 477/4%/2% |
| Doormen (market) | MIXED | 810 | 39% | 10% | 6% | 49% | 4% | 0% | 10.9 | 32% (52/48) | – | 353/10%/5% | 457/9%/6% |
| Alchemists (benders) | MIXED | 1095 | 54% | 14% | 5% | 49% | 2% | 1% | 12.1 | 39% (83/150) | – | 477/16%/8% | 618/12%/4% |
| Clockmakers (purple) | MIXED | 680 | 30% | 8% | 5% | 28% | 0% | 0% | 10.4 | 35% (37/35) | – | 246/8%/6% | 434/8%/5% |
| Regular (market) | MIXED | 999 | 32% | 8% | 5% | 52% | 1% | 0% | 9.5 | 32% (52/48) | 284/7%/8% | 234/12%/5% | 481/7%/3% |
| Brokers (trading) | MIXED | 487 | 39% | 13% | 5% | 48% | 8% | 0% | 10.7 | 35% (30/34) | – | 187/13%/6% | 300/13%/4% |
| Raiders (trading) | MIXED | 736 | 25% | 6% | 4% | 51% | 0% | 0% | 11.9 | 29% (27/26) | – | 308/6%/4% | 428/6%/4% |
| Muse (echo) | MIXED | 1301 | 18% | 5% | 3% | 48% | 3% | 0% | 9.4 | 31% (45/28) | 428/3%/3% | 285/9%/5% | 588/4%/3% |
| Cashier (trading) | MIXED | 880 | 16% | 5% | 3% | 57% | 9% | 0% | 6.8 | 35% (25/22) | 211/3%/2% | 303/6%/4% | 366/5%/3% |
| Debt Collectors (silver) | MIXED | 508 | 18% | 9% | 3% | 60% | 0% | 0% | 9.1 | 45% (35/6) | – | 188/13%/1% | 320/7%/4% |
| Sticky Fingers (thieves) | MIXED | 842 | 17% | 4% | 3% | 47% | 9% | 0% | 10.9 | 28% (25/15) | 211/3%/2% | 254/7%/4% | 377/3%/2% |
| Party Crasher (benders) | MIXED | 2274 | 21% | 6% | 3% | 61% | 0% | 0% | 9.0 | 32% (105/50) | 916/1%/3% | 422/17%/5% | 936/5%/2% |
| Exporters (trading) | MIXED | 817 | 17% | 3% | 2% | 55% | 0% | 0% | 10.2 | 28% (16/22) | – | 395/2%/3% | 422/3%/2% |
| Triplets (red) | MIXED | 704 | 18% | 6% | 2% | 43% | 10% | 0% | 11.1 | 29% (20/15) | 342/2%/1% | 198/7%/4% | 164/11%/2% |
| Go-Between (yellow) | MIXED | 874 | 20% | 4% | 2% | 58% | 11% | 0% | 10.1 | 31% (16/37) | 188/6%/2% | 232/8%/3% | 454/1%/1% |
| Hangers-On (silver) | MIXED | 583 | 16% | 3% | 2% | 44% | 0% | 0% | 12.1 | 27% (13/13) | – | 199/3%/3% | 384/3%/2% |
| Bodyguards (thieves) | MIXED | 429 | 11% | 3% | 2% | 36% | 0% | 0% | 8.6 | 33% (9/7) | – | 128/2%/0% | 301/3%/3% |
| Big Tent (yellow) | MIXED | 594 | 19% | 7% | 2% | 53% | 8% | 0% | 9.2 | 33% (17/20) | – | 203/10%/4% | 391/5%/1% |
| Proselytizers (red) | MIXED | 541 | 16% | 3% | 2% | 53% | 0% | 0% | 14.1 | 29% (12/13) | – | 173/4%/2% | 368/2%/2% |
| Gift Wrapper (silver) | MIXED | 787 | 12% | 3% | 2% | 52% | 0% | 0% | 12.5 | 28% (20/7) | – | 269/6%/4% | 518/2%/1% |
| Hot Streak (purple) | MIXED | 895 | 14% | 4% | 2% | 36% | 0% | 0% | 9.4 | 30% (24/14) | – | 387/5%/3% | 508/3%/1% |
| Courier (purple) | MIXED | 688 | 11% | 3% | 2% | 40% | 0% | 0% | 10.7 | 33% (18/7) | – | 275/5%/3% | 413/2%/1% |
| Closer (purple) | MIXED | 885 | 12% | 3% | 1% | 41% | 4% | 0% | 10.6 | 23% (20/5) | – | 299/6%/3% | 586/2%/1% |
| Smooth Talkers (silver) | MIXED | 463 | 17% | 2% | 1% | 44% | 0% | 0% | 12.2 | 23% (7/11) | – | 105/1%/2% | 358/2%/1% |
| Desperado (thieves) | MIXED | 927 | 13% | 3% | 1% | 58% | 8% | 0% | 12.1 | 24% (18/10) | – | 304/6%/2% | 623/1%/1% |
| Collector (silver) | MIXED | 859 | 11% | 2% | 1% | 28% | 0% | 0% | 10.0 | 26% (11/14) | 109/2%/2% | 261/3%/2% | 489/1%/1% |
| Shopaholics (market) | MIXED | 557 | 19% | 6% | 1% | 45% | 0% | 0% | 12.6 | 34% (23/13) | – | 183/2%/1% | 374/7%/1% |
| Debutantes (silver) | MIXED | 618 | 15% | 4% | 1% | 44% | 0% | 0% | 11.1 | 31% (22/6) | – | 179/2%/1% | 439/5%/0% |
| Heiresses (trading) | MIXED | 557 | 8% | 3% | 1% | 61% | 0% | 0% | 9.8 | 49% (14/9) | – | 159/5%/1% | 398/3%/1% |
| Tribute Band (echo) | MIXED | 238 | 14% | 8% | 0% | 80% | 0% | 0% | 12.4 | 38% (13/0) | – | 29/10%/0% | 209/8%/0% |
| Night Owls (purple) | DEAD | 472 | 10% | 2% | 1% | 36% | 0% | 0% | 10.8 | 32% (8/7) | – | 152/1%/1% | 320/3%/2% |
| Harmonist (yellow) | DEAD | 681 | 10% | 2% | 1% | 45% | 0% | 0% | 11.5 | 31% (6/15) | – | 215/2%/2% | 466/1%/1% |
| Gossip (purple) | DEAD | 763 | 8% | 2% | 1% | 65% | 0% | 0% | 8.4 | 33% (16/5) | – | 246/4%/3% | 517/1%/0% |
| Anarchist (benders) | DEAD | 2151 | 9% | 3% | 1% | 63% | 2% | 0% | 10.7 | 34% (54/10) | – | 691/5%/2% | 1460/2%/1% |
| Customs (yellow) | DEAD | 1035 | 9% | 2% | 1% | 33% | 0% | 0% | 11.5 | 20% (12/7) | 175/1%/0% | 295/5%/3% | 565/1%/0% |
| Tastemaker (yellow) | DEAD | 818 | 6% | 1% | 1% | 50% | 0% | 0% | 11.4 | 16% (6/2) | – | 232/2%/2% | 586/1%/0% |
| Patroness (market) | DEAD | 671 | 4% | 1% | 1% | 33% | 0% | 0% | 10.4 | 36% (8/1) | – | 185/1%/1% | 486/1%/1% |
| Hoarder (trading) | DEAD | 620 | 4% | 1% | 0% | 40% | 0% | 0% | 13.0 | 29% (5/2) | – | 190/1%/0% | 430/1%/1% |
| Extra Hand (benders) | DEAD | 1654 | 4% | 1% | 0% | 29% | 0% | 6% | 12.3 | 30% (16/3) | – | 617/1%/0% | 1037/1%/0% |
| Wallflower (echo) | DEAD | 454 | 4% | 0% | 0% | – | – | – | 12.8 | 0% (0/0) | – | 64/0%/0% | 390/0%/0% |
| Shoplifter (thieves) | DEAD | 715 | 5% | 1% | 0% | 63% | 0% | 0% | 13.7 | 31% (8/3) | – | 238/2%/0% | 477/1%/0% |
| Old Maid (benders) | DEAD | 2811 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 968/0%/0% | 1843/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | DEAD | 2642 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 107/0%/0% | 710/0%/0% | 1825/0%/0% |
| Polisher (silver) | DEAD | 204 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 31/0%/0% | 125/0%/0% | 48/0%/0% |
| Raiders (trading) | DEAD | 125 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 39/0%/0% | 86/0%/0% |
| Debutantes (silver) | DEAD | 82 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 58/0%/0% |
| Anarchist (benders) | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| Hot Streak (purple) | DEAD | 144 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 39/0%/0% | 105/0%/0% |
| Tribute Band (echo) | DEAD | 103 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 88/0%/0% |
| Party Crasher (benders) | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 27/0%/0% | 17/0%/0% | – |
| Extra Hand (benders) | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 6/0%/0% |
| Doppelganger (echo) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| Heiresses (trading) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 1/0%/0% |
| Debt Collectors (silver) | THIN DATA | 7 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 2/0%/0% |
| Hoarder (trading) | THIN DATA | 9 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 5/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Accomplice (3) | REAL CHOICE | 27 | 96% | 41% | 37% | 36% | 0% | 100% | 7.6 | 42% (3/8) | – | 12/50%/50% | 15/33%/27% |
| choose member:Cutpurse (3) | REAL CHOICE | 23 | 91% | 35% | 35% | 13% | 0% | 100% | 6.3 | 48% (2/8) | – | 13/38%/38% | 10/30%/30% |
| choose member:Timekeepers (4) | REAL CHOICE | 16 | 81% | 44% | 31% | 43% | 0% | 100% | 10.5 | 38% (4/1) | – | 5/40%/20% | 11/45%/36% |
| choose member:Scouts (3) | REAL CHOICE | 46 | 87% | 41% | 28% | 21% | 5% | 100% | 7.6 | 44% (10/7) | – | 18/56%/44% | 28/32%/18% |
| choose member:Agents (3) | REAL CHOICE | 25 | 92% | 24% | 28% | 17% | 0% | 100% | 8.4 | 48% (3/8) | – | 12/25%/33% | 13/23%/23% |
| choose member:Agents | REAL CHOICE | 16 | 25% | 6% | 25% | 0% | 0% | 100% | 0.6 | 50% (1/1) | – | 11/9%/36% | 5/0%/0% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 16 | 81% | 44% | 19% | 14% | 0% | 100% | 14.6 | 31% (2/2) | – | 5/40%/20% | 11/45%/18% |
| choose member:Deprogrammers (3) | REAL CHOICE | 17 | 88% | 29% | 18% | 40% | 0% | 100% | 10.4 | 33% (0/5) | – | 6/33%/0% | 11/27%/27% |
| choose member:P1's Alchemists (5) | REAL CHOICE | 24 | 17% | 8% | 13% | 0% | 0% | 50% | 6.8 | 75% (2/1) | – | 1/0%/0% | 23/9%/13% |
| choose member:P4's Timekeepers (4) | REAL CHOICE | 17 | 29% | 0% | 12% | – | – | – | 8.1 | 60% (0/3) | – | – | 17/0%/12% |
| choose member:Dabblers | REAL CHOICE | 20 | 40% | 5% | 10% | 100% | 0% | 100% | 3.5 | 25% (0/2) | – | 8/0%/25% | 12/8%/0% |
| choose member:Busker (4) | AUTO-PICK | 15 | 93% | 40% | 13% | 67% | 0% | 100% | 7.4 | 36% (4/1) | – | 10/40%/20% | 5/40%/0% |
| trade:P1: Loyalists ↔ P4: Party Crasher | AUTO-PICK | 15 | 20% | 13% | 13% | 50% | 0% | 0% | 1.0 | 67% (1/1) | – | 2/100%/50% | 13/0%/8% |
| choose member:Line Cutters (2) | AUTO-PICK | 47 | 94% | 40% | 13% | 63% | 0% | 100% | 10.2 | 43% (8/11) | – | 24/50%/8% | 23/30%/17% |
| choose member:Line Cutters | AUTO-PICK | 16 | 44% | 13% | 13% | 50% | 0% | 100% | 8.4 | 57% (0/4) | – | 7/14%/14% | 9/11%/11% |
| choose member:Shopkeeper (4) | AUTO-PICK | 17 | 94% | 35% | 12% | 67% | 0% | 100% | 6.7 | 25% (2/2) | – | 9/33%/22% | 8/38%/0% |
| choose member:P4's HR (10) | AUTO-PICK | 19 | 100% | 68% | 11% | 77% | 62% | 15% | 16.3 | 27% (0/3) | – | 1/100%/0% | 18/67%/11% |
| choose member:P1's Fan Club (6) | AUTO-PICK | 19 | 74% | 32% | 11% | 100% | 50% | 17% | 14.8 | 18% (0/2) | – | 1/100%/0% | 18/28%/11% |
| choose member:Alchemists (5) | AUTO-PICK | 20 | 75% | 20% | 10% | 75% | 0% | 100% | 10.3 | 33% (2/3) | – | 2/0%/50% | 18/22%/6% |
| choose member:Dabblers (3) | AUTO-PICK | 36 | 75% | 28% | 8% | 50% | 0% | 100% | 10.4 | 37% (4/6) | – | 8/13%/0% | 28/32%/11% |
| choose member:P2's Con Men (7) | AUTO-PICK | 29 | 14% | 10% | 7% | 67% | 0% | 67% | 1.2 | 50% (2/0) | – | – | 29/10%/7% |
| choose member:P4's Busker (4) | AUTO-PICK | 15 | 27% | 13% | 7% | 50% | 50% | 50% | 29.0 | 0% (0/0) | – | 3/0%/0% | 12/17%/8% |
| pass:Pass | AUTO-PICK | 11084 | 35% | 18% | 6% | 58% | 13% | 11% | 8.7 | 38% (764/598) | 2613/38%/9% | 3529/19%/8% | 4942/5%/4% |
| trade:P1: Loyalists ↔ P2: Cutpurse | AUTO-PICK | 17 | 12% | 12% | 6% | 50% | 0% | 0% | – | 50% (1/0) | – | 4/0%/0% | 13/15%/8% |
| trade:P1: Deprogrammers ↔ P2: Scouts | AUTO-PICK | 17 | 12% | 12% | 6% | 50% | 0% | 0% | – | 100% (2/0) | – | 2/50%/0% | 15/7%/7% |
| choose member:P1's HR (10) | AUTO-PICK | 18 | 67% | 50% | 6% | 89% | 56% | 11% | 14.3 | 86% (4/2) | – | 1/100%/0% | 17/47%/6% |
| choose member:Trendsetters (4) | AUTO-PICK | 18 | 67% | 22% | 6% | 75% | 0% | 100% | 8.3 | 42% (1/4) | – | 4/25%/25% | 14/21%/0% |
| choose member:Kingpin (4) | AUTO-PICK | 36 | 67% | 11% | 6% | 75% | 0% | 100% | 9.5 | 33% (2/6) | – | 13/23%/15% | 23/4%/0% |
| trade:P3: Panel ↔ Shop: Old Maid | AUTO-PICK | 18 | 17% | 11% | 6% | 100% | 0% | 0% | 0.5 | 100% (2/1) | – | 5/0%/0% | 13/15%/8% |
| choose member:P4's Fan Club (6) | AUTO-PICK | 19 | 47% | 37% | 5% | 71% | 71% | 29% | 1.8 | 50% (1/1) | – | 1/100%/0% | 18/33%/6% |
| choose member:P4's Kingpin (4) | AUTO-PICK | 19 | 32% | 11% | 5% | 50% | 0% | 100% | 7.7 | 17% (0/1) | – | – | 19/11%/5% |
| choose member:Busker | AUTO-PICK | 20 | 50% | 35% | 5% | 57% | 57% | 100% | 12.4 | 33% (2/0) | – | 7/43%/14% | 13/31%/0% |
| choose member:P2's Chronicler (5) | AUTO-PICK | 20 | 30% | 10% | 5% | 50% | 50% | 0% | 3.8 | 20% (0/1) | – | 1/0%/0% | 19/11%/5% |
| choose member:P1's Con Men (7) | AUTO-PICK | 25 | 32% | 12% | 4% | 67% | 0% | 33% | 18.3 | 25% (1/1) | – | 1/100%/0% | 24/8%/4% |
| choose member:P3's Con Men (7) | AUTO-PICK + MISJUDGED | 26 | 31% | 23% | 4% | 67% | 0% | 67% | 1.9 | 63% (3/2) | – | 3/67%/0% | 23/17%/4% |
| choose member:P4's Con Men (7) | AUTO-PICK + MISJUDGED | 30 | 33% | 17% | 3% | 60% | 0% | 60% | 19.6 | 50% (4/1) | – | 2/100%/0% | 28/11%/4% |
| followers:top | AUTO-PICK | 8185 | 25% | 17% | 2% | 78% | 53% | 0% | 8.3 | 41% (201/339) | 274/0%/0% | 3084/0%/0% | 4827/28%/4% |
| choose member:Roadie | AUTO-PICK | 25 | 80% | 52% | 0% | 85% | 69% | 100% | 20.7 | 45% (1/4) | – | 13/77%/0% | 12/25%/0% |
| choose member:P3's Snobs (6) | AUTO-PICK | 16 | 63% | 38% | 0% | 67% | 17% | 0% | 8.5 | 44% (3/1) | – | – | 16/38%/0% |
| choose member:P3's Dyer (7) | AUTO-PICK | 15 | 47% | 27% | 0% | 100% | 100% | 25% | 17.8 | 33% (0/1) | – | – | 15/27%/0% |
| choose member:P4's Grifter (8) | AUTO-PICK + MISJUDGED | 21 | 38% | 24% | 0% | 80% | 0% | 40% | 10.2 | 63% (3/2) | – | 1/0%/0% | 20/25%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 17 | 35% | 24% | 0% | 50% | 50% | 50% | 21.4 | 50% (2/0) | – | 2/0%/0% | 15/27%/0% |
| choose member:P4's Window Dressers (4) | AUTO-PICK | 15 | 20% | 13% | 0% | 100% | 50% | 0% | 2.6 | 100% (1/1) | – | 1/0%/0% | 14/14%/0% |
| choose member:P3's Busker (4) | AUTO-PICK | 16 | 31% | 13% | 0% | 50% | 0% | 50% | 22.4 | 40% (2/0) | – | – | 16/13%/0% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | AUTO-PICK | 16 | 13% | 13% | 0% | 50% | 0% | 0% | – | 50% (1/0) | – | 6/0%/0% | 10/20%/0% |
| choose member:P1's Extortionist (7) | AUTO-PICK | 19 | 16% | 11% | 0% | 100% | 0% | 100% | 9.5 | 33% (1/0) | – | 1/100%/0% | 18/6%/0% |
| choose member:P4's Dabblers (3) | AUTO-PICK | 29 | 17% | 10% | 0% | 67% | 0% | 100% | 15.9 | 60% (2/1) | – | 3/33%/0% | 26/8%/0% |
| choose member:P2's Grifter (8) | AUTO-PICK | 20 | 15% | 10% | 0% | 50% | 0% | 100% | 21.0 | 67% (1/1) | – | 2/50%/0% | 18/6%/0% |
| trade:P1: Deprogrammers ↔ P2: Volunteer | AUTO-PICK | 20 | 15% | 10% | 0% | 100% | 0% | 0% | 7.9 | 67% (1/1) | – | 3/33%/0% | 17/6%/0% |
| choose member:P2's Kingpin (4) | MIXED | 25 | 12% | 4% | 8% | 100% | 0% | 100% | 1.1 | 33% (1/0) | – | 4/25%/0% | 21/0%/10% |
| choose member:P4's Alchemists (5) | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 41.3 | 50% (1/0) | – | 1/0%/0% | 14/7%/7% |
| followers:small | MIXED | 11084 | 33% | 12% | 7% | 44% | 0% | 6% | 9.8 | 36% (863/471) | 2613/12%/7% | 3529/15%/8% | 4942/10%/5% |
| trade:P3: Roadie ↔ P2: Deprogrammers | MIXED | 16 | 13% | 0% | 6% | – | – | – | 6.3 | 0% (0/0) | – | 12/0%/8% | 4/0%/0% |
| choose member:P1's Busker (4) | MIXED + MISJUDGED | 34 | 26% | 6% | 6% | 0% | 0% | 0% | 9.2 | 67% (2/4) | – | 2/0%/0% | 32/6%/6% |
| trade:P3: Deprogrammers ↔ P4: Scouts | MIXED | 19 | 11% | 11% | 5% | 0% | 0% | 0% | – | 100% (2/0) | – | 7/14%/14% | 12/8%/0% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | MIXED | 19 | 16% | 5% | 5% | 0% | 0% | 0% | 22.3 | 33% (1/0) | – | 8/13%/13% | 11/0%/0% |
| trade:P4: Busker ↔ P2: Accomplice | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 100% | – | 0% (0/0) | – | 13/8%/8% | 6/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 19 | 11% | 0% | 5% | – | – | – | 7.8 | 0% (0/0) | – | 6/0%/17% | 13/0%/0% |
| choose member:P3's Line Cutters (2) | MIXED | 20 | 15% | 5% | 5% | 0% | 0% | 0% | 12.2 | 33% (1/0) | – | 2/0%/0% | 18/6%/6% |
| trade:P1: Scouts ↔ P3: Dabblers | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 10.8 | 50% (1/0) | – | 12/8%/8% | 9/0%/0% |
| trade:P2: Line Cutters ↔ P3: Volunteer | MIXED | 21 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 14/7%/7% |
| choose member:P2's Roadie (3) | MIXED | 23 | 26% | 13% | 4% | 33% | 33% | 33% | 11.3 | 20% (1/0) | – | 1/0%/0% | 22/14%/5% |
| choose member:P1's Roadie (3) | MIXED | 23 | 26% | 9% | 4% | 50% | 50% | 0% | 15.3 | 80% (1/3) | – | 3/0%/0% | 20/10%/5% |
| trade:P2: Deprogrammers ↔ P1: Volunteer | MIXED | 27 | 7% | 4% | 4% | 100% | 0% | 0% | 0.8 | 0% (0/0) | – | 15/0%/7% | 12/8%/0% |
| choose member:P1's Dabblers (3) | MIXED | 28 | 18% | 7% | 4% | 50% | 0% | 0% | 2.5 | 20% (1/0) | – | 1/0%/0% | 27/7%/4% |
| trade:P1: Scouts ↔ P2: Volunteer | MIXED | 30 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 13/0%/0% | 17/6%/6% |
| trade:P1: Deprogrammers ↔ P3: Volunteer | MIXED | 32 | 13% | 6% | 3% | 100% | 0% | 0% | 2.7 | 50% (0/2) | – | 15/7%/0% | 17/6%/6% |
| trade:P3: Deprogrammers ↔ P2: Line Cutters | MIXED | 32 | 3% | 3% | 3% | 0% | 0% | 0% | – | 0% (0/0) | – | 15/7%/7% | 17/0%/0% |
| followers:mid | MIXED | 10235 | 15% | 6% | 3% | 38% | 2% | 1% | 8.8 | 34% (276/237) | 1783/0%/0% | 3516/1%/1% | 4936/12%/5% |
| choose member:P3's Dabblers (3) | MIXED | 45 | 13% | 4% | 2% | 50% | 0% | 0% | 13.1 | 50% (2/1) | – | 3/0%/0% | 42/5%/2% |
| trade:P3: Deprogrammers ↔ P4: Line Cutters | MIXED | 28 | 7% | 7% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 15/13%/0% | 13/0%/0% |
| trade:P3: Trendsetters ↔ P4: Line Cutters | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 7/14%/0% |
| choose member:P4's Extortionist (7) | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 15.9 | 50% (1/0) | – | – | 15/7%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 5/0%/0% |
| trade:P1: Loyalists ↔ P2: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 4/0%/0% | 11/9%/0% |
| trade:P2: Deprogrammers ↔ P3: Line Cutters | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 2.4 | 0% (0/0) | – | 10/10%/0% | 5/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Cashier | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 7/0%/0% |
| trade:P2: Agents ↔ P3: Volunteer | MIXED | 16 | 19% | 6% | 0% | 100% | 0% | 0% | 16.9 | 33% (0/1) | – | 10/10%/0% | 6/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Volunteer | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 2.5 | 50% (1/0) | – | 5/20%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 6/0%/0% |
| trade:P3: Busker ↔ P2: Roadie | MIXED | 33 | 6% | 6% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 18/11%/0% | 15/0%/0% |
| choose member:P3's Grifter (8) | MIXED | 17 | 18% | 6% | 0% | 0% | 0% | 0% | 3.9 | 33% (1/0) | – | – | 17/6%/0% |
| trade:P3: Deprogrammers ↔ Shop: Alchemists | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P4: Deprogrammers | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | MIXED | 17 | 18% | 6% | 0% | 100% | 0% | 0% | 7.8 | 33% (0/1) | – | 9/0%/0% | 8/13%/0% |
| trade:P2: Loyalists ↔ P4: Dabblers | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 1/0%/0% | 16/6%/0% |
| trade:P4: Loyalists ↔ P3: Dabblers | MIXED | 17 | 12% | 6% | 0% | 0% | 0% | 0% | 32.1 | 0% (0/0) | – | 3/33%/0% | 14/0%/0% |
| trade:P2: Drifters ↔ P4: Volunteer | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 14/7%/0% |
| trade:P2: Loyalists ↔ P3: Scouts | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 3/0%/0% | 14/7%/0% |
| trade:P1: Alchemists ↔ P3: Agents | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/50%/0% | 15/0%/0% |
| trade:P3: Trendsetters ↔ P4: Dabblers | MIXED | 17 | 12% | 6% | 0% | 0% | 0% | 0% | 6.2 | 50% (1/0) | – | 8/13%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Polisher | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 13/8%/0% |
| trade:P3: Deprogrammers ↔ P1: Volunteer | MIXED | 18 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 9/11%/0% | 9/0%/0% |
| trade:P1: Loyalists ↔ P4: Busker | MIXED | 18 | 11% | 6% | 0% | 0% | 0% | 0% | 4.3 | 100% (1/1) | – | 3/0%/0% | 15/7%/0% |
| trade:P2: Con Men ↔ P1: Loyalists | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 3/33%/0% | 15/0%/0% |
| trade:P3: Line Cutters ↔ P4: Volunteer | MIXED | 18 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 8/0%/0% | 10/10%/0% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 20.3 | 0% (0/0) | – | 9/11%/0% | 9/0%/0% |
| choose member:P4's Panel (7) | MIXED | 18 | 22% | 6% | 0% | 0% | 0% | 0% | 15.8 | 0% (0/0) | – | 3/0%/0% | 15/7%/0% |
| trade:P1: Dabblers ↔ P3: Deprogrammers | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 10/10%/0% |
| trade:P1: Deprogrammers ↔ P4: Early Birds | MIXED | 18 | 17% | 6% | 0% | 0% | 0% | 0% | 9.4 | 33% (1/0) | – | 10/0%/0% | 8/13%/0% |
| choose member:P3's Extortionist (7) | MIXED | 19 | 21% | 5% | 0% | 0% | 0% | 0% | 8.6 | 0% (0/0) | – | – | 19/5%/0% |
| trade:P1: Con Men ↔ Shop: Old Maid | MIXED | 19 | 5% | 5% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 4/25%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Roadie | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 21.7 | 50% (1/0) | – | 10/0%/0% | 9/11%/0% |
| trade:P2: Deprogrammers ↔ P4: Dabblers | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Triplets | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 17.6 | 50% (1/0) | – | 15/7%/0% | 6/0%/0% |
| trade:P4: Loyalists ↔ P3: Recruit Bonus | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 21/5%/0% |
| choose member:P1's Kingpin (4) | MIXED | 24 | 8% | 4% | 0% | 100% | 0% | 0% | 3.3 | 50% (1/0) | – | 1/0%/0% | 23/4%/0% |
| trade:P3: Deprogrammers ↔ P2: Scouts | MIXED | 26 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 13/8%/0% | 13/0%/0% |
| choose member:P2's Dabblers (3) | MIXED | 27 | 7% | 4% | 0% | 100% | 0% | 0% | 2.0 | 50% (1/0) | – | 2/0%/0% | 25/4%/0% |
| trade:P2: Line Cutters ↔ P1: Volunteer | MIXED | 27 | 7% | 4% | 0% | 100% | 0% | 0% | 12.7 | 0% (0/0) | – | 9/11%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Volunteer | MIXED | 28 | 7% | 4% | 0% | 0% | 0% | 0% | 17.2 | 0% (0/0) | – | 17/6%/0% | 11/0%/0% |
| trade:P4: Loyalists ↔ Shop: Old Maid | MIXED | 30 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 22/0%/0% |
| choose member:P2's Agents (3) | MIXED | 16 | 13% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P1's Stunt Double (5) | MIXED | 16 | 19% | 0% | 0% | – | – | – | 16.7 | 33% (0/1) | – | 1/0%/0% | 15/0%/0% |
| choose member:P1's Window Dressers (4) | MIXED | 15 | 27% | 0% | 0% | – | – | – | 15.8 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| choose member:P2's Shopkeeper (4) | MIXED | 15 | 20% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | – | 15/0%/0% |
| choose member:P2's Busker (4) | MIXED | 16 | 19% | 0% | 0% | – | – | – | 14.7 | 33% (0/1) | – | 1/0%/0% | 15/0%/0% |
| choose member:P3's Alchemists (5) | MIXED | 17 | 18% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| choose member:P2's Extortionist (7) | MIXED | 19 | 16% | 0% | 0% | – | – | – | 12.1 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| choose member:Muse | MIXED | 15 | 27% | 0% | 0% | – | – | – | 16.5 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| choose member:P1's Martyrs (4) | MIXED | 17 | 18% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P2: Fan Club ↔ P3: Busker | MIXED | 24 | 17% | 0% | 0% | – | – | – | 17.3 | 25% (0/1) | – | 8/0%/0% | 16/0%/0% |
| choose member:P1's Grifter (8) | MIXED | 24 | 13% | 0% | 0% | – | – | – | 7.0 | 33% (0/1) | – | – | 24/0%/0% |
| choose member:P3's Stunt Double (5) | MIXED | 18 | 11% | 0% | 0% | – | – | – | 14.5 | 50% (0/1) | – | 1/0%/0% | 17/0%/0% |
| choose member:P3's Critic (3) | MIXED | 18 | 11% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | – | 18/0%/0% |
| choose member:P4's Deprogrammers (3) | MIXED | 15 | 13% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P3: Volunteer | MIXED | 21 | 14% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Busker ↔ P3: Deprogrammers | MIXED | 16 | 19% | 0% | 0% | – | – | – | 23.4 | 0% (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P3: Dabblers ↔ P2: Deprogrammers | MIXED | 18 | 11% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED | 24 | 13% | 0% | 0% | – | – | – | 15.8 | 33% (0/1) | – | 16/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Roadie | MIXED | 16 | 13% | 0% | 0% | – | – | – | 8.3 | 50% (0/1) | – | 12/0%/0% | 4/0%/0% |
| trade:P2: Scouts ↔ P4: Volunteer | MIXED | 19 | 11% | 0% | 0% | – | – | – | 17.0 | 50% (0/1) | – | 11/0%/0% | 8/0%/0% |
| choose member:P2's Line Cutters (2) | FILLER | 47 | 9% | 4% | 2% | 0% | 0% | 50% | 4.6 | 25% (1/0) | – | 3/0%/0% | 44/5%/2% |
| trade:P1: Scouts ↔ P2: Deprogrammers | FILLER | 16 | 6% | 6% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 9/11%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ Shop: Triplets | FILLER | 20 | 5% | 5% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 15/7%/0% | 5/0%/0% |
| choose member:P3's Roadie (3) | FILLER | 25 | 8% | 4% | 0% | 100% | 100% | 100% | 22.2 | 0% (0/0) | – | 3/0%/0% | 22/5%/0% |
| trade:P3: Con Men ↔ Shop: Old Maid | FILLER | 29 | 14% | 3% | 0% | 0% | 0% | 100% | 18.6 | 0% (0/0) | – | 5/20%/0% | 24/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Scouts | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.1 | 0% (0/0) | – | 5/0%/0% | 10/0%/10% |
| trade:P4: Busker ↔ Shop: Regular | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.2 | 0% (0/0) | – | 7/0%/14% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Dabblers | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 6/0%/17% | 10/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.2 | 0% (0/0) | – | 1/0%/0% | 19/0%/5% |
| choose member:P3's Trendsetters (4) | DEAD | 21 | 10% | 0% | 5% | – | – | – | 8.4 | 0% (0/0) | – | – | 21/0%/5% |
| trade:P2: Dabblers ↔ P3: Volunteer | DEAD | 33 | 3% | 0% | 3% | – | – | – | 0.9 | 0% (0/0) | – | 17/0%/6% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Roadie | DEAD | 37 | 5% | 0% | 3% | – | – | – | 1.3 | 0% (0/0) | – | 13/0%/0% | 24/0%/4% |
| trade:P1: Recruit Bonus ↔ P2: Volunteer | DEAD | 44 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 17/0%/0% | 27/4%/0% |
| choose member:P2's Accomplice (3) | DEAD | 43 | 2% | 0% | 0% | – | – | – | 24.0 | 0% (0/0) | – | 5/0%/0% | 38/0%/0% |
| choose member:P4's Line Cutters (2) | DEAD | 55 | 2% | 0% | 0% | – | – | – | 2.1 | 100% (0/1) | – | 7/0%/0% | 48/0%/0% |
| choose member:P1's Scouts (3) | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 35/0%/0% |
| choose member:P3's Cutpurse (3) | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 38/0%/0% |
| choose member:P1's Accomplice (3) | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 34/0%/0% |
| choose member:P2's Cutpurse (3) | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 26/0%/0% |
| choose member:P2's Scouts (3) | DEAD | 29 | 3% | 0% | 0% | – | – | – | 2.5 | 0% (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P1: Busker ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P2: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 9/0%/0% |
| trade:P2: Stunt Double ↔ P3: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Con Men ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: HR ↔ Shop: Extra Hand | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| pass:Don’t swap | DEAD | 669 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 334/0%/0% | 335/0%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 32/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 32/0%/0% |
| choose member:P1's Regular (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P3's Drifters (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| choose member:P3's Connoisseurs (4) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| choose member:P1's Sticky Fingers (4) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 23/0%/0% |
| choose member:P3's Go-Between (4) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| choose member:P4's Agents (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| choose member:P3's Kingpin (4) | DEAD | 28 | 4% | 0% | 0% | – | – | – | 3.3 | 0% (0/0) | – | 2/0%/0% | 26/0%/0% |
| choose member:P4's Scouts (3) | DEAD | 33 | 3% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | 3/0%/0% | 30/0%/0% |
| trade:P3: Critic ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Anarchist ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| choose member:P1's Line Cutters (2) | DEAD | 33 | 6% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 2/0%/0% | 31/0%/0% |
| choose member:P3's Desperado (5) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| choose member:P2's Party Crasher (4) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| choose member:P3's Accomplice (3) | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 34/0%/0% |
| trade:P3: Dabblers ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| choose member:P3's Toastmaster (3) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P4's Cutpurse (3) | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 28/0%/0% |
| choose member:P1's Agents (3) | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| trade:P1: Timekeepers ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 5/0%/0% |
| trade:P2: Line Cutters ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Regular ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| choose member:P2's Connoisseurs (4) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P3's Scouts (3) | DEAD | 36 | 3% | 0% | 0% | – | – | – | 19.5 | 0% (0/0) | – | 1/0%/0% | 35/0%/0% |
| trade:P1: Dabblers ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P1: Stunt Double ↔ P2: Roadie | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P4: Chronicler ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Kingpin ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P3: Kingpin ↔ Shop: Sticky Fingers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Alchemists ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Line Cutters ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ Shop: Alchemists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.8 | 100% (0/1) | – | 6/0%/0% | 9/0%/0% |
| choose member:P1's Party Crasher (4) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P1's Gardener (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Scouts ↔ P3: Roadie | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ P4: Gardener | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Agents ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Drifters ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P4: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P1: Scouts ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| choose member:P4's Chronicler (5) | DEAD | 21 | 10% | 0% | 0% | – | – | – | 3.1 | 50% (0/1) | – | 1/0%/0% | 20/0%/0% |
| choose member:P4's Muse (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Roadie ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Bouncers ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Scouts ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| choose member:P2's Alchemists (5) | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.1 | 0% (0/0) | – | – | 15/0%/0% |
| choose member:P3's Party Crasher (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Roadie ↔ P4: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| choose member:P4's Stunt Double (5) | DEAD | 18 | 6% | 0% | 0% | – | – | – | 24.0 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ P3: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P4: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Bouncers ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Bouncers ↔ P4: Timekeepers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Bouncers ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Trendsetters ↔ P4: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Dabblers ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P2: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 20/0%/0% |
| trade:P1: Con Men ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Dabblers ↔ P4: Drifters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ Shop: Alchemists | DEAD | 18 | 6% | 0% | 0% | – | – | – | 30.5 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Alchemists ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Alchemists ↔ P4: Stunt Double | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Alchemists ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P3: Busker | DEAD | 18 | 6% | 0% | 0% | – | – | – | 9.3 | 100% (0/1) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P4: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Party Crasher ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Roadie ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ P2: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Bouncers ↔ P2: Shift Crew | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Chronicler ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Fan Club ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P2: Shopkeeper | DEAD | 16 | 6% | 0% | 0% | – | – | – | 27.6 | 0% (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P1: Scouts ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Drifters ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 33 | 6% | 0% | 0% | – | – | – | 13.5 | 50% (0/1) | – | 18/0%/0% | 15/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Scouts | DEAD | 25 | 4% | 0% | 0% | – | – | – | 14.4 | 100% (0/1) | – | 15/0%/0% | 10/0%/0% |
| trade:P2: Volunteer ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P1: Scouts | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 21/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 32 | 3% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 18/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Volunteer | DEAD | 23 | 4% | 0% | 0% | – | – | – | 29.5 | 0% (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ P1: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Alchemists ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Triplets | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P4: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 7/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 22/0%/0% |
| trade:P2: Dabblers ↔ Shop: Triplets | DEAD | 29 | 3% | 0% | 0% | – | – | – | 25.3 | 0% (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P2: Dabblers ↔ P1: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 3.0 | 100% (0/1) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Busker ↔ P4: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Party Crasher ↔ P1: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P4: Party Crasher ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Volunteer ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Volunteer ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Volunteer ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Agents ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P1: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Agents ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Cashier ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ Shop: Loyalists | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P3: Con Men ↔ P4: Fan Club | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ P1: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Martyrs ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Loyalists ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P2: Triplets ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Line Cutters ↔ P3: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Scouts ↔ P3: Deprogrammers | DEAD | 28 | 4% | 0% | 0% | – | – | – | 6.9 | 100% (0/1) | – | 14/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 5/0%/0% |
| trade:P2: Scouts ↔ P1: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Triplets | DEAD | 28 | 7% | 0% | 0% | – | – | – | 38.4 | 50% (0/1) | – | 10/0%/0% | 18/0%/0% |
| trade:P2: HR ↔ Shop: Mentor & Protégés | DEAD | 15 | 7% | 0% | 0% | – | – | – | 10.9 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P2: Scouts | DEAD | 23 | 4% | 0% | 0% | – | – | – | 7.8 | 100% (0/1) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P4: Loyalists ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Drifters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.1 | 0% (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P3: Gardener ↔ P4: Drifters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Gardener ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Drifters ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Volunteer ↔ P3: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Gardener ↔ P1: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Line Cutters ↔ P1: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P3: Panel ↔ P1: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P1: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Volunteer ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P1: Volunteer | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Line Cutters | DEAD | 36 | 6% | 0% | 0% | – | – | – | 36.3 | 0% (0/0) | – | 16/0%/0% | 20/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 23/0%/0% |
| trade:P2: Muse ↔ P3: Busker | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P2: Roadie ↔ P1: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 34.6 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P4: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Dabblers ↔ P1: Deprogrammers | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 22/0%/0% |
| trade:P3: Busker ↔ P1: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P2: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Drifters ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Drifters ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Drifters ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Volunteer ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P3: Deprogrammers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 2.6 | 0% (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P2: Agents ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P1: Loyalists ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P4: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Drifters ↔ P2: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Loyalists ↔ Shop: Old Maid | DEAD | 25 | 4% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 8/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P4: Busker ↔ P2: Roadie | DEAD | 21 | 5% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ P2: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 4/0%/0% |
| trade:P4: Busker ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Doormen ↔ P3: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Window Shopper ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Window Shopper ↔ P3: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Agents ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P2: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Stunt Double ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Loyalists ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Roadie ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 10/0%/0% |
| trade:P1: Busker ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Recluse ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Doppelganger ↔ Shop: Old Maid | DEAD | 16 | 6% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P1: Muse ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Recluse ↔ P2: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 5.1 | 0% (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Recruit Bonus | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P4: Dabblers ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ P2: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Roadie ↔ P2: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P4: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P4: Timekeepers ↔ P1: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Loyalists ↔ P3: Roadie | DEAD | 17 | 6% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Triplets ↔ P3: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Triplets ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Triplets ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P1: Triplets | DEAD | 17 | 6% | 0% | 0% | – | – | – | 23.0 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 8.5 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ P1: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P1: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P3: Busker ↔ P4: Timekeepers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Shift Crew | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P4: Timekeepers ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Chronicler ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Loyalists ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 21.5 | 100% (0/1) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Triplets ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Alchemists ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Con Men ↔ Shop: Anarchist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P2: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Kingpin ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P3: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P4: Deprogrammers | DEAD | 23 | 4% | 0% | 0% | – | – | – | 14.0 | 0% (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Scouts ↔ P4: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| choose member:P3's Triplets (3) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | DEAD | 21 | 5% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P2: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ P2: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P4: Volunteer | DEAD | 40 | 3% | 0% | 0% | – | – | – | 20.3 | 0% (0/0) | – | 24/0%/0% | 16/0%/0% |
| trade:P4: Volunteer ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P1: Roadie ↔ P4: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 27.4 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P3: Scouts ↔ P1: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P4: Dabblers | DEAD | 36 | 3% | 0% | 0% | – | – | – | 29.8 | 0% (0/0) | – | 16/0%/0% | 20/0%/0% |
| trade:P4: Dabblers ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P4: Dabblers ↔ P3: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P3: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P3: Scouts ↔ P1: Triplets | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P3: Con Men ↔ Shop: Harmonist | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Triplets ↔ P1: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Busker ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ Shop: Proselytizers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ Shop: Tastemaker | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| choose member:P1's Deprogrammers (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P4: Chronicler | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P3: Con Men ↔ Shop: Anarchist | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P2: Cutpurse ↔ P3: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P2: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Stunt Double ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Panel ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Line Cutters ↔ P1: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Stunt Double ↔ P1: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Panel ↔ Shop: Harmonist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Loyalists ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Critic ↔ P4: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P2: Critic ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P2: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Panel ↔ Shop: Anarchist | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Bouncers ↔ P2: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Drifters ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P2: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Party Crasher ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P4: Volunteer | DEAD | 24 | 8% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Drifters ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Loyalists ↔ P4: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.4 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P3: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P3: Roadie ↔ P1: Deprogrammers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P3: Roadie ↔ P1: Scouts | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P4: Gardener | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Gardener ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Polisher ↔ P2: Dabblers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P1: Polisher | DEAD | 16 | 6% | 0% | 0% | – | – | – | 11.4 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Gardener ↔ Shop: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Loyalists ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Polisher ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Patriarch ↔ P3: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P1: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 6/0%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Agents ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Triplets ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Agents ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Line Cutters ↔ P2: Volunteer | DEAD | 21 | 10% | 0% | 0% | – | – | – | 7.8 | 50% (0/1) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Agents ↔ P1: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P1: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 7/0%/0% |
| trade:P3: Agents ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P1: Triplets ↔ P3: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ P1: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P2: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Agents ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Volunteer | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Trendsetters ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ P4: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P2: Dabblers ↔ P3: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Drifters ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Volunteer ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Volunteer | DEAD | 33 | 3% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P3: Agents ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P3: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P3: Roadie ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ P4: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 7/0%/0% |
| trade:P2: Loyalists ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Trendsetters ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Scouts ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Timekeepers ↔ P1: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P4: Timekeepers ↔ P2: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Roadie ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Roadie ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Roadie ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 27/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 25/0%/0% |
| trade:P4: Early Birds ↔ P1: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 3.8 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ P4: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Agents | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Triplets ↔ P3: Dabblers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 3.3 | 100% (0/1) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Agents ↔ P1: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Dabblers ↔ P1: Triplets | DEAD | 20 | 5% | 0% | 0% | – | – | – | 10.6 | 0% (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Triplets ↔ P3: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ P1: Deprogrammers | DEAD | 30 | 3% | 0% | 0% | – | – | – | 13.4 | 100% (0/1) | – | 5/0%/0% | 25/0%/0% |
| trade:P4: Loyalists ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P1: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Bouncers ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Muse ↔ P3: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P1: Bouncers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ P1: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Busker ↔ P2: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Stunt Double ↔ P3: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ Shop: Anarchist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Gardener ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Bouncers ↔ P2: Timekeepers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P2: Timekeepers ↔ P1: Bouncers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P3: Dabblers ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Roadie ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P2: Shift Crew ↔ P1: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Shift Crew ↔ P1: Bouncers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Agents ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P3: Connoisseurs | DEAD | 20 | 5% | 0% | 0% | – | – | – | 26.0 | 0% (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Polisher ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Stunt Double ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Kingpin ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P3: Roadie ↔ P1: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P3: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Roadie ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Trendsetters ↔ P2: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Loyalists ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Trendsetters ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Doormen ↔ P2: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |

(32144 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 2123 | 16% | 1787 | 22% |
| market | 2159 | 16% | 2118 | 18% |
| benders | 0 | – | 1292 | 18% |
| trading | 2104 | 14% | 1673 | 16% |
| silver | 2101 | 15% | 1773 | 15% |
| red | 1408 | 12% | 1457 | 12% |
| yellow | 2085 | 15% | 1796 | 12% |
| thieves | 2089 | 14% | 2066 | 10% |
| echo | 2116 | 12% | 2223 | 9% |
