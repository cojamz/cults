import os, sys; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _kit2 import *

# Ghost (was Old Maid, was Saboteur). Cory, Nov 6: "i dont want it to be an old woman. just more like a sheet with
# eyes (and candle is ok)". A plain sheet ghost floating down a dark hallway, a candle held in one fold; the moonlit
# window and a portrait on the wall say old house.


def ghost():
    c = C(N)
    pal = base(('#dfe7ea', '#b3c1c7'), 'grey',
               p='#454a5a', P='#3d4252', f='#3a2f2c', F='#302725', g='#525870',
               W='#c9d6e4', V='#93a6bf', o='#5a4636', O='#47372b',
               H='#b4bfc6', z='#8f9ca5',
               r='#40465a', y='#ffe27a', Y='#e09a3a', b='#b08a44', B='#8a6a32', t='#f4ede1', T='#c9c0b2')
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

    # the ghost: a plain sheet with two eye holes, one fold of it wrapped round the candlestick
    f = layer()
    f.ell(27, 13, 49, 37, '1')                                  # rounded top
    f.poly([(27, 25), (49, 25), (52, 50), (24, 50)], '1')       # the drape, a little wider at the hem
    for x0 in (24, 31, 38, 45):                                 # four soft scallops on the hem
        f.ell(x0, 47, x0 + 6, 54, '1')
    f.ell(18, 33, 31, 41, '1')                                  # the fold reaching out to hold the candle
    f.poly([(45, 18), (49, 25), (52, 50), (47, 50)], '2', only='1')    # shade on the far side, a wedge
    f.ell(45, 49, 51, 54, '2', only='1')
    f.poly([(21, 40), (30, 38), (31, 43), (25, 42)], '2', only='1')   # under the fold
    for nx in (30, 37, 44):                                     # notches between the scallops
        f.pts('.', [(nx, 54), (nx + 1, 54), (nx, 53), (nx + 1, 53), (nx, 52)])
    for ex in (33, 41):                                         # eye holes
        f.rect(ex, 23, ex + 1, 27, 'k'); f.rect(ex - 1, 24, ex + 2, 26, 'k')
    outline_once(f)
    l = layer()                                                 # candle in a brass holder, gripped in the fold
    l.rect(22, 24, 23, 32, 't'); l.vl(23, 24, 32, 'T')
    l.pts('y', [(22, 21), (23, 21), (22, 22), (23, 22), (22, 20)]); l.pts('Y', [(22, 23), (23, 23)])
    under(f, l)
    f.rect(20, 31, 25, 32, 'b'); f.hl(21, 24, 33, 'B'); f.pts('k', [(19, 31), (19, 32), (26, 31), (26, 32)])   # the brass holder sits in the fold
    c.paste(f)
    return c.rows(), pal


PORTRAIT = ('benders.saboteur', ghost)
