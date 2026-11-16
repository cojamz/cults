// @vitest-environment node
// Idea pipeline pool 9 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card.
import { describe, it, expect } from 'vitest';
import { take, move } from './helpers.js';
import { sceneQ, linesNaming, passBuys } from './cards-helpers.js';
import { usePool, price, still, go } from './pool-helpers.js';

usePool(['benders.vagabonds', 'benders.wayfarers'], ['echo.headliners']);
const named = (s, name) => linesNaming(s.log, name);
const Q = ['echo', 'gold', 'purple', 'market'];

describe('Headliners (Green, round III)', () => {
  it('Copy any round III action, even if it\'s taken (a rival\'s taken space)', () => {
    let s = sceneQ({ quadrants: Q, round: 3, res: [{}, { gold: 5 }], queue: [1, 0].map(p => ({ t: 'turn', p })) });
    s = passBuys(take(s, 'gold.strike')); // P2: Double Down, +5 gold
    expect(s.players[1].res.gold).toBe(10);
    s = take(s, 'echo.headliners');
    expect(s.pending.prompt).toMatch(/^Headliners/);
    const opt = s.pending.options.find(o => o.label.startsWith('Double Down (P2)'));
    expect(opt).toBeTruthy();
    expect(s.pending.options.some(o => o.label.startsWith('Headliners'))).toBe(false);
    s = move(s, opt.id);
    expect(s.players[0].res.gold).toBeGreaterThan(0);
    expect(s.players[0].res.green).toBe(1); // +1 green
  });
  it('an open round III action is done', () => {
    let s = sceneQ({ quadrants: Q, round: 3, res: [{ gold: 4 }] });
    s = take(s, 'echo.headliners');
    const opt = s.pending.options.find(o => o.label.startsWith('Double Down:'));
    expect(opt).toBeTruthy();
    s = move(s, opt.id);
    expect(s.players[0].res.gold).toBe(8);
    expect(s.log.some(l => l.includes('copies Double Down'))).toBe(true);
  });
  it('+1 green', () => {
    let s = sceneQ({ quadrants: Q, round: 3 });
    s = take(s, 'echo.headliners');
    expect(s.players[0].res.green).toBe(1);
  });
});

describe('Vagabonds (grey)', () => {
  it('Whenever it joins a cult, that cult\'s owner +3 followers (recruited)', () => {
    let s = sceneQ({ quadrants: Q, res: [{ gold: 30, blue: 30, purple: 30, green: 30 }], shop: ['benders.vagabonds'] });
    s = take(s, 'gold.rush');
    while (s.pending?.kind === 'choose' && !s.pending.options.some(o => o.id.startsWith('card:'))) s = move(s, s.pending.options[0].id);
    const o = s.pending.options.find(x => x.label?.includes('Vagabonds'));
    expect(o).toBeTruthy();
    s = move(s, o.id);
    expect(s.players[0].bonus).toBe(3);
    expect(named(s, 'Vagabonds').at(-1)).toBe("P1's Vagabonds: joined their cult, +3 followers.");
  });
  it('Round End: this member joins the cult with the fewest members, whose owner gets +3', () => {
    let s = still({ quadrants: Q, n: 3, members: [['benders.vagabonds', 'gold.prospector'], [], ['gold.midas']] });
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.players[1].members.map(u => s.cards[u].def)).toEqual(['benders.vagabonds']);
    expect(s.players[0].members).toHaveLength(1);
    expect(s.players[1].bonus).toBe(3);
    expect(named(s, 'Vagabonds')[0]).toBe("P1's Vagabonds joins P2's cult (the fewest members).");
  });
  it('(if tied, it stays)', () => {
    let s = still({ quadrants: Q, n: 3, members: [['benders.vagabonds', 'gold.prospector'], [], []] });
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.players[0].members).toHaveLength(2);
    expect(s.players.map(p => p.bonus)).toEqual([0, 0, 0]);
  });
  it('it stays when its own cult has the fewest, and walks once a Round End', () => {
    let s = still({ quadrants: Q, n: 2, members: [['benders.vagabonds'], ['gold.prospector', 'gold.midas']] });
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.players[0].members).toHaveLength(1);
  });
});

describe('Wayfarers (grey)', () => {
  it('Whenever this member joins your cult, recruit a shop member costing up to 5 (4 as written, plus the price raise), for free', () => {
    let s = sceneQ({ quadrants: Q, res: [{ gold: 30, blue: 30, purple: 30, green: 30 }], shop: ['benders.wayfarers'] });
    const cheap = s.pile.find(u => price(s, u) <= 5);
    s.pile.splice(s.pile.indexOf(cheap), 1); s.shop[1] = cheap;
    s = take(s, 'gold.rush');
    while (s.pending?.kind === 'choose' && !s.pending.options.some(o => o.id.startsWith('card:'))) s = move(s, s.pending.options[0].id);
    s = move(s, s.pending.options.find(x => x.label?.includes('Wayfarers')).id);
    expect(s.pending.prompt).toBe('Wayfarers: recruit which member for free?');
    for (const o of s.pending.options) expect(price(s, o.value)).toBeLessThanOrEqual(5);
    const before = { ...s.players[0].res };
    s = move(s, s.pending.options[0].id);
    expect(s.players[0].members).toHaveLength(2);
    expect(s.players[0].res).toEqual(before);
    expect(named(s, 'Wayfarers').at(-1)).toMatch(/^P1's Wayfarers: recruits .* for free\.$/);
  });
});
