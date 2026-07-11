<!--
  提交缺陷報告頁面
  表單包含標題、描述、分類、嚴重程度等字段
-->
<template>
  <div class="report-page">
    <h2>提交缺陷報告</h2>
    <el-form :model="form" label-width="100px">
      <el-form-item label="標題">
        <el-input v-model="form.title" placeholder="簡要描述問題" />
      </el-form-item>
      <el-form-item label="分類">
        <el-select v-model="form.category">
          <el-option label="硬件" value="hardware" />
          <el-option label="軟件" value="software" />
          <el-option label="網絡" value="network" />
        </el-select>
      </el-form-item>
      <el-form-item label="嚴重程度">
        <el-radio-group v-model="form.severity">
          <el-radio value="critical">嚴重</el-radio>
          <el-radio value="medium">中等</el-radio>
          <el-radio value="minor">輕微</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="詳細描述">
        <el-input
          v-model="form.description"
          type="textarea"
          :rows="8"
          placeholder="詳細描述遇到的問題（支持 Markdown）"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交報告</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  title: '',
  category: '',
  severity: 'medium',
  description: ''
})

const submit = () => {
  // TODO: 調用 API 提交報告
}
</script>
