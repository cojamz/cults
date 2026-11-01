# Choice report

26065 looked-ahead decisions from 275 games (/mnt/project-files/balance-1.0/merged/veryhard.choices). 23% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| purple: Last Call | AUTO-PICK | 1395 | 49% | 16% | 6% | 55% | 0% | 2% | 11.4 | 37% (147/105) | – | 830/12%/6% | 565/22%/5% |
| purple: Sleep In | AUTO-PICK | 2889 | 53% | 12% | 5% | 58% | 10% | 5% | 12.0 | 32% (156/326) | 661/18%/4% | 888/14%/4% | 1340/9%/5% |
| thieves: Poach | AUTO-PICK | 740 | 51% | 20% | 5% | 65% | 22% | 2% | 9.5 | 41% (77/63) | – | – | 740/20%/5% |
| yellow: Harvest | AUTO-PICK | 2773 | 39% | 12% | 5% | 57% | 29% | 6% | 11.6 | 29% (155/130) | 240/54%/4% | 1118/9%/3% | 1415/7%/6% |
| red: Promote | AUTO-PICK | 1075 | 59% | 26% | 4% | 75% | 37% | 1% | 14.4 | 40% (88/125) | – | 526/28%/5% | 549/25%/4% |
| red: Recruit a Member | AUTO-PICK | 932 | 40% | 13% | 4% | 57% | 24% | 6% | 10.3 | 33% (57/56) | – | – | 932/13%/4% |
| echo: Cover | AUTO-PICK | 1705 | 44% | 13% | 4% | 57% | 14% | 2% | 12.8 | 39% (116/166) | – | 865/14%/4% | 840/13%/5% |
| thieves: Help Yourself | AUTO-PICK | 1925 | 57% | 20% | 4% | 74% | 38% | 3% | 11.2 | 39% (124/245) | 170/79%/5% | 703/19%/4% | 1052/11%/5% |
| market: Spree | AUTO-PICK | 1013 | 44% | 10% | 4% | 51% | 20% | 0% | 10.4 | 26% (45/68) | – | – | 1013/10%/4% |
| echo: Build Up | AUTO-PICK | 3007 | 41% | 11% | 4% | 55% | 12% | 8% | 12.0 | 33% (177/215) | 673/19%/5% | 1017/12%/4% | 1317/7%/4% |
| yellow: Big Dilute | AUTO-PICK | 2073 | 37% | 11% | 4% | 60% | 19% | 6% | 12.5 | 38% (124/154) | – | 857/15%/3% | 1216/8%/4% |
| silver: Toast | AUTO-PICK | 3456 | 40% | 10% | 4% | 53% | 14% | 11% | 13.1 | 33% (183/258) | 1101/10%/3% | 1264/10%/3% | 1091/11%/4% |
| echo: Echo | AUTO-PICK | 1695 | 46% | 21% | 4% | 74% | 40% | 0% | 12.2 | 43% (121/152) | 360/34%/3% | 639/19%/4% | 696/17%/4% |
| thieves: Stash | AUTO-PICK | 3469 | 36% | 11% | 3% | 55% | 12% | 9% | 12.2 | 30% (203/158) | 824/17%/4% | 1282/10%/2% | 1363/9%/4% |
| red: Walk-In | AUTO-PICK | 2868 | 45% | 13% | 3% | 63% | 35% | 10% | 14.0 | 30% (122/227) | 899/14%/4% | 891/15%/3% | 1078/11%/3% |
| red: Demote | AUTO-PICK | 1982 | 41% | 13% | 3% | 72% | 31% | 3% | 12.9 | 36% (93/173) | – | 969/14%/2% | 1013/12%/4% |
| thieves: Crime Wave | AUTO-PICK | 1846 | 43% | 15% | 3% | 64% | 16% | 2% | 13.1 | 34% (132/130) | – | 1070/13%/2% | 776/17%/4% |
| echo: Reprise | AUTO-PICK | 2730 | 32% | 14% | 3% | 69% | 28% | 1% | 11.8 | 39% (149/150) | 749/17%/3% | 1008/13%/2% | 973/12%/3% |
| purple: Right Away | MIXED | 5149 | 23% | 4% | 5% | 28% | 5% | 47% | 8.4 | 16% (129/56) | 1183/6%/4% | 1848/2%/5% | 2118/4%/7% |
| purple: Crunch Time | MIXED | 4163 | 21% | 2% | 5% | 8% | 1% | 62% | 8.4 | 11% (64/30) | – | 1853/2%/5% | 2310/3%/6% |
| purple: Crowd In | MIXED | 915 | 42% | 14% | 5% | 44% | 6% | 1% | 9.2 | 34% (76/54) | – | – | 915/14%/5% |
| market: Savings | MIXED | 4364 | 32% | 6% | 5% | 33% | 8% | 28% | 10.3 | 19% (186/75) | 918/12%/7% | 1626/5%/4% | 1820/4%/5% |
| market: Peek | MIXED | 3235 | 43% | 10% | 5% | 44% | 5% | 12% | 11.3 | 26% (239/123) | 870/14%/6% | 1167/9%/3% | 1198/8%/6% |
| market: Bury | MIXED | 2272 | 40% | 9% | 5% | 49% | 8% | 9% | 11.0 | 31% (129/153) | – | 803/14%/4% | 1469/6%/5% |
| purple: Hold Up | MIXED | 4205 | 36% | 8% | 5% | 39% | 6% | 27% | 11.7 | 21% (197/115) | 846/14%/4% | 1547/7%/4% | 1812/6%/6% |
| yellow: Melting Pot | MIXED | 2660 | 34% | 9% | 4% | 48% | 8% | 10% | 11.0 | 32% (132/152) | – | 1184/11%/3% | 1476/7%/5% |
| silver: Largesse | MIXED | 843 | 43% | 16% | 4% | 45% | 1% | 0% | 11.2 | 39% (90/51) | – | – | 843/16%/4% |
| market: Out of Style | MIXED | 3632 | 36% | 9% | 4% | 49% | 6% | 15% | 11.0 | 28% (178/183) | 623/19%/5% | 1289/9%/3% | 1720/5%/4% |
| thieves: Shake Down | MIXED | 2639 | 34% | 9% | 4% | 53% | 15% | 11% | 12.1 | 33% (132/148) | – | 996/13%/4% | 1643/7%/4% |
| red: Tryout | MIXED | 3519 | 30% | 9% | 4% | 60% | 20% | 11% | 10.8 | 29% (160/127) | 659/19%/7% | 1182/9%/2% | 1678/5%/4% |
| silver: Sweet Talk | MIXED | 3367 | 28% | 6% | 4% | 48% | 16% | 20% | 11.6 | 28% (106/145) | – | 1356/8%/2% | 2011/5%/5% |
| trading: Allowance | MIXED | 3926 | 34% | 10% | 4% | 46% | 6% | 10% | 11.8 | 32% (263/151) | 825/17%/5% | 1523/8%/3% | 1578/8%/4% |
| silver: Party Favors | MIXED | 2943 | 34% | 8% | 4% | 51% | 16% | 14% | 11.1 | 31% (133/163) | – | 1116/11%/3% | 1827/6%/4% |
| red: Gather | MIXED | 4077 | 27% | 8% | 3% | 45% | 9% | 16% | 11.1 | 30% (198/118) | 844/15%/6% | 1502/7%/2% | 1731/5%/3% |
| silver: Party Gifts | MIXED | 4383 | 30% | 7% | 3% | 43% | 5% | 20% | 11.2 | 27% (184/168) | 1135/10%/3% | 1783/5%/3% | 1465/8%/5% |
| trading: Farewell | MIXED | 3726 | 24% | 6% | 3% | 33% | 5% | 17% | 10.7 | 29% (104/159) | – | 1960/4%/2% | 1766/7%/4% |
| market: Recruit Twice | MIXED | 3188 | 28% | 5% | 3% | 50% | 26% | 9% | 10.7 | 22% (93/96) | – | 1680/3%/3% | 1508/7%/3% |
| trading: Estate Sale | MIXED | 2831 | 36% | 10% | 3% | 64% | 23% | 8% | 12.9 | 31% (108/187) | – | 1249/12%/2% | 1582/8%/3% |
| silver: Polish | MIXED | 5485 | 18% | 4% | 3% | 48% | 21% | 42% | 9.6 | 22% (106/104) | 1195/10%/2% | 1902/2%/2% | 2388/2%/4% |
| echo: Greatest Hits | MIXED | 1890 | 13% | 5% | 3% | 39% | 2% | 41% | 7.1 | 37% (73/15) | – | – | 1890/5%/3% |
| yellow: Trade Seeds | MIXED | 4759 | 22% | 4% | 3% | 49% | 10% | 24% | 11.3 | 28% (121/160) | 801/15%/4% | 1847/2%/1% | 2111/2%/3% |
| yellow: Makeover | MIXED | 1956 | 14% | 4% | 3% | 49% | 22% | 36% | 8.4 | 27% (36/35) | – | – | 1956/4%/3% |
| echo: Encore | MIXED | 2762 | 24% | 7% | 3% | 63% | 22% | 20% | 10.6 | 29% (86/95) | – | 1253/8%/2% | 1509/6%/3% |
| trading: Exchange | MIXED | 5639 | 18% | 4% | 3% | 28% | 1% | 43% | 10.5 | 28% (135/149) | 1450/6%/4% | 2124/2%/2% | 2065/5%/3% |
| yellow: Dilute | MIXED | 4432 | 25% | 6% | 3% | 55% | 14% | 20% | 11.1 | 26% (154/129) | 821/14%/3% | 1647/5%/2% | 1964/3%/3% |
| thieves: Lie Low | MIXED | 4823 | 21% | 6% | 2% | 54% | 11% | 23% | 10.3 | 30% (194/109) | 962/14%/3% | 1779/5%/2% | 2082/4%/3% |
| trading: Cash In | MIXED | 2459 | 15% | 3% | 2% | 35% | 17% | 32% | 8.1 | 24% (32/56) | – | – | 2459/3%/2% |
| trading: Splurge | FILLER | 6098 | 17% | 3% | 3% | 26% | 3% | 59% | 9.0 | 17% (140/40) | 1356/8%/6% | 2170/1%/2% | 2572/2%/3% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Volunteer (red) | REAL CHOICE | 440 | 77% | 25% | 16% | 33% | 0% | 3% | 9.7 | 36% (58/65) | 227/30%/21% | 62/37%/18% | 151/13%/9% |
| Line Cutters (benders) | REAL CHOICE | 1121 | 87% | 21% | 13% | 36% | 3% | 4% | 10.8 | 41% (63/337) | 681/20%/14% | 216/21%/11% | 224/21%/13% |
| Deprogrammers (red) | REAL CHOICE | 436 | 85% | 26% | 13% | 34% | 4% | 1% | 11.7 | 31% (20/92) | 275/23%/14% | 81/40%/9% | 80/23%/14% |
| Chronicler (echo) | REAL CHOICE | 533 | 82% | 15% | 11% | 41% | 3% | 0% | 12.0 | 28% (39/83) | – | 338/13%/11% | 195/19%/12% |
| Dabblers (benders) | REAL CHOICE | 1650 | 77% | 12% | 11% | 36% | 0% | 1% | 11.3 | 27% (100/240) | 933/8%/9% | 348/21%/14% | 369/17%/13% |
| Shopkeeper (trading) | AUTO-PICK | 394 | 68% | 28% | 9% | 72% | 12% | 0% | 9.1 | 29% (19/54) | 99/69%/12% | 51/53%/4% | 244/7%/9% |
| Roadie (echo) | AUTO-PICK | 319 | 73% | 37% | 9% | 69% | 16% | 2% | 9.7 | 38% (37/44) | 174/48%/12% | 24/63%/0% | 121/17%/6% |
| Polisher (silver) | AUTO-PICK | 679 | 59% | 15% | 9% | 53% | 4% | 0% | 9.3 | 22% (72/17) | 341/14%/11% | 119/24%/9% | 219/12%/5% |
| Fan Club (echo) | AUTO-PICK | 280 | 84% | 31% | 8% | 64% | 20% | 0% | 11.2 | 32% (17/53) | – | 130/40%/8% | 150/24%/8% |
| Busker (echo) | AUTO-PICK | 392 | 67% | 28% | 7% | 69% | 9% | 0% | 10.2 | 28% (27/43) | 147/45%/8% | 41/59%/7% | 204/9%/7% |
| Cutpurse (thieves) | AUTO-PICK | 392 | 71% | 28% | 7% | 78% | 39% | 3% | 9.9 | 31% (18/55) | 190/36%/9% | 60/38%/7% | 142/12%/6% |
| Patriarch (red) | AUTO-PICK | 407 | 69% | 22% | 7% | 54% | 5% | 0% | 12.8 | 27% (28/45) | – | 255/14%/5% | 152/36%/9% |
| Doppelganger (echo) | AUTO-PICK | 439 | 62% | 18% | 7% | 57% | 9% | 0% | 10.9 | 27% (32/39) | – | 202/22%/8% | 237/15%/5% |
| Accomplice (thieves) | AUTO-PICK | 214 | 79% | 57% | 7% | 89% | 65% | 3% | 7.2 | 30% (2/25) | 99/68%/2% | 34/71%/15% | 81/38%/9% |
| Dyer (yellow) | AUTO-PICK | 301 | 65% | 18% | 6% | 64% | 2% | 0% | 9.4 | 27% (14/39) | – | 63/56%/11% | 238/8%/5% |
| Mob (red) | AUTO-PICK | 132 | 80% | 30% | 6% | 75% | 38% | 0% | 18.9 | 30% (5/22) | – | 65/22%/2% | 67/39%/10% |
| HR (benders) | AUTO-PICK | 857 | 62% | 15% | 6% | 52% | 22% | 1% | 16.2 | 27% (21/115) | – | 467/7%/3% | 390/24%/9% |
| Snobs (market) | AUTO-PICK | 412 | 74% | 21% | 6% | 58% | 15% | 0% | 13.0 | 30% (22/67) | – | 216/13%/5% | 196/29%/7% |
| Panel (red) | AUTO-PICK | 218 | 64% | 26% | 6% | 71% | 34% | 0% | 15.7 | 20% (7/17) | – | 145/28%/6% | 73/22%/5% |
| High Society (silver) | AUTO-PICK | 430 | 70% | 12% | 5% | 50% | 10% | 0% | 13.7 | 24% (10/60) | – | 165/15%/4% | 265/10%/6% |
| Stunt Double (echo) | AUTO-PICK | 191 | 81% | 52% | 5% | 75% | 39% | 0% | 9.4 | 35% (15/26) | – | 85/66%/4% | 106/42%/7% |
| Con Men (benders) | AUTO-PICK | 375 | 88% | 58% | 5% | 82% | 61% | 0% | 9.9 | 30% (23/37) | – | 141/91%/1% | 234/38%/7% |
| Gardener (yellow) | AUTO-PICK | 336 | 59% | 26% | 5% | 75% | 48% | 0% | 11.9 | 22% (16/18) | 88/75%/7% | 109/13%/6% | 139/6%/3% |
| Grifter (thieves) | AUTO-PICK | 402 | 63% | 21% | 4% | 69% | 28% | 0% | 14.7 | 31% (14/57) | – | 211/20%/2% | 191/23%/6% |
| Extortionist (thieves) | AUTO-PICK | 359 | 62% | 17% | 4% | 63% | 23% | 0% | 10.9 | 29% (17/44) | – | 121/24%/4% | 238/13%/4% |
| Caravan (yellow) | AUTO-PICK | 306 | 59% | 16% | 4% | 56% | 12% | 0% | 11.2 | 22% (10/28) | – | 110/33%/5% | 196/7%/4% |
| Double Agent (thieves) | AUTO-PICK | 419 | 52% | 16% | 4% | 68% | 31% | 0% | 14.5 | 28% (22/34) | – | 233/18%/2% | 186/15%/6% |
| Tribute Band (echo) | AUTO-PICK | 195 | 21% | 12% | 1% | 87% | 0% | 0% | 18.8 | 41% (15/2) | – | 26/4%/0% | 169/13%/1% |
| Philanthropists (silver) | MIXED | 462 | 76% | 17% | 10% | 46% | 3% | 0% | 11.6 | 28% (29/68) | – | 195/19%/9% | 267/15%/11% |
| Shift Crew (purple) | MIXED | 653 | 51% | 12% | 10% | 24% | 0% | 0% | 9.5 | 26% (60/25) | 205/5%/9% | 259/14%/8% | 189/17%/13% |
| Early Birds (purple) | MIXED | 684 | 66% | 10% | 10% | 34% | 3% | 3% | 9.8 | 23% (34/67) | 201/9%/11% | 115/17%/12% | 368/8%/8% |
| Agents (echo) | MIXED | 623 | 69% | 14% | 9% | 33% | 0% | 1% | 10.4 | 29% (51/71) | 325/13%/8% | 159/19%/14% | 139/12%/7% |
| Recruit Bonus (red) | MIXED | 879 | 72% | 10% | 9% | 35% | 2% | 1% | 10.6 | 21% (46/85) | 443/7%/9% | 196/17%/15% | 240/10%/6% |
| Triplets (red) | MIXED | 1021 | 49% | 9% | 9% | 26% | 0% | 0% | 9.4 | 20% (67/33) | 512/6%/11% | 210/13%/8% | 299/10%/7% |
| Scouts (benders) | MIXED | 2035 | 71% | 8% | 9% | 31% | 0% | 1% | 11.1 | 23% (84/251) | 925/7%/9% | 401/17%/10% | 709/6%/8% |
| Window Dressers (market) | MIXED | 603 | 74% | 14% | 9% | 39% | 0% | 2% | 11.2 | 25% (30/80) | 172/6%/8% | 230/17%/11% | 201/18%/7% |
| Timekeepers (purple) | MIXED | 706 | 71% | 14% | 9% | 36% | 0% | 0% | 9.9 | 21% (27/79) | 350/5%/7% | 119/26%/13% | 237/20%/10% |
| Martyrs (trading) | MIXED | 789 | 69% | 12% | 8% | 34% | 2% | 0% | 10.6 | 27% (44/101) | 285/7%/6% | 190/20%/11% | 314/12%/9% |
| Trendsetters (market) | MIXED | 731 | 71% | 12% | 8% | 33% | 0% | 0% | 11.1 | 26% (41/96) | 238/5%/8% | 240/14%/8% | 253/17%/9% |
| Critic (market) | MIXED | 995 | 56% | 7% | 8% | 28% | 4% | 5% | 9.9 | 18% (53/46) | 321/6%/7% | 164/15%/16% | 510/6%/6% |
| Kingpin (thieves) | MIXED | 836 | 68% | 12% | 8% | 33% | 2% | 0% | 12.5 | 25% (49/90) | 395/4%/4% | 193/21%/12% | 248/17%/10% |
| Toastmaster (silver) | MIXED | 993 | 55% | 8% | 8% | 42% | 4% | 0% | 9.5 | 17% (46/45) | 321/7%/9% | 229/14%/8% | 443/5%/6% |
| Alchemists (benders) | MIXED | 1354 | 82% | 11% | 7% | 32% | 0% | 1% | 11.8 | 25% (80/196) | – | 549/13%/8% | 805/9%/7% |
| Bouncers (purple) | MIXED | 785 | 73% | 9% | 7% | 34% | 4% | 0% | 11.6 | 21% (37/82) | 348/6%/3% | 231/13%/13% | 206/10%/7% |
| Regular (market) | MIXED | 959 | 58% | 8% | 7% | 35% | 4% | 0% | 10.2 | 18% (57/40) | 292/4%/8% | 288/13%/9% | 379/8%/6% |
| Recluse (trading) | MIXED | 722 | 65% | 14% | 7% | 40% | 5% | 0% | 10.4 | 23% (32/77) | 230/6%/4% | 195/23%/8% | 297/13%/9% |
| Brokers (trading) | MIXED | 710 | 71% | 10% | 7% | 33% | 0% | 0% | 10.9 | 25% (35/91) | – | 297/11%/7% | 413/9%/7% |
| Drifters (yellow) | MIXED | 558 | 63% | 14% | 7% | 42% | 14% | 0% | 10.9 | 21% (25/46) | 217/19%/9% | 155/15%/6% | 186/8%/5% |
| Doormen (market) | MIXED | 826 | 68% | 8% | 6% | 33% | 2% | 0% | 10.5 | 18% (49/53) | – | 343/9%/8% | 483/7%/6% |
| Old Money (trading) | MIXED | 808 | 69% | 8% | 6% | 34% | 0% | 0% | 10.8 | 20% (34/77) | – | 273/8%/5% | 535/7%/7% |
| Loyalists (red) | MIXED | 551 | 69% | 12% | 6% | 32% | 1% | 0% | 12.1 | 25% (31/65) | – | 245/13%/7% | 306/11%/6% |
| Connoisseurs (market) | MIXED | 986 | 67% | 7% | 6% | 25% | 1% | 0% | 11.8 | 18% (52/66) | 314/2%/4% | 300/11%/8% | 372/9%/7% |
| Raiders (trading) | MIXED | 770 | 60% | 7% | 5% | 27% | 2% | 0% | 12.1 | 14% (39/24) | – | 341/6%/5% | 429/7%/6% |
| Hot Streak (purple) | MIXED | 755 | 41% | 5% | 5% | 17% | 0% | 0% | 11.2 | 16% (35/15) | – | 259/6%/5% | 496/5%/5% |
| Ringleader (yellow) | MIXED | 554 | 58% | 11% | 5% | 45% | 5% | 0% | 13.8 | 23% (29/44) | – | 277/9%/3% | 277/13%/6% |
| Muse (echo) | MIXED | 1260 | 44% | 4% | 4% | 33% | 0% | 0% | 10.5 | 13% (47/25) | 436/2%/4% | 258/11%/8% | 566/3%/3% |
| Clockmakers (purple) | MIXED | 724 | 61% | 7% | 4% | 25% | 0% | 0% | 11.1 | 16% (26/43) | – | 258/10%/5% | 466/5%/4% |
| Big Tent (yellow) | MIXED | 604 | 41% | 6% | 4% | 37% | 3% | 0% | 12.6 | 16% (12/26) | – | 246/7%/4% | 358/5%/4% |
| Cashier (trading) | MIXED | 1120 | 39% | 4% | 4% | 37% | 2% | 0% | 10.0 | 14% (27/32) | 288/0%/3% | 360/4%/3% | 472/6%/6% |
| Window Shopper (market) | MIXED | 936 | 53% | 6% | 4% | 38% | 7% | 0% | 11.8 | 16% (32/46) | – | 258/12%/6% | 678/4%/3% |
| Closer (purple) | MIXED | 786 | 42% | 5% | 4% | 26% | 0% | 0% | 11.7 | 13% (35/8) | – | 291/9%/5% | 495/3%/3% |
| Party Crasher (benders) | MIXED | 2241 | 52% | 7% | 4% | 49% | 0% | 1% | 11.5 | 15% (137/45) | 1007/1%/1% | 357/21%/8% | 877/9%/5% |
| Anarchist (benders) | MIXED | 1874 | 35% | 6% | 4% | 38% | 0% | 0% | 12.0 | 19% (111/15) | – | 655/7%/3% | 1219/6%/4% |
| Mentor & Protégés (red) | MIXED | 383 | 56% | 11% | 3% | 47% | 9% | 2% | 12.9 | 18% (16/23) | – | 138/9%/2% | 245/13%/4% |
| Sticky Fingers (thieves) | MIXED | 984 | 44% | 6% | 3% | 37% | 2% | 0% | 11.8 | 15% (44/20) | 284/1%/1% | 214/12%/5% | 486/6%/3% |
| Desperado (thieves) | MIXED | 916 | 40% | 3% | 3% | 27% | 0% | 0% | 11.3 | 13% (27/19) | – | 346/5%/3% | 570/2%/3% |
| Go-Between (yellow) | MIXED | 881 | 41% | 4% | 3% | 30% | 3% | 0% | 11.4 | 14% (23/26) | 199/3%/3% | 188/8%/5% | 494/3%/2% |
| Night Owls (purple) | MIXED | 401 | 29% | 4% | 3% | 29% | 0% | 0% | 10.1 | 15% (12/6) | – | 118/2%/1% | 283/5%/4% |
| Heiresses (trading) | MIXED | 436 | 26% | 7% | 3% | 66% | 3% | 0% | 9.0 | 26% (27/2) | – | 155/5%/3% | 281/9%/2% |
| Gossip (purple) | MIXED | 678 | 29% | 3% | 3% | 32% | 0% | 0% | 10.0 | 12% (21/3) | – | 199/5%/4% | 479/3%/2% |
| Collector (silver) | MIXED | 922 | 34% | 4% | 2% | 44% | 0% | 0% | 11.1 | 13% (30/12) | 140/0%/0% | 262/6%/3% | 520/3%/3% |
| Exporters (trading) | MIXED | 884 | 41% | 2% | 2% | 45% | 0% | 0% | 12.6 | 10% (20/18) | – | 369/3%/1% | 515/2%/3% |
| Shoplifter (thieves) | MIXED | 646 | 26% | 4% | 2% | 28% | 0% | 0% | 13.5 | 16% (22/5) | – | 266/2%/1% | 380/5%/3% |
| Debutantes (silver) | MIXED | 575 | 43% | 5% | 2% | 36% | 0% | 0% | 13.2 | 15% (23/13) | – | 247/2%/1% | 328/7%/4% |
| Bodyguards (thieves) | MIXED | 454 | 29% | 5% | 2% | 27% | 0% | 5% | 9.9 | 19% (19/6) | – | 128/4%/2% | 326/5%/3% |
| Harmonist (yellow) | MIXED | 629 | 28% | 2% | 2% | 45% | 0% | 0% | 13.6 | 10% (7/11) | – | 243/2%/2% | 386/1%/2% |
| Courier (purple) | MIXED | 725 | 33% | 4% | 2% | 34% | 0% | 0% | 11.0 | 16% (30/8) | – | 259/6%/3% | 466/3%/2% |
| Extra Hand (benders) | MIXED | 1484 | 25% | 5% | 2% | 41% | 0% | 0% | 15.6 | 20% (65/7) | – | 721/1%/1% | 763/8%/3% |
| Shopaholics (market) | MIXED | 596 | 36% | 4% | 2% | 36% | 0% | 0% | 14.7 | 14% (16/14) | – | 243/1%/1% | 353/5%/3% |
| Tastemaker (yellow) | MIXED | 774 | 25% | 2% | 2% | 31% | 0% | 0% | 11.8 | 10% (15/4) | – | 205/5%/2% | 569/1%/2% |
| Debt Collectors (silver) | MIXED | 526 | 42% | 10% | 2% | 59% | 2% | 0% | 10.3 | 21% (41/5) | – | 201/18%/1% | 325/4%/2% |
| Gift Wrapper (silver) | MIXED | 1078 | 30% | 1% | 2% | 19% | 0% | 0% | 12.6 | 8% (13/12) | – | 261/2%/2% | 817/1%/2% |
| Hangers-On (silver) | MIXED | 741 | 40% | 2% | 2% | 25% | 0% | 0% | 12.3 | 6% (10/8) | – | 276/2%/0% | 465/2%/2% |
| Proselytizers (red) | MIXED | 655 | 34% | 3% | 1% | 37% | 0% | 0% | 13.0 | 14% (15/16) | – | 270/2%/0% | 385/3%/2% |
| Patroness (market) | MIXED | 587 | 18% | 1% | 1% | 29% | 0% | 0% | 13.7 | 10% (6/5) | – | 182/1%/2% | 405/1%/1% |
| Customs (yellow) | MIXED | 1002 | 27% | 2% | 1% | 47% | 0% | 0% | 12.3 | 11% (16/13) | 217/0%/0% | 254/5%/3% | 531/1%/1% |
| Hoarder (trading) | MIXED | 808 | 22% | 1% | 1% | 0% | 0% | 0% | 14.7 | 3% (5/1) | – | 206/1%/0% | 602/0%/1% |
| Smooth Talkers (silver) | MIXED | 588 | 35% | 2% | 1% | 18% | 0% | 0% | 13.1 | 6% (7/6) | – | 169/2%/1% | 419/2%/0% |
| Wallflower (echo) | MIXED | 493 | 14% | 1% | 0% | 40% | 0% | 0% | 15.1 | 9% (5/1) | – | 135/0%/0% | 358/1%/1% |
| Old Maid (benders) | DEAD | 3072 | 0% | 0% | 0% | – | – | – | 11.7 | 0% (0/0) | – | 1149/0%/0% | 1923/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Anarchist (benders) | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 34/0%/0% |
| Polisher (silver) | DEAD | 186 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 47/0%/0% | 107/0%/0% | 32/0%/0% |
| Scouts (benders) | DEAD | 2294 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 127/0%/0% | 624/0%/0% | 1543/0%/0% |
| Hot Streak (purple) | DEAD | 129 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 49/0%/0% | 80/0%/0% |
| Debutantes (silver) | DEAD | 82 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 41/0%/0% | 41/0%/0% |
| Extra Hand (benders) | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 38/0%/0% | 10/0%/0% |
| Party Crasher (benders) | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 23/0%/0% | 15/0%/0% | 1/0%/0% |
| Raiders (trading) | DEAD | 140 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 36/0%/0% | 104/0%/0% |
| Tribute Band (echo) | DEAD | 100 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 80/0%/0% |
| Hoarder (trading) | THIN DATA | 2 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 1/0%/0% |
| Heiresses (trading) | THIN DATA | 4 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | – |
| Debt Collectors (silver) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 5/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Cutpurse (3) | REAL CHOICE | 38 | 89% | 37% | 58% | 21% | 0% | 100% | 4.6 | 32% (1/10) | – | 18/50%/44% | 20/25%/70% |
| choose member:Dabblers (3) | REAL CHOICE | 44 | 100% | 36% | 57% | 13% | 0% | 100% | 3.8 | 23% (4/6) | – | 14/36%/43% | 30/37%/63% |
| choose member:Accomplice (3) | REAL CHOICE | 30 | 90% | 37% | 57% | 18% | 0% | 100% | 4.4 | 19% (2/3) | – | 13/62%/54% | 17/18%/59% |
| choose member:Triplets (3) | REAL CHOICE | 15 | 87% | 0% | 53% | – | – | – | 2.2 | 0% (0/0) | – | 4/0%/50% | 11/0%/55% |
| choose member:Deprogrammers (3) | REAL CHOICE | 32 | 84% | 25% | 53% | 0% | 13% | 100% | 5.3 | 15% (2/2) | – | 15/20%/33% | 17/29%/71% |
| choose member:Scouts (3) | REAL CHOICE | 45 | 98% | 29% | 47% | 15% | 0% | 100% | 4.2 | 27% (3/9) | – | 23/35%/39% | 22/23%/55% |
| choose member:Recluse (4) | REAL CHOICE | 18 | 100% | 17% | 44% | 0% | 0% | 100% | 3.8 | 28% (2/3) | – | 2/0%/50% | 16/19%/44% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 21 | 95% | 33% | 38% | 14% | 0% | 100% | 6.0 | 25% (4/1) | – | 4/25%/0% | 17/35%/47% |
| choose member:Agents (3) | REAL CHOICE | 26 | 100% | 27% | 35% | 14% | 0% | 100% | 5.5 | 27% (4/3) | – | 14/21%/36% | 12/33%/33% |
| choose member:Kingpin (4) | REAL CHOICE | 30 | 97% | 30% | 33% | 33% | 0% | 100% | 5.3 | 24% (4/3) | – | 12/50%/33% | 18/17%/33% |
| choose member:Roadie (3) | REAL CHOICE | 16 | 100% | 56% | 31% | 44% | 22% | 100% | 5.2 | 29% (1/3) | – | 10/70%/30% | 6/33%/33% |
| choose member:Busker (4) | REAL CHOICE | 34 | 100% | 44% | 26% | 33% | 0% | 100% | 9.0 | 35% (4/8) | – | 20/55%/30% | 14/29%/21% |
| choose member:Alchemists (5) | REAL CHOICE | 21 | 100% | 33% | 24% | 14% | 0% | 100% | 10.7 | 24% (4/1) | – | 3/67%/33% | 18/28%/22% |
| choose member:Line Cutters (2) | REAL CHOICE | 48 | 100% | 48% | 23% | 48% | 4% | 100% | 5.8 | 47% (10/12) | – | 22/50%/5% | 26/46%/38% |
| trade:P1: Fan Club ↔ P4: Stunt Double | REAL CHOICE | 15 | 20% | 20% | 20% | 0% | 0% | 0% | – | 33% (1/0) | – | 2/50%/50% | 13/15%/15% |
| choose member:Line Cutters | REAL CHOICE | 17 | 59% | 35% | 18% | 33% | 0% | 100% | 7.6 | 30% (1/2) | – | 9/44%/22% | 8/25%/13% |
| trade:P3: Deprogrammers ↔ P1: Cutpurse | REAL CHOICE | 15 | 27% | 0% | 13% | – | – | – | 3.9 | 0% (0/0) | – | 4/0%/25% | 11/0%/9% |
| trade:P2: Scouts ↔ P4: Deprogrammers | REAL CHOICE | 16 | 19% | 13% | 13% | 0% | 0% | 0% | 6.8 | 67% (1/1) | – | 2/0%/0% | 14/14%/14% |
| trade:P4: Deprogrammers ↔ P2: Scouts | REAL CHOICE | 16 | 19% | 0% | 13% | – | – | – | 2.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/14% |
| trade:P1: Deprogrammers ↔ P3: Volunteer | REAL CHOICE | 17 | 24% | 18% | 12% | 33% | 0% | 0% | 9.5 | 50% (1/1) | – | 11/9%/0% | 6/33%/33% |
| trade:P1: Cutpurse ↔ P3: Deprogrammers | REAL CHOICE | 17 | 24% | 18% | 12% | 0% | 0% | 0% | 15.6 | 25% (1/0) | – | 5/20%/20% | 12/17%/8% |
| trade:P1: Deprogrammers ↔ P2: Scouts | REAL CHOICE | 17 | 24% | 12% | 12% | 0% | 0% | 0% | 11.6 | 50% (2/0) | – | 9/22%/22% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Deprogrammers | REAL CHOICE | 17 | 35% | 6% | 12% | 0% | 0% | 0% | 9.0 | 17% (1/0) | – | 6/17%/17% | 11/0%/9% |
| followers:small | REAL CHOICE | 12575 | 55% | 13% | 11% | 27% | 0% | 7% | 9.8 | 24% (1246/406) | 3134/16%/16% | 4105/17%/14% | 5336/8%/6% |
| pass:Pass | REAL CHOICE | 12575 | 54% | 19% | 11% | 48% | 7% | 12% | 8.8 | 27% (1157/626) | 3134/44%/17% | 4105/19%/14% | 5336/5%/5% |
| choose member:P4's Kingpin (4) | REAL CHOICE | 18 | 39% | 17% | 11% | 0% | 0% | 100% | 12.5 | 43% (2/1) | – | 3/0%/33% | 15/20%/7% |
| trade:P4: Deprogrammers ↔ P1: Volunteer | REAL CHOICE | 18 | 22% | 0% | 11% | – | – | – | 6.9 | 50% (0/2) | – | 8/0%/25% | 10/0%/0% |
| choose member:HR | AUTO-PICK | 18 | 100% | 72% | 22% | 69% | 54% | 100% | 9.7 | 18% (1/1) | – | 6/67%/17% | 12/75%/25% |
| choose member:Fan Club | AUTO-PICK | 16 | 88% | 50% | 19% | 50% | 13% | 100% | 9.4 | 38% (1/4) | – | 5/60%/0% | 11/45%/27% |
| choose member:Party Crasher (4) | AUTO-PICK + MISJUDGED | 17 | 88% | 65% | 18% | 64% | 0% | 100% | 4.6 | 67% (10/0) | – | 5/100%/0% | 12/50%/25% |
| choose member:Shopkeeper (4) | AUTO-PICK | 18 | 83% | 33% | 17% | 50% | 0% | 100% | 7.3 | 40% (3/3) | – | 11/36%/0% | 7/29%/43% |
| choose member:Busker | AUTO-PICK | 19 | 47% | 16% | 16% | 100% | 0% | 100% | 4.8 | 22% (1/1) | – | 11/27%/9% | 8/0%/25% |
| choose member:P2's Fan Club (6) | AUTO-PICK | 17 | 76% | 24% | 12% | 50% | 50% | 100% | 6.9 | 27% (0/3) | – | 1/100%/0% | 16/19%/13% |
| choose member:Roadie | AUTO-PICK | 26 | 88% | 46% | 12% | 92% | 25% | 100% | 6.1 | 35% (2/5) | – | 16/63%/13% | 10/20%/10% |
| choose member:P4's Dabblers (3) | AUTO-PICK | 18 | 39% | 11% | 6% | 50% | 0% | 100% | 12.9 | 14% (1/0) | – | 3/33%/0% | 15/7%/7% |
| choose member:P1's Panel (7) | AUTO-PICK | 18 | 39% | 11% | 6% | 100% | 0% | 100% | 12.9 | 29% (0/2) | – | – | 18/11%/6% |
| choose member:P1's Con Men (7) | AUTO-PICK + MISJUDGED | 37 | 43% | 16% | 5% | 83% | 0% | 100% | 6.8 | 50% (3/5) | – | 5/40%/20% | 32/13%/3% |
| choose member:P1's HR (10) | AUTO-PICK | 19 | 84% | 42% | 5% | 75% | 75% | 100% | 14.7 | 40% (1/3) | – | – | 19/42%/5% |
| choose member:P4's Window Dressers (4) | AUTO-PICK | 19 | 42% | 11% | 5% | 50% | 0% | 100% | 13.4 | 13% (1/0) | – | 3/0%/0% | 16/13%/6% |
| choose member:P3's Con Men (7) | AUTO-PICK | 30 | 60% | 17% | 3% | 80% | 0% | 100% | 11.3 | 22% (1/3) | – | 3/33%/0% | 27/15%/4% |
| choose member:P4's Con Men (7) | AUTO-PICK | 41 | 46% | 15% | 2% | 67% | 0% | 100% | 12.8 | 16% (0/3) | – | 5/80%/20% | 36/6%/0% |
| choose member:P4's HR (10) | AUTO-PICK | 20 | 95% | 65% | 0% | 77% | 46% | 100% | 6.2 | 46% (3/3) | – | 5/60%/0% | 15/67%/0% |
| choose member:P3's Fan Club (6) | AUTO-PICK | 15 | 60% | 40% | 0% | 83% | 33% | 100% | 26.4 | 57% (2/2) | – | 1/100%/0% | 14/36%/0% |
| choose member:P1's Roadie (3) | AUTO-PICK | 25 | 28% | 20% | 0% | 100% | 40% | 100% | 17.1 | 0% (0/0) | – | 3/0%/0% | 22/23%/0% |
| choose member:P4's Panel (7) | AUTO-PICK + MISJUDGED | 21 | 52% | 19% | 0% | 50% | 0% | 100% | 8.7 | 55% (1/5) | – | 4/25%/0% | 17/18%/0% |
| choose member:P2's Roadie (3) | AUTO-PICK | 24 | 58% | 17% | 0% | 75% | 25% | 100% | 13.9 | 31% (2/2) | – | 2/50%/0% | 22/14%/0% |
| choose member:P1's Fan Club (6) | AUTO-PICK | 18 | 56% | 17% | 0% | 100% | 33% | 100% | 20.2 | 11% (0/1) | – | – | 18/17%/0% |
| choose member:P3's Busker (4) | AUTO-PICK | 26 | 38% | 15% | 0% | 75% | 50% | 100% | 10.5 | 25% (1/1) | – | 2/50%/0% | 24/13%/0% |
| choose member:P3's Chronicler (5) | AUTO-PICK | 15 | 33% | 13% | 0% | 50% | 0% | 100% | 18.6 | 20% (1/0) | – | – | 15/13%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 15 | 60% | 13% | 0% | 100% | 0% | 100% | 14.5 | 0% (0/0) | – | 7/29%/0% | 8/0%/0% |
| choose member:P3's Grifter (8) | AUTO-PICK | 17 | 18% | 12% | 0% | 100% | 0% | 100% | 17.2 | 33% (1/0) | – | – | 17/12%/0% |
| trade:P1: Patriarch ↔ Shop: Old Maid | AUTO-PICK | 18 | 22% | 11% | 0% | 50% | 0% | 0% | 9.5 | 50% (1/1) | – | 3/33%/0% | 15/7%/0% |
| choose member:P3's Stunt Double (5) | AUTO-PICK | 18 | 22% | 11% | 0% | 100% | 100% | 100% | 6.0 | 0% (0/0) | – | 1/100%/0% | 17/6%/0% |
| choose member:P2's Busker (4) | MIXED | 21 | 38% | 10% | 10% | 0% | 0% | 100% | 21.8 | 25% (1/1) | – | 1/0%/0% | 20/10%/10% |
| trade:P4: Deprogrammers ↔ P3: Volunteer | MIXED | 21 | 14% | 5% | 10% | 0% | 0% | 0% | 11.1 | 0% (0/0) | – | 9/0%/0% | 12/8%/17% |
| trade:P3: Deprogrammers ↔ P2: Volunteer | MIXED | 23 | 30% | 4% | 9% | 0% | 0% | 0% | 10.6 | 43% (0/3) | – | 9/0%/0% | 14/7%/14% |
| trade:P2: Roadie ↔ P4: Deprogrammers | MIXED | 24 | 29% | 4% | 8% | 0% | 0% | 0% | 5.2 | 29% (0/2) | – | 10/0%/0% | 14/7%/14% |
| trade:P1: Scouts ↔ P2: Deprogrammers | MIXED | 25 | 24% | 4% | 8% | 0% | 0% | 100% | 16.6 | 17% (0/1) | – | 6/17%/17% | 19/0%/5% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | MIXED | 25 | 8% | 4% | 8% | 0% | 0% | 0% | 0.5 | 0% (0/0) | – | 11/0%/0% | 14/7%/14% |
| choose member:P4's Line Cutters (2) | MIXED | 40 | 25% | 8% | 8% | 0% | 0% | 100% | 10.6 | 30% (3/0) | – | 3/0%/0% | 37/8%/8% |
| followers:mid | MIXED | 11465 | 44% | 7% | 7% | 18% | 0% | 2% | 8.8 | 17% (595/259) | 2072/0%/1% | 4072/4%/4% | 5321/12%/11% |
| choose member:P1's Loyalists (5) | MIXED | 15 | 47% | 20% | 7% | 33% | 0% | 100% | 5.0 | 57% (3/1) | – | 1/100%/0% | 14/14%/7% |
| trade:P4: Dabblers ↔ Shop: Triplets | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/50%/50% | 13/0%/0% |
| trade:P1: Connoisseurs ↔ P4: Deprogrammers | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/25% | 11/0%/0% |
| choose member:P2's Connoisseurs (4) | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 100% | 8.3 | 50% (1/0) | – | 1/0%/0% | 14/7%/7% |
| trade:P1: Deprogrammers ↔ P3: Roadie | MIXED | 15 | 20% | 7% | 7% | 0% | 0% | 0% | 3.2 | 67% (1/1) | – | 10/10%/10% | 5/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Accomplice | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/0%/0% | 9/11%/11% |
| trade:P3: Accomplice ↔ P1: Deprogrammers | MIXED | 15 | 20% | 0% | 7% | – | – | – | 6.5 | 0% (0/0) | – | 10/0%/0% | 5/0%/20% |
| trade:P3: Deprogrammers ↔ P1: Roadie | MIXED | 15 | 20% | 0% | 7% | – | – | – | 16.8 | 0% (0/0) | – | 6/0%/0% | 9/0%/11% |
| trade:P1: Dabblers ↔ P2: Early Birds | MIXED | 15 | 13% | 0% | 7% | – | – | – | 2.0 | 100% (0/2) | – | 4/0%/25% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Gardener | MIXED | 15 | 20% | 0% | 7% | – | – | – | 6.9 | 0% (0/0) | – | 7/0%/0% | 8/0%/13% |
| choose member:P1's Dabblers (3) | MIXED | 31 | 32% | 3% | 6% | 0% | 0% | 100% | 9.4 | 10% (1/0) | – | 3/0%/0% | 28/4%/7% |
| followers:top | MIXED | 9224 | 35% | 16% | 6% | 24% | 0% | 1% | 8.2 | 28% (294/627) | 343/0%/0% | 3658/1%/1% | 5223/27%/11% |
| trade:P1: Panel ↔ Shop: Old Maid | MIXED | 16 | 13% | 13% | 6% | 0% | 0% | 0% | – | 100% (2/0) | – | 8/13%/13% | 8/13%/0% |
| trade:P1: Deprogrammers ↔ P3: Accomplice | MIXED | 16 | 19% | 6% | 6% | 0% | 0% | 0% | 10.7 | 33% (1/0) | – | 10/0%/0% | 6/17%/17% |
| trade:P1: Deprogrammers ↔ P3: Dabblers | MIXED | 16 | 31% | 6% | 6% | 0% | 0% | 0% | 14.7 | 20% (1/0) | – | 13/8%/8% | 3/0%/0% |
| trade:P2: Loyalists ↔ P4: Stunt Double | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 33.0 | 50% (1/0) | – | 5/0%/0% | 11/9%/9% |
| trade:P2: Accomplice ↔ P4: Gardener | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 9.1 | 50% (1/0) | – | 6/17%/17% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Volunteer | MIXED | 16 | 19% | 0% | 6% | – | – | – | 3.4 | 0% (0/0) | – | 7/0%/0% | 9/0%/11% |
| trade:P2: Accomplice ↔ P1: Volunteer | MIXED | 16 | 13% | 0% | 6% | – | – | – | 6.7 | 0% (0/0) | – | 6/0%/17% | 10/0%/0% |
| trade:P4: Loyalists ↔ P2: Dabblers | MIXED | 16 | 13% | 0% | 6% | – | – | – | 0.8 | 0% (0/0) | – | 3/0%/33% | 13/0%/0% |
| trade:P1: Roadie ↔ P3: Deprogrammers | MIXED | 17 | 24% | 12% | 6% | 0% | 0% | 0% | 25.1 | 50% (1/1) | – | 6/0%/0% | 11/18%/9% |
| trade:P2: Deprogrammers ↔ P4: Cutpurse | MIXED | 17 | 18% | 6% | 6% | 0% | 0% | 0% | 5.4 | 0% (0/0) | – | 5/0%/0% | 12/8%/8% |
| trade:P2: Deprogrammers ↔ P4: Gardener | MIXED | 17 | 35% | 6% | 6% | 0% | 0% | 0% | 9.5 | 17% (1/0) | – | 4/0%/0% | 13/8%/8% |
| trade:P2: Dabblers ↔ P4: Triplets | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 100% | – | 100% (1/0) | – | 5/20%/20% | 12/0%/0% |
| trade:P1: Roadie ↔ P2: Scouts | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 100% | – | 0% (0/0) | – | 7/14%/14% | 10/0%/0% |
| trade:P2: Window Dressers ↔ P4: Scouts | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 3/33%/33% | 14/0%/0% |
| trade:P4: Line Cutters ↔ P3: Volunteer | MIXED | 17 | 12% | 0% | 6% | – | – | – | 24.1 | 0% (0/0) | – | 5/0%/20% | 12/0%/0% |
| choose member:P4's Shopkeeper (4) | MIXED | 17 | 35% | 0% | 6% | – | – | – | 5.4 | 0% (0/0) | – | 2/0%/50% | 15/0%/0% |
| trade:P1: Loyalists ↔ P3: Stunt Double | MIXED | 17 | 24% | 0% | 6% | – | – | – | 7.7 | 25% (0/1) | – | 2/0%/0% | 15/0%/7% |
| trade:P4: Scouts ↔ P1: Deprogrammers | MIXED | 17 | 12% | 0% | 6% | – | – | – | 11.5 | 0% (0/0) | – | 6/0%/17% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Cutpurse | MIXED | 17 | 18% | 0% | 6% | – | – | – | 1.9 | 0% (0/0) | – | 2/0%/0% | 15/0%/7% |
| trade:P4: Recruit Bonus ↔ P1: Deprogrammers | MIXED | 17 | 18% | 0% | 6% | – | – | – | 8.1 | 0% (0/0) | – | 9/0%/11% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | MIXED | 17 | 18% | 0% | 6% | – | – | – | 6.6 | 0% (0/0) | – | 5/0%/20% | 12/0%/0% |
| trade:P1: Dabblers ↔ P3: Volunteer | MIXED | 17 | 24% | 0% | 6% | – | – | – | 5.8 | 50% (0/2) | – | 5/0%/0% | 12/0%/8% |
| trade:P1: Gardener ↔ P3: Volunteer | MIXED | 18 | 22% | 11% | 6% | 0% | 0% | 50% | 20.1 | 0% (0/0) | – | 6/17%/0% | 12/8%/8% |
| trade:P3: Shopkeeper ↔ P1: Deprogrammers | MIXED | 18 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 11/9%/9% |
| trade:P1: Deprogrammers ↔ P4: Recruit Bonus | MIXED | 18 | 17% | 6% | 6% | 0% | 0% | 100% | 12.2 | 33% (0/1) | – | 10/10%/10% | 8/0%/0% |
| choose member:P3's Line Cutters (2) | MIXED | 56 | 34% | 5% | 5% | 33% | 0% | 100% | 8.1 | 16% (2/1) | – | 4/0%/0% | 52/6%/6% |
| trade:P2: Scouts ↔ P3: Deprogrammers | MIXED | 19 | 11% | 5% | 5% | 0% | 0% | 0% | 15.6 | 50% (1/0) | – | 4/0%/0% | 15/7%/7% |
| trade:P2: Triplets ↔ P3: Volunteer | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/20% | 14/0%/0% |
| trade:P1: Dabblers ↔ P2: Volunteer | MIXED | 19 | 26% | 5% | 5% | 0% | 0% | 0% | 21.9 | 20% (1/0) | – | 5/20%/20% | 14/0%/0% |
| trade:P2: Accomplice ↔ Shop: Triplets | MIXED | 19 | 11% | 5% | 5% | 0% | 0% | 0% | 39.6 | 0% (0/0) | – | 8/0%/0% | 11/9%/9% |
| trade:P2: Loyalists ↔ P4: Scouts | MIXED | 19 | 16% | 5% | 5% | 0% | 0% | 0% | 19.5 | 33% (1/0) | – | – | 19/5%/5% |
| trade:P2: Deprogrammers ↔ P1: Scouts | MIXED | 19 | 16% | 0% | 5% | – | – | – | 6.2 | 0% (0/0) | – | 5/0%/0% | 14/0%/7% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | MIXED | 19 | 11% | 0% | 5% | – | – | – | 8.3 | 0% (0/0) | – | 9/0%/11% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Volunteer | MIXED | 19 | 21% | 0% | 5% | – | – | – | 11.1 | 25% (0/1) | – | 8/0%/0% | 11/0%/9% |
| choose member:P3's Alchemists (5) | MIXED | 19 | 63% | 0% | 5% | – | – | – | 10.6 | 0% (0/0) | – | 2/0%/0% | 17/0%/6% |
| trade:P2: Cutpurse ↔ P3: Deprogrammers | MIXED | 19 | 21% | 0% | 5% | – | – | – | 11.7 | 0% (0/0) | – | 3/0%/0% | 16/0%/6% |
| trade:P1: Roadie ↔ P4: Deprogrammers | MIXED | 20 | 10% | 5% | 5% | 0% | 0% | 0% | 22.4 | 50% (1/0) | – | 7/0%/0% | 13/8%/8% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | MIXED | 20 | 10% | 0% | 5% | – | – | – | 10.1 | 0% (0/0) | – | 7/0%/0% | 13/0%/8% |
| trade:P1: Dabblers ↔ P4: Triplets | MIXED | 21 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/25% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 22 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/9%/9% | 11/0%/0% |
| trade:P4: Loyalists ↔ Shop: Old Maid | MIXED | 22 | 18% | 5% | 5% | 0% | 0% | 0% | 6.0 | 50% (0/2) | – | 1/0%/0% | 21/5%/5% |
| trade:P3: Dabblers ↔ P2: Line Cutters | MIXED | 22 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/0%/0% | 16/6%/6% |
| trade:P3: Deprogrammers ↔ P2: Accomplice | MIXED | 23 | 13% | 0% | 4% | – | – | – | 5.0 | 0% (0/0) | – | 5/0%/0% | 18/0%/6% |
| trade:P3: Line Cutters ↔ P4: Volunteer | MIXED | 25 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 10/0%/0% | 15/7%/7% |
| trade:P2: Muse ↔ P3: Deprogrammers | MIXED | 26 | 15% | 0% | 4% | – | – | – | 17.5 | 0% (0/0) | – | 5/0%/0% | 21/0%/5% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | MIXED | 26 | 15% | 0% | 4% | – | – | – | 10.8 | 0% (0/0) | – | 12/0%/0% | 14/0%/7% |
| trade:P2: Deprogrammers ↔ P1: Volunteer | MIXED | 27 | 37% | 7% | 4% | 0% | 0% | 0% | 13.6 | 20% (0/2) | – | 11/9%/0% | 16/6%/6% |
| trade:P1: Roadie ↔ P2: Deprogrammers | MIXED | 27 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 16/6%/6% | 11/0%/0% |
| trade:P4: Triplets ↔ P2: Volunteer | MIXED | 28 | 11% | 0% | 4% | – | – | – | 5.0 | 0% (0/0) | – | 10/0%/0% | 18/0%/6% |
| trade:P2: Accomplice ↔ P3: Deprogrammers | MIXED | 28 | 25% | 0% | 4% | – | – | – | 10.4 | 0% (0/0) | – | 7/0%/0% | 21/0%/5% |
| trade:P1: Con Men ↔ Shop: Old Maid | MIXED | 29 | 14% | 7% | 3% | 50% | 0% | 0% | 33.7 | 50% (2/0) | – | 6/17%/0% | 23/4%/4% |
| trade:P2: Deprogrammers ↔ P3: Volunteer | MIXED | 29 | 21% | 3% | 3% | 0% | 0% | 0% | 8.7 | 33% (0/2) | – | 10/0%/0% | 19/5%/5% |
| trade:P2: Scouts ↔ P4: Triplets | MIXED | 29 | 3% | 3% | 3% | 0% | 0% | 0% | – | 0% (0/0) | – | 8/13%/13% | 21/0%/0% |
| trade:P4: Scouts ↔ P3: Deprogrammers | MIXED | 30 | 7% | 3% | 3% | 0% | 0% | 0% | 25.8 | 50% (1/0) | – | 7/14%/14% | 23/0%/0% |
| trade:P4: Con Men ↔ Shop: Old Maid | MIXED | 35 | 17% | 6% | 3% | 0% | 0% | 0% | 17.6 | 67% (2/2) | – | 12/8%/0% | 23/4%/4% |
| choose member:P2's Scouts (3) | MIXED | 35 | 14% | 0% | 3% | – | – | – | 6.0 | 0% (0/0) | – | 4/0%/0% | 31/0%/3% |
| choose member:P4's Agents (3) | MIXED | 35 | 11% | 0% | 3% | – | – | – | 7.6 | 0% (0/0) | – | 5/0%/0% | 30/0%/3% |
| choose member:P4's Scouts (3) | MIXED | 37 | 11% | 0% | 3% | – | – | – | 8.6 | 0% (0/0) | – | 6/0%/0% | 31/0%/3% |
| trade:P2: Deprogrammers ↔ P3: Recruit Bonus | MIXED | 42 | 14% | 0% | 2% | – | – | – | 17.2 | 17% (0/1) | – | 21/0%/0% | 21/0%/5% |
| trade:P2: Alchemists ↔ Shop: Old Maid | MIXED | 26 | 19% | 8% | 0% | 100% | 0% | 0% | 11.0 | 20% (1/0) | – | 3/0%/0% | 23/9%/0% |
| trade:P2: Deprogrammers ↔ P4: Volunteer | MIXED | 27 | 26% | 7% | 0% | 50% | 0% | 0% | 19.8 | 43% (1/2) | – | 7/0%/0% | 20/10%/0% |
| trade:P1: Deprogrammers ↔ P2: Line Cutters | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 6/0%/0% |
| trade:P2: Cutpurse ↔ P3: Volunteer | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 18.6 | 0% (0/0) | – | 6/17%/0% | 9/0%/0% |
| trade:P4: Triplets ↔ Shop: Recruit Bonus | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 15.1 | 50% (1/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Scouts | MIXED | 15 | 7% | 7% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Dabblers | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 6.5 | 50% (1/0) | – | 2/0%/0% | 13/8%/0% |
| trade:P4: Busker ↔ P2: Roadie | MIXED | 15 | 20% | 7% | 0% | 100% | 0% | 0% | 36.5 | 33% (1/0) | – | 9/11%/0% | 6/0%/0% |
| trade:P4: Drifters ↔ P1: Volunteer | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Roadie | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | -8.2 | 50% (1/0) | – | 8/0%/0% | 7/14%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | MIXED | 15 | 27% | 7% | 0% | 0% | 0% | 0% | 16.5 | 25% (1/0) | – | 4/0%/0% | 11/9%/0% |
| trade:P2: Gardener ↔ Shop: Old Maid | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 3/33%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 16 | 25% | 6% | 0% | 0% | 0% | 0% | 5.8 | 0% (0/0) | – | 4/25%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Cutpurse | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 1.0 | 50% (1/0) | – | 4/25%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Desperado | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P2: Gardener ↔ P4: Scouts | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 9.7 | 50% (1/0) | – | 4/0%/0% | 12/8%/0% |
| trade:P2: Caravan ↔ P3: Con Men | MIXED | 16 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P2: Busker ↔ P4: Scouts | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 11/0%/0% |
| trade:P4: Party Crasher ↔ P2: Triplets | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 2/50%/0% | 16/0%/0% |
| trade:P1: Loyalists ↔ Shop: Old Maid | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 19.4 | 50% (1/0) | – | 2/0%/0% | 16/6%/0% |
| trade:P1: Line Cutters ↔ P3: Volunteer | MIXED | 19 | 16% | 5% | 0% | 100% | 0% | 0% | 10.9 | 33% (1/0) | – | 5/0%/0% | 14/7%/0% |
| trade:P2: Accomplice ↔ P3: Volunteer | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 2.1 | 50% (1/0) | – | 7/14%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P4: Dabblers | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 19/5%/0% |
| trade:P3: Deprogrammers ↔ Shop: Cashier | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 18.1 | 0% (0/0) | – | 10/10%/0% | 10/0%/0% |
| trade:P2: Alchemists ↔ P1: Scouts | MIXED | 21 | 10% | 5% | 0% | 0% | 0% | 0% | 8.5 | 0% (0/0) | – | 4/0%/0% | 17/6%/0% |
| trade:P1: Deprogrammers ↔ P2: Triplets | MIXED | 21 | 10% | 5% | 0% | 0% | 0% | 0% | 2.5 | 0% (0/0) | – | 11/0%/0% | 10/10%/0% |
| trade:P2: Roadie ↔ P4: Recruit Bonus | MIXED | 22 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Triplets | MIXED | 23 | 9% | 4% | 0% | 0% | 0% | 0% | 27.8 | 50% (1/0) | – | 13/0%/0% | 10/10%/0% |
| trade:P4: Busker ↔ P2: Deprogrammers | MIXED | 23 | 9% | 4% | 0% | 100% | 0% | 0% | 20.3 | 0% (0/0) | – | 14/0%/0% | 9/11%/0% |
| trade:P3: Triplets ↔ P4: Deprogrammers | MIXED | 24 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Old Maid | MIXED | 24 | 17% | 4% | 0% | 0% | 0% | 0% | 21.9 | 25% (1/0) | – | 9/0%/0% | 15/7%/0% |
| trade:P2: Con Men ↔ Shop: Old Maid | MIXED | 24 | 8% | 4% | 0% | 0% | 0% | 0% | 21.1 | 0% (0/0) | – | 9/11%/0% | 15/0%/0% |
| trade:P2: Scouts ↔ Shop: Triplets | MIXED | 25 | 8% | 4% | 0% | 100% | 0% | 0% | 32.0 | 50% (1/0) | – | 7/14%/0% | 18/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | MIXED | 26 | 8% | 4% | 0% | 0% | 0% | 0% | 14.6 | 0% (0/0) | – | 8/13%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Line Cutters | MIXED | 28 | 11% | 4% | 0% | 100% | 0% | 0% | 18.8 | 0% (0/0) | – | 12/8%/0% | 16/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Volunteer | MIXED | 30 | 7% | 3% | 0% | 0% | 0% | 0% | 25.3 | 50% (1/0) | – | 7/0%/0% | 23/4%/0% |
| trade:P1: Roadie ↔ P3: Volunteer | MIXED | 32 | 6% | 3% | 0% | 100% | 100% | 0% | 32.5 | 0% (0/0) | – | 15/7%/0% | 17/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED | 39 | 10% | 3% | 0% | 100% | 0% | 0% | 5.5 | 25% (0/1) | – | 21/5%/0% | 18/0%/0% |
| trade:P1: Courier ↔ Shop: Closer | MIXED | 19 | 11% | 0% | 0% | – | – | – | 11.2 | 0% (0/0) | – | – | 19/0%/0% |
| choose member:P1's Window Dressers (4) | MIXED | 18 | 50% | 0% | 0% | – | – | – | 11.3 | 11% (0/1) | – | – | 18/0%/0% |
| choose member:P2's Kingpin (4) | MIXED | 42 | 26% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 2/0%/0% | 40/0%/0% |
| trade:P2: Polisher ↔ P4: Line Cutters | MIXED | 15 | 13% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Party Crasher ↔ P4: Drifters | MIXED | 17 | 12% | 0% | 0% | – | – | – | 16.9 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| choose member:P1's Recruit Bonus (3) | MIXED | 19 | 21% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 2/0%/0% | 17/0%/0% |
| choose member:P1's Scouts (3) | MIXED | 23 | 17% | 0% | 0% | – | – | – | 16.5 | 0% (0/0) | – | 3/0%/0% | 20/0%/0% |
| choose member:P1's Party Crasher (4) | MIXED | 30 | 13% | 0% | 0% | – | – | – | 3.8 | 0% (0/0) | – | 3/0%/0% | 27/0%/0% |
| trade:P1: Volunteer ↔ P3: Line Cutters | MIXED | 18 | 11% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Line Cutters ↔ P1: Volunteer | MIXED | 36 | 11% | 0% | 0% | – | – | – | 15.9 | 25% (0/1) | – | 17/0%/0% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Line Cutters | MIXED | 16 | 19% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ P3: Gardener | MIXED | 19 | 21% | 0% | 0% | – | – | – | 11.9 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Gardener ↔ P1: Dabblers | MIXED | 15 | 20% | 0% | 0% | – | – | – | 8.6 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Caravan ↔ Shop: Harmonist | MIXED | 15 | 13% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | MIXED | 17 | 12% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P3: Volunteer | MIXED | 27 | 15% | 0% | 0% | – | – | – | 11.5 | 25% (0/1) | – | 14/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P2: Deprogrammers | MIXED | 26 | 12% | 0% | 0% | – | – | – | 20.1 | 0% (0/0) | – | 9/0%/0% | 17/0%/0% |
| choose member:P2's Party Crasher (4) | MIXED | 24 | 13% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Line Cutters | MIXED | 19 | 16% | 0% | 0% | – | – | – | 25.1 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P2: Accomplice | MIXED | 16 | 19% | 0% | 0% | – | – | – | 9.7 | 33% (0/1) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Triplets | MIXED | 27 | 15% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 4/0%/0% | 23/0%/0% |
| trade:P3: Fan Club ↔ Shop: Old Maid | MIXED | 20 | 10% | 0% | 0% | – | – | – | 18.5 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Fan Club ↔ Shop: Old Maid | MIXED | 18 | 11% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | MIXED | 18 | 11% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ P1: Roadie | MIXED | 20 | 10% | 0% | 0% | – | – | – | 5.0 | 50% (0/1) | – | 12/0%/0% | 8/0%/0% |
| choose member:P2's Recruit Bonus (3) | MIXED | 27 | 11% | 0% | 0% | – | – | – | 17.5 | 0% (0/0) | – | – | 27/0%/0% |
| choose member:P2's Line Cutters (2) | MIXED | 39 | 10% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 7/0%/0% | 32/0%/0% |
| choose member:P3's Agents (3) | MIXED | 33 | 18% | 0% | 0% | – | – | – | 17.9 | 17% (0/1) | – | 4/0%/0% | 29/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Recruit Bonus | MIXED | 16 | 13% | 0% | 0% | – | – | – | 11.2 | 0% (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P4: Alchemists ↔ P1: Cutpurse | MIXED | 15 | 13% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| choose member:P3's Sticky Fingers (4) | MIXED | 16 | 19% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P3's Extortionist (7) | MIXED | 22 | 36% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P2: Accomplice ↔ P3: Polisher | MIXED | 16 | 13% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Trendsetters ↔ P3: Line Cutters | MIXED | 15 | 27% | 0% | 0% | – | – | – | 7.0 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Cutpurse ↔ P2: Volunteer | MIXED | 15 | 20% | 0% | 0% | – | – | – | 18.4 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Line Cutters ↔ P2: Volunteer | MIXED | 19 | 11% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P2: Volunteer | MIXED | 15 | 13% | 0% | 0% | – | – | – | 31.3 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Accomplice | MIXED | 26 | 19% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 16/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Line Cutters | MIXED | 19 | 21% | 0% | 0% | – | – | – | 11.2 | 25% (0/1) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Accomplice ↔ P1: Deprogrammers | MIXED | 25 | 16% | 0% | 0% | – | – | – | 12.6 | 0% (0/0) | – | 16/0%/0% | 9/0%/0% |
| choose member:P2's Extortionist (7) | MIXED | 16 | 50% | 0% | 0% | – | – | – | 9.3 | 25% (0/2) | – | – | 16/0%/0% |
| choose member:P1's Stunt Double (5) | MIXED | 16 | 25% | 0% | 0% | – | – | – | 6.5 | 25% (0/1) | – | – | 16/0%/0% |
| choose member:P2's Cutpurse (3) | MIXED | 30 | 13% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | MIXED | 19 | 16% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P4: Scouts | MIXED | 15 | 13% | 0% | 0% | – | – | – | 18.9 | 50% (0/1) | – | – | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Deprogrammers | MIXED | 33 | 12% | 0% | 0% | – | – | – | 17.3 | 0% (0/0) | – | 8/0%/0% | 25/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Volunteer | MIXED | 22 | 18% | 0% | 0% | – | – | – | 10.9 | 25% (0/1) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Patriarch ↔ Shop: Old Maid | MIXED | 22 | 14% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Loyalists ↔ P4: Recruit Bonus | MIXED | 16 | 19% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P3: Deprogrammers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Old Maid | MIXED | 17 | 12% | 0% | 0% | – | – | – | 12.0 | 50% (0/1) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Deprogrammers | MIXED | 26 | 12% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 11/0%/0% | 15/0%/0% |
| choose member:P2's Alchemists (5) | MIXED | 15 | 60% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ Shop: Window Shopper | MIXED | 17 | 12% | 0% | 0% | – | – | – | 30.1 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| choose member:P3's Cutpurse (3) | MIXED | 35 | 11% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 2/0%/0% | 33/0%/0% |
| choose member:P4's Party Crasher (4) | MIXED | 21 | 19% | 0% | 0% | – | – | – | 16.5 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Scouts ↔ Shop: Cashier | MIXED | 15 | 13% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Con Men ↔ P2: Loyalists | MIXED | 16 | 13% | 0% | 0% | – | – | – | 14.5 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 20 | 10% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Triplets ↔ P3: Deprogrammers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 4.7 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P3's Anarchist (7) | MIXED | 15 | 20% | 0% | 0% | – | – | – | 26.9 | 0% (0/0) | – | – | 15/0%/0% |
| trade:P1: Exporters ↔ Shop: Old Maid | MIXED | 17 | 29% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P2: Scouts | MIXED | 16 | 19% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P1: Dabblers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Stunt Double ↔ P1: Loyalists | MIXED | 16 | 19% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Drifters ↔ P2: Gardener | MIXED | 18 | 11% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| choose member:P4's Alchemists (5) | MIXED | 17 | 35% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ P4: Volunteer | MIXED | 20 | 15% | 0% | 0% | – | – | – | 14.9 | 33% (0/1) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P3: Scouts | MIXED | 19 | 21% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Drifters ↔ P3: Volunteer | MIXED | 18 | 11% | 0% | 0% | – | – | – | 26.2 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Volunteer | FILLER | 41 | 10% | 5% | 5% | 50% | 0% | 50% | 21.4 | 25% (0/1) | – | 17/6%/6% | 24/4%/4% |
| choose member:P1's Busker (4) | FILLER | 22 | 32% | 14% | 5% | 0% | 0% | 100% | 10.0 | 57% (3/1) | – | 3/33%/0% | 19/11%/5% |
| choose member:P2's Con Men (7) | FILLER | 22 | 64% | 9% | 5% | 0% | 0% | 100% | 20.9 | 14% (2/0) | – | 1/0%/0% | 21/10%/5% |
| choose member:P3's Dabblers (3) | FILLER | 24 | 33% | 8% | 4% | 0% | 0% | 100% | 7.5 | 25% (2/0) | – | 4/0%/0% | 20/10%/5% |
| choose member:P4's Double Agent (8) | FILLER | 25 | 36% | 16% | 4% | 25% | 0% | 100% | 15.5 | 33% (3/0) | – | – | 25/16%/4% |
| trade:P1: Busker ↔ P3: Deprogrammers | FILLER | 25 | 8% | 4% | 4% | 0% | 0% | 100% | 28.8 | 50% (1/0) | – | 9/11%/11% | 16/0%/0% |
| choose member:P4's Trendsetters (4) | FILLER | 25 | 40% | 4% | 4% | 100% | 0% | 100% | 11.0 | 10% (1/0) | – | 3/0%/0% | 22/5%/5% |
| choose member:P2's Grifter (8) | FILLER | 26 | 31% | 8% | 4% | 50% | 0% | 100% | 11.2 | 13% (1/0) | – | 3/0%/0% | 23/9%/4% |
| choose member:P1's Deprogrammers (3) | FILLER | 29 | 48% | 7% | 3% | 50% | 0% | 100% | 14.1 | 21% (2/1) | – | 7/0%/14% | 22/9%/0% |
| choose member:P3's Kingpin (4) | FILLER | 32 | 44% | 6% | 3% | 50% | 0% | 100% | 11.6 | 14% (2/0) | – | 1/0%/0% | 31/6%/3% |
| choose member:P4's Busker (4) | FILLER | 32 | 38% | 3% | 3% | 100% | 100% | 100% | 12.0 | 0% (0/0) | – | 5/0%/0% | 27/4%/4% |
| trade:P3: Recruit Bonus ↔ P2: Deprogrammers | FILLER | 37 | 11% | 3% | 3% | 0% | 0% | 100% | 22.1 | 25% (1/0) | – | 20/5%/5% | 17/0%/0% |
| choose member:P2's Dabblers (3) | FILLER | 40 | 18% | 3% | 3% | 0% | 0% | 100% | 7.9 | 14% (1/0) | – | 4/0%/0% | 36/3%/3% |
| choose member:P4's Cutpurse (3) | FILLER | 41 | 15% | 5% | 2% | 0% | 0% | 100% | 9.1 | 33% (2/0) | – | 5/0%/0% | 36/6%/3% |
| choose member:P1's Line Cutters (2) | FILLER | 43 | 33% | 2% | 2% | 0% | 0% | 100% | 13.0 | 0% (0/0) | – | 8/0%/0% | 35/3%/3% |
| choose member:P4's Roadie (3) | FILLER | 15 | 40% | 20% | 0% | 0% | 0% | 100% | 12.5 | 17% (1/0) | – | 2/50%/0% | 13/15%/0% |
| choose member:P2's Stunt Double (5) | FILLER + MISJUDGED | 21 | 52% | 14% | 0% | 33% | 0% | 100% | 15.5 | 64% (2/5) | – | 2/50%/0% | 19/11%/0% |
| choose member:Dabblers | FILLER | 17 | 53% | 12% | 0% | 0% | 0% | 100% | 8.7 | 33% (2/1) | – | 5/0%/0% | 12/17%/0% |
| choose member:P1's Kingpin (4) | FILLER | 18 | 44% | 11% | 0% | 0% | 0% | 100% | 13.5 | 25% (2/0) | – | 3/0%/0% | 15/13%/0% |
| choose member:P2's Deprogrammers (3) | FILLER | 22 | 32% | 9% | 0% | 0% | 0% | 100% | 22.8 | 29% (2/0) | – | 5/0%/0% | 17/12%/0% |
| choose member:P3's Roadie (3) | FILLER | 23 | 30% | 9% | 0% | 100% | 100% | 100% | 9.7 | 40% (0/2) | – | 2/0%/0% | 21/10%/0% |
| choose member:P4's Grifter (8) | FILLER | 30 | 33% | 7% | 0% | 50% | 0% | 100% | 10.0 | 10% (1/0) | – | 1/0%/0% | 29/7%/0% |
| choose member:P2's Toastmaster (3) | FILLER | 16 | 25% | 6% | 0% | 0% | 0% | 100% | 22.5 | 25% (1/0) | – | 4/25%/0% | 12/0%/0% |
| choose member:Agents | FILLER | 16 | 44% | 6% | 0% | 0% | 0% | 100% | 15.2 | 14% (1/0) | – | 9/11%/0% | 7/0%/0% |
| trade:P2: Gardener ↔ P4: Volunteer | FILLER | 16 | 13% | 6% | 0% | 100% | 0% | 100% | 16.4 | 50% (1/0) | – | 11/9%/0% | 5/0%/0% |
| trade:P3: Volunteer ↔ P4: Scouts | FILLER | 17 | 12% | 6% | 0% | 100% | 0% | 100% | 2.4 | 0% (0/0) | – | 6/17%/0% | 11/0%/0% |
| choose member:P1's Alchemists (5) | FILLER | 26 | 35% | 4% | 0% | 0% | 0% | 100% | 14.2 | 22% (1/1) | – | 3/0%/0% | 23/4%/0% |
| choose member:P3's Deprogrammers (3) | FILLER | 26 | 50% | 4% | 0% | 0% | 0% | 100% | 16.0 | 0% (0/0) | – | 2/50%/0% | 24/0%/0% |
| choose member:P3's Scouts (3) | FILLER | 40 | 15% | 3% | 0% | 0% | 0% | 100% | 14.1 | 17% (1/0) | – | 1/0%/0% | 39/3%/0% |
| trade:P4: Triplets ↔ P2: Accomplice | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.5 | 0% (0/0) | – | 4/0%/25% | 11/0%/0% |
| choose member:P3's Critic (3) | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.2 | 0% (0/0) | – | – | 15/0%/7% |
| trade:P4: Accomplice ↔ P3: Deprogrammers | DEAD | 15 | 7% | 0% | 7% | – | – | – | -0.1 | 0% (0/0) | – | 6/0%/0% | 9/0%/11% |
| trade:P4: Drifters ↔ Shop: Triplets | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.4 | 0% (0/0) | – | 12/0%/8% | 3/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 16 | 6% | 0% | 6% | – | – | – | 1.5 | 0% (0/0) | – | 5/0%/20% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Polisher | DEAD | 17 | 6% | 0% | 6% | – | – | – | -0.2 | 0% (0/0) | – | 6/0%/0% | 11/0%/9% |
| trade:P4: Roadie ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 6% | – | – | – | -0.1 | 0% (0/0) | – | 3/0%/0% | 14/0%/7% |
| trade:P2: Muse ↔ P4: Line Cutters | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.4 | 0% (0/0) | – | 2/0%/0% | 15/0%/7% |
| trade:P2: Recluse ↔ P4: Deprogrammers | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.9 | 0% (0/0) | – | 6/0%/0% | 11/0%/9% |
| trade:P4: Party Crasher ↔ P2: Line Cutters | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.9 | 0% (0/0) | – | 4/0%/0% | 14/0%/7% |
| trade:P1: Volunteer ↔ P2: Line Cutters | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 8/0%/13% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Roadie | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 3/0%/0% | 15/0%/7% |
| trade:P3: Deprogrammers ↔ P2: Scouts | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/0% | 15/0%/7% |
| trade:P4: Triplets ↔ P1: Dabblers | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/25% | 16/0%/0% |
| trade:P4: Triplets ↔ P2: Deprogrammers | DEAD | 21 | 10% | 0% | 5% | – | – | – | -1.2 | 0% (0/0) | – | 6/0%/0% | 15/0%/7% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | DEAD | 21 | 10% | 0% | 5% | – | – | – | 2.7 | 0% (0/0) | – | 7/0%/0% | 14/0%/7% |
| trade:P3: Deprogrammers ↔ P1: Gardener | DEAD | 21 | 5% | 0% | 5% | – | – | – | -0.5 | 0% (0/0) | – | 4/0%/0% | 17/0%/6% |
| trade:P2: Deprogrammers ↔ P4: Triplets | DEAD | 22 | 9% | 0% | 5% | – | – | – | 1.7 | 0% (0/0) | – | 6/0%/0% | 16/0%/6% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 11/0%/9% | 11/0%/0% |
| trade:P1: Gardener ↔ P3: Deprogrammers | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/0% | 18/0%/6% |
| trade:P2: Deprogrammers ↔ P1: Roadie | DEAD | 24 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 15/0%/7% | 9/0%/0% |
| trade:P4: Scouts ↔ P2: Volunteer | DEAD | 26 | 8% | 0% | 4% | – | – | – | 7.3 | 0% (0/0) | – | 12/0%/8% | 14/0%/0% |
| trade:P4: Triplets ↔ P2: Scouts | DEAD | 27 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 8/0%/13% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Line Cutters | DEAD | 34 | 3% | 0% | 3% | – | – | – | 0.8 | 100% (0/1) | – | 10/0%/10% | 24/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Scouts | DEAD | 34 | 6% | 0% | 3% | – | – | – | 13.4 | 0% (0/0) | – | 7/0%/0% | 27/0%/4% |
| choose member:P1's Accomplice (3) | DEAD | 37 | 8% | 3% | 3% | 100% | 0% | 100% | 7.1 | 33% (1/0) | – | 4/25%/0% | 33/0%/3% |
| trade:P2: Line Cutters ↔ P1: Volunteer | DEAD | 39 | 8% | 0% | 3% | – | – | – | 8.1 | 0% (0/0) | – | 16/0%/0% | 23/0%/4% |
| choose member:P3's Accomplice (3) | DEAD | 35 | 9% | 3% | 0% | 0% | 0% | 100% | 11.1 | 33% (1/0) | – | 3/0%/0% | 32/3%/0% |
| trade:P3: Con Men ↔ Shop: Old Maid | DEAD | 36 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 29/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 42 | 10% | 2% | 0% | 100% | 0% | 100% | 9.8 | 25% (1/0) | – | 7/0%/0% | 35/3%/0% |
| choose member:P2's Accomplice (3) | DEAD | 43 | 9% | 2% | 0% | 100% | 0% | 100% | 4.3 | 25% (1/0) | – | 5/0%/0% | 38/3%/0% |
| trade:P1: Busker ↔ P4: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| pass:Don’t swap | DEAD | 1034 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 492/0%/0% | 542/0%/0% |
| trade:P1: Busker ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P1: Early Birds ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Snobs ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 23 | 9% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Kingpin ↔ Shop: Sticky Fingers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Anarchist ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 22 | 5% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Accomplice ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P4: Cutpurse | DEAD | 20 | 5% | 0% | 0% | – | – | – | 23.2 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P2: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | DEAD | 26 | 4% | 0% | 0% | – | – | – | 25.6 | 0% (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P4: Cutpurse ↔ P2: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P2: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P2: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P4: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Sticky Fingers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P2: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ P4: Triplets | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P4: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P4: Line Cutters ↔ P2: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 45.6 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Triplets ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| choose member:P3's Volunteer (1) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 24/0%/0% |
| trade:P2: Panel ↔ Shop: Anarchist | DEAD | 15 | 7% | 0% | 0% | – | – | – | 16.8 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P4: Deprogrammers | DEAD | 28 | 7% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P1: Party Crasher ↔ P2: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 14.9 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ P4: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P4: Scouts ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Stunt Double ↔ P4: Scouts | DEAD | 26 | 4% | 0% | 0% | – | – | – | 31.5 | 0% (0/0) | – | 3/0%/0% | 23/0%/0% |
| trade:P4: Scouts ↔ Shop: Recruit Bonus | DEAD | 21 | 5% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P1: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Con Men ↔ Shop: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Polisher ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P4: Busker ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Doppelganger ↔ P2: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P1: Polisher ↔ P4: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P2: Scouts ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 25/0%/0% |
| trade:P2: Stunt Double ↔ P3: Busker | DEAD | 16 | 6% | 0% | 0% | – | – | – | 20.3 | 100% (0/1) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.9 | 100% (0/1) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Triplets | DEAD | 22 | 9% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P4: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P4: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Gardener ↔ P1: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Alchemists ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ Shop: Scouts | DEAD | 15 | 7% | 0% | 0% | – | – | – | 21.8 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 24/0%/0% |
| trade:P3: Anarchist ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Old Maid | DEAD | 21 | 10% | 0% | 0% | – | – | – | 28.1 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Panel ↔ Shop: Old Maid | DEAD | 22 | 9% | 0% | 0% | – | – | – | 19.8 | 50% (0/1) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ Shop: Old Maid | DEAD | 23 | 9% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ P2: Line Cutters | DEAD | 31 | 3% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 15/0%/0% | 16/0%/0% |
| trade:P2: Line Cutters ↔ P4: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ Shop: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Party Crasher ↔ P3: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P3: Volunteer | DEAD | 21 | 10% | 0% | 0% | – | – | – | 7.5 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Patriarch ↔ P1: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 18.3 | 100% (0/1) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Line Cutters ↔ P2: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 44.4 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 12/0%/0% |
| choose member:P3's Polisher (3) | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Dabblers | DEAD | 31 | 6% | 0% | 0% | – | – | – | 10.2 | 50% (0/1) | – | 10/0%/0% | 21/0%/0% |
| trade:P3: Drifters ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Polisher ↔ P4: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.2 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ Shop: Gift Wrapper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Alchemists | DEAD | 28 | 4% | 0% | 0% | – | – | – | 1.9 | 100% (0/1) | – | 8/0%/0% | 20/0%/0% |
| trade:P4: Con Men ↔ Shop: Tastemaker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Volunteer ↔ P4: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 22.3 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Loyalists ↔ Shop: Old Maid | DEAD | 21 | 5% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Scouts | DEAD | 24 | 8% | 0% | 0% | – | – | – | 9.7 | 50% (0/1) | – | 13/0%/0% | 11/0%/0% |
| trade:P2: Con Men ↔ P4: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 27.2 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Triplets ↔ P2: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 7.2 | 0% (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P3: Volunteer ↔ Shop: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ P2: Line Cutters | DEAD | 22 | 9% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P4: Accomplice | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P4: Accomplice ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Con Men ↔ Shop: Exporters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Anarchist | DEAD | 20 | 5% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Recluse ↔ P4: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Accomplice ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Triplets ↔ P2: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 29/0%/0% |
| trade:P2: Dabblers ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P1: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Scouts ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P4: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Triplets ↔ Shop: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| choose member:P4's Volunteer (1) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P2: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 24/0%/0% |
| trade:P1: Dabblers ↔ P4: Volunteer | DEAD | 31 | 6% | 0% | 0% | – | – | – | 8.7 | 50% (0/1) | – | 10/0%/0% | 21/0%/0% |
| trade:P1: Con Men ↔ Shop: Brokers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P1: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P1: Con Men ↔ P4: Patriarch | DEAD | 16 | 6% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Patriarch ↔ Shop: Brokers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Clockmakers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Trendsetters ↔ P4: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 10.8 | 100% (0/1) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Dabblers ↔ Shop: Regular | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P3: Dabblers ↔ P1: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Agents ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P3: Dabblers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 33.3 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P4: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Critic ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Agents ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ P4: Panel | DEAD | 18 | 6% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Panel ↔ P3: Con Men | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.4 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Critic | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Critic ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Old Maid | DEAD | 21 | 5% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Shift Crew ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Shift Crew ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P2: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P4: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Patriarch | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Window Dressers ↔ P4: Critic | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Volunteer | DEAD | 26 | 8% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 3/0%/0% | 23/0%/0% |
| trade:P2: Agents ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ P4: Line Cutters | DEAD | 26 | 4% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Anarchist | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Busker | DEAD | 16 | 6% | 0% | 0% | – | – | – | 36.4 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ Shop: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Roadie ↔ P3: Busker | DEAD | 17 | 6% | 0% | 0% | – | – | – | 24.7 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P3: Agents | DEAD | 18 | 6% | 0% | 0% | – | – | – | 20.1 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Fan Club ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P2: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Kingpin ↔ P3: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Con Men ↔ Shop: Anarchist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P1: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Line Cutters ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Alchemists | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P2: Panel ↔ Shop: Old Maid | DEAD | 25 | 4% | 0% | 0% | – | – | – | 39.4 | 0% (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P3: Party Crasher ↔ P4: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ Shop: Old Maid | DEAD | 27 | 7% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P1: Volunteer ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Martyrs ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Line Cutters ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Line Cutters ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 1/0%/0% |
| trade:P4: Busker ↔ P2: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P4: Busker ↔ P3: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Doppelganger ↔ P4: Agents | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.9 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P4: Agents | DEAD | 17 | 6% | 0% | 0% | – | – | – | 22.9 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ Shop: Old Maid | DEAD | 26 | 4% | 0% | 0% | – | – | – | 9.2 | 0% (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P2: Triplets ↔ P4: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P1: Doormen ↔ Shop: Regular | DEAD | 15 | 7% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P2: Triplets ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Volunteer ↔ P4: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 4.3 | 100% (0/1) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 39 | 5% | 0% | 0% | – | – | – | 10.5 | 0% (0/0) | – | 5/0%/0% | 34/0%/0% |
| trade:P1: Con Men ↔ Shop: Gift Wrapper | DEAD | 16 | 6% | 0% | 0% | – | – | – | 24.2 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| choose member:P2's Polisher (3) | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| choose member:P1's Volunteer (1) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Snobs ↔ Shop: Window Shopper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Line Cutters ↔ P4: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 22.6 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Line Cutters | DEAD | 28 | 7% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 24 | 4% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P4: Con Men ↔ Shop: Old Money | DEAD | 20 | 5% | 0% | 0% | – | – | – | 1.7 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Party Crasher ↔ P3: Line Cutters | DEAD | 29 | 3% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Window Dressers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Window Dressers ↔ P1: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ Shop: Desperado | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P2: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 18.1 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ Shop: Window Shopper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Cutpurse ↔ P2: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Cutpurse ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Old Maid | DEAD | 26 | 8% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P1: Scouts ↔ Shop: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Cutpurse ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Con Men ↔ P1: Patriarch | DEAD | 15 | 7% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Alchemists ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| choose member:P1's Agents (3) | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Roadie ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P3: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Clockmakers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ Shop: Courier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Anarchist ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ P3: Deprogrammers | DEAD | 26 | 8% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P2: Triplets ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Triplets | DEAD | 24 | 8% | 0% | 0% | – | – | – | 21.3 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P4: Window Dressers ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Window Dressers ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Trendsetters ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Scouts | DEAD | 21 | 10% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P4: Scouts | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 28/0%/0% |
| trade:P2: Triplets ↔ P4: Scouts | DEAD | 25 | 4% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P2: Alchemists ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P4: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P2: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P4: Scouts ↔ P2: Triplets | DEAD | 23 | 4% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Busker ↔ P4: Party Crasher | DEAD | 21 | 5% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P3: Busker | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.9 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Scouts | DEAD | 31 | 6% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 8/0%/0% | 23/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Agents ↔ P3: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Agents ↔ P4: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P3: Volunteer | DEAD | 36 | 8% | 0% | 0% | – | – | – | 27.7 | 0% (0/0) | – | 9/0%/0% | 27/0%/0% |
| trade:P1: Stunt Double ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P4: Scouts | DEAD | 39 | 3% | 0% | 0% | – | – | – | 26.5 | 0% (0/0) | – | 12/0%/0% | 27/0%/0% |
| trade:P3: Busker ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Roadie | DEAD | 38 | 3% | 0% | 0% | – | – | – | 18.1 | 100% (0/1) | – | 12/0%/0% | 26/0%/0% |
| trade:P1: Trendsetters ↔ P4: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Loyalists ↔ P4: Scouts | DEAD | 22 | 5% | 0% | 0% | – | – | – | 23.8 | 0% (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 5.5 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Anarchist | DEAD | 22 | 9% | 0% | 0% | – | – | – | 10.2 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Line Cutters ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P2: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 22/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Old Maid | DEAD | 19 | 5% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| choose member:P2's Gardener (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Harmonist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Old Maid | DEAD | 16 | 6% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Con Men ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Grifter ↔ Shop: Bodyguards | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Agents | DEAD | 22 | 9% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P3: Agents ↔ P1: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Triplets | DEAD | 23 | 4% | 0% | 0% | – | – | – | 18.5 | 0% (0/0) | – | 14/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Volunteer | DEAD | 27 | 4% | 0% | 0% | – | – | – | 3.7 | 100% (0/1) | – | 10/0%/0% | 17/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P3: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Agents ↔ P4: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Scouts | DEAD | 20 | 5% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P3: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P4: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 19.2 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Accomplice ↔ P4: Cutpurse | DEAD | 19 | 5% | 0% | 0% | – | – | – | 3.3 | 100% (0/1) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Cutpurse ↔ P3: Accomplice | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Shift Crew ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Doppelganger ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Timekeepers ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P3's Recruit Bonus (3) | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.2 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Proselytizers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 5.2 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P4: Volunteer | DEAD | 24 | 4% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Scouts | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 30/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P4: Scouts ↔ P3: Recruit Bonus | DEAD | 31 | 6% | 0% | 0% | – | – | – | 17.4 | 0% (0/0) | – | 3/0%/0% | 28/0%/0% |
| trade:P2: Cutpurse ↔ P4: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P2: Accomplice ↔ P4: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 21/0%/0% |
| trade:P4: Scouts ↔ P2: Cutpurse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Accomplice | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P3: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 42.2 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ Shop: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P4: Recluse ↔ P1: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Martyrs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Scouts | DEAD | 21 | 5% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 14/0%/0% | 7/0%/0% |
| trade:P1: Cutpurse ↔ P4: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P2: Busker ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P4: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P2: Muse ↔ Shop: Scouts | DEAD | 19 | 5% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P1: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ Shop: Brokers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Loyalists ↔ P1: Deprogrammers | DEAD | 22 | 9% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Loyalists ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Loyalists ↔ P4: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ P3: Triplets | DEAD | 21 | 10% | 0% | 0% | – | – | – | 19.1 | 50% (0/1) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Gardener ↔ P4: Recruit Bonus | DEAD | 23 | 9% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recruit Bonus | DEAD | 28 | 4% | 0% | 0% | – | – | – | 22.7 | 0% (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P2: Doormen ↔ P4: Recruit Bonus | DEAD | 15 | 7% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Shopkeeper ↔ P3: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 7.4 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Drifters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 31.8 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 21 | 10% | 0% | 0% | – | – | – | 16.4 | 50% (0/1) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P4: Recruit Bonus | DEAD | 27 | 4% | 0% | 0% | – | – | – | 15.3 | 0% (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Triplets | DEAD | 24 | 4% | 0% | 0% | – | – | – | 15.3 | 0% (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Gardener ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Scouts ↔ P4: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Scouts ↔ P4: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Drifters ↔ P1: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Drifters ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recluse ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Recluse ↔ P3: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 10.5 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Go-Between | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Cutpurse ↔ P2: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 23.2 | 0% (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P2: Gardener ↔ P3: Dabblers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 15.1 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Cutpurse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 23.2 | 0% (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P3: Dabblers ↔ P2: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Accomplice ↔ P1: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Drifters ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| choose member:P2's Triplets (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 27.2 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| choose member:P2's Sticky Fingers (4) | DEAD | 15 | 7% | 0% | 0% | – | – | – | 35.8 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Grifter ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P4: Recruit Bonus | DEAD | 23 | 4% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ Shop: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P4: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Recluse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Roadie ↔ Shop: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 6/0%/0% |
| choose member:P2's Muse (4) | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Chronicler ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ Shop: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P4: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P2: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Dabblers ↔ P2: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 4.4 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 8.5 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Courier ↔ Shop: Hot Streak | DEAD | 15 | 7% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | – | 15/0%/0% |
| trade:P1: Scouts ↔ P4: Recruit Bonus | DEAD | 27 | 4% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P1: Con Men ↔ Shop: Gossip | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Agents ↔ Shop: Old Maid | DEAD | 15 | 7% | 0% | 0% | – | – | – | 40.8 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P1: Roadie ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Muse ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Muse ↔ P1: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P3: Stunt Double ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Muse ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P2: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Loyalists ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 24 | 8% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P2: Loyalists ↔ P4: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 9.8 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Harmonist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Con Men ↔ Shop: Customs | DEAD | 15 | 7% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Triplets ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Party Crasher ↔ P3: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 11.2 | 100% (0/1) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P2: Gardener | DEAD | 15 | 7% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P4: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P4: Agents ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Agents ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Roadie ↔ P4: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ P3: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Volunteer ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Triplets ↔ P1: Roadie | DEAD | 16 | 6% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P4: Triplets ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P4: Stunt Double ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Cutpurse ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P1: Stunt Double ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Loyalists ↔ Shop: Window Shopper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Loyalists ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Party Crasher ↔ P4: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Gardener ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Patriarch ↔ P2: Recluse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Recluse ↔ Shop: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Recluse ↔ P1: Shopkeeper | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P4: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 34.5 | 100% (0/1) | – | 9/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ P2: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recluse ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Patriarch ↔ Shop: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Recluse ↔ P4: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Muse ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P1: Drifters ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Gardener ↔ P1: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Dabblers ↔ P1: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Window Dressers ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P2: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P3: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P1: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 42.5 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Loyalists ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Triplets ↔ P2: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ P3: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 34.1 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Drifters ↔ P3: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Drifters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P3: Agents ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Courier ↔ P2: Shift Crew | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.4 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Drifters ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P3: Deprogrammers | DEAD | 23 | 9% | 0% | 0% | – | – | – | 39.8 | 0% (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Roadie | DEAD | 21 | 10% | 0% | 0% | – | – | – | 39.9 | 0% (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P4: Agents ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Agents ↔ P2: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Drifters ↔ P4: Gardener | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Gardener ↔ P3: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Drifters ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Tastemaker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P3: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P3: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.1 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Clockmakers ↔ P2: Shift Crew | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Gardener ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Triplets ↔ P4: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Party Crasher ↔ P1: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Cutpurse ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Triplets ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |

(38102 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 2232 | 25% | 1833 | 28% |
| benders | 0 | – | 1450 | 25% |
| market | 2167 | 21% | 2010 | 25% |
| trading | 2429 | 23% | 1938 | 24% |
| silver | 2292 | 20% | 1946 | 22% |
| yellow | 2132 | 20% | 1769 | 19% |
| red | 2257 | 19% | 2394 | 19% |
| thieves | 2405 | 19% | 2413 | 15% |
| echo | 2164 | 20% | 2325 | 14% |
