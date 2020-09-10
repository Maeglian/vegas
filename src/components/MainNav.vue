<template>
  <nav class="MainNav">
    <div class="MainNav-TopBar">
      <div class="MainNav-Nav">
        <div class="MainNav-Toggle" @click="navIsOpen = !navIsOpen">
          <span>Меню</span>
        </div>
        <img class="MainNav-Logo" src="@/assets/img/logo.svg" />
      </div>
      <div class="MainNav-Login">
        <button
          class="Btn MainNav-Btn"
          @click="showLoginDialog()"
        >
          Login
        </button>
        <button
          class="Btn Btn--outline Btn--outline1 MainNav-Btn"
          @click="showRegistrationDialog()"
        >
          Register
        </button>
      </div>
    </div>
    <transition name="slide-left">
      <div v-if="navIsOpen" class="MainNav-Aside">
        <ul class="MainNav-List">
          <NavItem :items="navItems" />
        </ul>
        <div class="MainNav-Close" @click="navIsOpen = !navIsOpen"></div>
      </div>
    </transition>
    <modal name="login" classes="Modal" :width="380" :height="'auto'" adaptive>
      <LoginDialog @close="hideLoginDialog()" />
    </modal>
    <modal name="registration" classes="Modal" :width="724" :height="'auto'" adaptive>
      <RegistrationDialog @close="hideRegistrationDialog()" />
    </modal>
  </nav>
</template>

<script>
import LoginDialog from '@/components/LoginDialog.vue';
import RegistrationDialog from '@/components/RegistrationDialog.vue';
import NavItem from '@/components/NavItem.vue';

export default {
  name: 'MainNav',
  components: {
    LoginDialog,
    RegistrationDialog,
    NavItem,
  },
  data() {
    return {
      navIsOpen: false,
      navItems: [
        {
          name: 'home',
          icon: 'home',
          iconDimensions: [24, 20],
        },
        {
          name: 'games',
          icon: 'menu-games',
          iconDimensions: [24, 24],
          children: [
            {
              name: 'favourites',
            },
            {
              name: 'slots',
              children: [
                {
                  name: 'new games',
                },
                {
                  name: 'most popular',
                },
                {
                  name: 'jackpot games',
                },
              ],
            },
            {
              name: 'jackpot games',
            },
            {
              name: 'roulette',
            },
            {
              name: 'blackjack',
            },
            {
              name: 'live casino',
            },
            {
              name: 'others',
            },
            {
              name: 'show all',
            },
          ],
        },
        {
          name: 'cashier',
          icon: 'cashier',
          iconDimensions: [24, 18],
        },
        {
          name: 'daily picks',
          icon: 'daily',
          iconDimensions: [25, 24],
          highlighted: true,
        },
        {
          name: 'tournaments',
          icon: 'tournaments',
          iconDimensions: [20, 27],
          highlighted: true,
        },
        {
          name: 'rewards',
          icon: 'rewards',
          iconDimensions: [22, 28],
          highlighted: true,
          badge: true,
        },
        {
          name: 'personal area',
          icon: 'personal',
          iconDimensions: [20, 21],
        },
        {
          name: 'sound',
          icon: 'sound',
          iconDimensions: [24, 23],
        },
        {
          name: 'support',
          icon: 'support',
          iconDimensions: [24, 25],
        },
        {
          name: 'logout',
          icon: 'logout',
          iconDimensions: [23, 26],
        },
      ],
    };
  },
  methods: {
    showLoginDialog() {
      this.$modal.show('login');
    },
    hideLoginDialog() {
      this.$modal.hide('login');
    },
    showRegistrationDialog() {
      this.$modal.show('registration');
    },
    hideRegistrationDialog() {
      this.$modal.hide('registration');
    },
  },
};
</script>

<style lang="scss">
.MainNav {
  position: sticky;
  top: 0;
  z-index: 1;

  &-TopBar {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1248px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 31px;
    background: rgba(39, 43, 95, 0.5);

    @media(max-width: $screen-xl) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  &-Nav {
    display: flex;
    align-items: center;
  }

  &-Toggle {
    position: relative;
    display: flex;
    align-items: center;
    width: 27px;
    height: 18px;
    margin-right: 12px;
    cursor: pointer;

    @media(max-width: $screen-s) {
      width: 17px;
      height: 11px;
    }

    span {
      font-size: 0;
      width: 100%;
      height: 2.6px;
      background: var(--color-text-main);

      @media(max-width: $screen-s) {
        height: 1.6px;
      }
    }

    &:before, &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 2.6px;
      background: var(--color-text-main);

      @media(max-width: $screen-s) {
        height: 1.6px;
      }
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }
  }

  &-Logo {
    @media(max-width: $screen-m) {
      width: 152px;
    }

    @media(max-width: $screen-s) {
      width: 90px;
    }
  }

  &-Login {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.24;
  }

  &-Btn {
    margin-right: 10px;
    padding: 13px 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-Aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    min-width: $screen-xs;
    padding-right: 40px;
    background: linear-gradient(to left, #c8c8c8 40px, var(--color-bg-nav) 40px);
  }

  &-List {
    width: 100%;
    overflow-y: auto;
    scrollbar-width: thin;
  }

  &-CloseBar {
    width: 40px;
    height: 100%;
    background-color: #c8c8c8;
  }

  &-Close {
    position: absolute;
    top: 16px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 1;

    &:before, &:after {
      content: '';
      position: absolute;
      left: 10px;
      width: 2px;
      height: 20px;
      background-color: var(--color-text-main);
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
