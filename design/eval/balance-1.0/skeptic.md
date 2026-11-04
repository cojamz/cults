# Skeptic pass on the balance-1.0 verdicts (deck 10), final data

Claude, 2026-11-01, re-checked at about 12:50pm Eastern against the final numbers in final/ (refreshed 12:41pm: Normal 389 games at 4 players, Hard 220, Very Hard 249, Normal 3 and 2 players, lens, Hard and Very Hard choice logs), all 12 expert games (expert/feel.md, g9 to g12 new), bugs.md, decisions.md, pitch-ledger.md and verdicts.md. Nothing was run. Shorthand: N, H, VH = Normal, Hard, Very Hard lift at 4 players, in points; 3p and 2p are Normal at 3 and 2 players.

Rules applied: a rework survives only with two independent instruments (Hard or Very Hard bots, the choice log, expert players, a paper read with a played turn). A number tweak survives only when bots at two levels point the same way. A logged call of Cory's is a question for him, never a fix.

Caveats on the data:
- Red tables played on the reverted swap build are left out, so no Red member has a Normal read at 4 players and Hard has only 41 Red seats. The Red re-runs land at 1:00pm; every Red line below (Mob, Patriarch, Loyalists, Recruiter, Panel) is provisional.
- Three payouts changed after the runs started, so their bot numbers come from the old payout: Stash paid one magenta too many (+3/+4/+5 instead of the printed +2/+3/+4), Last Call's repeat skips paid phantom Gossip and Pocket Watch, and Recruiter did not yet pay when a rival's member went to the shop.
- The final runs used the new artifacts (Fence, Impressionist and Caterer fire on any player's move, Cory's 12:19pm call). The interim artifact numbers used the old texts, so every interim artifact verdict is void.

## Changed since interim

1. **Money Changers** "fewer fires" fell from SURVIVES #3 (High) to DOWNGRADED. Its edge went from +17/+18/+20 to N +3, H +5, VH +9, and it reads −7 at 3 players and −16 at 2 players. Cutting its fires would make small tables worse.
2. **Party Crasher** at price 6 is KILLED. Hard went from +13 to +5 ±4, and VH reads −3. The rework (no joining a center space) now SURVIVES on expert games g9, g10 and g11 plus a played turn.
3. **Impressionist** "raise it" is KILLED. Cory changed its text at 12:19pm, and it now reads N +11, H +4, VH +2, 3p +24.
4. **Crunch Time** "+2 to +4 purple" is KILLED. Its takers win: H +9, VH +14 (STRONG), and the lens calls it SKILL+ (better bots get more from it). Only the experts and the Hard choice log say it never matters.
5. **Tastemaker** went from SURVIVES to DOWNGRADED. It has too few owners at Hard and Very Hard, so no two bot levels agree.
6. Now SURVIVE (every bot level agrees in the final run): **Guest Book**, **Bargain Bin**, **Early Birds** (more followers; the rework stays killed), **Go-Between**, **Pocket Watch** and **Mob**. New in the final numbers: **Drifters**, **Accomplice**, **Fence** (a question for Cory), **Caterer** and **Loyalists**.
7. New candidates from the later games. SURVIVE: copies repeating **Largesse** and **Party Gifts**, **Greatest Hits**, **Desperado** with **Help Yourself**, **Lie Low** with **Bodyguards**, and **Farewell** and **Estate Sale** on spent members. KILLED: shrinking Largesse itself, and **Panel**'s swapper trigger.
8. Courier, Gossip and Polish are KILLED (their interim weak reads are gone). Bouncers, Line Cutters and Trade Seeds stay KILLED or watch.
9. The bug list drops "Mob counts as 5". That follows Cory's Oct 31 11:55pm rule (member count = follower count), which came after his Oct 30 "counts as 4", so it is not a bug.

## Points that still knock down more than one verdict

1. **For members, the choice log only counts with a second instrument.** Hard and Very Hard play out only the options Normal already rates within 4 of its best, and each rollout ends at round end. A member under about 10% "contender" was never really weighed. DEAD on a member is Normal's view.
2. **Artifact lifts are zero-sum.** Each seat drafts one artifact. In the final run Fence, Impressionist and Caterer hold the plus side, and Bargain Bin, Guest Book and Pocket Watch hold the minus side at every level. Raising the bottom three only works if Fence is looked at too.
3. **One taker per game inflates a space's lift.** Greatest Hits, Largesse, Makeover and Crunch Time are taken about once a game, by the seat already set up for them. A strong lift there is partly that seat being strong.
4. **The choice log can't see On Use abilities** (leads.md: Hot Streak used 3 of 9 times, Polisher 11 of 77). Party Crasher, Tribute Band, Heiresses and Debt Collectors have no choice-log read.

---

## SURVIVES (ranked by how much a player feels it at the table)

1. **Last Call** ("+1 purple. +1 follower and +1 purple per minion you have left. Skip your turns until everyone else is out of minions."). **REWORK or NUMBER, round III:** keep the trade, but bound what the round III caller gets. Either shorten the block so rivals still place after it, or pay less per minion in round III. Backing: STRONG at all three levels and growing with skill (N +6, H +12, VH +17), and AUTO-PICK at Hard and Very Hard. Experts rate it the best space (4.6 / 3.9, 21 raters). Their complaint is round III: in g1 Ava won all four +10 contests by one each after taking it first, and in g11 it set up Ben's Party Crasher into Largesse on the final placement. **High.** Cory set these numbers at 10:21am today, so this is the run reading his version.

2. **Copies repeat the biggest flat gain.** **Echo** ("Copy the previous action. +1 green."), **Reprise** ("Copy an action with your minion. +1 green."), **Tribute Band** ("On Use, once per game: choose a rival. Do every action they have a minion on this round.") and **Party Crasher** repeat **Largesse** ("Rivals gain up to 10 silver, split as you choose. +1 follower for each.") and **Party Gifts** ("Rivals gain up to 3 silver, split as you choose. +2 followers for each."). **REWORK, direction:** what a copy repeats, not the copy verb. For example, a copied gift space gives the silver but not the followers. Backing: experts in g9 and g11 (all 8 players made it their first change; Largesse paid 10 four times in g11's round III, 40 followers), plus a played turn. Round III, 4 players: Echo after a rival's Largesse is +10 followers + 1 green, against **Build Up** ("+3 green in round I, +4 in round II, +5 in round III.") +5 green. The gifter feels it as a sting, since the next seat doubles their play. The bots don't chain copies: Largesse reads N +4, H −6, VH −2, 2p −22, and Echo and Reprise are flat. So **shrinking Largesse itself is killed**; only the copy rule survives. Cory said on Oct 31 to "see where it falls in balance testing". The answer is that it falls in band alone and out of band when copied. **Medium.** All 8 witnesses are AI players. Cory's Echo verdict ("absolutely perfect… only as good as what was just played") argues for keeping the verb whole.

3. **Party Crasher** ("On Use, once per game: your next minion can be placed on a space a rival already took."). **REWORK:** it can't join a center space (or can't on the round's last placement). Backing: experts and a played turn. g10 (all 3 players): Ben joined Ava's taken **Makeover** ("+4 yellow, then rearrange your resources into any mix of colors.") on the final placement, rearranged 19 resources and won all three round III contests (+30), against about +10 from the best open space. In g9 and g11 it joined Largesse for +10 and +11. Experts 4.2 / 3.8. Bug-log row 14 calls it as built. The bots don't back a price: N +2, H +5 ±4, VH −3, 3p −10. **Medium.** Makeover alone isn't strong (N +4, H −8, VH +3, 3p −14), so the fix belongs on the join, not on Makeover.

4. **Guest Book** (Yellow's artifact, "Whenever you recruit a member of a color none of your members have, +2 yellow."). **NUMBER: +3 yellow, or +2 yellow and +1 follower.** Backing: weak at every level and count: N −11, H −14, VH −6, 3p −21, 2p −24. Experts 2.5 / 2.8 (11 raters). In g12 Ava "bought it for Guest Book, which didn't fire". Bug row 26: a Dabblers in your cult blocks it, since Dabblers counts as every color. **High.** Read it beside point 2 (Fence holds the other side).

5. **Bargain Bin** (Blue's artifact, "Whenever shop members go to the bottom of the pile, +1 blue."). **NUMBER: +2 blue per batch.** Backing: N −13, H −4, VH −10, 3p −9, 2p −13. Scouts now pays it (bug row 1, fixed). Experts 3.3 / 2.9 (9 raters) don't call it weak, so this is about the number only. **Medium-high.** Risk: Blue's contest gets easier (Blue sweeps 6 to 9%, the lowest of any color), so it is worth a re-read after.

6. **Early Birds** ("Your turns can't be skipped."; 2 purple + 1 any, worth 2). **NUMBER: worth 3.** Following Cory's rule, lift it with followers, not price. Backing: TRAP at all levels: N −6, H −15, VH −13, 3p −11, 2p −15, bought in 69 to 85% of games. The rework stays killed (Cory's Oct 22 and Oct 26 call that it blocks your own Sleep In and Last Call). **High.**

7. **Go-Between** ("Whenever a space gives you resources, you may change 1 of them to any color."; worth 1). **NUMBER: worth 2.** Followers before a rework. Backing: N −14, H −19 (WEAK at both), 3p −17. VH −2 has only 28 owners. One expert (2 / 2). **Medium-high.**

8. **Drifters** ("Worth 2 followers. On Recruit: choose a color; these count as a member of that color."; 2 yellow + 1 any). **NUMBER: worth 3.** New in the final run: TRAP at N −7, H −12, VH −8, 3p −16, 2p −21. Experts 2.8 / 3.2 (6). **Medium.** With Go-Between and Guest Book, it is why Yellow is the weakest color (N −4, H −14, 3p and 2p −5 / −14).

9. **Pocket Watch** (Purple's artifact, "Whenever a player's turn is skipped, +1 purple."). **NUMBER, asked as a question:** +2 purple, or +1 purple and +1 follower. Backing: N −5, H −11, VH −7, 3p −10, 2p −6, and that's with the phantom Last Call skips still paying it, so it's weaker than this reads. Experts 3.3 / 3.0. Cory said on Oct 30 that "Pocket Watch stays as it is", so this asks again rather than fixes. **Medium.**

10. **Desperado** ("While you have the fewest followers (ties count), double what you steal from spaces."). **REWORK:** a catch-up that doesn't double the biggest steal. Backing: experts in two games (g3 and g9, 8 players: "fair at 3 to 4, broken at 10"), plus a played turn. Round III, 4 players: the seat with the fewest followers (g9 Dee: "easy to arrange in round III") takes **Help Yourself** ("Steal 3 resources in round I, 4 in round II, 5 in round III, split among rivals as you choose.") for 10, which wins a +10 contest outright, against 5 without it. Very Hard backs it (+17 ±9, 30 owners). N +1 and H −1 do not. **Medium.**

11. **Greatest Hits** ("Copy the On Recruit of each of your members, in any order. +1 green."). **REWORK, direction:** cap how many it copies, or count only one On Recruit per member type. Backing: N +6, H +11, VH +14 (STRONG). The choice log says the lookahead likes it much more than Normal does (Hard 65 under, 16 over). The experts split hard: g9 was won by 41 on Greatest Hits with two **Mentor & Protégés** ("On Recruit: recruit the cheapest member in the shop.") plus Reprise, while g11's four players rated it 1 to 3 ("nothing to copy"). **Medium-low.** It has one taker a game (point 3). The text is Cory's own from this morning and it is on his backlog. He refused "copy 1" on Nov 1 ("same as other copies"), so any cap must stay above 1.

12. **Encore on Con Men** (**Encore** "Copy the On Recruit of a rival's member. +1 green."; **Con Men** "Counts as 2 members. On Recruit: steal 5 resources."). **REWORK:** a copied steal doesn't repeat on the same victim, or Encore can't copy a steal. Backing: experts in five games (g2, g3, g5, g9, g11; g9 and g11 again: "steal 5 off a middle-ring space… twice"), plus a played turn. Round II: Encore is a 5-steal plus 1 green, against about 6 for **Cover** ("Copy an action with no minion on it. +1 green."). The bots don't aim copies at one victim (Encore N −5, H +2, VH −1). **Medium.** Encore is already on Cory's backlog. Bug row 22: owners expected **Agents** ("Rivals can't copy your actions.") to stop it.

13. **Lie Low with Bodyguards funnels theft** (**Lie Low** "Steal 1. Rivals can't steal or recruit from you this round. +1 magenta."; **Bodyguards** "Rivals can't steal from you."). **REWORK, direction:** a cap on steals from one victim per round, rather than weaker protection. Backing: experts in g6, g9 and g11 (11 players). In g11 Dee lost 22 silver before her second round III turn, and the round III steal spaces "had exactly one target". Played turn: round III, 4 players, two cults protected. Help Yourself's 5 and **Crime Wave** ("Steal half of one rival's pile of one color, rounded down. +1 magenta.") both land on the one open seat, who feels it as a sting with no answer. Bots: Lie Low H +5, 2p +17 (STRONG); Bodyguards VH +19 ±10 (24 owners). **Medium-low.** Lie Low's text is Cory's 8:37am call, and he once said it "may go" (Oct 31). This asks about the funnel, not the card.

14. **Recruit Twice** ("Recruit twice this turn. +3 blue."). **NUMBER or REWORK:** the +3 blue Cory picked at 10:05am didn't fix it. Backing: weak at every level: N −4, H −11 (WEAK), VH −4, 3p −3, 2p −10, and Hard's choice log takes it 5% of the time. Experts improved to 3.1 / 3.1. In g10 the extra recruit spent on a 10 + 5 follower buy was "the cleanest conversion turn". **Medium.**

15. **Right Away** ("+1 purple (+2 in round II, +3 in round III). Your next turn comes right after this one."). **NUMBER: +2/+3/+4**, the same as **Hold Up** ("+2 purple (+3 in round II, +4 in round III). The next turn is skipped."). Backing: N −3 ±2, VH −4 ±3, 2p −8, plus the choice log (Hard FILLER, Very Hard chosen 4%) and experts 1.9 / 2.0 (21 raters; g11: "on your last minion the next-turn text does nothing"). **Medium.** H 0 is the one dissent.

16. **Mob** ("Game End: +1 follower per red member you have."; 7 red + 5 any, worth 5, counts as 5). **NUMBER:** worth 4, as Cory set on Oct 30 ("just make it fewer members"), or price 13. Backing: H +13 ±9 (30 owners), VH +9 ±7, interim N +15. At game end it counts itself as 5 red members. In g10 Ava saw "Patriarch and Mob each score 14 at game end". **Medium-low**, provisional until the 1:00pm Red re-runs.

17. **Fence** (Magenta's artifact, "Whenever any player steals, +1 magenta."). **A QUESTION, not a fix:** N +8, H +19, VH +12, 3p +16, 2p +32. It is the biggest artifact edge at every level, and Magenta is the strongest main color (N +9, H +12, VH +6, 2p +29). Cory accepted it at 12:19pm ("tested +17, seems a little strong but that's ok"). At 4 players it reads as he expected; the new fact is +32 at 2 players. **Medium.**

18. **Accomplice** ("On Recruit: steal 3 resources."; 1 magenta + 2 any). **NUMBER: price 4.** Backing: N +6, H +8 (interim lens DOMINANT), 3p +11, 2p +29 (STRONG). VH −1 dissents. Experts 4.0 / 4.0. Bug row 10: a Shake Down or Poach re-fires it for the taker. **Medium-low.** Look at it together with Fence (same color, same edge).

19. **Caterer** (Silver's artifact, "Whenever a player is gifted silver, +2 silver."). **NUMBER: +1 silver.** Cory said at 12:19pm "seems like a lot… willing to see what balance testing shows". Backing: N +7 ±3, VH +4 ±4, 3p +10, 2p +17, with H +2 the weak dissent. Experts 4.1 / 3.7 (7). **Medium-low.**

20. **Party Favors** ("+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver."). **REWORK, feel only:** the rival's choice needs a cost on both sides. Backing: experts 2.3 / 2.4 (20 raters; g9 and g11 again: "they give you what they don't care about", "the rivals' choice is always 1 silver for +2 silver"), plus the paper read. Played as the rival, giving your least-needed color is always right, which is verdicts #15. **Medium.** It isn't weak (3p +9, 2p +8, 4 players flat), so the rework must keep its power.

21. **Farewell and Estate Sale on spent members** (**Farewell** "Cast out one of your members to the bottom of the pile, gain followers equal to its cost. +1 white."; **Estate Sale** "Cast out one of your members to the bottom of the pile, gain white equal to its cost. +1 white."). **REWORK, direction:** a member whose once-per-game ability is used pays less when cast out. Backing: experts (all 3 g12 players, 2 in g4) plus a played turn. g12 Ben used **Heiresses** ("On Use, once per game: +1 white per member you have.") for 7 white, then Estate Sale paid its full cost of 9 white. That's 16 white from one 9-cost card, against **Allowance** ("+2 white in round I, +3 in round II, +4 in round III…") at +4. The bots don't show it: Farewell N +2, H −5, VH −2 (2p +15 STRONG); Estate Sale −1/−4/−4. **Low-medium.** It belongs on Cory's White revisit list (Oct 31: "white in general needs a little revisiting").

22. **Splurge** ("This turn, if you recruit a member, +1 follower for every 2 resources you pay for it. +1 white."). **NUMBER:** per 2 in round I, per 1 from round II. Backing: choice log at two levels (Hard DEAD, Very Hard FILLER, chosen 3%) and experts 1.6 / 1.9 (18 raters; g12: "+1 per 2 paid is small next to Allowance"). Lifts are flat (N 0, H −2, VH 0). **Low-medium.** Risk: at per 1 in round III, a 12-cost member returns 12 followers on top of itself, so check it against verdicts #13, or keep round III at per 2.

23. **Doormen** ("Whenever a rival recruits more than once in a turn (swaps count), +1 blue."). **REWORK, low priority:** a trigger that fires most rounds. Backing: experts 1.3 / 1.3 (3 raters: "never fired once") and a paper count (about 2 fires a game without Red). VH −9 ±5 leans the same way. **Low-medium.** The 2-follower body carries it (N +2, H +4).

24. **Loyalists** ("Your other members can't be swapped."; worth 3). **NUMBER: worth 4.** Backing: H −6, VH −12 (WEAK). The lens calls it a TRAP. **Low**, provisional on the Red re-runs. Cory set its worth to 3 and price to 5 last night.

25. **Window Shopper** ("On Recruit: send 1 shop member to the bottom of the pile. +1 of its color. Round Start: send 1 shop member to the bottom of the pile. +1 of its color."). **A QUESTION:** Cory said on Oct 30 that it stays "for real games to judge". Every level now reads low (N −13, H −6, VH −6, 2p −20), and it has one expert (3 / 3). **Low.**

## DOWNGRADED (watch, or needs a human table)

- **Money Changers** ("Whenever any player buys followers, +1 white."): the 4-player numbers lean strong only at the top (N +3, H +5, VH +9), and the small tables read weak (3p −7, 2p −16). The g12 experts (3 players, all 5 / 5 strategic) disagree with the 3-player bots. Fewer fires would make 2 and 3 players worse. Watch with Cory's White revisit.
- **Crunch Time** ("+2 purple. Your next two turns come right after this one."): experts 1.7 / 1.7 (g11: "nobody took it all game") and Hard's choice log DEAD, but its takers win (H +9, VH +14, SKILL+). It is a niche space that pays when built for (Courier, Hot Streak, Closer). A bigger number would make it a default pick. Cory called it "great" (verdicts). Leave it.
- **Tastemaker** ("Whenever you change rivals' resources, +1 follower."): too few owners at Hard and Very Hard, N −2 ±8 is noise, and experts 2.0 / 1.5 (2). The wording question stays (bug row 6).
- **Patriarch** ("Game End: +1 follower per 2 members you have."): H +15 (STRONG, lens DOMINANT), but VH −3, and there's no Normal read until the Red re-runs. Wait for 1:00pm.
- **Cashier** ("On Recruit: turn all your white into followers."): N 0, H −13 (WEAK), VH +6. The levels disagree. White revisit.
- **Double Agent** ("On Recruit: swap this member for a rival's member you choose."): VH −17 and 2p −21 (WEAK), but N −4 and H −3 are noise. Only one level at 4 players.
- **Fan Club** price 7: +4/+5/+4, none significant.
- **Harmonist** ("Game End: +1 follower per full set you hold."): 3p +32 (20 owners), and too few owners elsewhere. The rework rests on paper only.
- **Collector** ("Whenever a rival recruits paying silver, +1 silver."): N +24 (STRONG, 37 owners), VH +2, too few at Hard. Normal only. Cory priced it 6 at 4:05am.
- **Extra Hand, Heiresses, Hot Streak, Courier:** strong at Very Hard only (+19, +17, +15, +17), each with fewer than 50 owners and no second level.
- **Gift Wrapper, Hangers-On, Smooth Talkers, Patroness, Wallflower, Hoarder, Tribute Band:** under 30 owners at Hard and Very Hard. Too few to read.
- **Recruiter** ("Whenever a member leaves a rival's cult, +2 red."): H 0, VH −7, measured on the old payout. Re-read after the shop-move change and the Red re-runs.
- **Stunt Double** ("On Recruit: copy the action you just took.") on **Crowd In** ("+3 purple. +1 minion this round."), a second extra minion: one game (g11). Flat at every level. Watch with item 3.

## KILLED

- **Party Crasher** price 4 to 6: the Hard +13 was interim noise (final N +2, H +5, VH −3, 3p −10). Its feel case is the rework (Survives #3).
- **Largesse** smaller: N +4, H −6, VH −2, 2p −22 (WEAK). Alone it's in band. Its problem is copies (Survives #2).
- **Impressionist** ("Whenever any player copies an action, +2 of its color.") raise: Cory changed it at 12:19pm, and it now reads N +11, 3p +24, 2p +17.
- **Crunch Time** +2 to +4 purple: bots at Hard and Very Hard point the other way (see Downgraded).
- **Panel** ("On Recruit: promote or demote another of your members.") firing for whoever swaps it in: one game (g9), flat bots (H +9 ±7, VH +1). It's the same rule every On Recruit follows when a member changes cults (bug row 10), inside Cory's swap design.
- **Courier** price 6 to 4: VH +17, N +5. Nothing says weak.
- **Gossip** price 6 to 4: N +16, VH +8, and those pays include the phantom Last Call skips.
- **Polish** ("Turn 2 of your silver into 4 of any colors."): the interim VH −9 is gone (N −1, H +3, VH +2).
- **Bouncers** ("On Recruit: the next two rivals' turns are skipped."): N −7 only. H −2, VH +2.
- **Line Cutters** ("You go first every round."): the rework is Cory's call (Nov 1, 1:12am), and it reads N −2, H −4, VH −2 at his new worth of 3. Nothing to move.
- **Trade Seeds** grow by round: N +6 (STRONG), H −3, VH −1. Nothing says weak.
- **Shopaholics** price 8: N +4, H +10. Nothing says weak.
- **Early Birds** REWORK (don't block the owner's own skips): Cory's Oct 22 and Oct 26 call. Its number lift survives (#6).
- **Stash**: already cut on Cory's list (Oct 31, "Help Yourself is enough"). Its bot numbers come from the old +3/+4/+5 payout.
- **Encore** as its own item: on Cory's backlog. Its evidence sits under Survives #12.
- **Hoarder** worth 2: 3 to 10 owners at every level.

## BUGS AND WORDING (not balance)

- **decisions.md is stale on Greatest Hits.** Its last line (12:32am, "Copy any 3 round I actions with a minion on them") contradicts the live "Copy the On Recruit of each of your members, in any order. +1 green.", which commit cd500e3a calls Cory's Nov 1 call. Log the call.
- **Mob counting as 5** is not a bug. It follows Cory's Oct 31 11:55pm rule (member count = follower count), made after his Oct 30 "counts as 4". If he meant 4 to stand, that's a number question (Survives #16).
- **Agents** doesn't stop Encore copying its owner's member (bug row 22). Owners read it as blocked. A words question.
- **Dabblers** blocks **Guest Book** (row 26), since it counts as every color. A words question that also feeds Survives #4.
- **Lie Low** lets swaps through (row 18). That's Cory's 8:37am call; the g9 table read it the other way. A words question.
- **Tastemaker**, **Patroness** and **Caterer** pay once per space or batch, while their text reads per resource, per card or per player (rows 6, 7, 27).
- **Recruiter, Stash, Last Call**: all fixed after the runs started. Their numbers above use the old payouts.
- **Instrument notes:** the choice log can't see On Use choices, and member DEAD tags are Normal-filtered. Read both as leads.
