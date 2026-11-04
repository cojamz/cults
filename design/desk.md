# The work desk: catch up here

One page any thread or a fresh coordinator reads first to know what Cory has said, what is running and what each piece is waiting on. Kept by the "Run the project's work desk" thread (started Nov 3, 7:54pm Eastern, from Cory's "nothing gets lost in translation"). Project memory is off, so this file is the memory.

- Design calls in full, with reasons: design/decisions.md (append-only; it wins over everything). This page quotes Cory's words and points there.
- Longer state: design/HANDOFF.md, design/in-flight.md, design/todo.md.
- Bot games: the queue at /mnt/project-files/queue/ (README.md there). Card trials: scripts/trial/README.md. shard.sh and hand-relayed game ranges are retired (Nov 3).

How to update: pull, edit, commit, push in one go. Cory's words go in verbatim with date, Eastern time and a link to his message. A quote the coordinator relayed without a message id is marked *unverified-id*; replace the mark with the link when someone has it. Each workstream is one line: owner thread, goal, status, waiting on.

Thread links: https://claude.ai/code/project/chan_01PySa5gYMfCiexiWTLrWgo3?thread=<id>, shortened below to the id.

## Cory's words, newest first

- **Nov 3, 8:09pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3AcRtproQUuXNK94Z1iiiE5, his playtest of live v0.99.537): "I finished my test game. Everything worked as expected. Things are feeling good!"
- **Nov 3, 8:03pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3AhARsjDR95E6bBn2mnugS9): "we'll also need a big design audit on animations. are things intuitive? On relaxed speed thigns are still quite fast. I want a deep expert audit and revamp here, maybe new animations or UI where needed. UI upgrade! mostly for animations and info tracking\n\nand as always Id love an engineering pass on the wheel." → threads "Revamp animations and info tracking" and "Engineer a better wheel"; both merge through the desk.
- **Nov 3, 8:01pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3YaDacNWS8y198tHoQiFHEm, playtest feedback): "Melting Pot is worded strangely. I still don't like Dilute. Mob is probably just too strong needs rework?" → three open items below (Melting Pot words, Dilute, Mob). Options go to Cory before anything ships; more feedback is coming, batch it.
- **Nov 3, 7:54pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3Txef8sqacLxDEbLxdogRXq): "by the way we are going to have a LOT of different parallel things going on. You may need a secondary helper or something, and oyu begin managing on a more meta level. BUt setup needs to be such that nothing gets lost in translation." → this page and the bot-game queue.
- **Nov 3** *unverified-id*, contests: "is By color the contest setting going forward? wtf?" then "own contest. very likely we will go that way". → By color is the primary setting; balance runs use it, As printed gets none (decisions.md, 7:43pm).
- **Nov 3** *unverified-id*, balance: "we should start thinking more of patterns than individual cards". → balance reports lead with winning patterns (wide cults, Patriarch plus Mob), cards second.
- **Nov 3** *unverified-id*, actions: "I'm surprised we didnt try to change more actions… any contenders?" and "WE aren't going to hit that limit. so spin that up." → thread "Find actions worth changing".
- **Nov 3** *unverified-id*, members: "How many members changes?" / "per color. functionality" / "four replacements is also rather few." → more member replacements per color.
- **Nov 3** *unverified-id*, cloaks: "we need to fix silver and white powers and maybe dial back red and blue." then "I want to see from the very hard runs before we do that". → no cloak change until Cory has seen Very Hard results.
- **Nov 3** *unverified-id*, names: "they should FEEL right… nothing should feel tryhard or arbitrary".
- **Nov 3** *unverified-id*, By color Red: "having the most expensive member is rough win con…"; "we should avoid a simply color held. maybe most red members? the members need to be such that they aren't auto buys. the engine-building isn't quite there yet". → live v0.99.537 (decisions.md, 5:14pm).

## Open work

| Owner thread | Goal | Status | Waiting on |
|---|---|---|---|
| Run the project's work desk (Txef8sqacLxDEbLxdogRXq) | This page and the bot-game queue | Queue live; jobs strong8 and all-see posted | Runners switching to the queue as their shards finish |
| Build a sturdier card-testing harness (QWRxpDneAqYbePDz7fWNJp) | One runner for card trials (scripts/trial/trial.mjs) | Pushed 80039f4d; real Hard check running | Its own results, then a plain write-up for Cory |
| Find actions worth changing (37SKCeREcm1SMwDZUrcm4ch) | Short list of action changes (Cory: "spin that up") | Reading bot data on every action, By color | Its list; then Cory's picks |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk) | Member replacements | Live v0.99.525: Hostesses, Misers, Spoilsports, Body Snatchers. Set 2 (Impersonators, Creditors, Kidnappers, Godparents) in checks; set 3 (Night Watch, Second-Story Men, Hawkers, Sore Losers) building. strong8 and all-see games running | Nothing from Cory |
| Rebuild the balance testing system (WndbGQVXTYkmTbch5utY89 / board line) | One balance command and report | By color comparison sent | Cory's read |
| Build a sturdier card-testing harness (QWRxpDneAqYbePDz7fWNJp) | Fix red browser gates turnstory and members (verdict on 5402746) | Assigned Nov 3 8:06pm | Its fix |
| Add sounds for each emoji (36p8Ui2WnqFNgW799SHmH7e) | Sounds for each emoji and for events like placing a minion | Starting | Its first pass; screen files: tell the animations thread |
| Check how Dabblers count toward colors (3919oDSeUD78uBik4UEbwGf) | Check how Dabblers count toward colors | Starting | Its finding |
| Revamp animations and info tracking (MNYf8WAC6G3t45GjNDaCkA) | Deep expert audit and revamp of animations and info tracking; Relaxed is still too fast (Cory, 8:03pm) | Starting | Its audit; merges coordinated through the desk |
| Engineer a better wheel (AQfac66Psrms76zJQ6yhtS) | Engineering pass on the wheel (Cory, 8:03pm) | Starting | Its plan; merges coordinated through the desk (shares screen files with the animations thread) |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk): Melting Pot words | Reword so it reads clearly (Cory, 8:01pm) | Options being written, to Cory ~8:45pm | Options to Cory before shipping |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk): Dilute | Rework or replace (Cory, 8:01pm: "I still don't like Dilute") | Options being written, to Cory ~8:45pm | Options to Cory before shipping |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk): Mob | Rework; ties to the wide-cult pattern (Patriarch plus Mob holders win 64-87%) | Options being written, to Cory ~8:45pm | Options to Cory before shipping |
| Unowned: Silver and White Cloaks, maybe Red and Blue | Fix Silver and White, maybe tone down Red and Blue | Held | Very Hard results shown to Cory first |

## Runner threads (play bot games from the queue)

Each runs `node /mnt/project-files/queue/queue.mjs work --label="<title>"` in the background and reports when it prints QUEUE IDLE. `node /mnt/project-files/queue/queue.mjs status` shows every job and runner.

- Run batch 3 bot games 1-30 (BNqwtz74uB6bp1DznZrneX): strong8 1-60 by shard.sh, then the queue
- Run bot game shards (37BE7dCgJYTD33D2u7rJhpH): strong8 61-120, then the queue
- Run strong-eight games 121-180 (Ca5nURatxgRpwgF4wV2oRt): strong8 121-180, then the queue
- Run batch 3 bot games 91-120 (LLhctSR4zNDeDpviCdDMDf): strong8 181-240, then the queue
- Bot-test batch 6, games 1-60 (Ny9NhKnqN71Kj1BMhsmYrQ): all-see 1-60, then the queue
- Bot-test batch 6, games 61-120 (YD5TWMQoGnUpfmtV2GgE4g): all-see 61-120, then the queue
