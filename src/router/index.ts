import { Router, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import boards from '../pages/boards.vue'
import create from '../pages/create.vue'
import details from '../pages/details.vue'
import progress from '../pages/progress.vue'
import profil from '../pages/profil.vue'
import Trans from '../components/Trans.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: boards
    // redirect: '/trans'
  },
  {
    path: '/trans',
    component: Trans
  },
  {
    path: '/create',
    component: create
  },
  {
    path: '/details',
    component: details
  },
  {
    path: '/progress',
    component: progress
  },
  {
    path: '/profil',
    component: profil
  }
]

export const router: Router = createRouter({
  history: createWebHistory(),
  routes
})