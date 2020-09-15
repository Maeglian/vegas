<template>
<!-- eslint-disable max-len -->
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
            class="Promotions-Item Card"
          >
            <img class="Promotions-Image Card-Image" :src="require(`@/assets/img/${promotions[i].image}`)"/>
            <div class="Promotions-Name Card-Name">
              {{ promotions[i].title }}
            </div>
            <div class="Promotions-Text Card-Text" v-html="promotions[i].text"></div>
            <button class="Btn Btn--outline Btn--outline2 Promotions-Btn">
              Read more
            </button>
          </div>
        </div>
        <div class="Promotions-SliderItem">
          <div
            v-for="(promotion, i) in [4, 5, 6]"
            :key="promotion.title"
            class="Promotions-Item Card"
          >
            <img class="Promotions-Image Card-Image" :src="require(`@/assets/img/${promotions[i].image}`)"/>
            <div class="Promotions-Name Card-Name">
              {{ promotions[i].title }}
            </div>
            <div class="Promotions-Text Card-Text" v-html="promotions[i].text"></div>
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

  &-Image {
    margin-bottom: 25px;
    height: 140px;
  }

  &-Text {
    margin-bottom: 40px;
  }

  &-Btn {
    padding: 20px 50px;

    @media(max-width: $screen-m) {
      padding: 14px 30px;
    }
  }
}

</style>
