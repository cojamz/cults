# Rig spread: ans

2026-11-03T15:29:59.552Z · http://localhost:5292/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3

Every run played the same game (37 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 283 (245–429) | 283 (245–429) | 86 (79–100) | 4 (4–4) | 103 (83–128) | 33.4 (33.3–33.4) | 3 (2–4) | 4 (2–4) | 64 (61–65) |
| II | 231 (191–351) | 231 (191–351) | 83 (79–94) | 5 (3–6) | 157 (101–215) | 33.4 (33.4–33.4) | 3 (3–4) | 2 (2–2) | 67 (64–68) |
| III | – | – | – | 8 (8–8) | 134 (131–140) | 33.3 (33.3–33.4) | 2 (2–3) | – | – |

Leak control (unbroken vs reload): elements 3542 (3542–3607) vs 2952 (2903–2952), heap MB 20.3 (20.1–20.4) vs 11.6 (11.5–11.6).

Per run: rig-ans-1.md, rig-ans-2.md, rig-ans-3.md.
