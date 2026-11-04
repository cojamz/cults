// The rim's words as pictures (wheel pass, Nov 4). Firefox draws text letter by letter for each angle it sits at: the
// rims' words are on curved paths inside the turning board, so a board stopping at a facing it hadn't shown yet re-drew
// every rim letter, a 0.2-0.4 s stall at round II in Firefox (gone with the words hidden; Cor: "spinning the wheel lags
// the game hard"). Here each rim's words are painted once onto a canvas at the screen's own resolution, in idle time,
// for both ways up, letter by letter from where the browser itself laid each letter out on its arc (so spacing, kerning
// and the arc match the live text), in the page's own loaded fonts; the board shows that picture over the hidden <text>,
// and a turn only moves a picture. (The first version drew an SVG copy with the fonts embedded as an image: each one
// cost ~0.2 s of main thread to rasterize at 4x CPU and doubled a game's busy time; this costs a few ms.)
// The <text> stays in place (its words, its box for the hover card, its tests); it shows again whenever its picture
// isn't ready or can't be painted (a new rule, a new size, letters the walk below can't account for), so nothing is
// ever missing, only drawn the old way for a moment.
const SVGNS = 'http://www.w3.org/2000/svg';

export const picturesOn = () => typeof document !== 'undefined' && typeof requestIdleCallback === 'function' && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function'
  && !/jsdom/i.test((typeof navigator !== 'undefined' && navigator.userAgent) || '') && !/[?&]rimpics=0\b/.test(location.search);

// key → { url, box } once drawn, or a promise while drawing
const cache = new Map();
const MAX = 32;
const remember = (key, v) => {
  cache.set(key, v);
  while (cache.size > MAX) { const [k, old] = cache.entries().next().value; cache.delete(k); if (old && old.url) URL.revokeObjectURL(old.url); }
};

/** The text's own identity: what it says, how it's set and where it runs, whichever copy (live or other-way-up) it is. */
export function pictureKey(textEl, arcEl, px) {
  // (no style read here: it runs in the commit; the classes that change the look are in the markup)
  const t = textEl.outerHTML.replace(/ data-(?!rim-res)[a-z-]+="[^"]*"/g, '').replace(/href="#[^"]*"/g, '').replace(/ ?visibility: hidden;?/g, '');
  return `${px.toFixed(3)}|${arcEl.getAttribute('d')}|${t}`;
}

// the text's letters in the order the browser counts them (its addressable characters), each with the element whose
// style it wears; spaces collapse the CSS way across the whole <text>. Null when the count disagrees with the browser's.
function letters(textEl) {
  const out = [];
  let space = true;
  const walk = node => {
    for (const c of node.childNodes) {
      if (c.nodeType === 3) {
        for (const ch of c.data.replace(/[\n\t\r]/g, ' ')) {
          if (ch === ' ') { if (space) continue; space = true; } else space = false;
          for (let i = 0; i < ch.length; i++) out.push({ ch: i ? '' : ch, el: node });
        }
      } else if (c.nodeType === 1) walk(c);
    }
  };
  walk(textEl);
  while (out.length && out[out.length - 1].ch === ' ') out.pop();
  let n;
  try { n = textEl.getNumberOfChars(); } catch { return null; }
  return n === out.length ? out : null;
}

const BASE = { middle: 'middle', central: 'middle', hanging: 'hanging', 'text-before-edge': 'top', 'text-top': 'top', 'text-after-edge': 'bottom', 'text-bottom': 'bottom', ideographic: 'ideographic' };
const num = (v, d) => { const n = parseFloat(v); return Number.isFinite(n) ? n : d; };

function draw(textEl, box, px) {
  const ls = letters(textEl);
  if (!ls) throw new Error('letters');
  const [x0, y0, w, h] = box;
  const W = Math.max(1, Math.ceil(w * px)), H = Math.max(1, Math.ceil(h * px));
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  if (!g) throw new Error('no canvas');
  g.setTransform(W / w, 0, 0, H / h, -x0 * W / w, -y0 * H / h);
  const looks = new Map();
  const look = el => {
    let l = looks.get(el);
    if (l) return l;
    const cs = getComputedStyle(el), up = cs.textTransform;
    l = {
      font: `${cs.fontStyle} ${cs.fontWeight} ${num(cs.fontSize, 12)}px ${cs.fontFamily}`,
      fill: cs.fill && cs.fill !== 'none' ? cs.fill : null, fillA: num(cs.fillOpacity, 1),
      stroke: cs.stroke && cs.stroke !== 'none' ? cs.stroke : null, strokeA: num(cs.strokeOpacity, 1), sw: num(cs.strokeWidth, 1),
      strokeFirst: /^stroke/.test(cs.paintOrder || ''),
      base: BASE[cs.dominantBaseline] || 'alphabetic',
      tf: up === 'uppercase' ? c => c.toUpperCase() : up === 'lowercase' ? c => c.toLowerCase() : c => c,
    };
    looks.set(el, l);
    return l;
  };
  const alpha = num(getComputedStyle(textEl).opacity, 1);
  for (let i = 0; i < ls.length; i++) {
    const { ch, el } = ls[i];
    if (!ch || ch === ' ') continue;
    let p, r;
    try { p = textEl.getStartPositionOfChar(i); r = textEl.getRotationOfChar(i); } catch { continue; }
    const l = look(el);
    g.save();
    g.translate(p.x, p.y); g.rotate(r * Math.PI / 180);
    g.font = l.font; g.textBaseline = l.base; g.textAlign = 'left';
    const c = l.tf(ch);
    const paint = which => {
      if (which === 'stroke' && l.stroke && l.sw > 0) { g.globalAlpha = alpha * l.strokeA; g.strokeStyle = l.stroke; g.lineWidth = l.sw; g.lineJoin = 'round'; g.strokeText(c, 0, 0); }
      if (which === 'fill' && l.fill) { g.globalAlpha = alpha * l.fillA; g.fillStyle = l.fill; g.fillText(c, 0, 0); }
    };
    if (l.strokeFirst) { paint('stroke'); paint('fill'); } else { paint('fill'); paint('stroke'); }
    g.restore();
  }
  return new Promise((ok, no) => cv.toBlob(b => (b ? ok(URL.createObjectURL(b)) : no(new Error('no picture'))), 'image/png'));
}

/** Start drawing a rim text's picture (in idle time) unless it's drawn or on its way; onReady when it lands. */
export function want(textEl, arcEl, box, px, onReady) {
  const key = pictureKey(textEl, arcEl, px);
  const had = cache.get(key);
  if (had) return had.url ? had : null;
  // drawn in idle time, and never while the board is turning (a picture costs a frame of its own; it waits for a still board)
  const idle = () => new Promise(ok => { const go = () => requestIdleCallback(d => (textEl.closest('.stage.turning') ? setTimeout(go, 400) : ok(d)), { timeout: 3000 }); go(); });
  const p = idle()
    .then(() => draw(textEl, box, px))
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
