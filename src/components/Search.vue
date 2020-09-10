<template>
  <div class="Search">
    <svg class="Icon Search-Icon" width="18" height="17">
      <use xlink:href="@/assets/img/icon-sprite.svg#search"></use>
    </svg>
    <input type="text" class="Search-Input" placeholder="Find game">
  </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style lang="scss">
.Search {
  position: relative;

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
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 1.18;
    color: var(--color-text-main);
    background: var(--color-bg);
    border: none;
    border-radius: 8px;

    @media(max-width: $screen-s) {
      padding: 16px 16px 17px 53px;
    }

    &::placeholder {
      color: transparent;

      @media(max-width: $screen-s) {
        color: var(--color-text-ghost);
      }
    }
  }
}
</style>
