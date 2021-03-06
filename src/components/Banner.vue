<template>
  <!-- eslint-disable max-len -->
  <section class="Banner">
    <picture class="Banner-Image" :class="{'Banner-Image--contain': contain}">
      <source media="(max-width: 460px)" :srcset="require(`@/assets/img/${image460}`)">
      <source media="(max-width: 589px)" :srcset="require(`@/assets/img/${image590}`)">
      <source media="(max-width: 768px)" :srcset="require(`@/assets/img/${image768}`)">
      <source media="(max-width: 960px)" :srcset="require(`@/assets/img/${image960}`)">
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
      <button v-if="btnText" class="Btn Btn--color Banner-Btn" @click="openLogin()">
        {{ btnText }}
      </button>
    </div>
  </section>
</template>

<script>
import auth from '@/mixins/auth';

export default {
  name: 'Banner',
  props: {
    image: {
      type: String,
      required: true,
    },
    image460: {
      type: String,
      required: false,
    },
    image590: {
      type: String,
      required: false,
    },
    image768: {
      type: String,
      required: false,
    },
    image960: {
      type: String,
      required: false,
    },
    image1248: {
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
  mixins: [auth],
};
</script>

<style lang="scss">
.Banner {
  position: relative;
  max-width: 100%;
  width: 100%;
  margin-bottom: 73px;
  padding-left: 0;
  padding-right: 0;

  @media(min-width: $screen-m) {
    margin-bottom: 70px;
  }

  @media(min-width: $screen-xl) {
    margin-bottom: 50px;
  }

  &-Image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    width: 100%;

    @media(min-width: $screen-s) {
      position: relative;
    }

    @media(min-width: $screen-xl) {
      height: 558px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-Image--contain {
    img {
      object-fit: contain;
    }
  }

  &-Content {
    position: relative;
    z-index: 1;
    padding-top: 235px / 320px * 100%;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    text-align: center;

    @media(min-width: $screen-s) {
      position: absolute;
      top: 0;
      left: 16px;
      max-width: 60%;
      padding-top: 61px / 728px * 100%;
      padding-left: 0;
      padding-right: 0;
      text-align: left;
    }

    @media(min-width: $screen-m) {
      max-width: 50%;
    }

    @media(min-width: $screen-l) {
      left: 46px;
    }

    @media(min-width: $screen-xl) {
      left: calc(50% - 624px + 55px);
      max-width: 40%;
      padding-top: 117px;
    }

    @media(min-width: $screen-xxl) {
      max-width: 30%;
    }
  }

  &-Title {
    margin-bottom: 18px;
    font-size: 22px;

    @media(min-width: $screen-m) {
      margin-bottom: 24px;
    }

    @media(min-width: $screen-l) {
      margin-bottom: 28px;
      font-size: 26px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 42px;
      font-size: 36px;
    }
  }

  &-Bonus {
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
    line-height: 126.5%;
    text-transform: uppercase;
    color: var(--color-main1);

    @media(min-width: $screen-l) {
      margin-bottom: 13px;
      font-size: 20px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 22px;
      font-size: 24px;
    }
  }

  &-Text {
    margin-bottom: 23px;
    font-size: 13px;
    font-weight: 300;
    line-height: 24px;
    color: var(--color-text-ghost);

    @media(min-width: $screen-m) {
      font-size: 14px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 34px;
      font-size: 16px;
    }
  }

  &-Btn {
    padding: 18px 40px;
    font-size: 16px;

    @media(min-width: $screen-m) {
      padding: 18px 22px;
    }

    @media(min-width: $screen-xl) {
      padding: 20px 55px;
      font-size: 18px;
    }
  }
}
</style>
