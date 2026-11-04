import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def draw():
    c = C(N)
    pal = base(p='#3a3552', P='#332f49', q='#1f2440', y='#f3dc8a', Y='#d9b65a', o='#7a5034', O='#5e3c26', d='#8f6040',
               g='#4f7a5a', G='#3a5c44', m='#a8acb4', M='#6f747b', e='#f2e8d2', x='#8a7a68',
               a=DEEP[0], A=DEEP[1], b=LIGHT[0], B=LIGHT[1], L='#8e5c3c', h='#1f1612', H='#3a2a24', j='#c0b7a6',
               **{'1': PURPLE[0], '2': PURPLE[1]})
    DK = {'1': '2', '2': '2', 'a': 'A', 'm': 'M'}
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 0, 63, 3, 'P')

    def window(l):                          # moon and an owl on the sill
        l.rect(0, 2, 14, 24, 'P'); l.rect(1, 4, 12, 22, 'q')
        l.ell(7, 5, 10, 8, 'y'); l.ell(8, 4, 11, 7, 'q', only='y')
        l.ell(2, 13, 8, 22, 'x'); l.rect(3, 15, 4, 16, 'y'); l.rect(6, 15, 7, 16, 'y'); l.pts('h', [(4, 16), (6, 16)])
        l.pts('O', [(2, 12), (3, 13), (8, 12), (7, 13)])
        l.px(4, 18, 'Y')
        l.rect(0, 22, 14, 24, 'P')
    bg(c, window, None)

    def lamp(l):
        return
        l.rect(4, 40, 13, 42, 'O'); l.rect(8, 30, 9, 39, 'O')
        l.poly([(3, 30), (6, 23), (12, 23), (15, 30)], 'g'); l.hl(4, 14, 30, 'y')
    bg(c, lamp, None)
    c.poly([(10, 23), (12, 23), (15, 30), (12, 30)], 'G', only='g')

    def owl(fc, skin, shade, hs, hk, hd, specs, mouth, mug):
        def front(f):                       # hoodie strings
            f.pts('j', [(30, 30), (30, 31), (30, 32), (34, 30), (34, 31), (34, 32)])
        dk = dict(DK); dk[skin] = shade
        person(fc, dk, hx=24, hy=11, size=16, skin=skin, shade=shade, mouth=mouth, brows='soft', brow=hk,
               hs=hs, hk=hk, hd=hd, cx=32, sw=10, ww=10, th=17, cloth='1', front=front,
               back=lambda f: (f.ell(20, 23, 44, 34, '2')),
               face=(lambda h: glasses(h, 24, 11, 'm', None, 16)) if specs else None,
               arms=[([(23, 31), (20, 37), (22, 42)], 4, '1'), ([(41, 31), (44, 37), (42, 42)], 4, '1')])
        if mug:                             # both hands round a mug of coffee
            mg = layer(); mg.rect(28, 36, 35, 44, 'y'); mg.rect(33, 36, 35, 44, 'Y'); mg.rect(36, 38, 37, 41, 'Y')
            hand(mg, 24, 40, 'grip', skin, shade); hand(mg, 36, 40, 'grip', skin, shade, flip=True)
            outline_once(mg); fc.paste(mg)
        else:                               # laptop, screen glow toward the face
            lap = layer()
            lap.poly([(22, 34), (40, 34), (42, 45), (20, 45)], 'm'); lap.rect(19, 44, 43, 46, 'M')
            lap.rect(23, 36, 39, 43, 'e'); lap.hl(23, 39, 43, 'j')
            outline_once(lap); fc.paste(lap)
            hl = layer(); hand(hl, 17, 41, 'flat', skin, shade); hand(hl, 43, 41, 'flat', skin, shade, flip=True)
            outline_once(hl); fc.paste(hl)

    def desk(l):
        l.rect(0, 43, 63, 46, 'd'); l.rect(0, 47, 63, 63, 'o'); l.hl(0, 63, 47, 'O')
        l.rect(4, 51, 26, 59, 'O'); l.rect(38, 51, 60, 59, 'O')
    bg(c, desk)
    c.paste(solo(lambda fc: owl(fc, 'b', 'B', 'side', 'o', 'O', False, 'smile', True), dx=12, dy=1))
    c.paste(solo(lambda fc: owl(fc, 'a', 'A', 'crop', 'h', 'H', True, 'smile', False), dx=-10))
    return c.rows(), pal


PORTRAIT = ('purple.nightowl', draw)
