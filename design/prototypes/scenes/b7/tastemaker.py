import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#e8d2b0', P='#d8c09c', o='#9a6a44', O='#74502f', m='#a8acb4', M='#6f747b', R=RED[0], g=GREEN[0],
                   u=BLUE[0], y='#f7d774', h='#1c1513', H='#3a2a24', q='#f4ede1', a=DEEP[0], A=DEEP[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p')

    def stall(l):                         # a market stall awning and bowls to taste
        for x in range(0, 64, 10):
            l.rect(x, 0, x + 4, 8, 'R')
        l.hl(0, 63, 9, 'O')
    bg(c, stall, None)
    DK = {}
    fig(c, DK, 28, 13, 'a', 'A', hs='crop', hk='h', hd='H', pose='point', mouth='smile', th=18,
        top=lambda f: (f.rect(21, 4, 34, 12, 'q'), f.ell(19, 0, 36, 9, 'q'), f.hl(20, 35, 12, 'm')))   # a chef's toque

    def table(l):
        l.rect(0, 46, 63, 49, 'o'); l.rect(0, 50, 63, 63, 'O')
    bg(c, table, None)
    held(c, lambda l: [(l.ell(x, 40, x + 10, 46, 'q'), l.ell(x + 2, 40, x + 8, 42, k)) for x, k in ((4, 'R'), (40, 'g'), (52, 'u'))])
    return c.rows(), pal


PORTRAIT = ('yellow.tastemaker', art)
