// ======================================================================
// 🔐 认证模块 — 登录门控 + 用户配置
// ======================================================================

// ---------- 用户配置 ----------
// 密码为 SHA-256 哈希。默认密码：
//   admin: 123456
//   学生  : english
// 管理员可在浏览器控制台运行 addUser() 添加新用户，或使用
//   generateHash('新密码') 生成哈希后手动填入下方数组。
const USERS = [
  { username: 'admin',   passwordHash: '37bd45d638c2d11c49c641d2e9c4f49f406caf3ee282743e0c800aa1ed68e2ee', role: 'admin',   displayName: '老师' },
  { username: 'xuruobing',   passwordHash: '2795f13848f1f4be21f06e0fd028ccd5f0dcbe69c07c8f47f347f088fd880adc', role: 'student', displayName: 'Xu Ruobing' },
  { username: 'xuruotong',   passwordHash: '4f1f91c6ff833a0df3d3ae09ffa07c7a4cd66bef2d53857332a9c5d679690a4d', role: 'student', displayName: 'Xu Ruotong' },
  { username: 'zhaoyuchen',   passwordHash: 'e18d8479a77bb9a98022a13ecbfb91b7a142f2e390aa433e735a7f2d50d5de75', role: 'student', displayName: 'Zhao Yuchen' },
  { username: 'panyibo',   passwordHash: 'fe1c45b026cec412ca906ef8921d90bc1248ef535632dc8198692fe148660d8e', role: 'student', displayName: 'Pan Yibo' },
  { username: 'xieshelly',   passwordHash: '1199f9cb2a5e9cbd5f2ab26eff4a129782e08ab6c0e34793401c6c07940143b4', role: 'student', displayName: 'Xie Shelly' },
  { username: 'geruofei',   passwordHash: 'c91aaf49f251714e01a97b4c82b92b0f9dad2e9650dda44b4a4b0fe4e23be0b1', role: 'student', displayName: 'Ge Ruofei' },
  { username: 'wangcoco',   passwordHash: '5a960ff4a583b66a5fe96f07390ed16a60835b56edc4013914b5c4a8a089a03a', role: 'student', displayName: 'Wang Coco' },
  // ↑ 发布前请修改默认密码并删掉不需要的账号
]

// ---------- 全局状态 ----------
let currentUser = null

// ---------- 会话管理 ----------
const SESSION_KEY = 'ezlangent_auth_session'

function loadSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      // 验证用户仍然在配置列表中
      const match = USERS.find(u => u.username === saved.username && u.role === saved.role)
      if (match) {
        currentUser = match
      }
    }
  } catch (e) { /* ignore */ }
}

function saveSession(user) {
  currentUser = user
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({
    username: user.username,
    role: user.role,
    displayName: user.displayName,
    loggedInAt: Date.now()
  }))
}

function clearSession() {
  currentUser = null
  sessionStorage.removeItem(SESSION_KEY)
}

// ---------- SHA-256（Web Crypto API）----------
async function sha256(message) {
  const enc = new TextEncoder().encode(message)
  const hashBuf = await crypto.subtle.digest('SHA-256', enc)
  const hashArr = Array.from(new Uint8Array(hashBuf))
  return hashArr.map(b => b.toString(16).padStart(2, '0')).join('')
}

// ---------- 登录 / 登出 ----------
async function login(username, password) {
  const user = USERS.find(u => u.username === username.trim())
  if (!user) return { ok: false, message: '用户名或密码错误' }

  const hash = await sha256(password)
  if (hash !== user.passwordHash) return { ok: false, message: '用户名或密码错误' }

  saveSession(user)
  return { ok: true, user }
}

function logout() {
  // 退出前检查是否有未完成测试
  if (typeof App !== 'undefined' && App.questions && App.questions.length > 0) {
    if (typeof exitQuiz === 'function') {
      exitQuiz(false)
    }
  }
  clearSession()
  // 刷新页面以完全清除 app 状态
  window.location.reload()
}

// ---------- 查询函数 ----------
function isLoggedIn() {
  return currentUser !== null
}

function isAdmin() {
  return currentUser !== null && currentUser.role === 'admin'
}

function getCurrentUser() {
  return currentUser
}

// ---------- 辅助工具（管理用）----------
// 在浏览器控制台运行 generateHash('密码') 生成新哈希
// 在浏览器控制台运行 addUser('username', '密码', '学生名', 'student') 快速添加用户
async function generateHash(password) {
  const hash = await sha256(password)
  console.log('SHA-256 哈希:', hash)
  return hash
}

async function addUser(username, password, displayName, role) {
  const hash = await sha256(password)
  const user = { username, passwordHash: hash, role: role || 'student', displayName: displayName || username }
  console.log('将以下配置复制到 auth.js 的 USERS 数组中：')
  console.log(JSON.stringify(user, null, 2) + ',')
  // 一并输出到浏览器，方便复制
  return user
}

// ---------- 显示登录界面 ----------
function showLogin() {
  const overlay = document.getElementById('login-overlay')
  if (overlay) overlay.classList.remove('d-none')
  const error = document.getElementById('login-error')
  if (error) error.textContent = ''
}

function hideLogin() {
  const overlay = document.getElementById('login-overlay')
  if (overlay) overlay.classList.add('d-none')
}

async function handleLogin() {
  const username = document.getElementById('login-username').value.trim()
  const password = document.getElementById('login-password').value.trim()
  const errorEl = document.getElementById('login-error')
  const btnEl = document.getElementById('login-btn')

  if (!username || !password) {
    errorEl.textContent = '请输入用户名和密码'
    return
  }

  btnEl.disabled = true
  btnEl.textContent = '登录中...'

  const result = await login(username, password)

  btnEl.disabled = false
  btnEl.textContent = '登录'

  if (result.ok) {
    hideLogin()
    if (typeof initApp === 'function') {
      initApp()
    }
  } else {
    errorEl.textContent = result.message
  }
}

function handleLogout() {
  if (confirm('确定要退出登录吗？')) {
    logout()
  }
}

// 登录框 Enter 键提交
function handleLoginKeydown(e) {
  if (e.key === 'Enter') {
    document.getElementById('login-btn').click()
  }
}

// ---------- 初始化：会话恢复 ----------
loadSession()
