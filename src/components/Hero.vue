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
    };
  },
};
</script>

<style lang="scss">
.Hero {
  margin-top: -160px;
  padding: 18px 16px;

  &-Item {
    position: relative;
  }

  &-Title {
    position: absolute;
    top: 180px;
    left: 0;
    max-width: 40%;
    margin-top: 40px;
    margin-bottom: 157px;

    @media(max-width: 768px) {
      max-width: 50%;
    }
  }

  &-Text {
    margin-top: 26px;
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-text-main);
  }
}
</style>
