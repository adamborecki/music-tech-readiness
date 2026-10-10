'use strict';
const {courses,modules,history:historyCourses,acknowledgment}=window.READINESS;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const historyState={},selected=new Set(),answers={};
const getRoute=c=>window.ReadinessRules.route(c,historyState,$('timing').value);
const moduleById=id=>modules.find(m=>m.id===id);
const defaults=()=>({daw:'new',experience:'',preview:false,ack:false});
function invalidate(){$('summary-section').hidden=true;$('copy-status').textContent='';}
$('history').innerHTML=historyCourses.map(c=>`<div class="history-item"><label for="history-${c.id}"><strong>${esc(c.code)}</strong>${esc(c.title)}</label><select id="history-${c.id}" data-history="${c.id}"><option value="none">Not taken</option><option value="completed">Completed</option><option value="taking">Taking now</option><option value="planned">Planning to take</option></select></div>`).join('');
function renderOptions(){
 for(const c of courses)if(getRoute(c).kind==='completed')selected.delete(c.id);
 $('course-options').innerHTML=courses.map(c=>{const r=getRoute(c);return `<div class="course-row"><input type="checkbox" id="course-${c.id}" data-course="${c.id}" ${selected.has(c.id)?'checked':''} ${r.kind==='completed'?'disabled':''}><label for="course-${c.id}"><strong>${esc(c.code)} · ${esc(c.title)}${c.example?'<span class="example-tag">EXAMPLE</span>':''}</strong><span class="sub">${esc(c.daw)} · ${c.id==='244'?'MUS 128 or 133 prerequisite/corequisite':c.requires.map(id=>'MUS '+id).join(' + ')+' prerequisite'}</span></label><div class="route"><span class="badge ${r.kind==='eligible'?'eligible':['pending','corequisite'].includes(r.kind)?'pending':'review'}">${esc(r.label)}</span><br>${esc(r.detail)}</div></div>`;}).join('');
 const count=courses.filter(c=>getRoute(c).kind==='eligible').length;
 $('eligibility-summary').textContent=`${count} course${count===1?'':'s'} with prerequisites met. Select any course to explore its request route.`;
 renderPreparation();
}
function renderPreparation(){
 $('empty').hidden=selected.size>0;$('readiness-note').hidden=!selected.size;$('request-actions').hidden=!selected.size;
 $('preparation').innerHTML=courses.filter(c=>selected.has(c.id)).map(c=>{
 const r=getRoute(c),a=answers[c.id]||(answers[c.id]=defaults());
 return `<article class="prepare-card"><header><h3>${esc(c.code)} · ${esc(c.title)}${c.example?' <span class="example-tag">EXAMPLE</span>':''}</h3><p>${esc(r.label)} — ${esc(r.detail)}</p></header><p class="small">${c.id==='244'?'Foundation learning resources for MUS 244; these do not replace the class.':'Readiness modules for this course — even if you completed the prerequisite.'}</p><div class="module-links">${c.modules.map(id=>`<button type="button" class="module-link" data-module="${id}">${esc(moduleById(id).title)} ↗</button>`).join('')}</div><p class="small">Module links currently open draft specifications. Lessons and checks still need to be built.</p><label class="field" for="daw-${c.id}">Your experience with ${esc(c.daw)}<select id="daw-${c.id}" data-answer="daw" data-id="${c.id}"><option value="new" ${a.daw==='new'?'selected':''}>New to it</option><option value="some" ${a.daw==='some'?'selected':''}>Some experience / need a refresher</option><option value="comfortable" ${a.daw==='comfortable'?'selected':''}>Comfortable with basic workflow</option></select></label>${r.kind==='review'?`<div class="review-box"><p><strong>${c.id==='244'?'Director review':'Equivalent competency review'}</strong></p><label class="field" for="experience-${c.id}">What experience could show you’re ready?<textarea id="experience-${c.id}" data-answer="experience" data-id="${c.id}" placeholder="Relevant coursework, projects, or skills…">${esc(a.experience)}</textarea></label><p class="small">The informal readiness preview will link here once built. A self-check alone does not grant approval.</p><label class="check"><input type="checkbox" data-answer="preview" data-id="${c.id}" ${a.preview?'checked':''}>I understand that the Director must approve this route and that course readiness will be checked.</label></div>`:''}${c.id==='324'?`<details class="ack"><summary>Read Prof. Ochs’s MUS 324 message</summary><blockquote>${esc(acknowledgment)}</blockquote></details><label class="check"><input type="checkbox" data-answer="ack" data-id="${c.id}" ${a.ack?'checked':''}>I have read the message and agree to record acoustic performances and share recordings in class.</label>`:''}</article>`;
 }).join('');
}
document.addEventListener('change',e=>{const t=e.target;if(t.dataset.history){historyState[t.dataset.history]=t.value;renderOptions();invalidate();}else if(t.id==='timing'){renderOptions();invalidate();}else if(t.dataset.course){t.checked?selected.add(t.dataset.course):selected.delete(t.dataset.course);renderPreparation();invalidate();}else if(t.dataset.answer){answers[t.dataset.id][t.dataset.answer]=t.type==='checkbox'?t.checked:t.value;invalidate();}});
document.addEventListener('input',e=>{if(e.target.dataset.answer==='experience'){answers[e.target.dataset.id].experience=e.target.value;invalidate();}});
function closeTips(){document.querySelectorAll('[data-tip]').forEach(b=>{b.setAttribute('aria-expanded','false');$('tip-'+b.dataset.tip).hidden=true;});}
document.addEventListener('click',e=>{
 const tip=e.target.closest('[data-tip]');if(tip){const open=tip.getAttribute('aria-expanded')==='true';closeTips();tip.setAttribute('aria-expanded',String(!open));$('tip-'+tip.dataset.tip).hidden=open;return;}
 if(!e.target.closest('.term'))closeTips();
 const b=e.target.closest('[data-module]');if(b){const m=moduleById(b.dataset.module);$('module-title').textContent=m.title;$('module-body').innerHTML=`<p>${esc(m.goal)}</p><h3>Candidate skills</h3><ul>${m.skills.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><h3>Draft practice task</h3><p>${esc(m.task)}</p><h3>Refresher idea</h3><p>${esc(m.review)}</p><p class="small">${esc(m.basis)} Passing criteria and required/review-only designations are not set. No module completion is recorded here.</p>`;$('module-dialog').showModal();}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeTips();});
$('close-module').addEventListener('click',()=>$('module-dialog').close());
$('module-dialog').addEventListener('click',e=>{if(e.target===$('module-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
$('request-form').addEventListener('submit',e=>{
 e.preventDefault();if(!selected.size)return;
 const lines=['Music Tech Readiness — request preview','Demo only. Nothing submitted; no approval or permission code.','', 'COURSEWORK'];
 const statusNames={completed:'Completed',taking:'Taking now',planned:'Planning to take'};
 for(const c of historyCourses)if(statusNames[historyState[c.id]])lines.push(`${c.code}: ${statusNames[historyState[c.id]]}`);
 if(!Object.values(historyState).some(s=>statusNames[s]))lines.push('None selected.');
 lines.push('Timing: '+($('timing').value==='after'?'After current courses':'Alongside current courses'));
 for(const c of courses.filter(c=>selected.has(c.id))){const r=getRoute(c),a=answers[c.id];lines.push('',`${c.code}: ${c.title}${c.example?' (EXAMPLE ONLY)':''}`,`Route: ${r.label}`,r.detail,'Modules: '+c.modules.map(id=>moduleById(id).title).join('; '),`DAW: ${c.daw}; experience: ${{new:'New',some:'Needs refresher',comfortable:'Comfortable'}[a.daw]}`);
 if(r.kind==='review')lines.push('Relevant experience: '+(a.experience.trim()||'Not provided — review information still needed.'),'Approval acknowledgment: '+(a.preview?'Checked':'Not checked — still needed.'));
 if(c.id==='324')lines.push('MUS 324 course-fit agreement: '+(a.ack?'Checked':'Not checked — still needed.'));
 lines.push(c.id==='244'?'MUS 244 remains required; resources do not award course credit.':'Next: instructor-designated Week 1 readiness checks.');}
 $('summary').textContent=lines.join('\n');$('summary-section').hidden=false;$('summary').focus();
});
$('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('summary').textContent);$('copy-status').textContent='Copied.';}catch{const r=document.createRange();r.selectNodeContents($('summary'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(r);$('copy-status').textContent='Text selected. Copy with your browser or keyboard.';}});
renderOptions();
