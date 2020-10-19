<template>
  <div class="Partners">
    <marquee-text :duration="60">
      <div class="Partners-Wrapper">
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/e650ceed-000c-485f-9291-1f758a6523a4_medium_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/6d5fa71f-43b5-42fc-a39e-e62fe04b7d0e_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/790dc286-044f-478f-9b8d-be53bd925bad_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/dd15ead8-9192-4ac7-88c5-e99e240a8ebe_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/a5fc4d09-5618-454b-88d2-34aef3923c70_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/06d7c0a6-007e-405d-a384-272e80e62811_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/6c40c85b-1ac9-4dde-9020-13b876bb16e9_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/97e8d550-9020-4d12-98ff-e0c17e45124a_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="@/assets/img/maestro.svg" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/591b6ba5-04ff-41ef-904a-1722f0a6aa0c_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/d1442073-eaf5-49f1-aaf5-d600edf436fb_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="https://service.image-tech-storage.com/payments/33f94f44-cfbb-4d77-bb69-26c9dadd4b6b_tiny_light.png" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="@/assets/img/microgaming.svg" />
        </div>
        <div class="Partners-Partner">
          <img loading="lazy" class="Partners-Image" src="@/assets/img/evolution_gaming.svg" />
        </div>
      </div>
    </marquee-text>
  </div>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component';

export default {
  name: 'Partners',
  components: {
    MarqueeText,
  },
};
</script>

<style lang="scss">
.Partners {
  padding: 20px 0;
  border-bottom: 1px solid rgba(110, 88, 131, 0.3);

  @media(min-width: $screen-m) {
    padding-bottom: 40px;
  }

  @media(min-width: $screen-l) {
    padding-bottom: 25px;
  }

  &-Wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &-Partner {
    flex-shrink: 2;
    margin-right: 10px;
    margin-bottom: 10px;
    opacity: 0.25;

    @media(min-width: $screen-m) {
      margin-right: 25px;
      margin-bottom: 15px;
    }
  }
}
</style>
