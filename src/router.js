import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

import NotFound from './views/NotFound.vue'

Vue.use(Router)

const checkAuth = (to, from, next) => {
  if (!store.getters.isAuth) {
    return next('/login');
  } 

  return next();
};

const checkGuest = (to, from, next) => {
  if (store.getters.isAuth) {
    return next('/dashboard');
  } 

  return next();
};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'dashboard'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      beforeEnter: checkGuest
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      beforeEnter: checkAuth
    },
    {
      path: '/not-found',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        name: 'notFound'
      }
    }
  ]
})
