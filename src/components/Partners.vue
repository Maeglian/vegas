<template>
  <section class="Partners">
    <img class="Partners-Partner" src="@/assets/img/visa.svg" />
    <img class="Partners-Partner" src="@/assets/img/maestro.svg" />
    <img class="Partners-Partner" src="@/assets/img/skrill.svg" />
    <img class="Partners-Partner" src="@/assets/img/paysafe.svg" />
    <img class="Partners-Partner" src="@/assets/img/wirecard.svg" />
    <img class="Partners-Partner" src="@/assets/img/webmoney.svg" />
    <img class="Partners-Partner" src="@/assets/img/sofort.svg" />
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
  border-bottom: 1px solid rgba(110, 88, 131, 0.3);

  &-Partner {
    margin-right: 37px;
    margin-bottom: 32px;
    opacity: 0.25;
  }
}
</style>
