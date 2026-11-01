import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """High Society counts 2: a couple at a gala, champagne and a monocle."""
    c = C(N)
    pal = base_pal(p='#2e3a4a', P='#26303e', y='#f3dc8a', Y='#c9a24a', q='#eef2f6', Q='#b0b8c0', c='#f0d090', f='#5a4060',
                   h='#2b1d18', H='#4a332a', j='#e4e0dc', J='#a8a4a4', n='#1e1e22', N='#141418',
                   a=PALE[0], A=PALE[1], d=DEEP[0], D=DEEP[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'f')

    def chandelier(l):
        l.vl(31, 0, 3, 'Y'); l.ell(26, 3, 37, 7, 'Y'); l.hl(27, 36, 5, 'y')
        for x in (26, 31, 36):
            l.px(x, 8, 'y')
    bg(c, chandelier, None)
    DK = {'n': 'N'}

    def glass(cc, tops):
        rx, ry = tops['R']
        held(cc, lambda l: (l.poly([(rx, ry - 8), (rx + 4, ry - 8), (rx + 3, ry - 3), (rx + 1, ry - 3)], 'q'),
                            l.rect(rx + 1, ry - 7, rx + 3, ry - 5, 'c'), l.vl(rx + 2, ry - 2, ry, 'Q')))
        cc.paste(solo(lambda l: hand(l, rx, ry, 'grip', *tops['skin'], True)))

    def guest(cc, sk, hs, hk, hd, mouth, mono, gown, side='L'):
        def front(f):
            if gown:
                f.pts('q', [(29, 30), (30, 31), (31, 32), (32, 32), (33, 31), (34, 30)])
            else:
                f.poly([(29, 29), (35, 29), (32, 33)], 'w'); f.rect(30, 29, 34, 30, 'n')
        face = (lambda h: (h.ring(35, 19, 38, 22, 'Y'), h.vl(38, 23, 28, 'Y'))) if mono else None
        tops = fig(cc, DK, 32, 12, sk[0], sk[1], hs=hs, hk=hk, hd=hd, pose='raise', mouth=mouth, side=side,
                   front=front, face=face, size=16, th=17, cloth='1' if gown else 'n', cdark='2' if gown else 'N')
        tops['skin'] = sk
        glass(cc, tops)
    c.paste(solo(lambda cc: guest(cc, ('d', 'D'), 'bun', 'h', 'H', 'smile', False, True, 'R'), dx=12, dy=1, mirror=True))
    c.paste(solo(lambda cc: guest(cc, ('a', 'A'), 'short', 'j', 'J', 'smirk', True, False), dx=-12))
    return c.rows(), pal


PORTRAIT = ('silver.highsociety', art)
