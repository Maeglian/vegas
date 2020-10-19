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
        <button class="Btn Btn--outline Btn--outline2 Promotions-Btn" @click="openLogin()">
          Read more
        </button>
      </div>
    </div>
  </fragment>
</template>

<script>
import auth from '@/mixins/auth';

export default {
  name: 'PromotionsCards',
  props: {
    promotions: {
      type: Array,
      required: true,
    },
  },
  mixins: [auth],
};
</script>

<style lang="scss">
.Promotions {
  &-Row {
    display: block;
    justify-content: space-between;

    @media(min-width: $screen-s) {
      display: flex;
    }
  }

  &-Item {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: $screen-s) {
      width: 395px / $screen-xl * 100%;
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
    margin-top: auto;
    padding: 14px 30px;

    @media(min-width: $screen-m) {
      padding: 20px 50px;
    }
  }
}
</style>
