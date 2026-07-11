<!--
  BugCard 組件
  用於展示單個缺陷報告的卡片信息
-->
<template>
  <el-card class="bug-card" shadow="hover">
    <div class="bug-header">
      <el-tag :type="severityType" size="small">{{ bug.severity }}</el-tag>
      <el-tag :type="statusType" size="small">{{ statusText }}</el-tag>
      <span class="bug-title">{{ bug.title }}</span>
    </div>
    <div class="bug-meta">
      <span>分類：{{ bug.category }}</span>
      <span>提交者：{{ bug.author }}</span>
      <span>{{ bug.createdAt }}</span>
    </div>
    <div class="bug-preview">
      {{ bug.description?.substring(0, 100) }}...
    </div>
  </el-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  bug: {
    type: Object,
    required: true
  }
})

const severityType = computed(() => {
  const map = { '嚴重': 'danger', '中等': 'warning', '輕微': 'info' }
  return map[props.bug.severity] || 'info'
})

const statusType = computed(() => {
  const map = { '待處理': 'warning', '處理中': '', '已解決': 'success', '已關閉': 'info' }
  return map[props.bug.status] || ''
})

const statusText = computed(() => props.bug.status)
</script>

<style lang="scss" scoped>
.bug-card {
  margin-bottom: 12px;
  cursor: pointer;

  .bug-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    .bug-title {
      font-weight: bold;
    }
  }

  .bug-meta {
    color: #999;
    font-size: 12px;
    display: flex;
    gap: 16px;
    margin-bottom: 8px;
  }

  .bug-preview {
    color: #666;
    font-size: 13px;
  }
}
</style>
