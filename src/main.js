/**
 * Project entry file
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import global style file
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
