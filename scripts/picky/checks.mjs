// The picky UI bot's judgments (scripts/picky/picky.mjs reads the page with probes.mjs; these say what's wrong).
// Each returns findings { check, severity (1 wrong, 2 confusing, 3 looks off), subject, detail }. A check that fires on
// something by design gets an exception here with the reason, never a weaker test.
import { defById, followers, memberCount } from '../../src/engine/v4/index.js';

const COLORS = ['gold', 'red', 'blue', 'green', 'magenta', 'silver', 'yellow', 'purple', 'white'];
const STOP = new Set('a an the of to your you per and or is it its it’s on in for with that this each one any when from by at as be can’t'.split(' '));
const words = s => String(s || '').toLowerCase().replace(/[’']/g, '’').match(/[a-z’]+/g) || [];
const content = s => words(s).filter(w => !STOP.has(w) && w.length > 2);
const nums = s => (String(s || '').match(/\d+/g) || []).map(Number);
const defOf = id => { try { return defById(id); } catch { return null; } };
// a rule's colors, split by what they count: "3 purple" (resources) or "purple member(s)" (members)
function colorUses(text) {
  const t = String(text || '').toLowerCase();
  const out = {};
  for (const c of COLORS) {
    const all = (t.match(new RegExp(`\\b${c}\\b`, 'g')) || []).length;
    if (!all) continue;
    const mem = (t.match(new RegExp(`\\b${c} (?:face-up )?members?\\b`, 'g')) || []).length;
    out[c] = { member: mem, resource: all - mem };
  }
  return out;
}
const ruleOf = (m, def) => String((m.fullRaw || (def && def.text) || '')).replace(/^Worth \d+ followers?\.\s*/i, '');

/** One hover card (or a full card on the members page). */
export function judgeCard(card) {
  const out = [];
  const subject = card.title || card.kind || 'card';
  const f = (check, severity, detail, subj = subject) => out.push({ check, severity, subject: subj, detail });
  const text = card.text || '';
  if (/\bundefined\b|\bNaN\b|\[object |\bnull\b|\{\{|\}\}/.test(text)) f('junk text', 1, `shows "${text.match(/.{0,20}(undefined|NaN|\[object |null|\{\{|\}\}).{0,20}/)?.[0]}"`);
  // a word printed twice in a row ("the the"), not numbers ("2 2" is a by-round list)
  const dbl = text.match(/\b([A-Za-z]{2,})\s+\1\b/i);
  if (dbl && !/^(very|ha|no)$/i.test(dbl[1])) f('doubled word', 2, `"${dbl[0]}"`);
  // a sentence said twice on one card
  // (a rule with two triggers, "On Recruit and Round Start: +1 red per 2 members", prints one line per trigger by
  // design: a repeat under a different trigger isn't one)
  const lines = text.split('\n');
  const seen = new Map();
  const triggers = new Set((text.match(/\b(On Recruit|Round Start|Round End|Game End|On Use|Passive)\b/gi) || []).map(t => t.toLowerCase()));
  for (let i = 0; i < lines.length && triggers.size < 2; i++) {
    for (const raw of lines[i].split(/(?<=[.!?])\s+/)) {
      const s = raw.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
      if (s.length < 14) continue;
      const trig = (lines[i - 1] || '').trim();
      if (seen.has(s) && seen.get(s) === trig) { f('said twice', 2, `"${s.slice(0, 70)}" appears twice`); i = lines.length; break; }
      seen.set(s, trig);
    }
  }
  // off the screen (a scrolling page's cards are reachable by scrolling)
  if (card.rect && card.rect.w > 0 && !card.scrolls) {
    const off = Math.max(-card.rect.left, -card.rect.top, card.rect.right - card.vw, card.rect.bottom - card.vh);
    if (off > 2) f('off screen', 2, `the card runs ${Math.round(off)}px past the edge of the screen`);
  }
  for (const m of card.members || []) {
    const def = defOf(m.id);
    const name = m.name || m.id;
    const rule = ruleOf(m, def);
    // the one-line rule and the full rule, both on the card, saying the same thing
    // (the emoji look's one-line rule restates the full rule by construction: one finding for the look, the cards listed
    // where it was seen; Cory, Nov 4, on Big Tent's card)
    if (m.line && m.full) out.push({ check: 'said twice', severity: 2, subject: 'emoji look: one-line rule over the full rule', detail: 'member cards show the same effect twice, as the one-line rule and again as the full rule', card: name });
    if (m.line && rule) {
      // a number in the one-line rule that the rule doesn't have
      const rn = new Set(nums(rule));
      const extra = nums(m.lineRaw).filter(n => !rn.has(n) && !(n === 1 && /\b(a|an|one)\b/i.test(rule)));
      if (extra.length) f('number mismatch', 1, `the one-line rule says ${extra.join(', ')} ("${m.lineRaw}"), the rule doesn't ("${rule.slice(0, 100)}")`, name);
      // symbols: a resource dot where the rule counts members, a member figure where it counts resources
      const uses = colorUses(rule);
      for (const g of m.lineGlyphs || []) {
        const u = uses[g.color];
        if (!u) continue;
        if (g.kind === 'dot' && u.member && !u.resource) f('wrong symbol', 1, `the one-line rule shows a ${g.color} resource dot ("${m.lineRaw}") where the rule means ${g.color} members ("${rule.slice(0, 100)}")`, name);
        if (g.kind === 'member' && u.resource && !u.member) f('wrong symbol', 1, `the one-line rule shows a ${g.color} member figure ("${m.lineRaw}") where the rule means ${g.color} resources ("${rule.slice(0, 100)}")`, name);
      }
      // a count of a color in the line where the rule names members of no count ("per 3 purple" vs "per purple member")
      const lc = String(m.lineRaw).toLowerCase().match(new RegExp(`\\b(\\d+) (${COLORS.join('|')})\\b(?! members?)`, 'g')) || [];
      for (const hit of lc) {
        const [, n, c] = hit.match(/(\d+) (\w+)/);
        const u = uses[c];
        if (u && u.member && !new RegExp(`\\b${n} ${c}\\b`).test(rule.toLowerCase())) f('wrong symbol', 1, `"${hit}" in the one-line rule reads as ${n} ${c} resources; the rule counts ${c} members ("${rule.slice(0, 100)}")`, name);
      }
    }
    if (m.full && def && def.text) {
      // the full rule on the card against the card's rule (ignoring symbols' words, which the card hides)
      const want = new Set(content(String(def.text).replace(/^Worth \d+ followers?\.\s*/i, '')));
      const got = content(m.fullRaw);
      const missing = [...want].filter(w => !got.includes(w));
      if (missing.length >= 2) f('rule text differs', 2, `the card's rule is missing "${missing.slice(0, 6).join(', ')}" from "${def.text.slice(0, 100)}"`, name);
    }
    // the price disc against the cost line ("2 ⟨red⟩ 1 ⟨any⟩" is 3; "counts as N" after it isn't cost)
    if (m.price != null && m.costText) {
      const cost = nums(String(m.costText).split(/counts as/i)[0]).reduce((t, n) => t + n, 0);
      if (cost && cost !== m.price) f('number mismatch', 1, `the price disc says ${m.price}, the cost line adds up to ${cost} ("${m.costText.replace(/\s+/g, ' ')}")`, name);
    }
  }
  return out;
}

/** Seats against the saved game. */
export function judgeSeats({ seats, state }) {
  const out = [];
  if (!state || !state.players) return out;
  for (const s of seats) {
    const p = state.players.find(q => q.id === s.pid) || state.players[s.pid];
    if (!p || s.picking) continue;
    const name = p.name || s.name;
    for (const [r, n] of Object.entries(s.res)) {
      const want = (p.res && p.res[r]) || 0;
      if (Number.isFinite(n) && n !== want) out.push({ check: 'number mismatch', severity: 1, subject: `${name}'s seat`, detail: `shows ${n} ${r}, the game has ${want}` });
    }
    try {
      const fw = followers(state, p);
      if (s.followers != null && s.followers !== fw) out.push({ check: 'number mismatch', severity: 1, subject: `${name}'s seat`, detail: `shows ${s.followers} followers, the game has ${fw}` });
      const mw = memberCount(state, p);
      if (s.members != null && s.members !== mw) out.push({ check: 'number mismatch', severity: 1, subject: `${name}'s seat`, detail: `shows ${s.members} members, the game counts ${mw}` });
    } catch { /* a save from other rules: the engine here can't count it */ }
  }
  return out;
}

/** A shop card as it sits: its one-line rule against the member's rule. */
export function judgeShopFace(face) {
  if (!face.line || !face.def) return [];
  const def = defOf(face.def);
  if (!def) return [];
  return judgeCard({ title: def.name, text: '', members: [{ id: face.def, name: def.name, line: face.line, lineRaw: face.line, lineGlyphs: face.dots.map(d => ({ kind: d.split(':')[0], color: d.split(':')[1] })), full: null, fullRaw: null }] })
    .filter(x => x.check !== 'said twice');
}

/** Text cut off or spilling out (TEXT_CLIP's lines). */
export const judgeClip = lines => (lines || []).map(l => {
  const m = l.match(/^(\S+) "(.*?)" (.*)$/);
  return { check: 'cut off', severity: 3, subject: m ? `"${m[2]}"` : l.slice(0, 40), detail: m ? `${m[3]} (${m[1]})` : l };
});

/** A wheel space's panel against its hover card: a number on the panel the card never says. */
export function judgeFace(face, card) {
  if (!face || !card || !card.text) return [];
  const have = new Set(nums(card.text));
  const extra = [...new Set(nums(face))].filter(n => !have.has(n));
  return extra.length ? [{ check: 'number mismatch', severity: 2, subject: card.title || 'space', detail: `the wheel panel says ${extra.join(', ')} ("${face.slice(0, 80)}"), its hover card never does` }] : [];
}
