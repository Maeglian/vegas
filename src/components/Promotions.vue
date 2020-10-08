<template>
<!-- eslint-disable max-len -->
  <section class="Promotions">
    <div class="Title Title--type-h2 Promotions-Title">
      Current promotions<br/>
      in <span class="Colored">Vegaswinner Casino</span>
    </div>
    <div class="Promotions-Slider">
      <VueSlider v-bind="options">
        <PromotionsCards :promotions="promotions" />
      </VueSlider>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import VueSlider from '@/components/Slider.vue';
import PromotionsCards from '@/components/PromotionsCards.vue';

export default {
  name: 'Promotions',
  components: {
    VueSlider,
    PromotionsCards,
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
    text-align: center;

    @media(min-width: $screen-m) {
      text-align: left;
    }
  }
}

</style>
