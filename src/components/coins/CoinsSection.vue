<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="coins">
        <table class="coins__table">
          <thead class="coins__head">
            <tr class="coins__head-tr">
              <th>
                #
              </th>
              <th>
                Name
              </th>
              <th>
                Price
              </th>
              <th>
                24h change
              </th>
              <th>
                Market cap
              </th>
              <th>
                Total
              </th>
            </tr>
          </thead>

          <tbody
            v-if="getCoinsLoadingStatus()"
            class="coins__body"
          >
            <CoinItem
              v-for="(coin, id) in coins"
              :key="id"
              :coin="coin"
            />
          </tbody>
        </table>

        <div
          v-if="!getCoinsLoadingStatus()"
          class="loading"
        >
          <BaseLoader />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CoinItem from './CoinItem.vue';
import BaseLoader from '@/UI/BaseLoader.vue';
import store from '@/store';

export default defineComponent({
  name: "CoinsSection",
  components: { CoinItem, BaseLoader },
  data() {
    return {
      name: 'CoinsSection',
      coins: [] as Array<object>
    };
  },
  created() {
    this.getCoins();
  },
  methods: {
    async getCoins() {
      try {
        const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${1}`;
        const response = await fetch(URL, {
          method: "GET",
          headers: { 'User-Agent': 'request' }
        });
        const data = await response.json();
        
        store.commit('changeCoinsLoadingStatus');

        this.coins = [...data];
      } catch (error) {
        console.log(error);
      }
    },
    getCoinsLoadingStatus() {
      return store.getters.getCoinsLoadingStatus
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {}

th:nth-child(1) {
  text-align: start;
}

th:nth-child(2) {
  text-align: center;
}

th {
  text-align: end;
  padding: 0 10px;
}

.loading {
  display: flex;
  justify-content: center;
  background-color: rgba(173, 172, 172, 0.054);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}


.coins {

  &__table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: rgba(173, 172, 172, 0.054);
    padding: 10px;
    border-radius: 6px;
  }

  &__head {
    border-bottom: 1px solid rgba(92, 92, 92, 0.113);
  }

  &__head-tr { }

  &__head-tr th {
    padding: 10px;
    font-size: 18px;
  }

  &__body {
  }

  &__body-tr {
  }
}
</style>