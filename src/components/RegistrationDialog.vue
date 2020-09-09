<template> <!-- eslint-disable max-len -->
<div class="Registration">
  <div class="Registration-Content Modal-Content">
    <div class="Modal-Close Registration-Close" @click="$emit('close')">
    </div>
    <div class="Registration-Panel Registration-Form">
      <form class="Form">
          <div v-if="step === 1" class="Registration-Section">
            <div class="Registration-Hello">
              Hello stranger, are you ready to join the world of play?
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                What's your first name?
                <input type="text" class="Form-Input" v-model="firstName">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                What's your last name?
                <input type="text" class="Form-Input" v-model="lastName">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                When is your birthday?
                <input type="month" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <div class="Form-Label">
                Choose your gender?
              </div>
              <div class="Form-Row">
                <div class="Form-Ceil">
                  <label class="Form-Container Form-Container--radio">
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      class="Form-Radio"
                      v-model="gender"
                    >
                    <span class="Form-Checkmark Form-Checkmark--radio"></span>
                  </label>
                </div>
                <div class="Form-Ceil">
                  <label class="Form-Container Form-Container--radio">
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      class="Form-Radio"
                      v-model="gender"
                    >
                    <span class="Form-Checkmark Form-Checkmark--radio"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                What’s your email?
                <input type="email" class="Form-Input" v-model="email">
              </label>
            </div>
          </div>
          <div v-else-if="step === 2" class="Registration-Section">
            <div class="Form-Field">
              <label class="Form-Label">
                Address
                <input type="text" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                City
                <input type="text" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                Postcode
                <input type="text" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                Pick your country
                <input type="text" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                Pick your state
                <input type="text" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                Mobile number
                <input type="text" class="Form-Input">
              </label>
            </div>
          </div>
          <div v-else-if="step === 3" class="Registration-Section">
            <div class="Form-Field">
              <label class="Form-Label">
                Create a username
                <input type="text" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                Create a password
                <input type="password" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                Confirm your password
                <input type="password" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Label">
                Set deposit limits
                <input type="text" class="Form-Input">
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Container Form-Container--checkbox">
                I confirm I am over 18
                <input
                  type="checkbox"
                  name="gender"
                  value="female"
                  class="Form-Checkbox"
                >
                <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
              </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Container Form-Container--checkbox">
              Make me eligible for Free Bonus/Exclusive Offers via all communication channels. Leave empty for more options
              <input
                type="checkbox"
                name="gender"
                value="female"
                class="Form-Checkbox"
              >
              <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
            </label>
            </div>
            <div class="Form-Field">
              <label class="Form-Container Form-Container--checkbox">
              I gree to the Terms and Conditions and Privacy Policy
              <input
                type="checkbox"
                name="gender"
                value="female"
                class="Form-Checkbox"
              >
              <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
            </label>
            </div>
          </div>
          <div v-else-if="step === 4" class="Registration-Section">
          <div class="Registration-Text">
            All that’s left to do is choose which ways you would like us to contact you with Free Bonus/Exclusive Offers and information about new game releases. Please choose from the options below.
          </div>
          <div class="Registration-Text">
            If later you don’t like what you receive, it’s simple to change your mind from your Preferences Page.
          </div>
          <div class="Form-Field">
            <label class="Form-Container Form-Container--checkbox">
              Email
              <input
                type="checkbox"
                name="gender"
                value="female"
                class="Form-Checkbox"
              >
              <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
            </label>
          </div>
          <div class="Form-Field">
            <label class="Form-Container Form-Container--checkbox">
              SMS
              <input
                type="checkbox"
                name="gender"
                value="female"
                class="Form-Checkbox"
              >
              <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
            </label>
          </div>
          <div class="Form-Field">
            <label class="Form-Container Form-Container--checkbox">
              Phone
              <input
                type="checkbox"
                name="gender"
                value="female"
                class="Form-Checkbox"
              >
              <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
            </label>
          </div>
          <div class="Form-Field">
            <label class="Form-Container Form-Container--checkbox">
              Mail
              <input
                type="checkbox"
                name="gender"
                value="female"
                class="Form-Checkbox"
              >
              <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
            </label>
          </div>
          <div class="Form-Field">
            <label class="Form-Container Form-Container--checkbox">
              Web
              <input
                type="checkbox"
                name="gender"
                value="female"
                class="Form-Checkbox"
              >
              <span class="Form-Checkmark Form-Checkmark--checkbox"></span>
            </label>
          </div>
          </div>
          <div class="Registration-Footer">
            <div
              v-if="step === 2 || step === 3"
              class="Registration-Back"
              @click="showPreviousStep()"
            >
              Go back
            </div>
            <div v-else-if="step === 4" class="Registration-Back">
              Choose none
            </div>
            <div
              v-if="step !== 4"
              class="Btn Btn--color Form-Btn Registration-Btn"
              @click="showNextStep()"
            >
              Continue
            </div>
            <button
              v-else
              class="Btn Btn--color Form-Btn Registration-Btn"
            >
              Choose all
            </button>
          </div>
      </form>
    </div>
    <div class="Registration-Panel Registration-Promo">
    </div>
  </div>
  <div class="Registration-Steps">
      <div
        v-if="step === 1 || step === 2"
        class="Registration-Step Registration-Step--active"
        :class="{'Registration-Step--active' : step === 2}"
      >
        <template v-if="step === 1">
          Step 1 of 3
        </template>
      </div>
      <div
        v-if="step === 1 || step === 2"
        class="Registration-Step"
        :class="{'Registration-Step--active' : step === 2}"
      >
        <template v-if="step === 1 || step === 2">
          Step 2 of 3
        </template>
      </div>
      <div
        class="Registration-Step"
        :class="{'Registration-Step--active' : step !== 1 && step !== 2}"
      >
        Step 3 of 3
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'RegistrationDialog',
  data() {
    return {
      step: 1,
      firstName: '',
      lastName: '',
      gender: 'male',
      email: '',
      address: '',
      city: '',
      country: '',
      state: '',
      postcode: '',
      username: '',
      password: '',
      limits: 0,
      over18: false,
      offers: false,
      terms: false,

    };
  },
  methods: {
    showNextStep() {
      if (this.step !== 4) this.step += 1;
    },
    showPreviousStep() {
      if (this.step !== 1) this.step -= 1;
    },
  },
};
</script>

<style lang="scss">
.Registration {
  &-Text {
    margin-bottom: 15px;
    font-size: 13px;
    line-height: 1.16;
    color: var(--color-text-ghost);
  }

  &-Hello {
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 1.16;
    color: var(--color-text-main);
  }

  &-Content {
    display: flex;
  }

  &-Panel {
    width: 50%;
  }

  &-Footer {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  &-Btn {
    flex-grow: 1;
  }

  &-Back {
    padding: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.18;
    color: var(--color-main1);
    text-transform: uppercase;
    cursor: pointer;
  }

  &-Steps {
    position: relative;
    z-index: 1;
    display: flex;
  }

  &-Step {
    position: relative;
    flex-grow: 1;
    padding: 9px 18px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-text-ghost);
    opacity: 0.2;

    &:after {
      content: "";
      position: absolute;
      top: 20%;
      right: 0;
      bottom: 20%;
      width: 3px;
      background-color: var(--color-text-ghost);
      opacity: 0.2;
    }

    &:last-child:after {
      display: none;
    }

    &--active {
      color: var(--color-bg-nav);
      background-color: var(--color-text-ghost);
      opacity: 1;

      &:after {
        display: none;
      }
    }
  }
}

</style>
