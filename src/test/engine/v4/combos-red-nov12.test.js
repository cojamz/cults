// @vitest-environment node
// Combo tester, Red's Nov 11 members (Cory, Nov 11 9:14pm; built 9:50pm): Brethren ("Whenever you recruit a member of a
// color you already have, +1 follower.") and Purists ("Round End: if your members have 2 or fewer colors, +3
// followers."), played against grey and every-color members, swaps, gifts, free and discard-pile recruits, copies and
// the other Round End members. Each scene checks the outcome against the printed text and the logged calls
// (design/decisions.md, Nov 11 9:50pm: "a color you already have" reads as Gather does, grey counts, not its own
// arrival; grey has no color for Purists, Dabblers never counts against its owner). Harness: combos-magenta-nov12's.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';
const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);
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
const DUMP = !!globalThis.process?.env?.COMBO_DUMP;
const go = (title, sc, steps) => { const r = drive(scene(sc), steps); if (DUMP) dump(title, r.s, r.trail); return r; };
const has = (s, re) => s.log.some(l => re.test(l));
const lines = (s, re) => s.log.filter(l => re.test(l));
const bonusOf = (s, i) => s.players[i].bonus;
const cleanLog = s => { for (const l of s.log) expect(l).not.toMatch(/undefined|NaN|\[object|null|'s :|\(\)/); };
// put members on the discard pile (the last one ends on top), from the deck or made up
const disc = (...defs) => st => {
  for (const d of defs) {
    const k = st.pile.findIndex(u => st.cards[u].def === d);
    const u = k < 0 ? stray(st, d) : st.pile.splice(k, 1)[0];
    (st.discard ||= []).push(u);
  }
};

const QR = ['market', 'thieves', 'red', 'yellow'];
const QE = ['market', 'echo', 'red', 'yellow'];
const BUY = [{ t: 'buy', p: 0 }];
const END = [{ t: 'allPlaced' }, { t: 'endRound' }];
const RICH = { red: 30, magenta: 30, blue: 30, yellow: 30, green: 30 };
const B = 'Brethren';
const P = 'Purists';

describe('Brethren: "Whenever you recruit a member of a color you already have, +1 follower."', () => {
  it('prints his text', () => {
    expect(defById('red.brethren').text).toBe('Whenever you recruit a member of a color you already have, +1 follower.');
    expect(defById('red.purists').text).toBe('Round End: if your members have 2 or fewer colors, +3 followers.');
  });

  it('recruiting Brethren itself while holding a red member: no follower (its own arrival is not "whenever you recruit" for it)', () => {
    const { s } = go('br-self', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['red.brethren'], members: [['red.twins']] }, [/Brethren/, /pay:/]);
    expect(names(s, 0)).toEqual(['Triplets', 'Brethren']);
    expect(has(s, /Brethren:/)).toBe(false);
    expect(bonusOf(s, 0)).toBe(0);
    cleanLog(s);
  });

  it('Brethren alone, then a red member: +1 (Brethren is red, so red is a color you already have)', () => {
    const { s } = go('br-red', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['red.twins'], members: [['red.brethren']] }, [/Triplets/, /pay:/]);
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Triplets is a color they already have: +1 follower."]);
    expect(bonusOf(s, 0)).toBe(1);
    cleanLog(s);
  });

  it('a new color (magenta Snitch): nothing; buying followers: nothing', () => {
    const { s } = go('br-new', { quads: QR, round: 2, queue: [...BUY, ...BUY], res: [RICH], shop: ['thieves.snitch'], members: [['red.brethren']] }, [/Snitch/, /pay:/, /tier:small/, /pay:/]);
    expect(names(s, 0)).toEqual(['Brethren', 'Snitch']);
    expect(has(s, /Brethren:/)).toBe(false);
    expect(bonusOf(s, 0)).toBe(1); // the 1 bought follower only
  });

  it("a rival's recruit of a color the Brethren owner has pays nothing", () => {
    const { s } = go('br-rival', { quads: QR, round: 2, queue: [{ t: 'buy', p: 1 }], res: [{}, RICH], shop: ['red.twins'], members: [['red.brethren'], ['red.intern']] }, [/Triplets/, /pay:/]);
    expect(names(s, 1)).toEqual(['Intern', 'Triplets']);
    expect(has(s, /Brethren:/)).toBe(false);
    expect([bonusOf(s, 0), bonusOf(s, 1)]).toEqual([0, 0]);
  });

  it('grey counts as a color (logged Nov 11): holding Tiebreaker, a second grey member (Scouts) pays +1', () => {
    const { s } = go('br-grey', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['benders.scout'], members: [['red.brethren', 'benders.tiebreaker']] }, [/Scouts/, /pay:/]);
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Scouts is a color they already have: +1 follower."]);
    expect(bonusOf(s, 0)).toBe(1);
    cleanLog(s);
  });

  it('a first grey member with no grey held: nothing', () => {
    const { s } = go('br-grey1', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['benders.scout'], members: [['red.brethren']] }, [/Scouts/, /pay:/]);
    expect(has(s, /Brethren:/)).toBe(false);
  });

  // OPEN QUESTION: Dabblers ("Counts as 2 wild members.") is red too, and Brethren's owner already has red; the code reads
  // it as Gather does (a wild member is "new" while any color is missing), so no follower. Cory's Nov 1 "Dabblers always
  // works in the owner's favor" would pay +1. Asserts what the code does now.
  it('recruiting Dabblers while holding red: nothing today (open question: "works in the owner\'s favor" would pay +1)', () => {
    const { s } = go('br-dabblers-in', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['benders.dabblers'], members: [['red.brethren']] }, [/Dabblers/, /pay:/]);
    expect(names(s, 0)).toEqual(['Brethren', 'Dabblers']);
    expect(has(s, /Brethren:/)).toBe(false);
  });

  it('holding Dabblers, a first magenta member: nothing today (same open question: Dabblers counts as magenta elsewhere)', () => {
    const { s } = go('br-dabblers-held', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['thieves.snitch'], members: [['red.brethren', 'benders.dabblers']] }, [/Snitch/, /pay:/]);
    expect(has(s, /Brethren:/)).toBe(false);
  });

  it('Drifters ("On Recruit: choose a color; these count as a member of that color.") choosing red, with Brethren held', () => {
    const { s, trail } = go('br-drifters', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['yellow.drifters'], members: [['red.brethren']] }, [/Drifters/, /pay:/, /color:red/]);
    expect(names(s, 0)).toEqual(['Brethren', 'Drifters']);
    expect(trail.join('\n')).toMatch(/color:red/);
    // Drifters' color is chosen in its On Recruit, after the recruit itself: at the moment it joined it was yellow, a new color
    expect(has(s, /Brethren:/)).toBe(false);
  });

  it('holding Drifters set to magenta, a magenta member pays +1 (Drifters reads as its chosen color)', () => {
    const { s } = go('br-drifters-held', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['thieves.snitch'], members: [['red.brethren', 'yellow.drifters']],
      prep: st => { st.cards[st.players[0].members[1]].asColor = 'thieves'; } }, [/Snitch/, /pay:/]);
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Snitch is a color they already have: +1 follower."]);
  });

  it('Exchange Students\' swap-in (your own swap is a recruit): Triplets for P2\'s Seat Filler, red already held: +1; Exchange Students itself (yellow, new): nothing', () => {
    const { s } = go('br-xs', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['yellow.exchangestudents'], members: [['red.brethren', 'red.twins'], ['red.seatfiller']] },
      [/Exchange Students/, /pay:/, /Triplets ↔/]);
    expect(s.log).toContain("P1's Exchange Students: swaps Triplets for P2's Seat Filler.");
    expect(names(s, 0)).toEqual(['Brethren', 'Exchange Students', 'Seat Filler']);
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Seat Filler is a color they already have: +1 follower."]);
    expect(bonusOf(s, 0)).toBe(1);
    // the rival's arrival (Triplets) is not their recruit: their own Brethren would not pay
    cleanLog(s);
  });

  it('the rival on the other end of Exchange Students holds Brethren: Triplets arrives by P1\'s swap, not P2\'s recruit: nothing', () => {
    const { s } = go('br-xs-rival', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['yellow.exchangestudents'], members: [['red.twins'], ['red.brethren', 'red.seatfiller']] },
      [/Exchange Students/, /pay:/, /Triplets ↔/]);
    expect(names(s, 1)).toEqual(['Brethren', 'Triplets']);
    expect(has(s, /Brethren:/)).toBe(false);
  });

  it("Double Agent (\"On Recruit: swap this member for a rival's member costing up to 8.\"): the swapped-in red Big Family pays +1", () => {
    const { s } = go('br-da', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['thieves.doubleagent'], members: [['red.brethren'], ['red.bigfamily']] },
      [/Double Agent/, /pay:/, /Big Family/]);
    expect(names(s, 0)).toEqual(['Brethren', 'Big Family']);
    expect(names(s, 1)).toEqual(['Double Agent']);
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Big Family is a color they already have: +1 follower."]);
    expect(bonusOf(s, 0)).toBe(1);
    cleanLog(s);
  });

  it('Kidnappers ("Round End: a rival you choose gives you one of their members.") is a gift, not a recruit: nothing', () => {
    const { s } = go('br-kid', { quads: QR, round: 2, queue: END, members: [['red.brethren', 'thieves.kidnappers'], ['red.twins']] }, [/Triplets/]);
    expect(names(s, 0)).toEqual(['Brethren', 'Kidnappers', 'Triplets']);
    expect(has(s, /Brethren:/)).toBe(false);
    cleanLog(s);
  });

  it('Talent Scouts ("On Use, once per game: recruit a member costing up to 7 for free.") taking a red member: +1', () => {
    const { s } = go('br-scouts', { quads: QR, round: 2, queue: BUY, shop: ['red.twins'], members: [['red.brethren', 'yellow.headhunters']] }, [/use:/, /Triplets/]);
    expect(s.log).toContain("P1's Talent Scouts: recruits Triplets for free.");
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Triplets is a color they already have: +1 follower."]);
  });

  it('Initiation ("Recruit a shop member costing 9 or less, for free. +1 red.") taking a red member: +1', () => {
    const { s } = go('br-init', { quads: QR, round: 3, turns: [0], shop: ['red.bigfamily'], members: [['red.brethren']] }, [/Initiation/, /Big Family/]);
    expect(names(s, 0)).toContain('Big Family');
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Big Family is a color they already have: +1 follower."]);
  });

  it('Repeat Customers ("On Recruit: +3 blue, then recruit from the discard pile.") (blue, new): nothing; then Triplets off the discard pile: +1', () => {
    const { s } = go('br-rc', { quads: QR, round: 2, queue: BUY, res: [RICH], shop: ['market.repeatcustomers'], members: [['red.brethren']], prep: disc('red.twins') },
      [/Repeat Customers/, /pay:/, /Triplets/, /pay:/]);
    expect(names(s, 0)).toEqual(['Brethren', 'Repeat Customers', 'Triplets']);
    expect(lines(s, /Brethren/)).toEqual(["P1's Brethren: Triplets is a color they already have: +1 follower."]);
    expect(bonusOf(s, 0)).toBe(1);
  });

  it('Spree ("Recruit two members from the discard pile now. +7 blue."): Snitch (new magenta) then Bodyguards (magenta, now held), then a red shop member: +1, +1', () => {
    const { s } = go('br-spree', { quads: QR, round: 3, turns: [0], res: [RICH], shop: ['red.intern'], members: [['red.brethren']], prep: disc('thieves.snitch', 'thieves.watchdog') },
      [/Spree/, /Snitch/, /pay:/, /Bodyguards/, /pay:/, /Intern/, /pay:/]);
    expect(names(s, 0)).toEqual(['Brethren', 'Snitch', 'Bodyguards', 'Intern']);
    expect(lines(s, /Brethren/)).toEqual([
      "P1's Brethren: Bodyguards is a color they already have: +1 follower.",
      "P1's Brethren: Intern is a color they already have: +1 follower.",
    ]);
    expect(bonusOf(s, 0)).toBe(2);
    cleanLog(s);
  });

  it('Doppelganger ("On Recruit: this member becomes a copy of another of your members.") copying Brethren: a red recruit pays +1 twice', () => {
    const { s } = go('br-doppel', { quads: QE, round: 3, queue: [...BUY, ...BUY], res: [RICH], shop: ['echo.doppel', 'red.intern'], members: [['red.brethren']] },
      [/Doppelganger/, /pay:/, /Brethren/, /Intern/, /pay:/]);
    expect(s.log).toContain("P1's Doppelganger becomes a copy of Brethren.");
    expect(lines(s, /: Intern is a color they already have/)).toHaveLength(2);
    expect(bonusOf(s, 0)).toBe(2);
    cleanLog(s);
  });

  it('Mimics ("On Recruit: use the On Recruit of any member in play.") does not offer Brethren (no On Recruit)', () => {
    const { s } = go('br-mimics', { quads: QE, round: 2, queue: BUY, res: [RICH], shop: ['echo.mimics'], members: [['red.brethren', 'yellow.exchangestudents']] }, [/Mimics/, /pay:/]);
    const labels = (s.pending?.options || []).map(o => o.label).join(' | ');
    expect(labels).not.toMatch(/Brethren/);
  });

  it('4 players: two Brethren owners; only the recruiter\'s pays', () => {
    const { s } = go('br-4p', { quads: QR, n: 4, round: 2, queue: [{ t: 'buy', p: 2 }], res: [{}, {}, RICH, {}], shop: ['red.twins'],
      members: [['red.brethren'], ['red.intern'], ['red.brethren'], ['red.brethren']] }, [/Triplets/, /pay:/]);
    expect(lines(s, /Brethren/)).toEqual(["P3's Brethren: Triplets is a color they already have: +1 follower."]);
    expect([0, 1, 2, 3].map(i => bonusOf(s, i))).toEqual([0, 0, 1, 0]);
  });
});

describe('Purists: "Round End: if your members have 2 or fewer colors, +3 followers."', () => {
  it('Purists alone (red only): +3', () => {
    const { s } = go('pu-alone', { quads: QR, round: 2, queue: END, members: [['red.purists']] }, []);
    expect(lines(s, /Purists/)).toEqual(["P1's Purists: members of 1 color: +3 followers."]);
    expect(bonusOf(s, 0)).toBe(3);
    cleanLog(s);
  });

  it('exactly 2 colors with grey members (no color): +3; 3 colors: nothing', () => {
    const { s } = go('pu-2', { quads: QR, round: 2, queue: END, members: [['red.purists', 'thieves.snitch', 'benders.tiebreaker', 'benders.scout'], ['red.purists', 'thieves.snitch', 'market.repeatcustomers']] }, []);
    expect(lines(s, /Purists/)).toEqual(["P1's Purists: members of 2 colors: +3 followers."]);
    expect([bonusOf(s, 0), bonusOf(s, 1)]).toEqual([3, 0]);
  });

  it('Dabblers never counts against its owner: red, magenta and Dabblers is 2 colors: +3', () => {
    const { s } = go('pu-dab', { quads: QR, round: 2, queue: END, members: [['red.purists', 'thieves.snitch', 'benders.dabblers']] }, []);
    expect(lines(s, /Purists/)).toEqual(["P1's Purists: members of 2 colors: +3 followers."]);
  });

  it('Drifters set to red counts as red: red, magenta and Drifters (red) is 2 colors: +3', () => {
    const { s } = go('pu-drift', { quads: QR, round: 2, queue: END, members: [['red.purists', 'thieves.snitch', 'yellow.drifters']],
      prep: st => { st.cards[st.players[0].members[2]].asColor = 'red'; } }, []);
    expect(lines(s, /Purists/)).toEqual(["P1's Purists: members of 2 colors: +3 followers."]);
  });

  it('own Kidnappers takes a blue member before Purists counts: 3 colors, nothing', () => {
    const { s } = go('pu-kid-own', { quads: QR, round: 2, queue: END, members: [['red.purists', 'thieves.kidnappers'], ['market.repeatcustomers']] }, [/Repeat Customers/]);
    expect(names(s, 0)).toEqual(['Purists', 'Kidnappers', 'Repeat Customers']);
    expect(has(s, /Purists:/)).toBe(false);
    expect(bonusOf(s, 0)).toBe(0);
  });

  it("a rival's Kidnappers takes the Purists owner's only blue member: down to 2 colors before the count: +3", () => {
    const { s } = go('pu-kid-rival', { quads: QR, round: 2, queue: END, members: [['red.purists', 'thieves.snitch', 'market.repeatcustomers'], ['thieves.kidnappers']] }, [/Repeat Customers/]);
    expect(names(s, 1)).toEqual(['Kidnappers', 'Repeat Customers']);
    expect(lines(s, /Purists/)).toEqual(["P1's Purists: members of 2 colors: +3 followers."]);
  });

  it('Doppelganger (green) copying Purists: red and green, both pay: +6', () => {
    const { s } = go('pu-doppel', { quads: QE, round: 3, queue: [...BUY, ...END], res: [RICH], shop: ['echo.doppel'], members: [['red.purists']] }, [/Doppelganger/, /pay:/, /Purists/]);
    expect(s.log).toContain("P1's Doppelganger becomes a copy of Purists.");
    expect(lines(s, /Purists:/)).toEqual(["P1's Purists: members of 2 colors: +3 followers.", "P1's Purists: members of 2 colors: +3 followers."]);
    expect(bonusOf(s, 0)).toBe(6 + 4 * 10); // and the four round III contests, P2 holding nothing
  });

  // AI game, Nov 12: Test Drive on Seat Filler asked which member to take, then gave nothing (the card had to be held).
  // Cory, Nov 10, reviewing Test Drive's strongest uses: "Seat Filler is fine", so the free recruit happens.
  it('Test Drive on Seat Filler ("Round Start: you may put this in the shop and recruit a shop member costing up to 3 more, for free."): recruits the pick for free', () => {
    const { s } = go('sf-td', { quads: QR, round: 1, turns: [0], shop: ['red.seatfiller', 'market.thrifthunters'] }, [/Test Drive/, /Seat Filler/, /Thrift Hunters/]);
    expect(s.log).toContain("P1's Test Drive: sends Seat Filler to the discard pile and uses its effect.");
    expect(names(s, 0)).toEqual(['Thrift Hunters']);
    expect(has(s, /recruits Thrift Hunters for free/)).toBe(true);
    expect(s.discard.map(u => defById(s.cards[u].def).name)).toContain('Seat Filler');
    cleanLog(s);
  });

  it('Test Drive ("Discard a shop member. Use its effect now. +1 blue.") on Purists with 2 colors: +3; with 3: nothing', () => {
    const run = mine => go('pu-td', { quads: QR, round: 1, turns: [0], shop: ['red.purists'], members: [mine] }, [/Test Drive/, /Purists/]).s;
    const a = run(['red.twins', 'market.thrifthunters']);
    expect(a.log).toContain("P1's Test Drive: sends Purists to the discard pile and uses its effect.");
    expect(lines(a, /Purists:/)).toEqual(["P1's Purists: members of 2 colors: +3 followers."]);
    expect(bonusOf(a, 0)).toBe(3);
    const b = run(['red.twins', 'market.thrifthunters', 'thieves.snitch']);
    expect(has(b, /Purists:/)).toBe(false);
    cleanLog(a);
  });

  // OPEN QUESTION: with no members at all, "your members have 2 or fewer colors" is true (0 colors); only reachable by
  // Test Drive (Purists itself is red). Asserts what the code does now: +3.
  it('Test Drive on Purists with no members: 0 colors, +3 today (open question)', () => {
    const { s } = go('pu-td0', { quads: QR, round: 1, turns: [0], shop: ['red.purists'] }, [/Test Drive/, /Purists/]);
    expect(lines(s, /Purists:/)).toEqual(["P1's Purists: members of 0 colors: +3 followers."]);
    expect(bonusOf(s, 0)).toBe(3);
  });

  it('4 players: each Purists owner in turn order, after every Cat Burglars (Round End members finish first)', () => {
    const { s } = go('pu-4p', { quads: QR, n: 4, round: 2, queue: END, res: [{}, { red: 3 }, {}, {}],
      members: [['red.purists'], ['red.purists', 'thieves.snitch', 'market.repeatcustomers'], ['red.purists', 'thieves.secondstory'], ['red.purists', 'benders.dabblers', 'yellow.exchangestudents']] },
      [/take:1:red/, /take:1:red/, /take:1:red/]);
    expect(lines(s, /Purists/)).toEqual([
      "P1's Purists: members of 1 color: +3 followers.",
      "P3's Purists: members of 2 colors: +3 followers.",
      "P4's Purists: members of 2 colors: +3 followers.",
    ]);
    const iCat = s.log.findIndex(l => /Cat Burglars/.test(l)), iPu = s.log.findIndex(l => /Purists:/.test(l));
    expect(iCat).toBeGreaterThanOrEqual(0);
    expect(iCat).toBeLessThan(iPu);
    expect(s.log).toContain('Round II ends. Most red: P3 +6');
    expect([0, 1, 2, 3].map(i => bonusOf(s, i))).toEqual([3, 0, 3 + 6 - 1, 3]); // P3: Most red +6, Snitch −1
    cleanLog(s);
  });
});
