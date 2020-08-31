<template>
  <section class="Games">
    <div class="Title Title--type-h2 Games-Title">
      The best games in <span class="Colored">Vegawinner Casino</span>
    </div>
    <div class="Games-Panel">
      <p class="Games-Text">
        We have the latest games from all the top providers, including Microgaming, NetEnt and WMS.
      </p>
      <Search />
    </div>
    <div class="Games-Tabs">
      <button class="Btn Btn--tab Games-Tab Btn--active">
        <svg class="Icon" width="22" height="22">
          <use xlink:href="@/assets/img/icon-sprite.svg#top"></use>
        </svg>
        Top games
      </button>
      <button class="Btn Btn--tab Games-Tab">
        <svg class="Icon" width="22" height="22">
          <use xlink:href="@/assets/img/icon-sprite.svg#star"></use>
        </svg>
        New games
      </button>
      <button class="Btn Btn--tab Games-Tab">
        <svg class="Icon" width="22" height="22">
          <use xlink:href="@/assets/img/icon-sprite.svg#roulette"></use>
        </svg>
        Roulette
      </button>
      <button class="Btn Btn--tab Games-Tab">
        <svg class="Icon" width="20" height="22">
          <use xlink:href="@/assets/img/icon-sprite.svg#cards"></use>
        </svg>
        Card games
      </button>
      <button class="Btn Btn--tab Games-Tab">
        <svg class="Icon" width="26" height="20">
          <use xlink:href="@/assets/img/icon-sprite.svg#video"></use>
        </svg>
        Live games
      </button>
      <button class="Btn Btn--tab Games-Tab">
        <svg class="Icon" width="31" height="20">
          <use xlink:href="@/assets/img/icon-sprite.svg#slots"></use>
        </svg>
        Slots
      </button>
    </div>
    <div class="Games-Thumbs">
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb Games-Thumb--wide" href="#">
        <img src="@/assets/img/game4.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb Games-Thumb--wide" href="#">
        <img src="@/assets/img/game5.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb Games-Thumb--wide" href="#">
        <img src="@/assets/img/game2.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb Games-Thumb Games-Thumb--wide" href="#">
        <img src="@/assets/img/game3.png" alt="">
      </a>
      <a class="Thumb Games-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
    </div>
    <div class="Games-Btn">
      <button class="Btn">
        View all games
      </button>
    </div>
  </section>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'BestGames',
  components: {
    Search,
  },
};
</script>

<style lang="scss">
.Games {
  margin-bottom: 100px;

  &-Title {
    max-width: 60%;
    margin-bottom: 30px;
  }

  &-Text {
    width: 41%;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 28px;
  }

  &-Panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &-Tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 31px;
  }

  &-Tab {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-Thumbs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 37px;
  }

  &-Thumb {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 194px;
    height: 194px;

    &:nth-child(5n) {
      margin-right: 0;
    }

    &--wide {
      width: 399px;
    }
  }

  &-Btn {
    text-align: center;
  }
}
</style>
