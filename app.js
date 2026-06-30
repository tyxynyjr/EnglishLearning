// ======================================================================
// 📦 数据部分 — 在此处添加/修改语法和词汇库
// ======================================================================

// ---------- 语法分类 ----------
const CATEGORIES = [
  { id: 3, name: '词类', icon: 'bi-pencil' },
  { id: 8, name: '句法', icon: 'bi-diagram-3' }
]

// ---------- 语法 ----------
// 扩展方法：在对应 categoryId 的数组中追加即可，questions 中可配多选/填空/短文
let KNOWLEDGE_POINTS = []
async function loadKnowledgeData() {
    try {
        const response = await fetch('data/knowledge.json');
        KNOWLEDGE_POINTS = await response.json();
        console.log('✅ 加载成功，共', KNOWLEDGE_POINTS.length, '条');
    } catch (error) {
        console.error('❌ 加载失败:', error);
    }
}
// 启动加载
loadKnowledgeData();

const WORD_CLASS_GROUPS = [
  { key:'noun', title:'名词', desc:'可数名词及单复数、不可数名词、专有名词、名词所有格。', ids:[9,43,44,45,47,160,46] },
  { key:'verb', title:'动词', desc:'基本形式、及物/不及物动词、系动词、助动词、情态动词。', ids:[110,161,111,112,113,114,162,163,164,15,115,116,117,118,119,120,121,122] },
  { key:'adjective', title:'形容词', desc:'基本形式、常见词尾/词缀、定语/表语用法、比较级和最高级。', ids:[165,166,55,10,59] },
  { key:'adverb', title:'副词', desc:'修饰动词、形容词、副词或整个句子；补充常见 -ly 词尾以及副词比较级、最高级。', ids:[56,167,57,58] },
  { key:'pronoun', title:'代词', desc:'人称代词、物主代词、反身代词、指示代词、不定代词和替代用法。', ids:[11,48,49,50,51,52,53,54] },
  { key:'numeral', title:'数词', desc:'基数词、序数词、分数、小数、百分数和年月日时间表达。', ids:[19,65,66,67,68,69] },
  { key:'article', title:'冠词', desc:'不定冠词、定冠词、零冠词和常见固定搭配。', ids:[20,70,71,72,73] },
  { key:'preposition', title:'介词', desc:'时间、地点方位、方式和固定介词搭配。', ids:[21,61,62,63,64] }
]
const WORD_CLASS_POINT_IDS = new Set(WORD_CLASS_GROUPS.flatMap(g=>g.ids))
KNOWLEDGE_POINTS.forEach(kp=>{if(WORD_CLASS_POINT_IDS.has(kp.id))kp.categoryId=3})

const SYNTAX_GROUPS = [
  { key:'sentence-kind', title:'句子种类', desc:'陈述句、疑问句、祈使句、感叹句和反意疑问句。', ids:[74,75,76,77,78,23,24] },
  { key:'simple-sentence', title:'简单句的基本句型', desc:'五种基本句型和 There be 结构。', ids:[79,80,81,82,83,12,29] },
  { key:'tense', title:'谓语动词的时态', desc:'be 动词、一般时、进行时、完成时以及时态相关动词变化。', ids:[27,28,1,2,3,4,5,6,17,18,30,31,32,33,34,35,36] },
  { key:'passive', title:'被动语态', desc:'不同时态的被动语态、by 短语、主动被动转换和特殊动词被动。', ids:[7,8,37,38,39,40,41,42] },
  { key:'nonfinite', title:'动词的非谓语形式', desc:'动词不定式、动名词以及常见非谓语搭配。', ids:[16,123,124,125,126,26,127,128,129,130,131,132,133] },
  { key:'compound', title:'并列复合句', desc:'并列连词和相关并列结构。', ids:[134,135,136,137,138] },
  { key:'complex', title:'主从复合句', desc:'宾语从句、状语从句、定语从句和从属连词。', ids:[13,14,22,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,139,140,141,142,143] },
  { key:'agreement', title:'主谓一致', desc:'单复数一致、就近原则、不定代词和集合名词作主语。', ids:[25,104,105,106,107,108,109] },
  { key:'other-patterns', title:'其他常用句式', desc:'不便归入前面句法组的常用结构和固定句型。', ids:[144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159] }
]
const SYNTAX_POINT_IDS = new Set(SYNTAX_GROUPS.flatMap(g=>g.ids))
KNOWLEDGE_POINTS.forEach(kp=>{if(SYNTAX_POINT_IDS.has(kp.id))kp.categoryId=8})

const KNOWLEDGE_GROUPS_BY_CATEGORY = {3:WORD_CLASS_GROUPS,8:SYNTAX_GROUPS}
const ACTIVE_GRAMMAR_POINT_IDS = [...new Set([...WORD_CLASS_GROUPS.flatMap(g=>g.ids),...SYNTAX_GROUPS.flatMap(g=>g.ids)])]
const COMPREHENSIVE_PASSAGES = []

// ---------- 词汇库 ----------
// 基于 1600单词备用.txt；年级、学期、单元未知时保留为 null。
let VOCABULARY = []

async function loadVocabularyData() {
    try {
        const response = await fetch('data/vocabulary.json');
        VOCABULARY = await response.json();
        console.log('✅ 加载成功，共', VOCABULARY.length, '个词汇');
    } catch (error) {
        console.error('❌ 加载失败:', error);
    }
}
  
// 启动加载
loadVocabularyData();

function vocabStageKey(v){return v?.isSupplementalVocabulary?'supplemental':v?.isSecondaryVocabulary?'secondary':'junior'}
function vocabStatsLevel(v){
  if(v?.isSupplementalVocabulary)return{key:'supplemental',label:'专题补充词'}
  if(v?.isSecondaryVocabulary)return{key:'secondary',label:'二级词汇'}
  if(v?.curriculumLevel==='基本词汇')return{key:'basic',label:'基本词汇'}
  return{key:'junior',label:'初中阶段'}
}
function vocabStageLabel(v){const key=vocabStageKey(v);return key==='supplemental'?'专题补充':key==='secondary'?'小学阶段':'初中阶段'}
function vocabStageShort(v){const key=vocabStageKey(v);return key==='supplemental'?'专题补充':key==='secondary'?'小学阶段':'初中阶段'}
function vocabStageClass(v){const key=vocabStageKey(v);return key==='supplemental'?'tag-stage-supplemental':key==='secondary'?'tag-stage-secondary':'tag-stage-junior'}
function vocabHeadwordCount(words){return words.reduce((s,v)=>s+Math.max(1,(v.headwords||[]).length),0)}
function vocabByWord(word){const raw=String(word||''),l=raw.toLowerCase();return VOCABULARY.find(v=>v.word===raw||(v.headwords||[]).some(h=>String(h)===raw))||VOCABULARY.find(v=>v.word.toLowerCase()===l||(v.headwords||[]).some(h=>String(h).toLowerCase()===l))}
function vocabRowsByWords(words){return words.map(word=>vocabByWord(word)).filter(Boolean)}
function specialRow(v,extra){return{word:v.word,translation:v.translation,pos:v.pos,stage:vocabStageShort(v),extra:extra||''}}
const CARDINAL_WORDS='zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand million'.split(' ')
const ORDINAL_WORDS='first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth thirteenth fourteenth fifteenth sixteenth seventeenth eighteenth nineteenth twentieth thirtieth fortieth fiftieth sixtieth seventieth eightieth ninetieth hundredth thousandth millionth'.split(' ')
const MONTH_WORDS='January February March April May June July August September October November December'.split(' ')
const WEEKDAY_WORDS='Monday Tuesday Wednesday Thursday Friday Saturday Sunday weekday weekend'.split(' ')
const COUNTRY_WORDS='China Chinese America American England English Britain British Canada Canadian Australia Australian India Indian Japan Japanese France French Germany German Russia Russian'.split(' ')
const FESTIVAL_WORDS=['festival','Christmas','Easter','Halloween','Thanksgiving','Spring Festival','New Year']
const SPECIAL_VOCAB_TABLES={
  numbers:{title:'数词表',headers:['类别','单词','中文','阶段'],groups:[{label:'基数词',words:CARDINAL_WORDS},{label:'序数词',words:ORDINAL_WORDS}]},
  calendar:{title:'月份/星期表',headers:['类别','单词','中文','阶段'],groups:[{label:'月份',words:MONTH_WORDS},{label:'星期',words:WEEKDAY_WORDS}]},
  countries:{title:'国家与相关词汇',headers:['类别','单词','中文','阶段'],groups:[{label:'国家',words:COUNTRY_WORDS}]},
  festivals:{title:'节日词汇',headers:['类别','单词','中文','阶段'],groups:[{label:'节日',words:FESTIVAL_WORDS}]},
  'word-groups':{title:'其他分类词汇',headers:['类别','单词','中文','阶段'],groups:[{label:'颜色',words:'black blue brown green grey orange pink purple red silver white yellow'.split(' ')},{label:'季节',words:'spring summer autumn winter season'.split(' ')},{label:'运动',words:'badminton baseball basketball football skate ski sport swim volleyball'.split(' ')},{label:'家庭',words:'aunt baby brother cousin dad daughter family father grandparent husband mother parent sister son uncle wife'.split(' ')}]}
}

const IRREGULAR_VERBS=[{"base":"be","past":["was","were"],"pastParticiple":["been"]},{"base":"become","past":["became"],"pastParticiple":["become"]},{"base":"begin","past":["began"],"pastParticiple":["begun"]},{"base":"break","past":["broke"],"pastParticiple":["broken"]},{"base":"bring","past":["brought"],"pastParticiple":["brought"]},{"base":"build","past":["built"],"pastParticiple":["built"]},{"base":"buy","past":["bought"],"pastParticiple":["bought"]},{"base":"catch","past":["caught"],"pastParticiple":["caught"]},{"base":"choose","past":["chose"],"pastParticiple":["chosen"]},{"base":"come","past":["came"],"pastParticiple":["come"]},{"base":"cost","past":["cost"],"pastParticiple":["cost"]},{"base":"cut","past":["cut"],"pastParticiple":["cut"]},{"base":"do","past":["did"],"pastParticiple":["done"]},{"base":"draw","past":["drew"],"pastParticiple":["drawn"]},{"base":"drink","past":["drank"],"pastParticiple":["drunk"]},{"base":"drive","past":["drove"],"pastParticiple":["driven"]},{"base":"eat","past":["ate"],"pastParticiple":["eaten"]},{"base":"fall","past":["fell"],"pastParticiple":["fallen"]},{"base":"feel","past":["felt"],"pastParticiple":["felt"]},{"base":"find","past":["found"],"pastParticiple":["found"]},{"base":"fly","past":["flew"],"pastParticiple":["flown"]},{"base":"forget","past":["forgot"],"pastParticiple":["forgotten"]},{"base":"get","past":["got"],"pastParticiple":["got","gotten"]},{"base":"give","past":["gave"],"pastParticiple":["given"]},{"base":"go","past":["went"],"pastParticiple":["gone"]},{"base":"grow","past":["grew"],"pastParticiple":["grown"]},{"base":"have","past":["had"],"pastParticiple":["had"]},{"base":"hear","past":["heard"],"pastParticiple":["heard"]},{"base":"hold","past":["held"],"pastParticiple":["held"]},{"base":"keep","past":["kept"],"pastParticiple":["kept"]},{"base":"know","past":["knew"],"pastParticiple":["known"]},{"base":"learn","past":["learnt","learned"],"pastParticiple":["learnt","learned"]},{"base":"leave","past":["left"],"pastParticiple":["left"]},{"base":"lend","past":["lent"],"pastParticiple":["lent"]},{"base":"let","past":["let"],"pastParticiple":["let"]},{"base":"lose","past":["lost"],"pastParticiple":["lost"]},{"base":"make","past":["made"],"pastParticiple":["made"]},{"base":"mean","past":["meant"],"pastParticiple":["meant"]},{"base":"meet","past":["met"],"pastParticiple":["met"]},{"base":"pay","past":["paid"],"pastParticiple":["paid"]},{"base":"put","past":["put"],"pastParticiple":["put"]},{"base":"read","past":["read"],"pastParticiple":["read"]},{"base":"ride","past":["rode"],"pastParticiple":["ridden"]},{"base":"ring","past":["rang"],"pastParticiple":["rung"]},{"base":"rise","past":["rose"],"pastParticiple":["risen"]},{"base":"run","past":["ran"],"pastParticiple":["run"]},{"base":"say","past":["said"],"pastParticiple":["said"]},{"base":"see","past":["saw"],"pastParticiple":["seen"]},{"base":"sell","past":["sold"],"pastParticiple":["sold"]},{"base":"send","past":["sent"],"pastParticiple":["sent"]},{"base":"set","past":["set"],"pastParticiple":["set"]},{"base":"show","past":["showed"],"pastParticiple":["shown","showed"]},{"base":"sing","past":["sang"],"pastParticiple":["sung"]},{"base":"sit","past":["sat"],"pastParticiple":["sat"]},{"base":"sleep","past":["slept"],"pastParticiple":["slept"]},{"base":"speak","past":["spoke"],"pastParticiple":["spoken"]},{"base":"spend","past":["spent"],"pastParticiple":["spent"]},{"base":"stand","past":["stood"],"pastParticiple":["stood"]},{"base":"swim","past":["swam"],"pastParticiple":["swum"]},{"base":"take","past":["took"],"pastParticiple":["taken"]},{"base":"teach","past":["taught"],"pastParticiple":["taught"]},{"base":"tell","past":["told"],"pastParticiple":["told"]},{"base":"think","past":["thought"],"pastParticiple":["thought"]},{"base":"understand","past":["understood"],"pastParticiple":["understood"]},{"base":"wear","past":["wore"],"pastParticiple":["worn"]},{"base":"win","past":["won"],"pastParticiple":["won"]},{"base":"write","past":["wrote"],"pastParticiple":["written"]}]


// ======================================================================
// 🔧 以下为核心逻辑代码
// ======================================================================

const DEBUG=false
const APP_VERSION='2026.06.27'
const STORAGE_SCHEMA_VERSION=3
const STORAGE_PREFIX='ezlangent:schema'+STORAGE_SCHEMA_VERSION+':'
const DATA_KEYS=['el_quiz_records','el_error_items','el_vocab_mastery','el_knowledge_stats','el_study_log','el_daily_tasks']
const DAILY_TASK_FLOW_VERSION=2
const App={currentTab:'home',quizType:'grammar',quizQty:10,quizQtyTouched:false,quizSources:[],questions:[],currentQ:0,answers:[],timer:null,seconds:0,answered:false,errorFilter:'all',statsDays:7,parentReportType:'daily',vocabView:'words',vocabFilters:{mastery:'all',letter:null},activeDailyTaskId:null,activeDailyTaskCountedIndexes:[],pendingDailyTaskReviewId:null}
function storageKey(k){
  const ns = (typeof currentUser !== 'undefined' && currentUser && currentUser.username) ? currentUser.username : 'guest'
  return STORAGE_PREFIX + ns + ':' + k
}
function userStorageKey(username, k) {
  // 管理员跨用户读取时使用，直接构造指定用户的全键名
  return STORAGE_PREFIX + username + ':' + k
}
function parseStored(v,d){try{return v?JSON.parse(v):d}catch{return d}}
function lsGet(k,d){return parseStored(localStorage.getItem(storageKey(k)),d)}
function lsSet(k,v){localStorage.setItem(storageKey(k),JSON.stringify(v))}
function ensureStorageSchema(){
  localStorage.setItem(storageKey('el_storage_meta'),JSON.stringify({app:'ezlangent',appVersion:APP_VERSION,schemaVersion:STORAGE_SCHEMA_VERSION,updatedAt:new Date().toISOString()}))
}
// 从旧数据格式（无用户命名空间）迁移到当前用户的命名空间
// 每个用户独立判断：如果用户命名空间为空且有旧数据，则执行迁移
function migrateOldData(){
  const OLD_PREFIX = STORAGE_PREFIX  // 旧格式：ezlangent:schema3:el_...
  const ns = (typeof currentUser !== 'undefined' && currentUser && currentUser.username) ? currentUser.username : null
  if (!ns) return
  const MIGRATED_KEY = STORAGE_PREFIX + '_migrated_' + ns
  if (localStorage.getItem(MIGRATED_KEY)) return // 该用户已迁移过
  // 检查该用户命名空间是否已有数据
  let hasOwnData = false
  DATA_KEYS.forEach(k => {
    if (localStorage.getItem(storageKey(k))) hasOwnData = true
  })
  if (hasOwnData) return  // 已有数据，无需迁移
  // 检查是否有旧格式数据
  let found = false
  DATA_KEYS.forEach(k => {
    const oldKey = OLD_PREFIX + k
    const oldVal = localStorage.getItem(oldKey)
    if (oldVal) {
      localStorage.setItem(storageKey(k), oldVal)
      found = true
    }
  })
  if (found) {
    localStorage.setItem(MIGRATED_KEY, '1')
    console.log('✅ 已将旧格式数据迁移到用户“'+ns+'”')
  }
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

function hashString(s){let h=0;String(s).split('').forEach(ch=>{h=(h*31+ch.charCodeAt(0))>>>0});return h}
function pickStable(list,count,seed){const arr=[...list].filter(Boolean);return arr.map((x,i)=>({x,k:(hashString(seed+'-'+i+'-'+(x.id||x.word||x.title||i))%100000)})).sort((a,b)=>a.k-b.k).slice(0,count).map(o=>o.x)}
function dailyTaskConfig(level){return level==='primary'?{label:'小学',grammarCount:2,vocabCount:6,grammarTest:4,vocabTest:6}:{label:'初中',grammarCount:3,vocabCount:8,grammarTest:6,vocabTest:8}}
function vocabForDailyLevel(level){
  const pool=VOCABULARY.filter(hasVocabQuizData)
  if(level==='primary')return pool.filter(v=>vocabStageKey(v)==='secondary')
  return pool.filter(v=>vocabStageKey(v)==='junior').concat(pool.filter(v=>vocabStageKey(v)==='secondary').slice(0,80))
}
function grammarForDailyLevel(level){
  if(level==='primary')return WORD_CLASS_GROUPS.flatMap(g=>g.ids).map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)).filter(Boolean)
  return ACTIVE_GRAMMAR_POINT_IDS.map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)).filter(Boolean)
}
function createDailyTask(level,date=today()){
  const cfg=dailyTaskConfig(level),seed=date+'-'+level
  const grammar=pickStable(grammarForDailyLevel(level),cfg.grammarCount,seed+'-grammar')
  const vocab=pickStable(vocabForDailyLevel(level),cfg.vocabCount,seed+'-vocab')
  return{id:date+'-'+level,date,level,label:cfg.label,flowVersion:DAILY_TASK_FLOW_VERSION,grammarIds:grammar.map(k=>k.id),vocabIds:vocab.map(v=>v.id),learningCheckedAt:null,testSubmittedAt:null,partialSubmittedAt:null,partialAnsweredCount:0,partialTotalCount:0,partialQuestions:null,partialAnswers:null,partialCurrentQ:0,partialSeconds:0,partialAnsweredIndexes:[],reviewCheckedAt:null,reviewItems:[],completed:false,completedAt:null}
}
function getDailyTask(level,date=today()){
  const tasks=getDailyTasks(),id=date+'-'+level
  if(!tasks[id]||tasks[id].flowVersion!==DAILY_TASK_FLOW_VERSION){tasks[id]=createDailyTask(level,date);setDailyTasks(tasks)}
  return tasks[id]
}
function dailyTaskCompletedOnLevel(date,level){return !!getDailyTasks()[date+'-'+level]?.completed}
function dailyTaskCompletedOn(date){return ['primary','junior'].some(level=>dailyTaskCompletedOnLevel(date,level))}
function weeklyDailyTaskCompletedDaysByLevel(dates,level){return dates.filter(d=>dailyTaskCompletedOnLevel(d,level)).length}
function weeklyDailyTaskCompletedDays(dates){return dates.filter(d=>dailyTaskCompletedOn(d)).length}
function renderDailyTaskBar(){
  ;['primary','junior'].forEach(level=>{
    const task=getDailyTask(level),cfg=dailyTaskConfig(level),btn=document.getElementById('daily-task-'+level),meta=document.getElementById('daily-task-'+level+'-meta'),cta=document.getElementById('daily-task-'+level+'-cta')
    if(!btn||!meta||!cta)return
    btn.classList.toggle('done',!!task.completed)
    const errCount=Math.min(3,getReviewErrors().length)
    const status=task.completed?'今日已完成':task.testSubmittedAt?'已测试 · 待复习':task.partialSubmittedAt?'待完成测试':task.learningCheckedAt?'已学习 · 待测试':'待学习'
    meta.textContent=status
    cta.textContent=task.completed?'完成':task.testSubmittedAt?'复习':task.partialSubmittedAt?'继续':task.learningCheckedAt?'测试':'学习'
  })
}
function dailyVocabQuestion(v,idx){
  const pool=VOCABULARY.filter(x=>hasVocabQuizData(x)&&x.id!==v.id)
  if(idx%2===0){const opts=[v.translation,...pickStable(pool,3,'dv-cn-'+v.id).map(x=>x.translation)].sort(()=>Math.random()-.5);return{type:'vocab_en2cn',vId:v.id,word:v.word,phonetic:v.phonetic,answer:v.translation,options:opts,qText:'请选择 "'+v.word+'" 的中文意思'}}
  const opts=[v.word,...pickStable(pool,3,'dv-en-'+v.id).map(x=>x.word)].sort(()=>Math.random()-.5);return{type:'vocab_cn2en',vId:v.id,translation:v.translation,answer:v.word,options:opts,qText:'请选择 "'+v.translation+'" 对应的英文'}
}
function passageQuestionFromGenerated(p){
  const kpIds=[...new Set(p.parts.map(part=>part.kpId).filter(Boolean))]
  const kpTitles=kpIds.map(id=>KNOWLEDGE_POINTS.find(kp=>kp.id===id)?.title||'综合语法')
  return{type:'passage',kpId:kpIds[0],kpIds,kpTitle:'综合练习',kpTitles:[...kpTitles,'词汇'].filter((t,i,a)=>t&&a.indexOf(t)===i),title:p.title,text:p.text,blanks:[...p.blanks],blankOptions:p.blankOptions?.map(opts=>[...opts]),parts:p.parts.map(part=>({type:part.type||'grammar',kpId:part.kpId||null,vId:part.vId||null,kpTitle:part.type==='vocabulary'?'词汇':(KNOWLEDGE_POINTS.find(kp=>kp.id===part.kpId)?.title||'综合语法'),indexes:[...part.indexes],blanks:part.indexes.map(i=>p.blanks[i]),explanation:part.explanation})),explanation:p.parts.map(part=>(part.type==='vocabulary'?'词汇':(KNOWLEDGE_POINTS.find(kp=>kp.id===part.kpId)?.title||'综合语法'))+'：'+part.explanation).join('；')}
}
function dailyTaskPassageQuestion(task){
  const seed=hashString(task.id+'-passage'),passages=getComprehensivePassages()
  const preferred=task.level==='primary'?passages.filter(p=>p.blanks?.length===5):passages
  const pool=preferred.length?preferred:passages
  return pool.length?[passageQuestionFromGenerated(pool[seed%pool.length])]:generateGrammar(ACTIVE_GRAMMAR_POINT_IDS,1,true,true)
}
function errorReviewQuestionFromRaw(raw){
  const e=inferErrorContext(raw),fallback=e.type==='vocabulary'?'复习这个单词的中文意思':'复习这个语法'
  return{type:'error_review',errorId:e.id,qText:e.questionText,answer:e.correctAnswer,wrongAnswer:e.wrongAnswer,kpTitle:e.kpTitle||'',questionKind:e.questionKind||'',explanation:e.explanation||fallback}
}
function buildDailyTaskQuestions(task){
  const cfg=dailyTaskConfig(task.level),grammarIds=task.grammarIds||[],vocab=(task.vocabIds||[]).map(id=>VOCABULARY.find(v=>v.id===id)).filter(Boolean)
  const grammarQs=[];let attempts=0
  while(grammarQs.length<cfg.grammarTest&&attempts<8){attempts++;for(const q of generateGrammar(grammarIds,cfg.grammarTest,false,false)){if(!grammarQs.some(x=>questionKey(x)===questionKey(q)))grammarQs.push(q);if(grammarQs.length>=cfg.grammarTest)break}}
  const vocabQs=vocab.slice(0,cfg.vocabTest).map(dailyVocabQuestion)
  const passage=dailyTaskPassageQuestion(task)
  return uniqueQuestions([...grammarQs,...vocabQs,...passage])
}
function questionKey(q){return [q.type||'',q.sentence||q.qText||q.title||'',q.word||'',q.translation||''].join('|')}
function uniqueQuestions(qs){const seen=new Set();return qs.filter(q=>{const k=questionKey(q);if(seen.has(k))return false;seen.add(k);return true})}
function dailyTaskReviewErrors(taskId){return getErrors().filter(e=>e.dailyTaskId===taskId&&!e.reviewed&&!e.mastered)}
function markDailyTaskStudy(taskId){
  const tasks=getDailyTasks(),task=tasks[taskId];if(!task){showToast('未找到今日任务');return}
  task.learningCheckedAt=task.learningCheckedAt||Date.now();setDailyTasks(tasks);renderDailyTaskBar();renderDailyTaskStudy(task);showToast('学习打卡已完成')
}
function renderDailyTaskStudy(task){
  const box=document.getElementById('daily-task-study');if(!box)return
  const grammar=task.grammarIds.map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)).filter(Boolean)
  const vocab=task.vocabIds.map(id=>VOCABULARY.find(v=>v.id===id)).filter(Boolean)
  const grammarHtml=grammar.map(k=>'<div class="daily-study-item"><div class="daily-study-item-title">'+esc(k.title)+'</div><div class="daily-study-item-desc">'+esc(String(k.content||'').split('\n').filter(Boolean).slice(0,3).join(' '))+'</div>'+((k.examples||[])[0]?'<div class="daily-study-item-desc">例：'+esc(k.examples[0].en)+'｜'+esc(k.examples[0].cn)+'</div>':'')+'</div>').join('')
  const vocabHtml=vocab.map(v=>'<div class="daily-study-item"><div class="daily-study-item-title">'+esc(v.word)+' | '+esc(v.translation||'')+'</div><div class="daily-study-item-desc">'+esc(v.pos||'')+(v.examples?.[0]?'<br>例：'+esc(v.examples[0].en)+'｜'+esc(v.examples[0].cn):'')+'</div></div>').join('')
  const studyButton='<button class="btn btn-success fw-bold rounded-3" onclick="markDailyTaskStudy(\''+task.id+'\')">1-'+(task.learningCheckedAt?'已完成学习打卡':'完成学习打卡')+'</button>'
  const testButton=task.testSubmittedAt?'<button class="btn btn-primary fw-bold rounded-3" disabled>2-任务测试已完成</button>':'<button class="btn btn-primary fw-bold rounded-3" onclick="checkInDailyTaskAndStart(\''+task.id+'\')">'+(task.partialSubmittedAt?'2-继续任务测试':'2-开始任务测试')+'</button>'
  const reviewButton=task.testSubmittedAt?'<button class="btn btn-warning fw-bold rounded-3" onclick="dailyTaskStudyReview(\''+task.id+'\')">3-测试后标记复习</button>':'<button class="btn btn-warning fw-bold rounded-3" disabled>3-测试后标记复习</button>'
  box.innerHTML='<div class="daily-study-head"><div><div class="daily-study-title">'+esc(task.label)+'阶段每日任务学习</div><div class="daily-study-sub">先学习打卡，再开始任务测试；测试后再标记复习</div></div><div class="daily-study-badge">'+(task.learningCheckedAt?'学习已打卡':'学习未打卡')+'</div></div><div class="daily-study-grid"><div class="daily-study-block"><div class="daily-study-block-title">今日语法</div>'+(grammarHtml||'<div class="daily-study-item-desc">暂无语法内容</div>')+'</div><div class="daily-study-block"><div class="daily-study-block-title">今日词汇</div>'+(vocabHtml||'<div class="daily-study-item-desc">暂无词汇内容</div>')+'</div><div class="daily-study-block"><div class="daily-study-block-title">测试安排</div><div class="daily-study-item-desc">今日语法题、今日词汇题、1 篇'+(task.level==='primary'?'优先 5 空':'综合')+'短文。提交测试后，如有错题，再标记复习。</div></div></div><div class="daily-study-actions">'+studyButton+testButton+reviewButton+'<button class="btn btn-outline-secondary rounded-3" onclick="switchTab(\'home\')">返回首页</button></div>'
  box.classList.remove('d-none')
  document.getElementById('quiz-setup').classList.add('d-none');document.getElementById('quiz-taking').classList.add('d-none');document.getElementById('quiz-result').classList.add('d-none')
}
function startDailyTask(level='junior'){
  const task=getDailyTask(level)
  if(task.completed)return
  switchTab('quiz')
  const fresh=getDailyTasks()[task.id]||task
  App.activeDailyTaskId=fresh.id;App.quizType='daily'
  renderDailyTaskStudy(fresh)
}

function dailyTaskStudyReview(taskId){
  const task=getDailyTasks()[taskId];if(!task){showToast('未找到每日任务');return}
  if(!task.testSubmittedAt){showToast('请先完成任务测试');return}
  if(dailyTaskReviewErrors(taskId).length>0)openDailyTaskReview(taskId)
  else completeDailyTaskReview(taskId)
}
function checkInDailyTaskAndStart(taskId){
  const tasks=getDailyTasks(),task=tasks[taskId];if(!task){showToast('未找到今日任务');return}
  if(!task.learningCheckedAt){showToast('请先完成学习打卡');return}
  const resuming=!!(task.partialSubmittedAt&&Array.isArray(task.partialQuestions)&&task.partialQuestions.length)
  const qs=resuming?task.partialQuestions:buildDailyTaskQuestions(task);if(qs.length===0){showToast('今日任务暂无可用题目');return}
  const savedAnswers=resuming&&Array.isArray(task.partialAnswers)?task.partialAnswers:[]
  const answers=resuming?qs.map((_,i)=>savedAnswers[i]===undefined?null:savedAnswers[i]):qs.map(()=>null)
  const firstOpen=answers.findIndex(a=>a===null||a===undefined)
  App.activeDailyTaskId=task.id;App.activeDailyTaskCountedIndexes=resuming?[...(task.partialAnsweredIndexes||[])]:[];App.quizType='daily';App.questions=qs;App.currentQ=resuming&&firstOpen>=0?firstOpen:0;App.answers=answers;App.seconds=resuming?(task.partialSeconds||0):0
  document.getElementById('daily-task-study').classList.add('d-none');document.getElementById('quiz-setup').classList.add('d-none');document.getElementById('quiz-taking').classList.remove('d-none');document.getElementById('quiz-result').classList.add('d-none')
  if(App.timer)clearInterval(App.timer)
  App.timer=setInterval(()=>{App.seconds++;document.getElementById('quiz-timer').innerHTML='<i class="bi bi-clock me-1"></i>'+formatTime(App.seconds)},1000)
  renderQ()
}
function refreshCurrentTab(){
  if(App.currentTab==='home')renderHome()
  else if(App.currentTab==='knowledge')renderKnowledge()
  else if(App.currentTab==='vocabulary')renderVocabulary()
  else if(App.currentTab==='quiz')resetQuizUI()
  else if(App.currentTab==='stats')renderStats()
  else if(App.currentTab==='errors')renderErrors()
}

function buildExportPayload(){
  const data={};DATA_KEYS.forEach(k=>{data[k]=lsGet(k,null)})
  return{app:'ezlangent',appVersion:APP_VERSION,schemaVersion:STORAGE_SCHEMA_VERSION,exportedAt:new Date().toISOString(),data}
}
function backupFilename(kind){
  const label=kind==='clear-before'?'清除前备份':'数据备份'
  return '英语学习工具_'+label+'_'+today()+'.json'
}
function triggerBackupDownload(filename,json){
  const blob=new Blob([json],{type:'application/json'})
  const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=filename;a.style.display='none';document.body.appendChild(a);a.click()
  setTimeout(()=>{a.remove();URL.revokeObjectURL(url)},1000)
}
function openExportBackupPanel(filename,json){
  const nameEl=document.getElementById('export-backup-filename'),textEl=document.getElementById('export-backup-text'),statusEl=document.getElementById('export-backup-status'),modal=document.getElementById('export-backup-modal')
  if(nameEl)nameEl.textContent=filename
  if(textEl){textEl.value=json;textEl.scrollTop=0}
  if(statusEl){statusEl.textContent='';statusEl.style.display='none'}
  modal?.classList.remove('d-none')
}
function closeExportBackupPanel(){document.getElementById('export-backup-modal')?.classList.add('d-none')}
function copyExportBackup(){
  const textEl=document.getElementById('export-backup-text');if(!textEl)return
  textEl.focus();textEl.select()
  textEl.setSelectionRange(0,textEl.value.length)
  const statusEl=document.getElementById('export-backup-status')
  const text=textEl.value
  const manualMsg='已全选备份数据；如果微信不能粘贴，请在文本框内长按选择“拷贝/复制”。'
  const markManual=()=>{if(statusEl){statusEl.textContent=manualMsg;statusEl.style.display='block'}showToast('备份数据已全选')}
  const markCopied=()=>{if(statusEl){statusEl.textContent='已尝试复制；如微信粘贴为空，请在文本框内长按手动复制。';statusEl.style.display='block'}showToast('备份数据已复制')}
  try{
    const ok=document.execCommand('copy')
    if(ok){markCopied();return}
  }catch(e){}
  if(navigator.clipboard?.writeText){navigator.clipboard.writeText(text).then(markCopied).catch(markManual)}
  else markManual()
}
function downloadBackup(kind='manual',showPanel=false){
  const payload=buildExportPayload()
  const json=JSON.stringify(payload,null,2),filename=backupFilename(kind)
  triggerBackupDownload(filename,json)
  if(showPanel)openExportBackupPanel(filename,json)
  return{filename,json}
}
function exportData(){
  downloadBackup('manual',true)
}

function importData(input){
  const file=input.files[0];if(!file)return
  if(!confirm('导入会覆盖当前学习数据，建议先导出备份。确定继续吗？')){input.value='';return}
  if(!confirm('再次确认：导入后当前数据会被所选文件覆盖，不能直接撤销。是否继续导入？')){input.value='';return}
  const reader=new FileReader()
  reader.onload=function(e){
    try{
      const data=JSON.parse(e.target.result)
      const source=data&&data.data&&typeof data.data==='object'?data.data:data
      let imported=0
      DATA_KEYS.forEach(k=>{if(source[k]!==undefined){lsSet(k,source[k]);imported++}})
      if(imported>0){if(App.currentTab==='quiz'&&App.questions.length>0)resetQuizUI();refreshCurrentTab();showToast('已导入 '+imported+' 项数据')}
      else{showToast('文件中没有找到有效数据')}
    }catch(ex){showToast('文件格式错误，请选择有效的备份文件')}
  }
  reader.readAsText(file)
  input.value=''
}

function confirmClearStats(){
  downloadBackup('clear-before',true)
  if(!confirm('已先生成备份数据并尝试下载 JSON。若手机没有弹出下载，请先取消，在备份面板复制数据后再清除。确定继续清除学习统计记录吗？将清空答题记录、学习时长、语法统计、词汇掌握数据和每日任务完成状态；错题集不会删除。'))return
  setQuizRecords([]);setKpStats({});setMastery({});setStudyLog({});setDailyTasks({})
  renderDailyTaskBar();renderStats();showToast('统计记录已清除')
}

let studyTimer=null,studySec=0
function logStudyStart(){if(studyTimer)return;studyTimer=setInterval(()=>{studySec++;if(studySec%30===0){const l=getStudyLog(),d=today();l[d]=(l[d]||0)+30;setStudyLog(l)}},1000)}
function logStudyStop(){if(studyTimer){clearInterval(studyTimer);studyTimer=null;if(studySec>0){const l=getStudyLog(),d=today();l[d]=(l[d]||0)+studySec;setStudyLog(l)}studySec=0}}

function switchTab(tab){
  // 离开测试页时结束当前测试；只记录已作答题目
  if(App.currentTab==='quiz'&&tab!=='quiz'&&App.questions.length>0){
    exitQuiz(false)
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'))
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'))
  document.getElementById('page-'+tab).classList.add('active')
  document.querySelector('.tab[data-tab="'+tab+'"]').classList.add('active')
  App.currentTab=tab;logStudyStart()
  if(tab==='home')renderHome()
  else if(tab==='knowledge')renderKnowledge()
  else if(tab==='vocabulary')renderVocabulary()
  else if(tab==='quiz')resetQuizUI()
  else if(tab==='stats')renderStats()
  else if(tab==='errors')renderErrors()
}

function renderHome(){
  updateUserBadge()
  if(typeof isAdmin==='function'&&isAdmin())renderAdminOverview()
  const log=getStudyLog(),records=getQuizRecords(),errors=getErrors(),d=today()
  const kpStats=getKpStats(),vm=getMastery()
  renderDailyTaskBar()
  const todayRecords=records.filter(r=>r.date===d)
  document.getElementById('stat-today-q').textContent=todayRecords.reduce((s,r)=>s+r.total,0)
  const tQ=todayRecords.reduce((s,r)=>s+r.total,0),tC=todayRecords.reduce((s,r)=>s+r.correct,0)
  document.getElementById('stat-accuracy').textContent=(tQ>0?Math.round(tC/tQ*100):0)+'%'
  document.getElementById('stat-study-time').textContent=Math.round((log[d]||0)/60)+'分'
  document.getElementById('stat-mastered-grammar').textContent=KNOWLEDGE_POINTS.filter(kp=>{const st=kpStats[kp.id],q=st?.quizzedCount||0,e=st?.errorCount||0;return q>0&&(q-e)/q>=.9}).length
  document.getElementById('stat-mastered-vocab').textContent=Object.values(vm).filter(m=>m.level>=4).length
  document.getElementById('stat-errors').textContent=errors.filter(e=>!e.mastered&&!e.reviewed).length
  renderTrendChart('trend-chart',7)

  // 分类掌握度
  let html=''
  const gTotal=CATEGORIES.reduce((s,c)=>{const ids=KNOWLEDGE_POINTS.filter(k=>k.categoryId===c.id).map(k=>k.id);let t=0;ids.forEach(id=>{const st=kpStats[id];if(st)t+=st.quizzedCount||0});return s+t},0)
  const gErr=CATEGORIES.reduce((s,c)=>{const ids=KNOWLEDGE_POINTS.filter(k=>k.categoryId===c.id).map(k=>k.id);let e=0;ids.forEach(id=>{const st=kpStats[id];if(st)e+=st.errorCount||0});return s+e},0)
  const gAcc=gTotal>0?Math.round((gTotal-gErr)/gTotal*100):0
  const gLevel=gAcc>=80?'good':gAcc>=60?'ok':'bad'
  html+='<div class="mastery-row"><div class="mastery-icon '+gLevel+'"><i class="bi bi-journal-check"></i></div><div class="mastery-main"><div class="mastery-title">语法</div><div class="mastery-meta">'+gTotal+'题 · 错'+gErr+'题</div><div class="mastery-bar"><div class="mastery-fill '+gLevel+'" style="width:'+gAcc+'%"></div></div></div><div class="mastery-score">'+gAcc+'%</div></div>'

  const vAll=VOCABULARY;let vTotal=0,vErr=0
  vAll.forEach(v=>{const m=vm[v.id]||{};vTotal+=m.quizzedCount||0;vErr+=m.errorCount||0})
  const vAcc=vTotal>0?Math.round((vTotal-vErr)/vTotal*100):0
  const vLevel=vAcc>=80?'good':vAcc>=60?'ok':'bad'
  html+='<div class="mastery-row"><div class="mastery-icon '+vLevel+'"><i class="bi bi-bookmark-check"></i></div><div class="mastery-main"><div class="mastery-title">词汇</div><div class="mastery-meta">'+vTotal+'题 · 错'+vErr+'题</div><div class="mastery-bar"><div class="mastery-fill '+vLevel+'" style="width:'+vAcc+'%"></div></div></div><div class="mastery-score">'+vAcc+'%</div></div>'

  document.getElementById('home-breakdown').innerHTML=html||'<p class="text-secondary small text-center mb-0">完成测试后显示掌握度</p>'

  const h=new Date().getHours();let g='今天也来学习英语吧！'
  if(h<6)g='这么晚了还在学习，真棒！';else if(h<9)g='早上好！新的一天从学习开始～';else if(h<12)g='上午好！一起学习英语吧！';else if(h<14)g='中午好！休息一下再学习吧～';else if(h<18)g='下午好！继续加油！';else g='晚上好！今天的学习任务完成了吗？'
  document.getElementById('greeting').textContent=g
}

function formatMinutes(sec){return Math.round((sec||0)/60)+'分'}
function percentText(total,correct){return total>0?Math.round(correct/total*100)+'%':'0%'}
function recentDates(days){const dates=[];for(let i=days-1;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);dates.push(localDateKey(d))}return dates}
function dateFromTime(t){return t?localDateKey(new Date(t)):''}
function reportWeaknesses(dates,limit=3){
  const kpStats=getKpStats(),vocabMastery=getMastery(),rows=[]
  if(dates?.length){
    const set=new Set(dates),map={}
    getErrors().forEach(raw=>{
      const d=dateFromTime(raw.lastWrongAt||raw.createdAt);if(!set.has(d))return
      const e=inferErrorContext(raw)
      let name='语法：'+(e.kpTitle||'综合语法'),kind='grammar',word=''
      if(e.type==='vocabulary'){
        const m=String(e.questionText||'').match(/["“](.+?)["”]/)
        word=m?m[1]:e.correctAnswer
        name='词汇：'+word;kind='vocabulary'
      }
      const item=map[name]||{name,kind,word,total:0,errors:0,acc:0}
      item.errors+=(raw.errorCount||1);item.total+=Math.max(raw.errorCount||1,1);map[name]=item
    })
    return Object.values(map).sort((a,b)=>b.errors-a.errors).slice(0,limit).map(x=>({...x,acc:0}))
  }
  KNOWLEDGE_POINTS.forEach(kp=>{
    const st=kpStats[kp.id],total=st?.quizzedCount||0,errors=st?.errorCount||0
    if(total>0&&errors>0)rows.push({name:'语法：'+kp.title,kind:'grammar',word:'',total,errors,acc:Math.round((total-errors)/total*100)})
  })
  VOCABULARY.forEach(v=>{
    const m=vocabMastery[v.id]||{},total=m.quizzedCount||0,errors=m.errorCount||0
    if(total>0&&errors>0)rows.push({name:'词汇：'+v.word,kind:'vocabulary',word:v.word,total,errors,acc:Math.round((total-errors)/total*100)})
  })
  return rows.sort((a,b)=>b.errors-a.errors||a.acc-b.acc).slice(0,limit)
}

function parentReportData(type=App.parentReportType||'daily'){
  const d=today(),records=getQuizRecords(),log=getStudyLog(),errors=getErrors()
  const dates=type==='weekly'?recentDates(7):[d],dateSet=new Set(dates)
  const scopedRecords=records.filter(r=>dateSet.has(r.date))
  const total=scopedRecords.reduce((s,r)=>s+r.total,0),correct=scopedRecords.reduce((s,r)=>s+r.correct,0)
  const accuracy=total>0?Math.round(correct/total*100):0
  const studySeconds=dates.reduce((s,x)=>s+(log[x]||0),0),studyMinutes=Math.round(studySeconds/60)
  const studyDays=dates.filter(x=>(log[x]||0)>0||records.some(r=>r.date===x&&r.total>0)).length
  const activeErrors=errors.filter(e=>!e.mastered&&!e.reviewed).length
  const newErrors=errors.filter(e=>dateSet.has(dateFromTime(e.lastWrongAt||e.createdAt))).length
  const isWeekly=type==='weekly'
  const primaryDailyTaskDone=dailyTaskCompletedOnLevel(d,'primary'),juniorDailyTaskDone=dailyTaskCompletedOnLevel(d,'junior')
  const dailyTaskDone=primaryDailyTaskDone||juniorDailyTaskDone,taskDays=weeklyDailyTaskCompletedDays(dates)
  const primaryTaskDays=weeklyDailyTaskCompletedDaysByLevel(dates,'primary'),juniorTaskDays=weeklyDailyTaskCompletedDaysByLevel(dates,'junior')
  const taskTargetMet=isWeekly?(primaryTaskDays>=5||juniorTaskDays>=5):dailyTaskDone
  const reportTargetMet=isWeekly?total>=100&&studyDays>=5&&accuracy>=80&&activeErrors===0:total>=20&&accuracy>=80&&activeErrors===0
  const status=taskTargetMet?'已达标':'未达标'
  let advice=isWeekly?'本周还没有有效答题记录，建议先安排 5 天以上的轻量练习。':'今天还没有有效答题记录，建议先完成一组 10-20 题练习。'
  if(total>0&&reportTargetMet&&taskTargetMet)advice=isWeekly?'本周学习节奏稳定，正确率和错题复习都达标。':'今天学习目标完成情况良好，保持当前节奏即可。'
  else if(total>0&&!taskTargetMet)advice=isWeekly?'本周每日任务完成天数不足，建议优先补齐每日任务，再做额外练习。':'今天的每日任务还未完成，建议先完成首页每日任务。'
  else if(total>0&&activeErrors>0)advice=isWeekly?'本周仍有待复习错题，建议先清理错题，再补练薄弱项。':'今天已完成练习，建议先复习待复习错题，再补练薄弱项。'
  else if(total>0&&accuracy<80)advice=isWeekly?'本周正确率未达标，建议围绕薄弱项做集中复习。':'今天正确率未达标，建议针对薄弱项追加一组练习。'
  else if(total>0&&(isWeekly?total<100||studyDays<5:total<20))advice=isWeekly?'本周已有学习记录，但练习量或学习天数还不够稳定。':'今天已有学习记录，建议再补几题达到更稳定的练习量。'
  return{type,date:isWeekly?dates[0]+' 至 '+dates[dates.length-1]:d,total,correct,accuracy,studyMinutes,studyDays,activeErrors,newErrors,status,dailyTaskDone,primaryDailyTaskDone,juniorDailyTaskDone,taskDays,primaryTaskDays,juniorTaskDays,taskTarget:isWeekly?5:1,taskTargetMet,weaknesses:reportWeaknesses(dates,isWeekly?6:3),advice}
}

function parentReportText(data){
  const isWeekly=data.type==='weekly',title=isWeekly?'英语学习周报':'英语学习日报',statusLabel=isWeekly?'本周状态':'今日状态'
  const weak=parentReportWeakText(data)
  const extra=isWeekly?'\n学习天数：'+data.studyDays+' 天':''
  const taskLine=isWeekly?'小学任务：完成 '+data.primaryTaskDays+'/'+data.taskTarget+' 天\n初中任务：完成 '+data.juniorTaskDays+'/'+data.taskTarget+' 天':'小学任务：'+(data.primaryDailyTaskDone?'已完成':'未完成')+'\n初中任务：'+(data.juniorDailyTaskDone?'已完成':'未完成')
  return title+'｜'+data.date+'\n\n'+statusLabel+'：'+data.status+'\n'+taskLine+'\n学习时长：'+data.studyMinutes+' 分钟'+extra+'\n有效答题：'+data.total+' 题\n正确率：'+data.accuracy+'%\n新增错题：'+data.newErrors+' 题\n待复习错题：'+data.activeErrors+' 题\n\n薄弱项 Top '+(isWeekly?6:3)+'：\n'+weak+'\n\n家长建议：\n'+data.advice
}

function parentReportWeakText(data){
  if(!data.weaknesses.length)return'暂无明显薄弱项'
  if(data.type!=='weekly')return data.weaknesses.map((w,i)=>(i+1)+'. '+w.name+'：错 '+w.errors+' 次').join('\n')
  const grammar=data.weaknesses.filter(w=>w.kind!=='vocabulary')
  const vocab=data.weaknesses.filter(w=>w.kind==='vocabulary').map(w=>w.word||w.name.replace(/^词汇：/,''))
  const lines=[]
  if(grammar.length)lines.push('语法：\n'+grammar.map((w,i)=>(i+1)+'. '+w.name.replace(/^语法：/,'')+'：错 '+w.errors+' 次').join('\n'))
  if(vocab.length)lines.push('词汇：'+vocab.join('；'))
  return lines.join('\n')||'暂无明显薄弱项'
}

function parentReportWeakHtml(data){
  if(!data.weaknesses.length)return'<p class="parent-report-advice">暂无明显薄弱项</p>'
  if(data.type!=='weekly')return data.weaknesses.map(w=>'<div class="parent-report-weak"><span class="name">'+esc(w.name)+'</span><span class="meta">错'+w.errors+'次</span></div>').join('')
  const grammar=data.weaknesses.filter(w=>w.kind!=='vocabulary'),vocab=data.weaknesses.filter(w=>w.kind==='vocabulary').map(w=>w.word||w.name.replace(/^词汇：/,''))
  let html=''
  if(grammar.length)html+=grammar.map(w=>'<div class="parent-report-weak"><span class="name">语法：'+esc(w.name.replace(/^语法：/,''))+'</span><span class="meta">错'+w.errors+'次</span></div>').join('')
  if(vocab.length)html+='<div class="parent-report-weak"><span class="name">词汇：'+esc(vocab.join('；'))+'</span></div>'
  return html||'<p class="parent-report-advice">暂无明显薄弱项</p>'
}

function renderParentReport(){
  const data=parentReportData(),isWeekly=data.type==='weekly',statusClass=data.status==='已达标'?'good':data.status==='待开始'?'warn':'bad'
  document.getElementById('parent-report-title').textContent=isWeekly?'家长周报':'家长日报'
  document.getElementById('parent-report-date').textContent=data.date
  const statusLabel=isWeekly?'本周任务状态':'今日任务状态',standard=isWeekly?'达标标准：近 7 天小学任务或初中任务完成不少于 5 天。':'达标标准：今日小学任务或初中任务至少完成一个。'
  const weakHtml=parentReportWeakHtml(data)
  const primaryState=isWeekly?'完成 '+data.primaryTaskDays+'/'+data.taskTarget+' 天':(data.primaryDailyTaskDone?'已完成':'未完成')
  const juniorState=isWeekly?'完成 '+data.juniorTaskDays+'/'+data.taskTarget+' 天':(data.juniorDailyTaskDone?'已完成':'未完成')
  const primaryGood=isWeekly?data.primaryTaskDays>=data.taskTarget:data.primaryDailyTaskDone
  const juniorGood=isWeekly?data.juniorTaskDays>=data.taskTarget:data.juniorDailyTaskDone
  const taskStatusHtml='<div class="parent-task-status-list"><div class="parent-task-status"><span class="name">小学任务</span><span class="state '+(primaryGood?'good':'bad')+'">'+primaryState+'</span></div><div class="parent-task-status"><span class="name">初中任务</span><span class="state '+(juniorGood?'good':'bad')+'">'+juniorState+'</span></div></div>'
  document.getElementById('parent-report-content').innerHTML=
    '<div class="parent-report-status-wrap"><div class="parent-report-status '+statusClass+'">'+statusLabel+'：'+data.status+'</div><button class="parent-report-help" onclick="toggleParentReportStandard()" aria-label="查看达标标准"><i class="bi bi-question-lg"></i></button><div class="parent-report-standard" id="parent-report-standard">'+standard+'</div></div>'+ 
    taskStatusHtml+
    '<div class="parent-report-section"><button class="parent-report-section-toggle" onclick="toggleParentReportWeakness()"><span>薄弱项 Top '+(isWeekly?6:3)+'</span><i class="bi bi-chevron-down"></i></button><div class="parent-report-section-body" id="parent-report-weak-body">'+weakHtml+'</div></div>'+ 
    '<div class="parent-report-section"><div class="parent-report-section-title">家长建议</div><p class="parent-report-advice">'+esc(data.advice)+'</p></div>'
  return data
}

function openParentReport(type='daily'){App.parentReportType=type;renderParentReport();resetParentReportCopyState();document.getElementById('parent-report-modal').classList.remove('d-none')}
function closeParentReport(){document.getElementById('parent-report-modal').classList.add('d-none')}
function openStudentGuide(){document.getElementById('student-guide-modal')?.classList.remove('d-none')}
function closeStudentGuide(){document.getElementById('student-guide-modal')?.classList.add('d-none')}
function toggleParentReportWeakness(){
  const body=document.getElementById('parent-report-weak-body'),btn=document.querySelector('.parent-report-section-toggle')
  if(!body||!btn)return
  body.classList.toggle('collapsed');btn.classList.toggle('collapsed')
}
function toggleParentReportStandard(){document.getElementById('parent-report-standard')?.classList.toggle('show')}
function resetParentReportCopyState(){
  const btn=document.getElementById('parent-report-copy-btn'),tip=document.getElementById('parent-report-copy-tip')
  const name=App.parentReportType==='weekly'?'周报':'日报'
  if(btn)btn.textContent='复制'+name
  if(tip)tip.textContent='点击复制后，可到微信/短信聊天框里长按粘贴发送给家长。'
}
function copyParentReport(){
  const text=parentReportText(parentReportData())
  const done=()=>{
    const btn=document.getElementById('parent-report-copy-btn'),tip=document.getElementById('parent-report-copy-tip')
    const name=App.parentReportType==='weekly'?'周报':'日报'
    if(btn)btn.textContent='已复制，去微信粘贴'
    if(tip)tip.textContent='已复制到剪贴板。现在切到微信/短信，在聊天框长按粘贴即可发送。'
    showToast(name+'已复制')
  }
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done).catch(()=>copyTextFallback(text,done))}
  else copyTextFallback(text,done)
}
function copyTextFallback(text,done){
  const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.left='-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();done()
}

function renderTrendChart(eId,d){
  const records=getQuizRecords(),el=document.getElementById(eId);if(!el)return
  const dates=[];for(let i=d-1;i>=0;i--){const d2=new Date();d2.setDate(d2.getDate()-i);dates.push(localDateKey(d2))}
  const data=dates.map(date=>{const r=records.filter(x=>x.date===date);const t=r.reduce((s,x)=>s+x.total,0),c=r.reduce((s,x)=>s+x.correct,0);return t>0?Math.round(c/t*100):0})
  const mx=Math.max(...data,100)
  el.innerHTML=dates.map((d,i)=>{const h=data[i]>0?Math.max(data[i]/mx*80,4):2;const cls=data[i]>0?'bar':'bar empty';const label=data[i]>0?data[i]+'%':'';return '<div class="col"><div class="chart-label">'+label+'</div><div class="'+cls+'" style="height:'+h+'px"></div><div class="day" style="font-size:.6rem;color:#adb5bd;margin-top:.25rem">'+d.slice(5)+'</div></div>'}).join('')
}

function renderKnowledge(){
  const el=document.getElementById('category-list')
  el.innerHTML=CATEGORIES.map(c=>'<span class="cat" data-cat="'+c.id+'" onclick="filterKnowledge('+c.id+',this)">'+c.name+'</span>').join('')
  const cats=el.querySelectorAll('.cat');if(cats.length>0)cats[0].classList.add('active')
  filterKnowledge(CATEGORIES[0]?.id||0)
}

function renderKnowledgePointCard(kp){
  const meta=['<span class="diff diff-'+kp.difficulty+'">'+['','简单','中等','困难'][kp.difficulty]+'</span>']
  meta.push('<span>'+(kp.examples?.length||0)+'个例句</span>')
  return '<div class="kp-card" onclick="toggleKpDetail('+kp.id+')"><div class="title">'+kp.title+'</div><div class="meta">'+meta.join('')+'</div><div class="kp-detail" id="kp-detail-'+kp.id+'"><div class="content">'+kp.content.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')+'</div>'+(kp.examples||[]).map(ex=>'<div class="example"><div class="en">'+ex.en+'</div><div class="cn">'+ex.cn+'</div></div>').join('')+'</div></div>'
}

function renderKnowledgeGroup(catId,g){
  const items=g.ids.map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)).filter(Boolean)
  if(!items.length)return''
  const groupId='kg-'+catId+'-'+g.key
  return '<section class="kp-group" data-group="'+groupId+'"><div class="kp-group-head" onclick="toggleKnowledgeGroup(\''+groupId+'\')"><i class="bi bi-chevron-right kp-group-chevron"></i><div class="kp-group-title">'+g.title+'</div><div class="kp-group-desc">'+g.desc+'</div><div class="kp-group-count">'+items.length+'个知识点</div></div><div class="kp-group-body">'+items.map(renderKnowledgePointCard).join('')+'</div></section>'
}

function filterKnowledge(catId,el){
  if(el){document.querySelectorAll('.category-list .cat').forEach(c=>c.classList.remove('active'));el.classList.add('active')}
  const kps=KNOWLEDGE_POINTS.filter(k=>k.categoryId===catId)
  const groups=KNOWLEDGE_GROUPS_BY_CATEGORY[catId]
  if(groups){
    document.getElementById('kp-list').innerHTML=groups.map(g=>renderKnowledgeGroup(catId,g)).join('')
    return
  }
  document.getElementById('kp-list').innerHTML=kps.map(renderKnowledgePointCard).join('')
}

function toggleKnowledgeGroup(groupId){
  const group=document.querySelector('.kp-group[data-group="'+groupId+'"]');if(!group)return
  const open=group.classList.contains('open')
  document.querySelectorAll('#kp-list .kp-group.open').forEach(g=>g.classList.remove('open'))
  if(!open)group.classList.add('open')
}

function toggleKpDetail(id){document.getElementById('kp-detail-'+id).classList.toggle('open')}

// 统计条点击：按掌握度筛选
function filterByMastery(type,el){
  App.vocabFilters.mastery=App.vocabFilters.mastery===type?'all':type
  App.vocabView='words'
  renderVocabulary()
}

function vocabMasteryBucket(m){
  const level=Number(m?.level||0),quizzed=Number(m?.quizzedCount||0)
  if(quizzed===0)return'unquizzed'
  if(level>=4)return'mastered'
  if(level>=2)return'learning'
  return'weak'
}

function showVocabMastery(type){
  App.vocabFilters.mastery=type||'all';App.vocabFilters.letter=null
  App.vocabView='words'
  switchTab('vocabulary')
  renderVocabulary()
}

function vocabMetaHtml(v,stars){
  const tags=[]
  if(v.pos)tags.push('<span class="badge tag-blue">'+esc(v.pos)+'</span>')
  tags.push('<span class="badge '+vocabStageClass(v)+'">'+esc(vocabStageLabel(v))+'</span>')
  if(!hasVocabQuizData(v))tags.push('<span class="text-secondary" style="font-size:.7rem">待补释义</span>')
  tags.push('<span class="stars">'+stars+'</span>')
  return tags.join('')
}

function renderIrregularVerbs(){
  const body=document.getElementById('irregular-verbs-body');if(!body)return
  const vocabByWord=Object.fromEntries(VOCABULARY.map(v=>[v.word.toLowerCase(),v]))
  body.innerHTML=IRREGULAR_VERBS.map(row=>{const v=vocabByWord[row.base.toLowerCase()]||{};return '<tr><td class="fw-semibold">'+esc(row.base)+'</td><td>'+esc(row.past.join(' / '))+'</td><td>'+esc(row.pastParticiple.join(' / '))+'</td><td>'+esc(v.translation||'')+'</td></tr>'}).join('')
}

function renderSpecialVocabTable(view){
  const table=SPECIAL_VOCAB_TABLES[view],head=document.getElementById('special-vocab-head'),body=document.getElementById('special-vocab-body')
  if(!table||!head||!body)return
  head.innerHTML='<tr>'+table.headers.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr>'
  const rows=[]
  table.groups.forEach(g=>{vocabRowsByWords(g.words).forEach(v=>rows.push({group:g.label,...specialRow(v)}))})
  body.innerHTML=rows.length?rows.map(r=>{const v=vocabByWord(r.word);return '<tr><td>'+esc(r.group)+'</td><td class="fw-semibold">'+esc(r.word)+'</td><td>'+esc(r.translation||'')+'</td><td><span class="badge '+(v?vocabStageClass(v):'tag-green')+'">'+esc(r.stage)+'</span></td></tr>'}).join(''):'<tr><td colspan="4" class="text-secondary small">当前词库中暂无对应词条</td></tr>'
}

function applyVocabView(view){
  App.vocabView=view&&view!=='words'?view:'words'
  const toolbar=document.getElementById('vocab-toolbar');if(toolbar)document.documentElement.style.setProperty('--vocab-toolbar-height',toolbar.getBoundingClientRect().height+'px')
  document.querySelectorAll('.vocab-view-tab').forEach(btn=>btn.classList.toggle('active',btn.dataset.vocabView===App.vocabView))
  document.getElementById('vocab-words-panel')?.classList.remove('d-none')
  document.getElementById('vocab-list')?.classList.toggle('d-none',App.vocabView!=='words')
  document.getElementById('irregular-verbs-section')?.classList.toggle('d-none',App.vocabView!=='irregular')
  document.getElementById('special-vocab-section')?.classList.toggle('d-none',!SPECIAL_VOCAB_TABLES[App.vocabView])
  if(App.vocabView==='irregular')renderIrregularVerbs()
  if(SPECIAL_VOCAB_TABLES[App.vocabView])renderSpecialVocabTable(App.vocabView)
}

function switchVocabView(view){
  applyVocabView(view&&view!=='words'&&App.vocabView!==view?view:'words')
}

function handleVocabSearch(){
  App.vocabView='words';App.vocabFilters.letter=null
  renderVocabulary()
}

function renderVocabulary(){
  applyVocabView(App.vocabView||'words')
  const search=document.getElementById('vocab-search').value.trim().toLowerCase()
  const mastery=getMastery()
  const masteryFilter=App.vocabFilters.mastery
  const letterFilter=App.vocabFilters.letter

  // 先做基础筛选（搜索），统计基于此
  let baseList=VOCABULARY.filter(v=>{
    if(search)return v.word.toLowerCase().includes(search)||String(v.translation||'').includes(search)||String(v.sourceRaw||'').toLowerCase().includes(search)
    return true
  })

  // 基于基础列表计算统计（不受掌握度/字母筛选影响）
  let mTotal=0,mUnquizzed=0,mMastered=0,mLearning=0,mWeak=0
  baseList.forEach(v=>{
    const bucket=vocabMasteryBucket(mastery[v.id])
    mTotal++
    if(bucket==='unquizzed')mUnquizzed++
    else if(bucket==='mastered')mMastered++
    else if(bucket==='learning')mLearning++
    else if(bucket==='weak')mWeak++
  })

  // 再应用掌握度/字母筛选得到展示列表
  let list=baseList.filter(v=>{
    if(masteryFilter!=='all'&&vocabMasteryBucket(mastery[v.id])!==masteryFilter)return false
    if(letterFilter&&v.word[0].toUpperCase()!==letterFilter)return false
    return true
  })

  const totalText=document.getElementById('vocab-total-text');if(totalText)totalText.textContent='共 '+list.length+' 个'
  // 统计条始终显示，掌握度统计不受字母筛选影响
  document.getElementById('vocab-stats').innerHTML=`<span class="stat-chip unquizzed${masteryFilter==='unquizzed'?' active':''}" data-mastery="unquizzed" onclick="filterByMastery('unquizzed',this)" title="quizzedCount===0">未学习 ${mUnquizzed}</span><span class="stat-chip mastered${masteryFilter==='mastered'?' active':''}" data-mastery="mastered" onclick="filterByMastery('mastered',this)" title="level≥4">已掌握 ${mMastered}</span><span class="stat-chip learning${masteryFilter==='learning'?' active':''}" data-mastery="learning" onclick="filterByMastery('learning',this)" title="level 2-3">学习中 ${mLearning}</span><span class="stat-chip weak${masteryFilter==='weak'?' active':''}" data-mastery="weak" onclick="filterByMastery('weak',this)" title="quizzedCount>0且level≤1">薄弱 ${mWeak}</span>`
  // 调试：输出前5个词的mastery数据到控制台
  const sample=VOCABULARY.slice(0,5).map(v=>{const mv=mastery[v.id];return v.word+': '+(mv?JSON.stringify(mv):'null')}).join(', ')
  if(DEBUG)console.log('vocab stats: total='+mTotal+' unquizzed='+mUnquizzed+' mastered='+mMastered+' learning='+mLearning+' weak='+mWeak+' | sample:',sample)

  // 字母导航的空状态基于 baseList（不受字母筛选影响），可随时切换
  const baseGroups={}
  baseList.forEach(v=>{let l=v.word[0].toUpperCase();if(!/^[A-Z]$/.test(l))l='#';if(!baseGroups[l])baseGroups[l]=[];baseGroups[l].push(v)})
  document.getElementById('vocab-letter-nav').innerHTML='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l=>{
    const has=baseGroups[l]?'':' empty'
    const active=letterFilter===l?' active':''
    return '<span class="letter-btn'+has+active+'" onclick="setVocabLetterFilter(\''+l+'\')">'+l+'</span>'
  }).join('')

  // 按首字母分组（基于筛选后的 list，用于展示）
  const groups={}
  list.forEach(v=>{let l=v.word[0].toUpperCase();if(!/^[A-Z]$/.test(l))l='#';if(!groups[l])groups[l]=[];groups[l].push(v)})
  const sortedLetters=Object.keys(groups).sort()

  // 分组渲染
  document.getElementById('vocab-list').innerHTML=sortedLetters.map(l=>{
    const words=groups[l].map(v=>{
      const m=mastery[v.id]||{level:0};const stars='★'.repeat(m.level)+'☆'.repeat(5-m.level)
      const exs=v.examples||[]
      const exHtml=exs.length?exs.map(ex=>'<div class="ex"><span class="en">'+ex.en+'</span><span class="cn">'+ex.cn+'</span></div>').join(''):'<span class="no-ex">暂无例句</span>'
      return{html:'<div class="vocab-item"><div class="vocab-word-col"><div class="word-row"><span class="word">'+esc(v.word)+'</span><span class="word-separator">|</span><span class="translation">'+esc(v.translation||'')+'</span><span class="phonetic">'+esc(v.phonetic||'')+'</span></div><div class="meta">'+vocabMetaHtml(v,stars)+'</div></div><div class="vocab-ex-col">'+exHtml+'</div></div>',level:m.level||0}
    }).sort((a,b)=>a.level-b.level).map(x=>x.html).join('')
    return '<div class="vocab-group-header" id="vg-'+l+'"><span>📌 '+l+'</span><span class="count">'+groups[l].length+'词</span></div>'+words
  }).join('')
}

function resetQuizUI(){
  document.getElementById('daily-task-study')?.classList.add('d-none')
  document.getElementById('quiz-setup').classList.remove('d-none')
  document.getElementById('quiz-taking').classList.add('d-none')
  document.getElementById('quiz-result').classList.add('d-none')
  App.questions=[];App.currentQ=0;App.answers=[];App.answered=false;App.activeDailyTaskId=null;App.activeDailyTaskCountedIndexes=[]
  if(App.quizType==='daily')App.quizType='grammar'
  document.querySelectorAll('.quiz-type-card').forEach(c=>c.classList.toggle('selected',c.dataset.type===App.quizType))
  if(App.timer){clearInterval(App.timer);App.timer=null}
  renderSourceOptions()
}

function selectQuizType(type){
  App.quizType=type
  if(type==='passage')App.quizQtyTouched=false
  document.querySelectorAll('.quiz-type-card').forEach(c=>c.classList.remove('selected'))
  document.querySelector('.quiz-type-card[data-type="'+type+'"]').classList.add('selected')
  renderSourceOptions()
}

function syncQtyOptions(){
  document.querySelectorAll('#qty-options .badge').forEach(o=>{
    const active=!(App.quizType==='passage'&&!App.quizQtyTouched)&&parseInt(o.dataset.val)===App.quizQty
    o.className='badge '+(active?'bg-primary':'bg-light text-dark')+' rounded-pill px-3 py-2';o.style.cursor='pointer'
  })
  const custom=document.getElementById('custom-qty')
  if(custom)custom.value=[5,10,15,20].includes(App.quizQty)?'':App.quizQty
}

function setQuizQty(n){
  if(!Number.isInteger(n)||n<1||n>50){showToast('题目数量请输入 1-50 的整数');syncQtyOptions();return false}
  App.quizQtyTouched=true;App.quizQty=n;syncQtyOptions();return true
}

function selectQty(el){
  setQuizQty(parseInt(el.dataset.val))
}

function applyCustomQty(el){
  const raw=String(el.value||'').trim()
  if(!raw){syncQtyOptions();return}
  setQuizQty(Number(raw))
}

function renderSourcePointOption(p){
  return '<div class="col-6 col-md-4"><label><input type="checkbox" value="'+p.id+'"> <span class="small">'+esc(p.title)+'</span></label></div>'
}

function renderQuizSourceGroup(cat,group,pts){
  if(!pts.length)return''
  return '<div class="mb-2 border rounded-3 src-group"><button type="button" class="w-100 text-start p-2 bg-light rounded-3 border-0 fw-semibold small" onclick="toggleSrcGroup(this)"><i class="bi bi-chevron-right me-1" style="transition:transform .2s"></i>'+esc(cat.name)+' · '+esc(group.title)+' <span class="text-secondary fw-normal">('+pts.length+'个)</span></button><div class="row g-1 source-grid p-2 mx-1 mb-2" style="display:none">'+pts.map(renderSourcePointOption).join('')+'</div></div>'
}

function renderSourceOptions(){
  syncQtyOptions()
  const container=document.getElementById('source-options'),label=document.getElementById('source-label'),section=document.getElementById('quiz-source-section')
  if(App.quizType==='vocabulary'){
    label.textContent='选择词汇范围';section.classList.remove('d-none')
    const ready=VOCABULARY.filter(hasVocabQuizData).length
    container.innerHTML='<div class="small text-secondary">词汇测试覆盖基本词汇、小学阶段、初中阶段和专题补充词；单句语法题与短文完形也会结合这些词汇生成自然语境。词汇测试还会穿插不规则动词过去式/过去分词变形题。当前可出题 '+ready+' 词，另含 '+IRREGULAR_VERBS.length+' 组不规则动词。</div>'
    return
  }
  if(App.quizType==='error'){
    label.textContent='选择错题类型';section.classList.remove('d-none')
    const errs=getReviewErrors()
    container.innerHTML='<div class="d-flex gap-2 flex-wrap"><span class="badge bg-primary rounded-pill px-3 py-2" data-val="all" onclick="selectErrorSrc(\'all\',this)" style="cursor:pointer">全部 ('+errs.length+')</span><span class="badge bg-light text-dark rounded-pill px-3 py-2" data-val="grammar" onclick="selectErrorSrc(\'grammar\',this)" style="cursor:pointer">语法 ('+errs.filter(e=>e.type==='grammar').length+')</span><span class="badge bg-light text-dark rounded-pill px-3 py-2" data-val="vocabulary" onclick="selectErrorSrc(\'vocabulary\',this)" style="cursor:pointer">词汇 ('+errs.filter(e=>e.type==='vocabulary').length+')</span></div>'
    return
  }
  label.textContent=App.quizType==='passage'?'勾选语法点做短文练习（留空=随机出题）':'语法点选择（不选=随机）'
  section.classList.remove('d-none')
  container.innerHTML=CATEGORIES.map(c=>{
    const groups=KNOWLEDGE_GROUPS_BY_CATEGORY[c.id]
    if(groups)return groups.map(g=>renderQuizSourceGroup(c,g,g.ids.map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)).filter(Boolean))).join('')
    const pts=KNOWLEDGE_POINTS.filter(k=>k.categoryId===c.id)
    return renderQuizSourceGroup(c,{title:c.name},pts)
  }).join('')
}

function selectErrorSrc(val,el){
  document.querySelectorAll('#source-options .badge').forEach(o=>{o.className='badge bg-light text-dark rounded-pill px-3 py-2';o.style.cursor='pointer'})
  el.className='badge bg-primary rounded-pill px-3 py-2';el.style.cursor='pointer';App.errorSrcFilter=val
}

function startQuiz(){
  App.activeDailyTaskId=null
  document.getElementById('daily-task-study')?.classList.add('d-none')
  let qs=[]
  if(App.quizType==='grammar'||App.quizType==='passage'){
    const ck=document.querySelectorAll('#source-options input[type="checkbox"]:checked')
    const ids=ck.length>0?[...ck].map(c=>parseInt(c.value)):ACTIVE_GRAMMAR_POINT_IDS
    const count=App.quizType==='passage'&&!App.quizQtyTouched?1:App.quizQty
    qs=generateGrammar(ids,count,App.quizType==='passage',App.quizType==='passage')
  }else if(App.quizType==='vocabulary'){
    qs=generateVocab(App.quizQty)
  }else if(App.quizType==='error'){qs=generateError(App.quizQty,App.errorSrcFilter||'all')}
  if(qs.length===0){showToast('没有足够的题目');return}
  App.questions=qs;App.currentQ=0;App.answers=qs.map(()=>null);App.seconds=0
  document.getElementById('quiz-setup').classList.add('d-none');document.getElementById('quiz-taking').classList.remove('d-none');document.getElementById('quiz-result').classList.add('d-none')
  if(App.timer)clearInterval(App.timer)
  App.timer=setInterval(()=>{App.seconds++;document.getElementById('quiz-timer').innerHTML='<i class="bi bi-clock me-1"></i>'+formatTime(App.seconds)},1000)
  renderQ()
}

function weightedPick(items,weights){
  const total=weights.reduce((s,w)=>s+w,0);let r=Math.random()*total
  for(let i=0;i<items.length;i++){r-=weights[i];if(r<=0)return items[i]}
  return items[items.length-1]
}

// 艾宾浩斯记忆曲线：根据复习次数和距上次复习时间计算间隔乘数
const EB_INTERVALS=[8,24,72,168,336,720] // 8h, 1d, 3d, 7d, 14d, 30d
function ebMultiplier(reviewCount,lastQuizzed){
  if(!lastQuizzed||reviewCount===0)return 1
  const hoursSince=(Date.now()-lastQuizzed)/3600000
  const stage=Math.min(reviewCount,EB_INTERVALS.length-1)
  const dueIn=EB_INTERVALS[stage]
  const ratio=hoursSince/dueIn
  if(ratio>=1.5)return 50  // 严重超期未复习
  if(ratio>=0.8)return 20  // 接近或刚过复习窗口
  if(ratio>=0.4)return 5   // 快该复习了
  return 0.3               // 还不到复习时间，降低权重
}

function passageChunks(kp){
  const chunks=[]
  ;(kp.questions?.passage||[]).forEach(p=>{
    let seen=0
    splitSentences(p.text).forEach(sentence=>{
      const count=(sentence.match(/___/g)||[]).length
      if(count>0){chunks.push({kpId:kp.id,kpTitle:kp.title,text:sentence.trim(),blanks:p.blanks.slice(seen,seen+count),explanation:p.explanation})}
      seen+=count
    })
  })
  return chunks
}

let GENERATED_PASSAGE_BANK_CACHE=null
const GENERATED_SINGLE_BANK_CACHE=new Map()
const PASSAGE_THEMES=[
  ['Community Reading Week','library','reading journal'],['Green Campus Project','school garden','science poster'],['Sports and Health Day','playground','team plan'],['Museum Learning Trip','city museum','history report'],['Neighborhood Help Day','community center','service diary'],['English Drama Festival','school hall','performance script'],['Science Club Challenge','lab','experiment note'],['Family Story Album','home','memory page'],['Digital Study Workshop','computer room','online project'],['Weekend Market Visit','market','survey form']
]

let PASSAGE_CONTEXTS = {}; // 放全局占位

async function loadPassageData() {
    try {
        const passageResp = await fetch('data/passage.json');
        PASSAGE_CONTEXTS = await passageResp.json();
        console.log('✅ 短文素材加载成功，共', Object.keys(PASSAGE_CONTEXTS).length, '篇');
    } catch (error) {
        console.error('❌ 数据加载失败:', error);
    }
}
loadPassageData()

function activeGrammarPoints(){return ACTIVE_GRAMMAR_POINT_IDS.map(id=>KNOWLEDGE_POINTS.find(kp=>kp.id===id)).filter(Boolean)}
function wordCount(text){return(String(text||'').match(/[A-Za-z]+(?:'[A-Za-z]+)?/g)||[]).length}
function passageContext(theme){return PASSAGE_CONTEXTS[theme[0]]||PASSAGE_CONTEXTS['Community Reading Week']}
function vocabSamples(seed,count){
  const pool=VOCABULARY.filter(hasVocabQuizData)
  if(pool.length===0)return[{word:'class',translation:'班级'},{word:'book',translation:'书'},{word:'learn',translation:'学习'},{word:'friend',translation:'朋友'},{word:'help',translation:'帮助'}].slice(0,count)
  const out=[]
  for(let i=0;i<count;i++)out.push(pool[(seed*17+i*37)%pool.length])
  return out
}
function grammarOptions(kp,seed){
  const others=activeGrammarPoints().filter(x=>x.id!==kp.id)
  const opts=[kp.title]
  for(let i=0;opts.length<4&&i<others.length*2;i++){const t=others[(seed*13+i*7)%others.length]?.title;if(t&&!opts.includes(t))opts.push(t)}
  return opts.sort(()=>Math.random()-.5)
}
function grammarLead(kp,seed){
  const ex=kp.examples?.[seed%Math.max(kp.examples?.length||0,1)]||kp.examples?.[0]
  const words=vocabSamples(kp.id+seed,3).map(v=>v.word+' | '+v.translation).join('，')
  if(ex)return{en:ex.en,cn:ex.cn||'',words}
  return{en:'Students use '+vocabSamples(kp.id+seed,2).map(v=>v.word).join(' and ')+' in a short classroom sentence.',cn:'学生在课堂短句中使用相关词汇。',words}
}
function regularVerbForms(base){
  const lower=String(base||'').toLowerCase().trim();if(!/^[a-z]+$/.test(lower))return[]
  if(/(ed|ing|s)$/.test(lower))return[]
  const third=lower.endsWith('y')&&!/[aeiou]y$/.test(lower)?lower.slice(0,-1)+'ies':/(s|x|z|ch|sh|o)$/.test(lower)?lower+'es':lower+'s'
  const past=lower.endsWith('e')?lower+'d':lower.endsWith('y')&&!/[aeiou]y$/.test(lower)?lower.slice(0,-1)+'ied':lower+'ed'
  const ing=lower.endsWith('ie')?lower.slice(0,-2)+'ying':lower.endsWith('e')&&!/(ee|ye|oe)$/.test(lower)?lower.slice(0,-1)+'ing':lower+'ing'
  return[lower,third,past,ing,'to '+lower]
}
function cleanGrammarOption(option){
  const text=String(option||'').trim();if(!text)return''
  if(/(eded|eding|inged|seds|askeded)/i.test(text))return''
  return text
}
function grammarDistractors(answer,kp,variant,sourceBase){
  const title=kp.title,base=String(answer||'').trim(),sets=[]
  if(sourceBase)sets.push(regularVerbForms(sourceBase))
  if(/现在完成时/.test(title))sets.push(['has collected','collected','is collecting','will collect'])
  else if(/过去完成时/.test(title))sets.push(['has completed','completed','was completing','will complete'])
  else if(/过去进行时/.test(title))sets.push(['are comparing','compared','compare','will compare'])
  else if(/现在进行时/.test(title))sets.push(['discuss','discussed','discusses','were discussing'])
  else if(/一般过去时/.test(title))sets.push(['finish','finishes','will finish','has finished'])
  else if(/一般将来时|主将从现/.test(title))sets.push(['present','presents','presented','has presented'])
  else if(/一般现在时|主谓一致/.test(title))sets.push(['review','reviewed','are reviewing','will review'])
  else if(/被动语态/.test(title))sets.push(['displays','displayed','is displaying','has displayed'])
  else if(/情态动词/.test(title))sets.push(['must','should','can','may','will'])
  else if(/不定式|It is|too.*to|enough.*to/.test(title))sets.push(['write','writing','wrote','to write'])
  else if(/动名词|非谓语/.test(title))sets.push(['share','to share','shared','sharing'])
  else if(/名词/.test(title))sets.push(['activity','activitys','activities','activityes'])
  else if(/冠词/.test(title))sets.push(['a','an','the','/'])
  else if(/介词/.test(title))sets.push(['on','in','at','by','with'])
  else if(/代词/.test(title))sets.push(['their','them','they','theirs'])
  else if(/形容词|比较/.test(title))sets.push(['clear','clearer','clearest','more clear'])
  else if(/副词/.test(title))sets.push(['careful','carefully','more careful','care'])
  else if(/定语从句/.test(title))sets.push(['who','which','what','where'])
  else if(/宾语从句/.test(title))sets.push(['that','what','when','which'])
  else if(/状语从句|连词/.test(title))sets.push(['until','because','although','if'])
  else if(/There be/.test(title))sets.push(['is','are','was','were'])
  sets.push([base])
  const opts=[base]
  sets.flat().forEach(x=>{x=cleanGrammarOption(x);if(x&&x!==base&&!opts.includes(x))opts.push(x)})
  while(opts.length<4){const extra=['learned','learns','is learned','to learn'][opts.length-1];if(!opts.includes(extra))opts.push(extra)}
  return opts.slice(0,4).sort(()=>Math.random()-.5)
}
function generatedGrammarSingles(kp){
  if(GENERATED_SINGLE_BANK_CACHE.has(kp.id))return GENERATED_SINGLE_BANK_CACHE.get(kp.id)
  const themes=PASSAGE_THEMES,brief=String(kp.content||kp.title).split(/[。；\n]/).find(Boolean)||kp.title
  const bank=Array.from({length:5},(_,i)=>{
    const theme=themes[(kp.id+i)%themes.length],words=vocabSamples(kp.id+i,6),blank=grammarBlankForKp(kp,i,theme,words)
    const sourceBase=(blank.sentence.match(/\(([A-Za-z]+)\)/)||[])[1]||''
    const options=grammarDistractors(blank.answer,kp,i,sourceBase)
    return{type:'multiple_choice',kpId:kp.id,kpTitle:kp.title,sentence:blank.sentence,options,answer:options.indexOf(blank.answer),explanation:blank.explanation||kp.title+'：'+brief}
  })
  GENERATED_SINGLE_BANK_CACHE.set(kp.id,bank)
  return bank
}
function grammarBlankForKp(kp,variant,theme,words){
  const title=kp.title,place=theme[1],product=theme[2]
  const fallbackSentences=[
    {sentence:'After the storm, neighbors ___ (work) together to make the street safe again.',answer:'worked',note:'结合过去语境选择正确形式。'},
    {sentence:'The young reporter ___ (ask) polite questions before taking any photos.',answer:'asked',note:'动作发生在过去，用过去式。'},
    {sentence:'A small sign near the gate ___ (remind) visitors to keep the path clean.',answer:'reminded',note:'叙述过去发生的事情，用过去式。'},
    {sentence:'The children ___ (notice) details that many adults had missed.',answer:'noticed',note:'叙述过去观察到的情况，用过去式。'},
    {sentence:'At the end of the day, everyone ___ (feel) proud of the quiet changes they had made.',answer:'felt',note:'feel 的过去式是 felt。'}
  ]
  const fallback=fallbackSentences[variant%fallbackSentences.length]
  let sentence=fallback.sentence,answer=fallback.answer,note=fallback.note
  if(/一般现在时|主谓一致/.test(title)){sentence='The library ___ (open) at nine every morning, even during the winter holiday.';answer='opens';note='经常性安排用一般现在时，主语为单数。'}
  else if(/现在进行时/.test(title)){sentence='At this moment, volunteers ___ (carry) boxes of books to the children\'s corner.';answer='are carrying';note='At this moment 提示现在进行时。'}
  else if(/一般过去时/.test(title)){sentence='Last Friday, our class ___ (visit) the '+place+' and interviewed three workers.';answer='visited';note='Last Friday 提示一般过去时。'}
  else if(/一般将来时|主将从现/.test(title)){sentence='If the rain stops before noon, the group ___ (present) its '+product+' outside.';answer='will present';note='条件句中主句表示将来，用 will + 动词原形。'}
  else if(/现在完成时/.test(title)){sentence='The team ___ already ___ (collect) enough photos for the final display.';answer='has collected';note='already 提示现在完成时。'}
  else if(/过去进行时/.test(title)){sentence='When the guide called their names, two students ___ (look) at an old map.';answer='were looking';note='过去某时正在进行，用过去进行时。'}
  else if(/过去完成时/.test(title)){sentence='By the time the bus arrived, Mia ___ (write) the last question in her notebook.';answer='had written';note='By the time...arrived 表示过去的过去。'}
  else if(/被动语态/.test(title)){sentence='The best photos ___ (display) near the school gate after the project.';answer=variant%2?'are displayed':'were displayed';note='主语 photos 是动作承受者，用被动语态。'}
  else if(/情态动词/.test(title)){sentence='Visitors ___ keep their voices low in the reading room.';answer='must';note='情态动词后接动词原形。'}
  else if(/不定式|It is|too.*to|enough.*to/.test(title)){sentence='It is important ___ (listen) carefully before helping an older neighbor.';answer='to listen';note='It is + adj. + to do 结构。'}
  else if(/动名词|非谓语/.test(title)){sentence='Many children enjoy ___ (choose) their own books from the low shelves.';answer='choosing';note='enjoy 后接动名词。'}
  else if(/名词/.test(title)){sentence='Several ___ (family) brought old photographs for the community display.';answer='families';note='several 后接可数名词复数。'}
  else if(/冠词/.test(title)){sentence='A volunteer gave each child ___ useful card with the library rules on it.';answer='a';note='useful 以辅音音素开头，用 a。'}
  else if(/介词/.test(title)){sentence='The notice was placed ___ the front desk so everyone could see it.';answer='on';note='on the front desk 表示在前台桌面上。'}
  else if(/代词/.test(title)){sentence='The students checked ___ notes before they spoke to the reporter.';answer='their';note='their 修饰 notes，表示他们的笔记。'}
  else if(/形容词|比较/.test(title)){sentence='The second plan was ___ (clear) than the first because it named every job.';answer='clearer';note='than 提示比较级。'}
  else if(/副词/.test(title)){sentence='The little girl read the last line ___ (careful) because everyone was listening.';answer='carefully';note='修饰动词 read 用副词。'}
  else if(/定语从句/.test(title)){sentence='The man ___ repaired the old bridge also taught students how to read the map.';answer='who';note='先行词是人，关系词在从句中作主语。'}
  else if(/宾语从句/.test(title)){sentence='The guide explained ___ the river had once been the busiest road in town.';answer='that';note='explained 后接宾语从句，可用 that 引导。'}
  else if(/状语从句|连词/.test(title)){sentence='The children waited quietly ___ the storyteller opened the blue book.';answer='until';note='until 表示直到某时为止。'}
  else if(/There be/.test(title)){sentence='There ___ several handmade signs beside the new garden path.';answer='were';note='several handmade signs 为复数，结合语境用 were。'}
  return{sentence,answer,explanation:title+'：'+note}
}
function passageParagraph(seed,theme,words){
  const ctx=passageContext(theme),parts=[ctx.intro,ctx.middle,ctx.ending]
  return parts[seed%parts.length]+' '
}
function escapeRegExp(text){return String(text||'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function vocabBlankForPassage(v,variant,theme){
  const answer=String(v.word||'').trim(),translation=String(v.translation||'').trim()
  let sentence=''
  const ex=(v.examples||[]).map(x=>String(x.en||'')).find(en=>answer&&new RegExp('\\b'+escapeRegExp(answer)+'\\b','i').test(en))
  if(ex)sentence=ex.replace(new RegExp('\\b'+escapeRegExp(answer)+'\\b','i'),'___')
  else{
    const product=theme[2],place=theme[1]
    const templates=[
      'The students wrote the word ___ in their '+product+' after checking its meaning.',
      'During the visit to the '+place+', the guide used ___ in a clear sentence.',
      'Mia chose ___ for her notebook because it matched the story she was reading.',
      'The class added ___ to the word wall after the reading activity.'
    ]
    sentence=templates[variant%templates.length]
  }
  return{sentence,answer,explanation:'词汇：'+answer+(translation?'，中文意思是“'+translation+'”。':'。')}
}
function vocabDistractors(answer,vId,seed){
  const base=String(answer||'').trim()
  const pool=VOCABULARY.filter(v=>hasVocabQuizData(v)&&v.id!==vId&&String(v.word||'').trim()&&String(v.word).toLowerCase()!==base.toLowerCase())
  const opts=[base]
  pickStable(pool,12,'pv-'+seed+'-'+base).forEach(v=>{const word=String(v.word||'').trim();if(word&&/^[A-Za-z][A-Za-z'-]*$/.test(word)&&!opts.some(o=>o.toLowerCase()===word.toLowerCase()))opts.push(word)})
  return opts.slice(0,4).sort(()=>Math.random()-.5)
}
function buildGeneratedPassage(seed,requiredIds=[],blankCount=5,choiceMode=false){
  const points=activeGrammarPoints(),theme=PASSAGE_THEMES[seed%PASSAGE_THEMES.length],words=vocabSamples(seed+11,10)
  const grammarCount=Math.max(1,Math.ceil(blankCount*.6)),vocabCount=Math.max(0,blankCount-grammarCount)
  const ids=requiredIds.length?[...requiredIds.slice(0,grammarCount)]:[]
  for(let i=0;ids.length<grammarCount;i++)ids.push(points[(seed*5+i*11)%points.length].id)
  const vocabPool=vocabSamples(seed+29,Math.max(vocabCount*2,4)).filter(hasVocabQuizData)
  const blanks=[],parts=[],blankSentences=[]
  ids.slice(0,grammarCount).forEach((id,i)=>{const kp=KNOWLEDGE_POINTS.find(x=>x.id===id)||points[(seed+i)%points.length],b=grammarBlankForKp(kp,i,theme,words),sourceBase=(b.sentence.match(/\(([A-Za-z]+)\)/)||[])[1]||'',index=blanks.length;blanks.push(b.answer);parts.push({type:'grammar',kpId:kp.id,indexes:[index],explanation:b.explanation,sourceBase});blankSentences.push(b.sentence)})
  vocabPool.slice(0,vocabCount).forEach((v,i)=>{const b=vocabBlankForPassage(v,seed+i,theme),index=blanks.length;blanks.push(b.answer);parts.push({type:'vocabulary',vId:v.id,kpTitle:'词汇',indexes:[index],explanation:b.explanation});blankSentences.push(b.sentence)})
  const firstCut=Math.ceil(blankSentences.length/2),ctx=passageContext(theme)
  let text=ctx.intro+' '+blankSentences.slice(0,firstCut).join(' ')+' '+ctx.middle+' '+blankSentences.slice(firstCut).join(' ')+' '+ctx.ending+' '
  let paragraphSeed=seed,targetWords=blankCount>=10?380:190
  while(wordCount(text)<targetWords){text+=passageParagraph(paragraphSeed++,theme,words)}
  const passage={title:theme[0]+' '+String(seed+1).padStart(2,'0'),text:text.trim(),blanks,parts,blankCount}
  if(choiceMode)passage.blankOptions=blanks.map((answer,i)=>parts[i].type==='vocabulary'?vocabDistractors(answer,parts[i].vId,seed+i):grammarDistractors(answer,KNOWLEDGE_POINTS.find(k=>k.id===parts[i].kpId)||points[i%points.length],seed+i,parts[i].sourceBase))
  return passage
}
function getComprehensivePassages(){
  if(!GENERATED_PASSAGE_BANK_CACHE)GENERATED_PASSAGE_BANK_CACHE=Array.from({length:100},(_,i)=>buildGeneratedPassage(i,[],i%2===0?5:10,i%4===0))
  return GENERATED_PASSAGE_BANK_CACHE
}

function generateMixedPassages(cand,count){
  const candIds=new Set(cand.map(c=>c.kp.id)),weightById=Object.fromEntries(cand.map(c=>[c.kp.id,c.weight]))
  let pool=getComprehensivePassages().filter(p=>p.parts.some(part=>candIds.has(part.kpId)))
  if(pool.length===0)return[]
  pool=pool.map(p=>({p,weight:p.parts.reduce((s,part)=>s+(weightById[part.kpId]||1),0)/Math.max(p.parts.length,1)}))
  const qs=[],used=new Set(),target=Math.min(count,pool.length)
  while(qs.length<target){
    const available=pool.filter(item=>!used.has(item.p.title));if(available.length===0)break
    const picked=weightedPick(available,available.map(item=>item.weight));if(!picked)break
    used.add(picked.p.title)
    const kpIds=[...new Set(picked.p.parts.map(part=>part.kpId).filter(Boolean))]
    const kpTitles=kpIds.map(id=>KNOWLEDGE_POINTS.find(kp=>kp.id===id)?.title||'综合语法')
    qs.push({type:'passage',kpId:kpIds[0],kpIds,kpTitle:'综合练习',kpTitles:[...kpTitles,'词汇'].filter((t,i,a)=>t&&a.indexOf(t)===i),title:picked.p.title,text:picked.p.text,blanks:[...picked.p.blanks],blankOptions:picked.p.blankOptions?.map(opts=>[...opts]),parts:picked.p.parts.map(part=>({type:part.type||'grammar',kpId:part.kpId||null,vId:part.vId||null,kpTitle:part.type==='vocabulary'?'词汇':(KNOWLEDGE_POINTS.find(kp=>kp.id===part.kpId)?.title||'综合语法'),indexes:[...part.indexes],blanks:part.indexes.map(i=>picked.p.blanks[i]),explanation:part.explanation})),explanation:picked.p.parts.map(part=>(part.type==='vocabulary'?'词汇':(KNOWLEDGE_POINTS.find(kp=>kp.id===part.kpId)?.title||'综合语法'))+'：'+part.explanation).join('；')})
  }
  return qs
}

function fallbackGrammarChoice(kp){
  return generatedGrammarSingles(kp)[0]
}

function fallbackGrammarPassage(kp){
  const p=buildGeneratedPassage(kp.id,[kp.id,kp.id,kp.id,kp.id,kp.id],5,false)
  return{type:'passage',kpId:kp.id,kpIds:[kp.id],kpTitle:kp.title,kpTitles:[kp.title,'词汇'],title:p.title,text:p.text,blanks:p.blanks,blankOptions:p.blankOptions?.map(opts=>[...opts]),parts:p.parts.map(part=>({type:part.type||'grammar',kpId:part.kpId||kp.id,vId:part.vId||null,kpTitle:part.type==='vocabulary'?'词汇':kp.title,indexes:[...part.indexes],blanks:part.indexes.map(i=>p.blanks[i]),explanation:part.explanation})),explanation:p.parts.map(part=>(part.type==='vocabulary'?'词汇：':'')+part.explanation).join('；')}
}

function generateGrammar(ids,count,isPassage,mixedPassage=false){
  const stats=getKpStats()
  let cand=ids.map(id=>{const kp=KNOWLEDGE_POINTS.find(k=>k.id===id);if(!kp)return null;const s=stats[id]||{}
    const reviewCount=s.reviewCount||0,lastQuizzed=s.lastQuizzed||0
    let w
    if((s.quizzedCount||0)===0)       w=100
    else if((s.errorCount||0)>0)       w=30+(s.errorCount||0)*3+ebMultiplier(reviewCount,lastQuizzed)*2
    else                               w=1+ebMultiplier(reviewCount,lastQuizzed)
    return{kp,weight:w}
  }).filter(Boolean)
  if(isPassage&&mixedPassage&&cand.length>0){
    const mixed=generateMixedPassages(cand,count)
    if(mixed.length>0)return mixed
  }
  const qs=[],usedKs=new Set();let att=0
  // 统计可用题目库存
  let totalAvail
  if(isPassage){totalAvail=cand.length}
  else{totalAvail=cand.reduce((s,c)=>s+generatedGrammarSingles(c.kp).length,0)}
  const target=Math.min(count,totalAvail)
  while(qs.length<target&&att<target*5&&cand.length>0){
    att++;const availableCand=cand.filter(c=>isPassage?!usedKs.has('fallback-p-'+c.kp.id):generatedGrammarSingles(c.kp).some((_,i)=>!usedKs.has('q-'+c.kp.id+'-'+i)))
    if(availableCand.length===0)break
    const w=availableCand.map(c=>c.weight),ch=weightedPick(availableCand,w);if(!ch)continue
    const{kp}=ch
    if(isPassage){
      usedKs.add('fallback-p-'+kp.id);qs.push(fallbackGrammarPassage(kp));continue
    }else{
      const pool=generatedGrammarSingles(kp).map((data,i)=>({idx:i,data})).filter(item=>!usedKs.has('q-'+kp.id+'-'+item.idx))
      if(pool.length===0)continue
      const pick=pool[Math.floor(Math.random()*pool.length)]
      usedKs.add('q-'+kp.id+'-'+pick.idx)
      qs.push({type:'multiple_choice',kpId:kp.id,kpTitle:kp.title,sentence:pick.data.sentence,options:pick.data.options,answer:pick.data.answer,explanation:pick.data.explanation})
    }
  }
  return qs
}

function hasVocabQuizData(v){
  return !!(v&&String(v.word||'').trim()&&String(v.translation||'').trim())
}

function irregularFormText(row,key){return(row[key]||[]).join(' / ')}
function buildIrregularQuestion(row,key,rows){
  const label=key==='past'?'过去式':'过去分词'
  const answer=irregularFormText(row,key)
  const wrongs=rows.filter(r=>r.base!==row.base).map(r=>irregularFormText(r,key)).filter(x=>x&&x!==answer).sort(()=>Math.random()-0.5).slice(0,3)
  const options=[answer,...wrongs].sort(()=>Math.random()-0.5)
  const v=VOCABULARY.find(x=>x.word.toLowerCase()===row.base.toLowerCase())
  return{type:'vocab_irregular',base:row.base,answer,options,qText:'请选择 "'+row.base+'" 的'+label,explanation:row.base+'：过去式 '+irregularFormText(row,'past')+'，过去分词 '+irregularFormText(row,'pastParticiple')+(v?.translation?'，中文 '+v.translation:'')}
}

function generateVocab(count){
  const mastery=getMastery()
  let cand=VOCABULARY.filter(hasVocabQuizData)
  const irregularRows=IRREGULAR_VERBS.filter(r=>r.base&&r.past?.length&&r.pastParticiple?.length)
  if(cand.length===0&&irregularRows.length===0)return[]
  cand=cand.map(v=>{const m=mastery[v.id]||{level:0,quizzedCount:0,errorCount:0,reviewCount:0};const reviewCount=m.reviewCount||0,lastQuizzed=m.lastQuizzed||0;let w;if((m.quizzedCount||0)===0)w=100;else if((m.errorCount||0)>0)w=30+m.errorCount*3+ebMultiplier(reviewCount,lastQuizzed)*2;else w=1+ebMultiplier(reviewCount,lastQuizzed);return{v,weight:w}})
  const qs=[],used=new Set(),usedIrregular=new Set();let att=0,direction=0
  while(qs.length<count&&att<count*5&&(used.size<cand.length||usedIrregular.size<irregularRows.length*2)){
    att++
    const shouldIrregular=irregularRows.length>0&&(direction%3===2||used.size>=cand.length)
    if(shouldIrregular&&usedIrregular.size<irregularRows.length*2){
      const available=[]
      irregularRows.forEach(row=>['past','pastParticiple'].forEach(key=>{if(!usedIrregular.has(row.base+'-'+key))available.push({row,key})}))
      const pick=available[Math.floor(Math.random()*available.length)]
      if(pick){usedIrregular.add(pick.row.base+'-'+pick.key);qs.push(buildIrregularQuestion(pick.row,pick.key,irregularRows));direction++;continue}
    }
    const av=cand.filter(c=>!used.has(c.v.id));if(av.length===0)continue
    const w=av.map(c=>c.weight),ch=weightedPick(av,w);if(!ch)continue
    const v=ch.v
    // 同一套题中同一个单词只出现一次，方向按题序交替。
    const doEn2cn=direction%2===0
    if(doEn2cn){
      direction++
      const wg=cand.filter(c=>c.v.id!==v.id).sort(()=>Math.random()-0.5).slice(0,3)
      const opts=[v.translation,...wg.map(c=>c.v.translation)].sort(()=>Math.random()-0.5)
      qs.push({type:'vocab_en2cn',vId:v.id,word:v.word,phonetic:v.phonetic,answer:v.translation,options:opts,qText:'请选择 "'+v.word+'" 的中文意思'})
    }else{
      direction++
      const wg=cand.filter(c=>c.v.id!==v.id).sort(()=>Math.random()-0.5).slice(0,3)
      const opts=[v.word,...wg.map(c=>c.v.word)].sort(()=>Math.random()-0.5)
      qs.push({type:'vocab_cn2en',vId:v.id,translation:v.translation,options:opts,answer:v.word,qText:'请选择 "'+v.translation+'" 对应的英文'})
    }
    used.add(v.id)
  }
  return qs
}

function getReviewErrors(){
  const errs=getErrors().filter(e=>!e.mastered)
  const seen=new Set(errs.filter(e=>e.type==='vocabulary').map(e=>String(e.correctAnswer||'')+'|'+String(e.questionText||'')))
  const mastery=getMastery()
  VOCABULARY.forEach(v=>{
    const m=mastery[v.id]||{}
    if((m.errorCount||0)<=0)return
    const qText='请选择 "'+v.word+'" 的中文意思',key=v.translation+'|'+qText
    if(seen.has(key))return
    const wrong=(VOCABULARY.find(x=>x.id!==v.id&&x.translation!==v.translation)?.translation)||'易混答案'
    errs.push({id:'vocab-stat-'+v.id,type:'vocabulary',questionText:qText,correctAnswer:v.translation,wrongAnswer:wrong,errorCount:m.errorCount||1,lastWrongAt:m.lastQuizzed||0,reviewed:false,mastered:false,createdAt:m.lastQuizzed||0,fromStats:true})
    seen.add(key)
  })
  return errs
}

function generateError(count,filter){
  let errs=getReviewErrors()
  if(filter!=='all')errs=errs.filter(e=>e.type===filter)
  errs.sort((a,b)=>(b.errorCount||1)-(a.errorCount||1))
  // 去重：同一道错题只出现一次
  const seen=new Set(),uniq=[]
  for(const e of errs){const key=e.questionText+'|'+e.correctAnswer;if(!seen.has(key)){seen.add(key);uniq.push(e)}}
  return uniq.slice(0,Math.min(count,uniq.length)).map(raw=>{
    const e=inferErrorContext(raw)
    const fallback=e.type==='vocabulary'?'复习这个单词的中文意思':'复习这个语法'
    return{type:'error_review',errorId:e.id,qText:e.questionText,answer:e.correctAnswer,wrongAnswer:e.wrongAnswer,kpTitle:e.kpTitle||'',questionKind:e.questionKind||'',explanation:e.explanation||fallback}
  })
}

function renderQ(){
  const q=App.questions[App.currentQ];if(!q)return
  document.getElementById('quiz-counter').textContent='第 '+(App.currentQ+1)+'/'+App.questions.length+' 题'
  const tagEl=document.getElementById('quiz-tag')
  if(q.type==='passage')tagEl.innerHTML='<i class="bi bi-file-earmark-text me-1"></i>短文'
  else if(q.type==='fill_blank')tagEl.innerHTML='<i class="bi bi-pencil me-1"></i>填空'
  else if(q.type==='multiple_choice')tagEl.innerHTML='<i class="bi bi-ui-checks me-1"></i>选择'
  else if(q.type==='vocab_en2cn')tagEl.innerHTML='<i class="bi bi-translate me-1"></i>英译中'
  else if(q.type==='vocab_cn2en')tagEl.innerHTML='<i class="bi bi-translate me-1"></i>中译英'
  else if(q.type==='vocab_irregular')tagEl.innerHTML='<i class="bi bi-lightning-charge me-1"></i>动词变形'
  else if(q.type==='error_review')tagEl.innerHTML='<i class="bi bi-arrow-repeat me-1"></i>错题重练'
  else tagEl.innerHTML=''
  const dots=App.questions.map((_,i)=>{
    const ans=App.answers[i];let c='dot'
    if(ans!==null&&ans!==undefined)c+=isAnswerCorrect(App.questions[i],ans)?' done':' wrong'
    else if(i===App.currentQ)c+=' current'
    return'<span class="'+c+'" onclick="jumpToQ('+i+')">'+(i+1)+'</span>'
  }).join('')
  document.getElementById('quiz-progress').innerHTML=dots
  const fbEl=document.getElementById('quiz-feedback');fbEl.style.display='none'
  const ans=App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined
  if(q.type==='passage'){
    renderPassage(q,ans)
    if(ans){const cr=isAnswerCorrect(q,App.answers[App.currentQ]);showFB(cr,q.explanation||'',q)}
    updateNav()
    return
  }
  const qEl=document.getElementById('quiz-question'),aEl=document.getElementById('quiz-answer-area')
  if(q.type==='multiple_choice'){
    qEl.textContent=q.sentence
    aEl.innerHTML='<div class="quiz-options">'+q.options.map((o,i)=>{
      let c='opt';if(ans){if(i===q.answer)c+=' show-correct';if(App.answers[App.currentQ]===i&&i!==q.answer)c+=' wrong';else if(App.answers[App.currentQ]===i)c+=' correct'}
      const oc=ans?'':'selectOption('+i+')'
      return'<div class="'+c+'" data-letter="'+String.fromCharCode(65+i)+'" onclick="'+oc+'">'+o+'</div>'
    }).join('')+'</div>'
  }else if(q.type==='fill_blank'){
    const parts=q.sentence.split('___')
    qEl.innerHTML=parts[0]+'<span class="blank">______</span>'+(parts[1]||'')
    if(ans){aEl.innerHTML='<div class="mt-2 small">你的答案：<strong class="text-primary">'+esc(App.answers[App.currentQ])+'</strong></div>'}
    else{aEl.innerHTML='<input class="form-control form-control-lg rounded-3 mt-2" id="fill-input" placeholder="输入答案..." onkeydown="if(event.key===\'Enter\')submitFill()">';setTimeout(()=>document.getElementById('fill-input')?.focus(),100)}
  }else if(q.type==='vocab_en2cn'||q.type==='vocab_cn2en'||q.type==='vocab_irregular'){
    qEl.innerHTML=q.qText+(q.phonetic?' <small class="text-secondary">'+q.phonetic+'</small>':'')
    aEl.innerHTML='<div class="quiz-options">'+q.options.map((o,i)=>{
      let c='opt';if(ans){if(o===q.answer)c+=' show-correct';if(App.answers[App.currentQ]===o&&o!==q.answer)c+=' wrong';else if(App.answers[App.currentQ]===o)c+=' correct'}
      const oc=ans?'':'selectVocabOption(\''+esc(o)+'\')'
      return'<div class="'+c+'" data-letter="'+String.fromCharCode(65+i)+'" onclick="'+oc+'">'+o+'</div>'
    }).join('')+'</div>'
  }else if(q.type==='error_review'){
    qEl.innerHTML='<div class="text-secondary small mb-2">【错题重练】</div>'+esc(q.qText)
    if(ans){aEl.innerHTML='<div class="mt-2 small">你的答案：<strong class="text-'+(App.answers[App.currentQ]==='correct'?'success':'danger')+'">'+(App.answers[App.currentQ]==='correct'?q.answer:q.wrongAnswer)+'</strong></div>'}
    else{aEl.innerHTML='<div class="quiz-options"><div class="opt" data-letter="A" onclick="selectErrorOpt(0)">'+esc(q.answer)+'</div><div class="opt" data-letter="B" onclick="selectErrorOpt(1)">'+esc(q.wrongAnswer)+'</div></div>'}
  }
  if(ans){const cr=isAnswerCorrect(q,App.answers[App.currentQ]);showFB(cr,q.explanation||'',q)}
  updateNav()
}

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}

function cleanVocabQuestionText(text){
  return String(text||'').replace(/\s*\/[^/]+\/\s*/g,' ').replace(/\s+/g,' ').trim()
}

function isAnswerCorrect(q,ans){
  if(ans===null||ans===undefined)return false
  if(q.type==='multiple_choice')return ans===q.answer
  if(q.type==='fill_blank')return String(ans).toLowerCase().trim()===q.answer.toLowerCase().trim()
  if(q.type==='vocab_en2cn'||q.type==='vocab_cn2en'||q.type==='vocab_irregular')return ans===q.answer
  if(q.type==='error_review')return ans==='correct'
  if(q.type==='passage'){if(!Array.isArray(ans))return false;return ans.every((a,i)=>a&&q.blanks[i]&&a.toLowerCase().trim()===q.blanks[i].toLowerCase().trim())}
  return false
}

function passageKpList(q){
  const titles=q.kpTitles?.length?q.kpTitles:(q.kpTitle?[q.kpTitle]:[])
  if(titles.length===0)return''
  return '<div class="passage-kp-list"><div class="label"><i class="bi bi-journal-text me-1"></i>涉及内容</div><ul>'+titles.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul></div>'
}

function renderPassage(q,ans){
  document.getElementById('quiz-question').innerHTML='<div class="text-secondary small mb-1">【短文练习】</div>'+(q.title?'<div class="fw-semibold mb-2">'+esc(q.title)+'</div>':'')
  const aEl=document.getElementById('quiz-answer-area'),parts=q.text.split(/___/g)
  if(ans){const a=App.answers[App.currentQ]||[];aEl.innerHTML='<div class="passage-box">'+parts.map((p,i)=>{if(i===parts.length-1)return p;const val=(a[i]||'').trim();const ok=val&&val.toLowerCase()===(q.blanks[i]||'').toLowerCase().trim();return p+'<span class="p-blank '+(!val?'unchecked':ok?'filled':'wrong')+'">'+(val||'___')+'</span>'}).join('')+'</div>'+passageKpList(q)}
  else{aEl.innerHTML='<div class="passage-box">'+parts.map((p,i)=>{if(i===parts.length-1)return p;if(q.blankOptions?.[i]?.length){return p+'<select class="p-blank" id="passage-blank-'+i+'"><option value="">选择'+(i+1)+'</option>'+q.blankOptions[i].map(o=>'<option value="'+esc(o)+'">'+esc(o)+'</option>').join('')+'</select>'}return p+'<input class="p-blank" id="passage-blank-'+i+'" placeholder="填空'+(i+1)+'">'}).join('')+'</div>'+passageKpList(q)+'<div class="passage-grade-actions"><div class="quiz-action"><button class="btn btn-primary" onclick="submitPassage()">批改</button><div class="hint">检查已填写空</div></div></div>'}
}

function selectOption(i){if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return;const q=App.questions[App.currentQ];App.answers[App.currentQ]=i;updateMastery(q,i===q.answer);trackE(q,i===q.answer,q.options[i],q.options[q.answer]);renderQ()}
function selectVocabOption(v){if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return;const q=App.questions[App.currentQ];App.answers[App.currentQ]=v;updateVocabMastery(q,v===q.answer);trackE(q,v===q.answer,v,q.answer);renderQ()}
function selectErrorOpt(i){if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return;const q=App.questions[App.currentQ],cr=i===0;App.answers[App.currentQ]=cr?'correct':'wrong';if(cr){const e=getErrors(),er=e.find(x=>x.id===q.errorId);if(er){er.reviewed=true;er.mastered=true;setErrors(e)}}renderQ()}

function submitFill(){
  if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return
  const inp=document.getElementById('fill-input');if(!inp)return;const v=inp.value.trim();if(!v){showToast('请输入答案');return}
  const q=App.questions[App.currentQ];App.answers[App.currentQ]=v;updateMastery(q,v.toLowerCase()===q.answer.toLowerCase());trackE(q,v.toLowerCase()===q.answer.toLowerCase(),v,q.answer);renderQ()
}

function submitPassage(){
  const q=App.questions[App.currentQ],ans=q.blanks.map((_,i)=>{const el=document.getElementById('passage-blank-'+i);return el?el.value.trim():''})
  if(!ans.some(a=>a)){showToast('请至少填写一个空');return}
  if(App.quizType==='daily'&&!ans.every(a=>a)){showToast('每日任务短文题需要填写全部空');return}
  App.answers[App.currentQ]=ans
  const all=ans.every((a,i)=>a&&a.toLowerCase()===q.blanks[i].toLowerCase())
  const grammarIds=[...new Set((q.parts||[]).filter(part=>(part.type||'grammar')!=='vocabulary'&&part.kpId).map(part=>part.kpId))]
  if(grammarIds.length)updateMastery({...q,kpIds:grammarIds},all)
  ;(q.parts||[]).filter(part=>part.type==='vocabulary'&&part.vId).forEach(part=>{const i=part.indexes?.[0];updateVocabMastery({vId:part.vId},!!ans[i]&&ans[i].toLowerCase()===String(q.blanks[i]||'').toLowerCase())})
  // 跟踪每个空的错误
  ans.forEach((a,i)=>{if(a&&a.toLowerCase()!==q.blanks[i].toLowerCase()){trackE(q,false,a,q.blanks[i],i)}})
  renderQ()
}

function showFB(cr,exp,q){
  const el=document.getElementById('quiz-feedback');el.style.display='block';el.className='quiz-feedback show '+(cr?'correct':'wrong')
  const info=q?.kpTitle?'<div class="small text-secondary mb-1"><i class="bi bi-journal-text me-1"></i>'+q.kpTitle+'</div>':''
  if(q?.type==='passage'){
    el.className='quiz-feedback show passage-feedback'
    const ans=App.answers[App.currentQ]||[],filledIndexes=ans.map((a,i)=>a?i:null).filter(i=>i!==null)
    const answerRows=filledIndexes.map(i=>{
      const user=String(ans[i]||'').trim(),ok=user.toLowerCase()===String(q.blanks[i]||'').toLowerCase().trim()
      return '<div class="result-passage-answer"><span class="idx">'+(i+1)+'</span><div class="correct"><i class="bi bi-check-lg me-1"></i>正确答案：'+esc(q.blanks[i])+'</div><div class="'+(ok?'correct':'wrong')+'"><i class="bi '+(ok?'bi-check-lg':'bi-x-lg')+' me-1"></i>你的答案：'+esc(user)+'</div></div>'
    }).join('')
    let explain=''
    if(q.parts?.length){
      let start=0
      const items=q.parts.map(p=>{const from=start,to=start+(p.blanks?.length||0);start=to;const indexes=p.indexes||[];return filledIndexes.some(i=>indexes.length?indexes.includes(i):(i>=from&&i<to))?'<li><strong>'+esc(p.kpTitle)+'：</strong>'+esc(p.explanation||'')+'</li>':''}).filter(Boolean).join('')
      if(items)explain='<div class="result-passage-explain"><div class="label"><i class="bi bi-lightbulb me-1"></i>解析</div><ul>'+items+'</ul></div>'
    }else if(exp){
      explain='<div class="result-passage-explain"><div class="label"><i class="bi bi-lightbulb me-1"></i>解析</div>'+esc(exp)+'</div>'
    }
    const action=App.currentQ===App.questions.length-1?'':'<div class="passage-feedback-actions"><button class="btn btn-primary btn-sm" onclick="continueAfterPassageReview()">继续</button></div>'
    el.innerHTML=info+'<strong><i class="bi '+(cr?'bi-check-circle':'bi-x-circle')+' me-1"></i>'+(cr?'已填写部分全部正确！':'已批改，注意核对标红处')+'</strong><div class="result-passage-answers"><div class="panel-label"><i class="bi bi-list-check me-1"></i>答案核对</div>'+answerRows+'</div>'+explain+action
    return
  }
  el.innerHTML=cr?info+'<strong><i class="bi bi-check-circle me-1"></i>回答正确！</strong>'+(exp?'<br><span class="small">'+exp+'</span>':''):info+'<strong><i class="bi bi-x-circle me-1"></i>回答错误</strong>'+(exp?'<br><span class="small">'+exp+'</span>':'')
}

function updateNav(){
  const nb=document.getElementById('quiz-next-btn'),pb=document.getElementById('quiz-prev-btn'),sb=document.getElementById('quiz-submit-btn')
  const pa=document.getElementById('quiz-prev-action'),sa=document.getElementById('quiz-submit-action'),nh=document.getElementById('quiz-next-hint')
  const last=App.currentQ===App.questions.length-1,ans=App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined
  if(pb){pa?.classList.toggle('is-hidden',App.currentQ===0);pb.onclick=prevQ}
  if(sb){sa?.classList.toggle('d-none',last);sb.innerHTML='提前交卷'}
  if(nh)nh.textContent=last?'结束并看结果':ans?'进入下一题':'作答后继续'
  if(last){nb.innerHTML='交卷';nb.onclick=submitQuiz;nb.style.opacity='1'}
  else{nb.innerHTML='下一题';nb.style.opacity=ans?'1':'0.5';nb.onclick=()=>{if(!ans){showToast('请先作答');return}nextQ()}}
}
function nextQ(){if(App.currentQ<App.questions.length-1){App.currentQ++;renderQ()}}
function prevQ(){if(App.currentQ>0){App.currentQ--;renderQ()}}
function jumpToQ(i){App.currentQ=i;renderQ()}

function handleQuizBlankClick(e){
  const taking=document.getElementById('quiz-taking')
  if(!taking||taking.classList.contains('d-none'))return
  const interactive=e.target.closest('button,a,input,select,textarea,label,.opt,.dot,.quiz-feedback,.quiz-actions')
  if(interactive)return
  const answered=App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined
  if(!answered)return
  if(App.currentQ===App.questions.length-1)submitQuiz()
  else nextQ()
}

function continueAfterPassageReview(){
  if(App.currentQ===App.questions.length-1)submitQuiz()
  else nextQ()
}

function confirmSubmitQuiz(){
  submitQuiz()
}

function confirmExitQuiz(){
  exitQuiz()
}

function quizKindKey(q){
  if(q.type==='vocab_irregular')return'vocab_irregular'
  if(q.type==='vocab_en2cn'||q.type==='vocab_cn2en')return'vocab_regular'
  if(q.type==='passage')return'grammar_passage'
  return q.type||'other'
}
function activeCountedIndexSet(){return new Set((App.activeDailyTaskCountedIndexes||[]).map(Number))}
function answeredIndexes(){return App.answers.map((a,i)=>(a!==null&&a!==undefined)?i:null).filter(i=>i!==null)}
function newlyAnsweredIndexes(){const counted=activeCountedIndexSet();return answeredIndexes().filter(i=>!counted.has(i))}
function buildQuizKindStats(indexes){
  const stats={}
  const allowed=indexes?new Set(indexes):null
  App.questions.forEach((q,i)=>{
    if(allowed&&!allowed.has(i))return
    const a=App.answers[i]
    if(a===null||a===undefined)return
    const key=quizKindKey(q),st=stats[key]||{total:0,correct:0}
    st.total++;if(isAnswerCorrect(q,a))st.correct++
    stats[key]=st
  })
  return stats
}

function answeredQuizResults(indexes){
  let cc=0,valid=0
  const allowed=indexes?new Set(indexes):null
  const res=App.questions.map((q,i)=>{if(allowed&&!allowed.has(i))return{q,answer:null,isCorrect:false};const a=App.answers[i];if(a!==null&&a!==undefined){valid++;const ok=isAnswerCorrect(q,a);if(ok)cc++;return{q,answer:a,isCorrect:ok}}return{q,answer:null,isCorrect:false}}).filter(r=>r.answer!==null)
  return{cc,valid,res}
}

function latestDailyTaskRecord(taskId){
  return getQuizRecords().filter(r=>r.dailyTaskId===taskId).sort((a,b)=>(b.timestamp||0)-(a.timestamp||0))[0]||null
}

function renderDailyTaskPendingReview(task){
  const rec=latestDailyTaskRecord(task.id)||{}
  const valid=rec.total||task.partialAnsweredCount||0,total=task.partialTotalCount||rec.total||valid,correct=rec.correct||0
  document.getElementById('daily-task-study')?.classList.add('d-none')
  document.getElementById('quiz-setup').classList.add('d-none');document.getElementById('quiz-taking').classList.add('d-none');document.getElementById('quiz-result').classList.remove('d-none')
  const sc=valid>0?Math.round(correct/valid*100):0,ci=document.getElementById('result-circle')
  ci.className='result-circle '+(sc>=80?'good':sc>=60?'ok':'bad');ci.textContent=sc+'%'
  document.getElementById('result-text').textContent='任务测试已提交，请完成最后复习'
  document.getElementById('r-correct').textContent=correct;document.getElementById('r-total').textContent=valid;document.getElementById('r-time').textContent=formatTime(rec.duration||0)
  document.getElementById('result-review').innerHTML='<div id="daily-task-result-action">'+dailyTaskResultAction(task.id,valid,total)+'</div>'
}

function continueDailyTaskAfterPartial(taskId){
  const tasks=getDailyTasks(),task=tasks[taskId];if(!task){showToast('未找到每日任务');return}
  renderDailyTaskStudy(task);renderDailyTaskBar();showToast('请继续完成任务测试')
}

function renderQuizResultView(dailyTaskId,valid,total,cc,res){
  document.getElementById('quiz-taking').classList.add('d-none');document.getElementById('quiz-result').classList.remove('d-none')
  const sc=valid>0?Math.round(cc/valid*100):0;const ci=document.getElementById('result-circle')
  let cls='bad';if(sc>=80)cls='good';else if(sc>=60)cls='ok'
  ci.className='result-circle '+cls;ci.textContent=sc+'%'
  document.getElementById('result-text').textContent={good:'太棒了！继续保持！',ok:'还不错，继续加油！',bad:'需要多练习哦！'}[cls]
  document.getElementById('r-correct').textContent=cc;document.getElementById('r-total').textContent=valid;document.getElementById('r-time').textContent=formatTime(App.seconds)
  const rev=document.getElementById('result-review')
  rev.innerHTML='<div id="daily-task-result-action">'+dailyTaskResultAction(dailyTaskId,valid,total)+'</div><h6 class="fw-semibold mb-3"><i class="bi bi-list-check me-1"></i>逐题回顾</h6>'+res.map((r,i)=>{
    const q=r.q;let qd=q.sentence||q.qText||''
    if(q.type==='fill_blank')qd=q.sentence?.replace('___','______')
    if(q.type==='vocab_en2cn'||q.type==='vocab_cn2en'||q.type==='vocab_irregular')qd=cleanVocabQuestionText(qd)
    const icon=r.isCorrect?'<i class="bi bi-check-circle-fill text-success me-1"></i>':'<i class="bi bi-x-circle-fill text-danger me-1"></i>'
    if(q.type==='passage')return renderPassageReview(r,icon)
    let ca='';if(q.type==='multiple_choice'&&q.options)ca=q.options[q.answer];else if(q.type==='fill_blank')ca=q.answer;else if(q.type==='vocab_en2cn'||q.type==='vocab_cn2en'||q.type==='vocab_irregular')ca=q.answer;else if(q.type==='passage')ca=q.blanks?.join(', ');else ca=q.answer
    let ya='';if(r.answer!==null&&r.answer!==undefined){if(typeof r.answer==='number'&&q.options)ya=q.options[r.answer];else if(Array.isArray(r.answer))ya=r.answer.join(', ');else if(r.answer==='correct')ya=ca;else if(r.answer==='wrong')ya='答错';else ya=r.answer}else ya='未作答'
    return'<div class="rq"><div class="q-text">'+icon+esc(qd)+'</div><div class="correct"><i class="bi bi-check-lg me-1"></i>正确答案：'+esc(ca)+'</div>'+(r.isCorrect?'':'<div class="wrong"><i class="bi bi-x-lg me-1"></i>你的答案：'+esc(ya)+'</div>')+(q.explanation?'<div class="explain"><i class="bi bi-lightbulb me-1"></i>'+esc(q.explanation)+'</div>':'')+'</div>'
  }).join('')
}

function exitQuiz(showResult=true){
  const answered=App.answers.filter(a=>a!==null&&a!==undefined).length
  const dailyTaskId=App.activeDailyTaskId,total=App.questions.length
  if(answered>0){
    const newIndexes=newlyAnsweredIndexes()
    const {cc,valid,res}=answeredQuizResults(newIndexes)
    if(App.timer){clearInterval(App.timer);App.timer=null}
    if(valid>0){const rec={date:today(),timestamp:Date.now(),type:App.quizType,total:valid,correct:cc,duration:App.seconds,exited:true,kindStats:buildQuizKindStats(newIndexes),dailyTaskId:dailyTaskId||null};const recs=getQuizRecords();recs.push(rec);setQuizRecords(recs)}
    if(dailyTaskId){const tasks=getDailyTasks(),task=tasks[dailyTaskId];if(task?.learningCheckedAt){const counted=[...new Set([...(task.partialAnsweredIndexes||[]),...answeredIndexes()])].sort((a,b)=>a-b);if(answered===total){task.testSubmittedAt=Date.now()}else{task.partialSubmittedAt=Date.now();task.partialAnsweredCount=counted.length;task.partialTotalCount=total;task.partialQuestions=App.questions;task.partialAnswers=App.answers;task.partialCurrentQ=App.currentQ;task.partialSeconds=App.seconds;task.partialAnsweredIndexes=counted}setDailyTasks(tasks);renderDailyTaskBar()}}
    if(showResult){renderQuizResultView(dailyTaskId,valid,total,cc,res);App.questions=[];App.answers=[];App.currentQ=0;App.activeDailyTaskId=null;App.activeDailyTaskCountedIndexes=[];return}
  }
  resetQuizUI()
}

function renderPassageReview(r,icon){
  const q=r.q,answers=Array.isArray(r.answer)?r.answer:[]
  const title=q.title||'短文练习'
  const filledIndexes=answers.map((a,i)=>a?i:null).filter(i=>i!==null)
  const answerRows=(q.blanks||[]).map((blank,i)=>{
    const user=(answers[i]||'').trim(),ok=user&&user.toLowerCase()===String(blank).toLowerCase().trim()
    const userLine=user?'<div class="'+(ok?'correct':'wrong')+'"><i class="bi '+(ok?'bi-check-lg':'bi-x-lg')+' me-1"></i>你的答案：'+esc(user)+'</div>':'<div class="missing"><i class="bi bi-dash-lg me-1"></i>你的答案：未填写</div>'
    return '<div class="result-passage-answer"><span class="idx">'+(i+1)+'</span><div class="correct"><i class="bi bi-check-lg me-1"></i>正确答案：'+esc(blank)+'</div>'+userLine+'</div>'
  }).join('')
  let explain=''
  if(q.parts?.length){
    let start=0
    const items=q.parts.map(p=>{const from=start,to=start+(p.blanks?.length||0);start=to;const indexes=p.indexes||[];return filledIndexes.some(i=>indexes.length?indexes.includes(i):(i>=from&&i<to))?'<li><strong>'+esc(p.kpTitle)+'：</strong>'+esc(p.explanation||'')+'</li>':''}).filter(Boolean).join('')
    if(items)explain='<div class="result-passage-explain"><div class="label"><i class="bi bi-lightbulb me-1"></i>解析</div><ul>'+items+'</ul></div>'
  }else if(q.explanation){
    explain='<div class="result-passage-explain"><div class="label"><i class="bi bi-lightbulb me-1"></i>解析</div>'+esc(q.explanation)+'</div>'
  }
  return '<div class="rq"><div class="q-text">'+icon+esc(title)+'</div><div class="result-passage-answers"><div class="panel-label"><i class="bi bi-list-check me-1"></i>答案核对</div>'+answerRows+'</div>'+explain+'</div>'
}

function dailyTaskResultAction(taskId,valid,total){
  if(!taskId)return''
  if(valid!==total){
    return '<div class="rq"><div class="q-text"><i class="bi bi-info-circle me-1"></i>待完成测试</div><div class="explain">本次中途退出，已答 '+valid+' 题已计入统计；已答错题会进入错题集。每日任务还没有到第 3 步，请继续完成全部题目。</div><button class="btn btn-primary fw-bold rounded-3 mt-2" onclick="continueDailyTaskAfterPartial(\''+taskId+'\')">2-继续任务测试</button></div>'
  }
  const wrongCount=dailyTaskReviewErrors(taskId).length
  const label=wrongCount>0?'3-去错题集标记 '+wrongCount+' 道错题':'3-确认无错题，完成每日任务'
  const action=wrongCount>0?'openDailyTaskReview(\''+taskId+'\')':'completeDailyTaskReview(\''+taskId+'\')'
  return '<div class="rq"><div class="q-text"><i class="bi bi-arrow-repeat me-1"></i>3-测试后标记复习</div><div class="explain">'+(wrongCount>0?'请到错题集逐条查看解析并标记已复习，全部标记后每日任务才完成。':'本次没有错题，确认后即可完成每日任务。')+'</div><button class="btn btn-warning fw-bold rounded-3 mt-2 w-100" onclick="'+action+'">'+label+'</button></div>'
}

function openDailyTaskReview(taskId){
  App.pendingDailyTaskReviewId=taskId;switchTab('errors');showToast('请逐条标记本次每日任务错题已复习')
}

function completeDailyTaskReview(taskId){
  const tasks=getDailyTasks(),task=tasks[taskId];if(!task){showToast('未找到每日任务');return}
  if(!task.testSubmittedAt){showToast(task.partialSubmittedAt?'请先继续完成任务测试':'请先完成任务测试');return}
  const reviewErrors=dailyTaskReviewErrors(taskId),errors=getErrors()
  task.reviewItems=reviewErrors.map(e=>({...e}))
  reviewErrors.forEach(e=>{const hit=errors.find(x=>String(x.id)===String(e.id));if(hit)hit.reviewed=true})
  if(reviewErrors.length>0)setErrors(errors)
  task.reviewCheckedAt=Date.now()
  task.completed=true;task.completedAt=Date.now();setDailyTasks(tasks);renderDailyTaskBar();showToast('每日任务已完成')
  const action=document.getElementById('daily-task-result-action');if(action)action.innerHTML='<div class="rq"><div class="q-text"><i class="bi bi-check-circle-fill text-success me-1"></i>每日任务已完成</div></div>'
}

function submitQuiz(){
  if(App.timer){clearInterval(App.timer);App.timer=null}
  const total=App.questions.length,all=answeredQuizResults(),newIndexes=newlyAnsweredIndexes(),fresh=answeredQuizResults(newIndexes)
  const cc=fresh.cc,valid=fresh.valid,res=all.res
  const dailyTaskId=App.activeDailyTaskId
  const wasResuming=activeCountedIndexSet().size>0
  if(valid>0||!wasResuming){const rec={date:today(),timestamp:Date.now(),type:App.quizType,total:valid,correct:cc,duration:App.seconds,kindStats:buildQuizKindStats(newIndexes),dailyTaskId:dailyTaskId||null};const recs=getQuizRecords();recs.push(rec);setQuizRecords(recs)}
  if(dailyTaskId&&all.valid===total){const tasks=getDailyTasks();if(tasks[dailyTaskId]?.learningCheckedAt){tasks[dailyTaskId].testSubmittedAt=Date.now();tasks[dailyTaskId].partialSubmittedAt=null;tasks[dailyTaskId].partialAnsweredCount=0;tasks[dailyTaskId].partialTotalCount=0;tasks[dailyTaskId].partialQuestions=null;tasks[dailyTaskId].partialAnswers=null;tasks[dailyTaskId].partialCurrentQ=0;tasks[dailyTaskId].partialSeconds=0;tasks[dailyTaskId].partialAnsweredIndexes=[];setDailyTasks(tasks)}}
  renderQuizResultView(dailyTaskId,all.valid,total,all.cc,res)
  App.questions=[];App.answers=[];App.currentQ=0;App.activeDailyTaskId=null;App.activeDailyTaskCountedIndexes=[]
}

function updateMastery(q,cr){const ids=q.kpIds||[q.kpId];if(!ids[0])return;const s=getKpStats();ids.forEach(id=>{const st=s[id]||{quizzedCount:0,errorCount:0,reviewCount:0};st.quizzedCount=(st.quizzedCount||0)+1;st.reviewCount=(st.reviewCount||0)+1;st.lastQuizzed=Date.now();if(!cr)st.errorCount=(st.errorCount||0)+1;s[id]=st});setKpStats(s)}
function updateVocabMastery(q,cr){if(!q.vId)return;const m=getMastery(),mv=m[q.vId]||{level:0,quizzedCount:0,errorCount:0,reviewCount:0,lastQuizzed:Date.now()};mv.quizzedCount=(mv.quizzedCount||0)+1;mv.reviewCount=(mv.reviewCount||0)+1;if(cr){if((mv.level||0)===0)mv.level=2;else mv.level=Math.min(5,(mv.level||0)+1)}else{mv.errorCount=(mv.errorCount||0)+1;mv.level=Math.max(0,(mv.level||0)-1)}mv.lastQuizzed=Date.now();m[q.vId]=mv;setMastery(m)}

function splitSentences(text){return String(text||'').match(/[^.!?。！？]+[.!?。！？]?/g)||[String(text||'')]}
function passageSentence(text,blankIndex){
  let seen=0
  for(const s of splitSentences(text)){
    const count=(s.match(/___/g)||[]).length
    if(count>0&&blankIndex>=seen&&blankIndex<seen+count)return s.trim()
    seen+=count
  }
  return String(text||'').trim()
}

function errorQuestionText(q,blankIndex){
  if(q.type==='passage')return passageSentence(q.text,blankIndex??0)
  if(q.type?.startsWith('vocab'))return cleanVocabQuestionText(q.qText||'')
  return q.sentence||q.qText||''
}

function passagePartByBlank(q,blankIndex){
  if(!Number.isInteger(blankIndex)||!q?.parts?.length)return null
  let start=0
  for(const part of q.parts){
    const indexes=part.indexes||[]
    const from=start,to=start+(part.blanks?.length||0);start=to
    if(indexes.length?indexes.includes(blankIndex):(blankIndex>=from&&blankIndex<to))return part
  }
  return null
}

function passagePartContext(q,blankIndex){
  const part=passagePartByBlank(q,blankIndex)
  if(!part)return{}
  const kpTitle=part.kpTitle||(part.kpId?KNOWLEDGE_POINTS.find(kp=>kp.id===part.kpId)?.title:'')||''
  return{type:part.type||'grammar',kpTitle,explanation:part.explanation||'',vId:part.vId||null}
}

function inferErrorContext(e){
  const ctx={...e}
  const qText=String(e.questionText||'')
  for(const p of getComprehensivePassages()){
    const sameTitle=ctx.questionTitle&&ctx.questionTitle===p.title
    const sameText=ctx.fullQuestionText&&ctx.fullQuestionText===p.text
    let blankIndex=Number.isInteger(ctx.blankIndex)?ctx.blankIndex:p.blanks.findIndex((b,i)=>b===e.correctAnswer&&passageSentence(p.text,i)===qText)
    if(blankIndex<0&&(sameTitle||sameText||ctx.questionKind==='passage'))blankIndex=p.blanks.findIndex(b=>b===e.correctAnswer)
    const sameSentence=blankIndex>=0&&passageSentence(p.text,blankIndex)===qText
    if((ctx.questionKind==='passage'||sameTitle||sameText||sameSentence)&&blankIndex>=0){
      const part=passagePartByBlank(p,blankIndex),pc=passagePartContext(p,blankIndex)
      ctx.questionTitle=p.title;ctx.questionKind='passage';ctx.blankIndex=blankIndex;ctx.questionText=passageSentence(p.text,blankIndex);ctx.fullCorrectAnswer='';ctx.kpTitle=pc.kpTitle||ctx.kpTitle;ctx.explanation=pc.explanation||ctx.explanation
      if(part?.indexes?.length)ctx.partIndexes=[...part.indexes]
      return ctx
    }
  }
  for(const kp of KNOWLEDGE_POINTS){
    const qs=kp.questions||{}
    for(const q of qs.multipleChoice||[]){
      if(q.sentence===qText||q.options?.includes(e.correctAnswer)){
        ctx.kpTitle=ctx.kpTitle||kp.title;ctx.questionKind=ctx.questionKind||'multiple_choice';ctx.questionText=q.sentence;ctx.explanation=ctx.explanation||q.explanation;return ctx
      }
    }
    for(const q of qs.fillBlank||[]){
      if(q.sentence===qText||q.answer===e.correctAnswer){
        ctx.kpTitle=ctx.kpTitle||kp.title;ctx.questionKind=ctx.questionKind||'fill_blank';ctx.questionText=q.sentence;ctx.explanation=ctx.explanation||q.explanation;return ctx
      }
    }
    for(const p of qs.passage||[]){
      const exact=p.text===qText
      const blankIndex=Number.isInteger(ctx.blankIndex)?ctx.blankIndex:p.blanks.findIndex(b=>b===e.correctAnswer)
      if(exact||blankIndex>=0){
        ctx.kpTitle=ctx.kpTitle||kp.title;ctx.questionTitle=ctx.questionTitle||p.title;ctx.questionKind='passage';ctx.blankIndex=blankIndex>=0?blankIndex:null;ctx.questionText=ctx.blankIndex!==null?passageSentence(p.text,ctx.blankIndex):qText;ctx.fullCorrectAnswer=ctx.fullCorrectAnswer||p.blanks.join(', ');ctx.explanation=ctx.explanation||p.explanation;return ctx
      }
    }
  }
  return ctx
}

function trackE(q,cr,sa,ca,blankIndex){
  if(cr||!sa||sa===''||sa===ca)return;const errs=getErrors(),qt=errorQuestionText(q,blankIndex)
  const pc=q.type==='passage'?passagePartContext(q,blankIndex):{}
  const tp=q.type==='passage'&&pc.type==='vocabulary'?'vocabulary':q.type?.startsWith('vocab')?'vocabulary':'grammar'
  const meta={kpTitle:pc.kpTitle||q.kpTitle||'',questionTitle:q.title||'',questionKind:q.type||'',blankIndex:blankIndex??null,fullQuestionText:q.text||q.sentence||q.qText||'',fullCorrectAnswer:q.type==='passage'?'':Array.isArray(q.blanks)?q.blanks.join(', '):'',explanation:pc.explanation||q.explanation||'',dailyTaskId:App.activeDailyTaskId||null}
  const ex=errs.find(e=>e.questionText===qt&&e.correctAnswer===ca&&!e.mastered)
  const now=Date.now()
  if(ex){ex.errorCount=(ex.errorCount||1)+1;ex.lastWrongAt=now;ex.wrongAnswer=sa;ex.reviewed=false;Object.assign(ex,meta)}else{errs.push({id:now+'-'+Math.random().toString(36).slice(2,8),type:tp,questionText:qt,correctAnswer:ca,wrongAnswer:sa,errorCount:1,lastWrongAt:now,reviewed:false,mastered:false,createdAt:now,...meta})}
  setErrors(errs)
}

function filterErrors(f,el){
  if(el){document.querySelectorAll('#error-filter .badge').forEach(x=>{x.className='badge bg-light text-dark rounded-pill px-3 py-2';x.style.cursor='pointer'})}
  el.className='badge bg-primary rounded-pill px-3 py-2';el.style.cursor='pointer'
  App.errorFilter=f;renderErrors()
}

function renderErrors(){
  let errors=getErrors().filter(e=>!e.mastered&&!e.reviewed);const f=App.errorFilter
  if(f==='grammar')errors=errors.filter(e=>e.type==='grammar')
  else if(f==='vocabulary')errors=errors.filter(e=>e.type==='vocabulary')
  else if(f==='unreviewed')errors=errors.filter(e=>!e.reviewed)
  if(App.pendingDailyTaskReviewId)errors=errors.filter(e=>e.dailyTaskId===App.pendingDailyTaskReviewId)
  errors.sort((a,b)=>b.lastWrongAt-a.lastWrongAt)
  const el=document.getElementById('error-list');if(!el)return
  if(errors.length===0){el.innerHTML='<div class="empty-state"><div class="icon"><i class="bi bi-emoji-smile fs-1"></i></div>没有错题，继续保持！</div>';return}
  el.innerHTML=errors.map(raw=>{
    const e=inferErrorContext(raw)
    const typeBadge=e.type==='grammar'?'<span class="badge tag-orange me-1">语法</span>':'<span class="badge tag-blue me-1">词汇</span>'
    const isPassageError=e.questionKind==='passage'
    const kp=e.kpTitle?'<div class="error-kp"><i class="bi bi-journal-text me-1"></i>'+esc(e.kpTitle)+'</div>':''
    const title=!isPassageError&&e.questionTitle?'<div class="error-title">'+esc(e.questionTitle)+(e.blankIndex!==null&&e.blankIndex!==undefined?' · 第 '+(e.blankIndex+1)+' 空':'')+'</div>':''
    const fullAnswer=!isPassageError&&e.fullCorrectAnswer?'<div class="full-answer"><i class="bi bi-list-check me-1"></i>完整答案：'+esc(e.fullCorrectAnswer)+'</div>':''
    const explain=e.explanation?'<div class="explain"><i class="bi bi-lightbulb me-1"></i>'+esc(e.explanation)+'</div>':''
    const displayQuestion=e.type==='vocabulary'?cleanVocabQuestionText(e.questionText||('围绕正确答案 '+e.correctAnswer+' 复习这道错题')):(e.questionText||('围绕正确答案 '+e.correctAnswer+' 复习这道错题'))
    return'<div class="error-item" data-id="'+e.id+'">'+kp+title+'<div class="q-text">'+typeBadge+esc(displayQuestion)+'</div><div class="answer-row"><span class="wrong"><i class="bi bi-x-lg me-1"></i>你的答案：'+esc(e.wrongAnswer)+'</span><span class="correct"><i class="bi bi-check-lg me-1"></i>正确答案：'+esc(e.correctAnswer)+'</span></div>'+fullAnswer+explain+'<div class="d-flex gap-2 flex-wrap"><button class="btn btn-sm btn-outline-warning err-btn-review" data-id="'+e.id+'"><i class="bi bi-eye me-1"></i>标记已复习</button></div></div>'
  }).join('')
  el.querySelectorAll('.error-item').forEach(item=>{item.onpointerdown=function(){clearTimeout(this.touchTimer);this.classList.add('touching');this.touchTimer=setTimeout(()=>this.classList.remove('touching'),520)}})
  el.querySelectorAll('.err-btn-review').forEach(b=>{b.onclick=function(e){e.stopPropagation();markReviewed(this.dataset.id)}})
  el.querySelectorAll('.err-btn-master').forEach(b=>{b.onclick=function(e){e.stopPropagation();markMastered(this.dataset.id)}})
}

function markReviewed(id){
  const errors=getErrors(),targets=errors.filter(x=>String(x.id)===String(id)&&!x.reviewed)
  if(targets.length===0)return
  targets.forEach(err=>{err.reviewed=true})
  setErrors(errors)
  renderErrors()
  if(App.pendingDailyTaskReviewId&&!dailyTaskReviewErrors(App.pendingDailyTaskReviewId).length){completeDailyTaskReview(App.pendingDailyTaskReviewId);App.pendingDailyTaskReviewId=null}
}

function markMastered(id){
  const errors=getErrors(),targets=errors.filter(x=>String(x.id)===String(id)&&!x.mastered)
  if(targets.length===0)return
  targets.forEach(err=>{err.mastered=true})
  setErrors(errors)
  const item=document.querySelector('.error-item[data-id="'+id+'"]')
  if(item){item.style.opacity='0';item.style.transform='translateX(20px)';item.style.transition='all .3s';setTimeout(()=>{item.remove();if(document.querySelectorAll('.error-item').length===0)document.getElementById('error-list').innerHTML='<div class="empty-state"><div class="icon"><i class="bi bi-emoji-smile fs-1"></i></div>没有错题，继续保持！</div>'},300)}
  else renderErrors()
}

function renderStats(){
  const records=getQuizRecords(),log=getStudyLog()
  const tQ=records.reduce((s,r)=>s+r.total,0),tC=records.reduce((s,r)=>s+r.correct,0),tS=Object.values(log).reduce((s,v)=>s+v,0)
  document.getElementById('s-total-q').textContent=tQ
  document.getElementById('s-accuracy').textContent=(tQ>0?Math.round(tC/tQ*100):0)+'%'
  document.getElementById('s-total-time').textContent=Math.round(tS/3600*10)/10+'h'
  document.getElementById('s-days').textContent=Object.keys(log).length
  renderTrendChart('stats-trend-chart',7)
  const kpStats=getKpStats(),vocabMastery=getMastery()
  let html=''

  function acc(q,e){return q>0?Math.round((q-e)/q*100)+'%':'-'}
  function masteryTag(e,q,type){
    if(q===0)return''
    const r=(q-e)/q
    if(r>=.9)return type==='vocabulary'?'<button class="stats-mastery text-success stats-toggle" onclick="showVocabMastery(\'mastered\')">★ 熟练</button>':'<span class="stats-mastery text-success">★ 熟练</span>'
    if(r>=.7)return type==='vocabulary'?'<button class="stats-mastery text-warning stats-toggle" onclick="showVocabMastery(\'learning\')">◇ 一般</button>':'<span class="stats-mastery text-warning">◇ 一般</span>'
    return type==='vocabulary'?'<button class="stats-mastery text-danger stats-toggle" onclick="showVocabMastery(\'weak\')">△ 薄弱</button>':'<span class="stats-mastery text-danger">△ 薄弱</span>'
  }
  function rowClass(e,q){return e>0?' stats-row-err':''}
  function cellClass(e){return e>0?' class="stats-has-error"':''}
  function sumKpIds(ids){let t=0,e=0;ids.forEach(id=>{const st=kpStats[id];if(st){t+=st.quizzedCount||0;e+=st.errorCount||0}});return{t,e}}
  function sumRecordKind(kind){
    let total=0,correct=0,hasKind=false
    records.filter(r=>r.type==='vocabulary').forEach(r=>{
      const st=r.kindStats&&r.kindStats[kind]
      if(st){hasKind=true;total+=st.total||0;correct+=st.correct||0}
    })
    return{total,err:total-correct,hasKind}
  }

  // === 语法大类 ===
  const grammarTotal=sumKpIds(ACTIVE_GRAMMAR_POINT_IDS)
  html+='<tr class="table-active fw-bold"><td><button class="stats-toggle collapsed" data-group="grammar" onclick="toggleStatsGroup(this)"><span class="stats-arrow">▾</span>语法</button></td><td>'+grammarTotal.t+'</td><td'+cellClass(grammarTotal.e)+'>'+grammarTotal.e+'</td><td>'+acc(grammarTotal.t,grammarTotal.e)+'</td><td></td></tr>'
  const gRows=[...WORD_CLASS_GROUPS,...SYNTAX_GROUPS].map(group=>{const s=sumKpIds(group.ids);return{title:group.title,t:s.t,e:s.e}}).sort((a,b)=>b.e-a.e)
  gRows.forEach(r=>{html+='<tr class="stats-sub stats-sub-grammar collapsed'+rowClass(r.e,r.t)+'"><td class="ps-3">'+esc(r.title)+'</td><td>'+r.t+'</td><td'+cellClass(r.e)+'>'+r.e+'</td><td>'+acc(r.t,r.e)+'</td><td>'+masteryTag(r.e,r.t)+'</td></tr>'})

  // === 词汇大类：词库层级 ===
  const vAll=VOCABULARY,vocabRecords=records.filter(r=>r.type==='vocabulary')
  const recTotal=vocabRecords.reduce((s,r)=>s+(r.total||0),0),recCorrect=vocabRecords.reduce((s,r)=>s+(r.correct||0),0)
  let masteryTotal=0,masteryErr=0
  vAll.forEach(v=>{const m=vocabMastery[v.id]||{};masteryTotal+=m.quizzedCount||0;masteryErr+=m.errorCount||0})
  const vTotal=recTotal||masteryTotal,vErr=recTotal?recTotal-recCorrect:masteryErr
  html+='<tr class="table-active fw-bold"><td><button class="stats-toggle collapsed" data-group="vocab" onclick="toggleStatsGroup(this)"><span class="stats-arrow">▾</span>词汇</button></td><td>'+vTotal+'</td><td'+cellClass(vErr)+'>'+vErr+'</td><td>'+acc(vTotal,vErr)+'</td><td></td></tr>'
  const vocabLevelOrder={basic:1,secondary:2,junior:3,supplemental:4}
  const vocabLevels=new Map()
  vAll.forEach(v=>{
    const level=vocabStatsLevel(v)
    if(!vocabLevels.has(level.key))vocabLevels.set(level.key,{key:level.key,label:level.label,t:0,e:0})
    const row=vocabLevels.get(level.key),m=vocabMastery[v.id]||{}
    row.t+=m.quizzedCount||0;row.e+=m.errorCount||0
  })
  ;[...vocabLevels.values()].sort((a,b)=>(vocabLevelOrder[a.key]||9)-(vocabLevelOrder[b.key]||9)).forEach(r=>{
    html+='<tr class="stats-sub stats-sub-vocab stats-sub-vocab-main collapsed'+rowClass(r.e,r.t)+'"><td class="ps-3">'+esc(r.label)+'</td><td>'+r.t+'</td><td'+cellClass(r.e)+'>'+r.e+'</td><td>'+acc(r.t,r.e)+'</td><td>'+masteryTag(r.e,r.t,'vocabulary')+'</td></tr>'
  })

  document.getElementById('category-stats-body').innerHTML=html
}

function toggleSrcGroup(btn){
  const icon=btn.querySelector('.bi-chevron-right')
  const container=btn.nextElementSibling
  if(!container)return
  const collapsed=container.style.display==='none'
  document.querySelectorAll('#source-options .source-grid').forEach(grid=>{
    if(grid===container)return
    grid.style.display='none'
    const otherIcon=grid.previousElementSibling?.querySelector('.bi-chevron-right')
    if(otherIcon)otherIcon.style.transform='rotate(0deg)'
  })
  container.style.display=collapsed?'':'none'
  if(icon)icon.style.transform=collapsed?'rotate(90deg)':'rotate(0deg)'
}

function toggleStatsGroup(btn){
  const group=btn.dataset.group
  const rows=document.querySelectorAll('.stats-sub-'+group)
  if(rows.length===0)return
  const collapsed=rows[0].classList.contains('collapsed')
  rows.forEach(r=>r.classList.toggle('collapsed'))
  btn.classList.toggle('collapsed',!collapsed)
}

function syncAppViewportHeight(){
  const vv=window.visualViewport
  const raw=vv?.height||window.innerHeight||document.documentElement.clientHeight||screen.height
  const height=Math.max(320,Math.floor(raw))
  const top=Math.max(0,Math.floor(vv?.offsetTop||0))
  document.documentElement.style.setProperty('--app-height',height+'px')
  document.documentElement.style.setProperty('--app-vv-top',top+'px')
  requestAnimationFrame(()=>{
    const tab=document.querySelector('.tab-bar')
    if(tab)document.documentElement.style.setProperty('--tab-bar-height',Math.ceil(tab.getBoundingClientRect().height)+'px')
  })
}

function bindAppViewportHeight(){
  syncAppViewportHeight()
  ;[60,180,420,900,1600,2600,4000].forEach(delay=>setTimeout(syncAppViewportHeight,delay))
  window.addEventListener('resize',syncAppViewportHeight,{passive:true})
  window.addEventListener('orientationchange',()=>setTimeout(syncAppViewportHeight,80),{passive:true})
  if(window.visualViewport){
    window.visualViewport.addEventListener('resize',syncAppViewportHeight,{passive:true})
    window.visualViewport.addEventListener('scroll',syncAppViewportHeight,{passive:true})
  }
}

function setVocabLetterFilter(letter){
  App.vocabFilters.letter=!letter||App.vocabFilters.letter===letter?null:letter
  App.vocabView='words'
  renderVocabulary()
}

function updateUserBadge(){
  const badge=document.getElementById('user-badge')
  if(!badge)return
  if(typeof currentUser!=='undefined'&&currentUser){
    const label=currentUser.displayName||currentUser.username
    badge.innerHTML='<i class="bi bi-person-circle me-1"></i>'+esc(label)
    badge.style.display='inline-flex'
    const adminSec=document.getElementById('admin-overview')
    if(adminSec)adminSec.classList.toggle('d-none',typeof isAdmin==='function'?!isAdmin():true)
  }else{
    badge.style.display='none'
  }
}

function renderAdminOverview(){
  if(typeof USERS==='undefined'||typeof isAdmin==='undefined'||!isAdmin())return
  const container=document.getElementById('admin-overview-content')
  if(!container)return
  const students=USERS.filter(u=>u.role==='student')
  if(!students.length){container.innerHTML='<p class="text-secondary small">暂无学生账号</p>';return}
  let html=''
  students.forEach(s=>{
    const getData=(key,def)=>{
      try{const v=localStorage.getItem(userStorageKey(s.username,key));return v?JSON.parse(v):def}catch{return def}
    }
    const records=getData('el_quiz_records',[])
    const log=getData('el_study_log',{})
    const errors=getData('el_error_items',[])
    const dailyTasks=getData('el_daily_tasks',{})
    const now=new Date()
    const tKey=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')
    const todayRecords=records.filter(r=>r.date===tKey)
    const todayQ=todayRecords.reduce((s,r)=>s+r.total,0)
    const totalQ=records.reduce((s,r)=>s+r.total,0),totalC=records.reduce((s,r)=>s+r.correct,0)
    const acc=totalQ>0?Math.round(totalC/totalQ*100):0
    const studyMin=Math.round((Object.values(log).reduce((s,v)=>s+v,0))/60)
    const unmastered=errors.filter(e=>!e.mastered&&!e.reviewed).length
    const taskDone=Object.values(dailyTasks).some(t=>t.completed&&t.date===tKey)
    const doneClass=taskDone?'done':''
    const accClass=acc>=80?'good':acc>=60?'ok':'bad'
    html+='<div class="admin-student-item"><div class="admin-student-name"><i class="bi bi-person-circle me-1"></i>'+esc(s.displayName||s.username)+'</div><div class="admin-student-stats"><span class="admin-stat '+doneClass+'">'+(taskDone?'已做':'未做')+'</span><span class="admin-stat">'+totalQ+'题</span><span class="admin-stat '+accClass+'">'+acc+'%</span><span class="admin-stat">'+studyMin+'分</span><span class="admin-stat'+(unmastered>0?' warn':'')+'">错'+unmastered+'</span></div></div>'
  })
  container.innerHTML=html||'<p class="text-secondary small">暂无学生数据</p>'
}

function initApp(){
  // 检查登录状态
  if(typeof isLoggedIn==='function'&&!isLoggedIn()){
    if(typeof showLogin==='function')showLogin()
    setTimeout(()=>document.getElementById('login-username')?.focus(),100)
    return
  }
  updateUserBadge()
  bindAppViewportHeight();ensureStorageSchema();migrateOldData();renderHome();renderIrregularVerbs();logStudyStart();window.addEventListener('beforeunload',logStudyStop)
  const taking=document.getElementById('quiz-taking');if(taking)taking.addEventListener('click',handleQuizBlankClick)
  // 冻结工具栏阴影：监听各页面内部滚动
  const stickyPairs=[['page-home','home-toolbar'],['page-knowledge','knowledge-toolbar'],['page-vocabulary','vocab-toolbar'],['page-quiz','quiz-toolbar'],['page-stats','stats-toolbar'],['page-errors','errors-toolbar']]
  stickyPairs.forEach(([pageId,toolbarId])=>{
    const page=document.getElementById(pageId);let tick=0
    if(!page)return
    page.addEventListener('scroll',()=>{
      cancelAnimationFrame(tick)
      tick=requestAnimationFrame(()=>{
        const el=document.getElementById(toolbarId)
        if(el)el.classList.toggle('stuck',page.scrollTop>0)
      })
    },{passive:true})
  })
  // 管理员概览
  if(typeof isAdmin==='function'&&isAdmin())renderAdminOverview()
}
document.addEventListener('DOMContentLoaded',initApp)