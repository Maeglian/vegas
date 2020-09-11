<template>
  <section class="Partners">
    <img class="Partners-Partner Partners-Partner--visa" src="@/assets/img/visa.svg" />
    <img class="Partners-Partner Partners-Partner--maestro" src="@/assets/img/maestro.svg" />
    <img class="Partners-Partner" src="@/assets/img/skrill.svg" />
    <img class="Partners-Partner Partners-Partner--paysafe" src="@/assets/img/paysafe.svg" />
    <img class="Partners-Partner" src="@/assets/img/wirecard.svg" />
    <img class="Partners-Partner" src="@/assets/img/webmoney.svg" />
    <img class="Partners-Partner Partners-Partner--sofort" src="@/assets/img/sofort.svg" />
    <img class="Partners-Partner" src="@/assets/img/microgaming.svg" />
  </section>
</template>

<script>
export default {
  name: 'Partners',
};
</script>

<style lang="scss">
.Partners {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(110, 88, 131, 0.3);

  @media(max-width: $screen-s) {
    flex-wrap: nowrap;
  }

  &-Partner {
    margin-right: 37px;
    margin-bottom: 32px;
    opacity: 0.25;

    @media(max-width: $screen-s) {
      display: none;
      margin-right: 10px;
      margin-bottom: 10px;

      &--visa {
        display: block;
        width: 50px;
      }

      &--maestro {
        display: block;
        width: 30px;
      }

      &--paysafe {
        display: block;
        width: 97px;
      }

      &--sofort {
        display: block;
        width: 54px;
      }
    }
  }
}
</style>
