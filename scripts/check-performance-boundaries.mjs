import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {gzipSync} from 'node:zlib';
const read=path=>readFileSync(path,'utf8');
const initialBytes=html=>[...new Set([...html.matchAll(/<script\b[^>]*src="(\/_next\/[^"?]+)[^"]*"[^>]*>/g)].map(x=>x[1]))]
 .reduce((sum,src)=>sum+gzipSync(readFileSync('.next/'+src.replace('/_next/',''))).length,0);
for(const route of ['how-to/add-captions-to-videos-on-iphone','answers/why-is-my-video-upload-stuck','mcp']){
 const html=read(`.next/server/app/${route}.html`);
 assert.ok(initialBytes(html)<190000,`${route}: directory Markdown parser must stay outside initial client bundle`);
 assert.ok(!/<script\b[^>]*\bsrc="https:\/\/api\.favente\.so/.test(html),'widget must not execute during initial parsing');
}
const faq=read('.next/server/app/how-to/add-captions-to-videos-on-iphone.html');
assert.equal([...faq.matchAll(/<details\b/g)].length,8);
assert.ok(faq.includes('Are Live Captions the same as captions saved in my video?'));
assert.ok(faq.includes('/answers/why-are-my-captions-out-of-sync'));
const home=read('.next/server/app/index.html');
assert.ok(home.includes('translateX(4%)'),'initial editor playhead is visible at the original position');
assert.ok(home.includes('favente-recruit-loader'),'deferred widget stays configured');
for(const attr of ['data-container-id','data-accent','data-mode'])assert.ok(home.includes(attr),'widget config '+attr);
console.log('Performance boundaries passed: lean directory bundles, intact server FAQ content, deferred widget and initial playhead.');
