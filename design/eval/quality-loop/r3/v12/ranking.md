# Ranking (r3-v1.2): worst first

From 3 blind paper judges (judge-1.json, judge-2.json, judge-3.json), median total of 20. Bar: 13 or more, no 0 on Clear, Feels good or Fun, no hard fail from 2+ judges. Made by scripts/quality/ranking.mjs.

## Checks on the judges

- Agreement (rank correlation per judge pair, bar 0.6): members 0.80, 0.84, 0.76; spaces 0.81, 0.87, 0.82. Passed.
- Planted cards: Bell Ringer (bad) 1/96 from worst; Envy (bad) 1/96 from worst; Clerk (bad) 2/96 from worst; Scavenger (good) 2/96 from worst MISSED. At least one missed.
- Cory's past calls, held-out half B, cards unchanged since he spoke (bar 70%): B: 3/6 disliked in the bottom half, 9/11 liked in the top half (71%). Passed. Half A (may appear in prompts, so not a test): A: 7/10 disliked in the bottom half, 6/13 liked in the top half (57%).
- Cory's past calls, all: all: 11/24 disliked in the bottom half, 15/24 liked in the top half (54%); leaving out cards reworked since he spoke: not stale: 10/17 disliked in the bottom half, 15/24 liked in the top half (61%).
- Half B misses (read before fixing; the judge may be right): Cash In (disliked, 42/48 from worst), Big Tent (disliked, 72/95 from worst), Old Maid (disliked, 49/95 from worst), Agents (liked, 20/95 from worst), Fence (liked, 35/95 from worst).

## Members (95; 22 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Hawker | blue | 15 | 15/17/11 | UNDER | hard fail x2: turn flow: each rival chooses whether to recruit during the owner's turn | Every rival gets a priced shot at a member before you take it free; a table moment, but many words and rivals choose on your turn. |
| 2 | Shift Crew | purple | 9 | 9/8/9 | UNDER |  | Four followers for four resources and nothing else: dead weight in a color about timing. |
| 3 | Recruiter | red | 10 | 10/9/11 | UNDER | 0 on C3 | +1 red per recruit for six resources is a slow trickle that rarely pays back. |
| 4 | Customs Officer | yellow | 10 | 9/10/10 | UNDER | 0 on C3 | +1 yellow when stolen from or meddled; reactive, small, rarely fires. |
| 5 | Regular | blue | 10 | 10/8/11 | UNDER | 0 on C3 | +1 blue on follower buys has nothing to do with the shop. |
| 6 | Critic | blue | 10 | 10/16/10 | UNDER | 0 on C3 | +1 when a rival buys blue: rare and small. |
| 7 | Volunteer | red | 11 | 11/9/12 | UNDER | 0 on C3 | Pure filler: a cheap body for recruit triggers and the red count, but nothing happens when it lands. |
| 8 | Grifter | magenta | 11 | 11/11/11 | UNDER |  | Eight resources for a one-off steal sized by your own cult size; overpriced and rewards the big cult. |
| 9 | Heiresses | white | 11 | 10/12/11 | UNDER |  | Once-per-game white per member at 9; weak and leader-leaning. |
| 10 | Old Money | white | 11 | 13/11/11 | UNDER |  | Cost 6 for a Game End per white member count; poor value. |
| 11 | Timekeeper | purple | 12 | 13/12/12 | UNDER |  | Game End per-purple-member count; quiet and rewards whoever went deepest. |
| 12 | Dyer | yellow | 12 | 12/11/12 | UNDER |  | Tourist's text paying yellow instead of followers: a weaker sibling. |
| 13 | Busker | green | 12 | 12/11/12 | UNDER |  | Steady green income: filler. |
| 14 | Caterer | silver | 13 | 10/13/15 | UNDER | 0 on C3 | Pays when silver is "gifted", a word the table has to define across Toast, Potluck and Party Gifts; passive. |
| 15 | Toastmaster | silver | 13 | 12/15/13 | UNDER | 0 on C3 | +1 follower per Silver space; plain and forgettable. |
| 16 | Patriarch | red | 13 | 13/13/13 | over |  | A generic member-count scorer, the same shape as Timekeeper and Snobs, rewarding the big cult. |
| 17 | Snobs | blue | 13 | 13/12/13 | over |  | The same own-color game-end scorer as Timekeeper and Old Money. |
| 18 | Doormen | blue | 13 | 13/14/12 | UNDER | 0 on C4 | Forcing a swap on a rival every round is Red's job, and the cost rule is long. |
| 19 | Landlord | white | 13 | 13/12/14 | over |  | Steady white income: fine filler, nobody notices. |
| 20 | Agents | green | 13 | 13/13/15 | over | protected | An anti-copy shield, a cheap answer to rival greens more than a green engine. |
| 21 | Night Watch | purple | 14 | 13/14/14 | over |  | Punishes rivals for Sleep In and Last Call, but "per minion on it" is unclear: minions on the token or still to place? |
| 22 | Harmonist | yellow | 14 | 14/14/10 | over |  | A game-end full-set scorer: clear, but solo and quiet. |
| 23 | Accomplice | magenta | 14 | 15/13/14 | over |  | A one-shot steal 3; a Help Yourself repeat on a card. |
| 24 | Roadie | green | 14 | 15/13/14 | over |  | Income per green member; a small engine. |
| 25 | Dabblers | guests | 14 | 16/13/14 | over |  | Two wild bodies; strong but what wild counts for takes rulings. |
| 26 | Philanthropist | silver | 14 | 13/16/14 | over |  | A smaller Largesse on arrival; repeats the spaces. |
| 27 | Line Cutters | guests | 14 | 14/16/13 | over |  | Going first every round for 2 resources and 3 followers overrides the catch-up order; a must-buy for the leader. |
| 28 | Con Men | guests | 14 | 13/14/15 | over | protected | Big one-time steal; plain. |
| 29 | Impressionist | green | 15 | 12/15/15 | UNDER | protected; 0 on C3 | Paid when anyone copies; cheap, passive. |
| 30 | Deprogrammers | red | 15 | 15/16/15 | over |  | Good link to the swap cards, but a cost of 3 for 4 followers and 4 red members is an always-buy. |
| 31 | Meddler | yellow | 15 | 15/14/15 | over |  | Changing one of each rival's resources can cost them a contest; aim is real, the wording is loose. |
| 32 | Jack-of-All-Trades | yellow | 15 | 15/16/15 | over |  | Makes full sets easier, which matters only for yellow's contest; quiet. |
| 33 | Window Dressers | blue | 15 | 15/17/11 | over |  | Cheap 3-member body with a shop wipe on recruit; a second Out of Style. |
| 34 | Fence | magenta | 15 | 10/15/17 | over |  | Paid when robbed; a soft answer to magenta, little to decide. |
| 35 | Misers | white | 15 | 15/15/14 | over |  | Pays for holding white at the end against cashing it in: a real hold-or-spend call. |
| 36 | Money Changers | white | 15 | 15/16/15 | over |  | Pays on every follower buy at the table; steady and quiet. |
| 37 | Caravan | yellow | 15 | 14/15/15 | over |  | Resources per color held each round; a bigger, slower Dyer. |
| 38 | Extortionist | magenta | 15 | 14/16/15 | over |  | Cutpurse doubled at 8; a sibling repeat. |
| 39 | Old Maid | guests | 16 | 16/17/14 | UNDER | 0 on C4 | A hot potato for Godparent, Guest of Honor and Double Agent; the table laughs when it moves. |
| 40 | Early Birds | purple | 16 | 17/16/16 | over |  | A clean counter to Hold Up and Bouncers that the table sees; turns off a whole kind of answer. |
| 41 | Debt Collectors | silver | 16 | 17/16/13 | over |  | Once-per-game 2 silver from each rival; a contest timing swing. |
| 42 | High Society | silver | 16 | 15/16/16 | over |  | Paid when rivals take Silver spaces; makes the gifts that pull rivals into silver pay you. |
| 43 | Patroness | blue | 16 | 16/17/16 | over |  | Pays on every bury, which blue does constantly; "per member or per event" needs a ruling. |
| 44 | Window Shopper | blue | 16 | 16/16/16 | over |  | Buries two members each round for their colors; clean denial, but who picks the two must be read. |
| 45 | Cutpurse | magenta | 16 | 15/16/16 | over |  | Small steady steal from the richest; cheap catch-up. |
| 46 | Kidnapper | magenta | 16 | 16/16/15 | UNDER | 0 on C4 | Takes a member from the same rival every round from round I; the victim loses a member early with no answer. |
| 47 | Shoplifter | magenta | 16 | 17/15/16 | over |  | A steal on every recruit; a quiet engine. |
| 48 | Brokers | white | 16 | 18/14/16 | over |  | +1 on White follower gains; cheap three bodies. |
| 49 | Smooth Talkers | silver | 16 | 18/16/16 | over |  | Silver becomes any color; a strong engine for the silver leader, nobody else feels it. |
| 50 | Proselytizers | red | 17 | 17/15/17 | over |  | A clean engine that pays every recruit, including red's free ones; nobody else at the table feels it. |
| 51 | Gossip | purple | 17 | 17/18/16 | over |  | Pays on every skipped turn, anyone's, so Hold Up and Bouncers build into it. |
| 52 | Closer | purple | 17 | 17/17/16 | over |  | Pays for going last, which purple already chases; a race for the last minion the table can see. |
| 53 | Trendsetters | blue | 17 | 17/17/17 | over |  | Each recruit churns one shop card, feeding Patroness; a cheap 3-member body. |
| 54 | Bodyguards | magenta | 17 | 15/17/17 | over |  | Rivals can't steal from you; a clean wall, but it turns magenta off against you. |
| 55 | Double Agent | magenta | 17 | 16/17/17 | UNDER | 0 on C4 | Swap itself for a rival's member; a surprise trade that plays off Foster Parents. |
| 56 | Anarchist | guests | 17 | 18/16/17 | UNDER | 0 on C4 | Swap any two members every round; fun for its owner, rough on victims. |
| 57 | Spoilsport | guests | 17 | 19/17/17 | UNDER | 0 on C4 | Cancels a contest you can't win; a block aimed at the leader. |
| 58 | Courier | purple | 17 | 17/17/19 | over |  | A full spread of colors on each double turn, feeding yellow sets; "consecutive turn" needs a ruling on snake ends. |
| 59 | Hostesses | silver | 17 | 18/15/17 | over |  | Silver to every rival each round for followers; a steady gift engine. |
| 60 | Desperado | magenta | 17 | 17/17/19 | over |  | Bigger steals while you trail: built-in catch-up. |
| 61 | Raiders | white | 17 | 15/17/19 | over |  | Once-per-game follower steal with a payment; a swing aimed at the leader. |
| 62 | Alchemists | guests | 17 | 18/16/17 | over |  | Everything pays as any; three bodies at 5, strong. |
| 63 | Mob | red | 17 | 17/17/18 | over |  | Up to +6 a round for the red leader; rivals can race the red count, but it pays the player already ahead. |
| 64 | Night Owls | purple | 17 | 17/16/19 | over |  | An extra minion every round from round II is a real rule bend; eight resources is a lot. |
| 65 | Cashier | white | 17 | 18/16/17 | over | protected | Cash In on a card; strong, repeats the space. |
| 66 | Extra Hand | guests | 17 | 13/17/17 | over |  | Once-per-game extra minion at cost 9; fine, pricey. |
| 67 | Loyalists | red | 18 | 18/17/18 | over |  | A clear block against red's swaps and Body Snatchers; rivals see it and aim elsewhere. |
| 68 | Creditor | silver | 18 | 18/18/19 | over |  | Take two followers from the rival you pick and leave them three silver: a fair aimed trade you can point at the leader. |
| 69 | Gardeners | yellow | 18 | 18/15/19 | over |  | Fills in the colors you lack, so it helps a thin pile most and feeds full sets. |
| 70 | Drifters | yellow | 18 | 19/17/18 | over |  | Pick a color to count as; feeds red and blue contests and variety cards, needs a marker. |
| 71 | Big Tent | yellow | 18 | 20/18/16 | over |  | Rewards exactly one member per color; a real shaping goal at game end. |
| 72 | Recluse | white | 18 | 20/18/17 | over | protected | Game End per wider rival; catch-up for a small cult. |
| 73 | Hoarder | white | 18 | 19/18/15 | over |  | Once-per-game turn everything white, then Cash In; a clear setup play. |
| 74 | Sore Loser | guests | 18 | 20/17/18 | over |  | Steal from the top contest winner when you win none; real catch-up. |
| 75 | Hot Streak | purple | 18 | 18/17/18 | over | protected | A once-a-game cash-in after a chain of turns; big when set up with Crunch Time, but counting turns in a row takes care. |
| 76 | Shopaholics | blue | 18 | 19/17/18 | over |  | Two buys every turn; a huge engine that rewards the leader. |
| 77 | Impersonator | green | 18 | 19/15/18 | over |  | Borrow a rival's ability each round; deep, needs a marker. |
| 78 | Wallflower | green | 18 | 18/17/18 | over |  | Doubles every copy you make, a strong engine with Echo and Reprise; ten resources is a lot. |
| 79 | Foster Parents | red | 19 | 19/20/18 | over |  | Rides on every swap red already does (Promote, Demote, Body Snatchers, Poach) and makes rivals think twice before trading with you. |
| 80 | Panel | red | 19 | 19/17/19 | over |  | A swap on recruit that combos with Foster Parents and Deprogrammers; "promote or demote" asks a new player to know two spaces. |
| 81 | Bouncers | purple | 19 | 19/18/20 | over |  | Skipping the next two rivals on recruit is a table moment with timing to choose, and feeds Gossip. |
| 82 | Second-Story Man | magenta | 19 | 20/19/19 | over |  | A steal just before contests are scored; swings a contest at the last moment, which rivals can see coming. |
| 83 | Stunt Double | green | 19 | 19/18/20 | over | protected | Doing your action twice on recruit makes you time your best space with the buy. |
| 84 | Mentor & Protégés | red | 19 | 19/18/19 | over |  | Two recruits for one buy, chains into Proselytizers and Recruiter; nine resources for a 3 is steep. |
| 85 | Godparent | silver | 19 | 20/18/19 | over |  | Give a member away for its cost in followers; pairs with Old Maid and Martyrs. |
| 86 | Debutantes | silver | 19 | 18/19/19 | over |  | Once-per-game double silver with a gift attached; a timing call around the contest. |
| 87 | Guest of Honor | silver | 19 | 19/18/20 | over |  | Every Silver space can turn a cheap member into +4 followers, linking to Godparent, Old Maid and Foster Parents; strong for a cost of 3. |
| 88 | Tribute Band | green | 19 | 19/17/19 | over |  | Do everything a rival did this round once: a huge moment, with fourteen resources the barrier. |
| 89 | Body Snatchers | red | 20 | 20/18/20 | over |  | Every round you pick a rival member of the same cost to trade for; clear, aimed, feeds Foster Parents and Deprogrammers, and Loyalists answer it. |
| 90 | Tourist | yellow | 20 | 20/18/20 | over |  | Followers for holding a spread of colors, every round; a steady scorer that pushes you wide. |
| 91 | Fan Club | green | 20 | 20/16/20 | over |  | Copies what the leader took: a clean catch-up hook. |
| 92 | Martyrs | white | 21 | 21/21/21 | over |  | Leaving pays you its cost, so a rival's Poach or swap backfires and your own Farewell pays twice; plays off many colors. |
| 93 | Doppelganger | green | 21 | 21/17/21 | over | protected | Becomes your best member: clear, and better with the cards around it. |
| 94 | Encore | green | 21 | 21/18/21 | over |  | Doubles one On Recruit; timing the big one is a real choice. |
| 95 | Party Crasher | guests | 21 | 21/18/21 | over | protected | Once a game you get into the space that was already taken; a rule bend everyone feels. |

## Wheel spaces (48; 4 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Shake Down | magenta | 11 | 11/11/12 | UNDER | round II; hard fail x2: turn flow: the rival chooses a member and a payment during the owner's turn; 0 on C4 | The victim chooses their own punishment, which feels bad, and the wording is long. |
| 2 | Potluck | silver | 15 | 15/15/12 | UNDER | protected; round II; hard fail x2: turn flow: each rival chooses a resource to give during the owner's turn | Every rival pays one resource and gets two silver: a fair trade but small, and each rival has to choose on your turn. |
| 3 | Stash | magenta | 11 | 12/11/11 | UNDER | round I | The shared fuel-plus-recruit-bonus template again; nothing magenta. |
| 4 | Allowance | white | 11 | 12/11/11 | UNDER | round I | The shared fuel-plus-recruit-bonus template; nothing white. |
| 5 | Polish | silver | 13 | 12/13/14 | over | round I | Converter; useful glue, no moment. |
| 6 | Gather | red | 14 | 14/11/15 | over | round I | Clear plain anchor with a recruit kicker; nobody else notices, and it is the same text as Stash and Allowance. |
| 7 | Bury | blue | 14 | 14/16/14 | over | round II | A smaller Savings; the half-cost blue payout is a sum to work out. |
| 8 | Exchange | white | 14 | 15/14/13 | over | round I | Resources into followers on a sliding cap; fine, a bit fiddly. |
| 9 | Build Up | green | 14 | 14/11/14 | over | round I | The plain fuel anchor. |
| 10 | Demote | red | 15 | 15/15/14 | over | round II | Mirror of Promote that trades down; the downgrade is rarely what you want, so it mostly lives as a weaker sibling or a Foster Parents trigger. |
| 11 | Right Away | purple | 15 | 17/15/15 | over | round I | A small double turn; clean, mostly a tempo tool. |
| 12 | Estate Sale | white | 15 | 15/13/15 | over | round II | Farewell paying white instead of followers: a weaker sibling. |
| 13 | Peek | blue | 15 | 18/15/15 | over | round I | Look at and order the top 4, recruit one; strong, but hidden order the table can't see. |
| 14 | Harvest | yellow | 16 | 16/13/17 | over | round I | The plain fuel anchor, in any colors, which fits a color about going broad. |
| 15 | Leaders' Tax | yellow | 16 | 14/17/16 | over | round I | Pays by where rivals sit; reads the board but small. |
| 16 | New Blood | yellow | 16 | 18/16/16 | over | round I | Recruit-bonus template with a yellow twist (a new color); fine. |
| 17 | Melting Pot | yellow | 16 | 16/15/17 | over | round II | Pays for how broad you already are, which rewards the wide cult more than the one behind. |
| 18 | Savings | blue | 16 | 17/14/16 | over | round I | Fuel plus a bury before buying; a small deny. |
| 19 | Lie Low | magenta | 16 | 16/17/16 | over | round I | A steal and a shield for the round; needs a marker on the table. |
| 20 | Sleep In | purple | 16 | 16/19/16 | over | round I | A big purple pile, paid for by placing last; the token and its timing take a rules read. |
| 21 | Hold Up | purple | 17 | 17/18/17 | over | round I | The skip lands on whoever is next, even you, so timing is a real call and the victim can see it coming. |
| 22 | Tryout | red | 17 | 15/17/17 | over | round I | Borrows any shop card's On Recruit without buying it; reads clean, links every color, and keeps the card for someone else. |
| 23 | Last Call | purple | 17 | 17/17/17 | over | round II | A big payoff for holding minions back, at the cost of going last; the token rules make it a read. |
| 24 | Walk-In | red | 17 | 18/15/17 | over | round I | Free blind member plus a gift to every rival; fast, exciting, the one allowed pile draw. |
| 25 | Out of Style | blue | 18 | 19/18/18 | over | round I | Clears a whole color from the shop; a real denial play that rivals feel. |
| 26 | Heist | magenta | 18 | 18/16/19 | over | round II | Three followers off the leader: plain, felt, a catch-up tool. |
| 27 | Farewell | white | 18 | 17/18/18 | over | round II | Cast out a member for its cost in followers; a clean white trade that combos Martyrs. |
| 28 | Toast | silver | 18 | 18/18/16 | over | round I | A big silver gain with a visible gift to everyone; a clean anchor for the giving color. |
| 29 | Sweet Nothings | silver | 18 | 18/17/18 | over | round II | You give your own silver to get two of any color back each: a real hold-versus-give call on the silver contest. |
| 30 | Splurge | white | 18 | 18/19/16 | over | round I | Big followers on a pricey recruit, but the per-2 then per-1 math is a sum to work out. |
| 31 | Sample | green | 18 | 20/18/16 | over | round II | Borrow a rival's On Recruit; a clever link, needs a scan of rivals' cards. |
| 32 | Promote | red | 19 | 19/20/18 | over | round II | The signature red swap: you trade up out of a rival's cult; strong aim choice, the victim still gets a member back. |
| 33 | Makeover | yellow | 19 | 20/17/19 | over | protected; round III (rework only under 10) | Rearrange everything in round III to finish sets and swing held-color contests. |
| 34 | Reprise | green | 19 | 20/15/19 | over | round I | Copy your own minion's action; strong and clear. |
| 35 | Cover | green | 19 | 19/19/19 | over | round II | Copy an empty action, so the unused spaces still pay. |
| 36 | Initiation | red | 19 | 19/21/19 | over | round III (rework only under 10) | Round III burst anyone can grab: a free member up to 8, plain and powerful. |
| 37 | Overtime | purple | 19 | 19/19/18 | over | round III (rework only under 10) | A round III extra minion: plain, and a burst any player can use. |
| 38 | Party Gifts | silver | 19 | 19/19/20 | over | round I | Six followers for gifting three silver, with a real call about who you feed in the silver contest; strong for round I. |
| 39 | Help Yourself | magenta | 20 | 20/19/20 | over | round I | The core steal, scaling by round, aimed where it hurts the leader. |
| 40 | Housewarming | yellow | 20 | 20/21/20 | over | round II | A free member in a new color: the yellow idea in one line. |
| 41 | Recruit Twice | blue | 20 | 19/20/20 | over | round II | Two recruits in one turn; plain and big. |
| 42 | Cash In | white | 20 | 21/20/19 | over | round III (rework only under 10) | All white into followers in round III; the payoff of white's hoard. |
| 43 | Greatest Hits | green | 20 | 20/20/21 | over | round III (rework only under 10) | The round III payoff for a cult of On Recruit members. |
| 44 | Poach | magenta | 21 | 21/21/20 | over | round III (rework only under 10) | The round III member grab; clear, felt, and Martyrs and Loyalists-style answers exist. |
| 45 | Crunch Time | purple | 21 | 21/21/21 | over | protected; round II | Three turns in a row: a big change to the snake in few words, and it sets up Courier and Hot Streak. |
| 46 | Largesse | silver | 21 | 20/21/21 | over | round III (rework only under 10) | Round III big gift-for-followers that also hands rivals contest silver; clear and dramatic. |
| 47 | Spree | blue | 21 | 21/21/21 | over | round III (rework only under 10) | Three recruits in round III is the burst a trailing player can grab. |
| 48 | Echo | green | 21 | 21/21/21 | over | protected; round I | Copy the previous action: scales with the board, few words. |

## Notes on r3 under rubric v1.2 (Evaluators, Nov 4 12:45pm)

- Same r3 judges' sheets; only C4 (Fun) was rescored, for all 147 cards, by 3 fresh judges per half (cards with a C4 0 in r3, then every other card, so the change could lower scores as well as raise them). Each new judge n's C4 replaced old judge n's.
- C4 agreement alone (rank correlation, pairs): 0.80, 0.80, 0.83. Over the Process critic's 0.5 bar, so no worked examples needed yet.
- Anchors (10 cards with no r3 C4 0): 8 held, Hold Up and Out of Style fell 2 to 1 (their 2 was rivals reacting, now C5's question). No upward drift on anchors.
- Under the bar: 55 in r3, 26 now. 34 cards came over, mostly quiet income and Game End scorers whose only 0 was "nobody notices". 5 fell under: Spoilsport, Doormen, Double Agent, Old Maid, Anarchist, each a sting with no answer.
- Cards kept at C4 0 by 2 or more judges: Shake Down, Kidnapper, Anarchist, Bell Ringer (plant), Spoilsport, Doormen, Double Agent, Old Maid.
- Cory's calls: held-out half B 71% (pass); all calls 54% against r3's 65%, because several quiet cards he dislikes (Cash In, Big Tent) came over the bar.
- Grifter stays under (Worth it 0 from all three) and is left out of the targets: Cory likes it (director, 12:16pm).
