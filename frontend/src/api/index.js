/**
 * BugHub API 請求封裝模塊
 * 基於 Axios 的統一請求處理
 */
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 請求攔截器
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 響應攔截器
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // 跳轉到登錄頁
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// ========== 缺陷報告 API ==========

/**
 * 獲取缺陷報告列表
 */
export function getBugList(params) {
  return api.get('/bugs', { params })
}

/**
 * 獲取缺陷報告詳情
 */
export function getBugDetail(id) {
  return api.get(`/bugs/${id}`)
}

/**
 * 提交新的缺陷報告
 */
export function createBug(data) {
  return api.post('/bugs', data)
}

// ========== 用戶 API ==========

/**
 * 用戶登錄
 */
export function login(data) {
  return api.post('/auth/login', data)
}

/**
 * 用戶註冊
 */
export function register(data) {
  return api.post('/auth/register', data)
}

export default api
