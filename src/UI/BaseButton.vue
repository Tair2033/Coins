<template>
  <div class="wrapper">
    <div v-if="type === 'default'" class="btn-default">
      {{ text }}
    </div>

    <div v-if="type === 'outline'" class="btn-outline">
      {{ text }}
    </div>

    <div v-if="config.length !== 0 && type == ''" :style="{
      backgroundColor: config.backColor,
      color: config.color,
    }" class="btn-outline">
      {{ text }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: new Object()
    },
    action: {
      type: Function,
      default: () => {
        return;
      }
    }
  }
});
</script>
<style lang="scss" scoped>
.btn-default {
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  font-size: 15px;
  color: #0d0821;
  font-weight: bold;
  text-align: center;
  padding: 10px 25px;
  border-radius: 23px;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  transition: all 0.4s ease;
}

.btn-default:hover {
  background-color: black;
  color: white;
}

.btn-outline {
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
  color: white;
  border-radius: 23px;
  padding: 10px 25px;
  text-transform: uppercase;
  border: 2px solid #ffffff;
  transition: all 0.4s ease;
}

.btn-outline:hover {
  background-color: rgb(0, 0, 0);
  border-color: black;
  color: white;
}
</style>
