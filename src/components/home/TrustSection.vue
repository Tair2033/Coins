<template>
  <div class="wrapper">
    <div class="container">
      <div class="trust">
        <div class="trust__main">
          <div class="trust__main-slogan">WHAT WE STAND FOR</div>
          <div class="trust__main-title">Trusted and <br />Transparent.</div>
          <div class="trust__main-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore. eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </div>
        </div>

        <div class="trust__images">
          <div class="trust__images-img">
            <img src="../../../public/img/header3.png" />
          </div>
          <div class="trust__images-img">
            <img src="../../../public/img/header4.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TrustSection'
});
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 250px;
  padding-bottom: 200px;
}

.trust {
  position: relative;

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }

  &__main-slogan {
    font-size: 21px;
    line-height: 26px;
    color: #e7e7e7;
    font-weight: bold;
    text-align: center;
    margin-bottom: 49px;
  }

  &__main-title {
    font-size: 106px;
    line-height: 96px;
    font-weight: 500;
    text-align: center;
    color: white;
    text-shadow: #ffffff 0px 0px 20px,
      #ff2d9660 0px 0px 50px, -1px 2px 16px rgba(236, 72, 255, 0);
  }

  &__main-paragraph {
    margin-top: 35px;
    font-size: 12px;
    color: #e7e7e7;
    font-weight: 500;
    max-width: 550px;
    text-align: center;
    // transform: translateX(50%);
  }

  &__images {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }

  &__images-img:nth-child(1) {
    position: absolute;
    right: -60px;
    top: -110px;
  }

  &__images-img:nth-child(2) {
    position: absolute;
    left: -60px;
    bottom: -110px;
  }
}
</style>
