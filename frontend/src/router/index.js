import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "inscription" */ '../views/Connexion.vue')
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
