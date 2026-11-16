import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Makeover counts 3: a stylist and two clients showing off fresh new looks in the salon mirror."""
    c = C(N)
    pal = base_pal(p='#e3cfd6', P='#d6c0c8', q='#c8dde6', Q='#a9c4d0', m='#a8acb4', M='#6f747b', y='#f7d774',
                   x='#d24a7a', X='#a83a60', h='#2b1d18', H='#4a332a', j='#d24a7a', J='#a83a60', l='#7a4ab0',
                   n='#3e3a4a', N='#2e2b38', z='#2a2220', a=LIGHT[0], A=LIGHT[1], d=DEEP[0], D=DEEP[1], e=MED[0], E=MED[1],
                   **{'1': BLUE[0], '2': BLUE[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 54, 'P')

    def mirror(l):                        # the salon mirror with its bulbs
        l.rect(6, 4, 57, 30, 'm'); l.rect(8, 6, 55, 28, 'q'); l.poly([(36, 6), (44, 6), (30, 28), (22, 28)], 'Q')
        for x in range(8, 56, 8):
            l.rect(x, 2, x + 1, 3, 'y')
    bg(c, mirror, 'M')
    DK = {'n': 'N'}
    lg = dict(pants='n', pdark='N', shoe='z', lh=8)
    c.paste(solo(lambda cc: fig(cc, DK, 32, 15, 'd', 'D', hs='bun', hk='l', hd='h', pose='hips', size=14, mouth='smile', legs=lg), dx=-19, dy=1))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 15, 'e', 'E', hs='side', hk='j', hd='J', pose='wave', size=14, mouth='grin', legs=lg), dx=19, dy=1, mirror=True))
    tops = fig(c, DK, 32, 13, 'a', 'A', hs='short', hk='h', hd='H', pose='raise', size=14, legs=lg)
    rx, ry = tops['R']
    held(c, lambda l: (l.ell(rx - 1, ry - 7, rx + 2, ry - 4, 'm'), l.ell(rx + 2, ry - 7, rx + 5, ry - 4, 'm'),
                       l.line(rx + 1, ry - 4, rx + 2, ry, 'M'), l.line(rx + 3, ry - 4, rx + 2, ry, 'M')))   # scissors up
    c.pts('w', [(8, 40), (7, 41), (9, 41), (8, 42), (56, 36), (55, 37), (57, 37), (56, 38)])      # sparkle
    return c.rows(), pal


PORTRAIT = ('market.makeover', art)
