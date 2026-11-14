// @vitest-environment node
// Silver's new members (Cory, Nov 11 7:33pm and 7:38pm Eastern): Paupers and Loan Officers.
import { describe, it, expect } from 'vitest';
import { resume } from '../../../engine/v4/core.js';
import { table, uidIn } from './cards-helpers-b.js';
import { move } from './helpers.js';

const Q = ['silver', 'red', 'market', 'thieves'];
const atEnd = s => resume({ ...s, queue: [{ t: 'allPlaced' }], pending: null });
const withRes = (s, i, res) => ({ ...s, players: s.players.map((p, k) => (k === i ? { ...p, res: { ...p.res, ...res } } : p)) });

describe('Paupers: "Round End: if you hold no silver, +3 followers."', () => {
  it('pays 3 at round end with no silver', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.paupers']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(withRes(s, 0, { silver: 0 }));
    expect(s.players[0].bonus - before).toBe(3);
    expect(s.log).toContain("P1's Paupers: no silver, +3 followers.");
  });
  it('pays nothing while you hold silver', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.paupers']], queue: [] });
    const before = s.players[0].bonus;
    s = atEnd(withRes(s, 0, { silver: 1 }));
    expect(s.players[0].bonus - before).toBe(0);
  });
});

describe('Loan Officers: "On Use, once per round: swap up to 5 of your silver for rivals’ resources, one for one." (Cory, Nov 11 8:00pm)', () => {
  it('each swap gives a rival 1 of your silver for 1 of their resources, from any rivals, up to 5', () => {
    let s = table(Q, { n: 3, round: 2, members: [['silver.loanofficers']] });
    s = withRes(withRes(withRes(s, 0, { silver: 9, red: 0, magenta: 0 }), 1, { silver: 0, red: 4 }), 2, { silver: 0, magenta: 4 });
    const u = uidIn(s, 'silver.loanofficers', 0);
    s = move(s, `use:${u}`);
    for (const id of ['swap:1:red', 'swap:1:red', 'swap:2:magenta', 'swap:1:red', 'swap:2:magenta']) s = move(s, id);
    expect(s.players[0].res.silver).toBe(4);
    expect(s.players[0].res.red).toBe(3);
    expect(s.players[0].res.magenta).toBe(2);
    expect(s.players[1].res.silver).toBe(3);
    expect(s.players[2].res.silver).toBe(2);
    expect(s.pending?.prompt || '').not.toContain('Loan Officers');
    expect(s.cards[u].used).toBe(true);
  });
  it('you may stop early, and never swap more silver than you have', () => {
    let s = table(Q, { n: 2, round: 2, members: [['silver.loanofficers']] });
    s = withRes(withRes(s, 0, { silver: 2 }), 1, { silver: 0, red: 5 });
    const u = uidIn(s, 'silver.loanofficers', 0);
    s = move(s, `use:${u}`);
    s = move(s, 'swap:1:red');
    s = move(s, 'swap:1:red');
    expect(s.players[0].res.silver).toBe(0);
    expect(s.pending?.prompt || '').not.toContain('Loan Officers');
    let t = table(Q, { n: 2, round: 2, members: [['silver.loanofficers']] });
    t = withRes(withRes(t, 0, { silver: 5 }), 1, { silver: 0, red: 5 });
    t = move(t, `use:${uidIn(t, 'silver.loanofficers', 0)}`);
    t = move(t, 'swap:1:red');
    t = move(t, 'done');
    expect(t.players[0].res.silver).toBe(4);
  });
  it('with no silver, nothing happens and it stays ready', () => {
    let s = table(Q, { n: 2, round: 2, members: [['silver.loanofficers']] });
    s = withRes(s, 0, { silver: 0 });
    const u = uidIn(s, 'silver.loanofficers', 0);
    s = move(s, `use:${u}`);
    expect(s.cards[u].used).toBe(false);
  });
});

describe('Bookies: "On Recruit: turn in up to 4 silver for 2 followers each." (Cory, Nov 11 8:00pm)', async () => {
  const { applyMove } = await import('../../../engine/v4/core.js');
  const { quadrant } = await import('../../../engine/v4/content/index.js');
  const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
  const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
  it('on recruit, turns in up to 4 silver for 2 followers each', () => {
    let s = table(['red', 'silver'], { n: 2, round: 2, res: [{ red: 0, silver: 20 }], members: [[]], shop: ['silver.bookies'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    while (s.pending && s.pending.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    s = answer(s, `card:${uidIn(s, 'silver.bookies', 'shop')}`);
    while (s.pending && s.pending.player === 0 && !String(s.pending.prompt).startsWith('Bookies')) s = answer(s, s.pending.options[0].id);
    expect(s.pending.options.map(o => o.id)).toEqual(['n:4', 'n:3', 'n:2', 'n:1', 'n:0']);
    const silver = s.players[0].res.silver, before = s.players[0].bonus;
    s = answer(s, 'n:3');
    expect(s.players[0].res.silver).toBe(silver - 3);
    expect(s.players[0].bonus - before).toBe(6);
  });
});

describe('Splurgers and Toll Collectors (Cory, Nov 11 7:47pm and 7:48pm)', async () => {
  const { applyMove } = await import('../../../engine/v4/core.js');
  const { quadrant } = await import('../../../engine/v4/content/index.js');
  const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
  const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
  const payAll = s => { while (s.pending && s.pending.kind !== 'buy' && s.pending.player === 0 && s.pending.kind !== 'place') s = answer(s, s.pending.options[0].id); return s; };
  const gather = s => answer(s, `slot:${slot(s, 'red', 'Gather')}`);
  it('Splurgers: after recruiting a silver member, the owner may also buy followers', () => {
    let s = table(['red', 'silver'], { n: 2, round: 2, res: [{ red: 9, silver: 9 }], members: [['silver.splurgers']], shop: ['silver.kingmakers', 'red.recruiter'] });
    s = gather(s);
    while (s.pending && s.pending.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    s = payAll(answer(s, `card:${uidIn(s, 'silver.kingmakers', 'shop')}`));
    expect(s.pending.prompt).toContain('recruit followers again (Splurgers)');
    expect([...new Set(s.pending.options.map(o => o.kind))].sort()).toEqual(['pass', 'tier']);
  });
  it('Splurgers: a member of another color brings no extra followers buy', () => {
    let s = table(['red', 'silver'], { n: 2, round: 2, res: [{ red: 9, silver: 9 }], members: [['silver.splurgers']], shop: ['silver.kingmakers', 'red.recruiter'] });
    s = gather(s);
    while (s.pending && s.pending.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    s = payAll(answer(s, `card:${uidIn(s, 'red.recruiter', 'shop')}`));
    expect(String(s.pending?.prompt || '')).not.toContain('Splurgers');
  });
  it('Toll Collectors: +1 follower when any player buys followers paying silver; not without silver', () => {
    let s = table(['red', 'silver'], { n: 2, round: 2, res: [{ red: 0, silver: 9 }, { red: 9, silver: 0 }], members: [['silver.tollcollectors']] });
    s = gather(s);
    while (s.pending && s.pending.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    // paid with red only: nothing
    let before = s.players[0].bonus;
    let t = payAll(answer(s, 'tier:small'));
    expect(t.players[0].bonus - before).toBe(1);
    // holding only silver: the buy pays silver, +1 Toll Collectors
    s = { ...s, players: s.players.map((p, i) => (i === 0 ? { ...p, res: { ...p.res, red: 0 } } : p)) };
    before = s.players[0].bonus;
    s = payAll(answer(s, 'tier:small'));
    expect(s.players[0].bonus - before).toBe(2);
    expect(s.log.join('\n')).toContain("P1's Toll Collectors: P1 paid silver for followers, +1 follower.");
  });
});

describe('Hustlers: "On Recruit: swap all your silver with a rival’s." (Cory, Nov 11 8:17pm)', async () => {
  const { applyMove } = await import('../../../engine/v4/core.js');
  const { quadrant } = await import('../../../engine/v4/content/index.js');
  const answer = (s, id) => applyMove(s, { player: s.pending.player, option: id });
  const slot = (s, q, name) => `${s.quadrants.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.name === name)}`;
  it('on recruit, your silver and the chosen rival’s change places', () => {
    let s = table(['red', 'silver'], { n: 3, round: 2, res: [{ red: 20, silver: 5 }, { silver: 9 }, { silver: 4 }], members: [[]], shop: ['silver.hustlers'] });
    s = answer(s, `slot:${slot(s, 'red', 'Gather')}`);
    while (s.pending && s.pending.player === 0 && s.pending.kind !== 'buy') s = answer(s, s.pending.options[0].id);
    s = answer(s, `card:${uidIn(s, 'silver.hustlers', 'shop')}`);
    while (s.pending && s.pending.player === 0 && !String(s.pending.prompt).startsWith('Hustlers')) s = answer(s, s.pending.options[0].id);
    const mine = s.players[0].res.silver;
    s = answer(s, 'player:1');
    expect(s.players[0].res.silver).toBe(9);
    expect(s.players[1].res.silver).toBe(mine);
  });
});
