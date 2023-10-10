import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CoinsView from '../views/CoinsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'coins',
    component: CoinsView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link'
});

export default router;
