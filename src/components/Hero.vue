<template>
  <!-- eslint-disable max-len -->
  <section class="Hero">
    <div class="Hero-Slider">
      <VueSlider v-bind="options">
        <div class="Hero-Item">
          <picture class="Hero-Image">
            <source media="(max-width: 460px)" :srcset="require('@/assets/img/hero-bg-joker_460.png')">
            <source media="(max-width: 589px)" :srcset="require('@/assets/img/hero-bg-joker_590.png')">
            <source media="(max-width: 768px)" :srcset="require('@/assets/img/hero-bg-joker_768.png')">
            <source media="(max-width: 960px)" :srcset="require('@/assets/img/hero-bg-joker_960.png')">
            <source media="(max-width: 1248px)" :srcset="require('@/assets/img/hero-bg-joker_1248.png')">
            <img srcset="@/assets/img/hero-bg-joker_1920.png" loading="lazy" alt="">
          </picture>
          <div class="Hero-Content">
            <div class="Title Title--type-h1 Hero-Title">
              Number one place<br/> to have fun!
            </div>
            <p class="Hero-Text">
              Make first deposit now and get 100%<br/>
              up to <span class="Colored Hero--colored">€100 + 100 Free Spins</span>
            </p>
            <button class="Btn Btn--color Hero-Btn" @click="openLogin()">
              Deposit now
            </button>
          </div>
        </div>
        <div class="Hero-Item">
          <div class="Hero-Image">
            <picture class="Hero-Image">
              <source media="(max-width: 460px)" :srcset="require('@/assets/img/hero-bg-wolf_460.png')">
              <source media="(max-width: 589px)" :srcset="require('@/assets/img/hero-bg-wolf_590.png')">
              <source media="(max-width: 768px)" :srcset="require('@/assets/img/hero-bg-wolf_768.png')">
              <img srcset="@/assets/img/hero-bg-wolf_1248.png" loading="lazy" alt="">
            </picture>
          </div>
          <div class="Hero-Content">
            <div class="Title Title--type-h1 Hero-Title">
              Number one place<br/> to have fun!
            </div>
            <p class="Hero-Text">
              Make first deposit now and get 100%<br/>
              up to <span class="Colored Hero--colored">€100 + 100 Free  Spins</span>
            </p>
            <button class="Btn Btn--color Hero-Btn" @click="openLogin()">
              Deposit now
            </button>
          </div>
        </div>
      </VueSlider>
    </div>
  </section>
</template>

<script>
import VueSlider from '@/components/Slider.vue';
import auth from '@/mixins/auth';

export default {
  name: 'Hero',
  components: {
    VueSlider,
  },
  mixins: [auth],
  data() {
    return {
      options: {
        items: 1,
        loop: true,
        dots: true,
      },
      slides: [
        {
          bg: 'hero-bg-wolf_1248.jpg',
          title: 'Number one place to have fun!',
          text: `Make first deposit now and get 100%<br/>
                up to <span class="Colored Hero--colored">€100 + 55 Free  Spins</span>`,
          btnText: 'Deposit now',
        },
        {
          bg: 'hero-bg-wolf_1248.jpg',
          title: 'Number one place to have fun!',
          text: `Make first deposit now and get 100%<br/>
                up to <span class="Colored Hero--colored">€100 + 55 Free  Spins</span>`,
          btnText: 'Deposit now',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.Hero {
  max-width: 100%;
  width: 100%;
  margin-top: -75px;
  margin-bottom: 55px;
  padding-left: 0;
  padding-right: 0;

  @media(min-width: $screen-l) {
    margin-bottom: 45px;
  }

  @media(min-width: $screen-xl) {
    margin-bottom: 5px;
  }

  &-Item {
    position: relative;
    height: 100%;
    padding-bottom: 60px;
    overflow: hidden;

    @media(min-width: $screen-xs) {
      padding-bottom: 0px;
    }

    @media(min-width: $screen-xl) {
      height: 640px;
    }

    @media(min-width: $screen-xxl) {
      height: 800px;
    }
  }

  &-Content {
    position: absolute;
    max-width: 100%;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 318px / 320px * 100%;
    text-align: center;

    @media(min-width: $screen-s) {
      max-width: 60%;
      left: 16px;
      padding-top: 124px / 768px * 100%;
      text-align: left;
    }

    @media(min-width: $screen-l) {
      max-width: 50%;
    }

    @media(min-width: $screen-xl) {
      left: calc(50% - 608px);
      max-width: 40%;
      padding-top: 183px;
    }
  }

  &-Image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-Title {
    margin-bottom: 19px;

    @media(min-width: $screen-m) {
      margin-bottom: 26px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 36px;
    }
  }

  &-Text {
    margin-bottom: 27px;
    font-size: 14px;
    line-height: 1.37;
    color: var(--color-text-main);

    @media(min-width: $screen-s) {
      font-size: 18px;
    }

    @media(min-width: $screen-l) {
      margin-bottom: 35px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 53px;
      font-size: 22px;
    }
  }

  &-Btn {
    padding: 20px 30px;
    font-size: 16px;

    @media(min-width: $screen-xl) {
      padding: 25px 40px;
      font-size: 18px;
    }
  }

  .v_slider__dots {
    display: none;

    @media(min-width: $screen-xl) {
      position: relative;
      margin-top: -85px;
    }
  }
}
</style>
