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
    <input type="text" class="Search-Input" placeholder="Find game">
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      isOpen: false,
      width: 0,
    };
  },
  created() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    openSearch() {
      if (this.width > 460) this.isOpen = true;
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
  min-width: 67px;
  background: #151841;
  cursor: pointer;

  @media(max-width: $screen-s) {
    width: 100%;
  }

  &-Icon {
    position: absolute;
    top: calc(50% - 9px);
    left: calc(50% - 9px);
    fill: var(--color-main2);

    @media(max-width: $screen-s) {
      left: 20px;
      fill: var(--color-text-ghost);
    }
  }

  &-Input {
    display: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 1.18;
    color: var(--color-text-main);
    background: #151841;
    border: none;
    border-radius: 8px;

    @media(max-width: $screen-s) {
      display: block;
      padding: 16px 16px 17px 53px;
    }

    &::placeholder {
      color: transparent;

      @media(max-width: $screen-s) {
        color: var(--color-text-ghost);
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
