<template>
  <!-- eslint-disable max-len -->
  <section class="BestGames">
    <div class="Title Title--type-h2 BestGames-Title">
      The best Games in <span class="Colored">Vegawinner Casino</span>
    </div>
    <div class="BestGames-Panel">
      <p class="BestGames-Text">
        We have the latest games from all the top providers, including Microgaming, NetEnt and WMS.
      </p>
      <Search />
    </div>
    <div class="BestGames-Tabs">
      <button
      v-for="tab in tabs"
      :key="tab.name"
      class="Btn Btn--tab BestGames-Tab"
      :class="{'Btn--active BestGames-Tab--active': tabActive === tab.name}"
      @click="tabActive = tab.name"
    >
      <svg
        class="Icon"
        :width="tab.iconDimensions[0]"
        :height="tab.iconDimensions[1]"
      >
        <use :xlink:href="require('@/assets/img/icon-sprite.svg') + `#${tab.icon}`"></use>
      </svg>
      {{tab.name}}
      <i
        v-if="tabActive === tab.name"
        class="Arrow Tab-Arrow"
        :class="[ listIsOpen ? 'Arrow--up' : 'Arrow--down' ]"
        @click="listIsOpen = !listIsOpen"
      ></i>
    </button>
    </div>
    <div class="BestGames-Thumbs">
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb BestGames-Thumb--wide" href="#">
        <img src="@/assets/img/game4.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb BestGames-Thumb--wide" href="#">
        <img src="@/assets/img/game5.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb BestGames-Thumb--wide" href="#">
        <img src="@/assets/img/game2.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb BestGames-Thumb--wide" href="#">
        <img src="@/assets/img/game3.png" alt="">
      </a>
      <a class="Thumb BestGames-Thumb" href="#">
        <img src="@/assets/img/game1.png" alt="">
      </a>
    </div>
    <div class="BestGames-Btn">
      <button class="Btn">
        View all games
      </button>
    </div>
  </section>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'BestBestGames',
  components: {
    Search,
  },
  data() {
    return {
      listIsOpen: false,
      tabActive: 'Top games',
      tabs: [
        {
          name: 'Top games',
          icon: 'top',
          iconDimensions: [22, 22],
        },
        {
          name: 'New games',
          icon: 'star',
          iconDimensions: [22, 22],
        },
        {
          name: 'Roulette',
          icon: 'roulette',
          iconDimensions: [22, 22],
        },
        {
          name: 'Card games',
          icon: 'cards',
          iconDimensions: [20, 22],
        },
        {
          name: 'Live games',
          icon: 'video',
          iconDimensions: [26, 20],
        },
        {
          name: 'Slots',
          icon: 'slots',
          iconDimensions: [31, 20],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.BestGames {
  margin-bottom: 100px;

  &-Title {
    max-width: 60%;
    margin-bottom: 30px;

    @media(max-width: $screen-s) {
      display: none;
    }
  }

  &-Text {
    width: 41%;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 28px;

    @media(max-width: $screen-m) {
      font-size: 14px;
    }

    @media(max-width: $screen-s) {
      display: none;
    }
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

    @media(max-width: $screen-s) {
      flex-direction: column;
    }
  }

  &-Tab {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-right: 10px;
    padding: 20px 36px;

    @media(max-width: $screen-l) {
      padding: 22px 25px;
    }

    @media(max-width: $screen-m) {
      padding: 19px 14px;
    }

    @media(max-width: $screen-s) {
      order: 1;
      width: 100%;
    }

    &:last-child {
      margin-right: 0;
    }

    &--active {
      position: relative;

      @media(max-width: $screen-s) {
        display: flex;
        order: 0;
      }

      .Arrow {
        display: none;
        position: absolute;
        top: 26px;
        right: 14px;
        padding: 3px;
        border-color: var(--color-text-ghost);

        @media(max-width: $screen-s) {
          display: initial;
        }
      }
    }
  }

  &-Thumbs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 37px;

    @media(max-width: $screen-m) {
      margin-bottom: 26px;
    }

    @media(max-width: $screen-s) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &-Thumb {
    &--wide {
      grid-column: span 2;

      @media(max-width: $screen-s) {
        grid-column: span 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  &-Btn {
    text-align: center;
  }
}
</style>
