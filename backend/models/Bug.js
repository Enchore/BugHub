/**
 * 缺陷報告數據模型
 */
class Bug {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.category = data.category       // hardware / software / network
    this.severity = data.severity       // critical / medium / minor
    this.status = data.status           // pending / processing / resolved / closed
    this.authorId = data.authorId
    this.createdAt = data.createdAt || new Date()
    this.updatedAt = data.updatedAt || new Date()
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      category: this.category,
      severity: this.severity,
      status: this.status,
      authorId: this.authorId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }
}

module.exports = Bug
