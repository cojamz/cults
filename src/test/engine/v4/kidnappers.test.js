// @vitest-environment node
// Kidnappers (grey; Cory, Nov 1 2:54-2:58pm): "On Use, once per game: recruit a rival's member." No cap, no
// replacement for the rival. A steal like Poach: Bodyguards and Lie Low block it, Fence pays.
import { describe, it, expect } from 'vitest';
import { defById, EXTRA_WILD } from '../../../engine/v4/content/index.js';
import { move } from './helpers.js';
import { table, named, uidIn, owns } from './cards-helpers-b.js';

const Q = ['red', 'thieves', 'purple', 'gold'];
const use = (s, def) => move(s, `use:${uidIn(s, def, 0)}`);
const hasOpt = (s, id) => (s.pending?.options || []).some(o => o.id === id);

describe('Kidnappers', () => {
  it('is printed as decided: 8 of any color, worth 1', () => {
    const d = defById('benders.kidnappers');
    expect(d.text).toBe('On Use, once per game: recruit a rival’s member.');
    expect(d.s + d.w).toBe(7 + EXTRA_WILD);
    expect(d.f).toBe(1);
  });

  it('recruits any rival member, however costly; the rival gets nothing back', () => {
    let s = table(Q, { round: 2, members: [['benders.kidnappers'], ['red.mob']] });
    s = use(s, 'benders.kidnappers');
    const uid = uidIn(s, 'red.mob', 1);
    s = move(s, `card:${uid}`);
    expect(owns(s, 0, 'red.mob')).toBe(true);
    expect(owns(s, 1, 'red.mob')).toBe(false);
    expect(s.players[1].members).toHaveLength(0);
    expect(named(s, 'Kidnappers')).toContain("P1's Kidnappers recruits P2's Mob.");
  });

  it('Bodyguards keep their owner’s members, as with Poach', () => {
    const s = use(table(Q, { round: 2, n: 3, members: [['benders.kidnappers'], ['red.mob', 'thieves.watchdog'], ['red.twins']] }), 'benders.kidnappers');
    expect(hasOpt(s, `card:${uidIn(s, 'red.mob', 1)}`)).toBe(false);
    expect(hasOpt(s, `card:${uidIn(s, 'red.twins', 2)}`)).toBe(true);
  });
});
