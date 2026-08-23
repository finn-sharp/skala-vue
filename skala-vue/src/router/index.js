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
      path: '/weather/:cityId',
      name: 'WeatherDetailView',
      component: () => import('../views/WeatherDetailView.vue'),
    },
    {
      path: '/designsystem',
      name: 'DesignSystemDemo',
      component: () => import('../views/DesignSystemDemo.vue'),
    },    
    {
      path: '/detail',
      name: 'SubjectDetail',
      component: () => import('../views/SubjectDetailView.vue'),
      children: [
        { 
          path: '',
          name: 'RoutedAppView',
          component: () => import('../components/subject/weatherRouter/App.vue'),
          children: [
            {
              path: '', 
              name: 'home',
              component: () => import('../components/subject/weatherRouter/WeatherHomeView.vue'),
            },
            {
              path: 'about', 
              name: 'about',
              component: () => import('../components/subject/weatherRouter/WeatherAboutView.vue'),
            },
            {
              path: 'detail/:cityId',
              name: 'detail',
              component: () => import('../components/subject/weatherRouter/WeatherDetailView.vue'),
            },
          ]
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
})

export default router