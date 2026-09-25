import fs from "node:fs"; import path from "node:path";
const root=process.argv[2]||"src/content"; const rules={
 "not X, but Y / isn't X, it's Y": /\b(not|isn't|isn’t|aren't|wasn't|no longer)\b[^.\n]{2,60},?\s+(but|it's|it’s|it is)\b/gi,
 "it's not about X": /\b(it's|it’s|this is|that's) not (about|just|a matter of)\b/gi,
 "colon in prose": /^(?!\s*[-*|>#]|\s*\d+\.)[^\n|`]*\w: [A-Za-z]/gm,
 "rhetorical question": /^(?!#)[^\n?]*\b(ever wondered|what if|why does|sound familiar|ready to)\b[^\n]*\?/gim,
 "hype words": /\b(seamless(ly)?|effortless(ly)?|game-?chang(er|ing)|unlock|elevate|leverage|supercharge|revolutioniz|cutting-edge|robust|powerful|delve|dive into|unleash|harness|empower|streamline|transform(s|ing)? (your|the)|next level|take .{1,20} to the next)\b/gi,
 "throat-clearing openers": /^(In short|In other words|The bottom line|Here's the thing|Here’s the thing|Think of it as|Put simply|Simply put|At the end of the day|The result:|The takeaway)\b/gim,
 "dramatic fragment": /^[A-Z][^.\n]{2,40}\. (Not|No|Nothing|Every|Just|Only) [^.\n]{2,40}\.$/gm,
 "triad of short fragments": /\b\w+\. \w+\. \w+\.\s/g,
 "'That is' / 'That's the'": /\bThat (is|’s|'s) (the|what|where|how) [^.\n]{2,50}\.$/gm,
};
const per={}; const totals={}; let files=0;
const subs = fs.readdirSync(root).filter(s=>fs.statSync(path.join(root,s)).isDirectory());
const dirs = subs.length ? subs.map(s=>[s,path.join(root,s)]) : [["",root]];
for(const [s,dir] of dirs){
 for(const f of fs.readdirSync(dir)){ if(!f.endsWith(".md"))continue; const t=fs.readFileSync(path.join(dir,f),"utf8").replace(/^---[\s\S]*?---/,"").replace(/```[\s\S]*?```/g,"").replace(/^\|.*$/gm,""); files++;
  for(const [k,re] of Object.entries(rules)){ const n=(t.match(re)||[]).length; if(n){ totals[k]=(totals[k]||0)+n; per[(s?s+"/":"")+f]=(per[(s?s+"/":"")+f]||0)+n; } } } }
console.log("files",files); for(const [k,v] of Object.entries(totals).sort((a,b)=>b[1]-a[1])) console.log(String(v).padStart(5),k);
console.log("--- worst files"); Object.entries(per).sort((a,b)=>b[1]-a[1]).slice(0,12).forEach(([f,n])=>console.log(String(n).padStart(4),f));
