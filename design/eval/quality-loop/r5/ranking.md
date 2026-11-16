# Ranking (r5): worst first

From 3 blind paper judges (judge-1.json, judge-2.json, judge-3.json), median total of 20. Bar: 13 or more, no 0 on Clear, Feels good or Fun, no hard fail from 2+ judges. Made by scripts/quality/ranking.mjs.

## Checks on the judges

- Agreement (rank correlation per judge pair, bar 0.6): members 0.72, 0.74, 0.76; spaces 0.86, 0.87, 0.83. Passed.
- Planted cards: Bell Ringer (bad) 1/98 from worst; Envy (bad) 2/98 from worst; Clerk (bad) 3/98 from worst; Scavenger (good) 2/98 from worst MISSED. At least one missed.
- Cory's past calls, held-out half B, cards unchanged since he spoke (bar 70%): B: 2/5 disliked in the bottom half, 7/11 liked in the top half (56%). Under the bar. Half A (may appear in prompts, so not a test): A: 7/11 disliked in the bottom half, 6/13 liked in the top half (54%).
- Cory's past calls, all: all: 11/24 disliked in the bottom half, 13/24 liked in the top half (50%); leaving out cards reworked since he spoke: not stale: 9/17 disliked in the bottom half, 13/24 liked in the top half (54%).
- Half B misses (read before fixing; the judge may be right): Cash In (disliked, 28/48 from worst), Big Tent (disliked, 85/97 from worst), Old Maid (disliked, 62/97 from worst), Stunt Double (liked, 42/97 from worst), Cashier (liked, 15/97 from worst), Hot Streak (liked, 47/97 from worst), Agents (liked, 43/97 from worst).

## Members (97; 11 under the bar)

| # | Card | Color | Median | Was (r3) | New | Play A/B | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Victors | guests | 13 | – | NEW |  | 13/13/13 | UNDER | hard fail x3: single-member card with a plural name | Rewards contest winners with more of the color they won. |
| 2 | Hawker | blue | 15 | 17 |  |  | 15/14/16 | UNDER | hard fail x2: turn flow: asks a player to choose during another player's turn | Each rival decides in turn whether to buy during your turn, with many moving parts. |
| 3 | Volunteer | red | 9 | 10 |  |  | 12/9/9 | UNDER | 0 on C3 | Blank cheap body for the red count; nothing happens when you play it. |
| 4 | Toastmaster | silver | 11 | 11 |  |  | 12/10/11 | UNDER | 0 on C3 | +1 follower per silver space; forgettable. |
| 5 | Extra Hand | guests | 11 | 16 |  |  | 11/14/11 | UNDER |  | One extra minion for 9 is a poor deal and the same in any cult. |
| 6 | Regular | blue | 12 | 9 |  |  | 12/11/13 | UNDER | 0 on C3 | +1 blue per follower buy is forgettable. |
| 7 | Critic | blue | 12 | 12 |  |  | 12/11/14 | UNDER | 0 on C3 | +1 follower when a rival buys blue is too small to notice. |
| 8 | Timekeeper | purple | 12 | 12 |  |  | 12/9/13 | UNDER |  | Per-purple-member scoring copies Snobs and Old Money and has nothing to do with Purple's timing. |
| 9 | Old Money | white | 12 | 12 |  |  | 12/9/12 | UNDER |  | Per-white-member scoring copies Snobs and Timekeeper and works against White's own idea. |
| 10 | Patriarch | red | 13 | 13 |  |  | 14/11/13 | over |  | Plain wide-cult scorer with halving math; fine, not exciting. |
| 11 | Dyer | yellow | 13 | 13 |  |  | 13/13/12 | over |  | Same as Tourist but pays yellow; it repeats its siblings. |
| 12 | Snobs | blue | 13 | 13 |  |  | 13/14/13 | over |  | Per-color-member scoring; the same shape as Timekeeper and Old Money. |
| 13 | Grifter | magenta | 13 | 17 |  |  | 13/16/13 | over |  | The steal grows with your cult size, so it rewards whoever is already ahead. |
| 14 | Heiresses | white | 13 | 20 |  |  | 13/13/13 | over | protected | A once-per-game white bump; forgettable. |
| 15 | Cashier | white | 13 | 20 |  |  | 11/15/13 | over | protected | Cash In on a member; already doable with the space. |
| 16 | Cheerleaders | guests | 13 | – | NEW |  | 13/13/13 | over |  | Pays only the player already winning contests. |
| 17 | Line Cutters | guests | 13 | 13 |  |  | 13/13/13 | over |  | Worth 3 for 2 and it turns off the fewest-followers-first catch-up; a must-buy for the leader. |
| 18 | Deprogrammers | red | 14 | 15 |  |  | 14/13/14 | over |  | Worth 4 for 3 resources is close to a must-buy, and the ability is a small sting on top. |
| 19 | Night Watch | purple | 14 | 14 |  |  | 14/14/14 | over |  | Watching for rivals taking the token is niche, and 'per minion on it' needs a careful read. |
| 20 | Kidnapper | magenta | 14 | 15 |  |  | 15/14/14 | UNDER | 0 on C4 | Takes the widest rival's member every round; losing members before round III feels bad. |
| 21 | Seamstress | yellow | 14 | 17 |  | no +1.17 vs Harmonist; pass +0.58 vs Harmonist | 11/14/16 | UNDER | 0 on C1 | 'Double your full sets' doesn't say what you gain. |
| 22 | Caravan | yellow | 14 | 17 |  |  | 16/14/11 | over |  | Third copy of the per-color drip; bigger, rewards the wide leader. |
| 23 | Con Men | guests | 14 | 14 |  |  | 14/16/14 | over | protected | A big steal on a colorless card does Magenta's job. |
| 24 | Recruiter | red | 15 | 11 |  |  | 15/15/16 | over |  | Red income from recruiting stacks with free recruits; fine but small. |
| 25 | Picket Line | purple | 15 | 13 |  | pass +0.42 vs Shift Crew | 17/14/15 | over |  | Taxes rivals on purple spaces; 4 cost worth 3 is cheap, effect small, same shape as High Society. |
| 26 | Hostesses | silver | 15 | 15 |  |  | 16/15/13 | over |  | Steady small gifts and followers; wordy for a drip. |
| 27 | Caterer | silver | 15 | 15 |  |  | 16/13/15 | over |  | Pays on any gift; unclear whether rivals' gifts count, otherwise a tidy silver link. |
| 28 | Smooth Talkers | silver | 15 | 16 |  |  | 15/15/13 | over |  | Silver as any color is powerful but is the old Gold idea, not giving. |
| 29 | High Society | silver | 15 | 16 |  |  | 14/15/16 | over |  | Passive follower when rivals take silver spaces; quiet. |
| 30 | Duty Collector | yellow | 15 | 15 |  |  | 16/15/14 | over |  | Taxes rivals' recruits in your colors; passive, no choices. |
| 31 | Meddler | yellow | 15 | 15 |  |  | 16/15/15 | over |  | Breaks rivals' full sets; a mild sting with fiddly choices. |
| 32 | Jack-of-All-Trades | yellow | 15 | 17 |  | pass +0.75 vs Tastemaker | 15/15/15 | over |  | A clean full-set helper that matters only to the Yellow contest. |
| 33 | Cutpurse | magenta | 15 | 14 |  |  | 16/15/14 | over |  | Small steal from the richest each round; checks hoards. |
| 34 | Misers | white | 15 | 16 |  |  | 15/14/15 | over |  | Saving white for the end versus spending it is a real hold-or-spend call. |
| 35 | Money Changers | white | 15 | 15 |  |  | 16/15/15 | over |  | White from everyone's follower buys; passive. |
| 36 | Roadie | green | 15 | 14 | NEW (reworded) |  | 15/15/15 | over |  | Copy income that grows with green members; modest. |
| 37 | Stunt Double | green | 15 | 19 |  |  | 15/17/15 | over | protected | Copying the action you just took when it joins is clear but one-off and small. |
| 38 | Agents | green | 15 | 16 |  |  | 18/15/15 | over | protected | Shield against copying; a counter. |
| 39 | Mob | red | 15 | 16 |  |  | 16/15/15 | over |  | Pays the leader of red's contest again each round; rich-get-richer. |
| 40 | Charity Ball | silver | 15 | – | NEW | pass +0.3 vs Philanthropist | 17/15/14 | over |  | Gift and follower whenever a rival recruits; fires often, never a decision. |
| 41 | Extortionist | magenta | 15 | 15 |  |  | 15/15/15 | over |  | A bigger Cutpurse; it repeats its sibling. |
| 42 | Barker | white | 15 | – | NEW |  | 15/17/15 | over |  | An extra follower buy on every member buy is strong, but the word 'recruit followers' takes a read. |
| 43 | Impersonator | green | 15 | 17 |  |  | 16/15/15 | over |  | Borrows a rival's ability; you must mark which one. |
| 44 | Proselytizers | red | 16 | 18 |  |  | 16/13/16 | over |  | A simple follower per recruit that grows with Red's free recruits; solid but quiet. |
| 45 | Early Birds | purple | 16 | 17 |  |  | 18/15/16 | over |  | Cheap answer to Hold Up and Bouncers; a counter card, quiet when nobody skips. |
| 46 | Debt Collectors | silver | 16 | 15 |  |  | 17/16/14 | over |  | Taking silver once runs against the color's giving. |
| 47 | Window Shopper | blue | 16 | 17 |  |  | 16/15/16 | over |  | Digging the shop for resources each round fits Blue but takes two steps to read. |
| 48 | Trendsetters | blue | 16 | 16 |  |  | 16/15/16 | over |  | Cheap and worth 3, but the bury repeats Window Dressers. |
| 49 | Bodyguards | magenta | 16 | 16 |  |  | 18/15/16 | over |  | Clean answer to all theft. |
| 50 | Fence | magenta | 16 | 18 |  |  | 17/15/16 | over |  | Pays you when robbed; a soft counter to magenta. |
| 51 | Brokers | white | 16 | 17 |  |  | 16/16/15 | over |  | Cheap, worth 3, and adds to every White space that pays followers. |
| 52 | Impressionist | green | 16 | 17 |  |  | 16/14/17 | over | protected | A small passive on every copy at the table; quiet. |
| 53 | Old Maid | guests | 16 | 19 |  |  | 14/16/17 | over |  | A curse to hand rivals via Red, Silver or Magenta; purpose not obvious alone. |
| 54 | Dabblers | guests | 16 | 16 |  |  | 16/16/14 | over | protected | Counting as 2 members of any color helps the member-count contests; 'wild' needs explaining. |
| 55 | Night Owls | purple | 16 | 16 |  |  | 16/14/16 | over |  | A free minion every later round is strong and clear but expensive and autopilot. |
| 56 | Hot Streak | purple | 16 | 16 |  |  | 16/15/16 | over | protected | A big payout for chained turns, but counting 'turns in a row just before this one' is fiddly. |
| 57 | Gardeners | yellow | 16 | 18 |  |  | 17/16/14 | over |  | Fills color gaps each round; 'have none of' could mean members or resources. |
| 58 | Tourist | yellow | 16 | 18 |  |  | 16/18/16 | over |  | Followers for color variety each round; the same shape as Dyer and Caravan. |
| 59 | Doormen | blue | 16 | 17 |  |  | 17/16/16 | over |  | Swap a rival's member for a shop one; strong, wording is dense. |
| 60 | Double Agent | magenta | 16 | 15 |  |  | 16/16/14 | over |  | A swap that plants itself in a rival's cult; reads more like Red, and the rival gets an empty card. |
| 61 | Raiders | white | 16 | 18 |  |  | 15/16/17 | over |  | A follower steal is Magenta's job. |
| 62 | Wallflower | green | 16 | 18 |  |  | 17/16/16 | over |  | Doubles every copy; a big engine for the green leader. |
| 63 | Alchemists | guests | 16 | 18 |  |  | 16/16/14 | over |  | Cheap and worth 3, and it removes color limits for recruiting; overlaps Smooth Talkers. |
| 64 | Gossip | purple | 17 | 18 |  |  | 17/17/17 | over |  | Feeds off every skip at the table, a passive trigger on something that happens often. |
| 65 | Closer | purple | 17 | 16 |  |  | 18/17/17 | over |  | Rewards going last, which purple's contest and token already chase. |
| 66 | Creditor | silver | 17 | 18 |  |  | 17/16/17 | over |  | A forced followers-for-silver trade aimed at the leader; a fair but mild sting. |
| 67 | Patroness | blue | 17 | 18 |  |  | 17/17/16 | over |  | Pays off every bury at the table, a passive trigger on Blue's main action. |
| 68 | Window Dressers | blue | 17 | 15 |  |  | 17/17/15 | over |  | Cheap, worth 3, with a shop refresh; combos with Patroness. |
| 69 | Shoplifter | magenta | 17 | 17 |  |  | 16/17/17 | over |  | Steal on every recruit; grows with recruiting. |
| 70 | Doppelganger | green | 17 | 19 |  |  | 17/17/16 | over | protected | Copying your best member is strong; the table has to remember which member it copied. |
| 71 | Mentor & Protégés | red | 17 | 19 |  |  | 18/17/16 | over |  | Two members for one buy, counts 3; simple and strong for red's contest. |
| 72 | Panel | red | 17 | 17 |  |  | 15/19/17 | over |  | A free Promote or Demote on recruit; aiming it is a real choice, wording needs the space text. |
| 73 | Loyalists | red | 17 | 16 |  |  | 17/18/15 | over |  | A clean block against Red's swaps; it's unclear whether steals like Poach count as swaps. |
| 74 | Shopaholics | blue | 17 | 17 |  |  | 17/17/16 | over |  | Two buys every turn is a huge engine in four words, but at 9 it's hard to Promote or Demote away. |
| 75 | Accomplice | magenta | 17 | 17 |  |  | 17/17/17 | over |  | A cheap way into Magenta: steal 3 when you recruit it. |
| 76 | Magpie | white | 17 | – | NEW |  | 17/19/16 | over | protected | Turning everything into white sets up Cash In and Misers; it's a timing call. |
| 77 | Tribute Band | green | 17 | 17 |  |  | 19/16/17 | over |  | Do a whole rival's round once; huge, 14 cost, timing unclear. |
| 78 | Encore | green | 17 | 19 |  | bot bug -0.18 vs Chronicler; no -0.28 vs Chronicler | 18/17/16 | over |  | Doubles your next On Recruit; timing decision. |
| 79 | Anarchist | guests | 17 | 16 |  |  | 18/16/17 | over |  | Swap any two members anywhere each round; powerful, kingmaking risk. |
| 80 | Sore Loser | guests | 17 | 16 |  |  | 18/17/17 | over |  | Steals 5 from the top winner when you win nothing; catch-up with a bite. |
| 81 | Drifters | yellow | 18 | 20 |  |  | 18/19/18 | over |  | Cheap and flexible: counts toward any color's cards, like Mob, Snobs and Big Tent. The table needs a marker for the chosen color. |
| 82 | Recluse | white | 18 | 17 |  |  | 17/20/18 | over | protected | Pays for staying small; the white idea in one line, fair catch-up. |
| 83 | Body Snatchers | red | 18 | 17 |  |  | 16/18/18 | over |  | Equal-cost swap each round; a fair sting Loyalists answers. |
| 84 | Courier | purple | 18 | 20 |  |  | 19/18/17 | over |  | Rewards purple's in-a-row turns with every other color; builds toward full sets. |
| 85 | Debutantes | silver | 18 | 19 |  |  | 18/18/17 | over |  | Doubling your silver once is a big, well-timed contest swing with a small gift attached. |
| 86 | Big Tent | yellow | 18 | 20 |  |  | 19/17/18 | over |  | Exactly one per color is a crisp build goal that shapes every recruit. |
| 87 | Desperado | magenta | 18 | 20 |  |  | 20/16/18 | over |  | Bigger steals for the trailing player; a true catch-up card. |
| 88 | Song Request | green | 18 | 19 |  | pass +0.84 vs Busker | 18/17/18 | over |  | An extra copy each round of a rival's space; strong and it reads the table. |
| 89 | Fan Club | green | 18 | 18 |  |  | 18/19/17 | over |  | Copying the leader's space is catch-up with a clear target. |
| 90 | Party Crasher | guests | 18 | 19 |  |  | 16/20/18 | over | protected | Take a blocked space once; breaks the draft for a big turn. |
| 91 | Foster Parents | red | 19 | 19 |  | pass +1.08 vs Greeters; pass +0.87 vs Greeters | 19/20/18 | over |  | Rewards Promote, Demote, Poach and swaps with +2 each time; ties Red's moving members to followers in very few words. |
| 92 | Godparent | silver | 19 | 18 |  |  | 18/19/19 | over |  | Give a member away for its cost; links to Foster Parents and Old Maid. |
| 93 | Guest of Honor | silver | 19 | 18 | NEW (reworded) |  | 19/19/20 | over |  | Dumping a cheap member for +4 every round is strong and aimable; it combos with cheap filler and Old Maid. |
| 94 | Spoilsport | guests | 19 | 18 |  |  | 19/19/18 | over | protected | Cancelling a contest you can't win is clear catch-up, and everyone can plan around it. |
| 95 | Bouncers | purple | 19 | 18 |  |  | 20/19/18 | over |  | Skip two rivals on recruit; a visible jolt that costs nobody a minion. |
| 96 | Second-Story Man | magenta | 20 | 20 |  |  | 20/18/20 | over |  | A theft right before contests are scored can swing a contest, and everyone sees it coming. |
| 97 | Martyrs | white | 20 | 20 |  |  | 20/21/20 | over |  | Leaving pays its cost, so Farewell, Godparent and thieves all feed it; few words that play off the whole board. |

## Wheel spaces (48; 6 under the bar)

| # | Card | Color | Median | Was (r3) | New | Play A/B | Judges | Bar | Flags | Why (judge nearest the median) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Shake Down | magenta | 13 | 13 |  |  | 13/13/14 | UNDER | round II; hard fail x2: turn flow: asks a player to choose during another player's turn; victim chooses their own punishment; 0 on C4 | The victim picks their own punishment on your turn, and that feels bad. |
| 2 | Potluck | silver | 14 | 14 |  |  | 14/14/16 | UNDER | protected; round II; hard fail x2: turn flow: asks a player to choose during another player's turn | Each rival picks what to hand over during your turn, and they always give their least useful resource. |
| 3 | Build Up | green | 10 | 11 |  |  | 14/10/10 | UNDER | round I | The plain green anchor. |
| 4 | Stash | magenta | 11 | 11 |  |  | 12/11/9 | UNDER | round I | Same text as Gather and Allowance; nothing magenta about it. |
| 5 | Allowance | white | 11 | 11 |  |  | 12/11/10 | UNDER | round I | Same text as Gather and Stash; not white's idea. |
| 6 | Gather | red | 12 | 10 |  |  | 12/14/11 | UNDER | round I | Plain red income with a small recruit bonus; it's the color's anchor space, so its quiet sting is fine. |
| 7 | Sweet Talk | silver | 13 | 13 |  |  | 12/13/14 | over | round II | Silver plus conversion; repeats Polish one ring later. |
| 8 | Polish | silver | 14 | 15 |  |  | 14/14/14 | over | round I | A plain converter that does Yellow's job; useful but flat. |
| 9 | Exchange | white | 14 | 13 |  |  | 14/17/14 | over | round I | Resources into followers at 2 for 1, a small, plain conversion. |
| 10 | Demote | red | 15 | 15 |  |  | 15/15/16 | over | round II | Mirror of Promote; taking a cheaper member is weaker and is mostly a way to dump a card or feed Foster Parents. |
| 11 | Right Away | purple | 15 | 17 |  |  | 15/16/15 | over | round I | Two turns in a row is clean; the small payout makes it mostly a way to set up Courier. |
| 12 | Harvest | yellow | 15 | 14 |  |  | 15/16/15 | over | round I | Yellow's anchor: plain resources in colors you pick. |
| 13 | Leaders' Tax | yellow | 15 | 16 |  |  | 14/15/16 | over | round I | Reads where rivals are; the count is easy but the choice takes a look. |
| 14 | New Blood | yellow | 15 | 16 | NEW (reworded) |  | 16/15/13 | over | round I | Rewards a new color recruit; clear but the bonus is modest. |
| 15 | Savings | blue | 15 | 13 |  |  | 15/17/13 | over | round I | Blue income plus a shop dig before you recruit; the optional step is easy to forget. |
| 16 | Estate Sale | white | 15 | 14 |  |  | 12/15/16 | over | round II | Farewell for white instead; a sibling. |
| 17 | Splurge | white | 15 | 16 |  |  | 14/15/15 | over | round I | Followers for an expensive recruit; round III rate unstated. |
| 18 | Tryout | red | 16 | 18 |  |  | 15/18/16 | over | round I | Borrowing any shop member's On Recruit plays off the whole shop; the copying leans green. |
| 19 | Melting Pot | yellow | 16 | 17 |  |  | 17/16/16 | over | round II | Pays for a wide cult; the wide player is usually ahead. |
| 20 | Sleep In | purple | 16 | 20 |  |  | 16/17/16 | over | round I | Big purple for going last is a real timing trade, but the Goes Last token takes a rules read. |
| 21 | Last Call | purple | 16 | 18 |  |  | 15/16/16 | over | round II | Pays for holding minions back; strong but the token interaction is fiddly. |
| 22 | Peek | blue | 16 | 15 |  |  | 16/16/15 | over | round I | Stacking the pile and picking from it is a strong shop play, but wordy. |
| 23 | Bury | blue | 16 | 16 |  |  | 16/18/16 | over | round II | Denying a shop member pays a little; the half-cost math adds words. |
| 24 | Reprise | green | 17 | 17 |  |  | 17/18/16 | over | round I | Doubling your own best action is clear; it's quieter than Echo. |
| 25 | Sample | green | 17 | 19 |  |  | 19/17/17 | over | round II | Borrow a rival's On Recruit; reads the table. |
| 26 | Cover | green | 17 | 19 |  |  | 19/17/16 | over | round II | Copy an empty space; flexible. |
| 27 | Walk-In | red | 17 | 15 |  |  | 17/15/17 | over | round I | A free member off the top of the pile is exciting, and the +1 red to each rival softens it; few words. |
| 28 | Overtime | purple | 17 | 18 |  |  | 18/17/17 | over | round III (rework only under 10) | An extra minion in round III is an obvious burst. |
| 29 | Toast | silver | 17 | 16 |  |  | 17/18/16 | over | round I | Big silver for you with a gift to everyone is the giving idea in one line. |
| 30 | Makeover | yellow | 17 | 16 |  |  | 17/17/15 | over | protected; round III (rework only under 10) | Rearranging every resource in round III can flip contests and complete full sets at the last moment. |
| 31 | Cash In | white | 17 | 20 |  |  | 17/18/17 | over | round III (rework only under 10) | A round III cash-out that rewards having saved white; one clear line. |
| 32 | Initiation | red | 18 | 19 |  |  | 18/19/18 | over | round III (rework only under 10) | A free 8-cost recruit in round III is a big burst a trailing player can grab. |
| 33 | Recruit Twice | blue | 18 | 19 |  |  | 18/18/17 | over | round II | Two buys in one turn is clear and strong. |
| 34 | Lie Low | magenta | 18 | 17 |  |  | 18/16/18 | over | round I | A small steal plus a shield; a clean defensive choice. |
| 35 | Farewell | white | 18 | 21 |  |  | 18/19/18 | over | round II | Casting out a member for its cost in followers combos with Martyrs; clear and punchy. |
| 36 | Greatest Hits | green | 18 | 19 |  |  | 19/18/17 | over | round III (rework only under 10) | Replays your whole On Recruit set; the round III payoff. |
| 37 | Hold Up | purple | 19 | 19 |  |  | 20/19/18 | over | round I | Skip the next turn, even your own; a visible block with a timing call. |
| 38 | Crunch Time | purple | 19 | 20 |  |  | 19/19/18 | over | protected; round II | Three turns in a row is a big swing on the snake in few words, and it's a burst anyone can use to catch up. |
| 39 | Housewarming | yellow | 19 | 19 |  | pass +0.48 vs Big New Blood | 20/19/18 | over | round II | A free new-color member; widening in one move. |
| 40 | Spree | blue | 19 | 20 |  |  | 19/19/19 | over | round III (rework only under 10) | Three recruits in round III is a burst any trailing player can use. |
| 41 | Help Yourself | magenta | 19 | 19 |  |  | 20/19/19 | over | round I | Scaling split steal; the color's core in one line. |
| 42 | Heist | magenta | 19 | 20 |  |  | 19/20/18 | over | round II | Stealing followers directly is a big, aimable swing at the leader. |
| 43 | Largesse | silver | 19 | 21 |  |  | 19/20/19 | over | round III (rework only under 10) | A round III giveaway with a clear payoff and kingmaking tension; overlaps Party Gifts. |
| 44 | Poach | magenta | 20 | 20 |  |  | 19/21/20 | over | round III (rework only under 10) | Take any rival member free in round III; a big, clear moment. |
| 45 | Echo | green | 20 | 21 |  |  | 21/20/20 | over | protected; round I | Copy the previous action; scales with what the table takes. |
| 46 | Promote | red | 20 | 19 |  |  | 20/18/20 | over | round II | Trading up with a rival is the heart of Red; the victim gets a member back so it stings fairly, and it works as catch-up. |
| 47 | Party Gifts | silver | 20 | 20 |  |  | 20/20/19 | over | round I | Choosing who gets your silver gifts, with the silver contest at stake, is a real and social decision. |
| 48 | Out of Style | blue | 20 | 18 |  |  | 20/20/18 | over | round I | Wiping one color from the shop blocks rivals in plain sight and pays per card sent away. |
