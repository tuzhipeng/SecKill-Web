import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Order = () => import('views/order/Order')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const UserInfo = ()=> import('views/profile/UserInfo')
const Detail = ()=>import('views/detail/Detail')
// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/cart',
    component: Cart
  },
  // 登录页面
  {
    path: '/profile',
    component: Profile
  },
  // 个人信息页
  {
    path:'/userInfo',
    component: UserInfo
  },
  {
    path:'/detail',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
