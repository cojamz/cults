import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#7a4a5a', P='#6a3e4c', o='#8a5a36', O='#6a4227', q='#eef2f6', Q='#b0b8c0', r='#c74a3a', R='#9a3428',
                   u='#5b8fc7', U='#3d70a6', g='#5fa05a', y='#f3d27a', h='#c06a30', H='#934520',
                   a=OLIVE[0], A=OLIVE[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p')

    def shelf(l):                         # wrapped presents waiting behind
        l.rect(0, 22, 63, 23, 'O')
        for x, k in ((2, 'u'), (12, 'g'), (46, 'y'), (55, 'u')):
            l.rect(x, 13, x + 7, 21, k); l.vl(x + 3, 13, 21, 'q'); l.hl(x, x + 7, 17, 'q')
    bg(c, shelf, None)
    DK = {}
    fig(c, DK, 32, 9, 'a', 'A', hs='bun', hk='h', hd='H', pose='hold', mouth='grin', th=20, side='R')

    def counter(l):
        l.rect(0, 46, 63, 49, 'o'); l.rect(0, 50, 63, 63, 'O')
    bg(c, counter, None)

    def gift(l):                          # a present held out, tied with a silver bow
        l.rect(22, 33, 42, 47, 'r'); l.rect(38, 33, 42, 47, 'R'); l.rect(31, 33, 33, 47, 'q'); l.hl(22, 42, 39, 'q'); l.hl(22, 42, 40, 'Q')
        l.ell(25, 28, 31, 33, 'q'); l.ell(33, 28, 39, 33, 'q'); l.ell(27, 30, 29, 32, 'Q'); l.ell(35, 30, 37, 32, 'Q')
    held(c, gift)
    hl = layer(); hand(hl, 19, 39, 'grip', 'a', 'A'); hand(hl, 41, 39, 'grip', 'a', 'A', True); c.paste(hl)
    c.rect(48, 40, 58, 45, 'q'); c.rect(48, 40, 58, 41, 'Q')       # the roll of silver paper on the counter
    return c.rows(), pal


PORTRAIT = ('silver.giftwrapper', art)
