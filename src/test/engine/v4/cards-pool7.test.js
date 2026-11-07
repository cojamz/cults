// @vitest-environment node
// Idea pipeline pool 7 (Nov 7; scripts/ideas/README.md): bot-only candidates, never dealt in a real game. One test per
// sentence of each card's text, through real moves, with the log naming the card. Candidates are un-retired (members)
// or set into their color's wheel (spaces) for this file only, as scripts/lib/pool-rotate.mjs does in bot games.
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { quadrant, defById } from '../../../engine/v4/content/index.js';
import { POOL_SPACES } from '../../../engine/v4/content/pool.js';
import { resume, memberCount, contextFor } from '../../../engine/v4/core.js';
import { take, move, uidOf } from './helpers.js';
import { sceneQ, linesNaming, spaceOf } from './cards-helpers.js';

const MEMBERS = ['trading.daytrippers', 'trading.tourists', 'trading.ascetics', 'echo.costumers', 'echo.superfans', 'echo.packedhouse',
  'benders.saints', 'benders.bandits', 'benders.protesters'];
const SPACES = ['trading.lasthurrah', 'echo.stagedoor', 'echo.medley'];
const undo = [];
beforeAll(() => {
  for (const id of MEMBERS) { const d = defById(id); d.retired = false; undo.push(() => { d.retired = true; }); }
  for (const id of SPACES) {
    const [q] = id.split('.'), c = POOL_SPACES[q].find(a => a.id === id), acts = quadrant(q).actions;
    const i = acts.findIndex(a => a.ring === c.ring && !SPACES.includes(a.id));
    const old = acts[i]; acts[i] = c; undo.push(() => { acts[i] = old; });
  }
});
afterAll(() => { while (undo.length) undo.pop()(); });

const Q = ['trading', 'echo', 'gold', 'red'];
const RICH = { white: 20, green: 20, gold: 20, red: 20 };
const named = (s, name) => linesNaming(s.log, name);
const still = o => sceneQ({ quadrants: Q, ...o, queue: [] });
const go = (s, queue) => { s.queue = queue; return resume(s); };
const turn = (...ps) => ps.map(p => ({ t: 'turn', p }));
/** First face-up shop member with no On Recruit and no choice (a plain buy). */
const plainShop = s => s.shop.find(u => { const d = defById(s.cards[u].def); return !d.onRecruited && !d.now && !d.onJoined && !d.pool; });
const pass = s => (s.pending?.kind === 'buy' ? move(s, 'pass') : s);

describe('White candidates', () => {
  for (const [id, name, gain] of [['trading.daytrippers', 'Day Trippers', 'white'], ['trading.tourists', 'Backpackers', 'followers']]) {
    it(`${name}: whenever you recruit a member, you may discard it after its On Recruit, for +${gain === 'white' ? 3 : 2} ${gain}`, () => {
      let s = go(still({ members: [[id]], res: [RICH] }), turn(0, 1));
      s = take(s, 'echo.chant');
      const u = plainShop(s);
      s = move(s, `card:${u}`);
      expect(s.pending.prompt).toMatch(new RegExp(`^${name}: discard`));
      const white = s.players[0].res.white, bonus = s.players[0].bonus;
      s = move(s, `card:${u}`);
      expect(s.players[0].members).not.toContain(u);
      expect(s.discard).toContain(u);
      if (gain === 'white') expect(s.players[0].res.white - white).toBe(3); else expect(s.players[0].bonus - bonus).toBe(2);
      expect(named(s, name).some(l => /discards/.test(l))).toBe(true);
    });
    it(`${name}: "you may": keeping the member keeps it, and nothing is gained`, () => {
      let s = go(still({ members: [[id]], res: [RICH] }), turn(0, 1));
      s = take(s, 'echo.chant');
      const u = plainShop(s);
      s = move(s, `card:${u}`);
      const white = s.players[0].res.white;
      s = move(s, 'keep');
      expect(s.players[0].members).toContain(u);
      expect(s.players[0].res.white).toBe(white);
    });
  }
  it('Day Trippers: asks after the On Recruit (Con Men steals first, then the discard question)', () => {
    let s = go(still({ members: [['trading.daytrippers']], res: [RICH, { gold: 5 }], shop: ['benders.conmen'] }), turn(0, 1));
    s = take(s, 'echo.chant');
    s = move(s, `card:${uidOf(s, 'benders.conmen', 'shop')}`);
    // the steal's choices come before the discard question
    let guard = 0;
    while (!/^Day Trippers/.test(s.pending?.prompt || '') && guard++ < 10) s = move(s, s.pending.options[0].id);
    expect(s.pending.prompt).toMatch(/^Day Trippers: discard Con Men/);
    expect(s.log.findIndex(l => /stole|steals/.test(l))).toBeGreaterThanOrEqual(0);
  });
  it('Ascetics: your other members count as 0 members (contests and color counts)', () => {
    const s = still({ members: [['trading.ascetics', 'red.twins', 'gold.taxman', 'echo.muse']] });
    expect(memberCount(s, s.players[0])).toBe(1);
    expect(contextFor(s).countMembersOfColor(s.players[0], 'red')).toBe(0);
    const t = still({ members: [['red.twins', 'gold.taxman']] });
    expect(memberCount(t, t.players[0])).toBeGreaterThanOrEqual(2);
  });
  it('Last Hurrah: discard one of your members, using its On Use first, even if it\'s used up; +2 white', () => {
    let s = still({ members: [['gold.speculator', 'red.twins']], res: [{ gold: 3 }], round: 2 });
    const spec = uidOf(s, 'gold.speculator', 0);
    s.cards[spec].used = true;
    s = go(s, turn(0, 1));
    s = take(s, 'trading.lasthurrah');
    expect(s.players[0].res.white).toBe(2);
    s = move(s, `card:${spec}`);
    expect(s.players[0].res.gold).toBe(6); // Speculator doubled 3, though used up
    expect(s.players[0].members).not.toContain(spec);
    expect(s.discard).toContain(spec);
    expect(named(s, 'Last Hurrah').some(l => /discards Speculator/.test(l))).toBe(true);
  });
  it('Last Hurrah: a member with no On Use is just discarded; no members still gives +2 white', () => {
    let s = go(still({ members: [['red.twins']], round: 2 }), turn(0, 1));
    s = take(s, 'trading.lasthurrah');
    const u = uidOf(s, 'red.twins', 0);
    s = move(s, `card:${u}`);
    expect(s.players[0].members).toHaveLength(0);
    let e = go(still({ round: 2 }), turn(0, 1));
    e = take(e, 'trading.lasthurrah');
    expect(e.players[0].res.white).toBe(2);
    expect(named(e, 'Last Hurrah').some(l => /no member/.test(l))).toBe(true);
  });
});

describe('Green candidates', () => {
  it('Stage Door: moves one of your other minions to an open Green space and does that space\'s action; +1 green', () => {
    let s = go(still({ round: 2 }), turn(0, 1, 0));
    s = pass(take(s, 'gold.rush'));
    s = pass(take(s, 'Gather'));
    const gold = spaceOf(s, 'gold.rush'), build = spaceOf(s, 'echo.chant');
    s = take(s, 'echo.stagedoor');
    expect(s.players[0].res.green).toBe(1);
    expect(s.pending.prompt).toMatch(/^Stage Door: move one of your other minions/);
    expect(s.pending.options.every(o => s.quadrants[+o.value.split('-')[0]] === 'echo')).toBe(true);
    s = move(s, `to:${build}`);
    expect(s.slots[build]).toBe(0);
    expect(s.slots[gold]).toBeUndefined(); // open again for the rivals
    expect(s.players[0].res.green).toBe(1 + 4); // Build Up in round II
    expect(named(s, 'Stage Door').some(l => /moves a minion from/.test(l))).toBe(true);
  });
  it('Stage Door: never moves the Stage Door minion itself; with no other minion, just +1 green', () => {
    let s = go(still({ round: 2 }), turn(0, 1));
    s = take(s, 'echo.stagedoor');
    expect(s.players[0].res.green).toBe(1);
    expect(named(s, 'Stage Door').some(l => /no other minion/.test(l))).toBe(true);
  });
  it('Medley: choose a color, copy every action with a minion on its spaces; +1 green', () => {
    let s = go(still({ round: 3 }), turn(1, 1, 0));
    s = pass(take(s, 'gold.rush'));
    s = pass(take(s, 'echo.chant'));
    const gold = s.players[0].res.gold || 0;
    s = take(s, 'echo.medley');
    expect(s.players[0].res.green).toBe(1);
    expect(s.pending.prompt).toMatch(/^Medley: copy every action on which color/);
    s = move(s, 'color:echo');
    expect(s.players[0].res.green).toBe(1 + 5); // P2's Build Up in round III, copied
    expect(s.players[0].res.gold || 0).toBe(gold); // only the chosen color
    expect(named(s, 'Medley').some(l => /copies every action on Green/.test(l))).toBe(true);
  });
  it('Costumers: you also have each rival\'s cloak (P2\'s Red Cloak pays you on your recruits)', () => {
    let s = still({ rules: { artifacts: true }, members: [['echo.costumers']], res: [RICH] });
    s.players[1].artifact = s.artifacts.red;
    s = go(s, turn(0, 1));
    s = take(s, 'echo.chant');
    s = move(s, `card:${plainShop(s)}`);
    expect(named(s, 'Costumers').some(l => /wears P2's Red Cloak/.test(l))).toBe(true);
    expect(s.log.some(l => /P1's Red Cloak: \+1 red/.test(l))).toBe(true);
  });
  it('Costumers: without it, a rival\'s cloak never pays you', () => {
    let s = still({ rules: { artifacts: true }, res: [RICH] });
    s.players[1].artifact = s.artifacts.red;
    s = go(s, turn(0, 1));
    s = take(s, 'echo.chant');
    s = move(s, `card:${plainShop(s)}`);
    expect(s.log.some(l => /P1's Red Cloak/.test(l))).toBe(false);
  });
  it('Superfans: you can place on Green spaces rivals have taken (no use spent, every round)', () => {
    let s = go(still({ members: [['echo.superfans']] }), turn(1, 0, 0));
    s = pass(take(s, 'echo.chant'));
    const build = spaceOf(s, 'echo.chant');
    expect(s.pending.options.some(o => o.id === `squat:${build}`)).toBe(true);
    s = pass(move(s, `squat:${build}`));
    expect(s.squats[build]).toEqual([0]);
    expect(s.players[0].res.green).toBe(3);
    expect(named(s, 'Superfans')).toHaveLength(1);
    // a rival's non-Green space can't be joined
    let t = go(still({ members: [['echo.superfans']] }), turn(1, 0));
    t = pass(take(t, 'gold.rush'));
    expect(t.pending.options.some(o => o.squat)).toBe(false);
  });
  it('Packed House: at Round End, +1 follower per minion on Green spaces, anyone\'s', () => {
    let s = still({ members: [['echo.packedhouse']] });
    const g = s.quadrants.indexOf('echo');
    s.slots = { [`${g}-0`]: 1, [`${g}-1`]: 1, [`${g}-2`]: 0, '0-0': 0 };
    s = go(s, [{ t: 'allPlaced' }]);
    expect(s.players[0].bonus).toBe(3);
    expect(named(s, 'Packed House')[0]).toMatch(/3 minions on Green spaces/);
  });
});

describe('Grey candidates', () => {
  it('Saints: whenever this member joins your cult (a recruit or a move), +3 followers', () => {
    let s = go(still({ res: [RICH], shop: ['benders.saints'] }), turn(0, 1));
    s = take(s, 'echo.chant');
    const u = uidOf(s, 'benders.saints', 'shop');
    s = move(s, `card:${u}`);
    expect(s.players[0].bonus).toBe(3);
    const ctx = contextFor(s);
    ctx.moveMember(u, s.players[0], s.players[1]);
    expect(s.players[1].bonus).toBe(3);
    expect(named(s, 'Saints')).toHaveLength(2);
  });
  it('Bandits: whenever this member joins your cult, steal 3 resources', () => {
    let s = go(still({ res: [RICH, { gold: 6 }], shop: ['benders.bandits'] }), turn(0, 1));
    s = take(s, 'echo.chant');
    const before = Object.values(s.players[1].res).reduce((a, b) => a + b, 0);
    s = move(s, `card:${uidOf(s, 'benders.bandits', 'shop')}`);
    let guard = 0;
    while (s.pending && s.pending.player === 0 && s.pending.kind === 'choose' && guard++ < 10) s = move(s, s.pending.options[0].id);
    const after = Object.values(s.players[1].res).reduce((a, b) => a + b, 0);
    expect(before - after).toBe(3);
    expect(named(s, 'Bandits').length).toBeGreaterThan(0);
  });
  it('Protesters: On Use, once per round, from round II: put it on an open space; nobody can place there this round', () => {
    let s = go(still({ members: [['benders.protesters']], round: 2 }), turn(0, 1));
    const use = `use:${uidOf(s, 'benders.protesters', 0)}`;
    s = move(s, use);
    expect(s.pending.prompt).toMatch(/^Protesters: block which open space/);
    const build = spaceOf(s, 'echo.chant');
    s = move(s, `to:${build}`);
    expect(s.pending.options.some(o => o.id === `slot:${build}`)).toBe(false); // not for its owner either
    expect(s.pending.options.some(o => o.id === use)).toBe(false); // once per round
    s = pass(take(s, 'gold.rush'));
    expect(s.pending.player).toBe(1);
    expect(s.pending.options.some(o => o.id === `slot:${build}`)).toBe(false);
    expect(named(s, 'Protesters')[0]).toMatch(/nobody can place there this round/);
  });
  it('Protesters: not in round I', () => {
    let s = go(still({ members: [['benders.protesters']], round: 1 }), turn(0, 1));
    const use = `use:${uidOf(s, 'benders.protesters', 0)}`;
    if (s.pending.options.some(o => o.id === use)) {
      s = move(s, use);
      expect(s.protest).toBeUndefined();
      expect(s.pending.kind).toBe('place');
    }
  });
});
