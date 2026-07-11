<!--
  數據看板頁面
  展示多維度數據可視化
-->
<template>
  <div class="dashboard-page">
    <h2>數據看板</h2>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-statistic title="總報告數" :value="stats.total" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="待處理" :value="stats.pending" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="已解決" :value="stats.resolved" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="本月新增" :value="stats.monthly" />
      </el-col>
    </el-row>
    <StatsChart />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import StatsChart from '../components/StatsChart.vue'

const stats = reactive({
  total: 156,
  pending: 23,
  resolved: 98,
  monthly: 18
})
</script>
