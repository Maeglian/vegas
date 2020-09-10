<template>
  <div class="Login">
    <div class="Login-Content Modal-Content">
      <div class="Modal-Close Login-Close" @click="$emit('close')">
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
        <a href="#" class="Form-Link Form-Link--color Login-ForgotPassword">
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
</style>
