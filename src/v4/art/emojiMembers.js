// Emoji members (Cory, Nov 3 9:34pm: "lets create an alt mode for it? in the setup?"): a look, not a rule. With the
// setting on, each member shows as one emoji, and its card leads with one short line that says the same rule with a
// trigger icon in front. The card's full rule stays under it. Rules are unchanged; a member missing here keeps its
// picture and full text. Keys are spriteId(name).
//   ✨ when recruited · 🌅 round start · ♾️ always on · ☝️ once a game, when you choose · 🔁 once a round, when you choose
//   🏁 game end · 🌙 round end
export const TRIGGERS = [
  ['✨', 'when recruited'], ['🌅', 'each round start'], ['♾️', 'always on'], ['☝️', 'once a game, when you choose'],
  ['🔁', 'once a round, when you choose'], ['🏁', 'game end'], ['🌙', 'round end'],
];

const M = {
  // Red
  recruiter: ['🤝', '♾️ You recruit: +1 red'],
  'foster-parents': ['🧸', '♾️ A member joins you from a rival’s cult: +2 followers'],
  volunteer: ['🙋', ''],
  deprogrammers: ['📋', '♾️ You take a rival’s member: they −1 follower'],
  greeters: ['👋', '♾️ Your On Recruits also give +1 of that member’s color'],
  'body-snatchers': ['🧟', '🌅 Swap a member with a rival’s, same cost'],
  host: ['🎉', '✨🌅 +1 red per 2 members'],
  loyalists: ['🛡️', '♾️ Your other members can’t be swapped'],
  headhunter: ['🔍', '☝️ Swap a rival’s member for a shop one, same cost or more'],
  patriarch: ['👴', '🏁 +1 follower per 2 members'],
  panel: ['🪧', '✨ Promote or demote another of your members'],
  proselytizers: ['📣', '♾️ You recruit: +1 follower'],
  'mentor': ['🧑‍🏫', '✨ Recruit the cheapest shop member'],
  mob: ['🔥', '🌙 +2 followers per rival with fewer red members'],
  // Green
  encore: ['👏', '☝️ Your next On Recruit happens twice'],
  impressionist: ['🖼️', '♾️ Anyone copies an action: +1 of its color'],
  agents: ['🕶️', '♾️ Rivals can’t copy your actions'],
  bait: ['🪝', '♾️ Anyone copies your action: they −1 follower, you +1 follower'],
  roadie: ['🎚️', '✨🌅 +1 green per green member'],
  busker: ['🪕', '✨🌅 +2 green'],
  understudy: ['🎟️', '✨ Copy the last turn’s action'],
  impersonator: ['🎭', '✨🌅 Copy a rival member’s ability'],
  chronicler: ['📜', '🏁 +1 follower per green member'],
  doppelganger: ['👯', '✨ Becomes a copy of another of your members'],
  ensemble: ['🎶', '♾️ You copy your own action: +1 follower'],
  'stunt-double': ['🤸', '✨ Copy the action you just took'],
  'fan-club': ['📸', '✨ Copy an action the follower leader has a minion on'],
  impostors: ['🥸', '✨ Becomes a copy of a rival’s member'],
  wallflower: ['🌼', '♾️ Your copied actions give double'],
  'tribute-band': ['🎸', '☝️ Do every action one rival is on this round'],
  // Magenta
  'second-story-man': ['🪜', '🌙 Before contests: steal 2 from a rival'],
  fence: ['🚧', '♾️ A rival steals from you: +2 magenta'],
  accomplice: ['🦹', '✨ Steal 3'],
  crew: ['🏴‍☠️', ''],
  cutpurse: ['🤏', '✨🌅 Steal 1 from the richest rival'],
  'robin-hood': ['🏹', '♾️ Steal from the follower leader: +1 follower'],
  snitch: ['🐀', '♾️ A rival steals from you: they −1 follower'],
  'sticky-fingers': ['🍯', '♾️ Your steals take 1 more'],
  kidnapper: ['🧳', '✨🌅 Steal the cheapest member of the biggest cult'],
  desperado: ['🌵', '♾️ Fewest followers: your steals take 2 more'],
  fixer: ['💼', '☝️ Pay magenta equal to a rival member’s cost to steal it'],
  shoplifter: ['🛍️', '♾️ You recruit: steal 1'],
  bodyguards: ['💪', '♾️ Rivals can’t steal from you'],
  'double-agent': ['🕵️', '✨ Trade this member for one of a rival’s'],
  extortionist: ['💰', '✨🌅 Steal 2'],
  grifter: ['🎩', '✨ Steal 1 per 2 members'],
  // Purple
  'night-watch': ['🔦', '♾️ A rival takes the Goes Last token: +1 follower per minion on it'],
  'pocket-watch': ['⌚', '♾️ Anyone’s turn is skipped: +2 purple'],
  'picket-line': ['✊', '♾️ A rival takes a Purple space: +1 purple'],
  'early-birds': ['🐦', '♾️ Your turns can’t be skipped'],
  bouncers: ['🚫', '✨ Skip the next two rivals’ turns'],
  latecomers: ['🐌', '✨ Take the Goes Last token'],
  'shift-crew': ['👷', ''],
  timekeeper: ['⏳', '🏁 +1 follower per 3 purple'],
  clockmakers: ['🕰️', '🌅 Take your first two turns in a row'],
  closer: ['🔒', '♾️ You place the round’s last minion: +4 purple'],
  'hot-streak': ['⚡', '☝️ +3 followers per turn in a row before this one'],
  courier: ['📦', '♾️ Two turns in a row: +1 of each other color'],
  gossip: ['🗣️', '♾️ Anyone’s turn is skipped: +1 follower'],
  'go-getter': ['🏃', '☝️ +1 minion, placed right after this turn'],
  'late-risers': ['😴', '🌅 Fewest followers: +1 minion, placed first'],
  'night-owls': ['🦉', '♾️ From round II: +1 minion after your last'],
  'extra-shift': ['⏰', '✨ +1 minion this round'],
  // Blue
  hawker: ['🍎', '🔁 Offer a shop member: rivals may buy it for its cost +2 to you; if none does, it’s yours free'],
  'bargain-bin': ['🗑️', '♾️ Members go to the discard pile: +1 blue'],
  critic: ['🧐', '♾️ A rival recruits a blue member: +1 follower'],
  regular: ['☕', '♾️ You buy followers: +1 blue'],
  connoisseurs: ['🍷', '♾️ You recruit a blue member: +1 blue'],
  'plus-ones': ['➕', '✨ Recruit again this turn'],
  restockers: ['🔄', '☝️ Send the whole shop to the discard pile, then refill'],
  trendsetters: ['💅', '♾️ You recruit: send 1 shop member to the discard pile'],
  'window-dressers': ['🪟', '✨ Send 3 shop members to the discard pile'],
  'window-shopper': ['👀', '✨🌅 Send 2 shop members to the discard pile, +1 of each one’s color'],
  snobs: ['🦚', '🏁 +1 follower per blue member'],
  doormen: ['🚪', '🔁 Bounce a rival’s member; they take a shop one'],
  patroness: ['👒', '♾️ Shop members go to the discard pile: +1 follower'],
  shopaholics: ['🛒', '♾️ Recruit twice each turn'],
  // White
  'money-changers': ['💱', '♾️ Anyone buys followers: +1 white (+2 if it’s you)'],
  cashier: ['🧾', '✨ Turn all your white into followers'],
  landlord: ['🏠', '✨🌅 +2 white'],
  martyrs: ['🕯️', '♾️ Leaves your cult: followers equal to its cost'],
  recluse: ['🏚️', '🌙 +2 followers per rival with more members'],
  // the test version's members (Nov 8, Claude's fill-ins until Cory picks)
  anchorites: ['⛪', '🌙 3 or fewer members: +5 followers'],
  'old-guard': ['🧓', '🔁 Discard another member, using its On Use first; +2 white'],
  repossessors: ['🚚', '🔁 Once a game: a rival’s member up to 8 goes to the shop'],
  protesters: ['⛔', '🔁 Block an open space this round'],
  brokers: ['📈', '♾️ A White action gives you followers: +1 follower'],
  raiders: ['⚔️', '☝️ Take 4 followers from a rival, pay them 2 white'],
  undertaker: ['⚰️', '♾️ You discard a member: +2 followers'],
  'old-money': ['🏛️', '🏁 +1 follower per white member'],
  misers: ['🪙', '🏁 +1 follower per 2 white'],
  magpie: ['🐿️', '☝️ Turn all your resources into white'],
  heiresses: ['💎', '☝️ +1 white per member'],
  // Silver
  caterer: ['🍰', '♾️ Silver is gifted: +1 silver'],
  'guest-of-honor': ['🎖️', '♾️ You take a Silver space: you may give a rival a member costing 3 or less for +4 followers'],
  polisher: ['🧽', '☝️ Turn up to 3 silver into 2 any each'],
  toastmaster: ['🥂', '♾️ You take a Silver space: +1 follower'],
  godparents: ['🎁', '☝️ Give a rival a member; followers equal to its cost'],
  creditor: ['📒', '🔁 A rival gives you 2 followers, then gains 3 silver'],
  hostesses: ['🫖', '✨🌅 Each rival +1 silver; +1 follower per rival with more silver'],
  philanthropist: ['🤲', '✨ Give rivals up to 4 silver; +1 follower each'],
  'debt-collectors': ['📞', '☝️ Each rival gives you 2 silver'],
  'high-society': ['🍾', '♾️ +1 follower when a rival takes a Silver space'],
  debutantes: ['💃', '☝️ Double your silver; each rival +2 silver'],
  'smooth-talkers': ['😏', '♾️ Your silver pays for any color'],
  // Yellow
  'duty-collector': ['🏷️', '♾️ A rival recruits a color you have: +1 of that color'],
  seamstress: ['🧵', '☝️ Double your full sets'],
  'jack-of-all-trades': ['🛠️', '♾️ Your yellow can stand in for any missing color in a full set'],
  'guest-book': ['📖', '♾️ You recruit a color none of your members have: +2 yellow'],
  drifters: ['🎒', '✨ Pick a color; these count as that color'],
  gardeners: ['🌱', '✨🌅 +1 of each color you have none of'],
  'go-between': ['🔀', '♾️ A space gives you resources: change 1 to any color'],
  'customs-officer': ['🛃', '♾️ A rival steals or changes yours: +1 yellow'],
  tourist: ['📷', '✨🌅 +1 follower per color you hold'],
  matchmaker: ['💘', '♾️ First member of a new color: +2 in colors you choose, +1 follower'],
  meddler: ['🫳', '✨ Change 1 of each rival’s; +1 follower each'],
  'spice-route': ['🌶️', '🏁 +1 follower per color you hold 3 of'],
  tastemaker: ['🎨', '♾️ You change rivals’ resources: +1 follower'],
  tinker: ['🔧', '✨🌅 Swap up to 3 of yours one for one'],
  'big-tent': ['🎪', '🏁 +2 followers per color with 1 to 3 members'],
  dyer: ['🧶', '✨🌅 +1 yellow per color you hold'],
  harmonist: ['🎼', '🏁 +1 follower per full set'],
  leveler: ['⚖️', '🔁 Each rival’s biggest color: 1 becomes your pick'],
  caravan: ['🐪', '✨🌅 +1 of each color you hold'],
  'book-cookers': ['📚', '☝️ Rearrange your resources any way'],
  // Grey
  'party-crasher': ['🥳', '☝️ Your next minion can share a taken space'],
  scouts: ['🧭', '🔁 Discard any shop members, then refill'],
  'big-spender': ['💸', '☝️ Recruit twice this turn'],
  alchemists: ['⚗️', '♾️ Your resources count as any when you recruit'],
  insider: ['🃏', '♾️ You may also recruit from the top 3 of the pile'],
  'extra-hand': ['✋', '☝️ +1 minion this round'],
  'line-cutters': ['🏎️', '♾️ You go first every round'],
  launderers: ['🧺', '✨ Rearrange your resources any way'],
  'ghost': ['👻', '♾️ Worth 0 members. Joins your cult: −5 followers'],
  dabblers: ['🌈', ''],
  cheerleader: ['📯', '♾️ You win a contest: +1 follower'],
  anarchist: ['Ⓐ', '🔁 Swap any 2 members of the same cost'],
  spoilsport: ['🙅', '🌙 Nobody wins a contest you don’t lead'],
  'con-men': ['🎰', '✨ Steal 5'],
  'sore-loser': ['😤', '🌙 You win no contest: steal 5 followers from the rival who wins most'],
  coach: ['🧢', '✨ Use one of your On Use members again, free'],
  tiebreaker: ['🎲', '♾️ You win every contest tie you’re in'],
  straggler: ['🐢', '🔁 After the last minion: move yours to an open space'],
  // members dealt since the first pass, so the emoji look never mixes in a picture (picky bot, Nov 8: Downsizers,
  // Patron Saints, Ballroom Dancers and Kingmakers showed their scenes beside Ghost's emoji; Claude's picks)
  banker: ['🤵', '✨🌅 +3 gold'],
  'tax-collector': ['🧮', '♾️ A rival buys followers: +1 gold'],
  merchant: ['⚱️', '♾️ Anyone recruits a gold member: +1 gold'],
  'penny-pincher': ['🐷', '♾️ Gold you spend on members counts double'],
  underdog: ['🐕', '♾️ A rival has more gold: double your gold gains'],
  speculator: ['📉', '☝️ Double your gold'],
  tycoon: ['🤑', '🏁 +1 follower per 2 gold'],
  treasurer: ['🗝️', '✨ +1 gold per member you have'],
  'seat-filler': ['💺', '🌅 May give this to the shop: free member costing up to 3 more'],
  lookouts: ['🔭', '♾️ You take a turn in a row: +2 followers'],
  sleepyheads: ['🛌', '♾️ You take the Goes Last token: +3 followers'],
  'night-managers': ['🌃', '🌙 You placed the last minion: +1 follower per purple member'],
  'ballroom-dancers': ['🕺', '☝️ +2 followers per minion on Silver spaces'],
  kingmakers: ['👑', '🌙 Give rivals 3 silver from the bank, split as you choose'],
  'patron-saints': ['😇', '🏁 +1 follower per silver member, anyone’s'],
  'night-traders': ['🦇', '🌙 Before contests: swap up to 4 of your resources, one for one'],
  counterfeiters: ['🖨️', '🔁 Turn all of a rival’s resources into one color'],
  'power-shoppers': ['💳', '♾️ You recruit your second member in a turn: +4 followers'],
  mannequin: ['🪆', '♾️ Shop blue members count as yours in contests'],
  'last-minute-shopper': ['⏱️', '🌙 +3 blue, then you may recruit'],
  'heist-crew': ['🧨', '☝️ Steal half a rival’s biggest pile'],
  downsizers: ['✂️', '🔁 Discard one of your members: +4 white'],
  barker: ['📢', '♾️ You recruit a member: may also recruit followers'],
  'song-request': ['🎙️', '🔁 Copy an action a rival has a minion on'],
  copyist: ['📝', '♾️ You copy an action: +2 followers'],
  cheerleaders: ['🎊', '♾️ You win a contest: +2 followers'],
};

// Pixel versions (Cory, Nov 4: "match more the art style of the game ... pixel but with detail and recognizeable"): a
// 24×24 drawing of the member's emoji in the player minions' family (design/prototypes/pixel-art/members/draw.py). A
// member drawn there shows its pixel emoji; one not drawn yet keeps the system emoji.
import PIXEL from './icons/memberEmojis.js';
import { withOutline } from './index.js';
const pixelUrls = new Map();
/** A data URL for the member's pixel emoji, or null when it isn't drawn yet. */
export function emojiPixelUrl(id) {
  if (!PIXEL[id]) return null;
  let u = pixelUrls.get(id);
  if (u) return u;
  const { px, palette } = PIXEL[id], n = px.length, by = new Map();
  withOutline(px).forEach((r, y) => { let x = 0; while (x < r.length) { const ch = r[x]; let w = 1; while (r[x + w] === ch) w++; if (ch !== '.' && palette[ch]) by.set(palette[ch], (by.get(palette[ch]) || '') + `M${x} ${y}h${w}v1h${-w}z`); x += w; } });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges">${[...by].map(([f, d]) => `<path fill="${f}" d="${d}"/>`).join('')}</svg>`;
  u = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  pixelUrls.set(id, u);
  return u;
}
/** The first of these ids that has a pixel emoji, or null. */
export const emojiPixelId = ids => (Array.isArray(ids) ? ids : [ids]).find(i => PIXEL[i]) || null;

/** [emoji, line] for a member's sprite id, or null. line '' means the card has no ability (it just counts). */
export const emojiMember = id => M[id] || null;
export const EMOJI_MEMBER_COUNT = Object.keys(M).length;
