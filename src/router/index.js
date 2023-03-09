import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Favorites from '../components/Favorites.vue'
import Seen from '../components/Seen.vue'
import Tosee from '../components/Tosee.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/seen',
      name: 'seen',
      component: Seen
    },{
      path: '/tosee',
      name: 'tosee',
      component: Tosee
    },
    
  ]
})

export default router
