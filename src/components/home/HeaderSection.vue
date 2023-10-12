<template>
  <div class="wrapper">
    <div class="container">
      <header class="header">
        <div class="header__figures">
          <div class="header__figures-item">
            <img src="../../../public/img/Diamond.png">
          </div>
          <div class="header__figures-item">
            <img src="../../../public/img/shape1.png">
          </div>
          <div class="header__figures-item">
            <img src="../../../public/img/shape1.png">
          </div>
        </div>

        <div class="header__start">
          <div class="header__slogan">
            We made it easy.
          </div>

          <div class="header__bottom">
            <div class="header__bottom-title">
              Trade <br>
              Crypto.
            </div>

            <div class="header__bottom-buttons">
              <BaseButton
                type="default"
                text="Get started"
              />

              <BaseButton
                text="Learn more"
                type="outline"
              />
            </div>
          </div>
        </div>
        <div class="header__center">
          <img
            src="../../../public/img/header1.png"
            alt=""
          >
        </div>
        <div class="header__end">
          <div class="header__end-image">
            <img
              src="../../../public/img/header2.png"
              alt=""
            >
          </div>
          <div class="header__end-lable">
            Decentralized - 01
          </div>
          <div class="header__end-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas
            tenetur nobis? Omnis incidunt voluptates perferendis ea laboriosam
            alias error, ratione nemo, dolorum cum mollitia deserunt adipisci
            nam numquam nostrum. Lorem, ipsum dolor amet consectetur adipisicing
            elit.
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '../../UI/BaseButton.vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    BaseButton
  }
});
</script>

<style lang="scss">
.wrapper {
  position: relative;
}

.header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  position: relative;
  padding-bottom: 20px;

  &__start {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-right: 25px;
  }

  &__figures {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  &__figures-item:nth-child(1) {
    position: absolute;
    left: -180px;
    top: 50px;
    transform: rotateZ(20deg);
  }

  &__figures-item:nth-child(2) {
    position: absolute;
    right: -60px;
    top: 50px;
  }

  &__figures-item:nth-child(3) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -215px;
  }

  &__slogan {
    white-space: nowrap;
    position: absolute;
    top: 50px;
    font-size: 21px;
    line-height: 26px;
    color: #e7e7e7;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__bottom {}

  &__bottom-title {
    font-size: 106px;
    line-height: 96px;
    color: #e7e7e7;
    font-weight: 500;
    margin-top: 100px;
    text-shadow: #ffffff 0px 0px 20px, #ff2d96b9 0px 0px 30px,
      #ff2d96b9 0px 0px 50px, -1px 2px 20px rgba(236, 72, 255, 0);
  }

  &__bottom-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  &__center {
    width: 100vw;
    // max-width: 600px;
    height: 100%;
  }

  &__center img {
    // display: block;
    width: 100%;
    height: auto;
    transform: translateY(20px);
    max-width: 600px;
  }

  &__end {}

  &__end-image {
    max-width: 200px;
  }

  &__end-image img {
    width: 100%;
    height: auto;
    margin-left: 30px;
  }

  &__end-lable {
    font-size: 21px;
    line-height: 26px;
    color: #e7e7e7;
    font-weight: bold;
    text-align: right;
  }

  &__end-paragraph {
    text-align: right;
    font-size: 12px;
    color: #e7e7e7;
    font-weight: 500;
  }
}
</style>
