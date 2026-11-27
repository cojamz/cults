import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Line Cutters count 3: a trio slipping in at the front of the queue, the line behind them grumbling."""
    c = C(N)
    pal = base_pal(p='#cfd4d6', P='#bfc4c6', f='#a9aeac', F='#969b99', m='#8d8a96', M='#77747f', o='#c9a24a', O='#9e7a30',
                   R='#c0624a', h='#2b1d18', H='#4a332a', j='#e2b44e', J='#b8862e', n='#3b3f45', N='#2b2e33', z='#1e1e22',
                   a=LIGHT[0], A=LIGHT[1], d=MED[0], D=MED[1], e=DEEP[0], E=DEEP[1], **{'1': GREY[0], '2': GREY[1]})
    c.rect(0, 0, 63, 63, 'p'); floor(c, 52, 'f', 'F')

    def door(l):                          # the doors everyone is queueing for, with a FIRST sign
        l.rect(44, 4, 63, 52, 'm'); l.rect(47, 8, 62, 52, 'M'); l.rect(48, 10, 54, 26, 'R'); l.vl(51, 13, 23, 'w')
    bg(c, door, None)

    def line(l):                          # the queue behind them, a row of grey silhouettes and a rope
        for x, y in ((-2, 18), (7, 16), (15, 19)):
            l.ell(x, y, x + 7, y + 7, 'M'); l.rect(x - 1, y + 8, x + 8, 52, 'M')
        l.rect(0, 38, 22, 39, 'O'); l.rect(22, 34, 23, 52, 'o')
    bg(c, line, None)
    DK = {'n': 'N'}
    lg = dict(pants='n', pdark='N', shoe='z', lh=8)
    c.paste(solo(lambda cc: fig(cc, DK, 32, 12, 'e', 'E', hs='short', hk='h', hd='H', pose='down', size=14, mouth='smile',
                                legs=lg), dx=22, dy=-3))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 14, 'd', 'D', hs='crop', hk='h', hd='H', pose='point', size=14, mouth='smirk', legs=lg),
                 dx=12, dy=-1))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 15, 'a', 'A', hs='bun', hk='j', hd='J', pose='hips', size=14, mouth='grin', side='R',
                                legs=lg, face=lambda h: happy_eyes(h, 25, 15, 14, 'a')), dx=-3, dy=1))
    return c.rows(), pal


PORTRAIT = ('benders.frontrunner', art)
