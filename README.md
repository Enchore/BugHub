# BugHub — 游戏硬件与软件缺陷报告社区平台

[![CI](https://github.com/Enchore/BugHub/actions/workflows/ci.yml/badge.svg)](https://github.com/Enchore/BugHub/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Game Hardware & Software Bug Report Community | Vue 3 + Express

## 项目简介

面向游戏硬件与软件缺陷报告的社区平台，前后端分离的 Web 应用。前端为 Vue 3 单页应用，包含首页、提交报告、数据看板三个页面；后端为 Express API。

**当前完成度：前端可运行，后端业务接口为骨架。** 详见文末「当前边界」。

## 功能特性

### 已实现

- **三个页面视图**：首页（Home）、提交报告（BugReport）、数据看板（Dashboard）
- **缺陷卡片与列表组件**：BugCard、BugList
- **数据可视化**：基于 ECharts 的饼图与折线图（StatsChart 组件）
- **暗黑模式**：SCSS 变量 + `.dark` 类切换，含开关控件
- **状态管理**：Pinia 管理缺陷列表与用户信息
- **API 封装**：Axios 统一请求层
- **JWT 认证中间件**：Token 校验 + RBAC 角色权限控制（`checkRole`）

### 尚未实现

后端所有业务接口目前为占位实现，详见「当前边界」一节。

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端框架 | Vue 3（Composition API） |
| UI 组件库 | Element Plus |
| 构建工具 | Vite 5 |
| 状态管理 | Pinia |
| 路由 | Vue Router 4 |
| 图表 | ECharts 5 |
| 样式 | SCSS |
| 后端框架 | Express 4 |
| 认证 | jsonwebtoken + bcryptjs |

## 项目结构

```
BugHub/
├── frontend/
│   ├── src/
│   │   ├── main.js                 # 应用入口
│   │   ├── App.vue                 # 根组件：导航 + 主题切换
│   │   ├── router/index.js         # 路由配置（/home /report /dashboard）
│   │   ├── views/
│   │   │   ├── Home.vue            # 首页
│   │   │   ├── BugReport.vue       # 提交报告
│   │   │   └── Dashboard.vue       # 数据看板
│   │   ├── components/
│   │   │   ├── BugCard.vue         # 缺陷卡片
│   │   │   ├── BugList.vue         # 缺陷列表
│   │   │   └── StatsChart.vue      # ECharts 饼图 + 折线图
│   │   ├── stores/
│   │   │   ├── bug.js              # 缺陷状态
│   │   │   └── user.js             # 用户状态
│   │   ├── api/index.js            # Axios 请求封装
│   │   └── assets/styles/global.scss
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── app.js                      # Express 入口
│   ├── routes/
│   │   ├── auth.js                 # 注册 / 登录（占位）
│   │   ├── bugs.js                 # 缺陷 CRUD（占位）
│   │   └── users.js                # 用户（占位）
│   ├── middleware/auth.js          # JWT 校验 + RBAC（已实现）
│   ├── models/
│   │   ├── Bug.js                  # 缺陷数据模型
│   │   └── User.js                 # 用户数据模型
│   └── package.json
└── docs/api.md
```

## 快速开始

### 前端

```bash
cd frontend
npm install
npm run dev        # 开发服务器
npm run build      # 生产构建
```

### 后端

```bash
cd backend
npm install

# 必须配置 JWT 密钥，否则生产环境拒绝启动
export JWT_SECRET="your-secret-key"

npm start          # 或 npm run dev 使用 Node 内置 --watch 热重载
```

服务默认运行在 `http://localhost:8080`，健康检查接口为 `/api/health`。

## 环境变量

| 变量 | 说明 | 是否必填 |
|------|------|---------|
| `JWT_SECRET` | JWT 签名密钥 | 生产环境必填 |
| `PORT` | 服务端口，默认 8080 | 否 |
| `NODE_ENV` | 设为 `production` 时强制校验 JWT_SECRET | 否 |

> 安全说明：早期版本将密钥硬编码为默认值，任何未配置环境变量的部署都会使用这个公开可知的密钥。现已移除默认密钥——生产环境缺失配置时服务拒绝启动，开发环境自动生成随机临时密钥。

## API 接口

| 方法 | 路径 | 状态 |
|------|------|------|
| GET | `/api/health` | 可用 |
| POST | `/api/auth/register` | 占位 |
| POST | `/api/auth/login` | 占位 |
| GET | `/api/bugs` | 占位（返回空列表） |
| GET | `/api/bugs/:id` | 占位 |
| POST | `/api/bugs` | 占位 |
| PUT | `/api/bugs/:id` | 占位 |
| GET/PUT | `/api/users/*` | 占位 |

接口约定详见 `docs/api.md`。

## 当前边界

以下内容**尚未实现**，如实列出：

- **后端业务接口全是占位**：`routes/` 下三个文件共 8 处 TODO。注册接口不校验也不存储，登录接口返回字面量 `token: 'jwt_token_placeholder'`，缺陷列表返回固定的空结果 `{"list": [], "total": 0}`，创建缺陷固定返回 `id: 1`
- **无数据库**：`config/db.js` 是内存存储占位，未接入 MongoDB/MySQL 等任何数据库，数据在重启后丢失。数据模型 `Bug.js` / `User.js` 已定义但未被持久化层使用
- **无缺陷详情页与个人中心页**：views 下只有 Home、BugReport、Dashboard 三个页面，README 早期版本提到的 BugDetail.vue 与 Profile.vue 不存在
- **无词云**：图表仅含饼图与折线图；ECharts 词云需额外的 `echarts-wordcloud` 插件，未安装
- **Markdown 渲染未接入**：`markdown-it` 已在依赖中，但代码中未使用
- **看板为静态数据**：StatsChart 中的折线图数据为硬编码示例值，非真实统计
- **无单元测试与 CI**

## 许可证

本项目基于 [MIT License](LICENSE) 开源。
