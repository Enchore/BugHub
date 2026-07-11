/**
 * 用戶狀態管理
 * 管理用戶登錄狀態、個人信息與權限
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const userInfo = ref(null)

  const isLoggedIn = computed(() => !!token.value)
  const username = computed(() => userInfo.value?.username || '')
  const role = computed(() => userInfo.value?.role || 'user')

  /**
   * 設置登錄憑證
   */
  function setAuth(data) {
    token.value = data.token
    userInfo.value = data.user
    localStorage.setItem('token', data.token)
  }

  /**
   * 退出登錄
   */
  function logout() {
    token.value = ''
    userInfo.value = null
    localStorage.removeItem('token')
  }

  return {
    token,
    userInfo,
    isLoggedIn,
    username,
    role,
    setAuth,
    logout
  }
})
