<template>
  <section class="Partners">
    <div class="Partners-Partner Partners-Partner--visa">
      <img class="Partners-Image" src="@/assets/img/visa.svg" />
    </div>
    <div class="Partners-Partner Partners-Partner--maestro">
      <img class="Partners-Image" src="@/assets/img/maestro.svg" />
    </div>
    <div class="Partners-Partner">
      <img class="Partners-Image" src="@/assets/img/skrill.svg" />
    </div>
    <div class="Partners-Partner Partners-Partner--paysafe">
      <img class="Partners-Image" src="@/assets/img/paysafe.svg" />
    </div>
    <div class="Partners-Partner">
      <img class="Partners-Image" src="@/assets/img/wirecard.svg" />
    </div>
    <div class="Partners-Partner">
      <img class="Partners-Image" src="@/assets/img/webmoney.svg" />
    </div>
    <div class="Partners-Partner Partners-Partner--sofort">
      <img class="Partners-Image" src="@/assets/img/sofort.svg" />
    </div>
    <div class="Partners-Partner">
      <img class="Partners-Image" src="@/assets/img/microgaming.svg" />
    </div>
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
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(110, 88, 131, 0.3);

  @media(max-width: $screen-l) {
    padding-bottom: 25px;
  }

  @media(max-width: $screen-m) {
    padding-bottom: 20px;
  }

  &-Partner {
    flex-shrink: 2;
    margin-right: 37px;
    opacity: 0.25;

    &:last-child {
      margin-right: 0;
    }

    @media(max-width: $screen-m) {
      margin-right: 25px;
      margin-bottom: 15px;
    }

    @media(max-width: $screen-s) {
      display: none;
      margin-right: 10px;
      margin-bottom: 10px;

      &--visa {
        display: block;
      }

      &--maestro {
        display: block;
      }

      &--paysafe {
        display: block;
      }

      &--sofort {
        display: block;
      }
    }
  }
}
</style>
