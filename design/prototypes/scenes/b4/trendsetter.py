import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def trendsetter():
    c = C(N)
    pal = {'k': INK, 'w': '#f6f1e6', 'W': '#d3cabb',
           'p': '#463f63', 'P': '#3c3656', 'f': '#cfc6d6', 'F': '#b3a9bd', 'y': '#f4dc8a', 'Y': '#d6b25c',
           '1': BLUE[0], '2': BLUE[1], 'e': DEEP[0], 'E': DEEP[1], 'a': PALE[0], 'A': PALE[1], 'b': OLIVE[0], 'B': OLIVE[1], 'h': '#d8b060', 'j': '#a8843e',
           'H': '#1f1714', 'z': '#5a4a3e', 'g': '#2b4a5e', 'n': '#ece5d6', 'N': '#c4bba9', 'r': '#7a2a2a'}
    c.rect(0, 0, 63, 63, 'p')
    for x in (8, 30, 50):                          # a flat drape with three soft folds
        c.poly([(x, 0), (x + 6, 0), (x + 7, 36), (x + 4, 40), (x + 1, 37)], 'P')
    c.poly([(20, 40), (44, 40), (64, 64), (0, 64)], 'F')
    c.poly([(22, 41), (42, 41), (60, 64), (4, 64)], 'f')
    for x in (6, 30, 54):                          # three small stage lights
        c.rect(x, 2, x + 3, 4, 'Y'); c.hl(x + 1, x + 2, 5, 'y')
    for (x, y) in ((3, 46), (59, 50)):             # camera flashes from the crowd
        c.rect(x, y, x + 1, y + 1, 'y')
    DK = {'1': '2', 'e': 'E', 'n': 'N', 'w': 'W', 'g': 'g'}

    def shirt(f):
        f.poly([(28.5, 28), (35.5, 28), (32, 35)], 'w')
        for (x, y) in ((28, 28), (28, 29), (29, 30), (29, 31), (30, 32), (30, 33)):
            f.px(x, y, '2'); f.px(64 - x, y, '2')

    def shades(f):
        f.rect(27, 20, 31, 22, 'g'); f.rect(33, 20, 37, 22, 'g'); f.hl(31, 33, 20, 'g')
        f.px(28, 20, 'w'); f.px(34, 20, 'w')
    def model(cc, sk, hs, hk, hd, mouth, side='L'):
        dk = dict(DK); dk[sk[0]] = sk[1]
        person(cc, dk, 25, 12, sk, hs, hk, hd, mouth=mouth, brows=None, cloth='1', cdark='2',
               sw=8, ww=6, th=13, pants=('n', 'N'), shoe='z', lh=9, stance=1, front=shirt, top=shades, side=side,
               arms=[([(25, 31), (20, 36), (25, 40)], 3, '1'), ([(39, 31), (42, 37), (44, 42)], 3, '1')],
               hands=[(24, 38, 'fist', False), (42, 42, 'flat', True)])
    c.paste(solo(lambda cc: model(cc, ('a', 'A'), 'bun', 'h', 'j', 'flat', 'R'), dx=-17, dy=-4))
    c.paste(solo(lambda cc: model(cc, ('b', 'B'), 'long', 'H', 'z', 'smile'), dx=17, dy=-4, mirror=True))
    c.paste(solo(lambda cc: model(cc, ('e', 'E'), 'side', 'H', 'z', 'smirk'), dx=0, dy=2))
    return c.rows(), pal


PORTRAIT = ('market.trendsetter', trendsetter)
