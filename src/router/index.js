import Vue from 'vue';
import VueRouter from 'vue-router';

const HomePage = () => import(/* webpackChunkName: "homePage" */ '@/pages/HomePage.vue');
const BonusPolicy = () => import(/* webpackChunkName: "bonusPolicy" */ '@/pages/BonusPolicy.vue');
const AboutUs = () => import(/* webpackChunkName: "aboutUs" */ '@/pages/AboutUs.vue');
const VIPClub = () => import(/* webpackChunkName: "vipClub" */ '@/pages/VIPClub.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/bonus-policy',
    name: 'BonusPolicy',
    component: BonusPolicy,
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/vip',
    name: 'VIPClub',
    component: VIPClub,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
