import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/commodyList'
import cartList from "../views/cartList";
import address from "../views/address";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path:'/cart',
      name: 'cartList',
      component: cartList
    },
    {
      path:'/address',
      name: 'address',
      component: address
    }
  ]
})
