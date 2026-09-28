<!--
  BugHub 根組件
  包含頂部導航、主內容區域和底部信息
-->
<template>
  <div id="bughub-app" :class="{ dark: isDark }">
    <el-container>
      <el-header>
        <div class="logo">BugHub</div>
        <el-menu mode="horizontal" :default-active="route.path" router>
          <el-menu-item index="/home">首頁</el-menu-item>
          <el-menu-item index="/report">提交報告</el-menu-item>
          <el-menu-item index="/dashboard">數據看板</el-menu-item>
        </el-menu>
        <div class="header-actions">
          <el-switch v-model="isDark" @change="toggleTheme" />
          <el-button type="primary" v-if="!isLoggedIn">登錄</el-button>
          <el-dropdown v-else>
            <span class="username">{{ username }}</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>個人中心</el-dropdown-item>
                <el-dropdown-item divided>退出登錄</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isDark = ref(false)
const isLoggedIn = ref(false)
const username = ref('用戶')

// 根節點上同步 .dark 類，global.scss 中的暗黑變量定義在 :root / .dark 上
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<style lang="scss">
// 全局樣式在 assets/styles/global.scss 中定義
</style>
