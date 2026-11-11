import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *


def art():
    """Puppeteers: three puppeteers over a puppet booth, working marionettes on strings."""
    c = C(N)
    pal = base_pal(**{
        'p': '#3e3550', 'P': '#352d46',          # dark theatre
        'r': '#b8433a', 'R': '#8e3029',          # booth curtain
        'o': '#8a6a4c', 'O': '#6e5238',          # booth frame, control bars
        'y': '#f7d774', 'g': '#5f9a6a', 'G': '#467852', 'u': '#5b8fc7',
        '1': YELLOW[0], '2': YELLOW[1], 'W': '#d8d0c4',
        'h': '#2b1d18', 'H': '#4a332a', 'j': '#d8b060', 'J': '#a8843e', 'l': '#cfc8bc',
        'a': OLIVE[0], 'A': OLIVE[1], 's': LIGHT[0], 'S': LIGHT[1], 'd': VDEEP[0], 'D': VDEEP[1]})
    c.rect(0, 0, 63, 63, 'p'); c.rect(0, 0, 63, 2, 'P')
    for x in (10, 32, 54):                      # three small stage lights
        c.rect(x - 1, 3, x + 1, 4, 'y')

    DK = {'1': '2', 'a': 'A', 's': 'S', 'd': 'D', 'w': 'W', 'h': 'H', 'j': 'J', 'o': 'O'}

    def bar(x, y):                              # the wooden control cross held in the hand
        return lambda p: (p.hl(x - 4, x + 4, y, 'o'), p.hl(x - 4, x + 4, y + 1, 'O'))

    people = [  # hx, hy, skin, shade, hair, hk, hd, mouth, hand x
        (3, 9, 's', 'S', 'bun', 'j', 'J', 'smile', 6, 'R'),
        (24, 7, 'd', 'D', 'crop', 'h', 'H', 'grin', 0, 'L'),
        (45, 9, 'a', 'A', 'side', 'H', 'h', 'smile', 0, 'L'),
    ]
    hands = []
    for hx, hy, sk, sh, hs, hk, hd, mouth, _, side in people:
        cx = hx + 7
        hx_, hy_ = cx + 5, hy + 18              # one arm raised, holding the bar over the booth
        person(c, DK, hx=hx, hy=hy, skin=sk, shade=sh, mouth=mouth, brows='soft', brow=hd,
               hs=hs, hk=hk, hd=hd, side=side, cloth='1', cdark='2', cx=cx, sw=7, ww=6, th=16,
               arms=[([(cx - 6, hy + 18), (cx - 9, hy + 23), (cx - 7, hy + 27)], 3),
                     ([(cx + 6, hy + 18), (cx + 9, hy + 22), (cx + 6, hy + 26)], 3)],
               hands=[(cx - 9, hy + 26, 'grip', False), (cx + 4, hy + 25, 'grip', True)],
               props=bar(cx, hy + 26))
        hands.append((cx, hy + 27))

    def booth(l):                               # the booth front, curtain with two folds
        l.rect(0, 42, 63, 63, 'r'); l.rect(0, 40, 63, 42, 'o'); l.hl(0, 63, 42, 'O')
        for x in (10, 21, 42, 53):
            l.vl(x, 43, 63, 'R')
    bg(c, booth, None)

    # marionettes dangle in front of the booth on strings from each bar
    def puppet(l, x, y, k, kd):
        l.ell(x - 2, y, x + 2, y + 4, 'w'); l.px(x - 1, y + 2, 'h'); l.px(x + 1, y + 2, 'h')
        l.rect(x - 2, y + 5, x + 2, y + 10, k); l.vl(x + 2, y + 5, y + 10, kd)
        l.pts(k, [(x - 3, y + 6), (x - 4, y + 7), (x + 3, y + 6), (x + 4, y + 7)])
        l.rect(x - 2, y + 11, x - 1, y + 13, kd); l.rect(x + 1, y + 11, x + 2, y + 13, kd)
    pl = layer()
    for (cx, by), (k, kd) in zip(hands, (('g', 'h'), ('u', 'h'), ('R', 'h'))):
        puppet(pl, cx, by + 14, k, kd)
    outline_once(pl)
    for (cx, by) in hands:                      # strings: 1px, light, never outlined
        for sx, ty in ((cx - 4, by + 21), (cx, by + 14), (cx + 4, by + 21)):
            c.vl(sx, by + 1, ty - 1, 'l')
    c.paste(pl)
    return c.rows(), pal


PORTRAIT = ('yellow.puppeteer', art)
