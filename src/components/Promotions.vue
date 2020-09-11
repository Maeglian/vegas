<template>
  <section class="Promotions">
    <div class="Title Title--type-h2 Promotions-Title">
      Current promotions<br/>
      in <span class="Colored">Vegaswinner Casino</span>
    </div>
    <div class="Promotions-Slider">
      <VueSlider v-bind="options">
        <div class="Promotions-SliderItem">
          <div
            v-for="(promotion, i) in [1, 2, 3]"
            :key="promotions[i].title"
            class="Promotions-Item"
          >
            <img class="Promotions-Image" :src="require(`@/assets/img/${promotions[i].image}`)"/>
            <div class="Promotions-Name">
              {{ promotions[i].title }}
            </div>
            <div class="Promotions-Text" v-html="promotions[i].text"></div>
            <button class="Btn Btn--outline Btn--outline2 Promotions-Btn">
              Read more
            </button>
          </div>
        </div>
        <div class="Promotions-SliderItem">
          <div
            v-for="(promotion, i) in [4, 5, 6]"
            :key="promotion.title"
            class="Promotions-Item"
          >
            <img class="Promotions-Image" :src="require(`@/assets/img/${promotions[i].image}`)"/>
            <div class="Promotions-Name">
              {{ promotions[i].title }}
            </div>
            <div class="Promotions-Text" v-html="promotions[i].text"></div>
            <button class="Btn Btn--outline Btn--outline2 Promotions-Btn">
              Read more
            </button>
          </div>
        </div>
      </VueSlider>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import VueSlider from '@/components/Slider.vue';

export default {
  name: 'Promotions',
  components: {
    VueSlider,
  },
  data() {
    return {
      options: {
        items: 1,
        loop: true,
        margin: 10,
        dots: true,
      },
    };
  },
  computed: {
    ...mapState(['promotions']),
  },
};
</script>

<style lang="scss">
.Promotions {
  margin-bottom: 70px;

  &-Title {
    margin-bottom: 40px;

    @media(max-width: $screen-s) {
      text-align: center;
    }
  }

  &-SliderItem {
    display: flex;
    justify-content: space-between;

    @media(max-width: $screen-s) {
      display: block;
    }
  }

  &-Item {
    flex-grow: 1;
    margin-right: 10px;
    padding: 50px 10px;
    background-color: var(--color-bg);
    border-radius: 8px;

    &:last-child {
      margin-right: 0;
    }

    @media(max-width: $screen-l) {
      padding: 40px 10px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &-Image {
    margin-bottom: 25px;
    height: 140px;
  }

  &-Name {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.26;
    color: var(--color-text-main);

    @media(max-width: $screen-m) {
      font-size: 16px;
    }
  }

  &-Text {
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.61;
    color: var(--color-faded);

    @media(max-width: $screen-m) {
      font-size: 14px;
    }
  }

  &-Btn {
    padding: 20px 50px;
  }
}

</style>
