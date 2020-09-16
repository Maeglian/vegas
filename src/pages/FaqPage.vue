<template>
<section class="Page Faq">
  <h2 class="Title Title--type-h2 Page-Title Faq-Title">
    Frequently Asked <span class="Colored">Questions</span>
  </h2>
  <div class="Title Title--type-h4 Faq-Subtitle">
    Licence & Security
  </div>
  <Accordion
    class="Faq-Accordion"
    v-for="item in accordionItems1"
    :key="item.title"
    :title="item.title"
    :content="item.content"
  />
  <div class="Title Title--type-h4 Faq-Subtitle">
    Implementation of deposit limits
  </div>
  <Accordion
    class="Faq-Accordion"
    v-for="item in accordionItems2"
    :key="item.title"
    :title="item.title"
    :content="item.content"
  />
  <div class="Title Title--type-h4 Faq-Subtitle">
    Responsible gaming and protection measures
  </div>
  <Accordion
    class="Faq-Accordion"
    v-for="item in accordionItems3"
    :key="item.title"
    :title="item.title"
    :content="item.content"
  />
</section>
</template>

<script>
import Accordion from '@/components/Accordion.vue';

export default {
  name: 'FaqPage',
  components: {
    Accordion,
  },
  data() {
    return {
      accordionItems1: [
        {
          title: 'Is your card International?',
          content: 'Here at PlayJoker we are just the same players as you. We ourselves have been playing at different casino sites for many years and therefore have vast playing experience. We’ve seen hundreds of games and visited dozens of casino-sites. We know what you need and expect as a player.',
        },
        {
          title: 'Implementation of deposit limits',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Time limit control',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Implementation of deposit limits',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Cooling-off, temporary suspension and self-exclusion',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
      ],
      accordionItems2: [
        {
          title: 'Implementation of deposit limits',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Time limit control',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Implementation of deposit limits',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Cooling-off, temporary suspension and self-exclusion',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
      ],
      accordionItems3: [
        {
          title: 'Implementation of deposit limits',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Time limit control',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Implementation of deposit limits',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
        {
          title: 'Cooling-off, temporary suspension and self-exclusion',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam odit sapiente! A ad atque deserunt distinctio dolor ducimus earum esse in, ipsa natus numquam provident quas quisquam reprehenderit temporibus!',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.Faq {
  &-Subtitle {
    margin-top: 58px;
    margin-bottom: 28px;
    color: var(--color-more-faded);

    @media(max-width: $screen-l) {
      margin-top: 48px;
      margin-bottom: 22px;
    }

    @media(max-width: $screen-m) {
      margin-top: 40px;
      margin-bottom: 22px;
    }

    @media(max-width: $screen-s) {
      margin-top: 33px;
      margin-bottom: 16px;
    }
  }

  &-Accordion {
    margin-bottom: 10px;
  }
}

</style>
