<template>
  <div
    :data-content="`Day ${config.day}`"
    class="static-item absolute pointer-events-none"
    :style="{
      width: `${config.width}`,
      top: `${config.top}`,
      left: `${config.left}`,
      background: `url(${getImgUrl(config.day)})`,
    }"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Item",
  data: () => ({
    scale: 1,
  }),
  props: ["config"],
  methods: {
    getImgUrl(day) {
      const images = require.context("./../assets/collage/", false, /\.png$/);
      return images(`./${day}.png`);
    },
  },
});
</script>

<style scoped>
.static-item {
  background-repeat: no-repeat !important;
  background-size: 100% !important;
  height: 999px;
}
</style>
