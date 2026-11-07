---
name: brainstorm
description: Generates, tests on paper and pitches design ideas for Cults, Cory's worker-placement board game: spaces (actions) for a color's round I, II or III slots, members, contests, a color's direction, fixes for cards he dislikes, and how two colors interact (color pairs, the intersection table, tying colors together). Use it whenever you are about to propose any card text, ability, rule or design option to Cory, including a one-line fill-in, a replacement inside a color review, or a list a coordinator asked for, even if nobody says "brainstorm".
---

# Brainstorm with Cory

Cory designs Cults; Claude brings ideas he can react to. Most of his nos trace back to four causes, and this skill exists to catch them before he has to:

1. **The idea misreads the game**: it needs a piece or rule that doesn't exist, or describes a card loosely.
2. **It was never played through a turn**, so it nets zero, copies a stronger space, or is small next to its alternatives.
3. **It's arithmetic, not a design**: a formula on your own pile, or a small tweak to a live card.
4. **It's not what he asked for**: a generic mechanic offered as a color interaction, the colors' existing overlap restated, or something he already refused.

**Judge each idea against the bar, not against a card it might replace.** Cory wants many, many new cards and actions; the question is whether this one meets the bar (the six principles, the paper test, his verdicts), not whether it beats a specific live card (Cory, Nov 7: "i don't think we should focus on particular card replacements, just generally is the card or action we are testing meeting our bar, not is it better than something"). Don't map ideas to slots unless he asks for a slot.

He is in a live conversation, so a pitch takes minutes, never a quoted half hour. Speed comes from reading the game once per thread, never from skipping the paper test below.

## Workflow

Copy this checklist into your working notes and tick it off. Steps 4 and 5 happen in writing, because the ideas Cory hated were the ones played out only in Claude's head.

```
- [ ] 1. Load the live game (once per thread)
- [ ] 2. Frame the slot or the color pair
- [ ] 3. Generate about 12 seeds, each on a different piece
- [ ] 4. Play every seed on paper (template below)
- [ ] 5. Cut against his verdicts and the kill list
- [ ] 6. Send what survives (often 2 to 4)
- [ ] 7. Log the pitch, and later his answer
```

### 1. Load the live game

Docs lag the game, and a pitch built on an old rule reads to him as not knowing the game. Once per thread, read:

- design/rulebook.md end to end, then [references/cheatsheet.md](references/cheatsheet.md) (the game in ten lines and the kill list).
- [references/game-model.md](references/game-model.md) (the pieces, what's scarce by round, the math) and [references/design-core.md](references/design-core.md) (engines, arcs, each color's fantasy, why his favorites worked).
- The live cards: `node .claude/skills/brainstorm/scripts/live-board.mjs <color-id> [more ids] [--members]`. Ids: red, echo (Green), thieves (Magenta), market (Blue), purple, gold, silver, yellow, trading (White). Live code wins over every doc.
- This color's latest calls (`grep -n "<Color>" design/decisions.md | tail -20`) and its lines at the top of design/pitch-ledger.md.
- For any color-pair work: [references/color-interactions.md](references/color-interactions.md), in full.

### 2. Frame it

Write down, in a few lines:

- **The color's contest** and what its player is trying to do. Cory designs each color from its contest ("what do you want to be doing and what's getting rewarded from your color"), so ideas grow from it.
- **His sentence for the color**, in his words if he has said one (Yellow: "rewards going broad… translate currencies"), and **the round III action** earlier slots build toward. If either is missing, ask him that one question and pitch nothing else; an identity invented from the color's name has failed every time.
- **The slot**: color, round, and the spaces around it, quoted.
- **The strength band**: the strongest reworked space in the same round, with its total, as a yardstick for size (design-core.md section 5). It sizes the idea; it isn't a card to beat.
- **His gist**, if he gave one. Ideas grown from his own words land far more often than ideas from nowhere.

For a color pair, frame both contests and the moments each color causes instead (color-interactions.md section 4).

### 3. Generate wide

Build each seed as **a verb on a piece**: a piece from game-model.md section 1 (a space, a minion, a turn, the recruit, the shop row, the discard pile, your member, a rival's member, followers, a resource, a contest) and a verb (take, give, swap, copy, discard, double, skip, move, cash in, block, match). Cover at least six pieces, so the 2 or 3 you send differ in what they touch; variations on one idea drew "not thinking broadly enough". For a fresh angle, hand the full brief (steps 1 and 2, the slot, his refusals) to a general-purpose subagent and generate there too, then read its output before using any of it.

### 4. Play every seed on paper

For each seed, write:

```
Card: "<printed text>"  (Claude's numbers are fill-ins)
Round I turn, 4 players: you hold <…>. Here you get <…>; the best other space, <name: text>, gives <…>. Gain: <difference>.
Round III turn: <same>, plus what a Green copy of it does.
Choices: <each "you choose" / "a rival chooses", played from the chooser's side>.
Who feels it: <a sting, a gift, a reason to block, or nothing>.
Ties to other colors: <the shared moment; how the card makes it happen by itself; what it does in a game with none of the colors that cause it>.
Intuitive: / Fun: / Interacts: / Powerful: / Engine or counter: / Its color:  (one line each)
Meets the bar: <design/notes/card-judging-v2-2026-11-07.md and design/eval/card-judging/taste-guide.md: does it clear our bar on its own; the taste guide's pattern 1, "the current card stays", is for reviews of live cards, not new ideas>
```

Why each line matters:
- The gain is the difference from the best alternative, never the space alone; a space that only hands back a minion or a turn nets zero.
- A choice where one side always wins for the chooser isn't a choice ("give you 1 or you steal 2": nobody lets you steal 2). The card is just the winning side.
- Nobody feeling it means the card adds nothing to the table: cut it.
- Round I tables hold 0 or 1 members, so judge a card at the table's real state that round.
- presend refuses a linked pitch file without the six principle lines.

### 5. Cut

Run every survivor past [references/verdicts.md](references/verdicts.md) (his yeses, and every failure mode with his words) and the cheatsheet's kill list, then against this color's ledger lines. The same shape as a refused idea is the same idea, however it's reworded. Keep the ideas that touch the most different pieces. If nothing survives, say so and ask one sharp question; a thin list costs less trust than filler. When Cory sets a count ("batches of 5"), send exactly that many: generate more seeds until that many survive (Nov 7: "what the fuck do you mean 4 survived. i said batches are 5").

### 6. Send

One short message (Cory reads on a phone): a numbered list he can answer by number, each line the card's printed text and what a player does differently, your pick in brackets, your numbers labeled as fill-ins. Name every live card you mention with its full text. Describe a card by what its text makes happen, never a shorthand like "does it twice". About 5 ideas per open slot at most, all in one message. Phrasings live cards use: [references/wording.md](references/wording.md), applied only after the ideas exist.

### 6b. Takeaways after each batch

Batches exist to tune this skill, not to produce every idea (Cory, Nov 7: "after i'm good with the quality you're just going to start proliferating ideas, no batches"); once he says the quality is good, ideas are generated at scale from this skill and go straight to testing. When Cory answers a batch, send him your takeaways, one line each, before they change the skill; he wants to see what you learned first. Then add them to references/verdicts.md (and color-interactions.md for ties), commit, and build the next batch on them.

### 7. Log

Add the pitch at the top of design/pitch-ledger.md the same turn. When he answers: mark it ✅ / ❌ / ↔ with his words, log any call in design/decisions.md, and add a line to references/verdicts.md if the no shows a pattern it doesn't name yet. Commit and push. Build nothing he hasn't confirmed; his answer replaces your pick unless he says "also".

## What his yeses share

Almost every space he approved is **one plain verb aimed at a real piece other than your own pile, creating a choice someone can feel**: Echo "Copy the previous action" ("absolutely perfect"), Shake Down (the victim chooses), Last Call (position traded for followers by a count everyone sees), Crowd In (bends the one rule everyone feels). Members he loves bend a rule, pay steadily, or score. Simple and big beats clever. Relative amounts and rule-bending feel powerful; small fixed numbers feel like "small ball".

His model of a color interaction is Martyrs, "Whenever this member leaves your cult, gain followers equal to its cost.": a moment Red and White both cause ("when a member leaves your cult… it interacts with red. Inherently"), paid off by a card that names neither color.

## Limits that come from the table

Cults must work on a physical tabletop, so these hold for every idea:

- **Everything public and certain**: no drawing from the top of the pile, no randomness, no hidden cards. He has said this many times.
- **A space finishes when taken.** "Whenever…", "this round" and "at round end" belong on members, where the card in front of you is the reminder.
- **Nothing to remember**: no running discounts on member prices, no per-space bonuses, nothing that reads as counting past events.
- **Avoid decisions on another player's turn.** It's a rule to bend only when it really makes sense, and the pitch says why; payoffs that fire on anyone's move with no decision are fine. Usually "on your turn" or a Round Start fixes it (Cory, Nov 7: "a rule we can bend occasionally but should avoid unless it really makes sense").
- **No new tokens** (they come from him; the Goes Last token is the only one).
- **No card that names or needs another color's mechanic**, since colors rotate between games. Colors meet through shared pieces.
- **Ties are the obvious ones** a table guesses without a rulebook.
- **No space charges you to use it, and none rescues you** from a space you can't use.

## Two examples of the paper test deciding

> White round II, "Send one of your members to the bottom of the pile, gain white equal to its cost." Round II, 4 players: you hold a 6-cost member worth 2 whose ability is spent. Send it: 7 white. Round III's "Turn all your white into followers" makes that 7 followers with no recruit spent. You traded 2 followers of worth for 7 and kept your recruit; the best other round II space gave about 4. Real sacrifice, real payoff: pitched, and he said yes.

> Purple round II, "+1 purple. Take one turn after this one." You place here and place your next minion right away; without it you'd place both anyway. Net: one turn moved earlier, for a minion spent on a space worth 1. It's a smaller Crunch Time ("Take two turns after this one."). Cut. Pitched anyway, it drew "do you understand this game at all?"

## After a no

Two nos on the same slot in a row: stop pitching it. Redo steps 2 to 4 properly, subagent included, before the next list; rapid re-pitches are how one no became eight. After two refused lists of replacements, go back to the color's contest and his starred cards, one color at a time.

## Members

Same workflow, with three differences. Members come after a color's spaces are set. A set runs from strong to weak with a few of the color's own counters (design/member-process.md). A member that is only "worth N followers" with no ability, or a small "+1 when…" trigger, reads as weak; check its best case and how often it fires per game. Price in the band design-core.md section 5 gives, and leave prices out of the pitch unless he asks.

## Reference files

| File | Read when |
|---|---|
| [references/cheatsheet.md](references/cheatsheet.md) | Every thread, first: the game in ten lines and the kill list |
| [references/game-model.md](references/game-model.md) | Every thread: pieces, contests, scarcity by round, the math |
| [references/design-core.md](references/design-core.md) | Every thread: engines, arcs, each color's fantasy, strength bands |
| [references/color-interactions.md](references/color-interactions.md) | Any color pair, intersection table, or "tie the colors together" |
| [references/verdicts.md](references/verdicts.md) | Step 5, every time: his yeses and every failure mode with his words |
| [references/wording.md](references/wording.md) | Step 6, writing the card text and the message |
