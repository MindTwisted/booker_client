import Vue from 'vue'
import axios from 'axios'
import router from './router'

import Notifications from 'vue-notification'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

import App from './App.vue'
import store from './store/index'

const AUTH_TOKEN = localStorage.getItem('token');

if (AUTH_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
}

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const response = error.response;

    if (+response.status === 401) {
      store.commit('removeAuth');

      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('role');

      router.push({name: 'login'});
    }

    return Promise.reject(error);
  });

Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.filter('ucfirst', function (value) {
  return value[0].toUpperCase() + value.slice(1);
})

Vue.filter('getMonthString', function (value) {
  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  };
  
  return months[value];
})

Vue.filter('zeroFill', function(value) {
  return +value < 10 ? '0' + +value : +value;
})

Vue.use(Notifications)
Vue.use(VueChartkick, {adapter: Chart})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
