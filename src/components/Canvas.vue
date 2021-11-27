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
export default defineComponent({
  name: "Canvas",
  data: () => ({
    imgTop: -40,
    imgLeft: -40,
  }),
  methods: {
    handleMouseMove(e) {
      this.imgTop = -40 + e.clientY / 80;
      this.imgLeft = -40 + e.clientX / 80;
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
