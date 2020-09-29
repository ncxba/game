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
import Myconsultation from "@/components/myconsultation"
import AdvisoryDetail from "@/components/advisoryDetail"
import AdvisoryDetail1 from "@/components/advisoryDetail1"
import AdvisoryDetail2 from "@/components/advisoryDetail2"
import AdvisoryDetail3 from "@/components/advisoryDetail3"
import AdvisoryDetail4 from "@/components/advisoryDetail4"
import AdvisoryDetail5 from "@/components/advisoryDetail5"
import QuestionDetails from "@/components/questionDetails"
import Demo from "@/components/demo"
import Icons from "@/components/icons"

Vue.use(Router)


export default new Router({
  routes: [
    /*{
      path: '/logo',
      name: 'logo',
      component: Logo
    },*/
    /*{
      path: '/message',
      name: 'message',
      component: Message
    },*/
    /*{
      path: '/bind',
      name: 'bind',
      component: Bind
    },*/
    /*{
      path: '/cash-coupon',
      name: 'cash-coupon',
      component: Coupon
    },*/
    /*{
      path: '/bind2',
      name: 'bind2',
      component: Bind2
    },*/
    /*{
      path: '/change-password',
      name: 'change-password',
      component: Changepassword
    },*/
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


      ]
    },
    /*{
      path: '/login_phone',
      name: 'login_phone',
      component: LoginPhone
    },*/
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
    /*{
      path: '/prevent',
      name: 'prevent',
      component: Prevent
    },*/
    /*{
      path: '/prevent-detail/:uid',
      name: 'prevent-detail',
      component: PreventDetail
    },*/
    /*{
      path: '/recharge',
      name: 'recharge',
      component: Recharge
    },*/
    /*{
      path: '/recharge-center',
      name: 'recharge-center',
      component: RechargeCenter
    },*/
    /*{
      path: '/service',
      name: 'service',
      component: Service,
    },*/
    /*{
      path: '/take-note',
      name: 'take-note',
      component: TakeNote
    },*/
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
    /*{
      path: '/subaccount',
      name: 'subaccount',
      component: Subaccount
    },*/
    /*{
      path: '/prevent2',
      name: 'prevent2',
      component: Prevent2
    },*/
    {
      path: '/problemSolved',
      name: 'problemSolved',
      component: ProblemSolved
    },
    {
      path: '/unresolvedPro',
      name: 'unresolvedPro',
      component: UnresolvedPro
    },
    {
      path: '/myconsultation',
      name: 'myconsultation',
      component: Myconsultation
    },
    {
      path: '/advisoryDetail',
      name: 'advisoryDetail',
      component: AdvisoryDetail
    },
    {
      path: '/questionDetails',
      name: 'questionDetails',
      component: QuestionDetails
    },
    {
      path: '/advisoryDetail1',
      name: 'advisoryDetail1',
      component: AdvisoryDetail1
    },
    {
      path: '/advisoryDetail2',
      name: 'advisoryDetail2',
      component: AdvisoryDetail2
    },
    {
      path: '/advisoryDetail3',
      name: 'advisoryDetail3',
      component: AdvisoryDetail3
    },
    {
      path: '/advisoryDetail4',
      name: 'advisoryDetail4',
      component: AdvisoryDetail4
    },
    {
      path: '/advisoryDetail5',
      name: 'advisoryDetail5',
      component: AdvisoryDetail5,
    },
    {
      path: '/',
      name: 'demo',
      component: Demo,
      children: [
        {
          path: '/',
          redirect:'/logo'
        },
        {
          path: '/logo',
          name: 'logo',
          component: Logo
        },
        {
          path: '/login_phone',
          name: 'login_phone',
          component: LoginPhone
        },
        {
          path: '/subaccount/:token/',
          name: 'subaccount',
          component: Subaccount
        },
        {
          path: '/recharge',
          name: 'recharge',
          component: Recharge
        },
        {
          path: '/cash-coupon',
          name: 'cash-coupon',
          component: Coupon
        },
        {
          path: '/recharge-center',
          name: 'recharge-center',
          component: RechargeCenter
        },
        {
          path: '/take-note',
          name: 'take-note',
          component: TakeNote
        },
        {
          path: '/change-password/:token',
          name: 'change-password',
          component: Changepassword
        },
        {
          path: '/bind',
          name: 'bind',
          component: Bind
        },
        {
          path: '/bind2',
          name: 'bind2',
          component: Bind2
        },
        {
          path: '/prevent',
          name: 'prevent',
          component: Prevent
        },
        {
          path: '/prevent-detail/:uid',
          name: 'prevent-detail',
          component: PreventDetail
        },
        {
          path: '/questions',
          name: 'questions',
          component: Questions
        },

      ]
    },
    {
      path: '/icons',
      name: 'index',
      component: Icons
    }

  ]
})

