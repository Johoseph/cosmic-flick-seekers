<template>
  <svg
    version="1.2"
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1080"
    class="absolute scale opacity-0"
    v-on:mousemove="this.handleMouseMove"
  >
    <g
      v-for="item in config"
      v-html="item.path"
      :key="item.day"
      :style="{
        transform: `translate(${item.left}, ${item.top}) scale(109%)`,
      }"
    />
  </svg>
</template>

<script>
import { defineComponent } from "vue";
import config from "./../config/collage.json";

export default defineComponent({
  name: "Svg",
  data: () => ({
    config,
  }),
});
</script>

<style scoped>
svg g {
  cursor: crosshair;
}
</style>
