<template>
<div v-if="activeLanguage" class="LanguageSwitcher">
  <div class="LanguageSwitcher-Outer" @click="isOpen = !isOpen">
    <img
      class="LanguageSwitcher-Icon"
      :src="require(`@/assets/img/${activeLanguage.code}.png`)"
      alt="Country flag" />
    <div v-if="width > 460" class="LanguageSwitcher-ActiveLanguage">
      {{ activeLanguage.code }}
    </div>
  </div>
  <transition name="slide-up">
    <div v-show="isOpen" class="LanguageSwitcher-Inner">
    <div
      v-for="lang in additionalLanguages"
      :key="lang.code"
      class="LanguageSwitcher-AdditionalLanguage"
      @click="onSelectLang(lang)"
    >
      <img
        class="LanguageSwitcher-Icon"
        :src="require(`@/assets/img/${lang.code}.png`)"
        alt="Country flag"
      >
      <div class="LanguageSwitcher-Language">
        {{ lang.name }}
      </div>
    </div>
  </div>
  </transition>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState(['width', 'languages', 'activeLanguage']),
    additionalLanguages() {
      return this.languages.filter((lang) => lang.code !== this.activeLanguage.code);
    },
  },
  methods: {
    ...mapMutations(['setActiveLanguage']),
    onSelectLang(lang) {
      this.setActiveLanguage(lang);
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss">
.LanguageSwitcher {
  position: relative;

  &-Outer {
    display: flex;
    align-items: center;
  }

  &-Icon {
    flex-shrink: 0;
    width: 24px;
    margin-right: 13px;
  }

  &-Inner {
    position: absolute;
    top: 50px;
    right: 0;
    width: 130px;
    padding: 0 13px;
    background: var(--color-body);
    border-radius: 8px;

    &:after {
      content: '';
      position: absolute;
      top: -5px;
      right: 20px;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      background: var(--color-body);
    }
  }

  &-AdditionalLanguage {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid #1D2047;
  }

  &-ActiveLanguage {
    width: 15px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  &-Language {
    font-size: 17px;
    font-weight: 400;
    color: var(--color-text-ghost);
  }
}

</style>
