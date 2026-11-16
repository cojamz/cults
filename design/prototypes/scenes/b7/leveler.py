import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#cfc6b4', P='#bfb6a3', o='#9a6a44', O='#74502f', R=RED[0], u=BLUE[0], g=GREEN[0], v=PURPLE[0],
                   y='#7fd0c8', m='#e9b23e', M='#b8862a', h='#c06a30', H='#934520', n='#4a5262', N='#3a4150', z='#2a2220',
                   a=PALE[0], A=PALE[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'P', 'O')

    def stacks(l):                        # four stacks of coloured blocks, all brought to one height
        for x, k in ((2, 'R'), (10, 'u'), (46, 'g'), (54, 'v')):
            for y in range(30, 52, 5):
                l.rect(x, y, x + 6, y + 3, k)
    bg(c, stacks, None)
    c.hl(0, 63, 28, 'O')                  # the line they're levelled to
    DK = {'n': 'N', 'm': 'M'}
    fig(c, DK, 32, 9, 'a', 'A', hs='short', hk='h', hd='H', pose='hold', mouth='smile', th=15,
        legs=dict(pants='n', pdark='N', shoe='z', lh=6))

    def level(l):                         # the spirit level held flat, the bubble dead centre
        l.rect(14, 36, 50, 39, 'm'); l.hl(14, 50, 39, 'M'); l.rect(29, 37, 35, 38, 'y'); l.vl(32, 37, 38, 'w')
    held(c, level)
    hl = layer(); hand(hl, 22, 35, 'grip', 'a', 'A'); hand(hl, 38, 35, 'grip', 'a', 'A', True); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('yellow.leveler', art)
