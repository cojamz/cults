// @vitest-environment node
// Thread "Test the new members in play" (Nov 25): the new members against the cards they touch, through the real
// handlers. Each test names the pair and what a table would do.
import { describe, it, expect } from 'vitest';
import { contextFor } from '../../../engine/v4/core.js';
import { defById, quadrant } from '../../../engine/v4/content/index.js';
import { table, uidIn } from './cards-helpers-b.js';

const fixture = (quads, opts) => { const s = table(quads, opts); s.queue = []; s.pending = null; return s; };
const Q = ['silver', 'thieves', 'red', 'market'];

describe('Beggar ("Whenever a rival gives you silver, +1 follower") is once per gift', () => {
  it('Good Samaritans handing over 3 silver one at a time is one gift: +1, not +3', () => {
    const s = fixture(Q, { members: [['silver.kingmakers'], ['silver.beggar']] });
    const [p, o] = s.players, c = contextFor(s), h = quadrant('silver').handlers;
    p.res.silver = 3;
    const once = `kingmakers:${s.round}:${p.id}`;
    for (let k = 0; k < 3; k++) h.kingmakers(c, p, o.id, { once, left: 3 - k });
    expect(o.res.silver).toBe(3);
    expect(o.bonus).toBe(1);
  });
  it('a later gift is a new gift', () => {
    const s = fixture(Q, { members: [['silver.kingmakers'], ['silver.beggar']] });
    const [p, o] = s.players, c = contextFor(s), h = quadrant('silver').handlers;
    p.res.silver = 2;
    h.kingmakers(c, p, o.id, { once: 'a', left: 3 });
    h.kingmakers(c, p, o.id, { once: 'b', left: 3 });
    expect(o.bonus).toBe(2);
  });
});

describe('Tax Men ("they give you 2 resources of their choice") with Beggar', () => {
  it('a rival paying Tax Men in silver is a rival giving you silver: Beggar +1 for the 2', () => {
    const s = fixture(Q, { members: [['thieves.accomplice', 'silver.beggar'], []] });
    const [p, o] = s.players, c = contextFor(s), h = quadrant('thieves').handlers;
    o.res.silver = 4;
    h.taxGive(c, o, 'silver', { host: p.id, left: 2, what: 'Doorbusters' });
    // the second coin is asked as its own choice, carrying the same gift
    const next = s.queue.find(t => t.h === 'thieves.taxGive') || s.pending;
    const data = next?.data || s.queue[0]?.data;
    expect(data?.once).toBeTruthy();
    h.taxGive(c, o, 'silver', data);
    expect(p.res.silver).toBe(2);
    expect(p.bonus).toBe(1);
  });
  it('paying in another color pays Beggar nothing', () => {
    const s = fixture(Q, { members: [['thieves.accomplice', 'silver.beggar'], []] });
    const [p, o] = s.players, c = contextFor(s), h = quadrant('thieves').handlers;
    o.res.red = 2;
    h.taxGive(c, o, 'red', { host: p.id, left: 1, what: 'Doorbusters' });
    expect(p.res.red).toBe(1);
    expect(p.bonus).toBe(0);
  });
});

// ---- found in the Nov 25 bot games ----
import { applyMove } from '../../../engine/v4/core.js';
import { still, go } from './pool-helpers.js';
import { sceneQ } from './cards-helpers.js';

const turnsOf = (s, pid) => s.queue.filter(t => (t.t === 'turn' || t.t === 'place') && t.p === pid).length;
const pick = (s, re) => applyMove(s, { player: s.pending.player, option: (s.pending.options.find(o => re.test(`${o.id} ${o.label}`)) || s.pending.options[0]).id });

describe('Usher ("Round Start: choose your place in this round\'s turn order") with a minion gained at Round Start', () => {
  it('Journeyman recruits Mimics, Mimics uses Extra Hand: the extra minion stays its owner\'s after Usher reorders', () => {
    let s = still({ quadrants: ['red', 'echo', 'purple', 'silver'], n: 3, members: [['red.seatfiller', 'benders.extrahand'], ['purple.placekeepers']] });
    const k = s.pile.findIndex(u => s.cards[u].def === 'echo.mimics');
    s.pile.unshift(s.pile.splice(k, 1)[0]);
    s = go(s, [{ t: 'round', r: 2 }]);
    for (let g = 0; g < 20 && s.pending && s.pending.kind !== 'place'; g++) {
      if (/^Usher/.test(s.pending.prompt)) s = applyMove(s, { player: s.pending.player, option: s.pending.options.at(-1).id });
      else s = pick(s, /Mimics|Extra Hand/);
    }
    expect(s.log.some(l => /Extra Hand: P1 gets 1 more minion/.test(l))).toBe(true);
    expect(s.log.some(l => /Usher: P2 takes place/.test(l))).toBe(true);
    for (const p of s.players) expect(turnsOf(s, p.id), p.name).toBe(p.left);
  });
});

describe('Old Guard ("discard another of your members, using its On Use first") with a Doppelganger copying it', () => {
  it('the chain ends: each is discarded once, +2 white each, never a loop', () => {
    let s = sceneQ({ quadrants: ['trading', 'echo', 'red', 'silver'], n: 2, round: 2, rules: { testSet: true }, members: [['trading.oldguard', 'echo.doppel']] });
    const d = s.players[0].members.find(u => s.cards[u].def === 'echo.doppel');
    s.cards[d].copy = 'trading.oldguard';
    const og = s.players[0].members.find(u => s.cards[u].def === 'trading.oldguard');
    expect(s.pending.kind).toBe('place');
    s = applyMove(s, { player: 0, option: `use:${og}` });
    let n = 0;
    while (s.pending && /^Old Guard/.test(s.pending.prompt) && n++ < 10) s = applyMove(s, { player: 0, option: s.pending.options[0].id });
    expect(n).toBeLessThan(5);
    expect(s.players[0].members).toHaveLength(0);
    expect(s.players[0].res.white).toBe(4);
  });
});
