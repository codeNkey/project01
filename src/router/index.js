import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home", webpackPrefetch:true */ '@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '@/views/AboutView.vue')
  },
  {
    path: '/test',
    name:'test',
    component: () => import(/* webpackChunkName: "test", webpackPrefetch:true */ '@/views/TestView.vue')
  },
  {
    path: '/string',
    name:'string',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/DataBindingStringView.vue')
  },
  {
    path: '/html',
    name:'html',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/HtmlView.vue')
  },
  {
    path: '/attribute',
    name:'attribute',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/AttributeView.vue')
  },
  {
    path: '/class',
    name:'class',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/ClassView.vue')
  },
  {
    path: '/input',
    name:'input',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/InputView.vue')
  },
  {
    path: '/list',
    name:'list',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/ListView.vue')
  },
  {
    path: '/check',
    name:'check',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CheckBoxSelectRadioView.vue')
  },
  {
    path: '/cal',
    name:'cal',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CalView.vue')
  },
  {
    path: '/cal1',
    name:'cal1',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CalView1.vue')
  },
  {
    path: '/calcul',
    name:'calcul',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '@/views/DataBinding/CalculatorView.vue')
  },
  {
    path: '/click',
    name:'click',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '@/views/Event/ClickView.vue')
  },
  {
    path: '/change',
    name:'change',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '@/views/Event/ChangeView.vue')
  },
  {
    path: '/key',
    name:'key',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '@/views/Event/KeyView.vue')
  },
  {
    path: '/render',
    name:'render',
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/RenderView.vue')
  },
  {
    path: '/show',
    name:'show',
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/RenderShowView.vue')
  },
  {
    path: '/com',
    name:'com',
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/ComputedView.vue')
  },
  {
    path: '/watch',
    name:'watch',
    component: () => import(/* webpackChunkName: "extra", webpackPrefetch:true */ '@/views/Extra/WatchView.vue')
  },
  {
    path: '/grid',
    name:'grid',
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Reuse/GridView.vue')
  },
  {
    path: '/slot',
    name:'slot',
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Reuse/SlotView.vue')
  },
  {
    path: '/root',
    name:'root',
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Reuse/RootView.vue')
  },
  {
    path: '/custom',
    name:'custom',
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Advenced/CustomView.vue')
  },
  {
    path: '/mix',
    name:'mix',
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Advenced/MixinView.vue')
  },
  {
    path: '/plug',
    name:'plug',
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Advenced/PluginView.vue')
  },
  {
    path: '/vuex',
    name:'vuex',
    component: () => import(/* webpackChunkName: "reuse", webpackPrefetch:true */ '@/views/Advenced/VuexView.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
