# Review: Blue (market) and Magenta (thieves), balance-1.0, deck 10

Reviewer: senior-designer pass, 2026-11-01, re-checked against the final data at about 12:45pm Eastern. Cards are from the live board (live-board.mjs). Costs are the full price (the +1 wild included).

Instruments: N = Normal bots (389 games at 4 players, 203 at 3, 225 at 2), H = Hard (220 games, 171 of them at 4 players), VH = Very Hard (249 games, 197 at 4 players), CL = choice log (Hard 230 games, Very Hard 317 games), X = expert AI players (12 games; Blue sat in g2, g4, g5, g10 and Magenta in g2, g3, g6, g7, g9, g11), P = paper (my own reading, marked). Lift = owner win share minus expected for member count, 4 players unless stated. The red tables played on the old swap build are left out of N and H until the red re-runs land at 1:00pm; none of my verdicts rests on a number close enough to move with them.

What the builds were:
- Every final bot game ran with **Fence** as "Whenever any player steals, +1 magenta.", **Lie Low** with its Nov 1 text, the Scouts fix (Scouts' sweep pays **Bargain Bin** and **Patroness**), and Promote and Demote as Cory made them.
- **Stash** paid one magenta too many in every bot game (+3/+4/+5 instead of the printed +2/+3/+4). Its bot numbers describe a stronger card than the printed one.
- Expert games g1 to g10 used the old Fence ("Whenever you steal, +1 magenta."); g11 and g12 used the new one. The Scouts fix reached g10 onward.
- Not in the 10-card deck, so no data: Blue's Restockers and Plus-Ones; Magenta's Crew, Robin Hood, Snitch and Fixer. Paper reads at the end of each color.

## Changed since interim
1. **Lie Low**: KEEP became REWORK. Four more expert games (g6, g7, g9, g11) call its round III shield too strong. In g6 no Green copy spaces were at the table, so copies are not the whole cause, as I had assumed. N 2-player +17 STRONG and H +5 lean the same way.
2. **Double Agent**: KEEP became NUMBER (price 7). VH −17 WEAK and N 2-player −21 WEAK; N −4 and H −3 lean the same way; the lens tags it SKILL− (better bots like it less). Hard no longer flags it MISJUDGED on spaces, so the bot number is no longer suspect.
3. **Shopaholics**: NUMBER (price 8) became KEEP. The interim N −8 is gone (N +4 on 29 owners, H +10 on 25): too few owners to read at every level, and the owners it has don't lose.
4. **Bodyguards**: dropped my "worth 3 is the safe move". It's too few to read at every level, but the small samples lean strong (VH +19 on 24 owners), the three experts who bought it said it did its job, and it blocks every swap beyond its text (bug log row 19). Don't raise it.
5. **Fence**: its text changed to "any player steals" before the final runs. It is now the strongest artifact at every level (N +8, H +19, VH +12; N 3-player +16, 2-player +32). My interim risk line called this. Cory accepted "a little strong" on Nov 1, so the verdict stays KEEP with a 2-player flag.
6. **Shake Down**: dropped "watch Very Hard". The interim VH −18 was noise; it's +2 now.
7. **Spree**: dropped the Very Hard dip. The interim VH −16 is +3 now.
8. **Window Shopper**: NUMBER stands, and now all three levels lean weak (N −13 WEAK, H −6, VH −6).
9. **Snobs**: KEEP stands, with a new flag. Experts in g4 and g5 saw it pay 13 and 18 because multi-count blue members raise its count; the bots don't see this.
10. **Choice-log tags**: Snobs, Window Dressers, Connoisseurs and Kingpin are no longer REAL CHOICE at Very Hard. No card in either color reaches 10% close calls there now. Peek no longer rises with skill.
11. **Recruit Twice**: REWORK stands. H is now −11 WEAK. Experts in g5 and g10 found the round III cash-out works, so the rework now targets round II only.

---

## Blue (market): "I shape the row, then I buy a lot of it"

### Savings (round I space)
"+2 blue in round I, +3 in round II, +4 in round III. Before you recruit, you may send one shop member to the bottom of the pile, then refill."
- **Verdict: KEEP.**
- Strategic: it's the fuel space. CL H MIXED (31% thin), VH MIXED. Players take it when little else is left, which is a fuel space's job.
- Fun: X 2.4 / 2.3, 14/14 say it fits. Most players called it "plain blue". Two players (g5 Ava, g4 Cal) took it to deny the Bargain Bin holder, and g5 Ava refused the optional send because it fed a rival's Bargain Bin.
- Fits: yes.
- Evidence: lift N +1, H −1, VH +1, N 2-player +1. Flat at every level.
- Bot-artifact check: nothing to survive.

### Out of Style (round I space)
"Send every shop member of one color to the bottom of the pile, then refill. +1 blue per member sent. +1 blue."
- **Verdict: KEEP.**
- Strategic: choosing the color to wipe is a real puzzle ("deny a rival or keep my own cheap blues", g2 Cal 4/4). CL H MIXED (24% chosen in round I), VH MIXED.
- Fun: X 3.0 / 3.0. Six players across g2, g5 and g10 said it's an engine piece for the Bargain Bin holder and "a few blue" for everyone else.
- Fits: yes, the purest "shape the row" space.
- Evidence: lift N −2, H +2, VH −2, N 3-player −7, N 2-player −8. Flat at 4 players.
- Bot-artifact check: nothing to survive at 4 players.

### Peek (round I space)
"Look at the top 4 of the pile and put them back in any order. This turn your recruit may be one of them. +2 blue in round I, +4 in round II, +6 in round III."
- **Verdict: KEEP.**
- Strategic: it's the biggest plain blue from round II on, plus pile access. CL H AUTO-PICK (59% auto), VH MIXED. Strong players used the recruit from the pile ("got me Heiresses and Brokers", g4 Cal 4/5).
- Fun: X 3.1 / 3.1. Most players said the pile look mattered little (g2, g5, g10).
- Fits: yes.
- Evidence: lift N −2, H −4, VH −3. Flat to slightly low. The interim "rises with skill" no longer holds.
- Bot-artifact check: inside noise at every level.

### Recruit Twice (round II space)
"Recruit twice this turn. +3 blue."
- **Verdict: REWORK (round II only).**
- Strategic: the second recruit matters only with spare resources, which round II rarely has. CL H and VH MIXED, chosen 3% in round II at both levels, against 7% in round III.
- Fun: X 3.1 / 3.1. Round II reads were flat: "Mostly read as +3 blue for me" (g2 Ben). Round III reads were good: "cashing 15 in one turn and denying Ben the same was a good moment" (g10 Ava 4/4); "with a big pile, two buys are worth more than any space's raw gain" (g5 Ben 4/4).
- Fits: yes in fantasy ("buy a lot").
- Evidence: lift N −4, H −11 ±3 WEAK, VH −4, N 3-player −3, N 2-player −10. Every level is negative. The +3 blue was already tried as a number and stayed about −6 (decisions.md, Nov 1 round 7), so a price-style fix is spent.
- Played turn: round II, 4 players (Blue, Red, Magenta, Green). Ava holds 7. Recruit Twice gives +3 blue, so 10. If the shop shows two 4-cost members (Trendsetters and Window Dressers), she buys both, 6 followers' worth, with 2 left. The usual shop has one 5-cost member she wants and nothing else worth 5, so she gets +3 blue and one buy. Best other choice: **Bury** on an 8-cost card gives +5 blue and denies that card, then one normal recruit. Recruit Twice wins only in the two-cheap-members case.
- Direction: reward recruiting two members in round II, in the shape Cory picked for fuel spaces, for example followers or blue back when both recruits are members. No discount. Leave round III as it is; experts say it works there.
- Bot-artifact check: Hard, the stronger of the two big samples, is the most negative. The finding survives better play.

### Bury (round II space)
"Send a shop member to the bottom of the pile, then refill. Gain blue equal to half its cost, rounded down. +1 blue."
- **Verdict: KEEP (watch Normal).**
- Strategic: CL H AUTO-PICK (64% auto), VH MIXED. The probe gives 5.9 to 6.0 per placement, top of the round II band.
- Fun: X 3.4 / 3.1. Four g4 players called it "backwards": it pays most for the card nobody can afford. The g5 and g10 players liked it ("Burying HR for 7 blue felt great", g10 Ben 4/4; "both denial and income", g5 Cal).
- Fits: yes.
- Evidence: lift N −10 ±2 WEAK, H −3, VH −3, N 3-player +1, N 2-player −8. Normal says weak; Hard and Very Hard sit inside noise.
- Why no change: the probe puts it at the top of its band, and only the weakest bot level flags it. The bigger the card a rival is saving for, the more Bury pays, so the payout and the denial often land on the same card (g4 Cal: an 11-cost bury for +6 that also denied Dee Smooth Talkers). Cory refused full cost as "way too strong" (Oct 20).
- Bot-artifact check: Normal's −10 doesn't hold at Hard or Very Hard. It reads as Normal bots burying badly.

### Spree (round III space)
"Recruit 3 times this turn. +5 blue."
- **Verdict: KEEP.**
- Strategic: in round III it breaks the one-recruit limit. CL H AUTO-PICK, VH MIXED.
- Fun: X 3.1 / 3.3, split by build. "Three recruits with Trendsetters and Connoisseurs refunding blue was the highlight of my game" (g4 Ava 4/5); "three recruits let me do Con Men plus Agents in one turn" (g5 Ava 4/5). The other side: "mostly three follower buys" (g2 Ava 2/2).
- Fits: yes.
- Evidence: lift N −3, H −7 ±4, VH +3. Cory: "I still don't think this is weak" (Oct 29). The interim VH −16 is gone.
- Bot-artifact check: Hard's −7 flips to +3 at Very Hard. No finding.

### Bargain Bin (Blue's artifact)
"Whenever shop members go to the bottom of the pile, +1 blue." Pays once per batch, on turns only.
- **Verdict: NUMBER: +2 blue per batch.** Between-round refreshes stay out (Cory: "too strong between rounds").
- Strategic: it's a choice among artifacts at the start of the game.
- Fun: X 3.3 / 2.9. The experts split. Before the Scouts fix it was "the artifact I'd least want" (g2 Ben, g4 Ben, g4 Cal). After the fix, its engine owners liked it: "Trickled about 15 blue over the game and won me two blue contests" (g10 Ben 4/4); "ticked about 15 times off my churn" (g5 Cal 4/4).
- Fits: yes.
- Evidence: owner lift N −13 ±3 (169 owners), H −4 ±4 (90), VH −10 ±4 (92), N 3-player −9, N 2-player −13. It's last among artifacts at Normal and Very Hard. Fence is +8 to +19 and Money Changers is high at every level.
- Played turn: round I artifact pick at a 4-player table. Bots tick it about 8 times a game, which is 8 blue. With +2 that's about 16, close to Fence's take. An engine player (Trendsetters, Out of Style, Scouts) ticks about 15 times by the experts' count, so +2 gives that player about 30 blue over a game. That's strong but buys blue contests the color is meant to win. Best other choice at pick: Fence, which now pays every steal at the table.
- Risk, in one line: at +2 an engine owner could sweep blue. Blue sweeps are 3% (N), 6% (H) and 9% (VH) now, and the sweeper won the game only 20 to 40% of the time.
- Bot-artifact check: all three bot levels say weak. The experts' engine shows the ceiling, not the average, so the finding survives.

### Patroness (member)
"[5 blue + 3 any = 8, worth 1] Whenever a shop member goes to the bottom of the pile, +1 follower."
- **Verdict: NUMBER: worth 3 (counts as 3). Also fix the words.**
- Strategic: CL H DEAD (1% chosen in rounds II and III), VH MIXED but 1% / 2% chosen. Too few owners to read at every level (N 6, H 9, VH 7).
- Fun: X 4.2 / 3.2 (6 players). When it was the plan it paid: "about 12 followers over the game for 8" (g5 Cal 4/4); "With Trendsetters churn it paid me about 8" (g10 Ben 4/4). It's also a magnet for Poach and Promote: "I bought it and Ben scored it" (g10 Cal 5/3); g2 Cal said the same about Poach.
- Fits: yes. It's Blue's payoff card.
- Evidence: CL dead at Hard and nearly dead at Very Hard. The experts' 8 to 12 followers for an 8-cost card match my paper count.
- Wording: the engine pays once per batch (Cory, Oct 21), but "a shop member" reads per card. Bug log row 7. It should read like Bargain Bin: "Whenever shop members go to the bottom of the pile, +1 follower."
- Played turn (P): round II, 4 players with Blue on the table. Cal pays 8. From then on the table makes about 7 to 9 bury batches, so he gets worth 1 plus about 8, about 9 for 8. Best other choice: Snobs (6 cost, worth 2, 13 to 18 at game end in the expert games) plus 2 kept. At worth 3 Patroness is about 11 for 8. That's still modest, but it's no longer dead, and it costs a thief more to take. If it stays dead, the next step is price 7.
- Bot-artifact check: the bots never buy it, and the experts who bought it got a fair but not great return. The finding survives.

### Snobs (member)
"[3 blue + 3 any = 6, worth 2, counts as 2] Game End: +1 follower per blue member you have."
- **Verdict: KEEP. Flag for human tables.** It carries Blue.
- Strategic: CL H and VH AUTO-PICK (chosen 22% at both). It's the reason to go deep in blue members.
- Fun: X 4.2 / 3.4. "Paid 13 at game end off a 6-cost card" (g4 Ava 4/5). "+18 because member counts multiply it; probably too strong with 3-count blue bodies" (g5 Cal 5/5). Two g5 players made it their second change in their META notes.
- Fits: yes.
- Evidence: lift N −1, H +2, VH −3, N 3-player +5. The bots read it as even.
- Flag: Window Dressers and Trendsetters count as 3 each, so a cult of four blue cards can count 10 or more. The experts saw 13 and 18. The bots don't build that way. If human tables see the same, the lever is Cory's: whether Snobs counts members or cards.
- Bot-artifact check: the bots don't stack multi-count blues. Better play would push it up, not down.

### Window Shopper (member)
"[2 blue + 3 any = 5, worth 1] On Recruit: send 1 shop member to the bottom of the pile. +1 of its color. Round Start: send 1 shop member to the bottom of the pile. +1 of its color."
- **Verdict: NUMBER: worth 2 (counts as 2).**
- Strategic: CL H AUTO-PICK (12% chosen), VH MIXED. Bots buy it 53 to 72% of the time it shows.
- Fun: X 3.0 / 3.0 (one player): "small but steady bins and resources" (g5 Cal).
- Fits: yes.
- Evidence: lift N −13 ±3 WEAK, H −6 ±5, VH −6 ±6, N 3-player −9, N 2-player −20 WEAK. Every level leans weak. Cory kept it for real games to judge (Oct 30); this changes a number, not the card.
- Played turn (P): round II, 4 players. Ava has 5. Window Shopper gives worth 1, +1 now and +1 at the start of round III: about 3 value plus two small buries. Best other choice in the same price band: Trendsetters (4 cost, worth 3, a bury on every member recruit), about 3 followers plus the same shop control for 1 less. At worth 2, Window Shopper reaches about 4 value.
- Bot-artifact check: Normal is the most negative and the stronger bots are milder, but all point the same way.

### Shopaholics (member)
"[3 blue + 6 any = 9, worth 3, counts as 3] You can recruit twice each turn."
- **Verdict: KEEP (changed from price 8).**
- Strategic: CL H MIXED (6% chosen), VH MIXED (4%). Bots own it in only 17 to 28% of the games it shows.
- Fun: X 2.7 / 2.0. "9 was always one turn out of reach" (g2 Cal); "extra recruits matter less than they sound because follower buys come in 10s" (g10 Ben 2/2).
- Fits: yes. It's Cory's own "always buy twice".
- Evidence: too few owners at every level (N 29, H 25, VH 18), and those owners don't lose (N +4, H +10). The interim N −8 was the reason for price 8; it's gone.
- Note: the low buy rate and "out of reach" are a feel note, not a finding. If Cory wants it bought more, price 8 is the lever. It shares the second-recruit problem with Recruit Twice: re-read it after that rework.
- Bot-artifact check: too few owners to say.

### Window Dressers (member)
"[2 blue + 2 any = 4, worth 3, counts as 3] On Recruit: send 3 shop members to the bottom of the pile, then refill."
- **Verdict: KEEP.**
- Strategic: CL H AUTO-PICK, VH MIXED (9% close). With Peek it lets you set the next row (g4 Dee).
- Fun: X 3.3 / 3.5. "3 bodies for 4 is fair" (g10 Ava).
- Fits: yes.
- Evidence: lift N +1, H −4, VH −8 ±4, N 3-player −12. The levels disagree.
- Bot-artifact check: VH −8 is the one lean. Watch it, no change.

### Trendsetters (member)
"[2 blue + 2 any = 4, worth 3, counts as 3] Whenever you recruit a member, send 1 shop member to the bottom of the pile, then refill."
- **Verdict: KEEP.**
- Strategic: CL H and VH MIXED (7% / 8% close). Each member recruit buries a threat.
- Fun: X 4.5 / 4.5, the best fun score in either color. "My favorite card" (g4 Ava 4/5); "it powered Patroness and Bargain Bin all game" (g5 Cal 5/5).
- Fits: yes.
- Evidence: lift N −5, H −2, VH −1, N 2-player −13.
- Bot-artifact check: Normal's lean fades at Hard and Very Hard. Normal bots don't use the denial.

### Connoisseurs (member)
"[1 blue + 3 any = 4, worth 2, counts as 2] Whenever you recruit a blue member, +1 blue."
- **Verdict: KEEP.**
- Strategic: CL H and VH MIXED. It's a sequencing card: buy it before Snobs and Critic (g4 Ava).
- Fun: X 2.7 / 2.7. "Filler" (g2 Cal); "the body was what mattered" (g5 Cal).
- Fits: yes.
- Evidence: lift N −5, H +1, VH −3. The interim H −9 is gone.
- Bot-artifact check: none needed.

### Doormen (member)
"[1 blue + 4 any = 5, worth 2, counts as 2] Whenever a rival recruits more than once in a turn (swaps count), +1 blue."
- **Verdict: REWORK (low priority).** The trigger, not the number.
- Strategic: CL H and VH MIXED. Players buy it as a 2-follower body for 5; the ability doesn't drive the pick.
- Fun: X 1.3 / 1.3 (3 players), the lowest in both colors. "Its trigger never fired once; dead card" (g4 Ava); "bought only as a blue body for Snobs" (g5 Cal).
- Fits: yes in idea (Blue watching rivals shop), no in play.
- Evidence: X (3 of 3 at 1 or 2) and paper. By paper count it triggers about 2 times a game without Red. The bots carry it on its 2 followers: lift N +2, H +4, VH −9 ±5.
- Played turn: round II, 4 players without Red. Ben owns Doormen. Cal takes Recruit Twice, so Ben gets +1 blue, the only trigger of the round. Best other buy at 5: Trendsetters (4, worth 3) does more every turn.
- Direction (my guess): tie it to a rival event that happens most rounds, such as a rival taking a Blue space, so rivals see a toll and weigh it.
- Bot-artifact check: not a strength finding. Better bots wouldn't make the trigger fire more.

### Regular (member)
"[1 blue + 2 any = 3, worth 1] Whenever you buy followers, +1 blue."
- **Verdict: KEEP.**
- Strategic: CL H and VH MIXED.
- Fun: X 3.7 / 4.3. "Quietly the best cheap card I had" (g5 Ben 4/4).
- Fits: yes.
- Evidence: lift N −6, H +2, VH −7, N 2-player −15. The levels disagree, and the experts like it.
- Bot-artifact check: none needed.

### Critic (member)
"[1 blue + 2 any = 3, worth 1] Whenever a rival recruits a blue member, +1 follower."
- **Verdict: KEEP.**
- Strategic: CL H and VH MIXED. It pays about 4 followers in all over a game by the bot count (3.5 to 4.0).
- Fun: X 1.5 / 2.0 (2 players). "The trigger never fired" (g4 Ava); "bought it as a 3-cost body" (g10 Ben).
- Fits: yes.
- Evidence: lift N −2, H +15 ±6 STRONG, VH +4, N 3-player −18 WEAK. The levels conflict.
- Bot-artifact check: only Hard flags it, and 3 players flags the opposite. No finding.

### Not dealt in the 10-card deck (paper only)
- **Restockers** "[2 blue + 2 any = 4, worth 2, counts as 2] On Use, once per game: send the whole shop to the bottom of the pile, then refill." KEEP for the 15-card deck. It's a timing card for Patroness and Bargain Bin.
- **Plus-Ones** "[2 blue + 2 any = 4, worth 2, counts as 2] On Recruit: recruit again this turn." KEEP. It's the honest version of Recruit Twice on a body, and it feeds Doormen.

### Blue as a color
Blue plays like its fantasy in its shaping half. Out of Style, Peek, Trendsetters and Window Dressers are where the experts had fun, and with the Scouts fix the churn engine (Trendsetters, Bargain Bin, Patroness) worked in g5 and g10. The buying-a-lot half lands only in round III: Recruit Twice and Spree are good cash-outs there and weak in round II. Snobs carries the color, and it may run big with multi-count blues at human tables. Bargain Bin is the weakest link by the bots (last artifact at Normal and Very Hard), with Recruit Twice next. Main-color lift is N −2, H +5, VH −3: about even. The single change that would help most is Bargain Bin at +2 blue, since it's the piece every Blue player starts with. The Recruit Twice rework comes second.

---

## Magenta (thieves): "Your pile is my pile"

### Help Yourself (round I space)
"Steal 3 resources in round I, 4 in round II, 5 in round III, split among rivals as you choose."
- **Verdict: KEEP.** The trouble is what multiplies it (Desperado, copies), not the space.
- Strategic: CL H and VH AUTO-PICK, taken 80 to 90% of the times it's offered in round I. It's a first-seat fight.
- Fun: X 4.1 / 3.4, 22/22 say it fits. "Fair at 3 to 4, broken at 10 with Desperado" (g9 Dee). In g11 it often had one legal target once Lie Low and Bodyguards were out: "a choice about whom you were allowed to hurt" (g11 Cal 4/4).
- Fits: yes, the color in one line.
- Evidence: lift N 0, H 0, VH −1, N 2-player +10. Probe 3.3 / 4.4 / 5.5 per placement, top of the round I band where Cory put it.
- Bot-artifact check: flat at every level at 4 players.

### Stash (round I space)
"+2 magenta in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III)."
- **Verdict: REWORK.** Cory already called the cut (Oct 31: "Help Yourself is enough"); this confirms it.
- Strategic: CL H and VH AUTO-PICK. Players take it for the magenta contest; it's rarely a dilemma.
- Fun: X 2.7 / 2.7. "Plays like White's Allowance in a magenta coat" (g6 Ben); "a flat filler space in a color about taking things" (g11 Cal).
- Fits: weakly. It's the one Magenta space that touches no rival.
- Evidence: lift N −2, H −2, VH −3, N 3-player −7, all while it paid one magenta more than printed (bug log row 17). The printed card is weaker still. X and CL agree.
- Played turn: round I, 4 players, at the printed numbers. Stash gives 2 magenta and +1 follower if you recruit a member: about 3 value. Best other choice: **Help Yourself** gives +3 and costs rivals 3, a 6 swing. Players took Stash only for the contest or to deny it (g7 Ava, g2 Ava).
- Direction: Cory's standing pick for the slot, "Steal 1 of each contest's color from its leader, if it isn't you", fits the color and touches rivals. I have no new pitch.
- Bot-artifact check: the experts are skilled players and agree with the bots, so it survives.

### Lie Low (round I space)
"Steal 1. Rivals can't steal or recruit from you this round. +1 magenta."
- **Verdict: REWORK (changed from KEEP).** The round III shield, not the space's gain.
- Strategic: in round III it's the strongest defensive play in the game. X 4.5 strategic across 23 ratings, the second highest in the game after Last Call. Experts named it a decisive or too-strong round III play in g2, g3, g6, g7 and g11. The bots barely take it in round III: CL H and VH MIXED, chosen 14% in round I and 4% in round III.
- Fun: X 3.3. It's great for the taker and bad for whoever is left: "it pushes all theft onto whoever's left" (g11 Cal 4/3); "once per round to one player is too much protection" (g6 Ben 5/3). Two META notes name it as the first or second thing to change (g6 Ben; g11 Cal "after that, look at Lie Low in round III"). g11 Dee asked for a cap on steals per victim per round.
- Fits: yes, Magenta's wall.
- Evidence: X (5 games, 4 different tables) and bots: N 2-player +17 ±6 STRONG, H +5 ±4, N 3-player +4, VH +2, N 0. At interim I traced its power to copied steals. g6 had no Green copy spaces and it still decided the game, so copies are not the whole cause. In g11, Echo and Reprise also copied Lie Low itself, making two players immune in one round.
- Played turn, from g6 round III (3 players: Purple, Magenta, White): Cal holds the magenta and white leads, two +10 contests. Ava has four placements stacked at the end of the round (Last Call). Cal takes Lie Low with his first minion: steal 1 plus 1 magenta, so 2 resources, and neither pile can be touched all round. Ben buys Bodyguards, so Ava's four placements have no one to steal from. Cal wins both contests and the game at 66. Best other choice: Help Yourself, +5 for Cal and −5 for his rivals. Lie Low gave 2 resources and protected about 20 followers of contests.
- Direction (my guess; Cory designs): shrink what the shield covers or how long it lasts, not the gain. Two shapes the experts proposed: block resource steals only, so Poach and Shake Down still reach you; or protect you only until your next turn. Cory also said on Oct 31 that Lie Low "may go too" ("it's hard to track"). Bodyguards plus Lie Low together funnel every steal onto one or two players (g6, g11), so judge the two together.
- Bot-artifact check: the bots take it 4% of the time in round III because short rollouts can't see the theft it prevents. Better play would value it more, so the finding survives and grows.
- Words (bug log rows 5, 18, 19): tables read it as blocking Raiders, Debt Collectors and Red's swaps. It blocks none of them, by Cory's Nov 1 call on swaps. It does block Double Agent. These are wording questions for Cory.

### Crime Wave (round II space)
"Steal half of one rival's pile of one color, rounded down. +1 magenta."
- **Verdict: KEEP.**
- Strategic: CL H and VH AUTO-PICK. Its threat shapes every pile: "the best counter to hoarding" (g9 Ben 5/5); "it makes everyone spend down early" (g11 Cal).
- Fun: X 3.8 / 3.2. It feels bad to receive and reads as fair: "a scary threat and a fair one" (g7 Cal). With Desperado it becomes a full-pile wipe (g3, all four players).
- Fits: yes, the fantasy's anchor.
- Evidence: lift N −4, H −3, VH −2, N 2-player +12. Probe 4.2 / 6.3, in band.
- Bot-artifact check: flat at 4 players.

### Shake Down (round II space)
"Choose a rival. They choose one of their members costing 5 or less, then pay you its cost or you steal it. +1 magenta."
- **Verdict: KEEP.** The interim "watch Very Hard" is dropped.
- Strategic: the victim chooses both the member and whether to pay. CL H and VH MIXED.
- Fun: X 3.8 / 3.0. It's the best dilemma when the victim has a choice: "the best dilemma on the wheel" (g7 Ava 5/4, all four g7 players at 4 or 5). It's blank or brutal otherwise: "blank against memberless or Lie Low cults, then a free steal against a tapped-out one" (g11 Ben 3/2; all four g11 players rated fun 1 to 3). A member taken this way fires its On Recruit again for the taker (bug log row 10: Accomplice stole twice). g7 players called that a trap that's easy to miss.
- Fits: yes. It's one of Cory's favorites (the other player decides).
- Evidence: lift N −3, H +1, VH +2. The interim VH −18 was noise.
- Bot-artifact check: flat. No finding.

### Poach (round III space)
"Recruit a rival's member you choose. +1 magenta."
- **Verdict: KEEP.** The feel-bad belongs to the copies.
- Strategic: CL H AUTO-PICK + MISJUDGED (Normal and the lookahead split 50%), VH AUTO-PICK. It's Magenta's round III burst. Experts aimed it at unfired once-per-game members (Extra Hand, Debt Collectors): "use it or lose it" (g7 Ava).
- Fun: X 4.0 / 3.0. "Taking Ava's unused Extra Hand was my best moment of the game" (g7 Cal 5/5). The low fun scores name copies (g2 Reprise, g3 Echo) or name Lie Low as the only defense (g6 Ava, g11 Ava).
- Fits: yes.
- Evidence: lift N +5, H −5, VH −1, N 2-player +8.
- Bot-artifact check: Normal's lean doesn't survive Hard or Very Hard.

### Fence (Magenta's artifact)
"Whenever any player steals, +1 magenta." Pays once per steal, whatever the source.
- **Verdict: KEEP as Cory's Nov 1 call. Flag 2 and 3 players.**
- Strategic: an artifact pick. It now pays on the whole table's theft, not only its owner's.
- Fun: X 2.8 / 2.8 across 12 ratings, all but two of them on the old text. On the new text, g11: "made the magenta contest easy, but it never felt exciting" (Ava 3/3); "it just paid Ava a magenta per steal she was already winning" (Ben 2/2).
- Fits: yes.
- Evidence: owner lift N +8 ±4 (172 owners), H +19 ±5 (93), VH +12 ±5 (107), N 3-player +16, N 2-player +32. It's the top artifact at Hard and Very Hard. Magenta sweeps its contest in 8% (N), 11% (H) and 15% (VH) of games at 4 players, and in 42% at 2 players.
- Why KEEP: Cory saw +17 in the test and said "seems a little strong but that's ok", with no cap. The final runs confirm that number rather than change it.
- Risk, in one line: at 2 players every steal is the owner's or aimed at the owner, so Fence pays on every theft in the game. If 2-player tables matter for 1.0, that's where to trim it.
- Bot-artifact check: strong at every level with 90+ owners. Better play doesn't answer it.

### Cutpurse (member)
"[1 magenta + 2 any = 3, worth 1] On Recruit: steal 1 resource from the rival with the most resources. Round Start: steal 1 resource from the rival with the most resources."
- **Verdict: KEEP (watch).**
- Strategic: CL H and VH AUTO-PICK (VH 9% close). It's the cheap first body.
- Fun: X 2.8 / 3.0. "Broke two magenta ties with Fence" (g6 Cal 4/4); "felt like a tax rather than a choice" (g11 Dee 2/3).
- Fits: yes.
- Evidence: lift N 0, H +7 ±5, VH +7 ±5. The two stronger levels lean strong, each about 1.4σ. With the new Fence, each of its round-start steals also pays the Fence owner.
- Bot-artifact check: the lean grows with skill but stays inside 2σ. Don't move it yet.

### Accomplice (member)
"[1 magenta + 2 any = 3, worth 1] On Recruit: steal 3 resources."
- **Verdict: KEEP.** Cory's price (Oct 29: "Accomplice stays 3").
- Strategic: CL H and VH AUTO-PICK (69% and 59% chosen). It's nearly always bought.
- Fun: X 4.0 / 4.0. "Last placement of round I, steal 3 split across two rivals, won me two contests" (g6 Ben 5/5). Taken by Shake Down or Poach, it steals again for the taker (g7 Dee; bug log row 10).
- Fits: yes.
- Evidence: lift N +6, H +8, VH −1, N 3-player +11, N 2-player +29 STRONG. It's a little strong at Normal and Hard and even at Very Hard. That would support price 4, but Cory has twice kept it below 4.
- Bot-artifact check: Very Hard answers it, so the edge fades with better play. Its 2-player number goes with Magenta's 2-player flag below.

### Grifter (member)
"[2 magenta + 6 any = 8, worth 1] On Recruit: steal 1 resource per 2 members you have."
- **Verdict: KEEP** (priced to 8 on Nov 1).
- Strategic: CL H and VH AUTO-PICK (about 20% chosen). It's a late buy for a wide cult.
- Fun: X 4.0 / 3.5. "With 16 members it stole 8" (g11 Ava 5/5). Through Tryout it's free: "too pricey to buy, perfect to Tryout" (g9 Ava).
- Fits: yes.
- Evidence: lift N +2, H +4, VH 0, N 2-player +30 STRONG. Even at 4 players.
- Bot-artifact check: none at 4 players.

### Sticky Fingers (member)
"[2 magenta + 2 any = 4, worth 1] Your steals take 1 more resource."
- **Verdict: KEEP.**
- Strategic: CL H and VH MIXED.
- Fun: X 2.0 / 2.0 (2 players, g7): "cost my contest pile", "never fit my turns".
- Fits: yes.
- Evidence: lift N −1, H −1, VH 0. Even.
- Bot-artifact check: none needed.

### Desperado (member)
"[2 magenta + 3 any = 5, worth 1] While you have the fewest followers (ties count), double what you steal from spaces."
- **Verdict: REWORK.** Cap the boost instead of doubling.
- Strategic: it's a comeback card, and the experts found it decisive in two games: "Desperado made round III's opening Help Yourself steal 10" (g3 Ava 5/5); "A catch-up card that turned Help Yourself into 10; I bent my buying around staying last on followers" (g9 Ava 5/5). The bots rarely buy it: CL H and VH MIXED (3% and 4% chosen).
- Fun: X 4.8 / 3.3. It's a 5 for the holder and a 1 or 2 for the target (g3 Cal 5/1, g9 Dee 4/2). Table talk named it as the problem in g3 (three players) and g9 (all four in their Help Yourself lines).
- Fits: yes in theme. It stacks catch-up on catch-up: the player with the fewest followers already goes first from round II.
- Evidence: X (two games, six players) and paper. The bots: N +1 (46 owners), H −1 (24, too few), VH +17 ±9 (30 owners, just readable). Only Very Hard, the best player, finds it, and it finds it strong.
- Played turn: round III, 4 players, from g3. Ava is last on followers. She takes Help Yourself: steal 5, doubled to 10. She takes 8 of Cal's red (his contest lead) and 2 of Dee's magenta. Ava gains 10, and Cal loses 8 plus the red contest (+10). That's about a 28-follower swing from one space and a 5-cost card. Best other choice: Spree or Poach, worth about 6 to 10 to the taker. "Fewest followers" is easy to arrange in round III (g9 Dee: "easy to arrange in round III"), so the condition isn't the brake it reads as.
- Direction: replace "double" with a fixed bonus (for example "+2 more" on space steals). That stops Crime Wave becoming a full wipe and Help Yourself reaching 10, and keeps the comeback. Cory designs the number.
- Bot-artifact check: the best bot level and the expert players agree, so the finding survives better play.

### Extortionist (member)
"[4 magenta + 3 any = 7, worth 1] On Recruit: steal 2 resources from the rival with the most resources. Round Start: steal 2 resources from the rival with the most resources."
- **Verdict: KEEP at 4 players.**
- Strategic: CL H and VH AUTO-PICK (16 to 22% chosen).
- Fun: X 2.5 / 1.5 (2 players). "Paying 4 magenta always cost me the magenta lead" (g9 Ava).
- Fits: yes. It's the anti-hoarder card.
- Evidence: lift N +1, H +6, VH 0, N 3-player +24 STRONG, N 2-player +28 STRONG. Even at 4 players, strong at fewer.
- Bot-artifact check: none at 4 players. See the color's 2- and 3-player flag below.

### Double Agent (member)
"[3 magenta + 5 any = 8, worth 1] On Recruit: swap this member for a rival's member you choose."
- **Verdict: NUMBER: price 7 (changed from KEEP).** My guess at the split: 3 magenta + 4 any.
- Strategic: CL H and VH AUTO-PICK (16 to 19% chosen). It's a paid Poach that hands the rival a 1-follower body. It's right only when a rival holds a member worth about 7 or more to you. Lie Low, Bodyguards and Loyalists all block it (bug log row 19; decisions Oct 29).
- Fun: X 3.1 / 2.7. "8 to swap for a rival member never beat buying followers" (g11 Ben 2/2); "8 for a swap nets less than a 10-buy" (g6 Cal). It was strong in the swap-heavy g9 (free through Recruit a Member, then swapped for Panel).
- Fits: yes.
- Evidence: lift N −4 ±5, H −3 ±6, VH −17 ±4 WEAK (43 owners), N 3-player −7, N 2-player −21 WEAK. Every level is negative, and the lens tags it SKILL−.
- Played turn: round III, 4 players (Magenta, Red, Blue, Purple). Ben has 8. He buys Double Agent and swaps it for Cal's Mob (worth 5). Ben gets 5 followers and Cal loses 4 (5 out, Double Agent's 1 in). Best other choice: 8 resources into followers at 1 for 1, +8 for Ben. Ben ends 3 behind that buy and Cal is 4 lower, so he gains 1 point on Cal and loses 3 on each other rival. At 7 he's 2 behind the buy instead of 3. That makes the card right against a rival's top member, which is the play Cory priced it for.
- Bot-artifact check: SKILL− means better bots like it less, likely because they hold Lie Low, Bodyguards or Loyalists against it. The finding survives better play. Cory moved it up from 4 on purpose ("definitely too cheap"), then set 7, then "can say 8 for now". 7 is his own earlier number.

### Kingpin (member)
"[1 magenta + 3 any = 4, worth 1] Game End: +1 follower per magenta member you have."
- **Verdict: KEEP at 4 players.**
- Strategic: CL H AUTO-PICK, VH MIXED (8% close).
- Fun: X 1.0 / 1.0 (one player): "never worth 4".
- Fits: yes. It mirrors Snobs.
- Evidence: lift N +1, H +4, VH +5, N 3-player +18 STRONG, N 2-player +24 STRONG.
- Bot-artifact check: none at 4 players.

### Bodyguards (member)
"[5 magenta + 3 any = 8, worth 2, counts as 2] Rivals can't steal from you."
- **Verdict: KEEP. Don't raise it (changed from "worth 3 is the safe move").**
- Strategic: CL H and VH MIXED, 3% and 5% chosen. Too few owners at every level (N 11, H 16, VH 24). When owned it leans strong (VH +19 ±10).
- Fun: X 4.0 / 3.0 (3 players, g6, g9, g11). "Bought purely to protect a 25-green pile; did the job, nobody could touch me after" (g9 Dee). "With Lie Low it shoves all theft onto the remaining one or two players" (g11 Ava).
- Fits: yes, Magenta's other wall.
- Evidence (P plus X): it also blocks Poach (decisions, Oct 31) and, as built, every swap: Anarchist, Double Agent, Promote and Demote (bug log row 19, a question for Cory). That makes it stronger than its words. Every expert who bought it got what they paid for.
- Bot-artifact check: short rollouts can't see the theft a wall prevents, so the bots under-buy it. The owners they have win more, and so did the experts. Leave the numbers. The open question is Cory's ruling on swaps.

### Shoplifter (member)
"[3 magenta + 4 any = 7, worth 1] Whenever you recruit, steal 1 resource."
- **Verdict: KEEP. Flagged for human tables.**
- Strategic: CL H DEAD (2% of round II offers, 1% of round III), VH MIXED (3% / 6%). Too few owners at every level.
- Fun: no expert read.
- Fits: yes. Cory: "essential to magenta".
- Evidence (P): bought early in round II, it steals on every recruit, follower buys included: about 7 or 8 steals over the game for 7, and as many Fence magenta for whoever holds Fence. On paper that's fine to good.
- Bot-artifact check: the bots discount a long trickle. Cory priced it up on Oct 30 knowing this. Try it at a table before changing a number.

### Not dealt in the 10-card deck (paper only)
- **Crew** "[1 magenta + 2 any = 3, worth 2, counts as 2] Worth 2 followers." A plain body; Cory dislikes these. Leave it out of 1.0 if the 15-card deck needs a cut.
- **Robin Hood** "[2 magenta + 2 any = 4, worth 1] Whenever you steal from the player with the most followers, +1 follower." KEEP. It aims theft at the leader, which is the answer to the funneling the g6 and g11 experts described.
- **Snitch** "[2 magenta + 2 any = 4, worth 1] Whenever a rival steals from you, they lose 1 follower." KEEP for the 15-card deck. With theft this dense, a counter that isn't immunity helps.
- **Fixer** "[3 magenta + 3 any = 6, worth 1] On Use, once per game: spend magenta equal to a rival's member's cost to steal it." KEEP. It's a slower Poach paid in magenta.

### Magenta as a color
Magenta plays its fantasy loudly. Help Yourself, Crime Wave, Shake Down and Poach are its spine and sit in band on their own. Crime Wave carries it as a design ("the best counter to hoarding"). Stash is the weakest link, and Cory has already called its cut. Main-color lift is N +9, H +12, VH +6 at 4 players and +20 / +29 at 3 and 2 players (Normal), the strongest color in the round. Fence at "any player" and Lie Low's round III shield are the two Magenta cards behind that. The single change that would help most is reworking Lie Low's round III shield, because immunity is what turns theft into a funnel onto one player (g6, g11). After that come Desperado's double and the copied On Recruit steals below. Flag for 1.0 if 2- and 3-player tables matter: Fence (+32), Accomplice (+29), Grifter (+30), Extortionist (+28) and Kingpin (+24) are all STRONG at 2 players, and Magenta sweeps its contest in 42% of 2-player games.

---

## Cross-color: copied steals (not my cards, but they set Magenta's level)

- **Played turn, from g2, rounds II and III:** Ava recruits **Con Men** ("[7, counts as 2] On Recruit: steal 5 resources, split among rivals as you choose."): she steals 5. Dee takes **Encore** ("Copy the On Recruit of a rival's member. +1 green."): she steals 5. Later Ben takes Encore: another 5. Cal takes **Echo** ("Copy the previous action. +1 green.") right after Ben's Encore: another 5. That's 20 resources stolen off one 7-cost buy. g5 repeated it: one Con Men stole five times through Encore, Echo, Reprise and Doppelganger ("the card of the game", g5 Cal).
- **Against the best other choice:** Encore with a Con Men on the table steals 5 in round II, against Help Yourself's 4. A Green space out-steals Magenta's own steal space.
- **Instruments:** X: Con Men 4.5 strategic / 3.3 fun, and only 3 of 19 say it fits as a guest. Every g5 META note names copied steals as the first change. CL: Con Men AUTO-PICK at Hard and Very Hard, 54 to 56% chosen. Bots: Con Men's owner lift is about even (Normal +1, Hard +2, Very Hard +5), so the effect lands on the victims and the table's feel more than on its owner's win rate. **Agents** ("Rivals can't copy your actions.") doesn't stop Encore copying Con Men (bug log row 22), so its owner has no defense.
- **Recommendation for the coordinator** (Green and grey lanes): copies shouldn't repeat On Recruit steals, or Con Men's steal should shrink. g9 to g12 META notes moved on to copied follower spaces (Largesse, Party Gifts), which aren't my colors.

---

## Summary of verdicts
- Blue: KEEP Savings, Out of Style, Peek, Bury (watch Normal), Spree, Snobs (flag: multi-count blues), Shopaholics (was price 8), Window Dressers, Trendsetters, Connoisseurs, Regular, Critic. NUMBER Bargain Bin (+2 blue), Patroness (worth 3, plus the wording fix), Window Shopper (worth 2). REWORK Recruit Twice (round II), Doormen (low priority).
- Magenta: KEEP Help Yourself, Crime Wave, Shake Down, Poach, Fence (Cory's call; flag 2 players), Cutpurse (watch), Accomplice (Cory's price), Grifter, Sticky Fingers, Extortionist, Kingpin, Bodyguards (don't raise; swaps question), Shoplifter (table test). NUMBER Double Agent (price 7). REWORK Stash (Cory's own call), Lie Low (round III shield), Desperado (cap the double).
