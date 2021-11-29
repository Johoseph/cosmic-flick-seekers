<template>
  <div
    class="fixed rounded-full flex justify-center items-center w-12 h-12 text-xl z-50"
    :style="{
      top: `${position.top}`,
      left: `${position.left}`,
      width: `${tltpSize}`,
      height: `${tltpSize}`,
    }"
  >
    {{ day }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tooltip",
  props: ["day", "position", "tltpSize"],
});
</script>

<style scoped>
div {
  background: #393840eb;
}
</style>
