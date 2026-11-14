import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def art():
    """Hostesses: two in silver gowns at the party door, handing every guest a silver coin from a tray."""
    c = C(N)
    pal = base_pal(p='#b9a7c9', P='#a895b9', o='#7a5a7a', O='#634763', y='#f7d774', Y='#d9b04a',
                   m='#eef0f2', M='#a9b0b7', h='#2b1d18', H='#4a332a', j='#c9a066', J='#9e7840', z='#2a2220',
                   a=LIGHT[0], A=LIGHT[1], b=DEEP[0], B=DEEP[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p')

    def room(l):                          # a little chandelier, the only bright spot, and the floor
        l.rect(0, 54, 63, 63, 'o'); l.hl(0, 63, 54, 'O')
    bg(c, room, None)
    DK = {'1': '2', 'o': 'O'}

    def gown(cx):                         # the gown flares to the floor
        def g(f):
            skirt(f, cx, 40, 55, 12, 22, '1', '2')
        return g
    tl = {}

    def left(cc):                         # holding the tray of coins
        tl.update(fig(cc, DK, 18, 13, 'a', 'A', hs='bun', hk='j', hd='J', pose='hold', mouth='smile', th=12,
                      front=lambda f: (skirt(f, 18, 40, 55, 7, 11, '1', '2'), f.hl(12, 24, 39, 'o'), f.hl(12, 24, 40, 'o')), legs=None, sw=7))
    c.paste(solo(left))

    def right(cc):                        # holding a coin out to the next guest
        fig(cc, DK, 44, 11, 'b', 'B', hs='long', hk='h', hd='H', pose='point', mouth='grin', th=13, sw=7,
            front=lambda f: (skirt(f, 44, 38, 55, 7, 12, '1', '2'), f.hl(38, 50, 37, 'o'), f.hl(38, 50, 38, 'o')))
    c.paste(solo(right))
    lx, ly = tl['L']
    held(c, lambda l: (l.rect(lx - 4, ly + 1, lx + 14, ly + 2, 'M'),
                       [(l.rect(x, y, x + 3, y + 1, 'm'), l.hl(x, x + 3, y + 1, 'M')) for x, y in ((lx - 2, ly - 1), (lx - 2, ly - 3), (lx + 3, ly - 1), (lx + 8, ly - 1), (lx + 8, ly - 3), (lx + 8, ly - 5))]))
    held(c, lambda l: (l.ell(56, 21, 62, 27, 'M'), l.ell(57, 22, 61, 26, 'm'), l.px(58, 23, 'w')))
    return c.rows(), pal


PORTRAIT = ('silver.hostesses', art)
