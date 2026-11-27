import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def art():
    """Misers: two old penny-pinchers in nightcaps, hugging a chest of white coins by one candle."""
    c = C(N)
    pal = base_pal(p='#4a4560', P='#3f3a54', o='#8a6a4c', O='#6e5238', y='#f7d774', Y='#e0a84a',
                   m='#f4ede1', M='#c4bcae', Q='#8f877a', s='#d8ccb6', S='#b5a88f', h='#9a9590', H='#77726d', z='#3a2c26',
                   a=MED[0], A=MED[1], b=LIGHT[0], B=LIGHT[1], **{'1': WHITEC[0], '2': WHITEC[1]})
    c.rect(0, 0, 63, 63, 'p')

    def room(l):                          # a bare wall, one shuttered window, the floorboards
        l.rect(25, 6, 38, 20, 'P'); l.vl(31, 6, 20, 'p'); l.vl(32, 6, 20, 'p')
        l.rect(0, 50, 63, 63, 'O'); l.hl(0, 63, 50, 'o')
    bg(c, room, None)
    DK = {'1': '2', 'h': 'H', 's': 'S'}

    def cap(cx, hy, flip=False):          # a nightcap: band, a cone, its tip flopped over to one side, a bobble
        d = -1 if flip else 1
        def t(f):
            f.rect(cx - 8, hy + 1, cx + 7, hy + 3, '2')
            f.poly([(cx - 7, hy + 1), (cx + 6, hy + 1), (cx + 2 * d, hy - 6)], '1')
            thick(f, [(cx + 2 * d, hy - 6), (cx + 8 * d, hy - 3), (cx + 11 * d, hy + 4)], 3, '1')
            f.rect(cx + 11 * d - 1, hy + 5, cx + 11 * d + 1, hy + 7, 'Y')
        return t
    tl = {}
    def left(cc):
        tl.update(fig(cc, DK, 18, 16, 'b', 'B', hs=None, pose='hold', mouth='grin', brows='stern',
                      top=cap(18, 16), legs=None, th=22, cloth='s', cdark='S'))
    c.paste(solo(left))
    c.paste(solo(lambda cc: fig(cc, DK, 46, 17, 'a', 'A', hs=None, pose='hold', mouth='smirk', brows='stern',
                                 top=cap(46, 17, True), legs=None, th=22, cloth='s', cdark='S')))
    rx, ry = tl['R']

    def coin(l, x, y):                    # a white coin: a flat disc with a dark rim below
        l.hl(x + 1, x + 4, y, 'm'); l.hl(x, x + 5, y + 1, 'm'); l.hl(x + 1, x + 4, y + 2, 'Q')
    def chest(l):                         # the open chest, heaped with white coins
        l.rect(14, 45, 50, 55, 'o'); l.hl(14, 50, 49, 'O'); l.vl(14, 45, 55, 'O'); l.vl(50, 45, 55, 'O')
        l.rect(30, 47, 34, 51, 'Y'); l.rect(31, 48, 33, 49, 'z')
        for x, y in ((17, 42), (22, 41), (27, 40), (32, 40), (37, 41), (42, 42), (24, 37), (30, 36), (36, 37)):
            coin(l, x, y)
    held(c, chest)

    def candle(l):
        l.rect(55, 45, 58, 54, 'm'); l.vl(58, 45, 54, 'M'); l.rect(53, 54, 60, 55, 'o')
    held(c, candle)
    c.vl(56, 41, 43, 'y'); c.vl(57, 42, 43, 'Y')                         # the flame: the only bright spot
    return c.rows(), pal


PORTRAIT = ('trading.heirs', art)
