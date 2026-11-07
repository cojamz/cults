# The idea pipeline: new cards from idea to recommendation

Cory, Nov 7: "set back up our robust card/action testing system that comes up with what to try, tries it, then makes recommendations here. the point of this is coming up with GOOD ideas at scale and testing them robustly but quickly." Owner: thread "Rebuild the card idea testing pipeline". Shared files: /mnt/project-files/idea-pipeline/.

It replaces the Nov 4 overnight quality loop (/mnt/project-files/quality/), whose blind paper judges scored cards on a rubric. Calibration since showed paper judges match Cory's picks only at chance on unseen calls (design/eval/card-judging/run4-result.md), mostly because they accept too much. So here paper work cuts rule breaks and weak turns; it never claims to know his taste. Bots measure strength. Cory's marks on each batch are the taste signal, and they go into the ledger and the answer key.

## Stages

1. **Slots.** Which cards need a replacement: cards Cory cut or dislikes (design/pitch-ledger.md, /mnt/project-files/contests/card-review-1-2026-11-07.md), cards that break a standing rule (pile draws, hidden cards), cards the new contests broke. One slot = one card to replace.
2. **Generate (brainstorm skill).** Per slot, one general-purpose agent follows .claude/skills/brainstorm/SKILL.md from /mnt/project-files/idea-pipeline/generator-brief.md: about 12 seeds on different pieces, each played on paper (round I and III turns against the best alternative, both sides of every choice, who feels it, works without each other color, the six principles, judged against keeping the current card). It writes `<slot>-paper.md`; zero survivors is a valid answer. Ideas are built on a shared moment two colors both cause (Martyrs is the model) and on the slot color's contest.
3. **Foreman cut.** Claude reads every survivor's paper sheet, then `node scripts/ideas/lint.mjs <batch.json>` (word-level hard rules: public and certain, no discounts, no new tokens, spaces finish when taken, choices flagged). Keep at most one idea per slot, the one with the best retold turn; none if none clears "would Cory say cool".
4. **Build.** Code the card behind a switch (copy content/replace16.js: `REPLACE<n>=<key>` puts the new card in the old card's place). A unit test per sentence of the card, plus BOTSEE hints so the bots value it. Push; trials pin to a pushed commit.
5. **Quick screen (about 3 minutes).** `node scripts/trial/trial.mjs new <slot>-screen --env='{"REPLACE<n>":"<key>","MUST":"<color>"}' --level=normal --games=200 --no-queue`, then `work <slot>-screen --jobs=4` and `report`. Normal bots play a game in about a second. Catches a card that never gets bought, never fires, or wins everything; those go back to stage 3.
6. **Full trial.** The same env at `--level=hard --games=120` (Hard bots that see what cards do, 10-card deck, By color contests, 4 players, the card's color forced in). The same 120 games are played with and without the card. A Hard game takes about 45 seconds, so one card is about 25 minutes on a 4-CPU box; at scale, post to the queue and ask the coordinator for runner threads. Report: how often it's bought (or a space taken), how its owners do against the old card, and whether winning plans shift.
7. **Recommend.** Fill the batch file and run `node scripts/ideas/page.mjs <batch.json> <out.html>`: one phone card per idea, Was and Now with full text, the turn a player would retell, the color tie, the bot line, the pick. Publish it as a new page (never republish one Cory may be reading) and post one line with the link.
8. **His marks.** Log every idea and his answer in design/pitch-ledger.md; a no that shows a new pattern goes into .claude/skills/brainstorm/references/verdicts.md; calls go into design/decisions.md. Nothing ships without his yes.

## Bot bars (read as questions, never as verdicts)
- Bought in under 35% of games it shows up in: rarely bought. Owners under 20%: weak. Owners at 37% or more with 30+ owners: too strong as priced.
- Under 30 owners: too few to tell; say so.
- Cards that only answer a rival's move are undervalued by bots (brainstorm skill); say so beside the number.

## Batch file (`/mnt/project-files/idea-pipeline/<batch>/batch.json`)
```json
{ "title": "…", "sub": "…",
  "cards": [{ "slot": "Red member, Mob's place", "kind": "member|space", "color": "red",
    "was": { "name": "Mob", "text": "…" }, "now": { "name": "…", "text": "…", "price": "5 red + 4 any, worth 2" },
    "moment": "the best turn, as a player would retell it", "ties": "the shared moment and the colors that cause it",
    "screen": "<trial name>", "trial": "<trial name>", "pick": "Recommend: …" }] }
```
