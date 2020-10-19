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
                v-if="item.image460"
                media="(max-width: 459px)" :srcset="require(`@/assets/img/${item.image460}`)"
              >
              <source
                v-if="item.image590"
                media="(max-width: 590px)" :srcset="require(`@/assets/img/${item.image590}`)"
              >
              <source
                v-if="item.image768"
                media="(max-width: 768px)" :srcset="require(`@/assets/img/${item.image768}`)"
              >
              <source
                v-if="item.image960"
                media="(max-width: 960px)" :srcset="require(`@/assets/img/${item.image960}`)"
              >
              <img :srcset="require(`@/assets/img/${item.image1248}`)" :alt="item.title" loading="lazy">
            </picture>
            <div class="Tournaments-Content">
              <div class="Title Tournaments-Name">
                {{ item.title }}
              </div>
              <div
                v-if="item.bonus"
                class="Tournaments-Bonus"
                :class="{'Tournaments-Bonus--noMargin': !item.tournament}"
              >
                <span v-html="item.bonus"></span>
              </div>
              <div class="Tournaments-Text" v-if="item.text">
                <span v-html="item.text"></span>
              </div>
              <Counter v-if="item.tournament" class="Tournaments-Counter" :enddate="enddate"/>
              <div class="Tournaments-Footer">
                <button class="Btn Btn--color Tournaments-Btn" @click="openLogin()">
                  Get bonus
                </button>
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
import auth from '@/mixins/auth';

export default {
  name: 'Tournaments',
  components: {
    Counter,
    VueSlider,
  },
  mixins: [auth],
  data() {
    return {
      options: {
        items: 2,
        loop: false,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
        },
      },
      slides: [
        {
          image460: 'tournaments_460.png',
          image590: 'tournaments_590.png',
          image768: 'tournaments_768.png',
          image960: 'tournaments_960.png',
          image1248: 'tournaments_1248.png',
          title: 'Monthly in a New Race Tournament',
          bonus: '"Catch a car" and drive away!',
          tournament: true,
        },
        {
          image460: 'bonus_590.png',
          image590: 'bonus_590.png',
          image768: 'bonus_768.png',
          image960: 'bonus_960.png',
          image1248: 'bonus_1248.png',
          title: '55% Of The Deposit Amount',
          bonus: '<span class="TextMain">Up to</span> € 150<br/> + 100 Free  Spins',
          text: 'Make your second deposit of $20<br/> or more, and get up to €150 and<br/> 100 free spins.',
        },
      ],
      enddate: null,
    };
  },
  mounted() {
    this.enddate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  },
};
</script>

<style lang="scss">
.Tournaments {
  margin-bottom: 26px;

  @media(min-width: $screen-l) {
    margin-bottom: 45px;
  }

  @media(min-width: $screen-xl) {
    margin-bottom: 60px;
  }

  &-Title {
    margin-bottom: 10px;
    text-align: center;

    @media(min-width: $screen-s) {
      margin-bottom: 30px;
      text-align: left;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 50px;
    }
  }

  &-Item {
    position: relative;
    border-radius: 8px;
  }

  &-Content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding-top: 193px / 320px * 100%;
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;

    @media(min-width: $screen-xs) {
      position: absolute;
      top: 0;
      left: 0;
      align-items: flex-start;
      max-width: 60%;
      padding-top: 130px / 768px * 100%;
      padding-left: 0;
      padding-right: 0;
      text-align: left;
    }

    @media(min-width: $screen-m) {
      padding-top: 24px / 768px * 100%;
    }

    @media(min-width: $screen-l) {
      left: 30px;
      padding-top: 24px / 960px * 100%;
    }
  }

  &-Image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;

    @media(min-width: $screen-xs) {
      position: relative;
    }

    img {
      width: 100%;
    }
  }

  &-Name {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 800;

    @media(min-width: $screen-l) {
      margin-bottom: 10px;
      font-size: 20px;
    }

    @media(min-width: $screen-xl) {
      font-size: 28px;
    }
  }

  &-Bonus {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
    color: var(--color-main2);
    text-transform: uppercase;

    @media(min-width: $screen-m) {
      margin-bottom: 12px;
      font-size: 14px;
    }

    @media(min-width: $screen-l) {
      margin-bottom: 20px;
      font-size: 16px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 30px;
    }

    &--noMargin {
      margin-bottom: 3px;
    }
  }

  &-Counter {
    margin-bottom: 22px;

    @media(min-width: $screen-m) {
      margin-bottom: 30px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 22px;
    }
  }

  &-Text {
    margin-bottom: 14px;
    font-size: 12px;
    font-weight: 300;
    line-height: 1.66;
    color: var(--color-faded);

    @media(min-width: $screen-l) {
      margin-bottom: 22px;
    }
  }

  &-Footer {
    display: flex;
    align-items: center;
  }

  &-Btn {
    margin-right: 22px;
    padding: 14px 20px;

    @media(min-width: $screen-l) {
      padding: 17px 30px;
    }
  }

  &-Link {
    font-size: 16px;
    font-weight: 300;
    color: var(--color-main1);
    text-transform: none;
  }

  .v_slider__dots {
    @media(min-width: $screen-m) {
      display: none;
    }
  }
}
</style>
