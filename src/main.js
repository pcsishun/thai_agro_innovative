import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import store from './store'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueScrollTo)

new Vue({
  data:{
    state: store.state
  },
  render: h => h(App),
  router
}).$mount('#app')
