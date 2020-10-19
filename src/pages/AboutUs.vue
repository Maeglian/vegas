<template>
<!-- eslint-disable max-len -->
  <section class="Page AboutUs">
  <h2 class="Title Title--type-h2 Page-Title AboutUs-Title">
    About <span class="Colored">Us</span>
  </h2>
  <div class="Page-Section AboutUs-Section">
    <h3>
      About Us
    </h3>
    <div>
      VegasWinner provides a selection of the world"s favorite games which you can download for free and play for fun or for real money. You can do all this in a friendly yet professional environment, utilizing the latest, most reliable playing software. We take away all the hassle leaving you free to enjoy the winning!
    </div>
  </div>
  <div class="Page-Section AboutUs-Section">
    <h3>
      Feel at home. Feel secure.
    </h3>
    <div>
      VegasWinner goes to great lengths to guarantee that your personal and financial information remains 100% secure and confidential. We employ industry standard security protocols (128 bit, SSL data encryption technology) to ensure that all transactions including deposits and withdrawals are carried out in a totally secure manner. Rest assured that under no circumstances will we pass on your details to a third party.
    </div>
  </div>
  <div class="Page-Section AboutUs-Section">
    <h3>
      Fair Gaming
    </h3>
    <div>
      A common concern of many first time players online is the issue of fairness and how we are able to provide truly fair game play. VegasWinner understands the importance of the need to guarantee fair gaming and we are dedicated to providing it at all times.<br/><br/>
      VegasWinner utilizes a certified and audited Random Number Generator (RNG) to ensure consistently random results. This system, an online gaming industry standard, has been extensively tested by running and analyzing millions of dice rolls, shuffles and spins. To view the testing certificate, <a href="https://aws-origin.image-tech-storage.com/vegaswinner.com/images/RNG_Certificate_SkillOnNet.pdf" target="_blank">click here</a>. VegasWinner also monitors ongoing game play to ensure that this level of fairness is maintained at all times.
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style lang="scss">
.AboutUs {
  &-Section {
    margin-bottom: 10px;
  }

  &-Title {
    margin-bottom: 60px;

    @media (max-width: $screen-l) {
      margin-bottom: 50px;
    }

    @media (max-width: $screen-m) {
      margin-bottom: 40px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 30px;
      padding-left: 20px;
    }
  }
}

</style>
