import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';

const routes = [
    {
        path:'/',
        component: Home
    }   
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;