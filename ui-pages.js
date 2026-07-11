// ======================================================================
// 🖥️ 页面渲染模块 — 首页/语法/词汇/统计/管理
// ======================================================================

function switchTab(tab){
  if(App.currentTab==='quiz'&&tab!=='quiz'&&App.questions.length>0){exitQuiz(false)}
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
function refreshCurrentTab(){
  if(App.currentTab==='home')renderHome()
  else if(App.currentTab==='knowledge')renderKnowledge()
  else if(App.currentTab==='vocabulary')renderVocabulary()
  else if(App.currentTab==='quiz')resetQuizUI()
  else if(App.currentTab==='stats')renderStats()
  else if(App.currentTab==='errors')renderErrors()
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
function renderKnowledge(){
  const toolbar=document.getElementById('knowledge-toolbar');if(toolbar)document.documentElement.style.setProperty('--grammar-toolbar-height',toolbar.getBoundingClientRect().height+'px')
  const el=document.getElementById('category-list')
  el.innerHTML=CATEGORIES.map(c=>'<span class="cat" data-cat="'+c.id+'" onclick="filterKnowledge('+c.id+',this)">'+c.name+'</span>').join('')
  const cats=el.querySelectorAll('.cat');if(cats.length>0)cats[0].classList.add('active')
  filterKnowledge(CATEGORIES[0]?.id||0)
}
function renderKnowledgePointCard(kp){
  const meta=['<span class="diff diff-'+kp.difficulty+'">'+['','简单','中等','困难'][kp.difficulty]+'</span>']
  meta.push('<span>'+(kp.examples?.length||0)+'个例句</span>')
  return '<div class="kp-card" onclick="toggleKpDetail('+kp.id+')"><div class="title">'+kp.title+'</div><div class="meta">'+meta.join('')+'</div><div class="kp-detail" id="kp-detail-'+kp.id+'"><div class="content">'+(typeof renderKpContent==='function'?renderKpContent(kp.content):kp.content.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>'))+'</div>'+(kp.examples||[]).map(ex=>'<div class="example"><div class="en">'+esc(ex.en)+'</div><div class="cn">'+esc(ex.cn)+'</div></div>').join('')+'</div></div>'
}
function renderKnowledgeGroup(catId,g){
  const items=g.ids.map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)).filter(Boolean)
  if(!items.length)return''
  const groupId='kg-'+catId+'-'+g.key
  return '<section class="kp-group" data-group="'+groupId+'"><div class="kp-group-head" onclick="toggleKnowledgeGroup(\''+groupId+'\')"><i class="bi bi-chevron-right kp-group-chevron"></i><div class="kp-group-title">'+g.title+'<span class="kp-group-count">（'+items.length+'个知识点）</span></div><div class="kp-group-desc">'+g.desc+'</div></div><div class="kp-group-body">'+items.map(renderKnowledgePointCard).join('')+'</div></section>'
}
function filterKnowledge(catId,el){
  if(el){document.querySelectorAll('.category-list .cat').forEach(c=>c.classList.remove('active'));el.classList.add('active')}
  document.querySelectorAll('.grammar-ref-tab-inline').forEach(b=>b.classList.remove('active'))
  document.querySelectorAll('.grammar-ref-section').forEach(s=>s.classList.add('d-none'))
  document.getElementById('kp-list')?.classList.remove('d-none')
  // Render grammar ref tabs for this category
  const refs=GRAMMAR_REFS_BY_CATEGORY[catId]||[]
  document.getElementById('grammar-ref-tabs').innerHTML=refs.map(r=>'<span class="grammar-ref-tab-inline" data-ref="'+r.ref+'" onclick="switchGrammarRef(\''+r.ref+'\',this)">'+r.label+'</span>').join('')
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
  if(v.pos)tags.push('<span class="badge tag-blue">'+esc(v.pos)+(v.posExtra?' / '+esc(v.posExtra):'')+'</span>')
  tags.push('<span class="badge '+vocabStageClass(v)+'">'+esc(vocabStageLabel(v))+'</span>')
  if(v?.isKETVocabulary && v?.dupInVocab){
    const dupCls=v.dupLevel==='小学'?'tag-stage-secondary':v.dupLevel==='补充'?'tag-stage-supplemental':'tag-stage-junior'
    tags.push('<span class="badge '+dupCls+'">'+esc(v.dupLevel)+'</span>')
  }
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
  document.getElementById('special-vocab-section')?.classList.toggle('d-none',!SPECIAL_VOCAB_TABLES[App.vocabView])
  if(SPECIAL_VOCAB_TABLES[App.vocabView])renderSpecialVocabTable(App.vocabView)
}
function switchVocabView(view){applyVocabView(view&&view!=='words'&&App.vocabView!==view?view:'words')}

// ===== 语法速查表 =====
function switchGrammarRef(ref, el){
  if(el&&el.classList.contains('active')){
    document.querySelectorAll('.grammar-ref-tab-inline').forEach(b=>b.classList.remove('active'))
    document.querySelectorAll('.grammar-ref-section').forEach(s=>s.classList.add('d-none'))
    document.getElementById('kp-list')?.classList.remove('d-none')
    return
  }
  document.querySelectorAll('.grammar-ref-tab-inline').forEach(b=>b.classList.toggle('active',b.dataset.ref===ref))
  document.querySelectorAll('.grammar-ref-section').forEach(s=>s.classList.toggle('d-none',s.id!=='ref-'+ref))
  document.getElementById('kp-list')?.classList.toggle('d-none',true)
  if(ref==='irregular-verbs')renderIrregularVerbs()
}
function renderAdjComp(){
  const tbody=document.getElementById('adj-comp-body');if(!tbody)return
  tbody.innerHTML=ADJECTIVE_COMPARISON.map(r=>{
    const cls=r.type==='irregular'?'grammar-ref-row-irregular':'grammar-ref-row-rule'
    return '<tr class="'+cls+'"><td>'+(r.type==='irregular'?'不规则':'规则')+'</td><td>'+esc(r.pattern)+'</td><td>'+esc(r.base)+'</td><td>'+esc(r.comp)+'</td><td>'+esc(r.super)+'</td></tr>'
  }).join('')
}
function renderAdvComp(){
  const tbody=document.getElementById('adv-comp-body');if(!tbody)return
  tbody.innerHTML=ADVERB_COMPARISON.map(r=>{
    const cls=r.type==='irregular'?'grammar-ref-row-irregular':'grammar-ref-row-rule'
    return '<tr class="'+cls+'"><td>'+(r.type==='irregular'?'不规则':'规则')+'</td><td>'+esc(r.pattern)+'</td><td>'+esc(r.base)+'</td><td>'+esc(r.comp)+'</td><td>'+esc(r.super)+'</td></tr>'
  }).join('')
}
function renderPronounTable(){
  const tbody=document.getElementById('pronoun-body');if(!tbody)return
  tbody.innerHTML=PRONOUN_TABLE.map(r=>'<tr><td>'+esc(r.person)+'</td><td>'+esc(r.nom)+'</td><td>'+esc(r.acc)+'</td><td>'+esc(r.adj_poss)+'</td><td>'+esc(r.noun_poss)+'</td><td>'+esc(r.reflexive)+'</td></tr>').join('')
}
function renderIndefinitePronouns(){
  const tbody=document.getElementById('indefinite-pronoun-body');if(!tbody)return
  tbody.innerHTML=INDEFINITE_PRONOUNS.map(r=>'<tr><td>'+esc(r.cat)+'</td><td>'+esc(r.affirm)+'</td><td>'+esc(r.neg)+'</td><td>'+esc(r.cnt)+'</td><td>'+esc(r.uncnt)+'</td><td>'+esc(r.sgl)+'</td><td>'+esc(r.pl)+'</td></tr>').join('')
}

function handleVocabSearch(){App.vocabView='words';App.vocabFilters.letter=null;renderVocabulary()}
function renderVocabulary(){
  applyVocabView(App.vocabView||'words')
    // Render level tabs with counts
  const levelTabContainer=document.getElementById('vocab-level-tabs')
  if(levelTabContainer){
    function levelCount(key){
      if(key==='ket')return(KET_VOCABULARY||[]).length
      return VOCABULARY.filter(function(v){return vocabStatsLevel(v).key===key}).length
    }
    var allWords={};[].concat(VOCABULARY,(KET_VOCABULARY||[])).forEach(function(v){allWords[v.word.toLowerCase()]=true})
    const allCount=Object.keys(allWords).length
    const levels=[{key:'secondary',label:'小学'},{key:'junior',label:'初中'},{key:'ket',label:'KET'}]
    const flt=App.vocabLevelFilter||[]
    levelTabContainer.innerHTML='<span class="vocab-level-tab'+(flt.length===0?' active':'')+'" onclick="switchVocabLevel(\'\')">全部 ('+allCount+')</span>'+
      levels.map(function(l){return '<span class="vocab-level-tab'+(flt.includes(l.key)?' active':'')+'" onclick="switchVocabLevel(\''+l.key+'\')">'+l.label+' ('+levelCount(l.key)+')</span>'}).join('')
  }
  const search=document.getElementById('vocab-search').value.trim().toLowerCase()
  const mastery=getMastery()
  const masteryFilter=App.vocabFilters.mastery
  const letterFilter=App.vocabFilters.letter
  let vocabSource=[...VOCABULARY]
  const flt=App.vocabLevelFilter||[]
  if(flt.length>0){
    if(flt.includes('ket'))vocabSource=vocabSource.concat(KET_VOCABULARY||[])
    vocabSource=vocabSource.filter(v=>flt.includes(vocabStatsLevel(v).key)||(flt.includes('ket')&&v.isKETVocabulary))
  }else{
    vocabSource=vocabSource.concat(KET_VOCABULARY||[])
  }
  let baseList=vocabSource.filter(v=>{
    if(search)return v.word.toLowerCase().includes(search)||String(v.translation||'').includes(search)||String(v.sourceRaw||'').toLowerCase().includes(search)
    return true
  })
  // Dedup by word for stats
  var seenWord=new Set()
  baseList=baseList.filter(function(v){var w=v.word.toLowerCase();if(seenWord.has(w))return false;seenWord.add(w);return true})
  let mTotal=0,mUnquizzed=0,mMastered=0,mLearning=0,mWeak=0
  baseList.forEach(v=>{
    const bucket=vocabMasteryBucket(mastery[v.id])
    mTotal++
    if(bucket==='unquizzed')mUnquizzed++
    else if(bucket==='mastered')mMastered++
    else if(bucket==='learning')mLearning++
    else if(bucket==='weak')mWeak++
  })
  let list=baseList.filter(v=>{
    if(masteryFilter!=='all'&&vocabMasteryBucket(mastery[v.id])!==masteryFilter)return false
    if(letterFilter&&v.word[0].toUpperCase()!==letterFilter)return false
    return true
  })
  const totalText=document.getElementById('vocab-total-text');if(totalText)totalText.textContent='共 '+list.length+' 个'
  document.getElementById('vocab-stats').innerHTML=`<span class="stat-chip unquizzed${masteryFilter==='unquizzed'?' active':''}" data-mastery="unquizzed" onclick="filterByMastery('unquizzed',this)" title="quizzedCount===0">未学习 ${mUnquizzed}</span><span class="stat-chip mastered${masteryFilter==='mastered'?' active':''}" data-mastery="mastered" onclick="filterByMastery('mastered',this)" title="level≥4">已掌握 ${mMastered}</span><span class="stat-chip learning${masteryFilter==='learning'?' active':''}" data-mastery="learning" onclick="filterByMastery('learning',this)" title="level 2-3">学习中 ${mLearning}</span><span class="stat-chip weak${masteryFilter==='weak'?' active':''}" data-mastery="weak" onclick="filterByMastery('weak',this)" title="quizzedCount>0且level≤1">薄弱 ${mWeak}</span>`
  const sample=VOCABULARY.slice(0,5).map(v=>{const mv=mastery[v.id];return v.word+': '+(mv?JSON.stringify(mv):'null')}).join(', ')
  if(DEBUG)console.log('vocab stats: total='+mTotal+' unquizzed='+mUnquizzed+' mastered='+mMastered+' learning='+mLearning+' weak='+mWeak+' | sample:',sample)
  const baseGroups={}
  baseList.forEach(v=>{let l=v.word[0].toUpperCase();if(!/^[A-Z]$/.test(l))l='#';if(!baseGroups[l])baseGroups[l]=[];baseGroups[l].push(v)})
  document.getElementById('vocab-letter-nav').innerHTML='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l=>{
    const has=baseGroups[l]?'':' empty'
    const active=letterFilter===l?' active':''
    return '<span class="letter-btn'+has+active+'" onclick="setVocabLetterFilter(\''+l+'\')">'+l+'</span>'
  }).join('')
  const groups={}
  list.forEach(v=>{let l=v.word[0].toUpperCase();if(!/^[A-Z]$/.test(l))l='#';if(!groups[l])groups[l]=[];groups[l].push(v)})
  const sortedLetters=Object.keys(groups).sort()
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
function switchVocabLevel(key){
  if(!key){App.vocabLevelFilter=[];App.vocabView='words';renderVocabulary();return}
  if(!App.vocabLevelFilter)App.vocabLevelFilter=[]
  const idx=App.vocabLevelFilter.indexOf(key)
  if(idx>=0)App.vocabLevelFilter.splice(idx,1)
  else App.vocabLevelFilter.push(key)
  App.vocabView='words'
  renderVocabulary()
}
function setVocabLetterFilter(letter){
  App.vocabFilters.letter=!letter||App.vocabFilters.letter===letter?null:letter
  App.vocabView='words'
  renderVocabulary()
}
function renderTrendChart(eId,d){
  const records=getQuizRecords(),el=document.getElementById(eId);if(!el)return
  const dates=[];for(let i=d-1;i>=0;i--){const d2=new Date();d2.setDate(d2.getDate()-i);dates.push(localDateKey(d2))}
  const data=dates.map(date=>{const r=records.filter(x=>x.date===date);const t=r.reduce((s,x)=>s+x.total,0),c=r.reduce((s,x)=>s+x.correct,0);return t>0?Math.round(c/t*100):0})
  const mx=Math.max(...data,100)
  el.innerHTML=dates.map((d,i)=>{const h=data[i]>0?Math.max(data[i]/mx*80,4):2;const cls=data[i]>0?'bar':'bar empty';const label=data[i]>0?data[i]+'%':'';return '<div class="col"><div class="chart-label">'+label+'</div><div class="'+cls+'" style="height:'+h+'px"></div><div class="day" style="font-size:.6rem;color:#adb5bd;margin-top:.25rem">'+d.slice(5)+'</div></div>'}).join('')
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
  const grammarTotal=sumKpIds(ACTIVE_GRAMMAR_POINT_IDS)
  html+='<tr class="table-active fw-bold"><td><button class="stats-toggle collapsed" data-group="grammar" onclick="toggleStatsGroup(this)"><span class="stats-arrow">▾</span>语法</button></td><td>'+grammarTotal.t+'</td><td'+cellClass(grammarTotal.e)+'>'+grammarTotal.e+'</td><td>'+acc(grammarTotal.t,grammarTotal.e)+'</td><td></td></tr>'
  const gRows=[...WORD_CLASS_GROUPS,...SYNTAX_GROUPS].map(group=>{const s=sumKpIds(group.ids);return{title:group.title,t:s.t,e:s.e}}).sort((a,b)=>b.e-a.e)
  gRows.forEach(r=>{html+='<tr class="stats-sub stats-sub-grammar collapsed'+rowClass(r.e,r.t)+'"><td class="ps-3">'+esc(r.title)+'</td><td>'+r.t+'</td><td'+cellClass(r.e)+'>'+r.e+'</td><td>'+acc(r.t,r.e)+'</td><td>'+masteryTag(r.e,r.t)+'</td></tr>'})
  function sumKindByLevel(lvl,kind){
    let t=0,c=0
    records.filter(r=>r.type==='vocabulary').forEach(r=>{
      const st=r.kindStats&&r.kindStats[lvl+'|'+kind]
      if(st){t+=st.total||0;c+=st.correct||0}
    })
    return{total:t,err:t-c}
  }
  const vAll=[...VOCABULARY,...(KET_VOCABULARY||[])]
  const kindTypes=[{key:'vocab_regular',label:'选择题'},{key:'vocab_dictation',label:'默写题'},{key:'vocab_irregular',label:'不规则动词'}]
  const vocabLevelOrder={basic:1,secondary:2,ket:3,junior:4,supplemental:5}
  // Compute level totals from kindStats
  const vocabLevels=new Map()
  ;[...vAll,...(KET_VOCABULARY||[])].forEach(v=>{
    const level=vocabStatsLevel(v)
    if(!vocabLevels.has(level.key))vocabLevels.set(level.key,{key:level.key,label:level.label,vT:0,vE:0})
  })
  ;[...vocabLevels.keys()].forEach(key=>{
    const row=vocabLevels.get(key)
    kindTypes.forEach(k=>{const ks=sumKindByLevel(key,k.key);row.vT+=ks.total||0;row.vE+=ks.err||0})
  })
  // Header row = sum of all level rows
  var vTotal=0,vErr=0
  vocabLevels.forEach(function(r){vTotal+=r.vT;vErr+=r.vE})
  html+='<tr class="table-active fw-bold"><td><button class="stats-toggle" data-group="vocab" onclick="toggleStatsGroup(this)"><span class="stats-arrow">▾</span>词汇</button></td><td>'+vTotal+'</td><td'+cellClass(vErr)+'>'+vErr+'</td><td>'+acc(vTotal,vErr)+'</td><td></td></tr>'
  ;[...vocabLevels.values()].sort((a,b)=>(vocabLevelOrder[a.key]||9)-(vocabLevelOrder[b.key]||9)).forEach(r=>{
    html+='<tr class="stats-sub stats-sub-vocab'+rowClass(r.vE,r.vT)+'"><td class="ps-3"><button class="stats-toggle collapsed" data-group="vocab-'+r.key+'" onclick="toggleStatsGroup(this)" style="background:none;border:none;font-weight:inherit;color:inherit;padding:0;width:100%;text-align:left"><span class="stats-arrow">▾</span>'+esc(r.label)+'</button><span class="ps-1"></span></td><td>'+r.vT+'</td><td'+cellClass(r.vE)+'>'+r.vE+'</td><td>'+acc(r.vT,r.vE)+'</td><td>'+masteryTag(r.vE,r.vT,'vocabulary')+'</td></tr>'
    kindTypes.forEach(k=>{
      const ks=sumKindByLevel(r.key,k.key)
      html+='<tr class="stats-sub stats-sub-vocab-'+r.key+' collapsed'+rowClass(ks.err,ks.total)+'"><td class="ps-4 small text-secondary">'+esc(k.label)+'</td><td>'+ks.total+'</td><td'+cellClass(ks.err)+'>'+ks.err+'</td><td>'+acc(ks.total,ks.err)+'</td><td></td></tr>'
    })
  })
  document.getElementById('category-stats-body').innerHTML=html
}
function toggleStatsGroup(btn){
  const group=btn.dataset.group
  const rows=document.querySelectorAll('.stats-sub-'+group)
  if(rows.length===0)return
  const collapsed=rows[0].classList.contains('collapsed')
  rows.forEach(r=>r.classList.toggle('collapsed'))
  btn.classList.toggle('collapsed',!collapsed)
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
