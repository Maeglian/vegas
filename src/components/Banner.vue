<template>
  <!-- eslint-disable max-len -->
  <section class="Banner">
    <div class="Banner-Wrapper">
      <picture class="Banner-Image" :class="{'Banner-Image--contain': contain}">
        <source media="(max-width: 460px)" :srcset="require(`@/assets/img/${imageMobile}`)">
        <source media="(max-width: 1248px)" :srcset="require(`@/assets/img/${image1248}`)">
        <img :srcset="require(`@/assets/img/${image}`)" loading="lazy" :alt="title">
      </picture>
      <div class="Banner-Content">
        <div v-if="title" class="Title Title--type-h3 Banner-Title">
          <span v-html="title"></span>
        </div>
        <div v-if="bonus" class="Banner-Bonus">
          {{ bonus }}
        </div>
        <div v-if="text" class="Banner-Text">
          {{ text }}
        </div>
        <button v-if="btnText" class="Btn Btn--color Banner-Btn">
          {{ btnText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    image: {
      type: String,
      required: true,
    },
    image1248: {
      type: String,
      required: true,
    },
    imageMobile: {
      type: String,
      required: false,
    },
    contain: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
    },
    bonus: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    btnText: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.Banner {
  position: relative;
  max-width: 100%;
  width: 100%;
  margin-bottom: 45px;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;

  &--bottom {
    margin-bottom: 80px;
  }

  @media(max-width: $screen-m) {
    margin-bottom: 70px;
  }

  @media(max-width: $screen-s) {
    text-align: center;
    margin-bottom: 73px;
  }

  &-Wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    @media(max-width: $screen-s) {
      padding-bottom: 135%;
    }
  }

  &-Image {
    display: inline-block;
    width: 100%;
    height: 558px;
    overflow: hidden;

    @media(max-width: $screen-xl) {
      height: auto;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media(max-width: $screen-s) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 500px;
    }
  }

  &-Image--contain {
    img {
      object-fit: contain;
    }
  }

  &-Content {
    position: absolute;
    top: 117px;
    left: calc(50% - 624px + 55px);
    max-width: 40%;

    @media(max-width: $screen-xl) {
      left: 55px;
    }

    @media(max-width: $screen-l) {
      top: 60px;
      left: 46px;
      max-width: 50%;
    }

    @media(max-width: $screen-m) {
      left: 16px;
    }

    @media(max-width: $screen-s) {
      top: initial;
      left: 0;
      bottom: 0;
      max-width: 100%;
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  &-Title {
    margin-bottom: 42px;
    font-size: 36px;

    @media(max-width: $screen-l) {
      margin-bottom: 28px;
      font-size: 26px;
    }

    @media(max-width: $screen-m) {
      margin-bottom: 24px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 18px;
      font-size: 22px;
    }
  }

  &-Bonus {
    margin-bottom: 22px;
    font-size: 24px;
    font-weight: 700;
    line-height: 126.5%;
    text-transform: uppercase;
    color: var(--color-main1);

    @media(max-width: $screen-l) {
      margin-bottom: 13px;
      font-size: 20px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 20px;
      font-size: 14px;
    }
  }

  &-Text {
    margin-bottom: 34px;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--color-text-ghost);

    @media(max-width: $screen-m) {
      font-size: 14px;
    }

    @media(max-width: $screen-m) {
      margin-bottom: 23px;
      font-size: 13px;
      color: var(--color-text-main);
    }
  }

  &-Btn {
    padding: 20px 55px;
    font-size: 18px;

    @media(max-width: $screen-m) {
      padding: 18px 22px;
    }

    @media(max-width: $screen-s) {
      padding: 18px 40px;
      font-size: 16px;
    }
  }
}
</style>
