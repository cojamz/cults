// Red builds and moves members; held red resources decide its round-end contest.
import { gainColorOf } from './color-of.js';
import { add1, old1 } from './replace1.js';
import { add3, old3, handlers3 } from './replace3.js';
import { add4, old4, handlers4 } from './replace4.js';
import { see, endsAhead } from './botsee.js';
import { add7, old7, handlers7 } from './replace7.js';
const m = (key, name, s, w, text, extra = {}) => ({ key, name, s, w, text, f: 1, n: 1, ...extra });
const cost = c => c.def.s + c.def.w;

// bot test (ACT=walkin/initiation): the free member is this turn's recruit, so the turn's own recruit is gone
function usesRecruit(ctx, p) {
  const q = ctx.state.queue;
  for (let i = 0; i < q.length; i++) { if (q[i].p !== p.id) continue; if (q[i].t === 'endTurn') break; if (q[i].t === 'buy' && !q[i].extra) { q.splice(i, 1); return; } }
}
const ACT = new Set((globalThis.process?.env?.ACT || '').split(',').filter(Boolean)); // action bot tests (Nov 4): env only, never live
export default {
  id: 'red',
  name: 'Red',
  resource: 'red',
  scoring: { label: 'Most red', counts: 'the red you hold when the round ends', score: (ctx, p) => p.res.red },

  actions: [
    {
      // Cory, 2026-10-27: replaces Even Swap ("nobody has members initially"). Name and the +2 are Claude's fill-ins.
      key: 'evenswap', ring: 1, name: 'Tryout', text: 'Use the On Recruit effect of a shop member; it stays in the shop. +2 red.', copyDoesIt: true, // +2 (Cory, Nov 1)
      estimate: ctx => 2 + (borrowable(ctx).length ? 2 : 0),
      resolve(ctx, p) {
        ctx.gain(p, 'red', 2, { fromAction: true });
        const list = borrowable(ctx);
        if (!list.length) { ctx.log(`${p.name}: no shop member has an On Recruit effect.`); return; }
        ctx.choose(p, 'Tryout: use which shop member’s On Recruit?', list.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name}: ${c.def.text}`, kind: 'card', value: c.uid, hint: 2 + (c.def.f || 0),
        })), 'red.borrow');
      },
    },
    {
      key: 'turnout', ring: 1, name: 'Gather', copyDoesIt: true,
      text: '+2 red in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower in round I, +2 in round II, +3 in round III.',
      // Cory, 2026-10-31: fuel tied to the recruit ("B": 2/3/4 red, 1/2/3 followers). Core pays it on the turn's first member recruit.
      byRound: { lines: ['+2 red. This turn, if you recruit a member, +1 follower.', '+3 red. This turn, if you recruit a member, +2 followers.', '+4 red. This turn, if you recruit a member, +3 followers.'] },
      estimate: ctx => ctx.state.round + 1 + ctx.state.round * 0.7,
      resolve(ctx, p) {
        ctx.gain(p, 'red', ctx.state.round + 1, { fromAction: true });
        (p.recruitFollowers ||= []).push({ n: ctx.state.round, name: 'Gather' });
      },
    },
    {
      // Cory, 2026-10-27: "recruit the top member of the deck. each rival gets 1 red". Name and the +2 are Claude's fill-ins.
      key: 'hire', ring: 1, name: 'Walk-In', text: 'Recruit the top member of the pile. Each rival +1 red. +1 red.', copyDoesIt: true,
      estimate: ctx => 1 + (ctx.state.pile.length ? 3 : 0),
      resolve(ctx, p) {
        ctx.gain(p, 'red', 1, { fromAction: true });
        const top = ctx.state.pile[0];
        if (top === undefined) ctx.log(`${p.name}: the deck is empty.`);
        else { ctx.recruit(p, top, { free: true, top: true }); if (ACT.has('walkin')) usesRecruit(ctx, p); }
        for (const o of ctx.rivals(p)) ctx.gain(o, 'red', 1);
      },
      // All piles (Cory, 2026-11-01: "for the piles mode, we may need to change red round 1 action back to recruit the
      // cheapest (+1 red)"): the old Open Door, word for word, in Walk-In's place (content/index.js spacesOf)
      piles: {
        key: 'opendoor', ring: 1, name: 'Open Door', text: 'Recruit the cheapest member in the shop. +1 red.', copyDoesIt: true,
        estimate: ctx => 1 + cheapValue(ctx),
        resolve(ctx, p) { ctx.gain(p, 'red', 1, { fromAction: true }); hireCheapest(ctx, p, 'Open Door'); },
      },
    },
    {
      key: 'hireup', ring: 2, name: 'Promote', text: 'Give one of your members to a rival or the shop, and recruit one of theirs costing up to 2 more. +3 red.', copyDoesIt: true, // +3 red (Cory, Oct 30: balance run)
      estimate: (ctx, p) => 3 + (swapPairs(ctx, p, 'promote').length ? 2 : 0),
      resolve(ctx, p) {
        ctx.gain(p, 'red', ACT.has('promote1') ? 1 : 3, { fromAction: true });
        swap(ctx, p, 'promote', 'Promote: choose a member and its replacement');
      },
    },
    {
      key: 'trade', ring: 2, name: 'Demote', text: 'Give one of your members to a rival or the shop, and recruit one of theirs costing up to 2 less. +3 red.', copyDoesIt: true, // +3 red (Cory, Oct 30: balance run)
      estimate: (ctx, p) => 3 + (swapPairs(ctx, p, 'demote').length ? 2 : 0),
      resolve(ctx, p) { ctx.gain(p, 'red', ACT.has('promote1') ? 1 : 3, { fromAction: true }); swap(ctx, p, 'demote', 'Demote: choose a member and its replacement'); },
    },
    {
      key: 'take', ring: 3, name: 'Initiation', text: 'Recruit a member in the shop costing 8 or less, for free. +1 red.', // the cap (Cory, 2026-10-24: "8 or less")
      estimate: ctx => 1 + Math.max(0, ...ctx.shopCards().filter(c => cost(c) <= 8).map(c => c.def.f + cost(c) * 0.6)),
      resolve(ctx, p) {
        const shop = ctx.shopCards().filter(c => cost(c) <= 8);
        ctx.gain(p, 'red', 1, { fromAction: true });
        if (!shop.length) { ctx.log(`${p.name}: no shop member costs 8 or less.`); return; }
        if (ACT.has('initiation')) usesRecruit(ctx, p);
        ctx.choose(p, 'Initiation: which member?', shop.map(c => ({
          id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'card', value: c.uid, hint: c.def.f * 1.5 + cost(c),
        })), 'red.takeFree');
      },
    },
  ],

  handlers: {
    ...handlers4({
      defect(ctx, p, id) {
        const o = ctx.player(id);
        if (!o || o === p || !ctx.canSteal(p, o, 'swap')) return;
        const mine = defectList(ctx, p), theirs = defectList(ctx, o);
        const names = list => list.map(c => c.def.name).join(', ') || 'nobody';
        ctx.log(`${p.name}'s Defectors: ${p.name}'s red members (${names(mine)}) swap for ${o.name}'s (${names(theirs)}).`);
        // both lists are read before anything moves, so nothing that arrives goes back
        for (const c of mine) ctx.moveMember(c.uid, p, o, { actor: p });
        for (const c of theirs) ctx.moveMember(c.uid, o, p, { recruit: true, actor: p });
      },
      tithe(ctx, giver, uid, data) {
        const owner = ctx.player(data.to);
        if (giver.members.includes(uid)) {
          const name = ctx.card(uid).def.name;
          if (ctx.moveMember(uid, giver, owner, { actor: owner })) ctx.log(`${owner.name}'s Tithe Takers: ${giver.name} gives ${name} to ${owner.name}.`);
        }
        titheStep(ctx, owner, data.left);
      },
    }),
    ...handlers3({
      missionGive(ctx, p, uid, data) {
        const o = ctx.player(data.left[0]);
        if (!p.members.includes(uid)) { missionGiveStep(ctx, p, data); return; }
        const c = ctx.card(uid), k = cost(c), name = c.def.name;
        if (!ctx.moveMember(uid, p, o, { actor: p })) { missionGiveStep(ctx, p, data); return; }
        ctx.log(`${p.name}'s Missionaries: gives ${name} (${k}) to ${o.name}.`);
        missionGiveStep(ctx, p, { left: data.left.slice(1), allow: [...data.allow, k + 2] });
      },
      missionTake(ctx, p, uid, data) {
        if (!ctx.state.shop.includes(uid)) { missionTakeStep(ctx, p, data.allow); return; }
        const k = cost(ctx.card(uid));
        // the smallest allowance it fits uses itself up
        const fit = data.allow.filter(a => a >= k).sort((a, b) => a - b)[0];
        if (fit === undefined) { missionTakeStep(ctx, p, data.allow); return; }
        const rest = [...data.allow]; rest.splice(rest.indexOf(fit), 1);
        ctx.log(`${p.name}'s Missionaries: recruits ${ctx.card(uid).def.name} (${k}, up to ${fit}) for free.`);
        ctx.recruit(p, uid, { free: true });
        if (rest.length) ctx.defer(p, 'red.missionNext', { allow: rest });
      },
      missionNext(ctx, p, _v, data) { missionTakeStep(ctx, p, data.allow); },
    }),
    snatch(ctx, p, value) {
      if (!Array.isArray(value)) { ctx.log(`${p.name} chose not to swap.`); return; }
      const [a, b] = value;
      if (!snatchPairs(ctx, p).some(([x, y]) => x.uid === a && y.uid === b)) return;
      const names = [a, b].map(uid => `${ctx.ownerOf(uid)?.name || 'Shop'}'s ${ctx.card(uid).def.name}`);
      ctx.log(`${p.name}'s Body Snatchers: a swap at round start.`);
      if (ctx.swapMembers(p, a, b)) ctx.log(`${p.name} swapped ${names[0]} and ${names[1]}.`);
    },
    borrow(ctx, p, uid) {
      if (!ctx.state.shop.includes(uid)) { ctx.log(`${p.name}: that member left the shop.`); return; }
      ctx.log(`${p.name} uses ${ctx.defOf(uid).name}’s On Recruit; it stays in the shop.`);
      ctx.borrowOnRecruit(p, uid);
    },
    takeFree(ctx, p, uid) { ctx.recruit(p, uid, { free: true }); },
    ...handlers7({
      drift(ctx, p, uid, data) {
        if (uid == null) { ctx.log(`${p.name} keeps ${ctx.card(data.uid)?.def.name || 'Seat Filler'}.`); return; }
        const me = ctx.card(data.uid);
        if (!p.members.includes(data.uid) || !ctx.state.shop.includes(uid) || cost(ctx.card(uid)) > cost(me) + 3) return;
        const names = [me.def.name, ctx.card(uid).def.name];
        if (ctx.swapMembers(p, data.uid, uid)) ctx.log(`${p.name}'s ${names[0]} goes to the shop; ${p.name} recruits ${names[1]} for free.`);
      },
    }),
    panelMode(ctx, p, mode, data) {
      if (mode === 'promote' || mode === 'demote') swap(ctx, p, mode, `Panel: ${mode} another member`, data?.excludeUid);
    },
    trade(ctx, p, value, data) {
      if (!Array.isArray(value)) { ctx.log(`${p.name} chose not to swap.`); return; }
      const [a, b] = value;
      // Pinned choices reject a moved card; recheck prices/protection too before applying a queued choice.
      if (!swapAllowed(ctx, p, data.mode, data.excludeUid ?? null, a, b)) return;
      const names = [a, b].map(uid => `${ctx.ownerOf(uid)?.name || 'Shop'}'s ${ctx.card(uid).def.name}`);
      if (ctx.swapMembers(p, a, b)) ctx.log(`${p.name} swapped ${names[0]} and ${names[1]}.`);
    },
  },

  members: [
    m('twins', 'Triplets', 1, 1, 'Worth 3 followers.', { f: 3, n: 3, retired: true }), // Body Snatchers takes its place (Claude, under Cory's "use your judgement", 2026-11-03) // was Twins, worth 2 (Cory, 2026-10-29: "make it triplets, 3 followers")
    // Replacement batch 2 (Nov 3), live since Nov 3 (Claude, under Cory's "use your judgement"): Triplets' place, and a round I member as Triplets was (round: 1).
    // 4 red + 2 any as a player sees it. Its swap is a choice with "Don't swap" (Red's swaps can be skipped: Cory,
    // 2026-10-22, "You shouldnt HAVE to swap"); a rival's member it can take is one that may be swapped (Loyalists,
    // Bodyguards). The member you get is your recruit (its On Recruit fires), as with Promote.
    m('bodysnatchers', 'Body Snatchers', 3, 2, "Round Start: swap one of your members with a rival's member of the same cost.", { f: 2, round: 1,
      onRoundStart(ctx, owner, card) {
        const pairs = snatchPairs(ctx, owner);
        if (!pairs.length) { ctx.log(`${owner.name}'s Body Snatchers: no rival holds a member at the cost of one of yours.`); return; }
        ctx.choose(owner, 'Body Snatchers: swap one of your members with a rival’s of the same cost?', pairs.map(([a, b]) => ({
          id: `trade:${a.uid}:${b.uid}`, label: `${owner.name}: ${a.def.name} ↔ ${ctx.ownerOf(b.uid).name}: ${b.def.name}`, kind: 'trade',
          value: [a.uid, b.uid], hint: b.def.f - a.def.f,
        })).concat({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null, hint: -99 }), 'red.snatch', { uid: card.uid });
      },
    }),
    m('bigfamily', 'Big Family', 2, 3, 'Worth 4 followers.', { f: 4, n: 4 }), // 4 members (Cory, Oct 29: "maybe make it 4 members"); 5 to 6, Claude's price
    m('volunteer', 'Volunteer', 0, 0, 'Worth 1 follower.', { ...old1, ...old7('red.volunteer') }),
    // REPLACE7 bot test (Nov 4, quality loop, Members A): Volunteer's place. 2 red + 1 any as a player sees it, a round I
    // member. At round start (II and III; it can't be bought before round I's) the owner may give it to the shop and
    // recruit a shop member costing up to 3 more, for free: Promote's trade, done by the card itself.
    ...add7(m('seatfiller', 'Seat Filler', 1, 1, 'Round Start: you may give this to the shop and recruit a shop member costing up to 3 more.', {
      onRoundStart(ctx, owner, card) {
        const list = ctx.shopCards().filter(x => cost(x) <= cost(card) + 3);
        if (!list.length) { ctx.log(`${owner.name}'s ${card.def.name}: no shop member costs ${cost(card) + 3} or less.`); return; }
        ctx.choose(owner, `${card.def.name}: give it to the shop and recruit a shop member costing up to ${cost(card) + 3}?`, list.map(x => ({
          id: `card:${x.uid}`, label: `${card.def.name} ↔ Shop: ${x.def.name} (${cost(x)})`, kind: 'card', value: x.uid,
          hint: (x.def.f + cost(x)) - (card.def.f + cost(card)),
        })).concat({ id: 'none', label: 'Keep it', kind: 'pass', value: null, hint: 0 }), 'red.drift', { uid: card.uid });
      },
      // a free member up to 3 dearer at each round start still ahead (it leaves after one)
      ...see(info => (info.round < 3 ? 3 : 0)),
    })),
    // REPLACE1 bot test (Nov 3, replacement batch 1): Volunteer's place. Fires only when a rival's card or space moves
    // one of your members into that rival's own cult (Promote, Demote, Panel, Poach, Shake Down, Double Agent,
    // Anarchist), never for one you give away yourself, and not for Turncoats itself. 3 red + 1 any as a player sees it.
    ...add1(m('turncoats', 'Turncoats', 2, 1, 'Whenever a rival takes one of your members into their cult, recruit a shop member costing up to its cost, for free.', { f: 2,
      // (a Turncoats that arrives in the same swap wasn't yours when the member was taken)
      onCultMove(ctx, owner, card, { uid, from, to, actor, swappedWith }) {
        if (from !== owner || !to || to !== actor || actor === owner || uid === card.uid || swappedWith === card.uid) return;
        const c = cost(ctx.card(uid)), list = ctx.shopCards().filter(x => cost(x) <= c);
        if (!list.length) { ctx.log(`${owner.name}'s Turncoats: ${actor.name} took ${ctx.card(uid).def.name}, but no shop member costs ${c} or less.`); return; }
        ctx.log(`${owner.name}'s Turncoats: ${actor.name} took ${ctx.card(uid).def.name}, so ${owner.name} recruits a shop member costing up to ${c}, for free.`);
        ctx.choose(owner, `Turncoats: recruit which shop member (costing up to ${c}) for free?`, list.map(x => ({
          id: `card:${x.uid}`, label: `${x.def.name} (${cost(x)})`, kind: 'card', value: x.uid, hint: x.def.f * 1.5 + cost(x),
        })), 'red.takeFree');
      },
    })),
    m('intern', 'Intern', 1, 0, 'Worth 1 follower.'),
    m('mentor', 'Mentor & Protégés', 5, 3, 'On Recruit: recruit the cheapest member in the shop.', { f: 3, n: 3, // 3 members (Cory, Oct 30: +1 follower, "change the names accordingly")
      // +1 follower (Cory, 2026-10-25)
      // card: this Mentor, or a Doppelganger copying it (its free pick says so)
      onRecruited(ctx, owner, card) {
        const who = card && card.def && card.def.key === 'doppel' ? 'Doppelganger (as Mentor & Protégés)' : 'Mentor & Protégés';
        if (ctx.shopCards().length) ctx.log(`${owner.name}'s ${who}: the cheapest face-up member comes along free.`);
        hireCheapest(ctx, owner, who);
      },
      ...old4,
    }),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Mentor & Protégés' place. 4 red + 2 any as a player sees it. Each
    // rival with a member, in seat order from the owner's left, chooses one of theirs to give. A gift, not a steal or a
    // swap (the draft's reading), so Bodyguards and Loyalists don't stop it; it is the owner's card taking it, so the
    // giver's Turncoats answers it, and it's an arrival for the owner (Old Maid's −5 lands), not their recruit.
    ...add4(m('tithetakers', 'Tithe Takers', 3, 2, 'On Use, once per game: each rival gives you one of their members.', { f: 2,
      activate: 'game',
      onActivate(ctx, owner, card) {
        const n = ctx.state.players.length, left = Array.from({ length: n - 1 }, (_, k) => (owner.id + 1 + k) % n);
        if (!left.some(id => ctx.player(id).members.length)) { card.used = false; ctx.log(`${owner.name}'s Tithe Takers: no rival has a member.`); return; }
        ctx.log(`${owner.name} uses Tithe Takers.`);
        titheStep(ctx, owner, left);
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 || ctx.rivals(owner).filter(o => o.members.length >= 3).length >= 2,
    })),
    // balance pass 2 (pooled bench, both bots agree; design/eval/balance-pass-2.md): 12 → 6
    m('proselytizer', 'Proselytizers', 3, 4,'Whenever you recruit, +1 follower.', { f: 2, ...old4, // +1 follower (Cory, 2026-10-25)
      // a recruit is a member or a follower purchase (Cory, 2026-10-21); not its own arrival
      onRecruit(ctx, owner, card, by, what) { if (by === owner && what.member?.uid !== card.uid) owner.bonus += 1; },
    }),
    // REPLACE4 bot test (Nov 3, replacement batch 4): Proselytizers' place. 6 red + 3 any as a player sees it. Red members
    // are the ones of the red color (Drifters set to red too; Dabblers isn't one). Any rival may be chosen; one whose
    // members can't be swapped (Loyalists: only Loyalists itself moves) keeps those, as a swap would, and the owner's own
    // Loyalists holds the owner's other members the same way. Members taken come in as the owner's recruits (their On
    // Recruit fires), as with Red's swaps; members given are arrivals for the rival.
    ...add4(m('defectors', 'Defectors', 5, 3, "On Use, once per game: swap all your red members, this one too, for all of one rival's red members.", {
      activate: 'game',
      onActivate(ctx, owner, card) {
        const list = ctx.rivals(owner).filter(o => ctx.canSteal(owner, o, 'swap'));
        if (!list.length) { card.used = false; ctx.log(`${owner.name}'s Defectors: no rival to swap with.`); return; }
        ctx.choose(owner, "Defectors: swap all your red members for which rival's red members?", list.map(o => ({
          id: `player:${o.id}`, label: `${o.name} (${defectList(ctx, o).map(c => c.def.name).join(', ') || 'no red members'})`, kind: 'player', value: o.id,
          hint: defectWorth(ctx, o) - defectWorth(ctx, owner),
        })), 'red.defect');
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && ctx.rivals(owner).some(o => ctx.canSteal(owner, o, 'swap') && defectWorth(ctx, o) - defectWorth(ctx, owner) >= 4),
    })),
    // Nov 4 (Claude, under Cory's go-with-your-gut; was "Game End: +1 follower per red member you have."): it pays for
    // out-redding rivals, not for width. Red members counted as everywhere (Mob itself counts as 4), at each round's end
    // before the contests.
    m('mob', 'Mob', 7, 4, /* 12, 4 members (Cory, Oct 30); worth 4 (Cory, Nov 1: "Just make mob four") */ 'Round End: +2 followers per rival with fewer red members than you.', { f: 4, n: 4,
      onRoundEnd(ctx, owner) {
        // MOB=cards: bot test only (Nov 3): one per red member card, not per member it counts as
        const reds = o => ctx.countMembersOfColor(o, 'red', { cards: globalThis.process?.env?.MOB === 'cards' });
        const k = ctx.rivals(owner).filter(o => reds(o) < reds(owner)).length;
        if (!k) return;
        owner.bonus += 2 * k;
        ctx.log(`${owner.name}'s Mob: ${k} rival${k === 1 ? ' has' : 's have'} fewer red members: +${2 * k} followers.`);
      },
      // BOTSEE: each round end still ahead, +2 for about half the rivals
      ...see(i => endsAhead(i).length * 2 * i.rivals.length * 0.5),
    }),
    // members only, never a follower buy (Cory, 2026-10-29: "red recruit should only work for gaining members")
    // Red Cloak. Cory, Nov 1 5:06pm (version 1 of two tested): "Whenever you recruit a member, +1 red." Swaps and
    // steals count (your own doing: memberAcquired); follower buys don't. 31% of wins off, 28% with the swap card on.
    m('recruiter', 'Recruiter', 4, 1, 'Whenever you recruit a member, +1 red.', {
      onRecruit(ctx, owner, card, by, what) {
        if (by !== owner || !what.member) return;
        // RECRUITER=once|twice: bot test only (Nov 4, Cory "nerf red a little"): at most once (twice) per turn
        const cap = { once: 1, twice: 2 }[globalThis.process?.env?.RECRUITER];
        if (cap) { const k = ctx.turnKey(); if (owner.recruiterTurn !== k) { owner.recruiterTurn = k; owner.recruiterN = 0; } if (owner.recruiterN >= cap) return; owner.recruiterN += 1; }
        ctx.gain(owner, 'red', 1); ctx.log(`${owner.name}'s Recruiter: +1 red.`);
      },
    }),
    m('drive', 'Pied Piper', 2, 2, 'Whenever you recruit 2 or more members in one turn, +2 red.', {
      // pays the moment your second recruit of the turn lands, so the red can still be spent this turn
      onAnyRecruit(ctx, owner, card, by, recruited) {
        // your own turn only: a recruit on someone else's turn (Poach's free recruit) doesn't count toward it
        if (by === owner && ctx.state.current === owner.id && owner.turnRecruits >= 2 && owner.turnRecruits - ctx.memberWeight(recruited) < 2) { ctx.gain(owner, 'red', 2); ctx.log(`${owner.name}'s Pied Piper: +2 red.`); }
      },
    }),
    m('host', 'Host', 2, 2, 'On Recruit: +1 red per 2 members you have. Round Start: +1 red per 2 members you have.', { now: true,
      onRoundStart(ctx, owner) { ctx.gain(owner, 'red', Math.floor(ctx.memberCount(owner) / 2)); },
    }),
    m('sponsor', 'Sponsor', 6, 4, 'Your members cost 2 less.', { costReduction: 2 }),
    m('crowd', 'Crowd-Pleaser', 2, 0, 'Whenever you buy followers, +1 red.', {
      onBuyFollowers(ctx, owner, card, buyer) { if (buyer === owner) ctx.gain(owner, 'red', 1); },
    }),
    m('patriarch', 'Patriarch', 3, 2, 'Game End: +1 follower per 2 members you have.', { ...old3,
      onGameEnd: (ctx, owner) => Math.floor(ctx.memberCount(owner) / 2),
    }),
    // REPLACE3 bot test (Nov 3, replacement batch 3): Patriarch's place. 6 red + 3 any as a player sees it. Every rival
    // gets one (seat order from the owner's left), as long as the owner has members; any member may go, Missionaries
    // itself too. A give is an arrival, not their recruit (Old Maid's −5 lands on them, Martyrs pays the giver). Then one
    // free recruit per member given, each costing up to 2 more than one of them (any order; the smallest allowance that
    // fits is used); an allowance nothing in the shop fits is lost.
    ...add3(m('missionaries', 'Missionaries', 5, 3, 'On Use, once per game: give one of your members to each rival, then recruit a shop member costing up to 2 more for each one given, for free.', { f: 2,
      activate: 'game',
      onActivate(ctx, owner) {
        const n = ctx.state.players.length, left = Array.from({ length: n - 1 }, (_, k) => (owner.id + 1 + k) % n);
        ctx.log(`${owner.name} uses Missionaries.`);
        missionGiveStep(ctx, owner, { left, allow: [] });
      },
      botActivate: (ctx, owner) => ctx.state.round === 3 && ctx.membersOf(owner).filter(c => c.def.key !== 'missionaries').length >= ctx.state.players.length - 1,
    })),
    m('recruitbonus', 'Greeters', 1, 1, 'Your On Recruits also give +1 of that member’s color.', { f: 2, ...old7('red.recruitbonus'),
      onRecruitAbility(ctx, owner, card, recruited) { gainColorOf(ctx, owner, recruited.def, 'Greeters'); }, // a guest: nothing; Dabblers: pick
    }),
    // REPLACE7 bot test (Nov 4, quality loop, Members A): Greeters' place, a round I member as Greeters is. 2 red + 2 any
    // as a player sees it, counts as 2. Each of the owner's turns gets one more recruit step that offers only shop (or
    // reachable pile) members costing 3 or less (core: flag cheapBuy, the most any of the owner's cards prints).
    // REPLACE7 (Nov 4, quality loop, Members A): Greeters' place, the lane's pick (paper 15, Red's set 13 -> 15). 2 red +
    // 2 any as a player sees it, counts as 2, a round I member as Greeters is. Pays when a member comes into its owner's
    // cult out of a rival's, whoever moves it (Promote, Demote, Panel, Body Snatchers, Poach, Shake Down, Kidnapper, a
    // rival's Promote that trades with you); not for the shop, and not for itself arriving.
    ...add7(m('fosterparents', 'Foster Parents', 1, 2, 'Whenever a member joins your cult from a rival’s, +2 followers.', { f: 2, n: 2, round: 1,
      onCultMove(ctx, owner, card, { uid, from, to }) {
        if (to !== owner || !from || from === owner || uid === card.uid) return;
        owner.bonus += 2;
        ctx.log(`${owner.name}'s ${card.def.name}: ${ctx.card(uid).def.name} joins from ${from.name}'s cult, +2 followers.`);
      },
      // about one member in from a rival per round for a Red player (Promote, Demote, Body Snatchers)
      ...see(info => 2 * endsAhead(info).length),
    })),
    ...add7(m('ushers', 'Ushers', 1, 2, 'Each turn, you may also recruit one member costing 3 or less.', { f: 2, n: 2, round: 1, cheapBuy: 3,
      // about one cheap member a turn in round I, fewer later (the row holds few of them after round I)
      ...see(info => (info.round === 1 ? 0.6 * info.myNow + 2 : info.round === 2 ? 0.3 * info.myNow : 0)),
    })),
    m('movementpenalty', 'Deprogrammers', 1, 1, 'Whenever you take a rival’s member out of their cult, they lose 1 follower.', { f: 4, n: 2, // +1 (Cory, Oct 30)
      onMoveMember(ctx, owner, card, info) { if (info.from !== owner && ctx.followers(info.from) > 0) info.from.bonus -= 1; },
    }),
    m('panel', 'Panel', 4, 2, 'On Recruit: promote or demote another of your members.', { f: 3, n: 3,
      onRecruited(ctx, owner, card) {
        const options = ['promote', 'demote'].filter(mode => swapPairs(ctx, owner, mode, card.uid).length).map(mode => ({
          id: mode, label: mode === 'promote' ? 'Promote' : 'Demote', kind: 'choice', value: mode,
        }));
        ctx.choose(owner, 'Panel: Promote or Demote?', options, 'red.panelMode', { excludeUid: card.uid });
      },
    }),
    m('loyalists', 'Loyalists', 2, 2, /* Claude's fill-in price 5, was 3 (Cory, 2026-10-22: "too cheap") */ 'Your other members can’t be swapped.', { f: 3, n: 2, blockMemberSwaps: true }),
    // Cory, 2026-10-24: Red's once per game, "swap a rivals with the shop" (equal or greater cost); name and price Claude's fill-in
    m('headhunter', 'Headhunter', 3, 2, 'On Use, once per game: swap a rival’s member with a shop member that costs as much or more.', {
      activate: 'game',
      onActivate(ctx, owner, card) {
        if (!swapPairs(ctx, owner, 'rival').length) { card.used = false; ctx.log(`${owner.name}'s Headhunter: no rival member to swap.`); return; }
        // its swap line doesn't name it, so say the use (the turn card leads with "used Headhunter")
        ctx.log(`${owner.name} uses Headhunter.`);
        swap(ctx, owner, 'rival', 'Headhunter: choose a rival’s member and its shop replacement');
      },
      botActivate: (ctx, owner) => ctx.state.round >= 2 && swapPairs(ctx, owner, 'rival').some(([a]) => cost(a) >= 5),
    }),
    m('reserve', 'Benchwarmer', 1, 0, 'Worth 1 follower.'), // placeholder until Cory designs its hold (then it becomes Seat Saver)
  ],
};

/** Body Snatchers (REPLACE2): [one of p's members, a rival's member of the same cost], both swappable. */
function snatchPairs(ctx, p) {
  const mine = ctx.membersOf(p).filter(c => ctx.canSwapMember(c.uid));
  const theirs = ctx.rivals(p).filter(o => ctx.canSteal(p, o, 'swap')).flatMap(o => ctx.membersOf(o).filter(c => ctx.canSwapMember(c.uid)));
  const out = [];
  for (const a of mine) for (const b of theirs) if (cost(a) === cost(b) && a.def.id !== b.def.id) out.push([a, b]);
  return out;
}
// Tryout's shop members: an On Recruit or round-start effect that doesn't act on the card itself ("swap it",
// "it becomes"), which a member still in the shop can't do.
function borrowable(ctx) {
  return ctx.shopCards().filter(c => !c.def.recruitNote && (c.def.onRecruited || (c.def.now && (c.def.onRoundStart || c.def.onRoundStartLate))) && !/\bit\b|\bthese\b|\bthis member\b|\bcop(?:y|ies)\b/i.test(c.def.text.replace(/^[^:]*:/, '')));
}
function cheapValue(ctx) {
  const c = cheapest(ctx);
  return c ? c.def.f + cost(c) * 0.8 : 0;
}
function cheapest(ctx) {
  const shop = ctx.shopCards();
  if (!shop.length) return null;
  return shop.reduce((a, b) => (cost(b) < cost(a) ? b : a));
}
// who: the card or space asking, so its choice is titled with its own name (Mentor & Protégés shares this with Open Door)
function hireCheapest(ctx, p, who) {
  const shop = ctx.shopCards();
  if (!shop.length) return;
  const min = Math.min(...shop.map(cost));
  const tied = shop.filter(c => cost(c) === min);
  if (tied.length === 1) { ctx.recruit(p, tied[0].uid, { free: true }); return; }
  ctx.choose(p, `${who}: which of the cheapest members?`, tied.map(c => ({
    id: `card:${c.uid}`, label: c.def.name, kind: 'card', value: c.uid, hint: c.def.f,
  })), 'red.takeFree');
}
// A swap can rearrange any cult, but taking from a protected rival remains blocked.
// Each card's owner and cost are read once (bots rate every pair on a copy, and each rating re-checks its pair: the
// pair loop with a fresh owner lookup per test was most of a bot game's time, Nov 3).
function swapSides(ctx, p, mode) {
  const entry = (c, owner) => ({ c, uid: c.uid, id: c.def.id, owner, cost: cost(c) });
  const cult = ctx.state.players.flatMap(owner => (owner === p ? mode !== 'rival' : ctx.canSteal(p, owner, 'swap')) ? ctx.membersOf(owner).filter(c => ctx.canSwapMember(c.uid)).map(c => entry(c, owner)) : []);
  const shop = ctx.shopCards().map(c => entry(c, undefined));
  const first = mode === 'even' ? [...cult, ...shop] : cult;
  // Promote and Demote reach other cults too, any member that can be swapped (Cory, 2026-10-29: "demote and promote
  // should work with rivals. if their members are able to be swapped"); never two members of the same cult
  const second = mode === 'even' ? first : mode === 'promote' || mode === 'demote' ? [...shop, ...cult] : shop;
  return { first, second };
}
const pairOk = (mode, excludeUid, a, b) => a.uid !== b.uid && a.id !== b.id /* two copies of one member (piles): no swap */ && a.uid !== excludeUid && b.uid !== excludeUid && !(b.owner && b.owner === a.owner) && (mode === 'even' ? a.cost === b.cost
  : mode === 'promote' ? b.cost <= a.cost + 2 : mode === 'rival' ? b.cost >= a.cost : b.cost <= a.cost && b.cost >= a.cost - 2);
function swapPairs(ctx, p, mode, excludeUid = null) {
  const { first, second } = swapSides(ctx, p, mode);
  const out = [];
  for (const a of first) for (const b of second) if (pairOk(mode, excludeUid, a, b)) out.push([a.c, b.c]);
  return out;
}
/** Is (a, b) one of swapPairs' pairs, as it stands now? */
function swapAllowed(ctx, p, mode, excludeUid, ua, ub) {
  const { first, second } = swapSides(ctx, p, mode);
  const a = first.find(e => e.uid === ua), b = second.find(e => e.uid === ub);
  return !!(a && b && pairOk(mode, excludeUid, a, b));
}
function swap(ctx, p, mode, prompt, excludeUid = null) {
  const pairs = swapPairs(ctx, p, mode, excludeUid);
  if (!pairs.length) { ctx.log(`${p.name}: no eligible members to swap.`); return; }
  const source = card => ctx.ownerOf(card.uid)?.name || 'Shop';
  ctx.choose(p, prompt, pairs.map(([a, b]) => ({
    id: `trade:${a.uid}:${b.uid}`, label: `${source(a)}: ${a.def.name} ↔ ${source(b)}: ${b.def.name}`, kind: 'trade',
    value: [a.uid, b.uid], hint: ctx.ownerOf(a.uid) === p ? (b.def.f + cost(b)) - (a.def.f + cost(a))
      : ctx.ownerOf(b.uid) === p ? (a.def.f + cost(a)) - (b.def.f + cost(b)) : 0,
  // the swap is yours to skip (Cory, 2026-10-22 playtest: "You shouldnt HAVE to swap")
  })).concat({ id: 'none', label: 'Don’t swap', kind: 'pass', value: null, hint: -99 }), 'red.trade', { mode, excludeUid });
}

/** Missionaries (REPLACE3): give one of p's members to the next rival in data.left; then the free recruits. */
function missionGiveStep(ctx, p, data) {
  if (!data.left.length || !p.members.length) { missionTakeStep(ctx, p, data.allow); return; }
  const o = ctx.player(data.left[0]);
  ctx.choose(p, `Missionaries: give which of your members to ${o.name}?`, ctx.membersOf(p).map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'member', value: c.uid,
    // bots give what's worth least to keep and lets in the most: a spent or plain card, a pricier one opens a bigger recruit
    hint: cost(c) * 0.5 - (c.def.f || 1) * 1.5 - (c.used ? 0 : 1) + (c.def.onJoined ? 5 : 0),
  })), 'red.missionGive', data);
}
function missionTakeStep(ctx, p, allow) {
  if (!allow.length) return;
  const most = Math.max(...allow);
  const shop = ctx.shopCards().filter(c => cost(c) <= most);
  if (!shop.length) { ctx.log(`${p.name}'s Missionaries: no shop member costs ${most} or less.`); return; }
  ctx.choose(p, `Missionaries: recruit which member for free? (${allow.length} to go: up to ${[...allow].sort((a, b) => b - a).join(', ')})`, shop.map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'card', value: c.uid, hint: c.def.f * 1.5 + cost(c),
  })), 'red.missionTake', { allow });
}

// ---------- REPLACE4 bot test (Nov 3, replacement batch 4): Defectors and Tithe Takers ----------
/** p's red members that may move in a swap (Loyalists holds the others). */
const defectList = (ctx, p) => ctx.membersOf(p).filter(c => (c.asColor || c.def.quadrant) === 'red' && ctx.canSwapMember(c.uid));
const defectWorth = (ctx, p) => defectList(ctx, p).reduce((n, c) => n + (c.def.f || 1) * 1.5 + cost(c) * 0.5, 0);
/** The next rival in `left` (seat order) with a member gives one to the owner. */
function titheStep(ctx, owner, left) {
  const at = left.findIndex(id => ctx.player(id).members.length);
  if (at < 0) return;
  const o = ctx.player(left[at]);
  ctx.choose(o, `Tithe Takers: give which of your members to ${owner.name}?`, ctx.membersOf(o).map(c => ({
    id: `card:${c.uid}`, label: `${c.def.name} (${cost(c)})`, kind: 'member', value: c.uid,
    // a hint for quick reads: the card worth least to keep (a spent or plain one), Old Maid first
    hint: -((c.def.f || 1) * 1.5 + cost(c) * 0.5 + (c.used || c.def.vanilla ? 0 : 1)) + (c.def.onJoined ? 5 : 0),
  })), 'red.tithe', { to: owner.id, left: left.slice(at + 1) });
}
