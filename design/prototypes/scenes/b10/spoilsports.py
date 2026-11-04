import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Spoilsports: at the prize table, pin in hand, the winner's balloon already popped."""
    c = C(N)
    pal = base_pal(p='#cfd6c4', P='#bcc4b0', o='#9a7650', O='#7a5a3a', y='#f1c63e', Y='#c7951f',
                   x='#e06a6a', X='#b04848', u=BLUE[0], m='#e8e2d6', M='#b8b2a4', n='#4a4f5c', N='#373b46',
                   h='#5a3a28', H='#3e281b', z='#2a2220', a=OLIVE[0], A=OLIVE[1], **{'1': GREY[0], '2': GREY[1]})
    c.rect(0, 0, 63, 63, 'p')

    def bunting(l):                       # party bunting across the top
        for i, x in enumerate(range(2, 62, 8)):
            l.poly([(x, 3), (x + 6, 3), (x + 3, 8)], 'x' if i % 2 else 'u')
        l.hl(0, 63, 2, 'M')
    bg(c, bunting, None)

    def table(l):                         # the prize table with the trophy on it
        l.rect(40, 40, 63, 41, 'y'); l.rect(40, 42, 63, 44, 'o'); l.rect(40, 45, 63, 63, 'O')
        l.rect(46, 26, 55, 31, 'y'); l.rect(48, 32, 53, 34, 'Y'); l.rect(49, 35, 52, 36, 'y'); l.rect(46, 37, 55, 39, 'Y')
        l.rect(44, 27, 45, 29, 'Y'); l.rect(56, 27, 57, 29, 'Y')
    bg(c, table, 'O')
    c.rect(0, 52, 39, 63, 'P')
    DK = {'1': '2', 'n': 'N'}
    tops = fig(c, DK, 22, 12, 'a', 'A', hs='side', hk='h', hd='H', pose='point', mouth='frown', brows='angry',
               legs=dict(pants='n', pdark='N', shoe='z', lh=7))
    rx, ry = tops['R']
    # the winner's big red balloon, tied to the trophy, and his needle about to touch it
    c.vl(50, 18, 25, 'M')
    held(c, lambda l: (l.ell(43, 4, 56, 17, 'x'), l.ell(50, 8, 56, 17, 'X'), l.rect(46, 7, 47, 8, 'm'),
                       l.rect(49, 18, 51, 18, 'X')))
    c.line(rx + 2, ry, rx + 12, ry - 9, 'M'); c.line(rx + 3, ry, rx + 13, ry - 9, 'n')     # the needle, no ink
    for x, y in ((rx + 14, ry - 13), (rx + 16, ry - 10), (rx + 11, ry - 13)):             # a little burst where it touches
        c.px(x, y, 'y')
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('benders.spoilsports', art)
