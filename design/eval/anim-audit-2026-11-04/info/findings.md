# Info tracking audit: can a player follow what happened? (2026-11-04)

Screenshots cited here: /mnt/project-files/anim-audit/motion/ and /mnt/project-files/anim-audit/info/ (kept out of the repo for size).

Frozen build of 4e2da493, Chromium 1270x700, Steady, seed 7, one player against three Normal bots; shots from three playthroughs (bots differ slightly), each stands alone. Scripts (not committed): .v4-panel/info-audit.mjs, .v4-panel/info-probe.mjs. Written by a UX agent, saved by the foreman; verify before acting.

Worth keeping: the follower breakdown on the score hover (r2-followers.png), the log drawer (b-log.png), "your turn in N", "done this round" and "goes last" tags, the rim hover's standings table.

## Findings, worst first

**1. What rivals did since my turn is gone by the time I look.** (turn05-r1.png, b-burst13.png, turn09-r2.png) At 1270x700 the strip and the turn card share one box; the turn card wins, so the strip shrinks to "2 moves" in round I and to nothing in rounds II-III. At all 23 of my turns no rival line was readable. The turn card shows only the newest move, often my own. In b-burst13 P4 went 12→20 followers and 6→11 members between my turns while the box said "P2 took Bury +7 · +3 more". Cause: layout.css `[data-turn-card] > .lt-since` max-height minus `--turn-h`, plus SinceStrip.jsx folding. Fix: on your turn the turn card goes and its room goes to the strip; rivals' turn cards fold into strip lines; never show your own last move back to you.

**2. Scores jump with no trace.** (b-burst00 vs b-burst13, turn13-r2) The "+N" chip shows only the latest change. Fix: the chip shows the total since your last turn and stays until you place; the strip line says where it came from.

**3. Contest margins and "what I'd need" are hover-only, under a 4-line paragraph.** (r2-rim-red, r2-rim-yellow, r2-rim-leader) The rim shows a tiny leader emoji; ties stack emoji. In the hover the prize "6" and P2's count "6" read alike. Fix: the leader's emoji carries their count ("🐸 6"); the hover's rule cut to one line, then the table, then "You: 0, need 7 to lead."

**4. Round end comes as a surprise.** (turn05-r1, turn13-r2) The last minion of a round looks like any other turn. Fix: on the last pass the headline's second line reads "Round II scores after P3's turn"; close contests show their count on the rim.

**5. Rival member pop-ups cover your own seat and stay into your turn.** (turn14-r3, b-burst01) Gold boxes ("GUEST BOOK … P4: +4") sit over your resources on your turn; several fly at once in bot turns over the numbers they change. Fix: a trigger shows over its owner's seat only, clears before your turn, and becomes part of that move's strip line; one at a time.

**6. Checking a rival's members loses the board.** (t9-seat2, t13-seat2, t13-seat3) The seat hover is ~900x350 over the wheel, sorted by timing; Bouncers ("the next two rivals' turns are skipped") sits under "Done or plain". Fix: about half the width; members that act on rivals first.

**7. The turn card hides what matters behind "+N more".** (turn09-r2, turn14-r3) "P4 took Demote · +6 ● +1 ● +1 ● · +10 more" folds away the swap. Fix: taken, given, stolen and recruited first, resources last; "+N more" becomes the first name it hides.

**8. The round-end sheet is a wall and doesn't connect to the board.** (roundend1-c, roundend3-c) "This round" is a run-on; round III scrolls ("More below"); seat totals are final behind the sheet; nothing flies rim to seat. Fix: one line per player, breakdown in the total's hover; prizes fly from each rim before the sheet opens.

**9. Turn order beyond "your turn in N" is hard to read.** (turn09-r2, turn13-r2) The snake is spelled out only on the round-end sheet. Fix: "next" on the seat that plays next, "twice" on the snake's end seat, in the existing tag slot.

**10. Shown twice, in prime room.** The turn card repeats your own move; pop-ups repeat the score chip; from round II "Spare minions" pushes the strip's title to its own line, the first thing cut.

## Revamp proposals, ranked
1. Merge the turn card and the strip: each rival move since your last turn as one line, readable when your turn starts.
2. Rim counts on the board ("🐸 6"), "you need 7" in a short hover.
3. A last-pass warning in the headline.
4. Prizes fly from the rims at round end, then a short sheet.
5. A since-your-last-turn follower chip, with pop-ups folded into the strip.
6. A half-width seat hover listing members who can hit you first.
