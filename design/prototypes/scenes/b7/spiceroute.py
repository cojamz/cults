import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#d9b48a', P='#c9a27a', o='#a07a48', O='#7a5a34', m='#e8d8b8', M='#c8b490',
                   R='#c74a3a', r='#9a3428', u='#5b8fc7', U='#3d70a6', g='#7fae5b', G='#5f8a42', v='#9a62e6', V='#7445b8',
                   h='#2b1d18', H='#4a332a', a=OLIVE[0], A=OLIVE[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p')
    bg(c, lambda l: (l.rect(0, 0, 63, 6, 'P'), l.ell(4, 10, 18, 22, 'P'), l.ell(46, 10, 60, 22, 'P')), None)   # arches
    DK = {}
    tops = fig(c, DK, 32, 8, 'a', 'A', hs='short', hk='h', hd='H', pose='raise', mouth='grin', th=18)
    rx, ry = tops['R']
    held(c, lambda l: (l.rect(rx + 1, ry - 4, rx + 2, ry, 'O'), l.ell(rx - 2, ry - 8, rx + 5, ry - 3, 'o'),
                       l.ell(rx - 1, ry - 8, rx + 4, ry - 6, 'R')))         # a scoop of red spice

    def sacks(l):                         # open sacks heaped with spice of every colour
        for x, k, kd in ((0, 'R', 'r'), (14, 'u', 'U'), (36, 'g', 'G'), (50, 'v', 'V')):
            l.poly([(x + 1, 46), (x + 13, 46), (x + 14, 63), (x, 63)], 'm'); l.vl(x + 12, 47, 63, 'M')
            l.ell(x + 1, 41, x + 13, 49, k); l.ell(x + 7, 44, x + 13, 49, kd, only=k)
    held(c, sacks)
    return c.rows(), pal


PORTRAIT = ('yellow.spiceroute', art)
