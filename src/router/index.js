import Vue from 'vue';
import VueRouter from 'vue-router';

const HomePage = () => import(/* webpackChunkName: "homePage" */ '@/pages/HomePage.vue');
const BonusPolicy = () => import(/* webpackChunkName: "bonusPolicy" */ '@/pages/BonusPolicy.vue');
const AboutUs = () => import(/* webpackChunkName: "aboutUs" */ '@/pages/AboutUs.vue');
const VIPClub = () => import(/* webpackChunkName: "vipClub" */ '@/pages/VIPClub.vue');
const page404 = () => import(/* webpackChunkName: "404" */ '@/pages/404.vue');
const Faq = () => import(/* webpackChunkName: "faqPage" */ '@/pages/FaqPage.vue');
const PaymentMethods = () => import(/* webpackChunkName: "paymentMethods" */ '@/pages/PaymentMethods.vue');
const PaymentOptions = () => import(/* webpackChunkName: "paymentOptions" */ '@/pages/PaymentOptions.vue');

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
  {
    path: '/payment-methods',
    name: 'PaymentMethods',
    component: PaymentMethods,
  },
  {
    path: '/payment-options',
    name: 'PaymentOptions',
    component: PaymentOptions,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '*',
    component: page404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
