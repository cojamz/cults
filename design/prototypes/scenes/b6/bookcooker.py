import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Book Cookers: three bookkeepers cooking the books, a ledger sizzling in a frying pan."""
    c = C(N)
    pal = base_pal(**{
        'p': '#b9b49a', 'P': '#aaa58b',          # office wall
        'o': '#8a6a4c', 'O': '#6e5238',          # desk
        'm': '#5a5f66', 'M': '#3e4248',          # pan
        'f': '#e9823a', 'y': '#f7d774',          # flame
        'b': '#c74a3a', 'B': '#93352a',          # ledger cover
        '1': YELLOW[0], '2': YELLOW[1], 'W': '#d8d0c4',
        'h': '#2b1d18', 'H': '#4a332a', 'j': '#b0522c', 'g': '#9a9590',
        'a': MED[0], 'A': MED[1], 's': PALE[0], 'S': PALE[1], 'd': DEEP[0], 'D': DEEP[1]})
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 0, 63, 3, 'P')

    def cabinet(l):                          # filing cabinet and a wall clock
        l.rect(2, 10, 12, 44, 'P'); l.hl(3, 11, 20, 'O'); l.hl(3, 11, 31, 'O'); l.rect(6, 14, 8, 15, 'O'); l.rect(6, 25, 8, 26, 'O')
        l.ell(50, 5, 59, 14, 'W'); l.vl(54, 7, 9, 'h'); l.hl(55, 56, 9, 'h')
    bg(c, cabinet, None)

    DK = {'1': '2', 'a': 'A', 's': 'S', 'd': 'D', 'w': 'W', 'h': 'H', 'm': 'M', 'b': 'B', 'o': 'O'}

    def collar(cx, ty):
        return lambda f: f.poly([(cx - 3, ty), (cx + 3, ty), (cx, ty + 3)], 'w')

    # left: tears pages out of a second ledger, sly
    def ledger_l(f):
        f.rect(4, 37, 15, 43, 'w'); f.rect(4, 37, 15, 38, 'b'); f.vl(9, 39, 43, 'W')
    person(c, DK, hx=5, hy=15, skin='s', shade='S', mouth='smirk', brows='soft', brow='j',
           hs='bun', hk='j', hd='H', side='L', cloth='1', cdark='2', cx=12, sw=7, ww=6, th=16,
           arms=[([(6, 34), (4, 38), (6, 41)], 3), ([(18, 34), (19, 39), (16, 41)], 3)],
           hands=[(4, 40, 'grip', False), (14, 40, 'grip', True)], front=collar(12, 31), top=ledger_l)

    # right: glasses, keeps lookout with a finger to the lips
    def specs(h):
        glasses(h, 44, 14, 14, 'h')
    person(c, DK, hx=44, hy=14, skin='d', shade='D', mouth='smile', brows='soft', brow='h',
           hs='crop', hk='h', hd='H', cloth='1', cdark='2', cx=51, sw=7, ww=7, th=17,
           arms=[([(45, 33), (42, 39), (45, 43)], 3), ([(57, 33), (59, 37), (56, 29)], 3)],
           hands=[(43, 42, 'flat', False), (52, 26, 'thumb', True)], front=collar(51, 30), face=specs)

    # centre: the cook, shaking the pan with the ledger in it
    def pan(f):
        f.ell(19, 34, 41, 41, 'm'); f.ell(20, 34, 40, 38, 'M', only='m')
        f.rect(41, 37, 50, 38, 'h')
        f.rect(23, 33, 37, 36, 'w'); f.rect(23, 33, 29, 34, 'b'); f.vl(30, 33, 36, 'W'); f.hl(31, 36, 35, 'g')
        hl = layer(); hand(hl, 45, 36, 'grip', 'a', 'A', True); over(f, hl, DK)
    person(c, DK, hx=24, hy=11, size=16, skin='a', shade='A', mouth='grin', brows='soft', brow='h',
           hs='short', hk='h', hd='H', cloth='1', cdark='2', cx=32, sw=8, ww=7, th=18,
           arms=[([(25, 32), (22, 37), (26, 40)], 3), ([(39, 32), (44, 35), (46, 37)], 3)],
           hands=[], front=collar(32, 28), top=pan)

    def desk(l):
        l.rect(0, 47, 63, 63, 'O'); l.rect(0, 46, 63, 48, 'o')
    bg(c, desk, None)
    fl = layer()                               # a little flame under the pan, on a camping stove
    fl.rect(24, 44, 38, 46, 'M')
    fl.poly([(25, 44), (27, 40), (29, 44)], 'f'); fl.poly([(30, 44), (32, 39), (34, 44)], 'f'); fl.poly([(35, 44), (37, 41), (38, 44)], 'f')
    fl.pts('y', [(27, 43), (32, 42), (32, 43), (36, 43)])
    c.paste(fl)
    c.pts('W', [(27, 30), (28, 29), (28, 28), (33, 30), (34, 29), (34, 28)])   # smoke curls off the pages
    return c.rows(), pal


PORTRAIT = ('yellow.bookcooker', art)
