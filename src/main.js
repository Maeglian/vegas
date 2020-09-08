import '@/styles/main.scss';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import { Plugin } from 'vue-fragment';
import App from './App.vue';
import store from './store';

Vue.use(VModal);
Vue.use(Plugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.prototype.$skin = 'VegasWinner';
