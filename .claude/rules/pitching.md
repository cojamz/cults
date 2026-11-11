# Before any design pitch (spaces, members, fixes, "what could X do")

Chat threads don't load the /brainstorm skill, so read .claude/skills/brainstorm/SKILL.md and its references/cheatsheet.md and references/verdicts.md by path once per thread before the first pitch. Then, for every idea, in writing before it goes in a message:

1. **The printed text**, and the full text of every card or space it touches or is compared with (live: `node .claude/skills/brainstorm/scripts/live-board.mjs <color>`).
2. **One played turn**: 4 players, a named round, what you get here versus the best other space, by name and number. The gain is the difference, not this space alone.
3. **Both sides of every choice.** For each "you choose" or "a rival chooses", play the chooser: if one option is always better for them, it is not a choice, and the card is just that option. ("Give you 1 or you steal 2": nobody ever lets you steal 2. Cory, Oct 31: "makes me have no confidence in you.")
4. **Who at the table feels it**: a sting, a gift, a reason to block, or nothing. Nothing means cut.
5. **Not already refused**: check design/pitch-ledger.md for this color and verdicts.md. Same shape counts as the same idea.

6. **Judged like his marks**: run it through design/notes/card-judging-v2-2026-11-07.md and design/eval/card-judging/taste-guide.md in writing, judged against the bar on its own (not against a card it would replace; Cory, Nov 7) with "none of these" allowed, and play it at the table's real state that round (round I: most players hold 0 or 1 members). (Cory, Nov 8: "your ideas were fucking awful there its like you applied none of what we learned.")

7. **Public and certain**: no drawing from the top of the pile, no randomness, no hidden cards; everything a player could use is public (Cory, Nov 7, said many times: "i don't like drawing from the top of the pile. i don't like randomness. In general the game should be all public information."). presend bounces it.

8. **Color interactions** (pairs, the intersection table, ties between colors): follow .claude/skills/brainstorm/references/color-interactions.md in writing. A shared moment both colors cause, paid off by a card naming neither; never a generic shop or cult rule, their existing overlap, a crossed tie, or a card built on today's cards (Cory, Nov 7: "ties need to be intuitive", "these aren't really blue and red interactions").

9. **Biggest real case**: play each idea at the largest count a real game reaches (right after the spaces and members that feed it, in round III, with Green copying it) and compare with real holdings and scores from a game (a 4-player winner ends near 70 to 110 followers; a contest pays 4/6/10). An idea that pays 10+ in one turn outside round III's center is cut. (Cory, Nov 11, on two Silver spaces that read rivals' silver: "thats just a fucking insane amount of silver and followers. DID YOU USE BRAINSTORMING SKILL".)

**Write it down**: every idea, sent or cut, goes in design/brainstorm/<date>-<topic>.md (copy TEMPLATE.md there) with steps 1 to 9 and a verdict. A hook refuses any message, decision card or widget to Cory that pitches a name without a complete `Verdict: send` block (.claude/hooks/pitch-gate.mjs; presend runs it too).

Send only what survives (often 2 to 4), unless Cory set a count: then keep generating until exactly that many survive. If nothing survives, say so and ask one sharp question. Two nos on a slot in a row: stop and redo steps 1 to 4 before the next list. Log each pitch in design/pitch-ledger.md the same turn.
