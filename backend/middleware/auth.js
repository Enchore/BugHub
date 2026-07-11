/**
 * 認證中間件
 * 驗證 JWT Token，實現 RBAC 權限控制
 */
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.JWT_SECRET || 'bughub_secret_key'

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
