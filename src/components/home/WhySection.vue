<template>
  <div class="wrapper">
    <div class="container">
      <div class="why">
        <div class="why__main">
          <div class="why__top">
            <div class="why__top-slogan">
              WE MADE IT EASIER.
            </div>
            <div class="why__top-title">
              Why Crypto?
            </div>
          </div>
          <div class="why__center">
            <div
              v-for="item in 3"
              :key="item"
              class="why__center-item"
            >
              <div class="item__title">
                BENEFIT 0{{ item }}
              </div>
              <div class="item__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </div>
            </div>
          </div>
        </div>

        <div class="why__images">
          <div class="why__images-img">
            <img
              src="../../../public/img/Diamond2.png"
              alt=""
            >
          </div>
          <div class="why__images-img">
            <img
              src="../../../public/img/Diamond2.png"
              alt=""
            >
          </div>
          <div class="why__images-img">
            <img
              src="../../../public/img/Shape2.png"
              alt=""
            >
          </div>
          <div class="why__images-img">
            <img
              src="../../../public/img/Shape2.png"
              alt=""
            >
          </div>
          <div class="why__images-img">
            <img
              src="../../../public/img/Shape2.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WhySection'
});
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: white;
  padding-top: 120px;
  padding-bottom: 160px;
}

.why {
  position: relative;

  &__main {
    z-index: 16;
  }

  &__top {}

  &__top-slogan {
    font-size: 21px;
    line-height: 26px;
    color: #0d0821;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }

  &__top-title {
    font-size: 106px;
    line-height: 104px;
    color: #0d0821;
    font-weight: 500;
    text-align: center;
  }

  &__center {
    margin-top: 160px;
    display: flex;
    justify-content: space-between;
  }

  &__center-item {}

  &__images {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__images-img:nth-child(1) {
    position: absolute;
    top: -80px;
    left: -130px;
    transform: rotateZ(60deg);
  }

  &__images-img:nth-child(2) {
    position: absolute;
    bottom: -90px;
    right: -160px;
    transform: rotateZ(30deg);
  }

  &__images-img:nth-child(3) {
    position: absolute;
    top: -80px;
    right: -30px;
  }

  &__images-img:nth-child(4) {
    position: absolute;
    top: -40px;
    right: -30px;
  }

  &__images-img:nth-child(5) {
    position: absolute;
    bottom: -150px;
    left: -70px;
  }
}

.item {
  &__title {
    font-size: 21px;
    line-height: 26px;
    color: #0d0821;
    font-weight: bold;
  }

  &__paragraph {
    max-width: 320px;
    font-size: 12px;
    color: #0d0821;
    font-weight: 500;
  }
}
</style>
