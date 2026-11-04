# Rig spread: base

2026-11-03T15:30:20.058Z · http://localhost:5291/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3

Every run played the same game (37 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 203 (182–207) | 203 (146–207) | 73 (73–119) | 4 (4–5) | 130 (115–283) | 33.4 (33.3–33.4) | 3 (3–3) | 3 (3–3) | 63 (61–63) |
| II | 322 (267–325) | 322 (267–325) | 72 (72–77) | 6 (5–8) | 134 (88–179) | 33.4 (33.4–33.4) | 3 (3–4) | 1 (1–2) | 65 (63–66) |
| III | – | – | – | 8 (8–8) | 136 (121–154) | 33.3 (33.3–33.3) | 2 (2–3) | – | – |

Leak control (unbroken vs reload): elements 3608 (3545–3610) vs 2952 (2903–2952), heap MB 19.9 (19.8–20) vs 11.6 (11.6–11.7).

Per run: rig-base-1.md, rig-base-2.md, rig-base-3.md.
