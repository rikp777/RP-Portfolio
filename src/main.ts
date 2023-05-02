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
    { path: '/', component: () => import('./components/Home.vue')},
    { path: '/about', component: () => import('./components/Me/AboutCard.vue')},
    { path: '/resume', component: () => import('./components/resume/ResumeCard.vue')},
    { path: '/play', component: () => import('./components/play/PlayDashboard.vue')},
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
