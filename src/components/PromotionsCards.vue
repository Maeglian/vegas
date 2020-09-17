<template>
  <fragment>
    <div v-for="(row, i) in promotions" :key="i" class="Promotions-Row">
      <div
        v-for="promotion in row"
        :key="promotion.title"
        class="Promotions-Item Card"
      >
        <img class="Promotions-Image Card-Image" :src="require(`@/assets/img/${promotion.image}`)"/>
        <div class="Promotions-Name Card-Name">
          {{ promotion.title }}
        </div>
        <div class="Promotions-Text Card-Text" v-html="promotion.text"></div>
        <button class="Btn Btn--outline Btn--outline2 Promotions-Btn">
          Read more
        </button>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  name: 'PromotionsCards',
  props: {
    promotions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.Promotions {
  &-Row {
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
