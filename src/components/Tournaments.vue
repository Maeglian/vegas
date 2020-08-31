<template>
  <section class="Tournaments">
    <div class="Title Title--type-h2 Title--center">
      Exciting tournaments
    </div>
    <div class="Tournaments-Slider">
      <VueSlider v-bind="options">
        <a class="Tournaments-Item" href="#">
          <div class="Banner">
            <img src="@/assets/img/tournament.png" alt="">
            <div class="Banner-Content">
              <div class="Banner-Text">
                <div class="Title Title--type-h3 Title--color1 Banner-Title">
                  Sign up & win
                </div>
                <div class="Banner-Lead">
                  Weekly in a new race
                </div>
                <div class="Title Title--type-h4">
                  € 10.000 + 55 Free Spins
                </div>

              </div>
              <div class="Banner-Time">
                Time left until finish
              </div>
              <div class="Banner-Footer">
                <Counter className="Banner-Counter"/>
                <button class="Btn Btn--color Banner-Btn">
                  Play now
                </button>
              </div>
            </div>
          </div>
        </a>
        <a class="Tournaments-Item" href="#">
          <div class="Banner">
            <img src="@/assets/img/tournament.png" alt="">
            <div class="Banner-Content">
              <div class="Banner-Text">
                <div class="Title Title--type-h3 Title--color1 Banner-Title">
                  Sign up & win
                </div>
                <div class="Banner-Lead">
                  Weekly in a new race
                </div>
                <div class="Title Title--type-h4">
                  € 10.000 + 55 Free Spins
                </div>

              </div>
              <div class="Banner-Time">
                Time left until finish
              </div>
              <div class="Banner-Footer">
                <div class="Banner-Counter Counter">
                  <div class="Counter-Item Counter-Days">
                    <div class="Counter-Count">
                      16
                    </div>
                    <div class="Counter-Desc">
                      Days
                    </div>
                  </div>
                  <div class="Counter-Item Counter-Hours">
                    <div class="Counter-Count">
                      48
                    </div>
                    <div class="Counter-Desc">
                      Hours
                    </div>
                  </div>
                  <div class="Counter-Item Counter-Minutes">
                    <div class="Counter-Count">
                      36
                    </div>
                    <div class="Counter-Desc">
                      Minutes
                    </div>
                  </div>
                  <div class="Counter-Item Counter-Seconds">
                    <div class="Counter-Count">
                      05
                    </div>
                    <div class="Counter-Desc">
                      Seconds
                    </div>
                  </div>

                </div>
                <button class="Btn Btn--color Banner-Btn">
                  Play now
                </button>
              </div>
            </div>
          </div>
        </a>
        <a class="Tournaments-Item" href="#">
          <div class="Banner">
            <img src="@/assets/img/tournament.png" alt="">
            <div class="Banner-Content">
              <div class="Banner-Text">
                <div class="Title Title--type-h3 Title--color1 Banner-Title">
                  Sign up & win
                </div>
                <div class="Banner-Lead">
                  Weekly in a new race
                </div>
                <div class="Title Title--type-h4">
                  € 10.000 + 55 Free Spins
                </div>

              </div>
              <div class="Banner-Time">
                Time left until finish
              </div>
              <div class="Banner-Footer">
                <div class="Banner-Counter Counter">
                  <div class="Counter-Item Counter-Days">
                    <div class="Counter-Count">
                      16
                    </div>
                    <div class="Counter-Desc">
                      Days
                    </div>
                  </div>
                  <div class="Counter-Item Counter-Hours">
                    <div class="Counter-Count">
                      48
                    </div>
                    <div class="Counter-Desc">
                      Hours
                    </div>
                  </div>
                  <div class="Counter-Item Counter-Minutes">
                    <div class="Counter-Count">
                      36
                    </div>
                    <div class="Counter-Desc">
                      Minutes
                    </div>
                  </div>
                  <div class="Counter-Item Counter-Seconds">
                    <div class="Counter-Count">
                      05
                    </div>
                    <div class="Counter-Desc">
                      Seconds
                    </div>
                  </div>

                </div>
                <button class="Btn Btn--color Banner-Btn">
                  Play now
                </button>
              </div>
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

  &-Slider {
    width: 868px;
    margin: 0 auto;
  }
}

.Banner {
  position: relative;

  &-Content {
    position: absolute;
    right: 48px;
    bottom: 36px;
  }

  &-Text {
    margin-bottom: 40px;
  }

  &-Title {
    margin-bottom: 8px;
  }

  &-Lead {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 300;
    line-height: 126.5%;
    text-transform: uppercase;
    color: var(--color-text-main)
  }

  &-Footer {
    display: flex;
  }

  &-Time {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--color-faded);
  }

  &-Counter {
    margin-right: 52px;
  }
}
</style>
