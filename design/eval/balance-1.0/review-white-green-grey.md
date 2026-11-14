# Review: White, Green and the grey members (balance-1.0, deck 10)

Reviewer: Claude (color reviewer brief). Final re-check, Nov 1 about 12:50pm Eastern, against design/eval/balance-1.0/final/ as refreshed at 12:41pm and all 12 expert games. Live cards read from the engine on claude/gifted-newton-3lcy3i.

Short names for instruments:
- **N** = Normal bots 4 players (389 games; red tables played on the old swap build are left out until the red re-runs land), **N3 / N2** = Normal 3 and 2 players.
- **H** = Hard 4 players (220 games, same exclusion), **VH** = Very Hard 4 players (249 games).
- **CL-H / CL-VH** = choice log tag at Hard / Very Hard (230 and 317 games).
- **experts** = 12 expert AI games, 42 players; "strategic / fun, n raters" from expert/feel.md.
- **probe** = feel probe 4 players (gain per placement). Only the interim probe is in this folder, so probe numbers are interim.
- Lift is in points of win share after member count. More red games land at 1:00pm; my cards should move a few points at most.

Builds behind the numbers:
- Every bot game ran on 291bfb1f or later. That build already had the any-player artifact texts: **Impressionist** "Whenever any player copies an action, +2 of its color.", **Fence** "Whenever any player steals, +1 magenta.", **Caterer** "Whenever a player is gifted silver, +2 silver." Artifact lifts are zero-sum (each seat drafts one), so when Fence and Impressionist got stronger, Money Changers' lift fell without its card changing.
- Expert games g1 to g10 used the old Impressionist ("Whenever you copy an action, +1 of its color."). Only g11 and g12 used the current text.
- Three payouts changed after the runs started, so their bot numbers come from the old payout: **Stash** paid +3/+4/+5 magenta instead of the printed +2/+3/+4, **Last Call** paid phantom Gossip and Pocket Watch on repeat skips, and **Recruiter** did not yet pay when a rival's member went to the shop. None of these is my card. Where an entry below touches one, it says so.

## Changed since interim

1. **Money Changers**: still NUMBER, but low priority instead of high. Its bot lift fell from +17 / +18 / +20 to N +3, H +5, VH +9 once Fence and Impressionist changed. It is no longer the biggest artifact edge (Impressionist N +11, Fence VH +11). Experts are split by game.
2. **Impressionist**: NUMBER to **KEEP**. Cory's +2 any-player text shipped and reads N +11, H +4, VH +2. The thing to watch is small tables (N3 +24, N2 +17).
3. **Cash In**: KEEP to **REWORK**. Ten more expert raters (g6, g7, g12) and CL-H DEAD say the space is either dead or a free payout. It depends on whether anyone else holds white, not on what the taker chooses.
4. **Greatest Hits**: KEEP to **REWORK**, together with Encore. VH now reads +14 STRONG and H +11. Experts saw it win g9 by 41 and give all four g11 players nothing.
5. **Tribute Band**: KEEP to **REWORK**. 4 of 5 expert raters call it too big for one card (g8, g9). The bots now have too few owners to read it at any level.
6. **Party Crasher**: NUMBER to **REWORK**. The Hard +13 STRONG that backed a price change is gone (now +5). The experts' case grew: in five games a last-turn join decided a contest or the game, including +30 in g10.
7. **Heiresses**: KEEP to **REWORK** (low). In g6 and g12 it decided white in one action and then paid again on Estate Sale. 2 of 6 raters say it doesn't fit White.
8. **Line Cutters**: REWORK to **KEEP**. Its WEAK reads are gone (N −2, H −4, VH −2, none significant) and the lens no longer calls it a TRAP. Experts call it underpriced.
9. **Fan Club**: NUMBER to **KEEP**. The N3 +13 STRONG is gone. Every level is now +4 to +5 inside the error.
10. **Cashier**: still NUMBER, but now a lead only. Hard reads −13 WEAK, while Normal reads 0 and VH +6.
11. **Con Men**: KEEP stands, but the "grows with skill" claim is withdrawn (VH +13 to +5).
12. **Old Maid**: Cory kept Promote and Demote as they were (Nov 1, 12:45pm), so there is no fix to re-read after. KEEP stands, with a swing note from g10.

## Three things about the instruments, before any card

1. **Member uses are not scored by the lookahead.** Every "Member uses" row is DEAD at 0% contender. Normal's shortcut fires uses before the lookahead (bug log row 12), and the bots do use them. So DEAD on a use is not a finding. Members whose whole value is the use (Extra Hand, Hoarder, Anarchist, Tribute Band, Raiders, Scouts, Party Crasher, Heiresses) are read low by every bot level.
2. **A space left open to the end of round III goes to the leader.** From round II the fewest followers place first, so with 5 minions the snake ends on the leader. Spaces taken mostly "thin" (as the last pick) gain lift from who takes them. That covers **Greatest Hits** (44% thin at H, 42% at VH) and **Cash In** (39% / 31% thin).
3. **The probe counts only what a placement gives right away.** Follower bonuses that come when you recruit (Allowance, Splurge) are missing from it.

---

## White (trading)

Fantasy (design-core): "I bank white and cash it in past the limit." Contest: most white held at round end. Deck 10: 6 spaces, 10 members (Undertaker is 15-deck only), artifact Money Changers. White main-color lift: N +5, H +5, VH +6, steady at every level.

### Allowance (round I space)
"+2 white in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III)."
- **Verdict: KEEP.**
- Strategic: the default white space on a turn you recruit. CL-H MIXED (9% chosen), CL-VH MIXED (10% chosen, 4% close). You take it when you'll recruit a member this turn and skip it when you're buying followers.
- Fun: experts 3.2 / 3.3 (18). "Solid every round and the member bonus nudges you to buy, but it was rarely a hard call" (g12 Ben). "My bread and butter" (g7 Cal).
- Fits: yes (18/0/0).
- Evidence: lift N −1, H −3, VH +1, N3 +3, N2 +5. Flat everywhere.
- Bot-artifact check: flat at every level, so better bots would not change it.

### Splurge (round I space)
"This turn, if you recruit a member, +1 follower for every 2 resources you pay for it. +1 white."
- **Verdict: NUMBER** (unchanged). Its rate should grow by round like its siblings'. My guess at the number: per 2 in round I, per 1 from round II.
- Strategic: Allowance beats it on almost every turn. CL-H **DEAD** (3% chosen, 57% thin), CL-VH **FILLER** (3% chosen, 58% thin).
- Fun: experts **1.6 / 1.9** (18), the lowest White space. "My round I last pick by default and I never wanted it" (g7 Ben). "+1 per 2 paid is small next to Allowance" (g12 Ben). The one good word is g7 Cal: "made Shift Crew 6 followers for 4".
- Fits: yes (18/0/0). Paying big for a member and getting followers back is White's "past the limit" idea.
- Evidence: the choice logs at H and VH agree, and the experts agree. Lift N 0, H −2, VH 0.
- Played turn: **round II**, 4 players. Ben has 9 resources and buys **Fan Club** (2 green + 4 any, 6). Splurge gives +3 followers +1 white, so 4. **Allowance** on the same turn gives +3 white and +2 followers, so 5. At per 1 from round II, the same buy on Splurge gives +6 +1 = 7. In **round III**, buying **HR** (10 any) on Splurge would give 4 worth + 10 + 1 white = 15. Buying 10 followers on Allowance gives 10 + 4 white = 14. So a pricey member would compete with buying 10 followers. Experts named the opposite as the problem: HR "never beat buying 10 followers outright" (g10, g12; five raters).
- Bot-artifact check: it survives. Both lookahead levels pass it, and so do the experts.

### Exchange (round I space)
"Turn up to 1 resource (2 in round II, 3 in round III) into 2 followers each. +1 white."
- **Verdict: KEEP.**
- Strategic: a last-minion converter. CL-H FILLER (3% chosen, 50% thin), CL-VH MIXED. Clearing odd leftovers is its job.
- Fun: experts 3.2 / 3.3 (18). "The best follower rate on the wheel, 2 for 1, and I took it every round I could" (g12 Ava). "Capped so low it's mostly a filler space" (g12 Ben).
- Fits: yes.
- Evidence: lift N +1, H +3, VH +3. Probe (interim) 2.0 / 3.1 / 4.2.
- Bot-artifact check: mildly positive at every level, so it survives.

### Farewell (round II space)
"Cast out one of your members to the bottom of the pile, gain followers equal to its cost. +1 white."
- **Verdict: KEEP.** The complaint is about full cost on a spent once-per-game or On Recruit member. That is a feel note for Cory (bug log row 24, "as built"), and the cleaner lever is on Heiresses (below).
- Strategic: a real sacrifice that rewards planning. CL-H MIXED (6% chosen), CL-VH MIXED (6%).
- Fun: experts 3.7 / 3.5 (18), split by table. g7 loved it: "casting out a spent Con Men for +7 was the best feeling play of round II" (Ben, 4/5). All three g12 players said "maybe too generous" (Dyer cast out for 7). In g6 nobody wanted to give up members (1/1, 2/1).
- Fits: 16 yes / 1 no / 1 unsure.
- Evidence: lift N +2, H −5, VH −2 at 4 players, N3 +7, N2 +15. Bots see nothing strong at 4 players. Experts see a strong two-step when a spent member is around.
- Bot-artifact check: Normal 2p and 3p like it, and the 4-player levels don't. No direction to act on.

### Estate Sale (round II space)
"Cast out one of your members to the bottom of the pile, gain white equal to its cost. +1 white."
- **Verdict: KEEP.**
- Strategic: CL-H AUTO-PICK (12% chosen), CL-VH MIXED (10%). It pivots a member into the white contest or into Cash In fuel.
- Fun: experts **3.8 / 3.3** (18), the best-rated White space. "Casting out a spent Extra Hand for 10 white is the best contest tool I found" (g7 Cal, 5/5). In g12 all three players called the Heiresses double payout a loophole (see Heiresses).
- Fits: yes (18/0/0). This is Cory's own pick.
- Evidence: lift N −1, H −4, VH −4, N3 −7: mildly negative in bots, and liked by experts.
- Bot-artifact check: bots don't plan the sell, so they under-read it. No finding.

### Cash In (round III space)
"Turn all your white into followers. +1 white."
- **Verdict: REWORK** (changed from KEEP). Cory already has Cash In on his White revisit list (Oct 31) and said not to single it out. This entry is the general pass. Direction: emptying your white should be a real trade against the contest, not dead when white is contested and free when it isn't. For example, a rate above 1 to 1, or a cap so part of the pile stays. Cory designs the card.
- Strategic: there is no choice in it. When a rival holds white, emptying your pile hands them the +10. When nobody does, the +1 white it gives back keeps the contest anyway. g12 Ben: "feels like a loophole". CL-H **DEAD** (2% chosen), CL-VH MIXED (3%).
- Fun: experts **2.7 / 2.6** (18). In g6 and g7 all seven raters gave it 2/2 or lower: "it kills your own white lead, so it only works for whoever isn't fighting white" (g7 Cal), "it ended as Ava's filler" (g6 Cal). In g12 it was Ben's payday (4/5), and the other two called it "mostly rewards whoever already won white". In g4 it was Cal's best turn (16 white into 17 followers).
- Fits: yes. It is White's signature, which is why it's worth reworking rather than leaving.
- Evidence: experts (g6, g7 dead; g4, g12 a free win) and the Hard choice log (DEAD) are two independent instruments. Lift N +5, H +11, VH −1, mostly from who takes it (point 2).
- Played turn: **round III**, 4 players, Cal's last placement. Cal holds 9 white and Ava holds 6. **Cash In**: 9 followers, Cal keeps 1 white, and Ava takes the +10 contest, so Cal is about −1 against Ava. **Exchange** instead: 3 white become 6 followers and Cal keeps 7 white, which wins the +10, so +16. Now change one fact: Ava holds 0 white (g12). Cash In gives 9 followers and the +1 white still wins the +10, so +19 against Exchange's +16. The space flips from the worst pick to the best on one fact the taker doesn't control.
- Bot-artifact check: partly a bot artifact (bots don't bank white for it). The dead-or-free shape is on paper and in four expert games, so it survives better play.

### Money Changers (White's artifact)
"Whenever any player buys followers, +1 white."
- **Verdict: NUMBER, low priority** (was high). Same direction as before: fire on rivals' buys only, or only on buys of 5 or more. It is no longer the first thing to fix.
- Strategic: there is no decision after you draft it. It pays on everyone's buys. Its owner's 1-follower buys with white cost nothing ("a 1-follower buy costs me nothing", g12 Ben).
- Fun: experts 4.1 / 3.6 (8), split by game. All three g12 players gave it 5 strategic ("the white contest is decided at the draft", Ava). g6 and g7 said "good but never decisive" (Ben 3/4) and "it never won me the white contest" (Dee 3/4).
- Fits: 7 yes / 1 unsure.
- Evidence: lift N +3, H +5, VH +9, N3 −7, N2 −16. Hard and Very Hard point the same way, but neither is STRONG. White sweeps by its owner: N 5%, H 10%, **VH 15%** (16 of 106), and the sweeper won all 7 decided games. The old +17 to +20 came before Fence and Impressionist took a share.
- Played turn: **round III**, 4 players, 20 placements. About half of round III recruits are follower buys (interim probe), so about 10 buys. The owner gets about +10 white without placing for it. **Allowance**, the best white space, gives +4 for a minion. With rivals' buys only, that drops to about +7, and the owner's own 1-follower buys stop refunding themselves.
- Bot-artifact check: the VH reading is the highest of the three. It needs no decisions, so better play won't shrink it.

### Recluse
[2 white + 2 any, worth 1] "Game End: +2 followers per rival with more members than you."
- **Verdict: KEEP.** Lift N +1, H +2, VH 0. CL-H MIXED (16%), CL-VH MIXED (13%). Experts **4.0 / 4.3** (3): "+4 for staying lean was the right pick for a light-member plan, and it bent every later member choice" (g7 Dee). Fits: yes. It pays a narrow cult, which supports the small-cult bar (winners with 5 or fewer members: N 14%, VH 15%, bar 20%). Cory loves it.

### Shopkeeper
[2 white + 2 any, worth 1] "On Recruit: +2 white. Round Start: +2 white."
- **Verdict: KEEP.** CL-H AUTO-PICK (53%), CL-VH AUTO-PICK (31%). Lift N +1, H +5, VH +1, N2 +21. Experts 3.0 / 3.5 (2): "the backbone of my white lead" (g12 Ben). Fits: yes.

### Heiresses
[4 white + 5 any, worth 2, counts as 2] "On Use, once per game: +1 white per member you have."
- **Verdict: REWORK, low priority** (changed from KEEP). Direction: pay for white members, the color's own thing, instead of every member. That fixes the fit complaint and shrinks the burst Estate Sale then doubles.
- Strategic: a round III burst that is bigger the wider your cult. CL-H MIXED (3% chosen), CL-VH MIXED (8%).
- Fun: experts **4.5 / 3.8** (6). "Used and cast it out for 16 white total, which is too much" (g12 Ben, 5/5). "The game-deciding card, and the combo needs a look" (g12 Cal). "+1 white per member, not per white member, so a wide cult gets +13 white and a contest; it pays for being big, not for being white" (g6 Ben, fits **no**). g6 Cal also said fits no.
- Fits: 4 yes / 2 no.
- Evidence: experts in two games (g6, g12: four raters on the size, two on the fit) and paper (below). Bots: VH +17 ±11 on 21 owners and H flat on 10 owners. Both are too few to read, but VH points the same way.
- Played turn: g12, **round III**, 3 players. Ben buys Heiresses for 9 (partly so Cal, with 11 members, can't). He uses it for +7 white, then places on **Estate Sale** and casts it out for 9 white +1. That is 17 white from one buy and one placement, and white was "unreachable" after (Cal). The best other white placement was **Allowance** at +4. With per white member, Ben's use would have paid about 3. The cast-out still pays 9, which is Farewell and Estate Sale working as built.
- Bot-artifact check: its value is a use (point 1), so bots read it low. The finding comes from experts and paper, and better players would find the combo more often.

### Brokers
[2 white + 3 any, worth 3, counts as 3] "Whenever a White action gives you followers, +1 follower."
- **Verdict: KEEP.** CL-H MIXED (13%), CL-VH MIXED (9%). Lift N +1, H −9, VH +8, N2 +25: no direction. Experts 3.3 / 3.0 (3). g12 Cal buried it with Scouts "because Ben plus Cash In would have printed followers". Fits: yes.

### Exporters
[2 white + 5 any, worth 2, counts as 2] "Whenever you recruit a non-white member, +1 white."
- **Verdict: KEEP** (weak lead). If Cory wants it picked more, make it worth 3 before cutting its price.
- Strategic: rarely chosen. CL-H MIXED (3% chosen), CL-VH MIXED (3%).
- Fun: no expert rated it. Paper only: a quiet trickle of about 3 to 5 white over a game.
- Fits: partly. It pays White for not buying white members, which undercuts **Old Money** ("Game End: +1 follower per white member you have").
- Evidence: lift N −12 ±7 (26 owners), VH +14 ±10 (22 owners), H 15 owners. Too few, and the signs disagree.

### Raiders
[2 white + 3 any, worth 2, counts as 2] "On Use, once per game: steal 4 followers from the leader. Pay them 2 white."
- **Verdict: KEEP.** Lift N +1, H −2, VH −1, N3 +11. CL-H MIXED (6%), CL-VH MIXED (7%). Experts 3.7 / 3.3 (7). "The catch-up card that won me the game; it only works because someone ran away" (g6 Cal, 5/5). The victim side: "4 followers from the leader with no defense" (g7 Cal, 3/2). Fits: yes, as White's catch-up. Note: whether **Lie Low** ("Rivals can't steal or recruit from you this round") stops it is a words question for Cory (bug log row 5). Its value is a use (point 1).

### Cashier
[2 white + 1 any, worth 1] "On Recruit: turn all your white into followers."
- **Verdict: NUMBER, now a lead** (unchanged direction). Make it worth 2 (counts as 2), following Cory's rule to add followers before cutting a price. Its price is already near the floor.
- Strategic: on paper it rarely beats buying followers, and it empties the white contest. CL-H MIXED (5% chosen), CL-VH MIXED (4%).
- Fun: experts 2.3 / 2.7 (3). "It sitting in the shop made Tryout a real white-to-followers threat I had to watch" (g12 Ben).
- Fits: yes, but it is a smaller copy of Cash In. Cory has refused "a smaller copy of a stronger space" before. If Cash In is reworked, Cashier should follow it.
- Evidence: lift **H −13 WEAK**, N3 −13, N 0, VH +6. Only Hard at 4 players reads weak, so this falls short of the two-levels bar. That's why it's a lead now.
- Played turn: **round III**, Cal holds 11 white and 1 blue and takes **Allowance** (+4 white, so 15). Recruiting **Cashier** for 3 turns 12 white into 12 followers + 1 worth = 13, with no white left for the contest. Buying 10 followers instead gives 10, and he keeps 5 white toward the +10. At worth 2, Cashier gives 14 against 10 plus a likely contest: a real choice instead of a trap.
- Bot-artifact check: VH reads it positive, so a better player may time it well. Low confidence.

### Martyrs
[2 white + 2 any, worth 3, counts as 3] "Whenever this member leaves your cult, gain followers equal to its cost."
- **Verdict: KEEP.** Lift N +2, H +12, VH +1, N3 +17. CL-H MIXED (15%), CL-VH MIXED (12%). Experts 3.7 / **4.2** (6): "Martyrs plus Estate Sale was 4 followers and 5 white" (g6 Cal, 4/5). "Nothing at the table was going to make it leave, so the ability is blank" (g12 Ben, 3/2). Fits: yes. The Farewell double payout is its intended combo.

### Old Money
[1 white + 5 any, worth 1] "Game End: +1 follower per white member you have."
- **Verdict: KEEP.** Lift N +6, H −3, VH +4, N3 +6. CL-H AUTO-PICK (13%), CL-VH MIXED (8%). No experts rated it. Fits: yes.

### Hoarder
[4 white + 4 any, worth 1] "On Use, once per game: turn all your resources into white."
- **Verdict: NUMBER** (weak, unchanged). Make it worth 2. Low confidence: likely a bot artifact.
- Strategic: on paper a strong round III setup for **Cash In** or the white contest. Bots almost never buy it: CL-H DEAD (1% chosen), CL-VH 1%, owners N 3, H 7, VH 4. No expert rated it.
- Fun: paper only.
- Fits: yes. Cory called this effect "too strong" on Oct 23, before it went in at 8.
- Played turn: **round III**, Dee has 5 white and 11 other, 2 minions left. **Hoarder** then **Cash In**: 16 followers +1 white, and her recruit is still free. Without it, Cash In gives 5 and buying gives 10, so Hoarder adds about +11 followers for an 8-cost member worth 1. The barrier is the 4 white up front in round II, when white also wins contests. If Cash In is reworked, re-read this card with it.
- Bot-artifact check: probably won't survive better bots (point 1).

**White as a color.** It plays like its fantasy when someone commits. g12's Ben won 93 to 69: he held white every round with **Money Changers** and **Shopkeeper**, fired **Heiresses** for 7, sold it on **Estate Sale** for 9, and finished with **Cash In** for 12 while nobody else held white. The bots read White as steady (+5 / +5 / +6). The card carrying it in expert hands is the Heiresses-to-Estate-Sale line, with Money Changers as the base. The weakest links are **Splurge** (CL-H DEAD, experts 1.6) and **Cash In**, which is dead in contested games and free in uncontested ones. The single change that would help most is the **Cash In** rework already on Cory's list, because it is the color's payoff and today it rewards whoever already won white.

---

## Green (echo)

Fantasy (design-core): "Whatever the best play was, I get it too." Brake: Agents (Bait is 15-deck only). Deck 10: 6 spaces, 10 members (Bait, Understudy, Ensemble and Impostors are 15-deck only), artifact Impressionist. Green main-color lift: N +10, H +2, VH 0.

### Build Up (round I space)
"+3 green in round I, +4 in round II, +5 in round III."
- **Verdict: KEEP.** Cory kept it plain on Oct 31.
- Strategic: CL-H AUTO-PICK (11% chosen), CL-VH AUTO-PICK (11%). It is taken for the contest, or to deny a copy of it: "mostly taken to block a Cover copy of it" (g11 Ava).
- Fun: experts 2.5 / 2.2 (21): "plain green, fine, never exciting" (g11 Dee).
- Fits: 18 yes / 1 no / 1 unsure, as the fuel space.
- Evidence: lift N −4, H −1, VH −1, N3 −8, N2 −17. It is weak at small tables, where copies have fewer targets to use.
- Bot-artifact check: none.

### Echo (round I space)
"Copy the previous action. +1 green."
- **Verdict: KEEP.** The complaint is about what it copies (Largesse, Party Gifts), which belongs to Silver's review and to the copy-target question below.
- Strategic: it reads the table every time. CL-H AUTO-PICK + MISJUDGED (22% chosen; Normal and the lookahead split 51%), CL-VH AUTO-PICK (22%).
- Fun: experts **4.4 / 3.8** (21), the best-rated Green space. "Echo on a rival's Last Call took the go-last too, the biggest swing of the game and a great read" (g8 Ben, 5/5). "Echo on Largesse for +10 is too much" (g11 Dee). All 8 g9 and g11 raters named Echo on Largesse or Party Gifts.
- Fits: yes (Cory: "absolutely perfect").
- Evidence: lift N +1, H +5, VH +2. Normal's numbers are suspect here (MISJUDGED).
- Bot-artifact check: bots don't aim copies at the biggest flat payout, so the expert complaint will not show in bot numbers. It is about the target, not this space.

### Reprise (round I space)
"Copy an action with your minion. +1 green."
- **Verdict: KEEP.** Same note as Echo: "worth exactly your own biggest space" (g11 Cal).
- Strategic: CL-H AUTO-PICK (13%), CL-VH AUTO-PICK (13%). It doubles your own best space.
- Fun: experts **4.1 / 3.7** (21). "Reprise on my own Largesse was +10 for a green space" (g11 Ava). "Reprise on my own Greatest Hits was the best single turn of the game; probably too good with a big On Recruit cult" (g9 Dee, 5/5).
- Fits: yes.
- Evidence: lift N +2, H 0, VH −1, N3 +8. Bots see nothing.
- Bot-artifact check: no bot level flags it. Its two big expert outliers are Largesse and Greatest Hits, which are handled on those cards.

### Encore (round II space)
"Copy the On Recruit of a rival's member. +1 green."
- **Verdict: REWORK** (unchanged, stronger now). Cory already backlogged it ("needs a rework or a better action, not a tweak"), and his Oct 31 rule lets the final balance run bring a backlogged rework in before 1.0. Direction: its value should come from the table without depending on whether a rival owns a steal card. Today it is weak on average and hugely swingy with one card.
- Strategic: there is a real decision only when a rival owns a good On Recruit. CL-H MIXED (7% chosen, 14% thin), CL-VH MIXED (7%, 20% thin). Interim probe: R2 4.3 ±1.8, R3 4.2 ±2.0, dead 5-8%.
- Fun: experts 4.2 / 3.2 (21), fits 17 / 1 / 2. Every Green game where Con Men showed (g2, g3, g5, g9, g11) named Encore on **Con Men** ("Counts as 2 members. On Recruit: steal 5 resources."). "Copying Con Men's steal makes Green a theft color, which doesn't match its 'copy yourself' identity" (g5 Ben, fits unsure). "Encore on Con Men stole 5 from me twice in the game" (g11 Dee, 4/2). Without Con Men: "it was +1 green filler for me" (g8 Ava, 2/1).
- Fits: mostly. Three g5 raters said no or unsure because of the theft.
- Evidence: experts (five games, same complaint) and Normal bots (**N −5 ±2**, the clearest weak read in Green; H +2, VH −1) are two independent instruments, plus the probe's low average.
- Played turn: g2, **round II**, as played. Ava recruits Con Men and steals 5 green from Dee. Dee takes Encore, copies Con Men and steals 5 back, +1 green. Ben takes Encore on the same Con Men (steals 5 from Dee). Cal's **Echo** right after copies Ben's Encore (steals 5 white from Dee). In round III Ava's **Greatest Hits** fires it again. That is one 7-cost buy and 25 resources stolen. Each taker's Encore turn was worth about 6, against **Cover** at about 7 on average, so the taker gained little over the next-best space. The victim lost 15 in one round, and **Agents** can't stop it (see Agents). With no rival steal card, Encore gives about 4 or nothing.
- Bot-artifact check: it survives. Bots value Encore at its average, and the swing comes from one card experts chase.

### Cover (round II space)
"Copy an action with no minion on it. +1 green."
- **Verdict: KEEP.**
- Strategic: CL-H AUTO-PICK (13%), CL-VH AUTO-PICK (13%). It reaches spaces nobody has taken yet.
- Fun: experts 3.4 / 3.2 (21). "Copying an empty Recruit Twice on my last turn was worth 15; flexible and fun" (g5 Ben). "Copying any empty space was my flexible best tool every round" (g11 Ben, 5/4).
- Fits: yes.
- Evidence: lift N +3, H −1, VH −5 ±3, N2 −4.
- Bot-artifact check: VH reads it a little weak, inside noise. No finding.

### Greatest Hits (round III space)
"Copy the On Recruit of each of your members, in any order. +1 green."
- **Verdict: REWORK, together with Encore** (changed from KEEP). Direction: narrow the gap between a cult with no On Recruits (worth +1 green) and one stacked with them. For example, a floor for the first case and a limit on how many it fires, or no Reprise copy of it. Cory changed this card on Nov 1, so this is its first full read. Do it after the Encore rework, which takes out its steal outliers.
- Strategic: all or nothing on your members. CL-H MIXED (3% chosen, 44% thin), CL-VH MIXED (5%, 42% thin). Interim probe: R3 8.5 ±6.3, dead 14%.
- Fun: experts 3.5 / **2.6** (21), the lowest Green space after Build Up. g9: "the payoff for whoever stacks On Recruits... nothing anyone else could answer" (Ava, 5/2). g11, all four: "Cal had no On Recruit members and got nothing; it's a trap unless you planned for it" (Ava, 2/1), "nobody had On Recruits worth copying" (Dee, 1/1).
- Fits: yes (20/0/0).
- Evidence: bots **VH +14 STRONG**, H +11, N +6, rising with level, though part of it is the leader taking the last center space (point 2). Experts saw the swing both ways in g9 and g11. The probe's dead rate (14%) and spread (±6.3) agree. That is three instruments.
- Played turn: g9, **round III**, as played. Dee holds two **Mentor & Protégés** (one a **Doppelganger** copy), Philanthropists, Roadie, Cutpurse and Fan Club. Greatest Hits: two free members, +6 green, +4 to 6 followers. Later her **Reprise** copies it: +14 to 16 green, +7 followers, +3 members. The best other center space for her was **Largesse** at about 10 followers. Dee won by 41. In g11, Cal took the same space for +1 green as a block. (Mentor & Protégés is Red's card; its share of this is in the Red review.)
- Bot-artifact check: it survives and grows with level. Better players build for it more, not less.

### Impressionist (Green's artifact)
"Whenever any player copies an action, +2 of its color."
- **Verdict: KEEP** (changed from NUMBER: Cory's new text answered it). Watch small tables.
- Strategic: no decision after the draft. It pays on every copy at the table.
- Fun: experts 2.5 / 2.4 (13), mostly on the old "+1, your copies" text. On the current text (g11): "least wanted against me; it taxed every copy I made, including Tribute Band, and handed Ben a green tie" (Ava, 4/2). "+2 on every copy added up across the table" (Ben, 4/4).
- Fits: yes (12/0/1).
- Evidence: lift **N +11**, H +4, VH +2, **N3 +24, N2 +17**. Before the change it read N −14, H −12. At 4 players it now sits mid-pack. At 3 and 2 players Normal reads it strong, but only one level plays those sizes.
- Bot-artifact check: Normal over-likes steady trickles. Hard and Very Hard read it as ordinary.

### Busker
[1 green + 3 any, worth 1] "On Recruit: +2 green. Round Start: +2 green."
- **Verdict: KEEP.** Lift **N +8 STRONG**, H +1, VH +4. CL-H AUTO-PICK (39%), CL-VH AUTO-PICK (30%). Experts 3.3 / 3.3 (6): "the round-start green carried my green lead" (g5 Ben). "The round-start green just sat there as a target for Crime Wave" (g11 Ben). Fits: yes. Only Normal reads it strong.

### Muse
[1 green + 3 any, worth 1] "Whenever a rival copies an action, +1 green."
- **Verdict: KEEP** (weak lead). Lift N +7, H +1, VH −1. CL-H MIXED (5%), CL-VH MIXED (5%). Experts 2.0 / 1.7 (3): "came free off Mentor, triggered once" (g9 Dee). Fits: yes. Paper: rivals copy about 6 times a game, so a round I buy brings about 6 green, the same as **Busker**. It now overlaps **Impressionist**, which pays on the same copies.

### Wallflower
[6 green + 4 any, worth 1] "Whenever you copy an action, double the resources it gives you."
- **Verdict: NUMBER** (unchanged). Lower the green part (my guess: 4 green + 4 any, 8) or make it worth 2.
- Strategic: never bought. CL-H DEAD (0% chosen), CL-VH 1%. Owners at any level: 7 or fewer. In the expert games where it showed it was buried.
- Fun: paper only.
- Fits: yes. It is the deep-Green payoff.
- Evidence: two lookahead levels pass it at under 1%, and Normal barely owns it. That is price, not valuation.
- Played turn: **round II**, Dee has 6 green and 5 other. Wallflower takes all 6 green and 4 other. **Echo** on Harvest gives +4, doubled to +8. **Reprise** on Build Up gives +4, doubled to +8. In round III three copies at about +5 each double to +15. That is about +20 over the game for 10. The alternative buy, **Fan Club** (2 green + 4 any, worth 3), gives 3 worth plus 3 to 6 green now and leaves 4 green for the contest. Spending 6 green costs her the green contest (+6 in round II), so the card loses before it fires. At 4 green the contest cost drops and the card competes.
- Bot-artifact check: it should survive. The lookahead plays copies and still passes it.

### Fan Club
[2 green + 4 any, worth 3, counts as 3] "On Recruit: +1 green per Green space with anyone's minion."
- **Verdict: KEEP** (changed from NUMBER). The earlier case (N3 +13 STRONG, H +10) is gone. Every level now reads +4 to +5 inside the error: N +4, H +5, VH +4, N3 +5.
- Strategic: CL-H AUTO-PICK (41% chosen), CL-VH AUTO-PICK (30%, 9% close). It is a good body in round III when the Green spaces fill.
- Fun: experts 3.6 / 3.0 (7): "3 followers, counts 3 for Roadie and Chronicler, refunded 4 green; cheap for what it does" (g8 Ava).
- Fits: yes (6/0/1).

### Roadie
[1 green + 2 any, worth 1] "On Recruit: +1 green per green member you have. Round Start: +1 green per green member you have."
- **Verdict: KEEP, watch.** Lift N +6, **H +12 STRONG**, VH 0, N2 −21. CL-H AUTO-PICK (43%), CL-VH AUTO-PICK (37%, 10% close). Experts 3.4 / 3.6 (7): "counting member weight makes it pay 11-12 a round with Fan Club and Tribute Band; it's the engine, maybe too much" (g8 Ava, 5/5). Fits: yes. **Dabblers** count as green for it. N and H point up, but VH reads 0, so better play doesn't gain from it. Not a NUMBER yet.

### Stunt Double
[2 green + 3 any, worth 1] "On Recruit: copy the action you just took."
- **Verdict: KEEP.** Lift N +1, H −1, VH +4. CL-H AUTO-PICK (44%), CL-VH AUTO-PICK (51%). Experts 3.7 / 3.7 (6): "copying Crowd In for a second extra minion was the move of the game" (g11 Ben, 5/5). Fits: yes. Its g11 line (Crowd In twice, then Party Crasher) is one of the round III last-placement cases; the fix belongs on Party Crasher.

### Tribute Band
[8 green + 4 any, worth 3, counts as 3] "On Use, once per game: choose a rival. Do every action they have a minion on this round."
- **Verdict: REWORK** (changed from KEEP). Direction: bound the burst, for example a cap on how many of the rival's actions it repeats (my guess: 3). If Cory first changes what copies of Largesse and Party Gifts pay, re-read this card before reworking it, because those two were most of the g9 burst.
- Strategic: in round III, late, choose the rival with the most minions placed and do all their actions. CL-H MIXED (8% chosen), CL-VH AUTO-PICK (13%). The 8 green is the gate: "giving up green to buy it was a real dilemma" (g11 Ava).
- Fun: experts **5.0** / 3.4 (5), fun split by seat. "Copying five actions in one turn is too big for one card" (g9 Cal, 5/2). "The biggest single swing and the least fun to watch" (g9 Ben, 5/1). "In two-player, firing it after the rival fills six spaces is a monster" (g8 Ava).
- Fits: yes.
- Evidence: experts (g8, g9: 4 of 5 raters say too big) and paper (below). Bots: too few owners at every level now (N 8, H 18, VH 16). The interim Normal +17 ±8 STRONG pointed the same way.
- Played turn: g9, **round III**, as played. Dee pays 12 (11 green + 1 red) and uses it on Ben, who has five spaces that round, including **Largesse** ("Rivals gain up to 10 silver, split as you choose. +1 follower for each.") and **Party Gifts** ("Rivals gain up to 3 silver, split as you choose. +2 followers for each."). Her own read: "his Largesse and Party Gifts alone are +16". With the other three it comes to about 25 or more, plus 3 worth. The alternative with the same 12 was buying 10 followers. With a cap of 3 it would still be about 18 on that turn.
- Bot-artifact check: its value is a use (point 1), so bots read it low. The finding rests on what experts did with it, and better players would do it more.

### Doppelganger
[2 green + 3 any, worth 1] "On Recruit: this member becomes a copy of another of your members."
- **Verdict: KEEP.** Lift N +3, H +2, VH −7. CL-H AUTO-PICK (18%), CL-VH AUTO-PICK (19%). Experts **4.0 / 3.6** (5): "copying Mentor made it a second Mentor for Greatest Hits; cheap for what it does" (g9 Dee, 5/5). "Becoming Con Men and stealing Cal's blue flipped a +10 contest" (g5 Ava). Fits: yes. Cory loves it. Its big plays ride on Con Men and Greatest Hits, which are handled there.

### Agents
[1 green + 2 any, worth 2, counts as 2] "Rivals can't copy your actions."
- **Verdict: KEEP** as priced. One flag: it doesn't cover what tables expect.
- Strategic: CL-H MIXED (14%), CL-VH MIXED (13%, 9% close). Cory reads it as a piece you push into a rival's cult to stop their copies (Oct 29), which bots don't do.
- Fun: experts 3.0 / 2.4 (5). "It shut off Ben copying my Build Up chains all game; great defensive card" (g8 Ava, 5/4). "It didn't stop Encore on my members, which is where my copy pain came from" (g9 Ava).
- Fits: yes.
- Evidence: lift N −1, H −1, VH 0.
- Finding: Agents blocks **Echo**, **Reprise**, **Cover** and **Tribute Band** on your actions. It doesn't block **Encore** or **Greatest Hits**, because those copy a member's On Recruit, not an action. Owners read it as blocked in g5 and g9 (bug log row 22, a words question for Cory). The Encore rework makes this go away.

### Chronicler
[1 green + 4 any, worth 1] "Game End: +1 follower per green member you have."
- **Verdict: KEEP.** The lens tags it SKILL− and the levels disagree in sign: N +7, H −4, **VH −10 WEAK**, N3 +8. CL-H AUTO-PICK (18%), CL-VH **REAL CHOICE** (15% chosen, 12% close). Experts 3.3 / 3.0 (3): "+12 at game end for 5 because it counts member weight; it decided the margin" (g8 Ava). It is a go-deep scorer, and Cory likes scorers. Not two levels in the same direction. Fits: yes.

**Green as a color.** It plays exactly like its fantasy. Every expert game with Green said the copies are the game's engine, and **Echo** (4.4 / 3.8) and **Reprise** (4.1 / 3.7) carry it. The trouble is what the copies reach: **Con Men**'s steal through **Encore** in five games, Largesse and Party Gifts through Echo and Reprise in g9 and g11, and an On Recruit stack through **Greatest Hits** in g9. Bots don't aim copies, so Green reads near even for them (N +10, H +2, VH 0). The weakest link is **Encore**: Normal −5, low on average, and a 5-steal Agents can't stop when it hits. The single change that would help most is still the Encore rework Cory already wants, followed by Greatest Hits. **Impressionist** is no longer a problem after Cory's +2 change.

---

## Grey members (benders)

No color, so the question is whether each one earns its shop slot. Deck 10 holds 10 greys. Big Spender, Launderers, Cheerleader, Coach and Tiebreaker are 15-deck only and have no data this round.

### Party Crasher
[4 any, worth 1] "On Use, once per game: your next minion can be placed on a space a rival already took."
- **Verdict: REWORK** (changed from NUMBER). Direction: bound what a join can reach on the round's last placements, for example no center spaces, or not the final placement of round III. Price alone doesn't touch a +30 swing. Flag: this is a restriction Cory hasn't asked for, on a card he loved as Squatter ("really great"), so it is his call whether the swing is the fun.
- Strategic: it creates a real last-turn read, and the ceiling is the best taken space on the board. CL-H MIXED (6% chosen), CL-VH MIXED (7%). Its use reads DEAD (point 1).
- Fun: experts **4.2 / 3.8** (13). "Joining Makeover on the last placement won me all three contests; a 4-cost card shouldn't swing 30" (g10 Ben, 5/5). "The card that won the game" (g10 Ava). "Joining Toast at the end flipped a +10 contest" (g7 Ben). "Joining Ben's Largesse for +11" (g9 Dee). g4's victim: "it needs a limit on center spaces" (Dee). Fits: 3 / 2 / 8, which is fine for a grey.
- Evidence: experts in five games (g4, g7, g9, g10, g11), with the meta read counting 12 players whose first change was here, plus paper (below). Bots: N +2, H +5, VH −3. The interim Hard +13 STRONG that backed a price change did not hold, which is why the verdict moved off NUMBER.
- Played turn: g10, **round III**, last placement, as played. Ben recruits Party Crasher for 4, uses it, and joins the taken **Makeover** ("+4 yellow, then rearrange your resources into any mix of colors."). He rearranges 19 resources into the colors that win all three round III contests, +30. The best open space for him was **Exchange** R3 (3 resources into 6 followers, +1 white), about +7. That is a gain of about +23 for a 4-cost member. Under a no-center rule the same turn is Exchange or a similar outer join, a few points, and the card keeps its mid-round reads.
- Bot-artifact check: bots fire it by a fixed rule and never aim it at the best taken space (point 1). Better players gain more, so the finding survives.

### Line Cutters
[2 any, worth 3, counts as 3] "You go first every round."
- **Verdict: KEEP** (changed from REWORK). The interim case rested on Normal and Hard reading WEAK. Now N −2, H −4, VH −2, none significant, and the lens no longer calls it a TRAP. The forced first seat still costs a round III leader the last placement on paper, so "let the owner choose" stays an idea, not a recommendation.
- Strategic: CL-H AUTO-PICK (30%), CL-VH **REAL CHOICE** (21% chosen, 13% close).
- Fun: experts 3.6 / **3.9** (20). Nearly every rater in g5 to g12 called it underpriced: "3 followers for 2 plus first pick each round is the best deal in the shop" (g9 Ben). Two disagreed on the seat: "first pick mattered less than last pick in round III" (g10 Cal), "first pick won me Largesse in round III" (g11 Ava).
- Fits: 1 / 4 / 15 (unsure). As a grey it is fine.
- Evidence: experts say it is strong and bots say owners lose slightly. The two disagree, so neither a price change nor a rework is supported. Cory set it at worth 3 on Nov 1 ("it seems pretty weak now"), and the bots haven't overturned that.

### Con Men
[7 any, worth 2, counts as 2] "Counts as 2 members. On Recruit: steal 5 resources."
- **Verdict: KEEP** the card. The fix goes on **Encore** (above). If Encore stays, Con Men is the card to change: make the steal something copies can't reach. That's Cory's call, since he moved it back to On Recruit on Oct 31.
- Strategic: the most-taken member. CL-H AUTO-PICK (54% chosen), CL-VH AUTO-PICK (56%).
- Fun: experts **4.5** / 3.3 (19), fits 3 / 6 / 10. "One purchase fired four steals through Encore, Echo, Reprise and Doppelganger; easily the card of the game, and it felt bad" (g5 Ben, 5/1). Without copiers: "stealing 5 from a player with 40 surplus does nothing; 7 cost is too high" (g8 Ben, 2/2). Several called a grey that steals "Magenta-ish" (g9 Ava, g10 Ben).
- Evidence: lift N +1, H +2, VH +5, N2 +5. On its own it is a good, not broken, buy. Its weight on the table comes through copies (5 fires in g2 and g5).
- Bot-artifact check: modest at every level. The interim "grows with skill" (VH +13) did not hold.

### HR
[10 any, worth 4, counts as 4] "Counts as 4 members. Game End: +2 followers per color you have 3 members of."
- **Verdict: KEEP.** Cory set it at +2 and 10 on Nov 1, and these runs are its first read at that number.
- Strategic: CL-H AUTO-PICK (19%), CL-VH AUTO-PICK (15%). In round III, buying 10 followers beats it on paper (10 against 4 to 8).
- Fun: experts **2.5 / 2.2** (14). Five raters in g10 and g12: "never beat buying 10 followers outright". The best word: "decent body for a Promote" (g9 Cal).
- Evidence: lift N +7, H −1, VH 0. Bots say fair. Experts say dull and a little weak.
- Earns its slot? As a body and a swap target, yes. It is the least fun grey that gets bought. If Cory wants it livelier, the lever is the set bonus, not the price. That last point is my guess.

### Dabblers
[3 any, worth 2, counts as 2] "Counts as 2 wild members."
- **Verdict: KEEP.** Lift N +4, H 0, VH +1. CL-H AUTO-PICK (18%, 10% close), CL-VH REAL CHOICE (12%, 11% close). Experts 2.0 / 2.1 (17): "wild members quietly inflate every per-member count" (g5 Cal). It feeds **Roadie**, **Chronicler**, **Old Money**, **Heiresses** and **HR**. One words catch (bug log row 26): because it counts as every color, its owner can never trigger **Guest Book** ("a color none of your members have"). "Wild members need a reminder text against new-color effects" (g12 Ava). That is a words question for Cory, not a balance one.

### Alchemists
[5 any, worth 3, counts as 3] "All your resources count as any when you recruit a member."
- **Verdict: KEEP.** Lift N −2, H −4, VH −3: mildly negative everywhere and within the error at each level. CL-H MIXED (14%), CL-VH MIXED (11%). Experts 2.7 / 2.5 (16), and better than the interim read. "It makes every colored cost wild, so Shift Crew and Martyrs became anyone's; underpriced at 5" (g7 Cal, 5/4). "3 followers for 5 loses to buying 5" (g11 Dee). The ability matters when the shop has colored-heavy members (Tribute Band 8 green, Wallflower 6 green, Heiresses and Hoarder 4 white, Patriarch, Mentor). Fits: unsure for most, fine for a grey.

### Extra Hand
[9 any, worth 1] "On Use, once per game: +1 minion this round."
- **Verdict: KEEP, watch.**
- Strategic: a round III extra placement plus an extra recruit. CL-H DEAD (1% chosen), CL-VH MIXED (4%). The lens tags it SLEEPER: bought rarely, but owners win.
- Fun: experts 3.5 / 2.8 (14), down from 4.3 / 4.0 at interim. "The extra placement after everyone else is what set up my final swap chain" (g9 Ben, 4/4). "At 9 on the last turn, an extra placement plus a recruit still lost to buying 10 followers" (g12 Ava). "Buried it so nobody got a placement after my last one" (g10 Ben). Spent, it is also cast-out fodder: "casting out a spent Extra Hand for 10 white" (g7 Cal).
- Evidence: **VH +19 ±7 STRONG** (47 owners). H 14 owners and N 7 are too few. Only one level reads it, so this is not a NUMBER.
- Bot-artifact check: its value is a timed use (point 1). VH owners winning says skilled players time it well. It is one of the round III last-placement cards the meta read flags. Watch it with Party Crasher.

### Scouts
[3 any, worth 2, counts as 2] "On Use, once per round: send any shop members to the bottom of the pile, then refill."
- **Verdict: KEEP.** Cory made it worth 2 on Nov 1, and the Bargain Bin and Patroness bug was fixed before these runs (v0.9.962). This is its first clean read.
- Strategic: lift N −1, H −2, VH −3, N3 −6. CL-H MIXED (14%, 10% close), CL-VH MIXED (8%). Its use reads DEAD (point 1).
- Fun: experts 3.0 / 2.7 (15), with a split. g11's three raters (5/5, 4/3, 5/4): "a 3-cost row redraw mid-round that found Grifter and broke my silver; underpriced". g9: "I never once found a reason to use the reroll".
- Earns its slot? Yes, as a cheap body with a real mid-round reroll. Cory likes it.

### Anarchist
[7 any, worth 1] "On Use, once per round: swap any 2 members, in any cult or the shop, that cost within 2 of each other."
- **Verdict: KEEP.** Too few owners at N (24) and H (26). VH −5 ±5 (75). CL-H DEAD buy (3%), CL-VH MIXED (7%).
- Fun: experts 3.6 / 3.2 (10). "Swapping Old Maid into Cal's cult in place of Loyalists was the trickiest line I found all game" (g10 Ben, 5/5). "The strongest attack card here" (g10 Cal). In other games it lost to a flat 10 followers (g7, g11).
- Bot-artifact check: its value is a use (point 1). Likely an artifact.

### Old Maid
[5 any, worth 1] "Whenever this member joins your cult, −5 followers."
- **Verdict: KEEP.** Cory kept Promote and Demote reaching any cult (Nov 1, 12:45pm), so Old Maid can be pushed onto rivals with **Demote** ("Swap a member with a shop or rival member costing up to 2 less. +3 red.") as well as **Anarchist**. That is as designed.
- Strategic: nobody buys it (CL-H and CL-VH DEAD, 0% chosen). It is ammunition and a shop slot the table works around.
- Fun: experts **4.5 / 3.5** (4). "Hot potato is fun, but −5 every time it moves on a 5-cost card makes the swaps around it huge" (g10 Ben, 5/4). "Fun, but probably too swingy for 5" (g10 Cal).
- Earns its slot? Yes, as a weapon. One note for Cory, which is my reading: g10's two raters think −5 on every move is the swing, not its price.

**Greys as a set.** The greys that bend a rule players feel are the loved ones: **Party Crasher** (4.2 / 3.8), **Line Cutters** (3.6 / 3.9), and, in the right hands, **Anarchist** and **Old Maid**. **Con Men** carries the most weight on the table, almost all of it through Green's copies. The weakest is **HR** (2.5 / 2.2, "never beat buying 10"), with **Dabblers** a quiet body. The single change that would help most is now **Party Crasher**: a last-placement join onto a center space decided games in g7, g9, g10 and g11, and price can't reach a +30 swing. Line Cutters drops off the list, because no bot level now reads it weak.

---

## Not reviewed (15-deck only, no data this round)
Undertaker (White); Bait, Understudy, Ensemble, Impostors (Green); Big Spender, Launderers, Cheerleader, Coach, Tiebreaker (grey).
