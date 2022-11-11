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
    path: '/messages',
    name: 'Messages',
    component: () => import(/* webpackChunkName: "message" */ '../views/Messages.vue')
  },
  {
    path: '/modify',
    name: 'Modify',
    props: true,
    component: () => import(/* webpackChunkName: "mofify" */ '../views/Modify.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
