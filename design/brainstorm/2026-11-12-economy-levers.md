# Brainstorm: economy levers to test beside the four settings

Date: 2026-11-12
Asked by Cory: "we need to start doing economy testing again! run games on "once a game" and evaluate today, richer, inbetween (one less any) and one less color than "today". So four. and actually before that think about other economic levers we could test."
Skill read: bash .claude/hooks/brainstorm-read.sh at 2026-11-12 04:15Z

Context (real numbers, design/eval/economy-baseline-2026-11-11): with +1 once a game at today's prices, Hard bots recruit 1.65 / 2.33 / 3.04 members by round against the pace 1 / 2 / up to 5; round III stays near 3 at every price tested; leftovers at game end about 5; winners near 86 followers. Levers already tested Nov 7 and left out here: follower buy rates, contest prizes, cloak start, round I deck limit, color vs any share (results-2026-11-07.md). These are rules dials, not cards; each is a bot-test setting first.

## Idea: Unclaimed +1 grows
1. Printed text: "A space's +1 nobody has claimed grows by 1 each round: its first taker gets +1 in round I, +2 in round II, +3 in round III." (Claude's numbers). Touches every space ending "+1 <color>." under Space +1 "Once a game".
2. Played turn: round III, 4 players; a round I space nobody took (say Gather "+3 red. If you recruit a member this turn of a color you already have: +4 followers. +1 red.") pays +3 red extra to its first taker; the best other space pays its printed gain only. Gain 3 resources, about a third of a round III member.
3. Both sides: no choice on the card; each player chooses between a fat untaken space and the space they wanted; both are live when the pile is 2-3.
4. Who feels it: the player who takes the grown +1 gets a gift, and a rival who wanted it has a reason to go there first. Visible race for neglected spaces.
5. Not refused: pitch-ledger has the Nov 11 once-a-game call (yes); no growing-pile idea logged. Different shape: adds to it, keeps first-taker-only.
6. Judged: intuitive (a pile of tokens on a space, as in many placement games), fun (a race), interacts (blocking); round I unchanged, so no dependence on members held.
7. Public and certain: tokens on the space, all public, no draws.
8. Color interactions: none: a table rule over every color.
9. Biggest case: about 12 of 26 printed +1s go unpaid today; if half grow to +3 by round III, about 6 spaces x up to 3 = up to 18 extra resources a game across 4 players, about 4-5 each, near 1 member each in round III. Never 10+ followers in one turn.
Verdict: send

## Idea: Round III spaces +1
1. Printed text: "In round III every space gives 1 more of its color." (dial SPACE_GAIN_R=0,0,1, already in the bot code).
2. Played turn: round III, a space printing "+2 blue" gives +3 blue; every other space too, so the gain is +1 a placement, about 4-5 a player over the round.
3. Both sides: no choices.
4. Who feels it: everyone equally; the player planning a big round III recruit feels it most. Weak on interaction.
5. Not refused: Nov 7 tested the opposite (+1/0/-1, round III less). Different direction, aimed at round III's 3 members against "up to 5".
6. Judged: intuitive (round III prints it), low on interaction; plain income.
7. Public and certain: printed per round.
8. Color interactions: none: a table rule.
9. Biggest case: 5 placements in round III x +1 = +5 resources a player, under 1 member; follower buys could take it instead (about +5 followers at 1 for 1). Under 10 a turn.
Verdict: send

## Idea: Round III members 1 cheaper
1. Printed text: "In round III every member costs 1 any less." (new dial, Claude's numbers). Named costs move with it.
2. Played turn: round III, a member at 3 red + 4 any costs 3 red + 3 any; a player with 7 resources recruits one more member a round in some turns.
3. Both sides: no choices.
4. Who feels it: players with members to buy; follower-buy players are unaffected, so it tilts round III toward members.
5. Not refused: Nov 11 tested cheaper members in every round (Cory: leave prices). This touches round III only, where the pace is short.
6. Judged: intuitive with a round marker; aimed exactly at the round III shortfall.
7. Public and certain: printed on the round marker.
8. Color interactions: none: a table rule.
9. Biggest case: round III, a player recruiting 3 members saves 3 resources, about half a member; with Green copying recruit spaces maybe 4-5 saved. No follower payout of its own.
Verdict: cut (verdicts #23, Cory Nov 7: "i don't like members getting 'cheaper' - it's hard to track in a live game.")

## Idea: First taker gets +2
1. Printed text: "A space's first taker, once a game, gets +2 of its color instead of +1." (new dial).
2. Played turn: round I, 4 players: the first taker of a fresh space gets 2 extra; a later taker gets the printed gains only. 1 extra a fresh space over today.
3. Both sides: no choices; makes going first to a fresh space a bigger pull than the space you wanted.
4. Who feels it: the race for fresh spaces; the rival who loses the race feels it.
5. Not refused: Nov 11 once-a-game is the live call; this sizes it, same shape at a different number (flagged as a number test, not a new idea).
6. Judged: intuitive (same rule, bigger number); helps round I and II pace more than round III.
7. Public and certain: the dot shows unclaimed spaces.
8. Color interactions: none: a table rule.
9. Biggest case: about 12 paid +1s a game become +2: 12 more resources across 4 players, 3 each, mostly in round I.
Verdict: send

## Idea: Bigger round III shop
1. Printed text: "Round III shows 10 shop members instead of 8." (new dial).
2. Played turn: round III, more members face up, so a player more often finds one they can afford and want; turns with nothing affordable drop.
3. Both sides: no choices.
4. Who feels it: everyone; Blue's shop cards read a longer row (more to scan).
5. Not refused: shop sizes 6/7/8 set by Cory Oct 22; no bigger row tested.
6. Judged: intuitive; costs table space and reading time on a phone screen (a risk).
7. Public and certain: face-up row.
8. Color interactions: none: a table rule; Blue's shop cards scale with it.
9. Biggest case: no resource or follower added; only choice. Shop-reading members (Trending-like) could read 2 more cards.
Verdict: cut (adds reading, no money: the round III shortfall is resources, since leftovers are 5 and nothing-affordable is 34%; weaker than the others)

## Idea: Today
Source: Cory, 2026-11-12: "run games on "once a game" and evaluate today, richer, inbetween (one less any) and one less color than "today". So four."
Verdict: send

## Idea: Richer
Source: Cory, 2026-11-12: "run games on "once a game" and evaluate today, richer, inbetween (one less any) and one less color than "today". So four."
Verdict: send

## Idea: In between
Source: Cory, 2026-11-12: "run games on "once a game" and evaluate today, richer, inbetween (one less any) and one less color than "today". So four."
Verdict: send

## Idea: One less color
Source: Cory, 2026-11-12: "run games on "once a game" and evaluate today, richer, inbetween (one less any) and one less color than "today". So four."
Verdict: send
