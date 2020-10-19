<template>
<section class="Page Faq">
  <h2 class="Title Title--type-h2 Page-Title Faq-Title">
    Frequently Asked <span class="Colored">Questions</span>
  </h2>
  <template v-for="section in accordionItems">
    <div class="Title Title--type-h4 Faq-Subtitle" :key="section.title">
      {{ section.title }}
    </div>
    <Accordion
      class="Faq-Accordion"
      v-for="item in section.children"
      :key="item.title"
      :title="item.title"
      :content="item.content"
    />
  </template>
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
      accordionItems: [
        {
          title: 'Licence & Security',
          children: [
            {
              title: 'Is VegasWinner a safe place to play?',
              content: 'VegasWinner is highly recommended thanks not only to the popularity of our games but also to the security we offer our players. The entire gaming system and internal procedures are fully certified in line with all necessary conditions as set out by licence conditions.',
            },
            {
              title: 'How safe are my personal details at VegasWinner?',
              content: 'VegasWinner goes to great lengths to guarantee that your personal and financial information remains 100% secure and confidential. We employ industry standard security protocol(The connection to this site is encrypted and authenticated using TLS 1.2 (a strong protocol), ECDHE_RSA with X25519 (a strong key exchange), and AES_128_GCM (a strong cipher) to ensure that all transactions including deposits and withdrawals are carried out in a totally secure manner. This technology protects you from having your information intercepted by anyone other than VegasWinner while it is being transmitted between you and VegasWinner.',
            },
            {
              title: 'On which platforms is VegasWinner available?',
              content: 'You will be able to play your favourite games through a large variety of platforms. Our software is available on PC, tablets and smart phones.',
            },
            {
              title: 'Which game providers are available at VegasWinner?',
              content: 'VegasWinner offers games from providers Amaya, NextGen, NetEnt, WMS, Evolution and many others, so you\'re guaranteed to find something you like!',
            },
          ],
        },
        {
          title: 'Bonuses & promotions',
          children: [
            {
              title: 'How do I claim my free bonus?',
              content: 'Congratulations! If you have received an exclusive free bonus, you are moments away from enjoying your present. Please open the Cashier, navigate to the Bonuses Section, type in the relevant Coupon Code and click the Submit button. The bonus is then yours!',
            },
            {
              title: 'How do I claim my deposit bonus?',
              content: 'We offer a large variety of deposit bonuses. While making your deposit, just insert the code in the BONUS CODE box and enjoy your extra funds!',
            },
            {
              title: 'On which games can I play with my bonus?',
              content: 'Unless otherwise stated, all bonuses have \'Standard Wagering\' terms, meaning that you can place bets on Slots and Scratch games. It’s important to note, however, that eligible games may differ from one offer to another, so we recommend you review our Bonus Policy by <a href="/bonus-policy">clicking here</a> to avoid any confusion.',
            },
            {
              title: 'What kind of offers do you have at VegasWinner?',
              content: 'In addition to our generous Welcome Package , you can also enjoy a range of rewarding offers such as free spins, reload bonuses, exclusive promotions, special competitions, Daily Picks, new games offers, and a whole host of other perks thanks to our VIP program ! When you validate your email address upon joining, you\'ll then get details of all our special offers. You can also bookmark the Promotions Page to have all our offers at your fingertips.',
            },
            {
              title: 'Where can I check my bonus wagering requirements?',
              content: 'You can keep track of your bonus wagering requirements by accessing the Cashier and then navigating to the Bonuses section. Its important to note that wagering requirements may differ from one offer to another so we recommended you review our Bonus Policy by <a href="/bonus-policy">clicking here</a> to avoid any confusion.',
            },
            {
              title: 'Do you have a loyalty program at VegasWinner?',
              content: 'Yes we do! We keep rewarding our players with an incredible VIP program where you\'ll enjoy the benefits of keeping your gameplay at VegasWinner. Just have a look at what\'s waiting for you: <a href="/#promotions">click here</a>',
            },
            {
              title: 'How many points are necessary to get to Level Platinum?',
              content: 'You can look at the VIP levels and the required monthly points to reach and maintain each Level by <a href="/vip">clicking here</a> ',
            },
            {
              title: 'How are VIP Points calculated?',
              content: 'VIP Points are accumulated when a player wagers in the Casino. There are different ratios for different games. See below.<br/><table class="Faq-Table"><tbody><tr><th><p>Games</p></th><th><p>Wagering</p></th><th><p>Points</p></th></tr><tr><td>Slots (including jackpot slots), Doubles heaven, Scratch Games</td><td>20</td><td>1</td></tr><tr><td>Hi &amp; Lo, Let Them Ride</td><td>40</td><td>1</td></tr><tr><td>Carribean Poker, Casino Holdem</td><td>60</td><td>1</td></tr><tr><td>All Roulette, Video Poker, Big Wheel, Blackjack, Baccarat, Punto Banco</td><td>80</td><td>1</td></tr><tr><td>Craps, Pai Gow Poker</td><td>160</td><td>1</td></tr></tbody></table>',
            },
          ],
        },
        {
          title: 'Deposit / withdrawal',
          children: [
            {
              title: 'What methods can I use to deposit money into my account?',
              content: 'Once you are ready to play with real money, you will find that depositing at VegasWinner couldn\'t be easier. We accept all major payment methods including credit/debit cards, Neteller, Skrill and many other e-payment options. You can find all the methods available for your country in the Deposit section of the Cashier. Availability depends on your country.',
            },
            {
              title: 'I’ve just requested a withdrawal. Do I need to send any documentation?',
              content: 'As part of our security procedure, we require standard verification documents upon customers\' first withdrawal request. If your funds are being returned by Wire Transfer or your withdrawal is general winnings above the amount you have deposited, we kindly ask you to provide us with the following:<br/><br/><ol><li>Utility bill no older than 6 months</li><li>Copy of the front of your credit card (for security reasons, please ensure that the middle 8 digits on the front of your credit card are hidden)</li><li>Proof of ID (Passport/Driving Licence etc.)</li><li>If you are withdrawing to an E-Wallet account, please provide us with your account number/email address attached to the account.</li></ol>We check documents as quickly as possible, usually less than 12 hours. It could take longer if extra verification is needed, so if you haven’t heard from us within 48 hours, please contact customer support.',
            },
            {
              title: 'How long will it take to receive my withdrawal?',
              content: 'Our Lightning Withdrawals means you\'ll get your cash within 24 hours, subject to providing any information we require in accordance with our terms and conditions.<br/><br/>For a complete timetable of when you should expect to see your funds in your account, please visit the Withdraw section of the Cashier.',
            },
            {
              title: 'I received the error message: You cannot withdraw while having active bonuses, please contact support to resolve this issue. What should I do?',
              content: 'If you have an active bonus in your account, you are first required to fulfil the bonus requirements before placing a withdrawal request. For your convenience, you can keep track of your bonus requirements progress in the Bonuses section of the Cashier. Once the bonus requirements have been fulfilled, you will be able to proceed with your withdrawal request.',
            },
            {
              title: 'Can I set limits on my play at VegasWinner?',
              content: 'Yes you can. We take pride in providing a safe environment for your gaming. You can set your deposit limits under the personal settings section of the cashier. You can also set other limits on your account, such as limiting account access for specified periods of time. These can be found within the Account Limitations section. Please refer to our Responsible Gaming page for more details.',
            },
            {
              title: 'How will I know if there are any fees for processing at VegasWinner?',
              content: 'If applicable, any fee in connection with any processing is clearly shown during the deposit/withdrawal process.',
            },
          ],
        },
        {
          title: 'Account technical',
          children: [
            {
              title: 'I forgot my password. What should I do?',
              content: 'For security reasons, we do not keep a record of your password. You will need to click on the ‘Forgot Your Password?’ option which you will find just underneath the box asking for your password. You will then be requested to answer the ‘Secret Question’ that you submitted upon registration. You should receive a message saying ‘Your password has now been changed. You may now log in to the Casino.’ Another email will be sent to your registered email address confirming your new password.',
            },
            {
              title: 'How can I verify my account?',
              content: 'Upon registration, we will send a welcome email to your account\'s registered email address. In that email, you will find a link where you will be able to verify your account. Verifying your account ensures you will receive our emails so you can stay up to date and informed on all our new promotions and games!',
            },
            {
              title: 'My game is stuck. How can I close VegasWinner?',
              content: 'If your game is frozen in the middle of a bet, we highly recommend that you close the software using the Task Manager (Activity Monitor for Mac). Simply click simultaneously on CTRL + ALT + DEL to open the list of functions and then select Start Task Manager. That way, your game will resume when you log in to the casino again.',
            },
            {
              title: 'While logging in, I received the error message \'Player already connected\'',
              content: 'If you are unable to log in to the download version of VegasWinner, you may not have logged out properly from the instant version. Please ensure you are logging out correctly from the instant version by clicking on the Log out button.',
            },
            {
              title: 'While trying to open the Cashier I received an error message \'Your browser is using a pop-up blocker. To continue playing, please enable popups for this site\'.',
              content: 'To configure the pop-up blocker from Internet Explorer, follow these steps:<br/><br/><ol><li>Click Start, point to All Programs, and then click Internet Explorer.</li><li>On the Tools menu, click Internet Options.</li><li>Click the Privacy tab, and then select the Block pop-ups check box to turn off the Pop-up Blocker.</li><li>Click Apply, and then click OK.</li></ol>To configure the pop-up blocker in Google Chrome, follow these steps:<br/><br/><ol><li>Click the Chrome menu on the browser toolbar.</li><li>Select Settings.</li><li>Click Show advanced settings.</li><li>In the Privacy section, click the Content settings button.</li><li>In the Pop-ups section, select Allow all sites to show pop-ups.</li><li>Click Apply and OK. Then restart your browser.</li></ol>',
            },
          ],
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

  &-Table {
    th, td {
      padding-right: 10px;

      &:last-child {
        padding-right: 0;
      }

      &:nth-child(2), &:nth-child(3) {
        text-align: center;
      }
    }
  }
}

</style>
