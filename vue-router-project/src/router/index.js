import Vue from 'vue'
import Router from 'vue-router'

import OutMai from '../components/OutMai'
import FindMore from '../components/FindMore'
import Order from '../components/Order'
import Mine from '../components/Mine'
import PinPaiPage from '../components/FindMore_components/PinPaiPage'
import ListPinPaiPage from '../components/FindMore_components/ListPinPaiPage'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/outmai',name: 'outmai',component: OutMai},
    {path: '/findmore',name: 'findmore',component:FindMore},
    
    
    {path: '/findmore/pinpaipage',name: 'pinpaipage',component:PinPaiPage},
    {path: '/findmore/pinpaipage/listpinpaipage',name: 'listpinpaipage',component:ListPinPaiPage},
    
    {path: '/order',name: 'order',component: Order},
    {path: '/mine',name: 'mine',component: Mine},
    {path: '/',redirect:'/outmai'},
    {path: '*',redirect:'/outmai'}
  ]
})
