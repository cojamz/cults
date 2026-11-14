import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#4a5a5a', P='#3e4e4e', o='#8a5a36', O='#6a4227', g='#a8d0d8', q='#eef2f6', Q='#b0b8c0',
                   y='#c9a24a', r='#8a2f2f', h='#a8a4a4', H='#7a7676', e='#2b1d18', n='#2f3036', N='#222328', z='#1e1e22',
                   a=LIGHT[0], A=LIGHT[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'O', 'o')

    def cabinet(l):                       # a glass display case of silver pieces
        l.rect(2, 6, 20, 52, 'o'); l.rect(4, 8, 18, 50, 'P')
        for y in (18, 30, 42):
            l.hl(4, 18, y, 'o')
        for (x, y) in ((6, 12), (12, 13), (7, 24), (13, 25), (6, 36), (12, 37)):
            l.rect(x, y, x + 3, y + 4, 'Q'); l.px(x + 1, y + 1, 'q')
        l.rect(44, 6, 62, 52, 'o'); l.rect(46, 8, 60, 50, 'P')
        for y in (18, 30, 42):
            l.hl(46, 60, y, 'o')
        for (x, y) in ((48, 12), (54, 13), (49, 24), (55, 25), (48, 36)):
            l.rect(x, y, x + 3, y + 4, 'Q'); l.px(x + 1, y + 1, 'q')
    bg(c, cabinet, None)
    DK = {'n': 'N'}
    tops = fig(c, DK, 31, 11, 'a', 'A', hs='short', hk='h', hd='H', pose='raise', mouth='o',
               face=lambda h: glasses(h, 23, 11, 16, 'Q'), legs=dict(pants='n', pdark='N', shoe='z', lh=6))
    rx, ry = tops['R']
    held(c, lambda l: (l.poly([(rx - 1, ry - 9), (rx + 5, ry - 9), (rx + 4, ry - 2), (rx, ry - 2)], 'Q'),
                       l.vl(rx + 1, ry - 8, ry - 3, 'q')))      # a new silver piece, held up to the light
    c.paste(solo(lambda l: hand(l, rx, ry - 1, 'grip', 'a', 'A', True)))
    return c.rows(), pal


PORTRAIT = ('silver.collector', art)
