/**
 * 缺陷報告路由
 * 處理缺陷的 CRUD 操作和篩選查詢
 */
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')

/**
 * GET /api/bugs
 * 獲取缺陷報告列表（支持分頁和篩選）
 */
router.get('/', (req, res) => {
  const { page = 1, pageSize = 10, category, severity, status, keyword } = req.query
  // TODO: 根據篩選條件查詢數據庫
  res.json({
    list: [],
    total: 0,
    page: Number(page),
    pageSize: Number(pageSize)
  })
})

/**
 * GET /api/bugs/:id
 * 獲取缺陷報告詳情
 */
router.get('/:id', (req, res) => {
  const { id } = req.params
  // TODO: 查詢詳情
  res.json({ id, title: '', description: '' })
})

/**
 * POST /api/bugs
 * 創建新的缺陷報告
 */
router.post('/', authMiddleware, (req, res) => {
  const { title, description, category, severity } = req.body
  // TODO: 驗證並存入數據庫
  res.status(201).json({ message: '報告提交成功', id: 1 })
})

/**
 * PUT /api/bugs/:id
 * 更新缺陷報告
 */
router.put('/:id', authMiddleware, (req, res) => {
  const { id } = req.params
  // TODO: 更新數據庫記錄
  res.json({ message: '更新成功' })
})

module.exports = router
