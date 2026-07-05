// ======================================================================
// ❓ 出题模块 — 语法/词汇/错题出题引擎
// ======================================================================

function pullQuestions(ids, count, isPassage) {
  if (!QUESTIONS) return []
  const idSet = new Set(ids), result = []
  if (!isPassage) {
    for (const q of (QUESTIONS.sentence?.multipleChoice || [])) {
      if (result.length >= count) break
      if (q.kpIds?.some(id => idSet.has(id))) {
        const kp = KNOWLEDGE_POINTS.find(k => k.id === q.kpIds[0])
        result.push({ type: 'multiple_choice', kpId: q.kpIds[0], kpTitle: kp?.title || '', sentence: q.sentence, options: [...q.options], answer: q.answerIndex, explanation: q.explanation || '' })
      }
    }
    for (const q of (QUESTIONS.sentence?.fillBlank || [])) {
      if (result.length >= count) break
      if (q.kpIds?.some(id => idSet.has(id))) {
        const kp = KNOWLEDGE_POINTS.find(k => k.id === q.kpIds[0])
        result.push({ type: 'fill_blank', kpId: q.kpIds[0], kpTitle: kp?.title || '', sentence: q.sentence, answer: q.answer, explanation: q.explanation || '' })
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
  const stats=getKpStats()
  let cand=ids.map(id=>{const kp=KNOWLEDGE_POINTS.find(k=>k.id===id);if(!kp)return null;const s=stats[id]||{}
    const reviewCount=s.reviewCount||0,lastQuizzed=s.lastQuizzed||0
    let w
    if((s.quizzedCount||0)===0)       w=100
    else if((s.errorCount||0)>0)       w=30+(s.errorCount||0)*3+ebMultiplier(reviewCount,lastQuizzed)*2
    else                               w=1+ebMultiplier(reviewCount,lastQuizzed)
    return{kp,weight:w}
  }).filter(Boolean)
  const fromQuestions = pullQuestions(ids, count, false)
  const qs=[],usedKs=new Set();let att=0
  const remaining = Math.max(0, count - fromQuestions.length)
  const totalAvail = Math.min(remaining, cand.reduce((s,c)=>s+generatedGrammarSingles(c.kp).length,0))
  const target=Math.min(count, fromQuestions.length + totalAvail)
  qs.push(...fromQuestions.slice(0, count))
  while(qs.length<target&&att<target*5&&cand.length>0){
    att++;const availableCand=cand.filter(c=>generatedGrammarSingles(c.kp).some((_,i)=>!usedKs.has('q-'+c.kp.id+'-'+i)))
    if(availableCand.length===0)break
    const w=availableCand.map(c=>c.weight),ch=weightedPick(availableCand,w);if(!ch)continue
    const{kp}=ch
    const pool=generatedGrammarSingles(kp).map((data,i)=>({idx:i,data})).filter(item=>!usedKs.has('q-'+kp.id+'-'+item.idx))
    if(pool.length===0)continue
    const pick=pool[Math.floor(Math.random()*pool.length)]
    usedKs.add('q-'+kp.id+'-'+pick.idx)
    qs.push({type:'multiple_choice',kpId:kp.id,kpTitle:kp.title,sentence:pick.data.sentence,options:pick.data.options,answer:pick.data.answer,explanation:pick.data.explanation})
  }
  return qs
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
  const seen=new Set(),uniq=[]
  for(const e of errs){const key=e.questionText+'|'+e.correctAnswer;if(!seen.has(key)){seen.add(key);uniq.push(e)}}
  return uniq.slice(0,Math.min(count,uniq.length)).map(raw=>{
    const e=inferErrorContext(raw)
    const fallback=e.type==='vocabulary'?'复习这个单词的中文意思':'复习这个语法'
    return{type:'error_review',errorId:e.id,qText:e.questionText,answer:e.correctAnswer,wrongAnswer:e.wrongAnswer,kpTitle:e.kpTitle||'',questionKind:e.questionKind||'',explanation:e.explanation||fallback}
  })
}
