import Vue from 'vue'
import VueRouter from 'vue-router'

// 在vue-cli创建的项目中， @表示的是 src 目录，换句话说就是 src 的别名
// 优势： 不受当前文件目录的影响
import Login from '@/views/login'

Vue.use(VueRouter)

// router config
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
