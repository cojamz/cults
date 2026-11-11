import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#5a4e48', P='#4e433e', f='#e9823a', y='#f7d774', m='#4a4f58', M='#33373e', q='#e8ecf0', Q='#b0b8c0',
                   o='#8a5a36', O='#6a4227', e='#6a5a4a', E='#544638', h='#2b1d18', H='#4a332a', z='#2a2220',
                   a=MED[0], A=MED[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'P', 'O')

    def forge(l):                         # the forge glow at the back
        l.rect(42, 14, 62, 40, 'm'); l.ell(46, 26, 58, 38, 'f'); l.ell(49, 30, 55, 36, 'y')
    bg(c, forge, 'M')
    DK = {'e': 'E', 'm': 'M', 'o': 'O'}

    def apron(f):
        f.poly([(24, 31), (36, 31), (37, 45), (23, 45)], 'e')
    tops = fig(c, DK, 30, 9, 'a', 'A', hs='crop', hk='h', hd='H', pose='raise', mouth='flat', brows='soft', front=apron,
               legs=dict(pants='h', pdark='H', shoe='z', lh=6))
    rx, ry = tops['R']
    held(c, lambda l: (l.rect(rx + 1, ry - 4, rx + 2, ry, 'o'), l.rect(rx - 2, ry - 8, rx + 5, ry - 5, 'm')))   # hammer up

    def anvil(l):
        l.rect(8, 40, 26, 43, 'm'); l.poly([(4, 40), (8, 40), (8, 42)], 'm'); l.rect(12, 44, 22, 52, 'M')
    held(c, anvil)
    held(c, lambda l: (l.poly([(12, 32), (22, 32), (20, 37), (14, 37)], 'q'), l.rect(16, 37, 18, 39, 'Q'),
                       l.rect(13, 39, 21, 39, 'q'), l.vl(19, 33, 36, 'Q')))                                    # a silver cup on it
    return c.rows(), pal


PORTRAIT = ('silver.silversmith', art)
