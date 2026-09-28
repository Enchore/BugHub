/**
 * 數據庫配置
 * 配置數據庫連接（可替換為 MongoDB/MySQL 等）
 */
// TODO: 根據實際使用的數據庫進行配置
// 此處為輕量級內存存儲的佔位配置

const config = {
  port: process.env.PORT || 8080,
  jwt: {
    // 不再提供硬編碼默認值——密鑰統一由 middleware/auth.js 解析，
    // 未配置時生產環境拒絕啟動、開發環境使用隨機臨時密鑰。
    secret: process.env.JWT_SECRET,
    expiresIn: '7d'
  }
}

module.exports = config
