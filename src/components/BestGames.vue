<template>
  <!-- eslint-disable max-len -->
  <section class="BestGames">
    <div class="Title Title--type-h2 BestGames-Title">
      The best Games <br/>in <span class="Colored">Vegawinner Casino</span>
    </div>
    <div class="BestGames-Text">
      We have the latest and most popular games from all the leading game providers.
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
      <div v-if="width >= 768 || listIsOpen"
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
      <Search
        class="BestGames-Search"
        v-model="searchQuery"
        @search="searchGames(searchQuery)"
      />
    </div>
    <Loader v-if="gamesAreLoading" />
    <template v-else>
      <div class="BestGames-Thumbs">
        <div
          v-for="(game, i) in gamesLimited(gamesShowed)"
          class="Thumb BestGames-Thumb"
          :key="i"
        >
          <img
            :src="`https://aws-origin.image-tech-storage.com/gameRes/sq/${imageWidth}/${game.item_title}.jpg`"
            :alt="`${game.application_name}`"
            loading="lazy"
          />
        </div>
      </div>
      <div v-if="games.length > gamesShowed" class="BestGames-Btn">
        <button class="Btn Btn--outline Btn--outline2" @click="showMoreGames()">
          View more games
        </button>
      </div>
    </template>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
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
      gamesToShow: 24,
      gamesShowed: 24,
      searchQuery: '',
    };
  },
  computed: {
    ...mapState(['width', 'games', 'gamesAreLoading']),
    ...mapGetters(['gamesLimited']),
    imageWidth() {
      if (this.width > 460 && this.width < 590) return 250;
      if (this.width > 960) return 200;
      return 150;
    },
  },
  methods: {
    ...mapActions(['getGames', 'searchGames']),
    onChooseTab(i) {
      this.gamesShowed = this.gamesToShow;
      this.tabActive = this.tabs[i];
      this.getGames(this.makeQuery());
      if (this.width < 768) this.listIsOpen = false;
    },
    onClickOutside(e) {
      if (e.target.className !== 'BestGames-ChosenTab') this.listIsOpen = false;
    },
    makeQuery() {
      let query = `appName=${this.$skin}&lang=en&platform=desktop`;
      switch (this.tabActive.name) {
        case 'New games':
          query += '&is_new=true';
          break;
        case 'Roulette':
          query += '&categories=Roulette';
          break;
        case 'Card games':
          query += '&categories=Card Games';
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
    showMoreGames() {
      this.gamesShowed += this.gamesToShow;
    },
  },
  created() {
    this.getGames(this.makeQuery());
  },
};
</script>

<style lang="scss">
.BestGames {
  margin-bottom: 90px;

  @media(min-width: $screen-l) {
    margin-bottom: 71px;
  }

  @media(min-width: $screen-xl) {
    margin-bottom: 100px;
  }

  &-Title {
    display: none;

    @media(min-width: $screen-m) {
      display: block;
      margin-bottom: 20px;
    }

    @media(min-width: $screen-s) {
      max-width: 60%;
      margin-bottom: 30px;
    }
  }

  &-Text {
    display: none;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 28px;
    color: var(--color-text-ghost);

    @media(min-width: $screen-m) {
      display: block;
      width: 50%;
      font-size: 14px;
    }

    @media(min-width: $screen-l) {
      margin-bottom: 20px;
    }

    @media(min-width: $screen-xl) {
      width: 41%;
    }
  }

  &-Header {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;

    @media(min-width: $screen-m) {
      flex-direction: row;
    }

    @media(min-width: $screen-l) {
      margin-bottom: 15px;
    }

    @media(min-width: $screen-s) {
      margin-bottom: 31px;
    }
  }

  &-Tabs {
    position: absolute;
    left: 0;
    top: 125px;
    display: flex;
    flex-direction: column;
    order: 2;
    justify-content: space-between;
    width: 100%;
    background-color: var(--color-body);
    border: 1px solid var(--color-border-ghost);
    border-top: none;
    border-radius: 0 0 8px 8px;

    .BestGames-Tab--active {
      display: none;
    }

    @media(min-width: $screen-m) {
      position: relative;
      top: initial;
      left: initial;
      flex-direction: row;
      flex-grow: 0;
      order: 0;
      margin-right: 10px;
      border: none;

      .BestGames-Tab--active {
        display: inline-flex;
      }
    }
  }

  &-Search {
    order: 0;
    margin-bottom: 14px;

    @media(min-width: $screen-m) {
      flex-shrink: 0;
      margin-bottom: 0;
    }
  }

  &-Tab {
    display: flex;
    justify-content: flex-start;
    order: 2;
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 0;

    @media(min-width: $screen-m) {
      margin-right: 7px;
      padding: 13px 11px;
      border: 1px solid var(--color-border-ghost);
      border-radius: 8px;
      white-space: nowrap;
    }

    @media(min-width: $screen-l) {
      padding: 20px 13px;
    }

    @media(min-width: $screen-xl) {
      justify-content: center;
      margin-right: 10px;
      padding: 20px 27px;
      white-space: nowrap;
    }

    &:last-child {
      margin-right: 0;
    }

    &--active {
      position: relative;

      .Arrow {
        position: absolute;
        top: 26px;
        right: 14px;
        padding: 3px;
        border-color: var(--color-text-ghost);

        @media(min-width: $screen-m) {
          display: none;
        }
      }
    }
  }

  &-ChosenTab {
    display: flex;
    order: 1;
    border: 1px solid var(--color-border-ghost);
    border-radius: 8px;
    z-index: 1;

    @media(min-width: $screen-m) {
      display: none;
    }

    &--opened {
      border-radius: 8px 8px 0 0;
    }
  }

  &-Icon {
    &--top {
      width: 22px;
      height: 22px;

      @media(min-width: $screen-m) {
        width: 17px;
        height: 17px;
      }

      @media(min-width: $screen-xl) {
        width: 22px;
        height: 22px;
      }
    }

    &--star {
      width: 20px;
      height: 18px;

      @media(min-width: $screen-m) {
        width: 16px;
        height: 14px;
      }

      @media(min-width: $screen-xl) {
        width: 20px;
        height: 18px;
      }
    }

    &--roulette {
      width: 20px;
      height: 20px;

      @media(min-width: $screen-m) {
        width: 16px;
        height: 16px;
      }

      @media(min-width: $screen-xl) {
        width: 22px;
        height: 22px;
      }
    }

    &--cards {
      width: 19px;
      height: 20px;

      @media(min-width: $screen-m) {
        width: 15px;
        height: 16px;
      }

      @media(min-width: $screen-xl) {
        width: 19px;
        height: 20px;
      }
    }

    &--video {
      width: 26px;
      height: 20px;

      @media(min-width: $screen-m) {
        width: 19px;
        height: 15px;
      }

      @media(min-width: $screen-xl) {
        width: 26px;
        height: 20px;
      }
    }

    &--slots {
      width: 31px;
      height: 20px;

      @media(min-width: $screen-m) {
        width: 23px;
        height: 15px;
      }

      @media(min-width: $screen-xl) {
        width: 31px;
        height: 20px;
      }
    }
  }

  &-Thumbs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 26px;

    @media(min-width: $screen-s) {
      grid-template-columns: repeat(6, 1fr);
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 45px;
    }
  }

  &-Thumb {
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  &-Btn {
    text-align: center;

    .Btn {
      padding: 17px 20px;
      font-size: 12px;

      @media(min-width: $screen-l) {
        padding: 21px 27px;
        font-size: 14px;
      }

      @media(min-width: $screen-xl) {
        padding: 21px 35px;
        font-size: 14px;
      }
    }
  }
}
</style>
