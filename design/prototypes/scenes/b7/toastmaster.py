import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#3a3550', P='#332f49', y='#f3dc8a', Y='#d9b65a', o='#8a5a36', O='#6a4227', q='#e8ecf0', Q='#b0b8c0',
                   c='#f0d090', r='#8a2f2f', h='#c06a30', H='#934520', n='#2f3036', N='#222328',
                   a=PALE[0], A=PALE[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p')
    for x in (6, 20, 44, 58):                 # string lights
        c.rect(x, 4, x + 1, 5, 'y')
    c.hl(0, 63, 3, 'P')
    DK = {'n': 'N', 'o': 'O'}

    def tux(f):
        f.poly([(29, 28), (35, 28), (32, 33)], 'w'); f.rect(30, 28, 34, 29, 'n')
    tops = fig(c, DK, 30, 10, 'a', 'A', hs='side', hk='h', hd='H', pose='raise', mouth='open', front=tux, th=18)
    rx, ry = tops['R']
    held(c, lambda l: (l.poly([(rx - 1, ry - 8), (rx + 4, ry - 8), (rx + 3, ry - 3), (rx, ry - 3)], 'q'),
                       l.rect(rx, ry - 7, rx + 3, ry - 5, 'c'), l.vl(rx + 1, ry - 2, ry, 'Q')))   # the glass raised
    c.paste(solo(lambda l: hand(l, rx, ry, 'grip', 'a', 'A', True)))

    def podium(l):
        l.poly([(12, 44), (50, 44), (46, 63), (16, 63)], 'o'); l.hl(10, 52, 44, 'O'); l.hl(10, 52, 45, 'O')
        l.rect(26, 50, 36, 56, 'Y')
    bg(c, podium, None)
    return c.rows(), pal


PORTRAIT = ('silver.toastmaster', art)
