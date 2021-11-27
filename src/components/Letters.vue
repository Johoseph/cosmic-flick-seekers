<template>
  <div
    class="static-letter absolute z-50"
    :style="{
      width: `${config.width}`,
      top: `${config.top}`,
      left: `${config.left}`,
      background: `url(${getImgUrl(config.file)})`,
    }"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Canvas",
  props: ["config"],
  methods: {
    getImgUrl(letter) {
      const images = require.context("./../assets/text/", false, /\.svg$/);
      return images(`./${letter}`);
    },
  },
});
</script>

<style scoped>
.static-letter {
  /* display: none; */
  height: 999px;
  background-repeat: no-repeat !important;
  transform: scale(1);
  transition: transform 800ms cubic-bezier(0.17, 0.67, 0.64, 0.92);
}

.static-letter:hover {
  transform: scale(1.1);
}
</style>
