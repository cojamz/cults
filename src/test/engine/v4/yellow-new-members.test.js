// @vitest-environment node
// Yellow's Nov 11 member calls (Cory): Early Traders, Matchmaker's numbers, Exchange Students, Talent Scouts.
import { describe, it, expect } from 'vitest';
import { applyMove, resume } from '../../../engine/v4/core.js';
import { quadrant, defById } from '../../../engine/v4/content/index.js';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const toBuy = s => { while (s.pending && s.pending.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id); return s; };

describe('Cory’s words', () => {
  it('each card prints his text', () => {
    expect(defById('yellow.nightmarket').name).toBe('Early Traders');
    expect(defById('yellow.nightmarket').text).toBe('Round Start: +2 yellow. Swap up to 4 of your resources for other colors, one for one.');
    expect(defById('yellow.matchmaker').text).toBe('Whenever you recruit a yellow member, +2 wild, +3 followers.');
    expect(defById('yellow.exchangestudents').text).toBe('On Recruit: swap one of your members for a rival’s member that costs the same.');
    expect(defById('yellow.headhunters').text).toBe('On Use, once per game: recruit a member costing up to 7 for free.');
  });
});

describe('Early Traders: "Round Start: +2 yellow. Swap up to 4 of your resources for other colors, one for one."', () => {
  it('asks at round start, up to 4 swaps', () => {
    let s = table(['red', 'yellow'], { n: 2, round: 1, res: [{ red: 6, yellow: 0 }], members: [['yellow.nightmarket']], queue: [{ t: 'round', r: 2 }] });
    while (s.pending && !String(s.pending.prompt).startsWith('Early Traders')) s = answer(s, s.pending.options[0].id);
    for (let i = 0; i < 4; i++) s = answer(s, 'swap:red:yellow');
    expect(s.players[0].res.yellow).toBeGreaterThanOrEqual(4);
    expect(String(s.pending?.prompt || '')).not.toContain('Early Traders');
  });
});

describe('Exchange Students: "On Recruit: swap one of your members for a rival’s member that costs the same."', () => {
  it('offers only same-cost pairs, and swaps the pair you pick', () => {
    // Deprogrammers and Seat Filler cost the same as a player sees them (5); Panel costs more
    let s = table(['red', 'yellow', 'thieves'], { n: 2, round: 2, res: [{ red: 0, yellow: 20 }], members: [['red.movementpenalty'], ['red.seatfiller', 'red.panel']], shop: ['yellow.exchangestudents'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    s = toBuy(s);
    s = answer(s, `card:${uidIn(s, 'yellow.exchangestudents', 'shop')}`);
    while (s.pending && s.pending.player === 0 && !String(s.pending.prompt).startsWith('Exchange Students')) s = answer(s, s.pending.options[0].id);
    const pairs = s.pending.options.filter(o => o.kind === 'trade');
    expect(pairs.map(o => o.label)).toEqual(['Deprogrammers ↔ P2: Seat Filler (5)']);
    const [a, b] = pairs[0].value;
    s = answer(s, pairs[0].id);
    expect(s.players[0].members).toContain(b);
    expect(s.players[1].members).toContain(a);
  });
});

describe('Talent Scouts (Headhunters until Nov 11): "On Use, once per game: recruit a member costing up to 7 for free."', () => {
  it('recruits a shop member costing 6 or less for free, once', () => {
    let s = table(['red', 'yellow'], { n: 2, round: 2, res: [{ red: 0, yellow: 0 }], members: [['yellow.headhunters']], shop: ['red.loyalists', 'red.mob'], queue: [{ t: 'buy', p: 0 }] });
    const u = uidIn(s, 'yellow.headhunters', 0);
    s = move(s, `use:${u}`);
    const labels = s.pending.options.map(o => o.label).join(' | ');
    expect(labels).toContain('Loyalists');
    expect(labels).not.toContain('Mob');
    const lu = uidIn(s, 'red.loyalists', 'shop');
    s = move(s, `card:${lu}`);
    expect(s.players[0].members).toContain(lu);
    expect(s.cards[u].used).toBe(true);
  });
});
