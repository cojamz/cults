# Rig spread: base

2026-11-03T17:31:26.718Z · http://localhost:5291/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3e

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 224 (220–265) | 164 (142–174) | 77 (68–84) | 0 (0–0) | 93 (80–144) | 33.3 (33.3–33.3) | 2 (2–2) | 3 (2–3) | 62 (60–62) |
| II | 193 (188–254) | 193 (188–254) | 89 (84–104) | 0 (0–0) | 91 (79–97) | 33.3 (33.3–33.4) | 2 (2–3) | 1 (1–1) | 63 (62–64) |
| III | 219 (190–257) | 190 (163–296) | 124 (100–219) | 0 (0–0) | 102 (88–144) | 33.3 (33.3–33.4) | 3 (3–3) | 6 (6–7) | 67 (66–70) |

Leak control (unbroken vs reload): elements 6282 (5679–6290) vs 5093 (5093–5093), heap MB 20 (19.9–20) vs 9.8 (9.8–9.8).

Per run: rig-base-1.md, rig-base-2.md, rig-base-3.md.
