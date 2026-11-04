# Ranking (r1): worst first

From 3 blind paper judges (judge-1.json, judge-2.json, judge-3.json), median total of 20. Bar: 13 or more, no 0 on Clear, Feels good or Fun, no hard fail from 2+ judges. Made by scripts/quality/ranking.mjs.

## Checks on the judges

- Agreement (rank correlation per judge pair, bar 0.6): members 0.77, 0.78, 0.75; spaces 0.81, 0.73, 0.75. Passed.
- Planted cards: Night Shift (bad) 1/146 from worst; Envy (bad) 2/146 from worst; Clerk (bad) 4/146 from worst; Scavenger (good) 130/146 from worst. All caught.
- Cory's past calls, held-out half B, cards unchanged since he spoke (bar 70%): B: 8/11 disliked in the bottom half, 15/18 liked in the top half (79%). Passed. Half A (may appear in prompts, so not a test): A: 4/12 disliked in the bottom half, 5/14 liked in the top half (35%).
- Cory's past calls, all: all: 12/27 disliked in the bottom half, 21/34 liked in the top half (54%); leaving out cards reworked since he spoke: not stale: 12/23 disliked in the bottom half, 20/32 liked in the top half (58%).
- Half B misses (read before fixing; the judge may be right): Party Gifts (disliked, 51/54 from worst), Big Tent (disliked, 127/145 from worst), Old Maid (disliked, 112/145 from worst), Stunt Double (liked, 53/145 from worst), Gardener (liked, 2/145 from worst), Pocket Watch (liked, 63/145 from worst).

## Members (145; 92 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Alchemists | gold | 9 | 7/11/9 | UNDER | hard fail x3: plural name on a single member (worth 1); 0 on C3 0 on C4 | +1 gold per other-color gain is a trickle; the name clash confuses the table. |
| 2 | Gardener | yellow | 13 | 12/14/13 | UNDER | hard fail x3: singular name on a member that counts as 2; 0 on C4 | Fills color gaps each round; decent, quiet. |
| 3 | Underdog | gold | 14 | 12/14/14 | UNDER | hard fail x3: relies on a rival having more gold than you | Only works while a rival holds more gold than you. |
| 4 | Merchant | gold | 6 | 6/7/6 | UNDER | 0 on C3 0 on C4 | +1 gold when anyone recruits a gold member; narrow and forgettable. |
| 5 | Customs Officer | yellow | 6 | 6/7/6 | UNDER | 0 on C3 0 on C4 | +1 yellow when rivals steal or change your stuff; a small consolation. |
| 6 | Regular | blue | 6 | 6/10/6 | UNDER | 0 on C3 0 on C4 | +1 blue per follower buy; dull. |
| 7 | Shift Crew | purple | 6 | 6/6/6 | UNDER | 0 on C4 | Four followers for 4 resources: a vanilla must-buy with nothing to it. |
| 8 | Crew | magenta | 7 | 8/7/5 | UNDER | 0 on C3 0 on C4 | A vanilla 2-follower body; nobody reacts. |
| 9 | Extra Shift | purple | 7 | 7/9/7 | UNDER | 0 on C4 | Nine resources for one extra minion once; worse than Go-Getter in every way. |
| 10 | Extra Hand | guests | 7 | 7/9/7 | UNDER | 0 on C4 | Nine for a once-per-game minion; overpriced. |
| 11 | Volunteer | red | 8 | 8/10/7 | UNDER | 0 on C3 0 on C4 | One follower for one red; filler with no moment. |
| 12 | Recruiter | red | 8 | 8/11/8 | UNDER | 0 on C3 0 on C4 | +1 red per recruit; a forgettable trickle. |
| 13 | Collector | silver | 8 | 6/8/8 | UNDER | 0 on C3 0 on C4 | +1 silver when a rival pays silver; nobody notices. |
| 14 | Tinker | yellow | 8 | 5/11/8 | UNDER | 0 on C3 0 on C4 | Swapping resources one for one is fiddly for a tiny gain. |
| 15 | Connoisseurs | blue | 8 | 8/10/8 | UNDER | 0 on C3 0 on C4 | +1 blue per blue recruit; a small trickle. |
| 16 | Exporters | white | 8 | 8/10/8 | UNDER | 0 on C3 0 on C4 | +1 white on off-color recruits; trickle. |
| 17 | Muse | green | 8 | 7/8/8 | UNDER | 0 on C3 0 on C4 | +1 green when a rival copies; tiny and nobody notices. |
| 18 | Impressionist | green | 8 | 8/9/8 | UNDER | protected; 0 on C3 0 on C4 | +1 of the color on any copy; trickle. |
| 19 | Cheerleader | guests | 8 | 8/8/8 | UNDER | 0 on C3 0 on C4 | +1 per contest won; trivial next to the prize. |
| 20 | Timekeeper | purple | 8 | 10/8/8 | UNDER | 0 on C4 | Generic per-member-of-my-color end scorer. |
| 21 | Critic | blue | 8 | 8/8/11 | UNDER | 0 on C3 | Follower when rivals take blue members; passive. |
| 22 | Kingpin | magenta | 8 | 10/8/8 | UNDER | 0 on C4 | Generic per-member-of-my-color end scorer. |
| 23 | Old Money | white | 8 | 10/8/7 | UNDER | 0 on C4 | Generic per-white-member end scorer. |
| 24 | Chronicler | green | 8 | 9/8/8 | UNDER | 0 on C4 | The generic per-member-of-my-color scorer every color has; nothing green about it. |
| 25 | Prospector | gold | 9 | 9/10/7 | UNDER | 0 on C3 0 on C4 | +1 gold on gold gains: a small trigger that never feels like a moment. |
| 26 | Caterer | silver | 9 | 9/9/9 | UNDER | 0 on C3 0 on C4 | +1 silver whenever silver is gifted; a minor trickle. |
| 27 | Go-Between | yellow | 9 | 8/13/9 | UNDER | 0 on C3 0 on C4 | Small conversion convenience. |
| 28 | Money Changers | white | 9 | 8/13/9 | UNDER | 0 on C3 0 on C4 | Trickle from everyone's buys. |
| 29 | Triplets | red | 9 | 12/9/9 | UNDER | 0 on C4 | Three bodies for 3; must-buy value with no ability. |
| 30 | Book Cookers | yellow | 9 | 8/11/9 | UNDER | 0 on C4 | Makeover on a card at 10 resources; not worth it. |
| 31 | Guest Book | yellow | 10 | 10/10/12 | UNDER | 0 on C3 0 on C4 | Cheap +2 yellow on new colors; efficient but forgettable. |
| 32 | Banker | gold | 10 | 9/10/10 | UNDER | 0 on C4 | Steady +3 gold; plain income at a high price. |
| 33 | Treasurer | gold | 10 | 10/11/10 | UNDER | 0 on C4 | Pays more the later you buy it, a clean timing choice, but no one else feels it. |
| 34 | Greeters | red | 10 | 9/10/12 | UNDER | 0 on C4 | Extra resource on your On Recruits; 'that member's color' is unclear for grey. |
| 35 | Toastmaster | silver | 10 | 9/12/10 | UNDER | 0 on C4 | Cheap follower per Silver space; plain. |
| 36 | Harmonist | yellow | 10 | 10/12/10 | UNDER | 0 on C4 | Full sets at game end; hard to read at a glance. |
| 37 | Dyer | yellow | 10 | 10/12/9 | UNDER | 0 on C4 | Yellow per color held; quiet income. |
| 38 | Snobs | blue | 10 | 10/8/11 | UNDER | 0 on C4 | Generic blue-member scorer. |
| 39 | Landlord | white | 10 | 11/10/8 | UNDER | 0 on C4 | Steady +2 white income; works the same in any cult. |
| 40 | Heiresses | white | 10 | 10/11/8 | UNDER | 0 on C4 | Once-per-game white per member; small for 9. |
| 41 | Busker | green | 10 | 11/10/8 | UNDER | 0 on C4 | Steady +2 green income; fine and cheap, but works the same in any cult. |
| 42 | Debt Collectors | silver | 10 | 9/11/10 | UNDER |  | Taking from everyone is off-theme for the giving color. |
| 43 | Bargain Bin | blue | 11 | 10/11/13 | UNDER | 0 on C3 0 on C4 | +1 blue per bury; tiny, and whether the between-rounds row counts is unclear. |
| 44 | Tax Collector | gold | 11 | 6/13/11 | UNDER | 0 on C3 | Ties to everyone's follower buys, but +1 gold for 9 resources is too little to want. |
| 45 | Host | red | 11 | 10/11/11 | UNDER | 0 on C4 | Red per 2 members each round; plain scaling income. |
| 46 | Patriarch | red | 11 | 11/10/11 | UNDER | 0 on C4 | A member-count scorer that rewards wide cults; quiet. |
| 47 | Polisher | silver | 11 | 7/11/12 | UNDER | 0 on C4 | A one-time Polish; cheap, copies the space. |
| 48 | Spice Route | yellow | 11 | 11/12/11 | UNDER | 0 on C4 | Game end per color with 3 or more; pulls against spending. |
| 49 | Misers | white | 11 | 10/11/12 | UNDER | 0 on C4 | End scoring on held white pulls against Cash In, a real choice, but rewards the hoarder. |
| 50 | Roadie | green | 11 | 11/11/9 | UNDER | 0 on C4 | Green per green member; quiet engine. |
| 51 | Stunt Double | green | 11 | 11/16/11 | UNDER | protected; 0 on C4 | Copy your own just-taken action; a sibling of Understudy. |
| 52 | Big Spender | guests | 11 | 11/12/10 | UNDER | 0 on C4 | One extra buy once; cheap and quiet. |
| 53 | Launderers | guests | 11 | 11/15/11 | UNDER | 0 on C4 | Rearrange on arrival with three bodies; good value, quiet. |
| 54 | Dabblers | guests | 11 | 13/11/9 | UNDER | 0 on C4 | 'Wild member' needs a ruling on which counts it joins; quiet value for set and per-color scorers. |
| 55 | Closer | purple | 11 | 11/15/10 | UNDER |  | +4 purple for placing the round's last minion; a small turn-order race. |
| 56 | Grifter | magenta | 11 | 11/11/10 | UNDER |  | Scaling steal on recruit; expensive for one hit. |
| 57 | Alchemists | guests | 11 | 11/16/10 | UNDER | 0 on C4 | Resources count as any when recruiting; strong for 5 but unclear about colored parts. |
| 58 | Tycoon | gold | 12 | 10/12/12 | UNDER | 0 on C4 | End followers from held gold; a hoard-versus-spend pull that rewards the leader. |
| 59 | Proselytizers | red | 12 | 11/14/12 | UNDER | 0 on C4 | Follower per recruit is a clean engine for red's free recruits; quiet at the table. |
| 60 | Courier | purple | 12 | 12/14/12 | UNDER | 0 on C4 | Rewards double turns with a rainbow; combos with snake ends and Crunch Time but nobody else feels it. |
| 61 | Pocket Watch | purple | 12 | 13/12/12 | UNDER | 0 on C4 | +2 purple on any skip; a small engine with Hold Up and Bouncers. |
| 62 | Gossip | purple | 12 | 12/11/12 | UNDER | 0 on C4 | A follower per skip, a sibling of Pocket Watch that pays a bit better. |
| 63 | Patroness | blue | 12 | 10/15/12 | UNDER | 0 on C4 | Followers on every bury; the row refresh between rounds may surprise owners with how much it pays. |
| 64 | Plus-Ones | blue | 12 | 13/12/12 | UNDER | 0 on C4 | Worth 2 and a free extra recruit; good value, quiet. |
| 65 | Hoarder | white | 12 | 12/14/9 | UNDER | 0 on C4 | Everything into white once; a contest swing with timing. |
| 66 | Ensemble | green | 12 | 12/12/12 | UNDER | 0 on C4 | Three bodies and follower on self-copies; efficient. |
| 67 | Early Birds | purple | 12 | 13/12/8 | UNDER |  | Immunity to skips; a quiet block. |
| 68 | Hangers-On | silver | 12 | 10/14/12 | UNDER |  | Pays off rivals' gifts, but too dear for how rarely it fires. |
| 69 | Smooth Talkers | silver | 12 | 12/13/11 | UNDER | 0 on C4 | Silver as a wild color frees the economy, but costs 11 and is invisible to rivals. |
| 70 | High Society | silver | 12 | 12/14/12 | UNDER |  | Pays when rivals take silver spaces; a passive tax with nothing to decide. |
| 71 | Accomplice | magenta | 12 | 12/12/13 | UNDER |  | Cheap three-steal on arrival; good value, one moment. |
| 72 | Shoplifter | magenta | 12 | 10/14/12 | UNDER |  | Steal on every recruit; small but steady. |
| 73 | Fence | magenta | 12 | 13/10/12 | UNDER |  | Profit when robbed; passive. |
| 74 | Understudy | green | 12 | 12/11/15 | UNDER |  | Copy last turn's action on arrival; timing choice, one moment. |
| 75 | Speculator | gold | 12 | 12/12/14 | UNDER |  | A once-per-game doubling with good timing tension, but it is Double Down on a card. |
| 76 | Bodyguards | magenta | 12 | 12/12/12 | UNDER |  | Theft immunity is a clear block but shuts out interaction. |
| 77 | Agents | green | 12 | 12/13/8 | UNDER | protected | Blocks copies; a clear counter. |
| 78 | Line Cutters | guests | 12 | 12/10/13 | UNDER |  | Three bodies for 2 that override the catch-up turn order; a must-buy that helps the leader. |
| 79 | Gift Wrapper | silver | 13 | 10/13/14 | UNDER | 0 on C4 | +1 per gift action; a clean small engine. |
| 80 | Matchmaker | yellow | 13 | 13/13/13 | UNDER | 0 on C4 | Rewards a new color each recruit; combos with New Blood. |
| 81 | Drifters | yellow | 13 | 13/15/12 | UNDER | 0 on C4 | Picks its own color, feeding count cards and New Blood; quiet but flexible. |
| 82 | Brokers | white | 13 | 12/14/13 | UNDER | 0 on C4 | Clean engine on White's follower spaces. |
| 83 | Undertaker | white | 13 | 12/14/13 | UNDER | 0 on C4 | Pays for casting out; builds with Farewell and Estate Sale. |
| 84 | Doppelganger | green | 13 | 13/13/12 | UNDER | protected; 0 on C4 | Copy your best member; strong but private. |
| 85 | Coach | guests | 13 | 13/13/9 | UNDER | 0 on C4 | Free extra On Use; strong with once-per-game cards, private. |
| 86 | Loyalists | red | 13 | 14/11/13 | over |  | A clear shield against red's swaps; defensive and quiet until it matters. |
| 87 | Clockmakers | purple | 13 | 15/13/11 | over |  | Opening with two turns in a row each round; solid tempo. |
| 88 | Night Watch | purple | 13 | 10/13/15 | over |  | Pays when rivals take Goes Last; when 'on it' is counted needs a ruling. |
| 89 | Philanthropist | silver | 13 | 10/13/17 | over |  | A small Largesse on recruit; fine. |
| 90 | Caravan | yellow | 13 | 11/13/13 | UNDER | 0 on C4 | +1 of each held color every round at worth 3; strong income that rewards the leader. |
| 91 | Tastemaker | yellow | 13 | 10/14/13 | over |  | Pays for meddling with rivals; a real combo with Meddler and Leveler. |
| 92 | Shopaholics | blue | 13 | 13/16/13 | UNDER | 0 on C4 | Two buys every turn is a huge engine for whoever is already rich. |
| 93 | Window Dressers | blue | 13 | 13/13/13 | over |  | Three bodies plus a three-card bury; efficient and mildly disruptive. |
| 94 | Trendsetters | blue | 13 | 13/14/12 | over |  | Three bodies and a bury per recruit; steady shop pressure. |
| 95 | Cutpurse | magenta | 13 | 12/14/13 | over |  | Cheap recurring steal from the richest; auto-aimed. |
| 96 | Wallflower | green | 13 | 13/16/13 | UNDER | 0 on C4 | Double copied resources; a real engine but pricey and private. |
| 97 | Tiebreaker | guests | 13 | 14/13/12 | over |  | Winning every tie changes how you read every rim; clear and quiet. |
| 98 | Mentor & Protégés | red | 13 | 13/14/13 | over |  | A two-for-one recruit that feels big, though the cheapest shop member is often junk. |
| 99 | Night Owls | purple | 13 | 13/14/10 | over |  | An extra minion each round from II; strong but expensive and leader-friendly. |
| 100 | Con Men | guests | 13 | 13/13/13 | over | protected | A five-resource steal on arrival; a big moment, nothing after. |
| 101 | Recluse | white | 14 | 11/14/15 | UNDER | protected; 0 on C4 | Paying the small cult per rival with more members is real catch-up and a different plan. |
| 102 | Deprogrammers | red | 14 | 14/12/16 | over |  | Four bodies for 3 plus a sting on red swaps; nearly a must-buy at this price. |
| 103 | Tourist | yellow | 14 | 14/17/13 | UNDER | 0 on C4 | A follower per color held, each round; a strong visible engine of variety. |
| 104 | Window Shopper | blue | 14 | 14/15/14 | over |  | Bury two and take their colors each round; unclear whether the row refills. |
| 105 | Sticky Fingers | magenta | 14 | 14/15/13 | over |  | Every steal bigger; the plain magenta engine piece. |
| 106 | Cashier | white | 14 | 12/16/14 | UNDER | protected; 0 on C4 | Cheap one-shot cash-out; timing matters. |
| 107 | Penny Pincher | gold | 14 | 14/17/13 | over |  | Doubling gold spent on members bends the price rule and makes gold planning matter; unclear whether it covers the any part. |
| 108 | Headhunter | red | 14 | 15/13/14 | over |  | Ruin a rival's best member once: a real sting with aim, though it gains you nothing. |
| 109 | Snitch | magenta | 14 | 14/11/14 | over |  | A deterrent that makes stealing from you cost; felt by thieves. |
| 110 | Old Maid | guests | 14 | 16/14/14 | over |  | Only works as a hot potato for swap and give cards; a real dumping game, but never a card you want to buy. |
| 111 | Extortionist | magenta | 14 | 10/14/14 | over |  | A bigger Cutpurse; strong sting, but a copy of a sibling. |
| 112 | Double Agent | magenta | 14 | 14/17/13 | over |  | Trade this card for a rival's; the value of what you give is hard to read. |
| 113 | Robin Hood | magenta | 15 | 15/14/16 | over |  | Rewards hitting the leader; catch-up with a small payoff. |
| 114 | Go-Getter | purple | 15 | 15/15/12 | over |  | A once-per-game extra minion right now; clean, felt and timed. |
| 115 | Late Risers | purple | 15 | 15/15/14 | over |  | An extra early minion for the player behind; a genuine catch-up rule bend. |
| 116 | Hot Streak | purple | 15 | 16/15/14 | over | protected | Followers per turn in a row before it rewards stacking Crunch Time; the count needs care. |
| 117 | Debutantes | silver | 15 | 15/15/14 | over |  | Once-per-game doubling with a gift; a felt moment. |
| 118 | Meddler | yellow | 15 | 15/17/13 | over |  | Change each rival's resource and gain per rival; contest interference the table notices. |
| 119 | Bait | green | 15 | 15/15/14 | over |  | Punishes copiers and pays you; a felt trap. |
| 120 | Mob | red | 15 | 16/13/15 | over |  | Big round-end payoff that makes red member counts a race; leader-heavy. |
| 121 | Raiders | white | 15 | 15/15/15 | over |  | A four-follower steal is a big sting, but theft belongs to magenta. |
| 122 | Tribute Band | green | 15 | 16/15/14 | over |  | Doing every action a rival took is a huge round III moment; 14 resources is steep and reach can be hard to read. |
| 123 | Sore Loser | guests | 15 | 16/15/14 | over |  | Stealing 3 followers from the big contest winner when you won none is catch-up the table feels. |
| 124 | Big Tent | yellow | 16 | 14/17/16 | UNDER | 0 on C4 | Two followers per color with exactly one member: a clear, different way to build. |
| 125 | Panel | red | 16 | 17/16/13 | over |  | Worth 3 and a swap on arrival; strong red value. |
| 126 | Hostesses | silver | 16 | 14/16/16 | over |  | Gifts every round for a follower each; steady and the table notices. |
| 127 | Desperado | magenta | 16 | 17/15/16 | over |  | Bigger steals while in last: a clear comeback card. |
| 128 | Impersonator | green | 16 | 17/16/15 | over |  | Borrowing a rival's best ability each round is a sting and a real aim; needs a marker on the chosen card. |
| 129 | Impostors | green | 16 | 16/14/16 | over |  | Copy a rival's member; reaches across the table. |
| 130 | Bouncers | purple | 16 | 16/17/15 | over |  | Skipping the next two rivals on arrival is a clear sting with timing choice. |
| 131 | Restockers | blue | 16 | 16/16/13 | over |  | Flush the whole shop once; a big denial moment. |
| 132 | Doormen | blue | 16 | 15/16/17 | over |  | Swapping a rival's member for a shop member each round is a sting; 'up to 2 less or any more' takes a reread. |
| 133 | Fan Club | green | 17 | 17/17/15 | over |  | Copy a space the leader holds; catches you up and reads the board. |
| 134 | Leveler | yellow | 17 | 17/18/15 | over |  | Every round shave each rival's biggest pile into a color you name; contest disruption aimed at leaders. |
| 135 | Body Snatchers | red | 17 | 17/16/17 | over |  | A round-start swap with a rival every round is a recurring sting and a target. |
| 136 | Godparent | silver | 17 | 17/18/16 | over |  | Give a member away for its cost in followers; a gift with a payoff and a combo with Old Maid and Martyrs. |
| 137 | Creditor | silver | 17 | 19/17/17 | over |  | Taking 2 followers each round and paying silver back is a sting with a gift; very silver. |
| 138 | Hawker | blue | 17 | 17/16/17 | over |  | An auction where rivals pay you or you get it free; everyone at the table decides. |
| 139 | Fixer | magenta | 17 | 17/17/15 | over |  | Buy a rival's member with magenta once; a planned sting. |
| 140 | Kidnapper | magenta | 17 | 17/17/14 | over |  | Take the widest cult's cheapest member every round; recurring pressure on the leader in bodies. |
| 141 | Martyrs | white | 17 | 17/19/14 | over |  | Pays when it leaves, so stealing it hurts the thief; great combo with Farewell and Godparent. |
| 142 | Party Crasher | guests | 17 | 17/18/15 | over | protected | Take a space someone already has; breaks the blocking rule once, everyone feels it. |
| 143 | Anarchist | guests | 17 | 17/15/18 | over |  | Swap any two members anywhere each round; chaos the table watches. |
| 144 | Second-Story Man | magenta | 18 | 19/18/17 | over |  | A steal timed right before contests is a contest snipe everyone has to plan around. |
| 145 | Spoilsport | guests | 18 | 18/18/17 | over |  | Cancel a contest you can't win; a block every rim leader fears. |

## Wheel spaces (54; 21 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Golden Years | gold | 8 | 8/10/8 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Pure flat 2/4/6 income; nobody at the table notices who took it. |
| 2 | Build Up | green | 8 | 8/10/8 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Flat scaling green; nothing to react to. |
| 3 | Sweet Talk | silver | 10 | 10/10/11 | UNDER | round II; 0 on C4 | Silver into other colors; a converter that nobody notices. |
| 4 | Makeover | yellow | 10 | 10/14/10 | UNDER | protected; round III (rework only under 10); 0 on C4 | Round III rearrange; useful for contests but a weak burst. |
| 5 | Savings | blue | 10 | 10/13/10 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Scaling blue plus an optional bury; fine anchor. |
| 6 | Stash | magenta | 10 | 9/10/10 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | The same template as Gather and Allowance; nothing about theft. |
| 7 | Allowance | white | 10 | 8/10/10 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | The same resource-plus-follower template as Gather and Stash; nothing white about it. |
| 8 | Tithe | gold | 11 | 11/11/11 | UNDER | round II; 0 on C4 | Scales with your cult so it rewards building, but it is quiet income nobody reacts to. |
| 9 | Gather | red | 11 | 10/11/12 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Resources plus followers on a recruit; the plain anchor. |
| 10 | Polish | silver | 11 | 10/11/12 | UNDER | round I; 0 on C4 | A plain conversion; useful, no story. |
| 11 | Estate Sale | white | 11 | 11/12/11 | UNDER | round II; 0 on C4 | Farewell for white instead of followers; weaker twin. |
| 12 | Reprise | green | 11 | 11/14/11 | UNDER | round I; 0 on C4 | Copy your own action; self-contained. |
| 13 | Overtime | purple | 12 | 13/12/11 | UNDER | round III (rework only under 10); 0 on C4 | +1 minion at round III; fine, plain. |
| 14 | Harvest | yellow | 12 | 11/12/13 | UNDER | round I; 0 on C4 | A plain any-color gain; fine anchor. |
| 15 | Kickback | gold | 12 | 11/12/13 | UNDER | round I | A good gain with a small gift; mild kingmaking choice. |
| 16 | Intro Offer | gold | 12 | 14/12/10 | UNDER | round I; 0 on C4 | A 4-off discount feels good but is solitary. |
| 17 | Melting Pot | yellow | 13 | 13/14/13 | UNDER | round II; 0 on C4 | Pays a varied cult; an engine payoff nobody else feels. |
| 18 | Exchange | white | 13 | 14/12/13 | UNDER | round I; 0 on C4 | Simple conversion at a good rate. |
| 19 | Walk-In | red | 13 | 15/13/13 | over | round I | A blind free recruit that pays rivals; a gamble, mild. |
| 20 | Right Away | purple | 13 | 13/14/11 | over | round I | Simple tempo: take a contested space before rivals react. |
| 21 | Peek | blue | 13 | 16/13/13 | over | round I | Ordering the top of the pile and recruiting from it; private info that's fiddly at a table. |
| 22 | Splurge | white | 13 | 13/15/12 | UNDER | round I; 0 on C4 | Followers for paying big; unclear about round III, but a strong spend payoff. |
| 23 | Cash In | white | 13 | 13/15/13 | UNDER | round III (rework only under 10); 0 on C4 | All white into followers; the burst the color builds toward. |
| 24 | Leaders' Tax | yellow | 14 | 14/15/12 | over | round I | Reads the board to pick a color; a real choice that cares where rivals went. |
| 25 | Cover | green | 14 | 17/14/13 | over | round II | Copying an empty space gives reach without blocking anyone; a quiet choice. |
| 26 | Greatest Hits | green | 14 | 14/16/13 | UNDER | round III (rework only under 10); 0 on C4 | Re-fire every On Recruit; a payoff you build all game. |
| 27 | Collect Debts | gold | 14 | 14/12/16 | over | round II | Aimed steal of gold you can point at the leader or the hoarder; real targeting choice. |
| 28 | Double Down | gold | 14 | 14/14/14 | over | round III (rework only under 10) | A big round III burst for the gold leader and dead for everyone else. |
| 29 | Toast | silver | 14 | 14/14/14 | over | round I | A big silver gain that gifts every rival; scaled and on theme. |
| 30 | Potluck | silver | 14 | 13/15/14 | over | protected; round II | Rivals choose what to give you: a small table moment. |
| 31 | Big New Blood | yellow | 14 | 13/14/17 | over | round II | A bigger New Blood; strong but a twin of it. |
| 32 | Tryout | red | 15 | 16/15/13 | over | round I | Borrowing a shop member's On Recruit makes you read the row; clean. |
| 33 | New Blood | yellow | 15 | 13/15/17 | over | round I | Rewards a new color in your cult this turn; a clear shop-reading choice. |
| 34 | Lie Low | magenta | 15 | 16/15/12 | over | round I | A small steal plus a shield for the round; a real defensive timing choice. |
| 35 | Demote | red | 15 | 15/16/14 | over | round II | Trading down for red and a cheaper rival member; a choice with a sting, weaker than its twin. |
| 36 | Initiation | red | 15 | 15/15/15 | over | round III (rework only under 10) | A free member up to 8 is a satisfying round III burst everyone recognises. |
| 37 | Last Call | purple | 15 | 16/15/15 | over | round II | Followers per minion left for going last; strong but takes a read. |
| 38 | Crunch Time | purple | 15 | 16/15/13 | over | protected; round II | Three turns in a row to claim key spaces; a clear timing burst. |
| 39 | Recruit Twice | blue | 15 | 16/15/14 | over | round II | A second buy when the buy is scarce; strong and plain. |
| 40 | Bury | blue | 15 | 15/15/13 | over | round II | Hate-bury a member a rival wants and get paid; a clean block. |
| 41 | Spree | blue | 15 | 15/15/15 | over | round III (rework only under 10) | Three recruits is the round III burst; leader-friendly. |
| 42 | Sample | green | 15 | 16/14/15 | over | round II | Use a rival's member's On Recruit; clever and interactive. |
| 43 | Sleep In | purple | 16 | 16/16/15 | over | round I | Big purple for going last; the Goes Last token creates a visible tradeoff and feeds Night Watch. |
| 44 | Hold Up | purple | 16 | 17/16/12 | over | round I | Skipping the next turn, even your own, is a sting with a risk. |
| 45 | Farewell | white | 16 | 16/17/16 | over | round II | Cash a member out for its cost; a real decision with combos. |
| 46 | Shake Down | magenta | 16 | 15/16/16 | over | round II | The victim chooses pay or lose, a real choice for them; needs a moment to explain. |
| 47 | Promote | red | 17 | 18/17/17 | over | round II | Trading up with a rival's member is the color's sting and a target choice. |
| 48 | Largesse | silver | 17 | 17/17/17 | over | round III (rework only under 10) | A big gift-for-followers burst that hands rivals contest silver; strong round III tension. |
| 49 | Out of Style | blue | 17 | 17/17/16 | over | round I | Wiping a color from the shop denies rivals and pays you; a visible board play. |
| 50 | Heist | magenta | 17 | 16/17/17 | over | round II | Taking 3 followers from the leader is a sting and catch-up. |
| 51 | Echo | green | 18 | 18/18/18 | over | protected; round I | Copying the previous action scales with what rivals just took; the color's best idea. |
| 52 | Party Gifts | silver | 18 | 18/18/18 | over | round I | Followers for gifts with a split you choose; the core silver tension in one space. |
| 53 | Help Yourself | magenta | 19 | 18/19/20 | over | round I | A scaling steal you aim yourself; the color's clear anchor and every rival feels it. |
| 54 | Poach | magenta | 19 | 19/18/19 | over | round III (rework only under 10) | Take any rival's member free; the round III punch. |
