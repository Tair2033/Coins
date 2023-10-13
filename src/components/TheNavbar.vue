<template>
  <div class="wrapper">
    <div class="container">
      <div class="navbar">
        <Transition name="search">
          <div
            v-if="getSearchStatus()"
            class="search__input"
          >
            <div class="search__input-input">
              <input
                type="text"
                placeholder="Search"
              >
              <div class="search__btn">
                <i
                  class="fa-solid fa-magnifying-glass"
                  @click="toggleSearchInput"
                />
              </div>
            </div>
            <div
              class="search__input-close"
              @click="toggleSearchInput"
            >
              &#10006;
            </div>
          </div>
        </Transition>

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
              >

              <div class="logo__title">
                Coins
              </div>
            </router-link>
          </div>
          <div class="navbar__menu">
            <Transition name="menu">
              <ul class="navbar__items">
                <li class="navbar__items-item">
                  <router-link to="/">
                    Home
                  </router-link>
                </li>
                <li class="navbar__items-item">
                  <router-link to="/coins">
                    Coins
                  </router-link>
                </li>
                <li class="navbar__items-item">
                  <router-link to="/news">
                    News
                  </router-link>
                </li>
              </ul>
            </Transition>
          </div>
          <div class="navbar__search">
            <div
              class="navbar__search-btn"
              @click="toggleSearchInput"
            >
              <i
                :style="{'visibility': getSearchStatus() ? 'hidden': 'visible'}"
                class="fa-solid fa-magnifying-glass"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'TheNavbar',
  data() {
    return {};
  },
  methods: {
    getSearchStatus() {
      return store.getters.getSerchInputStatus
    },
    toggleSearchInput() {
      store.commit('toggleSearchInputStatus')
    }
  }
});
</script>

<style lang="scss" scoped>

.search-enter-active,
.search-leave-active {
  transition: all 0.4s ease;
}

.search-enter-from,
.search-leave-to {
  transform: translateY(-100%);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  // transform: translateX(-100%);
}


.wrapper {
  position: relative;
  padding: 10px 0;
  transition: all 0.4s;
}

.wrapper:hover {
  opacity: 1;
}

.search {
  &__input {
    cursor: default;
    background-color: rgb(24, 24, 24);
    padding: 20px 15px;
    margin: 0 20px;
    position: fixed;
    opacity: 0.8;
    border-radius: 15px;
    top: -5px;
    left: 0;
    right: 0;
    transform: translateZ(-50%);
    display: flex;
    justify-content: center;
    z-index: 100;
  }

  &__input-input {
    margin-right: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__input-input input {
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 4px;
    min-height: 40px;
    width: 70%;
  }

  &__input-close {
    cursor: pointer;
    position: absolute;
    right: 10px;
    font-size: 30px;
    top: 11px;
    transition: all 0.2s ease-out;
  }

  &__input-close:hover {
    color: rgb(67, 65, 65);
  }

  &__btn {
    cursor: pointer;
    margin-left: 10px;
    border-radius: 10px;
    padding: 0 3px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  &__btn:hover {
    background-color: rgb(255, 255, 255);
    color: black;
  }

  &__btn:active {
    background-color: rgba(255, 255, 255, 0.594);
    color: rgba(0, 0, 0, 0.744);
  }
}


.navbar {
  position: relative;

  &__inside {
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s;
  }


  &__inside:hover {
    opacity: 1;
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

  &__search {}

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
  &__icon {}

  &__title {
    margin-left: 20px;
  }
}

</style>
