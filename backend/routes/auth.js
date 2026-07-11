/**
 * 認證路由
 * 處理用戶登錄、註冊
 */
const express = require('express')
const router = express.Router()

/**
 * POST /api/auth/register
 * 用戶註冊
 */
router.post('/register', (req, res) => {
  const { username, password, email } = req.body
  // TODO: 驗證參數、檢查用戶是否存在、哈希密碼、存入數據庫
  res.status(201).json({ message: '註冊成功' })
})

/**
 * POST /api/auth/login
 * 用戶登錄
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body
  // TODO: 驗證用戶名密碼、生成 JWT Token
  res.json({
    token: 'jwt_token_placeholder',
    user: { id: 1, username, role: 'user' }
  })
})

module.exports = router
