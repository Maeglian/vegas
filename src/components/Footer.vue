<template>
  <!-- eslint-disable max-len -->
  <section class="Footer">
    <Partners class="Footer-Partners" />
    <nav class="Nav Footer-Nav">
      <a class="Link Footer-Link" href="#">
        Payment&nbsp;methods
      </a>
      <a class="Link Footer-Link" href="#">
        Responsible&nbsp;gaming
      </a>
      <a class="Link Footer-Link" href="#">
        Terms&nbsp;and&nbsp;conditions
      </a>
      <router-link class="Link Footer-Link" to="/bonus-policy">
        Bonus&nbsp;policy
      </router-link>
      <a class="Link Footer-Link" href="#">
        Privacy&nbsp;policy
      </a>
      <router-link class="Link Footer-Link" to="/about-us">
        About&nbsp;us
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
  name: 'Footer.vue',
  components: {
    Partners,
  },
};
</script>

<style lang="scss">
.Footer {
  padding-bottom: 54px;

  @media(max-width: $screen-m) {
    padding-top: 20px;
  }

  &-Partners {
    margin-bottom: 40px;
  }

  &-Nav {
    margin-bottom: 46px;
  }

  &-Link {
    margin-right: 31px;

    &:last-child {
      margin-right: 0;
    }

    @media(max-width: $screen-l) {
      margin-right: 28px;
      font-size: 13px;
    }

    @media(max-width: $screen-m) {
      margin-right: 28px;
      font-size: 10px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 16px;
      font-size: 12px;
    }
  }

  &-Disclaimer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media(max-width: $screen-s) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &-Text {
    font-size: 14px;
    line-height: 1.66;
    color: var(--color-more-faded);

    @media(max-width: $screen-s) {
      order: 1;
    }
  }

  &-Icons {
    display: flex;
    margin-left: 141px;

    @media(max-width: $screen-s) {
      margin-left: 0;
      margin-bottom: 20px;
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
