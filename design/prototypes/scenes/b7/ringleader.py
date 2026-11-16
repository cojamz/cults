import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#e8d6b0', R='#c74a3a', r='#a33a2e', s='#d9c39a', g='#9a5a3a', G='#7a4429',
                   n='#2b2a35', N='#1f1e28', y='#f7d774', o='#8a6a4c', h='#2b1d18', H='#4a332a', m='#e8e2d6',
                   a=DEEP[0], A=DEEP[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p')
    for x in range(0, 64, 12):            # big-top stripes, wide and flat
        c.rect(x, 0, x + 5, 40, 'R')
    c.rect(0, 0, 63, 3, 'r')
    c.ell(-10, 42, 74, 76, 'g'); c.ell(-6, 46, 70, 76, 's')      # the ring
    DK = {'n': 'N'}

    def tophat(f):
        f.rect(25, -1, 38, 8, 'n'); f.hl(22, 41, 9, 'N'); f.hl(22, 41, 10, 'N'); f.rect(25, 6, 38, 7, 'R')

    def coat(f):                          # tails and brass buttons
        f.pts('y', [(29, 32), (29, 36), (29, 40), (34, 32), (34, 36), (34, 40)])
        f.poly([(29, 27), (34, 27), (31.5, 31)], 'm')
    tops = fig(c, DK, 31, 10, 'a', 'A', hs=None, pose='raise', mouth='grin', top=tophat, front=coat,
               legs=dict(pants='n', pdark='N', shoe='h', lh=8, stance=1))
    rx, ry = tops['R']
    c.paste(solo(lambda l: (l.vl(rx + 1, ry - 9, ry + 2, 'n'), l.vl(rx + 2, ry - 9, ry + 2, 'N'), l.rect(rx, ry - 11, rx + 3, ry - 10, 'y'))))
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('yellow.ringleader', art)
