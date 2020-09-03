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

* {
  box-sizing: border-box;
}

::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #10133A;
}

section {
  max-width: 1248px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}

p {
  font-weight: 300;
  color: var(--color-text-ghost);
}

button {
  background: none;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
}

.Title {
  font-weight: 800;
  color: var(--color-text-main);
  text-transform: capitalize;

  &--type-h1 {
    font-size: 48px;
    line-height: 118%;

    @media (max-width: $screen-l) {
      font-size: 38px;
    }

    @media (max-width: $screen-s) {
      font-size: 24px;
    }
  }

  &--type-h2 {
    font-size: 40px;
    line-height: 118%;

    @media (max-width: $screen-l) {
      font-size: 30px;
    }

    @media (max-width: $screen-s) {
      font-size: 24px;
    }
  }

  &--type-h3 {
    font-size: 30px;
    line-height: 118%;
  }

  &--type-h4 {
    font-size: 24px;
    line-height: 118%;
  }

  &--color1 {
    color: var(--color-main1);
  }

  &--color2 {
    color: var(--color-main2);
  }

  &--center {
    text-align: center;
  }
}

.Colored {
  color: var(--color-main1);
}

.Btn {
  display: inline-block;
  padding: 20px 30px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #8C75FA;
  background: none;
  border: 1px solid #8C75FA;
  border-radius: 8px;
  cursor: pointer;

  &--tab {
    display: inline-flex;
    align-items: center;
    padding: 20px 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 118%;
    text-transform: uppercase;
    color: var(--color-text-ghost);
    border-color: var(--color-border-ghost);

    .Icon {
      margin-right: 12px;
      stroke: var(--color-text-ghost);
      fill: var(--color-text-ghost);
    }

    &.Btn--active {
      color: var(--color-main2);

      .Icon {
        stroke: var(--color-main2);
        fill: var(--color-main2);
      }
    }
  }

  &--link {
    padding: 13px 29px;

    @media(max-width: $screen-m) {
      padding: 13px 23px;
    }

    @media(max-width: $screen-s) {
      padding: 8px 12px;
      font-size: 12px;
    }
  }

  &--link:hover {
    border: none;
    color: var(--color-text-main);
    text-transform: uppercase;
    text-decoration: none;
  }

  &--color {
    color: #fff;
    background: linear-gradient(87.21deg, #FFA41D 1.01%, #FF8F22 48.07%, #FF7B27 99.21%);
    border: none;
  }
}

.Link {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.24;
  color: var(--color-text-main);
  text-transform: uppercase;
  text-decoration: none;
}

.Modal {
  background: transparent;
}
</style>
