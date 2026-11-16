import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(s='#cfe2e6', f='#8a6448', F='#74523a', e='#9a7254', t='#6d8f5a', T='#5a7a4a', o='#c9b28e', O='#a8916c',
                   y='#f7d774', h='#1c1513', H='#3a2a24', n='#4a5262', N='#3a4150', z='#2a2220',
                   a=VDEEP[0], A=VDEEP[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 's')
    bg(c, lambda l: (l.ell(-6, 18, 30, 40, 't'), l.ell(36, 20, 72, 40, 't')), 'T')
    c.rect(0, 34, 63, 63, 'f')
    for y in (38, 44, 51, 59):                # furrows
        c.hl(0, 63, y, 'F'); c.hl(0, 63, y + 1, 'e')
    DK = {'n': 'N', 'o': 'O'}

    def bag(f):                           # the seed bag on its strap
        f.line(25, 28, 38, 40, 'O'); f.ell(34, 37, 44, 46, 'o'); f.hl(35, 43, 39, 'O')
    tops = fig(c, DK, 30, 10, 'a', 'A', hs='crop', hk='h', hd='H', pose='raise', mouth='smile', front=bag,
               legs=dict(pants='n', pdark='N', shoe='z', lh=8, stance=1))
    rx, ry = tops['R']
    for (dx, dy) in ((5, -2), (9, 1), (12, -4), (14, 3), (8, 6), (17, 0), (19, 6), (15, 10), (21, 13), (11, 13)):
        c.px(rx + dx, ry + dy, 'y')       # a fan of yellow seed thrown wide
    return c.rows(), pal


PORTRAIT = ('yellow.sower', art)
