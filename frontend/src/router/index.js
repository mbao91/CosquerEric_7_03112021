import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "inscription" */ '../views/Connexion.vue')
    // component: Login
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "inscription" */ '../views/Inscription.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
  },
  {
    path: '/multimedia',
    name: 'Multimedia',
    component: () => import(/* webpackChunkName: "multimedia" */ '../views/Multimedia.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/Profil.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
