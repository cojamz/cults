import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def art():
    """Greeters: two at the open door of the meeting hall, waving the new member in. One holds a bunch of flowers."""
    c = C(N)
    pal = base_pal(p='#d8c7a6', P='#c8b693', d='#8a5a3a', D='#6e452b', l='#f7e3a0',
                   g=GREEN[0], G=GREEN[1], y='#f7d774', x='#e889a8', n='#3a3644', N='#2c2934', z='#2a2220',
                   h='#2a1d18', H='#4a3328', j='#c9a066', J='#9e7840',
                   a=MED[0], A=MED[1], b=PALE[0], B=PALE[1], **{'1': RED[0], '2': RED[1]})
    c.rect(0, 0, 63, 63, 'p')

    def doorway(l):                       # the open door behind them, warm light inside
        l.rect(20, 2, 44, 51, 'd'); l.rect(23, 5, 41, 51, 'l'); l.rect(23, 5, 41, 8, 'y')
        l.rect(44, 5, 49, 51, 'D')        # the door swung open
        l.rect(0, 52, 63, 63, 'P'); l.hl(0, 63, 52, 'D')
        l.rect(18, 54, 46, 59, '2')       # a red welcome mat
    bg(c, doorway, None)
    DK = {'1': '2', 'n': 'N'}
    lg = dict(pants='n', pdark='N', shoe='z', lh=7)
    def left(cc):                         # the shorter one, arm out: "come on in"
        fig(cc, DK, 13, 19, 'b', 'B', hs='bun', hk='j', hd='J', pose='point', size=14, mouth='grin', legs=lg, th=14, sw=7)
    c.paste(solo(left))
    tr = {}

    def right(cc):                        # holding a bunch of flowers up and out
        tr.update(fig(cc, DK, 47, 13, 'a', 'A', hs='crop', hk='h', hd='H', pose='raise', mouth='smile', legs=lg, th=16))
    c.paste(solo(right))
    hx, hy = tr['R']
    held(c, lambda l: (l.rect(hx, hy - 3, hx + 2, hy, 'G'),                       # the stems, in the fist
                       l.ell(hx - 3, hy - 9, hx + 5, hy - 3, 'g'),
                       [l.rect(x, y, x + 1, y + 1, k) for x, y, k in ((hx - 3, hy - 8, 'x'), (hx, hy - 10, 'y'), (hx + 3, hy - 9, 'x'),
                        (hx + 4, hy - 6, 'y'), (hx + 1, hy - 7, 'x'), (hx - 2, hy - 5, 'y'), (hx + 2, hy - 4, 'x'))]))
    hl = layer(); hand(hl, hx, hy, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('red.recruitbonus', art)
