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

describe('Kingmakers: "Round End: give a rival 3 silver from the bank. +3 followers."', () => {
  it('the owner picks the rival, who gains 3 silver; the owner +3 followers', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.kingmakers']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(s);
    expect(s.pending.prompt).toBe('Kingmakers: which rival gains 3 silver? You get 3 followers');
    s = move(s, 'player:2');
    expect(s.players[2].res.silver).toBe(3);
    expect(s.players[1].res.silver || 0).toBe(0);
    expect(s.players[0].bonus - before).toBe(3);
  });
});

describe('Patron Saints: "Game End: +1 follower per silver member, anyone’s." (Cory, Nov 6: game end)', () => {
  it('counts every silver member at the table at game end, as many as each counts as (Patron Saints and High Society 2 each, Toastmaster 1)', () => {
    let s = table(Q, { n: 3, round: 3, members: [['silver.patronsaints', 'silver.toastmaster'], ['silver.highsociety'], ['red.panel']], queue: [] });
    s = resume({ ...s, queue: [{ t: 'finish' }], pending: null });
    expect(s.players[0].final.parts).toContain('Patron Saints +5');
  });
  it('pays nothing at round end', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.patronsaints', 'silver.toastmaster'], ['silver.highsociety'], ['red.panel']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(s);
    expect(s.players[0].bonus - before).toBe(0);
  });
});
