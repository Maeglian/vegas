<template>
  <section class="Jackpots">
    <div class="Jackpots-Header">
      <div class="Title Title--type-h2 Jackpots-Title">
        Daily jackpots <br/>
        in <span class="Colored">Vegawinner Casino</span>
      </div>
      <div class="Jackpots-Jackpot">
        <svg class="Icon Jackpots-Icon" width="70" height="70">
          <use xlink:href="@/assets/img/icon-sprite.svg#jackpot-cards"></use>
        </svg>
        <div class="Jackpots-Total">
          <div class="Jackpots-Text">
            Total jackpot
          </div>
          <div class="Jackpots-Sum">
            <span class="Euro">€</span>&nbsp;11,574.600
          </div>
        </div>
      </div>
    </div>
    <div class="Jackpots-Slider">
      <VueSlider v-if="jackpots.length" v-bind="options">
        <div v-for="(game, i) in jackpots" :key="i" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img
              loading="lazy"
              :src="`https://aws-origin.image-tech-storage.com/gameRes/rect/350/${game.item_title}.jpg`"
              :alt="`${game.application_name}`
          ">
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              {{ game.application_name }}
            </div>
            <div class="Jackpots-Price">
              {{ game.biggest_win }}
            </div>
          </div>
        </div>
      </VueSlider>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import VueSlider from '@/components/Slider.vue';

export default {
  name: 'Jackpots',
  components: {
    VueSlider,
  },
  data() {
    return {
      options: {
        items: 5,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          460: {
            items: 2,
          },
          590: {
            items: 3,
          },
          768: {
            items: 5,
          },
        },
      },
    };
  },
  computed: {
    ...mapState(['jackpots']),
  },
  methods: {
    ...mapActions(['getJackpots']),
  },
  created() {
    this.getJackpots();
  },
};
</script>

<style lang="scss">
.Jackpots {
  margin-bottom: 58px;
  padding-left: 0;
  padding-right: 0;

  @media(min-width: $screen-m) {
    margin-bottom: 68px;
  }

  @media(min-width: $screen-xl) {
    margin-bottom: 89px;
  }

  &-Header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 16px;
    padding-right: 16px;

    @media(min-width: $screen-s) {
      flex-direction: row;
      margin-bottom: 34px;
    }

    @media(min-width: $screen-xl) {
      flex-direction: row;
      margin-bottom: 43px;
    }
  }

  &-Title {
    margin-bottom: 40px;
    text-align: center;

    @media(min-width: $screen-s) {
      margin-bottom: 0;
      text-align: left;
    }
  }

  &-Jackpot {
    display: flex;
    line-height: 1.18;
  }

  &-Icon {
    margin-right: 23px;
    width: 54px;
    height: 56px;

    @media (min-width: $screen-m) {
      margin-right: 20px;
      width: 64px;
      height: 66px;
    }

    @media (min-width: $screen-l) {
      width: 70px;
      height: 70px;
    }

    @media (min-width: $screen-xl) {
      margin-right: 32px;
    }
  }

  &-Text {
    margin-bottom: 3px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-main1);

    @media (min-width: $screen-l) {
      font-size: 18px;
    }
  }

  &-Sum {
    font-size: 30px;
    font-weight: 800;
    line-height: 1.18;
    color: var(--color-text-main);

    @media (min-width: $screen-m) {
      font-size: 38px;
    }

    @media (min-width: $screen-xl) {
      font-size: 48px;
    }
  }

  &-Slider {
    position: relative;
    width: calc(100% - 32px);
    margin-left: auto;
    margin-right: auto;
  }

  &-Item {
    display: inline-block;
    Content-decoration: none;
  }

  &-Image {
    position: relative;
    height: 120px;
    margin-bottom: 19px;
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: $screen-m) {
      height: 72px;
      margin-bottom: 12px;
    }

    @media (min-width: $screen-l) {
      height: 92px;
      margin-bottom: 14px;
    }

    @media (min-width: $screen-xl) {
      height: 120px;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid rgba(255, 164, 29, 0.3);
      border-radius: 8px;
      box-sizing: border-box;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-Content {
    display: flex;
    justify-content: center;
    font-size: 14px;
    line-height: 1.18;

    @media (min-width: $screen-m) {
      flex-direction: column;
    }

    @media (min-width: $screen-l) {
      flex-direction: row;
    }
  }

  &-Game {
    margin-right: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.3);

    @media (min-width: $screen-m) {
      margin-right: 0;
      margin-bottom: 3px;
      font-size: 12px;
    }

    @media (min-width: $screen-l) {
      font-size: 11px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    @media (min-width: $screen-xl) {
      margin-right: 13px;
    }
  }

  &-Price {
    font-size: 12px;
    font-weight: 700;
    color: var(--color-main2);

    @media (min-width: $screen-l) {
      font-size: 11px;
    }
  }

  .v_slider__prev, .v_slider__next {
    top: 60px;

    @media (min-width: $screen-m) {
      top: 35px;
    }

    @media (min-width: $screen-l) {
      top: 45px;
    }

    @media (min-width: $screen-xl) {
      top: 51px;
    }
  }
}
</style>
