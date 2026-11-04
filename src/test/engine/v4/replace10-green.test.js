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

  it('Cory\'s wording (live Nov 4): still offered after the turn\'s recruit, since it waits for the next one', () => {
    const at = after => table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, members: [['echo.encore', 'benders.squatter']], queue: [{ t: 'buy', p: 0, ...(after ? { afterPurchase: true } : {}) }] });
    const ids = s => s.pending.options.map(o => o.id);
    const before = at(false), after = at(true);
    const enc = uidOf(before, 'echo.encore', 0), sq = uidOf(after, 'benders.squatter', 0);
    expect(ids(before)).toContain(`use:${enc}`);
    expect(after.pending.afterPurchase).toBe(true);
    expect(ids(after)).toContain(`use:${sq}`);
    expect(ids(after)).toContain(`use:${uidOf(after, 'echo.encore', 0)}`);
  });

  it('a free recruit counts: Encore, then Walk-In recruits the top of the pile; its On Recruit happens twice', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, left: 4, res: [{}, { red: 9 }], members: [['echo.encore']] });
    const top = s.pile.find(u => s.cards[u].def === 'thieves.accomplice');
    if (top) s.pile = [top, ...s.pile.filter(u => u !== top)];
    else { const acc = Object.keys(s.cards).map(Number).find(u => s.cards[u].def === 'thieves.accomplice' && !s.shop.includes(u) && !s.players.some(p => p.members.includes(u))); s.pile = [acc, ...s.pile.filter(u => u !== acc)]; }
    const u = uidOf(s, 'echo.encore', 0);
    s = move(s, `use:${u}`);
    s = take(s, 'red.hire');
    while (s.pending?.player === 0 && s.pending.kind === 'choose' && /steal|Accomplice/i.test(s.pending.prompt)) s = answer(s, s.pending.options[0].id);
    expect(named(s, 'Encore')).toContain("P1's Encore: Accomplice's On Recruit again.");
  });

  it('recruited this turn: can be used the same turn, for a later recruit (Cory\'s wording, live Nov 4)', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 2, round: 2, left: 4, res: [{ green: 9, red: 9 }, {}], members: [['benders.squatter']], shop: ['echo.encore'] });
    s = take(s, 'red.turnout');
    const enc = s.shop.find(x => s.cards[x].def === 'echo.encore');
    s = move(s, `card:${enc}`);
    while (s.pending?.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    expect(s.players[0].members).toContain(enc);
    expect(s.pending.afterPurchase).toBe(true);
    const ids = s.pending.options.map(o => o.id);
    expect(ids).toContain(`use:${uidOf(s, 'benders.squatter', 0)}`); // the step is shown (Party Crasher can be used)
    expect(ids).toContain(`use:${enc}`);
  });
});
