<template>
  <div class="w-screen h-screen overflow-hidden relative">
    <img
      class="absolute object-cover object-center mw-auto mh-auto img-custom"
      v-on:mousemove="handleMouseMove($event)"
      src="./../assets/background.jpg"
      role="presentation"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Canvas",
  methods: {
    handleMouseMove(e) {
      console.log(e);
      console.log(this);
    },
  },
});
</script>

<style scoped>
.img-custom {
  width: calc(100vw + 80px);
  height: calc(100vh + 80px);
  top: -40px;
  left: -40px;
  max-width: unset;
}
</style>
