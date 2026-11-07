# The idea pipeline: many new cards, each held to our bar

Cory, Nov 7: "set back up our robust card/action testing system that comes up with what to try, tries it, then makes recommendations here. the point of this is coming up with GOOD ideas at scale and testing them robustly but quickly." Then: "i don't think we should focus on particular card replacements, just generally is the card or action we are testing meeting our bar, not is it better than something. this process is focused on one card. and i want to do many many cards and actions." Owner: thread "Rebuild the card idea testing pipeline". Shared files: /mnt/project-files/idea-pipeline/.

Calibration showed paper judges match Cory's picks only at chance on unseen calls (design/eval/card-judging/run4-result.md). So paper work cuts rule breaks and weak turns, bots measure strength, and Cory's marks are the taste signal (logged to the ledger and the answer key).

## Flow
1. **Ideas.** Cory, Nov 7: "batches are just to improve the skill not to create all the ideas. we can include batch ideas, but after i'm good with the quality you're just going to start proliferating ideas, no batches". So the brainstorm thread's batches of 5 only tune .claude/skills/brainstorm/SKILL.md until Cory is happy with the quality (liked batch ideas join the pool). From then on this thread proliferates: one generator agent per color and one for grey, each following the skill from /mnt/project-files/idea-pipeline/generator-brief.md, open-ended (members and spaces, no slot to fill), each idea built on a shared moment and played on paper. The foreman reads every survivor and cuts hard; what's left goes straight to step 2. No batches, no asking Cory before testing.
2. **Build**: each liked card is coded as a candidate (`pool(...)` for a member, `poolSpace(...)` for a space; content/pool.js), in its color's file, tagged with its batch. A candidate is never dealt in a real game. A unit test per sentence of the card, and BOTSEE hints so bots value it. `node scripts/ideas/lint.mjs <batch.json>` checks the word-level hard rules.
3. **Quick look (minutes)**: `node scripts/trial/trial.mjs new <batch>-look --pool --env='{"POOL":"<key>,<key>,…"}' --level=normal --games=300 --no-queue`, then `work` and `report`. Catches a card nobody buys or one that wins everything; those go back to step 2 or to Cory.
4. **Full test**: the same with `--level=hard --games=400` and no `--no-queue`, so idle runners help. Every game rotates up to 2 candidate members per color into the deck in place of random live members of that color, and one candidate space per color into the wheel in place of a live space of the same round (scripts/lib/pool-rotate.mjs). So many cards share one run, and every card plays in many different decks. A Hard game takes about 45 seconds: 400 games is about 75 minutes on one 4-CPU box, about 20 with three runner threads (ask the coordinator).
4b. **Feel, from the bot games** (`node scripts/ideas/feel-logs.mjs <pool trial> "<card>" --n=3`): replays 3 games where the card was bought or taken (winners and losers) with full logs; a reader agent writes what the table went through: who it stung, whether anyone could track it.
5. **The bar**: the live cards in the same games set it (scripts/ideas/pool-report.mjs). A member meets it when it's bought at least as often as the bottom tenth of live members and its owners win within the middle 80% of live members; a space likewise on times taken and takers' wins. Verdicts: meets the bar, rarely bought or taken, owners lose, too strong as printed, too few owners to tell. Bots undervalue cards that only answer a rival's move; say so beside the number.
5b. **The judges who play, for every card (not only cards that meet the bar)** (the six checks in design/notes/testing-setup.md still apply; Cory, Nov 7: "what happened to our qualitative evals?"):
   - Wording review (.claude/skills/review-text): the card's words beside what the game does; will a table read it right the first time.
   - AI expert games: `DECK=10 node scripts/v4-expert.mjs new <dir> --colors <the card's color + 3> --pool <key>` deals the candidate into a real AI-player game (meta.json records what went in), then `brief` and one agent per seat as usual. At least 2 games per card, 3 or more where we can (Cory, Nov 7: "remember when we had judges playing to see how the cards felt?"; feel is almost the most important part); its "real choice" and "fun to pick" ratings and the players' notes go on the results page.
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

## Robustness (Cory, Nov 7: "uplevel the robustness of the testing harness")
- **Did it act**: `node scripts/ideas/fires.mjs <tags>` plays quick games at 3 and 4 players with full logs and counts, per card, games dealt, bought or taken, and lines where it acted. A card bought but never acting is a build bug; fix it before any judge game.
- **Judges, robust**: `node scripts/ideas/judges.mjs plan <tags> --games 6` pins a worktree at the pushed branch head (rules never change mid-game), starts games at 3 and 4 players with rotating colors and seeds, and rotates three judge mixes (two expert sets, one with two newer players). Judges are blind: nothing marks a card as new. `status` flags a game with no move for 20 minutes as STALLED (relaunch that seat's agent with the same brief; it picks up where the game is). `report` puts each candidate's ratings beside the live cards in the same games and marks where judges split (spread of 1.2 or more, or fun ratings 3 apart).
- **Bot games**: `bash scripts/ideas/keep-working.sh <trial>` restarts a crashed runner until every block is done; runner threads can run the same line.
- Never edit the main checkout while judge games or runners use it; builders work in their own worktree.
