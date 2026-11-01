# Choice report

37586 looked-ahead decisions from 378 games (/mnt/project-files/balance-1.0/merged/hard.choices). 15% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| purple: Crowd In | AUTO-PICK | 1391 | 27% | 13% | 3% | 68% | 19% | 1% | 9.7 | 48% (98/67) | – | – | 1391/13%/3% |
| purple: Sleep In | AUTO-PICK | 3768 | 35% | 14% | 3% | 64% | 15% | 3% | 13.2 | 43% (231/314) | 794/21%/5% | 1242/15%/2% | 1732/10%/4% |
| market: Peek | AUTO-PICK | 4806 | 25% | 11% | 3% | 57% | 9% | 12% | 11.3 | 38% (292/148) | 1353/13%/5% | 1716/10%/2% | 1737/9%/3% |
| red: Promote | AUTO-PICK | 1308 | 50% | 28% | 3% | 85% | 48% | 0% | 14.5 | 46% (98/123) | – | 678/29%/3% | 630/28%/4% |
| yellow: Harvest | AUTO-PICK | 4107 | 25% | 12% | 3% | 71% | 41% | 9% | 10.7 | 40% (174/151) | 302/59%/2% | 1442/11%/3% | 2363/7%/3% |
| thieves: Poach | AUTO-PICK + MISJUDGED | 907 | 40% | 24% | 3% | 80% | 44% | 1% | 11.4 | 51% (69/66) | – | – | 907/24%/3% |
| market: Bury | AUTO-PICK | 3364 | 26% | 10% | 3% | 64% | 11% | 9% | 11.6 | 43% (163/191) | – | 1176/15%/3% | 2188/7%/3% |
| echo: Cover | AUTO-PICK | 2711 | 28% | 13% | 3% | 74% | 26% | 4% | 12.8 | 49% (123/200) | – | 1402/12%/3% | 1309/13%/3% |
| thieves: Help Yourself | AUTO-PICK | 2403 | 42% | 24% | 3% | 84% | 56% | 1% | 12.2 | 45% (121/184) | 218/87%/2% | 794/25%/3% | 1391/14%/3% |
| silver: Largesse | AUTO-PICK + MISJUDGED | 1445 | 26% | 13% | 3% | 67% | 14% | 0% | 10.7 | 50% (94/83) | – | – | 1445/13%/3% |
| red: Recruit a Member | AUTO-PICK | 1345 | 24% | 12% | 3% | 69% | 31% | 7% | 11.4 | 46% (60/62) | – | – | 1345/12%/3% |
| silver: Toast | AUTO-PICK | 4911 | 27% | 10% | 3% | 65% | 27% | 13% | 12.2 | 43% (188/330) | 1585/10%/3% | 1819/10%/2% | 1507/12%/3% |
| echo: Build Up | AUTO-PICK | 4507 | 26% | 11% | 3% | 68% | 27% | 6% | 12.0 | 45% (219/241) | 816/21%/4% | 1678/10%/2% | 2013/8%/3% |
| thieves: Crime Wave | AUTO-PICK | 3048 | 27% | 13% | 3% | 73% | 26% | 2% | 12.4 | 43% (154/153) | – | 1633/13%/2% | 1415/13%/3% |
| purple: Last Call | AUTO-PICK | 2322 | 31% | 14% | 2% | 67% | 1% | 1% | 12.6 | 46% (162/175) | – | 1205/12%/2% | 1117/15%/3% |
| echo: Echo | AUTO-PICK + MISJUDGED | 2341 | 34% | 23% | 2% | 86% | 55% | 1% | 13.2 | 50% (124/136) | 428/41%/3% | 844/22%/2% | 1069/16%/3% |
| thieves: Stash | AUTO-PICK | 5247 | 24% | 11% | 2% | 67% | 22% | 8% | 12.0 | 44% (262/241) | 1126/17%/3% | 1901/10%/2% | 2220/8%/2% |
| yellow: Big Dilute | AUTO-PICK | 2841 | 25% | 12% | 2% | 73% | 32% | 6% | 11.1 | 45% (126/139) | – | 1064/17%/2% | 1777/9%/3% |
| market: Spree | AUTO-PICK | 1518 | 27% | 12% | 2% | 66% | 28% | 0% | 11.4 | 47% (71/99) | – | – | 1518/12%/2% |
| yellow: Melting Pot | AUTO-PICK | 3323 | 23% | 10% | 2% | 69% | 23% | 6% | 11.3 | 42% (141/147) | – | 1399/13%/2% | 1924/9%/3% |
| red: Walk-In | AUTO-PICK | 3524 | 27% | 14% | 2% | 79% | 52% | 7% | 12.9 | 42% (99/204) | 1003/16%/3% | 954/18%/1% | 1567/10%/2% |
| trading: Estate Sale | AUTO-PICK | 3455 | 25% | 11% | 2% | 75% | 31% | 4% | 12.0 | 41% (125/172) | – | 1577/13%/2% | 1878/10%/2% |
| red: Demote | AUTO-PICK | 2363 | 28% | 14% | 2% | 81% | 41% | 2% | 14.0 | 46% (108/129) | – | 1136/15%/2% | 1227/13%/1% |
| echo: Reprise | AUTO-PICK | 3877 | 23% | 14% | 2% | 84% | 51% | 1% | 12.6 | 45% (114/155) | 1119/16%/1% | 1304/14%/1% | 1454/12%/2% |
| market: Savings | MIXED | 7040 | 15% | 5% | 3% | 42% | 12% | 29% | 8.6 | 32% (225/106) | 1356/12%/4% | 2581/4%/3% | 3103/4%/3% |
| purple: Hold Up | MIXED | 6314 | 19% | 7% | 3% | 50% | 13% | 26% | 10.6 | 35% (252/138) | 1175/15%/4% | 2289/6%/2% | 2850/5%/4% |
| market: Out of Style | MIXED | 5522 | 21% | 8% | 3% | 58% | 8% | 14% | 11.0 | 42% (232/250) | 751/23%/5% | 1968/8%/2% | 2803/5%/2% |
| red: Tryout | MIXED | 4796 | 18% | 8% | 3% | 66% | 32% | 16% | 10.3 | 39% (160/115) | 759/20%/5% | 1482/9%/2% | 2555/4%/3% |
| silver: Party Favors | MIXED | 3924 | 21% | 9% | 2% | 64% | 25% | 8% | 12.2 | 44% (151/163) | – | 1436/13%/2% | 2488/7%/3% |
| thieves: Shake Down | MIXED | 3834 | 22% | 9% | 2% | 69% | 28% | 7% | 11.6 | 41% (144/152) | – | 1405/14%/2% | 2429/7%/2% |
| market: Recruit Twice | MIXED | 4962 | 14% | 5% | 2% | 65% | 34% | 16% | 9.5 | 36% (110/103) | – | 2591/3%/2% | 2371/7%/2% |
| trading: Allowance | MIXED | 5589 | 20% | 9% | 2% | 67% | 19% | 11% | 11.1 | 41% (244/172) | 1097/17%/3% | 2166/8%/2% | 2326/7%/2% |
| trading: Farewell | MIXED | 5180 | 15% | 6% | 2% | 57% | 23% | 16% | 10.8 | 45% (128/177) | – | 2642/5%/2% | 2538/8%/2% |
| echo: Encore | MIXED | 4035 | 15% | 7% | 2% | 68% | 37% | 15% | 10.9 | 42% (102/105) | – | 1798/8%/1% | 2237/7%/3% |
| silver: Sweet Talk | MIXED | 4604 | 16% | 7% | 2% | 66% | 32% | 15% | 10.8 | 41% (121/138) | – | 1883/9%/1% | 2721/6%/2% |
| silver: Party Gifts | MIXED | 6509 | 17% | 7% | 2% | 58% | 19% | 18% | 10.6 | 43% (218/216) | 1625/10%/3% | 2627/5%/2% | 2257/8%/2% |
| red: Gather | MIXED | 5768 | 15% | 7% | 2% | 61% | 23% | 23% | 9.4 | 37% (180/106) | 1139/13%/4% | 2194/5%/1% | 2435/5%/2% |
| echo: Greatest Hits | MIXED | 3155 | 7% | 4% | 2% | 60% | 8% | 46% | 5.9 | 49% (78/22) | – | – | 3155/4%/2% |
| thieves: Lie Low | MIXED | 7604 | 12% | 5% | 2% | 64% | 28% | 27% | 8.6 | 43% (183/149) | 1415/13%/2% | 2744/4%/1% | 3445/3%/2% |
| yellow: Trade Seeds | MIXED | 7001 | 11% | 4% | 2% | 59% | 22% | 26% | 10.4 | 38% (108/171) | 1026/16%/4% | 2685/2%/1% | 3290/2%/2% |
| silver: Polish | MIXED | 7896 | 10% | 4% | 2% | 58% | 33% | 40% | 9.2 | 38% (133/112) | 1750/10%/2% | 2689/3%/0% | 3457/3%/2% |
| yellow: Dilute | MIXED | 6423 | 13% | 6% | 1% | 69% | 28% | 18% | 10.1 | 40% (156/136) | 1133/15%/2% | 2322/5%/1% | 2968/4%/2% |
| trading: Exchange | MIXED | 8020 | 9% | 3% | 1% | 50% | 16% | 49% | 8.4 | 38% (113/157) | 1981/4%/2% | 3006/1%/1% | 3033/5%/2% |
| yellow: Makeover | MIXED | 2955 | 8% | 4% | 1% | 61% | 24% | 34% | 8.6 | 40% (46/35) | – | – | 2955/4%/1% |
| purple: Right Away | FILLER | 7811 | 11% | 4% | 3% | 30% | 13% | 60% | 7.1 | 29% (162/79) | 1806/6%/2% | 2706/2%/3% | 3299/4%/4% |
| purple: Crunch Time | DEAD | 6218 | 9% | 2% | 3% | 24% | 8% | 65% | 6.2 | 28% (82/73) | – | 2700/2%/3% | 3518/3%/3% |
| trading: Splurge | DEAD | 8578 | 7% | 3% | 1% | 39% | 19% | 60% | 7.4 | 36% (140/60) | 1848/8%/3% | 3018/0%/0% | 3712/2%/2% |
| trading: Cash In | DEAD | 3591 | 8% | 2% | 1% | 58% | 32% | 41% | 7.2 | 35% (24/63) | – | – | 3591/2%/1% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dabblers (benders) | REAL CHOICE | 1733 | 56% | 19% | 10% | 48% | 9% | 1% | 10.8 | 35% (136/193) | 1112/14%/11% | 283/37%/10% | 338/20%/7% |
| Scouts (benders) | REAL CHOICE | 2173 | 50% | 14% | 10% | 39% | 5% | 1% | 9.5 | 36% (143/237) | 1196/12%/13% | 338/30%/11% | 639/10%/5% |
| Volunteer (red) | AUTO-PICK | 626 | 56% | 22% | 11% | 55% | 3% | 6% | 10.1 | 43% (65/83) | 314/26%/15% | 118/25%/13% | 194/13%/5% |
| Line Cutters (benders) | AUTO-PICK | 1100 | 75% | 31% | 9% | 66% | 24% | 3% | 12.1 | 38% (68/215) | 688/31%/9% | 195/41%/9% | 217/22%/6% |
| Recruit Bonus (red) | AUTO-PICK | 962 | 44% | 14% | 9% | 52% | 4% | 0% | 9.5 | 35% (58/88) | 507/11%/11% | 162/27%/10% | 293/13%/4% |
| Timekeepers (purple) | AUTO-PICK | 956 | 46% | 16% | 8% | 57% | 14% | 0% | 9.7 | 37% (62/95) | 470/8%/9% | 250/20%/6% | 236/25%/10% |
| Shopkeeper (trading) | AUTO-PICK | 356 | 77% | 48% | 7% | 70% | 29% | 0% | 9.7 | 42% (32/62) | 134/71%/9% | 87/57%/9% | 135/19%/4% |
| Roadie (echo) | AUTO-PICK | 379 | 75% | 44% | 7% | 79% | 22% | 1% | 11.1 | 43% (51/56) | 242/49%/7% | 54/52%/4% | 83/27%/7% |
| Polisher (silver) | AUTO-PICK | 1113 | 34% | 13% | 7% | 59% | 3% | 3% | 8.8 | 41% (94/58) | 530/13%/10% | 182/27%/4% | 401/6%/3% |
| Window Dressers (market) | AUTO-PICK | 881 | 47% | 17% | 7% | 54% | 7% | 1% | 11.4 | 33% (48/87) | 277/12%/10% | 277/20%/6% | 327/19%/5% |
| Bouncers (purple) | AUTO-PICK | 1074 | 41% | 13% | 6% | 53% | 6% | 0% | 11.3 | 37% (82/76) | 483/10%/6% | 202/21%/8% | 389/12%/5% |
| Recluse (trading) | AUTO-PICK | 945 | 40% | 17% | 6% | 52% | 15% | 0% | 10.4 | 42% (56/94) | 330/8%/6% | 243/24%/5% | 372/19%/7% |
| Alchemists (benders) | AUTO-PICK | 1757 | 55% | 14% | 6% | 51% | 3% | 1% | 12.2 | 38% (134/229) | – | 785/17%/8% | 972/12%/5% |
| Chronicler (echo) | AUTO-PICK | 768 | 54% | 19% | 6% | 66% | 14% | 1% | 12.0 | 40% (64/92) | – | 412/20%/5% | 356/18%/6% |
| Brokers (trading) | AUTO-PICK | 747 | 39% | 13% | 5% | 51% | 5% | 0% | 10.3 | 37% (45/61) | – | 301/14%/8% | 446/12%/4% |
| Philanthropists (silver) | AUTO-PICK | 628 | 52% | 20% | 5% | 63% | 17% | 0% | 12.4 | 41% (51/75) | – | 243/21%/6% | 385/20%/5% |
| Snobs (market) | AUTO-PICK | 629 | 52% | 23% | 5% | 69% | 35% | 0% | 11.8 | 40% (26/82) | – | 360/17%/6% | 269/31%/5% |
| Patriarch (red) | AUTO-PICK | 496 | 49% | 25% | 5% | 69% | 31% | 0% | 11.5 | 43% (31/56) | – | 306/18%/5% | 190/37%/6% |
| High Society (silver) | AUTO-PICK | 555 | 51% | 20% | 5% | 68% | 35% | 0% | 11.2 | 41% (32/68) | – | 167/24%/4% | 388/19%/6% |
| Cutpurse (thieves) | AUTO-PICK | 476 | 63% | 36% | 5% | 82% | 53% | 2% | 12.1 | 42% (23/65) | 273/39%/5% | 71/55%/4% | 132/20%/6% |
| Drifters (yellow) | AUTO-PICK | 765 | 40% | 18% | 5% | 59% | 26% | 0% | 11.3 | 33% (37/53) | 263/25%/6% | 232/21%/6% | 270/9%/3% |
| Old Money (trading) | AUTO-PICK | 872 | 39% | 13% | 5% | 53% | 10% | 0% | 11.3 | 36% (53/66) | – | 405/12%/4% | 467/14%/6% |
| Fan Club (echo) | AUTO-PICK | 346 | 68% | 38% | 5% | 82% | 43% | 0% | 13.3 | 48% (30/56) | – | 156/52%/4% | 190/27%/5% |
| Gardener (yellow) | AUTO-PICK | 497 | 47% | 30% | 5% | 83% | 52% | 3% | 10.3 | 45% (19/52) | 137/66%/7% | 111/39%/7% | 249/7%/2% |
| Extortionist (thieves) | AUTO-PICK | 499 | 42% | 21% | 5% | 70% | 33% | 0% | 12.5 | 36% (30/32) | – | 199/28%/5% | 300/17%/5% |
| Shift Crew (purple) | AUTO-PICK | 1080 | 24% | 11% | 5% | 57% | 7% | 1% | 9.0 | 39% (57/39) | 296/2%/1% | 386/10%/5% | 398/17%/7% |
| Con Men (benders) | AUTO-PICK | 561 | 78% | 56% | 4% | 89% | 68% | 0% | 10.4 | 42% (22/71) | – | 182/88%/2% | 379/40%/6% |
| Window Shopper (market) | AUTO-PICK | 1171 | 33% | 12% | 4% | 62% | 17% | 0% | 10.5 | 37% (55/81) | – | 357/21%/6% | 814/7%/3% |
| Caravan (yellow) | AUTO-PICK | 476 | 44% | 18% | 4% | 69% | 29% | 0% | 11.6 | 35% (23/41) | – | 146/32%/4% | 330/12%/4% |
| Ringleader (yellow) | AUTO-PICK | 781 | 34% | 12% | 4% | 61% | 8% | 0% | 13.3 | 38% (46/53) | – | 371/12%/3% | 410/13%/4% |
| Doppelganger (echo) | AUTO-PICK | 678 | 38% | 20% | 4% | 67% | 19% | 0% | 12.0 | 45% (55/51) | – | 244/27%/5% | 434/16%/3% |
| Busker (echo) | AUTO-PICK | 428 | 64% | 40% | 4% | 80% | 28% | 0% | 10.9 | 43% (40/57) | 191/54%/3% | 68/62%/7% | 169/17%/2% |
| Loyalists (red) | AUTO-PICK | 719 | 44% | 14% | 3% | 69% | 7% | 2% | 12.2 | 35% (51/57) | – | 265/19%/2% | 454/11%/4% |
| Dyer (yellow) | AUTO-PICK | 523 | 43% | 19% | 3% | 76% | 27% | 0% | 10.2 | 38% (29/46) | – | 91/57%/4% | 432/11%/3% |
| HR (benders) | AUTO-PICK | 1058 | 41% | 20% | 3% | 74% | 49% | 0% | 15.7 | 42% (31/107) | – | 581/12%/2% | 477/28%/5% |
| Stunt Double (echo) | AUTO-PICK | 311 | 64% | 46% | 3% | 83% | 56% | 0% | 13.3 | 36% (12/30) | – | 123/67%/6% | 188/33%/2% |
| Mob (red) | AUTO-PICK | 167 | 63% | 35% | 3% | 90% | 76% | 0% | 15.8 | 41% (4/21) | – | 79/27%/1% | 88/42%/5% |
| Grifter (thieves) | AUTO-PICK | 515 | 45% | 25% | 3% | 87% | 54% | 0% | 11.2 | 45% (22/51) | – | 229/25%/3% | 286/24%/3% |
| Double Agent (thieves) | AUTO-PICK | 583 | 36% | 19% | 3% | 82% | 50% | 1% | 12.2 | 33% (15/35) | – | 268/16%/1% | 315/22%/4% |
| Panel (red) | AUTO-PICK | 283 | 45% | 28% | 2% | 84% | 51% | 0% | 15.1 | 41% (10/26) | – | 199/31%/2% | 84/21%/5% |
| Mentor & Protégés (red) | AUTO-PICK | 463 | 38% | 16% | 2% | 63% | 23% | 1% | 13.2 | 32% (22/29) | – | 156/14%/3% | 307/17%/2% |
| Accomplice (thieves) | AUTO-PICK | 260 | 76% | 65% | 2% | 95% | 79% | 2% | 10.6 | 41% (9/17) | 152/69%/1% | 43/86%/5% | 65/43%/3% |
| Early Birds (purple) | MIXED | 883 | 43% | 14% | 9% | 46% | 10% | 0% | 9.3 | 38% (58/83) | 308/16%/14% | 194/21%/8% | 381/9%/6% |
| Kingpin (thieves) | MIXED | 1104 | 43% | 14% | 8% | 49% | 7% | 1% | 10.9 | 37% (62/110) | 572/7%/8% | 251/24%/6% | 281/21%/10% |
| Deprogrammers (red) | MIXED | 468 | 69% | 29% | 7% | 48% | 13% | 0% | 12.2 | 39% (39/81) | 344/25%/7% | 66/39%/8% | 58/40%/9% |
| Martyrs (trading) | MIXED | 1032 | 38% | 13% | 7% | 41% | 7% | 0% | 10.5 | 34% (57/73) | 375/6%/8% | 293/22%/6% | 364/14%/7% |
| Trendsetters (market) | MIXED | 1038 | 43% | 14% | 7% | 39% | 4% | 0% | 11.1 | 35% (57/97) | 374/8%/9% | 334/19%/8% | 330/14%/4% |
| Agents (echo) | MIXED | 1023 | 40% | 15% | 7% | 49% | 7% | 1% | 10.3 | 35% (74/65) | 566/14%/8% | 169/22%/6% | 288/11%/5% |
| Critic (market) | MIXED | 1315 | 30% | 10% | 6% | 41% | 3% | 0% | 9.6 | 39% (96/57) | 482/7%/8% | 311/20%/9% | 522/7%/4% |
| Connoisseurs (market) | MIXED | 1535 | 35% | 9% | 6% | 48% | 2% | 1% | 10.7 | 26% (70/73) | 475/4%/8% | 450/15%/7% | 610/8%/4% |
| Toastmaster (silver) | MIXED | 1447 | 29% | 8% | 6% | 48% | 8% | 0% | 9.8 | 33% (73/61) | 492/9%/12% | 230/19%/4% | 725/4%/2% |
| Clockmakers (purple) | MIXED | 1070 | 30% | 7% | 5% | 29% | 0% | 0% | 10.1 | 33% (48/59) | – | 375/7%/6% | 695/7%/5% |
| Regular (market) | MIXED | 1472 | 30% | 9% | 5% | 50% | 3% | 0% | 9.3 | 32% (78/61) | 459/7%/7% | 345/13%/6% | 668/8%/3% |
| Doormen (market) | MIXED | 1256 | 36% | 10% | 5% | 53% | 2% | 0% | 10.7 | 33% (84/63) | – | 515/10%/4% | 741/10%/5% |
| Raiders (trading) | MIXED | 1141 | 26% | 7% | 4% | 46% | 0% | 0% | 12.2 | 29% (49/35) | – | 441/7%/4% | 700/7%/4% |
| Muse (echo) | MIXED | 1959 | 20% | 5% | 3% | 49% | 2% | 1% | 9.6 | 30% (71/45) | 662/3%/3% | 462/11%/4% | 835/4%/3% |
| Party Crasher (benders) | MIXED | 3606 | 22% | 6% | 3% | 57% | 0% | 0% | 9.2 | 31% (168/79) | 1513/2%/3% | 657/18%/5% | 1436/6%/2% |
| Triplets (red) | MIXED | 1457 | 20% | 8% | 3% | 42% | 6% | 0% | 12.1 | 36% (60/41) | 702/3%/2% | 410/11%/4% | 345/12%/4% |
| Sticky Fingers (thieves) | MIXED | 1456 | 19% | 5% | 3% | 51% | 4% | 0% | 10.7 | 33% (56/33) | 380/4%/3% | 434/9%/3% | 642/4%/2% |
| Cashier (trading) | MIXED | 1485 | 16% | 5% | 3% | 54% | 10% | 0% | 7.5 | 35% (42/37) | 351/3%/2% | 447/6%/4% | 687/5%/2% |
| Go-Between (yellow) | MIXED | 1334 | 19% | 4% | 2% | 60% | 13% | 0% | 10.2 | 32% (30/47) | 298/5%/3% | 331/10%/4% | 705/2%/1% |
| Exporters (trading) | MIXED | 1342 | 16% | 3% | 2% | 51% | 2% | 0% | 10.3 | 27% (26/30) | – | 635/3%/2% | 707/3%/2% |
| Bodyguards (thieves) | MIXED | 711 | 12% | 4% | 2% | 40% | 4% | 4% | 8.3 | 30% (15/9) | – | 206/2%/1% | 505/4%/2% |
| Debt Collectors (silver) | MIXED | 949 | 15% | 7% | 2% | 61% | 1% | 0% | 9.2 | 42% (48/11) | – | 293/13%/1% | 656/5%/2% |
| Hot Streak (purple) | MIXED | 1326 | 15% | 4% | 2% | 31% | 0% | 0% | 9.4 | 28% (37/20) | – | 532/5%/4% | 794/3%/1% |
| Smooth Talkers (silver) | MIXED | 847 | 17% | 2% | 2% | 38% | 0% | 0% | 11.6 | 20% (14/15) | – | 198/1%/2% | 649/2%/2% |
| Closer (purple) | MIXED | 1370 | 12% | 3% | 2% | 35% | 3% | 0% | 10.2 | 25% (31/9) | – | 466/5%/3% | 904/2%/1% |
| Collector (silver) | MIXED | 1411 | 13% | 2% | 2% | 29% | 0% | 0% | 10.4 | 31% (25/30) | 185/1%/2% | 451/5%/3% | 775/2%/1% |
| Courier (purple) | MIXED | 1147 | 11% | 3% | 2% | 41% | 0% | 0% | 10.0 | 30% (27/11) | – | 419/5%/3% | 728/2%/1% |
| Big Tent (yellow) | MIXED | 912 | 19% | 7% | 2% | 56% | 13% | 0% | 10.7 | 30% (25/24) | – | 341/10%/4% | 571/5%/1% |
| Hangers-On (silver) | MIXED | 1044 | 14% | 3% | 2% | 41% | 0% | 0% | 11.9 | 24% (20/16) | – | 357/3%/2% | 687/2%/1% |
| Gift Wrapper (silver) | MIXED | 1480 | 11% | 3% | 1% | 54% | 0% | 0% | 11.3 | 25% (30/12) | – | 461/5%/4% | 1019/2%/0% |
| Desperado (thieves) | MIXED | 1492 | 14% | 4% | 1% | 44% | 4% | 0% | 11.9 | 29% (42/18) | – | 441/7%/2% | 1051/3%/1% |
| Shopaholics (market) | MIXED | 894 | 17% | 4% | 1% | 51% | 0% | 0% | 12.3 | 32% (28/19) | – | 287/1%/0% | 607/5%/2% |
| Proselytizers (red) | MIXED | 1043 | 16% | 3% | 1% | 68% | 0% | 0% | 14.4 | 31% (26/24) | – | 379/4%/2% | 664/3%/1% |
| Debutantes (silver) | MIXED | 1074 | 15% | 3% | 1% | 47% | 0% | 0% | 11.3 | 27% (30/12) | – | 342/2%/1% | 732/4%/1% |
| Anarchist (benders) | MIXED | 3476 | 10% | 3% | 1% | 59% | 1% | 0% | 11.3 | 32% (86/21) | – | 1211/5%/2% | 2265/2%/1% |
| Tribute Band (echo) | MIXED | 371 | 15% | 9% | 1% | 84% | 0% | 0% | 13.9 | 48% (24/3) | – | 51/8%/0% | 320/9%/1% |
| Heiresses (trading) | MIXED | 911 | 8% | 4% | 1% | 50% | 0% | 0% | 8.5 | 47% (26/10) | – | 291/5%/1% | 620/3%/1% |
| Harmonist (yellow) | DEAD | 1118 | 8% | 1% | 1% | 31% | 0% | 0% | 11.1 | 28% (8/18) | – | 346/2%/2% | 772/1%/1% |
| Night Owls (purple) | DEAD | 766 | 9% | 2% | 1% | 47% | 0% | 0% | 9.8 | 31% (12/10) | – | 228/0%/1% | 538/3%/1% |
| Gossip (purple) | DEAD | 1251 | 8% | 2% | 1% | 57% | 0% | 0% | 9.2 | 26% (19/6) | – | 378/3%/3% | 873/1%/0% |
| Customs (yellow) | DEAD | 1728 | 9% | 2% | 1% | 40% | 0% | 0% | 11.6 | 20% (18/13) | 302/1%/0% | 465/5%/3% | 961/1%/0% |
| Tastemaker (yellow) | DEAD | 1323 | 6% | 1% | 1% | 53% | 6% | 0% | 11.3 | 19% (9/5) | – | 349/3%/2% | 974/1%/0% |
| Patroness (market) | DEAD | 1148 | 3% | 1% | 1% | 33% | 0% | 0% | 11.6 | 31% (10/1) | – | 299/1%/0% | 849/1%/1% |
| Extra Hand (benders) | DEAD | 2942 | 5% | 1% | 0% | 41% | 0% | 3% | 15.0 | 26% (31/5) | – | 1121/1%/0% | 1821/1%/0% |
| Hoarder (trading) | DEAD | 1007 | 4% | 1% | 0% | 50% | 0% | 0% | 14.9 | 25% (7/2) | – | 288/1%/0% | 719/1%/0% |
| Shoplifter (thieves) | DEAD | 1181 | 6% | 2% | 0% | 63% | 0% | 0% | 14.0 | 30% (16/4) | – | 429/2%/0% | 752/1%/0% |
| Wallflower (echo) | DEAD | 777 | 4% | 0% | 0% | 67% | 0% | 0% | 12.5 | 13% (3/1) | – | 128/0%/0% | 649/0%/0% |
| Old Maid (benders) | DEAD | 4699 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1546/0%/0% | 3153/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | DEAD | 4411 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 187/0%/0% | 1238/0%/0% | 2986/0%/0% |
| Polisher (silver) | DEAD | 331 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 56/0%/0% | 207/0%/0% | 68/0%/0% |
| Anarchist (benders) | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 40/0%/0% |
| Raiders (trading) | DEAD | 169 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 47/0%/0% | 122/0%/0% |
| Debutantes (silver) | DEAD | 143 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 41/0%/0% | 102/0%/0% |
| Tribute Band (echo) | DEAD | 153 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 129/0%/0% |
| Extra Hand (benders) | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 35/0%/0% | 9/0%/0% |
| Hot Streak (purple) | DEAD | 230 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 59/0%/0% | 171/0%/0% |
| Hoarder (trading) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 6/0%/0% |
| Party Crasher (benders) | DEAD | 88 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 50/0%/0% | 37/0%/0% | 1/0%/0% |
| Doppelganger (echo) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| Heiresses (trading) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 1/0%/0% |
| Debt Collectors (silver) | THIN DATA | 13 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 8/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Scouts (3) | REAL CHOICE | 86 | 83% | 38% | 29% | 30% | 3% | 100% | 6.4 | 40% (16/12) | – | 40/45%/28% | 46/33%/30% |
| choose member:Agents (3) | REAL CHOICE + MISJUDGED | 31 | 84% | 19% | 29% | 17% | 0% | 100% | 8.3 | 50% (3/10) | – | 14/21%/36% | 17/18%/24% |
| choose member:Accomplice (3) | REAL CHOICE | 47 | 89% | 43% | 28% | 45% | 0% | 100% | 8.9 | 48% (8/12) | – | 23/52%/26% | 24/33%/29% |
| choose member:Agents | REAL CHOICE | 23 | 30% | 9% | 26% | 0% | 0% | 100% | 0.7 | 43% (2/1) | – | 14/14%/36% | 9/0%/11% |
| choose member:Cutpurse (3) | REAL CHOICE | 37 | 92% | 38% | 24% | 29% | 0% | 100% | 6.8 | 44% (4/11) | – | 21/48%/29% | 16/25%/19% |
| choose member:Deprogrammers (3) | REAL CHOICE | 39 | 82% | 36% | 23% | 14% | 7% | 100% | 8.1 | 35% (5/6) | – | 20/40%/20% | 19/32%/26% |
| choose member:Triplets (3) | REAL CHOICE + MISJUDGED | 18 | 78% | 44% | 22% | 38% | 0% | 100% | 4.8 | 71% (8/2) | – | 7/43%/14% | 11/45%/27% |
| choose member:Timekeepers (4) | REAL CHOICE | 27 | 74% | 33% | 22% | 33% | 0% | 100% | 10.5 | 40% (6/2) | – | 9/33%/11% | 18/33%/28% |
| choose member:Busker (4) | REAL CHOICE | 32 | 88% | 41% | 19% | 46% | 0% | 100% | 9.4 | 43% (6/6) | – | 19/47%/21% | 13/31%/15% |
| choose member:Critic (3) | REAL CHOICE | 16 | 81% | 31% | 19% | 0% | 0% | 100% | 5.5 | 46% (3/3) | – | 5/0%/20% | 11/45%/18% |
| trade:P2: Cutpurse ↔ P3: Deprogrammers | REAL CHOICE | 17 | 18% | 6% | 18% | 0% | 0% | 0% | 0.5 | 67% (1/1) | – | 2/0%/0% | 15/7%/20% |
| choose member:Early Birds (3) | REAL CHOICE | 23 | 74% | 22% | 17% | 40% | 20% | 100% | 5.8 | 44% (2/5) | – | 9/22%/22% | 14/21%/14% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 24 | 83% | 46% | 17% | 27% | 0% | 100% | 11.2 | 25% (3/2) | – | 7/57%/14% | 17/41%/18% |
| choose member:Recruit Bonus (3) | REAL CHOICE | 24 | 83% | 42% | 17% | 10% | 10% | 100% | 13.2 | 42% (6/2) | – | 11/36%/9% | 13/46%/23% |
| choose member:Line Cutters (2) | REAL CHOICE | 92 | 90% | 38% | 16% | 49% | 0% | 100% | 11.5 | 48% (14/26) | – | 44/41%/9% | 48/35%/23% |
| choose member:Party Crasher (4) | REAL CHOICE + MISJUDGED | 15 | 80% | 47% | 13% | 43% | 0% | 100% | 10.1 | 58% (7/0) | – | 5/40%/20% | 10/50%/10% |
| choose member:Alchemists | REAL CHOICE | 15 | 47% | 13% | 13% | 0% | 0% | 100% | 8.8 | 29% (1/1) | – | 5/40%/40% | 10/0%/0% |
| trade:P3: Early Birds ↔ P2: Volunteer | REAL CHOICE | 15 | 20% | 0% | 13% | – | – | – | 5.5 | 0% (0/0) | – | 6/0%/17% | 9/0%/11% |
| choose member:Chronicler (5) | REAL CHOICE | 25 | 60% | 12% | 12% | 33% | 0% | 100% | 7.9 | 27% (2/2) | – | 6/17%/0% | 19/11%/16% |
| choose member:Drifters (3) | REAL CHOICE | 17 | 94% | 35% | 12% | 17% | 0% | 100% | 12.9 | 44% (4/3) | – | 11/27%/9% | 6/50%/17% |
| choose member:P4's Trendsetters (4) | REAL CHOICE | 17 | 29% | 6% | 12% | 0% | 0% | 100% | 11.9 | 20% (1/0) | – | 2/0%/0% | 15/7%/13% |
| choose member:Window Dressers (4) | REAL CHOICE | 18 | 33% | 17% | 11% | 33% | 0% | 100% | 4.3 | 33% (0/2) | – | 4/50%/25% | 14/7%/7% |
| choose member:Chronicler | REAL CHOICE | 19 | 53% | 16% | 11% | 0% | 0% | 100% | 9.9 | 10% (0/1) | – | 4/25%/25% | 15/13%/7% |
| choose member:P3's Caravan (9) | AUTO-PICK | 16 | 75% | 50% | 19% | 88% | 75% | 100% | 3.9 | 67% (1/3) | – | 2/100%/0% | 14/43%/21% |
| choose member:Loyalists (5) | AUTO-PICK | 18 | 44% | 11% | 17% | 50% | 0% | 100% | 4.8 | 25% (1/1) | – | 3/0%/67% | 15/13%/7% |
| choose member:Martyrs (4) | AUTO-PICK | 19 | 95% | 32% | 16% | 67% | 0% | 100% | 10.3 | 33% (4/2) | – | 6/33%/17% | 13/31%/15% |
| choose member:Dabblers (3) | AUTO-PICK | 73 | 79% | 26% | 15% | 53% | 0% | 100% | 8.8 | 47% (11/16) | – | 22/27%/14% | 51/25%/16% |
| choose member:Connoisseurs (4) | AUTO-PICK | 20 | 80% | 10% | 15% | 50% | 0% | 100% | 6.3 | 25% (2/2) | – | 3/33%/0% | 17/6%/18% |
| choose member:Muse (4) | AUTO-PICK | 21 | 71% | 43% | 14% | 56% | 0% | 100% | 10.2 | 27% (4/0) | – | 7/57%/14% | 14/36%/14% |
| choose member:Bouncers (4) | AUTO-PICK | 22 | 77% | 23% | 14% | 60% | 0% | 100% | 6.1 | 35% (2/4) | – | 7/43%/14% | 15/13%/13% |
| trade:P1: Loyalists ↔ P4: Party Crasher | AUTO-PICK | 16 | 25% | 13% | 13% | 50% | 0% | 0% | 6.0 | 75% (1/2) | – | 2/100%/50% | 14/0%/7% |
| choose member:Shopkeeper (4) | AUTO-PICK | 25 | 88% | 28% | 12% | 71% | 0% | 100% | 7.8 | 32% (3/4) | – | 14/21%/21% | 11/36%/0% |
| choose member:HR | AUTO-PICK | 20 | 100% | 90% | 10% | 83% | 61% | 100% | 15.4 | 33% (1/2) | – | 2/100%/0% | 18/89%/11% |
| choose member:Scouts | AUTO-PICK | 20 | 35% | 20% | 10% | 50% | 0% | 100% | 9.5 | 57% (4/0) | – | 6/50%/17% | 14/7%/7% |
| choose member:Alchemists (5) | AUTO-PICK | 41 | 56% | 17% | 10% | 57% | 0% | 100% | 9.7 | 35% (4/4) | – | 8/0%/13% | 33/21%/9% |
| choose member:P3's Fan Club (6) | AUTO-PICK | 21 | 67% | 52% | 10% | 73% | 36% | 100% | 8.4 | 20% (0/2) | – | 1/100%/0% | 20/50%/10% |
| choose member:Gardener (3) | AUTO-PICK | 23 | 91% | 35% | 9% | 50% | 0% | 100% | 12.0 | 48% (6/4) | – | 11/45%/0% | 12/25%/17% |
| choose member:P2's HR (10) | AUTO-PICK | 24 | 75% | 71% | 8% | 82% | 76% | 100% | 2.5 | 60% (2/1) | – | 1/100%/0% | 23/70%/9% |
| choose member:P1's Patriarch (6) | AUTO-PICK + MISJUDGED | 24 | 42% | 21% | 8% | 80% | 0% | 100% | 7.4 | 70% (3/4) | – | – | 24/21%/8% |
| choose member:P4's HR (10) | AUTO-PICK | 26 | 96% | 69% | 8% | 83% | 72% | 94% | 15.7 | 25% (0/3) | – | 1/100%/0% | 25/68%/8% |
| choose member:Dabblers | AUTO-PICK | 29 | 41% | 10% | 7% | 100% | 0% | 100% | 4.6 | 33% (2/2) | – | 14/0%/14% | 15/20%/0% |
| choose member:Line Cutters | AUTO-PICK | 29 | 41% | 10% | 7% | 67% | 0% | 100% | 13.7 | 42% (1/4) | – | 11/18%/9% | 18/6%/6% |
| choose member:P2's Snobs (6) | AUTO-PICK | 15 | 60% | 40% | 7% | 67% | 50% | 100% | 8.7 | 50% (1/2) | – | 1/100%/0% | 14/36%/7% |
| choose member:Stunt Double | AUTO-PICK + MISJUDGED | 15 | 67% | 27% | 7% | 75% | 25% | 100% | 7.2 | 67% (3/3) | – | 4/50%/25% | 11/18%/0% |
| choose member:Stunt Double (5) | AUTO-PICK | 15 | 67% | 27% | 7% | 50% | 0% | 100% | 6.6 | 30% (3/0) | – | 7/43%/14% | 8/13%/0% |
| choose member:Trendsetters (4) | AUTO-PICK + MISJUDGED | 30 | 67% | 20% | 7% | 50% | 0% | 100% | 7.3 | 50% (2/8) | – | 9/33%/22% | 21/14%/0% |
| pass:Pass | AUTO-PICK | 18235 | 35% | 18% | 6% | 58% | 12% | 11% | 8.8 | 38% (1272/996) | 4305/39%/10% | 5840/18%/8% | 8090/6%/3% |
| choose member:P1's Fan Club (6) | AUTO-PICK | 32 | 66% | 28% | 6% | 89% | 56% | 89% | 14.5 | 31% (0/5) | – | 2/100%/0% | 30/23%/7% |
| trade:P2: Deprogrammers ↔ P3: Triplets | AUTO-PICK | 17 | 12% | 12% | 6% | 50% | 0% | 0% | – | 50% (1/0) | – | 4/50%/25% | 13/0%/0% |
| choose member:Deprogrammers | AUTO-PICK | 18 | 61% | 28% | 6% | 60% | 0% | 100% | 11.9 | 36% (0/4) | – | 7/43%/0% | 11/18%/9% |
| choose member:P1's Chronicler (5) | AUTO-PICK | 18 | 28% | 22% | 6% | 50% | 0% | 100% | 18.0 | 60% (3/0) | – | – | 18/22%/6% |
| choose member:P2's Deprogrammers (3) | AUTO-PICK | 18 | 22% | 17% | 6% | 67% | 0% | 100% | 9.0 | 50% (2/0) | – | 4/25%/25% | 14/14%/0% |
| choose member:Accomplice | AUTO-PICK | 18 | 28% | 17% | 6% | 67% | 0% | 100% | 10.0 | 60% (3/0) | – | 5/20%/0% | 13/15%/8% |
| trade:P3: Dabblers ↔ Shop: Volunteer | AUTO-PICK | 18 | 11% | 11% | 6% | 50% | 0% | 0% | – | 100% (2/0) | – | 12/8%/8% | 6/17%/0% |
| choose member:Doppelganger (5) | AUTO-PICK | 19 | 68% | 16% | 5% | 67% | 0% | 100% | 12.7 | 23% (3/0) | – | 8/13%/0% | 11/18%/9% |
| choose member:P1's Recluse (4) | AUTO-PICK | 19 | 37% | 11% | 5% | 100% | 0% | 100% | 13.9 | 43% (1/2) | – | – | 19/11%/5% |
| choose member:P3's Busker (4) | AUTO-PICK + MISJUDGED | 38 | 29% | 11% | 5% | 50% | 25% | 100% | 14.3 | 60% (3/3) | – | 2/50%/0% | 36/8%/6% |
| choose member:Busker | AUTO-PICK | 39 | 62% | 33% | 5% | 62% | 54% | 100% | 16.9 | 35% (3/3) | – | 19/37%/5% | 20/30%/5% |
| choose member:P1's Mob (12) | AUTO-PICK | 20 | 100% | 90% | 5% | 100% | 100% | 78% | 3.3 | 100% (0/2) | – | 2/100%/0% | 18/89%/6% |
| choose member:P3's Shopkeeper (4) | AUTO-PICK | 20 | 40% | 25% | 5% | 60% | 40% | 100% | 10.2 | 50% (2/1) | – | 3/0%/0% | 17/29%/6% |
| choose member:Kingpin (4) | AUTO-PICK | 62 | 61% | 15% | 5% | 78% | 0% | 100% | 9.2 | 39% (6/9) | – | 24/29%/13% | 38/5%/0% |
| choose member:P3's HR (10) | AUTO-PICK | 21 | 86% | 67% | 5% | 100% | 71% | 93% | 10.5 | 13% (0/1) | – | 1/100%/0% | 20/65%/5% |
| choose member:P3's Con Men (7) | AUTO-PICK + MISJUDGED | 50 | 22% | 16% | 4% | 75% | 0% | 100% | 1.5 | 55% (4/2) | – | 4/50%/0% | 46/13%/4% |
| choose member:P1's Con Men (7) | AUTO-PICK + MISJUDGED | 50 | 38% | 12% | 4% | 50% | 0% | 100% | 12.9 | 53% (3/7) | – | 2/100%/0% | 48/8%/4% |
| choose member:P4's Con Men (7) | AUTO-PICK | 54 | 31% | 13% | 4% | 71% | 0% | 100% | 18.0 | 35% (4/2) | – | 5/60%/20% | 49/8%/2% |
| choose member:P2's Panel (7) | AUTO-PICK + MISJUDGED | 28 | 36% | 14% | 4% | 50% | 0% | 75% | 13.4 | 50% (2/3) | – | 2/0%/0% | 26/15%/4% |
| choose member:P1's HR (10) | AUTO-PICK + MISJUDGED | 29 | 69% | 59% | 3% | 88% | 65% | 88% | 14.3 | 67% (4/2) | – | 2/100%/0% | 27/56%/4% |
| choose member:P4's Fan Club (6) | AUTO-PICK + MISJUDGED | 30 | 57% | 37% | 3% | 73% | 64% | 100% | 5.0 | 50% (1/4) | – | 2/50%/0% | 28/36%/4% |
| choose member:P2's Roadie (3) | AUTO-PICK | 37 | 22% | 11% | 3% | 50% | 50% | 100% | 10.4 | 17% (1/0) | – | 1/0%/0% | 36/11%/3% |
| followers:top | AUTO-PICK | 13498 | 25% | 17% | 2% | 76% | 52% | 0% | 8.7 | 41% (339/543) | 462/0%/0% | 5122/0%/0% | 7914/28%/4% |
| choose member:P3's Mob (12) | AUTO-PICK | 16 | 100% | 100% | 0% | 100% | 81% | 88% | – | 33% (1/0) | – | – | 16/100%/0% |
| choose member:Roadie | AUTO-PICK | 39 | 69% | 51% | 0% | 85% | 50% | 100% | 20.7 | 35% (2/4) | – | 20/70%/0% | 19/32%/0% |
| choose member:P3's Snobs (6) | AUTO-PICK + MISJUDGED | 21 | 62% | 33% | 0% | 71% | 29% | 100% | 11.2 | 55% (3/3) | – | – | 21/33%/0% |
| choose member:P2's Fan Club (6) | AUTO-PICK | 22 | 50% | 32% | 0% | 100% | 57% | 100% | 6.2 | 29% (1/1) | – | – | 22/32%/0% |
| choose member:P3's Dyer (7) | AUTO-PICK | 15 | 47% | 27% | 0% | 100% | 100% | 100% | 17.8 | 33% (0/1) | – | – | 15/27%/0% |
| choose member:P4's Patriarch (6) | AUTO-PICK | 16 | 31% | 25% | 0% | 75% | 0% | 100% | 9.0 | 20% (1/0) | – | 2/50%/0% | 14/21%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 27 | 33% | 19% | 0% | 60% | 60% | 100% | 18.5 | 33% (2/0) | – | 4/0%/0% | 23/22%/0% |
| choose member:P2's Timekeepers (4) | AUTO-PICK | 18 | 50% | 17% | 0% | 100% | 0% | 100% | 15.2 | 44% (2/2) | – | 2/0%/0% | 16/19%/0% |
| choose member:P4's Grifter (8) | AUTO-PICK + MISJUDGED | 34 | 24% | 15% | 0% | 80% | 0% | 100% | 10.2 | 63% (3/2) | – | 3/0%/0% | 31/16%/0% |
| choose member:Window Shopper (5) | AUTO-PICK | 21 | 48% | 14% | 0% | 100% | 0% | 100% | 10.5 | 20% (2/0) | – | 3/33%/0% | 18/11%/0% |
| trade:P4: Con Men ↔ Shop: Mentor & Protégés | AUTO-PICK | 15 | 27% | 13% | 0% | 50% | 50% | 0% | 7.5 | 67% (1/1) | – | 2/50%/0% | 13/8%/0% |
| trade:P3: Loyalists ↔ P1: Accomplice | AUTO-PICK | 15 | 13% | 13% | 0% | 100% | 0% | 0% | – | 100% (2/0) | – | 4/25%/0% | 11/9%/0% |
| choose member:P3's Timekeepers (4) | AUTO-PICK | 15 | 33% | 13% | 0% | 50% | 50% | 100% | 3.4 | 25% (1/0) | – | – | 15/13%/0% |
| trade:P3: Con Men ↔ P4: Stunt Double | AUTO-PICK | 15 | 13% | 13% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 7/29%/0% | 8/0%/0% |
| choose member:P3's Chronicler (5) | AUTO-PICK | 31 | 19% | 13% | 0% | 100% | 0% | 100% | 14.9 | 83% (3/2) | – | 2/0%/0% | 29/14%/0% |
| choose member:P2's Gardener (3) | AUTO-PICK | 17 | 18% | 12% | 0% | 100% | 0% | 100% | 3.0 | 33% (1/0) | – | 5/20%/0% | 12/8%/0% |
| choose member:P1's Grifter (8) | AUTO-PICK + MISJUDGED | 45 | 27% | 11% | 0% | 100% | 0% | 100% | 11.1 | 50% (3/3) | – | 1/100%/0% | 44/9%/0% |
| choose member:P1's Panel (7) | AUTO-PICK | 18 | 17% | 11% | 0% | 100% | 0% | 100% | 35.8 | 67% (1/1) | – | 1/0%/0% | 17/12%/0% |
| trade:P1: Fan Club ↔ P3: Busker | AUTO-PICK | 18 | 28% | 11% | 0% | 100% | 50% | 0% | 6.2 | 75% (0/3) | – | 4/0%/0% | 14/14%/0% |
| trade:P3: Roadie ↔ P4: Volunteer | AUTO-PICK | 18 | 33% | 11% | 0% | 50% | 0% | 0% | 9.0 | 33% (1/1) | – | 10/10%/0% | 8/13%/0% |
| choose member:P4's Window Dressers (4) | AUTO-PICK | 19 | 21% | 11% | 0% | 100% | 50% | 100% | 10.5 | 67% (1/1) | – | 1/0%/0% | 18/11%/0% |
| choose member:P3's Window Dressers (4) | AUTO-PICK | 20 | 20% | 10% | 0% | 50% | 0% | 100% | 18.2 | 25% (0/1) | – | 1/0%/0% | 19/11%/0% |
| trade:P1: Roadie ↔ P4: Volunteer | AUTO-PICK | 30 | 10% | 10% | 0% | 100% | 33% | 0% | – | 0% (0/0) | – | 16/19%/0% | 14/0%/0% |
| choose member:P1's Alchemists (5) | MIXED | 34 | 12% | 6% | 9% | 0% | 0% | 100% | 6.8 | 75% (2/1) | – | 2/0%/0% | 32/6%/9% |
| trade:P1: Deprogrammers ↔ P3: Accomplice | MIXED | 23 | 13% | 9% | 9% | 0% | 0% | 0% | 3.7 | 33% (0/1) | – | 9/11%/11% | 14/7%/7% |
| choose member:P2's Con Men (7) | MIXED | 49 | 22% | 8% | 8% | 75% | 0% | 100% | 7.0 | 36% (2/2) | – | 1/0%/0% | 48/8%/8% |
| choose member:P3's Deprogrammers (3) | MIXED | 25 | 20% | 8% | 8% | 50% | 0% | 100% | 5.6 | 60% (1/2) | – | 2/0%/50% | 23/9%/4% |
| choose member:P4's Busker (4) | MIXED | 28 | 21% | 11% | 7% | 33% | 33% | 100% | 21.5 | 40% (1/1) | – | 4/25%/25% | 24/8%/4% |
| choose member:P4's Timekeepers (4) | MIXED | 28 | 25% | 4% | 7% | 0% | 0% | 100% | 8.1 | 57% (1/3) | – | – | 28/4%/7% |
| choose member:P4's Alchemists (5) | MIXED | 29 | 17% | 14% | 7% | 25% | 0% | 100% | 41.3 | 80% (4/0) | – | 2/0%/0% | 27/15%/7% |
| trade:P1: Triplets ↔ Shop: Cashier | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/0%/0% | 9/11%/11% |
| trade:P1: Alchemists ↔ P3: Cutpurse | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 0% (0/0) | – | 2/50%/50% | 13/0%/0% |
| trade:P4: Panel ↔ P2: Loyalists | MIXED | 15 | 13% | 7% | 7% | 100% | 0% | 0% | 0.7 | 0% (0/0) | – | – | 15/7%/7% |
| trade:P3: Patriarch ↔ P4: Stunt Double | MIXED | 15 | 13% | 7% | 7% | 100% | 100% | 0% | 0.8 | 0% (0/0) | – | 1/0%/100% | 14/7%/0% |
| trade:P4: Polisher ↔ P3: Deprogrammers | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 6.2 | 50% (1/0) | – | 8/0%/0% | 7/14%/14% |
| trade:P3: Polisher ↔ P4: Deprogrammers | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/14% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Toastmaster | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 20.5 | 50% (1/0) | – | 4/25%/25% | 11/0%/0% |
| trade:P3: Cutpurse ↔ P1: Volunteer | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 11.2 | 50% (0/1) | – | 5/0%/0% | 10/10%/10% |
| trade:P3: Shopkeeper ↔ P1: Triplets | MIXED | 15 | 13% | 7% | 7% | 0% | 0% | 0% | 3.3 | 0% (0/0) | – | 7/14%/14% | 8/0%/0% |
| trade:P4: Con Men ↔ P2: Extortionist | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/33%/33% | 12/0%/0% |
| trade:P1: Alchemists ↔ P3: Dabblers | MIXED | 15 | 13% | 0% | 7% | – | – | – | 5.1 | 0% (0/0) | – | 2/0%/0% | 13/0%/8% |
| followers:small | MIXED | 18235 | 33% | 12% | 7% | 44% | 0% | 7% | 10.1 | 37% (1450/766) | 4305/12%/8% | 5840/15%/8% | 8090/10%/5% |
| trade:P3: Loyalists ↔ P1: Dabblers | MIXED | 18 | 11% | 6% | 6% | 100% | 0% | 0% | 0.5 | 50% (1/0) | – | 6/17%/17% | 12/0%/0% |
| choose member:P2's Patriarch (6) | MIXED | 18 | 22% | 0% | 6% | – | – | – | 7.4 | 75% (0/3) | – | 1/0%/0% | 17/0%/6% |
| choose member:P2's Trendsetters (4) | MIXED | 19 | 26% | 26% | 5% | 40% | 0% | 100% | – | 80% (4/0) | – | 3/0%/0% | 16/31%/6% |
| trade:P1: Busker ↔ Shop: Old Maid | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 12/8%/8% |
| trade:P3: Loyalists ↔ P1: Scouts | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/25% | 15/0%/0% |
| trade:P3: Loyalists ↔ P2: Roadie | MIXED | 19 | 21% | 5% | 5% | 0% | 0% | 0% | 21.8 | 50% (0/2) | – | 3/0%/0% | 16/6%/6% |
| trade:P3: Scouts ↔ P2: Volunteer | MIXED | 19 | 11% | 0% | 5% | – | – | – | 2.3 | 100% (0/2) | – | 10/0%/10% | 9/0%/0% |
| trade:P1: Scouts ↔ P2: Volunteer | MIXED | 40 | 5% | 5% | 5% | 0% | 0% | 0% | – | 50% (1/0) | – | 16/6%/6% | 24/4%/4% |
| trade:P3: Party Crasher ↔ P2: Deprogrammers | MIXED | 20 | 10% | 5% | 5% | 0% | 0% | 0% | 0.6 | 100% (1/1) | – | 7/0%/14% | 13/8%/0% |
| trade:P1: Panel ↔ P4: Loyalists | MIXED | 20 | 15% | 5% | 5% | 0% | 0% | 0% | 13.0 | 33% (0/1) | – | 4/0%/0% | 16/6%/6% |
| trade:P3: Triplets ↔ P1: Volunteer | MIXED | 20 | 10% | 0% | 5% | – | – | – | 6.1 | 0% (0/0) | – | 3/0%/0% | 17/0%/6% |
| trade:P2: Accomplice ↔ P3: Deprogrammers | MIXED | 22 | 14% | 5% | 5% | 100% | 0% | 0% | 2.0 | 0% (0/0) | – | 13/8%/8% | 9/0%/0% |
| trade:P1: Volunteer ↔ P2: Deprogrammers | MIXED | 22 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 9/11%/11% | 13/0%/0% |
| trade:P1: Loyalists ↔ P2: Cutpurse | MIXED | 23 | 9% | 9% | 4% | 50% | 0% | 0% | – | 50% (1/0) | – | 7/0%/0% | 16/13%/6% |
| trade:P3: Deprogrammers ↔ P4: Scouts | MIXED | 46 | 7% | 4% | 4% | 0% | 0% | 0% | 1.0 | 67% (2/0) | – | 15/7%/7% | 31/3%/3% |
| trade:P2: Busker ↔ P4: Agents | MIXED | 23 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 12/0%/0% | 11/9%/9% |
| trade:P1: Loyalists ↔ P2: Kingpin | MIXED | 23 | 9% | 4% | 4% | 0% | 0% | 0% | 4.3 | 0% (0/0) | – | 7/14%/14% | 16/0%/0% |
| trade:P1: Agents ↔ P4: Volunteer | MIXED | 24 | 13% | 4% | 4% | 0% | 0% | 0% | 27.4 | 0% (0/0) | – | 8/13%/13% | 16/0%/0% |
| trade:P2: Cutpurse ↔ P4: Deprogrammers | MIXED | 24 | 17% | 0% | 4% | – | – | – | 6.8 | 25% (0/1) | – | 8/0%/0% | 16/0%/6% |
| trade:P3: Dabblers ↔ P4: Volunteer | MIXED | 26 | 12% | 4% | 4% | 100% | 0% | 0% | 19.0 | 67% (1/1) | – | 4/0%/0% | 22/5%/5% |
| trade:P2: Recruit Bonus ↔ P1: Volunteer | MIXED | 26 | 12% | 4% | 4% | 100% | 0% | 0% | 1.9 | 33% (1/0) | – | 9/11%/11% | 17/0%/0% |
| trade:P3: Dabblers ↔ P4: Toastmaster | MIXED | 27 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 10/0%/0% | 17/6%/6% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | MIXED + MISJUDGED | 54 | 19% | 4% | 4% | 0% | 0% | 0% | 10.7 | 60% (1/5) | – | 18/6%/6% | 36/3%/3% |
| trade:P4: Scouts ↔ P3: Roadie | MIXED | 27 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 17/6%/6% | 10/0%/0% |
| trade:P1: Scouts ↔ P3: Dabblers | MIXED | 28 | 7% | 4% | 4% | 0% | 0% | 0% | 10.8 | 50% (1/0) | – | 17/6%/6% | 11/0%/0% |
| trade:P3: Panel ↔ Shop: Old Maid | MIXED | 30 | 10% | 7% | 3% | 100% | 0% | 0% | 0.5 | 100% (2/1) | – | 8/0%/0% | 22/9%/5% |
| trade:P3: Triplets ↔ P2: Volunteer | MIXED | 31 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/13% | 23/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | MIXED | 32 | 13% | 9% | 3% | 33% | 0% | 0% | 19.0 | 50% (1/1) | – | 15/7%/7% | 17/12%/0% |
| trade:P1: Deprogrammers ↔ P2: Scouts | MIXED | 32 | 9% | 6% | 3% | 50% | 0% | 0% | 37.4 | 100% (2/1) | – | 11/9%/0% | 21/5%/5% |
| trade:P2: Recruit Bonus ↔ P1: Deprogrammers | MIXED | 32 | 6% | 3% | 3% | 0% | 0% | 0% | 2.2 | 50% (1/0) | – | 11/0%/0% | 21/5%/5% |
| trade:P4: Con Men ↔ Shop: Old Maid | MIXED | 38 | 16% | 8% | 3% | 100% | 0% | 0% | 10.9 | 33% (2/0) | – | 10/20%/0% | 28/4%/4% |
| trade:P3: Deprogrammers ↔ P2: Volunteer | MIXED | 40 | 15% | 0% | 3% | – | – | – | 10.7 | 67% (0/4) | – | 14/0%/0% | 26/0%/4% |
| followers:mid | MIXED | 16821 | 14% | 6% | 2% | 38% | 2% | 1% | 8.8 | 35% (420/412) | 2927/0%/0% | 5819/1%/1% | 8075/11%/4% |
| trade:P4: Deprogrammers ↔ P1: Volunteer | MIXED | 41 | 12% | 2% | 2% | 0% | 0% | 0% | 13.5 | 0% (0/0) | – | 22/5%/5% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Volunteer | MIXED | 51 | 8% | 4% | 2% | 100% | 0% | 0% | 2.7 | 50% (0/2) | – | 23/4%/0% | 28/4%/4% |
| trade:P2: Kingpin ↔ P4: Cutpurse | MIXED | 15 | 20% | 13% | 0% | 0% | 0% | 0% | 4.9 | 67% (1/1) | – | 7/0%/0% | 8/25%/0% |
| trade:P1: Volunteer ↔ P4: Deprogrammers | MIXED | 23 | 9% | 9% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 11/0%/0% | 12/17%/0% |
| trade:P2: Deprogrammers ↔ P3: Volunteer | MIXED | 24 | 25% | 8% | 0% | 0% | 0% | 0% | 16.2 | 17% (1/0) | – | 14/7%/0% | 10/10%/0% |
| trade:P3: Deprogrammers ↔ P1: Volunteer | MIXED | 26 | 12% | 8% | 0% | 100% | 100% | 0% | 4.0 | 100% (0/1) | – | 11/18%/0% | 15/0%/0% |
| trade:P2: Cutpurse ↔ P1: Recruit Bonus | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ P1: Loyalists | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P1: Alchemists ↔ P2: Accomplice | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 11/9%/0% |
| trade:P2: Panel ↔ Shop: Desperado | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 6/0%/0% |
| trade:P2: Roadie ↔ P3: Triplets | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ Shop: Volunteer | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 10.5 | 0% (0/0) | – | 6/17%/0% | 9/0%/0% |
| trade:P1: Panel ↔ Shop: Clockmakers | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 2.2 | 50% (1/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P3: Patriarch ↔ P1: Stunt Double | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 2.8 | 0% (0/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ P2: Recruit Bonus | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/100%/0% | 14/0%/0% |
| trade:P4: Gardener ↔ P2: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 11/9%/0% |
| trade:P1: Doppelganger ↔ P3: Dabblers | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 3/33%/0% | 12/0%/0% |
| trade:P3: Loyalists ↔ P4: Triplets | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 4.0 | 0% (0/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P4: Stunt Double ↔ P1: Recruit Bonus | MIXED | 15 | 7% | 7% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 1/100%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED | 46 | 22% | 7% | 0% | 33% | 0% | 0% | 17.6 | 40% (0/4) | – | 24/4%/0% | 22/9%/0% |
| trade:P3: Line Cutters ↔ P1: Volunteer | MIXED | 31 | 6% | 6% | 0% | 50% | 0% | 0% | – | 100% (2/0) | – | 19/5%/0% | 12/8%/0% |
| trade:P1: Agents ↔ P4: Deprogrammers | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 19.5 | 50% (1/0) | – | 5/20%/0% | 11/0%/0% |
| trade:P3: Chronicler ↔ P4: Busker | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 15/7%/0% |
| trade:P2: Patriarch ↔ P3: Kingpin | MIXED | 16 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 7/14%/0% | 9/0%/0% |
| trade:P1: Accomplice ↔ P4: Line Cutters | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 13/8%/0% |
| trade:P3: Trendsetters ↔ Shop: Triplets | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 11.2 | 0% (0/0) | – | 3/33%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Volunteer | MIXED | 32 | 16% | 6% | 0% | 100% | 0% | 0% | 8.0 | 60% (1/2) | – | 12/8%/0% | 20/5%/0% |
| trade:P2: Stunt Double ↔ P4: Roadie | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 4.5 | 0% (0/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P2: Early Birds ↔ P4: Volunteer | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 16/6%/0% |
| trade:P2: Shopkeeper ↔ P3: Line Cutters | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 12/0%/0% |
| trade:P1: Mob ↔ Shop: Wallflower | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 15/7%/0% |
| trade:P3: Caravan ↔ Shop: Harmonist | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 7.0 | 100% (1/1) | – | 2/0%/0% | 14/7%/0% |
| trade:P4: Timekeepers ↔ P3: Shift Crew | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 12/0%/0% |
| trade:P2: Timekeepers ↔ P4: Deprogrammers | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 8/0%/0% |
| trade:P3: Con Men ↔ Shop: Old Maid | MIXED | 49 | 14% | 6% | 0% | 67% | 0% | 33% | 19.5 | 14% (1/0) | – | 11/27%/0% | 38/0%/0% |
| trade:P2: Alchemists ↔ P3: Dabblers | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 7/0%/0% |
| trade:P4: HR ↔ Shop: Wallflower | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 16/6%/0% |
| trade:P4: Panel ↔ P1: Stunt Double | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | – | 17/6%/0% |
| trade:P2: Chronicler ↔ P1: Roadie | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 7.0 | 0% (0/0) | – | 5/20%/0% | 12/0%/0% |
| trade:P2: Doppelganger ↔ P1: Roadie | MIXED | 17 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 5/20%/0% | 12/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Scouts | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 25.3 | 100% (1/1) | – | 9/11%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Accomplice | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 7/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Deprogrammers | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 10/10%/0% |
| trade:P2: Loyalists ↔ P1: Scouts | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 1/0%/0% | 16/6%/0% |
| trade:P3: Busker ↔ Shop: Loyalists | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 9/0%/0% |
| trade:P1: Con Men ↔ P2: Loyalists | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 2/50%/0% | 15/0%/0% |
| trade:P2: Panel ↔ P1: Loyalists | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 16.4 | 50% (0/1) | – | 2/0%/0% | 15/7%/0% |
| trade:P2: Agents ↔ P1: Volunteer | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 7/0%/0% |
| trade:P1: Stunt Double ↔ P4: Loyalists | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 17/6%/0% |
| trade:P1: Alchemists ↔ P3: Agents | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/50%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Loyalists | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 10/0%/0% |
| trade:P1: Accomplice ↔ P4: Deprogrammers | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/0%/0% | 13/8%/0% |
| trade:P2: Mentor & Protégés ↔ P4: Con Men | MIXED | 18 | 22% | 6% | 0% | 100% | 100% | 0% | 13.5 | 100% (0/3) | – | 4/25%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P2: Roadie | MIXED | 36 | 6% | 6% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 19/11%/0% | 17/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Loyalists | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 5/0%/0% | 13/8%/0% |
| trade:P3: Con Men ↔ Shop: Customs | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/33%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P4: Gardener | MIXED | 18 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 10/10%/0% |
| trade:P1: Bouncers ↔ Shop: Triplets | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 6.3 | 50% (0/1) | – | 16/6%/0% | 2/0%/0% |
| trade:P4: Line Cutters ↔ P3: Volunteer | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 12/8%/0% | 6/0%/0% |
| trade:P2: Patriarch ↔ P1: Party Crasher | MIXED | 18 | 11% | 6% | 0% | 100% | 0% | 0% | 2.0 | 0% (0/0) | – | 3/0%/0% | 15/7%/0% |
| trade:P1: Cutpurse ↔ P3: Dabblers | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P4: Cutpurse | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 9/0%/0% |
| trade:P1: Accomplice ↔ P2: Line Cutters | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 15/0%/0% |
| trade:P1: Cutpurse ↔ P4: Deprogrammers | MIXED | 19 | 16% | 5% | 0% | 100% | 0% | 0% | 8.1 | 33% (1/0) | – | 4/0%/0% | 15/7%/0% |
| trade:P1: Loyalists ↔ P3: Recruit Bonus | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 2/50%/0% | 17/0%/0% |
| trade:P3: Volunteer ↔ P1: Deprogrammers | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Loyalists | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 11/9%/0% | 8/0%/0% |
| trade:P2: Party Crasher ↔ P1: Line Cutters | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 9/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Volunteer | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 11/9%/0% |
| trade:P3: Busker ↔ P1: Scouts | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P1: Fan Club ↔ P2: Party Crasher | MIXED | 19 | 21% | 5% | 0% | 100% | 100% | 0% | 5.3 | 67% (0/2) | – | 3/33%/0% | 16/0%/0% |
| trade:P3: Busker ↔ P1: Roadie | MIXED | 19 | 5% | 5% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 8/13%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ P2: Deprogrammers | MIXED | 19 | 5% | 5% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 4/0%/0% | 15/7%/0% |
| trade:P1: Alchemists ↔ P4: Busker | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 7/0%/0% | 12/8%/0% |
| trade:P4: Loyalists ↔ P1: Triplets | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 8.0 | 0% (0/0) | – | 2/50%/0% | 18/0%/0% |
| trade:P1: Line Cutters ↔ P2: Deprogrammers | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 15/0%/0% | 5/20%/0% |
| trade:P1: Scouts ↔ Shop: Loyalists | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P1: Volunteer | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 5/20%/0% | 15/0%/0% |
| trade:P4: Accomplice ↔ P3: Deprogrammers | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 16/6%/0% |
| trade:P2: Deprogrammers ↔ P4: Regular | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/0%/0% | 14/7%/0% |
| trade:P2: Early Birds ↔ P1: Line Cutters | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Line Cutters | MIXED | 41 | 5% | 5% | 0% | 100% | 0% | 0% | – | 50% (1/0) | – | 17/12%/0% | 24/0%/0% |
| trade:P3: Scouts ↔ P2: Deprogrammers | MIXED | 41 | 5% | 5% | 0% | 50% | 0% | 0% | – | 100% (2/0) | – | 22/5%/0% | 19/5%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Triplets | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P2: Party Crasher | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 17/6%/0% |
| trade:P3: Patriarch ↔ P1: Party Crasher | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ P1: Recruit Bonus | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 14.8 | 0% (0/0) | – | 3/0%/0% | 18/6%/0% |
| trade:P2: Loyalists ↔ P4: Dabblers | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 19/5%/0% |
| trade:P1: Scouts ↔ P3: Volunteer | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/11%/0% | 12/0%/0% |
| trade:P2: Mob ↔ Shop: Wallflower | MIXED | 21 | 14% | 5% | 0% | 0% | 0% | 0% | 42.6 | 33% (1/0) | – | 4/0%/0% | 17/6%/0% |
| trade:P2: Drifters ↔ P4: Volunteer | MIXED | 21 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 18/6%/0% |
| trade:P2: Busker ↔ P1: Deprogrammers | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 40.7 | 0% (0/0) | – | 7/0%/0% | 14/7%/0% |
| trade:P4: Roadie ↔ P1: Volunteer | MIXED | 22 | 5% | 5% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 13/8%/0% | 9/0%/0% |
| trade:P2: Chronicler ↔ Shop: Old Maid | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 13/8%/0% | 9/0%/0% |
| trade:P2: Loyalists ↔ P1: Triplets | MIXED | 22 | 9% | 5% | 0% | 0% | 0% | 0% | 23.0 | 0% (0/0) | – | 1/100%/0% | 21/0%/0% |
| trade:P2: HR ↔ Shop: Proselytizers | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 22/5%/0% |
| trade:P1: HR ↔ Shop: Proselytizers | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/33%/0% | 19/0%/0% |
| trade:P1: Alchemists ↔ P3: Roadie | MIXED | 22 | 9% | 5% | 0% | 100% | 0% | 0% | 6.6 | 50% (1/0) | – | 2/50%/0% | 20/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Cutpurse | MIXED | 23 | 9% | 4% | 0% | 100% | 0% | 0% | 24.8 | 50% (1/0) | – | 8/13%/0% | 15/0%/0% |
| trade:P1: Polisher ↔ P3: Deprogrammers | MIXED | 23 | 9% | 4% | 0% | 100% | 0% | 0% | 3.0 | 50% (1/0) | – | 4/0%/0% | 19/5%/0% |
| trade:P3: Loyalists ↔ P1: Deprogrammers | MIXED | 23 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/0%/0% | 18/6%/0% |
| trade:P2: Alchemists ↔ Shop: Cashier | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 14/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P3: Volunteer | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 11/9%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Volunteer | MIXED | 23 | 9% | 4% | 0% | 0% | 0% | 0% | 1.7 | 50% (1/0) | – | 8/13%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Roadie | MIXED | 23 | 13% | 4% | 0% | 100% | 0% | 0% | 15.1 | 33% (1/0) | – | 10/0%/0% | 13/8%/0% |
| trade:P2: Agents ↔ P3: Volunteer | MIXED | 23 | 13% | 4% | 0% | 100% | 0% | 0% | 16.9 | 33% (0/1) | – | 13/8%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ P2: Agents | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P3: Deprogrammers | MIXED | 47 | 6% | 4% | 0% | 100% | 0% | 0% | 6.9 | 100% (2/1) | – | 20/5%/0% | 27/4%/0% |
| trade:P2: Deprogrammers ↔ P3: Scouts | MIXED | 47 | 11% | 4% | 0% | 100% | 0% | 0% | 12.4 | 60% (2/1) | – | 26/0%/0% | 21/10%/0% |
| trade:P2: Party Crasher ↔ P4: Deprogrammers | MIXED | 24 | 4% | 4% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Alchemists | MIXED | 24 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ P3: Cutpurse | MIXED | 24 | 8% | 4% | 0% | 0% | 0% | 0% | 5.4 | 50% (1/0) | – | 9/0%/0% | 15/7%/0% |
| trade:P3: Trendsetters ↔ P4: Line Cutters | MIXED | 24 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/0%/0% | 13/8%/0% |
| trade:P3: Loyalists ↔ Shop: Old Maid | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 3/0%/0% | 22/5%/0% |
| trade:P1: Roadie ↔ P4: Agents | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 11/9%/0% | 14/0%/0% |
| trade:P4: Roadie ↔ P1: Triplets | MIXED | 25 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P4: Busker | MIXED | 25 | 12% | 4% | 0% | 0% | 0% | 0% | 5.7 | 67% (1/1) | – | 6/0%/0% | 19/5%/0% |
| trade:P1: Loyalists ↔ P2: Accomplice | MIXED | 25 | 8% | 4% | 0% | 100% | 0% | 0% | 14.4 | 0% (0/0) | – | 10/10%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Polisher | MIXED | 26 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 19/5%/0% |
| trade:P1: Loyalists ↔ P4: Dabblers | MIXED | 26 | 8% | 4% | 0% | 100% | 0% | 0% | 2.4 | 50% (1/0) | – | 5/20%/0% | 21/0%/0% |
| trade:P2: Anarchist ↔ Shop: Old Maid | MIXED | 26 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 19/5%/0% |
| trade:P1: Loyalists ↔ P2: Dabblers | MIXED | 26 | 8% | 4% | 0% | 100% | 0% | 0% | 8.1 | 50% (1/0) | – | 8/0%/0% | 18/6%/0% |
| trade:P2: Critic ↔ P3: Deprogrammers | MIXED | 26 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 20/0%/0% |
| trade:P1: Polisher ↔ P2: Deprogrammers | MIXED | 27 | 7% | 4% | 0% | 0% | 0% | 0% | 4.0 | 50% (1/0) | – | 14/0%/0% | 13/8%/0% |
| trade:P1: Stunt Double ↔ P3: Busker | MIXED | 27 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 7/14%/0% | 20/0%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | MIXED | 27 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 17/6%/0% | 10/0%/0% |
| trade:P2: Busker ↔ P3: Roadie | MIXED | 27 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 12/0%/0% | 15/7%/0% |
| trade:P4: Scouts ↔ P2: Volunteer | MIXED | 28 | 7% | 4% | 0% | 100% | 0% | 0% | 3.0 | 0% (0/0) | – | 11/0%/0% | 17/6%/0% |
| trade:P2: Busker ↔ P3: Deprogrammers | MIXED | 28 | 7% | 4% | 0% | 0% | 0% | 0% | 10.9 | 0% (0/0) | – | 13/0%/0% | 15/7%/0% |
| trade:P3: Recruit Bonus ↔ P2: Volunteer | MIXED | 28 | 7% | 4% | 0% | 0% | 0% | 0% | 7.5 | 50% (1/0) | – | 8/0%/0% | 20/5%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Cashier | MIXED | 29 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 12/8%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ Shop: Old Maid | MIXED | 29 | 10% | 3% | 0% | 100% | 0% | 0% | 18.1 | 67% (1/1) | – | 12/8%/0% | 17/0%/0% |
| trade:P2: Con Men ↔ P1: Loyalists | MIXED | 29 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 7/14%/0% | 22/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Early Birds | MIXED | 29 | 10% | 3% | 0% | 0% | 0% | 0% | 9.4 | 33% (1/0) | – | 15/0%/0% | 14/7%/0% |
| trade:P2: Accomplice ↔ P4: Cutpurse | MIXED | 30 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 14/7%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Old Maid | MIXED | 30 | 3% | 3% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 4/25%/0% | 26/0%/0% |
| trade:P3: Trendsetters ↔ P4: Dabblers | MIXED | 31 | 6% | 3% | 0% | 0% | 0% | 0% | 6.2 | 50% (1/0) | – | 12/8%/0% | 19/0%/0% |
| trade:P4: Loyalists ↔ P3: Dabblers | MIXED | 32 | 13% | 3% | 0% | 0% | 0% | 0% | 18.3 | 0% (0/0) | – | 10/10%/0% | 22/0%/0% |
| trade:P3: Scouts ↔ P1: Deprogrammers | MIXED | 32 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 15/0%/0% | 17/6%/0% |
| trade:P2: Deprogrammers ↔ P4: Dabblers | MIXED | 33 | 3% | 3% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 14/7%/0% | 19/0%/0% |
| trade:P2: Loyalists ↔ P3: Scouts | MIXED | 33 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 29/3%/0% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | MIXED | 39 | 13% | 3% | 0% | 100% | 0% | 0% | 9.0 | 20% (0/1) | – | 14/0%/0% | 25/4%/0% |
| choose member:P1's Doormen (5) | MIXED | 15 | 27% | 0% | 0% | – | – | – | 14.7 | 25% (0/1) | – | 1/0%/0% | 14/0%/0% |
| choose member:P1's Window Dressers (4) | MIXED | 27 | 22% | 0% | 0% | – | – | – | 13.3 | 0% (0/0) | – | 4/0%/0% | 23/0%/0% |
| choose member:P3's Loyalists (5) | MIXED | 15 | 13% | 0% | 0% | – | – | – | 21.7 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Clockmakers ↔ Shop: Old Maid | MIXED | 19 | 11% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| choose member:P2's Shopkeeper (4) | MIXED | 18 | 22% | 0% | 0% | – | – | – | 17.0 | 0% (0/0) | – | – | 18/0%/0% |
| choose member:P1's Bouncers (4) | MIXED | 20 | 25% | 0% | 0% | – | – | – | 16.2 | 0% (0/0) | – | 1/0%/0% | 19/0%/0% |
| choose member:P3's Alchemists (5) | MIXED | 40 | 10% | 0% | 0% | – | – | – | 15.1 | 0% (0/0) | – | 1/0%/0% | 39/0%/0% |
| trade:P2: Fan Club ↔ P3: Shopkeeper | MIXED | 17 | 12% | 0% | 0% | – | – | – | 10.7 | 50% (0/1) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ P3: Deprogrammers | MIXED | 18 | 11% | 0% | 0% | – | – | – | 10.4 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| choose member:P1's Martyrs (4) | MIXED | 25 | 16% | 0% | 0% | – | – | – | 10.2 | 0% (0/0) | – | 1/0%/0% | 24/0%/0% |
| trade:P1: Panel ↔ P3: Roadie | MIXED | 15 | 13% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| choose member:P4's Deprogrammers (3) | MIXED | 37 | 11% | 0% | 0% | – | – | – | 18.2 | 0% (0/0) | – | 3/0%/0% | 34/0%/0% |
| choose member:Muse | MIXED | 17 | 24% | 0% | 0% | – | – | – | 16.5 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| choose member:P2's Martyrs (4) | MIXED | 15 | 13% | 0% | 0% | – | – | – | 11.7 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P4: Volunteer | MIXED | 39 | 13% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 12/0%/0% | 27/0%/0% |
| trade:P2: Anarchist ↔ Shop: Extra Hand | MIXED | 15 | 13% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P4: Scouts ↔ P3: Volunteer | MIXED | 20 | 10% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Volunteer ↔ P3: Deprogrammers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 7.4 | 50% (0/1) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Loyalists ↔ P1: Party Crasher | MIXED | 18 | 11% | 0% | 0% | – | – | – | 8.5 | 50% (0/1) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Fan Club ↔ P2: Busker | MIXED | 15 | 13% | 0% | 0% | – | – | – | 5.3 | 50% (0/1) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Con Men ↔ P1: Stunt Double | MIXED | 17 | 12% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Line Cutters | MIXED | 20 | 15% | 0% | 0% | – | – | – | 6.7 | 67% (0/2) | – | 3/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P3: Volunteer | MIXED | 30 | 10% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Fan Club ↔ P4: Busker | MIXED | 19 | 11% | 0% | 0% | – | – | – | 6.6 | 50% (0/1) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Polisher | MIXED | 15 | 13% | 0% | 0% | – | – | – | 6.2 | 100% (0/2) | – | 8/0%/0% | 7/0%/0% |
| choose member:P3's Double Agent (8) | MIXED | 19 | 11% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | – | 19/0%/0% |
| trade:P2: Fan Club ↔ P3: Busker | MIXED | 30 | 17% | 0% | 0% | – | – | – | 23.2 | 40% (0/2) | – | 11/0%/0% | 19/0%/0% |
| choose member:P3's Stunt Double (5) | MIXED | 20 | 10% | 0% | 0% | – | – | – | 14.5 | 50% (0/1) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Panel ↔ P1: Volunteer | MIXED | 17 | 12% | 0% | 0% | – | – | – | 16.7 | 50% (0/1) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P3: Deprogrammers | MIXED | 30 | 10% | 0% | 0% | – | – | – | 23.4 | 0% (0/0) | – | 14/0%/0% | 16/0%/0% |
| trade:P1: Window Dressers ↔ P2: Critic | MIXED | 19 | 16% | 0% | 0% | – | – | – | 15.5 | 33% (0/1) | – | 8/0%/0% | 11/0%/0% |
| choose member:P4's Shopkeeper (4) | FILLER | 21 | 19% | 5% | 5% | 100% | 100% | 100% | 14.9 | 0% (0/0) | – | 1/0%/100% | 20/5%/0% |
| choose member:P2's Kingpin (4) | FILLER | 42 | 19% | 2% | 5% | 100% | 0% | 100% | 7.9 | 38% (1/2) | – | 8/13%/0% | 34/0%/6% |
| trade:P4: Busker ↔ P2: Accomplice | FILLER | 24 | 13% | 4% | 4% | 0% | 0% | 100% | 19.1 | 33% (0/1) | – | 16/6%/6% | 8/0%/0% |
| choose member:P4's Kingpin (4) | FILLER | 50 | 20% | 8% | 4% | 25% | 0% | 100% | 8.4 | 20% (1/1) | – | 2/0%/0% | 48/8%/4% |
| choose member:P2's Chronicler (5) | FILLER | 25 | 24% | 8% | 4% | 50% | 50% | 100% | 3.8 | 20% (0/1) | – | 1/0%/0% | 24/8%/4% |
| choose member:P1's Busker (4) | FILLER + MISJUDGED | 51 | 20% | 6% | 4% | 33% | 33% | 100% | 9.2 | 67% (2/4) | – | 4/25%/0% | 47/4%/4% |
| choose member:P2's Stunt Double (5) | FILLER | 30 | 13% | 3% | 3% | 0% | 0% | 100% | 5.2 | 25% (1/0) | – | 1/0%/0% | 29/3%/3% |
| choose member:P2's Grifter (8) | FILLER + MISJUDGED | 41 | 20% | 10% | 2% | 25% | 0% | 100% | 19.3 | 50% (2/2) | – | 3/67%/33% | 38/5%/0% |
| choose member:P4's Dabblers (3) | FILLER + MISJUDGED | 49 | 16% | 12% | 2% | 33% | 0% | 100% | 15.9 | 63% (4/1) | – | 4/25%/0% | 45/11%/2% |
| choose member:P1's Roadie (3) | FILLER | 49 | 18% | 8% | 2% | 75% | 50% | 100% | 13.4 | 57% (1/3) | – | 4/0%/0% | 45/9%/2% |
| choose member:P3's Line Cutters (2) | FILLER | 49 | 8% | 4% | 2% | 50% | 0% | 100% | 12.2 | 50% (2/0) | – | 5/0%/0% | 44/5%/2% |
| choose member:P3's Kingpin (4) | FILLER | 55 | 9% | 4% | 2% | 0% | 0% | 100% | 8.8 | 40% (2/0) | – | 5/0%/0% | 50/4%/2% |
| choose member:P1's Dabblers (3) | FILLER | 64 | 8% | 3% | 2% | 50% | 0% | 100% | 2.5 | 20% (1/0) | – | 6/0%/0% | 58/3%/2% |
| trade:P1: Recruit Bonus ↔ P2: Volunteer | FILLER | 65 | 5% | 3% | 2% | 100% | 0% | 50% | 0.3 | 33% (1/0) | – | 28/4%/4% | 37/3%/0% |
| choose member:P2's Line Cutters (2) | FILLER | 75 | 7% | 4% | 1% | 33% | 0% | 100% | 4.6 | 40% (2/0) | – | 11/9%/0% | 64/3%/2% |
| choose member:P3's Dabblers (3) | FILLER + MISJUDGED | 79 | 13% | 5% | 1% | 50% | 0% | 100% | 12.4 | 70% (4/3) | – | 5/0%/0% | 74/5%/1% |
| choose member:P4's Panel (7) | FILLER | 31 | 19% | 10% | 0% | 67% | 0% | 100% | 15.8 | 33% (2/0) | – | 4/0%/0% | 27/11%/0% |
| choose member:P3's Panel (7) | FILLER | 21 | 38% | 10% | 0% | 100% | 50% | 100% | 3.6 | 14% (1/0) | – | 1/100%/0% | 20/5%/0% |
| choose member:P3's Extortionist (7) | FILLER | 33 | 18% | 9% | 0% | 67% | 0% | 100% | 8.6 | 33% (2/0) | – | – | 33/9%/0% |
| choose member:P4's Loyalists (5) | FILLER | 25 | 24% | 8% | 0% | 0% | 0% | 100% | 14.6 | 33% (2/0) | – | 3/0%/0% | 22/9%/0% |
| choose member:P3's Grifter (8) | FILLER | 26 | 19% | 8% | 0% | 0% | 0% | 100% | 3.6 | 40% (1/1) | – | 1/0%/0% | 25/8%/0% |
| trade:P1: Accomplice ↔ P2: Cutpurse | FILLER | 27 | 7% | 7% | 0% | 100% | 0% | 50% | – | 50% (1/0) | – | 8/13%/0% | 19/5%/0% |
| choose member:P4's Roadie (3) | FILLER | 27 | 15% | 7% | 0% | 100% | 0% | 100% | 13.9 | 75% (2/1) | – | 3/0%/0% | 24/8%/0% |
| choose member:P1's Extortionist (7) | FILLER | 29 | 14% | 7% | 0% | 100% | 0% | 100% | 11.5 | 25% (1/0) | – | 1/100%/0% | 28/4%/0% |
| choose member:P4's Extortionist (7) | FILLER | 29 | 14% | 7% | 0% | 50% | 0% | 100% | 13.3 | 50% (2/0) | – | – | 29/7%/0% |
| trade:P2: Shopkeeper ↔ P3: Recluse | FILLER | 15 | 7% | 7% | 0% | 0% | 0% | 100% | – | 0% (0/0) | – | 5/20%/0% | 10/0%/0% |
| choose member:P3's Recluse (4) | FILLER | 15 | 20% | 7% | 0% | 0% | 0% | 100% | 11.0 | 33% (1/0) | – | – | 15/7%/0% |
| trade:P1: Con Men ↔ P3: Loyalists | FILLER | 15 | 13% | 7% | 0% | 100% | 100% | 100% | 30.0 | 0% (0/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Martyrs | FILLER | 15 | 7% | 7% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 9/11%/0% | 6/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Gardener | FILLER | 16 | 6% | 6% | 0% | 100% | 100% | 100% | – | – (0/0) | – | 7/14%/0% | 9/0%/0% |
| trade:P1: Regular ↔ P3: Deprogrammers | FILLER | 16 | 6% | 6% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 8/13%/0% | 8/0%/0% |
| choose member:P2's Extortionist (7) | FILLER | 36 | 31% | 6% | 0% | 100% | 0% | 100% | 14.0 | 45% (2/3) | – | 3/0%/0% | 33/6%/0% |
| choose member:P2's Loyalists (5) | FILLER | 18 | 11% | 6% | 0% | 100% | 0% | 100% | 5.6 | 50% (1/0) | – | – | 18/6%/0% |
| trade:P4: Con Men ↔ Shop: Alchemists | FILLER | 19 | 5% | 5% | 0% | 0% | 0% | 100% | – | 0% (0/0) | – | 3/33%/0% | 16/0%/0% |
| choose member:P4's Recluse (4) | FILLER | 20 | 10% | 5% | 0% | 0% | 0% | 100% | 5.5 | 100% (1/1) | – | 1/0%/0% | 19/5%/0% |
| trade:P1: Roadie ↔ Shop: Muse | FILLER | 20 | 5% | 5% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 12/8%/0% | 8/0%/0% |
| trade:P4: Accomplice ↔ P2: Line Cutters | FILLER | 20 | 5% | 5% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 12/8%/0% | 8/0%/0% |
| choose member:P1's Double Agent (8) | FILLER | 21 | 10% | 5% | 0% | 100% | 0% | 100% | 17.0 | 50% (1/0) | – | – | 21/5%/0% |
| trade:P4: Gardener ↔ P2: Volunteer | FILLER | 21 | 5% | 5% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 14/7%/0% | 7/0%/0% |
| choose member:P1's Doppelganger (5) | FILLER | 22 | 5% | 5% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 3/0%/0% | 19/5%/0% |
| choose member:P4's Double Agent (8) | FILLER | 22 | 14% | 5% | 0% | 100% | 0% | 100% | 21.0 | 33% (1/0) | – | – | 22/5%/0% |
| trade:P1: Accomplice ↔ P4: Volunteer | FILLER | 27 | 4% | 4% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 6/17%/0% | 21/0%/0% |
| choose member:P2's Busker (4) | FILLER | 28 | 14% | 4% | 0% | 0% | 0% | 100% | 14.7 | 50% (1/1) | – | 2/0%/0% | 26/4%/0% |
| trade:P1: Scouts ↔ P2: Deprogrammers | FILLER | 31 | 3% | 3% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 19/5%/0% | 12/0%/0% |
| choose member:P1's Stunt Double (5) | FILLER | 33 | 18% | 3% | 0% | 100% | 100% | 100% | 19.1 | 40% (0/2) | – | 2/0%/0% | 31/3%/0% |
| choose member:P4's Chronicler (5) | FILLER | 35 | 17% | 3% | 0% | 100% | 0% | 100% | 11.0 | 50% (0/3) | – | 1/0%/0% | 34/3%/0% |
| choose member:P3's Roadie (3) | FILLER | 38 | 11% | 3% | 0% | 100% | 100% | 100% | 13.2 | 33% (0/1) | – | 5/0%/0% | 33/3%/0% |
| trade:P3: Stunt Double ↔ P1: Agents | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.3 | 0% (0/0) | – | 8/0%/13% | 7/0%/0% |
| trade:P3: Triplets ↔ P2: Deprogrammers | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/25% | 12/0%/0% |
| trade:P3: Doppelganger ↔ P1: Triplets | DEAD | 16 | 6% | 0% | 6% | – | – | – | 1.2 | 100% (0/1) | – | 5/0%/20% | 11/0%/0% |
| trade:P2: Extortionist ↔ P4: Con Men | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.9 | 0% (0/0) | – | 3/0%/33% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Deprogrammers | DEAD | 19 | 5% | 0% | 5% | – | – | – | 1.2 | 0% (0/0) | – | 11/0%/0% | 8/0%/13% |
| trade:P4: Party Crasher ↔ P1: Deprogrammers | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.5 | 100% (0/1) | – | 1/0%/0% | 18/0%/6% |
| trade:P4: Toastmaster ↔ P3: Dabblers | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.7 | 0% (0/0) | – | 8/0%/0% | 11/0%/9% |
| trade:P1: Alchemists ↔ P3: Triplets | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.6 | 100% (0/1) | – | 2/0%/0% | 17/0%/6% |
| trade:P3: Alchemists ↔ P2: Accomplice | DEAD | 19 | 5% | 0% | 5% | – | – | – | 1.0 | 0% (0/0) | – | 4/0%/25% | 15/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Scouts | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.1 | 0% (0/0) | – | 6/0%/0% | 13/0%/8% |
| trade:P4: Busker ↔ Shop: Regular | DEAD | 19 | 5% | 0% | 5% | – | – | – | 1.2 | 0% (0/0) | – | 10/0%/10% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Deprogrammers | DEAD | 21 | 10% | 0% | 5% | – | – | – | 3.9 | 0% (0/0) | – | 10/0%/0% | 11/0%/9% |
| trade:P3: Accomplice ↔ P1: Deprogrammers | DEAD | 22 | 9% | 0% | 5% | – | – | – | 4.8 | 0% (0/0) | – | 8/0%/13% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Roadie | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.2 | 0% (0/0) | – | 12/0%/0% | 10/0%/10% |
| trade:P2: Roadie ↔ P1: Deprogrammers | DEAD | 22 | 9% | 0% | 5% | – | – | – | 17.3 | 0% (0/0) | – | 10/0%/0% | 12/0%/8% |
| trade:P1: Scouts ↔ P3: Accomplice | DEAD | 23 | 4% | 0% | 4% | – | – | – | 0.7 | 100% (0/1) | – | 12/0%/8% | 11/0%/0% |
| trade:P1: Alchemists ↔ P3: Accomplice | DEAD | 24 | 8% | 0% | 4% | – | – | – | 5.6 | 0% (0/0) | – | 5/0%/20% | 19/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 24 | 8% | 0% | 4% | – | – | – | 7.8 | 0% (0/0) | – | 7/0%/14% | 17/0%/0% |
| trade:P3: Roadie ↔ P2: Deprogrammers | DEAD | 24 | 8% | 0% | 4% | – | – | – | 6.3 | 0% (0/0) | – | 17/0%/6% | 7/0%/0% |
| trade:P2: Party Crasher ↔ P4: Busker | DEAD | 25 | 4% | 0% | 4% | – | – | – | 1.3 | 0% (0/0) | – | 9/0%/11% | 16/0%/0% |
| choose member:P3's Trendsetters (4) | DEAD | 29 | 7% | 0% | 3% | – | – | – | 8.4 | 0% (0/0) | – | – | 29/0%/3% |
| trade:P3: Roadie ↔ P4: Scouts | DEAD | 29 | 3% | 0% | 3% | – | – | – | 0.4 | 100% (0/1) | – | 17/0%/6% | 12/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 30 | 7% | 0% | 3% | – | – | – | 5.8 | 50% (0/1) | – | 1/0%/0% | 29/0%/3% |
| choose member:P1's Sticky Fingers (4) | DEAD | 39 | 3% | 3% | 3% | 0% | 0% | 100% | – | 100% (1/0) | – | 3/0%/0% | 36/3%/3% |
| trade:P2: Dabblers ↔ P3: Volunteer | DEAD | 41 | 5% | 2% | 2% | 0% | 0% | 0% | 0.9 | 0% (0/0) | – | 19/0%/5% | 22/5%/0% |
| trade:P2: Deprogrammers ↔ P1: Volunteer | DEAD | 44 | 9% | 2% | 2% | 100% | 0% | 0% | 6.2 | 50% (0/2) | – | 23/0%/4% | 21/5%/0% |
| trade:P1: Recruit Bonus ↔ P3: Dabblers | DEAD | 44 | 2% | 0% | 2% | – | – | – | 0.0 | 0% (0/0) | – | 13/0%/8% | 31/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Roadie | DEAD | 45 | 4% | 0% | 2% | – | – | – | 1.3 | 0% (0/0) | – | 14/0%/0% | 31/0%/3% |
| choose member:P1's Kingpin (4) | DEAD | 46 | 9% | 2% | 2% | 100% | 0% | 100% | 3.4 | 50% (1/1) | – | 6/0%/0% | 40/3%/3% |
| trade:P2: Line Cutters ↔ P3: Volunteer | DEAD | 47 | 6% | 2% | 2% | 0% | 0% | 0% | 8.3 | 33% (1/0) | – | 27/0%/0% | 20/5%/5% |
| trade:P3: Alchemists ↔ Shop: Old Maid | DEAD | 47 | 2% | 0% | 2% | – | – | – | 0.5 | 0% (0/0) | – | 12/0%/8% | 35/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Scouts | DEAD | 48 | 4% | 2% | 2% | 0% | 0% | 0% | 1.3 | 50% (0/1) | – | 23/4%/4% | 25/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Line Cutters | DEAD | 51 | 6% | 2% | 2% | 0% | 0% | 0% | 13.4 | 0% (0/0) | – | 20/5%/5% | 31/0%/0% |
| trade:P4: Scouts ↔ P1: Deprogrammers | DEAD | 34 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 13/8%/0% | 21/0%/0% |
| trade:P1: Dabblers ↔ P2: Cutpurse | DEAD | 34 | 3% | 3% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 14/7%/0% | 20/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | DEAD | 34 | 9% | 3% | 0% | 100% | 0% | 0% | 13.0 | 0% (0/0) | – | 13/8%/0% | 21/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Triplets | DEAD | 35 | 6% | 3% | 0% | 100% | 0% | 0% | 17.6 | 50% (1/0) | – | 21/5%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ Shop: Triplets | DEAD | 35 | 3% | 3% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 18/6%/0% | 17/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 36 | 6% | 3% | 0% | 0% | 0% | 0% | 35.0 | 0% (0/0) | – | 13/8%/0% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Line Cutters | DEAD | 37 | 5% | 3% | 0% | 0% | 0% | 0% | 2.4 | 0% (0/0) | – | 20/5%/0% | 17/0%/0% |
| trade:P4: Loyalists ↔ P3: Recruit Bonus | DEAD | 38 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 34/3%/0% |
| choose member:P1's Deprogrammers (3) | DEAD | 40 | 8% | 3% | 0% | 0% | 0% | 100% | 22.9 | 33% (1/0) | – | 6/17%/0% | 34/0%/0% |
| trade:P1: Dabblers ↔ P3: Volunteer | DEAD | 42 | 10% | 2% | 0% | 100% | 0% | 0% | 6.7 | 25% (0/1) | – | 18/0%/0% | 24/4%/0% |
| trade:P2: Dabblers ↔ Shop: Old Maid | DEAD | 43 | 2% | 2% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 27/4%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Scouts | DEAD | 45 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 19/5%/0% | 26/0%/0% |
| trade:P4: Loyalists ↔ Shop: Old Maid | DEAD | 46 | 2% | 2% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 38/0%/0% |
| trade:P3: Line Cutters ↔ P4: Volunteer | DEAD | 47 | 2% | 2% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 18/0%/0% | 29/3%/0% |
| choose member:P2's Dabblers (3) | DEAD | 49 | 6% | 2% | 0% | 100% | 0% | 100% | 2.7 | 33% (1/0) | – | 3/0%/0% | 46/2%/0% |
| trade:P1: Dabblers ↔ P3: Deprogrammers | DEAD | 49 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 15/0%/0% | 34/3%/0% |
| trade:P2: Line Cutters ↔ P1: Volunteer | DEAD | 49 | 8% | 2% | 0% | 100% | 0% | 0% | 14.4 | 0% (0/0) | – | 15/7%/0% | 34/0%/0% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 55 | 2% | 2% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 23/0%/0% | 32/3%/0% |
| choose member:P1's Scouts (3) | DEAD | 59 | 2% | 2% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 2/0%/0% | 57/2%/0% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | DEAD | 59 | 2% | 2% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 26/4%/0% | 33/0%/0% |
| trade:P3: Scouts ↔ P4: Volunteer | DEAD | 60 | 3% | 2% | 0% | 100% | 0% | 0% | 20.3 | 50% (1/0) | – | 30/3%/0% | 30/0%/0% |
| trade:P1: Line Cutters ↔ P4: Volunteer | DEAD | 60 | 2% | 2% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 29/0%/0% | 31/3%/0% |
| choose member:P2's Accomplice (3) | DEAD | 75 | 3% | 1% | 0% | 100% | 0% | 100% | 24.0 | 50% (1/0) | – | 7/0%/0% | 68/1%/0% |
| choose member:P2's Agents (3) | DEAD | 31 | 6% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 3/0%/0% | 28/0%/0% |
| choose member:P4's Line Cutters (2) | DEAD | 73 | 1% | 0% | 0% | – | – | – | 2.1 | 100% (0/1) | – | 7/0%/0% | 66/0%/0% |
| choose member:P1's Window Shopper (5) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| choose member:P3's Cutpurse (3) | DEAD | 68 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 67/0%/0% |
| choose member:P1's Accomplice (3) | DEAD | 64 | 2% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 4/0%/0% | 60/0%/0% |
| choose member:P1's Desperado (5) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| choose member:P2's Cutpurse (3) | DEAD | 60 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 55/0%/0% |
| choose member:P2's Scouts (3) | DEAD | 57 | 2% | 0% | 0% | – | – | – | 2.5 | 0% (0/0) | – | 6/0%/0% | 51/0%/0% |
| choose member:P2's Window Shopper (5) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| choose member:P4's Critic (3) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| choose member:P3's Polisher (3) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Accomplice ↔ P3: Dabblers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P2: Accomplice ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 6/0%/0% |
| trade:P2: Accomplice ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P2: Kingpin ↔ P3: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P2: Kingpin ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P3: Dabblers ↔ P2: Accomplice | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 26/0%/0% |
| trade:P3: Dabblers ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ P4: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Triplets | DEAD | 40 | 5% | 0% | 0% | – | – | – | 38.4 | 50% (0/1) | – | 18/0%/0% | 22/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Accomplice | DEAD | 21 | 5% | 0% | 0% | – | – | – | 20.2 | 0% (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Drifters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.0 | 100% (0/1) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P3: Party Crasher ↔ P4: Cutpurse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P3: Party Crasher ↔ P4: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P4: Cutpurse ↔ P2: Accomplice | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P4: Line Cutters ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Drifters ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Drifters ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Drifters ↔ P3: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 2.7 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Scouts ↔ Shop: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Triplets | DEAD | 33 | 3% | 0% | 0% | – | – | – | 10.8 | 0% (0/0) | – | 18/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P2: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P3: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P3: Deprogrammers | DEAD | 44 | 2% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 15/0%/0% | 29/0%/0% |
| pass:Don’t swap | DEAD | 1356 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 677/0%/0% | 679/0%/0% |
| trade:P1: Cutpurse ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Cutpurse ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P2: Accomplice ↔ P1: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ P1: Cutpurse | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Dyer ↔ Shop: Harmonist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 62 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 58/0%/0% |
| choose member:P1's Recruit Bonus (3) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Polisher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Accomplice ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P3: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P2: Kingpin ↔ Shop: Sticky Fingers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 9.1 | 100% (0/1) | – | 12/0%/0% | 4/0%/0% |
| trade:P2: Kingpin ↔ P3: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Dabblers ↔ P1: Recruit Bonus | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 28/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Sticky Fingers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 20/0%/0% |
| trade:P3: Party Crasher ↔ P1: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P3: Polisher ↔ P1: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ Shop: Volunteer | DEAD | 19 | 5% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P1: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Triplets ↔ P2: Accomplice | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Loyalists ↔ Shop: Sticky Fingers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Loyalists ↔ Shop: Desperado | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P4: Loyalists ↔ P1: Recruit Bonus | DEAD | 25 | 4% | 0% | 0% | – | – | – | 14.8 | 0% (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P2: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Party Crasher | DEAD | 16 | 6% | 0% | 0% | – | – | – | 1.7 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Triplets | DEAD | 25 | 4% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P3: Kingpin ↔ Shop: Sticky Fingers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 17/0%/0% |
| trade:P3: Kingpin ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P4: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Patriarch | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 25/0%/0% |
| trade:P4: Con Men ↔ Shop: Gift Wrapper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Philanthropists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ P3: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P2: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 67 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 64/0%/0% |
| trade:P2: Scouts ↔ P1: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 12/0%/0% |
| trade:P2: Polisher ↔ P1: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Con Men ↔ Shop: Big Tent | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Con Men ↔ Shop: Patriarch | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 7/0%/0% |
| trade:P2: Con Men ↔ Shop: Gift Wrapper | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P2: Con Men ↔ Shop: Philanthropists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Con Men ↔ Shop: Old Maid | DEAD | 35 | 6% | 0% | 0% | – | – | – | 15.4 | 50% (0/1) | – | 10/0%/0% | 25/0%/0% |
| trade:P2: Con Men ↔ P3: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ Shop: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 8/0%/0% |
| choose member:P2's Polisher (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| choose member:P3's Drifters (3) | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 24/0%/0% |
| choose member:P3's Triplets (3) | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 30/0%/0% |
| trade:P1: Busker ↔ Shop: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ Shop: Muse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ P2: Line Cutters | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 25/0%/0% |
| trade:P1: Scouts ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P4: Polisher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ Shop: Old Maid | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ Shop: Raiders | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P2: Line Cutters ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Line Cutters ↔ P3: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Stunt Double ↔ P3: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Stunt Double ↔ P3: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Old Maid | DEAD | 22 | 5% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Con Men ↔ Shop: Exporters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Con Men ↔ Shop: Raiders | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Recluse | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Party Crasher ↔ P4: Polisher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: HR ↔ Shop: Extra Hand | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Con Men ↔ Shop: Courier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Con Men ↔ Shop: Hot Streak | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ Shop: Desperado | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ Shop: Cashier | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P4: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Scouts ↔ P4: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Cashier | DEAD | 27 | 4% | 0% | 0% | – | – | – | 31.3 | 0% (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Martyrs ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Martyrs ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Martyrs ↔ P4: Shopkeeper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Dabblers ↔ P4: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 26/0%/0% |
| trade:P2: Dabblers ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ Shop: Old Maid | DEAD | 34 | 3% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 14/0%/0% | 20/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P4: Early Birds ↔ Shop: Old Maid | DEAD | 15 | 7% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P4: Anarchist ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Early Birds ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Patriarch ↔ Shop: Sticky Fingers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P2: Dabblers ↔ Shop: Triplets | DEAD | 43 | 2% | 0% | 0% | – | – | – | 25.3 | 0% (0/0) | – | 11/0%/0% | 32/0%/0% |
| trade:P2: Dabblers ↔ Shop: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P3: Loyalists ↔ Shop: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 24.2 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Early Birds ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Early Birds ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ Shop: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Volunteer ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Volunteer ↔ P3: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| choose member:P2's Volunteer (1) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| choose member:P4's Early Birds (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| choose member:P4's Cashier (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Triplets | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 42 | 2% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 13/0%/0% | 29/0%/0% |
| trade:P2: Martyrs ↔ P3: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Martyrs ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Scouts ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Scouts ↔ P1: Recruit Bonus | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P3: Scouts ↔ P4: Deprogrammers | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 22/0%/0% |
| trade:P3: Recluse ↔ P1: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P3: Recluse ↔ P4: Deprogrammers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | DEAD | 31 | 3% | 0% | 0% | – | – | – | 41.0 | 0% (0/0) | – | 18/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Toastmaster | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 39 | 3% | 0% | 0% | – | – | – | 19.3 | 0% (0/0) | – | 12/0%/0% | 27/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Scouts | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 21/0%/0% |
| trade:P4: HR ↔ Shop: Mentor & Protégés | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: HR ↔ Shop: Mentor & Protégés | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P2: Scouts ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P1: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 17/0%/0% |
| trade:P2: Martyrs ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Patriarch ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Recluse ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: HR ↔ Shop: Debt Collectors | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P3: HR ↔ Shop: Smooth Talkers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Panel ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ Shop: Alchemists | DEAD | 21 | 5% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P3: Triplets ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P4: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P3: Con Men ↔ Shop: Alchemists | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 25/0%/0% |
| trade:P3: Con Men ↔ P2: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Line Cutters | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 31/0%/0% |
| trade:P1: Timekeepers ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Shift Crew ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P2: Shift Crew ↔ P3: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Recluse ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Panel ↔ Shop: Gift Wrapper | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P3: Scouts ↔ P2: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P3: Triplets ↔ P2: Line Cutters | DEAD | 41 | 2% | 0% | 0% | – | – | – | 3.3 | 0% (0/0) | – | 14/0%/0% | 27/0%/0% |
| trade:P3: Con Men ↔ Shop: Gift Wrapper | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 25/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Line Cutters | DEAD | 34 | 6% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ Shop: Raiders | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ Shop: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P2: Toastmaster | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Toastmaster ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Triplets ↔ P4: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P4: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ Shop: Cashier | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P1: Dabblers ↔ Shop: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ Shop: Loyalists | DEAD | 18 | 6% | 0% | 0% | – | – | – | 28.9 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P4: Volunteer | DEAD | 41 | 5% | 0% | 0% | – | – | – | 4.5 | 0% (0/0) | – | 16/0%/0% | 25/0%/0% |
| trade:P1: Dabblers ↔ P4: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Triplets | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 22/0%/0% |
| trade:P2: Triplets ↔ Shop: Cashier | DEAD | 21 | 5% | 0% | 0% | – | – | – | 18.9 | 0% (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Triplets ↔ P1: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 22/0%/0% |
| trade:P2: Triplets ↔ P4: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 24/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Cashier | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 17/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Old Money | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.3 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P1: Dabblers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Party Crasher ↔ P1: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Party Crasher ↔ P4: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P3: Recluse ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Recluse ↔ P2: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Volunteer ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Volunteer ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Patriarch ↔ Shop: Loyalists | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Alchemists ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Alchemists ↔ Shop: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P4: Alchemists ↔ P2: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Dabblers ↔ P4: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P1: Volunteer | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P2: Triplets ↔ P4: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 27/0%/0% |
| trade:P4: Line Cutters ↔ P1: Volunteer | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 26/0%/0% |
| trade:P1: Scouts ↔ P2: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P4: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 22/0%/0% |
| trade:P1: Scouts ↔ P4: Deprogrammers | DEAD | 50 | 2% | 0% | 0% | – | – | – | 3.1 | 100% (0/1) | – | 18/0%/0% | 32/0%/0% |
| trade:P2: Triplets ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Scouts | DEAD | 40 | 3% | 0% | 0% | – | – | – | 14.4 | 100% (0/1) | – | 20/0%/0% | 20/0%/0% |
| trade:P2: Panel ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Con Men ↔ Shop: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P2: Con Men ↔ P4: Alchemists | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 30/0%/0% |
| trade:P3: Recluse ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Party Crasher ↔ P1: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Scouts | DEAD | 45 | 2% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 15/0%/0% | 30/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 16/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Scouts | DEAD | 21 | 5% | 0% | 0% | – | – | – | 8.4 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Volunteer ↔ P1: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 12/0%/0% |
| trade:P2: Volunteer ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P2: Volunteer | DEAD | 27 | 7% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ P1: Recruit Bonus | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 14/0%/0% |
| choose member:P1's Party Crasher (4) | DEAD | 35 | 3% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 4/0%/0% | 31/0%/0% |
| choose member:P3's Desperado (5) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| choose member:P4's Scouts (3) | DEAD | 57 | 2% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | 5/0%/0% | 52/0%/0% |
| choose member:P4's Cutpurse (3) | DEAD | 65 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 57/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Cutpurse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Cashier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ P2: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P3: Dabblers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 30.5 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ P3: Recluse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Party Crasher ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ P4: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ Shop: Cashier | DEAD | 24 | 4% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P3: Recluse ↔ P1: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ Shop: Cashier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P4: Scouts | DEAD | 50 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 40/0%/0% |
| trade:P3: Triplets ↔ P4: Cutpurse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ Shop: Cashier | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ P3: Triplets | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 37/0%/0% |
| trade:P4: Cutpurse ↔ P1: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Cutpurse ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Panel ↔ Shop: Old Maid | DEAD | 27 | 7% | 0% | 0% | – | – | – | 10.2 | 50% (0/1) | – | 2/0%/0% | 25/0%/0% |
| trade:P1: Panel ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Accomplice ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Triplets ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ Shop: Loyalists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 100% (0/1) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Cashier | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 22/0%/0% |
| trade:P1: Scouts ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P3: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 20/0%/0% |
| trade:P2: Accomplice ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ P1: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 6/0%/0% |
| trade:P3: Triplets ↔ P1: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Cutpurse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 13.1 | 100% (0/1) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Cashier | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P2: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: High Society ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Cutpurse ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Cutpurse ↔ P3: Triplets | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 25/0%/0% |
| trade:P2: Cashier ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Triplets ↔ P2: Cutpurse | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P3: Philanthropists ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Panel ↔ Shop: Old Maid | DEAD | 22 | 5% | 0% | 0% | – | – | – | 25.8 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Panel ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Kingpin ↔ P1: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Kingpin ↔ P2: Cutpurse | DEAD | 26 | 4% | 0% | 0% | – | – | – | 3.5 | 100% (0/1) | – | 11/0%/0% | 15/0%/0% |
| choose member:P3's Scouts (3) | DEAD | 59 | 3% | 0% | 0% | – | – | – | 32.2 | 0% (0/0) | – | 4/0%/0% | 55/0%/0% |
| choose member:P4's Recruit Bonus (3) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Kingpin ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P1: Kingpin ↔ P2: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Line Cutters ↔ P3: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P2: Accomplice ↔ P3: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P2: Shift Crew ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P2: Accomplice | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Volunteer ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Cutpurse ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ P3: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 8/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Volunteer | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 10/0%/0% |
| trade:P1: Accomplice ↔ P4: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Accomplice ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Cutpurse ↔ P1: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Line Cutters ↔ P3: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P3: Volunteer | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Patriarch ↔ Shop: Gossip | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P1: Patriarch ↔ Shop: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| trade:P1: Patriarch ↔ Shop: Desperado | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Extortionist ↔ Shop: Desperado | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P1: Line Cutters | DEAD | 49 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 31/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P4: Cutpurse ↔ Shop: Sticky Fingers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| choose member:P1's Line Cutters (2) | DEAD | 78 | 3% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/0% | 73/0%/0% |
| trade:P1: Accomplice ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Patriarch ↔ Shop: Old Maid | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 32/0%/0% |
| trade:P1: Patriarch ↔ Shop: Closer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Bouncers ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Bouncers ↔ P2: Shift Crew | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Bouncers ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Shift Crew ↔ P1: Bouncers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Extortionist ↔ Shop: Old Maid | DEAD | 20 | 5% | 0% | 0% | – | – | – | 3.5 | 100% (0/1) | – | 1/0%/0% | 19/0%/0% |
| trade:P2: Extortionist ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Philanthropists ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P3: Party Crasher ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P4: Kingpin ↔ Shop: Sticky Fingers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Bouncers ↔ P2: Timekeepers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P2: Timekeepers ↔ P1: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P2: Timekeepers ↔ P1: Bouncers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 8/0%/0% |
| trade:P2: Timekeepers ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Timekeepers ↔ P3: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P1: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Patriarch ↔ Shop: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Panel ↔ Shop: Gossip | DEAD | 15 | 7% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Scouts | DEAD | 34 | 3% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 18/0%/0% |
| trade:P1: Alchemists ↔ Shop: Sticky Fingers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Alchemists ↔ Shop: Desperado | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 21/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 33 | 3% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 10/0%/0% | 23/0%/0% |
| trade:P1: Alchemists ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Polisher ↔ P1: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Accomplice ↔ P4: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ P1: Deprogrammers | DEAD | 22 | 9% | 0% | 0% | – | – | – | 12.6 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P3: Cutpurse ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P3: Line Cutters ↔ P4: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P3: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 23/0%/0% |
| trade:P1: Trendsetters ↔ Shop: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P1: Trendsetters ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Trendsetters ↔ P3: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ Shop: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Line Cutters | DEAD | 19 | 5% | 0% | 0% | – | – | – | 21.5 | 0% (0/0) | – | 14/0%/0% | 5/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Cutpurse ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Patriarch ↔ Shop: Sticky Fingers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Patriarch ↔ Shop: Loyalists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 23/0%/0% |
| trade:P4: Con Men ↔ Shop: Loyalists | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| choose member:P3's Recruit Bonus (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| choose member:P3's Connoisseurs (4) | DEAD | 24 | 4% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 1/0%/0% | 23/0%/0% |
| choose member:P3's Critic (3) | DEAD | 25 | 8% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | – | 25/0%/0% |
| choose member:P3's Accomplice (3) | DEAD | 60 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 58/0%/0% |
| choose member:P1's Regular (3) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 23/0%/0% |
| choose member:P2's Desperado (5) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 23/0%/0% |
| choose member:P3's Go-Between (4) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Accomplice ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 23/0%/0% |
| trade:P2: Cutpurse ↔ P1: Accomplice | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Cutpurse ↔ P3: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 42.0 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Alchemists ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Line Cutters ↔ P2: Volunteer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P1: Accomplice ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Cutpurse ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Regular ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Alchemists ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Dabblers | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 22/0%/0% |
| trade:P3: Trendsetters ↔ P1: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ P2: Recruit Bonus | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 20/0%/0% |
| trade:P4: Proselytizers ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| choose member:P2's Recruit Bonus (3) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| choose member:P4's Toastmaster (3) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Accomplice ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Triplets ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ P2: Volunteer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P2: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 24/0%/0% |
| trade:P1: Triplets ↔ P3: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 18/0%/0% |
| trade:P1: Triplets ↔ P4: Deprogrammers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 13/0%/0% |
| trade:P1: Philanthropists ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Volunteer ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Old Maid | DEAD | 24 | 4% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ Shop: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P2: Dabblers ↔ P1: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P1: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 32/0%/0% |
| trade:P2: Dabblers ↔ P3: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P4: Deprogrammers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 23/0%/0% |
| trade:P3: Line Cutters ↔ P2: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Old Maid | DEAD | 21 | 5% | 0% | 0% | – | – | – | 16.2 | 100% (0/1) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Trendsetters ↔ P2: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P3: Trendsetters ↔ P4: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ P2: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P3: Grifter ↔ P4: Con Men | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Kingpin ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Kingpin ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Kingpin ↔ P1: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Kingpin ↔ P4: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Patriarch ↔ Shop: Old Maid | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 30/0%/0% |
| trade:P3: Patriarch ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Desperado | DEAD | 23 | 4% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Cutpurse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 21/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Window Dressers ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Loyalists ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Accomplice ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Triplets ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Polisher ↔ P2: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Polisher ↔ P2: Dabblers | DEAD | 30 | 3% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 12/0%/0% | 18/0%/0% |
| trade:P1: Polisher ↔ P2: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P1: Polisher ↔ P3: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P1: Polisher | DEAD | 29 | 3% | 0% | 0% | – | – | – | 11.4 | 0% (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ P1: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P1: Polisher | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ P3: Line Cutters | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 21/0%/0% |
| trade:P3: Alchemists ↔ P1: Polisher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Alchemists ↔ P2: Scouts | DEAD | 21 | 5% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P3: Patriarch ↔ P4: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ P2: Dabblers | DEAD | 34 | 3% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 1/0%/0% | 33/0%/0% |
| trade:P4: Loyalists ↔ P2: Scouts | DEAD | 28 | 4% | 0% | 0% | – | – | – | 7.8 | 100% (0/1) | – | 5/0%/0% | 23/0%/0% |
| trade:P4: Loyalists ↔ P3: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P4: Loyalists ↔ P3: Kingpin | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P3: Connoisseurs | DEAD | 24 | 4% | 0% | 0% | – | – | – | 26.0 | 0% (0/0) | – | 4/0%/0% | 20/0%/0% |
| choose member:P4's Agents (3) | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 30/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 27/0%/0% |
| trade:P1: Roadie ↔ P2: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Roadie ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P2: Agents ↔ P1: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Agents ↔ P3: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 14/0%/0% |
| trade:P2: Agents ↔ P4: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.3 | 100% (0/1) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Scouts ↔ P3: Recruit Bonus | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 22/0%/0% |
| trade:P2: Scouts ↔ P4: Volunteer | DEAD | 49 | 4% | 0% | 0% | – | – | – | 17.0 | 50% (0/1) | – | 21/0%/0% | 28/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Scouts | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 21/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Volunteer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P3: Line Cutters ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Volunteer ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Volunteer ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ Shop: Muse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
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
| trade:P1: Agents ↔ P3: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P1: Agents ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P2: Trendsetters ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Trendsetters ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Trendsetters ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P4: Dabblers ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P4: Dabblers ↔ P1: Polisher | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P1: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 4/0%/0% |
| trade:P4: Dabblers ↔ P3: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P4: Dabblers ↔ P3: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 24/0%/0% |
| trade:P1: Alchemists ↔ P2: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ Shop: Toastmaster | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Polisher ↔ P4: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Agents ↔ P2: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Volunteer ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Volunteer ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Volunteer ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P1: Volunteer ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | DEAD | 38 | 3% | 0% | 0% | – | – | – | 16.1 | 100% (0/1) | – | 19/0%/0% | 19/0%/0% |
| trade:P2: Scouts ↔ P4: Roadie | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Polisher | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P2: Window Shopper ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Toastmaster | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Volunteer | DEAD | 38 | 8% | 0% | 0% | – | – | – | 10.3 | 33% (0/1) | – | 12/0%/0% | 26/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Line Cutters ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Line Cutters ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Regular | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.2 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P4: Dabblers ↔ P1: Volunteer | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 24/0%/0% |
| trade:P4: Dabblers ↔ P2: Deprogrammers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 18/0%/0% |
| trade:P4: Roadie ↔ P1: Polisher | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Roadie ↔ P2: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P1: Polisher ↔ P3: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ P3: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Window Dressers ↔ P2: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Window Dressers ↔ P3: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 19.3 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Window Dressers ↔ P3: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P2: Deprogrammers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P1: Busker ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Busker ↔ P4: Roadie | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P2: Scouts ↔ P3: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Volunteer | DEAD | 41 | 7% | 0% | 0% | – | – | – | 8.0 | 33% (0/1) | – | 14/0%/0% | 27/0%/0% |
| trade:P3: Triplets ↔ Shop: Toastmaster | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P1: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P2: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P3: Triplets ↔ P4: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 23/0%/0% |
| trade:P3: Triplets ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P4: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Party Crasher ↔ P1: Polisher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P1: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Party Crasher ↔ P1: Window Dressers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Party Crasher ↔ P2: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Party Crasher ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P4: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P3: Triplets | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 21/0%/0% |
| trade:P4: Roadie ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Muse ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P3: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P2: Collector ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Proselytizers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Extra Hand | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Debt Collectors ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Doormen | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Con Men ↔ P1: Alchemists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Fan Club ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Anarchist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Stunt Double ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Critic ↔ P3: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Panel ↔ Shop: Anarchist | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 32/0%/0% |
| trade:P3: Alchemists ↔ P2: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P4: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P3: Alchemists ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Volunteer ↔ P2: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.6 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Con Men ↔ Shop: Anarchist | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 37/0%/0% |
| trade:P4: Fan Club ↔ P3: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Agents ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Window Dressers ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Loyalists | DEAD | 25 | 4% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Stunt Double ↔ P3: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P2: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Doormen ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Regular ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Regular ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Panel ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Alchemists ↔ Shop: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Alchemists ↔ Shop: Loyalists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Polisher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 40 | 3% | 0% | 0% | – | – | – | 8.5 | 0% (0/0) | – | 15/0%/0% | 25/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 39 | 3% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 15/0%/0% | 24/0%/0% |
| trade:P4: Roadie ↔ P3: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P4: Con Men ↔ Shop: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Fan Club ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Window Shopper ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ Shop: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ Shop: Old Maid | DEAD | 38 | 3% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 12/0%/0% | 26/0%/0% |
| trade:P1: Loyalists ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Loyalists ↔ P3: Alchemists | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 24/0%/0% |
| trade:P1: Loyalists ↔ P3: Deprogrammers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 25/0%/0% |
| trade:P2: Doormen ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P2: Busker ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Alchemists ↔ P1: Loyalists | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P3: Alchemists ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P4: Dabblers ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P4: Roadie ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Volunteer ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Accomplice | DEAD | 18 | 6% | 0% | 0% | – | – | – | 18.5 | 100% (0/1) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Gardener ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Accomplice ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P1: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Loyalists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Volunteer ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Loyalists ↔ Shop: Anarchist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ Shop: Go-Between | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P4: Loyalists ↔ Shop: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Loyalists ↔ P1: Deprogrammers | DEAD | 47 | 2% | 0% | 0% | – | – | – | 13.4 | 100% (0/1) | – | 10/0%/0% | 37/0%/0% |
| trade:P4: Loyalists ↔ P1: Gardener | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Old Maid | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 21/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 51 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 31/0%/0% |
| trade:P1: Gardener ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Gardener ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Volunteer ↔ Shop: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P1: Line Cutters ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Con Men ↔ Shop: Desperado | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P1: Con Men ↔ P3: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ P4: Loyalists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P2: Accomplice ↔ P1: Line Cutters | DEAD | 24 | 8% | 0% | 0% | – | – | – | 2.1 | 0% (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 29/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Line Cutters | DEAD | 30 | 3% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Alchemists ↔ Shop: Sticky Fingers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Critic ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ Shop: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P4: Loyalists ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.3 | 100% (0/1) | – | 4/0%/0% | 13/0%/0% |
| choose member:P1's Gardener (3) | DEAD | 22 | 5% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | – | 22/0%/0% |
| choose member:P1's Volunteer (1) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Scouts | DEAD | 39 | 5% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 16/0%/0% | 23/0%/0% |
| trade:P1: Gardener ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Con Men ↔ Shop: Anarchist | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Window Dressers ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Snobs ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ P1: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Triplets ↔ P1: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Loyalists ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Regular ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P1: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Scouts ↔ P1: Volunteer | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 22/0%/0% |
| trade:P4: Scouts ↔ P1: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 19/0%/0% |
| trade:P4: Grifter ↔ Shop: Shoplifter | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Double Agent ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Drifters ↔ P1: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Cutpurse | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P1: Extortionist ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Grifter ↔ Shop: Shoplifter | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Grifter ↔ Shop: Proselytizers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P1: Deprogrammers | DEAD | 56 | 2% | 0% | 0% | – | – | – | 17.9 | 0% (0/0) | – | 24/0%/0% | 32/0%/0% |
| trade:P2: Dabblers ↔ P3: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P4: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Cutpurse ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Cutpurse ↔ P1: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Cutpurse ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Triplets ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Triplets ↔ P2: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 24/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 22/0%/0% |
| choose member:P1's Polisher (3) | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P1: Triplets ↔ P3: Deprogrammers | DEAD | 27 | 4% | 0% | 0% | – | – | – | 2.4 | 0% (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Dabblers | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 33/0%/0% |
| trade:P4: Martyrs ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Dabblers ↔ P4: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Line Cutters ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Alchemists ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Cashier | DEAD | 27 | 4% | 0% | 0% | – | – | – | 13.9 | 0% (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P4: Brokers ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Collector | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Recluse ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Recluse ↔ Shop: Cashier | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ Shop: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Alchemists ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P4: Scouts | DEAD | 18 | 6% | 0% | 0% | – | – | – | 1.8 | 100% (0/1) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | DEAD | 36 | 6% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | 11/0%/0% | 25/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Line Cutters | DEAD | 27 | 4% | 0% | 0% | – | – | – | 28.9 | 100% (0/1) | – | 16/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P2: Recruit Bonus | DEAD | 43 | 5% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 21/0%/0% | 22/0%/0% |
| trade:P1: Alchemists ↔ P3: Shopkeeper | DEAD | 22 | 5% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Sticky Fingers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Recluse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.0 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Scouts | DEAD | 31 | 3% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P1: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 23/0%/0% |
| trade:P3: Busker ↔ P4: Scouts | DEAD | 27 | 4% | 0% | 0% | – | – | – | 38.4 | 100% (0/1) | – | 16/0%/0% | 11/0%/0% |
| trade:P1: Line Cutters ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Alchemists ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Panel ↔ Shop: Old Maid | DEAD | 27 | 4% | 0% | 0% | – | – | – | 6.9 | 0% (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P2: Busker ↔ Shop: Sticky Fingers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Busker ↔ P1: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P1: Line Cutters | DEAD | 41 | 2% | 0% | 0% | – | – | – | 12.1 | 100% (0/1) | – | 24/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P4: Volunteer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P2: Roadie ↔ P4: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P3: Accomplice ↔ Shop: Desperado | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Volunteer ↔ P1: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Volunteer ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Volunteer ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P2: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Line Cutters ↔ P2: Volunteer | DEAD | 42 | 5% | 0% | 0% | – | – | – | 7.8 | 50% (0/1) | – | 24/0%/0% | 18/0%/0% |
| trade:P1: Alchemists ↔ P4: Stunt Double | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Busker ↔ Shop: Muse | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ P4: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P4: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 14.0 | 0% (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P3: Accomplice ↔ P4: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Line Cutters | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 25/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Muse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Stunt Double ↔ P1: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Alchemists ↔ Shop: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P2: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Stunt Double ↔ P2: Roadie | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 25/0%/0% |
| trade:P1: Stunt Double ↔ P2: Chronicler | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Stunt Double ↔ P3: Shopkeeper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Stunt Double ↔ P3: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P4: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Sticky Fingers ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ Shop: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P2: Chronicler ↔ P1: Stunt Double | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Chronicler ↔ P4: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Chronicler ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Party Crasher | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ Shop: Party Crasher | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P3: Busker ↔ P4: Deprogrammers | DEAD | 23 | 9% | 0% | 0% | – | – | – | 6.7 | 50% (0/1) | – | 12/0%/0% | 11/0%/0% |
| trade:P3: Muse ↔ P1: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P3: Muse ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Patriarch ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Patriarch ↔ P1: Stunt Double | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Patriarch ↔ P3: Busker | DEAD | 22 | 5% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| choose member:P3's Muse (4) | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| choose member:P4's Volunteer (1) | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 35/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Cashier | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Stunt Double ↔ P2: Busker | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P1: Brokers ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Cashier | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Triplets | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 29/0%/0% |
| trade:P2: Roadie ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ Shop: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Chronicler ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 27/0%/0% | 21/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Scouts | DEAD | 33 | 6% | 0% | 0% | – | – | – | 22.4 | 50% (0/1) | – | 14/0%/0% | 19/0%/0% |
| trade:P2: Busker ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Cashier | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 20/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Triplets ↔ P1: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Triplets ↔ P2: Recruit Bonus | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 25/0%/0% |
| trade:P3: Triplets ↔ P2: Roadie | DEAD | 15 | 7% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Scouts ↔ P2: Deprogrammers | DEAD | 31 | 3% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 14/0%/0% | 17/0%/0% |
| trade:P1: Stunt Double ↔ P4: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P4: Recruit Bonus | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P4: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Roadie | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 20/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P1: Accomplice ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Accomplice ↔ P4: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P2: Panel ↔ P4: Con Men | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ P4: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Scouts ↔ P1: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Line Cutters ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Panel ↔ Shop: Extra Hand | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Panel ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Agents ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Agents ↔ P1: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P1: Stunt Double ↔ P2: Doppelganger | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P1: Roadie ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P2: Deprogrammers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 9.0 | 100% (0/1) | – | 12/0%/0% | 8/0%/0% |
| trade:P2: Chronicler ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Busker ↔ P1: Roadie | DEAD | 23 | 4% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P2: Alchemists ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Fan Club ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Doppelganger ↔ P1: Stunt Double | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Agents ↔ P1: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Kingpin ↔ P2: Cutpurse | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ P2: Line Cutters | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 29/0%/0% |
| trade:P1: Dabblers ↔ P4: Scouts | DEAD | 42 | 2% | 0% | 0% | – | – | – | 22.0 | 0% (0/0) | – | 18/0%/0% | 24/0%/0% |
| trade:P2: Cutpurse ↔ P1: Dabblers | DEAD | 31 | 3% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 14/0%/0% | 17/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P2: Line Cutters ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ P1: Dabblers | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 20/0%/0% |
| trade:P4: Scouts ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Martyrs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P4: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P2: Accomplice | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Accomplice ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 58 | 3% | 0% | 0% | – | – | – | 13.5 | 50% (0/1) | – | 25/0%/0% | 33/0%/0% |
| trade:P2: Party Crasher ↔ P3: Kingpin | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P3: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P3: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P3: Kingpin ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Kingpin ↔ P2: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Cutpurse ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Cutpurse ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 56 | 2% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 25/0%/0% | 31/0%/0% |
| trade:P1: Dabblers ↔ Shop: Old Maid | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 20/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Party Crasher ↔ P3: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P4: Recluse | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 23/0%/0% |
| trade:P2: Triplets ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Recluse ↔ P1: Dabblers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 19/0%/0% |
| trade:P4: Recluse ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Recluse ↔ P2: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P4: Recluse ↔ P3: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| choose member:P2's Party Crasher (4) | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 26/0%/0% |
| choose member:P3's Sticky Fingers (4) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Trendsetters ↔ P3: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P1: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Snobs ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Window Shopper ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Kingpin ↔ P1: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 11/0%/0% |
| trade:P4: Loyalists ↔ Shop: Raiders | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Loyalists ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ P3: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 17/0%/0% |
| trade:P1: Busker ↔ P3: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P1: Roadie | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Fan Club | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P3: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 25.1 | 100% (0/1) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ P2: Deprogrammers | DEAD | 32 | 6% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 13/0%/0% | 19/0%/0% |
| trade:P1: Fan Club ↔ Shop: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ P2: Recruit Bonus | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P1: Busker ↔ P2: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P1: Martyrs ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Chronicler ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Agents ↔ P2: Recruit Bonus | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 23/0%/0% |
| trade:P1: Agents ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Agents ↔ P3: Dabblers | DEAD | 26 | 4% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Roadie | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Agents | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Scouts | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 19/0%/0% |
| trade:P3: Scouts ↔ P1: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P2: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 18/0%/0% |
| trade:P3: Dabblers ↔ P1: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| choose member:P1's Agents (3) | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 38/0%/0% |
| trade:P1: Agents ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Scouts ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P3: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Chronicler ↔ P1: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Fan Club ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P2: Patriarch ↔ Shop: Proselytizers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Patriarch ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Patriarch ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Patriarch ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P2: Doppelganger ↔ P1: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Doppelganger ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Doppelganger ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Dabblers ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Panel ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 22 | 5% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P3: Cutpurse ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P4: Recluse ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Recluse ↔ P3: Line Cutters | DEAD | 29 | 7% | 0% | 0% | – | – | – | 6.9 | 50% (0/1) | – | 12/0%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ P2: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Cutpurse ↔ P4: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Party Crasher ↔ P2: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P1: Party Crasher ↔ P2: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 16/0%/0% |
| trade:P1: Party Crasher ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P1: Party Crasher ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Chronicler ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Fan Club ↔ Shop: Muse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.9 | 100% (0/1) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Stunt Double ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Patriarch ↔ P2: Chronicler | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Patriarch ↔ P2: Doppelganger | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P1: Recruit Bonus | DEAD | 30 | 3% | 0% | 0% | – | – | – | 20.6 | 0% (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P1: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P1: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Roadie | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P1: Scouts ↔ P3: Roadie | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 17/0%/0% |
| trade:P2: Con Men ↔ Shop: Desperado | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Roadie ↔ P1: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P3: Roadie ↔ P1: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 15/0%/0% |
| trade:P3: Roadie ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Dabblers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 6.7 | 0% (0/0) | – | 16/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P4: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Party Crasher ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Con Men ↔ Shop: Proselytizers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ Shop: Extra Hand | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Accomplice ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P3: Roadie ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P3: Grifter ↔ Shop: Proselytizers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Mob ↔ Shop: Wallflower | DEAD | 21 | 5% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Panel ↔ P4: Con Men | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P4: Polisher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Roadie ↔ Shop: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P3: Roadie ↔ P4: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P4: Polisher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ P1: Panel | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Polisher ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Polisher ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| choose member:P3's Party Crasher (4) | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 27/0%/0% |
| trade:P1: Panel ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Panel ↔ Shop: Patriarch | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Agents ↔ P3: Roadie | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P1: Agents ↔ P4: Polisher | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P1: Agents ↔ P4: Line Cutters | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 26/0%/0% |
| trade:P1: Double Agent ↔ P3: Grifter | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Double Agent ↔ P4: Con Men | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Line Cutters | DEAD | 44 | 5% | 0% | 0% | – | – | – | 17.4 | 50% (0/1) | – | 13/0%/0% | 31/0%/0% |
| trade:P3: Roadie ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Roadie ↔ P1: Agents | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 18/0%/0% |
| trade:P3: Roadie ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Grifter ↔ P1: Double Agent | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Kingpin ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P3: Chronicler ↔ Shop: Alchemists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Polisher ↔ P1: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P4: Line Cutters ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Panel ↔ Shop: Anarchist | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Double Agent ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Fan Club ↔ P3: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Grifter ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ P3: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ P3: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Panel ↔ Shop: Anarchist | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Roadie | DEAD | 26 | 8% | 0% | 0% | – | – | – | 8.3 | 50% (0/1) | – | 17/0%/0% | 9/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Patriarch ↔ Shop: Sticky Fingers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Patriarch ↔ Shop: Anarchist | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P2: Patriarch ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P4: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P4: Con Men ↔ P2: Patriarch | DEAD | 15 | 7% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Accomplice ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Fan Club ↔ Shop: Old Maid | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Old Maid | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Chronicler ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P4: Busker ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Collector ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Anarchist ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 7/0%/0% |
| trade:P3: Roadie ↔ Shop: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Roadie ↔ Shop: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Alchemists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Old Maid | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 27/0%/0% |
| trade:P3: Stunt Double ↔ P2: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Accomplice ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Dabblers ↔ Shop: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P1: Polisher ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Polisher ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 9/0%/0% |
| trade:P1: Regular ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Party Crasher ↔ P3: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Party Crasher ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Window Dressers ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Window Dressers ↔ P3: Connoisseurs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Trendsetters ↔ P4: Scouts | DEAD | 15 | 7% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Connoisseurs ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 20.0 | 100% (0/1) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Critic ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P3: Anarchist ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ Shop: Closer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ Shop: Toastmaster | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Alchemists ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P4: Con Men ↔ Shop: Closer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| choose member:P3's Regular (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| choose member:P2's Critic (3) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| choose member:P4's Sticky Fingers (4) | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Regular ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Early Birds ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ Shop: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Con Men ↔ Shop: Patriarch | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ P4: Connoisseurs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Panel ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Extra Hand | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Dabblers ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 4/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Anarchist | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 32/0%/0% |
| trade:P1: Busker ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 5/0%/0% |
| trade:P2: Agents ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 4/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Doppelganger ↔ P4: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P4: Toastmaster | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Agents ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Fan Club ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| choose member:P4's Party Crasher (4) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| choose member:P3's Toastmaster (3) | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 23/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Cutpurse | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P1: Line Cutters ↔ P2: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ P1: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P2: Cutpurse ↔ P1: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ P3: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P2: Dabblers ↔ Shop: Alchemists | DEAD | 29 | 3% | 0% | 0% | – | – | – | 30.5 | 0% (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P2: Dabblers ↔ P1: Line Cutters | DEAD | 41 | 2% | 0% | 0% | – | – | – | 9.3 | 0% (0/0) | – | 26/0%/0% | 15/0%/0% |
| trade:P3: Scouts ↔ P2: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P1: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Alchemists ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Kingpin | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Cutpurse ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Martyrs | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Dabblers ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Alchemists ↔ P2: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P4: Volunteer ↔ P1: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Martyrs ↔ P1: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.5 | 100% (0/1) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ P2: Shopkeeper | DEAD | 23 | 4% | 0% | 0% | – | – | – | 27.6 | 0% (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P2: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P1: Scouts ↔ P2: Dabblers | DEAD | 54 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 30/0%/0% |
| trade:P1: Scouts ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P1: Scouts ↔ Shop: Triplets | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 29/0%/0% | 16/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| choose member:P4's Gardener (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 4.7 | 100% (0/1) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Gardener ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Drifters ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P1: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P1: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Gardener ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Regular ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 20/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Volunteer | DEAD | 28 | 4% | 0% | 0% | – | – | – | 32.2 | 0% (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P1: Snobs ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Connoisseurs ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Alchemists ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 24/0%/0% |
| trade:P2: Alchemists ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Dabblers | DEAD | 33 | 3% | 0% | 0% | – | – | – | 4.1 | 100% (0/1) | – | 13/0%/0% | 20/0%/0% |
| trade:P4: Recluse ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Recluse ↔ P3: Shopkeeper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Con Men ↔ Shop: Tastemaker | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P3: Dyer ↔ Shop: Tastemaker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Dyer ↔ Shop: Customs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Triplets ↔ P3: Volunteer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Con Men ↔ Shop: Harmonist | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P2: Panel ↔ Shop: Harmonist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Panel ↔ Shop: Raiders | DEAD | 19 | 5% | 0% | 0% | – | – | – | 25.4 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Dabblers ↔ P3: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ P3: Scouts | DEAD | 38 | 3% | 0% | 0% | – | – | – | 29.4 | 0% (0/0) | – | 12/0%/0% | 26/0%/0% |
| trade:P2: Alchemists ↔ P3: Scouts | DEAD | 24 | 4% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P1: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P1: Triplets | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 24/0%/0% |
| trade:P1: Gardener ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Gardener | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Con Men ↔ P3: Doormen | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Gardener ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Dabblers ↔ P3: Triplets | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 32/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P1: Dabblers | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 28/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Trendsetters ↔ P3: Connoisseurs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Gardener ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Gardener ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P1: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Window Dressers ↔ P3: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Martyrs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Loyalists | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 25/0%/0% |
| trade:P3: Con Men ↔ Shop: Harmonist | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P3: Con Men ↔ Shop: Tastemaker | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 23/0%/0% |
| trade:P4: Martyrs ↔ P3: Shopkeeper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Roadie ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P1: Roadie ↔ P2: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P3: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Toastmaster ↔ P2: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P1: Toastmaster ↔ P2: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Toastmaster ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Timekeepers ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Timekeepers ↔ P2: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P4: Scouts | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 29/0%/0% |
| trade:P2: Line Cutters ↔ P3: Busker | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ Shop: Shift Crew | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P3: Stunt Double ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Regular ↔ P2: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Doormen ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Doormen ↔ P3: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Doormen ↔ P3: Connoisseurs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ Shop: Closer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Line Cutters ↔ P3: Connoisseurs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| choose member:P2's Connoisseurs (4) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P1: Dabblers ↔ P3: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 8/0%/0% |
| trade:P1: Dabblers ↔ P4: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Dabblers ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Doormen ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Doormen ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Stunt Double ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ P3: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P3: Critic | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Chronicler ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P1: Accomplice ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Accomplice ↔ P2: Gardener | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 7/0%/0% |
| trade:P1: Triplets ↔ P3: Recruit Bonus | DEAD | 38 | 3% | 0% | 0% | – | – | – | 20.6 | 0% (0/0) | – | 15/0%/0% | 23/0%/0% |
| trade:P2: Dyer ↔ Shop: Harmonist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Triplets | DEAD | 35 | 3% | 0% | 0% | – | – | – | 33.8 | 0% (0/0) | – | 15/0%/0% | 20/0%/0% |
| trade:P4: Double Agent ↔ Shop: Proselytizers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Gardener | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Gardener ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Sticky Fingers ↔ P2: Cutpurse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Early Birds | DEAD | 18 | 6% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Accomplice | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Cutpurse ↔ P3: Accomplice | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P3: Accomplice ↔ Shop: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Accomplice ↔ P1: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Accomplice ↔ P2: Cutpurse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P1: Clockmakers ↔ Shop: Hot Streak | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ Shop: Old Maid | DEAD | 31 | 3% | 0% | 0% | – | – | – | 21.5 | 100% (0/1) | – | 4/0%/0% | 27/0%/0% |
| trade:P2: Loyalists ↔ P1: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 100% (0/1) | – | 1/0%/0% | 14/0%/0% |
| choose member:P3's Early Birds (3) | DEAD | 20 | 5% | 0% | 0% | – | – | – | 3.3 | 0% (0/0) | – | – | 20/0%/0% |
| trade:P1: Anarchist ↔ Shop: Gossip | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Kingpin ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Gossip | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P4: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 18/0%/0% |
| trade:P1: Scouts ↔ Shop: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Scouts ↔ P3: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Busker ↔ P1: Agents | DEAD | 26 | 4% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P4: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P2: Recluse ↔ P3: Shopkeeper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Polisher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Recluse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Polisher ↔ P1: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Polisher ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Fan Club ↔ P2: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Proselytizers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Martyrs ↔ P3: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P3: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Con Men ↔ P3: Patriarch | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Recluse ↔ P1: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Recluse ↔ P2: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Patriarch ↔ P2: Busker | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P1: Agents ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P2: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P1: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Chronicler ↔ P1: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ Shop: Volunteer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P1: Party Crasher ↔ P2: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Polisher ↔ P2: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Triplets ↔ P1: Polisher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P4: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Chronicler ↔ P4: Alchemists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Patriarch ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Patriarch ↔ P4: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Fan Club ↔ Shop: Muse | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P4: Alchemists ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Alchemists ↔ P1: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ P2: Chronicler | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ P4: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P4: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P1: Philanthropists ↔ Shop: Gift Wrapper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Con Men ↔ Shop: Anarchist | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 32/0%/0% |
| trade:P4: Panel ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Cashier | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 23/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Polisher | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P1: Agents ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Panel ↔ P4: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Loyalists | DEAD | 20 | 5% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P1: Stunt Double ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 24/0%/0% |
| trade:P1: Stunt Double ↔ P3: Doppelganger | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Dabblers ↔ P1: Scouts | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 25/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 26/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Anarchist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Doppelganger ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Doppelganger ↔ P1: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Doppelganger ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Loyalists ↔ Shop: Muse | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Loyalists ↔ P3: Doppelganger | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Loyalists ↔ P4: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 24.0 | 100% (0/1) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ P3: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: HR ↔ Shop: Debutantes | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Roadie ↔ P1: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P1: Muse ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Muse ↔ P4: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P4: Roadie | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P4: Roadie ↔ P1: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Muse ↔ P2: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Sticky Fingers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P1: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Party Crasher ↔ P4: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| choose member:P1's Muse (4) | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Muse ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P2: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 27/0%/0% |
| trade:P3: Triplets ↔ P4: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Accomplice ↔ P3: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P2: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 26/0%/0% |
| trade:P4: Mob ↔ Shop: Wallflower | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Muse ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Line Cutters ↔ P1: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: HR ↔ Shop: Wallflower | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: HR ↔ Shop: Mentor & Protégés | DEAD | 20 | 5% | 0% | 0% | – | – | – | 10.9 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Grifter ↔ Shop: Anarchist | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Grifter ↔ P4: Double Agent | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| choose member:P4's Muse (4) | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 30/0%/0% |
| choose member:P4's Doppelganger (5) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Line Cutters | DEAD | 62 | 5% | 0% | 0% | – | – | – | 26.3 | 0% (0/0) | – | 31/0%/0% | 31/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Triplets | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 29/0%/0% |
| trade:P3: Raiders ↔ P1: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ P1: Deprogrammers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 27/0%/0% |
| trade:P3: Con Men ↔ Shop: Desperado | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ P4: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Accomplice ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 36.6 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Scouts ↔ Shop: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: HR ↔ Shop: Proselytizers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Doppelganger ↔ Shop: Old Maid | DEAD | 26 | 4% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 2/0%/0% | 24/0%/0% |
| trade:P4: Doppelganger ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P2: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P4: Doppelganger | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P1: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Con Men ↔ P1: Patriarch | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P3: Con Men ↔ P1: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Con Men ↔ P2: Stunt Double | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Line Cutters ↔ P1: Deprogrammers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Proselytizers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P1: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 11.0 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P3: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Line Cutters ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Fan Club ↔ Shop: Tastemaker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ Shop: Alchemists | DEAD | 22 | 9% | 0% | 0% | – | – | – | 11.6 | 100% (0/2) | – | 6/0%/0% | 16/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Gardener | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.5 | 100% (0/1) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Go-Between ↔ P1: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P4: Gardener ↔ P1: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 4/0%/0% |
| trade:P1: Gardener ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ Shop: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P4: Busker ↔ P1: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ P2: Roadie | DEAD | 34 | 3% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P4: Busker ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Roadie ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Regular ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P3: Scouts ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 4/0%/0% |
| trade:P1: Muse ↔ P4: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P3: Alchemists ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Stunt Double ↔ P1: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Busker ↔ P1: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Panel ↔ P3: Fan Club | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Panel ↔ P3: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Muse ↔ P2: Busker | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ P1: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P3: Scouts | DEAD | 34 | 3% | 0% | 0% | – | – | – | 30.1 | 100% (0/1) | – | 17/0%/0% | 17/0%/0% |
| trade:P3: Stunt Double ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Fan Club ↔ P2: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Loyalists ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Loyalists ↔ P3: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P3: Agents ↔ P1: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 17/0%/0% |
| trade:P2: Loyalists ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Agents ↔ Shop: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P3: Gardener ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Gardener ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Scouts ↔ P4: Dabblers | DEAD | 50 | 2% | 0% | 0% | – | – | – | 29.8 | 0% (0/0) | – | 22/0%/0% | 28/0%/0% |
| trade:P3: Dyer ↔ Shop: Big Tent | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Agents ↔ P4: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P3: Gardener ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Critic ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Chronicler ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Chronicler ↔ P4: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Stunt Double ↔ P3: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P3: Scouts | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 23/0%/0% |
| trade:P4: Dabblers ↔ P3: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Trendsetters ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P3: Agents | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 24/0%/0% |
| trade:P1: Triplets ↔ P4: Dabblers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Dyer ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Agents ↔ P1: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P3: Drifters ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Dabblers ↔ P1: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P1: Scouts ↔ P4: Regular | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Shift Crew ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Shift Crew ↔ P4: Bouncers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Bouncers ↔ Shop: Early Birds | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 5/0%/0% |
| trade:P4: Bouncers ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Bouncers ↔ P3: Shift Crew | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Regular ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Regular ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Triplets ↔ P1: Regular | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P4: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P1: Scouts ↔ P4: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 20/0%/0% |
| trade:P2: Timekeepers ↔ P4: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Early Birds ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 11/0%/0% |
| trade:P3: Trendsetters ↔ P4: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ P1: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ P2: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P3: Volunteer | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P4: Con Men ↔ Shop: Exporters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Bouncers ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Gossip | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Critic ↔ P2: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P4: Recruit Bonus | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P3: Volunteer ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P3: Scouts ↔ Shop: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Dabblers ↔ P2: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 26/0%/0% |
| trade:P4: Polisher ↔ P2: Line Cutters | DEAD | 23 | 4% | 0% | 0% | – | – | – | 31.3 | 0% (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P4: Polisher ↔ P3: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P4: Party Crasher ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P4: Party Crasher ↔ P3: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P1: Scouts | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 26/0%/0% |
| trade:P1: Scouts ↔ Shop: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Line Cutters ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Triplets ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Critic ↔ P4: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Cashier ↔ P3: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P2: Critic ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Critic ↔ P4: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P3: Triplets ↔ P2: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 5/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Critic | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ P2: Critic | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Polisher ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Recluse ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Recluse ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ Shop: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Toastmaster ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P1: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Polisher ↔ P4: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P2: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Dabblers ↔ P1: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Volunteer ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Scouts ↔ Shop: Alchemists | DEAD | 24 | 4% | 0% | 0% | – | – | – | 13.8 | 100% (0/1) | – | 11/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P4: Gardener | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 18/0%/0% |
| trade:P2: Line Cutters ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P4: Gardener | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P4: Triplets ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Triplets ↔ P2: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Gardener ↔ P1: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P4: Gardener ↔ P2: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P2: Alchemists ↔ P4: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Early Birds ↔ P3: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P1: Volunteer ↔ P3: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P2: Scouts | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 25/0%/0% |
| trade:P1: Dabblers ↔ P3: Gardener | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 48 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 23/0%/0% | 25/0%/0% |
| trade:P1: Dabblers ↔ P3: Shopkeeper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Scouts ↔ P1: Dabblers | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 23/0%/0% |
| trade:P3: Gardener ↔ P1: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P3: Gardener ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Line Cutters ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Con Men ↔ Shop: Closer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Early Birds ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Party Crasher ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P4: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P4: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Triplets ↔ P1: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Triplets ↔ P2: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Triplets ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P3: Line Cutters ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Con Men ↔ Shop: Dyer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Con Men ↔ Shop: Closer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Tastemaker | DEAD | 18 | 6% | 0% | 0% | – | – | – | 19.2 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Scouts ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Anarchist ↔ Shop: Tastemaker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Gossip | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P2: Scouts ↔ Shop: Cashier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Patriarch ↔ Shop: Courier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Gossip | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Courier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Big Tent | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Kingpin ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Line Cutters ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Con Men ↔ Shop: Old Money | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ P1: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Con Men ↔ Shop: Alchemists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Busker ↔ P2: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P2: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Patriarch ↔ P1: Loyalists | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P2: Patriarch ↔ P3: Doppelganger | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ Shop: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Con Men ↔ P1: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ Shop: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Loyalists ↔ P1: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P3: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Loyalists ↔ P3: Doppelganger | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P3: Busker ↔ P1: Dabblers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 20/0%/0% |
| trade:P3: Doppelganger ↔ P1: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Doppelganger ↔ P2: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Bouncers ↔ P1: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P1: Polisher ↔ P2: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P4: Cutpurse | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P4: Cutpurse ↔ P1: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P1: Window Dressers ↔ P2: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P4: Cutpurse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Party Crasher ↔ P2: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P4: Cutpurse ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Kingpin ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Critic ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Con Men ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: HR ↔ Shop: Proselytizers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Loyalists ↔ P2: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Bouncers ↔ P2: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Bouncers ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Bouncers ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: HR ↔ Shop: Hangers-On | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: HR ↔ Shop: Extra Hand | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Scouts ↔ P1: Deprogrammers | DEAD | 30 | 3% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P3: Party Crasher ↔ P1: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P1: Bouncers ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: HR ↔ Shop: Extra Hand | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Polisher ↔ P1: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Roadie ↔ P4: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P4: Drifters ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Drifters ↔ P2: Volunteer | DEAD | 21 | 10% | 0% | 0% | – | – | – | 29.7 | 50% (0/1) | – | 13/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P4: Drifters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P2: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 24/0%/0% |
| trade:P4: Drifters ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P2: Panel ↔ Shop: Big Tent | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Stunt Double ↔ P2: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Stunt Double ↔ P3: Roadie | DEAD | 21 | 5% | 0% | 0% | – | – | – | 40.1 | 100% (0/1) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Scouts ↔ P2: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Agents ↔ P3: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Agents ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Line Cutters ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ P3: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P4: Volunteer | DEAD | 26 | 4% | 0% | 0% | – | – | – | 17.6 | 0% (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ Shop: Gardener | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.2 | 100% (0/1) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P1: Triplets | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 24/0%/0% |
| trade:P4: Party Crasher ↔ P1: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P4: Party Crasher ↔ P1: Polisher | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P4: Party Crasher ↔ P2: Dabblers | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 19/0%/0% |
| trade:P1: Triplets ↔ P4: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Polisher ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Busker ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Busker ↔ P4: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P4: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Agents ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 28.2 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Agents ↔ P1: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Agents ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Gardener ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: HR ↔ Shop: Wallflower | DEAD | 16 | 6% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Doppelganger ↔ P4: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: HR ↔ Shop: Wallflower | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Agents ↔ P3: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P4: Roadie | DEAD | 26 | 4% | 0% | 0% | – | – | – | 1.6 | 100% (0/1) | – | 9/0%/0% | 17/0%/0% |
| trade:P2: Dabblers ↔ P4: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P3: Dabblers | DEAD | 27 | 7% | 0% | 0% | – | – | – | 9.4 | 50% (0/1) | – | 11/0%/0% | 16/0%/0% |
| trade:P1: Polisher ↔ P3: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ P3: Doppelganger | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ P3: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P4: Agents | DEAD | 17 | 6% | 0% | 0% | – | – | – | 7.0 | 0% (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P1: Triplets | DEAD | 25 | 4% | 0% | 0% | – | – | – | 10.6 | 0% (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P1: Polisher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P1: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Scouts ↔ P4: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P4: Drifters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Agents ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Drifters ↔ P1: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| choose member:P4's Bouncers (4) | DEAD | 23 | 9% | 0% | 0% | – | – | – | 8.2 | 100% (0/2) | – | – | 23/0%/0% |
| trade:P3: Loyalists ↔ Shop: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ Shop: Alchemists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Cutpurse ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Agents ↔ P2: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Muse ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Muse ↔ P3: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Kingpin ↔ P3: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Loyalists ↔ P3: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Kingpin ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P3: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Agents ↔ P2: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Accomplice ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Muse ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P3: Agents ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Chronicler ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| choose member:P3's Agents (3) | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | – | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Agents | DEAD | 28 | 4% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P2: Stunt Double ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Stunt Double ↔ P3: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P3: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Agents ↔ P1: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P3: Agents ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P3: Agents ↔ P4: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 9/0%/0% |
| trade:P3: Chronicler ↔ P1: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P3: Chronicler ↔ P2: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P2: Roadie ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Line Cutters ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Patriarch ↔ P1: Muse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Triplets ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Gardener ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P3: Busker ↔ P4: Dabblers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P3: Busker ↔ P4: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Regular | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Accomplice | DEAD | 21 | 5% | 0% | 0% | – | – | – | 26.5 | 0% (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Cutpurse ↔ P4: Recruit Bonus | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Volunteer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P4: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P4: Recruit Bonus | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Cutpurse ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P3: Trendsetters ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Ringleader ↔ Shop: Tastemaker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Doormen ↔ P3: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Patriarch ↔ Shop: Go-Between | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P3: Patriarch ↔ Shop: Tastemaker | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P1: Polisher ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P4: Scouts ↔ P1: Polisher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ P3: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ Shop: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Bouncers ↔ P1: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Line Cutters | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ P1: Volunteer | DEAD | 33 | 3% | 0% | 0% | – | – | – | 3.0 | 100% (0/1) | – | 11/0%/0% | 22/0%/0% |
| trade:P3: Polisher ↔ P1: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 26.2 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Bouncers ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Volunteer ↔ P2: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P1: Volunteer ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Bouncers ↔ P3: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Fan Club ↔ Shop: Shift Crew | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| choose member:P2's Alchemists (5) | DEAD | 24 | 8% | 0% | 0% | – | – | – | 18.7 | 0% (0/0) | – | – | 24/0%/0% |
| choose member:P2's Drifters (3) | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Triplets ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Triplets ↔ P3: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Line Cutters ↔ P4: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P4: Drifters ↔ P3: Line Cutters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Scouts ↔ P4: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P4: Triplets ↔ P3: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ P2: Window Shopper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ P3: Snobs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Loyalists ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P3: Scouts | DEAD | 30 | 3% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/0% | 25/0%/0% |
| trade:P1: Loyalists ↔ P4: Drifters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Panel ↔ Shop: Tastemaker | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Regular ↔ P2: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Drifters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 5.1 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Dabblers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 22/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P1: Recruit Bonus | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 21/0%/0% |
| trade:P2: Triplets ↔ P4: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Patriarch ↔ Shop: Customs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Patriarch ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P2: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Drifters ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Critic ↔ P3: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Regular ↔ P2: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| choose member:P3's Gardener (3) | DEAD | 20 | 5% | 0% | 0% | – | – | – | 13.0 | 100% (0/1) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P4: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P4: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 5/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 3/0%/0% |
| trade:P4: Loyalists ↔ P3: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Loyalists ↔ P2: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Muse ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P3: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Roadie ↔ P4: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Roadie | DEAD | 24 | 4% | 0% | 0% | – | – | – | 3.7 | 0% (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P1: Agents ↔ P4: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P2: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P4: Recruit Bonus | DEAD | 27 | 4% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Muse ↔ P4: Timekeepers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Anarchist ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Loyalists ↔ P4: Timekeepers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Timekeepers ↔ P1: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Timekeepers ↔ P2: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Muse ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Patriarch ↔ P4: Timekeepers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P2's Regular (3) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Roadie ↔ P4: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| choose member:P4's Stunt Double (5) | DEAD | 31 | 3% | 0% | 0% | – | – | – | 24.0 | 0% (0/0) | – | 1/0%/0% | 30/0%/0% |
| trade:P1: Scouts ↔ P3: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P4: Early Birds | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Gardener ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Line Cutters ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Bouncers ↔ P4: Timekeepers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Muse | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P1: Con Men ↔ P2: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Chronicler ↔ P3: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Trendsetters ↔ P4: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ P4: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| choose member:P3's Doppelganger (5) | DEAD | 19 | 5% | 0% | 0% | – | – | – | 10.5 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Gardener ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Roadie ↔ P3: Busker | DEAD | 20 | 5% | 0% | 0% | – | – | – | 9.3 | 100% (0/1) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Agents ↔ P3: Trendsetters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ P3: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Doppelganger ↔ P3: Trendsetters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P3: Alchemists ↔ P4: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Recluse ↔ P2: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Agents ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P2: Gardener | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P2: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Drifters ↔ P3: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Chronicler ↔ Shop: Muse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P2: Drifters ↔ P3: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 21/0%/0% | 26/0%/0% |
| trade:P3: Alchemists ↔ P1: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: HR ↔ Shop: Extra Hand | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Volunteer ↔ P3: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P1: Volunteer | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Agents ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Party Crasher ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Chronicler ↔ P4: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ P4: Fan Club | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Agents ↔ P4: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Martyrs ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Agents | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P2: Chronicler ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P4: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 20/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ Shop: Closer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Loyalists ↔ Shop: Clockmakers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Cutpurse ↔ P3: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 11.1 | 0% (0/0) | – | 12/0%/0% | 6/0%/0% |
| trade:P1: Loyalists ↔ Shop: Sticky Fingers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 8/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P3: Recruit Bonus | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Dabblers | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 23/0%/0% |
| trade:P4: Loyalists ↔ P3: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P3: Gardener ↔ P4: Drifters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ P1: Volunteer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Early Birds ↔ P1: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Volunteer ↔ P3: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Scouts ↔ P1: Volunteer | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 29/0%/0% |
| trade:P1: Roadie ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Doppelganger ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P3: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Busker ↔ Shop: Muse | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 11/0%/0% |
| trade:P4: Bouncers ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 3/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P2: Muse ↔ P3: Busker | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Agents ↔ P1: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 8/0%/0% |
| trade:P3: Busker ↔ P2: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P2: Muse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Go-Between ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Drifters ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Volunteer ↔ P2: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P2: Muse ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P3: Deprogrammers | DEAD | 34 | 3% | 0% | 0% | – | – | – | 2.6 | 0% (0/0) | – | 19/0%/0% | 15/0%/0% |
| trade:P2: Agents ↔ P3: Deprogrammers | DEAD | 40 | 3% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 18/0%/0% | 22/0%/0% |
| trade:P2: Dabblers ↔ P3: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Roadie | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 13/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Agents | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 19/0%/0% |
| trade:P1: Loyalists ↔ P2: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 29.4 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Muse ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P2: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P4: Busker ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P2: Window Shopper ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Window Shopper ↔ P3: Gardener | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P2: Roadie | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.4 | 100% (0/1) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ P3: Fan Club | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Agents ↔ Shop: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Loyalists | DEAD | 22 | 5% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Doppelganger ↔ P4: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P2: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ P3: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Alchemists ↔ P2: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Dabblers ↔ P3: Critic | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P3: Critic ↔ P2: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: Critic ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Chronicler ↔ P3: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Muse ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Polisher ↔ P4: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Roadie ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Roadie ↔ P2: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 27.0 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Doppelganger ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Toastmaster ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Muse ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Recluse ↔ P2: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ P4: Panel | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Bouncers ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 2/0%/0% |
| trade:P3: Accomplice ↔ P2: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 10/0%/0% |
| trade:P3: Accomplice ↔ P4: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Agents | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 8/0%/0% |
| trade:P3: Roadie ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P4: Agents ↔ P3: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Agents ↔ P3: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 7/0%/0% |
| trade:P4: Agents ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P4: Timekeepers ↔ P1: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ P3: Roadie | DEAD | 25 | 4% | 0% | 0% | – | – | – | 45.8 | 0% (0/0) | – | 15/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P3: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Roadie ↔ P2: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Chronicler ↔ P1: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 4/0%/0% |
| trade:P1: Muse ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Busker ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Party Crasher | DEAD | 20 | 5% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ P3: Roadie | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P3: Roadie ↔ P1: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Busker ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Timekeepers ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Dabblers ↔ P3: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P4: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Busker ↔ P4: Timekeepers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Timekeepers ↔ Shop: Shift Crew | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Timekeepers ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Chronicler ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Chronicler ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Doppelganger ↔ P4: Chronicler | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Doppelganger ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Chronicler ↔ P3: Doppelganger | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Alchemists ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Cutpurse ↔ P2: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Patriarch ↔ P1: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Patriarch ↔ P4: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Accomplice | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.2 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P2: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P3: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Chronicler ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Window Dressers ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P1: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Go-Between ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Go-Between ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ P3: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Roadie ↔ P3: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 35 | 3% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 12/0%/0% | 23/0%/0% |
| trade:P1: Doppelganger ↔ P2: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Go-Between ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Chronicler ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Dabblers | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P4: Scouts ↔ P1: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Con Men ↔ P4: Chronicler | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Doppelganger ↔ P4: Stunt Double | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Stunt Double ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Grifter ↔ Shop: Bodyguards | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P3: Panel ↔ P4: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Kingpin ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ P4: Loyalists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P3: Panel ↔ Shop: Harmonist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Loyalists ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P2: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Regular | DEAD | 18 | 6% | 0% | 0% | – | – | – | 18.1 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Critic ↔ P4: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Critic | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Connoisseurs ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Critic ↔ P1: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Connoisseurs ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ Shop: Hot Streak | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Drifters ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P2: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Drifters ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Loyalists ↔ P2: Party Crasher | DEAD | 20 | 5% | 0% | 0% | – | – | – | 23.8 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P3: Roadie ↔ P2: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Loyalists ↔ P2: Stunt Double | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Stunt Double ↔ P1: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P3: Roadie | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 12/0%/0% |
| trade:P3: Roadie ↔ Shop: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ P1: Deprogrammers | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 28/0%/0% |
| trade:P1: Timekeepers ↔ P4: Bouncers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Timekeepers ↔ P4: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Bouncers ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P1: Timekeepers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Polisher ↔ P2: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Early Birds ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Gardener ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 19.1 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P2: Early Birds | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Early Birds ↔ P1: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Loyalists ↔ P1: Toastmaster | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Gardener ↔ P4: Drifters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Line Cutters | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 24/0%/0% |
| trade:P4: Drifters ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Line Cutters ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Collector ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Patriarch ↔ P3: Martyrs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Agents ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ P1: Scouts | DEAD | 22 | 5% | 0% | 0% | – | – | – | 23.9 | 0% (0/0) | – | 14/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P1: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 31.4 | 0% (0/0) | – | 18/0%/0% | 11/0%/0% |
| trade:P1: Muse ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ P2: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Drifters ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P2: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 26/0%/0% |
| trade:P2: Busker ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ P3: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P3: Agents ↔ P2: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ P2: Volunteer | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 17/0%/0% |
| trade:P2: Party Crasher ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Triplets ↔ P4: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Harmonist | DEAD | 20 | 5% | 0% | 0% | – | – | – | 1.7 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Doppelganger ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Doormen ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P1: Loyalists ↔ Shop: Raiders | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Regular ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Trendsetters ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Drifters ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Stunt Double ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P3: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Cutpurse | DEAD | 22 | 5% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ P4: Cutpurse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Cutpurse ↔ P3: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Trendsetters ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Timekeepers ↔ P1: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Shift Crew ↔ P4: Timekeepers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Patriarch ↔ Shop: Hot Streak | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P1: Dabblers ↔ P3: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 12/0%/0% |
| trade:P3: Patriarch ↔ P4: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Scouts ↔ P2: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 3/0%/0% |
| trade:P2: Accomplice ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Roadie ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ P4: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Roadie ↔ P3: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Stunt Double ↔ P3: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Early Birds ↔ P1: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 3.8 | 0% (0/0) | – | 15/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Timekeepers ↔ P1: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Early Birds ↔ P1: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P3: Roadie | DEAD | 49 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 25/0%/0% |
| trade:P3: Party Crasher ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Bouncers ↔ P2: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Roadie ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Muse ↔ P3: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Busker ↔ P1: Bouncers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Timekeepers ↔ P2: Roadie | DEAD | 16 | 6% | 0% | 0% | – | – | – | 22.0 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ P2: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Muse ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Bouncers ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Stunt Double ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Patriarch ↔ Shop: Gift Wrapper | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P3: Stunt Double ↔ P4: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P3: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Agents | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 21/0%/0% |
| trade:P2: Fan Club ↔ P3: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Agents ↔ P1: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 18/0%/0% |
| trade:P4: Recluse ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Roadie ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Accomplice ↔ P1: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Connoisseurs ↔ P1: Deprogrammers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Early Birds ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Stunt Double ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Go-Between ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P3: Roadie ↔ P1: Volunteer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Roadie ↔ P1: Dabblers | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 24/0%/0% | 23/0%/0% |
| trade:P1: Dabblers ↔ P3: Accomplice | DEAD | 25 | 4% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P3: Accomplice ↔ P1: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P2: Triplets ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Scouts ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Kingpin ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Trendsetters ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Window Shopper ↔ P1: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Trendsetters ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P1: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Drifters ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P3: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P1: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Connoisseurs ↔ P2: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Trendsetters ↔ P2: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Doormen ↔ P2: Agents | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Party Crasher ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Busker ↔ P3: Kingpin | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 3/0%/0% |
| trade:P3: Kingpin ↔ P2: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 3/0%/0% |
| trade:P2: Stunt Double ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Chronicler ↔ P4: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Loyalists ↔ P3: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Chronicler ↔ P4: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Collector ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Early Birds ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |

(43958 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 3267 | 16% | 2702 | 22% |
| benders | 0 | – | 2125 | 18% |
| market | 3348 | 16% | 3268 | 18% |
| trading | 3466 | 14% | 2747 | 16% |
| silver | 3492 | 15% | 2929 | 15% |
| yellow | 3180 | 15% | 2747 | 12% |
| red | 3042 | 13% | 3137 | 11% |
| thieves | 3603 | 14% | 3546 | 10% |
| echo | 3305 | 13% | 3502 | 10% |
