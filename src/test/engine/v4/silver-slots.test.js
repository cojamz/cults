// @vitest-environment node
// Silver's three open slots (Cory, Nov 5: "I love ballroom!", "yes to kingmaker and ballroom", "yeah patron saints").
import { describe, it, expect } from 'vitest';
import { resume } from '../../../engine/v4/core.js';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';

const Q = ['silver', 'red', 'market', 'thieves'];
const atEnd = s => resume({ ...s, queue: [{ t: 'allPlaced' }], pending: null });

describe('Ballroom Dancers: "On Use, once per game: +2 followers per minion on Silver spaces."', () => {
  it("counts everyone's minions on Silver spaces, once a game", () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.ballroom']] });
    const qi = s.quadrants.indexOf('silver');
    s.slots = { [`${qi}-0`]: 0, [`${qi}-1`]: 1, [`${qi}-2`]: 2, [`${s.quadrants.indexOf('red')}-0`]: 1 };
    s.squats = { [`${qi}-0`]: [2] };
    const u = uidIn(s, 'silver.ballroom', 0), before = s.players[0].bonus;
    s = move(s, `use:${u}`);
    expect(s.players[0].bonus - before).toBe(8);
    expect(s.cards[u].used).toBe(true);
    expect(s.log).toContain("P1's Ballroom Dancers: 4 minions on Silver spaces: +8 followers.");
  });
  it('with no minion on a Silver space, nothing happens and it stays ready', () => {
    let s = table(Q, { n: 2, round: 2, members: [['silver.ballroom']] });
    const u = uidIn(s, 'silver.ballroom', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(false);
  });
});

describe('Kingmakers: "Round End: give rivals up to 3 of your silver, split as you choose. +1 follower per silver given." (Cory, Nov 9)', () => {
  const withSilver = (s, n) => ({ ...s, players: s.players.map((p, i) => (i === 0 ? { ...p, res: { ...p.res, silver: n } } : p)) });
  it('the owner gives their own silver one at a time, split as they choose; +1 follower each', () => {
    let s = withSilver(table(Q, { n: 3, round: 2, members: [['silver.kingmakers']], queue: [] }), 5);
    const before = s.players[0].bonus;
    s = atEnd(s);
    expect(s.pending.prompt).toBe('Kingmakers: give 1 of your silver to which rival? +1 follower (3 more at most)');
    s = move(s, 'player:2');
    s = move(s, 'player:1');
    s = move(s, 'player:2');
    expect(s.players[1].res.silver).toBe(1);
    expect(s.players[2].res.silver).toBe(2);
    expect(s.players[0].bonus - before).toBe(3);
  });
  it('gives no more silver than you have, and you may stop early', () => {
    let s = withSilver(table(Q, { n: 3, round: 2, members: [['silver.kingmakers']], queue: [] }), 1);
    const before = s.players[0].bonus;
    s = atEnd(s);
    s = move(s, 'player:1');
    expect(s.players[1].res.silver).toBe(1);
    expect(s.players[0].bonus - before).toBe(1);
    let t = withSilver(table(Q, { n: 3, round: 2, members: [['silver.kingmakers']], queue: [] }), 4);
    const b2 = t.players[0].bonus;
    t = atEnd(t);
    t = move(t, 'stop');
    expect(t.players[0].bonus - b2).toBe(0);
  });
  it('with no silver, nothing happens', () => {
    let s = table(Q, { n: 2, round: 2, members: [['silver.kingmakers']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(s);
    expect(s.players[1].res.silver || 0).toBe(0);
    expect(s.players[0].bonus - before).toBe(0);
  });
});

describe('Patron Saints: "Game End: +1 follower per silver member, anyone’s." (Cory, Nov 6: game end)', () => {
  it('counts every silver member at the table at game end, 1 each (High Society rebased to worth 1: Cory, Nov 12)', () => {
    let s = table(Q, { n: 3, round: 3, members: [['silver.patronsaints', 'silver.toastmaster'], ['silver.highsociety'], ['red.panel']], queue: [] });
    s = resume({ ...s, queue: [{ t: 'finish' }], pending: null });
    expect(s.players[0].final.parts).toContain('Patron Saints +3');
  });
  it('pays nothing at round end', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.patronsaints', 'silver.toastmaster'], ['silver.highsociety'], ['red.panel']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(s);
    expect(s.players[0].bonus - before).toBe(0);
  });
});
