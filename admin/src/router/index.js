import { createRouter, createWebHistory } from 'vue-router'
// import adminhome from '../views/adminhome.vue'
import adminsignin from '@/views/signin.vue'
import dashboard from '@/views/dashboard.vue'
import Adminhome from '@/views/adminhome.vue'
import adminorder from "@/views/adminorder.vue"
import addproduct
 from "@/views/addproduct.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  // didi the nested routing
    {
      path: '/adminsignin',
      name: 'adminsignin',
      component: adminsignin
    },
    {
      path: '/',
      component: dashboard,
      children:[
        {
          path: 'adminhome',
          component:Adminhome,
          
            
          
        },
        {
          path: 'order',
          component:adminorder
        },
        {
          path: 'addproduct',
          component:addproduct
        }
        
      ]
    }
 
  ]
})

export default router
