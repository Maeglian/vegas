import Vue from 'vue';
import VueRouter from 'vue-router';

const HomePage = () => import(/* webpackChunkName: "homePage" */ '@/pages/HomePage.vue');
const BonusPolicy = () => import(/* webpackChunkName: "bonusPolicy" */ '@/pages/BonusPolicy.vue');
const PrivacyPolicy = () => import(/* webpackChunkName: "privacyPolicy" */ '@/pages/PrivacyPolicy.vue');
const AboutUs = () => import(/* webpackChunkName: "aboutUs" */ '@/pages/AboutUs.vue');
const VIPClub = () => import(/* webpackChunkName: "vipClub" */ '@/pages/VIPClub.vue');
const page404 = () => import(/* webpackChunkName: "404" */ '@/pages/404.vue');
const Faq = () => import(/* webpackChunkName: "faqPage" */ '@/pages/FaqPage.vue');
const PromotionsPage = () => import(/* webpackChunkName: "promotionsPage" */ '@/pages/PromotionsPage.vue');
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
    props: {
      url: 'https://www.playeroffers.com/api.php?sid=7f73ab615f196b7f63b49fbdbbee82eb&type=bonus_policy&lang=en',
    },
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    props: {
      url: 'https://www.playeroffers.com/api.php?sid=7f73ab615f196b7f63b49fbdbbee82eb&type=privacy_policy&lang=en',
    },
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
    props: {
      url: 'https://service.safe-communication.com/feeds/payments/single?skin=VegasWinner&lang=en',
    },
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
    props: {
      url: 'https://www.playeroffers.com/api.php?sid=7f73ab615f196b7f63b49fbdbbee82eb&type=terms_and_conditions&lang=en',
    },
  },
  {
    path: '/responsible-gamings',
    name: 'ResponsibleGamings',
    component: ResponsibleGamings,
    props: {
      url: 'https://www.playeroffers.com/api.php?sid=7f73ab615f196b7f63b49fbdbbee82eb&type=responsible_gaming&lang=en',
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '/promotions',
    name: 'PromotionsPage',
    component: PromotionsPage,
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
