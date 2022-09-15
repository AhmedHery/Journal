import { createRouter, createWebHistory } from 'vue-router';

import features from '../components/features.vue'
import blog from '../components/blogcomponent.vue'
import support from '../components/supportcomponent.vue'
import login from '../components/logincomponent.vue'
import pricing from '../components/pricingcomponent.vue'

const routes = [
    { path: '/', component: features },
    { path: '/home', component: blog },
    { path: '/about', component: support },
    { path: '/contact', component: login },
    { path: '/dynamic', component: pricing },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;