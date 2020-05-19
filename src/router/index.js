import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const IndexPage =()=> import('../views/IndexPage');

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'IndexPage',
            component: IndexPage,
            meta: {}
        }
    ]
})