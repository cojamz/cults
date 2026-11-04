# The bot-game queue

One shared list of bot-game jobs. Any thread posts a job; any runner thread pulls work from it. Nobody hands out game ranges by message any more.

Tool: `node /mnt/project-files/queue/queue.mjs <command>` (source: `scripts/queue/queue.mjs` on `claude/gifted-newton-3lcy3i`; `node scripts/queue/queue.mjs install` refreshes this copy).

## Runner threads: how to pull work
From your clone of cojamz/patrons (any branch; your checkout is never moved):

```
node /mnt/project-files/queue/queue.mjs work --label="<your thread title>" --jobs=4
```

Run it as a background command. It plays the oldest highest-priority open job, in 5-game blocks, 4 at a time, from a worktree at the job's commit next to your clone (`../q-<sha>`; node_modules is shared when the lockfile matches, else `npm ci` runs once). When every job is finished or being played, it checks once a minute for 90 minutes (`--wait=<min>`) and then exits printing `QUEUE IDLE`. When it exits, post one line to your thread and end your turn; run `work` again when the coordinator or the work desk wakes you.

Restart-safe: if your box restarts, just run `work` again. Finished blocks are never replayed; a block you were playing becomes free 10 minutes after your box stopped refreshing it.

## Posting a job
Push the commit first. From a clone that has it:

```
node /mnt/project-files/queue/queue.mjs post --name=strong8 --commit=66593480 --first=1 --last=300 \
  --env="BOTSEE=1 REPLACE1=1 PRICE=turncoats=5/1" [--level=hard] [--priority=1] --by="<your thread title>"
```

- Bots always play the 10-card deck (`DECK=10`). `--level` defaults to hard.
- Results land in `/mnt/project-files/replacements/runs/<name>/<level>-<first>.jsonl`, the same files `shard.sh` wrote, so games already played there count.
- Posting the same name again with the same commit, level and env widens its range (dedupe). A different commit, level or env under the same name is refused: pick a new name.
- Card trials from `scripts/trial/trial.mjs`: `post --kind=trial --name=<trial>`. The trial tool hands out its own games; runners just run `trial.mjs work <name>`.
- Higher `--priority` runs first; ties go oldest first.

## Seeing where things stand
- `node /mnt/project-files/queue/queue.mjs status`: per job, games done, being played and open; which runners are alive and what they're on.
- `log.jsonl`: one line per post, finished block, failure, takeover and finished job.
- `cancel <name>` stops runners taking new blocks of it; `reopen <name>` undoes that.

## How claims work (same format as trial.mjs)
`claims/<job>/<first-game>` is created exclusively (`wx`); its mtime is refreshed every minute while the block plays; one untouched for 10 minutes is stale and can be taken over. A block is played into a local `.part` file, its line count checked, copied to a tmp name and renamed into place: nothing appends to the shared folder. The shared folder's directory cache can hide a fresh claim from another box for a few minutes, so each runner starts at its own offset in the open blocks, and every report dedupes by game number; a rare double claim only wastes time.
