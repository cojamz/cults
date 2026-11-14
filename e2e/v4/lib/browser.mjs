// Use the existing Linux browser when present; otherwise Playwright's platform-native install.
// V4_ENGINE=firefox runs a gate or probe in Firefox (Cory plays Firefox on a Mac; every gate was Chrome-only until
// Oct 28). Firefox has no CDP: scripts that throttle the CPU or read heap through newCDPSession check `cdpOk` first.
import { existsSync } from 'node:fs';
import { chromium, firefox } from 'playwright';
export const engine = (process.env.V4_ENGINE || 'chromium').toLowerCase();
if (!['chromium', 'firefox'].includes(engine)) throw new Error(`V4_ENGINE=${engine}: use chromium or firefox`);
export const cdpOk = engine === 'chromium';
export const browserPath = engine === 'firefox' ? undefined
  : process.env.V4_BROWSER || (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : chromium.executablePath());
const FIREFOX_MISSING = 'Firefox is not installed here. It needs cdn.playwright.dev and playwright.download.prss.microsoft.com '
  + 'allowed in the environment\'s network settings, then: npx playwright install firefox (the bootstrap hook tries it each session).';
// Headless Firefox has no pointing device, so it answers (hover: none) and every hover card stays shut (snappy s2 opened
// 0 of 23 in Firefox, Oct 28). Cory's Firefox on a Mac has a trackpad: tell it so (fine pointer that can hover: 2 | 4).
export const DESK = { 'ui.primaryPointerCapabilities': 6, 'ui.allPointerCapabilities': 6 };
// V4_HOVER_DELAY (set by scripts/v4-check.mjs for gates that only read what a hover card says): every page this browser
// opens gets that hover wait instead of the game's beat (src/v4/game/hoverDelay.js)
const HOVER = process.env.V4_HOVER_DELAY;
function withHover(b) {
  if (HOVER == null || HOVER === '') return b;
  const script = `window.__V4_HOVER_DELAY = ${JSON.stringify(String(HOVER))};`;
  const newContext = b.newContext.bind(b), newPage = b.newPage.bind(b);
  b.newContext = async (...a) => { const c = await newContext(...a); await c.addInitScript(script); return c; };
  b.newPage = async (...a) => { const pg = await newPage(...a); await pg.addInitScript(script); return pg; };
  return b;
}
export async function launchBrowser(opts = {}) {
  return withHover(await launchRaw(opts));
}
async function launchRaw(opts) {
  if (engine === 'chromium') return chromium.launch(opts);
  const path = process.env.V4_BROWSER || firefox.executablePath();
  if (!existsSync(path)) throw new Error(FIREFOX_MISSING);
  // Chrome-only switches (--disable-gpu, autoplay policy) mean nothing to Firefox
  const { executablePath, args, firefoxUserPrefs, ...rest } = opts;
  return firefox.launch({ ...rest, executablePath: path, firefoxUserPrefs: { ...DESK, ...firefoxUserPrefs } });
}
