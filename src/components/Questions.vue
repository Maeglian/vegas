<template>
  <!-- eslint-disable max-len -->
  <section class="Questions">
    <div class="Title Title--type-h2 Questions-Title">
      Frequently asked <span class="Colored">questions</span>
    </div>
    <div class="Questions-Content">
      <div class="Questions-Item">
        <div class="Questions-Question">
          <span class="Colored">1.</span> How do you claim the free spins deposit bonus?
        </div>
        <p class="Questions-Answer">
          To claim the free spins deposit bonus, simply click on the Sign Up icon on the SpinGenie homepage, register your account and make your initial deposit of £10 or more.
        </p>
      </div>
      <div class="Questions-Item">
        <div class="Questions-Question">
          <span class="Colored">2.</span> Can you spin and win real money with online slots?
        </div>
        <p class="Questions-Answer">
          Yes. Online slots are playable with real money, although some slots also offer a free to play option. Make sure that you only gamble with money you can afford to lose.
        </p>
      </div>
      <div class="Questions-Item">
        <div class="Questions-Question">
          <span class="Colored">3.</span> Are casino free spins the same as slots free spins?
        </div>
        <p class="Questions-Answer">
          Casino free spins are free spins awarded to you by a casino, often for making a deposit. Slots free spins are free spins that you receive while playing a particular game.
        </p>
      </div>
      <div class="Questions-Item">
        <div class="Questions-Question">
          <span class="Colored">4.</span> What is a free spins on deposit promotion?
        </div>
        <p class="Questions-Answer">
          This is a promotion that awards players free spins on deposit. In our case, the free spins on deposit promotion gives you 108 free spins.
        </p>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Questions',
};
</script>

<style lang="scss">
.Questions {
  margin-bottom: 72px;

  @media(max-width: $screen-m) {
    margin-bottom: 63px;
  }

  @media(max-width: $screen-s) {
    padding-left: 0;
    padding-right: 0;
  }

  &-Title {
    margin-bottom: 35px;

    @media(max-width: $screen-s) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  &-Content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-Item {
    width: calc(50% - 5px);
    margin-bottom: 10px;
    padding: 40px 40px 34px;
    background: var(--color-bg);

    @media(max-width: $screen-l) {
      padding: 30px;
    }

    @media(max-width: $screen-s) {
      width: 100%;
      margin-bottom: 20px;
      padding: 25px 16px;
    }
  }

  &-Question {
    padding-bottom: 26px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.26;
    color: var(--color-text-main);
    border-bottom: 1px solid rgba(39, 43, 95, 0.5);
  }

  &-Answer {
    font-size: 16px;
    line-height: 1.61;
    color: rgba(255, 255, 255, 0.4);
  }
}
</style>
