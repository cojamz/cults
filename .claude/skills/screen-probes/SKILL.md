---
name: screen-probes
description: Measure and look at the Cults screen the way a player feels it: freezes ("laggy"), click and frame speed, wrong or doubled card text on hovers, layout, motion clips, and blind testers. Use after any screen, motion or performance change, when Cory says the page is laggy or something reads wrong, or before showing him a changed screen.
---
# Screen probes

"Laggy" means the page freezing (clicks ignored, then sputtering back), not slow clicks on average. Done means a fresh frozen build seen in a screenshot at about 1270x700, or a gate that proves it.

## Checklist
1. **Freeze a build to look at**: `node scripts/v4-peek.mjs freeze <n> [port]`; screenshots of a played game at laptop and phone: `node scripts/v4-peek.mjs shots <url> <dir>`.
2. **Lag**: `node scripts/v4-freeze.mjs <url> <label>` in Chrome at 4x CPU and again with `V4_ENGINE=firefox` (Cory plays Firefox on a Mac), before and after every perf fix. Exit 1 on a freeze bar.
3. **Build against build**: `node scripts/v4-rig-spread.mjs <url> <label> --runs=3 --parallel=2` for each build at the same --parallel (Chrome only); `scripts/v4-rig-work.mjs` for our own work per click. One run can't tell builds apart.
4. **Smoothness of a show**: `scripts/v4-frames.mjs`; wheel: `v4-spin-deep.mjs`, `v4-spin-marks.mjs`.
5. **Wrong words or numbers on screen**: the picky bot, `node scripts/picky/picky.mjs --games 2` (hovers every card and checks one-line rule against full rule); `scripts/picky/film.mjs` to film a game frame by frame for readers; `before-after.mjs` for two builds.
6. **Show Cory**: `scripts/v4-gif.mjs` (send the MP4), `v4-deal-clip.mjs`, `v4-recruit-film.mjs`; screenshots go to /mnt/project-files/<topic>/.
7. **Fresh eyes** only when Cory asks for a panel: blind agents (ui-critic, game-skeptic, boardgame-enthusiast, playtester) see the game only through `scripts/v4-eyes.mjs`.
8. Browser gates (e2e/v4/) run inside check:v4; a changed look runs its own gate.
9. **Log the run** (`node .claude/skills/test-apparatus/scripts/log-run.mjs …`); perf reports in design/eval/perf/.

## Pitfalls we hit
- A day of click-speed work while Cory meant freezes and slow pace (Oct 28): run the freeze probe and watch a clip before tuning anything.
- The rig's own frame loop hid a fix to how often the game draws (Oct 28): use `--no-frame-loop` for frame, timer or idle changes.
- Firefox stalled 200-330 ms six to nine times per 35 s on the compositor, which Chrome profiles never showed (Nov 8): every motion or perf change runs in Firefox too.
- Judges looking at a few still frames missed a copy turn's broken story card (Nov 6): film the whole turn (picky/film.mjs, e2e/v4/cardframes.mjs).

Bars and details: .claude/rules/harness.md "Checks" (100 ms clicks and hovers, 33 ms frames, wheel lands in 400 ms, motion 150-350 ms per beat). Taste: design/taste.md.
