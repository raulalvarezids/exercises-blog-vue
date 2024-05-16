import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowDataView from '../views/ShowDataView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/exercise/:name',
      name:'exercise',
      component:ShowDataView
    }
  ]
})

export default router
