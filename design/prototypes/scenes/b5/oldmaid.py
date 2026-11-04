import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *

# Old Maid (was Saboteur; Cory, 2026-10-31): the card nobody wants stuck in their hand. A prim old lady in her
# parlour, holding her hand of cards close, the cat at her feet, tea on the side table.


def oldmaid():
    c = C(N)
    pal = base(PALE, 'grey', p='#7a6572', P='#6d5966', f='#5b4234', F='#4c372b',
               W='#c9d3d6', V='#a9b6bb', L='#e8dfcf', l='#cdbfa9',
               o='#8a5b3c', O='#6e4630', t='#f4ede1', T='#c9c0b2',
               H='#d8d8de', z='#a7a7b2', q='#6f7376', Q='#585c5f',
               c='#d98a3e', C='#b36a2a', R='#b8423a', h='#4a3a33')
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 36, 63, 53, 'P'); c.rect(0, 54, 63, 63, 'f')

    def window(l):                                  # small window, lace curtains drawn back
        l.rect(4, 6, 19, 26, 'o'); l.rect(6, 8, 17, 24, 'W'); l.vl(11, 8, 24, 'o'); l.vl(12, 8, 24, 'o')
        l.hl(6, 17, 16, 'o'); l.rect(13, 9, 17, 15, 'V')
        l.poly([(3, 5), (8, 5), (6, 16), (4, 27), (3, 27)], 'L'); l.poly([(15, 5), (20, 5), (20, 27), (18, 27), (17, 16)], 'L')
        l.pts('l', [(4, 9), (4, 10), (4, 11), (5, 19), (5, 20), (4, 23), (4, 24), (4, 25),
                    (19, 9), (19, 10), (19, 11), (18, 19), (18, 20), (19, 23), (19, 24), (19, 25)])
    bg(c, window, None)

    def table(l):                                   # little round side table, cup and saucer
        l.rect(4, 40, 19, 40, 'o'); l.hl(5, 18, 41, 'O'); l.vl(11, 42, 54, 'o'); l.vl(12, 42, 54, 'O')
        l.hl(8, 15, 55, 'O'); l.hl(9, 14, 54, 'o')
        l.hl(7, 15, 39, 't'); l.rect(9, 35, 13, 38, 't'); l.pts('T', [(13, 36), (13, 37), (12, 38)])
        l.pts('t', [(14, 36), (15, 36), (15, 37)]); l.hl(9, 13, 35, 'T')
    bg(c, table, None)

    cx = 37
    hy = 17
    ty = hy + 15
    DK = {'1': '2', 'q': 'Q', 'H': 'z', 'w': 'T', 't': 'T'}

    def front(f):                                   # long skirt over the legs, lace collar, a fold at the hem
        f.poly([(cx - 7, 43), (cx + 8, 43), (cx + 11, 53), (cx - 10, 53)], 'q')
        f.poly([(cx + 6, 47), (cx + 7, 47), (cx + 10, 53), (cx + 6, 53)], 'Q', only='q')
        f.pts('h', [(cx - 6, 54), (cx - 5, 54), (cx - 4, 54), (cx + 3, 54), (cx + 4, 54), (cx + 5, 54)])
        f.rect(cx - 3, ty, cx + 3, ty + 1, 'w'); f.pts('w', [(cx - 2, ty + 2), (cx + 2, ty + 2)]); f.px(cx, ty + 1, 'T')

    def bun(f):                                     # a small round bun at the back of the head
        x1 = cx - 7 + 13
        f.rect(x1 - 3, hy - 4, x1, hy - 1, 'H'); f.pts('.', [(x1 - 3, hy - 4), (x1, hy - 4)])
        f.pts('z', [(x1, hy - 2), (x1 - 1, hy - 1), (x1, hy - 1)])

    def cards(f):                                   # her hand of cards, backs out: bottoms together in her hands, tops spread
        l = layer()
        for i, (bx, lean, top) in enumerate([(cx - 7, -4, 38), (cx - 5, -2, 36), (cx - 2, 0, 35), (cx + 1, 2, 36), (cx + 3, 4, 38)]):
            for y in range(top, 45):
                x = bx + round(lean * (44 - y) / (44 - top))
                face = i == 4                       # the front card shows its face: one red pip
                l.hl(x, x + 4, y, 't' if y == top or face else 'R')
                l.px(x, y, 'T' if face else 't'); l.px(x + 4, y, 'T')
                if face and y in (top + 2, top + 3):
                    l.hl(x + 2, x + 3, y, 'R')
        over(f, l, DK)
        for hx, flip in ((cx - 8, False), (cx + 5, True)):    # thumbs over the front of the fan
            hand(f, hx, 43, 'grip', 's', 'S', flip)

    person(c, cx, hy, hs='short', hk='H', hdk='z', mouth='flat', brows='stern', brow='z',
           shirt='1', sdk='2', sw=7, ww=6, th=11, pants='q', pdk='Q', shoe='h', lh=4, gap=2, front=front, DK=DK, slope=3,
           arms=[([(cx - 6, ty + 4), (cx - 11, ty + 8), (cx - 7, ty + 12)], 4, '1'),
                 ([(cx + 6, ty + 4), (cx + 11, ty + 8), (cx + 7, ty + 12)], 4, '1')],
           hands=[], hat=bun, top=cards)

    def cat(l):                                     # ginger cat sitting, tail curled on the floor
        l.ell(47, 47, 58, 56, 'c')
        l.rect(50, 42, 55, 48, 'c'); l.hl(51, 54, 41, 'c')
        l.pts('c', [(50, 39), (50, 40), (51, 40), (55, 39), (55, 40), (54, 40)])
        l.pts('k', [(51, 44), (54, 44)]); l.pts('C', [(52, 46), (53, 46), (52, 48), (53, 48)])
        l.pts('C', [(56, 51), (57, 51), (56, 52), (57, 52), (57, 53), (56, 54), (57, 54), (55, 54)])
        l.hl(57, 61, 56, 'c'); l.vl(61, 52, 56, 'c'); l.px(60, 52, 'c')
    bg(c, cat, 'C')
    return c.rows(), pal


PORTRAIT = ('benders.saboteur', oldmaid)
