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
const KNOWLEDGE_POINTS = [
  // 时态
  { id:1, categoryId:1, title:'一般现在时',
    content:'一般现在时表示经常发生的动作或客观真理。\n\n结构：主语 + 动词原形/三单形式\n\n标志词：always, usually, often, sometimes, every day\n\n注意：主语是第三人称单数时动词加 -s 或 -es',
    examples:[{en:'I go to school every day.',cn:'我每天去上学。'},{en:'She likes reading books.',cn:'她喜欢读书。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'She ___ to school every day.',options:['go','goes','going','went'],answer:1,explanation:'主语是第三人称单数 She，动词用三单形式 goes'},
        {sentence:'They often ___ football after school.',options:['play','plays','playing','played'],answer:0,explanation:'主语 They 是复数，动词用原形 play'}
      ],
      fillBlank:[
        {sentence:'My mother ___ (cook) dinner every evening.',answer:'cooks',explanation:'主语是第三人称单数，cook 加 s'},
        {sentence:'We usually ___ (have) lunch at 12:00.',answer:'have',explanation:'主语 We 是复数，动词用原形'}
      ],
      passage:[
        {title:'My Daily Routine',text:'I ___ (get) up at 6:30 every morning. Then I ___ (have) breakfast at 7:00. My father ___ (read) newspapers while eating. My mother ___ (cook) lunch for us. After that, I ___ (go) to school by bus. School ___ (start) at 8:30. I usually ___ (finish) my homework before dinner.',blanks:['get','have','reads','cooks','go','starts','finish'],explanation:'一般现在时描述日常习惯和规律动作'},
        {title:'Tom\'s Life',text:'Tom ___ (live) in Beijing. He ___ (study) at No.1 Middle School. Every day he ___ (take) the subway to school. He ___ (like) English very much. His teacher often ___ (praise) him. After school, Tom ___ (play) basketball with his friends.',blanks:['lives','studies','takes','likes','praises','plays'],explanation:'一般现在时，注意第三人称单数动词加 s/es'}
      ]
    }
  },
  { id:2, categoryId:1, title:'现在进行时',
    content:'现在进行时表示现在正在进行的动作。\n\n结构：主语 + am/is/are + 动词-ing\n\n标志词：now, at the moment, listen!, look!',
    examples:[{en:'I am reading a book now.',cn:'我现在正在读书。'},{en:'Look! The boys are playing basketball.',cn:'看！男孩们正在打篮球。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'Listen! Someone ___ outside.',options:['sing','sings','is singing','sang'],answer:2,explanation:'Listen! 提示正在发生，用现在进行时'},
        {sentence:'The children ___ TV now.',options:['watch','watches','are watching','watching'],answer:2,explanation:'now 提示现在进行时'}
      ],
      fillBlank:[
        {sentence:'Look! It ___ (rain) outside.',answer:'is raining',explanation:'Look! 提示正在发生'},
        {sentence:'She ___ (wear) a red dress today.',answer:'is wearing',explanation:'今天正在穿'}
      ],
      passage:[
        {title:'At the Park',text:'Right now, I ___ (sit) on a bench. Some children ___ (play) soccer nearby. A girl ___ (run) after a ball. Two boys ___ (climb) the tree. Their mother ___ (call) them. A dog ___ (bark) loudly.',blanks:['am sitting','are playing','is running','are climbing','is calling','is barking'],explanation:'现在进行时 — 描述此刻正在发生的动作'}
      ]
    }
  },
  { id:3, categoryId:1, title:'一般过去时',
    content:'一般过去时表示过去某个时间发生的动作或存在的状态。\n\n结构：主语 + 动词过去式\n\n标志词：yesterday, last night, ...ago, in 2020',
    examples:[{en:'I visited my grandma yesterday.',cn:'我昨天看望了我奶奶。'},{en:'She was late for school this morning.',cn:'她今天早上上学迟到了。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'She ___ to Beijing last week.',options:['go','goes','went','gone'],answer:2,explanation:'last week 是过去时间，go → went'},
        {sentence:'They ___ at home last night.',options:['are','were','was','be'],answer:1,explanation:'last night 过去时间，主语 They 用 were'}
      ],
      fillBlank:[
        {sentence:'He ___ (buy) a new book yesterday.',answer:'bought',explanation:'buy → bought 不规则变化'},
        {sentence:'I ___ (see) her in the library just now.',answer:'saw',explanation:'just now 刚才，see → saw'}
      ],
      passage:[
        {title:'My Weekend',text:'Last weekend, I ___ (go) to the park with my family. We ___ (see) many beautiful flowers. My sister ___ (take) a lot of photos. My father ___ (buy) us ice cream. We ___ (sit) on the grass and ___ (have) a picnic. Later, we ___ (visit) my grandparents.',blanks:['went','saw','took','bought','sat','had','visited'],explanation:'一般过去时，注意不规则动词的过去式'},
        {title:'Yesterday',text:'Yesterday, Tom ___ (wake) up at 7:00. He ___ (eat) a quick breakfast. Then he ___ (ride) his bike to school. In class, he ___ (answer) a difficult question. The teacher ___ (feel) very pleased. After school, Tom ___ (do) his homework carefully.',blanks:['woke','ate','rode','answered','felt','did'],explanation:'过去时，多个不规则动词'}
      ]
    }
  },
  { id:4, categoryId:1, title:'一般将来时',
    content:'一般将来时表示将要发生的动作。\n\n结构：主语 + will + 动词原形 / 主语 + am/is/are going to + 动词原形\n\n标志词：tomorrow, next week, in the future',
    examples:[{en:'I will go to Beijing tomorrow.',cn:'我明天要去北京。'},{en:'She is going to study hard next term.',cn:'她下学期打算努力学习。'}],
    difficulty:2, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'They ___ a football match tomorrow.',options:['have','had','will have','are having'],answer:2,explanation:'tomorrow 是将来时间，用 will have'},
        {sentence:'We ___ visit our grandparents next Sunday.',options:['are','will','do','have'],answer:1,explanation:'next Sunday 用将来时'}
      ],
      fillBlank:[{sentence:'I ___ (call) you when I get home.',answer:'will call',explanation:'将来的动作，用 will call'}],
      passage:[
        {title:'My Summer Plan',text:'This summer, I ___ (visit) my grandparents. They ___ (be) very happy to see me. I ___ (stay) with them for two weeks. We ___ (go) fishing together. My grandpa ___ (teach) me how to swim. I think we ___ (have) a wonderful time.',blanks:['will visit','will be','will stay','will go','will teach','will have'],explanation:'一般将来时 will + 动词原形'},
        {title:'Next Week',text:'Next week, our class ___ (have) a sports meeting. Many students ___ (take) part in it. I ___ (run) in the 400-meter race. My friend ___ (jump) in the high jump. We ___ (practice) hard every day now. I believe we ___ (win) some prizes.',blanks:['will have','will take','will run','will jump','are practicing','will win'],explanation:'一般将来时和现在进行时的混合练习'}
      ]
    }
  },
  { id:5, categoryId:1, title:'现在完成时',
    content:'现在完成时表示过去发生的动作对现在造成的影响，或从过去持续到现在的动作。\n\n结构：主语 + have/has + 过去分词\n\n标志词：already, yet, ever, never, just, since, for',
    examples:[{en:'I have already finished my homework.',cn:'我已经完成了作业。'},{en:'She has never been to Shanghai.',cn:'她从未去过上海。'}],
    difficulty:3, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'I ___ already ___ my breakfast.',options:['have...eat','have...eaten','has...eaten','had...eaten'],answer:1,explanation:'现在完成时，I 用 have eaten'},
        {sentence:'___ you ever ___ a horse?',options:['Do...ride','Did...rode','Have...ridden','Will...ride'],answer:2,explanation:'ever 用于现在完成时'}
      ],
      fillBlank:[
        {sentence:'I ___ just ___ (finish) my homework.',answer:'have finished',explanation:'just 提示用现在完成时'},
        {sentence:'She ___ (live) here since 2020.',answer:'has lived',explanation:'since 2020 用现在完成时'}
      ],
      passage:[
        {title:'Changes in My Life',text:'I ___ (live) in this city since I was born. I ___ (be) to many places. I ___ already ___ (visit) the Great Wall twice. My English ___ (improve) a lot recently. I ___ (make) many new friends. But I ___ never ___ (travel) abroad.',blanks:['have lived','have been','have visited','has improved','have made','have travelled'],explanation:'现在完成时，含 have/has + 过去分词'}
      ]
    }
  },
  { id:6, categoryId:1, title:'过去进行时',
    content:'过去进行时表示过去某个时刻正在进行的动作。\n\n结构：主语 + was/were + 动词-ing\n\n标志词：at 8:00 yesterday, while, when',
    examples:[{en:'I was watching TV at 8:00 last night.',cn:'昨晚八点我正在看电视。'},{en:'She was doing her homework when I called her.',cn:'我给她打电话时她正在做作业。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'I ___ TV when she called.',options:['watch','was watching','watched','am watching'],answer:1,explanation:'when 从句用过去时，主句用过去进行时'},
        {sentence:'While I ___ my homework, my mother came in.',options:['do','was doing','did','am doing'],answer:1,explanation:'while 后接进行时'}
      ],
      fillBlank:[{sentence:'At 7:00 yesterday evening, I ___ (have) dinner.',answer:'was having',explanation:'昨晚 7 点正在吃饭'}],
      passage:[{title:'A Stormy Night',text:'Last night at 8:00, I ___ (do) my homework. My mother ___ (cook) in the kitchen. My father ___ (read) a newspaper. Outside, the wind ___ (blow) hard. It ___ (rain) heavily. Some people ___ (run) home quickly.',blanks:['was doing','was cooking','was reading','was blowing','was raining','were running'],explanation:'过去进行时 — was/were + 动词ing，描述过去某时刻正在进行的动作'}]
    }
  },

  // 语态
  { id:7, categoryId:2, title:'被动语态-一般现在时',
    content:'被动语态表示主语是动作的承受者。\n\n结构：主语 + am/is/are + 过去分词',
    examples:[{en:'English is spoken in many countries.',cn:'很多国家说英语。'},{en:'The classroom is cleaned every day.',cn:'教室每天被打扫。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'Rice ___ in the south of China.',options:['grow','is grown','grows','growing'],answer:1,explanation:'水稻被种植，is grown'},
        {sentence:'These computers ___ in China.',options:['make','are made','makes','making'],answer:1,explanation:'电脑被制造，are made'}
      ],
      fillBlank:[{sentence:'The room ___ (clean) every morning.',answer:'is cleaned',explanation:'房间被打扫，被动语态'}],
      passage:[{title:'How Paper Is Made',text:'Paper ___ (make) from wood. First, trees ___ (cut) down. Then the wood ___ (take) to a factory. At the factory, the wood ___ (break) into small pieces. Water ___ (add) to make pulp. Finally, the pulp ___ (press) and dried to form paper.',blanks:['is made','are cut','is taken','is broken','is added','is pressed'],explanation:'被动语态现在时 — be + 过去分词，主语是动作承受者'}]}
  },
  { id:8, categoryId:2, title:'被动语态-一般过去时',
    content:'结构：主语 + was/were + 过去分词',
    examples:[{en:'The bridge was built in 1990.',cn:'这座桥建于1990年。'},{en:'The window was broken by Tom.',cn:'窗户被汤姆打破了。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[{sentence:'The Great Wall ___ built over 2000 years ago.',options:['is','was','were','has'],answer:1,explanation:'was built'}],
      fillBlank:[{sentence:'The Eiffel Tower ___ (build) in 1889.',answer:'was built',explanation:'过去时被动语态'}],
      passage:[{title:'The Old Bridge',text:'The old bridge ___ (build) over 200 years ago. It ___ (design) by a famous architect. The stones ___ (carry) from a nearby mountain. The work ___ (finish) in only three years. The bridge ___ (use) by thousands of people every day. It was said that the bridge ___ (name) after a brave soldier.',blanks:['was built','was designed','were carried','was finished','is used','was named'],explanation:'被动语态过去时和现在时的混合练习'}]
    }
  },

  // 词类
  { id:9, categoryId:3, title:'名词基础',
    content:'名词表示人、事物、地点或抽象概念。\n\n重点：可数名词及其单复数、不可数名词、专有名词、名词所有格。\n\n可数名词复数变法：一般加 -s；s/x/ch/sh 结尾加 -es；辅音+y 变 y 为 i 加 -es；f/fe 结尾常变 ves；部分名词不规则变化，如 child→children。',
    examples:[{en:'I have two apples.',cn:'我有两个苹果。'},{en:'There is some water in the cup.',cn:'杯子里有一些水。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'There are five ___ in the room.',options:['child','childs','children','childrens'],answer:2,explanation:'child 复数是不规则变化 children'},
        {sentence:'There are many ___ on the farm.',options:['sheep','sheeps','sheepes','a sheep'],answer:0,explanation:'sheep 单复数同形'}
      ],
      fillBlank:[{sentence:'There are three ___ (box) on the table.',answer:'boxes',explanation:'box → boxes'}],
      passage:[{title:'In the Classroom',text:'There are many ___ (student) in the classroom. On the desk, there are several ___ (pencil) and two ___ (eraser). Three ___ (child) are reading books. The teacher has many ___ (box) of chalk. There are five ___ (sheep) in the picture on the wall.',blanks:['students','pencils','erasers','children','boxes','sheep'],explanation:'名词复数变化：一般加s，特殊变化 child→children, sheep→sheep'}]
    }
  },
  { id:10, categoryId:3, title:'形容词比较等级',
    content:'形容词有原级、比较级和最高级。比较两者时常用比较级，比较三者或以上时常用最高级。\n\n变化规则：单音节词多加 -er/-est；以辅音字母+y 结尾通常变 y 为 i 加 -er/-est；多音节词多用 more/most；特殊变化如 good→better→best, bad→worse→worst。',
    examples:[{en:'She is taller than me.',cn:'她比我高。'},{en:'This book is more interesting than that one.',cn:'这本书比那本更有趣。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'This coat is ___ than that one.',options:['cheap','cheaper','cheapest','more cheap'],answer:1,explanation:'than 提示比较级'},
        {sentence:'She is the ___ student in our class.',options:['good','better','best','well'],answer:2,explanation:'in our class 最高级用 best'}
      ],
      fillBlank:[{sentence:'This question is ___ (easy) than that one.',answer:'easier',explanation:'easy → easier'}],
      passage:[{title:'Who Is the Best?',text:'Tom is ___ (tall) than Jack. But Jack is ___ (strong) than Tom. Among all of us, Mary is the ___ (smart) student. She works ___ (hard) than anyone else. This math problem is the ___ (difficult) of all. My bag is ___ (heavy) than yours.',blanks:['taller','stronger','smartest','harder','most difficult','heavier'],explanation:'比较级和最高级混合练习 — 单音节加er/est，多音节加more/most'}]
    }
  },
  { id:11, categoryId:3, title:'代词基础',
    content:'人称代词主格 I/you/he/she/it/we/they，宾格 me/you/him/her/it/us/them，物主代词 my/mine/your/yours 等',
    examples:[{en:'I like her. She likes me.',cn:'我喜欢她。她喜欢我。'},{en:'This is my book. That is yours.',cn:'这是我的书。那是你的。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'___ is my friend. ___ name is Lily.',options:['She/She','Her/Her','She/Her','Her/She'],answer:2,explanation:'主语用 She，名词前用 Her'},
        {sentence:'Is this ___ pen? Yes, it\'s ___.',options:['your/mine','yours/my','your/my','yours/mine'],answer:0,explanation:'名词前用 your，后面无名词用 mine'}
      ],
      fillBlank:[{sentence:'Please give ___ (他) the book.',answer:'him',explanation:'介词后用宾格 him'}],
      passage:[{title:'A Letter to a Friend',text:'___ (我) want to tell you about ___ (我的) family. ___ (我们) live in a small town. ___ (我们的) house is near the river. ___ (你) should come to visit ___ (我们) someday. ___ (我) am sure ___ (你) will like it here.',blanks:['I','my','We','Our','You','us','I','you'],explanation:'人称代词主格、物主代词、宾格的综合练习'}]
    }
  },

  // 句型
  { id:12, categoryId:4, title:'There be 句型',
    content:'表示"某处有某物"：There is/are + 名词 + 地点\n\n就近原则：be 动词与最近的名词保持一致',
    examples:[{en:'There is a cat under the table.',cn:'桌子下面有一只猫。'},{en:'There are many students in the classroom.',cn:'教室里有很多学生。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'___ a book on the desk.',options:['There is','There are','It is','They are'],answer:0,explanation:'a book 是单数，用 There is'},
        {sentence:'There ___ a pen and two pencils in the box.',options:['is','are','have','has'],answer:0,explanation:'就近原则，a pen 是单数'}
      ],
      fillBlank:[{sentence:'___ ___ many people in the park yesterday.',answer:'There were',explanation:'过去时，people 复数用 There were'}],
      passage:[{title:'My Neighborhood',text:'___ (有) a big park near my home. ___ (有) many trees and flowers in it. ___ (有) also a small lake. ___ (有) some ducks on the lake. ___ (有) a bench under the big tree. ___ (有) many children playing every afternoon.',blanks:['There is','There are','There is','There are','There is','There are'],explanation:'There be 句型 — 就近原则，注意 There is/are 的选择'}]
    }
  },
  { id:13, categoryId:4, title:'宾语从句',
    content:'主句 + 连接词 + 从句（陈述语序）\n\n连接词：that(陈述句)，if/whether(是否)，特殊疑问词',
    examples:[{en:'I think (that) he is right.',cn:'我认为他是对的。'},{en:'Can you tell me where the station is?',cn:'你能告诉我车站在哪里吗？'}],
    difficulty:3, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'I don\'t know ___ he will come.',options:['that','if','what','which'],answer:1,explanation:'是否来，用 if'},
        {sentence:'Can you tell me ___?',options:['where is the bank','where the bank is','the bank is where','where was the bank'],answer:1,explanation:'宾语从句用陈述语序'}
      ],
      fillBlank:[{sentence:'I wonder ___ she will come. (是否)',answer:'if',explanation:'if 或 whether 表示"是否"'}],
      passage:[{title:'What I Think',text:'I think ___ English is very useful. I don\'t know ___ I can pass the exam. My teacher often asks me ___ I have finished my homework. Can you tell me ___ the library is? I wonder ___ he will come tomorrow. I believe ___ hard work pays off.',blanks:['that','if','whether','where','if','that'],explanation:'宾语从句 — that, if/whether, 特殊疑问词的用法'}]
    }
  },
  { id:14, categoryId:4, title:'状语从句',
    content:'时间(when/while/before/after)，条件(if/unless)，原因(because/since)\n\n主将从现：主句将来时，从句一般现在时',
    examples:[{en:'If it rains, I will stay at home.',cn:'如果下雨我就待在家。'},{en:'I was reading when she came in.',cn:'她进来时我正在读书。'}],
    difficulty:3, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'If it ___ tomorrow, we won\'t go hiking.',options:['rain','rains','will rain','rained'],answer:1,explanation:'if 从句用一般现在时'},
        {sentence:'She didn\'t come to school ___ she was sick.',options:['so','because','but','and'],answer:1,explanation:'because 表示原因'}
      ],
      fillBlank:[{sentence:'He will be happy if he ___ (get) a gift.',answer:'gets',explanation:'if 从句用一般现在时'}],
      passage:[{title:'Planning a Trip',text:'If it ___ (not rain) tomorrow, we ___ (go) hiking. When we ___ (arrive) at the mountain, we ___ (start) climbing. I ___ (stay) home if I ___ (feel) sick. Unless you ___ (hurry) up, we ___ (miss) the bus.',blanks:["doesn't rain","will go","arrive","will start","will stay","feel","hurry","will miss"],explanation:'状语从句 — 主将从现原则，if/when/unless 从句用一般现在时'}]
    }
  },

  // 词汇用法
  { id:15, categoryId:5, title:'情态动词',
    content:'can/could(能)，must(必须)，may/might(可能)，should(应该)\n\n情态动词后接动词原形',
    examples:[{en:'I can swim.',cn:'我会游泳。'},{en:'You must finish your homework first.',cn:'你必须先完成作业。'}],
    difficulty:2, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'You ___ cross the street when the light is red.',options:["mustn't",'can','should',"needn't"],answer:0,explanation:'红灯时禁止通行，mustn\'t'},
        {sentence:'___ I borrow your pen?',options:['Must','Need','May','Do'],answer:2,explanation:'请求许可用 May I'}
      ],
      fillBlank:[{sentence:'You ___ (应该) listen to the teacher.',answer:'should',explanation:'表示建议用 should'}],
      passage:[{title:'School Rules',text:'Every student ___ (必须) wear school uniform. You ___ (不允许) eat in the classroom. You ___ (应该) hand in homework on time. You ___ (不能) use mobile phones in class. ___ I ___ (可以) borrow a pen? We ___ (必须) respect our teachers.',blanks:['must','must not','should','cannot','May borrow','must'],explanation:'情态动词 — must(必须), should(应该), can/may(可以), mustn\'t(禁止)'}]
    }
  },
  { id:16, categoryId:5, title:'动词不定式',
    content:'to + 动词原形，可作宾语(want to do)、目的状语、宾语补足语等\n\nIt\'s + adj. + to do sth.',
    examples:[{en:'I want to be a teacher.',cn:'我想成为一名老师。'},{en:'It\'s important to learn English well.',cn:'学好英语很重要。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'It\'s important ___ English well.',options:['learn','to learn','learning','learned'],answer:1,explanation:'It\'s + adj. + to do'},
        {sentence:'She wants ___ a doctor.',options:['be','to be','being','is'],answer:1,explanation:'want to do sth.'}
      ],
      fillBlank:[{sentence:'He decided ___ (study) harder.',answer:'to study',explanation:'decide to do sth.'}],
      passage:[{title:'My Dream',text:'I want ___ (become) a doctor when I grow up. It\'s important ___ (study) hard now. My parents encourage me ___ (follow) my dream. I plan ___ (go) to a good medical school. It\'s not easy ___ (achieve) this goal. I hope ___ (help) many people in the future.',blanks:['to become','to study','to follow','to go','to achieve','to help'],explanation:'动词不定式 to do — 作宾语(want to do)、目的、宾语补足语，It\'s + adj + to do'}]
    }
  },

  // 时态补充
  { id:17, categoryId:1, title:'过去将来时',
    content:'过去将来时表示从过去某个时间看将要发生的动作。\n\n结构：主语 + would + 动词原形 / was/were going to + 动词原形\n\n常用在宾语从句中，主句是过去时，从句表示将来。',
    examples:[{en:'He said he would come the next day.',cn:'他说他第二天会来。'},{en:'I knew she was going to be late.',cn:'我知道她会迟到。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'He told me he ___ help me.',options:['will','would','is going to','can'],answer:1,explanation:'主句是过去时，从句用过去将来时 would'},
        {sentence:'She said she ___ visit her grandma the next week.',options:['is going to','was going to','will','goes'],answer:1,explanation:'过去将来时 was/were going to'}
      ],
      fillBlank:[{sentence:'I thought you ___ (come) to the party.',answer:'would come',explanation:'thought 是过去时，从句用 would come'}],
      passage:[{title:'What He Promised',text:'Tom said he ___ (call) me later. He promised he ___ (finish) his homework before dinner. He told me he ___ (not be) late again. I believed he ___ (keep) his word.',blanks:['would call','would finish','would not be','would keep'],explanation:'过去将来时 — 过去说的将来动作，would + 动词原形'}]
    }
  },
  { id:18, categoryId:1, title:'过去完成时',
    content:'过去完成时表示在过去某个时间之前已经完成的动作。\n\n结构：主语 + had + 过去分词\n\n标志词：by the end of..., before, after, when',
    examples:[{en:'I had finished my homework before dinner.',cn:'我晚饭前已经完成了作业。'},{en:'She had left when I arrived.',cn:'我到的时候她已经走了。'}],
    difficulty:3, grade:9,
    questions:{
      multipleChoice:[
        {sentence:'By the time I got to the station, the train ___.',options:['left','has left','had left','was leaving'],answer:2,explanation:'got 是过去时，火车离开在之前，用过去完成时 had left'},
        {sentence:'She ___ never ___ such a beautiful place before.',options:['has...seen','had...seen','was...seeing','did...see'],answer:1,explanation:'由 before 可知用过去完成时 had seen'}
      ],
      fillBlank:[{sentence:'I realized I ___ (lose) my key.',answer:'had lost',explanation:'realized 是过去时，丢钥匙在之前，用 had lost'}],
      passage:[{title:'A Surprising Day',text:'When I got home, I realized I ___ (forget) to lock the door. My mother ___ already ___ (cook) dinner. My brother ___ (finish) his homework before I arrived. I ___ never ___ (feel) so tired before.',blanks:['had forgotten','had cooked','had finished','had felt'],explanation:'过去完成时 — 过去的过去，had + 过去分词'}]
    }
  },

  // 词类补充
  { id:19, categoryId:3, title:'数词基础',
    content:'基数词 (one, two...) 表示数量；序数词 (first, second...) 表示顺序。\n\n基数词特殊变法：13-19 加 -teen；20-90加 -ty；百 hundred，千 thousand\n序数词：一般加 -th；特殊 first, second, third, fifth, eighth, ninth, twelfth',
    examples:[{en:'There are forty students in our class.',cn:'我们班有四十个学生。'},{en:'He finished second in the race.',cn:'他在比赛中获得第二名。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'There are ___ students in our class.',options:['fourty','forty','fourteen','fourteenth'],answer:1,explanation:'40 的正确拼写是 forty，注意没有 u'},
        {sentence:'My birthday is on the ___ of May.',options:['nineth','ninth','nine','nineteen'],answer:1,explanation:'第九是 ninth，nine去掉e加th'}
      ],
      fillBlank:[{sentence:'December is the ___ (12) month of the year.',answer:'twelfth',explanation:'第十二是 twelfth，特殊变化'}],
      passage:[{title:'My School',text:'There are ___ (55) students in our class. I sit in the ___ (3) row. The ___ (1) lesson is English. We have ___ (8) subjects this term. My classroom is on the ___ (4) floor.',blanks:['fifty-five','third','first','eight','fourth'],explanation:'基数词和序数词的综合练习'}]
    }
  },
  { id:20, categoryId:3, title:'冠词基础',
    content:'不定冠词 a/an 表泛指；定冠词 the 表特指。\n\na 用于辅音音素开头的词前，an 用于元音音素开头的词前。\n\nthe 用于：特指某人/物、第二次提到、独一无二的事物、序数词/最高级前。',
    examples:[{en:'I have a book. The book is interesting.',cn:'我有一本书。这本书很有趣。'},{en:'She is an honest girl.',cn:'她是个诚实的女孩。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'I have ___ useful book.',options:['a','an','the','/'],answer:0,explanation:'useful 以辅音音素 /j/ 开头，用 a'},
        {sentence:'___ sun rises in the east.',options:['A','An','The','/'],answer:2,explanation:'太阳是独一无二的，用 the'}
      ],
      fillBlank:[{sentence:'She is ___ honest girl.',answer:'an',explanation:'honest 以元音音素开头，用 an'}],
      passage:[{title:'My Day',text:'I have ___ apple and ___ banana for breakfast. After breakfast, I go to ___ school by ___ bus. In the evening, I read ___ interesting book. ___ moon is very bright tonight.',blanks:['an','a','/','/','an','The'],explanation:'冠词 a/an/the 的综合练习，注意零冠词的情况'}]
    }
  },
  { id:21, categoryId:3, title:'介词基础',
    content:'时间介词：at(时刻), on(某天), in(年月季节)；方位介词：in(在…里), on(在…上), under(在…下), behind(在…后), between(在…之间)；方式介词：by(乘/通过), with(用)',
    examples:[{en:'I get up at 7:00 in the morning.',cn:'我早上七点起床。'},{en:'The book is on the desk.',cn:'书在桌子上。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'I often go to school ___ bus.',options:['by','on','in','with'],answer:0,explanation:'by bus = 乘公交车，by + 交通工具'},
        {sentence:'The cat is ___ the table.',options:['in','on','under','between'],answer:2,explanation:'猫在桌子下面，用 under'}
      ],
      fillBlank:[{sentence:'I was born ___ July, 2008.',answer:'in',explanation:'月份前用 in'}],
      passage:[{title:'My Room',text:'There is a desk ___ (在…旁边) the window. The chair is ___ (在…前面) the desk. My bag is ___ (在…上) the chair. Some books are ___ (在…里) the desk drawer. I do my homework ___ (在) night.',blanks:['beside','in front of','on','in','at'],explanation:'方位介词和时间介词的综合练习'}]
    }
  },

  // 句型补充
  { id:22, categoryId:4, title:'定语从句',
    content:'定语从句修饰名词或代词。\n\n关系代词：who(人/主语), whom(人/宾语), which(物), that(人/物)\n关系副词：when(时间), where(地点), why(原因)',
    examples:[{en:'The book that I bought is very interesting.',cn:'我买的那本书很有趣。'},{en:'Do you know the girl who is singing?',cn:'你认识那个正在唱歌的女孩吗？'}],
    difficulty:3, grade:9,
    questions:{
      multipleChoice:[
        {sentence:'This is the book ___ I bought yesterday.',options:['who','which','whom','whose'],answer:1,explanation:'book 是物，用 which/that'},
        {sentence:'The man ___ is wearing a hat is my uncle.',options:['which','who','whom','what'],answer:1,explanation:'man 是人，作主语用 who/that'}
      ],
      fillBlank:[{sentence:'This is the school ___ I studied three years ago. (在那里)',answer:'where',explanation:'地点用 where = in which'}],
      passage:[{title:'My Friends',text:'The boy ___ (who/which) sits next to me is Tom. The girl ___ (who/which) you met yesterday is my sister. The book ___ (that/who) I borrowed from the library is very interesting. This is the reason ___ (why/which) I like English.',blanks:['who','who','that','why'],explanation:'定语从句 — 选择正确的关系代词或关系副词'}]
    }
  },
  { id:23, categoryId:4, title:'感叹句',
    content:'What + (a/an) + 形容词 + 名词 + (主语+谓语)!\nHow + 形容词/副词 + (主语+谓语)!\n\nWhat 后接名词，How 后接形容词或副词。',
    examples:[{en:'What a beautiful flower it is!',cn:'多漂亮的花啊！'},{en:'How beautiful the flower is!',cn:'这花多漂亮啊！'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'___ beautiful the girl is!',options:['What','What a','How','How a'],answer:2,explanation:'beautiful 是形容词，用 How'},
        {sentence:'___ wonderful movie it is!',options:['What','What a','How','How a'],answer:1,explanation:'movie 是可数名词单数，用 What a'}
      ],
      fillBlank:[{sentence:'___ ___ exciting game it is!',answer:'What an',explanation:'exciting 以元音开头，用 What an'}],
      passage:[{title:'Expressing Feelings',text:'___ (多么) a beautiful day! ___ (多么) blue the sky is! ___ (多么) fresh the air smells! ___ (多么) happy the children are! ___ (多么) a wonderful world!',blanks:['What','How','How','How','What'],explanation:'感叹句 — What 接名词，How 接形容词/副词'}]
    }
  },
  { id:24, categoryId:4, title:'祈使句',
    content:'祈使句表示命令、请求或建议。\n\n肯定：动词原形 + 其他\n否定：Don\'t + 动词原形\nLet\'s + 动词原形（表示建议）',
    examples:[{en:'Open the door, please.',cn:'请开门。'},{en:'Don\'t be late.',cn:'别迟到。'}],
    difficulty:1, grade:7,
    questions:{
      multipleChoice:[
        {sentence:'___ in the library.',options:['Don\'t talk','Not talk','No talk','Don\'t talking'],answer:0,explanation:'祈使句否定用 Don\'t + 动词原形'},
        {sentence:'___ go to the park together!',options:['Let\'s','Let we','Let us to','We let'],answer:0,explanation:'Let\'s + 动词原形表示建议'}
      ],
      fillBlank:[{sentence:'Please ___ (open) the window.',answer:'open',explanation:'祈使句肯定用动词原形'}],
      passage:[{title:'Classroom Rules',text:'___ (not run) in the hallway. ___ (keep) the classroom clean. ___ (not eat) in class. ___ (listen) to the teacher carefully. ___ (let\'s, be) quiet now.',blanks:["Don't run",'Keep',"Don't eat",'Listen',"Let's be"],explanation:'祈使句 — 肯定用动词原形，否定用 Don\'t + 动词原形'}]
    }
  },

  // 综合类
  { id:25, categoryId:5, title:'主谓一致',
    content:'谓语动词要和主语在人称和数上保持一致。\n\n关键原则：语法一致(单复对应)、意义一致(集合名词)、就近一致(neither...nor..., either...or..., there be)',
    examples:[{en:'Everyone in our class likes English.',cn:'我们班每个人都喜欢英语。'},{en:'Neither he nor I am right.',cn:'他和我都不对。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'Each of the students ___ a new book.',options:['have','has','are having','were having'],answer:1,explanation:'each 作主语，谓语用单数 has'},
        {sentence:'There ___ a pen and two books on the desk.',options:['is','are','have','has'],answer:0,explanation:'There be 就近原则，a pen 是单数用 is'}
      ],
      fillBlank:[{sentence:'Neither Tom nor his friends ___ (like) math.',answer:'like',explanation:'neither...nor 就近原则，friends 是复数用 like'}],
      passage:[{title:'Our Class',text:'Everyone in our class ___ (be) friendly. Each of us ___ (have) a dream. The team ___ (be) practicing hard these days. Neither the students nor the teacher ___ (know) the answer yet.',blanks:['is','has','is','knows'],explanation:'主谓一致 — 不定代词单数、集合名词、就近原则'}]
    }
  },
  { id:26, categoryId:5, title:'动名词',
    content:'动名词由动词+ing构成，具有名词性质，可作主语、宾语、表语。\n\n常见搭配：enjoy/finish/mind/practice/suggest doing sth.\n介词后接动名词：be good at doing, be interested in doing, thank you for doing',
    examples:[{en:'I enjoy reading books.',cn:'我喜欢读书。'},{en:'Thank you for helping me.',cn:'谢谢你帮我。'}],
    difficulty:2, grade:8,
    questions:{
      multipleChoice:[
        {sentence:'I enjoy ___ to music.',options:['listen','to listen','listening','listened'],answer:2,explanation:'enjoy 后接动名词 listening'},
        {sentence:'He is good at ___ basketball.',options:['play','plays','played','playing'],answer:3,explanation:'介词 at 后接动名词 playing'}
      ],
      fillBlank:[{sentence:'Would you mind ___ (open) the door?',answer:'opening',explanation:'mind 后接动名词 opening'}],
      passage:[{title:'My Hobbies',text:'I enjoy ___ (read) books in my free time. I am interested in ___ (learn) English. My brother practices ___ (play) the piano every day. We look forward to ___ (visit) the museum.',blanks:['reading','learning','playing','visiting'],explanation:'动名词 — 动词/介词后接 doing'}]
    }
  },

  // 时态细分
  { id:27, categoryId:1, title:'be 动词一般现在时', content:'am/is/are 表示现在的身份、状态、位置或性质。I 用 am，第三人称单数用 is，you 和复数主语用 are。', difficulty:1, grade:null },
  { id:28, categoryId:1, title:'be 动词一般过去时', content:'was/were 表示过去的身份、状态、位置或性质。I/he/she/it 用 was，you/we/they 和复数主语用 were。', difficulty:1, grade:null },
  { id:29, categoryId:1, title:'There be 的时态变化', content:'There be 可随时间变化为 there is/are, there was/were, there will be 等；be 动词通常与后面最近的名词保持一致。', difficulty:2, grade:null },
  { id:30, categoryId:1, title:'现在完成时 since / for', content:'since 接时间点或从句，for 接一段时间；二者都常与现在完成时连用，表示动作或状态持续到现在。', difficulty:3, grade:null },
  { id:31, categoryId:1, title:'have been to / have gone to / have been in', content:'have been to 表示去过已回来；have gone to 表示去了未回来；have been in 表示待在某地一段时间。', difficulty:3, grade:null },
  { id:32, categoryId:1, title:'延续性动词与非延续性动词', content:'和 for/since 连用时通常使用延续性动词或状态表达，如 buy 需转换为 have，die 转换为 be dead。', difficulty:3, grade:null },
  { id:33, categoryId:1, title:'一般过去时动词变化', content:'规则动词一般加 -ed；以 e 结尾加 -d；辅音字母+y 变 y 为 i 加 -ed；部分动词为不规则变化。', difficulty:2, grade:null },
  { id:34, categoryId:1, title:'used to do', content:'used to do 表示过去常常做某事而现在不一定如此，后接动词原形。', difficulty:2, grade:null },
  { id:35, categoryId:1, title:'be going to 与 will 区分', content:'be going to 常表示计划、打算或有迹象将要发生；will 常表示临时决定、预测或意愿。', difficulty:2, grade:null },
  { id:36, categoryId:1, title:'现在进行时表将来', content:'go, come, leave, arrive, start 等表示位置移动或安排的动词，可用现在进行时表示较近的计划或安排。', difficulty:2, grade:null },

  // 语态细分
  { id:37, categoryId:2, title:'被动语态-一般将来时', content:'结构为 will be done 或 be going to be done，表示将来某事会被完成或处理。', difficulty:3, grade:null },
  { id:38, categoryId:2, title:'被动语态-现在完成时', content:'结构为 have/has been done，表示动作已经被完成并对现在有影响。', difficulty:3, grade:null },
  { id:39, categoryId:2, title:'含情态动词的被动语态', content:'结构为 情态动词 + be + 过去分词，如 can be done, must be done, should be done。', difficulty:3, grade:null },
  { id:40, categoryId:2, title:'被动语态中的 by 短语', content:'by 短语用于说明动作执行者；当执行者不明确或不重要时，by 短语常可省略。', difficulty:2, grade:null },
  { id:41, categoryId:2, title:'主动语态与被动语态转换', content:'主动句宾语变被动句主语，谓语变为 be + 过去分词，主动句主语可放在 by 后。', difficulty:3, grade:null },
  { id:42, categoryId:2, title:'感官/使役动词被动还原 to', content:'make, see, hear, watch 等在主动语态中可接省略 to 的不定式，变被动时通常要还原 to。', difficulty:3, grade:null },

  // 名词拆分
  { id:43, categoryId:3, title:'可数名词与不可数名词', content:'可数名词有单复数形式，可直接与数词连用；不可数名词通常无复数形式，需借助量词表达数量。', difficulty:1, grade:null },
  { id:44, categoryId:3, title:'名词复数规则变化', content:'一般加 -s；以 s, x, ch, sh 结尾加 -es；辅音字母+y 变 y 为 i 加 -es；部分 f/fe 结尾变 ves。', difficulty:1, grade:null },
  { id:45, categoryId:3, title:'名词复数不规则变化', content:'常见不规则复数包括 child-children, man-men, woman-women, foot-feet, tooth-teeth, mouse-mice, sheep-sheep。', difficulty:2, grade:null },
  { id:46, categoryId:3, title:'名词所有格', content:'名词所有格表示所属关系，常见形式有 Tom\'s, students\', children\'s，也可用 of 表示所属。', difficulty:2, grade:null },
  { id:47, categoryId:3, title:'不可数名词数量表达', content:'不可数名词表达数量时常用 a piece of, a bottle of, a cup of, a pair of 等量词结构。', difficulty:2, grade:null },

  // 代词拆分
  { id:48, categoryId:3, title:'人称代词主格/宾格', content:'主格作主语，如 I, he, she, we, they；宾格作宾语或介词宾语，如 me, him, her, us, them。', difficulty:1, grade:null },
  { id:49, categoryId:3, title:'物主代词', content:'形容词性物主代词后接名词，如 my book；名词性物主代词相当于物主代词加名词，如 mine。', difficulty:1, grade:null },
  { id:50, categoryId:3, title:'反身代词', content:'反身代词表示动作回到主语自身，如 myself, yourself, himself, herself, ourselves, themselves。', difficulty:2, grade:null },
  { id:51, categoryId:3, title:'指示代词', content:'this/that 指单数或不可数，these/those 指复数；this/these 较近，that/those 较远。', difficulty:1, grade:null },
  { id:52, categoryId:3, title:'不定代词', content:'some, any, no, every 可与 body, one, thing 组合；不定代词作主语时谓语通常用单数。', difficulty:2, grade:null },
  { id:53, categoryId:3, title:'one / it / that 的替代用法', content:'it 指前文同一个事物；one 指同类中的一个；that 可替代前文提到的单数名词或不可数名词以避免重复。', difficulty:3, grade:null },
  { id:54, categoryId:3, title:'both / either / neither / all / none', content:'both 表两者都；either 表两者之一；neither 表两者都不；all 表三者或以上都；none 表三者或以上都不。', difficulty:3, grade:null },

  // 形容词副词拆分
  { id:55, categoryId:3, title:'形容词作定语/表语', content:'形容词可放在名词前作定语，也可放在 be/look/sound/feel 等系动词后作表语。', difficulty:1, grade:null },
  { id:56, categoryId:3, title:'副词的修饰功能', content:'副词可修饰动词、形容词、副词或整个句子，常表示方式、程度、频率、时间和地点。', difficulty:2, grade:null },
  { id:57, categoryId:3, title:'副词比较级', content:'副词比较级用于比较两个动作或状态的程度，常与 than 连用。短副词常加 -er，如 fast→faster；以 -ly 结尾的副词多用 more，如 more carefully。', difficulty:2, grade:null },
  { id:58, categoryId:3, title:'副词最高级', content:'副词最高级用于三者或以上动作程度的比较。短副词常加 -est，如 fastest；以 -ly 结尾的副词多用 most，如 most carefully。副词最高级前的 the 有时可省略。', difficulty:2, grade:null },
  { id:59, categoryId:3, title:'原级比较 as...as', content:'as + 形容词/副词原级 + as 表示和……一样；not as/so...as 表示不如……。', difficulty:2, grade:null },
  { id:60, categoryId:3, title:'-ed / -ing 形容词', content:'-ed 形容词多描述人的感受，如 interested；-ing 形容词多描述事物特征，如 interesting。', difficulty:2, grade:null },

  // 介词拆分
  { id:61, categoryId:3, title:'时间介词', content:'at 用于具体时刻；on 用于具体某天；in 用于年、月、季节、上午下午晚上；since/for 常与完成时连用。', difficulty:1, grade:null },
  { id:62, categoryId:3, title:'地点方位介词', content:'常见地点方位介词包括 in, on, under, behind, between, among, across, through, beside, near 等。', difficulty:1, grade:null },
  { id:63, categoryId:3, title:'方式介词', content:'by 表方式或交通方式；with 表使用工具或伴随；in 可表示语言、颜色、方式等。', difficulty:2, grade:null },
  { id:64, categoryId:3, title:'固定介词搭配', content:'常见搭配包括 be good at, be interested in, be proud of, be afraid of, be different from, look forward to。', difficulty:2, grade:null },

  // 数词拆分
  { id:65, categoryId:3, title:'基数词', content:'基数词表示数量，如 one, two, three；hundred, thousand, million 与具体数字连用时通常不加 s。', difficulty:1, grade:null },
  { id:66, categoryId:3, title:'序数词', content:'序数词表示顺序，如 first, second, third；一般加 -th，注意 fifth, eighth, ninth, twelfth 等特殊形式。', difficulty:1, grade:null },
  { id:67, categoryId:3, title:'分数、小数、百分数', content:'分数通常分子用基数词、分母用序数词；百分数用 percent；小数按数字逐个读。', difficulty:3, grade:null },
  { id:68, categoryId:3, title:'年月日时间表达', content:'日期常用序数词表达；年份、月份、星期和具体时刻搭配不同介词；时间读法可用 past/to。', difficulty:2, grade:null },
  { id:69, categoryId:3, title:'hundreds of 与 two hundred', content:'具体数字 + hundred/thousand/million 时不加 s；表示概数时用 hundreds of, thousands of。', difficulty:2, grade:null },

  // 冠词拆分
  { id:70, categoryId:3, title:'不定冠词 a / an', content:'a 用于辅音音素前，an 用于元音音素前；注意 useful 发 /j/ 用 a，hour/honest 元音开头用 an。', difficulty:1, grade:null },
  { id:71, categoryId:3, title:'定冠词 the', content:'the 用于特指、再次提到、独一无二事物、序数词和最高级前，以及部分固定表达中。', difficulty:1, grade:null },
  { id:72, categoryId:3, title:'零冠词', content:'三餐、球类、学科、交通方式 by bus、go to school 等表达中常不用冠词。', difficulty:2, grade:null },
  { id:73, categoryId:3, title:'冠词固定搭配', content:'常见搭配包括 in the morning, at night, go to school, play the piano, play basketball 等。', difficulty:2, grade:null },

  // 句子种类
  { id:74, categoryId:4, title:'陈述句', content:'陈述句用于说明事实、观点或状态，语序通常为主语在前、谓语在后。', difficulty:1, grade:null },
  { id:75, categoryId:4, title:'一般疑问句', content:'一般疑问句通常可用 yes/no 回答，常将 be 动词、助动词或情态动词提前。', difficulty:1, grade:null },
  { id:76, categoryId:4, title:'特殊疑问句', content:'特殊疑问句由 what, who, where, when, why, how 等疑问词引导，询问具体信息。', difficulty:1, grade:null },
  { id:77, categoryId:4, title:'选择疑问句', content:'选择疑问句用 or 提供选择，回答时通常选择其中一项，不用 yes/no。', difficulty:2, grade:null },
  { id:78, categoryId:4, title:'反意疑问句', content:'反意疑问句通常遵循前肯后否、前否后肯，并保持人称、时态和助动词一致。', difficulty:3, grade:null },

  // 简单句基本句型
  { id:79, categoryId:4, title:'主语 + 谓语', content:'主语 + 不及物动词构成基本句型，如 Birds fly。', difficulty:1, grade:null },
  { id:80, categoryId:4, title:'主语 + 谓语 + 宾语', content:'主语 + 及物动词 + 宾语构成常见句型，如 I like English。', difficulty:1, grade:null },
  { id:81, categoryId:4, title:'主语 + 系动词 + 表语', content:'系动词如 be, look, sound, feel, become 后接表语说明主语状态或性质。', difficulty:1, grade:null },
  { id:82, categoryId:4, title:'主语 + 谓语 + 间接宾语 + 直接宾语', content:'双宾语结构中间接宾语多指人，直接宾语多指物，如 give me a book。', difficulty:2, grade:null },
  { id:83, categoryId:4, title:'主语 + 谓语 + 宾语 + 宾补', content:'宾语补足语补充说明宾语的状态、身份或动作，如 make me happy, ask him to go。', difficulty:2, grade:null },

  // 宾语从句拆分
  { id:84, categoryId:4, title:'that 引导宾语从句', content:'that 引导陈述意义的宾语从句，口语中常可省略，从句使用陈述语序。', difficulty:2, grade:null },
  { id:85, categoryId:4, title:'if / whether 引导宾语从句', content:'if/whether 表示是否，引导一般疑问句意义的宾语从句，从句用陈述语序。', difficulty:3, grade:null },
  { id:86, categoryId:4, title:'疑问词引导宾语从句', content:'what, where, when, why, how 等可引导特殊疑问句意义的宾语从句，从句用陈述语序。', difficulty:3, grade:null },
  { id:87, categoryId:4, title:'宾语从句陈述语序', content:'宾语从句中疑问词后不用疑问语序，应为主语 + 谓语，如 where he lives。', difficulty:3, grade:null },
  { id:88, categoryId:4, title:'宾语从句时态一致', content:'主句为现在时，从句按实际情况使用时态；主句为过去时，从句通常使用相应过去时态。', difficulty:3, grade:null },
  { id:89, categoryId:4, title:'宾语从句否定转移', content:'think, believe, suppose 等后接宾语从句时，否定常转移到主句，如 I don\'t think he is right。', difficulty:3, grade:null },

  // 状语从句拆分
  { id:90, categoryId:4, title:'时间状语从句', content:'由 when, while, before, after, until, as soon as 等引导，表示动作发生的时间关系。', difficulty:2, grade:null },
  { id:91, categoryId:4, title:'条件状语从句', content:'由 if, unless 等引导，表示条件；常见考点是主将从现。', difficulty:2, grade:null },
  { id:92, categoryId:4, title:'原因状语从句', content:'由 because, since, as 等引导，表示原因；because 不能与 so 连用。', difficulty:2, grade:null },
  { id:93, categoryId:4, title:'结果状语从句', content:'常由 so...that 或 such...that 引导，表示结果。', difficulty:3, grade:null },
  { id:94, categoryId:4, title:'目的状语从句', content:'常由 so that, in order that 引导，表示目的，从句中常出现 can/could/may 等情态动词。', difficulty:3, grade:null },
  { id:95, categoryId:4, title:'让步状语从句', content:'由 although, though, even though 等引导，表示让步；although/though 不与 but 连用。', difficulty:3, grade:null },
  { id:96, categoryId:4, title:'比较状语从句', content:'由 than, as...as 等引导，用于比较人、物或动作的程度。', difficulty:2, grade:null },
  { id:97, categoryId:4, title:'主将从现', content:'在时间、条件状语从句中，主句用将来时，从句常用一般现在时表示将来。', difficulty:2, grade:null },

  // 定语从句拆分
  { id:98, categoryId:4, title:'who / that 指人', content:'先行词指人时，关系代词可用 who 或 that，在从句中可作主语或宾语。', difficulty:3, grade:null },
  { id:99, categoryId:4, title:'which / that 指物', content:'先行词指物时，关系代词可用 which 或 that，在从句中可作主语或宾语。', difficulty:3, grade:null },
  { id:100, categoryId:4, title:'whose 表所属', content:'whose 表示所属关系，后接名词，可指人也可指物。', difficulty:3, grade:null },
  { id:101, categoryId:4, title:'where / when / why 引导定语从句', content:'where 指地点，when 指时间，why 指原因；它们在从句中作状语。', difficulty:3, grade:null },
  { id:102, categoryId:4, title:'关系代词作主语/宾语', content:'关系代词在定语从句中可作主语或宾语；作宾语时常可省略。', difficulty:3, grade:null },
  { id:103, categoryId:4, title:'只能用 that 的常见情况', content:'先行词被最高级、序数词、all, everything, nothing 等修饰或先行词既有人又有物时，常用 that。', difficulty:3, grade:null },

  // 主谓一致拆分
  { id:104, categoryId:5, title:'单复数一致', content:'谓语动词要与主语在人称和数上保持一致，单数主语用单数谓语，复数主语用复数谓语。', difficulty:1, grade:null },
  { id:105, categoryId:5, title:'不定代词作主语', content:'someone, everyone, anything, nothing 等不定代词作主语时，谓语通常用单数。', difficulty:2, grade:null },
  { id:106, categoryId:5, title:'each / every / either / neither 作主语', content:'each, every, either, neither 作主语时通常看作单数，谓语动词用单数。', difficulty:2, grade:null },
  { id:107, categoryId:5, title:'There be 就近原则', content:'There be 句型中 be 动词通常与其后最近的名词保持数的一致。', difficulty:2, grade:null },
  { id:108, categoryId:5, title:'either...or / neither...nor 就近原则', content:'either...or, neither...nor, not only...but also 连接主语时，谓语常与最近的主语一致。', difficulty:3, grade:null },
  { id:109, categoryId:5, title:'集合名词作主语', content:'family, team, class 等集合名词强调整体时谓语用单数，强调成员时可用复数。', difficulty:3, grade:null },

  // 动词基础
  { id:110, categoryId:5, title:'动词分类概览', content:'实义动词表示具体动作或状态；be 动词表示状态；助动词帮助构成疑问、否定、时态；情态动词表达能力、许可、义务或推测。', difficulty:1, grade:null },
  { id:111, categoryId:5, title:'动词三单', content:'一般现在时中，主语为第三人称单数时，实义动词通常加 -s 或 -es。', difficulty:1, grade:null },
  { id:112, categoryId:5, title:'动词过去式', content:'动词过去式用于一般过去时，分规则变化和不规则变化。', difficulty:1, grade:null },
  { id:113, categoryId:5, title:'动词过去分词', content:'过去分词用于完成时和被动语态，规则形式通常与过去式相同，不规则形式需单独记忆。', difficulty:2, grade:null },
  { id:114, categoryId:5, title:'动词 -ing 形式', content:'动词 -ing 形式用于进行时、动名词和现在分词，拼写变化包括去 e、双写尾字母等。', difficulty:2, grade:null },

  // 情态动词拆分
  { id:115, categoryId:5, title:'can / could', content:'can 表示能力、许可或可能；could 可表示过去能力，也可用于更委婉的请求。', difficulty:1, grade:null },
  { id:116, categoryId:5, title:'may / might', content:'may 表示许可或可能；might 语气更不确定，也可用于委婉表达。', difficulty:2, grade:null },
  { id:117, categoryId:5, title:'must / have to', content:'must 强调主观看法上的必须；have to 强调客观条件导致的不得不。', difficulty:2, grade:null },
  { id:118, categoryId:5, title:'should / ought to', content:'should 和 ought to 表示建议、责任或应该做某事，后接动词原形。', difficulty:2, grade:null },
  { id:119, categoryId:5, title:'need', content:'need 可作情态动词或实义动词；作情态动词时多用于否定句和疑问句。', difficulty:3, grade:null },
  { id:120, categoryId:5, title:'had better', content:'had better do sth. 表示最好做某事，否定形式为 had better not do sth.。', difficulty:2, grade:null },
  { id:121, categoryId:5, title:'mustn\'t / needn\'t / don\'t have to', content:'mustn\'t 表示禁止；needn\'t 和 don\'t have to 表示不必。', difficulty:2, grade:null },
  { id:122, categoryId:5, title:'情态动词表推测', content:'must 表示有把握的肯定推测；may/might 表示可能；can\'t 表示有把握的否定推测。', difficulty:3, grade:null },

  // 非谓语拆分
  { id:123, categoryId:5, title:'want / decide / hope / plan to do', content:'want, decide, hope, plan 等动词后常接动词不定式作宾语。', difficulty:2, grade:null },
  { id:124, categoryId:5, title:'ask / tell / want sb. to do', content:'ask, tell, want, encourage 等动词后可接 sb. to do sth. 作宾语补足语。', difficulty:2, grade:null },
  { id:125, categoryId:5, title:'It is + adj. + to do', content:'It is + 形容词 + to do sth. 中 it 作形式主语，真正主语是不定式。', difficulty:2, grade:null },
  { id:126, categoryId:5, title:'疑问词 + to do', content:'what/how/where/when + to do 可作宾语，表示做什么、怎样做、去哪里做等。', difficulty:3, grade:null },
  { id:127, categoryId:5, title:'enjoy / finish / mind / practice doing', content:'enjoy, finish, mind, practice, suggest 等动词后常接动名词。', difficulty:2, grade:null },
  { id:128, categoryId:5, title:'介词后接 doing', content:'介词后接动词时通常用动名词，如 be good at doing, look forward to doing。', difficulty:2, grade:null },
  { id:129, categoryId:5, title:'stop to do / stop doing', content:'stop to do 表示停下来去做另一件事；stop doing 表示停止正在做的事。', difficulty:3, grade:null },
  { id:130, categoryId:5, title:'remember to do / remember doing', content:'remember to do 表示记得去做未做的事；remember doing 表示记得做过的事。', difficulty:3, grade:null },
  { id:131, categoryId:5, title:'forget to do / forget doing', content:'forget to do 表示忘记去做未做的事；forget doing 表示忘记做过的事。', difficulty:3, grade:null },
  { id:132, categoryId:5, title:'make / let / have sb. do', content:'make, let, have 作使役动词时可接 sb. do sth.，不定式符号 to 常省略。', difficulty:3, grade:null },
  { id:133, categoryId:5, title:'see / hear / watch sb. do / doing', content:'see/hear/watch sb. do 表示看到/听到全过程；see/hear/watch sb. doing 表示看到/听到正在进行。', difficulty:3, grade:null },

  // 连词
  { id:134, categoryId:7, title:'and / but / or / so', content:'and 表并列或顺承；but 表转折；or 表选择或否则；so 表结果。', difficulty:1, grade:null },
  { id:135, categoryId:7, title:'both...and', content:'both...and 连接两个并列成分，表示两者都；连接主语时谓语通常用复数。', difficulty:2, grade:null },
  { id:136, categoryId:7, title:'either...or', content:'either...or 表示两者之一；连接主语时谓语常遵循就近原则。', difficulty:2, grade:null },
  { id:137, categoryId:7, title:'neither...nor', content:'neither...nor 表示两者都不；连接主语时谓语常遵循就近原则。', difficulty:2, grade:null },
  { id:138, categoryId:7, title:'not only...but also', content:'not only...but also 表示不但……而且……；连接主语时谓语常遵循就近原则。', difficulty:3, grade:null },
  { id:139, categoryId:7, title:'because / because of', content:'because 后接句子；because of 后接名词、代词或动名词短语。', difficulty:2, grade:null },
  { id:140, categoryId:7, title:'although / though 与 but 不连用', content:'although/though 引导让步状语从句时，英语中通常不再与 but 连用。', difficulty:2, grade:null },
  { id:141, categoryId:7, title:'so 与 because 不连用', content:'because 引导原因，so 引出结果；英语中一般不把 because 和 so 在同一句中配对使用。', difficulty:2, grade:null },
  { id:142, categoryId:7, title:'if / whether 区分', content:'if 和 whether 都可表示是否；whether 可与 or not 连用，介词后通常用 whether。', difficulty:3, grade:null },
  { id:143, categoryId:7, title:'unless', content:'unless 表示除非，相当于 if...not，引导条件状语从句。', difficulty:2, grade:null },

  // 常用结构和固定句型
  { id:144, categoryId:6, title:'too...to', content:'too + 形容词/副词 + to do 表示太……而不能做某事。', difficulty:2, grade:null },
  { id:145, categoryId:6, title:'so...that', content:'so + 形容词/副词 + that 从句，表示如此……以至于……。', difficulty:2, grade:null },
  { id:146, categoryId:6, title:'such...that', content:'such + 名词短语 + that 从句，表示如此……以至于……。', difficulty:2, grade:null },
  { id:147, categoryId:6, title:'enough to', content:'形容词/副词 + enough + to do 表示足够……可以做某事。', difficulty:2, grade:null },
  { id:148, categoryId:6, title:'It\'s time to do / for sth.', content:'It\'s time to do sth. 或 It\'s time for sth. 表示该做某事了。', difficulty:2, grade:null },
  { id:149, categoryId:6, title:'It takes sb. time to do', content:'It takes sb. some time to do sth. 表示某人花费多少时间做某事。', difficulty:2, grade:null },
  { id:150, categoryId:6, title:'spend / pay / cost / take', content:'spend 常以人作主语；pay 表付款；cost 常以物作主语；take 常用于 It takes sb. time to do。', difficulty:3, grade:null },
  { id:151, categoryId:6, title:'prefer A to B / prefer to do', content:'prefer A to B 表示比起 B 更喜欢 A；prefer to do 表示更愿意做某事。', difficulty:2, grade:null },
  { id:152, categoryId:6, title:'would like to do', content:'would like to do sth. 表示想要做某事，语气比 want 更委婉。', difficulty:1, grade:null },
  { id:153, categoryId:6, title:'Why not do / Why don\'t you do', content:'Why not do sth.? 和 Why don\'t you do sth.? 用于提出建议。', difficulty:2, grade:null },
  { id:154, categoryId:6, title:'had better do', content:'had better do sth. 表示最好做某事；否定形式为 had better not do sth.。', difficulty:2, grade:null },
  { id:155, categoryId:6, title:'be used to doing', content:'be used to doing sth. 表示习惯于做某事，其中 to 是介词。', difficulty:3, grade:null },
  { id:156, categoryId:6, title:'be used to do', content:'be used to do sth. 表示被用来做某事，是被动结构。', difficulty:3, grade:null },
  { id:157, categoryId:6, title:'so do I / neither do I', content:'so + 助动词/be/情态动词 + 主语 表示某人也如此；neither/nor 表示某人也不。', difficulty:3, grade:null },
  { id:158, categoryId:6, title:'Here / There 倒装', content:'Here/There 位于句首且主语为名词时，常用倒装语序，如 Here comes the bus。', difficulty:3, grade:null },
  { id:159, categoryId:6, title:'the 比较级, the 比较级', content:'the + 比较级..., the + 比较级... 表示越……就越……。', difficulty:3, grade:null },

  // 词类框架补充
  { id:160, categoryId:3, title:'专有名词', content:'专有名词表示特定的人名、地名、机构名、节日或作品名等，首字母通常大写，如 China, Beijing, Tom, Christmas。专有名词前是否用冠词要看固定表达和具体语境。', examples:[{en:'Tom lives in Beijing, China.',cn:'汤姆住在中国北京。'}], difficulty:1, grade:null },
  { id:161, categoryId:3, title:'动词的基本形式', content:'动词常见基本形式包括原形、第三人称单数、过去式、过去分词和 -ing 形式。它们分别服务于一般现在时、过去时、完成时、被动语态、进行时和非谓语结构。', examples:[{en:'write, writes, wrote, written and writing are different forms of the verb write.',cn:'write、writes、wrote、written 和 writing 是动词 write 的不同形式。'}], difficulty:1, grade:null },
  { id:162, categoryId:3, title:'及物动词和不及物动词', content:'及物动词后通常直接接宾语，如 visit a museum；不及物动词后不直接接宾语，如 arrive late。部分动词既可及物也可不及物，需结合句子判断。', examples:[{en:'We visited the museum yesterday, and we arrived early.',cn:'我们昨天参观了博物馆，并且到得很早。'}], difficulty:2, grade:null },
  { id:163, categoryId:3, title:'系动词', content:'系动词连接主语和表语，说明主语的身份、状态或性质。常见系动词有 be, look, sound, feel, smell, taste, become, get, turn 等。', examples:[{en:'The soup smells delicious.',cn:'这汤闻起来很香。'}], difficulty:1, grade:null },
  { id:164, categoryId:3, title:'助动词', content:'助动词帮助构成否定、疑问、时态、完成体或被动语态，本身通常不单独表达完整词义。常见助动词包括 be, do, have。', examples:[{en:'Do you like English? She has finished her homework.',cn:'你喜欢英语吗？她已经完成了作业。'}], difficulty:2, grade:null },
  { id:165, categoryId:3, title:'形容词的基本形式', content:'形容词基本形式用于直接描述名词或主语性质，可作定语或表语。作定语时常放在名词前，作表语时常放在系动词后。', examples:[{en:'She is a careful student, and she is kind.',cn:'她是一个细心的学生，而且她很友善。'}], difficulty:1, grade:null },
  { id:166, categoryId:3, title:'常见形容词词尾/词缀', content:'常见形容词词尾包括 -ful, -less, -ous, -al, -able, -ible, -ive, -y, -ed, -ing 等，如 helpful, careless, famous, natural, comfortable, active, rainy, interested, interesting。前缀 un-, im-, in-, dis- 常构成反义词，如 unhappy, impossible, incorrect, dishonest。\n\n-ed 形容词多描述人的感受，如 interested, excited, bored；-ing 形容词多描述事物特征或带来的感觉，如 interesting, exciting, boring。', examples:[{en:'A helpful person is not always a careless person.',cn:'乐于助人的人并不总是粗心的人。'},{en:'The story is interesting, and the students are interested in it.',cn:'这个故事很有趣，学生们对它感兴趣。'}], difficulty:2, grade:null,
    questions:{
      multipleChoice:[{sentence:'Which word is usually an adjective?',options:['careful','carefully','care','cared'],answer:0,explanation:'-ful 常构成形容词，careful 意为“仔细的”。'},{sentence:'The film is very ___. I am ___ in it.',options:['interesting; interested','interested; interesting','interest; interested','interesting; interest'],answer:0,explanation:'-ing 形容词多描述事物特征，-ed 形容词多描述人的感受。'}],
      fillBlank:[{sentence:'The prefix "un-" in "unhappy" usually means ___.',answer:'not',explanation:'un- 常构成反义词，表示“不、非”。'}]
    } },
  { id:167, categoryId:3, title:'常见副词词尾/词缀', content:'许多方式副词由形容词加 -ly 构成，如 quick→quickly, careful→carefully。以辅音字母+y 结尾常变 y 为 i 再加 -ly，如 happy→happily。注意 friendly, lovely 等虽然以 -ly 结尾，但通常是形容词。', examples:[{en:'She answered the question carefully and happily.',cn:'她认真又开心地回答了问题。'}], difficulty:2, grade:null,
    questions:{
      multipleChoice:[{sentence:'Which word is usually an adverb?',options:['quickly','quick','friendly','lovely'],answer:0,explanation:'quickly 是由 quick 加 -ly 构成的方式副词；friendly 和 lovely 通常是形容词。'}],
      fillBlank:[{sentence:'happy becomes ___ when it is used as an adverb.',answer:'happily',explanation:'辅音字母+y 结尾的形容词变副词时，常变 y 为 i 再加 -ly。'}]
    } }
]

const BASIC_GRAMMAR_EXAMPLES = {
  27:[{en:'I am a student, and my brother is a teacher.',cn:'我是一名学生，我哥哥是一名老师。'}],
  28:[{en:'She was at home yesterday, but we were at school.',cn:'她昨天在家，但我们在学校。'}],
  29:[{en:'There will be a meeting tomorrow.',cn:'明天将有一场会议。'}],
  30:[{en:'I have lived here for three years.',cn:'我已经在这里住了三年。'}],
  31:[{en:'She has been to Shanghai twice.',cn:'她去过上海两次。'}],
  32:[{en:'I have had this bike for two years.',cn:'这辆自行车我已经买了两年。'}],
  33:[{en:'He played football after school yesterday.',cn:'他昨天放学后踢了足球。'}],
  34:[{en:'My father used to walk to work.',cn:'我爸爸过去常常步行去上班。'}],
  35:[{en:'It is going to rain, so I will take an umbrella.',cn:'快要下雨了，所以我会带一把伞。'}],
  36:[{en:'We are leaving for Beijing this evening.',cn:'我们今晚要动身去北京。'}],
  37:[{en:'The classroom will be cleaned after school.',cn:'教室将在放学后被打扫。'}],
  38:[{en:'The work has been finished already.',cn:'这项工作已经完成了。'}],
  39:[{en:'The homework must be handed in today.',cn:'作业必须今天交。'}],
  40:[{en:'The story was written by a young writer.',cn:'这个故事是一位年轻作家写的。'}],
  41:[{en:'People use English widely. English is widely used.',cn:'人们广泛使用英语。英语被广泛使用。'}],
  42:[{en:'He was made to clean the room.',cn:'他被要求打扫房间。'}],
  43:[{en:'There are three apples and some water on the table.',cn:'桌上有三个苹果和一些水。'}],
  44:[{en:'Boxes and buses usually add -es in the plural form.',cn:'box 和 bus 的复数通常加 -es。'}],
  45:[{en:'There are two children and three sheep on the farm.',cn:'农场里有两个孩子和三只羊。'}],
  46:[{en:'This is Tom\'s bag, and that is the teachers\' office.',cn:'这是汤姆的包，那是教师办公室。'}],
  47:[{en:'I need two pieces of paper.',cn:'我需要两张纸。'}],
  48:[{en:'He helps me with English.',cn:'他帮我学习英语。'}],
  49:[{en:'This is my book. The blue one is mine.',cn:'这是我的书。蓝色那本是我的。'}],
  50:[{en:'The children enjoyed themselves at the party.',cn:'孩子们在聚会上玩得很开心。'}],
  51:[{en:'This is my pen, and those are her pencils.',cn:'这是我的钢笔，那些是她的铅笔。'}],
  52:[{en:'Everyone is ready for the test.',cn:'每个人都准备好考试了。'}],
  53:[{en:'I lost my pen, so I need a new one.',cn:'我丢了钢笔，所以需要一支新的。'}],
  54:[{en:'Both Tom and Jack like music.',cn:'汤姆和杰克都喜欢音乐。'}],
  55:[{en:'The soup smells delicious.',cn:'这汤闻起来很香。'}],
  56:[{en:'She speaks English clearly.',cn:'她英语说得很清楚。'}],
  57:[{en:'This question is easier than that one.',cn:'这个问题比那个问题容易。'}],
  58:[{en:'He is the tallest boy in our class.',cn:'他是我们班最高的男孩。'}],
  59:[{en:'My room is as clean as yours.',cn:'我的房间和你的一样干净。'}],
  60:[{en:'The news is exciting, and we are excited.',cn:'这个消息令人兴奋，我们很激动。'}],
  61:[{en:'We usually go to school at seven in the morning.',cn:'我们通常早上七点去上学。'}],
  62:[{en:'The cat is under the chair.',cn:'猫在椅子下面。'}],
  63:[{en:'He goes to school by bike.',cn:'他骑自行车去上学。'}],
  64:[{en:'She is good at drawing.',cn:'她擅长画画。'}],
  65:[{en:'There are two hundred students in the hall.',cn:'大厅里有二百名学生。'}],
  66:[{en:'Today is my first day at this school.',cn:'今天是我在这所学校的第一天。'}],
  67:[{en:'Two thirds of the students like music.',cn:'三分之二的学生喜欢音乐。'}],
  68:[{en:'The meeting is on June 1st at 9:00.',cn:'会议在六月一日上午九点。'}],
  69:[{en:'Hundreds of people visited the museum.',cn:'数百人参观了博物馆。'}],
  70:[{en:'She has an umbrella and a useful map.',cn:'她有一把伞和一张有用的地图。'}],
  71:[{en:'The sun rises in the east.',cn:'太阳从东方升起。'}],
  72:[{en:'We go to school by bus.',cn:'我们乘公共汽车去上学。'}],
  73:[{en:'He plays basketball and plays the piano.',cn:'他打篮球，也弹钢琴。'}],
  74:[{en:'My sister likes reading.',cn:'我妹妹喜欢阅读。'}],
  75:[{en:'Do you often read English books?',cn:'你经常读英语书吗？'}],
  76:[{en:'Where does your uncle work?',cn:'你叔叔在哪里工作？'}],
  77:[{en:'Would you like tea or coffee?',cn:'你想要茶还是咖啡？'}],
  78:[{en:'It is a nice day, isn\'t it?',cn:'今天天气很好，不是吗？'}],
  79:[{en:'Birds fly.',cn:'鸟会飞。'}],
  80:[{en:'I like English.',cn:'我喜欢英语。'}],
  81:[{en:'The idea sounds great.',cn:'这个主意听起来很棒。'}],
  82:[{en:'My mother bought me a new coat.',cn:'我妈妈给我买了一件新外套。'}],
  83:[{en:'We found the story interesting.',cn:'我们觉得这个故事很有趣。'}],
  84:[{en:'I think that he is right.',cn:'我认为他是对的。'}],
  85:[{en:'I wonder whether he will come.',cn:'我想知道他是否会来。'}],
  86:[{en:'Can you tell me where the library is?',cn:'你能告诉我图书馆在哪里吗？'}],
  87:[{en:'I do not know what he wants.',cn:'我不知道他想要什么。'}],
  88:[{en:'He said that he was busy.',cn:'他说他很忙。'}],
  89:[{en:'I don\'t think he will be late.',cn:'我认为他不会迟到。'}],
  90:[{en:'I will call you when I arrive.',cn:'我到达时会给你打电话。'}],
  91:[{en:'If it rains tomorrow, we will stay at home.',cn:'如果明天下雨，我们就待在家里。'}],
  92:[{en:'I stayed at home because I was ill.',cn:'我待在家里，因为我病了。'}],
  93:[{en:'He was so tired that he fell asleep quickly.',cn:'他太累了，很快就睡着了。'}],
  94:[{en:'Speak clearly so that everyone can hear you.',cn:'说清楚些，以便每个人都能听见你。'}],
  95:[{en:'Although it was cold, we went out.',cn:'虽然天气很冷，我们还是出去了。'}],
  96:[{en:'Tom runs faster than I do.',cn:'汤姆跑得比我快。'}],
  97:[{en:'I will tell you as soon as he comes back.',cn:'他一回来我就告诉你。'}],
  98:[{en:'The boy who is singing is my cousin.',cn:'正在唱歌的男孩是我的表弟。'}],
  99:[{en:'The book which you lent me is interesting.',cn:'你借给我的那本书很有趣。'}],
  100:[{en:'This is the girl whose mother is a doctor.',cn:'这就是那个妈妈是医生的女孩。'}],
  101:[{en:'This is the village where I was born.',cn:'这是我出生的村庄。'}],
  102:[{en:'The man who called you is my teacher.',cn:'给你打电话的那个人是我的老师。'}],
  103:[{en:'This is the best film that I have ever seen.',cn:'这是我看过的最好的电影。'}],
  104:[{en:'The boy likes apples, and the girls like pears.',cn:'这个男孩喜欢苹果，女孩们喜欢梨。'}],
  105:[{en:'Nothing is impossible if you try.',cn:'只要你努力，没有什么是不可能的。'}],
  106:[{en:'Each student has a dictionary.',cn:'每个学生都有一本词典。'}],
  107:[{en:'There is a pen and two books on the desk.',cn:'桌上有一支钢笔和两本书。'}],
  108:[{en:'Either you or he is right.',cn:'不是你对，就是他对。'}],
  109:[{en:'My family is a big one.',cn:'我的家庭是一个大家庭。'}],
  110:[{en:'Can you help me finish the work?',cn:'你能帮我完成这项工作吗？'}],
  111:[{en:'She usually gets up early.',cn:'她通常起得很早。'}],
  112:[{en:'They visited the museum yesterday.',cn:'他们昨天参观了博物馆。'}],
  113:[{en:'The door is closed.',cn:'门关着。'}],
  114:[{en:'He is playing football now.',cn:'他现在正在踢足球。'}],
  115:[{en:'I can swim, but I could not swim last year.',cn:'我会游泳，但去年我不会。'}],
  116:[{en:'You may leave now.',cn:'你现在可以离开了。'}],
  117:[{en:'I must finish my homework, but I have to clean my room first.',cn:'我必须完成作业，但我得先打扫房间。'}],
  118:[{en:'You should drink more water.',cn:'你应该多喝水。'}],
  119:[{en:'You needn\'t worry about it.',cn:'你不必担心这件事。'}],
  120:[{en:'You had better go home early.',cn:'你最好早点回家。'}],
  121:[{en:'You mustn\'t run in the classroom.',cn:'你禁止在教室里跑。'}],
  122:[{en:'The light is on, so he must be at home.',cn:'灯亮着，所以他一定在家。'}],
  123:[{en:'I hope to see you again.',cn:'我希望再次见到你。'}],
  124:[{en:'The teacher asked us to read aloud.',cn:'老师让我们大声朗读。'}],
  125:[{en:'It is important to learn English well.',cn:'学好英语很重要。'}],
  126:[{en:'I do not know how to solve the problem.',cn:'我不知道怎样解决这个问题。'}],
  127:[{en:'She enjoys listening to music.',cn:'她喜欢听音乐。'}],
  128:[{en:'He is interested in playing chess.',cn:'他对下棋感兴趣。'}],
  129:[{en:'Let\'s stop to have a rest.',cn:'我们停下来休息一下吧。'}],
  130:[{en:'Remember to close the window.',cn:'记得关窗户。'}],
  131:[{en:'I forgot to bring my notebook.',cn:'我忘了带笔记本。'}],
  132:[{en:'The joke made us laugh.',cn:'这个笑话让我们笑了。'}],
  133:[{en:'I saw him crossing the street.',cn:'我看见他正在过街。'}],
  134:[{en:'I wanted to go out, but it began to rain.',cn:'我想出去，但是开始下雨了。'}],
  135:[{en:'Both my sister and I like English.',cn:'我姐姐和我都喜欢英语。'}],
  136:[{en:'Either Tom or Jack will help you.',cn:'汤姆或杰克会帮你。'}],
  137:[{en:'Neither he nor I am afraid of the test.',cn:'他和我都不害怕考试。'}],
  138:[{en:'Not only you but also he likes the song.',cn:'不仅你喜欢这首歌，他也喜欢。'}],
  139:[{en:'He was late because of the heavy rain.',cn:'由于大雨，他迟到了。'}],
  140:[{en:'Although he is young, he works hard.',cn:'虽然他年轻，但他学习很努力。'}],
  141:[{en:'Because he was ill, he stayed at home.',cn:'因为他生病了，所以他待在家里。'}],
  142:[{en:'I am not sure whether he will agree or not.',cn:'我不确定他是否会同意。'}],
  143:[{en:'You will miss the bus unless you hurry.',cn:'除非你快点，否则会错过公交车。'}],
  144:[{en:'The box is too heavy to carry.',cn:'这个箱子太重，搬不动。'}],
  145:[{en:'He ran so fast that we could not catch him.',cn:'他跑得太快了，我们追不上他。'}],
  146:[{en:'It was such a good film that we watched it twice.',cn:'这是一部如此好的电影，我们看了两遍。'}],
  147:[{en:'She is old enough to go to school.',cn:'她年龄够大，可以上学了。'}],
  148:[{en:'It\'s time to have lunch.',cn:'该吃午饭了。'}],
  149:[{en:'It takes me twenty minutes to walk to school.',cn:'我步行到学校要花二十分钟。'}],
  150:[{en:'I spent ten yuan on the book.',cn:'我花了十元买这本书。'}],
  151:[{en:'I prefer tea to coffee.',cn:'比起咖啡，我更喜欢茶。'}],
  152:[{en:'I would like to join the English club.',cn:'我想加入英语俱乐部。'}],
  153:[{en:'Why not ask your teacher for help?',cn:'为什么不向老师求助呢？'}],
  154:[{en:'You had better not stay up late.',cn:'你最好不要熬夜。'}],
  155:[{en:'I am used to getting up early.',cn:'我习惯早起。'}],
  156:[{en:'Wood is used to make paper.',cn:'木头被用来造纸。'}],
  157:[{en:'I like English. So do I.',cn:'我喜欢英语。我也是。'}],
  158:[{en:'Here comes the bus.',cn:'公交车来了。'}],
  159:[{en:'The harder you work, the better you will become.',cn:'你越努力，就会变得越好。'}]
}
KNOWLEDGE_POINTS.forEach(kp=>{if(!(kp.examples&&kp.examples.length)&&BASIC_GRAMMAR_EXAMPLES[kp.id])kp.examples=BASIC_GRAMMAR_EXAMPLES[kp.id]})

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
const VOCABULARY = [
  {"id":1,"word":"a","headwords":["a","an"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1,"sourceLetter":"A","sourceRaw":"a/an","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":2,"word":"ability","headwords":["ability"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":2,"sourceLetter":"A","sourceRaw":"ability","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":3,"word":"able","headwords":["able"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":3,"sourceLetter":"A","sourceRaw":"able","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":4,"word":"about","headwords":["about"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":4,"sourceLetter":"A","sourceRaw":"about","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":5,"word":"above","headwords":["above"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":5,"sourceLetter":"A","sourceRaw":"above","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":6,"word":"abroad","headwords":["abroad"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":6,"sourceLetter":"A","sourceRaw":"abroad","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":7,"word":"absent","headwords":["absent"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":7,"sourceLetter":"A","sourceRaw":"absent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":8,"word":"accept","headwords":["accept"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":8,"sourceLetter":"A","sourceRaw":"accept","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":9,"word":"accident","headwords":["accident"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":9,"sourceLetter":"A","sourceRaw":"accident","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":10,"word":"according","headwords":["according"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":10,"sourceLetter":"A","sourceRaw":"according (to)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["to"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母A","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":11,"word":"account","headwords":["account"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":11,"sourceLetter":"A","sourceRaw":"account","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":12,"word":"ache","headwords":["ache"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":12,"sourceLetter":"A","sourceRaw":"ache","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":13,"word":"achieve","headwords":["achieve"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":13,"sourceLetter":"A","sourceRaw":"achieve","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":14,"word":"across","headwords":["across"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":14,"sourceLetter":"A","sourceRaw":"across","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":15,"word":"act","headwords":["act"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":15,"sourceLetter":"A","sourceRaw":"act","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":16,"word":"action","headwords":["action"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":16,"sourceLetter":"A","sourceRaw":"action","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":17,"word":"active","headwords":["active"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":17,"sourceLetter":"A","sourceRaw":"active","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":18,"word":"activity","headwords":["activity"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":18,"sourceLetter":"A","sourceRaw":"activity","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":19,"word":"actor","headwords":["actor","actress"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":19,"sourceLetter":"A","sourceRaw":"actor / actress","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":20,"word":"actually","headwords":["actually"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":20,"sourceLetter":"A","sourceRaw":"actually","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":21,"word":"advertisement","headwords":["advertisement"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":21,"sourceLetter":"A","sourceRaw":"ad (=advertisement)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=advertisement"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母A","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":22,"word":"add","headwords":["add"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":22,"sourceLetter":"A","sourceRaw":"add","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":23,"word":"address","headwords":["address"],"phonetic":"/ˈædres/","translation":"地址","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"What is your email address?","cn":"你的邮箱地址是什么？"}],"source":"1600单词备用.txt","sourceIndex":23,"sourceLetter":"A","sourceRaw":"address","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":24,"word":"admire","headwords":["admire"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":24,"sourceLetter":"A","sourceRaw":"admire","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":25,"word":"adult","headwords":["adult"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":25,"sourceLetter":"A","sourceRaw":"adult","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":26,"word":"advantage","headwords":["advantage"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":26,"sourceLetter":"A","sourceRaw":"advantage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":27,"word":"advice","headwords":["advice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":27,"sourceLetter":"A","sourceRaw":"advice","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":28,"word":"advise","headwords":["advise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":28,"sourceLetter":"A","sourceRaw":"advise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":29,"word":"afford","headwords":["afford"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":29,"sourceLetter":"A","sourceRaw":"afford","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":30,"word":"afraid","headwords":["afraid"],"phonetic":"/əˈfreɪd/","translation":"害怕的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Don't be afraid of making mistakes.","cn":"别怕犯错。"}],"source":"1600单词备用.txt","sourceIndex":30,"sourceLetter":"A","sourceRaw":"afraid","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":31,"word":"after","headwords":["after"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":31,"sourceLetter":"A","sourceRaw":"after","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":32,"word":"afternoon","headwords":["afternoon"],"phonetic":"/ˌæftərˈnuːn/","translation":"下午","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Good afternoon, class.","cn":"下午好，同学们。"}],"source":"1600单词备用.txt","sourceIndex":32,"sourceLetter":"A","sourceRaw":"afternoon","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":33,"word":"again","headwords":["again"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":33,"sourceLetter":"A","sourceRaw":"again","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":34,"word":"against","headwords":["against"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":34,"sourceLetter":"A","sourceRaw":"against","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":35,"word":"age","headwords":["age"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":35,"sourceLetter":"A","sourceRaw":"age","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":36,"word":"ago","headwords":["ago"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":36,"sourceLetter":"A","sourceRaw":"ago","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":37,"word":"agree","headwords":["agree"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":37,"sourceLetter":"A","sourceRaw":"agree","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":38,"word":"ahead","headwords":["ahead"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":38,"sourceLetter":"A","sourceRaw":"ahead","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":39,"word":"artificial intelligence","headwords":["artificial intelligence"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":39,"sourceLetter":"A","sourceRaw":"AI (= artificial intelligence)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["= artificial intelligence"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母A","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":40,"word":"aid","headwords":["aid"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":40,"sourceLetter":"A","sourceRaw":"aid","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":41,"word":"aim","headwords":["aim"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":41,"sourceLetter":"A","sourceRaw":"aim","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":42,"word":"air","headwords":["air"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":42,"sourceLetter":"A","sourceRaw":"air","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":43,"word":"airport","headwords":["airport"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":43,"sourceLetter":"A","sourceRaw":"airport","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":44,"word":"alarm","headwords":["alarm"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":44,"sourceLetter":"A","sourceRaw":"alarm","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":45,"word":"alive","headwords":["alive"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":45,"sourceLetter":"A","sourceRaw":"alive","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":46,"word":"all","headwords":["all"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":46,"sourceLetter":"A","sourceRaw":"all","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":47,"word":"allow","headwords":["allow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":47,"sourceLetter":"A","sourceRaw":"allow","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":48,"word":"almost","headwords":["almost"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":48,"sourceLetter":"A","sourceRaw":"almost","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":49,"word":"alone","headwords":["alone"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":49,"sourceLetter":"A","sourceRaw":"alone","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":50,"word":"along","headwords":["along"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":50,"sourceLetter":"A","sourceRaw":"along","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":51,"word":"aloud","headwords":["aloud"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":51,"sourceLetter":"A","sourceRaw":"aloud","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":52,"word":"already","headwords":["already"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":52,"sourceLetter":"A","sourceRaw":"already","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":53,"word":"also","headwords":["also"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":53,"sourceLetter":"A","sourceRaw":"also","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":54,"word":"although","headwords":["although"],"phonetic":"/ɔːlˈðoʊ/","translation":"虽然","pos":"conj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Although it rained, we went out.","cn":"虽然下雨了，我们还是出去了。"}],"source":"1600单词备用.txt","sourceIndex":54,"sourceLetter":"A","sourceRaw":"although","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":55,"word":"always","headwords":["always"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":55,"sourceLetter":"A","sourceRaw":"always","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":56,"word":"a.m.","headwords":["a.m."],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":56,"sourceLetter":"A","sourceRaw":"a.m.","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":57,"word":"amazing","headwords":["amazing"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":57,"sourceLetter":"A","sourceRaw":"amazing","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":58,"word":"among","headwords":["among"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":58,"sourceLetter":"A","sourceRaw":"among","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":59,"word":"ancient","headwords":["ancient"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":59,"sourceLetter":"A","sourceRaw":"ancient","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":60,"word":"and","headwords":["and"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":60,"sourceLetter":"A","sourceRaw":"and","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":61,"word":"angry","headwords":["angry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":61,"sourceLetter":"A","sourceRaw":"angry","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":62,"word":"animal","headwords":["animal"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":62,"sourceLetter":"A","sourceRaw":"animal","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":63,"word":"another","headwords":["another"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":63,"sourceLetter":"A","sourceRaw":"another","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":64,"word":"answer","headwords":["answer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":64,"sourceLetter":"A","sourceRaw":"answer","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":65,"word":"ant","headwords":["ant"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":65,"sourceLetter":"A","sourceRaw":"ant","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":66,"word":"any","headwords":["any"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":66,"sourceLetter":"A","sourceRaw":"any","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":67,"word":"anybody","headwords":["anybody","anyone"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":67,"sourceLetter":"A","sourceRaw":"anybody / anyone","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":68,"word":"anything","headwords":["anything"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":68,"sourceLetter":"A","sourceRaw":"anything","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":69,"word":"anyway","headwords":["anyway"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":69,"sourceLetter":"A","sourceRaw":"anyway","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":70,"word":"anywhere","headwords":["anywhere"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":70,"sourceLetter":"A","sourceRaw":"anywhere","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":71,"word":"apartment","headwords":["apartment"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":71,"sourceLetter":"A","sourceRaw":"apartment","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":72,"word":"application","headwords":["application"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":72,"sourceLetter":"A","sourceRaw":"app (=application)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=application"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母A","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":73,"word":"appear","headwords":["appear"],"phonetic":"/əˈpɪr/","translation":"出现","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He appeared at the door suddenly.","cn":"他突然出现在门口。"}],"source":"1600单词备用.txt","sourceIndex":73,"sourceLetter":"A","sourceRaw":"appear","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":74,"word":"apple","headwords":["apple"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":74,"sourceLetter":"A","sourceRaw":"apple","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":75,"word":"area","headwords":["area"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":75,"sourceLetter":"A","sourceRaw":"area","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":76,"word":"argue","headwords":["argue"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":76,"sourceLetter":"A","sourceRaw":"argue","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":77,"word":"arm","headwords":["arm"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":77,"sourceLetter":"A","sourceRaw":"arm","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":78,"word":"army","headwords":["army"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":78,"sourceLetter":"A","sourceRaw":"army","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":79,"word":"around","headwords":["around"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":79,"sourceLetter":"A","sourceRaw":"around","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":80,"word":"arrive","headwords":["arrive"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":80,"sourceLetter":"A","sourceRaw":"arrive","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":81,"word":"art","headwords":["art"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":81,"sourceLetter":"A","sourceRaw":"art","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":82,"word":"article","headwords":["article"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":82,"sourceLetter":"A","sourceRaw":"article","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":83,"word":"artist","headwords":["artist"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":83,"sourceLetter":"A","sourceRaw":"artist","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":84,"word":"as","headwords":["as"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":84,"sourceLetter":"A","sourceRaw":"as","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":85,"word":"ask","headwords":["ask"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":85,"sourceLetter":"A","sourceRaw":"ask","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":86,"word":"asleep","headwords":["asleep"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":86,"sourceLetter":"A","sourceRaw":"asleep","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":87,"word":"astronaut","headwords":["astronaut"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":87,"sourceLetter":"A","sourceRaw":"astronaut","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":88,"word":"at","headwords":["at"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":88,"sourceLetter":"A","sourceRaw":"at","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":89,"word":"athlete","headwords":["athlete"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":89,"sourceLetter":"A","sourceRaw":"athlete","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":90,"word":"attack","headwords":["attack"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":90,"sourceLetter":"A","sourceRaw":"attack","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":91,"word":"attend","headwords":["attend"],"phonetic":"/əˈtend/","translation":"参加","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I will attend the meeting.","cn":"我会参加会议。"}],"source":"1600单词备用.txt","sourceIndex":91,"sourceLetter":"A","sourceRaw":"attend","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":92,"word":"attention","headwords":["attention"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":92,"sourceLetter":"A","sourceRaw":"attention","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":93,"word":"aunt","headwords":["aunt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":93,"sourceLetter":"A","sourceRaw":"aunt","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":94,"word":"autumn","headwords":["autumn"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":94,"sourceLetter":"A","sourceRaw":"autumn","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":95,"word":"average","headwords":["average"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":95,"sourceLetter":"A","sourceRaw":"average","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":96,"word":"avoid","headwords":["avoid"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":96,"sourceLetter":"A","sourceRaw":"avoid","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":97,"word":"awake","headwords":["awake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":97,"sourceLetter":"A","sourceRaw":"awake","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":98,"word":"award","headwords":["award"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":98,"sourceLetter":"A","sourceRaw":"award","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":99,"word":"aware","headwords":["aware"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":99,"sourceLetter":"A","sourceRaw":"aware","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":100,"word":"away","headwords":["away"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":100,"sourceLetter":"A","sourceRaw":"away","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":101,"word":"awful","headwords":["awful"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":101,"sourceLetter":"A","sourceRaw":"awful","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母A","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":102,"word":"baby","headwords":["baby"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":102,"sourceLetter":"B","sourceRaw":"baby","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":103,"word":"back","headwords":["back"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":103,"sourceLetter":"B","sourceRaw":"back","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":104,"word":"background","headwords":["background"],"phonetic":"/ˈbækɡraʊnd/","translation":"背景","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I like the background music.","cn":"我喜欢这首背景音乐。"}],"source":"1600单词备用.txt","sourceIndex":104,"sourceLetter":"B","sourceRaw":"background","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":105,"word":"bad","headwords":["bad"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":105,"sourceLetter":"B","sourceRaw":"bad","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":106,"word":"badminton","headwords":["badminton"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":106,"sourceLetter":"B","sourceRaw":"badminton","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":107,"word":"bag","headwords":["bag"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":107,"sourceLetter":"B","sourceRaw":"bag","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":108,"word":"balance","headwords":["balance"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":108,"sourceLetter":"B","sourceRaw":"balance","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":109,"word":"ball","headwords":["ball"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":109,"sourceLetter":"B","sourceRaw":"ball","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":110,"word":"balloon","headwords":["balloon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":110,"sourceLetter":"B","sourceRaw":"balloon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":111,"word":"bamboo","headwords":["bamboo"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":111,"sourceLetter":"B","sourceRaw":"bamboo","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":112,"word":"banana","headwords":["banana"],"phonetic":"/bəˈnænə/","translation":"香蕉","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I eat a banana every morning.","cn":"我每天早上吃一根香蕉。"}],"source":"1600单词备用.txt","sourceIndex":112,"sourceLetter":"B","sourceRaw":"banana","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":113,"word":"band","headwords":["band"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":113,"sourceLetter":"B","sourceRaw":"band","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":114,"word":"bank","headwords":["bank"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":114,"sourceLetter":"B","sourceRaw":"bank","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":115,"word":"baseball","headwords":["baseball"],"phonetic":"/ˈbeɪsbɔːl/","translation":"棒球","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Baseball is popular in the US.","cn":"棒球在美国很流行。"}],"source":"1600单词备用.txt","sourceIndex":115,"sourceLetter":"B","sourceRaw":"baseball","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":116,"word":"basic","headwords":["basic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":116,"sourceLetter":"B","sourceRaw":"basic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":117,"word":"basket","headwords":["basket"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":117,"sourceLetter":"B","sourceRaw":"basket","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":118,"word":"basketball","headwords":["basketball"],"phonetic":"/ˈbæskɪtbɔːl/","translation":"篮球","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He is good at basketball.","cn":"他擅长篮球。"}],"source":"1600单词备用.txt","sourceIndex":118,"sourceLetter":"B","sourceRaw":"basketball","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":119,"word":"bat","headwords":["bat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":119,"sourceLetter":"B","sourceRaw":"bat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":120,"word":"bath","headwords":["bath"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":120,"sourceLetter":"B","sourceRaw":"bath","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":121,"word":"bathroom","headwords":["bathroom"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":121,"sourceLetter":"B","sourceRaw":"bathroom","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":122,"word":"be","headwords":["be"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":122,"sourceLetter":"B","sourceRaw":"be (am, is, are)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["am, is, are"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母B","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":123,"word":"beach","headwords":["beach"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":123,"sourceLetter":"B","sourceRaw":"beach","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":124,"word":"bean","headwords":["bean"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":124,"sourceLetter":"B","sourceRaw":"bean","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":125,"word":"bear","headwords":["bear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":125,"sourceLetter":"B","sourceRaw":"bear","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":126,"word":"beat","headwords":["beat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":126,"sourceLetter":"B","sourceRaw":"beat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":127,"word":"beautiful","headwords":["beautiful"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":127,"sourceLetter":"B","sourceRaw":"beautiful","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":128,"word":"because","headwords":["because"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":128,"sourceLetter":"B","sourceRaw":"because","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":129,"word":"become","headwords":["become"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":129,"sourceLetter":"B","sourceRaw":"become","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":130,"word":"bed","headwords":["bed"],"phonetic":"/bed/","translation":"床","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I go to bed at ten.","cn":"我十点上床睡觉。"}],"source":"1600单词备用.txt","sourceIndex":130,"sourceLetter":"B","sourceRaw":"bed","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":131,"word":"bedroom","headwords":["bedroom"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":131,"sourceLetter":"B","sourceRaw":"bedroom","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":132,"word":"bee","headwords":["bee"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":132,"sourceLetter":"B","sourceRaw":"bee","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":133,"word":"beef","headwords":["beef"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":133,"sourceLetter":"B","sourceRaw":"beef","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":134,"word":"before","headwords":["before"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":134,"sourceLetter":"B","sourceRaw":"before","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":135,"word":"begin","headwords":["begin"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":135,"sourceLetter":"B","sourceRaw":"begin","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":136,"word":"behave","headwords":["behave"],"phonetic":"/bɪˈheɪv/","translation":"表现","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Please behave yourself at the party.","cn":"请在聚会上举止得体。"}],"source":"1600单词备用.txt","sourceIndex":136,"sourceLetter":"B","sourceRaw":"behave","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":137,"word":"behind","headwords":["behind"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":137,"sourceLetter":"B","sourceRaw":"behind","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":138,"word":"believe","headwords":["believe"],"phonetic":"/bɪˈliːv/","translation":"相信","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I believe you can do it.","cn":"我相信你能做到。"}],"source":"1600单词备用.txt","sourceIndex":138,"sourceLetter":"B","sourceRaw":"believe","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":139,"word":"bell","headwords":["bell"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":139,"sourceLetter":"B","sourceRaw":"bell","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":140,"word":"belong","headwords":["belong"],"phonetic":"/bɪˈlɔːŋ/","translation":"属于","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"This book belongs to me.","cn":"这本书属于我。"}],"source":"1600单词备用.txt","sourceIndex":140,"sourceLetter":"B","sourceRaw":"belong","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":141,"word":"below","headwords":["below"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":141,"sourceLetter":"B","sourceRaw":"below","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":142,"word":"belt","headwords":["belt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":142,"sourceLetter":"B","sourceRaw":"belt","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":143,"word":"benefit","headwords":["benefit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":143,"sourceLetter":"B","sourceRaw":"benefit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":144,"word":"beside","headwords":["beside"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":144,"sourceLetter":"B","sourceRaw":"beside","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":145,"word":"best","headwords":["best"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":145,"sourceLetter":"B","sourceRaw":"best","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":146,"word":"better","headwords":["better"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":146,"sourceLetter":"B","sourceRaw":"better","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":147,"word":"between","headwords":["between"],"phonetic":"/bɪˈtwiːn/","translation":"在…之间","pos":"prep.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The bank is between the hotel and the school.","cn":"银行在酒店和学校之间。"}],"source":"1600单词备用.txt","sourceIndex":147,"sourceLetter":"B","sourceRaw":"between","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":148,"word":"big","headwords":["big"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":148,"sourceLetter":"B","sourceRaw":"big","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":149,"word":"bicycle","headwords":["bicycle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":149,"sourceLetter":"B","sourceRaw":"bike (=bicycle)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["=bicycle"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母B","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":150,"word":"bill","headwords":["bill"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":150,"sourceLetter":"B","sourceRaw":"bill","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":151,"word":"bin","headwords":["bin"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":151,"sourceLetter":"B","sourceRaw":"bin","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":152,"word":"biology","headwords":["biology"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":152,"sourceLetter":"B","sourceRaw":"biology","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":153,"word":"bird","headwords":["bird"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":153,"sourceLetter":"B","sourceRaw":"bird","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":154,"word":"birth","headwords":["birth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":154,"sourceLetter":"B","sourceRaw":"birth","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":155,"word":"birthday","headwords":["birthday"],"phonetic":"/ˈbɜːrθdeɪ/","translation":"生日","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Today is my birthday.","cn":"今天是我的生日。"}],"source":"1600单词备用.txt","sourceIndex":155,"sourceLetter":"B","sourceRaw":"birthday","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":156,"word":"biscuit","headwords":["biscuit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":156,"sourceLetter":"B","sourceRaw":"biscuit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":157,"word":"bit","headwords":["bit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":157,"sourceLetter":"B","sourceRaw":"bit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":158,"word":"black","headwords":["black"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":158,"sourceLetter":"B","sourceRaw":"black","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":159,"word":"blackboard","headwords":["blackboard"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":159,"sourceLetter":"B","sourceRaw":"blackboard","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":160,"word":"bleed","headwords":["bleed"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":160,"sourceLetter":"B","sourceRaw":"bleed","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":161,"word":"blind","headwords":["blind"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":161,"sourceLetter":"B","sourceRaw":"blind","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":162,"word":"block","headwords":["block"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":162,"sourceLetter":"B","sourceRaw":"block","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":163,"word":"blood","headwords":["blood"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":163,"sourceLetter":"B","sourceRaw":"blood","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":164,"word":"blouse","headwords":["blouse"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":164,"sourceLetter":"B","sourceRaw":"blouse","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":165,"word":"blow","headwords":["blow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":165,"sourceLetter":"B","sourceRaw":"blow","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":166,"word":"blue","headwords":["blue"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":166,"sourceLetter":"B","sourceRaw":"blue","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":167,"word":"board","headwords":["board"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":167,"sourceLetter":"B","sourceRaw":"board","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":168,"word":"boat","headwords":["boat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":168,"sourceLetter":"B","sourceRaw":"boat","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":169,"word":"body","headwords":["body"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":169,"sourceLetter":"B","sourceRaw":"body","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":170,"word":"boil","headwords":["boil"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":170,"sourceLetter":"B","sourceRaw":"boil","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":171,"word":"book","headwords":["book"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":171,"sourceLetter":"B","sourceRaw":"book","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":172,"word":"boring","headwords":["boring"],"phonetic":"/ˈbɔːrɪŋ/","translation":"无聊的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The movie was so boring.","cn":"那部电影太无聊了。"}],"source":"1600单词备用.txt","sourceIndex":172,"sourceLetter":"B","sourceRaw":"boring","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":173,"word":"born","headwords":["born"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":173,"sourceLetter":"B","sourceRaw":"born","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":174,"word":"borrow","headwords":["borrow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":174,"sourceLetter":"B","sourceRaw":"borrow","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":175,"word":"boss","headwords":["boss"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":175,"sourceLetter":"B","sourceRaw":"boss","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":176,"word":"both","headwords":["both"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":176,"sourceLetter":"B","sourceRaw":"both","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":177,"word":"bottle","headwords":["bottle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":177,"sourceLetter":"B","sourceRaw":"bottle","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":178,"word":"bottom","headwords":["bottom"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":178,"sourceLetter":"B","sourceRaw":"bottom","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":179,"word":"bowl","headwords":["bowl"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":179,"sourceLetter":"B","sourceRaw":"bowl","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":180,"word":"box","headwords":["box"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":180,"sourceLetter":"B","sourceRaw":"box","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":181,"word":"boy","headwords":["boy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":181,"sourceLetter":"B","sourceRaw":"boy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":182,"word":"brain","headwords":["brain"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":182,"sourceLetter":"B","sourceRaw":"brain","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":183,"word":"brave","headwords":["brave"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":183,"sourceLetter":"B","sourceRaw":"brave","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":184,"word":"bread","headwords":["bread"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":184,"sourceLetter":"B","sourceRaw":"bread","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":185,"word":"break","headwords":["break"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":185,"sourceLetter":"B","sourceRaw":"break","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":186,"word":"breakfast","headwords":["breakfast"],"phonetic":"/ˈbrekfəst/","translation":"早餐","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I have bread and milk for breakfast.","cn":"我早餐吃面包喝牛奶。"}],"source":"1600单词备用.txt","sourceIndex":186,"sourceLetter":"B","sourceRaw":"breakfast","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":187,"word":"breath","headwords":["breath"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":187,"sourceLetter":"B","sourceRaw":"breath","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":188,"word":"bridge","headwords":["bridge"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":188,"sourceLetter":"B","sourceRaw":"bridge","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":189,"word":"bright","headwords":["bright"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":189,"sourceLetter":"B","sourceRaw":"bright","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":190,"word":"bring","headwords":["bring"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":190,"sourceLetter":"B","sourceRaw":"bring","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":191,"word":"brother","headwords":["brother"],"phonetic":"/ˈbrʌðər/","translation":"兄弟","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I have an elder brother.","cn":"我有一个哥哥。"}],"source":"1600单词备用.txt","sourceIndex":191,"sourceLetter":"B","sourceRaw":"brother","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":192,"word":"brown","headwords":["brown"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":192,"sourceLetter":"B","sourceRaw":"brown","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":193,"word":"brush","headwords":["brush"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":193,"sourceLetter":"B","sourceRaw":"brush","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":194,"word":"budget","headwords":["budget"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":194,"sourceLetter":"B","sourceRaw":"budget","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":195,"word":"build","headwords":["build"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":195,"sourceLetter":"B","sourceRaw":"build","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":196,"word":"building","headwords":["building"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":196,"sourceLetter":"B","sourceRaw":"building","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":197,"word":"bully","headwords":["bully"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":197,"sourceLetter":"B","sourceRaw":"bully","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":198,"word":"burn","headwords":["burn"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":198,"sourceLetter":"B","sourceRaw":"burn","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":199,"word":"bus","headwords":["bus"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":199,"sourceLetter":"B","sourceRaw":"bus","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":200,"word":"business","headwords":["business"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":200,"sourceLetter":"B","sourceRaw":"business","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":201,"word":"busy","headwords":["busy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":201,"sourceLetter":"B","sourceRaw":"busy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":202,"word":"but","headwords":["but"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":202,"sourceLetter":"B","sourceRaw":"but","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":203,"word":"butter","headwords":["butter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":203,"sourceLetter":"B","sourceRaw":"butter","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":204,"word":"butterfly","headwords":["butterfly"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":204,"sourceLetter":"B","sourceRaw":"butterfly","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":205,"word":"buy","headwords":["buy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":205,"sourceLetter":"B","sourceRaw":"buy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":206,"word":"by","headwords":["by"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":206,"sourceLetter":"B","sourceRaw":"by","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母B","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":207,"word":"cabbage","headwords":["cabbage"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":207,"sourceLetter":"C","sourceRaw":"cabbage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":208,"word":"cake","headwords":["cake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":208,"sourceLetter":"C","sourceRaw":"cake","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":209,"word":"calendar","headwords":["calendar"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":209,"sourceLetter":"C","sourceRaw":"calendar","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":210,"word":"call","headwords":["call"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":210,"sourceLetter":"C","sourceRaw":"call","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":211,"word":"calm","headwords":["calm"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":211,"sourceLetter":"C","sourceRaw":"calm","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":212,"word":"camera","headwords":["camera"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":212,"sourceLetter":"C","sourceRaw":"camera","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":213,"word":"camp","headwords":["camp"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":213,"sourceLetter":"C","sourceRaw":"camp","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":214,"word":"can","headwords":["can"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":214,"sourceLetter":"C","sourceRaw":"can","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":215,"word":"cancel","headwords":["cancel"],"phonetic":"/ˈkænsl/","translation":"取消","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The meeting was canceled.","cn":"会议被取消了。"}],"source":"1600单词备用.txt","sourceIndex":215,"sourceLetter":"C","sourceRaw":"cancel","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":216,"word":"cancer","headwords":["cancer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":216,"sourceLetter":"C","sourceRaw":"cancer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":217,"word":"candle","headwords":["candle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":217,"sourceLetter":"C","sourceRaw":"candle","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":218,"word":"candy","headwords":["candy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":218,"sourceLetter":"C","sourceRaw":"candy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":219,"word":"cap","headwords":["cap"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":219,"sourceLetter":"C","sourceRaw":"cap","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":220,"word":"capital","headwords":["capital"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":220,"sourceLetter":"C","sourceRaw":"capital","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":221,"word":"car","headwords":["car"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":221,"sourceLetter":"C","sourceRaw":"car","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":222,"word":"card","headwords":["card"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":222,"sourceLetter":"C","sourceRaw":"card","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":223,"word":"care","headwords":["care"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":223,"sourceLetter":"C","sourceRaw":"care","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":224,"word":"careful","headwords":["careful"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":224,"sourceLetter":"C","sourceRaw":"careful","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":225,"word":"careless","headwords":["careless"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":225,"sourceLetter":"C","sourceRaw":"careless","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":226,"word":"carrot","headwords":["carrot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":226,"sourceLetter":"C","sourceRaw":"carrot","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":227,"word":"carry","headwords":["carry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":227,"sourceLetter":"C","sourceRaw":"carry","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":228,"word":"cartoon","headwords":["cartoon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":228,"sourceLetter":"C","sourceRaw":"cartoon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":229,"word":"case","headwords":["case"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":229,"sourceLetter":"C","sourceRaw":"case","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":230,"word":"cash","headwords":["cash"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":230,"sourceLetter":"C","sourceRaw":"cash","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":231,"word":"cat","headwords":["cat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":231,"sourceLetter":"C","sourceRaw":"cat","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":232,"word":"catch","headwords":["catch"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":232,"sourceLetter":"C","sourceRaw":"catch","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":233,"word":"cause","headwords":["cause"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":233,"sourceLetter":"C","sourceRaw":"cause","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":234,"word":"celebrate","headwords":["celebrate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":234,"sourceLetter":"C","sourceRaw":"celebrate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":235,"word":"cent","headwords":["cent"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":235,"sourceLetter":"C","sourceRaw":"cent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":236,"word":"central","headwords":["central"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":236,"sourceLetter":"C","sourceRaw":"central","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":237,"word":"centre","headwords":["centre"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":237,"sourceLetter":"C","sourceRaw":"centre (AmE center)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE center"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母C","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":238,"word":"century","headwords":["century"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":238,"sourceLetter":"C","sourceRaw":"century","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":239,"word":"certain","headwords":["certain"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":239,"sourceLetter":"C","sourceRaw":"certain","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":240,"word":"chair","headwords":["chair"],"phonetic":"/tʃer/","translation":"椅子","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Please sit on the chair.","cn":"请坐在椅子上。"}],"source":"1600单词备用.txt","sourceIndex":240,"sourceLetter":"C","sourceRaw":"chair","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":241,"word":"chalk","headwords":["chalk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":241,"sourceLetter":"C","sourceRaw":"chalk","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":242,"word":"challenge","headwords":["challenge"],"phonetic":"/ˈtʃælɪndʒ/","translation":"挑战","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Life is full of challenges.","cn":"生活充满挑战。"}],"source":"1600单词备用.txt","sourceIndex":242,"sourceLetter":"C","sourceRaw":"challenge","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":243,"word":"champion","headwords":["champion"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":243,"sourceLetter":"C","sourceRaw":"champion","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":244,"word":"chance","headwords":["chance"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":244,"sourceLetter":"C","sourceRaw":"chance","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":245,"word":"change","headwords":["change"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":245,"sourceLetter":"C","sourceRaw":"change","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":246,"word":"character","headwords":["character"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":246,"sourceLetter":"C","sourceRaw":"character","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":247,"word":"characteristic","headwords":["characteristic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":247,"sourceLetter":"C","sourceRaw":"characteristic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":248,"word":"charity","headwords":["charity"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":248,"sourceLetter":"C","sourceRaw":"charity","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":249,"word":"chat","headwords":["chat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":249,"sourceLetter":"C","sourceRaw":"chat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":250,"word":"cheap","headwords":["cheap"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":250,"sourceLetter":"C","sourceRaw":"cheap","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":251,"word":"cheat","headwords":["cheat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":251,"sourceLetter":"C","sourceRaw":"cheat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":252,"word":"check","headwords":["check"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":252,"sourceLetter":"C","sourceRaw":"check","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":253,"word":"cheer","headwords":["cheer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":253,"sourceLetter":"C","sourceRaw":"cheer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":254,"word":"cheese","headwords":["cheese"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":254,"sourceLetter":"C","sourceRaw":"cheese","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":255,"word":"chemistry","headwords":["chemistry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":255,"sourceLetter":"C","sourceRaw":"chemistry","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":256,"word":"chess","headwords":["chess"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":256,"sourceLetter":"C","sourceRaw":"chess","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":257,"word":"chicken","headwords":["chicken"],"phonetic":"/ˈtʃɪkɪn/","translation":"鸡肉","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"We had chicken for dinner.","cn":"我们晚餐吃了鸡肉。"}],"source":"1600单词备用.txt","sourceIndex":257,"sourceLetter":"C","sourceRaw":"chicken","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":258,"word":"child","headwords":["child"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":258,"sourceLetter":"C","sourceRaw":"child (pl. children)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["pl. children"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母C","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":259,"word":"China","headwords":["China"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":259,"sourceLetter":"C","sourceRaw":"China","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":260,"word":"Chinese","headwords":["Chinese"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":260,"sourceLetter":"C","sourceRaw":"Chinese","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":261,"word":"chip","headwords":["chip"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":261,"sourceLetter":"C","sourceRaw":"chip","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":262,"word":"chocolate","headwords":["chocolate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":262,"sourceLetter":"C","sourceRaw":"chocolate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":263,"word":"choice","headwords":["choice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":263,"sourceLetter":"C","sourceRaw":"choice","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":264,"word":"choose","headwords":["choose"],"phonetic":"/tʃuːz/","translation":"选择","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"You can choose any book you like.","cn":"你可以选任何你喜欢的书。"}],"source":"1600单词备用.txt","sourceIndex":264,"sourceLetter":"C","sourceRaw":"choose","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":265,"word":"chopsticks","headwords":["chopsticks"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":265,"sourceLetter":"C","sourceRaw":"chopsticks","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":266,"word":"chore","headwords":["chore"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":266,"sourceLetter":"C","sourceRaw":"chore","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":267,"word":"Christmas","headwords":["Christmas"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":267,"sourceLetter":"C","sourceRaw":"Christmas","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":268,"word":"cinema","headwords":["cinema"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":268,"sourceLetter":"C","sourceRaw":"cinema","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":269,"word":"circle","headwords":["circle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":269,"sourceLetter":"C","sourceRaw":"circle","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":270,"word":"citizen","headwords":["citizen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":270,"sourceLetter":"C","sourceRaw":"citizen","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":271,"word":"city","headwords":["city"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":271,"sourceLetter":"C","sourceRaw":"city","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":272,"word":"class","headwords":["class"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":272,"sourceLetter":"C","sourceRaw":"class","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":273,"word":"classic","headwords":["classic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":273,"sourceLetter":"C","sourceRaw":"classic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":274,"word":"classmate","headwords":["classmate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":274,"sourceLetter":"C","sourceRaw":"classmate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":275,"word":"classroom","headwords":["classroom"],"phonetic":"/ˈklæsruːm/","translation":"教室","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Our classroom is bright and clean.","cn":"我们的教室明亮整洁。"}],"source":"1600单词备用.txt","sourceIndex":275,"sourceLetter":"C","sourceRaw":"classroom","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":276,"word":"clean","headwords":["clean"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":276,"sourceLetter":"C","sourceRaw":"clean","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":277,"word":"clear","headwords":["clear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":277,"sourceLetter":"C","sourceRaw":"clear","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":278,"word":"clever","headwords":["clever"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":278,"sourceLetter":"C","sourceRaw":"clever","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":279,"word":"click","headwords":["click"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":279,"sourceLetter":"C","sourceRaw":"click","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":280,"word":"climate","headwords":["climate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":280,"sourceLetter":"C","sourceRaw":"climate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":281,"word":"climb","headwords":["climb"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":281,"sourceLetter":"C","sourceRaw":"climb","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":282,"word":"clock","headwords":["clock"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":282,"sourceLetter":"C","sourceRaw":"clock","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":283,"word":"close","headwords":["close"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":283,"sourceLetter":"C","sourceRaw":"close","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":284,"word":"clothes","headwords":["clothes"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":284,"sourceLetter":"C","sourceRaw":"clothes","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":285,"word":"cloud","headwords":["cloud"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":285,"sourceLetter":"C","sourceRaw":"cloud","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":286,"word":"cloudy","headwords":["cloudy"],"phonetic":"/ˈklaʊdi/","translation":"多云的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"It is cloudy today.","cn":"今天多云。"}],"source":"1600单词备用.txt","sourceIndex":286,"sourceLetter":"C","sourceRaw":"cloudy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":287,"word":"club","headwords":["club"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":287,"sourceLetter":"C","sourceRaw":"club","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":288,"word":"coach","headwords":["coach"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":288,"sourceLetter":"C","sourceRaw":"coach","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":289,"word":"coast","headwords":["coast"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":289,"sourceLetter":"C","sourceRaw":"coast","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":290,"word":"coat","headwords":["coat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":290,"sourceLetter":"C","sourceRaw":"coat","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":291,"word":"coffee","headwords":["coffee"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":291,"sourceLetter":"C","sourceRaw":"coffee","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":292,"word":"coin","headwords":["coin"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":292,"sourceLetter":"C","sourceRaw":"coin","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":293,"word":"cold","headwords":["cold"],"phonetic":"/koʊld/","translation":"冷的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"It is very cold in January.","cn":"一月份非常冷。"}],"source":"1600单词备用.txt","sourceIndex":293,"sourceLetter":"C","sourceRaw":"cold","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":294,"word":"collect","headwords":["collect"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":294,"sourceLetter":"C","sourceRaw":"collect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":295,"word":"college","headwords":["college"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":295,"sourceLetter":"C","sourceRaw":"college","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":296,"word":"colour","headwords":["colour"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":296,"sourceLetter":"C","sourceRaw":"colour (AmE color)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["AmE color"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母C","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":297,"word":"come","headwords":["come"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":297,"sourceLetter":"C","sourceRaw":"come","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":298,"word":"comfortable","headwords":["comfortable"],"phonetic":"/ˈkʌmftəbl/","translation":"舒适的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"This chair is very comfortable.","cn":"这把椅子很舒服。"}],"source":"1600单词备用.txt","sourceIndex":298,"sourceLetter":"C","sourceRaw":"comfortable","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":299,"word":"common","headwords":["common"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":299,"sourceLetter":"C","sourceRaw":"common","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":300,"word":"communicate","headwords":["communicate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":300,"sourceLetter":"C","sourceRaw":"communicate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":301,"word":"community","headwords":["community"],"phonetic":"/kəˈmjuːnəti/","translation":"社区","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Our community is very friendly.","cn":"我们的社区非常友好。"}],"source":"1600单词备用.txt","sourceIndex":301,"sourceLetter":"C","sourceRaw":"community","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":302,"word":"company","headwords":["company"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":302,"sourceLetter":"C","sourceRaw":"company","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":303,"word":"compare","headwords":["compare"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":303,"sourceLetter":"C","sourceRaw":"compare","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":304,"word":"compete","headwords":["compete"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":304,"sourceLetter":"C","sourceRaw":"compete","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":305,"word":"complete","headwords":["complete"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":305,"sourceLetter":"C","sourceRaw":"complete","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":306,"word":"computer","headwords":["computer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":306,"sourceLetter":"C","sourceRaw":"computer","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":307,"word":"concert","headwords":["concert"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":307,"sourceLetter":"C","sourceRaw":"concert","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":308,"word":"condition","headwords":["condition"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":308,"sourceLetter":"C","sourceRaw":"condition","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":309,"word":"confidence","headwords":["confidence"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":309,"sourceLetter":"C","sourceRaw":"confidence","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":310,"word":"congratulation","headwords":["congratulation"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":310,"sourceLetter":"C","sourceRaw":"congratulation","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":311,"word":"connect","headwords":["connect"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":311,"sourceLetter":"C","sourceRaw":"connect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":312,"word":"consider","headwords":["consider"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":312,"sourceLetter":"C","sourceRaw":"consider","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":313,"word":"continue","headwords":["continue"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":313,"sourceLetter":"C","sourceRaw":"continue","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":314,"word":"control","headwords":["control"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":314,"sourceLetter":"C","sourceRaw":"control","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":315,"word":"convenient","headwords":["convenient"],"phonetic":"/kənˈviːniənt/","translation":"方便的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The subway is very convenient.","cn":"地铁非常方便。"}],"source":"1600单词备用.txt","sourceIndex":315,"sourceLetter":"C","sourceRaw":"convenient","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":316,"word":"conversation","headwords":["conversation"],"phonetic":"/ˌkɑːnvərˈseɪʃn/","translation":"对话","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I had a nice conversation with her.","cn":"我和她进行了一次愉快的对话。"}],"source":"1600单词备用.txt","sourceIndex":316,"sourceLetter":"C","sourceRaw":"conversation","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":317,"word":"cook","headwords":["cook"],"phonetic":"/kʊk/","translation":"烹饪","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My mother cooks delicious food.","cn":"我妈妈做可口的饭菜。"}],"source":"1600单词备用.txt","sourceIndex":317,"sourceLetter":"C","sourceRaw":"cook","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":318,"word":"cookie","headwords":["cookie"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":318,"sourceLetter":"C","sourceRaw":"cookie","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":319,"word":"cool","headwords":["cool"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":319,"sourceLetter":"C","sourceRaw":"cool","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":320,"word":"cooperate","headwords":["cooperate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":320,"sourceLetter":"C","sourceRaw":"cooperate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":321,"word":"copy","headwords":["copy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":321,"sourceLetter":"C","sourceRaw":"copy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":322,"word":"corn","headwords":["corn"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":322,"sourceLetter":"C","sourceRaw":"corn","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":323,"word":"corner","headwords":["corner"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":323,"sourceLetter":"C","sourceRaw":"corner","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":324,"word":"correct","headwords":["correct"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":324,"sourceLetter":"C","sourceRaw":"correct","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":325,"word":"cost","headwords":["cost"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":325,"sourceLetter":"C","sourceRaw":"cost","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":326,"word":"cotton","headwords":["cotton"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":326,"sourceLetter":"C","sourceRaw":"cotton","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":327,"word":"cough","headwords":["cough"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":327,"sourceLetter":"C","sourceRaw":"cough","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":328,"word":"could","headwords":["could"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":328,"sourceLetter":"C","sourceRaw":"could","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":329,"word":"count","headwords":["count"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":329,"sourceLetter":"C","sourceRaw":"count","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":330,"word":"country","headwords":["country"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":330,"sourceLetter":"C","sourceRaw":"country","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":331,"word":"countryside","headwords":["countryside"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":331,"sourceLetter":"C","sourceRaw":"countryside","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":332,"word":"couple","headwords":["couple"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":332,"sourceLetter":"C","sourceRaw":"couple","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":333,"word":"courage","headwords":["courage"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":333,"sourceLetter":"C","sourceRaw":"courage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":334,"word":"course","headwords":["course"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":334,"sourceLetter":"C","sourceRaw":"course","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":335,"word":"cousin","headwords":["cousin"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":335,"sourceLetter":"C","sourceRaw":"cousin","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":336,"word":"cover","headwords":["cover"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":336,"sourceLetter":"C","sourceRaw":"cover","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":337,"word":"cow","headwords":["cow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":337,"sourceLetter":"C","sourceRaw":"cow","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":338,"word":"crazy","headwords":["crazy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":338,"sourceLetter":"C","sourceRaw":"crazy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":339,"word":"create","headwords":["create"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":339,"sourceLetter":"C","sourceRaw":"create","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":340,"word":"creative","headwords":["creative"],"phonetic":"/kriˈeɪtɪv/","translation":"有创造力的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He is very creative in art.","cn":"他在艺术方面很有创造力。"}],"source":"1600单词备用.txt","sourceIndex":340,"sourceLetter":"C","sourceRaw":"creative","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":341,"word":"cross","headwords":["cross"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":341,"sourceLetter":"C","sourceRaw":"cross","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":342,"word":"crowded","headwords":["crowded"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":342,"sourceLetter":"C","sourceRaw":"crowded","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":343,"word":"cry","headwords":["cry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":343,"sourceLetter":"C","sourceRaw":"cry","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":344,"word":"cucumber","headwords":["cucumber"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":344,"sourceLetter":"C","sourceRaw":"cucumber","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":345,"word":"culture","headwords":["culture"],"phonetic":"/ˈkʌltʃər/","translation":"文化","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Chinese culture is very rich.","cn":"中国文化非常丰富。"}],"source":"1600单词备用.txt","sourceIndex":345,"sourceLetter":"C","sourceRaw":"culture","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":346,"word":"cup","headwords":["cup"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":346,"sourceLetter":"C","sourceRaw":"cup","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":347,"word":"curious","headwords":["curious"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":347,"sourceLetter":"C","sourceRaw":"curious","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":348,"word":"customer","headwords":["customer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":348,"sourceLetter":"C","sourceRaw":"customer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":349,"word":"cut","headwords":["cut"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":349,"sourceLetter":"C","sourceRaw":"cut","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":350,"word":"cute","headwords":["cute"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":350,"sourceLetter":"C","sourceRaw":"cute","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母C","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":351,"word":"daily","headwords":["daily"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":351,"sourceLetter":"D","sourceRaw":"daily","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":352,"word":"dance","headwords":["dance"],"phonetic":"/dæns/","translation":"跳舞","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"She loves to dance.","cn":"她喜欢跳舞。"}],"source":"1600单词备用.txt","sourceIndex":352,"sourceLetter":"D","sourceRaw":"dance","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":353,"word":"danger","headwords":["danger"],"phonetic":"/ˈdeɪndʒər/","translation":"危险","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"There is danger ahead.","cn":"前面有危险。"}],"source":"1600单词备用.txt","sourceIndex":353,"sourceLetter":"D","sourceRaw":"danger","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":354,"word":"dangerous","headwords":["dangerous"],"phonetic":"/ˈdeɪndʒərəs/","translation":"危险的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"It is dangerous to swim here.","cn":"在这里游泳很危险。"}],"source":"1600单词备用.txt","sourceIndex":354,"sourceLetter":"D","sourceRaw":"dangerous","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":355,"word":"dark","headwords":["dark"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":355,"sourceLetter":"D","sourceRaw":"dark","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":356,"word":"date","headwords":["date"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":356,"sourceLetter":"D","sourceRaw":"date","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":357,"word":"daughter","headwords":["daughter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":357,"sourceLetter":"D","sourceRaw":"daughter","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":358,"word":"day","headwords":["day"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":358,"sourceLetter":"D","sourceRaw":"day","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":359,"word":"dead","headwords":["dead"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":359,"sourceLetter":"D","sourceRaw":"dead","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":360,"word":"deaf","headwords":["deaf"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":360,"sourceLetter":"D","sourceRaw":"deaf","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":361,"word":"deal","headwords":["deal"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":361,"sourceLetter":"D","sourceRaw":"deal","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":362,"word":"dear","headwords":["dear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":362,"sourceLetter":"D","sourceRaw":"dear","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":363,"word":"death","headwords":["death"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":363,"sourceLetter":"D","sourceRaw":"death","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":364,"word":"decide","headwords":["decide"],"phonetic":"/dɪˈsaɪd/","translation":"决定","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I decided to study harder.","cn":"我决定更加努力学习。"}],"source":"1600单词备用.txt","sourceIndex":364,"sourceLetter":"D","sourceRaw":"decide","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":365,"word":"deep","headwords":["deep"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":365,"sourceLetter":"D","sourceRaw":"deep","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":366,"word":"degree","headwords":["degree"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":366,"sourceLetter":"D","sourceRaw":"degree","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":367,"word":"delicious","headwords":["delicious"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":367,"sourceLetter":"D","sourceRaw":"delicious","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":368,"word":"dentist","headwords":["dentist"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":368,"sourceLetter":"D","sourceRaw":"dentist","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":369,"word":"depend","headwords":["depend"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":369,"sourceLetter":"D","sourceRaw":"depend","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":370,"word":"describe","headwords":["describe"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":370,"sourceLetter":"D","sourceRaw":"describe","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":371,"word":"desert","headwords":["desert"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":371,"sourceLetter":"D","sourceRaw":"desert","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":372,"word":"design","headwords":["design"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":372,"sourceLetter":"D","sourceRaw":"design","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":373,"word":"desk","headwords":["desk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":373,"sourceLetter":"D","sourceRaw":"desk","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":374,"word":"develop","headwords":["develop"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":374,"sourceLetter":"D","sourceRaw":"develop","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":375,"word":"dialogue","headwords":["dialogue"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":375,"sourceLetter":"D","sourceRaw":"dialogue (AmE dialog)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE dialog"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母D","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":376,"word":"diary","headwords":["diary"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":376,"sourceLetter":"D","sourceRaw":"diary","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":377,"word":"dictionary","headwords":["dictionary"],"phonetic":"/ˈdɪkʃəneri/","translation":"词典","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I use a dictionary to look up words.","cn":"我用词典查单词。"}],"source":"1600单词备用.txt","sourceIndex":377,"sourceLetter":"D","sourceRaw":"dictionary","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":378,"word":"die","headwords":["die"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":378,"sourceLetter":"D","sourceRaw":"die","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":379,"word":"diet","headwords":["diet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":379,"sourceLetter":"D","sourceRaw":"diet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":380,"word":"difference","headwords":["difference"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":380,"sourceLetter":"D","sourceRaw":"difference","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":381,"word":"different","headwords":["different"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":381,"sourceLetter":"D","sourceRaw":"different","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":382,"word":"difficult","headwords":["difficult"],"phonetic":"/ˈdɪfɪkəlt/","translation":"困难的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Math is difficult for me.","cn":"数学对我来说很难。"}],"source":"1600单词备用.txt","sourceIndex":382,"sourceLetter":"D","sourceRaw":"difficult","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":383,"word":"dig","headwords":["dig"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":383,"sourceLetter":"D","sourceRaw":"dig","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":384,"word":"digital","headwords":["digital"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":384,"sourceLetter":"D","sourceRaw":"digital","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":385,"word":"dining","headwords":["dining"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":385,"sourceLetter":"D","sourceRaw":"dining","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":386,"word":"dinner","headwords":["dinner"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":386,"sourceLetter":"D","sourceRaw":"dinner","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":387,"word":"direct","headwords":["direct"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":387,"sourceLetter":"D","sourceRaw":"direct","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":388,"word":"director","headwords":["director"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":388,"sourceLetter":"D","sourceRaw":"director","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":389,"word":"dirty","headwords":["dirty"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":389,"sourceLetter":"D","sourceRaw":"dirty","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":390,"word":"disappoint","headwords":["disappoint"],"phonetic":"/ˌdɪsəˈpɔɪnt/","translation":"使失望","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I don't want to disappoint my parents.","cn":"我不想让父母失望。"}],"source":"1600单词备用.txt","sourceIndex":390,"sourceLetter":"D","sourceRaw":"disappoint","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":391,"word":"disaster","headwords":["disaster"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":391,"sourceLetter":"D","sourceRaw":"disaster","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":392,"word":"discover","headwords":["discover"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":392,"sourceLetter":"D","sourceRaw":"discover","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":393,"word":"discuss","headwords":["discuss"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":393,"sourceLetter":"D","sourceRaw":"discuss","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":394,"word":"disease","headwords":["disease"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":394,"sourceLetter":"D","sourceRaw":"disease","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":395,"word":"dish","headwords":["dish"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":395,"sourceLetter":"D","sourceRaw":"dish","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":396,"word":"divide","headwords":["divide"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":396,"sourceLetter":"D","sourceRaw":"divide","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":397,"word":"do","headwords":["do"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":397,"sourceLetter":"D","sourceRaw":"do","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":398,"word":"doctor","headwords":["doctor"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":398,"sourceLetter":"D","sourceRaw":"doctor","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":399,"word":"dog","headwords":["dog"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":399,"sourceLetter":"D","sourceRaw":"dog","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":400,"word":"doll","headwords":["doll"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":400,"sourceLetter":"D","sourceRaw":"doll","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":401,"word":"dollar","headwords":["dollar"],"phonetic":"/ˈdɑːlər/","translation":"美元","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"It costs five dollars.","cn":"它要五美元。"}],"source":"1600单词备用.txt","sourceIndex":401,"sourceLetter":"D","sourceRaw":"dollar","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":402,"word":"donate","headwords":["donate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":402,"sourceLetter":"D","sourceRaw":"donate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":403,"word":"door","headwords":["door"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":403,"sourceLetter":"D","sourceRaw":"door","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":404,"word":"double","headwords":["double"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":404,"sourceLetter":"D","sourceRaw":"double","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":405,"word":"doubt","headwords":["doubt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":405,"sourceLetter":"D","sourceRaw":"doubt","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":406,"word":"down","headwords":["down"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":406,"sourceLetter":"D","sourceRaw":"down","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":407,"word":"download","headwords":["download"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":407,"sourceLetter":"D","sourceRaw":"download","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":408,"word":"dragon","headwords":["dragon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":408,"sourceLetter":"D","sourceRaw":"dragon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":409,"word":"drama","headwords":["drama"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":409,"sourceLetter":"D","sourceRaw":"drama","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":410,"word":"draw","headwords":["draw"],"phonetic":"/drɔː/","translation":"画画","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He can draw beautiful pictures.","cn":"他能画出漂亮的画。"}],"source":"1600单词备用.txt","sourceIndex":410,"sourceLetter":"D","sourceRaw":"draw","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":411,"word":"dream","headwords":["dream"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":411,"sourceLetter":"D","sourceRaw":"dream","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":412,"word":"dress","headwords":["dress"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":412,"sourceLetter":"D","sourceRaw":"dress","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":413,"word":"drink","headwords":["drink"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":413,"sourceLetter":"D","sourceRaw":"drink","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":414,"word":"drive","headwords":["drive"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":414,"sourceLetter":"D","sourceRaw":"drive","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":415,"word":"driver","headwords":["driver"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":415,"sourceLetter":"D","sourceRaw":"driver","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":416,"word":"drop","headwords":["drop"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":416,"sourceLetter":"D","sourceRaw":"drop","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":417,"word":"dry","headwords":["dry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":417,"sourceLetter":"D","sourceRaw":"dry","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":418,"word":"duck","headwords":["duck"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":418,"sourceLetter":"D","sourceRaw":"duck","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":419,"word":"dumpling","headwords":["dumpling"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":419,"sourceLetter":"D","sourceRaw":"dumpling","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":420,"word":"during","headwords":["during"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":420,"sourceLetter":"D","sourceRaw":"during","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":421,"word":"duty","headwords":["duty"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":421,"sourceLetter":"D","sourceRaw":"duty","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母D","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":422,"word":"each","headwords":["each"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":422,"sourceLetter":"E","sourceRaw":"each","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":423,"word":"eagle","headwords":["eagle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":423,"sourceLetter":"E","sourceRaw":"eagle","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":424,"word":"ear","headwords":["ear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":424,"sourceLetter":"E","sourceRaw":"ear","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":425,"word":"early","headwords":["early"],"phonetic":"/ˈɜːrli/","translation":"早","pos":"adv.","grade":null,"semester":null,"unit":null,"examples":[{"en":"She always comes early.","cn":"她总是来得很早。"}],"source":"1600单词备用.txt","sourceIndex":425,"sourceLetter":"E","sourceRaw":"early","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":426,"word":"earth","headwords":["earth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":426,"sourceLetter":"E","sourceRaw":"earth","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":427,"word":"earthquake","headwords":["earthquake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":427,"sourceLetter":"E","sourceRaw":"earthquake","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":428,"word":"east","headwords":["east"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":428,"sourceLetter":"E","sourceRaw":"east","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":429,"word":"easy","headwords":["easy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":429,"sourceLetter":"E","sourceRaw":"easy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":430,"word":"eat","headwords":["eat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":430,"sourceLetter":"E","sourceRaw":"eat","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":431,"word":"education","headwords":["education"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":431,"sourceLetter":"E","sourceRaw":"education","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":432,"word":"effect","headwords":["effect"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":432,"sourceLetter":"E","sourceRaw":"effect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":433,"word":"effort","headwords":["effort"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":433,"sourceLetter":"E","sourceRaw":"effort","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":434,"word":"egg","headwords":["egg"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":434,"sourceLetter":"E","sourceRaw":"egg","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":435,"word":"either","headwords":["either"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":435,"sourceLetter":"E","sourceRaw":"either","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":436,"word":"elder","headwords":["elder"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":436,"sourceLetter":"E","sourceRaw":"elder","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":437,"word":"electric","headwords":["electric"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":437,"sourceLetter":"E","sourceRaw":"electric","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":438,"word":"electronic","headwords":["electronic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":438,"sourceLetter":"E","sourceRaw":"electronic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":439,"word":"elephant","headwords":["elephant"],"phonetic":"/ˈelɪfənt/","translation":"大象","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"An elephant is very big.","cn":"大象非常大。"}],"source":"1600单词备用.txt","sourceIndex":439,"sourceLetter":"E","sourceRaw":"elephant","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":440,"word":"else","headwords":["else"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":440,"sourceLetter":"E","sourceRaw":"else","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":441,"word":"email","headwords":["email"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":441,"sourceLetter":"E","sourceRaw":"email","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":442,"word":"emergency","headwords":["emergency"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":442,"sourceLetter":"E","sourceRaw":"emergency","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":443,"word":"emperor","headwords":["emperor","empress"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":443,"sourceLetter":"E","sourceRaw":"emperor / empress","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":444,"word":"empty","headwords":["empty"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":444,"sourceLetter":"E","sourceRaw":"empty","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":445,"word":"encourage","headwords":["encourage"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":445,"sourceLetter":"E","sourceRaw":"encourage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":446,"word":"end","headwords":["end"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":446,"sourceLetter":"E","sourceRaw":"end","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":447,"word":"enemy","headwords":["enemy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":447,"sourceLetter":"E","sourceRaw":"enemy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":448,"word":"energetic","headwords":["energetic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":448,"sourceLetter":"E","sourceRaw":"energetic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":449,"word":"energy","headwords":["energy"],"phonetic":"/ˈenərdʒi/","translation":"能量","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Solar energy is clean.","cn":"太阳能是清洁能源。"}],"source":"1600单词备用.txt","sourceIndex":449,"sourceLetter":"E","sourceRaw":"energy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":450,"word":"engineer","headwords":["engineer"],"phonetic":"/ˌendʒɪˈnɪr/","translation":"工程师","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My father is an engineer.","cn":"我爸爸是工程师。"}],"source":"1600单词备用.txt","sourceIndex":450,"sourceLetter":"E","sourceRaw":"engineer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":451,"word":"English","headwords":["English"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":451,"sourceLetter":"E","sourceRaw":"English","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":452,"word":"enjoy","headwords":["enjoy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":452,"sourceLetter":"E","sourceRaw":"enjoy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":453,"word":"enough","headwords":["enough"],"phonetic":"/ɪˈnʌf/","translation":"足够的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"That is enough, thank you.","cn":"够了，谢谢你。"}],"source":"1600单词备用.txt","sourceIndex":453,"sourceLetter":"E","sourceRaw":"enough","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":454,"word":"enter","headwords":["enter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":454,"sourceLetter":"E","sourceRaw":"enter","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":455,"word":"environment","headwords":["environment"],"phonetic":"/ɪnˈvaɪrənmənt/","translation":"环境","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"We must protect the environment.","cn":"我们必须保护环境。"}],"source":"1600单词备用.txt","sourceIndex":455,"sourceLetter":"E","sourceRaw":"environment","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":456,"word":"era","headwords":["era"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":456,"sourceLetter":"E","sourceRaw":"era","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":457,"word":"eraser","headwords":["eraser"],"phonetic":"/ɪˈreɪsər/","translation":"橡皮","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Can I borrow your eraser?","cn":"我能借你的橡皮吗？"}],"source":"1600单词备用.txt","sourceIndex":457,"sourceLetter":"E","sourceRaw":"eraser","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":458,"word":"especially","headwords":["especially"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":458,"sourceLetter":"E","sourceRaw":"especially","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":459,"word":"even","headwords":["even"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":459,"sourceLetter":"E","sourceRaw":"even","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":460,"word":"evening","headwords":["evening"],"phonetic":"/ˈiːvnɪŋ/","translation":"傍晚","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I do my homework in the evening.","cn":"我晚上做作业。"}],"source":"1600单词备用.txt","sourceIndex":460,"sourceLetter":"E","sourceRaw":"evening","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":461,"word":"event","headwords":["event"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":461,"sourceLetter":"E","sourceRaw":"event","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":462,"word":"ever","headwords":["ever"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":462,"sourceLetter":"E","sourceRaw":"ever","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":463,"word":"every","headwords":["every"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":463,"sourceLetter":"E","sourceRaw":"every","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":464,"word":"everybody","headwords":["everybody","everyone"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":464,"sourceLetter":"E","sourceRaw":"everybody / everyone","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":465,"word":"everyday","headwords":["everyday"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":465,"sourceLetter":"E","sourceRaw":"everyday","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":466,"word":"everything","headwords":["everything"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":466,"sourceLetter":"E","sourceRaw":"everything","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":467,"word":"everywhere","headwords":["everywhere"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":467,"sourceLetter":"E","sourceRaw":"everywhere","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":468,"word":"exactly","headwords":["exactly"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":468,"sourceLetter":"E","sourceRaw":"exactly","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":469,"word":"examination","headwords":["examination"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":469,"sourceLetter":"E","sourceRaw":"exam (=examination)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=examination"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母E","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":470,"word":"example","headwords":["example"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":470,"sourceLetter":"E","sourceRaw":"example","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":471,"word":"excellent","headwords":["excellent"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":471,"sourceLetter":"E","sourceRaw":"excellent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":472,"word":"except","headwords":["except"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":472,"sourceLetter":"E","sourceRaw":"except","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":473,"word":"excited","headwords":["excited"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":473,"sourceLetter":"E","sourceRaw":"excited","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":474,"word":"exciting","headwords":["exciting"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":474,"sourceLetter":"E","sourceRaw":"exciting","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":475,"word":"excuse","headwords":["excuse"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":475,"sourceLetter":"E","sourceRaw":"excuse","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":476,"word":"exercise","headwords":["exercise"],"phonetic":"/ˈeksərsaɪz/","translation":"锻炼","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I exercise every morning.","cn":"我每天早上锻炼。"}],"source":"1600单词备用.txt","sourceIndex":476,"sourceLetter":"E","sourceRaw":"exercise","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":477,"word":"expect","headwords":["expect"],"phonetic":"/ɪkˈspekt/","translation":"期待","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I expect to pass the exam.","cn":"我希望能通过考试。"}],"source":"1600单词备用.txt","sourceIndex":477,"sourceLetter":"E","sourceRaw":"expect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":478,"word":"expensive","headwords":["expensive"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":478,"sourceLetter":"E","sourceRaw":"expensive","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":479,"word":"experience","headwords":["experience"],"phonetic":"/ɪkˈspɪriəns/","translation":"经历","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Traveling is a great experience.","cn":"旅行是一次很棒的经历。"}],"source":"1600单词备用.txt","sourceIndex":479,"sourceLetter":"E","sourceRaw":"experience","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":480,"word":"expert","headwords":["expert"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":480,"sourceLetter":"E","sourceRaw":"expert","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":481,"word":"explain","headwords":["explain"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":481,"sourceLetter":"E","sourceRaw":"explain","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":482,"word":"explore","headwords":["explore"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":482,"sourceLetter":"E","sourceRaw":"explore","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":483,"word":"express","headwords":["express"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":483,"sourceLetter":"E","sourceRaw":"express","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":484,"word":"eye","headwords":["eye"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":484,"sourceLetter":"E","sourceRaw":"eye","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母E","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":485,"word":"face","headwords":["face"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":485,"sourceLetter":"F","sourceRaw":"face","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":486,"word":"fact","headwords":["fact"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":486,"sourceLetter":"F","sourceRaw":"fact","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":487,"word":"factory","headwords":["factory"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":487,"sourceLetter":"F","sourceRaw":"factory","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":488,"word":"fail","headwords":["fail"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":488,"sourceLetter":"F","sourceRaw":"fail","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":489,"word":"fair","headwords":["fair"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":489,"sourceLetter":"F","sourceRaw":"fair","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":490,"word":"fall","headwords":["fall"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":490,"sourceLetter":"F","sourceRaw":"fall","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":491,"word":"false","headwords":["false"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":491,"sourceLetter":"F","sourceRaw":"false","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":492,"word":"familiar","headwords":["familiar"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":492,"sourceLetter":"F","sourceRaw":"familiar","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":493,"word":"family","headwords":["family"],"phonetic":"/ˈfæməli/","translation":"家庭","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I love my family.","cn":"我爱我的家人。"}],"source":"1600单词备用.txt","sourceIndex":493,"sourceLetter":"F","sourceRaw":"family","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":494,"word":"famous","headwords":["famous"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":494,"sourceLetter":"F","sourceRaw":"famous","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":495,"word":"fan","headwords":["fan"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":495,"sourceLetter":"F","sourceRaw":"fan","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":496,"word":"fantastic","headwords":["fantastic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":496,"sourceLetter":"F","sourceRaw":"fantastic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":497,"word":"far","headwords":["far"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":497,"sourceLetter":"F","sourceRaw":"far","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":498,"word":"farm","headwords":["farm"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":498,"sourceLetter":"F","sourceRaw":"farm","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":499,"word":"farmer","headwords":["farmer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":499,"sourceLetter":"F","sourceRaw":"farmer","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":500,"word":"fashion","headwords":["fashion"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":500,"sourceLetter":"F","sourceRaw":"fashion","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":501,"word":"fast","headwords":["fast"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":501,"sourceLetter":"F","sourceRaw":"fast","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":502,"word":"fat","headwords":["fat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":502,"sourceLetter":"F","sourceRaw":"fat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":503,"word":"father","headwords":["father"],"phonetic":"/ˈfɑːðər/","translation":"父亲","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My father works in a hospital.","cn":"我爸爸在医院工作。"}],"source":"1600单词备用.txt","sourceIndex":503,"sourceLetter":"F","sourceRaw":"father (dad)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["dad"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母F","二级词汇","含括号说明"],"verifyStatus":"merged-existing-enrichment"},
  {"id":504,"word":"favourite","headwords":["favourite"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":504,"sourceLetter":"F","sourceRaw":"favourite (AmE favorite)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["AmE favorite"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母F","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":505,"word":"fear","headwords":["fear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":505,"sourceLetter":"F","sourceRaw":"fear","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":506,"word":"feed","headwords":["feed"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":506,"sourceLetter":"F","sourceRaw":"feed","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":507,"word":"feel","headwords":["feel"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":507,"sourceLetter":"F","sourceRaw":"feel","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":508,"word":"feeling","headwords":["feeling"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":508,"sourceLetter":"F","sourceRaw":"feeling","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":509,"word":"festival","headwords":["festival"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":509,"sourceLetter":"F","sourceRaw":"festival","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":510,"word":"fever","headwords":["fever"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":510,"sourceLetter":"F","sourceRaw":"fever","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":511,"word":"few","headwords":["few"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":511,"sourceLetter":"F","sourceRaw":"few","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":512,"word":"field","headwords":["field"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":512,"sourceLetter":"F","sourceRaw":"field","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":513,"word":"fight","headwords":["fight"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":513,"sourceLetter":"F","sourceRaw":"fight","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":514,"word":"fill","headwords":["fill"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":514,"sourceLetter":"F","sourceRaw":"fill","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":515,"word":"film","headwords":["film"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":515,"sourceLetter":"F","sourceRaw":"film","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":516,"word":"final","headwords":["final"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":516,"sourceLetter":"F","sourceRaw":"final","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":517,"word":"find","headwords":["find"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":517,"sourceLetter":"F","sourceRaw":"find","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":518,"word":"fine","headwords":["fine"],"phonetic":"/faɪn/","translation":"好的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I'm fine, thank you.","cn":"我很好，谢谢。"}],"source":"1600单词备用.txt","sourceIndex":518,"sourceLetter":"F","sourceRaw":"fine","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":519,"word":"finger","headwords":["finger"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":519,"sourceLetter":"F","sourceRaw":"finger","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":520,"word":"finish","headwords":["finish"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":520,"sourceLetter":"F","sourceRaw":"finish","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":521,"word":"fire","headwords":["fire"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":521,"sourceLetter":"F","sourceRaw":"fire","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":522,"word":"fireman","headwords":["fireman"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":522,"sourceLetter":"F","sourceRaw":"fireman (pl. firemen)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. firemen"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母F","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":523,"word":"firework","headwords":["firework"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":523,"sourceLetter":"F","sourceRaw":"firework","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":524,"word":"fish","headwords":["fish"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":524,"sourceLetter":"F","sourceRaw":"fish","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":525,"word":"fit","headwords":["fit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":525,"sourceLetter":"F","sourceRaw":"fit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":526,"word":"fix","headwords":["fix"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":526,"sourceLetter":"F","sourceRaw":"fix","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":527,"word":"flag","headwords":["flag"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":527,"sourceLetter":"F","sourceRaw":"flag","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":528,"word":"flat","headwords":["flat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":528,"sourceLetter":"F","sourceRaw":"flat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":529,"word":"flood","headwords":["flood"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":529,"sourceLetter":"F","sourceRaw":"flood","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":530,"word":"floor","headwords":["floor"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":530,"sourceLetter":"F","sourceRaw":"floor","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":531,"word":"flower","headwords":["flower"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":531,"sourceLetter":"F","sourceRaw":"flower","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":532,"word":"flu","headwords":["flu"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":532,"sourceLetter":"F","sourceRaw":"flu","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":533,"word":"fly","headwords":["fly"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":533,"sourceLetter":"F","sourceRaw":"fly","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":534,"word":"focus","headwords":["focus"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":534,"sourceLetter":"F","sourceRaw":"focus","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":535,"word":"fog","headwords":["fog"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":535,"sourceLetter":"F","sourceRaw":"fog","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":536,"word":"folk","headwords":["folk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":536,"sourceLetter":"F","sourceRaw":"folk","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":537,"word":"follow","headwords":["follow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":537,"sourceLetter":"F","sourceRaw":"follow","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":538,"word":"food","headwords":["food"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":538,"sourceLetter":"F","sourceRaw":"food","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":539,"word":"fool","headwords":["fool"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":539,"sourceLetter":"F","sourceRaw":"fool","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":540,"word":"foot","headwords":["foot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":540,"sourceLetter":"F","sourceRaw":"foot (pl. feet)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["pl. feet"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母F","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":541,"word":"football","headwords":["football"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":541,"sourceLetter":"F","sourceRaw":"football","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":542,"word":"for","headwords":["for"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":542,"sourceLetter":"F","sourceRaw":"for","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":543,"word":"force","headwords":["force"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":543,"sourceLetter":"F","sourceRaw":"force","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":544,"word":"foreign","headwords":["foreign"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":544,"sourceLetter":"F","sourceRaw":"foreign","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":545,"word":"forest","headwords":["forest"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":545,"sourceLetter":"F","sourceRaw":"forest","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":546,"word":"forever","headwords":["forever"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":546,"sourceLetter":"F","sourceRaw":"forever","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":547,"word":"forget","headwords":["forget"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":547,"sourceLetter":"F","sourceRaw":"forget","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":548,"word":"fork","headwords":["fork"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":548,"sourceLetter":"F","sourceRaw":"fork","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":549,"word":"form","headwords":["form"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":549,"sourceLetter":"F","sourceRaw":"form","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":550,"word":"forward","headwords":["forward"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":550,"sourceLetter":"F","sourceRaw":"forward","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":551,"word":"found","headwords":["found"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":551,"sourceLetter":"F","sourceRaw":"found","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":552,"word":"fox","headwords":["fox"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":552,"sourceLetter":"F","sourceRaw":"fox","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":553,"word":"free","headwords":["free"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":553,"sourceLetter":"F","sourceRaw":"free","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":554,"word":"freeze","headwords":["freeze"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":554,"sourceLetter":"F","sourceRaw":"freeze","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":555,"word":"fresh","headwords":["fresh"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":555,"sourceLetter":"F","sourceRaw":"fresh","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":556,"word":"refrigerator","headwords":["refrigerator"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":556,"sourceLetter":"F","sourceRaw":"fridge (=refrigerator)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=refrigerator"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母F","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":557,"word":"friend","headwords":["friend"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":557,"sourceLetter":"F","sourceRaw":"friend","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":558,"word":"friendly","headwords":["friendly"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":558,"sourceLetter":"F","sourceRaw":"friendly","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":559,"word":"friendship","headwords":["friendship"],"phonetic":"/ˈfrendʃɪp/","translation":"友谊","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"True friendship lasts forever.","cn":"真正的友谊永恒不变。"}],"source":"1600单词备用.txt","sourceIndex":559,"sourceLetter":"F","sourceRaw":"friendship","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":560,"word":"from","headwords":["from"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":560,"sourceLetter":"F","sourceRaw":"from","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":561,"word":"front","headwords":["front"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":561,"sourceLetter":"F","sourceRaw":"front","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":562,"word":"fruit","headwords":["fruit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":562,"sourceLetter":"F","sourceRaw":"fruit","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":563,"word":"full","headwords":["full"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":563,"sourceLetter":"F","sourceRaw":"full","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":564,"word":"fun","headwords":["fun"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":564,"sourceLetter":"F","sourceRaw":"fun","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":565,"word":"funny","headwords":["funny"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":565,"sourceLetter":"F","sourceRaw":"funny","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":566,"word":"future","headwords":["future"],"phonetic":"/ˈfjuːtʃər/","translation":"未来","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"What do you want to be in the future?","cn":"你将来想做什么？"}],"source":"1600单词备用.txt","sourceIndex":566,"sourceLetter":"F","sourceRaw":"future","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母F","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":567,"word":"game","headwords":["game"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":567,"sourceLetter":"G","sourceRaw":"game","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":568,"word":"garden","headwords":["garden"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":568,"sourceLetter":"G","sourceRaw":"garden","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":569,"word":"gas","headwords":["gas"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":569,"sourceLetter":"G","sourceRaw":"gas","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":570,"word":"gate","headwords":["gate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":570,"sourceLetter":"G","sourceRaw":"gate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":571,"word":"general","headwords":["general"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":571,"sourceLetter":"G","sourceRaw":"general","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":572,"word":"gentleman","headwords":["gentleman"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":572,"sourceLetter":"G","sourceRaw":"gentleman (pl. gentlemen)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. gentlemen"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母G","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":573,"word":"geography","headwords":["geography"],"phonetic":"/dʒiˈɑːɡrəfi/","translation":"地理","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Geography teaches us about the world.","cn":"地理教我们认识世界。"}],"source":"1600单词备用.txt","sourceIndex":573,"sourceLetter":"G","sourceRaw":"geography","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":574,"word":"get","headwords":["get"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":574,"sourceLetter":"G","sourceRaw":"get","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":575,"word":"gift","headwords":["gift"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":575,"sourceLetter":"G","sourceRaw":"gift","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":576,"word":"giraffe","headwords":["giraffe"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":576,"sourceLetter":"G","sourceRaw":"giraffe","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":577,"word":"girl","headwords":["girl"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":577,"sourceLetter":"G","sourceRaw":"girl","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":578,"word":"give","headwords":["give"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":578,"sourceLetter":"G","sourceRaw":"give","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":579,"word":"glad","headwords":["glad"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":579,"sourceLetter":"G","sourceRaw":"glad","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":580,"word":"glass","headwords":["glass"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":580,"sourceLetter":"G","sourceRaw":"glass","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":581,"word":"glove","headwords":["glove"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":581,"sourceLetter":"G","sourceRaw":"glove","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":582,"word":"glue","headwords":["glue"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":582,"sourceLetter":"G","sourceRaw":"glue","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":583,"word":"go","headwords":["go"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":583,"sourceLetter":"G","sourceRaw":"go","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":584,"word":"goal","headwords":["goal"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":584,"sourceLetter":"G","sourceRaw":"goal","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":585,"word":"god","headwords":["god"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":585,"sourceLetter":"G","sourceRaw":"god","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":586,"word":"gold","headwords":["gold"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":586,"sourceLetter":"G","sourceRaw":"gold","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":587,"word":"good","headwords":["good"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":587,"sourceLetter":"G","sourceRaw":"good","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":588,"word":"goodbye","headwords":["goodbye"],"phonetic":"/ɡʊdˈbaɪ/","translation":"再见","pos":"int.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Goodbye, see you tomorrow.","cn":"再见，明天见。"}],"source":"1600单词备用.txt","sourceIndex":588,"sourceLetter":"G","sourceRaw":"goodbye (bye)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["bye"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母G","二级词汇","含括号说明"],"verifyStatus":"merged-existing-enrichment"},
  {"id":589,"word":"government","headwords":["government"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":589,"sourceLetter":"G","sourceRaw":"government","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":590,"word":"grade","headwords":["grade"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":590,"sourceLetter":"G","sourceRaw":"grade","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":591,"word":"graduate","headwords":["graduate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":591,"sourceLetter":"G","sourceRaw":"graduate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":592,"word":"grammar","headwords":["grammar"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":592,"sourceLetter":"G","sourceRaw":"grammar","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":593,"word":"grandfather","headwords":["grandfather"],"phonetic":"/ˈɡrænfɑːðər/","translation":"祖父","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My grandfather tells good stories.","cn":"我爷爷讲故事很好听。"}],"source":"1600单词备用.txt","sourceIndex":593,"sourceLetter":"G","sourceRaw":"grandfather (grandpa)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["grandpa"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母G","二级词汇","含括号说明"],"verifyStatus":"merged-existing-enrichment"},
  {"id":594,"word":"grandmother","headwords":["grandmother"],"phonetic":"/ˈɡrænmʌðər/","translation":"祖母","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My grandmother lives with us.","cn":"我奶奶和我们住在一起。"}],"source":"1600单词备用.txt","sourceIndex":594,"sourceLetter":"G","sourceRaw":"grandmother (grandma)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["grandma"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母G","二级词汇","含括号说明"],"verifyStatus":"merged-existing-enrichment"},
  {"id":595,"word":"grape","headwords":["grape"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":595,"sourceLetter":"G","sourceRaw":"grape","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":596,"word":"grass","headwords":["grass"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":596,"sourceLetter":"G","sourceRaw":"grass","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":597,"word":"great","headwords":["great"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":597,"sourceLetter":"G","sourceRaw":"great","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":598,"word":"green","headwords":["green"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":598,"sourceLetter":"G","sourceRaw":"green","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":599,"word":"greet","headwords":["greet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":599,"sourceLetter":"G","sourceRaw":"greet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":600,"word":"grey","headwords":["grey"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":600,"sourceLetter":"G","sourceRaw":"grey (AmE gray)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE gray"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母G","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":601,"word":"ground","headwords":["ground"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":601,"sourceLetter":"G","sourceRaw":"ground","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":602,"word":"group","headwords":["group"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":602,"sourceLetter":"G","sourceRaw":"group","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":603,"word":"grow","headwords":["grow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":603,"sourceLetter":"G","sourceRaw":"grow","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":604,"word":"guard","headwords":["guard"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":604,"sourceLetter":"G","sourceRaw":"guard","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":605,"word":"guess","headwords":["guess"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":605,"sourceLetter":"G","sourceRaw":"guess","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":606,"word":"guest","headwords":["guest"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":606,"sourceLetter":"G","sourceRaw":"guest","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":607,"word":"guide","headwords":["guide"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":607,"sourceLetter":"G","sourceRaw":"guide","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":608,"word":"guitar","headwords":["guitar"],"phonetic":"/ɡɪˈtɑːr/","translation":"吉他","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He can play the guitar.","cn":"他会弹吉他。"}],"source":"1600单词备用.txt","sourceIndex":608,"sourceLetter":"G","sourceRaw":"guitar","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":609,"word":"gun","headwords":["gun"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":609,"sourceLetter":"G","sourceRaw":"gun","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母G","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":610,"word":"gymnasium","headwords":["gymnasium"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":610,"sourceLetter":"G","sourceRaw":"gym (=gymnasium)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=gymnasium"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母G","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":611,"word":"habit","headwords":["habit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":611,"sourceLetter":"H","sourceRaw":"habit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":612,"word":"hair","headwords":["hair"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":612,"sourceLetter":"H","sourceRaw":"hair","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":613,"word":"half","headwords":["half"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":613,"sourceLetter":"H","sourceRaw":"half","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":614,"word":"hall","headwords":["hall"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":614,"sourceLetter":"H","sourceRaw":"hall","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":615,"word":"hamburger","headwords":["hamburger"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":615,"sourceLetter":"H","sourceRaw":"hamburger","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":616,"word":"hand","headwords":["hand"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":616,"sourceLetter":"H","sourceRaw":"hand","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":617,"word":"handsome","headwords":["handsome"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":617,"sourceLetter":"H","sourceRaw":"handsome","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":618,"word":"hang","headwords":["hang"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":618,"sourceLetter":"H","sourceRaw":"hang","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":619,"word":"happen","headwords":["happen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":619,"sourceLetter":"H","sourceRaw":"happen","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":620,"word":"happy","headwords":["happy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":620,"sourceLetter":"H","sourceRaw":"happy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":621,"word":"hard","headwords":["hard"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":621,"sourceLetter":"H","sourceRaw":"hard","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":622,"word":"hardly","headwords":["hardly"],"phonetic":"/ˈhɑːrdli/","translation":"几乎不","pos":"adv.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I hardly ever eat junk food.","cn":"我几乎不吃垃圾食品。"}],"source":"1600单词备用.txt","sourceIndex":622,"sourceLetter":"H","sourceRaw":"hardly","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":623,"word":"harm","headwords":["harm"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":623,"sourceLetter":"H","sourceRaw":"harm","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":624,"word":"hat","headwords":["hat"],"phonetic":"/hæt/","translation":"帽子","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"She is wearing a red hat.","cn":"她戴着一顶红帽子。"}],"source":"1600单词备用.txt","sourceIndex":624,"sourceLetter":"H","sourceRaw":"hat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":625,"word":"hate","headwords":["hate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":625,"sourceLetter":"H","sourceRaw":"hate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":626,"word":"have","headwords":["have"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":626,"sourceLetter":"H","sourceRaw":"have (has)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["has"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母H","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":627,"word":"he","headwords":["he"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":627,"sourceLetter":"H","sourceRaw":"he","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":628,"word":"head","headwords":["head"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":628,"sourceLetter":"H","sourceRaw":"head","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":629,"word":"health","headwords":["health"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":629,"sourceLetter":"H","sourceRaw":"health","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":630,"word":"healthy","headwords":["healthy"],"phonetic":"/ˈhelθi/","translation":"健康的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Running is a healthy habit.","cn":"跑步是健康的习惯。"}],"source":"1600单词备用.txt","sourceIndex":630,"sourceLetter":"H","sourceRaw":"healthy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":631,"word":"hear","headwords":["hear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":631,"sourceLetter":"H","sourceRaw":"hear","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":632,"word":"heart","headwords":["heart"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":632,"sourceLetter":"H","sourceRaw":"heart","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":633,"word":"heat","headwords":["heat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":633,"sourceLetter":"H","sourceRaw":"heat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":634,"word":"heavy","headwords":["heavy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":634,"sourceLetter":"H","sourceRaw":"heavy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":635,"word":"height","headwords":["height"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":635,"sourceLetter":"H","sourceRaw":"height","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":636,"word":"hello","headwords":["hello"],"phonetic":"/həˈloʊ/","translation":"你好","pos":"int.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Hello, how are you?","cn":"你好，你怎么样？"}],"source":"1600单词备用.txt","sourceIndex":636,"sourceLetter":"H","sourceRaw":"hello","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":637,"word":"help","headwords":["help"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":637,"sourceLetter":"H","sourceRaw":"help","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":638,"word":"helpful","headwords":["helpful"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":638,"sourceLetter":"H","sourceRaw":"helpful","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":639,"word":"hen","headwords":["hen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":639,"sourceLetter":"H","sourceRaw":"hen","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":640,"word":"her","headwords":["her"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":640,"sourceLetter":"H","sourceRaw":"her","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":641,"word":"here","headwords":["here"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":641,"sourceLetter":"H","sourceRaw":"here","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":642,"word":"hero","headwords":["hero"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":642,"sourceLetter":"H","sourceRaw":"hero","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":643,"word":"hers","headwords":["hers"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":643,"sourceLetter":"H","sourceRaw":"hers","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":644,"word":"herself","headwords":["herself"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":644,"sourceLetter":"H","sourceRaw":"herself","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":645,"word":"hi","headwords":["hi"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":645,"sourceLetter":"H","sourceRaw":"hi","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":646,"word":"hide","headwords":["hide"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":646,"sourceLetter":"H","sourceRaw":"hide","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":647,"word":"high","headwords":["high"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":647,"sourceLetter":"H","sourceRaw":"high","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":648,"word":"hike","headwords":["hike"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":648,"sourceLetter":"H","sourceRaw":"hike","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":649,"word":"hill","headwords":["hill"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":649,"sourceLetter":"H","sourceRaw":"hill","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":650,"word":"him","headwords":["him"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":650,"sourceLetter":"H","sourceRaw":"him","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":651,"word":"himself","headwords":["himself"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":651,"sourceLetter":"H","sourceRaw":"himself","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":652,"word":"his","headwords":["his"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":652,"sourceLetter":"H","sourceRaw":"his","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":653,"word":"history","headwords":["history"],"phonetic":"/ˈhɪstri/","translation":"历史","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I enjoy learning history.","cn":"我喜欢学历史。"}],"source":"1600单词备用.txt","sourceIndex":653,"sourceLetter":"H","sourceRaw":"history","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":654,"word":"hit","headwords":["hit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":654,"sourceLetter":"H","sourceRaw":"hit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":655,"word":"hobby","headwords":["hobby"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":655,"sourceLetter":"H","sourceRaw":"hobby","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":656,"word":"hold","headwords":["hold"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":656,"sourceLetter":"H","sourceRaw":"hold","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":657,"word":"hole","headwords":["hole"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":657,"sourceLetter":"H","sourceRaw":"hole","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":658,"word":"holiday","headwords":["holiday"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":658,"sourceLetter":"H","sourceRaw":"holiday","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":659,"word":"home","headwords":["home"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":659,"sourceLetter":"H","sourceRaw":"home","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":660,"word":"hometown","headwords":["hometown"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":660,"sourceLetter":"H","sourceRaw":"hometown","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":661,"word":"homework","headwords":["homework"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":661,"sourceLetter":"H","sourceRaw":"homework","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":662,"word":"honest","headwords":["honest"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":662,"sourceLetter":"H","sourceRaw":"honest","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":663,"word":"honey","headwords":["honey"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":663,"sourceLetter":"H","sourceRaw":"honey","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":664,"word":"honour","headwords":["honour"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":664,"sourceLetter":"H","sourceRaw":"honour (AmE honor)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE honor"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母H","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":665,"word":"hope","headwords":["hope"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":665,"sourceLetter":"H","sourceRaw":"hope","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":666,"word":"horse","headwords":["horse"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":666,"sourceLetter":"H","sourceRaw":"horse","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":667,"word":"hospital","headwords":["hospital"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":667,"sourceLetter":"H","sourceRaw":"hospital","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":668,"word":"host","headwords":["host","hostess"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":668,"sourceLetter":"H","sourceRaw":"host / hostess","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":669,"word":"hot","headwords":["hot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":669,"sourceLetter":"H","sourceRaw":"hot","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":670,"word":"hotel","headwords":["hotel"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":670,"sourceLetter":"H","sourceRaw":"hotel","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":671,"word":"hour","headwords":["hour"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":671,"sourceLetter":"H","sourceRaw":"hour","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":672,"word":"house","headwords":["house"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":672,"sourceLetter":"H","sourceRaw":"house","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":673,"word":"housework","headwords":["housework"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":673,"sourceLetter":"H","sourceRaw":"housework","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":674,"word":"how","headwords":["how"],"phonetic":"/haʊ/","translation":"怎样","pos":"adv.","grade":null,"semester":null,"unit":null,"examples":[{"en":"How are you?","cn":"你好吗？"}],"source":"1600单词备用.txt","sourceIndex":674,"sourceLetter":"H","sourceRaw":"how","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":675,"word":"however","headwords":["however"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":675,"sourceLetter":"H","sourceRaw":"however","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":676,"word":"hug","headwords":["hug"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":676,"sourceLetter":"H","sourceRaw":"hug","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":677,"word":"huge","headwords":["huge"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":677,"sourceLetter":"H","sourceRaw":"huge","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":678,"word":"human","headwords":["human"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":678,"sourceLetter":"H","sourceRaw":"human","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":679,"word":"humour","headwords":["humour"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":679,"sourceLetter":"H","sourceRaw":"humour (AmE humor)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE humor"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母H","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":680,"word":"hungry","headwords":["hungry"],"phonetic":"/ˈhʌŋɡri/","translation":"饥饿的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I am hungry. Let us eat.","cn":"我饿了。我们吃饭吧。"}],"source":"1600单词备用.txt","sourceIndex":680,"sourceLetter":"H","sourceRaw":"hungry","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":681,"word":"hunt","headwords":["hunt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":681,"sourceLetter":"H","sourceRaw":"hunt","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":682,"word":"hurry","headwords":["hurry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":682,"sourceLetter":"H","sourceRaw":"hurry","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":683,"word":"hurt","headwords":["hurt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":683,"sourceLetter":"H","sourceRaw":"hurt","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":684,"word":"husband","headwords":["husband"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":684,"sourceLetter":"H","sourceRaw":"husband","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母H","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":685,"word":"I","headwords":["I"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":685,"sourceLetter":"I","sourceRaw":"I","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":686,"word":"ice","headwords":["ice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":686,"sourceLetter":"I","sourceRaw":"ice","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":687,"word":"ice cream","headwords":["ice cream"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":687,"sourceLetter":"I","sourceRaw":"ice cream","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":688,"word":"idea","headwords":["idea"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":688,"sourceLetter":"I","sourceRaw":"idea","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":689,"word":"if","headwords":["if"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":689,"sourceLetter":"I","sourceRaw":"if","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":690,"word":"ill","headwords":["ill"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":690,"sourceLetter":"I","sourceRaw":"ill","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":691,"word":"illness","headwords":["illness"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":691,"sourceLetter":"I","sourceRaw":"illness","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":692,"word":"imagine","headwords":["imagine"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":692,"sourceLetter":"I","sourceRaw":"imagine","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":693,"word":"important","headwords":["important"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":693,"sourceLetter":"I","sourceRaw":"important","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":694,"word":"impossible","headwords":["impossible"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":694,"sourceLetter":"I","sourceRaw":"impossible","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":695,"word":"improve","headwords":["improve"],"phonetic":"/ɪmˈpruːv/","translation":"提高","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I want to improve my English.","cn":"我想提高我的英语水平。"}],"source":"1600单词备用.txt","sourceIndex":695,"sourceLetter":"I","sourceRaw":"improve","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":696,"word":"in","headwords":["in"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":696,"sourceLetter":"I","sourceRaw":"in","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":697,"word":"include","headwords":["include"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":697,"sourceLetter":"I","sourceRaw":"include","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":698,"word":"increase","headwords":["increase"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":698,"sourceLetter":"I","sourceRaw":"increase","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":699,"word":"industry","headwords":["industry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":699,"sourceLetter":"I","sourceRaw":"industry","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":700,"word":"influence","headwords":["influence"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":700,"sourceLetter":"I","sourceRaw":"influence","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":701,"word":"information","headwords":["information"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":701,"sourceLetter":"I","sourceRaw":"information","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":702,"word":"insect","headwords":["insect"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":702,"sourceLetter":"I","sourceRaw":"insect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":703,"word":"inside","headwords":["inside"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":703,"sourceLetter":"I","sourceRaw":"inside","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":704,"word":"instead","headwords":["instead"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":704,"sourceLetter":"I","sourceRaw":"instead","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":705,"word":"instruction","headwords":["instruction"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":705,"sourceLetter":"I","sourceRaw":"instruction","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":706,"word":"instrument","headwords":["instrument"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":706,"sourceLetter":"I","sourceRaw":"instrument","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":707,"word":"interest","headwords":["interest"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":707,"sourceLetter":"I","sourceRaw":"interest","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":708,"word":"interesting","headwords":["interesting"],"phonetic":"/ˈɪntrəstɪŋ/","translation":"有趣的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"This book is very interesting.","cn":"这本书很有趣。"}],"source":"1600单词备用.txt","sourceIndex":708,"sourceLetter":"I","sourceRaw":"interesting","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":709,"word":"international","headwords":["international"],"phonetic":"/ˌɪntərˈnæʃnəl/","translation":"国际的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"English is an international language.","cn":"英语是国际语言。"}],"source":"1600单词备用.txt","sourceIndex":709,"sourceLetter":"I","sourceRaw":"international","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":710,"word":"Internet","headwords":["Internet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":710,"sourceLetter":"I","sourceRaw":"Internet","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":711,"word":"interview","headwords":["interview"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":711,"sourceLetter":"I","sourceRaw":"interview","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":712,"word":"into","headwords":["into"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":712,"sourceLetter":"I","sourceRaw":"into","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":713,"word":"introduce","headwords":["introduce"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":713,"sourceLetter":"I","sourceRaw":"introduce","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":714,"word":"invent","headwords":["invent"],"phonetic":"/ɪnˈvent/","translation":"发明","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Who invented the telephone?","cn":"谁发明了电话？"}],"source":"1600单词备用.txt","sourceIndex":714,"sourceLetter":"I","sourceRaw":"invent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":715,"word":"invite","headwords":["invite"],"phonetic":"/ɪnˈvaɪt/","translation":"邀请","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I want to invite you to my party.","cn":"我想邀请你来我的聚会。"}],"source":"1600单词备用.txt","sourceIndex":715,"sourceLetter":"I","sourceRaw":"invite","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":716,"word":"island","headwords":["island"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":716,"sourceLetter":"I","sourceRaw":"island","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":717,"word":"it","headwords":["it"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":717,"sourceLetter":"I","sourceRaw":"it","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":718,"word":"its","headwords":["its"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":718,"sourceLetter":"I","sourceRaw":"its","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":719,"word":"itself","headwords":["itself"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":719,"sourceLetter":"I","sourceRaw":"itself","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母I","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":720,"word":"jacket","headwords":["jacket"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":720,"sourceLetter":"J","sourceRaw":"jacket","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":721,"word":"jeans","headwords":["jeans"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":721,"sourceLetter":"J","sourceRaw":"jeans","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":722,"word":"job","headwords":["job"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":722,"sourceLetter":"J","sourceRaw":"job","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":723,"word":"jog","headwords":["jog"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":723,"sourceLetter":"J","sourceRaw":"jog","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":724,"word":"join","headwords":["join"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":724,"sourceLetter":"J","sourceRaw":"join","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":725,"word":"joke","headwords":["joke"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":725,"sourceLetter":"J","sourceRaw":"joke","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":726,"word":"journey","headwords":["journey"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":726,"sourceLetter":"J","sourceRaw":"journey","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":727,"word":"joy","headwords":["joy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":727,"sourceLetter":"J","sourceRaw":"joy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":728,"word":"judge","headwords":["judge"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":728,"sourceLetter":"J","sourceRaw":"judge","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":729,"word":"juice","headwords":["juice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":729,"sourceLetter":"J","sourceRaw":"juice","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":730,"word":"jump","headwords":["jump"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":730,"sourceLetter":"J","sourceRaw":"jump","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":731,"word":"junior","headwords":["junior"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":731,"sourceLetter":"J","sourceRaw":"junior","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":732,"word":"just","headwords":["just"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":732,"sourceLetter":"J","sourceRaw":"just","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母J","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":733,"word":"keep","headwords":["keep"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":733,"sourceLetter":"K","sourceRaw":"keep","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":734,"word":"key","headwords":["key"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":734,"sourceLetter":"K","sourceRaw":"key","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":735,"word":"keyboard","headwords":["keyboard"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":735,"sourceLetter":"K","sourceRaw":"keyboard","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":736,"word":"kick","headwords":["kick"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":736,"sourceLetter":"K","sourceRaw":"kick","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":737,"word":"kid","headwords":["kid"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":737,"sourceLetter":"K","sourceRaw":"kid","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":738,"word":"kill","headwords":["kill"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":738,"sourceLetter":"K","sourceRaw":"kill","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":739,"word":"kilogram","headwords":["kilogram"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":739,"sourceLetter":"K","sourceRaw":"kilo (=kilogram)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=kilogram"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母K","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":740,"word":"kilometre","headwords":["kilometre"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":740,"sourceLetter":"K","sourceRaw":"kilometre (AmE kilometer)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE kilometer"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母K","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":741,"word":"kind","headwords":["kind"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":741,"sourceLetter":"K","sourceRaw":"kind","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":742,"word":"king","headwords":["king"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":742,"sourceLetter":"K","sourceRaw":"king","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":743,"word":"kiss","headwords":["kiss"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":743,"sourceLetter":"K","sourceRaw":"kiss","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":744,"word":"kitchen","headwords":["kitchen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":744,"sourceLetter":"K","sourceRaw":"kitchen","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":745,"word":"kite","headwords":["kite"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":745,"sourceLetter":"K","sourceRaw":"kite","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":746,"word":"knee","headwords":["knee"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":746,"sourceLetter":"K","sourceRaw":"knee","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":747,"word":"knife","headwords":["knife"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":747,"sourceLetter":"K","sourceRaw":"knife (pl. knives)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. knives"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母K","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":748,"word":"knock","headwords":["knock"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":748,"sourceLetter":"K","sourceRaw":"knock","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":749,"word":"know","headwords":["know"],"phonetic":"/noʊ/","translation":"知道","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I know the answer.","cn":"我知道答案。"}],"source":"1600单词备用.txt","sourceIndex":749,"sourceLetter":"K","sourceRaw":"know","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":750,"word":"knowledge","headwords":["knowledge"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":750,"sourceLetter":"K","sourceRaw":"knowledge","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":751,"word":"kung fu","headwords":["kung fu"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":751,"sourceLetter":"K","sourceRaw":"kung fu","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母K","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":752,"word":"laboratory","headwords":["laboratory"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":752,"sourceLetter":"L","sourceRaw":"lab (=laboratory)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=laboratory"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母L","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":753,"word":"lady","headwords":["lady"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":753,"sourceLetter":"L","sourceRaw":"lady","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":754,"word":"lake","headwords":["lake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":754,"sourceLetter":"L","sourceRaw":"lake","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":755,"word":"lamp","headwords":["lamp"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":755,"sourceLetter":"L","sourceRaw":"lamp","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":756,"word":"land","headwords":["land"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":756,"sourceLetter":"L","sourceRaw":"land","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":757,"word":"landscape","headwords":["landscape"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":757,"sourceLetter":"L","sourceRaw":"landscape","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":758,"word":"language","headwords":["language"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":758,"sourceLetter":"L","sourceRaw":"language","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":759,"word":"lantern","headwords":["lantern"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":759,"sourceLetter":"L","sourceRaw":"lantern","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":760,"word":"laptop","headwords":["laptop"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":760,"sourceLetter":"L","sourceRaw":"laptop","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":761,"word":"large","headwords":["large"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":761,"sourceLetter":"L","sourceRaw":"large","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":762,"word":"last","headwords":["last"],"phonetic":"/læst/","translation":"最后的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He was the last to leave.","cn":"他是最后一个离开的。"}],"source":"1600单词备用.txt","sourceIndex":762,"sourceLetter":"L","sourceRaw":"last","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":763,"word":"late","headwords":["late"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":763,"sourceLetter":"L","sourceRaw":"late","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":764,"word":"later","headwords":["later"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":764,"sourceLetter":"L","sourceRaw":"later","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":765,"word":"laugh","headwords":["laugh"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":765,"sourceLetter":"L","sourceRaw":"laugh","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":766,"word":"law","headwords":["law"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":766,"sourceLetter":"L","sourceRaw":"law","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":767,"word":"lawyer","headwords":["lawyer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":767,"sourceLetter":"L","sourceRaw":"lawyer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":768,"word":"lay","headwords":["lay"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":768,"sourceLetter":"L","sourceRaw":"lay","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":769,"word":"lazy","headwords":["lazy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":769,"sourceLetter":"L","sourceRaw":"lazy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":770,"word":"lead","headwords":["lead"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":770,"sourceLetter":"L","sourceRaw":"lead","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":771,"word":"leaf","headwords":["leaf"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":771,"sourceLetter":"L","sourceRaw":"leaf (pl. leaves)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. leaves"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母L","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":772,"word":"learn","headwords":["learn"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":772,"sourceLetter":"L","sourceRaw":"learn","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":773,"word":"least","headwords":["least"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":773,"sourceLetter":"L","sourceRaw":"least","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":774,"word":"leave","headwords":["leave"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":774,"sourceLetter":"L","sourceRaw":"leave","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":775,"word":"left","headwords":["left"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":775,"sourceLetter":"L","sourceRaw":"left","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":776,"word":"leg","headwords":["leg"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":776,"sourceLetter":"L","sourceRaw":"leg","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":777,"word":"lemon","headwords":["lemon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":777,"sourceLetter":"L","sourceRaw":"lemon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":778,"word":"lend","headwords":["lend"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":778,"sourceLetter":"L","sourceRaw":"lend","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":779,"word":"less","headwords":["less"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":779,"sourceLetter":"L","sourceRaw":"less","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":780,"word":"lesson","headwords":["lesson"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":780,"sourceLetter":"L","sourceRaw":"lesson","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":781,"word":"let","headwords":["let"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":781,"sourceLetter":"L","sourceRaw":"let","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":782,"word":"letter","headwords":["letter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":782,"sourceLetter":"L","sourceRaw":"letter","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":783,"word":"level","headwords":["level"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":783,"sourceLetter":"L","sourceRaw":"level","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":784,"word":"library","headwords":["library"],"phonetic":"/ˈlaɪbreri/","translation":"图书馆","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"We often study in the library.","cn":"我们经常在图书馆学习。"}],"source":"1600单词备用.txt","sourceIndex":784,"sourceLetter":"L","sourceRaw":"library","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":785,"word":"lie","headwords":["lie"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":785,"sourceLetter":"L","sourceRaw":"lie","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":786,"word":"life","headwords":["life"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":786,"sourceLetter":"L","sourceRaw":"life (pl. lives)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. lives"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母L","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":787,"word":"lift","headwords":["lift"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":787,"sourceLetter":"L","sourceRaw":"lift","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":788,"word":"light","headwords":["light"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":788,"sourceLetter":"L","sourceRaw":"light","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":789,"word":"lightning","headwords":["lightning"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":789,"sourceLetter":"L","sourceRaw":"lightning","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":790,"word":"like","headwords":["like"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":790,"sourceLetter":"L","sourceRaw":"like","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":791,"word":"likely","headwords":["likely"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":791,"sourceLetter":"L","sourceRaw":"likely","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":792,"word":"line","headwords":["line"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":792,"sourceLetter":"L","sourceRaw":"line","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":793,"word":"lion","headwords":["lion"],"phonetic":"/ˈlaɪən/","translation":"狮子","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The lion is the king of animals.","cn":"狮子是百兽之王。"}],"source":"1600单词备用.txt","sourceIndex":793,"sourceLetter":"L","sourceRaw":"lion","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":794,"word":"list","headwords":["list"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":794,"sourceLetter":"L","sourceRaw":"list","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":795,"word":"listen","headwords":["listen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":795,"sourceLetter":"L","sourceRaw":"listen","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":796,"word":"literature","headwords":["literature"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":796,"sourceLetter":"L","sourceRaw":"literature","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":797,"word":"litter","headwords":["litter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":797,"sourceLetter":"L","sourceRaw":"litter","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":798,"word":"little","headwords":["little"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":798,"sourceLetter":"L","sourceRaw":"little","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":799,"word":"live","headwords":["live"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":799,"sourceLetter":"L","sourceRaw":"live","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":800,"word":"lively","headwords":["lively"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":800,"sourceLetter":"L","sourceRaw":"lively","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":801,"word":"local","headwords":["local"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":801,"sourceLetter":"L","sourceRaw":"local","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":802,"word":"lock","headwords":["lock"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":802,"sourceLetter":"L","sourceRaw":"lock","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":803,"word":"lonely","headwords":["lonely"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":803,"sourceLetter":"L","sourceRaw":"lonely","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":804,"word":"long","headwords":["long"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":804,"sourceLetter":"L","sourceRaw":"long","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":805,"word":"look","headwords":["look"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":805,"sourceLetter":"L","sourceRaw":"look","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":806,"word":"lose","headwords":["lose"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":806,"sourceLetter":"L","sourceRaw":"lose","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":807,"word":"loss","headwords":["loss"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":807,"sourceLetter":"L","sourceRaw":"loss","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":808,"word":"lost","headwords":["lost"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":808,"sourceLetter":"L","sourceRaw":"lost","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":809,"word":"lot","headwords":["lot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":809,"sourceLetter":"L","sourceRaw":"lot","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":810,"word":"loud","headwords":["loud"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":810,"sourceLetter":"L","sourceRaw":"loud","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":811,"word":"love","headwords":["love"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":811,"sourceLetter":"L","sourceRaw":"love","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":812,"word":"lovely","headwords":["lovely"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":812,"sourceLetter":"L","sourceRaw":"lovely","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":813,"word":"low","headwords":["low"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":813,"sourceLetter":"L","sourceRaw":"low","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":814,"word":"luck","headwords":["luck"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":814,"sourceLetter":"L","sourceRaw":"luck","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":815,"word":"lunch","headwords":["lunch"],"phonetic":"/lʌntʃ/","translation":"午餐","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"What did you have for lunch?","cn":"你午饭吃了什么？"}],"source":"1600单词备用.txt","sourceIndex":815,"sourceLetter":"L","sourceRaw":"lunch","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母L","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":816,"word":"machine","headwords":["machine"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":816,"sourceLetter":"M","sourceRaw":"machine","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":817,"word":"mad","headwords":["mad"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":817,"sourceLetter":"M","sourceRaw":"mad","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":818,"word":"madam","headwords":["madam"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":818,"sourceLetter":"M","sourceRaw":"madam","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":819,"word":"magazine","headwords":["magazine"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":819,"sourceLetter":"M","sourceRaw":"magazine","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":820,"word":"magic","headwords":["magic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":820,"sourceLetter":"M","sourceRaw":"magic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":821,"word":"main","headwords":["main"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":821,"sourceLetter":"M","sourceRaw":"main","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":822,"word":"make","headwords":["make"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":822,"sourceLetter":"M","sourceRaw":"make","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":823,"word":"mall","headwords":["mall"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":823,"sourceLetter":"M","sourceRaw":"mall","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":824,"word":"man","headwords":["man"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":824,"sourceLetter":"M","sourceRaw":"man (pl. men)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["pl. men"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母M","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":825,"word":"manage","headwords":["manage"],"phonetic":"/ˈmænɪdʒ/","translation":"管理","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Can you manage this task?","cn":"你能处理这个任务吗？"}],"source":"1600单词备用.txt","sourceIndex":825,"sourceLetter":"M","sourceRaw":"manage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":826,"word":"manner","headwords":["manner"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":826,"sourceLetter":"M","sourceRaw":"manner","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":827,"word":"many","headwords":["many"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":827,"sourceLetter":"M","sourceRaw":"many","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":828,"word":"map","headwords":["map"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":828,"sourceLetter":"M","sourceRaw":"map","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":829,"word":"mark","headwords":["mark"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":829,"sourceLetter":"M","sourceRaw":"mark","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":830,"word":"market","headwords":["market"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":830,"sourceLetter":"M","sourceRaw":"market","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":831,"word":"marry","headwords":["marry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":831,"sourceLetter":"M","sourceRaw":"marry","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":832,"word":"master","headwords":["master"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":832,"sourceLetter":"M","sourceRaw":"master","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":833,"word":"match","headwords":["match"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":833,"sourceLetter":"M","sourceRaw":"match","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":834,"word":"material","headwords":["material"],"phonetic":"/məˈtɪriəl/","translation":"材料","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"What material is this shirt made of?","cn":"这件衬衫是什么材料做的？"}],"source":"1600单词备用.txt","sourceIndex":834,"sourceLetter":"M","sourceRaw":"material","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":835,"word":"mathematics","headwords":["mathematics"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":835,"sourceLetter":"M","sourceRaw":"maths (=mathematics, AmE math)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["=mathematics, AmE math"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母M","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":836,"word":"matter","headwords":["matter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":836,"sourceLetter":"M","sourceRaw":"matter","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":837,"word":"may","headwords":["may"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":837,"sourceLetter":"M","sourceRaw":"may","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":838,"word":"maybe","headwords":["maybe"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":838,"sourceLetter":"M","sourceRaw":"maybe","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":839,"word":"me","headwords":["me"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":839,"sourceLetter":"M","sourceRaw":"me","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":840,"word":"meal","headwords":["meal"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":840,"sourceLetter":"M","sourceRaw":"meal","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":841,"word":"mean","headwords":["mean"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":841,"sourceLetter":"M","sourceRaw":"mean","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":842,"word":"meaning","headwords":["meaning"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":842,"sourceLetter":"M","sourceRaw":"meaning","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":843,"word":"meat","headwords":["meat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":843,"sourceLetter":"M","sourceRaw":"meat","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":844,"word":"medal","headwords":["medal"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":844,"sourceLetter":"M","sourceRaw":"medal","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":845,"word":"medical","headwords":["medical"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":845,"sourceLetter":"M","sourceRaw":"medical","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":846,"word":"medicine","headwords":["medicine"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":846,"sourceLetter":"M","sourceRaw":"medicine","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":847,"word":"medium","headwords":["medium"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":847,"sourceLetter":"M","sourceRaw":"medium (pl. media)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. media"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母M","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":848,"word":"meet","headwords":["meet"],"phonetic":"/miːt/","translation":"遇见","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I want to meet your family.","cn":"我想见见你的家人。"}],"source":"1600单词备用.txt","sourceIndex":848,"sourceLetter":"M","sourceRaw":"meet","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":849,"word":"meeting","headwords":["meeting"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":849,"sourceLetter":"M","sourceRaw":"meeting","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":850,"word":"member","headwords":["member"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":850,"sourceLetter":"M","sourceRaw":"member","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":851,"word":"mention","headwords":["mention"],"phonetic":"/ˈmenʃn/","translation":"提到","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He mentioned your name in his speech.","cn":"他在演讲中提到了你的名字。"}],"source":"1600单词备用.txt","sourceIndex":851,"sourceLetter":"M","sourceRaw":"mention","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":852,"word":"menu","headwords":["menu"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":852,"sourceLetter":"M","sourceRaw":"menu","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":853,"word":"mess","headwords":["mess"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":853,"sourceLetter":"M","sourceRaw":"mess","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":854,"word":"message","headwords":["message"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":854,"sourceLetter":"M","sourceRaw":"message","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":855,"word":"method","headwords":["method"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":855,"sourceLetter":"M","sourceRaw":"method","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":856,"word":"metre","headwords":["metre"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":856,"sourceLetter":"M","sourceRaw":"metre (AmE meter)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE meter"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母M","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":857,"word":"middle","headwords":["middle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":857,"sourceLetter":"M","sourceRaw":"middle","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":858,"word":"might","headwords":["might"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":858,"sourceLetter":"M","sourceRaw":"might","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":859,"word":"mile","headwords":["mile"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":859,"sourceLetter":"M","sourceRaw":"mile","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":860,"word":"milk","headwords":["milk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":860,"sourceLetter":"M","sourceRaw":"milk","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":861,"word":"mind","headwords":["mind"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":861,"sourceLetter":"M","sourceRaw":"mind","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":862,"word":"mine","headwords":["mine"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":862,"sourceLetter":"M","sourceRaw":"mine","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":863,"word":"minute","headwords":["minute"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":863,"sourceLetter":"M","sourceRaw":"minute","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":864,"word":"mirror","headwords":["mirror"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":864,"sourceLetter":"M","sourceRaw":"mirror","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":865,"word":"miss","headwords":["miss"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":865,"sourceLetter":"M","sourceRaw":"miss","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":866,"word":"Miss","headwords":["Miss"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":866,"sourceLetter":"M","sourceRaw":"Miss","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":867,"word":"mistake","headwords":["mistake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":867,"sourceLetter":"M","sourceRaw":"mistake","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":868,"word":"mix","headwords":["mix"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":868,"sourceLetter":"M","sourceRaw":"mix","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":869,"word":"mobile","headwords":["mobile"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":869,"sourceLetter":"M","sourceRaw":"mobile","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":870,"word":"model","headwords":["model"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":870,"sourceLetter":"M","sourceRaw":"model","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":871,"word":"modern","headwords":["modern"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":871,"sourceLetter":"M","sourceRaw":"modern","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":872,"word":"moment","headwords":["moment"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":872,"sourceLetter":"M","sourceRaw":"moment","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":873,"word":"money","headwords":["money"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":873,"sourceLetter":"M","sourceRaw":"money","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":874,"word":"monkey","headwords":["monkey"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":874,"sourceLetter":"M","sourceRaw":"monkey","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":875,"word":"month","headwords":["month"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":875,"sourceLetter":"M","sourceRaw":"month","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":876,"word":"moon","headwords":["moon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":876,"sourceLetter":"M","sourceRaw":"moon","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":877,"word":"more","headwords":["more"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":877,"sourceLetter":"M","sourceRaw":"more","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":878,"word":"morning","headwords":["morning"],"phonetic":"/ˈmɔːrnɪŋ/","translation":"早晨","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Good morning!","cn":"早上好！"}],"source":"1600单词备用.txt","sourceIndex":878,"sourceLetter":"M","sourceRaw":"morning","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":879,"word":"most","headwords":["most"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":879,"sourceLetter":"M","sourceRaw":"most","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":880,"word":"mother","headwords":["mother"],"phonetic":"/ˈmʌðər/","translation":"母亲","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My mother is a teacher.","cn":"我妈妈是老师。"}],"source":"1600单词备用.txt","sourceIndex":880,"sourceLetter":"M","sourceRaw":"mother (mum AmE mom)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["mum AmE mom"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母M","二级词汇","含括号说明"],"verifyStatus":"merged-existing-enrichment"},
  {"id":881,"word":"mountain","headwords":["mountain"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":881,"sourceLetter":"M","sourceRaw":"mountain","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":882,"word":"mouse","headwords":["mouse"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":882,"sourceLetter":"M","sourceRaw":"mouse (pl. mice)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["pl. mice"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母M","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":883,"word":"mouth","headwords":["mouth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":883,"sourceLetter":"M","sourceRaw":"mouth","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":884,"word":"move","headwords":["move"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":884,"sourceLetter":"M","sourceRaw":"move","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":885,"word":"movie","headwords":["movie"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":885,"sourceLetter":"M","sourceRaw":"movie","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":886,"word":"Mr","headwords":["Mr"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":886,"sourceLetter":"M","sourceRaw":"Mr (AmE Mr.)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["AmE Mr."],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母M","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":887,"word":"Mrs","headwords":["Mrs"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":887,"sourceLetter":"M","sourceRaw":"Mrs (AmE Mrs.)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["AmE Mrs."],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母M","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":888,"word":"Ms","headwords":["Ms"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":888,"sourceLetter":"M","sourceRaw":"Ms (AmE Ms.)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["AmE Ms."],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母M","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":889,"word":"much","headwords":["much"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":889,"sourceLetter":"M","sourceRaw":"much","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":890,"word":"museum","headwords":["museum"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":890,"sourceLetter":"M","sourceRaw":"museum","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":891,"word":"music","headwords":["music"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":891,"sourceLetter":"M","sourceRaw":"music","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":892,"word":"must","headwords":["must"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":892,"sourceLetter":"M","sourceRaw":"must","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":893,"word":"mutton","headwords":["mutton"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":893,"sourceLetter":"M","sourceRaw":"mutton","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":894,"word":"my","headwords":["my"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":894,"sourceLetter":"M","sourceRaw":"my","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":895,"word":"myself","headwords":["myself"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":895,"sourceLetter":"M","sourceRaw":"myself","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母M","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":896,"word":"name","headwords":["name"],"phonetic":"/neɪm/","translation":"名字","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My name is Tom.","cn":"我叫汤姆。"}],"source":"1600单词备用.txt","sourceIndex":896,"sourceLetter":"N","sourceRaw":"name","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":897,"word":"narrow","headwords":["narrow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":897,"sourceLetter":"N","sourceRaw":"narrow","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":898,"word":"nation","headwords":["nation"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":898,"sourceLetter":"N","sourceRaw":"nation","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":899,"word":"nature","headwords":["nature"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":899,"sourceLetter":"N","sourceRaw":"nature","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":900,"word":"near","headwords":["near"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":900,"sourceLetter":"N","sourceRaw":"near","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":901,"word":"nearly","headwords":["nearly"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":901,"sourceLetter":"N","sourceRaw":"nearly","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":902,"word":"necessary","headwords":["necessary"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":902,"sourceLetter":"N","sourceRaw":"necessary","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":903,"word":"neck","headwords":["neck"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":903,"sourceLetter":"N","sourceRaw":"neck","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":904,"word":"need","headwords":["need"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":904,"sourceLetter":"N","sourceRaw":"need","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":905,"word":"negative","headwords":["negative"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":905,"sourceLetter":"N","sourceRaw":"negative","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":906,"word":"neighbour","headwords":["neighbour"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":906,"sourceLetter":"N","sourceRaw":"neighbour (AmE neighbor)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE neighbor"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母N","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":907,"word":"neither","headwords":["neither"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":907,"sourceLetter":"N","sourceRaw":"neither","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":908,"word":"nervous","headwords":["nervous"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":908,"sourceLetter":"N","sourceRaw":"nervous","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":909,"word":"never","headwords":["never"],"phonetic":"/ˈnevər/","translation":"从不","pos":"adv.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Never give up!","cn":"永不放弃！"}],"source":"1600单词备用.txt","sourceIndex":909,"sourceLetter":"N","sourceRaw":"never","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":910,"word":"new","headwords":["new"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":910,"sourceLetter":"N","sourceRaw":"new","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":911,"word":"news","headwords":["news"],"phonetic":"/nuːz/","translation":"新闻","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I watch the news every evening.","cn":"我每晚看新闻。"}],"source":"1600单词备用.txt","sourceIndex":911,"sourceLetter":"N","sourceRaw":"news","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":912,"word":"newspaper","headwords":["newspaper"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":912,"sourceLetter":"N","sourceRaw":"newspaper","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":913,"word":"next","headwords":["next"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":913,"sourceLetter":"N","sourceRaw":"next","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":914,"word":"nice","headwords":["nice"],"phonetic":"/naɪs/","translation":"好的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Nice to meet you.","cn":"很高兴见到你。"}],"source":"1600单词备用.txt","sourceIndex":914,"sourceLetter":"N","sourceRaw":"nice","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":915,"word":"night","headwords":["night"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":915,"sourceLetter":"N","sourceRaw":"night","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":916,"word":"no","headwords":["no"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":916,"sourceLetter":"N","sourceRaw":"no","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":917,"word":"nobody","headwords":["nobody"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":917,"sourceLetter":"N","sourceRaw":"nobody","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":918,"word":"nod","headwords":["nod"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":918,"sourceLetter":"N","sourceRaw":"nod","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":919,"word":"noise","headwords":["noise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":919,"sourceLetter":"N","sourceRaw":"noise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":920,"word":"none","headwords":["none"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":920,"sourceLetter":"N","sourceRaw":"none","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":921,"word":"noodle","headwords":["noodle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":921,"sourceLetter":"N","sourceRaw":"noodle","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":922,"word":"noon","headwords":["noon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":922,"sourceLetter":"N","sourceRaw":"noon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":923,"word":"nor","headwords":["nor"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":923,"sourceLetter":"N","sourceRaw":"nor","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":924,"word":"normal","headwords":["normal"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":924,"sourceLetter":"N","sourceRaw":"normal","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":925,"word":"north","headwords":["north"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":925,"sourceLetter":"N","sourceRaw":"north","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":926,"word":"nose","headwords":["nose"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":926,"sourceLetter":"N","sourceRaw":"nose","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":927,"word":"not","headwords":["not"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":927,"sourceLetter":"N","sourceRaw":"not","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":928,"word":"note","headwords":["note"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":928,"sourceLetter":"N","sourceRaw":"note","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":929,"word":"notebook","headwords":["notebook"],"phonetic":"/ˈnoʊtbʊk/","translation":"笔记本","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Write it down in your notebook.","cn":"把它记在你的笔记本上。"}],"source":"1600单词备用.txt","sourceIndex":929,"sourceLetter":"N","sourceRaw":"notebook","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":930,"word":"nothing","headwords":["nothing"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":930,"sourceLetter":"N","sourceRaw":"nothing","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":931,"word":"notice","headwords":["notice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":931,"sourceLetter":"N","sourceRaw":"notice","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":932,"word":"novel","headwords":["novel"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":932,"sourceLetter":"N","sourceRaw":"novel","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":933,"word":"now","headwords":["now"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":933,"sourceLetter":"N","sourceRaw":"now","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":934,"word":"number","headwords":["number"],"phonetic":"/ˈnʌmbər/","translation":"数字","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"What is your phone number?","cn":"你的电话号码是多少？"}],"source":"1600单词备用.txt","sourceIndex":934,"sourceLetter":"N","sourceRaw":"number","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":935,"word":"nurse","headwords":["nurse"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":935,"sourceLetter":"N","sourceRaw":"nurse","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母N","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":936,"word":"object","headwords":["object"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":936,"sourceLetter":"O","sourceRaw":"object","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":937,"word":"ocean","headwords":["ocean"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":937,"sourceLetter":"O","sourceRaw":"ocean","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":938,"word":"o'clock","headwords":["o'clock"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":938,"sourceLetter":"O","sourceRaw":"o'clock","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":939,"word":"of","headwords":["of"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":939,"sourceLetter":"O","sourceRaw":"of","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":940,"word":"off","headwords":["off"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":940,"sourceLetter":"O","sourceRaw":"off","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":941,"word":"offer","headwords":["offer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":941,"sourceLetter":"O","sourceRaw":"offer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":942,"word":"office","headwords":["office"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":942,"sourceLetter":"O","sourceRaw":"office","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":943,"word":"officer","headwords":["officer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":943,"sourceLetter":"O","sourceRaw":"officer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":944,"word":"often","headwords":["often"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":944,"sourceLetter":"O","sourceRaw":"often","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":945,"word":"oil","headwords":["oil"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":945,"sourceLetter":"O","sourceRaw":"oil","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":946,"word":"OK","headwords":["OK"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":946,"sourceLetter":"O","sourceRaw":"OK","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":947,"word":"old","headwords":["old"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":947,"sourceLetter":"O","sourceRaw":"old","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":948,"word":"Olympic","headwords":["Olympic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":948,"sourceLetter":"O","sourceRaw":"Olympic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":949,"word":"on","headwords":["on"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":949,"sourceLetter":"O","sourceRaw":"on","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":950,"word":"once","headwords":["once"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":950,"sourceLetter":"O","sourceRaw":"once","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":951,"word":"onion","headwords":["onion"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":951,"sourceLetter":"O","sourceRaw":"onion","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":952,"word":"online","headwords":["online"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":952,"sourceLetter":"O","sourceRaw":"online","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":953,"word":"only","headwords":["only"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":953,"sourceLetter":"O","sourceRaw":"only","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":954,"word":"open","headwords":["open"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":954,"sourceLetter":"O","sourceRaw":"open","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":955,"word":"opera","headwords":["opera"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":955,"sourceLetter":"O","sourceRaw":"opera","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":956,"word":"operate","headwords":["operate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":956,"sourceLetter":"O","sourceRaw":"operate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":957,"word":"opinion","headwords":["opinion"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":957,"sourceLetter":"O","sourceRaw":"opinion","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":958,"word":"opposite","headwords":["opposite"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":958,"sourceLetter":"O","sourceRaw":"opposite","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":959,"word":"or","headwords":["or"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":959,"sourceLetter":"O","sourceRaw":"or","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":960,"word":"orange","headwords":["orange"],"phonetic":"/ˈɔːrɪndʒ/","translation":"橙子","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Would you like an orange?","cn":"你想吃个橙子吗？"}],"source":"1600单词备用.txt","sourceIndex":960,"sourceLetter":"O","sourceRaw":"orange","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":961,"word":"order","headwords":["order"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":961,"sourceLetter":"O","sourceRaw":"order","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":962,"word":"organise","headwords":["organise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":962,"sourceLetter":"O","sourceRaw":"organise (AmE organize)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE organize"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母O","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":963,"word":"other","headwords":["other"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":963,"sourceLetter":"O","sourceRaw":"other","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":964,"word":"our","headwords":["our"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":964,"sourceLetter":"O","sourceRaw":"our","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":965,"word":"ours","headwords":["ours"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":965,"sourceLetter":"O","sourceRaw":"ours","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":966,"word":"ourselves","headwords":["ourselves"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":966,"sourceLetter":"O","sourceRaw":"ourselves","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":967,"word":"out","headwords":["out"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":967,"sourceLetter":"O","sourceRaw":"out","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":968,"word":"outside","headwords":["outside"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":968,"sourceLetter":"O","sourceRaw":"outside","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":969,"word":"oven","headwords":["oven"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":969,"sourceLetter":"O","sourceRaw":"oven","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":970,"word":"over","headwords":["over"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":970,"sourceLetter":"O","sourceRaw":"over","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":971,"word":"own","headwords":["own"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":971,"sourceLetter":"O","sourceRaw":"own","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母O","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":972,"word":"pack","headwords":["pack"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":972,"sourceLetter":"P","sourceRaw":"pack","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":973,"word":"packet","headwords":["packet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":973,"sourceLetter":"P","sourceRaw":"packet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":974,"word":"page","headwords":["page"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":974,"sourceLetter":"P","sourceRaw":"page","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":975,"word":"pain","headwords":["pain"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":975,"sourceLetter":"P","sourceRaw":"pain","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":976,"word":"paint","headwords":["paint"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":976,"sourceLetter":"P","sourceRaw":"paint","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":977,"word":"pair","headwords":["pair"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":977,"sourceLetter":"P","sourceRaw":"pair","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":978,"word":"palace","headwords":["palace"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":978,"sourceLetter":"P","sourceRaw":"palace","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":979,"word":"pale","headwords":["pale"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":979,"sourceLetter":"P","sourceRaw":"pale","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":980,"word":"pancake","headwords":["pancake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":980,"sourceLetter":"P","sourceRaw":"pancake","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":981,"word":"panda","headwords":["panda"],"phonetic":"/ˈpændə/","translation":"熊猫","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Pandas are so cute.","cn":"熊猫太可爱了。"}],"source":"1600单词备用.txt","sourceIndex":981,"sourceLetter":"P","sourceRaw":"panda","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":982,"word":"paper","headwords":["paper"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":982,"sourceLetter":"P","sourceRaw":"paper","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":983,"word":"paragraph","headwords":["paragraph"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":983,"sourceLetter":"P","sourceRaw":"paragraph","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":984,"word":"pardon","headwords":["pardon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":984,"sourceLetter":"P","sourceRaw":"pardon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":985,"word":"parent","headwords":["parent"],"phonetic":"/ˈperənt/","translation":"父母","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My parents are proud of me.","cn":"我父母为我感到骄傲。"}],"source":"1600单词备用.txt","sourceIndex":985,"sourceLetter":"P","sourceRaw":"parent","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":986,"word":"park","headwords":["park"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":986,"sourceLetter":"P","sourceRaw":"park","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":987,"word":"part","headwords":["part"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":987,"sourceLetter":"P","sourceRaw":"part","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":988,"word":"partner","headwords":["partner"],"phonetic":"/ˈpɑːrtnər/","translation":"搭档","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Work with your partner on this task.","cn":"和你的搭档一起完成这个任务。"}],"source":"1600单词备用.txt","sourceIndex":988,"sourceLetter":"P","sourceRaw":"partner","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":989,"word":"party","headwords":["party"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":989,"sourceLetter":"P","sourceRaw":"party","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":990,"word":"pass","headwords":["pass"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":990,"sourceLetter":"P","sourceRaw":"pass","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":991,"word":"passage","headwords":["passage"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":991,"sourceLetter":"P","sourceRaw":"passage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":992,"word":"passenger","headwords":["passenger"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":992,"sourceLetter":"P","sourceRaw":"passenger","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":993,"word":"passport","headwords":["passport"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":993,"sourceLetter":"P","sourceRaw":"passport","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":994,"word":"past","headwords":["past"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":994,"sourceLetter":"P","sourceRaw":"past","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":995,"word":"patient","headwords":["patient"],"phonetic":"/ˈpeɪʃnt/","translation":"耐心的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"You need to be patient with children.","cn":"对孩子要有耐心。"}],"source":"1600单词备用.txt","sourceIndex":995,"sourceLetter":"P","sourceRaw":"patient","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":996,"word":"pay","headwords":["pay"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":996,"sourceLetter":"P","sourceRaw":"pay","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":997,"word":"physical education","headwords":["physical education"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":997,"sourceLetter":"P","sourceRaw":"PE (=physical education)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["=physical education"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母P","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":998,"word":"peace","headwords":["peace"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":998,"sourceLetter":"P","sourceRaw":"peace","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":999,"word":"pear","headwords":["pear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":999,"sourceLetter":"P","sourceRaw":"pear","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1000,"word":"pen","headwords":["pen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1000,"sourceLetter":"P","sourceRaw":"pen","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1001,"word":"pencil","headwords":["pencil"],"phonetic":"/ˈpensl/","translation":"铅笔","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I need a pencil to write.","cn":"我需要一支铅笔写字。"}],"source":"1600单词备用.txt","sourceIndex":1001,"sourceLetter":"P","sourceRaw":"pencil","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1002,"word":"penguin","headwords":["penguin"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1002,"sourceLetter":"P","sourceRaw":"penguin","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1003,"word":"people","headwords":["people"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1003,"sourceLetter":"P","sourceRaw":"people","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1004,"word":"pepper","headwords":["pepper"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1004,"sourceLetter":"P","sourceRaw":"pepper","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1005,"word":"per cent","headwords":["per cent"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1005,"sourceLetter":"P","sourceRaw":"per cent (AmE percent)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE percent"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母P","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1006,"word":"perfect","headwords":["perfect"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1006,"sourceLetter":"P","sourceRaw":"perfect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1007,"word":"perform","headwords":["perform"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1007,"sourceLetter":"P","sourceRaw":"perform","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1008,"word":"perhaps","headwords":["perhaps"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1008,"sourceLetter":"P","sourceRaw":"perhaps","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1009,"word":"period","headwords":["period"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1009,"sourceLetter":"P","sourceRaw":"period","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1010,"word":"person","headwords":["person"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1010,"sourceLetter":"P","sourceRaw":"person","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1011,"word":"personal","headwords":["personal"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1011,"sourceLetter":"P","sourceRaw":"personal","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1012,"word":"pet","headwords":["pet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1012,"sourceLetter":"P","sourceRaw":"pet","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1013,"word":"phone","headwords":["phone"],"phonetic":"/foʊn/","translation":"电话","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My phone is on the desk.","cn":"我的手机在桌子上。"}],"source":"1600单词备用.txt","sourceIndex":1013,"sourceLetter":"P","sourceRaw":"phone","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1014,"word":"photograph","headwords":["photograph"],"phonetic":"/ˈfoʊtoʊ/","translation":"照片","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"This is a photograph of my family.","cn":"这是我家的照片。"}],"source":"1600单词备用.txt","sourceIndex":1014,"sourceLetter":"P","sourceRaw":"photo (=photograph)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["=photograph"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母P","二级词汇","含括号说明"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1015,"word":"physics","headwords":["physics"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1015,"sourceLetter":"P","sourceRaw":"physics","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1016,"word":"piano","headwords":["piano"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1016,"sourceLetter":"P","sourceRaw":"piano","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1017,"word":"pick","headwords":["pick"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1017,"sourceLetter":"P","sourceRaw":"pick","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1018,"word":"picnic","headwords":["picnic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1018,"sourceLetter":"P","sourceRaw":"picnic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1019,"word":"picture","headwords":["picture"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1019,"sourceLetter":"P","sourceRaw":"picture","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1020,"word":"pie","headwords":["pie"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1020,"sourceLetter":"P","sourceRaw":"pie","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1021,"word":"piece","headwords":["piece"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1021,"sourceLetter":"P","sourceRaw":"piece","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1022,"word":"pig","headwords":["pig"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1022,"sourceLetter":"P","sourceRaw":"pig","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1023,"word":"pill","headwords":["pill"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1023,"sourceLetter":"P","sourceRaw":"pill","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1024,"word":"pilot","headwords":["pilot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1024,"sourceLetter":"P","sourceRaw":"pilot","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1025,"word":"ping-pong","headwords":["ping-pong"],"phonetic":"/ˈpɪŋpɔːŋ/","translation":"乒乓球","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Can you play ping-pong?","cn":"你会打乒乓球吗？"}],"source":"1600单词备用.txt","sourceIndex":1025,"sourceLetter":"P","sourceRaw":"ping-pong","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1026,"word":"pink","headwords":["pink"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1026,"sourceLetter":"P","sourceRaw":"pink","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1027,"word":"pioneer","headwords":["pioneer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1027,"sourceLetter":"P","sourceRaw":"pioneer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1028,"word":"pity","headwords":["pity"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1028,"sourceLetter":"P","sourceRaw":"pity","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1029,"word":"pizza","headwords":["pizza"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1029,"sourceLetter":"P","sourceRaw":"pizza","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1030,"word":"place","headwords":["place"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1030,"sourceLetter":"P","sourceRaw":"place","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1031,"word":"plan","headwords":["plan"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1031,"sourceLetter":"P","sourceRaw":"plan","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1032,"word":"plane","headwords":["plane"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1032,"sourceLetter":"P","sourceRaw":"plane","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1033,"word":"planet","headwords":["planet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1033,"sourceLetter":"P","sourceRaw":"planet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1034,"word":"plant","headwords":["plant"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1034,"sourceLetter":"P","sourceRaw":"plant","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1035,"word":"plastic","headwords":["plastic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1035,"sourceLetter":"P","sourceRaw":"plastic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1036,"word":"plate","headwords":["plate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1036,"sourceLetter":"P","sourceRaw":"plate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1037,"word":"play","headwords":["play"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1037,"sourceLetter":"P","sourceRaw":"play","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1038,"word":"playground","headwords":["playground"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1038,"sourceLetter":"P","sourceRaw":"playground","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1039,"word":"please","headwords":["please"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1039,"sourceLetter":"P","sourceRaw":"please","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1040,"word":"pleasure","headwords":["pleasure"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1040,"sourceLetter":"P","sourceRaw":"pleasure","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1041,"word":"plenty","headwords":["plenty"],"phonetic":"/ˈplenti/","translation":"大量","pos":"pron.","grade":null,"semester":null,"unit":null,"examples":[{"en":"There is plenty of food.","cn":"食物很充足。"}],"source":"1600单词备用.txt","sourceIndex":1041,"sourceLetter":"P","sourceRaw":"plenty","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1042,"word":"p.m.","headwords":["p.m."],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1042,"sourceLetter":"P","sourceRaw":"p.m.","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1043,"word":"pocket","headwords":["pocket"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1043,"sourceLetter":"P","sourceRaw":"pocket","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1044,"word":"poem","headwords":["poem"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1044,"sourceLetter":"P","sourceRaw":"poem","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1045,"word":"poet","headwords":["poet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1045,"sourceLetter":"P","sourceRaw":"poet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1046,"word":"point","headwords":["point"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1046,"sourceLetter":"P","sourceRaw":"point","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1047,"word":"police","headwords":["police"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1047,"sourceLetter":"P","sourceRaw":"police","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1048,"word":"policeman","headwords":["policeman","policewoman (pl."],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1048,"sourceLetter":"P","sourceRaw":"policeman / policewoman (pl.","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":1049,"word":"policemen","headwords":["policemen","policewomen)"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1049,"sourceLetter":"P","sourceRaw":"policemen / policewomen)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":1050,"word":"polite","headwords":["polite"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1050,"sourceLetter":"P","sourceRaw":"polite","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1051,"word":"pollute","headwords":["pollute"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1051,"sourceLetter":"P","sourceRaw":"pollute","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1052,"word":"pool","headwords":["pool"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1052,"sourceLetter":"P","sourceRaw":"pool","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1053,"word":"poor","headwords":["poor"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1053,"sourceLetter":"P","sourceRaw":"poor","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1054,"word":"popular","headwords":["popular"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1054,"sourceLetter":"P","sourceRaw":"popular","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1055,"word":"population","headwords":["population"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1055,"sourceLetter":"P","sourceRaw":"population","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1056,"word":"pork","headwords":["pork"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1056,"sourceLetter":"P","sourceRaw":"pork","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1057,"word":"porridge","headwords":["porridge"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1057,"sourceLetter":"P","sourceRaw":"porridge","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1058,"word":"position","headwords":["position"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1058,"sourceLetter":"P","sourceRaw":"position","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1059,"word":"positive","headwords":["positive"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1059,"sourceLetter":"P","sourceRaw":"positive","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1060,"word":"possible","headwords":["possible"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1060,"sourceLetter":"P","sourceRaw":"possible","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1061,"word":"post","headwords":["post"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1061,"sourceLetter":"P","sourceRaw":"post","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1062,"word":"postcard","headwords":["postcard"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1062,"sourceLetter":"P","sourceRaw":"postcard","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1063,"word":"postman","headwords":["postman"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1063,"sourceLetter":"P","sourceRaw":"postman (pl. postmen)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. postmen"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母P","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1064,"word":"pot","headwords":["pot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1064,"sourceLetter":"P","sourceRaw":"pot","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1065,"word":"potato","headwords":["potato"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1065,"sourceLetter":"P","sourceRaw":"potato","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1066,"word":"pound","headwords":["pound"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1066,"sourceLetter":"P","sourceRaw":"pound","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1067,"word":"pour","headwords":["pour"],"phonetic":"/pɔːr/","translation":"倾倒","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Pour the milk into the cup.","cn":"把牛奶倒进杯子里。"}],"source":"1600单词备用.txt","sourceIndex":1067,"sourceLetter":"P","sourceRaw":"pour","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1068,"word":"power","headwords":["power"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1068,"sourceLetter":"P","sourceRaw":"power","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1069,"word":"practice","headwords":["practice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1069,"sourceLetter":"P","sourceRaw":"practice","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1070,"word":"praise","headwords":["praise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1070,"sourceLetter":"P","sourceRaw":"praise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1071,"word":"prefer","headwords":["prefer"],"phonetic":"/prɪˈfɜːr/","translation":"更喜欢","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I prefer tea to coffee.","cn":"比起咖啡我更喜欢茶。"}],"source":"1600单词备用.txt","sourceIndex":1071,"sourceLetter":"P","sourceRaw":"prefer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1072,"word":"prepare","headwords":["prepare"],"phonetic":"/prɪˈper/","translation":"准备","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I need to prepare for the exam.","cn":"我需要为考试做准备。"}],"source":"1600单词备用.txt","sourceIndex":1072,"sourceLetter":"P","sourceRaw":"prepare","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1073,"word":"present","headwords":["present"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1073,"sourceLetter":"P","sourceRaw":"present","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1074,"word":"president","headwords":["president"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1074,"sourceLetter":"P","sourceRaw":"president","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1075,"word":"press","headwords":["press"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1075,"sourceLetter":"P","sourceRaw":"press","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1076,"word":"pressure","headwords":["pressure"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1076,"sourceLetter":"P","sourceRaw":"pressure","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1077,"word":"pretty","headwords":["pretty"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1077,"sourceLetter":"P","sourceRaw":"pretty","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1078,"word":"price","headwords":["price"],"phonetic":"/praɪs/","translation":"价格","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"What is the price of this shirt?","cn":"这件衬衫多少钱？"}],"source":"1600单词备用.txt","sourceIndex":1078,"sourceLetter":"P","sourceRaw":"price","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1079,"word":"pride","headwords":["pride"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1079,"sourceLetter":"P","sourceRaw":"pride","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1080,"word":"primary","headwords":["primary"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1080,"sourceLetter":"P","sourceRaw":"primary","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1081,"word":"prince","headwords":["prince","princess"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1081,"sourceLetter":"P","sourceRaw":"prince / princess","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":1082,"word":"print","headwords":["print"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1082,"sourceLetter":"P","sourceRaw":"print","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1083,"word":"private","headwords":["private"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1083,"sourceLetter":"P","sourceRaw":"private","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1084,"word":"prize","headwords":["prize"],"phonetic":"/praɪz/","translation":"奖品","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"She won the first prize.","cn":"她获得了一等奖。"}],"source":"1600单词备用.txt","sourceIndex":1084,"sourceLetter":"P","sourceRaw":"prize","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1085,"word":"probably","headwords":["probably"],"phonetic":"/ˈprɑːbəbli/","translation":"大概","pos":"adv.","grade":null,"semester":null,"unit":null,"examples":[{"en":"It will probably rain tomorrow.","cn":"明天可能会下雨。"}],"source":"1600单词备用.txt","sourceIndex":1085,"sourceLetter":"P","sourceRaw":"probably","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1086,"word":"problem","headwords":["problem"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1086,"sourceLetter":"P","sourceRaw":"problem","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1087,"word":"produce","headwords":["produce"],"phonetic":"/prəˈduːs/","translation":"生产","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"This factory produces cars.","cn":"这家工厂生产汽车。"}],"source":"1600单词备用.txt","sourceIndex":1087,"sourceLetter":"P","sourceRaw":"produce","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1088,"word":"product","headwords":["product"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1088,"sourceLetter":"P","sourceRaw":"product","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1089,"word":"programme","headwords":["programme"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1089,"sourceLetter":"P","sourceRaw":"programme (AmE program)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE program"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母P","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1090,"word":"progress","headwords":["progress"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1090,"sourceLetter":"P","sourceRaw":"progress","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1091,"word":"project","headwords":["project"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1091,"sourceLetter":"P","sourceRaw":"project","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1092,"word":"promise","headwords":["promise"],"phonetic":"/ˈprɑːmɪs/","translation":"承诺","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I promise to help you.","cn":"我保证帮助你。"}],"source":"1600单词备用.txt","sourceIndex":1092,"sourceLetter":"P","sourceRaw":"promise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1093,"word":"pronounce","headwords":["pronounce"],"phonetic":"/prəˈnaʊns/","translation":"发音","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"How do you pronounce this word?","cn":"这个词怎么发音？"}],"source":"1600单词备用.txt","sourceIndex":1093,"sourceLetter":"P","sourceRaw":"pronounce","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1094,"word":"proper","headwords":["proper"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1094,"sourceLetter":"P","sourceRaw":"proper","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1095,"word":"protect","headwords":["protect"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1095,"sourceLetter":"P","sourceRaw":"protect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1096,"word":"proud","headwords":["proud"],"phonetic":"/praʊd/","translation":"自豪的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I am proud of my country.","cn":"我为我的国家感到自豪。"}],"source":"1600单词备用.txt","sourceIndex":1096,"sourceLetter":"P","sourceRaw":"proud","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1097,"word":"prove","headwords":["prove"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1097,"sourceLetter":"P","sourceRaw":"prove","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1098,"word":"provide","headwords":["provide"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1098,"sourceLetter":"P","sourceRaw":"provide","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1099,"word":"public","headwords":["public"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1099,"sourceLetter":"P","sourceRaw":"public","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1100,"word":"publish","headwords":["publish"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1100,"sourceLetter":"P","sourceRaw":"publish","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1101,"word":"pull","headwords":["pull"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1101,"sourceLetter":"P","sourceRaw":"pull","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1102,"word":"punish","headwords":["punish"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1102,"sourceLetter":"P","sourceRaw":"punish","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1103,"word":"purple","headwords":["purple"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1103,"sourceLetter":"P","sourceRaw":"purple","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1104,"word":"purpose","headwords":["purpose"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1104,"sourceLetter":"P","sourceRaw":"purpose","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1105,"word":"push","headwords":["push"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1105,"sourceLetter":"P","sourceRaw":"push","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1106,"word":"put","headwords":["put"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1106,"sourceLetter":"P","sourceRaw":"put","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母P","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1107,"word":"quality","headwords":["quality"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1107,"sourceLetter":"Q","sourceRaw":"quality","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Q","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1108,"word":"quarter","headwords":["quarter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1108,"sourceLetter":"Q","sourceRaw":"quarter","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Q","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1109,"word":"queen","headwords":["queen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1109,"sourceLetter":"Q","sourceRaw":"queen","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Q","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1110,"word":"question","headwords":["question"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1110,"sourceLetter":"Q","sourceRaw":"question","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Q","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1111,"word":"quick","headwords":["quick"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1111,"sourceLetter":"Q","sourceRaw":"quick","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Q","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1112,"word":"quiet","headwords":["quiet"],"phonetic":"/ˈkwaɪət/","translation":"安静的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Please keep quiet in the library.","cn":"请在图书馆保持安静。"}],"source":"1600单词备用.txt","sourceIndex":1112,"sourceLetter":"Q","sourceRaw":"quiet","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Q","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1113,"word":"quite","headwords":["quite"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1113,"sourceLetter":"Q","sourceRaw":"quite","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Q","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1114,"word":"rabbit","headwords":["rabbit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1114,"sourceLetter":"R","sourceRaw":"rabbit","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1115,"word":"race","headwords":["race"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1115,"sourceLetter":"R","sourceRaw":"race","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1116,"word":"radio","headwords":["radio"],"phonetic":"/ˈreɪdioʊ/","translation":"收音机","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I listen to the radio every morning.","cn":"我每天早上听收音机。"}],"source":"1600单词备用.txt","sourceIndex":1116,"sourceLetter":"R","sourceRaw":"radio","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1117,"word":"railway","headwords":["railway"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1117,"sourceLetter":"R","sourceRaw":"railway","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1118,"word":"rain","headwords":["rain"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1118,"sourceLetter":"R","sourceRaw":"rain","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1119,"word":"rainbow","headwords":["rainbow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1119,"sourceLetter":"R","sourceRaw":"rainbow","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1120,"word":"raise","headwords":["raise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1120,"sourceLetter":"R","sourceRaw":"raise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1121,"word":"rapid","headwords":["rapid"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1121,"sourceLetter":"R","sourceRaw":"rapid","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1122,"word":"rather","headwords":["rather"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1122,"sourceLetter":"R","sourceRaw":"rather","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1123,"word":"reach","headwords":["reach"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1123,"sourceLetter":"R","sourceRaw":"reach","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1124,"word":"read","headwords":["read"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1124,"sourceLetter":"R","sourceRaw":"read","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1125,"word":"ready","headwords":["ready"],"phonetic":"/ˈredi/","translation":"准备好的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Are you ready to go?","cn":"你准备好出发了吗？"}],"source":"1600单词备用.txt","sourceIndex":1125,"sourceLetter":"R","sourceRaw":"ready","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1126,"word":"real","headwords":["real"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1126,"sourceLetter":"R","sourceRaw":"real","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1127,"word":"realise","headwords":["realise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1127,"sourceLetter":"R","sourceRaw":"realise (AmE realize)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE realize"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母R","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1128,"word":"really","headwords":["really"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1128,"sourceLetter":"R","sourceRaw":"really","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1129,"word":"reason","headwords":["reason"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1129,"sourceLetter":"R","sourceRaw":"reason","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1130,"word":"receive","headwords":["receive"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1130,"sourceLetter":"R","sourceRaw":"receive","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1131,"word":"recent","headwords":["recent"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1131,"sourceLetter":"R","sourceRaw":"recent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1132,"word":"recognise","headwords":["recognise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1132,"sourceLetter":"R","sourceRaw":"recognise (AmE recognize)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE recognize"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母R","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1133,"word":"recommend","headwords":["recommend"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1133,"sourceLetter":"R","sourceRaw":"recommend","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1134,"word":"record","headwords":["record"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1134,"sourceLetter":"R","sourceRaw":"record","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1135,"word":"recycle","headwords":["recycle"],"phonetic":"/ˌriːˈsaɪkl/","translation":"回收","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"We should recycle paper and plastic.","cn":"我们应该回收纸张和塑料。"}],"source":"1600单词备用.txt","sourceIndex":1135,"sourceLetter":"R","sourceRaw":"recycle","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1136,"word":"red","headwords":["red"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1136,"sourceLetter":"R","sourceRaw":"red","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1137,"word":"reduce","headwords":["reduce"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1137,"sourceLetter":"R","sourceRaw":"reduce","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1138,"word":"refuse","headwords":["refuse"],"phonetic":"/rɪˈfjuːz/","translation":"拒绝","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He refused to answer the question.","cn":"他拒绝回答这个问题。"}],"source":"1600单词备用.txt","sourceIndex":1138,"sourceLetter":"R","sourceRaw":"refuse","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1139,"word":"regret","headwords":["regret"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1139,"sourceLetter":"R","sourceRaw":"regret","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1140,"word":"relationship","headwords":["relationship"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1140,"sourceLetter":"R","sourceRaw":"relationship","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1141,"word":"relative","headwords":["relative"],"phonetic":"/ˈrelətɪv/","translation":"亲戚","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My relatives come to visit every Spring Festival.","cn":"我的亲戚每年春节都来拜访。"}],"source":"1600单词备用.txt","sourceIndex":1141,"sourceLetter":"R","sourceRaw":"relative","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1142,"word":"relax","headwords":["relax"],"phonetic":"/rɪˈlæks/","translation":"放松","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I like to relax with music.","cn":"我喜欢听音乐放松。"}],"source":"1600单词备用.txt","sourceIndex":1142,"sourceLetter":"R","sourceRaw":"relax","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1143,"word":"remain","headwords":["remain"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1143,"sourceLetter":"R","sourceRaw":"remain","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1144,"word":"remember","headwords":["remember"],"phonetic":"/rɪˈmembər/","translation":"记住","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Remember to bring your homework.","cn":"记得带上你的作业。"}],"source":"1600单词备用.txt","sourceIndex":1144,"sourceLetter":"R","sourceRaw":"remember","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1145,"word":"remind","headwords":["remind"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1145,"sourceLetter":"R","sourceRaw":"remind","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1146,"word":"repair","headwords":["repair"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1146,"sourceLetter":"R","sourceRaw":"repair","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1147,"word":"repeat","headwords":["repeat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1147,"sourceLetter":"R","sourceRaw":"repeat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1148,"word":"reply","headwords":["reply"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1148,"sourceLetter":"R","sourceRaw":"reply","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1149,"word":"report","headwords":["report"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1149,"sourceLetter":"R","sourceRaw":"report","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1150,"word":"require","headwords":["require"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1150,"sourceLetter":"R","sourceRaw":"require","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1151,"word":"research","headwords":["research"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1151,"sourceLetter":"R","sourceRaw":"research","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1152,"word":"respect","headwords":["respect"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1152,"sourceLetter":"R","sourceRaw":"respect","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1153,"word":"responsible","headwords":["responsible"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1153,"sourceLetter":"R","sourceRaw":"responsible","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1154,"word":"rest","headwords":["rest"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1154,"sourceLetter":"R","sourceRaw":"rest","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1155,"word":"restaurant","headwords":["restaurant"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1155,"sourceLetter":"R","sourceRaw":"restaurant","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1156,"word":"result","headwords":["result"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1156,"sourceLetter":"R","sourceRaw":"result","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1157,"word":"return","headwords":["return"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1157,"sourceLetter":"R","sourceRaw":"return","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1158,"word":"review","headwords":["review"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1158,"sourceLetter":"R","sourceRaw":"review","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1159,"word":"rice","headwords":["rice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1159,"sourceLetter":"R","sourceRaw":"rice","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1160,"word":"rich","headwords":["rich"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1160,"sourceLetter":"R","sourceRaw":"rich","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1161,"word":"ride","headwords":["ride"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1161,"sourceLetter":"R","sourceRaw":"ride","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1162,"word":"right","headwords":["right"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1162,"sourceLetter":"R","sourceRaw":"right","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1163,"word":"ring","headwords":["ring"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1163,"sourceLetter":"R","sourceRaw":"ring","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1164,"word":"rise","headwords":["rise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1164,"sourceLetter":"R","sourceRaw":"rise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1165,"word":"risk","headwords":["risk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1165,"sourceLetter":"R","sourceRaw":"risk","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1166,"word":"river","headwords":["river"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1166,"sourceLetter":"R","sourceRaw":"river","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1167,"word":"road","headwords":["road"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1167,"sourceLetter":"R","sourceRaw":"road","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1168,"word":"robot","headwords":["robot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1168,"sourceLetter":"R","sourceRaw":"robot","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1169,"word":"rock","headwords":["rock"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1169,"sourceLetter":"R","sourceRaw":"rock","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1170,"word":"rocket","headwords":["rocket"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1170,"sourceLetter":"R","sourceRaw":"rocket","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1171,"word":"role","headwords":["role"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1171,"sourceLetter":"R","sourceRaw":"role","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1172,"word":"room","headwords":["room"],"phonetic":"/ruːm/","translation":"房间","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My room is small but clean.","cn":"我的房间虽小但干净。"}],"source":"1600单词备用.txt","sourceIndex":1172,"sourceLetter":"R","sourceRaw":"room","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1173,"word":"rope","headwords":["rope"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1173,"sourceLetter":"R","sourceRaw":"rope","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1174,"word":"rose","headwords":["rose"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1174,"sourceLetter":"R","sourceRaw":"rose","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1175,"word":"round","headwords":["round"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1175,"sourceLetter":"R","sourceRaw":"round","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1176,"word":"row","headwords":["row"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1176,"sourceLetter":"R","sourceRaw":"row","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1177,"word":"rubbish","headwords":["rubbish"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1177,"sourceLetter":"R","sourceRaw":"rubbish","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1178,"word":"rule","headwords":["rule"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1178,"sourceLetter":"R","sourceRaw":"rule","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1179,"word":"ruler","headwords":["ruler"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1179,"sourceLetter":"R","sourceRaw":"ruler","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1180,"word":"run","headwords":["run"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1180,"sourceLetter":"R","sourceRaw":"run","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1181,"word":"rush","headwords":["rush"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1181,"sourceLetter":"R","sourceRaw":"rush","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母R","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1182,"word":"sad","headwords":["sad"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1182,"sourceLetter":"S","sourceRaw":"sad","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1183,"word":"safe","headwords":["safe"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1183,"sourceLetter":"S","sourceRaw":"safe","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1184,"word":"safety","headwords":["safety"],"phonetic":"/ˈseɪfti/","translation":"安全","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Safety comes first.","cn":"安全第一。"}],"source":"1600单词备用.txt","sourceIndex":1184,"sourceLetter":"S","sourceRaw":"safety","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1185,"word":"salad","headwords":["salad"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1185,"sourceLetter":"S","sourceRaw":"salad","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1186,"word":"sale","headwords":["sale"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1186,"sourceLetter":"S","sourceRaw":"sale","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1187,"word":"salt","headwords":["salt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1187,"sourceLetter":"S","sourceRaw":"salt","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1188,"word":"same","headwords":["same"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1188,"sourceLetter":"S","sourceRaw":"same","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1189,"word":"sand","headwords":["sand"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1189,"sourceLetter":"S","sourceRaw":"sand","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1190,"word":"sandwich","headwords":["sandwich"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1190,"sourceLetter":"S","sourceRaw":"sandwich","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1191,"word":"satisfy","headwords":["satisfy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1191,"sourceLetter":"S","sourceRaw":"satisfy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1192,"word":"save","headwords":["save"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1192,"sourceLetter":"S","sourceRaw":"save","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1193,"word":"say","headwords":["say"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1193,"sourceLetter":"S","sourceRaw":"say","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1194,"word":"scare","headwords":["scare"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1194,"sourceLetter":"S","sourceRaw":"scare","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1195,"word":"scarf","headwords":["scarf"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1195,"sourceLetter":"S","sourceRaw":"scarf","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1196,"word":"school","headwords":["school"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1196,"sourceLetter":"S","sourceRaw":"school","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1197,"word":"schoolbag","headwords":["schoolbag"],"phonetic":"/ˈskuːlbæɡ/","translation":"书包","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My schoolbag is very heavy.","cn":"我的书包很重。"}],"source":"1600单词备用.txt","sourceIndex":1197,"sourceLetter":"S","sourceRaw":"schoolbag","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1198,"word":"science","headwords":["science"],"phonetic":"/ˈsaɪəns/","translation":"科学","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Science is my favorite subject.","cn":"科学是我最喜欢的科目。"}],"source":"1600单词备用.txt","sourceIndex":1198,"sourceLetter":"S","sourceRaw":"science","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1199,"word":"scientist","headwords":["scientist"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1199,"sourceLetter":"S","sourceRaw":"scientist","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1200,"word":"scissors","headwords":["scissors"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1200,"sourceLetter":"S","sourceRaw":"scissors","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1201,"word":"score","headwords":["score"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1201,"sourceLetter":"S","sourceRaw":"score","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1202,"word":"screen","headwords":["screen"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1202,"sourceLetter":"S","sourceRaw":"screen","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1203,"word":"sea","headwords":["sea"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1203,"sourceLetter":"S","sourceRaw":"sea","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1204,"word":"search","headwords":["search"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1204,"sourceLetter":"S","sourceRaw":"search","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1205,"word":"season","headwords":["season"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1205,"sourceLetter":"S","sourceRaw":"season","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1206,"word":"seat","headwords":["seat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1206,"sourceLetter":"S","sourceRaw":"seat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1207,"word":"secret","headwords":["secret"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1207,"sourceLetter":"S","sourceRaw":"secret","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1208,"word":"see","headwords":["see"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1208,"sourceLetter":"S","sourceRaw":"see","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1209,"word":"seem","headwords":["seem"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1209,"sourceLetter":"S","sourceRaw":"seem","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1210,"word":"seldom","headwords":["seldom"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1210,"sourceLetter":"S","sourceRaw":"seldom","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1211,"word":"sell","headwords":["sell"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1211,"sourceLetter":"S","sourceRaw":"sell","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1212,"word":"send","headwords":["send"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1212,"sourceLetter":"S","sourceRaw":"send","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1213,"word":"sense","headwords":["sense"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1213,"sourceLetter":"S","sourceRaw":"sense","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1214,"word":"sentence","headwords":["sentence"],"phonetic":"/ˈsentəns/","translation":"句子","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Please make a sentence with this word.","cn":"请用这个词造句。"}],"source":"1600单词备用.txt","sourceIndex":1214,"sourceLetter":"S","sourceRaw":"sentence","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1215,"word":"separate","headwords":["separate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1215,"sourceLetter":"S","sourceRaw":"separate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1216,"word":"serious","headwords":["serious"],"phonetic":"/ˈsɪriəs/","translation":"严肃的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"He is a serious person.","cn":"他是个严肃的人。"}],"source":"1600单词备用.txt","sourceIndex":1216,"sourceLetter":"S","sourceRaw":"serious","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1217,"word":"serve","headwords":["serve"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1217,"sourceLetter":"S","sourceRaw":"serve","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1218,"word":"service","headwords":["service"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1218,"sourceLetter":"S","sourceRaw":"service","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1219,"word":"set","headwords":["set"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1219,"sourceLetter":"S","sourceRaw":"set","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1220,"word":"several","headwords":["several"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1220,"sourceLetter":"S","sourceRaw":"several","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1221,"word":"shake","headwords":["shake"],"phonetic":"/ʃeɪk/","translation":"摇动","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Shake the bottle before drinking.","cn":"喝之前摇一摇瓶子。"}],"source":"1600单词备用.txt","sourceIndex":1221,"sourceLetter":"S","sourceRaw":"shake","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1222,"word":"shall","headwords":["shall"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1222,"sourceLetter":"S","sourceRaw":"shall","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1223,"word":"shame","headwords":["shame"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1223,"sourceLetter":"S","sourceRaw":"shame","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1224,"word":"shape","headwords":["shape"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1224,"sourceLetter":"S","sourceRaw":"shape","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1225,"word":"share","headwords":["share"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1225,"sourceLetter":"S","sourceRaw":"share","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1226,"word":"shark","headwords":["shark"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1226,"sourceLetter":"S","sourceRaw":"shark","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1227,"word":"she","headwords":["she"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1227,"sourceLetter":"S","sourceRaw":"she","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1228,"word":"sheep","headwords":["sheep"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1228,"sourceLetter":"S","sourceRaw":"sheep (pl. sheep)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["pl. sheep"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母S","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1229,"word":"shelf","headwords":["shelf"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1229,"sourceLetter":"S","sourceRaw":"shelf (pl. shelves)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. shelves"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母S","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1230,"word":"shine","headwords":["shine"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1230,"sourceLetter":"S","sourceRaw":"shine","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1231,"word":"ship","headwords":["ship"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1231,"sourceLetter":"S","sourceRaw":"ship","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1232,"word":"shirt","headwords":["shirt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1232,"sourceLetter":"S","sourceRaw":"shirt","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1233,"word":"shock","headwords":["shock"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1233,"sourceLetter":"S","sourceRaw":"shock","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1234,"word":"shoe","headwords":["shoe"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1234,"sourceLetter":"S","sourceRaw":"shoe","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1235,"word":"shoot","headwords":["shoot"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1235,"sourceLetter":"S","sourceRaw":"shoot","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1236,"word":"shop","headwords":["shop"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1236,"sourceLetter":"S","sourceRaw":"shop","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1237,"word":"short","headwords":["short"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1237,"sourceLetter":"S","sourceRaw":"short","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1238,"word":"shorts","headwords":["shorts"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1238,"sourceLetter":"S","sourceRaw":"shorts","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1239,"word":"should","headwords":["should"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1239,"sourceLetter":"S","sourceRaw":"should","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1240,"word":"shoulder","headwords":["shoulder"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1240,"sourceLetter":"S","sourceRaw":"shoulder","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1241,"word":"shout","headwords":["shout"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1241,"sourceLetter":"S","sourceRaw":"shout","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1242,"word":"show","headwords":["show"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1242,"sourceLetter":"S","sourceRaw":"show","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1243,"word":"shower","headwords":["shower"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1243,"sourceLetter":"S","sourceRaw":"shower","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1244,"word":"shut","headwords":["shut"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1244,"sourceLetter":"S","sourceRaw":"shut","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1245,"word":"shy","headwords":["shy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1245,"sourceLetter":"S","sourceRaw":"shy","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1246,"word":"sick","headwords":["sick"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1246,"sourceLetter":"S","sourceRaw":"sick","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1247,"word":"side","headwords":["side"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1247,"sourceLetter":"S","sourceRaw":"side","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1248,"word":"sign","headwords":["sign"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1248,"sourceLetter":"S","sourceRaw":"sign","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1249,"word":"silent","headwords":["silent"],"phonetic":"/ˈsaɪlənt/","translation":"沉默的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The room became silent.","cn":"房间变得安静了。"}],"source":"1600单词备用.txt","sourceIndex":1249,"sourceLetter":"S","sourceRaw":"silent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1250,"word":"silk","headwords":["silk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1250,"sourceLetter":"S","sourceRaw":"silk","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1251,"word":"silly","headwords":["silly"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1251,"sourceLetter":"S","sourceRaw":"silly","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1252,"word":"silver","headwords":["silver"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1252,"sourceLetter":"S","sourceRaw":"silver","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1253,"word":"similar","headwords":["similar"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1253,"sourceLetter":"S","sourceRaw":"similar","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1254,"word":"simple","headwords":["simple"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1254,"sourceLetter":"S","sourceRaw":"simple","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1255,"word":"since","headwords":["since"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1255,"sourceLetter":"S","sourceRaw":"since","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1256,"word":"sing","headwords":["sing"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1256,"sourceLetter":"S","sourceRaw":"sing","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1257,"word":"single","headwords":["single"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1257,"sourceLetter":"S","sourceRaw":"single","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1258,"word":"sir","headwords":["sir"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1258,"sourceLetter":"S","sourceRaw":"sir","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1259,"word":"sister","headwords":["sister"],"phonetic":"/ˈsɪstər/","translation":"姐妹","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My sister is very kind.","cn":"我姐姐很善良。"}],"source":"1600单词备用.txt","sourceIndex":1259,"sourceLetter":"S","sourceRaw":"sister","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1260,"word":"sit","headwords":["sit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1260,"sourceLetter":"S","sourceRaw":"sit","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1261,"word":"situation","headwords":["situation"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1261,"sourceLetter":"S","sourceRaw":"situation","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1262,"word":"size","headwords":["size"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1262,"sourceLetter":"S","sourceRaw":"size","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1263,"word":"skate","headwords":["skate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1263,"sourceLetter":"S","sourceRaw":"skate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1264,"word":"ski","headwords":["ski"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1264,"sourceLetter":"S","sourceRaw":"ski","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1265,"word":"skill","headwords":["skill"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1265,"sourceLetter":"S","sourceRaw":"skill","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1266,"word":"skirt","headwords":["skirt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1266,"sourceLetter":"S","sourceRaw":"skirt","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1267,"word":"sky","headwords":["sky"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1267,"sourceLetter":"S","sourceRaw":"sky","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1268,"word":"sleep","headwords":["sleep"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1268,"sourceLetter":"S","sourceRaw":"sleep","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1269,"word":"slim","headwords":["slim"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1269,"sourceLetter":"S","sourceRaw":"slim","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1270,"word":"slow","headwords":["slow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1270,"sourceLetter":"S","sourceRaw":"slow","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1271,"word":"small","headwords":["small"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1271,"sourceLetter":"S","sourceRaw":"small","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1272,"word":"smart","headwords":["smart"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1272,"sourceLetter":"S","sourceRaw":"smart","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1273,"word":"smell","headwords":["smell"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1273,"sourceLetter":"S","sourceRaw":"smell","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1274,"word":"smile","headwords":["smile"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1274,"sourceLetter":"S","sourceRaw":"smile","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1275,"word":"smoke","headwords":["smoke"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1275,"sourceLetter":"S","sourceRaw":"smoke","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1276,"word":"smooth","headwords":["smooth"],"phonetic":"/smuːð/","translation":"悦耳的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The music sounds very smooth.","cn":"这音乐听起来很流畅。"}],"source":"1600单词备用.txt","sourceIndex":1276,"sourceLetter":"S","sourceRaw":"smooth","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1277,"word":"snack","headwords":["snack"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1277,"sourceLetter":"S","sourceRaw":"snack","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1278,"word":"snake","headwords":["snake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1278,"sourceLetter":"S","sourceRaw":"snake","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1279,"word":"snow","headwords":["snow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1279,"sourceLetter":"S","sourceRaw":"snow","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1280,"word":"so","headwords":["so"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1280,"sourceLetter":"S","sourceRaw":"so","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1281,"word":"social","headwords":["social"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1281,"sourceLetter":"S","sourceRaw":"social","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1282,"word":"socialism","headwords":["socialism"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1282,"sourceLetter":"S","sourceRaw":"socialism","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1283,"word":"society","headwords":["society"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1283,"sourceLetter":"S","sourceRaw":"society","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1284,"word":"sock","headwords":["sock"],"phonetic":"/sɑːk/","translation":"短袜","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I need a pair of socks.","cn":"我需要一双袜子。"}],"source":"1600单词备用.txt","sourceIndex":1284,"sourceLetter":"S","sourceRaw":"sock","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1285,"word":"sofa","headwords":["sofa"],"phonetic":"/ˈsoʊfə/","translation":"沙发","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The cat is sleeping on the sofa.","cn":"猫在沙发上睡觉。"}],"source":"1600单词备用.txt","sourceIndex":1285,"sourceLetter":"S","sourceRaw":"sofa","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1286,"word":"soft","headwords":["soft"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1286,"sourceLetter":"S","sourceRaw":"soft","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1287,"word":"soil","headwords":["soil"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1287,"sourceLetter":"S","sourceRaw":"soil","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1288,"word":"soldier","headwords":["soldier"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1288,"sourceLetter":"S","sourceRaw":"soldier","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1289,"word":"solve","headwords":["solve"],"phonetic":"/sɑːlv/","translation":"解决","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Can you solve this problem?","cn":"你能解决这个问题吗？"}],"source":"1600单词备用.txt","sourceIndex":1289,"sourceLetter":"S","sourceRaw":"solve","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1290,"word":"some","headwords":["some"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1290,"sourceLetter":"S","sourceRaw":"some","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1291,"word":"somebody","headwords":["somebody","someone"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1291,"sourceLetter":"S","sourceRaw":"somebody / someone","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇","并列词条"],"verifyStatus":"needs-enrichment"},
  {"id":1292,"word":"something","headwords":["something"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1292,"sourceLetter":"S","sourceRaw":"something","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1293,"word":"sometimes","headwords":["sometimes"],"phonetic":"/ˈsʌmtaɪmz/","translation":"有时","pos":"adv.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Sometimes I walk to school.","cn":"有时候我走路去学校。"}],"source":"1600单词备用.txt","sourceIndex":1293,"sourceLetter":"S","sourceRaw":"sometimes","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1294,"word":"somewhere","headwords":["somewhere"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1294,"sourceLetter":"S","sourceRaw":"somewhere","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1295,"word":"son","headwords":["son"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1295,"sourceLetter":"S","sourceRaw":"son","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1296,"word":"song","headwords":["song"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1296,"sourceLetter":"S","sourceRaw":"song","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1297,"word":"soon","headwords":["soon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1297,"sourceLetter":"S","sourceRaw":"soon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1298,"word":"sore","headwords":["sore"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1298,"sourceLetter":"S","sourceRaw":"sore","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1299,"word":"sorry","headwords":["sorry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1299,"sourceLetter":"S","sourceRaw":"sorry","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1300,"word":"sound","headwords":["sound"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1300,"sourceLetter":"S","sourceRaw":"sound","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1301,"word":"soup","headwords":["soup"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1301,"sourceLetter":"S","sourceRaw":"soup","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1302,"word":"south","headwords":["south"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1302,"sourceLetter":"S","sourceRaw":"south","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1303,"word":"space","headwords":["space"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1303,"sourceLetter":"S","sourceRaw":"space","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1304,"word":"spare","headwords":["spare"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1304,"sourceLetter":"S","sourceRaw":"spare","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1305,"word":"speak","headwords":["speak"],"phonetic":"/spiːk/","translation":"说","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Can you speak English?","cn":"你会说英语吗？"}],"source":"1600单词备用.txt","sourceIndex":1305,"sourceLetter":"S","sourceRaw":"speak","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1306,"word":"special","headwords":["special"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1306,"sourceLetter":"S","sourceRaw":"special","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1307,"word":"speech","headwords":["speech"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1307,"sourceLetter":"S","sourceRaw":"speech","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1308,"word":"speed","headwords":["speed"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1308,"sourceLetter":"S","sourceRaw":"speed","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1309,"word":"spell","headwords":["spell"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1309,"sourceLetter":"S","sourceRaw":"spell","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1310,"word":"spend","headwords":["spend"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1310,"sourceLetter":"S","sourceRaw":"spend","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1311,"word":"spirit","headwords":["spirit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1311,"sourceLetter":"S","sourceRaw":"spirit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1312,"word":"spoon","headwords":["spoon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1312,"sourceLetter":"S","sourceRaw":"spoon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1313,"word":"sport","headwords":["sport"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1313,"sourceLetter":"S","sourceRaw":"sport","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1314,"word":"spread","headwords":["spread"],"phonetic":"/spred/","translation":"传播","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The news spread quickly.","cn":"消息很快传开了。"}],"source":"1600单词备用.txt","sourceIndex":1314,"sourceLetter":"S","sourceRaw":"spread","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1315,"word":"spring","headwords":["spring"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1315,"sourceLetter":"S","sourceRaw":"spring","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1316,"word":"square","headwords":["square"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1316,"sourceLetter":"S","sourceRaw":"square","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1317,"word":"stage","headwords":["stage"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1317,"sourceLetter":"S","sourceRaw":"stage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1318,"word":"stamp","headwords":["stamp"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1318,"sourceLetter":"S","sourceRaw":"stamp","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1319,"word":"stand","headwords":["stand"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1319,"sourceLetter":"S","sourceRaw":"stand","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1320,"word":"standard","headwords":["standard"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1320,"sourceLetter":"S","sourceRaw":"standard","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1321,"word":"star","headwords":["star"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1321,"sourceLetter":"S","sourceRaw":"star","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1322,"word":"start","headwords":["start"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1322,"sourceLetter":"S","sourceRaw":"start","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1323,"word":"state","headwords":["state"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1323,"sourceLetter":"S","sourceRaw":"state","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1324,"word":"station","headwords":["station"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1324,"sourceLetter":"S","sourceRaw":"station","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1325,"word":"stay","headwords":["stay"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1325,"sourceLetter":"S","sourceRaw":"stay","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1326,"word":"steal","headwords":["steal"],"phonetic":"/stiːl/","translation":"偷","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Someone stole my wallet.","cn":"有人偷了我的钱包。"}],"source":"1600单词备用.txt","sourceIndex":1326,"sourceLetter":"S","sourceRaw":"steal","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1327,"word":"step","headwords":["step"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1327,"sourceLetter":"S","sourceRaw":"step","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1328,"word":"stick","headwords":["stick"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1328,"sourceLetter":"S","sourceRaw":"stick","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1329,"word":"still","headwords":["still"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1329,"sourceLetter":"S","sourceRaw":"still","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1330,"word":"stomach","headwords":["stomach"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1330,"sourceLetter":"S","sourceRaw":"stomach","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1331,"word":"stone","headwords":["stone"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1331,"sourceLetter":"S","sourceRaw":"stone","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1332,"word":"stop","headwords":["stop"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1332,"sourceLetter":"S","sourceRaw":"stop","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1333,"word":"store","headwords":["store"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1333,"sourceLetter":"S","sourceRaw":"store","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1334,"word":"storm","headwords":["storm"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1334,"sourceLetter":"S","sourceRaw":"storm","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1335,"word":"story","headwords":["story"],"phonetic":"/ˈstɔːri/","translation":"故事","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Tell me a story.","cn":"给我讲个故事吧。"}],"source":"1600单词备用.txt","sourceIndex":1335,"sourceLetter":"S","sourceRaw":"story","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1336,"word":"straight","headwords":["straight"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1336,"sourceLetter":"S","sourceRaw":"straight","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1337,"word":"strange","headwords":["strange"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1337,"sourceLetter":"S","sourceRaw":"strange","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1338,"word":"strawberry","headwords":["strawberry"],"phonetic":"/ˈstrɔːberi/","translation":"草莓","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Strawberries are my favorite fruit.","cn":"草莓是我最喜欢的水果。"}],"source":"1600单词备用.txt","sourceIndex":1338,"sourceLetter":"S","sourceRaw":"strawberry","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1339,"word":"street","headwords":["street"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1339,"sourceLetter":"S","sourceRaw":"street","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1340,"word":"stress","headwords":["stress"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1340,"sourceLetter":"S","sourceRaw":"stress","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1341,"word":"strict","headwords":["strict"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1341,"sourceLetter":"S","sourceRaw":"strict","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1342,"word":"strong","headwords":["strong"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1342,"sourceLetter":"S","sourceRaw":"strong","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1343,"word":"student","headwords":["student"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1343,"sourceLetter":"S","sourceRaw":"student","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1344,"word":"study","headwords":["study"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1344,"sourceLetter":"S","sourceRaw":"study","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1345,"word":"style","headwords":["style"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1345,"sourceLetter":"S","sourceRaw":"style","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1346,"word":"subject","headwords":["subject"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1346,"sourceLetter":"S","sourceRaw":"subject","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1347,"word":"succeed","headwords":["succeed"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1347,"sourceLetter":"S","sourceRaw":"succeed","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1348,"word":"success","headwords":["success"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1348,"sourceLetter":"S","sourceRaw":"success","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1349,"word":"such","headwords":["such"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1349,"sourceLetter":"S","sourceRaw":"such","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1350,"word":"sudden","headwords":["sudden"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1350,"sourceLetter":"S","sourceRaw":"sudden","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1351,"word":"suffer","headwords":["suffer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1351,"sourceLetter":"S","sourceRaw":"suffer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1352,"word":"sugar","headwords":["sugar"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1352,"sourceLetter":"S","sourceRaw":"sugar","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1353,"word":"suggest","headwords":["suggest"],"phonetic":"/səˈdʒest/","translation":"建议","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I suggest we go there by bus.","cn":"我建议我们坐公交去。"}],"source":"1600单词备用.txt","sourceIndex":1353,"sourceLetter":"S","sourceRaw":"suggest","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1354,"word":"suit","headwords":["suit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1354,"sourceLetter":"S","sourceRaw":"suit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1355,"word":"summer","headwords":["summer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1355,"sourceLetter":"S","sourceRaw":"summer","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1356,"word":"sun","headwords":["sun"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1356,"sourceLetter":"S","sourceRaw":"sun","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1357,"word":"sunny","headwords":["sunny"],"phonetic":"/ˈsʌni/","translation":"晴朗的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"It is sunny and warm.","cn":"天气晴朗温暖。"}],"source":"1600单词备用.txt","sourceIndex":1357,"sourceLetter":"S","sourceRaw":"sunny","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1358,"word":"supermarket","headwords":["supermarket"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1358,"sourceLetter":"S","sourceRaw":"supermarket","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1359,"word":"support","headwords":["support"],"phonetic":"/səˈpɔːrt/","translation":"支持","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"My family always supports me.","cn":"我的家人一直支持我。"}],"source":"1600单词备用.txt","sourceIndex":1359,"sourceLetter":"S","sourceRaw":"support","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1360,"word":"suppose","headwords":["suppose"],"phonetic":"/səˈpoʊz/","translation":"假定","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I suppose you are right.","cn":"我想你是对的。"}],"source":"1600单词备用.txt","sourceIndex":1360,"sourceLetter":"S","sourceRaw":"suppose","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1361,"word":"sure","headwords":["sure"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1361,"sourceLetter":"S","sourceRaw":"sure","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1362,"word":"surface","headwords":["surface"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1362,"sourceLetter":"S","sourceRaw":"surface","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1363,"word":"surprise","headwords":["surprise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1363,"sourceLetter":"S","sourceRaw":"surprise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1364,"word":"survey","headwords":["survey"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1364,"sourceLetter":"S","sourceRaw":"survey","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1365,"word":"survive","headwords":["survive"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1365,"sourceLetter":"S","sourceRaw":"survive","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1366,"word":"sweater","headwords":["sweater"],"phonetic":"/ˈswetər/","translation":"毛衣","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"She is wearing a warm sweater.","cn":"她穿着一件暖和的毛衣。"}],"source":"1600单词备用.txt","sourceIndex":1366,"sourceLetter":"S","sourceRaw":"sweater","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1367,"word":"sweep","headwords":["sweep"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1367,"sourceLetter":"S","sourceRaw":"sweep","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1368,"word":"sweet","headwords":["sweet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1368,"sourceLetter":"S","sourceRaw":"sweet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1369,"word":"swim","headwords":["swim"],"phonetic":"/swɪm/","translation":"游泳","pos":"v.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I can swim very well.","cn":"我游泳游得很好。"}],"source":"1600单词备用.txt","sourceIndex":1369,"sourceLetter":"S","sourceRaw":"swim","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1370,"word":"symbol","headwords":["symbol"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1370,"sourceLetter":"S","sourceRaw":"symbol","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母S","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1371,"word":"table","headwords":["table"],"phonetic":"/ˈteɪbl/","translation":"桌子","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"There is a book on the table.","cn":"桌子上有一本书。"}],"source":"1600单词备用.txt","sourceIndex":1371,"sourceLetter":"T","sourceRaw":"table","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1372,"word":"tail","headwords":["tail"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1372,"sourceLetter":"T","sourceRaw":"tail","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1373,"word":"take","headwords":["take"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1373,"sourceLetter":"T","sourceRaw":"take","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1374,"word":"talent","headwords":["talent"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1374,"sourceLetter":"T","sourceRaw":"talent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1375,"word":"talk","headwords":["talk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1375,"sourceLetter":"T","sourceRaw":"talk","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1376,"word":"tall","headwords":["tall"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1376,"sourceLetter":"T","sourceRaw":"tall","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1377,"word":"tap","headwords":["tap"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1377,"sourceLetter":"T","sourceRaw":"tap","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1378,"word":"tape","headwords":["tape"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1378,"sourceLetter":"T","sourceRaw":"tape","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1379,"word":"task","headwords":["task"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1379,"sourceLetter":"T","sourceRaw":"task","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1380,"word":"taste","headwords":["taste"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1380,"sourceLetter":"T","sourceRaw":"taste","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1381,"word":"taxi","headwords":["taxi"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1381,"sourceLetter":"T","sourceRaw":"taxi","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1382,"word":"tea","headwords":["tea"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1382,"sourceLetter":"T","sourceRaw":"tea","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1383,"word":"teach","headwords":["teach"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1383,"sourceLetter":"T","sourceRaw":"teach","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1384,"word":"teacher","headwords":["teacher"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1384,"sourceLetter":"T","sourceRaw":"teacher","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1385,"word":"team","headwords":["team"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1385,"sourceLetter":"T","sourceRaw":"team","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1386,"word":"teamwork","headwords":["teamwork"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1386,"sourceLetter":"T","sourceRaw":"teamwork","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1387,"word":"technology","headwords":["technology"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1387,"sourceLetter":"T","sourceRaw":"technology","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1388,"word":"teenage","headwords":["teenage"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1388,"sourceLetter":"T","sourceRaw":"teenage","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1389,"word":"tell","headwords":["tell"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1389,"sourceLetter":"T","sourceRaw":"tell","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1390,"word":"temperature","headwords":["temperature"],"phonetic":"/ˈtemprətʃər/","translation":"温度","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The temperature is very high today.","cn":"今天气温很高。"}],"source":"1600单词备用.txt","sourceIndex":1390,"sourceLetter":"T","sourceRaw":"temperature","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1391,"word":"tennis","headwords":["tennis"],"phonetic":"/ˈtenɪs/","translation":"网球","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Let us play tennis.","cn":"我们去打网球吧。"}],"source":"1600单词备用.txt","sourceIndex":1391,"sourceLetter":"T","sourceRaw":"tennis","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1392,"word":"tent","headwords":["tent"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1392,"sourceLetter":"T","sourceRaw":"tent","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1393,"word":"term","headwords":["term"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1393,"sourceLetter":"T","sourceRaw":"term","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1394,"word":"terrible","headwords":["terrible"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1394,"sourceLetter":"T","sourceRaw":"terrible","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1395,"word":"test","headwords":["test"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1395,"sourceLetter":"T","sourceRaw":"test","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1396,"word":"text","headwords":["text"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1396,"sourceLetter":"T","sourceRaw":"text","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1397,"word":"than","headwords":["than"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1397,"sourceLetter":"T","sourceRaw":"than","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1398,"word":"thank","headwords":["thank"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1398,"sourceLetter":"T","sourceRaw":"thank","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1399,"word":"that","headwords":["that"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1399,"sourceLetter":"T","sourceRaw":"that","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1400,"word":"the","headwords":["the"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1400,"sourceLetter":"T","sourceRaw":"the","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1401,"word":"theatre","headwords":["theatre"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1401,"sourceLetter":"T","sourceRaw":"theatre (AmE theater)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE theater"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母T","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1402,"word":"their","headwords":["their"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1402,"sourceLetter":"T","sourceRaw":"their","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1403,"word":"theirs","headwords":["theirs"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1403,"sourceLetter":"T","sourceRaw":"theirs","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1404,"word":"them","headwords":["them"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1404,"sourceLetter":"T","sourceRaw":"them","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1405,"word":"themselves","headwords":["themselves"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1405,"sourceLetter":"T","sourceRaw":"themselves","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1406,"word":"then","headwords":["then"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1406,"sourceLetter":"T","sourceRaw":"then","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1407,"word":"there","headwords":["there"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1407,"sourceLetter":"T","sourceRaw":"there","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1408,"word":"therefore","headwords":["therefore"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1408,"sourceLetter":"T","sourceRaw":"therefore","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1409,"word":"these","headwords":["these"],"phonetic":"/ðiːz/","translation":"这些","pos":"pron.","grade":null,"semester":null,"unit":null,"examples":[{"en":"These books are mine.","cn":"这些书是我的。"}],"source":"1600单词备用.txt","sourceIndex":1409,"sourceLetter":"T","sourceRaw":"these","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1410,"word":"they","headwords":["they"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1410,"sourceLetter":"T","sourceRaw":"they","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1411,"word":"thick","headwords":["thick"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1411,"sourceLetter":"T","sourceRaw":"thick","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1412,"word":"thin","headwords":["thin"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1412,"sourceLetter":"T","sourceRaw":"thin","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1413,"word":"thing","headwords":["thing"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1413,"sourceLetter":"T","sourceRaw":"thing","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1414,"word":"think","headwords":["think"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1414,"sourceLetter":"T","sourceRaw":"think","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1415,"word":"thirsty","headwords":["thirsty"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1415,"sourceLetter":"T","sourceRaw":"thirsty","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1416,"word":"this","headwords":["this"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1416,"sourceLetter":"T","sourceRaw":"this","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1417,"word":"those","headwords":["those"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1417,"sourceLetter":"T","sourceRaw":"those","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1418,"word":"though","headwords":["though"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1418,"sourceLetter":"T","sourceRaw":"though","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1419,"word":"thought","headwords":["thought"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1419,"sourceLetter":"T","sourceRaw":"thought","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1420,"word":"throat","headwords":["throat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1420,"sourceLetter":"T","sourceRaw":"throat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1421,"word":"through","headwords":["through"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1421,"sourceLetter":"T","sourceRaw":"through","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1422,"word":"throw","headwords":["throw"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1422,"sourceLetter":"T","sourceRaw":"throw","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1423,"word":"thunder","headwords":["thunder"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1423,"sourceLetter":"T","sourceRaw":"thunder","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1424,"word":"thicket","headwords":["thicket"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1424,"sourceLetter":"T","sourceRaw":"thicket","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1425,"word":"tidy","headwords":["tidy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1425,"sourceLetter":"T","sourceRaw":"tidy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1426,"word":"tie","headwords":["tie"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1426,"sourceLetter":"T","sourceRaw":"tie","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1427,"word":"tiger","headwords":["tiger"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1427,"sourceLetter":"T","sourceRaw":"tiger","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1428,"word":"time","headwords":["time"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1428,"sourceLetter":"T","sourceRaw":"time","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1429,"word":"tiny","headwords":["tiny"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1429,"sourceLetter":"T","sourceRaw":"tiny","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1430,"word":"tired","headwords":["tired"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1430,"sourceLetter":"T","sourceRaw":"tired","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1431,"word":"to","headwords":["to"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1431,"sourceLetter":"T","sourceRaw":"to","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1432,"word":"today","headwords":["today"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1432,"sourceLetter":"T","sourceRaw":"today","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1433,"word":"tofu","headwords":["tofu"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1433,"sourceLetter":"T","sourceRaw":"tofu","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1434,"word":"together","headwords":["together"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1434,"sourceLetter":"T","sourceRaw":"together","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1435,"word":"toilet","headwords":["toilet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1435,"sourceLetter":"T","sourceRaw":"toilet","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1436,"word":"tomato","headwords":["tomato"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1436,"sourceLetter":"T","sourceRaw":"tomato","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1437,"word":"tomorrow","headwords":["tomorrow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1437,"sourceLetter":"T","sourceRaw":"tomorrow","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1438,"word":"ton","headwords":["ton"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1438,"sourceLetter":"T","sourceRaw":"ton","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1439,"word":"tonight","headwords":["tonight"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1439,"sourceLetter":"T","sourceRaw":"tonight","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1440,"word":"too","headwords":["too"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1440,"sourceLetter":"T","sourceRaw":"too","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1441,"word":"tool","headwords":["tool"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1441,"sourceLetter":"T","sourceRaw":"tool","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1442,"word":"tooth","headwords":["tooth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1442,"sourceLetter":"T","sourceRaw":"tooth (pl. teeth)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. teeth"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母T","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1443,"word":"top","headwords":["top"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1443,"sourceLetter":"T","sourceRaw":"top","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1444,"word":"total","headwords":["total"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1444,"sourceLetter":"T","sourceRaw":"total","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1445,"word":"touch","headwords":["touch"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1445,"sourceLetter":"T","sourceRaw":"touch","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1446,"word":"tour","headwords":["tour"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1446,"sourceLetter":"T","sourceRaw":"tour","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1447,"word":"tourist","headwords":["tourist"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1447,"sourceLetter":"T","sourceRaw":"tourist","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1448,"word":"towards","headwords":["towards"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1448,"sourceLetter":"T","sourceRaw":"towards (AmE toward)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["AmE toward"],"sourceNoteTypes":["美式拼写"],"tags":["课标1600","首字母T","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1449,"word":"tower","headwords":["tower"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1449,"sourceLetter":"T","sourceRaw":"tower","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1450,"word":"town","headwords":["town"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1450,"sourceLetter":"T","sourceRaw":"town","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1451,"word":"toy","headwords":["toy"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1451,"sourceLetter":"T","sourceRaw":"toy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1452,"word":"trade","headwords":["trade"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1452,"sourceLetter":"T","sourceRaw":"trade","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1453,"word":"tradition","headwords":["tradition"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1453,"sourceLetter":"T","sourceRaw":"tradition","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1454,"word":"traffic","headwords":["traffic"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1454,"sourceLetter":"T","sourceRaw":"traffic","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1455,"word":"train","headwords":["train"],"phonetic":"/treɪn/","translation":"火车","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I go to Beijing by train.","cn":"我坐火车去北京。"}],"source":"1600单词备用.txt","sourceIndex":1455,"sourceLetter":"T","sourceRaw":"train","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1456,"word":"training","headwords":["training"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1456,"sourceLetter":"T","sourceRaw":"training","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1457,"word":"translate","headwords":["translate"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1457,"sourceLetter":"T","sourceRaw":"translate","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1458,"word":"travel","headwords":["travel"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1458,"sourceLetter":"T","sourceRaw":"travel","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1459,"word":"treasure","headwords":["treasure"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1459,"sourceLetter":"T","sourceRaw":"treasure","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1460,"word":"treat","headwords":["treat"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1460,"sourceLetter":"T","sourceRaw":"treat","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1461,"word":"tree","headwords":["tree"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1461,"sourceLetter":"T","sourceRaw":"tree","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1462,"word":"trip","headwords":["trip"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1462,"sourceLetter":"T","sourceRaw":"trip","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1463,"word":"trouble","headwords":["trouble"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1463,"sourceLetter":"T","sourceRaw":"trouble","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1464,"word":"trousers","headwords":["trousers"],"phonetic":"/ˈtraʊzərz/","translation":"裤子","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"These trousers are too long.","cn":"这条裤子太长了。"}],"source":"1600单词备用.txt","sourceIndex":1464,"sourceLetter":"T","sourceRaw":"trousers","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1465,"word":"truck","headwords":["truck"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1465,"sourceLetter":"T","sourceRaw":"truck","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1466,"word":"true","headwords":["true"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1466,"sourceLetter":"T","sourceRaw":"true","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1467,"word":"trust","headwords":["trust"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1467,"sourceLetter":"T","sourceRaw":"trust","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1468,"word":"truth","headwords":["truth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1468,"sourceLetter":"T","sourceRaw":"truth","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1469,"word":"try","headwords":["try"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1469,"sourceLetter":"T","sourceRaw":"try","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1470,"word":"T-shirt","headwords":["T-shirt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1470,"sourceLetter":"T","sourceRaw":"T-shirt","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1471,"word":"turn","headwords":["turn"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1471,"sourceLetter":"T","sourceRaw":"turn","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母T","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1472,"word":"television","headwords":["television"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1472,"sourceLetter":"T","sourceRaw":"TV (=television)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["=television"],"sourceNoteTypes":["缩写说明"],"tags":["课标1600","首字母T","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1473,"word":"ugly","headwords":["ugly"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1473,"sourceLetter":"U","sourceRaw":"ugly","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1474,"word":"umbrella","headwords":["umbrella"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1474,"sourceLetter":"U","sourceRaw":"umbrella","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1475,"word":"uncle","headwords":["uncle"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1475,"sourceLetter":"U","sourceRaw":"uncle","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1476,"word":"under","headwords":["under"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1476,"sourceLetter":"U","sourceRaw":"under","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1477,"word":"underground","headwords":["underground"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1477,"sourceLetter":"U","sourceRaw":"underground","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1478,"word":"understand","headwords":["understand"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1478,"sourceLetter":"U","sourceRaw":"understand","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1479,"word":"uniform","headwords":["uniform"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1479,"sourceLetter":"U","sourceRaw":"uniform","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1480,"word":"unit","headwords":["unit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1480,"sourceLetter":"U","sourceRaw":"unit","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1481,"word":"universe","headwords":["universe"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1481,"sourceLetter":"U","sourceRaw":"universe","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1482,"word":"university","headwords":["university"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1482,"sourceLetter":"U","sourceRaw":"university","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1483,"word":"unless","headwords":["unless"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1483,"sourceLetter":"U","sourceRaw":"unless","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1484,"word":"until","headwords":["until"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1484,"sourceLetter":"U","sourceRaw":"until (till)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["till"],"sourceNoteTypes":["搭配/变体说明"],"tags":["课标1600","首字母U","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1485,"word":"up","headwords":["up"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1485,"sourceLetter":"U","sourceRaw":"up","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1486,"word":"upon","headwords":["upon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1486,"sourceLetter":"U","sourceRaw":"upon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1487,"word":"us","headwords":["us"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1487,"sourceLetter":"U","sourceRaw":"us","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1488,"word":"use","headwords":["use"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1488,"sourceLetter":"U","sourceRaw":"use","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1489,"word":"usual","headwords":["usual"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1489,"sourceLetter":"U","sourceRaw":"usual","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母U","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1490,"word":"vacation","headwords":["vacation"],"phonetic":"/veɪˈkeɪʃn/","translation":"假期","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"I went to the beach on vacation.","cn":"我假期去了海滩。"}],"source":"1600单词备用.txt","sourceIndex":1490,"sourceLetter":"V","sourceRaw":"vacation","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1491,"word":"value","headwords":["value"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1491,"sourceLetter":"V","sourceRaw":"value","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1492,"word":"vegetable","headwords":["vegetable"],"phonetic":"/ˈvedʒtəbl/","translation":"蔬菜","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Eat more vegetables to stay healthy.","cn":"多吃蔬菜保持健康。"}],"source":"1600单词备用.txt","sourceIndex":1492,"sourceLetter":"V","sourceRaw":"vegetable","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1493,"word":"very","headwords":["very"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1493,"sourceLetter":"V","sourceRaw":"very","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1494,"word":"victory","headwords":["victory"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1494,"sourceLetter":"V","sourceRaw":"victory","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1495,"word":"video","headwords":["video"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1495,"sourceLetter":"V","sourceRaw":"video","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1496,"word":"view","headwords":["view"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1496,"sourceLetter":"V","sourceRaw":"view","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1497,"word":"village","headwords":["village"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1497,"sourceLetter":"V","sourceRaw":"village","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1498,"word":"violin","headwords":["violin"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1498,"sourceLetter":"V","sourceRaw":"violin","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1499,"word":"virus","headwords":["virus"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1499,"sourceLetter":"V","sourceRaw":"virus","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1500,"word":"visit","headwords":["visit"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1500,"sourceLetter":"V","sourceRaw":"visit","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1501,"word":"voice","headwords":["voice"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1501,"sourceLetter":"V","sourceRaw":"voice","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1502,"word":"volleyball","headwords":["volleyball"],"phonetic":"/ˈvɑːlibɔːl/","translation":"排球","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"She plays volleyball after school.","cn":"她放学后打排球。"}],"source":"1600单词备用.txt","sourceIndex":1502,"sourceLetter":"V","sourceRaw":"volleyball","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1503,"word":"voluntary","headwords":["voluntary"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1503,"sourceLetter":"V","sourceRaw":"voluntary","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1504,"word":"volunteer","headwords":["volunteer"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1504,"sourceLetter":"V","sourceRaw":"volunteer","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1505,"word":"vote","headwords":["vote"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1505,"sourceLetter":"V","sourceRaw":"vote","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母V","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1506,"word":"wait","headwords":["wait"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1506,"sourceLetter":"W","sourceRaw":"wait","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1507,"word":"wake","headwords":["wake"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1507,"sourceLetter":"W","sourceRaw":"wake","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1508,"word":"walk","headwords":["walk"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1508,"sourceLetter":"W","sourceRaw":"walk","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1509,"word":"wall","headwords":["wall"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1509,"sourceLetter":"W","sourceRaw":"wall","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1510,"word":"wallet","headwords":["wallet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1510,"sourceLetter":"W","sourceRaw":"wallet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1511,"word":"want","headwords":["want"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1511,"sourceLetter":"W","sourceRaw":"want","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1512,"word":"war","headwords":["war"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1512,"sourceLetter":"W","sourceRaw":"war","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1513,"word":"warm","headwords":["warm"],"phonetic":"/wɔːrm/","translation":"温暖的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Spring is warm and nice.","cn":"春天温暖宜人。"}],"source":"1600单词备用.txt","sourceIndex":1513,"sourceLetter":"W","sourceRaw":"warm","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1514,"word":"warn","headwords":["warn"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1514,"sourceLetter":"W","sourceRaw":"warn","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1515,"word":"wash","headwords":["wash"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1515,"sourceLetter":"W","sourceRaw":"wash","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1516,"word":"waste","headwords":["waste"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1516,"sourceLetter":"W","sourceRaw":"waste","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1517,"word":"watch","headwords":["watch"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1517,"sourceLetter":"W","sourceRaw":"watch","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1518,"word":"water","headwords":["water"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1518,"sourceLetter":"W","sourceRaw":"water","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1519,"word":"watermelon","headwords":["watermelon"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1519,"sourceLetter":"W","sourceRaw":"watermelon","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1520,"word":"wave","headwords":["wave"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1520,"sourceLetter":"W","sourceRaw":"wave","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1521,"word":"way","headwords":["way"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1521,"sourceLetter":"W","sourceRaw":"way","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1522,"word":"we","headwords":["we"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1522,"sourceLetter":"W","sourceRaw":"we","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1523,"word":"weak","headwords":["weak"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1523,"sourceLetter":"W","sourceRaw":"weak","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1524,"word":"wealth","headwords":["wealth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1524,"sourceLetter":"W","sourceRaw":"wealth","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1525,"word":"wear","headwords":["wear"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1525,"sourceLetter":"W","sourceRaw":"wear","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1526,"word":"weather","headwords":["weather"],"phonetic":"/ˈweðər/","translation":"天气","pos":"n.","grade":null,"semester":null,"unit":null,"examples":[{"en":"The weather is nice today.","cn":"今天天气很好。"}],"source":"1600单词备用.txt","sourceIndex":1526,"sourceLetter":"W","sourceRaw":"weather","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1527,"word":"website","headwords":["website"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1527,"sourceLetter":"W","sourceRaw":"website","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1528,"word":"week","headwords":["week"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1528,"sourceLetter":"W","sourceRaw":"week","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1529,"word":"weekday","headwords":["weekday"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1529,"sourceLetter":"W","sourceRaw":"weekday","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1530,"word":"weekend","headwords":["weekend"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1530,"sourceLetter":"W","sourceRaw":"weekend","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1531,"word":"weigh","headwords":["weigh"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1531,"sourceLetter":"W","sourceRaw":"weigh","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1532,"word":"weight","headwords":["weight"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1532,"sourceLetter":"W","sourceRaw":"weight","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1533,"word":"welcome","headwords":["welcome"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1533,"sourceLetter":"W","sourceRaw":"welcome","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1534,"word":"well","headwords":["well"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1534,"sourceLetter":"W","sourceRaw":"well","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1535,"word":"west","headwords":["west"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1535,"sourceLetter":"W","sourceRaw":"west","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1536,"word":"wet","headwords":["wet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1536,"sourceLetter":"W","sourceRaw":"wet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1537,"word":"whale","headwords":["whale"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1537,"sourceLetter":"W","sourceRaw":"whale","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1538,"word":"what","headwords":["what"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1538,"sourceLetter":"W","sourceRaw":"what","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1539,"word":"whatever","headwords":["whatever"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1539,"sourceLetter":"W","sourceRaw":"whatever","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1540,"word":"wheel","headwords":["wheel"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1540,"sourceLetter":"W","sourceRaw":"wheel","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1541,"word":"when","headwords":["when"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1541,"sourceLetter":"W","sourceRaw":"when","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1542,"word":"whenever","headwords":["whenever"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1542,"sourceLetter":"W","sourceRaw":"whenever","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1543,"word":"where","headwords":["where"],"phonetic":"/wer/","translation":"在哪里","pos":"adv.","grade":null,"semester":null,"unit":null,"examples":[{"en":"Where is the nearest bank?","cn":"最近的银行在哪里？"}],"source":"1600单词备用.txt","sourceIndex":1543,"sourceLetter":"W","sourceRaw":"where","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1544,"word":"whether","headwords":["whether"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1544,"sourceLetter":"W","sourceRaw":"whether","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1545,"word":"which","headwords":["which"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1545,"sourceLetter":"W","sourceRaw":"which","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1546,"word":"while","headwords":["while"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1546,"sourceLetter":"W","sourceRaw":"while","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1547,"word":"white","headwords":["white"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1547,"sourceLetter":"W","sourceRaw":"white","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1548,"word":"who","headwords":["who"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1548,"sourceLetter":"W","sourceRaw":"who","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1549,"word":"whole","headwords":["whole"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1549,"sourceLetter":"W","sourceRaw":"whole","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1550,"word":"whom","headwords":["whom"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1550,"sourceLetter":"W","sourceRaw":"whom","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1551,"word":"whose","headwords":["whose"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1551,"sourceLetter":"W","sourceRaw":"whose","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1552,"word":"why","headwords":["why"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1552,"sourceLetter":"W","sourceRaw":"why","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1553,"word":"wide","headwords":["wide"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1553,"sourceLetter":"W","sourceRaw":"wide","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1554,"word":"wife","headwords":["wife"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1554,"sourceLetter":"W","sourceRaw":"wife (pl. wives)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. wives"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母W","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1555,"word":"wild","headwords":["wild"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1555,"sourceLetter":"W","sourceRaw":"wild","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1556,"word":"will","headwords":["will"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1556,"sourceLetter":"W","sourceRaw":"will","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1557,"word":"win","headwords":["win"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1557,"sourceLetter":"W","sourceRaw":"win","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1558,"word":"wind","headwords":["wind"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1558,"sourceLetter":"W","sourceRaw":"wind","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1559,"word":"window","headwords":["window"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1559,"sourceLetter":"W","sourceRaw":"window","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1560,"word":"windy","headwords":["windy"],"phonetic":"/ˈwɪndi/","translation":"有风的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"It is too windy to go outside.","cn":"风太大了，不适合外出。"}],"source":"1600单词备用.txt","sourceIndex":1560,"sourceLetter":"W","sourceRaw":"windy","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1561,"word":"wing","headwords":["wing"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1561,"sourceLetter":"W","sourceRaw":"wing","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1562,"word":"winner","headwords":["winner"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1562,"sourceLetter":"W","sourceRaw":"winner","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1563,"word":"winter","headwords":["winter"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1563,"sourceLetter":"W","sourceRaw":"winter","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1564,"word":"wise","headwords":["wise"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1564,"sourceLetter":"W","sourceRaw":"wise","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1565,"word":"wish","headwords":["wish"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1565,"sourceLetter":"W","sourceRaw":"wish","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1566,"word":"with","headwords":["with"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1566,"sourceLetter":"W","sourceRaw":"with","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1567,"word":"within","headwords":["within"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1567,"sourceLetter":"W","sourceRaw":"within","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1568,"word":"without","headwords":["without"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1568,"sourceLetter":"W","sourceRaw":"without","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1569,"word":"wolf","headwords":["wolf"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1569,"sourceLetter":"W","sourceRaw":"wolf (pl. wolves)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. wolves"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母W","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1570,"word":"woman","headwords":["woman"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1570,"sourceLetter":"W","sourceRaw":"woman (pl. women)","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":["pl. women"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母W","二级词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1571,"word":"wonder","headwords":["wonder"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1571,"sourceLetter":"W","sourceRaw":"wonder","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1572,"word":"wonderful","headwords":["wonderful"],"phonetic":"/ˈwʌndərfl/","translation":"精彩的","pos":"adj.","grade":null,"semester":null,"unit":null,"examples":[{"en":"We had a wonderful time.","cn":"我们玩得很开心。"}],"source":"1600单词备用.txt","sourceIndex":1572,"sourceLetter":"W","sourceRaw":"wonderful","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"merged-existing-enrichment"},
  {"id":1573,"word":"wood","headwords":["wood"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1573,"sourceLetter":"W","sourceRaw":"wood","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1574,"word":"word","headwords":["word"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1574,"sourceLetter":"W","sourceRaw":"word","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1575,"word":"work","headwords":["work"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1575,"sourceLetter":"W","sourceRaw":"work","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1576,"word":"worker","headwords":["worker"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1576,"sourceLetter":"W","sourceRaw":"worker","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1577,"word":"world","headwords":["world"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1577,"sourceLetter":"W","sourceRaw":"world","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1578,"word":"worry","headwords":["worry"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1578,"sourceLetter":"W","sourceRaw":"worry","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1579,"word":"worse","headwords":["worse"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1579,"sourceLetter":"W","sourceRaw":"worse","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1580,"word":"worst","headwords":["worst"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1580,"sourceLetter":"W","sourceRaw":"worst","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1581,"word":"worth","headwords":["worth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1581,"sourceLetter":"W","sourceRaw":"worth","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1582,"word":"would","headwords":["would"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1582,"sourceLetter":"W","sourceRaw":"would","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1583,"word":"wound","headwords":["wound"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1583,"sourceLetter":"W","sourceRaw":"wound","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1584,"word":"write","headwords":["write"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1584,"sourceLetter":"W","sourceRaw":"write","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1585,"word":"wrong","headwords":["wrong"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1585,"sourceLetter":"W","sourceRaw":"wrong","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母W","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1586,"word":"X-ray","headwords":["X-ray"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1586,"sourceLetter":"X","sourceRaw":"X-ray","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母X","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1587,"word":"yard","headwords":["yard"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1587,"sourceLetter":"Y","sourceRaw":"yard","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1588,"word":"year","headwords":["year"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1588,"sourceLetter":"Y","sourceRaw":"year","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1589,"word":"yellow","headwords":["yellow"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1589,"sourceLetter":"Y","sourceRaw":"yellow","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1590,"word":"yes","headwords":["yes"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1590,"sourceLetter":"Y","sourceRaw":"yes","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1591,"word":"yesterday","headwords":["yesterday"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1591,"sourceLetter":"Y","sourceRaw":"yesterday","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1592,"word":"yet","headwords":["yet"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1592,"sourceLetter":"Y","sourceRaw":"yet","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1593,"word":"yogurt","headwords":["yogurt"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1593,"sourceLetter":"Y","sourceRaw":"yogurt","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1594,"word":"you","headwords":["you"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1594,"sourceLetter":"Y","sourceRaw":"you","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1595,"word":"young","headwords":["young"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1595,"sourceLetter":"Y","sourceRaw":"young","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1596,"word":"your","headwords":["your"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1596,"sourceLetter":"Y","sourceRaw":"your","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","二级词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1597,"word":"yours","headwords":["yours"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1597,"sourceLetter":"Y","sourceRaw":"yours","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1598,"word":"yourself","headwords":["yourself"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1598,"sourceLetter":"Y","sourceRaw":"yourself (pl. yourselves)","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":["pl. yourselves"],"sourceNoteTypes":["复数特殊变化"],"tags":["课标1600","首字母Y","基本词汇","含括号说明"],"verifyStatus":"needs-enrichment"},
  {"id":1599,"word":"youth","headwords":["youth"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1599,"sourceLetter":"Y","sourceRaw":"youth","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Y","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1600,"word":"zero","headwords":["zero"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1600,"sourceLetter":"Z","sourceRaw":"zero","curriculumLevel":"基本词汇","isSecondaryVocabulary":false,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Z","基本词汇"],"verifyStatus":"needs-enrichment"},
  {"id":1601,"word":"zoo","headwords":["zoo"],"phonetic":"","translation":"","pos":"","grade":null,"semester":null,"unit":null,"examples":[],"source":"1600单词备用.txt","sourceIndex":1601,"sourceLetter":"Z","sourceRaw":"zoo","curriculumLevel":"二级词汇","isSecondaryVocabulary":true,"sourceNotes":[],"sourceNoteTypes":[],"tags":["课标1600","首字母Z","二级词汇"],"verifyStatus":"needs-enrichment"}
]

const BASIC_TRANSLATION_TSV = `
a	一；一个
ability	能力
able	能够的
about	关于；大约
above	在……上方
abroad	在国外；到国外
absent	缺席的
accept	接受
accident	事故；意外
according	根据
account	账户；叙述
ache	疼痛
achieve	实现；达到
across	穿过；在对面
act	行动；表演
action	行动；行为
active	积极的；活跃的
activity	活动
actor	演员
actually	实际上
ad	广告
add	增加；添加
admire	钦佩；欣赏
adult	成年人
advantage	优点；优势
advice	建议
advise	建议
afford	负担得起
after	在……之后
again	再次
against	反对；倚着
age	年龄
ago	以前
agree	同意
ahead	在前面
AI	人工智能
aid	帮助；援助
aim	目标；旨在
air	空气
airport	机场
alarm	警报；闹钟
alive	活着的
all	全部；所有
allow	允许
almost	几乎
alone	独自；单独
along	沿着
aloud	大声地
already	已经
also	也
always	总是
a.m.	上午
amazing	令人惊奇的
among	在……之中
ancient	古代的
and	和；并且
angry	生气的
animal	动物
another	另一个
answer	回答；答案
ant	蚂蚁
any	任何；一些
anybody	任何人
anything	任何事物
anyway	无论如何
anywhere	任何地方
apartment	公寓
app	应用程序
apple	苹果
area	区域；面积
argue	争论
arm	手臂
army	军队
around	在周围；大约
arrive	到达
art	艺术
article	文章；物品
artist	艺术家
as	作为；像……一样
ask	问；请求
asleep	睡着的
astronaut	宇航员
at	在
athlete	运动员
attack	攻击
attention	注意；关注
aunt	姑母；姨母
autumn	秋天
average	平均的；平均数
avoid	避免
awake	醒着的
award	奖；授予
aware	意识到的
away	离开
awful	糟糕的
baby	婴儿
back	背部；回来
bad	坏的；差的
badminton	羽毛球
bag	包；袋
balance	平衡
ball	球
balloon	气球
bamboo	竹子
band	乐队；带子
bank	银行；岸
basic	基本的
basket	篮子
bat	球拍；蝙蝠
bath	洗澡；浴缸
bathroom	浴室；卫生间
be	是；成为
beach	海滩
bean	豆
bear	熊；忍受
beat	打败；敲打
beautiful	美丽的
because	因为
become	变成
bedroom	卧室
bee	蜜蜂
beef	牛肉
before	在……以前
begin	开始
behind	在……后面
bell	铃；钟
below	在……下面
belt	腰带
benefit	好处；受益
beside	在……旁边
best	最好的
better	更好的
big	大的
bike	自行车
bill	账单；钞票
bin	垃圾箱
biology	生物学
bird	鸟
birth	出生
biscuit	饼干
bit	一点；小块
black	黑色；黑的
blackboard	黑板
bleed	流血
blind	失明的；盲的
block	街区；阻塞
blood	血液
blouse	女衬衫
blow	吹；刮
blue	蓝色；蓝的
board	板；登上
boat	船
body	身体
boil	煮沸
book	书；预订
born	出生的
borrow	借入
boss	老板
both	两者都
bottle	瓶子
bottom	底部
bowl	碗
box	盒子；箱子
boy	男孩
brain	大脑
brave	勇敢的
bread	面包
break	打破；休息
breath	呼吸
bridge	桥
bright	明亮的；聪明的
bring	带来
brown	棕色；棕色的
brush	刷子；刷
budget	预算
build	建造
building	建筑物
bully	欺凌；欺凌者
burn	燃烧；烧伤
bus	公共汽车
business	商业；生意
busy	忙碌的
but	但是
butter	黄油
butterfly	蝴蝶
buy	买
by	由；在旁边
cabbage	卷心菜
cake	蛋糕
calendar	日历
call	打电话；称呼
calm	平静的；使平静
camera	照相机
camp	营地；露营
can	能够；可以
cancer	癌症
candle	蜡烛
candy	糖果
cap	帽子
capital	首都；资本
car	汽车
card	卡片
care	关心；照顾
careful	仔细的
careless	粗心的
carrot	胡萝卜
carry	携带
cartoon	动画片；漫画
case	情况；盒子
cash	现金
cat	猫
catch	抓住；赶上
cause	原因；导致
celebrate	庆祝
cent	分；美分
central	中心的
centre	中心
century	世纪
certain	确定的；某个
chalk	粉笔
champion	冠军
chance	机会
change	改变；零钱
character	人物；性格；字符
characteristic	特征
charity	慈善
chat	聊天
cheap	便宜的
cheat	作弊；欺骗
check	检查
cheer	欢呼；鼓励
cheese	奶酪
chemistry	化学
chess	国际象棋
child	孩子
China	中国
Chinese	中文；中国人；中国的
chip	薯条；芯片
chocolate	巧克力
choice	选择
chopsticks	筷子
chore	家务
Christmas	圣诞节
cinema	电影院
circle	圆；圈
citizen	公民
city	城市
class	班级；课
classic	经典的；经典作品
classmate	同班同学
clean	干净的；打扫
clear	清楚的；清除
clever	聪明的
click	点击
climate	气候
climb	爬
clock	钟
close	关闭；亲密的
clothes	衣服
cloud	云
club	俱乐部
coach	教练
coast	海岸
coat	外套
coffee	咖啡
coin	硬币
collect	收集
college	大学；学院
colour	颜色
come	来
common	普通的；共同的
communicate	交流
company	公司；陪伴
compare	比较
compete	竞争；比赛
complete	完成；完整的
computer	电脑
concert	音乐会
condition	条件；状况
confidence	信心
congratulation	祝贺
connect	连接
consider	考虑
continue	继续
control	控制
cookie	曲奇饼
cool	凉爽的；酷的
cooperate	合作
copy	复制；副本
corn	玉米
corner	角落
correct	正确的；改正
cost	花费；费用
cotton	棉花
cough	咳嗽
could	能够；可以（过去式）
count	数数；计算
country	国家；乡村
countryside	乡村
couple	一对；夫妻
courage	勇气
course	课程；过程
cousin	堂/表兄弟姐妹
cover	覆盖；封面
cow	奶牛
crazy	疯狂的
create	创造
cross	穿过；十字形
crowded	拥挤的
cry	哭；喊叫
cucumber	黄瓜
cup	杯子
curious	好奇的
customer	顾客
cut	切；割
cute	可爱的
daily	每日的；日常的
dark	黑暗的；深色的
date	日期；约会
daughter	女儿
day	一天；白天
dead	死的
deaf	聋的
deal	处理；交易
dear	亲爱的；昂贵的
death	死亡
deep	深的
degree	度；程度；学位
delicious	美味的
dentist	牙医
depend	依靠；取决于
describe	描述
desert	沙漠
design	设计
desk	书桌
develop	发展；开发
dialogue	对话
diary	日记
die	死亡
diet	饮食
difference	差异
different	不同的
dig	挖
digital	数字的
dining	用餐
dinner	晚餐；正餐
direct	直接的；指导
director	导演；负责人
dirty	脏的
disaster	灾难
discover	发现
discuss	讨论
disease	疾病
dish	盘子；菜肴
divide	分开；划分
do	做
doctor	医生
dog	狗
doll	玩偶
donate	捐赠
door	门
double	两倍的；双的
doubt	怀疑
down	向下
download	下载
dragon	龙
drama	戏剧
dream	梦；梦想
dress	连衣裙；穿衣
drink	喝；饮料
drive	驾驶
driver	司机
drop	掉落；滴
dry	干的；弄干
duck	鸭子
dumpling	饺子
during	在……期间
duty	职责；值日
each	每个；各自
eagle	鹰
ear	耳朵
earth	地球；土地
earthquake	地震
east	东方；东部
easy	容易的
eat	吃
education	教育
effect	影响；效果
effort	努力
egg	鸡蛋
either	两者之一；也
elder	年长的
electric	电的
electronic	电子的
else	别的；其他的
email	电子邮件
emergency	紧急情况
emperor	皇帝
empty	空的
encourage	鼓励
end	结束；末端
enemy	敌人
energetic	精力充沛的
English	英语；英国的
enjoy	享受；喜欢
enter	进入
era	时代
especially	尤其
even	甚至；平坦的
event	事件；活动
ever	曾经
every	每个
everybody	每个人
everyday	日常的
everything	每件事
everywhere	到处
exactly	确切地；正是
exam	考试
example	例子
excellent	优秀的
except	除……之外
excited	兴奋的
exciting	令人兴奋的
excuse	原谅；借口
expensive	昂贵的
expert	专家
explain	解释
explore	探索
express	表达；快递的
eye	眼睛
face	脸；面对
fact	事实
factory	工厂
fail	失败；未能
fair	公平的；集市
fall	落下；秋天
false	错误的；假的
familiar	熟悉的
famous	著名的
fan	粉丝；扇子
fantastic	极好的
far	远的；远地
farm	农场
farmer	农民
fashion	时尚
fast	快的；快地
fat	胖的；脂肪
favourite	最喜欢的
fear	害怕；恐惧
feed	喂养
feel	感觉
feeling	感觉；情感
festival	节日
fever	发烧
few	少数；几个
field	田野；领域
fight	打架；战斗
fill	填满
film	电影；胶片
final	最后的；决赛
find	找到；发现
finger	手指
finish	完成
fire	火；开火
fireman	消防员
firework	烟花
fish	鱼；钓鱼
fit	适合；健康的
fix	修理；固定
flag	旗帜
flat	公寓；平的
flood	洪水
floor	地板；楼层
flower	花
flu	流感
fly	飞；苍蝇
focus	集中；焦点
fog	雾
folk	民间的；人们
follow	跟随；遵守
food	食物
fool	傻瓜；愚弄
foot	脚；英尺
football	足球
for	为了；对于
force	力量；迫使
foreign	外国的
forest	森林
forever	永远
forget	忘记
fork	叉子
form	形式；表格
forward	向前
found	建立；发现的过去式
fox	狐狸
free	免费的；自由的
freeze	结冰；冻结
fresh	新鲜的
fridge	冰箱
friend	朋友
friendly	友好的
from	来自；从
front	前面
fruit	水果
full	满的；饱的
fun	乐趣
funny	有趣的；滑稽的
game	游戏；比赛
garden	花园
gas	气体；汽油
gate	大门
general	一般的；将军
gentleman	先生；绅士
get	得到；到达
gift	礼物
giraffe	长颈鹿
girl	女孩
give	给
glad	高兴的
glass	玻璃；杯子
glove	手套
glue	胶水
go	去
goal	目标；球门
god	神
gold	金子；金色
good	好的
government	政府
grade	年级；等级
graduate	毕业；毕业生
grammar	语法
grape	葡萄
grass	草
great	伟大的；很棒的
green	绿色；绿色的
greet	问候
grey	灰色；灰色的
ground	地面
group	小组；群体
grow	成长；种植
guard	守卫；警卫
guess	猜测
guest	客人
guide	导游；指导
gun	枪
gym	体育馆；健身房
habit	习惯
hair	头发
half	一半
hall	大厅
hamburger	汉堡包
hand	手；递给
handsome	英俊的
hang	悬挂
happen	发生
happy	高兴的
hard	困难的；努力地
harm	伤害
hate	讨厌
have	有；吃；经历
he	他
head	头；负责人
health	健康
hear	听见
heart	心；心脏
heat	热；加热
heavy	重的
height	高度；身高
help	帮助
helpful	有帮助的
hen	母鸡
her	她；她的
here	这里
hero	英雄
hers	她的
herself	她自己
hi	嗨
hide	隐藏
high	高的；高地
hike	远足
hill	小山
him	他
himself	他自己
his	他的
hit	击打；撞击
hobby	爱好
hold	握住；举行
hole	洞
holiday	假期
home	家
hometown	家乡
homework	家庭作业
honest	诚实的
honey	蜂蜜
honour	荣誉
hope	希望
horse	马
hospital	医院
host	主持人；主人
hot	热的；辣的
hotel	旅馆
hour	小时
house	房子
housework	家务
however	然而
hug	拥抱
huge	巨大的
human	人类；人的
humour	幽默
hunt	打猎；搜寻
hurry	匆忙
hurt	伤害；疼痛
husband	丈夫
I	我
ice	冰
ice cream	冰淇淋
idea	主意；想法
if	如果；是否
ill	生病的
illness	疾病
imagine	想象
important	重要的
impossible	不可能的
in	在……里面
include	包括
increase	增加
industry	工业；产业
influence	影响
information	信息
insect	昆虫
inside	在里面；里面
instead	代替；反而
instruction	指示；说明
instrument	乐器；工具
interest	兴趣；使感兴趣
Internet	互联网
interview	采访；面试
into	进入；到……里面
introduce	介绍
island	岛
it	它
its	它的
itself	它自己
jacket	夹克衫
jeans	牛仔裤
job	工作
jog	慢跑
join	加入
joke	笑话；开玩笑
journey	旅行
joy	快乐
judge	判断；法官
juice	果汁
jump	跳
junior	初级的；年少的
just	刚刚；仅仅
keep	保持；保留
key	钥匙；关键
keyboard	键盘
kick	踢
kid	孩子
kill	杀死
kilo	千克
kilometre	千米
kind	种类；友好的
king	国王
kiss	亲吻
kitchen	厨房
kite	风筝
knee	膝盖
knife	刀
knock	敲；撞
knowledge	知识
kung fu	功夫
lab	实验室
lady	女士
lake	湖
lamp	灯
land	陆地；降落
landscape	风景
language	语言
lantern	灯笼
laptop	笔记本电脑
large	大的
late	迟的；晚的
later	后来；以后
laugh	笑
law	法律
lawyer	律师
lay	放置；下蛋
lazy	懒惰的
lead	带领；铅
leaf	叶子
learn	学习
least	最少的
leave	离开；留下
left	左边；离开的
leg	腿
lemon	柠檬
lend	借出
less	更少的
lesson	课；教训
let	让
letter	信；字母
level	水平；级别
lie	躺；说谎
life	生命；生活
lift	电梯；举起
light	光；轻的
lightning	闪电
like	喜欢；像
likely	可能的
line	线；排
list	清单
listen	听
literature	文学
litter	垃圾
little	小的；少的
live	生活；居住
lively	活泼的
local	当地的
lock	锁；锁上
lonely	孤独的
long	长的
look	看；看起来
lose	失去；输掉
loss	损失
lost	丢失的；迷路的
lot	许多；大量
loud	大声的
love	爱；喜爱
lovely	可爱的
low	低的
luck	运气
machine	机器
mad	发疯的；生气的
madam	女士
magazine	杂志
magic	魔法；神奇的
main	主要的
make	制作；使得
mall	商场
man	男人；人类
manner	方式；礼貌
many	许多
map	地图
mark	标记；分数
market	市场
marry	结婚
master	掌握；主人
match	比赛；火柴；相配
maths	数学
matter	事情；要紧
may	可以；可能
maybe	也许
me	我
meal	一餐
mean	意思是；意味着
meaning	意思；意义
meat	肉
medal	奖牌
medical	医学的
medicine	药；医学
medium	中等的；媒介
meeting	会议
member	成员
menu	菜单
mess	杂乱
message	消息
method	方法
metre	米
middle	中间；中等的
might	可能；可以
mile	英里
milk	牛奶
mind	介意；头脑
mine	我的
minute	分钟
mirror	镜子
miss	想念；错过
Miss	小姐
mistake	错误
mix	混合
mobile	移动的；手机
model	模型；模特
modern	现代的
moment	片刻
money	钱
monkey	猴子
month	月
moon	月亮
more	更多
most	最多；大多数
mountain	山
mouse	老鼠；鼠标
mouth	嘴
move	移动；搬家
movie	电影
Mr	先生
Mrs	夫人
Ms	女士
much	许多；非常
museum	博物馆
music	音乐
must	必须
mutton	羊肉
my	我的
myself	我自己
narrow	狭窄的
nation	国家；民族
nature	自然；本性
near	在附近；近的
nearly	几乎
necessary	必要的
neck	脖子
need	需要
negative	消极的；否定的
neighbour	邻居
neither	两者都不
nervous	紧张的
new	新的
newspaper	报纸
next	下一个；接下来
night	夜晚
no	不；没有
nobody	没有人
nod	点头
noise	噪音
none	没有一个
noodle	面条
noon	中午
nor	也不
normal	正常的
north	北方
nose	鼻子
not	不
note	笔记；便条
nothing	没有什么
notice	注意；通知
novel	小说；新颖的
now	现在
nurse	护士
object	物体；反对
ocean	海洋
o'clock	……点钟
of	……的
off	离开；关闭
offer	提供；提议
office	办公室
officer	官员；军官
often	经常
oil	油
OK	好的
old	旧的；年老的
Olympic	奥林匹克的
on	在……上；开启
once	一次；曾经
onion	洋葱
online	在线的
only	仅仅；唯一的
open	打开；开放的
opera	歌剧
operate	操作；做手术
opinion	意见
opposite	相反的；在对面
or	或者；否则
order	命令；点餐；顺序
organise	组织
other	其他的
our	我们的
ours	我们的
ourselves	我们自己
out	在外；出去
outside	外面；在外面
oven	烤箱
over	在……上方；结束
own	自己的；拥有
pack	打包；一包
packet	小包
page	页
pain	疼痛
paint	绘画；油漆
pair	一双；一对
palace	宫殿
pale	苍白的
pancake	薄饼
paper	纸；论文
paragraph	段落
pardon	原谅；请再说一遍
park	公园；停车
part	部分
party	聚会；政党
pass	通过；传递
passage	短文；通道
passenger	乘客
passport	护照
past	过去；经过
pay	支付
PE	体育
peace	和平
pear	梨
pen	钢笔
penguin	企鹅
people	人们
pepper	胡椒；辣椒
per cent	百分之……
perfect	完美的
perform	表演；执行
perhaps	也许
period	时期；课时
person	人
personal	个人的
pet	宠物
physics	物理
piano	钢琴
pick	捡起；挑选
picnic	野餐
picture	图片；照片
pie	馅饼
piece	一片；一块
pig	猪
pill	药片
pilot	飞行员
pink	粉色；粉色的
pioneer	先锋
pity	遗憾；同情
pizza	比萨饼
place	地方；放置
plan	计划
plane	飞机
planet	行星
plant	植物；种植
plastic	塑料；塑料的
plate	盘子
play	玩；播放；戏剧
playground	操场
please	请；使高兴
pleasure	快乐；荣幸
p.m.	下午
pocket	口袋
poem	诗
poet	诗人
point	点；指向
police	警察
policeman	男警察
policemen	警察（复数）
polite	有礼貌的
pollute	污染
pool	池塘；游泳池
poor	贫穷的；可怜的
popular	受欢迎的
population	人口
pork	猪肉
porridge	粥
position	位置；职位
positive	积极的；肯定的
possible	可能的
post	邮寄；岗位
postcard	明信片
postman	邮递员
pot	锅；罐
potato	土豆
pound	英镑；磅
power	力量；电力
practice	练习
praise	表扬
present	礼物；现在；出席的
president	总统；主席
press	按；压；新闻界
pressure	压力
pretty	漂亮的；相当
pride	骄傲
primary	主要的；初级的
prince	王子
print	打印；印刷
private	私人的
problem	问题
product	产品
programme	节目；项目
progress	进步
project	项目；工程
proper	合适的；恰当的
protect	保护
prove	证明
provide	提供
public	公共的；公众
publish	出版；发布
pull	拉
punish	惩罚
purple	紫色；紫色的
purpose	目的
push	推
put	放
quality	质量；品质
quarter	四分之一；一刻钟
queen	女王
question	问题
quick	快的
quite	相当；十分
rabbit	兔子
race	比赛；种族
railway	铁路
rain	雨；下雨
rainbow	彩虹
raise	举起；筹集；饲养
rapid	快速的
rather	相当；宁愿
reach	到达；伸手够到
read	读
real	真实的
realise	意识到；实现
really	真正地；非常
reason	原因；理由
receive	收到
recent	最近的
recognise	认出；承认
recommend	推荐
record	记录；唱片
red	红色；红的
reduce	减少
regret	后悔；遗憾
relationship	关系
remain	保持；剩下
remind	提醒
repair	修理
repeat	重复
reply	回复
report	报告
require	需要；要求
research	研究
respect	尊重
responsible	负责的
rest	休息；剩余部分
restaurant	餐馆
result	结果
return	返回；归还
review	复习；评论
rice	米饭；大米
rich	富有的；丰富的
ride	骑；乘坐
right	正确的；右边
ring	戒指；响铃
rise	上升
risk	风险；冒险
river	河流
road	道路
robot	机器人
rock	岩石；摇滚乐
rocket	火箭
role	角色；作用
rope	绳子
rose	玫瑰；上升的过去式
round	圆的；轮次
row	排；划船
rubbish	垃圾
rule	规则；统治
ruler	尺子
run	跑；经营
rush	冲；匆忙
sad	悲伤的
safe	安全的
salad	沙拉
sale	出售；减价
salt	盐
same	相同的
sand	沙子
sandwich	三明治
satisfy	使满意
save	拯救；节省；保存
say	说
scare	使害怕
scarf	围巾
school	学校
scientist	科学家
scissors	剪刀
score	得分；分数
screen	屏幕
sea	海
search	搜索
season	季节
seat	座位
secret	秘密
see	看见
seem	似乎
seldom	很少
sell	卖
send	发送；寄
sense	感觉；意义
separate	分开的；分离
serve	服务；端上
service	服务
set	设置；一套
several	几个
shall	将；应该
shame	羞愧；遗憾
shape	形状
share	分享
shark	鲨鱼
she	她
sheep	羊
shelf	架子
shine	照耀
ship	船
shirt	衬衫
shock	震惊
shoe	鞋
shoot	射击；拍摄
shop	商店；购物
short	短的；矮的
shorts	短裤
should	应该
shoulder	肩膀
shout	喊叫
show	展示；节目
shower	淋浴；阵雨
shut	关闭
shy	害羞的
sick	生病的
side	边；侧面
sign	标志；签名
silk	丝绸
silly	愚蠢的
silver	银；银色
similar	相似的
simple	简单的
since	自从；因为
sing	唱歌
single	单一的；单身的
sir	先生
sit	坐
situation	情况
size	尺寸；大小
skate	滑冰
ski	滑雪
skill	技能
skirt	裙子
sky	天空
sleep	睡觉
slim	苗条的
slow	慢的
small	小的
smart	聪明的；智能的
smell	闻；气味
smile	微笑
smoke	烟；吸烟
snack	小吃
snake	蛇
snow	雪；下雪
so	所以；如此
social	社会的
socialism	社会主义
society	社会
soft	柔软的
soil	土壤
soldier	士兵
some	一些
somebody	某人
something	某事；某物
somewhere	某处
son	儿子
song	歌曲
soon	很快
sore	疼痛的
sorry	抱歉的
sound	声音；听起来
soup	汤
south	南方
space	空间；太空
spare	空闲的；备用的
special	特别的
speech	演讲
speed	速度
spell	拼写
spend	花费；度过
spirit	精神
spoon	勺子
sport	运动
spring	春天；弹簧
square	广场；正方形
stage	舞台；阶段
stamp	邮票；盖章
stand	站立；忍受
standard	标准
star	星星；明星
start	开始
state	状态；国家；陈述
station	车站
stay	停留；保持
step	步骤；脚步
stick	棍；粘贴
still	仍然；安静的
stomach	胃
stone	石头
stop	停止；车站
store	商店；储存
storm	暴风雨
straight	直的；笔直地
strange	奇怪的
street	街道
stress	压力；强调
strict	严格的
strong	强壮的
student	学生
study	学习；研究
style	风格
subject	学科；主题
succeed	成功
success	成功
such	这样的
sudden	突然的
suffer	遭受
sugar	糖
suit	套装；适合
summer	夏天
sun	太阳
supermarket	超市
sure	确信的
surface	表面
surprise	惊喜；使惊讶
survey	调查
survive	幸存
sweep	打扫；扫
sweet	甜的；糖果
symbol	象征；符号
tail	尾巴
take	拿；带走；花费
talent	天赋
talk	谈话
tall	高的
tap	水龙头；轻敲
tape	磁带；胶带
task	任务
taste	味道；品尝
taxi	出租车
tea	茶
teach	教
teacher	老师
team	队；团队
teamwork	团队合作
technology	技术
teenage	青少年的
tell	告诉
tent	帐篷
term	学期；术语
terrible	糟糕的
test	测试；考试
text	文本；课文
than	比
thank	感谢
that	那个；那
the	这；那（定冠词）
theatre	剧院
their	他们的
theirs	他们的
them	他们
themselves	他们自己
then	然后；那时
there	那里
therefore	因此
they	他们
thick	厚的
thin	薄的；瘦的
thing	事情；东西
think	想；认为
thirsty	口渴的
this	这个
those	那些
though	虽然；不过
thought	想法；认为的过去式
throat	喉咙
through	穿过；通过
throw	扔
thunder	雷声
thicket	灌木丛
tidy	整洁的；整理
tie	领带；系
tiger	老虎
time	时间；次数
tiny	极小的
tired	疲劳的
to	到；向
today	今天
tofu	豆腐
together	一起
toilet	厕所
tomato	西红柿
tomorrow	明天
ton	吨
tonight	今晚
too	也；太
tool	工具
tooth	牙齿
top	顶部；顶端的
total	总的；总数
touch	触摸
tour	旅行；参观
tourist	游客
towards	朝；向
tower	塔
town	城镇
toy	玩具
trade	贸易
tradition	传统
traffic	交通
training	训练
translate	翻译
travel	旅行
treasure	宝藏；珍惜
treat	对待；治疗
tree	树
trip	旅行
trouble	麻烦
truck	卡车
true	真实的
trust	信任
truth	真相
try	尝试
T-shirt	T恤衫
turn	转动；轮到
TV	电视
ugly	丑陋的
umbrella	雨伞
uncle	叔叔；舅舅
under	在……下面
underground	地下的；地铁
understand	理解
uniform	制服
unit	单元；单位
universe	宇宙
university	大学
unless	除非
until	直到
up	向上
upon	在……上
us	我们
use	使用
usual	通常的
value	价值
very	非常
victory	胜利
video	视频；录像
view	看法；景色
village	村庄
violin	小提琴
virus	病毒
visit	参观；拜访
voice	声音
voluntary	自愿的
volunteer	志愿者；自愿
vote	投票
wait	等待
wake	醒来；叫醒
walk	走路；散步
wall	墙
wallet	钱包
want	想要
war	战争
warn	警告
wash	洗
waste	浪费；废物
watch	观看；手表
water	水；浇水
watermelon	西瓜
wave	挥手；波浪
way	方法；道路
we	我们
weak	虚弱的；薄弱的
wealth	财富
wear	穿；戴
website	网站
week	星期；周
weekday	工作日
weekend	周末
weigh	称重；重达
weight	重量
welcome	欢迎
well	好地；井
west	西方
wet	湿的
whale	鲸
what	什么
whatever	无论什么
wheel	轮子
when	什么时候；当……时
whenever	无论何时
whether	是否
which	哪一个
while	当……时；一会儿
white	白色；白的
who	谁
whole	整个的
whom	谁（宾格）
whose	谁的
why	为什么
wide	宽的
wife	妻子
wild	野生的；狂野的
will	将；意愿
win	赢
wind	风
window	窗户
wing	翅膀
winner	获胜者
winter	冬天
wise	明智的
wish	希望；祝愿
with	和；带有
within	在……之内
without	没有
wolf	狼
woman	女人
wonder	想知道；奇迹
wood	木头；树林
word	单词；话语
work	工作；运转
worker	工人
world	世界
worry	担心
worse	更糟的
worst	最糟的
worth	值得的
would	将会；愿意
wound	伤口；使受伤
write	写
wrong	错误的
X-ray	X光；X光片
yard	院子；码
year	年
yellow	黄色；黄色的
yes	是；对
yesterday	昨天
yet	还；仍然
yogurt	酸奶
you	你；你们
young	年轻的
your	你的；你们的
yours	你的；你们的
yourself	你自己
youth	青年；青春
zero	零
zoo	动物园
`.trim()

const BASIC_TRANSLATIONS = Object.fromEntries(BASIC_TRANSLATION_TSV.split('\n').map(line=>line.split('\t')))
const BASIC_VERB_WORDS=new Set('accept achieve act add admire advise afford agree aid aim allow answer argue arrive ask attack avoid awake award be bear beat become begin bleed blow boil borrow break bring brush build bully burn buy call calm camp can carry catch cause celebrate change chat cheat check cheer climb click close collect come communicate compare compete complete connect consider continue control cooperate copy correct cost cough could count cover create cross cry cut deal depend describe design develop die dig direct discover discuss divide do donate double doubt download dream dress drink drive drop eat encourage end enjoy enter excuse explain explore express face fail fall farm fear feed feel fight fill find finish fire fit fix flood fly focus follow fool force forget form found freeze get give glue go graduate greet grow guard guess guide hang happen harm hate have hear heat help hide hike hit hold honour hope host hug hunt hurry hurt imagine include increase influence interest interview introduce join joke judge jump keep kick kill kiss knock land laugh lay lead learn leave lend let lie lift like line list listen litter live lock look lose love make mark marry master match matter may mean meet might mind miss mix model move must need nod notice object offer open operate order organise own pack paint pardon park part pass pay pick place plan plant play please point pollute post practice praise press print protect prove provide publish pull punish push put question raise reach read realise receive recognise recommend record reduce regret remain remind repair repeat reply report require research respect return review ride ring rise risk rock round row rule run rush satisfy save say scare score screen search see seem sell send sense separate serve set shall shame shape share shine shock shoot shop should shout show shower shut sing sit skate ski sleep smell smile smoke snow sound spell spend stamp stand start state stay step stick stop store stress study succeed suffer suit surprise survive sweep take talk tap taste teach tell test thank think throw tidy tie touch tour trade train translate travel treat trust try turn use value video visit volunteer vote wait wake walk want warn wash waste watch water wave weigh welcome will win wish wonder work worry would wound write'.split(' '))
const BASIC_ADJ_WORDS=new Set('able absent active alive amazing ancient angry asleep average aware awful bad basic beautiful best better big black blind blue brave bright brown busy calm careful careless central certain cheap clean clear clever common complete cool correct crowded curious cute daily dark dead deaf dear deep delicious different digital dirty easy electric electronic elder empty energetic every everyday excellent excited exciting expensive fair false familiar famous fantastic far fast fat favourite few final fit flat foreign free fresh friendly full funny general glad good great green grey handsome happy hard helpful high honest hot huge human ill important impossible junior kind large late lazy least left less light likely little lively local lonely long lost loud lovely low mad main many medical medium middle mobile modern more most narrow near necessary negative nervous new next no normal old online open opposite other outside own pale perfect personal pink polite poor popular positive possible pretty primary private proper public purple quick rapid real recent red responsible rich right round sad safe same separate several short shy sick silly silver similar simple single slim slow small smart social soft sore sorry spare special square standard still straight strange strict strong such sudden sure sweet tall teenage terrible thick thin thirsty tidy tiny tired total true ugly underground usual voluntary weak welcome well west wet white whole wide wild wise wrong yellow young'.split(' '))
const BASIC_ADV_WORDS=new Set('actually abroad again ahead almost alone along aloud already also always anywhere away down especially even ever everywhere exactly far forever forward here however just later maybe nearly now often only out outside over perhaps quite rather really seldom so soon still then there therefore today together tonight too very well yesterday yet'.split(' '))
const BASIC_PRON_WORDS=new Set('all another any anybody anyone anything everybody everything he her hers herself him himself his I it its itself me mine my myself nobody none nothing our ours ourselves she somebody something that their theirs them themselves these they this those us we what whatever which who whom whose you your yours yourself'.split(' '))
const BASIC_PREP_WORDS=new Set('about above across after against among around as at before behind below beside by during for from in inside into near of off on out outside over through to towards under until up upon with within without'.split(' '))
const BASIC_CONJ_WORDS=new Set('and although because but either if neither nor or since than though unless until when whenever whether while'.split(' '))
const BASIC_DET_WORDS=new Set('a an the each every no some any all both many much more most other such another this that these those'.split(' '))
const BASIC_MODAL_WORDS=new Set('can could may might must shall should will would'.split(' '))
function inferBasicPos(word){
  const w=String(word||'').trim(),l=w.toLowerCase()
  if(BASIC_MODAL_WORDS.has(l))return'modal v.'
  if(BASIC_PRON_WORDS.has(w)||BASIC_PRON_WORDS.has(l))return'pron.'
  if(BASIC_DET_WORDS.has(l))return'det.'
  if(BASIC_PREP_WORDS.has(l))return'prep.'
  if(BASIC_CONJ_WORDS.has(l))return'conj.'
  if(BASIC_ADV_WORDS.has(l)||l.endsWith('ly'))return'adv.'
  if(BASIC_VERB_WORDS.has(l))return'v.'
  if(/(tion|sion|ment|ness|ity|ance|ence|er|or|ist|ship|hood|age|ism)$/.test(l))return'n.'
  if(BASIC_ADJ_WORDS.has(l)||/(able|ible|al|ful|ic|ive|less|ous|y)$/.test(l))return'adj.'
  if(/^[A-Z]{2,}$/.test(w)||l.includes(' '))return'n.'
  return'n.'
}
const VOCAB_EXAMPLE_OVERRIDES={
  'a':{en:'I have a book and an apple.',cn:'我有一本书和一个苹果。'},
  'an':{en:'She has an umbrella.',cn:'她有一把伞。'},
  'the':{en:'The sun is bright today.',cn:'今天太阳很明亮。'},
  'and':{en:'Tom and Lily are classmates.',cn:'汤姆和莉莉是同学。'},
  'or':{en:'Would you like tea or milk?',cn:'你想要茶还是牛奶？'},
  'but':{en:'I wanted to go out, but it rained.',cn:'我想出去，但是下雨了。'},
  'because':{en:'I stayed at home because I was ill.',cn:'我待在家里，因为我病了。'},
  'if':{en:'If it rains, we will stay inside.',cn:'如果下雨，我们就待在室内。'},
  'although':{en:'Although it was cold, we went out.',cn:'虽然天气很冷，我们还是出去了。'},
  'when':{en:'Call me when you arrive.',cn:'你到达时给我打电话。'},
  'while':{en:'She listened to music while she cooked.',cn:'她一边做饭一边听音乐。'},
  'about':{en:'We talked about the school trip.',cn:'我们谈论了学校旅行。'},
  'above':{en:'The plane flew above the clouds.',cn:'飞机在云层上方飞行。'},
  'across':{en:'They walked across the bridge.',cn:'他们走过了桥。'},
  'after':{en:'We played basketball after school.',cn:'放学后我们打篮球。'},
  'against':{en:'The team played against a strong team.',cn:'这支队伍和一支强队比赛。'},
  'among':{en:'She stood among her friends.',cn:'她站在朋友们中间。'},
  'around':{en:'We walked around the lake.',cn:'我们绕着湖走了一圈。'},
  'at':{en:'Meet me at the school gate.',cn:'在校门口见我。'},
  'before':{en:'Wash your hands before dinner.',cn:'晚饭前洗手。'},
  'behind':{en:'The ball is behind the door.',cn:'球在门后面。'},
  'below':{en:'The temperature is below zero.',cn:'温度在零度以下。'},
  'beside':{en:'She sat beside her mother.',cn:'她坐在妈妈旁边。'},
  'between':{en:'The shop is between the bank and the school.',cn:'商店在银行和学校之间。'},
  'by':{en:'He goes to school by bus.',cn:'他乘公共汽车去上学。'},
  'during':{en:'Please keep quiet during the test.',cn:'考试期间请保持安静。'},
  'for':{en:'This gift is for you.',cn:'这份礼物是给你的。'},
  'from':{en:'She comes from China.',cn:'她来自中国。'},
  'in':{en:'There is a map in the classroom.',cn:'教室里有一张地图。'},
  'inside':{en:'The keys are inside the box.',cn:'钥匙在盒子里面。'},
  'into':{en:'He walked into the room.',cn:'他走进了房间。'},
  'near':{en:'My home is near the park.',cn:'我家在公园附近。'},
  'of':{en:'This is a photo of my family.',cn:'这是我家人的一张照片。'},
  'off':{en:'Please turn off the light.',cn:'请关灯。'},
  'on':{en:'There is a book on the desk.',cn:'桌上有一本书。'},
  'over':{en:'The bird flew over the river.',cn:'鸟飞过了河。'},
  'through':{en:'Sunlight came through the window.',cn:'阳光透过窗户照进来。'},
  'to':{en:'We go to school every day.',cn:'我们每天去上学。'},
  'under':{en:'The cat is under the chair.',cn:'猫在椅子下面。'},
  'with':{en:'I went to the library with my friend.',cn:'我和朋友去了图书馆。'},
  'without':{en:'He left without saying goodbye.',cn:'他没有告别就离开了。'},
  'I':{en:'I like English.',cn:'我喜欢英语。'},
  'you':{en:'You can try again.',cn:'你可以再试一次。'},
  'he':{en:'He is my brother.',cn:'他是我的哥哥。'},
  'she':{en:'She is reading a book.',cn:'她正在读书。'},
  'it':{en:'It is a sunny day.',cn:'今天天气晴朗。'},
  'we':{en:'We study English together.',cn:'我们一起学英语。'},
  'they':{en:'They are playing football.',cn:'他们正在踢足球。'},
  'can':{en:'You can finish the work today.',cn:'你今天能完成这项工作。'},
  'could':{en:'Could you help me?',cn:'你能帮我吗？'},
  'may':{en:'May I come in?',cn:'我可以进来吗？'},
  'must':{en:'You must follow the rules.',cn:'你必须遵守规则。'},
  'should':{en:'You should drink more water.',cn:'你应该多喝水。'},
  'will':{en:'We will visit the museum tomorrow.',cn:'我们明天将参观博物馆。'},
  'would':{en:'Would you like some water?',cn:'你想喝点水吗？'},
  'a.m.':{en:'The meeting starts at 9 a.m.',cn:'会议上午九点开始。'},
  'p.m.':{en:'The class ends at 4 p.m.',cn:'这节课下午四点结束。'},
  'AI':{en:'AI can help people learn faster.',cn:'人工智能可以帮助人们学得更快。'},
  'app':{en:'This app helps me practise English.',cn:'这个应用帮助我练习英语。'},
  'ad':{en:'I saw an ad for a new book.',cn:'我看到了一则新书广告。'}
}
const INTRANSITIVE_EXAMPLE_VERBS=new Set('arrive appear be become begin come cry die fall fly go happen laugh live rise run seem sit sleep smile stand stay swim talk travel wait walk'.split(' '))
const FEELING_ADJ_WORDS=new Set('afraid angry asleep excited glad happy ill lonely mad nervous sad shy sick sorry surprised thirsty tired worried'.split(' '))
function firstCn(translation){return String(translation||'').split(/[；;，,、]/)[0]||'这个词'}
function cleanAdjCn(text){return String(text||'').replace(/的$/,'')}
function buildBasicVocabExample(v){
  const word=String(v.word||'').trim(),lower=word.toLowerCase(),cn=firstCn(v.translation),pos=String(v.pos||'')
  const override=VOCAB_EXAMPLE_OVERRIDES[word]||VOCAB_EXAMPLE_OVERRIDES[lower]
  if(override)return[override]
  if(pos.includes('modal'))return[{en:'You '+word+' try again.',cn:'你可以再试一次。'}]
  if(pos.includes('prep.'))return[{en:'The book is '+word+' the desk.',cn:'书在桌子附近。'}]
  if(pos.includes('conj.'))return[{en:'I like English '+word+' I practise it every day.',cn:'我喜欢英语，并且每天练习。'}]
  if(pos.includes('pron.'))return[{en:word.charAt(0).toUpperCase()+word.slice(1)+' can join the game.',cn:'他/她/它可以参加游戏。'}]
  if(pos.includes('adv.'))return[{en:'She answered the question '+word+'.',cn:'她'+cn+'回答了问题。'}]
  if(pos.includes('adj.')){
    if(FEELING_ADJ_WORDS.has(lower))return[{en:'She feels '+word+' today.',cn:'她今天感到'+cleanAdjCn(cn)+'。'}]
    return[{en:'The room is '+word+'.',cn:'这个房间很'+cleanAdjCn(cn)+'。'}]
  }
  if(pos.includes('v.')){
    if(INTRANSITIVE_EXAMPLE_VERBS.has(lower))return[{en:'They '+word+' after school.',cn:'他们放学后'+cn+'。'}]
    return[{en:'We should '+word+' it carefully.',cn:'我们应该认真'+cn+'它。'}]
  }
  const plural=/s$/.test(lower)&&!/ss$/.test(lower)
  return[{en:(plural?'These ':'This ')+word+(plural?' are':' is')+' useful.',cn:(plural?'这些':'这个')+cn+'很有用。'}]
}
VOCABULARY.forEach(v=>{
  if(!String(v.translation||'').trim()&&BASIC_TRANSLATIONS[v.word]){
    v.translation=BASIC_TRANSLATIONS[v.word]
    v.verifyStatus='basic-enrichment'
  }
  if(!String(v.pos||'').trim())v.pos=inferBasicPos(v.word)
  if(!(v.examples&&v.examples.length)&&String(v.translation||'').trim())v.examples=buildBasicVocabExample(v)
})
const SPECIAL_VOCAB_SUPPLEMENTS={
  numbers:[['one','一','I have one book.','我有一本书。'],['two','二','There are two apples on the table.','桌上有两个苹果。'],['three','三','Three students are reading.','三个学生正在读书。'],['four','四','The room has four windows.','这个房间有四扇窗。'],['five','五','Five children are playing outside.','五个孩子在外面玩。'],['six','六','School starts at six thirty.','学校六点半开始。'],['seven','七','I get up at seven.','我七点起床。'],['eight','八','There are eight chairs in the room.','房间里有八把椅子。'],['nine','九','The meeting begins at nine.','会议九点开始。'],['ten','十','Ten people joined the game.','十个人参加了比赛。'],['eleven','十一','Eleven boys are on the team.','队里有十一个男孩。'],['twelve','十二','There are twelve months in a year.','一年有十二个月。'],['thirteen','十三','She is thirteen years old.','她十三岁。'],['fourteen','十四','Fourteen students passed the test.','十四名学生通过了考试。'],['fifteen','十五','The lesson lasts fifteen minutes.','这节课持续十五分钟。'],['sixteen','十六','He wrote sixteen words.','他写了十六个单词。'],['seventeen','十七','Seventeen people came to the party.','十七个人来参加聚会。'],['eighteen','十八','She will be eighteen next year.','她明年十八岁。'],['nineteen','十九','Nineteen books are on the shelf.','书架上有十九本书。'],['twenty','二十','There are twenty students in the room.','房间里有二十名学生。'],['thirty','三十','The trip takes thirty minutes.','这趟行程需要三十分钟。'],['forty','四十','My father is forty years old.','我爸爸四十岁。'],['fifty','五十','There are fifty pages in the book.','这本书有五十页。'],['sixty','六十','An hour has sixty minutes.','一小时有六十分钟。'],['seventy','七十','Seventy visitors came today.','今天来了七十名游客。'],['eighty','八十','The bus can carry eighty people.','这辆公交车能载八十人。'],['ninety','九十','He scored ninety points.','他得了九十分。'],['hundred','百','There are one hundred students in the hall.','大厅里有一百名学生。'],['thousand','千','Thousands of people visited the city.','成千上万的人参观了这座城市。'],['million','百万','Millions of people use English.','数百万人使用英语。'],['first','第一','Today is my first day at school.','今天是我上学的第一天。'],['second','第二','He won second prize.','他获得了二等奖。'],['third','第三','The third question is easy.','第三个问题很简单。'],['fourth','第四','Our classroom is on the fourth floor.','我们的教室在四楼。'],['fifth','第五','May is the fifth month of the year.','五月是一年中的第五个月。'],['eighth','第八','The eighth lesson is about music.','第八课是关于音乐的。'],['ninth','第九','He lives on the ninth floor.','他住在九楼。'],['twelfth','第十二','December is the twelfth month.','十二月是第十二个月。'],['twentieth','第二十','This is the twentieth question.','这是第二十个问题。']],
  calendar:[['January','一月','January is cold in Beijing.','北京的一月很冷。'],['February','二月','The Spring Festival is often in February.','春节常在二月。'],['March','三月','School starts in March.','学校三月开学。'],['April','四月','We have a school trip in April.','我们四月有一次学校旅行。'],['May','五月','May is the fifth month of the year.','五月是一年中的第五个月。'],['June','六月','Children love June.','孩子们喜欢六月。'],['July','七月','July is in summer.','七月在夏天。'],['August','八月','We visited Shanghai in August.','我们八月去了上海。'],['September','九月','The new term begins in September.','新学期九月开始。'],['October','十月','National Day is in October.','国庆节在十月。'],['November','十一月','November comes before December.','十一月在十二月之前。'],['December','十二月','Christmas is in December.','圣诞节在十二月。'],['Monday','星期一','We have English on Monday.','我们星期一有英语课。'],['Tuesday','星期二','The meeting is on Tuesday.','会议在星期二。'],['Wednesday','星期三','Wednesday is in the middle of the week.','星期三在一周中间。'],['Thursday','星期四','We play basketball on Thursday.','我们星期四打篮球。'],['Friday','星期五','Friday is my favourite day.','星期五是我最喜欢的一天。'],['Saturday','星期六','I visit my grandparents on Saturday.','我星期六看望祖父母。'],['Sunday','星期日','Sunday is a good day to rest.','星期日是休息的好日子。']],
  countries:[['America','美国','He studied in America for two years.','他在美国学习了两年。'],['American','美国的；美国人','My American friend likes Chinese food.','我的美国朋友喜欢中国食物。'],['England','英格兰','London is in England.','伦敦在英格兰。'],['Britain','英国','Britain is an island country.','英国是一个岛国。'],['British','英国的；英国人','British English is different from American English.','英式英语和美式英语不同。'],['Canada','加拿大','Canada is north of America.','加拿大在美国北面。'],['Canadian','加拿大的；加拿大人','She has a Canadian teacher.','她有一位加拿大老师。'],['Australia','澳大利亚','Australia is famous for kangaroos.','澳大利亚以袋鼠闻名。'],['Australian','澳大利亚的；澳大利亚人','The Australian student speaks English.','那位澳大利亚学生说英语。'],['India','印度','India is in Asia.','印度在亚洲。'],['Indian','印度的；印度人','Indian food can be spicy.','印度食物可能很辣。'],['Japan','日本','Japan is near China.','日本在中国附近。'],['Japanese','日本的；日语；日本人','She is learning Japanese.','她正在学习日语。'],['France','法国','Paris is the capital of France.','巴黎是法国的首都。'],['French','法国的；法语；法国人','French is a beautiful language.','法语是一门美丽的语言。'],['Germany','德国','Germany is in Europe.','德国在欧洲。'],['German','德国的；德语；德国人','He can speak German.','他会说德语。'],['Russia','俄罗斯','Russia is a large country.','俄罗斯是一个很大的国家。'],['Russian','俄罗斯的；俄语；俄罗斯人','Russian is difficult for me.','俄语对我来说很难。']],
  festivals:[['Easter','复活节','Children often paint eggs at Easter.','孩子们常在复活节彩绘鸡蛋。'],['Halloween','万圣节前夜','Children wear costumes on Halloween.','孩子们在万圣节前夜穿服装。'],['Thanksgiving','感恩节','Families get together at Thanksgiving.','家人们在感恩节团聚。'],['Spring Festival','春节','We visit relatives during the Spring Festival.','春节期间我们走亲戚。'],['New Year','新年','We say Happy New Year in January.','我们在一月说新年快乐。']]
}
function addSupplementalVocab(word,translation,exampleEn,exampleCn,group){
  const lower=String(word).toLowerCase()
  const hasExact=VOCABULARY.some(v=>v.word===word||(v.headwords||[]).some(h=>String(h)===word))
  const hasLower=VOCABULARY.some(v=>v.word.toLowerCase()===lower||(v.headwords||[]).some(h=>String(h).toLowerCase()===lower))
  if(hasExact||(hasLower&&word===lower))return
  const id=VOCABULARY.reduce((max,v)=>Math.max(max,v.id||0),0)+1
  VOCABULARY.push({id,word,headwords:[word],phonetic:'',translation,pos:group==='numbers'?'num.':'n.',grade:null,semester:null,unit:null,examples:[{en:exampleEn,cn:exampleCn}],source:'专题补充',sourceIndex:null,sourceLetter:String(word).charAt(0).toUpperCase(),sourceRaw:word,curriculumLevel:'专题补充词汇',isSecondaryVocabulary:false,isSupplementalVocabulary:true,sourceNotes:[group],sourceNoteTypes:['专题分类'],tags:['专题补充',group],verifyStatus:'supplemental-special'})
}
Object.entries(SPECIAL_VOCAB_SUPPLEMENTS).forEach(([group,rows])=>rows.forEach(row=>addSupplementalVocab(row[0],row[1],row[2],row[3],group)))
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

