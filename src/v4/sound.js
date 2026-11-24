// The game's sounds (Cory, 2026-10-15: "yes 100%, and a little noise for a follower as well … like a little high
// pitched gibberish snippet"). Four, all synthesized here with Web Audio, so there are no recordings to license:
//  - place:    a soft wooden click as a minion lands on a space
//  - coin:     a small clink as a resource lands in a pile
//  - fanfare:  a short brass flourish for a round prize's winner
//  - follower: a tiny voice chirping gibberish as followers join (original formant synthesis; a fresh line each time)
//  - meh:      a mean, flat "meh" as Spoilsport spoils a contest at round end (Cory, Nov 12)
//  - each emoji's call: the cat meows, the raven caws, on top of the knock as that player's minion lands (Cor, Nov 4)
// A sound never waits on anything and nothing waits on it: play() schedules on the audio clock and returns. Muted is
// kept in this browser (☰ menu); ?sound=off in the address mutes that page.
//
// This file has no imports on purpose: scripts/v4-sounds.mjs renders the same voices offline to .wav files.

// ---------- the voices (pure: any BaseAudioContext, a destination, a start time) ----------

/** A small seeded random, so a rendered file is the same every time. */
export function rng(seed = 1) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

const noiseBuf = new WeakMap();
function noise(ctx) {
  let b = noiseBuf.get(ctx);
  if (!b) {
    b = ctx.createBuffer(1, Math.round(ctx.sampleRate * 0.5), ctx.sampleRate);
    const d = b.getChannelData(0), r = rng(7);
    for (let i = 0; i < d.length; i++) d[i] = r() * 2 - 1;
    noiseBuf.set(ctx, b);
  }
  return b;
}
const env = (ctx, dest, t, peak, attack, decay) => {
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  g.connect(dest);
  return g;
};
const tone = (ctx, type, f, t, dur, out) => {
  const o = ctx.createOscillator();
  o.type = type; o.frequency.setValueAtTime(f, t);
  o.connect(out); o.start(t); o.stop(t + dur + 0.02);
  return o;
};

/** A minion set down on wood: a felted knock and a short tick on top. */
function place(ctx, dest, t, r) {
  const v = 1 + (r() - 0.5) * 0.08;
  const n = ctx.createBufferSource(); n.buffer = noise(ctx);
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2100 * v; bp.Q.value = 1.4;
  n.connect(bp); bp.connect(env(ctx, dest, t, 0.55, 0.001, 0.03));
  n.start(t, r() * 0.3); n.stop(t + 0.05);
  const k = tone(ctx, 'sine', 210 * v, t, 0.1, env(ctx, dest, t, 0.7, 0.002, 0.075));
  k.frequency.exponentialRampToValueAtTime(120 * v, t + 0.06);
  tone(ctx, 'triangle', 820 * v, t, 0.06, env(ctx, dest, t, 0.16, 0.001, 0.04));
  return 0.12;
}

/** A coin landing on a pile: one strike of a small inharmonic bell per coin (Cory: "the sounds should line up with
 *  the number of coins"). Four or more land as one bundle, so they sound as one handful: a quick shower of strikes. */
function coin(ctx, dest, t, r, n = 1) {
  const f = 2350 * (1 + (r() - 0.5) * 0.12);
  const strike = (at, ff, amp) => {
    [[1, 0.26, 0.32], [2.76, 0.12, 0.17], [5.4, 0.05, 0.07]].forEach(([m, a, d]) => tone(ctx, 'sine', ff * m, at, d, env(ctx, dest, at, a * amp, 0.002, d)));
    const n = ctx.createBufferSource(); n.buffer = noise(ctx);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 6000;
    n.connect(hp); hp.connect(env(ctx, dest, at, 0.12 * amp, 0.001, 0.008));
    n.start(at, r() * 0.3); n.stop(at + 0.02);
  };
  if (n < 4) { strike(t, f, 1); return 0.35; }
  // the handful: up to nine strikes inside 140ms, each its own coin's pitch, the first loudest, then a soft shimmer
  const k = Math.min(9, 3 + Math.round(n / 2));
  for (let i = 0; i < k; i++) strike(t + (i ? 0.01 + r() * 0.13 : 0), f * (0.88 + r() * 0.3), (i ? 0.45 + r() * 0.25 : 1) / Math.sqrt(k / 3));
  const sh = ctx.createBufferSource(); sh.buffer = noise(ctx);
  const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 7000; hp.Q.value = 0.8;
  sh.connect(hp); hp.connect(env(ctx, dest, t, 0.05, 0.03, 0.18));
  sh.start(t, r() * 0.2); sh.stop(t + 0.25);
  return 0.5;
}

/** A round prize's winner: a quick rising call and a held chord, warm brass with a glint on top. */
function fanfare(ctx, dest, t) {
  const brass = (f, at, dur, amp) => {
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 2;
    lp.frequency.setValueAtTime(700, at);
    lp.frequency.exponentialRampToValueAtTime(2800, at + 0.04);
    lp.frequency.exponentialRampToValueAtTime(1500, at + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(amp, at + 0.018);
    g.gain.setValueAtTime(amp * 0.8, at + Math.max(0.03, dur - 0.05));
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur + 0.06);
    lp.connect(g); g.connect(dest);
    for (const det of [-6, 5]) { const o = tone(ctx, 'sawtooth', f, at, dur + 0.08, lp); o.detune.value = det; }
  };
  const step = 0.085;
  [392, 523.25, 659.25].forEach((f, i) => brass(f, t + i * step, step * 0.9, 0.11));
  const hold = t + 3 * step;
  [523.25, 659.25, 783.99, 1046.5].forEach(f => brass(f, hold, 0.42, 0.075));
  [2093, 2637].forEach((f, i) => tone(ctx, 'sine', f, hold + 0.03 + i * 0.05, 0.4, env(ctx, dest, hold + 0.03 + i * 0.05, 0.05, 0.003, 0.35)));
  return hold - t + 0.55;
}

// The follower's voice. A buzzy source at a small creature's pitch goes through three formant filters (the mouth),
// which glide from a consonant to a vowel each syllable; the pitch bobs and the line ends rising or falling. Every call
// makes up a new word from a seeded random, so it never repeats exactly.
const VOWELS = { a: [1050, 1650, 3300], e: [620, 2500, 3500], i: [420, 2900, 3800], o: [700, 1150, 3100], u: [460, 1050, 2900] };
const ONSETS = { b: [300, 900], d: [300, 1900], g: [300, 2300], m: [300, 1100], n: [300, 1700], l: [380, 1400], p: [300, 900], t: [300, 1900], k: [300, 2300], h: null, '': null };
const BURST = { p: 1200, t: 4200, k: 2600 };
/** A made-up word: [onset, vowel] pairs. */
export function gibberish(r, most = 4) {
  const n = 2 + Math.floor(r() * (most - 1));
  const on = Object.keys(ONSETS), vo = Object.keys(VOWELS);
  const out = [];
  // sometimes a giggle: one syllable said three times, falling
  if (most > 2 && r() < 0.2) { const s = [['h', 't'][Math.floor(r() * 2)], ['e', 'i'][Math.floor(r() * 2)]]; return [s, s, s]; }
  for (let i = 0; i < n; i++) out.push([on[Math.floor(r() * on.length)], vo[Math.floor(r() * vo.length)]]);
  return out;
}
function follower(ctx, dest, t, r, o = {}) {
  const word = o.word || gibberish(r, o.most || 4);
  const giggle = word.length === 3 && word[0] === word[1] && word[1] === word[2];
  const f0 = (560 + r() * 160) * (o.pitch || 1);
  const rise = o.rise != null ? o.rise : !giggle && r() < 0.55;
  const src = ctx.createOscillator(); src.type = 'sawtooth';
  const vib = ctx.createOscillator(); vib.frequency.value = 6 + r() * 3;
  const vibAmt = ctx.createGain(); vibAmt.gain.value = f0 * 0.025;
  vib.connect(vibAmt); vibAmt.connect(src.frequency);
  const mouth = ctx.createGain(); mouth.gain.value = 0.0001;
  const filters = [[8, 1], [12, 0.6], [14, 0.25]].map(([q, a]) => {
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q;
    const g = ctx.createGain(); g.gain.value = a * 3.2;
    src.connect(bp); bp.connect(g); g.connect(mouth);
    return bp;
  });
  const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 260;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 6500;
  // an even voice whatever the vowel (an 'i' and an 'a' differ by 10 dB through the same mouth)
  const even = ctx.createDynamicsCompressor();
  even.threshold.value = -30; even.knee.value = 10; even.ratio.value = 6; even.attack.value = 0.003; even.release.value = 0.08;
  const lift = ctx.createGain(); lift.gain.value = 2.2;
  mouth.connect(hp); hp.connect(lp); lp.connect(even); even.connect(lift); lift.connect(dest);

  let at = t;
  word.forEach(([c, v], i) => {
    const last = i === word.length - 1;
    const dur = o.quick ? 0.16 + r() * 0.04 : giggle ? 0.075 : last ? 0.13 + r() * 0.05 : 0.07 + r() * 0.05;
    const gap = giggle ? 0.035 : 0.012 + r() * 0.02;
    // the pitch: a bob per syllable, and the tail of the line rising (a question) or falling (a sigh)
    const p = giggle ? f0 * (1.15 - i * 0.09) : f0 * (1 + (r() - 0.5) * 0.25) * (last ? (rise ? 1.1 : 0.95) : 1);
    src.frequency.setValueAtTime(p, at);
    src.frequency.linearRampToValueAtTime(last ? p * (rise ? 1.35 : 0.78) : p * (1 + (r() - 0.5) * 0.12), at + dur);
    // the mouth: from the consonant's shape to the vowel's
    const target = VOWELS[v], from = ONSETS[c];
    filters.forEach((bp, k) => {
      const end = target[k] * (1 + (r() - 0.5) * 0.06);
      const start = from && k < 2 ? from[k] : end;
      bp.frequency.setValueAtTime(start, at);
      bp.frequency.linearRampToValueAtTime(end, at + Math.min(0.035, dur * 0.4));
    });
    // the loudness: a nasal or voiced onset swells in; an unvoiced one starts after its puff of air
    const soft = c === 'm' || c === 'n' || c === 'l' || c === 'h';
    const open = at + (BURST[c] ? 0.012 : 0);
    mouth.gain.setValueAtTime(0.0001, at);
    mouth.gain.exponentialRampToValueAtTime(0.5, open + (soft ? 0.025 : 0.008));
    mouth.gain.setValueAtTime(0.45, at + dur * 0.7);
    mouth.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    if (BURST[c] || c === 'h') {
      const n = ctx.createBufferSource(); n.buffer = noise(ctx);
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = BURST[c] || 3000; bp.Q.value = 1.5;
      n.connect(bp); bp.connect(env(ctx, dest, at, c === 'h' ? 0.05 : 0.09, 0.002, c === 'h' ? 0.03 : 0.012));
      n.start(at, r() * 0.3); n.stop(at + 0.05);
    }
    at += dur + gap;
  });
  src.start(t); vib.start(t);
  src.stop(at + 0.05); vib.stop(at + 0.05);
  return at - t;
}

// Many followers at once (Cory, 2026-10-15: "the collective sound should be good, not just the same clip played all
// at once x3"): a little crowd, not a stack. Each voice is its own creature (its own pitch, word, and place left to
// right), they come in staggered and overlap like a cheer, and they all end rising together; the bigger the haul, the
// more voices (up to five) and the brighter the finish, while the whole stays about as loud as one.
const PITCHES = [1, 1.26, 0.86, 1.12, 1.4];
/** Voice i of a few: its own pitch, word and place left to right. */
function crowdVoice(ctx, dest, t, r, i, o = {}) {
  const g = ctx.createGain(); g.gain.value = o.gain ?? 1;
  let out = g;
  if (i && ctx.createStereoPanner) { const pan = ctx.createStereoPanner(); pan.pan.value = (i % 2 ? -1 : 1) * Math.min(0.8, 0.25 * Math.ceil(i / 2) + 0.15); g.connect(pan); out = pan; }
  out.connect(dest);
  return follower(ctx, g, t, r, i ? { pitch: PITCHES[i % PITCHES.length] * (1 + (r() - 0.5) * 0.06), ...o } : o);
}
/** Four or more followers at once (Cory: "they should just be all together in a quick sound"): one quick cheer, a
 *  handful of voices crying out together on one rising "yay", with two bright chimes. The bigger the haul, the more
 *  voices (four to six) and the higher it lifts. */
function cheer(ctx, dest, t, r, n) {
  const k = Math.min(6, 4 + Math.floor((n - 4) / 4));
  const lift = 1 + Math.min(0.12, (n - 4) * 0.01);
  let len = 0;
  for (let i = 0; i < k; i++) {
    const g = ctx.createGain(); g.gain.value = 0.9 / Math.sqrt(k);
    let out = g;
    if (ctx.createStereoPanner) { const pan = ctx.createStereoPanner(); pan.pan.value = (i / (k - 1) - 0.5) * 1.4; g.connect(pan); out = pan; }
    out.connect(dest);
    len = Math.max(len, follower(ctx, g, t + r() * 0.03, r, { pitch: PITCHES[i % PITCHES.length] * lift * (1 + (r() - 0.5) * 0.08), word: [[r() < 0.5 ? '' : 'h', r() < 0.6 ? 'e' : 'a']], rise: true, quick: true }));
  }
  [1568, 2093].forEach((f, j) => tone(ctx, 'sine', f * lift, t + 0.05 + j * 0.05, 0.25, env(ctx, dest, t + 0.05 + j * 0.05, 0.03, 0.004, 0.22)));
  return Math.max(len, 0.35);
}
/** n followers: one voice each up to three, staggered as their pieces land; four or more, one quick cheer. */
function crowd(ctx, dest, t, r, n = 1) {
  if (n >= 4) return cheer(ctx, dest, t, r, n);
  let len = 0;
  for (let i = 0; i < n; i++) len = Math.max(len, i * 0.06 + crowdVoice(ctx, dest, t + i * 0.06, r, i, { most: 3, gain: i ? 0.65 : 1 }));
  return len;
}

// A shared quiet two-syllable greeting for a member landing; independent of its changing name/art.
function member(ctx, dest, t, r) {
  return follower(ctx, dest, t, r, { word: [['h', 'u'], ['m', 'a']], pitch: 0.82, rise: false });
}
// Spoilsport spoils a contest at round end: a mean, flat "meh" (Cory, Nov 12: "a little sound thats like 'meh'", "like
// a mean 'meh'"). A low nasal voice that swells in on the m, holds a sneering "eh" that sags in pitch, with a fast rough
// flutter in its throat, and drops off; about half a second.
function meh(ctx, dest, t, r) {
  const f0 = 175 + r() * 15, dur = 0.5;
  const src = ctx.createOscillator(); src.type = 'sawtooth';
  src.frequency.setValueAtTime(f0 * 1.08, t);
  src.frequency.linearRampToValueAtTime(f0, t + 0.09);
  src.frequency.linearRampToValueAtTime(f0 * 0.78, t + dur);
  // the sneer: a rough flutter in the throat, quick and uneven
  const rough = ctx.createOscillator(); rough.type = 'square'; rough.frequency.value = 31 + r() * 4;
  const roughAmt = ctx.createGain(); roughAmt.gain.value = f0 * 0.035;
  rough.connect(roughAmt); roughAmt.connect(src.frequency);
  const mouth = ctx.createGain(); mouth.gain.value = 0.0001;
  // the m (lips closed, one low resonance) opening to a pinched, nasal "eh"
  [[8, 1, 300, 600], [12, 0.8, 1100, 2100], [10, 0.45, 2600, 3300]].forEach(([q, a, from, to]) => {
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q;
    bp.frequency.setValueAtTime(from, t);
    bp.frequency.linearRampToValueAtTime(to, t + 0.08);
    const g = ctx.createGain(); g.gain.value = a * 3.2;
    src.connect(bp); bp.connect(g); g.connect(mouth);
  });
  // a nose: a dip around 1 kHz
  const nose = ctx.createBiquadFilter(); nose.type = 'notch'; nose.frequency.value = 1000; nose.Q.value = 2;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 5000;
  const even = ctx.createDynamicsCompressor();
  even.threshold.value = -30; even.knee.value = 10; even.ratio.value = 6; even.attack.value = 0.003; even.release.value = 0.08;
  const lift = ctx.createGain(); lift.gain.value = 2.4;
  mouth.connect(nose); nose.connect(lp); lp.connect(even); even.connect(lift); lift.connect(dest);
  mouth.gain.setValueAtTime(0.0001, t);
  mouth.gain.exponentialRampToValueAtTime(0.3, t + 0.05);
  mouth.gain.exponentialRampToValueAtTime(0.55, t + 0.1);
  mouth.gain.setValueAtTime(0.5, t + dur * 0.7);
  mouth.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.start(t); rough.start(t);
  src.stop(t + dur + 0.05); rough.stop(t + dur + 0.05);
  return dur;
}
export const VOICES = { place, coin, fanfare, follower: crowd, member, meh };
// each voice's loudness against the others (set by ear and by peak, scripts/v4-sounds.mjs)
export const LEVEL = { place: 0.55, coin: 0.7, fanfare: 0.75, follower: 0.32, member: 0.2, meh: 0.22 };

/** Render a voice into ctx at time t (offline rendering uses this too). Returns its length in seconds. */
export function voice(ctx, dest, name, t, seed = Math.floor(Math.random() * 1e9), n = 1) {
  const fn = VOICES[name];
  if (!fn) return 0;
  const g = ctx.createGain(); g.gain.value = LEVEL[name] ?? 0.5; g.connect(dest);
  return fn(ctx, g, t, rng(seed), n);
}

// ---------- each emoji's call (Cor, 2026-11-04: "little sounds when the emojis are played. For each of the emojis we
// have … like when a minion is placed on an action it makes a little sound") ----------
// A minion landing on a space plays a quiet knock and its emoji's own short call on top: the cat meows, the robot
// beeps. Each is under half a second, all synthesized here (no recordings to license).
const sweep = (ctx, type, f0, f1, t, dur, out) => {
  const o = tone(ctx, type, f0, t, dur, out);
  o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  return o;
};
/** Filtered noise from t for dur seconds; returns the filter so a call can move it. */
const hiss = (ctx, dest, t, dur, r, { type = 'bandpass', f = 1000, q = 1, peak = 0.3, attack = 0.005 } = {}) => {
  const n = ctx.createBufferSource(); n.buffer = noise(ctx); n.loop = true;
  const bp = ctx.createBiquadFilter(); bp.type = type; bp.frequency.value = f; bp.Q.value = q;
  n.connect(bp); bp.connect(env(ctx, dest, t, peak, attack, Math.max(0.01, dur - attack)));
  n.start(t, r() * 0.3); n.stop(t + dur + 0.03);
  return bp;
};
/** A held note: gain up over `attack`, holds, falls away by t + dur. */
const held = (ctx, dest, t, peak, attack, dur) => {
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + attack);
  g.gain.setValueAtTime(peak, t + dur * 0.6);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  g.connect(dest);
  return g;
};
/** A wobble on a param: an LFO of `rate` Hz and `depth` added to it from t for dur. */
const wobble = (ctx, param, t, dur, rate, depth, type = 'sine') => {
  const l = ctx.createOscillator(); l.type = type; l.frequency.value = rate;
  const d = ctx.createGain(); d.gain.value = depth;
  l.connect(d); d.connect(param); l.start(t); l.stop(t + dur + 0.02);
  return d;
};


/** A voiced animal call: a sawtooth throat through moving mouth shapes. `f`: pitch at start, a third of the way and
 *  the end; `formants`: [[start, a third, end], q, gain]; `trem` [rate, depth] shakes the loudness, `vib` [rate, Hz] the
 *  pitch, `rasp` [rate, depth] roughens it (square wobble on the loudness). Returns its length in seconds. */
function voiced(ctx, dest, t, d, { f, formants, peak = 0.4, attack = 0.02, trem = null, vib = null, rasp = null }) {
  let out = held(ctx, dest, t, peak, attack, d);
  if (trem) { const g = ctx.createGain(); g.gain.value = 1 - trem[1] / 2; g.connect(out); wobble(ctx, g.gain, t, d, trem[0], trem[1] / 2); out = g; }
  if (rasp) { const g = ctx.createGain(); g.gain.value = 1 - rasp[1] / 2; g.connect(out); wobble(ctx, g.gain, t, d, rasp[0], rasp[1] / 2, 'square'); out = g; }
  const src = ctx.createOscillator(); src.type = 'sawtooth';
  src.frequency.setValueAtTime(f[0], t); src.frequency.linearRampToValueAtTime(f[1], t + d / 3); src.frequency.linearRampToValueAtTime(f[2], t + d);
  if (vib) wobble(ctx, src.frequency, t, d, vib[0], vib[1]);
  formants.forEach(([fs, q, a]) => {
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q;
    bp.frequency.setValueAtTime(fs[0], t); bp.frequency.linearRampToValueAtTime(fs[1], t + d / 3); bp.frequency.linearRampToValueAtTime(fs[2], t + d);
    const g = ctx.createGain(); g.gain.value = a * 2.5; src.connect(bp); bp.connect(g); g.connect(out);
  });
  src.start(t); src.stop(t + d + 0.02);
  return d;
}

const CALLS = {
  // a cricket chirping twice: two bursts of three quick high pulses (Cor, Nov 4: "should maybe do two chirps")
  bug(ctx, dest, t) {
    for (let i = 0; i < 6; i++) {
      const at = t + (i % 3) * 0.035 + (i >= 3 ? 0.17 : 0);
      const o = tone(ctx, 'sine', 4300, at, 0.025, held(ctx, dest, at, 0.13, 0.004, 0.025));
      wobble(ctx, o.frequency, at, 0.025, 90, 250);
    }
    return 0.32;
  },
  // a soft wavering "oooo" that drifts down
  ghost(ctx, dest, t) {
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400; lp.connect(held(ctx, dest, t, 0.22, 0.09, 0.48));
    const o = tone(ctx, 'sine', 560, t, 0.48, lp);
    o.frequency.linearRampToValueAtTime(720, t + 0.15);
    o.frequency.linearRampToValueAtTime(470, t + 0.48);
    wobble(ctx, o.frequency, t, 0.48, 6, 18);
    return 0.5;
  },
  // a small "mew": the mouth opens from m through a to u while the pitch rises and falls
  cat(ctx, dest, t) {
    const d = 0.32;
    const src = tone(ctx, 'sawtooth', 620, t, d, ctx.createGain());
    src.disconnect();
    src.frequency.linearRampToValueAtTime(820, t + 0.1);
    src.frequency.linearRampToValueAtTime(560, t + d);
    const out = held(ctx, dest, t, 0.5, 0.05, d);
    [[[420, 1050, 480], 7, 1], [[2400, 1650, 1000], 10, 0.5]].forEach(([fs, q, a]) => {
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q;
      bp.frequency.setValueAtTime(fs[0], t);
      bp.frequency.linearRampToValueAtTime(fs[1], t + 0.1);
      bp.frequency.linearRampToValueAtTime(fs[2], t + d);
      const g = ctx.createGain(); g.gain.value = a;
      src.connect(bp); bp.connect(g); g.connect(out);
    });
    return d + 0.02;
  },
  // "rib-bit": two croaks, the second a little higher
  frog(ctx, dest, t) {
    const lp = ctx.createBiquadFilter(); lp.type = 'bandpass'; lp.frequency.value = 600; lp.Q.value = 2; lp.connect(dest);
    // (Cor, Nov 4: "slightly longer"): a few more pulses in each croak
    [[0, 118, 6], [0.18, 140, 5]].forEach(([at0, f, k]) => {
      for (let i = 0; i < k; i++) {
        const at = t + at0 + i * 0.024;
        tone(ctx, 'sawtooth', f, at, 0.016, held(ctx, lp, at, 0.5, 0.003, 0.016));
      }
    });
    return 0.32;
  },
  // a low "heh heh heh"
  pumpkin(ctx, dest, t, r) {
    const s = ['h', 'e'];
    return follower(ctx, dest, t, r, { word: [s, s, s], pitch: 0.55 });
  },
  // bones rattling: a few dry wooden taps, tumbling down
  skull(ctx, dest, t, r) {
    [1500, 1250, 1380, 1100].forEach((f, i) => {
      const at = t + i * 0.045 + r() * 0.012;
      tone(ctx, 'sine', f, at, 0.06, env(ctx, dest, at, 0.16, 0.001, 0.05));
      tone(ctx, 'sine', f * 3.9, at, 0.02, env(ctx, dest, at, 0.05, 0.001, 0.015));
      hiss(ctx, dest, at, 0.012, r, { f: 3000, q: 2, peak: 0.08, attack: 0.001 });
    });
    return 0.25;
  },
  // a soft pop and a puff of spores (Cor's redo, Nov 4)
  mushroom(ctx, dest, t, r) {
    sweep(ctx, 'sine', 950, 320, t, 0.05, env(ctx, dest, t, 0.35, 0.002, 0.05));
    hiss(ctx, dest, t, 0.008, r, { f: 2000, q: 1, peak: 0.15, attack: 0.001 });
    const bp = hiss(ctx, dest, t + 0.03, 0.26, r, { f: 1200, q: 0.8, peak: 0.12, attack: 0.04 });
    bp.frequency.setValueAtTime(1200, t + 0.03);
    bp.frequency.exponentialRampToValueAtTime(3500, t + 0.29);
    return 0.32;
  },
  // a bee flying past, left to right: a fluttering buzz that starts at once and fades (Cor's redo, Nov 4)
  bee(ctx, dest, t, r) {
    const d = 0.5;
    // loud from the first moment, held, then fading as it flies off (Cor: a slow swell "feels like its on a delay";
    // fading from the start was "too short")
    let out = held(ctx, dest, t, 0.14, 0.01, d);
    if (ctx.createStereoPanner) {
      const pan = ctx.createStereoPanner(); pan.pan.setValueAtTime(-0.2, t); pan.pan.linearRampToValueAtTime(0.6, t + d);
      pan.connect(out); out = pan;
    }
    const nasal = ctx.createBiquadFilter(); nasal.type = 'bandpass'; nasal.frequency.value = 1300; nasal.Q.value = 1.2; nasal.connect(out);
    const flutter = ctx.createGain(); flutter.gain.value = 0.75; flutter.connect(nasal);
    wobble(ctx, flutter.gain, t, d, 37, 0.25, 'triangle');
    const o = tone(ctx, 'sawtooth', 235, t, d, flutter);
    o.frequency.linearRampToValueAtTime(262, t + d * 0.5);
    o.frequency.linearRampToValueAtTime(222, t + d);
    wobble(ctx, o.frequency, t, d, 7 + r() * 2, 6);
    return d + 0.02;
  },
  // ---- the old village's minions (Cory, 2026-11-24: "We'll then also have to redo the noises") ----
  // a raven's "caw, caw": two rough, falling calls with a rasp in them
  raven(ctx, dest, t, r) {
    [[0, 640], [0.24, 600]].forEach(([at0, f]) => voiced(ctx, dest, t + at0, 0.17, { f: [f, f * 1.08, f * 0.72], formants: [[[700, 1000, 800], 6, 1], [[1500, 1700, 1400], 8, 0.6]], peak: 0.45, attack: 0.012, rasp: [70, 0.45] }));
    hiss(ctx, dest, t, 0.1, r, { f: 2400, q: 1.5, peak: 0.04, attack: 0.01 });
    return 0.44;
  },
  // a goat's bleat: "meh-eh-eh", a quick shaky warble
  goat(ctx, dest, t) {
    return voiced(ctx, dest, t, 0.46, { f: [470, 520, 430], formants: [[[500, 560, 520], 7, 1], [[1700, 1850, 1700], 10, 0.5]], peak: 0.45, attack: 0.03, trem: [11, 0.55], vib: [11, 22] }) + 0.02;
  },
  // a sheep's "baa": lower and rounder than the goat, one slow wobble
  sheep(ctx, dest, t) {
    return voiced(ctx, dest, t, 0.5, { f: [250, 285, 235], formants: [[[350, 780, 700], 6, 1], [[900, 1250, 1150], 8, 0.55]], peak: 0.5, attack: 0.05, trem: [6.5, 0.3], vib: [6.5, 6] }) + 0.02;
  },
  // a rat's "eek eek": two sharp squeaks
  rat(ctx, dest, t) {
    [[0, 3000], [0.12, 3400]].forEach(([at0, f]) => {
      const at = t + at0;
      const o = sweep(ctx, 'sine', f, f * 1.35, at, 0.07, held(ctx, dest, at, 0.16, 0.004, 0.07));
      wobble(ctx, o.frequency, at, 0.07, 45, 120);
      tone(ctx, 'triangle', f * 2, at, 0.05, env(ctx, dest, at, 0.02, 0.003, 0.045));
    });
    return 0.22;
  },
  // an owl's "hoo-hoo": two soft breathy low notes, the second longer
  owl(ctx, dest, t, r) {
    [[0, 0.13, 400], [0.2, 0.3, 370]].forEach(([at0, d, f]) => {
      const at = t + at0;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.connect(held(ctx, dest, at, 0.32, 0.04, d));
      const o = tone(ctx, 'sine', f, at, d, lp); o.frequency.linearRampToValueAtTime(f * 0.94, at + d);
      tone(ctx, 'triangle', f * 2, at, d, env(ctx, lp, at, 0.04, 0.03, d));
      hiss(ctx, dest, at, d, r, { f: 700, q: 2, peak: 0.025, attack: 0.03 });
    });
    return 0.52;
  },
  // a pig's "oink": a nasal grunt that rises and drops, then a short snort
  pig(ctx, dest, t, r) {
    voiced(ctx, dest, t, 0.2, { f: [170, 250, 160], formants: [[[600, 900, 700], 5, 1], [[1600, 1500, 1400], 7, 0.5]], peak: 0.5, attack: 0.015, rasp: [38, 0.5] });
    const bp = hiss(ctx, dest, t + 0.26, 0.08, r, { f: 900, q: 3, peak: 0.2, attack: 0.008 });
    wobble(ctx, bp.frequency, t + 0.26, 0.08, 40, 300, 'square');
    return 0.36;
  },
  // a rooster's crow, short: "cock-a-doodle-doo" in four quick syllables, the last held and falling
  rooster(ctx, dest, t) {
    let at = t;
    [[0.08, 560, 620], [0.07, 640, 680], [0.09, 700, 760], [0.3, 820, 560]].forEach(([d, f0, f1], i) => {
      voiced(ctx, dest, at, d, { f: [f0, f1, i === 3 ? f1 * 0.9 : f1], formants: [[[650, 900, 600], 6, 1], [[1400, 1700, 1300], 9, 0.5]], peak: 0.36, attack: 0.012, rasp: [55, 0.25], vib: i === 3 ? [7, 10] : null });
      at += d + 0.02;
    });
    return at - t + 0.02;
  },
  // a bat's chitter: five tiny high chirps, quick as a flutter
  bat(ctx, dest, t, r) {
    for (let i = 0; i < 5; i++) {
      const at = t + i * 0.045 + r() * 0.008, f = 6200 + r() * 900;
      sweep(ctx, 'sine', f, f * 0.62, at, 0.018, env(ctx, dest, at, 0.14, 0.002, 0.018));
    }
    return 0.26;
  },
  // a snail sliding: a slow wet squelch that sinks, and a little pop as it lets go
  snail(ctx, dest, t, r) {
    const d = 0.34;
    const bp = hiss(ctx, dest, t, d, r, { f: 1300, q: 5, peak: 0.22, attack: 0.06 });
    bp.frequency.setValueAtTime(1300, t); bp.frequency.exponentialRampToValueAtTime(380, t + d);
    wobble(ctx, bp.frequency, t, d, 14, 160);
    sweep(ctx, 'sine', 700, 1400, t + d - 0.02, 0.04, env(ctx, dest, t + d - 0.02, 0.18, 0.002, 0.04));
    return d + 0.05;
  },
  // a hedgehog's snuffle: three quick sniffs through a small nose
  hedgehog(ctx, dest, t, r) {
    [0, 0.08, 0.16].forEach((at0, i) => {
      const at = t + at0;
      const bp = hiss(ctx, dest, at, 0.05, r, { f: 2200, q: 4, peak: 0.3, attack: 0.006 });
      bp.frequency.setValueAtTime(1800 + i * 150, at); bp.frequency.exponentialRampToValueAtTime(3200, at + 0.05);
    });
    return 0.24;
  },
  // a fox's "yip yip": two bright little barks, the second higher
  fox(ctx, dest, t) {
    [[0, 760], [0.15, 880]].forEach(([at0, f]) => voiced(ctx, dest, t + at0, 0.09, { f: [f, f * 1.45, f * 1.05], formants: [[[500, 900, 700], 6, 1], [[2200, 2500, 2200], 10, 0.6]], peak: 0.4, attack: 0.006, rasp: [90, 0.2] }));
    return 0.27;
  },
  // a spider skittering: eight dry little ticks of legs, hurrying
  spider(ctx, dest, t, r) {
    let at = t;
    for (let i = 0; i < 8; i++) {
      hiss(ctx, dest, at, 0.007, r, { type: 'highpass', f: 4500 + (i % 2) * 1500, peak: 0.24, attack: 0.001 });
      tone(ctx, 'sine', 2300 + (i % 2) * 500, at, 0.012, env(ctx, dest, at, 0.05, 0.001, 0.01));
      at += 0.034 - i * 0.002 + r() * 0.006;
    }
    return at - t + 0.02;
  },
  // a gnome's little "hee-hee", high and quick
  gnome(ctx, dest, t, r) {
    const s = ['h', 'i'];
    return follower(ctx, dest, t, r, { word: [s, s], pitch: 1.25 });
  },
  // a hare thumping its back foot: two soft low thuds and a quick sniff
  hare(ctx, dest, t, r) {
    [0, 0.13].forEach(at0 => {
      const at = t + at0;
      sweep(ctx, 'sine', 150, 60, at, 0.09, env(ctx, dest, at, 0.6, 0.003, 0.09));
      hiss(ctx, dest, at, 0.02, r, { type: 'lowpass', f: 700, peak: 0.2, attack: 0.001 });
    });
    const bp = hiss(ctx, dest, t + 0.27, 0.05, r, { f: 2600, q: 4, peak: 0.18, attack: 0.006 });
    bp.frequency.setValueAtTime(2200, t + 0.27); bp.frequency.exponentialRampToValueAtTime(3600, t + 0.32);
    return 0.36;
  },
  // a goose's "honk": a nasal blare, then a shorter second one
  goose(ctx, dest, t) {
    [[0, 0.16, 330], [0.2, 0.11, 360]].forEach(([at0, d, f]) => voiced(ctx, dest, t + at0, d, { f: [f, f * 1.12, f * 0.95], formants: [[[900, 1100, 950], 4, 1], [[2300, 2500, 2300], 6, 0.7]], peak: 0.4, attack: 0.01, rasp: [60, 0.35] }));
    return 0.33;
  },
  // a badger's grumble: a low, rough snuffling growl
  badger(ctx, dest, t, r) {
    voiced(ctx, dest, t, 0.32, { f: [120, 135, 105], formants: [[[400, 520, 380], 5, 1], [[900, 1000, 850], 7, 0.5]], peak: 0.45, attack: 0.03, rasp: [24, 0.7] });
    [0.05, 0.16].forEach(k => hiss(ctx, dest, t + k, 0.05, r, { f: 1600, q: 3, peak: 0.12, attack: 0.008 }));
    return 0.34;
  },
};
/** The emoji ids that have a call. */
export const CALL_IDS = Object.keys(CALLS);
// each call's loudness against the others (set by peak and rms, scripts/v4-sounds.mjs); a call sits under the place knock
const CALL_LEVEL = { bug: 0.64, ghost: 0.44, cat: 0.71, frog: 0.93, pumpkin: 0.22, skull: 1.41, mushroom: 1.3, bee: 3.67, raven: 0.54, goat: 0.22, sheep: 0.4, rat: 0.58, owl: 0.25, pig: 0.66, rooster: 0.38, bat: 2.43, snail: 2.82, hedgehog: 5.82, fox: 0.58, gnome: 0.17, hare: 0.52, goose: 0.46, badger: 0.62, spider: 2.09 };
const CALL_MASTER = 0.6;
/** Render emoji `id`'s call into ctx at time t. Returns its length in seconds (0 for an emoji with no call). */
export function call(ctx, dest, id, t, seed = Math.floor(Math.random() * 1e9)) {
  const fn = CALLS[id];
  if (!fn) return 0;
  const g = ctx.createGain(); g.gain.value = CALL_MASTER * (CALL_LEVEL[id] ?? 1); g.connect(dest);
  return fn(ctx, g, t, rng(seed));
}

// ---------- the player (the browser only) ----------

const KEY = 'patrons.v4.sound';
const urlOff = () => { try { return new URLSearchParams(globalThis.location?.search || '').get('sound') === 'off'; } catch { return false; } };
let on = (() => { if (urlOff()) return false; try { return globalThis.localStorage?.getItem(KEY) !== 'off'; } catch { return true; } })();
const subs = new Set();
export const soundOn = () => on;
export const onSound = fn => { subs.add(fn); return () => subs.delete(fn); };
export function setSound(v) {
  v = !!v;
  if (v === on) return;
  on = v;
  try { globalThis.localStorage?.setItem(KEY, v ? 'on' : 'off'); } catch { /* private window */ }
  if (v) unlock();
  for (const fn of subs) fn(v);
}

// how loud, 0 to 1, kept in this browser (Cory, 2026-10-27, from Mike's playtest: "turning down audio noises with a
// slider"); off stays its own switch
const VOL_KEY = 'patrons.v4.volume';
let vol = (() => { try { const v = Number(globalThis.localStorage?.getItem(VOL_KEY)); return Number.isFinite(v) && globalThis.localStorage?.getItem(VOL_KEY) != null ? Math.min(1, Math.max(0, v)) : 1; } catch { return 1; } })();
const volSubs = new Set();
export const soundVolume = () => vol;
export const onVolume = fn => { volSubs.add(fn); return () => volSubs.delete(fn); };
export function setVolume(v) {
  v = Math.min(1, Math.max(0, Number(v) || 0));
  if (v === vol) return;
  vol = v;
  try { globalThis.localStorage?.setItem(VOL_KEY, String(v)); } catch { /* private window */ }
  if (master) master.gain.value = MASTER * vol;
  for (const fn of volSubs) fn(v);
}
const MASTER = 0.6;

let ctx = null, master = null;
function unlock() {
  try {
    if (!ctx) {
      const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
      if (!AC) return;
      ctx = new AC({ latencyHint: 'interactive' });
      master = ctx.createGain(); master.gain.value = MASTER * vol;
      // a gentle limiter, so a pile of coins never clips
      const lim = ctx.createDynamicsCompressor();
      lim.threshold.value = -10; lim.knee.value = 6; lim.ratio.value = 8; lim.attack.value = 0.002; lim.release.value = 0.12;
      master.connect(lim); lim.connect(ctx.destination);
      noise(ctx); // made now, at the first press, so no later sound pays for it
    }
    if (ctx.state === 'suspended') ctx.resume();
  } catch { ctx = null; }
}
// a browser lets a page make sound only after the player's first press or key
if (typeof addEventListener === 'function') {
  const first = () => { if (on) unlock(); };
  addEventListener('pointerdown', first, { capture: true, passive: true });
  addEventListener('keydown', first, { capture: true, passive: true });
}

// how close the same sound may repeat, and how many may ring at once (a dozen coins is a handful, not a din)
const GAP = { place: 0.04, coin: 0.04, fanfare: 0.5, follower: 0.1, member: 0.12, meh: 0.3 };
const last = {};
let ringing = 0;
// Followers line up with their number (Cory, 2026-10-15). One to three fly as single pieces 60ms apart, and each one
// that lands is its own voice: the next voice of the same little group (another pitch, word and place), never the same
// clip again. Four or more fly as one bundle and sound as one quick cheer.
let group = null; // { at (audio time), voices, r }
/** Play a sound now (or `delay` seconds from now). `n`: how many coins or followers landed together. Never throws. */
export function play(name, { delay = 0, n = 1, who = null } = {}) {
  if (name !== 'follower' || n >= 4) { sound(name, delay, n, who); return; }
  if (!on) return;
  try { const c = (globalThis.__patronsSounds ||= {}); c[name] = (c[name] || 0) + 1; } catch { /* no global */ }
  if (!ctx || ctx.state !== 'running') return;
  try {
    const now = ctx.currentTime + 0.005 + delay;
    if (!group || now - group.at > 0.3) group = { at: now, voices: 0, r: rng(Math.floor(Math.random() * 1e9)) };
    group.at = now;
    const g = ctx.createGain(); g.gain.value = LEVEL.follower; g.connect(master);
    for (let j = 0; j < n; j++, group.voices++) crowdVoice(ctx, g, now + j * 0.06, group.r, group.voices % 5, { most: 3, gain: group.voices ? 0.65 : 1 });
  } catch { /* a sound is never worth an error */ }
}
function sound(name, delay, n, who) {
  if (!on || !VOICES[name]) return;
  // what the game asked for, for the gates (e2e/v4/sound.mjs)
  try { const c = (globalThis.__patronsSounds ||= {}); c[name] = (c[name] || 0) + 1; } catch { /* no global */ }
  // and which emoji's call it asked for
  if (name === 'place' && who && CALLS[who]) try { const c = (globalThis.__patronsCalls ||= {}); c[who] = (c[who] || 0) + 1; } catch { /* no global */ }
  if (!ctx || ctx.state !== 'running') return;
  try {
    const now = ctx.currentTime + 0.005 + delay;
    if (last[name] != null && now - last[name] < (GAP[name] ?? 0)) return;
    if (ringing >= 6) return;
    last[name] = now;
    let len = voice(ctx, master, name, now, undefined, n);
    // a minion landing: its emoji's own call on top of the knock (Cor, 2026-11-04)
    if (name === 'place' && who && CALLS[who]) {
      len = Math.max(len, 0.01 + call(ctx, master, who, now + 0.01));
    }
    ringing++;
    setTimeout(() => { ringing = Math.max(0, ringing - 1); }, (delay + len) * 1000 + 50);
  } catch { /* a sound is never worth an error */ }
}

/** Emoji `id`'s own call, alone: a player picking that emoji in setup or the room (Cor, 2026-11-04). Never throws. */
export function playCall(id) {
  if (!on || !CALLS[id]) return;
  try { const c = (globalThis.__patronsPicks ||= {}); c[id] = (c[id] || 0) + 1; } catch { /* no global */ }
  if (!ctx || ctx.state !== 'running') return;
  try {
    const len = call(ctx, master, id, ctx.currentTime + 0.005);
    ringing++;
    setTimeout(() => { ringing = Math.max(0, ringing - 1); }, len * 1000 + 50);
  } catch { /* a sound is never worth an error */ }
}
