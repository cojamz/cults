// The mixes the economy test plays (Claude's picks, Nov 7): today, each dial moved alone, then mixes aimed at fewer
// member cards that keep turns full. Today: MEMBER_UP 3 (every member +3, 1 of it its color), spaces and cloaks as printed,
// 1 resource with your cloak, round I deck up to printed 3 (shown 5).
export const MIXES = {
  today: {},
  // Nov 11 (Cory: "the spaces give the +1 only once each round, to the first person who takes it. actually maybe the +1 should just be per game?")
  'plus1-round': { PLUS1: 'round' }, 'plus1-game': { PLUS1: 'game' },
  // Nov 11 (Cory: "have the one resource per space, per game ... and then we will probably like reduce the member costs slightly"):
  // the economy baseline: +1 once a game with every member 1 any cheaper (MEMBER_UP 3 -> 2), and 2 cheaper as the far side
  'plus1-game up2': { PLUS1: 'game', MEMBER_UP: 2 }, 'plus1-game up1': { PLUS1: 'game', MEMBER_UP: 1 },
  'up2': { MEMBER_UP: 2 }, 'up4': { MEMBER_UP: 4 }, 'up5': { MEMBER_UP: 5 },
  'color0': { MEMBER_COLOR: 0 }, 'color2': { MEMBER_COLOR: 2 },
  'space-1': { SPACE_GAIN: -1 }, 'space+1': { SPACE_GAIN: 1 },
  'cloak-1': { CLOAK_GAIN: -1 }, 'cloak+1': { CLOAK_GAIN: 1 },
  'start3': { CLOAK_START: 3 },
  'r1=2': { R1_LIMIT: 2 }, 'r1=4': { R1_LIMIT: 4 },
  'up4 color2': { MEMBER_UP: 4, MEMBER_COLOR: 2 },
  'up4 space+1': { MEMBER_UP: 4, SPACE_GAIN: 1 },
  'up5 color2 space+1': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1 },
  'up5 space+1 cloak+1': { MEMBER_UP: 5, SPACE_GAIN: 1, CLOAK_GAIN: 1 },
  'up4 color2 cloak+1': { MEMBER_UP: 4, MEMBER_COLOR: 2, CLOAK_GAIN: 1 },
  'up4 r1=2': { MEMBER_UP: 4, R1_LIMIT: 2 },
  'up4 color0': { MEMBER_UP: 4, MEMBER_COLOR: 0 },
  'space-1 cloak+1': { SPACE_GAIN: -1, CLOAK_GAIN: 1 },
  'up2 space-1': { MEMBER_UP: 2, SPACE_GAIN: -1 },
  'color2 r1=4': { MEMBER_COLOR: 2, R1_LIMIT: 4 },
  'up5 color2 start3': { MEMBER_UP: 5, MEMBER_COLOR: 2, CLOAK_START: 3 },
  'up6 space+1': { MEMBER_UP: 6, SPACE_GAIN: 1 },
  // follower buys and contest prizes (Cory, Nov 7: "yes you can adjust follower price etc. just always keep 1 for 1")
  'fol 5→6 10→13': { FOL_MID: 6, FOL_TOP: 13 },
  'fol 5→4 10→8': { FOL_MID: 4, FOL_TOP: 8 },
  'prizes 6/9/14': { PRIZES: '6,9,14' },
  'prizes 3/5/8': { PRIZES: '3,5,8' },
  'up5 fol 5→6 10→13': { MEMBER_UP: 5, FOL_MID: 6, FOL_TOP: 13 },
  'up4 prizes 6/9/14': { MEMBER_UP: 4, PRIZES: '6,9,14' },
  // wave 2 (Nov 7, from the judges: round I has turns with nothing to buy, round III floods into follower buys):
  // spaces give more early and less late (the round shows on every space, as Gather's numbers already do)
  'spaces +1/0/-1': { SPACE_GAIN_R: '1,0,-1' },
  'spaces +1/0/0 up4': { SPACE_GAIN_R: '1,0,0', MEMBER_UP: 4 },
  'spaces +1/0/-1 up4': { SPACE_GAIN_R: '1,0,-1', MEMBER_UP: 4 },
  'start3 up4': { CLOAK_START: 3, MEMBER_UP: 4 },
  'spaces +1/0/-1 up4 prizes 4/6/14': { SPACE_GAIN_R: '1,0,-1', MEMBER_UP: 4, PRIZES: '4,6,14' },
  // wave 3 (Nov 7, Cory: "continue economy tests as well, with more tweaks/levers pulled"): around Richer (live as a
  // setting: members +1 color +1 any, spaces +1), each lever pulled alone on top of it, judged against Richer
  'richer': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1 },
  'richer spaces III-1': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, SPACE_GAIN_R: '0,0,-1' },
  'richer spaces I+1': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, SPACE_GAIN_R: '1,0,0' },
  'richer prizes 6/9/14': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, PRIZES: '6,9,14' },
  'richer prizes 4/6/14': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, PRIZES: '4,6,14' },
  'richer fol 5→6': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, FOL_MID: 6 },
  'richer cloak+1': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, CLOAK_GAIN: 1 },
  'richer all colored': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, MEMBER_COLOR: 3 },
  'richer start3': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, CLOAK_START: 3 },
  'richer r1=2': { MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1, R1_LIMIT: 2 },
  'up6 color3 space+2': { MEMBER_UP: 6, MEMBER_COLOR: 3, SPACE_GAIN: 2 },
  // Nov 12 (Cory: "run games on "once a game" and evaluate today, richer, inbetween (one less any) and one less color
  // than "today". So four."), all with the bots' +1 fix (BOTPLUS1). Richer = members +1 color +1 any, spaces +1;
  // in between = Richer with 1 less any; one less color = today's +1 color dropped (members 2 any over printed)
  'n12 today': { PLUS1: 'game', BOTPLUS1: '1' },
  'n12 richer': { PLUS1: 'game', BOTPLUS1: '1', MEMBER_UP: 5, MEMBER_COLOR: 2, SPACE_GAIN: 1 },
  'n12 between': { PLUS1: 'game', BOTPLUS1: '1', MEMBER_UP: 4, MEMBER_COLOR: 2, SPACE_GAIN: 1 },
  'n12 color-1': { PLUS1: 'game', BOTPLUS1: '1', MEMBER_UP: 2, MEMBER_COLOR: 0 },
};
