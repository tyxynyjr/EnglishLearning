// ======================================================================
// 💾 数据 IO 模块 — 导出/导入/备份
// ======================================================================

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
  const manualMsg='已全选备份数据；如果微信不能粘贴，请在文本框内长按选择"拷贝/复制"。'
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
function exportData(){downloadBackup('manual',true)}
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
