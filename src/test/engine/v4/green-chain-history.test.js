// @vitest-environment node
// Repeated Green copies retain fresh target choices and branch history through a save.
import './fixtures/gold-on.js'; // Gold's cards, a test-only fixture since Gold left the game (Cory, Nov 24)
import { describe, it, expect } from 'vitest';
import { table } from './cards-helpers-b.js';
import { take, move } from './helpers.js';
import { quadrant } from '../../../engine/v4/content/index.js';
const Q = ['gold', 'red', 'market', 'echo'];
const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;
const keyOf = (q, k) => `${Q.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.key === k)}`;
const pick = (s, k) => move(s, s.pending.options.find(o => o.value === k).id);
describe('Green copy chains across saved choices', () => {
  // Do It Again copies your Imitate, which chooses again (Imitate copies an action with a rival's minion on it, Cory Nov 10)
  it('Do It Again re-chooses a copied Imitate target after save/rejoin', () => {
    let s = table(Q, { round: 3, left: 5, queue: [1, 0, 0, 0].map(p => ({ t: 'turn', p })) });
    s = pass(take(s, 'echo.chant')); // P2's Flock Together: +1 for its minion, +1
    s = take(s, 'echo.hum');
    s = pass(pick(s, keyOf('echo', 'chant')));
    s = pass(take(s, 'gold.rush'));
    s = take(s, 'echo.refrain');
    const selected = s.pending.options.find(o => o.value === keyOf('echo', 'hum'));
    expect(selected).toBeTruthy();
    const before = s.players[0].res.green;
    s = move(JSON.parse(JSON.stringify(s)), selected.id);
    expect(s.pending.kind).toBe('choose');
    expect(s.pending.options.some(o => o.value === keyOf('echo', 'refrain'))).toBe(false);
    expect(s.pending.options.some(o => o.value === keyOf('gold', 'rush'))).toBe(false); // P1's own: not a rival's
    const target = s.pending.options.find(o => o.value === keyOf('echo', 'chant'));
    expect(target).toBeTruthy();
    s = move(JSON.parse(JSON.stringify(s)), target.id);
    expect(s.players[0].res.green).toBe(before + 3); // Do It Again's +1, then the copied Imitate copies Flock Together's +2
    expect(s.pending.kind).toBe('buy');
  });
});
