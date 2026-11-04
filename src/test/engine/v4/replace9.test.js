// @vitest-environment node
// Members C (overnight quality loop, Nov 4; /mnt/project-files/quality/pitches/C-*.md), the REPLACE9=1 bot-test
// switch: a test per sentence of each new card, its pitched turn played out, and the old card no longer dealt. The
// switch is read when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE9 = 'tollkeeper,quilter,lastminute,bargainhunter,hypnotist,jack,ambassadors,mannequin,stallholder';
const { applyMove } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
delete process.env.REPLACE9;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
const BY = { contests: 'byColor' };
/** Answer every pending ask whose prompt starts with `head`, picking the option `pick(options)` returns. */
const answerAll = (s, head, pick) => { while (s.pending?.prompt?.startsWith(head)) s = answer(s, pick(s.pending.options, s.pending.player).id); return s; };

describe('REPLACE9: the switch', () => {
  it('prints the draft prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f, d.n]; };
    expect(price('yellow.tollkeeper')).toEqual([3, 3, 1, 1]);
    expect(price('yellow.quilter')).toEqual([5, 2, 1, 1]);
    expect(price('market.lastminute')).toEqual([3, 1, 1, 1]);
    for (const id of ['yellow.customs', 'yellow.dyer', 'market.critic']) expect(defById(id).retired).toBe(true);
    expect(defById('yellow.tollkeeper').round).toBe(1);
    expect(defById('market.lastminute').round).toBe(1);
  });
});

describe('Toll Keeper: "Round End: each rival who doesn\'t hold a full set gives you 2 resources of their choice."', () => {
  const Q4 = ['red', 'yellow', 'market', 'purple'];
  it('Round End, before contests: a rival with no full set gives 2 of their choice; one with a set gives nothing', () => {
    // P2 has no purple (no set), P3 holds one of each (a set)
    let s = table(Q4, { n: 3, round: 1, res: [{}, { red: 3, blue: 2 }, { red: 1, yellow: 1, blue: 1, purple: 1 }], members: [['yellow.tollkeeper']], queue: [{ t: 'allPlaced' }] });
    expect(s.pending.player).toBe(1);
    expect(s.pending.prompt).toBe('Toll Keeper: you hold no full set. Give P1 2 resources: which color?');
    expect(s.pending.options.map(o => o.value).sort()).toEqual(['blue', 'red']);
    s = answer(s, 'color:red');
    expect(s.pending.prompt).toBe('Toll Keeper: you hold no full set. Give P1 1 more resource: which color?');
    s = answer(s, 'color:blue');
    expect(s.pending).toBeFalsy();
    expect(s.players[0].res).toMatchObject({ red: 1, blue: 1 });
    expect(s.players[1].res).toMatchObject({ red: 2, blue: 1 });
    expect(s.players[2].res).toMatchObject({ red: 1, yellow: 1, blue: 1, purple: 1 });
    expect(named(s, 'Toll Keeper')).toEqual(expect.arrayContaining(["P2 gave P1 1 red (P1's Toll Keeper).", "P2 gave P1 1 blue (P1's Toll Keeper)."]));
  });
  it('a rival with only 1 resource gives that one; a rival with nothing gives nothing', () => {
    let s = table(Q4, { n: 3, round: 1, res: [{}, { purple: 1 }, {}], members: [['yellow.tollkeeper']], queue: [{ t: 'allPlaced' }] });
    s = answer(s, 'color:purple');
    expect(s.pending).toBeFalsy();
    expect(s.players[0].res.purple).toBe(1);
    expect(s.players[1].res.purple).toBe(0);
  });
  it('it is a gift, not a steal: a rival\'s Bodyguards does not stop it', () => {
    let s = table(['red', 'yellow', 'market', 'thieves'], { n: 2, round: 1, res: [{}, { red: 4 }], members: [['yellow.tollkeeper'], ['thieves.watchdog']], queue: [{ t: 'allPlaced' }] });
    s = answerAll(s, 'Toll Keeper', o => o[0]);
    expect(s.players[0].res.red).toBe(2);
  });
  it('pitched turn: round II end, 4 players; the toll lands before contests, so it can win Most full sets', () => {
    // Ana (P1) owns Toll Keeper and holds red, blue, yellow but no purple. Cleo (P3) holds only purple and gives 2 of it:
    // Ana now holds a full set and wins Yellow's Most full sets (+6 in round II). Ben (P2) holds a set: he gives nothing.
    let s = table(Q4, { n: 4, round: 2, rules: BY, res: [{ red: 2, blue: 2, yellow: 2 }, { red: 1, yellow: 1, blue: 1, purple: 1 }, { purple: 5 }, { red: 3, blue: 2 }],
      members: [['yellow.tollkeeper']], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    s = answerAll(s, 'Toll Keeper', o => o.find(x => x.value === 'purple') || o[0]);
    expect(s.players[0].res.purple).toBe(2); // Cleo's purple
    expect(s.players[2].res.purple).toBe(3);
    expect(s.players[1].res).toMatchObject({ red: 1, yellow: 1, blue: 1, purple: 1 });
    // Ana: 2 sets (2 each of 4 colors) against Ben's 1: she wins Most full sets
    const yellowWin = (s.contests || []).at(-1).results.find(c => c.qid === 'yellow');
    expect(yellowWin.winners).toEqual([0]);
  });
});

describe('Quilter: "On Use, once per game: turn up to 3 full sets into 6 followers each."', () => {
  const Q4 = ['red', 'yellow', 'market', 'silver'];
  it('On Use: every full set held becomes 6 followers, paying 1 of each color per set', () => {
    let s = table(Q4, { n: 3, round: 3, res: [{ red: 3, yellow: 4, blue: 2, silver: 3 }], members: [['yellow.quilter']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'yellow.quilter', 0)}`);
    expect(s.players[0].res).toMatchObject({ red: 1, yellow: 2, blue: 0, silver: 1 });
    expect(s.players[0].bonus).toBe(12);
    expect(named(s, 'Quilter')).toContain("P1's Quilter: turns 2 full sets (2 of each color) into 12 followers.");
  });
  it('up to 3: with 5 sets held, 3 are turned in (18 followers)', () => {
    let s = table(Q4, { n: 3, round: 3, res: [{ red: 5, yellow: 6, blue: 5, silver: 5 }], members: [['yellow.quilter']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'yellow.quilter', 0)}`);
    expect(s.players[0].res).toMatchObject({ red: 2, yellow: 3, blue: 2, silver: 2 });
    expect(s.players[0].bonus).toBe(18);
  });
  it('once per game: not offered again, next round included', () => {
    let s = table(Q4, { n: 3, round: 2, res: [{ red: 3, yellow: 4, blue: 3, silver: 3 }], members: [['yellow.quilter']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'yellow.quilter', 0)}`);
    expect(s.pending.options.some(o => o.id === `use:${uidIn(s, 'yellow.quilter', 0)}`)).toBe(false);
    expect(s.cards[uidIn(s, 'yellow.quilter', 0)].used).toBeTruthy();
    expect(defById('yellow.quilter').activate).toBe('game');
  });
  it('no full set: nothing is paid or gained, and the use comes back', () => {
    let s = table(Q4, { n: 3, round: 2, res: [{ red: 3, yellow: 4, blue: 3 }], members: [['yellow.quilter']], queue: [{ t: 'buy', p: 0 }] });
    const id = `use:${uidIn(s, 'yellow.quilter', 0)}`;
    if (s.pending.options.some(o => o.id === id)) {
      s = move(s, id);
      expect(s.players[0].res).toMatchObject({ red: 3, yellow: 4, blue: 3, silver: 0 });
      expect(s.players[0].bonus).toBe(0);
      expect(s.cards[uidIn(s, 'yellow.quilter', 0)].used).toBeFalsy();
    }
  });
  it('pitched turn: round III, 4 players, 3 sets held: 18 followers, the recruit still free, and Most full sets is gone', () => {
    let s = table(Q4, { n: 4, round: 3, res: [{ red: 3, yellow: 4, blue: 3, silver: 3 }], members: [['yellow.quilter']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'yellow.quilter', 0)}`);
    expect(s.players[0].bonus).toBe(18);
    expect(s.players[0].res).toMatchObject({ red: 0, yellow: 1, blue: 0, silver: 0 });
    expect(s.pending.player).toBe(0); // still P1's recruit
  });
});

describe('Last-Minute Shopper: "Round End: you may recruit a shop member, paying its cost."', () => {
  const Q4 = ['red', 'market', 'purple', 'silver'];
  it('Round End, before contests: offers each shop member the owner can pay for, and "Recruit nothing"', () => {
    let s = table(Q4, { n: 3, round: 1, res: [{ red: 4 }], members: [['market.lastminute']], shop: ['red.volunteer', 'market.snob'], queue: [{ t: 'allPlaced' }] });
    expect(s.pending.prompt).toBe('Last-Minute Shopper: before contests are scored, recruit a shop member, paying its cost?');
    const labels = s.pending.options.map(o => o.label);
    expect(labels.some(l => l.startsWith('Volunteer'))).toBe(true);
    expect(labels.some(l => l.startsWith('Snobs'))).toBe(false); // needs blue
    expect(labels).toContain('Recruit nothing');
  });
  it('recruiting pays its cost; "Recruit nothing" keeps the resources', () => {
    let s = table(Q4, { n: 3, round: 1, res: [{ red: 4 }], members: [['market.lastminute']], shop: ['red.volunteer'], queue: [{ t: 'allPlaced' }] });
    const vol = s.pending.options.find(o => o.label.startsWith('Volunteer'));
    s = answer(s, vol.id);
    s = answerAll(s, 'Last-Minute Shopper: how do you pay', o => o[0]);
    expect(owns(s, 0, 'red.volunteer')).toBe(true);
    expect(s.players[0].res.red).toBeLessThan(4);
    let t = table(Q4, { n: 3, round: 1, res: [{ red: 4 }], members: [['market.lastminute']], shop: ['red.volunteer'], queue: [{ t: 'allPlaced' }] });
    t = answer(t, 'none');
    expect(owns(t, 0, 'red.volunteer')).toBe(false);
    expect(t.players[0].res.red).toBe(4);
  });
  it('nothing affordable: no ask', () => {
    const s = table(Q4, { n: 3, round: 1, res: [{}], members: [['market.lastminute']], shop: ['market.snob'], queue: [{ t: 'allPlaced' }] });
    expect(s.pending).toBeFalsy();
    expect(named(s, 'Last-Minute Shopper')).toContain("P1's Last-Minute Shopper: nothing in the shop they can pay for.");
  });
  it('pitched turn: round I end, the recruit counts in Blue\'s Most members before it is scored', () => {
    // P1: Last-Minute Shopper + 1 member (2), P2: 3 members. P1 buys Window Dressers (counts as 3) at round end: 5 to 3.
    let s = table(Q4, { n: 3, round: 1, rules: BY, res: [{ blue: 3, red: 1 }], members: [['market.lastminute', 'red.volunteer'], ['red.bodysnatchers', 'purple.gossip', 'silver.godparents']],
      shop: ['market.windowdresser'], queue: [{ t: 'allPlaced' }, { t: 'endRound' }] });
    const wd = s.pending.options.find(o => o.label.startsWith('Window Dressers'));
    expect(wd).toBeTruthy();
    s = answer(s, wd.id);
    s = answerAll(s, 'Last-Minute Shopper: how do you pay', o => o[0]);
    s = answerAll(s, 'Churn', o => o[0]);
    expect(owns(s, 0, 'market.windowdresser')).toBe(true);
    const blue = (s.contests || []).at(-1).results.find(c => c.qid === 'market');
    expect(blue.winners).toEqual([0]);
  });
});

describe('Bargain Hunter: "While you have the fewest followers (ties count), buying followers doesn\'t use up your recruit."', () => {
  const Q4 = ['red', 'market', 'purple', 'silver'];
  const buy1 = s => { s = move(s, 'followers:1'); while (s.pending?.kind === 'pay' || s.pending?.prompt?.includes('pay for')) s = answer(s, s.pending.options[0].id); return s; };
  it('price and retirement', () => {
    expect([defById('market.bargainhunter').s, defById('market.bargainhunter').w]).toEqual([2, 1]);
    expect(defById('market.regular').retired).toBe(true);
  });
  it('fewest followers: a follower purchase hands back the recruit; once past a rival, the next buy uses it up', () => {
    // P1 holds 1 + Bargain Hunter's 1 = 2 followers; P2 holds 1 + 3 = 4
    let s = table(Q4, { n: 2, round: 2, res: [{ red: 9 }], bonus: [0, 3], members: [['market.bargainhunter']], queue: [{ t: 'buy', p: 0 }, { t: 'endTurn', p: 0 }] });
    s.current = 0;
    s = move(s, 'tier:small'); // 2 -> 3, fewest before it: free
    expect(s.pending?.kind).toBe('buy');
    expect(s.pending.options.some(o => o.id.startsWith('tier:'))).toBe(true);
    expect(named(s, 'Bargain Hunter')).toContain("P1's Bargain Hunter: fewest followers, so that purchase didn't use up the recruit.");
    s = move(s, 'tier:small'); // 3 -> 4, still fewest before it (3 < 4): free
    expect(s.pending?.kind).toBe('buy');
    s = move(s, 'tier:small'); // 4 -> 5, tied before it (ties count): free
    expect(s.pending?.kind).toBe('buy');
    s = move(s, 'tier:small'); // 5 -> 6: not fewest before it: this one is the turn's recruit
    expect(s.pending?.options?.some(o => o.id.startsWith('tier:'))).not.toBe(true);
    expect(s.players[0].bonus).toBe(4); // four 1-follower buys, the first three free
  });
  it('not fewest: buying followers uses up the recruit as usual', () => {
    let s = table(Q4, { n: 2, round: 2, res: [{ red: 9 }], bonus: [5, 0], members: [['market.bargainhunter']], queue: [{ t: 'buy', p: 0 }, { t: 'endTurn', p: 0 }] });
    s.current = 0;
    s = move(s, 'tier:small');
    expect(s.pending?.options?.some(o => o.id.startsWith('tier:'))).not.toBe(true);
  });
});

describe('Hypnotist: "On Use, once per game: whoever places next puts their minion on an open space you choose."', () => {
  const Q4 = ['red', 'market', 'purple', 'silver'];
  it('price and retirement', () => {
    expect([defById('benders.hypnotist').s, defById('benders.hypnotist').w]).toEqual([0, 6]);
    expect(defById('benders.extrahand').retired).toBe(true);
  });
  it('On Use: the owner names an open space; after the owner\'s turn, the next minion placed must go there; then it is spent', () => {
    let s = table(Q4, { n: 3, round: 2, members: [['benders.hypnotist']], queue: [{ t: 'place', p: 0 }, { t: 'endTurn', p: 0 }, { t: 'place', p: 1 }, { t: 'endTurn', p: 1 }, { t: 'place', p: 2 }] });
    s.current = 0;
    s = move(s, `use:${uidIn(s, 'benders.hypnotist', 0)}`);
    expect(s.pending.prompt).toBe('Hypnotist: whoever places next must put their minion on which open space?');
    const pick = s.pending.options[s.pending.options.length - 1];
    s = answer(s, pick.id);
    expect(named(s, 'Hypnotist')[0]).toMatch(/^P1's Hypnotist: whoever places next must take /);
    // the owner's own placement this turn is free
    const own = s.pending.options.find(o => o.id.startsWith('slot:') && o.id !== pick.id);
    expect(s.pending.options.filter(o => o.id.startsWith('slot:')).length).toBeGreaterThan(1);
    s = move(s, own.id);
    while (s.pending && s.pending.player === 0) s = answer(s, s.pending.options[0].id);
    // P2 must take the named space
    expect(s.pending.player).toBe(1);
    expect(s.pending.options.map(o => o.id)).toEqual([pick.id]);
    s = move(s, pick.id);
    while (s.pending && s.pending.player === 1) s = answer(s, s.pending.options[0].id);
    // P3 places freely again
    expect(s.pending.player).toBe(2);
    expect(s.pending.options.filter(o => o.id.startsWith('slot:')).length).toBeGreaterThan(1);
  });
  it('if the named space is taken first (by the owner), the next player places as usual', () => {
    let s = table(Q4, { n: 3, round: 2, members: [['benders.hypnotist']], queue: [{ t: 'place', p: 0 }, { t: 'endTurn', p: 0 }, { t: 'place', p: 1 }] });
    s.current = 0;
    s = move(s, `use:${uidIn(s, 'benders.hypnotist', 0)}`);
    const pick = s.pending.options[0];
    s = answer(s, pick.id);
    s = move(s, pick.id); // the owner takes it
    while (s.pending && s.pending.player === 0) s = answer(s, s.pending.options[0].id);
    expect(s.pending.player).toBe(1);
    expect(s.pending.options.filter(o => o.id.startsWith('slot:')).length).toBeGreaterThan(1);
  });
});

describe('Jack-of-All-Trades: "Your yellow counts as any color in your full sets."', () => {
  const Q4 = ['red', 'yellow', 'market', 'purple'];
  it('price and retirement', () => {
    const d = defById('yellow.jack');
    expect([d.s, d.w, d.f, d.n, d.round]).toEqual([3, 1, 1, 1, 1]);
    expect(defById('yellow.tastemaker').retired).toBe(true);
  });
  it('Most full sets: yellow fills a missing color (no purple, 4 yellow: 2 sets, beating a rival\'s 1)', () => {
    const won = jack => {
      const s = table(Q4, { n: 2, round: 1, rules: BY, res: [{ red: 2, yellow: 4, blue: 2 }, { red: 1, yellow: 1, blue: 1, purple: 1 }], members: [[jack]], queue: [{ t: 'endRound' }] });
      return (s.contests || []).at(-1).results.find(c => c.qid === 'yellow').winners;
    };
    expect(won('yellow.jack')).toEqual([0]);
    expect(won('yellow.harmonist')).toEqual([1]);
  });
  it('only your own yellow and only in full sets: a rival\'s Toll Keeper sees 3 yellow and 1 red as a full set', () => {
    let s = table(Q4, { n: 2, round: 1, res: [{}, { yellow: 3, red: 1 }], members: [['yellow.tollkeeper'], ['yellow.jack']], queue: [{ t: 'allPlaced' }] });
    expect(s.pending?.prompt || '').not.toMatch(/Toll Keeper/);
    expect(named(s, 'Toll Keeper')).toContain("P1's Toll Keeper: every rival holds a full set or nothing.");
  });
  it('pitched turn: Quilter with Jack-of-All-Trades turns 2 sets in, yellow paying for the missing purple', () => {
    let s = table(Q4, { n: 4, round: 3, res: [{ red: 2, yellow: 5, blue: 3 }], members: [['yellow.quilter', 'yellow.jack']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'yellow.quilter', 0)}`);
    expect(s.players[0].bonus).toBe(12);
    expect(s.players[0].res).toMatchObject({ red: 0, yellow: 1, blue: 1, purple: 0 });
  });
});

describe('Ambassadors: "On Recruit: +1 of each color you have a member of. Round Start: +1 of each color you have a member of."', () => {
  const Q4 = ['red', 'yellow', 'market', 'purple'];
  it('price and retirement', () => {
    const d = defById('yellow.ambassadors');
    expect([d.s, d.w, d.f, d.n, d.now]).toEqual([5, 4, 3, 3, true]);
    expect(defById('yellow.caravan').retired).toBe(true);
  });
  it('Round Start: +1 of each color you have a member of (itself yellow), not the colors you hold', () => {
    const s = table(Q4, { n: 2, round: 1, res: [{ purple: 5 }], members: [['yellow.ambassadors', 'red.volunteer']], queue: [{ t: 'round', r: 2 }] });
    expect(s.players[0].res).toEqual({ red: 1, yellow: 1, blue: 0, purple: 5 });
    expect(named(s, 'Ambassadors')).toContain("P1's Ambassadors: +1 red, +1 yellow.");
  });
});

describe('Mannequin: "Blue members in the shop count as your members when contests are scored."', () => {
  const Q4 = ['red', 'market', 'purple', 'silver'];
  it('price and retirement', () => {
    const d = defById('market.mannequin');
    expect([d.s, d.w, d.f, d.n, d.round]).toEqual([3, 2, 1, 1, 1]);
    expect(defById('market.hawkers').retired).toBe(true);
  });
  it('pitched turn: round I end, Most members: 1 member plus 2 blue shop members (one counts as 3) beats a rival\'s 3', () => {
    const won = list => {
      const s = table(Q4, { n: 2, round: 1, rules: BY, members: [list, ['red.bodysnatchers', 'purple.gossip', 'silver.godparents']], shop: ['market.windowdresser', 'market.curator', 'red.volunteer'], queue: [{ t: 'endRound' }] });
      return (s.contests || []).at(-1).results.find(c => c.qid === 'market').winners;
    };
    expect(won(['market.mannequin'])).toEqual([0]);
    expect(won(['market.lastminute'])).toEqual([1]);
  });
});

describe('Stallholder: "On Use, once per round: move a shop member beside this card, then refill. Until round end, anyone may recruit it there; a rival pays its cost to you."', () => {
  const Q4 = ['red', 'market', 'purple', 'silver'];
  const stalled = (queue = [{ t: 'buy', p: 0 }, { t: 'endTurn', p: 0 }, { t: 'turn', p: 1 }]) => {
    let s = table(Q4, { n: 3, round: 1, res: [{ blue: 2 }, { red: 6 }], members: [['market.stallholder']], shop: ['red.volunteer', 'market.curator'], queue });
    const vol = uidIn(s, 'red.volunteer', 'shop'), shopLen = s.shop.length;
    s = move(s, `use:${uidIn(s, 'market.stallholder', 0)}`);
    s = answer(s, `card:${vol}`);
    return { s, vol, shopLen };
  };
  it('price, retirement, and the old Hawker', () => {
    const d = defById('market.stallholder');
    expect([d.s, d.w, d.f, d.n, d.round, d.activate]).toEqual([4, 1, 1, 1, 1, 'round']);
    expect(defById('market.hawkers').retired).toBe(true);
  });
  it('On Use: the member moves beside the card and the shop refills', () => {
    const { s, vol, shopLen } = stalled();
    expect(s.shop).not.toContain(vol);
    expect(s.shop.length).toBe(shopLen);
    expect(s.stalls[uidIn(s, 'market.stallholder', 0)]).toEqual([vol]);
  });
  it('a rival recruits it on their own turn and pays its cost to the owner', () => {
    let { s, vol } = stalled();
    s = answer(s, 'pass');
    while (s.pending && s.pending.player !== 1) s = answer(s, s.pending.options[0].id);
    while (s.pending?.kind !== 'buy' && s.pending?.player === 1 && !s.pending.options.some(o => o.id === `card:${vol}`)) s = answer(s, s.pending.options[0].id);
    const opt = s.pending.options.find(o => o.id === `card:${vol}`);
    expect(opt.label).toMatch(/P1's Stallholder/);
    const before = s.players[0].res.red || 0;
    s = answer(s, opt.id);
    while (s.pending?.prompt?.startsWith('P2: choose how to pay')) s = answer(s, s.pending.options[0].id);
    expect(owns(s, 1, 'red.volunteer')).toBe(true);
    expect((s.players[0].res.red || 0)).toBeGreaterThan(before);
  });
  it('once per round: the use comes back next round', () => {
    let { s } = stalled([{ t: 'buy', p: 0 }, { t: 'allPlaced' }, { t: 'endRound' }, { t: 'afterRound' }]);
    s = answer(s, 'pass');
    expect(s.round).toBe(2);
    expect(s.cards[uidIn(s, 'market.stallholder', 0)].used).toBe(false);
  });
  it('unsold, it goes to the bottom of the pile after contests', () => {
    let { s, vol } = stalled([{ t: 'buy', p: 0 }, { t: 'endRound' }]);
    s = answer(s, 'pass');
    expect(s.pile.at(-1) === vol || s.pile.includes(vol)).toBe(true);
    expect(s.stalls[uidIn(s, 'market.stallholder', 0)]).toEqual([]);
  });
});

describe('REPLACE9 by card key', () => {
  it('a key switches on only that card and retires only its old card', async () => {
    const { execFileSync } = await import('node:child_process');
    const out = execFileSync(process.execPath, ['--input-type=module', '-e', `
      const { defById } = await import('${new URL('../../../engine/v4/content/index.js', import.meta.url).pathname}');
      const has = id => { try { return !!defById(id); } catch { return false; } };
      console.log(JSON.stringify([has('yellow.quilter'), has('yellow.tollkeeper'), !!defById('yellow.dyer').retired, !!defById('yellow.customs').retired]));
    `], { env: { ...process.env, REPLACE9: 'quilter' } }).toString().trim().split('\n').pop();
    expect(JSON.parse(out)).toEqual([true, false, true, false]);
  });
});
