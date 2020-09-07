<template>
  <!-- eslint-disable max-len -->
  <section class="BottomBanner">
    <div class="BottomBanner-Slider">
      <VueSlider v-bind="options">
        <a class="BottomBanner-Item" href="#">
          <div class="Banner BottomBanner-Banner">
            <img class="Banner-Image BottomBanner-Image" src="@/assets/img/bottombanner.png" alt="">
            <div class="Banner-Content BottomBanner-Content">
              <div class="Banner-Text">
                <div class="Title Title--type-h3 Title--color1 Banner-Title">
                  50% Second Deposit Bonus
                </div>
                <div class="Banner-Lead">
                  € 100 &150 Free spins
                </div>
                <div class="Banner-GhostText BottomBanner-GhostText">
                  If you’re looking for over 2000 unique game titles with fun features and different payouts, you’ve come to the right place.
                </div>
              </div>
              <div class="Banner-Footer">
                <button class="Btn Btn--color Banner-Btn">
                  Play now
                </button>
                <div class="Banner-Link BottomBanner-Link">
                  More info
                </div>
              </div>
            </div>
          </div>
        </a>
      </VueSlider>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BottomBanner',
  data() {
    return {
      options: {
        items: 1,
        loop: true,
        dots: true,
      },
    };
  },
};
</script>

<style lang="scss">
.BottomBanner {
  margin-bottom: 64px;
  padding-left: 0;
  padding-right: 0;

  &-Image {
    height: 492px;

    @media(max-width: $screen-m) {
      height: 407px;
    }

    @media(max-width: $screen-s) {
      height: 334px;
      margin-bottom: 82px;
    }
  }

  &-GhostText {
    margin-bottom: 33px;
  }

  &-Link {
    margin-left: 33px;
  }

  &-Content {
    top: 77px;
    left: 16%;
    max-width: 50%;
  }
}

</style>
