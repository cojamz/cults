import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Big Family counts 4: two parents and two kids on the front step."""
    c = C(N)
    pal = base_pal(s='#bfdbe6', g='#8fb877', G='#7aa565', o='#c9a072', O='#a07a4e', d='#7a4a2e', y='#f3d27a',
                   h='#2b1d18', H='#4a332a', j='#d8b060', J='#a8843e', n='#3a4660', N='#2c364c', z='#2a2220',
                   a=MED[0], A=MED[1], b=LIGHT[0], B=LIGHT[1], e=OLIVE[0], E=OLIVE[1], **{'1': RED[0], '2': RED[1]})
    c.rect(0, 0, 63, 63, 's'); floor(c, 50, 'g', 'G')

    def house(l):                         # the house front behind them
        l.rect(4, 6, 60, 50, 'o'); l.poly([(0, 8), (32, -4), (64, 8)], 'd')
        l.rect(26, 22, 38, 50, 'd'); l.rect(8, 14, 18, 24, 's'); l.rect(46, 14, 56, 24, 's')
    bg(c, house, 'O')
    DK = {'n': 'N'}
    lg = lambda lh: dict(pants='n', pdark='N', shoe='z', lh=lh)
    c.paste(solo(lambda cc: fig(cc, DK, 32, 8, 'a', 'A', hs='crop', hk='h', hd='H', pose='down', size=14, legs=lg(9)), dx=-12, dy=0))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 9, 'b', 'B', hs='long', hk='j', hd='J', pose='down', size=14, legs=lg(9)), dx=12, dy=0))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 22, 'e', 'E', hs='bun', hk='h', hd='H', pose='wave', size=14, mouth='grin',
                                legs=lg(5), th=9, sw=5), dx=-5, dy=6))
    c.paste(solo(lambda cc: fig(cc, DK, 32, 24, 'e', 'E', hs='short', hk='H', hd='h', pose='down', size=14, legs=lg(4), th=8, sw=5),
                 dx=7, dy=7))
    return c.rows(), pal


PORTRAIT = ('red.bigfamily', art)
