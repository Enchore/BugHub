/**
 * BugHub 後端應用入口
 * Express 服務器初始化與路由配置
 */
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const bugRoutes = require('./routes/bugs')
const userRoutes = require('./routes/users')

const app = express()
const PORT = process.env.PORT || 8080

// 中間件
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 路由
app.use('/api/auth', authRoutes)
app.use('/api/bugs', bugRoutes)
app.use('/api/users', userRoutes)

// 健康檢查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: '服務器內部錯誤' })
})

app.listen(PORT, () => {
  console.log(`BugHub 後端服務運行在 http://localhost:${PORT}`)
})

module.exports = app
