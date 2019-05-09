import Vue from 'vue'
import Router from 'vue-router'

import Form from '@/components/Form'
import About from '@/components/About'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },        
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/form',
            name: 'Form',
            component: Form
        }
    ]
})