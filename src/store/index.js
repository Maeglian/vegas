import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [],
    promotions: [
      [
        {
          image: 'welcome.svg',
          title: 'Welcome bonus',
          text: 'Get New Offers<br/> Every Day You choose<br> You Play, We Pay',
        },
        {
          image: 'tournaments.svg',
          title: 'Tournaments',
          text: 'Everybody loves Free Spins<br/> Get More<br/> Now Start off with 50',
        },
        {
          image: 'vip.svg',
          title: 'Vip lounge',
          text: 'Get Free Spins for a Year<br/> Only One Deposit Start with 50<br/> Free Spins Instantly',
        },
      ],
      [
        {
          image: 'daily-picks.svg',
          title: 'Daily Picks',
          text: 'Get New Offers<br/> Every Day You choose<br> You Play, We Pay',
        },
        {
          image: 'spins.svg',
          title: 'Free spins',
          text: 'Everybody loves Free Spins<br/> Get More<br/> Now Start off with 50',
        },
        {
          image: 'spins_years.svg',
          title: 'Free spins for a Year',
          text: 'Get Free Spins for a Year<br/> Only One Deposit Start with 50<br/> Free Spins Instantly',
        },
      ],
    ],
    gamesAreLoading: false,
    errors: {},
  },

  getters: {
    games: (state) => state.games,
    errors: (state) => state.errors,
  },

  mutations: {
    gamesAreLoading: (state) => {
      state.gamesAreLoading = true;
    },
    gamesAreLoaded: (state) => {
      state.gamesAreLoading = false;
    },
    setGames: (state, payload) => {
      state.games = payload;
    },
    setAllGames: (state, payload) => {
      state.games = [...state.games, ...payload];
    },
    pushErrors: (state, payload) => {
      state.errors = { ...state.errors, payload };
    },
  },

  actions: {
    async getGames({ commit }, query, sliceItems = 0) {
      commit('gamesAreLoading');
      try {
        // eslint-disable-next-line no-underscore-dangle
        const res = await axios.get(`https://games.netdnstrace1.com/?${query}`);
        if (sliceItems) {
          const data = res.data.slice(sliceItems);
          commit('setAllGames', data);
        } else commit('setGames', res.data);
      } catch (e) {
        commit('pushErrors', e);
      } finally {
        commit('gamesAreLoaded');
      }
    },
  },
});
