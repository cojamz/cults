import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#e6cfc4', P='#d8bfb3', o='#9a6a44', O='#74502f', R='#d9534a', r='#a83a35', q='#f0a8a0',
                   u=BLUE[0], g=GREEN[0], h='#a8a4a4', H='#7a7676', e='#2b1d18', n='#5a4a5a', N='#463846',
                   a=OLIVE[0], A=OLIVE[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 44, 63, 63, 'P')

    def frames(l):                        # two portraits on the wall, a red thread tying them
        for x, k in ((4, 'u'), (46, 'g')):
            l.rect(x, 8, x + 13, 24, 'o'); l.rect(x + 2, 10, x + 11, 22, 'w')
            l.ell(x + 4, 12, x + 9, 17, k); l.rect(x + 3, 18, x + 10, 22, k)
        l.line(17, 16, 31, 6, 'R'); l.line(31, 6, 46, 16, 'R')
    bg(c, frames, None)
    DK = {'n': 'N'}
    fig(c, DK, 32, 12, 'a', 'A', hs='bun', hk='h', hd='H', pose='hold', mouth='smile',
        th=18, side='R')

    def heart(l):
        l.ell(25, 37, 32, 43, 'R'); l.ell(31, 37, 38, 43, 'R'); l.poly([(25, 41), (38.5, 41), (32, 49)], 'R')
        l.pts('q', [(27, 39), (28, 39), (27, 40)]); l.poly([(33, 44), (37, 41), (37.5, 42), (32, 48)], 'r')
    held(c, heart)
    hl = layer(); hand(hl, 23, 42, 'grip', 'a', 'A'); hand(hl, 37, 42, 'grip', 'a', 'A', True); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('yellow.matchmaker', art)
