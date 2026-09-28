/**
 * 認證中間件
 * 驗證 JWT Token，實現 RBAC 權限控制
 */
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

/**
 * 解析 JWT 密鑰。
 *
 * 原實現將 'bughub_secret_key' 硬編碼為默認值：任何未配置環境變量的部署
 * 都會使用這個公開可知的密鑰，攻擊者可據此偽造任意用戶的 token。
 * 現改為——生產環境強制要求顯式配置，否則拒絕啟動；
 * 開發環境生成一次性隨機密鑰并打印警告。
 */
function resolveSecretKey() {
  if (process.env.JWT_SECRET) {
    return process.env.JWT_SECRET
  }
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      '安全錯誤：生產環境必須通過環境變量 JWT_SECRET 顯式配置密鑰，' +
      '拒絕以不安全的默認值啟動。'
    )
  }
  console.warn(
    '[BugHub] 警告：未設置 JWT_SECRET，已生成隨機臨時密鑰，' +
    '服務重啟後所有已簽發 token 將失效。'
  )
  return crypto.randomBytes(32).toString('hex')
}

const SECRET_KEY = resolveSecretKey()

/**
 * JWT 認證中間件
 * 驗證請求頭中的 Bearer Token
 */
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: '未提供認證令牌' })
  }

  const token = authHeader.substring(7)

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: '令牌無效或已過期' })
  }
}

/**
 * 角色權限檢查中間件工廠
 * @param {string[]} roles - 允許的角色列表
 */
function checkRole(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: '未認證' })
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: '權限不足' })
    }
    next()
  }
}

module.exports = authMiddleware
module.exports.checkRole = checkRole
