<template>
  <section class="Promotions">
    <div class="Title Title--type-h2 Promotions-Title">
      Current promotions<br/>
      in <span class="Colored">Vegaswinner Casino</span>
    </div>
    <div class="Promotions-Slider">
      <VueSlider v-bind="options">
        <div
          v-for="promotion in promotions"
          :key="promotion.title"
          class="Promotions-Item"
        >
         <img class="Promotions-Image" :src="require(`@/assets/img/${promotion.image}`)"/>
          <div class="Promotions-Name">
            {{ promotion.title }}
          </div>
          <div class="Promotions-Text" v-html="promotion.text"></div>
          <button class="Btn Promotions-Btn">
            Read more
          </button>
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
        items: 3,
        loop: true,
        margin: 10,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          460: {
            items: 2,
          },
          768: {
            items: 3,
          },
        },
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
  margin-bottom: 100px;

  &-Title {
    margin-bottom: 40px;
  }

  &-Item {
    padding: 50px 10px;
    background-color: var(--color-bg);
    border-radius: 8px;

    @media(max-width: $screen-l) {
      padding: 40px 10px;
    }
  }

  &-Image {
    margin-bottom: 32px;
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
    margin-bottom: 38px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.61;
    color: var(--color-faded);

    @media(max-width: $screen-m) {
      font-size: 14px;
    }
  }
}

</style>
