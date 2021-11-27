<template>
  <div
    class="background img-move w-screen h-screen overflow-hidden fixed"
    :style="{
      backgroundPositionX: `${imgLeft}px`,
      backgroundPositionY: `${imgTop}px`,
      backgroundSize: `${
        autoWidth ? `auto calc(100vh + 80px)` : `calc(100vw + 80px) auto`
      }`,
    }"
  />
  <!-- <div class="temp fixed w-screen h-screen" /> -->
</template>

<script>
import { defineComponent } from "vue";

const image = {
  ratio: 16 / 9,
  width: 1920,
  height: 1080,
  denominator: 9,
  padding: 40, // Pixels hidden off page
};

const getAutoWidth = () =>
  image.ratio > document.body.clientWidth / document.body.clientHeight;

export default defineComponent({
  name: "Canvas",
  data: () => ({
    imgTop: -image.padding,
    imgLeft: -image.padding,
    autoWidth: true,
  }),
  methods: {
    handleMouseMove(e) {
      let horizontalPosition = image.padding;

      // Calculate how much width is being 'cut off' by screen
      if (this.autoWidth) {
        const screenResolution =
          document.body.clientWidth / document.body.clientHeight;

        const actualImgWidth =
          (image.height / image.denominator) *
          (screenResolution * image.denominator);
        horizontalPosition = (image.width - actualImgWidth) / 2;
      }

      this.imgTop = -image.padding + e.clientY / (image.padding * 2);
      this.imgLeft = -horizontalPosition + e.clientX / (image.padding * 2);
    },
    handleResize() {
      this.autoWidth = getAutoWidth();
    },
  },
  beforeMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  mounted() {
    this.autoWidth = getAutoWidth();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("resize", this.handleResize);
  },
});
</script>

<style scoped>
.background {
  background: url("./../assets/background.jpg");
  background-repeat: no-repeat;
}

.temp {
  background: url("./../assets/temp-for-placement.png");
  background-repeat: no-repeat;
  background-size: auto calc(100vh + 80px);
  background-position: center;
}
</style>
