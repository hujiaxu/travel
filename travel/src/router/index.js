import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import City from '../pages/city/City.vue'
// import Header from '../pages/Home/components/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/city',
      component: City
    }
  ]
})
