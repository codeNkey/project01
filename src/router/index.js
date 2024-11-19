import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '@/views/AboutView.vue')
  },
  {
    path: '/test',
    name:'test',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test", webpackPrefetch:true */ '@/views/TestView.vue')
  },
  {
    path: '/string',
    name:'string',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/DataBindingStringView.vue')
  },
  {
    path: '/html',
    name:'html',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/HtmlView.vue')
  },
  {
    path: '/attribute',
    name:'attribute',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/AttributeView.vue')
  },
  {
    path: '/class',
    name:'class',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/ClassView.vue')
  },
  {
    path: '/input',
    name:'input',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/InputView.vue')
  },
  {
    path: '/list',
    name:'list',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/ListView.vue')
  },
  {
    path: '/check',
    name:'check',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CheckBoxSelectRadioView.vue')
  },
  {
    path: '/cal',
    name:'cal',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CalView.vue')
  },
  {
    path: '/cal1',
    name:'cal1',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CalView1.vue')
  },
  {
    path: '/calcul',
    name:'calcul',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CalculatorView.vue')
  },
  {
    path: '/click',
    name:'click',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '@/views/Event/ClickView.vue')
  },
  {
    path: '/change',
    name:'change',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '@/views/Event/ChangeView.vue')
  },
  {
    path: '/key',
    name:'key',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '@/views/Event/KeyView.vue')
  },
  {
    path: '/render',
    name:'render',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/RenderView.vue')
  },
  {
    path: '/show',
    name:'show',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/RenderShowView.vue')
  },
  {
    path: '/com',
    name:'com',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/ComputedView.vue')
  },
  {
    path: '/watch',
    name:'watch',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/WatchView.vue')
  },
  {
    path: '/grid',
    name:'grid',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Reuse/GridView.vue')
  },
  {
    path: '/slot',
    name:'slot',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Reuse/SlotView.vue')
  },
  {
    path: '/root',
    name:'root',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Reuse/RootView.vue')
  },
  {
    path: '/custom',
    name:'custom',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Advenced/CustomView.vue')
  },
  {
    path: '/mix',
    name:'mix',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Advenced/MixinView.vue')
  },
  {
    path: '/plug',
    name:'plug',
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Advenced/PluginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
