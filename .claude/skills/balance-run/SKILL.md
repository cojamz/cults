---
name: balance-run
description: The one balance system (Cory, Nov 2). Run it for any balance, win-rate, feel or abuse question about the game; fast size under 2 hours, deep size overnight. Then write the findings page.
---
# Balance run

Cory, Nov 2: "an overhaul of the entire balance infrastructure, such that we can evaluate win rates, playfeel, exploitable mechanics, overall game feedback, and possibly more ... all in one efficient system that takes <2 hours"; "if we need a more intensive option that runs overnight that's fine by me". Plan: /mnt/project-files/balance-bots/plan.md.

## 1. Run it (the machine part)
By color contests are the primary setting (Cory, Nov 3): add `--env='{"CONTESTS":"byColor"}'` to every run; As printed gets no runs. `DECK=10 node scripts/balance/run.mjs --size=fast` (about 1 hour on 4 CPUs) or `--size=deep` (overnight). `--size=smoke` checks the pipe in 5 minutes. A variant: `--env='{"SWAP":"1"}'` (any v4-balance.mjs setting) and `--id=<name>`. A stopped run picks up where it stopped (re-run the same command with the same --id). Nothing else should run on the box meanwhile.

It writes .balance-runs/<id>/report.md (also design/eval/balance-runs/<id>.md and /mnt/project-files/balance-runs/<id>/) with: trust verdict, flags, win rates (Normal, Hard, Very Hard), card classes (dominant, trap, dead, skill), real choices, catch-up, interaction, kingmaking, length, winning plans, skill by color, the abuse hunt, and members never seen acting.

## 2. The feel step (the judgment part, about 30 minutes)
1. Read the report's trust section first. SUSPECT: say so at the top of everything; numbers on the decisions it names are not evidence.
2. Critic: one Agent (general-purpose) gets the report path, the three games in .balance-runs/<id>/packet/, design/rulebook.md and design/strategy.md, and writes: what feels good, what feels flat or decided-for-you, where a player has nothing to do, where design time pays off most. Every claim points at a number in the report or a line in a game log.
3. Findings: from the flags, the critic and the sections, pick at most 10, most important first. Each one: the card's full text (`node .claude/skills/brainstorm/scripts/live-board.mjs <color>`), one played-out turn (4 players, a named round, what it gives against the best other choice, by name and number), which sources agree (Normal, Hard, abuse, trust, critic), and what kind of change would fix it. Number tweaks need Normal and Hard to agree on direction. A rework needs two sources.
4. Skeptic: one Agent gets only the findings and the report and knocks each down if it can (only one source? only Normal? the played turn doesn't hold? price, not design?). Drop what falls.
5. Write the findings into the report's Findings section, append dropped ones to design/watch.md, commit, and send Cory the link with the top three in plain words (presend, plain reader).

## Rules
- Deck 10. Bots only report; nothing changes a card without Cory.
- Every number names where it came from. Bot findings on interaction cards need a played-out turn.
- Compare against the last run (.balance-runs/last.json) when there is one: say what's new, better or worse.
