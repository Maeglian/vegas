<template>
  <div class="Counter">
    <div class="Counter-Text">
      Time left until finish
    </div>
    <div class="Counter-Content">
      <div class="Counter-Item Counter-Days">
        <div class="Counter-Count">
          {{currentTime.days}}
        </div>
        <div class="Counter-Desc">
          Days
        </div>
      </div>
      <div class="Counter-Item Counter-Hours">
        <div class="Counter-Count">
          {{currentTime.hours}}
        </div>
        <div class="Counter-Desc">
          Hours
        </div>
      </div>
      <div class="Counter-Item Counter-Minutes">
        <div class="Counter-Count">
          {{currentTime.minutes}}
        </div>
        <div class="Counter-Desc">
          Minutes
        </div>
      </div>
      <div class="Counter-Item Counter-Seconds">
        <div class="Counter-Count">
          {{currentTime.seconds}}
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
  props: {
    enddate: {
      type: Date,
      required: true,
    },
    speed: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      currentTime: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      },
    };
  },
  mounted() {
    setTimeout(this.countdown, 1);
  },
  methods: {
    countdown() {
      const t = Date.parse(this.enddate) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (t > 0) {
        this.currentTime = {
          total: t,
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        };
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        };
      }
    },
  },
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
