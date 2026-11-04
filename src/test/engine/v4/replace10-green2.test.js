// @vitest-environment node
// Quality loop lane D (Nov 4): second versions for trials beside the first (pitches/D-green-4.md):
// REPLACE10=copyist,copyist2 (+2 followers a copy) and warmup,warmupcheap (2 green + 2 any).
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = 'copyist,copyist2,warmup,warmupcheap';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
const { take } = await import('./helpers.js');
delete process.env.REPLACE10;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE10 second versions', () => {
  it('Copyist: whenever you copy an action, +2 followers (Cover copying Build Up)', () => {
    expect(defById('echo.copyist').text).toBe('Whenever you copy an action, +2 followers.');
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, left: 4, members: [['echo.copyist']] });
    const f = s.players[0].bonus || 0;
    s = take(s, 'echo.hum');
    while (s.pending?.player === 0 && s.pending.kind === 'choose') s = answer(s, (s.pending.options.find(o => /Build Up/.test(o.label)) || s.pending.options[0]).id);
    expect((s.players[0].bonus || 0) - f).toBe(2);
  });
  it('Warm-Up Act costs 2 green + 2 any', () => {
    const d = defById('echo.warmup');
    expect([d.s, d.w]).toEqual([2, 2]);
  });
});
