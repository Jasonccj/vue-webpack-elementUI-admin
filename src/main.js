import Vue from 'vue'

import ElementUI from 'element-ui'
import App from './App'
import router from './router'

import '@/permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
