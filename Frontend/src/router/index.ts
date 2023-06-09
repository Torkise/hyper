import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeeViewVue from '@/views/EmployeeView.vue'
import ProjectViewVue from '@/views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/featured',
      name: 'featured',
      component: () => import('../views/FeaturedProjectsView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: ProjectViewVue
    },
    {
      path: '/areas',
      name: 'areas',
      component: () => import('../views/AreasView.vue')
    },
    {
      path: '/areas/:id',
      name: 'area',
      component: () => import('../views/AreaView.vue')
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('../views/EmployeesView.vue')
    },
    {
      path: '/employees/:id',
      name: 'employee',
      component: EmployeeViewVue

    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServiceView.vue')
    }
  ]
})

export default router
