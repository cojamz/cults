import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Landlord: on the front step of their row house, jangling the ring of keys. Rent is due."""
    c = C(N)
    pal = base_pal(p='#c9d6dc', P='#b6c4cb', b='#b98a6a', B='#9c7054', d='#5d4a6e', D='#463657',
                   q='#8a95a3', Q='#76818f', y='#f2d27a', Y='#c9a24a', m='#e8e2d6', M='#c4bcae',
                   n='#4a4f5c', N='#373b46', h='#d9b45a', H='#b08a38', z='#3a2c26',
                   a=PALE[0], A=PALE[1], **{'1': WHITEC[0], '2': WHITEC[1]})
    c.rect(0, 0, 63, 63, 'p')

    def house(l):                         # brick front, a tall door with a number plate, a window
        l.rect(0, 4, 63, 51, 'b')
        for y in range(13, 50, 16):
            l.hl(0, 63, y, 'B')
        l.rect(42, 14, 59, 51, 'd'); l.rect(42, 14, 59, 15, 'D'); l.vl(42, 14, 51, 'D')
        l.rect(48, 19, 53, 22, 'y'); l.px(56, 34, 'y'); l.px(56, 35, 'Y')
        l.rect(3, 13, 15, 27, 'q'); l.rect(5, 15, 13, 25, 'P'); l.vl(9, 15, 25, 'q'); l.hl(5, 13, 20, 'q')
    bg(c, house, None)
    c.rect(0, 52, 63, 63, 'Q'); c.hl(0, 63, 52, 'q')           # the stone step
    DK = {'1': '2', 'n': 'N'}

    def vest(f):                          # a white waistcoat over a dark shirt, watch chain
        f.rect(22, 31, 26, 46, 'n'); f.vl(24, 31, 46, 'N')
    tops = fig(c, DK, 24, 10, 'a', 'A', hs='side', hk='h', hd='H', pose='point', mouth='grin', brows='soft',
               front=vest, legs=dict(pants='n', pdark='N', shoe='z', lh=6, stance=1))
    rx, ry = tops['R']
    # the key ring held up: a hoop and two big keys hanging from it, each with its own dark edge
    def keys(l):
        l.ring(rx - 1, ry - 7, rx + 5, ry - 1, 'y')
        for kx, ky in ((rx - 4, ry + 3), (rx + 5, ry + 4)):
            l.rect(kx, ky - 3, kx + 3, ky, 'y'); l.rect(kx + 1, ky - 2, kx + 2, ky - 1, 'p')      # the bow
            l.rect(kx + 1, ky + 1, kx + 2, ky + 9, 'y')                                           # the shaft
            l.rect(kx + 3, ky + 6, kx + 4, ky + 7, 'y'); l.rect(kx + 3, ky + 9, kx + 4, ky + 9, 'y')  # the teeth
    held(c, keys)
    hl = layer(); hand(hl, rx, ry, 'grip', 'a', 'A', True); outline_once(hl); c.paste(hl)
    return c.rows(), pal


PORTRAIT = ('trading.shopkeeper', art)
