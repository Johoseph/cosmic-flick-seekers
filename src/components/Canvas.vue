<template>
  <div
    class="div-custom img-move w-screen h-screen overflow-hidden fixed"
    :style="{
      backgroundPositionX: `${imgLeft}px`,
      backgroundPositionY: `${imgTop}px`,
    }"
  />
</template>

<script>
import { defineComponent } from "vue";

const IMG_PADDING = 40;

export default defineComponent({
  name: "Canvas",
  data: () => ({
    imgTop: -IMG_PADDING,
    imgLeft: -IMG_PADDING,
  }),
  methods: {
    handleMouseMove(e) {
      this.imgTop = -IMG_PADDING + e.clientY / (IMG_PADDING * 2);
      this.imgLeft = -IMG_PADDING + e.clientX / (IMG_PADDING * 2);
    },
  },
  beforeMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
});
</script>

<style scoped>
.div-custom {
  background: url("./../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: calc(100vw + 80px) calc(100vh + 80px);
}
</style>
