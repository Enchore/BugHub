/**
 * 數據庫配置
 * 配置數據庫連接（可替換為 MongoDB/MySQL 等）
 */
// TODO: 根據實際使用的數據庫進行配置
// 此處為輕量級內存存儲的佔位配置

const config = {
  port: process.env.PORT || 8080,
  jwt: {
    secret: process.env.JWT_SECRET || 'bughub_secret_key',
    expiresIn: '7d'
  }
}

module.exports = config
