# The idea pipeline: many new cards, each held to our bar

Cory, Nov 7: "set back up our robust card/action testing system that comes up with what to try, tries it, then makes recommendations here. the point of this is coming up with GOOD ideas at scale and testing them robustly but quickly." Then: "i don't think we should focus on particular card replacements, just generally is the card or action we are testing meeting our bar, not is it better than something. this process is focused on one card. and i want to do many many cards and actions." Owner: thread "Rebuild the card idea testing pipeline". Shared files: /mnt/project-files/idea-pipeline/.

Calibration showed paper judges match Cory's picks only at chance on unseen calls (design/eval/card-judging/run4-result.md). So paper work cuts rule breaks and weak turns, bots measure strength, and Cory's marks are the taste signal (logged to the ledger and the answer key).

## Flow
1. **Ideas, in batches of 5** (the brainstorm thread, .claude/skills/brainstorm/SKILL.md): a variety of colors, each built on a shared moment two colors both cause, played on paper before it's sent. Cory marks each. When he likes 4 of 5, the liked ones come here. Each no goes back into the skill.
2. **Build**: each liked card is coded as a candidate (`pool(...)` for a member, `poolSpace(...)` for a space; content/pool.js), in its color's file, tagged with its batch. A candidate is never dealt in a real game. A unit test per sentence of the card, and BOTSEE hints so bots value it. `node scripts/ideas/lint.mjs <batch.json>` checks the word-level hard rules.
3. **Quick look (minutes)**: `node scripts/trial/trial.mjs new <batch>-look --pool --env='{"POOL":"<key>,<key>,…"}' --level=normal --games=300 --no-queue`, then `work` and `report`. Catches a card nobody buys or one that wins everything; those go back to step 2 or to Cory.
4. **Full test**: the same with `--level=hard --games=400` and no `--no-queue`, so idle runners help. Every game rotates up to 2 candidate members per color into the deck in place of random live members of that color, and one candidate space per color into the wheel in place of a live space of the same round (scripts/lib/pool-rotate.mjs). So many cards share one run, and every card plays in many different decks. A Hard game takes about 45 seconds: 400 games is about 75 minutes on one 4-CPU box, about 20 with three runner threads (ask the coordinator).
5. **The bar**: the live cards in the same games set it (scripts/ideas/pool-report.mjs). A member meets it when it's bought at least as often as the bottom tenth of live members and its owners win within the middle 80% of live members; a space likewise on times taken and takers' wins. Verdicts: meets the bar, rarely bought or taken, owners lose, too strong as printed, too few owners to tell. Bots undervalue cards that only answer a rival's move; say so beside the number.
6. **Results**: fill the batch file and run `node scripts/ideas/page.mjs <batch.json> <out.html>`: one phone card per idea, its full text, the turn a player would retell, the color tie, the bot line. Publish as a new page and post one line with the link.
7. **His marks**: ledger, decisions, verdicts as usual. Nothing ships without his yes.

## Batch file (`/mnt/project-files/idea-pipeline/<batch>/batch.json`)
```json
{ "title": "…", "sub": "…", "pool": "<pool trial name>",
  "cards": [{ "slot": "Blue member", "kind": "member|space", "color": "blue",
    "now": { "name": "…", "text": "…", "price": "4 blue + 4 any, worth 1" },
    "moment": "the best turn, as a player would retell it", "ties": "the shared moment and the colors that cause it",
    "pick": "Recommend: …" }] }
```
`was` is optional (only when Cory asks to see a card beside another).
