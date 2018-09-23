import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

import NotFound from './views/NotFound.vue'

Vue.use(Router)

const checkAdmin = (to, from, next) => {
  if (!store.getters.isAdmin) {
    return next({name: 'dashboard.stats'});
  } 

  return next();
};

const checkAuth = (to, from, next) => {
  if (!store.getters.isAuth) {
    return next({name: 'login'});
  } 

  return next();
};

const checkGuest = (to, from, next) => {
  if (store.getters.isAuth) {
    return next({name: 'dashboard.stats'});
  } 

  return next();
};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'dashboard.stats'
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
      component: () => import('./views/dashboard/Dashboard.vue'),
      beforeEnter: checkAuth,
      children: [
        {
          path: '',
          redirect: {
            name: 'dashboard.stats'
          }
        },
        {
          path: 'stats',
          name: 'dashboard.stats',
          component: () => import ('./views/dashboard/stats/Stats.vue'),
        },
        {
          path: 'booking',
          name: 'dashboard.booking',
          component: () => import ('./views/dashboard/booking/Booking.vue'),
        },
        {
          path: 'users',
          name: 'dashboard.users',
          component: () => import ('./views/dashboard/users/Users.vue'),
          beforeEnter: checkAdmin
        },
        {
          path: 'users/create',
          name: 'dashboard.users.create',
          component: () => import ('./views/dashboard/users/Create.vue'),
          beforeEnter: checkAdmin
        },
        {
          path: 'users/:id/edit',
          name: 'dashboard.users.edit',
          component: () => import ('./views/dashboard/users/Edit.vue'),
          beforeEnter: (to, from, next) => {
            if (!store.getters.isAdmin) {
              return next({name: 'dashboard.stats'});
            } 
            
            if (store.state.users.length === 0) {
              return next({name: 'dashboard.users'});
            }

            return next();
          }
        },
        {
          path: 'rooms',
          name: 'dashboard.rooms',
          component: () => import ('./views/dashboard/rooms/Rooms.vue'),
          beforeEnter: checkAdmin
        },
        {
          path: 'rooms/create',
          name: 'dashboard.rooms.create',
          component: () => import ('./views/dashboard/rooms/Create.vue'),
          beforeEnter: checkAdmin
        },
        {
          path: 'rooms/:id/edit',
          name: 'dashboard.rooms.edit',
          component: () => import ('./views/dashboard/rooms/Edit.vue'),
          beforeEnter: (to, from, next) => {
            if (!store.getters.isAdmin) {
              return next({name: 'dashboard.stats'});
            } 
            
            if (store.state.rooms.length === 0) {
              return next({name: 'dashboard.rooms'});
            }

            return next();
          }
        },
      ]
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
