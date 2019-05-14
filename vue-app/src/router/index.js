import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import HelloWorld from '@/components/HelloWorld'
import Inicio from '@/components/Inicio'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Productos from '../components/Productos'
import Nuevo_Producto from '../components/Nuevo_Producto'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: Inicio,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Productos',
      name: 'Productos',
      component: Productos,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Nuevo_Producto',
      name: 'Nuevo producto',
      component: Nuevo_Producto,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('Login')
  else if (!requiresAuth && currentUser) next('Inicio ')
  else next()
})

export default router