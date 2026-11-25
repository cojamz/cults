---
name: quality-eval
description: Judge whether a Cults card is good (clear, fun, interacts, fits its color, plays as written) with paper judges, play judges, blind A/B, set judges, card trials against the card it replaces, the idea pipeline, AI-player games and player agents. Use for "quality evals", a new or reworked card before it reaches Cory, a rework candidate list, or "how does it feel to play".
---
# Quality eval

Bots measure strength; judges and AI players measure clarity and feel. Calibration (design/eval/card-judging/run4-result.md) showed paper judges match Cory's picks only at chance on unseen calls, so: paper cuts rule breaks and weak turns, play judges and AI players say how it feels, bots say how strong, Cory's marks are the taste signal. Judge agents run on Sonnet, fresh every time, and never see Cory's likes and dislikes or the designers' reasoning.

## Pick the tool by question
| Question | Tool | Cost |
|---|---|---|
| Does the new card read and score above the old one on paper? | Paper gate: `node scripts/quality/paper-gate.mjs batch <batch> <spec.json…>`, 3 gate-judge agents, `batchscore` | ~30 min |
| Where does every live card rank, worst first? | Ranking: board.mjs, 3 card-judge agents, `ranking.mjs` | ~30 min |
| Does it play as written and feel good at the table? | Play judges: `REPLACE<n>=1 node scripts/quality/sheets.mjs "<card>" --want 3`, 2 play-judge agents, `play-score.mjs` | ~1 h |
| Is the new card better in play, judged blind? | Blind A/B: `play-ab.mjs <new> <base> …`, judges, `play-ab.mjs score` (ships at +0.3, Clear outcome above 0) | ~1 h |
| Does the color still work as a set? | `paper-gate.mjs setcheck <slot>`, 3 set-judge agents, `setscore` | ~30 min |
| Is it stronger or weaker than the card it replaces, same deals? | Card trial: `node scripts/trial/trial.mjs new <name> --env='{"REPLACE<n>":"1"}'`, `work`, `report` | 1-2 h, shared |
| Many candidate cards against the live cards' bar | Idea pipeline: scripts/ideas/README.md (pool rotation, fires, judges, pool-report, tiers page) | hours per pool |
| How does a whole game feel to players? | AI-player games (`scripts/v4-expert.mjs`, ~2 h a game) or player agents (`scripts/players/run-matrix.mjs`, Opus per Cory Nov 12) | hours, tokens |
| What did a player (or Cory) misplay? | `scripts/v4-critique.mjs` sheet; `scripts/v4-ai-audit.mjs` for AI players | minutes |

## Checklist
1. Question and expected answer in Cory's words; grep `.claude/skills/test-apparatus/runs.md` for the card.
2. **Did it act** first: `node scripts/ideas/fires.mjs <tags>` or `scripts/quality/fires.mjs`. A card bought but never acting is a build bug; fix before any judge reads it.
3. **Words**: run the review-text skill on it; a table must read it right the first time.
4. Run the tools above that answer the question; rubric and bar: /mnt/project-files/quality/principles.md (judges read it live). A run whose anchors moved or whose decoy gained is void.
5. **Report** through the game-feel skill and Cory's voice rules: full card text, one played turn, which sources agree. Nothing ships on judges alone without his yes (the A/B ship gate applies to cards he already approved as candidates).
6. **Log the run** (`node .claude/skills/test-apparatus/scripts/log-run.mjs …`).

## Detail lives in
scripts/quality/README.md (every judge step and pass bar), scripts/ideas/README.md (the pipeline), scripts/trial/README.md (trials in plain words), /mnt/project-files/player-agents/plan.md (player agents), design/notes/testing-setup.md (which checks go with which change). Agents: .claude/agents/card-judge.md, gate-judge.md, play-judge.md, set-judge.md.
