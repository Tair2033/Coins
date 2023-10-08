<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="container">
        <div class="navbar__inside">
          <div class="navbar__logo">
            <router-link
              to="/"
              class="logo"
            >
              <img
                src="../../public/img/logo.png"
                alt="logo"
                class="logo__icon"
              />

              <div class="logo__title">Coins</div>
            </router-link>
          </div>
          <div class="navbar__menu">
            <ul class="navbar__items">
              <li class="navbar__items-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="navbar__items-item">
                <router-link to="/coins">Coins</router-link>
              </li>
              <li class="navbar__items-item">
                <router-link to="/donate">Donate</router-link>
              </li>
            </ul>
          </div>
          <div class="navbar__search">
            <div class="navbar__search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TheNavbar',
    data() {
      return {};
    }
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    padding: 10px 0;
    opacity: 0.5;
    transition: all 0.4s ease;
  }

  .wrapper:hover {
    opacity: 1;
  }

  .navbar {
    &__inside {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
    }

    &__logo a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 19px;
      transition: all 0.4s ease-in;
      font-weight: 800;
    }

    &__logo a:hover {
      color: rgb(254, 141, 11);
    }

    &__menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__items {
      width: 100%;
      display: flex;
      align-self: end;
      align-items: center;
    }

    &__items-item {
      list-style: none;
      margin-left: 20px;
    }

    &__items-item:first-child {
      margin-left: 0px;
    }

    &__items-item a {
      font-size: 17px;
      color: white;
      font-weight: bold;
      text-decoration: none;
      padding: 10px;
      transition: all 0.2s ease-in;
      border-radius: 18px;
    }

    &__items-item a:hover {
      background-color: white;
      color: black;
    }

    &__search {
    }

    &__search-btn {
      cursor: pointer;
    }

    i {
      transition: all 0.2s ease-in;
      padding: 10px;
      border-radius: 6px;
    }

    &__search-btn:hover i {
      color: black;
      background-color: white;
    }
  }

  .logo {
    &__icon {
    }

    &__title {
      margin-left: 20px;
    }
  }
</style>
