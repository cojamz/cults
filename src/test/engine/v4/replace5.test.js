// @vitest-environment node
// Replacement batch 5 (Nov 3; /mnt/project-files/replacements/batch5.md), the REPLACE5=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE5 = '1';
const { applyMove, contextFor, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE5;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });

describe('REPLACE5: the switch', () => {
  it('prints the draft prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('yellow.secondfiddles')).toEqual([5, 3, 1]);
    expect(price('thieves.secondstory')).toEqual([4, 3, 1]);
    expect(price('thieves.jackals')).toEqual([4, 2, 1]);
    expect(price('thieves.vultures')).toEqual([5, 3, 1]);
    expect(price('purple.tagalongs')).toEqual([6, 3, 1]);
    expect(price('purple.fullhouse')).toEqual([4, 2, 1]);
    for (const id of ['yellow.dyer', 'thieves.sticky', 'thieves.shoplifter', 'thieves.doubleagent', 'purple.bouncer', 'purple.timekeepers'])
      expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE5: each card fires', () => {
  it('Second Fiddles: +2 followers per contest you come second in', () => {
    const s = table(['red', 'yellow', 'market', 'purple'], { n: 3, round: 1, res: [{ red: 3, blue: 4, yellow: 6 }, { red: 5, blue: 6 }, { red: 1 }], members: [['yellow.secondfiddles']], queue: [{ t: 'endRound' }] });
    // Yellow won (+4), second in Red and Blue (+4); Purple nobody holds
    expect(s.players[0].bonus).toBe(8);
    expect(named(s, 'Second Fiddles')).toContain("P1's Second Fiddles: second in Most red, Most blue: +4 followers.");
  });

  it('Second-Story Man: before contests are scored, steal 2 resources from one rival', () => {
    let s = table(['red', 'thieves', 'market', 'purple'], { n: 3, round: 1, res: [{ blue: 5 }, { blue: 6 }, { red: 1 }], members: [['thieves.secondstory']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    expect(s.pending.prompt).toBe('Second-Story Man: steal 2 resources from which rival?');
    s = answer(s, 'player:1');
    while (s.pending?.prompt?.startsWith('Second-Story Man')) s = answer(s, 'take:1:blue');
    expect(s.players[0].res.blue).toBe(7);
    expect(s.players[1].res.blue).toBe(4);
    expect(s.players[0].bonus).toBe(4); // won Blue with the stolen blue
  });

  it('Jackals: a rival steals resources; steal 1 of them from that rival', () => {
    const s = table(['red', 'thieves', 'market', 'purple'], { n: 3, round: 2, res: [{}, {}, { red: 3 }], members: [['thieves.jackals']] });
    const ctx = contextFor(s);
    ctx.steal(s.players[1], s.players[2], { take: { red: 2 }, give: (n, took) => { for (const [c, k] of Object.entries(took)) s.players[1].res[c] += k; } });
    expect(s.players[0].res.red).toBe(1);
    expect(s.players[1].res.red).toBe(1);
    expect(s.players[2].res.red).toBe(1);
    expect(named(s, 'Jackals')).toContain("P1's Jackals: steals 1 red from P2.");
  });

  it("Vultures: a rival's member goes to the bottom of the pile; you may steal it", () => {
    let s = table(['red', 'thieves', 'trading', 'purple'], { round: 2, members: [['thieves.vultures'], ['red.crowd']], queue: [] });
    contextFor(s).buryMember(s.players[1], uidIn(s, 'red.crowd', 1));
    s = resume(s);
    expect(s.pending.player).toBe(0);
    expect(s.pending.prompt).toBe("Vultures: P2's Crowd-Pleaser leaves their cult. Steal it?");
    s = answer(s, 'steal');
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(s.pile.some(u => s.cards[u].def === 'red.crowd')).toBe(false);
  });

  it('Tagalongs: a rival gets +1 minion; you get +1 minion too', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 3, members: [['purple.tagalongs']], queue: [{ t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'allPlaced' }] });
    const before = s.players[0].left;
    s = take(s, 'purple.crowdin');
    expect(s.players[1].left).toBe(3); // 3, less the one placed, plus Overtime's
    expect(s.players[0].left).toBe(before + 1);
    expect(s.queue.filter(t => t.t === 'turn' && t.p === 0).length).toBe(2);
    expect(named(s, 'Tagalongs')).toContain("P1's Tagalongs: P1 gets 1 more minion this round.");
  });

  it('Full House: more minions on the wheel than every rival, +1 follower per minion there', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.fullhouse']], queue: [] });
    s = resume({ ...s, slots: { '0-0': 0, '0-1': 0, '1-0': 1 }, queue: [{ t: 'endRound' }] });
    expect(s.players[0].bonus).toBe(2);
    expect(named(s, 'Full House')).toContain("P1's Full House: 2 minions on the wheel, more than every rival: +2 followers.");
  });
});
