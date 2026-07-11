// ======================================================================
// ❓ 出题模块 — 语法/词汇/错题出题引擎
// ======================================================================

function pullQuestions(ids, count, isPassage) {
  if (!QUESTIONS) return []
  const idSet = new Set(ids), result = []
  if (!isPassage) {
    // Merge choice + blank, filter batch=new, shuffle
    var pool=[]
    ;(QUESTIONS.sentence?.multipleChoice||[]).forEach(function(q){if(q.batch==='new')pool.push({q:q,type:'multiple_choice'})})
    ;(QUESTIONS.sentence?.fillBlank||[]).forEach(function(q){if(q.batch==='new')pool.push({q:q,type:'fill_blank'})})
    // Fisher-Yates shuffle
    for(var i=pool.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=pool[i];pool[i]=pool[j];pool[j]=tmp}
    for(var i=0;i<pool.length&&result.length<count;i++){
      var item=pool[i],q=item.q
      if(!q.kpIds||!q.kpIds.some(function(id){return idSet.has(id)}))continue
      var kp=KNOWLEDGE_POINTS.find(function(k){return k.id===q.kpIds[0]})
      var kpTitle=kp?.title||''
      if(item.type==='multiple_choice'){
        result.push({type:'multiple_choice',kpId:q.kpIds[0],kpTitle:kpTitle,sentence:q.sentence,options:[].concat(q.options),answer:q.answerIndex,explanation:q.explanation||''})
      }else{
        result.push({type:'fill_blank',kpId:q.kpIds[0],kpTitle:kpTitle,sentence:q.sentence,answer:q.answer,explanation:q.explanation||''})
      }
    }
  } else {
    for (const p of (QUESTIONS.passage || [])) {
      if (result.length >= count) break
      const matchedBlanks = p.blanks?.filter(b => b.kpIds?.some(id => idSet.has(id))) || []
      if (matchedBlanks.length === 0) continue
      const kpIds = [...new Set(matchedBlanks.flatMap(b => b.kpIds).filter(id => idSet.has(id)))]
      const kpTitles = kpIds.map(id => KNOWLEDGE_POINTS.find(k => k.id === id)?.title).filter(Boolean)
      const parts = p.blanks.map((b, i) => ({
        type: 'grammar', kpId: b.kpIds?.[0] || null, vId: null, kpTitle: (b.kpIds?.length ? (KNOWLEDGE_POINTS.find(k => k.id === b.kpIds[0])?.title || '') : ''), indexes: [i], blanks: [b.answer], explanation: b.explanation || ''
      }))
      result.push({ type: 'passage', kpId: kpIds[0] || null, kpIds, kpTitle: kpTitles[0] || '综合练习', kpTitles, title: p.title, text: p.text, blanks: p.blanks.map(b => b.answer), parts, explanation: matchedBlanks.map(b => b.explanation).filter(Boolean).join('；') })
    }
  }
  return result
}

function generateGrammar(ids,count,isPassage,mixedPassage=false){
  if(isPassage)return pullQuestions(ids,count,true)
  var fromQuestions=pullQuestions(ids,count,false)
  if(fromQuestions.length===0)return[]
  var stats=getKpStats(),cand={}
  fromQuestions.forEach(function(q){
    var kpId=q.kpId;if(!kpId)return
    if(!cand[kpId])cand[kpId]={kpId:kpId,title:q.kpTitle||'',questions:[]}
    cand[kpId].questions.push(q)
  })
  var sorted=Object.keys(cand).map(function(id){
    var s=stats[id]||{},eb=ebMultiplier(s.reviewCount||0,s.lastQuizzed||0)
    var w=(s.quizzedCount||0)===0?100:(s.errorCount||0)>0?30+(s.errorCount||0)*3+eb*2:1+eb
    return{kpId:parseInt(id),weight:w,questions:cand[id].questions}
  }).sort(function(a,b){return b.weight-a.weight})
  var result=[]
  for(var si=0;si<sorted.length&&result.length<count;si++){
    var qs=sorted[si].questions
    for(var qi=0;qi<qs.length&&result.length<count;qi++){
      result.push(qs[qi])
    }
  }
  return result
}

function generateVocab(count, levelFilter, questionType){
  const mastery=getMastery()
  let cand=(VOCABULARY||[]).filter(hasVocabQuizData)
  if(levelFilter&&levelFilter.length>0){
    cand=cand.filter(v=>levelFilter.includes(vocabStatsLevel(v).key))
    if(levelFilter.includes('ket'))cand=cand.concat((KET_VOCABULARY||[]).filter(hasVocabQuizData))
  }else if((KET_VOCABULARY||[]).length>0){
    cand=cand.concat(KET_VOCABULARY.filter(hasVocabQuizData))
  }
  // Dedup by word (case-insensitive)
  var wordSeen=new Set()
  cand=cand.filter(function(v){var w=v.word.toLowerCase();if(wordSeen.has(w))return false;wordSeen.add(w);return true})
  const irregularRows=IRREGULAR_VERBS.filter(r=>r.base&&r.past?.length&&r.pastParticiple?.length)
  if(cand.length===0&&irregularRows.length===0)return[]
  cand=cand.map(v=>{const m=mastery[v.id]||{level:0,quizzedCount:0,errorCount:0,reviewCount:0};const reviewCount=m.reviewCount||0,lastQuizzed=m.lastQuizzed||0;let w;if((m.quizzedCount||0)===0)w=100;else if((m.errorCount||0)>0)w=30+m.errorCount*3+ebMultiplier(reviewCount,lastQuizzed)*2;else w=1+ebMultiplier(reviewCount,lastQuizzed);return{v,weight:w}})
  const qs=[],used=new Set(),usedIrregular=new Set();let att=0,direction=0
  if(questionType==='dictation'){
    while(qs.length<count&&att<count*3&&used.size<cand.length){
      att++
      const av=cand.filter(c=>!used.has(c.v.id));if(av.length===0)continue
      const w=av.map(c=>c.weight),ch=weightedPick(av,w);if(!ch)continue
      const v=ch.v
      const doEn2cn=direction%2===0;direction++
      if(doEn2cn){
        qs.push({type:'vocab_dictation',vId:v.id,word:v.word,phonetic:v.phonetic,direction:'en2cn',answer:v.translation,qText:'请写出 "'+v.word+'" 的中文意思',vocabLevel:vocabStatsLevel(v).key})
      }else{
        const hint=v.translation.split(/[，,、\/\s]+/).filter(Boolean)[0]||v.translation
        qs.push({type:'vocab_dictation',vId:v.id,word:v.word,phonetic:v.phonetic,direction:'cn2en',answer:v.word,qText:'请写出 "'+hint+'" 对应的英文单词',vocabLevel:vocabStatsLevel(v).key})
      }
      used.add(v.id)
    }
    return qs
  }
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
    const doEn2cn=direction%2===0
      if(doEn2cn){
        direction++
        const wg=cand.filter(c=>c.v.id!==v.id).sort(()=>Math.random()-0.5).slice(0,3)
        const opts=[v.translation,...wg.map(c=>c.v.translation)].sort(()=>Math.random()-0.5)
        qs.push({type:'vocab_en2cn',vId:v.id,word:v.word,phonetic:v.phonetic,answer:v.translation,options:opts,qText:'请选择 "'+v.word+'" 的中文意思',vocabLevel:vocabStatsLevel(v).key})
      }else{
        direction++
        const wg=cand.filter(c=>c.v.id!==v.id).sort(()=>Math.random()-0.5).slice(0,3)
        const opts=[v.word,...wg.map(c=>c.v.word)].sort(()=>Math.random()-0.5)
        qs.push({type:'vocab_cn2en',vId:v.id,translation:v.translation,options:opts,answer:v.word,qText:'请选择 "'+v.translation+'" 对应的英文',vocabLevel:vocabStatsLevel(v).key})
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
  const seen=new Set(),uniq=[]
  for(const e of errs){const key=e.questionText+'|'+e.correctAnswer;if(!seen.has(key)){seen.add(key);uniq.push(e)}}
  return uniq.slice(0,Math.min(count,uniq.length)).map(raw=>{
    const e=inferErrorContext(raw)
    const fallback=e.type==='vocabulary'?'复习这个单词的中文意思':'复习这个语法'
    return{type:'error_review',errorId:e.id,qText:e.questionText,answer:e.correctAnswer,wrongAnswer:e.wrongAnswer,kpTitle:e.kpTitle||'',questionKind:e.questionKind||'',explanation:e.explanation||fallback}
  })
}
