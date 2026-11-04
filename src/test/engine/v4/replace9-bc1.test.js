// @vitest-environment node
// Members C, batches bC1 and bC2 (Nov 4 scale-up), under REPLACE9: Power Shoppers (Snobs' place), Stand-In (Extra
// Hand's place), Tailor (Dyer's place), Dabbler (Dabblers' place).
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'powershoppers,standin,tailor,dabbler,latebloomers,dowagers,windowdressers9,moneylender';
const { applyMove, countMembersOfColor } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move } = await import('./helpers.js');
const { table, named, uidIn } = await import('./cards-helpers-b.js');
delete process.env.REPLACE9;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const pay = s => { while (s.pending?.kind === 'pay' || s.pending?.prompt?.includes('choose how to pay')) s = answer(s, s.pending.options[0].id); return s; };
const Q4 = ['red', 'yellow', 'market', 'purple'];

describe('Power Shoppers: "Whenever you recruit your second member in a turn, +2 followers."', () => {
  it('price, and Snobs retired', () => {
    const d = defById('market.powershoppers');
    expect([d.s, d.w]).toEqual([4, 3]);
    expect(defById('market.snob').retired).toBe(true);
  });
  it('the second member of a turn pays +2, the first and third do not', () => {
    let s = table(Q4, { n: 2, round: 2, res: [{ red: 20, yellow: 20, blue: 20, purple: 20 }], members: [['market.powershoppers']],
      shop: ['red.volunteer', 'yellow.gardener', 'purple.crew'], queue: [{ t: 'buy', p: 0 }, { t: 'buy', p: 0, extra: true }, { t: 'buy', p: 0, extra: true }] });
    s.players[0].buyTwiceNow = true;
    const b0 = s.players[0].bonus;
    s = pay(move(s, `card:${uidIn(s, 'red.volunteer', 'shop')}`));
    expect(s.players[0].bonus).toBe(b0);
    s = pay(move(s, `card:${uidIn(s, 'yellow.gardener', 'shop')}`));
    expect(s.players[0].bonus).toBe(b0 + 2);
    expect(named(s, 'Power Shoppers')).toContain("P1's Power Shoppers: a second member this turn, +2 followers.");
    if (s.pending?.options?.some(o => o.id === `card:${uidIn(s, 'purple.crew', 'shop')}`)) {
      s = pay(move(s, `card:${uidIn(s, 'purple.crew', 'shop')}`));
      expect(s.players[0].bonus).toBe(b0 + 2);
    }
  });
});

describe('Stand-In: "Round Start: if you have the fewest followers (ties count), +1 minion this round."', () => {
  it('price, and Extra Hand retired', () => {
    const d = defById('benders.standin');
    expect(d.s + d.w).toBe(6);
    expect(d.round).toBe(1);
    expect(defById('benders.extrahand').retired).toBe(true);
  });
  const start = bonus => {
    const s = table(Q4, { n: 3, round: 1, bonus, members: [['benders.standin']], queue: [{ t: 'round', r: 2 }] });
    return s;
  };
  it('fewest followers at round II start: one more minion this round', () => {
    const s = start([1, 4, 6]);
    expect(named(s, 'Stand-In').join(' ')).toContain('1 more minion');
  });
  it('tied for fewest counts (its own worth counts toward followers)', () => {
    const s = start([2, 3, 6]); // Stand-In is worth 1: 3 followers, tied with P2
    expect(named(s, 'Stand-In').join(' ')).toContain('1 more minion');
  });
  it('not the fewest: nothing', () => {
    const s = start([5, 3, 6]);
    expect(named(s, 'Stand-In')).toEqual([]);
  });
});

describe('Tailor: "Round Start: +1 follower per full set you hold."', () => {
  it('price, and Dyer retired', () => {
    const d = defById('yellow.tailor');
    expect([d.s, d.w]).toEqual([5, 2]);
    expect(defById('yellow.dyer').retired).toBe(true);
  });
  it('2 full sets at round II start: +2 followers; none: nothing', () => {
    const go = res => table(Q4, { n: 2, round: 1, res: [res], members: [['yellow.tailor']], queue: [{ t: 'round', r: 2 }] });
    let s = go({ red: 2, yellow: 3, blue: 2, purple: 2 });
    expect(named(s, 'Tailor')).toContain("P1's Tailor: 2 full sets, +2 followers.");
    s = go({ red: 2, yellow: 3, blue: 2 });
    expect(named(s, 'Tailor')).toEqual([]);
  });
});

describe('Dabbler: "Counts as a member of every color."', () => {
  it('price, and Dabblers retired', () => {
    const d = defById('benders.dabbler');
    expect([d.s + d.w]).toEqual([2]);
    expect(defById('benders.dabblers').retired).toBe(true);
  });
  it('one member of each color on the table', () => {
    const s = table(Q4, { n: 2, members: [['benders.dabbler']] });
    for (const q of Q4) expect(countMembersOfColor(s, s.players[0], q)).toBe(1);
  });
});

describe('Late Bloomers: "Round End: if you have the fewest followers (ties count), +3 white."', () => {
  const Q = ['red', 'trading', 'market', 'purple'];
  it('price, and Heiresses retired', () => {
    const d = defById('trading.latebloomers');
    expect([d.s, d.w]).toEqual([4, 3]);
    expect(defById('trading.heiress').retired).toBe(true);
  });
  const end = bonus => table(Q, { n: 3, round: 1, bonus, members: [['trading.latebloomers']], queue: [{ t: 'allPlaced' }] });
  it('fewest (its own worth counts): +3 white, before contests', () => {
    const s = end([1, 4, 6]);
    expect(s.players[0].res.white).toBe(3);
    expect(named(s, 'Late Bloomers')).toContain("P1's Late Bloomers: fewest followers, +3 white.");
  });
  it('tied for fewest counts; not fewest: nothing', () => {
    expect(end([1, 3, 6]).players[0].res.white).toBe(3);
    expect(end([4, 3, 6]).players[0].res.white || 0).toBe(0);
  });
});

describe('Dowagers: "On Use, once per game: cast out any of your other members; +3 followers each."', () => {
  const Q = ['red', 'trading', 'market', 'purple'];
  it('price', () => {
    const d = defById('trading.dowagers');
    expect([d.s, d.w]).toEqual([5, 4]);
  });
  it('casts out members one at a time to the bottom of the pile, +3 each, until Done', () => {
    let s = table(Q, { n: 2, round: 3, members: [['trading.dowagers', 'red.volunteer', 'market.regular']] });
    const dow = uidIn(s, 'trading.dowagers', 0), vol = uidIn(s, 'red.volunteer', 0);
    const b0 = s.players[0].bonus;
    s = move(s, `use:${dow}`);
    expect(s.pending.prompt).toContain('Dowagers: cast out which member?');
    expect(s.pending.options.map(o => o.id)).not.toContain(`card:${dow}`);
    s = move(s, `card:${vol}`);
    expect(s.players[0].members).not.toContain(vol);
    expect(s.pile[s.pile.length - 1]).toBe(vol);
    expect(s.players[0].bonus).toBe(b0 + 3);
    s = move(s, 'done');
    expect(s.players[0].members).toContain(uidIn(s, 'market.regular', 0));
    expect(named(s, 'Dowagers')).toContain("P1's Dowagers: cast out Volunteer, +3 followers.");
  });
});

describe('Duty Collector: "Whenever a rival recruits a member of a color you have a member of, +1 of that color."', () => {
  it('price, round I, and Customs Officer retired', () => {
    const d = defById('yellow.dutycollector');
    expect([d.s, d.w, d.round]).toEqual([3, 3, 1]);
    expect(defById('yellow.customs').retired).toBe(true);
  });
  it('a rival recruits red while you hold a red member: +1 red; a color you have none of: nothing', () => {
    let s = table(Q4, { n: 2, res: [{}, { red: 20, yellow: 20, blue: 20, purple: 20 }], members: [['yellow.dutycollector', 'red.volunteer'], []],
      shop: ['red.intern', 'market.regular'], queue: [{ t: 'buy', p: 1 }, { t: 'buy', p: 1, extra: true }] });
    s.players[1].buyTwiceNow = true;
    s = pay(move(s, `card:${uidIn(s, 'red.intern', 'shop')}`));
    expect(s.players[0].res.red).toBe(1);
    expect(named(s, 'Duty Collector')[0]).toContain("P1's Duty Collector: P2 recruited");
    s = pay(move(s, `card:${uidIn(s, 'market.regular', 'shop')}`));
    expect(s.players[0].res.blue || 0).toBe(0);
  });
});

describe('Window Dressers (reworded): "On Recruit: send any shop members to the bottom of the pile, then refill. Recruit again this turn."', () => {
  it('same price and worth, and the old Window Dressers retired', () => {
    const d = defById('market.windowdressers9'), o = defById('market.windowdresser');
    expect([d.s, d.w, d.f]).toEqual([o.s, o.w, o.f]);
    expect(o.retired).toBe(true);
  });
  it('sends chosen shop members to the bottom, refills once, then offers another recruit', () => {
    let s = table(Q4, { n: 2, res: [{ red: 20, yellow: 20, blue: 20, purple: 20 }], shop: ['market.windowdressers9', 'red.volunteer', 'yellow.gardener', 'purple.crew'], queue: [{ t: 'buy', p: 0 }] });
    const vol = uidIn(s, 'red.volunteer', 'shop');
    s = pay(move(s, `card:${uidIn(s, 'market.windowdressers9', 'shop')}`));
    expect(s.pending.prompt).toContain('Window Dressers: send which member to the bottom?');
    s = move(s, `card:${vol}`);
    expect(s.pile[s.pile.length - 1]).toBe(vol);
    s = move(s, 'done');
    expect(s.shop).not.toContain(vol);
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.player).toBe(0);
    expect(named(s, 'Window Dressers').some(l => l.includes('recruit again this turn'))).toBe(true);
  });
  it('a bot that can afford nothing and holds under 3 resources keeps the shop', () => {
    let s = table(Q4, { n: 2, res: [{ blue: 4 }], shop: ['market.windowdressers9', 'red.volunteer', 'yellow.gardener', 'purple.crew'], queue: [{ t: 'buy', p: 0 }] });
    s = pay(move(s, `card:${uidIn(s, 'market.windowdressers9', 'shop')}`));
    const best = [...s.pending.options].sort((a, b) => b.hint - a.hint)[0];
    expect(best.id).toBe('done');
  });
  it('the batch sent to the bottom pays Patroness once, as Churn does', () => {
    let s = table(Q4, { n: 2, res: [{ red: 20, yellow: 20, blue: 20, purple: 20 }], members: [['market.patroness']], shop: ['market.windowdressers9', 'red.volunteer', 'yellow.gardener', 'purple.crew'], queue: [{ t: 'buy', p: 0 }] });
    s = pay(move(s, `card:${uidIn(s, 'market.windowdressers9', 'shop')}`));
    const b0 = s.players[0].bonus;
    s = move(s, `card:${uidIn(s, 'red.volunteer', 'shop')}`);
    s = move(s, `card:${uidIn(s, 'yellow.gardener', 'shop')}`);
    s = move(s, 'done');
    expect(s.players[0].bonus).toBe(b0 + 1);
  });
});

describe('Moneylender: "On Use, once per round: cast out one of your members costing 3 or less to the bottom of the pile. +4 white."', () => {
  const Q = ['red', 'trading', 'market', 'purple'];
  it('price, and Landlord retired', () => {
    const d = defById('trading.moneylender');
    expect([d.s, d.w]).toEqual([3, 1]);
    expect(defById('trading.shopkeeper').retired).toBe(true);
  });
  it('offers only other members costing 3 or less; the one cast out goes to the bottom, +4 white', () => {
    let s = table(Q, { n: 2, round: 2, members: [['trading.moneylender', 'red.volunteer', 'market.shopaholic']] });
    const ml = uidIn(s, 'trading.moneylender', 0), vol = uidIn(s, 'red.volunteer', 0);
    s = move(s, `use:${ml}`);
    const ids = s.pending.options.map(o => o.id);
    expect(ids).toContain(`card:${vol}`);
    expect(ids).not.toContain(`card:${ml}`);
    expect(ids).not.toContain(`card:${uidIn(s, 'market.shopaholic', 0)}`);
    s = move(s, `card:${vol}`);
    expect(s.players[0].members).not.toContain(vol);
    expect(s.pile[s.pile.length - 1]).toBe(vol);
    expect(s.players[0].res.white).toBe(4);
  });
  it('once per round: usable again the next round', () => {
    const s = table(Q, { n: 2, round: 2, members: [['trading.moneylender', 'red.volunteer']] });
    const ml = uidIn(s, 'trading.moneylender', 0);
    s.cards[ml].used = true;
    defById('trading.moneylender').onRoundStart({}, s.players[0], s.cards[ml]);
    expect(s.cards[ml].used).toBe(false);
  });
});
