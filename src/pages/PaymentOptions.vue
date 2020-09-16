<template>
<!-- eslint-disable max-len -->
  <section class="Page PaymentOptions">
    <h2 class="Title Title--type-h2 Page-Title PaymentOptions-Title">
      Payment <span class="Colored">Options</span>
    </h2>
    <div class="Page-Section PaymentOptions-Section">
      <h3>
        Credit Card Deposit
      </h3>
      <div>
        In order to deposit via a credit card there are a few things that need to be remembered.
      </div>
      <h3>
        Is your card International?
      </h3>
      <div>
        The card qualifies as international if it has 16 digits on the front as the card number. If not then your card may
        be local and you will need to apply to your bank for an international card.
      </div>
      <h3>
        Are you the card holder?
      </h3>
      <div>
        If you are the card holder then there is no problem to deposit. If the card is a relatives or friends then they will need to fill our authorization form, and both of you send documentation.
      </div>
      <h3>
        Are your personal details for your account correct?
      </h3>
      <div>
        If you are the card holder then there is no problem to deposit. If the card is a relatives or friends then they will need to fill our authorization form, and both of you send documentation.
      </div>
      <h3>
        Do you have sufficient funds on your card?
      </h3>
      <div>
        When trying to make a deposit please remember to make sure you have sufficient funds in your credit card, allowing for the exchange rate, as we process our funds in US Dollars.
      </div>
      <h3>
        Are your personal details for your account correct?
      </h3>
      <div>
        If you are the card holder then there is no problem to deposit. If the card is a relatives or friends then they will need to fill our authorization form, and both of you send documentation.
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PaymentOptions',
};
</script>

<style lang="scss">
.PaymentOptions {
  &-Title {
    margin-bottom: 45px;
  }

  h3 {
    margin-top: 30px;
    padding-bottom: 0;
    border-bottom: none;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
