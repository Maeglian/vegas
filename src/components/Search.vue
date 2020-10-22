<template>
  <div
    class="Search"
    :class="{'Search--open': isOpen}"
    @click="openSearch"
    v-click-outside="onClickOutside"
  >
    <svg class="Icon Search-Icon" width="18" height="17">
      <use xlink:href="@/assets/img/icon-sprite.svg#search"></use>
    </svg>
    <input
      type="text"
      class="Search-Input"
      placeholder="Find game"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('search')"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    value: {
      type: String,
      isRequired: true,
    },
  },
  computed: {
    ...mapState(['width']),
  },
  methods: {
    openSearch() {
      if (this.width > 768) this.isOpen = true;
    },
    onClickOutside() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss">
.Search {
  position: relative;
  width: 100%;
  background: #151841;
  cursor: pointer;

  @media(min-width: $screen-m) {
    min-width: 67px;
    width: auto;
  }

  &-Icon {
    position: absolute;
    top: calc(50% - 9px);
    left: 20px;
    fill: var(--color-text-ghost);

    @media(min-width: $screen-m) {
      left: calc(50% - 9px);
      fill: var(--color-main2);
    }
  }

  &-Input {
    width: 100%;
    height: 100%;
    padding: 16px 16px 17px 53px;
    font-size: 14px;
    line-height: 1.18;
    color: var(--color-text-main);
    background: #151841;
    border: none;
    border-radius: 8px;

    @media(min-width: $screen-m) {
      display: none;
      padding: 0;
    }

    &::placeholder {
      color: var(--color-text-ghost);

      @media(min-width: $screen-m) {
        color: transparent;
      }
    }
  }

  &--open {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    cursor: initial;

    .Search-Icon {
      left: 20px;
      fill: var(--color-text-ghost);
    }

    .Search-Input {
      display: block;
      padding: 16px 16px 17px 53px;

      &::placeholder {
        color: var(--color-text-ghost);
      }
    }
  }
}
</style>
