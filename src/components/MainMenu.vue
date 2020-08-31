<template>
  <nav class="Nav MainNav">
    <div class="MainNav-Wrapper">
      <div class="MainNav-Nav">
        <div class="MainNav-Toggle">
          <span>Меню</span>
        </div>
        <img class="MainNav-Logo" src="@/assets/img/logo.svg" />
      </div>
      <div class="MainNav-Login">
        <a
          class="Btn Btn--link MainNav-Btn"
          href="#"
          @click="loginModalIsShown ? hideLoginDialog() : showLoginDialog()"
        >
          Login
        </a>
        <a class="Btn Btn--link MainNav-Btn" href="#">Register</a>
      </div>
    </div>
    <modal name="login" classes="Modal" :width="380" :height="'auto'" adaptive>
      <LoginDialog @close="hideLoginDialog()" />
    </modal>
  </nav>
</template>

<script>
import LoginDialog from '@/components/LoginDialog.vue';

export default {
  name: 'MainMenu',
  components: {
    LoginDialog,
  },
  data() {
    return {
      loginModalIsShown: false,
      registrationModalIsShown: false,
    };
  },
  methods: {
    showLoginDialog() {
      this.$modal.show('login');
    },
    hideLoginDialog() {
      this.$modal.hide('login');
    },
  },
};
</script>

<style lang="scss">
.Nav {
  display: flex;
}

.MainNav {
  position: sticky;
  top: 0;

  background: rgba(39, 43, 95, 0.5);
  z-index: 2;

  &-Wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1248px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 31px;
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

    span {
      font-size: 0;
      width: 100%;
      height: 2.6px;
      background: var(--color-text-main);
    }

    &:before, &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 2.6px;
      background: var(--color-text-main);
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
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
}
</style>
