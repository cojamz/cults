# Ranking (r2): worst first

From 3 blind paper judges (judge-1.json, judge-2.json, judge-3.json), median total of 20. Bar: 13 or more, no 0 on Clear, Feels good or Fun, no hard fail from 2+ judges. Made by scripts/quality/ranking.mjs.

## Checks on the judges

- Agreement (rank correlation per judge pair, bar 0.6): members 0.80, 0.84, 0.78; spaces 0.82, 0.85, 0.79. Passed.
- Planted cards: Night Shift (bad) 1/96 from worst; Envy (bad) 1/96 from worst; Clerk (bad) 1/96 from worst; Scavenger (good) 94/96 from worst. All caught.
- Cory's past calls, held-out half B, cards unchanged since he spoke (bar 70%): B: 3/6 disliked in the bottom half, 10/11 liked in the top half (76%). Passed. Half A (may appear in prompts, so not a test): A: 7/11 disliked in the bottom half, 5/13 liked in the top half (50%).
- Cory's past calls, all: all: 12/24 disliked in the bottom half, 15/24 liked in the top half (56%); leaving out cards reworked since he spoke: not stale: 10/17 disliked in the bottom half, 15/24 liked in the top half (61%).
- Half B misses (read before fixing; the judge may be right): Cash In (disliked, 29/48 from worst), Big Tent (disliked, 60/95 from worst), Old Maid (disliked, 80/95 from worst), Fence (liked, 45/95 from worst).

## Members (95; 44 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Shift Crew | purple | 9 | 7/9/10 | UNDER | 0 on C4 | Vanilla 4 for 4 with no ability; nothing purple about it. |
| 2 | Recruiter | red | 10 | 10/12/10 | UNDER | 0 on C3 0 on C4 | 5 red for +1 red per recruit is a forgettable trickle that rarely pays back. |
| 3 | Customs Officer | yellow | 10 | 9/11/10 | UNDER | 0 on C3 0 on C4 | A small consolation when you're robbed; 6 cost for +1 yellow is dead. |
| 4 | Tastemaker | yellow | 10 | 9/11/10 | UNDER | 0 on C3 0 on C4 | Few cards change rivals' resources, so it rarely fires. |
| 5 | Regular | blue | 10 | 8/10/10 | UNDER | 0 on C3 0 on C4 | +1 blue when you buy followers; nobody notices. |
| 6 | Timekeeper | purple | 10 | 11/10/10 | UNDER | 0 on C4 | Generic per-own-color scorer, a sibling of Chronicler and Snobs. |
| 7 | Dyer | yellow | 10 | 10/11/10 | UNDER | 0 on C4 | Same per-color shape as Tourist and Caravan but paying yellow; autopilot. |
| 8 | Critic | blue | 10 | 10/12/10 | UNDER | 0 on C3 | +1 follower when rivals buy blue; small, passive. |
| 9 | Heiresses | white | 10 | 10/10/10 | UNDER | 0 on C4 | 9 cost for a one-time per-member white pile; weak and leader-friendly. |
| 10 | Old Money | white | 10 | 11/10/10 | UNDER | 0 on C4 | Generic per-own-color scorer, a sibling of Chronicler, Snobs and Timekeeper. |
| 11 | Volunteer | red | 11 | 11/11/12 | UNDER | 0 on C3 0 on C4 | Vanilla 1-for-1 body; only matters as red count or swap fodder. |
| 12 | Toastmaster | silver | 11 | 11/10/11 | UNDER | 0 on C3 0 on C4 | +1 follower for taking your own color's spaces; generic trickle. |
| 13 | Patriarch | red | 11 | 11/11/11 | UNDER | 0 on C4 | Generic game-end per-member scorer that would sit the same in any color. |
| 14 | Polisher | silver | 11 | 11/12/11 | UNDER | 0 on C4 | A one-shot Polish on a card; repeats a sibling. |
| 15 | Snobs | blue | 11 | 11/10/11 | UNDER | 0 on C4 | Per-own-color game-end scorer; same shape as three others. |
| 16 | Chronicler | green | 11 | 11/11/10 | UNDER | 0 on C4 | Per-own-color game-end scorer; same shape as three others. |
| 17 | Extra Hand | guests | 11 | 11/12/11 | UNDER | 0 on C4 | 9 cost for one extra minion once; rarely worth it. |
| 18 | Caterer | silver | 12 | 12/14/12 | UNDER | 0 on C3 0 on C4 | +1 silver on gifts, unclear per gift or per silver; forgettable. |
| 19 | Landlord | white | 12 | 12/11/13 | UNDER | 0 on C4 | Steady +2 white; works the same in any cult. |
| 20 | Roadie | green | 12 | 11/12/12 | UNDER | 0 on C4 | Scales with green members, pure self-engine, nobody else notices. |
| 21 | Alchemists | guests | 12 | 12/12/16 | UNDER | 0 on C4 | Cheap 3-count that makes every cost easy; nobody notices. |
| 22 | Night Watch | purple | 12 | 12/13/12 | UNDER |  | Passive payout on rivals taking the token; unclear whose minions count and no choice for the owner. |
| 23 | Caravan | yellow | 12 | 12/11/15 | UNDER | 0 on C4 | Strong per-color income but a third copy of the Dyer/Tourist shape. |
| 24 | Proselytizers | red | 13 | 14/13/13 | UNDER | 0 on C4 | +1 follower per recruit; steady and private, rewards the wide leader. |
| 25 | Harmonist | yellow | 13 | 13/14/13 | UNDER | 0 on C4 | Game-end full sets scorer; on theme but quiet and leader-friendly. |
| 26 | Busker | green | 13 | 13/11/13 | UNDER | 0 on C4 | Steady +2 green; works the same in any cult. |
| 27 | Philanthropist | silver | 13 | 16/13/12 | over |  | A small Largesse on a member; repeats the space. |
| 28 | Grifter | magenta | 13 | 12/15/13 | over |  | Scales with your cult size, so it rewards the leader. |
| 29 | Line Cutters | guests | 13 | 12/13/15 | over |  | Worth 3 for 2 and overrides fewest-followers-first, so the leader keeps first pick: must-buy and anti-catch-up. |
| 30 | Greeters | red | 14 | 14/11/14 | UNDER | 0 on C4 | Cheap 2-count that adds color to every On Recruit across colors; invisible to rivals. |
| 31 | Brokers | white | 14 | 14/14/15 | UNDER | 0 on C4 | A bonus on white follower spaces; unclear on copies, quiet. |
| 32 | Impressionist | green | 14 | 13/14/14 | UNDER | protected; 0 on C3 | +1 resource when anyone copies: a small trigger nobody feels. |
| 33 | Dabblers | guests | 14 | 12/14/14 | UNDER | 0 on C4 | Wild double member is a neat connector for color counts, but 'wild' needs a ruling on what it counts for. |
| 34 | High Society | silver | 14 | 14/16/14 | over |  | Taxes rivals using silver spaces; a passive deterrent with no choice for the owner. |
| 35 | Window Dressers | blue | 14 | 12/14/15 | over |  | A cheap 3-body with a small shop shuffle; repeats Window Shopper. |
| 36 | Extortionist | magenta | 14 | 15/13/14 | over |  | A bigger Cutpurse; repeats its sibling. |
| 37 | Con Men | guests | 14 | 13/14/14 | over | protected | Big one-shot steal of 5; simple and felt, but it's just a bigger Accomplice with no color tie. |
| 38 | Misers | white | 15 | 16/13/15 | UNDER | 0 on C4 | Holding white against cashing it in is a real tension. |
| 39 | Money Changers | white | 15 | 15/14/15 | UNDER | 0 on C4 | Paid by every follower buy at the table; cheap 2-count, passive. |
| 40 | Hoarder | white | 15 | 15/14/16 | UNDER | 0 on C4 | Sets up a Cash In or Misers payoff; solitary. |
| 41 | Doppelganger | green | 15 | 15/15/17 | UNDER | protected; 0 on C4 | Copy your best member; doubles the leader's engine. |
| 42 | Deprogrammers | red | 15 | 13/15/17 | over |  | A follower sting on every swap or steal; cheap for worth 4. |
| 43 | Hostesses | silver | 15 | 15/15/15 | over |  | Steady gift engine that feeds rivals' contest automatically; no aim. |
| 44 | Smooth Talkers | silver | 15 | 16/12/15 | UNDER | 0 on C4 | Strong flexibility, but 11 cost puts it out of reach of the swaps and favors whoever is already rich. |
| 45 | Bodyguards | magenta | 15 | 16/15/15 | over |  | Total steal immunity: a block that matters, but it's a wall, not an engine. |
| 46 | Kidnapper | magenta | 15 | 14/15/15 | UNDER | 0 on C4 | Takes a rival's member every round from round I; the victim is robbed repeatedly with no choice. |
| 47 | Fence | magenta | 15 | 14/15/15 | over |  | Punishes stealers with magenta; a counter card, quiet unless a thief is at the table. |
| 48 | Agents | green | 15 | 14/15/16 | over | protected | A clean block against copiers, cheap; a counter card more than an engine. |
| 49 | Mob | red | 15 | 15/15/17 | over |  | Big round-end payout for leading red count; rivals can race red members, but it pays the leader. |
| 50 | Double Agent | magenta | 15 | 18/15/14 | over |  | Swap itself for a rival's better member; a sting, though the rival gets a body back. |
| 51 | Gardeners | yellow | 16 | 16/16/16 | UNDER | 0 on C4 | Fills empty colors each round, helping sets and the player who lacks; nobody else notices. |
| 52 | Big Tent | yellow | 16 | 19/16/16 | UNDER | 0 on C4 | Rewards one of each color; a real shape choice for your cult. |
| 53 | Patroness | blue | 16 | 14/16/16 | UNDER | 0 on C4 | Followers whenever shop cards are buried links Blue's spaces; unclear whether the round reset counts. |
| 54 | Loyalists | red | 16 | 17/16/14 | over |  | Swap immunity for your cult; a counter card the table must route around. |
| 55 | Early Birds | purple | 16 | 15/16/16 | over |  | Cheap immunity to skips; a clean counter card. |
| 56 | Gossip | purple | 16 | 16/17/16 | over |  | Pays on every skip at the table, nice link to Hold Up and Bouncers, but rivals never feel it. |
| 57 | Debt Collectors | silver | 16 | 18/13/16 | over |  | Pulls gifted silver back once to swing the silver contest; feels more like taking than giving. |
| 58 | Tourist | yellow | 16 | 14/17/16 | UNDER | 0 on C4 | Followers every round for color spread, an engine you can see coming. |
| 59 | Window Shopper | blue | 16 | 17/16/16 | over |  | Cycles the shop and pays colors; fine shop control. |
| 60 | Trendsetters | blue | 16 | 16/16/16 | over |  | Each recruit churns the shop; feeds Patroness and Scavenger. |
| 61 | Cutpurse | magenta | 16 | 16/14/16 | over |  | Cheap steady drain on the richest rival; good check on hoards, autopilot. |
| 62 | Accomplice | magenta | 16 | 16/16/14 | over |  | A cheap one-shot steal of 3; clear and fine. |
| 63 | Shoplifter | magenta | 16 | 16/16/14 | over |  | A steal on every recruit; steady and on theme. |
| 64 | Cashier | white | 16 | 16/12/16 | UNDER | protected; 0 on C4 | A Cash In on a card; timing choice, but repeats the space. |
| 65 | Wallflower | green | 16 | 17/16/16 | UNDER | 0 on C4 | Doubling copied gains builds a real copy engine, but only for the rich and at 10 cost. |
| 66 | Night Owls | purple | 16 | 16/14/16 | over |  | A permanent extra minion from round II is a strong, readable purple rule bend. |
| 67 | Hot Streak | purple | 16 | 16/15/16 | over | protected | A one-shot payoff for chaining turns builds toward a moment, though counting turns just before needs care. |
| 68 | Meddler | yellow | 16 | 15/16/16 | over |  | Swapping each rival's resources hits contests table-wide, but 'one for one' into what color needs asking. |
| 69 | Shopaholics | blue | 16 | 16/16/15 | over |  | Permanent double buys is a big engine that runs away for the richest player. |
| 70 | Doormen | blue | 16 | 16/15/16 | over |  | A forced trade of a rival's member through the shop; strong but reads like red and needs care. |
| 71 | Raiders | white | 16 | 16/15/17 | over |  | A one-shot follower steal that pays the victim; reads magenta. |
| 72 | Impersonator | green | 16 | 17/15/16 | over |  | Steals a rival's ability each round; strong, but the table has to remember which. |
| 73 | Courier | purple | 17 | 17/15/17 | UNDER | 0 on C4 | Turns double turns into a color spread; combos with Right Away, Crunch Time and snake ends. |
| 74 | Closer | purple | 17 | 17/14/17 | over |  | Ties straight into the went-last contest and token play; a race rivals can see. |
| 75 | Drifters | yellow | 17 | 17/17/19 | over |  | A chosen-color member plays off New Blood, Big Tent and member-count contests; needs a marker for the color. |
| 76 | Mentor & Protégés | red | 17 | 17/17/17 | over |  | Two members for one recruit is a real red burst and feeds Proselytizers and Recruiter. |
| 77 | Panel | red | 17 | 19/17/15 | over |  | A built-in Promote or Demote on arrival; on theme and aimable. |
| 78 | Desperado | magenta | 17 | 17/15/19 | over |  | Steals grow while you trail: a clear catch-up card. |
| 79 | Old Maid | guests | 17 | 17/12/19 | over |  | A poison card to dump on rivals with Godparent, Promote or Double Agent; a table laugh. |
| 80 | Anarchist | guests | 17 | 19/17/16 | over |  | Swap any two members anywhere each round: real table-wide aim, though rivals lose cards to it repeatedly. |
| 81 | Spoilsport | guests | 17 | 17/18/17 | over |  | Cancel a contest you can't win; a clear spite card the leader can see coming. |
| 82 | Sore Loser | guests | 17 | 17/15/18 | over |  | Takes followers from the top contest winner if you win none; catch-up, tie case unstated. |
| 83 | Hawker | blue | 17 | 18/17/17 | over |  | Rivals choose to overpay you or let you take it free: both sides weigh, but the text is long. |
| 84 | Fan Club | green | 18 | 18/16/20 | over |  | Copies a space the leader holds: aims at the front-runner. |
| 85 | Stunt Double | green | 18 | 18/16/18 | UNDER | protected; 0 on C4 | Doubles the space you just took, any color; a timing choice. |
| 86 | Body Snatchers | red | 18 | 19/17/18 | over |  | A swap every round start gives Red a recurring threat that Loyalists and Deprogrammers play off; equal cost keeps it fair. |
| 87 | Bouncers | purple | 18 | 18/18/18 | over |  | A double skip on recruit is a felt table moment with timing choice; meets Gossip and Early Birds. |
| 88 | Godparent | silver | 18 | 18/19/18 | over |  | Cash out a member as a gift; combos with Old Maid, Martyrs and rival dumping. |
| 89 | Debutantes | silver | 18 | 18/17/19 | over |  | Double your silver once is a big, timed contest swing; the gift to rivals is a nice tax. |
| 90 | Recluse | white | 18 | 20/16/18 | over | protected | Pays the small cult, a real counter-plan to member-heavy rivals. |
| 91 | Tribute Band | green | 18 | 17/18/19 | over |  | Doing a rival's whole round is a huge moment, but at 14 cost it's slow and can't be swapped back. |
| 92 | Party Crasher | guests | 18 | 18/17/19 | over | protected | Joining a taken space breaks blocking once; aimable catch-up. |
| 93 | Creditor | silver | 19 | 20/16/19 | over |  | Aim it at the leader each round; they lose followers but gain silver, so it stings fairly and helps you catch up. |
| 94 | Martyrs | white | 19 | 19/18/20 | over |  | Taking it from you pays you; deters thieves and swaps and combos with Farewell. |
| 95 | Second-Story Man | magenta | 20 | 20/19/20 | over |  | A steal timed right before contests swings any rim; rivals see it coming. |

## Wheel spaces (48; 14 under the bar)

| # | Card | Color | Median | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|
| 1 | Stash | magenta | 11 | 10/11/12 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Same shape as Gather and Allowance; no theft angle at all. |
| 2 | Allowance | white | 11 | 11/11/12 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Same text as Gather and Stash; the white tie is only the followers. |
| 3 | Build Up | green | 11 | 13/10/11 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | Green's plain anchor. |
| 4 | Gather | red | 12 | 11/12/12 | UNDER | fuel anchor (0 on Fun allowed); round I; 0 on C4 | The Gather/Stash/Allowance shape; a recruit nudge. |
| 5 | Sweet Talk | silver | 12 | 13/12/12 | UNDER | round II; 0 on C4 | Silver plus free conversion; a fuel space with a twist nobody sees. |
| 6 | Polish | silver | 13 | 13/13/14 | UNDER | round I; 0 on C4 | A clean conversion that nobody else notices; overlaps Sweet Talk and Polisher. |
| 7 | Shake Down | magenta | 13 | 13/11/13 | UNDER | round II; 0 on C4 | The victim picks their own punishment, which feels bad to be hit by. |
| 8 | Exchange | white | 13 | 15/13/13 | UNDER | round I; 0 on C4 | Straight resource-to-follower conversion; works, but nobody else cares. |
| 9 | Harvest | yellow | 14 | 15/14/14 | UNDER | round I; 0 on C4 | Plain fuel in your colors; the yellow anchor. |
| 10 | Estate Sale | white | 14 | 15/12/14 | UNDER | round II; 0 on C4 | A weaker twin of Farewell. |
| 11 | Demote | red | 15 | 15/17/15 | over | round II | Same swap as Promote but downward; useful for red count and Deprogrammers, less of a moment. |
| 12 | Potluck | silver | 15 | 15/15/17 | over | protected; round II | Rivals pay you a resource and get silver back; mild trade, rivals choose the cheapest. |
| 13 | Splurge | white | 15 | 15/15/15 | UNDER | round I; 0 on C4 | Turns a big buy into followers; round III rate unstated. |
| 14 | Walk-In | red | 15 | 13/15/17 | over | round I | Blind recruit from the pile with a gift to rivals; the allowed gamble. |
| 15 | Peek | blue | 15 | 15/14/15 | over | round I | Pile control and good blue; the reorder sets up later shops, but text has two parts to read. |
| 16 | Melting Pot | yellow | 16 | 16/15/16 | UNDER | round II; 0 on C4 | Pays for a broad cult; clean, but solitary. |
| 17 | Right Away | purple | 16 | 16/16/16 | over | round I | Double turn for tempo with small purple; clean and timing-driven. |
| 18 | Leaders' Tax | yellow | 16 | 17/15/16 | over | round I | Reads where rivals went and taxes the busy color: a neat board read. |
| 19 | Big New Blood | yellow | 16 | 16/14/17 | UNDER | round II; 0 on C4 | A bigger New Blood one ring up; repeats the round I space. |
| 20 | Bury | blue | 16 | 16/16/15 | over | round II | Denial plus blue; the half-cost math adds a step. |
| 21 | Cover | green | 16 | 16/18/16 | over | round II | Copy an empty space; flexible, solitary. |
| 22 | Tryout | red | 17 | 17/18/16 | over | round I | Borrowing any shop member's On Recruit is a clean idea with real aim, though it plays more like a copy than a recruit. |
| 23 | New Blood | yellow | 17 | 17/15/18 | over | round I | Rewards a first member of a new color; good aim but nobody else feels it. |
| 24 | Savings | blue | 17 | 17/14/18 | over | round I | Blue plus a bury to deny a rival's target; quiet but real. |
| 25 | Cash In | white | 17 | 17/14/17 | UNDER | round III (rework only under 10); 0 on C4 | All white to followers in round III; a satisfying finish, solitary. |
| 26 | Reprise | green | 17 | 17/16/17 | over | round I | Doubles your own best space; solitary. |
| 27 | Initiation | red | 17 | 17/17/18 | over | round III (rework only under 10) | A free member up to 8 is a strong, readable round III finisher; the choice is mostly just the best card. |
| 28 | Last Call | purple | 17 | 17/15/17 | over | round II | Pays more the more minions you hold back, a real gamble on spaces staying open; token rules need a read. |
| 29 | Overtime | purple | 17 | 17/15/17 | over | round III (rework only under 10) | +1 minion in round III is plain and strong. |
| 30 | Toast | silver | 17 | 17/18/17 | over | round I | Big scaling silver with a gift to every rival that feeds their contest; simple and on theme. |
| 31 | Sample | green | 17 | 18/17/17 | over | round II | Borrows a rival's best On Recruit; strong cross-color reach, needs a look at rival cards. |
| 32 | Sleep In | purple | 18 | 18/14/18 | over | round I | Big purple for giving up tempo, and the Goes Last token links the contest, Last Call and Night Watch. |
| 33 | Hold Up | purple | 18 | 17/19/18 | over | round I | A skip the victim can see coming and shrug off; 'even yours' adds a real timing choice. |
| 34 | Crunch Time | purple | 18 | 18/18/19 | over | protected; round II | Three turns in a row is a rule bend you feel; you pick the moment to grab key spaces. |
| 35 | Makeover | yellow | 18 | 20/18/16 | over | protected; round III (rework only under 10) | Rearranging your pile in round III sets up contests and full sets in one move. |
| 36 | Recruit Twice | blue | 18 | 18/18/18 | over | round II | Two buys in one turn is the clean blue rule bend. |
| 37 | Spree | blue | 18 | 18/18/18 | over | round III (rework only under 10) | Three buys in round III; a big finish for a stocked player. |
| 38 | Lie Low | magenta | 18 | 17/18/18 | over | round I | Small steal plus a round of safety: a visible block the table plays around. |
| 39 | Greatest Hits | green | 18 | 20/18/17 | over | round III (rework only under 10) | Round III payoff for a cult of On Recruit members; a visible engine finish. |
| 40 | Promote | red | 19 | 19/19/20 | over | round II | Trading up into a rival's better member is a big, aimable swing that hits the leader, though the two-step text needs a read. |
| 41 | Help Yourself | magenta | 19 | 20/19/19 | over | round I | The clean core steal; aim and split are real choices and the victims shrug. |
| 42 | Heist | magenta | 19 | 19/18/19 | over | round II | Three followers straight off a rival; aimable catch-up. |
| 43 | Farewell | white | 19 | 19/17/19 | over | round II | Cash a member for its cost in followers; plays off Martyrs and the shop. |
| 44 | Out of Style | blue | 19 | 20/19/19 | over | round I | Wipe a color from the shop: denies a rival's plan and pays you per card. |
| 45 | Poach | magenta | 20 | 20/19/20 | over | round III (rework only under 10) | Take any rival member free in round III: a big aimed swing, late enough to be fair. |
| 46 | Party Gifts | silver | 20 | 20/20/20 | over | round I | Aimed gifts that buy followers but feed rivals' silver contest: the color's core tension in one line. |
| 47 | Largesse | silver | 20 | 20/19/20 | over | round III (rework only under 10) | Up to 10 silver to rivals in round III right before a 10-follower silver contest: a real who-do-I-crown choice. |
| 48 | Echo | green | 20 | 19/21/20 | over | protected; round I | Copies whatever the last player did, so every turn becomes a read of the table. |
