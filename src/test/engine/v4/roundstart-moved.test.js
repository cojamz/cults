import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/core.js';
import { table, named, owns } from './cards-helpers-b.js';

// Lab bug (Tax Collector A/B game 1, round III start): Ava's Kidnapper took Cal's Cutpurse, and the Cutpurse stole for
// Ava and again for Cal. A card's Round Start fires once a round, for whoever holds it (Cory, Nov 4: "Round Start /
// Round End effects resolve in turn order"); a choice it queued before it changed cults does nothing.
const steals = s => named(s, 'Cutpurse').filter(l => /Cutpurse.* stole/.test(l));
const answer = s => { let k = 0; while (s.pending?.kind === 'choose' && k++ < 20) s = applyMove(s, { player: s.pending.player, option: s.pending.options[0].id }); return s; };

describe('Round Start: a member that changes cults mid-Round Start', () => {
  it('a Kidnapper taking the Cutpurse: it steals once, for the Kidnapper, and the old owner\'s queued steal does nothing', () => {
    // P1 Kidnapper; P2 has two 1-cost members (a choice) and Cutpurse; P3 holds 3 colors (Cutpurse's steal asks which)
    let s = table(['red', 'thieves', 'market', 'trading'], { n: 3, round: 2, res: [{}, {}, { silver: 5, red: 2, blue: 2 }],
      members: [['thieves.kidnappers'], ['thieves.cutpurse', 'thieves.accomplice'], ['market.snob']], queue: [{ t: 'round', r: 3 }] });
    // answer every choice the Round Start asked, Cutpurse first if P1 is offered it
    let k = 0;
    while (s.pending?.kind === 'choose' && k++ < 20) {
      const o = s.pending.options.find(x => String(x.label).includes('Cutpurse')) || s.pending.options[0];
      s = applyMove(s, { player: s.pending.player, option: o.id });
    }
    expect(s.log.some(l => /Cutpurse has left P2's cult/.test(l))).toBe(true);
    expect(owns(s, 0, 'thieves.cutpurse')).toBe(true);
    const lines = steals(s);
    expect(lines).toHaveLength(1);
    expect(lines[0]).toMatch(/^P1/);
  });

  it('a Cutpurse nobody takes still steals at Round Start', () => {
    let s = table(['red', 'thieves', 'market', 'trading'], { n: 3, round: 2, res: [{}, {}, { silver: 5, red: 2, blue: 2 }],
      members: [[], ['thieves.cutpurse'], ['market.snob']], queue: [{ t: 'round', r: 3 }] });
    s = answer(s);
    expect(steals(s)).toHaveLength(1);
    expect(steals(s)[0]).toMatch(/^P2/);
  });
});
