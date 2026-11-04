// @vitest-environment node
// Quality loop lane D (Nov 4; /mnt/project-files/quality/pitches/D-*.md), the REPLACE10=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE10 = '1';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { table, named } = await import('./cards-helpers-b.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE10;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE10: the switch', () => {
  it('prints the pitch prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('thieves.racketeer')).toEqual([4, 3, 1]);
    expect(price('trading.pauper')).toEqual([4, 3, 1]);
    for (const id of ['thieves.grifter', 'trading.oldmoney']) expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE10: each card fires', () => {
  it('Racketeer: at round end, steals 2 resources from each rival who won a contest', () => {
    let s = table(['red', 'thieves', 'market', 'yellow'], { round: 1, res: [{ red: 3, blue: 1 }, { blue: 1 }], members: [[], ['thieves.racketeer']], queue: [{ t: 'endRound' }] });
    // P1 wins red alone and ties blue: two wins, 2 resources each from the biggest piles
    expect(s.players[0].res.red + s.players[0].res.blue).toBe(0);
    expect(s.players[1].res.red + s.players[1].res.blue).toBe(5);
    expect(named(s, 'Racketeer')).toEqual(["P2's Racketeer: took 2 from P1.", "P2's Racketeer: took 2 from P1."]);
  });

  it('Pauper: before contests, with the fewest followers, may turn all white into followers', () => {
    let s = table(['red', 'thieves', 'trading', 'yellow'], { n: 3, round: 1, res: [{ white: 6 }, { white: 1 }], bonus: [0, 4, 4], members: [['trading.pauper']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    expect(s.pending.prompt).toBe('Pauper: turn your 6 white into 6 followers?');
    s = answer(s, 'yes');
    expect(s.players[0].res.white).toBe(0);
    expect(named(s, 'Pauper')).toEqual(["P1's Pauper: 6 white became 6 followers."]);
  });

  it('Pauper: not asked unless you have the fewest followers', () => {
    const s = table(['red', 'thieves', 'trading', 'yellow'], { n: 3, round: 1, res: [{ white: 6 }], bonus: [5, 4, 4], members: [['trading.pauper']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    expect(s.pending?.prompt ?? '').not.toMatch(/^Pauper/);
    expect(named(s, 'Pauper')).toEqual([]);
  });
});
