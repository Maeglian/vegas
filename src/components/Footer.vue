<template>
  <!-- eslint-disable max-len -->
  <section class="Footer">
    <Partners class="Footer-Partners" />
    <nav class="Nav Footer-Nav">
      <router-link class="Link Footer-Link" to="/payment-methods">
        Payment methods
      </router-link>
      <router-link class="Link Footer-Link" to="/payment-options">
        Payment options
      </router-link>
      <router-link class="Link Footer-Link" to="/responsible-gamings">
        Responsible gaming
      </router-link>
      <router-link class="Link Footer-Link" to="/terms-and-conditions">
        Terms and conditions
      </router-link>
      <router-link class="Link Footer-Link" to="/bonus-policy">
        Bonus policy
      </router-link>
      <router-link class="Link Footer-Link" to="/privacy-policy">
        Privacy policy
      </router-link>
      <router-link class="Link Footer-Link" to="/about-us">
        About us
      </router-link>
      <router-link class="Link Footer-Link" to="/faq">
        Faq
      </router-link>
    </nav>
    <div class="Footer-Disclaimer">
      <div class="Footer-Text">
        This site’s operations are regulated by the Malta Gaming Authority and is operated by SkillOnNet Ltd, Office 1/5297 Level G, Quantum House,
        75, Abate Rigord Street, Ta’ Xbiex, XBX 1120, Malta, under the gaming license issued by the Malta Gaming Authority (license number MGA/CRP/171/2009/01) issued on 1 August 2018
        <br/>
        <br/>
        <u>Gambling can be addictive, please play responsibly</u>
      </div>
      <div class="Footer-Icons">
        <svg class="Icon Footer-Icon" width="47" height="21">
          <use xlink:href="@/assets/img/icon-sprite.svg#ssl"></use>
        </svg>
        <svg class="Icon Footer-Icon" width="24" height="24">
          <use xlink:href="@/assets/img/icon-sprite.svg#18"></use>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import Partners from '@/components/Partners.vue';

export default {
  name: 'Footer',
  components: {
    Partners,
  },
};
</script>

<style lang="scss">
.Footer {
  margin-bottom: 30px;

  &-Partners {
    margin-bottom: 28px;

    @media(min-width: $screen-l) {
      margin-bottom: 36px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 46px;
    }
  }

  &-Nav {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 36px;
  }

  &-Link {
    margin-right: 31px;
    margin-bottom: 16px;
    font-size: 12px;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }

    @media(min-width: $screen-m) {
      margin-right: 28px;
      font-size: 10px;
    }

    @media(min-width: $screen-l) {
      margin-right: 28px;
      font-size: 13px;
    }

    @media(min-width: $screen-xl) {
      margin-bottom: 10px;
      font-size: 12px;
    }
  }

  &-Disclaimer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media(min-width: $screen-m) {
      flex-direction: row;
      align-items: flex-end;
    }
  }

  &-Text {
    order: 1;
    font-size: 14px;
    line-height: 1.66;
    color: var(--color-more-faded);

    @media(min-width: $screen-m) {
      order: 0;
    }
  }

  &-Icons {
    display: flex;
    margin-left: 0;
    margin-bottom: 20px;

    @media(min-width: $screen-m) {
      margin-left: 141px;
      margin-bottom: 0;
    }
  }

  &-Icon {
    margin-right: 21px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
