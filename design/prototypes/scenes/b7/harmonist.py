import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#4a4060', P='#3e3552', o='#c9a24a', O='#9e7a30', f='#7a5a8a', F='#6a4c7a',
                   R=RED[0], u=BLUE[0], g=GREEN[0], v=PURPLE[0], y='#f7d774', h='#2b1d18', H='#4a332a', j='#8a3e26', J='#5e2a1a',
                   a=LIGHT[0], A=LIGHT[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 50, 'f', 'F')
    bg(c, lambda l: (l.ell(10, -6, 54, 30, 'P')), None)     # a soft spotlight pool
    for (x, y, k) in ((6, 12, 'R'), (12, 22, 'u'), (52, 10, 'g'), (56, 22, 'v')):    # notes of every colour
        c.rect(x, y + 3, x + 2, y + 5, k); c.vl(x + 2, y - 1, y + 4, k); c.pts(k, [(x + 3, y - 1), (x + 4, y)])
    DK = {}
    tops = fig(c, DK, 32, 9, 'a', 'A', hs='long', hk='j', hd='J', pose='hold', mouth='smile',
               face=lambda h: happy_eyes(h, 24, 9, 16, 'a'), legs=dict(pants='h', pdark='H', shoe='H', lh=7))

    def lyre(l):                          # a lyre: two curved horns, a crossbar, one string of each colour
        thick(l, [(28, 47), (23, 42), (22, 36), (24, 32)], 2, 'o'); thick(l, [(36, 47), (41, 42), (42, 36), (40, 32)], 2, 'o')
        l.rect(22, 31, 42, 32, 'O'); l.rect(28, 46, 36, 48, 'O')
        for i, k in enumerate('Rugvy'):
            l.line(26 + i * 3, 33, 30 + i, 45, k)
    held(c, lyre)
    hl = layer(); hand(hl, 20, 38, 'grip', 'a', 'A'); hand(hl, 30, 39, 'flat', 'a', 'A', True); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('yellow.harmonist', art)
