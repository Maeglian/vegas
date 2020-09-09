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
      @click="onChooseTab(tab.name)"
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
<!--    <Loader v-if="gamesAreLoading" />-->
    <Loader/>
    <template>
      <div class="BestGames-Thumbs">
        <div
          v-for="(game, i) in games"
          class="Thumb BestGames-Thumb"
          :class="{'BestGames-Thumb--wide': defineRectImages(i)}"
          :key="game.internal_game_id"
        >
          <img
            v-if="defineRectImages(i)"
            :src="`https://aws-origin.image-tech-storage.com/gameRes/rect/500/${game.item_title}.jpg`"
            :alt="`${game.application_name}`
          ">
          <img
            v-else
            :src="`https://aws-origin.image-tech-storage.com/gameRes/sq/200/${game.item_title}.jpg`"
            :alt="`${game.application_name}`
          ">
        </div>
      </div>
      <div class="BestGames-Btn">
        <button class="Btn" @click="showAllGames()">
          View all games
        </button>
      </div>
    </template>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import defineRectImages from '@/utils';
import Search from '@/components/Search.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'BestGames',
  components: {
    Search,
    Loader,
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
      gamesShowed: 20,
    };
  },
  computed: {
    ...mapState(['games', 'gamesAreLoading']),
  },
  methods: {
    ...mapActions(['getGames']),
    onChooseTab(tabName) {
      this.tabActive = tabName;
      this.getGames(this.makeQuery(true));
    },
    makeQuery(limit = false) {
      let query = 'appName=VegasWinner&lang=en&platform=desktop';
      if (limit) query += `&limit=${this.gamesShowed}`;
      switch (this.tabActive) {
        case 'New games':
          query += '&is_new=true';
          break;
        case 'Roulette':
          query += '&categories=roulette';
          break;
        case 'Card games':
          query += '&categories=Scratch Cards';
          break;
        case 'Live games':
          query += '&categories=Live Casino';
          break;
        case 'Slots':
          query += '&categories=Slot';
          break;
        default:
          query += '&is_most_popular=true';
      }

      return query;
    },
    showAllGames() {
      this.getGames(this.makeQuery(), this.gamesShowed);
    },
    defineRectImages,
  },
  mounted() {
    this.getGames(this.makeQuery(true));
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
