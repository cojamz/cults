// @vitest-environment node
// Members E lane (REPLACE14, Nov 4): members. One test per sentence, plus the pitched turn.
import { describe, it, expect } from 'vitest';

process.env.REPLACE14 = 'bigspenders,firstbirds,charmers';
const { applyMove } = await import('../../../engine/v4/core.js');
const { quadrant, defById } = await import('../../../engine/v4/content/index.js');
const { table, uidIn } = await import('./cards-helpers-b.js');
const { move } = await import('./helpers.js');
const { sceneQ, settle, passBuys } = await import('./cards-helpers.js');
delete process.env.REPLACE14;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
const log = s => s.log.join('\n');

describe('REPLACE14: Big Spenders', () => {
  it("is dealt in Smooth Talkers' place", () => {
    expect(defById('silver.bigspenders').name).toBe('Big Spenders');
    expect(defById('silver.smoothtalker').retired).toBe(true);
  });
  it('silver paid for a member goes to rivals you choose, all of it, +1 follower each', () => {
    let s = table(['red', 'silver'], { n: 3, round: 2, res: [{ silver: 6 }], members: [['silver.bigspenders']], shop: ['silver.toastmaster'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    const u = uidIn(s, 'silver.toastmaster', 'shop');
    s = answer(s, `card:${u}`);
    while (s.pending && s.pending.prompt?.includes('pay')) s = answer(s, s.pending.options[0].id);
    const paid = 6 - s.players[0].res.silver;
    expect(paid).toBeGreaterThan(0);
    expect(s.pending.options.map(o => o.id)).not.toContain('done');
    for (let i = 0; i < paid; i++) s = answer(s, i % 2 ? 'player:2' : 'player:1');
    expect(s.players[1].res.silver + s.players[2].res.silver).toBe(paid);
    expect(log(s)).toContain(`then +${paid} followers.`);
    expect(s.players[0].bonus).toBe(paid + 2); // + Gather's round II recruit bonus
  });
});

describe('REPLACE14: Early Birds reworked ("If you place the round’s first minion, your next turn comes right after it.")', () => {
  const rich = { purple: 9, red: 9, gold: 9, green: 9 };
  const scene = members => sceneQ({ quadrants: ['purple', 'echo', 'gold', 'red'], n: 3, round: 2, res: [rich, rich, rich], members,
    queue: [0, 1, 2, 2, 1, 0, 0, 1, 2].map(p => ({ t: 'turn', p })).concat({ t: 'allPlaced' }) });
  const plain = s => {
    const o = s.pending.options.find(x => x.kind === 'slot' && ['gold', 'red'].includes(s.quadrants[x.q])) || s.pending.options.find(x => x.kind === 'slot');
    return passBuys(settle(move(s, o.id)));
  };
  it("replaces the live card's rule (Early Birds' new text is on the card)", () => {
    expect(defById('purple.firstbirds').text).toBe('If you place the round’s first minion, your next turn comes right after it.');
  });
  it('the owner places the round’s first minion: their next turn comes right after it', () => {
    let s = scene([['purple.firstbirds']]);
    s = plain(s);
    expect(s.log.join('\n')).toContain("P1's Early Birds: P1 takes their next turn now.");
    expect(s.pending.player).toBe(0);
  });
  it('not the first minion of the round: nothing happens', () => {
    let s = scene([[], ['purple.firstbirds']]);
    s = plain(s); // P1 places first
    expect(s.pending.player).toBe(1);
    s = plain(s); // P2's first minion is the round's second
    expect(s.log.join('\n')).not.toContain('Early Birds');
    expect(s.pending.player).toBe(2);
  });
});

describe('REPLACE14: Charmers ("Whenever you give silver to rivals, +1 of any color per silver given.")', () => {
  it("is dealt in Smooth Talkers' place", () => {
    expect(defById('silver.charmers').name).toBe('Charmers');
    expect(defById('silver.smoothtalker').retired).toBe(true);
  });
  it('Toast in round I: each of 3 rivals +1 silver, so +3 of any colors, picked one at a time (the pitched turn)', () => {
    let s = table(['red', 'silver', 'market'], { n: 4, round: 1, members: [['silver.charmers']] });
    s = answer(s, `slot:${slot(s, 'silver', 'Toast')}`);
    expect(log(s)).toContain("P1's Charmers: 3 silver given, +3 of any colors.");
    s = answer(s, 'color:red'); s = answer(s, 'color:red'); s = answer(s, 'color:blue');
    expect(s.players[0].res).toMatchObject({ red: 2, blue: 1, silver: 3 });
    expect([1, 2, 3].map(i => s.players[i].res.silver)).toEqual([1, 1, 1]);
  });
  it('Party Gifts giving 2: +2 of any colors on top of its 4 followers; silver a rival gives you pays nothing', () => {
    let s = table(['red', 'silver'], { n: 3, round: 1, members: [['silver.charmers']] });
    s = answer(s, `slot:${slot(s, 'silver', 'Party Gifts')}`);
    s = answer(s, 'player:1'); s = answer(s, 'player:2'); s = answer(s, 'done');
    expect(log(s)).toContain("P1's Charmers: 2 silver given, +2 of any colors.");
    s = answer(s, 'color:silver'); s = answer(s, 'color:red');
    expect(s.players[0].res).toMatchObject({ silver: 1, red: 1 });
    expect(s.players[0].bonus).toBe(4);
    let t = table(['red', 'silver'], { n: 2, round: 1, members: [[], ['silver.charmers']] });
    t = answer(t, `slot:${slot(t, 'silver', 'Toast')}`);
    expect(log(t)).not.toContain('Charmers');
  });
});
