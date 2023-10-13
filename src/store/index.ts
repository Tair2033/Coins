import { createStore } from 'vuex';

export default createStore({
  state: {
    navbar: {
      searchInput: false
    },
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
    getSerchInputStatus(state) {
      return state.navbar.searchInput;
    },
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
    },
    offAll(state) {
      state.coinsPage.isLoading = false;
      state.coinPage.isLoading = false;
      state.newsPage.isLoading = false;
    },
    toggleSearchInputStatus(state) {
      state.navbar.searchInput = !state.navbar.searchInput;
    }
  },
  actions: {},
  modules: {}
});
