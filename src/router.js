import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CSet from './views/Set.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'home',
      component: Home,
    },
    {
      path: '/set',
      name: 'set',
      component: CSet,
    },
    {
      path: '/word/new',
      name: 'new-word',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CardData.vue'),
    },
    {
      path: '/word/update',
      name: 'update-word',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CardData.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LoginPage.vue'),
    },
  ],
});
