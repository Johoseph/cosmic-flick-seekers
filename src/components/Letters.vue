<template>
  <div
    class="static absolute"
    :style="{
      width: `${config.width}`,
      top: `${config.top}`,
      left: `${config.left}`,
      background: `${getImgUrl(config.file)}`,
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
.static {
  background: url("./../assets/text/C(light).svg");
  height: 999px;
  background-repeat: no-repeat;
}
</style>
