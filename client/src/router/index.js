import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bags from '@/components/bags.vue'
import Belt from "@/components/belt.vue"
import shoes  from "@/components/shoes.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/contactview.vue')
    },
    {
      path:'/cart',
      name:'cart',
      component: () => import('../views/addtocart.vue')
    },
    {
      path:'/productdisplay',
      name:'productdisplay',
      props:true,
      component: () => import('../views/productdisplay.vue'),
      children:[
        {
          component:Bags,
          path:'bags'

        },
        {
          component:shoes,
          path:'shoes'

        },
        {
          component:Belt,
          path:'belt'

        }
      ]
    },
    {
      path:'/itemdetail/:id',
      name:'itemdetail',
      props:true,
      component: () => import('../views/itemdetail.vue')
    }

  ]
})

export default router
