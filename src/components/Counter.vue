<template>
  <div class="Counter">
    <div class="Counter-Text">
      Time left until finish
    </div>
    <div class="Counter-Content">
      <div class="Counter-Item Counter-Days">
        <div class="Counter-Count">
          16
        </div>
        <div class="Counter-Desc">
          Days
        </div>
      </div>
      <div class="Counter-Item Counter-Hours">
        <div class="Counter-Count">
          48
        </div>
        <div class="Counter-Desc">
          Hours
        </div>
      </div>
      <div class="Counter-Item Counter-Minutes">
        <div class="Counter-Count">
          36
        </div>
        <div class="Counter-Desc">
          Minutes
        </div>
      </div>
      <div class="Counter-Item Counter-Seconds">
        <div class="Counter-Count">
          05
        </div>
        <div class="Counter-Desc">
          Seconds
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
};
</script>

<style lang="scss">
.Counter {
  &-Text {
    font-size: 12px;
    font-weight: 300;
    line-height: 1.66;
    color: var(--color-faded);

    @media(max-width: $screen-s) {
      text-align: left;
    }
  }

  &-Content {
    display: flex;
  }

  &-Item {
    position: relative;
    margin-right: 32px;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }

    &:after {
      content: ":";
      position: absolute;
      top: -2px;
      right: -21px;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.18;
      color: var(--color-text-main);
    }

    &:last-child:after {
      display: none;
    }
  }

  &-Count {
    position: relative;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.18;
    color: var(--color-text-main);
    z-index: 1;

    @media(max-width: $screen-m) {
      font-size: 22px;
    }
  }

  &-Desc {
    font-size: 10px;
    font-weight: 300;
    line-height: 1.18;
    color: var(--color-faded);

    @media(max-width: $screen-s) {
      font-size: 9px;
    }
  }
}
</style>
