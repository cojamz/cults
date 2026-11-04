// @vitest-environment node
// Replacement batch 3 (Nov 3; /mnt/project-files/replacements/batch3.md), the REPLACE3=1 bot-test switch: each new
// card fires once in a small hand-built position, and the old card it replaces is no longer dealt. The switch is read
// when the engine loads, so it is set before the engine is imported (dynamic imports below), then cleared.
import { describe, it, expect } from 'vitest';

process.env.REPLACE3 = '1';
const { applyMove, followers, resume } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { take, move } = await import('./helpers.js');
const { table, named, uidIn, owns } = await import('./cards-helpers-b.js');
// read once at load: cleared again so a later test file in this worker loads the engine without the switch
delete process.env.REPLACE3;

const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
/** Answer any pay sheet a recruit outside the buy step asks (the first way). */
const payAll = s => { while (s.pending?.kind === 'choose' && s.pending.options.some(o => o.kind === 'pay')) s = answer(s, s.pending.options.find(o => o.kind === 'pay').id); return s; };

describe('REPLACE3: the switch', () => {
  it('prints the draft prices (as a player sees them) and retires the old cards', () => {
    const price = id => { const d = defById(id); return [d.s, d.w, d.f]; };
    expect(price('trading.evictors')).toEqual([5, 3, 1]);
    expect(price('purple.interrupters')).toEqual([4, 2, 1]);
    expect(price('thieves.kidnappers')).toEqual([6, 2, 1]); // 2 more when it went live (Claude, Nov 3: owners won 44% at 4 + 2)
    expect(price('market.completists')).toEqual([6, 3, 2]);
    expect(price('echo.impersonators')).toEqual([4, 2, 1]);
    expect(price('red.missionaries')).toEqual([6, 3, 2]);
    expect(price('silver.creditors')).toEqual([4, 2, 1]); // Creditor: 1 member, worth 1 (Nov 4)
    expect(price('purple.pacers')).toEqual([6, 3, 2]);
    for (const id of ['trading.hoarder', 'purple.courier', 'thieves.kingpin', 'market.patroness', 'echo.muse', 'red.patriarch', 'silver.collector', 'purple.crew'])
      expect(defById(id).retired).toBe(true);
  });
});

describe('REPLACE3: each card fires', () => {
  it("Evictors: cast out a rival's member; you and that rival each gain white equal to its cost", () => {
    let s = table(['red', 'trading', 'market', 'yellow'], { round: 2, members: [['trading.evictors'], ['trading.martyr']], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'trading.evictors', 0)}`);
    expect(s.pending.prompt).toBe("Evictors: cast out which rival's member?");
    s = answer(s, `card:${uidIn(s, 'trading.martyr', 1)}`);
    expect(owns(s, 1, 'trading.martyr')).toBe(false);
    expect(s.cards[s.pile.at(-1)].def).toBe('trading.martyr');
    expect(s.players[0].res.white).toBe(4);
    expect(s.players[1].res.white).toBe(4);
    expect(s.players[1].bonus).toBe(4); // Martyrs left its cult
    expect(named(s, 'Evictors')).toContain("P1's Evictors: P1 and P2 each +4 white.");
  });

  it('Interrupters: a rival goes twice in a row; you may skip the second', () => {
    const turns = [{ t: 'turn', p: 1 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 2 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { n: 3, round: 2, members: [['purple.interrupters']], queue: turns });
    s = take(s, 'red.turnout');
    while (s.pending.player === 1 && s.pending.kind === 'buy') s = move(s, 'pass');
    expect(s.pending.player).toBe(0);
    expect(s.pending.prompt).toBe('Interrupters: P2 takes two turns in a row. Skip the second?');
    s = answer(s, 'skip');
    expect(s.pending.player).toBe(0);
    expect(s.pending.kind).toBe('place');
    expect(s.log).toContain("P1's Interrupters: P2 skips their next turn.");
    // P2's minion places after P3's turn
    expect(s.queue.filter(t => t.t === 'turn').map(t => t.p)).toEqual([2, 1]);
  });

  it('Interrupters: letting it go keeps the turn', () => {
    const turns = [{ t: 'turn', p: 1 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'allPlaced' }];
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.interrupters']], queue: turns });
    s = take(s, 'red.turnout');
    while (s.pending.player === 1 && s.pending.kind === 'buy') s = move(s, 'pass');
    s = answer(s, 'let');
    expect(s.pending.player).toBe(1);
    expect(s.pending.kind).toBe('place');
  });

  it('Kidnapper: at round start, steal the cheapest member of the rival with the most members', () => {
    let s = table(['red', 'thieves', 'market', 'trading'], { n: 3, round: 1, members: [['thieves.kidnappers'], ['red.recruitbonus', 'trading.martyr'], ['market.snob']], queue: [{ t: 'round', r: 2 }] });
    expect(owns(s, 0, 'red.recruitbonus')).toBe(true);
    expect(owns(s, 1, 'red.recruitbonus')).toBe(false);
    expect(named(s, 'Kidnapper')).toContain("P1's Kidnapper: stole P2's Greeters.");
  });

  it('Kidnapper: a tie for the most members is the owner’s pick', () => {
    let s = table(['red', 'thieves', 'market', 'trading'], { n: 3, round: 1, members: [['thieves.kidnappers'], ['red.crowd'], ['market.regular']], queue: [{ t: 'round', r: 2 }] });
    expect(s.pending.prompt).toBe('Kidnapper: steal which cheapest member?');
    s = answer(s, `card:${uidIn(s, 'market.regular', 2)}`);
    expect(owns(s, 0, 'market.regular')).toBe(true);
  });

  it('Completists: once per game, recruit every shop member of one color, paying each', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { round: 3, res: [{ red: 20 }], members: [['market.completists']], shop: ['red.recruitbonus', 'red.crowd', 'market.snob'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'market.completists', 0)}`);
    expect(s.pending.prompt).toBe('Completists: recruit every shop member of which color?');
    s = payAll(answer(s, 'color:red'));
    expect(owns(s, 0, 'red.recruitbonus')).toBe(true);
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(owns(s, 0, 'market.snob')).toBe(false);
    expect(s.players[0].res.red).toBe(20 - 3 - 3);
    // the turn's own recruit is still to come
    expect(s.pending.kind).toBe('buy');
    expect(s.pending.options.some(o => o.kind === 'tier' || o.kind === 'card')).toBe(true);
  });

  it("Impersonator: choose a rival's member; this member has its ability until you choose again", () => {
    let s = table(['red', 'echo', 'market', 'yellow'], { round: 1, members: [['echo.impersonators', 'market.regular'], ['market.snob', 'red.crowd']], queue: [{ t: 'round', r: 2 }] });
    expect(s.pending.prompt).toBe("Impersonator: choose a rival's member; until you choose again, Impersonator has that member's ability");
    s = answer(s, `card:${uidIn(s, 'market.snob', 1)}`);
    const me = s.cards[uidIn(s, 'echo.impersonators', 0)];
    expect(me.ability).toBe('market.snob');
    expect(named(s, 'Impersonator')).toContain('P1\'s Impersonator: has the ability of P2\'s Snobs ("Game End: +1 follower per blue member you have.").');
  });

  it('Impersonator: a copied game-end count scores for its owner', async () => {
    const { resume } = await import('../../../engine/v4/core.js');
    let s = table(['red', 'echo', 'market', 'yellow'], { round: 1, members: [['echo.impersonators', 'market.regular'], ['market.snob']], queue: [{ t: 'round', r: 2 }] });
    s = answer(s, `card:${uidIn(s, 'market.snob', 1)}`);
    s = resume({ ...s, queue: [{ t: 'finish' }], pending: null });
    expect(s.players[0].final.parts).toContain('Snobs +1');
  });

  it('Missionaries: give one member to each rival, then a free recruit costing up to 2 more for each', () => {
    let s = table(['red', 'market', 'trading', 'yellow'], { n: 3, round: 3, members: [['red.missionaries', 'red.recruitbonus', 'trading.martyr']], shop: ['market.snob', 'red.crowd'], queue: [{ t: 'buy', p: 0 }] });
    s = move(s, `use:${uidIn(s, 'red.missionaries', 0)}`);
    expect(s.pending.prompt).toBe('Missionaries: give which of your members to P2?');
    s = answer(s, `card:${uidIn(s, 'red.recruitbonus', 0)}`);
    expect(s.pending.prompt).toBe('Missionaries: give which of your members to P3?');
    s = answer(s, `card:${uidIn(s, 'trading.martyr', 0)}`);
    expect(owns(s, 1, 'red.recruitbonus')).toBe(true);
    expect(owns(s, 2, 'trading.martyr')).toBe(true);
    expect(s.players[0].bonus).toBe(4); // Martyrs left P1's cult
    expect(s.pending.prompt).toMatch(/^Missionaries: recruit which member for free\? \(2 to go: up to 6, 5\)/);
    s = answer(s, `card:${uidIn(s, 'market.snob', 'shop')}`);
    expect(s.pending.prompt).toMatch(/^Missionaries: recruit which member for free\? \(1 to go: up to 5\)/);
    s = answer(s, `card:${uidIn(s, 'red.crowd', 'shop')}`);
    expect(owns(s, 0, 'market.snob')).toBe(true);
    expect(owns(s, 0, 'red.crowd')).toBe(true);
    expect(s.players[0].res).toEqual(expect.objectContaining({ red: 0, blue: 0 }));
  });

  it('Creditor: once per round, a rival you choose gives you 2 followers, then gains 3 silver (Nov 4)', () => {
    let s = table(['red', 'silver', 'market', 'yellow'], { n: 3, round: 2, bonus: [0, 5, 0], members: [['silver.creditors'], ['silver.retinue']], queue: [{ t: 'buy', p: 0 }] });
    const uid = uidIn(s, 'silver.creditors', 0);
    expect(defById('silver.creditors')).toMatchObject({ name: 'Creditor', f: 1, n: 1, activate: 'round' });
    const f2 = followers(s, s.players[1]);
    s = move(s, `use:${uid}`);
    expect(s.pending.prompt).toBe('Creditor: which rival gives you 2 followers, then gains 3 silver?');
    s = answer(s, 'player:1');
    expect(s.players[0].bonus).toBe(2);
    expect(followers(s, s.players[1])).toBe(f2 - 2);
    expect(s.players[1].res.silver).toBe(3);
    expect(named(s, 'Creditor')).toContain("P1's Creditor: P2 gives P1 2 followers, then gains 3 silver.");
    expect(s.cards[uid].used).toBe(true); // once this round
    // next round it is back
    s.queue = [{ t: 'round', r: 3 }]; s.pending = null; s = resume(s);
    expect(s.cards[uid].used).toBe(false);
  });

  it('Creditor: a rival gives only the followers it has, never going below 0', () => {
    let s = table(['red', 'silver', 'market', 'yellow'], { n: 2, round: 2, members: [['silver.creditors']], queue: [{ t: 'buy', p: 0 }] });
    const have = followers(s, s.players[1]);
    s = answer(move(s, `use:${uidIn(s, 'silver.creditors', 0)}`), 'player:1');
    expect(followers(s, s.players[1])).toBe(Math.max(0, have - 2));
    expect(s.players[0].bonus).toBe(Math.min(2, have));
    expect(s.players[1].res.silver).toBe(3);
  });

  it('Creditor × Caterer: the 3 silver is a gift, so the gift hooks fire', () => {
    let s = table(['red', 'silver', 'market', 'yellow'], { n: 2, round: 2, bonus: [0, 3], members: [['silver.creditors', 'silver.caterer']], queue: [{ t: 'buy', p: 0 }] });
    const before = s.players[0].res.silver;
    s = answer(move(s, `use:${uidIn(s, 'silver.creditors', 0)}`), 'player:1');
    expect(s.players[0].res.silver).toBe(before + 1); // Caterer: whenever silver is gifted, +1 silver
  });

  it('Pacers: once per round, move a minion to an open space and do that action', () => {
    let s = table(['red', 'purple', 'market', 'yellow'], { round: 2, members: [['purple.pacers']], queue: [{ t: 'buy', p: 0 }] });
    s = { ...s, slots: { '0-0': 0 } };
    s = move(s, `use:${uidIn(s, 'purple.pacers', 0)}`);
    expect(s.pending.prompt).toBe('Pacers: move one of your minions to which open space?');
    s = answer(s, 'to:0-1'); // Gather: +3 red in round II
    expect(s.slots['0-0']).toBeUndefined();
    expect(s.slots['0-1']).toBe(0);
    expect(s.players[0].res.red).toBe(3);
    expect(named(s, 'Pacers')).toContain("P1's Pacers: moves a minion from Tryout to Gather.");
    // used for this round
    expect(s.pending?.options?.some(o => o.id === `use:${uidIn(s, 'purple.pacers', 0)}`) ?? false).toBe(false);
  });
});
