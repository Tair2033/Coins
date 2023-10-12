<template>
  <div class="wrapper">
    <div class="container">
      <div class="coin">
        <div
          v-if="false"
          class="loading"
        >
          <BaseLoader />
        </div>

        <div class="coin__main">
          <div class="coin__left">
            <div class="coin__top">
              <div class="coin__coin">
                <div class="coin__coin-img">
                  <img :src="coin.image">
                </div>
                <div class="coin__coin-name">
                  {{ coin.name }}
                </div>
                <div class="coin__coin-symbol">
                  {{ coin.symbol }}
                </div>
              </div>

              <div class="coin__price">
                <div
                  class="coin__price-difference"
                  :style="getPriceColor()"
                >
                  {{ getDifferencePrice() }} %
                  <span>
                    (24H)
                  </span>
                </div>
                <div class="coin__price-price">
                  $ {{ coin.current_price }}
                </div>
              </div>
            </div>

            <div class="coin__bottom">
              <div
                v-for="(item, id) in coinPrices"
                :key="id"
                class="coin__bottom-item"
              >
                <div class="item__title">
                  {{ item.title }}
                </div>
                <div class="item__count">
                  {{ item.count }}
                </div>
              </div>
            </div>
          </div>

          <div class="coin__right">
            <div class="coin__right-title">
              Currency Converter
            </div>

            <div class="coin__right-coin">
              <div class="logo">
                <div class="logo__image">
                  <img :src="coin.image">
                </div>
                <div class="logo__name">
                  {{ coin.name }}
                </div>
              </div>
              <div class="logo__input">
                <input
                  v-model="converter.coinAmount"
                  type="number"
                >
              </div>
            </div>

            <div class="coin__arrows">
              <div class="coin__arrow">
                &uarr;
              </div>
              <div class="coin__arrow">
                &darr;
              </div>
            </div>

            <div class="coin__right-coin">
              <div class="logo">
                <div class="logo__image">
                  <img src="https://static.crypto.com/fiat/icons/USD/color_icon.png">
                </div>
                <div class="logo__name">
                  USD
                </div>
              </div>
              <div class="logo__input">
                <input
                  v-model="converter.convertingCurrency"
                  type="number"
                >
              </div>
            </div>

            <div class="coin__result">
              1 {{ coin.symbol }} = {{ converting() }} USD
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseLoader from '@/UI/BaseLoader.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "CoinView",
  components: { BaseLoader },
  data() {
    return {
      converter: {
        coinAmount: 1,
        convertingCurrency: 0
      },
      coinPrices: [
        {
          title: 'Market Cap (USD)',
          count: ''
        },
        {
          title: 'Price Change 24h',
          count: ''
        },
        {
          title: 'High 24h',
          count: ''
        },
        {
          title: 'Low 24h',
          count: ''
        },
        {
          title: 'Total Supply',
          count: ''
        },
      ],
      coin: {} as any
    }
  },
  mounted() {
    this.getCoins()

  },
  methods: {
    async getCoins() {
      try {
        const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${1}`;
        const response = await fetch(URL, {
          method: "GET",
          headers: { 'User-Agent': 'request' }
        });
        const data: any = await response.json();

        for (let i = 0; i < data.length; i++) {
          if (data[i].symbol === this.$route.params.id) {
            this.coin = { ...data[i] };

            this.coinPrices[0].count = "$ " + this.coin.market_cap;
            this.coinPrices[1].count = this.coin.price_change_24h;
            this.coinPrices[2].count = "$ " + this.coin.high_24h;
            this.coinPrices[3].count = "$ " + this.coin.low_24h;
            this.coinPrices[4].count = "$ " + this.coin.total_supply;
          }
        }

      } catch (error) {
        console.log(error);
      }
    },
    converting() {
      this.converter.convertingCurrency = this.coin.current_price * this.converter.coinAmount; 
      return this.converter.convertingCurrency
    },
    getDifferencePrice() {
      return (this.coin.price_change_percentage_24h as number)
    },
    getPriceColor() {
      try {
        if (this.coin.price_change_24h.toString().startsWith('-')) {
          return {
            color: "red"
          }
        }
        return {
          color: "green"
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.loading {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 130px;
}

.coin {
  &__main {
    display: flex;
    justify-content: space-between;
    border-radius: 7px;
  }

  &__left {
    background-color: rgba(164, 164, 164, 0.263);
    padding: 20px;
    border-radius: 7px;
    margin: 15px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__coin {
    display: flex;
    align-items: center;
  }

  &__coin-img {
    width: 30px;
    height: 30px;
    display: flex;
  }

  &__result {
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 17px;
    margin-top: 20px;
  }

  &__coin-name {
    margin-left: 14px;
    font-size: 28px;
    text-shadow: #ffffff 0px 0px 20px, #ff2d96b9 0px 0px 30px,
      #ff2d96b9 0px 0px 50px, -1px 2px 20px rgba(236, 72, 255, 0);
  }

  &__coin-symbol {
    font-size: 16px;
    margin-left: 14px;
    color: rgba(180, 179, 179, 0.736);
    text-transform: uppercase;
    margin-top: 2px;
  }

  &__price {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.096);
    border-radius: 7px;
    padding: 5px;
  }

  &__price-price {
    white-space: nowrap;
    line-height: 1.2;
    font-size: 32px;
    margin-left: 40px;
  }

  &__price-difference {
    white-space: nowrap;
    margin-left: 25px;
    font-size: 1.5rem;
  }

  &__price-difference span {
    color: white;
    font-size: 15px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 40px;
  }

  &__bottom-item {
    padding: 15px 10px;
    background-color: rgba(255, 255, 255, 0.096);
    color: rgb(255, 255, 255);
    border-radius: 10px;
    margin-right: 10px;
  }

  &__bottom-item:hover {
    cursor: default;
    background-color: rgba(255, 255, 255, 0.361);
  }

  &__right {
    background-color: rgba(164, 164, 164, 0.263);
    padding: 15px;
    margin: 15px 0;
    border-radius: 7px;
  }

  &__arrows {
    display: flex;
    justify-content: center;
  }

  &__arrow {
    font-size: 40px;
    cursor: default;
    user-select: none;
  }

  &__right-title {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  &__right-coin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.61);
    border-radius: 7px;
  }
}

.loading {}

.item {
  &__title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  &__count {
    text-align: center;
    color: rgb(1, 1, 1);
    font-weight: 500;
    font-size: 17px;
  }
}


.logo {
  display: flex;
  align-items: center;
  margin-right: 10px;

  &__image {
    width: 20px;
    height: 20px;
    display: inline-flex;
    margin-right: 10px;
    margin-left: 10px;
  }

  &__name {
    color: black;
  }

  &__input input {
    display: block;
    min-height: 30px;
    border: none;
    background-color: rgba(255, 255, 255, 0.294);
    border-radius: 7px;
    margin: 5px 5px 5px 0;
    text-align: end;
    font-size: 15px;
    font-weight: 500;
    padding-right: 4px;
  }

  &__input input:focus {
    outline: 2px solid rgba(37, 52, 62, 0.202);
  }

  &__input {
    // display: flex;
  }
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 1000px) {
  .coin__main {
    flex-direction: column;
  }

  .coin__right {
    align-self: flex-start;
  }
}
</style>