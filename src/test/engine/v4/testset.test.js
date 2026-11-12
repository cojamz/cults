// The test version (Cory, Nov 8: "create an alt-like version here with these, like, try it ones baked in").
import { describe, it, expect } from 'vitest';
import { createGame, spacesOf } from '../../../engine/v4/index.js';

const seats = [{ kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }, { kind: 'bot' }];
const Q = ['thieves', 'silver', 'trading', 'market'];
const Q2 = ['echo', 'yellow', 'market', 'trading'];
const defs = s => new Set(Object.values(s.cards).map(c => c.def));

describe('Test version (rules.testSet)', () => {
  // Nov 11 (Cory: "we are committing to the test version, with updated actions from our recent action work"): the
  // recent action work kept Polish, Estate Sale and Melting Pot, so every color plays its live spaces
  it('plays every color\'s live spaces', () => {
    const t = { rules: { testSet: true } }, live = { rules: {} };
    for (const q of ['thieves', 'market', 'echo', 'purple', 'red', 'silver', 'trading', 'yellow']) {
      expect(spacesOf(t, q).map(x => x.name)).toEqual(spacesOf(live, q).map(x => x.name));
      expect(spacesOf(t, q).map(x => x.text)).toEqual(spacesOf(live, q).map(x => x.text));
    }
  });
  it('deals the four candidate members, without Recluse, Misers and Regular', () => {
    const d = defs(createGame({ seats, seed: 3, quadrants: Q, rules: { deck: 10, testSet: true } }));
    for (const id of ['trading.anchorites', 'trading.oldguard', 'market.repossessors', 'benders.protesters', 'benders.giftswappers', 'benders.purifiers']) expect(d.has(id)).toBe(true);
    for (const id of ['trading.recluse', 'trading.heirs', 'market.regular']) expect(d.has(id)).toBe(false);
  });
  it('a live game is unchanged', () => {
    const d = defs(createGame({ seats, seed: 3, quadrants: Q, rules: { deck: 10 } }));
    for (const id of ['trading.anchorites', 'trading.oldguard', 'market.repossessors', 'benders.protesters', 'benders.giftswappers', 'benders.purifiers']) expect(d.has(id)).toBe(false);
    for (const id of ['trading.recluse', 'market.regular']) expect(d.has(id)).toBe(true);
    expect(spacesOf({ rules: {} }, 'yellow').map(a => a.name)).toContain('Melting Pot');
  });
  it('white and blue decks keep their size', () => {
    for (const q of [Q, Q2]) {
      const a = Object.values(createGame({ seats, seed: 5, quadrants: q, rules: { deck: 10 } }).cards).length;
      const b = Object.values(createGame({ seats, seed: 5, quadrants: q, rules: { deck: 10, testSet: true } }).cards).length;
      // Protesters, Gift Swappers and Purifiers join the grey members (Tribute Band is cut for good since Nov 11)
      expect(b).toBe(a + 3);
    }
  });
});

// Nov 11 (Cory: "maybe we'll cut tribute band ... We'll need to put in a replacement green"): bot tests swap a member
// out and another in so the color's deck stays at 10
describe('rules.membersOut / membersIn', () => {
  it('swaps Regulars for Ensemble and keeps Green at the same count', () => {
    const rules = { deck: 10, testSet: true, cull: true, artifacts: true, roundDecks: 2 };
    const green = s => Object.values(s.cards).map(c => c.def).filter(d => d.startsWith('echo.'));
    // since Nov 11 the game has Regulars in Tribute Band's slot (Ensemble was the stand-in); the rules swap it back
    const base = createGame({ seats, seed: 3, quadrants: Q2, rules });
    const swap = createGame({ seats, seed: 3, quadrants: Q2, rules: { ...rules, membersOut: ['echo.regulars'], membersIn: ['echo.ensemble'] } });
    expect(green(base)).not.toContain('echo.dejavu');
    expect(green(base)).toContain('echo.regulars');
    expect(green(swap)).toContain('echo.ensemble');
    expect(green(swap)).not.toContain('echo.regulars');
    expect(green(swap).length).toBe(green(base).length);
  });
});
