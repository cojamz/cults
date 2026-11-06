// The story card reads cause then effect, every line once (Cory, Nov 6, on a P2 copy turn: "this just isnt readbale":
// "copied Shake Down" twice, then a bare "+1 green +2 red" tied to nothing). Every turn of whole bot games, as it builds
// and once it's done: no line twice, and a bare payout only as the card's first line (the space's own result, under
// the space's name in the header).
import { expect, it } from 'vitest';
import { createGame, applyMove } from '../../../engine/v4/core.js';
import { chooseBotMove } from '../../../engine/v4/bots.js';
import { makeTables } from '../../engine/v4/fuzz-tables-runner.js';
import { createTrail, feed, liveStory } from '../../../v4/game/trail.js';

function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const BARE = /^[+−-]\d/;

function problems(text) {
  const lines = text.split(' · ').slice(1);
  const bad = [];
  const seen = new Set();
  lines.forEach((l, i) => {
    if (seen.has(l)) bad.push(`twice: "${l}"`);
    seen.add(l);
    if (i > 0 && BARE.test(l)) bad.push(`no cause: "${l}" (line ${i + 1})`);
  });
  return bad;
}

it('every card in 16 whole bot games, every color on some table, names a cause for each payout and says each line once', () => {
  const found = [];
  let cards = 0;
  const { tables } = makeTables(4242, 1);
  for (let g = 0; g < 16; g++) {
    const n = 2 + (g % 3), rand = rng(500 + g);
    let s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed: 500 + g, quadrants: tables[g % tables.length] });
    const t = createTrail(0);
    feed(t, s);
    for (let k = 0; s.pending && k < 1500; k++) {
      s = applyMove(s, chooseBotMove(s, rand), { effects: true });
      feed(t, s);
      const l = liveStory(t);
      if (l && l.text) { cards++; for (const p of problems(l.text)) found.push(`game ${g} move ${s.moves}: ${p} in "${l.text}"`); }
    }
    for (const st of t.stories) if (st.text) for (const p of problems(st.text)) found.push(`game ${g} done: ${p} in "${st.text}"`);
  }
  expect(cards).toBeGreaterThan(100);
  expect([...new Set(found)].slice(0, 12)).toEqual([]);
}, 120000);
