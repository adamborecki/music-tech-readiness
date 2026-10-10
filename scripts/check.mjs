import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const ctx={window:{}};vm.runInNewContext(fs.readFileSync('content.js','utf8'),ctx);
const {courses,modules,acknowledgment}=ctx.window.READINESS;
assert.equal(courses.length,7);assert.equal(modules.length,7);
for(const c of courses)for(const id of c.modules)assert(modules.some(m=>m.id===id));
assert(courses.find(c=>c.id==='324').modules.includes('logic'));assert(courses.find(c=>c.id==='347').modules.includes('ableton'));assert(courses.find(c=>c.id==='348').title.includes('Synthesis'));assert(acknowledgment.includes('professional-grade recordings of acoustic music performances'));
const elements=new Map();function element(id){if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:({'request-course':'324',prereq:'yes',daw:'new'})[id]||'',checked:false,disabled:false,hidden:false,dataset:{},classList:{toggle(){}},setAttribute(){},addEventListener(){}});return elements.get(id);}
ctx.document={getElementById:element,querySelectorAll:()=>[]};vm.runInNewContext(fs.readFileSync('app.js','utf8'),ctx);
for(const course of ['324','347'])for(const prereq of ['yes','no','unsure'])for(const daw of ['new','some','comfortable'])for(const ack of [false,true]){const r=ctx.window.makeReadinessPlan(course,prereq,daw,ack);assert(r.steps.some(s=>s.includes('Week 1')));if(prereq==='no')assert(r.steps[0].includes('Director'));if(course==='324')assert(r.steps.some(s=>s.includes('acknowledgment')));else assert(!r.steps.some(s=>s.includes('Ochs')));}
const html=fs.readFileSync('index.html','utf8');for(const m of html.matchAll(/href="([^"#]+)"/g)){if(!m[1].startsWith('https:'))assert(fs.existsSync(m[1]),m[1]);}console.log('Content references, local links, and 36 request-route combinations passed.');
