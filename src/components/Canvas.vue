<template>
  <div
    class="background img-move w-screen h-screen overflow-hidden fixed flex justify-center"
    :style="{
      backgroundPositionX: `${imgLeft}px`,
      backgroundPositionY: `${imgTop}px`,
      backgroundSize: `${
        autoWidth ? `auto calc(100vh + 80px)` : `calc(100vw + 80px) auto`
      }`,
    }"
  >
    <div
      class="wrapper"
      :style="{
        right: `${imgLeft}px`,
        bottom: `${imgTop}px`,
        width: `${wrapDimensions.width}px`,
        height: `${wrapDimensions.height}px`,
      }"
    >
      <Collage />
      <div data-content="Cosmic Flick Seekers">
        <Letters
          v-for="letter in textConfig"
          :key="letter.id"
          :config="letter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Letters from "./Letters.vue";
import Collage from "./Collage.vue";
import textConfig from "../config/text.json";

const image = {
  ratio: 16 / 9,
  width: 1920,
  height: 1080,
  denominator: 9,
  padding: 40, // Pixel border (hidden off page)
};

const getAutoWidth = () =>
  image.ratio > document.body.clientWidth / document.body.clientHeight;

const getWrapperDimensions = (ratio) => ({
  height: document.body.clientHeight,
  width: document.body.clientHeight * ratio,
});

export default defineComponent({
  name: "Canvas",
  data: () => ({
    imgTop: -image.padding,
    imgLeft: -image.padding,
    autoWidth: true,
    wrapDimensions: {
      height: 1080,
      width: 1920,
    },
    textConfig,
  }),
  components: {
    Letters,
    Collage,
  },
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
      this.wrapDimensions = getWrapperDimensions(image.ratio);
    },
  },
  beforeMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  mounted() {
    this.autoWidth = getAutoWidth();
    this.wrapDimensions = getWrapperDimensions(image.ratio);
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

.wrapper {
  position: relative;
  flex-shrink: 0;
}
</style>
