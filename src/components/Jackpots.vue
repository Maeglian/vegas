<template>
  <section class="Jackpots">
    <div class="Jackpots-Header">
      <div class="Title Title--type-h2 Jackpots-Title">
        Daily jackpots in <span class="Colored">Vegawinner Casino</span>
      </div>
      <div class="Jackpots-Total">
        Total jackpot € 11,574.600
      </div>
    </div>
    <div class="Jackpots-Slider">
      <VueSlider v-bind="options">
        <a href="#" class="Jackpots-Item">
          <div class="Jackpots-Image">
            <img src="@/assets/img/car1.jpg" alt="" />
          </div>
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
          <div class="Jackpots-Text">
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
      },
    };
  },
};
</script>

<style lang="scss">
.Jackpots {
  margin-bottom: 125px;
  padding-left: 0;
  padding-right: 0;

  &-Header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 73px;
    padding-left: 16px;
    padding-right: 16px;
  }

  &-Slider {
    position: relative;
    width: calc(100% - 32px);
    margin-left: auto;
    margin-right: auto;
  }

  &-Item {
    display: inline-block;
    text-decoration: none;
  }

  &-Image {
    position: relative;
    height: 120px;
    margin-bottom: 19px;
    border-radius: 8px;
    overflow: hidden;

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
      object-fit: fill;
    }
  }

  &-Text {
    display: flex;
    justify-content: center;
    font-size: 14px;
    line-height: 1.18;
  }

  &-Game {
    margin-right: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.3);
  }

  &-Price {
    font-weight: 700;
    color: var(--color-main2);
  }
}
</style>
