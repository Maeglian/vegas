<template>
  <section class="Tournaments">
    <div class="Title Title--type-h2 Title--center">
      Exciting tournaments
    </div>
    <div class="Tournaments-Slider">
      <VueSlider v-bind="options">
        <a class="Tournaments-Item" href="#">
          <div class="Banner">
            <picture class="Banner-Image Tournaments-Image">
              <source media="(max-width: 320px)" srcset="@/assets/img/tournaments_320.png">
              <img src="@/assets/img/tournaments.png" alt="">
            </picture>
            <div class="Tournaments-Content Banner-Content Banner-Content--row">
              <div class="Tournaments-LeftSide Banner-LeftSide">
                <div class="Banner-Text">
                  <div class="Title Title--type-h3 Title--color1 Banner-Title">
                    Sign up & win
                  </div>
                  <div class="Banner-Lead">
                    Weekly in a new race
                  </div>
                  <div class="Title Title--type-h4 Banner-Weekly">
                    € 10.000 + 55 Free Spins
                  </div>

                </div>
                <div class="Banner-GhostText">
                  Time left until finish
                </div>
                <Counter className="Banner-Counter"/>
              </div>
              <button class="Btn Btn--color Banner-Btn">
                Play now
              </button>
            </div>
          </div>
        </a>
      </VueSlider>
    </div>
  </section>
</template>

<script>
import Counter from '@/components/Counter.vue';
import VueSlider from '@/components/Slider.vue';

export default {
  name: 'Tournaments',
  components: {
    Counter,
    VueSlider,
  },
  data() {
    return {
      options: {
        items: 1,
        loop: true,
        dots: true,
      },
    };
  },
};
</script>

<style lang="scss">
.Tournaments {
  margin-bottom: 110px;
  padding-left: 0;
  padding-right: 0;

  &-Image {
    height: 450px;

    @media(max-width: $screen-l) {
      height: 420px;
    }

    @media(max-width: $screen-m) {
      height: 340px;
    }

    @media(max-width: $screen-s) {
      height: 360px;
    }
  }

  &-Content {
    top: 103px;
    right: 14.66%;

    @media(max-width: $screen-s) {
      top: 27px;
      left:18px;
      right: auto;
    }
  }

  &-LeftSide {
    margin-bottom: 19px;
  }
}
</style>
