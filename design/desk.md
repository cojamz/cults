# The work desk: catch up here

One page any thread or a fresh coordinator reads first to know what Cory has said, what is running and what each piece is waiting on. Kept by the "Run the project's work desk" thread (started Nov 3, 7:54pm Eastern, from Cory's "nothing gets lost in translation"). Project memory is off, so this file is the memory.

- Design calls in full, with reasons: design/decisions.md (append-only; it wins over everything). This page quotes Cory's words and points there.
- Longer state: design/HANDOFF.md, design/in-flight.md, design/todo.md.
- Bot games: the queue at /mnt/project-files/queue/ (README.md there). Card trials: scripts/trial/README.md. shard.sh and hand-relayed game ranges are retired (Nov 3).

How to update: pull, edit, commit, push in one go. Cory's words go in verbatim with date, Eastern time and a link to his message. A quote the coordinator relayed without a message id is marked *unverified-id*; replace the mark with the link when someone has it. Each workstream is one line: owner thread, goal, status, waiting on.

Thread links: https://claude.ai/code/project/chan_01PySa5gYMfCiexiWTLrWgo3?thread=<id>, shortened below to the id.

## Cory's words, newest first

- **Nov 3, 9:28pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3HmycJV22699pRwTgmNAhoZ), on an 11pm estimate for the Wallflower fix: "11pm???? for one mmeber fix?? no you need to coordinate better" → shipped v0.99.542 at 9:34pm; every fix now ships as it passes (harness.md Shipping).
- **Nov 3, 9:27pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3Th2umKN7EJKPZYgcgYkkeu): "How long until all of the current and fixes and changes in flight are in the game"
- **Nov 3, 9:24pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3NtMMuCyTN6xgVLKNBCNQ1U), on new members: "eh lets overindex on bringing them in. We'll fix them up as I play with the new versions"
- **Nov 3, 9:58pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3JzfAPuxoWpRdixRXuDSdQY): "copying Polish didnt double with Wallflower. gotta audit what wallflower works with" → thread "Fix what Wallflower doubles".
- **Nov 3, 8:52pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo3Y35C9dLW75QteS3fazB8WA, on the cloak table): "creditors doesn't make sense, nobody would ever have extra silver laying around. you just buy followers. Based on that chart, we need to nerf red a little and buff white a touch. otherwise looks real good" → Red and White Cloak trials (balance thread); Creditors to the replacements thread.
- **Nov 3, 8:48pm** (msg cmsg_01PySa5gYMfCiexiWTLrWgo341dxyqMQgQ14AMEH9oWmha): "maybe the members should be more emoji like? and simpler concepts? then it would I think be easier to learn and track what they do. idk" → thread "Explore simpler, emoji-like members" (mockup only, no game code).
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
| Explore simpler, emoji-like members (41dxyqMQgQ14AMEH9oWmha) | Show members as one emoji plus one short ability, what is lost, a recommendation | Mockup sent: https://claude.ai/artifact/VUYwub2FigAvYWCgCizcUo (all Red plus six others; recommends a one-line icon rule on today's cards, pictures stay) | Cory's pick (1-3); no game code without his yes |
| Run the project's work desk (Txef8sqacLxDEbLxdogRXq) | This page and the bot-game queue | Queue live; jobs strong8 and all-see posted | Runners switching to the queue as their shards finish |
| Build a sturdier card-testing harness (QWRxpDneAqYbePDz7fWNJp) | One runner for card trials (scripts/trial/trial.mjs); also owns red gates turnstory and members, travel t4 and the shop-names stall (CI thread, 8:32pm), and any red that repeats after ff79122c (coordinator, Nov 3 8:30pm). memory is the clicks thread's, shop-sizing the plan thread's; bots spending leftovers (coordinator, Nov 3 9:17pm): measured, not a bot fault (design/eval/bots/leftovers-2026-11-04.md); no bot change, no baselines to re-run | Trial runner live (scripts/trial/, check run done). Gate fixes pushed: turnstory t2b (rival card folds before the test read it), members m7 (silent settle timeout), travel t4 (flight and landing in one frame counted as one moment, c1ece930), shop-names (one page per screen size: 189s to 105s, c1ece930); all pass here | Next GitHub verdicts. On 31e5a91 the 6 others failed together while shop-names stalled: clicks on Resume/Start hung 10-30s (page busy under load, not a wrong screen). Fix the ones that repeat; flaky counts as a gate fix. No publish needed for gate files |
| Find actions worth changing (37SKCeREcm1SMwDZUrcm4ch) | Short list of action changes (Cory: "spin that up") | Reading bot data on every action, By color | Its list; then Cory's picks |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk) | Member replacements | Live v0.99.525: Hostesses, Misers, Spoilsports, Body Snatchers. Set 2 (Impersonators, Creditors, Kidnappers, Godparents) in checks; set 3 (Night Watch, Second-Story Men, Hawkers, Sore Losers) building. strong8 and all-see games running | Nothing from Cory |
| Rebuild the balance testing system (WndbGQVXTYkmTbch5utY89 / board line) | One balance command and report | By color comparison sent | Cory's read |
| Get every test passing again (34ijD1M88cXDiX7zBSgvkGP) | Owns the verdict reds caused by load: backlog-ui, caption-linger, draft-retinue, red-actions (coordinator, Nov 3 8:30pm) | Fix ff79122c: unit tests run after the browser gates (about 20 min longer) | GitHub's 11:23pm verdict |
| Add sounds for each emoji (36p8Ui2WnqFNgW799SHmH7e) | Sounds for each emoji and for events like placing a minion | Live in v0.99.539 via another thread's ship (20e898b9 + Cory's redo bcb04d78: Santa, Surfer, Pizza, Dinosaur, Mushroom, Bee redone; Ninja just the swish) before Cory said ship | Cory's verdict on the redo samples; any further redo goes through the desk before publishing |
| Check how Dabblers count toward colors (3919oDSeUD78uBik4UEbwGf) | Check how Dabblers count toward colors | Starting | Its finding |
| Revamp animations and info tracking (MNYf8WAC6G3t45GjNDaCkA) | Deep expert audit and revamp of animations and info tracking; Relaxed is still too fast (Cory, 8:03pm) | Starting | Its audit; merges coordinated through the desk Also owns the Harvest picker: Cory turned down the mockup; redo to match the buying pickers, picture to him first. |
| Engineer a better wheel (AQfac66Psrms76zJQ6yhtS) | Engineering pass on the wheel (Cory, 8:03pm) | Cause found: the rim's words redraw. Small fixes about 9:57pm; words drawn as pictures later tonight | Its checks; ships as each passes |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk): Melting Pot words | Reword so it reads clearly (Cory, 8:01pm) | Options sent 8:40pm (/mnt/project-files/replacements/melting-dilute-mob-options.md) | Cory's pick |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk): Dilute | Rework or replace (Cory, 8:01pm: "I still don't like Dilute") | Options sent 8:40pm (/mnt/project-files/replacements/melting-dilute-mob-options.md) | Cory's pick |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk): Mob | Rework; ties to the wide-cult pattern (Patriarch plus Mob holders win 64-87%) | Options sent 8:40pm (/mnt/project-files/replacements/melting-dilute-mob-options.md) | Cory's pick |
| Find actions worth changing (7SKCeREcm1SMwDZUrcm4ch): actions, and the counts-as-several rule | Cory, Nov 3 8:45pm: "did you not try many? any contenders?". 5 action changes bot-tested, none shrank wide cults; width comes from red members that count as 2-4 (list: /mnt/project-files/action-review/list.md) | Picks sent 8:45pm: (1) fix going wide via counts-as-several members [yes], (2) new Purple speed spaces [yes], (3) Largesse 6 [no]; Hard check of Red changes running | Cory's picks. If (1) yes: this thread owns which members stop counting as several and tells the Mob thread (333bSCwX…) before either ships |
| Balance test the current game (this thread): Red and White Cloaks | Cory, Nov 3 8:52pm: "nerf red a little and buff white a touch". Trying Red Cloak once per turn and White Cloak +2 on your own buys | Trials at Normal, Hard and Very Hard (By color, Red and White on every table) | Trial results, then before/after to Cory, then the desk's go to publish |
| Plan and run today's autonomous improvements (333bSCwXiSbXsUYNhenCzTk): rival-resources rule | Cory, 8:56pm: "anything that relies on a rival having more of resources should be reworked". 8 members to rework, plus Creditor and Fan Club options sent | Audit done: /mnt/project-files/replacements/rival-resources-audit.md; Leaders' Tax and Heist handed to the actions thread | Cory's yes on the 8 picks, then build and ship |
| Fix what Wallflower doubles (JzfAPuxoWpRdixRXuDSdQY) | Wallflower doubles every copied action, per its text (Cory, 9:58pm) | Fixed with tests (audit: design/eval/wallflower-2026-11-03/audit.md): do-it-again copies (Polish…) and Cover now doubled, Translator greens them, Impersonator works as Green copy members. Two defaults asked (copied steals, copied conversions) | Full check, then the desk's go to publish |

## Cor's live tracker

https://claude.ai/artifact/Wur73WcxCPaeZmhmhuUg79 ("Cults Workstreams"), built by `node scripts/desk/tracker.mjs <out.html>` from the thread board (/mnt/project-files/status/board.md) and main's play/build.json. The desk republishes it (same file path, same URL) after every progress report or ship. It is only as true as each thread's `node scripts/status.mjs set …` line: keep yours current, with `--cory "…"` only for a real decision.

## Publishing (one at a time; ask the desk for go or wait)

- Live: v0.99.542 (cef8f924), shipped Nov 3 9:34pm by the desk: Wallflower doubles every copied action; Dabblers show once as 2 any-color. Next: set 3 members (plan thread, v0.99.543). Rule: ship each fix the moment it passes; no time slots.
- Held back from shipping until Cory says yes: the animations thread's Relaxed pacing change (not pushed).
| Make game logs critiqueable (KbyWRuwuvJ21rjZetXFU2e) | Cory, Nov 4 9:01pm: send Claude a game log and get a critique of his play; not player-facing, copy/save at the end; replay from a point later | Save game already keeps every pick (seed plus moves replays exactly). Added scripts/v4-critique.mjs (each decision with the table, shop and every option) and a Build tag on saved games. Sample critique: /mnt/project-files/game-critique/. Found and fixed: pay warnings read the printed contest under By color (21130bba, pushed, not published) | Cory's read of the sample; the desk's go to publish the pay-warning fix |

## Runner threads (play bot games from the queue)

Each runs `node /mnt/project-files/queue/queue.mjs work --label="<title>"` in the background and reports when it prints QUEUE IDLE. `node /mnt/project-files/queue/queue.mjs status` shows every job and runner.

- Run batch 3 bot games 1-30 (BNqwtz74uB6bp1DznZrneX): strong8 1-60 by shard.sh, then the queue
- Run bot game shards (37BE7dCgJYTD33D2u7rJhpH): strong8 61-120, then the queue
- Run strong-eight games 121-180 (Ca5nURatxgRpwgF4wV2oRt): strong8 121-180, then the queue
- Run batch 3 bot games 91-120 (LLhctSR4zNDeDpviCdDMDf): strong8 181-240, then the queue
- Bot-test batch 6, games 1-60 (Ny9NhKnqN71Kj1BMhsmYrQ): all-see 1-60, then the queue
- Bot-test batch 6, games 61-120 (YD5TWMQoGnUpfmtV2GgE4g): all-see 61-120, then the queue
