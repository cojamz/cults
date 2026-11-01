# Choice report

35599 looked-ahead decisions from 356 games (/mnt/project-files/balance-1.0/merged/hard.choices). 15% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| thieves: Poach | AUTO-PICK + MISJUDGED | 744 | 44% | 28% | 4% | 82% | 37% | 1% | 10.1 | 52% (72/59) | – | – | 744/28%/4% |
| market: Peek | AUTO-PICK | 4401 | 26% | 11% | 4% | 58% | 11% | 14% | 10.9 | 37% (266/135) | 1234/13%/5% | 1614/10%/2% | 1553/10%/4% |
| purple: Crowd In | AUTO-PICK | 1250 | 27% | 14% | 4% | 67% | 16% | 1% | 10.3 | 43% (82/50) | – | – | 1250/14%/4% |
| purple: Sleep In | AUTO-PICK | 3401 | 35% | 14% | 3% | 65% | 15% | 4% | 13.1 | 42% (208/261) | 701/22%/5% | 1132/15%/2% | 1568/10%/4% |
| echo: Cover | AUTO-PICK | 2416 | 28% | 13% | 3% | 74% | 23% | 5% | 12.9 | 48% (115/176) | – | 1184/13%/3% | 1232/13%/4% |
| yellow: Harvest | AUTO-PICK | 3775 | 24% | 12% | 3% | 71% | 39% | 8% | 11.0 | 41% (162/142) | 281/58%/2% | 1360/11%/3% | 2134/7%/3% |
| silver: Largesse | AUTO-PICK | 1237 | 28% | 14% | 3% | 68% | 12% | 0% | 11.0 | 48% (79/76) | – | – | 1237/14%/3% |
| red: Promote | AUTO-PICK | 2071 | 40% | 22% | 3% | 78% | 37% | 1% | 13.8 | 49% (146/178) | – | 912/26%/3% | 1159/18%/3% |
| market: Spree | AUTO-PICK | 1406 | 28% | 12% | 3% | 67% | 29% | 0% | 11.0 | 45% (62/95) | – | – | 1406/12%/3% |
| thieves: Crime Wave | AUTO-PICK | 2741 | 26% | 13% | 3% | 69% | 25% | 2% | 13.1 | 47% (153/145) | – | 1486/12%/2% | 1255/14%/4% |
| thieves: Help Yourself | AUTO-PICK | 2146 | 41% | 24% | 3% | 84% | 54% | 2% | 12.2 | 44% (108/153) | 198/86%/1% | 726/24%/3% | 1222/14%/3% |
| echo: Build Up | AUTO-PICK | 4067 | 27% | 11% | 3% | 69% | 24% | 6% | 12.6 | 46% (197/249) | 746/21%/4% | 1528/10%/2% | 1793/9%/2% |
| red: Recruit a Member | AUTO-PICK | 1616 | 25% | 12% | 2% | 67% | 27% | 7% | 11.9 | 46% (81/80) | – | – | 1616/12%/2% |
| yellow: Melting Pot | AUTO-PICK | 3161 | 24% | 10% | 2% | 70% | 25% | 8% | 11.2 | 42% (117/162) | – | 1305/13%/2% | 1856/8%/3% |
| silver: Toast | AUTO-PICK | 4236 | 27% | 10% | 2% | 68% | 25% | 14% | 12.0 | 42% (159/281) | 1413/9%/3% | 1584/10%/2% | 1239/13%/3% |
| yellow: Big Dilute | AUTO-PICK | 2711 | 24% | 12% | 2% | 72% | 30% | 7% | 11.5 | 42% (116/113) | – | 980/17%/2% | 1731/9%/3% |
| thieves: Stash | AUTO-PICK | 4655 | 24% | 11% | 2% | 66% | 22% | 8% | 11.7 | 43% (215/212) | 1014/17%/3% | 1699/10%/2% | 1942/9%/2% |
| echo: Echo | AUTO-PICK | 2228 | 34% | 21% | 2% | 85% | 54% | 1% | 14.2 | 49% (109/142) | 406/39%/2% | 812/21%/2% | 1010/15%/2% |
| red: Walk-In | AUTO-PICK | 4016 | 28% | 15% | 2% | 78% | 51% | 7% | 13.7 | 41% (116/221) | 1180/16%/3% | 1094/19%/1% | 1742/11%/2% |
| trading: Estate Sale | AUTO-PICK | 3325 | 24% | 11% | 2% | 75% | 32% | 6% | 12.3 | 40% (119/155) | – | 1485/13%/2% | 1840/9%/2% |
| purple: Last Call | AUTO-PICK | 2135 | 31% | 13% | 2% | 70% | 1% | 1% | 13.7 | 47% (141/169) | – | 1104/12%/1% | 1031/15%/3% |
| red: Demote | AUTO-PICK | 3453 | 27% | 12% | 2% | 76% | 34% | 4% | 13.3 | 43% (146/191) | – | 1483/14%/2% | 1970/10%/2% |
| echo: Reprise | AUTO-PICK | 3577 | 22% | 13% | 2% | 82% | 47% | 2% | 12.2 | 45% (106/153) | 1031/15%/2% | 1174/13%/1% | 1372/12%/2% |
| market: Savings | MIXED | 6451 | 15% | 5% | 3% | 42% | 14% | 30% | 8.7 | 32% (212/84) | 1268/12%/5% | 2365/4%/3% | 2818/4%/3% |
| purple: Hold Up | MIXED | 5716 | 19% | 7% | 3% | 52% | 12% | 27% | 10.6 | 36% (236/130) | 1096/14%/4% | 1980/7%/2% | 2640/5%/3% |
| market: Out of Style | MIXED | 5111 | 21% | 8% | 3% | 56% | 8% | 13% | 10.7 | 42% (205/222) | 668/24%/6% | 1852/8%/2% | 2591/5%/3% |
| market: Bury | MIXED | 3266 | 25% | 9% | 3% | 65% | 13% | 11% | 11.2 | 41% (149/176) | – | 1127/15%/3% | 2139/7%/3% |
| red: Tryout | MIXED | 5895 | 19% | 8% | 3% | 67% | 31% | 14% | 11.1 | 40% (198/185) | 991/19%/4% | 1926/8%/1% | 2978/5%/3% |
| silver: Party Favors | MIXED | 3552 | 21% | 9% | 2% | 67% | 28% | 10% | 12.1 | 41% (122/150) | – | 1354/12%/2% | 2198/7%/3% |
| market: Recruit Twice | MIXED | 4589 | 14% | 5% | 2% | 62% | 32% | 15% | 9.2 | 38% (107/102) | – | 2400/3%/3% | 2189/7%/2% |
| trading: Allowance | MIXED | 5371 | 20% | 9% | 2% | 65% | 15% | 10% | 10.5 | 40% (235/161) | 1044/17%/3% | 2042/7%/2% | 2285/7%/2% |
| red: Gather | MIXED | 6898 | 16% | 7% | 2% | 62% | 19% | 22% | 10.4 | 40% (246/148) | 1370/14%/4% | 2683/5%/1% | 2845/5%/2% |
| silver: Sweet Talk | MIXED | 4036 | 16% | 7% | 2% | 66% | 33% | 15% | 11.0 | 42% (101/129) | – | 1615/9%/1% | 2421/6%/3% |
| silver: Party Gifts | MIXED | 5531 | 16% | 8% | 2% | 59% | 16% | 13% | 10.6 | 46% (203/179) | 1389/10%/3% | 2229/5%/2% | 1913/8%/2% |
| trading: Farewell | MIXED | 4858 | 15% | 6% | 2% | 55% | 22% | 18% | 10.5 | 39% (116/137) | – | 2494/5%/2% | 2364/8%/2% |
| echo: Encore | MIXED | 3667 | 16% | 8% | 2% | 67% | 32% | 13% | 11.8 | 42% (111/97) | – | 1620/8%/1% | 2047/7%/2% |
| thieves: Shake Down | MIXED | 3486 | 21% | 9% | 2% | 72% | 28% | 8% | 11.5 | 42% (135/144) | – | 1275/13%/2% | 2211/7%/2% |
| echo: Greatest Hits | MIXED | 2908 | 7% | 3% | 2% | 60% | 12% | 49% | 5.7 | 45% (65/16) | – | – | 2908/3%/2% |
| yellow: Trade Seeds | MIXED | 6386 | 12% | 4% | 2% | 59% | 20% | 23% | 10.6 | 40% (108/162) | 954/16%/4% | 2445/2%/1% | 2987/2%/2% |
| trading: Exchange | MIXED | 7509 | 10% | 3% | 2% | 49% | 19% | 46% | 8.4 | 39% (110/155) | 1867/4%/3% | 2810/1%/1% | 2832/5%/1% |
| thieves: Lie Low | MIXED | 6820 | 12% | 5% | 2% | 63% | 29% | 28% | 8.9 | 44% (166/149) | 1258/14%/2% | 2452/4%/1% | 3110/3%/2% |
| yellow: Dilute | MIXED | 5930 | 13% | 6% | 1% | 72% | 27% | 20% | 10.0 | 39% (142/124) | 1016/15%/2% | 2149/4%/1% | 2765/3%/2% |
| silver: Polish | MIXED | 6865 | 10% | 4% | 1% | 55% | 33% | 43% | 9.5 | 39% (119/98) | 1516/9%/1% | 2318/3%/1% | 3031/3%/2% |
| yellow: Makeover | MIXED | 2713 | 7% | 4% | 1% | 62% | 22% | 32% | 9.1 | 36% (39/23) | – | – | 2713/4%/1% |
| purple: Right Away | FILLER | 7034 | 11% | 4% | 3% | 32% | 10% | 56% | 7.1 | 31% (165/59) | 1615/6%/2% | 2433/3%/3% | 2986/4%/3% |
| purple: Crunch Time | DEAD | 5627 | 9% | 2% | 3% | 21% | 5% | 63% | 6.5 | 26% (73/62) | – | 2428/2%/3% | 3199/2%/3% |
| trading: Cash In | DEAD | 3332 | 7% | 3% | 2% | 48% | 23% | 36% | 7.1 | 39% (36/54) | – | – | 3332/3%/2% |
| trading: Splurge | DEAD | 8103 | 7% | 3% | 2% | 36% | 20% | 60% | 7.5 | 34% (124/54) | 1739/8%/3% | 2843/0%/0% | 3521/2%/2% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dabblers (benders) | REAL CHOICE | 1696 | 56% | 18% | 10% | 49% | 12% | 1% | 10.8 | 32% (112/177) | 1063/13%/12% | 296/34%/8% | 337/20%/8% |
| Volunteer (red) | AUTO-PICK | 779 | 59% | 23% | 9% | 54% | 3% | 4% | 9.8 | 43% (93/104) | 391/26%/14% | 135/33%/8% | 253/14%/4% |
| Timekeepers (purple) | AUTO-PICK | 892 | 47% | 15% | 9% | 55% | 15% | 0% | 9.6 | 37% (54/91) | 438/7%/9% | 224/19%/8% | 230/27%/10% |
| Line Cutters (benders) | AUTO-PICK | 1037 | 75% | 32% | 8% | 64% | 24% | 3% | 12.1 | 39% (67/206) | 664/33%/9% | 154/40%/8% | 219/22%/6% |
| Polisher (silver) | AUTO-PICK | 1024 | 33% | 13% | 7% | 53% | 3% | 2% | 8.7 | 42% (92/50) | 446/13%/11% | 180/28%/5% | 398/6%/4% |
| Kingpin (thieves) | AUTO-PICK | 997 | 42% | 14% | 7% | 58% | 6% | 1% | 11.2 | 38% (55/100) | 503/6%/7% | 218/26%/6% | 276/19%/8% |
| Roadie (echo) | AUTO-PICK | 344 | 71% | 46% | 6% | 81% | 21% | 1% | 9.9 | 44% (50/41) | 216/52%/7% | 52/52%/2% | 76/25%/7% |
| Loyalists (red) | AUTO-PICK | 816 | 45% | 16% | 6% | 56% | 7% | 1% | 11.4 | 32% (50/66) | – | 369/18%/6% | 447/14%/6% |
| Window Dressers (market) | AUTO-PICK | 789 | 49% | 17% | 6% | 54% | 7% | 1% | 11.8 | 35% (42/88) | 248/10%/8% | 245/22%/6% | 296/19%/5% |
| Snobs (market) | AUTO-PICK | 562 | 51% | 22% | 6% | 70% | 34% | 1% | 12.3 | 40% (23/74) | – | 324/17%/6% | 238/29%/5% |
| Shopkeeper (trading) | AUTO-PICK | 333 | 76% | 49% | 6% | 72% | 31% | 0% | 10.9 | 39% (28/51) | 126/73%/7% | 93/57%/8% | 114/16%/4% |
| Bouncers (purple) | AUTO-PICK | 991 | 39% | 13% | 6% | 55% | 6% | 0% | 11.0 | 36% (69/68) | 439/10%/6% | 146/21%/10% | 406/13%/4% |
| Fan Club (echo) | AUTO-PICK | 308 | 69% | 38% | 6% | 81% | 41% | 0% | 15.0 | 47% (28/49) | – | 164/47%/8% | 144/28%/3% |
| Philanthropists (silver) | AUTO-PICK | 574 | 49% | 20% | 6% | 62% | 16% | 0% | 11.8 | 44% (50/66) | – | 259/19%/6% | 315/21%/5% |
| Alchemists (benders) | AUTO-PICK | 1585 | 54% | 14% | 6% | 53% | 4% | 0% | 11.9 | 39% (119/210) | – | 670/17%/7% | 915/12%/5% |
| Old Money (trading) | AUTO-PICK | 860 | 41% | 14% | 5% | 52% | 10% | 0% | 11.0 | 38% (46/85) | – | 382/12%/5% | 478/15%/6% |
| Drifters (yellow) | AUTO-PICK | 700 | 42% | 18% | 5% | 61% | 25% | 0% | 10.8 | 35% (34/58) | 244/25%/7% | 197/22%/6% | 259/8%/3% |
| Chronicler (echo) | AUTO-PICK | 654 | 54% | 20% | 5% | 64% | 14% | 0% | 11.9 | 40% (54/79) | – | 385/20%/5% | 269/19%/5% |
| Doppelganger (echo) | AUTO-PICK | 617 | 41% | 21% | 5% | 67% | 22% | 1% | 10.5 | 44% (50/49) | – | 194/31%/6% | 423/16%/4% |
| Gardener (yellow) | AUTO-PICK | 474 | 49% | 29% | 5% | 83% | 47% | 1% | 11.7 | 42% (21/49) | 115/65%/5% | 135/34%/7% | 224/7%/3% |
| Patriarch (red) | AUTO-PICK | 584 | 48% | 23% | 4% | 74% | 35% | 0% | 10.8 | 38% (27/61) | – | 378/15%/4% | 206/38%/5% |
| Busker (echo) | AUTO-PICK | 408 | 65% | 40% | 4% | 79% | 29% | 0% | 11.7 | 44% (38/57) | 157/58%/4% | 74/64%/3% | 177/14%/6% |
| Con Men (benders) | AUTO-PICK | 496 | 76% | 54% | 4% | 90% | 72% | 0% | 10.7 | 40% (17/55) | – | 166/86%/1% | 330/38%/6% |
| Cutpurse (thieves) | AUTO-PICK | 413 | 63% | 38% | 4% | 84% | 53% | 1% | 12.3 | 42% (23/52) | 229/42%/3% | 61/51%/5% | 123/23%/6% |
| Dyer (yellow) | AUTO-PICK | 390 | 49% | 24% | 4% | 76% | 35% | 0% | 11.2 | 40% (22/41) | – | 101/51%/9% | 289/14%/2% |
| Panel (red) | AUTO-PICK | 378 | 42% | 23% | 4% | 83% | 49% | 0% | 11.0 | 42% (8/41) | – | 232/26%/5% | 146/18%/3% |
| Window Shopper (market) | AUTO-PICK | 966 | 35% | 14% | 4% | 62% | 17% | 0% | 10.2 | 41% (60/68) | – | 307/23%/6% | 659/9%/3% |
| Shift Crew (purple) | AUTO-PICK | 1070 | 24% | 10% | 4% | 53% | 6% | 1% | 9.5 | 40% (57/41) | 275/3%/1% | 412/10%/4% | 383/16%/6% |
| High Society (silver) | AUTO-PICK | 474 | 47% | 19% | 3% | 72% | 29% | 0% | 11.6 | 38% (23/53) | – | 138/21%/4% | 336/18%/3% |
| Extortionist (thieves) | AUTO-PICK | 482 | 39% | 20% | 3% | 69% | 36% | 0% | 12.7 | 35% (21/32) | – | 164/32%/3% | 318/14%/3% |
| HR (benders) | AUTO-PICK | 934 | 43% | 21% | 3% | 75% | 45% | 0% | 15.4 | 41% (35/94) | – | 514/13%/2% | 420/31%/5% |
| Ringleader (yellow) | AUTO-PICK | 729 | 36% | 12% | 3% | 65% | 11% | 0% | 12.1 | 40% (43/58) | – | 329/13%/2% | 400/12%/4% |
| Double Agent (thieves) | AUTO-PICK | 466 | 38% | 21% | 3% | 80% | 46% | 0% | 11.5 | 32% (16/26) | – | 213/17%/1% | 253/25%/4% |
| Accomplice (thieves) | AUTO-PICK | 213 | 79% | 69% | 2% | 95% | 79% | 3% | 10.9 | 42% (10/12) | 132/70%/1% | 37/81%/5% | 44/55%/5% |
| Mentor & Protégés (red) | AUTO-PICK | 577 | 31% | 13% | 2% | 66% | 23% | 0% | 14.0 | 33% (22/31) | – | 184/10%/2% | 393/14%/2% |
| Grifter (thieves) | AUTO-PICK | 444 | 48% | 27% | 2% | 83% | 55% | 0% | 12.4 | 46% (19/50) | – | 175/26%/2% | 269/28%/3% |
| Caravan (yellow) | AUTO-PICK | 416 | 42% | 17% | 2% | 68% | 26% | 0% | 13.3 | 30% (17/29) | – | 132/32%/2% | 284/11%/2% |
| Stunt Double (echo) | AUTO-PICK | 315 | 59% | 43% | 2% | 84% | 57% | 0% | 15.6 | 38% (15/27) | – | 130/64%/4% | 185/28%/1% |
| Mob (red) | AUTO-PICK | 173 | 61% | 35% | 2% | 89% | 67% | 0% | 15.5 | 44% (7/21) | – | 61/26%/3% | 112/40%/1% |
| Early Birds (purple) | MIXED | 797 | 44% | 16% | 10% | 47% | 10% | 0% | 8.9 | 34% (48/69) | 314/16%/13% | 166/25%/9% | 317/11%/7% |
| Scouts (benders) | MIXED | 2081 | 49% | 14% | 10% | 41% | 5% | 1% | 9.5 | 34% (132/213) | 1126/12%/12% | 311/28%/9% | 644/11%/5% |
| Recruit Bonus (red) | MIXED | 1087 | 46% | 16% | 10% | 49% | 5% | 1% | 9.5 | 36% (80/99) | 611/12%/11% | 195/29%/12% | 281/16%/5% |
| Deprogrammers (red) | MIXED | 582 | 70% | 30% | 9% | 47% | 13% | 0% | 12.1 | 34% (31/99) | 423/25%/8% | 94/43%/11% | 65/42%/18% |
| Trendsetters (market) | MIXED | 881 | 42% | 15% | 7% | 37% | 3% | 0% | 11.1 | 34% (57/69) | 336/9%/8% | 254/24%/8% | 291/15%/5% |
| Martyrs (trading) | MIXED | 930 | 40% | 13% | 7% | 41% | 5% | 0% | 10.6 | 33% (56/64) | 355/5%/7% | 260/21%/7% | 315/17%/8% |
| Connoisseurs (market) | MIXED | 1391 | 36% | 9% | 6% | 48% | 2% | 0% | 10.1 | 27% (66/65) | 438/4%/8% | 411/15%/8% | 542/8%/4% |
| Recluse (trading) | MIXED | 871 | 40% | 16% | 6% | 49% | 12% | 0% | 10.6 | 39% (43/88) | 325/8%/5% | 221/21%/6% | 325/20%/8% |
| Agents (echo) | MIXED | 928 | 43% | 16% | 6% | 46% | 6% | 1% | 10.6 | 33% (75/53) | 520/15%/7% | 194/21%/6% | 214/14%/4% |
| Critic (market) | MIXED | 1253 | 31% | 10% | 6% | 38% | 2% | 1% | 9.6 | 42% (101/60) | 418/6%/7% | 319/18%/8% | 516/9%/4% |
| Toastmaster (silver) | MIXED | 1338 | 28% | 8% | 6% | 40% | 5% | 0% | 9.8 | 32% (68/52) | 434/9%/13% | 203/20%/4% | 701/5%/2% |
| Doormen (market) | MIXED | 1131 | 37% | 10% | 6% | 51% | 3% | 0% | 11.0 | 33% (73/63) | – | 510/9%/4% | 621/10%/7% |
| Regular (market) | MIXED | 1405 | 31% | 8% | 5% | 53% | 4% | 1% | 9.3 | 30% (70/59) | 399/7%/7% | 332/13%/7% | 674/6%/3% |
| Brokers (trading) | MIXED | 758 | 39% | 13% | 5% | 47% | 8% | 0% | 11.1 | 34% (43/55) | – | 285/13%/5% | 473/12%/5% |
| Clockmakers (purple) | MIXED | 999 | 31% | 8% | 4% | 32% | 0% | 0% | 10.5 | 33% (50/53) | – | 363/9%/5% | 636/7%/4% |
| Raiders (trading) | MIXED | 1028 | 26% | 7% | 4% | 54% | 1% | 0% | 12.0 | 29% (43/34) | – | 391/8%/4% | 637/6%/3% |
| Triplets (red) | MIXED | 1771 | 20% | 7% | 3% | 44% | 5% | 0% | 9.5 | 36% (83/45) | 887/3%/2% | 476/12%/5% | 408/9%/4% |
| Sticky Fingers (thieves) | MIXED | 1376 | 20% | 5% | 3% | 44% | 4% | 0% | 11.0 | 28% (49/26) | 357/4%/3% | 373/8%/5% | 646/4%/2% |
| Party Crasher (benders) | MIXED | 3539 | 22% | 6% | 3% | 62% | 1% | 0% | 9.0 | 31% (166/75) | 1429/2%/2% | 581/19%/7% | 1529/5%/2% |
| Muse (echo) | MIXED | 1859 | 19% | 5% | 3% | 49% | 2% | 0% | 9.6 | 31% (64/41) | 620/3%/3% | 437/10%/5% | 802/3%/2% |
| Cashier (trading) | MIXED | 1383 | 15% | 5% | 3% | 49% | 11% | 0% | 7.3 | 35% (35/35) | 337/3%/2% | 447/5%/3% | 599/6%/3% |
| Debt Collectors (silver) | MIXED | 799 | 16% | 7% | 3% | 54% | 0% | 0% | 9.9 | 41% (43/10) | – | 261/11%/2% | 538/6%/3% |
| Go-Between (yellow) | MIXED | 1256 | 21% | 5% | 2% | 53% | 9% | 0% | 10.2 | 28% (26/48) | 266/6%/3% | 334/8%/3% | 656/2%/2% |
| Exporters (trading) | MIXED | 1177 | 18% | 3% | 2% | 45% | 3% | 0% | 11.0 | 31% (28/37) | – | 594/3%/3% | 583/4%/2% |
| Hangers-On (silver) | MIXED | 860 | 15% | 3% | 2% | 38% | 0% | 0% | 12.1 | 26% (20/13) | – | 280/4%/3% | 580/2%/1% |
| Gift Wrapper (silver) | MIXED | 1179 | 13% | 3% | 2% | 44% | 0% | 0% | 11.9 | 23% (25/9) | – | 389/5%/4% | 790/2%/1% |
| Collector (silver) | MIXED | 1219 | 12% | 3% | 2% | 39% | 3% | 0% | 8.6 | 29% (19/23) | 154/2%/2% | 334/6%/4% | 731/2%/1% |
| Big Tent (yellow) | MIXED | 842 | 19% | 6% | 2% | 57% | 13% | 0% | 10.4 | 37% (24/32) | – | 302/10%/4% | 540/4%/1% |
| Closer (purple) | MIXED | 1216 | 13% | 3% | 2% | 43% | 3% | 0% | 10.7 | 25% (30/10) | – | 389/6%/3% | 827/2%/1% |
| Courier (purple) | MIXED | 1053 | 10% | 2% | 2% | 44% | 0% | 0% | 10.0 | 32% (23/12) | – | 414/4%/3% | 639/1%/1% |
| Bodyguards (thieves) | MIXED | 584 | 10% | 3% | 2% | 61% | 0% | 0% | 8.6 | 36% (15/7) | – | 171/1%/0% | 413/4%/2% |
| Hot Streak (purple) | MIXED | 1175 | 14% | 4% | 2% | 35% | 0% | 0% | 9.9 | 32% (36/15) | – | 448/5%/3% | 727/4%/1% |
| Shopaholics (market) | MIXED | 854 | 18% | 5% | 2% | 50% | 0% | 0% | 11.3 | 35% (30/23) | – | 266/2%/1% | 588/6%/2% |
| Proselytizers (red) | MIXED | 1191 | 15% | 3% | 2% | 42% | 3% | 0% | 12.1 | 34% (28/31) | – | 486/3%/2% | 705/3%/1% |
| Smooth Talkers (silver) | MIXED | 756 | 14% | 2% | 1% | 38% | 0% | 0% | 12.3 | 25% (11/16) | – | 153/1%/2% | 603/2%/1% |
| Desperado (thieves) | MIXED | 1459 | 14% | 3% | 1% | 50% | 5% | 0% | 12.2 | 26% (32/22) | – | 462/6%/2% | 997/2%/1% |
| Anarchist (benders) | MIXED | 3498 | 9% | 3% | 1% | 60% | 1% | 1% | 10.4 | 33% (87/21) | – | 1109/5%/2% | 2389/2%/1% |
| Debutantes (silver) | MIXED | 905 | 14% | 4% | 1% | 47% | 0% | 0% | 12.3 | 27% (27/6) | – | 254/2%/2% | 651/4%/0% |
| Tribute Band (echo) | MIXED | 407 | 14% | 8% | 1% | 75% | 0% | 0% | 13.6 | 46% (21/5) | – | 47/6%/0% | 360/8%/1% |
| Heiresses (trading) | MIXED | 853 | 8% | 4% | 1% | 63% | 0% | 0% | 10.0 | 44% (22/9) | – | 276/6%/1% | 577/3%/1% |
| Night Owls (purple) | DEAD | 641 | 10% | 2% | 1% | 31% | 0% | 0% | 9.8 | 27% (9/8) | – | 201/1%/1% | 440/2%/1% |
| Harmonist (yellow) | DEAD | 951 | 9% | 2% | 1% | 42% | 0% | 0% | 11.0 | 35% (11/18) | – | 310/3%/2% | 641/2%/1% |
| Gossip (purple) | DEAD | 1113 | 9% | 2% | 1% | 65% | 0% | 0% | 8.6 | 31% (21/8) | – | 386/3%/3% | 727/2%/0% |
| Customs (yellow) | DEAD | 1500 | 10% | 2% | 1% | 39% | 0% | 0% | 11.8 | 21% (21/10) | 253/1%/0% | 420/6%/3% | 827/1%/0% |
| Patroness (market) | DEAD | 986 | 4% | 2% | 1% | 33% | 0% | 0% | 10.9 | 36% (13/1) | – | 251/1%/0% | 735/2%/1% |
| Hoarder (trading) | DEAD | 925 | 4% | 1% | 1% | 43% | 0% | 0% | 13.3 | 26% (7/3) | – | 273/1%/1% | 652/1%/0% |
| Tastemaker (yellow) | DEAD | 1221 | 6% | 1% | 1% | 47% | 0% | 0% | 11.7 | 20% (11/3) | – | 316/2%/2% | 905/1%/0% |
| Wallflower (echo) | DEAD | 748 | 4% | 0% | 1% | 0% | 0% | 0% | 12.5 | 10% (2/1) | – | 133/0%/0% | 615/0%/1% |
| Extra Hand (benders) | DEAD | 2804 | 4% | 1% | 0% | 56% | 0% | 3% | 14.0 | 30% (31/3) | – | 944/1%/0% | 1860/1%/0% |
| Shoplifter (thieves) | DEAD | 1108 | 6% | 1% | 0% | 75% | 0% | 0% | 13.3 | 18% (10/3) | – | 387/2%/0% | 721/1%/0% |
| Old Maid (benders) | DEAD | 4738 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1610/0%/0% | 3128/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | DEAD | 4146 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 186/0%/0% | 1139/0%/0% | 2821/0%/0% |
| Polisher (silver) | DEAD | 302 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 44/0%/0% | 193/0%/0% | 65/0%/0% |
| Party Crasher (benders) | DEAD | 84 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 52/0%/0% | 32/0%/0% | – |
| Extra Hand (benders) | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 39/0%/0% | 9/0%/0% |
| Anarchist (benders) | DEAD | 55 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 55/0%/0% |
| Raiders (trading) | DEAD | 223 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 61/0%/0% | 162/0%/0% |
| Tribute Band (echo) | DEAD | 142 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 121/0%/0% |
| Debutantes (silver) | DEAD | 126 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 49/0%/0% | 77/0%/0% |
| Hot Streak (purple) | DEAD | 187 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 51/0%/0% | 136/0%/0% |
| Hoarder (trading) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 7/0%/0% |
| Doppelganger (echo) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| Debt Collectors (silver) | THIN DATA | 12 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 8/0%/0% |
| Heiresses (trading) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 1/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Cutpurse (3) | REAL CHOICE | 36 | 89% | 36% | 36% | 23% | 0% | 100% | 5.2 | 41% (3/10) | – | 18/39%/33% | 18/33%/39% |
| choose member:Accomplice (3) | REAL CHOICE | 43 | 91% | 35% | 28% | 27% | 0% | 100% | 8.5 | 44% (5/12) | – | 20/40%/35% | 23/30%/22% |
| choose member:Timekeepers (4) | REAL CHOICE | 19 | 79% | 37% | 26% | 43% | 0% | 100% | 13.0 | 40% (4/2) | – | 6/33%/17% | 13/38%/31% |
| choose member:Triplets (3) | REAL CHOICE | 19 | 89% | 32% | 26% | 17% | 0% | 100% | 7.4 | 35% (5/1) | – | 7/43%/0% | 12/25%/42% |
| choose member:Agents (3) | REAL CHOICE | 35 | 91% | 29% | 26% | 20% | 0% | 100% | 8.0 | 44% (6/8) | – | 17/24%/24% | 18/33%/28% |
| choose member:Recruit Bonus (3) | REAL CHOICE | 28 | 89% | 43% | 25% | 42% | 0% | 100% | 5.8 | 40% (5/5) | – | 15/40%/13% | 13/46%/38% |
| choose member:Agents | REAL CHOICE | 26 | 23% | 8% | 23% | 0% | 0% | 100% | 0.7 | 33% (1/1) | – | 16/6%/31% | 10/10%/10% |
| choose member:Scouts (3) | REAL CHOICE + MISJUDGED | 63 | 84% | 41% | 22% | 35% | 4% | 100% | 5.8 | 50% (17/9) | – | 29/55%/28% | 34/29%/18% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 23 | 83% | 43% | 22% | 20% | 0% | 100% | 11.8 | 32% (3/3) | – | 9/44%/22% | 14/43%/21% |
| choose member:Deprogrammers (3) | REAL CHOICE | 50 | 78% | 30% | 20% | 40% | 0% | 100% | 10.3 | 46% (8/10) | – | 21/33%/14% | 29/28%/24% |
| choose member:Early Birds (3) | REAL CHOICE + MISJUDGED | 21 | 67% | 29% | 19% | 17% | 0% | 100% | 6.5 | 50% (3/4) | – | 8/38%/25% | 13/23%/15% |
| choose member:Chronicler | REAL CHOICE | 18 | 56% | 11% | 17% | 0% | 0% | 100% | 7.8 | 10% (0/1) | – | 6/17%/17% | 12/8%/17% |
| choose member:Alchemists | REAL CHOICE + MISJUDGED | 16 | 50% | 25% | 13% | 25% | 0% | 100% | 10.0 | 50% (3/1) | – | 4/25%/25% | 12/25%/8% |
| choose member:Connoisseurs (4) | REAL CHOICE | 17 | 82% | 6% | 12% | 100% | 0% | 100% | 6.1 | 21% (1/2) | – | 2/50%/0% | 15/0%/13% |
| trade:P1: Loyalists ↔ P4: Party Crasher | REAL CHOICE | 17 | 12% | 6% | 12% | 0% | 0% | 0% | 1.0 | 100% (1/1) | – | 1/100%/100% | 16/0%/6% |
| trade:P2: Recruit Bonus ↔ P4: Deprogrammers | REAL CHOICE | 18 | 11% | 0% | 11% | – | – | – | 0.8 | 50% (0/1) | – | 4/0%/25% | 14/0%/7% |
| choose member:Gardener (3) | REAL CHOICE | 19 | 89% | 32% | 11% | 33% | 0% | 100% | 10.7 | 47% (4/4) | – | 9/22%/0% | 10/40%/20% |
| choose member:Martyrs (4) | AUTO-PICK | 18 | 94% | 22% | 17% | 50% | 0% | 100% | 7.8 | 29% (3/2) | – | 5/20%/20% | 13/23%/15% |
| choose member:Alchemists (5) | AUTO-PICK | 32 | 75% | 22% | 16% | 57% | 0% | 100% | 8.4 | 25% (4/2) | – | 6/0%/17% | 26/27%/15% |
| choose member:Chronicler (5) | AUTO-PICK | 20 | 70% | 20% | 15% | 50% | 0% | 100% | 8.1 | 21% (3/0) | – | 6/17%/17% | 14/21%/14% |
| choose member:Line Cutters (2) | AUTO-PICK | 86 | 97% | 44% | 13% | 55% | 3% | 100% | 9.7 | 48% (15/24) | – | 45/56%/7% | 41/32%/20% |
| choose member:P3's Caravan (9) | AUTO-PICK | 16 | 69% | 56% | 13% | 89% | 89% | 33% | 1.6 | 67% (1/1) | – | 3/100%/0% | 13/46%/15% |
| choose member:Dabblers (3) | AUTO-PICK | 63 | 83% | 37% | 11% | 61% | 0% | 100% | 8.7 | 37% (11/8) | – | 21/38%/10% | 42/36%/12% |
| choose member:Stunt Double | AUTO-PICK + MISJUDGED | 19 | 53% | 21% | 11% | 100% | 50% | 100% | 7.5 | 63% (1/4) | – | 6/33%/33% | 13/15%/0% |
| choose member:Busker (4) | AUTO-PICK + MISJUDGED | 31 | 74% | 29% | 10% | 56% | 11% | 100% | 7.4 | 50% (5/6) | – | 21/33%/14% | 10/20%/0% |
| choose member:P1's HR (10) | AUTO-PICK + MISJUDGED | 32 | 81% | 66% | 9% | 76% | 57% | 29% | 12.2 | 57% (4/4) | – | 2/100%/0% | 30/63%/10% |
| choose member:P1's Fan Club (6) | AUTO-PICK | 25 | 72% | 32% | 8% | 88% | 50% | 63% | 13.4 | 21% (0/3) | – | 1/100%/0% | 24/29%/8% |
| choose member:P1's Patriarch (6) | AUTO-PICK | 25 | 60% | 28% | 8% | 71% | 29% | 29% | 7.5 | 38% (1/4) | – | – | 25/28%/8% |
| choose member:P4's HR (10) | AUTO-PICK | 28 | 86% | 64% | 7% | 78% | 61% | 28% | 16.3 | 23% (0/3) | – | 2/100%/0% | 26/62%/8% |
| choose member:Kingpin (4) | AUTO-PICK | 59 | 68% | 14% | 7% | 50% | 0% | 100% | 12.5 | 38% (5/10) | – | 23/22%/9% | 36/8%/6% |
| choose member:Shopkeeper (4) | AUTO-PICK | 30 | 80% | 33% | 7% | 60% | 0% | 100% | 10.8 | 38% (5/4) | – | 15/27%/13% | 15/40%/0% |
| choose member:P3's Panel (7) | AUTO-PICK | 15 | 20% | 13% | 7% | 50% | 50% | 100% | 0.4 | 50% (0/1) | – | – | 15/13%/7% |
| choose member:Doppelganger (5) | AUTO-PICK | 15 | 67% | 13% | 7% | 50% | 0% | 100% | 12.3 | 20% (2/0) | – | 6/17%/0% | 9/11%/11% |
| pass:Pass | AUTO-PICK | 17169 | 35% | 18% | 6% | 58% | 12% | 11% | 8.8 | 38% (1194/943) | 4056/38%/10% | 5478/19%/8% | 7635/6%/3% |
| trade:P1: Deprogrammers ↔ P2: Scouts | AUTO-PICK | 16 | 13% | 13% | 6% | 50% | 0% | 0% | – | 100% (2/0) | – | 4/25%/0% | 12/8%/8% |
| trade:P3: Gardener ↔ P4: Deprogrammers | AUTO-PICK | 17 | 29% | 12% | 6% | 50% | 0% | 0% | 6.5 | 60% (0/3) | – | 12/8%/8% | 5/20%/0% |
| choose member:P3's Fan Club (6) | AUTO-PICK | 18 | 56% | 44% | 6% | 88% | 50% | 25% | 15.5 | 0% (0/0) | – | – | 18/44%/6% |
| trade:P1: Volunteer ↔ P2: Deprogrammers | AUTO-PICK | 18 | 22% | 11% | 6% | 50% | 0% | 0% | 7.4 | 0% (0/0) | – | 8/13%/13% | 10/10%/0% |
| trade:P3: Panel ↔ Shop: Old Maid | AUTO-PICK | 18 | 17% | 11% | 6% | 100% | 0% | 0% | 0.5 | 100% (2/1) | – | 7/0%/0% | 11/18%/9% |
| choose member:P3's HR (10) | AUTO-PICK | 19 | 79% | 63% | 5% | 92% | 75% | 67% | 8.3 | 33% (1/1) | – | 1/100%/0% | 18/61%/6% |
| choose member:Deprogrammers | AUTO-PICK + MISJUDGED | 19 | 58% | 21% | 5% | 50% | 0% | 100% | 11.3 | 64% (1/6) | – | 12/25%/0% | 7/14%/14% |
| choose member:P2's HR (10) | AUTO-PICK | 20 | 65% | 60% | 5% | 83% | 83% | 33% | 2.5 | 33% (0/1) | – | 1/0%/0% | 19/63%/5% |
| choose member:P2's Con Men (7) | AUTO-PICK | 40 | 23% | 10% | 5% | 75% | 0% | 75% | 22.0 | 33% (2/1) | – | 2/0%/0% | 38/11%/5% |
| choose member:HR | AUTO-PICK | 21 | 86% | 81% | 5% | 94% | 47% | 88% | 16.5 | 40% (3/1) | – | 2/50%/0% | 19/84%/5% |
| choose member:P2's Patriarch (6) | AUTO-PICK | 21 | 29% | 19% | 5% | 75% | 25% | 50% | 10.4 | 60% (2/1) | – | 1/0%/0% | 20/20%/5% |
| choose member:P2's Fan Club (6) | AUTO-PICK | 21 | 52% | 19% | 5% | 100% | 50% | 25% | 17.2 | 44% (0/4) | – | – | 21/19%/5% |
| choose member:Trendsetters (4) | AUTO-PICK | 23 | 61% | 22% | 4% | 80% | 0% | 100% | 8.5 | 36% (1/4) | – | 6/33%/17% | 17/18%/0% |
| choose member:P4's Fan Club (6) | AUTO-PICK | 29 | 41% | 28% | 3% | 63% | 63% | 25% | 9.1 | 43% (2/1) | – | 1/100%/0% | 28/25%/4% |
| choose member:Busker | AUTO-PICK | 30 | 40% | 27% | 3% | 63% | 50% | 100% | 14.9 | 38% (2/1) | – | 14/29%/7% | 16/25%/0% |
| choose member:P4's Grifter (8) | AUTO-PICK + MISJUDGED | 32 | 31% | 19% | 3% | 83% | 0% | 67% | 7.9 | 60% (4/2) | – | 3/0%/33% | 29/21%/0% |
| choose member:P3's Con Men (7) | AUTO-PICK + MISJUDGED | 37 | 27% | 16% | 3% | 67% | 0% | 83% | 5.7 | 60% (3/3) | – | 4/50%/0% | 33/12%/3% |
| followers:top | AUTO-PICK | 12619 | 25% | 16% | 2% | 77% | 52% | 0% | 8.7 | 41% (324/526) | 420/0%/0% | 4776/0%/0% | 7423/28%/4% |
| choose member:P4's Con Men (7) | AUTO-PICK + MISJUDGED | 62 | 27% | 15% | 2% | 67% | 0% | 56% | 16.1 | 59% (8/2) | – | 6/67%/0% | 56/9%/2% |
| choose member:P3's Mob (12) | AUTO-PICK | 19 | 95% | 95% | 0% | 100% | 89% | 17% | – | 0% (0/0) | – | 1/100%/0% | 18/94%/0% |
| choose member:P2's Mob (12) | AUTO-PICK | 17 | 100% | 94% | 0% | 100% | 94% | 19% | 10.7 | 50% (0/1) | – | – | 17/94%/0% |
| choose member:P1's Mob (12) | AUTO-PICK | 16 | 100% | 94% | 0% | 100% | 100% | 7% | 5.5 | 100% (0/1) | – | 3/100%/0% | 13/92%/0% |
| choose member:P4's Mob (12) | AUTO-PICK | 18 | 94% | 89% | 0% | 94% | 94% | 6% | 5.0 | 0% (0/0) | – | – | 18/89%/0% |
| choose member:Roadie | AUTO-PICK | 39 | 72% | 51% | 0% | 85% | 70% | 100% | 23.3 | 36% (1/4) | – | 19/79%/0% | 20/25%/0% |
| choose member:P3's Snobs (6) | AUTO-PICK | 16 | 63% | 38% | 0% | 67% | 17% | 17% | 8.5 | 44% (3/1) | – | – | 16/38%/0% |
| choose member:Window Shopper (5) | AUTO-PICK | 15 | 80% | 33% | 0% | 60% | 0% | 100% | 10.5 | 33% (4/0) | – | 3/67%/0% | 12/25%/0% |
| choose member:P3's Patriarch (6) | AUTO-PICK | 19 | 47% | 32% | 0% | 83% | 33% | 50% | 4.3 | 43% (1/2) | – | 1/100%/0% | 18/28%/0% |
| choose member:Fan Club | AUTO-PICK | 16 | 69% | 31% | 0% | 100% | 40% | 100% | 16.3 | 0% (0/0) | – | 4/100%/0% | 12/8%/0% |
| choose member:P3's Dyer (7) | AUTO-PICK | 18 | 39% | 22% | 0% | 100% | 100% | 75% | 17.8 | 33% (0/1) | – | 1/0%/0% | 17/24%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | AUTO-PICK | 24 | 29% | 21% | 0% | 80% | 0% | 20% | 9.5 | 29% (2/0) | – | 11/27%/0% | 13/15%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 29 | 31% | 21% | 0% | 67% | 50% | 83% | 17.4 | 50% (3/0) | – | 3/0%/0% | 26/23%/0% |
| choose member:Stunt Double (5) | AUTO-PICK + MISJUDGED | 16 | 50% | 19% | 0% | 67% | 0% | 100% | 12.2 | 63% (2/3) | – | 4/50%/0% | 12/8%/0% |
| choose member:P1's Panel (7) | AUTO-PICK | 22 | 32% | 18% | 0% | 75% | 0% | 0% | 30.1 | 43% (2/1) | – | – | 22/18%/0% |
| choose member:P3's Shopkeeper (4) | AUTO-PICK | 20 | 35% | 15% | 0% | 100% | 67% | 100% | 7.0 | 0% (0/0) | – | 3/0%/0% | 17/18%/0% |
| choose member:P3's Busker (4) | AUTO-PICK | 22 | 27% | 14% | 0% | 67% | 0% | 33% | 22.4 | 50% (3/0) | – | 1/100%/0% | 21/10%/0% |
| trade:P4: Drifters ↔ P3: Deprogrammers | AUTO-PICK | 15 | 13% | 13% | 0% | 50% | 0% | 0% | – | 50% (1/0) | – | 8/0%/0% | 7/29%/0% |
| trade:P1: Scouts ↔ Shop: Loyalists | AUTO-PICK | 15 | 13% | 13% | 0% | 100% | 0% | 0% | – | 100% (2/0) | – | 6/33%/0% | 9/0%/0% |
| trade:P3: Con Men ↔ Shop: Dyer | AUTO-PICK | 15 | 20% | 13% | 0% | 100% | 50% | 50% | 10.2 | 50% (0/1) | – | 1/100%/0% | 14/7%/0% |
| trade:P2: Gardener ↔ P4: Deprogrammers | AUTO-PICK | 16 | 19% | 13% | 0% | 50% | 0% | 0% | 4.2 | 67% (2/0) | – | 7/0%/0% | 9/22%/0% |
| choose member:Con Men | AUTO-PICK | 16 | 25% | 13% | 0% | 50% | 0% | 100% | 17.3 | 50% (2/0) | – | 3/67%/0% | 13/0%/0% |
| choose member:P4's Panel (7) | AUTO-PICK | 32 | 25% | 13% | 0% | 50% | 0% | 50% | 21.4 | 25% (2/0) | – | 4/25%/0% | 28/11%/0% |
| trade:P1: Volunteer ↔ P3: Deprogrammers | AUTO-PICK | 16 | 19% | 13% | 0% | 50% | 0% | 0% | 11.8 | 33% (0/1) | – | 4/25%/0% | 12/8%/0% |
| choose member:Panel | AUTO-PICK | 17 | 24% | 12% | 0% | 100% | 0% | 100% | 7.8 | 75% (2/1) | – | 4/25%/0% | 13/8%/0% |
| choose member:P3's Chronicler (5) | AUTO-PICK | 18 | 11% | 11% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 1/0%/0% | 17/12%/0% |
| choose member:P4's Window Dressers (4) | AUTO-PICK | 18 | 17% | 11% | 0% | 100% | 50% | 50% | 2.6 | 100% (1/1) | – | 1/0%/0% | 17/12%/0% |
| choose member:P1's Trendsetters (4) | AUTO-PICK | 19 | 16% | 11% | 0% | 50% | 0% | 50% | 14.7 | 67% (1/1) | – | 1/0%/0% | 18/11%/0% |
| trade:P3: Busker ↔ P4: Deprogrammers | AUTO-PICK | 19 | 16% | 11% | 0% | 50% | 0% | 0% | 3.7 | 67% (1/1) | – | 8/25%/0% | 11/0%/0% |
| trade:P1: Triplets ↔ P3: Deprogrammers | AUTO-PICK | 20 | 25% | 10% | 0% | 100% | 0% | 0% | 7.9 | 40% (0/2) | – | 6/33%/0% | 14/0%/0% |
| choose member:Line Cutters | MIXED | 31 | 45% | 13% | 10% | 25% | 0% | 100% | 9.7 | 36% (1/4) | – | 12/25%/17% | 19/5%/5% |
| choose member:Dabblers | MIXED | 31 | 42% | 10% | 10% | 33% | 0% | 100% | 5.0 | 31% (2/2) | – | 15/13%/20% | 16/6%/0% |
| choose member:P3's Trendsetters (4) | MIXED | 23 | 13% | 4% | 9% | 0% | 0% | 0% | 8.4 | 0% (0/0) | – | 1/100%/100% | 22/0%/5% |
| trade:P1: Scouts ↔ P2: Deprogrammers | MIXED | 24 | 21% | 4% | 8% | 0% | 0% | 0% | 4.2 | 20% (1/0) | – | 11/9%/0% | 13/0%/15% |
| choose member:P4's Timekeepers (4) | MIXED | 25 | 24% | 0% | 8% | – | – | – | 9.3 | 50% (0/3) | – | 1/0%/0% | 24/0%/8% |
| choose member:P2's Trendsetters (4) | MIXED | 15 | 27% | 27% | 7% | 25% | 0% | 25% | – | 75% (3/0) | – | 2/0%/0% | 13/31%/8% |
| trade:P4: Scouts ↔ P1: Dabblers | MIXED | 15 | 13% | 13% | 7% | 0% | 0% | 0% | – | 100% (2/0) | – | 4/50%/25% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Line Cutters | MIXED | 15 | 13% | 0% | 7% | – | – | – | 6.0 | 0% (0/0) | – | 4/0%/0% | 11/0%/9% |
| trade:P1: Triplets ↔ P4: Deprogrammers | MIXED | 15 | 27% | 0% | 7% | – | – | – | 7.4 | 50% (0/2) | – | 5/0%/20% | 10/0%/0% |
| followers:small | MIXED | 17169 | 33% | 12% | 7% | 43% | 0% | 7% | 10.0 | 36% (1354/722) | 4056/12%/8% | 5478/15%/8% | 7635/9%/5% |
| choose member:P1's Alchemists (5) | MIXED | 47 | 15% | 6% | 6% | 33% | 0% | 33% | 18.1 | 43% (2/1) | – | 2/0%/0% | 45/7%/7% |
| trade:P1: Deprogrammers ↔ P4: Recruit Bonus | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 100% | – | 0% (0/0) | – | 9/11%/11% | 7/0%/0% |
| trade:P3: Loyalists ↔ Shop: Old Maid | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 12/8%/8% |
| trade:P2: Recruit Bonus ↔ P1: Scouts | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 13/8%/8% |
| trade:P3: Scouts ↔ P2: Line Cutters | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 11.0 | 50% (1/0) | – | 4/0%/0% | 12/8%/8% |
| choose member:Recruit Bonus | MIXED | 16 | 25% | 6% | 6% | 100% | 0% | 100% | 20.6 | 0% (0/0) | – | 6/17%/0% | 10/0%/10% |
| trade:P3: Recruit Bonus ↔ P4: Scouts | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 2/50%/50% | 14/0%/0% |
| trade:P3: Busker ↔ P2: Deprogrammers | MIXED | 16 | 19% | 6% | 6% | 100% | 0% | 0% | 1.6 | 67% (1/1) | – | 6/0%/17% | 10/10%/0% |
| trade:P2: Drifters ↔ P1: Scouts | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 100% | – | 100% (1/0) | – | 4/25%/25% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P3: Busker | MIXED | 16 | 13% | 0% | 6% | – | – | – | 7.4 | 0% (0/0) | – | 6/0%/17% | 10/0%/0% |
| trade:P1: Scouts ↔ P3: Deprogrammers | MIXED | 17 | 12% | 6% | 6% | 0% | 0% | 0% | 8.9 | 50% (1/0) | – | 8/13%/13% | 9/0%/0% |
| choose member:P4's Clockmakers (5) | MIXED | 17 | 24% | 6% | 6% | 100% | 0% | 0% | 4.1 | 50% (1/1) | – | 1/0%/100% | 16/6%/0% |
| trade:P3: Accomplice ↔ P2: Line Cutters | MIXED | 17 | 12% | 6% | 6% | 0% | 0% | 0% | 12.3 | 50% (1/0) | – | 10/0%/0% | 7/14%/14% |
| trade:P1: Busker ↔ P4: Line Cutters | MIXED | 17 | 12% | 6% | 6% | 0% | 0% | 0% | 48.1 | 0% (0/0) | – | 7/0%/0% | 10/10%/10% |
| trade:P3: Roadie ↔ P2: Deprogrammers | MIXED | 18 | 22% | 6% | 6% | 0% | 0% | 0% | 6.1 | 75% (1/2) | – | 12/8%/8% | 6/0%/0% |
| trade:P4: Busker ↔ P2: Accomplice | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 13/8%/8% | 6/0%/0% |
| trade:P1: Busker ↔ Shop: Old Maid | MIXED | 21 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 14/7%/7% |
| trade:P3: Deprogrammers ↔ P4: Scouts | MIXED | 22 | 9% | 9% | 5% | 0% | 0% | 0% | – | 100% (2/0) | – | 8/13%/13% | 14/7%/0% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | MIXED | 23 | 13% | 4% | 4% | 0% | 0% | 0% | 22.3 | 33% (1/0) | – | 6/17%/17% | 17/0%/0% |
| choose member:P4's Alchemists (5) | MIXED | 24 | 8% | 4% | 4% | 0% | 0% | 0% | 41.3 | 50% (1/0) | – | 1/0%/0% | 23/4%/4% |
| choose member:P2's Extortionist (7) | MIXED | 26 | 15% | 0% | 4% | – | – | – | 9.2 | 0% (0/0) | – | 1/0%/0% | 25/0%/4% |
| choose member:P2's Chronicler (5) | MIXED | 27 | 22% | 7% | 4% | 50% | 50% | 0% | 3.8 | 20% (0/1) | – | 1/0%/0% | 26/8%/4% |
| choose member:P1's Busker (4) | MIXED + MISJUDGED | 54 | 22% | 6% | 4% | 33% | 0% | 33% | 8.1 | 58% (2/5) | – | 3/33%/0% | 51/4%/4% |
| trade:P2: Line Cutters ↔ P3: Volunteer | MIXED | 28 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/0%/0% | 17/6%/6% |
| trade:P2: Deprogrammers ↔ P1: Volunteer | MIXED | 28 | 7% | 4% | 4% | 100% | 0% | 0% | 0.8 | 0% (0/0) | – | 17/0%/6% | 11/9%/0% |
| choose member:P2's Roadie (3) | MIXED | 31 | 23% | 10% | 3% | 33% | 33% | 33% | 12.5 | 17% (1/0) | – | 1/0%/0% | 30/10%/3% |
| trade:P1: Deprogrammers ↔ P3: Volunteer | MIXED | 31 | 13% | 6% | 3% | 100% | 0% | 0% | 2.7 | 50% (0/2) | – | 15/7%/0% | 16/6%/6% |
| trade:P1: Scouts ↔ P2: Volunteer | MIXED | 33 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/0%/0% | 22/5%/5% |
| choose member:P4's Chronicler (5) | MIXED | 35 | 11% | 0% | 3% | – | – | – | 5.8 | 25% (0/1) | – | 1/0%/0% | 34/0%/3% |
| choose member:P3's Deprogrammers (3) | MIXED | 37 | 14% | 8% | 3% | 100% | 0% | 33% | 6.1 | 40% (1/1) | – | 2/0%/0% | 35/9%/3% |
| followers:mid | MIXED | 15851 | 15% | 6% | 3% | 38% | 1% | 1% | 8.9 | 34% (408/388) | 2770/0%/0% | 5458/1%/1% | 7623/11%/5% |
| choose member:P1's Roadie (3) | MIXED | 39 | 15% | 5% | 3% | 50% | 50% | 0% | 15.3 | 80% (1/3) | – | 3/0%/0% | 36/6%/3% |
| choose member:P2's Panel (7) | MIXED | 34 | 38% | 15% | 0% | 40% | 0% | 20% | 16.0 | 38% (2/3) | – | 2/50%/0% | 32/13%/0% |
| trade:P3: Scouts ↔ P4: Deprogrammers | MIXED | 17 | 29% | 12% | 0% | 0% | 0% | 0% | 4.2 | 40% (2/0) | – | 7/0%/0% | 10/20%/0% |
| trade:P1: Loyalists ↔ P4: Deprogrammers | MIXED | 19 | 21% | 11% | 0% | 0% | 0% | 0% | 7.0 | 75% (1/2) | – | 3/0%/0% | 16/13%/0% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | MIXED | 21 | 10% | 10% | 0% | 50% | 0% | 0% | – | 50% (1/0) | – | 10/0%/0% | 11/18%/0% |
| choose member:P4's Extortionist (7) | MIXED | 29 | 10% | 7% | 0% | 50% | 0% | 0% | 15.9 | 33% (1/0) | – | – | 29/7%/0% |
| choose member:P4's Deprogrammers (3) | MIXED | 44 | 16% | 7% | 0% | 100% | 0% | 0% | 18.1 | 29% (0/2) | – | 6/0%/0% | 38/8%/0% |
| trade:P4: Cutpurse ↔ P2: Accomplice | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 7/14%/0% | 8/0%/0% |
| choose member:P4's Ringleader (6) | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 18.0 | 100% (1/1) | – | 1/0%/0% | 14/7%/0% |
| trade:P3: Dabblers ↔ P4: Volunteer | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 12/8%/0% |
| trade:P2: Gardener ↔ P1: Deprogrammers | MIXED | 15 | 20% | 7% | 0% | 100% | 0% | 0% | 15.1 | 67% (0/2) | – | 10/0%/0% | 5/20%/0% |
| trade:P1: Scouts ↔ P4: Party Crasher | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ P4: Dabblers | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 6.2 | 50% (1/0) | – | 8/13%/0% | 7/0%/0% |
| trade:P2: Critic ↔ P3: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P2: Muse ↔ P3: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 5/0%/0% | 10/10%/0% |
| trade:P1: Scouts ↔ P4: Roadie | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ P1: Deprogrammers | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 13.4 | 50% (0/1) | – | 3/0%/0% | 12/8%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Triplets | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 8/0%/0% |
| trade:P1: Loyalists ↔ P3: Scouts | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 1/0%/0% | 15/7%/0% |
| choose member:P2's Recluse (4) | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 7.5 | 50% (1/0) | – | – | 16/6%/0% |
| trade:P1: Scouts ↔ P3: Volunteer | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 9/0%/0% |
| trade:P1: Bouncers ↔ Shop: Shift Crew | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/0%/0% | 6/17%/0% |
| trade:P3: Con Men ↔ Shop: Harmonist | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 12/8%/0% |
| trade:P3: Agents ↔ P1: Roadie | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 12/8%/0% | 4/0%/0% |
| trade:P4: Loyalists ↔ P3: Recruit Bonus | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 14/7%/0% |
| choose member:P2's Deprogrammers (3) | MIXED | 33 | 12% | 6% | 0% | 100% | 0% | 0% | 7.8 | 50% (2/0) | – | 2/0%/0% | 31/6%/0% |
| trade:P3: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 17 | 18% | 6% | 0% | 100% | 0% | 0% | 10.9 | 33% (1/0) | – | 6/17%/0% | 11/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Volunteer | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 7.9 | 100% (1/1) | – | 3/33%/0% | 14/0%/0% |
| choose member:P4's Double Agent (8) | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 17/6%/0% |
| trade:P3: Con Men ↔ P4: Stunt Double | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 4.2 | 50% (1/0) | – | 7/14%/0% | 10/0%/0% |
| trade:P2: Drifters ↔ P4: Volunteer | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 14/7%/0% |
| trade:P1: Party Crasher ↔ P4: Line Cutters | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 16.6 | 50% (1/0) | – | 4/0%/0% | 14/7%/0% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 10.1 | 50% (0/1) | – | 6/0%/0% | 12/8%/0% |
| trade:P3: Busker ↔ P2: Roadie | MIXED | 36 | 6% | 6% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 19/11%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ P3: Agents | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 12/8%/0% | 6/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Volunteer | MIXED | 18 | 11% | 6% | 0% | 0% | 0% | 0% | 17.2 | 0% (0/0) | – | 11/9%/0% | 7/0%/0% |
| trade:P3: Roadie ↔ P1: Line Cutters | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 24.0 | 50% (1/0) | – | 8/13%/0% | 10/0%/0% |
| trade:P3: Line Cutters ↔ P4: Volunteer | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/0%/0% | 13/8%/0% |
| trade:P1: Loyalists ↔ P2: Deprogrammers | MIXED | 19 | 11% | 5% | 0% | 100% | 100% | 0% | 49.5 | 0% (0/0) | – | 4/0%/0% | 15/7%/0% |
| trade:P1: Loyalists ↔ P4: Busker | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 17/6%/0% |
| trade:P1: Deprogrammers ↔ P4: Early Birds | MIXED | 19 | 16% | 5% | 0% | 0% | 0% | 0% | 9.4 | 33% (1/0) | – | 10/0%/0% | 9/11%/0% |
| trade:P2: Con Men ↔ P1: Loyalists | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 2.0 | 0% (0/0) | – | 3/33%/0% | 16/0%/0% |
| choose member:P3's Desperado (5) | MIXED | 20 | 10% | 5% | 0% | 0% | 0% | 0% | 10.7 | 50% (1/0) | – | – | 20/5%/0% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 20.3 | 0% (0/0) | – | 6/17%/0% | 14/0%/0% |
| trade:P1: Con Men ↔ Shop: Old Maid | MIXED | 20 | 5% | 5% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 4/25%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ P4: Fan Club | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 32.7 | 100% (1/1) | – | 2/0%/0% | 18/6%/0% |
| trade:P3: Roadie ↔ P1: Deprogrammers | MIXED | 20 | 20% | 5% | 0% | 100% | 0% | 0% | 11.9 | 50% (0/2) | – | 14/7%/0% | 6/0%/0% |
| choose member:P1's Double Agent (8) | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 17.0 | 50% (1/0) | – | – | 21/5%/0% |
| trade:P2: Recruit Bonus ↔ P1: Deprogrammers | MIXED | 21 | 19% | 5% | 0% | 0% | 0% | 0% | 6.4 | 50% (0/2) | – | 9/0%/0% | 12/8%/0% |
| trade:P3: Busker ↔ P4: Dabblers | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 7/0%/0% | 14/7%/0% |
| trade:P2: Line Cutters ↔ P1: Volunteer | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 12.7 | 0% (0/0) | – | 10/10%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Dabblers | MIXED | 22 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ Shop: Triplets | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 14/7%/0% | 8/0%/0% |
| choose member:P3's Grifter (8) | MIXED | 23 | 17% | 4% | 0% | 0% | 0% | 0% | 14.5 | 25% (1/0) | – | – | 23/4%/0% |
| trade:P2: Anarchist ↔ Shop: Old Maid | MIXED | 23 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 15/7%/0% |
| trade:P3: Deprogrammers ↔ P1: Volunteer | MIXED | 24 | 4% | 4% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 13/8%/0% | 11/0%/0% |
| choose member:P2's Busker (4) | MIXED | 24 | 17% | 4% | 0% | 100% | 0% | 0% | 14.7 | 50% (1/1) | – | 1/0%/0% | 23/4%/0% |
| trade:P1: Deprogrammers ↔ Shop: Triplets | MIXED | 24 | 8% | 4% | 0% | 100% | 0% | 0% | 17.6 | 50% (1/0) | – | 18/6%/0% | 6/0%/0% |
| trade:P2: Scouts ↔ P3: Deprogrammers | MIXED | 26 | 12% | 4% | 0% | 100% | 0% | 0% | 7.5 | 67% (1/1) | – | 14/7%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P4: Deprogrammers | MIXED | 26 | 8% | 4% | 0% | 100% | 0% | 0% | 2.8 | 100% (1/1) | – | 9/0%/0% | 17/6%/0% |
| trade:P3: Deprogrammers ↔ P2: Scouts | MIXED | 27 | 7% | 4% | 0% | 100% | 0% | 0% | 34.7 | 100% (1/1) | – | 12/8%/0% | 15/0%/0% |
| choose member:P2's Stunt Double (5) | MIXED | 27 | 15% | 4% | 0% | 100% | 0% | 0% | 8.8 | 50% (1/1) | – | 3/33%/0% | 24/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Dabblers | MIXED | 28 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 21/5%/0% |
| choose member:P4's Roadie (3) | MIXED | 28 | 7% | 4% | 0% | 100% | 0% | 0% | 6.4 | 50% (1/0) | – | 4/0%/0% | 24/4%/0% |
| trade:P2: Roadie ↔ P4: Deprogrammers | MIXED | 28 | 14% | 4% | 0% | 100% | 0% | 0% | 8.6 | 75% (1/2) | – | 9/0%/0% | 19/5%/0% |
| trade:P3: Scouts ↔ P4: Dabblers | MIXED | 29 | 7% | 3% | 0% | 100% | 0% | 0% | 29.8 | 50% (1/0) | – | 17/6%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | MIXED | 29 | 7% | 3% | 0% | 0% | 0% | 0% | 5.7 | 0% (0/0) | – | 12/0%/0% | 17/6%/0% |
| trade:P3: Deprogrammers ↔ P2: Line Cutters | MIXED | 31 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 13/8%/0% | 18/0%/0% |
| choose member:P2's Loyalists (5) | MIXED | 32 | 13% | 3% | 0% | 100% | 0% | 0% | 21.2 | 25% (1/0) | – | 2/0%/0% | 30/3%/0% |
| trade:P3: Deprogrammers ↔ P4: Line Cutters | MIXED | 32 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 15/7%/0% | 17/0%/0% |
| choose member:P3's Extortionist (7) | MIXED | 33 | 15% | 3% | 0% | 0% | 0% | 0% | 9.3 | 20% (0/1) | – | – | 33/3%/0% |
| trade:P3: Con Men ↔ Shop: Old Maid | MIXED | 38 | 11% | 3% | 0% | 0% | 0% | 0% | 18.6 | 0% (0/0) | – | 7/14%/0% | 31/0%/0% |
| choose member:P2's Agents (3) | MIXED | 20 | 10% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 1/0%/0% | 19/0%/0% |
| choose member:P1's Stunt Double (5) | MIXED | 24 | 13% | 0% | 0% | – | – | – | 16.7 | 33% (0/1) | – | 1/0%/0% | 23/0%/0% |
| choose member:P1's Window Dressers (4) | MIXED | 21 | 19% | 0% | 0% | – | – | – | 15.8 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ P3: Deprogrammers | MIXED | 18 | 11% | 0% | 0% | – | – | – | 2.1 | 50% (0/1) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 20 | 10% | 0% | 0% | – | – | – | 33.3 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P4: Volunteer | MIXED | 19 | 11% | 0% | 0% | – | – | – | 17.0 | 50% (0/1) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P3: Deprogrammers | MIXED | 30 | 13% | 0% | 0% | – | – | – | 4.6 | 50% (0/2) | – | 15/0%/0% | 15/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Volunteer | MIXED | 18 | 11% | 0% | 0% | – | – | – | 3.7 | 50% (0/1) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Agents ↔ P2: Deprogrammers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Deprogrammers | MIXED | 25 | 12% | 0% | 0% | – | – | – | 6.2 | 0% (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Dabblers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 10.8 | 0% (0/0) | – | 13/0%/0% | 4/0%/0% |
| trade:P1: Line Cutters ↔ P2: Volunteer | MIXED | 24 | 13% | 0% | 0% | – | – | – | 7.8 | 33% (0/1) | – | 13/0%/0% | 11/0%/0% |
| choose member:P2's Shopkeeper (4) | MIXED | 25 | 16% | 0% | 0% | – | – | – | 18.4 | 0% (0/0) | – | – | 25/0%/0% |
| trade:P2: Fan Club ↔ P3: Busker | MIXED | 16 | 13% | 0% | 0% | – | – | – | 25.9 | 50% (0/1) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P1: Recruit Bonus | MIXED | 15 | 13% | 0% | 0% | – | – | – | 2.5 | 50% (0/1) | – | 9/0%/0% | 6/0%/0% |
| choose member:P2's Alchemists (5) | MIXED | 20 | 10% | 0% | 0% | – | – | – | 12.9 | 50% (0/1) | – | 1/0%/0% | 19/0%/0% |
| choose member:P1's Bouncers (4) | MIXED | 20 | 30% | 0% | 0% | – | – | – | 13.9 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| choose member:P3's Alchemists (5) | MIXED | 24 | 13% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 1/0%/0% | 23/0%/0% |
| trade:P1: Polisher ↔ P2: Dabblers | MIXED | 23 | 13% | 0% | 0% | – | – | – | 17.3 | 33% (0/1) | – | 8/0%/0% | 15/0%/0% |
| choose member:P1's Grifter (8) | MIXED | 42 | 14% | 0% | 0% | – | – | – | 16.3 | 17% (0/1) | – | 2/0%/0% | 40/0%/0% |
| trade:P3: Dabblers ↔ P2: Deprogrammers | MIXED | 18 | 28% | 0% | 0% | – | – | – | 17.0 | 20% (0/1) | – | 5/0%/0% | 13/0%/0% |
| choose member:P2's Gardener (3) | MIXED | 18 | 11% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Roadie ↔ P3: Volunteer | MIXED | 20 | 15% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 31 | 16% | 0% | 0% | – | – | – | 9.3 | 20% (0/1) | – | 10/0%/0% | 21/0%/0% |
| trade:P1: Scouts ↔ Shop: Alchemists | MIXED | 17 | 12% | 0% | 0% | – | – | – | 7.9 | 100% (0/2) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Gardener ↔ P4: Line Cutters | MIXED | 17 | 12% | 0% | 0% | – | – | – | 11.8 | 50% (0/1) | – | 7/0%/0% | 10/0%/0% |
| choose member:P1's Martyrs (4) | MIXED | 19 | 16% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | – | 19/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Alchemists | MIXED | 16 | 13% | 0% | 0% | – | – | – | 23.0 | 50% (0/1) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Accomplice | MIXED | 19 | 11% | 0% | 0% | – | – | – | 21.2 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ P3: Deprogrammers | MIXED | 16 | 19% | 0% | 0% | – | – | – | 16.9 | 0% (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Scouts ↔ Shop: Old Maid | MIXED | 19 | 11% | 0% | 0% | – | – | – | 18.1 | 50% (0/1) | – | 7/0%/0% | 12/0%/0% |
| choose member:P3's Critic (3) | MIXED | 19 | 11% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | – | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED | 19 | 16% | 0% | 0% | – | – | – | 15.8 | 33% (0/1) | – | 10/0%/0% | 9/0%/0% |
| choose member:Loyalists (5) | FILLER + MISJUDGED | 21 | 43% | 19% | 5% | 0% | 0% | 100% | 14.8 | 56% (3/2) | – | 4/25%/25% | 17/18%/0% |
| choose member:Scouts | FILLER | 21 | 29% | 10% | 5% | 50% | 0% | 100% | 16.6 | 33% (2/0) | – | 7/29%/0% | 14/0%/7% |
| choose member:P2's Kingpin (4) | FILLER | 42 | 14% | 2% | 5% | 100% | 0% | 100% | 9.7 | 17% (1/0) | – | 4/25%/0% | 38/0%/5% |
| trade:P1: Deprogrammers ↔ P3: Roadie | FILLER | 22 | 9% | 5% | 5% | 100% | 0% | 100% | 0.0 | 0% (0/0) | – | 15/7%/0% | 7/0%/14% |
| choose member:P4's Busker (4) | FILLER | 29 | 14% | 7% | 3% | 50% | 50% | 100% | 29.0 | 0% (0/0) | – | 5/0%/0% | 24/8%/4% |
| choose member:P4's Kingpin (4) | FILLER | 33 | 18% | 6% | 3% | 50% | 0% | 100% | 9.9 | 33% (0/2) | – | – | 33/6%/3% |
| choose member:P1's Dabblers (3) | FILLER | 36 | 14% | 6% | 3% | 50% | 0% | 50% | 2.5 | 20% (1/0) | – | 1/0%/0% | 35/6%/3% |
| choose member:P1's Con Men (7) | FILLER | 40 | 28% | 8% | 3% | 67% | 0% | 100% | 15.0 | 27% (1/2) | – | 1/100%/0% | 39/5%/3% |
| choose member:P2's Line Cutters (2) | FILLER | 66 | 6% | 3% | 2% | 0% | 0% | 50% | 4.6 | 25% (1/0) | – | 8/0%/0% | 58/3%/2% |
| choose member:P3's Dabblers (3) | FILLER + MISJUDGED | 76 | 11% | 4% | 1% | 67% | 0% | 67% | 15.7 | 50% (3/1) | – | 7/14%/0% | 69/3%/1% |
| choose member:P1's Extortionist (7) | FILLER | 31 | 13% | 10% | 0% | 100% | 0% | 67% | 9.5 | 50% (2/0) | – | 2/100%/0% | 29/3%/0% |
| choose member:P2's Grifter (8) | FILLER | 29 | 10% | 7% | 0% | 50% | 0% | 50% | 21.0 | 67% (1/1) | – | 2/50%/0% | 27/4%/0% |
| choose member:P1's Philanthropists (6) | FILLER | 15 | 7% | 7% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | – | 15/7%/0% |
| trade:P2: Dabblers ↔ P1: Deprogrammers | FILLER | 31 | 13% | 6% | 0% | 50% | 0% | 50% | 2.4 | 25% (1/0) | – | 18/11%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Deprogrammers | FILLER | 16 | 19% | 6% | 0% | 100% | 0% | 100% | 5.8 | 0% (0/0) | – | 6/0%/0% | 10/10%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | FILLER | 17 | 6% | 6% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 6/17%/0% | 11/0%/0% |
| choose member:P3's Doormen (5) | FILLER | 17 | 35% | 6% | 0% | 100% | 0% | 100% | 12.5 | 17% (0/1) | – | 2/0%/0% | 15/7%/0% |
| choose member:P4's Dabblers (3) | FILLER | 52 | 10% | 6% | 0% | 67% | 0% | 67% | 15.9 | 60% (2/1) | – | 6/17%/0% | 46/4%/0% |
| choose member:P1's Deprogrammers (3) | FILLER | 35 | 23% | 6% | 0% | 50% | 0% | 50% | 11.4 | 25% (1/1) | – | 5/0%/0% | 30/7%/0% |
| choose member:P3's Roadie (3) | FILLER | 38 | 8% | 5% | 0% | 100% | 50% | 100% | 22.2 | 50% (1/0) | – | 3/0%/0% | 35/6%/0% |
| trade:P4: Early Birds ↔ P1: Deprogrammers | FILLER | 20 | 15% | 5% | 0% | 100% | 0% | 100% | 32.5 | 33% (1/0) | – | 12/8%/0% | 8/0%/0% |
| choose member:P4's Loyalists (5) | FILLER | 23 | 13% | 4% | 0% | 0% | 0% | 100% | 22.3 | 33% (1/0) | – | 1/0%/0% | 22/5%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | FILLER | 26 | 4% | 4% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 9/11%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Loyalists | FILLER | 28 | 4% | 4% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 6/17%/0% | 22/0%/0% |
| trade:P4: Gardener ↔ P3: Deprogrammers | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 7/0%/0% | 9/0%/11% |
| trade:P1: Recruit Bonus ↔ P2: Roadie | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.9 | 100% (0/1) | – | 7/0%/14% | 9/0%/0% |
| trade:P1: Alchemists ↔ P3: Accomplice | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.3 | 0% (0/0) | – | 2/0%/50% | 14/0%/0% |
| trade:P4: Party Crasher ↔ P1: Recruit Bonus | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.8 | 0% (0/0) | – | 5/0%/20% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 6% | – | – | – | 1.5 | 0% (0/0) | – | 5/0%/0% | 12/0%/8% |
| trade:P3: Busker ↔ P2: Line Cutters | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.3 | 100% (0/1) | – | 10/0%/0% | 7/0%/14% |
| trade:P4: Party Crasher ↔ P2: Dabblers | DEAD | 22 | 5% | 0% | 5% | – | – | – | 1.0 | 0% (0/0) | – | 9/0%/0% | 13/0%/8% |
| trade:P1: Deprogrammers ↔ P4: Line Cutters | DEAD | 23 | 4% | 0% | 4% | – | – | – | 0.6 | 0% (0/0) | – | 15/0%/7% | 8/0%/0% |
| trade:P2: Dabblers ↔ P3: Volunteer | DEAD | 25 | 8% | 0% | 4% | – | – | – | 12.0 | 0% (0/0) | – | 11/0%/9% | 14/0%/0% |
| choose member:P3's Line Cutters (2) | DEAD | 42 | 7% | 2% | 2% | 0% | 0% | 0% | 12.2 | 33% (1/0) | – | 2/0%/0% | 40/3%/3% |
| trade:P1: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 40 | 8% | 3% | 0% | 100% | 0% | 0% | 3.8 | 33% (1/0) | – | 12/0%/0% | 28/4%/0% |
| choose member:P1's Kingpin (4) | DEAD | 41 | 7% | 2% | 0% | 100% | 0% | 100% | 17.3 | 33% (1/0) | – | 2/0%/0% | 39/3%/0% |
| choose member:P2's Dabblers (3) | DEAD | 43 | 5% | 2% | 0% | 100% | 0% | 100% | 2.0 | 50% (1/0) | – | 3/0%/0% | 40/3%/0% |
| choose member:P1's Scouts (3) | DEAD | 50 | 2% | 2% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 1/0%/0% | 49/2%/0% |
| choose member:P2's Accomplice (3) | DEAD | 59 | 2% | 0% | 0% | – | – | – | 24.0 | 0% (0/0) | – | 6/0%/0% | 53/0%/0% |
| choose member:P4's Line Cutters (2) | DEAD | 71 | 1% | 0% | 0% | – | – | – | 2.1 | 100% (0/1) | – | 10/0%/0% | 61/0%/0% |
| choose member:P1's Window Shopper (5) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| choose member:P1's Doppelganger (5) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| choose member:P3's Cutpurse (3) | DEAD | 58 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 55/0%/0% |
| choose member:P1's Accomplice (3) | DEAD | 63 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 56/0%/0% |
| choose member:P1's Desperado (5) | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| choose member:P2's Cutpurse (3) | DEAD | 53 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 49/0%/0% |
| choose member:P2's Scouts (3) | DEAD | 42 | 2% | 0% | 0% | – | – | – | 2.5 | 0% (0/0) | – | 4/0%/0% | 38/0%/0% |
| choose member:P4's Critic (3) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| pass:Don’t swap | DEAD | 1491 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 756/0%/0% | 735/0%/0% |
| trade:P4: Scouts ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Triplets ↔ P3: Dabblers | DEAD | 23 | 4% | 0% | 0% | – | – | – | 3.3 | 100% (0/1) | – | 12/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Triplets | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 24/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Scouts | DEAD | 15 | 7% | 0% | 0% | – | – | – | 12.1 | 0% (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Alchemists ↔ Shop: Desperado | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 22/0%/0% |
| choose member:P1's Volunteer (1) | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 31/0%/0% |
| choose member:P3's Kingpin (4) | DEAD | 41 | 2% | 0% | 0% | – | – | – | 1.6 | 100% (0/1) | – | 2/0%/0% | 39/0%/0% |
| choose member:P3's Go-Between (4) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| choose member:P3's Triplets (3) | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 25/0%/0% |
| choose member:P4's Scouts (3) | DEAD | 58 | 2% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | 7/0%/0% | 51/0%/0% |
| choose member:P4's Recruit Bonus (3) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 67 | 1% | 0% | 0% | – | – | – | 24.1 | 100% (0/1) | – | 7/0%/0% | 60/0%/0% |
| choose member:P4's Party Crasher (4) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 27/0%/0% |
| trade:P4: Scouts ↔ P3: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Loyalists ↔ P2: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P3: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Scouts ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ Shop: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P2: Roadie ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P4: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Roadie | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Cashier | DEAD | 16 | 6% | 0% | 0% | – | – | – | 10.7 | 0% (0/0) | – | 13/0%/0% | 3/0%/0% |
| trade:P3: Scouts ↔ P4: Volunteer | DEAD | 31 | 3% | 0% | 0% | – | – | – | 20.3 | 0% (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P1: Busker ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Agents ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 25 | 8% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Alchemists ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 4.9 | 0% (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P2: Patriarch ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Triplets ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 11.0 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Line Cutters | DEAD | 19 | 5% | 0% | 0% | – | – | – | 27.1 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Alchemists ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Dabblers ↔ P1: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Dabblers ↔ P3: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 17.7 | 0% (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Kingpin ↔ Shop: Sticky Fingers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| choose member:P3's Drifters (3) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ Shop: Old Maid | DEAD | 26 | 4% | 0% | 0% | – | – | – | 21.5 | 100% (0/1) | – | 7/0%/0% | 19/0%/0% |
| choose member:P1's Triplets (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P2's Polisher (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| choose member:P2's Sticky Fingers (4) | DEAD | 21 | 5% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 1/0%/0% | 20/0%/0% |
| choose member:P3's Double Agent (8) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| choose member:P3's Loyalists (5) | DEAD | 16 | 6% | 0% | 0% | – | – | – | 1.5 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P3: Anarchist ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Anarchist ↔ Shop: Tastemaker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P1: Line Cutters ↔ P4: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Cashier ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Polisher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 9/0%/0% |
| trade:P3: Gardener ↔ P4: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 29.3 | 100% (0/1) | – | – | 18/0%/0% |
| trade:P3: Gardener ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ Shop: Tastemaker | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 7.5 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| choose member:P2's Volunteer (1) | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 29/0%/0% |
| choose member:P3's Recruit Bonus (3) | DEAD | 22 | 9% | 0% | 0% | – | – | – | 10.9 | 0% (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Volunteer | DEAD | 21 | 5% | 0% | 0% | – | – | – | 29.5 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 29 | 3% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P1: Scouts ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P4: Polisher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Raiders | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Anarchist ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Con Men ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P3: Agents ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 28/0%/0% |
| trade:P4: HR ↔ Shop: Extra Hand | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Bouncers ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| choose member:P1's Loyalists (5) | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P3's Volunteer (1) | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 31/0%/0% |
| choose member:P4's Early Birds (3) | DEAD | 23 | 4% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P1: Loyalists ↔ P2: Dabblers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P2: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Agents ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 3/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 42.3 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Con Men ↔ Shop: Anarchist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Roadie | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.1 | 100% (0/1) | – | 11/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Loyalists ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P2: Doormen ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Roadie ↔ P3: Agents | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P2: Roadie ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Loyalists ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Loyalists ↔ P4: Dabblers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.4 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ Shop: Old Maid | DEAD | 35 | 3% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 7/0%/0% | 28/0%/0% |
| trade:P2: Muse ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P3: Agents ↔ P4: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: HR ↔ Shop: Wallflower | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: HR ↔ Shop: Extra Hand | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Critic ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Critic ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Old Maid | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P4: Chronicler ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P4: Busker ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Doppelganger ↔ Shop: Old Maid | DEAD | 24 | 8% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P4: Patriarch ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Fan Club ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Anarchist ↔ Shop: Extra Hand | DEAD | 17 | 6% | 0% | 0% | – | – | – | 7.7 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Busker ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Busker ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 7/0%/0% |
| trade:P3: Busker ↔ Shop: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Stunt Double ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| choose member:P3's Sticky Fingers (4) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| choose member:P3's Stunt Double (5) | DEAD | 24 | 8% | 0% | 0% | – | – | – | 14.5 | 50% (0/1) | – | 1/0%/0% | 23/0%/0% |
| trade:P3: Dabblers ↔ P1: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 10.6 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Early Birds | DEAD | 18 | 6% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Alchemists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Party Crasher ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P1: Con Men ↔ Shop: Extra Hand | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Volunteer | DEAD | 24 | 4% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P3: Roadie ↔ P2: Line Cutters | DEAD | 21 | 10% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 14/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Agents ↔ P1: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Agents ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Gardener ↔ P1: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Dyer ↔ Shop: Big Tent | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Line Cutters ↔ P4: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| choose member:P2's Party Crasher (4) | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 37/0%/0% |
| choose member:P3's Scouts (3) | DEAD | 59 | 3% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 4/0%/0% | 55/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Con Men ↔ Shop: Collector | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Panel ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 31 | 3% | 0% | 0% | – | – | – | 26.9 | 0% (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ P4: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ P4: Line Cutters | DEAD | 23 | 4% | 0% | 0% | – | – | – | 18.6 | 0% (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P2: HR ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| choose member:P1's Recruit Bonus (3) | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 37/0%/0% |
| choose member:P1's Party Crasher (4) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| choose member:P3's Accomplice (3) | DEAD | 53 | 2% | 0% | 0% | – | – | – | 41.4 | 0% (0/0) | – | 3/0%/0% | 50/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 15/0%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 58 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 54/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| choose member:P3's Toastmaster (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| choose member:P3's Early Birds (3) | DEAD | 18 | 6% | 0% | 0% | – | – | – | 3.3 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| choose member:P4's Volunteer (1) | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 28/0%/0% |
| choose member:P1's Regular (3) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| choose member:P3's Connoisseurs (4) | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| choose member:P1's Sticky Fingers (4) | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 30/0%/0% |
| choose member:P4's Toastmaster (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Old Maid | DEAD | 29 | 3% | 0% | 0% | – | – | – | 29.3 | 0% (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| choose member:P3's Regular (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| choose member:P4's Agents (3) | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 31/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Agents ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Scouts ↔ P2: Dabblers | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Agents ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Agents ↔ P3: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 16/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P1: Polisher ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Collector ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P3: Alchemists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.8 | 100% (0/1) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P3: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P2: Dabblers ↔ Shop: Old Maid | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Roadie ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P3: Busker | DEAD | 20 | 5% | 0% | 0% | – | – | – | 9.3 | 100% (0/1) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Window Shopper ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Mob ↔ Shop: Wallflower | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ Shop: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Gardener ↔ P1: Scouts | DEAD | 19 | 5% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P1: Scouts ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P4: Gardener | DEAD | 21 | 5% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P4: Recruit Bonus | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 15/0%/0% |
| choose member:P4's Cutpurse (3) | DEAD | 55 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 49/0%/0% |
| trade:P2: Dabblers ↔ P1: Polisher | DEAD | 19 | 5% | 0% | 0% | – | – | – | 11.4 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P4: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P1's Polisher (3) | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 26/0%/0% |
| choose member:P4's Triplets (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | DEAD | 23 | 4% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| choose member:P1's Line Cutters (2) | DEAD | 50 | 4% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 3/0%/0% | 47/0%/0% |
| trade:P3: Busker ↔ P1: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| choose member:P2's Recruit Bonus (3) | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 28/0%/0% |
| trade:P1: Loyalists ↔ P3: Deprogrammers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 3.8 | 0% (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Con Men ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Line Cutters ↔ P3: Deprogrammers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 8.5 | 0% (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Alchemists ↔ P4: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ P2: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Dabblers ↔ P3: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| choose member:P1's Agents (3) | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 31/0%/0% |
| trade:P3: Patriarch ↔ Shop: Old Maid | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P1: Agents ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| choose member:P4's Doppelganger (5) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Cutpurse ↔ P3: Volunteer | DEAD | 16 | 6% | 0% | 0% | – | – | – | 11.1 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| choose member:P4's Collector (6) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Chronicler ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Chronicler ↔ P2: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Panel ↔ Shop: Old Maid | DEAD | 20 | 5% | 0% | 0% | – | – | – | 6.9 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Chronicler ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Fan Club ↔ Shop: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P4: Scouts | DEAD | 22 | 5% | 0% | 0% | – | – | – | 26.8 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Bouncers ↔ P4: Early Birds | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Bouncers ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Window Dressers ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Critic ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P3: Early Birds ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Dabblers ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P4: Line Cutters ↔ P3: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Snobs ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Fan Club ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| choose member:P2's Doppelganger (5) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P1: Volunteer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Scouts | DEAD | 21 | 5% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Drifters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ P4: Drifters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Con Men ↔ Shop: Tastemaker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Doormen ↔ P3: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 9.7 | 100% (0/1) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 46 | 7% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 15/0%/0% | 31/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 21/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Timekeepers ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| choose member:P2's Connoisseurs (4) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P3: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P1: Stunt Double ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Martyrs | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.5 | 100% (0/1) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Gardener ↔ P4: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Kingpin ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 7/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Gossip | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Recluse ↔ P4: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Agents ↔ P4: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Busker ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Anarchist | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 27/0%/0% |
| trade:P3: Con Men ↔ P1: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P3: Roadie | DEAD | 38 | 3% | 0% | 0% | – | – | – | 12.4 | 100% (0/1) | – | 20/0%/0% | 18/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Triplets | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 26/0%/0% |
| trade:P2: Dabblers ↔ P1: Scouts | DEAD | 34 | 6% | 0% | 0% | – | – | – | 21.2 | 50% (0/1) | – | 19/0%/0% | 15/0%/0% |
| trade:P4: Line Cutters ↔ P1: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Gardener ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P2: Roadie ↔ P1: Line Cutters | DEAD | 22 | 5% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 15/0%/0% | 7/0%/0% |
| trade:P2: Scouts ↔ P1: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P3: Dabblers | DEAD | 26 | 8% | 0% | 0% | – | – | – | 18.5 | 0% (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P1: Con Men ↔ P4: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Panel ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Panel ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 12.9 | 100% (0/1) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P2: Dabblers ↔ Shop: Triplets | DEAD | 36 | 3% | 0% | 0% | – | – | – | 25.3 | 0% (0/0) | – | 12/0%/0% | 24/0%/0% |
| trade:P2: Dabblers ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Scouts ↔ Shop: Triplets | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P1: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P3: Patriarch ↔ Shop: Sticky Fingers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| choose member:P1's Gardener (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Gossip | DEAD | 16 | 6% | 0% | 0% | – | – | – | 19.3 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Bouncers ↔ P4: Timekeepers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P4: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P4: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P1: Bouncers ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P4: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 50.1 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| choose member:P1's Muse (4) | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Con Men ↔ Shop: Big Tent | DEAD | 15 | 7% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Scouts ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Triplets | DEAD | 32 | 6% | 0% | 0% | – | – | – | 38.4 | 50% (0/1) | – | 10/0%/0% | 22/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 23/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 24 | 4% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Drifters ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| choose member:P2's Early Birds (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P1: Roadie | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.3 | 100% (0/1) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Busker ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Dabblers ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Agents ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Triplets ↔ P2: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| choose member:P4's Bouncers (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Agents ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Alchemists ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ P1: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P3: Chronicler ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Roadie ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P4: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Old Maid | DEAD | 24 | 4% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Dabblers ↔ P3: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P4: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Trendsetters ↔ P1: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Trendsetters ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Trendsetters ↔ P3: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P3: Triplets ↔ P4: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 17.3 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P1: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 57.4 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| choose member:P4's Muse (4) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P1: Bouncers ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Gardener ↔ P2: Dabblers | DEAD | 26 | 4% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 14/0%/0% | 12/0%/0% |
| trade:P4: Drifters ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P4: Drifters ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P4: Gardener | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ P4: Panel | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.5 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Volunteer ↔ P2: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ Shop: Alchemists | DEAD | 17 | 6% | 0% | 0% | – | – | – | 30.5 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Volunteer ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P3: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P4: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Dabblers ↔ P4: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| choose member:P3's Party Crasher (4) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P4: Drifters ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Toastmaster | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P3: Window Shopper ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Kingpin ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| choose member:P4's Stunt Double (5) | DEAD | 28 | 4% | 0% | 0% | – | – | – | 24.0 | 0% (0/0) | – | 1/0%/0% | 27/0%/0% |
| trade:P2: Party Crasher ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Volunteer ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Volunteer ↔ P3: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P3: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P1: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.8 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P3: Panel ↔ Shop: Tastemaker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Shift Crew | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P4: Timekeepers ↔ P1: Bouncers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Accomplice ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Critic ↔ P4: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 10/0%/0% |
| trade:P2: Critic ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ P2: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ P1: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P4: Con Men ↔ Shop: Patriarch | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Agents ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Accomplice ↔ P4: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 4.4 | 0% (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P4: Dabblers ↔ P2: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Dabblers ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Party Crasher | DEAD | 18 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P4: Timekeepers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Loyalists ↔ P2: Scouts | DEAD | 19 | 5% | 0% | 0% | – | – | – | 7.8 | 100% (0/1) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Drifters ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Gardener ↔ P4: Drifters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Bouncers ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Trendsetters ↔ P4: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Scouts | DEAD | 27 | 7% | 0% | 0% | – | – | – | 14.5 | 50% (0/1) | – | 16/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Line Cutters | DEAD | 22 | 5% | 0% | 0% | – | – | – | 5.1 | 0% (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P1: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Dabblers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 26/0%/0% |
| trade:P1: Triplets ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Roadie ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ P2: Volunteer | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.4 | 100% (0/1) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Roadie ↔ P4: Drifters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P4: Drifters ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Agents ↔ P4: Deprogrammers | DEAD | 22 | 9% | 0% | 0% | – | – | – | 13.0 | 100% (0/2) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Roadie ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ P2: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P2: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P2: Shopkeeper | DEAD | 16 | 6% | 0% | 0% | – | – | – | 27.6 | 0% (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P2: Scouts ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 22 | 5% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P3: Roadie ↔ P1: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Agents ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Agents ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ P1: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Panel ↔ Shop: Anarchist | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Triplets ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Volunteer | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P3: Alchemists ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Drifters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.1 | 0% (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Muse ↔ P3: Busker | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P2: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Drifters ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Drifters ↔ P2: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P2: Window Shopper ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Window Shopper ↔ P3: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Muse ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Timekeepers ↔ P1: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Roadie ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P4: Timekeepers ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Patriarch ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Roadie ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ P1: Roadie | DEAD | 18 | 6% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Triplets ↔ P1: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ P4: Chronicler | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P4: Volunteer | DEAD | 22 | 9% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Roadie ↔ P1: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Gardener ↔ P2: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P3: Agents ↔ P1: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 10/0%/0% |
| trade:P2: Trendsetters ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Timekeepers ↔ P1: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P4: Timekeepers ↔ P2: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Roadie ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ P4: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P4: Roadie ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P1: Bouncers ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Busker ↔ P1: Bouncers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Bouncers ↔ P2: Timekeepers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P2: Timekeepers ↔ P1: Bouncers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P3: Connoisseurs | DEAD | 17 | 6% | 0% | 0% | – | – | – | 26.0 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ P1: Dabblers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.4 | 100% (0/1) | – | 9/0%/0% | 8/0%/0% |

(35924 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 2981 | 16% | 2471 | 21% |
| market | 3053 | 16% | 3005 | 18% |
| benders | 0 | – | 1985 | 18% |
| trading | 3293 | 15% | 2566 | 16% |
| silver | 3050 | 15% | 2540 | 15% |
| red | 3655 | 15% | 3785 | 13% |
| yellow | 2953 | 14% | 2491 | 12% |
| echo | 3030 | 12% | 3195 | 10% |
| thieves | 3193 | 12% | 3170 | 9% |
