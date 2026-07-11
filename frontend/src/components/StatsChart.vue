<!--
  StatsChart 組件
  數據可視化組件，使用 ECharts 展示餅圖/折線圖/詞雲
-->
<template>
  <div class="stats-chart">
    <el-row :gutter="20">
      <el-col :span="8">
        <div ref="pieChart" class="chart-container"></div>
      </el-col>
      <el-col :span="16">
        <div ref="lineChart" class="chart-container"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const pieChart = ref(null)
const lineChart = ref(null)
let pieInstance = null
let lineInstance = null

onMounted(() => {
  // 初始化餅圖
  pieInstance = echarts.init(pieChart.value)
  pieInstance.setOption({
    title: { text: '缺陷分類分布', left: 'center' },
    tooltip: { trigger: 'item' },
    series: [{
      type: 'pie',
      radius: '60%',
      data: [
        { value: 35, name: '硬件' },
        { value: 48, name: '軟件' },
        { value: 17, name: '網絡' }
      ]
    }]
  })

  // 初始化折線圖
  lineInstance = echarts.init(lineChart.value)
  lineInstance.setOption({
    title: { text: '缺陷報告趨勢', left: 'center' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月'] },
    yAxis: { type: 'value' },
    series: [{ data: [12, 19, 8, 25, 15, 22], type: 'line', smooth: true }]
  })

  // 響應式
  window.addEventListener('resize', handleResize)
})

function handleResize() {
  pieInstance?.resize()
  lineInstance?.resize()
}

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  pieInstance?.dispose()
  lineInstance?.dispose()
})
</script>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: 300px;
}
</style>
