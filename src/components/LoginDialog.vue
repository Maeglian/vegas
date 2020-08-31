<template>
  <div class="Login">
    <div class="Login-Content">
      <div class="Login-Close" @click="$emit('close')">
      </div>
      <div class="Login-Title">
        Login
      </div>
      <div class="Title Title--center Colored Login-Greeting">
        Welcome Back
      </div>
      <form action="" class="Form">
        <div class="Form-Field Login-Field">
          <label class="Form-Label">
            Username or email
            <input type="text" class="Form-Input">
          </label>
        </div>
        <div class="Form-Field Login-Field">
          <label class="Form-Label">
            Password
          <input type="password" class="Form-Input">
          </label>
        </div>
        <a href="#" class="Form-Link Login-ForgotPassword">
          Forgot password?
        </a>
        <a href="#" class="Form-Link Login-HaveAccount">
          Don't have an account yet?
        </a>
        <div class="Btn Btn--color Form-Btn Login-Btn">
          Login
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginDialog',
};
</script>

<style lang="scss">
  .Login {
    position: relative;
    height: 100%;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #10133A;
      opacity: 0.9
    }

    &-Content {
      position: relative;
      z-index: 1;
      padding: 15px;
    }

    &-Close {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 15px;
      height: 15px;
      cursor: pointer;
      z-index: 1;

      &:before, &:after {
        content: '';
        position: absolute;
        left: 7.5px;
        width: 3px;
        height: 15px;
        background-color: var(--color-text-main);
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }

    &-Title {
      margin-bottom: 22px;
      font-size: 18px;
      text-transform: uppercase;
      text-align: center;
      color: var(--color-text-ghost);
    }

    &-Greeting {
      margin-bottom: 38px;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.16;
    }

    &-Field {
      margin-bottom: 10px;
    }

    &-ForgotPassword {
      display: block;
      margin-bottom: 96px;
    }

    &-HaveAccount {
      display: block;
      margin-bottom: 16px;
      text-align: center;
    }

    &-Btn {
      width: 100%;
      margin-bottom: 20px;
      font-size: 18px;
    }
  }

  .Form {
    &-Label {
      font-size: 14px;
      line-height: 0.96;
      color: var(--color-text-ghost);

    }

    &-Input {
      width: 100%;
      padding: 10px;
      color: var(--color-text-main);
      background-color: rgba(255, 255, 255, 0.05);
      border: none;
      border-radius: 4px;
    }

    &-Link {
      font-size: 12px;
      line-height: 1.24;
      text-decoration: none;
      color: var(--color-text-main);

      &:hover {
        color: var(--color-main2);
      }
    }
  }

</style>
