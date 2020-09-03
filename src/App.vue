<template>
  <div id="app">
    <MainMenu />
    <Hero />
    <BestGames />
    <Jackpots />
    <Tournaments />
    <Questions />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import Hero from '@/components/Hero.vue';
import BestGames from '@/components/BestGames.vue';
import Jackpots from '@/components/Jackpots.vue';
import Tournaments from '@/components/Tournaments.vue';
import Questions from '@/components/Questions.vue';
import Partners from '@/components/Partners.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
    Hero,
    BestGames,
    Jackpots,
    Tournaments,
    Questions,
    Partners,
    Footer,
  },
};
</script>

<style lang="scss">
:root {
  --color-main1: #F68741;
  --color-main2: #8C75FA;
  --color-faded: rgba(255, 255, 255, 0.5);
  --color-more-faded: rgba(255, 255, 255, 0.2);
  --color-text-main: #fff;
  --color-text-ghost: #9DA3B4;
  --color-border-ghost: #272B5F;
  --color-bg: rgba(39, 43, 95, 0.2);
}
</style>
