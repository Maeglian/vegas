<template>
  <fragment>
    <li
      v-for="item in items"
      :key="item.name"
      class="Nav-Item"
      :class="[item.highlighted || (listIsOpen && item.children) ? 'Nav-Item--highlighted' : '' ]"
    >
      <div class="Nav-Name">
        <div class="Nav-BadgeContainer" v-if="item.badge">
          <div class="Badge Nav-Badge" v-if="item.badge">6</div>
          <svg
            v-if="item.icon"
            class="Icon Nav-Icon"
            :width="item.iconDimensions[0]"
            :height="item.iconDimensions[1]">
            <use :xlink:href="require('@/assets/img/icon-sprite.svg') + `#${item.icon}`"></use>
          </svg>
        </div>
        {{ item.name }}
        <i
          class="Nav-Arrow Arrow"
          :class="[ listIsOpen ? 'Arrow--up' : 'Arrow--down' ]"
          v-if="item.children"
          @click="listIsOpen = !listIsOpen"
        ></i>
      </div>
      <transition name="slide-up">
        <ul v-if="item.children" v-show="listIsOpen" class="Nav-List">
          <NavItem v-if="item.children" :items="item.children" />
        </ul>
      </transition>
    </li>
  </fragment>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      listIsOpen: false,
    };
  },
};
</script>

<style lang="scss">
.Nav {
  &-List {
    background-color: #1D2047;
  }

  &-Item {
    color: var(--color-text-main);

    &--highlighted {
      background-color: #1D2047;
    }

    .Nav-Item .Nav-Name {
      padding: 8px 0 8px 66px;
    }

    .Nav-Item .Nav-Item .Nav-Name {
      padding: 8px 0 9px 85px;
    }
  }

  &-Icon {
    margin-right: 20px;
  }

  &-Name {
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 0 16px 21px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    text-transform: uppercase;

    &:hover {
      color: var(--color-main1);
      background-color: #242857;
    }
  }

  &-Arrow {
    position: absolute;
    top: 50%;
    right: 10px;
  }

  &-BadgeContainer {
    position: relative;
  }

  &-Badge {
    position: absolute;
    top: -6px;
    left: -6px;
    color: #1D2047;
    background-color: var(--color-main1);
  }
}
</style>
