<template>
  <!-- eslint-disable max-len -->
  <div class="Accordion">
    <div
      class="Accordion-Title"
      :class="{'Accordion-Title--active': isOpen}"
      @click="isOpen = !isOpen"
    >
      {{ title }}
    </div>
    <div v-if="isOpen" class="Accordion-Content" v-html="content">
    </div>
  </div>

</template>

<script>
export default {
  name: 'Accordion.vue',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
.Accordion {
  padding: 26px;
  background-color: var(--color-bg);
  border-radius: 8px;

  @media(max-width: $screen-l) {
    padding: 20px;
  }

  &-Title {
    position: relative;
    padding-left: 30px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.26;
    color: var(--color-text-main);
    cursor: pointer;

    &:before {
      content: "+";
      position: absolute;
      top: 0;
      left: 0;
      color: var(--color-main1);
    }

    &--active {
      padding-bottom: 26px;
      border-bottom: 1px solid var(--color-bg-darker);

      @media(max-width: $screen-l) {
        padding-bottom: 20px;
      }

      @media(max-width: $screen-s) {
        padding-bottom: 14px;
      }

      &:before {
        content: "-";
      }
    }
  }

  &-Content {
    padding-top: 17px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.61;
    color: var(--color-more-faded);

    @media(max-width: $screen-s) {
      font-size: 13px;
    }
  }
}
</style>
