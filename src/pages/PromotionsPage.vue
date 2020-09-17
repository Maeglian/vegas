<template>
<!-- eslint-disable max-len -->
  <section class="Page PromotionsPage">
    <h2 class="Title Title--type-h2 Page-Title">
      Current <span class="Colored">Promotions</span>
    </h2>
    <div class="Page-Introduction">
      <p>
        Welcome package for all new players.<br/>
        Playjoker is constantly working to deliver the best promotions!
      </p>
    </div>
    <PromotionsCards :promotions="promotions" />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import PromotionsCards from '@/components/PromotionsCards.vue';

export default {
  name: 'Promotions',
  components: {
    PromotionsCards,
  },
  computed: {
    ...mapState(['promotions']),
  },
};
</script>

<style lang="scss">
.PromotionsPage {
  padding-left: 16px;
  padding-right: 16px;

  .Promotions-Row {
    margin-bottom: 10px;
  }

  .Promotions-Item {
    @media(max-width: $screen-s) {
      margin-bottom: 10px;
    }
  }
}
</style>
