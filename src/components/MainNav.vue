<template>
  <nav class="MainNav" :class="{'MainNav--bg': documentIsScrolled}">
    <div class="MainNav-Overlay" v-if="navIsOpen" @click="navIsOpen = !navIsOpen"></div>
    <div class="MainNav-TopBar">
      <div class="MainNav-Nav">
        <div class="MainNav-Toggle" @click="navIsOpen = !navIsOpen">
          <img class="MainNav-Logo" src="@/assets/img/toggle.svg" />
        </div>
        <router-link to="/">
          <img class="MainNav-Logo" src="@/assets/img/logo.svg" />
        </router-link>
      </div>
      <div class="MainNav-Login">
        <button
          class="Btn Btn--text MainNav-Btn MainNav-Btn--text"
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
      <div v-if="navIsOpen" class="AsideMenu MainNav-Aside">
        <div class="AsideMenu-Header">
          <div class="AsideMenu-Close" @click="navIsOpen = !navIsOpen"></div>
          <img class="AsideMenu-Logo" src="@/assets/img/logo.svg" />
        </div>
        <div class="AsideMenu-Form">
          <form class="Form">
            <div class="Form-Field">
              <input type="text" class="Form-Input" placeholder="Username or email" />
            </div>
            <div class="Form-Field">
              <input type="password" class="Form-Input" placeholder="Password" />
            </div>
            <div class="AsideMenu-Buttons">
              <div class="Btn Btn--outline Btn--outline2 AsideMenu-Btn">
                Login
              </div>
              <div class="Btn Btn--color AsideMenu-Btn">
                Register
              </div>
            </div>
            <a href="#" class="AsideMenu-Link Form-Link Form-Link--color">
              Forgot password?
            </a>
          </form>
        </div>
        <div class="AsideMenu-List">
          <NavItem :items="navItems" @click="navIsOpen = !navIsOpen" />
        </div>
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
      documentIsScrolled: false,
      navIsOpen: false,
      topBarIsScrolled: false,
      navItems: [
        {
          name: 'promotion',
          url: '/promotions',
          icon: 'gift',
          iconDimensions: [19, 20],
        },
        {
          name: 'vip rewards',
          url: '/vip',
          icon: 'jewel',
          iconDimensions: [19, 18],
        },
        {
          name: 'about us',
          url: '/about-us',
          icon: 'about',
          iconDimensions: [19, 19],
        },
        {
          name: 'payment methods',
          url: '/payment-methods',
          icon: 'payment',
          iconDimensions: [19, 16],
        },
        {
          name: 'faq',
          url: '/faq',
          icon: 'faq',
          iconDimensions: [19, 19],
        },
      ],
    };
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
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
    onScroll() {
      this.documentIsScrolled = window.scrollY > 0;
    },
  },
};
</script>

<style lang="scss">
.MainNav {
  position: sticky;
  top: 0;
  z-index: 1;

  &-Overlay {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(6, 8, 30, 0.9);
    z-index: 2;
  }

  &--bg {
    background: rgba(39, 43, 95, 0.7);
  }

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
    padding: 15px 16px;

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
    width: 27px;
    margin-right: 20px;
    cursor: pointer;

    @media(max-width: $screen-s) {
      width: 17px;
      margin-right: 15px;
    }
  }

  &-Logo {
    vertical-align: middle;

    @media(max-width: $screen-m) {
      width: 152px;
    }

    @media(max-width: $screen-s) {
      width: 93px;
    }
  }

  &-Login {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.24;
  }

  &-Btn {
    margin-right: 30px;
    padding: 13px 30px;

    @media(max-width: $screen-s) {
      margin-right: 10px;
      font-size: 10px;
      font-weight: 500;
      padding: 9px 14px;
    }

    &:last-child {
      margin-right: 0;
    }

    &--text {
      padding: 0;
    }
  }
}

.AsideMenu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
  min-width: 308px;
  padding: 30px 0;
  background-color: var(--color-bg-nav);
  overflow-y: auto;
  scrollbar-width: thin;

  &-Header {
    display: flex;
    margin-bottom: 26px;
    padding: 0 16px;
  }

  &-Close {
    width: 20px;
    height: 20px;
    margin-right: 16px;
    cursor: pointer;

    &:before, &:after {
      content: '';
      position: absolute;
      left: 20px;
      width: 3px;
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

  &-Form {
    padding: 16px;
    border-top: 1px solid rgba(39, 43, 95, 0.5);
    border-bottom: 1px solid rgba(39, 43, 95, 0.5);
  }

  &-Buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &-Btn {
    width: calc(50% - 5px);
    padding: 14px;
  }

  &-Link {
    display: block;
    text-align: right;
  }

  &-List {
    width: 100%;
    padding-top: 18px;
  }
}
</style>
