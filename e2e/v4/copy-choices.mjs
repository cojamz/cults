import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E: a copy space's hover names what it could copy right now (Cory, Nov 4: "hovering over copy a rival members on
// recruit should show you the available options in the hover over"). Round II at 1270×700, P1 to place; P2 holds
// Treasurer and Hustler, P3 holds Busker and Tycoon (no On Recruit):
//  (h1) Sample's hover lists exactly the rival members its choice would offer, each with its owner and whole text;
//  (h2) those members light on their seats while the hover is up; Tycoon doesn't;
//  (h3) taking Sample offers the same members the hover named.
// Server: $V4_URL (a built preview). Shots: $V4_SHOTS/copy-choices.
import { mkdirSync } from 'node:fs';
import { createGame, quadrant, defById } from '../../src/engine/v4/index.js';
import { resume } from '../../src/engine/v4/core.js';
import { seedSave } from './lib/seed.mjs';

const SHOTS = process.env.GH_SHOTS || `${process.env.V4_SHOTS || '/tmp/patrons-shots/v4'}/copy-choices`;
mkdirSync(SHOTS, { recursive: true });
const base = (process.env.V4_URL || 'http://localhost:5532/').replace(/\/$/, '');
const QUADS = ['gold', 'red', 'purple', 'echo'];
const key = (q, k) => `${QUADS.indexOf(q)}-${quadrant(q).actions.findIndex(a => a.key === k)}`;
const SAMPLE = key('echo', 'encore');
const HOLD = [[], ['gold.seed', 'gold.hustler'], ['echo.evergreen', 'gold.tycoon']];
const WANT = ['Treasurer', 'Hustler', 'Busker'];

function save(stamp) {
  const seats = [{ name: 'P1', kind: 'human' }, { name: 'P2', kind: 'bot' }, { name: 'P3', kind: 'bot' }];
  let s = createGame({ seats, seed: 7, quadrants: QUADS });
  s.build = stamp;
  Object.assign(s, { round: 2, slots: {}, squats: {}, order: [], pending: null });
  delete s.echo;
  s.players.forEach((p, i) => {
    p.res = Object.fromEntries(s.resources.map(r => [r, 0])); p.left = 2; p.members = [];
    for (const def of HOLD[i]) { const u = Math.max(...Object.keys(s.cards).map(Number)) + 1; s.cards[u] = { uid: u, def }; p.members.push(u); }
  });
  s.queue = [0, 1, 2].map(p => ({ t: 'turn', p }));
  s = resume(s);
  if (!(s.pending?.player === 0 && s.pending.options.some(o => o.id === `slot:${SAMPLE}`))) throw new Error('copy-choices: setup never offered Sample');
  return { config: { seats: seats.map(x => ({ kind: x.kind, name: x.name })), speed: 'normal' }, state: s, undo: null, savedAt: Date.now() };
}

const fails = [];
const fail = (m, tag) => fails.push(`[${tag}] ${m}`);
const errors = [];
const browser = await launchBrowser({ executablePath: browserPath });
try {
  const ctx = await browser.newContext({ viewport: { width: 1270, height: 700 } });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`${base}/?botDelay=300&intro=0`);
  await page.click('[data-home="local"]');
  await page.click('[data-start]');
  await page.waitForFunction(() => { try { return !!JSON.parse(localStorage.getItem('patrons.v4.local')).state.build; } catch { return false; } });
  const stamp = await page.evaluate(() => JSON.parse(localStorage.getItem('patrons.v4.local')).state.build);
  const seeded = save(stamp);
  const uidOf = name => Object.values(seeded.state.cards).find(c => defById(c.def).name === name && seeded.state.players.some(p => p.members.includes(c.uid))).uid;
  await seedSave(page, seeded);
  await page.goto(`${base}/?botDelay=300&intro=0`);
  await page.waitForSelector('.lt-wheel, [data-home="resume"]');
  if (!(await page.$('.lt-wheel'))) await page.click('[data-home="resume"]');
  await page.waitForSelector(`[data-slot="${SAMPLE}"]`);
  await page.waitForTimeout(900);

  // (h1) the hover names each option, whose, and its text
  const box = await (await page.$(`[data-slot="${SAMPLE}"]`)).boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  const card = await page.waitForSelector(`[data-space-card="${SAMPLE}"] [data-copy-choices]`, { timeout: 4000 }).catch(() => null);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${SHOTS}/01-sample-hover.png` });
  if (!card) fail('Sample\'s hover has no "Could copy" list', 'h1');
  else {
    const rows = await page.$$eval(`[data-space-card="${SAMPLE}"] [data-copy-choice]`, els => els.map(e => ({ uid: Number(e.dataset.copyChoice), text: e.innerText.replace(/\s+/g, ' ') })));
    const names = WANT.filter(n => rows.some(r => r.text.includes(n)));
    if (rows.length !== WANT.length || names.length !== WANT.length) fail(`hover lists ${JSON.stringify(rows.map(r => r.text))}, want ${WANT.join(', ')}`, 'h1');
    if (rows.some(r => /Tycoon/.test(r.text))) fail('Tycoon has no On Recruit but is listed', 'h1');
    const t = rows.find(r => r.text.includes('Treasurer'));
    if (t && !(/^P2’s Treasurer/.test(t.text) && t.text.includes('you have, this one included'))) fail(`Treasurer's line lacks its owner or text: ${t.text}`, 'h1');
    // (h2) lit on the seats
    for (const n of WANT) {
      const lit = await page.$(`.cs-member[data-uids~="${uidOf(n)}"][data-aim]`);
      if (!lit) fail(`${n} isn't lit on its seat while Sample's hover is up`, 'h2');
    }
    if (await page.$(`.cs-member[data-uids~="${uidOf('Tycoon')}"][data-aim]`)) fail('Tycoon is lit', 'h2');
    // (h3) the choice offers the same members
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForFunction(() => /^Sample:/.test(JSON.parse(localStorage.getItem('patrons.v4.local')).state.pending?.prompt || ''), null, { timeout: 5000 }).catch(() => {});
    const offered = await page.evaluate(() => (JSON.parse(localStorage.getItem('patrons.v4.local')).state.pending?.options || []).map(o => o.value));
    await page.screenshot({ path: `${SHOTS}/02-sample-choice.png` });
    if (JSON.stringify([...offered].sort()) !== JSON.stringify(rows.map(r => r.uid).sort())) fail(`Sample offered ${JSON.stringify(offered)}, the hover named ${JSON.stringify(rows.map(r => r.uid))}`, 'h3');
  }
  await ctx.close();
} finally { await browser.close(); }
if (errors.length) fail(errors.join(' | '), 'pageerror');
if (fails.length) { console.error(`copy-choices: ${fails.length} failure(s)\n${fails.join('\n')}`); process.exit(1); }
console.log('copy-choices: ok');
