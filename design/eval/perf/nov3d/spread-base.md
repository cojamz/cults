# Rig spread: base

2026-11-03T17:08:28.888Z · http://localhost:5291/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3d

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 223 (140–283) | 221 (137–283) | 86 (77–90) | 0 (0–0) | 87 (69–89) | 33.3 (33.2–33.3) | 2 (2–2) | 2 (2–2) | 60 (58–62) |
| II | 237 (210–264) | 210 (186–264) | 107 (91–144) | 0 (0–0) | 79 (74–92) | 33.3 (33.3–33.3) | 2 (2–3) | 1 (1–1) | 64 (62–67) |
| III | 193 (193–196) | 196 (193–203) | 162 (137–174) | 0 (0–0) | 88 (83–133) | 33.3 (33.3–33.4) | 3 (2–3) | 6 (5–6) | 68 (67–71) |

Leak control (unbroken vs reload): elements 6287 (6287–6287) vs 5093 (5093–5093), heap MB 20 (19.9–20.1) vs 9.8 (9.7–9.8).

Per run: rig-base-1.md, rig-base-2.md, rig-base-3.md.
