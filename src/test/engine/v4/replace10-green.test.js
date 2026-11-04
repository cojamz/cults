// @vitest-environment node
// Quality loop lane D (Nov 4): Copyist (Roadie's place) and Encore (Cory's idea for Chronicler's place), under
// REPLACE10=copyist,encore. The switch is read when the engine loads, so it is set before the import, then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = 'copyist,encore';
const { applyMove, contextFor, resume } = await import('../../../engine/v4/core.js');
const { table, named } = await import('./cards-helpers-b.js');
const { take, move, uidOf } = await import('./helpers.js');
delete process.env.REPLACE10;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const payFor = (s, i, uid) => contextFor(s).payChoices(s.players[i], uid, {})[0];

describe('REPLACE10: Copyist', () => {
  it('Whenever you copy an action, +1 follower (Cover copying Build Up)', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, left: 4, members: [['echo.copyist']] });
    const b = s.players[0].bonus;
    s = take(s, 'echo.hum');
    while (s.pending?.player === 0 && s.pending.kind === 'choose') s = answer(s, (s.pending.options.find(o => /Build Up/.test(o.label)) || s.pending.options[0]).id);
    expect(s.players[0].bonus).toBe(b + 1);
  });
});

describe('REPLACE10: Encore', () => {
  it('On Use, once per game: this turn the recruited member\'s On Recruit happens twice', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, res: [{ magenta: 9 }, { red: 9 }], members: [['echo.encore']], shop: ['thieves.accomplice'] });
    const u = uidOf(s, 'echo.encore', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(true);
    const acc = s.shop.find(x => s.cards[x].def === 'thieves.accomplice');
    contextFor(s).recruit(s.players[0], acc, { spend: payFor(s, 0, acc), how: {}, paid: true });
    s = resume(s);
    while (s.pending?.player === 0 && s.pending.kind === 'choose' && /steal|Accomplice/i.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    expect(s.players[1].res.red).toBe(3); // stole 3, twice
    expect(named(s, 'Encore')).toContain("P1's Encore: Accomplice's On Recruit again.");
  });
});
