import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#5a3e50', P='#4e3546', o='#8a5a36', O='#6a4227', q='#e8ecf0', Q='#b0b8c0', g='#7fb08a',
                   R=RED[0], u=BLUE[0], y='#f2d27a', h='#1c1513', H='#3a2a24', n='#2f3036', N='#222328', z='#1e1e22',
                   a=DEEP[0], A=DEEP[1], b=LIGHT[0], B=LIGHT[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 50, 'P', 'O')

    def bar(l):                           # a lounge bar behind
        l.rect(0, 30, 63, 33, 'o'); l.rect(0, 34, 63, 50, 'O')
        for x, k in ((4, 'g'), (10, 'R'), (50, 'u'), (57, 'y')):
            l.rect(x, 20, x + 3, 29, k); l.rect(x + 1, 17, x + 2, 19, k)
    bg(c, bar, None)
    DK = {'n': 'N'}

    def lapel(f):
        f.poly([(27, 30), (31, 30), (30, 36)], 'w'); f.px(25, 33, 'y')
    c.paste(solo(lambda cc: fig(cc, DK, 32, 12, 'b', 'B', hs='side', hk='o', hd='O', pose='hips', mouth='smirk', front=lapel,
                                legs=dict(pants='n', pdark='N', shoe='z', lh=6)), dx=16, dy=-1))
    tops = fig(c, DK, 22, 11, 'a', 'A', hs='short', hk='h', hd='H', pose='point', mouth='smirk', front=lapel,
               legs=dict(pants='n', pdark='N', shoe='z', lh=7, stance=1))
    rx, ry = tops['R']
    held(c, lambda l: (l.ell(rx + 6, ry - 1, rx + 11, ry + 4, 'q'), l.ell(rx + 7, ry, rx + 10, ry + 3, 'Q'),
                       l.px(rx + 7, ry, 'w')))     # a silver coin that pays for anything, held out
    return c.rows(), pal


PORTRAIT = ('silver.smoothtalker', art)
