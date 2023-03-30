import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/Login.vue'
import Guard from '../services/middleware'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: Guard.auth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
