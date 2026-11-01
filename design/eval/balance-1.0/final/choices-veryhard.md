# Choice report

28711 looked-ahead decisions from 317 games (/mnt/project-files/balance-1.0/merged/veryhard.choices). 23% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| purple: Last Call | AUTO-PICK | 1493 | 48% | 16% | 6% | 55% | 0% | 1% | 11.5 | 38% (161/111) | – | 896/12%/6% | 597/22%/5% |
| red: Promote | AUTO-PICK | 1174 | 60% | 27% | 5% | 74% | 38% | 1% | 14.4 | 42% (97/149) | – | 598/28%/6% | 576/25%/3% |
| echo: Cover | AUTO-PICK | 1922 | 44% | 13% | 5% | 58% | 13% | 2% | 12.5 | 39% (129/187) | – | 1015/13%/4% | 907/13%/5% |
| purple: Sleep In | AUTO-PICK | 3133 | 53% | 12% | 5% | 58% | 10% | 5% | 12.1 | 32% (170/345) | 739/18%/5% | 976/14%/4% | 1418/9%/5% |
| thieves: Poach | AUTO-PICK | 811 | 51% | 20% | 5% | 65% | 21% | 2% | 9.8 | 42% (88/70) | – | – | 811/20%/5% |
| yellow: Harvest | AUTO-PICK | 3129 | 39% | 12% | 4% | 57% | 29% | 6% | 11.5 | 29% (170/156) | 269/54%/4% | 1255/9%/3% | 1605/7%/5% |
| thieves: Help Yourself | AUTO-PICK | 2174 | 56% | 20% | 4% | 74% | 39% | 3% | 11.6 | 39% (138/272) | 197/80%/5% | 815/19%/4% | 1162/11%/5% |
| red: Recruit a Member | AUTO-PICK | 989 | 39% | 13% | 4% | 59% | 25% | 5% | 10.1 | 33% (59/59) | – | – | 989/13%/4% |
| echo: Build Up | AUTO-PICK | 3449 | 40% | 11% | 4% | 55% | 12% | 8% | 11.9 | 33% (198/244) | 793/18%/5% | 1179/12%/4% | 1477/7%/4% |
| silver: Toast | AUTO-PICK | 3845 | 40% | 10% | 4% | 52% | 13% | 12% | 12.9 | 32% (202/281) | 1259/10%/3% | 1373/10%/3% | 1213/10%/4% |
| red: Demote | AUTO-PICK | 2160 | 41% | 13% | 4% | 73% | 33% | 4% | 13.0 | 36% (98/193) | – | 1075/14%/3% | 1085/12%/4% |
| echo: Echo | AUTO-PICK | 1923 | 46% | 22% | 3% | 75% | 40% | 0% | 11.9 | 43% (131/175) | 423/35%/3% | 740/19%/3% | 760/17%/4% |
| yellow: Big Dilute | AUTO-PICK | 2272 | 37% | 11% | 3% | 61% | 20% | 6% | 12.5 | 37% (131/163) | – | 929/15%/3% | 1343/9%/4% |
| thieves: Stash | AUTO-PICK | 3927 | 37% | 11% | 3% | 55% | 13% | 10% | 12.1 | 30% (224/187) | 969/17%/5% | 1429/10%/3% | 1529/9%/3% |
| thieves: Crime Wave | AUTO-PICK | 2064 | 43% | 15% | 3% | 64% | 15% | 2% | 12.8 | 35% (150/143) | – | 1227/13%/2% | 837/17%/5% |
| red: Walk-In | AUTO-PICK | 3132 | 44% | 13% | 3% | 63% | 36% | 9% | 14.3 | 30% (130/239) | 993/15%/4% | 979/15%/3% | 1160/11%/3% |
| echo: Reprise | AUTO-PICK | 3097 | 32% | 13% | 3% | 69% | 29% | 1% | 11.6 | 39% (171/167) | 873/16%/3% | 1145/13%/2% | 1079/12%/3% |
| purple: Crowd In | MIXED | 980 | 42% | 14% | 5% | 44% | 7% | 1% | 9.4 | 35% (81/62) | – | – | 980/14%/5% |
| purple: Right Away | MIXED | 5598 | 23% | 4% | 5% | 28% | 5% | 48% | 8.3 | 16% (134/66) | 1333/5%/4% | 2013/2%/5% | 2252/4%/7% |
| purple: Crunch Time | MIXED | 4469 | 21% | 2% | 5% | 8% | 0% | 62% | 8.2 | 11% (68/35) | – | 2015/2%/5% | 2454/3%/6% |
| market: Peek | MIXED | 3684 | 42% | 10% | 5% | 44% | 5% | 13% | 11.2 | 26% (268/137) | 1007/14%/6% | 1350/9%/4% | 1327/8%/6% |
| market: Savings | MIXED | 4965 | 32% | 6% | 5% | 34% | 8% | 29% | 10.4 | 18% (201/81) | 1054/12%/6% | 1878/4%/4% | 2033/4%/5% |
| purple: Hold Up | MIXED | 4555 | 36% | 8% | 5% | 39% | 7% | 27% | 11.6 | 21% (210/129) | 962/13%/5% | 1700/7%/4% | 1893/6%/6% |
| market: Bury | MIXED | 2524 | 40% | 9% | 4% | 48% | 8% | 9% | 11.2 | 32% (145/169) | – | 916/14%/4% | 1608/7%/5% |
| yellow: Melting Pot | MIXED | 2890 | 34% | 9% | 4% | 49% | 9% | 10% | 10.8 | 33% (146/168) | – | 1272/10%/3% | 1618/7%/5% |
| silver: Largesse | MIXED | 917 | 43% | 16% | 4% | 46% | 1% | 0% | 10.8 | 38% (94/54) | – | – | 917/16%/4% |
| market: Spree | MIXED | 1117 | 44% | 11% | 4% | 47% | 19% | 1% | 10.2 | 27% (52/73) | – | – | 1117/11%/4% |
| market: Out of Style | MIXED | 4080 | 36% | 9% | 4% | 49% | 7% | 15% | 11.0 | 28% (205/204) | 713/19%/6% | 1467/9%/3% | 1900/5%/4% |
| silver: Sweet Talk | MIXED | 3686 | 27% | 6% | 4% | 49% | 17% | 20% | 11.6 | 28% (111/158) | – | 1521/7%/2% | 2165/5%/5% |
| red: Tryout | MIXED | 3830 | 30% | 9% | 4% | 59% | 21% | 11% | 11.1 | 30% (182/140) | 738/19%/7% | 1298/9%/2% | 1794/6%/4% |
| trading: Allowance | MIXED | 4197 | 33% | 10% | 4% | 46% | 6% | 10% | 11.8 | 31% (275/150) | 902/17%/5% | 1659/7%/3% | 1636/8%/4% |
| thieves: Shake Down | MIXED | 2964 | 34% | 9% | 4% | 56% | 15% | 12% | 12.0 | 33% (149/165) | – | 1154/13%/3% | 1810/7%/4% |
| silver: Party Favors | MIXED | 3250 | 34% | 8% | 4% | 49% | 16% | 14% | 11.3 | 30% (148/168) | – | 1263/11%/3% | 1987/6%/4% |
| silver: Party Gifts | MIXED | 4826 | 29% | 7% | 3% | 44% | 5% | 19% | 11.2 | 27% (205/178) | 1279/10%/3% | 1973/5%/3% | 1574/8%/4% |
| red: Gather | MIXED | 4502 | 27% | 8% | 3% | 45% | 8% | 16% | 11.2 | 30% (216/130) | 960/15%/6% | 1692/6%/2% | 1850/5%/3% |
| trading: Farewell | MIXED | 3894 | 24% | 6% | 3% | 32% | 6% | 15% | 10.9 | 30% (111/170) | – | 2084/4%/2% | 1810/7%/4% |
| trading: Estate Sale | MIXED | 3002 | 35% | 10% | 3% | 66% | 22% | 7% | 12.5 | 32% (109/206) | – | 1358/12%/2% | 1644/8%/3% |
| yellow: Trade Seeds | MIXED | 5273 | 22% | 4% | 3% | 49% | 10% | 26% | 11.1 | 27% (128/178) | 901/15%/5% | 2008/2%/1% | 2364/2%/3% |
| silver: Polish | MIXED | 6021 | 18% | 4% | 3% | 49% | 20% | 40% | 9.6 | 22% (121/112) | 1361/10%/2% | 2089/3%/2% | 2571/2%/4% |
| market: Recruit Twice | MIXED | 3559 | 27% | 5% | 3% | 49% | 24% | 10% | 10.8 | 22% (102/102) | – | 1901/3%/3% | 1658/7%/3% |
| echo: Encore | MIXED | 3056 | 24% | 7% | 3% | 63% | 22% | 20% | 10.9 | 29% (100/99) | – | 1395/9%/2% | 1661/6%/3% |
| echo: Greatest Hits | MIXED | 2092 | 12% | 5% | 3% | 40% | 1% | 42% | 7.2 | 38% (80/15) | – | – | 2092/5%/3% |
| yellow: Dilute | MIXED | 4900 | 25% | 6% | 3% | 55% | 14% | 21% | 11.0 | 26% (173/141) | 914/14%/3% | 1793/5%/2% | 2193/3%/3% |
| yellow: Makeover | MIXED | 2157 | 15% | 4% | 2% | 48% | 23% | 34% | 8.7 | 29% (43/43) | – | – | 2157/4%/2% |
| trading: Exchange | MIXED | 5959 | 18% | 4% | 2% | 29% | 1% | 42% | 10.6 | 27% (142/148) | 1559/6%/4% | 2275/1%/1% | 2125/5%/3% |
| thieves: Lie Low | MIXED | 5348 | 21% | 6% | 2% | 53% | 10% | 23% | 10.4 | 31% (216/121) | 1111/14%/3% | 2007/5%/1% | 2230/4%/3% |
| trading: Cash In | MIXED | 2535 | 15% | 3% | 2% | 34% | 19% | 31% | 8.2 | 25% (32/58) | – | – | 2535/3%/2% |
| trading: Splurge | FILLER | 6446 | 17% | 3% | 3% | 26% | 3% | 58% | 9.0 | 18% (151/44) | 1473/8%/6% | 2313/1%/2% | 2660/2%/3% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Volunteer (red) | REAL CHOICE | 474 | 77% | 26% | 17% | 37% | 2% | 2% | 9.8 | 35% (64/64) | 248/32%/21% | 69/33%/19% | 157/14%/10% |
| Deprogrammers (red) | REAL CHOICE | 499 | 84% | 26% | 13% | 32% | 5% | 1% | 11.6 | 32% (24/110) | 331/23%/14% | 82/40%/11% | 86/24%/14% |
| Line Cutters (benders) | REAL CHOICE | 1233 | 88% | 21% | 13% | 39% | 3% | 4% | 11.2 | 40% (67/363) | 760/21%/14% | 255/20%/10% | 218/22%/11% |
| Chronicler (echo) | REAL CHOICE | 580 | 84% | 15% | 12% | 41% | 2% | 0% | 12.2 | 29% (43/97) | – | 396/12%/10% | 184/21%/15% |
| Dabblers (benders) | REAL CHOICE | 1817 | 77% | 12% | 11% | 35% | 1% | 1% | 11.2 | 26% (106/261) | 1034/7%/9% | 387/21%/14% | 396/17%/13% |
| Philanthropists (silver) | REAL CHOICE | 527 | 73% | 16% | 10% | 45% | 4% | 0% | 11.6 | 29% (33/77) | – | 229/17%/9% | 298/14%/11% |
| Roadie (echo) | AUTO-PICK | 356 | 74% | 37% | 10% | 67% | 15% | 2% | 9.5 | 37% (40/49) | 194/48%/14% | 31/55%/0% | 131/17%/6% |
| Fan Club (echo) | AUTO-PICK | 311 | 85% | 30% | 9% | 62% | 21% | 0% | 11.5 | 34% (18/64) | – | 149/38%/11% | 162/23%/8% |
| Polisher (silver) | AUTO-PICK | 763 | 58% | 14% | 9% | 55% | 4% | 0% | 9.2 | 23% (77/23) | 376/14%/10% | 138/22%/10% | 249/10%/6% |
| Cutpurse (thieves) | AUTO-PICK | 443 | 72% | 29% | 9% | 75% | 37% | 2% | 10.0 | 32% (20/67) | 221/37%/11% | 72/39%/7% | 150/13%/6% |
| Shopkeeper (trading) | AUTO-PICK | 380 | 69% | 31% | 8% | 72% | 11% | 0% | 9.1 | 29% (19/53) | 105/70%/10% | 51/55%/4% | 224/7%/8% |
| Busker (echo) | AUTO-PICK | 422 | 67% | 30% | 8% | 69% | 9% | 0% | 10.0 | 27% (28/46) | 163/46%/9% | 50/60%/6% | 209/10%/8% |
| Snobs (market) | AUTO-PICK | 441 | 74% | 22% | 7% | 54% | 14% | 0% | 12.6 | 32% (26/73) | – | 224/15%/5% | 217/29%/9% |
| Mob (red) | AUTO-PICK | 142 | 79% | 30% | 7% | 74% | 30% | 0% | 18.4 | 31% (6/25) | – | 65/20%/2% | 77/39%/12% |
| Doppelganger (echo) | AUTO-PICK | 486 | 64% | 19% | 7% | 60% | 10% | 0% | 11.1 | 26% (35/43) | – | 238/22%/8% | 248/16%/6% |
| Accomplice (thieves) | AUTO-PICK | 221 | 79% | 59% | 7% | 89% | 67% | 3% | 5.4 | 30% (2/24) | 108/69%/2% | 34/76%/15% | 79/39%/10% |
| Con Men (benders) | AUTO-PICK | 417 | 89% | 56% | 6% | 81% | 60% | 0% | 9.6 | 29% (23/44) | – | 155/88%/2% | 262/37%/9% |
| Stunt Double (echo) | AUTO-PICK | 218 | 81% | 51% | 6% | 77% | 39% | 0% | 9.7 | 34% (15/30) | – | 94/65%/4% | 124/40%/7% |
| Panel (red) | AUTO-PICK | 235 | 67% | 28% | 6% | 74% | 37% | 0% | 15.6 | 19% (7/19) | – | 159/31%/6% | 76/20%/5% |
| HR (benders) | AUTO-PICK | 935 | 63% | 15% | 6% | 55% | 24% | 1% | 15.9 | 26% (20/126) | – | 498/7%/3% | 437/24%/9% |
| Dyer (yellow) | AUTO-PICK | 340 | 66% | 18% | 6% | 70% | 3% | 0% | 9.8 | 24% (13/40) | – | 70/57%/10% | 270/7%/4% |
| High Society (silver) | AUTO-PICK | 470 | 69% | 11% | 6% | 52% | 12% | 0% | 14.0 | 23% (9/63) | – | 206/13%/4% | 264/9%/6% |
| Patriarch (red) | AUTO-PICK | 467 | 68% | 21% | 5% | 58% | 7% | 0% | 12.7 | 29% (31/58) | – | 287/14%/4% | 180/33%/7% |
| Gardener (yellow) | AUTO-PICK | 383 | 59% | 26% | 5% | 74% | 46% | 0% | 11.7 | 22% (19/21) | 94/76%/6% | 119/14%/7% | 170/8%/2% |
| Double Agent (thieves) | AUTO-PICK | 494 | 51% | 16% | 4% | 68% | 35% | 0% | 14.0 | 29% (24/42) | – | 269/18%/2% | 225/14%/7% |
| Grifter (thieves) | AUTO-PICK | 469 | 63% | 19% | 4% | 69% | 27% | 0% | 14.6 | 30% (15/67) | – | 252/18%/2% | 217/20%/6% |
| Extortionist (thieves) | AUTO-PICK | 421 | 62% | 16% | 4% | 62% | 23% | 0% | 11.5 | 28% (19/51) | – | 147/22%/5% | 274/12%/4% |
| Caravan (yellow) | AUTO-PICK | 335 | 59% | 15% | 4% | 55% | 14% | 0% | 11.1 | 22% (11/31) | – | 114/32%/4% | 221/6%/4% |
| Debt Collectors (silver) | AUTO-PICK | 596 | 42% | 10% | 2% | 52% | 2% | 0% | 10.6 | 22% (49/6) | – | 213/19%/1% | 383/5%/3% |
| Tribute Band (echo) | AUTO-PICK | 214 | 24% | 13% | 1% | 85% | 0% | 0% | 18.1 | 37% (17/2) | – | 32/0%/0% | 182/15%/1% |
| Window Dressers (market) | MIXED | 694 | 74% | 14% | 9% | 38% | 0% | 2% | 10.9 | 24% (36/87) | 207/6%/8% | 240/17%/11% | 247/18%/9% |
| Early Birds (purple) | MIXED | 722 | 66% | 11% | 9% | 34% | 3% | 3% | 9.8 | 22% (39/68) | 244/10%/11% | 116/19%/12% | 362/8%/7% |
| Triplets (red) | MIXED | 1114 | 49% | 9% | 9% | 28% | 0% | 0% | 9.3 | 20% (74/32) | 576/6%/11% | 236/15%/9% | 302/10%/5% |
| Agents (echo) | MIXED | 787 | 67% | 13% | 9% | 32% | 1% | 1% | 10.7 | 28% (63/83) | 402/12%/8% | 193/19%/13% | 192/11%/7% |
| Shift Crew (purple) | MIXED | 748 | 50% | 11% | 9% | 23% | 0% | 0% | 9.8 | 25% (64/29) | 224/5%/9% | 324/12%/7% | 200/16%/13% |
| Recruit Bonus (red) | MIXED | 975 | 71% | 10% | 9% | 36% | 2% | 1% | 10.6 | 21% (53/91) | 485/6%/9% | 228/19%/13% | 262/10%/6% |
| Timekeepers (purple) | MIXED | 772 | 70% | 14% | 9% | 34% | 0% | 1% | 10.1 | 22% (30/87) | 391/6%/7% | 134/25%/13% | 247/20%/11% |
| Scouts (benders) | MIXED | 2259 | 71% | 8% | 8% | 32% | 0% | 1% | 11.2 | 23% (92/269) | 1026/6%/9% | 459/17%/9% | 774/5%/7% |
| Trendsetters (market) | MIXED | 823 | 72% | 13% | 8% | 31% | 0% | 0% | 11.2 | 27% (47/113) | 265/6%/8% | 262/15%/7% | 296/17%/9% |
| Martyrs (trading) | MIXED | 781 | 69% | 12% | 8% | 33% | 2% | 0% | 10.6 | 28% (47/100) | 296/6%/6% | 187/22%/12% | 298/12%/7% |
| Critic (market) | MIXED | 1104 | 56% | 8% | 8% | 27% | 4% | 5% | 10.1 | 17% (59/45) | 366/5%/6% | 188/15%/16% | 550/6%/6% |
| Kingpin (thieves) | MIXED | 930 | 68% | 12% | 8% | 34% | 2% | 0% | 12.6 | 25% (55/103) | 454/4%/5% | 219/21%/12% | 257/17%/10% |
| Alchemists (benders) | MIXED | 1515 | 82% | 11% | 7% | 32% | 0% | 1% | 11.7 | 25% (90/217) | – | 606/13%/8% | 909/9%/7% |
| Toastmaster (silver) | MIXED | 1090 | 56% | 8% | 7% | 40% | 4% | 0% | 9.9 | 17% (50/53) | 375/6%/8% | 267/13%/7% | 448/6%/6% |
| Brokers (trading) | MIXED | 742 | 70% | 9% | 7% | 32% | 0% | 0% | 10.9 | 26% (36/96) | – | 322/10%/7% | 420/9%/7% |
| Regular (market) | MIXED | 1122 | 58% | 8% | 7% | 35% | 3% | 0% | 10.3 | 17% (62/46) | 333/4%/7% | 351/11%/8% | 438/8%/6% |
| Bouncers (purple) | MIXED | 900 | 72% | 9% | 7% | 38% | 6% | 0% | 11.6 | 22% (43/98) | 416/6%/3% | 253/13%/12% | 231/10%/7% |
| Old Money (trading) | MIXED | 868 | 69% | 8% | 7% | 31% | 0% | 0% | 10.7 | 21% (35/90) | – | 291/8%/5% | 577/7%/7% |
| Recluse (trading) | MIXED | 773 | 64% | 13% | 7% | 42% | 5% | 0% | 10.5 | 22% (33/77) | 249/6%/4% | 200/24%/8% | 324/12%/8% |
| Drifters (yellow) | MIXED | 637 | 63% | 14% | 6% | 39% | 13% | 0% | 11.0 | 22% (32/53) | 249/18%/8% | 165/15%/7% | 223/10%/4% |
| Connoisseurs (market) | MIXED | 1098 | 67% | 8% | 6% | 24% | 1% | 1% | 12.1 | 19% (66/74) | 377/2%/4% | 340/13%/8% | 381/11%/7% |
| Doormen (market) | MIXED | 909 | 67% | 7% | 6% | 33% | 1% | 0% | 10.5 | 18% (51/57) | – | 376/9%/8% | 533/6%/5% |
| Loyalists (red) | MIXED | 573 | 71% | 12% | 6% | 37% | 1% | 0% | 11.8 | 25% (30/72) | – | 258/12%/8% | 315/11%/5% |
| Raiders (trading) | MIXED | 826 | 61% | 7% | 5% | 26% | 2% | 0% | 12.0 | 13% (42/24) | – | 357/6%/5% | 469/7%/5% |
| Ringleader (yellow) | MIXED | 614 | 59% | 11% | 5% | 48% | 4% | 0% | 13.6 | 22% (30/47) | – | 299/10%/3% | 315/12%/7% |
| Hot Streak (purple) | MIXED | 817 | 42% | 5% | 5% | 16% | 0% | 0% | 11.4 | 16% (38/16) | – | 305/7%/5% | 512/5%/5% |
| Clockmakers (purple) | MIXED | 767 | 61% | 6% | 5% | 26% | 0% | 0% | 10.7 | 16% (26/48) | – | 259/9%/5% | 508/4%/4% |
| Muse (echo) | MIXED | 1407 | 46% | 5% | 4% | 33% | 2% | 2% | 10.4 | 12% (51/26) | 472/2%/4% | 299/10%/8% | 636/3%/3% |
| Big Tent (yellow) | MIXED | 686 | 40% | 6% | 4% | 38% | 3% | 0% | 12.2 | 17% (14/32) | – | 278/7%/4% | 408/5%/5% |
| Cashier (trading) | MIXED | 1174 | 39% | 4% | 4% | 38% | 4% | 0% | 9.9 | 14% (31/34) | 303/0%/3% | 387/4%/3% | 484/6%/6% |
| Mentor & Protégés (red) | MIXED | 369 | 57% | 12% | 4% | 44% | 9% | 2% | 13.4 | 18% (15/23) | – | 141/9%/3% | 228/14%/5% |
| Closer (purple) | MIXED | 846 | 41% | 4% | 4% | 19% | 0% | 0% | 11.3 | 12% (34/8) | – | 297/7%/5% | 549/3%/3% |
| Window Shopper (market) | MIXED | 1038 | 54% | 7% | 4% | 38% | 7% | 1% | 11.8 | 17% (37/59) | – | 318/12%/5% | 720/4%/3% |
| Anarchist (benders) | MIXED | 2030 | 36% | 7% | 4% | 37% | 0% | 0% | 12.4 | 19% (125/16) | – | 754/7%/3% | 1276/7%/4% |
| Sticky Fingers (thieves) | MIXED | 1085 | 45% | 6% | 4% | 36% | 2% | 0% | 11.6 | 16% (51/28) | 309/1%/2% | 268/13%/5% | 508/6%/4% |
| Party Crasher (benders) | MIXED | 2481 | 52% | 7% | 4% | 49% | 0% | 1% | 11.5 | 15% (149/45) | 1145/1%/1% | 390/21%/8% | 946/10%/5% |
| Desperado (thieves) | MIXED | 1000 | 40% | 4% | 3% | 26% | 0% | 0% | 11.3 | 12% (30/19) | – | 374/5%/3% | 626/3%/4% |
| Go-Between (yellow) | MIXED | 1019 | 42% | 4% | 3% | 30% | 3% | 0% | 11.7 | 13% (27/30) | 229/3%/3% | 242/7%/5% | 548/3%/2% |
| Heiresses (trading) | MIXED | 449 | 26% | 8% | 3% | 64% | 3% | 0% | 9.0 | 28% (30/3) | – | 173/5%/3% | 276/10%/3% |
| Exporters (trading) | MIXED | 943 | 41% | 3% | 3% | 38% | 0% | 0% | 12.6 | 10% (22/19) | – | 406/3%/2% | 537/2%/3% |
| Collector (silver) | MIXED | 989 | 35% | 4% | 3% | 40% | 2% | 0% | 11.3 | 15% (37/15) | 161/0%/0% | 275/8%/4% | 553/4%/3% |
| Night Owls (purple) | MIXED | 431 | 30% | 5% | 3% | 30% | 0% | 0% | 10.5 | 17% (14/8) | – | 132/2%/1% | 299/6%/3% |
| Shoplifter (thieves) | MIXED | 706 | 26% | 5% | 2% | 38% | 0% | 0% | 13.5 | 18% (28/5) | – | 306/3%/1% | 400/6%/4% |
| Debutantes (silver) | MIXED | 635 | 42% | 4% | 2% | 32% | 0% | 0% | 13.0 | 13% (23/13) | – | 267/2%/1% | 368/6%/4% |
| Gossip (purple) | MIXED | 729 | 30% | 4% | 2% | 36% | 0% | 0% | 10.3 | 13% (26/3) | – | 229/6%/3% | 500/3%/2% |
| Bodyguards (thieves) | MIXED | 479 | 29% | 5% | 2% | 30% | 0% | 4% | 10.1 | 19% (20/6) | – | 144/3%/1% | 335/5%/3% |
| Shopaholics (market) | MIXED | 658 | 37% | 4% | 2% | 28% | 0% | 0% | 15.0 | 15% (18/18) | – | 278/2%/1% | 380/5%/3% |
| Harmonist (yellow) | MIXED | 702 | 28% | 2% | 2% | 42% | 0% | 0% | 13.3 | 11% (10/11) | – | 267/2%/2% | 435/2%/2% |
| Extra Hand (benders) | MIXED | 1676 | 24% | 4% | 2% | 39% | 0% | 0% | 15.0 | 20% (72/7) | – | 789/1%/1% | 887/8%/3% |
| Courier (purple) | MIXED | 772 | 33% | 5% | 2% | 33% | 0% | 0% | 11.2 | 17% (34/8) | – | 279/7%/3% | 493/3%/2% |
| Tastemaker (yellow) | MIXED | 846 | 25% | 2% | 2% | 33% | 0% | 0% | 12.1 | 10% (17/5) | – | 242/5%/2% | 604/1%/2% |
| Hangers-On (silver) | MIXED | 812 | 39% | 2% | 2% | 29% | 0% | 0% | 12.5 | 8% (12/12) | – | 304/2%/0% | 508/2%/2% |
| Gift Wrapper (silver) | MIXED | 1167 | 31% | 2% | 1% | 30% | 0% | 0% | 12.9 | 7% (15/11) | – | 302/2%/1% | 865/2%/2% |
| Proselytizers (red) | MIXED | 718 | 34% | 3% | 1% | 32% | 0% | 0% | 12.8 | 12% (14/15) | – | 302/2%/0% | 416/3%/2% |
| Patroness (market) | MIXED | 664 | 18% | 1% | 1% | 22% | 0% | 0% | 13.3 | 11% (8/5) | – | 206/1%/1% | 458/2%/1% |
| Customs (yellow) | MIXED | 1080 | 27% | 2% | 1% | 45% | 0% | 0% | 12.4 | 10% (17/13) | 232/0%/0% | 279/5%/3% | 569/1%/1% |
| Hoarder (trading) | MIXED | 856 | 22% | 1% | 1% | 0% | 0% | 0% | 15.1 | 4% (6/1) | – | 213/1%/0% | 643/1%/1% |
| Smooth Talkers (silver) | MIXED | 681 | 34% | 2% | 1% | 18% | 0% | 0% | 13.1 | 6% (7/6) | – | 189/2%/1% | 492/1%/0% |
| Wallflower (echo) | MIXED | 531 | 13% | 1% | 1% | 40% | 0% | 0% | 14.8 | 9% (5/1) | – | 137/0%/0% | 394/1%/1% |
| Old Maid (benders) | DEAD | 3327 | 0% | 0% | 0% | – | – | – | 9.4 | 0% (0/0) | – | 1191/0%/0% | 2136/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Anarchist (benders) | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 39/0%/0% |
| Polisher (silver) | DEAD | 194 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 50/0%/0% | 113/0%/0% | 31/0%/0% |
| Scouts (benders) | DEAD | 2429 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 129/0%/0% | 657/0%/0% | 1643/0%/0% |
| Hot Streak (purple) | DEAD | 140 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 54/0%/0% | 86/0%/0% |
| Debutantes (silver) | DEAD | 80 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 36/0%/0% | 44/0%/0% |
| Extra Hand (benders) | DEAD | 54 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 44/0%/0% | 10/0%/0% |
| Party Crasher (benders) | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 23/0%/0% | 15/0%/0% | 1/0%/0% |
| Raiders (trading) | DEAD | 146 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 39/0%/0% | 107/0%/0% |
| Tribute Band (echo) | DEAD | 138 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 115/0%/0% |
| Hoarder (trading) | THIN DATA | 2 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 1/0%/0% |
| Heiresses (trading) | THIN DATA | 7 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | – |
| Debt Collectors (silver) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 5/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Dabblers (3) | REAL CHOICE | 50 | 100% | 36% | 60% | 11% | 0% | 100% | 3.5 | 24% (6/6) | – | 16/31%/50% | 34/38%/65% |
| choose member:Accomplice (3) | REAL CHOICE | 36 | 92% | 39% | 58% | 14% | 0% | 100% | 5.0 | 18% (2/4) | – | 16/56%/50% | 20/25%/65% |
| choose member:Cutpurse (3) | REAL CHOICE | 44 | 91% | 34% | 55% | 20% | 0% | 100% | 4.8 | 30% (1/11) | – | 22/45%/45% | 22/23%/64% |
| choose member:Triplets (3) | REAL CHOICE | 17 | 88% | 12% | 53% | 0% | 0% | 100% | 2.2 | 7% (1/0) | – | 4/0%/50% | 13/15%/54% |
| choose member:Scouts (3) | REAL CHOICE | 50 | 98% | 28% | 50% | 14% | 0% | 100% | 3.7 | 27% (4/9) | – | 25/36%/40% | 25/20%/60% |
| choose member:Deprogrammers (3) | REAL CHOICE | 39 | 87% | 26% | 49% | 10% | 10% | 100% | 6.1 | 18% (3/3) | – | 19/26%/37% | 20/25%/60% |
| choose member:Recruit Bonus (3) | REAL CHOICE | 15 | 87% | 13% | 47% | 0% | 0% | 100% | 3.5 | 8% (0/1) | – | 3/33%/33% | 12/8%/50% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 27 | 96% | 26% | 44% | 14% | 0% | 100% | 4.8 | 19% (4/1) | – | 6/17%/33% | 21/29%/48% |
| choose member:Recluse (4) | REAL CHOICE | 19 | 95% | 16% | 42% | 0% | 0% | 100% | 3.8 | 28% (2/3) | – | 2/0%/50% | 17/18%/41% |
| choose member:Agents (3) | REAL CHOICE | 29 | 97% | 24% | 34% | 14% | 0% | 100% | 5.9 | 25% (4/3) | – | 16/19%/31% | 13/31%/38% |
| choose member:Roadie (3) | REAL CHOICE | 16 | 100% | 56% | 31% | 44% | 22% | 100% | 5.2 | 29% (1/3) | – | 10/70%/30% | 6/33%/33% |
| choose member:Kingpin (4) | REAL CHOICE | 40 | 95% | 28% | 30% | 27% | 0% | 100% | 5.6 | 24% (5/4) | – | 15/40%/27% | 25/20%/32% |
| choose member:Busker (4) | REAL CHOICE | 43 | 98% | 40% | 28% | 29% | 0% | 100% | 8.6 | 31% (4/9) | – | 24/50%/29% | 19/26%/26% |
| choose member:Line Cutters (2) | REAL CHOICE | 60 | 100% | 48% | 25% | 48% | 7% | 100% | 6.2 | 41% (10/14) | – | 29/52%/7% | 31/45%/42% |
| choose member:Line Cutters | REAL CHOICE | 19 | 58% | 32% | 21% | 33% | 0% | 100% | 6.1 | 27% (1/2) | – | 9/44%/22% | 10/20%/20% |
| trade:P1: Fan Club ↔ P4: Stunt Double | REAL CHOICE | 15 | 20% | 20% | 20% | 0% | 0% | 0% | – | 33% (1/0) | – | 2/50%/50% | 13/15%/15% |
| choose member:Alchemists (5) | REAL CHOICE | 26 | 100% | 27% | 19% | 14% | 0% | 100% | 10.6 | 19% (4/1) | – | 6/33%/17% | 20/25%/20% |
| trade:P1: Trendsetters ↔ P3: Dabblers | REAL CHOICE | 15 | 27% | 7% | 13% | 0% | 0% | 0% | 13.5 | 25% (0/1) | – | 9/11%/22% | 6/0%/0% |
| choose member:P2's Connoisseurs (4) | REAL CHOICE | 16 | 19% | 13% | 13% | 0% | 0% | 100% | 8.3 | 33% (1/0) | – | 2/50%/50% | 14/7%/7% |
| trade:P1: Recruit Bonus ↔ P4: Deprogrammers | REAL CHOICE | 16 | 38% | 6% | 13% | 0% | 0% | 0% | 9.0 | 17% (1/0) | – | 6/17%/17% | 10/0%/10% |
| trade:P3: Roadie ↔ P1: Deprogrammers | REAL CHOICE | 16 | 25% | 0% | 13% | – | – | – | 1.6 | 0% (0/0) | – | 10/0%/10% | 6/0%/17% |
| trade:P3: Deprogrammers ↔ P1: Cutpurse | REAL CHOICE | 16 | 31% | 0% | 13% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/20% | 11/0%/9% |
| trade:P1: Deprogrammers ↔ P3: Roadie | REAL CHOICE | 17 | 24% | 12% | 12% | 0% | 0% | 50% | 3.2 | 50% (1/1) | – | 10/10%/10% | 7/14%/14% |
| trade:P2: Scouts ↔ P4: Deprogrammers | REAL CHOICE | 17 | 18% | 12% | 12% | 0% | 0% | 0% | 6.8 | 67% (1/1) | – | 2/0%/0% | 15/13%/13% |
| trade:P4: Deprogrammers ↔ P2: Scouts | REAL CHOICE | 17 | 18% | 0% | 12% | – | – | – | 2.5 | 0% (0/0) | – | 2/0%/0% | 15/0%/13% |
| pass:Pass | REAL CHOICE | 13835 | 54% | 19% | 11% | 48% | 7% | 12% | 8.8 | 27% (1280/699) | 3514/44%/18% | 4552/19%/14% | 5769/5%/5% |
| followers:small | REAL CHOICE | 13835 | 55% | 13% | 11% | 27% | 0% | 7% | 9.8 | 24% (1368/445) | 3514/16%/16% | 4552/17%/14% | 5769/8%/6% |
| trade:P1: Cutpurse ↔ P3: Deprogrammers | REAL CHOICE | 18 | 28% | 17% | 11% | 0% | 0% | 0% | 12.1 | 20% (1/0) | – | 6/17%/17% | 12/17%/8% |
| trade:P1: Deprogrammers ↔ P3: Volunteer | REAL CHOICE | 27 | 33% | 11% | 11% | 33% | 0% | 0% | 15.3 | 44% (1/3) | – | 16/6%/6% | 11/18%/18% |
| trade:P4: Deprogrammers ↔ P1: Volunteer | REAL CHOICE | 18 | 22% | 0% | 11% | – | – | – | 6.9 | 50% (0/2) | – | 8/0%/25% | 10/0%/0% |
| choose member:Window Dressers (4) | AUTO-PICK | 15 | 93% | 20% | 40% | 67% | 0% | 100% | 5.6 | 14% (0/2) | – | 7/29%/57% | 8/13%/25% |
| choose member:Drifters (3) | AUTO-PICK | 18 | 100% | 17% | 39% | 67% | 0% | 100% | 4.7 | 11% (2/0) | – | 6/17%/17% | 12/17%/50% |
| choose member:HR | AUTO-PICK | 18 | 100% | 72% | 22% | 69% | 46% | 100% | 9.7 | 17% (1/1) | – | 6/67%/17% | 12/75%/25% |
| choose member:Fan Club | AUTO-PICK | 20 | 90% | 60% | 20% | 50% | 8% | 100% | 9.4 | 41% (3/4) | – | 7/71%/0% | 13/54%/31% |
| choose member:Party Crasher (4) | AUTO-PICK + MISJUDGED | 16 | 94% | 69% | 19% | 64% | 0% | 100% | 4.6 | 67% (10/0) | – | 5/100%/0% | 11/55%/27% |
| choose member:Busker | AUTO-PICK | 23 | 57% | 22% | 17% | 60% | 20% | 100% | 6.4 | 25% (2/1) | – | 13/31%/8% | 10/10%/30% |
| choose member:P2's HR (10) | AUTO-PICK + MISJUDGED | 15 | 100% | 67% | 13% | 90% | 70% | 100% | 3.3 | 50% (0/4) | – | 1/100%/0% | 14/64%/14% |
| choose member:Roadie | AUTO-PICK | 32 | 91% | 44% | 13% | 79% | 29% | 100% | 8.4 | 36% (2/7) | – | 19/63%/11% | 13/15%/15% |
| choose member:P2's Fan Club (6) | AUTO-PICK | 16 | 75% | 25% | 13% | 50% | 50% | 100% | 6.8 | 30% (0/3) | – | 1/100%/0% | 15/20%/13% |
| choose member:Shopkeeper (4) | AUTO-PICK | 19 | 84% | 32% | 11% | 67% | 0% | 100% | 7.0 | 38% (3/3) | – | 12/42%/0% | 7/14%/29% |
| choose member:Stunt Double | AUTO-PICK | 17 | 65% | 35% | 6% | 83% | 17% | 100% | 22.4 | 30% (1/2) | – | 7/29%/0% | 10/40%/10% |
| choose member:P3's Fan Club (6) | AUTO-PICK + MISJUDGED | 18 | 61% | 39% | 6% | 71% | 29% | 100% | 20.1 | 56% (2/3) | – | 1/100%/0% | 17/35%/6% |
| choose member:P1's HR (10) | AUTO-PICK | 19 | 84% | 42% | 5% | 88% | 88% | 100% | 14.7 | 44% (1/3) | – | – | 19/42%/5% |
| choose member:P4's Window Dressers (4) | AUTO-PICK | 19 | 42% | 11% | 5% | 50% | 0% | 100% | 13.4 | 13% (1/0) | – | 3/0%/0% | 16/13%/6% |
| choose member:P3's Panel (7) | AUTO-PICK | 20 | 45% | 20% | 5% | 50% | 0% | 100% | 8.4 | 44% (3/1) | – | 1/0%/0% | 19/21%/5% |
| choose member:P1's Con Men (7) | AUTO-PICK | 45 | 38% | 13% | 4% | 83% | 0% | 100% | 6.3 | 47% (3/5) | – | 5/40%/20% | 40/10%/3% |
| choose member:P3's Con Men (7) | AUTO-PICK | 30 | 63% | 17% | 3% | 80% | 0% | 100% | 11.8 | 26% (1/4) | – | 4/25%/0% | 26/15%/4% |
| choose member:P4's Con Men (7) | AUTO-PICK | 44 | 45% | 16% | 2% | 71% | 0% | 100% | 12.8 | 20% (1/3) | – | 5/80%/20% | 39/8%/0% |
| choose member:P4's HR (10) | AUTO-PICK | 21 | 95% | 67% | 0% | 71% | 43% | 100% | 4.2 | 36% (3/2) | – | 4/75%/0% | 17/65%/0% |
| choose member:Stunt Double (5) | AUTO-PICK | 16 | 100% | 50% | 0% | 63% | 0% | 100% | 7.8 | 44% (7/0) | – | 7/57%/0% | 9/44%/0% |
| choose member:P1's Roadie (3) | AUTO-PICK | 32 | 31% | 22% | 0% | 86% | 43% | 100% | 12.6 | 14% (1/0) | – | 5/20%/0% | 27/22%/0% |
| choose member:P1's Fan Club (6) | AUTO-PICK | 24 | 50% | 21% | 0% | 80% | 20% | 100% | 20.2 | 18% (1/1) | – | – | 24/21%/0% |
| choose member:P4's Panel (7) | AUTO-PICK + MISJUDGED | 20 | 55% | 20% | 0% | 50% | 0% | 100% | 8.7 | 55% (1/5) | – | 5/20%/0% | 15/20%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 15 | 67% | 20% | 0% | 67% | 0% | 100% | 14.5 | 10% (1/0) | – | 7/43%/0% | 8/0%/0% |
| choose member:P2's Roadie (3) | AUTO-PICK | 26 | 54% | 15% | 0% | 75% | 25% | 100% | 13.9 | 31% (2/2) | – | 2/50%/0% | 24/13%/0% |
| choose member:P3's Busker (4) | AUTO-PICK | 33 | 39% | 15% | 0% | 80% | 40% | 100% | 9.7 | 27% (2/1) | – | 4/50%/0% | 29/10%/0% |
| choose member:P2's Chronicler (5) | AUTO-PICK | 15 | 40% | 13% | 0% | 50% | 0% | 100% | 11.3 | 33% (1/1) | – | 2/0%/0% | 13/15%/0% |
| trade:P1: Deprogrammers ↔ Shop: Alchemists | AUTO-PICK | 17 | 12% | 12% | 0% | 100% | 0% | 0% | – | 100% (2/0) | – | 6/33%/0% | 11/0%/0% |
| choose member:P3's Roadie (3) | AUTO-PICK | 27 | 30% | 11% | 0% | 100% | 67% | 100% | 9.7 | 33% (0/2) | – | 3/33%/0% | 24/8%/0% |
| choose member:P3's Grifter (8) | AUTO-PICK | 20 | 15% | 10% | 0% | 100% | 0% | 100% | 17.2 | 33% (1/0) | – | – | 20/10%/0% |
| choose member:P4's Kingpin (4) | MIXED | 21 | 38% | 14% | 10% | 0% | 0% | 100% | 11.3 | 38% (2/1) | – | 3/0%/33% | 18/17%/6% |
| trade:P1: Party Crasher ↔ P2: Deprogrammers | MIXED | 21 | 10% | 5% | 10% | 0% | 0% | 0% | 0.0 | 50% (1/0) | – | 4/0%/0% | 17/6%/12% |
| trade:P3: Deprogrammers ↔ P1: Roadie | MIXED | 23 | 17% | 0% | 9% | – | – | – | 12.6 | 0% (0/0) | – | 9/0%/0% | 14/0%/14% |
| trade:P2: Deprogrammers ↔ P3: Volunteer | MIXED + MISJUDGED | 35 | 23% | 9% | 9% | 0% | 0% | 0% | 8.7 | 50% (2/2) | – | 14/7%/7% | 21/10%/10% |
| trade:P3: Deprogrammers ↔ P2: Volunteer | MIXED | 24 | 33% | 8% | 8% | 0% | 0% | 0% | 10.6 | 38% (0/3) | – | 10/10%/0% | 14/7%/14% |
| trade:P1: Roadie ↔ P3: Deprogrammers | MIXED | 26 | 15% | 8% | 8% | 0% | 0% | 0% | 25.1 | 50% (1/1) | – | 9/0%/0% | 17/12%/12% |
| trade:P4: Deprogrammers ↔ P3: Volunteer | MIXED | 26 | 12% | 4% | 8% | 0% | 0% | 0% | 11.1 | 0% (0/0) | – | 14/0%/0% | 12/8%/17% |
| choose member:P2's Busker (4) | MIXED | 27 | 41% | 7% | 7% | 0% | 0% | 100% | 17.6 | 27% (1/2) | – | 2/0%/0% | 25/8%/8% |
| followers:mid | MIXED | 12597 | 43% | 7% | 7% | 19% | 0% | 2% | 8.8 | 17% (665/285) | 2327/0%/1% | 4517/4%/4% | 5753/12%/12% |
| choose member:P1's Loyalists (5) | MIXED | 15 | 47% | 20% | 7% | 33% | 0% | 100% | 5.0 | 57% (3/1) | – | 1/100%/0% | 14/14%/7% |
| trade:P4: Dabblers ↔ Shop: Triplets | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/50%/50% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Accomplice | MIXED | 15 | 20% | 7% | 7% | 0% | 0% | 0% | 10.7 | 33% (1/0) | – | 10/0%/0% | 5/20%/20% |
| trade:P2: Deprogrammers ↔ P4: Gardener | MIXED | 15 | 33% | 7% | 7% | 0% | 0% | 0% | 7.6 | 20% (1/0) | – | 5/0%/0% | 10/10%/10% |
| trade:P1: Polisher ↔ P4: Deprogrammers | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 2.0 | 50% (0/1) | – | 5/0%/0% | 10/10%/10% |
| trade:P3: Recluse ↔ P4: Deprogrammers | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 9.9 | 50% (1/0) | – | 8/0%/0% | 7/14%/14% |
| trade:P1: Chronicler ↔ Shop: Old Maid | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/50%/50% | 13/0%/0% |
| trade:P3: Busker ↔ P4: Triplets | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 11.7 | 100% (1/1) | – | 6/17%/17% | 9/0%/0% |
| choose member:P4's Doppelganger (5) | MIXED | 15 | 27% | 7% | 7% | 0% | 0% | 100% | 11.3 | 25% (1/0) | – | 1/0%/0% | 14/7%/7% |
| trade:P3: Roadie ↔ P4: Agents | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 100% | – | 0% (0/0) | – | 4/25%/25% | 11/0%/0% |
| trade:P3: Accomplice ↔ P1: Deprogrammers | MIXED | 15 | 20% | 0% | 7% | – | – | – | 6.5 | 0% (0/0) | – | 10/0%/0% | 5/0%/20% |
| trade:P3: Loyalists ↔ P2: Roadie | MIXED | 15 | 27% | 0% | 7% | – | – | – | 5.3 | 25% (0/1) | – | 3/0%/0% | 12/0%/8% |
| trade:P4: Accomplice ↔ P1: Deprogrammers | MIXED | 15 | 20% | 0% | 7% | – | – | – | 5.4 | 0% (0/0) | – | 7/0%/14% | 8/0%/0% |
| trade:P2: Scouts ↔ P1: Deprogrammers | MIXED | 15 | 13% | 0% | 7% | – | – | – | 6.0 | 0% (0/0) | – | 10/0%/10% | 5/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Volunteer | MIXED | 15 | 20% | 0% | 7% | – | – | – | 14.2 | 33% (0/1) | – | 10/0%/0% | 5/0%/20% |
| trade:P3: Deprogrammers ↔ P2: Agents | MIXED | 15 | 20% | 0% | 7% | – | – | – | 8.3 | 0% (0/0) | – | 10/0%/10% | 5/0%/0% |
| trade:P1: Loyalists ↔ P3: Busker | MIXED | 15 | 40% | 0% | 7% | – | – | – | 11.1 | 17% (0/1) | – | 2/0%/0% | 13/0%/8% |
| trade:P4: Loyalists ↔ P2: Roadie | MIXED | 15 | 13% | 0% | 7% | – | – | – | 18.1 | 0% (0/0) | – | 7/0%/14% | 8/0%/0% |
| choose member:P4's Line Cutters (2) | MIXED | 46 | 26% | 7% | 7% | 0% | 0% | 100% | 10.0 | 25% (3/0) | – | 5/0%/0% | 41/7%/7% |
| choose member:P4's Fan Club (6) | MIXED + MISJUDGED | 16 | 75% | 50% | 6% | 38% | 25% | 100% | 25.0 | 50% (3/2) | – | 3/100%/0% | 13/38%/8% |
| trade:P1: Panel ↔ Shop: Old Maid | MIXED | 16 | 13% | 13% | 6% | 0% | 0% | 0% | – | 100% (2/0) | – | 7/14%/14% | 9/11%/0% |
| trade:P1: Deprogrammers ↔ P2: Scouts | MIXED | 16 | 19% | 13% | 6% | 0% | 0% | 0% | 11.9 | 67% (2/0) | – | 10/20%/10% | 6/0%/0% |
| trade:P2: Volunteer ↔ P4: Scouts | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 4.8 | 50% (1/0) | – | 6/17%/17% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Cutpurse | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 12/8%/8% |
| trade:P1: Dabblers ↔ P3: Deprogrammers | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 20.1 | 0% (0/0) | – | 3/33%/33% | 13/0%/0% |
| trade:P2: Loyalists ↔ P4: Stunt Double | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 33.0 | 50% (1/0) | – | 5/0%/0% | 11/9%/9% |
| trade:P2: Accomplice ↔ P4: Gardener | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 9.1 | 50% (1/0) | – | 6/17%/17% | 10/0%/0% |
| trade:P2: Accomplice ↔ P3: Agents | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/0%/0% | 7/14%/14% |
| trade:P4: Line Cutters ↔ P3: Volunteer | MIXED | 16 | 13% | 0% | 6% | – | – | – | 24.1 | 0% (0/0) | – | 5/0%/20% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Volunteer | MIXED | 16 | 19% | 0% | 6% | – | – | – | 3.4 | 0% (0/0) | – | 7/0%/0% | 9/0%/11% |
| trade:P2: Accomplice ↔ P1: Volunteer | MIXED | 16 | 13% | 0% | 6% | – | – | – | 6.7 | 0% (0/0) | – | 6/0%/17% | 10/0%/0% |
| trade:P4: Mob ↔ Shop: Wallflower | MIXED | 16 | 19% | 0% | 6% | – | – | – | 3.2 | 67% (0/2) | – | 2/0%/0% | 14/0%/7% |
| trade:P3: Deprogrammers ↔ P4: Gardener | MIXED | 16 | 25% | 0% | 6% | – | – | – | 10.4 | 0% (0/0) | – | 8/0%/0% | 8/0%/13% |
| followers:top | MIXED | 10103 | 35% | 15% | 6% | 23% | 0% | 1% | 8.3 | 29% (317/684) | 387/0%/0% | 4071/1%/1% | 5645/27%/11% |
| choose member:P1's Dabblers (3) | MIXED | 33 | 30% | 3% | 6% | 0% | 0% | 100% | 9.4 | 10% (1/0) | – | 3/0%/0% | 30/3%/7% |
| trade:P2: Deprogrammers ↔ P4: Cutpurse | MIXED | 17 | 18% | 6% | 6% | 0% | 0% | 0% | 5.4 | 0% (0/0) | – | 5/0%/0% | 12/8%/8% |
| trade:P1: Deprogrammers ↔ P4: Accomplice | MIXED | 17 | 18% | 6% | 6% | 0% | 0% | 0% | 6.6 | 33% (1/0) | – | 7/14%/14% | 10/0%/0% |
| trade:P4: Loyalists ↔ P1: Deprogrammers | MIXED | 17 | 18% | 6% | 6% | 0% | 0% | 0% | 23.6 | 33% (1/0) | – | 5/0%/0% | 12/8%/8% |
| trade:P3: Deprogrammers ↔ P4: Accomplice | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 8/0%/0% | 9/11%/11% |
| trade:P1: HR ↔ Shop: Wallflower | MIXED | 17 | 12% | 6% | 6% | 0% | 0% | 0% | 4.1 | 50% (1/0) | – | 2/0%/0% | 15/7%/7% |
| trade:P2: Agents ↔ P3: Deprogrammers | MIXED | 17 | 18% | 6% | 6% | 0% | 0% | 0% | 12.5 | 33% (1/0) | – | 10/10%/10% | 7/0%/0% |
| trade:P1: Loyalists ↔ P4: Triplets | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 13/8%/8% |
| trade:P2: Window Dressers ↔ P4: Scouts | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 3/33%/33% | 14/0%/0% |
| choose member:Scouts | MIXED | 17 | 47% | 0% | 6% | – | – | – | 11.4 | 13% (0/1) | – | 9/0%/11% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Cutpurse | MIXED | 17 | 18% | 0% | 6% | – | – | – | 1.9 | 0% (0/0) | – | 2/0%/0% | 15/0%/7% |
| trade:P1: Fan Club ↔ P3: Busker | MIXED | 17 | 12% | 0% | 6% | – | – | – | 7.1 | 50% (0/1) | – | 4/0%/0% | 13/0%/8% |
| trade:P4: Roadie ↔ P1: Deprogrammers | MIXED | 17 | 24% | 0% | 6% | – | – | – | -6.0 | 0% (0/0) | – | 10/0%/0% | 7/0%/14% |
| trade:P1: Deprogrammers ↔ P3: Dabblers | MIXED | 18 | 17% | 6% | 6% | 0% | 0% | 0% | 24.9 | 33% (1/0) | – | 12/8%/8% | 6/0%/0% |
| trade:P2: Loyalists ↔ P4: Scouts | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 33.7 | 50% (1/0) | – | – | 18/6%/6% |
| trade:P1: Loyalists ↔ P3: Stunt Double | MIXED | 18 | 22% | 0% | 6% | – | – | – | 7.7 | 25% (0/1) | – | 3/0%/0% | 15/0%/7% |
| trade:P3: Dabblers ↔ P1: Deprogrammers | MIXED | 18 | 11% | 0% | 6% | – | – | – | 18.1 | 0% (0/0) | – | 12/0%/8% | 6/0%/0% |
| trade:P4: Party Crasher ↔ P3: Deprogrammers | MIXED | 18 | 11% | 0% | 6% | – | – | – | 18.0 | 0% (0/0) | – | 6/0%/0% | 12/0%/8% |
| trade:P1: Dabblers ↔ P3: Volunteer | MIXED | 18 | 22% | 0% | 6% | – | – | – | 5.8 | 50% (0/2) | – | 6/0%/0% | 12/0%/8% |
| trade:P1: Gardener ↔ P3: Volunteer | MIXED | 19 | 26% | 11% | 5% | 0% | 0% | 50% | 19.9 | 0% (0/0) | – | 7/14%/0% | 12/8%/8% |
| trade:P1: Connoisseurs ↔ P4: Deprogrammers | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/13% | 11/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Recruit Bonus | MIXED | 19 | 16% | 5% | 5% | 0% | 0% | 100% | 12.2 | 33% (0/1) | – | 11/9%/9% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Roadie | MIXED | 19 | 21% | 5% | 5% | 0% | 0% | 0% | -1.4 | 25% (1/0) | – | 10/0%/0% | 9/11%/11% |
| choose member:P4's Shopkeeper (4) | MIXED | 19 | 37% | 0% | 5% | – | – | – | 4.9 | 0% (0/0) | – | 2/0%/50% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | MIXED | 19 | 11% | 0% | 5% | – | – | – | 8.3 | 0% (0/0) | – | 9/0%/11% | 10/0%/0% |
| trade:P4: Scouts ↔ P1: Deprogrammers | MIXED | 19 | 16% | 0% | 5% | – | – | – | 11.0 | 0% (0/0) | – | 6/0%/17% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Deprogrammers | MIXED | 19 | 16% | 0% | 5% | – | – | – | 8.1 | 0% (0/0) | – | 11/0%/9% | 8/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Deprogrammers | MIXED | 19 | 26% | 0% | 5% | – | – | – | 9.6 | 0% (0/0) | – | 8/0%/0% | 11/0%/9% |
| trade:P3: Shopkeeper ↔ P1: Deprogrammers | MIXED | 20 | 15% | 10% | 5% | 0% | 0% | 0% | 7.9 | 33% (1/0) | – | 9/11%/0% | 11/9%/9% |
| choose member:P3's Line Cutters (2) | MIXED | 60 | 32% | 5% | 5% | 33% | 0% | 100% | 8.1 | 16% (2/1) | – | 5/0%/0% | 55/5%/5% |
| trade:P2: Triplets ↔ P3: Volunteer | MIXED | 20 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/20% | 15/0%/0% |
| trade:P2: Dabblers ↔ P4: Triplets | MIXED | 20 | 5% | 5% | 5% | 0% | 0% | 100% | – | 100% (1/0) | – | 6/17%/17% | 14/0%/0% |
| trade:P2: Scouts ↔ P3: Volunteer | MIXED | 20 | 10% | 5% | 5% | 0% | 0% | 0% | 18.4 | 50% (1/0) | – | 8/13%/13% | 12/0%/0% |
| choose member:P3's Alchemists (5) | MIXED | 20 | 65% | 0% | 5% | – | – | – | 10.5 | 0% (0/0) | – | 2/0%/0% | 18/0%/6% |
| trade:P2: Cutpurse ↔ P3: Deprogrammers | MIXED | 20 | 20% | 0% | 5% | – | – | – | 11.7 | 0% (0/0) | – | 3/0%/0% | 17/0%/6% |
| trade:P4: Loyalists ↔ P2: Dabblers | MIXED | 20 | 10% | 0% | 5% | – | – | – | 0.8 | 0% (0/0) | – | 3/0%/33% | 17/0%/0% |
| trade:P2: Scouts ↔ P3: Deprogrammers | MIXED | 22 | 9% | 5% | 5% | 0% | 0% | 0% | 15.6 | 50% (1/0) | – | 5/0%/0% | 17/6%/6% |
| trade:P1: Dabblers ↔ P2: Volunteer | MIXED | 22 | 23% | 5% | 5% | 0% | 0% | 0% | 21.9 | 20% (1/0) | – | 5/20%/20% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Scouts | MIXED | 22 | 14% | 0% | 5% | – | – | – | 6.2 | 0% (0/0) | – | 7/0%/0% | 15/0%/7% |
| trade:P1: Deprogrammers ↔ P2: Volunteer | MIXED | 22 | 23% | 0% | 5% | – | – | – | 10.3 | 20% (0/1) | – | 9/0%/0% | 13/0%/8% |
| trade:P1: Scouts ↔ P4: Volunteer | MIXED | 22 | 18% | 0% | 5% | – | – | – | 11.2 | 25% (0/1) | – | 6/0%/0% | 16/0%/6% |
| trade:P2: Accomplice ↔ Shop: Triplets | MIXED | 24 | 8% | 4% | 4% | 0% | 0% | 0% | 39.6 | 0% (0/0) | – | 13/0%/0% | 11/9%/9% |
| trade:P1: Cutpurse ↔ P2: Deprogrammers | MIXED | 24 | 8% | 4% | 4% | 0% | 0% | 0% | 23.2 | 50% (1/0) | – | 16/0%/0% | 8/13%/13% |
| trade:P1: Line Cutters ↔ P3: Volunteer | MIXED | 25 | 32% | 12% | 4% | 33% | 0% | 0% | 13.3 | 25% (2/0) | – | 10/10%/0% | 15/13%/7% |
| trade:P1: Roadie ↔ P4: Deprogrammers | MIXED | 25 | 12% | 4% | 4% | 0% | 0% | 0% | 26.5 | 33% (1/0) | – | 11/0%/0% | 14/7%/7% |
| trade:P1: Scouts ↔ P2: Deprogrammers | MIXED | 25 | 16% | 0% | 4% | – | – | – | 16.5 | 0% (0/0) | – | 7/0%/0% | 18/0%/6% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | MIXED | 27 | 11% | 0% | 4% | – | – | – | 3.6 | 0% (0/0) | – | 9/0%/0% | 18/0%/6% |
| trade:P4: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 27 | 11% | 0% | 4% | – | – | – | 10.9 | 0% (0/0) | – | 6/0%/17% | 21/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Line Cutters | MIXED | 28 | 14% | 0% | 4% | – | – | – | 19.0 | 0% (0/0) | – | 8/0%/0% | 20/0%/5% |
| trade:P3: Deprogrammers ↔ P2: Accomplice | MIXED | 28 | 11% | 0% | 4% | – | – | – | 5.0 | 0% (0/0) | – | 9/0%/0% | 19/0%/5% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 29 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 13/8%/8% | 16/0%/0% |
| trade:P1: Dabblers ↔ P4: Triplets | MIXED | 29 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/25% | 25/0%/0% |
| trade:P1: Roadie ↔ P2: Deprogrammers | MIXED | 29 | 7% | 3% | 3% | 0% | 0% | 0% | 22.7 | 50% (1/0) | – | 18/6%/6% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Recruit Bonus | MIXED | 29 | 10% | 3% | 3% | 0% | 0% | 0% | 16.4 | 67% (1/1) | – | 6/17%/17% | 23/0%/0% |
| trade:P3: Line Cutters ↔ P4: Volunteer | MIXED | 29 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/0%/0% | 18/6%/6% |
| trade:P3: Dabblers ↔ P2: Line Cutters | MIXED | 29 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/0%/0% | 18/6%/6% |
| trade:P2: Muse ↔ P3: Deprogrammers | MIXED | 29 | 14% | 0% | 3% | – | – | – | 17.5 | 0% (0/0) | – | 5/0%/0% | 24/0%/4% |
| trade:P4: Loyalists ↔ Shop: Old Maid | MIXED | 30 | 13% | 3% | 3% | 0% | 0% | 0% | 6.0 | 50% (0/2) | – | 1/0%/0% | 29/3%/3% |
| trade:P2: Scouts ↔ P4: Triplets | MIXED | 31 | 3% | 3% | 3% | 0% | 0% | 0% | – | 0% (0/0) | – | 8/13%/13% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Volunteer | MIXED | 35 | 31% | 6% | 3% | 0% | 0% | 0% | 12.3 | 18% (0/2) | – | 17/6%/0% | 18/6%/6% |
| trade:P2: Accomplice ↔ P3: Deprogrammers | MIXED | 35 | 20% | 0% | 3% | – | – | – | 10.4 | 0% (0/0) | – | 11/0%/0% | 24/0%/4% |
| trade:P1: Con Men ↔ Shop: Old Maid | MIXED | 36 | 11% | 6% | 3% | 50% | 0% | 0% | 33.7 | 50% (2/0) | – | 7/14%/0% | 29/3%/3% |
| choose member:P4's Agents (3) | MIXED | 36 | 11% | 0% | 3% | – | – | – | 7.6 | 0% (0/0) | – | 5/0%/0% | 31/0%/3% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | MIXED | 38 | 13% | 0% | 3% | – | – | – | 10.2 | 0% (0/0) | – | 19/0%/0% | 19/0%/5% |
| choose member:P2's Scouts (3) | MIXED | 39 | 18% | 0% | 3% | – | – | – | 7.5 | 0% (0/0) | – | 4/0%/0% | 35/0%/3% |
| trade:P2: Line Cutters ↔ P1: Volunteer | MIXED | 40 | 10% | 0% | 3% | – | – | – | 7.3 | 25% (0/1) | – | 16/0%/0% | 24/0%/4% |
| trade:P4: Con Men ↔ Shop: Old Maid | MIXED + MISJUDGED | 42 | 19% | 7% | 2% | 33% | 0% | 0% | 22.1 | 63% (3/2) | – | 11/9%/0% | 31/6%/3% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED | 42 | 12% | 5% | 2% | 50% | 0% | 0% | 5.5 | 20% (0/1) | – | 22/5%/0% | 20/5%/5% |
| trade:P2: Deprogrammers ↔ P3: Recruit Bonus | MIXED | 49 | 14% | 0% | 2% | – | – | – | 16.7 | 14% (0/1) | – | 24/0%/0% | 25/0%/4% |
| trade:P3: Deprogrammers ↔ P2: Line Cutters | MIXED | 38 | 18% | 8% | 0% | 100% | 0% | 0% | 13.1 | 29% (1/1) | – | 21/14%/0% | 17/0%/0% |
| trade:P1: Patriarch ↔ Shop: Old Maid | MIXED | 27 | 15% | 7% | 0% | 50% | 0% | 0% | 9.5 | 50% (1/1) | – | 3/33%/0% | 24/4%/0% |
| trade:P2: Alchemists ↔ Shop: Old Maid | MIXED | 27 | 22% | 7% | 0% | 100% | 0% | 0% | 9.3 | 17% (1/0) | – | 6/0%/0% | 21/10%/0% |
| trade:P2: Deprogrammers ↔ P4: Volunteer | MIXED | 29 | 28% | 7% | 0% | 50% | 0% | 0% | 20.3 | 38% (1/2) | – | 8/0%/0% | 21/10%/0% |
| trade:P1: Accomplice ↔ P4: Cutpurse | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 11.8 | 50% (1/0) | – | 6/17%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P4: Line Cutters | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 8/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Recruit Bonus | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 7/14%/0% |
| trade:P1: Line Cutters ↔ P4: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 9/0%/0% |
| trade:P1: Shift Crew ↔ P3: Scouts | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 2.1 | 0% (0/0) | – | 3/0%/0% | 12/8%/0% |
| trade:P2: Loyalists ↔ P3: Party Crasher | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 13.3 | 50% (1/0) | – | – | 15/7%/0% |
| trade:P2: Deprogrammers ↔ Shop: Recruit Bonus | MIXED | 15 | 20% | 7% | 0% | 100% | 0% | 0% | 6.9 | 33% (1/0) | – | 4/0%/0% | 11/9%/0% |
| trade:P3: Patriarch ↔ Shop: Old Maid | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Line Cutters | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 6.5 | 0% (0/0) | – | 9/11%/0% | 7/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Martyrs | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 2.2 | 50% (0/1) | – | 10/10%/0% | 6/0%/0% |
| trade:P2: Caravan ↔ P3: Con Men | MIXED | 16 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P2: Cutpurse ↔ P3: Volunteer | MIXED | 17 | 12% | 6% | 0% | 0% | 0% | 0% | 18.6 | 0% (0/0) | – | 8/13%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ Shop: Old Maid | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 3/33%/0% | 14/0%/0% |
| trade:P4: Triplets ↔ Shop: Recruit Bonus | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 15.1 | 50% (1/0) | – | 5/20%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P2: Triplets | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 9/0%/0% |
| trade:P4: Drifters ↔ P1: Volunteer | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Triplets | MIXED | 18 | 11% | 6% | 0% | 0% | 0% | 0% | 2.5 | 0% (0/0) | – | 10/0%/0% | 8/13%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | MIXED | 18 | 22% | 6% | 0% | 0% | 0% | 0% | 16.5 | 25% (1/0) | – | 5/0%/0% | 13/8%/0% |
| trade:P3: Con Men ↔ Shop: Desperado | MIXED | 19 | 11% | 5% | 0% | 0% | 0% | 0% | 32.1 | 50% (1/0) | – | 6/0%/0% | 13/8%/0% |
| trade:P1: Deprogrammers ↔ P4: Dabblers | MIXED | 19 | 11% | 5% | 0% | 0% | 0% | 0% | 6.5 | 50% (1/0) | – | 3/0%/0% | 16/6%/0% |
| trade:P1: Loyalists ↔ Shop: Old Maid | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 19.4 | 50% (1/0) | – | 3/0%/0% | 17/6%/0% |
| trade:P2: Roadie ↔ P4: Recruit Bonus | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ P1: Scouts | MIXED | 21 | 10% | 5% | 0% | 0% | 0% | 0% | 8.5 | 0% (0/0) | – | 4/0%/0% | 17/6%/0% |
| trade:P4: Party Crasher ↔ P2: Triplets | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 4/25%/0% | 17/0%/0% |
| trade:P2: Trendsetters ↔ P4: Line Cutters | MIXED | 21 | 14% | 5% | 0% | 0% | 0% | 0% | 13.1 | 67% (1/1) | – | 12/0%/0% | 9/11%/0% |
| trade:P2: Accomplice ↔ P3: Volunteer | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 2.1 | 50% (1/0) | – | 7/14%/0% | 14/0%/0% |
| trade:P4: Busker ↔ P2: Roadie | MIXED | 21 | 14% | 5% | 0% | 100% | 0% | 0% | 36.5 | 33% (1/0) | – | 11/9%/0% | 10/0%/0% |
| trade:P2: Busker ↔ P4: Scouts | MIXED | 22 | 9% | 5% | 0% | 100% | 0% | 0% | 9.6 | 50% (1/0) | – | 7/14%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ P4: Dabblers | MIXED | 23 | 4% | 4% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 2/0%/0% | 21/5%/0% |
| trade:P2: Gardener ↔ P4: Scouts | MIXED | 23 | 13% | 4% | 0% | 100% | 0% | 0% | 11.2 | 33% (1/0) | – | 8/0%/0% | 15/7%/0% |
| trade:P1: Deprogrammers ↔ Shop: Triplets | MIXED | 24 | 8% | 4% | 0% | 0% | 0% | 0% | 27.8 | 50% (1/0) | – | 14/0%/0% | 10/10%/0% |
| trade:P3: Deprogrammers ↔ Shop: Cashier | MIXED | 24 | 8% | 4% | 0% | 100% | 0% | 0% | 18.1 | 0% (0/0) | – | 13/8%/0% | 11/0%/0% |
| trade:P2: Scouts ↔ Shop: Triplets | MIXED | 25 | 8% | 4% | 0% | 100% | 0% | 0% | 32.0 | 50% (1/0) | – | 7/14%/0% | 18/0%/0% |
| trade:P4: Patriarch ↔ Shop: Old Maid | MIXED | 26 | 15% | 4% | 0% | 100% | 0% | 0% | 14.7 | 25% (1/0) | – | 8/0%/0% | 18/6%/0% |
| trade:P2: Shopkeeper ↔ P4: Scouts | MIXED | 26 | 4% | 4% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 9/11%/0% | 17/0%/0% |
| trade:P3: Triplets ↔ P4: Deprogrammers | MIXED | 27 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 17/0%/0% |
| trade:P2: Con Men ↔ Shop: Old Maid | MIXED | 28 | 7% | 4% | 0% | 0% | 0% | 0% | 21.1 | 0% (0/0) | – | 10/10%/0% | 18/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | MIXED | 29 | 10% | 3% | 0% | 0% | 0% | 0% | 11.5 | 0% (0/0) | – | 8/13%/0% | 21/0%/0% |
| trade:P1: Dabblers ↔ P4: Volunteer | MIXED | 32 | 13% | 3% | 0% | 100% | 0% | 0% | 6.8 | 50% (1/1) | – | 12/0%/0% | 20/5%/0% |
| trade:P3: Deprogrammers ↔ Shop: Old Maid | MIXED | 33 | 12% | 3% | 0% | 0% | 0% | 0% | 21.9 | 25% (1/0) | – | 11/0%/0% | 22/5%/0% |
| choose member:P1's Window Dressers (4) | MIXED | 18 | 50% | 0% | 0% | – | – | – | 11.3 | 11% (0/1) | – | – | 18/0%/0% |
| choose member:P2's Kingpin (4) | MIXED | 46 | 28% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 3/0%/0% | 43/0%/0% |
| trade:P2: Polisher ↔ P4: Line Cutters | MIXED | 15 | 13% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Scouts | MIXED | 20 | 10% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 13/0%/0% | 7/0%/0% |
| trade:P1: Party Crasher ↔ P4: Drifters | MIXED | 17 | 12% | 0% | 0% | – | – | – | 16.9 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| choose member:P1's Recruit Bonus (3) | MIXED | 20 | 20% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| choose member:P1's Scouts (3) | MIXED | 28 | 14% | 0% | 0% | – | – | – | 16.5 | 0% (0/0) | – | 3/0%/0% | 25/0%/0% |
| choose member:P1's Party Crasher (4) | MIXED | 30 | 13% | 0% | 0% | – | – | – | 3.8 | 0% (0/0) | – | 3/0%/0% | 27/0%/0% |
| trade:P2: Panel ↔ Shop: Anarchist | MIXED | 16 | 13% | 0% | 0% | – | – | – | 22.8 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P4: Deprogrammers | MIXED | 19 | 11% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Volunteer ↔ P3: Line Cutters | MIXED | 20 | 10% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P3: Busker | MIXED | 20 | 10% | 0% | 0% | – | – | – | 10.3 | 50% (0/1) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Line Cutters ↔ P1: Volunteer | MIXED | 43 | 12% | 0% | 0% | – | – | – | 18.7 | 20% (0/1) | – | 21/0%/0% | 22/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Line Cutters | MIXED | 18 | 17% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P3: Gardener | MIXED | 19 | 21% | 0% | 0% | – | – | – | 11.9 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Gardener ↔ P1: Dabblers | MIXED | 15 | 20% | 0% | 0% | – | – | – | 8.6 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Caravan ↔ Shop: Harmonist | MIXED | 17 | 12% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | MIXED | 16 | 13% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Old Maid | MIXED | 19 | 11% | 0% | 0% | – | – | – | 28.1 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P3: Volunteer | MIXED | 29 | 14% | 0% | 0% | – | – | – | 11.5 | 25% (0/1) | – | 14/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 6.8 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P2's Party Crasher (4) | MIXED | 28 | 11% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 4/0%/0% | 24/0%/0% |
| trade:P4: Cutpurse ↔ P3: Line Cutters | MIXED | 17 | 12% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P2: Accomplice | MIXED | 21 | 14% | 0% | 0% | – | – | – | 9.7 | 33% (0/1) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Accomplice ↔ P1: Dabblers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 13.6 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| choose member:P2's Double Agent (8) | MIXED | 16 | 31% | 0% | 0% | – | – | – | 8.5 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P1: Volunteer ↔ P2: Deprogrammers | MIXED | 17 | 18% | 0% | 0% | – | – | – | 9.1 | 67% (0/2) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Triplets | MIXED | 31 | 13% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 7/0%/0% | 24/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Volunteer | MIXED | 27 | 11% | 0% | 0% | – | – | – | 7.2 | 0% (0/0) | – | 4/0%/0% | 23/0%/0% |
| choose member:P2's Recruit Bonus (3) | MIXED | 24 | 13% | 0% | 0% | – | – | – | 17.5 | 0% (0/0) | – | 1/0%/0% | 23/0%/0% |
| choose member:P3's Agents (3) | MIXED | 35 | 20% | 0% | 0% | – | – | – | 16.3 | 14% (0/1) | – | 6/0%/0% | 29/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Deprogrammers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Recruit Bonus | MIXED | 20 | 10% | 0% | 0% | – | – | – | 11.2 | 0% (0/0) | – | 13/0%/0% | 7/0%/0% |
| trade:P4: Alchemists ↔ P1: Cutpurse | MIXED | 15 | 13% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| choose member:P3's Sticky Fingers (4) | MIXED | 16 | 19% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P3's Extortionist (7) | MIXED | 23 | 35% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P2: Accomplice ↔ P3: Polisher | MIXED | 18 | 11% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Volunteer | MIXED | 19 | 11% | 0% | 0% | – | – | – | 17.1 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P3: Line Cutters | MIXED | 17 | 24% | 0% | 0% | – | – | – | 7.0 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Cutpurse ↔ P2: Volunteer | MIXED | 15 | 20% | 0% | 0% | – | – | – | 18.4 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Line Cutters ↔ P2: Volunteer | MIXED | 19 | 11% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P2: Volunteer | MIXED | 16 | 19% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Accomplice | MIXED | 28 | 18% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 16/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Line Cutters | MIXED | 27 | 15% | 0% | 0% | – | – | – | 11.2 | 25% (0/1) | – | 6/0%/0% | 21/0%/0% |
| trade:P2: Accomplice ↔ P1: Deprogrammers | MIXED | 27 | 15% | 0% | 0% | – | – | – | 12.6 | 0% (0/0) | – | 16/0%/0% | 11/0%/0% |
| choose member:P1's Connoisseurs (4) | MIXED | 15 | 27% | 0% | 0% | – | – | – | 15.0 | 25% (0/1) | – | – | 15/0%/0% |
| choose member:P2's Extortionist (7) | MIXED | 18 | 50% | 0% | 0% | – | – | – | 11.2 | 22% (0/2) | – | – | 18/0%/0% |
| choose member:P1's Stunt Double (5) | MIXED | 17 | 24% | 0% | 0% | – | – | – | 6.5 | 25% (0/1) | – | – | 17/0%/0% |
| choose member:P2's Cutpurse (3) | MIXED | 30 | 20% | 0% | 0% | – | – | – | 12.4 | 17% (0/1) | – | 4/0%/0% | 26/0%/0% |
| trade:P2: Busker ↔ P3: Deprogrammers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 14.0 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Regular | MIXED | 16 | 19% | 0% | 0% | – | – | – | 17.7 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Scouts | MIXED | 22 | 14% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Alchemists ↔ P4: Scouts | MIXED | 16 | 13% | 0% | 0% | – | – | – | 18.9 | 50% (0/1) | – | – | 16/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Volunteer | MIXED | 26 | 15% | 0% | 0% | – | – | – | 10.9 | 25% (0/1) | – | 6/0%/0% | 20/0%/0% |
| trade:P3: Loyalists ↔ P4: Recruit Bonus | MIXED | 16 | 19% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Deprogrammers | MIXED | 20 | 10% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ Shop: Desperado | MIXED | 21 | 14% | 0% | 0% | – | – | – | 17.4 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P3: Deprogrammers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 4.5 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Deprogrammers | MIXED | 20 | 10% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Old Maid | MIXED | 20 | 10% | 0% | 0% | – | – | – | 12.0 | 50% (0/1) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Deprogrammers | MIXED | 27 | 11% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Alchemists | MIXED | 18 | 17% | 0% | 0% | – | – | – | 12.1 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| choose member:P2's Alchemists (5) | MIXED | 21 | 43% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Con Men ↔ Shop: Window Shopper | MIXED | 18 | 11% | 0% | 0% | – | – | – | 30.1 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P4's Party Crasher (4) | MIXED | 21 | 19% | 0% | 0% | – | – | – | 16.5 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| choose member:P3's Recruit Bonus (3) | MIXED | 23 | 13% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P1: Scouts ↔ Shop: Cashier | MIXED | 16 | 13% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Con Men ↔ P2: Loyalists | MIXED | 17 | 12% | 0% | 0% | – | – | – | 14.5 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Busker ↔ P1: Roadie | MIXED | 15 | 20% | 0% | 0% | – | – | – | 14.2 | 100% (0/3) | – | 11/0%/0% | 4/0%/0% |
| choose member:P3's Anarchist (7) | MIXED | 24 | 17% | 0% | 0% | – | – | – | 23.2 | 0% (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Extortionist ↔ Shop: Old Maid | MIXED | 15 | 13% | 0% | 0% | – | – | – | 10.9 | 50% (0/1) | – | – | 15/0%/0% |
| choose member:P4's Extortionist (7) | MIXED | 18 | 39% | 0% | 0% | – | – | – | 9.8 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Stunt Double ↔ P1: Loyalists | MIXED | 17 | 18% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P4: Deprogrammers | MIXED | 19 | 11% | 0% | 0% | – | – | – | 8.8 | 0% (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | MIXED | 19 | 11% | 0% | 0% | – | – | – | 8.8 | 0% (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Polisher ↔ P1: Volunteer | MIXED | 15 | 13% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| choose member:P4's Alchemists (5) | MIXED | 18 | 33% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P3: Scouts | MIXED | 20 | 20% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P1: Exporters ↔ Shop: Old Maid | MIXED | 23 | 22% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 3/0%/0% | 20/0%/0% |
| choose member:P3's Gardener (3) | MIXED | 16 | 13% | 0% | 0% | – | – | – | 7.2 | 50% (0/1) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P2: Scouts | MIXED | 16 | 19% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Line Cutters | MIXED | 15 | 13% | 0% | 0% | – | – | – | 19.5 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Agents ↔ P1: Volunteer | MIXED | 20 | 10% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Agents ↔ P3: Volunteer | MIXED | 15 | 13% | 0% | 0% | – | – | – | 33.4 | 50% (0/1) | – | 8/0%/0% | 7/0%/0% |
| choose member:P1's Busker (4) | FILLER | 22 | 32% | 14% | 5% | 0% | 0% | 100% | 10.0 | 57% (3/1) | – | 3/33%/0% | 19/11%/5% |
| choose member:P1's Panel (7) | FILLER | 22 | 45% | 9% | 5% | 100% | 0% | 100% | 13.2 | 40% (0/4) | – | 1/0%/0% | 21/10%/5% |
| trade:P1: Deprogrammers ↔ P4: Triplets | FILLER | 23 | 4% | 4% | 4% | 0% | 0% | 100% | – | 0% (0/0) | – | 7/14%/14% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Volunteer | FILLER | 49 | 10% | 4% | 4% | 50% | 0% | 50% | 23.7 | 40% (0/2) | – | 20/5%/5% | 29/3%/3% |
| choose member:P2's Con Men (7) | FILLER | 25 | 64% | 16% | 4% | 25% | 0% | 100% | 20.9 | 19% (3/0) | – | 3/33%/0% | 22/14%/5% |
| choose member:P2's Dabblers (3) | FILLER | 50 | 20% | 6% | 4% | 0% | 0% | 100% | 6.8 | 20% (2/0) | – | 5/0%/20% | 45/7%/2% |
| choose member:P4's Trendsetters (4) | FILLER | 25 | 40% | 4% | 4% | 100% | 0% | 100% | 11.0 | 10% (1/0) | – | 3/0%/0% | 22/5%/5% |
| choose member:P4's Double Agent (8) | FILLER | 26 | 35% | 15% | 4% | 25% | 0% | 100% | 15.5 | 33% (3/0) | – | – | 26/15%/4% |
| trade:P1: Busker ↔ P3: Deprogrammers | FILLER | 26 | 8% | 4% | 4% | 0% | 0% | 100% | 28.8 | 50% (1/0) | – | 10/10%/10% | 16/0%/0% |
| choose member:P3's Dabblers (3) | FILLER | 27 | 30% | 7% | 4% | 0% | 0% | 100% | 7.5 | 25% (2/0) | – | 5/0%/0% | 22/9%/5% |
| choose member:P2's Grifter (8) | FILLER | 27 | 33% | 7% | 4% | 50% | 0% | 100% | 11.5 | 11% (1/0) | – | 3/0%/0% | 24/8%/4% |
| choose member:P1's Deprogrammers (3) | FILLER | 31 | 45% | 6% | 3% | 50% | 0% | 100% | 14.6 | 21% (2/1) | – | 7/0%/14% | 24/8%/0% |
| choose member:P3's Kingpin (4) | FILLER | 35 | 43% | 6% | 3% | 50% | 0% | 100% | 11.4 | 13% (2/0) | – | 1/0%/0% | 34/6%/3% |
| choose member:P4's Busker (4) | FILLER | 36 | 33% | 3% | 3% | 100% | 100% | 100% | 12.0 | 0% (0/0) | – | 5/0%/0% | 31/3%/3% |
| choose member:P4's Accomplice (3) | FILLER | 47 | 11% | 2% | 2% | 100% | 0% | 100% | 7.5 | 20% (1/0) | – | 8/0%/0% | 39/3%/3% |
| choose member:P1's Line Cutters (2) | FILLER | 49 | 33% | 2% | 2% | 0% | 0% | 100% | 11.9 | 0% (0/0) | – | 9/0%/0% | 40/3%/3% |
| choose member:P4's Cutpurse (3) | FILLER | 50 | 12% | 4% | 2% | 0% | 0% | 100% | 9.1 | 33% (2/0) | – | 7/0%/0% | 43/5%/2% |
| choose member:P3's Patriarch (6) | FILLER | 15 | 40% | 27% | 0% | 0% | 0% | 100% | 14.2 | 0% (0/0) | – | – | 15/27%/0% |
| choose member:P2's Timekeepers (4) | FILLER | 16 | 50% | 25% | 0% | 0% | 0% | 100% | 9.0 | 13% (1/0) | – | 4/0%/0% | 12/33%/0% |
| choose member:P4's Roadie (3) | FILLER | 16 | 38% | 19% | 0% | 0% | 0% | 100% | 12.5 | 17% (1/0) | – | 3/33%/0% | 13/15%/0% |
| choose member:P2's Stunt Double (5) | FILLER + MISJUDGED | 22 | 50% | 14% | 0% | 33% | 0% | 100% | 15.5 | 64% (2/5) | – | 2/50%/0% | 20/10%/0% |
| choose member:P3's Double Agent (8) | FILLER | 17 | 29% | 12% | 0% | 0% | 0% | 100% | 8.1 | 20% (1/0) | – | – | 17/12%/0% |
| choose member:P1's Kingpin (4) | FILLER | 26 | 38% | 12% | 0% | 0% | 0% | 100% | 13.1 | 30% (3/0) | – | 4/0%/0% | 22/14%/0% |
| choose member:Dabblers | FILLER | 19 | 58% | 11% | 0% | 0% | 0% | 100% | 7.0 | 27% (2/1) | – | 5/0%/0% | 14/14%/0% |
| choose member:P3's Chronicler (5) | FILLER | 21 | 29% | 10% | 0% | 50% | 0% | 100% | 15.2 | 17% (1/0) | – | – | 21/10%/0% |
| choose member:P3's Stunt Double (5) | FILLER | 23 | 17% | 9% | 0% | 100% | 100% | 100% | 6.0 | 0% (0/0) | – | 1/100%/0% | 22/5%/0% |
| choose member:P4's Grifter (8) | FILLER | 29 | 34% | 7% | 0% | 50% | 0% | 100% | 10.0 | 10% (1/0) | – | 1/0%/0% | 28/7%/0% |
| trade:P2: Gardener ↔ P4: Volunteer | FILLER | 16 | 13% | 6% | 0% | 100% | 0% | 100% | 16.4 | 50% (1/0) | – | 11/9%/0% | 5/0%/0% |
| trade:P2: Accomplice ↔ P4: Line Cutters | FILLER | 17 | 6% | 6% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 10/10%/0% | 7/0%/0% |
| choose member:P2's Toastmaster (3) | FILLER | 17 | 24% | 6% | 0% | 0% | 0% | 100% | 22.5 | 25% (1/0) | – | 4/25%/0% | 13/0%/0% |
| choose member:Agents | FILLER | 17 | 41% | 6% | 0% | 0% | 0% | 100% | 15.2 | 14% (1/0) | – | 10/10%/0% | 7/0%/0% |
| trade:P3: Volunteer ↔ P4: Scouts | FILLER | 17 | 12% | 6% | 0% | 100% | 0% | 100% | 2.4 | 0% (0/0) | – | 6/17%/0% | 11/0%/0% |
| choose member:P4's Dabblers (3) | FILLER | 19 | 37% | 5% | 0% | 100% | 0% | 100% | 14.9 | 0% (0/0) | – | 3/33%/0% | 16/0%/0% |
| trade:P2: Dabblers ↔ P4: Cutpurse | FILLER | 19 | 11% | 5% | 0% | 0% | 0% | 100% | 1.0 | 50% (1/0) | – | 5/20%/0% | 14/0%/0% |
| choose member:P2's Deprogrammers (3) | FILLER | 22 | 32% | 5% | 0% | 0% | 0% | 100% | 20.3 | 14% (1/0) | – | 6/0%/0% | 16/6%/0% |
| choose member:P2's Triplets (3) | FILLER | 24 | 8% | 4% | 0% | 100% | 0% | 100% | 27.2 | 50% (1/0) | – | 6/0%/0% | 18/6%/0% |
| choose member:P1's Alchemists (5) | FILLER | 31 | 35% | 3% | 0% | 0% | 0% | 100% | 13.1 | 18% (1/1) | – | 3/0%/0% | 28/4%/0% |
| choose member:P3's Deprogrammers (3) | FILLER | 31 | 42% | 3% | 0% | 0% | 0% | 100% | 16.0 | 0% (0/0) | – | 2/50%/0% | 29/0%/0% |
| choose member:P3's Scouts (3) | FILLER | 44 | 16% | 2% | 0% | 0% | 0% | 100% | 13.1 | 14% (1/0) | – | 3/0%/0% | 41/2%/0% |
| choose member:P2's Line Cutters (2) | FILLER | 46 | 11% | 2% | 0% | 100% | 0% | 100% | 5.7 | 20% (1/0) | – | 9/0%/0% | 37/3%/0% |
| trade:P2: Triplets ↔ P1: Volunteer | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.3 | 0% (0/0) | – | 5/0%/0% | 10/0%/10% |
| choose member:P3's Critic (3) | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.2 | 0% (0/0) | – | – | 15/0%/7% |
| trade:P3: Deprogrammers ↔ Shop: Alchemists | DEAD | 15 | 7% | 0% | 7% | – | – | – | -0.2 | 0% (0/0) | – | 7/0%/14% | 8/0%/0% |
| trade:P4: Drifters ↔ Shop: Triplets | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.4 | 0% (0/0) | – | 12/0%/8% | 3/0%/0% |
| trade:P3: Stunt Double ↔ P2: Deprogrammers | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 3/0%/0% | 13/0%/8% |
| trade:P4: Loyalists ↔ P2: Party Crasher | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.2 | 0% (0/0) | – | 2/0%/0% | 14/0%/7% |
| trade:P2: Muse ↔ P4: Line Cutters | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.4 | 0% (0/0) | – | 3/0%/0% | 13/0%/8% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | DEAD | 34 | 9% | 3% | 6% | 0% | 0% | 0% | 7.0 | 33% (0/1) | – | 14/0%/0% | 20/5%/10% |
| trade:P1: Volunteer ↔ P2: Line Cutters | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 8/0%/13% | 9/0%/0% |
| trade:P3: Busker ↔ P2: Agents | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 7/0%/14% | 10/0%/0% |
| trade:P4: Accomplice ↔ P3: Deprogrammers | DEAD | 17 | 6% | 0% | 6% | – | – | – | -0.1 | 0% (0/0) | – | 8/0%/0% | 9/0%/11% |
| trade:P4: Triplets ↔ P2: Accomplice | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.5 | 0% (0/0) | – | 4/0%/25% | 14/0%/0% |
| trade:P4: Roadie ↔ P3: Deprogrammers | DEAD | 18 | 6% | 0% | 6% | – | – | – | -0.1 | 0% (0/0) | – | 3/0%/0% | 15/0%/7% |
| trade:P3: Deprogrammers ↔ P4: Roadie | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 3/0%/0% | 16/0%/6% |
| trade:P4: Triplets ↔ P1: Deprogrammers | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 7/0%/14% | 13/0%/0% |
| trade:P3: Stunt Double ↔ P1: Roadie | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 11/0%/9% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Scouts | DEAD | 21 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 5/0%/0% | 16/0%/6% |
| trade:P2: Deprogrammers ↔ P1: Cutpurse | DEAD | 22 | 9% | 0% | 5% | – | – | – | 11.6 | 0% (0/0) | – | 15/0%/0% | 7/0%/14% |
| trade:P3: Deprogrammers ↔ P1: Gardener | DEAD | 22 | 9% | 0% | 5% | – | – | – | 2.6 | 0% (0/0) | – | 4/0%/0% | 18/0%/6% |
| trade:P1: Gardener ↔ P3: Deprogrammers | DEAD | 23 | 9% | 0% | 4% | – | – | – | 0.9 | 50% (0/1) | – | 4/0%/0% | 19/0%/5% |
| trade:P4: Triplets ↔ P2: Deprogrammers | DEAD | 24 | 8% | 0% | 4% | – | – | – | -1.2 | 0% (0/0) | – | 6/0%/0% | 18/0%/6% |
| trade:P1: Line Cutters ↔ P4: Volunteer | DEAD | 25 | 8% | 0% | 4% | – | – | – | 1.4 | 0% (0/0) | – | 9/0%/11% | 16/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Triplets | DEAD | 26 | 8% | 0% | 4% | – | – | – | 1.7 | 0% (0/0) | – | 6/0%/0% | 20/0%/5% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | DEAD | 26 | 8% | 0% | 4% | – | – | – | 10.1 | 0% (0/0) | – | 9/0%/0% | 17/0%/6% |
| trade:P2: Deprogrammers ↔ P1: Roadie | DEAD | 26 | 8% | 0% | 4% | – | – | – | 11.4 | 0% (0/0) | – | 17/0%/6% | 9/0%/0% |
| trade:P4: Triplets ↔ P1: Dabblers | DEAD | 27 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/25% | 23/0%/0% |
| trade:P4: Scouts ↔ P2: Volunteer | DEAD | 28 | 7% | 0% | 4% | – | – | – | 7.3 | 0% (0/0) | – | 12/0%/8% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 29 | 3% | 0% | 3% | – | – | – | 0.0 | 0% (0/0) | – | 13/0%/8% | 16/0%/0% |
| trade:P4: Triplets ↔ P2: Scouts | DEAD | 29 | 3% | 0% | 3% | – | – | – | 0.0 | 0% (0/0) | – | 8/0%/13% | 21/0%/0% |
| trade:P4: Triplets ↔ P2: Volunteer | DEAD | 33 | 9% | 0% | 3% | – | – | – | 5.0 | 0% (0/0) | – | 12/0%/0% | 21/0%/5% |
| choose member:P4's Scouts (3) | DEAD | 35 | 9% | 0% | 3% | – | – | – | 10.0 | 0% (0/0) | – | 6/0%/0% | 29/0%/3% |
| trade:P2: Deprogrammers ↔ P4: Line Cutters | DEAD | 37 | 8% | 0% | 3% | – | – | – | 9.4 | 33% (0/1) | – | 12/0%/8% | 25/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Scouts | DEAD | 38 | 5% | 0% | 3% | – | – | – | 13.4 | 0% (0/0) | – | 7/0%/0% | 31/0%/3% |
| choose member:P1's Accomplice (3) | DEAD | 47 | 6% | 2% | 2% | 100% | 0% | 100% | 7.1 | 33% (1/0) | – | 6/17%/0% | 41/0%/2% |
| trade:P4: Recruit Bonus ↔ P2: Volunteer | DEAD | 34 | 6% | 3% | 0% | 0% | 0% | 0% | 25.3 | 50% (1/0) | – | 9/0%/0% | 25/4%/0% |
| choose member:P3's Accomplice (3) | DEAD | 35 | 9% | 3% | 0% | 0% | 0% | 100% | 11.1 | 33% (1/0) | – | 3/0%/0% | 32/3%/0% |
| trade:P1: Roadie ↔ P3: Volunteer | DEAD | 38 | 5% | 3% | 0% | 100% | 100% | 0% | 32.5 | 0% (0/0) | – | 18/6%/0% | 20/0%/0% |
| trade:P3: Con Men ↔ Shop: Old Maid | DEAD | 41 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 34/0%/0% |
| choose member:P2's Accomplice (3) | DEAD | 53 | 9% | 2% | 0% | 100% | 0% | 100% | 4.3 | 20% (1/0) | – | 7/0%/0% | 46/2%/0% |
| trade:P1: Busker ↔ P4: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| pass:Don’t swap | DEAD | 1157 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 567/0%/0% | 590/0%/0% |
| trade:P1: Busker ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P1: Courier ↔ Shop: Closer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.1 | 0% (0/0) | – | – | 17/0%/0% |
| choose member:P1's Toastmaster (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P2's Critic (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Early Birds ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Trendsetters ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Snobs ↔ Shop: Old Maid | DEAD | 24 | 4% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 29 | 7% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P2: Kingpin ↔ Shop: Sticky Fingers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Anarchist ↔ Shop: Old Maid | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 26 | 4% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Polisher ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 34.3 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Scouts ↔ Shop: Old Maid | DEAD | 15 | 7% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P2: Accomplice ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P4: Cutpurse | DEAD | 25 | 4% | 0% | 0% | – | – | – | 23.2 | 0% (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Dabblers ↔ Shop: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P1: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P2: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | DEAD | 27 | 4% | 0% | 0% | – | – | – | 25.6 | 0% (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Cutpurse ↔ P2: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ P2: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P2: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P1: Scouts ↔ P4: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P4: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P4: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P4: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Accomplice ↔ P4: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Loyalists ↔ P4: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P4: Line Cutters ↔ P2: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 19.4 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Triplets ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| choose member:P3's Volunteer (1) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 25/0%/0% |
| choose member:P4's Triplets (3) | DEAD | 18 | 6% | 0% | 0% | – | – | – | 7.7 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Dyer ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Scouts ↔ P4: Deprogrammers | DEAD | 29 | 7% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P1: Party Crasher ↔ P2: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 14.9 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 29/0%/0% |
| trade:P4: Scouts ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P2: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P2: Stunt Double ↔ P4: Scouts | DEAD | 31 | 3% | 0% | 0% | – | – | – | 31.5 | 0% (0/0) | – | 3/0%/0% | 28/0%/0% |
| trade:P4: Scouts ↔ Shop: Recruit Bonus | DEAD | 21 | 5% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P2: Doppelganger ↔ P4: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 32.3 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Con Men ↔ Shop: Patriarch | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Busker ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P1: Polisher ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Philanthropists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Stunt Double ↔ P4: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Doppelganger ↔ P4: Busker | DEAD | 17 | 6% | 0% | 0% | – | – | – | 21.3 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P4: Busker ↔ Shop: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Busker ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ P2: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Doppelganger ↔ P2: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P2: Con Men ↔ Shop: Philanthropists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 7.7 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Polisher ↔ P3: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Polisher ↔ P4: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 27/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Chronicler ↔ P3: Busker | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 26/0%/0% |
| trade:P3: Busker ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ P1: Volunteer | DEAD | 19 | 5% | 0% | 0% | – | – | – | 1.5 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Stunt Double ↔ P3: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.9 | 100% (0/1) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Triplets | DEAD | 28 | 7% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 19/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P4: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Gardener ↔ P1: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Alchemists ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ Shop: Scouts | DEAD | 19 | 5% | 0% | 0% | – | – | – | 21.8 | 0% (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P4: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Alchemists ↔ Shop: Old Maid | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 26/0%/0% |
| trade:P3: Anarchist ↔ P4: Con Men | DEAD | 17 | 6% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Anarchist ↔ Shop: Old Maid | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P4: Panel ↔ Shop: Old Maid | DEAD | 23 | 9% | 0% | 0% | – | – | – | 19.8 | 50% (0/1) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ Shop: Old Maid | DEAD | 26 | 8% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P1: Scouts ↔ P2: Line Cutters | DEAD | 29 | 3% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 15/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P4: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Accomplice ↔ P2: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.3 | 100% (0/1) | – | 10/0%/0% | 6/0%/0% |
| trade:P4: Party Crasher ↔ P2: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Party Crasher ↔ P3: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P3: Volunteer | DEAD | 24 | 8% | 0% | 0% | – | – | – | 7.5 | 0% (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P4: Patriarch ↔ P1: Party Crasher | DEAD | 22 | 5% | 0% | 0% | – | – | – | 18.3 | 100% (0/1) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Line Cutters ↔ P2: Deprogrammers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 44.4 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| choose member:P3's Polisher (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Dabblers | DEAD | 32 | 6% | 0% | 0% | – | – | – | 10.2 | 50% (0/1) | – | 11/0%/0% | 21/0%/0% |
| trade:P3: Drifters ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Polisher ↔ P4: Dabblers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 4.2 | 0% (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Patriarch ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P4: Patriarch ↔ Shop: Tastemaker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P2: Deprogrammers | DEAD | 29 | 7% | 0% | 0% | – | – | – | 10.2 | 0% (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ P3: Polisher | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.2 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Con Men ↔ Shop: Gift Wrapper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Alchemists | DEAD | 30 | 3% | 0% | 0% | – | – | – | 1.9 | 100% (0/1) | – | 9/0%/0% | 21/0%/0% |
| trade:P4: Con Men ↔ Shop: Tastemaker | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P3: Alchemists ↔ P2: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 10.8 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Volunteer ↔ P4: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 22.3 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Loyalists ↔ Shop: Old Maid | DEAD | 26 | 4% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Scouts | DEAD | 30 | 7% | 0% | 0% | – | – | – | 9.7 | 50% (0/1) | – | 17/0%/0% | 13/0%/0% |
| trade:P2: Con Men ↔ P4: Loyalists | DEAD | 22 | 5% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 27.2 | 0% (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Loyalists ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P4: Triplets ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Triplets ↔ P2: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 26/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 7.2 | 0% (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P3: Volunteer ↔ Shop: Triplets | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Cutpurse ↔ P2: Line Cutters | DEAD | 23 | 9% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P4: Accomplice | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.8 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P3: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P4: Accomplice | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P4: Cutpurse ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Accomplice ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Accomplice ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P1: Con Men ↔ Shop: Exporters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Anarchist | DEAD | 20 | 5% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Recluse ↔ P4: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Accomplice | DEAD | 21 | 5% | 0% | 0% | – | – | – | 31.0 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Accomplice ↔ P2: Deprogrammers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 31.0 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Triplets ↔ P2: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Triplets ↔ P3: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 26.3 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 39.1 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 36/0%/0% |
| trade:P2: Dabblers ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Party Crasher ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Party Crasher ↔ P3: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P1: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Accomplice ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Triplets ↔ P3: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Recluse ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Volunteer ↔ P4: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Cashier | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Cashier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P4: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Triplets ↔ Shop: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 21/0%/0% |
| choose member:P4's Volunteer (1) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Dabblers ↔ P2: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 25/0%/0% |
| trade:P1: Dabblers ↔ P4: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Brokers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P1: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P1: Con Men ↔ P4: Patriarch | DEAD | 16 | 6% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Recluse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Patriarch ↔ Shop: Brokers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Patriarch ↔ Shop: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Clockmakers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ Shop: Regular | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 5/0%/0% |
| trade:P3: Dabblers ↔ P1: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P2: Stunt Double ↔ P3: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | -2.3 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ Shop: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Stunt Double ↔ P3: Dabblers | DEAD | 22 | 9% | 0% | 0% | – | – | – | 29.8 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P4: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Critic ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Agents ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P4: Panel | DEAD | 19 | 5% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Panel ↔ P3: Con Men | DEAD | 18 | 6% | 0% | 0% | – | – | – | 5.4 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Stunt Double ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Critic | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Critic ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Old Maid | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Stunt Double ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Volunteer ↔ Shop: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Old Maid | DEAD | 23 | 4% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Shift Crew ↔ P3: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Shift Crew ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Shift Crew ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ Shop: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P1: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P2: Deprogrammers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P4: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Patriarch | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 44 | 9% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 23/0%/0% | 21/0%/0% |
| trade:P3: Fan Club ↔ Shop: Old Maid | DEAD | 24 | 8% | 0% | 0% | – | – | – | 18.5 | 0% (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P3: Fan Club ↔ Shop: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Window Dressers ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Window Dressers ↔ P4: Critic | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Line Cutters ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 11.4 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Regular ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Old Maid | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P3: Dabblers ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Fan Club ↔ Shop: Old Maid | DEAD | 30 | 7% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P2: Agents ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Shift Crew ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | DEAD | 21 | 10% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P2: Timekeepers ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Timekeepers ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Scouts ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P4: Line Cutters | DEAD | 27 | 4% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P3: Con Men ↔ Shop: Anarchist | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Roadie ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Busker | DEAD | 15 | 7% | 0% | 0% | – | – | – | 36.4 | 0% (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Busker ↔ Shop: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ Shop: Old Maid | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P1: Roadie ↔ P3: Busker | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ P3: Agents | DEAD | 21 | 5% | 0% | 0% | – | – | – | 20.1 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ P1: Roadie | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Agents ↔ P1: Roadie | DEAD | 17 | 6% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Fan Club ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Busker ↔ P2: Line Cutters | DEAD | 24 | 4% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P2: Kingpin ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Con Men ↔ Shop: Anarchist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Agents ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Triplets | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.0 | 100% (0/1) | – | 12/0%/0% | 5/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Line Cutters | DEAD | 22 | 9% | 0% | 0% | – | – | – | 15.1 | 50% (0/1) | – | 12/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P1: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Line Cutters ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Alchemists | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 31/0%/0% |
| trade:P2: Panel ↔ Shop: Old Maid | DEAD | 27 | 4% | 0% | 0% | – | – | – | 39.4 | 0% (0/0) | – | 2/0%/0% | 25/0%/0% |
| trade:P4: Scouts ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Party Crasher ↔ P4: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Exporters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Alchemists ↔ Shop: Old Maid | DEAD | 29 | 7% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P1: Volunteer ↔ P3: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P1: Martyrs ↔ P3: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Martyrs ↔ P4: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P3: Deprogrammers | DEAD | 23 | 4% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 2/0%/0% |
| trade:P4: Busker ↔ Shop: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 3/0%/0% |
| trade:P4: Busker ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P4: Busker ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 8.9 | 0% (0/0) | – | 12/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Doppelganger ↔ P4: Agents | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.9 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P4: Agents | DEAD | 18 | 6% | 0% | 0% | – | – | – | 22.9 | 0% (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Busker ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P4: Dabblers | DEAD | 22 | 9% | 0% | 0% | – | – | – | 8.9 | 50% (0/1) | – | 9/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ Shop: Old Maid | DEAD | 30 | 3% | 0% | 0% | – | – | – | 9.2 | 0% (0/0) | – | 6/0%/0% | 24/0%/0% |
| trade:P4: Dabblers ↔ P2: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 3.6 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P4: Volunteer | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 11/0%/0% |
| trade:P1: Doormen ↔ Shop: Regular | DEAD | 18 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Dabblers ↔ Shop: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ P4: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Volunteer ↔ P4: Recruit Bonus | DEAD | 19 | 5% | 0% | 0% | – | – | – | 4.3 | 100% (0/1) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Loyalists ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Collector | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Anarchist ↔ Shop: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 42 | 5% | 0% | 0% | – | – | – | 10.5 | 0% (0/0) | – | 5/0%/0% | 37/0%/0% |
| trade:P1: Con Men ↔ Shop: Gift Wrapper | DEAD | 17 | 6% | 0% | 0% | – | – | – | 24.2 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| choose member:P2's Polisher (3) | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Cutpurse ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P1's Volunteer (1) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: High Society ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Cutpurse | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ P2: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: HR ↔ Shop: Extra Hand | DEAD | 15 | 7% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | – | 15/0%/0% |
| trade:P2: Triplets ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Scouts ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Snobs ↔ Shop: Window Shopper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Line Cutters ↔ P4: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 22.6 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Line Cutters | DEAD | 29 | 7% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 33 | 3% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Critic | DEAD | 15 | 7% | 0% | 0% | – | – | – | 16.4 | 100% (0/1) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ Shop: Old Money | DEAD | 20 | 5% | 0% | 0% | – | – | – | 1.7 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Party Crasher ↔ P3: Line Cutters | DEAD | 34 | 3% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 7/0%/0% | 27/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Window Dressers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Window Dressers ↔ P1: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ Shop: Desperado | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P2: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 18.1 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ Shop: Window Shopper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Cutpurse ↔ P2: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Cutpurse ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ Shop: Old Maid | DEAD | 30 | 7% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P1: Scouts ↔ Shop: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Cutpurse ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ Shop: Collector | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P1: Patriarch | DEAD | 17 | 6% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| choose member:P1's Agents (3) | DEAD | 22 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Roadie ↔ P4: Line Cutters | DEAD | 23 | 4% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P3: Scouts | DEAD | 15 | 7% | 0% | 0% | – | – | – | 32.6 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P3: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Alchemists ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ Shop: Clockmakers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ Shop: Courier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Line Cutters ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Anarchist ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 35 | 3% | 0% | 0% | – | – | – | 17.0 | 0% (0/0) | – | 12/0%/0% | 23/0%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 34 | 3% | 0% | 0% | – | – | – | 21.8 | 0% (0/0) | – | 16/0%/0% | 18/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ P3: Deprogrammers | DEAD | 32 | 6% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 6/0%/0% | 26/0%/0% |
| trade:P2: Triplets ↔ P4: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P2: Alchemists ↔ P3: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 19.0 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 33 | 3% | 0% | 0% | – | – | – | 16.8 | 0% (0/0) | – | 12/0%/0% | 21/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Triplets | DEAD | 28 | 7% | 0% | 0% | – | – | – | 21.3 | 0% (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Line Cutters | DEAD | 36 | 3% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 12/0%/0% | 24/0%/0% |
| trade:P4: Window Dressers ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Window Dressers ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Trendsetters ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Party Crasher | DEAD | 17 | 6% | 0% | 0% | – | – | – | 29.7 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Trendsetters ↔ P2: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 57.5 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P1: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P4: Scouts | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 27/0%/0% |
| trade:P2: Triplets ↔ P1: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | -1.8 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Triplets ↔ P4: Scouts | DEAD | 29 | 3% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P3: Busker ↔ Shop: Regular | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P4: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P2: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P4: Scouts ↔ P2: Triplets | DEAD | 27 | 4% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P3: Busker ↔ P4: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ P3: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Alchemists ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P3: Busker | DEAD | 25 | 4% | 0% | 0% | – | – | – | 16.9 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P2: Toastmaster ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Scouts | DEAD | 39 | 3% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 11/0%/0% | 28/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 28.6 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Panel ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Trendsetters ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P2: Deprogrammers | DEAD | 39 | 3% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 11/0%/0% | 28/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: High Society ↔ P4: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Agents ↔ P3: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Agents ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Muse ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Muse ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P2: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P3: Volunteer | DEAD | 34 | 9% | 0% | 0% | – | – | – | 27.7 | 0% (0/0) | – | 9/0%/0% | 25/0%/0% |
| trade:P1: Roadie ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P3: Busker | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P2: Roadie ↔ P4: Scouts | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 28/0%/0% |
| trade:P3: Busker ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Roadie | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 27/0%/0% |
| trade:P1: Trendsetters ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Trendsetters ↔ P4: Recruit Bonus | DEAD | 16 | 6% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 21 | 10% | 0% | 0% | – | – | – | 15.4 | 50% (0/1) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Loyalists ↔ P4: Scouts | DEAD | 22 | 5% | 0% | 0% | – | – | – | 23.8 | 0% (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 5.5 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Anarchist | DEAD | 22 | 9% | 0% | 0% | – | – | – | 10.2 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Line Cutters ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P2: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 25/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Old Maid | DEAD | 20 | 5% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Connoisseurs ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| choose member:P2's Gardener (3) | DEAD | 20 | 5% | 0% | 0% | – | – | – | 13.6 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Con Men ↔ Shop: Harmonist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Con Men ↔ P4: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Kingpin ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ Shop: Desperado | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 6.1 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Panel ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Cashier | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P4: Grifter ↔ Shop: Bodyguards | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Martyrs ↔ Shop: Recluse | DEAD | 18 | 6% | 0% | 0% | – | – | – | 10.7 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Martyrs ↔ P4: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 36.5 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Agents | DEAD | 24 | 8% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Agents ↔ P1: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Triplets | DEAD | 30 | 3% | 0% | 0% | – | – | – | 18.5 | 0% (0/0) | – | 21/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Volunteer | DEAD | 31 | 3% | 0% | 0% | – | – | – | 3.7 | 100% (0/1) | – | 13/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Fan Club ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ Shop: Muse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Agents ↔ P4: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Scouts | DEAD | 30 | 3% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 9/0%/0% | 21/0%/0% |
| trade:P4: Roadie ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Roadie ↔ P3: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P4: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 19.2 | 0% (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Accomplice ↔ P4: Cutpurse | DEAD | 18 | 6% | 0% | 0% | – | – | – | 3.3 | 100% (0/1) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Cutpurse ↔ P3: Accomplice | DEAD | 16 | 6% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Triplets | DEAD | 25 | 4% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ Shop: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 27.2 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Martyrs ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P1: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 24.1 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P4: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Roadie ↔ P4: Dabblers | DEAD | 23 | 9% | 0% | 0% | – | – | – | 7.0 | 0% (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Sticky Fingers ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Busker ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Triplets ↔ P2: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P2: Roadie | DEAD | 21 | 5% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recluse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P2: Roadie ↔ P3: Deprogrammers | DEAD | 26 | 8% | 0% | 0% | – | – | – | 39.8 | 0% (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Roadie | DEAD | 23 | 9% | 0% | 0% | – | – | – | 39.9 | 0% (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Recluse ↔ P1: Shopkeeper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| choose member:P2's Sticky Fingers (4) | DEAD | 23 | 9% | 0% | 0% | – | – | – | 22.4 | 0% (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P1: Scouts ↔ P4: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 23/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P1: Scouts ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Triplets ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P4: Recruit Bonus | DEAD | 39 | 3% | 0% | 0% | – | – | – | 15.3 | 0% (0/0) | – | 12/0%/0% | 27/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Triplets | DEAD | 35 | 3% | 0% | 0% | – | – | – | 15.3 | 0% (0/0) | – | 12/0%/0% | 23/0%/0% |
| trade:P2: Busker ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| choose member:P1's Doppelganger (5) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.8 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P4: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Shift Crew ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| choose member:P3's Cutpurse (3) | DEAD | 45 | 9% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 4/0%/0% | 41/0%/0% |
| trade:P1: Doppelganger ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Doppelganger ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ P3: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Connoisseurs ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Timekeepers ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Bouncers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Patriarch ↔ Shop: Gossip | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Proselytizers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 5.2 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Scouts | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 33/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P4: Scouts ↔ P3: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 29/0%/0% |
| trade:P4: Scouts ↔ P3: Deprogrammers | DEAD | 31 | 3% | 0% | 0% | – | – | – | 25.8 | 0% (0/0) | – | 6/0%/0% | 25/0%/0% |
| choose member:P1's Sticky Fingers (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Cutpurse ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Accomplice ↔ P4: Scouts | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 26/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Scouts ↔ P2: Cutpurse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ P2: Accomplice | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 20/0%/0% |
| trade:P1: Line Cutters ↔ P2: Volunteer | DEAD | 20 | 5% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P1: Party Crasher ↔ P3: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 42.2 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.6 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P4: Scouts ↔ Shop: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P1: Alchemists ↔ Shop: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Party Crasher ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Recluse ↔ P1: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Sticky Fingers ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Martyrs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Scouts | DEAD | 21 | 5% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 15/0%/0% | 6/0%/0% |
| trade:P1: Cutpurse ↔ P4: Accomplice | DEAD | 27 | 4% | 0% | 0% | – | – | – | 23.7 | 0% (0/0) | – | 16/0%/0% | 11/0%/0% |
| trade:P1: Cutpurse ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P2: Busker ↔ P4: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Gardener ↔ Shop: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P4: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Muse ↔ Shop: Scouts | DEAD | 23 | 4% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P1: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Dabblers ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Brokers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Patriarch ↔ Shop: Customs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Recluse ↔ P3: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P1: Deprogrammers | DEAD | 24 | 8% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Loyalists ↔ P4: Alchemists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P3: Triplets | DEAD | 22 | 9% | 0% | 0% | – | – | – | 19.1 | 50% (0/1) | – | 2/0%/0% | 20/0%/0% |
| trade:P1: Gardener ↔ P3: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Gardener ↔ P4: Recruit Bonus | DEAD | 23 | 9% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Trendsetters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recruit Bonus | DEAD | 29 | 3% | 0% | 0% | – | – | – | 22.7 | 0% (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P2: Doormen ↔ P4: Recruit Bonus | DEAD | 15 | 7% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Cashier | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Trendsetters ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Cashier | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P3: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Drifters | DEAD | 19 | 5% | 0% | 0% | – | – | – | 31.8 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Triplets ↔ P2: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Loyalists | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Gardener ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Scouts ↔ P4: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P2: Scouts ↔ P4: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Drifters ↔ P1: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Drifters ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recluse ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Recluse ↔ P3: Deprogrammers | DEAD | 27 | 4% | 0% | 0% | – | – | – | 10.5 | 0% (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Go-Between | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Go-Between | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Agents ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P4: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P2: Gardener ↔ P3: Dabblers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 15.1 | 0% (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P2: Gardener | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Accomplice ↔ P1: Cutpurse | DEAD | 25 | 4% | 0% | 0% | – | – | – | 23.7 | 0% (0/0) | – | 16/0%/0% | 9/0%/0% |
| trade:P2: Drifters ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Triplets ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Grifter ↔ Shop: Proselytizers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ Shop: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 15/0%/0% | 6/0%/0% |
| trade:P1: Roadie ↔ P4: Recruit Bonus | DEAD | 30 | 7% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ Shop: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P4: Recruit Bonus | DEAD | 21 | 5% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Roadie | DEAD | 27 | 7% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P1: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Doppelganger ↔ P4: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.3 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P3: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Loyalists ↔ P4: Recruit Bonus | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.8 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Chronicler ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Sticky Fingers ↔ P4: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Fan Club ↔ Shop: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ P4: Triplets | DEAD | 23 | 4% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Double Agent ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Triplets ↔ P1: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P2: Shopkeeper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P4: Triplets ↔ P3: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P1: Doppelganger ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Triplets ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P1: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 16 | 6% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P3: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Shift Crew ↔ P3: Busker | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ Shop: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P2: Line Cutters | DEAD | 21 | 10% | 0% | 0% | – | – | – | 29.9 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P3: Recruit Bonus | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 20/0%/0% |
| trade:P1: Doormen ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Doormen ↔ P4: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 4.6 | 100% (0/1) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Doormen ↔ P4: Busker | DEAD | 17 | 6% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 35 | 6% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 18/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ P2: Gardener | DEAD | 22 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P2: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 20.3 | 0% (0/0) | – | 17/0%/0% | 12/0%/0% |
| trade:P4: Busker ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Trendsetters ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Chronicler ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Line Cutters ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Chronicler ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Agents ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 40.8 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P3: Deprogrammers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | – | 20/0%/0% |
| trade:P1: Alchemists ↔ P3: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ Shop: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Muse ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Muse ↔ P1: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P3: Stunt Double ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Muse ↔ P3: Busker | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ P2: Muse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Loyalists ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ Shop: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Line Cutters | DEAD | 22 | 5% | 0% | 0% | – | – | – | 29.4 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ Shop: Ringleader | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.4 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Con Men ↔ Shop: Harmonist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Big Tent | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Customs | DEAD | 17 | 6% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ P3: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 11.2 | 100% (0/1) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P4: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P4: Agents ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Agents ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P4: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Drifters ↔ P2: Gardener | DEAD | 21 | 10% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Volunteer ↔ P1: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ P4: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 19.8 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Stunt Double ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Cutpurse ↔ P4: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P1: Stunt Double ↔ P4: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Loyalists ↔ Shop: Window Shopper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Loyalists ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Con Men ↔ Shop: Window Shopper | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P2: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 4/0%/0% |
| trade:P4: Con Men ↔ Shop: Patriarch | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Party Crasher ↔ P4: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Gardener ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P4: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.0 | 100% (0/1) | – | 12/0%/0% | 4/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Scouts | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P3: Scouts ↔ P1: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 42.5 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P2: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recluse ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Recluse ↔ P4: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Recluse ↔ Shop: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Patriarch ↔ Shop: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Patriarch ↔ P2: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Recluse ↔ P4: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P3: Party Crasher ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Muse ↔ P4: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Con Men ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Muse ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P1: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P3: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P1: Drifters ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Gardener ↔ P1: Drifters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P1: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Window Dressers ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P2: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Triplets ↔ P2: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Chronicler ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Triplets ↔ P3: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Triplets | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P3: Busker ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Patriarch ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Kingpin ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P4: Bouncers ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P2: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ P3: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 34.1 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Gossip | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| trade:P1: Drifters ↔ P3: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P1: Drifters ↔ P3: Volunteer | DEAD | 21 | 10% | 0% | 0% | – | – | – | 26.2 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Recluse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Recluse ↔ P1: Shopkeeper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Recluse ↔ P3: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Drifters ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P4: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Party Crasher ↔ P3: Agents | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Roadie ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ P3: Fan Club | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Courier ↔ P2: Shift Crew | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.4 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P1: Alchemists ↔ P2: Timekeepers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Drifters ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Muse ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P4: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 34.5 | 100% (0/1) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.3 | 100% (0/1) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 23/0%/0% |
| trade:P4: Agents ↔ P3: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P4: Agents ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Chronicler ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Drifters ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Drifters ↔ P4: Gardener | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Gardener ↔ P3: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Drifters ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Tastemaker | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P3: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P3: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.1 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P2: Shift Crew | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Clockmakers ↔ P2: Shift Crew | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Shift Crew ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ Shop: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 8/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Gossip | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P2: Shift Crew | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Gardener ↔ P4: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Shift Crew ↔ P3: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 39.0 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Triplets ↔ P4: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Party Crasher ↔ P1: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Agents | DEAD | 17 | 6% | 0% | 0% | – | – | – | 28.6 | 0% (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P4: Agents ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P2: Timekeepers ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Cutpurse ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Shift Crew ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |

(40752 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 2390 | 24% | 1979 | 28% |
| benders | 0 | – | 1590 | 25% |
| market | 2444 | 21% | 2268 | 25% |
| trading | 2592 | 23% | 2029 | 24% |
| silver | 2549 | 19% | 2118 | 22% |
| yellow | 2336 | 20% | 1961 | 19% |
| red | 2487 | 19% | 2633 | 19% |
| thieves | 2680 | 19% | 2704 | 15% |
| echo | 2421 | 19% | 2617 | 14% |
