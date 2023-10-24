import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemon',
      mame: 'pokemon',
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritoView.vue')
    }
  ]
})

export default router
