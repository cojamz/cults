// Every member's name fits its shop card (todo "Ours" 2: Lottery Winner, Sponsor, Patriarch, Speculator, Stunt Double).
// The shop deals 6 cards in round I, 7 in round II, 8 in round III (core.js shopSize), so cards narrow as the game goes:
// each member is dealt into a full shop of each size, longest names first, at laptop (1270x700) and tablet (1100x700),
// with details off and on. A name passes when its text stays inside the card's name bar (nothing spills or is cut, the
// lib/textclip.mjs measure), takes at most two lines, and never breaks inside a word.
import { mkdirSync } from 'node:fs';
import { browserPath, launchBrowser } from './lib/browser.mjs';
import { buildStamp } from './lib/stamp.mjs';
import { seedSave } from './lib/seed.mjs';
import { TEXT_CLIP } from './lib/textclip.mjs';
import { createGame, cardDef } from '../../src/engine/v4/index.js';
import { resume, shopSize } from '../../src/engine/v4/core.js';
const base = process.env.V4_URL || 'http://localhost:5331';
const out = process.env.V4_SHOTS || '/tmp/cults-shop-names'; mkdirSync(out, { recursive: true });
const seats = ['You', 'Bo', 'Cy', 'Di'].map(name => ({ name, kind: 'human' }));
const GROUPS = [['gold', 'red', 'purple', 'echo'], ['market', 'thieves', 'silver', 'yellow'], ['gold', 'red', 'blue', 'green']];

// every distinct member of a table, longest names first, then dealt into shops of `size`
function shops(quadrants, round) {
  const s = createGame({ seats, quadrants, seed: 53 });
  const pool = [...s.shop, ...s.pile];
  const seen = new Set(), uniq = [];
  for (const u of pool) { const n = cardDef(s, u).name; if (!seen.has(n)) { seen.add(n); uniq.push(u); } }
  uniq.sort((a, b) => cardDef(s, b).name.length - cardDef(s, a).name.length);
  const size = shopSize({ round }), list = [];
  for (let i = 0; i < uniq.length; i += size) {
    const pick = uniq.slice(i, i + size);
    if (pick.length < size) pick.push(...uniq.slice(0, size - pick.length)); // always a full shop
    list.push(pick);
  }
  return list.map(pick => {
    const st = createGame({ seats, quadrants, seed: 53 });
    st.round = round; st.pending = null; st.queue = [{ t: 'buy', p: 0 }]; st.current = 0;
    st.players[0].res = Object.fromEntries(st.resources.map(r => [r, 6]));
    const all = [...st.shop, ...st.pile];
    st.shop = pick; st.pile = all.filter(u => !pick.includes(u));
    const s2 = resume(st); s2.build = buildStamp();
    return { config: { seats, speed: 'quick' }, state: s2, undo: null, savedAt: Date.now() };
  });
}

const NAMES = () => [...document.querySelectorAll('.lt-shop-cards .lt-card[data-uid] .nm')].map(e => {
  const words = e.textContent.trim().split(/\s+/);
  const range = document.createRange(); range.selectNodeContents(e);
  const tops = new Set([...range.getClientRects()].filter(q => q.width > 0).map(q => Math.round(q.top)));
  // a word broken across lines: one word's own rects sit on two lines
  let broken = null;
  const t = e.firstChild;
  if (t && t.nodeType === 3) {
    let at = 0;
    for (const w of words) {
      const i = t.textContent.indexOf(w, at); at = i + w.length;
      const r = document.createRange(); r.setStart(t, i); r.setEnd(t, i + w.length);
      if (new Set([...r.getClientRects()].filter(q => q.width > 0).map(q => Math.round(q.top))).size > 1) broken = w;
    }
  }
  return { name: e.textContent.trim(), lines: tops.size, broken };
});

const browser = await launchBrowser({ executablePath: browserPath });
const fails = [];
let checked = 0;
try {
  // one page per screen size, reloaded with each shop's save (a fresh context per shop made ~80 contexts: 8 min on
  // GitHub's loaded box, and a 15-min stall once, Nov 3)
  for (const [tag, viewport] of [['laptop', { width: 1270, height: 700 }], ['tablet', { width: 1100, height: 700 }]]) {
    const ctx = await browser.newContext({ viewport }), p = await ctx.newPage();
    let errors = [];
    p.on('pageerror', e => errors.push(e.message));
    for (const quads of GROUPS) for (const round of [1, 2, 3]) {
      let k = 0;
      for (const save of shops(quads, round)) {
        errors = [];
        // after the first load the page is on the game's own address: the save goes straight into its storage (an init
        // script per shop would pile up, each one carrying a whole save into every later load)
        if (p.url().startsWith(base)) await p.evaluate(v => { for (const k of Object.keys(sessionStorage)) if (!k.startsWith('patrons.e2e.seed')) sessionStorage.removeItem(k); for (const k of Object.keys(localStorage)) if (k.startsWith('patrons.')) localStorage.removeItem(k); localStorage.setItem('patrons.v4.local', JSON.stringify(v)); }, save);
        else await seedSave(p, save, { clear: true });
        await p.goto(`${base}/?intro=0`); await p.locator('[data-home="resume"]').click();
        const hand = p.locator('[data-handoff]'); if (await hand.isVisible()) await hand.click();
        await p.locator('.app.game[data-phase="buy"]:not([data-animating])').waitFor();
        for (const details of [false, true]) {
          if (details) await p.getByRole('button', { name: 'Show member abilities' }).click();
          const names = await p.evaluate(NAMES);
          const cut = (await p.evaluate(TEXT_CLIP)).filter(x => /^span\.nm /.test(x));
          const where = `${tag} round ${round} (${names.length} cards${details ? ', details' : ''})`;
          for (const c of cut) fails.push(`${where}: ${c}`);
          for (const n of names) {
            if (n.lines > 2) fails.push(`${where}: "${n.name}" takes ${n.lines} lines`);
            if (n.broken) fails.push(`${where}: "${n.name}" breaks inside "${n.broken}"`);
          }
          checked += names.length;
          if (k === 0) await p.screenshot({ path: `${out}/${tag}-${quads[1]}-r${round}${details ? '-details' : ''}.png` });
        }
        if (errors.length) fails.push(`${tag}: ${errors.join('; ')}`);
        k++;
      }
    }
    await ctx.close();
  }
} finally { await browser.close(); }
if (fails.length) { console.error(`shop names: ${fails.length} problem(s)\n  ${[...new Set(fails)].join('\n  ')}`); process.exit(1); }
console.log(`shop names: ${checked} names checked in 6, 7 and 8-card shops at laptop and tablet; every one fits. Shots in ${out}`);
