import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Hawkers: in the market, a tray on a strap, calling out and holding one ware up high for the best offer."""
    c = C(N)
    pal = base_pal(p='#d6e2e6', P='#c4d2d8', R=RED[0], r=RED[1], g=GREEN[0], G=GREEN[1], y='#f1c63e', Y='#c7951f',
                   o='#9a7650', O='#7a5a3a', s='#b9a88c', S='#a39276', n='#3a3644', N='#2c2934', z='#2a2220',
                   h='#2b1d18', H='#4a332a', x='#c95050', a=DEEP[0], A=DEEP[1], **{'1': BLUE[0], '2': BLUE[1]})
    c.rect(0, 0, 63, 63, 'p')

    def market(l):                        # stall awnings behind, the street
        for i, x in enumerate(range(0, 64, 8)):
            l.rect(x, 4, x + 3, 9, 'R' if i % 2 else 'y')
        l.hl(0, 63, 10, 'O'); l.rect(0, 11, 63, 30, 'P')
        l.rect(0, 50, 63, 63, 's'); l.hl(0, 63, 50, 'S')
    bg(c, market, None)
    DK = {'1': '2', 'n': 'N', 'o': 'O'}

    def cap(f):                           # a flat cap
        f.rect(24, 11, 39, 15, '2'); f.hl(22, 41, 16, 'N')

    def tray(f):                          # the tray on its strap, piled with apples and pears
        f.line(24, 30, 25, 37, 'O'); f.line(39, 30, 38, 37, 'O')
        f.rect(18, 38, 45, 41, 'o'); f.hl(18, 45, 41, 'O')
        for x, k in ((20, 'R'), (24, 'g'), (28, 'R'), (32, 'y'), (36, 'g'), (40, 'R')):
            f.rect(x, 35, x + 2, 37, k)
    tops = fig(c, DK, 31, 12, 'a', 'A', hs=None, pose='raise', mouth='smile', brows='soft', top=cap, front=tray,
               legs=dict(pants='n', pdark='N', shoe='z', lh=7))
    rx, ry = tops['R']
    held(c, lambda l: (l.ell(rx - 1, ry - 7, rx + 5, ry - 1, 'R'), l.ell(rx + 2, ry - 6, rx + 5, ry - 1, 'r'),
                       l.rect(rx + 2, ry - 9, rx + 2, ry - 8, 'O'), l.rect(rx + 3, ry - 9, rx + 4, ry - 9, 'G')))
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('market.hawkers', art)
