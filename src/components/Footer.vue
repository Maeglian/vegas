<template>
  <!-- eslint-disable max-len -->
  <section class="Footer">
    <nav class="Nav Footer-Nav">
      <a class="Link Footer-Link" href="#">
        Payment methods
      </a>
      <a class="Link Footer-Link" href="#">
        Responsible gaming
      </a>
      <a class="Link Footer-Link" href="#">
        Terms and conditions
      </a>
      <a class="Link Footer-Link" href="#">
        Privacy policy
      </a>
      <a class="Link Footer-Link" href="#">
        About us
      </a>
      <a class="Link Footer-Link" href="#">
        Faq
      </a>
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
export default {
  name: 'Footer.vue',
};
</script>

<style lang="scss">
.Footer {
  padding-top: 46px;
  padding-bottom: 54px;

  &-Nav {
    margin-bottom: 46px;
  }

  &-Link {
    margin-right: 64px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-Disclaimer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &-Text {
    font-size: 14px;
    line-height: 1.66;
    color: var(--color-more-faded);
  }

  &-Icons {
    display: flex;
    margin-left: 141px;
  }

  &-Icon {
    margin-right: 21px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
