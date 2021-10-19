import { Router, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import boards from '../pages/boards.vue'
import create from '../pages/create.vue'
import details from '../pages/details.vue'
import progress from '../pages/progress.vue'
import profil from '../pages/profil.vue'
import example from '../pages/example/index.vue'
import exampleA from '../pages/example/example-a.vue'
import exampleB from '../pages/example/example-b.vue'
import Trans from '../components/Trans.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: boards
  },
  {
    path: '/example',
    component: example,
    redirect: '/example/a',
    children: [
      {
        path: 'a',
        component: exampleA
      },
      {
        path: 'b',
        component: exampleB
      }
    ]
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
