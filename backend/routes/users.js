/**
 * 用戶路由
 * 處理用戶信息查詢與管理
 */
const express = require('express')
const router = express.Router()

/**
 * GET /api/users/:id
 * 獲取用戶信息
 */
router.get('/:id', (req, res) => {
  const { id } = req.params
  // TODO: 查詢用戶信息
  res.json({ id, username: '', email: '', role: '' })
})

/**
 * PUT /api/users/:id
 * 更新用戶信息
 */
router.put('/:id', (req, res) => {
  // TODO: 更新用戶信息
  res.json({ message: '更新成功' })
})

module.exports = router
