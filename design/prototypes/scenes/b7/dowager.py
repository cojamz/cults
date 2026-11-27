import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Dowager counts 3: three grand old ladies on a settee, pearls and a lorgnette."""
    c = C(N)
    pal = base_pal(p='#8a7a9a', P='#7a6a8a', o='#8a5a36', O='#6a4227', v='#6a4a7a', V='#54385f', q='#f4f0e8', y='#d8c070',
                   h='#e4e0dc', H='#a8a4a4', g='#a8a4a4', G='#7a7676', e='#2b1d18',
                   a=PALE[0], A=PALE[1], b=DEEP[0], B=DEEP[1], d=OLIVE[0], D=OLIVE[1], **{'1': SILVER[0], '2': SILVER[1]})
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 52, 63, 63, 'O')
    bg(c, lambda l: (l.rect(22, 4, 41, 18, 'y'), l.rect(24, 6, 39, 16, 'P')), None)      # a portrait over them
    bg(c, lambda l: (l.rect(0, 34, 63, 52, 'v'), l.rect(0, 30, 63, 34, 'V'), l.rect(0, 30, 3, 52, 'V'), l.rect(60, 30, 63, 52, 'V')), None)   # settee
    DK = {}

    def pearls(cx, ty):
        return lambda f: f.pts('q', [(cx - 3, ty + 1), (cx - 2, ty + 2), (cx - 1, ty + 3), (cx, ty + 3), (cx + 1, ty + 3), (cx + 2, ty + 2), (cx + 3, ty + 1)])

    def lady(cc, sk, hs, hk, hd, pose, mouth, side='L', lorg=False):
        tops = fig(cc, DK, 32, 14, sk[0], sk[1], hs=hs, hk=hk, hd=hd, pose=pose, size=14, mouth=mouth, side=side,
                   front=pearls(32, 29), th=17, sw=6)
        if lorg:
            rx, ry = tops['R']
            cc.paste(solo(lambda l: (l.vl(rx + 1, ry - 6, ry, 'y'), l.ring(rx - 2, ry - 10, rx + 2, ry - 6, 'y'), l.ring(rx + 2, ry - 10, rx + 6, ry - 6, 'y'))))
        return cc
    c.paste(solo(lambda cc: lady(cc, ('d', 'D'), 'bun', 'h', 'H', 'hold', 'smile', 'R'), dx=-19, dy=1))
    c.paste(solo(lambda cc: lady(cc, ('b', 'B'), 'bun', 'g', 'G', 'hold', 'smile', 'L'), dx=19, dy=1, mirror=True))
    c.paste(solo(lambda cc: lady(cc, ('a', 'A'), 'bun', 'h', 'H', 'raise', 'smirk', 'R', True), dx=0, dy=-1))
    return c.rows(), pal


PORTRAIT = ('silver.dowager', art)
