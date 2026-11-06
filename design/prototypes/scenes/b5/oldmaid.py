import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *

# Ghost (was Old Maid, was Saboteur; Cory, Nov 5: "Ghost needs a new picture"). A pale lady ghost drifting down a
# dark hallway, candle held out, her gown trailing off into wisps above the floor; the moonlit window and a
# portrait on the wall say old house. The card costs its owner 5 followers: she's the one who scares them off.


def ghost():
    c = C(N)
    pal = base(('#dfe7ea', '#b3c1c7'), 'grey',
               p='#454a5a', P='#3d4252', f='#3a2f2c', F='#302725', g='#525870',
               W='#c9d6e4', V='#93a6bf', o='#5a4636', O='#47372b',
               H='#b4bfc6', z='#8f9ca5',
               r='#40465a', y='#ffe27a', Y='#e09a3a', b='#b08a44', B='#8a6a32', t='#f4ede1')
    pal['1'] = '#cdd4d6'; pal['2'] = '#9aa1a0'
    # dim hallway: two close wall tones, a dark wood floor
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 40, 63, 53, 'P'); c.rect(0, 54, 63, 63, 'f'); c.hl(0, 63, 54, 'F')

    def window(l):                                  # tall moonlit window, the brightest thing behind her
        l.rect(4, 5, 17, 31, 'o'); l.rect(6, 7, 15, 29, 'W'); l.vl(10, 7, 29, 'o'); l.vl(11, 7, 29, 'o')
        l.hl(6, 15, 18, 'o'); l.rect(12, 8, 15, 12, 'V'); l.rect(6, 20, 9, 29, 'V')
        l.ell(6, 8, 9, 11, 't')                     # the moon, top left pane
    bg(c, window, None)

    def frame(l):                                   # a dark portrait on the wall, gold frame
        l.rect(48, 9, 59, 24, 'B'); l.rect(50, 11, 57, 22, 'P')
        l.ell(51, 13, 56, 19, 'o'); l.rect(51, 18, 56, 22, 'O')
    bg(c, frame, None)

    def shadow(l):                                  # her cool shadow on the boards: she floats above it
        l.ell(24, 57, 46, 60, 'F')
    bg(c, shadow, None)

    cx = 34
    hy = 9
    ty = hy + 17
    DK = {'1': '2', 'H': 'z', 's': 'S', 'b': 'B'}

    def front(f):                                   # long gown, wider at the hem, three wisps trailing off
        f.poly([(cx - 8, ty + 3), (cx + 8, ty + 3), (cx + 12, 48), (cx - 12, 48)], '1')
        for wx, wy in ((cx - 10, 52), (cx - 1, 54), (cx + 8, 51)):
            f.poly([(wx - 3, 47), (wx + 4, 47), (wx + 1, wy), (wx, wy)], '1')
        f.poly([(cx + 6, ty + 9), (cx + 9, ty + 9), (cx + 12, 48), (cx + 6, 48)], '2', only='1')     # wedge under the far arm
        f.poly([(cx + 6, 46), (cx + 10, 46), (cx + 8, 50)], '2', only='1')

    def bun_hair(f, x0, y0):                        # hair pinned up in a bun, as she wore it in life
        h = layer(); hair(h, x0, y0, 16, 'bun', 'H', 'z', side='L')
        h.rect(x0 - 1, y0 + 5, x0, y0 + 11, 'H'); h.rect(x0 + 15, y0 + 5, x0 + 16, y0 + 11, 'z')   # locks past the cheeks
        h.px(x0 - 1, y0 + 11, '.'); h.px(x0 + 16, y0 + 11, '.')
        f.paste(h)

    def candle(f):                                  # brass candlestick in her near hand, flame the one warm light
        l = layer()
        l.rect(cx - 17, ty + 9, cx - 12, ty + 10, 'b'); l.hl(cx - 16, cx - 13, ty + 11, 'B')
        l.rect(cx - 15, ty + 1, cx - 14, ty + 8, 't'); l.px(cx - 14, ty + 8, 'z')
        f.paste(l)

    def flame(f):
        f.pts('y', [(cx - 15, ty - 2), (cx - 14, ty - 2), (cx - 15, ty - 1), (cx - 14, ty - 1), (cx - 14, ty - 3)])
        f.pts('Y', [(cx - 15, ty), (cx - 14, ty)])

    fig = person(c, cx, hy, size=16, hs=None, mouth='o', brows='soft', brow='z', eye='r', glint=None,
           shirt='1', sdk='2', sw=7, ww=7, th=14, behind=True, front=front, DK=DK, slope=3,
           arms=[([(cx - 6, ty + 4), (cx - 11, ty + 9), (cx - 13, ty + 7)], 4, '1'),
                 ([(cx + 6, ty + 4), (cx + 11, ty + 10), (cx + 16, ty + 7)], 4, '1')],
           hands=[(cx - 16, ty + 6, 'grip', False), (cx + 17, ty + 5, 'flat', True)],
           hairfn=bun_hair, top=candle, post=flame)
    return c.rows(), pal


def glow(c, fig):
    """A faint cold halo one pixel out from her outline, on the wall only."""
    for y in range(N):
        for x in range(N):
            if fig.get(x, y) == '.' and c.get(x, y) in 'pP' and any(fig.get(x + dx, y + dy) == 'k' for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1))):
                c.px(x, y, 'g')


PORTRAIT = ('benders.saboteur', ghost)
