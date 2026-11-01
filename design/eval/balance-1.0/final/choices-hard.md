# Choice report

24904 looked-ahead decisions from 250 games (/mnt/project-files/balance-1.0/merged/hard.choices). 15% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| market: Peek | AUTO-PICK | 3114 | 27% | 11% | 4% | 58% | 10% | 14% | 10.6 | 40% (213/110) | 905/13%/6% | 1152/10%/3% | 1057/11%/5% |
| echo: Cover | AUTO-PICK | 1657 | 29% | 13% | 4% | 73% | 23% | 6% | 12.6 | 45% (77/120) | – | 792/13%/3% | 865/12%/4% |
| purple: Crowd In | AUTO-PICK | 870 | 28% | 14% | 4% | 73% | 17% | 1% | 10.6 | 40% (55/36) | – | – | 870/14%/4% |
| yellow: Harvest | AUTO-PICK | 2724 | 25% | 12% | 3% | 68% | 38% | 8% | 11.1 | 40% (117/112) | 213/55%/2% | 987/10%/3% | 1524/7%/4% |
| thieves: Poach | AUTO-PICK + MISJUDGED | 556 | 41% | 27% | 3% | 83% | 36% | 1% | 8.7 | 55% (49/48) | – | – | 556/27%/3% |
| silver: Largesse | AUTO-PICK | 861 | 28% | 14% | 3% | 67% | 12% | 0% | 11.1 | 50% (56/59) | – | – | 861/14%/3% |
| purple: Sleep In | AUTO-PICK | 2406 | 36% | 14% | 3% | 65% | 14% | 4% | 13.2 | 41% (149/180) | 511/22%/4% | 787/16%/3% | 1108/10%/3% |
| red: Promote | AUTO-PICK + MISJUDGED | 1355 | 38% | 20% | 3% | 74% | 32% | 0% | 14.0 | 50% (104/111) | – | 557/25%/4% | 798/16%/3% |
| red: Recruit a Member | AUTO-PICK | 935 | 27% | 14% | 3% | 66% | 27% | 6% | 10.9 | 45% (53/44) | – | – | 935/14%/3% |
| thieves: Help Yourself | AUTO-PICK | 1484 | 42% | 24% | 3% | 85% | 55% | 1% | 12.4 | 41% (70/103) | 137/88%/1% | 506/24%/4% | 841/14%/3% |
| market: Spree | AUTO-PICK | 1030 | 29% | 12% | 3% | 71% | 26% | 0% | 10.5 | 47% (52/73) | – | – | 1030/12%/3% |
| thieves: Crime Wave | AUTO-PICK | 1918 | 27% | 13% | 3% | 68% | 25% | 2% | 12.5 | 48% (108/107) | – | 1032/12%/2% | 886/14%/3% |
| echo: Build Up | AUTO-PICK | 2735 | 28% | 12% | 3% | 70% | 23% | 6% | 12.5 | 46% (142/176) | 526/21%/3% | 1016/11%/2% | 1193/9%/3% |
| echo: Echo | AUTO-PICK + MISJUDGED | 1565 | 35% | 21% | 3% | 83% | 53% | 0% | 14.4 | 50% (78/113) | 285/39%/2% | 560/21%/3% | 720/14%/3% |
| thieves: Stash | AUTO-PICK | 3275 | 24% | 11% | 2% | 66% | 22% | 7% | 11.6 | 43% (158/155) | 717/17%/3% | 1179/10%/2% | 1379/9%/2% |
| silver: Toast | AUTO-PICK | 2936 | 29% | 11% | 2% | 69% | 26% | 13% | 12.1 | 42% (116/201) | 1000/10%/3% | 1095/10%/2% | 841/14%/3% |
| yellow: Melting Pot | AUTO-PICK | 2269 | 23% | 10% | 2% | 69% | 26% | 9% | 11.3 | 40% (81/109) | – | 922/13%/2% | 1347/8%/3% |
| yellow: Big Dilute | AUTO-PICK | 1975 | 25% | 12% | 2% | 73% | 34% | 6% | 11.9 | 41% (77/90) | – | 707/17%/2% | 1268/8%/2% |
| red: Walk-In | AUTO-PICK | 2469 | 29% | 15% | 2% | 79% | 49% | 6% | 13.6 | 41% (79/135) | 696/17%/3% | 665/20%/2% | 1108/11%/2% |
| purple: Last Call | AUTO-PICK | 1436 | 33% | 14% | 2% | 68% | 1% | 1% | 14.0 | 46% (98/117) | – | 756/12%/1% | 680/16%/3% |
| red: Demote | AUTO-PICK | 2308 | 27% | 11% | 2% | 79% | 31% | 4% | 13.2 | 43% (100/132) | – | 961/14%/2% | 1347/9%/2% |
| trading: Estate Sale | AUTO-PICK | 2384 | 24% | 11% | 2% | 77% | 32% | 7% | 12.1 | 39% (84/109) | – | 1059/13%/1% | 1325/9%/2% |
| echo: Reprise | AUTO-PICK | 2501 | 22% | 13% | 2% | 83% | 45% | 2% | 11.6 | 45% (76/110) | 721/15%/2% | 811/14%/1% | 969/11%/2% |
| market: Savings | MIXED | 4765 | 15% | 5% | 3% | 42% | 14% | 32% | 8.7 | 32% (154/66) | 956/11%/5% | 1750/4%/3% | 2059/4%/2% |
| market: Out of Style | MIXED | 3719 | 20% | 9% | 3% | 55% | 7% | 12% | 10.8 | 42% (157/153) | 500/24%/6% | 1330/8%/2% | 1889/5%/3% |
| purple: Hold Up | MIXED | 4002 | 18% | 7% | 3% | 52% | 10% | 24% | 11.0 | 36% (175/81) | 765/15%/4% | 1391/7%/2% | 1846/5%/3% |
| market: Bury | MIXED | 2442 | 25% | 9% | 3% | 64% | 14% | 13% | 11.4 | 41% (106/133) | – | 834/15%/3% | 1608/7%/3% |
| silver: Party Favors | MIXED | 2419 | 22% | 9% | 2% | 67% | 29% | 8% | 12.1 | 42% (86/107) | – | 971/11%/2% | 1448/7%/2% |
| silver: Sweet Talk | MIXED | 2860 | 16% | 7% | 2% | 64% | 30% | 14% | 10.5 | 44% (76/96) | – | 1157/9%/2% | 1703/6%/3% |
| red: Tryout | MIXED | 3721 | 19% | 8% | 2% | 66% | 29% | 13% | 11.2 | 40% (120/129) | 628/19%/4% | 1264/8%/1% | 1829/5%/2% |
| market: Recruit Twice | MIXED | 3413 | 14% | 5% | 2% | 61% | 35% | 18% | 9.2 | 37% (78/76) | – | 1791/3%/2% | 1622/7%/2% |
| red: Gather | MIXED | 4281 | 16% | 7% | 2% | 64% | 18% | 21% | 10.7 | 40% (157/91) | 847/14%/4% | 1674/5%/1% | 1760/5%/2% |
| trading: Allowance | MIXED | 3906 | 19% | 9% | 2% | 63% | 15% | 12% | 10.1 | 39% (170/107) | 756/17%/3% | 1486/7%/2% | 1664/7%/2% |
| trading: Farewell | MIXED | 3492 | 15% | 6% | 2% | 53% | 21% | 19% | 10.3 | 37% (83/94) | – | 1791/5%/2% | 1701/8%/2% |
| silver: Party Gifts | MIXED | 3926 | 16% | 7% | 2% | 60% | 17% | 15% | 10.9 | 45% (134/130) | 976/10%/3% | 1589/5%/2% | 1361/8%/2% |
| echo: Greatest Hits | MIXED | 1968 | 6% | 4% | 2% | 57% | 10% | 46% | 6.1 | 48% (47/10) | – | – | 1968/4%/2% |
| echo: Encore | MIXED | 2572 | 15% | 8% | 2% | 69% | 30% | 14% | 11.7 | 41% (76/64) | – | 1164/8%/1% | 1408/7%/2% |
| yellow: Trade Seeds | MIXED | 4652 | 11% | 4% | 2% | 58% | 21% | 24% | 10.6 | 39% (78/103) | 704/16%/4% | 1761/2%/1% | 2187/2%/2% |
| thieves: Shake Down | MIXED | 2478 | 22% | 9% | 2% | 71% | 29% | 8% | 11.5 | 43% (98/104) | – | 911/14%/2% | 1567/7%/1% |
| trading: Exchange | MIXED | 5417 | 10% | 3% | 2% | 50% | 22% | 45% | 8.3 | 37% (73/108) | 1334/4%/3% | 2024/1%/1% | 2059/5%/1% |
| yellow: Dilute | MIXED | 4356 | 13% | 5% | 1% | 70% | 26% | 18% | 10.1 | 39% (103/97) | 712/16%/2% | 1586/4%/1% | 2058/3%/2% |
| thieves: Lie Low | MIXED | 4893 | 13% | 5% | 1% | 63% | 31% | 31% | 9.2 | 41% (114/107) | 914/14%/1% | 1782/3%/1% | 2197/4%/1% |
| silver: Polish | MIXED | 4904 | 9% | 4% | 1% | 55% | 32% | 44% | 9.1 | 40% (81/77) | 1091/9%/1% | 1650/3%/1% | 2163/3%/2% |
| yellow: Makeover | MIXED | 1960 | 8% | 4% | 1% | 57% | 20% | 38% | 8.5 | 37% (33/19) | – | – | 1960/4%/1% |
| purple: Right Away | FILLER | 5006 | 11% | 4% | 3% | 34% | 12% | 52% | 6.9 | 32% (117/46) | 1147/6%/2% | 1735/3%/3% | 2124/4%/3% |
| purple: Crunch Time | DEAD | 3976 | 9% | 2% | 3% | 22% | 2% | 56% | 6.4 | 25% (50/41) | – | 1720/2%/3% | 2256/2%/3% |
| trading: Cash In | DEAD | 2385 | 8% | 3% | 2% | 50% | 23% | 39% | 7.2 | 37% (28/33) | – | – | 2385/3%/2% |
| trading: Splurge | DEAD | 5852 | 7% | 2% | 2% | 36% | 20% | 62% | 7.3 | 33% (82/46) | 1261/8%/4% | 2045/0%/0% | 2546/1%/2% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | REAL CHOICE | 1437 | 50% | 15% | 10% | 41% | 4% | 0% | 9.3 | 35% (98/146) | 801/12%/13% | 193/28%/9% | 443/12%/7% |
| Recruit Bonus (red) | AUTO-PICK | 650 | 48% | 16% | 9% | 50% | 6% | 2% | 9.1 | 35% (48/57) | 380/13%/10% | 133/26%/11% | 137/17%/6% |
| Volunteer (red) | AUTO-PICK | 469 | 61% | 24% | 9% | 56% | 4% | 3% | 10.6 | 43% (54/66) | 240/27%/14% | 90/31%/8% | 139/14%/3% |
| Timekeepers (purple) | AUTO-PICK | 670 | 46% | 15% | 9% | 52% | 17% | 0% | 9.8 | 35% (36/68) | 330/7%/8% | 154/18%/10% | 186/26%/9% |
| Loyalists (red) | AUTO-PICK | 502 | 45% | 16% | 8% | 51% | 9% | 0% | 11.3 | 32% (28/42) | – | 229/16%/8% | 273/16%/7% |
| Roadie (echo) | AUTO-PICK | 226 | 70% | 48% | 8% | 81% | 23% | 1% | 9.8 | 44% (33/26) | 138/57%/9% | 29/55%/3% | 59/24%/7% |
| Line Cutters (benders) | AUTO-PICK | 730 | 75% | 31% | 7% | 63% | 25% | 4% | 12.4 | 41% (54/147) | 478/32%/8% | 95/43%/9% | 157/22%/6% |
| Window Dressers (market) | AUTO-PICK | 573 | 50% | 17% | 7% | 52% | 6% | 1% | 11.6 | 34% (27/70) | 177/10%/10% | 169/24%/7% | 227/19%/4% |
| Fan Club (echo) | AUTO-PICK | 210 | 67% | 37% | 7% | 78% | 42% | 0% | 14.2 | 48% (18/34) | – | 101/49%/10% | 109/26%/4% |
| Snobs (market) | AUTO-PICK | 406 | 50% | 22% | 7% | 68% | 33% | 1% | 11.3 | 38% (15/50) | – | 244/18%/7% | 162/28%/7% |
| Kingpin (thieves) | AUTO-PICK | 655 | 43% | 15% | 7% | 62% | 7% | 1% | 11.2 | 39% (42/67) | 340/6%/7% | 164/26%/4% | 151/22%/9% |
| Shopkeeper (trading) | AUTO-PICK | 252 | 72% | 45% | 6% | 71% | 33% | 0% | 12.0 | 41% (19/40) | 91/71%/7% | 66/55%/8% | 95/13%/5% |
| Gardener (yellow) | AUTO-PICK | 342 | 49% | 28% | 6% | 82% | 46% | 1% | 11.9 | 41% (15/36) | 82/65%/7% | 100/33%/9% | 160/7%/3% |
| Alchemists (benders) | AUTO-PICK | 1127 | 54% | 14% | 6% | 53% | 4% | 1% | 11.3 | 41% (85/159) | – | 476/17%/7% | 651/12%/5% |
| Bouncers (purple) | AUTO-PICK | 689 | 39% | 13% | 6% | 53% | 3% | 0% | 10.5 | 35% (51/42) | 290/10%/6% | 98/22%/10% | 301/13%/4% |
| Chronicler (echo) | AUTO-PICK | 470 | 54% | 19% | 6% | 61% | 11% | 0% | 11.7 | 41% (38/61) | – | 292/18%/5% | 178/20%/6% |
| Drifters (yellow) | AUTO-PICK | 543 | 41% | 17% | 6% | 60% | 23% | 0% | 10.4 | 36% (25/47) | 192/23%/8% | 147/19%/6% | 204/8%/3% |
| Philanthropists (silver) | AUTO-PICK | 399 | 49% | 21% | 6% | 60% | 18% | 0% | 10.7 | 44% (35/45) | – | 210/20%/5% | 189/22%/6% |
| Old Money (trading) | AUTO-PICK | 657 | 40% | 13% | 5% | 51% | 11% | 0% | 11.2 | 38% (34/63) | – | 280/11%/6% | 377/14%/5% |
| Recluse (trading) | AUTO-PICK | 628 | 40% | 16% | 5% | 50% | 12% | 0% | 11.3 | 38% (36/55) | 224/8%/4% | 166/22%/5% | 238/19%/6% |
| Dyer (yellow) | AUTO-PICK | 295 | 48% | 22% | 5% | 74% | 35% | 0% | 11.3 | 39% (17/29) | – | 65/54%/11% | 230/13%/3% |
| Doppelganger (echo) | AUTO-PICK | 432 | 39% | 20% | 5% | 66% | 20% | 1% | 10.4 | 41% (32/31) | – | 136/29%/7% | 296/16%/4% |
| Panel (red) | AUTO-PICK | 249 | 40% | 20% | 5% | 80% | 46% | 0% | 9.9 | 42% (5/27) | – | 147/23%/6% | 102/16%/3% |
| Busker (echo) | AUTO-PICK | 295 | 64% | 39% | 5% | 75% | 30% | 0% | 11.6 | 43% (29/37) | 106/60%/5% | 53/64%/4% | 136/13%/5% |
| Patriarch (red) | AUTO-PICK | 386 | 48% | 23% | 4% | 74% | 30% | 0% | 12.0 | 38% (19/41) | – | 233/15%/3% | 153/34%/6% |
| Shift Crew (purple) | AUTO-PICK | 782 | 23% | 10% | 4% | 51% | 5% | 1% | 9.5 | 43% (44/31) | 221/3%/0% | 289/10%/4% | 272/16%/7% |
| Con Men (benders) | AUTO-PICK | 340 | 77% | 56% | 4% | 90% | 72% | 0% | 10.2 | 42% (15/38) | – | 113/88%/1% | 227/41%/6% |
| HR (benders) | AUTO-PICK | 660 | 41% | 20% | 4% | 75% | 46% | 0% | 13.9 | 42% (20/70) | – | 339/14%/2% | 321/26%/5% |
| High Society (silver) | AUTO-PICK | 347 | 46% | 20% | 4% | 68% | 22% | 0% | 11.4 | 39% (19/37) | – | 98/20%/4% | 249/19%/4% |
| Ringleader (yellow) | AUTO-PICK | 509 | 39% | 13% | 4% | 62% | 11% | 0% | 11.2 | 40% (28/49) | – | 214/15%/1% | 295/11%/5% |
| Cutpurse (thieves) | AUTO-PICK | 283 | 64% | 39% | 4% | 84% | 53% | 2% | 12.5 | 43% (17/35) | 157/44%/2% | 41/56%/5% | 85/22%/6% |
| Window Shopper (market) | AUTO-PICK | 738 | 33% | 12% | 4% | 62% | 15% | 0% | 10.7 | 39% (45/44) | – | 226/20%/5% | 512/9%/3% |
| Double Agent (thieves) | AUTO-PICK | 330 | 38% | 21% | 3% | 76% | 43% | 0% | 10.7 | 33% (13/19) | – | 147/18%/2% | 183/24%/4% |
| Extortionist (thieves) | AUTO-PICK | 335 | 38% | 20% | 3% | 71% | 37% | 0% | 13.7 | 31% (15/16) | – | 110/35%/4% | 225/13%/3% |
| Mentor & Protégés (red) | AUTO-PICK | 366 | 28% | 10% | 2% | 70% | 32% | 0% | 14.1 | 37% (12/22) | – | 124/9%/2% | 242/11%/3% |
| Stunt Double (echo) | AUTO-PICK | 227 | 59% | 42% | 2% | 83% | 55% | 0% | 14.0 | 37% (10/20) | – | 100/63%/4% | 127/25%/1% |
| Caravan (yellow) | AUTO-PICK | 319 | 41% | 16% | 2% | 66% | 26% | 0% | 13.4 | 31% (13/24) | – | 87/30%/2% | 232/10%/2% |
| Grifter (thieves) | AUTO-PICK | 325 | 46% | 26% | 2% | 81% | 54% | 0% | 12.4 | 41% (12/30) | – | 128/26%/2% | 197/26%/2% |
| Mob (red) | AUTO-PICK | 114 | 62% | 33% | 2% | 89% | 68% | 0% | 13.3 | 42% (3/16) | – | 33/30%/6% | 81/35%/0% |
| Accomplice (thieves) | AUTO-PICK | 146 | 81% | 74% | 1% | 94% | 76% | 4% | 9.0 | 33% (7/5) | 94/70%/1% | 28/89%/4% | 24/71%/0% |
| Dabblers (benders) | MIXED | 1161 | 57% | 19% | 10% | 48% | 12% | 1% | 11.0 | 31% (77/116) | 730/14%/10% | 192/35%/7% | 239/21%/10% |
| Early Birds (purple) | MIXED | 568 | 44% | 16% | 10% | 48% | 11% | 0% | 8.7 | 35% (34/49) | 218/16%/13% | 124/25%/8% | 226/11%/7% |
| Deprogrammers (red) | MIXED | 362 | 71% | 30% | 9% | 47% | 13% | 0% | 12.7 | 33% (18/61) | 253/26%/8% | 56/39%/7% | 53/40%/13% |
| Martyrs (trading) | MIXED | 660 | 41% | 14% | 8% | 40% | 3% | 0% | 10.0 | 32% (41/45) | 247/6%/9% | 164/23%/8% | 249/16%/8% |
| Polisher (silver) | MIXED | 732 | 33% | 12% | 8% | 48% | 3% | 1% | 9.1 | 43% (63/40) | 323/13%/11% | 130/25%/5% | 279/5%/4% |
| Trendsetters (market) | MIXED | 647 | 43% | 15% | 7% | 35% | 2% | 0% | 11.5 | 37% (45/58) | 246/9%/9% | 194/24%/6% | 207/15%/5% |
| Agents (echo) | MIXED | 647 | 43% | 16% | 7% | 39% | 8% | 1% | 11.1 | 36% (51/47) | 354/15%/8% | 149/20%/5% | 144/15%/4% |
| Connoisseurs (market) | MIXED | 1042 | 37% | 9% | 6% | 46% | 3% | 0% | 9.8 | 26% (50/48) | 323/4%/8% | 323/15%/8% | 396/7%/4% |
| Toastmaster (silver) | MIXED | 905 | 30% | 8% | 6% | 37% | 3% | 0% | 9.6 | 32% (48/39) | 308/9%/14% | 154/18%/5% | 443/5%/2% |
| Critic (market) | MIXED | 935 | 32% | 10% | 6% | 39% | 1% | 1% | 9.4 | 43% (76/53) | 308/7%/6% | 232/18%/9% | 395/9%/4% |
| Brokers (trading) | MIXED | 522 | 39% | 14% | 6% | 42% | 5% | 0% | 11.1 | 34% (31/36) | – | 219/13%/5% | 303/15%/6% |
| Doormen (market) | MIXED | 815 | 36% | 10% | 6% | 53% | 3% | 0% | 10.1 | 32% (53/40) | – | 346/9%/4% | 469/10%/7% |
| Regular (market) | MIXED | 995 | 33% | 8% | 5% | 55% | 4% | 1% | 9.1 | 31% (51/51) | 298/7%/6% | 276/12%/8% | 421/6%/4% |
| Raiders (trading) | MIXED | 727 | 26% | 7% | 4% | 52% | 2% | 0% | 11.0 | 30% (30/26) | – | 263/10%/5% | 464/5%/3% |
| Clockmakers (purple) | MIXED | 742 | 31% | 7% | 4% | 37% | 0% | 0% | 10.3 | 33% (33/43) | – | 233/8%/4% | 509/7%/4% |
| Party Crasher (benders) | MIXED | 2480 | 23% | 6% | 4% | 62% | 1% | 1% | 8.5 | 30% (116/54) | 978/2%/3% | 382/20%/9% | 1120/5%/2% |
| Sticky Fingers (thieves) | MIXED | 989 | 22% | 5% | 3% | 40% | 4% | 0% | 10.3 | 29% (41/21) | 238/5%/3% | 262/8%/6% | 489/4%/2% |
| Triplets (red) | MIXED | 1110 | 20% | 8% | 3% | 48% | 5% | 1% | 8.2 | 39% (60/26) | 590/3%/2% | 265/15%/6% | 255/11%/5% |
| Cashier (trading) | MIXED | 1009 | 16% | 5% | 3% | 49% | 11% | 0% | 7.4 | 32% (26/25) | 253/3%/3% | 309/6%/3% | 447/6%/3% |
| Muse (echo) | MIXED | 1332 | 19% | 5% | 3% | 56% | 0% | 0% | 9.8 | 31% (50/30) | 443/2%/3% | 341/10%/4% | 548/3%/2% |
| Collector (silver) | MIXED | 834 | 14% | 4% | 3% | 39% | 0% | 0% | 7.8 | 33% (20/18) | 112/3%/3% | 245/7%/4% | 477/3%/1% |
| Big Tent (yellow) | MIXED | 586 | 20% | 7% | 2% | 58% | 16% | 0% | 10.9 | 44% (23/25) | – | 214/11%/4% | 372/5%/1% |
| Go-Between (yellow) | MIXED | 911 | 21% | 5% | 2% | 54% | 5% | 0% | 10.0 | 26% (17/33) | 194/4%/2% | 252/9%/3% | 465/2%/2% |
| Debt Collectors (silver) | MIXED | 550 | 15% | 7% | 2% | 51% | 0% | 0% | 10.7 | 42% (30/5) | – | 196/9%/2% | 354/6%/2% |
| Exporters (trading) | MIXED | 836 | 18% | 4% | 2% | 40% | 0% | 0% | 11.2 | 31% (21/25) | – | 422/4%/3% | 414/4%/1% |
| Gift Wrapper (silver) | MIXED | 867 | 13% | 2% | 2% | 33% | 0% | 0% | 10.9 | 20% (16/6) | – | 269/4%/4% | 598/2%/1% |
| Courier (purple) | MIXED | 764 | 10% | 3% | 2% | 50% | 0% | 0% | 10.8 | 36% (18/10) | – | 295/4%/3% | 469/1%/1% |
| Proselytizers (red) | MIXED | 691 | 16% | 4% | 2% | 40% | 4% | 0% | 11.1 | 32% (19/16) | – | 301/4%/2% | 390/4%/2% |
| Hangers-On (silver) | MIXED | 604 | 14% | 2% | 2% | 40% | 0% | 0% | 12.7 | 23% (12/7) | – | 201/3%/2% | 403/2%/1% |
| Desperado (thieves) | MIXED | 1046 | 14% | 4% | 2% | 47% | 3% | 0% | 12.1 | 28% (28/13) | – | 331/8%/2% | 715/2%/1% |
| Smooth Talkers (silver) | MIXED | 528 | 13% | 2% | 2% | 30% | 0% | 0% | 13.8 | 26% (8/10) | – | 108/1%/2% | 420/2%/1% |
| Anarchist (benders) | MIXED | 2394 | 10% | 3% | 2% | 59% | 0% | 1% | 10.1 | 33% (65/17) | – | 858/5%/3% | 1536/2%/1% |
| Shopaholics (market) | MIXED | 667 | 17% | 5% | 1% | 59% | 6% | 0% | 10.6 | 36% (21/18) | – | 201/2%/1% | 466/6%/2% |
| Hot Streak (purple) | MIXED | 788 | 13% | 4% | 1% | 38% | 0% | 0% | 10.0 | 32% (21/12) | – | 320/4%/3% | 468/4%/1% |
| Closer (purple) | MIXED | 863 | 12% | 3% | 1% | 42% | 4% | 0% | 9.8 | 25% (19/7) | – | 268/5%/3% | 595/2%/1% |
| Customs (yellow) | MIXED | 1064 | 10% | 2% | 1% | 40% | 0% | 0% | 11.9 | 21% (14/9) | 200/1%/1% | 308/6%/3% | 556/1%/1% |
| Debutantes (silver) | MIXED | 657 | 13% | 3% | 1% | 40% | 0% | 0% | 12.5 | 27% (16/6) | – | 199/2%/3% | 458/3%/0% |
| Heiresses (trading) | MIXED | 592 | 8% | 4% | 1% | 57% | 0% | 0% | 11.0 | 35% (12/4) | – | 174/6%/2% | 418/2%/1% |
| Bodyguards (thieves) | MIXED | 404 | 10% | 4% | 1% | 67% | 0% | 0% | 9.4 | 40% (13/3) | – | 118/2%/0% | 286/5%/1% |
| Tribute Band (echo) | MIXED | 303 | 12% | 6% | 1% | 78% | 0% | 0% | 12.0 | 49% (13/5) | – | 26/0%/0% | 277/6%/1% |
| Gossip (purple) | DEAD | 760 | 9% | 2% | 2% | 65% | 0% | 0% | 8.4 | 29% (15/6) | – | 284/4%/4% | 476/1%/0% |
| Harmonist (yellow) | DEAD | 669 | 8% | 2% | 1% | 50% | 0% | 0% | 11.1 | 33% (8/10) | – | 220/4%/1% | 449/2%/1% |
| Night Owls (purple) | DEAD | 450 | 9% | 2% | 1% | 27% | 0% | 0% | 9.4 | 29% (7/5) | – | 132/2%/2% | 318/3%/1% |
| Patroness (market) | DEAD | 671 | 4% | 1% | 1% | 30% | 0% | 0% | 10.3 | 36% (9/1) | – | 177/1%/1% | 494/2%/1% |
| Wallflower (echo) | DEAD | 470 | 5% | 0% | 1% | 0% | 0% | 0% | 12.8 | 12% (2/1) | – | 90/0%/0% | 380/1%/1% |
| Shoplifter (thieves) | DEAD | 731 | 8% | 1% | 1% | 70% | 0% | 0% | 12.8 | 21% (8/4) | – | 263/2%/1% | 468/1%/0% |
| Tastemaker (yellow) | DEAD | 853 | 5% | 1% | 0% | 44% | 0% | 0% | 12.7 | 22% (9/1) | – | 219/2%/1% | 634/1%/0% |
| Hoarder (trading) | DEAD | 671 | 4% | 1% | 0% | 25% | 0% | 0% | 13.8 | 22% (4/2) | – | 210/1%/1% | 461/0%/0% |
| Extra Hand (benders) | DEAD | 2016 | 4% | 1% | 0% | 72% | 0% | 0% | 15.8 | 26% (17/2) | – | 707/1%/0% | 1309/1%/0% |
| Old Maid (benders) | DEAD | 3356 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1201/0%/0% | 2155/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | DEAD | 2871 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 112/0%/0% | 816/0%/0% | 1943/0%/0% |
| Polisher (silver) | DEAD | 221 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 35/0%/0% | 146/0%/0% | 40/0%/0% |
| Party Crasher (benders) | DEAD | 56 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 35/0%/0% | 21/0%/0% | – |
| Extra Hand (benders) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 3/0%/0% |
| Anarchist (benders) | DEAD | 51 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 51/0%/0% |
| Raiders (trading) | DEAD | 164 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 44/0%/0% | 120/0%/0% |
| Tribute Band (echo) | DEAD | 64 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 57/0%/0% |
| Debutantes (silver) | DEAD | 68 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 25/0%/0% | 43/0%/0% |
| Hot Streak (purple) | DEAD | 107 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 25/0%/0% | 82/0%/0% |
| Hoarder (trading) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 5/0%/0% |
| Debt Collectors (silver) | THIN DATA | 14 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 10/0%/0% |
| Heiresses (trading) | THIN DATA | 4 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 1/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Cutpurse (3) | REAL CHOICE | 23 | 91% | 43% | 43% | 20% | 0% | 100% | 6.5 | 38% (1/7) | – | 10/40%/40% | 13/46%/46% |
| choose member:Accomplice (3) | REAL CHOICE | 32 | 94% | 38% | 31% | 17% | 0% | 100% | 8.3 | 43% (4/9) | – | 14/43%/43% | 18/33%/22% |
| choose member:Agents (3) | REAL CHOICE | 27 | 93% | 30% | 26% | 25% | 0% | 100% | 8.5 | 48% (6/6) | – | 12/33%/25% | 15/27%/27% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 17 | 88% | 47% | 24% | 13% | 0% | 100% | 9.2 | 33% (3/2) | – | 7/29%/14% | 10/60%/30% |
| choose member:Scouts (3) | REAL CHOICE | 41 | 85% | 37% | 22% | 33% | 0% | 100% | 4.7 | 49% (10/7) | – | 18/39%/17% | 23/35%/26% |
| choose member:Agents | REAL CHOICE | 16 | 19% | 13% | 19% | 0% | 0% | 100% | 0.2 | 67% (1/1) | – | 9/11%/22% | 7/14%/14% |
| choose member:Early Birds (3) | REAL CHOICE + MISJUDGED | 17 | 65% | 29% | 18% | 20% | 0% | 100% | 8.0 | 64% (3/4) | – | 6/33%/17% | 11/27%/18% |
| choose member:Dabblers (3) | REAL CHOICE | 43 | 84% | 35% | 16% | 40% | 0% | 100% | 7.7 | 39% (8/6) | – | 15/33%/13% | 28/36%/18% |
| choose member:Dabblers | REAL CHOICE | 20 | 55% | 15% | 15% | 33% | 0% | 100% | 5.6 | 27% (2/1) | – | 11/18%/27% | 9/11%/0% |
| choose member:Line Cutters | REAL CHOICE | 23 | 52% | 13% | 13% | 0% | 0% | 100% | 9.5 | 33% (1/3) | – | 10/30%/20% | 13/0%/8% |
| choose member:P3's Trendsetters (4) | REAL CHOICE | 17 | 18% | 6% | 12% | 0% | 0% | 0% | 8.4 | 0% (0/0) | – | 1/100%/100% | 16/0%/6% |
| choose member:Recruit Bonus (3) | AUTO-PICK | 17 | 88% | 41% | 24% | 71% | 0% | 100% | 7.4 | 40% (2/4) | – | 9/44%/11% | 8/38%/38% |
| choose member:Deprogrammers (3) | AUTO-PICK + MISJUDGED | 34 | 79% | 35% | 18% | 50% | 0% | 100% | 11.0 | 59% (9/7) | – | 15/47%/13% | 19/26%/21% |
| choose member:Alchemists (5) | AUTO-PICK | 20 | 70% | 20% | 15% | 50% | 0% | 100% | 7.6 | 21% (2/1) | – | 3/0%/0% | 17/24%/18% |
| choose member:Busker (4) | AUTO-PICK | 23 | 74% | 26% | 13% | 50% | 0% | 100% | 6.8 | 47% (4/4) | – | 15/27%/20% | 8/25%/0% |
| choose member:Line Cutters (2) | AUTO-PICK | 51 | 98% | 41% | 12% | 57% | 5% | 100% | 10.6 | 41% (7/13) | – | 24/54%/0% | 27/30%/22% |
| choose member:Stunt Double | AUTO-PICK | 17 | 53% | 24% | 12% | 100% | 50% | 100% | 8.3 | 71% (1/4) | – | 5/40%/40% | 12/17%/0% |
| choose member:P2's Con Men (7) | AUTO-PICK | 18 | 44% | 17% | 11% | 67% | 0% | 67% | 22.0 | 38% (2/1) | – | 2/0%/0% | 16/19%/13% |
| choose member:P1's HR (10) | AUTO-PICK + MISJUDGED | 20 | 95% | 80% | 10% | 75% | 63% | 13% | 15.5 | 56% (2/3) | – | 3/100%/0% | 17/76%/12% |
| choose member:Kingpin (4) | AUTO-PICK | 50 | 68% | 16% | 8% | 50% | 0% | 100% | 10.8 | 44% (5/10) | – | 18/28%/11% | 32/9%/6% |
| choose member:Shopkeeper (4) | AUTO-PICK | 26 | 81% | 38% | 8% | 60% | 0% | 100% | 11.9 | 33% (5/2) | – | 11/36%/18% | 15/40%/0% |
| choose member:P4's Busker (4) | AUTO-PICK | 15 | 27% | 13% | 7% | 50% | 50% | 50% | 29.0 | 0% (0/0) | – | 3/0%/0% | 12/17%/8% |
| pass:Pass | AUTO-PICK | 12099 | 35% | 18% | 6% | 59% | 12% | 11% | 8.6 | 38% (845/683) | 2856/38%/9% | 3876/19%/8% | 5367/6%/4% |
| choose member:Trendsetters (4) | AUTO-PICK | 18 | 67% | 17% | 6% | 67% | 0% | 100% | 8.5 | 33% (0/4) | – | 5/20%/20% | 13/15%/0% |
| choose member:P2's Chronicler (5) | AUTO-PICK | 20 | 25% | 10% | 5% | 50% | 50% | 0% | 3.3 | 0% (0/0) | – | – | 20/10%/5% |
| choose member:P4's Grifter (8) | AUTO-PICK | 22 | 32% | 23% | 5% | 80% | 0% | 20% | 6.7 | 57% (4/0) | – | 2/0%/50% | 20/25%/0% |
| choose member:P3's Con Men (7) | AUTO-PICK + MISJUDGED | 25 | 32% | 16% | 4% | 75% | 0% | 50% | 5.7 | 75% (3/3) | – | 2/50%/0% | 23/13%/4% |
| followers:top | AUTO-PICK | 8865 | 25% | 16% | 2% | 76% | 52% | 0% | 8.4 | 41% (228/367) | 290/0%/0% | 3367/0%/0% | 5208/27%/4% |
| choose member:P4's Con Men (7) | AUTO-PICK + MISJUDGED | 46 | 33% | 15% | 2% | 57% | 0% | 14% | 16.1 | 53% (6/2) | – | 4/50%/0% | 42/12%/2% |
| choose member:Roadie | AUTO-PICK | 24 | 75% | 58% | 0% | 86% | 64% | 93% | 24.7 | 44% (1/3) | – | 11/82%/0% | 13/38%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 18 | 39% | 33% | 0% | 67% | 50% | 50% | 9.4 | 75% (3/0) | – | 3/0%/0% | 15/40%/0% |
| choose member:Busker | AUTO-PICK | 23 | 39% | 30% | 0% | 71% | 57% | 100% | 12.1 | 60% (2/1) | – | 9/33%/0% | 14/29%/0% |
| choose member:P3's Dyer (7) | AUTO-PICK | 15 | 40% | 27% | 0% | 100% | 100% | 25% | 4.7 | 50% (0/1) | – | 1/0%/0% | 14/29%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | AUTO-PICK | 17 | 35% | 24% | 0% | 75% | 0% | 25% | 9.5 | 33% (2/0) | – | 7/29%/0% | 10/20%/0% |
| choose member:P3's Busker (4) | AUTO-PICK | 16 | 38% | 19% | 0% | 67% | 0% | 33% | 22.4 | 50% (3/0) | – | 1/100%/0% | 15/13%/0% |
| choose member:P2's Panel (7) | AUTO-PICK | 24 | 38% | 17% | 0% | 50% | 0% | 0% | 15.4 | 22% (1/1) | – | 2/50%/0% | 22/14%/0% |
| choose member:P1's Extortionist (7) | AUTO-PICK | 23 | 17% | 13% | 0% | 100% | 0% | 33% | 9.5 | 50% (2/0) | – | 2/100%/0% | 21/5%/0% |
| choose member:P2's Grifter (8) | AUTO-PICK | 16 | 13% | 13% | 0% | 50% | 0% | 50% | – | 50% (1/0) | – | 1/100%/0% | 15/7%/0% |
| choose member:P1's Deprogrammers (3) | AUTO-PICK | 16 | 44% | 13% | 0% | 50% | 0% | 0% | 12.4 | 29% (1/1) | – | 3/0%/0% | 13/15%/0% |
| choose member:P1's Alchemists (5) | MIXED | 27 | 19% | 7% | 7% | 50% | 0% | 50% | 15.0 | 40% (1/1) | – | 1/0%/0% | 26/8%/8% |
| followers:small | MIXED | 12099 | 34% | 12% | 7% | 42% | 0% | 8% | 9.9 | 36% (976/515) | 2856/12%/7% | 3876/15%/8% | 5367/9%/5% |
| choose member:P2's Kingpin (4) | MIXED | 31 | 19% | 3% | 6% | 100% | 0% | 100% | 9.7 | 17% (1/0) | – | 3/33%/0% | 28/0%/7% |
| choose member:P4's Chronicler (5) | MIXED | 16 | 25% | 0% | 6% | – | – | – | 5.8 | 25% (0/1) | – | – | 16/0%/6% |
| choose member:P4's Timekeepers (4) | MIXED | 18 | 17% | 0% | 6% | – | – | – | 7.1 | 33% (0/1) | – | 1/0%/0% | 17/0%/6% |
| choose member:P1's Busker (4) | MIXED + MISJUDGED | 37 | 22% | 5% | 5% | 50% | 0% | 50% | 9.3 | 63% (1/4) | – | 3/33%/0% | 34/3%/6% |
| choose member:P2's Extortionist (7) | MIXED | 19 | 16% | 0% | 5% | – | – | – | 3.8 | 0% (0/0) | – | – | 19/0%/5% |
| choose member:P2's Roadie (3) | MIXED | 20 | 35% | 15% | 5% | 33% | 33% | 33% | 12.5 | 17% (1/0) | – | – | 20/15%/5% |
| choose member:P1's Con Men (7) | MIXED | 22 | 27% | 9% | 5% | 50% | 0% | 0% | 9.5 | 50% (1/2) | – | – | 22/9%/5% |
| choose member:P1's Roadie (3) | MIXED | 24 | 17% | 8% | 4% | 50% | 50% | 0% | 20.1 | 100% (1/2) | – | 2/0%/0% | 22/9%/5% |
| followers:mid | MIXED | 11179 | 15% | 6% | 3% | 37% | 1% | 1% | 8.7 | 36% (298/296) | 1962/0%/0% | 3861/1%/1% | 5356/12%/5% |
| choose member:P2's Deprogrammers (3) | MIXED | 23 | 17% | 9% | 0% | 100% | 0% | 0% | 7.8 | 50% (2/0) | – | 1/0%/0% | 22/9%/0% |
| choose member:P4's Deprogrammers (3) | MIXED | 27 | 19% | 7% | 0% | 100% | 0% | 0% | 17.9 | 40% (0/2) | – | 4/0%/0% | 23/9%/0% |
| choose member:P1's Dabblers (3) | MIXED | 19 | 16% | 5% | 0% | 0% | 0% | 0% | 3.3 | 0% (0/0) | – | 1/0%/0% | 18/6%/0% |
| choose member:P3's Extortionist (7) | MIXED | 20 | 10% | 5% | 0% | 0% | 0% | 0% | 9.5 | 0% (0/0) | – | – | 20/5%/0% |
| choose member:P2's Stunt Double (5) | MIXED | 20 | 20% | 5% | 0% | 100% | 0% | 0% | 8.8 | 50% (1/1) | – | 3/33%/0% | 17/0%/0% |
| choose member:P2's Dabblers (3) | MIXED | 25 | 8% | 4% | 0% | 100% | 0% | 0% | 2.0 | 50% (1/0) | – | 2/0%/0% | 23/4%/0% |
| choose member:Scouts | MIXED | 16 | 19% | 0% | 0% | – | – | – | 21.8 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Deprogrammers | MIXED | 15 | 20% | 0% | 0% | – | – | – | 6.2 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| choose member:P2's Loyalists (5) | MIXED | 15 | 20% | 0% | 0% | – | – | – | 21.2 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| choose member:P2's Shopkeeper (4) | MIXED | 20 | 20% | 0% | 0% | – | – | – | 18.4 | 0% (0/0) | – | – | 20/0%/0% |
| choose member:P1's Bouncers (4) | MIXED | 19 | 32% | 0% | 0% | – | – | – | 13.9 | 0% (0/0) | – | 2/0%/0% | 17/0%/0% |
| choose member:P1's Grifter (8) | MIXED | 28 | 14% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 2/0%/0% | 26/0%/0% |
| choose member:P4's Kingpin (4) | FILLER | 27 | 19% | 4% | 4% | 0% | 0% | 100% | 11.7 | 40% (0/2) | – | – | 27/4%/4% |
| choose member:P3's Dabblers (3) | FILLER | 61 | 10% | 3% | 2% | 100% | 0% | 50% | 13.1 | 50% (2/1) | – | 6/17%/0% | 55/2%/2% |
| choose member:P3's Deprogrammers (3) | FILLER | 23 | 9% | 9% | 0% | 100% | 0% | 50% | – | 50% (1/0) | – | 1/0%/0% | 22/9%/0% |
| choose member:P3's Roadie (3) | FILLER | 24 | 13% | 8% | 0% | 100% | 50% | 50% | 22.2 | 50% (1/0) | – | 2/0%/0% | 22/9%/0% |
| choose member:P1's Scouts (3) | FILLER | 29 | 3% | 3% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | – | 29/3%/0% |
| choose member:P4's Dabblers (3) | FILLER | 33 | 6% | 3% | 0% | 100% | 0% | 100% | 15.9 | 0% (0/0) | – | 4/0%/0% | 29/3%/0% |
| choose member:P2's Line Cutters (2) | DEAD | 44 | 7% | 2% | 0% | 0% | 0% | 100% | 4.6 | 0% (0/0) | – | 6/0%/0% | 38/3%/0% |
| choose member:P2's Accomplice (3) | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 37/0%/0% |
| choose member:P4's Line Cutters (2) | DEAD | 50 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 44/0%/0% |
| choose member:P3's Cutpurse (3) | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 29/0%/0% |
| choose member:P1's Accomplice (3) | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 34/0%/0% |
| choose member:P1's Desperado (5) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P2's Cutpurse (3) | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 37/0%/0% |
| choose member:P2's Scouts (3) | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.5 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| choose member:P3's Line Cutters (2) | DEAD | 27 | 7% | 0% | 0% | – | – | – | 12.2 | 0% (0/0) | – | 2/0%/0% | 25/0%/0% |
| pass:Don’t swap | DEAD | 918 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 466/0%/0% | 452/0%/0% |
| choose member:P1's Volunteer (1) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| choose member:P3's Kingpin (4) | DEAD | 20 | 5% | 0% | 0% | – | – | – | 1.6 | 100% (0/1) | – | 1/0%/0% | 19/0%/0% |
| choose member:P4's Scouts (3) | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 40/0%/0% |
| choose member:P4's Recruit Bonus (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 43/0%/0% |
| choose member:P4's Party Crasher (4) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| choose member:P2's Polisher (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| choose member:P2's Sticky Fingers (4) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| choose member:P2's Volunteer (1) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Agents ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| choose member:P3's Volunteer (1) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| choose member:P4's Early Birds (3) | DEAD | 18 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P3's Sticky Fingers (4) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P2's Party Crasher (4) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| choose member:P3's Scouts (3) | DEAD | 47 | 4% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 4/0%/0% | 43/0%/0% |
| trade:P1: Scouts ↔ P4: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 18.6 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| choose member:P1's Recruit Bonus (3) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| choose member:P1's Party Crasher (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| choose member:P3's Accomplice (3) | DEAD | 33 | 3% | 0% | 0% | – | – | – | 41.4 | 0% (0/0) | – | 2/0%/0% | 31/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 36/0%/0% |
| choose member:P4's Volunteer (1) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| choose member:P1's Regular (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| choose member:P1's Sticky Fingers (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| choose member:P4's Agents (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| choose member:P3's Alchemists (5) | DEAD | 18 | 6% | 0% | 0% | – | – | – | 21.4 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| choose member:P4's Cutpurse (3) | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 27/0%/0% |
| choose member:P1's Polisher (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P1's Line Cutters (2) | DEAD | 32 | 3% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 3/0%/0% | 29/0%/0% |
| choose member:P2's Recruit Bonus (3) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| choose member:P1's Agents (3) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| choose member:P4's Roadie (3) | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.4 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Patriarch ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| choose member:P1's Kingpin (4) | DEAD | 29 | 7% | 0% | 0% | – | – | – | 17.3 | 0% (0/0) | – | 1/0%/0% | 28/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| choose member:P4's Stunt Double (5) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Agents ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |

(21811 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 2092 | 16% | 1772 | 20% |
| market | 2261 | 15% | 2216 | 19% |
| benders | 0 | – | 1387 | 18% |
| trading | 2370 | 16% | 1842 | 17% |
| silver | 2149 | 15% | 1803 | 15% |
| yellow | 2152 | 15% | 1804 | 13% |
| red | 2255 | 15% | 2369 | 13% |
| echo | 2104 | 13% | 2222 | 10% |
| thieves | 2315 | 12% | 2283 | 9% |
