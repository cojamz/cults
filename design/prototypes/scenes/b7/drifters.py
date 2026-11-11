import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(s='#f2d4a8', S='#e8c696', g='#c9b47a', f='#b8a07a', F='#a38c66', t='#8a9a6a', T='#74845a',
                   o='#8a6a4c', O='#6e5238', b='#c74a3a', B='#93352a', u=BLUE[0], U=BLUE[1],
                   h='#2b1d18', H='#4a332a', j='#c06a30', J='#934520', n='#5a4f46', N='#463d36', z='#2a2220',
                   a=LIGHT[0], A=LIGHT[1], d=DEEP[0], D=DEEP[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 's')
    bg(c, lambda l: (l.poly([(-1, 34), (14, 24), (30, 32), (48, 22), (64, 30), (64, 36), (-1, 36)], 't')), 'T')
    c.rect(0, 36, 63, 63, 'g')
    c.poly([(26, 36), (38, 36), (58, 63), (6, 63)], 'f'); c.poly([(28, 36), (36, 36), (40, 44), (24, 44)], 'F')   # the road away
    DK = {'n': 'N', 'o': 'O', 'b': 'B', 'u': 'U'}

    def bindle(x0, y0, k):                # stick over the shoulder, a knotted bundle behind
        def p(l):
            l.line(x0, y0, x0 - 12, y0 + 10, 'o'); l.line(x0 + 1, y0, x0 - 11, y0 + 10, 'O')
        return p

    def drifter(cc, sk, hs, hk, hd, mouth, k):    # thumbing a ride, pack on the back
        held(cc, lambda l: (l.rect(20, 28, 25, 44, k), l.rect(21, 26, 24, 27, k), l.hl(20, 25, 36, 'O')))
        fig(cc, DK, 32, 12, sk[0], sk[1], hs=hs, hk=hk, hd=hd, pose='point', size=14, mouth=mouth,
            legs=dict(pants='n', pdark='N', shoe='z', lh=8, stance=1),
            front=lambda f: (f.line(27, 29, 29, 41, 'O'), f.line(37, 29, 35, 41, 'O')))
    c.paste(solo(lambda cc: drifter(cc, ('d', 'D'), 'crop', 'h', 'H', 'smile', 'u'), dx=11, dy=-3))
    c.paste(solo(lambda cc: drifter(cc, ('a', 'A'), 'long', 'j', 'J', 'grin', 'b'), dx=-13, mirror=True))
    return c.rows(), pal


PORTRAIT = ('yellow.drifters', art)
