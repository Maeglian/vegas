<template>
  <section class="Page PaymentMethods">
    <h2 class="Title Title--type-h2 Page-Title PaymentMethods-Title">
      Payment <span class="Colored">Methods</span>
    </h2>
    <div class="Page-Introduction PaymentMethods-Introduction">
      <p>
        We have a wide range of deposit and withdrawal methods at PlayJoker Casino. Starting
        with the most popular method of debit/credit cards, we accept all versions of VISA cards,
        and MasterCards. For Bank Transfers you can pay via Trustly, or Soft.
      </p>
    </div>
    <div class="Cards PaymentMethods-Cards">
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="110" height="33">
          <use xlink:href="@/assets/img/icon-sprite.svg#visa"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="110" height="33">
          <use xlink:href="@/assets/img/icon-sprite.svg#visa"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="110" height="33">
          <use xlink:href="@/assets/img/icon-sprite.svg#visa"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="110" height="33">
          <use xlink:href="@/assets/img/icon-sprite.svg#visa"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="141" height="36">
          <use xlink:href="@/assets/img/icon-sprite.svg#paypal"></use>
        </svg>
      </div>
      <div class="PaymentMethods-Card">
        <svg class="Icon Search-Icon" width="97" height="34">
          <use xlink:href="@/assets/img/icon-sprite.svg#skrill"></use>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PaymentMethods',
};
</script>

<style lang="scss">
.PaymentMethods {
  padding-left: 16px;
  padding-right: 16px;

  &-Title {
    margin-bottom: 43px;
  }

  &-Introduction {
    max-width: 70%;

    @media(max-width: $screen-s) {
      max-width: 100%;
    }
  }

  &-Cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media(max-width: $screen-s) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &-Card {
    width: 100%;
    padding: 50px;
    background-color: var(--color-bg);
    border-radius: 8px;
    text-align: center;

    @media(max-width: $screen-l) {
      padding: 40px;
    }

    @media(max-width: $screen-m) {
      padding: 30px;
    }

    svg {
      max-width: 100%;
    }
  }
}

</style>
