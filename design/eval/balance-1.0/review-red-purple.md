# Review: Red and Purple (balance-1.0, deck 10)

Reviewer: Claude (senior-designer pass), 2026-11-01, final re-check at about 12:50pm Eastern. Live cards from `live-board.mjs` on claude/gifted-newton-3lcy3i. Anything marked *(guess)* is mine, not measured. "Lift" = owner win share minus expected for member count.

**Instruments (final/, refreshed 12:41pm).** Normal 4p 389 games, 3p 203, 2p 225; Hard 4p 220; Very Hard 4p 249; choice logs (Hard 230 games, Very Hard 317); lens across the three levels; 12 expert AI games (Red in g1, g3, g9, g10, g12; Purple in g1, g4, g6, g7, g8, g11). Red tables played on the old swap build were dropped, so **Normal (2, 3 and 4 players) has no Red numbers at all, Hard has Red from only about 50 games, and Very Hard is the one full Red read**. Every Red number at Hard is provisional until the Red re-runs land (about 1:00pm).

**Payouts that changed after the runs started** (the bot numbers on these cards come from the old payout):
- Last Call paid phantom Gossip and Pocket Watch on repeated skips. That inflates Gossip and Pocket Watch.
- Recruiter did not yet pay when a rival's member went to the shop. That undercounts Recruiter.
- (Stash, Magenta, is not mine.)

## Changed since interim

1. **The "swap bug" is gone from this review.** Promote and Demote reaching any cult, and Promote reaching cheaper members, is Cory's Oct 29 call, kept at 12:45pm today. I had called it a bug. Promote, Demote and Panel now read as built; no "fix first".
2. **Promote**: still KEEP, now without conditions. The interim Hard and Very Hard numbers I cited came from the old build.
3. **Patriarch**: NUMBER (price 8) → KEEP, provisional. Normal no longer reads Red, Hard +15 rests on 43 owners from about 50 games, and Very Hard reads −3. One bot level is not two.
4. **Loyalists**: KEEP → NUMBER (worth and count 3 → 4). Hard −6 and Very Hard −12 WEAK both point down, and the lens calls it a TRAP.
5. **Recruiter**: the interim "Hard +21" came from the old build and is gone. Bots now read 0 (Hard) and −7 (Very Hard). The experts call it the strongest artifact to face, so the verdict stays KEEP.
6. **Crunch Time**: still NUMBER. Its new STRONG lift (Hard +9, Very Hard +14) belongs to Last Call: two thirds of the seats that took it also took Last Call, most of them after their own Last Call that round.
7. **Courier**: NUMBER (price 4) → KEEP. Every level now has too few owners, and the owners who win are Last Call takers.
8. **Gossip**: NUMBER (price 4) → KEEP (watch). Every level has too few owners, the owners win, and the phantom skips inflated what it paid.
9. **Bouncers**: NUMBER (worth 3) → KEEP. Only Normal still reads weak; Hard −2 and Very Hard +2.
10. **Pocket Watch**: KEEP → NUMBER (+2 purple per skip). It is weak at every level (Normal −5, Hard −11, Very Hard −7, 3p −10), even with phantom skips paying it. The g11 experts rated it 1 and 2.
11. **Hot Streak**: still KEEP, but my interim note that bots never use it was wrong. The choice log can't see On Use abilities, and bots do use it. Very Hard owners: +15, 5.3 followers for 5.
12. **Timekeepers**: still KEEP, with a new flag. Hard −5 and Very Hard −12 WEAK, and owners with 3+ purple members don't win more either. I explain below why that isn't a NUMBER.
13. **Last Call**: still REWORK of the round III block. The g11 experts, on the new +1 follower payout, rated it 2 to 3: the followers now feel small, and the power is in going last.

---

# RED, the recruiter ("I get members without spending my recruit, and I trade up")

Deck 10 holds Triplets, Volunteer, Mentor & Protégés, Proselytizers, Mob, Patriarch, Recruit Bonus, Deprogrammers, Panel, Loyalists; Recruiter is the artifact. Host and Headhunter are 15-deck only.

Red as a main color: Hard +1 (41 seats, provisional), Very Hard +10 ±6 (68 seats). That lift is not corrected for member count, and Red seats own more members (the Nov 1 balance note: "Red's +11 as a main color is member count").

## Spaces

**Tryout** (I): "Use the On Recruit effect of a shop member; it stays in the shop. +2 red."
- Verdict: KEEP.
- Strategic: real when the shop shows a strong On Recruit (Grifter, Cashier, Mentor), otherwise it's +2 red. Hard MIXED (chosen 8%, thin 17%), Very Hard MIXED (9%).
- Fun: experts 2.8 / 2.9 (18 ratings), down from the interim 3.4. The new games say it is only as good as the shop: "with no good On Recruits in the shop it was +2 red, and once it did literally nothing" (g9 Ben); "Firing Grifter's steal from the shop for free was a clever, cheap contest swing" (g9 Ava).
- Fits: yes (17/18).
- Evidence: lift Hard +3 (provisional), Very Hard −1: flat. Experts lukewarm, not negative.
- Bot check: survives. Copying steal On Recruits is the table-wide copy issue (coordinator), not a Tryout number.

**Gather** (I): "+2 red in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III)."
- Verdict: KEEP.
- Strategic: fuel with a kicker. Hard and Very Hard MIXED (chosen 7-8%, thin 16-24%).
- Fun: experts 2.7 / 2.8, up from 2.5. "Cal's Gather into Mob was a real play" (g10 Ben); "Gather + Deprogrammers my best single turn" (g12 Cal).
- Fits: yes (18/18).
- Evidence: Hard 0, Very Hard −1. It does its fuel job, which is what Cory set on Oct 31.
- Bot check: survives.

**Walk-In** (I): "Recruit the top member of the deck. Each rival +1 red. +1 red."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK (80% auto, 56% solo), Very Hard AUTO-PICK (63%). It's a free member, so the only question is whether the top card is good.
- Fun: experts 3.4 / 3.7, the best-liked Red space for fun. "flipping Line Cutters for free was my highlight; seeing Old Maid on top later made it a trap, which is fun table texture" (g12 Ava). Two players called the +1 red to every rival a real cost in red contests (g10 Ben, g12 Cal).
- Fits: yes (17/18).
- Evidence: Hard −2, Very Hard +2: flat.
- Bot check: survives.

**Promote** (II): "Swap a member with a shop or rival member costing up to 2 more. +3 red."
- Verdict: KEEP (Cory, 12:45pm and 1:10pm: kept as is, +3 red).
- Strategic: Hard AUTO-PICK (chosen 29%), Very Hard AUTO-PICK (contender 60%, chosen 27%). Experts 4.1 strategic. 8 players in 4 of 5 Red games named the swaps among the best decisions (meta.md).
- Fun: 3.2. It's high for the taker and low for the target: "with Recruiter and Deprogrammers it's the strongest space on the board; being the target felt awful and I had no counter" (g12 Ava, 5 strategic / 1 fun). "Promote into a rival's Panel whose On Recruit promotes again was my best turn of the night" (g9 Cal).
- Fits: 14 yes / 4 unsure.
- Evidence: Hard −3 (provisional), Very Hard −2. The interim WEAK came from Normal, which no longer reads Red. Takers win at an even rate while the experts rate it the best space. *(guess)* That's the usual multiplayer pattern: a swap gains you something and costs one rival, so the two players left out gain on both of you.
- Bot check: survives. The open question is feel, not size: the Recruiter + Deprogrammers stack on one swap (+5 red, a better member, the rival −1 follower). See Recruiter.

**Demote** (II): "Swap a member with a shop or rival member costing up to 2 less. +3 red."
- Verdict: KEEP.
- Strategic: Hard and Very Hard AUTO-PICK. Experts 4.2 strategic, the highest-rated Red space. Uses: dump a spent member, take a rival's fat body for a slightly cheaper one, push Old Maid onto a rival.
- Fun: 3.1. "handing Old Maid back onto Ben's Loyalists was the most satisfying move of my night" (g10 Cal); "It let Dee take my Triplets through Lie Low and fed Recruiter; it felt bad on the receiving end" (g9 Ava).
- Fits: 15 yes / 3 unsure.
- Evidence: Hard −5 (provisional), Very Hard +2: flat.
- Bot check: survives. The Old Maid push before round III is past Cory's "mild sting", but it's Old Maid's issue (grey), so it goes to the coordinator.

**Recruit a Member** (III): "Recruit a member in the shop costing 8 or less. +1 red."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK, Very Hard AUTO-PICK (contender 39%). A free member that doesn't use your recruit. Its value depends on what's in the shop: "grabbing Patriarch free was worth ~9 followers" (g12 Cal) against "fine, never exciting" (g9 Ben).
- Fun: experts 2.9 / 3.2.
- Fits: yes (18/18).
- Evidence: Hard −2, Very Hard −2: both flat. The interim split between levels (Normal −5, Very Hard +14) is gone. Raising the cap is no longer called for.
- Bot check: survives.

## Members

**Triplets** [1 red + 2 any, worth 3, counts as 3]: "Worth 3 followers."
- Verdict: KEEP.
- Strategic: Hard and Very Hard MIXED (close 9% at Very Hard). A body and a swap target ("good Demote target", g9 Dee).
- Fun: experts 2.2 / 3.0, "3 for 3, honest filler" (g12 Cal).
- Fits: yes, as a red body.
- Evidence: Hard −4, Very Hard 0.
- Bot check: survives.

**Volunteer** [1 any, worth 1]: "Worth 1 follower."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK, Very Hard REAL CHOICE (close 17%). It's Promote bait, and in g12 a blocking buy against Guest Book.
- Fun: experts 1.6 / 2.4.
- Fits: yes (a cheap body to trade up).
- Evidence: Hard +2, Very Hard −2: even.
- Bot check: survives.

**Mentor & Protégés** [5 red + 4 any, worth 3, counts as 3]: "On Recruit: recruit the cheapest member in the shop."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK (chosen 18%), Very Hard MIXED.
- Fun: experts 3.9 / 3.5. In g9 it was the engine that won the game through copies: "free members on every copy is the engine that won the game, and too strong with Greatest Hits" (g9 Cal). On its own: "9 for 3 bodies plus a free cheapest member is fair" (g12 Ava).
- Fits: yes.
- Evidence: Hard −4, Very Hard +3: even. The g9 blowout is the copy issue (Greatest Hits, Doppelganger) and goes to the coordinator.
- Bot check: survives. Bots don't aim copy chains, so they can't show the g9 snowball.

**Proselytizers** [3 red + 5 any, worth 2, counts as 2]: "Whenever you recruit, +1 follower."
- Verdict: KEEP.
- Strategic: Hard MIXED (chosen 3%), Very Hard MIXED (3%). It's rarely bought.
- Fun: experts 3.0 / 2.5 (2 players): "the engine I wanted, about +10 over two rounds" (g10 Cal), and "8 cost late game with few recruits left is never right" (g12 Cal). It's a round I to II buy.
- Fits: yes.
- Evidence: Hard 17 owners and Very Hard 25, both too few to read; Very Hard owners got 7.4 followers for 8.
- Bot check: can't say yet.

**Mob** [7 red + 5 any, worth 5, counts as 5]: "Game End: +1 follower per red member you have."
- Verdict: NUMBER. Worth and count 4, as Cory set on Oct 30 ("lets just make it fewer members"). The Oct 31 rule ties worth to count, so both move together. If it still reads strong, price 13.
- Strategic: Hard AUTO-PICK (chosen 35%), Very Hard AUTO-PICK (30%). It counts its own 5 toward itself, so its floor is 10 followers for 12.
- Fun: experts 2.9 / 2.4 (7 players). Three of the four g9-g12 players who weighed it passed, because "12 cost … never worth breaking a red lead for" (g12 Cal). The one who bought it rated it 4 / 5: "Dabblers' wilds pushed its game-end to +14" (g10 Cal). That's real tension against the red contest.
- Fits: yes.
- Evidence: Hard +13 (30 owners, provisional) and Very Hard +9 (50 owners) point the same way, as Normal +15 did in the interim. The lens no longer calls it DOMINANT.
- Played turn: round III, 4 players. Ava has 12 resources (7 red) and owns Triplets (3), Panel (3), Volunteer (1) and Deprogrammers (4): 11 red members. Mob scores 5 + 5 (itself) + 11 = 21 followers for 12. The best other buy is 10 followers for 10, with 2 kept. Mob is about +9 over that, minus the red contest she gives up (+10 if she led). At worth and count 4: 4 + 4 + 11 = 19. With a thin red cult (Triplets only): 4 + 4 + 3 = 11 for 12, worse than buying followers. So deep red pays and a splash doesn't, which is the right shape.
- Bot check: partly survives. Good players skip it to defend the red contest, as the experts did, which pulls the lift down. The 21-for-12 ceiling stands on paper.

**Patriarch** [3 red + 3 any, worth 1]: "Game End: +1 follower per 2 members you have."
- Verdict: KEEP (watch), provisional. Read again after the 1:00pm Red re-runs. If Hard holds and Very Hard turns positive, price 8. Flag: scoring on member count is a shape Cory has ruled out for new cards (verdicts #9); this one is live, so I'm pricing it, not re-pitching it.
- Strategic: Hard AUTO-PICK (chosen 25%), Very Hard AUTO-PICK (21%).
- Fun: experts 3.5 / 3.3. "+14 at game end for 6; with a wide cult it's underpriced" (g10 Ben); "+8 at game end on 16 members, rewards the wide red cult exactly" (g12 Cal); "only paid 3 because my members kept leaving" (g9 Cal). Swaps and steals cut it down.
- Fits: yes (wide cult).
- Evidence: Hard +15 STRONG (43 owners, about 50 Red games; the lens calls it DOMINANT on that one level), Very Hard −3 (70 owners). The levels disagree, and the larger sample reads even.
- Played turn (for the record): round II, 4 players. Ben has 8 members and will end around 14. Patriarch scores 1 + 7 = 8 for 6, against 5 followers for 5 now (plus 1 kept): +3 over buying followers. At 8 it's even for an average cult and +3 for a 20-member cult.
- Bot check: undecided. The experts' +14 cult is the case a price would aim at.

**Recruit Bonus** [1 red + 2 any, worth 2, counts as 2]: "Your On Recruits also give +1 of that member's color."
- Verdict: KEEP.
- Strategic: Hard MIXED (close 8%), Very Hard MIXED (close 9%).
- Fun: experts 2.5 / 2.5, "barely did anything… mostly a 2-body swap chip" (g10 Cal).
- Fits: yes, loosely.
- Evidence: Hard +11 (provisional), Very Hard −8: the levels split.
- Bot check: survives. It's a cheap 2-body; its ability is small.

**Deprogrammers** [1 red + 2 any, worth 4, counts as 4]: "Whenever you take a rival's member out of their cult, they lose 1 follower."
- Verdict: KEEP.
- Strategic: Hard MIXED (contender 68%, chosen 32%), Very Hard REAL CHOICE (close 13%). It's the best value per cost in Red, and it gets swapped around.
- Fun: experts 3.9 / 3.6. "4 bodies for 3 is the best rate in red and turned every swap into a follower hit; it changed hands twice" (g10 Cal). Three experts called it underpriced.
- Fits: yes.
- Evidence: Hard −1, Very Hard +1: even. Experts say cheap, bots say fair. Since it changes hands, being worth 4 for 3 is shared by the table.
- Bot check: survives.

**Panel** [4 red + 3 any, worth 3, counts as 3]: "On Recruit: promote or demote another of your members."
- Verdict: KEEP. A words question for Cory (not a bug): the card says "another of your members", but it runs the same swap list as Promote and Demote, so it reaches rivals' and shop members (red.js `panelMode` calls `swap`). Bug log row 21 adds that it fires for whoever swaps it in, so a rival's Promote onto your Panel gives them two swaps.
- Strategic: Hard AUTO-PICK, Very Hard AUTO-PICK (contender 67%).
- Fun: experts 4.3 / 4.3 (3 players): "owning it is a liability, stealing it is a double swap" (g9 Cal). Tables enjoyed exactly that.
- Fits: yes.
- Evidence: Hard +9 (provisional), Very Hard +1.
- Bot check: survives.

**Loyalists** [2 red + 3 any, worth 3, counts as 3]: "Your other members can't be swapped."
- Verdict: NUMBER. Worth and count 4 at price 5 (Cory's lean: add followers before cutting price). It read −8 at price 4 on Normal earlier today, so a lower price alone isn't the fix.
- Strategic: Hard AUTO-PICK, Very Hard MIXED (contender 71%).
- Fun: experts 3.5 / 2.3. "essential against the swap spaces, but guarding everything but itself made it the hole Anarchist and Demote both went through" (g10 Cal). That hole is Cory's Oct 29 call.
- Fits: half. It's Red's wall against Red, in Red's deck.
- Evidence: Hard −6 (provisional), Very Hard −12 WEAK; the lens calls it a TRAP (bought in 67-90% of games, owners lose).
- Played turn: round II, 4 players, a Red rival at the table. Ben has 5 and owns Deprogrammers and Triplets. Loyalists for 5: 3 followers, and his other members can't be swapped for the rest of the game. Buying followers instead: 5 followers. The protection saves him perhaps one swap (a better member taken, −1 follower through Deprogrammers, +2 red to a Recruiter owner), but the Red player can still Demote Loyalists itself away and take the wall with it. Loyalists is 2 behind plus a shield with a gap. At worth 4 it's 1 behind plus the shield, about even.
- Bot check: mostly survives. The experts paid 5 for it and still lost members through it.

**Host** [2 red + 3 any, worth 1] and **Headhunter** [3 red + 3 any, worth 1]: 15-deck only. No evidence this round.

## Artifact

**Recruiter**: "Whenever a member leaves a rival's cult, +2 red."
- Verdict: KEEP. Bot numbers predate the 1:11pm change (it now also pays when a rival's member goes to the shop), so they undercount it.
- Strategic: experts 3.5. All four g9 players and two in g12 named it "the artifact I'd least want to face". It paid +2 red about eight times in g9 and five in g10, and it pays its owner on their own Promote and Demote (g12 Ava: "a red engine aimed at your neighbors").
- Fun: 2.5, split by who held it (holders 4, others 2).
- Fits: 9 yes / 6 unsure.
- Evidence: Hard 0 (provisional), Very Hard −7 (92 owners), on the old payout. The experts read it as strong at tables where people swap. *(guess)* Bots don't aim swaps to feed it.
- Bot check: doesn't survive better play: the experts aim swaps and get more from it than bots do. With the shop payout added it gets stronger. Read it again on the re-runs before any number.

**Red in a paragraph.** Red plays like its fantasy in its swap spaces. Promote and Demote are the top-rated strategic spaces in the game outside Last Call (4.1 and 4.2), and the swaps are what tables remember. What carries Red is the swap trio of Promote or Demote, Recruiter and Deprogrammers: one swap paid +5 red, a better member and −1 follower to the rival in g10 and g12. Mob carries the end game. The weakest link is Loyalists (TRAP, Very Hard −12), the only card that pushes back against Red's own engine, and it still loses. The change that would help Red most is worth 4 on Loyalists. The feel risk to watch is how the swap trio feels from the target's seat ("being the target felt awful and I had no counter").

---

# PURPLE, the clock ("I act when it matters most")

Deck 10 holds Courier, Clockmakers, Night Owls, Early Birds, Bouncers, Gossip, Timekeepers, Closer, Hot Streak, Shift Crew; Pocket Watch is the artifact. Go-Getter, Late Risers and Extra Shift are 15-deck only.

Purple as a main color: Normal 0, Hard −7, Very Hard −2.

**One pattern explains most of Purple** *(my reading, backed below)*. Contests pay at round end, and in round III most players cash out to zero. So the last placements decide contests, and going later is worth more than going earlier. Last Call (go last) is the strongest space in the game. Cards that move you earlier (Right Away, Crunch Time) are filler. A skip on a rival moves them later, which is often a gift, so Hold Up and Bouncers barely sting. Purple's cards that win when owned (Courier, Closer, Hot Streak, maybe Gossip) all pay off on Last Call's closing run.

## Spaces

**Sleep In** (I): "+4 purple (+5 in round II, +6 in round III). Skip your next turn."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK, Very Hard AUTO-PICK (contender 53%). It's free on your last minion, and the skip moves you later, which helps.
- Fun: experts 3.1 / 3.1. "biggest flat purple; the skip rarely matters" (g11 Dee).
- Fits: yes (20/20).
- Evidence: Normal −1, Hard −2, Very Hard −3. Winners use it a little less (Very Hard 0.62 vs 0.79).
- Bot check: survives.

**Hold Up** (I): "+2 purple (+3 in round II, +4 in round III). The next turn is skipped."
- Verdict: KEEP.
- Strategic: Hard and Very Hard MIXED (thin 27-29%).
- Fun: experts 2.8 / 2.6. "skipping someone mostly just reorders turns" (g11 Dee); "the skip mostly gifts the Pocket Watch holder" (g11 Ben).
- Fits: yes.
- Evidence: Normal 0, Hard 0, Very Hard +3.
- Bot check: survives. It feeds Pocket Watch and Gossip, as designed.

**Right Away** (I): "+1 purple (+2 in round II, +3 in round III). Your next turn comes right after this one."
- Verdict: NUMBER: +2/+3/+4 (Hold Up's numbers).
- Strategic: Hard FILLER (chosen 4%, thin 60%), Very Hard MIXED but filler-shaped (chosen 4%, thin 48%). Taken as a last minion, it does nothing.
- Fun: experts 1.9 / 2.0 (21 ratings). "on your last minion it's just +purple, the 'next turn' text does nothing" (g11 Cal).
- Fits: yes.
- Evidence: Hard and Very Hard choice logs agree, along with the experts. Lift Normal −3, Hard 0, Very Hard −4: a filler that does no harm.
- Played turn: round II, 4 players, Dee in seat 2. Right Away gives +2 purple and moves her next turn up, but every color still has an open space in round II, so the tempo buys little. Hold Up gives +3 purple and moves the next player to the end. Right Away is 1 purple behind and gives nothing a rival feels. At +3 it's level on purple, and the tempo is its edge.
- Bot check: survives (experts agree). A rescue clause for the last minion was ruled out; the number is the lever.

**Last Call** (II): "+1 purple. +1 follower and +1 purple per minion you have left. Skip your turns until everyone else is out of minions."
- Verdict: REWORK, round III only. Keep the shape Cory loved ("YES now you're cooking"): position traded for a payout you can count. Direction *(guess)*: in round III, cap how many unanswered placements it buys, for example skip only your next two turns (g1 Cal's idea), or give round III its own purple closer and keep Last Call to rounds I-II. The numbers Cory set this morning aren't the issue; the position is.
- Strategic: Hard AUTO-PICK, Very Hard AUTO-PICK (contender 48%). Winners take it about twice as often (Hard 0.71 vs 0.38, Very Hard 0.80 vs 0.35).
- Fun: experts 4.6 / 3.9 across 21 ratings, the top-rated space. On the new +1 follower payout, g11 rated it 2 to 3: "at the end it's just +1 follower, never a real choice" (g11 Ben). Yet g11 was still decided after everyone else was out: "going last on the final turn let Ben Party Crash Largesse, so it's a closer's space" (g11 Cal). The payout now feels small, and the seat still decides.
- Fits: yes (20/20).
- Evidence: STRONG at all three levels (Normal +6, Hard +12, Very Hard +17; lens STRONG and SKILL+). Expert games g1, g4 and g11 were decided in a Last Call closing run. meta.md: 5 of 12 games turned on the round III last placements.
- Played turn (g1, round III, 4 players, old payout): Ava placed Last Call with 4 minions left, then placed all four after every rival was out, and took four +10 contests by one each (+40). On today's payout the space itself gives +5 purple and +4 followers, against Largesse (about 11) or Recruit a Member (a free member up to 8). The space is about even with the next best; the closing run on top is worth up to +40.
- Bot check: survives: three bot levels, the experts, and the mechanism is visible on paper. Coordinator note: round III's +10 contests together with buy-10 cash-outs are upstream of this. A contest-side change could fix it without touching Last Call.

**Crunch Time** (II): "+2 purple. Your next two turns come right after this one."
- Verdict: NUMBER: +2 → +4 purple. Cory likes the card ("Crunch Time is great"); the payout is the problem, not the idea.
- Strategic: Hard DEAD (contender 9%, chosen 2%), Very Hard filler-shaped MIXED (chosen 2%, thin 62%).
- Fun: experts 1.7 / 1.7 (21 ratings). "nobody took it; two turns in a row for +2 purple isn't worth a placement" (g11 Dee).
- Fits: yes.
- Evidence: Hard and Very Hard choice logs, plus the experts. The new lift (Hard +9, Very Hard +14 STRONG, lens SKILL+) is Last Call's: I counted the raw choice files. 65% (Hard) and 69% (Very Hard) of the seats that took Crunch Time also took Last Call, against about 20% of all seats. More than half took Crunch Time after their own Last Call that same round, as a leftover space during the closing run, where it is just +2 purple.
- Played turn: round II, 4 players, Ben in seat 2. Crunch Time gives +2 purple and he places his next two minions now (say Promote, +3 red, and Party Gifts). Those spaces would mostly still be open on his normal turns, and he runs out of minions early, so rivals get the last word on contests. Against Sleep In: +5 purple and a skip that moves him later. Crunch Time is 3 purple and position behind. At +4 the rush costs 1 purple against Sleep In and feeds Courier and Hot Streak.
- Bot check: survives (the experts never took it either).

**Crowd In** (III): "+3 purple. +1 minion this round."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK, Very Hard MIXED (close 5%). An extra round III minion is an extra recruit or a buy-10.
- Fun: experts 3.4 / 3.3. g11 rated it 4 to 5 because Stunt Double copied it: "copying it with Stunt Double won me the game" (g11 Ben).
- Fits: yes.
- Evidence: Normal +4, Hard +3, Very Hard +6: mildly positive, and STRONG at no level.
- Bot check: survives. The g11 swing is a copy problem (Stunt Double), for the coordinator.

## Members

**Courier** [3 purple + 3 any, worth 1]: "Whenever you take two turns in a row, +1 of each other color."
- Verdict: KEEP. Re-price after Last Call settles, since that's where it pays.
- Strategic: Hard MIXED (chosen 3%), Very Hard MIXED (5%). It's rarely bought.
- Fun: experts 4 / 4 (2 players), "reads more blue/yellow" (fits 0/0/2).
- Fits: unsure. It pays other colors.
- Evidence: Normal +5 (24 owners), Hard 19 owners, Very Hard +17 (27 owners): too few to read at every level. From the raw games, Very Hard owners who also took Last Call won 10 of 16; those who didn't won 4 of 14.
- Bot check: its wins ride Last Call's closing run (every pair of turns in a row pays). Capping Last Call would cut its income.

**Clockmakers** [2 purple + 3 any, worth 2, counts as 2]: "Round Start: take your first two turns in a row."
- Verdict: KEEP.
- Strategic: Hard and Very Hard MIXED (close 5%).
- Fun: experts 2.8 / 2.6.
- Fits: yes.
- Evidence: Normal −2, Hard −8, Very Hard +4: nothing consistent.
- Bot check: survives.

**Night Owls** [6 purple + 2 any, worth 2, counts as 2]: "Once per round: after you place your last minion, +1 minion, placed right away."
- Verdict: KEEP.
- Strategic: Hard DEAD (chosen 2%), Very Hard MIXED (5%).
- Fun: experts 3.0 / 2.6, "8 cost for one more placement barely breaks even unless you're short of turns" (g1 Ava).
- Fits: 4 yes / 1 no.
- Evidence: too few owners at every level (Normal 9, Hard 10, Very Hard 18). On paper, bought in round I it's about 3 extra placements for 8, which is fair. Bought late, it's poor.
- Bot check: can't read it.

**Early Birds** [2 purple + 1 any, worth 2, counts as 2]: "Your turns can't be skipped."
- Verdict: REWORK. Direction: it shouldn't switch off its owner's own Last Call. Either it ignores only rivals' skips, or its owner chooses whether to ignore a skip. In the choice version the owner always comes out ahead, so it's an upgrade, not a fake choice.
- Strategic: Hard MIXED, Very Hard MIXED (close 9%). It blocks your own Sleep In skip (which the g11 players liked: "with Early Birds the skip disappears, free +5/+6") and your own Last Call block (bad). It also blanks rivals' Hold Up, which starves Pocket Watch and Gossip ("Early Birds blanks the skip", g11 Cal).
- Fun: experts 2.3 / 2.5. "it's a defensive card in the color about skipping" (g11 Ava, fits: no).
- Fits: in theme, yes; in play, it fights Purple's best card and Purple's skip payers.
- Evidence: lens TRAP. Normal −6 WEAK, Hard −15 WEAK, Very Hard −13 WEAK, 2p −15 WEAK, 3p −11. That's bots at every level plus the experts.
- Played turn: round III, 4 players. Ava owns Early Birds and takes Last Call with 4 minions left: +5 purple, +4 followers, but her turns aren't skipped, so she keeps snake order and gets no closing run. A non-owner on the same space gets the run that was worth up to +40 in g1. With Sleep In instead she gets +6 purple and no skip, against a non-owner's +6 and a skip that would have moved her later: about a wash.
- Bot check: half survives. A good player wouldn't pair it with Last Call (that part is a bot trap), but then it's a 2-body whose ability rarely matters. Weak either way.

**Bouncers** [1 purple + 3 any, worth 2, counts as 2]: "On Recruit: the next two rivals' turns are skipped."
- Verdict: KEEP.
- Strategic: Hard AUTO-PICK (chosen 14%), Very Hard MIXED.
- Fun: experts 3 / 2 (1 player): "the skip had nothing left to hit" (g11 Cal).
- Fits: yes.
- Evidence: Normal −7 WEAK, Hard −2, Very Hard +2, 2p −8. Only Normal reads weak. It became worth 2 early today; the stronger bots read it even.
- Bot check: survives. The sting is near zero (a skip moves a rival later), so it's a 2-for-4 body with a gift to Pocket Watch.

**Gossip** [3 purple + 3 any, worth 1]: "Whenever a player's turn is skipped, +1 follower."
- Verdict: KEEP (watch). Read again on the fixed skips before any price change.
- Strategic: Hard DEAD (contender 8%), Very Hard MIXED (chosen 4%). It's rarely bought.
- Fun: experts 3.0 / 2.7 (6 players): "skips didn't come often enough to pay 6" (g1 Ava).
- Fits: yes.
- Evidence: Normal +16 (20 owners, 8.6 followers for 6), Hard 15 owners, Very Hard +8 (21 owners, 7.0 for 6): too few to read everywhere, and owners win. Those payouts include phantom skips from repeated Last Call, which are fixed now. The experts paid 6 and broke even.
- Bot check: rarely bought, wins when owned, inflated payout. Nothing to act on.

**Timekeepers** [1 purple + 3 any, worth 1]: "Game end: +1 follower per purple member you have."
- Verdict: KEEP (flagged). It reads weak at two levels, but a number wouldn't aim at the cause (below).
- Strategic: Hard AUTO-PICK (chosen 16%), Very Hard MIXED (close 9%). Bots buy it in 80-94% of games where it shows.
- Fun: paper only.
- Fits: yes (Cory's go-deep card).
- Evidence: Normal −2, Hard −5, Very Hard −12 WEAK. From the raw games, owners with 3 or more purple members won no more often (Hard 12 of 49, Very Hard 4 of 33) than shallow owners. On paper a deep purple cult scores big: Shift Crew (4), Bouncers (2), Clockmakers (2) and itself (1) = 9 purple members → 10 followers for 4.
- Bot check: unexplained. Paper says strong when deep, and the bots say deep owners lose. *(guess)* Purple seats lose (Hard −7), and Timekeepers is what Purple seats buy. Making it cheaper or worth more would pay a cult that is already losing for other reasons.

**Closer** [2 purple + 3 any, worth 1]: "When you place the last minion of the round: +4 purple."
- Verdict: KEEP.
- Strategic: Hard and Very Hard MIXED (chosen 3-4%). It needs the last seat, which Last Call or the snake end gives.
- Fun: experts 3.7 / 3.7, "won my round III purple" (g1 Ava).
- Fits: yes, exactly the clock fantasy.
- Evidence: Normal −7 (32 owners), Hard +14 (24), Very Hard +10 (31). The stronger bots read it as good; Normal misjudges round-end timing (brief confound).
- Bot check: survives; better play reads it higher. Revisit only if Last Call changes.

**Hot Streak** [2 purple + 3 any, worth 1]: "On Use, once per game: +3 followers per turn in a row you've taken just before this one."
- Verdict: KEEP (Cory: "I like hot streak").
- Strategic: Hard MIXED (chosen 4%), Very Hard MIXED. Its use reads DEAD in the choice log only because the log can't see On Use (bug log row 12); bots do use it.
- Fun: experts 4.0 / 4.0 (5 players). In g4 a rival buried it as "made for Ben's four-in-a-row Last Call finish (+9 or more)".
- Fits: yes.
- Evidence: Normal −2, Hard +3, Very Hard +15 (35 owners, 5.3 followers for 5); the lens interim called it SKILL+. Good when owned by better players.
- Bot check: survives and grows with skill. *(guess)* Like Courier, it pays on Last Call's run.

**Shift Crew** [2 purple + 2 any, worth 4, counts as 4]: "Worth 4 followers."
- Verdict: KEEP (Cory's Nov 1 call).
- Strategic: Hard AUTO-PICK, Very Hard MIXED (close 9%).
- Fun: experts 2.4 / 2.7: "4 for 4 is just buying followers with a body that can be Poached" (g11 Dee).
- Fits: no colour identity (a body).
- Evidence: Normal −2, Hard −6, Very Hard +1, 3p −9: even to slightly weak.
- Bot check: survives.

**Go-Getter**, **Late Risers**, **Extra Shift**: 15-deck only. No evidence this round.

## Artifact

**Pocket Watch**: "Whenever a player's turn is skipped, +1 purple."
- Verdict: NUMBER: +2 purple per skip. Cory kept it on Oct 30, and on Nov 1 said it should pay "only when the skip occurs" (already so).
- Strategic: experts 3.3, but the g11 holders: "it paid 3 purple all game; skips are rarer than they look once Early Birds and late-round turns run out" (g11 Cal, 2/2); "the artifact I least wanted" (g11 Dee, 1/1). Earlier games: "quietly paid 6-7 purple" (g1 Ava).
- Fun: 3.0.
- Fits: yes (10/10).
- Evidence: weak at every level and table size: Normal −5, Hard −11, Very Hard −7, 3p −10, 2p −6. That's while phantom skips were still paying it, so the fixed game reads lower.
- Played turn: round II, 4 players. A typical round has about one Hold Up and one Sleep In skip, plus a Last Call block of 1 to 3 turns, so 2 to 4 skips: 2 to 4 purple a round, 6 to 10 over the game at +1. Recruiter at Red tables fires about 10 times for +2 (about 20 red), and Fence and Money Changers read +8 to +11. At +2 a skip, Pocket Watch pays 12 to 20 purple, enough to swing a purple contest once.
- Bot check: survives. The experts, who aim skips, also got little.

**Purple in a paragraph.** Purple plays its fantasy only at the end of the round: "act when it matters most" means "act last". Last Call carries the whole color: STRONG at every bot level, the top expert space, and the deciding move in three expert games. The members that win when owned (Courier, Closer, Hot Streak) win on its closing run. Cards that move you earlier (Right Away, Crunch Time) are filler. A skip on a rival is often a gift, so Hold Up, Bouncers and Pocket Watch barely land. The weakest link is Early Birds (TRAP at every level, and it switches off its owner's Last Call), followed by Pocket Watch. Purple's main-color lift is still 0 to −7, because its one strong card is a space anyone can take. The single change that would help Purple most is capping Last Call's round III block. Paying Crunch Time and Right Away enough to make rushing a real choice comes next, and Pocket Watch at +2 is the cheap fix.

---

## For the coordinator (outside these two colors or not a design call)
1. Red numbers at Hard are provisional (about 50 Red games). Re-read Patriarch (Hard +15 vs Very Hard −3), Recruit Bonus (+11 vs −8) and Recruiter (on the new shop payout) when the 1:00pm runs land.
2. Panel's words ("another of your members") against its behavior (reaches any cult, like Promote and Demote): Cory's call. Bug log row 21 (a swapped-in Panel fires for the swapper) is the same card.
3. The choice log can't see On Use, so "DEAD" use rows (Hot Streak) mean nothing; bots do use them.
4. Copies multiply what's biggest: Mentor & Protégés through Greatest Hits (g9), Crowd In through Stunt Double (g11), steal On Recruits through Tryout and Encore.
5. Round III contests (+10) together with buy-10 cash-outs make the last seat decisive. This is upstream of Last Call, Courier, Closer and Hot Streak.
6. Old Maid pushed onto a rival by Demote before round III is past Cory's "mild sting".
