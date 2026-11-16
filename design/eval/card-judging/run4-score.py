import re,sys,math
key=open('/home/user/cults/design/eval/card-judging/holdout2-calls-key.md').read()
calls={}
for blk in re.split(r'^## ',key,flags=re.M)[1:]:
    cid=blk.split()[0]
    if not re.match(r'D\d\d$',cid): continue
    m=dict(re.findall(r'([A-G])→([A-G])',re.search(r'blind letters: (.*)',blk).group(1)))
    pk=re.search(r'- picked: \*\*([A-G, ]+)\*\*',blk).group(1)
    picks={m[x.strip()] for x in pk.split(',')}
    lk=re.search(r'- liked, back pocket: \*\*([A-G, ]+)\*\*',blk)
    liked={m[x.strip()] for x in lk.group(1).split(',')} if lk else set()
    none=('none of the options' in blk.split('- picked:')[1].split('\n')[0])
    calls[cid]=(picks,liked,len(m),none)
# readers: dict cid->letter from argv json-ish "D01:C,D02:..."
R=[dict(x.split(':') for x in a.split(',')) for a in sys.argv[1:]]
def wil(k,n):
    z=1.96;p=k/n;d=1+z*z/n;c=p+z*z/(2*n);r=z*math.sqrt(p*(1-p)/n+z*z/(4*n*n));return (c-r)/d,(c+r)/d
tot=totl=0;nonek=pickk=0;unan=0;chance=0;rows=[]
for cid,(picks,liked,n,none) in sorted(calls.items()):
    fc=[r[cid] for r in R]
    maj=max(set(fc),key=fc.count) if max(fc.count(x) for x in fc)>=2 else None
    if len(set(fc))==1: unan+=1
    ok=maj in picks; okl=maj in picks|liked
    tot+=ok; totl+=okl; chance+=len(picks)/n
    if none: nonek+=ok
    else: pickk+=ok
    rows.append(f"{cid} readers={''.join(fc)} panel={maj} cory={''.join(sorted(picks))}{'(none)' if none else ''} {'OK' if ok else 'miss'}{' lenientOK' if okl and not ok else ''}")
print('\n'.join(rows))
lo,hi=wil(tot,20)
print(f"strict {tot}/20 ({lo:.0%}-{hi:.0%}); lenient {totl}/20; chance {chance:.1f}/20; always-none 10/20")
print(f"on 'none' calls {nonek}/10; on 'picked a card' calls {pickk}/10; unanimous {unan}/20")
for i,r in enumerate(R): print('reader',i+1,sum(r[c] in calls[c][0] for c in calls),'/20')
