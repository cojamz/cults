import { browserPath, launchBrowser } from '../e2e/v4/lib/browser.mjs';
// Render each emoji's call (src/v4/sound.js CALLS) with the place knock under it, offline in Chromium, to .wav files,
// and print each one's peak and loudness (to set CALL_LEVEL by).
//   node scripts/v4-calls.mjs [outDir] [--raw]     (default design/eval/sounds/calls; --raw: calls alone, level 1)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const RAW = args.includes('--raw');
const out = args.find(a => !a.startsWith('--')) || 'design/eval/sounds/calls';
mkdirSync(out, { recursive: true });
let src = readFileSync(new URL('../src/v4/sound.js', import.meta.url), 'utf8')
  .split('// ---------- the player')[0].replace(/^export /gm, '');
if (RAW) src = src.replace(/const CALL_LEVEL = \{[^}]*\};/, 'const CALL_LEVEL = {};');
const RATE = 44100;
const browser = await launchBrowser({ executablePath: browserPath });
const page = await browser.newPage();
await page.setContent('<!doctype html><title>calls</title>');
await page.addScriptTag({ content: `${src}\nwindow.__s = { voice, call, CALL_IDS };` });
const ids = await page.evaluate(() => window.__s.CALL_IDS);
const all = [];
for (const id of ids) {
  const data = await page.evaluate(async ({ id, RATE, RAW }) => {
    const ctx = new OfflineAudioContext(2, Math.round(RATE * 0.7), RATE);
    if (!RAW) window.__s.voice(ctx, ctx.destination, 'place', 0.02, 3);
    window.__s.call(ctx, ctx.destination, id, 0.03, 5);
    const buf = await ctx.startRendering();
    const L = buf.getChannelData(0), R = buf.getChannelData(1), o = new Array(L.length * 2);
    for (let i = 0; i < L.length; i++) { o[2 * i] = L[i]; o[2 * i + 1] = R[i]; }
    return o;
  }, { id, RATE, RAW });
  const s = data.map(x => x * 0.6);
  const peak = s.reduce((m, x) => Math.max(m, Math.abs(x)), 0);
  // loudness over the sound's own length (above -60 dB), not the silent tail
  let sum = 0, k = 0; for (const x of s) if (Math.abs(x) > 0.001) { sum += x * x; k++; }
  const rms = Math.sqrt(sum / Math.max(1, k));
  writeFileSync(join(out, `${id}.wav`), wav(s));
  all.push(...s, ...new Array(RATE * 2 * 0.25).fill(0));
  console.log(`${id.padEnd(10)} peak ${(20 * Math.log10(peak || 1e-9)).toFixed(1)} dB  rms ${(20 * Math.log10(rms || 1e-9)).toFixed(1)} dB`);
}
writeFileSync(join(out, 'all-twenty.wav'), wav(all));
await browser.close();

function wav(samples) {
  const b = Buffer.alloc(44 + samples.length * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + samples.length * 2, 4); b.write('WAVE', 8);
  b.write('fmt ', 12); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(2, 22);
  b.writeUInt32LE(44100, 24); b.writeUInt32LE(44100 * 4, 28); b.writeUInt16LE(4, 32); b.writeUInt16LE(16, 34);
  b.write('data', 36); b.writeUInt32LE(samples.length * 2, 40);
  samples.forEach((x, i) => b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, x)) * 32767), 44 + i * 2));
  return b;
}
