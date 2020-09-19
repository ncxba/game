import Vue from 'vue'
import Router from 'vue-router'
 // import HelloWorld from '@/components/HelloWorld'
import Logo from '@/components/logo'
import Message from "@/components/message"
import Bind from "@/components/bind"
import Coupon from "@/components/cash-coupon"
import Bind2 from "@/components/bind2"
import Changepassword from "@/components/change-password"
import Left from "@/components/left"
import LoginPhone from "@/components/login_phone"
import Notice from "@/components/notice"
import Paysucceed from "@/components/paysucceed"
import Prevent from "@/components/prevent"
import PreventDetail from "@/components/prevent-detail"
import Recharge from "@/components/recharge"
import RechargeCenter from "@/components/recharge-center"
import Service from "@/components/service"
import TakeNote from "@/components/take-note"
import User from "@/components/user"
import Welfare from "@/components/welfare"
import Subaccount from "@/components/subaccount"
import Prevent2 from "@/components/prevent2"
import Questions from "@/components/questions"
import ProblemSolved from "@/components/problemSolved"
import UnresolvedPro from "@/components/unresolvedPro"

Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'logo',
      component: Logo
    },
    /*{
      path: '/message',
      name: 'message',
      component: Message
    },*/
    {
      path: '/bind',
      name: 'bind',
      component: Bind
    },
    {
      path: '/cash-coupon',
      name: 'cash-coupon',
      component: Coupon
    },
    {
      path: '/bind2',
      name: 'bind2',
      component: Bind2
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: Changepassword
    },
    {
      path: '/left',
      name: 'left',
      component: Left,
      children:[
        {
          path: '/',
          redirect:'/user'
        },{
          path: '/user',
          component: User
        },
        {
          path: '/welfare',
          name: 'welfare',
          component: Welfare
        },
        {
          path: '/message',
          name: 'message',
          component: Message
        },
        {
          path: '/service',
          name: 'service',
          component: Service,
        },
        {
          path: '/questions',
          name: 'questions',
          component: Questions
        }
      ]
    },
    {
      path: '/login_phone',
      name: 'login_phone',
      component: LoginPhone
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/paysucceed',
      name: 'paysucceed',
      component: Paysucceed
    },
    {
      path: '/prevent',
      name: 'prevent',
      component: Prevent
    },
    {
      path: '/prevent-detail',
      name: 'prevent-detail',
      component: PreventDetail
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: Recharge
    },
    {
      path: '/recharge-center',
      name: 'recharge-center',
      component: RechargeCenter
    },
    /*{
      path: '/service',
      name: 'service',
      component: Service,
    },*/
    {
      path: '/take-note',
      name: 'take-note',
      component: TakeNote
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: Welfare
    },
    {
      path: '/subaccount',
      name: 'subaccount',
      component: Subaccount
    },
    {
      path: '/prevent2',
      name: 'prevent2',
      component: Prevent2
    },
    {
      path: '/problemSolved',
      name: 'problemSolved',
      component: ProblemSolved
    },
    {
      path: '/unresolvedPro',
      name: 'unresolvedPro',
      component: UnresolvedPro
    }
  ]
})
