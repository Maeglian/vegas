<template>
  <fragment>
    <Hero />
    <BestGames />
    <Jackpots />
    <Banner v-bind="banner1" />
    <Tournaments />
    <Promotions />
    <Questions />
    <Banner class="Banner--bottom" v-bind="banner2" />
  </fragment>
</template>

<script>
import Hero from '@/components/Hero.vue';
import BestGames from '@/components/BestGames.vue';
import Jackpots from '@/components/Jackpots.vue';
import Tournaments from '@/components/Tournaments.vue';
import Promotions from '@/components/Promotions.vue';
import Questions from '@/components/Questions.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'HomePage',
  components: {
    Hero,
    BestGames,
    Jackpots,
    Tournaments,
    Promotions,
    Questions,
    Banner,
  },
  data() {
    return {
      banner1: {
        image: 'banner1_1920.png',
        image1248: 'banner1.png',
        imageMobile: 'banner1_mobile.png',
        title: 'Live Games<br/> in <span class="Colored">Vegaswinner Casino</span>',
        text: 'Hit the tables and play your cards on the felt in our state-of-the-art live casino. Get all the casino action from the comfort of your own home.',
        btnText: 'Play now',
      },
      banner2: {
        image: 'banner2.png',
        image1248: 'banner2.png',
        imageMobile: 'banner2_mobile.png',
        title: '50% Second Deposit Bonus',
        bonus: '€100 + 150 Free spins',
        text: 'If you’re looking for over 2000 unique game titles with fun features and different payouts, you’ve come to the right place.',
        btnText: 'Get bonus',
        contain: true,
      },
    };
  },
};
</script>

<style scoped>

</style>
