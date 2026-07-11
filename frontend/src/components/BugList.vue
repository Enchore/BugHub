<!--
  BugList 組件
  缺陷報告列表，支持篩選和分頁
-->
<template>
  <div class="bug-list">
    <div class="filter-bar">
      <el-select v-model="filters.category" placeholder="分類" clearable>
        <el-option label="硬件" value="hardware" />
        <el-option label="軟件" value="software" />
        <el-option label="網絡" value="network" />
      </el-select>
      <el-select v-model="filters.severity" placeholder="嚴重程度" clearable>
        <el-option label="嚴重" value="critical" />
        <el-option label="中等" value="medium" />
        <el-option label="輕微" value="minor" />
      </el-select>
      <el-input v-model="filters.keyword" placeholder="搜索關鍵詞" clearable />
    </div>
    <div v-loading="loading" class="bug-items">
      <BugCard
        v-for="bug in bugList"
        :key="bug.id"
        :bug="bug"
        @click="$router.push(`/bugs/${bug.id}`)"
      />
    </div>
    <el-pagination
      v-model:current-page="page"
      :page-size="pageSize"
      :total="total"
      layout="prev, pager, next"
      @current-change="onPageChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBugStore } from '../stores/bug'
import BugCard from './BugCard.vue'

const bugStore = useBugStore()
const page = ref(1)
const pageSize = ref(10)
const total = ref(0)

const { bugList, loading, filters } = bugStore

onMounted(() => {
  bugStore.fetchBugs()
})

function onPageChange(newPage) {
  bugStore.fetchBugs({ page: newPage })
}
</script>
