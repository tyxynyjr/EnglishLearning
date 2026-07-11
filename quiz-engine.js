// ======================================================================
// 🎯 答题引擎模块 — 渲染、交互、批改、错题追踪
// ======================================================================

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
  }else if(q.type==='vocab_dictation'){
    qEl.innerHTML=q.qText+(q.phonetic?' <small class="text-secondary">'+q.phonetic+'</small>':'')
    if(ans){var cr2=isAnswerCorrect(q,App.answers[App.currentQ]);aEl.innerHTML='<div class="mt-2 small">你的答案：<strong class="text-'+(cr2?'success':'danger')+'">'+esc(App.answers[App.currentQ])+'</strong></div><div class="mt-1 small text-secondary">正确答案：<strong>'+esc(q.answer)+'</strong></div>'}
    else{aEl.innerHTML='<input class="form-control form-control-lg rounded-3 mt-2" id="fill-input" placeholder="输入答案..." onkeydown="if(event.key===\'Enter\')submitFill()">';setTimeout(()=>document.getElementById('fill-input')?.focus(),100)}
  }else if(q.type==='error_review'){
    qEl.innerHTML='<div class="text-secondary small mb-2">【错题重练】</div>'+esc(q.qText)
    if(ans){aEl.innerHTML='<div class="mt-2 small">你的答案：<strong class="text-'+(App.answers[App.currentQ]==='correct'?'success':'danger')+'">'+(App.answers[App.currentQ]==='correct'?q.answer:q.wrongAnswer)+'</strong></div>'}
    else{aEl.innerHTML='<div class="quiz-options"><div class="opt" data-letter="A" onclick="selectErrorOpt(0)">'+esc(q.answer)+'</div><div class="opt" data-letter="B" onclick="selectErrorOpt(1)">'+esc(q.wrongAnswer)+'</div></div>'}
  }
  if(ans){const cr=isAnswerCorrect(q,App.answers[App.currentQ]);showFB(cr,q.explanation||'',q)}
  updateNav()
}
function cleanVocabQuestionText(text){
  return String(text||'').replace(/\s*\/[^/]+\/\s*/g,' ').replace(/\s+/g,' ').trim()
}
function isAnswerCorrect(q,ans){
  if(ans===null||ans===undefined)return false
  if(q.type==='multiple_choice')return ans===q.answer
  if(q.type==='fill_blank')return String(ans).toLowerCase().trim()===q.answer.toLowerCase().trim()
  if(q.type==='vocab_en2cn'||q.type==='vocab_cn2en'||q.type==='vocab_irregular')return ans===q.answer
  if(q.type==='vocab_dictation'){
    if(q.direction==='cn2en')return String(ans).toLowerCase().trim()===q.answer.toLowerCase().trim()
    var user=String(ans||'').trim(),correct=String(q.answer||'').trim()
    if(correct.length<=1)return user===correct
    if(correct.length===2)return Array.from(correct).some(function(c){return user.includes(c)})
    var common=Array.from(correct).filter(function(c){return user.includes(c)}).length
    return common/correct.length>=0.6
  }
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
  else{aEl.innerHTML='<div class="passage-box">'+parts.map((p,i)=>{if(i===parts.length-1)return p;if(q.blankOptions?.[i]?.length){return p+'<select class="p-blank" id="passage-blank-'+i+'"><option value="">选择'+(i+1)+'</option>'+q.blankOptions[i].map(o=>'<option value="'+esc(o)+'">'+esc(o)+'</option>').join('')+'</select>'}return p+'<input class="p-blank" id="passage-blank-'+i+'" placeholder="填空'+(i+1)+'" autocomplete="off">'}).join('')+'</div>'+passageKpList(q)+'<div class="passage-grade-actions"><div class="quiz-action"><button class="btn btn-primary" onclick="submitPassage()">批改</button><div class="hint">检查已填写空</div></div></div>'}
}
function selectOption(i){if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return;const q=App.questions[App.currentQ];App.answers[App.currentQ]=i;updateMastery(q,i===q.answer);trackE(q,i===q.answer,q.options[i],q.options[q.answer]);renderQ()}
function selectVocabOption(v){if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return;const q=App.questions[App.currentQ];App.answers[App.currentQ]=v;updateVocabMastery(q,v===q.answer);trackE(q,v===q.answer,v,q.answer);renderQ()}
function selectErrorOpt(i){if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return;const q=App.questions[App.currentQ],cr=i===0;App.answers[App.currentQ]=cr?'correct':'wrong';if(cr){const e=getErrors(),er=e.find(x=>x.id===q.errorId);if(er){er.correctCount=(er.correctCount||0)+1;if(er.correctCount>=3)er.mastered=true;er.reviewed=true;setErrors(e)}}renderQ()}
function submitFill(){
  if(App.answers[App.currentQ]!==null&&App.answers[App.currentQ]!==undefined)return
  const inp=document.getElementById('fill-input');if(!inp)return;const v=inp.value.trim();if(!v){showToast('请输入答案');return}
  const q=App.questions[App.currentQ];App.answers[App.currentQ]=v;const dictCr=q.type==='vocab_dictation'?isAnswerCorrect(q,v):v.toLowerCase()===q.answer.toLowerCase();updateMastery(q,dictCr);trackE(q,dictCr,v,q.answer);renderQ()
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
      const items=q.parts.map(p=>{const from=start,to=start+(p.blanks?.length||0);start=to;const indexes=p.indexes||[];const blankNum=(indexes.length?indexes[0]:from)+1;return filledIndexes.some(i=>indexes.length?indexes.includes(i):(i>=from&&i<to))?'<div class="explain-item"><span class="explain-num">'+blankNum+'.</span> <strong>'+esc(p.kpTitle)+'：</strong>'+esc(p.explanation||'')+'</div>':''}).filter(Boolean).join('')
      if(items)explain='<div class="result-passage-explain"><div class="label"><i class="bi bi-lightbulb me-1"></i>解析</div>'+items+'</div>'
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
function confirmSubmitQuiz(){submitQuiz()}
function confirmExitQuiz(){exitQuiz()}
function quizKindKey(q){
  if(q.type==='vocab_irregular')return'vocab_irregular'
  if(q.type==='vocab_en2cn'||q.type==='vocab_cn2en')return'vocab_regular'
  if(q.type==='vocab_dictation')return'vocab_dictation'
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
    const key=(q.vocabLevel||'other')+'|'+quizKindKey(q),st=stats[key]||{total:0,correct:0}
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
    const items=q.parts.map(p=>{const from=start,to=start+(p.blanks?.length||0);start=to;const indexes=p.indexes||[];const blankNum=(indexes.length?indexes[0]:from)+1;return filledIndexes.some(i=>indexes.length?indexes.includes(i):(i>=from&&i<to))?'<div class="explain-item"><span class="explain-num">'+blankNum+'.</span> <strong>'+esc(p.kpTitle)+'：</strong>'+esc(p.explanation||'')+'</div>':''}).filter(Boolean).join('')
      if(items)explain='<div class="result-passage-explain"><div class="label"><i class="bi bi-lightbulb me-1"></i>解析</div>'+items+'</div>'
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
  if(QUESTIONS?.passage){
    for(const p of QUESTIONS.passage){
      const sameTitle=ctx.questionTitle&&ctx.questionTitle===p.title
      const sameText=ctx.fullQuestionText&&ctx.fullQuestionText===p.text
      let blankIndex=Number.isInteger(ctx.blankIndex)&&passageSentence(p.text,ctx.blankIndex)===qText?ctx.blankIndex:p.blanks.findIndex((b,i)=>b.answer===e.correctAnswer&&passageSentence(p.text,i)===qText)
      if(blankIndex<0&&(sameTitle||sameText||ctx.questionKind==='passage'))blankIndex=p.blanks.findIndex(b=>b.answer===e.correctAnswer)
      const sameSentence=blankIndex>=0&&passageSentence(p.text,blankIndex)===qText
      if((ctx.questionKind==='passage'||sameTitle||sameText||sameSentence)&&blankIndex>=0){
        const part=passagePartByBlank(p,blankIndex),pc=passagePartContext(p,blankIndex)
        ctx.questionTitle=p.title;ctx.questionKind='passage';ctx.blankIndex=blankIndex;ctx.questionText=passageSentence(p.text,blankIndex);ctx.fullCorrectAnswer='';ctx.kpTitle=pc.kpTitle||ctx.kpTitle;ctx.explanation=pc.explanation||ctx.explanation
        if(part?.indexes?.length)ctx.partIndexes=[...part.indexes]
        return ctx
      }
    }
  }
  if(ctx.questionKind==='passage')return ctx
  if(QUESTIONS){
    for(const q of QUESTIONS.sentence?.multipleChoice||[]){
      if(q.sentence===qText||q.options?.includes(e.correctAnswer)){
        const kp=KNOWLEDGE_POINTS.find(k=>k.id===(q.kpIds||[])[0])
        ctx.kpTitle=ctx.kpTitle||(kp?.title||'');ctx.questionKind=ctx.questionKind||'multiple_choice';ctx.questionText=q.sentence;ctx.explanation=ctx.explanation||q.explanation;return ctx
      }
    }
    for(const q of QUESTIONS.sentence?.fillBlank||[]){
      if(q.sentence===qText||q.answer===e.correctAnswer){
        const kp=KNOWLEDGE_POINTS.find(k=>k.id===(q.kpIds||[])[0])
        ctx.kpTitle=ctx.kpTitle||(kp?.title||'');ctx.questionKind=ctx.questionKind||'fill_blank';ctx.questionText=q.sentence;ctx.explanation=ctx.explanation||q.explanation;return ctx
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
  if(ex){ex.errorCount=(ex.errorCount||1)+1;ex.lastWrongAt=now;ex.wrongAnswer=sa;ex.reviewed=false;ex.correctCount=0;Object.assign(ex,meta)}else{errs.push({id:now+'-'+Math.random().toString(36).slice(2,8),type:tp,questionText:qt,correctAnswer:ca,wrongAnswer:sa,errorCount:1,lastWrongAt:now,reviewed:false,mastered:false,correctCount:0,createdAt:now,...meta})}
  setErrors(errs)
}
function filterErrors(f,el){
  if(el){document.querySelectorAll('#error-filter .badge').forEach(x=>{x.className='badge bg-light text-dark rounded-pill px-3 py-2';x.style.cursor='pointer'})}
  el.className='badge bg-primary rounded-pill px-3 py-2';el.style.cursor='pointer'
  App.errorFilter=f;renderErrors()
}
function renderErrors(){
  const f=App.errorFilter
  let errors=getErrors()
  if(f==='grammar')errors=errors.filter(e=>e.type==='grammar')
  else if(f==='vocabulary')errors=errors.filter(e=>e.type==='vocabulary')
  else errors=errors.filter(e=>!e.reviewed)
  if(App.pendingDailyTaskReviewId)errors=errors.filter(e=>e.dailyTaskId===App.pendingDailyTaskReviewId)
  errors.sort((a,b)=>b.lastWrongAt-a.lastWrongAt)
  const el=document.getElementById('error-list');if(!el)return
  if(errors.length===0){el.innerHTML='<div class="empty-state"><div class="icon"><i class="bi bi-emoji-smile fs-1"></i></div>没有错题，继续保持！</div>';return}
  el.innerHTML=errors.map(raw=>{
    const e=inferErrorContext(raw)
    const typeBadge=e.type==='grammar'?'<span class="badge tag-orange me-1">语法</span>':'<span class="badge tag-blue me-1">词汇</span>'
    const isPassageError=e.questionKind==='passage'
    const kp=e.kpTitle?'<div class="error-kp"><i class="bi bi-journal-text me-1"></i>'+esc(e.kpTitle)+'</div>':''
    const title=e.questionTitle?'<div class="error-title">'+esc(e.questionTitle)+(e.blankIndex!==null&&e.blankIndex!==undefined?' · 第 '+(e.blankIndex+1)+' 空':'')+'</div>':''
    const fullAnswer=e.fullCorrectAnswer?'<div class="full-answer"><i class="bi bi-list-check me-1"></i>完整答案：'+esc(e.fullCorrectAnswer)+'</div>':''
    const explain=e.explanation?'<div class="explain"><i class="bi bi-lightbulb me-1"></i>'+esc(e.explanation)+'</div>':''
    const displayQuestion=e.type==='vocabulary'?cleanVocabQuestionText(e.questionText||('围绕正确答案 '+e.correctAnswer+' 复习这道错题')):(e.questionText||('围绕正确答案 '+e.correctAnswer+' 复习这道错题'))
    return'<div class="error-item" data-id="'+e.id+'">'+kp+title+'<div class="q-text">'+typeBadge+esc(displayQuestion)+'</div><div class="answer-row"><span class="wrong"><i class="bi bi-x-lg me-1"></i>你的答案：'+esc(e.wrongAnswer)+'</span><span class="correct"><i class="bi bi-check-lg me-1"></i>正确答案：'+esc(e.correctAnswer)+'</span></div>'+fullAnswer+explain+(f==='grammar'||f==='vocabulary'?'':'<div class="d-flex gap-2 flex-wrap"><button class="btn btn-sm btn-outline-warning err-btn-review" data-id="'+e.id+'"><i class="bi bi-eye me-1"></i>标记已复习</button></div>')+'</div>'
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

// --- Quiz setup ---
function selectQuizType(type){
  App.quizType=type
  if(type==='passage')App.quizQtyTouched=false
  document.querySelectorAll('.quiz-type-card').forEach(c=>c.classList.remove('selected'))
  document.querySelector('.quiz-type-card[data-type="'+type+'"]').classList.add('selected')
  document.getElementById('quiz-vocab-type-section')?.classList.toggle('d-none',type!=='vocabulary')
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
function selectQty(el){setQuizQty(parseInt(el.dataset.val))}
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
    label.textContent='选择词汇范围（不选=全部词汇）';section.classList.remove('d-none')
    const allLevels=[{key:'secondary',label:'小学'},{key:'junior',label:'初中'},{key:'ket',label:'KET'},{key:'supplemental',label:'其他'}]
    const cur=App.vocabLevelFilter
    container.innerHTML='<div class="d-flex gap-2 flex-wrap">'+allLevels.map(l=>'<span class="badge '+(cur&&cur.includes(l.key)?'bg-primary':'bg-light text-dark')+' rounded-pill px-3 py-2" onclick="selectVocabLevel(\''+l.key+'\',this)" style="cursor:pointer">'+l.label+'</span>').join('')+'</div>'
    document.getElementById('quiz-vocab-type-section')?.classList.remove('d-none')
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
function selectVocabLevel(key,el){
  if(!App.vocabLevelFilter)App.vocabLevelFilter=[]
  const idx=App.vocabLevelFilter.indexOf(key)
  if(idx>=0)App.vocabLevelFilter.splice(idx,1)
  else App.vocabLevelFilter.push(key)
  el.classList.toggle('bg-primary')
  el.classList.toggle('bg-light')
  el.classList.toggle('text-dark')
}
function selectVocabType(type,el){
  App.vocabType=type
  document.querySelectorAll('#quiz-vocab-type-section .badge').forEach(b=>{b.className='badge bg-light text-dark rounded-pill px-3 py-2';b.style.cursor='pointer'})
  el.className='badge bg-primary rounded-pill px-3 py-2';el.style.cursor='pointer'
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
    qs=generateVocab(App.quizQty, App.vocabLevelFilter, App.vocabType)
  }else if(App.quizType==='error'){qs=generateError(App.quizQty,App.errorSrcFilter||'all')}
  if(qs.length===0){showToast('没有足够的题目');return}
  App.questions=qs;App.currentQ=0;App.answers=qs.map(()=>null);App.seconds=0
  document.getElementById('quiz-setup').classList.add('d-none');document.getElementById('quiz-taking').classList.remove('d-none');document.getElementById('quiz-result').classList.add('d-none')
  if(App.timer)clearInterval(App.timer)
  App.timer=setInterval(()=>{App.seconds++;document.getElementById('quiz-timer').innerHTML='<i class="bi bi-clock me-1"></i>'+formatTime(App.seconds)},1000)
  renderQ()
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
