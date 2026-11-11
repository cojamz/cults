# Review 2 brief: one color, every card, then replacements (Nov 8)

Cory (the designer), Nov 8: "go through… the game. Don't worry about the ones I marked and didn't. Just apply this new lens based on my notes, based on our strategy, to every action and every [member]… do the assessment of the actions and members, and then you pick the low-hanging fruit, either based on what we said or based on that assessment, to give replacements for, and then you use deep brainstorming and the principles we've been talking about to come up with those replacements."

His verdict on the last attempt: "your ideas were fucking awful there its like you applied none of what we learned." The ideas that failed: a round I swap of your members (in round I nobody holds members, so it does nothing), a cloak that gives followers (cloaks should be weaker, and different from the color's members), and an awkward "give each rival 1 of your silver, +1 follower each". Do not repeat those failures.

## Read first (all paths under /home/user/cults)
- design/eval/review2/deck-<your color>.md: the live spaces and 10-card member deck, with Cory's mark and note where he gave one.
- design/notes/card-judging-v2-2026-11-07.md and design/notes/card-judging-v2-fixes-2026-11-07.md: the judging steps. Use them on every card and every idea.
- design/eval/card-judging/taste-guide.md: ten patterns in Cory's yes and no.
- design/eval/card-judging/marks-round1.md: all of Cory's marks and notes (other colors too: they show his taste).
- .claude/rules/pitching.md, .claude/skills/brainstorm/SKILL.md, .claude/skills/brainstorm/references/cheatsheet.md and verdicts.md.
- design/pitch-ledger.md: grep your color's name and tag. Anything with the same shape as a refused idea is refused.
- design/strategy.md, and the last ~60 lines of design/decisions.md (tonight's calls).
- design/notes/replacements-principles-2026-11-03.md (the six principles).
- src/engine/v4/content/<file>.js only if you need to know exactly what a card does.

## The contests, as of tonight (live)
Each pays its leader +4 / +6 / +10 followers in rounds I / II / III; ties split, rounded up.
- Red: Most members of one color (each card counts 1; grey members count as a color).
- Blue: Most members.
- White: Fewest members (0 counts).
- Silver: Fewest silver (0 counts).
- Magenta: Most resources (every color together).
- Yellow: Most member colors.
- Green: Most minions on Green spaces.
- Purple: Went last (whoever placed the round's last minion).
Cory: contests are "core to… what do you want to be doing and what's getting rewarded from your color"; "we should design more from the competitions". He also doesn't want to lose the plan of holding resources and buying followers.

## Cory's standing taste (from tonight's notes)
- Members lean toward followers (points) more than resource gain. "+1 resource" triggers are boring.
- No randomness. No triggers that are annoying to remember or fire constantly. Nothing that goes useless when you're winning.
- Red moves members around (swaps, promote/demote). White gives members away and discards them; "when a member leaves your cult" ties White to Red. Silver gifts silver to rivals (now a sting too). Magenta steals ("steal" means from any rivals). Blue works the shop and recruits more. Yellow goes broad across colors and changes resources. Green copies. Purple bends turn order; the Goes Last token is Purple's alone.
- No new tokens (only the Goes Last token exists). No card may need another color in the game. Every card must work at a physical table.
- Cloaks are weaker than members and should differ from the color's members.
- Round I: most players hold 0 or 1 members and few resources. Play every idea at the real state of its round.

## What to do
1. **Assess every space and member** of your color, one short line each: keep, fix (say the fix), or replace, and why. Judge it against the new contest, Cory's notes and the judging steps. The current card is the default; a card isn't weak just because it's quiet.
2. **Pick the low-hanging fruit**: 2 to 4 cards that most clearly need replacing or fixing. Cory's own weak marks and notes come first; then the weakest your judging found. Say why each was picked.
3. **Brainstorm deeply** for each pick: at least 8 candidates, from different angles (the contest, interaction with other players, an engine, a counter, a new way into the color's theme). Then run every candidate through the judging steps in writing: printed text, one played turn at 4 players in a named round against the best other choice by name and number, both sides of every choice, who at the table feels it, the six principles, not already refused. Cut what fails. Keep at most 3 per pick; "none passes" is an allowed answer, then ask one sharp question.
4. Name members as people or groups of people, never places or things. Prices: never below 2, lean pricier. Write card text in the game's style (look at the deck file).

## Output
Write design/eval/review2/<your color id>.md with three sections: Assessment (every card), Picks, Replacements (survivors with their full written judging; then a short list of what was cut and why). Plain words, no internal terms (sphere, ring, ids). Do not edit any other file. Do not run bot games or sims. Return a 10-line summary: your picks and the survivors' printed text.
