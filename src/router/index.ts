import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CoinsView from '../views/CoinsView.vue';
import CoinView from '../views/CoinView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/coins',
    name: 'coins',
    component: CoinsView
  },
  {
    path: '/coins/:id',
    name: 'coin',
    component: CoinView
  },
  {
    path: '/news',
    name: 'news',
    component: CoinsView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link'
});

export default router;
