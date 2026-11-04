import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Shareholder counts 3: three at the boardroom table, a chart going up behind."""
    c = C(N)
    pal = base_pal(p='#5a6a7a', P='#4e5e6e', b='#2f3a44', g='#7fd08a', o='#6a4227', O='#4e3020', y='#d8c070',
                   h='#2b1d18', H='#4a332a', j='#e4e0dc', J='#a8a4a4', t='#5e6f8a', T='#46546c',
                   a=PALE[0], A=PALE[1], d=DEEP[0], D=DEEP[1], e=OLIVE[0], E=OLIVE[1], **{'1': WHITEC[0], '2': WHITEC[1]})
    c.rect(0, 0, 63, 63, 'p')

    def chart(l):
        l.rect(8, 4, 56, 22, 'b'); pts = [(11, 19), (20, 16), (28, 17), (36, 11), (44, 12), (53, 6)]
        for a, b in zip(pts, pts[1:]):
            l.line(a[0], a[1], b[0], b[1], 'g')
    bg(c, chart, None)
    DK = {'t': 'T'}
    tie = lambda f: (f.rect(31, 29, 32, 38, 't'), f.vl(32, 30, 38, 'T'))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 16, 'a', 'A', hs='long', hk='H', hd='h', pose='hold', size=14, th=20), dx=-19, dy=1))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 16, 'e', 'E', hs='crop', hk='h', hd='H', pose='hold', size=14, th=20, front=tie, mouth='flat'), dx=19, dy=1, mirror=True))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 13, 'd', 'D', hs='short', hk='h', hd='H', pose='hold', size=16, th=20, front=tie)))

    def table(l):
        l.rect(0, 44, 63, 47, 'o'); l.rect(0, 48, 63, 63, 'O')
        for x in (8, 44):
            l.rect(x, 41, x + 10, 44, 'w'); l.hl(x + 1, x + 8, 42, 'J')
    held(c, table)
    return c.rows(), pal


PORTRAIT = ('trading.shareholder', art)
