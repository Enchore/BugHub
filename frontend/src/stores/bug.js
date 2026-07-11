/**
 * 缺陷報告狀態管理
 * 管理缺陷列表、篩選條件與當前選中的缺陷
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getBugList } from '../api'

export const useBugStore = defineStore('bug', () => {
  const bugList = ref([])
  const currentBug = ref(null)
  const loading = ref(false)
  const filters = ref({
    category: '',
    severity: '',
    status: '',
    keyword: ''
  })

  /**
   * 加載缺陷列表
   */
  async function fetchBugs(params = {}) {
    loading.value = true
    try {
      const data = await getBugList({ ...filters.value, ...params })
      bugList.value = data.list || data
    } finally {
      loading.value = false
    }
  }

  /**
   * 更新篩選條件
   */
  function setFilters(newFilters) {
    filters.value = { ...filters.value, ...newFilters }
  }

  return {
    bugList,
    currentBug,
    loading,
    filters,
    fetchBugs,
    setFilters
  }
})
