import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/Home.vue'
// import Login from '../views/Inscription.vue'
//import Message from '../views/Message.vue'
// import Multimedia from '../views/Multimedia.vue'
// import Inscription from '../views/Inscription.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "inscription" */ '../views/Inscription.vue')
    // component: Login
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
    //component: Message
  },
  {
    path: '/multimedia',
    name: 'Multimedia',
    component: () => import(/* webpackChunkName: "multimedia" */ '../views/Multimedia.vue')
    // component: Multimedia
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/Profil.vue')
    // component: Multimedia
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
