import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#c9c3b4', P='#b8b2a3', q='#8a95a3', Q='#76818f', o='#8a6a4c', O='#6e5238', d='#c9a066', D='#9e7840',
                   n='#2f3a5a', N='#232c46', y='#f7d774', R=RED[0], r='#8a2f2f', h='#2b1d18', H='#4a332a',
                   a=MED[0], A=MED[1], **{'1': YELLOW[0], '2': YELLOW[1]})
    c.rect(0, 0, 63, 63, 'p')

    def booth(l):                         # the border window and a barrier arm
        l.rect(42, 6, 61, 24, 'q'); l.rect(44, 8, 59, 22, 'P'); l.vl(51, 8, 22, 'q')
        l.rect(2, 30, 18, 32, 'R'); l.rect(6, 30, 9, 32, 'w'); l.rect(13, 30, 16, 32, 'w'); l.rect(2, 30, 3, 44, 'Q')
    bg(c, booth, None)
    DK = {'n': 'N', 'd': 'D', 'o': 'O'}

    def cap(f):                           # peaked cap with a badge
        f.rect(23, 7, 40, 12, 'n'); f.hl(24, 39, 6, 'n'); f.hl(21, 42, 13, 'N'); f.rect(30, 8, 32, 10, 'y')
    tops = fig(c, DK, 31, 9, 'a', 'A', hs='crop', hk='h', hd='H', pose='raise', mouth='flat', top=cap, th=20)
    rx, ry = tops['R']
    held(c, lambda l: (l.rect(rx + 1, ry - 6, rx + 2, ry, 'o'), l.rect(rx - 1, ry - 9, rx + 4, ry - 7, 'O'),
                       l.rect(rx - 2, ry + 3, rx + 5, ry + 4, 'r')))          # rubber stamp, raised to bang down
    def counter(l):
        l.rect(0, 44, 63, 47, 'o'); l.rect(0, 48, 63, 63, 'O')
    bg(c, counter, None)
    held(c, lambda l: (l.rect(10, 35, 22, 44, 'd'), l.hl(10, 22, 39, 'D'), l.vl(16, 35, 44, 'D'),        # a crate in for inspection
                       l.rect(38, 40, 48, 44, 'n'), l.rect(40, 41, 46, 42, 'y')))                        # and a passport
    return c.rows(), pal


PORTRAIT = ('yellow.customs', art)
