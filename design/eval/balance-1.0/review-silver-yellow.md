# Balance 1.0 review: Silver and Yellow

Reviewer: Claude (color reviewer brief), 2026-11-01. Deck 10, 4 seats unless said. Cards as printed live on `claude/gifted-newton-3lcy3i`.

Instruments and shorthand:
- **N / H / VH lift**: owner (member, artifact) or taker (space) win share minus expected, points ± spread, from report-normal-4p (800 games), report-hard-4p (142), report-veryhard-4p (42; a lead, not a verdict). "too few" = under 30 owners at that level.
- **Choice H / VH**: choice-log tag at Hard / Very Hard, with close-call %, and chosen % by round where it matters.
- **Probe**: feel probe gain per placement (Normal, 300 games). The probe counts gains only: a *change* of a rival's resource or a rearrange of your own shows as 0 (Dilute "touch 2%" is the probe's blind spot, not bots skipping the change).
- **Experts**: FEEL lines (strategic/fun, 1-5) from 16 expert players over 4 games.
- **Human playtests**: none yet. Silver and Yellow were left out of the Nov 1 playtest (report.md line 5) and predate Oct 22. The answer key has one Yellow entry: Guest Book didn't pay for Drifters (since fixed).
- Contest prizes: +4 / +6 / +10. Any resource buys 1 follower, but only in packs of 1, 5 or 10, and a pack uses the turn's recruit.
- Deck 10 leaves out Tinker, Matchmaker, Leveler, Book Cookers and Spice Route, so they have no bot or expert data. They're judged on paper only, at the end.

---

## Check first: do Silver's giving spaces "feed the leader"?

Two tables said so: g1 Ben, Cal and Dee about **Party Gifts** and **Largesse**, and g4 Dee's META ("gifted silver tends to come back to bite the giver").

**Played turn (g1, round III, from the transcript).** Dee holds the silver lead. She joins Cal's **Largesse** ("Rivals gain up to 10 silver, split as you choose. +1 follower for each.") with Party Crasher. Ava and Ben are the players she's racing for a place, and both hold enough silver to threaten her silver contest (+10). So she puts all 10 on Cal: "Cal +10 silver, then +10 followers." Cal was the leader. Recruits, not resources, were his limit, and he turned the silver into a Crowd In minion and the last word on the red contest.

**Played turn (g4, round III, from the transcript).** Dee is 11 behind Cal. She takes **Largesse** and aims it away from the leader: "Ava +6, Ben +4 silver, then +10 followers." She nets +10 on Cal and +4 to +6 on each of the others. Later, Ben crashes the same space and puts all 10 on Ava, "so she ties Dee's 10 and splits the silver contest". There the gift worked as a weapon against the silver holder.

**Same shape, made-up numbers (round III, 4 players).** Followers: Cal 85, Dee 80, Ava 78, Ben 76. Silver: Dee 9, Cal 2, Ava 3, Ben 4.
- **Spread 3/3/4.** Cal ends on 5 silver, Ava 6, Ben 8, all still under Dee's 9. Dee +10, each rival +3 or +4. Dee nets +6 or +7 on everyone, the leader included.
- **All 10 on the leader.** Cal goes to 12 silver, passes Dee and takes the +10 silver contest. That's worse for Dee than spreading, so she doesn't do it.
- **All 10 on a non-racer.** This only happens when Dee is playing for a place, not the win.

**Verdict: partly true.**
- The giver never loses ground to whoever receives. Party Gifts is +6 for the giver against at most +3 to one rival. Largesse is +10 against at most +10, and normally against 3 or 4 each.
- The leader gets fed in one case: the giver holds the silver contest and is racing the trailing players for a place. Then the safe home for the silver is the player not in the silver race, often the leader.
- What's real is that **Largesse lets one player hand a third player up to 10**, as much as a round III contest prize. That's kingmaking, and it's only as big as it is because all 10 can go to one rival.
- Bots can't show this either way: they always gift to the rival with the fewest followers (silver.js `shareStep` hint), which is pure catch-up.
- My guess at a direction, if Cory wants one: a per-rival cap ("at most 4 to each rival") forces a spread. That's a new restriction, so it's his call, not a recommendation from data.
- The thing that doubled the swing both times was **Party Crasher** joining a center space. That belongs to the benders reviewer; experts in g4 (Ava, Cal, Dee) asked for it.

---

## Silver spaces

### Toast: "+3 silver in round I, +6 in round II, +9 in round III. Each rival +1 silver in round I, +2 in round II, +3 in round III."
- **Verdict: KEEP.**
- **Strategic:** choice log AUTO-PICK at H (close 3%) and VH (close 4%, contender 53%). The silver holder takes it every round, and in round III others take it to deny +9 (g4 Dee).
- **Fun:** experts 3.4/3.4: "my engine every round" (g1 Dee 5/5). Without Caterer it's "a gift to the table".
- **Fits:** yes; experts 8/8.
- **Evidence:** taker lift N −2, H −3, VH +5, all noise. Taken 3.0 times a game (every round). Probe gain 3.5 / 6.7 / 9.9, the second-biggest round III space. That's inside the bands (I: 2-4, II: 4-6, III: 8-15).
- **Bot-artifact check:** nothing to survive; no change asked.

### Polish: "Turn 2 of your silver into 4 of any colors."
- **Verdict: NUMBER.** Let it pay from an empty pile, or raise the rate. Cory's numbers.
- **Strategic:** MIXED at H and VH, close 2%, and "thin" (taken from a short menu) on 34% (H) and 43% (VH) of picks. In rounds II and III it's chosen 2-3% of the time.
- **Fun:** experts 2.8/2.6. "a leftover space" (g1, 3 of 4 players), "the escape hatch for silver you were handed" (g4 Cal). g4 Ben used it once as a block.
- **Fits:** yes, as the receiver's answer to gifts; experts 8/8.
- **Evidence:**
  - Taker lift: H −1 ±4 and VH −9 ±5 point the same way; N +2 ±2.
  - Probe: gain 1.8 in round I, and dead 23% in round I (nobody has silver yet).
  - Paper: net +2 at best, the bottom of the round I band.
- **Played turn (round I, 4 players).** Ava has 2 silver from gifts. **Polish** turns 2 silver into 4 purple: net +2 resources, and maybe the purple contest (+4). The best other space is **Harvest** ("+3 in round I, +4 in round II, +5 in round III, in colors you choose."): +3 purple outright, +1 more than Polish, and it works with no silver. With 0 silver Polish gives nothing. It's only better when Harvest is taken.
- **Bot-artifact check:** survives. Experts call it a leftover too, and VH (the strongest bot) likes it least.

### Party Gifts: "Rivals gain up to 3 silver, split as you choose. +2 followers for each."
- **Verdict: NUMBER.** Grow it by round, as Toast does, so round I sits in band. Cory set "3 silver, 2 followers per silver" on Oct 31 with "numbers to be tuned in balance testing".
- **Strategic:** MIXED at H (close 2%, auto 56%) and VH (close 2%). It's taken 2.7 times a game, so it's gone nearly every round. With no close calls, it's a race to get there first, not a weighed choice.
- **Fun:** experts 4.0/3.9, the best feel of any outer space. "best outer-ring rate, picked every round" (g4 Dee); "6 followers for nothing in round I is loud" (g1 Ava, Dee).
- **Fits:** yes; experts 8/8.
- **Evidence:**
  - Probe: gain 7.0 in round I, the top of the wheel by 2.6 (next is Echo at 4.4, which copies someone else's space). Rounds II and III: 7.2 and 6.9.
  - Experts: all 8 rate it the best or near-best outer space.
  - Taker lift: H +2 ±4, VH +6 ±6 (VH winners take it 0.86 a game vs 0.60), N −2 ±2. The Hard and Very Hard bots point the same way, but weakly: the lift is near zero because every seat takes it.
- **Played turn (round I, 4 players).** Cal places first. **Party Gifts**: Ava +2, Ben +1 silver (g1's split), Cal +6 followers, with no recruit spent. The best other choices are **Harvest** (+3 in colors you choose) and **Sleep In** ("+4 purple. Skip your next turn."). Party Gifts is +6 followers against 3 or 4 resources that still need the recruit to become followers. That's about +3 over the best other space, and more than the whole round I contest prize (+4). In round III the same +6 falls below **Toast**'s +9 and the band (8-15), so the card is front-loaded.
- **Bot-artifact check:** survives. Experts and the probe agree, and the stronger the bot, the more its winners take it.

### Party Favors: "+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver."
- **Verdict: REWORK.** The rival's choice needs a real cost on both sides; today it's always "give my junk color". Direction only; Cory designs it.
- **Strategic:** AUTO-PICK at H (auto 68%, close 2%), MIXED at VH (close 4%).
- **Fun:** experts 2.3/2.4, the lowest Silver space. "the choice of what to give was always the obvious junk color" (g4 Ben); "a small tax nobody noticed" (g1 Ava); "mostly Caterer bait" (g4 Ava).
- **Fits:** yes; experts 8/8. It's Cory's "give another player the choice" shape, but with nothing at stake.
- **Evidence:**
  - Taker lift: H −6 ±4, with winners taking it less (0.39 a game vs 0.54). VH +1 ±6 (winners 0.46 vs 0.51). N −1 ±2.
  - Experts: 2.3/2.4.
  - Probe: gain 6.2 in round II, inside the band, so the numbers aren't the problem.
- **Played turn (round II, 4 players).** Dee takes **Party Favors**: +2 silver. Ava gives 1 green (she isn't in the green race), Ben 1 red, Cal 1 blue. Each gets 2 silver back. Dee +5 resources; each rival +1 net, plus 2 silver toward the contest. Playing each rival: giving your least-needed color is always right, so the "choice" is the card saying "+1 of a color nobody wants". The best other space is **Toast** in round II: +6 silver for Dee, +2 to each rival. It's bigger for the taker, has the same footprint on the table, and asks nothing.
- **Bot-artifact check:** survives. The flatness is a human read (experts 8/8), not a bot habit, and Hard's winners avoid it.

### Sweet Talk: "+3 silver. Then turn as many of your silver as you want into other colors."
- **Verdict: KEEP.** Cory: "silver needs an OUTLET", and on Oct 31, "might be a little too strong, but that's ok".
- **Strategic:** MIXED at H (close 2%, thin 22%) and VH (close 3%).
- **Fun:** experts 2.9/2.9. "turning silver into red took round II's red contest" (g1 Cal); "otherwise a plain +3".
- **Fits:** half. It's the outlet, but it gives nothing to rivals, the only Silver space that doesn't (probe touch 0%).
- **Evidence:** taker lift N −2, H +4, VH +2, mixed. Probe 3.1 / 3.2, below the round II band on raw gain; its value is turning a silver pile into a contest win.
- **Bot-artifact check:** no finding to survive.

### Largesse: "Rivals gain up to 10 silver, split as you choose. +1 follower for each."
- **Verdict: KEEP.** On the "feeds the leader" claim, see the check above.
- **Strategic:** AUTO-PICK at H (auto 74%, close 2%) and VH (auto 50%, close 4%, contender 33%). It's taken every game.
- **Fun:** experts 4.6/3.8, the highest strategic score in either color. "+10 followers in one go, but the 10 silver you give away becomes someone's contest win or followers; it's a real dilemma" (g4 Dee 5/5). The complaints are about size when Party Crasher copies it (g4 Ava, Cal).
- **Fits:** yes; experts 8/8. It's the host's big night.
- **Evidence:**
  - Taker lift: N +7 ±3 (STRONG), VH +9 ±9, H +0 ±5.
  - Probe: 11.0, the top of round III.
  - +10 sits inside the round III band (8-15), so the number holds. Cory, Oct 31: "try it the way I said it and see where it falls". It falls at the top of the band, not over it.
- **Bot-artifact check:** bots gift to the trailer, so their Largesse games are softer than human ones. The kingmaking is a human-table effect, seen in g1 and g4.

---

## Silver members and artifact

### Hangers-On [4 silver + 5 any, worth 2, counts as 2]: "Whenever a rival gives you something, +1 more of it."
- **Verdict: NUMBER.** Price down. Cory already raised its worth 1 → 2 on Nov 1; his rule is followers first, then price, so price is next.
- **Strategic:** MIXED at H (chosen 3%, close 1%) and VH (chosen 1%). Near-dead at both levels.
- **Fun:** experts 1/1 (g4 Dee): "9 for 2 followers with a tiny trigger, never worth it."
- **Fits:** yes. It's the receiver's side of hosting.
- **Evidence:**
  - Owner lift: N −15 ±6 WEAK (28 owners, just under the read line). H and VH too few (7 and 1).
  - Choice log: near-dead at H and VH.
  - Paper: the giver of **Party Gifts** or **Largesse** chooses who receives and simply leaves the Hangers-On owner out. So it fires reliably only on **Toast** (+1 a Toast) and **Party Favors** (+1).
- **Played turn (round II, 4 players).**
  - Ava owns Hangers-On. Dee takes **Toast**: Ava gets 2+1 = 3 silver.
  - Then Dee takes **Party Gifts** and gives Ben 2 and Cal 1, skipping Ava. Ava gets 0.
  - Round total: about +1 to +2 silver. The best other use of 9 resources is buying followers: 5 + 1 + 1 over the turns, or 9 in round III. Hangers-On returns 2 followers plus about 5 silver over a game.
- **Bot-artifact check:** survives. The weakness comes from the giver's choice, which a human exploits harder than a bot.

### Gift Wrapper [3 silver + 3 any, worth 1]: "Whenever you give rivals silver, +1 follower."
- **Verdict: NUMBER**, low priority: +2 per gift, or cheaper. Cory's numbers; he prefers adding followers first.
- **Strategic:** MIXED at H (chosen 3%, close 2%) and VH (chosen 3%, close 2%).
- **Fun:** experts 2/1 (g4 Dee): "+1 per gift event is too little when Caterer already pays more."
- **Fits:** yes.
- **Evidence:**
  - Owner lift: N −3 ±5 (57). H and VH too few.
  - Choice log: rarely picked at both lookahead levels.
  - Paper: it pays once per space (decision Nov 1). A silver player makes 4 to 6 gift moves a game, so +4 to +6 followers for 6 resources.
- **Played turn (round II, 4 players).**
  - Dee holds Gift Wrapper and takes **Party Gifts**: +6, +1 = 7. Her Toast later that round: +6 silver, +1 follower.
  - Over the game: about 5 fires = 5 followers + 1 printed, for 6 spent in round I or II.
  - The best other use: a 6-cost member with an On Recruit, like **Philanthropists** (+1 printed, +4 on recruit, and a Tryout target), or 6 resources kept for contests.
- **Bot-artifact check:** a lean, not a firm finding. The Normal lift is noise. Only the two choice logs and one expert agree.

### Caterer (Silver's artifact): "Whenever you give a rival something, +2 silver."
- **Verdict: NUMBER, through Cory's queued test.** Cory already queued "Whenever a player is gifted silver, +1 silver." (Nov 1, 10:01am). Run it against today's card. Bots say today's card is weak; experts say it wins the silver contest but not the game.
- **Strategic:** artifact draft; no choice-log row.
- **Fun:** experts 4.3/3.7. "the artifact I'd least want to sit against" (g4 Ava 5/2); "it only kept me in a contest, it didn't win the game" (g4 Dee, who won silver all three rounds and finished last).
- **Fits:** yes.
- **Evidence:** owner lift N −5 ±2 (324 owners) and H −9 ±5 (62) point the same way. VH +3 ±9 (27, too few).
- **Played turn (round I, 4 players).**
  - Dee drafts Caterer. **Toast**: +3 silver, +2 from Caterer, each rival +1. She leads silver 5 to 1 and takes the +4 contest.
  - Against another artifact, take **Pocket Watch** (Purple's artifact; its holder wins 4 points more than even at Normal; its card text isn't in this review's sources). Caterer's extra 2 silver a gift is about 12 to 16 silver over a game, but it pulls the holder into holding silver for contests.
- **Bot-artifact check:** partly a bot effect, my guess. Normal holds silver for the contest instead of cashing it. Experts saw the same trap in g4, so the low score isn't only the bots.

### Toastmaster [1 silver + 2 any, worth 1]: "Whenever you take a Silver space, +1 follower."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H (close 6%) and VH (close 7%), nearly a real choice.
- **Fun:** experts 2.7/3.0. "cheap and paid a follower on 6 silver spaces" (g1 Dee); "slow" (g4 Dee).
- **Fits:** yes; experts 2 yes, 1 no.
- **Evidence:** owner lift N +3 ±3 (241), H −8 ±6 (37), VH too few. Paper: 3 cost for 1 + 3 to 6 followers, because Silver's spaces are the best on the wheel.
- **Bot-artifact check:** n/a.

### Debutantes [4 silver + 5 any, worth 2, counts as 2]: "On Use, once per game: double your silver. Each rival +2 silver."
- **Verdict: KEEP.** It's the build-around payoff.
- **Strategic:** MIXED at H (chosen 2%) and VH (chosen 3%). Bots rarely buy it, and when they do, owners win 39% vs 27% at Normal.
- **Fun:** experts 5/5 (g1 Dee): "doubling to 26 was the high point of my game".
- **Fits:** yes. The host's pile, and a gift to rivals.
- **Evidence:** too few at every level (N 28, H 4, VH 3). One expert.
- **Bot-artifact check:** a timing card, which Normal misjudges by the brief's own confound. Nothing to change.

### Smooth Talkers [5 silver + 6 any, worth 2, counts as 2]: "Your silver pays for any color."
- **Verdict: NUMBER.** Price down. Its worth went 1 → 2 on Nov 1; the 11 price is Claude's fill-in.
- **Strategic:** DEAD at H (chosen 1%). MIXED at VH (chosen 2%, close 2%).
- **Fun:** experts 3/2 (g4 Cal): "I buried it to keep it from Dee; never saw it played."
- **Fits:** yes. Silver as money.
- **Evidence:**
  - Choice log: H DEAD and VH 2%, the same direction at both lookahead levels.
  - Owner lift: N −5 ±10 (20, too few).
  - Price confound: an 11-cost card bought rarely is usually price.
- **Played turn (round II, 4 players).**
  - Dee holds 12 silver and 1 red and wants a 4-red member.
  - Without Smooth Talkers: one **Sweet Talk** (+3 silver, turn 3 into red), then buy.
  - With it: she pays the 4 silver straight away. It saves about one converter placement per colored buy, 2 to 3 placements a game.
  - The cost: 11 resources and a recruit for 2 followers. Buying followers would give 11 in round III, or two cheaper members in round II.
- **Bot-artifact check:** survives. Its value needs a silver pile and colored buys, which experts didn't find either.

### Philanthropists [3 silver + 3 any, worth 1]: "On Recruit: rivals gain up to 4 silver, split as you choose. +1 follower for each."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 8%) and VH (contender 81%, close 7%).
- **Fun:** experts 3.7/3.0. "where you send the silver decides the silver contest" (g1 Cal). A favorite Tryout target.
- **Fits:** yes.
- **Evidence:** owner lift N −1 ±3 (219), H +0 ±7 (37). 5 followers for 6. Sound.
- **Bot-artifact check:** n/a.

### Polisher [1 silver + 2 any, worth 1]: "On Use, once per game: turn up to 3 silver into 2 of any colors each."
- **Verdict: KEEP.**
- **Strategic:** as a buy, AUTO-PICK at H (close 6%) and VH (close 5%).
- **Fun:** experts 3.0/3.5. "pays back its cost with its one use" (g1 Cal).
- **Fits:** yes, as a converter of gifted silver.
- **Evidence:** owner lift N +0 ±3 (252), H +4 ±6 (52), VH +11 ±11 (20).
- **Lead, not a card finding:** the choice log's "Member uses" rows show its On Use as DEAD at H (96 offered, 0 chosen) and VH (39, 0). Either the bots fire it outside the logged choice (`botActivate` at 3+ silver), or they never fire it. Worth one check by whoever owns the bots before reading Polisher's lift.

### Collector [3 silver + 3 any, worth 1]: "Whenever a rival recruits paying silver, +1 silver."
- **Verdict: KEEP** (watch).
- **Strategic:** MIXED at H (chosen 3%, close 1%) and VH (chosen 3%).
- **Fun:** experts 1/1 (g1 Dee): "nobody pays silver for members much; passed twice". An invisible trigger, low fun on paper.
- **Fits:** loosely; silver going round the table.
- **Evidence:** owner lift N +13 ±6 STRONG (74; the lens calls it a SLEEPER). H too few (19), VH too few (6). The lookahead bots don't buy it. Normal's lift is the only positive, and it's thin.
- **Bot-artifact check:** n/a; nothing to change yet.

### Debt Collectors [4 silver + 4 any, worth 2, counts as 2]: "On Use, once per game: each rival gives you 2 silver, if they have it."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H (chosen 6%) and VH (chosen 11%, close 7%).
- **Fun:** experts 3.0/3.5. "firing it right after my own Toast took back what the Toast gave" (g1 Dee 4/5).
- **Fits:** yes. The best fit for "I give, and the giving comes back".
- **Evidence:** owner lift N +2 ±6 (66), H −3 ±9 (23). Fair at 8 cost for 2 followers + up to 6 silver.
- **Bot-artifact check:** n/a.

### High Society [4 silver + 4 any, worth 2, counts as 2]: "Game End: +2 followers per rival with more silver than you."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 6%), MIXED at VH (contender 74%, close 7%).
- **Fun:** experts 2/2 (two players, both weighed it and passed). "the math never got close to a buy of 10".
- **Fits:** yes. It's Cory's High Tide flip (want rivals rich in silver, yourself poor), and it pairs with **Largesse** in round III: give 10, then +6.
- **Evidence:** owner lift H +12 ±8 (40), N −1 ±3 (194), VH too few.
- **Paper risk (my guess):** when everyone cashes out to 0 in round III, ties at 0 pay nothing. Watch it in human play.
- **Bot-artifact check:** n/a.

---

## Yellow spaces

### Harvest: "+3 in round I, +4 in round II, +5 in round III, in colors you choose."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H and VH; chosen 56% of the time in round I at both levels.
- **Fun:** experts 3.0/3.0. "the most flexible space; my first pick and my last" (g3 Ava); "never a hard choice" (g1 Dee).
- **Fits:** yes.
- **Evidence:** taker lift N −1, H −1, VH −1. Probe 3 / 4 / 5, on band.
- **Bot-artifact check:** n/a.

### Trade Seeds: "+2 yellow, then swap up to 3 of your resources for other colors."
- **Verdict: NUMBER.** Grow it by round (more swaps or more yellow) so it isn't dead after round I.
- **Strategic:** MIXED at H and VH. Chosen 16-17% in round I, then 1-2% in rounds II and III at both levels.
- **Fun:** experts 2.8/2.6, split. "my closing swap into red decided a contest by one" (g1 Ava 4/4) against "rarely worth a minion" (g3 Ava 2/2).
- **Fits:** yes.
- **Evidence:**
  - Choice log: near-dead late at both H and VH.
  - Taker lift: N +0, H +0, VH −3.
  - Probe: flat 2.0 in every round, below the round II and III bands.
- **Played turn (round III, 4 players).** Ben holds 6 red, 2 blue and 1 green; Ava holds 7 red.
  - **Trade Seeds**: +2 yellow, swap 2 blue + 1 green into red, 9 red. He wins the red contest (+10).
  - **Harvest**: +5, all red, 11 red. He wins red too and keeps his blue and green.
  - Late, Harvest beats Trade Seeds for every contest swing it can make. Trade Seeds only wins the turn when Harvest is taken.
- **Bot-artifact check:** survives. Bots that look ahead to round end skip it late, and the played turn shows why.

### Dilute: "+2 yellow, then change up to 3 of rivals' resources one for one."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H (chosen 14% in round I) and VH (19% in round I). Mostly a round I and II tool.
- **Fun:** experts 3.9/3.3. "contest defense and offense in one minion" (g1 Ava 5/5); "my favourite tactical space" (g1 Dee).
  - **Customs** blunts it ("a hard counter", g3), which is the kind of interaction Cory likes.
  - It can backfire ("piled all my resources into red and won me Red", g3 Cal).
- **Fits:** yes, Cory's own call.
- **Evidence:** taker lift N +1, H +6 ±5, VH −6 ±8. The probe can't see changes.
- **Bot-artifact check:** n/a.

### Big Dilute: "+4 yellow, then change up to 6 of rivals' resources one for one."
- **Verdict: KEEP** (watch the feel).
- **Strategic:** AUTO-PICK at H (auto 75%) and VH (close 4%).
- **Fun:** experts 3.9 strategic but 2.8 fun, with three 2s. "six changes going first in round II erased my red lead before I moved; strong and a feel-bad" (g1 Cal 4/2); "heavy-handed" (g1 Dee).
- **Fits:** yes.
- **Evidence:** taker lift N +2 ±2, H +3 ±5, VH 0. Bots don't flag it. The only negative is the experts' fun score.
- **If human play repeats the feel-bad:** fewer changes is the obvious number (my guess). The bar for NUMBER isn't met today.
- **Bot-artifact check:** n/a.

### Melting Pot: "+1 per color among your members, in colors you choose. +2 yellow."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (round II chosen 12%), MIXED at VH (close 3%).
- **Fun:** experts 2.1/2.1. "with no members it's +2 yellow; nobody wanted it" (g3 Cal), but "Cover into Melting Pot as my last round II placement won yellow" (g3 Ben).
- **Fits:** yes, exactly Cory's "going broad".
- **Evidence:** taker lift N −1, H −6 ±4, VH +2. Probe 5.2 / 5.6, in band. It's dull for anyone not building wide, which is the point of the card.
- **Bot-artifact check:** n/a.

### Makeover: "+4 yellow, then rearrange your resources into any mix of colors."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H and VH, taken from a thin menu 43% (H) and 38% (VH): bots leave it for last.
- **Fun:** experts 3.8/3.1. "in round III it decides who wins any contest you like; I took it to deny Cal" (g3 Dee 5/4).
- **Fits:** yes, Cory's launderer effect.
- **Evidence:** taker lift N −3, H −2, VH +9 ±14. The probe sees only the +4; a rearrange into round III contests (+10 each) is worth far more to a big pile.
- **Bot-artifact check:** the low bot read is the timing confound. Experts value it.

---

## Yellow members and artifact

### Gardener [2 yellow + 1 any, worth 1]: "On Recruit: +1 of each color you have none of. Round Start: +1 of each color you have none of."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (chosen 66% in round I, and 53% of picks solo: Normal's quick score, not the lookahead) and VH (solo 57%).
- **Fun:** experts 3.0/4.0. "teaches you to spend down; a good engine piece" (g1 Ben).
- **Fits:** yes.
- **Evidence:**
  - The lens calls it a TRAP: owner lift N −5 ±2 at 97% ownership, H −4 ±7 at 90%.
  - Paper: about 3 resources on recruit + 1 or 2 per round start + 1 follower, for 3. That's good value.
- **Bot-artifact check:** likely a bot artifact (my read). Nearly every bot buys it, mostly on Normal's say-so, so owning it can't separate winners. The lookahead rarely weighed it against anything.

### Customs [2 yellow + 4 any, worth 1]: "Whenever a rival steals or changes any of your resources, +1 yellow."
- **Verdict: KEEP.**
- **Strategic:** DEAD at H (chosen 1%), MIXED at VH (chosen 1%).
- **Fun:** experts 4/4. "it made Dilute useless against my yellow, a neat counter" (g3 Dee). g3 Ava, Ben and Cal all felt it blunt their Dilutes.
- **Fits:** yes.
- **Evidence:** owner lift N +9 ±8 (38) when bought. H and VH too few.
- **Bot-artifact check:** the bots' DEAD tag is a reactive-card blind spot. One expert table watched it swing three players' plans.

### Go-Between [2 yellow + 2 any, worth 1]: "Whenever a space gives you resources, you may change 1 of them to any color."
- **Verdict: REWORK.** It should *gain* something, or fire less often for more. Today it's a recolor with a prompt on nearly every placement.
- **Strategic:** MIXED at H (chosen 6%, close 2%) and VH (chosen 8%, close 1%).
- **Fun:** paper only (no expert bought it). A yes/no prompt after most placements for a one-for-one recolor is fiddly.
- **Fits:** yes, "translate currencies". But Cory warned on Oct 31 it drifts toward Red's artifact.
- **Evidence:**
  - Owner lift: N −11 ±3 WEAK (158 owners, a solid read). H and VH too few.
  - Paper: a recolor adds nothing to the pile and matters only when one resource flips a contest.
- **Played turn (round II, 4 players).**
  - Ava owns Go-Between and takes **Toast**: 6 silver, of which she changes 1 to red, so 5 silver and 1 red. Worth something only if that red ties or wins red (+6).
  - The same 4 resources spent on 4 followers in round I is +4 for sure.
  - Over a game it's 10+ prompts and maybe one contest touched.
- **Bot-artifact check:** survives on paper. A better player gets the same one-resource nudge.

### Harmonist [4 yellow + 3 any, worth 1]: "Game End: +1 follower per full set you hold."
- **Verdict: REWORK.** Holding resources to game end pays below 1 for 1, so it's beaten by just buying followers. Cory raised its price on Oct 31 ("needs to be more expensive"), which made it worse.
- **Strategic:** MIXED at H (chosen 3%, close 1%) and VH (chosen 5%).
- **Fun:** paper only (no expert bought it).
- **Fits:** yes, going broad.
- **Evidence:**
  - Owner lift: N −2 ±7 (32). H and VH too few.
  - Choice log: rarely picked at both H and VH.
  - Paper: a full set is 4 resources (4 seats) that would buy 4 followers. Harmonist pays 1.
- **Played turn (round III, last placement, 4 players).** Ben holds 9 resources (3 red, 2 blue, 2 yellow, 2 purple).
  - He buys the 5 pack and is left with 4: 1 of each color, one full set.
  - Harmonist pays +1 for those stranded 4. Total +6, against +5 without it.
  - It's 7 resources for 1 printed follower plus about 1 a game, as a mop for stranded leftovers.
- **Bot-artifact check:** survives. It's arithmetic, not judgment.

### Dyer [4 yellow + 3 any, worth 1]: "On Recruit: +1 yellow per color you hold. Round Start: +1 yellow per color you hold."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 9%) and VH (close 7%), near a real choice.
- **Fun:** experts 4/4. "Four yellow on recruit and four more at round III; it's what made yellow mine" (g1 Ben).
- **Fits:** yes.
- **Evidence:** owner lift N +4 ±4 (169), H −6 ±8 (26, too few).
- **Bot-artifact check:** n/a.

### Ringleader [3 yellow + 3 any, worth 1]: "On Recruit: change 1 of each rival's resources one for one. +1 follower per rival changed."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 3%), MIXED at VH (close 3%).
- **Fun:** experts 2.8/3.0. "via Tryout: 3 followers plus three surgical changes, fun" (g1 Dee). A favorite Tryout target.
- **Fits:** yes.
- **Evidence:** owner lift N +3 ±3 (175), H 0 ±9 (22).
- **Bot-artifact check:** n/a.

### Drifters [2 yellow + 1 any, worth 2, counts as 2]: "Worth 2 followers. On Recruit: choose a color; these count as a member of that color."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 5%) and VH (close 7%).
- **Fun:** experts 3.0/3.5. "picking its color to keep Guest Book open was a nice small choice" (g1 Ben).
- **Fits:** yes. It feeds Melting Pot, Big Tent and Guest Book.
- **Evidence:** owner lift N −2 ±3 (251), H −3 ±7 (36). Cheap filler doing its job.
- **Bot-artifact check:** n/a.

### Big Tent [3 yellow + 4 any, worth 1]: "Game End: +2 followers per color you have exactly one member of."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H (chosen 5%) and VH (chosen 8%, close 5%).
- **Fun:** experts 4.0/4.0. "+8 for a free member once I shaped my cult around exactly one of each color" (g3 Ava 5/5).
- **Fits:** yes, a build-around for going broad.
- **Evidence:** owner lift N +3 ±5 (94). H and VH too few.
- **Bot-artifact check:** n/a.

### Caravan [4 yellow + 5 any, worth 3, counts as 3]: "Worth 3 followers. On Recruit: +1 of each color you hold. Round Start: +1 of each color you hold."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 4%) and VH (close 6%).
- **Fun:** paper only.
- **Fits:** yes, but it overlaps **Dyer** ("+1 yellow per color you hold" on the same timings). Two cards in a 10-card deck reward the same count.
- **Evidence:** owner lift N −3 ±3 (149), H −4 ±9 (23). Both slightly low, inside noise. Paper: bought in round II, about 3 followers + 3 or 4 now + 3 or 4 at round III, for 9. Fair.
- **Bot-artifact check:** n/a.

### Tastemaker [3 yellow + 3 any, worth 1]: "Whenever you change rivals' resources, +1 follower."
- **Verdict: NUMBER, with the words to match.** It pays +1 per space or card (decision Nov 1), but a player reads +1 per resource changed (g1 Ben). Either pay more per change (per rival touched is the middle ground, my guess) or say "each time" plainly. Cory's numbers; the wording goes through /card-words.
- **Strategic:** DEAD at H (chosen 1%), MIXED at VH (chosen 2%, close 2%).
- **Fun:** experts 2.0/1.5. "I read it as +1 per resource changed; it's +1 per Dilute, so it's a 6-cost card that paid me 2. The wording needs fixing." (g1 Ben 3/1); "never fired" (g3 Dee).
- **Fits:** yes. Cory asked for a payoff for changing rivals.
- **Evidence:**
  - Choice log: rarely picked at both H and VH.
  - Owner lift: N −15 ±6 WEAK (26, too few).
  - Experts: 2.0/1.5, plus a misread of the text.
- **Played turn (round I, 4 players).** Ava owns Tastemaker. **Dilute**: +2 yellow, changes 3 of Ben's red into blue, +1 follower. The best other space is **Harvest** (+3 in colors you choose). Tastemaker added 1. Across a game, about 3 change spaces = +3 followers for 6 resources.
- **Bot-artifact check:** survives. The text misread is human-only, and the arithmetic is the same at any skill.

### Guest Book (Yellow's artifact): "Whenever you recruit a member of a color none of your members have, +2 yellow."
- **Verdict: NUMBER.** Bigger per trigger, or a follower on top. Its 15-deck cousin **Matchmaker** pays "+2 in colors you choose and +1 follower" on the same trigger, which is the obvious direction (my guess).
- **Strategic:** artifact draft.
- **Fun:** experts 2.6/3.0. "the artifact I'd least want" (g3 Cal); "four triggers at most" (g1 Dee). It won Ben two yellow contests in g1, and "Drifters choosing a color to trigger it felt clever" (g3 Dee 4/5).
- **Fits:** yes.
- **Evidence:**
  - Owner lift: N −3 ±2 (310) and H −13 ±5 (47) point the same way. VH +2 ±11 (15, too few).
  - Paper: it can fire only once per table color (4 at 4 seats, plus a Drifters pick), all front-loaded. Call it 6 to 8 yellow a game.
- **Played turn (round I, 4 players).**
  - Ben drafts Guest Book. He recruits **Gardener** (first yellow member): +2 yellow. In round II he recruits a red member: +2. By the end, about 6 to 8 yellow in total.
  - Against **Caterer** on the same table: +2 silver per gift move, 6 to 8 moves, so 12 to 16.
  - Against Money Changers: owners win 17 points more than even at Normal; its card text isn't in this review's sources.
- **Bot-artifact check:** survives. The trigger cap is printed, and no skill raises it.

---

## Yellow, 15-card deck only (no deck-10 data; paper only)

- **Tinker [3 yellow + 2 any]: "On Recruit: swap up to 3 of your resources one for one. Round Start: swap up to 3 of your resources one for one."** KEEP. A **Trade Seeds** on a member; it shares Trade Seeds' weakness against **Harvest** late.
- **Matchmaker [3 yellow + 2 any]: "Whenever you recruit a member of a color none of your members have, +2 in colors you choose and +1 follower."** KEEP. It's the stronger **Guest Book**; Cory kept both (Oct 31, "yea").
- **Leveler [4 yellow + 3 any]: "On Use, once per round: choose a color; 1 of each rival's biggest color becomes it."** KEEP. A **Dilute** every round, and it fires **Tastemaker**.
- **Book Cookers [5 yellow + 4 any, worth 3]: "Worth 3 followers. On Use, once per game: rearrange your resources into any mix of colors."** KEEP. A **Makeover** on a card. Bots fire it only on round III with no minions left (`botActivate`), which is a reasonable line.
- **Spice Route [3 yellow + 2 any]: "Game End: +1 follower per color you hold 3 or more of."** Same flaw as **Harmonist** (my guess): holding 12 resources to game end for +4 when they'd buy 10+ followers. Flag before the 15-deck balance run.

---

## Per color

**Silver.**
- **Fantasy:** it plays the host. Every Silver space but Sweet Talk touches rivals (probe, 100%), and experts said every space fits (8 of 8).
- **What carries it:** the gift spaces, Party Gifts in rounds I and II and Largesse in round III. But they're the best spaces on the wheel for *anyone*: the top gain in round I (7.0) and round III (11.0), taken by about 2 seats a game. So Silver works as the table's follower pump more than as one player's lane.
- **Weakest link:** the members. Hangers-On, Smooth Talkers and Gift Wrapper are near-dead at both lookahead levels. Party Favors is the flattest space (fun 2.4, the rival's choice is no choice).
- **The one change:** bring **Party Gifts**' round I rate into band by growing it by round. It's the loudest number on the wheel, and it fuels the kingmaking complaint more often than Largesse does.

**Yellow.**
- **Fantasy:** it plays the gatherer and changer Cory described. **Dilute** is the star (experts 3.9/3.3, "my favourite tactical space"), **Harvest** is the steady fuel, and **Dyer**, **Big Tent** and **Customs** are the members experts enjoyed.
- **Weakest link:** the payoff cards that don't pay. **Harmonist** is beaten by buying followers, **Go-Between** recolors without gaining, **Tastemaker** pays 1 per space and reads as 1 per resource. On the wheel, **Trade Seeds** is dead after round I.
- **The one change:** **Guest Book**. Every Yellow table drafts against it, two bot levels agree it's weak (N −3, H −13), and its cap of 4 or 5 triggers is printed on the card.

**Cross-color note for the coordinator:** **Party Crasher** joining a center space doubled **Largesse** in both games where Largesse was called too big (g1, g4). That card belongs to the benders reviewer.
