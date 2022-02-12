import VueRouter from 'vue-router'
import Product from './components/product/Product.vue'
import Homepage from './components/body/Homepage.vue'
import ContacctStaff from './components/contact_staff/ContactStaff.vue'

const routes = [
    {path:'/', component:Homepage},
    {path:'/product', component:Product},
    {path:'/contact', component:ContacctStaff}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
 
