// @vitest-environment node
// Combo tester (Nov 11, Cory: "combo tester"): the spaces and members changed Nov 11 (Late Shift, Offering, Write-Off,
// Buyout, Modest Means, Agents' owner-included reading) played against the members that move, copy and count members.
// Each scene checks the outcome against the printed text.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';
const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);

function scene({ quads, n = 2, seed = 7, round = 3, res = [], members = [], shop = [], turns = null, left = 5, rules }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: quads, ...(rules ? { rules } : {}) });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); Object.assign(p.res, res[i] || {}); p.bonus = 0; p.discount = 0; p.left = left; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  for (const d of shop) s.shop.push(grab(d));
  s.queue = (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
  return resume(s);
}
// steps: regexes on option label/id, consumed in order when one matches; a pay takes its default; anything else stops
function drive(s, steps, max = 60) {
  const trail = [];
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options, want = steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (hit) steps.shift();
    else if (s.pending.kind === 'pay') hit = o.find(x => x.default) || o[0];
    else { trail.push(`STOP @${s.pending.kind} P${s.pending.player + 1}: ${s.pending.prompt} :: ${o.map(x => `${x.id}=${x.label}`).join(' | ')}`); break; }
    trail.push(`> P${s.pending.player + 1} ${s.pending.kind}: ${hit.id} (${hit.label})`);
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return { s, trail };
}
const dump = (title, s, trail) => console.log(`\n===== ${title}\n${trail.join('\n')}\n--- log\n${s.log.join('\n')}\n--- ${s.players.map((p, i) => `${JSON.stringify(p.res)} f${followers(s, p)} m${names(s, i).join(',')} left${p.left}`).join(' / ')}`);
const has = (s, re) => s.log.some(l => re.test(l));
const DUMP = !!globalThis.process?.env?.COMBO_DUMP;
const go = (title, sc, steps) => { const r = drive(scene(sc), steps); if (DUMP) dump(title, r.s, r.trail); return r; };

describe('combo tester (Nov 11 spaces and members)', () => {
  it('Late Shift copied by Reprise: the copier counts their own minions placed', () => {
    const { s } = go('lateshift-reprise', { quads: ['red', 'echo', 'yellow', 'trading'], turns: [0, 1, 0, 1], shop: ['red.clan'], res: [{}, {}] },
      [/Gather/, /pass|nothing|Nothing/, /Late Shift/, /pass|nothing|Nothing/, /Reprise/, /Late Shift/]);
    expect(s.pending.prompt).toMatch(/Reprise: copy which of your spaces/); // Late Shift is P2's, so only Gather is P1's to copy
  });

  it('Offering with Dabblers: each rival discards 2 of every table color', () => {
    const { s } = go('offering-dabblers', { quads: ['red', 'echo', 'yellow', 'trading'], n: 3, turns: [0, 1, 2], members: [['benders.dabblers']],
      res: [{}, { red: 5, green: 5, yellow: 5, white: 5 }, { red: 1, yellow: 3 }] }, [/Offering/]);
    expect(s.players[1].res).toMatchObject({ red: 3, green: 3, yellow: 3, white: 3 });
    expect(s.players[2].res).toMatchObject({ red: 0, yellow: 1 });
  });

  it('Agents stops its owner copying their own Late Shift with Reprise', () => {
    const { s } = go('agents-own', { quads: ['red', 'echo', 'yellow', 'trading'], turns: [0, 1, 0, 1], members: [['echo.agents']] },
      [/Late Shift/, /pass|nothing|Nothing/, /Gather/, /pass|nothing|Nothing/, /Reprise/]);
    expect(s.log).toContain("P1 had nothing to copy (P1's Agents prevents copying Late Shift).");
  });

  it('Write-Off gives Agents to a Green player: their own copies stop', () => {
    const { s } = go('writeoff-agents', { quads: ['red', 'echo', 'yellow', 'trading'], turns: [0, 1, 0, 1, 0, 1], members: [['echo.agents']] },
      [/Write-Off/, /Agents/, /P2/, /pass|nothing|Nothing/, /Gather/, /pass|nothing|Nothing/]);
    expect(names(s, 1)).toContain('Agents');
    expect(s.players[0].res.white).toBeGreaterThanOrEqual(5);
  });

  it('Write-Off gives a member to a Grudge Holders owner\'s rival: a gift is not a take', () => {
    const { s } = go('writeoff-grudge', { quads: ['red', 'echo', 'yellow', 'trading'], turns: [0, 1], members: [['thieves.grudgeholders', 'red.clan'], []], res: [{}, { red: 6 }] },
      [/Write-Off/, /Clan/, /P2/]);
    expect(has(s, /Grudge Holders/)).toBe(false);
  });

  it('Write-Off of Martyrs: given, not discarded, so no Martyrs payout', () => {
    const { s } = go('writeoff-martyrs', { quads: ['red', 'echo', 'yellow', 'trading'], turns: [0, 1], members: [['trading.martyr']] }, [/Write-Off/, /Martyrs/, /P2/]);
    expect(has(s, /Martyrs:/)).toBe(false);
  });

  it('Buyout of Bodyguards\' owner: a purchase, not a steal', () => {
    const { s } = go('buyout-bodyguards', { quads: ['red', 'echo', 'silver', 'trading'], turns: [0, 1], members: [[], ['thieves.watchdog', 'red.clan']], res: [{ silver: 12 }] },
      [/Buyout/, /Clan/]);
    expect(names(s, 0)).toContain('Clan');
  });

  // Bug, Nov 12 (Cory asked how a twice-done On Recruit works with copiers): a Doppelganger bought with Buyout became
  // a copy of the buyer's member but skipped its On Recruit, since the seller's copy had used its once-a-round stamp
  it('Buyout of a Doppelganger: it copies one of yours and does that On Recruit for you', () => {
    // P2 recruits the Doppelganger this round (it copies Clan), then P1 buys it
    const first = drive(scene({ quads: ['red', 'echo', 'silver', 'trading'], turns: [1, 0], shop: ['echo.doppel'], members: [['echo.evergreen'], ['red.clan']], res: [{ silver: 12 }, { green: 9 }] }),
      [/Gather|Build Up/, /Doppelganger/, /Clan/]).s;
    const d = first.players[1].members.find(u => first.cards[u].def === 'echo.doppel');
    expect(first.cards[d].copy).toBe('red.clan');
    const green = first.players[0].res.green || 0;
    const { s } = drive(first, [/Buyout/, /Doppelganger/, /Busker/]);
    expect(s.players[0].members).toContain(d);
    expect(s.cards[d].copy).toBe('echo.evergreen');
    expect(s.players[0].res.green - green).toBe(2); // Busker's On Recruit, for the buyer
  });

  it('Modest Means counts Buskers and Dabblers as two members each', () => {
    const { s } = go('modest-buskers', { quads: ['red', 'echo', 'yellow', 'trading'], n: 3, turns: [0, 1, 2], members: [['red.clan'], ['echo.songrequest'], ['benders.dabblers']] }, [/Modest Means/]);
    expect(s.players[0].res.white).toBeGreaterThanOrEqual(4); // +2, +1 per rival with more members (both count 2 > 1)
  });

  it('Late Shift as a 4th minion in round III: up to 8, so an 8 is free and a 9 is not', () => {
    const { s } = go('lateshift-fourth', { quads: ['red', 'echo', 'purple', 'trading'], turns: [0, 0, 0, 0, 1], shop: ['red.recruiter', 'red.panel'] },
      [/Gather/, /^pass$/, /Build Up/, /^pass$/, /Nest Egg/, /^pass$/, /Late Shift/]);
    const ids = s.pending.options.map(o => o.label).join(' | ');
    expect(ids).toMatch(/Recruiter/);
    expect(ids).not.toMatch(/Panel/);
  });
});

describe('combo tester, copies and member movement (Nov 11)', () => {
  const Q = ['red', 'echo', 'yellow', 'trading'];
  it('Cover copies Offering with Wallflower: copier +10 yellow, discards by the copier\'s member colors, the Offering player hit too', () => {
    const { s } = go('cover-offering-wallflower', { quads: Q, turns: [0, 1], members: [['yellow.gardener'], ['red.clan', 'echo.wallflower']],
      res: [{ red: 4, green: 4, yellow: 4 }, {}] }, [/Offering/, /^pass$/, /Cover/, /Offering/]);
    expect(s.players[1].res.yellow).toBe(10); // +5 doubled by Wallflower
    expect(s.log).toContain("P2's Offering: P1 discards 2 red, 2 green."); // Clan red, Wallflower green
    expect(s.players[0].res).toMatchObject({ red: 2, green: 2, yellow: 9 });
  });
  it('Greatest Hits on Yellow in round III copies Offering', () => {
    const { s } = go('medley-offering', { quads: Q, n: 3, turns: [0, 1, 2], members: [['yellow.gardener'], ['red.clan'], ['echo.wallflower']],
      res: [{ red: 4, green: 4, yellow: 4 }, { red: 4, green: 4, yellow: 4 }, {}] }, [/Offering/, /^pass$/, /Melting Pot/, /^pass$/, /Greatest Hits/, /Yellow|yellow/]);
    expect(s.log).toContain("P3's Offering: P1 discards 2 green.");
    expect(s.log).toContain("P3's Offering: P2 discards 2 green.");
  });
  it('Buskers against Agents: no copy of the Agents owner\'s action', () => {
    const { s } = go('buskers-agents', { quads: Q, turns: [0, 1], members: [['echo.agents'], ['echo.songrequest']] }, [/Gather/, /^pass$/, /Late Shift/, /use:/]);
    expect(s.log).toContain("P2's Buskers: no rival action to copy (P1's Agents prevents copying Gather).");
  });
  it('Buyout of Double Agent: its On Recruit fires for the buyer', () => {
    const { s } = go('buyout-doubleagent', { quads: ['red', 'echo', 'silver', 'trading'], n: 3, turns: [0, 1, 2], members: [[], ['thieves.doubleagent', 'red.bigfamily'], ['echo.wallflower']], res: [{ silver: 10 }] },
      [/Buyout/, /Double Agent/, /Big Family/]); // costing up to 8 since Nov 11 (Clan costs 10)
    expect(names(s, 0)).toEqual(['Big Family']);
    expect(names(s, 1)).toEqual(['Double Agent']);
    expect(s.players[1].res.silver).toBe(10);
  });
  it('Buyout of a used Encore stays used', () => {
    let st = scene({ quads: ['red', 'echo', 'silver', 'trading'], turns: [0, 1], members: [[], ['echo.encore']], res: [{ silver: 10 }] });
    st.players[1].members.forEach(u => { st.cards[u].used = true; });
    const r = drive(st, [/Buyout/, /Encore/]);
    if (DUMP) dump('buyout-used-encore', r.s, r.trail);
    expect(r.s.pending.options.some(o => /use:/.test(o.id))).toBe(false);
  });
  it('Cover copies Late Shift with Wallflower: still one free member', () => {
    const { s } = go('cover-lateshift', { quads: Q, turns: [0, 1, 0, 1], members: [[], ['echo.wallflower']], shop: ['red.volunteer', 'red.intern', 'red.reserve'] },
      [/Gather/, /^pass$/, /Build Up/, /^pass$/, /Late Shift/, /Volunteer/, /^pass$/, /Cover/, /Late Shift/, /Intern/]);
    expect(names(s, 1)).toEqual(['Wallflower', 'Intern']); // 2 minions placed: up to 4
    expect(s.log).toContain("P2's Cover: +2 red.");
  });
  it('Write-Off to a rival, then that rival writes it back off: white each way', () => {
    const { s } = go('writeoff-pingpong', { quads: Q, turns: [0, 1, 0, 1], members: [['red.clan'], []] },
      [/Write-Off/, /Clan/, /P2/, /^pass$/, /Farewell/, /Clan/]);
    expect(s.players[0].res.white).toBe(11);
    expect(followers(s, s.players[1])).toBe(11);
  });
});
