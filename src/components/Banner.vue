<template>
  <!-- eslint-disable max-len -->
  <section class="Banner">
    <picture class="Banner-Image">
      <source media="(max-width: 460px)" :srcset="require(`@/assets/img/${imageMobile}`)">
      <img :src="require(`@/assets/img/${image}`)" :alt="title">
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
    imageMobile: {
      type: String,
      required: false,
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
  margin-bottom: 45px;
  padding-left: 0;
  padding-right: 0;

  &--bottom {
    margin-bottom: 80px;
  }

  @media(max-width: $screen-s) {
    text-align: center;
  }

  &-Image {
    object-fit: cover;

    @media(max-width: $screen-s) {
      display: inline-block;
      max-height: 380px;
      overflow: hidden;
    }
  }

  &-Content {
    position: absolute;
    top: 117px;
    left: 55px;
    max-width: 40%;

    @media(max-width: $screen-l) {
      max-width: 50%;
    }

    @media(max-width: $screen-s) {
      position: relative;
      top: initial;
      left: initial;
      max-width: 100%;
      margin-top: -120px;
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
  }
}
</style>
