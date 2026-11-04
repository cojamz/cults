# Card trials: how we test a new card idea

## In plain words
- **What it does:** bots play the same games twice, once with the new cards and once without them, then compare.
- **Same games:** game 17 always deals the same table and the same shuffle, so any difference comes from the cards.
- **Settings by default:** 10-card deck, By color contests, Hard bots that can see what On Use and On Recruit cards do.
- **Any thread can help:** each helper takes the next 5 games nobody has taken yet. Nobody hands out game ranges.
- **Safe to stop:** a restart loses at most the 5 games that were being played, and never adds duplicate games.
- **Report:** each new card next to the card it replaces (how often it's taken, how often its owners win), then how winners won: how wide, how deep in one color (and whether it was their cloak's), where their followers came from, which member pairs win together, and how each cloak did.

## Commands (for threads)
```
node scripts/trial/trial.mjs new <name> --env='{"REPLACE4":"1"}' [--games=120] [--level=hard]
node scripts/trial/trial.mjs work <name> [--jobs=4]       # run it from any thread, on any box
node scripts/trial/trial.mjs status [<name>] [--json]
node scripts/trial/trial.mjs report <name>                # writes trials/<name>/report.md
```
- `--env` holds the change under test: `REPLACE<n>`, `PRICE="name=3/2"`, or any card switch. Table settings (DECK, CONTESTS, BOTSEE, SWAP, ONLY, MUST, BOTOPTS, BUDGET) apply to both sides. Every other key is treated as the change, and the base runs without it. Use `--base-env` to set the base yourself.
- `new` pins the trial to the commit you're on, and that commit must be pushed. `work` plays from its own checkout of that commit (`.trial-wt/`), so later edits on the branch never get mixed into a trial.
- Card pairs (new card for old card) come from the "old -> new" lines at the top of `content/replace*.js`, then from the same color. `--pairs="New=Old"` fixes a wrong pair. Each card named in PRICE is compared with itself.
- When /mnt/project-files/queue/jobs exists (the work desk), `new` adds a job there so idle runners pick the trial up. `--no-queue` turns that off.

## Where things live (/mnt/project-files/trials/)
- `trials/<name>/spec.json`: the settings, the commit, the two sides and the card pairs. Also `report.md`, `report.json`, and `complete` once every game is in.
- `arms/<id>/`: one side's games (`games/<first>.jsonl`, 5 games each) and the claims. The id is the bot level plus a hash of the env and the rules files (src/engine, tables.js, v4-balance.mjs, scripts/lib). Trials with the same base share it, so it gets played once.

## Why it's safe to run in parallel
- **Claim:** `claims/<first>` is created with O_EXCL. The worker rewrites it every minute with the time (`beat`); other boxes read that time, since a bare mtime touch never reaches them through the shared folder. No beat for 15 minutes, or a dead pid on the same box, frees the block.
- **Write:** the 5 games go to a fresh local `.trial-runs/<arm>/<first>.part`. Only when all 5 are there does it copy to a tmp file and rename that into place. Nothing is ever appended in the shared folder, which is what used to cause shard.sh's duplicates after a restart.
- **Read:** the report reads each game number once and leaves out stuck games. It compares only games both sides have played, so a half-finished trial is still a fair comparison.
- **Exit codes:** `work` exits 0 when nothing is left to claim and 1 after a failed block (it stops after 3).

## What the old pipeline was (Nov 3, still works)
`/mnt/project-files/replacements/runs/shard.sh` with hand-given ranges, `cards2.py` for the per-card compare, and BOTSEE set by hand. Runs already in progress there can finish. New card tests use this runner.
