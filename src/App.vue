<template>
  <TheNavbar />
  <Transition name="router">
    <router-view />
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from './components/TheNavbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheNavbar
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Urbanist:wght@400;500;600;700&display=swap');
@import url('bootstrap-grid.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  // font-family: 'Nunito', sans-serif;
  font-family: 'Urbanist', sans-serif;
  // background-color: black;
  // background: #3B0141;
  // background: radial-gradient(at right center, #3B0141, #000000);
  background: #641b6b;
  background: radial-gradient(at center top, #441248, #050447);
  color: white;
  min-height: 100vh;
}

.router-enter-active,
.router-leave-active {
  transition: all 0.5s ease;
}

.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
