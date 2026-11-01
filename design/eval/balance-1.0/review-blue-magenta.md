# Review: Blue (market) and Magenta (thieves), balance-1.0, deck 10

Reviewer: senior-designer pass, 2026-11-01. Cards are from the live board (live-board.mjs). Costs below are the full price (the +1 wild included). Instruments: N = Normal bots (800 games at 4 players, 300 at 3, 300 at 2), H = Hard (115 four-player games), VH = Very Hard (38 four-player games: a lead, not a verdict), CL = choice log (Hard / Very Hard), X = expert AI players (4 games, 16 seats), P = paper (my own reading, marked). Lift = owner win share minus expected for member count, 4 players unless stated.

Two things to know before the entries:
- **Not in the 10-card deck, so no data this round:** Blue's Restockers and Plus-Ones; Magenta's Crew, Robin Hood, Snitch and Fixer. They get a short paper read at the end of each color.
- **The Scouts bug barely touched the bot numbers.** Hard bots used Scouts' send-to-bottom 0% of 1504 times it was offered (CL, "Member uses"), so Bargain Bin and Patroness lost almost nothing to the bug in bot games. It did cost Cal in expert game 2 ("Scouts' sweep paid nothing again").

---

## Blue (market): "I shape the row, then I buy a lot of it"

### Savings (round I space)
"+2 blue in round I, +3 in round II, +4 in round III. Before you recruit, you may send one shop member to the bottom of the pile, then refill."
- **Verdict: KEEP.**
- Strategic: it's the fuel space. CL H MIXED (35% thin, i.e. often taken because little else was left), VH MIXED. It's a fallback pick, which is what a fuel space is for.
- Fun: X 2.4 / 2.3, 8/8 fits. "Steady blue plus a bury that kept dangerous cards away from Cal; my workhorse" (g4 Ava). The bury mostly matters to whoever holds Bargain Bin.
- Fits: yes.
- Evidence: lift N 0, H +3, VH +3, 2p +6. Flat to slightly positive at every level.
- Bot-artifact check: nothing to survive; it's flat at every level.

### Out of Style (round I space)
"Send every shop member of one color to the bottom of the pile, then refill. +1 blue per member sent. +1 blue."
- **Verdict: KEEP.**
- Strategic: picking which color to wipe is a real puzzle ("deny a rival or keep my own cheap blues", g2 Cal 4/4). CL H MIXED (21% chosen in round I with 6% close calls, the best close-call rate among Blue spaces in round I), VH MIXED.
- Fun: X 2.8 / 2.9. It's swingy for the Bargain Bin holder and mild for everyone else.
- Fits: yes, the purest "shape the row" space.
- Evidence: lift N +1, H −6 ±3, VH +5 ±7. The levels disagree, so no number points anywhere. Probe: 3.6 / 4.6 / 4.9 gained per placement, inside the band.
- Bot-artifact check: Hard's −6 flips to +5 at Very Hard. It reads as skill-dependent, not weak.

### Peek (round I space)
"Look at the top 4 of the pile and put them back in any order. This turn your recruit may be one of them. +2 blue in round I, +4 in round II, +6 in round III."
- **Verdict: KEEP.**
- Strategic: CL H AUTO-PICK (55% auto), VH MIXED. It's the biggest plain blue gain from round II on (4 and 6 against Savings' 3 and 4), plus pile access. Strong players found the recruit-from-the-pile play ("got me Heiresses and Brokers", g4 Cal 4/5).
- Fun: X 3.4 / 3.3, the best fun score among Blue spaces with Spree, and g4 Cal's favorite. Weaker players said "the pile look itself barely mattered" (g2 Cal, Dee).
- Fits: yes.
- Evidence: lift N −1, H −3, VH +5 ±7. It rises with skill.
- Bot-artifact check: the skill gradient favors keeping it. Peek outclasses Savings, but they sit side by side as a strong and a weak twin, which Cory likes.

### Recruit Twice (round II space)
"Recruit twice this turn. +3 blue."
- **Verdict: REWORK.**
- Strategic: the second recruit only matters if you hold enough for two buys. In round II you rarely do: the probe has 22% of round II recruits as a pass or nothing affordable, and only 13% buying followers. CL H MIXED (22% thin; only 4% chosen in round II), VH MIXED (3% chosen in round II).
- Fun: X 2.9 / 2.9. "Only good if you have two things worth buying" (g2 Ava 2/2). "Mostly read as +3 blue for me" (g2 Ben). "In round III it's just two follower buys, which is dull but correct" (g2 Dee).
- Fits: yes in fantasy ("buy a lot"), but in practice it plays as a blue space.
- Evidence: lift N −5 ±2 (WEAK), N 3-player −5, N 2-player −4, H −7 ±4, VH +2 ±9 (thin). The +3 blue was already tried as a number and stayed about −6 (decisions.md, Nov 1 balance round 7), so price-style fixes are spent. X agrees.
- Played turn: round II, 4 players (Blue, Red, Magenta, Green). Ava holds 7 (3 blue). On Recruit Twice she gets +3 blue, so 10. The shop's affordable pair is Trendsetters (4) and Window Dressers (4): she buys both, 6 followers' worth of members, and has 2 left. That's the good case, and it needs two 4-cost members showing at once. The usual case is one 5-cost member plus 5 left that can't buy a second member, so +3 blue and one buy. Best other choice: **Bury** on an 8-cost card gives about +5 blue and denies that card, then one normal recruit. Recruit Twice wins only in the two-cheap-members case.
- Direction: reward actually using the second recruit on members, in the shape Cory already picked for fuel spaces. For example, "if both recruits are members, +N followers", or blue back per member recruited this turn. Cost cuts are ruled out, so it should be followers or blue, never a discount. The goal is a round II turn that's plainly better than Bury when the row has two cheap blues.
- Bot-artifact check: VH (+2, 40 games) is the one hint that skilled play rescues it. The experts are strong players too, and they still called it dull. The finding likely survives.

### Bury (round II space)
"Send a shop member to the bottom of the pile, then refill. Gain blue equal to half its cost, rounded down. +1 blue."
- **Verdict: KEEP.** Logged as a feel note, not a change.
- Strategic: CL H AUTO-PICK (57% auto), VH MIXED. The probe gives 5.9 to 6.0 per placement, top of the round II band.
- Fun: X 3.4 / 3.0. Four of 8 called it "backwards": it pays most for the card nobody can afford, not the most dangerous one (g4 Ava, Ben, Cal, Dee). The other four called it "the best blue space" (g2 Cal 4/4) and "a real tempo spike".
- Fits: yes.
- Evidence: lift N −3, H −2, VH −5. Every level sits inside noise.
- Why no rework (P): the priciest shop card is usually the one a rival is saving toward, so the payout and the denial land on the same card more often than the critique assumes. g4 Cal buried an 11-cost card for +6 and denied Dee Smooth Talkers in the same move. The "pays for the card nobody wants" complaint is real only when the priciest card is junk. Cory also refused full cost as "way too strong" (Oct 20), and half cost is his compromise.
- Bot-artifact check: flat everywhere, nothing to survive.

### Spree (round III space)
"Recruit 3 times this turn. +5 blue."
- **Verdict: KEEP.**
- Strategic: in round III a big pile meets the one-recruit limit, and Spree breaks that limit. With 25 resources it is 10 + 10 + 5 followers in one placement. CL H AUTO-PICK, VH MIXED.
- Fun: X 3.1 / 3.3, split by build. "Three recruits with Trendsetters and Connoisseurs refunding blue was the highlight of my game" (g4 Ava 4/5) against "mostly three follower buys, a fancy Exchange" (g2 Ava 2/2).
- Fits: yes.
- Evidence: lift N −1, H −2, VH −16 ±6 (WEAK, 38 games). Cory: "I still don't think this is weak" (Oct 29). The +5 blue is a day old.
- Bot-artifact check: the VH dip is a lead only. It may come from who takes Spree (the seat that's behind and dumping its pile) rather than from Spree itself. Re-read it at 100+ VH games before touching it.

### Bargain Bin (Blue's artifact)
"Whenever shop members go to the bottom of the pile, +1 blue." Pays once per batch, on turns only.
- **Verdict: NUMBER: +2 blue per batch.** Between-round refreshes stay out (Cory: "too strong between rounds").
- Strategic: you pick it at the start, so it's a choice among artifacts. Players who took it regretted it. "Much weaker than it looked at pick" (g2 Cal 3/3).
- Fun: X 2.6 / 2.6. "The artifact I'd least want" was said three times (g2 Ben, g4 Ben, g4 Cal). It's a trickle.
- Fits: yes.
- Evidence: owner lift N −2 ±2 (307 owners), N 3-player −7, N 2-player −4, H −9 ±5 (61), VH −11 ±8 (21). The bots at Normal and Hard point the same way. It sits at the bottom of the artifact table with Caterer, Impressionist and Guest Book, while Recruiter is +21 and Money Changers +18.
- Played turn: round I artifact pick at a 4-player table. Bargain Bin pays about 9 blue over a game (g4 Ava's count), roughly 3 a round. That's rarely enough to swing the blue contest against a Peek or Savings taker. At +2 it's about 18 a game, close to Money Changers (+2 white per follower buy, "about 12 to 15 white", lift +18). Against the best other pick, Fence, it would then be the stronger contest artifact. That's the intent: Blue's artifact should win blue contests.
- Bot-artifact check: Hard and Very Hard rate it worse than Normal does, so better play doesn't rescue it. Risk in one line: at +2, Blue's artifact plus Peek could sweep the blue contest. Watch for sweeps (blue sweeps are 5% now).

### Patroness (member)
"[5 blue + 3 any = 8, worth 1] Whenever a shop member goes to the bottom of the pile, +1 follower."
- **Verdict: NUMBER: worth 3 (counts as 3). Also fix the words.**
- Strategic: CL H DEAD (0% chosen in round II, 1% in round III), VH MIXED but 0% / 5% chosen. Owned in 22 of 296 Normal games, 2 of 56 Hard.
- Fun: X 4.0 / 2.7. "8 cost for 1 follower makes it the perfect Poach target and then it pays your rival" (g2 Cal). "A trigger with few turns left never added up" (g4 Ava).
- Fits: yes. It's Blue's payoff card.
- Evidence: CL dead at Hard and Very Hard, the same direction at both levels. Normal lift is +11 on 22 owners (too few to read).
- Wording: the engine pays once per batch (Cory, Oct 21: "just one follower each time it happens, not per card"), but the printed "a shop member" reads per card. Out of Style sending 3 reads as +3 followers and pays 1. It should read like Bargain Bin: "Whenever shop members go to the bottom of the pile, +1 follower."
- Played turn (P): round II, 4 players with Blue on the table. Cal pays 8. From then on the whole table makes roughly one bury batch per Blue space taken (Savings' optional send, Out of Style, Bury) plus member sends (Trendsetters, Window Dressers): about 7 to 9 batches left in the game, so worth 1 + about 8 followers, about 9 for 8. Best other choice: a 5-follower card plus 3 kept, or Snobs (6 cost, worth 2, typically +6 to 13 at game end). At worth 3 it's about 11 for 8, still under the 2x a member should return but no longer dead. If it stays dead, the next step is a price of 7.
- Bot-artifact check: the experts, playing well, also passed on it. The finding survives.

### Snobs (member)
"[3 blue + 3 any = 6, worth 2, counts as 2] Game End: +1 follower per blue member you have."
- **Verdict: KEEP.** It carries Blue.
- Strategic: CL H AUTO-PICK, VH REAL CHOICE (11% close). It's the reason to go deep in blue members.
- Fun: X 4.0 / 3.7. "Paid 13 at game end off a 6-cost card" (g4 Ava 4/5). It's a big Poach target (g2 Dee poached it as "a 9-point hit"). That's a good tension.
- Fits: yes.
- Evidence: lift N −2, N 3-player +14 (STRONG), N 2-player +13, H 0. Fine at 4 players and strong at fewer.
- Bot-artifact check: it's a real choice at Very Hard, so the card asks a question even of strong play.

### Window Shopper (member)
"[2 blue + 3 any = 5, worth 1] On Recruit: send 1 shop member to the bottom of the pile. +1 of its color. Round Start: send 1 shop member to the bottom of the pile. +1 of its color."
- **Verdict: NUMBER: worth 2 (counts as 2).**
- Strategic: the lens calls it a TRAP: N −7 (WEAK) while bots buy it 71% of the time, H −8 at 51%. CL H MIXED (7% chosen), VH MIXED.
- Fun: no expert read. Paper only.
- Fits: yes.
- Evidence: N −7 ±3 and H −8 ±7 point the same way. N 3-player −6, N 2-player −8. Cory kept it for real games to judge (Oct 30); this is a number change, not the cut he deferred.
- Played turn (P): round II, 4 players. Ava has 5. Window Shopper pays worth 1, +1 now, and +1 at round III start, so 3 value plus two small buries. Best other choice at the same price band: Trendsetters (4 cost, worth 3, a bury on every recruit), which is about 3 followers plus the same shop control for 1 less. Window Shopper is dominated. At worth 2 it reaches about 4 value, still a little behind Trendsetters, so it no longer traps.
- Bot-artifact check: Hard sits right with Normal, so the finding likely survives.

### Shopaholics (member)
"[3 blue + 6 any = 9, worth 3, counts as 3] You can recruit twice each turn."
- **Verdict: NUMBER: price 8 (3 blue + 5 any).** My guess at the split.
- Strategic: CL H MIXED, 3% chosen. VH 2% chosen. Owned in 62 of 293 Normal games.
- Fun: X 3.0 / 2.0. "9 was always one turn out of reach" (g2 Cal).
- Fits: yes. It's Cory's own "always buy twice".
- Evidence: lift N −8 ±5 (62 owners). Hard and Very Hard rarely buy it (13 of 59 and 3 of 20 owners). The followers were already lifted once (Oct 30), so price is the next lever.
- Played turn (P): round II, 4 players. Cal has 9. With Shopaholics he gets 3 followers now, then a second recruit every turn for about 2 turns in round II and 5 in round III. Its root problem is the same as Recruit Twice's: a second recruit only matters with spare resources. In round III, 5 placements already give 5 recruits of up to 10 each, so the limit rarely binds. Best other choice: a 5-follower card plus 4 kept. At 9 it loses; at 8 it's reachable in round II.
- Bot-artifact check: the experts didn't buy it either. If the Recruit Twice rework lands, re-read this card, since both share the root problem.

### Window Dressers (member)
"[2 blue + 2 any = 4, worth 3, counts as 3] On Recruit: send 3 shop members to the bottom of the pile, then refill."
- **Verdict: KEEP.**
- Strategic: CL H MIXED, VH REAL CHOICE (12% close). With Peek it lets you set the next row (g4 Dee).
- Fun: X 3.0 / 3.5.
- Fits: yes.
- Evidence: lift N −1, N 3-player +8, H −2. Even.
- Bot-artifact check: none needed.

### Trendsetters (member)
"[2 blue + 2 any = 4, worth 3, counts as 3] Whenever you recruit a member, send 1 shop member to the bottom of the pile, then refill."
- **Verdict: KEEP.**
- Strategic: CL H MIXED, VH too few to tag. Each recruit buries a threat. "Every recruit buries a threat (Con Men, Debutantes, Hot Streak, Night Owls) while paying blue; my favorite card" (g4 Ava 4/5).
- Fun: X 4.0 / 4.5, the best fun score in either of my colors.
- Fits: yes.
- Evidence: lift N −5 ±3, N 2-player −8, H −1.
- Bot-artifact check: Normal's −5 doesn't hold at Hard (−1). Normal bots don't use the denial, so this is a bot artifact.

### Connoisseurs (member)
"[1 blue + 3 any = 4, worth 2, counts as 2] Whenever you recruit a blue member, +1 blue."
- **Verdict: KEEP.**
- Strategic: CL VH REAL CHOICE (10% close), H MIXED. It's a sequencing card: buy it before Snobs and Critic (g4 Ava).
- Fun: X 2.5 / 3.0. "Filler" (g2 Cal 2/2) against "neat sequencing payoff" (g4 Ava 3/4).
- Fits: yes.
- Evidence: lift N −4 ±3, H −9 ±6, N 2-player +15. It's weak-ish at 4 players, but the worth 2 is a day old and Very Hard treats it as a real choice. Hold it for the next run before moving a number.
- Bot-artifact check: mixed. Hard says weak and Very Hard says it's a real choice.

### Doormen (member)
"[1 blue + 4 any = 5, worth 2, counts as 2] Whenever a rival recruits more than once in a turn (swaps count), +1 blue."
- **Verdict: REWORK (low priority).** The trigger, not the number.
- Strategic: CL H MIXED, VH MIXED. It's bought as a 2-follower body for 5, so the ability doesn't drive the pick.
- Fun: X 1.0 / 1.0, the lowest in both colors. "Paid me 2 blue all game; rivals almost never recruit twice" (g2 Cal). "Its trigger never fired once; dead card" (g4 Ava).
- Fits: yes in idea (Blue watching rivals shop), no in play.
- Evidence: X (two owners at 1/1) and paper. Paper count: rivals' Recruit Twice is about 1.4 per game and Spree 1.0. Swaps only count when Red's Promote or Demote is on the table. That's about 2 triggers a game without Red. The bots don't flag it (lift N −1, H +5, N 2-player −10) because the 2 followers carry it.
- Played turn: round II, 4 players without Red. Ben owns Doormen. Cal takes Recruit Twice and Ben gets +1 blue, the only trigger of the round. Best other buy at 5: Trendsetters (4, worth 3) does more every turn.
- Direction (my guess): tie it to a rival event that happens most rounds at any table, such as a rival taking a Blue space, so the card becomes a toll rivals see and weigh.
- Bot-artifact check: it isn't a strength finding. Better bots wouldn't make the trigger fire more.

### Regular (member)
"[1 blue + 2 any = 3, worth 1] Whenever you buy followers, +1 blue."
- **Verdict: KEEP.**
- Strategic: CL H MIXED (7% close), VH MIXED.
- Fun: X 3.5 / 4.5. "Sleeper: pay 1 for a follower and get the blue back" (g2 Cal 4/5).
- Fits: yes.
- Evidence: lift N +1, H +2. Even.
- Bot-artifact check: none needed.

### Critic (member)
"[1 blue + 2 any = 3, worth 1] Whenever a rival recruits a blue member, +1 follower."
- **Verdict: KEEP.**
- Strategic: CL MIXED at both levels. It pays about 2 followers over a game (2.9 followers counted at Hard).
- Fun: X 2.0 / 3.0 (one player). "The trigger never fired."
- Fits: yes.
- Evidence: lift N −1, H −2, N 3-player −8. Inside noise at 4 players.
- Bot-artifact check: none needed. It's a filler 3 that does its job.

### Not dealt in the 10-card deck (paper only)
- **Restockers** "[2 blue + 2 any = 4, worth 2, counts as 2] On Use, once per game: send the whole shop to the bottom of the pile, then refill." KEEP for the 15-card deck. It's a timing card for Patroness and Bargain Bin.
- **Plus-Ones** "[2 blue + 2 any = 4, worth 2, counts as 2] On Recruit: recruit again this turn." KEEP. It's the honest version of Recruit Twice on a body, and it feeds Doormen.

### Blue as a color
Blue plays like its fantasy in its shaping half: Out of Style, Peek, Trendsetters and Window Dressers are where the expert players had fun and real choices. The buying-a-lot half doesn't land, because the extra recruit (Recruit Twice, Shopaholics, and Spree outside round III) only matters with spare resources, and round II rarely has them. Snobs carries it. Recruit Twice is the weakest link, with Bargain Bin close behind as a bottom-tier artifact. The single change that would help Blue most is reworking Recruit Twice so the second recruit pays for itself (followers or blue for recruiting two members). That makes "buy a lot" a round II plan rather than a round III dump.

---

## Magenta (thieves): "Your pile is my pile"

### Help Yourself (round I space)
"Steal 3 resources in round I, 4 in round II, 5 in round III, split among rivals as you choose."
- **Verdict: KEEP.** The trouble is its multipliers, not the space (see Desperado and Copied steals).
- Strategic: CL H AUTO-PICK, and in round I it's taken 95% of the times it's offered (VH 96%). It's the round I opener, a first-seat fight ("a real fight over who takes it", g2 Ben). Rounds II and III are about 30% and 16%.
- Fun: X 4.3 / 3.5, 8/8 fits. "The strongest outer space all game; with Fence plus Reprise it's 8 resources, with Desperado it's 10" (g3 Ava 5/4).
- Fits: yes, the color in one line.
- Evidence: lift N −1, H +1, VH +7 ±7. Probe 3.3 / 4.4 / 5.5 per placement. Alone it sits at the top of the round I band, where Cory put it.
- Bot-artifact check: it rises with skill, but alone it's within the band. The extra comes from Fence, Reprise and Desperado.

### Stash (round I space)
"+2 magenta in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III)."
- **Verdict: REWORK.** Cory already called the cut (Oct 31: "Help Yourself is enough"); this confirms it.
- Strategic: CL H AUTO-PICK (69% auto), VH AUTO-PICK (51%). It's taken for the magenta contest, rarely a dilemma.
- Fun: X 2.5 / 2.6. "Doesn't feel like stealing, reads like a generic income space" (g2 Ben). "Filler that people take for the contest" (g3 Cal).
- Fits: weakly. It's the one Magenta space that touches no rival.
- Evidence: X and CL agree. Lift N +2, H 0, VH −3.
- Played turn: round I, 4 players. Stash gives 3 magenta (the +1 counted) and +1 follower if you recruit a member, about 4 value. The best other choice, Help Yourself, gives +3 and costs a rival 3, a 6 swing. Stash is the weak twin, and players only took it for the contest.
- Direction: Cory's standing pick for the slot, "Steal 1 of each contest's color from its leader, if it isn't you", fits the color and touches rivals. I have no new pitch.
- Bot-artifact check: the experts are skilled players and agree, so it survives.

### Lie Low (round I space)
"Steal 1. Rivals can't steal or recruit from you this round. +1 magenta."
- **Verdict: KEEP for now. Re-read after the copy fix.**
- Strategic: in round III it's the strongest defensive play in the game. X 4.8 strategic, 8/8 fits. The round III Lie Low decided games 2 and 3: "Dee's 19-resource pile was untouchable while everyone else got stripped" (g3 Ava). The bots barely see this. CL H MIXED, chosen 26% in round I but only 5% in round III, the same at VH. Lift N 0, N 2-player +11 (STRONG), H +2, VH −2.
- Fun: X 3.5. It's great for the taker. "Feels bad to have no answer" (g2 Dee 5/3).
- Fits: yes, Magenta's wall (design core).
- Played turn: round III, 4 players. g3 Dee sits last on followers (29) holding 11 resources, which grows to 19. Lie Low gives her 2 (the steal 1 plus the +1 magenta). It also shields her pile from that round's Help Yourself (5 a take), Crime Wave (half a color), Shake Down and Poach, plus every Echo or Reprise copy of them, and keeps two +10 contests safe. The best other choice was Help Yourself at 5. Lie Low was worth about 20 followers of contests to her, against 5.
- Why KEEP: the expert players all trace its power to theft density, which comes from copies: Con Men's On Recruit fired 4 times in g2 and g3, and Reprise and Echo repeat Help Yourself and Poach. In the 10-card deck it's also Magenta's only working wall: Bodyguards is never bought and Snitch is cut. Trim the copies first. If round III Lie Low still decides games after that, the cheapest lever is to stop it blocking Poach in round III and protect resources only. That's a guess, and it walks back part of Cory's Nov 1 wording.
- Bot-artifact check: the bots take it in round III 5% of the time and the experts say it's decisive. Better bots would value it more, so the finding (strong in round III) would survive and grow. It isn't flagged as strong now only because the bots can't see the theft they avoid.

### Crime Wave (round II space)
"Steal half of one rival's pile of one color, rounded down. +1 magenta."
- **Verdict: KEEP.**
- Strategic: CL H AUTO-PICK, VH AUTO-PICK. Its threat shapes every pile. "Its threat shapes everyone's pile size, which is good design" (g2 Ben 4/3). "I took it purely so it couldn't halve my 11 white; a great blocking space" (g2 Dee).
- Fun: X 3.5 / 2.8. It feels bad to receive but is fair. "The doubling is the problem, not this space" (g3 Cal).
- Fits: yes, the fantasy's anchor ("takes half a hoard").
- Evidence: lift N −2, H +1, VH −8 ±7. Probe 4.2 / 6.3, in band.
- Bot-artifact check: flat. No finding.

### Shake Down (round II space)
"Choose a rival. They choose one of their members costing 5 or less, then pay you its cost or you steal it. +1 magenta."
- **Verdict: KEEP (watch Very Hard).**
- Strategic: the victim picks both the member and whether to pay, so the taker usually gets the rival's least-wanted card of 5 or less, or its cost. The probe gives 4.5 per placement, low for round II. Against a broke rival there's no dilemma: they lose a member. CL H AUTO-PICK, VH MIXED.
- Fun: X 4.0 / 2.9. The best table moment when the victim has to choose: "As the final placement it's a real dilemma for the target, best moment of the night" (g3 Dee 5/5). The worst against broke players: "no choice, you just lose a member" (g2 Ben 5/1). With Reprise it took two of Ben's three members.
- Fits: yes. It's one of Cory's favorites (the other player decides).
- Evidence: lift N −1, H −3, VH −18 ±5 (WEAK, 38 games). Normal and Hard are inside noise, and Very Hard is thin.
- Bot-artifact check: the Very Hard number may come from who takes it (seats already behind) rather than from what it gives. Wait for 100+ games before any number. The feel-bad against broke players mostly comes from Reprise repeating it, which is Green's card.

### Poach (round III space)
"Recruit a rival's member you choose. +1 magenta."
- **Verdict: KEEP.** The feel-bad belongs to the copies.
- Strategic: CL H AUTO-PICK, VH AUTO-PICK (8% close, the best close-call rate of any Magenta space at Very Hard). It's the round III burst for Magenta.
- Fun: X 4.4 / 2.6. Taking a member is fun ("the highlight of my game", g2 Dee). Every low fun score names a copy: "Echo copying Poach for two members in one placement was the worst feel-bad of the night" (g3 Ben 4/1).
- Fits: yes.
- Evidence: lift N +9 (STRONG), N 2-player +19 (STRONG), H +4, VH −4. It fades with skill.
- Bot-artifact check: Normal's STRONG doesn't survive Hard and Very Hard (better bots defend with Lie Low and spread their value). Poach alone is in band with Recruit a Member.

### Fence (Magenta's artifact)
"Whenever you steal, +1 magenta." Pays once per steal, whatever the source.
- **Verdict: KEEP as it is.** One line of risk on Cory's pending "any player steals" test.
- Strategic: an artifact pick. "Kept me on top of magenta every round" (g2 Ava 4/3) against "+1 per steal is small" (g2 Dee 2/2).
- Fun: X 3.7 / 3.3.
- Fits: mostly. "It pays magenta whatever color you steal" (g3 Cal) is fine for the contest.
- Evidence: owner lift N −3 ±2 (322 owners), N 3-player −5, N 2-player +5, H 0 ±5, VH −19 ±5 (18 owners, too few to read). That puts it mid-pack among artifacts.
- Risk (P): the table makes roughly 12 or more steals a game (Help Yourself about 3, Crime Wave 2, Lie Low 2.6, Poach 1, Shake Down part of 2, plus member and copied steals). "Whenever any player steals, +1 magenta" would pay about 12 or more magenta a game, about Money Changers' 12 to 15 at lift +18, and would win the magenta contest most rounds. Test it against the current version as planned, and expect it to land strong.
- Bot-artifact check: flat at the levels with enough owners.

### Cutpurse (member)
"[1 magenta + 2 any = 3, worth 1] On Recruit: steal 1 resource from the rival with the most resources. Round Start: steal 1 resource from the rival with the most resources."
- **Verdict: KEEP.**
- Strategic: CL H AUTO-PICK, VH AUTO-PICK (14% close). It's the cheap first body.
- Fun: X 3.0 / 3.0. "The round-start steal goes to whoever is richest, so it was a real swing" (g3 Ava).
- Fits: yes.
- Evidence: lift N 0, N 3-player −6, H +11 ±6. It's a slight overperformer with skill, about 3 resources plus 1 follower for 3.
- Bot-artifact check: the Hard lift is the only signal and sits inside about 2σ. Don't touch it.

### Accomplice (member)
"[1 magenta + 2 any = 3, worth 1] On Recruit: steal 3 resources."
- **Verdict: KEEP.** Cory's price (Oct 29: "Accomplice stays 3").
- Strategic: CL H AUTO-PICK (94% auto, 63% chosen), VH AUTO-PICK. It's nearly always bought when it shows.
- Fun: X 4.0 / 4.0. "Pay 3, steal 3, with Fence it nets a resource and a body; underpriced in a steal deck" (g2 Ava).
- Fits: yes.
- Evidence: lift N +4 ±3, N 2-player +10, H +8 ±6. It's a little strong at two levels. That would support a price of 4, but Cory has twice placed it below 4 ("not worth it for a 4 cost"). The bigger issue is that it gets copied: Greatest Hits on Con Men plus Accomplice made an 8-steal (g2).
- Bot-artifact check: it would survive. But it's a small edge, and the copy fix below reduces it.

### Grifter (member)
"[2 magenta + 6 any = 8, worth 1] On Recruit: steal 1 resource per 2 members you have."
- **Verdict: KEEP** (priced to 8 on Nov 1).
- Strategic: CL H AUTO-PICK (26% chosen), VH AUTO-PICK. It's a late buy for a wide cult.
- Fun: X 4.0 / 3.0. Its loud moment was copied: "through Tryout it stole 6 from me for free" (g3 Ava).
- Fits: yes.
- Evidence: lift N 0, N 3-player −6, H −8 ±7. Even to slightly weak. It's only big when copied.
- Bot-artifact check: none needed.

### Sticky Fingers (member)
"[2 magenta + 2 any = 4, worth 1] Your steals take 1 more resource."
- **Verdict: KEEP.**
- Strategic: CL H MIXED, VH MIXED.
- Fun: no expert read.
- Fits: yes.
- Evidence: lift N −4, H +3, N 3-player +9, N 2-player +21 (STRONG, 22 owners). Fine at 4 players. At 2 players every steal hits the one rival.
- Bot-artifact check: the 2-player read is thin. Watch it if 2-player tables matter before 1.0.

### Desperado (member)
"[2 magenta + 3 any = 5, worth 1] While you have the fewest followers (ties count), double what you steal from spaces."
- **Verdict: REWORK.** Cap the boost instead of doubling.
- Strategic: it's a comeback card, and the experts found it decisive. "Desperado made round III's opening Help Yourself steal 10" (g3 Ava 5/5). "Doubled Help Yourself to 10 in round III; 'fewest followers' is close to free in a tight race, and it lost me the game" (g3 Cal 5/1). It also turns Crime Wave into a whole-pile wipe. The bots barely buy it: CL H MIXED (3% chosen), VH MIXED (8%); 55 Normal owners, too few at Hard.
- Fun: X 5.0 / 3.0. A 5 for the holder, a 1 for the target. Table talk named it in g3 three times: Ben, Dee and Cal.
- Fits: yes in theme (the desperate thief). It stacks catch-up on catch-up: the player with the fewest followers already goes first from round II.
- Evidence: X (both players who rated it, plus three other players' table talk), and paper. The bots don't see it (lift N −2 ±6), because they don't plan around "fewest followers".
- Played turn: round III, 4 players, from g3. Ava is last on followers. She takes Help Yourself: steal 5, doubled to 10. She takes all 8 of Cal's red (his contest lead) and 2 of Dee's magenta, then banks 10 followers. Ava gains about 10, and Cal loses 8 plus the red contest (+10), about a 28-follower swing from one outer space and a 5-cost card. Best other choice: Spree or Poach, worth about 6 to 10 to the taker alone. In a tight race, "fewest followers" rotates freely: in g3 Cal poached Ben's Triplets just to switch it off. So the condition isn't the brake it reads as.
- Direction: replace "double" with a fixed bonus (for example "+2 more" on space steals). That stops Crime Wave becoming a full wipe and Help Yourself reaching 10, and keeps the comeback feel. Cory designs the number.
- Bot-artifact check: better bots would exploit it more, not less. The bots' flat number is the artifact, and the finding survives.

### Extortionist (member)
"[4 magenta + 3 any = 7, worth 1] On Recruit: steal 2 resources from the rival with the most resources. Round Start: steal 2 resources from the rival with the most resources."
- **Verdict: KEEP.**
- Strategic: CL H AUTO-PICK but chosen only 7% in round III. VH MIXED.
- Fun: X 2.0 / 1.0 (one player). "7 cost for 1 follower and a slow drip."
- Fits: yes. It's the anti-hoarder card.
- Evidence: lift N 0, H +1, N 3-player −7, N 2-player +20 (STRONG). Even at 4 players.
- Bot-artifact check: none at 4 players.

### Double Agent (member)
"[3 magenta + 5 any = 8, worth 1] On Recruit: swap this member for a rival's member you choose."
- **Verdict: KEEP.**
- Strategic: CL H AUTO-PICK + MISJUDGED (Normal and Hard disagree on it 53% of the time), VH MIXED. It's a paid Poach that hands the rival a 1-follower body, so it's only right when a rival holds a member worth 8 or more to you (Snobs, Mob, HR).
- Fun: X 3.0 / 2.0. "8 resources for a net 3 loses to buying followers" (g2 Ava, who weighed it for Fan Club).
- Fits: yes.
- Evidence: lift N −3 ±3, H −8 ±6, N 2-player −13. Leaning weak, but each level is about 1σ, and Cory moved it up from 4 on purpose ("definitely too cheap").
- Bot-artifact check: MISJUDGED at Hard, so the bot number is suspect. Raising its worth would gift the victim more, so if it moves, price is the lever. Not yet.

### Kingpin (member)
"[1 magenta + 3 any = 4, worth 1] Game End: +1 follower per magenta member you have."
- **Verdict: KEEP.**
- Strategic: CL VH REAL CHOICE (10% close), H MIXED.
- Fun: X 1.0 / 1.0 (one player): "never worth 4".
- Fits: yes. It mirrors Snobs.
- Evidence: lift N +1, N 3-player +13 (STRONG), H −8 ±5. The levels conflict.
- Bot-artifact check: Very Hard calls it a real choice, so leave it.

### Bodyguards (member)
"[5 magenta + 3 any = 8, worth 2, counts as 2] Rivals can't steal from you."
- **Verdict: KEEP. Flagged for human tables.**
- Strategic: CL H DEAD (0% chosen), VH 0% chosen. Normal owned it in 38 of 279 games, and those owners won more (lift +10 ±8).
- Fun: no expert bought it. Paper only.
- Fits: yes, Magenta's other wall.
- Evidence (P): it also blocks Poach (decisions.md, Oct 31). So it's a permanent Lie Low against steals at a table where, by the experts' account, held piles were stripped every round. That should be worth well over 8 to a contest-holder bought in round II.
- Bot-artifact check: this is the clearest bot artifact in my colors. Short rollouts can't see the theft a card prevents, and when Normal bots do own it they win more. Don't change it on the bot numbers. If Cory wants it seen, lifting it to worth 3 is the safe move.

### Shoplifter (member)
"[3 magenta + 4 any = 7, worth 1] Whenever you recruit, steal 1 resource."
- **Verdict: KEEP. Flagged for human tables.**
- Strategic: CL H DEAD (0% of 99 round II offers, 1% of round III), VH 1%. Most offers come in round III, when it's rightly dead (about 5 recruits left).
- Fun: no read.
- Fits: yes. Cory: "essential to magenta".
- Evidence (P): bought early in round II it steals on every recruit, follower buys included: about 2 to 3 more in round II plus 5 in round III, so 7 or 8 steals and 7 or 8 Fence magenta for 7. On paper that's fine to good.
- Bot-artifact check: the Normal-to-Hard disagreement is only 31%, but the round II 0% looks like the bots discounting a long trickle. Cory priced it up on Oct 30 knowing this. Test it at a table before a number.

### Not dealt in the 10-card deck (paper only)
- **Crew** "[1 magenta + 2 any = 3, worth 2, counts as 2] Worth 2 followers." A plain body; Cory dislikes these. Leave it out of 1.0 if the 15-card deck needs a cut.
- **Robin Hood** "[2 magenta + 2 any = 4, worth 1] Whenever you steal from the player with the most followers, +1 follower." KEEP. It's a good aim-at-the-leader card.
- **Snitch** "[2 magenta + 2 any = 4, worth 1] Whenever a rival steals from you, they lose 1 follower." KEEP for the 15-card deck. With theft this dense, a counter card helps.
- **Fixer** "[3 magenta + 3 any = 6, worth 1] On Use, once per game: spend magenta equal to a rival's member's cost to steal it." KEEP. It's a slower Poach that turns a magenta pile into a member.

### Magenta as a color
Magenta plays its fantasy loudly, and too loudly through other colors' cards. Help Yourself, Crime Wave and Poach are its spine and are in band on their own. Crime Wave carries it as a design ("its threat shapes everyone's pile size"). Stash is the weakest link, and Cory has already called its cut. The single change that would help Magenta most isn't on a Magenta card: stop copies from repeating On Recruit steals (Con Men through Encore, Echo and Greatest Hits). Then Help Yourself, Lie Low and Poach can be judged on their own text, and the remaining Magenta-card fix is Desperado's double.

---

## Cross-color: copied steals (not my cards, but they set Magenta's level)

- **Played turn, from g2, rounds II and III:** Ava recruits **Con Men** ("[7, counts as 2] On Recruit: steal 5 resources."): she steals 5. Dee takes **Encore** ("Copy the On Recruit of a rival's member. +1 green."): she steals 5. Later Ben takes Encore: another 5. Cal takes **Echo** ("Copy the previous action. +1 green.") right after Ben's Encore: another 5. That's 20 resources stolen off one 7-cost buy. In g2, Ava and Ben's 8-steal came from **Greatest Hits** ("Copy the On Recruit of each of your members, in any order. +1 green.") firing Con Men plus Accomplice.
- **Against the best other choice:** Encore with a Con Men on the table steals 5 in round II, against Help Yourself's 4. A Green space out-steals Magenta's own steal space.
- **Instruments:** X (Con Men 4.7 strategic / 3.0 fun, only 2 of 10 say it fits as a guest; every expert's notes name copied steals as the first thing to change). The Nov 1 human-proxy playtest: the winner copied steal spaces onto one rival every turn with Fence paying each time, and that rival ended with 0 members. CL VH: Con Men AUTO-PICK, 76% chosen.
- **Recommendation for the coordinator** (Green and grey lanes): copies shouldn't repeat On Recruit steals, or Con Men's steal should shrink. Then re-read Lie Low and Desperado.

---

## Summary of verdicts
- Blue: KEEP Savings, Out of Style, Peek, Bury, Spree, Snobs, Window Dressers, Trendsetters, Connoisseurs, Regular, Critic. NUMBER Bargain Bin (+2 blue), Patroness (worth 3, plus the wording fix), Window Shopper (worth 2), Shopaholics (price 8). REWORK Recruit Twice, and Doormen (low priority).
- Magenta: KEEP Help Yourself, Lie Low (re-read after the copy fix), Crime Wave, Shake Down, Poach, Fence, Cutpurse, Accomplice, Grifter, Sticky Fingers, Extortionist, Double Agent, Kingpin, Bodyguards (bot artifact), Shoplifter (bot artifact). REWORK Stash (Cory's own call) and Desperado.
