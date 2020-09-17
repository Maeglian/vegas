import Vue from 'vue';
import VueRouter from 'vue-router';

const HomePage = () => import(/* webpackChunkName: "homePage" */ '@/pages/HomePage.vue');
const BonusPolicy = () => import(/* webpackChunkName: "bonusPolicy" */ '@/pages/BonusPolicy.vue');
const PrivacyPolicy = () => import(/* webpackChunkName: "privacyPolicy" */ '@/pages/PrivacyPolicy.vue');
const AboutUs = () => import(/* webpackChunkName: "aboutUs" */ '@/pages/AboutUs.vue');
const VIPClub = () => import(/* webpackChunkName: "vipClub" */ '@/pages/VIPClub.vue');
const page404 = () => import(/* webpackChunkName: "404" */ '@/pages/404.vue');
const Faq = () => import(/* webpackChunkName: "faqPage" */ '@/pages/FaqPage.vue');
const PaymentMethods = () => import(/* webpackChunkName: "paymentMethods" */ '@/pages/PaymentMethods.vue');
const PaymentOptions = () => import(/* webpackChunkName: "paymentOptions" */ '@/pages/PaymentOptions.vue');
const TermsConditions = () => import(/* webpackChunkName: "termsConditions" */ '@/pages/TermsConditions.vue');
const ResponsibleGamings = () => import(/* webpackChunkName: "responsibleGamings" */ '@/pages/ResponsibleGamings.vue');

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
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
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
    path: '/terms-and-conditions',
    name: 'TermsConditions',
    component: TermsConditions,
  },
  {
    path: '/responsible-gamings',
    name: 'ResponsibleGamings',
    component: ResponsibleGamings,
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
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
