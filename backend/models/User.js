/**
 * 用戶數據模型
 */
class User {
  constructor(data) {
    this.id = data.id
    this.username = data.username
    this.email = data.email
    this.password = data.password       // 哈希後的密碼
    this.role = data.role || 'user'     // user / moderator / admin
    this.createdAt = data.createdAt || new Date()
  }

  /**
   * 驗證密碼
   * TODO: 使用 bcrypt 比較
   */
  verifyPassword(plainPassword) {
    return plainPassword === this.password
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      role: this.role,
      createdAt: this.createdAt
    }
  }
}

module.exports = User
