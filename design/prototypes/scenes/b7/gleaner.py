import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(s='#f2d9a8', f='#d9b860', F='#c4a24a', g='#a89040', G='#8a7430', t='#e6c870', o='#a07a48', O='#7a5a34',
                   h='#d8b060', H='#a8843e', n='#6a5a4a', N='#544638', z='#2a2220', R='#c74a3a',
                   a=LIGHT[0], A=LIGHT[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 's'); c.rect(0, 34, 63, 63, 'f')
    bg(c, lambda l: [l.rect(x, 26, x + 6, 34, 'g') for x in (2, 50, 57)], 'G')        # sheaves left standing
    for x in range(1, 64, 7):                # stubble left after the harvest
        c.vl(x, 52, 54, 'F'); c.vl(x + 3, 44, 46, 'F')
    DK = {'n': 'N', 'o': 'O', 'R': 'R'}

    def scarf(f):
        f.rect(23, 5, 40, 12, 'R'); f.hl(22, 41, 12, 'R'); f.rect(38, 10, 42, 16, 'R')
    fig(c, DK, 32, 9, 'a', 'A', hs='long', hk='h', hd='H', pose='hold', mouth='smile', side='R',
        legs=dict(pants='n', pdark='N', shoe='z', lh=8))

    def basket(l):                        # a basket of gathered grain, stalks sticking up
        l.poly([(21, 39), (43, 39), (41, 48), (23, 48)], 'o'); l.hl(22, 42, 42, 'O'); l.hl(23, 41, 45, 'O')
    for x in range(25, 41, 4):               # gathered stalks over the rim, no ink
        c.line(x, 39, x + (x - 32) // 2, 32, 'G'); c.rect(x + (x - 32) // 2 - 1, 29, x + (x - 32) // 2 + 1, 32, 'O')
    held(c, basket)
    hl = layer(); hand(hl, 19, 39, 'grip', 'a', 'A'); hand(hl, 42, 39, 'grip', 'a', 'A', True); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('yellow.gleaner', art)
