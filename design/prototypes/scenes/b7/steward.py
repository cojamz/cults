import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#7a6a5a', P='#6a5a4c', o='#c9a066', d='#5e3c26', D='#4a2e1c', q='#e8ecf0', Q='#b0b8c0',
                   b='#3a5a8a', B='#2c4670', y='#d8c070', h='#a8a4a4', H='#7a7676', n='#2f3036', N='#222328', z='#1e1e22',
                   a=OLIVE[0], A=OLIVE[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'd', 'D')

    def hall(l):                          # an estate hall: tall window, a portrait
        l.rect(4, 6, 18, 40, 'o'); l.rect(6, 8, 16, 38, 'P'); l.vl(11, 8, 38, 'o')
        l.rect(46, 8, 59, 26, 'o'); l.rect(48, 10, 57, 24, 'P')
    bg(c, hall, None)
    DK = {'n': 'N', 'b': 'B'}

    def vest(f):
        f.poly([(29, 29), (35, 29), (32, 33)], 'w'); f.pts('n', [(32, 35), (32, 38), (32, 41)])
    fig(c, DK, 32, 9, 'a', 'A', hs='short', hk='h', hd='H', pose='hold', mouth='smile', front=vest,
        legs=dict(pants='n', pdark='N', shoe='z', lh=8))

    def ledger(l):                        # the household ledger, a ring of silver keys at the belt
        l.rect(25, 36, 39, 46, 'b'); l.rect(26, 37, 38, 45, 'B'); l.rect(27, 38, 37, 39, 'y')
    held(c, ledger)
    hl = layer(); hand(hl, 23, 40, 'grip', 'a', 'A'); hand(hl, 38, 40, 'grip', 'a', 'A', True); c.paste(hl)
    held(c, lambda l: (l.ring(40, 46, 44, 50, 'Q'), l.rect(44, 49, 45, 53, 'q'), l.rect(41, 50, 42, 54, 'q')))
    return c.rows(), pal


PORTRAIT = ('silver.steward', art)
