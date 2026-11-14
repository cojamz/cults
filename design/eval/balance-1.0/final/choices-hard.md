# Choice report

41322 looked-ahead decisions from 414 games (/mnt/project-files/balance-1.0/merged/hard.choices). 15% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| market: Peek | AUTO-PICK | 5266 | 25% | 11% | 3% | 57% | 9% | 13% | 11.4 | 38% (319/164) | 1471/13%/5% | 1862/10%/2% | 1933/9%/3% |
| purple: Sleep In | AUTO-PICK | 4072 | 35% | 14% | 3% | 65% | 15% | 3% | 13.3 | 44% (253/346) | 860/22%/5% | 1363/15%/2% | 1849/10%/4% |
| red: Promote | AUTO-PICK | 1520 | 50% | 29% | 3% | 85% | 51% | 0% | 14.2 | 47% (113/141) | – | 784/30%/3% | 736/28%/4% |
| purple: Crowd In | AUTO-PICK | 1524 | 27% | 13% | 3% | 68% | 20% | 0% | 10.0 | 49% (108/74) | – | – | 1524/13%/3% |
| thieves: Poach | AUTO-PICK + MISJUDGED | 973 | 40% | 24% | 3% | 80% | 43% | 1% | 11.2 | 50% (73/74) | – | – | 973/24%/3% |
| yellow: Harvest | AUTO-PICK | 4442 | 25% | 12% | 3% | 71% | 40% | 9% | 10.7 | 41% (189/168) | 327/59%/2% | 1570/11%/3% | 2545/7%/3% |
| red: Recruit a Member | AUTO-PICK | 1653 | 23% | 11% | 3% | 69% | 30% | 7% | 10.8 | 45% (71/78) | – | – | 1653/11%/3% |
| silver: Largesse | AUTO-PICK | 1607 | 27% | 13% | 3% | 67% | 14% | 0% | 10.7 | 49% (99/94) | – | – | 1607/13%/3% |
| echo: Cover | AUTO-PICK | 2939 | 27% | 12% | 3% | 73% | 26% | 4% | 12.8 | 48% (132/211) | – | 1522/12%/2% | 1417/13%/3% |
| thieves: Help Yourself | AUTO-PICK | 2628 | 41% | 24% | 3% | 83% | 56% | 1% | 12.2 | 45% (133/191) | 233/87%/2% | 884/24%/3% | 1511/13%/3% |
| silver: Toast | AUTO-PICK | 5392 | 27% | 10% | 3% | 65% | 27% | 14% | 12.3 | 42% (203/351) | 1737/10%/3% | 1984/10%/2% | 1671/12%/3% |
| echo: Build Up | AUTO-PICK | 4920 | 26% | 11% | 3% | 67% | 26% | 7% | 11.7 | 45% (232/268) | 885/21%/4% | 1828/10%/2% | 2207/8%/3% |
| purple: Last Call | AUTO-PICK | 2553 | 31% | 14% | 3% | 67% | 1% | 1% | 12.6 | 46% (178/192) | – | 1321/12%/2% | 1232/15%/4% |
| thieves: Crime Wave | AUTO-PICK | 3314 | 27% | 13% | 3% | 73% | 26% | 1% | 12.4 | 43% (166/170) | – | 1798/12%/2% | 1516/13%/3% |
| echo: Echo | AUTO-PICK | 2511 | 35% | 23% | 2% | 86% | 55% | 1% | 13.2 | 50% (136/141) | 469/41%/3% | 911/22%/2% | 1131/16%/3% |
| thieves: Stash | AUTO-PICK | 5621 | 24% | 11% | 2% | 68% | 22% | 7% | 12.0 | 44% (279/253) | 1212/17%/3% | 2049/10%/2% | 2360/8%/2% |
| yellow: Melting Pot | AUTO-PICK | 3602 | 23% | 10% | 2% | 68% | 24% | 6% | 11.4 | 43% (153/160) | – | 1524/13%/2% | 2078/9%/3% |
| yellow: Big Dilute | AUTO-PICK | 3120 | 24% | 12% | 2% | 73% | 33% | 6% | 11.2 | 45% (137/150) | – | 1180/16%/2% | 1940/9%/3% |
| market: Spree | AUTO-PICK | 1658 | 27% | 12% | 2% | 64% | 26% | 0% | 11.5 | 46% (78/106) | – | – | 1658/12%/2% |
| red: Walk-In | AUTO-PICK | 4136 | 28% | 14% | 2% | 80% | 52% | 7% | 12.8 | 42% (119/233) | 1181/16%/3% | 1095/18%/1% | 1860/10%/2% |
| trading: Estate Sale | AUTO-PICK | 3798 | 25% | 11% | 2% | 75% | 31% | 5% | 12.0 | 41% (138/193) | – | 1724/13%/2% | 2074/10%/2% |
| red: Demote | AUTO-PICK | 2750 | 28% | 14% | 2% | 81% | 42% | 2% | 14.4 | 47% (132/147) | – | 1298/15%/2% | 1452/13%/2% |
| echo: Reprise | AUTO-PICK | 4163 | 22% | 14% | 2% | 84% | 53% | 1% | 12.7 | 45% (118/165) | 1206/16%/1% | 1407/14%/1% | 1550/12%/2% |
| market: Savings | MIXED | 7679 | 15% | 5% | 3% | 41% | 12% | 29% | 8.6 | 31% (244/109) | 1480/12%/4% | 2800/4%/3% | 3399/4%/3% |
| purple: Hold Up | MIXED | 6890 | 19% | 7% | 3% | 50% | 13% | 26% | 10.5 | 34% (270/147) | 1285/15%/4% | 2501/6%/2% | 3104/5%/4% |
| market: Bury | MIXED | 3688 | 26% | 10% | 3% | 63% | 11% | 10% | 11.6 | 43% (176/213) | – | 1301/15%/3% | 2387/7%/3% |
| market: Out of Style | MIXED | 6039 | 21% | 8% | 3% | 58% | 8% | 13% | 10.9 | 43% (256/278) | 825/23%/5% | 2147/8%/2% | 3067/5%/2% |
| red: Tryout | MIXED | 5720 | 18% | 8% | 3% | 65% | 31% | 16% | 10.4 | 40% (196/143) | 920/20%/5% | 1802/9%/2% | 2998/4%/2% |
| silver: Party Favors | MIXED | 4288 | 21% | 9% | 3% | 63% | 25% | 9% | 12.1 | 43% (166/179) | – | 1566/13%/1% | 2722/7%/3% |
| thieves: Shake Down | MIXED | 4165 | 21% | 9% | 2% | 69% | 27% | 8% | 11.7 | 41% (153/173) | – | 1512/14%/2% | 2653/7%/2% |
| trading: Allowance | MIXED | 6074 | 20% | 9% | 2% | 67% | 18% | 10% | 11.0 | 40% (265/182) | 1186/17%/3% | 2363/8%/2% | 2525/7%/2% |
| silver: Sweet Talk | MIXED | 4985 | 16% | 7% | 2% | 67% | 33% | 14% | 10.9 | 41% (133/144) | – | 2046/9%/2% | 2939/6%/3% |
| trading: Farewell | MIXED | 5664 | 14% | 6% | 2% | 55% | 22% | 15% | 10.8 | 44% (137/188) | – | 2874/5%/2% | 2790/7%/2% |
| market: Recruit Twice | MIXED | 5391 | 14% | 5% | 2% | 64% | 34% | 16% | 9.2 | 35% (119/109) | – | 2816/3%/2% | 2575/7%/2% |
| silver: Party Gifts | MIXED | 7069 | 17% | 7% | 2% | 59% | 19% | 18% | 10.4 | 43% (235/222) | 1747/10%/3% | 2863/5%/2% | 2459/8%/2% |
| echo: Encore | MIXED | 4350 | 15% | 7% | 2% | 70% | 38% | 14% | 11.2 | 42% (108/119) | – | 1929/8%/1% | 2421/7%/3% |
| red: Gather | MIXED | 6901 | 15% | 7% | 2% | 62% | 22% | 24% | 9.6 | 37% (210/133) | 1346/13%/4% | 2620/5%/1% | 2935/5%/2% |
| yellow: Trade Seeds | MIXED | 7582 | 11% | 4% | 2% | 59% | 22% | 25% | 10.0 | 38% (120/179) | 1111/16%/4% | 2914/2%/1% | 3557/2%/2% |
| thieves: Lie Low | MIXED | 8190 | 12% | 5% | 2% | 64% | 28% | 27% | 8.8 | 43% (196/167) | 1525/14%/2% | 2962/4%/1% | 3703/3%/2% |
| echo: Greatest Hits | MIXED | 3426 | 7% | 4% | 2% | 60% | 9% | 47% | 5.7 | 48% (81/26) | – | – | 3426/4%/2% |
| silver: Polish | MIXED | 8598 | 10% | 4% | 2% | 57% | 33% | 40% | 9.2 | 37% (143/120) | 1908/9%/2% | 2926/3%/0% | 3764/3%/2% |
| trading: Exchange | MIXED | 8716 | 9% | 4% | 1% | 50% | 16% | 49% | 8.4 | 38% (127/168) | 2157/5%/2% | 3272/1%/1% | 3287/5%/1% |
| yellow: Dilute | MIXED | 6981 | 13% | 6% | 1% | 69% | 29% | 18% | 9.9 | 40% (166/151) | 1219/15%/2% | 2534/4%/1% | 3228/4%/2% |
| yellow: Makeover | MIXED | 3204 | 8% | 4% | 1% | 60% | 22% | 36% | 8.4 | 42% (55/37) | – | – | 3204/4%/1% |
| purple: Right Away | FILLER | 8521 | 11% | 4% | 3% | 31% | 13% | 59% | 7.1 | 29% (174/88) | 1958/6%/2% | 2966/2%/3% | 3597/4%/4% |
| purple: Crunch Time | DEAD | 6803 | 9% | 2% | 3% | 23% | 8% | 64% | 6.0 | 28% (91/76) | – | 2957/2%/3% | 3846/3%/3% |
| trading: Splurge | DEAD | 9370 | 7% | 3% | 1% | 38% | 19% | 62% | 7.6 | 35% (150/65) | 2023/8%/3% | 3295/0%/0% | 4052/2%/2% |
| trading: Cash In | DEAD | 3929 | 8% | 2% | 1% | 58% | 32% | 43% | 7.2 | 35% (25/69) | – | – | 3929/2%/1% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dabblers (benders) | REAL CHOICE | 1929 | 55% | 19% | 11% | 47% | 9% | 1% | 10.7 | 35% (148/213) | 1253/14%/12% | 322/36%/11% | 354/20%/7% |
| Scouts (benders) | REAL CHOICE | 2396 | 50% | 14% | 10% | 39% | 5% | 1% | 9.6 | 36% (159/263) | 1302/12%/13% | 365/30%/11% | 729/10%/5% |
| Volunteer (red) | AUTO-PICK | 777 | 57% | 21% | 11% | 53% | 4% | 6% | 10.4 | 42% (77/108) | 400/24%/14% | 133/25%/12% | 244/14%/5% |
| Line Cutters (benders) | AUTO-PICK | 1203 | 76% | 31% | 9% | 66% | 24% | 3% | 11.8 | 40% (78/251) | 762/31%/10% | 218/39%/9% | 223/22%/6% |
| Recruit Bonus (red) | AUTO-PICK | 1087 | 44% | 15% | 8% | 52% | 4% | 1% | 9.4 | 36% (68/100) | 588/11%/10% | 188/29%/10% | 311/14%/4% |
| Timekeepers (purple) | AUTO-PICK | 1025 | 46% | 16% | 8% | 58% | 14% | 0% | 9.8 | 36% (64/98) | 494/8%/9% | 263/21%/6% | 268/25%/9% |
| Polisher (silver) | AUTO-PICK | 1169 | 34% | 13% | 7% | 59% | 4% | 3% | 8.6 | 42% (101/62) | 574/14%/10% | 194/28%/4% | 401/6%/3% |
| Shopkeeper (trading) | AUTO-PICK | 397 | 75% | 47% | 7% | 72% | 29% | 0% | 9.5 | 41% (34/66) | 140/72%/9% | 92/59%/9% | 165/18%/4% |
| Roadie (echo) | AUTO-PICK | 411 | 75% | 45% | 7% | 79% | 23% | 1% | 10.9 | 44% (54/61) | 262/49%/7% | 59/53%/3% | 90/26%/7% |
| Window Dressers (market) | AUTO-PICK | 975 | 47% | 17% | 6% | 52% | 7% | 1% | 11.8 | 33% (50/96) | 296/12%/10% | 303/19%/6% | 376/19%/5% |
| Bouncers (purple) | AUTO-PICK | 1182 | 41% | 13% | 6% | 53% | 6% | 0% | 11.4 | 37% (85/87) | 551/9%/6% | 219/20%/7% | 412/13%/5% |
| Recluse (trading) | AUTO-PICK | 1020 | 39% | 16% | 6% | 52% | 15% | 0% | 10.2 | 43% (62/100) | 359/7%/6% | 263/24%/5% | 398/20%/7% |
| Alchemists (benders) | AUTO-PICK | 1892 | 54% | 14% | 6% | 51% | 4% | 1% | 12.3 | 38% (144/245) | – | 849/17%/8% | 1043/12%/4% |
| Chronicler (echo) | AUTO-PICK | 848 | 54% | 19% | 6% | 66% | 13% | 1% | 11.6 | 40% (68/106) | – | 432/21%/5% | 416/17%/7% |
| Brokers (trading) | AUTO-PICK | 802 | 40% | 13% | 6% | 50% | 6% | 0% | 10.4 | 37% (50/65) | – | 332/14%/8% | 470/13%/4% |
| Philanthropists (silver) | AUTO-PICK | 684 | 51% | 21% | 6% | 62% | 16% | 0% | 12.3 | 40% (53/79) | – | 268/22%/5% | 416/20%/6% |
| Patriarch (red) | AUTO-PICK | 588 | 50% | 25% | 5% | 70% | 32% | 0% | 11.3 | 44% (38/71) | – | 364/18%/5% | 224/38%/7% |
| Snobs (market) | AUTO-PICK | 684 | 52% | 23% | 5% | 70% | 35% | 0% | 11.5 | 40% (30/91) | – | 386/18%/6% | 298/30%/5% |
| High Society (silver) | AUTO-PICK | 624 | 50% | 20% | 5% | 65% | 34% | 0% | 11.2 | 40% (34/75) | – | 186/23%/5% | 438/18%/5% |
| Old Money (trading) | AUTO-PICK | 958 | 40% | 13% | 5% | 52% | 10% | 0% | 11.2 | 35% (60/69) | – | 441/12%/5% | 517/15%/5% |
| Cutpurse (thieves) | AUTO-PICK | 502 | 64% | 37% | 5% | 81% | 53% | 2% | 12.0 | 41% (25/67) | 291/41%/5% | 72/56%/4% | 139/20%/6% |
| Drifters (yellow) | AUTO-PICK | 831 | 40% | 18% | 5% | 58% | 25% | 0% | 11.2 | 34% (41/60) | 290/24%/6% | 242/21%/5% | 299/8%/4% |
| Fan Club (echo) | AUTO-PICK | 384 | 70% | 38% | 5% | 84% | 42% | 0% | 12.7 | 45% (33/59) | – | 168/53%/4% | 216/26%/5% |
| Gardener (yellow) | AUTO-PICK | 543 | 47% | 29% | 5% | 83% | 53% | 3% | 10.1 | 45% (19/56) | 146/65%/8% | 127/35%/6% | 270/7%/2% |
| Extortionist (thieves) | AUTO-PICK | 569 | 41% | 20% | 4% | 71% | 33% | 0% | 12.6 | 38% (34/40) | – | 213/28%/4% | 356/16%/4% |
| Busker (echo) | AUTO-PICK | 457 | 65% | 41% | 4% | 79% | 27% | 0% | 10.7 | 43% (44/63) | 202/55%/3% | 72/64%/8% | 183/17%/3% |
| Window Shopper (market) | AUTO-PICK | 1241 | 33% | 12% | 4% | 61% | 17% | 0% | 10.5 | 37% (60/84) | – | 392/22%/6% | 849/8%/3% |
| Con Men (benders) | AUTO-PICK | 635 | 76% | 54% | 4% | 90% | 69% | 0% | 10.8 | 40% (23/74) | – | 202/90%/1% | 433/38%/5% |
| Ringleader (yellow) | AUTO-PICK | 836 | 35% | 13% | 4% | 61% | 7% | 0% | 13.1 | 37% (49/57) | – | 410/12%/3% | 426/14%/4% |
| Loyalists (red) | AUTO-PICK | 841 | 44% | 15% | 4% | 66% | 7% | 2% | 12.4 | 37% (60/74) | – | 315/19%/3% | 526/12%/4% |
| Doppelganger (echo) | AUTO-PICK | 735 | 39% | 20% | 4% | 67% | 21% | 0% | 12.0 | 44% (60/52) | – | 261/27%/5% | 474/16%/3% |
| Caravan (yellow) | AUTO-PICK | 516 | 43% | 17% | 3% | 71% | 30% | 0% | 12.0 | 33% (23/41) | – | 154/31%/4% | 362/11%/3% |
| HR (benders) | AUTO-PICK | 1137 | 41% | 20% | 3% | 74% | 50% | 0% | 15.5 | 41% (32/114) | – | 630/12%/2% | 507/29%/5% |
| Dyer (yellow) | AUTO-PICK | 569 | 43% | 19% | 3% | 75% | 28% | 0% | 10.2 | 39% (30/53) | – | 96/57%/4% | 473/11%/3% |
| Stunt Double (echo) | AUTO-PICK | 340 | 62% | 46% | 3% | 83% | 56% | 0% | 13.4 | 36% (14/31) | – | 129/67%/5% | 211/32%/2% |
| Mob (red) | AUTO-PICK | 196 | 61% | 34% | 3% | 91% | 79% | 0% | 15.4 | 43% (4/25) | – | 92/24%/2% | 104/43%/4% |
| Grifter (thieves) | AUTO-PICK | 536 | 46% | 26% | 3% | 86% | 54% | 0% | 11.6 | 45% (24/54) | – | 238/26%/3% | 298/25%/3% |
| Double Agent (thieves) | AUTO-PICK | 600 | 37% | 20% | 3% | 83% | 52% | 1% | 12.3 | 33% (16/36) | – | 275/17%/1% | 325/22%/4% |
| Mentor & Protégés (red) | AUTO-PICK | 532 | 38% | 17% | 3% | 64% | 22% | 1% | 13.1 | 32% (26/32) | – | 179/16%/3% | 353/17%/3% |
| Panel (red) | AUTO-PICK | 322 | 48% | 31% | 2% | 86% | 55% | 0% | 15.5 | 40% (11/29) | – | 220/34%/2% | 102/25%/4% |
| Accomplice (thieves) | AUTO-PICK | 279 | 76% | 66% | 2% | 96% | 79% | 2% | 10.7 | 41% (11/17) | 163/69%/1% | 46/87%/4% | 70/44%/3% |
| Early Birds (purple) | MIXED | 977 | 43% | 14% | 9% | 48% | 9% | 0% | 9.4 | 38% (64/88) | 341/16%/13% | 235/19%/7% | 401/10%/6% |
| Kingpin (thieves) | MIXED | 1194 | 43% | 14% | 8% | 48% | 7% | 1% | 10.8 | 38% (66/122) | 601/6%/7% | 285/23%/7% | 308/21%/10% |
| Deprogrammers (red) | MIXED | 592 | 69% | 27% | 8% | 48% | 16% | 0% | 11.7 | 39% (42/107) | 425/24%/7% | 78/40%/10% | 89/33%/9% |
| Martyrs (trading) | MIXED | 1128 | 38% | 13% | 7% | 43% | 6% | 0% | 10.3 | 35% (61/85) | 395/6%/8% | 314/21%/6% | 419/14%/6% |
| Trendsetters (market) | MIXED | 1119 | 44% | 14% | 7% | 42% | 3% | 0% | 11.0 | 35% (64/108) | 405/8%/9% | 358/20%/8% | 356/15%/4% |
| Agents (echo) | MIXED | 1087 | 40% | 15% | 6% | 48% | 7% | 1% | 10.2 | 36% (84/67) | 600/15%/8% | 187/21%/5% | 300/12%/5% |
| Critic (market) | MIXED | 1436 | 30% | 10% | 6% | 41% | 3% | 1% | 9.6 | 39% (106/61) | 520/8%/8% | 334/19%/8% | 582/7%/4% |
| Connoisseurs (market) | MIXED | 1665 | 36% | 9% | 6% | 48% | 3% | 1% | 10.6 | 27% (75/83) | 506/4%/8% | 508/14%/7% | 651/8%/4% |
| Toastmaster (silver) | MIXED | 1546 | 29% | 8% | 6% | 49% | 8% | 0% | 9.6 | 33% (81/63) | 541/9%/12% | 259/19%/3% | 746/5%/2% |
| Clockmakers (purple) | MIXED | 1189 | 30% | 6% | 5% | 30% | 0% | 0% | 9.9 | 32% (50/64) | – | 426/6%/6% | 763/7%/4% |
| Regular (market) | MIXED | 1623 | 30% | 9% | 5% | 51% | 3% | 0% | 9.4 | 32% (88/64) | 488/7%/7% | 379/14%/6% | 756/8%/3% |
| Doormen (market) | MIXED | 1393 | 36% | 10% | 5% | 51% | 2% | 0% | 10.6 | 31% (91/65) | – | 592/9%/4% | 801/10%/5% |
| Shift Crew (purple) | MIXED | 1214 | 23% | 10% | 4% | 56% | 7% | 1% | 8.8 | 38% (57/45) | 341/2%/1% | 452/10%/5% | 421/17%/7% |
| Raiders (trading) | MIXED | 1208 | 26% | 7% | 4% | 48% | 0% | 0% | 12.2 | 29% (55/36) | – | 451/8%/4% | 757/7%/4% |
| Muse (echo) | MIXED | 2095 | 19% | 5% | 3% | 49% | 3% | 1% | 9.5 | 31% (80/47) | 704/3%/3% | 478/11%/4% | 913/4%/3% |
| Party Crasher (benders) | MIXED | 3949 | 22% | 6% | 3% | 59% | 1% | 0% | 9.3 | 30% (182/84) | 1650/2%/3% | 705/18%/5% | 1594/6%/2% |
| Triplets (red) | MIXED | 1763 | 20% | 7% | 3% | 40% | 5% | 0% | 11.9 | 38% (75/57) | 855/3%/2% | 513/11%/4% | 395/12%/4% |
| Cashier (trading) | MIXED | 1636 | 15% | 5% | 3% | 53% | 9% | 0% | 7.5 | 34% (44/39) | 384/2%/2% | 492/6%/3% | 760/5%/3% |
| Sticky Fingers (thieves) | MIXED | 1561 | 19% | 5% | 3% | 50% | 4% | 0% | 10.8 | 33% (61/38) | 401/4%/3% | 455/9%/3% | 705/4%/2% |
| Go-Between (yellow) | MIXED | 1473 | 19% | 5% | 2% | 60% | 12% | 0% | 10.1 | 32% (33/51) | 329/5%/3% | 370/10%/4% | 774/2%/1% |
| Exporters (trading) | MIXED | 1474 | 16% | 3% | 2% | 50% | 2% | 0% | 10.3 | 28% (30/33) | – | 710/3%/2% | 764/3%/2% |
| Bodyguards (thieves) | MIXED | 798 | 11% | 3% | 2% | 41% | 4% | 4% | 8.8 | 28% (16/9) | – | 229/3%/2% | 569/4%/2% |
| Debt Collectors (silver) | MIXED | 1026 | 16% | 8% | 2% | 65% | 1% | 0% | 9.1 | 39% (50/12) | – | 322/14%/2% | 704/5%/2% |
| Hot Streak (purple) | MIXED | 1469 | 15% | 4% | 2% | 32% | 0% | 0% | 9.8 | 30% (41/24) | – | 554/5%/4% | 915/3%/1% |
| Big Tent (yellow) | MIXED | 1012 | 19% | 7% | 2% | 54% | 13% | 0% | 10.5 | 29% (26/27) | – | 369/11%/4% | 643/5%/1% |
| Collector (silver) | MIXED | 1538 | 13% | 3% | 2% | 36% | 0% | 0% | 10.4 | 32% (32/31) | 202/1%/2% | 488/5%/3% | 848/2%/1% |
| Closer (purple) | MIXED | 1541 | 12% | 3% | 2% | 38% | 2% | 0% | 10.1 | 25% (35/9) | – | 488/6%/3% | 1053/2%/1% |
| Smooth Talkers (silver) | MIXED | 932 | 17% | 2% | 2% | 41% | 0% | 0% | 12.1 | 19% (15/16) | – | 212/1%/1% | 720/2%/2% |
| Hangers-On (silver) | MIXED | 1150 | 15% | 3% | 2% | 37% | 0% | 0% | 12.2 | 23% (22/17) | – | 391/3%/2% | 759/2%/1% |
| Courier (purple) | MIXED | 1283 | 11% | 3% | 1% | 42% | 0% | 0% | 10.0 | 31% (32/11) | – | 477/5%/2% | 806/2%/1% |
| Shopaholics (market) | MIXED | 960 | 17% | 4% | 1% | 48% | 0% | 0% | 12.4 | 33% (32/21) | – | 296/1%/0% | 664/6%/2% |
| Gift Wrapper (silver) | MIXED | 1624 | 11% | 2% | 1% | 54% | 0% | 0% | 11.5 | 24% (30/12) | – | 493/4%/4% | 1131/1%/0% |
| Desperado (thieves) | MIXED | 1584 | 15% | 4% | 1% | 45% | 3% | 0% | 11.7 | 28% (44/20) | – | 478/6%/2% | 1106/3%/1% |
| Debutantes (silver) | MIXED | 1177 | 15% | 3% | 1% | 49% | 0% | 0% | 11.1 | 25% (32/13) | – | 367/2%/2% | 810/4%/1% |
| Proselytizers (red) | MIXED | 1211 | 15% | 3% | 1% | 64% | 0% | 0% | 14.0 | 29% (29/25) | – | 416/4%/1% | 795/3%/1% |
| Anarchist (benders) | MIXED | 3833 | 10% | 3% | 1% | 57% | 1% | 0% | 11.4 | 33% (97/24) | – | 1309/5%/2% | 2524/2%/1% |
| Heiresses (trading) | MIXED | 963 | 9% | 4% | 1% | 53% | 0% | 0% | 8.4 | 48% (29/10) | – | 308/5%/1% | 655/3%/1% |
| Tribute Band (echo) | MIXED | 425 | 15% | 8% | 1% | 86% | 0% | 0% | 14.1 | 45% (25/4) | – | 66/6%/0% | 359/9%/1% |
| Harmonist (yellow) | DEAD | 1189 | 9% | 2% | 1% | 32% | 0% | 0% | 11.5 | 28% (11/18) | – | 375/2%/2% | 814/1%/1% |
| Gossip (purple) | DEAD | 1366 | 8% | 2% | 1% | 54% | 0% | 0% | 8.8 | 25% (21/7) | – | 421/3%/2% | 945/1%/0% |
| Night Owls (purple) | DEAD | 816 | 9% | 2% | 1% | 42% | 0% | 0% | 9.5 | 31% (13/10) | – | 245/1%/1% | 571/3%/1% |
| Customs (yellow) | DEAD | 1878 | 9% | 2% | 1% | 41% | 0% | 0% | 10.9 | 20% (20/14) | 319/1%/0% | 505/4%/3% | 1054/1%/0% |
| Tastemaker (yellow) | DEAD | 1508 | 6% | 1% | 1% | 53% | 6% | 0% | 10.5 | 17% (9/6) | – | 400/3%/2% | 1108/1%/0% |
| Patroness (market) | DEAD | 1245 | 3% | 1% | 0% | 33% | 0% | 0% | 11.6 | 31% (10/1) | – | 323/1%/0% | 922/1%/1% |
| Hoarder (trading) | DEAD | 1105 | 4% | 1% | 0% | 50% | 0% | 0% | 14.7 | 24% (7/3) | – | 307/1%/0% | 798/1%/0% |
| Extra Hand (benders) | DEAD | 3318 | 5% | 1% | 0% | 42% | 0% | 3% | 14.6 | 27% (34/8) | – | 1267/1%/0% | 2051/1%/0% |
| Shoplifter (thieves) | DEAD | 1279 | 6% | 2% | 0% | 68% | 0% | 0% | 13.7 | 32% (19/4) | – | 463/2%/0% | 816/1%/0% |
| Wallflower (echo) | DEAD | 842 | 4% | 0% | 0% | 75% | 0% | 0% | 12.6 | 14% (4/1) | – | 151/0%/0% | 691/1%/0% |
| Old Maid (benders) | DEAD | 5047 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1679/0%/0% | 3368/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | DEAD | 4832 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 202/0%/0% | 1359/0%/0% | 3271/0%/0% |
| Polisher (silver) | DEAD | 364 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 58/0%/0% | 233/0%/0% | 73/0%/0% |
| Anarchist (benders) | DEAD | 51 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 51/0%/0% |
| Raiders (trading) | DEAD | 201 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 59/0%/0% | 142/0%/0% |
| Debutantes (silver) | DEAD | 149 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 43/0%/0% | 106/0%/0% |
| Tribute Band (echo) | DEAD | 174 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 28/0%/0% | 146/0%/0% |
| Extra Hand (benders) | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 36/0%/0% | 9/0%/0% |
| Hot Streak (purple) | DEAD | 278 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 78/0%/0% | 200/0%/0% |
| Hoarder (trading) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 7/0%/0% |
| Party Crasher (benders) | DEAD | 97 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 55/0%/0% | 41/0%/0% | 1/0%/0% |
| Doppelganger (echo) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| Heiresses (trading) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 1/0%/0% |
| Debt Collectors (silver) | THIN DATA | 13 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 8/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Roadie (3) | REAL CHOICE | 15 | 87% | 27% | 40% | 0% | 0% | 100% | 18.4 | 23% (2/1) | – | 8/38%/50% | 7/14%/29% |
| choose member:Accomplice (3) | REAL CHOICE | 49 | 90% | 43% | 29% | 43% | 0% | 100% | 8.6 | 45% (8/12) | – | 24/54%/25% | 25/32%/32% |
| choose member:Scouts (3) | REAL CHOICE | 92 | 82% | 38% | 28% | 29% | 3% | 100% | 6.2 | 39% (17/12) | – | 44/45%/27% | 48/31%/29% |
| choose member:Agents (3) | REAL CHOICE | 32 | 84% | 19% | 28% | 17% | 0% | 100% | 9.5 | 48% (3/10) | – | 14/21%/36% | 18/17%/22% |
| choose member:Deprogrammers (3) | REAL CHOICE | 47 | 83% | 34% | 23% | 25% | 6% | 100% | 7.3 | 37% (6/8) | – | 24/42%/17% | 23/26%/30% |
| choose member:Cutpurse (3) | REAL CHOICE | 43 | 93% | 37% | 23% | 25% | 0% | 100% | 6.6 | 45% (5/13) | – | 23/43%/26% | 20/30%/20% |
| choose member:Agents | REAL CHOICE | 27 | 26% | 7% | 22% | 0% | 0% | 100% | 0.7 | 43% (2/1) | – | 15/13%/33% | 12/0%/8% |
| choose member:Timekeepers (4) | REAL CHOICE | 28 | 71% | 32% | 21% | 33% | 0% | 100% | 10.5 | 40% (6/2) | – | 9/33%/11% | 19/32%/26% |
| choose member:Triplets (3) | REAL CHOICE + MISJUDGED | 20 | 75% | 40% | 20% | 38% | 0% | 100% | 6.2 | 67% (8/2) | – | 7/43%/14% | 13/38%/23% |
| choose member:Critic (3) | REAL CHOICE | 16 | 81% | 31% | 19% | 0% | 0% | 100% | 5.5 | 46% (3/3) | – | 5/0%/20% | 11/45%/18% |
| choose member:Party Crasher (4) | REAL CHOICE + MISJUDGED | 18 | 78% | 44% | 17% | 38% | 0% | 100% | 9.0 | 57% (8/0) | – | 5/40%/20% | 13/46%/15% |
| choose member:Early Birds (3) | REAL CHOICE | 24 | 75% | 21% | 17% | 40% | 20% | 100% | 6.0 | 47% (2/6) | – | 9/22%/22% | 15/20%/13% |
| choose member:Recruit Bonus (3) | REAL CHOICE | 31 | 77% | 39% | 16% | 25% | 8% | 100% | 12.4 | 48% (7/4) | – | 14/36%/7% | 17/41%/24% |
| choose member:Loyalists (5) | REAL CHOICE | 25 | 44% | 8% | 16% | 50% | 0% | 100% | 4.6 | 18% (1/1) | – | 5/0%/60% | 20/10%/5% |
| trade:P2: Cutpurse ↔ P3: Deprogrammers | REAL CHOICE | 19 | 16% | 5% | 16% | 0% | 0% | 0% | 0.5 | 67% (1/1) | – | 2/0%/0% | 17/6%/18% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 29 | 76% | 38% | 14% | 27% | 0% | 100% | 14.0 | 23% (3/2) | – | 11/36%/9% | 18/39%/17% |
| trade:P2: Deprogrammers ↔ P3: Critic | REAL CHOICE | 15 | 20% | 13% | 13% | 0% | 0% | 0% | 1.0 | 67% (2/0) | – | 6/17%/17% | 9/11%/11% |
| choose member:Connoisseurs (4) | REAL CHOICE | 23 | 78% | 9% | 13% | 50% | 0% | 100% | 6.9 | 22% (2/2) | – | 4/25%/0% | 19/5%/16% |
| choose member:Alchemists | REAL CHOICE | 17 | 47% | 12% | 12% | 0% | 0% | 100% | 10.5 | 38% (1/2) | – | 5/40%/40% | 12/0%/0% |
| choose member:P4's Trendsetters (4) | REAL CHOICE | 17 | 29% | 6% | 12% | 0% | 0% | 100% | 11.9 | 20% (1/0) | – | 2/0%/0% | 15/7%/13% |
| trade:P3: Early Birds ↔ P2: Volunteer | REAL CHOICE | 17 | 24% | 0% | 12% | – | – | – | 6.1 | 0% (0/0) | – | 8/0%/13% | 9/0%/11% |
| choose member:Chronicler (5) | REAL CHOICE | 27 | 63% | 11% | 11% | 33% | 0% | 100% | 7.9 | 24% (2/2) | – | 8/13%/0% | 19/11%/16% |
| choose member:Drifters (3) | REAL CHOICE | 19 | 95% | 32% | 11% | 17% | 0% | 100% | 12.9 | 44% (4/4) | – | 12/25%/8% | 7/43%/14% |
| choose member:P4's Busker (4) | REAL CHOICE | 30 | 23% | 10% | 10% | 33% | 33% | 100% | 16.5 | 33% (1/1) | – | 4/25%/25% | 26/8%/8% |
| choose member:Line Cutters (2) | AUTO-PICK | 100 | 91% | 40% | 17% | 50% | 3% | 100% | 12.0 | 48% (16/27) | – | 49/45%/10% | 51/35%/24% |
| choose member:P3's Caravan (9) | AUTO-PICK | 18 | 72% | 50% | 17% | 89% | 78% | 100% | 3.9 | 67% (1/3) | – | 2/100%/0% | 16/44%/19% |
| choose member:Busker (4) | AUTO-PICK | 37 | 89% | 43% | 16% | 56% | 0% | 100% | 11.7 | 48% (8/8) | – | 22/50%/18% | 15/33%/13% |
| choose member:Martyrs (4) | AUTO-PICK | 19 | 95% | 32% | 16% | 67% | 0% | 100% | 10.3 | 33% (4/2) | – | 6/33%/17% | 13/31%/15% |
| choose member:Shopkeeper (4) | AUTO-PICK | 26 | 88% | 31% | 15% | 63% | 0% | 100% | 7.8 | 35% (4/4) | – | 14/21%/21% | 12/42%/8% |
| choose member:Dabblers (3) | AUTO-PICK | 81 | 79% | 27% | 15% | 59% | 0% | 100% | 9.0 | 47% (13/17) | – | 26/27%/12% | 55/27%/16% |
| choose member:Muse (4) | AUTO-PICK | 21 | 71% | 43% | 14% | 56% | 0% | 100% | 10.2 | 27% (4/0) | – | 7/57%/14% | 14/36%/14% |
| choose member:Bouncers (4) | AUTO-PICK | 22 | 77% | 23% | 14% | 60% | 0% | 100% | 6.1 | 35% (2/4) | – | 7/43%/14% | 15/13%/13% |
| choose member:Alchemists (5) | AUTO-PICK | 44 | 59% | 18% | 11% | 50% | 0% | 100% | 9.7 | 31% (4/4) | – | 10/10%/20% | 34/21%/9% |
| choose member:HR | AUTO-PICK | 21 | 100% | 90% | 10% | 84% | 58% | 100% | 15.4 | 40% (2/2) | – | 2/100%/0% | 19/89%/11% |
| choose member:Scouts | AUTO-PICK + MISJUDGED | 21 | 38% | 19% | 10% | 50% | 0% | 100% | 8.1 | 50% (4/0) | – | 7/43%/14% | 14/7%/7% |
| choose member:P3's Fan Club (6) | AUTO-PICK | 22 | 68% | 50% | 9% | 73% | 36% | 100% | 8.3 | 27% (0/3) | – | 1/100%/0% | 21/48%/10% |
| choose member:Gardener (3) | AUTO-PICK | 24 | 88% | 33% | 8% | 50% | 0% | 100% | 12.0 | 48% (6/4) | – | 11/45%/0% | 13/23%/15% |
| choose member:P3's HR (10) | AUTO-PICK | 25 | 88% | 64% | 8% | 100% | 75% | 100% | 7.8 | 20% (0/2) | – | 1/100%/0% | 24/63%/8% |
| choose member:P4's HR (10) | AUTO-PICK | 27 | 96% | 70% | 7% | 84% | 74% | 100% | 15.7 | 25% (0/3) | – | 1/100%/0% | 26/69%/8% |
| choose member:P1's Patriarch (6) | AUTO-PICK + MISJUDGED | 27 | 44% | 22% | 7% | 83% | 17% | 100% | 8.6 | 73% (3/5) | – | – | 27/22%/7% |
| trade:P1: Loyalists ↔ P4: Party Crasher | AUTO-PICK | 28 | 18% | 11% | 7% | 67% | 0% | 0% | 6.0 | 80% (2/2) | – | 8/38%/13% | 20/0%/5% |
| choose member:P2's HR (10) | AUTO-PICK | 30 | 77% | 70% | 7% | 86% | 76% | 100% | 8.3 | 57% (3/1) | – | 2/100%/0% | 28/68%/7% |
| choose member:P2's Snobs (6) | AUTO-PICK | 15 | 60% | 40% | 7% | 67% | 50% | 100% | 8.7 | 50% (1/2) | – | 1/100%/0% | 14/36%/7% |
| choose member:Dabblers | AUTO-PICK | 30 | 40% | 10% | 7% | 100% | 0% | 100% | 4.6 | 33% (2/2) | – | 14/0%/14% | 16/19%/0% |
| choose member:Line Cutters | AUTO-PICK | 30 | 40% | 10% | 7% | 67% | 0% | 100% | 13.7 | 42% (1/4) | – | 11/18%/9% | 19/5%/5% |
| choose member:Trendsetters (4) | AUTO-PICK + MISJUDGED | 31 | 68% | 19% | 6% | 50% | 0% | 100% | 7.8 | 52% (2/9) | – | 10/30%/20% | 21/14%/0% |
| pass:Pass | AUTO-PICK | 19999 | 35% | 18% | 6% | 58% | 12% | 11% | 8.9 | 38% (1406/1085) | 4722/39%/10% | 6403/18%/8% | 8874/6%/3% |
| choose member:Stunt Double | AUTO-PICK + MISJUDGED | 17 | 65% | 29% | 6% | 80% | 20% | 100% | 7.2 | 70% (4/3) | – | 5/60%/20% | 12/17%/0% |
| choose member:P1's Snobs (6) | AUTO-PICK | 17 | 71% | 29% | 6% | 80% | 40% | 100% | 4.0 | 40% (2/2) | – | 1/0%/0% | 16/31%/6% |
| choose member:Stunt Double (5) | AUTO-PICK | 17 | 59% | 24% | 6% | 50% | 0% | 100% | 6.6 | 30% (3/0) | – | 8/38%/13% | 9/11%/0% |
| choose member:Fan Club | AUTO-PICK | 17 | 71% | 24% | 6% | 75% | 50% | 100% | 8.3 | 40% (0/4) | – | 3/100%/0% | 14/7%/7% |
| trade:P3: Shopkeeper ↔ P1: Deprogrammers | AUTO-PICK | 18 | 17% | 11% | 6% | 50% | 0% | 0% | 0.4 | 33% (1/0) | – | 8/13%/13% | 10/10%/0% |
| trade:P3: Shopkeeper ↔ P1: Triplets | AUTO-PICK | 18 | 17% | 11% | 6% | 50% | 0% | 0% | 3.3 | 0% (0/0) | – | 8/25%/13% | 10/0%/0% |
| choose member:P3's Con Men (7) | AUTO-PICK | 56 | 23% | 14% | 5% | 75% | 0% | 100% | 4.0 | 46% (4/2) | – | 4/50%/0% | 52/12%/6% |
| choose member:P1's Fan Club (6) | AUTO-PICK | 38 | 58% | 26% | 5% | 90% | 60% | 100% | 14.5 | 31% (0/5) | – | 2/100%/0% | 36/22%/6% |
| choose member:Accomplice | AUTO-PICK | 19 | 26% | 16% | 5% | 67% | 0% | 100% | 10.0 | 60% (3/0) | – | 5/20%/0% | 14/14%/7% |
| choose member:P1's Recluse (4) | AUTO-PICK | 19 | 37% | 11% | 5% | 100% | 0% | 100% | 13.9 | 43% (1/2) | – | – | 19/11%/5% |
| choose member:P3's Busker (4) | AUTO-PICK + MISJUDGED | 38 | 29% | 11% | 5% | 50% | 25% | 100% | 14.3 | 60% (3/3) | – | 2/50%/0% | 36/8%/6% |
| choose member:P1's Mob (12) | AUTO-PICK | 20 | 100% | 90% | 5% | 100% | 100% | 100% | 3.3 | 100% (0/2) | – | 2/100%/0% | 18/89%/6% |
| choose member:P1's Chronicler (5) | AUTO-PICK | 20 | 25% | 20% | 5% | 50% | 0% | 100% | 18.0 | 60% (3/0) | – | – | 20/20%/5% |
| choose member:Doppelganger (5) | AUTO-PICK | 20 | 65% | 15% | 5% | 67% | 0% | 100% | 12.7 | 23% (3/0) | – | 8/13%/0% | 12/17%/8% |
| choose member:Busker | AUTO-PICK | 42 | 57% | 31% | 5% | 62% | 54% | 100% | 16.9 | 35% (3/3) | – | 21/33%/5% | 21/29%/5% |
| choose member:P3's Shopkeeper (4) | AUTO-PICK | 21 | 38% | 24% | 5% | 60% | 40% | 100% | 10.2 | 50% (2/1) | – | 3/0%/0% | 18/28%/6% |
| choose member:P2's Deprogrammers (3) | AUTO-PICK | 21 | 24% | 19% | 5% | 75% | 0% | 100% | 9.0 | 60% (3/0) | – | 4/25%/25% | 17/18%/0% |
| choose member:Kingpin (4) | AUTO-PICK | 63 | 62% | 16% | 5% | 80% | 0% | 100% | 9.2 | 41% (7/9) | – | 24/29%/13% | 39/8%/0% |
| choose member:Deprogrammers | AUTO-PICK | 22 | 59% | 23% | 5% | 60% | 0% | 100% | 10.0 | 31% (0/4) | – | 7/43%/0% | 15/13%/7% |
| choose member:P1's Con Men (7) | AUTO-PICK + MISJUDGED | 52 | 38% | 13% | 4% | 57% | 0% | 100% | 12.9 | 55% (4/7) | – | 3/67%/0% | 49/10%/4% |
| choose member:P1's HR (10) | AUTO-PICK + MISJUDGED | 29 | 69% | 59% | 3% | 88% | 65% | 100% | 14.3 | 67% (4/2) | – | 2/100%/0% | 27/56%/4% |
| choose member:P2's Panel (7) | AUTO-PICK | 29 | 38% | 14% | 3% | 50% | 0% | 100% | 12.6 | 45% (2/3) | – | 2/0%/0% | 27/15%/4% |
| choose member:P4's Con Men (7) | AUTO-PICK | 61 | 31% | 15% | 3% | 67% | 0% | 100% | 18.0 | 37% (5/2) | – | 5/60%/20% | 56/11%/2% |
| choose member:P4's Fan Club (6) | AUTO-PICK + MISJUDGED | 31 | 55% | 35% | 3% | 73% | 64% | 100% | 5.0 | 50% (1/4) | – | 2/50%/0% | 29/34%/3% |
| choose member:P2's Roadie (3) | AUTO-PICK | 37 | 22% | 11% | 3% | 50% | 50% | 100% | 10.4 | 17% (1/0) | – | 1/0%/0% | 36/11%/3% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | AUTO-PICK | 41 | 20% | 15% | 2% | 67% | 17% | 0% | 12.5 | 29% (1/1) | – | 19/16%/5% | 22/14%/0% |
| followers:top | AUTO-PICK | 14807 | 25% | 17% | 2% | 76% | 52% | 0% | 8.7 | 40% (366/582) | 505/0%/0% | 5617/0%/0% | 8685/28%/4% |
| choose member:P2's Mob (12) | AUTO-PICK | 15 | 100% | 100% | 0% | 100% | 87% | 100% | – | 0% (0/0) | – | 2/100%/0% | 13/100%/0% |
| choose member:P3's Mob (12) | AUTO-PICK | 18 | 100% | 100% | 0% | 100% | 78% | 100% | – | 25% (1/0) | – | – | 18/100%/0% |
| choose member:Roadie | AUTO-PICK | 44 | 70% | 52% | 0% | 78% | 52% | 100% | 20.5 | 42% (3/5) | – | 22/73%/0% | 22/32%/0% |
| choose member:P3's Patriarch (6) | AUTO-PICK + MISJUDGED | 17 | 71% | 41% | 0% | 57% | 14% | 100% | 5.0 | 64% (3/4) | – | – | 17/41%/0% |
| choose member:P2's Fan Club (6) | AUTO-PICK | 22 | 50% | 32% | 0% | 100% | 57% | 100% | 6.2 | 29% (1/1) | – | – | 22/32%/0% |
| choose member:P3's Snobs (6) | AUTO-PICK + MISJUDGED | 23 | 57% | 30% | 0% | 71% | 29% | 100% | 11.2 | 55% (3/3) | – | – | 23/30%/0% |
| choose member:P3's High Society (8) | AUTO-PICK + MISJUDGED | 15 | 73% | 27% | 0% | 100% | 25% | 100% | 9.2 | 60% (2/4) | – | 1/0%/0% | 14/29%/0% |
| choose member:Con Men | AUTO-PICK | 15 | 33% | 27% | 0% | 50% | 0% | 100% | 7.9 | 80% (4/0) | – | 7/57%/0% | 8/0%/0% |
| choose member:P3's Dyer (7) | AUTO-PICK | 15 | 47% | 27% | 0% | 100% | 100% | 100% | 17.8 | 33% (0/1) | – | – | 15/27%/0% |
| choose member:P4's Patriarch (6) | AUTO-PICK | 22 | 32% | 23% | 0% | 80% | 0% | 100% | 32.2 | 43% (2/1) | – | 3/33%/0% | 19/21%/0% |
| choose member:P1's Mentor & Protégés (9) | AUTO-PICK | 15 | 20% | 20% | 0% | 67% | 67% | 100% | – | 0% (0/0) | – | 2/100%/0% | 13/8%/0% |
| choose member:P2's Timekeepers (4) | AUTO-PICK | 18 | 50% | 17% | 0% | 100% | 0% | 100% | 15.2 | 44% (2/2) | – | 2/0%/0% | 16/19%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 31 | 35% | 16% | 0% | 60% | 60% | 100% | 14.7 | 38% (2/1) | – | 4/0%/0% | 27/19%/0% |
| trade:P3: Roadie ↔ P4: Volunteer | AUTO-PICK | 20 | 35% | 15% | 0% | 67% | 0% | 0% | 9.0 | 29% (1/1) | – | 12/17%/0% | 8/13%/0% |
| choose member:P4's Grifter (8) | AUTO-PICK + MISJUDGED | 35 | 23% | 14% | 0% | 80% | 0% | 100% | 10.2 | 63% (3/2) | – | 3/0%/0% | 32/16%/0% |
| choose member:Window Shopper (5) | AUTO-PICK | 22 | 45% | 14% | 0% | 100% | 0% | 100% | 10.5 | 20% (2/0) | – | 3/33%/0% | 19/11%/0% |
| trade:P3: Patriarch ↔ P4: Shopkeeper | AUTO-PICK | 15 | 13% | 13% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 1/100%/0% | 14/7%/0% |
| choose member:P3's Timekeepers (4) | AUTO-PICK | 15 | 33% | 13% | 0% | 50% | 50% | 100% | 3.4 | 25% (1/0) | – | – | 15/13%/0% |
| trade:P3: Busker ↔ Shop: Patriarch | AUTO-PICK | 15 | 20% | 13% | 0% | 100% | 0% | 0% | 50.7 | 67% (2/0) | – | 12/17%/0% | 3/0%/0% |
| trade:P3: Con Men ↔ P4: Stunt Double | AUTO-PICK | 15 | 13% | 13% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 7/29%/0% | 8/0%/0% |
| trade:P3: Loyalists ↔ P1: Accomplice | AUTO-PICK | 16 | 13% | 13% | 0% | 100% | 0% | 0% | – | 100% (2/0) | – | 4/25%/0% | 12/8%/0% |
| choose member:P1's Loyalists (5) | AUTO-PICK | 16 | 25% | 13% | 0% | 50% | 0% | 100% | 7.9 | 50% (2/0) | – | 1/0%/0% | 15/13%/0% |
| trade:P4: Con Men ↔ Shop: Mentor & Protégés | AUTO-PICK | 17 | 24% | 12% | 0% | 50% | 50% | 0% | 7.5 | 67% (1/1) | – | 2/50%/0% | 15/7%/0% |
| choose member:P1's Timekeepers (4) | AUTO-PICK | 17 | 24% | 12% | 0% | 50% | 50% | 100% | 20.2 | 33% (1/0) | – | 1/0%/0% | 16/13%/0% |
| choose member:P2's Gardener (3) | AUTO-PICK | 17 | 18% | 12% | 0% | 100% | 0% | 100% | 3.0 | 33% (1/0) | – | 5/20%/0% | 12/8%/0% |
| trade:P1: Volunteer ↔ P4: Deprogrammers | AUTO-PICK | 26 | 12% | 12% | 0% | 67% | 0% | 0% | – | 67% (2/0) | – | 13/0%/0% | 13/23%/0% |
| choose member:P3's Chronicler (5) | AUTO-PICK | 35 | 17% | 11% | 0% | 100% | 0% | 100% | 14.9 | 83% (3/2) | – | 3/0%/0% | 32/13%/0% |
| trade:P1: Fan Club ↔ P3: Busker | AUTO-PICK | 18 | 28% | 11% | 0% | 100% | 50% | 0% | 6.2 | 75% (0/3) | – | 4/0%/0% | 14/14%/0% |
| choose member:P4's Window Dressers (4) | AUTO-PICK | 19 | 21% | 11% | 0% | 100% | 50% | 100% | 10.5 | 67% (1/1) | – | 1/0%/0% | 18/11%/0% |
| choose member:P1's Grifter (8) | AUTO-PICK + MISJUDGED | 50 | 24% | 10% | 0% | 100% | 0% | 100% | 11.1 | 50% (3/3) | – | 1/100%/0% | 49/8%/0% |
| trade:P3: Shopkeeper ↔ Shop: Martyrs | AUTO-PICK | 20 | 10% | 10% | 0% | 100% | 0% | 50% | – | 50% (1/0) | – | 11/9%/0% | 9/11%/0% |
| choose member:Chronicler | MIXED | 21 | 52% | 19% | 10% | 25% | 0% | 100% | 9.9 | 9% (0/1) | – | 4/25%/25% | 17/18%/6% |
| choose member:Window Dressers (4) | MIXED | 21 | 29% | 14% | 10% | 33% | 0% | 100% | 4.3 | 33% (0/2) | – | 6/33%/17% | 15/7%/7% |
| choose member:P3's Deprogrammers (3) | MIXED | 32 | 19% | 9% | 9% | 33% | 0% | 100% | 5.6 | 67% (2/2) | – | 3/0%/33% | 29/10%/7% |
| choose member:P2's Con Men (7) | MIXED | 51 | 22% | 8% | 8% | 75% | 0% | 100% | 7.0 | 36% (2/2) | – | 1/0%/0% | 50/8%/8% |
| trade:P1: Deprogrammers ↔ P3: Accomplice | MIXED | 28 | 11% | 7% | 7% | 0% | 0% | 0% | 3.7 | 33% (0/1) | – | 11/9%/9% | 17/6%/6% |
| choose member:P1's Alchemists (5) | MIXED | 42 | 12% | 5% | 7% | 0% | 0% | 100% | 10.3 | 60% (2/1) | – | 2/0%/0% | 40/5%/8% |
| choose member:P4's Alchemists (5) | MIXED | 30 | 17% | 13% | 7% | 25% | 0% | 100% | 41.3 | 80% (4/0) | – | 2/0%/0% | 28/14%/7% |
| trade:P3: Deprogrammers ↔ P1: Accomplice | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 0.2 | 50% (1/0) | – | 3/0%/33% | 12/8%/0% |
| trade:P3: Alchemists ↔ P1: Triplets | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 24.4 | 100% (1/1) | – | 3/0%/0% | 12/8%/8% |
| trade:P1: Agents ↔ Shop: Volunteer | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 6.0 | 50% (1/0) | – | 8/0%/0% | 7/14%/14% |
| trade:P4: Panel ↔ P2: Loyalists | MIXED | 15 | 13% | 7% | 7% | 100% | 0% | 0% | 0.7 | 0% (0/0) | – | – | 15/7%/7% |
| trade:P1: Accomplice ↔ P3: Recruit Bonus | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/25%/25% | 11/0%/0% |
| trade:P3: Patriarch ↔ P4: Stunt Double | MIXED | 15 | 13% | 7% | 7% | 100% | 100% | 0% | 0.8 | 0% (0/0) | – | 1/0%/100% | 14/7%/0% |
| trade:P1: Deprogrammers ↔ P4: Toastmaster | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 20.5 | 50% (1/0) | – | 4/25%/25% | 11/0%/0% |
| trade:P4: Con Men ↔ P2: Extortionist | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/33%/33% | 12/0%/0% |
| followers:small | MIXED | 19999 | 33% | 12% | 7% | 44% | 0% | 7% | 10.1 | 37% (1601/842) | 4722/12%/8% | 6403/15%/8% | 8874/10%/5% |
| trade:P3: Cutpurse ↔ P1: Volunteer | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 11.2 | 50% (0/1) | – | 6/0%/0% | 10/10%/10% |
| trade:P2: Deprogrammers ↔ Shop: Old Maid | MIXED | 32 | 6% | 3% | 6% | 0% | 0% | 0% | 1.4 | 0% (0/0) | – | 17/0%/0% | 15/7%/13% |
| choose member:P4's Timekeepers (4) | MIXED | 32 | 22% | 3% | 6% | 0% | 0% | 100% | 8.1 | 57% (1/3) | – | – | 32/3%/6% |
| trade:P1: Triplets ↔ Shop: Cashier | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 7/0%/0% | 10/10%/10% |
| trade:P1: Alchemists ↔ P3: Cutpurse | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 3/33%/33% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Polisher | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 0.0 | 50% (1/0) | – | 10/10%/10% | 8/0%/0% |
| trade:P1: Fan Club ↔ P3: Loyalists | MIXED | 18 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 2/0%/0% | 16/6%/6% |
| choose member:P2's Trendsetters (4) | MIXED | 19 | 26% | 26% | 5% | 40% | 0% | 100% | – | 80% (4/0) | – | 3/0%/0% | 16/31%/6% |
| choose member:P2's Patriarch (6) | MIXED | 19 | 26% | 5% | 5% | 100% | 100% | 100% | 7.4 | 75% (0/3) | – | 1/0%/0% | 18/6%/6% |
| trade:P1: Loyalists ↔ P4: Scouts | MIXED | 19 | 11% | 5% | 5% | 0% | 0% | 0% | 16.1 | 100% (1/1) | – | 9/11%/11% | 10/0%/0% |
| trade:P3: Patriarch ↔ P4: Party Crasher | MIXED | 19 | 16% | 5% | 5% | 100% | 0% | 0% | 2.7 | 67% (1/1) | – | 2/0%/0% | 17/6%/6% |
| trade:P1: Alchemists ↔ P3: Triplets | MIXED | 20 | 10% | 5% | 5% | 100% | 0% | 0% | 0.6 | 100% (1/1) | – | 3/33%/0% | 17/0%/6% |
| trade:P1: Panel ↔ P4: Loyalists | MIXED | 20 | 15% | 5% | 5% | 0% | 0% | 0% | 13.0 | 33% (0/1) | – | 4/0%/0% | 16/6%/6% |
| trade:P1: Alchemists ↔ P3: Dabblers | MIXED | 20 | 10% | 0% | 5% | – | – | – | 5.1 | 0% (0/0) | – | 4/0%/0% | 16/0%/6% |
| trade:P3: Triplets ↔ P1: Volunteer | MIXED | 20 | 10% | 0% | 5% | – | – | – | 6.1 | 0% (0/0) | – | 3/0%/0% | 17/0%/6% |
| trade:P2: Deprogrammers ↔ P3: Triplets | MIXED | 21 | 10% | 10% | 5% | 50% | 0% | 0% | – | 50% (1/0) | – | 5/40%/20% | 16/0%/0% |
| trade:P1: Fan Club ↔ P2: Party Crasher | MIXED | 21 | 24% | 10% | 5% | 50% | 50% | 0% | 5.3 | 75% (1/2) | – | 3/33%/0% | 18/6%/6% |
| trade:P1: Busker ↔ Shop: Old Maid | MIXED | 21 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 13/8%/8% |
| trade:P1: Scouts ↔ P2: Volunteer | MIXED | 42 | 5% | 5% | 5% | 0% | 0% | 0% | – | 50% (1/0) | – | 17/6%/6% | 25/4%/4% |
| trade:P2: Extortionist ↔ Shop: Old Maid | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 3.5 | 100% (1/1) | – | 2/50%/50% | 19/0%/0% |
| trade:P3: Party Crasher ↔ P2: Deprogrammers | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 0.6 | 100% (1/1) | – | 7/0%/14% | 14/7%/0% |
| trade:P3: Polisher ↔ P4: Deprogrammers | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 4.7 | 50% (1/0) | – | 12/8%/8% | 9/0%/0% |
| trade:P1: Volunteer ↔ P2: Deprogrammers | MIXED | 22 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 9/11%/11% | 13/0%/0% |
| trade:P4: Polisher ↔ P3: Deprogrammers | MIXED | 22 | 9% | 5% | 5% | 0% | 0% | 0% | 6.2 | 50% (1/0) | – | 8/0%/0% | 14/7%/7% |
| trade:P3: Loyalists ↔ P2: Roadie | MIXED | 22 | 23% | 5% | 5% | 0% | 0% | 0% | 19.8 | 40% (0/2) | – | 5/0%/0% | 17/6%/6% |
| trade:P1: Loyalists ↔ P4: Roadie | MIXED | 24 | 21% | 8% | 4% | 100% | 0% | 0% | 10.3 | 40% (1/1) | – | 5/0%/0% | 19/11%/5% |
| trade:P1: Loyalists ↔ P2: Cutpurse | MIXED | 24 | 8% | 8% | 4% | 50% | 0% | 0% | – | 50% (1/0) | – | 7/0%/0% | 17/12%/6% |
| trade:P3: Loyalists ↔ P1: Dabblers | MIXED | 24 | 8% | 4% | 4% | 100% | 0% | 0% | 0.5 | 50% (1/0) | – | 7/14%/14% | 17/0%/0% |
| trade:P2: Triplets ↔ P4: Dabblers | MIXED | 24 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/14% | 17/0%/0% |
| trade:P2: Accomplice ↔ P3: Deprogrammers | MIXED | 25 | 12% | 4% | 4% | 100% | 0% | 0% | 2.0 | 0% (0/0) | – | 13/8%/8% | 12/0%/0% |
| trade:P3: Loyalists ↔ P1: Scouts | MIXED | 25 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/25% | 21/0%/0% |
| trade:P1: Loyalists ↔ P2: Kingpin | MIXED | 25 | 8% | 4% | 4% | 0% | 0% | 0% | 4.3 | 0% (0/0) | – | 9/11%/11% | 16/0%/0% |
| trade:P1: Cutpurse ↔ P3: Dabblers | MIXED | 26 | 8% | 8% | 4% | 0% | 0% | 0% | – | 50% (1/0) | – | 10/20%/10% | 16/0%/0% |
| trade:P3: Dabblers ↔ Shop: Volunteer | MIXED | 26 | 8% | 8% | 4% | 50% | 0% | 0% | – | 100% (2/0) | – | 13/8%/8% | 13/8%/0% |
| trade:P2: Mob ↔ Shop: Wallflower | MIXED | 26 | 15% | 8% | 4% | 0% | 0% | 0% | 42.6 | 50% (2/0) | – | 5/0%/0% | 21/10%/5% |
| trade:P3: Roadie ↔ P1: Volunteer | MIXED | 26 | 8% | 4% | 4% | 100% | 100% | 0% | 0.0 | 0% (0/0) | – | 15/7%/7% | 11/0%/0% |
| trade:P3: Dabblers ↔ P4: Volunteer | MIXED | 27 | 11% | 4% | 4% | 100% | 0% | 0% | 19.0 | 67% (1/1) | – | 4/0%/0% | 23/4%/4% |
| trade:P3: Deprogrammers ↔ P4: Scouts | MIXED | 55 | 5% | 4% | 4% | 0% | 0% | 0% | 1.0 | 67% (2/0) | – | 22/5%/5% | 33/3%/3% |
| trade:P2: Recruit Bonus ↔ P1: Volunteer | MIXED | 28 | 11% | 4% | 4% | 100% | 0% | 0% | 1.9 | 33% (1/0) | – | 9/11%/11% | 19/0%/0% |
| trade:P2: Cutpurse ↔ P4: Deprogrammers | MIXED | 28 | 14% | 0% | 4% | – | – | – | 6.8 | 25% (0/1) | – | 12/0%/0% | 16/0%/6% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | MIXED + MISJUDGED | 59 | 17% | 3% | 3% | 0% | 0% | 0% | 10.7 | 60% (1/5) | – | 18/6%/6% | 41/2%/2% |
| trade:P1: Agents ↔ P4: Volunteer | MIXED | 30 | 10% | 3% | 3% | 0% | 0% | 0% | 27.4 | 0% (0/0) | – | 8/13%/13% | 22/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Volunteer | MIXED | 32 | 13% | 6% | 3% | 100% | 100% | 0% | 2.5 | 100% (0/2) | – | 14/14%/0% | 18/0%/6% |
| trade:P2: Panel ↔ Shop: Old Maid | MIXED | 32 | 13% | 3% | 3% | 100% | 0% | 0% | 4.0 | 0% (0/0) | – | 8/0%/0% | 24/4%/4% |
| trade:P3: Dabblers ↔ P4: Toastmaster | MIXED | 33 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 12/0%/0% | 21/5%/5% |
| trade:P3: Panel ↔ Shop: Old Maid | MIXED | 34 | 12% | 9% | 3% | 100% | 0% | 0% | 0.5 | 75% (2/1) | – | 11/9%/0% | 23/9%/4% |
| trade:P4: Deprogrammers ↔ P3: Volunteer | MIXED | 34 | 12% | 9% | 3% | 0% | 0% | 0% | 1.7 | 50% (2/0) | – | 16/13%/0% | 18/6%/6% |
| trade:P1: Deprogrammers ↔ P2: Scouts | MIXED | 34 | 9% | 6% | 3% | 50% | 0% | 0% | 37.4 | 100% (2/1) | – | 12/8%/0% | 22/5%/5% |
| followers:mid | MIXED | 18445 | 14% | 6% | 2% | 38% | 2% | 1% | 8.9 | 35% (455/451) | 3212/0%/0% | 6374/1%/1% | 8859/11%/4% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | MIXED | 45 | 13% | 4% | 2% | 50% | 0% | 0% | 9.0 | 33% (1/1) | – | 17/6%/6% | 28/4%/0% |
| trade:P1: Con Men ↔ Shop: Old Maid | MIXED | 45 | 4% | 4% | 2% | 50% | 50% | 0% | – | 0% (0/0) | – | 7/14%/0% | 38/3%/3% |
| trade:P3: Deprogrammers ↔ P2: Volunteer | MIXED | 45 | 13% | 0% | 2% | – | – | – | 10.7 | 67% (0/4) | – | 16/0%/0% | 29/0%/3% |
| trade:P2: Deprogrammers ↔ P1: Volunteer | MIXED | 48 | 10% | 2% | 2% | 100% | 0% | 0% | 7.1 | 40% (0/2) | – | 24/0%/4% | 24/4%/0% |
| trade:P4: Con Men ↔ Shop: Old Maid | MIXED | 50 | 14% | 8% | 2% | 75% | 0% | 0% | 10.9 | 43% (3/0) | – | 15/20%/0% | 35/3%/3% |
| trade:P2: Dabblers ↔ P3: Volunteer | MIXED | 53 | 6% | 4% | 2% | 50% | 0% | 0% | 0.9 | 0% (0/0) | – | 23/4%/4% | 30/3%/0% |
| trade:P1: Deprogrammers ↔ P3: Volunteer | MIXED | 54 | 7% | 4% | 2% | 100% | 0% | 0% | 2.7 | 50% (0/2) | – | 23/4%/0% | 31/3%/3% |
| trade:P3: Deprogrammers ↔ P2: Line Cutters | MIXED | 59 | 7% | 3% | 2% | 50% | 0% | 0% | 13.4 | 0% (0/0) | – | 23/9%/4% | 36/0%/0% |
| trade:P2: Kingpin ↔ P4: Cutpurse | MIXED | 15 | 20% | 13% | 0% | 0% | 0% | 0% | 4.9 | 67% (1/1) | – | 7/0%/0% | 8/25%/0% |
| trade:P2: Critic ↔ P4: Deprogrammers | MIXED | 17 | 18% | 12% | 0% | 0% | 0% | 0% | 6.6 | 0% (0/0) | – | 8/0%/0% | 9/22%/0% |
| trade:P1: Roadie ↔ P4: Volunteer | MIXED | 33 | 9% | 9% | 0% | 100% | 33% | 0% | – | 0% (0/0) | – | 19/16%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P4: Deprogrammers | MIXED | 27 | 7% | 7% | 0% | 50% | 0% | 0% | – | 50% (1/0) | – | 7/14%/0% | 20/5%/0% |
| trade:P2: Deprogrammers ↔ P3: Volunteer | MIXED | 27 | 22% | 7% | 0% | 0% | 0% | 0% | 16.2 | 17% (1/0) | – | 14/7%/0% | 13/8%/0% |
| trade:P2: Party Crasher ↔ P3: Deprogrammers | MIXED | 29 | 7% | 7% | 0% | 50% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 21/5%/0% |
| trade:P1: Alchemists ↔ P2: Accomplice | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 11/9%/0% |
| trade:P2: Panel ↔ Shop: Desperado | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 6/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Triplets | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 5/0%/0% |
| trade:P2: Loyalists ↔ P1: Roadie | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 30.1 | 50% (0/1) | – | 3/33%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Gardener | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P1: Doppelganger ↔ P3: Dabblers | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 3/33%/0% | 12/0%/0% |
| trade:P3: Gardener ↔ P4: Deprogrammers | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 2.8 | 50% (0/1) | – | 10/10%/0% | 5/0%/0% |
| trade:P4: Triplets ↔ P3: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ P2: Toastmaster | MIXED | 15 | 7% | 7% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 8/0%/0% | 7/14%/0% |
| trade:P4: Stunt Double ↔ P1: Recruit Bonus | MIXED | 15 | 7% | 7% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 1/100%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED | 46 | 22% | 7% | 0% | 33% | 0% | 0% | 17.6 | 40% (0/4) | – | 24/4%/0% | 22/9%/0% |
| trade:P4: Loyalists ↔ P1: Accomplice | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 19.5 | 0% (0/0) | – | 3/0%/0% | 13/8%/0% |
| trade:P3: Chronicler ↔ P4: Busker | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 15/7%/0% |
| trade:P2: Patriarch ↔ P3: Kingpin | MIXED | 16 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 7/14%/0% | 9/0%/0% |
| trade:P1: Accomplice ↔ P4: Line Cutters | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 13/8%/0% |
| trade:P4: Snobs ↔ P1: Party Crasher | MIXED | 16 | 19% | 6% | 0% | 100% | 0% | 0% | 8.9 | 33% (0/1) | – | 4/0%/0% | 12/8%/0% |
| trade:P1: Deprogrammers ↔ P2: Volunteer | MIXED | 32 | 16% | 6% | 0% | 100% | 0% | 0% | 8.0 | 60% (1/2) | – | 12/8%/0% | 20/5%/0% |
| trade:P2: Stunt Double ↔ P4: Roadie | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 4.5 | 0% (0/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P4: Gardener ↔ P2: Deprogrammers | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 12/8%/0% |
| trade:P2: Early Birds ↔ P4: Volunteer | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 16/6%/0% |
| trade:P3: Patriarch ↔ Shop: Closer | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 11/0%/0% |
| trade:P4: Shoplifter ↔ Shop: Old Maid | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | – | 16/6%/0% |
| trade:P1: Mob ↔ Shop: Wallflower | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 15/7%/0% |
| trade:P2: Panel ↔ P4: Loyalists | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 12.1 | 50% (0/1) | – | 5/20%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Line Cutters | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 7/0%/0% |
| trade:P2: Gardener ↔ P4: Deprogrammers | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/0%/0% | 11/9%/0% |
| trade:P1: Panel ↔ P3: Recruit Bonus | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 5/20%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P1: Volunteer | MIXED | 16 | 13% | 6% | 0% | 100% | 100% | 0% | 54.8 | 0% (0/0) | – | 6/17%/0% | 10/0%/0% |
| trade:P4: Timekeepers ↔ P3: Shift Crew | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 12/0%/0% |
| trade:P1: Shopkeeper ↔ P3: Triplets | MIXED | 17 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 3/0%/0% | 14/7%/0% |
| trade:P1: Panel ↔ P4: Scouts | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/0%/0% | 12/8%/0% |
| trade:P2: Cutpurse ↔ P1: Recruit Bonus | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 11/0%/0% |
| trade:P3: Line Cutters ↔ P1: Volunteer | MIXED | 34 | 6% | 6% | 0% | 50% | 0% | 0% | – | 100% (2/0) | – | 19/5%/0% | 15/7%/0% |
| trade:P4: Panel ↔ P1: Stunt Double | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | – | 17/6%/0% |
| trade:P2: Chronicler ↔ P1: Roadie | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 7.0 | 0% (0/0) | – | 5/20%/0% | 12/0%/0% |
| trade:P2: Doppelganger ↔ P1: Roadie | MIXED | 17 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 5/20%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ Shop: Volunteer | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 10.5 | 0% (0/0) | – | 8/13%/0% | 9/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Triplets | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 11.2 | 0% (0/0) | – | 4/25%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Accomplice | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 7/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Deprogrammers | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 10/10%/0% |
| trade:P3: Window Shopper ↔ P2: Critic | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 5/20%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ Shop: Chronicler | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/33%/0% | 14/0%/0% |
| trade:P1: Recluse ↔ P4: Line Cutters | MIXED | 17 | 12% | 6% | 0% | 0% | 0% | 0% | 29.1 | 50% (1/0) | – | 7/14%/0% | 10/0%/0% |
| trade:P4: Bouncers ↔ P1: Triplets | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/100%/0% | 16/0%/0% |
| trade:P4: Loyalists ↔ P3: Agents | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 2/0%/0% | 15/7%/0% |
| trade:P2: Agents ↔ P1: Volunteer | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 7/0%/0% |
| trade:P1: Stunt Double ↔ P4: Loyalists | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 17/6%/0% |
| trade:P2: Kingpin ↔ P3: Deprogrammers | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 11/9%/0% |
| trade:P2: Party Crasher ↔ P3: Window Dressers | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 16/6%/0% |
| trade:P3: Deprogrammers ↔ P2: Busker | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 5.6 | 50% (1/0) | – | 5/20%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P2: Roadie | MIXED | 36 | 6% | 6% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 19/11%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P3: Triplets | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 11/0%/0% |
| trade:P1: Sticky Fingers ↔ P3: Cutpurse | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 8/0%/0% |
| trade:P3: Patriarch ↔ P1: Stunt Double | MIXED | 18 | 11% | 6% | 0% | 0% | 0% | 0% | 2.8 | 0% (0/0) | – | 7/14%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ P2: Dabblers | MIXED | 36 | 8% | 6% | 0% | 50% | 0% | 0% | 8.1 | 33% (1/0) | – | 14/7%/0% | 22/5%/0% |
| trade:P2: Loyalists ↔ P1: Scouts | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 1/0%/0% | 17/6%/0% |
| trade:P3: Busker ↔ Shop: Loyalists | MIXED | 18 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ Shop: Customs | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/33%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P4: Gardener | MIXED | 18 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 10/10%/0% |
| trade:P3: Caravan ↔ Shop: Harmonist | MIXED | 18 | 11% | 6% | 0% | 0% | 0% | 0% | 7.0 | 100% (1/1) | – | 2/0%/0% | 16/6%/0% |
| trade:P1: Bouncers ↔ Shop: Triplets | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 6.3 | 50% (0/1) | – | 16/6%/0% | 2/0%/0% |
| trade:P2: Panel ↔ P1: Loyalists | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 16.4 | 50% (0/1) | – | 2/0%/0% | 16/6%/0% |
| trade:P1: Alchemists ↔ P3: Agents | MIXED | 18 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/50%/0% | 16/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Alchemists | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P3: Volunteer ↔ P1: Deprogrammers | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ P1: Line Cutters | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 9/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Loyalists | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 6/0%/0% | 13/8%/0% |
| trade:P3: Busker ↔ P1: Scouts | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P1: Agents ↔ P4: Deprogrammers | MIXED | 19 | 11% | 5% | 0% | 0% | 0% | 0% | 19.5 | 50% (1/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Line Cutters | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 15/0%/0% |
| trade:P3: Loyalists ↔ P4: Triplets | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 4.0 | 0% (0/0) | – | 5/20%/0% | 14/0%/0% |
| trade:P2: Patriarch ↔ P1: Party Crasher | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 2.0 | 0% (0/0) | – | 3/0%/0% | 16/6%/0% |
| trade:P1: Alchemists ↔ P4: Busker | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 7/0%/0% | 12/8%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Loyalists | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 12/0%/0% |
| trade:P1: Accomplice ↔ P4: Deprogrammers | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 2.9 | 50% (1/0) | – | 7/0%/0% | 13/8%/0% |
| trade:P4: Volunteer ↔ P2: Deprogrammers | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 8.6 | 50% (1/0) | – | 8/0%/0% | 12/8%/0% |
| trade:P4: Con Men ↔ P1: Loyalists | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 14/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Volunteer | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 12/8%/0% |
| trade:P2: Dabblers ↔ P3: Polisher | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 10/0%/0% |
| trade:P1: Panel ↔ Shop: Clockmakers | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 2.2 | 50% (1/0) | – | 8/13%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ P2: Loyalists | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 2/50%/0% | 18/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Regular | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/0%/0% | 14/7%/0% |
| trade:P2: Timekeepers ↔ P4: Deprogrammers | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P4: Roadie | MIXED | 20 | 5% | 5% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 12/8%/0% | 8/0%/0% |
| trade:P1: Recluse ↔ P2: Triplets | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 9.9 | 0% (0/0) | – | 10/10%/0% | 10/0%/0% |
| trade:P2: Alchemists ↔ P3: Dabblers | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 11/9%/0% | 10/0%/0% |
| trade:P4: HR ↔ Shop: Wallflower | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 20/5%/0% |
| trade:P1: Loyalists ↔ P3: Recruit Bonus | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/25%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Loyalists | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 13/8%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ P2: Party Crasher | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 17/6%/0% |
| trade:P3: Patriarch ↔ P1: Party Crasher | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 16/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Scouts | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 25.3 | 100% (1/1) | – | 10/10%/0% | 11/0%/0% |
| trade:P2: Busker ↔ P1: Scouts | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 12/8%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ Shop: Loyalists | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ P1: Volunteer | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 5/20%/0% | 16/0%/0% |
| trade:P2: Drifters ↔ P4: Volunteer | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 18/6%/0% |
| trade:P2: Busker ↔ P1: Deprogrammers | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 40.7 | 0% (0/0) | – | 7/0%/0% | 14/7%/0% |
| trade:P4: Busker ↔ P1: Roadie | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 13/8%/0% | 8/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Dabblers | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P4: Cutpurse | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 11/9%/0% | 11/0%/0% |
| trade:P1: Cutpurse ↔ P4: Deprogrammers | MIXED | 22 | 14% | 5% | 0% | 100% | 0% | 0% | 8.1 | 33% (1/0) | – | 6/0%/0% | 16/6%/0% |
| trade:P4: Loyalists ↔ P1: Triplets | MIXED | 22 | 9% | 5% | 0% | 100% | 0% | 0% | 8.0 | 0% (0/0) | – | 2/50%/0% | 20/0%/0% |
| trade:P1: Snobs ↔ Shop: Old Maid | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 14/7%/0% |
| trade:P2: Dabblers ↔ P3: Cutpurse | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 13/0%/0% |
| trade:P4: Accomplice ↔ P3: Deprogrammers | MIXED | 22 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/0%/0% | 16/6%/0% |
| trade:P3: Scouts ↔ P2: Deprogrammers | MIXED | 45 | 4% | 4% | 0% | 50% | 0% | 0% | – | 100% (2/0) | – | 22/5%/0% | 23/4%/0% |
| trade:P1: Accomplice ↔ P2: Line Cutters | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 15/0%/0% |
| trade:P2: Mentor & Protégés ↔ P4: Con Men | MIXED | 23 | 17% | 4% | 0% | 100% | 100% | 0% | 13.5 | 100% (0/3) | – | 4/25%/0% | 19/0%/0% |
| trade:P1: Line Cutters ↔ P2: Deprogrammers | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 16/0%/0% | 7/14%/0% |
| trade:P2: HR ↔ Shop: Proselytizers | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 23/4%/0% |
| trade:P2: Loyalists ↔ P4: Dabblers | MIXED | 23 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 21/5%/0% |
| trade:P1: Deprogrammers ↔ P2: Roadie | MIXED | 23 | 13% | 4% | 0% | 100% | 0% | 0% | 15.1 | 33% (1/0) | – | 10/0%/0% | 13/8%/0% |
| trade:P1: Doppelganger ↔ Shop: Old Maid | MIXED | 23 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 16/0%/0% |
| trade:P2: Agents ↔ P3: Volunteer | MIXED | 23 | 13% | 4% | 0% | 100% | 0% | 0% | 16.9 | 33% (0/1) | – | 13/8%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ P2: Agents | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Line Cutters | MIXED | 47 | 4% | 4% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 19/11%/0% | 28/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Alchemists | MIXED | 24 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Cutpurse | MIXED | 24 | 8% | 4% | 0% | 100% | 0% | 0% | 24.8 | 50% (1/0) | – | 9/11%/0% | 15/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Triplets | MIXED | 24 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/9%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P1: Recruit Bonus | MIXED | 24 | 8% | 4% | 0% | 100% | 0% | 0% | 14.8 | 0% (0/0) | – | 3/0%/0% | 21/5%/0% |
| trade:P1: Loyalists ↔ P2: Deprogrammers | MIXED | 24 | 13% | 4% | 0% | 100% | 100% | 0% | 3.8 | 50% (0/1) | – | 5/0%/0% | 19/5%/0% |
| trade:P1: HR ↔ Shop: Proselytizers | MIXED | 24 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 20/0%/0% |
| trade:P2: Chronicler ↔ Shop: Old Maid | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 15/7%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ P4: Deprogrammers | MIXED | 25 | 8% | 4% | 0% | 0% | 0% | 0% | 33.1 | 50% (1/0) | – | 14/7%/0% | 11/0%/0% |
| trade:P4: Gardener ↔ P3: Deprogrammers | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/0%/0% | 15/7%/0% |
| trade:P2: Scouts ↔ P3: Volunteer | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 11/9%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P3: Deprogrammers | MIXED | 52 | 6% | 4% | 0% | 100% | 0% | 0% | 6.9 | 100% (2/1) | – | 21/5%/0% | 31/3%/0% |
| trade:P3: Loyalists ↔ P1: Deprogrammers | MIXED | 26 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 19/5%/0% |
| trade:P2: Deprogrammers ↔ P3: Scouts | MIXED | 52 | 10% | 4% | 0% | 100% | 0% | 0% | 12.4 | 60% (2/1) | – | 26/0%/0% | 26/8%/0% |
| trade:P1: Loyalists ↔ P2: Recruit Bonus | MIXED | 26 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 4/25%/0% | 22/0%/0% |
| trade:P3: Busker ↔ P1: Roadie | MIXED | 26 | 4% | 4% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 10/10%/0% | 16/0%/0% |
| trade:P1: Alchemists ↔ P3: Roadie | MIXED | 26 | 12% | 4% | 0% | 100% | 0% | 0% | 7.6 | 67% (1/1) | – | 5/20%/0% | 21/0%/0% |
| trade:P1: Loyalists ↔ P4: Busker | MIXED | 26 | 12% | 4% | 0% | 0% | 0% | 0% | 5.7 | 67% (1/1) | – | 6/0%/0% | 20/5%/0% |
| trade:P1: Loyalists ↔ P2: Accomplice | MIXED | 26 | 8% | 4% | 0% | 100% | 0% | 0% | 14.4 | 0% (0/0) | – | 10/10%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Polisher | MIXED | 27 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 20/5%/0% |
| trade:P1: Polisher ↔ P3: Deprogrammers | MIXED | 27 | 7% | 4% | 0% | 100% | 0% | 0% | 3.0 | 50% (1/0) | – | 7/0%/0% | 20/5%/0% |
| trade:P2: Alchemists ↔ Shop: Cashier | MIXED | 27 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 18/0%/0% |
| trade:P2: Anarchist ↔ Shop: Old Maid | MIXED | 27 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 20/5%/0% |
| trade:P2: Loyalists ↔ P1: Triplets | MIXED | 27 | 7% | 4% | 0% | 0% | 0% | 0% | 23.0 | 0% (0/0) | – | 1/100%/0% | 26/0%/0% |
| trade:P2: Critic ↔ P3: Deprogrammers | MIXED | 27 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 7/14%/0% | 20/0%/0% |
| trade:P1: Roadie ↔ P4: Agents | MIXED | 28 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 14/7%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P3: Deprogrammers | MIXED | 28 | 7% | 4% | 0% | 100% | 0% | 0% | 24.0 | 0% (0/0) | – | 4/0%/0% | 24/4%/0% |
| trade:P1: Scouts ↔ P3: Volunteer | MIXED | 28 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 12/8%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ P1: Triplets | MIXED | 28 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 20/0%/0% |
| trade:P1: Polisher ↔ P2: Deprogrammers | MIXED | 29 | 7% | 3% | 0% | 0% | 0% | 0% | 4.0 | 50% (1/0) | – | 14/0%/0% | 15/7%/0% |
| trade:P3: Recruit Bonus ↔ P2: Volunteer | MIXED | 29 | 7% | 3% | 0% | 0% | 0% | 0% | 7.5 | 50% (1/0) | – | 9/0%/0% | 20/5%/0% |
| trade:P1: Deprogrammers ↔ P4: Early Birds | MIXED | 29 | 10% | 3% | 0% | 0% | 0% | 0% | 9.4 | 33% (1/0) | – | 15/0%/0% | 14/7%/0% |
| trade:P2: Accomplice ↔ P4: Cutpurse | MIXED | 30 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 14/7%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ P1: Volunteer | MIXED | 30 | 3% | 3% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 16/6%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ P4: Dabblers | MIXED | 30 | 7% | 3% | 0% | 100% | 0% | 0% | 2.4 | 50% (1/0) | – | 5/20%/0% | 25/0%/0% |
| trade:P1: Dabblers ↔ P3: Cutpurse | MIXED | 30 | 7% | 3% | 0% | 0% | 0% | 0% | 5.4 | 50% (1/0) | – | 13/0%/0% | 17/6%/0% |
| trade:P3: Trendsetters ↔ P4: Line Cutters | MIXED | 30 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 12/0%/0% | 18/6%/0% |
| trade:P4: Line Cutters ↔ P3: Volunteer | MIXED | 30 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 19/5%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P2: Volunteer | MIXED | 31 | 6% | 3% | 0% | 100% | 0% | 0% | 3.0 | 0% (0/0) | – | 13/0%/0% | 18/6%/0% |
| trade:P4: Loyalists ↔ P2: Scouts | MIXED | 31 | 6% | 3% | 0% | 0% | 0% | 0% | 7.8 | 50% (0/1) | – | 6/0%/0% | 25/4%/0% |
| trade:P1: Stunt Double ↔ P3: Busker | MIXED | 31 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 22/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 31 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 15/7%/0% | 16/0%/0% |
| trade:P2: Con Men ↔ P1: Loyalists | MIXED | 31 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 22/0%/0% |
| trade:P2: Line Cutters ↔ P1: Volunteer | MIXED | 62 | 8% | 3% | 0% | 50% | 0% | 0% | 14.4 | 0% (0/0) | – | 25/4%/0% | 37/3%/0% |
| trade:P2: Busker ↔ P3: Roadie | MIXED | 31 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 15/0%/0% | 16/6%/0% |
| trade:P3: Scouts ↔ P1: Deprogrammers | MIXED | 32 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 15/0%/0% | 17/6%/0% |
| trade:P3: Trendsetters ↔ P4: Dabblers | MIXED | 32 | 6% | 3% | 0% | 0% | 0% | 0% | 6.2 | 50% (1/0) | – | 12/8%/0% | 20/0%/0% |
| trade:P4: Doppelganger ↔ Shop: Old Maid | MIXED | 32 | 6% | 3% | 0% | 100% | 0% | 0% | 15.0 | 0% (0/0) | – | 5/20%/0% | 27/0%/0% |
| trade:P2: Scouts ↔ Shop: Old Maid | MIXED | 33 | 9% | 3% | 0% | 100% | 0% | 0% | 18.1 | 67% (1/1) | – | 12/8%/0% | 21/0%/0% |
| choose member:P1's Doormen (5) | MIXED | 15 | 27% | 0% | 0% | – | – | – | 14.7 | 25% (0/1) | – | 1/0%/0% | 14/0%/0% |
| choose member:P1's Window Dressers (4) | MIXED | 29 | 21% | 0% | 0% | – | – | – | 13.3 | 0% (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P3: Loyalists ↔ P2: Scouts | MIXED | 16 | 19% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| choose member:P3's Loyalists (5) | MIXED | 18 | 11% | 0% | 0% | – | – | – | 21.7 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P2's Shopkeeper (4) | MIXED | 18 | 22% | 0% | 0% | – | – | – | 17.0 | 0% (0/0) | – | – | 18/0%/0% |
| trade:P1: Accomplice ↔ P3: Deprogrammers | MIXED | 16 | 19% | 0% | 0% | – | – | – | 10.3 | 33% (0/1) | – | 4/0%/0% | 12/0%/0% |
| choose member:P1's Bouncers (4) | MIXED | 20 | 25% | 0% | 0% | – | – | – | 16.2 | 0% (0/0) | – | 1/0%/0% | 19/0%/0% |
| choose member:P3's Doormen (5) | MIXED | 15 | 20% | 0% | 0% | – | – | – | 16.1 | 33% (0/1) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: HR ↔ Shop: Debt Collectors | MIXED | 15 | 13% | 0% | 0% | – | – | – | 24.3 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Fan Club ↔ P1: Stunt Double | MIXED | 17 | 12% | 0% | 0% | – | – | – | 5.6 | 50% (0/1) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Fan Club ↔ P3: Shopkeeper | MIXED | 17 | 12% | 0% | 0% | – | – | – | 10.7 | 50% (0/1) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ P3: Deprogrammers | MIXED | 18 | 11% | 0% | 0% | – | – | – | 10.4 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| choose member:P1's Martyrs (4) | MIXED | 27 | 15% | 0% | 0% | – | – | – | 10.2 | 0% (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P1: Panel ↔ P3: Roadie | MIXED | 16 | 13% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| choose member:P4's Deprogrammers (3) | MIXED | 39 | 10% | 0% | 0% | – | – | – | 18.2 | 0% (0/0) | – | 4/0%/0% | 35/0%/0% |
| choose member:Muse | MIXED | 19 | 26% | 0% | 0% | – | – | – | 23.6 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| choose member:P2's Martyrs (4) | MIXED | 15 | 13% | 0% | 0% | – | – | – | 11.7 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P4: Volunteer | MIXED | 42 | 12% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 12/0%/0% | 30/0%/0% |
| trade:P2: Anarchist ↔ Shop: Extra Hand | MIXED | 16 | 13% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Loyalists ↔ P1: Party Crasher | MIXED | 19 | 16% | 0% | 0% | – | – | – | 6.2 | 33% (0/1) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Bouncers ↔ P3: Line Cutters | MIXED | 15 | 13% | 0% | 0% | – | – | – | 29.2 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Fan Club ↔ P2: Busker | MIXED | 16 | 13% | 0% | 0% | – | – | – | 5.3 | 50% (0/1) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Con Men ↔ P1: Stunt Double | MIXED | 19 | 11% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P3: Volunteer | MIXED | 30 | 10% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Fan Club ↔ P4: Busker | MIXED | 19 | 11% | 0% | 0% | – | – | – | 6.6 | 50% (0/1) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Polisher | MIXED | 24 | 13% | 0% | 0% | – | – | – | 13.3 | 67% (0/2) | – | 9/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Critic | MIXED | 16 | 13% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| choose member:P3's Double Agent (8) | MIXED | 20 | 10% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | – | 20/0%/0% |
| trade:P3: Alchemists ↔ P4: Gardener | MIXED | 18 | 11% | 0% | 0% | – | – | – | 3.9 | 50% (0/1) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Fan Club ↔ P3: Busker | MIXED | 33 | 15% | 0% | 0% | – | – | – | 23.2 | 40% (0/2) | – | 12/0%/0% | 21/0%/0% |
| choose member:P3's Stunt Double (5) | MIXED | 23 | 17% | 0% | 0% | – | – | – | 12.9 | 75% (0/3) | – | 2/0%/0% | 21/0%/0% |
| trade:P1: Window Dressers ↔ P2: Critic | MIXED | 23 | 13% | 0% | 0% | – | – | – | 15.5 | 33% (0/1) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Panel ↔ P1: Volunteer | MIXED | 17 | 12% | 0% | 0% | – | – | – | 16.7 | 50% (0/1) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P3: Deprogrammers | MIXED | 30 | 10% | 0% | 0% | – | – | – | 23.4 | 0% (0/0) | – | 14/0%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ P2: Volunteer | MIXED | 20 | 15% | 0% | 0% | – | – | – | 15.6 | 33% (0/1) | – | 7/0%/0% | 13/0%/0% |
| choose member:P4's Shopkeeper (4) | FILLER | 21 | 19% | 5% | 5% | 100% | 100% | 100% | 14.9 | 0% (0/0) | – | 1/0%/100% | 20/5%/0% |
| choose member:P2's Kingpin (4) | FILLER | 44 | 18% | 2% | 5% | 100% | 0% | 100% | 7.9 | 38% (1/2) | – | 8/13%/0% | 36/0%/6% |
| trade:P4: Busker ↔ P2: Accomplice | FILLER | 24 | 13% | 4% | 4% | 0% | 0% | 100% | 19.1 | 33% (0/1) | – | 16/6%/6% | 8/0%/0% |
| choose member:P4's Kingpin (4) | FILLER | 52 | 19% | 8% | 4% | 25% | 0% | 100% | 8.4 | 20% (1/1) | – | 2/0%/0% | 50/8%/4% |
| choose member:P2's Chronicler (5) | FILLER | 27 | 22% | 7% | 4% | 50% | 50% | 100% | 3.8 | 20% (0/1) | – | 1/0%/0% | 26/8%/4% |
| choose member:P1's Busker (4) | FILLER + MISJUDGED | 55 | 18% | 5% | 4% | 33% | 33% | 100% | 9.2 | 67% (2/4) | – | 4/25%/0% | 51/4%/4% |
| choose member:P2's Stunt Double (5) | FILLER | 33 | 12% | 3% | 3% | 0% | 0% | 100% | 5.2 | 25% (1/0) | – | 1/0%/0% | 32/3%/3% |
| choose member:P2's Grifter (8) | FILLER + MISJUDGED | 48 | 17% | 8% | 2% | 25% | 0% | 100% | 19.3 | 50% (2/2) | – | 4/50%/25% | 44/5%/0% |
| choose member:P4's Dabblers (3) | FILLER + MISJUDGED | 51 | 16% | 12% | 2% | 33% | 0% | 100% | 15.9 | 63% (4/1) | – | 4/25%/0% | 47/11%/2% |
| choose member:P1's Roadie (3) | FILLER | 51 | 18% | 8% | 2% | 75% | 50% | 100% | 13.4 | 57% (1/3) | – | 4/0%/0% | 47/9%/2% |
| trade:P3: Con Men ↔ Shop: Old Maid | FILLER | 52 | 17% | 10% | 2% | 60% | 0% | 60% | 19.5 | 22% (2/0) | – | 13/31%/0% | 39/3%/3% |
| choose member:P3's Line Cutters (2) | FILLER | 55 | 7% | 4% | 2% | 50% | 0% | 100% | 12.2 | 50% (2/0) | – | 5/0%/0% | 50/4%/2% |
| choose member:P3's Kingpin (4) | FILLER | 56 | 9% | 4% | 2% | 0% | 0% | 100% | 8.8 | 40% (2/0) | – | 5/0%/0% | 51/4%/2% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | FILLER | 65 | 3% | 3% | 2% | 50% | 0% | 50% | – | 0% (0/0) | – | 29/7%/3% | 36/0%/0% |
| choose member:P2's Line Cutters (2) | FILLER | 85 | 6% | 4% | 1% | 33% | 0% | 100% | 4.6 | 40% (2/0) | – | 12/8%/0% | 73/3%/1% |
| choose member:P3's Dabblers (3) | FILLER + MISJUDGED | 90 | 12% | 6% | 1% | 60% | 0% | 100% | 12.4 | 73% (5/3) | – | 8/13%/0% | 82/5%/1% |
| choose member:P3's Extortionist (7) | FILLER | 33 | 18% | 9% | 0% | 67% | 0% | 100% | 8.6 | 33% (2/0) | – | – | 33/9%/0% |
| choose member:P4's Panel (7) | FILLER | 34 | 18% | 9% | 0% | 67% | 0% | 100% | 15.8 | 33% (2/0) | – | 4/0%/0% | 30/10%/0% |
| choose member:P3's Window Dressers (4) | FILLER | 23 | 17% | 9% | 0% | 50% | 0% | 100% | 18.2 | 25% (0/1) | – | 1/0%/0% | 22/9%/0% |
| choose member:P1's Panel (7) | FILLER | 24 | 25% | 8% | 0% | 100% | 0% | 100% | 13.6 | 67% (1/3) | – | 1/0%/0% | 23/9%/0% |
| choose member:P3's Panel (7) | FILLER | 26 | 31% | 8% | 0% | 100% | 50% | 100% | 3.6 | 14% (1/0) | – | 1/100%/0% | 25/4%/0% |
| choose member:P3's Grifter (8) | FILLER | 27 | 19% | 7% | 0% | 0% | 0% | 100% | 3.6 | 40% (1/1) | – | 1/0%/0% | 26/8%/0% |
| choose member:P4's Loyalists (5) | FILLER | 29 | 21% | 7% | 0% | 0% | 0% | 100% | 14.6 | 33% (2/0) | – | 3/0%/0% | 26/8%/0% |
| choose member:P4's Extortionist (7) | FILLER | 29 | 14% | 7% | 0% | 50% | 0% | 100% | 13.3 | 50% (2/0) | – | – | 29/7%/0% |
| choose member:P3's Recluse (4) | FILLER | 15 | 20% | 7% | 0% | 0% | 0% | 100% | 11.0 | 33% (1/0) | – | – | 15/7%/0% |
| choose member:P2's Double Agent (8) | FILLER | 15 | 7% | 7% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | – | 15/7%/0% |
| choose member:Volunteer | FILLER | 15 | 13% | 7% | 0% | 0% | 100% | 100% | 5.0 | 0% (0/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Recluse | FILLER | 16 | 6% | 6% | 0% | 0% | 0% | 100% | – | 0% (0/0) | – | 6/17%/0% | 10/0%/0% |
| trade:P1: Accomplice ↔ P2: Cutpurse | FILLER | 32 | 6% | 6% | 0% | 100% | 0% | 50% | – | 50% (1/0) | – | 13/8%/0% | 19/5%/0% |
| choose member:Recruit Bonus | FILLER | 16 | 6% | 6% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 5/20%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Gardener | FILLER | 16 | 6% | 6% | 0% | 100% | 100% | 100% | – | – (0/0) | – | 7/14%/0% | 9/0%/0% |
| trade:P1: Regular ↔ P3: Deprogrammers | FILLER | 16 | 6% | 6% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 8/13%/0% | 8/0%/0% |
| trade:P1: Dabblers ↔ P2: Drifters | FILLER | 16 | 6% | 6% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 5/20%/0% | 11/0%/0% |
| choose member:P1's Extortionist (7) | FILLER | 34 | 12% | 6% | 0% | 100% | 0% | 100% | 11.5 | 25% (1/0) | – | 1/100%/0% | 33/3%/0% |
| trade:P4: Loyalists ↔ P3: Dabblers | FILLER | 35 | 14% | 6% | 0% | 50% | 0% | 50% | 18.3 | 0% (0/0) | – | 10/10%/0% | 25/4%/0% |
| choose member:P4's Roadie (3) | FILLER | 35 | 11% | 6% | 0% | 100% | 0% | 100% | 13.9 | 75% (2/1) | – | 4/0%/0% | 31/6%/0% |
| choose member:P2's Extortionist (7) | FILLER | 37 | 30% | 5% | 0% | 100% | 0% | 100% | 14.0 | 45% (2/3) | – | 3/0%/0% | 34/6%/0% |
| trade:P1: Con Men ↔ P3: Loyalists | FILLER | 19 | 11% | 5% | 0% | 100% | 100% | 100% | 30.0 | 0% (0/0) | – | 4/25%/0% | 15/0%/0% |
| choose member:P4's Recluse (4) | FILLER | 20 | 10% | 5% | 0% | 0% | 0% | 100% | 5.5 | 100% (1/1) | – | 1/0%/0% | 19/5%/0% |
| trade:P1: Roadie ↔ Shop: Muse | FILLER | 20 | 5% | 5% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 12/8%/0% | 8/0%/0% |
| trade:P2: Early Birds ↔ P1: Line Cutters | FILLER | 20 | 5% | 5% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 6/17%/0% | 14/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Recruit Bonus | FILLER | 21 | 5% | 5% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 12/8%/0% | 9/0%/0% |
| choose member:P1's Double Agent (8) | FILLER | 22 | 9% | 5% | 0% | 100% | 0% | 100% | 17.0 | 50% (1/0) | – | – | 22/5%/0% |
| trade:P4: Con Men ↔ Shop: Alchemists | FILLER | 22 | 5% | 5% | 0% | 0% | 0% | 100% | – | 0% (0/0) | – | 4/25%/0% | 18/0%/0% |
| choose member:P2's Loyalists (5) | FILLER | 22 | 14% | 5% | 0% | 100% | 0% | 100% | 7.4 | 33% (1/0) | – | – | 22/5%/0% |
| choose member:P1's Doppelganger (5) | FILLER | 24 | 4% | 4% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 3/0%/0% | 21/5%/0% |
| trade:P4: Gardener ↔ P2: Volunteer | FILLER | 24 | 4% | 4% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 14/7%/0% | 10/0%/0% |
| choose member:P4's Double Agent (8) | FILLER | 26 | 12% | 4% | 0% | 100% | 0% | 100% | 21.0 | 33% (1/0) | – | – | 26/4%/0% |
| trade:P1: Accomplice ↔ P4: Volunteer | FILLER | 27 | 4% | 4% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 6/17%/0% | 21/0%/0% |
| trade:P4: Accomplice ↔ P2: Line Cutters | FILLER | 28 | 4% | 4% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 14/7%/0% | 14/0%/0% |
| choose member:P2's Busker (4) | FILLER | 32 | 13% | 3% | 0% | 0% | 0% | 100% | 14.7 | 50% (1/1) | – | 2/0%/0% | 30/3%/0% |
| trade:P1: Scouts ↔ P2: Deprogrammers | FILLER | 32 | 3% | 3% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 19/5%/0% | 13/0%/0% |
| choose member:P1's Stunt Double (5) | FILLER | 33 | 18% | 3% | 0% | 100% | 100% | 100% | 19.1 | 40% (0/2) | – | 2/0%/0% | 31/3%/0% |
| choose member:P4's Chronicler (5) | FILLER | 37 | 19% | 3% | 0% | 100% | 0% | 100% | 10.7 | 57% (0/4) | – | 1/0%/0% | 36/3%/0% |
| choose member:P3's Alchemists (5) | FILLER | 42 | 12% | 2% | 0% | 0% | 0% | 100% | 15.1 | 20% (1/0) | – | 1/0%/0% | 41/2%/0% |
| choose member:P3's Roadie (3) | FILLER | 44 | 11% | 2% | 0% | 100% | 100% | 100% | 10.9 | 25% (0/1) | – | 5/0%/0% | 39/3%/0% |
| trade:P1: Alchemists ↔ Shop: Cashier | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.2 | 100% (0/1) | – | 2/0%/0% | 13/0%/8% |
| trade:P4: Con Men ↔ P2: Fan Club | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.0 | 0% (0/0) | – | 1/0%/0% | 14/0%/7% |
| trade:P3: Stunt Double ↔ P1: Agents | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.3 | 0% (0/0) | – | 8/0%/13% | 7/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Early Birds | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.5 | 0% (0/0) | – | 6/0%/17% | 9/0%/0% |
| trade:P2: Regular ↔ P3: Dabblers | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.3 | 0% (0/0) | – | 5/0%/20% | 10/0%/0% |
| trade:P1: Loyalists ↔ P4: Polisher | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.4 | 100% (0/1) | – | 5/0%/20% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Courier | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.5 | 0% (0/0) | – | 4/0%/0% | 12/0%/8% |
| trade:P3: Doppelganger ↔ P1: Triplets | DEAD | 16 | 6% | 0% | 6% | – | – | – | 1.2 | 100% (0/1) | – | 5/0%/20% | 11/0%/0% |
| trade:P2: Alchemists ↔ P4: Party Crasher | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.9 | 0% (0/0) | – | 2/0%/0% | 14/0%/7% |
| trade:P2: Extortionist ↔ P4: Con Men | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.9 | 0% (0/0) | – | 3/0%/33% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Deprogrammers | DEAD | 17 | 6% | 0% | 6% | – | – | – | 1.3 | 0% (0/0) | – | 8/0%/0% | 9/0%/11% |
| trade:P3: Window Dressers ↔ Shop: Regular | DEAD | 17 | 6% | 0% | 6% | – | – | – | 1.0 | 100% (0/1) | – | 8/0%/0% | 9/0%/11% |
| trade:P3: Triplets ↔ P2: Deprogrammers | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 5/0%/20% | 14/0%/0% |
| trade:P3: Alchemists ↔ P2: Accomplice | DEAD | 19 | 5% | 0% | 5% | – | – | – | 1.0 | 0% (0/0) | – | 4/0%/25% | 15/0%/0% |
| trade:P4: Busker ↔ Shop: Regular | DEAD | 19 | 5% | 0% | 5% | – | – | – | 1.2 | 0% (0/0) | – | 10/0%/10% | 9/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Deprogrammers | DEAD | 21 | 5% | 0% | 5% | – | – | – | 1.2 | 0% (0/0) | – | 13/0%/0% | 8/0%/13% |
| trade:P2: Window Shopper ↔ Shop: Old Maid | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/25% | 18/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Deprogrammers | DEAD | 22 | 9% | 0% | 5% | – | – | – | 3.9 | 0% (0/0) | – | 10/0%/0% | 12/0%/8% |
| trade:P2: Roadie ↔ P1: Deprogrammers | DEAD | 22 | 9% | 0% | 5% | – | – | – | 17.3 | 0% (0/0) | – | 10/0%/0% | 12/0%/8% |
| trade:P1: Scouts ↔ P3: Accomplice | DEAD | 23 | 4% | 0% | 4% | – | – | – | 0.7 | 100% (0/1) | – | 12/0%/8% | 11/0%/0% |
| trade:P4: Party Crasher ↔ P1: Deprogrammers | DEAD | 24 | 4% | 0% | 4% | – | – | – | 0.5 | 100% (0/1) | – | 1/0%/0% | 23/0%/4% |
| trade:P4: Toastmaster ↔ P3: Dabblers | DEAD | 24 | 4% | 0% | 4% | – | – | – | 0.7 | 0% (0/0) | – | 10/0%/0% | 14/0%/7% |
| trade:P3: Roadie ↔ P2: Deprogrammers | DEAD | 25 | 8% | 0% | 4% | – | – | – | 6.3 | 0% (0/0) | – | 17/0%/6% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Scouts | DEAD | 25 | 4% | 0% | 4% | – | – | – | 0.1 | 0% (0/0) | – | 11/0%/0% | 14/0%/7% |
| trade:P2: Party Crasher ↔ P4: Busker | DEAD | 25 | 4% | 0% | 4% | – | – | – | 1.3 | 0% (0/0) | – | 9/0%/11% | 16/0%/0% |
| trade:P3: Scouts ↔ P2: Volunteer | DEAD | 26 | 8% | 0% | 4% | – | – | – | 2.3 | 100% (0/2) | – | 10/0%/10% | 16/0%/0% |
| trade:P3: Accomplice ↔ P1: Deprogrammers | DEAD | 26 | 8% | 0% | 4% | – | – | – | 4.8 | 0% (0/0) | – | 10/0%/10% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 26 | 8% | 0% | 4% | – | – | – | 7.8 | 0% (0/0) | – | 7/0%/14% | 19/0%/0% |
| trade:P2: Fan Club ↔ Shop: Old Maid | DEAD | 26 | 4% | 0% | 4% | – | – | – | 1.0 | 0% (0/0) | – | 9/0%/0% | 17/0%/6% |
| trade:P1: Alchemists ↔ P3: Accomplice | DEAD | 28 | 7% | 0% | 4% | – | – | – | 5.6 | 0% (0/0) | – | 5/0%/20% | 23/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Roadie | DEAD | 29 | 3% | 0% | 3% | – | – | – | 0.2 | 0% (0/0) | – | 12/0%/0% | 17/0%/6% |
| choose member:P3's Trendsetters (4) | DEAD | 31 | 6% | 0% | 3% | – | – | – | 8.4 | 0% (0/0) | – | – | 31/0%/3% |
| trade:P1: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 32 | 6% | 0% | 3% | – | – | – | 5.8 | 50% (0/1) | – | 1/0%/0% | 31/0%/3% |
| trade:P2: Busker ↔ P4: Agents | DEAD | 35 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 20/0%/0% | 15/7%/7% |
| trade:P4: Scouts ↔ P3: Roadie | DEAD | 37 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 27/4%/4% | 10/0%/0% |
| trade:P3: Triplets ↔ P2: Volunteer | DEAD | 38 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/11%/11% | 29/0%/0% |
| trade:P1: Scouts ↔ P3: Dabblers | DEAD | 39 | 5% | 3% | 3% | 0% | 0% | 0% | 10.8 | 50% (1/0) | – | 20/5%/5% | 19/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 39 | 5% | 3% | 3% | 0% | 0% | 0% | 2.2 | 50% (1/0) | – | 14/0%/0% | 25/4%/4% |
| trade:P3: Roadie ↔ P4: Scouts | DEAD | 41 | 2% | 0% | 2% | – | – | – | 0.4 | 100% (0/1) | – | 28/0%/4% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Roadie | DEAD | 45 | 4% | 0% | 2% | – | – | – | 1.3 | 0% (0/0) | – | 14/0%/0% | 31/0%/3% |
| choose member:P1's Sticky Fingers (4) | DEAD | 48 | 2% | 2% | 2% | 0% | 0% | 100% | – | 100% (1/0) | – | 3/0%/0% | 45/2%/2% |
| trade:P2: Recruit Bonus ↔ P4: Scouts | DEAD | 48 | 4% | 2% | 2% | 0% | 0% | 0% | 1.3 | 50% (0/1) | – | 23/4%/4% | 25/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Dabblers | DEAD | 48 | 2% | 0% | 2% | – | – | – | 0.0 | 0% (0/0) | – | 13/0%/8% | 35/0%/0% |
| choose member:P1's Kingpin (4) | DEAD | 50 | 8% | 2% | 2% | 100% | 0% | 100% | 3.4 | 50% (1/1) | – | 6/0%/0% | 44/2%/2% |
| trade:P4: Deprogrammers ↔ P1: Volunteer | DEAD | 51 | 10% | 2% | 2% | 0% | 0% | 0% | 13.5 | 0% (0/0) | – | 32/3%/3% | 19/0%/0% |
| trade:P3: Alchemists ↔ Shop: Old Maid | DEAD | 57 | 4% | 0% | 2% | – | – | – | 7.3 | 0% (0/0) | – | 16/0%/6% | 41/0%/0% |
| trade:P2: Line Cutters ↔ P3: Volunteer | DEAD | 58 | 5% | 2% | 2% | 0% | 0% | 0% | 8.3 | 33% (1/0) | – | 35/0%/0% | 23/4%/4% |
| trade:P2: Dabblers ↔ P1: Deprogrammers | DEAD | 61 | 3% | 0% | 2% | – | – | – | 9.1 | 0% (0/0) | – | 27/0%/4% | 34/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Volunteer | DEAD | 67 | 6% | 3% | 1% | 100% | 0% | 50% | 9.5 | 25% (1/0) | – | 28/4%/4% | 39/3%/0% |
| choose member:P1's Dabblers (3) | DEAD | 68 | 7% | 3% | 1% | 50% | 0% | 100% | 2.5 | 20% (1/0) | – | 6/0%/0% | 62/3%/2% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 34 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 26/0%/0% |
| trade:P2: Busker ↔ P3: Deprogrammers | DEAD | 34 | 6% | 3% | 0% | 0% | 0% | 0% | 10.9 | 0% (0/0) | – | 15/0%/0% | 19/5%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | DEAD | 34 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 21/5%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P2: Line Cutters | DEAD | 34 | 6% | 3% | 0% | 0% | 0% | 0% | 4.4 | 50% (1/0) | – | 13/0%/0% | 21/5%/0% |
| trade:P1: Line Cutters ↔ P4: Volunteer | DEAD | 69 | 3% | 3% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 31/3%/0% | 38/3%/0% |
| trade:P3: Loyalists ↔ Shop: Old Maid | DEAD | 35 | 6% | 3% | 0% | 100% | 0% | 0% | 3.3 | 50% (0/1) | – | 5/0%/0% | 30/3%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Cashier | DEAD | 35 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 17/6%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ P1: Deprogrammers | DEAD | 35 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 14/7%/0% | 21/0%/0% |
| trade:P1: Dabblers ↔ P2: Cutpurse | DEAD | 35 | 3% | 3% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 15/7%/0% | 20/0%/0% |
| trade:P2: Loyalists ↔ P3: Scouts | DEAD | 36 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 32/3%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | DEAD | 37 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 27/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | DEAD | 38 | 8% | 3% | 0% | 100% | 0% | 100% | 13.0 | 0% (0/0) | – | 14/7%/0% | 24/0%/0% |
| trade:P4: Line Cutters ↔ P1: Volunteer | DEAD | 39 | 3% | 3% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 16/6%/0% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Dabblers | DEAD | 39 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 15/7%/0% | 24/0%/0% |
| trade:P4: Loyalists ↔ P3: Recruit Bonus | DEAD | 39 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 35/3%/0% |
| trade:P1: Deprogrammers ↔ Shop: Triplets | DEAD | 40 | 5% | 3% | 0% | 100% | 0% | 0% | 17.6 | 50% (1/0) | – | 22/5%/0% | 18/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Line Cutters | DEAD | 41 | 5% | 2% | 0% | 0% | 0% | 0% | 2.4 | 0% (0/0) | – | 22/5%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ Shop: Triplets | DEAD | 41 | 2% | 2% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 21/5%/0% | 20/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Line Cutters | DEAD | 41 | 2% | 2% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 20/0%/0% | 21/5%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 43 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 17/6%/0% | 26/0%/0% |
| choose member:P1's Deprogrammers (3) | DEAD | 43 | 7% | 2% | 0% | 0% | 0% | 100% | 22.9 | 33% (1/0) | – | 6/17%/0% | 37/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 43 | 5% | 2% | 0% | 0% | 0% | 0% | 35.0 | 0% (0/0) | – | 16/6%/0% | 27/0%/0% |
| trade:P3: Line Cutters ↔ P4: Volunteer | DEAD | 47 | 2% | 2% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 18/0%/0% | 29/3%/0% |
| trade:P1: Dabblers ↔ P3: Volunteer | DEAD | 47 | 9% | 2% | 0% | 100% | 0% | 0% | 6.7 | 25% (0/1) | – | 20/0%/0% | 27/4%/0% |
| trade:P3: Deprogrammers ↔ P2: Scouts | DEAD | 48 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 19/5%/0% | 29/0%/0% |
| trade:P2: Dabblers ↔ Shop: Old Maid | DEAD | 50 | 2% | 2% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 32/3%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ Shop: Old Maid | DEAD | 50 | 2% | 2% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 42/0%/0% |
| choose member:P2's Dabblers (3) | DEAD | 53 | 6% | 2% | 0% | 100% | 0% | 100% | 2.7 | 33% (1/0) | – | 3/0%/0% | 50/2%/0% |
| trade:P1: Dabblers ↔ P3: Deprogrammers | DEAD | 53 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 15/0%/0% | 38/3%/0% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | DEAD | 54 | 2% | 2% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 21/0%/0% | 33/3%/0% |
| trade:P4: Deprogrammers ↔ P2: Line Cutters | DEAD | 55 | 7% | 2% | 0% | 100% | 0% | 0% | 5.1 | 0% (0/0) | – | 32/0%/0% | 23/4%/0% |
| choose member:P1's Scouts (3) | DEAD | 64 | 2% | 2% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 3/0%/0% | 61/2%/0% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 64 | 2% | 2% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 27/0%/0% | 37/3%/0% |
| trade:P3: Scouts ↔ P4: Volunteer | DEAD | 67 | 3% | 1% | 0% | 100% | 0% | 0% | 20.3 | 50% (1/0) | – | 33/3%/0% | 34/0%/0% |
| choose member:P2's Accomplice (3) | DEAD | 80 | 3% | 1% | 0% | 100% | 0% | 100% | 24.0 | 50% (1/0) | – | 7/0%/0% | 73/1%/0% |
| choose member:P2's Agents (3) | DEAD | 32 | 6% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 3/0%/0% | 29/0%/0% |
| choose member:P4's Line Cutters (2) | DEAD | 79 | 3% | 0% | 0% | – | – | – | 5.0 | 50% (0/1) | – | 8/0%/0% | 71/0%/0% |
| choose member:P1's Window Shopper (5) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| choose member:P3's Cutpurse (3) | DEAD | 74 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 73/0%/0% |
| choose member:P1's Accomplice (3) | DEAD | 68 | 1% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 4/0%/0% | 64/0%/0% |
| choose member:P1's Desperado (5) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| choose member:P2's Cutpurse (3) | DEAD | 65 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 60/0%/0% |
| choose member:P2's Scouts (3) | DEAD | 58 | 2% | 0% | 0% | – | – | – | 2.5 | 0% (0/0) | – | 6/0%/0% | 52/0%/0% |
| choose member:P2's Window Shopper (5) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P4's Critic (3) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| choose member:P3's Polisher (3) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Accomplice ↔ P3: Dabblers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P2: Accomplice ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 6/0%/0% |
| trade:P2: Accomplice ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P2: Kingpin ↔ P3: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 12/0%/0% |
| trade:P2: Kingpin ↔ P4: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 5/0%/0% |
| trade:P3: Dabblers ↔ P2: Accomplice | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P3: Dabblers ↔ P4: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 31/0%/0% |
| trade:P3: Dabblers ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P4: Scouts | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 25/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Triplets | DEAD | 44 | 5% | 0% | 0% | – | – | – | 38.4 | 50% (0/1) | – | 20/0%/0% | 24/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Accomplice | DEAD | 24 | 4% | 0% | 0% | – | – | – | 20.2 | 0% (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Drifters | DEAD | 24 | 4% | 0% | 0% | – | – | – | 2.0 | 100% (0/1) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 7/0%/0% |
| trade:P3: Party Crasher ↔ P4: Cutpurse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P3: Party Crasher ↔ P4: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 22/0%/0% |
| trade:P4: Cutpurse ↔ P2: Accomplice | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P4: Cutpurse ↔ P3: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Line Cutters ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Drifters ↔ Shop: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P4: Drifters ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Drifters ↔ P3: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.7 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ Shop: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ Shop: Triplets | DEAD | 35 | 6% | 0% | 0% | – | – | – | 9.4 | 0% (0/0) | – | 20/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P2: Kingpin | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Scouts ↔ P3: Dabblers | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 21/0%/0% |
| trade:P4: Scouts ↔ P3: Deprogrammers | DEAD | 52 | 2% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 22/0%/0% | 30/0%/0% |
| trade:P4: Go-Between ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Go-Between ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| pass:Don’t swap | DEAD | 1592 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 796/0%/0% | 796/0%/0% |
| trade:P1: Cutpurse ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Cutpurse ↔ P2: Accomplice | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P1: Cutpurse ↔ P4: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 12/0%/0% |
| trade:P1: Cutpurse ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Accomplice ↔ P1: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P1: Cutpurse | DEAD | 23 | 9% | 0% | 0% | – | – | – | 5.8 | 0% (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P4: Dyer ↔ Shop: Harmonist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 66 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 61/0%/0% |
| choose member:P1's Recruit Bonus (3) | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 27/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Polisher | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P2: Accomplice ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P3: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 24/0%/0% |
| trade:P2: Kingpin ↔ Shop: Sticky Fingers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.1 | 100% (0/1) | – | 12/0%/0% | 7/0%/0% |
| trade:P2: Kingpin ↔ P3: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Dabblers ↔ P1: Recruit Bonus | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 31/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Sticky Fingers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 20/0%/0% |
| trade:P3: Party Crasher ↔ P1: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P3: Polisher ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ Shop: Volunteer | DEAD | 21 | 5% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P1: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Triplets ↔ P2: Accomplice | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P4: Loyalists ↔ Shop: Sticky Fingers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ Shop: Desperado | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P4: Loyalists ↔ P1: Recruit Bonus | DEAD | 25 | 4% | 0% | 0% | – | – | – | 14.8 | 0% (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P2: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Party Crasher | DEAD | 16 | 6% | 0% | 0% | – | – | – | 1.7 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Triplets | DEAD | 25 | 4% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P2: Dyer ↔ Shop: Customs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Kingpin ↔ Shop: Sticky Fingers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 17/0%/0% |
| trade:P3: Kingpin ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Sticky Fingers ↔ P4: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Scouts ↔ P4: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Big Tent | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P4: Con Men ↔ Shop: Patriarch | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 27/0%/0% |
| trade:P4: Con Men ↔ Shop: Gift Wrapper | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P4: Con Men ↔ Shop: Philanthropists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ P3: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P2: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 73 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 69/0%/0% |
| trade:P2: Scouts ↔ P1: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P2: Polisher ↔ P1: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Dyer ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Con Men ↔ Shop: Big Tent | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P2: Con Men ↔ Shop: Patriarch | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 7/0%/0% |
| trade:P2: Con Men ↔ Shop: Gift Wrapper | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P2: Con Men ↔ Shop: Philanthropists | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Con Men ↔ Shop: Old Maid | DEAD | 39 | 5% | 0% | 0% | – | – | – | 15.4 | 50% (0/1) | – | 11/0%/0% | 28/0%/0% |
| trade:P2: Con Men ↔ P3: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P4: Dabblers ↔ Shop: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 14/0%/0% |
| choose member:P2's Polisher (3) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| choose member:P3's Drifters (3) | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 24/0%/0% |
| choose member:P3's Triplets (3) | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 30/0%/0% |
| trade:P1: Busker ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 24/0%/0% |
| trade:P1: Busker ↔ Shop: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ Shop: Muse | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 26/0%/0% |
| trade:P1: Scouts ↔ P2: Line Cutters | DEAD | 53 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 32/0%/0% |
| trade:P1: Scouts ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P4: Polisher | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ Shop: Old Maid | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Raiders | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P1: Scouts ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Anarchist ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Gardener ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Line Cutters ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Line Cutters ↔ P3: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P4: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Stunt Double ↔ P3: Agents | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P2: Stunt Double ↔ P3: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Old Maid | DEAD | 24 | 4% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Con Men ↔ Shop: Exporters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Con Men ↔ Shop: Raiders | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P2: Con Men ↔ Shop: Extra Hand | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Recluse | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Party Crasher ↔ P4: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ Shop: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Polisher ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: HR ↔ Shop: Extra Hand | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 25/0%/0% |
| trade:P4: Brokers ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Bouncers ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Bouncers ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Anarchist ↔ Shop: Courier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Con Men ↔ Shop: Courier | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P4: Con Men ↔ Shop: Hangers-On | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Con Men ↔ Shop: Extra Hand | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Con Men ↔ Shop: Hot Streak | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P2: Timekeepers ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ Shop: Desperado | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ Shop: Cashier | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P4: Shopkeeper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Scouts ↔ P4: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Cashier | DEAD | 29 | 3% | 0% | 0% | – | – | – | 31.3 | 0% (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P4: Martyrs ↔ Shop: Cashier | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P4: Martyrs ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Clockmakers ↔ Shop: Old Maid | DEAD | 21 | 10% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Martyrs ↔ P4: Shopkeeper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P4: Early Birds | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ Shop: Old Maid | DEAD | 39 | 3% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 19/0%/0% | 20/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P4: Early Birds ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P4: Anarchist ↔ Shop: Old Maid | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ P2: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Early Birds ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Martyrs ↔ P4: Shopkeeper | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Patriarch ↔ Shop: Sticky Fingers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Patriarch ↔ P3: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P2: Dabblers ↔ Shop: Triplets | DEAD | 47 | 2% | 0% | 0% | – | – | – | 25.3 | 0% (0/0) | – | 13/0%/0% | 34/0%/0% |
| trade:P2: Dabblers ↔ Shop: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P3: Loyalists ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 24.2 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Loyalists ↔ P2: Dabblers | DEAD | 35 | 3% | 0% | 0% | – | – | – | 22.4 | 0% (0/0) | – | 8/0%/0% | 27/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Triplets | DEAD | 20 | 5% | 0% | 0% | – | – | – | 6.2 | 0% (0/0) | – | 15/0%/0% | 5/0%/0% |
| trade:P4: Early Birds ↔ Shop: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Early Birds ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P3: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ Shop: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Volunteer ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Volunteer ↔ P3: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 13/0%/0% |
| choose member:P2's Volunteer (1) | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 23/0%/0% |
| choose member:P4's Early Birds (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| choose member:P4's Cashier (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Triplets | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 27/0%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 47 | 2% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 17/0%/0% | 30/0%/0% |
| trade:P2: Martyrs ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Martyrs ↔ P3: Recluse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Martyrs ↔ P4: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P3: Scouts ↔ Shop: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ Shop: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P1: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P3: Scouts ↔ P4: Deprogrammers | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 25/0%/0% |
| trade:P3: Recluse ↔ P1: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P3: Recluse ↔ P2: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Recluse ↔ P4: Deprogrammers | DEAD | 27 | 4% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | DEAD | 37 | 3% | 0% | 0% | – | – | – | 41.0 | 0% (0/0) | – | 23/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Toastmaster | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Early Birds | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 6/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 44 | 2% | 0% | 0% | – | – | – | 19.3 | 0% (0/0) | – | 16/0%/0% | 28/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Scouts | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 24/0%/0% |
| trade:P4: HR ↔ Shop: Mentor & Protégés | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Recluse ↔ P4: Shopkeeper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: HR ↔ Shop: Mentor & Protégés | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 26/0%/0% |
| trade:P2: Scouts ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ Shop: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P1: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P3: Panel ↔ Shop: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P2: Martyrs ↔ P3: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Patriarch ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Recluse ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P3: HR ↔ Shop: Debt Collectors | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P3: HR ↔ Shop: Smooth Talkers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Panel ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ Shop: Alchemists | DEAD | 25 | 4% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Triplets ↔ P4: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P4: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P3: Con Men ↔ Shop: Alchemists | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 25/0%/0% |
| trade:P3: Con Men ↔ P2: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Line Cutters ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Line Cutters | DEAD | 55 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 35/0%/0% |
| trade:P1: Timekeepers ↔ P2: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P2: Shift Crew ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P2: Shift Crew ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Shift Crew ↔ P3: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Recluse ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Panel ↔ Shop: Gift Wrapper | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 23/0%/0% |
| trade:P3: Scouts ↔ P2: Line Cutters | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 15/0%/0% |
| trade:P3: Early Birds ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Triplets ↔ P2: Line Cutters | DEAD | 44 | 2% | 0% | 0% | – | – | – | 3.3 | 0% (0/0) | – | 16/0%/0% | 28/0%/0% |
| trade:P3: Con Men ↔ Shop: Gift Wrapper | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 26/0%/0% |
| trade:P1: Triplets ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ Shop: Raiders | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ Shop: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ Shop: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P2: Toastmaster | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Toastmaster ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P4: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P4: Toastmaster | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Toastmaster ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P4: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ Shop: Cashier | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 24/0%/0% |
| trade:P1: Dabblers ↔ Shop: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ Shop: Loyalists | DEAD | 19 | 5% | 0% | 0% | – | – | – | 28.9 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P4: Volunteer | DEAD | 50 | 4% | 0% | 0% | – | – | – | 4.5 | 0% (0/0) | – | 17/0%/0% | 33/0%/0% |
| trade:P1: Dabblers ↔ P4: Line Cutters | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 19/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Triplets | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 26/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Toastmaster | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ Shop: Cashier | DEAD | 30 | 3% | 0% | 0% | – | – | – | 18.9 | 0% (0/0) | – | 14/0%/0% | 16/0%/0% |
| trade:P2: Triplets ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Triplets ↔ P1: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 26/0%/0% |
| trade:P2: Triplets ↔ P4: Line Cutters | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 29/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Cashier | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 17/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Old Money | DEAD | 16 | 6% | 0% | 0% | – | – | – | 17.3 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P1: Dabblers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P1: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Party Crasher ↔ P4: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P3: Recluse ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Recluse ↔ P2: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Recluse ↔ P2: Shopkeeper | DEAD | 15 | 7% | 0% | 0% | – | – | – | 24.5 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Window Dressers ↔ P2: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Window Dressers ↔ P4: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 29.8 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Toastmaster ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Volunteer ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Volunteer ↔ P1: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Line Cutters ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Line Cutters ↔ P2: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Patriarch ↔ Shop: Loyalists | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 27/0%/0% |
| trade:P4: Alchemists ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Alchemists ↔ Shop: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P4: Alchemists ↔ P2: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P4: Deprogrammers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 16/0%/0% |
| trade:P2: Triplets ↔ P1: Volunteer | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 23/0%/0% |
| trade:P2: Triplets ↔ P4: Deprogrammers | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 31/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Triplets | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 30/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P2: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P4: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P4: Line Cutters | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 27/0%/0% |
| trade:P1: Scouts ↔ P4: Deprogrammers | DEAD | 60 | 2% | 0% | 0% | – | – | – | 3.1 | 100% (0/1) | – | 22/0%/0% | 38/0%/0% |
| trade:P2: Triplets ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Scouts | DEAD | 40 | 3% | 0% | 0% | – | – | – | 14.4 | 100% (0/1) | – | 20/0%/0% | 20/0%/0% |
| trade:P2: Panel ↔ Shop: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P2: Con Men ↔ Shop: Loyalists | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P2: Con Men ↔ P4: Alchemists | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 30/0%/0% |
| trade:P3: Recluse ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Party Crasher ↔ P1: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P3: Party Crasher ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Alchemists ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Scouts | DEAD | 53 | 2% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 19/0%/0% | 34/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Scouts | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 22/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Scouts | DEAD | 35 | 3% | 0% | 0% | – | – | – | 8.4 | 0% (0/0) | – | 18/0%/0% | 17/0%/0% |
| trade:P2: Volunteer ↔ P1: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 12/0%/0% |
| trade:P2: Volunteer ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Volunteer ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P2: Volunteer | DEAD | 32 | 6% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P4: Scouts ↔ P1: Recruit Bonus | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 19/0%/0% |
| choose member:P1's Party Crasher (4) | DEAD | 40 | 3% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 4/0%/0% | 36/0%/0% |
| choose member:P3's Desperado (5) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| choose member:P4's Scouts (3) | DEAD | 61 | 2% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | 5/0%/0% | 56/0%/0% |
| choose member:P4's Cutpurse (3) | DEAD | 75 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 65/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Cutpurse | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Cashier | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 17/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ P2: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P3: Dabblers | DEAD | 23 | 4% | 0% | 0% | – | – | – | 30.5 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P1: Party Crasher ↔ P3: Recluse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Party Crasher ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Party Crasher ↔ P4: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ Shop: Cashier | DEAD | 28 | 4% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P3: Recluse ↔ P1: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ Shop: Cashier | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Triplets ↔ P4: Scouts | DEAD | 51 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 40/0%/0% |
| trade:P3: Triplets ↔ P4: Cutpurse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ Shop: Cashier | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ P3: Triplets | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 37/0%/0% |
| trade:P4: Cutpurse ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P4: Cutpurse ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | DEAD | 33 | 3% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 5/0%/0% | 28/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P1: Panel ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Panel ↔ Shop: Old Maid | DEAD | 29 | 7% | 0% | 0% | – | – | – | 10.2 | 50% (0/1) | – | 2/0%/0% | 27/0%/0% |
| trade:P1: Panel ↔ Shop: Loyalists | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P2: Volunteer ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Accomplice ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ Shop: Old Maid | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 17/0%/0% |
| trade:P3: Dabblers ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Triplets ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ Shop: Loyalists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 100% (0/1) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Cashier | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 27/0%/0% |
| trade:P1: Scouts ↔ P2: Accomplice | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Triplets | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P2: Accomplice ↔ P1: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P1: Scouts | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P1: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Cutpurse | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.1 | 100% (0/1) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Cashier | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P2: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: High Society ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Cutpurse ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P2: Cutpurse ↔ P3: Triplets | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 25/0%/0% |
| trade:P2: Cashier ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P2: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Triplets ↔ P2: Cutpurse | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P3: Philanthropists ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Panel ↔ Shop: Old Maid | DEAD | 27 | 4% | 0% | 0% | – | – | – | 25.8 | 0% (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P4: Panel ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Kingpin ↔ P1: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P4: Kingpin ↔ P2: Cutpurse | DEAD | 26 | 4% | 0% | 0% | – | – | – | 3.5 | 100% (0/1) | – | 11/0%/0% | 15/0%/0% |
| choose member:P3's Scouts (3) | DEAD | 65 | 3% | 0% | 0% | – | – | – | 32.2 | 0% (0/0) | – | 5/0%/0% | 60/0%/0% |
| choose member:P4's Recruit Bonus (3) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P1: Kingpin ↔ P2: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 18/0%/0% |
| trade:P1: Kingpin ↔ P2: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Kingpin ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P3: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P3: Deprogrammers | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 20/0%/0% |
| trade:P2: Accomplice ↔ P3: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P2: Shift Crew ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P2: Accomplice | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P4: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P3: Volunteer ↔ P2: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P3: Volunteer ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ P2: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P4: Cutpurse ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Cutpurse ↔ P3: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Volunteer | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 15/0%/0% |
| trade:P1: Accomplice ↔ P4: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Accomplice ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Cutpurse ↔ P1: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Sticky Fingers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P1: Line Cutters ↔ P3: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P1: Line Cutters ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Line Cutters ↔ P3: Volunteer | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 16/0%/0% |
| trade:P1: Patriarch ↔ Shop: Gossip | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P1: Patriarch ↔ Shop: Party Crasher | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 27/0%/0% |
| trade:P1: Patriarch ↔ Shop: Desperado | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Extortionist ↔ Shop: Desperado | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P1: Line Cutters | DEAD | 55 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 35/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 15/0%/0% |
| trade:P3: Volunteer ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ Shop: Sticky Fingers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Cutpurse ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| choose member:P1's Line Cutters (2) | DEAD | 85 | 2% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/0% | 80/0%/0% |
| trade:P1: Accomplice ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Patriarch ↔ Shop: Old Maid | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 40/0%/0% |
| trade:P1: Patriarch ↔ Shop: Closer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P1: Patriarch ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Bouncers ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Bouncers ↔ P2: Shift Crew | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P1: Bouncers ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Shift Crew ↔ P1: Bouncers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Extortionist ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Philanthropists ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P3: Party Crasher ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P4: Kingpin ↔ Shop: Sticky Fingers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P1: Bouncers ↔ P2: Timekeepers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P2: Timekeepers ↔ P1: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P2: Timekeepers ↔ P1: Bouncers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P2: Timekeepers ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Timekeepers ↔ P3: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P1: Line Cutters | DEAD | 23 | 4% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P3: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 23/0%/0% |
| trade:P4: Party Crasher ↔ P3: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Patriarch ↔ Shop: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Panel ↔ Shop: Gossip | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Panel ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Panel ↔ Shop: Closer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Scouts | DEAD | 34 | 3% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 18/0%/0% |
| trade:P1: Alchemists ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ Shop: Desperado | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 24/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 40 | 3% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 13/0%/0% | 27/0%/0% |
| trade:P1: Alchemists ↔ Shop: Loyalists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Alchemists ↔ P3: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P3: Polisher ↔ P1: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P3: Accomplice ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Accomplice ↔ P4: Cutpurse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Cutpurse ↔ P1: Deprogrammers | DEAD | 23 | 9% | 0% | 0% | – | – | – | 12.6 | 0% (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P4: Cutpurse ↔ P3: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P3: Cutpurse ↔ P4: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Line Cutters ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P3: Cutpurse | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 23/0%/0% |
| trade:P1: Con Men ↔ Shop: Snobs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Doormen | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Trendsetters ↔ Shop: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P1: Trendsetters ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Trendsetters ↔ P3: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P1: Trendsetters ↔ P3: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P3: Scouts ↔ Shop: Critic | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ Shop: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Con Men ↔ Shop: Old Money | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Con Men ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Line Cutters | DEAD | 19 | 5% | 0% | 0% | – | – | – | 21.5 | 0% (0/0) | – | 14/0%/0% | 5/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Cutpurse ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Cutpurse ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Patriarch ↔ Shop: Sticky Fingers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Patriarch ↔ Shop: Loyalists | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 24/0%/0% |
| trade:P4: Con Men ↔ Shop: Loyalists | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 22/0%/0% |
| choose member:P3's Recruit Bonus (3) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| choose member:P3's Connoisseurs (4) | DEAD | 24 | 4% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 1/0%/0% | 23/0%/0% |
| choose member:P3's Critic (3) | DEAD | 27 | 7% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | – | 27/0%/0% |
| choose member:P3's Accomplice (3) | DEAD | 69 | 1% | 0% | 0% | – | – | – | 50.9 | 0% (0/0) | – | 4/0%/0% | 65/0%/0% |
| choose member:P1's Regular (3) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 23/0%/0% |
| choose member:P2's Desperado (5) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 24/0%/0% |
| choose member:P3's Go-Between (4) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Accomplice ↔ P2: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Accomplice ↔ P3: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 25/0%/0% |
| trade:P2: Cutpurse ↔ P1: Accomplice | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P2: Cutpurse ↔ P3: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 42.0 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Alchemists ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Line Cutters ↔ P2: Volunteer | DEAD | 31 | 3% | 0% | 0% | – | – | – | 9.8 | 0% (0/0) | – | 13/0%/0% | 18/0%/0% |
| trade:P1: Accomplice ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Cutpurse ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Regular ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Regular ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Alchemists ↔ Shop: Desperado | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Line Cutters | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 28/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Dabblers | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 28/0%/0% |
| trade:P3: Trendsetters ↔ P1: Regular | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Trendsetters ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P1: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Dabblers ↔ P2: Recruit Bonus | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 26/0%/0% |
| trade:P4: Proselytizers ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| choose member:P2's Recruit Bonus (3) | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 25/0%/0% |
| choose member:P4's Toastmaster (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P1: Accomplice ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ Shop: Old Maid | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P1: Triplets ↔ Shop: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Triplets ↔ P2: Volunteer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Triplets ↔ P2: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 31/0%/0% |
| trade:P1: Triplets ↔ P3: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 19/0%/0% |
| trade:P1: Triplets ↔ P4: Deprogrammers | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P1: Philanthropists ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P2: Volunteer ↔ P4: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Old Maid | DEAD | 31 | 3% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 18/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P2: Dabblers ↔ Shop: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Dabblers ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P1: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P1: Triplets | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 29/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 58 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 42/0%/0% |
| trade:P2: Dabblers ↔ P3: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P3: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P4: Deprogrammers | DEAD | 49 | 2% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 16/0%/0% | 33/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Line Cutters ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Line Cutters ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Old Maid | DEAD | 22 | 5% | 0% | 0% | – | – | – | 16.2 | 100% (0/1) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Party Crasher | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P3: Trendsetters ↔ P2: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P3: Trendsetters ↔ P4: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Doormen ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Doormen ↔ P4: Window Dressers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Alchemists ↔ P2: Dabblers | DEAD | 30 | 3% | 0% | 0% | – | – | – | 13.4 | 0% (0/0) | – | 7/0%/0% | 23/0%/0% |
| trade:P3: Alchemists ↔ P4: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Snobs ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Grifter ↔ P4: Con Men | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Kingpin ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Kingpin ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Kingpin ↔ P1: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Kingpin ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Kingpin ↔ P4: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Patriarch ↔ Shop: Old Maid | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 33/0%/0% |
| trade:P3: Patriarch ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Debutantes | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ Shop: Desperado | DEAD | 28 | 4% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P4: Con Men ↔ Shop: Shoplifter | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Con Men ↔ Shop: Bodyguards | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Triplets | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 16/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Dabblers | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 30/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P4: Window Dressers ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Loyalists ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Loyalists ↔ P2: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Loyalists ↔ P4: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Accomplice ↔ P2: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ P2: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P1: Polisher ↔ P2: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P2: Dabblers | DEAD | 38 | 3% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 17/0%/0% | 21/0%/0% |
| trade:P1: Polisher ↔ P2: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P1: Polisher ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P1: Polisher | DEAD | 36 | 3% | 0% | 0% | – | – | – | 11.4 | 0% (0/0) | – | 17/0%/0% | 19/0%/0% |
| trade:P2: Scouts ↔ P1: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P1: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Scouts ↔ P1: Polisher | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P2: Scouts ↔ P3: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 23/0%/0% |
| trade:P3: Alchemists ↔ P1: Polisher | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P3: Alchemists ↔ P2: Scouts | DEAD | 25 | 4% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P3: Alchemists ↔ P4: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Patriarch ↔ P4: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Connoisseurs ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ P2: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P4: Loyalists ↔ P2: Dabblers | DEAD | 37 | 3% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 2/0%/0% | 35/0%/0% |
| trade:P4: Loyalists ↔ P3: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Loyalists ↔ P3: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P3: Kingpin | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P3: Connoisseurs | DEAD | 25 | 4% | 0% | 0% | – | – | – | 26.0 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| choose member:P4's Agents (3) | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 31/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 28/0%/0% |
| trade:P1: Roadie ↔ P2: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Roadie ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P2: Agents ↔ P1: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Agents ↔ P3: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 14/0%/0% |
| trade:P2: Agents ↔ P4: Volunteer | DEAD | 16 | 6% | 0% | 0% | – | – | – | 3.3 | 100% (0/1) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Scouts ↔ P3: Recruit Bonus | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 24/0%/0% |
| trade:P2: Scouts ↔ P4: Volunteer | DEAD | 50 | 4% | 0% | 0% | – | – | – | 17.0 | 50% (0/1) | – | 21/0%/0% | 29/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Scouts | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 23/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Volunteer | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 14/0%/0% |
| trade:P3: Line Cutters ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Volunteer ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 3/0%/0% |
| trade:P4: Volunteer ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Volunteer ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ Shop: Muse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Polisher ↔ P3: Recruit Bonus | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 20/0%/0% |
| trade:P1: Polisher ↔ P4: Volunteer | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 9/0%/0% |
| trade:P2: Agents ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 3/0%/0% |
| trade:P2: Agents ↔ P3: Critic | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Polisher | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 18/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Critic ↔ P2: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Critic ↔ P4: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ P4: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 27.4 | 0% (0/0) | – | 14/0%/0% | 5/0%/0% |
| trade:P1: Polisher ↔ P4: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P1: Agents ↔ P3: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Agents ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P1: Agents ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P2: Trendsetters ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Trendsetters ↔ P3: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Trendsetters ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Dabblers ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P4: Dabblers ↔ P1: Polisher | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P1: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 4/0%/0% |
| trade:P4: Dabblers ↔ P3: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P4: Dabblers ↔ P3: Line Cutters | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 24/0%/0% |
| trade:P1: Alchemists ↔ P2: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Alchemists ↔ P4: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Polisher ↔ Shop: Toastmaster | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Polisher ↔ P4: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Agents ↔ P2: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P1: Agents ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Volunteer ↔ P2: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Volunteer ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Volunteer ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Volunteer ↔ P4: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | DEAD | 40 | 3% | 0% | 0% | – | – | – | 16.1 | 100% (0/1) | – | 19/0%/0% | 21/0%/0% |
| trade:P2: Scouts ↔ P4: Roadie | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Polisher | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Window Shopper ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Window Shopper ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Regular | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Toastmaster | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Volunteer | DEAD | 41 | 7% | 0% | 0% | – | – | – | 10.3 | 33% (0/1) | – | 12/0%/0% | 29/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Line Cutters ↔ P2: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Line Cutters ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Critic ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ Shop: Regular | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.2 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P4: Dabblers ↔ P1: Volunteer | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 26/0%/0% |
| trade:P4: Dabblers ↔ P2: Deprogrammers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 22/0%/0% |
| trade:P4: Roadie ↔ P1: Polisher | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Roadie ↔ P2: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 18/0%/0% |
| trade:P4: Roadie ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Roadie ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Roadie ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Muse ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Polisher ↔ P3: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ P3: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P1: Window Dressers ↔ P2: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Window Dressers ↔ P3: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 19.3 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Window Dressers ↔ P3: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Busker ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Busker ↔ P2: Deprogrammers | DEAD | 27 | 4% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P3: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Busker ↔ P4: Roadie | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 37/0%/0% |
| trade:P2: Scouts ↔ P3: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Volunteer | DEAD | 52 | 8% | 0% | 0% | – | – | – | 7.7 | 50% (0/2) | – | 18/0%/0% | 34/0%/0% |
| trade:P3: Triplets ↔ Shop: Toastmaster | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P1: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P2: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P3: Triplets ↔ P4: Dabblers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 26/0%/0% |
| trade:P3: Triplets ↔ P4: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P4: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Party Crasher ↔ P1: Polisher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P1: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Party Crasher ↔ P1: Window Dressers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Party Crasher ↔ P2: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Party Crasher ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P4: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P3: Triplets | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 23/0%/0% |
| trade:P4: Roadie ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Muse ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P3: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P1: Stunt Double ↔ P4: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P4: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Collector ↔ Shop: Gift Wrapper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Proselytizers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Extra Hand | DEAD | 20 | 5% | 0% | 0% | – | – | – | 22.0 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Debt Collectors ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Doormen | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Con Men ↔ P1: Alchemists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P4: Fan Club ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P3: Alchemists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 9.3 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P3: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Critic ↔ P3: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ P3: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Critic | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Panel ↔ Shop: Anarchist | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 36/0%/0% |
| trade:P3: Alchemists ↔ P2: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ P4: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P3: Alchemists ↔ P4: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P3: Proselytizers ↔ Shop: Anarchist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Con Men ↔ Shop: Anarchist | DEAD | 52 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 44/0%/0% |
| trade:P4: Fan Club ↔ P3: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Agents ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Window Dressers ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Loyalists | DEAD | 25 | 4% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Stunt Double ↔ P2: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P3: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P2: Mentor & Protégés ↔ Shop: Extra Hand | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Mentor & Protégés ↔ Shop: Patroness | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Doormen ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Regular ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Regular ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Regular ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Panel ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Alchemists ↔ Shop: Doppelganger | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Alchemists ↔ Shop: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Polisher | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 44 | 2% | 0% | 0% | – | – | – | 8.5 | 0% (0/0) | – | 15/0%/0% | 29/0%/0% |
| trade:P4: Dabblers ↔ P2: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 43 | 2% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 15/0%/0% | 28/0%/0% |
| trade:P4: Roadie ↔ P3: Deprogrammers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Doppelganger | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Fan Club ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Window Shopper ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Window Shopper ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ Shop: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ Shop: Old Maid | DEAD | 46 | 2% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 17/0%/0% | 29/0%/0% |
| trade:P1: Loyalists ↔ P2: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Loyalists ↔ P2: Busker | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P1: Loyalists ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P1: Loyalists ↔ P3: Alchemists | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 27/0%/0% |
| trade:P1: Loyalists ↔ P3: Deprogrammers | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 26/0%/0% |
| trade:P2: Doormen ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Regular ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Busker ↔ Shop: Old Maid | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Busker ↔ P4: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P4: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P3: Alchemists ↔ P1: Loyalists | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 25/0%/0% |
| trade:P3: Alchemists ↔ P2: Busker | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Dabblers ↔ Shop: Old Maid | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P4: Roadie ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P4: Volunteer ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Fan Club ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Fan Club ↔ P1: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 21.5 | 100% (0/1) | – | 3/0%/0% | 13/0%/0% |
| choose member:Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Accomplice | DEAD | 23 | 4% | 0% | 0% | – | – | – | 18.5 | 100% (0/1) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Gardener ↔ P3: Scouts | DEAD | 21 | 5% | 0% | 0% | – | – | – | 39.3 | 100% (0/1) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ P1: Deprogrammers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Accomplice ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P1: Gardener | DEAD | 19 | 5% | 0% | 0% | – | – | – | 16.8 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Loyalists | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P1: Gardener ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Volunteer ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Loyalists ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Loyalists ↔ Shop: Go-Between | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P4: Loyalists ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ Shop: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ P1: Deprogrammers | DEAD | 49 | 2% | 0% | 0% | – | – | – | 13.4 | 100% (0/1) | – | 11/0%/0% | 38/0%/0% |
| trade:P4: Loyalists ↔ P1: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Old Maid | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 22/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Sticky Fingers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Desperado | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 55 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 33/0%/0% |
| trade:P1: Gardener ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Gardener ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Volunteer ↔ Shop: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P1: Line Cutters ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Ringleader | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Desperado | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P1: Con Men ↔ P3: Alchemists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Con Men ↔ P4: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 24/0%/0% |
| trade:P2: Accomplice ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Accomplice ↔ P1: Line Cutters | DEAD | 24 | 8% | 0% | 0% | – | – | – | 2.1 | 0% (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 52 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 31/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Line Cutters | DEAD | 33 | 3% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 10/0%/0% | 23/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Alchemists ↔ Shop: Sticky Fingers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Critic ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ Shop: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P4: Loyalists ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.3 | 100% (0/1) | – | 4/0%/0% | 13/0%/0% |
| choose member:P1's Gardener (3) | DEAD | 22 | 5% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | – | 22/0%/0% |
| choose member:P1's Volunteer (1) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Scouts | DEAD | 40 | 5% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 17/0%/0% | 23/0%/0% |
| trade:P1: Gardener ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Con Men ↔ Shop: Anarchist | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 24/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Window Dressers ↔ P4: Scouts | DEAD | 22 | 5% | 0% | 0% | – | – | – | 13.2 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Dyer ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P1: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Triplets ↔ P1: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P2: Triplets ↔ P4: Scouts | DEAD | 27 | 4% | 0% | 0% | – | – | – | 3.6 | 0% (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P3: Loyalists ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Regular ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P1: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Scouts ↔ P1: Volunteer | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 27/0%/0% |
| trade:P4: Scouts ↔ P1: Line Cutters | DEAD | 53 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 26/0%/0% | 27/0%/0% |
| trade:P4: Scouts ↔ P2: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P4: Go-Between ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Go-Between ↔ P1: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Grifter ↔ Shop: Shoplifter | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Double Agent ↔ Shop: Shoplifter | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Double Agent ↔ Shop: Anarchist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Drifters ↔ P1: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Polisher ↔ P3: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Cutpurse | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P1: Extortionist ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Grifter ↔ Shop: Shoplifter | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Grifter ↔ Shop: Proselytizers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P2: Dabblers ↔ P4: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P3: Cutpurse ↔ Shop: Desperado | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Cutpurse ↔ P1: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P3: Cutpurse ↔ P1: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P3: Cutpurse ↔ P2: Dabblers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 8.9 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Triplets ↔ P2: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P4: Martyrs ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Grifter ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P2: Deprogrammers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 26/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 51 | 2% | 0% | 0% | – | – | – | 7.5 | 0% (0/0) | – | 20/0%/0% | 31/0%/0% |
| trade:P2: Mob ↔ Shop: HR | DEAD | 15 | 7% | 0% | 0% | – | – | – | 36.5 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| choose member:P1's Polisher (3) | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 24/0%/0% |
| choose member:P2's Sticky Fingers (4) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Triplets ↔ P3: Deprogrammers | DEAD | 37 | 8% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 11/0%/0% | 26/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Triplets | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 24/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Dabblers | DEAD | 51 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 37/0%/0% |
| trade:P4: Martyrs ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P4: Con Men ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P4: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Cashier | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Alchemists ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Alchemists ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Cashier | DEAD | 30 | 3% | 0% | 0% | – | – | – | 13.9 | 0% (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P4: Brokers ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Collector | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Recluse ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Recluse ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ Shop: Recluse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Alchemists ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P4: Scouts | DEAD | 30 | 3% | 0% | 0% | – | – | – | 1.8 | 100% (0/1) | – | 11/0%/0% | 19/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | DEAD | 41 | 7% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 16/0%/0% | 25/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Recluse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Line Cutters | DEAD | 32 | 3% | 0% | 0% | – | – | – | 28.9 | 100% (0/1) | – | 20/0%/0% | 12/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Accomplice ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P2: Recruit Bonus | DEAD | 43 | 5% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 21/0%/0% | 22/0%/0% |
| trade:P4: Scouts ↔ P3: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Alchemists ↔ P3: Shopkeeper | DEAD | 22 | 5% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Sticky Fingers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Recluse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.0 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Scouts | DEAD | 31 | 3% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P1: Line Cutters | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 25/0%/0% |
| trade:P3: Busker ↔ P4: Scouts | DEAD | 40 | 3% | 0% | 0% | – | – | – | 38.4 | 100% (0/1) | – | 24/0%/0% | 16/0%/0% |
| trade:P1: Line Cutters ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Line Cutters ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Line Cutters ↔ P4: Scouts | DEAD | 23 | 4% | 0% | 0% | – | – | – | 12.8 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P2: Busker | DEAD | 19 | 5% | 0% | 0% | – | – | – | 22.0 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ Shop: Sticky Fingers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Busker ↔ P1: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P1: Line Cutters | DEAD | 41 | 2% | 0% | 0% | – | – | – | 12.1 | 100% (0/1) | – | 24/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P4: Volunteer | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P2: Roadie ↔ P4: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P3: Accomplice ↔ Shop: Desperado | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Volunteer ↔ P1: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P4: Volunteer ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Volunteer ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P2: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Line Cutters ↔ P2: Volunteer | DEAD | 46 | 4% | 0% | 0% | – | – | – | 7.8 | 50% (0/1) | – | 25/0%/0% | 21/0%/0% |
| trade:P1: Alchemists ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ P4: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P4: Stunt Double | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Busker ↔ Shop: Muse | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ P4: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P4: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 14.0 | 0% (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P3: Accomplice ↔ P4: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Line Cutters | DEAD | 51 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 25/0%/0% | 26/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Muse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P4: Stunt Double ↔ P1: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Alchemists ↔ Shop: Party Crasher | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P2: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Stunt Double ↔ P2: Roadie | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 25/0%/0% |
| trade:P1: Stunt Double ↔ P2: Chronicler | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Stunt Double ↔ P3: Shopkeeper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Stunt Double ↔ P3: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P4: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Stunt Double ↔ P4: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Sticky Fingers ↔ P2: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Sticky Fingers ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P1: Sticky Fingers ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Triplets | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ Shop: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P2: Chronicler ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Chronicler ↔ P1: Stunt Double | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Chronicler ↔ P4: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Chronicler ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Party Crasher | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ Shop: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ Shop: Party Crasher | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 16/0%/0% |
| trade:P3: Busker ↔ P4: Deprogrammers | DEAD | 35 | 9% | 0% | 0% | – | – | – | 17.8 | 67% (0/2) | – | 20/0%/0% | 15/0%/0% |
| trade:P3: Muse ↔ P1: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P3: Muse ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Patriarch ↔ Shop: Old Maid | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 22/0%/0% |
| trade:P4: Patriarch ↔ P1: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Patriarch ↔ P1: Stunt Double | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Patriarch ↔ P3: Busker | DEAD | 26 | 4% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 9/0%/0% | 17/0%/0% |
| choose member:P3's Muse (4) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| choose member:P4's Volunteer (1) | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 36/0%/0% |
| trade:P1: Kingpin ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Cashier | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P2: Busker | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P1: Brokers ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Cashier | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 21/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Triplets | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 33/0%/0% |
| trade:P2: Roadie ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ Shop: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Chronicler ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Cashier | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 53 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 29/0%/0% | 24/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Scouts | DEAD | 37 | 5% | 0% | 0% | – | – | – | 22.4 | 50% (0/1) | – | 14/0%/0% | 23/0%/0% |
| trade:P2: Busker ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Cashier | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 20/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Triplets ↔ P1: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P2: Recruit Bonus | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 28/0%/0% |
| trade:P3: Triplets ↔ P2: Roadie | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P2: Deprogrammers | DEAD | 35 | 3% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 14/0%/0% | 21/0%/0% |
| trade:P1: Stunt Double ↔ P4: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 23/0%/0% |
| trade:P2: Roadie ↔ P4: Recruit Bonus | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ P4: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P4: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Roadie | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 20/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P1: Accomplice ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Accomplice ↔ P4: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P2: Panel ↔ P4: Con Men | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ P4: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Alchemists ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P1: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ P2: Chronicler | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ P2: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Line Cutters ↔ P4: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P1: Stunt Double ↔ P4: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Chronicler ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Panel ↔ Shop: Extra Hand | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Panel ↔ Shop: Proselytizers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Agents ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Agents ↔ P1: Line Cutters | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 22/0%/0% |
| trade:P4: Agents ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Stunt Double ↔ P2: Doppelganger | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P1: Roadie ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P2: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 9.0 | 100% (0/1) | – | 12/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Chronicler ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Busker ↔ P1: Roadie | DEAD | 25 | 4% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 15/0%/0% | 10/0%/0% |
| trade:P2: Alchemists ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Fan Club ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Doppelganger ↔ P1: Stunt Double | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Agents ↔ P1: Roadie | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P1: Kingpin ↔ P2: Cutpurse | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 21/0%/0% |
| trade:P1: Dabblers ↔ P2: Line Cutters | DEAD | 57 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 37/0%/0% |
| trade:P1: Dabblers ↔ P4: Scouts | DEAD | 43 | 2% | 0% | 0% | – | – | – | 22.0 | 0% (0/0) | – | 18/0%/0% | 25/0%/0% |
| trade:P2: Cutpurse ↔ P1: Dabblers | DEAD | 32 | 3% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 15/0%/0% | 17/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P2: Line Cutters ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Line Cutters ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Sticky Fingers ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ P1: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 21/0%/0% |
| trade:P4: Scouts ↔ P2: Line Cutters | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 25/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Martyrs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P4: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P2: Accomplice | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Accomplice ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Cutpurse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 67 | 3% | 0% | 0% | – | – | – | 13.5 | 50% (0/1) | – | 27/0%/0% | 40/0%/0% |
| trade:P2: Party Crasher ↔ P3: Kingpin | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P3: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Kingpin ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Kingpin ↔ P2: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Cutpurse ↔ P1: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Cutpurse ↔ P1: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Cutpurse ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 62 | 2% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 26/0%/0% | 36/0%/0% |
| trade:P1: Dabblers ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Martyrs | DEAD | 15 | 7% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Alchemists ↔ P2: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Party Crasher ↔ P3: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P4: Recluse | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 23/0%/0% |
| trade:P2: Triplets ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Recluse ↔ P1: Dabblers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P4: Recluse ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Recluse ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Recluse ↔ P2: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P4: Recluse ↔ P3: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| choose member:P2's Party Crasher (4) | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 30/0%/0% |
| choose member:P3's Sticky Fingers (4) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 24/0%/0% |
| trade:P1: Alchemists ↔ P4: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Patriarch ↔ P4: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Trendsetters ↔ P3: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ P1: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P2: Snobs ↔ Shop: Old Maid | DEAD | 19 | 5% | 0% | 0% | – | – | – | 12.0 | 100% (0/1) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Kingpin ↔ P1: Deprogrammers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ Shop: Raiders | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Loyalists ↔ P2: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ P3: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Roadie ↔ P3: Scouts | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 17/0%/0% |
| trade:P1: Busker ↔ P3: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P1: Roadie | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Fan Club | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Deprogrammers | DEAD | 26 | 4% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 16/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P3: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 25.1 | 100% (0/1) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P3: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Alchemists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P2: Deprogrammers | DEAD | 35 | 6% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 14/0%/0% | 21/0%/0% |
| trade:P1: Fan Club ↔ Shop: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Fan Club ↔ Shop: Alchemists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Con Men ↔ P1: Fan Club | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P2: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 18/0%/0% |
| trade:P1: Busker ↔ P2: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 24/0%/0% |
| trade:P1: Martyrs ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Chronicler ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Agents ↔ P2: Recruit Bonus | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 23/0%/0% |
| trade:P1: Agents ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Agents ↔ P3: Dabblers | DEAD | 28 | 4% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Roadie | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Agents | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Scouts | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 23/0%/0% |
| trade:P3: Scouts ↔ P1: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P2: Recruit Bonus | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 21/0%/0% |
| trade:P3: Dabblers ↔ P1: Agents | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| choose member:P1's Agents (3) | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 41/0%/0% |
| trade:P1: Busker ↔ P3: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 38.5 | 0% (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Grifter ↔ Shop: Extortionist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Agents ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ Shop: Old Maid | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ Shop: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Roadie ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Cutpurse | DEAD | 22 | 5% | 0% | 0% | – | – | – | 32.2 | 0% (0/0) | – | 15/0%/0% | 7/0%/0% |
| trade:P2: Scouts ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P3: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Chronicler ↔ P1: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Chronicler ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Patriarch ↔ Shop: Proselytizers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Patriarch ↔ Shop: Loyalists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Patriarch ↔ Shop: Desperado | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Patriarch ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P2: Doppelganger ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Doppelganger ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Doppelganger ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Dabblers ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Dabblers ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Panel ↔ Shop: Proselytizers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Panel ↔ Shop: Desperado | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.2 | 100% (0/1) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 24 | 4% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P3: Cutpurse ↔ P2: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 6/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P4: Recluse ↔ Shop: Brokers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Recluse ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Recluse ↔ P3: Line Cutters | DEAD | 29 | 7% | 0% | 0% | – | – | – | 6.9 | 50% (0/1) | – | 12/0%/0% | 17/0%/0% |
| trade:P1: Busker ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Busker ↔ P2: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P2: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Fan Club ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Cutpurse ↔ P4: Volunteer | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P2: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 23/0%/0% |
| trade:P1: Party Crasher ↔ P2: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 17/0%/0% |
| trade:P1: Party Crasher ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P1: Party Crasher ↔ P3: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P2: Chronicler ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Chronicler ↔ P1: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Fan Club ↔ Shop: Muse | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.9 | 100% (0/1) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Stunt Double ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P2: Stunt Double | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Cutpurse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Patriarch ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Patriarch ↔ P2: Chronicler | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Patriarch ↔ P2: Doppelganger | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P3: Old Money ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.0 | 100% (0/1) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P1: Recruit Bonus | DEAD | 30 | 3% | 0% | 0% | – | – | – | 20.6 | 0% (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P1: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P1: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Roadie | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P1: Scouts ↔ P3: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P3: Roadie | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 17/0%/0% |
| trade:P2: Con Men ↔ Shop: Desperado | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 3/0%/0% |
| trade:P3: Roadie ↔ P1: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P3: Roadie ↔ P1: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Dabblers | DEAD | 30 | 3% | 0% | 0% | – | – | – | 6.7 | 0% (0/0) | – | 20/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Roadie | DEAD | 24 | 4% | 0% | 0% | – | – | – | 10.7 | 0% (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P1: Busker ↔ P3: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 64.2 | 0% (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Busker ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ P3: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Party Crasher ↔ P4: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 21.8 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Con Men ↔ Shop: Proselytizers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Extra Hand | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Accomplice ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P3: Roadie ↔ P2: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P3: Grifter ↔ Shop: Proselytizers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Grifter ↔ P1: Con Men | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Mob ↔ Shop: Wallflower | DEAD | 21 | 5% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Panel ↔ P4: Con Men | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P4: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ P4: Polisher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ Shop: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ P4: Polisher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P4: Polisher | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Extortionist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Con Men ↔ P1: Panel | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Polisher ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Polisher ↔ P3: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Polisher ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| choose member:P3's Party Crasher (4) | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 29/0%/0% |
| trade:P1: Panel ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Panel ↔ Shop: Patriarch | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P1: Busker ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Agents ↔ P3: Roadie | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 20/0%/0% |
| trade:P1: Agents ↔ P4: Polisher | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P1: Agents ↔ P4: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 26/0%/0% |
| trade:P1: Double Agent ↔ P3: Grifter | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Double Agent ↔ P4: Con Men | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Line Cutters | DEAD | 53 | 4% | 0% | 0% | – | – | – | 17.4 | 50% (0/1) | – | 17/0%/0% | 36/0%/0% |
| trade:P3: Roadie ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ P1: Agents | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P3: Roadie ↔ P4: Line Cutters | DEAD | 29 | 3% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P3: Grifter ↔ P1: Double Agent | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Kingpin ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P3: Chronicler ↔ Shop: Alchemists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P3: Chronicler ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Chronicler ↔ P4: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Polisher ↔ P1: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P4: HR ↔ Shop: Hangers-On | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Line Cutters ↔ P2: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Panel ↔ Shop: Anarchist | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P1: Double Agent ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Fan Club ↔ P3: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Grifter ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ P3: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ P3: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P3: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Accomplice | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Panel ↔ Shop: Anarchist | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Roadie | DEAD | 28 | 7% | 0% | 0% | – | – | – | 8.3 | 50% (0/1) | – | 17/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Line Cutters | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 21/0%/0% |
| trade:P2: Patriarch ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Patriarch ↔ Shop: Anarchist | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| trade:P2: Patriarch ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P4: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P4: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P4: Con Men ↔ P2: Patriarch | DEAD | 18 | 6% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Accomplice ↔ P2: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Accomplice ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Fan Club ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P3: Roadie ↔ Shop: Old Maid | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Chronicler ↔ Shop: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Chronicler ↔ Shop: Old Maid | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 21/0%/0% |
| trade:P4: Busker ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Collector ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Anarchist ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Volunteer | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 7/0%/0% |
| trade:P3: Roadie ↔ Shop: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Roadie ↔ Shop: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Old Maid | DEAD | 37 | 3% | 0% | 0% | – | – | – | 12.2 | 0% (0/0) | – | 10/0%/0% | 27/0%/0% |
| trade:P3: Stunt Double ↔ P2: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Accomplice ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Timekeepers ↔ Shop: Closer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ Shop: Toastmaster | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P4: Scouts | DEAD | 29 | 3% | 0% | 0% | – | – | – | 3.8 | 100% (0/1) | – | 15/0%/0% | 14/0%/0% |
| trade:P1: Polisher ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Polisher ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P1: Regular ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Bouncers ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P3: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Party Crasher ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P2: Window Dressers ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Window Dressers ↔ P3: Connoisseurs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Trendsetters ↔ P4: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Doormen ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Connoisseurs ↔ Shop: Old Maid | DEAD | 19 | 5% | 0% | 0% | – | – | – | 20.0 | 100% (0/1) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Critic ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Anarchist ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ Shop: Closer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ Shop: Toastmaster | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ Shop: Old Maid | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 24/0%/0% |
| trade:P4: Con Men ↔ Shop: Closer | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| choose member:P3's Regular (3) | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 25/0%/0% |
| choose member:P2's Critic (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| choose member:P4's Sticky Fingers (4) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Regular ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Early Birds ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ Shop: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Con Men ↔ Shop: Patriarch | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Trendsetters ↔ P4: Connoisseurs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Panel ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Extra Hand | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Dabblers ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 5/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ Shop: Anarchist | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 33/0%/0% |
| trade:P1: Busker ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P2: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P4: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P2: Agents ↔ P3: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 7/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Doppelganger ↔ P4: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ P4: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P4: Toastmaster | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Busker ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Agents ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Fan Club ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| choose member:P4's Party Crasher (4) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| choose member:P3's Toastmaster (3) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Cutpurse | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P1: Line Cutters ↔ P2: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 11/0%/0% |
| trade:P2: Cutpurse ↔ P1: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P2: Cutpurse ↔ P1: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ P3: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ Shop: Alchemists | DEAD | 31 | 3% | 0% | 0% | – | – | – | 30.5 | 0% (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P2: Dabblers ↔ P1: Line Cutters | DEAD | 45 | 2% | 0% | 0% | – | – | – | 9.3 | 0% (0/0) | – | 29/0%/0% | 16/0%/0% |
| trade:P3: Polisher ↔ P2: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.4 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ P2: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P4: Alchemists ↔ P1: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Alchemists ↔ P2: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Kingpin | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Line Cutters ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Martyrs | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Dabblers ↔ P1: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 18/0%/0% |
| trade:P4: Alchemists ↔ P2: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P4: Volunteer ↔ P1: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Toastmaster | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Martyrs ↔ P1: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.5 | 100% (0/1) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ P2: Shopkeeper | DEAD | 24 | 4% | 0% | 0% | – | – | – | 27.6 | 0% (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P2: Recruit Bonus | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 30/0%/0% |
| trade:P1: Scouts ↔ P2: Dabblers | DEAD | 64 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 26/0%/0% | 38/0%/0% |
| trade:P1: Scouts ↔ P3: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ Shop: Triplets | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 30/0%/0% | 18/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Alchemists ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 3.8 | 100% (0/1) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Volunteer ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| choose member:P4's Gardener (3) | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.7 | 100% (0/1) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Gardener ↔ P2: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Drifters ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Gardener | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P1: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P1: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Gardener ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Regular ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 22/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 21/0%/0% |
| trade:P1: Drifters ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Volunteer | DEAD | 40 | 3% | 0% | 0% | – | – | – | 32.2 | 0% (0/0) | – | 22/0%/0% | 18/0%/0% |
| trade:P1: Snobs ↔ Shop: Tastemaker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Connoisseurs ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 28/0%/0% |
| trade:P2: Alchemists ↔ P1: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P2: Triplets ↔ P1: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ P3: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Dabblers | DEAD | 36 | 6% | 0% | 0% | – | – | – | 5.1 | 100% (0/2) | – | 15/0%/0% | 21/0%/0% |
| trade:P4: Recluse ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Recluse ↔ P3: Shopkeeper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ P3: Volunteer | DEAD | 40 | 5% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 17/0%/0% | 23/0%/0% |
| trade:P2: Con Men ↔ Shop: Tastemaker | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 20/0%/0% |
| trade:P3: Dyer ↔ Shop: Tastemaker | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P3: Dyer ↔ Shop: Customs | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Raiders | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.2 | 0% (0/0) | – | 12/0%/0% | 3/0%/0% |
| trade:P1: Dabblers ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Triplets ↔ P3: Volunteer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P1: Triplets ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Con Men ↔ Shop: Harmonist | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P2: Panel ↔ Shop: Harmonist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P2: Panel ↔ Shop: Raiders | DEAD | 19 | 5% | 0% | 0% | – | – | – | 25.4 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Go-Between | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Volunteer ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Volunteer ↔ P4: Scouts | DEAD | 22 | 9% | 0% | 0% | – | – | – | 14.6 | 50% (0/1) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P1: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P3: Scouts | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 18/0%/0% |
| trade:P1: Triplets ↔ P3: Scouts | DEAD | 41 | 2% | 0% | 0% | – | – | – | 29.4 | 0% (0/0) | – | 13/0%/0% | 28/0%/0% |
| trade:P2: Alchemists ↔ P3: Scouts | DEAD | 30 | 3% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 9/0%/0% | 21/0%/0% |
| trade:P3: Scouts ↔ P1: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ P1: Triplets | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 26/0%/0% |
| trade:P1: Gardener ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Gardener | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Con Men ↔ P3: Doormen | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Gardener | DEAD | 27 | 7% | 0% | 0% | – | – | – | 15.6 | 50% (0/1) | – | 10/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P3: Triplets | DEAD | 52 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 33/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Trendsetters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Triplets ↔ P1: Dabblers | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 29/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Dyer ↔ Shop: Tastemaker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Trendsetters ↔ P3: Connoisseurs | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Gardener ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Gardener ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Dabblers ↔ P1: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P4: Martyrs ↔ P3: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Line Cutters ↔ P2: Volunteer | DEAD | 23 | 9% | 0% | 0% | – | – | – | 26.2 | 50% (0/1) | – | 12/0%/0% | 11/0%/0% |
| trade:P1: Window Dressers ↔ P3: Regular | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Window Dressers ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Patriarch ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Patriarch ↔ P3: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Volunteer ↔ P3: Deprogrammers | DEAD | 21 | 10% | 0% | 0% | – | – | – | 7.4 | 50% (0/1) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P3: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Martyrs | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Con Men ↔ Shop: Loyalists | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 25/0%/0% |
| trade:P3: Con Men ↔ Shop: Ringleader | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Con Men ↔ Shop: Harmonist | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P3: Con Men ↔ Shop: Tastemaker | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 23/0%/0% |
| trade:P4: Martyrs ↔ P3: Shopkeeper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P2: Loyalists ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Con Men ↔ P2: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ P2: Line Cutters | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ P3: Busker | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Toastmaster ↔ P2: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P1: Toastmaster ↔ P2: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Toastmaster ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Timekeepers ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Timekeepers ↔ P2: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P4: Scouts | DEAD | 58 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 35/0%/0% |
| trade:P2: Line Cutters ↔ P3: Busker | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P2: Critic ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Busker ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P3: Busker ↔ Shop: Shift Crew | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P3: Stunt Double ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Regular ↔ P2: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Doormen ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Doormen ↔ P3: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Doormen ↔ P3: Connoisseurs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ Shop: Closer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Line Cutters ↔ P3: Connoisseurs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Critic ↔ P3: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Muse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| choose member:P2's Connoisseurs (4) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P1: Dabblers ↔ P3: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P1: Dabblers ↔ P4: Polisher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Alchemists ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Doormen ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Doormen ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Stunt Double ↔ P4: Chronicler | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Roadie ↔ P3: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P3: Critic | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Chronicler ↔ Shop: Old Maid | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 27/0%/0% |
| trade:P1: Accomplice ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Accomplice ↔ P2: Gardener | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P1: Triplets ↔ P3: Recruit Bonus | DEAD | 42 | 2% | 0% | 0% | – | – | – | 20.6 | 0% (0/0) | – | 17/0%/0% | 25/0%/0% |
| trade:P2: Dyer ↔ Shop: Harmonist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Triplets | DEAD | 39 | 3% | 0% | 0% | – | – | – | 33.8 | 0% (0/0) | – | 17/0%/0% | 22/0%/0% |
| trade:P4: Double Agent ↔ Shop: Proselytizers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Gardener | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P2: Gardener ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Sticky Fingers ↔ P2: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Early Birds | DEAD | 18 | 6% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Accomplice | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P2: Cutpurse ↔ P3: Accomplice | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P3: Line Cutters ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Accomplice ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Accomplice ↔ Shop: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P3: Accomplice ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P3: Accomplice ↔ P2: Cutpurse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P1: Clockmakers ↔ Shop: Hot Streak | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ Shop: Old Maid | DEAD | 38 | 3% | 0% | 0% | – | – | – | 21.5 | 100% (0/1) | – | 5/0%/0% | 33/0%/0% |
| trade:P2: Loyalists ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.0 | 100% (0/1) | – | 1/0%/0% | 16/0%/0% |
| choose member:P3's Early Birds (3) | DEAD | 20 | 5% | 0% | 0% | – | – | – | 3.3 | 0% (0/0) | – | – | 20/0%/0% |
| trade:P1: Anarchist ↔ Shop: Gossip | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Kingpin ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Gossip | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P4: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 22/0%/0% |
| trade:P1: Scouts ↔ Shop: Doppelganger | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Scouts ↔ Shop: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Scouts ↔ P2: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P3: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P1: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Busker ↔ P1: Agents | DEAD | 27 | 4% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P2: Busker ↔ P4: Line Cutters | DEAD | 33 | 3% | 0% | 0% | – | – | – | 29.8 | 0% (0/0) | – | 11/0%/0% | 22/0%/0% |
| trade:P2: Recluse ↔ P1: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Recluse ↔ P3: Shopkeeper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Polisher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 8/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Recluse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Polisher ↔ P1: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P4: Polisher ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Fan Club ↔ P2: Doppelganger | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Proselytizers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P1: Martyrs ↔ P3: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Martyrs ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P3: Patriarch | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Scouts | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 29/0%/0% |
| trade:P2: Con Men ↔ P3: Patriarch | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Recluse ↔ P1: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Recluse ↔ P2: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P3: Patriarch ↔ Shop: Proselytizers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Patriarch ↔ P2: Busker | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 27/0%/0% |
| trade:P1: Roadie ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Agents ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Martyrs ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Party Crasher ↔ P2: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Busker ↔ P1: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Chronicler ↔ P1: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P2: Chronicler ↔ P3: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ Shop: Volunteer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P2: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Debutantes | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P1: Polisher ↔ P2: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ P1: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P1: Polisher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P4: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Chronicler ↔ P4: Alchemists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Patriarch ↔ Shop: Gift Wrapper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Patriarch ↔ P4: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Fan Club ↔ Shop: Muse | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P4: Alchemists ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Alchemists ↔ P1: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ P1: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ P2: Chronicler | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ P4: Deprogrammers | DEAD | 33 | 3% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 18/0%/0% | 15/0%/0% |
| trade:P1: Polisher ↔ P4: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P1: Philanthropists ↔ Shop: Gift Wrapper | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P2: Con Men ↔ Shop: Anarchist | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 37/0%/0% |
| trade:P2: Brokers ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Panel ↔ Shop: Anarchist | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Cashier | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 23/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Roadie | DEAD | 31 | 3% | 0% | 0% | – | – | – | 4.9 | 0% (0/0) | – | 17/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Polisher | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P1: Agents ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Panel ↔ P4: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: High Society ↔ Shop: Debt Collectors | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: High Society ↔ Shop: Anarchist | DEAD | 16 | 6% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Loyalists | DEAD | 24 | 4% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P1: Party Crasher ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P1: Stunt Double ↔ P2: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 26/0%/0% |
| trade:P1: Stunt Double ↔ P3: Doppelganger | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Dabblers ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P1: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P2: Dabblers ↔ P1: Scouts | DEAD | 56 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 32/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 28/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Anarchist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Doppelganger ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Doppelganger ↔ P1: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Doppelganger ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Line Cutters ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Old Maid ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ Shop: Muse | DEAD | 18 | 6% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P2: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P3: Doppelganger | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Loyalists ↔ P4: Deprogrammers | DEAD | 26 | 4% | 0% | 0% | – | – | – | 24.0 | 100% (0/1) | – | 4/0%/0% | 22/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P2: HR ↔ Shop: Debutantes | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: HR ↔ Shop: Hangers-On | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ Shop: Cashier | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P3: Roadie ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Roadie ↔ P1: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P1: Line Cutters ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Muse ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P1: Muse ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Muse ↔ P4: Roadie | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Roadie | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P3: Scouts ↔ P4: Roadie | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 21/0%/0% |
| trade:P4: Roadie ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Roadie ↔ P1: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 19/0%/0% |
| trade:P4: Roadie ↔ P2: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P4: Roadie ↔ P3: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P1: Muse ↔ P2: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Muse ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Cutpurse ↔ P4: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Sticky Fingers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P1: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ P4: Roadie | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P4: Roadie ↔ P2: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| choose member:P1's Muse (4) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Line Cutters | DEAD | 35 | 9% | 0% | 0% | – | – | – | 6.7 | 67% (0/2) | – | 13/0%/0% | 22/0%/0% |
| trade:P1: Muse ↔ P2: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P2: Line Cutters | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 29/0%/0% |
| trade:P1: Party Crasher ↔ P4: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P4: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Accomplice ↔ P3: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P2: Line Cutters | DEAD | 50 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 37/0%/0% |
| trade:P4: Mob ↔ Shop: Wallflower | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Muse ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Brokers ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P1: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Line Cutters ↔ P3: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P4: Roadie | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: HR ↔ Shop: Wallflower | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: HR ↔ Shop: Mentor & Protégés | DEAD | 24 | 4% | 0% | 0% | – | – | – | 10.9 | 0% (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P2: Grifter ↔ Shop: Anarchist | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Grifter ↔ P4: Double Agent | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| choose member:P4's Muse (4) | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 30/0%/0% |
| choose member:P4's Doppelganger (5) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Line Cutters | DEAD | 69 | 4% | 0% | 0% | – | – | – | 26.3 | 0% (0/0) | – | 35/0%/0% | 34/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Triplets | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 29/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Raiders ↔ P1: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ P1: Deprogrammers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 27/0%/0% |
| trade:P3: Con Men ↔ Shop: Desperado | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Con Men ↔ P4: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Accomplice ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 36.6 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Roadie ↔ Shop: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ Shop: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: HR ↔ Shop: Proselytizers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P4: Doppelganger ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Patriarch ↔ P4: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P2: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P4: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P1: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Stunt Double ↔ P3: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ P1: Patriarch | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P3: Con Men ↔ P1: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Con Men ↔ P2: Stunt Double | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Cutpurse ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P1: Deprogrammers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Proselytizers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ P1: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 11.0 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P3: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Cutpurse ↔ P4: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P3: Busker ↔ Shop: Cashier | DEAD | 25 | 4% | 0% | 0% | – | – | – | 26.8 | 100% (0/1) | – | 17/0%/0% | 8/0%/0% |
| trade:P1: Line Cutters ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Fan Club ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ Shop: Alchemists | DEAD | 23 | 9% | 0% | 0% | – | – | – | 11.6 | 100% (0/2) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Gardener | DEAD | 18 | 6% | 0% | 0% | – | – | – | 3.5 | 100% (0/1) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Go-Between ↔ P1: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 8/0%/0% |
| trade:P2: Regular ↔ P1: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Gardener ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 2/0%/0% |
| trade:P4: Gardener ↔ P1: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 7/0%/0% |
| trade:P1: Gardener ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P1: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ Shop: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P4: Busker ↔ P1: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ P2: Roadie | DEAD | 36 | 3% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 15/0%/0% | 21/0%/0% |
| trade:P4: Busker ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Roadie ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Regular ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P2: Volunteer ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Scouts ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P3: Scouts ↔ P2: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P1: Muse ↔ P4: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P3: Alchemists ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Alchemists ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Stunt Double ↔ P1: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Busker ↔ P1: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Panel ↔ P3: Fan Club | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Panel ↔ P3: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Muse ↔ P2: Busker | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ P1: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P3: Scouts | DEAD | 41 | 2% | 0% | 0% | – | – | – | 30.1 | 100% (0/1) | – | 21/0%/0% | 20/0%/0% |
| trade:P3: Stunt Double ↔ P2: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P2: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Fan Club ↔ Shop: Doppelganger | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Fan Club ↔ P2: Loyalists | DEAD | 18 | 6% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Loyalists ↔ P3: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P2: Loyalists ↔ P3: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P3: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P2: Loyalists ↔ P4: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Alchemists ↔ P2: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P3: Agents ↔ P1: Line Cutters | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 18/0%/0% |
| trade:P4: Stunt Double ↔ P2: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Window Dressers ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Loyalists ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Agents ↔ Shop: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P3: Gardener ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Gardener ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Line Cutters ↔ P4: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Scouts ↔ P4: Dabblers | DEAD | 60 | 2% | 0% | 0% | – | – | – | 29.8 | 0% (0/0) | – | 24/0%/0% | 36/0%/0% |
| trade:P3: Dyer ↔ Shop: Big Tent | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Agents ↔ P4: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P3: Gardener ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Critic ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Drifters ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Chronicler ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Chronicler ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Chronicler ↔ P4: Stunt Double | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Stunt Double ↔ P3: Chronicler | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ P3: Scouts | DEAD | 50 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 29/0%/0% |
| trade:P4: Dabblers ↔ P3: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P4: Patriarch ↔ P3: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P3: Agents | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 26/0%/0% |
| trade:P1: Triplets ↔ P4: Dabblers | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 28/0%/0% |
| trade:P1: Triplets ↔ P4: Line Cutters | DEAD | 23 | 4% | 0% | 0% | – | – | – | 5.4 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Dyer ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Agents ↔ P1: Triplets | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 24/0%/0% |
| trade:P3: Drifters ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P4: Dabblers ↔ P1: Triplets | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 26/0%/0% |
| trade:P1: Scouts ↔ P4: Regular | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Shift Crew ↔ P1: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P3: Shift Crew ↔ P4: Bouncers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Bouncers ↔ Shop: Early Birds | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 5/0%/0% |
| trade:P4: Bouncers ↔ P1: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P4: Bouncers ↔ P3: Shift Crew | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Regular ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Regular ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ P1: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Martyrs ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P4: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P1: Scouts ↔ P4: Recruit Bonus | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 23/0%/0% |
| trade:P2: Timekeepers ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Early Birds ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Clockmakers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P4: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Bouncers ↔ Shop: Closer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Bouncers ↔ Shop: Clockmakers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ P1: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P4: Dabblers ↔ P2: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P3: Volunteer | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Scouts | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 21/0%/0% |
| trade:P4: Con Men ↔ Shop: Clockmakers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P4: Con Men ↔ Shop: Exporters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Panel ↔ P3: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Bouncers ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Anarchist ↔ P4: Con Men | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Trendsetters ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Gossip | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Critic ↔ P2: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P4: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 29/0%/0% |
| trade:P3: Volunteer ↔ P2: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P2: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Dabblers | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 26/0%/0% |
| trade:P3: Scouts ↔ Shop: Regular | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ P2: Line Cutters | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 30/0%/0% |
| trade:P4: Polisher ↔ P2: Line Cutters | DEAD | 28 | 4% | 0% | 0% | – | – | – | 31.3 | 0% (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P4: Polisher ↔ P3: Volunteer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P4: Party Crasher ↔ P2: Line Cutters | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 19/0%/0% |
| trade:P4: Party Crasher ↔ P3: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P1: Scouts | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 30/0%/0% |
| trade:P1: Scouts ↔ Shop: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Line Cutters ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Critic ↔ P4: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Cashier ↔ P3: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Line Cutters | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 22/0%/0% |
| trade:P2: Critic ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Critic ↔ P4: Dabblers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 23/0%/0% |
| trade:P3: Triplets ↔ P2: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Doormen ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Critic | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ P2: Critic | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Polisher ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P3: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 27/0%/0% |
| trade:P4: Party Crasher ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Recluse ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Recluse ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Scouts ↔ Shop: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Toastmaster ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Line Cutters ↔ P4: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P1: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Regular ↔ P3: Polisher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Polisher ↔ P4: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P2: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Polisher ↔ P4: Toastmaster | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Trendsetters ↔ P1: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ P1: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Toastmaster ↔ P3: Polisher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P4: Volunteer ↔ P2: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ Shop: Alchemists | DEAD | 25 | 4% | 0% | 0% | – | – | – | 13.8 | 100% (0/1) | – | 11/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P4: Gardener | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 18/0%/0% |
| trade:P2: Line Cutters ↔ P4: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ Shop: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Gardener | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 26/0%/0% |
| trade:P2: Window Shopper ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Triplets ↔ P2: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 15/0%/0% |
| trade:P4: Triplets ↔ P2: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Gardener ↔ Shop: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Gardener ↔ P1: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P4: Gardener ↔ P2: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 23/0%/0% |
| trade:P2: Alchemists ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Alchemists ↔ P4: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Early Birds ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 9/0%/0% |
| trade:P1: Volunteer ↔ P3: Gardener | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P2: Scouts | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 26/0%/0% |
| trade:P1: Dabblers ↔ P3: Gardener | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 54 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 31/0%/0% |
| trade:P1: Dabblers ↔ P3: Shopkeeper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P1: Dabblers | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 24/0%/0% |
| trade:P3: Gardener ↔ P1: Volunteer | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P3: Gardener ↔ P1: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Line Cutters ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P3: Con Men ↔ Shop: Closer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Early Birds ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Party Crasher ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P4: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P4: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P2: Con Men ↔ Shop: Closer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Triplets ↔ P1: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Triplets ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Triplets ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Triplets ↔ P3: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 24/0%/0% |
| trade:P3: Line Cutters ↔ P4: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Dyer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Alchemists ↔ Shop: Closer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Alchemists ↔ P4: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Early Birds ↔ P3: Volunteer | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.7 | 100% (0/1) | – | 12/0%/0% | 9/0%/0% |
| trade:P1: Con Men ↔ Shop: Closer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Tastemaker | DEAD | 24 | 4% | 0% | 0% | – | – | – | 19.2 | 0% (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Con Men ↔ Shop: Exporters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Anarchist ↔ Shop: Tastemaker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Gossip | DEAD | 25 | 4% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Con Men ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ Shop: Cashier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Patriarch ↔ Shop: Courier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| trade:P3: Con Men ↔ Shop: Gossip | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Courier | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Con Men ↔ Shop: Big Tent | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P3: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Kingpin ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Sticky Fingers ↔ P2: Line Cutters | DEAD | 34 | 3% | 0% | 0% | – | – | – | 2.4 | 0% (0/0) | – | 14/0%/0% | 20/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Old Money | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Go-Between | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P1: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P4: Party Crasher ↔ P1: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Anarchist ↔ Shop: Tastemaker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Alchemists | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P1: Con Men ↔ P3: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Timekeepers ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P1: Line Cutters ↔ P3: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Busker ↔ Shop: Alchemists | DEAD | 17 | 6% | 0% | 0% | – | – | – | 18.9 | 100% (0/1) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P2: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P2: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P2: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P1: Loyalists ↔ P2: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Alchemists ↔ P1: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Patriarch ↔ P1: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 23/0%/0% |
| trade:P2: Patriarch ↔ P3: Doppelganger | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Con Men ↔ P1: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Scouts ↔ Shop: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Loyalists ↔ P1: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ P3: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ P3: Doppelganger | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P3: Busker ↔ P1: Dabblers | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 20/0%/0% |
| trade:P3: Con Men ↔ Shop: Mentor & Protégés | DEAD | 15 | 7% | 0% | 0% | – | – | – | 27.8 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Doppelganger ↔ P1: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Doppelganger ↔ P2: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Loyalists ↔ P3: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Bouncers ↔ Shop: Shift Crew | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Bouncers ↔ P1: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P4: Cutpurse | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P4: Cutpurse ↔ P1: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 20/0%/0% |
| trade:P1: Window Dressers ↔ P2: Line Cutters | DEAD | 22 | 5% | 0% | 0% | – | – | – | 15.8 | 0% (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P2: Con Men ↔ Shop: Shoplifter | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P4: Cutpurse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ P1: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Party Crasher ↔ P2: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P4: Cutpurse ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Kingpin ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Critic ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Con Men ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: HR ↔ Shop: Debutantes | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: HR ↔ Shop: Proselytizers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P4: Loyalists ↔ P2: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Bouncers ↔ P2: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Bouncers ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P1: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P4: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Bouncers ↔ P2: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: HR ↔ Shop: Hangers-On | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: HR ↔ Shop: Extra Hand | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P2: Scouts ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Bouncers ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Scouts ↔ P1: Deprogrammers | DEAD | 32 | 3% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P3: Party Crasher ↔ P1: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Bouncers ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Timekeepers ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: HR ↔ Shop: Extra Hand | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Polisher ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Scouts ↔ Shop: Alchemists | DEAD | 21 | 5% | 0% | 0% | – | – | – | 31.3 | 0% (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P4: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P4: Drifters ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P3: Alchemists ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ P4: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Drifters ↔ P2: Volunteer | DEAD | 25 | 8% | 0% | 0% | – | – | – | 29.7 | 50% (0/1) | – | 13/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Drifters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 18/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Scouts ↔ P2: Dabblers | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 30/0%/0% |
| trade:P4: Drifters ↔ P2: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P4: Caravan ↔ Shop: Extra Hand | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Panel ↔ Shop: Big Tent | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Panel ↔ Shop: Customs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Panel ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Stunt Double ↔ P2: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P1: Stunt Double ↔ P3: Roadie | DEAD | 21 | 5% | 0% | 0% | – | – | – | 40.1 | 100% (0/1) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Agents ↔ P3: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Agents ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Recluse ↔ P3: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Dabblers ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P4: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ P3: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ P4: Volunteer | DEAD | 30 | 3% | 0% | 0% | – | – | – | 17.6 | 0% (0/0) | – | 7/0%/0% | 23/0%/0% |
| trade:P2: Dabblers ↔ Shop: Gardener | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.2 | 100% (0/1) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Party Crasher | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P1: Triplets | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 28/0%/0% |
| trade:P3: Busker ↔ P4: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P1: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P4: Party Crasher ↔ P1: Polisher | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P4: Party Crasher ↔ P2: Dabblers | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 26/0%/0% |
| trade:P4: Party Crasher ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Gardener | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P1: Triplets ↔ P4: Agents | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P1: Polisher ↔ P4: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Busker ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P4: Agents | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P2: Dabblers ↔ P4: Agents | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 20/0%/0% |
| trade:P4: Agents ↔ Shop: Old Maid | DEAD | 27 | 4% | 0% | 0% | – | – | – | 28.2 | 0% (0/0) | – | 17/0%/0% | 10/0%/0% |
| trade:P4: Agents ↔ P1: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P4: Agents ↔ P2: Dabblers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 18/0%/0% |
| trade:P1: Gardener ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Gardener ↔ P4: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 9.4 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: HR ↔ Shop: Mentor & Protégés | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: HR ↔ Shop: Wallflower | DEAD | 16 | 6% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P1: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Doppelganger ↔ P4: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: HR ↔ Shop: Wallflower | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Roadie ↔ P3: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Polisher ↔ P3: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Volunteer ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Chronicler | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Stunt Double ↔ P4: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Agents ↔ P3: Volunteer | DEAD | 25 | 4% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P4: Mentor & Protégés ↔ Shop: Debt Collectors | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ P4: Roadie | DEAD | 29 | 3% | 0% | 0% | – | – | – | 1.6 | 100% (0/1) | – | 9/0%/0% | 20/0%/0% |
| trade:P2: Dabblers ↔ P4: Roadie | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 18/0%/0% |
| trade:P4: Roadie ↔ P2: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 16/0%/0% |
| trade:P2: Proselytizers ↔ Shop: Anarchist | DEAD | 15 | 7% | 0% | 0% | – | – | – | 14.5 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ P3: Dabblers | DEAD | 28 | 7% | 0% | 0% | – | – | – | 9.4 | 50% (0/1) | – | 11/0%/0% | 17/0%/0% |
| trade:P1: Polisher ↔ P3: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P1: Polisher ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Con Men ↔ P3: Doppelganger | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ P3: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P4: Agents | DEAD | 18 | 6% | 0% | 0% | – | – | – | 7.0 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Loyalists ↔ Shop: Muse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 40.2 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Loyalists ↔ P4: Agents | DEAD | 15 | 7% | 0% | 0% | – | – | – | 10.1 | 100% (0/1) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P1: Triplets | DEAD | 26 | 4% | 0% | 0% | – | – | – | 10.6 | 0% (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P1: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P1: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P4: Agents | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 23/0%/0% |
| trade:P3: Scouts ↔ P4: Drifters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P4: Party Crasher ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Agents ↔ P3: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P4: Mentor & Protégés ↔ Shop: Extra Hand | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Drifters ↔ P1: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Drifters ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| choose member:P4's Bouncers (4) | DEAD | 25 | 8% | 0% | 0% | – | – | – | 8.2 | 100% (0/2) | – | – | 25/0%/0% |
| trade:P3: Loyalists ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ Shop: Chronicler | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Loyalists ↔ P1: Party Crasher | DEAD | 17 | 6% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ Shop: Alchemists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P3: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Agents ↔ P2: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Muse ↔ P3: Busker | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P1: Muse ↔ P3: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Kingpin ↔ P3: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Loyalists ↔ P3: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P3: Roadie | DEAD | 23 | 4% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P3: Busker ↔ P1: Muse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P1: Kingpin ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P3: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Accomplice ↔ Shop: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 13.9 | 100% (0/1) | – | 11/0%/0% | 5/0%/0% |
| trade:P3: Accomplice ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Muse ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P3: Agents ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ Shop: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Chronicler ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| choose member:P3's Agents (3) | DEAD | 21 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | – | 21/0%/0% |
| trade:P1: Window Shopper ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Grifter ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Agents | DEAD | 28 | 4% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P2: Stunt Double ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Stunt Double ↔ P3: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P3: Chronicler | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ P1: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P3: Agents ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P3: Agents ↔ P4: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 9/0%/0% |
| trade:P3: Chronicler ↔ P1: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P3: Chronicler ↔ P2: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Snobs ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Party Crasher ↔ P4: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P2: Cutpurse ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Line Cutters ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Patriarch ↔ P1: Muse | DEAD | 18 | 6% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Triplets ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Gardener ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P4: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 23/0%/0% |
| trade:P3: Busker ↔ P4: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Volunteer ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Drifters ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Regular | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Accomplice | DEAD | 23 | 4% | 0% | 0% | – | – | – | 26.5 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P4: Dabblers ↔ P1: Drifters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Drifters ↔ P4: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Cutpurse ↔ P4: Recruit Bonus | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Volunteer | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P3: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P4: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P4: Recruit Bonus | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Cutpurse ↔ P2: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 9/0%/0% |
| trade:P3: Trendsetters ↔ P2: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Trendsetters ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| choose member:P3's Volunteer (1) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Accomplice ↔ P3: Cutpurse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 13.2 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Cutpurse ↔ P1: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Ringleader ↔ Shop: Tastemaker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Doormen ↔ P3: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Patriarch ↔ Shop: Go-Between | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P3: Patriarch ↔ Shop: Tastemaker | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Polisher ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P4: Scouts ↔ P1: Polisher | DEAD | 25 | 4% | 0% | 0% | – | – | – | 18.4 | 0% (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P4: Bouncers ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Bouncers ↔ Shop: Shift Crew | DEAD | 20 | 5% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ P3: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ Shop: Early Birds | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Bouncers ↔ P1: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Con Men ↔ Shop: Clockmakers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Sticky Fingers ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P1: Volunteer | DEAD | 37 | 3% | 0% | 0% | – | – | – | 3.0 | 100% (0/1) | – | 12/0%/0% | 25/0%/0% |
| trade:P3: Polisher ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 26.2 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Bouncers ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Volunteer ↔ P2: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P1: Volunteer ↔ P4: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Volunteer ↔ P4: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Volunteer ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ Shop: Clockmakers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P4: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Bouncers ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Doppelganger ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Fan Club ↔ Shop: Shift Crew | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Scouts ↔ P4: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ P4: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P4: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P4: Chronicler ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| choose member:P2's Alchemists (5) | DEAD | 26 | 8% | 0% | 0% | – | – | – | 18.7 | 0% (0/0) | – | – | 26/0%/0% |
| choose member:P2's Drifters (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Triplets ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Triplets ↔ P3: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Line Cutters ↔ P4: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P3: Polisher ↔ P4: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Gardener ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Drifters ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P4: Gardener | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Gardener ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Window Shopper ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P4: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P3: Scouts ↔ P4: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P4: Triplets ↔ P3: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Triplets ↔ P3: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P1: Con Men ↔ P2: Window Shopper | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Con Men ↔ P3: Snobs | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Con Men ↔ Shop: Customs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Big Tent | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P3: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P1: Loyalists ↔ P3: Scouts | DEAD | 38 | 3% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 8/0%/0% | 30/0%/0% |
| trade:P1: Loyalists ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Loyalists ↔ P4: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Panel ↔ Shop: Tastemaker | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 18/0%/0% |
| trade:P4: Regular ↔ P2: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Drifters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 5.1 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Dabblers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 24/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 23/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Trendsetters ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Patriarch ↔ Shop: Customs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Patriarch ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P2: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Drifters ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Critic ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Critic ↔ P3: Regular | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Regular ↔ P2: Critic | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| choose member:P3's Gardener (3) | DEAD | 23 | 4% | 0% | 0% | – | – | – | 13.0 | 100% (0/1) | – | 1/0%/0% | 22/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Recluse ↔ P3: Shopkeeper | DEAD | 18 | 6% | 0% | 0% | – | – | – | 8.1 | 100% (0/1) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Recluse | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.4 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| choose member:P4's Triplets (3) | DEAD | 19 | 5% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 11.7 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Triplets ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P4: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P4: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 5/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 3/0%/0% |
| trade:P4: Loyalists ↔ P3: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P4: Loyalists ↔ P2: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Muse ↔ P2: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ P4: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Clockmakers ↔ P2: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P3: Roadie | DEAD | 25 | 4% | 0% | 0% | – | – | – | 3.7 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Muse ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Agents ↔ P4: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Loyalists ↔ P2: Party Crasher | DEAD | 17 | 6% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Loyalists ↔ P4: Recruit Bonus | DEAD | 32 | 3% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 3/0%/0% | 29/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Muse ↔ P4: Timekeepers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P4: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Busker ↔ P4: Timekeepers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Anarchist ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Bouncers ↔ P4: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Loyalists ↔ P4: Timekeepers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P4: Con Men ↔ Shop: Chronicler | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Party Crasher ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Timekeepers ↔ P1: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Timekeepers ↔ P2: Deprogrammers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 22/0%/0% |
| trade:P1: Muse ↔ P4: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P1: Patriarch ↔ P4: Timekeepers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Alchemists ↔ P3: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Recluse ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Extortionist ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 42 | 2% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 16/0%/0% | 26/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Dabblers | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 24/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Trendsetters ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Trendsetters ↔ P4: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P2: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Gardener | DEAD | 15 | 7% | 0% | 0% | – | – | – | 48.2 | 0% (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Gardener | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P4: Gardener ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P4: Drifters ↔ P2: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ Shop: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P3: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Gardener ↔ Shop: Triplets | DEAD | 20 | 5% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| choose member:P2's Regular (3) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Fan Club ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Agents ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ P4: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P2: Toastmaster ↔ P3: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P1: Sticky Fingers ↔ P3: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Accomplice | DEAD | 20 | 5% | 0% | 0% | – | – | – | 5.2 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Critic ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Accomplice ↔ P2: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Cutpurse ↔ P3: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Patriarch ↔ Shop: Gift Wrapper | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 27/0%/0% |
| trade:P3: Polisher ↔ P4: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| choose member:P4's Stunt Double (5) | DEAD | 34 | 3% | 0% | 0% | – | – | – | 24.0 | 0% (0/0) | – | 1/0%/0% | 33/0%/0% |
| trade:P4: Bouncers ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Go-Between ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Go-Between ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Volunteer ↔ P2: Line Cutters | DEAD | 30 | 7% | 0% | 0% | – | – | – | 11.7 | 0% (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P2: Line Cutters ↔ P3: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Accomplice ↔ P2: Line Cutters | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ P1: Volunteer | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 33/0%/0% |
| trade:P1: Volunteer ↔ P3: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ P3: Accomplice | DEAD | 30 | 3% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P3: Accomplice ↔ P1: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P1: Con Men ↔ Shop: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Con Men ↔ P2: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Triplets ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P3: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P3: Recruit Bonus | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Dabblers | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 15/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P3: Alchemists ↔ P4: Party Crasher | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 23/0%/0% |
| trade:P1: Con Men ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P3: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P4: Early Birds | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Gardener ↔ Shop: Go-Between | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Agents ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P4: Line Cutters | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 25/0%/0% | 15/0%/0% |
| trade:P2: Scouts ↔ P4: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Agents ↔ P2: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P3: Chronicler | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P4: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P3: Chronicler ↔ P1: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P4: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 7/0%/0% |
| trade:P3: Busker ↔ P4: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Stunt Double ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Muse ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P3: Roadie | DEAD | 31 | 3% | 0% | 0% | – | – | – | 45.8 | 0% (0/0) | – | 18/0%/0% | 13/0%/0% |
| trade:P2: Critic ↔ P4: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 16/0%/0% |
| trade:P3: Roadie ↔ P2: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ P4: Agents | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 15/0%/0% |
| trade:P4: Agents ↔ P3: Roadie | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 11/0%/0% |
| trade:P4: Stunt Double ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Collector ↔ P3: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P3: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Accomplice ↔ P1: Polisher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 23/0%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 21/0%/0% |
| trade:P3: Toastmaster ↔ P2: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Loyalists ↔ Shop: Sticky Fingers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Cutpurse | DEAD | 26 | 4% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P3: Stunt Double ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Patriarch ↔ P1: Alchemists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Muse ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Muse ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Muse ↔ P4: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Muse ↔ P4: Timekeepers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Timekeepers ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Con Men ↔ P4: Fan Club | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Shift Crew | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P2: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Connoisseurs ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Polisher ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: HR ↔ Shop: Extra Hand | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P2: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Gardener ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Window Shopper ↔ P3: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Regular | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Regular | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ P4: Panel | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Panel ↔ P1: Con Men | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P1: Bouncers ↔ P4: Triplets | DEAD | 17 | 6% | 0% | 0% | – | – | – | 30.4 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ Shop: Hot Streak | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Bouncers ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Alchemists ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Critic ↔ P1: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Loyalists ↔ Shop: Closer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P1: Drifters ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Gardener ↔ P1: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Gardener ↔ P4: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P4: Agents ↔ P2: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Drifters ↔ P2: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Gardener ↔ P3: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P2: Gardener ↔ P4: Chronicler | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ P2: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Window Dressers ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P4: Agents ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Chronicler ↔ Shop: Muse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P4: Chronicler ↔ P2: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Chronicler ↔ P3: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Chronicler ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Stunt Double ↔ P2: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Stunt Double ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Stunt Double ↔ P3: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Stunt Double ↔ P4: Doppelganger | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P2: Muse ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Muse ↔ P1: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Muse ↔ P3: Busker | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P2: Muse ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Muse ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P2: Muse | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Window Shopper ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Critic | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Doormen ↔ P4: Chronicler | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Doppelganger ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Doppelganger ↔ P1: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Chronicler ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Chronicler ↔ P1: Stunt Double | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Chronicler ↔ P3: Doormen | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Anarchist ↔ Shop: Tastemaker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Fan Club ↔ P4: Doppelganger | DEAD | 18 | 6% | 0% | 0% | – | – | – | 29.5 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Anarchist ↔ Shop: Harmonist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Anarchist ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Patriarch ↔ Shop: Customs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Patriarch ↔ P3: Busker | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Patriarch ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Patriarch ↔ Shop: Tastemaker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Triplets ↔ P4: Recruit Bonus | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 26/0%/0% |
| trade:P2: Loyalists ↔ P4: Chronicler | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P3: Alchemists ↔ P4: Agents | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Agents | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P4: Agents ↔ P3: Deprogrammers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 12/0%/0% |
| trade:P4: Chronicler ↔ P1: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Chronicler ↔ P2: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Go-Between ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Busker ↔ P3: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Trendsetters ↔ P1: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P3: Trendsetters ↔ P1: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Stunt Double ↔ P3: Loyalists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Fan Club ↔ P3: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P2: Con Men ↔ P4: Doppelganger | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Loyalists ↔ P1: Stunt Double | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Loyalists ↔ P4: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Triplets ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Roadie ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Roadie ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Triplets ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Doppelganger ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ Shop: Shift Crew | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 4/0%/0% |
| trade:P4: Busker ↔ P2: Line Cutters | DEAD | 23 | 4% | 0% | 0% | – | – | – | 14.2 | 100% (0/1) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P2: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P1: Scouts ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Cutpurse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Chronicler ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Chronicler ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Chronicler ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Cutpurse ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Chronicler ↔ P4: Loyalists | DEAD | 18 | 6% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Loyalists ↔ P1: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P3: Chronicler | DEAD | 18 | 6% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Drifters ↔ P4: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Stunt Double ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Stunt Double ↔ P3: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 20/0%/0% |
| trade:P1: Loyalists ↔ P2: Stunt Double | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P1: Drifters ↔ P2: Dabblers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 20.5 | 100% (0/1) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recluse ↔ Shop: Go-Between | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Recluse ↔ P2: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P3: Agents ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ P1: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Recluse ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Stunt Double ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ Shop: Brokers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ Shop: Doppelganger | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Recluse ↔ P4: Recruit Bonus | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Doppelganger ↔ P1: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Recluse ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 4/0%/0% |
| trade:P2: Agents ↔ P4: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Volunteer ↔ P4: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 12.3 | 100% (0/1) | – | 11/0%/0% | 5/0%/0% |
| trade:P4: Early Birds ↔ P3: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Stunt Double ↔ P3: Roadie | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Party Crasher ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Early Birds ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Party Crasher ↔ P4: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Recluse ↔ P3: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Gardener ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Drifters ↔ P3: Gardener | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P3: Gardener ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Gardener ↔ P2: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P2: Drifters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Polisher ↔ P4: Toastmaster | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Gardener ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Dabblers ↔ P4: Loyalists | DEAD | 23 | 4% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P1: Con Men ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P3: Recruit Bonus | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 26/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Line Cutters | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 26/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Dabblers | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 25/0%/0% |
| trade:P3: Bouncers ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P1: Martyrs ↔ P2: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.4 | 100% (0/1) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P3: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ Shop: Clockmakers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P1: Dabblers ↔ P2: Volunteer | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 17/0%/0% |
| trade:P2: Bouncers ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P2: Dabblers ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ P2: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Recluse ↔ P4: Martyrs | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 55 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 25/0%/0% | 30/0%/0% |
| trade:P4: Martyrs ↔ P1: Recluse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Recluse ↔ P2: Shopkeeper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Recluse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Gardener ↔ P4: Drifters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P3: Roadie | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 14/0%/0% |
| trade:P2: Kingpin ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P3: Roadie ↔ P2: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P2: Chronicler ↔ P4: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Toastmaster ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P3: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Cutpurse ↔ P2: Volunteer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ P3: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P4: Party Crasher ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ P3: Roadie | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P2: Busker ↔ P1: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ Shop: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P3: Roadie ↔ P1: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P3: Deprogrammers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P3: Polisher ↔ P2: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 7/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Toastmaster ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Triplets ↔ P2: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 31/0%/0% |
| trade:P2: Toastmaster ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Bouncers ↔ P4: Timekeepers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Doppelganger ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Muse | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P1: Chronicler ↔ P3: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Hot Streak | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Early Birds ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Loyalists ↔ Shop: Clockmakers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Regular | DEAD | 19 | 5% | 0% | 0% | – | – | – | 18.1 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| choose member:P3's Doppelganger (5) | DEAD | 19 | 5% | 0% | 0% | – | – | – | 10.5 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Timekeepers ↔ P4: Bouncers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P4: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Bouncers ↔ P1: Timekeepers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Early Birds ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Early Birds | DEAD | 16 | 6% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Patriarch ↔ Shop: Hot Streak | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| trade:P3: Patriarch ↔ Shop: Collector | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Bouncers ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Polisher ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P4: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Panel ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Panel ↔ Shop: Harmonist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Connoisseurs ↔ Shop: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Gardener ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Roadie ↔ P3: Busker | DEAD | 20 | 5% | 0% | 0% | – | – | – | 9.3 | 100% (0/1) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Agents ↔ P3: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Doppelganger ↔ P3: Trendsetters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Recluse ↔ Shop: Cashier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P1: Volunteer | DEAD | 23 | 4% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Volunteer ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Recluse ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Agents ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Panel ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Collector ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P2: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P2: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Drifters ↔ P3: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Volunteer ↔ P3: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P1: Volunteer | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Agents ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Martyrs ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Agents | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P2: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Chronicler ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Cutpurse ↔ P3: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 11.1 | 0% (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Bouncers ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Early Birds ↔ P1: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ P4: Busker | DEAD | 19 | 5% | 0% | 0% | – | – | – | 3.0 | 100% (0/1) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Doppelganger ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P3: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Busker ↔ Shop: Muse | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 11/0%/0% |
| trade:P4: Bouncers ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 3/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P2: Agents ↔ P1: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P2: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 17/0%/0% |
| trade:P3: Go-Between ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P3: Deprogrammers | DEAD | 34 | 3% | 0% | 0% | – | – | – | 2.6 | 0% (0/0) | – | 19/0%/0% | 15/0%/0% |
| trade:P2: Agents ↔ P3: Deprogrammers | DEAD | 40 | 3% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 18/0%/0% | 22/0%/0% |
| trade:P2: Dabblers ↔ P3: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Roadie | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Agents | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 19/0%/0% |
| trade:P1: Loyalists ↔ P2: Roadie | DEAD | 23 | 4% | 0% | 0% | – | – | – | 29.4 | 0% (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P4: Busker ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P2: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P2: Window Shopper ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P2: Roadie | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.4 | 100% (0/1) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ P3: Fan Club | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Agents ↔ Shop: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Doppelganger ↔ P4: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P2: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Busker ↔ P2: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ P3: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Alchemists ↔ P2: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Dabblers ↔ P3: Critic | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P3: Critic ↔ P2: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Critic ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Chronicler ↔ P3: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Muse ↔ Shop: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Roadie ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Toastmaster ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Muse ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Recluse ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P2: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 9.4 | 100% (0/1) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Accomplice ↔ P4: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ P2: Line Cutters | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 15/0%/0% |
| trade:P4: Agents ↔ P3: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Timekeepers ↔ P1: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ P2: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Busker ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 4/0%/0% |
| trade:P1: Muse ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Busker ↔ Shop: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Party Crasher | DEAD | 25 | 4% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Busker ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Timekeepers ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Dabblers ↔ P3: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P4: Timekeepers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Timekeepers ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Chronicler ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Doppelganger ↔ P4: Chronicler | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Doppelganger ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Chronicler ↔ P3: Doppelganger | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Alchemists ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Patriarch ↔ P4: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Busker ↔ P1: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Go-Between ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Go-Between ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P3: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Doppelganger ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Go-Between ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Chronicler ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Scouts ↔ P1: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Con Men ↔ P4: Chronicler | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Doppelganger ↔ P4: Stunt Double | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Stunt Double ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Grifter ↔ Shop: Bodyguards | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P3: Panel ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Kingpin ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ P4: Loyalists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Busker ↔ P2: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ Shop: Hot Streak | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Patriarch ↔ Shop: Clockmakers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Drifters ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P2: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Drifters ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Recluse ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P1: Loyalists ↔ P2: Party Crasher | DEAD | 21 | 5% | 0% | 0% | – | – | – | 23.8 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Stunt Double ↔ P4: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Stunt Double ↔ P1: Loyalists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Roadie ↔ P1: Deprogrammers | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 28/0%/0% |
| trade:P1: Timekeepers ↔ P4: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Toastmaster ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Bouncers ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P1: Timekeepers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Polisher ↔ P2: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Early Birds ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Triplets ↔ P2: Early Birds | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Early Birds ↔ P1: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Loyalists ↔ P1: Toastmaster | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Gardener ↔ P4: Drifters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P4: Drifters ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Patriarch ↔ P3: Martyrs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Agents ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ P1: Scouts | DEAD | 22 | 5% | 0% | 0% | – | – | – | 23.9 | 0% (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P1: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 31.4 | 0% (0/0) | – | 18/0%/0% | 11/0%/0% |
| trade:P1: Muse ↔ P2: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Triplets ↔ P2: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Drifters ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Doppelganger ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P3: Agents ↔ P2: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Harmonist | DEAD | 23 | 4% | 0% | 0% | – | – | – | 1.7 | 0% (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Doppelganger ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Doormen ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P1: Loyalists ↔ Shop: Raiders | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Regular ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Trendsetters ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Drifters ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P3: Roadie ↔ P4: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Cutpurse ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Timekeepers ↔ P1: Bouncers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Timekeepers ↔ P1: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P3: Shift Crew ↔ P4: Timekeepers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Patriarch ↔ P4: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Scouts ↔ P2: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 5/0%/0% |
| trade:P2: Accomplice ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Roadie ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ P4: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Roadie ↔ P3: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Stunt Double ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Busker ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Early Birds ↔ P1: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 3.8 | 0% (0/0) | – | 15/0%/0% | 14/0%/0% |
| trade:P1: Hot Streak ↔ Shop: Closer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Timekeepers ↔ P1: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Early Birds ↔ P1: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P3: Roadie | DEAD | 49 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 25/0%/0% |
| trade:P1: Bouncers ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Muse ↔ P3: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P1: Bouncers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Timekeepers ↔ P2: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 22.0 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P2: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Stunt Double ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P3: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Agents | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 21/0%/0% |
| trade:P4: Agents ↔ P1: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 18/0%/0% |
| trade:P2: Roadie ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Busker ↔ P1: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Accomplice ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Early Birds ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Stunt Double ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Go-Between ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Roadie ↔ P1: Dabblers | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 23/0%/0% |
| trade:P1: Kingpin ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Window Shopper ↔ P1: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Trendsetters ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Agents ↔ P2: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Drifters ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.9 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Trendsetters ↔ P2: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Doormen ↔ P2: Agents | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ P3: Kingpin | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 3/0%/0% |
| trade:P3: Kingpin ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 3/0%/0% |
| trade:P3: Chronicler ↔ P4: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Polisher ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Muse ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Early Birds ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |

(46511 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 3585 | 16% | 2946 | 21% |
| benders | 0 | – | 2317 | 18% |
| market | 3652 | 15% | 3568 | 18% |
| trading | 3813 | 14% | 3004 | 16% |
| silver | 3789 | 15% | 3181 | 15% |
| yellow | 3444 | 15% | 2968 | 12% |
| red | 3597 | 13% | 3723 | 11% |
| thieves | 3855 | 14% | 3814 | 10% |
| echo | 3588 | 13% | 3802 | 10% |
