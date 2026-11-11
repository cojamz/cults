// PreToolUse on every message to Cory (post_message, edit_message, request_decision, post_widget), and run by presend:
// a design pitch only goes out when a finished brainstorm record exists for each idea it names.
// Cory, Nov 11: "how do we actually make it happen in the future vs you saying 'golly ill make sure!' and then doing
// jack shit after a few compactions". Records: design/brainstorm/<date>-<topic>.md (TEMPLATE.md, README.md there).
//
// Exit 0 always. To refuse, prints the PreToolUse deny JSON. `--why` prints the reason as plain text instead (presend).
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const plain = process.argv.includes('--why');
let input = {};
try { input = JSON.parse(readFileSync(0, 'utf8')); } catch { process.exit(0); }
const ti = input.tool_input || {};
// Everything Cory would read on the post, card or widget.
const text = [ti.text, ti.question, ti.reason, ...(ti.options || []).flatMap(o => [o.label, o.consequence]),
  ti.widget || ti.props || ti.data ? JSON.stringify(ti.widget ?? ti.props ?? ti.data) : '']
  .filter(Boolean).join('\n');
if (!text.trim()) process.exit(0);

// Both clones (cults and its old name patrons) can sit side by side; records and cards are read from each.
const roots = [...new Set([here, ...['cults', 'patrons'].map(r => join(process.env.CLAUDE_PROJECT_DIR || '/home/user', r)),
  ...['cults', 'patrons'].map(r => join(here, '..', r))])].filter(r => existsSync(join(r, '.claude')));

const norm = s => s.toLowerCase().replace(/[“”"’']/g, '').replace(/\s+/g, ' ').trim();
const prose = text.replace(/```[\s\S]*?```/g, '').replace(/https?:\/\/\S+/g, '');

// 1. Does this read as a pitch? (presend's test: quoted card text with a number or a card verb, or numbered ideas.)
const QUOTE = /["“]([^"”]{8,})["”]/g;
const cardish = q => /\+\d|\b\d+\s*(🔴|🟢|🟣|🔵|⚪|🟡|🌈|🧍|followers?|resources?)|\b(Copy|Recruit|Swap|Discard|Steal|Gain|Take|Give|Pay)\b/i.test(q);
const quotes = [...prose.matchAll(QUOTE)].map(m => m[1]).filter(cardish);
const numberedIdeas = /(^|\n)\s*\d+[.)] .*["“]/.test(prose) && /\b(pitch|ideas?|could|new space|new member|round I{1,3}\b)/i.test(prose);
if (!quotes.length && !numberedIdeas) process.exit(0);

// 2. Live cards: a status post quoting what is already in the game is not a pitch.
const live = { names: new Set(), texts: [] };
for (const r of roots) {
  try {
    const eng = await import(join(r, 'src/engine/v4/index.js'));
    const con = await import(join(r, 'src/engine/v4/content/index.js'));
    for (const id of eng.allQuadrantIds()) {
      let q; try { q = eng.quadrant(id); } catch { continue; }
      for (const c of [...(q.actions || []), ...(q.members || [])]) { if (c.name) live.names.add(norm(c.name)); if (c.text) live.texts.push(norm(c.text)); }
    }
    for (const m of con.guestMembers?.() || []) { live.names.add(norm(m.name)); if (m.text) live.texts.push(norm(m.text)); }
    break;
  } catch { /* clone without the game's engine (main): try the next */ }
}
const isLiveText = q => { const n = norm(q); return live.texts.some(t => t === n || (n.length > 15 && t.includes(n))); };
const NOT_NAMES = /^(\d.*|yes|no|ask|pick|default|new|now|live|round i{1,3}|nothing needed from you\.?|[🔴🟢🟣🔵⚪🟡🌈🧍🟥\s]+)$/i;
const bold = [...prose.matchAll(/\*\*([^*\n]{2,40})\*\*/g)].map(m => m[1].replace(/[:.,]$/, '').trim())
  .filter(n => /^[A-Z“"]/.test(n) && !NOT_NAMES.test(n) && n.split(/\s+/).length <= 5);
// Unbolded names count too: "1. Name: "text"" lines, and the options on a decision card.
const listed = [...prose.matchAll(/(?:^|\n)\s*\d+[.)]\s+([A-Z][\w'’ -]{1,38}?)\s*[:(—-]\s*["“]/g)].map(m => m[1].trim());
const labels = (ti.options || []).filter(o => cardish(`${o.label} ${o.consequence}`) || numberedIdeas || quotes.length).map(o => String(o.label || '').trim());
const newNames = [...new Set([...bold, ...listed, ...labels]
  .filter(n => n && !/\?$/.test(n) && /^[A-Z“"]/.test(n) && !NOT_NAMES.test(n) && !/^(keep|none|neither|skip|both|other|cut|send|wait|hold)\b/i.test(n) && n.split(/\s+/).length <= 5)
  .filter(n => !live.names.has(norm(n))))];
const newQuotes = quotes.filter(q => !isLiveText(q));
if (!newNames.length && !newQuotes.length) process.exit(0);

// 3. The records.
const problems = [];
let readAt = 0;
try { readAt = Number(readFileSync('/tmp/.cults-brainstorm-read', 'utf8')); } catch {}
if (Date.now() / 1000 - readAt > 12 * 3600) problems.push('The brainstorm skill was not read on this box in the last 12 hours: run `bash .claude/hooks/brainstorm-read.sh` and follow it.');

const STEPS = ['Printed text', 'Played turn', 'Both sides', 'Who feels it', 'Not refused', 'Judged', 'Public and certain', 'Color interactions', 'Biggest case'];
const ideas = new Map(); // norm(name) -> { name, file, ok, verdict, gaps, mtime }
for (const r of roots) {
  const dir = join(r, 'design/brainstorm');
  let files = []; try { files = readdirSync(dir).filter(f => f.endsWith('.md') && !/^(README|TEMPLATE)\.md$/.test(f)); } catch { continue; }
  for (const f of files) {
    const path = join(dir, f), mtime = statSync(path).mtimeMs;
    const body = readFileSync(path, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
    for (const block of body.split(/\n(?=##\s+Idea:)/).slice(1)) {
      const name = block.match(/^##\s+Idea:\s*(.+)/)[1].replace(/\*/g, '').trim();
      const verdict = (block.match(/^\s*Verdict:\s*(send|cut)\b/im) || [])[1]?.toLowerCase() || null;
      const cory = /^\s*Source:\s*Cory\b.*["“][^"”]{10,}["”]/im.test(block);
      const gaps = [];
      if (!cory) STEPS.forEach((label, i) => {
        const line = block.match(new RegExp(`^\\s*${i + 1}[.)]\\s*(?:\\*\\*)?${label.replace(/ /g, '\\s+')}(?:\\*\\*)?\\s*:\\s*(.*)$`, 'im'));
        const body = line?.[1]?.trim() || '';
        if (body.length < 20 || /^<|TODO|TBD|\.\.\.$/i.test(body)) gaps.push(`${i + 1}. ${label}`);
        else if (i === 8 && (body.match(/\d+/g) || []).length < 3) gaps.push('9. Biggest case (needs its numbers: what it pays at its biggest, against real totals)');
      });
      if (!verdict) gaps.push('Verdict: send or cut');
      const prev = ideas.get(norm(name));
      if (!prev || prev.mtime < mtime) ideas.set(norm(name), { name, file: path.replace(r + '/', ''), ok: !gaps.length, verdict, gaps, mtime });
    }
  }
}

for (const n of newNames) {
  const rec = ideas.get(norm(n));
  if (!rec) problems.push(`**${n}** has no brainstorm record: add a "## Idea: ${n}" block to design/brainstorm/<date>-<topic>.md (TEMPLATE.md there) with all nine steps, then send.`);
  else if (!rec.ok) problems.push(`**${n}** (${rec.file}) is missing: ${rec.gaps.join('; ')}.`);
  else if (rec.verdict === 'cut') problems.push(`**${n}** is marked "Verdict: cut" in ${rec.file}: a cut idea doesn't go to Cory.`);
}
if (!newNames.length && newQuotes.length) {
  const recent = [...ideas.values()].some(i => i.ok && i.verdict === 'send' && Date.now() - i.mtime < 6 * 3600e3);
  if (!recent) problems.push(`This quotes new card text ("${newQuotes[0].slice(0, 60)}") and no complete brainstorm record was written in the last 6 hours: put the idea through design/brainstorm/TEMPLATE.md, all nine steps, and bold its name in the message.`);
}
if (!problems.length) process.exit(0);

const reason = `Pitch refused: no finished brainstorm record (Cory, Nov 11: "DID YOU USE BRAINSTORMING SKILL").\n- ${problems.join('\n- ')}\n` +
  'If this is not a pitch (a live card misnamed, or a read-back of Cory\'s own design), name the live card exactly, or add a block with "Source: Cory, <date>: "<his words>"" and "Verdict: send".';
if (plain) { console.log(reason); process.exit(0); }
console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision: 'deny', permissionDecisionReason: reason } }));
process.exit(0);
