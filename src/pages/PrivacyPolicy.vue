<template>
<!-- eslint-disable max-len -->
<!--  <section class="Page PrivacyPolicy">-->
<!--    <h2 class="Title Title&#45;&#45;type-h2 Page-Title PrivacyPolicy-Title">-->
<!--      Privacy <span class="Colored">Policy</span>-->
<!--    </h2>-->
<!--    <div class="Page-Section PrivacyPolicy-Section">-->
<!--      <h3>-->
<!--        Introduction-->
<!--      </h3>-->
<!--      <p>-->
<!--        This Privacy Policy, which was last updated on 04/06/2020, sets out the data processing practices carried out by BacanaPlay.-->
<!--      </p>-->
<!--      <p>-->
<!--        Here at BacanaPlay we like making things simple and easy for our customers and that includes being clear, transparent and open about what we collect, and how and why we use the data we collect, so this page goes into great detail.-->
<!--      </p>-->
<!--      <p>-->
<!--        Our Policy explains how we use your personal data, whether you are just visiting, making a deposit or playing one of our games. This policy includes information you may not already know about your data privacy rights, circumstances in which we share and obtain information about you and how we use it to personalize the marketing you receive, so please take time to read all the sections carefully.-->
<!--      </p>-->
<!--      <p>-->
<!--        If we make any material updates to this Policy, we will inform you.-->
<!--      </p>-->
<!--      <p>-->
<!--        Please note that all our employees undertake regular training on Information Security and are required to comply with confidentially obligations as well as internal policies and procedures whenever they handle your information.-->
<!--      </p>-->
<!--      <p>-->
<!--        We hope you will find this page helpful, but should you have any concerns or questions, regarding Data Protection, please feel free to contact our Data Protection Officer at dpo@bacanaplay.com-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="Page-Section PrivacyPolicy-Section">-->
<!--      <h3>-->
<!--        Our Privacy Policy Promise-->
<!--      </h3>-->
<!--      <p>-->
<!--        BacanaPlay will always value and respect the privacy of each and every one of its customers. Your privacy is important both to you and to us and we make the following promise to you:-->
<!--      </p>-->
<!--      <p>-->
<!--        BacanaPlay is committed to protecting your privacy. We believe in using your personal information to make things simpler and better for you. We will always keep your personal information safe. We’ll be clear and open with you about why we collect your personal information and how we use it. Where you have choices or rights, we’ll explain them to you and respect your wishes.-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="Page-Section PrivacyPolicy-Section">-->
<!--      <h3>-->
<!--        The types of information we collect-->
<!--      </h3>-->
<!--      <p>-->
<!--        We collect two types of data and information from our customers.-->
<!--      </p>-->
<!--      <p>-->
<!--        Personal Information<br/>-->
<!--        Personal Information which can be used to identify an individual. The Personal information we collect through our Services includes information which is submitted directly by you, such as: phone number; full name; e-mail address; home address; date of birth; payment means (e.g. credit card number); and other financial information that we may need in order to provide our Services. We also collect Personal Information from your device (e.g. geolocation data, IP address) and information on your activity on the Services (e.g. pages viewed, online browsing, clicks, actions, etc.).-->
<!--      </p>-->
<!--      <p>-->
<!--        Non-personal Information<br/>-->
<!--        The second type of information is un-identified and non-identifiable information pertaining to you which may be made available or gathered via your use of the Services We are not aware of the identity of the user from which the Non-personal Information was collected. Non-personal Information which is being collected may include your aggregated usage information and technical information transmitted by your device, including certain software and hardware information (e.g. the type of browser and operating system your device uses, language preference, access time and the domain name of the website from which you linked to the Services; etc.), in order to enhance the functionality of our Services.-->
<!--      </p>-->
<!--      <p>-->
<!--        If we combine Personal Information with Non-personal Information, the combined information will be treated as Personal Information for as long as it remains combined.-->
<!--      </p>-->
<!--    </div>-->
<!--  </section>-->

  <section class="Page PrivacyPolicy">
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
  name: 'PrivacyPolicy',
  mixins: [getContent],
};
</script>

<style lang="scss">
.PrivacyPolicy {
  h2 {
    font-size: 30px;

    @media (max-width: $screen-l) {
      font-size: 24px;
    }

    @media (max-width: $screen-s) {
      font-size: 20px;
    }
  }

  &-Title, style + h2 {
    font-size: 40px;
    color: var(--color-main1);
    margin-bottom: 58px;

    @media (max-width: $screen-l) {
      margin-bottom: 50px;
      font-size: 30px;
    }

    @media (max-width: $screen-m) {
      margin-bottom: 40px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 30px;
      font-size: 24px;
    }
  }

  &-Section {
    margin-bottom: 10px;
  }
}
</style>
