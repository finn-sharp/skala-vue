import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WeatherHomeView',
      component: () => import('../views/WeatherHomeView.vue'),
    },
    {
      path: '/about',
      name: 'WeatherAboutView',
      component: () => import('../views/WeatherAboutView.vue'),
    },
    {
      path: '/weather/cityId',
      name: 'WeatherDetailView',
      component: () => import('../views/WeatherDetailView.vue'),
    },
    // catch-all route
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: import('../views/NotFoundView.vue')
    }
  ],
})

export default router
