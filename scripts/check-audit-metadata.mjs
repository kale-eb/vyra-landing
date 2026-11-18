import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const paths=['pricing','chatgpt','claude','mcp','ai-video-editor-app','features/reference-style-matching','answers/can-chatgpt-edit-videos','answers/can-claude-edit-videos','answers/can-vyra-edit-in-background-on-iphone'];
for(const path of paths){
 const html=readFileSync(`.next/server/app/${path}.html`,'utf8');
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1].replace(/&#x27;/g,"'").replace(/&amp;/g,'&');
 assert.ok(title&&title.length>=50&&title.length<=60,`${path} title: ${title}`);
 assert.ok(html.includes(`rel="canonical" href="https://www.usevyra.com/${path}"`),`${path} canonical`);
 assert.equal([...html.matchAll(/<h1\b/g)].length,1);
}
for(const path of ['pricing','answers/can-chatgpt-edit-videos','answers/can-claude-edit-videos','best/mcp-servers-for-video-editing']){
 const html=readFileSync(`.next/server/app/${path}.html`,'utf8');
 const desc=html.match(/<meta name="description" content="([^"]*)"/)?.[1].replace(/&#x27;/g,"'");
 assert.ok(desc&&desc.length>=120&&desc.length<=158,`${path} description`);
}
const pricing=readFileSync('.next/server/app/pricing.html','utf8');
const graph=[...pricing.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap(m=>JSON.parse(m[1]));
const product=graph.find(x=>x['@type']==='Product');
assert.equal(product.image,'https://www.usevyra.com/vyra-share-preview.jpg');
assert.equal(product.offers.length,4);
assert.ok(pricing.includes('Prices are in USD, billed monthly.'));
console.log('Audit metadata checks passed: nine descriptive titles, four descriptions, canonicals, H1s, pricing image and unchanged four offers.');
