# Rig spread: ans

2026-11-03T16:45:24.128Z · http://localhost:5292/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3c

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 242 (236–302) | 242 (236–302) | 75 (70–87) | 0 (0–0) | 84 (66–85) | 33.3 (33.3–33.3) | 2 (2–2) | 2 (2–3) | 59 (56–61) |
| II | 162 (153–251) | 132 (105–251) | 118 (94–120) | 0 (0–0) | 80 (69–87) | 33.3 (33.3–33.3) | 2 (2–2) | 1 (1–1) | 61 (60–61) |
| III | 219 (172–222) | 186 (114–193) | 114 (100–123) | 0 (0–0) | 99 (79–104) | 33.3 (33.3–33.3) | 2 (2–2) | 6 (6–7) | 65 (65–66) |

Leak control (unbroken vs reload): elements 6287 (6287–6290) vs 5093 (5093–5093), heap MB 20.2 (20.1–20.3) vs 9.8 (9.8–9.8).

Per run: rig-ans-1.md, rig-ans-2.md, rig-ans-3.md.
