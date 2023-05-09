import { createApp } from 'vue'
import './style.css'
import '..\\node_modules\\github-calendar\\dist\\github-calendar-responsive.css'

import App from './App.vue'
import * as VueRouter from 'vue-router'
// @ts-ignore
import VueWriter from "vue-writer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas, far, fab);


const routes = [
    {
        path: '/',
        component: () => import('./components/Home.vue'),
        meta: {
            title: 'Home',
            icon: 'home',
            animation: 'group-hover:animate-heartBeat'
        }
    },
    {
        path: '/about',
        component: () => import('./components/Me/AboutCard.vue'),
        meta: {
            title: 'About',
            icon: 'user',
            animation: 'group-hover:animate-bounceIn'
        }
    },
    {
        path: '/resume',
        component: () => import('./components/resume/ResumeCard.vue'),
        meta: {
            title: 'Resume',
            icon: 'file-alt',
            animation: 'group-hover:animate-bounce'
        }
    },
    {
        path: '/play',
        component: () => import('./components/play/PlayDashboard.vue'),
        meta: {
            title: 'Play',
            icon: 'gamepad',
            animation: 'group-hover:animate-wiggle'
        }
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.use(VueWriter)
app.component('RIcon', FontAwesomeIcon)
app.mount('#app')
