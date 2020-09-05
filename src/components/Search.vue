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
  width: 29%;

  @media(max-width: $screen-s) {
    width: 100%;
  }

  &-Icon {
    position: absolute;
    top: 16px;
    left: 20px;
  }

  &-Input {
    width: 100%;
    padding: 16px 16px 17px 53px;
    font-size: 14px;
    line-height: 1.18;
    color: var(--color-text-main);
    background: var(--color-bg);
    border: none;
    border-radius: 8px;

    &::placeholder {
      color: var(--color-text-ghost);
    }
  }
}
</style>
