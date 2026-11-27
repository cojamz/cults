# Rig spread: base

2026-11-03T18:03:37.590Z · http://localhost:5291/ · 3 runs, 1 at a time · --out=design/eval/perf/nov3f

Every run played the same game (55 picks).

Median (min–max) across runs.

| round | clicks p95 ms | choose p95 ms | place p95 ms | dead clicks | hovers p95 ms | show frames p95 ms | hitch % | idle busy % | round busy % |
|---|---|---|---|---|---|---|---|---|---|
| I | 198 (197–258) | 191 (184–258) | 103 (99–198) | 0 (0–0) | 126 (91–129) | 33.3 (33.3–33.3) | 2 (2–3) | 3 (3–3) | 63 (60–67) |
| II | 304 (197–332) | 243 (194–332) | 138 (75–197) | 0 (0–0) | 100 (92–117) | 33.4 (33.3–33.4) | 3 (3–4) | 1 (1–2) | 66 (65–68) |
| III | 278 (225–286) | 184 (158–211) | 116 (115–160) | 0 (0–0) | 111 (93–165) | 33.4 (33.4–33.4) | 3 (3–4) | 7 (6–7) | 72 (70–73) |

Leak control (unbroken vs reload): elements 6290 (5676–6290) vs 5093 (5093–5093), heap MB 19.8 (19.8–20.2) vs 9.8 (9.8–9.8).

Per run: rig-base-1.md, rig-base-2.md, rig-base-3.md.
