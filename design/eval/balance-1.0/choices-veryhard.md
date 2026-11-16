# Choice report

4963 looked-ahead decisions from 57 games (/mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00001.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00006.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00011.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00016.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00021.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00026.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00031.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00036.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00041.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00046.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00051.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00101.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00106.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00111.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00116.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00121.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00123.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00125.jsonl.choices, /mnt/project-files/balance-1.0/raw/veryhard/veryhard-4p-00127.jsonl.choices). 24% of all decisions were close calls.

How to read: for every decision the strong bot plays out a few options (its contenders) and keeps the one that ends best, in followers of margin. A **close call** is a decision where it and at least one other contender ended within 1.5 followers of the best: a real dilemma. An **auto-pick** is taken more than 5 followers ahead of the runner-up, or as the only contender while 3+ options were legal. **Solo** picks had no other contender: Normal's quick score ruled the rest out, so an auto-pick that is mostly solo is Normal's judgment, not the lookahead's. **Thin** picks came from a menu at most 50% of the usual size: taken because little else was left. **Regret** is how far behind the pick it ended when played out and passed over (small = nearly as good). **Disagree** is how often the cheap Normal bot's top pick and the lookahead's top pick split over this card; "under" means the lookahead liked it best and Normal didn't, "over" the reverse. High disagreement says Normal-bot numbers on it are suspect, not the card. Round columns read offered/chosen/close. Tags (offered >= 15): REAL CHOICE close >= 10%; AUTO-PICK auto >= 50% of picks and chosen >= 10%; FILLER thin >= 50% of picks and close < 5%; DEAD contender < 10% and chosen < 3%; MISJUDGED disagree >= 50% of 8+ scored appearances; MIXED none of these. Means from short rollouts are noisy: read a tag as a lead, not a verdict.

## Spaces

Each space on the wheel, as a place to send a minion.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| thieves: Poach | AUTO-PICK | 114 | 53% | 25% | 8% | 68% | 36% | 0% | 7.7 | 34% (10/7) | – | – | 114/25%/8% |
| purple: Last Call | AUTO-PICK | 241 | 56% | 17% | 5% | 60% | 0% | 7% | 11.4 | 38% (30/21) | – | 148/14%/3% | 93/23%/9% |
| red: Promote | AUTO-PICK | 218 | 59% | 22% | 5% | 64% | 26% | 4% | 13.0 | 38% (15/29) | – | 105/24%/7% | 113/19%/4% |
| thieves: Help Yourself | AUTO-PICK | 243 | 65% | 31% | 5% | 78% | 51% | 0% | 10.5 | 45% (21/32) | 29/97%/0% | 85/31%/2% | 129/17%/8% |
| silver: Largesse | AUTO-PICK | 245 | 33% | 13% | 4% | 50% | 0% | 0% | 8.5 | 34% (18/9) | – | – | 245/13%/4% |
| silver: Toast | AUTO-PICK | 679 | 53% | 15% | 4% | 69% | 18% | 2% | 13.1 | 37% (49/79) | 207/17%/5% | 281/12%/4% | 191/17%/5% |
| thieves: Stash | AUTO-PICK | 588 | 37% | 13% | 4% | 50% | 4% | 4% | 13.6 | 40% (56/30) | 165/16%/4% | 215/13%/4% | 208/11%/5% |
| thieves: Crime Wave | AUTO-PICK | 358 | 42% | 15% | 4% | 58% | 29% | 2% | 11.0 | 34% (19/27) | – | 196/15%/3% | 162/14%/6% |
| yellow: Big Dilute | AUTO-PICK | 267 | 41% | 13% | 4% | 57% | 29% | 6% | 11.2 | 33% (17/16) | – | 103/19%/3% | 164/9%/5% |
| echo: Cover | AUTO-PICK | 270 | 43% | 14% | 3% | 59% | 8% | 8% | 13.5 | 33% (21/16) | – | 134/13%/2% | 136/14%/4% |
| red: Demote | AUTO-PICK | 310 | 35% | 15% | 3% | 64% | 34% | 4% | 13.8 | 38% (20/16) | – | 161/15%/2% | 149/15%/4% |
| echo: Reprise | AUTO-PICK | 408 | 30% | 15% | 3% | 67% | 26% | 0% | 12.3 | 35% (21/16) | 122/16%/2% | 144/15%/2% | 142/14%/5% |
| red: Walk-In | AUTO-PICK | 518 | 43% | 13% | 3% | 73% | 44% | 9% | 15.0 | 33% (21/43) | 181/13%/3% | 165/12%/4% | 172/13%/3% |
| yellow: Harvest | AUTO-PICK | 442 | 36% | 12% | 3% | 61% | 27% | 8% | 11.6 | 36% (26/26) | 39/56%/5% | 162/9%/3% | 241/6%/2% |
| echo: Echo | AUTO-PICK | 284 | 46% | 21% | 2% | 77% | 38% | 0% | 12.1 | 39% (19/23) | 46/43%/2% | 123/17%/0% | 115/17%/3% |
| purple: Crowd In | MIXED | 168 | 45% | 12% | 7% | 35% | 10% | 0% | 12.2 | 33% (13/11) | – | – | 168/12%/7% |
| market: Peek | MIXED | 724 | 45% | 10% | 5% | 37% | 10% | 13% | 11.0 | 27% (56/29) | 214/12%/5% | 236/10%/6% | 274/8%/5% |
| market: Out of Style | MIXED | 795 | 36% | 9% | 5% | 42% | 6% | 13% | 11.5 | 33% (37/56) | 176/16%/5% | 275/7%/5% | 344/6%/5% |
| thieves: Shake Down | MIXED | 427 | 39% | 11% | 5% | 47% | 16% | 2% | 11.1 | 25% (21/18) | – | 164/16%/4% | 263/7%/6% |
| market: Savings | MIXED | 942 | 30% | 6% | 5% | 29% | 9% | 27% | 10.6 | 18% (37/14) | 204/14%/4% | 343/4%/4% | 395/3%/6% |
| echo: Build Up | MIXED | 558 | 39% | 9% | 4% | 58% | 11% | 11% | 12.5 | 30% (27/36) | 130/15%/5% | 223/8%/4% | 205/8%/5% |
| purple: Sleep In | MIXED | 541 | 53% | 12% | 4% | 48% | 13% | 8% | 12.9 | 33% (25/68) | 144/16%/5% | 157/13%/2% | 240/8%/5% |
| trading: Allowance | MIXED | 830 | 33% | 9% | 4% | 41% | 14% | 14% | 11.8 | 28% (50/24) | 199/16%/7% | 317/7%/4% | 314/7%/3% |
| silver: Party Favors | MIXED | 666 | 35% | 10% | 4% | 47% | 6% | 9% | 10.5 | 31% (35/34) | – | 264/13%/4% | 402/7%/4% |
| market: Bury | MIXED | 503 | 42% | 9% | 4% | 59% | 9% | 7% | 11.3 | 35% (30/43) | – | 194/13%/3% | 309/6%/5% |
| market: Recruit Twice | MIXED | 724 | 28% | 4% | 4% | 41% | 34% | 19% | 10.7 | 19% (15/22) | – | 376/3%/3% | 348/6%/5% |
| purple: Hold Up | MIXED | 740 | 36% | 8% | 4% | 52% | 12% | 29% | 11.0 | 20% (38/15) | 177/13%/3% | 241/8%/3% | 322/5%/4% |
| red: Tryout | MIXED | 656 | 31% | 9% | 4% | 70% | 34% | 18% | 12.1 | 33% (23/37) | 128/17%/5% | 218/8%/3% | 310/5%/4% |
| echo: Encore | MIXED | 440 | 30% | 8% | 3% | 62% | 24% | 14% | 10.8 | 34% (17/26) | – | 181/10%/1% | 259/7%/5% |
| red: Gather | MIXED | 746 | 25% | 8% | 3% | 52% | 9% | 26% | 11.7 | 37% (46/22) | 156/17%/4% | 300/5%/4% | 290/6%/2% |
| trading: Estate Sale | MIXED | 570 | 35% | 10% | 3% | 47% | 25% | 7% | 11.7 | 34% (18/44) | – | 284/11%/3% | 286/9%/4% |
| trading: Farewell | MIXED | 783 | 23% | 5% | 3% | 32% | 0% | 32% | 8.9 | 31% (23/33) | – | 423/4%/3% | 360/6%/4% |
| market: Spree | MIXED | 221 | 44% | 10% | 3% | 41% | 18% | 0% | 10.5 | 30% (8/20) | – | – | 221/10%/3% |
| yellow: Melting Pot | MIXED | 365 | 37% | 9% | 3% | 47% | 15% | 9% | 13.4 | 29% (16/22) | – | 186/9%/3% | 179/9%/3% |
| yellow: Trade Seeds | MIXED | 718 | 22% | 4% | 3% | 58% | 6% | 23% | 10.5 | 30% (17/30) | 145/14%/4% | 262/2%/2% | 311/2%/3% |
| thieves: Lie Low | MIXED | 763 | 23% | 9% | 3% | 56% | 24% | 7% | 9.1 | 32% (33/18) | 120/24%/3% | 298/8%/1% | 345/5%/3% |
| silver: Sweet Talk | MIXED | 784 | 25% | 7% | 3% | 56% | 16% | 16% | 12.7 | 32% (31/29) | – | 326/10%/3% | 458/5%/2% |
| silver: Party Gifts | MIXED | 1127 | 24% | 7% | 2% | 53% | 5% | 25% | 12.5 | 32% (47/37) | 307/9%/4% | 444/5%/1% | 376/8%/2% |
| trading: Exchange | MIXED | 1128 | 19% | 4% | 2% | 39% | 0% | 43% | 9.7 | 28% (32/26) | 296/6%/3% | 443/2%/1% | 389/5%/3% |
| red: Recruit a Member | MIXED | 205 | 37% | 10% | 2% | 55% | 10% | 5% | 11.1 | 36% (12/14) | – | – | 205/10%/2% |
| yellow: Dilute | MIXED | 671 | 24% | 6% | 2% | 59% | 22% | 17% | 12.6 | 23% (22/13) | 120/19%/3% | 261/3%/1% | 290/3%/3% |
| silver: Polish | MIXED | 1390 | 18% | 4% | 2% | 52% | 11% | 43% | 10.8 | 26% (29/34) | 320/9%/1% | 491/3%/2% | 579/2%/2% |
| yellow: Makeover | MIXED | 289 | 11% | 4% | 2% | 46% | 15% | 38% | 7.0 | 41% (10/2) | – | – | 289/4%/2% |
| echo: Greatest Hits | MIXED | 333 | 13% | 2% | 1% | 50% | 0% | 25% | 7.1 | 25% (6/5) | – | – | 333/2%/1% |
| purple: Right Away | FILLER | 935 | 22% | 4% | 5% | 21% | 12% | 58% | 7.3 | 16% (23/9) | 219/8%/4% | 334/2%/4% | 382/3%/5% |
| purple: Crunch Time | FILLER | 724 | 20% | 2% | 4% | 22% | 6% | 67% | 7.2 | 13% (12/7) | – | 319/3%/4% | 405/2%/4% |
| trading: Splurge | FILLER | 1238 | 15% | 3% | 2% | 26% | 0% | 65% | 8.9 | 17% (25/8) | 294/8%/4% | 434/1%/1% | 510/1%/2% |
| trading: Cash In | FILLER | 495 | 13% | 2% | 2% | 18% | 18% | 64% | 7.6 | 21% (6/7) | – | – | 495/2%/2% |

## Members

Each member as a buy, whenever it was in the shop and affordable.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Alchemists (benders) | REAL CHOICE | 221 | 89% | 14% | 16% | 27% | 0% | 3% | 11.0 | 29% (18/38) | – | 110/10%/17% | 111/17%/15% |
| Line Cutters (benders) | REAL CHOICE | 187 | 85% | 23% | 16% | 40% | 2% | 5% | 12.3 | 33% (8/44) | 141/21%/15% | 33/27%/24% | 13/38%/8% |
| Volunteer (red) | REAL CHOICE | 69 | 78% | 28% | 13% | 42% | 0% | 16% | 10.5 | 46% (12/13) | 24/42%/13% | 16/31%/19% | 29/14%/10% |
| Shift Crew (purple) | REAL CHOICE | 110 | 51% | 11% | 12% | 0% | 0% | 0% | 10.3 | 29% (9/7) | 32/6%/0% | 36/14%/19% | 42/12%/14% |
| Snobs (market) | REAL CHOICE | 87 | 69% | 23% | 11% | 30% | 5% | 0% | 12.5 | 24% (8/6) | – | 40/25%/13% | 47/21%/11% |
| Window Dressers (market) | REAL CHOICE | 115 | 76% | 14% | 11% | 31% | 6% | 0% | 10.0 | 26% (5/17) | 18/6%/0% | 70/14%/13% | 27/19%/15% |
| Early Birds (purple) | REAL CHOICE | 159 | 66% | 7% | 11% | 18% | 0% | 9% | 9.5 | 21% (5/17) | 46/9%/9% | 38/11%/18% | 75/4%/8% |
| Recruit Bonus (red) | REAL CHOICE | 179 | 69% | 8% | 10% | 36% | 0% | 0% | 12.2 | 21% (5/21) | 111/3%/12% | 15/33%/7% | 53/11%/8% |
| Fan Club (echo) | AUTO-PICK | 40 | 85% | 40% | 15% | 69% | 31% | 0% | 11.7 | 41% (4/8) | – | 23/48%/9% | 17/29%/24% |
| Cutpurse (thieves) | AUTO-PICK | 66 | 61% | 35% | 14% | 57% | 35% | 9% | 9.8 | 31% (4/6) | 27/48%/15% | 11/55%/27% | 28/14%/7% |
| Shopkeeper (trading) | AUTO-PICK | 52 | 94% | 52% | 12% | 81% | 11% | 0% | 9.3 | 28% (4/9) | 21/76%/0% | 14/50%/21% | 17/24%/18% |
| Chronicler (echo) | AUTO-PICK | 86 | 86% | 17% | 10% | 53% | 7% | 0% | 9.9 | 22% (4/12) | – | 43/14%/12% | 43/21%/9% |
| Doppelganger (echo) | AUTO-PICK | 58 | 72% | 22% | 10% | 69% | 31% | 0% | 11.7 | 34% (6/7) | – | 33/24%/12% | 25/20%/8% |
| Gardener (yellow) | AUTO-PICK | 43 | 72% | 33% | 9% | 64% | 57% | 0% | 10.8 | 43% (4/6) | 15/60%/7% | 11/36%/18% | 17/6%/6% |
| Con Men (benders) | AUTO-PICK | 55 | 89% | 76% | 9% | 74% | 52% | 0% | 5.9 | 30% (5/3) | – | 24/96%/4% | 31/61%/13% |
| Loyalists (red) | AUTO-PICK | 101 | 71% | 12% | 8% | 50% | 0% | 8% | 9.0 | 25% (6/12) | – | 17/6%/6% | 84/13%/8% |
| Philanthropists (silver) | AUTO-PICK | 107 | 81% | 22% | 7% | 63% | 0% | 0% | 13.9 | 36% (9/22) | – | 45/29%/4% | 62/18%/10% |
| Heiresses (trading) | AUTO-PICK | 71 | 35% | 14% | 7% | 50% | 0% | 0% | 16.2 | 40% (8/2) | – | 45/16%/4% | 26/12%/12% |
| Busker (echo) | AUTO-PICK | 58 | 74% | 33% | 7% | 53% | 21% | 0% | 10.3 | 26% (3/7) | 28/39%/4% | 3/67%/0% | 27/22%/11% |
| Drifters (yellow) | AUTO-PICK | 116 | 53% | 12% | 7% | 57% | 7% | 0% | 14.6 | 20% (4/8) | 47/21%/11% | 17/18%/0% | 52/2%/6% |
| Dyer (yellow) | AUTO-PICK | 61 | 51% | 13% | 7% | 50% | 13% | 0% | 8.5 | 17% (2/3) | – | 15/33%/0% | 46/7%/9% |
| Patriarch (red) | AUTO-PICK | 77 | 68% | 19% | 6% | 60% | 13% | 0% | 12.1 | 30% (5/10) | – | 54/11%/7% | 23/39%/4% |
| Roadie (echo) | AUTO-PICK | 34 | 82% | 47% | 6% | 81% | 31% | 0% | 11.8 | 26% (2/4) | 24/46%/4% | 3/100%/0% | 7/29%/14% |
| Caravan (yellow) | AUTO-PICK | 34 | 65% | 24% | 6% | 50% | 13% | 0% | 12.5 | 33% (3/4) | – | 8/50%/0% | 26/15%/8% |
| Polisher (silver) | AUTO-PICK | 227 | 58% | 12% | 5% | 59% | 0% | 0% | 10.9 | 22% (16/13) | 125/8%/6% | 32/28%/9% | 70/11%/3% |
| Grifter (thieves) | AUTO-PICK | 97 | 59% | 14% | 5% | 71% | 43% | 0% | 10.6 | 33% (3/14) | – | 56/13%/5% | 41/17%/5% |
| Panel (red) | AUTO-PICK | 42 | 60% | 31% | 5% | 62% | 46% | 0% | 21.7 | 32% (2/4) | – | 33/33%/6% | 9/22%/0% |
| Stunt Double (echo) | AUTO-PICK | 22 | 91% | 59% | 5% | 77% | 54% | 0% | 19.7 | 8% (1/0) | – | 19/58%/0% | 3/67%/33% |
| Mob (red) | AUTO-PICK | 30 | 80% | 33% | 3% | 70% | 40% | 0% | 16.1 | 25% (0/5) | – | 5/20%/0% | 25/36%/4% |
| Accomplice (thieves) | AUTO-PICK | 39 | 74% | 62% | 3% | 88% | 58% | 0% | 6.9 | 20% (1/2) | 17/65%/0% | 7/100%/0% | 15/40%/7% |
| Tribute Band (echo) | AUTO-PICK | 25 | 20% | 12% | 0% | 100% | 0% | 0% | 17.8 | 60% (3/0) | – | 6/0%/0% | 19/16%/0% |
| Dabblers (benders) | MIXED | 311 | 81% | 12% | 10% | 28% | 0% | 3% | 11.9 | 30% (14/61) | 189/7%/10% | 67/24%/10% | 55/13%/9% |
| Connoisseurs (market) | MIXED | 161 | 63% | 9% | 10% | 29% | 7% | 0% | 10.9 | 18% (10/8) | 58/3%/3% | 53/9%/13% | 50/14%/14% |
| Old Money (trading) | MIXED | 151 | 73% | 13% | 10% | 21% | 0% | 0% | 9.6 | 23% (9/16) | – | 80/10%/8% | 71/15%/13% |
| Kingpin (thieves) | MIXED | 141 | 67% | 9% | 10% | 31% | 8% | 0% | 9.5 | 30% (5/23) | 72/6%/4% | 11/18%/18% | 58/12%/16% |
| Agents (echo) | MIXED | 86 | 77% | 17% | 9% | 47% | 0% | 7% | 13.6 | 32% (7/14) | 55/13%/13% | 23/26%/4% | 8/25%/0% |
| Regular (market) | MIXED | 170 | 59% | 8% | 9% | 14% | 7% | 0% | 9.5 | 13% (8/5) | 53/4%/8% | 33/12%/6% | 84/10%/11% |
| Triplets (red) | MIXED | 169 | 53% | 9% | 8% | 19% | 0% | 0% | 11.3 | 21% (11/8) | 95/5%/6% | 59/14%/12% | 15/20%/7% |
| Scouts (benders) | MIXED | 344 | 71% | 9% | 8% | 37% | 0% | 7% | 10.8 | 22% (16/37) | 153/6%/9% | 50/22%/18% | 141/7%/3% |
| Doormen (market) | MIXED | 143 | 65% | 9% | 8% | 31% | 0% | 0% | 10.0 | 20% (11/8) | – | 64/8%/5% | 79/10%/10% |
| Timekeepers (purple) | MIXED | 131 | 62% | 9% | 8% | 17% | 0% | 0% | 11.6 | 28% (7/16) | 44/11%/9% | 40/8%/5% | 47/9%/9% |
| Trendsetters (market) | MIXED | 172 | 80% | 10% | 8% | 33% | 0% | 0% | 11.4 | 20% (7/21) | 66/2%/6% | 75/16%/9% | 31/16%/6% |
| High Society (silver) | MIXED | 108 | 74% | 13% | 7% | 43% | 0% | 0% | 15.0 | 24% (5/14) | – | 50/12%/2% | 58/14%/12% |
| Hot Streak (purple) | MIXED | 111 | 44% | 5% | 7% | 0% | 0% | 0% | 9.5 | 14% (6/1) | – | 49/4%/2% | 62/6%/11% |
| Toastmaster (silver) | MIXED | 276 | 58% | 6% | 7% | 24% | 0% | 6% | 11.1 | 19% (14/16) | 108/5%/6% | 59/14%/12% | 109/4%/6% |
| Debt Collectors (silver) | MIXED | 137 | 32% | 11% | 7% | 47% | 0% | 0% | 11.3 | 34% (15/0) | – | 47/15%/6% | 90/9%/7% |
| Martyrs (trading) | MIXED | 140 | 69% | 10% | 6% | 43% | 0% | 0% | 12.1 | 22% (9/12) | 58/3%/5% | 35/11%/9% | 47/17%/6% |
| Mentor & Protégés (red) | MIXED | 80 | 49% | 13% | 6% | 20% | 0% | 0% | 13.1 | 31% (6/6) | – | 22/9%/9% | 58/14%/5% |
| Recluse (trading) | MIXED | 145 | 60% | 12% | 6% | 47% | 0% | 0% | 12.3 | 26% (7/16) | 63/5%/6% | 35/20%/3% | 47/15%/9% |
| Deprogrammers (red) | MIXED | 65 | 83% | 31% | 6% | 35% | 10% | 0% | 12.8 | 37% (6/13) | 37/30%/8% | 7/43%/0% | 21/29%/5% |
| Raiders (trading) | MIXED | 166 | 49% | 5% | 6% | 33% | 0% | 0% | 10.2 | 13% (6/5) | – | 48/6%/4% | 118/5%/7% |
| Clockmakers (purple) | MIXED | 151 | 64% | 4% | 6% | 17% | 0% | 0% | 9.8 | 20% (4/15) | – | 51/4%/6% | 100/4%/6% |
| Brokers (trading) | MIXED | 120 | 67% | 15% | 6% | 39% | 0% | 0% | 10.4 | 20% (9/7) | – | 54/20%/4% | 66/11%/8% |
| Bouncers (purple) | MIXED | 122 | 69% | 16% | 6% | 32% | 0% | 0% | 13.2 | 21% (12/6) | 48/6%/2% | 41/17%/2% | 33/27%/15% |
| Critic (market) | MIXED | 213 | 61% | 6% | 6% | 54% | 15% | 0% | 9.8 | 10% (5/8) | 94/3%/3% | 39/13%/3% | 80/6%/10% |
| HR (benders) | MIXED | 127 | 66% | 20% | 6% | 40% | 8% | 0% | 12.2 | 30% (7/18) | – | 56/4%/4% | 71/32%/7% |
| Anarchist (benders) | MIXED | 288 | 32% | 7% | 5% | 21% | 0% | 0% | 9.5 | 26% (17/7) | – | 80/10%/9% | 208/5%/4% |
| Party Crasher (benders) | MIXED | 398 | 59% | 7% | 5% | 56% | 0% | 4% | 10.9 | 12% (19/9) | 170/1%/2% | 76/14%/8% | 152/9%/7% |
| Cashier (trading) | MIXED | 279 | 38% | 4% | 5% | 0% | 0% | 10% | 9.7 | 15% (8/8) | 60/2%/5% | 78/3%/1% | 141/5%/7% |
| Window Shopper (market) | MIXED | 193 | 53% | 7% | 5% | 36% | 7% | 0% | 9.7 | 23% (6/17) | – | 53/11%/8% | 140/6%/4% |
| Big Tent (yellow) | MIXED | 66 | 59% | 8% | 5% | 20% | 0% | 0% | 15.0 | 15% (1/5) | – | 50/6%/2% | 16/13%/13% |
| Collector (silver) | MIXED | 208 | 30% | 3% | 4% | 33% | 0% | 0% | 9.9 | 10% (5/1) | 30/0%/0% | 66/3%/5% | 112/4%/4% |
| Proselytizers (red) | MIXED | 134 | 41% | 5% | 4% | 57% | 0% | 0% | 13.3 | 16% (5/4) | – | 70/4%/4% | 64/6%/3% |
| Exporters (trading) | MIXED | 190 | 42% | 2% | 4% | 33% | 0% | 0% | 11.8 | 8% (3/3) | – | 62/3%/3% | 128/1%/4% |
| Gossip (purple) | MIXED | 109 | 41% | 3% | 4% | 67% | 0% | 0% | 10.4 | 11% (3/2) | – | 49/0%/0% | 60/5%/7% |
| Sticky Fingers (thieves) | MIXED | 166 | 36% | 5% | 4% | 63% | 0% | 0% | 9.2 | 17% (6/4) | 35/0%/3% | 40/13%/5% | 91/3%/3% |
| Closer (purple) | MIXED | 170 | 36% | 2% | 4% | 0% | 0% | 0% | 7.3 | 6% (3/1) | – | 19/16%/11% | 151/0%/3% |
| Ringleader (yellow) | MIXED | 97 | 53% | 9% | 3% | 33% | 0% | 0% | 15.4 | 24% (4/8) | – | 43/5%/0% | 54/13%/6% |
| Muse (echo) | MIXED | 168 | 51% | 6% | 3% | 50% | 0% | 0% | 11.1 | 14% (10/2) | 65/0%/2% | 35/20%/3% | 68/4%/4% |
| Double Agent (thieves) | MIXED | 76 | 43% | 9% | 3% | 57% | 14% | 0% | 13.7 | 28% (3/6) | – | 39/8%/0% | 37/11%/5% |
| Desperado (thieves) | MIXED | 116 | 45% | 8% | 3% | 44% | 0% | 0% | 14.2 | 12% (6/0) | – | 60/8%/2% | 56/7%/4% |
| Harmonist (yellow) | MIXED | 78 | 26% | 5% | 3% | 50% | 0% | 0% | 11.4 | 15% (3/0) | – | 39/8%/3% | 39/3%/3% |
| Night Owls (purple) | MIXED | 41 | 22% | 2% | 2% | 0% | 0% | 0% | 11.9 | 22% (1/1) | – | 22/0%/0% | 19/5%/5% |
| Patroness (market) | MIXED | 86 | 19% | 2% | 2% | 0% | 0% | 0% | 15.7 | 13% (2/0) | – | 43/0%/0% | 43/5%/5% |
| Extra Hand (benders) | MIXED | 262 | 19% | 4% | 2% | 55% | 0% | 0% | 11.2 | 22% (11/0) | – | 88/0%/0% | 174/6%/3% |
| Bodyguards (thieves) | MIXED | 52 | 13% | 0% | 2% | – | – | – | 14.7 | 0% (0/0) | – | 28/0%/0% | 24/0%/4% |
| Smooth Talkers (silver) | MIXED | 160 | 28% | 2% | 2% | 33% | 0% | 0% | 13.9 | 4% (2/0) | – | 33/3%/0% | 127/2%/2% |
| Tastemaker (yellow) | MIXED | 111 | 13% | 2% | 2% | 0% | 0% | 0% | 14.0 | 14% (2/0) | – | 4/0%/0% | 107/2%/2% |
| Customs (yellow) | MIXED | 172 | 23% | 1% | 2% | 0% | 0% | 0% | 11.9 | 10% (2/2) | 46/0%/0% | 30/0%/0% | 96/2%/3% |
| Gift Wrapper (silver) | MIXED | 184 | 30% | 3% | 2% | 60% | 0% | 0% | 14.5 | 7% (3/1) | – | 39/10%/3% | 145/1%/1% |
| Shopaholics (market) | MIXED | 130 | 28% | 2% | 2% | 33% | 0% | 0% | 14.8 | 11% (3/1) | – | 34/0%/0% | 96/3%/2% |
| Debutantes (silver) | MIXED | 153 | 29% | 3% | 1% | 0% | 0% | 0% | 10.9 | 11% (4/1) | – | 62/0%/0% | 91/4%/2% |
| Extortionist (thieves) | MIXED | 100 | 47% | 4% | 1% | 75% | 25% | 0% | 10.6 | 28% (0/13) | – | 42/7%/2% | 58/2%/0% |
| Hangers-On (silver) | MIXED | 204 | 37% | 1% | 1% | 50% | 0% | 0% | 10.2 | 3% (1/1) | – | 61/2%/0% | 143/1%/1% |
| Go-Between (yellow) | MIXED | 105 | 53% | 8% | 1% | 38% | 0% | 0% | 11.7 | 21% (8/4) | 36/8%/0% | 42/7%/2% | 27/7%/0% |
| Courier (purple) | MIXED | 107 | 30% | 7% | 1% | 43% | 0% | 0% | 9.2 | 19% (5/1) | – | 27/7%/0% | 80/6%/1% |
| Hoarder (trading) | MIXED | 121 | 28% | 0% | 1% | – | – | – | 17.5 | 3% (0/1) | – | 45/0%/2% | 76/0%/0% |
| Shoplifter (thieves) | MIXED | 152 | 16% | 1% | 1% | 0% | 0% | 0% | 13.7 | 4% (1/0) | – | 62/0%/0% | 90/1%/1% |
| Wallflower (echo) | MIXED | 73 | 14% | 1% | 0% | 100% | 0% | 0% | 15.8 | 10% (1/0) | – | 29/0%/0% | 44/2%/0% |
| Old Maid (benders) | DEAD | 543 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 157/0%/0% | 386/0%/0% |

## Member uses

Each member's own action, when using it was an option.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scouts (benders) | DEAD | 347 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 18/0%/0% | 68/0%/0% | 261/0%/0% |
| Raiders (trading) | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 5/0%/0% | 13/0%/0% |
| Polisher (silver) | DEAD | 39 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 5/0%/0% | 27/0%/0% | 7/0%/0% |
| Hot Streak (purple) | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 14/0%/0% |
| Debt Collectors (silver) | THIN DATA | 3 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 3/0%/0% |
| Anarchist (benders) | THIN DATA | 8 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 8/0%/0% |
| Extra Hand (benders) | THIN DATA | 3 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 1/0%/0% |
| Tribute Band (echo) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | – | 6/0%/0% |
| Party Crasher (benders) | THIN DATA | 6 | 0% | 0% | 0% | – | – | – | – | – (0/0) | 4/0%/0% | 2/0%/0% | – |
| Heiresses (trading) | THIN DATA | 2 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 1/0%/0% | 1/0%/0% |

## Everything else

Follower buys, passes and the other small choices.

| card | tag | offered | contender | chosen | close | auto | solo | thin | regret | disagree (under/over) | I | II | III |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| followers:small | REAL CHOICE | 2403 | 60% | 13% | 13% | 27% | 0% | 8% | 9.7 | 24% (232/111) | 640/16%/18% | 790/17%/16% | 973/8%/7% |
| pass:Pass | REAL CHOICE | 2403 | 61% | 23% | 12% | 49% | 9% | 14% | 8.5 | 28% (253/136) | 640/49%/18% | 790/24%/16% | 973/6%/6% |
| followers:mid | MIXED | 2141 | 44% | 8% | 8% | 14% | 0% | 1% | 8.5 | 18% (121/51) | 390/0%/0% | 784/3%/4% | 967/15%/13% |
| followers:top | MIXED | 1663 | 32% | 12% | 6% | 23% | 0% | 1% | 7.9 | 29% (47/107) | 34/0%/0% | 687/0%/1% | 942/21%/10% |
| trade:P1: Line Cutters ↔ P3: Volunteer | MIXED | 15 | 13% | 0% | 0% | – | – | – | 9.4 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| trade:P4: Alchemists ↔ P2: Triplets | MIXED | 15 | 13% | 0% | 0% | – | – | – | 11.8 | 0% (0/0) | – | 1/0%/0% | 14/0%/0% |
| pass:Don’t swap | DEAD | 187 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 94/0%/0% | 93/0%/0% |
| trade:P2: Triplets ↔ P4: Polisher | DEAD | 21 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 8/0%/0% | 13/0%/0% |
| trade:P4: Polisher ↔ P2: Triplets | DEAD | 18 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 7/0%/0% | 11/0%/0% |
| trade:P2: Triplets ↔ P1: Line Cutters | DEAD | 18 | 6% | 0% | 0% | – | – | – | 20.1 | 0% (0/0) | – | 1/0%/0% | 17/0%/0% |
| trade:P4: Polisher ↔ P1: Line Cutters | DEAD | 16 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 2/0%/0% | 14/0%/0% |
| trade:P3: Dabblers ↔ P4: Line Cutters | DEAD | 26 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 10/0%/0% | 16/0%/0% |
| trade:P3: Scouts ↔ P4: Line Cutters | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 6/0%/0% | 9/0%/0% |
| trade:P3: Brokers ↔ P4: Party Crasher | DEAD | 15 | 0% | 0% | 0% | – | – | – | – | – (0/0) | – | 4/0%/0% | 11/0%/0% |

(11452 rarer options offered under 15 times left out; they are in --json.)

## Colors

How often a color's decisions were close calls: by seats playing that color, and by decisions where that color's space or member was taken.

| color | seat decisions | close | picks of this color | close |
|---|---|---|---|---|
| market | 465 | 24% | 422 | 29% |
| purple | 385 | 22% | 314 | 28% |
| benders | 0 | – | 263 | 27% |
| trading | 497 | 23% | 385 | 25% |
| silver | 587 | 21% | 505 | 19% |
| red | 389 | 17% | 430 | 17% |
| yellow | 320 | 18% | 279 | 17% |
| thieves | 431 | 20% | 450 | 16% |
| echo | 351 | 20% | 377 | 13% |
