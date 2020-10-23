<template>
  <div id="app">
    <MainNav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import Footer from '@/components/Footer.vue';
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    MainNav,
    Footer,
  },
  created() {
    this.getUserCountry();
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  },
  methods: {
    ...mapMutations(['setWidth']),
    ...mapActions(['getUserCountry']),
    updateWidth() {
      this.setWidth(window.innerWidth);
    },
  },
};
</script>

<style lang="scss">
:root {
  --color-main1: #FE863A;
  --color-main2: #8C75FA;
  --color-main3: #FFA11D;
  --color-faded: rgba(255, 255, 255, 0.5);
  --color-more-faded: rgba(255, 255, 255, 0.4);
  --color-most-faded: rgba(255, 255, 255, 0.2);
  --color-text-main: #fff;
  --color-text-ghost: #9DA3B4;
  --color-border-ghost: #272B5F;
  --color-bg: rgba(39, 43, 95, 0.2);
  --color-bg-darker: rgba(39, 43, 95, 0.5);
  --color-bg-nav: #151841;
  --color-form: #1E1A46;
  --color-body: #10133A;
}
</style>
