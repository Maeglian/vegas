<template>
  <!-- eslint-disable max-len -->
  <section class="Hero">
    <div class="Hero-Slider">
      <VueSlider v-bind="options">
        <div class="Hero-Item">
          <picture class="Hero-Image">
            <source media="(max-width: 960px)" :srcset="require('@/assets/img/hero-bg-joker_960.png')">
            <source media="(max-width: 760px)" :srcset="require('@/assets/img/hero-bg-joker_768.png')">
            <source media="(max-width: 460px)" :srcset="require('@/assets/img/hero-bg-joker_mobile.png')">
            <img src="@/assets/img/hero-bg-joker.jpg" alt="">
          </picture>
          <div class="Hero-Content">
            <div class="Title Title--type-h1 Hero-Title">
              Number one place to have fun!
            </div>
            <p class="Hero-Text">
              Make first deposit now and get 100%<br/>
              up to <span class="Colored Hero--colored">€100 + 55 Free  Spins</span>
            </p>
            <button class="Btn Btn--color Hero-Btn">
              Deposit now
            </button>
          </div>
        </div>
        <div class="Hero-Item">
          <div class="Hero-Image">
            <img src="@/assets/img/hero-bg.jpg" alt="">
          </div>
          <div class="Hero-Content">
            <div class="Title Title--type-h1 Hero-Title">
              Number one place to have fun!
            </div>
            <p class="Hero-Text">
              Make first deposit now and get 100%<br/>
              up to <span class="Colored Hero--colored">€100 + 55 Free  Spins</span>
            </p>
            <button class="Btn Btn--color Hero-Btn">
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

export default {
  name: 'Hero.vue',
  components: {
    VueSlider,
  },
  data() {
    return {
      options: {
        items: 1,
        loop: true,
        dots: true,
      },
      slides: [
        {
          bg: 'hero-bg.jpg',
          title: 'Number one place to have fun!',
          text: `Make first deposit now and get 100%<br/>
                up to <span class="Colored Hero--colored">€100 + 55 Free  Spins</span>`,
          btnText: 'Deposit now',
        },
        {
          bg: 'hero-bg.jpg',
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
  margin-top: -75px;
  margin-bottom: 30px;
  padding-left: 0;
  padding-right: 0;

  @media(max-width: $screen-s) {
    margin-bottom: 55px;
  }

  &-Item {
    position: relative;
  }

  &-Content {
    position: absolute;
    top: 183px;
    left: 16px;
    max-width: 40%;
    text-align: left;

    @media(max-width: $screen-l) {
      max-width: 50%;
      top: 159px;
    }

    @media(max-width: $screen-m) {
      max-width: 70%;
      top: 124px;
    }

    @media(max-width: $screen-s) {
      max-width: 100%;
      position: relative;
      top: initial;
      left: initial;
      margin-top: -130px;
      text-align: center;
    }
  }

  &-Image {
    display: inline-block;

    @media(max-width: $screen-s) {
      height: 454px;
      overflow: hidden;
    }
  }

  &-Title {
    margin-bottom: 36px;

    @media(max-width: $screen-m) {
      margin-bottom: 26px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 19px;
    }
  }

  &-Text {
    margin-bottom: 53px;
    font-size: 22px;
    line-height: 1.37;
    color: var(--color-text-main);

    @media(max-width: $screen-l) {
      margin-bottom: 35px;
      font-size: 18px;
    }

    @media(max-width: $screen-m) {
      margin-bottom: 28px;
    }

    @media(max-width: $screen-s) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .v_slider__dots {
    position: relative;
    margin-top: -120px;
    z-index: 1;

    @media(max-width: $screen-l) {
      display: none;
    }
  }
}
</style>
