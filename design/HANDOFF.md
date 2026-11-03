# Cults — handoff (current state; update in place, don't stack sections)

Last updated 2026-11-03 10:15am Eastern by the "Plan and run today's autonomous improvements" thread. Before this: design/archive/handoff-2026-10-24-to-28.md (the Nov 1 section is in git history).
- Revert point (Cory, Nov 3 2:31pm: "branch for us so it's easy to revert to the version we had before we kicked off today's work"): branch `snapshot/pre-nov3` = 56ea45c (v0.99.510, color cost and By color contests live, before Nov 3's day of work). Before the color cost: v0.99.509 is 4e192d5.
- Live: https://cojamz.github.io/patrons/play/ is v0.99.510 (a2432c4, Nov 3 1:15am Eastern; main play/build.json is the truth).
- Since v0.99.0 (Nov 1): cloaks named "<Color> Cloak" and picked before round I, the Goes Last token, the swap card (2 any), piles modes, Splurge per resource in round II, members pay 1 more of their own color and 1 less any (v0.99.510), and the Contests setting (As printed or By color, one goal per color). CHANGELOG.md has each.
- The critic's review (design/eval/critic-review-2026-11-02/review.md, Cory agreed): every turn is "biggest number" and nothing pays for going deep in a color. Cory liked directions 1 (resources worth more to one player than another: the color cost) and 3 (each rim its own contest: By color). He wants the reason to focus to come from how the game works, not a bonus ("members count as 2" is out).
- Balance system (Nov 2-3): `DECK=10 node scripts/balance/run.mjs --size=fast|deep`, skill .claude/skills/balance-run. Overnight findings: /mnt/project-files/balance-runs/2026-11-03-deep-46d689f7/findings.md (Night Owls owners win 59% with Hard bots; the cloak you start with swings win chance about 25 points, Silver Cloak lowest, White and Green Cloaks highest). Normal bots are weak against Hard: trust Hard.
- Today's plan (Nov 3): /mnt/project-files/today-plan/plan.md (tests green, outlier fixes as bot tests, an end screen showing where followers came from, faster clicks, depth ideas). Owners in design/in-flight.md.
- Versions: small publishes are sub-steps (`npm run version:v4 -- patch`); v1.0 when the bar in design/1.0.md is met.
- Our own open work, no call needed: design/todo.md ("Ours"). Ship freeze rule: while Cory says a game is running, push to the branch only.
- Firefox: every gate and the freeze probe run in it (`npm run check:v4 -- --firefox`); the perf rig stays Chrome-only (CDP).

## The game now
- Eight 2.0 colors live: Red, Green, Magenta, Purple, Blue, White, Yellow, Silver (each with a cloak). Gold is backlog. Decks: 10 per color is the game (Cory, Nov 1); 15 is an untested setting.
- Contest prizes +4/+6/+10; members pay +1 any on top of the printed cost, and since v0.99.510 one of the "any" is the member's own color (grey members keep the wild).
- Core principle (Cory, Oct 22): synergy and engine building, not value in a vacuum. Rule for any member idea: a table must be able to track it.
- Text review skill (/review-text): run after any card text change.
- Smoothness: freeze bar scripts/v4-freeze.mjs (Chrome and Firefox), perf rig scripts/v4-rig.mjs. Clicks p95 about 160 ms at 4x CPU against the 100 ms bar.

## Known not-green
- Browser verdict on ccf5bdf (Nov 3): RED, 11 gates (unit tests stalling on GitHub, plus shop-names, hotseat, benders, backlog-ui, caption-linger, landing, pay, turn-skip, turnstory, motion), most likely seeded games moved by the color cost. Owner: the "Get every test passing again" thread (Nov 3). Known red: shop-sizing.mjs.
- Pacing budget H2 is green again (a wait holding a member's extra buy sits outside the run-of-six cap, decisions Oct 28). Never raise the cap.
- Box load: parallel checks starve each other. Re-run a failure alone once before calling it real.

## How to work
- Ship: quick check on the exact commit, push to the game branch (rebase, never force), bash scripts/v4-play.sh <sha>, confirm the stamp, go-live note with a screenshot.
- Bot games: the balance system on DECK=10 when a balance question is on the table; open the game only for UI checks.
- About 50 old thread branches (Oct 14 to 23) are stale; this box can't push tags or delete branches, so they stay. List: design/in-flight.md.
