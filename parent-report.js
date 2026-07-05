// ======================================================================
// 📊 家长报告模块
// ======================================================================

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
