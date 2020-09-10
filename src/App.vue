<template>
  <div id="app">
    <MainNav />
    <Hero />
    <BestGames />
    <Jackpots />
    <Banner v-bind="banner1" />
    <Tournaments />
    <Promotions />
    <Questions />
    <Banner v-bind="banner2" />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import Hero from '@/components/Hero.vue';
import BestGames from '@/components/BestGames.vue';
import Jackpots from '@/components/Jackpots.vue';
import Tournaments from '@/components/Tournaments.vue';
import Promotions from '@/components/Promotions.vue';
import Questions from '@/components/Questions.vue';
import Banner from '@/components/Banner.vue';
import Partners from '@/components/Partners.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    MainNav,
    Hero,
    BestGames,
    Jackpots,
    Tournaments,
    Promotions,
    Questions,
    Banner,
    Partners,
    Footer,
  },
  data() {
    return {
      banner1: {
        image: 'banner1.png',
        imageMobile: 'banner1_mobile.png',
        title: 'Live Games in <span class="Colored">Vegaswinner Casino</span>',
        text: 'Hit the tables and play your cards on the felt in our state-of-the-art live casino. Get all the casino action from the comfort of your own home.',
        btnText: 'Play now',
      },
      banner2: {
        image: 'banner2.png',
        imageMobile: 'banner2_mobile.png',
        title: '50% Second Deposit Bonus',
        bonus: '€100 + 150 Free spins',
        text: 'If you’re looking for over 2000 unique game titles with fun features and different payouts, you’ve come to the right place.',
        btnText: 'Get bonus',
      },
    };
  },
};
</script>

<style lang="scss">
:root {
  --color-main1: #F68741;
  --color-main2: #8C75FA;
  --color-main3: #FFA11D;
  --color-faded: rgba(255, 255, 255, 0.5);
  --color-more-faded: rgba(255, 255, 255, 0.2);
  --color-text-main: #fff;
  --color-text-ghost: #9DA3B4;
  --color-border-ghost: #272B5F;
  --color-bg: rgba(39, 43, 95, 0.2);
  --color-bg-nav: #151841;
}
</style>
