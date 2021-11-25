<template>
  <Canvas />
</template>

<script>
import { defineComponent } from "vue";
import Canvas from "./components/Canvas.vue";

export default defineComponent({
  name: "App",
  components: {
    Canvas,
  },
});
</script>
