# Run log

One row per test run, newest last. Append with `node .claude/skills/test-apparatus/scripts/log-run.mjs` (fills date and commit). Before a run, grep here for the same question. Columns: date (Eastern), commit, tool, question in Cory's words, control, one change, result in one line, link.

| Date | Commit | Tool | Question | Control | Change | Result | Link |
|---|---|---|---|---|---|---|---|
| 2026-11-24 | c6976ea5 | nov25-hunt.mjs + combo tests | do the new members break any rule in play | — | new members dealt | 3,800 + 2,000 games, rule fixes shipped in v0.99.803; rough read: Tax Men strong, Bargainer weak, Doorbusters no read | thread "Test the new members in play" |
| 2026-11-24 | b52ce5ee | quality-paper | Do the live members (incl. the Nov 24-25 new ones) clear the quality bar on paper? | rubric anchors and each color's live members | none (whole-board ranking, 3 Sonnet card-judges) | 6 of 111 under the bar: Wastrels, Regular, Plague Bearer, Gilder, Ferryman, Press Gang (0 on Fun); judge agreement 0.65-0.76 | /mnt/project-files/full-test-pass/paper/ranking.md |
