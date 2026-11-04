// @vitest-environment node
// Actions lane r4 batch (Nov 4): Crowd and Royalties (Build Up's place), White Exchange (Exchange's), Blind Date and
// No Thanks (Walk-In's), each by its own REPLACE11 key.
import { describe, it, expect } from 'vitest';

process.env.REPLACE11 = 'crowd,whiteexchange,blinddate';
const core = await import('../../../engine/v4/core.js');
const { quadrant } = await import('../../../engine/v4/content/index.js');
const { table } = await import('./cards-helpers-b.js');
delete process.env.REPLACE11;
const { applyMove } = core;

const slotOf = (s, qid, name) => `slot:${s.quadrants.indexOf(qid)}-${quadrant(qid).actions.findIndex(a => a.name === name)}`;
const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE11 r4 spaces', () => {
  it('are on the wheel in place of the old ones', () => {
    expect(quadrant('echo').actions.map(a => a.name)).toContain('Crowd');
    expect(quadrant('echo').actions.map(a => a.name)).not.toContain('Build Up');
    expect(quadrant('trading').actions.map(a => a.name)).toContain('White Exchange');
    expect(quadrant('red').actions.map(a => a.name)).toContain('Blind Date');
  });
  it('Crowd: +2 in round I plus 1 per minion on Green spaces, its own included', () => {
    let s = table(['echo', 'red'], { n: 2, round: 1 });
    const me = s.pending.player, g0 = s.players[me].res.green || 0;
    s = answer(s, slotOf(s, 'echo', 'Crowd'));
    expect(s.players[me].res.green - g0).toBe(3);
  });
  it('White Exchange: 1 white into 3 followers, white only', () => {
    let s = table(['trading', 'red'], { n: 2, round: 1, res: [{ white: 2, red: 5 }, { white: 2, red: 5 }] });
    const me = s.pending.player, b0 = s.players[me].bonus;
    s = answer(s, slotOf(s, 'trading', 'White Exchange'));
    expect(s.pending.options.map(o => o.id)).toEqual(['white', 'done']);
    s = answer(s, 'white');
    expect(s.players[me].res.white).toBe(2); // 2 + 1 - 1
    expect(s.players[me].bonus - b0).toBeGreaterThanOrEqual(3);
  });
  it('Blind Date: recruit one of the top 2, give the other to a rival', () => {
    let s = table(['red', 'echo'], { n: 2, round: 1 });
    const me = s.pending.player;
    const m0 = s.players[me].members.length, r0 = s.players[1 - me].members.length;
    s = answer(s, slotOf(s, 'red', 'Blind Date'));
    const two = s.pending.options.map(o => o.value);
    s = answer(s, `card:${two[1]}`);
    s = answer(s, s.pending.options[0].id);
    expect(s.players[me].members).toContain(two[1]);
    expect(s.players[1 - me].members).toContain(two[0]);
    expect(s.players[me].members.length - m0).toBe(1);
    expect(s.players[1 - me].members.length - r0).toBe(1);
  });
});
