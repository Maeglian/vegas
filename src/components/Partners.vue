<template>
  <div class="Partners">
    <marquee-text :duration="60">
      <div class="Partners-Wrapper">
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/visa.svg" />
        </div>
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/maestro.svg" />
        </div>
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/skrill.svg" />
        </div>
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/paysafe.svg" />
        </div>
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/wirecard.svg" />
        </div>
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/webmoney.svg" />
        </div>
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/sofort.svg" />
        </div>
        <div class="Partners-Partner">
          <img class="Partners-Image" src="@/assets/img/microgaming.svg" />
        </div>
      </div>
    </marquee-text>
  </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component';

export default {
  name: 'Partners',
  components: {
    MarqueeText,
  },
};
</script>

<style lang="scss">
.Partners {
  padding: 20px 0;
  border-bottom: 1px solid rgba(110, 88, 131, 0.3);

  @media(min-width: $screen-m) {
    padding-bottom: 40px;
  }

  @media(min-width: $screen-l) {
    padding-bottom: 25px;
  }

  &-Wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &-Partner {
    flex-shrink: 2;
    margin-right: 10px;
    margin-bottom: 10px;
    opacity: 0.25;

    &:last-child {
      margin-right: 0;
    }

    @media(min-width: $screen-m) {
      margin-right: 25px;
      margin-bottom: 15px;
    }

    @media(min-width: $screen-xl) {
      margin-right: 37px;
    }
  }
}
</style>
