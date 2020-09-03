import '@/styles/main.scss';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App.vue';

Vue.use(VModal);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
