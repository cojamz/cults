// @vitest-environment node
// Cory's playtest, Nov 9 11:13pm Eastern: "why cant i use hot streak after i do my last recruit of the round? it goes
// right to spoils". A follower recruit (like a member recruit) leaves a window to use your members before the turn ends.
import { describe, it, expect } from 'vitest';
import { take, move, uidOf } from './helpers.js';
import { sceneQ } from './cards-helpers.js';

const Q = ['gold', 'red', 'purple', 'green'];
const rich = { gold: 30, red: 30, purple: 30, green: 30 };
const payDefault = s => (s.pending?.kind === 'pay' ? move(s, s.pending.options[0].id) : s);

describe('On Use after the round’s last recruit', () => {
  it('a follower recruit on your last minion still offers Hot Streak before the round ends', () => {
    let s = sceneQ({ quadrants: Q, round: 2, left: 1, res: [rich], members: [['purple.streak']], queue: [{ t: 'turn', p: 0 }, { t: 'allPlaced' }] });
    s = take(s, 'gold.rush');
    s.turns = [0, 0]; // this is the second of two turns in a row
    expect(s.pending.kind).toBe('buy');
    s = payDefault(move(s, 'tier:small'));
    const uid = uidOf(s, 'purple.streak', 0);
    expect(s.pending?.afterPurchase).toBe(true);
    expect(s.pending.options.some(o => o.id === `use:${uid}`)).toBe(true);
    const before = s.players[0].bonus;
    s = move(s, `use:${uid}`);
    expect(s.players[0].bonus).toBe(before + 3);
  });
  it('no member to use: a follower recruit ends the turn as before', () => {
    let s = sceneQ({ quadrants: Q, round: 2, left: 1, res: [rich], queue: [{ t: 'turn', p: 0 }, { t: 'allPlaced' }] });
    s = take(s, 'gold.rush');
    s = payDefault(move(s, 'tier:small'));
    expect(s.pending).toBe(null);
  });
});
