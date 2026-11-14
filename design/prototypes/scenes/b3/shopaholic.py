import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *
from crowd import solo


def draw():
    c = C(N)
    pal = base(p='#e3cfd6', P='#d6c0c8', q='#c8dde6', Q='#b3cad4', f='#c9bcb0', F='#b8aa9c',
               j='#d24a7a', J='#a83a60', y='#f0c548', Y='#c89a2a', g='#5fa06a', G='#457a50', e='#f4ede1', E='#cfc8bc',
               a=MED[0], A=MED[1], b=PALE[0], B=PALE[1], d=OLIVE[0], D=OLIVE[1], h='#3a2218', H='#24140c', z='#a83a60',
               **{'1': BLUE[0], '2': BLUE[1]})
    pal['Q'] = pal['E']; pal['H'] = pal['h']
    DK = {'1': '2', '2': '2', 'a': 'A', 'j': 'J', 'y': 'Y', 'g': 'G', 'e': 'E'}
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 54, 63, 63, 'f'); c.hl(0, 63, 54, 'F')

    def window(l):                          # shop window with a hat on a stand
        l.rect(2, 6, 61, 46, 'P'); l.rect(4, 8, 59, 44, 'q')
        l.rect(4, 8, 59, 10, 'j')
        l.ell(6, 22, 16, 28, 'y'); l.rect(10, 28, 11, 40, 'Q'); l.rect(7, 40, 14, 41, 'Q')
        l.ell(48, 20, 57, 28, 'g'); l.rect(52, 28, 53, 40, 'Q'); l.rect(49, 40, 56, 41, 'Q')
    bg(c, window, 'P')

    def friend(cc, sk, sh, hs, hk, hd, bag, bagd, side):
        dk = dict(DK); dk[sk] = sh
        l2 = layer(); l2.rect(26, 44, 29, 52, '2'); l2.rect(33, 44, 36, 52, '2'); l2.rect(25, 52, 29, 53, 'z'); l2.rect(33, 52, 37, 53, 'z')
        person(cc, dk, back=lambda f: f.paste(l2), hx=25, hy=13, size=14, skin=sk, shade=sh, mouth='smile', brows='soft', brow=hd,
               hs=hs, hk=hk, hd=hd, side=side, cx=31, sw=6, ww=7, th=16, cloth='1',
               arms=[([(25, 31), (22, 36), (23, 40)], 3, sk), ([(37, 31), (40, 26), (39, 20)], 3, sk)],
               hands=[(21, 39, 'grip', False), (37, 17, 'fist', True)])
        b = layer(); b.rect(18, 42, 26, 51, bag); b.rect(25, 42, 26, 51, bagd); b.pts(bagd, [(20, 41), (21, 40), (23, 40), (24, 41)])
        outline_once(b); cc.paste(b)
    c.paste(solo(lambda cc: friend(cc, 'b', 'B', 'bun', 'y', 'Y', 'g', 'G', 'R'), dx=-17, dy=-5))
    c.paste(solo(lambda cc: friend(cc, 'd', 'D', 'short', 'h', 'H', 'y', 'Y', 'L'), dx=17, dy=-5, mirror=True))
    lg = layer()
    lg.rect(26, 44, 29, 52, '2'); lg.rect(33, 44, 36, 52, '2')
    lg.rect(25, 52, 29, 53, 'z'); lg.rect(33, 52, 37, 53, 'z')
    person(c, DK, back=lambda f: f.paste(lg), hx=24, hy=11, skin='a', shade='A', mouth='open', brows='soft', brow='H',
           hs='long', hk='h', hd='H', cx=31, sw=7, ww=8, th=17, cloth='1',
           arms=[([(24, 30), (20, 34), (20, 40)], 3, 'a'), ([(38, 30), (42, 34), (42, 40)], 3, 'a')],
           hands=[(18, 39, 'grip', False), (40, 39, 'grip', True)])

    def bags(l, x0, cols):
        for i, (dx, dy, w, h, k, kd) in enumerate(cols):
            b = layer()
            b.rect(x0 + dx, dy, x0 + dx + w, dy + h, k); b.rect(x0 + dx + w - 1, dy, x0 + dx + w, dy + h, kd)
            b.pts(kd, [(x0 + dx + 2, dy - 1), (x0 + dx + 2, dy - 2), (x0 + dx + 3, dy - 3), (x0 + dx + w - 3, dy - 3),
                       (x0 + dx + w - 2, dy - 2), (x0 + dx + w - 2, dy - 1)])
            over(l, b, DK)
    bl = layer()
    bags(bl, 8, [(0, 44, 8, 10, 'j', 'J'), (6, 42, 9, 12, 'y', 'Y'), (2, 47, 7, 9, 'e', 'E')])
    bags(bl, 37, [(0, 43, 9, 11, 'g', 'G'), (8, 45, 8, 10, 'j', 'J'), (4, 47, 7, 8, 'y', 'Y')])
    outline_once(bl); c.paste(bl)
    hl = layer(); hand(hl, 17, 39, 'grip', 'a', 'A'); hand(hl, 41, 39, 'grip', 'a', 'A', flip=True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('market.shopaholic', draw)
