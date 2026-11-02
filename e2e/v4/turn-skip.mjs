// A skipped turn shows on the table (Cory, Nov 1: "it's not clear when a turn is skipped. we need to show it happening
// with some UI component or emphases, and the pocket watch (or whatever) gain should occur when that animation
// happens"). P1 holds Pocket Watch ("Whenever a player's turn is skipped, +2 purple.") and takes Hold Up ("The next
// turn is skipped."): "Turn skipped" stands on the next player's seat, and Pocket Watch's purple lands only after it
// shows, never with Hold Up's own purple.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { createGame, applyMove, chooseBotMove, quadrant } from '../../src/engine/v4/index.js';
import { seededRandom } from '../../src/engine/v4/rng.js';

const base = process.env.V4_URL || 'http://localhost:5335', out = process.env.V4_SHOTS || '/tmp/cults-turn-skip';
const speed = process.env.SPEED || 'steady';
mkdirSync(out, { recursive: true });

const TABLE = ['red', 'purple', 'echo', 'market'];
const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }, { name: 'P4', kind: 'bot' }];
const q = TABLE.indexOf('purple'), i = quadrant('purple').actions.findIndex(a => a.key === 'holdup');
function save() {
  for (let seed = 1; seed < 300; seed++) {
    let s = createGame({ seats, seed, quadrants: TABLE });
    const rand = seededRandom(seed);
    const ready = st => st.round === 1 && st.pending && st.pending.player === 0 && st.pending.kind === 'place' && st.pending.options.some(o => o.id === `slot:${q}-${i}`);
    for (let n = 0; n < 600 && !ready(s) && !s.over; n++) s = applyMove(s, chooseBotMove(s, rand));
    if (!ready(s)) continue;
    // the next turn after P1's must be a rival's, so the stamp lands on a rival seat
    const next = s.queue.find(t => t.t === 'turn');
    if (!next || next.p === 0) continue;
    const pw = s.artifacts && s.artifacts.purple;
    if (pw == null) continue;
    s.players.forEach(p => { if (p.artifact === pw) p.artifact = undefined; });
    s.players[0].artifact = pw;
    s.build = buildStamp();
    return { save: { config: { seats, speed }, state: s, undo: null, savedAt: Date.now() }, next: next.p };
  }
  throw new Error('turn-skip: never reached P1 on Hold Up in round I');
}

const { save: sv, next } = save();
const browser = await launchBrowser({ executablePath: browserPath });
const errors = [];
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } }), p = await ctx.newPage();
  p.setDefaultTimeout(20000);
  await seedSave(p, sv);
  await p.goto(`${base}/?intro=0&speed=${speed}`);
  await p.locator('[data-home="resume"]').click();
  const hand = p.locator('[data-handoff]'); if (await hand.isVisible().catch(() => false)) await hand.click();
  await p.locator('.app.game:not([data-animating])').waitFor();
  const purple = () => p.evaluate(() => (b => Number(b ? (b.dataset.hold ?? b.textContent) : 0))(document.querySelector('.lt-cult-seat[data-seat="0"] .cs-stack[data-res="purple"] b.num')));
  const p0 = await purple();
  await p.locator(`.lt-wheel .slot.lit[data-slot="${q}-${i}"]`).click();
  // Hold Up's own purple lands; Pocket Watch's comes only with the skip (P1 ends the turn first)
  await p.waitForFunction(n => { const b = document.querySelector('.lt-cult-seat[data-seat="0"] .cs-stack[data-res="purple"] b.num'); return b && b.dataset.hold === undefined && Number(b.textContent) > n; }, p0);
  await p.locator('.app.game:not([data-animating])').waitFor();
  await p.locator('[data-option="pass"]').first().waitFor();
  const afterSpace = await purple();
  // in the page, frame by frame: when the tag shows, and when P1's purple changes
  await p.evaluate(() => {
    const w = window; w.__skipSeen = null; w.__purpleAt = [];
    const t0 = performance.now();
    const val = () => { const b = document.querySelector('.lt-cult-seat[data-seat="0"] .cs-stack[data-res="purple"] b.num'); return b ? (b.dataset.hold ?? b.textContent) : null; };
    let last = val();
    const tick = () => {
      const now = performance.now() - t0;
      if (w.__skipSeen == null && document.querySelector('.skip-tag')) w.__skipSeen = now;
      const v = val();
      if (v !== last) { w.__purpleAt.push([now, Number(v)]); last = v; }
      if (now < 10000) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  await p.locator('[data-option="pass"]').first().click();
  const tag = p.locator(`.skip-tag[data-skip="${next}"]`);
  const seen = await tag.waitFor({ timeout: 8000 }).then(() => true, () => false);
  let text = '', dim = 0;
  if (seen) {
    text = await tag.textContent().catch(() => '');
    dim = await p.locator(`.lt-cult-seat[data-seat="${next}"].turn-skipped`).count();
    await p.waitForTimeout(Number(process.env.MID || 120)); await p.screenshot({ path: `${out}/skip-${speed}.png` });
    if (process.env.FRAMES) for (let k = 1; k <= 8; k++) { await p.waitForTimeout(200); await p.screenshot({ path: `${out}/skip-${speed}-${k}.png`, clip: { x: 0, y: 0, width: 640, height: 300 } }); }
  }
  if (!seen) errors.push(`no "Turn skipped" on P${next + 1}'s seat`);
  else {
    await p.waitForTimeout(2500);
    const seenAt = await p.evaluate(() => window.__skipSeen), changes = await p.evaluate(() => window.__purpleAt);
    const firstUp = changes.find(([, v]) => v > afterSpace);
    const atTag = firstUp && firstUp[0] <= seenAt + 50 ? firstUp[1] : afterSpace; // shown at the skip's first frames = paid with the space, not the skip
    console.log(`tag at ${Math.round(seenAt)}ms; P1 purple changes ${JSON.stringify(changes.map(([t, v]) => [Math.round(t), v]))}`);

    if (text !== 'Turn skipped') errors.push(`tag reads "${text}"`);
    if (!dim) errors.push('the skipped seat did not dim');
    const end = firstUp ? firstUp[1] : afterSpace;
    console.log(`P1 purple: before ${p0}, after Hold Up ${afterSpace}, before the skip shows ${atTag}, first change ${end}${firstUp ? ` at ${Math.round(firstUp[0] - seenAt)}ms after the tag` : ''}`);
    if (atTag !== afterSpace) errors.push(`purple rose before the skip showed (${afterSpace} → ${atTag})`);
    if (end !== afterSpace + 2) errors.push(`Pocket Watch did not pay +2 with the skip (${afterSpace} → ${end})`);
    else if (firstUp[0] - seenAt > 4000) errors.push('Pocket Watch paid long after the skip showed');
  }
  await ctx.close();
} finally { await browser.close(); }
if (errors.length) { console.error(`FAIL turn-skip:\n- ${errors.join('\n- ')}`); process.exit(1); }
console.log(`turn-skip ok (P${next + 1} skipped; shots in ${out})`);
