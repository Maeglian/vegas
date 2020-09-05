<template>
  <div class="Counter">
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
</template>

<script>
export default {
  name: 'Counter',
};
</script>

<style lang="scss">
.Counter {
  display: flex;

  &-Item {
    position: relative;
    margin-right: 31px;
    padding: 10px;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(16, 19, 58, 0.7);
      opacity: 0.7;
      border-radius: 8px;
    }

    &:after {
      content: ":";
      position: absolute;
      top: 18px;
      right: -14px;
      font-size: 20px;
      font-weight: 300;
      line-height: 1.18;
      color: var(--color-text-main);
    }

    &:last-child:after {
      display: none;
    }
  }

  &-Count {
    font-size: 34px;
    font-weight: 500;
    line-height: 1.18;
    color: var(--color-text-main);
  }

  &-Desc {
    font-size: 10px;
    font-weight: 300;
    line-height: 1.18;
    color: var(--color-faded);
  }
}
</style>
