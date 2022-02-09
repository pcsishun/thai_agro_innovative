import VueRouter from 'vue-router'
import Product from './components/product/Product.vue'
import Homepage from './components/body/Homepage.vue'

const routes = [
    {path:'/', component:Homepage},
    {path:'/product', component:Product}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
 
