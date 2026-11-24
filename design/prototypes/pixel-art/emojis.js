// Cults minions: 24 pixel emojis. Each player picks one when joining; all their minions are that emoji.
// Each minion is 16 rows of 16 characters (shown at 16, 32 or 64px, so pixels stay square).
// Minions sit visibly smaller than 24×24 members and bigger than 10×10 follower marks.
// Keys:
//   .  transparent
//   k  ink (only for lines INSIDE the shape; the renderer adds the 1px outer outline, so keep the outer row/col empty)
//   w  cream   c  cream shade   s  skin   t  skin shade   o  candle glow   x  soft black   b  blush
//   1..9  this emoji's own colors, from its `pal` list (pal[0] is key 1). Usually triples: shade, base, highlight.
// Letters are shared by every emoji so the set reads as one family; digits are each emoji's natural colors.
// `em` is the same emoji redrawn as an 8×8 emblem for the cult leader's chest medallion (leaders.js), shown 1:1 on
// the medallion's dark ground (`.` shows that ground). Never shrink `px` to make an emblem: 16→8 smears it.
// Data shape matches icons.js plus per-emoji colours: { id, name, kind: 'emoji', emoji, idea, pal, px, em } and,
// filled in at load, `palette` = { key: '#hex' } for every key the drawing can use (shared letters + digits).
// Classic script (works from file:// and in node): sets globalThis.CultMinions.
(function (g) {
  const INK = '#1c1410';
  const SHARED = { k: INK, w: '#f6eedb', c: '#cbbd9c', s: '#f1c49b', t: '#c88b62', o: '#ffd66e', x: '#2e2430', b: '#ee8f8a' };
  // Colour families [shade, base, highlight]: natural, slightly warm, so they sit on walnut and cream paper.
  const F = {
    red: ['#8f2a22', '#d4473a', '#f0866c'],
    coral: ['#93331f', '#d9583a', '#f39a75'],
    orange: ['#a5521b', '#e8892f', '#f7b866'],
    yellow: ['#b48a1f', '#f2c94a', '#fbe596'],
    gold: ['#a8761a', '#e3b23c', '#f8dc86'],
    lime: ['#3a7634', '#6bb24d', '#a8d97b'],
    sage: ['#2f6a3a', '#4f9a55', '#86c47d'],
    jade: ['#245e4c', '#3f9472', '#7cc9a2'],
    mint: ['#5f9370', '#9fcf96', '#d2edc6'],
    teal: ['#226a70', '#3aa0a3', '#8fd3cc'],
    blue: ['#2c5590', '#4f8bd0', '#8db9ea'],
    indigo: ['#2a3160', '#45528e', '#7080bd'],
    purple: ['#553a8e', '#8b66cb', '#b99ce6'],
    pink: ['#a3456f', '#e27aa6', '#f7b9d2'],
    grey: ['#66717a', '#a9b4bb', '#dfe5e8'],
    brown: ['#6a3d1d', '#b06a2e', '#dd9c58'],
    clay: ['#7c3d24', '#bd6a43', '#e09a6e'],
    sky: ['#86aec2', '#cfe6f0'],
  };

  const MINIONS = [
    {
      id: 'bug', name: 'Bug', emoji: '🐛', pal: [...F.lime, F.yellow[1]],
      idea: 'a fat green caterpillar, round head up, a fang, yellow-tipped feelers',
      px: [
        '................',
        '.........4...4..',
        '..........1.1...',
        '.........32221..',
        '........3222221.',
        '........2k22k21.',
        '........2222221.',
        '..33.33.22kk21..',
        '.3223223222w211.',
        '.24224224222221.',
        '.22222222222221.',
        '.12111211121111.',
        '..1..1..1..1....',
        '................',
        '................',
        '................',
      ],
      em: [
        '....4.4.',
        '.....1..',
        '...3222.',
        '...2k2k2',
        '3232222.',
        '2422422.',
        '2222221.',
        '.1..1...',
      ],
    },
    {
      id: 'ghost', name: 'Ghost', emoji: '👻', pal: [],
      idea: 'a cream sheet with a wavy hem, two dark eyes and an "oo" mouth',
      px: [
        '................',
        '.....wwwww......',
        '....wwwwwwwc....',
        '...wwwwwwwwwc...',
        '..wwwwwwwwwwwc..',
        '..wwkkwwwkkwwc..',
        '..wwkkwwwkkwwc..',
        '..wbwwwwwwwbwc..',
        '.wwwwwwkkwwwwwc.',
        '.cwwwwwkkwwwwcc.',
        '..wwwwwwwwwwwc..',
        '..wwwwwwwwwwwc..',
        '..wwwwwwwwwwwc..',
        '..wwc.wwwc.wwc..',
        '..wc...wc...c...',
        '................',
      ],
      em: [
        '..wwww..',
        '.wwwwww.',
        'wwkwwkww',
        'wwkwwkww',
        'wwwkkwww',
        'wwwkkwww',
        'wwwwwwww',
        '.w.ww.w.',
      ],
    },
    {
      id: 'cat', name: 'Cat', emoji: '🐱', pal: [...F.orange, '#ec8a9a'],
      idea: 'a ginger cat face, tabby stripes, cream muzzle, pink nose',
      px: [
        '................',
        '..3..........2..',
        '..33........22..',
        '..343......242..',
        '..322222222221..',
        '.32222121222221.',
        '.22222222222221.',
        '.222k222222k221.',
        '.222k222222k221.',
        '.22wwww44wwww21.',
        '.22wwwkwwkwww21.',
        '.122wwwwwwww211.',
        '..122222222211..',
        '....11111111....',
        '................',
        '................',
      ],
      em: [
        '.3....2.',
        '.34..42.',
        '.322221.',
        '22k22k21',
        '2ww44ww1',
        '2wkwwkw1',
        '.122221.',
        '..1111..',
      ],
    },
    {
      id: 'frog', name: 'Frog', emoji: '🐸', pal: [...F.lime],
      idea: 'a lime frog face, eyes bulging on top, a wide grin with two little fangs',
      px: [
        '................',
        '................',
        '................',
        '..3322....3322..',
        '.32wwk2..2wwk21.',
        '.32wwk2222wwk21.',
        '.32222222222221.',
        '.22222222222221.',
        '.2b2222222222b1.',
        '.2k2222222222k1.',
        '.22kkkkkkkkkk21.',
        '.2222w2222w2221.',
        '..222222222221..',
        '...1111111111...',
        '................',
        '................',
      ],
      em: [
        '.33..33.',
        '3wk33wk3',
        '2wk22wk2',
        '22222222',
        '2b2222b2',
        '2kkkkkk2',
        '.222222.',
        '..1111..',
      ],
    },
    {
      id: 'pumpkin', name: 'Pumpkin', emoji: '🎃', pal: [...F.orange, F.sage[0], F.sage[1]],
      idea: 'a jack-o\'-lantern: ribbed orange, curled stem, a candlelit grin',
      px: [
        '................',
        '................',
        '........45......',
        '.......45.......',
        '...3312322122...',
        '..332122221221..',
        '.32221222212221.',
        '.222o122221o221.',
        '.22ooo2222ooo21.',
        '.222212oo212221.',
        '.22oooooooooo21.',
        '.222oo2oo2oo221.',
        '.12221222212211.',
        '...1111111111...',
        '................',
        '................',
      ],
      em: [
        '....45..',
        '.332231.',
        '32o22o21',
        '2ooo2oo1',
        '22222221',
        '2oooooo1',
        '.2o2o21.',
        '..1111..',
      ],
    },
    {
      id: 'skull', name: 'Skull', emoji: '💀', pal: [],
      idea: 'a cream skull, deep sockets with a candle glint, a row of teeth',
      px: [
        '................',
        '.....wwwwww.....',
        '...wwwwwwwwww...',
        '..wwwwwwwwwwwc..',
        '..wwwwwwwwwwwc..',
        '..wxxxwwwwxxxc..',
        '..wxoxwwwwxoxc..',
        '..wxxxwwwwxxxc..',
        '..cwwwwxxwwwwc..',
        '...cwwwwwwwwc...',
        '....wwwwwwww....',
        '....wwkwwkwc....',
        '....cccccccc....',
        '................',
        '................',
        '................',
      ],
      em: [
        '..wwww..',
        '.wwwwww.',
        'wxxwwxxw',
        'wxowwoxc',
        'wwwxxwwc',
        '.cwwwwc.',
        '.wkwkwc.',
        '..cccc..',
      ],
    },
    {
      id: 'wizard', name: 'Wizard', emoji: '🧙', pal: [...F.purple, F.yellow[1], '#8d969c', '#c4cbcf', '#eef1f2'],
      idea: 'a tall bent purple hat with a gold star, and a long grey beard',
      px: [
        '................',
        '..........32....',
        '.........322....',
        '........3222....',
        '.......32422....',
        '......3244421...',
        '.....32224221...',
        '.33222222222211.',
        '...ssksssskst...',
        '...7777t77776...',
        '...6777777776...',
        '....67777776....',
        '....67777776....',
        '.....677776.....',
        '......5665......',
        '................',
      ],
      em: [
        '....32..',
        '...342..',
        '..32221.',
        '32222221',
        '.skssks.',
        '.677776.',
        '..6776..',
        '...55...',
      ],
    },
    {
      id: 'mushroom', name: 'Mushroom', emoji: '🍄', pal: [...F.red],
      idea: 'a red toadstool cap with cream spots, a stubby stem with a face',
      px: [
        '................',
        '.....332222.....',
        '...33ww222221...',
        '..32www2222ww1..',
        '.3222w22222www1.',
        '.2ww222222222w1.',
        '.1www22ww222211.',
        '..111111111111..',
        '....wwwwwwwc....',
        '....wkwwwwkc....',
        '....wbwkkwbc....',
        '....wwwwwwwc....',
        '....cwwwwwcc....',
        '.....cccccc.....',
        '................',
        '................',
      ],
      em: [
        '..3222..',
        '.3ww221.',
        '32w22ww2',
        '2222w221',
        '.111111.',
        '..wkwk..',
        '..wwwc..',
        '..cccc..',
      ],
    },
    {
      id: 'bee', name: 'Bee', emoji: '🐝', pal: [...F.yellow, F.sky[0], F.sky[1]],
      idea: 'a round honeybee in profile: two stripes, glassy wings, a stinger',
      px: [
        '................',
        '................',
        '......44...44...',
        '.....4554.4554..',
        '.....4554.4554..',
        '......44...44...',
        '....32xx22xx1...',
        '.32222xx22xx21..',
        '.2k222xx22xx22x.',
        '.22b22xx22xx21..',
        '..1222xx22xx1...',
        '....11xx11xx....',
        '................',
        '................',
        '................',
        '................',
      ],
      em: [
        '..44.44.',
        '.455455.',
        '..44.44.',
        '.32xx2x.',
        '2k2xx2xx',
        '222xx2x.',
        '.12xx1..',
        '........',
      ],
    },
    {
      id: 'raven', name: 'Raven', emoji: '🐦‍⬛', pal: ['#141a26', '#2a3550', '#55688e', '#5c6066', '#9aa1a6'],
      idea: 'black bird in profile, candle-yellow eye, grey beak',
      px: [
        '................',
        '......33221.....',
        '.....3222221....',
        '....32o22221....',
        '..55522222221...',
        '.5544222222221..',
        '....12222222221.',
        '....32222222221.',
        '...322223322221.',
        '...222233222221.',
        '....22332222211.',
        '.....2222221111.',
        '......1111..111.',
        '......4..4......',
        '.....44.44......',
        '................',
      ],
      em: ['...332..', '..32o22.', '5552222.', '.4422222', '..222221', '..322221', '...1111.', '...4.4..'],
    },
    {
      id: 'goat', name: 'Goat', emoji: '🐐', pal: ['#8a6a4a', '#c49a6c', '#e7cba2', '#3e3640', '#6e6370'],
      idea: 'black goat face, curled cream horns, yellow eyes with bar pupils, little beard',
      px: [
        '................',
        '..54........45..',
        '..554......455..',
        '...455333345....',
        '....4322223.....',
        '.12232222223221.',
        '..1.2xk22kx2.1..',
        '....22222222....',
        '....22222222....',
        '.....222222.....',
        '.....2k22k2.....',
        '......2222......',
        '......3ww3......',
        '.......ww.......',
        '.......c........',
        '................',
      ],
      em: ['5......5', '45.33.54', '.322223.', '12o22o21', '..2222..', '..2kk2..', '...ww...', '...w....'],
    },
    {
      id: 'rat', name: 'Rat', emoji: '🐀', pal: ['#4f4542', '#86796f', '#bcae9f', '#d98a9a'],
      idea: 'grey-brown face, round pink ears, long snout, pink nose',
      px: [
        '................',
        '.333........333.',
        '.3bb2......3bb2.',
        '.2bb2322223bb21.',
        '..122222222221..',
        '...2k222222k2...',
        '...2222222222...',
        '....22222222....',
        '....c222222c....',
        '.....222222.....',
        '.....22bb22..4..',
        '......2222..4...',
        '.......22.44....',
        '.........44.....',
        '................',
        '................',
      ],
      em: ['33....33', '3b2..2b2', '.222222.', '.k2222k.', '.222222.', '..2222..', '..2bb2..', '...22...'],
    },
    {
      id: 'owl', name: 'Owl', emoji: '🦉', pal: ['#6a3d1d', '#b06a2e', '#dd9c58', '#e8892f'],
      idea: 'brown owl, ear tufts, cream face disc, big glowing round eyes',
      px: [
        '................',
        '..32........23..',
        '..322......223..',
        '..222222222222..',
        '.22wwww22wwww22.',
        '.2wwoowwwwoowc2.',
        '.2wokkowwokkoc2.',
        '.2wwoow44woowc2.',
        '.22cwwww4wwwc22.',
        '.22222322322222.',
        '.12223222232221.',
        '..122222222221..',
        '...1122222211...',
        '....44....44....',
        '................',
        '................',
      ],
      em: ['3......3', '22222222', '2wo22ow2', '2ok44ko2', '2ww4www2', '22322322', '.122221.', '..4..4..'],
    },
    {
      id: 'pig', name: 'Pig', emoji: '🐷', pal: ['#b85d74', '#ec9aae', '#f8c9d4'],
      idea: 'pink face, folded ears, big snout',
      px: [
        '................',
        '..12........21..',
        '..122......221..',
        '..222222222222..',
        '.32222222222222.',
        '.222k222222k222.',
        '.2b2k222222k2b2.',
        '.22223333332222.',
        '.22223133132222.',
        '.22223333332222.',
        '..222222222222..',
        '...1222222221...',
        '....11111111....',
        '................',
        '................',
        '................',
      ],
      em: ['21....12', '22222222', '2k2222k2', '2b3333b2', '22313322', '22333322', '.122221.', '..1111..'],
    },
    {
      id: 'rooster', name: 'Rooster', emoji: '🐓', pal: ['#d4473a', '#f2c94a', '#245e4c', '#3f9472'],
      idea: 'white rooster in profile, red comb and wattle, dark green tail',
      px: [
        '................',
        '.....1.1........',
        '....11111.......',
        '....wwwww....4..',
        '...wwkwwwc..434.',
        '.22wwwwwwc.3443.',
        '..21wwwwwc.344..',
        '...11wwwwwww43..',
        '...1wwwwwwwwww..',
        '....wwwwccwwww..',
        '....cwwwwwwwwc..',
        '.....cwwwwwwc...',
        '......ccccc.....',
        '.......2..2.....',
        '......22.22.....',
        '................',
      ],
      em: ['..1.1...', '.wwww.43', '2wkwwc34', '21wwwww3', '.1wwwwww', '..cwwwwc', '...2..2.', '..22.22.'],
    },
    {
      id: 'bat', name: 'Bat', emoji: '🦇', pal: ['#2a2238', '#4a3d66'],
      idea: 'dusky purple bat, wings out, glowing eyes, two little fangs',
      px: [
        '................',
        '................',
        '.....2....2.....',
        '.....22..22.....',
        '.1...222222...1.',
        '.21..2o22o2..12.',
        '.221.222222.122.',
        '.22212222221222.',
        '.22222w22w22222.',
        '.22222222222222.',
        '.2.2.222222.2.2.',
        '.....222222.....',
        '......2222......',
        '................',
        '................',
        '................',
      ],
      em: ['..2..2..', '1.2222.1', '21o22o12', '22222222', '222ww222', '2.2222.2', '...22...', '........'],
    },
    {
      id: 'snail', name: 'Snail', emoji: '🐌', pal: ['#7c3d24', '#bd6a43', '#e09a6e', '#5f9370', '#9fcf96', '#d2edc6'],
      idea: 'slow garden snail, spiral brown shell, eyes on stalks',
      px: [
        '................',
        '................',
        '.k..k...........',
        '.5..5...33221...',
        '.5..5..3222221..',
        '.5555.322111221.',
        '.56555321222121.',
        '.55555321232121.',
        '.45555322112221.',
        '..4555322222221.',
        '..45555122221...',
        '.4555555555555..',
        '..444444444444..',
        '................',
        '................',
        '................',
      ],
      em: ['k.k.....', '5.5.3321', '555321.2', '5553212.', '55532212', '45553221', '45555555', '.4444444'],
    },
    {
      id: 'hedgehog', name: 'Hedgehog', emoji: '🦔', pal: ['#4a2f1c', '#7a5232', '#a87a52', '#e6d3b0'],
      idea: 'brown prickly back, cream face, black button nose, facing left',
      px: [
        '................',
        '................',
        '.....4.4.4.4....',
        '....41414141.4..',
        '....1212121214..',
        '...cw122222221..',
        '..cwwww22222221.',
        '.kwkwww32222221.',
        '..wwwww32222221.',
        '..cwwww22222221.',
        '...cwww2222221..',
        '....cc111111....',
        '.....t...t......',
        '................',
        '................',
        '................',
      ],
      em: ['..4.4.4.', '.414141.', 'cw122221', 'kw222222', '.w322222', '.cw22221', '..c1111.', '..t..t..'],
    },
    {
      id: 'fox', name: 'Fox', emoji: '🦊', pal: ['#b83e1a'],
      idea: 'rust fox face, tall ears, white muzzle, black nose',
      px: [
        '................',
        '.x............x.',
        '.xx..........xx.',
        '.1x1........1x1.',
        '.1xx11111111xx1.',
        '.11111111111111.',
        '.111k111111k111.',
        '.w11k111111k11w.',
        '.ww1111111111ww.',
        '..www111111www..',
        '...wwww11wwww...',
        '....wwwkkwww....',
        '.....wwwwww.....',
        '......cwwc......',
        '.......cc.......',
        '................',
      ],
      em: ['x......x', '1x1111x1', '1k1111k1', 'w111111w', '.ww11ww.', '..wkkw..', '...ww...', '........'],
    },
    {
      id: 'spider', name: 'Spider', emoji: '🕷️', pal: ['#141118', '#2a2430', '#4b4254', '#c0392b'],
      idea: 'round black spider, four glowing eyes, eight bent legs',
      px: [
        '................',
        '................',
        '..2..........2..',
        '...2..3322..2...',
        '....23222212....',
        '.22.32o22o22.22.',
        '...2222222222...',
        '..2.22222222.2..',
        '.2..22244222..2.',
        '...2.224422.2...',
        '..2..122221..2..',
        '..2...1111...2..',
        '................',
        '................',
        '................',
        '................',
      ],
      em: ['.2.32.2.', '2.2222.2', '.2o22o2.', '22222222', '.222222.', '.224422.', '.2.11.2.', '........'],
    },
    {
      id: 'moth', name: 'Moth', emoji: '🦋', pal: ['#a8957a', '#e6d8b8', '#f6eedb', '#3a2f26'],
      idea: 'dusty night moth, eye spots on its wings, feathery feelers',
      px: [
        '................',
        '...4.4....4.4...',
        '....44....44....',
        '......4..4......',
        '.3322..44..2233.',
        '.32222244222223.',
        '.2oxo224422oxo2.',
        '.2xkx224422xkx2.',
        '.22222244222222.',
        '..122224422221..',
        '...1222442221...',
        '..122224422221..',
        '...1112442111...',
        '.......44.......',
        '................',
        '................',
      ],
      em: ['.4....4.', '..4..4..', '32.44.23', 'ox4444xo', '22244222', '.224422.', '.112211.', '...44...'],
    },
    {
      id: 'scarecrow', name: 'Scarecrow', emoji: '🌾', pal: ['#6a3d1d', '#b06a2e', '#dd9c58', '#b48a1f', '#f2c94a'],
      idea: 'straw hat, sack face with button eyes and a stitched grin, straw poking out',
      px: [
        '................',
        '.....3322.......',
        '....322222......',
        '....222222......',
        '.11222222222211.',
        '..111111111111..',
        '..45ssssssss54..',
        '...sxssssssxt...',
        '...ssssssssst...',
        '...sskskskstt...',
        '...ssssssssst...',
        '..45tttttttt54..',
        '..4.5.5..5.5.4..',
        '................',
        '................',
        '................',
      ],
      em: ['..3322..', '.222222.', '11111111', '4sxssxs4', '.ssssss.', '.skskst.', '45tttt54', '.5.55.5.'],
    },
    {
      id: 'candle', name: 'Candle', emoji: '🕯️', pal: ['#a5521b', '#e8892f', '#f7b866', '#a8761a', '#e3b23c', '#f8dc86'],
      idea: 'a short tallow candle in a brass dish, wax dripping, a little flame',
      px: [
        '................',
        '.......3........',
        '......323.......',
        '......2o3.......',
        '.....12o21......',
        '......1o1.......',
        '.......k........',
        '.....wwwww......',
        '.....wwwwwc.....',
        '.....cwwwwc.....',
        '.....wwcwwc.....',
        '.....wwcwwc.....',
        '....64wwwwwc46..',
        '...45555555554..',
        '....444444444...',
        '................',
      ],
      em: ['...3....', '..2o3...', '..1o1...', '...k....', '..wwwc..', '..wcwc..', '45wwwc54', '.444444.'],
    },
    {
      id: 'sheep', name: 'Sheep', emoji: '🐑', pal: ['#2e2430', '#4a3d40'],
      idea: 'cream woolly sheep, dark face and ears, peering out of the wool',
      px: [
        '................',
        '....wwc.cww.....',
        '...wwwwwwwwwc...',
        '..cwwwwwwwwwwc..',
        '.wwww222222wwwc.',
        '.1wc22222222cw1.',
        '.112w222222w211.',
        '..ww2ww22ww2ww..',
        '.www2kw22wk2www.',
        '.cww22222222wwc.',
        '..cw22222222wc..',
        '..wwc222222cww..',
        '...cwc2kk2cwc...',
        '....cc2222cc....',
        '......cccc......',
        '................',
      ],
      em: ['.wwccww.', 'www22www', '12222221', 'w2k22k2w', 'w222222w', '.w2kk2w.', '..2222..', '...cc...'],
    },
  ];;

  const KEYS = new Set(['.', ...Object.keys(SHARED)]);
  MINIONS.forEach(m => { m.kind = 'emoji'; });

  function palette(m) {
    const p = { ...SHARED };
    (m.pal || []).forEach((hex, i) => { p[String(i + 1)] = hex; });
    return p;
  }

  // Returns a list of problems (empty when the minion is well-formed).
  function validate(m) {
    const errs = [];
    const id = m.id;
    const pal = m.pal || [];
    if (pal.length > 9) errs.push(`${id}: ${pal.length} own colours, max 9`);
    pal.forEach((h, i) => { if (!/^#[0-9a-f]{6}$/i.test(h)) errs.push(`${id}: pal[${i}] "${h}" is not #rrggbb`); });
    const ok = ch => KEYS.has(ch) || (/[1-9]/.test(ch) && +ch <= pal.length);
    const grid = (rows, n, label) => {
      if (!Array.isArray(rows) || rows.length !== n) { errs.push(`${id} ${label}: ${rows && rows.length} rows, want ${n}`); return false; }
      rows.forEach((row, y) => {
        if (row.length !== n) errs.push(`${id} ${label} row ${y}: ${row.length} chars, want ${n}`);
        [...row].forEach((ch, x) => { if (!ok(ch)) errs.push(`${id} ${label} row ${y} col ${x}: unknown key "${ch}"`); });
      });
      return true;
    };
    if (grid(m.px, 16, 'px')) {
      const edge = m.px[0] + m.px[15] + m.px.map(r => r[0] + r[15]).join('');
      if (/[^.k]/.test(edge)) errs.push(`${id}: fill touches the border (keep a 1px margin for the outline)`);
      const filled = m.px.join('').replace(/[.]/g, '').length;
      if (filled < 70) errs.push(`${id}: only ${filled} filled pixels; too thin to read at 16px`);
      const used = new Set(m.px.join('') + (m.em || []).join(''));
      pal.forEach((_, i) => { if (!used.has(String(i + 1))) errs.push(`${id}: pal[${i}] (key ${i + 1}) is never used`); });
    }
    if (grid(m.em, 8, 'em')) {
      const filled = m.em.join('').replace(/[.]/g, '').length;
      if (filled < 26) errs.push(`${id}: emblem has only ${filled} filled pixels; too thin to read on the robe`);
    }
    return errs;
  }
  function validateAll() {
    const errs = MINIONS.flatMap(validate);
    const seen = new Set();
    MINIONS.forEach(m => { if (seen.has(m.id)) errs.push(`duplicate id ${m.id}`); seen.add(m.id); });
    return errs;
  }

  // Grid with the outer outline added: any empty cell beside (not diagonal to) a filled cell becomes k.
  function withOutline(px) {
    const H = px.length, W = px[0].length;
    const filled = (x, y) => y >= 0 && y < H && x >= 0 && x < W && px[y][x] !== '.' && px[y][x] !== 'k';
    return px.map((row, y) => [...row].map((ch, x) =>
      ch === '.' && (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1)) ? 'k' : ch).join(''));
  }

  // Rows of keys → crisp <rect> runs (one per horizontal run of one colour). x0/y0 offset into a bigger canvas.
  function rects(px, pal, x0 = 0, y0 = 0) {
    const out = [];
    px.forEach((row, y) => {
      let x = 0;
      while (x < row.length) {
        const ch = row[x];
        let w = 1;
        while (row[x + w] === ch) w++;
        if (ch !== '.' && ch !== ' ') out.push(`<rect x="${x + x0}" y="${y + y0}" width="${w}" height="1" fill="${pal[ch]}"/>`);
        x += w;
      }
    });
    return out.join('');
  }

  const byId = id => MINIONS.find(m => m.id === id);
  MINIONS.forEach(m => { m.palette = palette(m); });

  function toSVG(m, size = 32, opts) {
    if (typeof m === 'string') m = byId(m);
    const o = Object.assign({ outline: true, title: true }, opts);
    const px = o.outline ? withOutline(m.px) : m.px;
    const t = o.title ? `<title>${m.name}</title>` : '';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="${size}" height="${size}" shape-rendering="crispEdges" role="img" aria-label="${m.name}">${t}${rects(px, palette(m))}</svg>`;
  }

  // ICONS: the same list under the name icons.js uses, so an importer can treat this file like an icon set.
  const api = { MINIONS, ICONS: MINIONS, SHARED, FAMILIES: F, INK, palette, validate, validateAll, withOutline, rects, toSVG, byId };
  g.CultMinions = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
