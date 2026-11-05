#!/usr/bin/env python3
"""Cory's pile board: one column per color (in the deck, short list, consideration; archive/cut folded).
   python3 scripts/quality/menu/board.py  (reads /mnt/project-files/ranking-menu/menu.json, writes board.html beside it)"""
import json, os, re
SRC = '/mnt/project-files/ranking-menu/menu.json'
OUT = '/mnt/project-files/ranking-menu/board.html'
here = os.path.dirname(os.path.abspath(__file__))
cards = json.load(open(SRC))['cards']
COLORS = ['red','purple','silver','yellow','market','thieves','trading','echo','guests']
data = []
seen = set()
for x in cards:
    if x['kind'] != 'member' or x['color'] not in COLORS: continue
    b = x.get('bucket')
    if x['status'] == 'live': pile = 'deck'  # every live card stays in its deck list; his pile shows as a tag
    elif b in ('short', 'consider', 'cut'): pile = b
    else: continue
    k = (x['name'], x['text'])
    if k in seen: continue
    seen.add(k)
    data.append({'n': x['name'], 't': x['text'], 'c': x['color'], 'p': x.get('price') or '', 'pile': pile,
                 'live': x['status'] == 'live', 'b': b or '', 'cory': x.get('cory') or '', 'prot': bool(x.get('protected'))})
html = open(os.path.join(here, 'board.html')).read().replace('/*DATA*/null', json.dumps(data, ensure_ascii=False))
open(OUT, 'w').write(html)
print(f'board: {len(data)} members -> {OUT}')
