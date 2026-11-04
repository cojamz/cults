// The rim's words as pictures (wheel pass, Nov 4). Firefox draws text letter by letter for each angle it sits at: the
// rims' words are on curved paths inside the turning board, so a board stopping at a facing it hadn't shown yet re-drew
// every rim letter, a 0.2-0.4 s stall at round II in Firefox (gone with the words hidden; Cor: "spinning the wheel lags
// the game hard"). Here each rim's words, as React laid them out, are drawn once onto a canvas at the screen's own
// resolution, in idle time, for both ways up; the board shows that picture over the hidden <text>, and a turn only moves
// a picture. The <text> stays in place (its words, its box for the hover card, its tests); it shows again whenever its
// picture isn't ready (a new rule, a new size), so nothing is ever missing, only drawn the old way for a moment.
import as500 from '../fonts/as-500.woff2?url';
import as700 from '../fonts/as-700.woff2?url';
import as800 from '../fonts/as-800.woff2?url';
import pixel from '../fonts/handjet.woff2?url';

const SVGNS = 'http://www.w3.org/2000/svg';
const FONTS = [['Alegreya Sans', as500, '500'], ['Alegreya Sans', as700, '700'], ['Alegreya Sans', as800, '800'], ['Cults Pixel', pixel, '100 900']];
// the styles a rim's words take from the page's CSS, written onto the copy drawn as a picture (an image sees no page CSS)
const PROPS = ['fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity', 'paint-order', 'font-family', 'font-weight', 'font-style', 'font-variation-settings', 'font-feature-settings', 'dominant-baseline', 'text-transform', 'opacity', 'letter-spacing'];

export const picturesOn = () => typeof document !== 'undefined' && typeof requestIdleCallback === 'function' && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function'
  && !/jsdom/i.test((typeof navigator !== 'undefined' && navigator.userAgent) || '') && !/[?&]rimpics=0\b/.test(location.search);

let fontCss = null;
const toData = url => fetch(url).then(r => r.blob()).then(b => new Promise((ok, no) => { const f = new FileReader(); f.onload = () => ok(f.result); f.onerror = no; f.readAsDataURL(b); }));
const fontsCss = () => fontCss || (fontCss = Promise.all(FONTS.map(([fam, url, w]) => toData(url).then(d => `@font-face{font-family:'${fam}';src:url(${d}) format('woff2');font-weight:${w}}`))).then(xs => xs.join('')));

// key → { url, box } once drawn, or a promise while drawing
const cache = new Map();
const MAX = 32;
const remember = (key, v) => {
  cache.set(key, v);
  while (cache.size > MAX) { const [k, old] = cache.entries().next().value; cache.delete(k); if (old && old.url) URL.revokeObjectURL(old.url); }
};

/** The words of one rim <text> (with the arc it runs on), styled as the page shows them, as an SVG document's source. */
function source(textEl, arcEl, box, fonts) {
  const copy = textEl.cloneNode(true);
  const from = [textEl, ...textEl.querySelectorAll('*')], to = [copy, ...copy.querySelectorAll('*')];
  from.forEach((el, i) => {
    const cs = getComputedStyle(el);
    const own = PROPS.map(p => `${p}:${cs.getPropertyValue(p)}`).join(';');
    const ls = el.style && el.style.letterSpacing;
    to[i].setAttribute('style', `${own}${ls !== '' && ls != null ? `;letter-spacing:${ls}` : ''}`);
    for (const a of [...to[i].attributes]) if (a.name.startsWith('data-')) to[i].removeAttribute(a.name);
    if (to[i].localName === 'textPath') { to[i].setAttribute('href', '#a'); to[i].removeAttribute('xlink:href'); }
  });
  const [x, y, w, h] = box;
  return `<svg xmlns="${SVGNS}" viewBox="${x} ${y} ${w} ${h}"><style>${fonts}</style><path id="a" d="${arcEl.getAttribute('d')}" fill="none"/>${new XMLSerializer().serializeToString(copy)}</svg>`;
}

/** The text's own identity: what it says, how it's set and where it runs, whichever copy (live or other-way-up) it is. */
export function pictureKey(textEl, arcEl, px) {
  // (no style read here: it runs in the commit; the classes that change the look are in the markup)
  const t = textEl.outerHTML.replace(/ data-(?!rim-res)[a-z-]+="[^"]*"/g, '').replace(/href="#[^"]*"/g, '').replace(/ ?visibility: hidden;?/g, '');
  return `${px.toFixed(3)}|${arcEl.getAttribute('d')}|${t}`;
}

async function draw(textEl, arcEl, box, px) {
  const fonts = await fontsCss();
  const svg = source(textEl, arcEl, box, fonts);
  const W = Math.max(1, Math.ceil(box[2] * px)), H = Math.max(1, Math.ceil(box[3] * px));
  const img = new Image();
  img.width = W; img.height = H;
  img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  await img.decode();
  // fonts inside an SVG image can arrive a beat after it decodes: draw once they're in (a second decode is cheap)
  await new Promise(r => setTimeout(r, 30));
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  if (!g) throw new Error('no canvas');
  g.drawImage(img, 0, 0, W, H);
  const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
  if (!blob) throw new Error('no picture');
  return URL.createObjectURL(blob);
}

/** Start drawing a rim text's picture (in idle time) unless it's drawn or on its way; onReady when it lands. */
export function want(textEl, arcEl, box, px, onReady) {
  const key = pictureKey(textEl, arcEl, px);
  const had = cache.get(key);
  if (had) return had.url ? had : null;
  // drawn in idle time, and never while the board is turning (a picture costs a frame of its own; it waits for a still board)
  const idle = () => new Promise(ok => { const go = () => requestIdleCallback(d => (textEl.closest('.stage.turning') ? setTimeout(go, 400) : ok(d)), { timeout: 3000 }); go(); });
  const p = idle()
    .then(() => draw(textEl, arcEl, box, px))
    .then(url => { remember(key, { url, box }); onReady(); }, () => { cache.set(key, { url: null, box, failed: true }); });
  remember(key, { url: null, box, pending: p });
  return null;
}

/** A picture already drawn for this text, or null. */
export function ready(textEl, arcEl, px) {
  const had = cache.get(pictureKey(textEl, arcEl, px));
  return had && had.url ? had : null;
}

/**
 * Show the pictures that are ready over their rims' words (and the words themselves where none is), in the board's
 * picture layer. Called after every commit that touched the rims; cheap when nothing changed.
 */
export function showPictures(stage, layer, boxOf, px, onReady) {
  if (!stage || !layer) return;
  const seen = new Set();
  for (const t of stage.querySelectorAll('svg.wheel-paper [data-rim-text]')) {
    const q = t.getAttribute('data-rim-text');
    const arc = stage.querySelector(`#rim-arc-${q}`);
    if (!arc) continue;
    const box = boxOf(Number(q));
    // a rim lit for the Reckoning keeps its live words (its glow is a filter, which a picture wouldn't carry)
    const pic = t.classList.contains('lit') ? null : want(t, arc, box, px, onReady);
    let im = layer.querySelector(`image[data-q="${q}"]`);
    if (pic) {
      if (!im) { im = document.createElementNS(SVGNS, 'image'); im.setAttribute('data-q', q); im.setAttribute('preserveAspectRatio', 'none'); layer.appendChild(im); }
      if (im.getAttribute('href') !== pic.url) im.setAttribute('href', pic.url);
      const [x, y, w, h] = pic.box;
      im.setAttribute('x', x); im.setAttribute('y', y); im.setAttribute('width', w); im.setAttribute('height', h);
      t.style.visibility = 'hidden';
      seen.add(q);
    } else {
      t.style.visibility = '';
      if (im) im.remove();
    }
  }
  for (const im of [...layer.querySelectorAll('image[data-q]')]) if (!seen.has(im.getAttribute('data-q'))) im.remove();
  // the other way up, drawn ahead, so the first turn that flips a rim finds its picture
  for (const t of stage.querySelectorAll('svg.wheel-paper [data-rim-alt]')) {
    const q = t.getAttribute('data-rim-alt');
    const arc = stage.querySelector(`#rim-arc-${q}-alt`);
    if (arc) want(t, arc, boxOf(Number(q)), px, () => {});
  }
}
