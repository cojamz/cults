import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(s='#c9d4dc', S='#b8c4cd', b='#a89e94', B='#968c82', g='#8a8f96', G='#7a7f86', o='#b07a4a', O='#7a5130',
                   r='#8a2f2f', R=RED[0], u=BLUE[0], h='#1c1513', H='#3a2a24', n='#3e4a5c', N='#2e3848', z='#2a2220',
                   a=MED[0], A=MED[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 's')

    def street(l):                        # town hall steps behind
        l.rect(0, 14, 63, 44, 'b'); l.poly([(-1, 14), (32, 4), (64, 14)], 'B')
        for x in (6, 20, 40, 54):
            l.rect(x, 16, x + 3, 44, 'B')
    bg(c, street, None)
    floor(c, 44, 'g', 'G')
    DK = {'n': 'N', 'o': 'O'}
    tops = fig(c, DK, 24, 19, 'a', 'A', hs='crop', hk='h', hd='H', pose='raise', size=14, mouth='open', brows='stern',
               legs=dict(pants='n', pdark='N', shoe='z', lh=8, stance=1))
    rx, ry = tops['R']
    c.paste(solo(lambda l: (l.rect(rx + 1, ry - 6, rx + 2, ry + 2, 'o'), l.vl(rx + 2, ry - 6, ry + 2, 'O'))))
    def sign(l):                          # the placard: one colour turning into another
        l.rect(rx - 4, ry - 19, rx + 18, ry - 6, 'w')
        l.ell(rx - 1, ry - 16, rx + 4, ry - 11, 'R'); l.ell(rx + 11, ry - 16, rx + 16, ry - 11, 'u')
        l.hl(rx + 6, rx + 9, ry - 13, 'h'); l.pts('h', [(rx + 8, ry - 14), (rx + 8, ry - 12)])
    held(c, sign)
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('yellow.agitator', art)
