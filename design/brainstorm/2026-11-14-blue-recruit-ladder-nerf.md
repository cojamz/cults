# Brainstorm: Blue, Recruit Twice (round II) and Markdown (round I), tune down

Date: 2026-11-14
Asked by Cory: "+5 blue recruit twice is a little too much maybe?" and "Markdown also seems too strong?"
Skill read: bash .claude/hooks/brainstorm-read.sh at 6:02pm Eastern

Live text (market.js, Cory's ladder of Nov 10 2:57pm, "Make it 3/5/7. and always from discard."; "Recruit Twice, Spree, Markdown should basically be scaling versions of the same thing"):
- Markdown (I): "Recruit a member from the discard pile now, paying 2 less. +3 blue."
- Recruit Twice (II): "Recruit a member from the discard pile now. +5 blue."
- Spree (III): "Recruit two members from the discard pile now. +7 blue." (not touched: the Nov 11 feel game rated it 2-3, "+7 blue only covered one 8-cost member")
Each recruits now; the turn's own recruit still comes at turn end. The printed number includes the space's own +1 (Cory's Nov 14 backlog: every space's +1 becomes its own dot, so the numbers below say "own +1 included").
Members it reaches (Blue, live): Thrift Hunters [3 blue + 4 any] "Whenever you recruit from the discard pile, +2 followers."; Power Shoppers [4 blue + 4 any] "Whenever you recruit your second member in a turn, +3 followers."; Repeat Customers [4 blue + 4 any] "On Recruit: +3 blue, then recruit from the discard pile."
Strength bands (design-core section 5): round I about 2 to 4, round II 4 to 6.

Why they read strong today: the space's blue pays for most of the member it recruits, and the member comes on top of the turn's own recruit. Markdown in round I: 3 resources held + 3 blue, a 6-cost discard member costs 4: a member for 1 of your own, plus a normal recruit, in the round where Cory's pace is one member per player (Nov 11). Nov 11 feel game: Markdown "taken every round… one of the best spaces in the game"; Anchorites recruited off it for 4 then paid 15 followers.

## Idea: Recruit Twice +3 blue

1. Printed text: "Recruit a member from the discard pile now. +3 blue." (own +1 included; with the dot rule, "+2 blue" plus its dot). Cards it touches: Thrift Hunters: "Whenever you recruit from the discard pile, +2 followers."; Power Shoppers: "Whenever you recruit your second member in a turn, +3 followers."; Word of Mouth (same ring): "+1 follower per 2 members you have. +1 blue."
2. Played turn: 4 players, round II, mid-round, you hold 6 resources, the discard pile holds an 8-cost member. Today: +5 makes 11, recruit it, 3 left for the turn's own recruit (3 followers). New: +3 makes 9, recruit it, 1 left (1 follower). Best other space, Word of Mouth with 4 members: +2 followers +1 blue, about 3. Gain today about 5 resources plus a member a turn early (about 7 to 8, over the band); new about 3 plus the member (about 5 to 6, inside the 4 to 6 band).
3. Both sides: one choice, which discard member; no rival chooses. Taking nothing still pays the blue, so it stays a fine space with an empty pile.
4. Who feels it: Blue rivals racing for the discard pile (the Nov 11 game: "a race for it each round") and anyone who wanted that discarded member; unchanged by the nerf.
5. Not refused: pitch-ledger Blue lines (Nov 10 12:12pm keep Recruit Twice; 2:57pm the ladder) and verdicts checked; this is his own ladder at a lower number, not a new shape. He asked for it to be less.
6. Judged: on its own at round II's real state (players hold 2 to 4 members, 6 to 10 resources): a clear recruit-now space with a smaller fuel number. Intuitive: same text, one number. Fun: still the race for the pile. Interacts: discard pile is shared, rivals fill it. Powerful: an extra member still feels big. Engine: feeds Thrift Hunters and Power Shoppers. Its color: Blue recruits more. The old +3 version with a paid extra recruit was thin in bot runs (Nov 1 report: "the +3 blue is most of its value"), but that one recruited at turn end from the shop; now the recruit is now and from the discard pile, which the Nov 11 game rated "Working".
10. Nobody acts on another player's turn: no.
7. Public and certain: the discard pile is face up; no draws or chance.
8. Color interactions: none, a single-color tuning of a live space.
9. Biggest case: round III, Green's Echo ("Copy the previous action.") right after it, holder of Thrift Hunters and Power Shoppers: today 5+5 = 10 blue, two discard members, +4 (Thrift) +3 (Power) = 7 followers plus 10 blue (about 10 more followers): about 17 followers in one turn pair. New: 3+3 = 6 blue and the same 7: about 13. Still the biggest Blue turn, 4 smaller, against a winner's 70 to 110 and a contest's 10; it comes from two minions and two members.
Verdict: send

## Idea: Recruit Twice up to 6

1. Printed text: "Recruit a member costing up to 6 from the discard pile now. +5 blue." (6 is Claude's fill-in). Cards it touches: as above.
2. Played turn: round II, 6 resources, discard pile holds an 8-cost and a 6-cost member. Today: the 8-cost one, 3 left. New: only the 6-cost one, 5 left for the turn's own recruit. Gain stays 5 blue plus a cheaper member, about 6 to 7; Word of Mouth about 3.
3. Both sides: which discard member, now only from the cheap ones; no rival chooses.
4. Who feels it: the rival who discarded a big member (Out of Style, Test Drive) no longer hands it to the Blue player through this space; Spree still can.
5. Not refused: no cap on this ladder was pitched before; different shape from the ledger's lines.
6. Judged: Intuitive: one more number to read on the space. Fun: less, the big grab (Con Men, Repossessors) is what players remembered. Interacts: same pile. Powerful: less. Engine: same. Its color: yes. Leaves the +5 blue, which is the part that funds the recruit, so the turn stays over the band.
10. Nobody acts on another player's turn: no.
7. Public and certain: the discard pile is face up and the member is picked openly; no draws or chance.
8. Color interactions: none, a single-color tuning of a live Blue space.
9. Biggest case: round III with Echo: 10 blue and two members up to 6, +7 followers from Thrift Hunters and Power Shoppers: about 17, same as today. It doesn't shrink the biggest case.
Verdict: cut (the blue is what makes it strong; the cap leaves the biggest case at about 17 and takes away the fun big grab)

## Idea: Recruit Twice no blue

1. Printed text: "Recruit a member from the discard pile now. +1 blue." Cards it touches: as above.
2. Played turn: round II, 6 resources: recruit a 6-cost member from the pile, nothing left for the turn's recruit. Gain about 1 plus a member a turn early, about 3; Word of Mouth about 3.
3. Both sides: which discard member.
4. Who feels it: Blue rivals racing for the discard pile, as today.
5. Not refused: new number.
6. Judged: too thin; the Nov 1 report found a paid extra recruit "comes out about even".
10. Nobody acts on another player's turn: no.
7. Public and certain: the discard pile is face up and the member is picked openly; no draws or chance.
8. Color interactions: none, a single-color tuning of a live Blue space.
9. Biggest case: Echo: 2 blue, two members, +7 followers: about 9.
Verdict: cut (below the round II band; the old paid-recruit version was a weak space for bots in every run)

## Idea: Markdown +1 blue

1. Printed text: "Recruit a member from the discard pile now, paying 2 less. +1 blue." (just the space's own +1). Cards it touches: Out of Style: "Discard 3 shop members and refill. +1 of each discarded member's color. +1 blue." (fills the pile in round I); Test Drive: "Discard a shop member. Use its effect now. +1 blue."
2. Played turn: 4 players, round I, second placement, you hold 3 resources; Out of Style went first, the pile holds members costing 5, 6 and 7. Today: 3 +3 = 6, the 6-cost member for 4, 2 left for the turn's recruit (2 followers). New: 3 +1 = 4, the 6-cost member for 4, nothing left. Best other round I space, Out of Style: about 4 resources. Gain today about 5 plus a member; new about 3 (the discount 2, the blue 1) plus a member, in the round I band.
3. Both sides: which discard member, or none; no rival chooses.
4. Who feels it: whoever discarded (Out of Style, Test Drive) handed it the member; a reason to take Markdown before a rival.
5. Not refused: his own ladder at a lower number; the name stays honest (Markdown means paying less).
6. Judged: at round I's real state (0 or 1 members, 2 to 5 resources): the discount is the card. Intuitive: same text, smaller number. Fun: the hard call on what sits in the pile stays (Nov 11: "Each take was a hard call"). Interacts: fed by rivals' discards. Powerful: a member in round I still feels big. Engine: feeds Thrift Hunters. Its color: Blue recruits more. Empty pile turn: just +1 blue, a weak take, which is the risk of a pile-dependent space.
10. Nobody acts on another player's turn: no.
7. Public and certain: the discard pile is face up and the member is picked openly; no draws or chance.
8. Color interactions: none, a single-color tuning of a live Blue space.
9. Biggest case: round III, Echo after it, holder of Thrift Hunters and Power Shoppers: today 6 blue, two members at 2 less each (4 saved), +7 followers: about 17. New: 2 blue, 4 saved, +7: about 13.
Verdict: send

## Idea: Markdown full price

1. Printed text: "Recruit a member from the discard pile now. +3 blue." (own +1 included). Cards it touches: as above.
2. Played turn: round I, 3 resources, pile holds 5, 6 and 7. New: 6 resources, the 6-cost member at full price, nothing left. Gain 3 plus the member a turn early, inside the band; Out of Style about 4.
3. Both sides: which discard member.
4. Who feels it: Blue rivals racing for the discard pile, and whoever discarded a member a rival now recruits.
5. Not refused: his own ladder minus the discount; same shape as Recruit Twice today, one rung smaller.
6. Judged: Intuitive: the plainest ladder (recruit now, +3, +5, +7). Fun: the hard call stays. Interacts: same pile. Powerful: a member in round I. Engine: same. Its color: yes. The name Markdown no longer describes a price cut, so it would want a new name.
10. Nobody acts on another player's turn: no.
7. Public and certain: the discard pile is face up and the member is picked openly; no draws or chance.
8. Color interactions: none, a single-color tuning of a live Blue space.
9. Biggest case: Echo: 6 blue, two members at full price, +7 followers: about 13.
Verdict: send

## Idea: Markdown 1 less

1. Printed text: "Recruit a member from the discard pile now, paying 1 less. +3 blue."
2. Played turn: as above, gain about 4 plus the member.
3. Both sides: which discard member.
4. Who feels it: Blue rivals racing for the discard pile, and whoever discarded a member a rival now recruits.
5. Not refused: new number.
6. Judged: a one-point nudge, the "small ball" change Cory dislikes; still over the band.
10. Nobody acts on another player's turn: no.
7. Public and certain: the discard pile is face up and the member is picked openly; no draws or chance.
8. Color interactions: none, a single-color tuning of a live Blue space.
9. Biggest case: Echo: 6 blue, 2 saved, +7: about 15.
Verdict: cut (too small a change; Markdown +1 blue cuts more and keeps the name honest)

# Part 2: the discard pile shuffling back in round III

Asked by Cory (Nov 14, 6:30pm Eastern): "the discard pile coinciding with the end of round 3 often shuffling back in is tough"
Rule today (discard.js, Cory Nov 6): "when discard is done it gets shuffled and turns back into the deck": when the deck is empty and the shop needs a card, the whole discard pile is shuffled into a new deck.
Counted with scripts/v4-reshuffle-count.mjs (Normal bots, 10-card decks, tables the game deals by seat count):
- 4 players (gold, red, blue, green): 0 of 60 games. The deck holds about 28 at round III start.
- 3 players (gold, red, blue): 40 of 40 games; in round III in 36 of 40, with 14 to 29 members (about 20) shuffled away from the discard pile, at any point in the round (0 to 17 minions already placed). The deck holds about 10 at round III start; the old row (6) goes on the discard pile and Blue's discards churn the rest. Round I also runs out in 3-player games (the round I deck is small), shuffling 0 to 2 members each time.
- 2 players (gold, red, no Blue): 20 of 40 games, all in round III, 10 to 18 members.
Why: the deck is 10 per color on the table plus grey, so a 2 or 3 player deck is a third to a half smaller, while each player still recruits and discards as much. Blue's spaces (Out of Style discards 3, Test Drive 1, the row each round) move cards from deck to discard fast.
Who it hurts: Spree ("Recruit two members from the discard pile now. +7 blue."), Recruit Twice and Markdown, Thrift Hunters ("Whenever you recruit from the discard pile, +2 followers."), Swap Shoppers, Repeat Customers: after the shuffle the discard pile is empty, so they pay only their blue.

## Idea: Refill from the discard pile

1. Printed text: (rule) "When the deck runs out, the shop refills from the bottom of the discard pile. The discard pile is never shuffled." Cards it touches: Out of Style: "Discard 3 shop members and refill. +1 of each discarded member’s color. +1 blue."; Spree: "Recruit two members from the discard pile now. +7 blue."
2. Played turn: 3 players, round III, 8th minion, deck empty, discard pile 20 members. Today: Ava's Out of Style discards 3, the refill shuffles all 23 into a deck; Ben's Spree next turn has an empty pile and pays only 7 blue. New: Ava's 3 go on top, the refill takes the 3 oldest from the bottom; Ben's Spree picks from 20 members. Gain for Ben: two members (about 2 to 6 followers with Thrift Hunters) instead of none.
3. Both sides: no choice in the rule.
4. Who feels it: Blue players keep their pile; a player who discards a member to deny it no longer sees it shuffled away, it stays in reach of Blue (a reason to block).
5. Not refused: the discard pile itself is Cory's (Nov 6); no line in the ledger or verdicts on how it returns. Different shape from the shuffle.
6. Judged: Intuitive: one rule, the oldest card comes back first, like a queue. Fun: Blue's round III plans stop failing on a shuffle nobody chose. Interacts: the discard pile stays shared all game. Powerful: no new power, keeps the color's spaces working. Engine or counter: keeps the discard-pile engine running late. Its color: Blue's "discard pile is our thing" (Nov 11).
10. Nobody acts on another player's turn: no.
7. Public and certain: no shuffle at all, so it removes the game's one mid-game random draw; the order comes from what players discarded, in public.
8. Color interactions: none, a table rule for every color.
9. Biggest case: round III, 3 players, Spree with a 25-member pile, Green copying it with Echo: four discard recruits, paid at full price from about 7+7 blue plus your own; with Thrift Hunters +8 followers and Power Shoppers +3. About the same as Spree today when the pile is full; it only stops the pile from vanishing. Nothing over 10 that isn't already possible.
Verdict: send

## Idea: No reshuffle in round III

1. Printed text: (rule) "In round III, when the deck runs out, the shop isn't refilled." Cards it touches: Out of Style, Spree, as above.
2. Played turn: 3 players, round III, 8th minion, deck empty, pile 20. Ava's Out of Style discards 3 and the shop drops from 7 to 4 members. Ben's Spree picks from 23. Everyone else recruits from a shrinking shop.
3. Both sides: no choice.
4. Who feels it: everyone recruiting from the shop late in round III; Blue gains a full pile.
5. Not refused: no ledger line on it.
6. Judged: Intuitive: yes. Fun: a shrinking shop in the burst round works against "round 3 is the intended burst". Interacts: Out of Style becomes a way to empty the shop on rivals. Powerful: no. Engine or counter: a counter to shop buyers, by accident. Its color: Blue only by accident.
10. Nobody acts on another player's turn: no.
7. Public and certain: yes.
8. Color interactions: none, a table rule for every color.
9. Biggest case: a heavy Blue round III empties the shop: in the 3-player games about 10 refills had no card, so the shop would end near empty for every player in the round meant for big recruits.
Verdict: cut (refill from the discard pile does the same for Blue without emptying the shop)

## Idea: Bigger deck for 2 and 3 players

1. Printed text: (setup) "With 2 or 3 players, add <N> more grey members to the deck." (N Claude's fill-in, about 10). Cards it touches: the grey members.
2. Played turn: 3 players, round III start: deck about 20 instead of 10, so most games end before it runs out.
3. Both sides: no choice.
4. Who feels it: nobody directly; fewer shuffles.
5. Not refused: Cory set 10 per color (Oct 31: "a 75 card deck feels excessive"); this adds cards only on small tables.
6. Judged: Intuitive: a setup line. Fun: more grey in the shop, fewer color members, which dilutes colors. Interacts: no. Powerful: no. Engine or counter: no. Its color: no. Leaves the rule that shuffles a full discard pile away; heavy Blue churn still runs out.
10. Nobody acts on another player's turn: no.
7. Public and certain: yes.
8. Color interactions: none, a table rule for every color.
9. Biggest case: a Blue-heavy 3 player game discards about 30 members by round III, more than 10 added cards cover; the shuffle still happens in some games.
Verdict: cut (treats the count, not the rule; dilutes colors; refill from the discard pile fixes it on every table)
