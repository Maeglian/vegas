<template>
  <section class="Page PaymentMethods">
    <h2 class="Title Title--type-h2 Page-Title PaymentMethods-Title">
      Payment <span class="Colored">Methods</span>
    </h2>
    <div class="Page-Introduction PaymentMethods-Introduction">
      <p>
        We have a wide range of deposit and withdrawal methods at PlayJoker Casino. Starting
        with the most popular method of debit/credit cards, we accept all versions of VISA cards,
        and MasterCards. For Bank Transfers you can pay via Trustly, or Soft.
      </p>
    </div>
    <Loader v-if="isLoading" />
    <div v-else-if="isError">
      Sorry, we have some problems, data could not be loaded.
    </div>
    <div v-else class="Cards PaymentMethods-Cards">
      <div v-for="item in pageContent" :key="item.name" class="PaymentMethods-Card">
        <img :src="item.images.medium" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import getContent from '@/mixins/getContent';

export default {
  name: 'PaymentMethods',
  mixins: [getContent],
};
</script>

<style lang="scss">
.PaymentMethods {
  padding-left: 16px;
  padding-right: 16px;

  &-Title {
    margin-bottom: 43px;
  }

  &-Introduction {
    max-width: 70%;

    @media(max-width: $screen-s) {
      max-width: 100%;
    }
  }

  &-Cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media(max-width: $screen-s) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &-Card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 135px;
    padding: 0 15px;
    background-color: var(--color-bg);
    border-radius: 8px;

    @media(max-width: $screen-l) {
      min-height: 105px;
    }

    @media(max-width: $screen-m) {
      min-height: 79px;
    }

    @media(max-width: $screen-s) {
      min-height: 82px;
    }
  }
}

</style>
