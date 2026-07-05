// ======================================================================
// 🔧 存储模块 — App 状态 + localStorage + 通用工具函数
// ======================================================================

const DEBUG=false
const APP_VERSION='2026.06.27'
const STORAGE_SCHEMA_VERSION=3
const STORAGE_PREFIX='ezlangent:schema'+STORAGE_SCHEMA_VERSION+':'
const DATA_KEYS=['el_quiz_records','el_error_items','el_vocab_mastery','el_knowledge_stats','el_study_log','el_daily_tasks']
const DAILY_TASK_FLOW_VERSION=2
const EB_INTERVALS=[8,24,72,168,336,720]
const App={currentTab:'home',quizType:'grammar',quizQty:10,quizQtyTouched:false,quizSources:[],questions:[],currentQ:0,answers:[],timer:null,seconds:0,answered:false,errorFilter:'all',statsDays:7,parentReportType:'daily',vocabView:'words',vocabFilters:{mastery:'all',letter:null},activeDailyTaskId:null,activeDailyTaskCountedIndexes:[],pendingDailyTaskReviewId:null}

function storageKey(k){
  const ns = (typeof currentUser !== 'undefined' && currentUser && currentUser.username) ? currentUser.username : 'guest'
  return STORAGE_PREFIX + ns + ':' + k
}
function userStorageKey(username, k) {
  return STORAGE_PREFIX + username + ':' + k
}
function parseStored(v,d){try{return v?JSON.parse(v):d}catch{return d}}
function lsGet(k,d){return parseStored(localStorage.getItem(storageKey(k)),d)}
function lsSet(k,v){localStorage.setItem(storageKey(k),JSON.stringify(v))}
function ensureStorageSchema(){
  localStorage.setItem(storageKey('el_storage_meta'),JSON.stringify({app:'ezlangent',appVersion:APP_VERSION,schemaVersion:STORAGE_SCHEMA_VERSION,updatedAt:new Date().toISOString()}))
}
function migrateOldData(){
  const OLD_PREFIX = STORAGE_PREFIX
  const ns = (typeof currentUser !== 'undefined' && currentUser && currentUser.username) ? currentUser.username : null
  if (!ns) return
  const MIGRATED_KEY = STORAGE_PREFIX + '_migrated_' + ns
  if (localStorage.getItem(MIGRATED_KEY)) return
  let hasOwnData = false
  DATA_KEYS.forEach(k => { if (localStorage.getItem(storageKey(k))) hasOwnData = true })
  if (hasOwnData) return
  let found = false
  DATA_KEYS.forEach(k => {
    const oldKey = OLD_PREFIX + k
    const oldVal = localStorage.getItem(oldKey)
    if (oldVal) { localStorage.setItem(storageKey(k), oldVal); found = true }
  })
  if (found) { localStorage.setItem(MIGRATED_KEY, '1') }
}
function getMastery(){return lsGet('el_vocab_mastery',{})}
function refreshParentReportIfOpen(){const modal=document.getElementById('parent-report-modal');if(modal&&!modal.classList.contains('d-none'))renderParentReport()}
function setMastery(m){lsSet('el_vocab_mastery',m);refreshParentReportIfOpen()}
function getKpStats(){return lsGet('el_knowledge_stats',{})}
function setKpStats(s){lsSet('el_knowledge_stats',s);refreshParentReportIfOpen()}
function getErrors(){return lsGet('el_error_items',[])}
function setErrors(e){lsSet('el_error_items',e);refreshParentReportIfOpen()}
function getQuizRecords(){return lsGet('el_quiz_records',[])}
function setQuizRecords(r){lsSet('el_quiz_records',r);refreshParentReportIfOpen()}
function getStudyLog(){return lsGet('el_study_log',{})}
function setStudyLog(l){lsSet('el_study_log',l);refreshParentReportIfOpen()}
function getDailyTasks(){return lsGet('el_daily_tasks',{})}
function setDailyTasks(t){lsSet('el_daily_tasks',t);refreshParentReportIfOpen()}
function localDateKey(d=new Date()){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function today(){return localDateKey()}
function formatTime(s){const m=Math.floor(s/60);return String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function showToast(msg){
  const el=document.getElementById('app-toast');if(!el)return
  clearTimeout(showToast.timer);el.textContent=msg;el.classList.add('show')
  showToast.timer=setTimeout(()=>el.classList.remove('show'),2200)
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}
function hashString(s){let h=0;String(s).split('').forEach(ch=>{h=(h*31+ch.charCodeAt(0))>>>0});return h}
function pickStable(list,count,seed){const arr=[...list].filter(Boolean);return arr.map((x,i)=>({x,k:(hashString(seed+'-'+i+'-'+(x.id||x.word||x.title||i))%100000)})).sort((a,b)=>a.k-b.k).slice(0,count).map(o=>o.x)}
function weightedPick(items,weights){
  const total=weights.reduce((s,w)=>s+w,0);let r=Math.random()*total
  for(let i=0;i<items.length;i++){r-=weights[i];if(r<=0)return items[i]}
  return items[items.length-1]
}
function ebMultiplier(reviewCount,lastQuizzed){
  if(!lastQuizzed||reviewCount===0)return 1
  const hoursSince=(Date.now()-lastQuizzed)/3600000
  const stage=Math.min(reviewCount,EB_INTERVALS.length-1)
  const dueIn=EB_INTERVALS[stage]
  const ratio=hoursSince/dueIn
  if(ratio>=1.5)return 50
  if(ratio>=0.8)return 20
  if(ratio>=0.4)return 5
  return 0.3
}
function questionKey(q){return [q.type||'',q.sentence||q.qText||q.title||'',q.word||'',q.translation||''].join('|')}
function uniqueQuestions(qs){const seen=new Set();return qs.filter(q=>{const k=questionKey(q);if(seen.has(k))return false;seen.add(k);return true})}
function splitSentences(text){return String(text||'').match(/[^.!?。！？]+[.!?。！？]?/g)||[String(text||'')]}
function escapeRegExp(text){return String(text||'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function wordCount(text){return(String(text||'').match(/[A-Za-z]+(?:'[A-Za-z]+)?/g)||[]).length}

let studyTimer=null,studySec=0
function logStudyStart(){if(studyTimer)return;studyTimer=setInterval(()=>{studySec++;if(studySec%30===0){const l=getStudyLog(),d=today();l[d]=(l[d]||0)+30;setStudyLog(l)}},1000)}
function logStudyStop(){if(studyTimer){clearInterval(studyTimer);studyTimer=null;if(studySec>0){const l=getStudyLog(),d=today();l[d]=(l[d]||0)+studySec;setStudyLog(l)}studySec=0}}
