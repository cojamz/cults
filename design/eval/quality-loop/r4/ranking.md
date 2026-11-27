# Ranking (r4): worst first

From 3 blind paper judges (judge-1.json, judge-2.json, judge-3.json), median total of 20. Bar: 13 or more, no 0 on Clear, Feels good or Fun, no hard fail from 2+ judges. Made by scripts/quality/ranking.mjs.


Live deck at main's v0.99.569 (build e129b6b4), judged on rubric v1.2 like r3, so the numbers compare. The judge brief now carries Cory's Nov 4 calls: Heiresses is credited for its Cash In combo, with no bonus for being once per game, and a flat one-color gainer scores 0 on Feels good and Its color (Landlord). A target named by a contest is not a rival-resources fail.
Columns: **Was (r3)** is the same card's median in r3 (– when it wasn't ranked). **New** marks a card new or reworded since r3. **Play A/B** is the blind play result against the card it replaced (pass at +0.3 or more on same-round games; "bot bug" means the bots misplayed it, so the run counts neither way).
Plants: Scavenger (the "good" plant) now lands near the bottom because all judges mark its choice on a rival's turn as a turn-flow fail, which is correct under the current rules; the plant is out of date, not the judges.

## Checks on the judges

- Agreement (rank correlation per judge pair, bar 0.6): members 0.70, 0.63, 0.75; spaces 0.89, 0.84, 0.83. Passed.
- Planted cards: Bell Ringer (bad) 1/96 from worst; Envy (bad) 1/96 from worst; Clerk (bad) 3/96 from worst; Scavenger (good) 3/96 from worst MISSED. At least one missed.
- Cory's past calls, held-out half B, cards unchanged since he spoke (bar 70%): B: 3/6 disliked in the bottom half, 9/11 liked in the top half (71%). Passed. Half A (may appear in prompts, so not a test): A: 9/11 disliked in the bottom half, 6/13 liked in the top half (63%).
- Cory's past calls, all: all: 14/25 disliked in the bottom half, 15/24 liked in the top half (59%); leaving out cards reworked since he spoke: not stale: 12/18 disliked in the bottom half, 15/24 liked in the top half (64%).
- Half B misses (read before fixing; the judge may be right): Cash In (disliked, 45/48 from worst), Big Tent (disliked, 90/95 from worst), Old Maid (disliked, 87/95 from worst), Hot Streak (liked, 34/95 from worst), Agents (liked, 40/95 from worst).

## Members (95; 11 under the bar)

| # | Card | Color | Median | Was (r3) | New | Play A/B | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Cutpurse | magenta | 14 | 16 |  |  | 14/13/14 | UNDER | hard fail x3: relies on a rival having more resources (target picked by comparing rivals' resources) | Targets the rival with the most resources. |
| 2 | Extortionist | magenta | 15 | 15 |  |  | 15/13/15 | UNDER | hard fail x3: relies on a rival having more resources (target picked by comparing rivals' resources) | Targets the rival with the most resources twice a round. |
| 3 | Landlord | white | 8 | 12 |  |  | 8/8/8 | UNDER | 0 on C3 | Flat +2 white; nothing but a flat one-color gain. |
| 4 | Regular | blue | 9 | 9 |  |  | 9/9/12 | UNDER | 0 on C3 | +1 blue on follower buys has nothing to do with the shop. |
| 5 | Volunteer | red | 10 | 10 |  |  | 9/10/10 | UNDER | 0 on C3 | Pure cheap filler: worth 1 follower and one red member for the contest; nothing to feel or decide. |
| 6 | Recruiter | red | 11 | 9 |  |  | 11/11/17 | UNDER | 0 on C3 | +1 red per recruit at cost 6 is a small trickle nobody feels. |
| 7 | Toastmaster | silver | 11 | 12 |  |  | 11/11/14 | UNDER | 0 on C3 | +1 follower per Silver space: forgettable. |
| 8 | Critic | blue | 12 | 10 |  |  | 12/12/17 | UNDER | 0 on C3 | +1 follower when rivals recruit blue; small. |
| 9 | Timekeeper | purple | 12 | 11 |  |  | 12/11/13 | UNDER |  | Same 'per member of my color' game-end shape as Snobs and Old Money; nothing purple about it. |
| 10 | Old Money | white | 12 | 10 |  |  | 12/11/13 | UNDER |  | Per white member at game end; repeats Snobs and Timekeeper. |
| 11 | Patriarch | red | 13 | 12 |  |  | 15/11/13 | over |  | Generic game-end scorer that works the same in any wide cult; nobody reacts. |
| 12 | Dyer | yellow | 13 | 11 |  |  | 13/12/14 | over |  | Same per-color-held shape as Tourist and Caravan, paid in yellow. |
| 13 | Snobs | blue | 13 | 12 |  |  | 14/11/13 | over |  | Count-your-color scorer; quiet. |
| 14 | Picket Line | purple | 13 | – | NEW | pass +0.42 vs Shift Crew | 18/13/13 | over |  | Passive +1 purple when rivals use purple; counts 3 for 4 cost is its real value, the ability is forgettable. |
| 15 | Line Cutters | guests | 13 | 14 |  |  | 13/11/18 | over |  | First every round for 2 cost and worth 3: must-buy that undoes catch-up turn order. |
| 16 | Night Watch | purple | 14 | 14 |  |  | 14/11/15 | over |  | Pays when a rival takes Goes Last, but 'per minion on it' is unclear about what is counted. |
| 17 | Roadie | green | 14 | 13 |  |  | 14/12/15 | over |  | Per green member income; generic shape, no copying. |
| 18 | Philanthropist | silver | 14 | 13 |  |  | 15/13/14 | over |  | A small Party Gifts on recruit; repeats the color's spaces. |
| 19 | Con Men | guests | 14 | 14 |  |  | 16/13/14 | over | protected | Steal 5 on recruit; plain. |
| 20 | Deprogrammers | red | 15 | 15 |  |  | 15/17/15 | over |  | Counts as 4 red members for 3 cost is a contest swing; the follower sting rides on member steals. |
| 21 | Debt Collectors | silver | 15 | 16 |  |  | 15/16/13 | over |  | Once-per-game silver collection from everyone; fine timing call. |
| 22 | Meddler | yellow | 15 | 15 |  |  | 15/15/14 | over |  | Breaks rivals' sets one resource each; small jab, fiddly. |
| 23 | Window Dressers | blue | 15 | 15 |  |  | 16/15/14 | over |  | A one-time shop flush; its counts-3 for 4 cost is the real draw. |
| 24 | Double Agent | magenta | 15 | 18 |  |  | 15/19/14 | over |  | Swap with a rival on recruit; whether it then fires for them is unclear. |
| 25 | Kidnapper | magenta | 15 | 16 |  |  | 15/15/14 | UNDER | 0 on C4 | Takes a member from the widest rival every round; the victim loses members early with no say. |
| 26 | Hostesses | silver | 15 | 16 |  |  | 16/15/14 | over |  | Automatic gift engine each round: +3 followers for 3 silver to rivals; no decision once bought. |
| 27 | Caterer | silver | 15 | 13 |  |  | 15/11/16 | over |  | +1 silver on any gift, the whole table's; small trigger. |
| 28 | Duty Collector | yellow | 15 | – | NEW |  | 15/15/16 | over |  | Pays when rivals recruit your colors; small and needs attention. |
| 29 | Money Changers | white | 15 | 14 |  |  | 15/12/15 | over |  | Pays on anyone's follower buys; constant small trickle. |
| 30 | Loyalists | red | 16 | 18 |  |  | 17/15/16 | over |  | Clean shield against red's swaps; switches off a whole kind of answer for its owner's cult. |
| 31 | Misers | white | 16 | 14 |  |  | 16/15/16 | over |  | Holding white for game end against Cash In is a real choice. |
| 32 | Mob | red | 16 | 16 |  |  | 16/16/16 | over |  | Rewards the red contest leader again each round; 12 cost makes it hard to move and pure rich-get-richer. |
| 33 | Closer | purple | 16 | 17 |  |  | 16/16/16 | over |  | Rewards the same last minion the contest already counts; neat but a small bonus. |
| 34 | High Society | silver | 16 | 16 |  |  | 16/13/16 | over |  | Pays when rivals take Silver spaces; same shape as Picket Line. |
| 35 | Trendsetters | blue | 16 | 17 |  |  | 16/15/17 | over |  | Each recruit cycles the shop; fine, overlaps Window Shopper. |
| 36 | Bodyguards | magenta | 16 | 18 |  |  | 17/14/16 | over |  | Full theft immunity; clear but switches off magenta against you. |
| 37 | Agents | green | 16 | 13 |  |  | 17/13/16 | over | protected | Rivals can't copy you; shuts off green. |
| 38 | Extra Hand | guests | 16 | 15 |  |  | 13/16/16 | over |  | An extra minion once, at 9 cost. |
| 39 | Dabblers | guests | 16 | 13 |  |  | 14/16/16 | over |  | Two wild members for counts; 'wild' needs a rules lookup. |
| 40 | Anarchist | guests | 16 | 17 |  |  | 16/17/16 | over |  | Swap any two members each round; chaotic and powerful, hard to read. |
| 41 | Sore Loser | guests | 16 | 18 | NEW (reworded) |  | 15/18/16 | over |  | Steal 5 followers from the contest leader if you win none; catch-up. |
| 42 | Night Owls | purple | 16 | 16 |  |  | 15/16/17 | over |  | A free extra minion each round from II, placed last, helps the went-last contest; strong but 8 cost and wordy timing. |
| 43 | Hot Streak | purple | 16 | 17 |  |  | 15/16/17 | over | protected | Once-per-game burst that pays off Crunch Time and Right Away; counting 'turns in a row just before this one' needs care at a table. |
| 44 | Smooth Talkers | silver | 16 | 15 |  |  | 16/18/16 | over |  | Silver as any color is a strong rule bend at 11 cost, overlapping Alchemists. |
| 45 | Body Snatchers | red | 17 | 20 |  |  | 17/16/17 | over |  | Every Round Start swap with a rival makes the table watch its members; Loyalists is the visible answer. |
| 46 | Early Birds | purple | 17 | 17 |  |  | 17/15/17 | over |  | Cheap immunity to skips; a clean counter to Hold Up and Bouncers. |
| 47 | Jack-of-All-Trades | yellow | 17 | 14 | NEW (reworded) | pass +0.75 vs Tastemaker | 16/19/17 | over |  | Yellow as wild in sets; simple fix that sharpens the yellow contest. |
| 48 | Window Shopper | blue | 17 | 16 |  |  | 17/17/16 | over |  | Cycles the shop and pays colors; steady blue churn. |
| 49 | Doormen | blue | 17 | 14 |  |  | 17/16/17 | over |  | Swapping a rival's member for a shop one each round is a strong sting; replacement rule needs a read. |
| 50 | Accomplice | magenta | 17 | 14 |  |  | 18/15/17 | over |  | Cheap steal 3 on recruit; plain and punchy. |
| 51 | Grifter | magenta | 17 | 11 |  |  | 17/19/16 | over |  | Steal scales with cult size; rewards the wide leader. |
| 52 | Shoplifter | magenta | 17 | 16 |  |  | 17/14/17 | over |  | Steal 1 per recruit; small engine piece. |
| 53 | Recluse | white | 17 | 18 |  |  | 15/17/18 | over | protected | Pays for staying small, matching white's 'not members' idea; a clear catch-up for small cults. |
| 54 | Brokers | white | 17 | 15 |  |  | 17/17/17 | over |  | +1 on every White follower payout; steady engine piece. |
| 55 | Impressionist | green | 17 | 14 |  |  | 17/14/17 | over | protected | Pays on any copy at the table; small. |
| 56 | Panel | red | 17 | 19 |  |  | 16/17/19 | over |  | A Promote or Demote on recruit is a strong red link, but 'promote or demote' needs the space text looked up, and it's not clear whose members it reaches. |
| 57 | Seamstress | yellow | 17 | – | NEW | no +1.17 vs Harmonist; pass +0.58 vs Harmonist | 15/17/17 | over |  | Once-per-game doubling of full sets is a big moment, but what 'double your full sets' gives you needs explaining. |
| 58 | Caravan | yellow | 17 | 13 |  |  | 16/17/18 | over |  | +1 of each held color every round fuels sets; strong but 9 cost and pays the already-wide player. |
| 59 | Hawker | blue | 17 | 15 |  |  | 17/17/17 | over | hard fail x1: turn flow: asks rivals to choose during another player's turn | Offering a shop member round the table is a real auction moment, but wordy. |
| 60 | Shopaholics | blue | 17 | 17 |  |  | 17/17/19 | over |  | Two buys every turn bends the core rule; at 9 cost it runs away for whoever lands it. |
| 61 | Impersonator | green | 17 | 17 |  |  | 17/17/17 | over |  | Borrowing a rival's ability is fun, but which one it has must be remembered. |
| 62 | Tribute Band | green | 17 | 18 |  |  | 17/20/17 | over |  | Do all of a rival's actions once: a huge moment at 14 cost. |
| 63 | Creditor | silver | 18 | 18 |  |  | 16/18/18 | over |  | Forced trade of 2 followers for 3 silver each round; aim it at the leader, but 'once per round' on a 4-follower swing is strong. |
| 64 | Proselytizers | red | 18 | 16 |  |  | 18/17/18 | over |  | +1 follower per recruit is the red engine piece; stacks with Gather, Initiation and free recruits. |
| 65 | Bouncers | purple | 18 | 19 |  |  | 19/18/18 | over |  | Two rivals skip on recruit: a big, visible moment that feeds Gossip; a fair sting since it's once and shared. |
| 66 | Gossip | purple | 18 | 17 |  |  | 17/18/18 | over |  | Rides on Hold Up and Bouncers, anyone's skips; fires maybe once a round, so 6 cost is a stretch. |
| 67 | Gardeners | yellow | 18 | 17 |  |  | 19/18/16 | over |  | Fills the colors you lack each round, so it pays more to the player with gaps; clean set-building. |
| 68 | Patroness | blue | 18 | 15 |  |  | 18/16/18 | over |  | Pays on any bottom-of-pile event, the whole blue toolkit's; connects many cards. |
| 69 | Fence | magenta | 18 | 15 |  |  | 18/18/16 | over |  | Pays when robbed; a neat answer to theft. |
| 70 | Raiders | white | 18 | 17 |  |  | 19/17/18 | over |  | Steal 4 followers once, paid in white; strong but reads like magenta. |
| 71 | Spoilsport | guests | 18 | 19 |  |  | 18/19/18 | over |  | Cancel a contest you can't win; real denial aimed at a leader. |
| 72 | Godparent | silver | 18 | 19 |  |  | 16/21/18 | over |  | Give away a member for its cost in followers once; the gift and the timing make it a clean silver idea. |
| 73 | Guest of Honor | silver | 18 | 18 | NEW (reworded) | pass +0.71 vs Polisher | 18/19/18 | over |  | +4 for gifting a cheap member each Silver space; makes giving members a plan and pairs with Old Maid. |
| 74 | Tourist | yellow | 18 | 18 |  |  | 18/18/18 | over |  | Followers per color held every round; a strong steady engine. |
| 75 | Wallflower | green | 18 | 16 |  |  | 17/18/18 | over |  | Doubles resources from copies, a green engine; 10 cost. |
| 76 | Fan Club | green | 18 | 19 |  |  | 20/17/18 | over |  | Copy the leader's space on recruit; catch-up. |
| 77 | Alchemists | guests | 18 | 16 |  |  | 17/18/18 | over |  | Any resource pays any color when recruiting; strong at 5, counts 3. |
| 78 | Old Maid | guests | 19 | 18 |  |  | 19/19/16 | over |  | A hot potato: dump it with Promote, Demote, Godparent or Guest of Honor. |
| 79 | Foster Parents | red | 19 | 18 | NEW (reworded) | pass +1.08 vs Greeters; pass +0.87 vs Greeters | 20/19/18 | over |  | Plays off Promote, Demote, Body Snatchers, Poach, Double Agent and rival gifts; cheap, counts 2, and builds a member-trading engine in few words. |
| 80 | Mentor & Protégés | red | 19 | 18 |  |  | 17/19/19 | over |  | Two recruits for one, counts 3 toward the red-member contest; clear and strong, the choice is only when to afford 9. |
| 81 | Debutantes | silver | 19 | 18 |  |  | 17/19/19 | over |  | Double your silver once, with rivals topped up; timing it before a silver-contest count or Smooth Talkers spend is a real call. |
| 82 | Hoarder | white | 19 | 17 |  |  | 18/19/20 | over |  | Turn everything white once, then Cash In; a clear setup at 8 cost. |
| 83 | Song Request | green | 19 | – | NEW | pass +0.84 vs Busker | 20/19/18 | over |  | Copy a rival's space once a round, without placing a minion; strong reading of the board at 7 cost. |
| 84 | Stunt Double | green | 19 | 18 |  |  | 20/19/16 | over | protected | Repeat the action you just took on recruit; good after Spree or Housewarming. |
| 85 | Doppelganger | green | 19 | 19 |  |  | 17/19/19 | over | protected | Becomes a copy of your best member; unclear whether it copies counts-as and worth. |
| 86 | Encore | green | 19 | 19 | NEW (reworded) | bot bug -0.18 vs Chronicler; no -0.28 vs Chronicler | 17/19/19 | over |  | Doubles one On Recruit; a timing call that grows with what you buy next. |
| 87 | Party Crasher | guests | 19 | 20 |  |  | 18/20/19 | over | protected | Place on a taken space once; bends the blocking rule. |
| 88 | Drifters | yellow | 20 | 17 |  |  | 19/20/20 | over |  | Choose its color: plays off Big Tent, Mob, the red contest and every per-color count; a clever cheap connector. |
| 89 | Second-Story Man | magenta | 20 | 20 |  |  | 20/20/18 | over |  | Steal 2 before contests: swings a contest and can be aimed at a leader. |
| 90 | Courier | purple | 20 | 17 |  |  | 20/20/18 | over |  | Consecutive turns paying one of each color links purple timing to yellow sets; builds with Right Away and Crunch Time. |
| 91 | Big Tent | yellow | 20 | 17 |  |  | 19/20/20 | over |  | Up to +2 per color with one member sharpens yellow's breadth into a clear end-game plan. |
| 92 | Desperado | magenta | 20 | 17 |  |  | 16/21/20 | over |  | Makes every steal bigger while you trail; real catch-up. |
| 93 | Heiresses | white | 20 | 10 |  |  | 19/20/21 | over |  | White per member, then Cash In: a strong combo with a real once-per-game timing call. |
| 94 | Cashier | white | 20 | 15 |  |  | 14/20/20 | over | protected | A portable Cash In for 3 that plays off Heiresses and Hoarder; repeats its round III space. |
| 95 | Martyrs | white | 20 | 21 |  |  | 20/21/20 | over |  | Pays its cost when it leaves; combos with Farewell, Promote, Godparent, Poach. |

## Wheel spaces (48; 5 under the bar)

| # | Card | Color | Median | Was (r3) | New | Play A/B | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Gather | red | 10 | 13 |  |  | 11/10/10 | UNDER | round I | Same three-round gain-plus-recruit-bonus template as Stash and Allowance; long text for a plain gain, nobody else at the table notices. |
| 2 | Stash | magenta | 11 | 10 |  |  | 11/10/11 | UNDER | round I | Identical to Gather and Allowance; no magenta angle. |
| 3 | Allowance | white | 11 | 10 |  |  | 11/10/11 | UNDER | round I | Identical to Gather and Stash; no white angle. |
| 4 | Build Up | green | 11 | 13 |  |  | 11/11/10 | UNDER | round I | The plain fuel anchor for green. |
| 5 | Savings | blue | 13 | 16 |  |  | 13/13/15 | over | round I | Blue fuel plus a shop-cycling rider; fine. |
| 6 | Shake Down | magenta | 13 | 11 |  |  | 14/13/13 | UNDER | round II; hard fail x1: turn flow: asks rivals to choose during another player's turn; 0 on C4 | The victim chooses their own punishment, a member or its cost; it feels bad, and the rival chooses on your turn. |
| 7 | Sweet Talk | silver | 13 | – | NEW |  | 13/13/14 | over | round II | Silver plus conversion, already what Polish does; quiet. |
| 8 | Exchange | white | 13 | 13 |  |  | 12/13/15 | over | round I | Resources to followers at 2 each; close to the follower buy, already doable another way. |
| 9 | Potluck | silver | 14 | 14 |  |  | 14/14/14 | over | protected; round II; hard fail x1: turn flow: asks rivals to choose during another player's turn | Rivals pay one then gain two; everyone touches it but the trade is muddy. |
| 10 | Estate Sale | white | 14 | 14 | NEW (reworded) |  | 14/16/14 | over | round II | Farewell paid in white; repeats its sibling. |
| 11 | Harvest | yellow | 14 | 15 |  |  | 14/16/12 | over | round I | The plain fuel space with color choice; anchors sets. |
| 12 | Demote | red | 15 | 15 |  |  | 16/15/15 | over | round II | Mirror of Promote; giving away the pricier member is rarely right, so it mostly repeats its sibling with a weaker pull. |
| 13 | Walk-In | red | 15 | 17 |  |  | 15/14/16 | over | round I | Blind recruit from the pile with a gift to every rival; you don't know what you pay for until it flips. |
| 14 | Polish | silver | 15 | 12 |  |  | 14/15/15 | over | round I | Clean silver-to-colors converter; useful fuel, little table reaction. |
| 15 | Peek | blue | 15 | 16 |  |  | 15/17/15 | over | round I | Setting up the pile is a smart blue move, though the order must be remembered. |
| 16 | Bury | blue | 16 | 14 |  |  | 16/13/16 | over | round II | Hate-drafting a shop member for half its cost; clear interaction. |
| 17 | Leaders' Tax | yellow | 16 | 16 |  |  | 16/16/17 | over | round I | Reads where rivals sit to pick a color; interactive but takes a count. |
| 18 | Makeover | yellow | 16 | 19 |  |  | 16/19/16 | over | protected; round III (rework only under 10) | Round III rearrange fixes sets and contests; quiet but useful. |
| 19 | Toast | silver | 16 | 17 |  |  | 16/19/15 | over | round I | Big silver with gifts to everyone; feeds rivals' silver contest, clear but blunt. |
| 20 | New Blood | yellow | 16 | 15 |  |  | 16/18/15 | over | round I | Rewards recruiting a new color, good yellow tie, wordy round table. |
| 21 | Splurge | white | 16 | 16 |  |  | 15/16/16 | over | round I | Followers for paying big on a recruit; 'every 1 in round II' leaves round III unclear, and it fits white loosely. |
| 22 | Right Away | purple | 17 | 15 |  |  | 16/17/17 | over | round I | Two turns in a row in one line; feeds Courier and Hot Streak, small gain on its own. |
| 23 | Melting Pot | yellow | 17 | 15 |  |  | 17/17/17 | over | round II | Scales with your color spread; simple yellow payoff. |
| 24 | Lie Low | magenta | 17 | 17 |  |  | 17/16/17 | over | round I | Small steal plus a round of safety; clean defensive pick. |
| 25 | Reprise | green | 17 | 19 |  |  | 17/18/17 | over | round I | Copy your own earlier action; clean but self-contained. |
| 26 | Tryout | red | 18 | 16 |  |  | 18/18/15 | over | round I | Borrowing a shop member's On Recruit without buying it is a clean twist on the shop and pays off whatever is face up. |
| 27 | Out of Style | blue | 18 | 19 |  |  | 18/20/17 | over | round I | Clears a color from the shop; denies rivals' targets in one line. |
| 28 | Last Call | purple | 18 | 17 |  |  | 18/18/17 | over | round II | Pays for holding minions back and grabs the last spot; strong but wordy. |
| 29 | Overtime | purple | 18 | 18 |  |  | 14/18/18 | over | round III (rework only under 10) | An extra minion in round III is a clear burst; generic rather than purple's turn-order idea. |
| 30 | Promote | red | 19 | 19 |  |  | 19/21/18 | over | round II | Trading up into a rival's better member is a real table moment and feeds Foster Parents and Deprogrammers; give/recruit wording needs a read. |
| 31 | Hold Up | purple | 19 | 18 |  |  | 19/19/18 | over | round I | Skipping whoever is next, even yourself, is a short rule that bends the snake; the self-skip makes timing a real choice. |
| 32 | Help Yourself | magenta | 19 | 20 |  |  | 19/20/18 | over | round I | Scaling aimed theft; the core magenta check on hoards. |
| 33 | Initiation | red | 19 | 18 |  |  | 19/18/19 | over | round III (rework only under 10) | A free recruit up to 8 in round III is a plain, big burst any trailing player can grab. |
| 34 | Housewarming | yellow | 19 | 19 | NEW (reworded) | pass +0.48 vs Big New Blood | 19/20/18 | over | round II | Free new-color recruit up to 5 pushes variety cleanly. |
| 35 | Recruit Twice | blue | 19 | 19 |  |  | 19/20/19 | over | round II | An extra buy is the most valuable thing late; plain and strong. |
| 36 | Sample | green | 19 | 17 |  |  | 18/20/19 | over | round II | Borrow a rival member's On Recruit; pick the best one on the table. |
| 37 | Cover | green | 19 | 19 |  |  | 19/20/17 | over | round II | Copy an empty action; dodges blocking cleanly. |
| 38 | Greatest Hits | green | 19 | 19 |  |  | 19/20/19 | over | round III (rework only under 10) | Every On Recruit again in round III; pays off a built cult. |
| 39 | Heist | magenta | 20 | 18 |  |  | 20/20/20 | over | round II | Steal 3 followers: plain and aimable at the leader. |
| 40 | Poach | magenta | 20 | 20 |  |  | 20/20/20 | over | round III (rework only under 10) | Round III outright member take; big and clear. |
| 41 | Sleep In | purple | 20 | 17 |  |  | 20/20/15 | over | round I | Big purple plus the Goes Last token ties straight into the went-last contest; a clear hold-or-take call. |
| 42 | Crunch Time | purple | 20 | 20 |  |  | 20/20/20 | over | protected; round II | Two turns right away in few words reshapes the snake; great burst for whoever needs it. |
| 43 | Party Gifts | silver | 20 | 19 |  |  | 19/20/20 | over | round I | Spend the bank's silver on rivals for 6 followers; aiming the gift at who's racing the silver contest is a real choice. |
| 44 | Spree | blue | 20 | 20 |  |  | 20/20/19 | over | round III (rework only under 10) | Three recruits in round III is a burst any trailer can grab. |
| 45 | Cash In | white | 20 | 19 |  |  | 19/20/22 | over | round III (rework only under 10) | The payoff of white's hoard in one line; Heiresses, Hoarder and Estate Sale all point here. |
| 46 | Largesse | silver | 21 | 21 |  |  | 19/21/21 | over | round III (rework only under 10) | Round III giveaway for up to 10 followers that also feeds rivals' silver contest; a burst a trailing player can use. |
| 47 | Farewell | white | 21 | 18 | NEW (reworded) |  | 19/21/22 | over | round II | Cast out a member for its cost in followers is White's clearest idea; plays off Martyrs, the blue member contest and the shop. |
| 48 | Echo | green | 21 | 20 |  |  | 21/20/21 | over | protected; round I | Copy the previous action: tiny text, deep because of whatever just happened. |
