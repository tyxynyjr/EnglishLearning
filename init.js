// ======================================================================
// 🚀 初始化模块 — 必须在最后加载
// ======================================================================

function initApp(){
  if(location.protocol==='file:'){
    document.getElementById('app').innerHTML='<div class="container text-center py-5"><div class="fs-1 mb-3"><i class="bi bi-exclamation-triangle text-warning"></i></div><h4>无法在本地文件模式下运行</h4><p class="text-secondary">请使用 HTTP 服务器打开此应用：</p><div class="text-start d-inline-block mx-auto"><p class="mb-2"><b>方法一：</b>运行项目目录下的 <code>start.cmd</code></p><p class="mb-2"><b>方法二：</b>在项目目录执行<br><code class="bg-light d-inline-block p-2 rounded">python -m http.server 8080</code><br>然后浏览器访问 <code>http://localhost:8080</code></p><p><b>方法三：</b>如果使用 VS Code，右键 index.html → 选择 "Open with Live Server"</p></div></div>'
    return
  }
  if(typeof isLoggedIn==='function'&&!isLoggedIn()){
    if(typeof showLogin==='function')showLogin()
    setTimeout(()=>document.getElementById('login-username')?.focus(),100)
    return
  }
  updateUserBadge()
  bindAppViewportHeight();ensureStorageSchema();migrateOldData();renderHome();renderIrregularVerbs();renderAdjComp();renderAdvComp();renderPronounTable();renderIndefinitePronouns();logStudyStart()
  setTimeout(()=>{const tb=document.getElementById('knowledge-toolbar');if(tb)document.documentElement.style.setProperty('--grammar-toolbar-height',tb.getBoundingClientRect().height+'px')},100)
  window.addEventListener('beforeunload',logStudyStop)
  const taking=document.getElementById('quiz-taking');if(taking)taking.addEventListener('click',handleQuizBlankClick)
  window.addEventListener('resize',()=>{const tb=document.getElementById('knowledge-toolbar');if(tb)document.documentElement.style.setProperty('--grammar-toolbar-height',tb.getBoundingClientRect().height+'px')})
  const stickyPairs=[['page-home','home-toolbar'],['page-knowledge','knowledge-toolbar'],['page-vocabulary','vocab-toolbar'],['page-quiz','quiz-toolbar'],['page-stats','stats-toolbar'],['page-errors','errors-toolbar']]
  stickyPairs.forEach(([pageId,toolbarId])=>{
    const page=document.getElementById(pageId);let tick=0
    if(!page)return
    page.addEventListener('scroll',()=>{
      cancelAnimationFrame(tick)
      tick=requestAnimationFrame(()=>{
        const el=document.getElementById(toolbarId)
        if(el){
          el.classList.toggle('stuck',page.scrollTop>0)
          if(toolbarId==='knowledge-toolbar')document.documentElement.style.setProperty('--grammar-toolbar-height',el.getBoundingClientRect().height+'px')
        }
      })
    },{passive:true})
  })
  if(typeof isAdmin==='function'&&isAdmin())renderAdminOverview()
}
document.addEventListener('DOMContentLoaded',initApp)
