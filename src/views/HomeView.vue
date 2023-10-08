<template>
  <div class="wrapper">
    <div class="container">
      <div class="home">
        <HeaderSection />
        <TrustSection />
        <TrandingSection />
        <MarketSection />
        <WhySection />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderSection from '../components/home/HeaderSection.vue';
  import TrustSection from '@/components/home/TrustSection.vue';
  import TrandingSection from '@/components/home/TrandingSection.vue';
  import MarketSection from '@/components/home/MarketSection.vue';
  import WhySection from '@/components/home/WhySection.vue';

  export default defineComponent({
    components: {
      HeaderSection,
      TrustSection,
      TrandingSection,
      MarketSection,
      WhySection
    },
    data() {
      return {};
    }
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
  }
</style>
