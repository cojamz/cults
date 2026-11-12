// @vitest-environment node
// Idea pipeline pool 16 (Nov 7; /mnt/project-files/idea-pipeline/ideas/purple-r2.md, magenta-r2.md): fresh ideas,
// bot-only, never dealt in a real game. One test per sentence of each card's text, through real moves.
import { describe, it, expect } from 'vitest';
import { take, move } from './helpers.js';
import { linesNaming, sceneQ } from './cards-helpers.js';
import { usePool, still, go } from './pool-helpers.js';
import { placed } from './placed-helpers.js';

usePool(['purple.stragglers', 'purple.tagteam', 'thieves.cutthroats'], ['purple.witchinghour']);
const named = (s, name) => linesNaming(s.log, name);
const order = s => s.queue.filter(t => t.t === 'turn' || t.t === 'place').map(t => t.p);

describe('Witching Hour (Purple, round III)', () => {
  it('+2 purple. +1 follower per other minion on the wheel.', () => {
    const s0 = sceneQ({ quadrants: ['purple', 'gold', 'red', 'market'], n: 3, round: 3, slots: { '1-0': 1, '1-1': 2, '2-0': 0, '3-2': 1 } });
    const s = take(s0, 'purple.witchinghour');
    expect(s.players[0].res.purple).toBe(2);
    expect(s.players[0].bonus).toBe(4);
    expect(named(s, 'Witching Hour')).toContain("P1's Witching Hour: 4 other minions on the wheel, +4 followers.");
  });
});

describe('Stragglers (Purple)', () => {
  it("Your last minion each round is placed after everyone else's.", () => {
    // a seat that isn't already last on this deal (the order moves with the deck), as Tag Team's test finds its seat
    const plain = go(still({ quadrants: ['purple', 'gold', 'red', 'market'], n: 3 }), [{ t: 'round', r: 1 }]);
    const seat = [0, 1, 2].find(p => order(plain).at(-1) !== p);
    let s = still({ quadrants: ['purple', 'gold', 'red', 'market'], n: 3, members: [0, 1, 2].map(p => (p === seat ? ['purple.stragglers'] : [])) });
    s = go(s, [{ t: 'round', r: 1 }]);
    const o = order(s);
    expect(o.at(-1)).toBe(seat);
    expect(o.filter(p => p === seat)).toHaveLength(3);
    expect(named(s, 'Stragglers')).toHaveLength(1);
  });
  it('A Goes Last minion still goes after it.', () => {
    let s = still({ quadrants: ['purple', 'gold', 'red', 'market'], n: 3, members: [['purple.stragglers']] });
    s = go(s, [{ t: 'round', r: 1 }]);
    // P2 takes the token with their next minion: that turn is late and sorts behind Stragglers' turn
    const q = s.queue, i = q.findIndex((t, k) => k > 0 && t.t === 'turn' && t.p === 1);
    q[i] = { ...q[i], token: true };
    s.goesLast = { round: 1, pid: 1 };
    s = go(s, [...q]);
    const o = order(s);
    expect(o.at(-1)).toBe(1);
    expect(o.at(-2)).toBe(0);
  });
});

describe('Tag Team (Purple)', () => {
  it('Each time your turn comes, take two turns in a row.', () => {
    // the seat whose snake turns don't touch: who picks first moves with the deal, so the test finds that seat first
    const plain = go(still({ quadrants: ['purple', 'gold', 'red', 'market'], n: 3 }), [{ t: 'round', r: 1 }]);
    const seat = [0, 1, 2].find(p => { const k = order(plain).map((x, i) => (x === p ? i : -1)).filter(i => i >= 0); return k[1] > k[0] + 1; });
    let s = still({ quadrants: ['purple', 'gold', 'red', 'market'], n: 3, members: [0, 1, 2].map(p => (p === seat ? ['purple.tagteam'] : [])) });
    s = go(s, [{ t: 'round', r: 1 }]);
    const o = order(s), at = o.map((p, k) => (p === seat ? k : -1)).filter(k => k >= 0);
    expect(at).toHaveLength(3);
    expect(at[1]).toBe(at[0] + 1); // the snake had them apart
    expect(at[2]).toBeGreaterThan(at[1] + 1); // an odd last turn stays where it was
    expect(named(s, 'Tag Team')).toHaveLength(1);
  });
});

describe('Cutthroats (Magenta)', () => {
  const steal3 = () => {
    let s = sceneQ({ quadrants: ['thieves', 'gold', 'red', 'market'], members: [['thieves.cutthroats']], res: [{}, { red: 5 }], bonus: [0, 4] });
    s = take(placed(s, 0, 2), 'thieves.pickpocket'); // Help Yourself's third minion: steal 3
    for (let k = 0; k < 3; k++) s = move(s, 'take:1:red');
    return s;
  };
  it('Whenever you steal resources, you may steal that many followers instead.', () => {
    let s = steal3();
    expect(s.pending.prompt).toMatch(/^Cutthroats/);
    s = move(s, 'followers');
    expect(s.players[0].res.red).toBe(0);
    expect(s.players[1].res.red).toBe(5);
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[1].bonus).toBe(1);
    expect(named(s, 'Cutthroats')).toContain("P1's Cutthroats: gives back the 3 resources and steals 3 of P2's followers instead.");
  });
  it('may: keep the resources', () => {
    let s = move(steal3(), 'keep');
    expect(s.players[0].res.red).toBe(3);
    expect(s.players[1].bonus).toBe(4);
  });
});
