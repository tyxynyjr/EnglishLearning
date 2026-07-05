// ======================================================================
// 📅 每日任务模块
// ======================================================================

function dailyTaskConfig(level){return level==='primary'?{label:'小学',grammarCount:2,vocabCount:10,grammarTest:4,vocabTest:10}:{label:'初中',grammarCount:3,vocabCount:20,grammarTest:6,vocabTest:20}}
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
function dailyTaskPassageQuestion(task){
  const pool=QUESTIONS?.passage||[]
  if(pool.length===0)return[]
  const preferred=task.level==='primary'?pool.filter(p=>(p.blanks||[]).length===5):pool
  const items=preferred.length?preferred:pool
  const seed=hashString(task.id+'-passage')
  const p=items[seed%items.length]
  const matchedBlanks=p.blanks?.filter(b=>b.kpIds?.length)||[]
  const kpIds=[...new Set(matchedBlanks.flatMap(b=>b.kpIds))]
  const kpTitles=kpIds.map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)?.title).filter(Boolean)
  const parts=p.blanks.map((b,i)=>({type:'grammar',kpId:b.kpIds?.[0]||null,vId:null,kpTitle:(b.kpIds?.length?(KNOWLEDGE_POINTS.find(k=>k.id===b.kpIds[0])?.title||''):''),indexes:[i],blanks:[b.answer],explanation:b.explanation||''}))
  return[{type:'passage',kpId:kpIds[0]||null,kpIds,kpTitle:kpTitles[0]||'综合练习',kpTitles,title:p.title,text:p.text,blanks:p.blanks.map(b=>b.answer),parts,explanation:matchedBlanks.map(b=>b.explanation).filter(Boolean).join('；')}]
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
function dailyTaskReviewErrors(taskId){return getErrors().filter(e=>e.dailyTaskId===taskId&&!e.reviewed&&!e.mastered)}
function markDailyTaskStudy(taskId){
  const tasks=getDailyTasks(),task=tasks[taskId];if(!task){showToast('未找到今日任务');return}
  task.learningCheckedAt=task.learningCheckedAt||Date.now();setDailyTasks(tasks);renderDailyTaskBar();renderDailyTaskStudy(task);showToast('学习打卡已完成')
}
function renderKpContent(content){
  if(!content)return''
  var knownLabels=['概念','结构','标志词','注意']
  return content.split('\n\n').filter(Boolean).map(function(section){
    var lines=section.split('\n'),first=lines[0],colon=first.indexOf('：')
    if(colon>0&&colon<20){
      var label=first.substring(0,colon)
      if(knownLabels.indexOf(label)>=0){
        var restFirst=first.substring(colon+1)
        var body=[restFirst].concat(lines.slice(1)).filter(Boolean)
        var extra=label==='注意'?' is-notes':label==='结构'||label==='标志词'?' is-signal':''
        return'<div class="kp-section"><span class="kp-section-label'+extra+'">'+esc(label+'：')+'</span><span class="kp-section-body">'+body.map(function(l){return esc(l)}).join('<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')+'</span></div>'
      }
    }
    return'<div class="kp-section kp-section-plain">'+lines.map(function(l){return esc(l)}).join('<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')+'</div>'
  }).join('')
}
function renderDailyTaskStudy(task){
  const box=document.getElementById('daily-task-study');if(!box)return
  if(!KNOWLEDGE_POINTS.length||!VOCABULARY.length){box.innerHTML='<div class="text-center py-5"><p class="text-secondary">数据加载中...</p></div>';box.classList.remove('d-none');return}
  const grammar=task.grammarIds.map(id=>KNOWLEDGE_POINTS.find(k=>k.id===id)).filter(Boolean)
  const vocab=task.vocabIds.map(id=>VOCABULARY.find(v=>v.id===id)).filter(Boolean)
  const grammarHtml=grammar.length?grammar.map(k=>'<div class="daily-study-item"><div class="daily-study-item-title">'+esc(k.title)+'</div><div class="daily-study-item-desc">'+renderKpContent(k.content||'')+'</div>'+((k.examples||[])[0]?'<div class="daily-study-example">例：'+esc(k.examples[0].en)+'｜'+esc(k.examples[0].cn)+'</div>':'')+'</div>').join(''):'<div class="daily-study-item-desc text-secondary">暂无语法内容</div>'
  const vocabHtml=vocab.length?vocab.map(v=>'<div class="daily-study-item"><div class="daily-study-item-title">'+esc(v.word)+(v.pos?' <span class="text-secondary small">('+esc(v.pos)+(v.posExtra?' / '+esc(v.posExtra):'')+')</span>':'')+(v.phonetic?' <span class="phonetic">'+esc(v.phonetic)+'</span>':'')+' | '+esc(v.translation||'')+'</div><div class="daily-study-example">'+(v.examples?.[0]?'例：'+esc(v.examples[0].en)+'｜'+esc(v.examples[0].cn):'')+'</div></div>').join(''):'<div class="daily-study-item-desc text-secondary">暂无词汇内容</div>'
  const studyButton='<button class="btn btn-success fw-bold rounded-3" onclick="markDailyTaskStudy(\''+task.id+'\')">1-'+(task.learningCheckedAt?'已完成学习打卡':'完成学习打卡')+'</button>'
  const testButton=task.testSubmittedAt?'<button class="btn btn-primary fw-bold rounded-3" disabled>2-任务测试已完成</button>':'<button class="btn btn-primary fw-bold rounded-3" onclick="checkInDailyTaskAndStart(\''+task.id+'\')">'+(task.partialSubmittedAt?'2-继续任务测试':'2-开始任务测试')+'</button>'
  const reviewButton=task.testSubmittedAt?'<button class="btn btn-warning fw-bold rounded-3" onclick="dailyTaskStudyReview(\''+task.id+'\')">3-测试后标记复习</button>':'<button class="btn btn-warning fw-bold rounded-3" disabled>3-测试后标记复习</button>'
  box.innerHTML='<div class="daily-study-head"><div><div class="daily-study-title">'+esc(task.label)+'阶段每日任务学习</div><div class="daily-study-sub">学习今日语法、今日词汇->开始任务测试->测试后回顾错题</div></div><div class="daily-study-badge">'+(task.learningCheckedAt?'学习已打卡':'学习未打卡')+'</div></div><div class="daily-study-grid"><div class="daily-study-block"><div class="daily-study-block-title">今日语法</div>'+(grammarHtml||'<div class="daily-study-item-desc">暂无语法内容</div>')+'</div><div class="daily-study-block"><div class="daily-study-block-title">今日词汇</div>'+(vocabHtml||'<div class="daily-study-item-desc">暂无词汇内容</div>')+'</div></div><div class="daily-study-actions">'+studyButton+testButton+reviewButton+'<button class="btn btn-outline-secondary rounded-3" onclick="switchTab(\'home\')">返回首页</button></div>'
  box.classList.remove('d-none')
  document.getElementById('quiz-setup').classList.add('d-none');document.getElementById('quiz-taking').classList.add('d-none');document.getElementById('quiz-result').classList.add('d-none')
}
function startDailyTask(level='junior'){
  if(!KNOWLEDGE_POINTS.length||!VOCABULARY.length){showToast('数据加载中，请稍后再试');return}
  const task=getDailyTask(level)
  if(task.completed)return
  if(!task.grammarIds||!task.grammarIds.length||!task.vocabIds||!task.vocabIds.length){
    const fresh=createDailyTask(level,task.date)
    Object.assign(task,fresh)
    const tasks=getDailyTasks();tasks[task.id]=task;setDailyTasks(tasks)
  }
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
function continueDailyTaskAfterPartial(taskId){
  const tasks=getDailyTasks(),task=tasks[taskId];if(!task){showToast('未找到每日任务');return}
  renderDailyTaskStudy(task);renderDailyTaskBar();showToast('请继续完成任务测试')
}
