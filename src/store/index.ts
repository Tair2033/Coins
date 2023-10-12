import { createStore } from 'vuex';

export default createStore({
  state: {
    coinsPage: {
      isLoading: false
    },
    coinPage: {
      isLoading: false
    }
  },
  getters: {
    getCoinsLoadingStatus(state) {
      return state.coinsPage.isLoading;
    },
    getCoinLoadingStatus(state) {
      return state.coinPage.isLoading;
    }
  },
  mutations: {
    changeCoinsLoadingStatus(state) {
      state.coinsPage.isLoading = true;
    },
    changeCoinLoadingStatus(state) {
      state.coinPage.isLoading = true;
    }
  },
  actions: {},
  modules: {}
});
