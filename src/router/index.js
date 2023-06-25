import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import DataView from "../views/DataView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView 
    },,
  ]
})

export default router
