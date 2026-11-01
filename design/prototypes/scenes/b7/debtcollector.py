import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    c = C(N)
    pal = base_pal(p='#7a7068', P='#6a6058', d='#8a5a36', D='#6a4227', b='#3a3040', q='#eef2f6', Q='#b0b8c0',
                   R='#c74a3a', h='#2b1d18', H='#4a332a', n='#2f3036', N='#222328', z='#1e1e22', e='#7a8288',
                   a=OLIVE[0], A=OLIVE[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'P', 'D')

    def door(l):                          # at a rival's front door
        l.rect(40, 6, 60, 52, 'd'); l.rect(42, 8, 58, 52, 'D'); l.rect(44, 10, 56, 28, 'd'); l.rect(44, 32, 56, 50, 'd')
        l.rect(42, 30, 44, 32, 'q')
    bg(c, door, None)
    DK = {'n': 'N'}

    def hat(f):                           # bowler
        f.ell(22, 3, 41, 13, 'b'); f.hl(19, 44, 12, 'b'); f.hl(20, 43, 13, 'b')
    tops = fig(c, DK, 28, 10, 'a', 'A', hs='crop', hk='h', hd='H', pose='point', mouth='flat', top=hat,
               legs=dict(pants='n', pdark='N', shoe='z', lh=6))
    held(c, lambda l: (l.rect(8, 32, 18, 44, 'R'), l.hl(9, 17, 35, 'w'), l.hl(9, 15, 38, 'w')))    # the bill, tucked under an arm
    return c.rows(), pal


PORTRAIT = ('silver.debtcollector', art)
