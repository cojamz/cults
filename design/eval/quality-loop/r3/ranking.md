# Ranking (r3): worst first

From 3 blind paper judges (judge-1.json, judge-2.json, judge-3.json), median total of 20. Bar: 13 or more, no 0 on Clear, Feels good or Fun, no hard fail from 2+ judges. Made by scripts/quality/ranking.mjs.

## Checks on the judges

- Agreement (rank correlation per judge pair, bar 0.6): members 0.76, 0.82, 0.72; spaces 0.80, 0.88, 0.83. Passed.
- Planted cards: Bell Ringer (bad) 1/96 from worst; Envy (bad) 1/96 from worst; Clerk (bad) 2/96 from worst; Scavenger (good) 2/96 from worst MISSED. At least one missed.
- Cory's past calls, held-out half B, cards unchanged since he spoke (bar 70%): B: 3/6 disliked in the bottom half, 8/11 liked in the top half (65%). Under the bar. Half A (may appear in prompts, so not a test): A: 6/10 disliked in the bottom half, 5/13 liked in the top half (48%).
- Cory's past calls, all: all: 11/24 disliked in the bottom half, 13/24 liked in the top half (50%); leaving out cards reworked since he spoke: not stale: 9/17 disliked in the bottom half, 13/24 liked in the top half (54%).
- Half B misses (read before fixing; the judge may be right): Cash In (disliked, 39/48 from worst), Big Tent (disliked, 63/95 from worst), Old Maid (disliked, 83/95 from worst), Cashier (liked, 42/95 from worst), Agents (liked, 23/95 from worst), Fence (liked, 40/95 from worst).


## Notes on r3 (Evaluators, Nov 4 12:30pm)
- Same card-judge prompt, rubric and plants as r2, except one plant. Night Shift is now a real candidate, so the unclear plant is Bell Ringer, in the same slot. Five ready-to-publish cards sit in their slots: Jack-of-All-Trades, Sweet Nothings, Housewarming, Encore (the c1 wording) and Guest of Honor. Foster Parents and the reworded Courier were already live.
- The good plant, Scavenger, missed because two judges hard-failed it on turn flow: its owner chooses and pays during a rival's turn. That rule was added after r2, so the judges are right and the plant is stale. It needs replacing before r4.
- Cory's held-out calls score 65% (r2: 76%). Read the misses before changing anything: Cash In, Big Tent, Old Maid, Cashier, Agents and Fence.
- Two cards named in this ranking are plants and are not live: Bell Ringer and Envy. Clerk and Scavenger are plants too. They stay in the table for the checks but are not targets.

## Members (95; 43 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Hawker | blue | 15 | 15/17/10 | UNDER | hard fail x2: turn flow: each rival chooses whether to recruit during the owner's turn | Every rival gets a priced shot at a member before you take it free; a table moment, but many words and rivals choose on your turn. |
| 2 | Shift Crew | purple | 8 | 8/7/8 | UNDER | 0 on C4 | Four followers for four resources and nothing else: dead weight in a color about timing. |
| 3 | Recruiter | red | 9 | 9/8/10 | UNDER | 0 on C3 0 on C4 | +1 red per recruit for six resources is a slow trickle that rarely pays back. |
| 4 | Regular | blue | 9 | 9/7/10 | UNDER | 0 on C3 0 on C4 | +1 blue on follower buys has nothing to do with the shop. |
| 5 | Volunteer | red | 10 | 10/8/11 | UNDER | 0 on C3 0 on C4 | Pure filler: a cheap body for recruit triggers and the red count, but nothing happens when it lands. |
| 6 | Customs Officer | yellow | 10 | 9/10/10 | UNDER | 0 on C3 | +1 yellow when stolen from or meddled; reactive, small, rarely fires. |
| 7 | Critic | blue | 10 | 10/16/9 | UNDER | 0 on C3 | +1 when a rival buys blue: rare and small. |
| 8 | Heiresses | white | 10 | 9/11/10 | UNDER | 0 on C4 | Once-per-game white per member at 9; weak and leader-leaning. |
| 9 | Old Money | white | 10 | 12/10/10 | UNDER | 0 on C4 | Cost 6 for a Game End per white member count; poor value. |
| 10 | Timekeeper | purple | 11 | 12/11/11 | UNDER | 0 on C4 | Game End per-purple-member count; quiet and rewards whoever went deepest. |
| 11 | Dyer | yellow | 11 | 11/10/11 | UNDER | 0 on C4 | Tourist's text paying yellow instead of followers: a weaker sibling. |
| 12 | Busker | green | 11 | 11/10/11 | UNDER | 0 on C4 | Steady green income: filler. |
| 13 | Grifter | magenta | 11 | 11/11/11 | UNDER |  | Eight resources for a one-off steal sized by your own cult size; overpriced and rewards the big cult. |
| 14 | Toastmaster | silver | 12 | 11/14/12 | UNDER | 0 on C3 0 on C4 | +1 follower per Silver space; plain and forgettable. |
| 15 | Patriarch | red | 12 | 12/12/12 | UNDER | 0 on C4 | A generic member-count scorer, the same shape as Timekeeper and Snobs, rewarding the big cult. |
| 16 | Snobs | blue | 12 | 12/11/12 | UNDER | 0 on C4 | The same own-color game-end scorer as Timekeeper and Old Money. |
| 17 | Landlord | white | 12 | 12/11/13 | UNDER | 0 on C4 | Steady white income: fine filler, nobody notices. |
| 18 | Caterer | silver | 13 | 9/13/14 | UNDER | 0 on C3 0 on C4 | Pays when silver is "gifted", a word the table has to define across Toast, Potluck and Party Gifts; passive. |
| 19 | Harmonist | yellow | 13 | 13/13/9 | UNDER | 0 on C4 | A game-end full-set scorer: clear, but solo and quiet. |
| 20 | Roadie | green | 13 | 14/12/13 | UNDER | 0 on C4 | Income per green member; a small engine. |
| 21 | Dabblers | guests | 13 | 15/12/13 | UNDER | 0 on C4 | Two wild bodies; strong but what wild counts for takes rulings. |
| 22 | Philanthropist | silver | 13 | 12/15/13 | over |  | A smaller Largesse on arrival; repeats the spaces. |
| 23 | Caravan | yellow | 13 | 13/13/14 | UNDER | 0 on C4 | A bigger Dyer that pays the already-broad pile more each round; rich-get-richer. |
| 24 | Agents | green | 13 | 13/13/16 | over | protected | An anti-copy shield, a cheap answer to rival greens more than a green engine. |
| 25 | Impressionist | green | 14 | 11/15/14 | UNDER | protected; 0 on C3 0 on C4 | +1 per copy anyone makes; small. |
| 26 | Jack-of-All-Trades | yellow | 14 | 14/15/14 | UNDER | 0 on C4 | Makes full sets easier, which matters only for yellow's contest; quiet. |
| 27 | Misers | white | 14 | 14/14/13 | UNDER | 0 on C4 | Pays for holding white at the end against cashing it in: a real hold-or-spend call. |
| 28 | Money Changers | white | 14 | 14/16/14 | UNDER | 0 on C4 | Pays on every follower buy at the table; steady and quiet. |
| 29 | Night Watch | purple | 14 | 13/14/14 | over |  | Punishes rivals for Sleep In and Last Call, but "per minion on it" is unclear: minions on the token or still to place? |
| 30 | Accomplice | magenta | 14 | 15/13/14 | over |  | A one-shot steal 3; a Help Yourself repeat on a card. |
| 31 | Doormen | blue | 14 | 14/15/13 | over |  | Forcing a swap on a rival every round is Red's job, and the cost rule is long. |
| 32 | Line Cutters | guests | 14 | 14/16/13 | over |  | Going first every round for 2 resources and 3 followers overrides the catch-up order; a must-buy for the leader. |
| 33 | Con Men | guests | 14 | 13/14/15 | over | protected | Big one-time steal; plain. |
| 34 | Patroness | blue | 15 | 15/17/15 | UNDER | 0 on C4 | Pays on every bury, which blue does constantly; "per member or per event" needs a ruling. |
| 35 | Brokers | white | 15 | 17/13/15 | UNDER | 0 on C4 | +1 on White follower gains; cheap three bodies. |
| 36 | Deprogrammers | red | 15 | 15/16/15 | over |  | Good link to the swap cards, but a cost of 3 for 4 followers and 4 red members is an always-buy. |
| 37 | Smooth Talkers | silver | 15 | 16/15/15 | UNDER | 0 on C4 | Silver becomes any color; a strong engine for the silver leader, nobody else feels it. |
| 38 | Meddler | yellow | 15 | 15/15/15 | over |  | Changing one of each rival's resources can cost them a contest; aim is real, the wording is loose. |
| 39 | Window Dressers | blue | 15 | 15/17/11 | over |  | Cheap 3-member body with a shop wipe on recruit; a second Out of Style. |
| 40 | Fence | magenta | 15 | 10/15/16 | over |  | Paid when robbed; a soft answer to magenta, little to decide. |
| 41 | Cashier | white | 15 | 16/14/15 | UNDER | protected; 0 on C4 | Cash In on a card; strong, repeats the space. |
| 42 | Extra Hand | guests | 15 | 11/15/16 | UNDER | 0 on C4 | Once-per-game extra minion at cost 9; fine, pricey. |
| 43 | Extortionist | magenta | 15 | 14/16/15 | over |  | Cutpurse doubled at 8; a sibling repeat. |
| 44 | Proselytizers | red | 16 | 16/14/16 | UNDER | 0 on C4 | A clean engine that pays every recruit, including red's free ones; nobody else at the table feels it. |
| 45 | Hostesses | silver | 16 | 17/14/16 | over |  | Silver to every rival each round for followers; a steady gift engine. |
| 46 | Debt Collectors | silver | 16 | 17/16/13 | over |  | Once-per-game 2 silver from each rival; a contest timing swing. |
| 47 | High Society | silver | 16 | 15/16/16 | over |  | Paid when rivals take Silver spaces; makes the gifts that pull rivals into silver pay you. |
| 48 | Window Shopper | blue | 16 | 16/16/16 | over |  | Buries two members each round for their colors; clean denial, but who picks the two must be read. |
| 49 | Cutpurse | magenta | 16 | 15/16/16 | over |  | Small steady steal from the richest; cheap catch-up. |
| 50 | Kidnapper | magenta | 16 | 16/16/15 | UNDER | 0 on C4 | Takes a member from the same rival every round from round I; the victim loses a member early with no answer. |
| 51 | Shoplifter | magenta | 16 | 17/15/16 | over |  | A steal on every recruit; a quiet engine. |
| 52 | Wallflower | green | 16 | 17/15/16 | UNDER | 0 on C4 | Doubles copied gains at 10; strong for the copier, leader-leaning. |
| 53 | Alchemists | guests | 16 | 16/15/16 | UNDER | 0 on C4 | Pay any color for members: a strong unlock for 5, worth 3. |
| 54 | Mob | red | 16 | 16/16/17 | over |  | Up to +6 a round for the red leader; rivals can race the red count, but it pays the player already ahead. |
| 55 | Night Owls | purple | 16 | 16/15/19 | over |  | An extra minion every round from round II is a real rule bend; eight resources is a lot. |
| 56 | Gardeners | yellow | 17 | 17/14/18 | UNDER | 0 on C4 | Fills in the colors you lack, so it helps a thin pile most and feeds full sets. |
| 57 | Drifters | yellow | 17 | 18/16/17 | UNDER | 0 on C4 | Pick a color to count as; feeds red and blue contests and variety cards, needs a marker. |
| 58 | Gossip | purple | 17 | 17/17/16 | over |  | Pays on every skipped turn, anyone's, so Hold Up and Bouncers build into it. |
| 59 | Closer | purple | 17 | 17/17/16 | over |  | Pays for going last, which purple already chases; a race for the last minion the table can see. |
| 60 | Big Tent | yellow | 17 | 18/17/15 | UNDER | 0 on C4 | Rewards exactly one member per color; a real shaping goal at game end. |
| 61 | Trendsetters | blue | 17 | 17/17/17 | over |  | Each recruit churns one shop card, feeding Patroness; a cheap 3-member body. |
| 62 | Hoarder | white | 17 | 18/17/13 | UNDER | 0 on C4 | Once-per-game turn everything white, then Cash In; a clear setup play. |
| 63 | Courier | purple | 17 | 16/17/19 | over |  | Pays on consecutive turns, which purple's spaces make; combos Right Away and Crunch Time. |
| 64 | Early Birds | purple | 17 | 17/17/17 | over |  | A cheap answer to Hold Up and Bouncers that a first-timer gets at once. |
| 65 | Hot Streak | purple | 17 | 17/16/17 | over | protected | A once-a-game cash-in after a chain of turns; big when set up with Crunch Time, but counting turns in a row takes care. |
| 66 | Shopaholics | blue | 17 | 17/16/17 | over |  | Two buys every turn is a huge rule bend; strong enough to be the first buy whenever it shows. |
| 67 | Desperado | magenta | 17 | 17/17/19 | over |  | Bigger steals while you trail: built-in catch-up. |
| 68 | Raiders | white | 17 | 15/17/19 | over |  | Once-per-game follower steal with a payment; a swing aimed at the leader. |
| 69 | Impersonator | green | 17 | 18/14/17 | over |  | Borrow a rival's ability each round; deep, needs a marker. |
| 70 | Anarchist | guests | 17 | 19/16/17 | over |  | Swap any two members every round; fun for its owner, rough on victims. |
| 71 | Foster Parents | red | 18 | 18/20/18 | over |  | Rides on every swap red already does (Promote, Demote, Body Snatchers, Poach) and makes rivals think twice before trading with you. |
| 72 | Creditor | silver | 18 | 18/18/19 | over |  | Take two followers from the rival you pick and leave them three silver: a fair aimed trade you can point at the leader. |
| 73 | Tourist | yellow | 18 | 18/16/18 | UNDER | 0 on C4 | Followers for holding a spread of colors, every round; a steady scorer that pushes you wide. |
| 74 | Stunt Double | green | 18 | 18/18/19 | UNDER | protected; 0 on C4 | Doing your action twice on recruit makes you time your best space with the buy. |
| 75 | Mentor & Protégés | red | 18 | 18/17/18 | over |  | Two recruits for one buy, chains into Proselytizers and Recruiter; nine resources for a 3 is steep. |
| 76 | Loyalists | red | 18 | 18/18/19 | over |  | A clear block against red's swaps and Body Snatchers; rivals see it and aim elsewhere. |
| 77 | Debutantes | silver | 18 | 17/18/18 | over |  | Once-per-game double silver with a gift attached; a timing call around the contest. |
| 78 | Guest of Honor | silver | 18 | 18/17/19 | over |  | Every Silver space can turn a cheap member into +4 followers, linking to Godparent, Old Maid and Foster Parents; strong for a cost of 3. |
| 79 | Bodyguards | magenta | 18 | 15/18/18 | over |  | Rivals can't steal from you; a clean wall, but it turns magenta off against you. |
| 80 | Double Agent | magenta | 18 | 17/19/18 | over |  | Pay 8 to trade itself for any rival's member; a clever swap. |
| 81 | Recluse | white | 18 | 20/18/16 | over | protected | Game End per wider rival; catch-up for a small cult. |
| 82 | Tribute Band | green | 18 | 18/16/18 | over |  | Do everything a rival did this round once: a huge moment, with fourteen resources the barrier. |
| 83 | Old Maid | guests | 18 | 18/18/16 | over |  | A hot potato for Godparent, Guest of Honor and Double Agent; the table laughs when it moves. |
| 84 | Sore Loser | guests | 18 | 19/17/18 | over |  | Steal from the top contest winner when you win none; real catch-up. |
| 85 | Doppelganger | green | 19 | 19/16/19 | UNDER | protected; 0 on C4 | Becomes your best member: clear, and better with the cards around it. |
| 86 | Encore | green | 19 | 19/16/19 | UNDER | 0 on C4 | Doubles one On Recruit; timing the big one is a real choice. |
| 87 | Panel | red | 19 | 19/16/19 | over |  | A swap on recruit that combos with Foster Parents and Deprogrammers; "promote or demote" asks a new player to know two spaces. |
| 88 | Bouncers | purple | 19 | 19/19/20 | over |  | Skipping the next two rivals on recruit is a table moment with timing to choose, and feeds Gossip. |
| 89 | Godparent | silver | 19 | 19/18/19 | over |  | Give a member away for its cost in followers; pairs with Old Maid, Martyrs and Foster Parents across colors. |
| 90 | Fan Club | green | 19 | 19/15/19 | over |  | Copies what the leader took: a clean catch-up hook. |
| 91 | Spoilsport | guests | 19 | 20/19/18 | over |  | Cancels a contest you can't win; a block aimed at the leader. |
| 92 | Body Snatchers | red | 20 | 20/18/20 | over |  | Every round you pick a rival member of the same cost to trade for; clear, aimed, feeds Foster Parents and Deprogrammers, and Loyalists answer it. |
| 93 | Second-Story Man | magenta | 20 | 20/20/19 | over |  | A steal right before contests are scored can flip one; a timed, aimed sting you can see coming. |
| 94 | Party Crasher | guests | 20 | 20/18/21 | over | protected | Once a game you get into the space that was already taken; a rule bend everyone feels. |
| 95 | Martyrs | white | 21 | 21/21/21 | over |  | Leaving pays you its cost, so a rival's Poach or swap backfires and your own Farewell pays twice; plays off many colors. |

## Wheel spaces (48; 12 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Shake Down | magenta | 11 | 11/11/12 | UNDER | round II; hard fail x2: turn flow: the rival chooses a member and a payment during the owner's turn; 0 on C4 | The victim chooses their own punishment, which feels bad, and the wording is long. |
| 2 | Potluck | silver | 14 | 14/14/11 | UNDER | protected; round II; hard fail x2: turn flow: each rival chooses a resource to give during the owner's turn | Every rival pays one resource and gets two silver: a fair trade but small, and each rival has to choose on your turn. |
| 3 | Stash | magenta | 10 | 11/10/10 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | The shared fuel-plus-recruit-bonus template again; nothing magenta. |
| 4 | Allowance | white | 10 | 11/10/10 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | The shared fuel-plus-recruit-bonus template; nothing white. |
| 5 | Polish | silver | 12 | 11/12/13 | UNDER | round I; 0 on C4 | Converter; useful glue, no moment. |
| 6 | Gather | red | 13 | 13/10/14 | over | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Clear plain anchor with a recruit kicker; nobody else notices, and it is the same text as Stash and Allowance. |
| 7 | Exchange | white | 13 | 14/13/12 | UNDER | round I; 0 on C4 | Resources into followers on a sliding cap; fine, a bit fiddly. |
| 8 | Build Up | green | 13 | 13/10/13 | over | fuel anchor (0 on Fun allowed); round I; 0 on C4 | The plain fuel anchor. |
| 9 | Estate Sale | white | 14 | 14/12/15 | UNDER | round II; 0 on C4 | Farewell paying white instead of followers: a weaker sibling. |
| 10 | Bury | blue | 14 | 14/16/14 | over | round II | A smaller Savings; the half-cost blue payout is a sum to work out. |
| 11 | Harvest | yellow | 15 | 15/12/16 | UNDER | round I; 0 on C4 | The plain fuel anchor, in any colors, which fits a color about going broad. |
| 12 | New Blood | yellow | 15 | 17/15/15 | UNDER | round I; 0 on C4 | Recruit-bonus template with a yellow twist (a new color); fine. |
| 13 | Melting Pot | yellow | 15 | 15/14/16 | UNDER | round II; 0 on C4 | Pays for how broad you already are, which rewards the wide cult more than the one behind. |
| 14 | Demote | red | 15 | 15/15/14 | over | round II | Mirror of Promote that trades down; the downgrade is rarely what you want, so it mostly lives as a weaker sibling or a Foster Parents trigger. |
| 15 | Right Away | purple | 15 | 17/15/15 | over | round I | A small double turn; clean, mostly a tempo tool. |
| 16 | Tryout | red | 16 | 14/16/16 | over | round I | Borrows any shop card's On Recruit without buying it; reads clean, links every color, and keeps the card for someone else. |
| 17 | Leaders' Tax | yellow | 16 | 14/17/16 | over | round I | Pays by where rivals sit; reads the board but small. |
| 18 | Savings | blue | 16 | 17/14/16 | over | round I | Fuel plus a bury before buying; a small deny. |
| 19 | Splurge | white | 16 | 16/17/14 | UNDER | round I; 0 on C4 | Big followers on a pricey recruit, but the per-2 then per-1 math is a sum to work out. |
| 20 | Peek | blue | 16 | 16/15/16 | over | round I | A good scaling gain and your pick of the pile; private, so nobody else reacts. |
| 21 | Walk-In | red | 17 | 17/14/17 | over | round I | A free member in round I is a big moment, and the +1 red to each rival is a small gift the table sees. |
| 22 | Sleep In | purple | 17 | 16/18/17 | over | round I | Big purple plus a claim on Went Last that rivals can take back; the token takes a read. |
| 23 | Last Call | purple | 17 | 17/16/17 | over | round II | A big payoff for holding minions back, at the cost of going last; the token rules make it a read. |
| 24 | Toast | silver | 17 | 17/17/16 | over | round I | A big silver gain with a visible gift to everyone; a clean anchor for the giving color. |
| 25 | Lie Low | magenta | 17 | 16/18/17 | over | round I | Small steal plus a round of safety; a block players see. |
| 26 | Sample | green | 17 | 19/17/16 | over | round II | Borrow a rival's On Recruit; a clever link, needs a scan of rivals' cards. |
| 27 | Initiation | red | 18 | 18/20/18 | over | round III (rework only under 10) | Round III burst anyone can grab: a free member up to 8, plain and powerful. |
| 28 | Hold Up | purple | 18 | 18/19/18 | over | round I | The skip lands on whoever is next, even you, so timing is a real call and the victim can see it coming. |
| 29 | Overtime | purple | 18 | 18/18/17 | over | round III (rework only under 10) | A round III extra minion: plain, and a burst any player can use. |
| 30 | Heist | magenta | 18 | 18/16/19 | over | round II | Three followers off the leader: plain, felt, a catch-up tool. |
| 31 | Farewell | white | 18 | 17/18/18 | over | round II | Cast out a member for its cost in followers; a clean white trade that combos Martyrs. |
| 32 | Sweet Nothings | silver | 18 | 18/16/18 | over | round II | You give your own silver to get two of any color back each: a real hold-versus-give call on the silver contest. |
| 33 | Cash In | white | 19 | 19/19/17 | UNDER | round III (rework only under 10); 0 on C4 | The round III cash-out the white pile builds toward. |
| 34 | Promote | red | 19 | 19/20/18 | over | round II | The signature red swap: you trade up out of a rival's cult; strong aim choice, the victim still gets a member back. |
| 35 | Housewarming | yellow | 19 | 19/20/19 | over | round II | A free member in a new color: the yellow idea in one line. |
| 36 | Makeover | yellow | 19 | 20/16/19 | over | protected; round III (rework only under 10) | Rearrange everything in round III to finish sets and swing held-color contests. |
| 37 | Recruit Twice | blue | 19 | 17/19/19 | over | round II | Two recruits in one turn; plain and big. |
| 38 | Reprise | green | 19 | 19/15/19 | over | round I | Copy your own best action again: clean and grows through the game. |
| 39 | Cover | green | 19 | 18/19/19 | over | round II | Copy an open space; a way around blocks, clean. |
| 40 | Greatest Hits | green | 19 | 18/19/20 | over | round III (rework only under 10) | Replay every On Recruit you own; the round III payoff for building them. |
| 41 | Party Gifts | silver | 19 | 19/19/20 | over | round I | Six followers for gifting three silver, with a real call about who you feed in the silver contest; strong for round I. |
| 42 | Out of Style | blue | 19 | 19/19/19 | over | round I | Clears a whole color out of the shop: denial the table sees, and it feeds Patroness. |
| 43 | Crunch Time | purple | 20 | 20/20/20 | over | protected; round II | Three turns in a row: a big change to the snake in few words, and it sets up Courier and Hot Streak. |
| 44 | Spree | blue | 20 | 20/20/20 | over | round III (rework only under 10) | Three recruits in round III is the burst a trailing player can grab. |
| 45 | Help Yourself | magenta | 20 | 20/19/20 | over | round I | The core steal, scaling by round, aimed where it hurts the leader. |
| 46 | Poach | magenta | 20 | 20/21/20 | over | round III (rework only under 10) | The round III member grab; clear, felt, and Martyrs and Loyalists-style answers exist. |
| 47 | Echo | green | 20 | 20/20/20 | over | protected; round I | Copy the previous action: scales with the board, few words. |
| 48 | Largesse | silver | 21 | 19/21/21 | over | round III (rework only under 10) | Round III big gift-for-followers that also hands rivals contest silver; clear and dramatic. |
