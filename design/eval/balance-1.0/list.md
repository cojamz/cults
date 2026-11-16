# Cults balance list, 10-card deck (Nov 1)

Run on the 10-card deck: Normal bots 1,400 games (800 at 4 players, 300 at 3, 300 at 2), Hard bots 422 and Very Hard bots 398 at 4 players, 12 AI-player games (42 players) rating every space, member and artifact, four color reviews, and a skeptic pass that kept only what two independent instruments agree on. Winners with 5 or fewer members: Normal 8%, Hard 9%, Very Hard 15% at 4 players (bar: at least 20%), so no level clears the bar.

How to read the numbers: "N/H/VH" is Normal/Hard/Very Hard bots at 4 players, "3p" and "2p" are Normal at 3 and 2 players. Each number is the lift in points: the share of games won by the card's owner or taker, minus what you'd expect for their member count. "Choice log" is how often Hard or Very Hard bots pick a space when it is open. "AI players" are the 12 expert games, rated strategic / fun out of 5.

Caveats:
- **Red's numbers come from the re-runs with Promote and Demote as you set them.** Tables played on the reverted swap build were dropped.
- **Three payouts changed during the runs, so their bot numbers use the old payout.** Stash paid one magenta too many, Last Call's extra skips paid Gossip and Pocket Watch for turns nobody lost, and Recruiter did not yet pay when a rival's member went to the shop.
- The artifacts were measured with your 12:19pm texts (Fence, Impressionist and Caterer fire on any player's move).

## Where to focus design time

1. **What a copy or a join can repeat.** Every game with Green (6 of 12) named copying as a top problem. The complaint is never the copy itself (**Echo** is Green's best-rated space, 4.4 / 3.8). It is what gets copied: Largesse's 10 silver, Con Men's steal of 5, a stack of On Recruits. Keep the copy spaces as they are and change what a repeat pays. Items 2, 3, 5 and 6 below.

2. **A round III ending the table can count.** In 5 of 12 AI-player games the winner's deciding swing came from their last placements, from a card that acts after everyone or on a space someone already took (Last Call's block, Party Crasher onto Makeover or Largesse). Keep Last Call's trade; limit what can happen after or on top of everyone else. Items 1 and 3.

3. **White's loop.** Farewell and Estate Sale pay a member's full cost after its once-per-game ability is spent, and Money Changers kept white uncontested all game in g12. Money Changers was downgraded (the bots read it weak at 2 and 3 players), so the cast-out item (10) is the part ready to work on. It fits your Oct 31 note that "white in general needs a little revisiting".

Next after these (Claude's guess): a cap on steals per victim per round, so protection moves theft around instead of piling it on one cult (item 7).

## Reworks

Ranked by how much a player at the table feels it. Each lists the two instruments that back it.

**1. Last Call** ("+1 purple. +1 follower and +1 purple per minion you have left. Skip your turns until everyone else is out of minions.")
- What's wrong: strategic. In round III it is the strongest space on the board, and the space that decides close games.
- Evidence: N +6, H +13, VH +15, growing with bot skill; the choice log (Hard and Very Hard) calls it AUTO-PICK. AI players rate it the best space (4.6 / 3.9, 21 raters). In g1 Ava took it first in round III and won all four 10-follower contests by one each. In g11 it set up Ben's Party Crasher into Largesse on the final placement.
- Direction: keep the trade. In round III, either end the block early enough that rivals still place after the caller, or pay less per minion left. These are your 10:21am numbers, so this is the run reading your version.
- Caveat: its bot numbers include the extra skips fixed during the run.

**2. Copies repeating the biggest gift.** **Echo** ("Copy the previous action. +1 green."), **Reprise** ("Copy an action with your minion. +1 green."), **Tribute Band** ("On Use, once per game: choose a rival. Do every action they have a minion on this round.") and **Party Crasher** ("On Use, once per game: your next minion can be placed on a space a rival already took.") all repeat **Largesse** ("Rivals gain up to 10 silver, split as you choose. +1 follower for each.") and **Party Gifts** ("Rivals gain up to 3 silver, split as you choose. +2 followers for each.").
- What's wrong: strategic. One gift space copied becomes the round.
- Evidence: AI players (all 8 players in g9 and g11 made it their first change; in g11's round III Largesse paid 10 four times, 40 followers) and a played turn: round III, 4 players, Echo right after a rival's Largesse is 🧍10 and 🟢1, against **Build Up** ("+3 green in round I, +4 in round II, +5 in round III.") at 🟢5. The gifter feels it as a sting, since the next seat doubles their play. Bots don't chain copies, so Largesse alone reads in band at 4 players (N +1, H −4, VH −2). **Tribute Band** owners win more at every level (N +14, H +16, VH +24), from only 42 Normal owners.
- Direction: change what a copy repeats, not the copy itself. For example, a copied gift space gives the silver but not the followers. You said on Oct 31 to "see where it falls in balance testing": alone it falls in band; copied it doesn't. Your Echo verdict ("only as good as what was just played") argues for keeping the copy verb whole.

**3. Party Crasher** ("On Use, once per game: your next minion can be placed on a space a rival already took.")
- What's wrong: strategic. On the last placement it can join a space that decides every contest.
- Evidence: AI players (rated 4.2 / 3.8; g9, g10, g11) and a played turn: in g10, all 3 players, Ben joined Ava's **Makeover** ("+4 yellow, then rearrange your resources into any mix of colors.") on the final placement, rearranged 19 resources and won all three round III contests, +30 followers, against about +10 from the best open space. In g9 and g11 it joined Largesse for +10 and +11. Bots don't back a price change (N +3, H +1, VH −2, 3p −9).
- Direction: it can't join a center space (the round III one), or can't on the round's last placement. Makeover alone is not strong (N 0, H −5, VH −1), so the change belongs on the join.

**4. Desperado** ("While you have the fewest followers (ties count), double what you steal from spaces.")
- What's wrong: strategic. A catch-up card that doubles the biggest steal of the game.
- Evidence: AI players (g3 and g9, 8 players: "fair at 3 to 4, broken at 10"; g9 Dee: fewest followers is "easy to arrange in round III") and a played turn: round III, 4 players, **Help Yourself** ("Steal 3 resources in round I, 4 in round II, 5 in round III, split among rivals as you choose.") steals 10 instead of 5, enough to win a 10-follower contest outright. The bots split (N +6, H −5, VH +7, none significant), so they neither back nor contradict it.
- Direction: keep it a catch-up, but one that doesn't double the largest steal.

**5. Greatest Hits** ("Copy the On Recruit of each of your members, in any order. +1 green.")
- What's wrong: strategic and fun. Either it wins the game or it does nothing.
- Evidence: bots N +12, H +15, VH +13 (strong at all three levels; the lens tags it STRONG) and AI players: g9 was won by 41 on Greatest Hits with two **Mentor & Protégés** ("On Recruit: recruit the cheapest member in the shop.") plus Reprise; g11's four players rated it 1 to 3 ("nothing to copy"). Only one player takes it per game, so part of its lift is that player already being set up.
- Direction: cap how many On Recruits it copies, or count one per member type. You refused "copy 1" this morning ("same as other copies"), so any cap stays above 1. It is your text from this morning and already on your list.

**6. Encore on Con Men** (**Encore** "Copy the On Recruit of a rival's member. +1 green."; **Con Men** "Counts as 2 members. On Recruit: steal 5 resources.")
- What's wrong: fun. A steal of 5 from the same victim twice.
- Evidence: AI players in five games (g2, g3, g5, g9, g11: "steal 5 off a middle-ring space… twice") and a played turn: round II, Encore is a 5-resource steal plus 🟢1, against about 6 resources from **Cover** ("Copy an action with no minion on it. +1 green."). Bots don't aim copies at one victim (Encore N −3, H +1, VH −2).
- Direction: a copied steal can't take from the same victim, or Encore can't copy a steal. Encore is already on your list. Related question 25 (Agents).

**7. Lie Low with Bodyguards funnels theft** (**Lie Low** "Steal 1. Rivals can't steal or recruit from you this round. +1 magenta."; **Bodyguards** "Rivals can't steal from you.")
- What's wrong: fun. With two cults protected, every steal in round III lands on the one cult left, who has no answer.
- Evidence: AI players (g6, g9, g11, 11 players; in g11 Dee lost 22 silver before her second round III turn, and the steal spaces "had exactly one target") and a played turn: round III, 4 players, two cults protected, Help Yourself's 5 and **Crime Wave** ("Steal half of one rival's pile of one color, rounded down. +1 magenta.") both hit the same seat. Bots: Lie Low N +3, H +3, VH +2, 2p +16 (strong); Bodyguards owners win more at every level (N +15, H +15, VH +15; 56 Normal owners).
- Direction: a cap on how much one victim can lose to steals in a round, rather than weaker protection. Lie Low's text is your 8:37am call; this asks about the pile-on, not the card.

**8. Recruit Twice** ("Recruit twice this turn. +3 blue.")
- What's wrong: strategic. The +3 blue you picked at 10:05am didn't lift it.
- Evidence: weak at every bot level (N −4, H −9, VH −4, 3p −5, 2p −10) and the choice log (Hard picks it 5% of the time). AI players rate it 3.1 / 3.1; in g10 an extra recruit spent on a 10-follower buy plus a 5 was "the cleanest conversion turn".
- Direction: either a bigger number (more blue, or a follower per recruit), or a second recruit that is cheaper. Your call which way.

**9. Party Favors** ("+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver.")
- What's wrong: fun. The rival's choice is never a choice.
- Evidence: AI players (2.3 / 2.4, 20 raters; "they give you what they don't care about", "the rivals' choice is always 1 silver for +2 silver") and a paper read: played as the rival, giving your least-needed color is always right. It is not weak (3p +5, 2p +9, flat at 4 players), so a rework keeps its power.
- Direction: give the rival's choice a cost on both sides.

**10. Farewell and Estate Sale on spent members** (**Farewell** "Cast out one of your members to the bottom of the pile, gain followers equal to its cost. +1 white."; **Estate Sale** "Cast out one of your members to the bottom of the pile, gain white equal to its cost. +1 white.")
- What's wrong: strategic. A once-per-game member is used, then cast out for its full cost.
- Evidence: AI players (all 3 in g12, 2 in g4 made it their first change) and a played turn: in g12 Ben used **Heiresses** ("On Use, once per game: +1 white per member you have.") for 7 white, then Estate Sale paid its full cost of 9 white, 16 white from one card, against **Allowance** ("+2 white in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III).") at 4. Bots don't show it (Farewell N 0, H −2, VH −1, 2p +16; Estate Sale N −2, H −1, VH −3).
- Direction: a member whose once-per-game ability is used pays less when cast out. Fits your White revisit.

**11. Doormen** ("Whenever a rival recruits more than once in a turn (swaps count), +1 blue."; worth 2) — low priority.
- What's wrong: fun. It almost never fires.
- Evidence: AI players (1.3 / 1.3, 3 raters: "never fired once") and a paper count (about 2 fires a game without Red). Bots are flat (N +1, H +3, VH −4); the 2-follower body carries it.
- Direction: a trigger that fires most rounds.

## Number tweaks

**12. Guest Book** (Yellow's artifact: "Whenever you recruit a member of a color none of your members have, +2 yellow.")
- From +2 🟡 to +3 🟡, or +2 🟡 and +1 🧍.
- Evidence: weak at every level and table size: N −12, H −11, VH −8, 3p −22, 2p −21. AI players 2.5 / 2.8 (11 raters); g12 Ava "bought it for Guest Book, which didn't fire". Artifact lifts trade off against each other (each seat drafts one), so Fence (question 23) holds the other side. You called +3 yellow "a lever to pull".
- Caveat: these numbers predate your 12:50pm call that **Dabblers** ("Counts as 2 wild members.") always works best for its owner, so Guest Book keeps paying when you own Dabblers. That fix is being built; the run had Dabblers blocking it.

**13. Bargain Bin** (Blue's artifact: "Whenever shop members go to the bottom of the pile, +1 blue.")
- From +1 🔵 to +2 🔵 per batch.
- Evidence: N −12, H −5, VH −8, 3p −9, 2p −12. AI players 3.3 / 2.9 (9) don't call it weak, so this is the number only. Risk: Blue's contest is rarely swept (one seat wins it every round in 4 to 8% of 4-player games), so it gets easier; worth a re-read after.

**14. Early Birds** ("Your turns can't be skipped."; 2 purple + 1 any, worth 2)
- From worth 2 to worth 3 (lift with followers, not price).
- Evidence: the lens calls it a TRAP at every level (bought in 71 to 89% of games, owners lose): N −6, H −14, VH −9, 3p −4, 2p −14. The rework (letting the owner's own Sleep In and Last Call skip) stays out, per your Oct 22 and Oct 26 call.

**15. Go-Between** (Yellow: "Whenever a space gives you resources, you may change 1 of them to any color."; worth 1)
- From worth 1 to worth 2.
- Evidence: N −12, H −17 (weak at both), VH −8, 3p −8, 2p −25. One AI player rated it 2 / 2.

**16. Drifters** (Yellow: "Worth 2 followers. On Recruit: choose a color; these count as a member of that color."; 2 yellow + 1 any)
- From worth 2 to worth 3.
- Evidence: N −8 (weak), H −5, VH −4, 3p −13, 2p −15, all pointing down. AI players 2.8 / 3.2 (6). With Go-Between and Guest Book, it is why Yellow is the weakest color (N −7, H −11, VH −4).

**17. Right Away** ("+1 purple (+2 in round II, +3 in round III). Your next turn comes right after this one.")
- From +1/+2/+3 🟣 to +2/+3/+4 🟣, the same as **Hold Up** ("+2 purple (+3 in round II, +4 in round III). The next turn is skipped.").
- Evidence: small but the same way at two levels: N −2, VH −3, 2p −7; choice log (Hard: filler; Very Hard picks it 4%); AI players 1.9 / 2.0 (21 raters; g11: "on your last minion the next-turn text does nothing"). H +2 is the one dissent.

**18. Mob** (Red: "Game End: +1 follower per red member you have."; 7 red + 5 any, worth 5, counts as 5)
- From worth 5 (counts as 5) to worth 4 (counts as 4), as you said on Oct 30 ("just make it fewer members"), or price 12 to 13.
- Evidence: N +15 and H +15 (both strong), VH +9, 3p +25 (strong). Owned in 65 to 74% of games; the lens calls it a SLEEPER (bought less often than it pays). At game end it counts itself as 5 red members; in g10 Ava saw "Patriarch and Mob each score 14 at game end". Counting as 5 follows your Oct 31 rule (member count = follower count), which came after your Oct 30 "counts as 4"; if you meant 4 to stand, this is that.

**19. Accomplice** (Magenta: "On Recruit: steal 3 resources."; 1 magenta + 2 any)
- From price 3 to price 4.
- Evidence: N +8 (strong), H +7, VH +2, 3p +8, 2p +32 (strong). AI players 4.0 / 4.0. Same color and same edge as Fence (question 23), so read them together. Also as built: a **Shake Down** ("Choose a rival. They choose one of their members costing 5 or less, then pay you its cost or you steal it. +1 magenta.") or **Poach** ("Recruit a rival's member you choose. +1 magenta.") on it fires its steal again for the taker.

**20. Caterer** (Silver's artifact: "Whenever a player is gifted silver, +2 silver.")
- From +2 silver to +1 silver. You said at 12:19pm "seems like a lot… willing to see what balance testing shows".
- Evidence: N +8, VH +6, 3p +13, 2p +15; H +1 is the one flat level. AI players 4.1 / 3.7 (7).

**21. Splurge** ("This turn, if you recruit a member, +1 follower for every 2 resources you pay for it. +1 white.")
- From +1 🧍 per 2 paid to per 1 paid in round II; keep per 2 in rounds I and III.
- Evidence: choice log at two levels (Hard: never picked; Very Hard: 3%) and AI players 1.6 / 1.9 (18 raters; g12: "+1 per 2 paid is small next to Allowance"). Lifts are flat (N −2, H +1, VH +2). Why not per 1 in round III: a 12-cost member would return 12 followers on top of itself.

## Questions for you

Each is your call; the facts are as built today.

22. **Pocket Watch** (Purple's artifact: "Whenever a player's turn is skipped, +1 purple."): weak at every level (N −8, H −6, VH −5, 3p −11, 2p −1), and weaker than that, since the extra Last Call skips paid it. You said Oct 30 it "stays as it is". Keep it, or +2 🟣, or +1 🟣 and +1 🧍?
23. **Fence** (Magenta's artifact: "Whenever any player steals, +1 magenta."): the biggest artifact edge at every level (N +13, H +14, VH +10, 3p +12, 2p +36). You accepted +17 at 12:19pm; the new fact is +36 at 2 players. Magenta is the strongest main color at Normal (N +11, H +3, VH +4). Keep as is?
24. **Window Shopper** (Blue: "On Recruit: send 1 shop member to the bottom of the pile. +1 of its color. Round Start: send 1 shop member to the bottom of the pile. +1 of its color."): you said Oct 30 it stays "for real games to judge". Every level reads low (N −9, H −11, VH −7, 2p −15), and the lens now calls it a TRAP (bought in 54 to 73% of games, owners lose). Keep waiting for human games?
25. **Agents** ("Rivals can't copy your actions.") doesn't stop Encore copying its owner's Con Men steal; the g9 owner read it as blocked. Should it?
26. **Bodyguards** ("Rivals can't steal from you.") blocks every swap (Anarchist, Double Agent, Promote, Demote); **Lie Low** ("Steal 1. Rivals can't steal or recruit from you this round. +1 magenta.") lets swaps through (your Nov 1 call) but blocks **Double Agent** ("On Recruit: swap this member for a rival's member you choose."). All four g9 players expected Lie Low to block swaps. Should both block swaps, neither, or stay as now?
27. **Lie Low** and **Bodyguards** don't stop **Raiders** ("On Use, once per game: steal 4 followers from the leader. Pay them 2 white.") or **Debt Collectors** ("On Use, once per game: each rival gives you 2 silver, if they have it."); g6 and g7 players expected them to. Should they?
28. **Panel** (Red: "On Recruit: promote or demote another of your members.") reaches rivals' and shop members, like Promote and Demote, though it says "another of your members"; and it fires for whoever swaps it in, so a Promote onto a rival's Panel gives two swaps. Change the words or the behavior?
29. **Tastemaker** (Yellow: "Whenever you change rivals' resources, +1 follower.") pays once per space; players read it as once per resource. Words or behavior?
30. **Patroness** (Blue: "Whenever a shop member goes to the bottom of the pile, +1 follower.") pays once per batch (your Oct 21 call); the text reads per member. Change the words?
31. **Caterer** ("Whenever a player is gifted silver, +2 silver.") pays once per gift action, not once per player gifted; a g11 owner checked before buying. Change the words?
32. **Polisher** (Silver: "On Use, once per game: turn up to 3 silver into 2 of any colors each.") always turns 3 silver (or all you have, if fewer); the player can't pick 1 or 2. Let the player choose?
33. **Recruiter** (Red's artifact: "Whenever a member leaves a rival's cult, +2 red.") also pays on its owner's own Promote and Demote; in g12 Ava's red lead of 8 to 4 became 14 to 8. Feel note only.
34. **Greatest Hits** text: the live card ("Copy the On Recruit of each of your members, in any order. +1 green.") isn't in the decisions log, whose last entry says "Copy any 3 round I actions with a minion on them". Confirm the live text is yours?

## What's working

- **The contests.** 33 of 42 AI players called holding a color to round end the heart of the game; 6 of 12 games were won by 12 or less, g4 by 1.
- **Red's swaps.** **Promote** ("Swap a member with a shop or rival member costing up to 2 more. +3 red.") rates 4.1 strategic, **Demote** ("Swap a member with a shop or rival member costing up to 2 less. +3 red.") 4.2; 8 players in 4 of 5 Red games named them among their best decisions. Bots' takers win about evenly (Promote N −1, H −3, VH −4; Demote N −5, H −1, VH +2): a swap gains you something and costs one rival, while the two left out lose nothing.
- **Spaces that read the table.** Echo 4.4 / 3.8; Crime Wave was "the best counter to hoarding" (g9 Ben). Every space was called a fit for its color by at least three quarters of its raters.
- **The last-seat puzzle, when it can be counted.** All four g3 players named it the best part; Last Call is the top-rated space (4.6 / 3.9).
- Seat order is close to even (seat 1 wins 27% Normal, 26% Hard, 29% Very Hard at 4 players, against 25%; 54% at 2 players, against 50%).
- Watch: all four newest AI games (g9 to g12) were won by 20 or more. Too few to call.

## Considered and dropped by the skeptic

- **Money Changers** fewer fires: lifts N +1, H 0, VH +8 at 4 players and 2p −16; fewer fires would hurt small tables. Watch with White.
- **Crunch Time** +2 to +4 purple: its takers already win (H +10, VH +12, strong at both; better bots get more from it); a bigger number makes it a default pick.
- **Party Crasher** price 4 to 6: the Hard +13 was interim noise (final N +3, H +1, VH −2). The join rework (item 3) replaces it.
- **Largesse** smaller: alone it reads in band (N +1, H −4, VH −2). Its problem is copies (item 2).
- **Impressionist** raise: your 12:19pm text now reads N +11, H +6, VH +3, 3p +20.
- **Panel** firing for the swapper as a fix: one game, flat bots, and the same rule every On Recruit follows (kept as question 28).
- **Courier** and **Gossip** price cuts: both read fine or strong (Courier VH +20, Gossip N +13, H +17).
- **Polish** ("Turn 2 of your silver into 4 of any colors."): the interim weak read is gone (N 0, H +2, VH +1).
- **Bouncers**, **Line Cutters**, **Trade Seeds**, **Shopaholics**, **Hoarder**: one level only, or too few owners.
- **Early Birds** rework: your Oct 22 and Oct 26 call (its number lift is item 14).
- **Stash**: already cut on your list (Oct 31).
- **Loyalists** (Red: "Your other members can't be swapped."; worth 3) worth 3 to 4: on the full numbers only Very Hard reads it weak (N +1, H −1, VH −8), and the lens no longer calls it a trap.
- **Tastemaker**, **Cashier**, **Fan Club**, **Harmonist**, **Collector**: the bot levels disagree or there are too few owners; watched, not changed.
- Now two levels agree, not re-checked by the skeptic: **Patriarch** (Red: "Game End: +1 follower per 2 members you have."; price 6) reads strong at Normal and Hard (N +7, H +6, VH −1), which backs the red review's price 8. **Double Agent** (Magenta: "On Recruit: swap this member for a rival's member you choose.") reads weak at Hard and Very Hard (H −7, VH −13, 2p −20).

## Fixed during the round

- **Scouts**' sweep now pays Patroness and Bargain Bin.
- **Stash** pays its printed +2/+3/+4 magenta (it paid one too many).
- **Last Call** no longer skips turns that already came after every rival, so Gossip and Pocket Watch stop paying for them.
- **Recruiter** pays when a rival's member goes to the shop (your 12:11pm call).
- **Guest Book with Dabblers**: decided (your 12:50pm call, Dabblers always works best for its owner), fix being built.
- AI-player tool: option numbers no longer shift mid-turn (misclicks in 5 games), and game files no longer go missing between rounds. Balance report: member ownership no longer reads over 100%.
