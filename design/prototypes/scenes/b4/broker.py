import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def broker():
    c = C(N)
    pal = {'k': INK, 'w': WHITE[0], 'W': WHITE[1],
           'p': '#7e8a96', 'P': '#717d89', 'b': '#2f3a44', 'B': '#3b4752', 'g': '#7fd08a', 'r': '#e07a6a',
           'o': '#8a5434', 'O': '#6a3d25', 't': '#5e6f8a', 'T': '#46546c',
           'e': DEEP[0], 'E': DEEP[1], 'a': PALE[0], 'A': PALE[1], 'b': OLIVE[0], 'B': OLIVE[1], 'y': '#d8b060', 'Y': '#a8843e', 'H': '#1d1512', 'z': '#4a3c34', 'n': '#4a4f5c', 'N': '#3a3e4a',
           'm': '#626878', 'M': '#4a4f5c'}
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 46, 63, 63, 'P')

    def board(l):
        l.rect(2, 3, 61, 28, 'B'); l.rect(4, 5, 59, 26, 'b')
        pts = [(6, 23), (14, 20), (20, 22), (28, 15), (35, 17), (44, 10), (50, 12), (57, 6)]
        for (a, b2) in zip(pts, pts[1:]):
            l.line(a[0], a[1], b2[0], b2[1], 'g'); l.line(a[0], a[1] + 1, b2[0], b2[1] + 1, 'g')
        l.pts('g', [(55, 6), (56, 6), (57, 7), (57, 8)])
        l.rect(6, 7, 9, 8, 'r'); l.rect(11, 7, 15, 8, 'g')
    bg(c, board, None)

    def desk(l):
        l.rect(0, 47, 63, 63, 'o'); l.hl(0, 63, 47, 'O'); l.hl(0, 63, 48, 'O')
    bg(c, desk, None)
    DK = {'w': 'W', 'e': 'E', 't': 'T', 'm': 'M'}

    def tie(f):
        f.poly([(30, 28), (33, 28), (34, 33), (33, 42), (31, 42), (30, 33)], 't')
        f.pts('T', [(33, 33), (33, 36), (32, 41)])
        f.hl(30, 33, 28, 'T')

    def handset(f):                                  # earpiece, handle, mouthpiece
        f.rect(19, 16, 23, 19, 'm'); f.rect(21, 20, 22, 27, 'm'); f.rect(19, 28, 23, 31, 'm')
        f.hl(19, 23, 19, 'M'); f.hl(19, 23, 28, 'M'); f.vl(22, 20, 27, 'M')
    def broker(cc, sk, hs, hk, hd, mouth, phone, side='L'):
        dk = dict(DK); dk[sk[0]] = sk[1]
        if phone:
            arms = [([(25, 31), (19, 35), (20, 27)], 3, 'w'), ([(39, 31), (46, 29), (48, 20)], 3, 'w')]
            hands = [(18, 22, 'fist', False), (46, 16, POINT, False)]
        else:                                        # waving a slip in the air
            arms = [([(25, 31), (22, 37), (24, 42)], 3, 'w'), ([(39, 31), (44, 27), (43, 19)], 3, 'w')]
            hands = [(22, 41, 'flat', False), (41, 16, 'fist', True)]
        person(cc, dk, 25, 12, sk, hs, hk, hd, mouth=mouth, brows='soft', brow=hk, cloth='w', cdark='W', side=side,
               sw=8, ww=8, th=20, nolegs=True, front=tie, top=handset if phone else None, arms=arms, hands=hands)
        if not phone:
            sl = layer(); sl.rect(40, 11, 45, 15, 'g'); outline_once(sl); cc.paste(sl)
    c.paste(solo(lambda cc: broker(cc, ('a', 'A'), 'long', 'y', 'Y', 'smile', False), dx=-17, dy=-1))
    c.paste(solo(lambda cc: broker(cc, ('b', 'B'), 'bun', 'H', 'z', 'grin', False, 'R'), dx=17, dy=-1, mirror=True))
    c.paste(solo(lambda cc: broker(cc, ('e', 'E'), 'crop', 'H', 'z', 'grin', True), dx=0, dy=3))
    return c.rows(), pal


PORTRAIT = ('trading.broker', broker)
