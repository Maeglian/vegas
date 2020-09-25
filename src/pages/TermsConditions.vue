<template>
  <!-- eslint-disable max-len -->
<!--  <section class="Page" v-html="pageContent">-->
<!--    <h2 class="Title Title&#45;&#45;type-h2 Page-Title">-->
<!--      Terms and <span class="Colored">Conditions</span>-->
<!--    </h2>-->
<!--    <div class="Page-Introduction">-->
<!--      <p class="Page-Updated">-->
<!--        Last updated: Jan 12, 2020-->
<!--      </p>-->
<!--      <p>-->
<!--        Please read these terms and conditions carefully before accepting this agreement and before using this site. Make sure to print these terms and conditions and keep them for your records.-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="Page-Section">-->
<!--      <h3 class="Page-SectionTitle">-->
<!--        <span class="Colored">1.</span> Introduction-->
<!--      </h3>-->
<!--      <ol class="Page-List">-->
<!--        <li class="Page-ListItem">-->
<!--          We consider these terms to be fair. Should you need any advice regarding these terms, or any other part of our service, your own and our interests, please contact us via our Customer Services Department via the support link on the site and your trusted legal advisor. In these terms and conditions the licensed entity (which is noted above the words ‘Terms and conditions of use’ which is located above) is referred to as 'We', 'Us', or any other name of similar purport and you are referred to as 'customer', you, user, player or any other term of similar purport.-->
<!--        </li>-->
<!--        <li class="Page-ListItem">-->
<!--          Please note that all telephone calls are digitally recorded and may be used as evidence at Our sole discretion.-->
<!--        </li>-->
<!--        <li class="Page-ListItem">-->
<!--          For transaction security we use SSL encryption. All customer data will be treated as confidential and will not be sold to third parties.-->
<!--        </li>-->
<!--        <li class="Page-ListItem">-->
<!--          By checking the 'I agree to the terms and conditions' box when you register an account, you acknowledge that you have read, understood, agree with and will comply with all the terms and conditions and you thereby enter into a legally binding agreement between you and Us. If you do not agree with any of the terms and conditions you should not accept them. Once you have agreed to these terms and conditions, Your failure to comply with any one or more of them may result in disqualification, account closure, and/or legal action against you as deemed appropriate by Us.-->
<!--        </li>-->
<!--        <li class="Page-ListItem">-->
<!--          Where we have reasonable grounds to suspect that any two or more registered accounts are linked including whether they are linked to the same internet protocol ("IP") address, pattern of use, proximity of transactions, common bank details or address in common or otherwise and that the services provided via the Site are being abused of by you in any way, including by way of example due to a previously undetected fault, bug or other fault in the software, we may suspend the services provided to you via the site and your ability to access your account(s) with immediate effect as well as to reverse transactions on any one or more of the accounts that are linked.-->
<!--        </li>-->
<!--        <li class="Page-ListItem">-->
<!--          By using this Site and/or software you agree to these terms and conditions and any other terms-->
<!--          or conditions that We see fit to impose from time to time.-->
<!--        </li>-->
<!--        <li class="Page-ListItem">-->
<!--          These terms and conditions are written in English. If these terms and conditions are translated into another language, the English version will prevail.-->
<!--        </li>-->
<!--        <li class="Page-ListItem">-->
<!--          These terms and conditions are written in English. If these terms and conditions are translated into another language, the English version will prevail.-->
<!--        </li>-->
<!--      </ol>-->
<!--    </div>-->
<!--  </section>-->

  <section class="Page TermConditions">
    <template v-if="isLoading">
      <Loader />
    </template>
    <div v-else-if="isError">
      Sorry, we have some problems, data could not be loaded.
    </div>
    <div v-else v-html="pageContent"></div>
  </section>
</template>

<script>
import getContent from '@/mixins/getContent';

export default {
  name: 'TermsConditions',
  mixins: [getContent],
};
</script>

<style lang="scss">
.TermConditions {
  h2 {
    color: var(--color-main1);
  }
}
</style>
