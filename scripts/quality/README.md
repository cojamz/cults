# Evaluators for the card quality loop

Everything a lane or the Lab calls to judge a card. Judges are fresh agents (Agent tool, general-purpose) given an
instruction file in .claude/agents/ and a folder; scripts make the folders and add up the answers. Results live in
/mnt/project-files/quality/evals/. Rubric and bar: /mnt/project-files/quality/principles.md (judges read it live).

## Paper gate (a new card against the one it replaces)
1. Write a spec per slot in /mnt/project-files/quality/evals/gate/specs/<id>.json:
   `{"id","batch","lane","color","kind":"member"|"space","old":"<live name>","candidates":[{"name","price","text"}],"rules":"optional"}`
2. `node scripts/quality/paper-gate.mjs batch <batch> <spec.json...>` makes one folder per slot (old card and candidates
   under shuffled letters, the color's live board without the slot), anchors-<batch>/ (10 frozen cards), and slips one
   live card into one slot under a made-up name (the decoy).
3. Three fresh judges with .claude/agents/gate-judge.md score every folder of the batch (judge-<n>.json).
4. `node scripts/quality/paper-gate.mjs batchscore <batch>` scores each slot (result.md/json in its folder) and checks
   the run: anchors held still (mean move 0.5 or less against this rubric's baseline) and the decoy didn't gain 2 for
   looking new. Either failing voids the batch.
   A candidate passes when the run is steady, its median clears the bar, it beats the old card by 3 (GATE_BEAT), and
   it fits the text budget (or every judge gave it Clear 2).
5. Two linked slots of one color: `setpair <gate A> <gate B> "A+B" ...` (old+old always in), scored with `setscore <A>+<B>`. Board tweaks in a spec: `boards` (extra colors), `extraMembers` and `dropFromBoard` (bot-test cards). Set judges run as separate agents, one per judge.
5b. `node scripts/quality/paper-gate.mjs setcheck <slot id> [names]` then 3 judges with .claude/agents/set-judge.md, then
   `setscore <slot id>`: the color scored as a whole set with each version in the slot. A swap that lowers the set fails.
6. The lane's pick: `node scripts/quality/paper-gate.mjs claim <slot id> <name>` takes its shapes ("whenever a rival",
   "+1 follower per X"...) for the batch; it refuses a shape another pick already took.

## Play judge (after the build, alongside the trial)
1. `REPLACE7=1 node scripts/quality/sheets.mjs "<card>" [--want 3] [--jobs 3]` plays Hard-bot games (deck 10, By color,
   bots see cards) with the card's color on the table until 3 seats held it, and writes trimmed decision sheets to
   /mnt/project-files/quality/evals/play/<card>/ (about 20 s a game; the .full.md sheets keep every line).
2. Two fresh judges with .claude/agents/play-judge.md (play-judge-<n>.json): clear outcome, felt powerful, felt by the
   table, momentum, agency, catch-up, and whether every log line matches the printed text.
3. `node scripts/quality/play-score.mjs <folder>`: medians and any built-wrong line. Built wrong blocks the card.

## Blind A/B play (the ship gate, director Nov 4)
1. The Lab's trial gives sheet-<seed>-*.md for the new card and, in base/, the same seeds with the switch off from the seat that held the old card.
2. `node scripts/quality/play-ab.mjs <newDir> <baseDir> "<new name>" "<new text>" "<old name>" "<old text>" --out <dir>` trims each
   sheet around its own card, names both "the slot card", and shuffles each seed into pair-<seed>/A.md and B.md (key.json holds the answer).
3. Two or three fresh judges read <dir>/brief.md and .claude/agents/play-judge.md, never key.json, and write play-judge-<n>.json at the root.
4. `node scripts/quality/play-ab.mjs score <dir>`: the new card ships on play when the average of its six medians beats the old card's by 0.3
   or more and its Clear outcome median is above 0. Pairs with Last-Minute Shopper or Seat Filler count only on runs pinned at or after 91c72004.
   When the old card hard-fails, add `--old-hard-fail "<why>"`: the new card needs 1.0 or more on its own and no 0 on Clear outcome,
   and the gap is for information. A hard fail on rivals choosing during the owner's turn (Hawker, Potluck, Shake Down) waits on Cory's ruling before it ships.

## The ranking (every live card, worst first)
`node scripts/quality/ranking.mjs <dir with judge-*.json> ...` (bash scripts/quality/r1-ranking.sh rebuilds the
published one): median of the judges, the bar, protected and fuel-anchor flags, and the checks on the judges
(agreement, planted cards, Cory's held-out past calls). Board for judges: `node scripts/quality/board.mjs [colors]`
(live text, By color contests, 10-card deck only).
