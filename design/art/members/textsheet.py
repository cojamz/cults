import sys,json,textwrap
from kit import *
def tsheet(figs,texts,path,sc=5,cols=5):
    pad=20;cw=N*sc+pad;ch=N*sc+150;n=len(figs);rws=(n+cols-1)//cols
    out=Image.new('RGB',(pad+cols*cw,pad+rws*ch),hx('#2a1f19'));d=ImageDraw.Draw(out)
    fb=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf',19)
    ft=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',14)
    for i,(nm,v) in enumerate(figs):
        x=pad+(i%cols)*cw;y=pad+(i//cols)*ch
        d.rounded_rectangle([x,y,x+N*sc,y+N*sc],8,fill=hx('#3a2d25'))
        im=v.img(sc);out.paste(im,(x,y),im)
        s1=v.img(1);out.paste(s1,(x+N*sc-N-4,y+4),s1)
        d.text((x+2,y+N*sc+8),nm,font=fb,fill=hx('#f3e6d0'))
        for j,l in enumerate(textwrap.wrap(texts[nm],28)[:5]):
            d.text((x+2,y+N*sc+34+j*18),l,font=ft,fill=hx('#cdbca4'))
    out.save(path)
