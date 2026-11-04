# Balance 1.0 review: Silver and Yellow

Reviewer: Claude (color reviewer brief), 2026-11-01. Final re-check at about 12:45pm Eastern against design/eval/balance-1.0/final/ as refreshed at 12:41pm. Deck 10, 4 seats unless said. Cards as printed live on `claude/gifted-newton-3lcy3i`.

## Changed since interim

Verdicts that changed:
1. **Largesse**: KEEP → **REWORK**. Three more Silver tables (g7, g9, g11) found it the obvious first pick, and copies repeated it 3 to 4 times in one round III (up to 40 followers). The bots don't aim copies, so the experts and the bug log carry this.
2. **Party Gifts**: NUMBER → **KEEP**. The Hard and Very Hard numbers no longer point the same way (Hard −3, Very Hard 0). What the tables complained about is copies repeating it, which is the same fix as Largesse's.
3. **Polish**: NUMBER → **KEEP**. The Very Hard −9 lead is gone (now +2), Hard is +3, and 8 of the 12 new raters (g7, g9, g11) called it a contest breaker.
4. **Trade Seeds**: NUMBER → **KEEP**. Takers win more at Normal (+6, STRONG). The late-round dead spot is real but small, and experts used it as a denial pick (g5, g12).
5. **Caterer**: "NUMBER, through Cory's queued test" → **KEEP**. The test ran: every bot game used Cory's 12:19pm card, "Whenever a player is gifted silver, +2 silver." Normal +7, Hard +2, Very Hard +4. That's fair to slightly strong, not two levels pointing the same way.

Corrections that leave the verdict as it was:
- **Polisher**: the interim's "its On Use looks dead" lead was wrong. The choice log can't see uses. leads.md counted 11 uses in 77 owned games across 40 Normal games.
- **Go-Between** (REWORK) and **Guest Book** (NUMBER) are now backed at more levels (Go-Between WEAK at Normal and Hard; Guest Book negative at all three).
- **Drifters** stays KEEP, but the lens now calls it a TRAP at all three levels. See its entry for why I read that as mostly a counting effect.
- **High Society** stays KEEP. My interim guess, that everyone cashes silver out to 0 so it pays little, happened in g11.
- **Hangers-On** and **Smooth Talkers** now have too few owners at every bot level. Both NUMBER verdicts rest on the two choice logs and the experts.

Payout notes: none of the three payouts fixed after the runs started (Stash, Last Call's repeat skips, Recruiter on shop moves) is a Silver or Yellow card. The interim compared Caterer with Pocket Watch, whose numbers came from the old Last Call payout, so that comparison is gone.

## Instruments and shorthand
- **N / H / VH lift**: owner (member, artifact) or taker (space) win share minus expected, in points ± spread. Sources: final/report-normal-4p (389 games), report-hard-4p (220) and report-veryhard-4p (249). Red tables played on the reverted swap build are left out, and Red's re-runs land after 1:00pm, so Normal and Hard will grow. "Too few" means under 30 owners at that level.
- **Choice H / VH**: the choice-log tag at Hard (230 games) and Very Hard (317), with close-call %. Chosen % by round is given where it matters. The choice log does not record On Use firings.
- **Probe**: feel probe gain per placement (Normal, 300 games, interim run). It counts gains only.
- **Experts**: FEEL lines (strategic/fun, 1-5) from 12 expert games. Silver sat at g1, g4, g7, g9 and g11 (20 raters on each space). Yellow sat at g1, g3, g5, g10 and g12 (17 raters). g1-g10 used the old Caterer text; g11 and g12 used the current one.
- **Human playtests**: none for these colors. Silver and Yellow were left out of the Nov 1 playtest and came after Oct 22. The answer key's one Yellow entry (Guest Book didn't pay for Drifters) is fixed.
- Contest prizes: +4 / +6 / +10. Any resource buys 1 follower, but only in packs of 1, 5 or 10, and a pack uses the turn's recruit.
- Deck 10 leaves out Tinker, Matchmaker, Leveler, Book Cookers and Spice Route. They are judged on paper at the end.

---

## Check first: do Silver's giving spaces "feed the leader"?

Five tables have now said so or shown it: g1 (Ben, Cal, Dee), g4 (Dee's META), g9, and g11 (Cal: "Largesse handing the silver race to whoever you pick is a kingmaker lever").

**Played turn (g1, round III, from the transcript).** Dee held the silver lead. She joined Cal's **Largesse** ("Rivals gain up to 10 silver, split as you choose. +1 follower for each.") with Party Crasher and put all 10 on Cal, so that neither of the two players racing her for a place could take her silver contest. Cal was the leader. He turned the silver into a Crowd In minion and the last word on the red contest.

**Played turn (g11, round III, from the transcript).** Ava took Largesse first and put all 10 on Cal "so he ties Dee on silver". Ben later joined with Party Crasher and also put all 10 on Cal. Each time, the silver went to a player chosen to decide the silver contest, not to whoever was trailing.

**Verdict: partly true, unchanged.**
- The giver never loses ground to whoever receives. Party Gifts is +6 for the giver against at most +3 to one rival. Largesse is +10 against at most +10.
- The leader gets fed in one case: the giver holds the silver contest and is racing the trailing players for a place. Then the safest home for the silver is a player outside the silver race, often the leader.
- What's real is that **Largesse lets one player hand a third player up to 10 silver**, which decides a round III silver contest worth +10. g1 Ben and g11 Ben both said whoever gets the 10 wins silver.
- Bots can't show this either way, because they always gift to the rival with the fewest followers.
- The final games add the bigger problem: copies. That's under Largesse below.

---

## Silver spaces

### Toast: "+3 silver in round I, +6 in round II, +9 in round III. Each rival +1 silver in round I, +2 in round II, +3 in round III."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 3%) and VH (close 4%). The silver holder takes it every round, and in round III other players take it to deny the +9 (g4 Dee).
- **Fun:** experts 3.4/3.3 (20). "my engine every round" (g1 Dee 5/5). Without Caterer it's "a gift to the table" (g4 Ava). "in a four-player game the +1/+2/+3 to everyone makes it weak unless you hold Caterer" (g9 Ben 2/2).
- **Fits:** yes; 19 of 19.
- **Evidence:** taker lift N +1, H −2, VH +1, all noise. Taken 3.0 times a game. Probe 3.5 / 6.7 / 9.9, inside the round bands.
- **Bot-artifact check:** no change asked.

### Polish: "Turn 2 of your silver into 4 of any colors."
- **Verdict: KEEP** (changed from NUMBER).
- **Strategic:** MIXED at H (close 1%) and VH (close 3%). It's taken from a thin menu on 36% (H) and 20% (VH) of picks. In rounds II and III it's chosen 2-3% of the time, so it's a last-minion space.
- **Fun:** experts 3.0/3.0 (20). The first two tables called it a leftover (g1). The last three called it a contest tool: "a quiet space that became my game-winning contest flip: two silver into four magenta at the last moment" (g7 Ava 4/5); "won me purple in round I at the buzzer" (g11 Dee); "taking it in round III killed Ava's route to green" (g11 Ben 4/4).
- **Fits:** yes, as the receiver's answer to gifts; 19 of 19.
- **Evidence:** taker lift N −1 ±2, H +3 ±4, VH +2 ±3. The interim's Very Hard −9 was a small early sample and is gone. Probe 1.8 in round I, dead 23% in round I (nobody has silver yet).
- **Why it changed:** a converter that sits quiet until it decides a contest on the last turn is doing its job. 8 experts at g7, g9 and g11 used it that way or played around it.
- **Bot-artifact check:** n/a.

### Party Gifts: "Rivals gain up to 3 silver, split as you choose. +2 followers for each."
- **Verdict: KEEP** (changed from NUMBER). Its trouble is being copied, which is a cross-color fix (see Largesse). If Cory doesn't touch copies, this is the second card to look at.
- **Strategic:** MIXED at H (close 2%) and VH (close 3%). It's taken 2.7-2.8 times a game, so it's gone nearly every round.
- **Fun:** experts 3.6/3.9 (20), the best fun score among the outer spaces. "best outer-ring rate, picked every round" (g4 Dee). g9's table called it "the most-discussed problem at the table" (Ava 2/2), "a flat 6 followers that any Green copy repeats" (Ben 2/4). In g11: "echoing it doubles it" (Cal).
- **Fits:** yes; 19 of 19.
- **Evidence:**
  - Taker lift: N +4 ±2, H −3 ±3, VH 0 ±3. Only Normal is positive, so there's no two-level bot case for a number.
  - Probe: 7.0 in round I, top of the wheel by 2.6.
  - Experts: g9's 4 and g11's 4 players named it with Largesse in their first change.
  - The Hard/Very Hard skeptic note (skeptic.md) also applies: cutting round I's best space lowers a round I floor that meta.md already calls low.
- **Bot-artifact check:** bots don't aim copies, so they can't show the repeat problem. The table can.

### Party Favors: "+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver."
- **Verdict: REWORK** (unchanged). The rival's choice needs a real cost on both sides. Today it's always "give my junk color". Direction only; Cory designs it.
- **Strategic:** MIXED at H (close 2%) and VH (close 4%).
- **Fun:** experts 2.3/2.4 (20), the lowest Silver space at all five tables. "the choice of what to give was always the obvious junk color" (g4 Ben). "they give you what they don't care about" (g9 Dee). "the rivals' choice is always 1 silver for +2 silver so it's no dilemma; it mostly fed Dee's Caterer" (g11 Cal).
- **Fits:** yes; 19 of 19. It's Cory's "give another player the choice" shape with nothing at stake.
- **Evidence:**
  - Experts: 20 raters over 5 games, all between 2 and 3 strategic.
  - Paper: the played turn below shows the rival never faces a real choice (pitching rule 3).
  - Taker lift: N 0 ±3, H +1 ±4, VH −1 ±3. The interim's Hard −6 is gone, so the bots no longer back this. It's a feel rework, not a strength one. Probe 6.2 in round II, inside the band.
- **Played turn (round II, 4 players).** Dee takes **Party Favors**: +2 silver. Ava gives 1 green (she isn't in the green race), Ben gives 1 red, Cal gives 1 blue, and each gets 2 silver back. Dee gets +5 resources; each rival nets +1, plus 2 silver toward the contest. Played as each rival, giving the least-needed color is always right, and g11 Cal found giving 1 silver back is often best of all. The best other space is **Toast** in round II: +6 silver for Dee and +2 to each rival. It's bigger for her, has the same footprint on the table, and asks nothing.
- **Bot-artifact check:** survives. The flatness is a human read from 20 players, not a bot habit.

### Sweet Talk: "+3 silver. Then turn as many of your silver as you want into other colors."
- **Verdict: KEEP.** Cory: "silver needs an OUTLET", and on Oct 31, "might be a little too strong, but that's ok".
- **Strategic:** MIXED at H (close 2%) and VH (close 4%).
- **Fun:** experts 3.0/2.8 (20). In the later tables its main use was blocking: "I took it purely as a block so Ava couldn't turn silver into magenta, which I love as a pick" (g7 Cal 4/4); "I took it twice mainly to deny the silver chaser" (g9 Ava); "a big silver pile can break any contest through it" (g11 Ava).
- **Fits:** half. It's the outlet, but it's the only Silver space that gives nothing to rivals.
- **Evidence:** taker lift N 0 ±2, H −6 ±3, VH +1 ±3. Hard alone is low. Probe 3.1 / 3.2.
- **Bot-artifact check:** Hard's −6 is a single level. The experts value it as a threat that shapes everyone's piles.

### Largesse: "Rivals gain up to 10 silver, split as you choose. +1 follower for each."
- **Verdict: REWORK** (changed from KEEP). The +10 can't be repeated at full size by copies and joins, and the 10 silver shouldn't hand the silver contest to someone. Directions, Cory's call:
  - (a) a copy or a join of it pays less, the same rule for Party Gifts. g11 Ava's META asks for "followers only to the player whose minion is on the space, or much smaller when copied".
  - (b) Largesse itself shrinks. Cory, Oct 31: "try it the way I said it and see where it falls". Taken once, it falls at the top of the round III band; taken three or four times, it's over everything.
- **Strategic:** AUTO-PICK at H (auto 67%, close 3%), MIXED at VH (close 4%, contender 43%). Experts 4.0 strategic overall, but g7's whole table gave it 2: "the obvious first pick, not a choice" (Ava), "+10 flat for one minion with no setup… you take it without thinking" (Dee).
- **Fun:** experts 3.8 (20). "a real dilemma" (g4 Dee 5/5). Against that: "too big when copied" (g9 Ava 2/1); "far too big… 40 followers came off this one space in round III" (g11 Cal).
- **Fits:** yes; 19 of 19. It's the host's big night.
- **Evidence (two independent instruments, plus the bug log):**
  - Experts: g7 (4 of 4 called it obvious), g9 (4 of 4: used four times through Echo, Party Crasher and Tribute Band), g11 (4 of 4: used four times for 40 followers). Meta.md "what isn't" #2: all 8 g9 and g11 players made it their first change.
  - Bug log row 23 (RULE, as built): Echo, Reprise, Party Crasher and Tribute Band repeat it. It paid 10 three times in g9's round III, and Tribute Band +20.
  - Paper: +10 is a round III contest prize from one placement, with no setup.
  - Bots: taker lift N +4 ±3, H −6 ±4, VH −2 ±4. Bots don't chain copies onto one target, so they can't see this either way.
- **Played turn (g11, round III, from the transcript, 4 players).** Ava places first and takes **Largesse**: Cal +10 silver, Ava +10 followers. Cal's next placement is **Echo** ("Copy the previous action. +1 green."): Ava +5 and Ben +5 silver, Cal +10 followers. Ava later uses **Reprise** ("Copy an action with your minion. +1 green.") on her own Largesse: Cal +10 silver, Ava +10. On his last minion Ben plays **Party Crasher** ("On Use, once per game: your next minion can be placed on a space a rival already took.") onto it: Cal +10 silver, Ben +10. That's 40 followers and 35 silver from one space in one round. The best other round III placement is **Toast** (+9 silver, no followers) or a +10 contest that takes several minions to win. Ben won 122 to 102, and Ava's summary says Ben's Largesse join decided it.
- **Bot-artifact check:** better bots would make this worse, not better. The problem appears when players aim copies, which the bots never do.

---

## Silver members and artifact

### Hangers-On [4 silver + 5 any, worth 2, counts as 2]: "Whenever a rival gives you something, +1 more of it."
- **Verdict: NUMBER** (unchanged, lower confidence): price down. Cory raised its worth 1 → 2 on Nov 1. His rule is followers first, then price, so price is next.
- **Strategic:** MIXED at H (chosen 3%) and VH (chosen 2%). Close to dead at both.
- **Fun:** experts 1/1 (g4 Dee, the only rater): "9 for 2 followers with a tiny trigger, never worth it."
- **Fits:** yes. It's the receiver's side of hosting.
- **Evidence:** too few owners at every level (N 14, H 10, VH 8). The interim's Normal −15 is now unreadable. What remains is both choice logs at 2-3%, the one expert, and the paper point that a giver on Party Gifts or Largesse just leaves the Hangers-On owner out.
- **Played turn (round II, 4 players).** Ava owns Hangers-On. Dee takes **Toast**: Ava gets 2+1 = 3 silver. Then Dee takes **Party Gifts** and gives Ben 2 and Cal 1, skipping Ava. Ava's round gain from the card is about +1 to +2 silver. Spending the same 9 resources on followers gives 9 in round III.
- **Bot-artifact check:** survives. A human giver exploits the skip harder than a bot does.

### Gift Wrapper [3 silver + 3 any, worth 1]: "Whenever you give rivals silver, +1 follower."
- **Verdict: NUMBER, low priority** (unchanged, a lean): +2 per gift, or cheaper. Cory's numbers.
- **Strategic:** MIXED at H (chosen 3%) and VH (chosen 2%).
- **Fun:** experts 2/1 (g4 Dee, the only rater): "+1 per gift event is too little."
- **Fits:** yes.
- **Evidence:** owner lift N −2 ±7 (35). H and VH have too few owners. Both choice logs rarely pick it. On paper it pays once per space, 4 to 6 times a game, so +4 to +6 followers for 6 resources.
- **Played turn (round II, 4 players).** Dee holds Gift Wrapper and takes **Party Gifts**: +6, +1 = 7. Her later Toast that round: +6 silver, +1 follower. Over a game, about 5 fires and 1 printed follower for 6 spent. The best other 6-cost buy is **Philanthropists** (+1 printed, +4 on recruit).
- **Bot-artifact check:** a lean, not a firm finding. The lift is noise. Only the two choice logs and one expert agree.

### Caterer (Silver's artifact): "Whenever a player is gifted silver, +2 silver."
- **Verdict: KEEP** (changed from "NUMBER, through the queued test"). This is Cory's 12:19pm card ("seems like a lot. but willing to see what balance testing shows"), and every bot game in final/ ran it. It came out fair to slightly strong. If Cory wants it smaller, his own 10:01am number (+1) is the step.
- **Strategic:** artifact draft.
- **Fun:** experts 4.1/3.7 (7). On the current card (g11): "the artifact I'd least want to face: +2 on every gift action, including the rivals' Largesses" (Cal 4/3); "fired about ten times; it's per action not per player, which keeps it honest" (Dee 4/4).
- **Fits:** yes.
- **Evidence:**
  - Owner lift: N +7 ±3 (185), H +2 ±5 (90), VH +4 ±4 (108). Only Normal is clearly above even.
  - Silver's contest is swept (one seat wins it every round) more often than any other color's: N 8%, H 14%, VH 14%. Caterer is the likely engine (my guess). The sweeper won 60% of those games at Normal and 31-47% at Hard and Very Hard.
  - The 4-seat artifact lifts at Normal sum to about zero, so the skeptic's zero-sum correction moves Caterer little.
- **Words (bug log row 27):** it pays once per gift action, not once per player who gets silver. g11 Dee checked before drafting it; g9 Ava had to ask. If Cory wants the table to read it right first time, that's a /card-words pass, not a number.
- **Bot-artifact check:** n/a.

### Toastmaster [1 silver + 2 any, worth 1]: "Whenever you take a Silver space, +1 follower."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H (close 6%; round I close 12%) and VH (close 7%), close to a real choice.
- **Fun:** experts 2.7/3.2 (6). "3 cost that paid about 6 followers as the silver player, efficient" (g11 Dee); "mostly swap fodder" (g9 Dee).
- **Fits:** yes; 5 yes, 1 no.
- **Evidence:** owner lift N −1 ±4 (141), H +3 ±6 (62), VH −12 ±4 WEAK (64). Only Very Hard reads low.
- **Bot-artifact check:** one level only. The paper rate (3 cost for 1 + 3 to 6 followers) is fine.

### Debutantes [4 silver + 5 any, worth 2, counts as 2]: "On Use, once per game: double your silver. Each rival +2 silver."
- **Verdict: KEEP** (watch: every level leans high).
- **Strategic:** MIXED at H (chosen 4%) and VH (chosen 4%).
- **Fun:** experts 3.8/3.3 (4). "doubling to 26 was the high point of my game" (g1 Dee 5/5); "doubling to 20 with Caterer firing was my highlight; but it built a pile I couldn't defend" (g11 Dee 4/5); "flipped off Walk-In with no recruit left, so doubling silver was useless" (g9 Cal 3/1).
- **Fits:** yes.
- **Evidence:** owner lift N +14 ±10 (22), H too few (18), VH +13 ±10 (22). Every level is under 30 owners, but both readable signs point up.
- **Bot-artifact check:** a timing card, which Normal misjudges by the brief's own confound. Its use isn't in the choice log.

### Smooth Talkers [5 silver + 6 any, worth 2, counts as 2]: "Your silver pays for any color."
- **Verdict: NUMBER** (unchanged): price down. The 11 is Claude's fill-in and sits above Cory's usual 10 ceiling (skeptic.md).
- **Strategic:** MIXED at H (chosen 2%) and VH (chosen 2%).
- **Fun:** experts 1.7/1.3 (3). "11 for 2 followers and a payment trick, never close" (g11 Ben 1/1); "11 for 2 followers is never worth it this late" (g11 Cal 1/1).
- **Fits:** yes. Silver as money.
- **Evidence:** both choice logs at 2%; too few owners at every level (7, 6, 6); 3 experts; the price confound (an 11-cost card bought rarely is usually price).
- **Played turn (round II, 4 players).** Dee holds 12 silver and 1 red and wants a 4-red member. Without Smooth Talkers she takes **Sweet Talk** (+3 silver, turn 3 into red), then buys. With it she pays 4 silver straight away. It saves about one converter placement per colored buy, 2 to 3 a game, for 11 resources and a recruit for 2 followers.
- **Bot-artifact check:** survives. Its value needs a silver pile and colored buys, and experts didn't find that either.

### Philanthropists [3 silver + 3 any, worth 1]: "On Recruit: rivals gain up to 4 silver, split as you choose. +1 follower for each."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 6%), **REAL CHOICE** at VH (close 10%, contender 73%).
- **Fun:** experts 3.4/3.3 (7). "where you send the silver decides the silver contest" (g1 Cal); "+4 followers per Greatest Hits and I choose who gets the silver; good engine piece" (g9 Dee).
- **Fits:** yes.
- **Evidence:** owner lift N 0 ±4 (118), H −3 ±5 (56), VH −1 ±6 (56). It earns 5.3-5.6 followers for 6.
- **Bot-artifact check:** n/a.

### Polisher [1 silver + 2 any, worth 1]: "On Use, once per game: turn up to 3 silver into 2 of any colors each."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK as a buy at H (close 7%) and VH (close 9%).
- **Fun:** experts 2.7/2.5 (6). "3 silver into 6 purple won me the round II purple contest" (g11 Ben 4/4). "it converted all my silver when I wanted 2… the up-to-3 should let you choose fewer" (g7 Ben 2/1).
- **Fits:** yes, as a converter of gifted silver.
- **Evidence:** owner lift N −3 ±4 (141), H −9 ±4 (69), VH +5 ±5 (83). Mixed.
- **Correction:** the interim lead ("its On Use is DEAD in the choice log") was wrong. The choice log can't see uses, and leads.md found 11 uses in 77 owned games.
- **Check for the coordinator:** g7 Ben says it converted all his silver when he wanted 2. The card says "up to 3", so the player should choose 1, 2 or 3. Worth one look at whether the game offers fewer.
- **Bot-artifact check:** n/a.

### Collector [3 silver + 3 any, worth 1]: "Whenever a rival recruits paying silver, +1 silver."
- **Verdict: KEEP** (watch).
- **Strategic:** MIXED at H (chosen 2%) and VH (chosen 4%).
- **Fun:** experts 1/1 (g1 Dee, the only rater): "nobody pays silver for members much; passed twice." An invisible trigger.
- **Fits:** loosely: silver going round the table.
- **Evidence:** owner lift N +24 ±8 STRONG (37), H too few (16), VH +2 ±8 (34). The lens calls it SLEEPER and SKILL−: high at Normal, even at Very Hard. My reading: Normal owners are often the silver-heavy seats, and the card itself pays little.
- **Bot-artifact check:** the strong number appears only at the weakest level, so a better player wouldn't get it.

### Debt Collectors [4 silver + 4 any, worth 2, counts as 2]: "On Use, once per game: each rival gives you 2 silver, if they have it."
- **Verdict: KEEP** (watch: leans strong).
- **Strategic:** MIXED at H (chosen 9%), AUTO-PICK at VH (chosen 10%).
- **Fun:** experts 3.7/3.3 (10), the best-rated Silver member. "pulling 2 from everyone flipped the contest" (g7 Ben 4/4); "Worth more stolen than owned; whoever holds it at the right moment swings silver by 8" (g9 Ava 5/5); "it cuts through Lie Low and Bodyguards since it's a give" (g11 Cal 4/4).
- **Fits:** yes. The best fit for "I give, and the giving comes back".
- **Evidence:** owner lift N +20 ±10 (25, too few), H +1 ±8 (29, too few), VH +10 ±7 (45). Positive where readable, but there's no two-level case for a number. It went to worth 2 on Nov 1.
- **Cory's question (bug log row 5, WORDS):** whether Lie Low ("Rivals can't steal or recruit from you this round") should stop it. Three g11 players liked that it doesn't.
- **Bot-artifact check:** n/a.

### High Society [4 silver + 4 any, worth 2, counts as 2]: "Game End: +2 followers per rival with more silver than you."
- **Verdict: KEEP.** The fun note is confirmed, but there's no strength case either way.
- **Strategic:** AUTO-PICK at H (close 4%) and VH (close 6%).
- **Fun:** experts 2.3/2.2 (6). "rivals tapped out to 0 silver, so 'more silver than you' rarely counts" (g11 Ava 3/2, fit no); "it fights your own silver contest" (g11 Dee).
- **Fits:** yes. It's Cory's High Tide flip, and it pairs with **Largesse** in round III.
- **Evidence:** owner lift N −1 ±4 (113), H +10 ±7 (46), VH −7 ±6 (42). Mixed. My interim guess (round III cash-outs leave ties at 0, which pay nothing) happened in g11.
- **Bot-artifact check:** n/a.

---

## Yellow spaces

### Harvest: "+3 in round I, +4 in round II, +5 in round III, in colors you choose."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H and VH; chosen 54-61% in round I.
- **Fun:** experts 3.1/3.1 (17). "biggest raw gain each round and the space I fought hardest for" (g12 Ava 4/4); "Picking any colors makes it a generic resource space more than a yellow one" (g12 Ben, fit no).
- **Fits:** yes; 16 yes, 1 no.
- **Evidence:** taker lift N −2, H −4, VH +1. Probe 3 / 4 / 5, on band.
- **Bot-artifact check:** n/a.

### Trade Seeds: "+2 yellow, then swap up to 3 of your resources for other colors."
- **Verdict: KEEP** (changed from NUMBER). Growing it by round stays available if Cory wants round III to have a reason to take it. It isn't needed for balance.
- **Strategic:** MIXED at H and VH. Chosen 15-16% in round I, 2% in rounds II and III at both levels.
- **Fun:** experts 2.8/2.5 (17). The later tables used it to deny: "taking it last to shut Ben out of yellow was the decisive denial" (g5 Cal 4/4); "The real yellow choke point" (g12 Ben 5/4). Against that: "the swaps were too small to matter in a game where Makeover exists" (g10 Cal 2/2).
- **Fits:** yes.
- **Evidence:** taker lift N +6 ±3 STRONG (winners take it 0.55 a game vs 0.43), H −3 ±4, VH −1 ±4. Probe flat 2.0 per round.
- **Why it changed:** the late-round dead spot is still in both choice logs. But the takers aren't losing, and two tables found a denial job for it. A space that matters mostly in round I is acceptable.
- **Bot-artifact check:** n/a.

### Dilute: "+2 yellow, then change up to 3 of rivals' resources one for one."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H (chosen 15% in round I) and VH (14% in round I). Mostly a round I and II tool.
- **Fun:** experts 3.9/3.3 (17). "My favourite space… where you put the changed resources is a real dilemma since it feeds another contest" (g12 Ben 5/5); "recoloring Cal's 2 red away to win red was my favorite move" (g10 Ava 4/4). Against **Customs** it reads as a wash: "Customs refunding each change made my first Dilute a feel-bad wash" (g10 Cal 4/2; bug log row 15, as built).
- **Fits:** yes, Cory's own call; 17 of 17.
- **Evidence:** taker lift N +1, H +6 ±4 (winners 0.73 vs 0.53), VH −2. The probe can't see changes.
- **Bot-artifact check:** n/a.

### Big Dilute: "+4 yellow, then change up to 6 of rivals' resources one for one."
- **Verdict: KEEP** (watch the feel).
- **Strategic:** AUTO-PICK at H (auto 74%) and VH (close 3%).
- **Fun:** experts 4.1 strategic, 3.1 fun (17), with five 2s. "Getting six of my resources flipped twice was a feel-bad" (g10 Ben 4/2); "it backfired on me" (g12 Cal 4/2); "six changes decides a contest outright" (g5 Ava 5/4).
- **Fits:** yes.
- **Evidence:** taker lift N 0, H 0, VH −2. The bots don't flag it. The only negative is the fun gap. The misclicks some players blamed on it were the expert tool's shifting option numbers, fixed Nov 1 (bug log row 11).
- **If human play repeats the feel-bad:** fewer changes is the obvious number (my guess). The bar for NUMBER isn't met.
- **Bot-artifact check:** n/a.

### Melting Pot: "+1 per color among your members, in colors you choose. +2 yellow."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (round II chosen 13%), MIXED at VH (close 4%).
- **Fun:** experts 2.4/2.4 (17). "with no members it's +2 yellow; nobody wanted it" (g3 Cal); "Good value with three member colors, and late it's the last yellow space to deny" (g12 Ben).
- **Fits:** yes, Cory's "going broad"; 17 of 17.
- **Evidence:** taker lift N 0, H −1, VH +3. Probe 5.2 / 5.6, in band. It's dull for anyone not building wide, which is the point of the card.
- **Bot-artifact check:** n/a.

### Makeover: "+4 yellow, then rearrange your resources into any mix of colors."
- **Verdict: KEEP.** The one problem found is **Party Crasher** joining it after it's taken, which belongs to the benders reviewer.
- **Strategic:** MIXED at H and VH, taken from a thin menu 25% (H) and 23% (VH).
- **Fun:** experts 4.2/3.5 (17), the highest strategic score in Yellow. "It decides round III outright" (g10 Ben 5/5); "turning 15 resources into one color in round III is the biggest swing on the wheel, I took it as much to deny Cal as for myself" (g5 Ava 5/5).
- **Fits:** yes, Cory's launderer effect.
- **Evidence:** taker lift N +4 ±4, H −8 ±5, VH +3 ±5. Bug log row 14 (RULE, as built): g10 Ben used Party Crasher to join a taken Makeover on the last placement, rearranged 19 resources and won all three round III contests (+30).
- **Bot-artifact check:** the low Hard number is the timing confound. Experts value it.

---

## Yellow members and artifact

### Gardener [2 yellow + 1 any, worth 1]: "On Recruit: +1 of each color you have none of. Round Start: +1 of each color you have none of."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (chosen 69% in round I, 49% of picks solo, meaning Normal's quick score made the pick) and VH (solo 46%).
- **Fun:** experts 2.5/3.3 (4). "teaches you to spend down; a good engine piece" (g1 Ben); "its round-start almost never fired once I held all colors" (g5 Ben).
- **Fits:** yes.
- **Evidence:** owner lift N −8 ±3 WEAK (143, 84% of games), H +1 ±5 (78), VH +1 ±5 (75). The lens no longer calls it a trap. Only Normal reads low.
- **Bot-artifact check:** likely a Normal-bot effect. The lookahead levels read it as even.

### Customs [2 yellow + 4 any, worth 1]: "Whenever a rival steals or changes any of your resources, +1 yellow."
- **Verdict: KEEP.**
- **Strategic:** DEAD at H (chosen 2%), MIXED at VH (chosen 2%).
- **Fun:** experts 4/4 (2). "it made Dilute useless against my yellow, a neat counter" (g3 Dee); "made my yellow nearly immune to Dilute; quietly excellent" (g10 Ava). The Diluters at g3 and g10 felt it blunt their play, which is the counter-play Cory likes.
- **Fits:** yes.
- **Evidence:** owner lift N −7 ±7 (26, too few); H and VH too few.
- **Bot-artifact check:** the bots' DEAD tag is a blind spot for reactive cards. Two expert tables watched it change other players' plans.

### Go-Between [2 yellow + 2 any, worth 1]: "Whenever a space gives you resources, you may change 1 of them to any color."
- **Verdict: REWORK** (unchanged, stronger). It should *gain* something, or fire less often for more. Today it's a recolor with a prompt on nearly every placement. The skeptic's cheaper first step, under Cory's followers-first rule: worth 2.
- **Strategic:** MIXED at H (chosen 4%) and VH (chosen 4%).
- **Fun:** experts 2/2 (g12 Ava, the only rater): "the one-color tweak almost never mattered."
- **Fits:** yes, "translate currencies". But Cory warned on Oct 31 that it drifts toward Red's artifact.
- **Evidence:**
  - Owner lift: N −14 ±3 WEAK (83), H −19 ±4 WEAK (34), VH −2 ±8 (28, too few). Two levels agree, and it's the lowest Yellow member at both.
  - Expert: 1, agreeing.
  - Paper: a recolor adds nothing to the pile and matters only when one resource flips a contest.
- **Played turn (round II, 4 players).** Ava owns Go-Between and takes **Toast**: 6 silver, and she changes 1 to red, ending with 5 silver and 1 red. That's worth something only if the red ties or wins red (+6). The same 4 resources spent on 4 single-follower buys would be +4 for sure, at one recruit each. Over a game it's 10+ prompts and maybe one contest touched.
- **Bot-artifact check:** survives. A better player gets the same one-resource nudge.

### Harmonist [4 yellow + 3 any, worth 1]: "Game End: +1 follower per full set you hold."
- **Verdict: REWORK** (unchanged). Holding resources to game end pays below 1 for 1, so buying followers beats it. Cory raised its price on Oct 31 ("needs to be more expensive"), which made it worse.
- **Strategic:** DEAD at H (chosen 2%), MIXED at VH (chosen 2%).
- **Fun:** paper only (no expert bought it).
- **Fits:** yes, going broad.
- **Evidence:**
  - Choice logs: DEAD at H and 2% at VH.
  - Paper: a full set is 4 resources (4 seats) that would buy 4 followers. Harmonist pays 1.
  - Owner lift: N +4 ±9 (24); H and VH too few. Owners aren't losing games with it; it just rarely earns a buy.
- **Played turn (round III, last placement, 4 players).** Ben holds 9 resources (3 red, 2 blue, 2 yellow, 2 purple). He buys the 5 pack and is left with 4: 1 of each color, one full set. Harmonist pays +1 for those stranded 4, so +6 in total against +5 without it. That's 7 resources for 1 printed follower plus about 1 a game.
- **Bot-artifact check:** survives. It's arithmetic, not judgment.

### Dyer [4 yellow + 3 any, worth 1]: "On Recruit: +1 yellow per color you hold. Round Start: +1 yellow per color you hold."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 3%) and VH (close 6%; round II close 10%).
- **Fun:** experts 3.0/3.0 (3). "it's what made yellow mine" (g1 Ben 4/4); "7 for 1 plus 2 yellow at round three, never close" (g10 Ava 2/2).
- **Fits:** yes.
- **Evidence:** owner lift N +1 ±5 (81), H +4 ±7 (49), VH −9 ±6 (38). Mixed.
- **Bot-artifact check:** n/a.

### Ringleader [3 yellow + 3 any, worth 1]: "On Recruit: change 1 of each rival's resources one for one. +1 follower per rival changed."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 3%), MIXED at VH (close 5%).
- **Fun:** experts 2.7/2.8 (6). "via Tryout: 3 followers plus three surgical changes, fun" (g1 Dee); "the change-one-each is too small" (g12 Cal 2/2).
- **Fits:** yes.
- **Evidence:** owner lift N −3 ±4 (88), H 0 ±6 (47), VH +2 ±6 (51). It earns 4.1-4.6 followers for 6.
- **Bot-artifact check:** n/a.

### Drifters [2 yellow + 1 any, worth 2, counts as 2]: "Worth 2 followers. On Recruit: choose a color; these count as a member of that color."
- **Verdict: KEEP** (unchanged, but flagged). The lens calls it a TRAP at all three levels.
- **Strategic:** AUTO-PICK at H (close 6%), MIXED at VH (close 6%).
- **Fun:** experts 2.8/3.2 (6). "3 for 2 plus a free Guest Book trigger by picking magenta" (g3 Dee 4/4); "picking its color never mattered" (g10 Ben 2/2).
- **Fits:** yes. It feeds Melting Pot, Big Tent and Guest Book.
- **Evidence:** owner lift N −7 ±3 WEAK (146, 84%), H −12 ±4 WEAK (76, 84%), VH −8 ±5 (69, 79%).
- **Why it stays KEEP (my reading, a guess to check):** the lift subtracts what's expected for the owner's member count, and Drifters adds 2 to that count for 3 resources. The other cheap "counts as 2 or 3" cards lean low the same way: Early Birds (TRAP), Line Cutters (−2 to −4 at every level) and Scouts (−1 to −3), while experts call Line Cutters underpriced. That looks like the correction penalizing cheap multi-count bodies, not the card losing games. Before any number, whoever owns the report should rerun Drifters' lift without the member-count correction.
- **Bot-artifact check:** if the counting effect explains it, the finding goes away. If not, it's a NUMBER (worth or price) next round.

### Big Tent [3 yellow + 4 any, worth 1]: "Game End: +2 followers per color you have exactly one member of."
- **Verdict: KEEP.**
- **Strategic:** MIXED at H (chosen 7%) and VH (chosen 6%).
- **Fun:** experts 4.0/4.0 (2). "+8 for a free member once I shaped my cult around exactly one of each color" (g3 Ava 5/5).
- **Fits:** yes, a build-around for going broad.
- **Evidence:** owner lift N 0 ±5 (72), H −5 ±8 (27, too few), VH −2 ±8 (26, too few).
- **Bot-artifact check:** n/a.

### Caravan [4 yellow + 5 any, worth 3, counts as 3]: "Worth 3 followers. On Recruit: +1 of each color you hold. Round Start: +1 of each color you hold."
- **Verdict: KEEP.**
- **Strategic:** AUTO-PICK at H (close 2%) and VH (close 4%).
- **Fun:** experts 2.8/2.8 (4). "worked out to buying followers at par" (g5 Ben 2/1); "nice off Walk-In but only one round to pay out" (g10 Cal 3/4).
- **Fits:** yes, but it overlaps **Dyer** ("+1 yellow per color you hold" on the same timings).
- **Evidence:** owner lift N −3 ±5 (72), H 0 ±8 (32), VH +3 ±7 (45). Even.
- **Bot-artifact check:** n/a.

### Tastemaker [3 yellow + 3 any, worth 1]: "Whenever you change rivals' resources, +1 follower."
- **Verdict: NUMBER, with the words to match** (unchanged). It pays +1 per space or card (decision Nov 1), but a player reads +1 per resource changed (bug log row 6, WORDS, for Cory). Either pay more per change (per rival touched is the middle ground, my guess) or say "each time" plainly. Cory's numbers; the wording goes through /card-words.
- **Strategic:** DEAD at H (chosen 1%), MIXED at VH (chosen 2%).
- **Fun:** experts 2.0/1.5 (2). "I read it as +1 per resource changed; it's +1 per Dilute, so it's a 6-cost card that paid me 2. The wording needs fixing." (g1 Ben 3/1); "never fired" (g3 Dee).
- **Fits:** yes. Cory asked for a payoff for changing rivals.
- **Evidence:** both choice logs rarely pick it; too few owners at every level (14, 7, 12); experts 2.0/1.5 plus a misread.
- **Played turn (round I, 4 players).** Ava owns Tastemaker and takes **Dilute**: +2 yellow, changes 3 of Ben's red into blue, +1 follower. The best other space is **Harvest** (+3 in colors you choose). Tastemaker added 1. Across a game, about 3 change spaces = +3 followers for 6 resources.
- **Bot-artifact check:** survives. The misread is human-only, and the arithmetic is the same at any skill.

### Guest Book (Yellow's artifact): "Whenever you recruit a member of a color none of your members have, +2 yellow."
- **Verdict: NUMBER** (unchanged, stronger). Bigger per trigger, or a follower on top. Its 15-deck cousin **Matchmaker** ("Whenever you recruit a member of a color none of your members have, +2 in colors you choose and +1 follower.") points the way (my guess).
- **Strategic:** artifact draft.
- **Fun:** experts 2.5/2.8 (11). "The artifact I'd least want: three colors cap it at a couple of triggers, and I could deny it by buying the cheap Volunteer" (g12 Ben); "three triggers for 6 yellow early, then dead from round one on" (g10 Ava); "+2 yellow per new color fired 4 times, and Drifters choosing a color to trigger it felt clever" (g3 Dee 4/5).
- **Fits:** yes.
- **Evidence:**
  - Owner lift: N −11 ±3 (181), H −14 ±3 (93), VH −6 ±4 (95). All three levels are below even, and it's the lowest artifact at Hard.
  - Paper: it can fire only once per table color, at most 4 at 4 seats and 3 at 3 seats, all early. Call it 6 to 8 yellow a game.
  - Words (bug log row 26, for Cory): **Dabblers** count as every color, so once its owner has Dabblers, Guest Book can never pay (g12 Ava: "only fired once all game").
- **Played turn (round I, 4 players).** Ben drafts Guest Book. He recruits **Gardener** (his first yellow member): +2 yellow. In round II he recruits a red member: +2. By the end he has about 6 to 8 yellow in total. **Caterer** at the same draft pays +2 silver on every gift action at the table, about ten a game (g11 Dee), so 20 silver. **Fence** ("Whenever any player steals, +1 magenta.") is +8 to +19 for its owner at every bot level.
- **Bot-artifact check:** survives. The trigger cap is printed, and no skill raises it.

---

## Yellow, 15-card deck only (no deck-10 data; paper only)

- **Tinker [3 yellow + 3 any]: "On Recruit: swap up to 3 of your resources one for one. Round Start: swap up to 3 of your resources one for one."** KEEP. It's a **Trade Seeds** on a member, and like Trade Seeds it loses to **Harvest** late.
- **Matchmaker [3 yellow + 3 any]: "Whenever you recruit a member of a color none of your members have, +2 in colors you choose and +1 follower."** KEEP. It's the stronger **Guest Book**; Cory kept both (Oct 31, "yea"). It has the same Dabblers blind spot (bug log row 26).
- **Leveler [4 yellow + 4 any]: "On Use, once per round: choose a color; 1 of each rival's biggest color becomes it."** KEEP. A **Dilute** every round, and it fires **Tastemaker**.
- **Book Cookers [5 yellow + 5 any, worth 3]: "Worth 3 followers. On Use, once per game: rearrange your resources into any mix of colors."** KEEP. A **Makeover** on a card, and a strong round III closer given what Makeover did in g10. Watch it in the 15-deck run.
- **Spice Route [3 yellow + 3 any]: "Game End: +1 follower per color you hold 3 or more of."** Same flaw as **Harmonist** (my guess): holding 12 resources to game end for +4 when they'd buy 10+ followers. Flag before the 15-deck balance run.

---

## Per color

**Silver.** It plays the host: every Silver space but Sweet Talk hands rivals something, and experts said each space fits (19 of 19). Its gift spaces carry it: **Party Gifts** in rounds I and II, **Largesse** in round III, **Caterer** turning every gift at the table into silver. Silver's contest is swept more often than any other color's (8-14%). The weakest links are **Party Favors** (2.3/2.4 over 20 raters; the rival's choice is no choice) and the two expensive members nobody buys, **Hangers-On** and **Smooth Talkers**. The one change that would help most: **Largesse** stops paying its full +10 every time it's copied or joined. It was the first change for all 8 players at g9 and g11, and the same rule fixes Party Gifts.

**Yellow.** It plays the gatherer and changer Cory described. **Dilute** and **Makeover** are the stars (experts 3.9 and 4.2 strategic), **Harvest** is the steady fuel, and **Customs** and **Big Tent** are the members experts enjoyed. It's still the weakest color on the bot boards (main-color lift N −4, H −14, VH −2). The weakest links are the cards that don't pay: **Guest Book** (below even at all three levels), **Go-Between** (WEAK at Normal and Hard), **Harmonist** (beaten by buying followers) and **Tastemaker** (pays 1 per space, reads as 1 per resource). The one change: **Guest Book**, which every Yellow player drafts or plays against. Its cap is printed on the card, and a bigger payout per trigger fixes the color's lowest card.

**Cross-color notes for the coordinator:**
- **Party Crasher** ("On Use, once per game: your next minion can be placed on a space a rival already took.") joining a taken center space produced the biggest swings in both colors: Largesse in g1, g4, g9 and g11, and Makeover in g10 (+30). That card belongs to the benders reviewer.
- Echo, Reprise and Tribute Band repeating Largesse and Party Gifts (g9, g11) belongs to the Green reviewer and to meta.md's first focus area.
- Lift for cheap multi-count members (Drifters, Early Birds, Line Cutters, Scouts) may be pulled down by the member-count correction itself. That's worth one check by whoever owns the report script.
