// ======================================================================
// 📦 数据模块 — 语法/词汇/短文定义 + 数据加载 + 出题辅助函数
// ======================================================================

const CATEGORIES = [
  { id: 3, name: '词类', icon: 'bi-pencil' },
  { id: 8, name: '句法', icon: 'bi-diagram-3' }
]
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
loadKnowledgeData();
const WORD_CLASS_GROUPS = [
  { key:'noun', title:'名词', desc:'可数名词及其单复数、不可数名词、专有名词、名词所有格。', ids:[44,47,160,46] },
  { key:'verb', title:'动词', desc:'基本形式、及物/不及物动词、系动词、助动词、情态动词。', ids:[110,121,162,163,164,15,161,111,112,113] },
  { key:'adjective', title:'形容词', desc:'基本形式、常见词尾/词缀、比较级和最高级。', ids:[165,166,10,59] },
  { key:'adverb', title:'副词', desc:'修饰动词、形容词、副词或整个句子；补充常见 -ly 词尾以及副词比较级、最高级。', ids:[56,167,57,58] },
  { key:'pronoun', title:'代词', desc:'人称代词、物主代词、反身代词、指示代词、不定代词和替代用法。', ids:[11,48,49,50,51,52,53] },
  { key:'numeral', title:'数词', desc:'基数词、序数词、分数、小数、百分数和年月日时间表达。', ids:[65,66,67,68] },
  { key:'article', title:'冠词', desc:'不定冠词、定冠词、零冠词和常见固定搭配。', ids:[20,70,71,72,73] },
  { key:'preposition', title:'介词', desc:'时间、地点方位、方式和固定介词搭配。', ids:[21,61,62,63,64] },
  { key:'conjunction', title:'连词', desc:'并列连词和从属连词的分类、功能及常见连词用法。', ids:[200,201,202] }
]
const WORD_CLASS_POINT_IDS = new Set(WORD_CLASS_GROUPS.flatMap(g=>g.ids))
KNOWLEDGE_POINTS.forEach(kp=>{if(WORD_CLASS_POINT_IDS.has(kp.id))kp.categoryId=3})
const SYNTAX_GROUPS = [
  { key:'sentence-kind', title:'句子种类', desc:'陈述句、疑问句、祈使句、感叹句和反意疑问句。', ids:[74,75,76,77,78,23,24] },
  { key:'simple-sentence', title:'简单句的基本句型', desc:'五种基本句型和 There be 结构。', ids:[79,80,81,82,83,12,29] },
  { key:'tense', title:'谓语动词的时态', desc:'be 动词、一般时、进行时、完成时以及时态相关动词变化。', ids:[27,28,1,2,3,4,5,6,17,18,30,31,32,33,34,35,36] },
  { key:'passive', title:'被动语态', desc:'不同时态的被动语态、by 短语、主动被动转换和特殊动词被动。', ids:[7,8,37,38,39,40,41,42] },
  { key:'nonfinite', title:'动词的非谓语形式', desc:'动词不定式、动词-ing形式。', ids:[16,114,129] },
  { key:'compound', title:'并列复合句', desc:'并列连词和相关并列结构。', ids:[134,135,136,137,138] },
  { key:'complex', title:'主从复合句', desc:'宾语从句、状语从句、定语从句和从属连词。', ids:[13,14,22,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,139,140,141,142,143] },
  { key:'agreement', title:'主谓一致', desc:'单复数一致、就近原则、不定代词和集合名词作主语。', ids:[25,104,105,106,107,108,109] },
  { key:'other-patterns', title:'其他常用句式', desc:'不便归入前面句法组的常用结构和固定句型。', ids:[144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159] }
]
const SYNTAX_POINT_IDS = new Set(SYNTAX_GROUPS.flatMap(g=>g.ids))
KNOWLEDGE_POINTS.forEach(kp=>{if(SYNTAX_POINT_IDS.has(kp.id))kp.categoryId=8})
const KNOWLEDGE_GROUPS_BY_CATEGORY = {3:WORD_CLASS_GROUPS,8:SYNTAX_GROUPS}
const ACTIVE_GRAMMAR_POINT_IDS = [...new Set([...WORD_CLASS_GROUPS.flatMap(g=>g.ids),...SYNTAX_GROUPS.flatMap(g=>g.ids)])]
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

function activeGrammarPoints(){return ACTIVE_GRAMMAR_POINT_IDS.map(id=>KNOWLEDGE_POINTS.find(kp=>kp.id===id)).filter(Boolean)}
const GENERATED_SINGLE_BANK_CACHE=new Map()
const PASSAGE_THEMES=[
  ['Community Reading Week','library','reading journal'],['Green Campus Project','school garden','science poster'],['Sports and Health Day','playground','team plan'],['Museum Learning Trip','city museum','history report'],['Neighborhood Help Day','community center','service diary'],['English Drama Festival','school hall','performance script'],['Science Club Challenge','lab','experiment note'],['Family Story Album','home','memory page'],['Digital Study Workshop','computer room','online project'],['Weekend Market Visit','market','survey form']
]
let QUESTIONS = null
async function loadQuestionsData() {
    try {
        const resp = await fetch('data/questions.json');
        QUESTIONS = await resp.json();
        console.log('✅ 题库加载成功');
    } catch (error) {
        console.error('❌ 题库加载失败:', error);
    }
}
loadQuestionsData()

function vocabSamples(seed,count){
  const pool=VOCABULARY.filter(hasVocabQuizData)
  if(pool.length===0)return[{word:'class',translation:'班级'},{word:'book',translation:'书'},{word:'learn',translation:'学习'},{word:'friend',translation:'朋友'},{word:'help',translation:'帮助'}].slice(0,count)
  const out=[]
  for(let i=0;i<count;i++)out.push(pool[(seed*17+i*37)%pool.length])
  return out
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
  else if(/现在进行时/.test(title)){sentence='At this moment,志愿者们 ___ (carry) boxes of books to the children\'s corner.';answer='are carrying';note='At this moment 提示现在进行时。'}
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

// ===== 语法速查表数据 =====
const ADJECTIVE_COMPARISON = [
  { type:'rule', pattern:'单音节 + -er/-est',             base:'tall',      comp:'taller',       super:'tallest' },
  { type:'rule', pattern:'以 e 结尾 + -r/-st',            base:'large',     comp:'larger',       super:'largest' },
  { type:'rule', pattern:'辅音+y 变 y 为 i + -er/-est',   base:'happy',     comp:'happier',      super:'happiest' },
  { type:'rule', pattern:'重读闭音节双写末字母 + -er/-est', base:'big',       comp:'bigger',       super:'biggest' },
  { type:'rule', pattern:'多音节/部分双音节 + more/most',  base:'beautiful', comp:'more beautiful', super:'most beautiful' },
  { type:'irregular', pattern:'', base:'good/well', comp:'better', super:'best' },
  { type:'irregular', pattern:'', base:'bad/badly', comp:'worse',  super:'worst' },
  { type:'irregular', pattern:'', base:'many/much', comp:'more',   super:'most' },
  { type:'irregular', pattern:'', base:'little',    comp:'less',   super:'least' },
  { type:'irregular', pattern:'', base:'far',       comp:'farther/further',  super:'farthest/furthest' },
  { type:'irregular', pattern:'', base:'old',       comp:'older/elder',      super:'oldest/eldest' },
]
const ADVERB_COMPARISON = [
  { type:'rule', pattern:'单音节 + -er/-est',      base:'fast',  comp:'faster',  super:'fastest' },
  { type:'rule', pattern:'early 类 -ly 变 y 为 i', base:'early', comp:'earlier', super:'earliest' },
  { type:'rule', pattern:'多音节/-ly 结尾 + more/most', base:'quickly', comp:'more quickly', super:'most quickly' },
  { type:'irregular', pattern:'', base:'well',  comp:'better', super:'best' },
  { type:'irregular', pattern:'', base:'badly', comp:'worse',  super:'worst' },
  { type:'irregular', pattern:'', base:'much',  comp:'more',   super:'most' },
  { type:'irregular', pattern:'', base:'little',comp:'less',   super:'least' },
  { type:'irregular', pattern:'', base:'far',   comp:'farther/further', super:'farthest/furthest' },
]
const PRONOUN_TABLE = [
  { person:'第一人称单数',  nom:'I', acc:'me', adj_poss:'my',    noun_poss:'mine',    reflexive:'myself' },
  { person:'第二人称单数',  nom:'you', acc:'you', adj_poss:'your', noun_poss:'yours',  reflexive:'yourself' },
  { person:'第三人称单数(男)', nom:'he', acc:'him', adj_poss:'his',  noun_poss:'his',   reflexive:'himself' },
  { person:'第三人称单数(女)', nom:'she',acc:'her', adj_poss:'her',  noun_poss:'hers',  reflexive:'herself' },
  { person:'第三人称单数(物)', nom:'it', acc:'it',  adj_poss:'its',  noun_poss:'its',   reflexive:'itself' },
  { person:'第一人称复数',  nom:'we', acc:'us',  adj_poss:'our',  noun_poss:'ours',   reflexive:'ourselves' },
  { person:'第二人称复数',  nom:'you', acc:'you', adj_poss:'your', noun_poss:'yours',  reflexive:'yourselves' },
  { person:'第三人称复数',  nom:'they',acc:'them',adj_poss:'their', noun_poss:'theirs', reflexive:'themselves' },
]

const GRAMMAR_REFS_BY_CATEGORY = {
  3: [
    { ref:'adj-comp', label:'形容词比较' },
    { ref:'adv-comp', label:'副词比较' },
    { ref:'pronoun', label:'代词对照' },
    { ref:'indefinite-pronoun', label:'不定代词' },
    { ref:'irregular-verbs', label:'不规则动词' },
  ],
  8: [],
}

const INDEFINITE_PRONOUNS = [
  { cat:'复合词(人/物)', affirm:'someone, something, everyone, everything, somebody, everybody', neg:'anyone, anything, nobody, nothing, anybody, no one', cnt:'✓', uncnt:'✓', sgl:'✓（一律单数）', pl:'—' },
  { cat:'复合词(地点)', affirm:'somewhere, everywhere', neg:'anywhere, nowhere', cnt:'—', uncnt:'—', sgl:'—', pl:'—' },
  { cat:'数量类(多)', affirm:'many, a few, several', neg:'few（很少）', cnt:'✓', uncnt:'—', sgl:'—', pl:'✓' },
  { cat:'数量类(量)', affirm:'much, a little', neg:'little（很少）', cnt:'—', uncnt:'✓', sgl:'✓', pl:'—' },
  { cat:'两者', affirm:'both（两者都）', neg:'either（任一）, neither（都不）', cnt:'✓', uncnt:'—', sgl:'neither/either 单数; both 复数', pl:'✓(both)' },
  { cat:'三者及以上', affirm:'all（都）', neg:'none（都不）', cnt:'✓', uncnt:'✓', sgl:'all 复数; none 可单可复', pl:'✓(all)' },
  { cat:'个体类', affirm:'each, every', neg:'—', cnt:'✓', uncnt:'—', sgl:'✓', pl:'—' },
  { cat:'替代类', affirm:'one, another, other(s)', neg:'—', cnt:'✓', uncnt:'—', sgl:'✓(one/another)', pl:'—（others 复数）' },
]

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
