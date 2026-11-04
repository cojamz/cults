import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#6a5a4a', P='#5e4e40', o='#8a5a36', O='#6a4227', q='#eef2f6', Q='#b0b8c0', s='#8e959c',
                   y='#f7d774', R='#c74a3a', h='#2b1d18', H='#4a332a', a=VDEEP[0], A=VDEEP[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p')

    def shelf(l):                         # polished silver lined up on the shelf
        l.rect(0, 20, 63, 21, 'O')
        for x in (3, 50):
            l.poly([(x, 10), (x + 8, 10), (x + 6, 19), (x + 2, 19)], 'Q'); l.vl(x + 2, 11, 18, 'q')
        l.ell(13, 12, 21, 19, 'Q'); l.ell(42, 12, 48, 19, 'Q')
    bg(c, shelf, None)
    DK = {}
    fig(c, DK, 32, 11, 'a', 'A', hs='crop', hk='h', hd='H', pose='hold', mouth='smile', th=18)

    def table(l):
        l.rect(0, 46, 63, 49, 'o'); l.rect(0, 50, 63, 63, 'O')
    bg(c, table, None)

    def tray(l):                           # a tray held up and rubbed to a shine, the cloth in hand
        l.ell(16, 34, 48, 46, 'Q'); l.ell(18, 35, 46, 44, 'q'); l.ell(20, 36, 30, 40, 'w')
        l.rect(36, 37, 42, 43, 'R')
    held(c, tray)
    c.pts('w', [(52, 30), (51, 31), (53, 31), (52, 32), (14, 30), (13, 31), (15, 31), (14, 32)])   # sparkle
    hl = layer(); hand(hl, 15, 38, 'grip', 'a', 'A'); hand(hl, 37, 38, 'flat', 'a', 'A', True); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('silver.polisher', art)
