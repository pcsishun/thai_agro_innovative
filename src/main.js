import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueScrollTo)

new Vue({
  data:{
    state: store.state
  },
  render: h => h(App),
}).$mount('#app')
