<template>
<!-- eslint-disable max-len -->
  <section class="Page Vip">
    <div class="Vip-Ranks">
      <h2 class="Title Title--type-h2 Page-Title">
        VIP <span class="Colored">Ranks</span>
      </h2>
      <div class="Page-Introduction">
        <p>
          The points rank are as follows: Bronze, Silver, Gold, Platinum, Diamond and Red Diamond. It's straight forward and very rewarding! The more VIP points ya'll obtain the higher your rank becomes. Our ranking table explains all you need to know moving onwards and upwards!
        </p>
        <p>
          Please change the currency tab to the one that applies to you.
        </p>
      </div>
      <div class="Cards Vip-RankCards">
        <div class="Card Vip-RankCard">
          <div class="Vip-CardContent">
            <div class="Vip-RankName">
              Bronze
            </div>
            <div class="Vip-Level">
              Level 1
            </div>
            <div class="Vip-Points">
              <div class="Vip-Min">
                Min <span class="Vip-Num">0</span>
              </div>
              <div class="Vip-Max">
                Max <span class="Vip-Num">400</span>
              </div>
            </div>
          </div>
          <div class="Vip-RankImage">
            <img src="@/assets/img/bronze.png" />
          </div>
        </div>
        <div class="Card Vip-RankCard">
          <div class="Vip-CardContent">
            <div class="Vip-RankName">
              Silver
            </div>
            <div class="Vip-Level">
              Level 2
            </div>
            <div class="Vip-Points">
              <div class="Vip-Min">
                Min <span class="Vip-Num">401</span>
              </div>
              <div class="Vip-Max">
                Max <span class="Vip-Num">1000</span>
              </div>
            </div>
          </div>
          <div class="Vip-RankImage">
            <img src="@/assets/img/silver.png" />
          </div>
        </div>
        <div class="Card Vip-RankCard">
          <div class="Vip-CardContent">
            <div class="Vip-RankName">
              Gold
            </div>
            <div class="Vip-Level">
              Level 3
            </div>
            <div class="Vip-Points">
              <div class="Vip-Min">
                Min <span class="Vip-Num">1001</span>
              </div>
              <div class="Vip-Max">
                Max <span class="Vip-Num">2000</span>
              </div>
            </div>
          </div>
          <div class="Vip-RankImage">
            <img src="@/assets/img/gold.png" />
          </div>
        </div>
        <div class="Card Vip-RankCard">
          <div class="Vip-CardContent">
            <div class="Vip-RankName">
              Platinum
            </div>
            <div class="Vip-Level">
              Level 4
            </div>
            <div class="Vip-Points">
              <div class="Vip-Min">
                Min <span class="Vip-Num">2001</span>
              </div>
              <div class="Vip-Max">
                Max <span class="Vip-Num">20000</span>
              </div>
            </div>
          </div>
          <div class="Vip-RankImage">
            <img src="@/assets/img/platinum.png" />
          </div>
        </div>
        <div class="Card Vip-RankCard">
          <div class="Vip-CardContent">
            <div class="Vip-RankName">
              Diamond
            </div>
            <div class="Vip-Level">
              Level 5
            </div>
            <div class="Vip-Points Vip-Num">
              Invitation only
            </div>
          </div>
          <div class="Vip-RankImage">
            <img src="@/assets/img/diamond.png" />
          </div>
        </div>
        <div class="Card Vip-RankCard">
          <div class="Vip-CardContent">
            <div class="Vip-RankName">
              Red Diamond
            </div>
            <div class="Vip-Level">
              Level 6
            </div>
            <div class="Vip-Points Vip-Num">
              Invitation only
            </div>
          </div>
          <div class="Vip-RankImage">
            <img src="@/assets/img/red_diamond.png" />
          </div>
        </div>
      </div>
      <div class="Btn Btn--color Btn--centered Vip-Btn" @click="openLogin()">
        Join the club
      </div>
    </div>
    <div class="Vip-Club">
      <h2 class="Title Title--type-h2 Page-Title">
        VIP <span class="Colored">Club</span>
      </h2>
      <div class="Page-Introduction">
        <p>
          Take your playing experience with us to the next level! Join our VIP Club and enhance your thrills. Outstanding player perks, exclusive offers and the chance to win unforgettable prizes await.
        </p>
      </div>
      <div class="Cards Vip-Cards">
        <div class="Card Vip-Card">
          <img class="Card-Image Vip-CardImage" src="@/assets/img/vip_casino.svg" />
          <div class="Card-Name">
            VIP Casino Rewards
          </div>
          <div class="Card-Text">
            At Vegaswinner Casino we reward
            all our VIPs with an exclusive
            tiered loyalty scheme starting with Bronze level all the way up to Red Diamond by Invitation only.
          </div>
        </div>
        <div class="Card Vip-Card">
          <img class="Card-Image Vip-CardImage" src="@/assets/img/vip_levels.svg" />
          <div class="Card-Name">
            VIP Casino Rewards
          </div>
          <div class="Card-Text">
            At Vegaswinner Casino we reward
            all our VIPs with an exclusive
            tiered loyalty scheme starting with Bronze level all the way up to Red Diamond by Invitation only.
          </div>
        </div>
        <div class="Card Vip-Card">
          <img class="Card-Image Vip-CardImage" src="@/assets/img/manager.svg" />
          <div class="Card-Name">
            VIP Casino Rewards
          </div>
          <div class="Card-Text">
            At Vegaswinner Casino we reward
            all our VIPs with an exclusive
            tiered loyalty scheme starting with Bronze level all the way up to Red Diamond by Invitation only.
          </div>
        </div>
      </div>
      <div class="Btn Btn--color Btn--centered Vip-Btn" @click="openLogin()">
        Join the club
      </div>
    </div>
  </section>
</template>

<script>
import auth from '@/mixins/auth';

export default {
  name: 'VIPClub',
  mixins: [auth],
};
</script>

<style lang="scss">
.Vip {
  padding-left: 16px;
  padding-right: 16px;

  &-Ranks {
    margin-bottom: 58px;

    @media(max-width: $screen-m) {
      margin-bottom: 48px;
    }

    @media(max-width: $screen-s) {
      margin-bottom: 58px;
    }
  }

  &-RankCards {
    flex-wrap: wrap;
    margin-bottom: 36px;

    @media (max-width: $screen-s) {
      display: block;
    }
  }

  &-RankCard {
    display: flex;
    justify-content: space-between;
    flex-grow: 0;
    width: calc(33.33333333% - 6.6666666px);
    min-height: 204px;
    margin-right: 0;
    margin-bottom: 10px;
    padding: 40px;
    text-align: left;

    @media (max-width: $screen-l) {
      padding: 30px 24px;
      min-height: 156px;
    }

    @media (max-width: $screen-m) {
      padding: 22px 14px;
      min-height: 122px;
    }

    @media (max-width: $screen-s) {
      width: 100%;
      min-height: 129px;
      padding: 26px 16px;
    }
  }

  &-CardContent {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &-RankImage {
    width: 32.16080402%;
  }

  &-RankName {
    margin-bottom: 5px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.18;
    color: var(--color-text-main);

    @media (max-width: $screen-l) {
      font-size: 22px;
    }

    @media (max-width: $screen-m) {
      font-size: 18px;
    }
  }

  &-Level {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.18;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);

    @media (max-width: $screen-l) {
      font-size: 14px;
    }

    @media (max-width: $screen-m) {
      font-size: 12px;
    }

    @media (max-width: $screen-s) {
      font-size: 14px;
    }
  }

  &-Points {
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.18;
    letter-spacing: 0.09em;
    color: rgba(255, 255, 255, 0.6);
    white-space: nowrap;

    @media (max-width: $screen-l) {
      font-size: 16px;
    }

    @media (max-width: $screen-m) {
      font-size: 13px;
    }

    @media (max-width: $screen-s) {
      position: relative;
      left: initial;
      bottom: initial;
      margin-top: auto;
    }
  }

  &-Min {
    margin-right: 13px;
  }

  &-Num {
    color: var(--color-main1);
    font-weight: 700;
  }

  &-Cards {
    margin-bottom: 46px;

    @media (max-width: $screen-s) {
      display: block;
    }
  }

  &-Card {
    padding: 50px 30px;

    @media (max-width: $screen-s) {
      width: 100%;
    }
  }

  &-CardImage {
    height: 142px;
    margin-bottom: 32px;
  }
}
</style>
