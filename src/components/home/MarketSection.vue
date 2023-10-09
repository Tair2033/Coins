<template>
  <div class="wrapper">
    <div class="container">
      <div class="market">
        <div class="market__main">
          <div class="market__left">
            <div class="market__left-img">
              <img src="../../../public/img/caps.png" alt="">
            </div>
          </div>

          <div class="market__right">
            <div class="market__right-title">
              All About <br />
              Market Caps
            </div>
            <div class="market__right-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </div>
            <div class="market__right-btn">
              <BaseButton type="outline" text="Learn More" />
            </div>
          </div>
        </div>

        <div class="market__images">
          <div class="market__images-img">
            <img src="../../../public/img/shape1.png" alt="">
          </div>

          <div class="market__images-img">
            <img src="../../../public/img/shape1.png" alt="">
          </div>

          <div class="market__images-img">
            <img src="../../../public/img/shape1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import BaseButton from '@/UI/BaseButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarketSection',
  components: { BaseButton }
});
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  padding-bottom: 100px;
}

.market {
  position: relative;
  height: 100%;

  &__main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__left {
    max-width: 650px;
    height: 100%;
  }

  &__left-img {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__left-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    padding: 0 10px;
  }

  &__right-title {
    font-size: 106px;
    line-height: 96px;
    color: #e7e7e7;
    font-weight: 500;
    text-align: center;
    text-shadow: #ffffff 0px 0px 20px,
      #ff2d9660 0px 0px 50px, -1px 2px 16px rgba(236, 72, 255, 0);
  }

  &__right-paragraph {
    max-width: 460px;
    margin-top: 40px;
    margin-bottom: 30px;
    font-size: 12px;
    color: #e7e7e7;
    font-weight: 500;
    text-align: center;
  }

  &__right-btn {}

  &__images {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  &__images-img:nth-child(1) {
    position: absolute;
    top: 40px;
    right: -85px;
  }

  &__images-img:nth-child(2) {
    position: absolute;
    bottom: 0px;
    right: -85px;
  }

  &__images-img:nth-child(3) {
    position: absolute;
    bottom: 0px;
    right: 30px;
  }
}
</style>
