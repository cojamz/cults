# Review: White, Green and the grey members (balance-1.0, deck 10)

Reviewer: Claude (color reviewer brief). Live cards read from the engine on claude/gifted-newton-3lcy3i at 0b6d2c91. All data is deck 10, under design/eval/balance-1.0/.
Short names for instruments: **N** = Normal bots 4p (640 games), **N3/N2** = Normal 3p/2p, **H** = Hard 4p (115 games), **VH** = Very Hard 4p (38 games, a lead only), **CL-H / CL-VH** = choice log tag at Hard / Very Hard, **probe** = feel probe 4p (gain per placement), **experts** = 16 expert AI players (strategic/fun, n raters). Lift is in points of win share after member count.

## Three things about the instruments, before any card

1. **Member uses are not scored by the lookahead.** Every "Member uses" row is DEAD at 0% contender (Scouts, Raiders, Polisher, Hot Streak, Party Crasher, Anarchist, Extra Hand, Tribute Band, Heiresses, Hoarder). The bots fire uses from fixed rules. So DEAD on a use is not a finding, and members whose whole value is the use (Extra Hand, Hoarder, Anarchist, Tribute Band, Raiders, Scouts) are read low by every bot level.
2. **A space left open to the end of round III goes to the leader.** From round II the fewest followers go first; with 5 minions the snake ends on seat 4, the leader. Spaces taken mostly "thin" (as the last pick) get positive lift from who takes them, not what they give. That covers **Greatest Hits** (+22 N and H, but CL-H DEAD, 61% thin) and **Cash In** (VH +16, 52-64% thin).
3. **The probe counts only what a placement gives right away.** Bonuses that come when you recruit (Allowance's and Splurge's followers) are missing, so Splurge reads "dead 100%" there. Use the choice log and experts for those.

---

## White (trading)

Fantasy (design-core): "I bank white and cash it in past the limit." Contest: most white held at round end.
Deck 10: 6 spaces, 10 members (Undertaker is 15-deck only), artifact Money Changers.

### Allowance (round I space)
"+2 white in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III)."
- **Verdict: KEEP.**
- Strategic: the default white space with a member buy. CL-H MIXED (9% chosen, 3% close), CL-VH MIXED (9% chosen, 4% close). You take it when you'll recruit a member this turn. You skip it when you're buying followers.
- Fun: experts 3.3 / 3.4. "Allowance plus a member buy is a nice tempo turn" (g2 Ben). Nobody called it exciting, and nobody called it dull.
- Fits: yes (8/0/0).
- Evidence: lift N −1, H −1, VH +2, N3 +2, N2 +5: flat at every level. Probe 2/3/4 white plus the recruit bonus.
- Bot-artifact check: flat at every level, so better bots would not change it.

### Splurge (round I space)
"This turn, if you recruit a member, +1 follower for every 2 resources you pay for it. +1 white."
- **Verdict: NUMBER.** Its rate should grow by round like its siblings'. My guess at the number: per 2 in round I, per 1 from round II.
- Strategic: it is dominated by Allowance on almost every turn. CL-H **DEAD** (7% contender, 3% chosen, 63% thin), CL-VH **FILLER** (3% chosen, 64% thin). Round II and III columns show 1% chosen.
- Fun: experts **1.4 / 1.6**, the lowest on the White wheel. "Nobody wanted it, +1 white and a bonus no one set up" (g2 Ava). Six of the eight call it a leftover.
- Fits: yes (8/0/0). Paying big for a member and getting followers back is White's "past the limit" idea.
- Evidence: choice logs at H and VH agree, and so do the experts. The lift (N +3, H +13 STRONG) is selection: it is taken only on the turn of a big buy (point 2 above). The probe can't see it (point 3).
- Played turn: **round II**, 4 players. Ben has 9 resources and buys **Fan Club** (2 green + 4 any, 6). Splurge gives +3 followers and +1 white, so 4. **Allowance** on the same turn gives +3 white and +2 followers, so 5. Splurge only ties Allowance at 8 paid, and in round III at 12 paid (+6 +1 against +4 white +3). At per 1 from round II: the same Fan Club buy gives +6 +1 = 7 against Allowance's 5. In **round III**, buying **HR** (10 any) with Splurge comes to 4 worth + 10 + 1 white = 15. Buying 10 followers on **Allowance** comes to 10 + 4 white = 14. That would make a pricey member compete with buying 10 followers. Experts named the opposite as a problem: "in round III buying followers beats nearly every member, so the shop goes quiet" (g2 Cal, META).
- Bot-artifact check: it survives. Both lookahead levels pass it, and the experts did too.

### Exchange (round I space)
"Turn up to 1 resource (2 in round II, 3 in round III) into 2 followers each. +1 white."
- **Verdict: KEEP.**
- Strategic: a last-minion converter. CL-H FILLER (3% chosen, 53% thin), CL-VH MIXED. Its job is to clear odd leftovers, so a filler tag fits.
- Fun: experts 3.1 / 3.1. "Best conversion rate on the board and great on a last turn" (g2 Ben). "Gives followers without spending a recruit, which matters more than its numbers suggest" (g4 Ben).
- Fits: yes.
- Evidence: lift N +1, H +6, VH +2. Probe 2.0 / 3.1 / 4.2.
- Bot-artifact check: positive at every level, so it survives.

### Farewell (round II space)
"Cast out one of your members to the bottom of the pile, gain followers equal to its cost. +1 white."
- **Verdict: KEEP.** The experts' complaint is about the pricey once-per-game members, and those should be priced on their own.
- Strategic: a real sacrifice that rewards planning. CL-H MIXED (5% chosen), CL-VH MIXED (5%).
- Fun: experts **4.3 / 3.9**, the best-liked White space. "Martyrs through Farewell paying twice was the strongest single play I saw" (g2 Cal). In g4 all four players flagged "full printed cost on a spent once-per-game card" (Heiresses 9, Extra Hand 9). Ava rated it 5/2, "feels bad to watch".
- Fits: 7 yes / 1 no. It matches Cory's approved sibling: "a sacrifice that turns a spent asset into fuel".
- Evidence: lift N 0, H 0, VH +13 (±9, a lead), N2 +13 STRONG, N3 +4. Probe R2 5.8 ± 1.7, R3 6.6 ± 1.4. Its average sits below Echo, Reprise and Cover (8.3) and far below Largesse (11) and Toast (9.9).
- Played turn (the experts' case): **round II**, g4. Cal used **Heiresses** (4 white + 5 any, worth 2; "On Use, once per game: +1 white per member you have") for +11 white, then took Farewell: +9 followers − 2 (Heiresses' worth) +1 white, so **+7 net**. The best other round II space open was **Estate Sale** on the same card: +9 white +1 white, still to be converted. Or **Echo**, probe R2 6.6. So the margin is about 1 over Echo, with a 9-cost member bought earlier and a whole Heiresses turn as setup. Ben's **Extra Hand** play in round III: 9 followers − 1 = +8, against probe R3 for Echo and Reprise at 8.3. That is not out of line, because the expensive card was bought and placed first. Neither experts nor bots show it running away from the ring. The bad feeling comes from watching a used-up 9-cost card come back at full price. If Cory wants that feeling gone, the lever is the price of the expensive once-per-game members, not this space.
- Bot-artifact check: Normal and Hard read 0 and only VH reads +13. Better players get more from it (SKILL+), so watch it as VH data grows.

### Estate Sale (round II space)
"Cast out one of your members to the bottom of the pile, gain white equal to its cost. +1 white."
- **Verdict: KEEP.**
- Strategic: CL-H AUTO-PICK (73% auto, 10% chosen), CL-VH MIXED (10% chosen, 3% close). It pivots a member into the white contest, or into Cash In fuel.
- Fun: experts 3.5 / 3.3. Taking a member with **Poach** ("Recruit a rival's member you choose. +1 magenta.") and selling it here for 8 white won a +10 contest (g2 Dee, rated 5/5). Others called it "a decent white pivot, never a key play".
- Fits: yes (8/0/0). This is Cory's own pick ("3 is good improves on mine").
- Evidence: lift N −2, H +2, VH +8, N3 −4, N2 +8: mixed, with no direction across levels. Probe R2 5.3, R3 6.4.
- Bot-artifact check: no finding.

### Cash In (round III space)
"Turn all your white into followers. +1 white."
- **Verdict: KEEP** (same treatment as every card; the evidence does not point at a change).
- Strategic: it creates a real decision. Empty the white and lose the +10 white contest, or hold the white. The +1 white afterward can keep the contest if rivals hold none. CL-H **DEAD** (2% chosen), CL-VH FILLER. Bots seldom bank white (probe R3 1.2, dead 84%), which is Normal's habit of spending white each round, not the card.
- Fun: split, with the card doing exactly what it should when built for. In g2 nobody took it (1-3). In g4 Cal turned 16 white into 17 followers in one placement, rated 4-5 by all four players: "the catch is it empties your white contest, which is the right tension" (Cal).
- Fits: yes. It is White's signature.
- Evidence: lift N −4, H +3, VH +16 (±15, mostly thin, point 2). No two levels point the same way.
- Bot-artifact check: likely a bot artifact. Bots don't build a white pile for it, and the one expert who did made it the game's biggest turn.

### Money Changers (White's artifact)
"Whenever any player buys followers, +1 white."
- **Verdict: NUMBER** (fewer fires). Fire on rivals' buys only, or only on buys of 5 or more. Retest against the old version, which read −9 to −11; the target is in between.
- Strategic: no decision after you pick it. It pays with no input and decides the white contest.
- Fun: experts 4.5 / 4.0. "Quietly gave me about 15 white over the game off everyone's follower buys and won me white twice; maybe the best artifact here" (g2 Dee). "It kept the white contest mine all three rounds" (g4 Cal). Dee in g4: "I can't realistically take white off him with Money Changers pinging on every follower buy".
- Fits: yes.
- Evidence: lift **N +17, H +18, VH +20**, N3 +9, N2 +8. Every level and table size agrees, and it is the biggest artifact gap in the game (next is Recruiter at +6). White contest sweeps: 5% N, **15% H**, 9% VH, and the sweeper won 75-100%. That is the highest sweep rate at Hard. Screen playtest (Nov 1): the winner took Most white all three rounds in 3 of 7 games with White.
- Played turn: **round III**, 4 players, 20 placements. The probe says 51% of round III recruits are follower buys, so about 10 buys. The owner gets about +10 white in round III without placing for it. **Allowance**, the best white space, gives +4 for a minion. The +10 white contest in round III is about decided before anyone places on White.
- Bot-artifact check: it survives. The card needs no decisions, and the lift grows with bot strength.

### Recluse
[2 white + 2 any, worth 1] "Game End: +2 followers per rival with more members than you."
- **Verdict: KEEP.**
- Strategic: CL-H AUTO-PICK (18% chosen), CL-VH AUTO-PICK (12%). It pays a narrow cult, which supports the small-cult bar (winners with 5 or fewer members: 10-20%).
- Fun: experts 4.0 / 4.5. "+6 at game end for 4 because I stayed narrow; decided the game by itself" (g4 Ben). Cory loves this card.
- Fits: yes. It isn't really white-flavored, but it sits fine.
- Evidence: lift N +2, H +2, N3 −5, N2 −8.
- Bot-artifact check: none.

### Shopkeeper
[2 white + 2 any, worth 1] "On Recruit: +2 white. Round Start: +2 white."
- **Verdict: KEEP.** CL-H AUTO-PICK (41% chosen), CL-VH AUTO-PICK (52%). Lift N +3, H +1, N3 −4. Experts 2.0 / 3.0 (one rater): "pays for itself quietly". Fits: yes. Paper: a cheap engine that refunds its cost by round III.

### Heiresses
[4 white + 5 any, worth 2, counts as 2] "On Use, once per game: +1 white per member you have."
- **Verdict: KEEP.** Too few owners to read at any level (N 11, H 11, VH 5).
- Strategic: a round II or III burst, best with 10 or more members. CL-H MIXED (5% chosen), CL-VH AUTO-PICK (14% chosen).
- Fun: experts 5.0 / 3.5. "+11 white then Farewell for 9: the best two turns I had" (g4 Cal). Ava: "the card is fine, the Farewell combo isn't."
- Fits: yes.
- Bot-artifact check: its value is a use, so bots read it low (point 1). Price is the confound for the low pick rate, and the experts don't call it weak.

### Brokers
[2 white + 3 any, worth 3, counts as 3] "Whenever a White action gives you followers, +1 follower."
- **Verdict: KEEP.** CL-H AUTO-PICK (10%), CL-VH MIXED (15%). Lift N +1, H 0, N3 +6, N2 +12. Experts 4.0 / 4.0 (one rater): "great if you are the white player, nothing otherwise". Fits: yes.

### Exporters
[2 white + 5 any, worth 2, counts as 2] "Whenever you recruit a non-white member, +1 white."
- **Verdict: KEEP** (weak lead). If Cory wants it picked more, make it worth 3 before cutting its price.
- Strategic: rarely chosen. CL-H MIXED (2% chosen), CL-VH MIXED (2%). Paper: bought in round II it pays about 3 to 5 white over the game, for 7.
- Fun: no expert rated it. Paper only: a quiet trickle.
- Fits: partly. It pays White for not buying white members, which undercuts **Old Money** ("Game End: +1 follower per white member you have").
- Evidence: lift N +6 ±7 (51 owners). Too few at H and VH. No two bot levels on win share, so this is not a NUMBER.
- Bot-artifact check: Normal over-likes ongoing trickles. The lookahead passes it at 2%.

### Raiders
[2 white + 3 any, worth 2, counts as 2] "On Use, once per game: steal 4 followers from the leader. Pay them 2 white."
- **Verdict: KEEP.** Lift N 0, H −2, N3 +7. CL-H MIXED (7%), CL-VH MIXED (5%). Experts 3.3 / 3.3: "a 4-follower swing off the leader is good but slow" (g2 Ben). "Stealing 4 off the leader for 2 white was a nice swing" (g4 Dee, fun 5). Fits: yes, as White's catch-up. Bot-artifact check: its value is a use (point 1).

### Cashier
[2 white + 1 any, worth 1] "On Recruit: turn all your white into followers."
- **Verdict: NUMBER.** Make it worth 2 (counts as 2), which follows Cory's rule to add followers before cutting a price. The price is already near the floor.
- Strategic: on paper it rarely beats buying followers. Round III, 11 white and 1 other: pay 2 white + 1 other, then 9 white become 9 followers. That is 10 followers for 12 resources and a recruit, and it empties the white contest. Buying 10 followers costs 10 resources and keeps 2. It only wins with more than about 12 white. CL-H MIXED (7% chosen), CL-VH MIXED (4%).
- Fun: experts 2.0 / 2.0 (one rater): "weighed it as a Cash In on a recruit; Cash In itself did the job better."
- Fits: yes, but it is a smaller copy of Cash In. Cory has refused "a smaller copy of a stronger space" before.
- Evidence: lens **SKILL−** (N +1, **H −15 WEAK**); both choice logs pass it (7% and 4%); the expert agrees; paper agrees.
- Played turn: **round III**, Cal holds 11 white and 1 blue on his third placement and takes **Allowance** (+4 white, so 15 white). Recruit **Cashier** for 3: 12 white become 12 followers + 1 worth = 13, with no white left for the contest. Buying 10 followers instead: 10 followers, and he keeps 5 white toward the +10 contest. At worth 2, Cashier gives 14 against 10 + a likely contest: a real choice instead of a trap.
- Bot-artifact check: it survives. Stronger bots do worse with it, not better.

### Martyrs
[2 white + 2 any, worth 3, counts as 3] "Whenever this member leaves your cult, gain followers equal to its cost."
- **Verdict: KEEP.** Lift N −1, H +3, N3 −5. CL-H MIXED (14%), CL-VH MIXED (10%). Experts 3.7 / **4.3**: "the most fun card at the table" (g2 Ben). It paid him back when **Shake Down** took it. Fits: yes. The Farewell double payout (+4 cost +4 Martyrs −3 worth = +5) is its intended combo.

### Old Money
[1 white + 5 any, worth 1] "Game End: +1 follower per white member you have."
- **Verdict: KEEP.** Lift N 0, H +2, N3 +6, N2 +10. CL-H AUTO-PICK (12%), CL-VH MIXED (13%, 10% close). Fits: yes. No experts rated it.

### Hoarder
[4 white + 4 any, worth 1] "On Use, once per game: turn all your resources into white."
- **Verdict: NUMBER** (weak). Make it worth 2. Low confidence: likely a bot artifact.
- Strategic: on paper a strong round III setup for **Cash In** or the white contest. Round III with 6 white + 10 other: Hoarder makes 16 white, then Cash In gives 16 followers with no recruit spent, and your recruit is still free. Bots never buy it: CL-H DEAD (0% chosen), CL-VH 0% chosen, N 12/279 owned. In both expert games where it showed, it was buried or Scouted away before anyone built for it.
- Fun: paper only.
- Fits: yes. Cory called this effect "too strong" on Oct 23, before it went in at 8.
- Evidence: three bot levels never pick it (pick-rates file: 1 in 611). Point 1 applies, so most of that is the instrument.
- Played turn: **round III**, Dee has 5 white and 11 other, 2 minions left. **Hoarder** then **Cash In**: 16 followers +1 white, and she still buys 10 followers from the next turn's income. Without it, Cash In gives 5 and buying gives 10. So it adds +11 followers, for an 8-cost member bought earlier and worth 1. That is good value. The barrier is the 4 white up front in round II, when white also wins contests.
- Bot-artifact check: probably won't survive better bots. Re-read after the lookahead scores uses.

**White as a color.** It plays like its fantasy when someone commits: g4's Cal banked, sold a spent member and cashed 16 white in one placement, and every rater called that "the white payoff". **Money Changers** carries the color, too hard: it wins the white contest with no input (+17 to +20 at every level, Hard sweep rate 15%). That is the single change that would help most, because it also hides how the rest of White reads. The weakest link is **Splurge** (CL-H DEAD, experts 1.4), with **Cashier** next. Farewell and Cash In are doing their jobs.

---

## Green (echo)

Fantasy (design-core): "Whatever the best play was, I get it too." Brakes: Agents (Bait is 15-deck only).
Deck 10: 6 spaces, 10 members (Bait, Understudy, Ensemble and Impostors are 15-deck only), artifact Impressionist.

### Build Up (round I space)
"+3 green in round I, +4 in round II, +5 in round III."
- **Verdict: KEEP.** Cory kept it plain on Oct 31.
- Strategic: CL-H AUTO-PICK (11% chosen), CL-VH MIXED (9%). It's taken when the copy spaces are gone or green is needed for the contest.
- Fun: experts 2.8 / 2.4: "plain and fair", "the only real green refill when you've been robbed".
- Fits: yes, as the fuel space.
- Evidence: lift N −1, H 0, VH −6, N2 −8.
- Bot-artifact check: none.

### Echo (round I space)
"Copy the previous action. +1 green."
- **Verdict: KEEP.**
- Strategic: it reads the table every time. CL-H AUTO-PICK + MISJUDGED (24% chosen; Normal and the lookahead split 51%), CL-VH AUTO-PICK (21%). Probe 4.4 / 6.6 / 8.3.
- Fun: experts **4.4 / 3.5**. "Whether it's good depends entirely on who went before you" (g2 Cal). "The copy chains (Echo to Encore to Con Men, Echo to Poach) are the game's real engine and a bit too strong" (g3 Dee).
- Fits: yes (Cory: "absolutely perfect").
- Evidence: lift N 0, H +6, VH +3, N3 +3. Normal's numbers are suspect here (MISJUDGED), and the levels above it are mildly positive.
- Bot-artifact check: a mild SKILL+. Better bots will lean on it more, but nothing is out of line yet.

### Reprise (round I space)
"Copy an action with your minion. +1 green."
- **Verdict: KEEP.**
- Strategic: CL-H AUTO-PICK (15% chosen), CL-VH AUTO-PICK. It doubles your own best space. Probe 4.4 / 6.5 / 8.3: its round III average equals Echo's and Cover's.
- Fun: experts **4.4 / 3.5**. "Doubling my own Shake Down was my best round II turn" (g2 Ava). Repeating **Poach** and **Help Yourself** with **Fence** was called "too much" by 5 of 8 raters.
- Fits: yes.
- Evidence: lift N 0, H −2, VH +4, N2 −7. Bots see nothing.
- Played turn (the experts' Poach case): **round III**, Cal places on **Poach** ("Recruit a rival's member you choose. +1 magenta.") and takes Ava's HR (worth 4). Later he takes Reprise and Poaches again: Ben's Shift Crew (worth 4), +4 for Cal and −4 for Ben, about +8 relative to Ben. The best outer space open, **Allowance** R3, gives 4 white +3 followers, about 7. Reprise's average there is 8.3 by the probe, and this play is a bit above it. It is strong but not a runaway for the taker. What hurts is being on the wrong end of it twice. The steal-and-take spaces belong to Magenta's review, so I am not recommending a rule on copies from this color.
- Bot-artifact check: no bot level flags it.

### Encore (round II space)
"Copy the On Recruit of a rival's member. +1 green."
- **Verdict: REWORK.** Cory already backlogged it ("needs a rework or a better action, not a tweak"), and his Oct 31 rule lets the final balance run bring a backlogged rework in before 1.0. This run flags it. Direction: its value should come from the table without depending on whether a rival owns a steal card. Today it is weak on average and hugely swingy with one card.
- Strategic: it has a real decision only when a rival owns a good On Recruit. CL-H MIXED (7% chosen), CL-VH MIXED (8%). Probe R2 4.3 ± 1.8, R3 4.2 ± 2.0, dead 5-8%. That is the lowest round II average in Green, below **Cover** (7.0) and below White's **Farewell** (5.8) and **Estate Sale** (5.3).
- Fun: experts 4.5 / 3.4, with fun split by seat. "It punishes the person who bought the good card" (g3 Ben). "Its value is entirely what rivals' On Recruits are; Con Men and Fan Club made it huge" (g3 Dee).
- Fits: yes, as a copy.
- Evidence: the probe (weak average, dead 5-8%, spread ±2) and the experts (all 8 g2 and g3 raters named the Con Men chain) are two independent instruments. Lift N 0, H +3, VH +2, N2 +7.
- Played turn (g2, round II, as played): Ava recruits **Con Men** (7 any, worth 2, counts as 2; "On Recruit: steal 5 resources") and steals 5 green from Dee. Dee takes **Encore**, copies Con Men and steals 5 back, then +1 green. Later Ben takes Encore on the same Con Men (steals 5 from Dee). Cal takes **Echo** right after, copies Ben's Encore and chooses Con Men again (steals 5 white from Dee). In round III Ava's **Greatest Hits** fires it a fifth time. That is one 7-cost buy and 25 resources stolen across the game. For each taker the Encore turn was worth 5 + 1 green, about 6, against **Cover** at 7.0 on average. So the taker didn't gain much more than the next-best space. The victim lost 15 in one round, and Agents can't stop it (below). With no rival steal card, Encore gives 4.2 or nothing.
- Bot-artifact check: it survives. Bots value Encore at its average, and the swing comes from the one card experts saw a table chase.

### Cover (round II space)
"Copy an action with no minion on it. +1 green."
- **Verdict: KEEP.**
- Strategic: CL-H AUTO-PICK (13% chosen), CL-VH AUTO-PICK (14%). It reaches spaces nobody has taken yet. Probe R2 7.0, R3 8.0.
- Fun: experts 3.5 / 3.3. "My favourite space: copying Tryout, Melting Pot or Shake Down from Cover was a real choice every time" (g3 Ben, 5/4).
- Fits: yes.
- Evidence: lift N −1, H +2, VH −2, N2 −12 (only 2 spheres per side at 2p, so fewer targets).
- Bot-artifact check: none.

### Greatest Hits (round III space)
"Copy the On Recruit of each of your members, in any order. +1 green."
- **Verdict: KEEP for now, and re-read after Encore changes.** Its outliers are the same steal On Recruits. Without them its average (probe 8.5) is fine for a center space.
- Strategic: CL-H **DEAD** (3% chosen, 61% thin), CL-VH MIXED (2%). It is all or nothing on your members: probe R3 8.5 ± 6.3, dead 14%.
- Fun: experts 3.6 / 2.8. "Con Men plus Accomplice for an 8-steal was the play of the game, maybe too much" (g2 Ava, 5/5). "Only good if you hold On Recruit members; mine had none" (g3 Dee, 2/2).
- Fits: yes.
- Evidence: lift N +22 STRONG, H +22 STRONG, N3 +26, VH +2. The choice logs say the bots seldom want it. The lift is the leader taking the last center space (point 2). Cory changed this card on Nov 1, so this is its first read.
- Bot-artifact check: the lift probably doesn't survive, because it is mostly who takes it. The 14% dead rate will survive.

### Impressionist (Green's artifact)
"Whenever you copy an action, +1 of its color."
- **Verdict: NUMBER.** It needs about +4 to +6 more over a game. The "any player copies" test read −4, so firing on everyone's copies wasn't enough. Try +2 per copy, or +1 plus +1 green (my guess).
- Strategic: no decision. It is a trickle on copies you were making anyway. The owner copies 3 or 4 times a game, so +3 or +4 resources against Money Changers' ~12.
- Fun: experts **1.8 / 1.8**: "the artifact I'd least want" (3 of 5). "Steady +1 on every copy… I'd pick it again" (g3 Ben, 3/3).
- Fits: yes.
- Evidence: lift **N −14, H −12**, N3 −7, N2 −18, VH +6 (16 owners, ±12). Two levels and two table sizes point weak. It is the worst artifact at Normal and Hard.
- Played turn: **round II**, 4 players. Ben picked Impressionist at setup. He takes **Echo** after Harvest (+4 in colors he chooses), and Impressionist gives +1 yellow. Over the game that is about 4 extra resources. Ava picked **Money Changers** at the same setup and gets about 12 white. Even **Pocket Watch** (+4 lift) beats it. The setup pick is a real choice only if the artifacts are within a few points of each other.
- Bot-artifact check: it survives. The artifact needs no decisions, and experts agree.

### Busker
[1 green + 3 any, worth 1] "On Recruit: +2 green. Round Start: +2 green."
- **Verdict: KEEP.** Lift N +1, H +8, N3 +11 STRONG, N2 +7. CL-H AUTO-PICK (30%), CL-VH AUTO-PICK (33%). Experts 3.5 / 3.5: "exactly the cheap engine I like" (g3 Ben). Fits: yes.

### Muse
[1 green + 3 any, worth 1] "Whenever a rival copies an action, +1 green."
- **Verdict: KEEP** (a weak lead). Watch the overlap if Impressionist moves to "any player copies".
- Strategic: CL-H MIXED (5% chosen), CL-VH MIXED (6%). Paper: rivals copy about 6 times a game, so bought in round I it brings about 6 green, the same as **Busker**. Bought later it brings about half.
- Fun: experts 2.5 / 2.0: "too slow to justify emptying my pile" (g3 Ben).
- Fits: yes (Green reads the table).
- Evidence: lift N −5 ±3, H −1 ±8, N3 −1. Only one level is significant, so this is not a NUMBER.
- Bot-artifact check: Normal is the only negative level.

### Wallflower
[6 green + 4 any, worth 1] "Whenever you copy an action, double the resources it gives you."
- **Verdict: NUMBER.** Lower the green part (my guess: 4 green + 4 any, 8) or make it worth 2.
- Strategic: never bought. CL-H DEAD (0% chosen), CL-VH MIXED (1% chosen). Owners: N 13/294, H 1/46, VH 0/14. In both expert games where it showed, it was buried for blue.
- Fun: paper only.
- Fits: yes. It is the deep-Green payoff.
- Evidence: three bot levels never buy it, and the pick-rates file shows 0 of 444. That is price, not valuation. Two lookahead levels pass it.
- Played turn: **round II**, Dee has 6 green and 5 other. Wallflower takes all 6 green and 4 other. Then: **Echo** on Harvest gives +4 and doubles to +8. **Reprise** on Build Up gives +4 and doubles to +8. In round III, three copies at about +5 each double to +15. That is about +20 over the game for 10. The alternative buy, **Fan Club** (2 green + 4 any, worth 3), gives 3 worth and 3 to 6 green now, and leaves 4 green for the contest. The 6 green costs her the green contest (+6 in round II), so the card loses before it fires. At 4 green the contest cost drops and the card competes.
- Bot-artifact check: it should survive. The lookahead plays copies, and it still passes the card at 6 green.

### Fan Club
[2 green + 4 any, worth 3, counts as 3] "On Recruit: +1 green per Green space with anyone's minion."
- **Verdict: NUMBER** (low priority). Price 7 (2 green + 5 any).
- Strategic: CL-H AUTO-PICK + MISJUDGED (31% chosen; Normal over-likes it 31 to 13), CL-VH AUTO-PICK (40%, 15% close). In round III with 4 Green spaces taken it is 3 worth plus 4 to 6 green for 6. Encore can take that refund too.
- Fun: experts 3.3 / 3.3: "a body, not a green idea" (g2 Cal).
- Fits: mostly.
- Evidence: lift N +4 ±3, H +10 ±7, N3 **+13 STRONG**, N2 +9. Every level points up.
- Played turn: **round III**, 4 players, 4 of 6 Green spaces taken. Ben has 7 resources. **Fan Club** gives 3 worth + 4 green (refunding most of its 6). **Buying 5 followers** gives 5 and leaves 2. With Fan Club he is +2 ahead and still holds green for the contest. At 7 it is about even with 5 followers, which is where a body like this should sit.
- Bot-artifact check: positive at every level, so it should survive.

### Roadie
[1 green + 2 any, worth 1] "On Recruit: +1 green per green member you have. Round Start: +1 green per green member you have."
- **Verdict: KEEP.** Lift N 0, H +1, N3 +4, N2 +9. CL-H AUTO-PICK (44% chosen, 11% close: the most-contested Green buy), CL-VH AUTO-PICK. Experts 2.7 / 2.7. Fits: yes. **Dabblers** count as green for it.

### Stunt Double
[2 green + 3 any, worth 1] "On Recruit: copy the action you just took."
- **Verdict: KEEP.** Lift N +1, H +7, N3 −2, N2 −9. CL-H AUTO-PICK (59%), CL-VH AUTO-PICK (59%). Experts 3.5 / **4.0**: "copying Walk-In for a free Triplets was the highlight of my night" (g3 Ben). Fits: yes.

### Tribute Band
[8 green + 4 any, worth 3, counts as 3] "On Use, once per game: choose a rival. Do every action they have a minion on this round."
- **Verdict: KEEP.** There are too few owners to read: N 28 (under 30), H 4, VH 3.
- Strategic: in round III, late, choose the rival with 4 or 5 minions placed and do 4 or 5 actions. At about 6 each that's around 25. It is the biggest burst in Green. CL-H MIXED + MISJUDGED (5% chosen), CL-VH AUTO-PICK (12% chosen). The 8 green is the gate.
- Fun: no rater owned it. Paper only.
- Fits: yes.
- Evidence: N +30 ±9 is a lead only (28 owners).
- Bot-artifact check: its value is a use (point 1), so every bot number undervalues it. Its ceiling on paper is very high. Watch it rather than lowering the price.

### Doppelganger
[2 green + 3 any, worth 1] "On Recruit: this member becomes a copy of another of your members."
- **Verdict: KEEP.** Lift N +6 ±3, H +7 ±7, N3 +6, N2 −3. CL-H AUTO-PICK (21%), CL-VH AUTO-PICK (22%). No expert rated it. Cory loves it. Fits: yes. Note: Doppelganger as **Con Men** does Con Men's On Recruit again (rulebook ruling). That's one more repeat in the same chain, but it is your own card, so it's fine.

### Agents
[1 green + 2 any, worth 2, counts as 2] "Rivals can't copy your actions."
- **Verdict: KEEP** as priced. Flag one thing: it doesn't cover what the table asked it to.
- Strategic: CL-H MIXED (14%), CL-VH MIXED (17%). It is bought as a 3-for-2 body.
- Fun: experts 2.5 / 2.0: "with this much copying it should matter more than it did" (g2 Dee).
- Fits: yes. It is Green's printed brake.
- Evidence: lift N 0, H +6, N3 −1, N2 −4.
- Finding (engine read, echo.js rivalRecruits): Agents blocks **Echo** and **Tribute Band** on your actions. It doesn't block **Encore** or **Greatest Hits**, because those copy a member's On Recruit, not an action. The loudest chain the experts named goes straight past the only brake in the deck. The Encore rework makes this go away. Otherwise it's a wording-and-reach call for Cory.

### Chronicler
[1 green + 4 any, worth 1] "Game End: +1 follower per green member you have."
- **Verdict: KEEP.** The lens tags it DOMINANT, but the levels disagree in sign (N +7 STRONG, **H −6**). N3 +17 STRONG, N2 +3. CL-H AUTO-PICK (17%), CL-VH AUTO-PICK (17%, 10% close). It is a go-deep scorer, and Cory likes scorers. Not two levels in the same direction. Fits: yes.

**Green as a color.** It plays exactly like its fantasy, and the experts' META notes say so loudly: "the copy chains do more than any printed space". **Echo** and **Reprise** carry it, at experts' 4.4 strategic and 8.3 per round III placement. The weakest link is **Encore**: 4.2 on average, dead 5-8%, and a 5-steal from a rival's Con Men when it hits. Agents can't stop it. Impressionist is the weakest artifact in the game (−14/−12). Green's main-color lift slides with bot strength (N +4, H +6, **VH −15**, a lead). The single change that would help most is the Encore rework Cory already wants. It takes out the theft repeats that every g2 and g3 expert named, and lowers Greatest Hits' ceiling with it.

---

## Grey members (benders)

No color, so the question is whether each one earns its shop slot. Deck 10 holds 10 greys. Big Spender, Launderers, Cheerleader, Coach and Tiebreaker are 15-deck only, so they have no data in this round.

### Party Crasher
[4 any, worth 1] "On Use, once per game: your next minion can be placed on a space a rival already took."
- **Verdict: NUMBER.** Price 6, which is leaning pricier. A center-space limit is the alternative, but that's a restriction Cory hasn't asked for, so price comes first.
- Strategic: it creates a real last-turn read. Lens SLEEPER (N +2, **H +13 STRONG**). VH too few (19 owners). CL-H MIXED buy (7%, R1 1%), CL-VH MIXED (7%).
- Fun: experts 3.7 / 3.3, and all of g4's raters gave 4-5 fun. "Joining a center space someone else already took (Largesse) in the last turn of the game is a huge, satisfying swing for 4" (g4 Ben). The victim said "it needs a limit on center spaces" (g4 Dee, 5/5, fit no). Cory loved Squatter, its old name ("really great").
- Evidence: Hard bots (+13 STRONG) and experts (all 4 in g4 named the center join; Ava and Ben put it in their first-change META) are two instruments in the same direction. Normal +2 also points up.
- Played turn (g4, round III, last placements): Dee took **Largesse** ("Rivals gain up to 10 silver, split as you choose. +1 follower for each."). Ben recruits Party Crasher for 4, uses it, and joins Largesse: about +10 followers with no recruit spent, and he swings Dee's silver contest. The best open space at that point was **Farewell** on a cheap member (about +4) or **Exchange** R3 (4.2). That's a gain of about +6 for 4 resources, plus a contest swing of up to 10. At 6 it is still the best last-turn buy when a center space is open, and it costs a round III recruit.
- Bot-artifact check: it survives and grows with skill (SKILL+). Its use isn't even scored by the lookahead (point 1), so the bots undervalue it.

### Line Cutters
[2 any, worth 3, counts as 3] "You go first every round."
- **Verdict: REWORK** (small). Direction: let the owner choose each round whether to go first or keep their seat. Today the text forces it, and forcing it costs a leader the last placement in round III.
- Strategic: its decision is fake. Bots buy it on rate (CL-H AUTO-PICK 31%; CL-VH REAL CHOICE 24%), and owners lose: lens **TRAP** (N −5 WEAK, **H −10 WEAK**, VH 0), N3 −7 WEAK, N2 −1.
- Fun: experts 3.7 / 3.7. "3 followers for 2 any is the best rate in the game" (g2 Ava). "Quietly strong in this round: first pick on round II" (g4 Dee). They liked the rate and round II.
- Fits: unsure (1/2/4). As a grey it is fine.
- Evidence: Normal and Hard both read WEAK (−5, −10), N3 −7 WEAK, and the experts' META notes back the mechanism: "whoever places last takes all four +10 contests" (g1 Ava, Cal, Dee). These are independent instruments, and price can't be the cause, since it's already the floor at 2 for 3.
- Played turn: **round III**, 4 players, 5 minions each, so the snake ends on seat 4. Ava leads by 8 and holds Line Cutters. Without it she'd be seat 4 (most followers go last) and place the game's last minion. That's the seat the experts say takes the contests: a last **Exchange** or Splurge-type top-up that flips a +10. With Line Cutters she's seat 1 and the trailing seat closes the game. In round II (4 minions) seat 1 places both first and last, which is why Dee loved it there. The card is great in round II and costs a leader in round III. A table can't see that when buying, and the owner can't opt out.
- Bot-artifact check: partly. VH reads 0, so a better player loses less by timing buys. Still, nobody can avoid the round III cost while they lead.

### Con Men
[7 any, worth 2, counts as 2] "Counts as 2 members. On Recruit: steal 5 resources."
- **Verdict: KEEP** the card. The fix goes on **Encore** (above). If Encore stays, Con Men is the card to change: make the steal something copies can't reach. That's Cory's call, since he moved it back to On Recruit on Oct 31.
- Strategic: the most-taken member. CL-H AUTO-PICK (**73% chosen** when affordable), CL-VH AUTO-PICK (**76%**), the top pick rate of any member at both levels.
- Fun: experts **4.7** / 3.0, fits 2/4/4. "The loudest card at the table" (g2 Cal). "One free Walk-In flip turned into three steal-5s by copying" (g3 Ava). The g4 view without copiers: "5 can't flip a 14 lead, so it lost to a straight buy of 10" (Ben, 3/3).
- Evidence: lift N +3, H +2, **VH +13**, N2 +5. On its own it's a good, not broken, buy. The table-wide effect comes through copies (played turn under Encore: 5 fires, 25 resources).
- Bot-artifact check: the lift grows with skill (SKILL+).

### HR
[10 any, worth 4, counts as 4] "Counts as 4 members. Game End: +2 followers per color you have 3 members of."
- **Verdict: KEEP.** Earlier rounds showed price doesn't move its lift (12 to 14 read flat), so the lift is who can afford it, not the card.
- Strategic: in round II it's a fine 10 for 4 + 2 to 4. In round III buying 10 followers beats it on paper (10 against 6 to 8). CL-H AUTO-PICK (16%), CL-VH MIXED (20%).
- Fun: experts **2.5 / 2.3**: "dead card" (g4 Cal, 1/1); "the juiciest swap target" (g1 Ava, 4/4).
- Evidence: lift N +6 STRONG, H +4, VH +11, N3 +11 STRONG, N2 +7. It's positive everywhere, and Cory called it "mostly win-more".
- Earns its slot? As a body and a swap target, yes. As an idea, it is the least fun grey that gets bought.

### Dabblers
[3 any, worth 2, counts as 2] "Counts as 2 wild members."
- **Verdict: KEEP.** Lift N +2, H −4, VH −1. CL-H AUTO-PICK (20%), CL-VH REAL CHOICE (12%, 10% close). Experts 2.0 / 2.1: "the wild member text never came up". It earns its slot as a cheap body that quietly feeds **Roadie**, **Chronicler**, **Old Money** and **HR**. Experts didn't notice that, which is a wording problem, not a balance one.

### Alchemists
[5 any, worth 3, counts as 3] "All your resources count as any when you recruit a member."
- **Verdict: KEEP** for 1.0, and a rework candidate after. The body earns the slot and the ability doesn't.
- Strategic: CL-H MIXED (16%), CL-VH **REAL CHOICE** (14% chosen, 16% close). On paper the ability only matters for the few big colored parts (**Tribute Band** 8 green, **Wallflower** 6 green, **Heiresses** and **Hoarder** 4 white). Most colored parts are 1 or 2.
- Fun: experts **2.1 / 2.0**: "its ability never mattered" (g4 Cal); "a 5-cost 3-follower body is a trap" in round III (g1 Ben).
- Evidence: lift N −2, H −2, VH −11, N2 −2. It's mildly negative everywhere, but the levels are within noise.

### Extra Hand
[9 any, worth 1] "On Use, once per game: +1 minion this round."
- **Verdict: KEEP.** Bots can't read it.
- Strategic: a round III extra placement plus an extra recruit, up to about 15 for 9. Never bought by bots: CL-H DEAD (1% chosen), CL-VH 4%, N 21/567 owned.
- Fun: experts **4.3 / 4.0**: "a minion that lands after the last seat in round III won me the game" (g3 Dee, 5/5).
- Evidence: the bots' numbers are point 1. The experts are the reliable read, and they like it at 9.
- Bot-artifact check: yes. Its value is a timed use, and Normal misjudges timing.

### Scouts
[3 any, worth 2, counts as 2] "On Use, once per round: send any shop members to the bottom of the pile, then refill."
- **Verdict: KEEP** for now, and re-read after the known bug is fixed (Scouts doesn't trigger **Bargain Bin** or **Patroness**).
- Strategic: lift N **−5 WEAK**, H −4, VH −10, N3 −1, N2 +2. CL-H MIXED buy (14%), CL-VH MIXED (9%). Its use reads DEAD (point 1).
- Fun: experts 2.8 / 2.5, fits 1 yes / 3 no: "its shop wipe never came up" (g4 Ben); "burying Shift Crew from Ava was satisfying, but the refill brought her Line Cutters anyway" (g1 Cal).
- Evidence: three bot levels lean weak, but the bots fire the use by a fixed rule ("3+ unaffordable cards from round II"), which also deals a fresh row to the next player. Part of the weakness is how the bots use it.
- Earns its slot? Today mostly as a 3-for-2 body. Cory likes it.

### Anarchist
[7 any, worth 1] "On Use, once per round: swap any 2 members, in any cult or the shop, that cost within 2 of each other."
- **Verdict: KEEP.** Too few owners at H (22) and VH (13).
- Strategic: on paper a strong engine. Swap your spent member for a rival's better one of similar cost, every round. Or use it to put **Old Maid** from the shop into a rival's cult. CL-H DEAD (3% chosen), CL-VH MIXED (7%).
- Fun: experts 3.5 / 3.0: "strong idea, but a flat buy of 10 beat it on the last turn" (g1 Dee).
- Evidence: lift N −1, H −14 (22 owners, too few). Point 1 applies.
- Bot-artifact check: likely an artifact.

### Old Maid
[5 any, worth 1] "Whenever this member joins your cult, −5 followers."
- **Verdict: KEEP**, and re-read after the Promote/Demote fix.
- Strategic: nobody should buy it (CL-H and CL-VH DEAD, 0 of 3,336 picked). It is ammunition for **Anarchist**, and a shop slot the table works around. Owners at 2p read −33: they got it through swaps.
- Fun: experts 4.0 / 3.0. "Used as a weapon through Demote it's a −5 on a rival; needs a look" (g3 Ava, 5/5); "a feel-bad, not a decision" (g3 Dee, 3/1).
- Evidence: the expert games ran with the Promote/Demote bug (a rival's member allowed as the "first" side), which made Old Maid easy to push onto rivals. Once that's fixed, **Demote** ("Swap a member with a shop or rival member costing up to 2 less") makes you take the −5 first, so only Anarchist can push it for free.
- Earns its slot? Only as Anarchist's ammunition and a shop blocker. Re-read once the Red fix is live.

**Greys as a set.** The greys are the deck's rule-benders, and the ones that bend a rule players feel are the loved ones: **Party Crasher**, **Extra Hand**, **Line Cutters** (all 3.7 to 4.3 with experts). **Con Men** carries the most weight on the table, almost all of it through Green's copies. The weakest links are **Alchemists** (an ability that never fires) and **HR** (fun 2.3), with **Line Cutters** the only one whose text works against its owner. The single change that would help most is letting the Line Cutters owner choose to go first. It turns a trap the bots fall into at two levels into the decision the experts already think it is.

---

## Not reviewed (15-deck only, no data this round)
Undertaker (White); Bait, Understudy, Ensemble, Impostors (Green); Big Spender, Launderers, Cheerleader, Coach, Tiebreaker (grey).
