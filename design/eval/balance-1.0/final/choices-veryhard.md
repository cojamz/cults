# Choice report

40384 looked-ahead decisions from 398 games (/mnt/project-files/balance-1.0/merged/veryhard.choices). 24% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| red: Promote | AUTO-PICK | 1660 | 63% | 27% | 6% | 76% | 39% | 0% | 13.5 | 42% (145/215) | – | 839/27%/6% | 821/27%/5% |
| purple: Last Call | AUTO-PICK | 2112 | 48% | 16% | 5% | 58% | 0% | 1% | 11.7 | 39% (246/152) | – | 1278/12%/6% | 834/23%/5% |
| yellow: Harvest | AUTO-PICK | 4290 | 40% | 11% | 5% | 55% | 27% | 8% | 10.9 | 29% (237/217) | 321/56%/5% | 1632/9%/4% | 2337/7%/6% |
| purple: Sleep In | AUTO-PICK | 4521 | 52% | 12% | 5% | 56% | 10% | 5% | 12.2 | 33% (249/492) | 1021/18%/5% | 1366/14%/4% | 2134/9%/5% |
| echo: Cover | AUTO-PICK | 2527 | 43% | 13% | 5% | 59% | 13% | 3% | 12.5 | 38% (172/224) | – | 1232/13%/5% | 1295/14%/5% |
| thieves: Poach | AUTO-PICK | 1077 | 53% | 22% | 4% | 67% | 25% | 1% | 9.9 | 40% (112/95) | – | – | 1077/22%/4% |
| thieves: Help Yourself | AUTO-PICK | 2963 | 55% | 20% | 4% | 73% | 37% | 3% | 11.6 | 38% (181/350) | 242/80%/5% | 1081/19%/4% | 1640/12%/5% |
| red: Recruit a Member | AUTO-PICK | 1490 | 40% | 13% | 4% | 60% | 22% | 5% | 11.0 | 33% (90/93) | – | – | 1490/13%/4% |
| echo: Build Up | AUTO-PICK | 4603 | 39% | 11% | 4% | 56% | 13% | 9% | 11.8 | 32% (249/308) | 963/18%/5% | 1482/12%/4% | 2158/7%/4% |
| echo: Echo | AUTO-PICK | 2542 | 46% | 21% | 4% | 73% | 37% | 1% | 11.3 | 43% (176/249) | 508/35%/4% | 910/20%/3% | 1124/15%/5% |
| thieves: Crime Wave | AUTO-PICK | 2834 | 43% | 14% | 4% | 60% | 15% | 1% | 13.1 | 34% (209/194) | – | 1596/13%/3% | 1238/16%/5% |
| red: Demote | AUTO-PICK | 3083 | 42% | 13% | 4% | 69% | 29% | 3% | 13.0 | 36% (161/261) | – | 1447/14%/3% | 1636/12%/4% |
| silver: Toast | AUTO-PICK | 5361 | 40% | 10% | 4% | 55% | 14% | 13% | 12.9 | 32% (264/398) | 1653/10%/4% | 1881/10%/3% | 1827/10%/4% |
| thieves: Stash | AUTO-PICK | 5401 | 36% | 11% | 4% | 53% | 13% | 11% | 12.0 | 31% (312/270) | 1221/17%/5% | 1918/10%/3% | 2262/8%/4% |
| yellow: Big Dilute | AUTO-PICK | 3163 | 38% | 11% | 4% | 59% | 22% | 6% | 11.8 | 36% (174/230) | – | 1183/15%/3% | 1980/8%/4% |
| red: Walk-In | AUTO-PICK | 4481 | 45% | 13% | 3% | 64% | 36% | 9% | 13.7 | 30% (177/366) | 1320/14%/4% | 1345/14%/3% | 1816/11%/3% |
| echo: Reprise | AUTO-PICK | 4016 | 32% | 14% | 3% | 71% | 29% | 1% | 11.7 | 40% (225/225) | 1072/17%/3% | 1438/13%/2% | 1506/12%/3% |
| purple: Right Away | MIXED | 8210 | 24% | 4% | 5% | 27% | 5% | 49% | 8.3 | 16% (205/99) | 1834/6%/4% | 2869/2%/5% | 3507/4%/7% |
| purple: Crunch Time | MIXED | 6724 | 22% | 2% | 5% | 11% | 1% | 67% | 7.9 | 10% (94/61) | – | 2925/2%/5% | 3799/3%/6% |
| market: Peek | MIXED | 5041 | 43% | 10% | 5% | 45% | 4% | 12% | 11.1 | 27% (380/208) | 1281/14%/7% | 1785/9%/4% | 1975/9%/6% |
| market: Bury | MIXED | 3776 | 41% | 9% | 5% | 46% | 8% | 11% | 10.8 | 30% (202/252) | – | 1250/15%/4% | 2526/6%/5% |
| market: Savings | MIXED | 7007 | 32% | 6% | 5% | 31% | 8% | 31% | 10.2 | 18% (274/126) | 1343/13%/7% | 2535/4%/4% | 3129/4%/5% |
| purple: Crowd In | MIXED | 1491 | 42% | 13% | 5% | 46% | 6% | 1% | 9.7 | 32% (114/84) | – | – | 1491/13%/5% |
| purple: Hold Up | MIXED | 6621 | 36% | 8% | 5% | 40% | 6% | 26% | 11.3 | 21% (308/184) | 1275/14%/5% | 2398/7%/3% | 2948/6%/6% |
| silver: Largesse | MIXED | 1292 | 44% | 16% | 5% | 49% | 3% | 0% | 10.2 | 41% (138/94) | – | – | 1292/16%/5% |
| market: Out of Style | MIXED | 5743 | 36% | 9% | 5% | 47% | 6% | 14% | 11.0 | 28% (299/282) | 948/19%/7% | 1932/9%/3% | 2863/5%/4% |
| market: Spree | MIXED | 1689 | 45% | 11% | 4% | 45% | 18% | 1% | 9.8 | 28% (74/129) | – | – | 1689/11%/4% |
| yellow: Melting Pot | MIXED | 4024 | 35% | 9% | 4% | 48% | 10% | 12% | 10.8 | 32% (196/243) | – | 1745/10%/3% | 2279/8%/5% |
| silver: Party Favors | MIXED | 4576 | 34% | 8% | 4% | 48% | 15% | 14% | 11.3 | 29% (216/221) | – | 1691/11%/3% | 2885/6%/5% |
| silver: Sweet Talk | MIXED | 5276 | 27% | 6% | 4% | 47% | 17% | 21% | 11.2 | 28% (157/219) | – | 2033/8%/2% | 3243/5%/5% |
| red: Tryout | MIXED | 5778 | 30% | 9% | 4% | 58% | 21% | 15% | 10.8 | 29% (238/235) | 941/20%/7% | 1872/9%/2% | 2965/5%/4% |
| trading: Allowance | MIXED | 5750 | 33% | 10% | 4% | 46% | 6% | 11% | 11.1 | 31% (373/210) | 1122/18%/6% | 2225/8%/3% | 2403/8%/4% |
| thieves: Shake Down | MIXED | 4146 | 33% | 9% | 4% | 57% | 15% | 12% | 11.8 | 33% (210/225) | – | 1537/13%/3% | 2609/7%/4% |
| red: Gather | MIXED | 6496 | 27% | 8% | 4% | 42% | 7% | 17% | 10.7 | 30% (330/184) | 1204/15%/6% | 2325/7%/2% | 2967/5%/4% |
| silver: Party Gifts | MIXED | 6493 | 30% | 8% | 4% | 42% | 5% | 19% | 11.1 | 28% (292/240) | 1660/11%/3% | 2616/5%/3% | 2217/9%/4% |
| trading: Farewell | MIXED | 5403 | 25% | 6% | 3% | 32% | 5% | 15% | 10.9 | 29% (154/246) | – | 2797/5%/3% | 2606/7%/4% |
| silver: Polish | MIXED | 8436 | 19% | 4% | 3% | 46% | 19% | 42% | 9.5 | 21% (167/155) | 1758/10%/2% | 2841/3%/2% | 3837/3%/4% |
| echo: Greatest Hits | MIXED | 3125 | 13% | 5% | 3% | 41% | 2% | 39% | 6.9 | 36% (118/25) | – | – | 3125/5%/3% |
| market: Recruit Twice | MIXED | 5029 | 28% | 5% | 3% | 44% | 23% | 10% | 11.0 | 21% (144/132) | – | 2556/4%/3% | 2473/7%/3% |
| trading: Estate Sale | MIXED | 4192 | 35% | 10% | 3% | 64% | 22% | 8% | 12.2 | 32% (160/284) | – | 1793/12%/3% | 2399/8%/3% |
| yellow: Trade Seeds | MIXED | 7229 | 21% | 4% | 3% | 45% | 9% | 27% | 10.8 | 27% (169/245) | 1123/15%/5% | 2686/2%/1% | 3420/2%/3% |
| yellow: Dilute | MIXED | 6641 | 25% | 6% | 3% | 54% | 15% | 22% | 10.6 | 26% (245/184) | 1137/15%/3% | 2348/5%/2% | 3156/4%/3% |
| echo: Encore | MIXED | 4179 | 25% | 8% | 3% | 64% | 25% | 18% | 11.4 | 30% (149/143) | – | 1828/8%/2% | 2351/7%/3% |
| trading: Exchange | MIXED | 8105 | 18% | 4% | 3% | 29% | 2% | 40% | 10.1 | 28% (205/214) | 2010/6%/4% | 3054/2%/1% | 3041/6%/3% |
| yellow: Makeover | MIXED | 3016 | 15% | 5% | 2% | 45% | 23% | 33% | 8.5 | 29% (69/54) | – | – | 3016/5%/2% |
| thieves: Lie Low | MIXED | 7427 | 21% | 6% | 2% | 54% | 10% | 24% | 10.2 | 30% (303/150) | 1362/14%/4% | 2716/5%/2% | 3349/4%/3% |
| trading: Cash In | MIXED | 3707 | 16% | 3% | 2% | 32% | 13% | 34% | 8.2 | 22% (44/83) | – | – | 3707/3%/2% |
| trading: Splurge | FILLER | 8921 | 17% | 3% | 3% | 29% | 5% | 59% | 8.8 | 17% (204/60) | 1914/8%/6% | 3131/1%/2% | 3876/2%/3% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Volunteer (red) | REAL CHOICE | 677 | 78% | 25% | 16% | 36% | 1% | 3% | 10.1 | 36% (91/96) | 358/29%/20% | 113/31%/16% | 206/14%/9% |
| Line Cutters (benders) | REAL CHOICE | 1680 | 88% | 21% | 14% | 38% | 3% | 4% | 10.6 | 40% (95/495) | 976/20%/15% | 374/21%/13% | 330/23%/13% |
| Deprogrammers (red) | REAL CHOICE | 696 | 85% | 25% | 13% | 35% | 5% | 1% | 11.7 | 32% (32/155) | 448/21%/12% | 134/38%/11% | 114/23%/16% |
| Chronicler (echo) | REAL CHOICE | 774 | 82% | 16% | 11% | 42% | 2% | 0% | 11.7 | 29% (58/123) | – | 471/13%/10% | 303/20%/14% |
| Dabblers (benders) | REAL CHOICE | 2467 | 77% | 13% | 11% | 30% | 1% | 1% | 11.2 | 26% (144/348) | 1326/8%/10% | 492/21%/13% | 649/17%/12% |
| Roadie (echo) | AUTO-PICK | 502 | 72% | 34% | 11% | 66% | 15% | 1% | 9.5 | 37% (50/75) | 258/44%/16% | 48/56%/4% | 196/16%/6% |
| Shopkeeper (trading) | AUTO-PICK | 538 | 71% | 30% | 10% | 69% | 10% | 0% | 8.8 | 31% (31/82) | 133/68%/14% | 95/49%/11% | 310/8%/9% |
| Fan Club (echo) | AUTO-PICK | 418 | 85% | 30% | 9% | 62% | 22% | 0% | 11.7 | 34% (23/89) | – | 188/40%/8% | 230/22%/10% |
| Busker (echo) | AUTO-PICK | 516 | 67% | 31% | 8% | 70% | 9% | 0% | 9.7 | 27% (35/56) | 189/50%/11% | 60/62%/5% | 267/10%/7% |
| Polisher (silver) | AUTO-PICK | 1065 | 56% | 14% | 8% | 54% | 3% | 0% | 9.6 | 23% (109/26) | 457/15%/10% | 197/22%/11% | 411/10%/4% |
| Snobs (market) | AUTO-PICK | 608 | 75% | 23% | 8% | 51% | 12% | 0% | 12.0 | 33% (35/110) | – | 301/17%/6% | 307/28%/9% |
| Cutpurse (thieves) | AUTO-PICK | 585 | 72% | 30% | 8% | 76% | 36% | 2% | 10.9 | 31% (29/80) | 285/39%/9% | 89/43%/7% | 211/13%/7% |
| Panel (red) | AUTO-PICK | 317 | 66% | 28% | 8% | 74% | 43% | 0% | 12.9 | 22% (10/28) | – | 186/32%/7% | 131/24%/8% |
| Dyer (yellow) | AUTO-PICK | 539 | 66% | 15% | 7% | 65% | 7% | 0% | 9.3 | 24% (20/65) | – | 91/52%/10% | 448/8%/7% |
| Doppelganger (echo) | AUTO-PICK | 639 | 64% | 21% | 7% | 62% | 10% | 0% | 10.7 | 27% (52/56) | – | 277/26%/8% | 362/17%/6% |
| Accomplice (thieves) | AUTO-PICK | 291 | 80% | 62% | 7% | 88% | 64% | 4% | 5.6 | 30% (4/31) | 150/71%/2% | 39/77%/15% | 102/41%/10% |
| Con Men (benders) | AUTO-PICK | 628 | 89% | 53% | 6% | 81% | 54% | 0% | 10.0 | 28% (36/72) | – | 201/89%/3% | 427/36%/8% |
| Stunt Double (echo) | AUTO-PICK | 324 | 78% | 50% | 6% | 75% | 39% | 0% | 11.6 | 32% (21/40) | – | 121/68%/5% | 203/39%/6% |
| HR (benders) | AUTO-PICK | 1259 | 64% | 16% | 6% | 53% | 25% | 0% | 15.4 | 28% (29/182) | – | 636/8%/3% | 623/25%/8% |
| Mob (red) | AUTO-PICK | 225 | 80% | 32% | 6% | 78% | 44% | 0% | 19.3 | 27% (10/30) | – | 98/19%/2% | 127/43%/9% |
| Patriarch (red) | AUTO-PICK | 637 | 71% | 23% | 5% | 61% | 9% | 0% | 12.5 | 30% (40/92) | – | 373/16%/5% | 264/33%/6% |
| Caravan (yellow) | AUTO-PICK | 488 | 60% | 15% | 5% | 51% | 14% | 0% | 11.2 | 23% (20/46) | – | 148/30%/5% | 340/8%/6% |
| Gardener (yellow) | AUTO-PICK | 557 | 54% | 24% | 5% | 71% | 42% | 0% | 10.0 | 22% (28/26) | 124/73%/6% | 138/18%/9% | 295/7%/3% |
| Mentor & Protégés (red) | AUTO-PICK | 577 | 59% | 12% | 5% | 51% | 13% | 1% | 12.1 | 24% (23/58) | – | 185/9%/2% | 392/14%/6% |
| Double Agent (thieves) | AUTO-PICK | 689 | 54% | 17% | 4% | 68% | 37% | 0% | 13.4 | 29% (32/62) | – | 332/17%/2% | 357/17%/5% |
| Grifter (thieves) | AUTO-PICK | 613 | 64% | 20% | 3% | 70% | 31% | 0% | 13.9 | 29% (20/83) | – | 314/19%/2% | 299/20%/5% |
| Extortionist (thieves) | AUTO-PICK | 650 | 60% | 14% | 3% | 61% | 24% | 0% | 11.8 | 27% (27/75) | – | 232/19%/4% | 418/10%/3% |
| Tribute Band (echo) | AUTO-PICK | 317 | 26% | 15% | 1% | 89% | 0% | 0% | 15.1 | 41% (29/4) | – | 55/7%/2% | 262/16%/1% |
| Philanthropists (silver) | MIXED | 723 | 74% | 15% | 10% | 45% | 4% | 0% | 11.2 | 27% (38/106) | – | 283/17%/8% | 440/13%/10% |
| Triplets (red) | MIXED | 1522 | 50% | 9% | 9% | 26% | 0% | 0% | 9.1 | 19% (95/47) | 719/5%/11% | 307/15%/9% | 496/10%/7% |
| Recruit Bonus (red) | MIXED | 1239 | 72% | 11% | 9% | 37% | 1% | 1% | 11.0 | 22% (76/120) | 569/6%/10% | 320/19%/13% | 350/10%/5% |
| Early Birds (purple) | MIXED | 1077 | 66% | 10% | 9% | 28% | 2% | 2% | 10.2 | 22% (55/100) | 343/11%/11% | 174/17%/11% | 560/8%/8% |
| Window Dressers (market) | MIXED | 958 | 75% | 15% | 9% | 39% | 0% | 1% | 10.8 | 24% (50/120) | 252/6%/6% | 346/17%/10% | 360/19%/10% |
| Scouts (benders) | MIXED | 3063 | 71% | 8% | 9% | 28% | 0% | 2% | 11.0 | 22% (133/340) | 1355/6%/10% | 553/18%/11% | 1155/6%/7% |
| Timekeepers (purple) | MIXED | 1090 | 72% | 14% | 9% | 37% | 3% | 1% | 10.1 | 23% (47/130) | 530/5%/6% | 223/25%/11% | 337/20%/12% |
| Agents (echo) | MIXED | 1135 | 66% | 12% | 9% | 34% | 1% | 1% | 10.9 | 24% (82/101) | 544/11%/9% | 271/17%/11% | 320/9%/6% |
| Shift Crew (purple) | MIXED | 1024 | 52% | 12% | 9% | 18% | 0% | 0% | 9.8 | 23% (83/40) | 304/7%/9% | 412/11%/8% | 308/17%/10% |
| Trendsetters (market) | MIXED | 1139 | 73% | 13% | 9% | 31% | 1% | 0% | 10.9 | 26% (63/154) | 359/7%/6% | 353/15%/9% | 427/16%/10% |
| Martyrs (trading) | MIXED | 1101 | 68% | 11% | 8% | 29% | 3% | 0% | 10.7 | 26% (60/137) | 376/6%/6% | 304/17%/11% | 421/12%/8% |
| Kingpin (thieves) | MIXED | 1301 | 67% | 11% | 8% | 34% | 2% | 0% | 11.8 | 25% (67/148) | 602/4%/5% | 277/21%/12% | 422/16%/10% |
| Critic (market) | MIXED | 1621 | 55% | 8% | 8% | 28% | 2% | 3% | 9.7 | 17% (86/64) | 490/6%/7% | 276/16%/13% | 855/6%/6% |
| Alchemists (benders) | MIXED | 2277 | 82% | 10% | 7% | 31% | 0% | 1% | 11.1 | 22% (123/291) | – | 819/13%/9% | 1458/9%/7% |
| Brokers (trading) | MIXED | 1026 | 69% | 9% | 7% | 28% | 0% | 0% | 10.5 | 25% (49/129) | – | 434/9%/7% | 592/10%/8% |
| Regular (market) | MIXED | 1622 | 56% | 7% | 7% | 31% | 2% | 0% | 10.0 | 15% (75/63) | 427/4%/9% | 443/10%/9% | 752/6%/5% |
| Drifters (yellow) | MIXED | 872 | 58% | 14% | 7% | 33% | 13% | 0% | 10.6 | 22% (43/67) | 308/18%/9% | 195/17%/9% | 369/9%/5% |
| Loyalists (red) | MIXED | 879 | 70% | 12% | 7% | 33% | 1% | 0% | 11.5 | 27% (56/112) | – | 376/12%/7% | 503/12%/7% |
| Bouncers (purple) | MIXED | 1326 | 72% | 10% | 7% | 41% | 5% | 0% | 11.7 | 21% (65/133) | 554/7%/5% | 379/13%/10% | 393/11%/7% |
| Toastmaster (silver) | MIXED | 1529 | 53% | 7% | 7% | 39% | 3% | 0% | 9.9 | 16% (63/67) | 481/6%/8% | 350/13%/9% | 698/4%/4% |
| Doormen (market) | MIXED | 1310 | 67% | 8% | 6% | 34% | 2% | 0% | 10.4 | 18% (74/79) | – | 520/9%/7% | 790/7%/6% |
| Recluse (trading) | MIXED | 986 | 65% | 14% | 6% | 42% | 6% | 0% | 10.4 | 22% (39/98) | 300/6%/4% | 266/23%/7% | 420/13%/7% |
| Connoisseurs (market) | MIXED | 1555 | 65% | 8% | 6% | 24% | 1% | 1% | 12.0 | 19% (85/111) | 476/2%/4% | 443/14%/8% | 636/8%/6% |
| Old Money (trading) | MIXED | 1249 | 67% | 7% | 6% | 37% | 0% | 0% | 11.0 | 21% (45/129) | – | 481/7%/4% | 768/7%/7% |
| High Society (silver) | MIXED | 656 | 69% | 12% | 6% | 48% | 7% | 0% | 13.8 | 21% (15/80) | – | 265/15%/6% | 391/10%/6% |
| Clockmakers (purple) | MIXED | 1096 | 60% | 7% | 5% | 22% | 0% | 0% | 10.5 | 16% (43/66) | – | 374/9%/5% | 722/5%/5% |
| Ringleader (yellow) | MIXED | 819 | 59% | 12% | 5% | 42% | 6% | 0% | 12.7 | 23% (39/72) | – | 359/11%/3% | 460/12%/7% |
| Raiders (trading) | MIXED | 1140 | 59% | 7% | 5% | 27% | 1% | 0% | 12.1 | 13% (61/28) | – | 474/6%/4% | 666/7%/5% |
| Hot Streak (purple) | MIXED | 1234 | 42% | 5% | 5% | 16% | 0% | 0% | 11.4 | 15% (53/24) | – | 444/7%/5% | 790/4%/4% |
| Cashier (trading) | MIXED | 1609 | 39% | 4% | 4% | 32% | 6% | 0% | 9.6 | 14% (48/39) | 380/1%/4% | 528/4%/3% | 701/7%/6% |
| Window Shopper (market) | MIXED | 1463 | 54% | 7% | 4% | 43% | 6% | 0% | 11.5 | 17% (51/82) | – | 464/12%/8% | 999/4%/3% |
| Big Tent (yellow) | MIXED | 896 | 41% | 5% | 4% | 32% | 4% | 0% | 11.4 | 16% (17/43) | – | 316/7%/3% | 580/4%/4% |
| Muse (echo) | MIXED | 1970 | 44% | 4% | 4% | 38% | 1% | 1% | 10.4 | 11% (62/33) | 598/2%/3% | 407/10%/7% | 965/3%/3% |
| Party Crasher (benders) | MIXED | 3410 | 52% | 8% | 4% | 50% | 0% | 0% | 11.5 | 16% (215/66) | 1484/1%/1% | 549/22%/8% | 1377/9%/5% |
| Heiresses (trading) | MIXED | 627 | 30% | 9% | 4% | 55% | 2% | 0% | 9.1 | 33% (49/13) | – | 211/6%/4% | 416/10%/3% |
| Desperado (thieves) | MIXED | 1463 | 37% | 4% | 3% | 30% | 0% | 0% | 11.6 | 13% (47/23) | – | 503/5%/3% | 960/3%/3% |
| Closer (purple) | MIXED | 1394 | 43% | 4% | 3% | 31% | 0% | 0% | 11.2 | 12% (53/17) | – | 512/6%/4% | 882/3%/3% |
| Anarchist (benders) | MIXED | 2906 | 36% | 7% | 3% | 38% | 0% | 0% | 12.4 | 20% (180/26) | – | 1025/7%/3% | 1881/6%/4% |
| Sticky Fingers (thieves) | MIXED | 1414 | 44% | 6% | 3% | 33% | 1% | 1% | 11.8 | 16% (66/37) | 363/1%/2% | 349/13%/5% | 702/5%/3% |
| Debt Collectors (silver) | MIXED | 832 | 43% | 10% | 3% | 48% | 1% | 0% | 10.8 | 22% (65/12) | – | 282/17%/2% | 550/6%/4% |
| Exporters (trading) | MIXED | 1242 | 42% | 3% | 3% | 29% | 0% | 0% | 12.4 | 10% (30/23) | – | 478/3%/2% | 764/2%/3% |
| Go-Between (yellow) | MIXED | 1406 | 41% | 4% | 3% | 26% | 2% | 0% | 11.7 | 13% (32/43) | 297/3%/3% | 334/7%/5% | 775/2%/2% |
| Shopaholics (market) | MIXED | 945 | 38% | 4% | 3% | 29% | 0% | 0% | 14.4 | 12% (23/20) | – | 378/1%/1% | 567/5%/4% |
| Collector (silver) | MIXED | 1437 | 36% | 4% | 3% | 44% | 2% | 0% | 11.4 | 14% (49/25) | 208/0%/0% | 413/8%/5% | 816/3%/2% |
| Gossip (purple) | MIXED | 1105 | 30% | 4% | 3% | 31% | 0% | 0% | 10.4 | 13% (39/3) | – | 321/5%/3% | 784/3%/3% |
| Bodyguards (thieves) | MIXED | 698 | 29% | 5% | 2% | 28% | 0% | 3% | 9.9 | 17% (27/8) | – | 174/3%/2% | 524/5%/3% |
| Shoplifter (thieves) | MIXED | 1027 | 26% | 4% | 2% | 37% | 0% | 2% | 13.0 | 17% (39/7) | – | 402/2%/1% | 625/6%/3% |
| Courier (purple) | MIXED | 1219 | 31% | 4% | 2% | 38% | 0% | 0% | 11.1 | 17% (47/18) | – | 400/7%/3% | 819/3%/2% |
| Debutantes (silver) | MIXED | 949 | 42% | 4% | 2% | 33% | 0% | 0% | 13.0 | 12% (34/15) | – | 354/2%/1% | 595/6%/3% |
| Extra Hand (benders) | MIXED | 2466 | 23% | 4% | 2% | 38% | 0% | 0% | 14.7 | 20% (100/10) | – | 1043/1%/1% | 1423/6%/3% |
| Night Owls (purple) | MIXED | 636 | 29% | 5% | 2% | 29% | 0% | 0% | 10.4 | 16% (22/8) | – | 196/2%/1% | 440/6%/3% |
| Harmonist (yellow) | MIXED | 992 | 26% | 2% | 2% | 40% | 5% | 0% | 13.3 | 10% (15/11) | – | 353/2%/2% | 639/2%/2% |
| Gift Wrapper (silver) | MIXED | 1684 | 32% | 2% | 2% | 25% | 0% | 0% | 12.6 | 7% (23/17) | – | 468/3%/2% | 1216/1%/1% |
| Hangers-On (silver) | MIXED | 1207 | 41% | 1% | 2% | 28% | 0% | 0% | 12.5 | 7% (15/19) | – | 411/2%/0% | 796/1%/2% |
| Proselytizers (red) | MIXED | 1071 | 36% | 3% | 1% | 31% | 0% | 0% | 12.7 | 12% (29/19) | – | 399/2%/0% | 672/4%/2% |
| Tastemaker (yellow) | MIXED | 1216 | 23% | 2% | 1% | 26% | 0% | 0% | 11.7 | 9% (19/5) | – | 317/3%/1% | 899/1%/1% |
| Customs (yellow) | MIXED | 1598 | 27% | 2% | 1% | 35% | 0% | 0% | 12.2 | 9% (21/16) | 294/0%/0% | 388/4%/3% | 916/1%/1% |
| Patroness (market) | MIXED | 942 | 20% | 2% | 1% | 24% | 0% | 0% | 12.7 | 11% (16/4) | – | 260/1%/1% | 682/2%/1% |
| Smooth Talkers (silver) | MIXED | 1028 | 34% | 2% | 1% | 13% | 0% | 0% | 13.4 | 6% (11/9) | – | 267/2%/1% | 761/1%/1% |
| Hoarder (trading) | MIXED | 1165 | 23% | 1% | 1% | 13% | 0% | 0% | 14.7 | 3% (8/0) | – | 289/1%/0% | 876/1%/1% |
| Wallflower (echo) | MIXED | 830 | 16% | 1% | 0% | 50% | 0% | 0% | 15.5 | 6% (6/2) | – | 174/0%/0% | 656/1%/0% |
| Old Maid (benders) | DEAD | 4875 | 0% | 0% | 0% | – | – | – | 13.5 | 0% (0/0) | – | 1569/0%/0% | 3306/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Anarchist (benders) | DEAD | 55 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 55/0%/0% |
| Polisher (silver) | DEAD | 247 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 60/0%/0% | 142/0%/0% | 45/0%/0% |
| Scouts (benders) | DEAD | 3595 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 154/0%/0% | 892/0%/0% | 2549/0%/0% |
| Hot Streak (purple) | DEAD | 222 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 86/0%/0% | 136/0%/0% |
| Debutantes (silver) | DEAD | 99 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 43/0%/0% | 56/0%/0% |
| Extra Hand (benders) | DEAD | 76 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 64/0%/0% | 12/0%/0% |
| Party Crasher (benders) | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 28/0%/0% | 18/0%/0% | 1/0%/0% |
| Raiders (trading) | DEAD | 195 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 48/0%/0% | 147/0%/0% |
| Tribute Band (echo) | DEAD | 201 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 182/0%/0% |
| Hoarder (trading) | THIN DATA | 4 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 1/0%/0% |
| Heiresses (trading) | THIN DATA | 7 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | – |
| Debt Collectors (silver) | THIN DATA | 9 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 8/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| choose member:Dabblers (3) | REAL CHOICE | 67 | 100% | 36% | 58% | 13% | 0% | 100% | 3.6 | 27% (9/9) | – | 24/38%/54% | 43/35%/60% |
| choose member:Accomplice (3) | REAL CHOICE | 51 | 92% | 35% | 53% | 17% | 0% | 100% | 5.3 | 28% (3/10) | – | 24/46%/50% | 27/26%/56% |
| choose member:Triplets (3) | REAL CHOICE | 25 | 92% | 16% | 52% | 0% | 0% | 100% | 2.1 | 17% (3/1) | – | 6/0%/50% | 19/21%/53% |
| choose member:Scouts (3) | REAL CHOICE | 56 | 98% | 29% | 50% | 13% | 0% | 100% | 3.9 | 27% (6/9) | – | 26/38%/35% | 30/20%/63% |
| choose member:Cutpurse (3) | REAL CHOICE | 57 | 93% | 30% | 49% | 18% | 0% | 100% | 4.6 | 30% (1/15) | – | 27/44%/44% | 30/17%/53% |
| choose member:Deprogrammers (3) | REAL CHOICE | 55 | 91% | 29% | 49% | 19% | 6% | 100% | 6.1 | 14% (4/3) | – | 28/32%/43% | 27/26%/56% |
| choose member:Recruit Bonus (3) | REAL CHOICE | 21 | 90% | 24% | 48% | 20% | 0% | 100% | 3.4 | 21% (2/2) | – | 5/40%/20% | 16/19%/56% |
| choose member:Shift Crew (4) | REAL CHOICE | 17 | 94% | 18% | 47% | 33% | 0% | 100% | 3.2 | 19% (2/1) | – | 7/14%/57% | 10/20%/40% |
| choose member:Bouncers (4) | REAL CHOICE | 18 | 100% | 39% | 44% | 14% | 14% | 100% | 3.2 | 41% (3/4) | – | 10/50%/50% | 8/25%/38% |
| choose member:Critic (3) | REAL CHOICE | 15 | 93% | 53% | 40% | 13% | 0% | 100% | 3.8 | 14% (2/0) | – | 4/100%/50% | 11/36%/36% |
| choose member:Drifters (3) | REAL CHOICE | 25 | 100% | 24% | 40% | 33% | 0% | 100% | 5.0 | 20% (5/0) | – | 9/22%/44% | 16/25%/38% |
| choose member:Sticky Fingers (4) | REAL CHOICE | 40 | 98% | 20% | 40% | 0% | 0% | 100% | 5.8 | 15% (4/2) | – | 14/14%/21% | 26/23%/50% |
| choose member:Roadie (3) | REAL CHOICE | 28 | 96% | 57% | 39% | 38% | 13% | 100% | 7.6 | 28% (2/5) | – | 13/69%/38% | 15/47%/40% |
| choose member:Kingpin (4) | REAL CHOICE | 60 | 97% | 23% | 37% | 21% | 0% | 100% | 6.0 | 24% (6/8) | – | 23/26%/26% | 37/22%/43% |
| choose member:Timekeepers (4) | REAL CHOICE | 15 | 100% | 27% | 33% | 25% | 25% | 100% | 5.4 | 21% (1/2) | – | 2/50%/50% | 13/23%/31% |
| choose member:Agents (3) | REAL CHOICE | 34 | 94% | 21% | 32% | 14% | 0% | 100% | 5.8 | 25% (4/4) | – | 17/18%/29% | 17/24%/35% |
| choose member:Recluse (4) | REAL CHOICE | 26 | 96% | 12% | 31% | 0% | 0% | 100% | 7.6 | 20% (2/3) | – | 3/0%/33% | 23/13%/30% |
| choose member:Busker (4) | REAL CHOICE | 56 | 96% | 32% | 30% | 28% | 0% | 100% | 7.6 | 33% (5/13) | – | 31/42%/29% | 25/20%/32% |
| choose member:Line Cutters | REAL CHOICE | 26 | 62% | 27% | 27% | 29% | 0% | 100% | 6.1 | 25% (1/3) | – | 13/38%/38% | 13/15%/15% |
| choose member:Doormen (5) | REAL CHOICE | 15 | 93% | 20% | 27% | 33% | 0% | 100% | 5.9 | 14% (2/0) | – | 5/20%/20% | 10/20%/30% |
| trade:P3: Cutpurse ↔ P4: Deprogrammers | REAL CHOICE | 15 | 27% | 13% | 27% | 0% | 0% | 0% | 0.7 | 50% (2/0) | – | 6/17%/17% | 9/11%/33% |
| choose member:Trendsetters (4) | REAL CHOICE | 23 | 96% | 13% | 26% | 33% | 0% | 100% | 5.8 | 27% (1/5) | – | 6/0%/33% | 17/18%/24% |
| choose member:P3's HR (10) | REAL CHOICE | 20 | 90% | 45% | 25% | 33% | 22% | 100% | 7.1 | 38% (1/5) | – | – | 20/45%/25% |
| choose member:Line Cutters (2) | REAL CHOICE | 101 | 100% | 45% | 25% | 44% | 4% | 100% | 6.6 | 40% (18/22) | – | 44/48%/5% | 57/42%/40% |
| trade:P1: Loyalists ↔ P2: Busker | REAL CHOICE | 25 | 24% | 12% | 20% | 0% | 0% | 0% | 9.2 | 50% (3/0) | – | 3/33%/33% | 22/9%/18% |
| choose member:Alchemists (5) | REAL CHOICE | 36 | 100% | 28% | 19% | 30% | 0% | 100% | 9.7 | 22% (6/2) | – | 8/38%/13% | 28/25%/21% |
| choose member:Alchemists | REAL CHOICE | 17 | 76% | 6% | 18% | 0% | 0% | 100% | 7.1 | 8% (0/1) | – | 7/14%/29% | 10/0%/10% |
| choose member:Fan Club | REAL CHOICE | 28 | 82% | 39% | 14% | 45% | 9% | 100% | 12.1 | 32% (3/4) | – | 7/71%/0% | 21/29%/19% |
| choose member:Doppelganger (5) | REAL CHOICE | 22 | 91% | 23% | 14% | 20% | 0% | 100% | 9.0 | 30% (4/2) | – | 8/38%/0% | 14/14%/21% |
| choose member:P3's Shopkeeper (4) | REAL CHOICE | 22 | 41% | 14% | 14% | 0% | 0% | 100% | 11.0 | 44% (3/1) | – | 2/50%/50% | 20/10%/10% |
| trade:P1: Deprogrammers ↔ P3: Toastmaster | REAL CHOICE | 15 | 27% | 7% | 13% | 0% | 0% | 0% | 6.1 | 50% (1/1) | – | 7/14%/14% | 8/0%/13% |
| trade:P2: Deprogrammers ↔ P3: Accomplice | REAL CHOICE | 15 | 33% | 7% | 13% | 0% | 0% | 0% | 12.3 | 0% (0/0) | – | 6/17%/33% | 9/0%/0% |
| choose member:P4's Timekeepers (4) | REAL CHOICE | 15 | 47% | 7% | 13% | 0% | 0% | 100% | 12.8 | 0% (0/0) | – | 1/0%/0% | 14/7%/14% |
| choose member:Busker | REAL CHOICE | 39 | 56% | 18% | 13% | 43% | 14% | 100% | 10.2 | 29% (4/2) | – | 16/31%/6% | 23/9%/17% |
| choose member:Chronicler | REAL CHOICE | 16 | 81% | 13% | 13% | 0% | 0% | 100% | 9.7 | 23% (0/3) | – | 4/0%/0% | 12/17%/17% |
| trade:P4: Deprogrammers ↔ P2: Scouts | REAL CHOICE | 24 | 17% | 0% | 13% | – | – | – | 1.9 | 0% (0/0) | – | 2/0%/0% | 22/0%/14% |
| trade:P3: Deprogrammers ↔ P1: Cutpurse | REAL CHOICE | 16 | 31% | 0% | 13% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/20% | 11/0%/9% |
| trade:P1: Accomplice ↔ P3: Deprogrammers | REAL CHOICE | 25 | 24% | 4% | 12% | 0% | 0% | 0% | 14.6 | 0% (0/0) | – | 10/0%/10% | 15/7%/13% |
| trade:P2: Loyalists ↔ P3: Polisher | REAL CHOICE | 17 | 12% | 12% | 12% | 0% | 0% | 0% | – | 100% (2/0) | – | 4/50%/50% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Busker | REAL CHOICE | 17 | 12% | 6% | 12% | 0% | 0% | 0% | 1.0 | 50% (1/0) | – | 4/25%/25% | 13/0%/8% |
| trade:P4: Fan Club ↔ P2: Busker | REAL CHOICE | 17 | 18% | 6% | 12% | 0% | 0% | 0% | 15.0 | 0% (0/0) | – | 2/0%/50% | 15/7%/7% |
| trade:P4: Timekeepers ↔ P1: Scouts | REAL CHOICE | 17 | 12% | 0% | 12% | – | – | – | 1.0 | 0% (0/0) | – | 4/0%/0% | 13/0%/15% |
| trade:P1: Fan Club ↔ P4: Stunt Double | REAL CHOICE | 26 | 12% | 12% | 12% | 0% | 0% | 0% | – | 33% (1/0) | – | 4/25%/25% | 22/9%/9% |
| trade:P2: Scouts ↔ P4: Deprogrammers | REAL CHOICE | 26 | 15% | 12% | 12% | 0% | 0% | 0% | 6.8 | 75% (2/1) | – | 2/0%/0% | 24/13%/13% |
| followers:small | REAL CHOICE | 19465 | 54% | 13% | 11% | 25% | 0% | 7% | 9.6 | 24% (1891/618) | 4558/17%/17% | 6173/17%/14% | 8734/8%/6% |
| trade:P1: Cutpurse ↔ P3: Deprogrammers | REAL CHOICE | 18 | 28% | 17% | 11% | 0% | 0% | 0% | 12.1 | 20% (1/0) | – | 6/17%/17% | 12/17%/8% |
| pass:Pass | REAL CHOICE | 19465 | 53% | 18% | 11% | 47% | 7% | 12% | 8.8 | 27% (1743/921) | 4558/44%/18% | 6173/19%/14% | 8734/5%/5% |
| trade:P1: Trendsetters ↔ P3: Dabblers | REAL CHOICE | 20 | 20% | 5% | 10% | 0% | 0% | 0% | 13.5 | 25% (0/1) | – | 9/11%/22% | 11/0%/0% |
| trade:P4: Cutpurse ↔ P3: Deprogrammers | REAL CHOICE | 20 | 15% | 0% | 10% | – | – | – | 3.2 | 0% (0/0) | – | 5/0%/0% | 15/0%/13% |
| choose member:Window Dressers (4) | AUTO-PICK | 22 | 95% | 14% | 41% | 67% | 0% | 100% | 5.2 | 10% (0/2) | – | 7/29%/57% | 15/7%/33% |
| choose member:Shopkeeper (4) | AUTO-PICK | 27 | 85% | 37% | 26% | 50% | 0% | 100% | 6.4 | 35% (3/5) | – | 15/40%/13% | 12/33%/42% |
| choose member:HR | AUTO-PICK | 23 | 100% | 74% | 17% | 71% | 41% | 100% | 9.7 | 13% (1/1) | – | 6/67%/17% | 17/76%/18% |
| choose member:Party Crasher (4) | AUTO-PICK + MISJUDGED | 24 | 96% | 50% | 17% | 58% | 0% | 100% | 6.0 | 52% (11/1) | – | 5/100%/0% | 19/37%/21% |
| trade:P1: Fan Club ↔ P2: Party Crasher | AUTO-PICK | 16 | 38% | 13% | 13% | 50% | 50% | 0% | 6.3 | 40% (1/1) | – | 6/33%/33% | 10/0%/0% |
| choose member:Roadie | AUTO-PICK | 50 | 84% | 36% | 12% | 78% | 33% | 100% | 9.6 | 33% (3/9) | – | 29/55%/14% | 21/10%/10% |
| choose member:P2's Fan Club (6) | AUTO-PICK | 25 | 80% | 24% | 12% | 50% | 50% | 100% | 5.8 | 41% (0/7) | – | 1/100%/0% | 24/21%/13% |
| choose member:P1's Mob (12) | AUTO-PICK | 17 | 100% | 88% | 12% | 87% | 67% | 100% | 2.9 | 14% (0/1) | – | – | 17/88%/12% |
| choose member:P4's Recluse (4) | AUTO-PICK | 19 | 37% | 11% | 11% | 50% | 0% | 100% | 6.9 | 29% (1/1) | – | 3/67%/33% | 16/0%/6% |
| choose member:P2's HR (10) | AUTO-PICK + MISJUDGED | 22 | 95% | 59% | 9% | 92% | 77% | 100% | 4.4 | 55% (0/6) | – | 1/100%/0% | 21/57%/10% |
| choose member:P1's HR (10) | AUTO-PICK + MISJUDGED | 24 | 88% | 46% | 8% | 91% | 91% | 100% | 13.0 | 55% (1/5) | – | – | 24/46%/8% |
| choose member:Stunt Double | AUTO-PICK | 26 | 58% | 35% | 8% | 67% | 11% | 100% | 24.0 | 29% (2/2) | – | 8/38%/0% | 18/33%/11% |
| choose member:P1's Loyalists (5) | AUTO-PICK | 29 | 52% | 17% | 7% | 60% | 0% | 100% | 8.7 | 40% (5/1) | – | 1/100%/0% | 28/14%/7% |
| choose member:Stunt Double (5) | AUTO-PICK | 30 | 100% | 40% | 7% | 67% | 0% | 100% | 7.3 | 37% (11/0) | – | 14/36%/0% | 16/44%/13% |
| trade:P4: Panel ↔ P2: Volunteer | AUTO-PICK | 15 | 20% | 13% | 7% | 50% | 0% | 0% | 13.2 | 33% (1/0) | – | 4/0%/0% | 11/18%/9% |
| choose member:P1's Patriarch (6) | AUTO-PICK | 16 | 50% | 25% | 6% | 75% | 50% | 100% | 8.8 | 33% (0/2) | – | – | 16/25%/6% |
| choose member:Mob | AUTO-PICK | 17 | 100% | 88% | 6% | 93% | 60% | 100% | 3.3 | 0% (0/0) | – | 2/50%/0% | 15/93%/7% |
| trade:P1: Fan Club ↔ P4: Loyalists | AUTO-PICK | 17 | 12% | 12% | 6% | 50% | 0% | 0% | – | 0% (0/0) | – | 2/50%/50% | 15/7%/0% |
| choose member:P4's Gardener (3) | AUTO-PICK | 17 | 29% | 12% | 6% | 100% | 0% | 100% | 5.0 | 20% (1/0) | – | 3/67%/0% | 14/0%/7% |
| choose member:Con Men | AUTO-PICK | 18 | 50% | 17% | 6% | 67% | 0% | 100% | 9.7 | 33% (3/0) | – | 6/33%/0% | 12/8%/8% |
| trade:P2: Fan Club ↔ P3: Busker | AUTO-PICK | 18 | 28% | 11% | 6% | 100% | 50% | 0% | 2.8 | 75% (1/2) | – | 3/33%/0% | 15/7%/7% |
| choose member:P2's Snobs (6) | AUTO-PICK | 19 | 84% | 42% | 5% | 63% | 13% | 100% | 9.9 | 47% (2/5) | – | 2/50%/50% | 17/41%/0% |
| choose member:P2's Connoisseurs (4) | AUTO-PICK | 19 | 26% | 11% | 5% | 50% | 0% | 100% | 7.2 | 20% (1/0) | – | 2/50%/50% | 17/6%/0% |
| choose member:P2's Loyalists (5) | AUTO-PICK | 19 | 53% | 11% | 5% | 100% | 0% | 100% | 7.0 | 10% (1/0) | – | – | 19/11%/5% |
| choose member:P3's Panel (7) | AUTO-PICK | 23 | 52% | 17% | 4% | 50% | 0% | 100% | 9.5 | 42% (3/2) | – | 1/0%/0% | 22/18%/5% |
| choose member:P3's Fan Club (6) | AUTO-PICK + MISJUDGED | 24 | 58% | 33% | 4% | 75% | 38% | 100% | 17.8 | 55% (2/4) | – | 1/100%/0% | 23/30%/4% |
| choose member:P3's Con Men (7) | AUTO-PICK | 36 | 53% | 19% | 3% | 57% | 0% | 100% | 13.0 | 21% (1/3) | – | 4/25%/0% | 32/19%/3% |
| choose member:P1's Panel (7) | AUTO-PICK | 38 | 55% | 11% | 3% | 50% | 0% | 100% | 15.0 | 29% (1/5) | – | 1/0%/0% | 37/11%/3% |
| choose member:P3's Busker (4) | AUTO-PICK | 48 | 38% | 13% | 2% | 67% | 33% | 100% | 11.2 | 44% (3/4) | – | 4/50%/0% | 44/9%/2% |
| choose member:P2's Con Men (7) | AUTO-PICK | 50 | 70% | 16% | 2% | 63% | 0% | 100% | 17.1 | 23% (3/5) | – | 4/50%/0% | 46/13%/2% |
| choose member:P4's HR (10) | AUTO-PICK | 26 | 92% | 62% | 0% | 75% | 44% | 100% | 4.5 | 35% (3/3) | – | 4/75%/0% | 22/59%/0% |
| choose member:P1's Snobs (6) | AUTO-PICK | 18 | 89% | 56% | 0% | 60% | 20% | 100% | 7.3 | 21% (0/3) | – | 1/0%/0% | 17/59%/0% |
| choose member:P2's Panel (7) | AUTO-PICK | 18 | 78% | 33% | 0% | 67% | 17% | 100% | 14.2 | 31% (2/2) | – | 1/100%/0% | 17/29%/0% |
| choose member:P2's Patriarch (6) | AUTO-PICK | 16 | 63% | 25% | 0% | 100% | 25% | 100% | 12.2 | 44% (1/3) | – | 4/0%/0% | 12/33%/0% |
| choose member:P1's Fan Club (6) | AUTO-PICK | 33 | 52% | 18% | 0% | 83% | 33% | 100% | 15.0 | 20% (1/2) | – | – | 33/18%/0% |
| choose member:P1's Roadie (3) | AUTO-PICK | 46 | 37% | 17% | 0% | 75% | 38% | 100% | 12.9 | 21% (2/1) | – | 5/20%/0% | 41/17%/0% |
| choose member:P4's Panel (7) | AUTO-PICK | 29 | 45% | 17% | 0% | 60% | 0% | 100% | 13.8 | 46% (1/5) | – | 5/20%/0% | 24/17%/0% |
| choose member:P1's Shopkeeper (4) | AUTO-PICK | 20 | 55% | 15% | 0% | 67% | 0% | 100% | 15.3 | 9% (1/0) | – | 7/43%/0% | 13/0%/0% |
| choose member:P1's Grifter (8) | AUTO-PICK | 15 | 53% | 13% | 0% | 50% | 0% | 100% | 9.4 | 25% (2/0) | – | – | 15/13%/0% |
| choose member:P2's Roadie (3) | AUTO-PICK | 34 | 47% | 12% | 0% | 75% | 25% | 100% | 14.8 | 27% (2/2) | – | 3/33%/0% | 31/10%/0% |
| choose member:P4's Grifter (8) | AUTO-PICK | 34 | 38% | 12% | 0% | 50% | 0% | 100% | 10.8 | 15% (2/0) | – | 1/0%/0% | 33/12%/0% |
| choose member:P4's Stunt Double (5) | AUTO-PICK | 18 | 17% | 11% | 0% | 50% | 50% | 100% | 6.5 | 100% (1/1) | – | 1/100%/0% | 17/6%/0% |
| choose member:P4's Patriarch (6) | AUTO-PICK | 19 | 58% | 11% | 0% | 100% | 0% | 100% | 7.1 | 9% (0/1) | – | – | 19/11%/0% |
| trade:P1: Roadie ↔ P4: Volunteer | AUTO-PICK | 19 | 21% | 11% | 0% | 50% | 0% | 0% | 13.3 | 50% (1/1) | – | 12/8%/0% | 7/14%/0% |
| choose member:P2's Deprogrammers (3) | AUTO-PICK | 30 | 37% | 10% | 0% | 67% | 0% | 100% | 19.8 | 27% (3/0) | – | 6/0%/0% | 24/13%/0% |
| trade:P2: Stunt Double ↔ P1: Roadie | AUTO-PICK | 20 | 10% | 10% | 0% | 100% | 0% | 0% | – | 100% (2/0) | – | 5/20%/0% | 15/7%/0% |
| trade:P2: Triplets ↔ P3: Volunteer | MIXED | 22 | 9% | 5% | 9% | 0% | 0% | 0% | -0.1 | 50% (1/0) | – | 6/17%/33% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Gardener | MIXED | 22 | 23% | 5% | 9% | 0% | 0% | 0% | 10.4 | 0% (0/0) | – | 12/0%/0% | 10/10%/20% |
| trade:P3: Con Men ↔ Shop: Gift Wrapper | MIXED | 22 | 14% | 0% | 9% | – | – | – | 1.8 | 67% (0/2) | – | 4/0%/0% | 18/0%/11% |
| trade:P1: Deprogrammers ↔ P3: Volunteer | MIXED | 45 | 24% | 7% | 9% | 33% | 0% | 0% | 12.4 | 45% (1/4) | – | 24/4%/4% | 21/10%/14% |
| choose member:P1's Chronicler (5) | MIXED + MISJUDGED | 23 | 52% | 30% | 9% | 14% | 0% | 100% | 8.9 | 50% (4/2) | – | – | 23/30%/9% |
| trade:P3: Deprogrammers ↔ P4: Cutpurse | MIXED | 23 | 17% | 9% | 9% | 50% | 0% | 50% | 3.7 | 50% (1/1) | – | 5/0%/0% | 18/11%/11% |
| trade:P3: Deprogrammers ↔ P1: Accomplice | MIXED | 24 | 21% | 0% | 8% | – | – | – | 14.5 | 0% (0/0) | – | 9/0%/0% | 15/0%/13% |
| choose member:P4's Shopkeeper (4) | MIXED | 25 | 40% | 8% | 8% | 50% | 0% | 100% | 4.5 | 20% (1/1) | – | 3/33%/33% | 22/5%/5% |
| trade:P1: Loyalists ↔ P3: Busker | MIXED | 25 | 28% | 0% | 8% | – | – | – | 9.6 | 14% (0/1) | – | 2/0%/0% | 23/0%/9% |
| choose member:P3's Patriarch (6) | MIXED | 26 | 50% | 23% | 8% | 17% | 0% | 100% | 6.4 | 23% (1/2) | – | – | 26/23%/8% |
| trade:P3: Roadie ↔ P1: Deprogrammers | MIXED | 26 | 27% | 0% | 8% | – | – | – | 4.0 | 0% (0/0) | – | 16/0%/6% | 10/0%/10% |
| trade:P2: Shopkeeper ↔ P3: Deprogrammers | MIXED | 26 | 27% | 0% | 8% | – | – | – | 8.3 | 0% (0/0) | – | 11/0%/0% | 15/0%/13% |
| choose member:P3's Kingpin (4) | MIXED | 40 | 45% | 8% | 8% | 33% | 0% | 100% | 11.3 | 17% (3/0) | – | 2/50%/50% | 38/5%/5% |
| trade:P4: Timekeepers ↔ P3: Recruit Bonus | MIXED | 27 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (2/0) | – | 5/0%/0% | 22/9%/9% |
| trade:P1: Party Crasher ↔ P2: Deprogrammers | MIXED | 27 | 11% | 4% | 7% | 0% | 0% | 0% | 6.5 | 33% (1/0) | – | 4/0%/0% | 23/4%/9% |
| trade:P4: Scouts ↔ P1: Deprogrammers | MIXED | 27 | 15% | 0% | 7% | – | – | – | 8.2 | 0% (0/0) | – | 10/0%/20% | 17/0%/0% |
| followers:mid | MIXED | 17825 | 45% | 8% | 7% | 17% | 0% | 2% | 8.7 | 17% (963/425) | 2991/0%/1% | 6125/4%/4% | 8709/13%/11% |
| trade:P1: Deprogrammers ↔ P3: Roadie | MIXED | 28 | 25% | 7% | 7% | 0% | 0% | 50% | 5.3 | 43% (1/2) | – | 16/6%/6% | 12/8%/8% |
| trade:P3: Deprogrammers ↔ P1: Volunteer | MIXED | 56 | 14% | 4% | 7% | 50% | 0% | 50% | 13.1 | 38% (0/3) | – | 22/5%/14% | 34/3%/3% |
| trade:P1: Loyalists ↔ P3: Stunt Double | MIXED | 28 | 21% | 4% | 7% | 0% | 0% | 0% | 7.5 | 33% (1/1) | – | 1/0%/0% | 27/4%/7% |
| followers:top | MIXED | 14526 | 37% | 17% | 7% | 24% | 0% | 1% | 8.1 | 29% (490/1063) | 475/0%/0% | 5511/1%/1% | 8540/28%/11% |
| trade:P2: Gardener ↔ P4: Deprogrammers | MIXED | 15 | 33% | 13% | 7% | 0% | 0% | 0% | 6.0 | 40% (1/1) | – | 5/20%/20% | 10/10%/0% |
| choose member:P3's Connoisseurs (4) | MIXED | 15 | 33% | 7% | 7% | 100% | 0% | 100% | 7.0 | 20% (1/0) | – | – | 15/7%/7% |
| choose member:P4's Desperado (5) | MIXED | 15 | 20% | 7% | 7% | 0% | 0% | 100% | 11.3 | 33% (1/0) | – | 1/0%/0% | 14/7%/7% |
| trade:P3: Dabblers ↔ P4: Cutpurse | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/0%/0% | 10/10%/10% |
| trade:P1: Deprogrammers ↔ P4: Triplets | MIXED | 30 | 7% | 7% | 7% | 0% | 0% | 50% | – | 50% (1/0) | – | 12/17%/17% | 18/0%/0% |
| trade:P1: Loyalists ↔ P2: Party Crasher | MIXED | 30 | 13% | 7% | 7% | 0% | 0% | 0% | 16.3 | 25% (1/0) | – | – | 30/7%/7% |
| trade:P4: Volunteer ↔ Shop: Triplets | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/50%/50% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Agents | MIXED | 15 | 7% | 7% | 7% | 0% | 0% | 0% | – | 100% (1/0) | – | 14/7%/7% | 1/0%/0% |
| choose member:P4's Doppelganger (5) | MIXED | 15 | 27% | 7% | 7% | 0% | 0% | 100% | 11.3 | 25% (1/0) | – | 1/0%/0% | 14/7%/7% |
| trade:P4: Deprogrammers ↔ P1: Volunteer | MIXED | 45 | 27% | 2% | 7% | 0% | 0% | 100% | 9.2 | 33% (1/3) | – | 17/6%/12% | 28/0%/4% |
| choose member:P2's Window Shopper (5) | MIXED | 15 | 33% | 0% | 7% | – | – | – | 18.8 | 0% (0/0) | – | 1/0%/0% | 14/0%/7% |
| trade:P4: Deprogrammers ↔ P2: Gardener | MIXED | 15 | 33% | 0% | 7% | – | – | – | 4.7 | 0% (0/0) | – | 5/0%/20% | 10/0%/0% |
| trade:P3: Anarchist ↔ Shop: Exporters | MIXED | 15 | 20% | 0% | 7% | – | – | – | 9.9 | 0% (0/0) | – | 2/0%/50% | 13/0%/0% |
| trade:P3: Trendsetters ↔ P2: Scouts | MIXED | 15 | 20% | 0% | 7% | – | – | – | 7.6 | 67% (0/2) | – | 6/0%/17% | 9/0%/0% |
| trade:P4: Gardener ↔ P1: Volunteer | MIXED | 15 | 13% | 0% | 7% | – | – | – | 1.6 | 0% (0/0) | – | 6/0%/17% | 9/0%/0% |
| trade:P1: Dabblers ↔ P2: Early Birds | MIXED | 15 | 13% | 0% | 7% | – | – | – | 2.0 | 100% (0/2) | – | 4/0%/25% | 11/0%/0% |
| trade:P1: Panel ↔ P3: Volunteer | MIXED | 15 | 27% | 0% | 7% | – | – | – | 17.2 | 25% (0/1) | – | 5/0%/0% | 10/0%/10% |
| trade:P3: Triplets ↔ P2: Volunteer | MIXED | 15 | 20% | 0% | 7% | – | – | – | 21.5 | 0% (0/0) | – | 7/0%/0% | 8/0%/13% |
| trade:P2: Busker ↔ P4: Deprogrammers | MIXED | 30 | 17% | 0% | 7% | – | – | – | 5.8 | 40% (0/2) | – | 10/0%/0% | 20/0%/10% |
| trade:P2: Deprogrammers ↔ P3: Volunteer | MIXED + MISJUDGED | 46 | 22% | 7% | 7% | 0% | 0% | 0% | 11.9 | 50% (2/3) | – | 15/7%/7% | 31/6%/6% |
| trade:P1: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 31 | 19% | 3% | 6% | 0% | 0% | 0% | 9.0 | 17% (1/0) | – | 8/13%/13% | 23/0%/4% |
| choose member:P4's Trendsetters (4) | MIXED | 31 | 45% | 3% | 6% | 100% | 0% | 100% | 10.0 | 7% (1/0) | – | 3/0%/0% | 28/4%/7% |
| trade:P3: Deprogrammers ↔ P1: Roadie | MIXED | 31 | 16% | 0% | 6% | – | – | – | 10.1 | 0% (0/0) | – | 14/0%/0% | 17/0%/12% |
| choose member:P3's Loyalists (5) | MIXED | 16 | 38% | 6% | 6% | 0% | 0% | 100% | 13.3 | 17% (1/0) | – | 1/0%/0% | 15/7%/7% |
| trade:P3: Gardener ↔ P4: Deprogrammers | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 7/14%/14% | 9/0%/0% |
| trade:P1: Volunteer ↔ P3: Scouts | MIXED | 16 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/17%/17% | 10/0%/0% |
| choose member:P3's Timekeepers (4) | MIXED | 16 | 63% | 6% | 6% | 0% | 0% | 100% | 5.7 | 40% (1/3) | – | – | 16/6%/6% |
| choose member:P3's Recluse (4) | MIXED | 16 | 63% | 6% | 6% | 0% | 0% | 100% | 7.4 | 0% (0/0) | – | 1/0%/0% | 15/7%/7% |
| trade:P3: Busker ↔ P4: Triplets | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 11.7 | 100% (1/1) | – | 6/17%/17% | 10/0%/0% |
| trade:P2: Loyalists ↔ P1: Agents | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 4.5 | 50% (1/0) | – | 4/25%/25% | 12/0%/0% |
| trade:P2: Accomplice ↔ P4: Gardener | MIXED | 16 | 13% | 6% | 6% | 0% | 0% | 0% | 9.1 | 50% (1/0) | – | 6/17%/17% | 10/0%/0% |
| choose member:P3's Regular (3) | MIXED | 16 | 38% | 0% | 6% | – | – | – | 10.9 | 0% (0/0) | – | – | 16/0%/6% |
| trade:P2: Accomplice ↔ P1: Volunteer | MIXED | 16 | 13% | 0% | 6% | – | – | – | 6.7 | 0% (0/0) | – | 6/0%/17% | 10/0%/0% |
| trade:P3: Loyalists ↔ P4: Party Crasher | MIXED | 16 | 25% | 0% | 6% | – | – | – | 8.8 | 50% (0/2) | – | 3/0%/0% | 13/0%/8% |
| trade:P2: Deprogrammers ↔ P1: Cutpurse | MIXED | 32 | 16% | 0% | 6% | – | – | – | 9.6 | 0% (0/0) | – | 18/0%/0% | 14/0%/14% |
| trade:P3: Shopkeeper ↔ P1: Deprogrammers | MIXED | 33 | 15% | 6% | 6% | 0% | 0% | 0% | 7.5 | 20% (1/0) | – | 15/7%/7% | 18/6%/6% |
| trade:P3: Line Cutters ↔ P2: Volunteer | MIXED | 33 | 12% | 3% | 6% | 0% | 0% | 0% | 10.7 | 25% (1/0) | – | 14/0%/0% | 19/5%/11% |
| trade:P1: Roadie ↔ P3: Deprogrammers | MIXED | 34 | 15% | 9% | 6% | 0% | 0% | 0% | 25.1 | 60% (2/1) | – | 14/0%/0% | 20/15%/10% |
| trade:P1: Window Dressers ↔ Shop: Old Maid | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 1/0%/0% | 16/6%/6% |
| trade:P2: Deprogrammers ↔ P4: Cutpurse | MIXED | 17 | 18% | 6% | 6% | 0% | 0% | 0% | 5.4 | 0% (0/0) | – | 5/0%/0% | 12/8%/8% |
| trade:P3: Scouts ↔ P4: Accomplice | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/17%/17% | 11/0%/0% |
| choose member:P2's Early Birds (3) | MIXED | 17 | 47% | 6% | 6% | 0% | 0% | 100% | 9.9 | 0% (0/0) | – | 1/0%/0% | 16/6%/6% |
| trade:P3: Busker ↔ P2: Deprogrammers | MIXED | 17 | 24% | 6% | 6% | 0% | 0% | 0% | 11.2 | 0% (0/0) | – | 2/0%/0% | 15/7%/7% |
| trade:P1: Accomplice ↔ P2: Recruit Bonus | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/0%/0% | 11/9%/9% |
| trade:P1: Cutpurse ↔ P2: Deprogrammers | MIXED | 34 | 15% | 6% | 6% | 0% | 0% | 0% | 17.0 | 40% (2/0) | – | 19/0%/0% | 15/13%/13% |
| trade:P1: HR ↔ Shop: Wallflower | MIXED | 17 | 18% | 6% | 6% | 0% | 0% | 0% | 9.9 | 33% (1/0) | – | 2/0%/0% | 15/7%/7% |
| trade:P3: Brokers ↔ Shop: Cashier | MIXED | 17 | 12% | 6% | 6% | 0% | 0% | 0% | 3.3 | 50% (1/0) | – | 5/20%/20% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Party Crasher | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 3/0%/0% | 14/7%/7% |
| trade:P1: Dabblers ↔ P2: Gardener | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/0%/0% | 11/9%/9% |
| trade:P1: Line Cutters ↔ P3: Deprogrammers | MIXED | 17 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/0%/0% | 13/8%/8% |
| trade:P4: Party Crasher ↔ P1: Deprogrammers | MIXED | 17 | 18% | 0% | 6% | – | – | – | 9.0 | 0% (0/0) | – | 8/0%/0% | 9/0%/11% |
| trade:P4: Gardener ↔ P3: Deprogrammers | MIXED | 17 | 29% | 0% | 6% | – | – | – | 9.0 | 0% (0/0) | – | 10/0%/0% | 7/0%/14% |
| trade:P2: Scouts ↔ P3: Volunteer | MIXED | 35 | 14% | 6% | 6% | 0% | 0% | 0% | 9.5 | 40% (2/0) | – | 14/14%/14% | 21/0%/0% |
| choose member:P1's Dabblers (3) | MIXED | 53 | 34% | 2% | 6% | 0% | 0% | 100% | 10.2 | 11% (1/1) | – | 3/0%/0% | 50/2%/6% |
| choose member:P4's Con Men (7) | MIXED | 71 | 55% | 18% | 6% | 46% | 0% | 100% | 10.3 | 36% (4/10) | – | 6/67%/17% | 65/14%/5% |
| choose member:P2's Chronicler (5) | MIXED | 18 | 33% | 17% | 6% | 33% | 0% | 100% | 10.3 | 50% (2/1) | – | 2/0%/0% | 16/19%/6% |
| choose member:P3's Drifters (3) | MIXED | 18 | 44% | 6% | 6% | 0% | 0% | 100% | 9.8 | 0% (0/0) | – | 1/0%/0% | 17/6%/6% |
| trade:P4: Loyalists ↔ P2: Deprogrammers | MIXED | 18 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 2/0%/0% | 16/6%/6% |
| trade:P2: Deprogrammers ↔ P3: Regular | MIXED | 18 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 16/6%/6% |
| choose member:P2's Busker (4) | MIXED | 36 | 39% | 6% | 6% | 0% | 0% | 100% | 15.3 | 29% (1/3) | – | 2/0%/0% | 34/6%/6% |
| trade:P2: Volunteer ↔ P4: Deprogrammers | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 7.3 | 50% (1/0) | – | 6/0%/0% | 12/8%/8% |
| trade:P1: Panel ↔ Shop: Shoplifter | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 100% | 38.0 | 50% (1/0) | – | 7/0%/0% | 11/9%/9% |
| trade:P3: Mob ↔ Shop: Wallflower | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 0.1 | 50% (0/1) | – | 3/0%/0% | 15/7%/7% |
| trade:P1: Window Dressers ↔ P2: Party Crasher | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 0.7 | 0% (0/0) | – | 1/0%/0% | 17/6%/6% |
| trade:P2: Deprogrammers ↔ Shop: Toastmaster | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 4.4 | 0% (0/0) | – | 4/0%/0% | 14/7%/7% |
| trade:P1: Alchemists ↔ P2: Busker | MIXED | 18 | 17% | 6% | 6% | 0% | 0% | 0% | 22.9 | 67% (0/2) | – | 3/33%/33% | 15/0%/0% |
| choose member:P1's Bouncers (4) | MIXED | 18 | 39% | 6% | 6% | 0% | 0% | 100% | 10.2 | 0% (0/0) | – | 1/0%/0% | 17/6%/6% |
| trade:P4: HR ↔ Shop: Wallflower | MIXED | 18 | 6% | 6% | 6% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 14/7%/7% |
| trade:P2: Loyalists ↔ P4: Stunt Double | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 33.0 | 50% (1/0) | – | 3/0%/0% | 15/7%/7% |
| trade:P1: Snobs ↔ P3: Party Crasher | MIXED | 18 | 11% | 6% | 6% | 0% | 0% | 0% | 0.0 | 50% (0/1) | – | 1/0%/0% | 17/6%/6% |
| trade:P2: Accomplice ↔ P3: Agents | MIXED | 18 | 6% | 6% | 6% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/0%/0% | 9/11%/11% |
| trade:P4: Deprogrammers ↔ P1: Polisher | MIXED | 18 | 11% | 0% | 6% | – | – | – | 0.9 | 0% (0/0) | – | 4/0%/0% | 14/0%/7% |
| trade:P1: Cutpurse ↔ P2: Volunteer | MIXED | 18 | 22% | 0% | 6% | – | – | – | 14.2 | 0% (0/0) | – | 8/0%/13% | 10/0%/0% |
| trade:P3: Loyalists ↔ P2: Roadie | MIXED | 18 | 17% | 0% | 6% | – | – | – | 1.5 | 33% (0/1) | – | 5/0%/0% | 13/0%/8% |
| trade:P3: Cutpurse ↔ P1: Deprogrammers | MIXED | 18 | 22% | 0% | 6% | – | – | – | 6.7 | 0% (0/0) | – | 7/0%/0% | 11/0%/9% |
| trade:P2: Deprogrammers ↔ Shop: Volunteer | MIXED | 18 | 17% | 0% | 6% | – | – | – | 14.2 | 33% (0/1) | – | 12/0%/0% | 6/0%/17% |
| trade:P1: Scouts ↔ P3: Deprogrammers | MIXED | 36 | 11% | 0% | 6% | – | – | – | 3.3 | 25% (0/1) | – | 14/0%/0% | 22/0%/9% |
| trade:P3: Shopkeeper ↔ P2: Agents | MIXED | 18 | 11% | 0% | 6% | – | – | – | 20.8 | 0% (0/0) | – | 8/0%/13% | 10/0%/0% |
| trade:P3: HR ↔ Shop: Wallflower | MIXED | 18 | 11% | 0% | 6% | – | – | – | 3.6 | 0% (0/0) | – | 1/0%/0% | 17/0%/6% |
| choose member:P3's Alchemists (5) | MIXED | 37 | 57% | 5% | 5% | 50% | 0% | 100% | 10.1 | 10% (1/1) | – | 2/0%/0% | 35/6%/6% |
| trade:P1: Dabblers ↔ P2: Volunteer | MIXED | 37 | 22% | 3% | 5% | 0% | 0% | 0% | 16.5 | 13% (1/0) | – | 11/9%/9% | 26/0%/4% |
| trade:P1: Chronicler ↔ Shop: Old Maid | MIXED | 37 | 11% | 3% | 5% | 0% | 0% | 0% | 4.0 | 50% (1/1) | – | 2/50%/50% | 35/0%/3% |
| choose member:P4's Fan Club (6) | MIXED + MISJUDGED | 19 | 74% | 47% | 5% | 44% | 22% | 100% | 24.9 | 58% (4/3) | – | 3/100%/0% | 16/38%/6% |
| choose member:P4's Deprogrammers (3) | MIXED | 19 | 58% | 21% | 5% | 0% | 0% | 100% | 15.1 | 27% (3/0) | – | 5/20%/0% | 14/21%/7% |
| choose member:P4's Window Dressers (4) | MIXED | 19 | 42% | 16% | 5% | 33% | 0% | 100% | 13.0 | 25% (2/0) | – | 3/0%/0% | 16/19%/6% |
| trade:P4: Drifters ↔ P1: Volunteer | MIXED | 19 | 11% | 11% | 5% | 0% | 0% | 0% | – | 50% (1/0) | – | 6/17%/0% | 13/8%/8% |
| trade:P4: Shopkeeper ↔ Shop: Martyrs | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 7/0%/0% | 12/8%/8% |
| trade:P3: Agents ↔ P1: Volunteer | MIXED | 19 | 16% | 5% | 5% | 0% | 0% | 0% | 5.0 | 33% (1/0) | – | 7/14%/14% | 12/0%/0% |
| trade:P1: Busker ↔ P3: Shopkeeper | MIXED | 19 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 5/20%/20% | 14/0%/0% |
| choose member:P4's Kingpin (4) | MIXED | 38 | 24% | 5% | 5% | 0% | 0% | 100% | 12.3 | 22% (1/1) | – | 3/0%/33% | 35/6%/3% |
| choose member:P4's Sticky Fingers (4) | MIXED | 19 | 16% | 5% | 5% | 0% | 0% | 100% | 14.5 | 33% (1/0) | – | 4/0%/0% | 15/7%/7% |
| trade:P3: Accomplice ↔ P1: Deprogrammers | MIXED | 19 | 16% | 0% | 5% | – | – | – | 6.5 | 0% (0/0) | – | 10/0%/0% | 9/0%/11% |
| trade:P3: Recruit Bonus ↔ P1: Volunteer | MIXED | 38 | 11% | 0% | 5% | – | – | – | 2.8 | 0% (0/0) | – | 13/0%/8% | 25/0%/4% |
| trade:P3: HR ↔ Shop: Extra Hand | MIXED | 19 | 11% | 0% | 5% | – | – | – | 2.4 | 0% (0/0) | – | 3/0%/0% | 16/0%/6% |
| choose member:P4's Line Cutters (2) | MIXED | 60 | 25% | 7% | 5% | 25% | 0% | 100% | 8.8 | 27% (4/0) | – | 5/0%/0% | 55/7%/5% |
| trade:P1: Deprogrammers ↔ P3: Accomplice | MIXED | 20 | 15% | 5% | 5% | 0% | 0% | 0% | 10.7 | 33% (1/0) | – | 10/0%/0% | 10/10%/10% |
| trade:P4: Loyalists ↔ P1: Deprogrammers | MIXED | 20 | 10% | 5% | 5% | 0% | 0% | 0% | 21.6 | 50% (1/0) | – | 6/0%/0% | 14/7%/7% |
| trade:P3: Deprogrammers ↔ P4: Accomplice | MIXED | 20 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 9/0%/0% | 11/9%/9% |
| trade:P2: Window Dressers ↔ P4: Scouts | MIXED | 20 | 5% | 5% | 5% | 0% | 0% | 0% | – | 0% (0/0) | – | 3/33%/33% | 17/0%/0% |
| trade:P2: Dabblers ↔ P4: Gardener | MIXED | 20 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 12/8%/8% |
| trade:P1: Recruit Bonus ↔ P2: Deprogrammers | MIXED | 20 | 10% | 0% | 5% | – | – | – | 12.1 | 0% (0/0) | – | 5/0%/0% | 15/0%/7% |
| trade:P3: Volunteer ↔ P2: Deprogrammers | MIXED | 20 | 10% | 0% | 5% | – | – | – | 5.2 | 0% (0/0) | – | 8/0%/13% | 12/0%/0% |
| trade:P4: Triplets ↔ P1: Volunteer | MIXED | 20 | 15% | 0% | 5% | – | – | – | 8.5 | 0% (0/0) | – | 4/0%/0% | 16/0%/6% |
| trade:P4: Line Cutters ↔ P1: Volunteer | MIXED | 20 | 10% | 0% | 5% | – | – | – | 4.8 | 0% (0/0) | – | 6/0%/0% | 14/0%/7% |
| trade:P4: Deprogrammers ↔ P2: Volunteer | MIXED | 40 | 13% | 0% | 5% | – | – | – | 3.6 | 20% (0/1) | – | 15/0%/0% | 25/0%/8% |
| trade:P2: Volunteer ↔ P4: Scouts | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 4.8 | 50% (1/0) | – | 7/14%/14% | 14/0%/0% |
| trade:P4: Party Crasher ↔ P2: Deprogrammers | MIXED | 21 | 10% | 5% | 5% | 0% | 0% | 0% | 10.9 | 50% (1/0) | – | 2/0%/0% | 19/5%/5% |
| trade:P1: Party Crasher ↔ P3: Deprogrammers | MIXED | 21 | 14% | 0% | 5% | – | – | – | 21.7 | 0% (0/0) | – | 5/0%/0% | 16/0%/6% |
| trade:P3: Deprogrammers ↔ P1: Dabblers | MIXED | 21 | 14% | 0% | 5% | – | – | – | 8.4 | 0% (0/0) | – | 3/0%/33% | 18/0%/0% |
| trade:P3: Con Men ↔ P4: Panel | MIXED | 22 | 9% | 5% | 5% | 0% | 0% | 0% | 6.3 | 0% (0/0) | – | 6/0%/0% | 16/6%/6% |
| trade:P2: Toastmaster ↔ P4: Line Cutters | MIXED | 22 | 5% | 5% | 5% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/0%/0% | 16/6%/6% |
| trade:P1: Deprogrammers ↔ P3: Cutpurse | MIXED | 22 | 23% | 5% | 5% | 0% | 0% | 0% | 11.3 | 40% (0/2) | – | 7/0%/0% | 15/7%/7% |
| choose member:Scouts | MIXED | 22 | 45% | 0% | 5% | – | – | – | 11.6 | 10% (0/1) | – | 10/0%/10% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Cutpurse | MIXED | 22 | 14% | 0% | 5% | – | – | – | 1.9 | 0% (0/0) | – | 4/0%/0% | 18/0%/6% |
| trade:P1: Polisher ↔ P4: Deprogrammers | MIXED | 23 | 13% | 4% | 4% | 0% | 0% | 0% | 1.8 | 33% (0/1) | – | 5/0%/0% | 18/6%/6% |
| trade:P1: Fan Club ↔ P4: Party Crasher | MIXED | 23 | 17% | 4% | 4% | 0% | 0% | 0% | 15.0 | 25% (0/1) | – | 6/17%/17% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Triplets | MIXED | 23 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 13/8%/8% | 10/0%/0% |
| trade:P1: Stunt Double ↔ P4: Deprogrammers | MIXED | 23 | 9% | 4% | 4% | 100% | 0% | 0% | 0.0 | 50% (1/0) | – | 4/25%/0% | 19/0%/5% |
| trade:P1: Fan Club ↔ P3: Busker | MIXED | 23 | 17% | 0% | 4% | – | – | – | 5.6 | 50% (0/2) | – | 5/0%/0% | 18/0%/6% |
| trade:P4: Dabblers ↔ Shop: Triplets | MIXED | 24 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/14% | 17/0%/0% |
| trade:P2: Line Cutters ↔ P4: Busker | MIXED | 24 | 4% | 4% | 4% | 0% | 0% | 0% | – | 0% (0/0) | – | 9/11%/11% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Dabblers | MIXED | 24 | 13% | 4% | 4% | 0% | 0% | 0% | 24.9 | 33% (1/0) | – | 16/6%/6% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Volunteer | MIXED | 48 | 13% | 4% | 4% | 50% | 0% | 0% | 9.9 | 50% (1/2) | – | 21/5%/0% | 27/4%/7% |
| trade:P4: Mob ↔ Shop: Wallflower | MIXED | 24 | 17% | 4% | 4% | 100% | 0% | 0% | 3.2 | 50% (0/2) | – | 3/0%/0% | 21/5%/5% |
| trade:P2: Roadie ↔ P4: Deprogrammers | MIXED | 24 | 21% | 4% | 4% | 0% | 0% | 0% | 10.7 | 40% (1/1) | – | 9/0%/0% | 15/7%/7% |
| trade:P4: Gardener ↔ P2: Deprogrammers | MIXED | 24 | 25% | 0% | 4% | – | – | – | 5.0 | 0% (0/0) | – | 6/0%/0% | 18/0%/6% |
| trade:P4: Dabblers ↔ P2: Volunteer | MIXED | 24 | 17% | 0% | 4% | – | – | – | 18.5 | 25% (0/1) | – | 5/0%/0% | 19/0%/5% |
| trade:P3: Deprogrammers ↔ P2: Agents | MIXED | 24 | 13% | 0% | 4% | – | – | – | 8.3 | 0% (0/0) | – | 10/0%/10% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Roadie | MIXED | 24 | 17% | 0% | 4% | – | – | – | 6.7 | 0% (0/0) | – | 9/0%/0% | 15/0%/7% |
| trade:P3: Deprogrammers ↔ P2: Volunteer | MIXED | 49 | 29% | 10% | 4% | 40% | 0% | 0% | 11.1 | 21% (0/3) | – | 19/16%/0% | 30/7%/7% |
| trade:P2: Deprogrammers ↔ P1: Volunteer | MIXED | 49 | 31% | 4% | 4% | 0% | 0% | 0% | 12.2 | 27% (0/4) | – | 22/5%/0% | 27/4%/7% |
| trade:P2: Busker ↔ P4: Line Cutters | MIXED | 25 | 4% | 4% | 4% | 0% | 0% | 0% | – | 0% (0/0) | – | 12/8%/8% | 13/0%/0% |
| trade:P2: Cutpurse ↔ P3: Deprogrammers | MIXED | 25 | 20% | 4% | 4% | 100% | 0% | 0% | 11.7 | 20% (1/0) | – | 5/0%/0% | 20/5%/5% |
| trade:P3: Trendsetters ↔ Shop: Regular | MIXED | 25 | 4% | 4% | 4% | 0% | 0% | 0% | – | 0% (0/0) | – | 4/0%/0% | 21/5%/5% |
| trade:P1: Recluse ↔ P3: Recruit Bonus | MIXED | 25 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 18/6%/6% |
| trade:P4: Deprogrammers ↔ P3: Volunteer | MIXED | 50 | 10% | 2% | 4% | 0% | 0% | 0% | 14.5 | 20% (0/1) | – | 25/0%/0% | 25/4%/8% |
| trade:P1: Deprogrammers ↔ P2: Volunteer | MIXED | 50 | 20% | 2% | 4% | 0% | 0% | 0% | 9.6 | 40% (1/3) | – | 19/5%/0% | 31/0%/6% |
| trade:P4: Accomplice ↔ P1: Deprogrammers | MIXED | 25 | 12% | 0% | 4% | – | – | – | 5.4 | 0% (0/0) | – | 11/0%/9% | 14/0%/0% |
| trade:P3: Recluse ↔ P4: Deprogrammers | MIXED | 26 | 12% | 8% | 4% | 0% | 0% | 0% | 9.9 | 33% (1/0) | – | 10/10%/0% | 16/6%/6% |
| trade:P4: Recluse ↔ P2: Deprogrammers | MIXED | 26 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/0%/0% | 15/7%/7% |
| trade:P2: Recruit Bonus ↔ P4: Dabblers | MIXED | 26 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 6/17%/17% | 20/0%/0% |
| trade:P1: Dabblers ↔ P3: Deprogrammers | MIXED | 26 | 12% | 4% | 4% | 0% | 0% | 0% | 12.6 | 0% (0/0) | – | 4/25%/25% | 22/0%/0% |
| trade:P2: Agents ↔ P3: Deprogrammers | MIXED | 26 | 15% | 4% | 4% | 0% | 0% | 0% | 18.6 | 25% (1/0) | – | 10/10%/10% | 16/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Recruit Bonus | MIXED | 26 | 12% | 0% | 4% | – | – | – | 4.1 | 0% (0/0) | – | 7/0%/14% | 19/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Volunteer | MIXED | 26 | 12% | 0% | 4% | – | – | – | 5.6 | 0% (0/0) | – | 2/0%/0% | 24/0%/4% |
| trade:P4: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 26 | 12% | 0% | 4% | – | – | – | 10.9 | 0% (0/0) | – | 6/0%/17% | 20/0%/0% |
| trade:P3: Stunt Double ↔ P1: Loyalists | MIXED | 26 | 15% | 0% | 4% | – | – | – | 7.4 | 0% (0/0) | – | 1/0%/0% | 25/0%/4% |
| trade:P4: Roadie ↔ P1: Deprogrammers | MIXED | 26 | 15% | 0% | 4% | – | – | – | 7.7 | 0% (0/0) | – | 12/0%/0% | 14/0%/7% |
| choose member:P4's Alchemists (5) | MIXED | 26 | 42% | 0% | 4% | – | – | – | 9.2 | 18% (0/2) | – | 3/0%/33% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Gardener | MIXED | 27 | 26% | 4% | 4% | 0% | 0% | 0% | 6.6 | 29% (1/1) | – | 6/0%/0% | 21/5%/5% |
| trade:P1: Deprogrammers ↔ P4: Accomplice | MIXED | 27 | 15% | 4% | 4% | 0% | 0% | 0% | 10.0 | 25% (1/0) | – | 11/9%/9% | 16/0%/0% |
| trade:P1: Line Cutters ↔ P2: Volunteer | MIXED | 27 | 7% | 4% | 4% | 0% | 0% | 0% | 7.1 | 0% (0/0) | – | 8/0%/0% | 19/5%/5% |
| trade:P3: Deprogrammers ↔ P4: Triplets | MIXED | 27 | 4% | 4% | 4% | 0% | 0% | 0% | – | 100% (1/0) | – | 5/0%/0% | 22/5%/5% |
| trade:P1: Volunteer ↔ P3: Line Cutters | MIXED | 27 | 11% | 0% | 4% | – | – | – | 6.0 | 0% (0/0) | – | 9/0%/11% | 18/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Deprogrammers | MIXED | 28 | 14% | 4% | 4% | 100% | 0% | 0% | 10.1 | 0% (0/0) | – | 11/0%/0% | 17/6%/6% |
| trade:P1: Volunteer ↔ P3: Deprogrammers | MIXED | 28 | 7% | 4% | 4% | 0% | 0% | 0% | 1.3 | 100% (1/1) | – | 12/0%/8% | 16/6%/0% |
| trade:P4: Deprogrammers ↔ P1: Triplets | MIXED | 28 | 14% | 0% | 4% | – | – | – | 10.2 | 0% (0/0) | – | 15/0%/0% | 13/0%/8% |
| trade:P4: Snobs ↔ Shop: Old Maid | MIXED | 29 | 3% | 3% | 3% | 0% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 28/4%/4% |
| trade:P1: Roadie ↔ P3: Busker | MIXED | 29 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 13/8%/8% | 16/0%/0% |
| trade:P2: Accomplice ↔ Shop: Triplets | MIXED | 29 | 7% | 3% | 3% | 0% | 0% | 0% | 39.6 | 0% (0/0) | – | 13/0%/0% | 16/6%/6% |
| trade:P3: Deprogrammers ↔ P4: Recruit Bonus | MIXED | 29 | 10% | 3% | 3% | 0% | 0% | 0% | 16.4 | 67% (1/1) | – | 6/17%/17% | 23/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Scouts | MIXED | 29 | 10% | 0% | 3% | – | – | – | 6.2 | 0% (0/0) | – | 7/0%/0% | 22/0%/5% |
| trade:P2: Muse ↔ P3: Deprogrammers | MIXED | 29 | 14% | 0% | 3% | – | – | – | 17.5 | 0% (0/0) | – | 5/0%/0% | 24/0%/4% |
| trade:P1: Panel ↔ Shop: Old Maid | MIXED | 30 | 10% | 7% | 3% | 0% | 0% | 0% | 1.9 | 67% (2/0) | – | 12/8%/8% | 18/6%/0% |
| trade:P1: Dabblers ↔ P4: Triplets | MIXED | 30 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/25% | 26/0%/0% |
| trade:P1: Loyalists ↔ P4: Recruit Bonus | MIXED | 30 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 1/100%/100% | 29/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Roadie | MIXED | 30 | 13% | 3% | 3% | 0% | 0% | 0% | 13.2 | 25% (1/0) | – | 13/0%/0% | 17/6%/6% |
| trade:P4: Line Cutters ↔ P3: Volunteer | MIXED | 30 | 10% | 0% | 3% | – | – | – | 19.9 | 0% (0/0) | – | 9/0%/11% | 21/0%/0% |
| trade:P1: Drifters ↔ P3: Volunteer | MIXED | 30 | 13% | 0% | 3% | – | – | – | 16.5 | 25% (0/1) | – | 9/0%/11% | 21/0%/0% |
| trade:P2: Loyalists ↔ P3: Party Crasher | MIXED | 31 | 16% | 10% | 3% | 0% | 0% | 0% | 12.2 | 60% (3/0) | – | 2/50%/50% | 29/7%/0% |
| trade:P1: Deprogrammers ↔ P2: Scouts | MIXED | 31 | 13% | 6% | 3% | 0% | 0% | 0% | 10.6 | 50% (2/0) | – | 17/12%/6% | 14/0%/0% |
| trade:P2: Scouts ↔ P3: Deprogrammers | MIXED | 31 | 6% | 3% | 3% | 0% | 0% | 0% | 15.6 | 50% (1/0) | – | 8/0%/0% | 23/4%/4% |
| trade:P1: Connoisseurs ↔ P4: Deprogrammers | MIXED | 31 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 9/11%/11% | 22/0%/0% |
| trade:P4: Line Cutters ↔ P2: Volunteer | MIXED | 31 | 6% | 3% | 3% | 0% | 0% | 0% | 3.7 | 0% (0/0) | – | 6/0%/0% | 25/4%/4% |
| trade:P1: Triplets ↔ P3: Deprogrammers | MIXED | 31 | 6% | 3% | 3% | 0% | 0% | 0% | 1.6 | 50% (1/0) | – | 5/0%/0% | 26/4%/4% |
| trade:P1: Triplets ↔ P4: Deprogrammers | MIXED | 31 | 16% | 0% | 3% | – | – | – | 12.5 | 0% (0/0) | – | 15/0%/0% | 16/0%/6% |
| trade:P1: Deprogrammers ↔ P4: Scouts | MIXED | 32 | 13% | 3% | 3% | 0% | 0% | 0% | 11.5 | 25% (1/0) | – | 10/10%/10% | 22/0%/0% |
| trade:P1: Dabblers ↔ P3: Volunteer | MIXED | 32 | 19% | 0% | 3% | – | – | – | 9.5 | 33% (0/2) | – | 7/0%/0% | 25/0%/4% |
| trade:P2: Deprogrammers ↔ P1: Roadie | MIXED | 34 | 12% | 0% | 3% | – | – | – | 16.3 | 0% (0/0) | – | 22/0%/5% | 12/0%/0% |
| trade:P1: Scouts ↔ P2: Deprogrammers | MIXED | 35 | 20% | 0% | 3% | – | – | – | 14.6 | 0% (0/0) | – | 9/0%/0% | 26/0%/4% |
| trade:P4: Party Crasher ↔ P3: Deprogrammers | MIXED | 35 | 11% | 0% | 3% | – | – | – | 11.8 | 0% (0/0) | – | 11/0%/0% | 24/0%/4% |
| trade:P3: Deprogrammers ↔ P2: Accomplice | MIXED | 37 | 11% | 0% | 3% | – | – | – | 6.7 | 0% (0/0) | – | 11/0%/0% | 26/0%/4% |
| trade:P1: Line Cutters ↔ P3: Volunteer | MIXED | 38 | 26% | 8% | 3% | 33% | 0% | 0% | 13.2 | 20% (2/0) | – | 12/8%/0% | 26/8%/4% |
| trade:P4: Dabblers ↔ P3: Volunteer | MIXED | 38 | 18% | 3% | 3% | 0% | 0% | 0% | 9.3 | 14% (1/0) | – | 14/0%/0% | 24/4%/4% |
| trade:P1: Roadie ↔ P2: Deprogrammers | MIXED | 38 | 11% | 3% | 3% | 0% | 0% | 0% | 21.6 | 50% (1/1) | – | 24/4%/4% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Deprogrammers | MIXED | 39 | 10% | 3% | 3% | 0% | 0% | 0% | 22.9 | 25% (1/0) | – | 19/5%/5% | 20/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Triplets | MIXED | 39 | 13% | 3% | 3% | 0% | 0% | 0% | 7.4 | 20% (0/1) | – | 20/0%/0% | 19/5%/5% |
| trade:P1: Roadie ↔ P4: Deprogrammers | MIXED | 40 | 10% | 3% | 3% | 0% | 0% | 0% | 26.5 | 25% (1/0) | – | 14/0%/0% | 26/4%/4% |
| trade:P4: Loyalists ↔ Shop: Old Maid | MIXED + MISJUDGED | 42 | 19% | 5% | 2% | 50% | 0% | 0% | 9.5 | 63% (1/4) | – | 1/0%/0% | 41/5%/2% |
| trade:P2: Deprogrammers ↔ P3: Line Cutters | MIXED | 44 | 11% | 0% | 2% | – | – | – | 18.1 | 0% (0/0) | – | 17/0%/0% | 27/0%/4% |
| trade:P2: Accomplice ↔ P3: Deprogrammers | MIXED | 44 | 18% | 0% | 2% | – | – | – | 10.7 | 0% (0/0) | – | 13/0%/0% | 31/0%/3% |
| trade:P1: Deprogrammers ↔ P3: Line Cutters | MIXED | 48 | 13% | 2% | 2% | 0% | 0% | 0% | 9.4 | 33% (1/1) | – | 12/8%/8% | 36/0%/0% |
| trade:P1: Con Men ↔ Shop: Old Maid | MIXED | 50 | 12% | 6% | 2% | 33% | 0% | 0% | 31.3 | 50% (3/0) | – | 8/13%/0% | 42/5%/2% |
| trade:P1: Dabblers ↔ P2: Deprogrammers | MIXED | 50 | 10% | 0% | 2% | – | – | – | 10.2 | 0% (0/0) | – | 25/0%/0% | 25/0%/4% |
| trade:P1: Dabblers ↔ P4: Volunteer | MIXED | 52 | 12% | 2% | 2% | 100% | 0% | 0% | 6.0 | 50% (1/2) | – | 17/0%/0% | 35/3%/3% |
| choose member:P4's Agents (3) | MIXED | 52 | 12% | 0% | 2% | – | – | – | 9.2 | 0% (0/0) | – | 5/0%/0% | 47/0%/2% |
| trade:P3: Line Cutters ↔ P1: Volunteer | MIXED | 57 | 12% | 2% | 2% | 0% | 0% | 0% | 19.6 | 29% (1/1) | – | 28/4%/4% | 29/0%/0% |
| trade:P2: Line Cutters ↔ P1: Volunteer | MIXED | 57 | 12% | 0% | 2% | – | – | – | 9.0 | 14% (0/1) | – | 20/0%/0% | 37/0%/3% |
| trade:P1: Deprogrammers ↔ P4: Volunteer | MIXED + MISJUDGED | 58 | 14% | 7% | 2% | 25% | 0% | 25% | 5.0 | 50% (2/2) | – | 25/8%/0% | 33/6%/3% |
| trade:P2: Deprogrammers ↔ P3: Recruit Bonus | MIXED | 61 | 11% | 0% | 2% | – | – | – | 16.7 | 14% (0/1) | – | 26/0%/0% | 35/0%/3% |
| trade:P4: Con Men ↔ Shop: Old Maid | MIXED + MISJUDGED | 70 | 14% | 6% | 1% | 25% | 0% | 0% | 19.9 | 60% (4/2) | – | 11/9%/0% | 59/5%/2% |
| trade:P1: Deprogrammers ↔ Shop: Alchemists | MIXED | 26 | 8% | 8% | 0% | 100% | 0% | 0% | – | 100% (2/0) | – | 10/20%/0% | 16/0%/0% |
| trade:P2: Cutpurse ↔ P4: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 9/0%/0% |
| trade:P4: Accomplice ↔ P1: Line Cutters | MIXED | 15 | 13% | 7% | 0% | 0% | 0% | 0% | 23.7 | 50% (1/0) | – | 9/0%/0% | 6/17%/0% |
| trade:P4: Busker ↔ Shop: Cashier | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P3: Alchemists ↔ P4: Busker | MIXED | 15 | 27% | 7% | 0% | 0% | 0% | 0% | 28.2 | 25% (1/0) | – | 3/0%/0% | 12/8%/0% |
| trade:P1: Anarchist ↔ Shop: Patroness | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 7.0 | 0% (0/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P1: Shift Crew ↔ P3: Scouts | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 2.1 | 0% (0/0) | – | 3/0%/0% | 12/8%/0% |
| trade:P2: Alchemists ↔ P1: Deprogrammers | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P3: Philanthropists ↔ Shop: Old Maid | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 9/0%/0% |
| trade:P4: Loyalists ↔ P1: Recruit Bonus | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | – | 15/7%/0% |
| trade:P2: Roadie ↔ Shop: Muse | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Recruit Bonus | MIXED | 15 | 13% | 7% | 0% | 100% | 0% | 0% | 16.7 | 50% (1/0) | – | 9/11%/0% | 6/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Dabblers | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/20%/0% | 10/0%/0% |
| trade:P4: Martyrs ↔ P3: Line Cutters | MIXED | 15 | 7% | 7% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 4/25%/0% | 11/0%/0% |
| trade:P2: Loyalists ↔ P3: Cutpurse | MIXED | 15 | 27% | 7% | 0% | 100% | 0% | 0% | 9.0 | 0% (0/0) | – | 1/0%/0% | 14/7%/0% |
| trade:P4: Bouncers ↔ Shop: Shift Crew | MIXED | 15 | 7% | 7% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/0%/0% | 12/8%/0% |
| trade:P2: Deprogrammers ↔ P4: Volunteer | MIXED | 47 | 19% | 6% | 0% | 67% | 0% | 0% | 20.3 | 33% (1/2) | – | 13/8%/0% | 34/6%/0% |
| trade:P2: Anarchist ↔ Shop: Hangers-On | MIXED | 16 | 25% | 6% | 0% | 100% | 0% | 0% | 19.4 | 0% (0/0) | – | 4/0%/0% | 12/8%/0% |
| trade:P2: Patriarch ↔ P4: Busker | MIXED | 32 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 5/0%/0% | 27/7%/0% |
| trade:P4: Con Men ↔ Shop: Customs | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 5/20%/0% | 11/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Scouts | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 8/13%/0% | 8/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Dabblers | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 10/0%/0% |
| trade:P4: Roadie ↔ Shop: Doppelganger | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 23.9 | 50% (1/0) | – | 12/8%/0% | 4/0%/0% |
| trade:P2: Triplets ↔ Shop: Loyalists | MIXED | 16 | 19% | 6% | 0% | 100% | 0% | 0% | 11.7 | 33% (0/1) | – | 4/0%/0% | 12/8%/0% |
| trade:P3: Trendsetters ↔ P1: Scouts | MIXED | 16 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P3: Dyer ↔ Shop: Old Maid | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | – | 16/6%/0% |
| trade:P1: Mob ↔ Shop: HR | MIXED | 16 | 19% | 6% | 0% | 0% | 0% | 0% | 9.3 | 0% (0/0) | – | 6/17%/0% | 10/0%/0% |
| trade:P1: Trendsetters ↔ P3: Triplets | MIXED | 16 | 19% | 6% | 0% | 0% | 0% | 0% | 17.9 | 33% (1/0) | – | 2/0%/0% | 14/7%/0% |
| trade:P4: Window Dressers ↔ P2: Scouts | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 9.9 | 50% (1/0) | – | 4/0%/0% | 12/8%/0% |
| trade:P3: Regular ↔ P2: Line Cutters | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 5/0%/0% | 11/9%/0% |
| trade:P2: Shopkeeper ↔ P3: Triplets | MIXED | 16 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 5/20%/0% | 11/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Window Dressers | MIXED | 16 | 13% | 6% | 0% | 100% | 0% | 0% | 4.8 | 50% (0/1) | – | 5/20%/0% | 11/0%/0% |
| trade:P1: Panel ↔ Shop: Gift Wrapper | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 2.7 | 50% (1/0) | – | 4/0%/0% | 12/8%/0% |
| trade:P1: Loyalists ↔ P2: Kingpin | MIXED | 16 | 13% | 6% | 0% | 0% | 0% | 0% | 6.0 | 50% (1/0) | – | 1/0%/0% | 15/7%/0% |
| trade:P1: Critic ↔ P4: Deprogrammers | MIXED | 16 | 19% | 6% | 0% | 100% | 0% | 0% | 9.9 | 67% (1/1) | – | 1/0%/0% | 15/7%/0% |
| trade:P4: Busker ↔ P3: Triplets | MIXED | 16 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 4/25%/0% | 12/0%/0% |
| trade:P2: Cutpurse ↔ P3: Volunteer | MIXED | 17 | 12% | 6% | 0% | 0% | 0% | 0% | 18.6 | 0% (0/0) | – | 8/13%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Loyalists | MIXED | 17 | 12% | 6% | 0% | 0% | 0% | 0% | 16.5 | 50% (1/0) | – | 3/0%/0% | 14/7%/0% |
| trade:P2: Shopkeeper ↔ P4: Triplets | MIXED | 17 | 12% | 6% | 0% | 100% | 0% | 0% | 16.6 | 0% (0/0) | – | 4/25%/0% | 13/0%/0% |
| trade:P2: Trendsetters ↔ P4: Line Cutters | MIXED | 17 | 18% | 6% | 0% | 0% | 0% | 0% | 13.1 | 67% (1/1) | – | 10/0%/0% | 7/14%/0% |
| trade:P3: Deprogrammers ↔ P2: Line Cutters | MIXED | 51 | 14% | 6% | 0% | 100% | 0% | 0% | 13.1 | 29% (1/1) | – | 25/12%/0% | 26/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Deprogrammers | MIXED | 17 | 35% | 6% | 0% | 0% | 0% | 0% | 13.6 | 0% (0/0) | – | 8/0%/0% | 9/11%/0% |
| trade:P1: Shopkeeper ↔ Shop: Raiders | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 7/14%/0% | 10/0%/0% |
| trade:P2: Con Men ↔ Shop: Desperado | MIXED | 17 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 11/0%/0% |
| trade:P3: Roadie ↔ P1: Volunteer | MIXED | 17 | 18% | 6% | 0% | 100% | 100% | 0% | 9.2 | 0% (0/0) | – | 6/17%/0% | 11/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Cutpurse | MIXED | 17 | 24% | 6% | 0% | 0% | 0% | 0% | 13.5 | 25% (1/0) | – | 6/0%/0% | 11/9%/0% |
| trade:P2: Closer ↔ Shop: Old Maid | MIXED | 17 | 6% | 6% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | – | 17/6%/0% |
| trade:P4: Busker ↔ P2: Agents | MIXED | 17 | 12% | 6% | 0% | 0% | 0% | 0% | 37.3 | 0% (0/0) | – | 6/17%/0% | 11/0%/0% |
| trade:P2: Caravan ↔ P3: Con Men | MIXED | 17 | 6% | 6% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 2/0%/0% | 15/7%/0% |
| trade:P1: Mentor & Protégés ↔ P2: Con Men | MIXED | 17 | 12% | 6% | 0% | 100% | 100% | 0% | 8.7 | 0% (0/0) | – | 4/25%/0% | 13/0%/0% |
| trade:P2: Gardener ↔ Shop: Old Maid | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 4/25%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P4: Gardener | MIXED | 18 | 17% | 6% | 0% | 0% | 0% | 0% | 4.2 | 67% (1/1) | – | 7/14%/0% | 11/0%/0% |
| trade:P2: Stunt Double ↔ P4: Trendsetters | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 1/100%/0% | 17/0%/0% |
| trade:P2: Agents ↔ P4: Volunteer | MIXED | 18 | 11% | 6% | 0% | 0% | 0% | 0% | 33.5 | 50% (1/0) | – | 6/17%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Recruit Bonus | MIXED | 18 | 17% | 6% | 0% | 100% | 0% | 0% | 6.9 | 33% (1/0) | – | 6/0%/0% | 12/8%/0% |
| trade:P1: Connoisseurs ↔ Shop: Triplets | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 2/50%/0% | 16/0%/0% |
| trade:P1: Connoisseurs ↔ P4: Regular | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/0%/0% | 17/6%/0% |
| trade:P2: Busker ↔ Shop: Triplets | MIXED | 18 | 6% | 6% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 3/33%/0% | 15/0%/0% |
| trade:P2: Alchemists ↔ P1: Scouts | MIXED | 19 | 11% | 5% | 0% | 0% | 0% | 0% | 8.5 | 0% (0/0) | – | 4/0%/0% | 15/7%/0% |
| trade:P2: Line Cutters ↔ Shop: Volunteer | MIXED | 19 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 7/14%/0% | 12/0%/0% |
| trade:P3: Early Birds ↔ P1: Volunteer | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 9.9 | 0% (0/0) | – | 7/14%/0% | 12/0%/0% |
| trade:P4: Triplets ↔ Shop: Recruit Bonus | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 15.1 | 50% (1/0) | – | 9/11%/0% | 10/0%/0% |
| trade:P2: Con Men ↔ P1: Stunt Double | MIXED | 19 | 11% | 5% | 0% | 100% | 0% | 0% | 44.3 | 50% (1/0) | – | 3/0%/0% | 16/6%/0% |
| trade:P1: Line Cutters ↔ P4: Deprogrammers | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 6/17%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ P1: Roadie | MIXED | 19 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 7/0%/0% | 12/8%/0% |
| trade:P1: Panel ↔ P2: Loyalists | MIXED | 19 | 16% | 5% | 0% | 100% | 0% | 0% | 11.5 | 33% (0/1) | – | 10/0%/0% | 9/11%/0% |
| trade:P3: Shopkeeper ↔ Shop: Recruit Bonus | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 10/0%/0% | 10/10%/0% |
| trade:P4: Shopkeeper ↔ P2: Deprogrammers | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 10/0%/0% | 10/10%/0% |
| trade:P1: Fan Club ↔ P4: Busker | MIXED | 20 | 20% | 5% | 0% | 0% | 0% | 0% | 5.5 | 25% (1/0) | – | 5/0%/0% | 15/7%/0% |
| trade:P2: Alchemists ↔ P4: Party Crasher | MIXED | 20 | 25% | 5% | 0% | 0% | 0% | 0% | 10.8 | 20% (1/0) | – | 4/0%/0% | 16/6%/0% |
| trade:P3: Busker ↔ Shop: Connoisseurs | MIXED | 20 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 8/0%/0% | 12/8%/0% |
| trade:P2: Roadie ↔ P4: Recruit Bonus | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 3/33%/0% | 17/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Martyrs | MIXED | 20 | 10% | 5% | 0% | 100% | 0% | 0% | 2.2 | 50% (0/1) | – | 9/11%/0% | 11/0%/0% |
| trade:P4: Fan Club ↔ P3: Busker | MIXED | 20 | 5% | 5% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 5/0%/0% | 15/7%/0% |
| trade:P2: Volunteer ↔ P3: Deprogrammers | MIXED | 20 | 20% | 5% | 0% | 0% | 0% | 0% | 12.7 | 25% (0/1) | – | 8/0%/0% | 12/8%/0% |
| trade:P1: Stunt Double ↔ P2: Deprogrammers | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 18.7 | 0% (0/0) | – | 3/0%/0% | 18/6%/0% |
| trade:P4: Roadie ↔ P1: Volunteer | MIXED | 21 | 14% | 5% | 0% | 0% | 0% | 0% | 22.3 | 0% (0/0) | – | 8/13%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Desperado | MIXED | 21 | 10% | 5% | 0% | 0% | 0% | 0% | 32.1 | 50% (1/0) | – | 7/0%/0% | 14/7%/0% |
| trade:P1: Connoisseurs ↔ P3: Trendsetters | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 1/0%/0% | 20/5%/0% |
| trade:P2: Agents ↔ P3: Volunteer | MIXED | 21 | 10% | 5% | 0% | 0% | 0% | 0% | 3.5 | 0% (0/0) | – | 5/0%/0% | 16/6%/0% |
| trade:P1: Martyrs ↔ P2: Triplets | MIXED | 21 | 14% | 5% | 0% | 0% | 0% | 0% | 11.0 | 33% (1/0) | – | 7/0%/0% | 14/7%/0% |
| trade:P3: Roadie ↔ P2: Volunteer | MIXED | 21 | 10% | 5% | 0% | 100% | 0% | 0% | 2.6 | 100% (1/1) | – | 3/33%/0% | 18/0%/0% |
| trade:P2: Doppelganger ↔ P3: Busker | MIXED | 21 | 5% | 5% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 2/50%/0% | 19/0%/0% |
| trade:P1: Con Men ↔ P4: Stunt Double | MIXED | 22 | 5% | 5% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 1/100%/0% | 21/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Triplets | MIXED | 22 | 5% | 5% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 7/14%/0% | 15/0%/0% |
| trade:P2: Stunt Double ↔ P1: Recruit Bonus | MIXED | 23 | 4% | 4% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 4/0%/0% | 19/5%/0% |
| trade:P1: Busker ↔ P3: Line Cutters | MIXED | 23 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 9/11%/0% | 14/0%/0% |
| trade:P3: Accomplice ↔ P2: Line Cutters | MIXED | 23 | 13% | 4% | 0% | 0% | 0% | 0% | 10.5 | 33% (0/1) | – | 14/7%/0% | 9/0%/0% |
| trade:P2: Accomplice ↔ P3: Volunteer | MIXED | 23 | 13% | 4% | 0% | 100% | 0% | 0% | 7.7 | 33% (1/0) | – | 7/14%/0% | 16/0%/0% |
| trade:P2: Dabblers ↔ P1: Volunteer | MIXED | 24 | 8% | 4% | 0% | 0% | 0% | 0% | 39.1 | 50% (1/0) | – | 9/11%/0% | 15/0%/0% |
| trade:P1: Patriarch ↔ Shop: Old Maid | MIXED | 48 | 6% | 4% | 0% | 50% | 0% | 0% | 9.6 | 67% (1/1) | – | 2/50%/0% | 46/2%/0% |
| trade:P4: Patriarch ↔ P2: Muse | MIXED | 24 | 4% | 4% | 0% | 0% | 0% | 0% | – | 100% (1/0) | – | 2/0%/0% | 22/5%/0% |
| trade:P2: Alchemists ↔ Shop: Old Maid | MIXED | 49 | 12% | 4% | 0% | 100% | 0% | 0% | 8.1 | 17% (1/0) | – | 7/0%/0% | 42/5%/0% |
| trade:P2: Busker ↔ P4: Scouts | MIXED | 25 | 8% | 4% | 0% | 100% | 0% | 0% | 9.6 | 50% (1/0) | – | 7/14%/0% | 18/0%/0% |
| trade:P3: Busker ↔ P2: Triplets | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 10/10%/0% | 15/0%/0% |
| trade:P1: Busker ↔ P3: Triplets | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ P2: Volunteer | MIXED | 25 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 8/13%/0% | 17/0%/0% |
| trade:P2: Gardener ↔ P4: Scouts | MIXED | 25 | 8% | 4% | 0% | 100% | 0% | 0% | 9.7 | 50% (1/0) | – | 8/0%/0% | 17/6%/0% |
| trade:P4: Patriarch ↔ Shop: Old Maid | MIXED | 52 | 10% | 4% | 0% | 50% | 0% | 0% | 14.7 | 20% (1/0) | – | 12/8%/0% | 40/3%/0% |
| trade:P1: Busker ↔ P4: Deprogrammers | MIXED | 26 | 15% | 4% | 0% | 0% | 0% | 0% | 14.7 | 50% (1/1) | – | 15/7%/0% | 11/0%/0% |
| trade:P4: Party Crasher ↔ P2: Triplets | MIXED | 27 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 21/0%/0% |
| trade:P1: Triplets ↔ P4: Volunteer | MIXED | 27 | 7% | 4% | 0% | 0% | 0% | 0% | 3.8 | 0% (0/0) | – | 5/0%/0% | 22/5%/0% |
| trade:P3: Brokers ↔ Shop: Old Maid | MIXED | 27 | 7% | 4% | 0% | 0% | 0% | 0% | 11.0 | 0% (0/0) | – | 2/0%/0% | 25/4%/0% |
| trade:P4: Roadie ↔ P2: Volunteer | MIXED | 27 | 4% | 4% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 10/10%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Old Maid | MIXED | 56 | 7% | 4% | 0% | 100% | 0% | 0% | 6.8 | 50% (2/0) | – | 10/10%/0% | 46/2%/0% |
| trade:P4: Fan Club ↔ Shop: Old Maid | MIXED | 28 | 11% | 4% | 0% | 0% | 0% | 0% | 4.7 | 0% (0/0) | – | 5/0%/0% | 23/4%/0% |
| trade:P3: Chronicler ↔ Shop: Old Maid | MIXED | 29 | 7% | 3% | 0% | 100% | 0% | 0% | 11.8 | 100% (1/1) | – | 2/0%/0% | 27/4%/0% |
| trade:P2: Alchemists ↔ P3: Triplets | MIXED | 29 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 6/17%/0% | 23/0%/0% |
| trade:P1: Alchemists ↔ P3: Busker | MIXED | 29 | 7% | 3% | 0% | 100% | 0% | 0% | 16.9 | 50% (1/0) | – | 5/0%/0% | 24/4%/0% |
| trade:P1: Recruit Bonus ↔ P3: Agents | MIXED | 29 | 3% | 3% | 0% | 100% | 0% | 0% | – | 0% (0/0) | – | 11/9%/0% | 18/0%/0% |
| trade:P4: Busker ↔ P2: Roadie | MIXED | 29 | 10% | 3% | 0% | 100% | 0% | 0% | 36.5 | 33% (1/0) | – | 13/8%/0% | 16/0%/0% |
| trade:P3: Panel ↔ Shop: Old Maid | MIXED | 30 | 7% | 3% | 0% | 0% | 0% | 0% | 4.2 | 50% (1/0) | – | 2/0%/0% | 28/4%/0% |
| trade:P1: Triplets ↔ P4: Line Cutters | MIXED | 31 | 3% | 3% | 0% | 100% | 0% | 0% | – | 100% (1/0) | – | 11/9%/0% | 20/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Scouts | MIXED | 31 | 3% | 3% | 0% | 100% | 100% | 0% | – | – (0/0) | – | 14/7%/0% | 17/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Line Cutters | MIXED | 33 | 6% | 3% | 0% | 0% | 0% | 0% | 6.5 | 0% (0/0) | – | 16/6%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ P4: Volunteer | MIXED | 33 | 6% | 3% | 0% | 0% | 0% | 0% | 13.0 | 50% (1/0) | – | 10/0%/0% | 23/4%/0% |
| trade:P2: Deprogrammers ↔ P4: Roadie | MIXED | 33 | 9% | 3% | 0% | 0% | 0% | 0% | 16.1 | 33% (1/0) | – | 11/9%/0% | 22/0%/0% |
| trade:P1: Party Crasher ↔ P4: Dabblers | MIXED | 33 | 6% | 3% | 0% | 0% | 0% | 0% | 4.4 | 0% (0/0) | – | 4/0%/0% | 29/3%/0% |
| trade:P2: Busker ↔ P3: Line Cutters | MIXED | 33 | 9% | 3% | 0% | 100% | 0% | 0% | 2.3 | 0% (0/0) | – | 11/9%/0% | 22/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Volunteer | MIXED | 35 | 11% | 3% | 0% | 0% | 0% | 0% | 10.4 | 0% (0/0) | – | 9/11%/0% | 26/0%/0% |
| trade:P1: Loyalists ↔ P3: Agents | MIXED | 35 | 20% | 3% | 0% | 100% | 0% | 0% | 12.4 | 0% (0/0) | – | 3/33%/0% | 32/0%/0% |
| trade:P2: Line Cutters ↔ P4: Volunteer | MIXED | 36 | 14% | 3% | 0% | 0% | 0% | 0% | 14.5 | 20% (1/0) | – | 9/0%/0% | 27/4%/0% |
| trade:P3: Agents ↔ P4: Volunteer | MIXED | 40 | 13% | 3% | 0% | 100% | 0% | 0% | 12.9 | 60% (1/2) | – | 16/6%/0% | 24/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Old Maid | MIXED | 44 | 11% | 2% | 0% | 0% | 0% | 0% | 17.4 | 20% (1/0) | – | 13/0%/0% | 31/3%/0% |
| trade:P2: Line Cutters ↔ P3: Volunteer | MIXED | 47 | 13% | 2% | 0% | 100% | 0% | 0% | 7.0 | 33% (1/1) | – | 20/0%/0% | 27/4%/0% |
| choose member:P2's Doormen (5) | MIXED | 15 | 33% | 0% | 0% | – | – | – | 23.6 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| choose member:P3's Party Crasher (4) | MIXED | 19 | 11% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | – | 19/0%/0% |
| choose member:P1's Window Dressers (4) | MIXED | 20 | 55% | 0% | 0% | – | – | – | 9.9 | 9% (0/1) | – | – | 20/0%/0% |
| choose member:P2's Kingpin (4) | MIXED | 60 | 32% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 3/0%/0% | 57/0%/0% |
| trade:P1: Accomplice ↔ P3: Dabblers | MIXED | 21 | 14% | 0% | 0% | – | – | – | 2.7 | 0% (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Window Dressers ↔ P2: Critic | MIXED | 20 | 15% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Window Dressers ↔ P3: Regular | MIXED | 21 | 14% | 0% | 0% | – | – | – | 15.9 | 33% (0/1) | – | 1/0%/0% | 20/0%/0% |
| trade:P3: Cutpurse ↔ Shop: Old Maid | MIXED | 20 | 10% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 9/0%/0% | 11/0%/0% |
| choose member:P4's Drifters (3) | MIXED | 18 | 11% | 0% | 0% | – | – | – | 18.4 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Party Crasher ↔ P4: Drifters | MIXED | 17 | 12% | 0% | 0% | – | – | – | 16.9 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Alchemists ↔ P4: Triplets | MIXED | 18 | 17% | 0% | 0% | – | – | – | 19.2 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| choose member:P1's Recruit Bonus (3) | MIXED | 27 | 15% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 3/0%/0% | 24/0%/0% |
| choose member:P1's Party Crasher (4) | MIXED | 39 | 13% | 0% | 0% | – | – | – | 4.4 | 0% (0/0) | – | 3/0%/0% | 36/0%/0% |
| trade:P1: Party Crasher ↔ P4: Deprogrammers | MIXED | 19 | 11% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Toastmaster | MIXED | 16 | 13% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P1: Volunteer | MIXED | 21 | 14% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P3: Gardener | MIXED | 22 | 18% | 0% | 0% | – | – | – | 11.9 | 0% (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Gardener ↔ P1: Dabblers | MIXED | 17 | 18% | 0% | 0% | – | – | – | 8.6 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Volunteer | MIXED | 50 | 16% | 0% | 0% | – | – | – | 16.6 | 25% (0/2) | – | 18/0%/0% | 32/0%/0% |
| trade:P1: Party Crasher ↔ P2: Line Cutters | MIXED | 18 | 11% | 0% | 0% | – | – | – | 4.7 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Loyalists | MIXED | 17 | 18% | 0% | 0% | – | – | – | 11.2 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Volunteer ↔ P1: Scouts | MIXED | 19 | 16% | 0% | 0% | – | – | – | 25.5 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ P2: Deprogrammers | MIXED | 22 | 14% | 0% | 0% | – | – | – | 11.7 | 33% (0/1) | – | 1/0%/0% | 21/0%/0% |
| trade:P3: Volunteer ↔ P4: Dabblers | MIXED | 20 | 15% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P3: Toastmaster ↔ P4: Line Cutters | MIXED | 18 | 11% | 0% | 0% | – | – | – | 11.4 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Deprogrammers | MIXED | 36 | 14% | 0% | 0% | – | – | – | 5.2 | 0% (0/0) | – | 15/0%/0% | 21/0%/0% |
| trade:P3: Volunteer ↔ P4: Deprogrammers | MIXED | 28 | 11% | 0% | 0% | – | – | – | 20.6 | 0% (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Brokers | MIXED | 15 | 13% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Old Money | MIXED | 15 | 13% | 0% | 0% | – | – | – | 7.7 | 50% (0/1) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Scouts ↔ P4: Triplets | MIXED | 17 | 12% | 0% | 0% | – | – | – | 13.5 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Bouncers ↔ P2: Deprogrammers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 25.1 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Triplets ↔ P3: Scouts | MIXED | 15 | 13% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| choose member:P2's Desperado (5) | MIXED | 21 | 29% | 0% | 0% | – | – | – | 8.0 | 17% (0/1) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ P2: Accomplice | MIXED | 25 | 12% | 0% | 0% | – | – | – | 9.7 | 33% (0/1) | – | 3/0%/0% | 22/0%/0% |
| trade:P2: Accomplice ↔ P1: Dabblers | MIXED | 20 | 10% | 0% | 0% | – | – | – | 13.6 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Stunt Double ↔ P3: Dabblers | MIXED | 24 | 17% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P4: Critic | MIXED | 16 | 13% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Con Men ↔ Shop: Closer | MIXED | 18 | 17% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Volunteer ↔ P2: Deprogrammers | MIXED | 22 | 14% | 0% | 0% | – | – | – | 9.1 | 67% (0/2) | – | 11/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P1: Volunteer | MIXED | 26 | 15% | 0% | 0% | – | – | – | 5.9 | 25% (0/1) | – | 5/0%/0% | 21/0%/0% |
| trade:P3: Fan Club ↔ Shop: Old Maid | MIXED | 38 | 11% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 3/0%/0% | 35/0%/0% |
| trade:P1: Doppelganger ↔ P2: Deprogrammers | MIXED | 20 | 10% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ P2: Scouts | MIXED | 19 | 16% | 0% | 0% | – | – | – | 9.3 | 33% (0/1) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P3: Dabblers | MIXED | 36 | 11% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 2/0%/0% | 34/0%/0% |
| trade:P2: Volunteer ↔ P3: Dabblers | MIXED | 17 | 18% | 0% | 0% | – | – | – | 6.8 | 33% (0/1) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ Shop: Clockmakers | MIXED | 15 | 13% | 0% | 0% | – | – | – | 11.0 | 0% (0/0) | – | 10/0%/0% | 5/0%/0% |
| choose member:P3's Agents (3) | MIXED | 38 | 18% | 0% | 0% | – | – | – | 16.3 | 14% (0/1) | – | 6/0%/0% | 32/0%/0% |
| choose member:Cutpurse | MIXED | 15 | 40% | 0% | 0% | – | – | – | 10.8 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Gossip | MIXED | 16 | 13% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Line Cutters | MIXED | 29 | 14% | 0% | 0% | – | – | – | 11.7 | 25% (0/1) | – | 12/0%/0% | 17/0%/0% |
| trade:P3: Toastmaster ↔ P4: Deprogrammers | MIXED | 18 | 17% | 0% | 0% | – | – | – | 4.6 | 33% (0/1) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Toastmaster | MIXED | 15 | 20% | 0% | 0% | – | – | – | 4.7 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Martyrs ↔ P4: Shopkeeper | MIXED | 20 | 10% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Recluse ↔ P2: Line Cutters | MIXED | 15 | 13% | 0% | 0% | – | – | – | 9.5 | 50% (0/1) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Martyrs | MIXED | 18 | 11% | 0% | 0% | – | – | – | 22.1 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P3: HR ↔ Shop: Proselytizers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 11.7 | 0% (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P2: Scouts | MIXED | 24 | 13% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Alchemists ↔ P3: Shopkeeper | MIXED | 16 | 13% | 0% | 0% | – | – | – | 16.8 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P4: Roadie | MIXED | 19 | 11% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Martyrs ↔ Shop: Old Maid | MIXED | 15 | 13% | 0% | 0% | – | – | – | 6.9 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Dyer ↔ Shop: Old Maid | MIXED | 15 | 13% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Doppelganger ↔ P4: Deprogrammers | MIXED | 17 | 12% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P1: Shopkeeper ↔ P3: Dabblers | MIXED | 19 | 11% | 0% | 0% | – | – | – | 14.5 | 50% (0/1) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Exporters ↔ Shop: Old Maid | MIXED | 25 | 20% | 0% | 0% | – | – | – | 16.4 | 0% (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P3: Kingpin ↔ P4: Cutpurse | MIXED | 20 | 10% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| choose member:P2's Alchemists (5) | MIXED | 30 | 43% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 3/0%/0% | 27/0%/0% |
| trade:P3: Anarchist ↔ P4: Alchemists | MIXED | 21 | 14% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ Shop: Cashier | MIXED | 27 | 15% | 0% | 0% | – | – | – | 27.1 | 0% (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ P2: Triplets | MIXED | 17 | 12% | 0% | 0% | – | – | – | 16.3 | 100% (0/2) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P1: Cutpurse | MIXED | 21 | 14% | 0% | 0% | – | – | – | 28.4 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| choose member:P3's Sticky Fingers (4) | MIXED | 26 | 12% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 1/0%/0% | 25/0%/0% |
| choose member:P3's Extortionist (7) | MIXED | 26 | 35% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 2/0%/0% | 24/0%/0% |
| trade:P2: Accomplice ↔ P3: Polisher | MIXED | 18 | 11% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Volunteer | MIXED | 25 | 12% | 0% | 0% | – | – | – | 17.5 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Critic | MIXED | 20 | 10% | 0% | 0% | – | – | – | 11.1 | 100% (0/2) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P3: Line Cutters | MIXED | 20 | 25% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Volunteer ↔ Shop: Recruit Bonus | MIXED | 17 | 12% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P1: Scouts ↔ P2: Volunteer | MIXED | 33 | 12% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 15/0%/0% | 18/0%/0% |
| trade:P3: Dabblers ↔ P2: Volunteer | MIXED | 27 | 11% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 14/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Accomplice | MIXED | 39 | 18% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 16/0%/0% | 23/0%/0% |
| trade:P2: Accomplice ↔ P1: Deprogrammers | MIXED | 35 | 11% | 0% | 0% | – | – | – | 12.6 | 0% (0/0) | – | 16/0%/0% | 19/0%/0% |
| choose member:P1's Connoisseurs (4) | MIXED | 20 | 35% | 0% | 0% | – | – | – | 13.5 | 14% (0/1) | – | – | 20/0%/0% |
| choose member:P2's Extortionist (7) | MIXED | 26 | 42% | 0% | 0% | – | – | – | 11.3 | 18% (0/2) | – | – | 26/0%/0% |
| choose member:P4's Bouncers (4) | MIXED | 16 | 25% | 0% | 0% | – | – | – | 9.8 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P1's Stunt Double (5) | MIXED | 25 | 20% | 0% | 0% | – | – | – | 5.7 | 20% (0/1) | – | – | 25/0%/0% |
| trade:P2: Extortionist ↔ Shop: Old Maid | MIXED | 15 | 27% | 0% | 0% | – | – | – | 7.9 | 25% (0/1) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ Shop: Courier | MIXED | 27 | 11% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 8/0%/0% | 19/0%/0% |
| choose member:P2's Cutpurse (3) | MIXED | 42 | 19% | 0% | 0% | – | – | – | 11.8 | 13% (0/1) | – | 6/0%/0% | 36/0%/0% |
| trade:P4: Ringleader ↔ Shop: Old Maid | MIXED | 16 | 13% | 0% | 0% | – | – | – | 22.8 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ P3: Deprogrammers | MIXED | 26 | 15% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 14/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Toastmaster | MIXED | 17 | 12% | 0% | 0% | – | – | – | 26.0 | 50% (0/1) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P4: Trendsetters | MIXED | 19 | 11% | 0% | 0% | – | – | – | 10.3 | 50% (0/1) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Window Dressers ↔ P1: Recruit Bonus | MIXED | 17 | 18% | 0% | 0% | – | – | – | 18.7 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Regular | MIXED | 23 | 13% | 0% | 0% | – | – | – | 17.7 | 0% (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ P2: Triplets | MIXED | 20 | 20% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P4: Scouts | MIXED | 19 | 11% | 0% | 0% | – | – | – | 18.9 | 50% (0/1) | – | – | 19/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Volunteer | MIXED | 38 | 11% | 0% | 0% | – | – | – | 10.9 | 25% (0/1) | – | 10/0%/0% | 28/0%/0% |
| trade:P4: Party Crasher ↔ P1: Roadie | MIXED | 15 | 13% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Trendsetters ↔ P2: Regular | MIXED | 16 | 13% | 0% | 0% | – | – | – | 10.8 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P3: Loyalists ↔ P4: Recruit Bonus | MIXED | 25 | 12% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Loyalists ↔ P1: Party Crasher | MIXED | 16 | 13% | 0% | 0% | – | – | – | 14.0 | 50% (0/1) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Loyalists ↔ P4: Drifters | MIXED | 16 | 19% | 0% | 0% | – | – | – | 4.6 | 33% (0/1) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Snobs ↔ P2: Connoisseurs | MIXED | 18 | 11% | 0% | 0% | – | – | – | 9.8 | 50% (0/1) | – | 1/0%/0% | 17/0%/0% |
| choose member:P2's Gardener (3) | MIXED | 27 | 15% | 0% | 0% | – | – | – | 11.0 | 0% (0/0) | – | 2/0%/0% | 25/0%/0% |
| choose member:P4's Loyalists (5) | MIXED | 20 | 35% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | – | 20/0%/0% |
| trade:P1: Con Men ↔ Shop: Desperado | MIXED | 26 | 12% | 0% | 0% | – | – | – | 17.4 | 0% (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P2: Party Crasher ↔ P3: Deprogrammers | MIXED | 18 | 17% | 0% | 0% | – | – | – | 3.3 | 33% (0/1) | – | 4/0%/0% | 14/0%/0% |
| choose member:P1's Polisher (3) | MIXED | 18 | 22% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Old Maid | MIXED | 28 | 11% | 0% | 0% | – | – | – | 14.9 | 33% (0/1) | – | 10/0%/0% | 18/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Deprogrammers | MIXED | 30 | 10% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P3: Dabblers ↔ P1: Accomplice | MIXED | 17 | 12% | 0% | 0% | – | – | – | 4.4 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Volunteer ↔ P4: Deprogrammers | MIXED | 20 | 25% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Alchemists | MIXED | 25 | 12% | 0% | 0% | – | – | – | 12.1 | 0% (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Shopkeeper | MIXED | 17 | 18% | 0% | 0% | – | – | – | 7.2 | 0% (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Volunteer | MIXED | 16 | 13% | 0% | 0% | – | – | – | 8.9 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Loyalists ↔ Shop: Old Maid | MIXED | 29 | 10% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P1: Busker ↔ P4: Roadie | MIXED | 25 | 12% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Cutpurse ↔ P1: Deprogrammers | MIXED | 16 | 19% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ Shop: Window Shopper | MIXED | 19 | 11% | 0% | 0% | – | – | – | 30.1 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Cashier | MIXED | 20 | 10% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P2: Desperado ↔ Shop: Old Maid | MIXED | 17 | 12% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P1: Polisher ↔ P4: Line Cutters | MIXED | 20 | 15% | 0% | 0% | – | – | – | 18.6 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Cutpurse ↔ P4: Line Cutters | MIXED | 16 | 13% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| choose member:P1's Doppelganger (5) | MIXED | 27 | 11% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P1: Con Men ↔ P2: Loyalists | MIXED | 20 | 10% | 0% | 0% | – | – | – | 14.5 | 0% (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P2: Loyalists ↔ P4: Roadie | MIXED | 21 | 19% | 0% | 0% | – | – | – | 10.5 | 50% (0/2) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ P1: Accomplice | MIXED | 16 | 19% | 0% | 0% | – | – | – | 4.3 | 33% (0/1) | – | 6/0%/0% | 10/0%/0% |
| choose member:P3's Cutpurse (3) | MIXED | 64 | 11% | 0% | 0% | – | – | – | 10.7 | 0% (0/0) | – | 6/0%/0% | 58/0%/0% |
| choose member:P3's Recruit Bonus (3) | MIXED | 29 | 10% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 3/0%/0% | 26/0%/0% |
| trade:P1: Panel ↔ Shop: Closer | MIXED | 22 | 14% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| choose member:P1's Muse (4) | MIXED | 17 | 18% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P2: Loyalists ↔ P3: Shopkeeper | MIXED | 17 | 12% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Trendsetters ↔ P3: Recruit Bonus | MIXED | 16 | 25% | 0% | 0% | – | – | – | 14.9 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Gardener ↔ P4: Deprogrammers | MIXED | 16 | 25% | 0% | 0% | – | – | – | 19.1 | 25% (0/1) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Window Dressers ↔ P3: Line Cutters | MIXED | 16 | 19% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Mentor & Protégés ↔ Shop: Anarchist | MIXED | 19 | 11% | 0% | 0% | – | – | – | 6.8 | 0% (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Alchemists ↔ P2: Scouts | MIXED | 16 | 13% | 0% | 0% | – | – | – | 10.6 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Con Men ↔ Shop: Gift Wrapper | MIXED | 15 | 13% | 0% | 0% | – | – | – | 26.8 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| choose member:P3's Anarchist (7) | MIXED | 32 | 13% | 0% | 0% | – | – | – | 23.2 | 0% (0/0) | – | 2/0%/0% | 30/0%/0% |
| choose member:P2's Muse (4) | MIXED | 18 | 11% | 0% | 0% | – | – | – | 6.8 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Doormen ↔ P3: Recruit Bonus | MIXED | 17 | 12% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Regular | MIXED | 17 | 12% | 0% | 0% | – | – | – | 10.7 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Panel ↔ Shop: Window Shopper | MIXED | 15 | 13% | 0% | 0% | – | – | – | 33.7 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ Shop: Cashier | MIXED | 19 | 16% | 0% | 0% | – | – | – | 19.7 | 0% (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Polisher ↔ P1: Volunteer | MIXED | 20 | 10% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Window Dressers ↔ Shop: Critic | MIXED | 16 | 13% | 0% | 0% | – | – | – | 23.8 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Gardener ↔ P2: Volunteer | MIXED | 19 | 11% | 0% | 0% | – | – | – | 17.4 | 0% (0/0) | – | 15/0%/0% | 4/0%/0% |
| trade:P3: Con Men ↔ Shop: Customs | MIXED | 20 | 10% | 0% | 0% | – | – | – | 4.7 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P3: Line Cutters ↔ P4: Accomplice | MIXED | 15 | 13% | 0% | 0% | – | – | – | 8.9 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| choose member:P4's Extortionist (7) | MIXED | 25 | 28% | 0% | 0% | – | – | – | 9.8 | 0% (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Busker ↔ P3: Roadie | MIXED | 22 | 14% | 0% | 0% | – | – | – | 9.2 | 0% (0/0) | – | 15/0%/0% | 7/0%/0% |
| trade:P1: Alchemists ↔ P2: Muse | MIXED | 16 | 19% | 0% | 0% | – | – | – | 7.8 | 33% (0/1) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Muse ↔ P3: Agents | MIXED | 19 | 11% | 0% | 0% | – | – | – | 27.5 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Alchemists ↔ P3: Agents | MIXED | 15 | 13% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| choose member:P1's Drifters (3) | MIXED | 17 | 24% | 0% | 0% | – | – | – | 16.5 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ Shop: Triplets | MIXED | 16 | 13% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Alchemists ↔ P4: Agents | MIXED | 16 | 19% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Polisher ↔ P3: Deprogrammers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Polisher | MIXED | 15 | 13% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Loyalists ↔ P1: Critic | MIXED | 17 | 18% | 0% | 0% | – | – | – | 23.1 | 33% (0/1) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P4: Agents | MIXED | 20 | 15% | 0% | 0% | – | – | – | 19.3 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P1: Dabblers | MIXED | 16 | 13% | 0% | 0% | – | – | – | 25.5 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Con Men ↔ Shop: Patriarch | MIXED | 24 | 13% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P2: Anarchist ↔ Shop: Hoarder | MIXED | 15 | 13% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ P3: Scouts | MIXED | 30 | 13% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 12/0%/0% | 18/0%/0% |
| trade:P1: Panel ↔ Shop: Tastemaker | MIXED | 18 | 11% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Martyrs ↔ P2: Recruit Bonus | MIXED | 15 | 13% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ P4: Deprogrammers | MIXED | 18 | 17% | 0% | 0% | – | – | – | 26.5 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Agents | MIXED | 15 | 13% | 0% | 0% | – | – | – | 27.1 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Trendsetters ↔ P3: Party Crasher | MIXED | 18 | 17% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| choose member:P3's Gardener (3) | MIXED | 24 | 17% | 0% | 0% | – | – | – | 7.8 | 50% (0/2) | – | 1/0%/0% | 23/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Alchemists | MIXED | 16 | 13% | 0% | 0% | – | – | – | 28.7 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: Scouts ↔ P4: Volunteer | MIXED | 17 | 12% | 0% | 0% | – | – | – | 5.2 | 50% (0/1) | – | 3/0%/0% | 14/0%/0% |
| choose member:P1's Recluse (4) | MIXED | 15 | 20% | 0% | 0% | – | – | – | 20.5 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P2: Volunteer | MIXED | 18 | 17% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Loyalists ↔ P4: Busker | MIXED | 18 | 11% | 0% | 0% | – | – | – | 2.6 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Loyalists | MIXED | 19 | 11% | 0% | 0% | – | – | – | 19.5 | 50% (0/1) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Agents ↔ P3: Volunteer | MIXED | 20 | 10% | 0% | 0% | – | – | – | 33.4 | 50% (0/1) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Loyalists ↔ P1: Roadie | MIXED | 19 | 21% | 0% | 0% | – | – | – | 14.5 | 25% (0/1) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ P3: Busker | MIXED | 23 | 13% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P2: Connoisseurs ↔ P4: Roadie | MIXED | 19 | 11% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Trendsetters ↔ P3: Agents | MIXED | 16 | 13% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Panel ↔ P4: Patriarch | MIXED | 16 | 13% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Dabblers ↔ P4: Triplets | FILLER | 21 | 5% | 5% | 5% | 0% | 0% | 100% | – | 100% (1/0) | – | 6/17%/17% | 15/0%/0% |
| trade:P1: Gardener ↔ P3: Volunteer | FILLER | 22 | 23% | 9% | 5% | 0% | 0% | 50% | 19.9 | 0% (0/0) | – | 7/14%/0% | 15/7%/7% |
| trade:P3: Volunteer ↔ P4: Scouts | FILLER | 22 | 14% | 5% | 5% | 100% | 0% | 100% | 1.7 | 0% (0/0) | – | 7/14%/14% | 15/0%/0% |
| choose member:P2's Double Agent (8) | FILLER | 23 | 39% | 4% | 4% | 0% | 0% | 100% | 10.4 | 11% (1/0) | – | – | 23/4%/4% |
| trade:P1: Trendsetters ↔ P2: Line Cutters | FILLER | 23 | 9% | 4% | 4% | 0% | 0% | 100% | 6.6 | 50% (1/0) | – | 9/11%/11% | 14/0%/0% |
| trade:P1: Busker ↔ P3: Deprogrammers | FILLER | 46 | 11% | 2% | 4% | 0% | 0% | 100% | 9.9 | 40% (1/1) | – | 18/6%/6% | 28/0%/4% |
| trade:P1: Triplets ↔ P2: Deprogrammers | FILLER | 25 | 4% | 4% | 4% | 0% | 0% | 100% | – | 100% (1/0) | – | 5/20%/20% | 20/0%/0% |
| choose member:P1's Deprogrammers (3) | FILLER | 50 | 50% | 4% | 4% | 50% | 0% | 100% | 15.3 | 28% (2/5) | – | 8/0%/13% | 42/5%/2% |
| choose member:P3's Line Cutters (2) | FILLER | 83 | 27% | 4% | 4% | 33% | 0% | 100% | 8.7 | 14% (2/1) | – | 5/0%/0% | 78/4%/4% |
| choose member:P2's Timekeepers (4) | FILLER | 28 | 54% | 18% | 4% | 0% | 0% | 100% | 10.2 | 7% (1/0) | – | 5/0%/0% | 23/22%/4% |
| choose member:P4's Cutpurse (3) | FILLER | 61 | 13% | 5% | 3% | 0% | 0% | 100% | 7.8 | 38% (3/0) | – | 7/0%/0% | 54/6%/4% |
| choose member:P1's Busker (4) | FILLER + MISJUDGED | 31 | 45% | 13% | 3% | 0% | 0% | 100% | 8.5 | 50% (4/3) | – | 3/33%/0% | 28/11%/4% |
| choose member:P1's Con Men (7) | FILLER | 62 | 44% | 10% | 3% | 83% | 0% | 100% | 6.2 | 37% (3/7) | – | 5/40%/20% | 57/7%/2% |
| choose member:P1's Line Cutters (2) | FILLER | 62 | 37% | 3% | 3% | 0% | 0% | 100% | 12.7 | 0% (0/0) | – | 11/0%/0% | 51/4%/4% |
| trade:P3: Roadie ↔ P4: Agents | FILLER | 31 | 3% | 3% | 3% | 0% | 0% | 100% | – | 0% (0/0) | – | 5/20%/20% | 26/0%/0% |
| choose member:P4's Double Agent (8) | FILLER | 32 | 34% | 16% | 3% | 40% | 0% | 100% | 13.6 | 36% (4/0) | – | – | 32/16%/3% |
| choose member:P2's Dabblers (3) | FILLER | 66 | 23% | 6% | 3% | 0% | 0% | 100% | 9.8 | 20% (3/0) | – | 5/0%/20% | 61/7%/2% |
| choose member:P3's Dabblers (3) | FILLER | 34 | 26% | 6% | 3% | 0% | 0% | 100% | 7.0 | 22% (2/0) | – | 5/0%/0% | 29/7%/3% |
| choose member:P2's Grifter (8) | FILLER | 37 | 38% | 8% | 3% | 67% | 0% | 100% | 13.7 | 14% (1/1) | – | 3/0%/0% | 34/9%/3% |
| choose member:P2's Recruit Bonus (3) | FILLER | 37 | 14% | 3% | 3% | 100% | 0% | 100% | 13.5 | 20% (1/0) | – | 1/0%/0% | 36/3%/3% |
| choose member:P4's Busker (4) | FILLER | 45 | 36% | 2% | 2% | 100% | 100% | 100% | 13.3 | 7% (0/1) | – | 5/0%/0% | 40/3%/3% |
| choose member:P2's Scouts (3) | FILLER | 47 | 19% | 4% | 2% | 50% | 0% | 100% | 7.5 | 22% (2/0) | – | 5/20%/0% | 42/2%/2% |
| choose member:P1's Accomplice (3) | FILLER | 71 | 11% | 3% | 1% | 50% | 0% | 100% | 6.7 | 25% (2/0) | – | 8/13%/0% | 63/2%/2% |
| choose member:P2's Line Cutters (2) | FILLER | 76 | 22% | 3% | 1% | 50% | 0% | 100% | 11.6 | 12% (2/0) | – | 10/0%/0% | 66/3%/2% |
| choose member:P4's Roadie (3) | FILLER | 22 | 41% | 27% | 0% | 33% | 17% | 100% | 12.5 | 25% (2/0) | – | 4/50%/0% | 18/22%/0% |
| choose member:Deprogrammers | FILLER | 19 | 53% | 26% | 0% | 40% | 0% | 100% | 10.9 | 20% (0/2) | – | 5/80%/0% | 14/7%/0% |
| choose member:P3's Chronicler (5) | FILLER | 23 | 30% | 13% | 0% | 33% | 0% | 100% | 15.2 | 29% (2/0) | – | – | 23/13%/0% |
| trade:P1: Accomplice ↔ P4: Cutpurse | FILLER | 17 | 18% | 12% | 0% | 0% | 0% | 50% | 11.8 | 33% (1/0) | – | 7/14%/0% | 10/10%/0% |
| choose member:Dabblers | FILLER | 27 | 63% | 11% | 0% | 33% | 0% | 100% | 8.0 | 29% (3/2) | – | 9/0%/0% | 18/17%/0% |
| choose member:P3's Double Agent (8) | FILLER | 19 | 32% | 11% | 0% | 0% | 0% | 100% | 11.1 | 17% (1/0) | – | – | 19/11%/0% |
| choose member:P3's Roadie (3) | FILLER | 32 | 31% | 9% | 0% | 100% | 67% | 100% | 8.0 | 25% (0/2) | – | 3/33%/0% | 29/7%/0% |
| choose member:P2's Stunt Double (5) | FILLER + MISJUDGED | 33 | 42% | 9% | 0% | 33% | 0% | 100% | 16.0 | 57% (2/6) | – | 2/50%/0% | 31/6%/0% |
| choose member:P2's Shift Crew (4) | FILLER | 24 | 46% | 8% | 0% | 0% | 0% | 100% | 12.0 | 36% (2/2) | – | 3/0%/0% | 21/10%/0% |
| choose member:P3's Stunt Double (5) | FILLER | 26 | 15% | 8% | 0% | 100% | 100% | 100% | 6.0 | 0% (0/0) | – | 1/100%/0% | 25/4%/0% |
| choose member:P1's Kingpin (4) | FILLER | 40 | 45% | 8% | 0% | 0% | 0% | 100% | 13.2 | 39% (3/4) | – | 5/0%/0% | 35/9%/0% |
| choose member:P3's Brokers (5) | FILLER | 15 | 33% | 7% | 0% | 100% | 0% | 100% | 9.8 | 40% (1/1) | – | 1/0%/0% | 14/7%/0% |
| choose member:P3's Grifter (8) | FILLER | 30 | 20% | 7% | 0% | 100% | 0% | 100% | 16.7 | 17% (1/0) | – | – | 30/7%/0% |
| trade:P1: Shopkeeper ↔ P4: Party Crasher | FILLER | 15 | 7% | 7% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 6/17%/0% | 9/0%/0% |
| trade:P1: Cutpurse ↔ Shop: Dabblers | FILLER | 15 | 7% | 7% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 7/14%/0% | 8/0%/0% |
| trade:P1: Busker ↔ P3: Agents | FILLER | 16 | 6% | 6% | 0% | 0% | 0% | 100% | – | 0% (0/0) | – | 5/20%/0% | 11/0%/0% |
| choose member:P1's Extortionist (7) | FILLER | 16 | 31% | 6% | 0% | 0% | 0% | 100% | 17.7 | 20% (1/0) | – | 1/0%/0% | 15/7%/0% |
| trade:P4: Drifters ↔ P3: Line Cutters | FILLER | 16 | 6% | 6% | 0% | 100% | 0% | 100% | – | 0% (0/0) | – | 4/25%/0% | 12/0%/0% |
| choose member:P1's Double Agent (8) | FILLER | 16 | 25% | 6% | 0% | 0% | 0% | 100% | 8.1 | 25% (1/0) | – | – | 16/6%/0% |
| trade:P2: Gardener ↔ P4: Volunteer | FILLER | 17 | 12% | 6% | 0% | 100% | 0% | 100% | 16.4 | 50% (1/0) | – | 11/9%/0% | 6/0%/0% |
| trade:P4: Con Men ↔ Shop: Snobs | FILLER | 18 | 6% | 6% | 0% | 0% | 0% | 100% | – | 100% (1/0) | – | 4/25%/0% | 14/0%/0% |
| choose member:P1's Alchemists (5) | FILLER | 38 | 42% | 5% | 0% | 0% | 0% | 100% | 15.5 | 13% (1/1) | – | 3/0%/0% | 35/6%/0% |
| choose member:P2's Toastmaster (3) | FILLER | 19 | 21% | 5% | 0% | 0% | 0% | 100% | 22.5 | 25% (1/0) | – | 4/25%/0% | 15/0%/0% |
| choose member:P4's Party Crasher (4) | FILLER | 38 | 21% | 5% | 0% | 0% | 0% | 100% | 17.0 | 25% (2/0) | – | 2/0%/0% | 36/6%/0% |
| choose member:P3's Bouncers (4) | FILLER | 19 | 47% | 5% | 0% | 0% | 0% | 100% | 8.1 | 11% (1/0) | – | 2/0%/0% | 17/6%/0% |
| trade:P4: Busker ↔ P3: Line Cutters | FILLER | 19 | 5% | 5% | 0% | 100% | 0% | 100% | – | 100% (1/0) | – | 11/9%/0% | 8/0%/0% |
| choose member:P3's Muse (4) | FILLER | 20 | 25% | 5% | 0% | 100% | 0% | 100% | 16.2 | 20% (1/0) | – | 2/0%/0% | 18/6%/0% |
| choose member:P1's Scouts (3) | FILLER | 42 | 17% | 5% | 0% | 0% | 0% | 100% | 14.0 | 29% (2/0) | – | 3/0%/0% | 39/5%/0% |
| choose member:P4's Triplets (3) | FILLER | 21 | 10% | 5% | 0% | 0% | 0% | 100% | 7.7 | 50% (1/0) | – | 2/0%/0% | 19/5%/0% |
| choose member:Agents | FILLER | 21 | 38% | 5% | 0% | 0% | 0% | 100% | 14.9 | 13% (1/0) | – | 10/10%/0% | 11/0%/0% |
| trade:P2: Accomplice ↔ P4: Line Cutters | FILLER | 23 | 9% | 4% | 0% | 100% | 0% | 100% | 13.8 | 50% (1/0) | – | 12/8%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Cutpurse | FILLER | 23 | 9% | 4% | 0% | 0% | 0% | 100% | 1.0 | 50% (1/0) | – | 6/17%/0% | 17/0%/0% |
| trade:P3: Busker ↔ P1: Deprogrammers | FILLER | 26 | 8% | 4% | 0% | 0% | 0% | 100% | 7.5 | 0% (0/0) | – | 19/5%/0% | 7/0%/0% |
| choose member:P4's Dabblers (3) | FILLER | 34 | 26% | 3% | 0% | 100% | 0% | 100% | 15.6 | 0% (0/0) | – | 4/25%/0% | 30/0%/0% |
| choose member:P2's Triplets (3) | FILLER | 35 | 11% | 3% | 0% | 100% | 0% | 100% | 23.3 | 25% (1/0) | – | 7/0%/0% | 28/4%/0% |
| choose member:P2's Party Crasher (4) | FILLER | 37 | 16% | 3% | 0% | 100% | 0% | 100% | 12.4 | 0% (0/0) | – | 5/20%/0% | 32/0%/0% |
| choose member:P3's Deprogrammers (3) | FILLER | 43 | 40% | 2% | 0% | 0% | 0% | 100% | 17.8 | 0% (0/0) | – | 3/33%/0% | 40/0%/0% |
| choose member:P3's Scouts (3) | FILLER | 58 | 14% | 2% | 0% | 0% | 0% | 100% | 12.1 | 13% (1/0) | – | 3/0%/0% | 55/2%/0% |
| trade:P2: Dabblers ↔ P4: Polisher | DEAD | 24 | 8% | 0% | 8% | – | – | – | 1.3 | 0% (0/0) | – | 9/0%/22% | 15/0%/0% |
| trade:P4: Triplets ↔ P1: Deprogrammers | DEAD | 27 | 7% | 0% | 7% | – | – | – | 0.0 | 0% (0/0) | – | 12/0%/17% | 15/0%/0% |
| trade:P2: Anarchist ↔ Shop: Extra Hand | DEAD | 15 | 7% | 0% | 7% | – | – | – | 1.4 | 0% (0/0) | – | 6/0%/17% | 9/0%/0% |
| trade:P3: Panel ↔ Shop: Harmonist | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.1 | 0% (0/0) | – | – | 15/0%/7% |
| trade:P2: Alchemists ↔ P3: Roadie | DEAD | 15 | 7% | 0% | 7% | – | – | – | -1.4 | 0% (0/0) | – | 5/0%/0% | 10/0%/10% |
| trade:P1: Deprogrammers ↔ P2: Gardener | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.2 | 0% (0/0) | – | 8/0%/0% | 7/0%/14% |
| trade:P2: Gardener ↔ P1: Deprogrammers | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.3 | 0% (0/0) | – | 8/0%/0% | 7/0%/14% |
| trade:P1: Panel ↔ Shop: Customs | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.1 | 0% (0/0) | – | 3/0%/0% | 12/0%/8% |
| trade:P4: Gardener ↔ P2: Dabblers | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.0 | 0% (0/0) | – | 7/0%/0% | 8/0%/13% |
| trade:P4: Bouncers ↔ P3: Line Cutters | DEAD | 15 | 7% | 0% | 7% | – | – | – | 0.0 | 0% (0/0) | – | 6/0%/17% | 9/0%/0% |
| trade:P4: Roadie ↔ P3: Deprogrammers | DEAD | 31 | 10% | 0% | 6% | – | – | – | 0.9 | 0% (0/0) | – | 12/0%/8% | 19/0%/5% |
| trade:P2: Critic ↔ P4: Line Cutters | DEAD | 16 | 6% | 0% | 6% | – | – | – | 1.0 | 0% (0/0) | – | 4/0%/0% | 12/0%/8% |
| trade:P4: Patriarch ↔ P3: Party Crasher | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 1/0%/0% | 15/0%/7% |
| trade:P3: Regular ↔ P2: Deprogrammers | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/7% |
| trade:P1: Alchemists ↔ P4: Stunt Double | DEAD | 16 | 6% | 0% | 6% | – | – | – | -0.8 | 0% (0/0) | – | – | 16/0%/6% |
| trade:P4: Deprogrammers ↔ P2: Regular | DEAD | 16 | 6% | 0% | 6% | – | – | – | -3.4 | 0% (0/0) | – | 2/0%/0% | 14/0%/7% |
| trade:P2: Busker ↔ P1: Shopkeeper | DEAD | 16 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/25% | 12/0%/0% |
| trade:P2: Loyalists ↔ P4: Critic | DEAD | 16 | 6% | 0% | 6% | – | – | – | 1.0 | 0% (0/0) | – | 5/0%/20% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Polisher | DEAD | 17 | 6% | 0% | 6% | – | – | – | -0.2 | 0% (0/0) | – | 6/0%/0% | 11/0%/9% |
| trade:P4: Polisher ↔ P2: Deprogrammers | DEAD | 17 | 6% | 0% | 6% | – | – | – | -0.2 | 0% (0/0) | – | 6/0%/0% | 11/0%/9% |
| trade:P1: Volunteer ↔ P4: Dabblers | DEAD | 17 | 6% | 0% | 6% | – | – | – | 1.3 | 0% (0/0) | – | 5/0%/20% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Timekeepers | DEAD | 17 | 6% | 0% | 6% | – | – | – | 1.0 | 0% (0/0) | – | 5/0%/20% | 12/0%/0% |
| trade:P2: Regular ↔ P4: Deprogrammers | DEAD | 17 | 6% | 0% | 6% | – | – | – | -3.4 | 0% (0/0) | – | 2/0%/0% | 15/0%/7% |
| trade:P2: Loyalists ↔ Shop: Cashier | DEAD | 17 | 6% | 0% | 6% | – | – | – | 1.1 | 0% (0/0) | – | 5/0%/0% | 12/0%/8% |
| trade:P2: Recruit Bonus ↔ P1: Accomplice | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 6/0%/0% | 11/0%/9% |
| trade:P4: Party Crasher ↔ P1: Accomplice | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.0 | 0% (0/0) | – | 5/0%/20% | 12/0%/0% |
| trade:P1: Alchemists ↔ P2: Recruit Bonus | DEAD | 17 | 6% | 0% | 6% | – | – | – | 1.0 | 0% (0/0) | – | 3/0%/33% | 14/0%/0% |
| trade:P2: Double Agent ↔ Shop: Bodyguards | DEAD | 17 | 6% | 0% | 6% | – | – | – | 0.5 | 0% (0/0) | – | 2/0%/50% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Roadie | DEAD | 35 | 9% | 0% | 6% | – | – | – | 0.8 | 0% (0/0) | – | 14/0%/7% | 21/0%/5% |
| trade:P4: Triplets ↔ P2: Accomplice | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.5 | 0% (0/0) | – | 4/0%/25% | 14/0%/0% |
| trade:P4: Loyalists ↔ P2: Party Crasher | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.2 | 0% (0/0) | – | 3/0%/0% | 15/0%/7% |
| trade:P2: Muse ↔ Shop: Triplets | DEAD | 18 | 6% | 0% | 6% | – | – | – | 1.2 | 100% (0/1) | – | 8/0%/13% | 10/0%/0% |
| trade:P1: Alchemists ↔ P3: Roadie | DEAD | 18 | 6% | 0% | 6% | – | – | – | 1.2 | 0% (0/0) | – | 5/0%/0% | 13/0%/8% |
| trade:P4: Loyalists ↔ P3: Recruit Bonus | DEAD | 18 | 6% | 0% | 6% | – | – | – | 0.5 | 0% (0/0) | – | – | 18/0%/6% |
| trade:P3: Busker ↔ P2: Agents | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 7/0%/14% | 12/0%/0% |
| trade:P1: Triplets ↔ P2: Volunteer | DEAD | 19 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 1/0%/0% | 18/0%/6% |
| trade:P2: Loyalists ↔ P1: Dabblers | DEAD | 19 | 5% | 0% | 5% | – | – | – | 1.0 | 0% (0/0) | – | 4/0%/25% | 15/0%/0% |
| choose member:P3's Critic (3) | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.2 | 0% (0/0) | – | – | 20/0%/5% |
| trade:P4: Accomplice ↔ P3: Deprogrammers | DEAD | 20 | 5% | 0% | 5% | – | – | – | -0.1 | 0% (0/0) | – | 9/0%/0% | 11/0%/9% |
| trade:P1: Doppelganger ↔ P4: Recruit Bonus | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.6 | 0% (0/0) | – | 4/0%/0% | 16/0%/6% |
| trade:P1: Dabblers ↔ P2: Roadie | DEAD | 20 | 5% | 0% | 5% | – | – | – | 1.0 | 0% (0/0) | – | 7/0%/0% | 13/0%/8% |
| trade:P2: Ringleader ↔ Shop: Old Maid | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.8 | 0% (0/0) | – | – | 20/0%/5% |
| trade:P1: Loyalists ↔ P2: Muse | DEAD | 20 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 2/0%/0% | 18/0%/6% |
| trade:P4: Stunt Double ↔ P3: Agents | DEAD | 21 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/25% | 17/0%/0% |
| trade:P3: Dabblers ↔ P1: Deprogrammers | DEAD | 21 | 10% | 0% | 5% | – | – | – | 18.1 | 0% (0/0) | – | 14/0%/7% | 7/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Regular | DEAD | 21 | 10% | 0% | 5% | – | – | – | 7.1 | 0% (0/0) | – | 6/0%/0% | 15/0%/7% |
| trade:P1: Alchemists ↔ P3: Agents | DEAD | 21 | 5% | 0% | 5% | – | – | – | 1.3 | 0% (0/0) | – | 5/0%/0% | 16/0%/6% |
| trade:P1: Loyalists ↔ P2: Stunt Double | DEAD | 21 | 5% | 0% | 5% | – | – | – | 0.5 | 0% (0/0) | – | – | 21/0%/5% |
| trade:P3: Stunt Double ↔ P2: Deprogrammers | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 3/0%/0% | 19/0%/5% |
| trade:P2: Deprogrammers ↔ P1: Triplets | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 5/0%/20% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Desperado | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.4 | 0% (0/0) | – | 5/0%/0% | 17/0%/6% |
| trade:P3: Triplets ↔ P1: Recruit Bonus | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 12/0%/8% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Gardener | DEAD | 22 | 9% | 0% | 5% | – | – | – | 2.6 | 0% (0/0) | – | 4/0%/0% | 18/0%/6% |
| trade:P1: Shopkeeper ↔ P4: Triplets | DEAD | 22 | 5% | 0% | 5% | – | – | – | 0.0 | 0% (0/0) | – | 6/0%/0% | 16/0%/6% |
| trade:P1: Gardener ↔ P3: Deprogrammers | DEAD | 23 | 9% | 0% | 4% | – | – | – | 0.9 | 50% (0/1) | – | 4/0%/0% | 19/0%/5% |
| trade:P3: Deprogrammers ↔ Shop: Alchemists | DEAD | 23 | 4% | 0% | 4% | – | – | – | -0.2 | 0% (0/0) | – | 11/0%/9% | 12/0%/0% |
| trade:P3: Stunt Double ↔ P1: Roadie | DEAD | 23 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 13/0%/8% | 10/0%/0% |
| trade:P1: Martyrs ↔ P2: Deprogrammers | DEAD | 24 | 4% | 0% | 4% | – | – | – | 0.1 | 0% (0/0) | – | 6/0%/0% | 18/0%/6% |
| trade:P4: Dabblers ↔ P2: Recruit Bonus | DEAD | 24 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 6/0%/17% | 18/0%/0% |
| trade:P2: Sticky Fingers ↔ P3: Deprogrammers | DEAD | 24 | 8% | 0% | 4% | – | – | – | 2.5 | 0% (0/0) | – | 7/0%/0% | 17/0%/6% |
| trade:P4: Triplets ↔ P3: Deprogrammers | DEAD | 24 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 5/0%/0% | 19/0%/5% |
| trade:P1: Volunteer ↔ P2: Line Cutters | DEAD | 25 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 11/0%/9% | 14/0%/0% |
| trade:P2: Triplets ↔ P1: Volunteer | DEAD | 25 | 8% | 0% | 4% | – | – | – | 13.1 | 0% (0/0) | – | 7/0%/0% | 18/0%/6% |
| trade:P1: Critic ↔ P4: Volunteer | DEAD | 25 | 8% | 0% | 4% | – | – | – | 7.1 | 0% (0/0) | – | 5/0%/0% | 20/0%/5% |
| trade:P3: Dabblers ↔ P2: Triplets | DEAD | 27 | 4% | 0% | 4% | – | – | – | 1.5 | 0% (0/0) | – | 11/0%/0% | 16/0%/6% |
| trade:P3: Deprogrammers ↔ P1: Triplets | DEAD | 27 | 7% | 0% | 4% | – | – | – | 1.2 | 0% (0/0) | – | 5/0%/0% | 22/0%/5% |
| trade:P4: Triplets ↔ P1: Dabblers | DEAD | 28 | 4% | 0% | 4% | – | – | – | 0.0 | 0% (0/0) | – | 4/0%/25% | 24/0%/0% |
| trade:P2: Muse ↔ P4: Line Cutters | DEAD | 28 | 4% | 0% | 4% | – | – | – | 0.4 | 0% (0/0) | – | 5/0%/0% | 23/0%/4% |
| trade:P4: Accomplice ↔ P2: Dabblers | DEAD | 29 | 7% | 0% | 3% | – | – | – | 7.5 | 0% (0/0) | – | 10/0%/0% | 19/0%/5% |
| trade:P1: Cutpurse ↔ Shop: Triplets | DEAD | 29 | 3% | 0% | 3% | – | – | – | 1.1 | 0% (0/0) | – | 6/0%/0% | 23/0%/4% |
| trade:P2: Scouts ↔ P1: Deprogrammers | DEAD | 29 | 7% | 0% | 3% | – | – | – | 6.0 | 0% (0/0) | – | 17/0%/6% | 12/0%/0% |
| trade:P4: Triplets ↔ P2: Deprogrammers | DEAD | 30 | 7% | 0% | 3% | – | – | – | -1.2 | 0% (0/0) | – | 8/0%/0% | 22/0%/5% |
| trade:P3: Deprogrammers ↔ P2: Scouts | DEAD | 30 | 3% | 0% | 3% | – | – | – | 0.0 | 0% (0/0) | – | 8/0%/0% | 22/0%/5% |
| trade:P3: Scouts ↔ P1: Volunteer | DEAD | 30 | 3% | 0% | 3% | – | – | – | 0.0 | 0% (0/0) | – | 12/0%/8% | 18/0%/0% |
| trade:P1: Line Cutters ↔ P4: Volunteer | DEAD | 31 | 6% | 0% | 3% | – | – | – | 1.4 | 0% (0/0) | – | 8/0%/13% | 23/0%/0% |
| trade:P2: Loyalists ↔ P4: Dabblers | DEAD | 31 | 10% | 0% | 3% | – | – | – | 7.5 | 0% (0/0) | – | 9/0%/0% | 22/0%/5% |
| trade:P2: Deprogrammers ↔ P4: Triplets | DEAD | 33 | 6% | 0% | 3% | – | – | – | 1.7 | 0% (0/0) | – | 8/0%/0% | 25/0%/4% |
| trade:P4: Triplets ↔ P2: Scouts | DEAD | 33 | 3% | 0% | 3% | – | – | – | 0.0 | 0% (0/0) | – | 11/0%/9% | 22/0%/0% |
| trade:P2: Triplets ↔ P1: Deprogrammers | DEAD | 33 | 9% | 0% | 3% | – | – | – | 5.1 | 0% (0/0) | – | 17/0%/0% | 16/0%/6% |
| trade:P3: Deprogrammers ↔ P1: Scouts | DEAD | 33 | 9% | 0% | 3% | – | – | – | 4.3 | 0% (0/0) | – | 13/0%/0% | 20/0%/5% |
| trade:P2: Dabblers ↔ P4: Accomplice | DEAD | 34 | 6% | 3% | 3% | 0% | 0% | 0% | 15.0 | 0% (0/0) | – | 10/0%/0% | 24/4%/4% |
| trade:P2: Loyalists ↔ P4: Scouts | DEAD | 34 | 9% | 3% | 3% | 0% | 0% | 0% | 18.8 | 33% (1/0) | – | 2/0%/0% | 32/3%/3% |
| trade:P4: Deprogrammers ↔ P1: Scouts | DEAD | 34 | 3% | 0% | 3% | – | – | – | 0.0 | 0% (0/0) | – | 9/0%/11% | 25/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 34 | 9% | 0% | 3% | – | – | – | 8.1 | 0% (0/0) | – | 16/0%/6% | 18/0%/0% |
| trade:P2: Scouts ↔ P4: Triplets | DEAD | 35 | 3% | 3% | 3% | 0% | 0% | 0% | – | 0% (0/0) | – | 11/9%/9% | 24/0%/0% |
| trade:P3: Dabblers ↔ P2: Line Cutters | DEAD | 35 | 3% | 3% | 3% | 0% | 0% | 0% | – | 100% (1/0) | – | 11/0%/0% | 24/4%/4% |
| trade:P3: Agents ↔ P4: Deprogrammers | DEAD | 35 | 9% | 0% | 3% | – | – | – | 10.7 | 0% (0/0) | – | 12/0%/0% | 23/0%/4% |
| trade:P1: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 36 | 8% | 3% | 3% | 0% | 0% | 100% | 12.2 | 33% (0/1) | – | 17/6%/6% | 19/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Triplets | DEAD | 36 | 6% | 0% | 3% | – | – | – | 8.3 | 0% (0/0) | – | 11/0%/9% | 25/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Old Maid | DEAD | 38 | 8% | 3% | 3% | 0% | 0% | 0% | 10.7 | 33% (1/0) | – | 6/0%/0% | 32/3%/3% |
| trade:P3: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 38 | 5% | 0% | 3% | – | – | – | 12.2 | 0% (0/0) | – | 18/0%/6% | 20/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Dabblers | DEAD | 38 | 5% | 0% | 3% | – | – | – | 10.1 | 0% (0/0) | – | 10/0%/0% | 28/0%/4% |
| trade:P3: Deprogrammers ↔ P1: Line Cutters | DEAD | 38 | 3% | 0% | 3% | – | – | – | 0.0 | 0% (0/0) | – | 7/0%/0% | 31/0%/3% |
| trade:P3: Busker ↔ P1: Roadie | DEAD | 40 | 5% | 3% | 3% | 100% | 100% | 0% | 0.0 | 0% (0/0) | – | 23/4%/4% | 17/0%/0% |
| trade:P4: Scouts ↔ P3: Deprogrammers | DEAD | 40 | 5% | 0% | 3% | – | – | – | 13.6 | 0% (0/0) | – | 12/0%/0% | 28/0%/4% |
| trade:P4: Scouts ↔ P2: Volunteer | DEAD | 42 | 7% | 2% | 2% | 100% | 0% | 100% | 7.3 | 0% (0/0) | – | 20/5%/5% | 22/0%/0% |
| trade:P4: Triplets ↔ P2: Volunteer | DEAD | 42 | 10% | 0% | 2% | – | – | – | 6.3 | 0% (0/0) | – | 16/0%/0% | 26/0%/4% |
| trade:P3: Deprogrammers ↔ P2: Dabblers | DEAD | 42 | 5% | 0% | 2% | – | – | – | 8.4 | 0% (0/0) | – | 16/0%/0% | 26/0%/4% |
| trade:P3: Line Cutters ↔ P4: Volunteer | DEAD | 43 | 5% | 2% | 2% | 0% | 0% | 0% | 33.5 | 50% (1/0) | – | 12/0%/0% | 31/3%/3% |
| trade:P1: Scouts ↔ P4: Deprogrammers | DEAD | 44 | 7% | 2% | 2% | 0% | 0% | 0% | 9.6 | 0% (0/0) | – | 13/8%/8% | 31/0%/0% |
| choose member:P4's Scouts (3) | DEAD | 45 | 9% | 0% | 2% | – | – | – | 8.9 | 0% (0/0) | – | 7/0%/0% | 38/0%/3% |
| trade:P2: Dabblers ↔ P3: Deprogrammers | DEAD | 46 | 7% | 2% | 2% | 0% | 0% | 0% | 10.5 | 33% (1/0) | – | 17/0%/0% | 29/3%/3% |
| trade:P4: Busker ↔ P2: Line Cutters | DEAD | 46 | 2% | 0% | 2% | – | – | – | 0.0 | 0% (0/0) | – | 15/0%/7% | 31/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Scouts | DEAD | 48 | 6% | 0% | 2% | – | – | – | 10.6 | 0% (0/0) | – | 13/0%/0% | 35/0%/3% |
| trade:P2: Deprogrammers ↔ P4: Line Cutters | DEAD | 54 | 6% | 0% | 2% | – | – | – | 9.4 | 33% (0/1) | – | 15/0%/7% | 39/0%/0% |
| choose member:P4's Accomplice (3) | DEAD | 62 | 10% | 2% | 2% | 100% | 0% | 100% | 12.1 | 17% (1/0) | – | 9/0%/0% | 53/2%/2% |
| trade:P2: Scouts ↔ Shop: Triplets | DEAD | 34 | 6% | 3% | 0% | 100% | 0% | 0% | 32.0 | 50% (1/0) | – | 9/11%/0% | 25/0%/0% |
| trade:P3: Patriarch ↔ Shop: Old Maid | DEAD | 35 | 6% | 3% | 0% | 100% | 0% | 0% | 19.1 | 50% (1/0) | – | 8/13%/0% | 27/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Dabblers | DEAD | 35 | 6% | 3% | 0% | 0% | 0% | 0% | 6.5 | 50% (1/0) | – | 6/0%/0% | 29/3%/0% |
| trade:P1: Deprogrammers ↔ Shop: Triplets | DEAD | 38 | 5% | 3% | 0% | 0% | 0% | 0% | 27.8 | 50% (1/0) | – | 18/0%/0% | 20/5%/0% |
| trade:P3: Deprogrammers ↔ Shop: Cashier | DEAD | 38 | 5% | 3% | 0% | 100% | 0% | 0% | 18.1 | 0% (0/0) | – | 15/7%/0% | 23/0%/0% |
| trade:P3: Busker ↔ P4: Roadie | DEAD | 39 | 3% | 3% | 0% | 100% | 100% | 100% | – | – (0/0) | – | 16/6%/0% | 23/0%/0% |
| trade:P2: Scouts ↔ P1: Volunteer | DEAD | 40 | 3% | 3% | 0% | 0% | 0% | 0% | – | 0% (0/0) | – | 15/7%/0% | 25/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 40 | 5% | 3% | 0% | 100% | 0% | 0% | 3.0 | 50% (1/0) | – | 12/8%/0% | 28/0%/0% |
| trade:P4: Con Men ↔ Shop: Alchemists | DEAD | 41 | 5% | 2% | 0% | 100% | 0% | 0% | 1.9 | 100% (1/1) | – | 11/9%/0% | 30/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Volunteer | DEAD | 42 | 7% | 2% | 0% | 0% | 0% | 0% | 14.0 | 33% (1/0) | – | 11/0%/0% | 31/3%/0% |
| choose member:P3's Accomplice (3) | DEAD | 45 | 4% | 2% | 0% | 0% | 0% | 100% | 7.4 | 50% (1/0) | – | 3/0%/0% | 42/2%/0% |
| trade:P1: Roadie ↔ P3: Volunteer | DEAD | 48 | 4% | 2% | 0% | 100% | 100% | 0% | 32.5 | 0% (0/0) | – | 23/4%/0% | 25/0%/0% |
| trade:P2: Con Men ↔ Shop: Old Maid | DEAD | 49 | 4% | 2% | 0% | 0% | 0% | 0% | 21.1 | 0% (0/0) | – | 10/10%/0% | 39/0%/0% |
| trade:P4: Busker ↔ P2: Deprogrammers | DEAD | 50 | 4% | 2% | 0% | 100% | 0% | 0% | 20.3 | 0% (0/0) | – | 23/0%/0% | 27/4%/0% |
| trade:P1: Loyalists ↔ Shop: Old Maid | DEAD | 54 | 6% | 2% | 0% | 100% | 0% | 0% | 18.0 | 33% (1/0) | – | 4/0%/0% | 50/2%/0% |
| choose member:P1's Cutpurse (3) | DEAD | 68 | 7% | 1% | 0% | 0% | 0% | 100% | 15.2 | 20% (1/0) | – | 6/0%/0% | 62/2%/0% |
| choose member:P2's Accomplice (3) | DEAD | 72 | 7% | 1% | 0% | 100% | 0% | 100% | 4.3 | 20% (1/0) | – | 7/0%/0% | 65/2%/0% |
| trade:P1: Busker ↔ P4: Bouncers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P4: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P2: Party Crasher ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Anarchist ↔ P3: Stunt Double | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Regular ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| pass:Don’t swap | DEAD | 1687 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 760/0%/0% | 927/0%/0% |
| trade:P1: Busker ↔ Shop: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P1: Courier ↔ Shop: Closer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 15.1 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P2: Party Crasher ↔ P3: Accomplice | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.7 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Bouncers ↔ Shop: Closer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Dabblers ↔ Shop: Line Cutters | DEAD | 19 | 5% | 0% | 0% | – | – | – | 19.0 | 0% (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ Shop: Closer | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ Shop: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P1's Toastmaster (3) | DEAD | 20 | 5% | 0% | 0% | – | – | – | 22.6 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| choose member:P2's Critic (3) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P1: Early Birds ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Accomplice ↔ P3: Cutpurse | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Accomplice ↔ P4: Line Cutters | DEAD | 29 | 7% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 4/0%/0% | 25/0%/0% |
| trade:P1: Accomplice ↔ Shop: Old Maid | DEAD | 20 | 5% | 0% | 0% | – | – | – | 26.6 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Window Dressers ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Window Dressers ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P1: Window Dressers ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P3: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Snobs ↔ Shop: Old Maid | DEAD | 37 | 5% | 0% | 0% | – | – | – | 6.2 | 0% (0/0) | – | 7/0%/0% | 30/0%/0% |
| trade:P1: Alchemists ↔ P3: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P3: Polisher | DEAD | 19 | 5% | 0% | 0% | – | – | – | 15.8 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Alchemists ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ Shop: Old Maid | DEAD | 57 | 4% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 8/0%/0% | 49/0%/0% |
| trade:P2: Critic ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Kingpin ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Kingpin ↔ P3: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P2: Kingpin ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Kingpin ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Anarchist ↔ Shop: Old Maid | DEAD | 47 | 2% | 0% | 0% | – | – | – | 22.9 | 0% (0/0) | – | 12/0%/0% | 35/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 47 | 2% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 13/0%/0% | 34/0%/0% |
| trade:P3: Dabblers ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ Shop: Old Maid | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 29/0%/0% |
| trade:P3: Shift Crew ↔ Shop: Courier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Polisher ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Polisher ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 26/0%/0% |
| trade:P3: Scouts ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Gossip | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P4: Con Men ↔ Shop: Courier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Hangers-On | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Philanthropists ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Polisher ↔ P4: Line Cutters | DEAD | 22 | 9% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Accomplice ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Accomplice ↔ P3: Dabblers | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 23/0%/0% |
| trade:P2: Accomplice ↔ P4: Cutpurse | DEAD | 29 | 3% | 0% | 0% | – | – | – | 23.2 | 0% (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P3: Dabblers ↔ Shop: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 17/0%/0% |
| trade:P3: Dabblers ↔ P1: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P3: Dabblers ↔ P2: Accomplice | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P3: Dabblers ↔ P4: Deprogrammers | DEAD | 40 | 3% | 0% | 0% | – | – | – | 25.6 | 0% (0/0) | – | 7/0%/0% | 33/0%/0% |
| trade:P3: Dabblers ↔ P4: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Cutpurse ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Cutpurse ↔ P2: Accomplice | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Scouts | DEAD | 33 | 6% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 10/0%/0% | 23/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Dabblers | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 26/0%/0% |
| trade:P4: Drifters ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Dyer ↔ Shop: Ringleader | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| choose member:P4's Polisher (3) | DEAD | 27 | 4% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P1: Scouts ↔ P2: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P2: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P4: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ P4: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P4: Polisher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P4: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P2: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Party Crasher ↔ P4: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Party Crasher ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Accomplice ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Accomplice ↔ P4: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 5.3 | 0% (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Recruit Bonus | DEAD | 19 | 5% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ Shop: Desperado | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Alchemists ↔ P1: Recruit Bonus | DEAD | 16 | 6% | 0% | 0% | – | – | – | 24.5 | 100% (0/1) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Loyalists ↔ P1: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Loyalists ↔ P2: Deprogrammers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 26.0 | 100% (0/1) | – | – | 20/0%/0% |
| trade:P3: Loyalists ↔ P4: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.4 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P4: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Line Cutters ↔ P2: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 19.4 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Polisher ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Triplets ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| choose member:P3's Volunteer (1) | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 32/0%/0% |
| trade:P2: Grifter ↔ Shop: Anarchist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Dyer ↔ Shop: Tastemaker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Panel ↔ Shop: Desperado | DEAD | 15 | 7% | 0% | 0% | – | – | – | 38.8 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Panel ↔ Shop: Anarchist | DEAD | 23 | 4% | 0% | 0% | – | – | – | 28.7 | 0% (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P1: Party Crasher ↔ P2: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 14.9 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ P4: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Cutpurse ↔ P4: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Polisher ↔ P2: Volunteer | DEAD | 20 | 5% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Toastmaster | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Scouts | DEAD | 47 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 37/0%/0% |
| trade:P3: Recluse ↔ Shop: Martyrs | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Extra Hand | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Scouts ↔ Shop: Toastmaster | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Scouts ↔ P2: Recruit Bonus | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 29/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Stunt Double ↔ P4: Scouts | DEAD | 38 | 3% | 0% | 0% | – | – | – | 31.5 | 0% (0/0) | – | 3/0%/0% | 35/0%/0% |
| trade:P4: Scouts ↔ Shop: Recruit Bonus | DEAD | 27 | 4% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 14/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P2: Stunt Double | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Busker ↔ Shop: Martyrs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P3: Recluse | DEAD | 22 | 5% | 0% | 0% | – | – | – | 9.4 | 100% (0/1) | – | 11/0%/0% | 11/0%/0% |
| trade:P2: Doppelganger ↔ P4: Scouts | DEAD | 24 | 4% | 0% | 0% | – | – | – | 32.3 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Recluse ↔ P2: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Polisher ↔ P3: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P1: Con Men ↔ Shop: Patriarch | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Muse | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 24/0%/0% |
| trade:P2: Busker ↔ Shop: Muse | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 22/0%/0% |
| trade:P2: Busker ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Muse | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Doppelganger ↔ P3: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Toastmaster ↔ P1: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Toastmaster ↔ P1: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Scouts ↔ P1: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Polisher ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Volunteer ↔ P2: Scouts | DEAD | 19 | 5% | 0% | 0% | – | – | – | 4.5 | 100% (0/1) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Philanthropists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Stunt Double ↔ P4: Busker | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 28/0%/0% |
| trade:P2: Doppelganger ↔ P4: Busker | DEAD | 25 | 4% | 0% | 0% | – | – | – | 21.3 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P2: Scouts ↔ Shop: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ P1: Polisher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P2: Scouts ↔ P1: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Scouts ↔ P4: Busker | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P4: Busker ↔ Shop: Patriarch | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ Shop: Muse | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 26/0%/0% |
| trade:P4: Busker ↔ P2: Scouts | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 20/0%/0% |
| trade:P1: Con Men ↔ P2: Patriarch | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Doppelganger ↔ P2: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 25/0%/0% |
| trade:P1: Doppelganger ↔ P4: Busker | DEAD | 18 | 6% | 0% | 0% | – | – | – | 7.2 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Polisher ↔ P3: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Polisher ↔ P4: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Line Cutters | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 30/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Alchemists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P1: Doppelganger ↔ P2: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Doppelganger ↔ P3: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Chronicler ↔ Shop: Alchemists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| trade:P1: Chronicler ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Chronicler ↔ P2: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Chronicler ↔ P3: Busker | DEAD | 35 | 3% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 5/0%/0% | 30/0%/0% |
| trade:P2: Scouts ↔ Shop: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P2: Scouts ↔ P3: Line Cutters | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 31/0%/0% |
| trade:P2: Stunt Double ↔ P3: Busker | DEAD | 28 | 7% | 0% | 0% | – | – | – | 10.3 | 50% (0/1) | – | 4/0%/0% | 24/0%/0% |
| trade:P3: Busker ↔ P1: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Line Cutters ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Muse ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Polisher ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Volunteer ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Triplets | DEAD | 32 | 6% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 9/0%/0% | 23/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Chronicler ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Agents ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Agents ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Scouts ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Stunt Double ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Anarchist ↔ Shop: Exporters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Recluse ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Line Cutters ↔ P4: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Triplets | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P4: Dabblers ↔ P1: Volunteer | DEAD | 23 | 4% | 0% | 0% | – | – | – | 1.5 | 0% (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ P3: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 24/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Recluse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Chronicler ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Stunt Double ↔ P3: Deprogrammers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 2.9 | 100% (0/1) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Triplets | DEAD | 40 | 5% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 21/0%/0% | 19/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Dabblers ↔ P3: Deprogrammers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Line Cutters | DEAD | 35 | 9% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 10/0%/0% | 25/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Dabblers | DEAD | 33 | 6% | 0% | 0% | – | – | – | 8.4 | 0% (0/0) | – | 13/0%/0% | 20/0%/0% |
| trade:P1: Dabblers ↔ P4: Line Cutters | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 32/0%/0% |
| trade:P1: Dabblers ↔ P4: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P4: Deprogrammers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P3: Alchemists ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Gardener ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Alchemists ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Triplets ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ Shop: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Dabblers ↔ P4: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Patriarch ↔ Shop: Go-Between | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Line Cutters ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ Shop: Scouts | DEAD | 24 | 4% | 0% | 0% | – | – | – | 21.8 | 0% (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Caravan ↔ Shop: Harmonist | DEAD | 22 | 9% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Triplets ↔ P4: Scouts | DEAD | 27 | 4% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 4/0%/0% | 23/0%/0% |
| trade:P1: Triplets ↔ Shop: Old Maid | DEAD | 27 | 4% | 0% | 0% | – | – | – | 14.0 | 0% (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P1: Dabblers ↔ P4: Scouts | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 30/0%/0% |
| trade:P1: Dabblers ↔ Shop: Old Maid | DEAD | 27 | 4% | 0% | 0% | – | – | – | 11.0 | 0% (0/0) | – | 4/0%/0% | 23/0%/0% |
| trade:P1: Caravan ↔ Shop: Harmonist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recruit Bonus ↔ Shop: Old Maid | DEAD | 23 | 9% | 0% | 0% | – | – | – | 10.0 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ Shop: Old Maid | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 30/0%/0% |
| trade:P3: Anarchist ↔ P4: Con Men | DEAD | 22 | 5% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P3: Anarchist ↔ Shop: Old Maid | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 34/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Old Maid | DEAD | 36 | 8% | 0% | 0% | – | – | – | 24.2 | 0% (0/0) | – | 15/0%/0% | 21/0%/0% |
| trade:P4: Panel ↔ Shop: Old Maid | DEAD | 39 | 8% | 0% | 0% | – | – | – | 14.7 | 67% (0/2) | – | 5/0%/0% | 34/0%/0% |
| trade:P4: Con Men ↔ Shop: Mentor & Protégés | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Dyer ↔ Shop: Harmonist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Dyer ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Old Maid | DEAD | 37 | 5% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 7/0%/0% | 30/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Scouts ↔ P2: Line Cutters | DEAD | 38 | 3% | 0% | 0% | – | – | – | 12.4 | 0% (0/0) | – | 14/0%/0% | 24/0%/0% |
| trade:P1: Scouts ↔ P3: Polisher | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P2: Line Cutters ↔ P4: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Polisher ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ P2: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ Shop: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Party Crasher ↔ P3: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P4: Patriarch ↔ Shop: Collector | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Patriarch ↔ Shop: Desperado | DEAD | 19 | 5% | 0% | 0% | – | – | – | 26.6 | 0% (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Patriarch ↔ P1: Party Crasher | DEAD | 23 | 4% | 0% | 0% | – | – | – | 18.3 | 100% (0/1) | – | 8/0%/0% | 15/0%/0% |
| trade:P3: Toastmaster ↔ P2: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Patriarch ↔ Shop: Loyalists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Scouts ↔ Shop: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Line Cutters ↔ P2: Deprogrammers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 44.4 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Line Cutters | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 18/0%/0% |
| trade:P2: Cutpurse ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Party Crasher ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 6/0%/0% |
| trade:P3: Polisher ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Volunteer ↔ Shop: Dabblers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Patriarch ↔ P2: Party Crasher | DEAD | 17 | 6% | 0% | 0% | – | – | – | 1.8 | 100% (0/1) | – | 2/0%/0% | 15/0%/0% |
| choose member:P3's Polisher (3) | DEAD | 27 | 4% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 3/0%/0% | 24/0%/0% |
| choose member:P3's Toastmaster (3) | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Loyalists ↔ Shop: Alchemists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Dabblers | DEAD | 42 | 5% | 0% | 0% | – | – | – | 10.2 | 50% (0/1) | – | 13/0%/0% | 29/0%/0% |
| trade:P2: Party Crasher ↔ P4: Line Cutters | DEAD | 30 | 3% | 0% | 0% | – | – | – | 14.9 | 0% (0/0) | – | 6/0%/0% | 24/0%/0% |
| trade:P2: Caravan ↔ Shop: Big Tent | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Drifters ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Polisher ↔ P4: Dabblers | DEAD | 35 | 3% | 0% | 0% | – | – | – | 4.2 | 0% (0/0) | – | 11/0%/0% | 24/0%/0% |
| trade:P4: Patriarch ↔ Shop: Gift Wrapper | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 30/0%/0% |
| trade:P4: Patriarch ↔ Shop: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Patriarch ↔ Shop: Tastemaker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Patriarch ↔ P1: Loyalists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| trade:P4: Dabblers ↔ P2: Deprogrammers | DEAD | 37 | 5% | 0% | 0% | – | – | – | 10.2 | 0% (0/0) | – | 11/0%/0% | 26/0%/0% |
| trade:P4: Dabblers ↔ P3: Polisher | DEAD | 31 | 3% | 0% | 0% | – | – | – | 4.2 | 0% (0/0) | – | 11/0%/0% | 20/0%/0% |
| trade:P4: Con Men ↔ Shop: Gift Wrapper | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 26/0%/0% |
| trade:P4: Con Men ↔ Shop: Tastemaker | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 27/0%/0% |
| trade:P4: Con Men ↔ P1: Loyalists | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 28/0%/0% |
| trade:P1: Loyalists ↔ P3: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P2: Ringleader ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Party Crasher ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Alchemists ↔ P1: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Alchemists ↔ P2: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 23/0%/0% |
| trade:P3: Alchemists ↔ P4: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Con Men ↔ Shop: Shoplifter | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Old Maid | DEAD | 29 | 3% | 0% | 0% | – | – | – | 10.8 | 0% (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Volunteer | DEAD | 24 | 4% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 33 | 9% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 15/0%/0% | 18/0%/0% |
| trade:P2: Loyalists ↔ Shop: Old Maid | DEAD | 50 | 6% | 0% | 0% | – | – | – | 8.5 | 0% (0/0) | – | 16/0%/0% | 34/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Scouts | DEAD | 35 | 6% | 0% | 0% | – | – | – | 9.7 | 50% (0/1) | – | 17/0%/0% | 18/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Drifters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ P3: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P2: Con Men ↔ Shop: Tastemaker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Con Men ↔ P4: Loyalists | DEAD | 26 | 4% | 0% | 0% | – | – | – | 2.8 | 0% (0/0) | – | 3/0%/0% | 23/0%/0% |
| trade:P3: Volunteer ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Volunteer ↔ P2: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Toastmaster ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Old Money | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Scouts | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Line Cutters | DEAD | 36 | 6% | 0% | 0% | – | – | – | 17.7 | 0% (0/0) | – | 17/0%/0% | 19/0%/0% |
| trade:P4: Loyalists ↔ Shop: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P2: Con Men ↔ Shop: Big Tent | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Triplets | DEAD | 30 | 3% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 5/0%/0% | 25/0%/0% |
| trade:P4: Gardener ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Triplets ↔ P2: Recruit Bonus | DEAD | 23 | 4% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Triplets ↔ P2: Line Cutters | DEAD | 40 | 5% | 0% | 0% | – | – | – | 28.1 | 0% (0/0) | – | 8/0%/0% | 32/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Triplets | DEAD | 20 | 5% | 0% | 0% | – | – | – | 7.2 | 0% (0/0) | – | 13/0%/0% | 7/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Party Crasher | DEAD | 17 | 6% | 0% | 0% | – | – | – | 24.1 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P2: Line Cutters ↔ P4: Cutpurse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 34.6 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Volunteer ↔ Shop: Triplets | DEAD | 25 | 4% | 0% | 0% | – | – | – | 15.0 | 0% (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P4: Cutpurse ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Cutpurse ↔ P2: Line Cutters | DEAD | 28 | 7% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P2: Triplets ↔ P4: Accomplice | DEAD | 22 | 5% | 0% | 0% | – | – | – | 15.8 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P3: Volunteer | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P4: Cutpurse ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Accomplice ↔ P2: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Accomplice ↔ P3: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ P2: Dabblers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 4.6 | 0% (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ Shop: Exporters | DEAD | 26 | 4% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Courier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Anarchist | DEAD | 22 | 5% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ P4: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Recluse ↔ P4: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Accomplice | DEAD | 21 | 5% | 0% | 0% | – | – | – | 31.0 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Accomplice ↔ P2: Deprogrammers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 31.0 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Triplets ↔ P2: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Triplets ↔ P3: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 26.3 | 0% (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ Shop: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Accomplice ↔ Shop: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 21.2 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ P3: Line Cutters | DEAD | 65 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 47/0%/0% |
| trade:P2: Dabblers ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Dabblers ↔ P3: Early Birds | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P3: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P2: Party Crasher ↔ P3: Scouts | DEAD | 28 | 4% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P2: Anarchist ↔ Shop: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Cutpurse ↔ P3: Line Cutters | DEAD | 24 | 8% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P4: Accomplice ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P4: Accomplice ↔ P3: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Triplets ↔ P3: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Volunteer ↔ P4: Triplets | DEAD | 21 | 5% | 0% | 0% | – | – | – | 8.8 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Cashier | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 20/0%/0% |
| trade:P4: Scouts ↔ Shop: Cashier | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 13/0%/0% |
| trade:P1: Old Money ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 21.2 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Triplets ↔ Shop: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 27/0%/0% |
| trade:P4: Clockmakers ↔ Shop: Closer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| choose member:P4's Volunteer (1) | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 30/0%/0% |
| trade:P1: Dabblers ↔ Shop: Brokers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P2: Scouts | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 34/0%/0% |
| trade:P1: Dabblers ↔ P4: Early Birds | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Brokers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ P1: Dabblers | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 31/0%/0% |
| trade:P2: Accomplice ↔ P4: Volunteer | DEAD | 22 | 5% | 0% | 0% | – | – | – | 11.9 | 0% (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Volunteer ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Early Birds ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| choose member:P2's Volunteer (1) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P1: Con Men ↔ P4: Patriarch | DEAD | 18 | 6% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | – | 18/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Recluse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Patriarch ↔ Shop: Brokers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Dabblers ↔ Shop: Recruit Bonus | DEAD | 20 | 5% | 0% | 0% | – | – | – | 39.5 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Clockmakers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Scouts ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Accomplice ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Early Birds ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ Shop: Regular | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P1: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ Shop: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 3/0%/0% |
| trade:P3: Agents ↔ P4: Line Cutters | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 22/0%/0% | 18/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Chronicler | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Stunt Double ↔ P3: Dabblers | DEAD | 25 | 4% | 0% | 0% | – | – | – | -2.3 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Stunt Double ↔ P3: Agents | DEAD | 29 | 7% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 5/0%/0% | 24/0%/0% |
| trade:P4: Trendsetters ↔ Shop: Regular | DEAD | 21 | 10% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Trendsetters ↔ P3: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 37.9 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ Shop: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 2/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Regular | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Stunt Double ↔ P3: Agents | DEAD | 16 | 6% | 0% | 0% | – | – | – | 36.2 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Dabblers ↔ P4: Critic | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Critic ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Agents ↔ Shop: Chronicler | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.1 | 100% (0/1) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Panel ↔ Shop: Chronicler | DEAD | 15 | 7% | 0% | 0% | – | – | – | 31.6 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Bouncers ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Agents ↔ Shop: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Agents ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Agents ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Closer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 6.2 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Panel ↔ P3: Con Men | DEAD | 21 | 5% | 0% | 0% | – | – | – | 5.4 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Bouncers ↔ P2: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Early Birds ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Stunt Double ↔ P3: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P2: Agents ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P3: Dabblers ↔ Shop: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Regular | DEAD | 38 | 3% | 0% | 0% | – | – | – | 12.2 | 0% (0/0) | – | 6/0%/0% | 32/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 22/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Critic | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Critic ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Bouncers ↔ P3: Recruit Bonus | DEAD | 18 | 6% | 0% | 0% | – | – | – | 52.6 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Stunt Double ↔ P3: Window Dressers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Volunteer ↔ Shop: Scouts | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Volunteer ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Agents ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Old Maid | DEAD | 31 | 6% | 0% | 0% | – | – | – | 11.7 | 0% (0/0) | – | 5/0%/0% | 26/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Triplets | DEAD | 42 | 10% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 10/0%/0% | 32/0%/0% |
| trade:P2: Bouncers ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Hot Streak | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Shift Crew ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Shift Crew ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Shift Crew ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ Shop: Triplets | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 26/0%/0% |
| trade:P3: Dabblers ↔ P2: Deprogrammers | DEAD | 35 | 3% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 10/0%/0% | 25/0%/0% |
| trade:P3: Dabblers ↔ P4: Regular | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Con Men ↔ Shop: Hot Streak | DEAD | 35 | 6% | 0% | 0% | – | – | – | 24.6 | 0% (0/0) | – | 5/0%/0% | 30/0%/0% |
| trade:P3: Con Men ↔ Shop: Patriarch | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P3: Con Men ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Snobs ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 25/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Hot Streak | DEAD | 21 | 5% | 0% | 0% | – | – | – | 9.5 | 0% (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Triplets | DEAD | 35 | 3% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 7/0%/0% | 28/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 56 | 7% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 25/0%/0% | 31/0%/0% |
| trade:P3: Fan Club ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Fan Club ↔ Shop: Patriarch | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Window Dressers ↔ Shop: Connoisseurs | DEAD | 16 | 6% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Window Dressers ↔ Shop: Old Maid | DEAD | 22 | 5% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P3: Window Dressers ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Window Dressers ↔ P4: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Window Dressers ↔ P4: Critic | DEAD | 20 | 5% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Line Cutters ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Panel ↔ Shop: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Critic ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Critic ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Regular ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Doppelganger ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Doppelganger ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Doormen ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Old Maid | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 37/0%/0% |
| trade:P3: Dabblers ↔ P4: Volunteer | DEAD | 39 | 8% | 0% | 0% | – | – | – | 22.0 | 0% (0/0) | – | 4/0%/0% | 35/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Volunteer | DEAD | 58 | 5% | 0% | 0% | – | – | – | 7.2 | 0% (0/0) | – | 13/0%/0% | 45/0%/0% |
| trade:P3: Regular ↔ P4: Volunteer | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P4: Volunteer ↔ P2: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 34.5 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Volunteer ↔ P3: Recruit Bonus | DEAD | 15 | 7% | 0% | 0% | – | – | – | 11.6 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P4: Early Birds | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 21/0%/0% |
| trade:P4: Early Birds ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Panel ↔ Shop: Anarchist | DEAD | 27 | 4% | 0% | 0% | – | – | – | 38.5 | 0% (0/0) | – | 7/0%/0% | 20/0%/0% |
| trade:P1: Panel ↔ P3: Con Men | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.8 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Fan Club ↔ Shop: Old Maid | DEAD | 49 | 4% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 9/0%/0% | 40/0%/0% |
| trade:P2: Agents ↔ P3: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P2: Bouncers ↔ P3: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P2: Shift Crew ↔ P3: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Patriarch ↔ Shop: Old Maid | DEAD | 38 | 5% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 3/0%/0% | 35/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Timekeepers ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P2: Timekeepers ↔ P3: Recruit Bonus | DEAD | 28 | 4% | 0% | 0% | – | – | – | 8.4 | 0% (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P2: Timekeepers ↔ P4: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Timekeepers ↔ P4: Early Birds | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Scouts ↔ P3: Dabblers | DEAD | 37 | 3% | 0% | 0% | – | – | – | 4.8 | 0% (0/0) | – | 11/0%/0% | 26/0%/0% |
| trade:P2: Scouts ↔ P3: Recruit Bonus | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 31/0%/0% |
| trade:P2: Scouts ↔ P3: Regular | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P2: Scouts ↔ P4: Line Cutters | DEAD | 37 | 3% | 0% | 0% | – | – | – | 15.6 | 0% (0/0) | – | 10/0%/0% | 27/0%/0% |
| trade:P3: Dabblers ↔ P2: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 21/0%/0% |
| trade:P3: Con Men ↔ Shop: Anarchist | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 27/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 25/0%/0% |
| trade:P3: Regular ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Old Maid | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 29/0%/0% |
| trade:P3: Roadie ↔ Shop: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Roadie ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Roadie ↔ P2: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P3: Roadie ↔ P4: Line Cutters | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 31/0%/0% |
| trade:P3: Roadie ↔ P4: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 5.8 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Triplets ↔ P2: Scouts | DEAD | 25 | 4% | 0% | 0% | – | – | – | 29.0 | 0% (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P1: Triplets ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Triplets ↔ P3: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 25/0%/0% |
| trade:P1: Triplets ↔ P3: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ P3: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ Shop: Old Maid | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 24/0%/0% |
| trade:P2: Scouts ↔ P1: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Dabblers ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Triplets | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P3: Window Dressers ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Roadie ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P3: Roadie ↔ P1: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Loyalists ↔ P4: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Loyalists ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Loyalists ↔ Shop: Hot Streak | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Busker | DEAD | 24 | 4% | 0% | 0% | – | – | – | 36.4 | 0% (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P2: Volunteer ↔ P4: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Dabblers ↔ P4: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Busker | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Window Dressers ↔ P4: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Window Dressers ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Stunt Double ↔ P4: Trendsetters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.6 | 0% (0/0) | – | – | 15/0%/0% |
| trade:P3: Stunt Double ↔ P4: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Roadie ↔ P4: Busker | DEAD | 17 | 6% | 0% | 0% | – | – | – | 22.5 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P4: Trendsetters ↔ Shop: Connoisseurs | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Trendsetters ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Busker ↔ Shop: Connoisseurs | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P1: Roadie ↔ Shop: Old Maid | DEAD | 33 | 3% | 0% | 0% | – | – | – | 78.0 | 0% (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P1: Roadie ↔ P2: Recruit Bonus | DEAD | 15 | 7% | 0% | 0% | – | – | – | 24.6 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Roadie ↔ P3: Agents | DEAD | 43 | 2% | 0% | 0% | – | – | – | 20.1 | 0% (0/0) | – | 18/0%/0% | 25/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ Shop: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ Shop: Old Maid | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 26/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Old Maid | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P3: Mentor & Protégés ↔ Shop: Shoplifter | DEAD | 16 | 6% | 0% | 0% | – | – | – | 19.5 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Agents ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Agents ↔ P1: Roadie | DEAD | 38 | 3% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 18/0%/0% | 20/0%/0% |
| trade:P3: Agents ↔ P2: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Fan Club ↔ Shop: Old Maid | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P3: Busker ↔ Shop: Muse | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 17/0%/0% |
| trade:P3: Busker ↔ P2: Line Cutters | DEAD | 42 | 2% | 0% | 0% | – | – | – | 14.1 | 0% (0/0) | – | 17/0%/0% | 25/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Cashier | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 24/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Muse | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Agents ↔ Shop: Cashier | DEAD | 16 | 6% | 0% | 0% | – | – | – | 7.0 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Agents ↔ P2: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P3: Roadie ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P3: Shopkeeper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P3: Agents | DEAD | 37 | 3% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 14/0%/0% | 23/0%/0% |
| trade:P2: Busker ↔ P3: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P2: Kingpin ↔ P3: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Con Men ↔ Shop: Anarchist | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 28/0%/0% |
| trade:P2: Raiders ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Agents ↔ Shop: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Roadie ↔ Shop: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Double Agent ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Agents ↔ Shop: Doppelganger | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.1 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Deprogrammers | DEAD | 28 | 7% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 24 | 8% | 0% | 0% | – | – | – | 11.2 | 0% (0/0) | – | 17/0%/0% | 7/0%/0% |
| trade:P4: Scouts ↔ P1: Triplets | DEAD | 23 | 4% | 0% | 0% | – | – | – | 1.9 | 0% (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Toastmaster ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Scouts ↔ P1: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ P2: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Timekeepers ↔ P1: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Timekeepers ↔ P3: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Line Cutters ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Con Men ↔ Shop: Alchemists | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 32/0%/0% |
| trade:P2: Panel ↔ Shop: Old Maid | DEAD | 35 | 3% | 0% | 0% | – | – | – | 39.4 | 0% (0/0) | – | 4/0%/0% | 31/0%/0% |
| trade:P2: Patriarch ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 44.0 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Panel ↔ Shop: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Shift Crew ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Shift Crew ↔ P4: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Party Crasher ↔ P1: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Party Crasher ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Party Crasher ↔ P1: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Party Crasher ↔ P4: Deprogrammers | DEAD | 27 | 7% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P4: Shopkeeper ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Con Men ↔ Shop: Exporters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P4: Con Men ↔ Shop: Closer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Loyalists | DEAD | 19 | 5% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ P2: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Alchemists ↔ Shop: Old Maid | DEAD | 48 | 6% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 8/0%/0% | 40/0%/0% |
| trade:P4: Alchemists ↔ Shop: Closer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ P1: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Martyrs ↔ P2: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P1: Martyrs ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Martyrs ↔ P3: Deprogrammers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P1: Martyrs ↔ P4: Recluse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Martyrs ↔ P4: Roadie | DEAD | 21 | 10% | 0% | 0% | – | – | – | 12.2 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P3: Deprogrammers | DEAD | 28 | 4% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P4: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Scouts ↔ P4: Roadie | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Agents | DEAD | 20 | 5% | 0% | 0% | – | – | – | 18.9 | 0% (0/0) | – | 19/0%/0% | 1/0%/0% |
| trade:P4: Busker ↔ Shop: Fan Club | DEAD | 15 | 7% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Busker ↔ Shop: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 5/0%/0% |
| trade:P4: Busker ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Recluse ↔ P1: Martyrs | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Recluse ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Roadie ↔ Shop: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P4: Roadie ↔ P2: Line Cutters | DEAD | 29 | 3% | 0% | 0% | – | – | – | 9.3 | 0% (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P4: Roadie ↔ P2: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Line Cutters | DEAD | 26 | 4% | 0% | 0% | – | – | – | 8.9 | 0% (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Deprogrammers | DEAD | 22 | 5% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 8/0%/0% |
| trade:P4: Roadie ↔ P2: Deprogrammers | DEAD | 31 | 6% | 0% | 0% | – | – | – | 4.7 | 0% (0/0) | – | 10/0%/0% | 21/0%/0% |
| trade:P1: Fan Club ↔ Shop: Tastemaker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Fan Club ↔ Shop: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P3: Volunteer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P1: Martyrs ↔ P3: Shopkeeper | DEAD | 20 | 5% | 0% | 0% | – | – | – | 13.3 | 0% (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P3: Gardener ↔ P4: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Martyrs | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.3 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P4: Busker ↔ P3: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Martyrs ↔ Shop: Cashier | DEAD | 21 | 5% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P1: Martyrs ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Fan Club ↔ Shop: Muse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 25.4 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ Shop: Muse | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P1: Alchemists ↔ P2: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P1: Alchemists ↔ P4: Busker | DEAD | 19 | 5% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Stunt Double ↔ P2: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P1: Stunt Double ↔ P4: Roadie | DEAD | 25 | 4% | 0% | 0% | – | – | – | 2.7 | 100% (0/1) | – | 7/0%/0% | 18/0%/0% |
| trade:P2: Scouts ↔ P4: Gardener | DEAD | 25 | 4% | 0% | 0% | – | – | – | 20.0 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Cashier | DEAD | 16 | 6% | 0% | 0% | – | – | – | 12.2 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Drifters ↔ P4: Volunteer | DEAD | 19 | 5% | 0% | 0% | – | – | – | 19.0 | 0% (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Drifters ↔ P4: Gardener | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Con Men ↔ P1: Fan Club | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Con Men ↔ P1: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Con Men ↔ P4: Patriarch | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Doppelganger ↔ Shop: Muse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Exporters ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ Shop: Party Crasher | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 28/0%/0% |
| trade:P4: Recluse ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ Shop: Cashier | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P4: Patriarch ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Patriarch ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Gardener ↔ P2: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Patriarch ↔ Shop: Party Crasher | DEAD | 20 | 5% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | – | 20/0%/0% |
| trade:P1: Patriarch ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Patriarch ↔ P4: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Con Men ↔ P1: Patriarch | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Old Maid | DEAD | 36 | 3% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 9/0%/0% | 27/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P4: Stunt Double ↔ P2: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Stunt Double ↔ P3: Shopkeeper | DEAD | 21 | 5% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Muse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Mentor & Protégés ↔ Shop: Old Maid | DEAD | 16 | 6% | 0% | 0% | – | – | – | 19.0 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Drifters ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Recluse ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Roadie ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Roadie ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Roadie ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Gardener ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Fan Club ↔ Shop: Customs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P2: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P3: Recruit Bonus | DEAD | 29 | 7% | 0% | 0% | – | – | – | 7.5 | 50% (0/1) | – | 3/0%/0% | 26/0%/0% |
| trade:P1: Patriarch ↔ Shop: Customs | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 24/0%/0% |
| trade:P1: Patriarch ↔ P2: Doppelganger | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Patriarch ↔ P2: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Con Men ↔ Shop: Customs | DEAD | 22 | 5% | 0% | 0% | – | – | – | 33.5 | 0% (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P2: Drifters ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Dyer ↔ Shop: Customs | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Old Maid | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 32/0%/0% |
| trade:P2: Doppelganger ↔ P3: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 25/0%/0% |
| trade:P2: Doppelganger ↔ P4: Roadie | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 24/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Muse | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 29/0%/0% |
| trade:P2: Party Crasher ↔ P3: Recruit Bonus | DEAD | 25 | 4% | 0% | 0% | – | – | – | 11.3 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P2: Party Crasher ↔ P4: Busker | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P2: Party Crasher ↔ P4: Roadie | DEAD | 24 | 4% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Cashier | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Line Cutters | DEAD | 38 | 3% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 6/0%/0% | 32/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Roadie | DEAD | 44 | 2% | 0% | 0% | – | – | – | 22.1 | 0% (0/0) | – | 15/0%/0% | 29/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Gardener | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Busker ↔ P2: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ P3: Recruit Bonus | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 29/0%/0% |
| trade:P4: Roadie ↔ P3: Recruit Bonus | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 28/0%/0% |
| trade:P4: Gardener ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Stunt Double ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ Shop: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Alchemists ↔ P4: Deprogrammers | DEAD | 33 | 9% | 0% | 0% | – | – | – | 14.2 | 0% (0/0) | – | 5/0%/0% | 28/0%/0% |
| trade:P1: Con Men ↔ Shop: Big Tent | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Mob ↔ Shop: Wallflower | DEAD | 15 | 7% | 0% | 0% | – | – | – | 31.0 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Drifters ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Recluse ↔ Shop: Cashier | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P2: Recluse ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Recluse ↔ P4: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Recluse ↔ P4: Deprogrammers | DEAD | 26 | 4% | 0% | 0% | – | – | – | 0.1 | 0% (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Deprogrammers | DEAD | 41 | 2% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 11/0%/0% | 30/0%/0% |
| trade:P4: Roadie ↔ Shop: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Cashier | DEAD | 35 | 3% | 0% | 0% | – | – | – | 31.9 | 0% (0/0) | – | 20/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Line Cutters | DEAD | 40 | 8% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 12/0%/0% | 28/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 33 | 3% | 0% | 0% | – | – | – | 1.9 | 0% (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P1: Alchemists ↔ Shop: Raiders | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ P3: Fan Club | DEAD | 19 | 5% | 0% | 0% | – | – | – | 8.0 | 0% (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Muse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Scouts | DEAD | 21 | 5% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Recluse | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Recluse ↔ P1: Shopkeeper | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Fan Club ↔ Shop: Muse | DEAD | 29 | 3% | 0% | 0% | – | – | – | 6.1 | 0% (0/0) | – | 3/0%/0% | 26/0%/0% |
| trade:P3: Fan Club ↔ P4: Stunt Double | DEAD | 15 | 7% | 0% | 0% | – | – | – | 18.2 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Patriarch ↔ Shop: Go-Between | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Old Money ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Old Maid | DEAD | 20 | 5% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Anarchist ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P3: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P4: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.8 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Go-Between | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P3: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 23/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Go-Between | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Recluse ↔ P3: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Recluse ↔ Shop: Old Maid | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Panel ↔ Shop: Customs | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Alchemists ↔ Shop: Muse | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P4: Gardener ↔ Shop: Go-Between | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Con Men ↔ P3: Anarchist | DEAD | 15 | 7% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Alchemists ↔ P2: Scouts | DEAD | 18 | 6% | 0% | 0% | – | – | – | 6.2 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P3: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Doppelganger ↔ P4: Agents | DEAD | 17 | 6% | 0% | 0% | – | – | – | 17.9 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Doppelganger ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Chronicler ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ P4: Agents | DEAD | 20 | 5% | 0% | 0% | – | – | – | 22.9 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P4: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Agents ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Fan Club ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Line Cutters ↔ P4: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 25.4 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Line Cutters ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Alchemists ↔ Shop: Window Shopper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Alchemists ↔ P4: Recruit Bonus | DEAD | 25 | 4% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 1/0%/0% | 24/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Courier | DEAD | 15 | 7% | 0% | 0% | – | – | – | 14.5 | 100% (0/1) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Shift Crew ↔ P3: Scouts | DEAD | 18 | 6% | 0% | 0% | – | – | – | 39.0 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Shift Crew ↔ P4: Recruit Bonus | DEAD | 20 | 5% | 0% | 0% | – | – | – | 4.6 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Timekeepers ↔ P4: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 29/0%/0% |
| trade:P3: Kingpin ↔ P4: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Patriarch ↔ P4: Party Crasher | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.8 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: HR ↔ Shop: Patroness | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P2: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 20/0%/0% |
| trade:P3: Scouts ↔ P4: Recruit Bonus | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P3: Scouts ↔ P4: Volunteer | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 21/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| choose member:P3's Triplets (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | – | 17/0%/0% |
| trade:P2: Critic ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Bouncers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Bouncers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Timekeepers ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Sticky Fingers ↔ P3: Kingpin | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Sticky Fingers ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Sticky Fingers ↔ P4: Cutpurse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Con Men ↔ Shop: Gossip | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Kingpin ↔ P4: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Scouts ↔ P4: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P3: Scouts ↔ P4: Deprogrammers | DEAD | 30 | 7% | 0% | 0% | – | – | – | 10.0 | 50% (0/1) | – | 15/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P2: Line Cutters | DEAD | 25 | 8% | 0% | 0% | – | – | – | 10.9 | 0% (0/0) | – | 13/0%/0% | 12/0%/0% |
| trade:P3: Triplets ↔ P4: Recruit Bonus | DEAD | 62 | 2% | 0% | 0% | – | – | – | 15.3 | 0% (0/0) | – | 9/0%/0% | 53/0%/0% |
| trade:P3: Triplets ↔ P4: Volunteer | DEAD | 45 | 4% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 8/0%/0% | 37/0%/0% |
| trade:P3: Triplets ↔ P4: Dabblers | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 31/0%/0% |
| trade:P3: Triplets ↔ P4: Deprogrammers | DEAD | 34 | 3% | 0% | 0% | – | – | – | 30.9 | 0% (0/0) | – | 8/0%/0% | 26/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Triplets | DEAD | 56 | 2% | 0% | 0% | – | – | – | 15.3 | 0% (0/0) | – | 9/0%/0% | 47/0%/0% |
| trade:P4: Party Crasher ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Patriarch ↔ Shop: Closer | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Patriarch ↔ Shop: Trendsetters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Patriarch ↔ Shop: Gossip | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Patriarch ↔ P2: Timekeepers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Dabblers ↔ P2: Line Cutters | DEAD | 29 | 3% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Dabblers ↔ P3: Triplets | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 28/0%/0% |
| trade:P4: Extortionist ↔ Shop: Old Maid | DEAD | 22 | 9% | 0% | 0% | – | – | – | 10.9 | 50% (0/1) | – | 2/0%/0% | 20/0%/0% |
| trade:P4: Window Dressers ↔ Shop: Trendsetters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Scouts | DEAD | 25 | 4% | 0% | 0% | – | – | – | 14.9 | 0% (0/0) | – | 14/0%/0% | 11/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Triplets | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 24/0%/0% |
| trade:P2: Alchemists ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P2: Con Men ↔ Shop: Loyalists | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P2: Bouncers ↔ P4: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Trendsetters ↔ P2: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Trendsetters ↔ P2: Critic | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Polisher ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ Shop: Old Maid | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P4: Polisher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P4: Dabblers | DEAD | 22 | 9% | 0% | 0% | – | – | – | 8.9 | 50% (0/1) | – | 9/0%/0% | 13/0%/0% |
| trade:P4: Polisher ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ Shop: Old Maid | DEAD | 39 | 3% | 0% | 0% | – | – | – | 9.2 | 0% (0/0) | – | 9/0%/0% | 30/0%/0% |
| trade:P4: Dabblers ↔ P2: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 3.6 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P4: Volunteer | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 17/0%/0% | 21/0%/0% |
| trade:P3: Toastmaster ↔ P4: Polisher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Anarchist ↔ Shop: Doormen | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Doormen ↔ Shop: Regular | DEAD | 27 | 4% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Triplets ↔ Shop: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ Shop: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Triplets ↔ P4: Recruit Bonus | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P4: Polisher ↔ P2: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Dabblers ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P1: Doormen ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P2: Volunteer ↔ P4: Recruit Bonus | DEAD | 22 | 5% | 0% | 0% | – | – | – | 4.3 | 100% (0/1) | – | 3/0%/0% | 19/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Alchemists ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Triplets ↔ Shop: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 3.7 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Alchemists ↔ Shop: Party Crasher | DEAD | 24 | 8% | 0% | 0% | – | – | – | 21.7 | 0% (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P3: Alchemists ↔ Shop: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ P4: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P2: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P2: Party Crasher ↔ P4: Recruit Bonus | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Window Dressers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Panel ↔ P1: Loyalists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Con Men ↔ Shop: Collector | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Loyalists ↔ Shop: Window Shopper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Loyalists ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Loyalists ↔ Shop: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Triplets ↔ Shop: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P3: Anarchist ↔ Shop: Window Shopper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ Shop: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ Shop: Toastmaster | DEAD | 23 | 4% | 0% | 0% | – | – | – | 11.4 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P4: Shopkeeper ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Toastmaster | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 20/0%/0% |
| trade:P4: Panel ↔ Shop: Window Shopper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Window Shopper | DEAD | 27 | 4% | 0% | 0% | – | – | – | 7.8 | 100% (0/1) | – | 2/0%/0% | 25/0%/0% |
| trade:P4: Con Men ↔ Shop: Hoarder | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Cutpurse ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 3.9 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Shoplifter | DEAD | 20 | 5% | 0% | 0% | – | – | – | 16.2 | 0% (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Con Men ↔ Shop: Gift Wrapper | DEAD | 28 | 7% | 0% | 0% | – | – | – | 16.6 | 0% (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P1: Con Men ↔ P4: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ Shop: Sticky Fingers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Con Men ↔ Shop: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| choose member:P2's Polisher (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Cutpurse ↔ Shop: Old Maid | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| choose member:P1's Volunteer (1) | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P1: High Society ↔ Shop: Gift Wrapper | DEAD | 20 | 5% | 0% | 0% | – | – | – | 21.5 | 0% (0/0) | – | – | 20/0%/0% |
| trade:P2: Accomplice ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Cutpurse | DEAD | 31 | 3% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 7/0%/0% | 24/0%/0% |
| trade:P3: Scouts ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Cutpurse ↔ P2: Recruit Bonus | DEAD | 26 | 4% | 0% | 0% | – | – | – | 2.2 | 0% (0/0) | – | 7/0%/0% | 19/0%/0% |
| trade:P4: HR ↔ Shop: Extra Hand | DEAD | 27 | 4% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P4: Clockmakers ↔ P2: Bouncers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Triplets ↔ P3: Scouts | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 25/0%/0% |
| trade:P3: Scouts ↔ P2: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P1: Snobs ↔ Shop: Window Shopper | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P1: Anarchist ↔ Shop: Window Shopper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Line Cutters ↔ P4: Deprogrammers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 22.6 | 0% (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Line Cutters | DEAD | 46 | 7% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 19/0%/0% | 27/0%/0% |
| trade:P3: Con Men ↔ Shop: Brokers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.4 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Con Men ↔ Shop: Shoplifter | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Snobs ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Doormen ↔ Shop: Critic | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Old Money | DEAD | 25 | 8% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P1: Party Crasher ↔ P3: Line Cutters | DEAD | 45 | 4% | 0% | 0% | – | – | – | -3.5 | 0% (0/0) | – | 12/0%/0% | 33/0%/0% |
| trade:P3: Doormen ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Cutpurse ↔ Shop: Recruit Bonus | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Shopaholics | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.9 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Panel ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Panel ↔ Shop: Exporters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Critic | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P1: Accomplice ↔ P3: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P1: Accomplice ↔ P3: Volunteer | DEAD | 22 | 9% | 0% | 0% | – | – | – | 9.3 | 0% (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Cutpurse ↔ P3: Line Cutters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Line Cutters | DEAD | 25 | 4% | 0% | 0% | – | – | – | 18.7 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Window Dressers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P3: Line Cutters | DEAD | 28 | 4% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P3: Window Dressers ↔ P1: Connoisseurs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Window Dressers ↔ P2: Accomplice | DEAD | 16 | 6% | 0% | 0% | – | – | – | 30.2 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Alchemists ↔ Shop: Desperado | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P4: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P1: Polisher ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P1: Scouts ↔ P3: Line Cutters | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 22/0%/0% |
| trade:P1: Scouts ↔ P3: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 16/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Volunteer | DEAD | 25 | 4% | 0% | 0% | – | – | – | 29.1 | 0% (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P2: Accomplice ↔ P3: Cutpurse | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P2: Volunteer ↔ P3: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 28.4 | 0% (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Window Dressers ↔ P4: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Anarchist ↔ Shop: Shoplifter | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Alchemists ↔ Shop: Window Shopper | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 23/0%/0% |
| trade:P1: Scouts ↔ Shop: Critic | DEAD | 16 | 6% | 0% | 0% | – | – | – | 4.9 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Cutpurse ↔ P2: Accomplice | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Cutpurse ↔ P3: Line Cutters | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 24/0%/0% |
| trade:P1: Cutpurse ↔ P3: Dabblers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Cutpurse ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Party Crasher | DEAD | 21 | 5% | 0% | 0% | – | – | – | 17.6 | 0% (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Window Dressers ↔ Shop: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Polisher ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.6 | 0% (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ Shop: Old Maid | DEAD | 42 | 5% | 0% | 0% | – | – | – | 5.6 | 0% (0/0) | – | 8/0%/0% | 34/0%/0% |
| trade:P1: Scouts ↔ Shop: Triplets | DEAD | 30 | 3% | 0% | 0% | – | – | – | 6.5 | 0% (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Patriarch ↔ Shop: Collector | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Patriarch ↔ Shop: Philanthropists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Patriarch ↔ P3: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Accomplice ↔ P1: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Regular ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Window Dressers ↔ P1: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 27.4 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P1: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P1: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Trendsetters ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P1: Connoisseurs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Con Men ↔ Shop: Collector | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ P1: Patriarch | DEAD | 17 | 6% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Alchemists ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ P3: Dabblers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 10.1 | 100% (0/1) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Patriarch ↔ P3: Snobs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Panel ↔ Shop: Desperado | DEAD | 24 | 8% | 0% | 0% | – | – | – | 12.1 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Kingpin ↔ Shop: Triplets | DEAD | 20 | 5% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P2: Kingpin ↔ P1: Cutpurse | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P2: Kingpin ↔ P1: Deprogrammers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P2: Kingpin ↔ P3: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Alchemists ↔ P1: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| choose member:P1's Critic (3) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| choose member:P4's Regular (3) | DEAD | 16 | 6% | 0% | 0% | – | – | – | 18.2 | 0% (0/0) | – | – | 16/0%/0% |
| choose member:P1's Agents (3) | DEAD | 34 | 9% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | 4/0%/0% | 30/0%/0% |
| trade:P1: Roadie ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Roadie ↔ P4: Line Cutters | DEAD | 26 | 8% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ P4: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P4: Dabblers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 10.5 | 100% (0/1) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Busker ↔ P3: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 32.6 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Busker ↔ P3: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Busker ↔ P4: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Busker ↔ Shop: Muse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Window Dressers ↔ P3: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Window Shopper | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Alchemists ↔ P3: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P1: Alchemists ↔ P4: Bouncers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 12.2 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P4: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Extortionist ↔ Shop: Desperado | DEAD | 15 | 7% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Early Birds ↔ P4: Dabblers | DEAD | 18 | 6% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Clockmakers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 18/0%/0% |
| trade:P3: Party Crasher ↔ P4: Bouncers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 23.6 | 0% (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P3: Anarchist ↔ Shop: Hot Streak | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Line Cutters ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P4: Fan Club ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Early Birds ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 2.5 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Collector ↔ Shop: Gift Wrapper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Anarchist ↔ Shop: Gift Wrapper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P4: Anarchist ↔ Shop: Old Maid | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 26/0%/0% |
| trade:P1: Scouts ↔ P3: Party Crasher | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Scouts ↔ P4: Bouncers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P2: Cutpurse ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Timekeepers ↔ P4: Bouncers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ P4: Volunteer | DEAD | 35 | 3% | 0% | 0% | – | – | – | 21.8 | 0% (0/0) | – | 16/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ P4: Line Cutters | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ Shop: Agents | DEAD | 19 | 5% | 0% | 0% | – | – | – | 21.6 | 0% (0/0) | – | 13/0%/0% | 6/0%/0% |
| trade:P2: Triplets ↔ P3: Deprogrammers | DEAD | 37 | 8% | 0% | 0% | – | – | – | 25.0 | 0% (0/0) | – | 5/0%/0% | 32/0%/0% |
| trade:P2: Triplets ↔ P4: Line Cutters | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 20/0%/0% |
| trade:P2: Alchemists ↔ P3: Deprogrammers | DEAD | 21 | 5% | 0% | 0% | – | – | – | 19.0 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P3: Critic ↔ P4: Volunteer | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P3: Critic ↔ P4: Line Cutters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 16.3 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Triplets | DEAD | 33 | 6% | 0% | 0% | – | – | – | 21.3 | 0% (0/0) | – | 5/0%/0% | 28/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Line Cutters | DEAD | 37 | 3% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 13/0%/0% | 24/0%/0% |
| trade:P4: Window Dressers ↔ Shop: Connoisseurs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Window Dressers ↔ P2: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Window Dressers ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Window Dressers ↔ P3: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Trendsetters ↔ Shop: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Trendsetters ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Trendsetters ↔ P2: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Trendsetters ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Dabblers | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 20/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P4: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 6/0%/0% |
| trade:P2: Dabblers ↔ P1: Recruit Bonus | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 20/0%/0% |
| trade:P2: Triplets ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Alchemists ↔ P3: Busker | DEAD | 23 | 4% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Party Crasher | DEAD | 23 | 4% | 0% | 0% | – | – | – | 29.7 | 0% (0/0) | – | 11/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ P2: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P3: Busker ↔ P4: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P4: Volunteer ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Volunteer ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Window Shopper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Dabblers | DEAD | 30 | 7% | 0% | 0% | – | – | – | 32.8 | 50% (0/1) | – | 16/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Busker | DEAD | 15 | 7% | 0% | 0% | – | – | – | 17.5 | 0% (0/0) | – | 11/0%/0% | 4/0%/0% |
| trade:P2: Dabblers ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P1: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 11/0%/0% |
| trade:P2: Dabblers ↔ P4: Scouts | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 31/0%/0% |
| trade:P2: Triplets ↔ P4: Scouts | DEAD | 31 | 3% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 6/0%/0% | 25/0%/0% |
| trade:P2: Alchemists ↔ P3: Party Crasher | DEAD | 18 | 6% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Alchemists ↔ P4: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Critic ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Critic ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Toastmaster ↔ P4: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ Shop: Regular | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ P4: Scouts | DEAD | 27 | 4% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | 4/0%/0% | 23/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Party Crasher ↔ P1: Deprogrammers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.8 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Window Dressers ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P4: Volunteer ↔ P1: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Line Cutters ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Snobs ↔ Shop: Window Shopper | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P4: Snobs ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ Shop: Window Shopper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ Shop: Loyalists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 2.7 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P2: Dabblers | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 27/0%/0% |
| trade:P4: Scouts ↔ P2: Triplets | DEAD | 29 | 3% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P4: Scouts ↔ P2: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Busker ↔ P4: Party Crasher | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P4: Party Crasher ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P4: Party Crasher ↔ P3: Busker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Alchemists ↔ P2: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Alchemists ↔ P2: Stunt Double | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Alchemists ↔ P4: Party Crasher | DEAD | 20 | 5% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P2: Dabblers ↔ Shop: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ Shop: Polisher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Toastmaster ↔ Shop: Old Maid | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Scouts | DEAD | 53 | 4% | 0% | 0% | – | – | – | 5.1 | 0% (0/0) | – | 14/0%/0% | 39/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Old Maid | DEAD | 42 | 2% | 0% | 0% | – | – | – | 28.6 | 0% (0/0) | – | 4/0%/0% | 38/0%/0% |
| trade:P2: Stunt Double ↔ P1: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Trendsetters ↔ P2: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ P2: Deprogrammers | DEAD | 53 | 4% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 14/0%/0% | 39/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Old Maid | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 22/0%/0% |
| trade:P1: High Society ↔ P4: Patriarch | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P2: Agents ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Muse ↔ P4: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Muse ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ P2: Agents | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P3: Volunteer | DEAD | 41 | 7% | 0% | 0% | – | – | – | 27.7 | 0% (0/0) | – | 10/0%/0% | 31/0%/0% |
| trade:P4: Party Crasher ↔ P2: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Patriarch ↔ P2: Stunt Double | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Patriarch ↔ P3: Busker | DEAD | 15 | 7% | 0% | 0% | – | – | – | 25.9 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P4: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Dabblers ↔ P1: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Stunt Double ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Stunt Double ↔ P3: Busker | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 26/0%/0% |
| trade:P2: Roadie ↔ P3: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P4: Scouts | DEAD | 43 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 28/0%/0% |
| trade:P3: Busker ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P2: Roadie | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 27/0%/0% |
| trade:P1: Alchemists ↔ P4: Recruit Bonus | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.1 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Stunt Double ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Trendsetters ↔ P2: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Trendsetters ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P4: Recruit Bonus | DEAD | 22 | 5% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P2: Dabblers ↔ P4: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Recruit Bonus | DEAD | 40 | 5% | 0% | 0% | – | – | – | 15.4 | 50% (0/1) | – | 10/0%/0% | 30/0%/0% |
| trade:P2: Agents ↔ P4: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Loyalists ↔ P2: Dabblers | DEAD | 23 | 4% | 0% | 0% | – | – | – | 2.1 | 0% (0/0) | – | 3/0%/0% | 20/0%/0% |
| trade:P3: Loyalists ↔ P4: Scouts | DEAD | 26 | 4% | 0% | 0% | – | – | – | 23.8 | 0% (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 19/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Deprogrammers | DEAD | 38 | 5% | 0% | 0% | – | – | – | 15.4 | 0% (0/0) | – | 10/0%/0% | 28/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.5 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ Shop: Anarchist | DEAD | 40 | 5% | 0% | 0% | – | – | – | 10.2 | 0% (0/0) | – | 7/0%/0% | 33/0%/0% |
| trade:P1: Alchemists ↔ Shop: Gift Wrapper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P4: Scouts | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ P2: Line Cutters | DEAD | 44 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 33/0%/0% |
| trade:P4: Con Men ↔ Shop: Extra Hand | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Loyalists ↔ Shop: Connoisseurs | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Go-Between | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Old Maid | DEAD | 24 | 4% | 0% | 0% | – | – | – | 14.6 | 0% (0/0) | – | 6/0%/0% | 18/0%/0% |
| trade:P1: Anarchist ↔ P4: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Snobs ↔ Shop: Old Maid | DEAD | 25 | 4% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P2: Connoisseurs ↔ Shop: Old Maid | DEAD | 18 | 6% | 0% | 0% | – | – | – | 27.0 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Connoisseurs ↔ P3: Trendsetters | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P3: Trendsetters ↔ P2: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Harmonist | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P1: Con Men ↔ P4: Loyalists | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Doormen ↔ P2: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Window Dressers ↔ P2: Connoisseurs | DEAD | 25 | 4% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Gardener ↔ P3: Deprogrammers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Connoisseurs ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Connoisseurs ↔ P1: Window Dressers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Kingpin ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Regular | DEAD | 18 | 6% | 0% | 0% | – | – | – | 5.7 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Loyalists ↔ Shop: Desperado | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P4: Loyalists ↔ P3: Deprogrammers | DEAD | 25 | 8% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| choose member:P1's Regular (3) | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.3 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Brokers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.2 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Volunteer ↔ P1: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Grifter ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Accomplice ↔ P2: Volunteer | DEAD | 16 | 6% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P1: HR ↔ Shop: Proselytizers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P3: Toastmaster ↔ P2: Volunteer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Accomplice ↔ Shop: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Triplets | DEAD | 23 | 4% | 0% | 0% | – | – | – | 6.1 | 0% (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P2: Panel ↔ Shop: Gift Wrapper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Panel ↔ Shop: Patriarch | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.9 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Con Men ↔ Shop: Loyalists | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P3: Con Men ↔ P4: Patriarch | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Loyalists ↔ P4: Deprogrammers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 27/0%/0% |
| trade:P2: Loyalists ↔ Shop: Desperado | DEAD | 24 | 4% | 0% | 0% | – | – | – | 12.0 | 0% (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ Shop: Martyrs | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P2: Loyalists ↔ Shop: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Dabblers ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Martyrs | DEAD | 16 | 6% | 0% | 0% | – | – | – | 3.8 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P3: Anarchist ↔ Shop: Alchemists | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Grifter ↔ Shop: Shoplifter | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Grifter ↔ Shop: Bodyguards | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P1: Martyrs ↔ Shop: Recluse | DEAD | 21 | 5% | 0% | 0% | – | – | – | 10.7 | 0% (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P3: Shopkeeper ↔ Shop: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Agents ↔ Shop: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P1: Recruit Bonus | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ P3: Agents | DEAD | 30 | 7% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 11/0%/0% | 19/0%/0% |
| trade:P1: Martyrs ↔ P4: Recruit Bonus | DEAD | 19 | 5% | 0% | 0% | – | – | – | 36.5 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Agents | DEAD | 40 | 5% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 21/0%/0% | 19/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ P1: Deprogrammers | DEAD | 35 | 3% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 20/0%/0% | 15/0%/0% |
| trade:P3: Agents ↔ P4: Recruit Bonus | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 24/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Triplets | DEAD | 42 | 2% | 0% | 0% | – | – | – | 18.5 | 0% (0/0) | – | 22/0%/0% | 20/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Volunteer | DEAD | 42 | 7% | 0% | 0% | – | – | – | 9.5 | 33% (0/1) | – | 19/0%/0% | 23/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Agents | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Loyalists ↔ P1: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Triplets | DEAD | 28 | 4% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P3: Triplets ↔ Shop: Old Maid | DEAD | 23 | 4% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Triplets ↔ P1: Volunteer | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Triplets ↔ P1: Deprogrammers | DEAD | 23 | 4% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Alchemists ↔ P1: Recruit Bonus | DEAD | 15 | 7% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Fan Club ↔ P4: Loyalists | DEAD | 18 | 6% | 0% | 0% | – | – | – | 7.2 | 100% (0/1) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ Shop: Muse | DEAD | 19 | 5% | 0% | 0% | – | – | – | 21.1 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Loyalists ↔ P3: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 9.6 | 0% (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Alchemists ↔ Shop: Brokers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Agents ↔ P4: Roadie | DEAD | 46 | 7% | 0% | 0% | – | – | – | 14.5 | 0% (0/0) | – | 21/0%/0% | 25/0%/0% |
| trade:P3: Triplets ↔ Shop: Scouts | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P3: Triplets ↔ P4: Roadie | DEAD | 24 | 4% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 10/0%/0% | 14/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Scouts | DEAD | 43 | 5% | 0% | 0% | – | – | – | 11.0 | 0% (0/0) | – | 12/0%/0% | 31/0%/0% |
| trade:P3: Sticky Fingers ↔ P4: Accomplice | DEAD | 17 | 6% | 0% | 0% | – | – | – | 22.9 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ Shop: Scouts | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 14/0%/0% |
| trade:P4: Roadie ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Roadie ↔ P3: Agents | DEAD | 42 | 2% | 0% | 0% | – | – | – | 17.0 | 0% (0/0) | – | 20/0%/0% | 22/0%/0% |
| trade:P4: Roadie ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P3: Accomplice ↔ P4: Cutpurse | DEAD | 24 | 4% | 0% | 0% | – | – | – | 3.3 | 100% (0/1) | – | 12/0%/0% | 12/0%/0% |
| trade:P4: Cutpurse ↔ P3: Accomplice | DEAD | 20 | 5% | 0% | 0% | – | – | – | 3.1 | 0% (0/0) | – | 12/0%/0% | 8/0%/0% |
| trade:P2: Dabblers ↔ Shop: Triplets | DEAD | 23 | 4% | 0% | 0% | – | – | – | 27.2 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Panel ↔ Shop: Brokers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Martyrs ↔ P2: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Critic ↔ P3: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Alchemists ↔ P4: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Raiders ↔ Shop: Old Maid | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P2: Patriarch ↔ Shop: Desperado | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Loyalists ↔ P1: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Loyalists ↔ P2: Dabblers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Desperado | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Roadie ↔ P4: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P2: Roadie ↔ P4: Dabblers | DEAD | 24 | 8% | 0% | 0% | – | – | – | 7.0 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Sticky Fingers ↔ Shop: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Sticky Fingers ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ Shop: Cashier | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Busker ↔ P4: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Dabblers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P3: Patriarch ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Triplets ↔ P2: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Dabblers ↔ P1: Deprogrammers | DEAD | 32 | 3% | 0% | 0% | – | – | – | 8.1 | 0% (0/0) | – | 6/0%/0% | 26/0%/0% |
| trade:P4: Dabblers ↔ P2: Roadie | DEAD | 22 | 5% | 0% | 0% | – | – | – | 7.9 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P3: Alchemists ↔ Shop: Chronicler | DEAD | 15 | 7% | 0% | 0% | – | – | – | 26.5 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Alchemists ↔ P2: Busker | DEAD | 26 | 4% | 0% | 0% | – | – | – | 40.7 | 0% (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.4 | 100% (0/1) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Shopkeeper ↔ P3: Deprogrammers | DEAD | 25 | 8% | 0% | 0% | – | – | – | 8.0 | 50% (0/1) | – | 7/0%/0% | 18/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recluse | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 25/0%/0% |
| trade:P1: Stunt Double ↔ P2: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ P3: Deprogrammers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 44.8 | 0% (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P3: Alchemists ↔ Shop: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Roadie | DEAD | 21 | 5% | 0% | 0% | – | – | – | 44.8 | 0% (0/0) | – | 12/0%/0% | 9/0%/0% |
| trade:P4: Dabblers ↔ Shop: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P4: Recluse ↔ P1: Shopkeeper | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| choose member:P2's Sticky Fingers (4) | DEAD | 31 | 6% | 0% | 0% | – | – | – | 22.4 | 0% (0/0) | – | 3/0%/0% | 28/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P1: Stunt Double ↔ P3: Volunteer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P4: Loyalists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 7.4 | 0% (0/0) | – | – | 15/0%/0% |
| trade:P2: Roadie ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Roadie ↔ P3: Triplets | DEAD | 24 | 4% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P2: Roadie ↔ P3: Agents | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.7 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Busker ↔ Shop: Old Maid | DEAD | 17 | 6% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P3: Triplets | DEAD | 22 | 5% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P2: Scouts ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Deprogrammers | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 24/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 9/0%/0% |
| trade:P3: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Brokers ↔ Shop: Raiders | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Triplets ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Triplets ↔ P2: Roadie | DEAD | 24 | 4% | 0% | 0% | – | – | – | 15.2 | 0% (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P3: Agents ↔ Shop: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P4: Loyalists ↔ P2: Roadie | DEAD | 19 | 5% | 0% | 0% | – | – | – | 36.5 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Loyalists ↔ P2: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Accomplice ↔ P4: Volunteer | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P2: Roadie ↔ P4: Volunteer | DEAD | 27 | 4% | 0% | 0% | – | – | – | 34.5 | 100% (0/1) | – | 10/0%/0% | 17/0%/0% |
| trade:P2: Busker ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Line Cutters | DEAD | 49 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 33/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P3: Loyalists ↔ Shop: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 13.0 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Recluse ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Scouts ↔ P4: Recruit Bonus | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 28/0%/0% |
| trade:P3: Busker ↔ P4: Recruit Bonus | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P3: Dabblers ↔ P4: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 28/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 23/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 25/0%/0% |
| trade:P1: Alchemists ↔ Shop: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Cutpurse ↔ P3: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P2: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ P1: Alchemists | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.6 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Polisher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P3: Triplets | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 29/0%/0% |
| trade:P1: Con Men ↔ Shop: Extortionist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Polisher ↔ P3: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Polisher ↔ P4: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Deprogrammers ↔ P3: Triplets | DEAD | 26 | 8% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P3: Triplets ↔ Shop: Toastmaster | DEAD | 16 | 6% | 0% | 0% | – | – | – | 34.2 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P1: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 24/0%/0% |
| trade:P3: Triplets ↔ P1: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Triplets ↔ P2: Deprogrammers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 15.7 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Polisher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Cutpurse ↔ P3: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 1.8 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Cutpurse ↔ P4: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Doppelganger ↔ P2: Busker | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P2: Busker ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Busker ↔ P4: Recruit Bonus | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 27/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Recruit Bonus ↔ P3: Volunteer | DEAD | 38 | 3% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 13/0%/0% | 25/0%/0% |
| trade:P1: Scouts ↔ P4: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P2: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P1: Polisher ↔ P4: Roadie | DEAD | 15 | 7% | 0% | 0% | – | – | – | 34.4 | 0% (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Cutpurse ↔ P4: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Doppelganger ↔ P4: Roadie | DEAD | 26 | 4% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P1: Chronicler ↔ P2: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Chronicler ↔ P4: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Patriarch ↔ Shop: Gift Wrapper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Loyalists ↔ P4: Recruit Bonus | DEAD | 25 | 8% | 0% | 0% | – | – | – | 12.7 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Loyalists ↔ Shop: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Recruit Bonus ↔ Shop: Old Maid | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Panel ↔ Shop: Gift Wrapper | DEAD | 15 | 7% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | – | 15/0%/0% |
| trade:P2: Loyalists ↔ P1: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P4: Roadie ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Roadie ↔ P1: Cutpurse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Fan Club ↔ P2: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Loyalists ↔ Shop: Party Crasher | DEAD | 21 | 5% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | – | 21/0%/0% |
| trade:P2: Busker ↔ P4: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 30.9 | 0% (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P4: Party Crasher | DEAD | 24 | 4% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | – | 24/0%/0% |
| trade:P1: Doppelganger ↔ P4: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Chronicler ↔ P4: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Patriarch ↔ P4: Loyalists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Scouts ↔ P4: Dabblers | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 25/0%/0% |
| trade:P1: Scouts ↔ Shop: Closer | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P1: Timekeepers ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Cutpurse ↔ P2: Kingpin | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Closer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P2: Window Dressers ↔ P3: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P2: Shift Crew ↔ P3: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Closer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Anarchist ↔ Shop: Closer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Window Shopper ↔ Shop: Old Maid | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.8 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Accomplice ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Chronicler ↔ P2: Connoisseurs | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Chronicler ↔ P3: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Doppelganger ↔ P2: Dabblers | DEAD | 20 | 5% | 0% | 0% | – | – | – | 14.5 | 0% (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Doppelganger ↔ P2: Connoisseurs | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Doppelganger ↔ P3: Agents | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 28/0%/0% |
| trade:P1: Doppelganger ↔ P3: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P3: Stunt Double | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: High Society ↔ Shop: Gift Wrapper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Connoisseurs ↔ P3: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P2: Connoisseurs ↔ P3: Busker | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P1: Accomplice ↔ P4: Scouts | DEAD | 19 | 5% | 0% | 0% | – | – | – | 11.5 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Timekeepers ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P3: Dabblers ↔ P4: Scouts | DEAD | 34 | 3% | 0% | 0% | – | – | – | 25.7 | 0% (0/0) | – | 5/0%/0% | 29/0%/0% |
| trade:P3: Cutpurse ↔ P1: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Cutpurse ↔ P4: Scouts | DEAD | 18 | 6% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P1: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Scouts ↔ P3: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 25/0%/0% |
| trade:P4: Scouts ↔ P3: Cutpurse | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Patriarch ↔ Shop: Window Shopper | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P1: Kingpin ↔ P3: Dabblers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Kingpin ↔ P3: Cutpurse | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Kingpin ↔ P4: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P3: Cutpurse ↔ P4: Volunteer | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.8 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Patriarch ↔ Shop: Gossip | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Kingpin ↔ P3: Deprogrammers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P1: Critic ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Extra Hand | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Mentor & Protégés ↔ Shop: Proselytizers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 20/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Shift Crew | DEAD | 16 | 6% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Dabblers ↔ P1: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P3: Con Men ↔ Shop: Gossip | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Line Cutters | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 29/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Scouts | DEAD | 50 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 43/0%/0% |
| trade:P4: Scouts ↔ P3: Recruit Bonus | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 38/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Recruit Bonus | DEAD | 22 | 5% | 0% | 0% | – | – | – | 32.4 | 100% (0/1) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 32.4 | 0% (0/0) | – | 5/0%/0% | 14/0%/0% |
| choose member:P1's Sticky Fingers (4) | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Cutpurse ↔ P4: Scouts | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P2: Accomplice ↔ P4: Scouts | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 35/0%/0% |
| trade:P2: Kingpin ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Line Cutters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P2: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Scouts ↔ P2: Accomplice | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 28/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Kingpin | DEAD | 15 | 7% | 0% | 0% | – | – | – | 9.0 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ P3: Deprogrammers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P1: Party Crasher ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Dabblers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 22.6 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 27/0%/0% |
| trade:P4: Scouts ↔ Shop: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P1: Alchemists ↔ Shop: Loyalists | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 22/0%/0% |
| trade:P1: Party Crasher ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Recluse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Accomplice ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Accomplice | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Recluse ↔ P1: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 16.1 | 0% (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Recluse ↔ P2: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Line Cutters ↔ P3: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Line Cutters ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Sticky Fingers ↔ P3: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P2: Sticky Fingers ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Martyrs | DEAD | 28 | 7% | 0% | 0% | – | – | – | 4.9 | 50% (0/1) | – | 14/0%/0% | 14/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Scouts | DEAD | 24 | 4% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 16/0%/0% | 8/0%/0% |
| trade:P1: Cutpurse ↔ P2: Dabblers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 13.5 | 0% (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P1: Cutpurse ↔ P4: Accomplice | DEAD | 31 | 3% | 0% | 0% | – | – | – | 23.7 | 0% (0/0) | – | 16/0%/0% | 15/0%/0% |
| trade:P1: Cutpurse ↔ P4: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P2: Busker ↔ P4: Agents | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 20/0%/0% |
| trade:P2: Busker ↔ Shop: Doppelganger | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 8/0%/0% |
| trade:P2: Gardener ↔ P4: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ Shop: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Roadie ↔ P4: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Roadie ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Muse ↔ Shop: Scouts | DEAD | 28 | 4% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P2: Dabblers ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Agents ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Deprogrammers ↔ Shop: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P4: Dabblers ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Gardener ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P3: Recruit Bonus | DEAD | 35 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 30/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Scouts | DEAD | 30 | 3% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 7/0%/0% | 23/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Scouts | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 26/0%/0% |
| trade:P4: Dabblers ↔ P1: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 26/0%/0% |
| trade:P4: Dabblers ↔ P1: Scouts | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P1: Scouts ↔ Shop: Cashier | DEAD | 23 | 9% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Scouts ↔ Shop: Brokers | DEAD | 28 | 7% | 0% | 0% | – | – | – | 16.2 | 0% (0/0) | – | 18/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ P2: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Scouts ↔ P3: Shopkeeper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Patriarch ↔ Shop: Loyalists | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P2: Recluse ↔ P1: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Dabblers ↔ Shop: Brokers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Regular ↔ Shop: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Critic | DEAD | 16 | 6% | 0% | 0% | – | – | – | 1.9 | 0% (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P1: Recluse ↔ Shop: Party Crasher | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P1: Recluse ↔ Shop: Cashier | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Recluse ↔ P3: Shopkeeper | DEAD | 37 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 29/0%/0% |
| trade:P1: Recluse ↔ P4: Dabblers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 11.1 | 0% (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Loyalists ↔ P1: Deprogrammers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 19.9 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P2: Loyalists ↔ P3: Recruit Bonus | DEAD | 39 | 8% | 0% | 0% | – | – | – | 12.2 | 0% (0/0) | – | 7/0%/0% | 32/0%/0% |
| trade:P2: Loyalists ↔ P4: Alchemists | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 18/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Recluse | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 25/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Critic | DEAD | 18 | 6% | 0% | 0% | – | – | – | 17.5 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: Alchemists ↔ P2: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Critic | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P3: Triplets | DEAD | 29 | 7% | 0% | 0% | – | – | – | 19.1 | 50% (0/1) | – | 3/0%/0% | 26/0%/0% |
| trade:P3: Triplets ↔ Shop: Cashier | DEAD | 16 | 6% | 0% | 0% | – | – | – | 9.4 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Gardener ↔ P3: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 20.4 | 0% (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Gardener ↔ P4: Recruit Bonus | DEAD | 23 | 9% | 0% | 0% | – | – | – | 23.3 | 0% (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Trendsetters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 8/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Recruit Bonus | DEAD | 29 | 3% | 0% | 0% | – | – | – | 22.7 | 0% (0/0) | – | 13/0%/0% | 16/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Martyrs | DEAD | 16 | 6% | 0% | 0% | – | – | – | 16.9 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Gardener | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P1: Connoisseurs ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Shopkeeper ↔ Shop: Cashier | DEAD | 22 | 5% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P1: Trendsetters ↔ Shop: Cashier | DEAD | 23 | 4% | 0% | 0% | – | – | – | 7.3 | 0% (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ Shop: Cashier | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.3 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ Shop: Drifters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Dabblers ↔ P3: Triplets | DEAD | 29 | 3% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Drifters | DEAD | 21 | 5% | 0% | 0% | – | – | – | 31.8 | 0% (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P3: Snobs ↔ P1: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Triplets ↔ P2: Dabblers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Volunteer ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Triplets ↔ Shop: Alchemists | DEAD | 21 | 5% | 0% | 0% | – | – | – | 14.5 | 0% (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Triplets ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Line Cutters ↔ P2: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Loyalists | DEAD | 21 | 5% | 0% | 0% | – | – | – | 8.7 | 0% (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P1: Gardener ↔ P4: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P1: Con Men ↔ Shop: Dyer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Triplets ↔ P4: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Scouts ↔ P4: Recruit Bonus | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 30/0%/0% |
| trade:P2: Scouts ↔ P4: Drifters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Drifters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Scouts | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 28/0%/0% |
| trade:P4: Drifters ↔ P1: Gardener | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P4: Drifters ↔ P2: Scouts | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Drifters ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Critic ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Alchemists ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Gardener ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Recluse ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Recluse ↔ P3: Line Cutters | DEAD | 38 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 22/0%/0% |
| trade:P1: Recluse ↔ P3: Deprogrammers | DEAD | 35 | 3% | 0% | 0% | – | – | – | 10.5 | 0% (0/0) | – | 12/0%/0% | 23/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Go-Between | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Line Cutters ↔ P1: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Deprogrammers ↔ Shop: Go-Between | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Old Maid | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Volunteer ↔ P3: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Anarchist ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Party Crasher ↔ P3: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Party Crasher ↔ P3: Busker | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P2: Party Crasher ↔ P4: Early Birds | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ Shop: Alchemists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Busker ↔ P4: Early Birds | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Busker ↔ Shop: Window Dressers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Agents ↔ P4: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Roadie ↔ P4: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Busker ↔ P4: Dabblers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 18/0%/0% |
| trade:P4: Alchemists ↔ Shop: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ Shop: Chronicler | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Con Men ↔ Shop: Fan Club | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 22/0%/0% |
| trade:P1: Party Crasher ↔ P3: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P4: Shopkeeper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ Shop: Drifters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.3 | 0% (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Gardener ↔ P3: Dabblers | DEAD | 33 | 3% | 0% | 0% | – | – | – | 15.1 | 0% (0/0) | – | 16/0%/0% | 17/0%/0% |
| trade:P3: Dabblers ↔ P2: Gardener | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 15/0%/0% |
| trade:P4: Accomplice ↔ P1: Cutpurse | DEAD | 29 | 3% | 0% | 0% | – | – | – | 23.7 | 0% (0/0) | – | 16/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Patriarch ↔ P1: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 7.1 | 100% (0/1) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Drifters ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Cutpurse ↔ P2: Triplets | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P2: Gardener ↔ P3: Drifters | DEAD | 15 | 7% | 0% | 0% | – | – | – | 44.3 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P1: Cutpurse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Triplets ↔ P3: Dabblers | DEAD | 35 | 6% | 0% | 0% | – | – | – | 24.4 | 0% (0/0) | – | 14/0%/0% | 21/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Gardener ↔ P1: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Sticky Fingers ↔ P1: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Drifters ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Grifter ↔ Shop: Proselytizers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ Shop: Triplets | DEAD | 30 | 3% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 16/0%/0% | 14/0%/0% |
| trade:P1: Roadie ↔ P4: Recruit Bonus | DEAD | 37 | 5% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 14/0%/0% | 23/0%/0% |
| trade:P1: Dabblers ↔ Shop: Triplets | DEAD | 40 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 28/0%/0% |
| trade:P1: Dabblers ↔ P4: Recruit Bonus | DEAD | 29 | 3% | 0% | 0% | – | – | – | 18.8 | 0% (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P3: Shopkeeper ↔ P1: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Roadie | DEAD | 34 | 6% | 0% | 0% | – | – | – | 22.2 | 0% (0/0) | – | 14/0%/0% | 20/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Dabblers | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Martyrs | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Triplets | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P1: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Party Crasher ↔ P3: Shopkeeper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ Shop: Doppelganger | DEAD | 16 | 6% | 0% | 0% | – | – | – | 24.5 | 0% (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ Shop: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 4/0%/0% |
| trade:P3: Busker ↔ P1: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Alchemists | DEAD | 16 | 6% | 0% | 0% | – | – | – | 9.4 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Doppelganger ↔ P2: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 24.3 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Doppelganger ↔ P4: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.3 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Muse | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Stunt Double ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Patriarch ↔ P3: Stunt Double | DEAD | 16 | 6% | 0% | 0% | – | – | – | 7.0 | 100% (0/1) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Shopkeeper ↔ P2: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Party Crasher ↔ P2: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Party Crasher ↔ P4: Recruit Bonus | DEAD | 28 | 4% | 0% | 0% | – | – | – | 4.4 | 0% (0/0) | – | 5/0%/0% | 23/0%/0% |
| trade:P1: Roadie ↔ P3: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P3: Triplets | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P2: Busker ↔ P1: Roadie | DEAD | 31 | 10% | 0% | 0% | – | – | – | 14.2 | 100% (0/3) | – | 15/0%/0% | 16/0%/0% |
| trade:P2: Busker ↔ P4: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P3: Stunt Double ↔ P2: Busker | DEAD | 20 | 5% | 0% | 0% | – | – | – | 29.2 | 0% (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Triplets ↔ P1: Roadie | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Patriarch ↔ P2: Busker | DEAD | 24 | 4% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P1: Roadie ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P4: HR ↔ Shop: Hoarder | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Stunt Double ↔ P2: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Stunt Double ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Fan Club ↔ Shop: Brokers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Party Crasher ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Dabblers ↔ P4: Roadie | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.3 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Loyalists ↔ P3: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 22.6 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Toastmaster ↔ P4: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Patriarch ↔ P2: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Roadie ↔ P3: Toastmaster | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Line Cutters ↔ Shop: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Anarchist ↔ Shop: Gift Wrapper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Chronicler ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 19/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Cashier | DEAD | 22 | 9% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 16/0%/0% | 6/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 9/0%/0% |
| trade:P4: Scouts ↔ Shop: Triplets | DEAD | 29 | 3% | 0% | 0% | – | – | – | 23.5 | 0% (0/0) | – | 11/0%/0% | 18/0%/0% |
| trade:P4: Line Cutters ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Muse ↔ Shop: Party Crasher | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P2: Muse ↔ P3: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Roadie ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P3: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P4: Line Cutters ↔ P2: Muse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Chronicler ↔ P4: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Chronicler ↔ P4: Deprogrammers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P1: Roadie ↔ Shop: Dabblers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Roadie ↔ P4: Triplets | DEAD | 24 | 4% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P2: Shopkeeper ↔ P4: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Recruit Bonus ↔ Shop: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Recluse ↔ P4: Line Cutters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 5.5 | 0% (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P3: Double Agent ↔ Shop: Anarchist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Triplets ↔ P1: Roadie | DEAD | 20 | 5% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P4: Party Crasher ↔ P2: Shopkeeper | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Grifter ↔ Shop: Anarchist | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Deprogrammers ↔ P1: Roadie | DEAD | 34 | 3% | 0% | 0% | – | – | – | 21.4 | 0% (0/0) | – | 13/0%/0% | 21/0%/0% |
| trade:P2: Mob ↔ Shop: Wallflower | DEAD | 16 | 6% | 0% | 0% | – | – | – | 7.4 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P1: Chronicler ↔ P2: Accomplice | DEAD | 16 | 6% | 0% | 0% | – | – | – | 8.7 | 100% (0/1) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P2: Accomplice | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P1: Doppelganger ↔ P2: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Doppelganger ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P2: Shopkeeper ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Triplets ↔ Shop: Old Maid | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 18/0%/0% |
| trade:P1: Dabblers ↔ P2: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Accomplice ↔ P1: Roadie | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Double Agent ↔ Shop: Proselytizers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.6 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Scouts ↔ P1: Dabblers | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 24/0%/0% |
| trade:P1: Dabblers ↔ Shop: Alchemists | DEAD | 18 | 6% | 0% | 0% | – | – | – | 13.1 | 0% (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Recruit Bonus | DEAD | 32 | 3% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 11/0%/0% | 21/0%/0% |
| trade:P1: Patriarch ↔ Shop: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Deprogrammers | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 19/0%/0% |
| trade:P2: Mentor & Protégés ↔ Shop: Anarchist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Volunteer ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Stunt Double ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Dabblers ↔ Shop: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Patriarch ↔ P3: Busker | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 22/0%/0% |
| trade:P1: Alchemists ↔ P4: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Triplets ↔ Shop: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Polisher ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 15/0%/0% |
| trade:P2: Line Cutters ↔ P3: Busker | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 19/0%/0% |
| trade:P2: Con Men ↔ Shop: Extra Hand | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Shift Crew ↔ P3: Busker | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ Shop: Toastmaster | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Cashier | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| trade:P1: Agents ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Roadie ↔ P3: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Busker ↔ P3: Recruit Bonus | DEAD | 16 | 6% | 0% | 0% | – | – | – | 22.9 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Critic | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P1: Dabblers ↔ P2: Line Cutters | DEAD | 42 | 5% | 0% | 0% | – | – | – | 29.9 | 0% (0/0) | – | 21/0%/0% | 21/0%/0% |
| trade:P1: Dabblers ↔ P3: Recruit Bonus | DEAD | 66 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 48/0%/0% |
| trade:P1: Doormen ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Doormen ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P1: Doormen ↔ P4: Scouts | DEAD | 18 | 6% | 0% | 0% | – | – | – | 4.6 | 100% (0/1) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Doormen ↔ P4: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Snobs ↔ P4: Busker | DEAD | 17 | 6% | 0% | 0% | – | – | – | 8.5 | 100% (0/1) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P1: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Deprogrammers ↔ P1: Dabblers | DEAD | 47 | 4% | 0% | 0% | – | – | – | 7.1 | 0% (0/0) | – | 24/0%/0% | 23/0%/0% |
| trade:P2: Critic ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Dabblers | DEAD | 59 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 16/0%/0% | 43/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Critic | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ Shop: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Scouts ↔ P2: Gardener | DEAD | 24 | 4% | 0% | 0% | – | – | – | 9.7 | 0% (0/0) | – | 8/0%/0% | 16/0%/0% |
| trade:P4: Busker ↔ P1: Dabblers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 19/0%/0% |
| trade:P1: Dabblers ↔ Shop: Regular | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Gardener ↔ P4: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Chronicler ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Chronicler ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Chronicler ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Window Shopper | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Doppelganger ↔ Shop: Regular | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Stunt Double ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P4: Triplets ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Triplets ↔ P2: Gardener | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P4: Triplets ↔ P3: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Window Dressers ↔ P2: Line Cutters | DEAD | 31 | 3% | 0% | 0% | – | – | – | 4.7 | 0% (0/0) | – | 2/0%/0% | 29/0%/0% |
| trade:P1: Window Dressers ↔ P3: Recruit Bonus | DEAD | 15 | 7% | 0% | 0% | – | – | – | 8.4 | 0% (0/0) | – | – | 15/0%/0% |
| trade:P1: Window Dressers ↔ P4: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Window Dressers ↔ P4: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Window Dressers ↔ P4: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Dabblers ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P4: Busker | DEAD | 15 | 7% | 0% | 0% | – | – | – | 24.0 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Regular | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 14/0%/0% |
| trade:P2: Chronicler ↔ Shop: Party Crasher | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Window Shopper ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Chronicler ↔ Shop: Old Maid | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 25/0%/0% |
| trade:P3: Window Shopper ↔ Shop: Alchemists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 27.3 | 100% (0/1) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Party Crasher ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: HR ↔ Shop: Wallflower | DEAD | 20 | 5% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P2: Chronicler ↔ P3: Stunt Double | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Scouts ↔ Shop: Recruit Bonus | DEAD | 18 | 6% | 0% | 0% | – | – | – | 7.8 | 0% (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P3: Triplets ↔ Shop: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P4: Recluse ↔ Shop: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Party Crasher ↔ P2: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Shopkeeper ↔ P2: Deprogrammers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 14.4 | 0% (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Connoisseurs ↔ P2: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Panel ↔ Shop: Proselytizers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Panel ↔ P3: Alchemists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 19/0%/0% |
| trade:P3: Recruit Bonus ↔ Shop: Closer | DEAD | 17 | 6% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Triplets ↔ P4: Dabblers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 16/0%/0% |
| trade:P4: Dabblers ↔ P1: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P1: Triplets ↔ P2: Line Cutters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 16/0%/0% |
| trade:P1: Triplets ↔ P2: Early Birds | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Critic ↔ P2: Line Cutters | DEAD | 17 | 6% | 0% | 0% | – | – | – | 9.9 | 0% (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Panel ↔ Shop: Gossip | DEAD | 18 | 6% | 0% | 0% | – | – | – | 18.3 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P3: Trendsetters ↔ P2: Line Cutters | DEAD | 26 | 8% | 0% | 0% | – | – | – | 31.2 | 0% (0/0) | – | 4/0%/0% | 22/0%/0% |
| trade:P3: Volunteer ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Loyalists ↔ P3: Scouts | DEAD | 17 | 6% | 0% | 0% | – | – | – | 23.6 | 0% (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ P3: Window Dressers | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P2: Recluse ↔ P4: Recruit Bonus | DEAD | 33 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 25/0%/0% |
| trade:P1: Triplets ↔ P4: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Gardener ↔ P4: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P2: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Drifters | DEAD | 16 | 6% | 0% | 0% | – | – | – | 11.6 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Window Dressers ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Scouts ↔ Shop: Regular | DEAD | 17 | 6% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Party Crasher ↔ P1: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 14/0%/0% |
| trade:P1: Connoisseurs ↔ Shop: Regular | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Patriarch ↔ Shop: Tastemaker | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 20/0%/0% |
| trade:P4: Dyer ↔ Shop: Tastemaker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P4: Dyer ↔ Shop: Customs | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 21/0%/0% |
| trade:P4: Mentor & Protégés ↔ Shop: Extra Hand | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Clockmakers ↔ Shop: Old Maid | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P3: Con Men ↔ Shop: Ringleader | DEAD | 16 | 6% | 0% | 0% | – | – | – | 13.4 | 0% (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P1: Recluse ↔ P2: Busker | DEAD | 20 | 5% | 0% | 0% | – | – | – | 17.2 | 0% (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P1: Recluse ↔ P2: Roadie | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Recluse ↔ P2: Line Cutters | DEAD | 19 | 5% | 0% | 0% | – | – | – | 5.1 | 100% (0/1) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P1: Alchemists ↔ Shop: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P2: Roadie ↔ Shop: Brokers | DEAD | 16 | 6% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Stunt Double ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Chronicler ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Doppelganger ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Agents ↔ Shop: Old Maid | DEAD | 25 | 4% | 0% | 0% | – | – | – | 40.8 | 0% (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P4: Con Men ↔ Shop: Ringleader | DEAD | 15 | 7% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P2: Party Crasher ↔ P4: Scouts | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P3: Line Cutters ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Kingpin ↔ Shop: Triplets | DEAD | 16 | 6% | 0% | 0% | – | – | – | 15.4 | 100% (0/1) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Drifters ↔ Shop: Triplets | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P2: Loyalists ↔ Shop: Sticky Fingers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Loyalists ↔ P4: Recluse | DEAD | 16 | 6% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Kingpin ↔ Shop: Sticky Fingers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Loyalists ↔ P3: Deprogrammers | DEAD | 28 | 7% | 0% | 0% | – | – | – | 6.0 | 0% (0/0) | – | 4/0%/0% | 24/0%/0% |
| trade:P3: Stunt Double ↔ P1: Agents | DEAD | 16 | 6% | 0% | 0% | – | – | – | 14.3 | 0% (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P1: Busker ↔ P2: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Panel ↔ Shop: Proselytizers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 17.3 | 0% (0/0) | – | 12/0%/0% | 12/0%/0% |
| trade:P1: Alchemists ↔ P3: Early Birds | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Mob ↔ Shop: Tribute Band | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Roadie ↔ Shop: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 7/0%/0% |
| trade:P2: Muse ↔ Shop: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Muse ↔ P1: Roadie | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 22/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Doppelganger | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Stunt Double ↔ P2: Muse | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P1: Panel ↔ Shop: Loyalists | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Panel ↔ Shop: Doppelganger | DEAD | 19 | 5% | 0% | 0% | – | – | – | 17.8 | 0% (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ P2: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Muse ↔ P3: Busker | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 20/0%/0% |
| trade:P3: Busker ↔ P2: Muse | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P2: Alchemists ↔ Shop: Doppelganger | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Loyalists ↔ P2: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Alchemists ↔ P1: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: Busker ↔ Shop: Scouts | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P1: Panel ↔ Shop: Bodyguards | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Panel ↔ Shop: Mentor & Protégés | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Polisher ↔ Shop: Toastmaster | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Recruit Bonus ↔ P1: Line Cutters | DEAD | 28 | 4% | 0% | 0% | – | – | – | 29.4 | 0% (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P2: Alchemists ↔ Shop: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.8 | 0% (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P2: Trendsetters ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ Shop: Closer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Panel ↔ Shop: Alchemists | DEAD | 21 | 10% | 0% | 0% | – | – | – | 29.1 | 0% (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P2: Triplets ↔ P4: Roadie | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 18/0%/0% |
| trade:P4: Roadie ↔ P2: Triplets | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 17/0%/0% |
| trade:P4: Gardener ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P2: Triplets ↔ P4: Deprogrammers | DEAD | 19 | 5% | 0% | 0% | – | – | – | 2.0 | 100% (0/1) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Harmonist | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Triplets | DEAD | 15 | 7% | 0% | 0% | – | – | – | -2.5 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Alchemists ↔ P3: Dabblers | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 23/0%/0% |
| trade:P2: Agents ↔ P4: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.7 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Con Men ↔ Shop: Big Tent | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Con Men ↔ Shop: Exporters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P4: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Deprogrammers ↔ P2: Agents | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.9 | 0% (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P4: Party Crasher ↔ P3: Dabblers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 11.2 | 100% (0/1) | – | 5/0%/0% | 20/0%/0% |
| trade:P3: Triplets ↔ P4: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 18/0%/0% |
| trade:P4: Scouts ↔ P3: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Con Men ↔ P2: Alchemists | DEAD | 17 | 6% | 0% | 0% | – | – | – | 3.2 | 0% (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Mob ↔ Shop: Tribute Band | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.1 | 100% (0/1) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Dabblers ↔ P4: Agents | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 33/0%/0% |
| trade:P4: Agents ↔ P2: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Agents ↔ P3: Dabblers | DEAD | 41 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 28/0%/0% |
| trade:P2: Scouts ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Triplets ↔ P4: Gardener | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 17/0%/0% |
| trade:P4: Gardener ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P2: Agents ↔ Shop: Cashier | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Recluse ↔ P4: Shopkeeper | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P1: Drifters ↔ P2: Gardener | DEAD | 24 | 8% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 11/0%/0% | 13/0%/0% |
| trade:P3: Polisher ↔ Shop: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Caravan ↔ Shop: Extra Hand | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ Shop: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 4/0%/0% |
| trade:P1: Roadie ↔ P2: Scouts | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P2: Scouts ↔ P1: Roadie | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Volunteer ↔ P1: Roadie | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 10/0%/0% |
| trade:P1: Polisher ↔ P4: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P1: Gardener ↔ P4: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Stunt Double ↔ P3: Deprogrammers | DEAD | 29 | 3% | 0% | 0% | – | – | – | 10.3 | 0% (0/0) | – | 8/0%/0% | 21/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Stunt Double | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Agents ↔ Shop: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Panel ↔ Shop: Anarchist | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P4: Roadie ↔ Shop: Chronicler | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Polisher | DEAD | 22 | 5% | 0% | 0% | – | – | – | 17.2 | 0% (0/0) | – | 8/0%/0% | 14/0%/0% |
| trade:P4: Polisher ↔ P3: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Regular ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Regular ↔ P4: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Cutpurse ↔ P4: Volunteer | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 17/0%/0% |
| trade:P1: Stunt Double ↔ P2: Loyalists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Stunt Double ↔ P4: Agents | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P1: Deprogrammers ↔ P2: Loyalists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P4: Alchemists | DEAD | 15 | 7% | 0% | 0% | – | – | – | 6.8 | 0% (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Stunt Double ↔ Shop: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P1: Window Dressers ↔ P4: Agents | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Window Dressers ↔ P4: Critic | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Agents ↔ Shop: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Window Dressers ↔ P4: Roadie | DEAD | 22 | 5% | 0% | 0% | – | – | – | 12.5 | 0% (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ Shop: Window Shopper | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 21/0%/0% |
| trade:P2: Loyalists ↔ Shop: Triplets | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P4: Agents ↔ Shop: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Roadie ↔ Shop: Triplets | DEAD | 23 | 4% | 0% | 0% | – | – | – | 29.9 | 0% (0/0) | – | 18/0%/0% | 5/0%/0% |
| trade:P4: Roadie ↔ Shop: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 5/0%/0% |
| trade:P1: Dabblers ↔ P4: Roadie | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 23/0%/0% |
| trade:P1: Dabblers ↔ Shop: Window Shopper | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P4: Mentor & Protégés ↔ Shop: Patroness | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| choose member:P4's Critic (3) | DEAD | 16 | 6% | 0% | 0% | – | – | – | 10.1 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P2: Muse ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Muse ↔ P1: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Con Men ↔ Shop: Window Shopper | DEAD | 21 | 5% | 0% | 0% | – | – | – | 6.0 | 100% (0/1) | – | 9/0%/0% | 12/0%/0% |
| trade:P2: Extra Hand ↔ Shop: Proselytizers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 11/0%/0% |
| trade:P1: Roadie ↔ P2: Line Cutters | DEAD | 42 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 19/0%/0% | 23/0%/0% |
| trade:P4: Early Birds ↔ P2: Line Cutters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 7/0%/0% |
| trade:P4: Dabblers ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Stunt Double ↔ P2: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recluse ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Recluse ↔ P2: Shopkeeper | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.6 | 100% (0/1) | – | 11/0%/0% | 9/0%/0% |
| trade:P2: Shopkeeper ↔ P1: Recluse | DEAD | 17 | 6% | 0% | 0% | – | – | – | 2.0 | 0% (0/0) | – | 11/0%/0% | 6/0%/0% |
| trade:P2: Party Crasher ↔ P1: Roadie | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Busker ↔ P2: Party Crasher | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P4: Fan Club ↔ Shop: Gossip | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Fan Club ↔ Shop: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Raiders ↔ P4: Early Birds | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P3: Busker ↔ Shop: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P1: Loyalists ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P2: Raiders | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Raiders ↔ P1: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Gardener ↔ P3: Line Cutters | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Doormen ↔ Shop: Regular | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Toastmaster ↔ Shop: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P3: HR ↔ Shop: Shopaholics | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P4: Kingpin ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Polisher ↔ P4: Deprogrammers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Deprogrammers ↔ Shop: Regular | DEAD | 28 | 4% | 0% | 0% | – | – | – | 7.7 | 0% (0/0) | – | 7/0%/0% | 21/0%/0% |
| trade:P2: Connoisseurs ↔ P4: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P3: Line Cutters ↔ P4: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P3: Scouts ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P1: Agents ↔ P4: Roadie | DEAD | 25 | 4% | 0% | 0% | – | – | – | 21.5 | 0% (0/0) | – | 2/0%/0% | 23/0%/0% |
| trade:P4: Chronicler ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Scouts | DEAD | 27 | 4% | 0% | 0% | – | – | – | 16.7 | 0% (0/0) | – | 17/0%/0% | 10/0%/0% |
| trade:P1: Trendsetters ↔ Shop: Regular | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P2: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Scouts ↔ P1: Dabblers | DEAD | 25 | 4% | 0% | 0% | – | – | – | 42.5 | 0% (0/0) | – | 10/0%/0% | 15/0%/0% |
| trade:P1: Deprogrammers ↔ P3: Scouts | DEAD | 37 | 8% | 0% | 0% | – | – | – | 3.0 | 33% (0/1) | – | 7/0%/0% | 30/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Scouts ↔ P1: Deprogrammers | DEAD | 33 | 9% | 0% | 0% | – | – | – | 3.4 | 0% (0/0) | – | 6/0%/0% | 27/0%/0% |
| trade:P3: Dabblers ↔ Shop: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Connoisseurs ↔ P4: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P1: Panel ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Sticky Fingers ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P1: Cutpurse ↔ P3: Accomplice | DEAD | 15 | 7% | 0% | 0% | – | – | – | 21.9 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Window Dressers ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Gardener ↔ P3: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 15/0%/0% |
| trade:P3: Line Cutters ↔ P4: Gardener | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Deprogrammers ↔ Shop: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 18/0%/0% | 7/0%/0% |
| trade:P3: Shift Crew ↔ P4: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P3: Collector ↔ Shop: Party Crasher | DEAD | 15 | 7% | 0% | 0% | – | – | – | 20.6 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Line Cutters | DEAD | 31 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 23/0%/0% |
| trade:P3: HR ↔ Shop: Mentor & Protégés | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P4: Scouts ↔ P3: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 21/0%/0% |
| trade:P4: Timekeepers ↔ P3: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Loyalists ↔ P2: Recruit Bonus | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 21/0%/0% |
| trade:P1: Loyalists ↔ P2: Accomplice | DEAD | 23 | 9% | 0% | 0% | – | – | – | 4.7 | 50% (0/1) | – | 2/0%/0% | 21/0%/0% |
| trade:P1: Loyalists ↔ P3: Triplets | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 22/0%/0% |
| trade:P1: Loyalists ↔ P4: Scouts | DEAD | 21 | 10% | 0% | 0% | – | – | – | 13.7 | 0% (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P3: Triplets ↔ P4: Early Birds | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 22/0%/0% |
| trade:P4: Early Birds ↔ P3: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Alchemists ↔ Shop: Closer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ P4: Timekeepers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ Shop: Closer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Dabblers | DEAD | 24 | 4% | 0% | 0% | – | – | – | 32.4 | 0% (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P3: Dabblers ↔ P2: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P1: Scouts ↔ P2: Recruit Bonus | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Scouts ↔ P2: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Recruit Bonus ↔ P1: Scouts | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P4: Bouncers ↔ P1: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Loyalists ↔ Shop: Alchemists | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ P3: Dabblers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P3: Anarchist ↔ Shop: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Scouts ↔ Shop: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 7/0%/0% |
| trade:P1: Scouts ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P4: Loyalists ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P4: Con Men ↔ P2: Loyalists | DEAD | 20 | 5% | 0% | 0% | – | – | – | 7.6 | 0% (0/0) | – | 2/0%/0% | 18/0%/0% |
| trade:P4: Chronicler ↔ Shop: Muse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Busker ↔ P2: Recluse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P1: Muse ↔ P4: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ P2: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Recluse ↔ Shop: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Recluse ↔ P1: Busker | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Recluse ↔ P1: Roadie | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 9/0%/0% |
| trade:P2: Recluse ↔ P3: Triplets | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P2: Recluse ↔ P4: Party Crasher | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P4: Party Crasher ↔ P2: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Party Crasher | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P4: Con Men ↔ Shop: Doppelganger | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P3: Party Crasher ↔ P1: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ Shop: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P1: Critic ↔ P3: Volunteer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Agents ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Alchemists ↔ Shop: Martyrs | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Window Dressers ↔ Shop: Regular | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Patriarch ↔ P2: Recluse | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P1: Agents ↔ P4: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P2: Con Men ↔ P4: Fan Club | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Party Crasher ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ Shop: Martyrs | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 19/0%/0% |
| trade:P2: Muse ↔ P4: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P1: Busker ↔ Shop: Cashier | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Roadie ↔ P3: Dabblers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P1: Agents ↔ P3: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P2: Muse ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P3: Dabblers ↔ P1: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 11/0%/0% |
| trade:P3: Dabblers ↔ P1: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 5/0%/0% |
| trade:P2: Line Cutters ↔ Shop: Martyrs | DEAD | 15 | 7% | 0% | 0% | – | – | – | 22.5 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P3: Line Cutters | DEAD | 46 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 13/0%/0% | 33/0%/0% |
| trade:P3: Line Cutters ↔ P2: Deprogrammers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 2.5 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Dabblers ↔ Shop: Critic | DEAD | 15 | 7% | 0% | 0% | – | – | – | 10.7 | 0% (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P1: Recruit Bonus ↔ P2: Line Cutters | DEAD | 45 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 33/0%/0% |
| trade:P3: Raiders ↔ Shop: Old Maid | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Closer | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 16/0%/0% |
| trade:P1: Drifters ↔ P2: Dabblers | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P1: Drifters ↔ P4: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Gardener ↔ P1: Drifters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P1: Drifters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 11/0%/0% |
| trade:P2: Window Dressers ↔ P4: Triplets | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Alchemists ↔ Shop: Brokers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 12/0%/0% |
| trade:P1: Dabblers ↔ P2: Drifters | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Party Crasher ↔ Shop: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P1: Kingpin ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Shopkeeper ↔ P4: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 3.0 | 0% (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P1: Recluse ↔ P3: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Con Men ↔ Shop: Dyer | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Roadie ↔ P3: Recruit Bonus | DEAD | 32 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 17/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Roadie | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 13/0%/0% |
| trade:P1: Hot Streak ↔ Shop: Closer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Hot Streak ↔ P3: Shift Crew | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Chronicler ↔ P3: Recruit Bonus | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 26/0%/0% |
| trade:P1: Agents ↔ P3: Recruit Bonus | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 19/0%/0% |
| trade:P3: Stunt Double ↔ Shop: Party Crasher | DEAD | 20 | 5% | 0% | 0% | – | – | – | 2.4 | 0% (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P2: Bouncers ↔ P1: Scouts | DEAD | 16 | 6% | 0% | 0% | – | – | – | 22.7 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Triplets ↔ Shop: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Patriarch ↔ P3: Brokers | DEAD | 15 | 7% | 0% | 0% | – | – | – | 4.0 | 0% (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Brokers ↔ Shop: Loyalists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P1: Loyalists ↔ P3: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 25/0%/0% |
| trade:P3: Busker ↔ P4: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 24/0%/0% |
| trade:P1: Scouts ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 8/0%/0% |
| trade:P1: Kingpin ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Kingpin ↔ P1: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P1: Patriarch ↔ P2: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Line Cutters ↔ P3: Cutpurse | DEAD | 21 | 5% | 0% | 0% | – | – | – | 27.1 | 0% (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P1: Kingpin ↔ P3: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P2: Dabblers ↔ P1: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Party Crasher ↔ Shop: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 15/0%/0% |
| trade:P3: Chronicler ↔ P4: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ Shop: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Closer | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Timekeepers ↔ P3: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 18.0 | 0% (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Line Cutters | DEAD | 20 | 5% | 0% | 0% | – | – | – | 6.3 | 0% (0/0) | – | 11/0%/0% | 9/0%/0% |
| trade:P4: Party Crasher ↔ P3: Line Cutters | DEAD | 23 | 4% | 0% | 0% | – | – | – | 6.8 | 0% (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Recruit Bonus ↔ P3: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Window Dressers ↔ P4: Deprogrammers | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 22/0%/0% |
| trade:P2: Loyalists ↔ Shop: Patriarch | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Drifters ↔ P4: Gardener | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Gardener ↔ P3: Drifters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Early Birds ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Bouncers ↔ Shop: Timekeepers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P4: Bouncers ↔ Shop: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Window Dressers ↔ Shop: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Bouncers ↔ Shop: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P1: Dabblers ↔ Shop: Hot Streak | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Loyalists ↔ P1: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 27.3 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Dabblers ↔ P3: Triplets | DEAD | 29 | 3% | 0% | 0% | – | – | – | 34.1 | 0% (0/0) | – | 10/0%/0% | 19/0%/0% |
| trade:P3: Triplets ↔ P1: Dabblers | DEAD | 23 | 4% | 0% | 0% | – | – | – | 34.1 | 0% (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Con Men ↔ Shop: Gossip | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 23/0%/0% |
| trade:P3: Early Birds ↔ Shop: Hot Streak | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Go-Between ↔ P4: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Drifters ↔ P3: Deprogrammers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P3: Deprogrammers ↔ P1: Drifters | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 13/0%/0% |
| trade:P2: Recluse ↔ Shop: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 10/0%/0% |
| trade:P2: Recluse ↔ P3: Deprogrammers | DEAD | 33 | 3% | 0% | 0% | – | – | – | 20.7 | 0% (0/0) | – | 7/0%/0% | 26/0%/0% |
| trade:P2: Caravan ↔ Shop: Harmonist | DEAD | 16 | 6% | 0% | 0% | – | – | – | 13.5 | 0% (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P1: Shopkeeper ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P1: Drifters ↔ P3: Dabblers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P1: Window Shopper ↔ Shop: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Line Cutters ↔ P3: Trendsetters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P3: Regular ↔ P4: Scouts | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P4: Agents ↔ P3: Roadie | DEAD | 26 | 4% | 0% | 0% | – | – | – | 2.3 | 0% (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P2: Party Crasher ↔ P3: Agents | DEAD | 42 | 2% | 0% | 0% | – | – | – | 5.0 | 0% (0/0) | – | 15/0%/0% | 27/0%/0% |
| trade:P1: Alchemists ↔ P3: Brokers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Agents ↔ P4: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 15/0%/0% |
| trade:P4: Scouts ↔ P3: Agents | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 11/0%/0% |
| trade:P4: Clockmakers ↔ P3: Recruit Bonus | DEAD | 18 | 6% | 0% | 0% | – | – | – | 21.4 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Doppelganger ↔ P4: Deprogrammers | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 21/0%/0% |
| trade:P4: Alchemists ↔ Shop: Bouncers | DEAD | 17 | 6% | 0% | 0% | – | – | – | 20.5 | 100% (0/1) | – | 8/0%/0% | 9/0%/0% |
| trade:P2: Loyalists ↔ Shop: Brokers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Chronicler ↔ P2: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P2: Connoisseurs ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P1: Courier ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P1: Courier ↔ P2: Shift Crew | DEAD | 16 | 6% | 0% | 0% | – | – | – | 6.4 | 0% (0/0) | – | – | 16/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Party Crasher | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Shift Crew ↔ P1: Dabblers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Alchemists ↔ P2: Timekeepers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P1: Philanthropists ↔ Shop: Gift Wrapper | DEAD | 18 | 6% | 0% | 0% | – | – | – | 35.9 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Recluse ↔ P3: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 6/0%/0% |
| trade:P2: Shopkeeper ↔ P3: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 16.0 | 0% (0/0) | – | 6/0%/0% | 12/0%/0% |
| trade:P2: Busker ↔ P1: Recluse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P1: Drifters ↔ P3: Line Cutters | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 12/0%/0% |
| trade:P4: Dabblers ↔ P2: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P2: Roadie ↔ P3: Line Cutters | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 19/0%/0% |
| trade:P1: Muse ↔ P4: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P2: Muse ↔ P3: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P2: Roadie ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 9/0%/0% |
| trade:P3: Busker ↔ P1: Triplets | DEAD | 21 | 10% | 0% | 0% | – | – | – | 13.8 | 0% (0/0) | – | 6/0%/0% | 15/0%/0% |
| trade:P1: Alchemists ↔ Shop: Martyrs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P2: Loyalists ↔ P3: Regular | DEAD | 16 | 6% | 0% | 0% | – | – | – | 1.8 | 100% (0/1) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Shopkeeper ↔ P3: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P2: Roadie ↔ P1: Volunteer | DEAD | 21 | 5% | 0% | 0% | – | – | – | 2.3 | 100% (0/1) | – | 9/0%/0% | 12/0%/0% |
| trade:P3: Deprogrammers ↔ P4: Agents | DEAD | 36 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 28/0%/0% |
| trade:P4: Agents ↔ P1: Volunteer | DEAD | 22 | 9% | 0% | 0% | – | – | – | 15.5 | 0% (0/0) | – | 10/0%/0% | 12/0%/0% |
| trade:P4: Agents ↔ P3: Deprogrammers | DEAD | 34 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 26/0%/0% |
| trade:P1: Kingpin ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P3: Loyalists ↔ P4: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ Shop: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Agents ↔ P2: Line Cutters | DEAD | 27 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 26/0%/0% |
| trade:P4: Busker ↔ P2: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P2: Stunt Double ↔ P4: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Cutpurse ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P4: Agents ↔ P2: Cutpurse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P3: Recruit Bonus ↔ P4: Agents | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 21/0%/0% |
| trade:P3: Stunt Double ↔ P4: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P4: Agents ↔ P3: Recruit Bonus | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P2: Chronicler ↔ P4: Loyalists | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 17/0%/0% |
| trade:P2: Triplets ↔ P3: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P1: Roadie ↔ P2: Gardener | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P1: Roadie ↔ P3: Line Cutters | DEAD | 29 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 14/0%/0% |
| trade:P3: Drifters ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P4: Busker ↔ P1: Roadie | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P4: Stunt Double ↔ P1: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P2: Dyer ↔ Shop: Harmonist | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Agents ↔ P3: Line Cutters | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 10/0%/0% |
| trade:P1: Trendsetters ↔ P2: Busker | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 15/0%/0% |
| trade:P1: Trendsetters ↔ P4: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P2: Busker ↔ P1: Trendsetters | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P1: Doormen ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Drifters ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Con Men ↔ Shop: Tastemaker | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 18/0%/0% |
| trade:P4: Agents ↔ Shop: Regular | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 17/0%/0% |
| trade:P1: Loyalists ↔ P2: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Loyalists ↔ P2: Chronicler | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Busker ↔ P3: Roadie | DEAD | 28 | 4% | 0% | 0% | – | – | – | 22.9 | 100% (0/1) | – | 9/0%/0% | 19/0%/0% |
| trade:P3: Busker ↔ P2: Shift Crew | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Clockmakers ↔ P2: Shift Crew | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 10/0%/0% |
| trade:P2: Con Men ↔ P1: Chronicler | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P1: Clockmakers ↔ P3: Deprogrammers | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Shift Crew ↔ P3: Deprogrammers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Roadie ↔ Shop: Scouts | DEAD | 30 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 15/0%/0% | 15/0%/0% |
| trade:P2: Shift Crew ↔ Shop: Gossip | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 17/0%/0% |
| trade:P4: Loyalists ↔ P2: Shift Crew | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P2: Stunt Double ↔ Shop: Hot Streak | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Party Crasher ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P1: Recluse ↔ P3: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P1: Loyalists ↔ P4: Alchemists | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 16/0%/0% |
| trade:P1: Window Dressers ↔ P3: Triplets | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P2: Party Crasher ↔ P1: Cutpurse | DEAD | 17 | 6% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Dabblers ↔ P1: Cutpurse | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 20/0%/0% |
| trade:P3: Cutpurse ↔ P2: Accomplice | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 12/0%/0% |
| trade:P3: Cutpurse ↔ P2: Line Cutters | DEAD | 28 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 16/0%/0% |
| trade:P1: Loyalists ↔ P2: Doppelganger | DEAD | 21 | 10% | 0% | 0% | – | – | – | 12.9 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P2: Doppelganger ↔ P1: Loyalists | DEAD | 21 | 10% | 0% | 0% | – | – | – | 13.3 | 0% (0/0) | – | 2/0%/0% | 19/0%/0% |
| trade:P1: Agents ↔ Shop: Scouts | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 7/0%/0% |
| trade:P4: Busker ↔ Shop: Scouts | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 14/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P1: Agents | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 15/0%/0% |
| trade:P2: Deprogrammers ↔ P4: Agents | DEAD | 23 | 4% | 0% | 0% | – | – | – | 28.6 | 0% (0/0) | – | 12/0%/0% | 11/0%/0% |
| trade:P4: Agents ↔ P2: Deprogrammers | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 11/0%/0% | 10/0%/0% |
| trade:P4: Busker ↔ P3: Agents | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Panel ↔ Shop: Extra Hand | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Window Dressers ↔ P3: Agents | DEAD | 25 | 8% | 0% | 0% | – | – | – | 18.5 | 0% (0/0) | – | 5/0%/0% | 20/0%/0% |
| trade:P1: Fan Club ↔ P3: Patriarch | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P2: Doppelganger ↔ P3: Trendsetters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P2: Con Men ↔ P3: Collector | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P1: Connoisseurs ↔ P3: Recruit Bonus | DEAD | 16 | 6% | 0% | 0% | – | – | – | 25.9 | 0% (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P3: Collector ↔ Shop: Philanthropists | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 13/0%/0% |
| trade:P4: Loyalists ↔ Shop: Party Crasher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 20/0%/0% |
| trade:P2: Connoisseurs ↔ P3: Recruit Bonus | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P3: Busker ↔ P2: Connoisseurs | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P1: Alchemists ↔ P2: Connoisseurs | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Window Dressers ↔ P2: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 12.0 | 100% (0/1) | – | 4/0%/0% | 14/0%/0% |
| trade:P3: Window Dressers ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P4: Roadie ↔ Shop: Critic | DEAD | 20 | 5% | 0% | 0% | – | – | – | 9.5 | 0% (0/0) | – | 14/0%/0% | 6/0%/0% |
| trade:P1: Dabblers ↔ P3: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P2: Busker ↔ P3: Scouts | DEAD | 22 | 5% | 0% | 0% | – | – | – | 6.6 | 0% (0/0) | – | 9/0%/0% | 13/0%/0% |
| trade:P4: Roadie ↔ P1: Dabblers | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 17/0%/0% |
| trade:P2: Stunt Double ↔ P1: Loyalists | DEAD | 19 | 5% | 0% | 0% | – | – | – | 4.1 | 0% (0/0) | – | – | 19/0%/0% |
| trade:P1: Triplets ↔ P4: Roadie | DEAD | 15 | 7% | 0% | 0% | – | – | – | 12.8 | 100% (0/1) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Window Dressers ↔ P3: Busker | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P2: Critic ↔ P4: Agents | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Busker ↔ P3: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 9/0%/0% |
| trade:P1: Triplets ↔ P3: Volunteer | DEAD | 22 | 9% | 0% | 0% | – | – | – | 7.4 | 0% (0/0) | – | 5/0%/0% | 17/0%/0% |
| trade:P4: Busker ↔ P1: Triplets | DEAD | 18 | 6% | 0% | 0% | – | – | – | 14.7 | 0% (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P4: Con Men ↔ P3: Chronicler | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 18/0%/0% |
| trade:P1: Loyalists ↔ P3: Chronicler | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 25/0%/0% |
| trade:P3: Chronicler ↔ P1: Loyalists | DEAD | 24 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 24/0%/0% |
| trade:P4: Scouts ↔ P3: Regular | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P4: Connoisseurs ↔ P3: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P2: Recruit Bonus ↔ P4: Roadie | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 16/0%/0% |
| trade:P4: Roadie ↔ P2: Recruit Bonus | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Timekeepers ↔ P3: Agents | DEAD | 25 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 17/0%/0% |
| trade:P3: Agents ↔ P2: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 8/0%/0% |
| trade:P2: Party Crasher ↔ Shop: Triplets | DEAD | 19 | 5% | 0% | 0% | – | – | – | 12.6 | 0% (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Clockmakers ↔ P3: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Con Men ↔ Shop: Shoplifter | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Triplets ↔ P3: Agents | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 17/0%/0% |
| trade:P3: Agents ↔ P2: Triplets | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 15/0%/0% |
| trade:P3: Recruit Bonus ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P2: Timekeepers ↔ Shop: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P1: Accomplice ↔ P3: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Accomplice | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P1: Dabblers ↔ P3: Critic | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P2: Muse ↔ P4: Busker | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P2: Connoisseurs ↔ P1: Recruit Bonus | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 11/0%/0% |
| trade:P4: Trendsetters ↔ P3: Roadie | DEAD | 21 | 10% | 0% | 0% | – | – | – | 25.9 | 0% (0/0) | – | 3/0%/0% | 18/0%/0% |
| trade:P2: Stunt Double ↔ P3: Chronicler | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P1: Cutpurse ↔ P3: Recruit Bonus | DEAD | 22 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 16/0%/0% |
| trade:P3: Recruit Bonus ↔ P1: Cutpurse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ P1: Cutpurse | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 14/0%/0% |
| trade:P2: Drifters ↔ P3: Volunteer | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 15/0%/0% |
| trade:P1: Triplets ↔ P4: Agents | DEAD | 17 | 6% | 0% | 0% | – | – | – | 1.6 | 0% (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Accomplice ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 13/0%/0% |
| trade:P4: Busker ↔ P2: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P4: Agents ↔ P2: Accomplice | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P3: Window Dressers ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P4: Drifters ↔ P2: Volunteer | DEAD | 19 | 5% | 0% | 0% | – | – | – | 21.6 | 100% (0/1) | – | 9/0%/0% | 10/0%/0% |
| trade:P4: Alchemists ↔ P2: Recluse | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 16/0%/0% |
| trade:P1: Early Birds ↔ P2: Drifters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P1: Recluse ↔ P4: Scouts | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 10/0%/0% |
| trade:P3: Loyalists ↔ Shop: Closer | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P4: Bouncers ↔ P2: Timekeepers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Busker ↔ P2: Muse | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 14/0%/0% |
| trade:P3: Early Birds ↔ P2: Volunteer | DEAD | 15 | 7% | 0% | 0% | – | – | – | 3.5 | 0% (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Bouncers ↔ P3: Polisher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P4: Stunt Double ↔ Shop: Hot Streak | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 16/0%/0% |
| trade:P4: Stunt Double ↔ P3: Busker | DEAD | 17 | 6% | 0% | 0% | – | – | – | 11.9 | 100% (0/1) | – | 4/0%/0% | 13/0%/0% |
| trade:P2: Timekeepers ↔ P3: Busker | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 13/0%/0% |
| trade:P3: Roadie ↔ Shop: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 12/0%/0% | 5/0%/0% |
| trade:P3: Party Crasher ↔ P4: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P2: Patriarch ↔ P1: Alchemists | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 3/0%/0% | 12/0%/0% |
| trade:P2: Bouncers ↔ P3: Shopkeeper | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 12/0%/0% |
| trade:P3: Shopkeeper ↔ P2: Bouncers | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |
| trade:P1: Dabblers ↔ P3: Early Birds | DEAD | 23 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 9/0%/0% | 14/0%/0% |
| trade:P3: Early Birds ↔ P1: Dabblers | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 10/0%/0% |
| trade:P4: Bouncers ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Recruit Bonus ↔ P3: Scouts | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P3: Scouts ↔ P1: Recruit Bonus | DEAD | 20 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 13/0%/0% |
| trade:P2: Stunt Double ↔ P3: Triplets | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P4: Busker ↔ P1: Accomplice | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 14/0%/0% |
| trade:P4: Roadie ↔ P1: Agents | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 18/0%/0% |
| trade:P2: Stunt Double ↔ P4: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P2: Stunt Double ↔ P4: Critic | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P2: Dabblers ↔ P3: Cashier | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 10/0%/0% |
| trade:P4: Connoisseurs ↔ P2: Recruit Bonus | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Kingpin ↔ P2: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 8/0%/0% |
| trade:P3: Chronicler ↔ P2: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P4: Timekeepers ↔ P3: Deprogrammers | DEAD | 19 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 13/0%/0% |
| trade:P1: Regular ↔ P4: Line Cutters | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 16/0%/0% |
| trade:P2: Raiders ↔ P3: Dabblers | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 17/0%/0% |
| trade:P3: Alchemists ↔ P1: Recluse | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 15/0%/0% |
| trade:P3: Agents ↔ P4: Early Birds | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| trade:P4: Early Birds ↔ P3: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 12/0%/0% |
| trade:P3: Chronicler ↔ P4: Recruit Bonus | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |
| trade:P4: Bouncers ↔ P3: Party Crasher | DEAD | 16 | 6% | 0% | 0% | – | – | – | 23.6 | 0% (0/0) | – | 1/0%/0% | 15/0%/0% |
| trade:P4: Timekeepers ↔ P2: Agents | DEAD | 17 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 15/0%/0% |

(46875 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| purple | 3491 | 25% | 2907 | 28% |
| market | 3428 | 21% | 3215 | 26% |
| benders | 0 | – | 2240 | 25% |
| trading | 3557 | 23% | 2849 | 24% |
| silver | 3562 | 20% | 2972 | 23% |
| yellow | 3178 | 20% | 2682 | 21% |
| red | 3654 | 20% | 3752 | 19% |
| thieves | 3676 | 19% | 3719 | 15% |
| echo | 3310 | 20% | 3520 | 14% |
