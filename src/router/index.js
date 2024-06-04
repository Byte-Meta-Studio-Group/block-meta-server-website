import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Minc.vue'
import Rank from '../components/Rank.vue'
import Ban from '../components/Ban.vue'
//import About from '../components/About.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/rank', component: Rank },
    { path: '/ban', component: Ban }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router