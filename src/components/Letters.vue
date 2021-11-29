<template>
  <div
    class="static-letter absolute z-40"
    :style="{
      width: `${config.width}`,
      top: `${top}`,
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
    handleHover() {
      const topInt = parseFloat(this.top.replace("%", ""), 10);

      this.top = `${topInt - 4}%`;
      this.scale = 1.1;
    },
    handleLeave() {
      const topInt = parseFloat(this.top.replace("%", ""), 10);

      this.top = `${topInt + 4}%`;
      this.scale = 1;
    },
  },
  beforeCreate() {
    this.top = this.config.top;
  },
});
</script>

<style scoped>
.static-letter {
  /* display: none; */
  height: 115px;
  background-repeat: no-repeat !important;
  transition: transform 800ms cubic-bezier(0.17, 0.67, 0.64, 0.92),
    top 800ms cubic-bezier(0.17, 0.67, 0.64, 0.92);
}
</style>
