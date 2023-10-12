<template>
  <tr
    class="coin__tr"
    @click="goToPage"
  >
    <td class="coin__rank">
      {{ coin.market_cap_rank }}
    </td>
    <td class="coin__name">
      <div class="coin__name-logo">
        <img :src="coin.image">
      </div>
      <div class="coin__name-name">
        {{ coin.name }}
      </div>
      <div class="coin__name-symbol">
        {{ coin.symbol }}
      </div>
    </td>
    <td class="coin__price">
      $ {{ coin.current_price }}
    </td>
    <td
      class="coin__price24"
      :style="getPriceColor"
    >
      {{ getChangedPrice() }} %
    </td>
    <td class="coin__rank">
      $ {{ coin.market_cap }}
    </td>
    <td class="coin__total">
      {{ coin.total_volume }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    coin: {
      type: Object,
      default: new Object()
    }
  },
  computed: {
    getPriceColor() {
      if (this.coin.price_change_24h.toString().startsWith('-')) {
        return {
          color: "red"
        }
      }
      return {
        color: "green"
      }
    }
  },
  methods: {
    getChangedPrice() {
      return this.coin.price_change_percentage_24h.toString().slice(0, 5)
    },
    goToPage() {
      this.$router.push(`/coins/${this.coin.symbol}`)
    },
  }
})
</script>

<style lang="scss" scoped>
td:nth-child(1) {
  text-align: start;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

td:nth-child(6) {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

td:nth-child(2) {
  text-align: center;
}

td {
  text-align: end;
  padding: 0 10px;
  margin: 0;
}

tr {
  height: 50px;
  cursor: pointer;
}

tr:hover {
  background-color: rgba(188, 186, 186, 0.113);
}

tr:active {
  background-color: rgba(188, 186, 186, 0.193);
}

.coin {
  &__tr {}

  &__rank {}

  &__name {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;

  }

  &__tr:hover {
    .coin__name-name {
      color: rgba(21, 173, 255, 0.865);
    }
  }

  &__name-logo {
    width: 25px;
    height: 25px;
    display: flex;
    margin-right: 10px;
  }

  &__name-name {}

  &__name-symbol {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.429);
    margin-left: 10px;
    font-size: 12px;
    margin-top: 2px;
  }

  &__price {}

  &__price24 {}
}</style>