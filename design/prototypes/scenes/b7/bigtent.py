import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(s='#c4dbe3', g='#8fb877', G='#7aa565', t='#f4ede1', T='#d8d0c4', o='#8a6a4c',
                   R=RED[0], u=BLUE[0], e=GREEN[0], v=PURPLE[0], y='#f7d774', h='#2b1d18', H='#4a332a',
                   n='#4a5262', N='#3a4150', z='#2a2220', a=OLIVE[0], A=OLIVE[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 's'); floor(c, 46, 'g', 'G')

    def tent(l):                          # a big tent, every colour of pennant on its ropes
        l.poly([(-2, 46), (32, 6), (66, 46)], 't'); l.poly([(32, 6), (66, 46), (44, 46)], 'T')
        l.poly([(24, 46), (32, 30), (40, 46)], 'o')
    bg(c, tent, 'T')
    c.vl(32, 0, 6, 'o'); c.rect(33, 0, 37, 3, 'R')
    for i, k in enumerate('Ruevy'):           # pennants of every colour on the guy lines
        x = 4 + i * 13; y = 8 + abs(x + 2 - 32) // 2
        c.poly([(x, y), (x + 5, y), (x + 2.5, y + 5)], k)
    DK = {'n': 'N'}
    fig(c, DK, 32, 18, 'a', 'A', hs='long', hk='h', hd='H', pose='wave', size=14, mouth='grin',
        legs=dict(pants='n', pdark='N', shoe='z', lh=7))
    return c.rows(), pal


PORTRAIT = ('yellow.bigtent', art)
