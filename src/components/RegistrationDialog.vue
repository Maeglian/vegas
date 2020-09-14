<template>
<!-- eslint-disable max-len -->
<div class="Registration">
  <div class="Registration-Content">
    <div class="Registration-Panel Registration-Form">
      <div class="Registration-Header">
        <div class="Registration-Chat">
          <svg class="Icon Registration-Icon" width="24" height="25">
            <use xlink:href="@/assets/img/icon-sprite.svg#question"></use>
          </svg>
          <div>
            Need Helps?<br/>
            Chat to us
          </div>
        </div>
        <a href="#" class="Registration-Members">
          Members Login
        </a>
        <div class="Modal-Close Registration-Close" @click="$emit('close')">
        </div>
      </div>
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
                <div class="Form-Row">
                  <select class="Form-Ceil Form-Input">
                    <option value="DD">DD</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                  </select>
                  <select class="Form-Ceil Form-Input">
                    <option value="MM">MM</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                  </select>
                  <select class="Form-Ceil Form-Input">
                    <option value="YYYY">YYYY</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                  </select>
                </div>
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
      <div class="Registration-Title">
        <span class="Colored">Welcome</span> Package<br/>
        € 800 + 155 Free Spins
      </div>
      <img src="@/assets/img/registration_joker.png" alt="" class="Registration-Image">
      <div class="Registration-Icons">
        <img src="@/assets/img/registration_1.svg" alt="" class="Registration-Icon">
        <img src="@/assets/img/mga.svg" alt="" class="Registration-Icon">
        <img src="@/assets/img/18.svg" alt="" class="Registration-Icon">
      </div>
      <div class="Registration-Comments">
        First Deposit Only. Min. deposit: €10, max. Bonus €100.
        Game: Book of Dead, Spin Value: €0.10. Alternative Game: Spinning Wilds; Spin value: €0.10. WR of 60x Bonus amount and Free Spin winnings amount (only Slots count) within 30 days. Max bet is 10% (min €0.10) of the Free Spin winnings and bonus amount or €5 (lowest amount applies). Free Spins must be used before deposited funds. Deposit/Welcome Bonus can only be claimed once every 72 hours across all Casinos.
      </div>
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
      birthdayDay: '',
      birthdayMonth: '',
      birthdayYear: '',
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
  position: relative;

  &-Header {
    position: absolute;
    top: 16px;
    right: 0;
    display: flex;
    align-items: center;
    width: 50%;
    padding-left: 25px;

    @media(max-width: 724px) {
      position: relative;
      top: initial;
      right: initial;
      width: 100%;
      margin-bottom: 20px;
    }
  }
  &-Icon {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-Chat {
    display: flex;
    margin-right: 58px;
    font-size: 12px;
    line-height: 1;
    color: var(--color-text-ghost);
    cursor: pointer;
  }

  &-Members {
    font-size: 12px;
    line-height: 1;
    color: var(--color-main1);
  }

  &-Close {
    position: relative;
    top: initial;
    right: 16px;
    margin-left: auto;

    @media(max-width: 724px) {
      right: 0;
    }
  }

  &-Text {
    margin-top: 5px;
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
    position: relative;
    display: flex;
    z-index: 1;
  }

  &-Panel {
    width: 50%;
    padding: 16px 16px 20px;

    @media(max-width: 724px) {
      width: 100%;
    }
  }

  &-Promo {
    text-align: center;

    @media(max-width: 724px) {
      display: none;
    }
  }

  &-Title {
    margin-top: 104px;
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.24;
    color: var(--color-text-main);
  }

  &-Icons {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    fill: rgba(157, 163, 180, 0.5);
  }

  &-Comments {
    font-size: 9px;
    line-height: 1;
    color: rgba(157, 163, 180, 0.5);
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
