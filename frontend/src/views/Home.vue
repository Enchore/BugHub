<!--
  首頁視圖
  展示最新缺陷報告和統計概覽
-->
<template>
  <div class="home-page">
    <el-row :gutter="20">
      <el-col :span="16">
        <h2>最新缺陷報告</h2>
        <BugList />
      </el-col>
      <el-col :span="8">
        <h2>數據概覽</h2>
        <StatsChart />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import BugList from '../components/BugList.vue'
import StatsChart from '../components/StatsChart.vue'
</script>
