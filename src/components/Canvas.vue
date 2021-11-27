<template>
  <component :is="'style'" type="text/css">
    .img-move { top: {{ imgTop }}px; left: {{ imgLeft }}px; }
  </component>
  <div class="w-screen h-screen overflow-hidden relative">
    <img
      class="absolute object-cover object-center mw-auto mh-auto img-custom img-move"
      src="./../assets/background.jpg"
      role="presentation"
    />
  </div>
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
      console.log(e);
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
.img-custom {
  width: calc(100vw + 80px);
  height: calc(100vh + 80px);
  max-width: unset;
}
</style>
