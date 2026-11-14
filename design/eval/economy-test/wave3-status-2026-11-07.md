# Economy test, wave 3: stopped early (Nov 7, 6:40pm)

Cor asked to wrap up (low on credits). Wave 3 was 10 more levers on top of Richer (scripts/econ/mixes.mjs, names starting "richer" plus "up6 color3 space+2").
The box restarted mid-run, and only about 10 games each finished for 4 levers (round III spaces -1, round I spaces +1, prizes 6/9/14, prizes 4/6/14). That's too few to read; no conclusions drawn.
The tiered results from waves 1 and 2 (results-2026-11-07.md) stand as the deliverable.

To resume (restart-safe, keeps finished games): copy .econ-all/up5_color2_space+1.*.jsonl to .econ-runs/wave3/richer.*.jsonl, then
DECK=10 node scripts/econ/sweep.mjs --games=60 --dir=.econ-runs/wave3 --only='richer,richer spaces III-1,richer spaces I+1,richer prizes 6/9/14,richer prizes 4/6/14,richer fol 5→6,richer cloak+1,richer all colored,richer start3,richer r1=2,up6 color3 space+2'
then node scripts/econ/report.mjs .econ-runs/wave3 richer, judges against Richer, and a new page (never edit the old one).
