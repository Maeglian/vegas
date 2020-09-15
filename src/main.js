import '@/styles/main.scss';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import { Plugin } from 'vue-fragment';
import vSelect from 'vue-select';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(VModal);
Vue.use(Plugin);
Vue.use(vSelect);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.prototype.$skin = 'VegasWinner';
