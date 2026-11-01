# Cults — handoff (current state; update in place, don't stack sections)

Last updated 2026-11-01 4:35am Eastern by the overnight balance thread. Before this: design/archive/handoff-2026-10-24-to-28.md.
- Live: https://cojamz.github.io/patrons/play/ is v0.99.0 (c4223fa, Nov 1 3:25pm Eastern, from a fully green check:v4; main play/build.json is the truth).
- Road to 0.99 then 1.0 (Cory, Oct 31 night): 0.99 = all colors and both decks polished with balance tweaks shipped and rework picks in front of him; 1.0 = after his final action/member review and the tweaks from it. The overnight balance report and his 13 numbered picks: /mnt/project-files/balance-0.99.md (shipped tonight: numbers and member counts only; every text change waits for him).
- Versions (Cory, Oct 28): small publishes are sub-steps, v0.9.801, v0.9.802… (`npm run version:v4 -- patch`); `point` makes the next whole step (v0.9.9) only for a release worth naming. All colors at 2.0 is v1.0.
- Since Oct 24 the v0.9 line shipped: round I rework (v0.9.0), contest prizes +4/+6/+10 and +1 wild on every member (v0.8.100), table talk, saved games and Past games, the Peek row, Front-runner 4 / Launderer 5 / Straggler 8 / Tribute Band 12 / Loyalists (v0.9.2), narrow-laptop shop (v0.9.3), freeze and lag fixes (v0.9.4 to v0.9.7, flights always land), neutral in Out of Style (v0.9.8), Tiebreaker 5 (v0.9.801). CHANGELOG.md has each.
- Running now: the freeze work (Cory: "laggy" = the page freezing, clicks ignored, then sputtering back; he plays Firefox on a Mac). Owners and next steps: design/in-flight.md.
- Open questions for Cory: design/notes/waiting-on-cory-2026-10-24.md (some answered or overtaken; marked at its top), plus table talk's 12 quick lines (Claude's fill-ins).
- Our own open work, no call needed: design/todo.md ("Ours").
- Ship freeze rule: while Cory says a game is running, push to the branch only; publish when he says it's over.
- Firefox: every gate and the freeze probe run in it (`npm run check:v4 -- --firefox`, or V4_ENGINE=firefox); the bootstrap hook installs it from /mnt/project-files/harness/browsers/. The perf rig stays Chrome-only (CDP).

## The game now
- Balance and feel test 1.0 (Nov 1): Cory's list of 11 reworks, 10 number changes and 13 questions is at /mnt/project-files/balance-1.0/list.md (evidence in design/eval/balance-1.0/: final/ numbers, reviews, skeptic.md, meta.md, expert/feel.md, bugs.md). Top focus: what copies and joins can repeat (Largesse, Party Gifts, Con Men via Encore), the round III last-placement swing (Last Call, Party Crasher), White's cast-out loop. Sims use the new Very Hard via BOTOPTS (crn, halving, 6 candidates, window 6, budget 900); the in-game Very Hard is unchanged until Cory says.
- Oct 27 night playtest calls (design/notes/strategy-buildable-2026-10-27.md): Cory wants fewer member cards per cult (8-10 at game end) and more strategy, about a 30% nudge, not a rebuild. Built on the branch, unpublished: Front-runner 4, Launderer 5, Straggler 8, Tribute Band 12, Loyalists shields only your other members. Rule for any member idea: a table must be able to track it (no counting events through a round).
- Redesigned and live (2.0 on the Custom table picker): Red, Green, Magenta, Purple, Blue, White. Not redesigned (1.0): Gold, Silver (High Tide is live in round III), Yellow. Their redesigns are paused by Cory; state in design/spheres/gold-redesign-2026-10-22.md, silver-redesign-2026-10-22.md and design/pitch-ledger.md (Yellow).
- Core principle (Cory, Oct 22): the game is about synergy and engine building, not value in a vacuum. Strength baselines live in the /brainstorm skill.
- Members: 12 per redesigned color (Magenta has 13; one to cut), 10 in the old colors, 15 colorless guests (reworked Oct 29, v0.9.846; 11 prices retuned overnight in v0.9.850 from bot games; report and Cory's 11 open calls in design/eval/balance-oct29/README.md and the doc https://claude.ai/artifact/VAMVg3DAPWoFabU8AFSWs8). Target: a member returns about 2x its cost in followers (Cory, Oct 22; was 1.5x). Live prices predate the 2x target. Pricing levers: total cost, colored vs any in the cost, followers printed (1 to 4, rarely 5).
- Shop: 6, 7 and 8 members face up in rounds I, II and III (v0.8.59). Round decks change what's in the deck each round, not the count.
- Cory's playtest of Oct 22 drove v0.8.46 to v0.8.62: copies do the whole action, Red's swaps can be skipped, Help Yourself steals followers, Peek +2/+4/+6, Lie Low just blocks steals, Top Up's flat +1 with growing yellow, the glossary reads the cards, rejoin across versions (last 3 releases kept at play/v/<version>/).
- Text review skill (/review-text): run after any card text change; it compares the card, hover, wheel panel, short face, prompts and log.

- Smoothness (Oct 28): idle loops, a memory leak, engine speed and choose clicks fixed (v0.9.2), then the freeze fixes (v0.9.4 to v0.9.7). Freeze bar: scripts/v4-freeze.mjs (exit 1 past the bars, in Chrome and Firefox); perf rig scripts/v4-rig.mjs (Chrome, --no-frame-loop for frame or timer changes). Deeper fix: design/eval/perf/smooth-proposal.md, Claude's to do without asking (engineering never waits on Cory).

## Known not-green
- Known-red browser checks (e2e/v4/known-red.json): shop-sizing.mjs, layout.mjs, hotseat.mjs text cuts. No owner since the readability and live-play threads ended; ours to fix (todo "Ours").
- Pacing budget H2 is green again (a wait holding a member's extra buy sits outside the run-of-six cap, decisions Oct 28). Never raise the cap.
- Box load: parallel checks starve each other. Re-run a failure alone once before calling it real.

## How to work
- Ship: quick check on the exact commit, push to the game branch (rebase, never force), bash scripts/v4-play.sh <sha>, confirm the stamp, go-live note with a screenshot.
- Token-conscious: no sims or game batches unless Cory asks; open the game only for UI checks.
- About 50 old thread branches (Oct 14 to 23) are stale; this box can't push tags or delete branches, so they stay. List: design/in-flight.md.
