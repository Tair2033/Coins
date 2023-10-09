<template>
  <div class="wrapper">
    <div class="container">
      <div class="tranding">
        <div class="tranding__main">
          <div class="tranding__left">
            <div class="tranding__left-slogan">
              Decentralized - 01
            </div>
            <div class="tranding__left-title">
              Trading <br />
              Made Easy.
            </div>
            <div class="tranding__left-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </div>
            <div class="tranding__left-btn">
              <BaseButton :config="{
                backColor: 'black',
                color: 'white'
              }" text="Get Started" />
            </div>
          </div>

          <div class="tranding__right">
            <div class="tranding__right-img">
              <img src="../../../public/img/easy.png" alt="">
            </div>
          </div>
        </div>

        <div class="tranding__images">
          <div class="tranding__images-img">
            <img src="../../../public/img/Shape2.png">
          </div>
          <div class="tranding__images-img">
            <img src="../../../public/img/Diamond2.png">
          </div>
          <div class="tranding__images-img">
            <img src="../../../public/img/Diamond2.png">
          </div>
          <div class="tranding__images-img">
            <img src="../../../public/img/Shape2.png">
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
  name: 'TrandingSection',
  components: { BaseButton }
});
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: white;
  color: black;
  padding-bottom: 30px;
}

.tranding {
  position: relative;

  &__main {
    z-index: 4;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 60px;
    align-items: center;
    padding-top: 50px;
  }

  &__left {}

  &__left-slogan {
    font-size: 21px;
    line-height: 26px;
    color: #0d0821;
    font-weight: bold;
    margin-bottom: 25px;
  }

  &__left-title {
    font-size: 106px;
    line-height: 104px;
    color: #0d0821;
    font-weight: 500;
    margin-bottom: 30px;
  }

  &__left-paragraph {
    font-size: 12px;
    color: #0d0821;
    font-weight: 500;
    margin-bottom: 30px;
    max-width: 450px;
  }

  &__left-btn {}

  &__right {}

  &__right-img {
    max-width: 478px;
  }

  &__right-img img {
    width: 100%;
    height: auto;
  }

  &__images {
    opacity: 0.7;
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__images-img:nth-child(1) {
    position: absolute;
    bottom: 0;
    right: -80px;
  }

  &__images-img:nth-child(2) {
    position: absolute;
    bottom: 0;
    left: -140px;
    transform: rotateZ(60deg);
  }

  &__images-img:nth-child(3) {
    position: absolute;
    top: 0;
    right: -80px;
  }

  &__images-img:nth-child(4) {
    position: absolute;
    top: 20px;
    left: -42px;
  }

}
</style>
