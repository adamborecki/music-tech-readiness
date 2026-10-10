(function(root){
'use strict';
function route(course,history,timing='after'){
 const status=id=>history[id]||'none';
 if(status(course.id)==='completed')return {kind:'completed',label:'Already completed',detail:'You have marked this course completed.',missing:[]};
 if(course.id==='244'){
  if(['128','133'].some(id=>status(id)==='completed'))return {kind:'eligible',label:'Prerequisite met',detail:'MUS 128 or MUS 133 completed.',missing:[]};
  if(['128','133'].some(id=>['taking','planned'].includes(status(id))))return {kind:'corequisite',label:'With theory corequisite',detail:'Confirm enrollment in MUS 128 or MUS 133 alongside MUS 244, or completion before entry.',missing:[]};
  return {kind:'review',label:'Approval needed',detail:'MUS 128 or MUS 133 is needed as a prerequisite/corequisite. Ask the Director about your route.',missing:['128 or 133']};
 }
 const missing=course.requires.filter(id=>status(id)!=='completed');
 if(!missing.length)return {kind:'eligible',label:'Prerequisite met',detail:course.requires.map(id=>'MUS '+id).join(' + ')+' completed.',missing:[]};
 if(timing==='after'&&missing.every(id=>status(id)==='taking'))return {kind:'pending',label:'After successful completion',detail:'Normal route once '+missing.map(id=>'MUS '+id).join(' + ')+' is completed. Not yet confirmed.',missing};
 return {kind:'review',label:'Equivalent competency review',detail:'Missing '+missing.map(id=>'MUS '+id).join(' + ')+'. Approval needed'+(missing.some(id=>status(id)==='taking')?' to take them together.':'.'),missing};
}
root.ReadinessRules={route};
})(typeof window!=='undefined'?window:globalThis);
