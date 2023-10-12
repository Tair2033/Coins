<template>
  <div class="wrapper">
    <div class="container">
      <div class="coins">
        <div class="coins__heading">
          <div class="coins__heading-title">
            Today's Cryptocurrency Prices
          </div>
        </div>
        <CoinsSection />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoinsSection from '../components/coins/CoinsSection.vue'

export default defineComponent({
  name: 'CoinsView',
  components: {
    CoinsSection
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
}

.coins {
  &__heading {}

  &__heading-title {
    font-size: 27px;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
}
</style>
