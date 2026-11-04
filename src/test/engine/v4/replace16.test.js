// @vitest-environment node
// Silver, more communal (Nov 4; /mnt/project-files/silver-communal/paper.md), the REPLACE16=1 bot-test switch: a test per
// sentence of each new card, the pitched turn, and the old cards retired. Switches are read when the engine loads.
import { describe, it, expect } from 'vitest';

process.env.REPLACE16 = '1';
const { contextFor } = await import('../../../engine/v4/core.js');
const { defById } = await import('../../../engine/v4/content/index.js');
const { move, take } = await import('./helpers.js');
const { sceneQ, linesNaming } = await import('./cards-helpers.js');
delete process.env.REPLACE16;

const sc = o => sceneQ({ quadrants: ['gold', 'red', 'silver', 'green'], ...o });
const pass = s => move(s, s.pending.options.find(o => o.kind === 'pass').id);
const buy = (s, re) => {
  s = move(s, s.pending.options.find(o => re.test(o.label || '')).id);
  if (s.pending?.prompt?.startsWith('Pay')) s = move(s, s.pending.options[0].id);
  return s;
};
const canBuy = (s, re) => s.pending.options.some(o => re.test(o.label || ''));

describe('REPLACE16: the switch', () => {
  it("keeps the old cards' prices, worth and count, and retires Toastmaster and Smooth Talkers", () => {
    const card = id => { const d = defById(id); return [d.s, d.w, d.f, d.n]; };
    expect(card('silver.tongues')).toEqual(card('silver.smoothtalker'));
    expect(defById('silver.socialites').text).toBe('Whenever a rival recruits paying silver, +1 follower.');
    expect(defById('silver.toastmaster').retired).toBe(true);
    expect(defById('silver.smoothtalker').retired).toBe(true);
    expect(defById('silver.highsociety').retired).toBeFalsy();
  });
});

describe('Silver Tongues: "Everyone\'s silver pays for any color. Whenever a rival pays for a member\'s color with silver, +1 follower."', () => {
  it("a rival's silver pays a red member's red part: they get it, you +1", () => {
    let s = sc({ n: 3, res: [{}, { silver: 3 }], members: [['silver.tongues']], shop: ['red.volunteer'], queue: [{ t: 'buy', p: 1 }] });
    expect(canBuy(s, /Volunteer/)).toBe(true);
    s = buy(s, /Volunteer/);
    expect(s.log).toContain('P2 recruited Volunteer (1 silver; Silver Tongues: silver paid for red).');
    expect(s.players[0].bonus).toBe(1);
    expect(linesNaming(s.log, 'Silver Tongues').some(l => /P1's Silver Tongues: \+1 follower \(P2 paid/.test(l))).toBe(true);
  });
  it('a rival paying red for the red part: nothing; your own silver also pays any color, for no follower', () => {
    let s = sc({ n: 3, res: [{}, { red: 3 }], members: [['silver.tongues']], shop: ['red.volunteer'], queue: [{ t: 'buy', p: 1 }] });
    s = buy(s, /Volunteer/);
    expect(s.players[0].bonus).toBe(0);
    let m = sc({ n: 3, res: [{ silver: 3 }], members: [['silver.tongues']], shop: ['red.volunteer'], queue: [{ t: 'buy', p: 0 }] });
    expect(canBuy(m, /Volunteer/)).toBe(true);
    m = buy(m, /Volunteer/);
    expect(m.log).toContain('P1 recruited Volunteer (1 silver; Silver Tongues: silver paid for red).');
    expect(m.players[0].bonus).toBe(0);
  });
  it('without Silver Tongues at the table, silver does not pay a red part', () => {
    const s = sc({ n: 3, res: [{}, { silver: 3 }], members: [['silver.caterer']], shop: ['red.volunteer'], queue: [{ t: 'buy', p: 1 }] });
    expect(canBuy(s, /Volunteer/)).toBe(false);
  });
  it('the pitched turn: you Toast (each rival +2), then Ben pays a red part with that silver: +1', () => {
    let s = sc({ n: 4, round: 2, members: [['silver.tongues']], shop: ['red.volunteer'], queue: [{ t: 'turn', p: 0 }, { t: 'buy', p: 1 }] });
    s = take(s, 'silver.toast');
    if (s.pending?.player === 0) s = pass(s);
    expect(s.players[1].res.silver).toBe(2);
    s = buy(s, /Volunteer/);
    expect(s.players[0].bonus).toBe(1);
  });
});

describe('Socialites in Toastmaster\'s place: "Whenever a rival recruits paying silver, +1 follower."', () => {
  it('a rival recruits paying silver: +1', () => {
    let s = sc({ n: 3, res: [{}, { silver: 5 }], members: [['silver.socialites']], queue: [{ t: 'buy', p: 1 }] });
    s = move(s, s.pending.options.find(o => o.kind === 'tier' && /1/.test(o.label || o.id)).id);
    if (s.pending?.player === 1 && s.pending.kind === 'choose') s = move(s, s.pending.options[0].id);
    expect(s.players[0].bonus).toBe(1);
  });
});
