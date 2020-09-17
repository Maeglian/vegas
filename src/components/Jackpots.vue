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
      <VueSlider v-bind="options">
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car1.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Legacy of Dead
            </div>
            <div class="Jackpots-Price">
              € 5,804.11
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car2.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Vikings go Berzerk
            </div>
            <div class="Jackpots-Price">
              € 1,520.65
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car3.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Blinged
            </div>
            <div class="Jackpots-Price">
              € 991.01
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car4.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Wild Streets
            </div>
            <div class="Jackpots-Price">
              € 603.60
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car5.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Tower Quest
            </div>
            <div class="Jackpots-Price">
              € 751.78
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car1.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Legacy of Dead
            </div>
            <div class="Jackpots-Price">
              € 5,804.11
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car2.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Vikings go Berzerk
            </div>
            <div class="Jackpots-Price">
              € 1,520.65
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car3.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Blinged
            </div>
            <div class="Jackpots-Price">
              € 991.01
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car4.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Wild Streets
            </div>
            <div class="Jackpots-Price">
              € 603.60
            </div>
          </div>
        </a>
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car5.jpg" alt="" />
          </div>
          <div class="Jackpots-Content">
            <div class="Jackpots-Game">
              Tower Quest
            </div>
            <div class="Jackpots-Price">
              € 751.78
            </div>
          </div>
        </a>
      </VueSlider>
    </div>
  </section>
</template>

<script>
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
          768: {
            items: 5,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.Jackpots {
  margin-bottom: 89px;
  padding-left: 0;
  padding-right: 0;

  @media(max-width: $screen-m) {
    margin-bottom: 68px;
  }

  @media(max-width: $screen-s) {
    margin-bottom: 58px;
  }

  &-Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 43px;
    padding-left: 16px;
    padding-right: 16px;

    @media(max-width: $screen-m) {
      margin-bottom: 34px;
    }

    @media(max-width: $screen-s) {
      display: block;
      margin-bottom: 30px;
    }
  }

  &-Title {
    @media(max-width: $screen-s) {
      margin-bottom: 40px;
      font-size: 24px;
      text-align: center;
    }
  }

  &-Jackpot {
    display: flex;
    line-height: 1.18;
  }

  &-Icon {
    margin-right: 32px;

    @media (max-width: $screen-m) {
      margin-right: 20px;
    }

    @media (max-width: $screen-s) {
      width: 54px;
      height: 56px;
      margin-right: 23px;
    }
  }

  &-Text {
    margin-bottom: 3px;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    color: #FFA41D;

    @media (max-width: $screen-l) {
      font-size: 16px;
    }
  }

  &-Sum {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.18;
    color: var(--color-text-main);

    @media (max-width: $screen-l) {
      font-size: 30px;
    }

    @media (max-width: $screen-s) {
      font-size: 36px;
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

    @media (max-width: $screen-l) {
      height: 92px;
      margin-bottom: 14px;
    }

    @media (max-width: $screen-m) {
      height: 72px;
      margin-bottom: 12px;
    }

    @media (max-width: $screen-s) {
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

    @media (max-width: $screen-m) {
      flex-direction: column;
    }

    @media (max-width: $screen-s) {
      flex-direction: row;
    }
  }

  &-Game {
    margin-right: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.3);

    @media (max-width: $screen-l) {
      font-size: 11px;
      margin-right: 8px;
    }

    @media (max-width: $screen-m) {
      font-size: 12px;
    }

    @media (max-width: $screen-s) {
      margin-right: 13px;
    }
  }

  &-Price {
    font-weight: 700;
    color: var(--color-main2);

    @media (max-width: $screen-l) {
      font-size: 11px;
    }

    @media (max-width: $screen-m) {
      font-size: 12px;
    }
  }

  .v_slider__prev, .v_slider__next {
    top: 51px;

    @media (max-width: $screen-m) {
      top: 30px;
    }

    @media (max-width: $screen-s) {
      top: 60px;
    }
  }
}
</style>
