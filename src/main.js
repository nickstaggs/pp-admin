import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './router/index.js'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})
