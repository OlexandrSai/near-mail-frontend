import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/store.js'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from) => {
  if (store.state.accountId&&(to.path==="/"&&from.path==="/")) {
    router.push('/dashboard')
  }
})

export default router 