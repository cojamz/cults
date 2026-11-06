import { browserPath, launchBrowser } from './lib/browser.mjs';
// E2E: a copy space's hover names what it could copy right now (Cory, Nov 4: "hovering over copy a rival members on
// recruit should show you the available options in the hover over"). Round II at 1270×700, P1 to place; P2 holds
// Treasurer and Hustler, P3 holds Busker and Tycoon (no On Recruit):
//  (h1) Sample's hover lists exactly the rival members its choice would offer, each with its owner and whole text;
//  (h2) those members light on their seats while the hover is up; Tycoon doesn't;
//  (h3) taking Sample offers the same members the hover named;
//  (h4) and lays them out as whole cards to pick, rules showing.
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
let IMP = null;
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
  { const u = Math.max(...Object.keys(s.cards).map(Number)) + 1; s.cards[u] = { uid: u, def: 'echo.impersonators' }; s.shop.push(u); IMP = u; }
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

  // (h0) Impersonator's shop hover names the rival members it could pick (Cory, Nov 5: "i mean like in the hover over")
  {
    const el = await page.$(`.lt-shop-cards .lt-card[data-uid="${IMP}"]`);
    if (!el) fail('Impersonator not in the shop', 'h0');
    else {
      await el.hover();
      const list = await page.waitForSelector('[data-copy-choices]', { timeout: 4000 }).catch(() => null);
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${SHOTS}/00-impersonator-hover.png` });
      const n = list ? await page.$$eval('[data-copy-choice]', els => els.length) : 0;
      if (n !== 4) fail(`Impersonator's hover lists ${n} members, want the rivals' 4`, 'h0');
      await page.mouse.move(5, 690); await page.waitForTimeout(400);
    }
  }
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
    // (h4) the choice lays those members out as whole cards in the shop's place, rules showing (Cory, Nov 5: "Sample
    // should show options like the other one does", Tryout's shop cards)
    await page.mouse.move(5, 690);
    const tray = await page.waitForSelector('.lt-shop-cards[data-tray="members"]', { timeout: 4000 }).catch(() => null);
    await page.screenshot({ path: `${SHOTS}/03-sample-tray.png` });
    if (!tray) fail('taking Sample doesn\'t lay its members out as cards', 'h4');
    else {
      const laid = await page.$$eval('.lt-shop-cards[data-tray="members"] .lt-card[data-uid]', els => els.map(e => ({ uid: Number(e.dataset.uid), opt: e.dataset.option || '', rule: !!e.querySelector('.lt-pick-ability') })));
      if (JSON.stringify(laid.map(x => x.uid).sort()) !== JSON.stringify([...offered].sort())) fail(`tray shows ${JSON.stringify(laid.map(x => x.uid))}, Sample offered ${JSON.stringify(offered)}`, 'h4');
      // a click on a tray card answers the choice
      if (laid[0]) {
        await page.click(`.lt-shop-cards[data-tray="members"] .lt-card[data-uid="${laid[0].uid}"]`);
        const moved = await page.waitForFunction(() => !/^Sample:/.test(JSON.parse(localStorage.getItem('patrons.v4.local')).state.pending?.prompt || ''), null, { timeout: 5000 }).then(() => true, () => false);
        if (!moved) fail('clicking a tray card didn\'t pick it', 'h4');
      }
      if (laid.some(x => !x.opt || !x.rule)) fail(`a tray card is not pickable or hides its rule: ${JSON.stringify(laid)}`, 'h4');
    }
  }
  await ctx.close();
} finally { await browser.close(); }
if (errors.length) fail(errors.join(' | '), 'pageerror');
if (fails.length) { console.error(`copy-choices: ${fails.length} failure(s)\n${fails.join('\n')}`); process.exit(1); }
console.log('copy-choices: ok');
