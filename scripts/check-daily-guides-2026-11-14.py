import json,re,sys,html
from pathlib import Path
from html.parser import HTMLParser
from itertools import combinations
ROOT=Path(__file__).resolve().parents[1]
pages=json.loads((ROOT/'content-plan/daily/2026-11-14-daily-loop-pages.json').read_text())
class Page(HTMLParser):
 def __init__(self,s):
  super().__init__();self.h1=0;self.links=[];self.canonical=[];self.json=[];self.collect=False;self.buf='';self.text=[];self.details=0;self.feed(s)
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if tag=='h1':self.h1+=1
  if tag=='details':self.details+=1
  if tag=='a':self.links.append(d.get('href',''))
  if tag=='link' and d.get('rel')=='canonical':self.canonical.append(d.get('href'))
  if tag=='script' and d.get('type')=='application/ld+json':self.collect=True;self.buf=''
 def handle_data(self,d):
  if self.collect:self.buf+=d
  else:self.text.append(d)
 def handle_endtag(self,tag):
  if tag=='script' and self.collect:
   self.json.append(json.loads(self.buf));self.collect=False

def flatten(x):
 if isinstance(x,list):
  for v in x:yield from flatten(v)
 elif isinstance(x,dict):
  yield x
  if '@graph' in x:yield from flatten(x['@graph'])

hub=Page((ROOT/'.next/server/app/how-to.html').read_text())
app=Page((ROOT/'.next/server/app/ai-video-editor-app.html').read_text())
mcp=Page((ROOT/'.next/server/app/mcp.html').read_text())
sitemap=(ROOT/'.next/server/app/sitemaps/how-to.xml.body').read_text()
errors=[]; bodies={};summary=[]
for x in pages:
 url=x['url'];s=(ROOT/'src/content/how-to'/f"{x['slug']}.md").read_text();p=Page((ROOT/'.next/server/app'/f'{url.lstrip("/")}.html').read_text())
 def check(ok,issue):
  if not ok:errors.append(url+' '+issue)
 check(p.h1==1,'h1');check(p.canonical==['https://www.usevyra.com'+url],'canonical');check(p.details==(3 if x['platform']=='iphone' else 0),'platform FAQ rendering')
 graph=list(flatten(p.json));faq=[a for a in graph if a.get('@type')=='FAQPage'];how=[a for a in graph if a.get('@type')=='HowTo'];vid=[a for a in graph if a.get('@type')=='VideoObject']
 expected=re.findall(r'^\*\*(.+?)\*\*\n([^\n]+)',s.split('## FAQ')[1].split('## Sources')[0],re.M)
 check(len(faq)==1 and len(faq[0]['mainEntity'])==3,'FAQ schema')
 if faq:
  check([(a['name'],a['acceptedAnswer']['text']) for a in faq[0]['mainEntity']]==expected,'FAQ schema matches markdown')
 for q,a in expected:check(q in html.unescape(' '.join(p.text)) and a in html.unescape(' '.join(p.text)),'visible FAQ matches schema')
 steps=re.findall(r'^\d+\. (.+)$',s,re.M)
 check(len(how)==1 and [a['text'] for a in how[0]['step']]==steps and len(steps)==5,'five HowTo steps')
 check(any(x['reel'] in str(a) for a in vid),'real reel')
 check(sum('apps.apple.com/' in h for h in p.links)>=3 if x['platform']=='iphone' else any('app.usevyra.com' in h for h in p.links),'appropriate download or web CTA')
 check(('100 free credits' in ' '.join(p.text) and '720p' in ' '.join(p.text) and 'watermark' in ' '.join(p.text)) if x['platform']=='iphone' else ('three-day trial' in ' '.join(p.text) and 'paid plan' in ' '.join(p.text)),'platform-specific facts')
 check(url in hub.links,'hub discoverability');check(url in (app.links if x['platform']=='iphone' else mcp.links),'product-parent discoverability');check('https://www.usevyra.com'+url in sitemap,'sitemap')
 for href in set(p.links):
  if href.startswith('/') and not href.startswith('//'):
   path=href.split('?')[0].split('#')[0]
   if not path:continue
   path=path.rstrip('/') or '/'
   local=ROOT/'.next/server/app'/((path.strip('/') or 'index')+'.html')
   route=ROOT/'.next/server/app'/path.strip('/')/'route.js'
   asset=ROOT/'public'/path.lstrip('/')
   # /go routes and API endpoints are dynamic routes, not content destinations.
   if not(local.exists() or route.exists() or asset.exists()) and not path.startswith(('/api/','/go/')):
    errors.append(url+' unresolved '+href)
 body=s.split('---',2)[2];bodies[x['slug']]=set(re.findall(r'[a-z]+',body.lower()));x['words']=len(body.split());summary.append({'url':url,'words':x['words'],'faqs':3,'steps':5})
# Check unique titles, prompts and at least substantive variation beyond the shared export/source sections.
checktitles=[x['title'] for x in pages];assert len(set(checktitles))==20
similar=sorted([(round(len(a&b)/len(a|b),3),x,y) for (x,a),(y,b) in combinations(bodies.items(),2)],reverse=True)[:3]
result={'pages':len(pages),'faqs':sum(x['faqs'] for x in summary),'wordRange':[min(x['words'] for x in summary),max(x['words'] for x in summary)],'errors':sorted(set(errors)),'largestVocabularyOverlap':similar,'routes':summary}
(ROOT/'content-plan/daily/2026-11-14-daily-loop-pages.json').write_text(json.dumps(pages,indent=2)+'\n')
# Validation output is intentionally not committed as a mutable generated artifact.
print(json.dumps({k:v for k,v in result.items() if k!='routes'},indent=2));sys.exit(bool(errors))
