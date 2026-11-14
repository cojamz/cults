import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#9fa89a', P='#8f988a', o='#8a6a4c', O='#6e5238', m='#a8acb4', M='#6f747b', q='#c9cdd2',
                   R=RED[0], u=BLUE[0], g=GREEN[0], y='#f7d774', h='#2b1d18', H='#4a332a', e='#5a4f46', E='#463d36',
                   a=PALE[0], A=PALE[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p')

    def pegboard(l):                      # tools hung on the wall
        l.rect(4, 4, 59, 26, 'P')
        l.rect(8, 8, 9, 20, 'M'); l.rect(6, 8, 11, 10, 'M')            # hammer
        l.ell(48, 8, 55, 15, 'M'); l.ell(50, 10, 53, 13, 'P')          # a ring spanner
        l.rect(14, 9, 16, 22, 'O'); l.rect(14, 7, 16, 8, 'm')          # screwdriver
    bg(c, pegboard, None)
    DK = {'o': 'O', 'm': 'M', 'e': 'E'}

    def apron(f):
        f.poly([(26, 31), (38, 31), (39, 44), (25, 44)], 'e'); f.poly([(35, 31), (38, 31), (39, 44), (36, 44)], 'E')
    tops = fig(c, DK, 30, 10, 'a', 'A', hs='short', hk='h', hd='H', pose='raise', front=apron,
               face=lambda h: glasses(h, 22, 10, 16, 'M'))
    rx, ry = tops['R']
    held(c, lambda l: (l.rect(rx + 1, ry - 7, rx + 2, ry, 'm'), l.ell(rx - 1, ry - 11, rx + 4, ry - 6, 'm'),
                       l.rect(rx + 1, ry - 10, rx + 2, ry - 8, 'p')))          # a wrench held up

    def bench(l):
        l.rect(0, 46, 63, 49, 'o'); l.rect(0, 50, 63, 63, 'O')
    bg(c, bench, None)
    parts = layer()                       # coloured parts swapped one for one on the bench
    for x, k in ((6, 'R'), (16, 'u'), (44, 'g'), (54, 'y')):
        parts.ell(x, 40, x + 6, 46, k); parts.ell(x + 2, 42, x + 4, 44, 'O')
    parts.line(13, 42, 15, 42, 'q'); parts.pts('q', [(14, 41), (14, 43)])
    outline_once(parts); c.paste(parts)
    return c.rows(), pal


PORTRAIT = ('yellow.tinker', art)
