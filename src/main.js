import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'
fastclick.attach(document.body)

Vue.use(vueLazyLoad, {
  loading: require('common/image/default.png')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
