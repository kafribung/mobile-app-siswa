import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import Siswa from '../views/pages/Siswa/Siswa.vue'

const routes= [
  {
    path: '/',
    redirect: '/siswa'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/siswa',
    name: 'Siswa',
    component: Siswa,
  },
  {
    path: '/siswa/:id',
    name: 'SiswaShow',
    component: () => import('../views/pages/Siswa/Show.vue') ,
  },
  {
    path: '/siswa/create',
    name: 'SiswaCreate',
    component: () => import('../views/pages/Siswa/Create.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
