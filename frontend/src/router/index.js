/**
 * BugHub 前端路由配置
 *
 * main.js 中 `import router from './router'`，但原仓库缺少该模块，
 * 导致 npm run dev 直接报解析错误、应用无法启动。此处补上路由定义。
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BugReport from '../views/BugReport.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { title: '首頁' }
  },
  {
    path: '/report',
    name: 'report',
    component: BugReport,
    meta: { title: '提交報告' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { title: '數據看板' }
  },
  // 未匹配的路径回落到首页
  { path: '/:pathMatch(.*)*', redirect: '/home' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} — BugHub` : 'BugHub'
})

export default router
