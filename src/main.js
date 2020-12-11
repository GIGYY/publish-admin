/**
 * Project entry file
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// add element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import global style
import './styles/index.scss'

Vue.config.productionTip = false

// global register element-ui
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
