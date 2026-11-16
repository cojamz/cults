// @vitest-environment node
// Quality loop lane D (Nov 4 noon, pitches/D-scale2.md): Song Request (Busker's place) and Stagehand (Roadie's place),
// under REPLACE10=songrequest,stagehand. The switch is read when the engine loads, so it is set before the import.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = 'songrequest,stagehand';
// trial cards are tested at the Nov 5 afternoon prices (every member 2 more than its card file); the live price is
// 4 more since Nov 5 evening, and these tests check what the cards do, not their price
process.env.MEMBER_UP = '2';
const { applyMove, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named } = await import('./cards-helpers-b.js');
const { take, move, uidOf } = await import('./helpers.js');
const { useRetired } = await import('./helpers.js');
useRetired(['red.turnout']);
delete process.env.REPLACE10;
delete process.env.MEMBER_UP;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE10: Song Request and Stagehand', () => {
  it('prices as pitched; Busker and Roadie are retired', () => {
    const sr = defById('echo.songrequest'), st = defById('echo.stagehand');
    expect([sr.s, sr.w]).toEqual([4, 4]); // defById prints the colored part (live price, Nov 4)
    expect([st.s, st.w]).toEqual([2, 2]);
    expect(defById('echo.evergreen').retired).toBe(true);
    expect(defById('echo.roadie').retired).toBe(true);
  });

  it('Song Request: On Use, once per round: copy an action a rival has a minion on (Ben is on Build Up: +4 green)', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, left: 4, members: [['echo.songrequest']], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }] });
    const done = x => { while (x.pending && x.pending.kind !== 'place') x = move(x, (x.pending.options.find(o => o.kind === 'pass') || x.pending.options[0]).id); return x; };
    s = done(take(s, 'red.turnout'));
    expect(s.pending.player).toBe(1);
    s = done(take(s, 'echo.chant')); // Ben (P2) on Build Up
    expect(s.pending.player).toBe(0);
    const u = uidOf(s, 'echo.songrequest', 0);
    const g = s.players[0].res.green || 0, m = s.players[0].res.magenta || 0;
    s = move(s, `use:${u}`);
    expect(s.pending.prompt).toBe('Buskers: copy which rival action?');
    expect(s.pending.options.every(o => /\(P2\)/.test(o.label))).toBe(true);
    s = answer(s, s.pending.options[0].id);
    expect((s.players[0].res.green || 0) + (s.players[0].res.magenta || 0)).toBeGreaterThan(g + m);
    expect(s.cards[u].used).toBe(true);
    expect(s.pending.options.some(o => o.id === `use:${u}`)).toBe(false); // once per round
  });

  it('Song Request: with no rival minion on the board it does nothing and stays ready', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, left: 4, members: [['echo.songrequest']] });
    const u = uidOf(s, 'echo.songrequest', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(false);
    expect(named(s, 'Buskers')).toContain("P1's Buskers: no rival action to copy.");
  });

  it('Stagehand: Round End: +1 follower per minion you have on Green spaces (2 on Green, 1 on Red: +2)', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 1, left: 0, members: [['echo.stagehand']], queue: [] });
    s.slots = { '1-0': 0, '1-1': 0, '0-0': 0, '1-2': 1 };
    s.queue = [{ t: 'endRound' }];
    s = resume(s);
    expect(s.players[0].bonus).toBe(2);
    expect(named(s, 'Stagehand')).toContain("P1's Stagehand: 2 minions on Green spaces: +2 followers.");
  });
});
