<template>
  <!-- eslint-disable max-len -->
  <section class="Tournaments">
    <div class="Title Title--type-h2 Tournaments-Title">
      Bonuses and Tournaments <br/>
      in <span class="Colored">Vegaswinner Casino</span>
    </div>
    <div class="Tournaments-Slider">
      <VueSlider v-bind="options">
        <div v-for="item in slides" :key="item.title" class="Tournaments-Item">
            <picture class="Tournaments-Image">
              <source
                v-if="item.imageMobile"
                media="(max-width: 460px)" :srcset="require(`@/assets/img/${item.imageMobile}`)"
              >
              <source
                v-if="item.image768"
                media="(max-width: 768px)" :srcset="require(`@/assets/img/${item.image768}`)"
              >
              <source
                v-if="item.image960"
                media="(max-width: 960px)" :srcset="require(`@/assets/img/${item.image960}`)"
              >
              <img :src="require(`@/assets/img/${item.image}`)" :alt="item.title">
            </picture>
            <div class="Tournaments-Content">
              <div class="Title Tournaments-Name">
                {{ item.title }}
              </div>
              <div
                v-if="item.bonus"
                class="Tournaments-Bonus"
                :class="{'Tournaments-Bonus--noMargin' : !item.timeLeft}"
              >
                <span v-html="item.bonus"></span>
              </div>
              <div class="Tournaments-Text">
                {{ item.text }}
              </div>
              <Counter v-if="item.timeLeft" class="Tournaments-Counter"/>
              <div class="Tournaments-Footer">
                <a class="Btn Btn--color Tournaments-Btn" href="#">
                  Get bonus
                </a>
                <a class="Link Link--color Tournaments-Link" href="#">
                  More info
                </a>
              </div>
            </div>
        </div>
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
        items: 2,
        loop: true,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          698: {
            items: 2,
          },
        },
      },
      slides: [
        {
          image: 'tournaments.png',
          image768: 'tournaments_768.png',
          image960: 'tournaments_960.png',
          imageMobile: 'tournaments_320.png',
          title: 'Weekly in a New Race Tournament',
          bonus: '€280 000 every day',
          timeLeft: [16, 48, 36, 15],
        },
        {
          image: 'bonus.png',
          image768: 'bonus_768.png',
          image960: 'bonus_960.png',
          imageMobile: 'bonus.png',
          title: '55% Of The Deposit Amount',
          bonus: '<span class="TextMain">Up to</span> € 150<br/> + 100 Free  Spins',
          text: 'Make your second deposit of $20 or more, and get up to €150 and 100 free spins.',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.Tournaments {
  margin-bottom: 98px;

  @media(max-width: $screen-l) {
    margin-bottom: 75px;
  }

  @media(max-width: $screen-s) {
    margin-bottom: 69px;
  }

  &-Title {
    margin-bottom: 50px;
  }

  &-Item {
    position: relative;
    border-radius: 8px;
  }

  &-Content {
    position: absolute;
    top: 40px;
    left: 40px;
    max-width: 60%;
    text-align: left;

    @media(max-width: $screen-l) {
      top: 24px;
      left: 30px;
    }

    @media(max-width: $screen-m) {
      max-width: 80%;
    }

    @media(max-width: $screen-s) {
      position: relative;
      top: initial;
      left: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      margin-top: 193px;
      text-align: center;
    }
  }

  &-Image {
    @media(max-width: $screen-s) {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
    }
  }

  &-Name {
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 800;

    @media(max-width: $screen-l) {
      margin-bottom: 8px;
      font-size: 20px;
    }
  }

  &-Bonus {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
    color: var(--color-main2);
    text-transform: uppercase;

    @media(max-width: $screen-l) {
      margin-bottom: 20px;
      font-size: 16px;
    }

    @media(max-width: $screen-m) {
      margin-bottom: 12px;
      font-size: 14px;
    }

    &--noMargin {
      @media(max-width: $screen-l) {
        margin-bottom: 3px;
      }
    }
  }

  //&-Image {
  //  height: 450px;
  //
  //  @media(max-width: $screen-l) {
  //    height: 420px;
  //  }
  //
  //  @media(max-width: $screen-m) {
  //    height: 340px;
  //  }
  //
  //  @media(max-width: $screen-s) {
  //    height: 360px;
  //  }
  //}

  &-Counter {
    margin-bottom: 22px;

    @media(max-width: $screen-l) {
      margin-bottom: 14px;
    }
  }

  &-Text {
    margin-bottom: 22px;
    font-size: 12px;
    font-weight: 300;
    line-height: 1.66;
    color: var(--color-faded);

    @media(max-width: $screen-l) {
      margin-bottom: 14px;
    }
  }

  &-Footer {
    display: flex;
    align-items: center;
  }

  &-Btn {
    margin-right: 22px;
    padding: 17px 30px;

    @media(max-width: $screen-m) {
      padding: 14px 20px;
    }
  }

  &-Link {
    font-size: 16px;
    font-weight: 300;
    color: var(--color-main1);
    text-transform: none;
  }
}
</style>
