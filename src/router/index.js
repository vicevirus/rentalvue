import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Car from '@/components/Car'
import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Rent from '@/components/Rent'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import EmailVerification from '@/components/EmailVerification'
import Login from '@/components/Login'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Car',
      name: 'Car',
      component: Car
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/Rent',
      name: 'Rent',
      component: Rent
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/EmailVerification',
      name: 'EmailVerification',
      component: EmailVerification
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    }
  ]
})
