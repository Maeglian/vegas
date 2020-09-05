<template>
  <section class="Tournaments">
    <div class="Title Title--type-h2 Title--center">
      Exciting tournaments
    </div>
    <div class="Tournaments-Slider">
      <VueSlider v-bind="options">
        <a class="Tournaments-Item" href="#">
          <div class="Banner">
            <img src="@/assets/img/tournaments.png" alt="">
            <div class="Banner-Content">
              <div class="Banner-LeftSide">
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
                <div class="Banner-Time">
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
}

.Banner {
  position: relative;

  &-Content {
    position: absolute;
    top: 103px;
    left: 40%;
    display: flex;
    align-items: flex-end;
    text-align: left;
  }

  &-LeftSide {
    margin-right: 47px;
  }

  &-Text {
    margin-bottom: 27px;
  }

  &-Title {
    margin-bottom: 13px;
    font-size: 34px;

    @media(max-width: $screen-m) {
      font-size: 24px;
    }
  }

  &-Lead {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 700;
    line-height: 126.5%;
    text-transform: uppercase;
    color: var(--color-text-main);

    @media(max-width: $screen-m) {
      font-size: 14px;
    }
  }

  &-Weekly {
    text-shadow: 2px 0 2px var(--color-main1),
      0 2px 2px var(--color-main1),
      -2px 0 2px var(--color-main1),
      0 -2px 2px var(--color-main1);

    @media(max-width: $screen-m) {
      font-size: 20px;
    }
  }

  &-Time {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--color-faded);
  }

  &-Counter {
    margin-right: 52px;
  }

  &-Btn {
    padding: 20px 32px;

    @media(max-width: $screen-m) {
      padding: 18px 22px;
    }
  }
}
</style>
