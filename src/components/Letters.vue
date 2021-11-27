<template>
  <div
    class="static-letter absolute z-50"
    :style="{
      width: `${config.width}`,
      top: `${config.top}`,
      left: `${config.left}`,
      background: `url(${getImgUrl(config.file)})`,
      transform: `scale(${scale})`,
    }"
    v-on:mouseover="this.handleHover"
    v-on:mouseleave="this.handleLeave"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Canvas",
  data: () => ({
    scale: 1,
  }),
  props: ["config"],
  methods: {
    getImgUrl(letter) {
      const images = require.context("./../assets/text/", false, /\.svg$/);
      return images(`./${letter}`);
    },
    handleHover(e) {
      const letterPos = e.target.getBoundingClientRect();

      if (e.clientY - letterPos.y <= 115) this.scale = 1.1;
    },
    handleLeave() {
      this.scale = 1;
    },
  },
});
</script>

<style scoped>
.static-letter {
  /* display: none; */
  height: 700px;
  background-repeat: no-repeat !important;
  transition: transform 800ms cubic-bezier(0.17, 0.67, 0.64, 0.92);
}
</style>
