import Vue from 'vue'
import router from './router'

import Notifications from 'vue-notification'

import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.filter('ucfirst', function (value) {
  return value[0].toUpperCase() + value.slice(1);
})

Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
