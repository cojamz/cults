// @vitest-environment node
// Blue's Nov 11 member calls (Cory): Swap Shoppers, Repossessors to the discard pile, Power Shoppers +3.
import { describe, it, expect } from 'vitest';
import { defById } from '../../../engine/v4/content/index.js';
import { discardOf } from '../../../engine/v4/discard.js';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';
import { usePool } from './pool-helpers.js';
usePool(['market.repossessors']);

const Q = ['red', 'market', 'yellow', 'thieves'];

describe('Cory’s words', () => {
  it('each card prints his text', () => {
    expect(defById('market.swapshoppers').text).toBe('On Use, once per round: swap one of your members for a discard-pile member that costs the same.');
    expect(defById('market.repossessors').text).toBe("On Use, once per game: discard a rival's member costing up to 8.");
    expect(defById('market.powershoppers').text).toBe('Whenever you recruit your second member in a turn, +3 followers.');
  });
});

describe('Swap Shoppers', () => {
  it('your member goes to the discard pile and the same-cost one joins your cult', () => {
    let s = table(Q, { n: 2, round: 2, members: [['market.swapshoppers', 'red.movementpenalty']], queue: [{ t: 'buy', p: 0 }] });
    // a same-cost member (5) and a dearer one in the discard pile
    const a = uidIn(s, 'red.seatfiller', 'pile'), b = uidIn(s, 'red.panel', 'pile');
    s = { ...s, pile: s.pile.filter(u => u !== a && u !== b), discard: [...(s.discard || []), a, b] };
    const u = uidIn(s, 'market.swapshoppers', 0), mine = uidIn(s, 'red.movementpenalty', 0);
    s = move(s, `use:${u}`);
    const trades = s.pending.options.filter(o => o.kind === 'trade');
    expect(trades.map(o => o.value)).toContainEqual([mine, a]);
    expect(trades.some(o => o.value[1] === b)).toBe(false);
    s = move(s, `trade:${mine}:${a}`);
    expect(s.players[0].members).toContain(a);
    expect(s.players[0].members).not.toContain(mine);
    expect(discardOf(s)).toContain(mine);
    expect(discardOf(s)).not.toContain(a);
    expect(s.cards[u].used).toBe(true);
  });
});

describe('Repossessors', () => {
  it("sends a rival's member costing up to 8 to the discard pile", () => {
    let s = table(Q, { n: 2, round: 2, members: [['market.repossessors'], ['red.movementpenalty']], queue: [{ t: 'buy', p: 0 }] });
    const u = uidIn(s, 'market.repossessors', 0), theirs = uidIn(s, 'red.movementpenalty', 1);
    s = move(s, `use:${u}`);
    s = move(s, `card:${theirs}`);
    expect(s.players[1].members).not.toContain(theirs);
    expect(discardOf(s)).toContain(theirs);
    expect(s.shop).not.toContain(theirs);
  });
});

describe('Thrift Hunters: "Whenever you recruit from the discard pile, +2 followers." (Cory, Nov 11 8:42pm)', async () => {
  const { spacesOf } = await import('../../../engine/v4/content/index.js');
  const { applyMove } = await import('../../../engine/v4/core.js');
  const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
  it('pays on a recruit off the discard pile (Recruit Twice)', () => {
    let s = table(['market', 'red', 'yellow', 'thieves'], { n: 2, round: 2, res: [{ blue: 20, red: 20 }], members: [['market.thrifthunters']] });
    const a = uidIn(s, 'red.seatfiller', 'pile');
    s = { ...s, pile: s.pile.filter(u => u !== a), discard: [...(s.discard || []), a] };
    const i = spacesOf(s, 'market').findIndex(x => x.name === 'Recruit Twice');
    expect(i).toBeGreaterThanOrEqual(0);
    const before = s.players[0].bonus;
    s = answer(s, `slot:${s.quadrants.indexOf('market')}-${i}`);
    while (s.pending && s.pending.player === 0 && !s.players[0].members.includes(a)) {
      const o = s.pending.options.find(x => x.value === a || x.id === `card:${a}`) || s.pending.options[0];
      s = answer(s, o.id);
      if (s.pending?.kind === 'buy') break;
    }
    expect(s.players[0].members).toContain(a);
    expect(s.log.join('\n')).toContain("P1's Thrift Hunters: Seat Filler from the discard pile, +2 followers.");
    expect(s.players[0].bonus - before).toBeGreaterThanOrEqual(2);
  });
});

describe('Repeat Customers: "On Recruit: +3 blue, then recruit from the discard pile." (Cory, Nov 11 8:49pm)', () => {
  it('prints his text', () => {
    expect(defById('market.repeatcustomers').text).toBe('On Recruit: +3 blue, then recruit from the discard pile.');
  });
  it('gives +3 blue, then offers the discard pile', () => {
    let s = table(Q, { n: 2, round: 2, res: [{ blue: 20, red: 20 }], shop: ['market.repeatcustomers'], queue: [{ t: 'buy', p: 0 }] });
    const rc = uidIn(s, 'market.repeatcustomers', 'shop');
    const a = uidIn(s, 'red.seatfiller', 'pile');
    s = { ...s, pile: s.pile.filter(u => u !== a), discard: [...(s.discard || []), a] };
    s = move(s, `card:${rc}`);
    while (s.pending && s.pending.kind !== 'choose' && !s.players[0].members.includes(rc)) s = move(s, s.pending.options[0].id);
    expect(s.players[0].members).toContain(rc);
    expect(s.log.join('\n')).toMatch(/Repeat Customers/);
    const ids = (s.pending?.options || []).map(o => o.id + ' ' + (o.value ?? ''));
    expect(ids.join('\n')).toContain(a);
  });
});
