import { createStore } from 'vuex';

export default createStore({
  state: {
    coinsPage: {
      isLoading: false
    },
    coinPage: {
      isLoading: false
    },
    newsPage: {
      isLoading: false
    }
  },
  getters: {
    getCoinsLoadingStatus(state) {
      return state.coinsPage.isLoading;
    },
    getCoinLoadingStatus(state) {
      return state.coinPage.isLoading;
    },
    getNewsLoadingStatus(state) {
      return state.newsPage.isLoading;
    }
  },
  mutations: {
    changeCoinsLoadingStatus(state) {
      state.coinsPage.isLoading = true;
    },
    changeCoinLoadingStatus(state) {
      state.coinPage.isLoading = true;
    },
    changeNewsLoadingStatus(state) {
      state.newsPage.isLoading = true;
    }
  },
  actions: {},
  modules: {}
});
