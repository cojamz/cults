// The words on the wheel and in a space's hover, as a newcomer reads them (design/eval/words/decipher-w3.md, from wave
// 3's blind testers). Guards what was fixed: no rulebook jargon on a panel, a gain that grows says so, and "You'd get"
// gives numbers when a pick decides it ("it depends on your pick / a rival decides part of it" was empty, w3b #20).
import { describe, it, expect } from 'vitest';
import { createGame, applyMove, chooseBotMove, previewSpace, quadrant, allQuadrantIds, cardDef } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { panelText, panelEntries } from '../../../v4/game/panelText.js';
import { youdWords } from '../../../v4/game/Info.jsx';
import { MORE } from '../../../engine/v4/content/price.js';
import { useRetired } from '../../engine/v4/helpers.js';

const lines = t => [t.main, t.verb, t.second, t.note].filter(Boolean);

describe('panel words (w3)', () => {
  it('no word a newcomer has to look up or misreads: loose, ransom, redo, on sale, per round number', () => {
    for (const [qid, key, t] of panelEntries()) for (const l of lines(t)) expect(l, `${qid}.${key}`).not.toMatch(/\b(loose|ransom|redo|on sale|round number|anyone)\b/i);
    // the hover's rule sentence says a run by rounds in words ("+2 in round I, +4 in round II…"), never "per round number"
    for (const id of allQuadrantIds()) for (const a of quadrant(id).actions) expect(a.text, a.id).not.toMatch(/per round number/i);
  });

  it('a gain that grows by round says so in rounds I and II, and not in III (w3a #54: "+2●" read as flat)', () => {
    // a space that does more than one thing says what grows (Cory, 2026-10-22)
    // the space's schedule by round, never "more each round" or "+4 next round" (Cory, Oct 24: both misread; /card-words)
    // Toast is flat since Nov 11 (Cory: "i dont like Toast scaling so crazily"): the same words every round, no schedule
    for (const r of [1, 2, 3]) expect(lines(panelText('silver', { key: 'toast' }, r))).toEqual(['+4 silver, then +1', 'others get 2 silver']);
    expect(panelText('silver', { key: 'toast' }, 1).verb).toBe('+4 silver, then +1'); // a verb: as a gain, "then" stood alone in gain type (picky bot, Nov 11)
    for (const [qid, key, says] of [['trading', 'pawn', 'I\u00a0+1\u00a0· II\u00a0+2\u00a0· III\u00a0+3']]) {
      for (const r of [1, 2, 3]) expect(lines(panelText(qid, { key }, r)), `${qid}.${key} round ${r}`).toContain(says);
      expect(lines(panelText(qid, { key }, 2)).join(' ')).not.toMatch(/next round|each round/);
    }
    // Help Yourself grows with your minions this round since Nov 10, not by round: no schedule, the same words every round
    for (const r of [1, 2, 3]) expect(lines(panelText('thieves', { key: 'pickpocket' }, r))).toEqual(['Steal 1 per minion you placed', 'this round, this one too']);
    // Cheap Seats now pays for held white at the same rate in every round, without a growing cap.
    for (const r of [1, 2, 3]) {
      const cheap = lines(panelText('trading', { key: 'buylow' }, r));
      expect(cheap).toContain('per 3 white you hold');
      expect(cheap.join(' ')).not.toMatch(/limit|more each round|buy/i);
    }
  });

  it('Build Up counts minions on Green, the same every round; Golden Years shows this round\'s number, like its rule', () => {
    for (const r of [1, 2, 3]) {
      // Cory, Nov 10: "+1 green per minion on green (including this). +1 green." (was +3/+4/+5); the +1 is the hover's badge
      expect(panelText('echo', { key: 'chant' }, r).main).toBeNull();
      expect(panelText('echo', { key: 'chant' }, r).verb).toBe('+1 green per minion on Green');
      const gold = panelText('gold', { key: 'rush' }, r);
      // "+2 gold × round" made a round III player do the math (text review, 2026-10-23)
      expect(gold.main).toBe(`+${2 * r} gold`);
      // the schedule in line 3, as every growing space has it; line 2 repeated line 1's number (picky bot, Nov 4)
      expect(gold.note).toBe('I\u00a0+2\u00a0· II\u00a0+4\u00a0· III\u00a0+6');
      expect(gold.second).toBeNull();
      expect(panelText('echo', { key: 'chant' }, r).second).toBe('including this one'); // runs on from line 1 (picky bot, Nov 11)
      expect(panelText('echo', { key: 'chant' }, r).note).toBeNull();
    }
    // every space that grows carries its schedule (W18: only some did, and readers took the rest as flat)
    for (const [qid, key] of [['red', 'turnout'], ['trading', 'stipend'], ['market', 'bargain'], ['purple', 'skip'], ['purple', 'holdup'], ['purple', 'again']]) { // New Blood went flat Nov 11
      expect(lines(panelText(qid, { key }, 2)).join(' '), `${qid}.${key}`).toMatch(/I\u00a0\+\d+\u00a0· II\u00a0\+\d+\u00a0· III\u00a0\+\d+/);
    }
  });

  it('keeps ownership and copy targets explicit without long inner-ring clauses', () => {
    // whose minion in line 1 (picky bot, Nov 11: taken, line 2 hides, and Cover and Reprise both read "Copy an action")
    const ownSpace = panelText('echo', { key: 'refrain' });
    expect(ownSpace.verb).toBe('Copy an action with your minion');
    const allOwn = panelText('echo', { key: 'eternity' });
    // Greatest Hits takes Medley's text (Cory, Nov 10): every action on one color, not Green's own; in line 1 (the center
    // drops line 2)
    expect(allOwn.verb).toBe('Copy a whole color, not green');
    expect(panelText('echo', { key: 'hum' }).verb).toBe('Copy an action with a rival’s minion'); // Cover, Nov 10: "copy an action with a rival's minion on it"
    // Rival and own minions are distinct, as are the previous action and your own last action.
    expect(panelText('echo', { key: 'encore' }).verb).toBe('Copy a rival member’s On Recruit'); // Sample copies an On Recruit (Oct 28); whose, in line 1 (text audit Nov 1)
    expect(panelText('echo', { key: 'echo' }).verb).toBe('Copy the previous action'); // the hover's words (picky bot, Nov 11)
    // The purple gain counts only your minions, not every piece on the wheel.
    expect(panelText('purple', { key: 'windup' }).second).toBe('per minion you placed');
  });

  it("Survey says its whole rule in line 1 (the wheel drops line 3), and Churn its round gain before the 3 it sends", () => {
    const seeds = panelText('yellow', { key: 'transmute' });
    expect(seeds.verb).toBe('+1 yellow per minion on busiest color');
    expect(seeds.second).toBeNull(); // the +1 of its color is the hover's badge, off the wheel (Cory, Nov 9)
    // Savings (Oct 31): +2/+3/+4 and one shop member to the bottom, if you like
    const savings = panelText('market', { key: 'bargain' }, 2);
    expect(savings.main).toBe('+3 blue');
    expect(savings.second).toBe('Discard 1 shop member');
    expect(panelText('trading', { key: 'pawn' }, 3).second).toBe('or 2 white per @f');
  });

  it('a space whose center or ring II panel drops line 2 is whole in line 1', () => {
    // w3b #18: "Extra turns for all purple" read as a group effect; w3b #19: "Ransom a member" read backwards
    // its +2 joined line 1 (picky bot, Nov 11: taken, line 2 hides and the purple went with it)
    expect(panelText('purple', { key: 'rally' }, 3).verb).toMatch(/^Your next two turns, now \+2 purple$/);
    // w4b #5: "A rival's member or its cost" read as "I choose": the rival pays or loses, in line 1
    // shortened to fit on phones (v0.8.8 Magenta, 68c9bf0f): line 1 still says the rival decides, pay or lose
    expect(panelText('thieves', { key: 'ransom' }, 2).verb).toBe(`Rival pays or loses a member costing ${6 + MORE} or less`); // the cap follows every member's price, as the rule text does (picky bot, Nov 6); // the limit too: line 2 dropped on ring III (text audit Nov 1)
    expect(panelText('yellow', { key: 'housewarming' }, 2).second).toBe(`free new-color member, up to ${4 + MORE}`); // the engine's cap (picky bot, Nov 8: the panel said 7, the card 5)
    expect(panelText('silver', { key: 'largesse' }, 3).verb).toMatch(/^Give rivals 12 silver$/); // Nov 1: "+N per silver" read as per silver you hold
  });

  it('a face keeps the catch in line 1, and a +1 the card prints first is its own gain (picky bot, Nov 11, W1/B2)', () => {
    // Last Call's card leads with "+1 purple.": not the first taker's +1, so the face keeps it
    expect(lines(panelText('purple', { key: 'lastcall' }, 2))).toContain('+1 purple');
    // a printed last "+1 <its color>." is still the hover's badge, off the wheel
    expect(lines(panelText('echo', { key: 'echo' }, 1))).not.toContain('+1 green');
    const one = (qid, key, r = 2) => { const t = panelText(qid, { key }, r); return t.main || t.verb; };
    expect(one('red', 'borrow', 1)).toMatch(/for this round/);
    expect(one('market', 'markdown', 1)).toMatch(/discard.*2 less/);
    expect(one('thieves', 'swindle')).toMatch(/for a shop member/);
    for (const key of ['skip', 'onaroll', 'crowdin', 'lastcall']) expect(one('purple', key), key).toMatch(/Goes Last|go last|placed last/);
    expect(one('silver', 'flaunt')).toMatch(/per 3 silver held/);
    expect(one('silver', 'partygifts', 1)).toMatch(/\+2 @f per silver given/);
    expect(one('yellow', 'offering', 3)).toMatch(/rivals discard/);
    expect(one('echo', 'eternity', 3)).toMatch(/not green/);
    expect(one('red', 'lateshift', 1)).toMatch(/up to 2 per minion/);
    expect(one('yellow', 'meltingpot')).toMatch(/\+1 @f and \+1 of it/);
    expect(panelText('silver', { key: 'polish' }, 1).second).not.toMatch(/→/);
  });

  it('says 1 of what, what a space costs, and whose cost (live panel r1)', () => {
    // "Others get 1" / "+1 to a rival": 1 of what
    expect(lines(panelText('gold', { key: 'jv' }, 1))).toContain('+1 gold to a rival');
    expect(lines(panelText('gold', { key: 'jv' }, 1)).join(' ')).not.toMatch(/you pick who/);
    expect(lines(panelText('silver', { key: 'toast' }, 2))).toContain('others get 2 silver');
    for (const [qid, key, t] of panelEntries()) for (const l of lines(t)) expect(l, `${qid}.${key}`).not.toMatch(/\bget 1$/);
    // Cheap Seats grants followers for held white; it never describes a purchase or payment.
    const cs = panelText('trading', { key: 'buylow' }, 2);
    expect(cs.main).toBe('+1 @f');
    expect(cs.second).toBe('per 3 white you hold');
    expect(lines(cs).join(' ')).not.toMatch(/buy|spend|resource each/i);
    // Bury: what it does in line 1, what it pays in line 2 ("half its cost": the member's, never your pile's)
    const bury = panelText('market', { key: 'pricecheck' }, 2);
    expect(bury.verb).toBe('Bury a shop member for half its cost in blue'); // whole in line 1: line 2 dropped on ring II and III (text audit Nov 1)
  });

  it('Gather prints its red and when it pays followers, while Tithe counts the viewer’s members', () => {
    const s = createGame({ seats: [{ name: 'A', kind: 'human' }, { name: 'B', kind: 'bot' }], seed: 5, quadrants: ['market', 'red', 'gold', 'purple'] });
    s.recruits = 5;
    // Gather (Nov 10, Walk-In's slot): "+3 red. If you recruit a member this turn of a color you already have: +4 followers."
    const t = panelText('red', quadrant('red').actions.find(x => x.key === 'gather'), 1, s, 0);
    expect(t.main).toBe('+3 red');
    expect(t.second).toBe('+4 @f: recruit a color you have');
    // Tithe: +1 gold per member you have, for the viewer
    const w = panelText('gold', quadrant('gold').actions.find(x => x.key === 'windfall'), 2, s, 0);
    expect(w.main).toBe(`+${s.players[0].members.length} gold`);
    // without a table: the printed rule
    expect(panelText('red', { key: 'gather' }, 3).main).toBe('+3 red');
  });

  // Build Up (Nov 10): +1 green per minion on Green, the same words on a table as off it, every round
  it('Build Up prints its rule, not a round gain', () => {
    const s = createGame({ seats: [{ name: 'A', kind: 'human' }, { name: 'B', kind: 'bot' }], seed: 5, quadrants: ['gold', 'echo'] });
    const a = quadrant('echo').actions.find(x => x.key === 'chant');
    expect(lines(panelText('echo', a, 1, s, 0))).toEqual(['+1 green per minion on Green', 'including this one']);
    for (const r of [1, 2, 3]) expect(lines(panelText('echo', a, r))).toEqual(['+1 green per minion on Green', 'including this one']);
  });

  it('Spree prints its blue and its two recruits from the discard pile (Nov 10: "Recruit two members from the discard pile now. +7 blue.")', () => {
    const a = quadrant('market').actions.find(x => x.key === 'spree');
    const t = panelText('market', a, 3);
    expect([t.verb, t.second]).toEqual(['Recruit 2 from the discard now +7 blue', null]); // whole in line 1: line 2 drops on ring III
  });

  describe('with Shake Down back on the wheel (retired Nov 10, kept for old saves; no live space has a rival decide now)', () => {
  useRetired(['thieves.ransom']);
  it('"You\'d get" says the likely and the best case, or the best pick, or the mix, in numbers', () => {
    const q = ['thieves', 'trading', 'purple', 'silver'];
    const seen = { ransom: null };
    for (let seed = 1; seed < 40 && Object.values(seen).some(v => !v); seed++) {
      let s = createGame({ seats: [0, 1, 2, 3].map(i => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: q });
      const rand = seededRandom(seed);
      for (let n = 0; n < 2500 && !s.over; n++) {
        if (s.pending.kind === 'place' && s.round >= 2) {
          for (const o of s.pending.options.filter(x => x.kind === 'slot')) {
            const a = quadrant(s.quadrants[o.q]).actions[o.i];
            if (!(a.key in seen) || seen[a.key]) continue;
            const pv = previewSpace(s, s.pending.player, o.q, o.i);
            if (!pv || pv.exact) continue;
            const y = youdWords(pv, s, quadrant(s.quadrants[o.q]).resource);
            if (a.key === 'ransom' && y.likely) seen.ransom = y;
            if (a.key !== 'ransom') seen[a.key] = y;
          }
        }
        s = applyMove(s, chooseBotMove(s, rand));
      }
    }
    // a rival decides (pay, or lose the member): the likely case and the best case, both in numbers, and not the same
    // ..."up to" only when you pick among rivals (aminus r1 #3: "+4" read as promised, paid +2); since Oct 28 the rival
    // picks the member, so a lone rival's ransom reads as what they'd pay, in their colors
    // (the likely case can be the member itself, a card worth several members named first, as the best case is below)
    expect(seen.ransom.likely).toMatch(/^(?:(?:up to )?\+\d+ \w+|[A-Z][\w' -]* \(\+\d+ members\))/);
    // (a card worth several members is named first: "Alchemists (+3 members), +3 followers", picky bot Nov 4)
    // since every member cost 4 more (Nov 5 evening) the best case can be the payment itself, in the rival's colors
    // ("+3 white, +4 purple"), when the member is worth less than its price
    expect(seen.ransom.best).toMatch(/^(?:\+\d+ (magenta|member|gold|red|purple|silver|yellow|blue|white|green)|[A-Z][\w' -]* \(\+\d+ members\))/);
    expect(seen.ransom.best).not.toBe(seen.ransom.likely);
    for (const y of Object.values(seen)) expect(JSON.stringify(y)).not.toMatch(/depends on|−-/);
  }, 120000);
  });
});
