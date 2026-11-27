import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def art():
    """Creditors: two at your door in silver suits, one with the ledger open, one pointing at what you owe."""
    c = C(N)
    pal = base_pal(p='#cdbfa6', P='#bba98c', d='#6e4a3a', D='#563828', o='#8a6a4c', O='#6e5238', y='#f2d27a',
                   m='#f4ede1', M='#c4bcae', R=RED[0], n='#2f3a5a', N='#232c46', z='#2a2220', h='#2b1d18', H='#4a332a',
                   j='#9a9590', J='#77726d', a=OLIVE[0], A=OLIVE[1], b=VDEEP[0], B=VDEEP[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p')

    def hall(l):                          # a front door frame behind them, the step
        l.rect(18, 2, 46, 52, 'd'); l.rect(21, 5, 43, 52, 'D'); l.rect(39, 28, 40, 30, 'y')
        l.rect(0, 53, 63, 63, 'O'); l.hl(0, 63, 53, 'o')
    bg(c, hall, None)
    DK = {'1': '2', 'n': 'N', 'm': 'M'}
    lg = dict(pants='n', pdark='N', shoe='z', lh=7)

    def tie(cx):
        return lambda f: (f.rect(cx - 2, 29, cx + 1, 31, '1'), f.rect(cx - 1, 31, cx, 38, 'R'))
    tl = {}

    def left(cc):                         # the ledger, held open
        tl.update(fig(cc, DK, 17, 13, 'b', 'B', hs='crop', hk='h', hd='H', pose='hold', mouth='flat', brows='soft',
                      front=tie(17), legs=lg, th=16, cloth='n', cdark='N'))
    c.paste(solo(left))

    def right(cc):                        # pointing out at you
        fig(cc, DK, 44, 12, 'a', 'A', hs='side', hk='j', hd='J', pose='wave', mouth='flat', brows='stern',
            front=tie(44), legs=lg, th=17, sw=7)
    c.paste(solo(right))
    lx, ly = tl['L']
    held(c, lambda l: (l.rect(lx - 3, ly - 6, lx + 12, ly + 2, 'm'), l.vl(lx + 4, ly - 6, ly + 2, 'M'),
                       l.vl(lx + 5, ly - 6, ly + 2, 'M'),
                       [l.hl(lx - 1, lx + 2, y, 'M') for y in (ly - 4, ly - 2, ly)],
                       [l.hl(lx + 7, lx + 10, y, 'M') for y in (ly - 4, ly - 2)], l.hl(lx + 7, lx + 10, ly, 'R'), [(l.hl(lx + 7, lx + 11, y, '1'), l.hl(lx + 7, lx + 11, y + 1, '2')) for y in (ly - 9, ly - 11)]))
    return c.rows(), pal


PORTRAIT = ('silver.creditors', art)
