import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def draw():
    c = C(N)
    pal = base(p='#c8b08c', P='#b89f7b', o='#8a5a36', O='#6b4227', d='#a8744a',
               y='#e0b648', Y='#b08a2c', m='#a8acb4', M='#7c8088', e='#f2e8d2',
               a=PALE[0], A=PALE[1], b=MED[0], B=MED[1], h='#b3aca6', H='#857e78',
               **{'1': PURPLE[0], '2': PURPLE[1], 'q': '#3a3448', 'u': '#e8e2d6', 'U': '#c9c2b4'})
    DK = {'1': '2', '2': '2', 'a': 'A', 'u': 'U', 'U': 'U', 'h': 'H'}
    c.rect(0, 0, 63, 63, 'p')
    c.rect(0, 0, 63, 3, 'P')

    def wallclock(l):                      # big clock face, wood rim
        l.ell(24, -1, 39, 14, 'o'); l.ell(26, 1, 37, 12, 'e')
        l.vl(31, 3, 7, 'q'); l.hl(32, 35, 7, 'q')
        for (x, y) in ((31, 2), (36, 7), (31, 11), (27, 7)):
            l.px(x, y, 'O')
    bg(c, wallclock, 'O')

    def shelfclocks(l):                    # small clocks on a shelf at right
        l.rect(46, 20, 63, 21, 'o')
        l.rect(48, 12, 54, 19, 'o'); l.ell(49, 13, 53, 17, 'e'); l.px(51, 15, 'q')
        l.rect(57, 10, 62, 19, 'O'); l.ell(58, 11, 61, 14, 'e'); l.vl(59, 15, 18, 'y')
    bg(c, shelfclocks, 'O')

    def maker(fc, skin, shade, hs, hk, hd, loupe, mouth):
        def front(f):                      # white collar, cardigan buttons
            f.poly([(28.5, 27), (35.5, 27), (32, 32)], 'u')
            f.pts('U', [(32, 31), (32, 32)])
            for y in (35, 39):
                f.px(32, y, 'Y')
        dk = dict(DK); dk[skin] = shade; dk[hk] = hd
        person(fc, dk, hx=24, hy=10, size=16, skin=skin, shade=shade, mouth=mouth, brows='soft', brow=hd,
               hs=hs, hk=hk, hd=hd, side='R', cx=32, sw=10, ww=10, th=17, cloth='1',
               front=front,
               arms=[([(22, 31), (18, 37), (19, 42)], 4, '1'), ([(42, 31), (47, 36), (45, 38)], 4, '1')],
               hands=[(16, 42, 'flat', False), (44, 36, 'grip', True)],
               face=(lambda h: (h.ell(26, 16, 31, 21, 'q'), h.ell(27, 17, 30, 20, 'M'), h.px(28, 17, 'w'),
                                h.hl(32, 34, 18, 'q'))) if loupe else None,
               props=lambda p: (pole(p, 46, 28, 35, 'm', 'M')),
               post=lambda f: f.rect(45, 38, 47, 40, 'o'))
    c.paste(solo(lambda fc: maker(fc, 'b', 'B', 'crop', 'q', 'O', False, 'smile'), dx=12, dy=1))
    c.paste(solo(lambda fc: maker(fc, 'a', 'A', 'bun', 'h', 'H', True, 'smile'), dx=-11))

    def bench(l):
        l.rect(0, 44, 63, 47, 'd'); l.rect(0, 48, 63, 63, 'o'); l.hl(0, 63, 48, 'O')
        l.rect(6, 52, 26, 60, 'O'); l.rect(7, 53, 25, 59, 'o'); l.hl(14, 18, 56, 'y')
        l.rect(38, 52, 58, 60, 'O'); l.rect(39, 53, 57, 59, 'o'); l.hl(46, 50, 56, 'y')
    bg(c, bench)
    w = layer()                             # pocket watch open on the bench, gold, outlined
    w.ell(27, 37, 36, 46, 'y'); w.ell(29, 39, 34, 44, 'e'); w.px(31, 41, 'q'); w.hl(32, 33, 41, 'q'); w.px(31, 40, 'q')
    w.rect(31, 35, 32, 36, 'Y')
    w.pts('Y', [(30, 35), (29, 36), (28, 37), (27, 38), (26, 38), (25, 39), (24, 40), (23, 41), (22, 42)])   # chain to her hand
    w.pts('Y', [(36, 41), (36, 42), (35, 44), (35, 45), (34, 46)])
    outline_once(w); c.paste(w)
    g = layer()                             # a loose gear
    import math
    g.ell(48, 38, 58, 48, 'm')
    for k in range(8):                       # eight square teeth round the rim
        a = k * math.pi / 4
        tx, ty = round(53 + 5.6 * math.cos(a)), round(43 + 5.6 * math.sin(a))
        g.rect(tx - 1 if tx <= 53 else tx, ty - 1 if ty <= 43 else ty, tx if tx <= 53 else tx + 1, ty if ty <= 43 else ty + 1, 'm')
    g.ell(51, 41, 55, 45, 'M'); g.rect(52, 42, 54, 44, 'd')
    outline_once(g); c.paste(g)
    return c.rows(), pal


PORTRAIT = ('purple.clockmaker', draw)
