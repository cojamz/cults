// @vitest-environment node
// Combo tester, Green's Nov 11 members: Mimics ("On Recruit: use the On Recruit of any member in play."), Regulars
// ("Round End: +1 follower per minion you have on Green spaces."), Die-Hards ("Game End: if you have the most green
// members, +6 followers."), played against the members that choose, steal, swap and count, and Green's copy spaces.
// Each scene checks the outcome against the printed text. Harness: combos-silver-nov12.test.js's scene/drive/go.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';
const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);

// queue: tasks to run instead of turns (e.g. [{ t: 'allPlaced' }] for Round End, [{ t: 'round', r: 3 }] for Round Start)
function scene({ quads, n = 2, seed = 7, round = 3, res = [], members = [], shop = [], turns = null, queue = null, left = 5, rules, prep }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: quads, ...(rules ? { rules } : {}) });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); Object.assign(p.res, res[i] || {}); p.bonus = 0; p.discount = 0; p.left = left; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  for (const d of shop) s.shop.push(grab(d));
  s.queue = queue ? queue.map(t => ({ ...t })) : (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
  if (prep) prep(s);
  return resume(s);
}
// steps: regexes on option label/id, consumed in order when one matches; a pay takes its default; anything else stops
function drive(s, steps, max = 80) {
  const trail = [];
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options, want = steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (hit) steps.shift();
    else if (s.pending.kind === 'pay') hit = o.find(x => x.default) || o[0];
    else { trail.push(`STOP @${s.pending.kind} P${s.pending.player + 1}: ${s.pending.prompt} :: ${o.map(x => `${x.id}=${x.label}`).join(' | ')}`); break; }
    trail.push(`> P${s.pending.player + 1} ${s.pending.kind}: ${hit.id} (${hit.label}) @ ${s.pending.prompt}`);
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return { s, trail };
}
const dump = (title, s, trail) => console.log(`\n===== ${title}\n${trail.join('\n')}\n--- log\n${s.log.join('\n')}\n--- ${s.players.map((p, i) => `${JSON.stringify(p.res)} f${followers(s, p)} b${p.bonus} m${names(s, i).join(',')} left${p.left}`).join(' / ')}`);
const has = (s, re) => s.log.some(l => re.test(l));
const DUMP = !!globalThis.process?.env?.COMBO_DUMP;
const go = (title, sc, steps) => { const r = drive(scene(sc), steps); if (DUMP) dump(title, r.s, r.trail); return r; };
const uidOf = (s, i, def) => s.players[i].members.find(u => s.cards[u].def === def);
// every log line reads as a sentence: no undefined, NaN, [object Object] or empty names
const cleanLog = s => { for (const l of s.log) expect(l).not.toMatch(/undefined|NaN|\[object|null|'s :|\(\)/); };
const mimicPrompt = s => (s.pending?.prompt || '').startsWith('Mimics:');
const mimicLabels = s => (mimicPrompt(s) ? s.pending.options.map(o => o.label) : []);

const Q = ['echo', 'red', 'yellow', 'thieves'];
const QS = ['echo', 'silver', 'red', 'thieves'];
const RICH = { green: 9, red: 9 };

describe('Mimics: "On Recruit: use the On Recruit of any member in play."', () => {
  // Die-Hards, not Regulars, since Copyist costs 7 (Cory, Nov 13: "Copyist can be more expensive")
  it("copies a rival's Exchange Students: swaps one of the Mimics owner's members for a same-cost rival member", () => {
    const { s } = go('mimics-exchange', { quads: Q, turns: [0], shop: ['echo.mimics'], members: [['echo.copyist'], ['yellow.exchangestudents', 'silver.bookies', 'echo.diehards']], res: [RICH] },
      [/Gather/, /Mimics/, /Exchange Students/, /Copyist ↔ P2: Die-Hards/]);
    expect(names(s, 0).sort()).toEqual(['Die-Hards', 'Mimics']);
    expect(names(s, 1).sort()).toEqual(['Bookies', 'Copyist', 'Exchange Students']);
    expect(has(s, /P1's Exchange Students: swaps Copyist for P2's Die-Hards/)).toBe(true);
    cleanLog(s);
  });

  it('Double Agent ("give this member to a rival") is not offered: Mimics is not the Double Agent card', () => {
    const { s } = go('mimics-doubleagent', { quads: Q, turns: [0], shop: ['echo.mimics'], members: [[], ['thieves.doubleagent', 'gold.banker']], res: [RICH] }, [/Gather/, /Mimics/]);
    expect(mimicLabels(s).some(l => /Double Agent/.test(l))).toBe(false);
    expect(mimicLabels(s)).toEqual([expect.stringMatching(/^P2's Banker/)]);
  });

  it("copies a rival's Hustlers: the Mimics owner's silver swaps with the rival they pick (3 players)", () => {
    const { s } = go('mimics-hustlers', { quads: QS, n: 3, turns: [0], shop: ['echo.mimics'], members: [[], ['silver.hustlers'], []],
      res: [RICH, { silver: 2 }, { silver: 9 }] }, [/Gather/, /Mimics/, /Hustlers/, /player:2/]);
    expect(s.players.map(p => p.res.silver)).toEqual([9, 2, 0]);
    expect(s.log).toContain("P1's Hustlers: swaps silver with P3 (0 for 9).");
    cleanLog(s);
  });

  it("copies a rival's Bookies: turns in the Mimics owner's silver, not the rival's", () => {
    const { s } = go('mimics-bookies', { quads: QS, turns: [0], shop: ['echo.mimics'], members: [[], ['silver.bookies']], res: [{ ...RICH, silver: 5 }, { silver: 3 }] },
      [/Gather/, /Mimics/, /Bookies/, /n:4/]);
    expect(s.players[0].res.silver).toBe(1);
    expect(s.players[1].res.silver).toBe(3);
    expect(s.log).toContain("P1's Bookies: turns in 4 silver, +8 followers.");
    cleanLog(s);
  });



  it('Headhunters (On Use) is not offered; with nothing else in play, one plain log line and no question', () => {
    const { s } = go('mimics-headhunters', { quads: Q, turns: [0], shop: ['echo.mimics'], members: [[], ['yellow.headhunters']], res: [RICH] }, [/Gather/, /Mimics/]);
    expect(mimicPrompt(s)).toBe(false);
    expect(s.log).toContain("P1's Mimics: no member in play has an On Recruit to use.");
  });

  it('another Mimics in play is not offered (no loop)', () => {
    const { s } = go('mimics-mimics', { quads: Q, turns: [0], shop: ['echo.mimics'], members: [['echo.mimics'], ['echo.mimics']], res: [RICH] }, [/Gather/, /Mimics/]);
    expect(mimicPrompt(s)).toBe(false);
    expect(s.log).toContain("P1's Mimics: no member in play has an On Recruit to use.");
  });

  // QUESTION (not fixed: needs core.js borrowOnRecruit, which runs card.def, never card.copy): a Doppelganger that became
  // a copy of Bookies has Bookies' On Recruit, so "any member in play" reads as offering it. Mimics leaves it out (the
  // Doppelganger's own text, "this member becomes a copy", is filtered), unlike Greatest Hits and Impersonator, which read
  // the copy. Fixing the list alone would run the Doppelganger's own On Recruit for the Mimics owner.
  it.fails('a Doppelganger copying a rival\'s Bookies is offered as Bookies', () => {
    const { s } = go('mimics-doppel', { quads: QS, turns: [0], shop: ['echo.mimics'], members: [[], ['silver.bookies', 'echo.doppel']], res: [{ ...RICH, silver: 2 }],
      prep: st => { st.cards[uidOf(st, 1, 'echo.doppel')].copy = 'silver.bookies'; } }, [/Gather/, /Mimics/]);
    expect(mimicLabels(s).length).toBe(2);
  });

  it('members in the shop or the pile are not in play: a face-up Banker is not offered', () => {
    const { s } = go('mimics-shop', { quads: Q, turns: [0], shop: ['echo.mimics', 'gold.banker'], members: [[], ['silver.bookies']], res: [RICH] }, [/Gather/, /Mimics/]);
    expect(mimicLabels(s)).toEqual([expect.stringMatching(/^P2's Bookies/)]);
  });

  it('recruited free with Initiation: its On Recruit fires', () => {
    const { s } = go('mimics-initiation', { quads: Q, turns: [0], shop: ['echo.mimics'], members: [[], ['gold.banker']], res: [{}] }, [/Initiation/, /Mimics/, /Banker/]);
    expect(names(s, 0)).toContain('Mimics');
    expect(s.players[0].res.gold).toBe(3);
  });

  it('log names whose member it copies and reads the possessive right', () => {
    const { s } = go('mimics-log', { quads: QS, turns: [0], shop: ['echo.mimics'], members: [[], ['silver.hustlers']], res: [RICH, { silver: 2 }] }, [/Gather/, /Mimics/, /Hustlers/, /player:1/]);
    expect(s.log).toContain("P1's Mimics uses P2's Hustlers' On Recruit.");
    cleanLog(s);
  });

  it('Encore ("your next On Recruit happens twice") then Mimics: two uses, each its own pick', () => {
    const { s, trail } = go('mimics-encore', { quads: QS, turns: [0], shop: ['echo.mimics'], members: [['echo.encore'], ['silver.bookies', 'gold.banker']], res: [{ ...RICH, silver: 4 }] },
      [/use:/, /Gather/, /Mimics/, /Banker/, /Banker/]);
    globalThis.__mimicsEncore = trail;
    expect(s.players[0].res.gold).toBe(6);
  });

  it("copies a rival's Fan Club: the rival with the most followers is read from the Mimics owner's side (P3, not P2)", () => {
    // P2 owns Fan Club (worth 3); P3 leads on followers and has a minion on Gather. Fixed Nov 12: was not offered.
    const { s } = go('mimics-fanclub', { quads: Q, n: 3, turns: [2, 0], shop: ['echo.mimics'], members: [[], ['echo.mirror'], []], res: [RICH],
      prep: st => { st.players[2].bonus = 20; } }, [/Build Up/, /^pass$/, /Gather/, /Mimics/, /Fan Club/]);
    expect(s.log).toContain("P1's Mimics uses P2's Fan Club's On Recruit.");
    expect(s.pending.prompt).toBe("Fan Club: copy which of P3's actions?");
    expect(s.pending.player).toBe(0);
    cleanLog(s);
  });

  it("copies a rival's Stunt Double: copies the action the Mimics owner just took (Build Up), not the rival's", () => {
    const { s } = go('mimics-stuntdouble', { quads: Q, turns: [0], shop: ['echo.mimics'], members: [[], ['echo.hourglass']], res: [{ green: 8 }],
      prep: st => { st.slots['1-0'] = 1; } }, [/Build Up/, /Mimics/, /Stunt Double/]); // P2 sits on Borrow
    expect(s.log).toContain("P1's Mimics uses P2's Stunt Double's On Recruit.");
    expect(s.log).toContain("P1's Stunt Double: P1 copied Build Up: +2 green.");
    expect(s.players[0].res.green).toBe(4); // 8 + 2 from Build Up, less 8 for Mimics, + 2 copied
    cleanLog(s);
  });
});

// Kidnapper scenes dropped: Kidnappers was reworked Nov 11 (Magenta thread); the Magenta combo pass covers it
describe('Mimics arriving other ways (a swap or steal brings a member in as your recruit: Cory, Nov 4; Kidnapper, Double Agent notes)', () => {
  it('swapped in with Exchange Students: its On Recruit fires for the new holder', () => {
    const { s } = go('mimics-swapped-in', { quads: Q, turns: [0], shop: ['yellow.exchangestudents'], members: [['silver.bookies'], ['echo.mimics', 'gold.banker']], res: [{ yellow: 9, red: 9 }] },
      [/Gather/, /Exchange Students/, /Bookies ↔ P2: Mimics/, /Banker/]);
    expect(names(s, 0).sort()).toEqual(['Exchange Students', 'Mimics']);
    expect(s.log).toContain("P1's Mimics uses P2's Banker's On Recruit.");
    expect(s.players[0].res.gold).toBe(3);
  });

});

describe('Regulars: "Round End: +1 follower per minion you have on Green spaces."', () => {
  const END = [{ t: 'allPlaced' }, { t: 'endRound' }];
  const reg = l => /Regulars/.test(l);
  // P1: two Green spaces taken, one joined on a rival's Green space, one on Red; P2 on a Green space too
  const board = st => { Object.assign(st.slots, { '0-0': 0, '0-1': 0, '0-3': 1, '1-0': 0, '0-4': 2 }); st.squats = { '0-3': [0] }; };
  it('4 players: taken and joined Green spaces both count (+3); a minion on Red does not; a rival\'s Regulars counts only theirs', () => {
    const { s } = go('regulars-4p', { quads: Q, n: 4, queue: END, members: [['echo.regulars'], ['echo.regulars'], [], ['echo.regulars']], prep: board }, []);
    const base = go('regulars-4p-base', { quads: Q, n: 4, queue: END, members: [[], [], [], []], prep: board }, []).s;
    expect(s.players.map((p, i) => p.bonus - base.players[i].bonus)).toEqual([3, 1, 0, 0]);
    expect(s.log).toContain("P1's Regulars: 3 minions on Green spaces: +3 followers.");
    expect(s.log).toContain("P2's Regulars: 1 minion on Green spaces: +1 follower.");
    expect(has(s, /P4's Regulars/)).toBe(false); // 0 minions: no line
    cleanLog(s);
  });

  it('Green not on the table: nothing, no line', () => {
    const { s } = go('regulars-nogreen', { quads: ['silver', 'red', 'yellow', 'thieves'], queue: END, members: [['echo.regulars']],
      prep: st => Object.assign(st.slots, { '0-0': 0, '1-0': 0, '2-0': 0, '3-0': 0 }) }, []);
    expect(s.log.some(reg)).toBe(false);
  });

  it('Reprise copying Build Up adds no minion: Build Up and Reprise are 2 minions, +2', () => {
    const { s, trail } = go('regulars-reprise', { quads: Q, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, ...END], members: [['echo.regulars']] },
      [/Build Up/, /^pass$/, /Reprise/, /Build Up/, /^pass$/]);
    expect(trail.join('\n')).not.toMatch(/STOP/);
    expect(s.log).toContain("P1's Regulars: 2 minions on Green spaces: +2 followers.");
  });

  it('Doppelganger copying Regulars: both cards pay', () => {
    const { s } = go('regulars-doppel', { quads: Q, queue: END, members: [['echo.regulars', 'echo.doppel']],
      prep: st => { st.cards[uidOf(st, 0, 'echo.doppel')].copy = 'echo.regulars'; Object.assign(st.slots, { '0-0': 0, '0-1': 0 }); } }, []);
    expect(s.log.filter(l => l === "P1's Regulars: 2 minions on Green spaces: +2 followers.").length).toBe(2);
  });
});

describe('Die-Hards: "Game End: if you have the most green members, +6 followers."', () => {
  const FIN = [{ t: 'finish' }];
  const part = (s, i) => s.players[i].final.parts.filter(x => /Die-Hards/.test(x));
  it('4 players, two Die-Hards owners tied for the most (2 each): both +6 (ties count, Claude\'s logged fill-in)', () => {
    const { s } = go('diehards-4p-tie', { quads: Q, n: 4, queue: FIN,
      members: [['echo.diehards', 'echo.copyist'], ['echo.regulars', 'red.intern'], ['echo.diehards', 'echo.groupie'], ['gold.banker']] }, []); // Groupie, not Encore: Encore counts as 3 since Nov 12
    expect([0, 1, 2, 3].map(i => part(s, i))).toEqual([['Die-Hards +6'], [], ['Die-Hards +6'], []]);
    cleanLog(s);
  });

  it('a rival with one more green member: +0 for both of yours', () => {
    const { s } = go('diehards-3p-lose', { quads: Q, n: 3, queue: FIN,
      members: [['echo.diehards', 'echo.copyist'], ['echo.regulars', 'echo.encore', 'echo.wallflower'], ['echo.diehards']] }, []);
    expect([0, 1, 2].map(i => part(s, i))).toEqual([[], [], []]);
  });

  it('2 players, rival holds no green: +6', () => {
    const { s } = go('diehards-2p', { quads: Q, queue: FIN, members: [['echo.diehards'], ['red.twins']] }, []);
    expect(part(s, 0)).toEqual(['Die-Hards +6']);
  });

  it('Dabblers ("Counts as 2 wild members.") counts as 2 green for its owner: beats 1 Die-Hards', () => {
    const { s } = go('diehards-dabblers', { quads: Q, queue: FIN, members: [['echo.diehards'], ['benders.dabblers']] }, []);
    expect(part(s, 0)).toEqual([]);
  });

  it('Fan Club, rebased to worth 1 and 1 green member (Cory, Nov 12): Die-Hards and Copyist beat it', () => {
    const { s } = go('diehards-fanclub', { quads: Q, queue: FIN, members: [['echo.diehards', 'echo.copyist'], ['echo.mirror']] }, []);
    expect(part(s, 0)).toEqual(['Die-Hards +6']);
  });

  it('Doppelganger copying Die-Hards: each card pays, +12', () => {
    const { s } = go('diehards-doppel', { quads: Q, queue: FIN, members: [['echo.diehards', 'echo.doppel'], ['echo.copyist']],
      prep: st => { st.cards[uidOf(st, 0, 'echo.doppel')].copy = 'echo.diehards'; } }, []);
    expect(part(s, 0)).toEqual(['Die-Hards +6', 'Die-Hards +6']);
  });

  it('Mimics copies Exchange Students to take a rival\'s Die-Hards: it scores for its new holder', () => {
    const { s } = go('diehards-mimics-exchange', { quads: Q, queue: [{ t: 'turn', p: 0 }, ...FIN], shop: ['echo.mimics'],
      members: [['echo.hourglass'], ['yellow.exchangestudents', 'echo.diehards', 'echo.copyist']], res: [RICH] },
      [/Gather/, /Mimics/, /Exchange Students/, /Stunt Double ↔ P2: Die-Hards/]);
    expect(names(s, 0).sort()).toEqual(['Die-Hards', 'Mimics']);
    expect(part(s, 0)).toEqual(['Die-Hards +6']); // 2 green (Mimics, Die-Hards) to P2's 2 (Stunt Double, Copyist): a tie
    expect(part(s, 1)).toEqual([]);
  });
});
