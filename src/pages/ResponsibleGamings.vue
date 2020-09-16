<template>
<!-- eslint-disable max-len -->
  <section class="Page ResponsibleGamings">
    <h2 class="Title Title--type-h2 Page-Title ResponsibleGamings-Title">
      Responsible <span class="Colored">Gamings</span>
    </h2>
    <div class="Page-Section ResponsibleGamings-Section">
      <h3>
        We encourage you to play responsibly
      </h3>
      <p>
        Gambling is a form of entertainment, but it should be enjoyed responsibly. It´s not a way to earn a quick buck. You should always avoid chasing losses, never play with money that you can’t afford to lose, and never gamble for money that should go towards rent, bills or other expenses. You should check your activity regularly in the Balance page to keep on top of your money spent.
      </p>
      <p>
        If you start to feel uncomfortable in any way due to your gambling, you should take a break from playing or even consider self-exclusion.
      </p>
      <p>
        If you have any questions or concerns, please contact the Customer Support staff who are available 24/7 and they will help you.
      </p>
    </div>
    <div class="Page-Section ResponsibleGamings-Section">
      <h3>
        Responsible gaming and protection measures
      </h3>
      <p>
        It’s important that our customers enjoy themselves in the casino, but we also understand that for some players, gaming can become a problem.
      </p>
      <p>
        We pride ourselves of being fair, transparent and socially responsible and want to protect our players from playing irresponsibly and safeguard you, so you can have a playful, yet responsible gaming experience. This
        is why we have the ability for you to set deposit limits or entire play limitations, these tools can help you keep control of your gambling and can be found in the My Account section of the casino.
      </p>
    </div>
    <div class="Page-Section ResponsibleGamings-Section">
      <h3>
        Cooling-off, temporary suspension and self-exclusion
      </h3>
      <p>
        If you need to take a break from playing, and don’t trust yourself to stay away, then use our Player Limitation options which can be found on the Player Limitation page of ‘My Account’.
      </p>
      <p>
        There are a range Player Limitations you can choose from:
      </p>
      <ul>
        <li>
          You can choose Cooling-Off, which you can choose from the following time frames, 24 hours, 48 hours or 7 days.
        </li>
        <li>
          You can choose Temporary Suspension, which you can choose from the following time frames, 30 days,
        60 days or 90 days.
        </li>
        <li>
          You can choose Self-Exclusion, which gives you a period of 180 days, which you can increase by contacting support after you make the self-exclusion.
        </li>
      </ul>
      <p>
        During any Self-Exclusion you will not be able to gamble or deposit, nor will you receive any marketing material (it can take up to 24 hours to remove you from all marketing databases).
      </p>
      <p>
        Please note that any Self-Exclusion set will also apply to any other account you have on our license.
      </p>
      <p>
        To Self-Exclude login <a href="#">here</a> now.
      </p>
    </div>
    <div class="Page-Section ResponsibleGamings-Section">
      <h3>
        Implementation of deposit limits
      </h3>
      <p>
        During the process of creating an account on our Malta license you will have the option to restrict your daily, weekly or monthly deposit amount to any amount you want.
      </p>
    </div>
    <div class="Page-Section ResponsibleGamings-Section">
      <h3>
        Time limit control
      </h3>
      <p>
        We have a feature available that will automatically log you out of the casino after a certain amount of time. If you would like this feature enabled please contact the support department and let them know the number of minutes you would like to be logged out.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResponsibleGamings',
};
</script>

<style lang="scss">
.ResponsibleGamings {
  &-Title {
    margin-bottom: 58px;

    @media (max-width: $screen-l) {
      margin-bottom: 50px;
    }

    @media (max-width: $screen-m) {
      margin-bottom: 40px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 30px;
    }
  }

  &-Section {
    margin-bottom: 10px;
  }
}
</style>
