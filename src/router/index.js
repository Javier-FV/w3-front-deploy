import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

 
  {
    path:"/Home",
    name:"Home",
    component: () => import('@/views/Home.vue')

  },
  {
    path:"/AdminModalAprobados",
    name: "AdminModalAprobados",
    component: () => import('@/components/AdminModalAprobados.vue')
  },
  {
    path:"/AdminModalEliminados",
    name: "AdminModalEliminados",
    component: () => import('@/components/AdminModalEliminados.vue')
  },
  {
    path:"/AdminListaAprobados",
    name: "AdminListaAprobados",
    props: true,
    component: () => import('@/components/AdminListaAprobados.vue')

  },
  {
    path:"/AdminListaEliminados",
    name: "AdminListaEliminados",
    props: true,
    component: () => import('@/components/AdminListaEliminados.vue')

  },
  {
    path:"/AdminManagement",
    name: "AdminManagement",
    component: () => import('@/components/AdminManagement.vue')

  },
  {
    path: "/AdvancedSearch",
    name: "AdvancedSearch",
    component: () => import('@/views/AdvancedSearch.vue')
  },
  { 
    path:"/CancionList",   //Se debe cambiar el nombre de este elemento.
    name: "CancionList",
    component: () =>import('@/components/CancionList.vue')

  },
  { 
    path:"/Cart",   //Se debe cambiar el nombre de este elemento.
    name: "Cart",
    component: () =>import('@/components/Cart.vue')

  },
  {
    path:"/CrearCancion/:usuario/:name",   // Esta es una ruta dinamica 1:32:01
    name: "CrearCancion",
    component: () => import('@/components/CrearCancion.vue')
  },
  {
    path:"/EditCancion/:usuario",
    name: "EditCancion",
    component: () =>import('@/components/EditCancion.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../components/Signup.vue')
  },
  {
    path:"/lyrics/:idLetra",
    name: "VistaLetra",
    props: true,
    component: () =>import('@/components/VistaLetra.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
