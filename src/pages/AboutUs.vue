<template>
<!-- eslint-disable max-len -->
  <section class="Page AboutUs">
  <h2 class="Title Title--type-h2 Page-Title AboutUs-Title">
    About <span class="Colored">Us</span>
  </h2>
  <div class="Page-Section AboutUs-Section">
    <h3>
      Who We Are
    </h3>
    <div>
      Here at PlayJoker we are just the same players as you. We ourselves have been playing at different casino sites for many years and therefore have vast playing experience. We’ve seen hundreds of games and visited dozens of casino-sites. We know what you need and expect as a player.
    </div>
  </div>
  <div class="Page-Section AboutUs-Section">
    <h3>
      What PlayJoker Is
    </h3>
    <div>
      PlayJoker casino is run by a team of experienced casino players and enthusiasts with vast experience in both playing at and running online casinos. It is a high-end casino with games provided by the best developers
      in the industry, support service always ready to assist you
      in any situation, and of course big wins just a couple mouse-clicks away. So don't miss your chance and join us now!
    </div>
  </div>
  <div class="Page-Section AboutUs-Section">
    <h3>
      Our Software
    </h3>
    <div>
      PlayJoker uses products of best casino software and game providers around. You might have heard of them - Amatic, BetSoft, Endorphina, Ezugi, Microgaming, SoftSwiss. Every true casino player knows these names and trusts them just like we do. We don't want our players to be a part of some sort of experiment. We just want
      to give our players a reliable gambling experience that we ourselves would enjoy. And we do!
    </div>
  </div>
  <div class="Page-Section AboutUs-Section">
    <h3>
      Our License
    </h3>
    <div>
      Vegaswinner.com is owned and operated by Direx N.V., a company registered and established under the laws of Curacao and its wholly owned subsidiary, Direx Limited, registered address 12 Kolonakiou Street, West Block, 1st Floor, Office/flat 101, Agios Athanasios, Postal Code: 4103, Limassol, Cyprus. Direx N.V. is licensed and regulated by Antillephone N.V.. Direx N.V.’s registration number is 131879 and its registered address is Heelsumstraat 51 E-Commerce Park, Curacao.
    </div>
  </div>
  <div class="Page-Section AboutUs-Section">
    <h3>
      Payment options & security
    </h3>
    <div>
      One of the most important things every casino-player needs is maximum predictability when it comes to money. Nobody likes waiting. With us, you can finally make deposits and withdrawals in the blink of an eye. Choose your currency, make a deposit, take a deep breath and here you are – ready for non-stop casino action.<br/>
      Once you've won, the first thing you want to do is withdraw your winnings. We won’t keep you waiting, as we’ll process all withdrawals as fast as possible so that you can spend the money you won fair and square.
      And here’s one more thing. We accept Bitcoin. Using this amazing crypto currency definitely has some advantages. In addition to full anonymity and security for all Bitcoin users, all your payments are processed instantly. You can deposit and withdraw in mere seconds.
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
