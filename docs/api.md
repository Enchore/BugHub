# BugHub API 文檔

## 基礎信息

- 基礎 URL: `http://localhost:8080/api`
- 認證方式: Bearer Token (JWT)

## 認證接口

### POST /auth/register
用戶註冊

### POST /auth/login
用戶登錄

## 缺陷報告接口

### GET /bugs
獲取缺陷列表（支持分頁、篩選）

### GET /bugs/:id
獲取缺陷詳情

### POST /bugs
提交新缺陷報告（需認證）

### PUT /bugs/:id
更新缺陷報告（需認證）

## 用戶接口

### GET /users/:id
獲取用戶信息
