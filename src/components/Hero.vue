<template>
  <section class="Hero">
    <div class="Hero-Slider">
      <VueSlider v-bind="options">
        <div class="Hero-Item">
          <div class="Hero-Image">
            <img src="@/assets/img/hero-bg.jpg" alt="">
          </div>
          <div class="Hero-Title">
            <div class="Title Title--type-h1">
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
          <div class="Hero-Title">
            <div class="Title Title--type-h1">
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
          <div class="Hero-Title">
            <div class="Title Title--type-h1">
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
  padding-left: 0;
  padding-right: 0;

  @media(max-width: $screen-l) {
    margin-bottom: 40px;
  }

  @media(max-width: $screen-m) {
    margin-bottom: 30px;
  }

  @media(max-width: $screen-s) {
    margin-bottom: 0;
  }

  &-Item {
    position: relative;
  }

  &-Image {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 16px);
    height: 100%;

    @media(max-width: $screen-l) {
      object-position: top right;
    }

    @media(max-width: $screen-s) {
      width: 100%;
      height: 85%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top right;

      @media(max-width: $screen-l) {
        object-position: top right;
      }
    }
  }

  &-Title {
    position: relative;
    max-width: 40%;
    margin-top: 183px;
    margin-bottom: 174px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: left;

    @media(max-width: $screen-l) {
      max-width: 50%;
      margin-top: 174px;
    }

    @media(max-width: $screen-m) {
      max-width: 50%;
      margin-top: 107px;
      margin-bottom: 121px;
    }

    @media(max-width: $screen-s) {
      max-width: 100%;
      margin-top: 332px;
      margin-bottom: 55px;
      text-align: center;
    }
  }

  &-Text {
    margin-top: 26px;
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-text-main);

    @media(max-width: $screen-l) {
      margin-top: 20px;
      margin-bottom: 38px;
    }

    @media(max-width: $screen-m) {
      margin-bottom: 28px;
    }

    @media(max-width: $screen-s) {
      margin-top: 4px;
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
