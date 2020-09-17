<template>
  <!-- eslint-disable max-len -->
  <section class="BestGames">
    <div class="Title Title--type-h2 BestGames-Title">
      The best Games <br/>in <span class="Colored">Vegawinner Casino</span>
    </div>
    <div class="BestGames-Text">
      We have the latest games from all the top providers, including Microgaming, NetEnt and WMS.
    </div>
    <div class="BestGames-Header" v-click-outside="onClickOutside">
      <button
        class="Btn Btn--tab Btn--active BestGames-Tab BestGames-Tab--active BestGames-ChosenTab"
        :class="{'BestGames-ChosenTab--opened': listIsOpen}"
        @click="listIsOpen = !listIsOpen"
      >
        <svg
          class="Icon"
          :class="`BestGames-Icon--${tabActive.icon}`"
        >
          <use :xlink:href="require('@/assets/img/icon-sprite.svg') + `#${tabActive.icon}`"></use>
        </svg>
        {{tabActive.name}}
        <i
          class="Arrow Tab-Arrow"
          :class="[ listIsOpen ? 'Arrow--up' : 'Arrow--down' ]"
        ></i>
      </button>
      <div v-if="width > 460 || listIsOpen"
       class="BestGames-Tabs"
      >
        <button
          v-for="(tab, i) in tabs"
          :key="tab.name"
          class="Btn Btn--tab BestGames-Tab"
          :class="{'Btn--active BestGames-Tab--active': tabActive.name === tab.name}"
          @click="onChooseTab(i)"
        >
          <svg
            class="Icon"
            :class="`BestGames-Icon--${tab.icon}`"
          >
            <use :xlink:href="require('@/assets/img/icon-sprite.svg') + `#${tab.icon}`"></use>
          </svg>
          {{tab.name}}
        </button>
      </div>
      <Search class="BestGames-Search" />
    </div>
<!--    <Loader v-if="gamesAreLoading" />-->
    <template>
      <div class="BestGames-Thumbs">
        <div
          v-for="(game, i) in gamesShowed"
          class="Thumb BestGames-Thumb"
          :class="{'BestGames-Thumb--wide': defineRectImages(i)}"
          :key="i"
        >
          <img
            v-if="games[i] && defineRectImages(i)"
            :src="`https://aws-origin.image-tech-storage.com/gameRes/rect/500/${games[i].item_title}.jpg`"
            :alt="`${games[i].application_name}`
          ">
          <img
            v-else-if="games[i]"
            :src="`https://aws-origin.image-tech-storage.com/gameRes/sq/200/${games[i].item_title}.jpg`"
            :alt="`${games[i].application_name}`
          ">
        </div>
      </div>
      <div class="BestGames-Btn">
        <button class="Btn Btn--outline Btn--outline2" @click="showAllGames()">
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
// import Loader from '@/components/Loader.vue';

export default {
  name: 'BestGames',
  components: {
    Search,
    // Loader,
  },
  data() {
    return {
      listIsOpen: false,
      tabs: [
        {
          name: 'Top games',
          icon: 'top',
        },
        {
          name: 'New games',
          icon: 'star',
        },
        {
          name: 'Roulette',
          icon: 'roulette',
        },
        {
          name: 'Card games',
          icon: 'cards',
        },
        {
          name: 'Live games',
          icon: 'video',
        },
        {
          name: 'Slots',
          icon: 'slots',
        },
      ],
      tabActive: {
        name: 'Top games',
        icon: 'top',
      },
      vcoConfig: {
        handler: this.handler,
        middleware: this.middleware,
        events: ['dblclick', 'click'],
        // Note: The default value is true, but in case you want to activate / deactivate
        //       this directive dynamically use this attribute.
        isActive: true,
        // Note: The default value is true. See "Detecting Iframe Clicks" section
        //       to understand why this behaviour is behind a flag.
        detectIFrame: true,
      },
    };
  },
  computed: {
    ...mapState(['width', 'games', 'gamesAreLoading']),
    gamesShowed() {
      return this.games.length && this.games.length < 20 ? this.games.length : 20;
    },
  },
  methods: {
    ...mapActions(['getGames']),
    onChooseTab(i) {
      this.tabActive = this.tabs[i];
      this.getGames(this.makeQuery(true));
      if (this.width <= 460) this.listIsOpen = false;
    },
    onClickOutside(e) {
      if (e.target.className !== 'BestGames-ChosenTab') this.listIsOpen = false;
    },
    makeQuery(limit = false) {
      let query = 'appName=VegasWinner&lang=en&platform=desktop';
      if (limit) query += `&limit=${this.gamesShowed}`;
      switch (this.tabActive.name) {
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

  @media(max-width: $screen-l) {
    margin-bottom: 71px;
  }

  @media(max-width: $screen-m) {
    margin-bottom: 90px;
  }

  &-Title {
    max-width: 60%;
    margin-bottom: 30px;

    @media(max-width: $screen-m) {
      margin-bottom: 20px;
    }

    @media(max-width: $screen-s) {
      display: none;
    }
  }

  &-Text {
    width: 41%;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 28px;
    color: var(--color-text-ghost);

    @media(max-width: $screen-l) {
      width: 50%;
      margin-bottom: 20px;
    }

    @media(max-width: $screen-m) {
      font-size: 14px;
    }

    @media(max-width: $screen-s) {
      display: none;
    }
  }

  &-Header {
    position: relative;
    display: flex;
    margin-bottom: 31px;
    width: 100%;

    @media(max-width: $screen-l) {
      margin-bottom: 15px;
    }

    @media(max-width: $screen-m) {
      margin-bottom: 20px;
    }

    @media(max-width: $screen-s) {
      flex-direction: column;
    }
  }

  &-Tabs {
    display: flex;
    justify-content: space-between;
    flex-grow: 0;
    margin-right: 10px;
    background-color: var(--color-body);

    @media(max-width: $screen-s) {
      position: absolute;
      left: 0;
      top: 125px;
      flex-direction: column;
      order: 2;
      width: 100%;
      margin-right: 0;
      border: 1px solid var(--color-border-ghost);
      border-top: none;
      border-radius: 0 0 8px 8px;

      .BestGames-Tab--active {
        display: none;
      }
    }
  }

  &-Search {
    flex-shrink: 0;

    @media(max-width: $screen-s) {
      order: 0;
      margin-bottom: 14px;
    }
  }

  &-Tab {
    display: flex;
    justify-content: center;
    margin-right: 10px;
    padding: 20px 27px;
    white-space: nowrap;

    @media(max-width: $screen-l) {
      padding: 20px 13px;
    }

    @media(max-width: $screen-m) {
      margin-right: 7px;
      padding: 13px 11px;
    }

    @media(max-width: $screen-s) {
      justify-content: flex-start;
      order: 2;
      width: 100%;
      padding: 20px;
      border: none;
      border-radius: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &--active {
      position: relative;

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

  &-ChosenTab {
    display: none;
    border: 1px solid var(--color-border-ghost);
    border-radius: 8px;
    z-index: 1;

    @media(max-width: $screen-s) {
      display: flex;
      order: 1;
    }

    &--opened {
      border-radius: 8px 8px 0 0;
    }
  }

  &-Icon {
    &--top {
      width: 22px;
      height: 22px;

      @media(max-width: $screen-m) {
        width: 17px;
        height: 17px;
      }

      @media(max-width: $screen-s) {
        width: 22px;
        height: 22px;
      }
    }

    &--star {
      width: 20px;
      height: 18px;

      @media(max-width: $screen-m) {
        width: 16px;
        height: 14px;
      }

      @media(max-width: $screen-s) {
        width: 20px;
        height: 18px;
      }
    }

    &--roulette {
      width: 20px;
      height: 20px;

      @media(max-width: $screen-m) {
        width: 16px;
        height: 16px;
      }

      @media(max-width: $screen-s) {
        width: 22px;
        height: 22px;
      }
    }

    &--cards {
      width: 19px;
      height: 20px;

      @media(max-width: $screen-m) {
        width: 15px;
        height: 16px;
      }

      @media(max-width: $screen-s) {
        width: 19px;
        height: 20px;
      }
    }

    &--video {
      width: 26px;
      height: 20px;

      @media(max-width: $screen-m) {
        width: 19px;
        height: 15px;
      }

      @media(max-width: $screen-s) {
        width: 26px;
        height: 20px;
      }
    }

    &--slots {
      width: 31px;
      height: 20px;

      @media(max-width: $screen-m) {
        width: 23px;
        height: 15px;
      }

      @media(max-width: $screen-s) {
        width: 31px;
        height: 20px;
      }
    }
  }

  &-Thumbs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 45px;

    @media(max-width: $screen-m) {
      margin-bottom: 26px;
    }

    @media(max-width: $screen-s) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &-Thumb {
    height: 194px;
    overflow: hidden;

    @media(max-width: $screen-l) {
      height: 148px;
    }

    @media(max-width: $screen-m) {
      height: 117px;
    }

    @media(max-width: $screen-s) {
      height: 138px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }

    &--wide {
      grid-column: span 2;

      @media(max-width: $screen-s) {
        grid-column: span 1;
      }
    }
  }

  &-Btn {
    text-align: center;

    .Btn {
      @media(max-width: $screen-m) {
        padding: 17px 20px;
        font-size: 12px;
      }
    }
  }
}
</style>
