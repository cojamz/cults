# Brainstorm: when a space pays its +1 of its color (game-wide rule)

Date: 2026-11-11
Asked by Cory: "also, I like the idea that the spaces give the +1 only once each round, to the first person who takes it. actually maybe the +1 should just be per game? wdyt" then "maybe we can run some economy tests with it."
Skill read: bash .claude/hooks/brainstorm-read.sh at 10:50am Eastern

Facts checked first (live board, all colors, branch claude/gifted-newton-3lcy3i):
- A space holds one minion per round. No live space or member lets a second minion join a taken space (Purple's old
  "place on taken spaces" space and Superfans are out of the wheel). Green copies run the space's effect without taking it.
- 19 of 48 live spaces print a separate "+1 <color>." line. Purple, Gold, Yellow and most Silver spaces print none;
  Red's Promote and Demote fold it into "+3 red".
- So "first taker each round" is exactly today's game: every taker is the first that round.

## Idea: Once per round, first taker
Source: Cory, 2026-11-11: "the spaces give the +1 only once each round, to the first person who takes it"
1. Printed text: rule line "A space's +1 <color> goes only to the first player to take it each round." Touches every space ending "+1 <color>.", e.g. Borrow: "Recruit the cheapest shop member, for free. Discard it at round end, before scoring. +1 red."
2. Played turn: 4 players, round II. P2 takes Borrow: +1 red as today. Nobody else can take Borrow this round (one minion per space). Identical to today.
3. Both sides: no choices.
4. Who feels it: nobody; nothing changes at the table.
5. Not refused: ledger has no +1 timing pitch; Nov 7 SPACE_GAIN economy dials moved the amount, not who gets it.
6. Judged: no change to judge; it only matters if a future card lets a second minion join a space.
7. Public and certain: yes.
8. Color interactions: none; a rule for every color.
9. Biggest case: 0 change in every round (economy test: 0 of the +1s were removed in 60 games).
Verdict: cut (it is today's rule already; only worth writing down if a joining card comes back)

## Idea: Once per game, first taker
Source: Cory, 2026-11-11: "actually maybe the +1 should just be per game?"
1. Printed text: rule line "Each space's +1 <color> goes only to the first player ever to take it." On a table: a +1 token sits on each such space and the first taker keeps it. Example space Toast: "+4 silver. Each rival +2 silver. +1 silver."
2. Played turn: 4 players, round III. Borrow was taken in rounds I and II. P3 takes it in round III: recruits the cheapest shop member, no +1 red. Best other open space, e.g. a round III space never taken before, still pays its +1. Gain difference: 1 resource toward a new space.
3. Both sides: no choices; it nudges a player toward a space nobody has taken yet.
4. Who feels it: the later takers of round I spaces lose 1 resource each time; a small reason to grab a fresh space first.
5. Not refused: new shape (timing of the base gain); SPACE_GAIN -1 (Nov 7) cut every +1, this cuts only repeats.
6. Judged: intuitive (a token you take), little fun added by itself; it mostly lowers income in rounds II and III on round I spaces, which already flood into follower buys late (Nov 7 judges).
7. Public and certain: yes, tokens on the board.
8. Color interactions: none; it hits colors that print the +1 (Red, Green, Magenta, Blue, White) and skips Purple, Gold, Yellow, which print none.
9. Biggest case: a round I space taken all three rounds loses 2 of its 3 +1s; over a 4-player game, see economy test numbers below.
Verdict: send (as a recommendation with the economy numbers, Cory's own idea)
