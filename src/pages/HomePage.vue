<template>
  <fragment>
    <Hero />
    <BestGames />
    <Jackpots />
    <Banner v-bind="banner1" />
    <Tournaments />
    <Promotions />
    <Questions />
    <Banner v-bind="banner2" />
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
        image460: 'banner1_460.png',
        image590: 'banner1_590.png',
        image768: 'banner1_768.png',
        image960: 'banner1_960.png',
        image1248: 'banner1_1248.png',
        image: 'banner1_1920.png',
        title: 'Live Games<br/> in <span class="Colored">Vegaswinner Casino</span>',
        text: 'Hit the tables and play your cards on the felt in our state-of-the-art live casino. Get all the casino action from the comfort of your own home.',
        btnText: 'Play now',
      },
      banner2: {
        image460: 'banner2_460.png',
        image590: 'banner2_590.png',
        image768: 'banner2_768.png',
        image960: 'banner2_960.png',
        image1248: 'banner2_1248.png',
        image: 'banner2_1248.png',
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
