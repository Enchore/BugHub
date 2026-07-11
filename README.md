# BugHub — 遊戲硬件與軟件缺陷報告社區平台

> BugHub — 遊戲硬件與軟件缺陷報告社區平台 | Game Hardware & Software Bug Report Community

## 项目简介

BugHub 是一款面向遊戲硬件與軟件缺陷報告的社區平台。獨立完成全棧開發，實現前後端分離的完整 Web 應用。覆蓋 10+ 核心功能模塊，集成多維度數據可視化（餅圖/折線圖/詞雲）。用戶體驗優化（暗黑模式、Markdown 渲染、圖片預覽等）。輕量級架構設計。實現基於角色的權限控制（RBAC）。響應式佈局。

## 功能特性

- **缺陷報告管理**：提交、分類、追蹤和管理遊戲硬件與軟件缺陷
- **多用戶社區**：用戶註冊、登錄、個人中心
- **RBAC 權限控制**：基於角色的訪問控制，支持管理員、版主、普通用戶
- **數據可視化**：多維度數據可視化（餅圖、折線圖、詞雲等）
- **暗黑模式**：支持明暗主題切換
- **Markdown 渲染**：報告內容支持 Markdown 格式
- **圖片預覽**：支持上傳圖片並在線預覽
- **響應式佈局**：適配桌面端與移動端
- **XLSX 導出**：支持數據導出為 Excel 文件

## 技術棧

| 層級 | 技術 |
|------|------|
| 前端框架 | Vue 3, Element Plus |
| 構建工具 | Vite |
| 樣式 | SCSS |
| 狀態管理 | Pinia |
| HTTP 請求 | Axios |
| 圖表 | ECharts |
| 後端框架 | Node.js, Express |
| 數據導出 | XLSX |

## 項目結構

```
BugHub/
├── frontend/                 # Vue 3 前端
│   ├── src/
│   │   ├── components/       # 通用組件
│   │   │   ├── BugCard.vue
│   │   │   ├── BugList.vue
│   │   │   └── StatsChart.vue
│   │   ├── views/            # 頁面視圖
│   │   │   ├── Home.vue
│   │   │   ├── BugReport.vue
│   │   │   ├── BugDetail.vue
│   │   │   ├── Dashboard.vue
│   │   │   └── Profile.vue
│   │   ├── stores/           # Pinia 狀態管理
│   │   │   ├── user.js
│   │   │   └── bug.js
│   │   ├── api/              # API 請求封裝
│   │   │   └── index.js
│   │   ├── assets/styles/    # 全局樣式
│   │   │   └── global.scss
│   │   ├── App.vue
│   │   └── main.js
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express 後端
│   ├── routes/               # 路由
│   │   ├── auth.js
│   │   ├── bugs.js
│   │   └── users.js
│   ├── middleware/           # 中間件
│   │   └── auth.js
│   ├── models/               # 數據模型
│   │   ├── Bug.js
│   │   └── User.js
│   ├── config/               # 配置
│   │   └── db.js
│   ├── app.js                # 應用入口
│   └── package.json
├── docs/                     # 文檔
│   └── api.md
├── README.md
├── .gitignore
└── LICENSE
```

## 快速開始

### 前端

```bash
cd frontend
npm install
npm run dev
```

### 後端

```bash
cd backend
npm install
npm run start
```

## 貢獻

歡迎提交 Issue 和 Pull Request。

## 許可證

本项目基於 [MIT License](LICENSE) 開源。
